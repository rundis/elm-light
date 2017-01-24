(ns lt.plugins.elm-light.linter
  "Generic linter for highlighting errors/warnings and providing context sensitive actions"
  (:require [lt.object :as object]
            [lt.objs.command :as cmd]
            [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool]
            [lt.util.dom :as dom]
            [lt.objs.statusbar :as statusbar]
            [crate.binding :refer [bound]])
  (:require-macros [lt.macros :refer [defui behavior]]))


;;**********************************************************
;; Lint summary shown in statusbar
;;**********************************************************

(defn- status-class [{:keys [errors warnings]}]
  (cond
    (> errors 0) "error"
    (> warnings 0) "warning"
    :else ""))


(defn- status-text [{:keys [errors warnings]}]
  (str "Lint status: " errors "/" warnings))

(defn ->status-ui [{:keys [lint-summary]}]
  [:span {:class (str "lint-status " (status-class lint-summary))}
   (status-text lint-summary)])

(behavior ::update-lint-status
          :triggers #{:update!}
          :reaction (fn [this f]
                      (object/update! this [:lint-summary] f)))

(object/object* ::statusbar.lint-status
                :triggers #{}
                :behaviors #{::update-lint-status}
                :lint-summary {:errors 0 :warnings 0}
                :init (fn [this]
                        (statusbar/statusbar-item (bound this ->status-ui) "")))

(def statusbar-lint-summary (object/create ::statusbar.lint-status))
(statusbar/add-statusbar-item statusbar-lint-summary)



(defn- grouped-lint-count [ed]
  (if-let [results (:linter-results @ed)]
    (->> (vals results)
         (map :result)
         (group-by :category)
         (map (fn [[k v]]
                {k (count v)}))
         (into {}))
    {:error 0 :warning 0}))


