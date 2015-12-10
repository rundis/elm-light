(ns lt.plugins.elm-light.test
  (:require [lt.plugins.elm-light.utils :as elm-utils]
            [lt.objs.files :as files]
            [lt.objs.editor.pool :as pool]
            [lt.objs.editor :as editor]
            [lt.object :as object]
            [lt.objs.command :as cmd]
            [lt.objs.console :as console]
            [lt.objs.notifos :as notifos])
  (:require-macros [lt.macros :refer [behavior]]))


(def default-test-deps
  {:deadfoxygrandpa/elm-test "3.0.1 <= v < 4.0.0"
   :laszlopandy/elm-console "1.0.3 <= v < 2.0.0"})


(defn ->test-src-dir [src-dir]
  (if (= src-dir ".")
    "../"
    (str ("../" src-dir))))

(defn ->test-src-dirs [src-dirs]
  (conj (mapv ->test-src-dir src-dirs) "."))

(defn deps->named [deps]
  (into {}
        (map (fn [[k v]]
               [(elm-utils/nskw->name k) v]) deps)))

(defn ->test-config [project-cfg]
  (-> project-cfg
      (update-in [:source-directories] ->test-src-dirs)
      (assoc :exposed-modules [])
      (update-in [:dependencies] #(merge % default-test-deps))
      (update-in [:dependencies] deps->named)))

(defn parse-project-cfg [project-path]
  (elm-utils/parse-json-file (files/join project-path "elm-package.json")))

(defn save-test-cfg! [path test-cfg]
  (->> (elm-utils/pretty-json test-cfg)
       (files/save path)))

(defn maybe-create-test-path! [project-path]
  (let [test-path (files/join project-path "test")]
    (when-not (files/exists? test-path)
      (files/mkdir test-path))
    test-path))


(defn install-packages! [test-path]
  (let [args ["install" "--yes"]
        proc (.spawn (js/require "child_process")
                     "elm-package"
                     (clj->js args)
                     #js {:cwd test-path})]

    (.stdout.on proc "data" #(println (str "Test package install: " %)))
    (.stderr.on proc "data" #(console/error (str %)))
    (.on proc "exit" #(if (= % 0 )
                        (notifos/done-working "Successfully configured elm test")
                        (notifos/set-msg! "Error installing test elm packages" {:class "error" :timeout 5000})))
    nil))


(defn maybe-add-templates [test-path]
  (let [templ-dir (files/join elm-utils/elm-plugin-dir "node_modules/elm-test/templates")
        runner (files/join templ-dir "TestRunner.elm")
        tests (files/join templ-dir "Tests.elm")]
    (when-not (files/exists? (files/join test-path "TestRunner.elm"))
      (files/copy runner (files/join test-path "TestRunner.elm")))
    (when-not (files/exists? (files/join test-path "Tests.elm"))
      (files/copy tests (files/join test-path "Tests.elm")))))

(defn init-test [project-path]
  (when-let [project-cfg (parse-project-cfg project-path)]
    (notifos/working "Init elm test config")
    (let [test-path (maybe-create-test-path! project-path)
          test-cfg-path (files/join test-path "elm-package.json")]
      (maybe-add-templates test-path)
      (->> (->test-config project-cfg)
           (save-test-cfg! test-cfg-path))
      (install-packages! test-path))))



;(init-test "/Users/mrundberget/projects/elm-sweeper")


(defn run-tests [test-file]
  (notifos/working (str "Running test: " (files/basename test-file)))
  (let [worker (.fork (js/require "child_process") (files/join elm-utils/elm-plugin-dir "node_modules/elm-test/bin/elm-test")
                      (clj->js [test-file])
                      (clj->js {:execPath js/process.execPath
                                :silent true
                                :env {"ATOM_SHELL_INTERNAL_RUN_AS_NODE" 1
                                      "PATH" (.-PATH js/process.env)}
                                :cwd (files/parent test-file)}))]
    (.on worker "exit" (fn [code]
                         (notifos/done-working)
                         (if (= % code 0)
                           (notifos/set-msg! "Elm test successful !" {:timeout 5000})
                           (notifos/set-msg! "Elm test reported errors. See console for details" {:class "error" :timeout 5000}))))
    (.on (.-stdout worker) "data" (fn [data]
                                    (when (seq (.trim (str data)))
                                      (console/log (str "Elm Test: " data)))))
    (.on (.-stderr worker) "data" (fn [data]
                                    (console/error (str "Elm Test err:" data))))
    nil))


;(run-tests "/Users/mrundberget/projects/elm-sweeper/test/TestRunner.elm")


(behavior ::elm-test
          :triggers #{:elm.test}
          :reaction (fn [ed]
                      (let [path (-> @ed :info :path)
                            ;v (editor/->val ed)
                            ]
                        (run-tests path))))

(behavior ::elm-test-init
          :triggers #{:elm.test.init}
          :reaction (fn [ed]
                      (let [path (-> @ed :info :path)]
                        (when-let [prj-path (elm-utils/project-path path)]
                          (init-test prj-path)))))

(cmd/command {:command :elm.test
              :desc "Elm: Test current file"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :elm.test)))})

(cmd/command {:command :elm.test.init
              :desc "Elm: Add test subproject to current project"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :elm.test.init)))})

