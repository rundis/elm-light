(ns lt.plugins.elm-light.packages
  (:require [lt.plugins.elm-light.utils :refer [project-path]]
            [lt.plugins.elm-light.autocompleter :as ac]
            [fetch.core :as fetch]
            [lt.objs.files :as files]
            [lt.objs.tabs :as tabs]
            [lt.object :as object]
            [lt.objs.command :as cmd]
            [lt.objs.editor.pool :as pool]
            [lt.objs.console :as console]
            [lt.objs.notifos :as notifos]
            [lt.util.dom :as dom]
            [quiescent :as q :include-macros true]
            [quiescent.dom :as d]
            [clojure.string :as s]
            [clojure.walk :refer [keywordize-keys]])
  (:require-macros [lt.macros :refer [defui behavior]]))


(defn fetch-packages [callback]
  (fetch/xhr (str "http://package.elm-lang.org/all-packages?date=" (.getTime (new js/Date)))
             {}
             (fn [data]
               (let [pkgs (js->clj (.parse js/JSON data) :keywordize-keys true)]
                 (callback pkgs)))))

(defn parse-pkg-json [pkg-json]
  (when (files/exists? pkg-json)
    (-> (->> (files/open-sync pkg-json)
             :content
             (.parse js/JSON))
        (js->clj :keywordize-keys true))))



(defn pretty-json [data]
  (.stringify js/JSON (clj->js data) null 4))

(defn nskw->name [kw]
  (str (namespace kw) "/" (name kw)))

(defn remove-pkg [path pkg]
  (let [pkg-file (files/join path "elm-package.json")]
    (-> (parse-pkg-json pkg-file)
        (update-in [:dependencies] (fn [deps]

                                     (-> (into {}
                                               (map (fn [[k v]]
                                                      [( nskw->name k) v]) deps))
                                         (dissoc pkg))))
        pretty-json
        ((partial files/save pkg-file)))))


(defn get-project-deps [project-path]
  (let [to-name #(str (namespace %) "/" (name %))
        pkg-json (files/join project-path "elm-package.json")
        deps-json (files/join project-path "elm-stuff" "exact-dependencies.json")]

    (->> (parse-pkg-json pkg-json)
         :dependencies
         (mapv (fn [[k v]]
                 {:package (to-name k) :range v}))
         (concat (->> (parse-pkg-json deps-json)
                      (mapv (fn [[k v]]
                              {:package (to-name k) :exact v}))))
         (group-by :package)
         (mapv (fn [[_ vs]] (apply merge vs))))))



(get-project-deps "/Users/mrundberget/projects/hello-elm")

(defui project-wrapper [this]
  [:div.elm
   [:div {:id "project-packages-wrapper"} "Retrieving project package info..."]])

