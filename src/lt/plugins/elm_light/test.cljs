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
        root (-> (zip/rightmost zloc)
                  (zip/insert-right [head])
                  zip/right) ]
    (-> (reduce (fn [zl label]
                  (-> (zip/append-child zl [label])
                      zip/down
                      zip/right))
                root
                tail)
        (zip/append-child {:failures failures})
        z-top)))


(defn- find-branch [zloc-suite labels]
  (loop [zloc zloc-suite
         lbls labels]
    (let [branch (z-find-by-label (first lbls) zloc)]
      (cond
        (and branch  (second lbls) (nil? (z-find-by-label (second lbls) branch)))
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


(declare dashboard)


(defn- get-status-count [status items]
  (->> (filter #(= status (:status %)) items)
       count))

(defui wrapper []
  [:div.elmtest-dashboard
   [:h1.title "Elm Test Dashboard"]
   [:div.project-container "Project stuff here"]
   [:div.result-container "Placeholder for results"]])




(defui testprogress-ui [this {:keys [labels status] :as evt}]
  (let [testCount (or (-> @this :start :testCount) 0)
        progress (str (count (:tests @this)) "/" testCount)
        test-name (s/join " -> " labels)
        clazz (if (:failures? @this) "error" "")
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

(defui failed-tests-ui [failed-tests]
  (let [grouped (group-tests failed-tests)]
    [:div.test-failures
    [:h2 "Test Failures"]
    [:ul
     (map failed-test-ui grouped)]]))



;; (defui test-failures-ui [{:keys [labels status failures]}]
;;   [:li
;;    [:span (s/join " -> " labels)]
;;    (map failure-item failures)])


;; (defui failed-tests-ui [failed-tests]
;;   [:div.test-failures
;;    [:h2 "Test Failures"]
;;    [:ul
;;     (map test-failures-ui failed-tests)]])


(defui project-ui [this]
  (let [proj-path (util/project-path (:file @this))
        proj-name (str (last (files/path-segs proj-path)) (files/basename proj-path))]
    [:div.project-container
     [:h2 proj-name]]))



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
                        (dom/append result-container (failed-tests-ui []))

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
    (object/assoc-in! this [:start] evt)

    (log-start evt)
    ;(dom/append container (testinit-ui))
    ))





(defn create-suite
  "Create a test suite on the fly for running elm tests"
  [project-tests]
  (let [imports (->> (map :module-name project-tests)
                     set
                     (s/join "\nimport ")
                     (str "import "))
        tests (->> (map #(str (:module-name %) "." (:value %)) project-tests)
                   (s/join ","))]

  (str
"port module ElmTempTestSuite exposing (..)

import Test.Runner.Node exposing (run)
import Json.Encode exposing (Value)
import Test"
"\n" imports "\n"
"main : Program Value
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

(behavior ::elm-test-suite
          :triggers #{:elm.test.suite.start}
          :desc "Start test suite, now that project is connected"
          :reaction (fn [ed msg]
                      (let [project-path (util/project-path (-> @ed :info :path))
                            project-tests (elm-ast/get-project-tests project-path)]

                        (println (create-suite project-tests))

                        (if-not (empty? project-tests)
                          (clients/send (elm-clients/get-eval-client ed :elm.test.suite)
                                       :elm.test.suite
                                       {:module "ElmTempTestSuite"
                                        :suite (create-suite project-tests)}
                                       :only dashboard)
                          (notifos/set-msg! "No tests found for project")))))


(defn- ast-pass-through [this ed msg]
  (clients/send
    (elm-clients/get-eval-client ed :editor.elm.ast.passthrough)
    :editor.elm.ast.passthrough
    msg
    :only this))

(behavior ::elm-test-suite.init
          :triggers #{:elm.test.suite.init}
          :desc "Initialize run of test suite"
          :reaction (fn [ed]
                      (let [{:keys [info]} @ed]
                        ; (notifos/working "Initiate elm tests...")
                        (tabs/add-or-focus! dashboard)
                        (object/raise dashboard :elm.test.init (:path info))
                        (ast-pass-through ed
                                          ed
                                          {:target :elm.test.suite.start
                                           :data {:path (:path info)
                                                  :project-path (util/project-path path)}}))))


(cmd/command {:command :elm.test
              :desc "Elm: Test"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :elm.test)))})


(cmd/command {:command :elm.test.suite
              :desc "Elm: Test All"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :elm.test.suite.init)))})

