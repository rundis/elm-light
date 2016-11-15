(ns lt.plugins.elm-light.clients
  (:require [lt.plugins.elm-light.utils :as u]
            [lt.plugins.elm-light.elm-ast :as ast]
            [lt.objs.files :as files]
            [lt.object :as object]
            [lt.objs.console :as console]
            [lt.objs.notifos :as notifos]
            [lt.objs.clients :as cs]
            [lt.objs.proc :as proc]
            [lt.objs.eval :as eval]
            [lt.objs.editor.pool :as pool]
            [lt.objs.dialogs :as dialogs]
            [lt.objs.sidebar.clients :as scl]
            [lt.objs.popup :as popup]
            [lt.objs.platform :as platform]
            [clojure.string :as s])
  (:require-macros [lt.macros :refer [behavior]]))

(def cp (js/require "child_process"))
(def os (js/require "os"))
(def elm-client-path (files/join u/elm-plugin-dir "node/elm-client.js"))
(def elm-node-path (files/join u/elm-plugin-dir "node_modules"))
(def shelljs (js/require (files/join elm-node-path "shelljs")))



(defn get-elm-version []
  (try
    (.toString (.execSync cp "elm --version"))
    (catch :default e
      (console/error "elm command not found in path")
      nil)))








(declare elm)

(def harbor
  ((js/require (files/join elm-node-path "harbor")) 3000, 4000))

(defn claim-reactor-port [path cb]
  (.claim harbor path cb))

(defn release-reactor-port [path]
  (.release harbor path))


(defn on-exit [client]
  (ast/delete-project-ast! (:dir @client))
  (doseq [ed (pool/containing-path (:dir @client))]
          (object/raise ed :project-disconnected))
  (release-reactor-port (:dir @client))
  (cs/rem! client))



(defn on-elm-message [client data]
  (let [msg (u/mod-js->clj data :keywordize-keys true)
        logTime (js/Date.)
        logPrefix (str (.getSeconds logTime) ":" (.getMilliseconds logTime) " >>")]
    (cond

      (= (second msg) "elm.client.connected")
      (do
        (notifos/done-working (str "Project connected: " (:dir @client)))
        (object/raise client :connect)
        (object/raise cs/clients :connect client)
        (doseq [ed (pool/containing-path (:dir @client))]
          ;(println "Raise connected : " (-> @ed :info :path))
          (object/raise ed :project-connected)))

      (= (second msg) "elm.ast.update")
      (let [{:keys [file type ast error package]} (last msg)]
        (case type
          "parseError"
          (console/error (str file "\n" error))

          "parsed"
          (ast/upsert-ast! (:dir @client)
                           {:file file
                            :ast ast
                            :package package})
          "deleted"
          (ast/delete-ast! (:dir @client) file)

          "packagesDeleted"
          (do
            (ast/delete-package-asts! (:dir @client))
            (notifos/set-msg! (str "Elm stuff for " (:dir @client) " was nuked, all package ASTs are lost. Do a package install or lint to get them back !")
                              {:class "error"}))

          (do
            (println "Unhandled ast event:" type file))))

      (= (second msg) "doc.search.results")
      (object/raise elm :elm.doc.search.results
                    (assoc-in msg [2 :project-dir] (:dir @client)))


      :else
      (object/raise cs/clients :message msg))))


