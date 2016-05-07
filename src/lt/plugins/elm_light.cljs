(ns lt.plugins.elm-light
  (:require [lt.plugins.elm-light.selection :as elm-sel]
            [lt.plugins.elm-light.utils :refer [find-symbol project-path reactor-path parse-json-file]]
            [lt.plugins.elm-light.clients :refer [try-connect get-eval-client]]
            [lt.object :as object]
            [lt.objs.command :as cmd]
            [lt.objs.editor.pool :as pool]
            [lt.objs.editor :as editor]
            [lt.objs.tabs :as tabs]
            [lt.objs.notifos :as notifos]
            [lt.objs.console :as console]
            [lt.objs.clients :as clients]
            [lt.objs.popup :as popup]
            [lt.objs.dialogs :as dialogs]
            [lt.objs.files :as files]
            [lt.objs.browser :as browser]
            [lt.objs.eval :as eval]
            [lt.objs.sidebar.clients :as scl]
            [lt.plugins.auto-complete :as auto-complete]
            [lt.util.js :as js-util]
            [clojure.string :as s])
  (:require-macros [lt.macros :refer [behavior]]))




(behavior ::elm-unsupported
          :triggers #{:elm.unsupported}
          :reaction (fn [_ res]
                      (notifos/done-working)
                      (notifos/set-msg! (:err res) {:class "error"})))


