(ns lt.plugins.elm-light.module-graph
  (:require [lt.plugins.elm-light.utils :as u]
            [lt.plugins.elm-light.elm-ast :as elm-ast]
            [lt.objs.files :as files]
            [lt.objs.tabs :as tabs]
            [lt.object :as object]
            [lt.objs.command :as cmd]
            [lt.objs.editor.pool :as pool]
            [lt.objs.console :as console]
            [lt.objs.notifos :as notifos]
            [lt.util.dom :as dom]
            [lt.util.js :as js-util]
            [clojure.set :refer [rename-keys]]
            [clojure.string :as s])
  (:require-macros [lt.macros :refer [defui behavior]]))

(def dagreD3 (js/require (files/join u/elm-plugin-dir "node_modules/dagre-d3")))
(def d3 (js/require (files/join u/elm-plugin-dir "node_modules/d3")))

(declare set-group-filter!)
(declare set-module-filter!)
(declare toggle-exposeds-filter!)


(defui module-graph-ui [this]
  [:div.graph
   [:div.filters "Add filters here !"]
   [:div.module-graph
    [:svg:svg {:width "650" :height "680"}
     [:svg:g {:transform "translate(20,20)"}]]]])



(defui exposeds-filter-ui [this]
  [:span.filter.checkbox
   [:label [:input {:type "checkbox"}] "Show module exposeds"]]
  :change (fn [ev]
            (toggle-exposeds-filter! this (.-checked (.-target ev)))))


(defui module-filter-option-ui [this module]
  [:option (:name module)])

(defui module-filter-ui [this modules]
  [:span.filter
   [:label "Module: "]
   [:select
    (map (partial module-filter-option-ui this) (cons {:name ""} modules))]]
  :change (fn [ev]
            (set-module-filter! this (.-value (.-target ev)))))


(defui group-filter-option-ui [this group]
  [:option (:name group)])

(defui group-filter-ui [this groups]
  [:span.filter
   [:label "Group: "]
   [:select
    (map (partial group-filter-option-ui this) (cons {:name ""} groups))]]
  :change (fn [ev]
            (set-group-filter! this (.-value (.-target ev)))))

(defui filters-ui [this filters]
  [:div.filters
   [:h1 (files/basename (:project-path @this))]
   (group-filter-ui this (:groups filters))
   (module-filter-ui this (:modules filters))
   (exposeds-filter-ui this)])


(defn render-filters [this filters]
  (let [container (object/->content this)
        curr-filters (dom/$ :div.filters container)]
    (dom/replace-with curr-filters (filters-ui this filters))))


(object/object* ::module-graph
                :tags [:elm.graph.module]
                :name "Module graph"
                :init (fn [this]
                        (module-graph-ui this)))


(declare module-graph)


(behavior ::on-close-destroy
          :triggers #{:close}
          :reaction (fn [this]
                      (when-let [ts (:lt.objs.tabs/tabset @this)]
                        (when (= (count (:objs @ts)) 1)
                          (tabs/rem-tabset ts)))
                      (object/raise this :destroy)))


(defn node-id [x]
  (:name x))

;;

(defn exposeds-html [exposeds]
  (str "<ul>"
       (->> (map (fn [exp]
                   (str "<li>" exp "</li>")) exposeds)
            s/join)
       "</ul>"))



(defn node-label [this x]
  #js {:shape (if-let [shape (:shape x)] shape "rect")
       :labelType "html"
       :style (when (= (:name x) (-> @this :filters :current-module))
                "fill: #FFF8DC")
       :label (str "<div class='graph-label'>"
                   "<span>" (:name x) "</span>"
                   (when (-> @this :filters :show-exposeds?)
                     (exposeds-html (:exposeds x)))
                   "</div>")})

(def level-styles
  {1 "fill: #474747"
   2 "fill: #6D686E"
   3 "fill: #7E7880"
   4 "fill: #807A78"
   5 "fill: #919394"})



(defn group-label [x]
  #js {:shape (if-let [shape (:shape x)] shape "rect")
       :labelType "html"
       :style (get level-styles (:level x) )
       :class "level-class"
       :clusterLabelPos "top"
       :label (str "<div class='group-label'>"
                   (:name x)
                   "</div>")})