(defn start-elm-worker [path port client]
  (let [worker (.fork cp
                      elm-client-path
                      #js [port]
                      (clj->js {:execPath (.-executable js/process)
                                :cwd path
                                :silent true
                                :env (if (= (.platform os) "win32")
                                       {:NODE_PATH elm-node-path}
                                       (proc/merge-env {:NODE_PATH elm-node-path}))}))]

    (.on (.-stdout worker) "data" (fn [msg]
                                    (println (str "out: " msg))))
    (.on (.-stderr worker) "data" (fn [err]
                                    (notifos/set-msg! (str "Elm error: " err) {:class "error"})
                                    (console/error err)))
    (.on worker "message" #(on-elm-message client %))
    (.on worker "exit" #(on-exit client))
    worker))


(behavior ::send!
          :triggers #{:send!}
          :reaction (fn [client msg]
                      (.send (:worker @client) (clj->js msg))))



(defn start-elm-client [{:keys [path proj-path client] :as props}]
  (notifos/working "Connecting..")
  (claim-reactor-port proj-path
                      (fn [_ port]
                        (let [worker (start-elm-worker proj-path port client)]
                          (object/merge! client
                                         {:name (files/basename proj-path)
                                          :dir proj-path
                                          :reactor-port port
                                          :worker worker
                                          :commands #{:editor.elm.lint
                                                      :editor.eval.elm
                                                      :editor.elm.make
                                                      :editor.elm.ast.passthrough
                                                      :elm.reload.ast
                                                      :editor.elm.ast.parsetext
                                                      :editor.elm.hint
                                                      :docs.elm.search
                                                      :editor.elm.doc
                                                      :elm.repl.restart
                                                      :editor.elm.gendoc
                                                      :elm.test
                                                      :elm.test.suite}})
                          (object/add-behavior! client ::send!)))))




(defn handle-no-elm []
  (notifos/done-working)
  (console/log (.-PATH (.-env js/process)))
  (popup/popup! {:header "We couldn't find Elm (elm-make) in your path"
                 :body (str "In order to use elm-light, Elm must be installed and on your system PATH."
                            "(Check the console for PATH as seen from Light Table")
                 :buttons [{:label "Install Elm"
                            :action (fn []
                                      (platform/open "https://guide.elm-lang.org/install.html"))}
                           {:label "ok"}]}))


(defn check-elm []
  (.which shelljs "elm-make"))



(defn try-connect [{:keys [info command] :as props}]
  (let [path (:path info)
        proj-path (u/project-path path)
        client (cs/client! :elm-client)]
    (cond
      (not (seq proj-path))
      (do
        (notifos/done-working)
        (notifos/set-msg! (str "Couldn't find a elm-package.json in any parent of path: " path) {:class "error"})
        (cs/rem! client))

      (not (check-elm))
      (do
        (handle-no-elm)
        (cs/rem! client))

      :else
      (let [[ok? msg] (u/valid-project-elm-version proj-path)]
        (if ok?
          (start-elm-client {:path path
                             :proj-path proj-path
                             :client client})
          (do
            (notifos/done-working)
            (console/error msg)
            (notifos/set-msg! msg {:class "error"})
            (cs/rem! client)))))
    client))




(defn find-client [{:keys [origin command info create] :as opts}]
  (let [proj-path (u/project-path (:path info))
        [result client] (cs/discover command info)]

    (condp = result
      :none (if create
              (create opts)
              (do
                (notifos/done-working)
                (object/raise eval/evaler :no-client opts)
                (cs/placeholder)))
      :found (if (= (:dir @client) proj-path)
               client
               (create opts))
      :select (do
                (object/raise eval/evaler
                              :select-client
                              client
                              (fn [client]
                                (cs/swap-client! (-> @origin :client :default) client)
                                (object/update! origin [:client] assoc :default client)))
                (cs/placeholder)))))


(defn get-eval-client
  "Helper method to get eval client for a given editor and command
  If none found it will try to connect"
  ([ed cmd] (get-eval-client ed cmd try-connect))
  ([ed cmd create]
   (let [cur (-> @ed :client :default)]
     (if (and cur (cs/available? cur))
       cur
       (let [neue (find-client {:command cmd
                                :origin ed
                                :info (:info @ed)
                                :create create})]

         (object/update! ed [:client] assoc :default neue)
         (object/raise ed :set-client neue)
         neue)))))


(defn get-eval-client-if-connected
  "Helper method to get eval client for a given editor and command"
  [ed cmd]
  (get-eval-client ed cmd (fn [opts]
                               (notifos/done-working "")
                               nil)))


;; TODO : Need to have this here for now, because behaviour must be defined before Elm object is created
(behavior ::elm-doc-search-results
          :desc "Workaround behavior for showing doc search results in sidebar"
          :triggers #{:elm.doc.search.results}
          :reaction (fn [_ [client-id command msg]]
                      (object/raise cs/clients
                                      :message
                                      [client-id
                                       command
                                       (ast/search-docs
                                         (:search msg)
                                         (:project-dir msg))])))

(behavior ::eval!
          :triggers #{:eval!}
          :reaction (fn [this event]
                      (let [{:keys [info origin]} event]
                        (notifos/working "Evaluating elm...")
                        (cs/send (eval/get-client! {:command :editor.eval.elm
                                                    :origin origin
                                                    :info info
                                                    :create try-connect})
                                 :editor.eval.elm info
                                 :only origin))))




;;****************************************************
;; LT Connection stuff
;;****************************************************
(behavior ::connect
          :triggers #{:connect}
          :reaction (fn [this path]
                      (try-connect {:info {:path path}})))


(object/object* ::elm-lang
                :tags #{:elm.lang})


(def elm (object/create ::elm-lang))


(scl/add-connector {:name "Elm"
                    :desc "Select a directory to serve as the root of your elm project."
                    :connect (fn []
                               (dialogs/dir elm :connect))})