(defn colorize-msg [msg]
  (-> msg
      (s/replace #"\[\d+m" "")
      (s/replace #"\[0m" "")))


(defn ->lt-range [{:keys [start end]}]
  {:from {:ch (dec (:column start)) :line (dec (:line start))}
   :to   {:ch (dec (:column end)) :line (dec (:line end))}})



(defn linter-action [ed row]
  (case (:tag row)
    "unused import" [{:text "Remove"
                      :action (fn [_ {:keys [from to]}]
                                (editor/replace ed from to "")
                                (js/CodeMirror.commands.deleteLine (editor/->cm-ed ed)))}]

    "missing type annotation" [{:text "Add"
                                :action (fn [{:keys [details]} {:keys [from]}]
                                          (let [ann (-> (re-find #"(?m)I inferred the type annotation so you can copy it into your code:([\s\S]*$)" details)
                                                        second
                                                        s/trim
                                                        (str "\n"))]
                                            (editor/replace ed from ann)))}]
    "NAMING ERROR" (let [fixes (->> (re-find #"(?m)Maybe you want one of the following\?(:?[\s\S]*$)" (:details row))
                                    second
                                    (s/split-lines)
                                    (map s/trim)
                                    (filter seq))]
                     (map
                       (fn [suggestion]
                         {:text suggestion
                          :action (fn [_ {:keys [from to]}]
                                    (editor/replace ed from to suggestion))})
                       fixes))

    []))




(defn display-make-results [ed res path]
  (object/raise ed :clear-linter-results!)
  (when (seq (filter #(= "error" (:type %)) res))
    (notifos/set-msg! "Elm make returned errors; check you editor or the console for details"
                      {:class "error"}))

  (doseq [{:keys [file type overview details region subregion tag] :as row} res]
    (let [msg (str overview "\n" (colorize-msg details))]
      (cond
       (and (= path file)
            (some #{"warning" "error"} [type]))
       (object/raise ed :linter-result! {:title tag
                                         :details msg
                                         :category (keyword type)
                                         :actions (linter-action ed row)
                                         :code-range (->lt-range (or subregion region))})

       :else (console/verbatim
              (list [:em.file file] [:em.line "[Elm error]"] ": " [:pre overview]) "error")))))




(behavior ::lint
          :description "Lint (/make) a given elm file"
          :triggers #{:lint}
          :reaction (fn [ed result-handler-trigger]
                      (let [info (:info @ed)
                            cl (get-eval-client ed :editor.elm.lint)]
                        (notifos/working (str "Starting elm linting of: " (:path info)))
                        (clients/send cl
                                      :editor.elm.lint
                                      (assoc info :project-path (project-path (:path info))
                                                  :handler (name result-handler-trigger))
                                      :only ed))))




(behavior ::elm-lint-res
          :triggers #{:elm.lint.res}
          :reaction (fn [ed res]
                      (let [path (-> @ed :info :path)]
                        (notifos/done-working "Elm linted")
                        (display-make-results ed res path))))



(behavior ::make
          :description "Make (to js) a given elm file"
          :triggers #{:elm.make}
          :reaction (fn [ed]
                      (let [info (:info @ed)
                            cl (get-eval-client ed :editor.elm.make)]
                        (notifos/working (str "Starting elm make for: " (:path info)))
                        (clients/send cl
                                      :editor.elm.make (assoc info :project-path (project-path (:path info)))
                                      :only ed))))


(defn missing-make-info-popup []
  (popup/popup! {:header "You need to configure make info for your project"
                 :body (str "You configure a key \"make-info\" in your elm-package.json
                              Example:
                             \"make-info\": {\"main\": \"src/Main.elm\", \"out\": \"dist/main.js\"}")
                 :buttons [{:label "Ok"}]}))

(behavior ::make-project
          :description "Make Elm Project"
          :triggers #{:elm.make-project}
          :reaction (fn [ed]
                      (let [info (:info @ed)
                            project-path (project-path (:path info))
                            {:keys [main out]} (-> project-path
                                                   (files/join "elm-package.json")
                                                   parse-json-file
                                                   :make-info)]
                        (if (and main out)
                          (do
                            (notifos/working (str "Starting elm make for project: " project-path))
                            (clients/send (get-eval-client ed :editor.elm.make)
                                          :editor.elm.make
                                          (assoc info :project-path project-path
                                                      :path (files/join project-path main)
                                                      :outputFile (files/join project-path out))
                                          :only ed))
                          (missing-make-info-popup)))))


(behavior ::elm-make-res
          :triggers #{:elm.make.res}
          :reaction (fn [ed {:keys [outputFile res]}]
                      (notifos/done-working (str "Elm make compiled to: " outputFile))
                      (display-make-results ed res path)))


(behavior ::elm-make-err
          :triggers #{:elm.make.err}
          :reaction (fn [ed res]
                      (let [path (-> @ed :info :path)]
                        (notifos/done-working "")
                        (notifos/set-msg! (str "Elm make error: " res) {:class "error"})
                        (console/error res))))



(behavior ::connect
          :triggers #{:connect}
          :reaction (fn [this path]
                      (try-connect {:info {:path path}})))



;;****************************************************
;; DOCS
;;****************************************************

(behavior ::elm-doc-search
          :triggers #{:types+}
          :reaction (fn [this cur]
                      (conj cur {:label "elm" :trigger :docs.elm.search :file-types #{"elm"}})))


(behavior ::elm-doc
          :triggers #{:editor.doc}
          :reaction (fn [ed]
                      (let [pos (editor/->cursor ed)
                            token (find-symbol ed pos)
                            command :editor.elm.doc
                            info (assoc (@ed :info)
                                   :loc pos
                                   :sym token)]
                        (when token
                          (clients/send (get-eval-client ed command)
                                        command info :only ed)))))

(behavior ::print-elm-doc
          :triggers #{:editor.elm.doc.result}
          :reaction (fn [ed result]
                      (notifos/done-working)
                      (if-not result
                        (notifos/set-msg! "No docs found." {:class "error"})
                        (object/raise ed :editor.doc.show! result))))



;;****************************************************
;; Eval
;;****************************************************



(behavior ::on-eval.one
          :desc "Elm repl: Eval current selection"
          :triggers #{:eval.one}
          :reaction (fn [ed]
                      (let [pos (editor/->cursor ed)
                            info (conj (:info @ed)
                                       (if (editor/selection? ed)
                                         {:code (editor/selection ed) :meta {:start (-> (editor/->cursor ed "start") :line)
                                                                             :end (-> (editor/->cursor ed "end") :line)}}
                                         (if-let [rng (elm-sel/get-top-level-expr ed pos)]
                                           {:pos pos
                                            :code (editor/range ed (:from rng) (:to rng))
                                            :meta {:start (-> rng :from :line)
                                                    :end (-> rng :end :line)}}
                                           {:pos pos
                                            :code (editor/line ed (:line pos))
                                            :meta {:start (:line pos) :end (:line pos)}})))]
                        (object/raise elm :eval! {:origin ed :info info}))))


(behavior ::eval!
          :triggers #{:eval!}
          :reaction (fn [this event]
                      (let [{:keys [info origin]} event]
                        (notifos/working "Evaluating elm...")
                        (clients/send (eval/get-client! {:command :editor.eval.elm
                                                         :origin origin
                                                         :info info
                                                         :create try-connect})
                                      :editor.eval.elm info
                                      :only origin))))

(behavior ::eval-result
          :desc "Elm repl: Eval result"
          :triggers #{:editor.elm.eval.res}
          :reaction (fn [ed res]
                      (notifos/done-working "Elm evaluated")
                      (object/raise ed
                                    :editor.result
                                    (:result res)
                                    {:line (-> res :meta :start)})))


(behavior ::eval-err
          :desc "Elm repl: Eval error"
          :triggers #{:editor.elm.eval.err}
          :reaction (fn [ed res]
                      (notifos/done-working)
                      (notifos/set-msg! "Elm eval reported errors." {:class "error"})
                      (object/raise ed
                                    :editor.exception
                                    (:result res)
                                    {:line (-> res :meta :start)})))



(behavior ::repl-restart!
          :triggers #{:elm.repl.restart}
          :reaction (fn [{:keys [info] :as ed}]
                      (when-let [default-client (-> @ed :client :default)] ;; dont if not already connected
                        (when @default-client
                          (notifos/working "Restaring elm-repl...")
                          (clients/send default-client
                                        :elm.repl.restart info
                                        :only ed)))))

(behavior ::repl-restart-res
          :triggers #{:elm.repl.restart.res}
          :reaction (fn [ed res]
                      (notifos/done-working "Elm Repl restarted")))



;TODO : Make debug optional !
(behavior ::elm-browse!
          :triggers #{:elm.browse}
          :reaction (fn [ed debug?]
                      (let [path (reactor-path (-> @ed :info :path))
                            client (get-eval-client ed :editor.eval.elm)]
                        (when (and client path)
                          (notifos/working "Opening elm file in browser")
                          (let [b (or (first (object/by-tag :browser))
                                      (browser/add))
                                get-url #(str "http://localhost:" (:reactor-port @client) path (if debug? "?debug" ""))]

                            (if (:connected @client)
                              (object/raise b :navigate! (get-url))
                              (js-util/wait 100 #(object/raise b :navigate! (get-url)))))
                          (notifos/done-working)))))



(object/object* ::elm-lang
                :tags #{:elm.lang})


(def elm (object/create ::elm-lang))


(scl/add-connector {:name "Elm"
                    :desc "Select a directory to serve as the root of your elm project."
                    :connect (fn []
                               (dialogs/dir elm :connect))})


;; Commands
(cmd/command {:command :elm.lint
              :desc "Elm: Lint selected file"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :lint :elm.lint.res)))})

(cmd/command {:command :elm.make
              :desc "Elm: Make selected file"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :elm.make)))})

(cmd/command {:command :elm.make-project
              :desc "Elm: Make current project"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :elm.make-project)))})


(cmd/command {:command :elm.browse
              :desc "Elm: View current elm file in browser (elm-reactor)"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :elm.browse false)))})

(cmd/command {:command :elm.browse.debug
              :desc "Elm: View current elm file in browser with debugger (elm-reactor)"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :elm.browse true)))})

(cmd/command {:command :elm.restart-repl
              :desc "Elm: Restart repl for current project"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :elm.repl.restart)))})



(cmd/command {:command :elm.select.top.level
              :desc "Elm: Select top level expression from current cursor position"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (when-let [rng (elm-sel/get-top-level-expr ed (editor/->cursor ed))]
                          (editor/set-selection ed (:from rng) (:to rng)))))})
