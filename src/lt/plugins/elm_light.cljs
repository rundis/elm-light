(ns lt.plugins.elm-light
  (:require [lt.plugins.elm-light.selection :as elm-sel]
            [lt.plugins.elm-light.utils :refer [find-symbol project-path reactor-path]]
            [lt.plugins.elm-light.clients :refer [try-connect]]
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

(defn display-make-results [ed res path]
  (object/raise ed :clear-linter-results!)
  (when (seq (filter #(= "error" (:type %)) res))
    (notifos/set-msg! "Elm make returned errors; check you editor or the console for details"
                      {:class "error"}))

  ;(prn res)
  (doseq [{:keys [file type overview details region subregion tag]} res]
    (let [{:keys [from to]} (->lt-range region)
          msg (str overview "\n" (colorize-msg details))]

      (cond
       (and (= path file) (= type "warning"))
       (object/raise ed :linter-result! {:title tag
                                         :details msg
                                         :category :warning
                                         :code-range (->lt-range (or subregion region))})

       (and (= path file) (= type "error"))
       (object/raise ed :linter-result! {:titshle tag
                                         :details msg
                                         :category :error
                                         :code-range (->lt-range (or subregion region))})

       :else (console/verbatim
              (list [:em.file file] [:em.line "[Elm error]"] ": " [:pre overview]) "error")))))



(behavior ::lint
          :description "Lint (/make) a given elm file"
          :triggers #{:lint}
          :reaction (fn [ed]
                      (let [info (:info @ed)
                            cl (eval/get-client! {:command :editor.elm.lint
                                                  :origin ed
                                                  :info info
                                                  :create try-connect})]
                        (notifos/working (str "Starting elm linting of: " (:path info)))
                        (clients/send cl
                                      :editor.elm.lint (assoc info :project-path (project-path (:path info)))
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
                            cl (eval/get-client! {:command :editor.elm.make
                                                  :origin ed
                                                  :info info
                                                  :create try-connect})]
                        (notifos/working (str "Starting elm make for: " (:path info)))
                        (clients/send cl
                                      :editor.elm.make (assoc info :project-path (project-path (:path info)))
                                      :only ed))))
(behavior ::elm-make-res
          :triggers #{:elm.make.res}
          :reaction (fn [ed res]
                      (let [path (-> @ed :info :path)]
                        (notifos/done-working (str "Elm make completed for: " path))
                        (display-make-results ed res path))))



;;****************************************************
;; autocomplete
;;****************************************************

(behavior ::trigger-update-hints
          :triggers #{:editor.elm.hints.update!}
          :debounce 100
          :reaction (fn [ed res]
                      (when-let [default-client (-> @ed :client :default)] ;; dont if not already connected
                        (when @default-client
                          (let [info (:info @ed)
                                command :editor.elm.hint
                                token (::token @ed)]
                            (clients/send (eval/get-client! {:command command
                                                             :info info
                                                             :origin ed
                                                             :create try-connect})
                                          command (assoc info :token token) :only ed))))))



(js/CodeMirror.extendMode "elm" (clj->js {:hint-pattern #"[\w_\.]"}))

(defn- maybe-trim-prefix [token completion]
  (if (> (.indexOf "." token) -1)
    (last (s/split comletion "."))
    completion))

(defn create-hints [token completions]
  (map #(do #js {:completion (maybe-trim-prefix token (:completion %))
                 :text (:text %)})
       completions))

(behavior ::finish-update-hints
          :triggers #{:editor.elm.hints.result}
          :reaction (fn [ed res]
                      (when [res]
                        (object/merge! ed {::hints (create-hints (::token ed) res)})
                        (object/raise auto-complete/hinter :refresh!))
                      (notifos/done-working)))

(behavior ::use-local-hints
          :triggers #{:hints+}
          :reaction (fn [ed hints _]
                      (let [token (find-symbol ed (editor/->cursor ed))]
                        (when (not= token (::token @ed))
                         (object/merge! ed {::token token})
                         (object/raise ed :editor.elm.hints.update!)))
                      (if-let [elm-hints (::hints @ed)]
                        (concat elm-hints hints)
                        hints)))


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
                          (clients/send (eval/get-client! {:command command
                                                           :info info
                                                           :origin ed
                                                           :create try-connect})
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
                                         (if-let [rng (elm-sel/get-top-level-expr ed pos )]
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
                            client (eval/get-client! {:command :editor.eval.elm
                                                      :origin ed
                                                      :info (:info @ed)
                                                      :create try-connect})]
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
                        (object/raise ed :lint)))})

(cmd/command {:command :elm.make
              :desc "Elm: Make selected file"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :elm.make)))})

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


;;****************************************************
;; Anonymous repl
;;****************************************************



(behavior ::on-focus-repl-ed
          :triggers #{:focus!}
          :reaction (fn [this]
                      (when (:main @this)
                        (object/raise (:main @this) :focus!))))


(behavior ::repl-destroy-on-close
          :triggers #{:close}
          :reaction (fn [this]
                      (object/raise (:main @this) :close)
                      (object/destroy! this)))

(behavior ::repl-close-parent
          :triggers #{:destroy}
          :reaction (fn [this]
                      (object/destroy! (:frame @this))))

(behavior ::on-show-repl-refresh-eds
          :triggers #{:show}
          :reaction (fn [this]
                      (when (:main @this)
                        (object/raise (:main @this) :show)
                        (object/raise (:main @this) :refresh!)
                        (editor/focus (:main @this)))))

(object/object* ::elmrepl
                :tags #{:elmrepl}
                :name "elmrepl"
                :live true
                :init (fn [this]
                        (let [main (-> (pool/create {:mime "text/x-elm" :content "" :ns "user"})
                                       (object/remove-tags [:editor.elm])
                                       (object/add-tags [:editor.elm.repl :editor.transient]))]
                          (object/merge! main {:frame this})
                          (editor/clear-history main)
                          (object/merge! main {:dirty false
                                               :editor.generation (editor/->generation main)})
                          (object/merge! this {:main main
                                               :dirty false})
                          (editor/+class main :main)
                          (editor/move-cursor main {:line 0 :ch 0})
                          [:div
                           (object/->content main)])))


(defn add-repl []
  (let [elmrepl (object/create ::elmrepl)]
    (tabs/add! elmrepl)
    (tabs/active! elmrepl)
    elmrepl))

(cmd/command {:command :elmrepl
              :desc "Elm repl: Open a elm repl"
              :exec (fn []
                      (add-repl))})




;; ****************************************************
;; Elm format
;; ****************************************************
(behavior ::elm-format
          :triggers #{:elm.format}
          :reaction (fn [ed]
                      (when-let [path (-> @ed :info :path)]
                        (let [pos (editor/->cursor ed)
                              cmd (str "elm-format --yes " path)]
                          (try
                            (.execSync (js/require "child_process")
                                       cmd
                                       (clj->js {:cwd (project-path path)
                                                 :stdio "pipe"}))
                            (catch :default e
                              (notifos/set-msg! "Elm format reported errors. See console for details" {:class "error" :timeout 5000})
                              (console/error (.-message e))))
                          (pool/reload ed)
                          (editor/move-cursor ed pos)))))

(cmd/command {:command :elm-format
              :desc "Elm: Format file"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :elm.format)))})
