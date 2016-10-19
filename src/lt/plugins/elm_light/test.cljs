(ns lt.plugins.elm-light.test
  (:require [lt.plugins.elm-light.utils :as util]
            [lt.plugins.elm-light.clients :as elm-clients]
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



;(-> (zip/vector-zip ["jalla"])
;    (zip/append-child {:a "b"}))






;; (let [samples [{:event "testCompleted", :status "fail", :labels ["A Test Suite" "Addition"], :failures [{:given "", :actual "11\n╷\n│ Expect.equal\n╵\n10"}], :duration "2"} {:event "testCompleted", :status "fail", :labels ["A Test Suite" "Records for fun"], :failures [{:given "", :actual "{ a = 100, b = \"nisser\" }\n╷\n│ Expect.equal\n╵\n{ a = 100, b = \"nisse\" }"}], :duration "0"} {:event "testCompleted", :status "fail", :labels ["A Test Suite" "This test should fail"], :failures [{:given "", :actual "failed as expected!"}], :duration "0"} {:event "testCompleted", :status "fail", :labels ["2A Test Suite2" "2Addition"], :failures [{:given "", :actual "11\n╷\n│ Expect.equal\n╵\n10"}], :duration "0"} {:event "testCompleted", :status "fail", :labels ["2A Test Suite2" "2Records for fun"], :failures [{:given "", :actual "{ a = 100, b = \"nisser\" }\n╷\n│ Expect.equal\n╵\n{ a = 100, b = \"nisse\" }"}], :duration "0"} {:event "testCompleted", :status "fail", :labels ["2A Test Suite2" "2This test should fail"], :failures [{:given "", :actual "failed as expected!"}], :duration "0"} {:event "testCompleted", :status "fail", :labels ["withoutNums" "adding numbers to strings has no effect"], :failures [{:given "(\"\",-0.00010069107482582601,\"\")", :actual "\"-\"\n╷\n│ Expect.equal\n╵\n\"\""} {:given "(\"\",-0.00010281026383131636,\"\")", :actual "\"-\"\n╷\n│ Expect.equal\n╵\n\"\""} {:given "(\"\",-0.00010302365492054335,\"\")", :actual "\"-\"\n╷\n│ Expect.equal\n╵\n\"\""} {:given "(\"\",-0.00010544381255027784,\"\")", :actual "\"-\"\n╷\n│ Expect.equal\n╵\n\"\""} {:given "(\"\",-0.00010631872573614866,\"\")", :actual "\"-\"\n╷\n│ Expect.equal\n╵\n\"\""} {:given "(\"\",-0.00010680264141583448,\"\")", :actual "\"-\"\n╷\n│ Expect.equal\n╵\n\"\""} {:given "(\"\",-0.00010742951209576898,\"\")", :actual "\"-\"\n╷\n│ Expect.equal\n╵\n\"\""} {:given "(\"\",-0.00010744484535876405,\"\")", :actual "\"-\"\n╷\n│ Expect.equal\n╵\n\"\""} {:given "(\"\",-0.00011034382406065299,\"\")", :actual "\"-\"\n╷\n│ Expect.equal\n╵\n\"\""} {:given "(\"\",-0.00011073268616291517,\"\")", :actual "\"-\"\n╷\n│ Expect.equal\n╵\n\"\""} {:given "(\"\",-0.0001135777691504627,\"\")", :actual "\"-\"\n╷\n│ Expect.equal\n╵\n\"\""} {:given "(\"\",-0.00011467892869848228,\"\")", :actual "\"-\"\n╷\n│ Expect.equal\n╵\n\"\""} {:given "(\"\",-0.00011783035026507332,\"\")", :actual "\"-\"\n╷\n│ Expect.equal\n╵\n\"\""} {:given "(\"\",-0.00011892733110712729,\"\")", :actual "\"-\"\n╷\n│ Expect.equal\n╵\n\"\""} {:given "(\"\",-0.00011909057933935218,\"\")", :actual "\"-\"\n╷\n│ Expect.equal\n╵\n\"\""} {:given "(\"\",-0.00011948091448926055,\"\")", :actual "\"-\"\n╷\n│ Expect.equal\n╵\n\"\""} {:given "(\"\",-0.00012124571279337898,\"\")", :actual "\"-\"\n╷\n│ Expect.equal\n╵\n\"\""} {:given "(\"\",-0.00012158061123095903,\"\")", :actual "\"-\"\n╷\n│ Expect.equal\n╵\n\"\""} {:given "(\"\",-0.0001245215441615613,\"\")", :actual "\"-\"\n╷\n│ Expect.equal\n╵\n\"\""} {:given "(\"\",-0.00012709841478017057,\"\")", :actual "\"-\"\n╷\n│ Expect.equal\n╵\n\"\""} {:given "(\"\",-0.0001277826655083278,\"\")", :actual "\"-\"\n╷\n│ Expect.equal\n╵\n\"\""} {:given "(\"\",-0.00012844681627587762,\"\")", :actual "\"-\"\n╷\n│ Expect.equal\n╵\n\"\""} {:given "(\"\",-0.00013014254939250455,\"\")", :actual "\"-\"\n╷\n│ Expect.equal\n╵\n\"\""} {:given "(\"\",-0.0001426779657852492,\"\")", :actual "\"-\"\n╷\n│ Expect.equal\n╵\n\"\""} {:given "(\"\",-0.00014911461626094556,\"\")", :actual "\"-\"\n╷\n│ Expect.equal\n╵\n\"\""} {:given "(\"\",-0.00015170887208261594,\"\")", :actual "\"-\"\n╷\n│ Expect.equal\n╵\n\"\""} {:given "(\"\",-0.00015177959565606527,\"\")", :actual "\"-\"\n╷\n│ Expect.equal\n╵\n\"\""} {:given "(\"\",-0.00015477138429860655,\"\")", :actual "\"-\"\n╷\n│ Expect.equal\n╵\n\"\""} {:given "(\"\",-0.0001556775625432495,\"\")", :actual "\"-\"\n╷\n│ Expect.equal\n╵\n\"\""} {:given "(\"\",-0.00015650689044490896,\"\")", :actual "\"-\"\n╷\n│ Expect.equal\n╵\n\"\""} {:given "(\"\",-0.00015952396914682785,\"\")", :actual "\"-\"\n╷\n│ Expect.equal\n╵\n\"\""} {:given "(\"\",-0.00016366394107489388,\"\")", :actual "\"-\"\n╷\n│ Expect.equal\n╵\n\"\""} {:given "(\"\",-0.00016374145821814942,\"\")", :actual "\"-\"\n╷\n│ Expect.equal\n╵\n\"\""} {:given "(\"\",-0.00016683602491157192,\"\")", :actual "\"-\"\n╷\n│ Expect.equal\n╵\n\"\""} {:given "(\"\",-0.00016704403548569005,\"\")", :actual "\"-\"\n╷\n│ Expect.equal\n╵\n\"\""} {:given "(\"\",-0.0001700945849790553,\"\")", :actual "\"-\"\n╷\n│ Expect.equal\n╵\n\"\""} {:given "(\"\",-0.0001713434323041735,\"\")", :actual "\"-\"\n╷\n│ Expect.equal\n╵\n\"\""} {:given "(\"\",-0.00017169513729281186,\"\")", :actual "\"-\"\n╷\n│ Expect.equal\n╵\n\"\""} {:given "(\"\",-0.00017350257333482487,\"\")", :actual "\"-\"\n╷\n│ Expect.equal\n╵\n\"\""} {:given "(\"\",-0.0001759373445443396,\"\")", :actual "\"-\"\n╷\n│ Expect.equal\n╵\n\"\""} {:given "(\"\",-0.0001763515166722096,\"\")", :actual "\"-\"\n╷\n│ Expect.equal\n╵\n\"\""} {:given "(\"\",-0.00017684755098926135,\"\")", :actual "\"-\"\n╷\n│ Expect.equal\n╵\n\"\""} {:given "(\"\",-0.00017924107702587593,\"\")", :actual "\"-\"\n╷\n│ Expect.equal\n╵\n\"\""} {:given "(\"\",-0.00018451504033079828,\"\")", :actual "\"-\"\n╷\n│ Expect.equal\n╵\n\"\""} {:given "(\"\",-0.00018573530045368583,\"\")", :actual "\"-\"\n╷\n│ Expect.equal\n╵\n\"\""} {:given "(\"\",-0.0001879141649210729,\"\")", :actual "\"-\"\n╷\n│ Expect.equal\n╵\n\"\""} {:given "(\"\",-0.0001886984109916376,\"\")", :actual "\"-\"\n╷\n│ Expect.equal\n╵\n\"\""} {:given "(\"\",-0.00019414844176476962,\"\")", :actual "\"-\"\n╷\n│ Expect.equal\n╵\n\"\""}], :duration "1761"} {:event "testCompleted", :status "fail", :labels ["oxfordify" "given an empty sentence" "returns an empty string"], :failures [{:given "", :actual "\"Alice, Bob, and Claire\"\n╷\n│ Expect.equal\n╵\n\"\""}], :duration "0"} {:event "testCompleted", :status "fail", :labels ["oxfordify" "given a sentence with one item" "still contains one item"], :failures [{:given "", :actual "\"Alice, Bob, and Claire\"\n╷\n│ Expect.equal\n╵\n\"This sentence contains one item.\""}], :duration "1"} {:event "testCompleted", :status "fail", :labels ["oxfordify" "given a sentence with multiple items" "returns an oxford-style sentence"], :failures [{:given "", :actual "\"Alice, Bob, and Claire\"\n╷\n│ Expect.equal\n╵\n\"This sentence contains one item and two item.\""}], :duration "0"} {:event "testCompleted", :status "fail", :labels ["oxfordify" "given a sentence with multiple items" "returns an oxford-style sentence"], :failures [{:given "", :actual "\"Alice, Bob, and Claire\"\n╷\n│ Expect.equal\n╵\n\"This sentence contains one item, two item, and three item.\""}], :duration "0"} {:event "testCompleted", :status "fail", :labels [""], :failures [{:given "", :actual "\"Whatsoever!\"\n╷\n│ Expect.equal\n╵\n\"No description\""}], :duration "0"} {:event "testCompleted", :status "fail", :labels ["basic expectations" "this should succeed"], :failures [{:given "", :actual "\"blah\"\n╷\n│ Expect.equal\n╵\n\" blah\""}], :duration "0"} {:event "testCompleted", :status "fail", :labels ["basic expectations" "this should fail"], :failures [{:given "", :actual "\"something\"\n╷\n│ Expect.equal\n╵\n\"someting else\""}], :duration "0"} {:event "testCompleted", :status "fail", :labels ["basic expectations" "another failure"], :failures [{:given "", :actual "\"forty-two\"\n╷\n│ Expect.equal\n╵\n\"forty-three\""}], :duration "1"} {:event "testCompleted", :status "fail", :labels ["the first element in this fuzz tuple" "is always \"foo\""], :failures [{:given "(\"\",\"\")", :actual "\"\"\n╷\n│ Expect.equal\n╵\n\"foo\""}], :duration "202"} {:event "testCompleted", :status "fail", :labels ["fuzzing" "empty list etc"], :failures [{:given "(\"\",\"\")", :actual "given an empty list, did not return an empty string"}], :duration "206"} {:event "testCompleted", :status "fail", :labels ["fuzzing" "further testing"], :failures [{:given "(\"\",\"\")", :actual "\"Alice, Bob, and Claire\"\n╷\n│ Expect.equal\n╵\n\"This sentence contains one item.\""}], :duration "141"} {:event "testCompleted", :status "fail", :labels ["fuzzing" "custom onFail here"], :failures [{:given "(\"\",\"\")", :actual "given an empty list, did not return an empty string"}], :duration "167"} {:event "testCompleted", :status "fail", :labels ["fuzzing" "This is a test."], :failures [{:given "(\"\",\"\")", :actual "given a list of length 3, did not return an oxford-style sentence"}], :duration "165"} {:event "testCompleted", :status "fail", :labels ["Some tests that should fail and produce shrunken values" "a randomly generated integer" "is for sure exactly 0"], :failures [{:given "1", :actual "1\n╷\n│ Expect.equal\n╵\n0"}], :duration "23"} {:event "testCompleted", :status "fail", :labels ["Some tests that should fail and produce shrunken values" "a randomly generated integer" "is <42"], :failures [{:given "42", :actual "42\n╷\n│ Expect.lessThan\n╵\n42"}], :duration "8"} {:event "testCompleted", :status "fail", :labels ["Some tests that should fail and produce shrunken values" "a randomly generated integer" "is also >42"], :failures [{:given "0", :actual "0\n╷\n│ Expect.greaterThan\n╵\n42"}], :duration "6"} {:event "testCompleted", :status "fail", :labels ["Some tests that should fail and produce shrunken values" "a randomly generated string" "equals its reverse"], :failures [{:given "\" !\"", :actual "\"! \"\n╷\n│ Expect.equal\n╵\n\" !\""} {:given "\"! \"", :actual "\" !\"\n╷\n│ Expect.equal\n╵\n\"! \""}], :duration "162"}]]
;;   (println (count (group-tests (take 10 samples))))
;;   (->> (group-tests (take 10 samples))
;;        (map zip/node)
;;        (map pr-str)
;;        (map println)))




;; (let [sample1 {:labels ["A Test Suite" "nisse" "nakke"] :failures [{:actual "dufus"}]}
;;       sample2 {:labels ["A Test Suite" "nisse" "jakke"] :failures [{:actual "mucus"}]}
;;       sample3 {:labels ["Another" "nisse" ] :failures [{:actual "sucus"}]}]

;;   ;;(find-branch  (suitify-test sample1) (:labels sample2))
;;     (zip/node (add-test-to-suite
;;        (find-branch  (suitify-test sample1) (:labels sample2))
;;        sample2))

;; ;;   (let [grouped (group-tests [sample1 sample2])]
;; ;;     (dufus-ui (zip/node (first grouped))))
;;   ;;   (let [test1 (suitify-test sample1)]
;;   ;;     (add-test-to-suite
;;   ;;       (find-branch test1 (:labels sample2))
;;   ;;       sample2))
;;   )








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
                        (handle-end this res))))


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


(cmd/command {:command :elm.test
              :desc "Elm: Test"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :elm.test)))})