(defn update-status-for-editor [ed]
  (let [{:keys [error warning]} (grouped-lint-count ed)]
    (object/raise statusbar-lint-summary
                  :update!
                  #(assoc % :warnings (or warning 0) :errors (or error 0)))))

(behavior ::update-linter-on-editor-change
          :triggers #{:focus}
          :reaction (fn [ed]
                      (update-status-for-editor ed)))


;;**********************************************************
;; In editor display of lint results
;;**********************************************************

(defn- remove-widget [ed el]
  (try
    (dom/remove el)
    (catch :default e
      nil))
  (editor/focus ed))



(defn- remove-res [ed res-id ]
  (let [{:keys [mark result] :as dill} (get-in @ed [:linter-results res-id ])]
    (when mark (.clear mark))
    (object/update! ed [:linter-results] dissoc res-id))
  (editor/focus ed))


(defn- current-range [ed mark]
  (let [rng (.find mark)
        from (.-from rng)
        to (.-to rng)]
    {:from {:ch (.-ch from) :line (.-line from)}
     :to {:ch (.-ch to) :line (.-line to)}}))


(defn- execute-action [ed res-id action-fn res]
  (let [{:keys [mark]} (get-in @ed [:linter-results res-id ])]
    (action-fn res (current-range ed mark))
    (remove-res ed res-id)))


(defui action-ui [ed action res-id res]
  [:span.button (str (:text action))]
  :click #(execute-action ed res-id (:action action) res))


(defui inline-ui [ed res-id {:keys [title details category actions] :as res}]
  [:div {:tabindex -1 :class (str "linter-res " (or (name category) "error"))}
   [:p.title title]
   [:div.details
    [:pre details]
    [:div (map #(action-ui ed % res-id res) actions)]]]
  :blur #(remove-widget ed (.-target %))
  :keydown #(let [kc (.-keyCode %)]
              (when (= kc 27)
                (remove-widget ed (.-target %)))
              (when (and (= kc 13) (seq actions))
                (.preventDefault %)
                (.stopPropagation %)
                (execute-action ed res-id (-> actions first :action) res))))



(defn add-widget [ed res-id]
  (let [{:keys [mark result]} (get-in @ed [:linter-results res-id ])
        ui (inline-ui ed res-id result)
        from (.-from (.find mark))]
    (.addWidget (editor/->cm-ed ed) from ui #js {:scrollIntoView true})
    (dom/focus ui)))


(defn- mark-range [ed {:keys [from to] :as code-range}]
  (if-not (= from to )
    code-range
    {:from (assoc from :ch 0)
     :to (assoc to :ch (editor/line-length ed (:line from)))}))

(defn create-mark [ed {:keys [category code-range]}]
  (let [{:keys [from to]} (mark-range ed code-range)]
    (editor/mark ed
                 from
                 to
                 {:className (str "lint-" (or (name category) "error"))
                  :inclusiveLeft false
                  :inclusiveRight false})))


;; Expected format of a lint result
(comment
  {:category :error
   :code-range {:from {:ch 1 :line 1}
                :to {:ch 10 :line 13}}
   :title "Syntax error"
   :details "Something went really bad"
   :actions [{:text "Change to xyz" :on-select #(println "this was selected")}]})



(behavior ::linter-result!
          :triggers #{:linter-result!}
          :reaction (fn [ed res]
                      (let [id (-> (gensym "linter-res") str)
                            mark (create-mark ed res)]
                        (set! (.-ltlintid mark) id)
                        (set! (.-lttype mark) :linter)
                        (object/update! ed [:linter-results] assoc id {:mark mark
                                                                       :result res})
                        (update-status-for-editor ed))))

(behavior ::clear-linter-results!
          :triggers #{:clear-linter-results!}
          :reaction (fn [ed]
                      (doseq [[id res] (:linter-results @ed)]
                        (when-let [m (:mark res)] (.clear m))
                        (when-let [w (:widget res)]
                          (dom/remove w)))
                      (object/assoc-in! ed [:linter-results] nil)
                      (update-status-for-editor ed)))



(cmd/command {:command :editor.linter.remove-all
              :desc "Editor: Clear all lint results"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :clear-linter-results!)))})


(defn find-current-lint-mark [ed]
  (->> (editor/find-marks ed (editor/->cursor ed))
       (filter #(= :linter (.-lttype %)))
       first))

(defn get-widget-by-mark [ed mark]
  (get-in @ed [:linter-results (.-ltlintid mark) :widget]))


(defn mark->pos [mark]
  (let [cm-pos (.-from (.find mark))]
    {:ch (.-ch cm-pos) :line (.-line cm-pos)}))

(defn get-all-lint-marks [ed]
  (->> (.getAllMarks (editor/->cm-ed ed))
       (filter #(= :linter (.-lttype %)))
       (sort-by #((juxt :line :ch) (mark->pos %)))))

(defn split-with-mark [ed]
  (let [all-marks (get-all-lint-marks ed)
        curr-mark (find-current-lint-mark ed)]
    (split-with #(not (= (when curr-mark (.-ltlintid curr-mark)) (.-ltlintid %))) all-marks)))

(defn find-next-mark [ed]
  (let [[ms1 ms2] (split-with-mark ed)]
    (first (into (vec (drop 1 ms2)) ms1))))

(defn find-prev-mark [ed]
  (let [[ms1 ms2] (split-with-mark ed)]
    (first (into (reverse (drop 1 ms2)) ms1))))



(cmd/command {:command :editor.linter.details
              :desc "Linter: Show details at cursor"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (when-let [mark (find-current-lint-mark ed)]
                          (add-widget ed (.-ltlintid mark)))))})

(cmd/command {:command :editor.next.lint-result
              :desc "Linter: Move to next result"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (when-let [next-mark (find-next-mark ed)]
                          (editor/move-cursor ed (mark->pos next-mark)))))})

(cmd/command {:command :editor.prev.lint-result
              :desc "Linter: Move to previous result"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (when-let [prev-mark (find-prev-mark ed)]
                          (editor/move-cursor ed (mark->pos next-mark)))))})