(object/object* ::elm-packages
                :tags #{:elm.packages}
                :label "Elm project packages"
                :name "Elm project packages"
                :init (fn [this]
                        (fetch-packages #(object/merge! this {:all-packages %}))
                        (project-wrapper this)))


(def elm-packages (object/create ::elm-packages))

;; (doseq [obj (object/by-tag :elm.packages)]
;;       (println "Destroying")
;;       (object/destroy! obj))


;; react rendering
(declare render)


(defn filter-packages [token pkgs]
  (vec
   (filter (fn [pkg]
             (> (.indexOf (s/lower-case (:name pkg)) (s/lower-case token)) -1)) pkgs)))


(defn idx-active [items]
  (first (keep-indexed #(when (:active %2) %1) items)))


(defn ensure-visible [this]
  (let [list (dom/$ ".autocomplete-dropdown-menu" (object/->content this))
        elem (dom/$ ".autocomplete-active" list)]
    (cond
     (< (.-offsetTop elem) (.-scrollTop list)) (set! (.-scrollTop list) (- (.-offsetTop elem) 15))
     (> (+ (.-offsetTop elem) (.-offsetHeight elem))
        (+ (.-scrollTop list) (.-clientHeight list))) (set! (.-scrollTop list)
                                                            (- (+ (.-offsetTop elem) (.-offsetHeight elem) 15) (.-clientHeight list)))
     :else nil)))



(defn on-pkg-down []
  (let [items (:ac-packages @elm-packages)]
    (when-not (empty? items)
      (object/assoc-in! elm-packages [:ac-packages (idx-active items) :active] false)
      (object/assoc-in! elm-packages [:ac-packages (min (dec (count items)) (inc (idx-active items))) :active] true)
      (render {})
      (ensure-visible elm-packages))))

(defn on-pkg-up []
  (let [items (:ac-packages @elm-packages)]
    (when-not (empty? items)
      (object/assoc-in! elm-packages [:ac-packages (idx-active items) :active] false)
      (object/assoc-in! elm-packages [:ac-packages (max 0 (dec (idx-active items))) :active] true)
      (render {})
      (ensure-visible elm-packages))))




(defn on-pkg-sel []
  (let [items (:ac-packages @elm-packages)]
    (if-let [idx (idx-active items)]
      (do
        (object/assoc-in! elm-packages [:ac-versions] (:versions (nth items idx)))
        (object/assoc-in! elm-packages [:ac-version] (first (:versions (nth items idx))))
        (object/assoc-in! elm-packages [:ac-package] (:name (nth items idx))))
      (object/assoc-in! elm-packages [:ac-versions] [])))
  (object/merge! elm-packages {:ac-packages nil})
  (render {}))

(defn on-pkg-cancel []
  (object/merge! elm-packages {:ac-packages nil
                               :ac-versions []})
  (render {}))

(defn on-pkg-blur []
  (object/merge! elm-packages {:ac-packages nil})
  (render {}))


(defn on-pkg-change [v]
  (let [items (filter-packages v (:all-packages @elm-packages))]
    (object/merge! elm-packages {:ac-packages items
                                 :ac-package v
                                 :ac-versions []
                                 :ac-version nil})
    (when-not (empty? items)
      (object/assoc-in! elm-packages [:ac-packages 0 :active] true))
    (render {})))


(defn pkg-install [pkg v]
  (let [args (concat ["install" "--yes"] (if pkg [pkg v] []))]
    (notifos/working (s/join " " (cons "elm-package" args)))
    (let [proc (.spawn (js/require "child_process")
                       "elm-package"
                       (clj->js args)
                       #js {:cwd (:path @elm-packages)})]
      (.on proc "exit" #(do
                          (if (= % 0 )
                            (notifos/done-working)
                            (notifos/set-msg! "Error installing elm package" {:class "error" :timeout 5000}))
                          (object/raise elm-packages :elm.show.project.packages (:path @elm-packages))))
      (.stdout.on proc "data" #(notifos/msg* (str "Package install: " %) {:timeout 5000}))
      (.stderr.on proc "data" #(console/error (str %))))))

(defn on-add-package []
  (pkg-install (:ac-package @elm-packages) (:ac-version @elm-packages)))

(defn on-pkg-refresh []
  (pkg-install nil nil))

(defn on-remove-pkg [pkg]
  (remove-pkg (:path @elm-packages) pkg)
  (pkg-install nil nil))


(defn on-change-version [v]
  (object/assoc-in! elm-packages [:ac-version] v)
  (render {}))


(q/defcomponent AddPackageForm [props]
  (d/div
   {:className "add-package"}
   (d/h3 {} "Add package:")
   (ac/AutoComplete (:ac-props props))))

(q/defcomponent PackageRow
  [{:keys [package range exact on-remove]}]
  (d/tr
   {}
   (d/td {} package)
   (d/td {} range)
   (d/td {} exact)
   (d/td {} (when range
              (d/button {:onClick #(on-remove package)} "remove")))))

(q/defcomponent PackageTable [props]
  (d/table
   {:className "package-table"}
   (d/thead
    {}
    (d/tr
     {}
     (d/th {} "Package")
     (d/th {} "Range")
     (d/th {} "Exact")
     (d/th {} "")))
   (apply d/tbody {}
          (map #(PackageRow (assoc % :on-remove (:on-remove props)) ) (:packages props)))))

(q/defcomponent ProjectPackages [props]
  (d/div {:className "project-packages"}
         (d/h1 {} (str (files/basename (:path props)) " - packages"))
         (PackageTable props)
         (d/button {:onClick #((:on-pkg-refresh props))} "Refresh packages")
         (AddPackageForm props)))



(behavior ::on-close-project-packages
          :triggers #{:close}
          :reaction (fn [this]
                      (tabs/rem! this)))

(behavior ::show-project-packages
          :triggers #{:elm.show.project.packages}
          :reaction (fn [this path]
                      (tabs/add-or-focus! elm-packages)
                      (object/assoc-in! elm-packages [:ac-packages] nil)
                      (object/assoc-in! elm-packages [:ac-package] nil)
                      (object/assoc-in! elm-packages [:ac-versions] [])
                      (object/assoc-in! elm-packages [:ac-version] nil)
                      (object/assoc-in! elm-packages [:path] path)
                      (object/assoc-in! elm-packages [:packages] (get-project-deps path))
                      (render {})))



(defn render [props]
  (q/render (ProjectPackages (merge props {:path (:path @elm-packages)
                                           :packages (:packages @elm-packages)
                                           :ts (js/Date)
                                           :on-pkg-refresh on-pkg-refresh
                                           :on-remove on-remove-pkg
                                           :ac-props {:items (:ac-packages @elm-packages)
                                                      :value (:ac-package @elm-packages)
                                                      :versions (:ac-versions @elm-packages)
                                                      :version (:ac-version @elm-packages)
                                                      :on-change on-pkg-change
                                                      :on-up on-pkg-up
                                                      :on-down on-pkg-down
                                                      :on-select on-pkg-sel
                                                      :on-blur on-pkg-blur
                                                      :on-cancel on-pkg-cancel
                                                      :on-change-version on-change-version
                                                      :on-add-package on-add-package}
                                           :all-packages (:all-packages @elm-packages)}))
            (.getElementById js/document "project-packages-wrapper")))


(cmd/command {:command :show-elm-project-packages
              :desc "Elm: Show project packages"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (when-let [path (-> @ed :info :path project-path)]
                          (object/raise elm-packages :elm.show.project.packages path))))})

