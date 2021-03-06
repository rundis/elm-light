(ns lt.plugins.elm-light.test
  (:require [lt.plugins.elm-light.utils :as util]
            [lt.plugins.elm-light.clients :as elm-clients]
            [lt.plugins.elm-light.elm-ast :as elm-ast]
            [lt.objs.console :as console]
            [lt.objs.notifos :as notifos]
            [lt.object :as object]
            [lt.objs.command :as cmd]
            [lt.objs.clients :as clients]
            [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool]
            [lt.objs.tabs :as tabs]
            [lt.objs.statusbar :as statusbar]
            [lt.objs.files :as files]
            [lt.util.dom :as dom]
            [clojure.string :as s]
            [clojure.zip :as zip])
  (:require-macros [lt.macros :refer [behavior defui]]))



; Setup tests
(def default-test-deps
  {:elm-community/elm-test "3.0.0 <= v < 4.0.0"
   :rtfeldman/node-test-runner "3.0.0 <= v < 4.0.0"})

(defn ->test-src-dir [src-dir]
  (if (= src-dir ".")
    "../"
    (str "../" src-dir)))

(defn ->test-src-dirs [src-dirs]
  (conj (mapv ->test-src-dir src-dirs) "."))


(defn deps->named [deps]
  (into {}
        (map (fn [[k v]]
               [(util/nskw->name k) v]) deps)))

