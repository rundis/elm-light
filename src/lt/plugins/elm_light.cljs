(ns lt.plugins.elm-light
  (:require [lt.plugins.elm-light.selection :as elm-sel]
            [lt.plugins.elm-light.utils :refer [find-symbol project-path reactor-path]]
            [lt.object :as object]
            [lt.objs.command :as cmd]
            [lt.objs.editor.pool :as pool]
            [lt.objs.editor :as editor]
            [lt.objs.tabs :as tabs]
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
            [lt.plugins.auto-complete :as auto-complete]
            [lt.util.js :as js-util])
  (:require-macros [lt.macros :refer [behavior]]))



(def elm-plugin-dir (plugins/find-plugin "elm-light"))
(def elm-cilent-path (files/join elm-plugin-dir "node" "elm-client.js"))



(def harbor
  ((js/require "harbor") 3000, 4000))


(defn claim-reactor-port [path cb]
  (.claim harbor path cb))

(defn release-reactor-port [path]
  (.release harbor path))



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
                        (if-not (:connected @this)
                          (object/update! this [:buffer] str data)
                          (console/error out)))))


(behavior ::on-exit
          :triggers #{:proc.exit}
          :reaction (fn [this data]
                      (when (and (not (:connected @this)) (seq (:buffer @this)))
                        (notifos/done-working)
                        ;; hm seems to enter here even when we exit using the disconnect button in the side connect bar
                        (popup/popup! {:header "We couldn't connect."
                                       :body [:span "Looks like there was an issue trying to connect
                                              to the project. Here's what we got:" [:pre (:buffer @this)]]
                                       :buttons [{:label "close"}]})
                        (clients/rem! (:client @this)))
                      (when-let [client (:client @this)]
                        (release-reactor-port (:dir @client)))
                      (proc/kill-all (:procs @this))
                      (object/destroy! this)))

(object/object* ::connecting-notifier
                :triggers []
                :behaviors [::on-exit ::on-error ::on-out]
                :init (fn [this client]
                        (object/merge! this {:client client :buffer ""})
                        nil))


(defn- bash-escape-spaces [s]
  (when s (clojure.string/replace s " " "\\ ")))


; TODO: Release used port later on when possible !
(defn start-elm-client[{:keys [path proj-path client] :as props}]
  (let [obj (object/create ::connecting-notifier client)
        client-id (clients/->id client)]
    (notifos/working "Connecting..")
    (claim-reactor-port
     proj-path (fn [err port]
                 (object/merge! client {:dir proj-path
                                        :reactor-port port})
                 (proc/exec {:command js/process.execPath
                             :args [elm-cilent-path tcp/port client-id (-> proj-path bash-escape-spaces) port]
                             :cwd elm-plugin-dir
                             :env {"ATOM_SHELL_INTERNAL_RUN_AS_NODE" 1}
                             :obj obj})))))



(defn try-connect [{:keys [info] :as props}]
  (let [path (:path info)
        proj-path (project-path path)
        client (clients/client! :elm-client)]

    (if proj-path
      (start-elm-client {:path path
                         :proj-path proj-path
                         :client client})

      (do
        (notifos/done-working)
        (notifos/set-msg! (str "Couldn't find a elm-package.json in any parent of path: " path) {:class "error"})
        (clients/rem! client)))
    client))



(behavior ::elm-unsupported
          :triggers #{:elm.unsupported}
          :reaction (fn [_ res]
                      (notifos/done-working)
                      (notifos/set-msg! (:err res) {:class "error"})))



(defn display-make-results [ed res path]
  (when (seq (filter #(= "error" (:type %)) res))
    (notifos/set-msg! "Elm make returned errors; check you editor or the console for details"
                      {:class "error"}))


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
                                   "error")))))

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
                        (when (seq (filter #(= "error" (:type %)) res))
                          )
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
;; Enhancements to be contributed to LT core
;; ****************************************************


(defn block-comment [ed from to opts]
  (.blockComment (editor/->cm-ed ed) (clj->js from) (clj->js to) (clj->js opts)))

(cmd/command {:command :toggle-comment-selection-block-aware
              :desc "Editor: Toggle comment line(s) block aware"
              :exec (fn []
                      (when-let [cur (pool/last-active)]
                        (let [cursor (editor/->cursor cur "start")
                              [start end] (if (editor/selection? cur)
                                            [cursor (editor/->cursor cur "end")]
                                            [cursor cursor])]
                          (when-not (editor/uncomment cur start end)
                            (if-not (= (:line start) (:line end))
                              (block-comment cur cursor end (::comment-options @cur))
                              (editor/line-comment cur cursor (editor/->cursor cur "end") (::comment-options @cur)))))))})



