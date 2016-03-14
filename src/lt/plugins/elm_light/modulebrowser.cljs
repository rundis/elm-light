(ns lt.plugins.elm-light.modulebrowser
  (:require [lt.plugins.elm-light.utils :as u]
            [lt.objs.files :as files]
            [lt.object :as object]
            [lt.objs.sidebar :as sidebar]
            [lt.objs.sidebar.command :as sidebar-cmd]
            [lt.objs.command :as cmd]
            [lt.objs.editor.pool :as pool]
            [lt.objs.notifos :as notifos]
            [lt.util.dom :as dom]
            [clojure.string :as s])
    (:require-macros [lt.macros :refer [defui behavior]]))


(defn- resolve-module-file [project-path pck-json package module version]
  (->> pck-json
       :source-directories
       (map #(files/join project-path
                         "elm-stuff/packages"
                         package
                         version
                         %
                         (str (s/replace module "." files/separator) ".elm")))
       (some #(if (files/exists? %) % nil))))


(defn- get-exposed-modules [project-path {:keys [package exact]}]
  (let [pck-json (u/parse-json-file (files/join project-path
                                                "elm-stuff/packages"
                                                package exact
                                                "elm-package.json"))]
    (->> pck-json
         :exposed-modules
         (map (fn [x]
                {:name x
                 :packageName package
                 :version exact
                 :file (resolve-module-file project-path pck-json package x exact)})))))


(defn- get-package-modules [project-path]
  (->> (u/get-project-deps project-path)
       (filter :exact)
       (mapcat (partial get-exposed-modules project-path))))


(defn- deduce-module-name [root-path elm-file-path]
  (-> elm-file-path
      (s/replace root-path "")
      (s/replace ".elm" "")
      (s/replace #"^/" "")
      (s/replace files/separator ".")))


(defn- get-project-modules [project-path]
  (let [pck-json (u/parse-json-file (files/join project-path "elm-package.json"))]
    (->> (:source-directories pck-json)
         (mapcat (fn [dir]
                   (if (= dir ".")
                     (->> (files/ls project-path) ;; fixme: no nesting allowed to avoid elm-stuff etc
                          (filter #(= (files/ext %) "elm"))
                          (map (fn [x]
                                 {:name (deduce-module-name "" x)
                                  :file (files/join project-path x)})))
                     (->> (files/filter-walk #(= (files/ext %) "elm") (files/join project-path dir))
                          (map (fn [x]
                                 {:name (deduce-module-name (files/join project-path dir) x)
                                  :file x}))))))
         (map (fn [m]
                (assoc m :packageName (files/basename project-path) :version (:version pck-json)))))))



(defn get-all-modules [project-path]
  (concat
    (get-project-modules project-path)
    (get-package-modules project-path)))


;(println (u/pretty-json (get-all-modules "/Users/mrundberget/projects/albums/frontend")))


(defui wrapper [this]
   [:div {:id "elm-module-browser"} "Retrieving modules..."])


(behavior ::clear!
          :triggers #{:clear!}
          :reaction (fn [this]
                      (cmd/exec! :close-sidebar)))

(behavior ::focus!
          :triggers #{:focus!}
          :reaction (fn [this]
                      (let [input (dom/$ "#elm-module-browser input")]
                        (.focus input))))

(behavior ::ensure-visible
          :triggers #{:ensure-visible}
          :reaction (fn [this]
                      (sidebar-cmd/ensure-visible this)))

(behavior ::show-project-modules
          :triggers #{:show-project-modules}
          :reaction (fn [this prj-path]
                      (let [modules (get-all-modules prj-path)
                            el (dom/$ "#elm-module-browser")
                            mod-browser (.embed js/Elm js/Elm.ModuleBrowser el (clj->js {:modzPort []}))]

                        (.send (.-modzPort (.-ports mod-browser)) (clj->js modules))

                        ;; set up port subscriptions

                        (.subscribe (.-changeSelection (.-ports mod-browser))
                                    (fn []
                                      (object/raise this :ensure-visible)))

                        (.subscribe (.-select (.-ports mod-browser))
                                    (fn [file]
                                      (cmd/exec! :open-path file)
                                      (object/raise this :clear!)))

                        (.subscribe (.-close (.-ports mod-browser))
                                    (fn []
                                      (object/raise this :clear!)))


                        (object/raise this :focus!))))



(object/object* ::modulebrowser
                :tags #{:elm.modulebrowser}
                :label "Elm module browser"
                :order 2
                :init (fn [this]
                        (wrapper this)))

(def module-bar (object/create ::modulebrowser))

(sidebar/add-item sidebar/rightbar module-bar)


(behavior ::list-modules
          :triggers #{:editor.elm.list-modules}
          :reaction (fn [ed]
                      (when-let [prj-path (u/project-path (-> @ed :info :path))]
                        (do
                          (object/raise sidebar/rightbar :toggle module-bar)
                          (object/raise module-bar :show-project-modules prj-path)))))


(cmd/command {:command :show-modulebrowser
              :desc "Elm: Show module-browser"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :editor.elm.list-modules)))})
