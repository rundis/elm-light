(ns lt.plugins.elm-light.clients
  (:require [lt.plugins.elm-light.utils :as u]
            [lt.objs.files :as files]
            [lt.object :as object]
            [lt.objs.console :as console]
            [lt.objs.notifos :as notifos]
            [lt.objs.clients :as cs]
            [lt.objs.proc :as proc])
  (:require-macros [lt.macros :refer [behavior]]))

(def cp (js/require "child_process"))
(def os (js/require "os"))
(def elm-client-path (files/join u/elm-plugin-dir "node/elm-client.js"))
(def elm-node-path (files/join u/elm-plugin-dir "node_modules"))



(def harbor
  ((js/require (files/join elm-node-path "harbor")) 3000, 4000))

(defn claim-reactor-port [path cb]
  (.claim harbor path cb))

(defn release-reactor-port [path]
  (.release harbor path))


(defn on-exit [client]
  (cs/rem! client)
  (release-reactor-port (:dir @client)))



(defn on-elm-message [client data]
  (let [msg (js->clj data :keywordize-keys true)]
    (if (= (second msg) "elm.client.connected")
      (do
        (object/raise client :connect)
        (object/raise cs/clients :connect client))
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
                                    (println (str "Error from runner: " err))))
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
                                                      :editor.elm.hint
                                                      :docs.elm.search
                                                      :editor.elm.doc
                                                      :elm.repl.restart}})
                          (object/add-behavior! client ::send!)))))


(defn try-connect [{:keys [info] :as props}]
  (let [path (:path info)
        proj-path (u/project-path path)
        client (cs/client! :elm-client)]

    (if proj-path
      (start-elm-client {:path path
                         :proj-path proj-path
                         :client client})
      (do
        (notifos/done-working)
        (notifos/set-msg! (str "Couldn't find a elm-package.json in any parent of path: " path) {:class "error"})
        (cs/rem! client)))
    client))
