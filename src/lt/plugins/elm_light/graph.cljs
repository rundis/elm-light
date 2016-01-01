(ns lt.plugins.elm-light.graph
  (:require [lt.plugins.elm-light.utils :as u]
            [lt.objs.files :as files]
            [lt.objs.tabs :as tabs]
            [lt.object :as object]
            [lt.objs.command :as cmd]
            [lt.objs.editor.pool :as pool]
            [lt.objs.console :as console]
            [lt.objs.notifos :as notifos]
            [lt.util.dom :as dom]
            [lt.util.load :as load]
            [fetch.core :as fetch]
            [clojure.set :refer [rename-keys]]
            [clojure.string :as s])
  (:require-macros [lt.macros :refer [defui behavior]]))



(def dagreD3 (js/require (files/join u/elm-plugin-dir "node_modules/dagre-d3")))
(def d3 (js/require (files/join u/elm-plugin-dir "node_modules/d3")))


(defn lower [term]
  (s/lower-case term))

(defn find-package-by-name [this name]
  (some #(when (= (lower (:name %)) (lower name)) %) (:all-packages @this)))



(defui dependency-graph-ui [this]
  [:div.graph
   [:div.dependency-graph
    [:svg:svg {:width "650" :height "680"}
     [:svg:g {:transform "translate(20,20)"}]]]])


(object/object* ::dependency-graph
                :tags [:elm.graph.dependency]
                :name "Dependency graph"
                :init (fn [this]
                        (u/fetch-all-packages #(object/merge! this {:all-packages %}))
                        (dependency-graph-ui this)))

(declare dependency-graph)


(behavior ::on-close-destroy
          :triggers #{:close}
          :reaction (fn [this]
                      (when-let [ts (:lt.objs.tabs/tabset @this)]
                        (when (= (count (:objs @ts)) 1)
                          (tabs/rem-tabset ts)))
                      (object/raise this :destroy)))

(def select-values (comp vals select-keys))

(defn dep-id [dep]
  (s/join ":" (select-values dep [:package :version])))



(defn node-label [x]
  #js {:shape (if-let [shape (:shape x)] shape "rect")
       :style (when-not (:version x) "fill: #73404c")
       :labelType "html"
       :label (str "<div class='graph-label"
                   (if (:version x) "'" " error'")
                   " title='" (or (:summary x) (dep-id x)) "'>"
                   (:package x) "<br/>"  (:version x)
                   "</div>")})

(defn create-graph [data]
  (let [g (.setGraph (new dagreD3.graphlib.Graph)  #js {})]
    (doseq [x (:nodes data)]
      (.setNode g (dep-id x) (node-label x)))
    (doseq [x (:edges data)]
      (.setEdge g (:a x) (:b x) #js {:label (:label x)
                                     :style (when (:transitive x)
                                              "stroke-dasharray: 5, 5;")}))
    g))


(defn d3-sel [selector]
  (.log js/console (.select d3 selector))
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
          :desc "Elm render dependencies"
          :triggers #{:elm.graph.render}
          :reaction (fn [this]
                      (let [svg (.select d3 "svg")
                            g (.select svg "g")
                            renderer (.render dagreD3)]
                        (renderer g (create-graph (:data @this)))
                        (init-zoom svg g)
                        (resize-graph this svg))))


(defn get-package-json [dep callback]
  (let [url (str "http://package.elm-lang.org/packages/"
                 (:package dep) "/"
                 (:version dep) "/"
                 "elm-package.json")]
    (fetch/xhr url
               {}
               (fn [data]
                 (callback (js->clj (.parse js/JSON data) :keywordize-keys true))))))


(defn add-edges-for-dep [this origin pkg-json]
  (when-let [edges (->> (:dependencies pkg-json)
                        (map (fn [[k v]]
                               (hash-map :package (u/nskw->name k)
                                         :range v
                                         :version (-> (some #(when ( = (u/nskw->name k) (:package %)) %)
                                                            (-> @this :data :packages))
                                                      :version))))
                        (map (fn [dep]
                               {:a (dep-id origin)
                                :b (dep-id dep)
                                :transitive true
                                :label (:range dep)}))
                        seq)]
    (object/update! this [:data :edges] #(concat % edges))
    (object/raise this :elm.graph.render)))

(behavior ::on-get-transitives
          :desc "Elm get 1.st level transitive dependencies"
          :triggers #{:elm.graph.get-transitives}
          :reaction (fn [this]
                      (let [transitives (remove :range (-> @this :data :packages))]
                        (object/update! this [:data :nodes] #(concat % transitives))
                        (object/raise this :elm.graph.render)

                        (doseq [x (filter :version (-> @this :data :packages))]
                          (get-package-json x (partial add-edges-for-dep this x))))))




(defn get-dependency-data [project-path]
  (let [pkgs (->> (u/get-project-deps project-path)
                  (map #(rename-keys % {:exact :version}))
                  (map #(assoc % :summary (-> (find-package-by-name dependency-graph (:package %))
                                              :summary))))
        direct (filter :range pkgs)
        rootVersion (-> (u/parse-json-file (files/join project-path "elm-package.json"))
                        :version)
        root {:package (files/basename project-path) :version rootVersion :shape "ellipse"}]
    {:packages pkgs
     :nodes (conj direct root )
     :edges (map #(hash-map :a (dep-id root)
                            :b (dep-id %)
                            :label (:range %)) direct)}))


(behavior ::on-get-data
          :desc "Elm retrieve dependency data for project"
          :triggers #{:elm.graph.get-data}
          :reaction (fn [this]
                      (let [data (get-dependency-data (:project-path @this))]
                        (object/assoc-in! this [:data] data)
                        (object/raise this :elm.graph.render)
                        (object/raise this :elm.graph.get-transitives))))

(behavior ::on-show-dependencies
          :desc "Elm show dependency graph"
          :triggers #{:elm.graph.show-dependencies}
          :reaction (fn [this project-path focus-tab?]
                      (when focus-tab?
                        (tabs/add-or-focus! this))
                      (object/assoc-in! this [:project-path] project-path)
                      (object/assoc-in! this [:data] {})
                      (object/raise this :elm.graph.get-data)))


(behavior ::on-tab-resized
          :triggers #{:end-drag}
          :reaction (fn [_]
                      (let [svg (.select d3 "svg")]
                        (resize-graph dependency-graph svg))))


(def dependency-graph (object/create ::dependency-graph))

;; (doseq [obj (object/by-tag :elm.graph.dependency)]
;;       (println "Destroying")
;;       (object/destroy! obj))



(cmd/command {:command :show-elm-dep-graph
              :desc "Elm: Show dependency graph"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (when-let [path (-> @ed :info :path u/project-path)]
                          (object/raise dependency-graph :elm.graph.show-dependencies path true))))})

