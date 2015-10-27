(ns lt.plugins.elm-light
  (:require [lt.object :as object]
            [lt.objs.command :as cmd]
            [lt.objs.editor.pool :as pool]
            [lt.objs.editor :as editor]
            [lt.objs.notifos :as notifos]
            [lt.objs.console :as console]
            [lt.objs.clients :as clients]
            [lt.objs.clients.tcp :as tcp]
            [lt.objs.proc :as proc]
            [lt.objs.popup :as popup]
            [lt.objs.dialogs :as dialogs]
            [lt.objs.files :as files]
            [lt.objs.plugins :as plugins]
            [lt.objs.browser :as browser]
            [lt.objs.eval :as eval]
            [lt.objs.sidebar.clients :as scl]
            [lt.plugins.auto-complete :as auto-complete])
  (:require-macros [lt.macros :refer [behavior]]))



(def elm-plugin-dir (plugins/find-plugin "elm-light"))
(def elm-cilent-path (files/join elm-plugin-dir "node" "elm-client.js"))


(defn symbol-token? [s]
  (re-seq #"[\w\$_\-\.\*\+\/\?\><!]" s))

(defn find-symbol-at-cursor [ed]
  (let [loc (editor/->cursor ed)
        token-left (editor/->token ed loc)
        token-right (editor/->token ed (update-in loc [:ch] inc))]
    (or (when (symbol-token? (:string token-right))
          (assoc token-right :loc loc))
        (when (symbol-token? (:string token-left))
          (assoc token-left :loc loc)))))


(defn find-symbol [ed pos]
  (let [curr-tok (editor/->token ed pos)]
    (case (:type curr-tok)
      "qualifier" (str (find-symbol ed (assoc pos :ch (:start curr-tok))) (:string curr-tok))
      "variable" (str (find-symbol ed (assoc pos :ch (:start curr-tok))) (:string curr-tok))
      "")))



(defn- project-path [path]
  (if (files/dir? path)
    path
    (if-let [pkg-json (files/walk-up-find path "elm-package.json")]
      (files/parent pkg-json)
      nil ;(files/parent path)
      )))

(defn reactor-path [path]
  (let [root (project-path path)]
    (when (= (.indexOf path root) 0)
      (subs path (count root)))))


;(reactor-path "/Users/mrundberget/projects/elm-lang.org/src/examples/mario.elm")

(behavior ::on-out
          :triggers #{:proc.out}
          :reaction (fn [this data]
                      (let [out (.toString data)]
                        (if (> (.indexOf out "Connected") -1)
                          (do
                            (notifos/done-working)
                            (object/merge! this {:connected true}))
                          (do
                            (println out))))))

(behavior ::on-error
          :triggers #{:proc.error}
          :reaction (fn [this data]
                      (let [out (.toString data)]
                        (when-not (> (.indexOf (:buffer @this) "Connected") -1)
                          (do
                            (println out)
                            (object/update! this [:buffer] str data))))))

(behavior ::on-exit
          :triggers #{:proc.exit}
          :reaction (fn [this data]
                      (when-not (:connected @this)
                        (notifos/done-working)
                        ;; hm seems to enter here even when we exit using the disconnect button in the side connect bar
;;                         (popup/popup! {:header "We couldn't connect."
;;                                        :body [:span "Looks like there was an issue trying to connect
;;                                               to the project. Here's what we got:" [:pre (:buffer @this)]]
;;                                        :buttons [{:label "close"}]})
                        (clients/rem! (:client @this)))
                      (proc/kill-all (:procs @this))
                      (object/destroy! this)))

(object/object* ::connecting-notifier
                :triggers []
                :behaviors [::on-exit ::on-error ::on-out]
                :init (fn [this client]
                        (object/merge! this {:client client :buffer ""})
                        nil))

(defn- escape-spaces [s]
  (if (= files/separator "\\")
      (str "\"" s "\"")
      s))

(defn- bash-escape-spaces [s]
  (when s (clojure.string/replace s " " "\\ ")))

(defn start-elm-client[{:keys [path proj-path client] :as props}]
  (let [obj (object/create ::connecting-notifier client)
        client-id (clients/->id client)]
    (notifos/working "Connecting..")
    (proc/exec {:command js/process.execPath
                :args [elm-cilent-path tcp/port client-id (-> proj-path bash-escape-spaces) "--harmony_destructuring"]
                :cwd elm-plugin-dir
                :env {"ATOM_SHELL_INTERNAL_RUN_AS_NODE" 1}
                :obj obj})
    (object/merge! client {:dir proj-path})))



(defn try-connect [{:keys [info] :as props}]
  (let [path (:path info)
        proj-path (project-path path)]

    (if proj-path
      (let [client (clients/client! :elm-client)]
        (start-elm-client {:path path
                           :proj-path proj-path
                           :client client})
        client)
      (console/error (str "Couldn't find a elm-package.json in any parent of " path)))



    ;; TODO: Introduce some sanity checks for elm installation etc
    ;;     (check-all {:path path
    ;;                 :client client})
    ))



(behavior ::elm-unsupported
          :triggers #{:elm.unsupported}
          :reaction (fn [_ res]
                      (notifos/done-working)
                      (notifos/set-msg! (:err res) {:class "error"})))


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

                        (doseq [l (filter #(and (= path (:file %)) (= "warning" (:type %))) res)]
                          (object/raise ed
                                        :editor.result
                                        (str (:overview l) "\n" (:details l)) {:line (-> l :region :start :line dec)}))
                        (doseq [l (filter #(= "error" (:type %)) res)]
                          (if (= path (:file l))
                            (object/raise ed
                                          :editor.exception
                                          (str (:overview l) "\n" (:details l)) {:line (-> l :region :start :line dec)})

                            (let [out (:overview l)]
                                (console/verbatim
                                   (list [:em.file (:file l)] [:em.line "[Elm error]"] ": " [:pre out])
                                   "error")))))))


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



(defn create-hints [completions]
  (map #(do #js {:completion (:completion %)
                 :text (:text %)})
       completions))

(behavior ::finish-update-hints
          :triggers #{:editor.elm.hints.result}
          :reaction (fn [ed res]
                      (when [res]
                        (object/merge! ed {::hints (create-hints res)})
                        (object/raise auto-complete/hinter :refresh!))
                      (notifos/done-working)))

(behavior ::use-local-hints
          :triggers #{:hints+}
          :reaction (fn [ed hints token]
                      (when (not= token (::token @ed))
                        (object/merge! ed {::token token})
                        (object/raise ed :editor.elm.hints.update!))
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
                                    {:pos pos :code (editor/line ed (:line pos)) :meta {:start (:line pos) :end (:line pos)}}))]
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







(behavior ::elm-browse!
          :triggers #{:elm.browse}
          :reaction (fn [ed]
                      (when-let [path (reactor-path (-> @ed :info :path))]
                        (notifos/working "Opening elm file in browser")
                        ;; just to ensure we are connected
                        (eval/get-client! {:command :editor.eval.elm
                                           :origin ed
                                           :info (:info @ed)
                                           :create try-connect})
                        (let [b (or (first (object/by-tag :browser))
                                    (browser/add))]
                          (object/raise b :navigate! (str "http://localhost:8000" path "?debug")))
                        (notifos/done-working))))



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

(cmd/command {:command :elm.browse
              :desc "Elm: View current elm file in browser (elm-reactor)"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :elm.browse)))})

(cmd/command {:command :elm.restart-repl
              :desc "Elm: Restart repl for current project"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :elm.repl.restart)))})



(defn get-top-level-expr [ed pos]
  (let [curr-tok (editor/->token ed pos)]
    (println "Curr tok: " curr-tok)
    (case (:type curr-tok)
      "qualifier" (str (get-top-level-expr ed (assoc pos :ch (:start curr-tok))) (:string curr-tok))
      "variable" (str (get-top-level-expr ed (assoc pos :ch (:start curr-tok))) (:string curr-tok))
      "")))



(cmd/command {:command :elm.select.top.level
              :desc "Elm: Select top level expression from current cursor position"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (let [[res client] (clients/discover :editor.eval.elm (:info ed))]
                          (println res))
                        ;(println (get-top-level-expr ed (editor/->cursor ed)))
                        ))})