(defn ->test-config [project-cfg]
  (-> project-cfg
      (update-in [:source-directories] ->test-src-dirs)
      (assoc :exposed-modules [])
      (update-in [:dependencies] #(merge % default-test-deps))
      (update-in [:dependencies] deps->named)))


(defn parse-project-cfg [project-path]
  (util/parse-json-file (files/join project-path "elm-package.json")))

(defn save-test-cfg! [path test-cfg]
  (->> (util/pretty-json test-cfg)
       (files/save path)))

(defn maybe-create-test-path! [project-path]
  (let [test-path (files/join project-path "tests")]
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
  (let [templ-dir (files/join util/elm-plugin-dir "templates/test")
        runner (files/join templ-dir "Main.elm")
        tests (files/join templ-dir "Tests.elm")]
    (when-not (files/exists? (files/join test-path "Main.elm"))
      (files/copy runner (files/join test-path "Main.elm")))
    (when-not (files/exists? (files/join test-path "Tests.elm"))
      (files/copy tests (files/join test-path "Tests.elm")))))

(defn setup-test [project-path]
  (when-let [project-cfg (parse-project-cfg project-path)]
    (notifos/working "Init elm test config")
    (let [test-path (maybe-create-test-path! project-path)
          test-cfg-path (files/join test-path "elm-package.json")]
      (maybe-add-templates test-path)
      (->> (->test-config project-cfg)
           (save-test-cfg! test-cfg-path))
      (install-packages! test-path))))






; --- ZIPPERS FOR GROUPING TESTS

(defn- z-top [zloc]
  (->> (iterate zip/up zloc)
       (take-while identity)
       last))

(defn- z-find-by-label [label zloc]
  (->> (iterate zip/next zloc)
       (take-while identity)
       (take-while (complement zip/end?))
       (filter #(= label (zip/node %)))
       first))


(defn- suitify-test [{:keys [labels failures]}]
  (let [[head & tail] labels
        root (zip/vector-zip [head])]
    (-> (reduce (fn [zloc label]
                  (-> (zip/append-child zloc [label])
                      zip/down
                      zip/right))
                root
                tail)
        (zip/append-child {:failures failures})
        z-top)))

(defn- add-test-to-suite [{:keys [zloc labels]}  {:keys [failures]}]
  (let [[head & tail] labels
        root (when (seq labels)
               (-> (zip/rightmost zloc)
                   (zip/insert-right [head])
                   zip/right)) ]

    (if (seq labels)
      (-> (reduce (fn [zl label]
                    (-> (zip/append-child zl [label])
                        zip/down
                        zip/right))
                  root
                  tail)
          (zip/append-child {:failures failures})
          z-top)

      ;; Just append the failures all labels are similar to get here...
      (let [z-failures (zip/right zloc)
            curr-fails (-> (zip/node z-failures) :failures)]
        (->> {:failures (concat curr-fails failures)}
             (zip/replace z-failures)
             z-top)))))


(defn- find-branch [zloc-suite labels]
  (loop [zloc zloc-suite
         lbls labels]
    (let [branch (z-find-by-label (first lbls) zloc)]
      (cond
        (and branch
             (or (not (second lbls))
                 (and (second lbls)
                      (nil? (z-find-by-label (second lbls) branch)))))
        {:zloc branch :labels (drop 1 lbls)}

        (nil? branch)
        nil

        branch
        (recur branch (drop 1 lbls))))))


(defn group-tests [tests]
  (reduce (fn [acc t]
            (let [prev (last acc)]
              (if-not prev
                (conj acc (suitify-test t))
                (if-let [branch (find-branch prev (:labels t))]
                    (-> (drop-last acc)
                        vec
                        (conj (add-test-to-suite branch t)))
                    (conj acc (suitify-test t))))))
          []
          tests))

;; (let [sample1 {:labels ["oxfordify" "given a sentence with multiple items" "returns an oxford-style sentence"] :failures ["failure 1"]}
;;       sample2 {:labels ["oxfordify" "given a sentence with multiple items" "returns an oxford-style sentence"] :failures ["failure 2"]}]
;;   (let [suite1 (suitify-test sample1)]
;;     (add-test-to-suite (find-branch suite1 (:labels sample2))
;;                        sample2)))



(declare dashboard)


(defn- get-status-count [status items]
  (->> (filter #(= status (:status %)) items)
       count))

(defui wrapper []
  [:div.elmtest-dashboard
   [:h1.title "Elm Test Dashboard"]
   [:div.project-container "Project stuff here"]
   [:div.result-container "Placeholder for results"]])


(defui loader []
  [:div.bubblingG
   [:span {:id "bubblingG_1"}]
   [:span {:id "bubblingG_2"}]
   [:span {:id "bubblingG_3"}]])


(defui testprogress-ui [this {:keys [labels status] :as evt}]
  (let [testCount (or (-> @this :start :testCount) 0)
        progress (str (count (:tests @this)) "/" testCount)
        test-name (s/join " -> " labels)
        clazz (if (:failures? @this) "error" "ok")
        failed (get-status-count "fail" (:tests @this))
        passed (get-status-count "pass" (:tests @this))
        duration (if (= "runComplete" (:event evt))
                   (:duration evt)
                   (->> (map #(-> (:duration %) int) (-> @this :tests))
                        (reduce +)))]

    [:div.test-progress
     [:div.summary
      [:div.summary-item
       [:label "Runs:"]
       [:span progress]]
      [:div.summary-item
       [:label "Passed:"]
       [:span passed]]
      [:div.summary-item
       [:label "Failed:"]
       [:span failed]]
      [:div.summary-item
       [:label "Seed:"]
       [:span (-> @this :start :initialSeed)]]
      [:div.summary-item
       [:label "Duration:"]
       [:span (str duration " ms")]]]
     [:div.progress
      [:progress {:value (count (:tests @this)) :max testCount :class clazz}]]
     [:p.curr-test (when-not (s/blank? test-name) (str "(" test-name ")"))]]))



(defui failure-item [{:keys [given actual] :as failure}]
  [:div
   (when-not (s/blank? given)
     [:div.given
      [:label "Given: "]
      [:span given]])
   [:pre actual]])


(defui dufus-ui [nd]
  [:ul
   [:li
    [:span.test-label (str (first nd))]
    (if (map? (second nd))
      (map failure-item (:failures (second nd)))
      (map dufus-ui (drop 1 nd))
      )
    ]])


(defui failed-test-ui [z-failed-test]
  [:li
   (dufus-ui (zip/node z-failed-test))])

(defui failed-tests-ui [failed-tests & ldr]
  (let [grouped (group-tests failed-tests)]
    [:div.test-failures
    [:h2 "Test Failures"]
    [:ul
     (when ldr
       ldr)
     (map failed-test-ui grouped)]]))




(defui project-ui [this]
  (let [proj-path (util/project-path (:file @this))
        proj-name (str (last (files/path-segs proj-path)) (files/basename proj-path))]
    [:div.project-container
     [:h1 proj-name]]))



(behavior ::on-close-destroy
          :triggers #{:close}
          :reaction (fn [this]
                      (when-let [ts (:lt.objs.tabs/tabset @this)]
                        (when (= (count (:objs @ts)) 1)
                          (tabs/rem-tabset ts)))
                      (object/raise this :destroy)))



(behavior ::on-testrun-init
          :triggers #{:elm.test.init}
          :reaction (fn [this path]
                      (let [result-container (dom/$ :div.result-container (:content @this))
                            proj-container (dom/$ :div.project-container (:content @this))]

                        (object/assoc-in! this [:start] nil)
                        (object/assoc-in! this [:tests] [])
                        (object/assoc-in! this [:failures?] nil)
                        (object/assoc-in! this [:file] path)
                        (dom/replace-with proj-container (project-ui this))

                        (dom/empty result-container)
                        (dom/append result-container (testprogress-ui this {}))
                        (dom/append result-container (failed-tests-ui [] (loader)))

                        ;; TODO: Show some initial message, maybe which file is used ?
                        )))


(defn- log-end [failures? {:keys [passed failed duration] :as evt}]
  (let [summary (str "Test run completed in " duration "ms. Results: "
                     passed " passed, "
                     failed " failed")]
    (console/log summary {:class "error"})
    (notifos/msg* summary
                 {:class (if failures? "error" "")
                  :timeout 5000})))



(defn handle-end [this {:keys [passed failed duration] :as evt}]
  (dom/replace-with (dom/$ :div.test-progress (:content @this))
                      (testprogress-ui this evt ))
  (log-end (:failures? @this) evt))


(defn- log-test-failures [failures? {:keys [labels failures]}]
  (let [test-name (s/join " -> " labels)]
    (notifos/msg* test-name  {:class (if failures "error" "")})
    (console/log test-name {:class "error"})
    (doseq [failure failures]
        (when-not (s/blank? (:given failure))
          (console/log (str "Given: " (:given failure))))
        (console/log (str (:actual failure) "\n\n") {:class "error"}))))



(defn- handle-test-result [this {:keys [labels status failures] :as evt}]
  (object/update! this [:tests] conj evt)

  (when (= "fail" status)
    (object/assoc-in! this [:failures?] true)
    (log-test-failures (:failures? @this) evt))

  (let [container (dom/$ :div.result-container (:content @this))
        failed-tests (->> (:tests @this)
                          (filter #(= "fail" (:status %))))]
    ;(println "Failed tests: " failed-tests)
    (dom/empty container)
    (dom/append container (testprogress-ui this evt))
    (dom/append container (failed-tests-ui failed-tests))))



(defn- log-start [evt]
  (notifos/set-msg! ("About to run  " (:testCount evt) " Elm tests")))


(defn- handle-start [this evt]
  (let [container (dom/$ :div.result-container (:content @this))]
    (dom/empty container)
    (dom/append container (testprogress-ui this evt))
    (dom/append container (failed-tests-ui [] (loader)))
    (object/assoc-in! this [:start] evt)

    (log-start evt)
    ;(dom/append container (testinit-ui))
    ))





(defn create-suite
  "Create a test suite on the fly for running elm tests"
  [suite-name project-tests]
  (let [imports (->> (map :module-name project-tests)
                     set
                     (s/join "\nimport ")
                     (str "import "))
        tests (->> (map #(str (:module-name %) "." (:value %)) project-tests)
                   (s/join ","))]

  (str
"port module " suite-name " exposing (..)

import Test.Runner.Node exposing (run)
import Json.Encode exposing (Value)
import Test"
"\n" imports "\n"
"main : Test.Runner.Node.TestProgram
main =
    run emit <| Test.concat [" tests "]

port emit : ( String, Value ) -> Cmd msg")))





(behavior ::elm-test-result
          :triggers #{:elm.test.result}
          :desc "Elm test result event"
          :reaction (fn [this res]
                      (case (:event res)
                        "runStart"
                        (handle-start this res)

                        "testCompleted"
                        (handle-test-result this res)

                        "runComplete"
                        (handle-end this res)

                        (println "Unknown messsage: " res))))


(behavior ::elm-test-error
          :triggers #{:elm.test.error}
          :desc "Elm test error"
          :reaction (fn [this err]
                      (let [container (dom/$ :div.result-container (:content @this))]
                        (dom/empty container)
                        (dom/append container (testprogress-ui this {}))
                        (dom/append container (failed-tests-ui [])))
                      (console/error (:message err))))


(object/object* ::dashboard
                :tags #{:elm.test.dashboard}
                :name "Elm Test Dashboard"
                :label "Elm Test Dashboard"
                :init (fn [this]
                        (wrapper)))



(def dashboard (object/create ::dashboard))

;; (doseq [obj (object/by-tag :elm.test.dashboard)]
;;       (println "Destroying")
;;       (object/destroy! obj))




(behavior ::elm-test
          :triggers #{:elm.test}
          :desc "Run all Elm tests in your test project"
          :reaction (fn [ed]
                      (let [{:keys [info]} @ed]
                        ; (notifos/working "Initiate elm tests...")
                        (tabs/add-or-focus! dashboard)
                        (object/raise dashboard :elm.test.init (:path info))

                        (clients/send (elm-clients/get-eval-client ed :elm.test)
                           :elm.test
                           {:file (-> @ed :info :path)}
                           :only dashboard))))


(defn- get-applicable-tests [{:keys [pos path suite-type]}]
  (let [project-path (util/project-path path)]
    (case (keyword suite-type)
      :all
      (elm-ast/get-project-tests project-path)

      :single
      (elm-ast/get-test-by-pos pos project-path path)

      :module
      (elm-ast/get-module-tests project-path path)

      [])))


(behavior ::elm-test-suite
          :triggers #{:elm.test.suite.start}
          :desc "Start test suite, now that project is connected"
          :reaction (fn [ed msg]
                      (let [project-path (util/project-path (-> @ed :info :path))
                            project-tests (get-applicable-tests msg)
                            suite-name (str "ElmTempTestSuite" (rand-int 1000000))]

                        (if (seq project-tests)
                          (clients/send (elm-clients/get-eval-client ed :elm.test.suite)
                                        :elm.test.suite
                                        {:module suite-name
                                         :suite (create-suite suite-name project-tests)}
                                        :only dashboard)
                          (do
                            (let [container (dom/$ :div.result-container (:content @dashboard))]
                              (dom/empty container)
                              (dom/append container (testprogress-ui dashboard {}))
                              (dom/append container (failed-tests-ui [])))
                            (notifos/set-msg! "No tests found for project / given selection"))))))


(defn- ast-pass-through [this ed msg]
  (clients/send
    (elm-clients/get-eval-client ed :editor.elm.ast.passthrough)
    :editor.elm.ast.passthrough
    msg
    :only this))


(defn- check-elm-version [proj-path]
  (let [elm-v (util/get-elm-version)]
    (if-not (util/ver-LTE? "0.18.0" elm-v)
      (do
        (console/error (str "Test feature requires elm 0.18.0, but current elm version is: " elm-v))
        (notifos/set-msg! (str "Test feature requires elm 0.18.0, but current elm version is: " elm-v)
                          {:class "error"})
        false)
      (let [[ok? bounds] (util/project-satisfies-version? "0.18.0" proj-path)]
        (if ok?
          true
          (do
            (console/error (str "Elm test requires elm version 0.18.0 or higher but project has: " bounds))
            (notifos/set-msg! (str "Elm test requires elm version 0.18.0 or higher but project has: " bounds) {:class "error"})
            false))))))




;(check-elm-version)

(behavior ::elm-test-suite.init
          :triggers #{:elm.test.suite.init}
          :desc "Initialize run of test suite"
          :reaction (fn [ed suite-type]
                      (when-let [proj-path (util/project-path (-> @ed :info :path))]
                        (when (check-elm-version proj-path)
                         (let [{:keys [info]} @ed
                               pos (editor/->cursor ed)]
                           ; (notifos/working "Initiate elm tests...")
                           (tabs/add-or-focus! dashboard)
                           (object/raise dashboard :elm.test.init (:path info))
                           (ast-pass-through ed
                                             ed
                                             {:target :elm.test.suite.start
                                              :data {:pos pos
                                                     :path (:path info)
                                                     :suite-type suite-type}}))))))

(behavior ::elm-test-setup
          :triggers #{:elm.test.setup}
          :reaction (fn [ed]
                      (when-let [prj-path (util/project-path (-> @ed :info :path))]
                        (when (check-elm-version prj-path)
                          (setup-test prj-path)))))



(cmd/command {:command :elm.test.suite
              :desc "Elm: Test All"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :elm.test.suite.init :all)))})

(cmd/command {:command :elm.test.module
              :desc "Elm: Test Module"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :elm.test.suite.init :module)))})

(cmd/command {:command :elm.test.single
              :desc "Elm: Test Current"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :elm.test.suite.init :single)))})


(cmd/command {:command :elm.test.setup
              :desc "Elm: Test Setup"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :elm.test.setup)))})