(defn create-graph [this data]
  (let [g (.setGraph (new dagreD3.graphlib.Graph #js {:compound true}) #js {})]
    (doseq [x (:groups data)]
      (.setNode g (:group x) (group-label x)))

    (doseq [x (:nodes data)]
      (.setNode g (node-id x) (node-label this x))
      (when-let [parent (:parent x)]
        (.setParent g (node-id x) parent)))

    (doseq [x (filter :parent (:groups data))]
      (.setParent g (:group x) (:parent x)))


    (doseq [x (:edges data)]
      (.setEdge g (:a x) (:b x) #js {:label (:label x)}))
    g))


(defn d3-sel [selector]
  (.select d3 selector))

(defn dimensions [this]
  {:w  (.-clientWidth (:content @this))
   :h  (.-clientHeight (:content @this))})


(defn init-zoom [svg g]
  (let [zoom (.on (.zoom (.-behavior d3))
                  "zoom"
                  #(.attr g "transform" (str "translate(" (.-translate (.-event d3)) ")"
                                             "scale(" (.-scale (.-event d3)) ")")))]
    (.call svg zoom)))


(defn resize-graph [this svg]
  (let [dim (dimensions this)]
    (.attr svg "width" (+ (:w dim) 20))
    (.attr svg "height" (+ (:h dim) 20))))


(behavior ::on-render
          :desc "Elm render project modules"
          :triggers #{:elm.module-graph.render}
          :reaction (fn [this data]
                      (let [svg (.select d3 "svg")
                            g (.select svg "g")
                            renderer (.render dagreD3)]
                        (renderer g (create-graph this data))
                        (init-zoom svg g)
                        (js-util/wait 200 #(resize-graph this svg)))))






(defn get-project-modules [project-path]
  (->> (elm-ast/get-project project-path)
       :file-asts
       (remove :package)))

(defn get-group-names [module-names]
  (->> module-names
       (map #(s/split % #"\."))
       (filter #(< 1 (count %)))
       (map drop-last)
       (mapcat (fn [parts]
                 (reduce (fn [a b]
                           (let [group-name (str (:name (last a)) (when (seq a) ".") b)]
                             (conj a
                                   {:group (str "g-" group-name)
                                    :name group-name
                                    :level (inc (count a))
                                    :parent (:group (last a))}))
                           )
                         []
                         parts)))
       set
       sort))




(defn- get-exposeds-names [module]
  (->> (elm-ast/get-exposed-declarations-memo module)
       (remove #(= "adtDef" (:type %)))
       (map :value)))

(defn create-graph-data [modules]
  (let [module-names (set (map elm-ast/get-module-name modules)) ]

    {:groups (get-group-names module-names)
     :nodes (map (fn [module]
                   (let [mod-name (elm-ast/get-module-name module)]
                     {:name  (elm-ast/get-module-name module)
                      :parent (when (< -1 (.indexOf mod-name "."))
                                (->> (s/split mod-name #"\.")
                                     drop-last
                                     (s/join ".")
                                     (str "g-")))
                      :exposeds (get-exposeds-names module)
                      :file (:file module)}))
                 modules)
     :edges (mapcat
              (fn [module]
                (map
                  (fn [imp]
                    {:a (elm-ast/get-module-name module)
                     :b (:value imp)
                     :label ""})
                  (->> (-> module :ast :imports :imports)
                       (filter #(contains? module-names (:value %))))))
              modules)}))


;; todo : move to elm-ast
(defn- get-module-import-names [module]
  (->> module :ast :imports :imports (map :value) set))

(defn- maybe-filter-by-group [current-group modules]
  (if-not (s/blank? current-group)
    (filter #(.startsWith (elm-ast/get-module-name %) current-group) modules)
    modules))


(defn- maybe-filter-by-module [current-module modules]
  (if-not (s/blank? current-module)
    (let [module (-> (filter #(= current-module (elm-ast/get-module-name %)) modules)
                     first)
          module-import-names (get-module-import-names module)]

      (filter (fn [m]
                (or
                  (= module m)
                  (contains? module-import-names (elm-ast/get-module-name m))
                  (contains? (get-module-import-names m) current-module)))
              modules))
    modules))


(defn refresh-graph [this]
  (let [modules (->> (get-project-modules (:project-path @this))
                     (maybe-filter-by-group (-> @this :filters :current-group))
                     (maybe-filter-by-module (-> @this :filters :current-module)))]
    (object/raise this :elm.module-graph.render (create-graph-data modules))))


(defn- set-group-filter! [this group-name]
  (object/assoc-in! this [:filters :current-group] group-name)
  (refresh-graph this))

(defn- set-module-filter! [this module-name]
  (object/assoc-in! this [:filters :current-module] module-name)
  (refresh-graph this))

(defn- toggle-exposeds-filter! [this v]
  (object/assoc-in! this [:filters :show-exposeds?] v)
  (refresh-graph this))



(behavior ::on-show-modules
          :desc "Elm show module graph"
          :triggers #{:elm.module-graph.show}
          :reaction (fn [this project-path ]
                      (tabs/add-or-focus! this)
                      (let [modules (get-project-modules project-path)
                            groups (get-group-names (set (map elm-ast/get-module-name modules)))]
                        (object/merge! this {:filters {}
                                             :project-path project-path})
                        (object/raise this :elm.module-graph.render (create-graph-data modules))
                        (render-filters this {:groups groups
                                              :modules (map (fn [module]
                                                              {:name (elm-ast/get-module-name module)})
                                                            modules)}))))

(behavior ::on-tab-resized
          :triggers #{:end-drag}
          :reaction (fn [_]
                      (let [svg (.select d3 "svg")]
                        (resize-graph module-graph svg))))

(behavior ::on-move
          :triggers #{:move}
          :reaction (fn [this]
                      (let [svg (.select d3 "svg")]
                        (resize-graph this svg))))




(def module-graph (object/create ::module-graph))

;; (doseq [obj (object/by-tag :elm.graph.module)]
;;   (println "Destroying !")
;;     (object/destroy! obj))



(cmd/command {:command :show-elm-module-graph
              :desc "Elm: Show module graph"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (when-let [path (-> @ed :info :path u/project-path)]
                          (object/raise module-graph :elm.module-graph.show path ))))})

