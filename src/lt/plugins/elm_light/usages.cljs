(ns lt.plugins.elm-light.usages
  (:require [lt.plugins.elm-light.elm-ast :as ast]
            [lt.plugins.elm-light.utils :as util]
            [lt.objs.console :as console]
            [lt.object :as object]
            [lt.objs.tabs :as tabs]
            [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool]
            [lt.objs.files :as files]
            [lt.util.dom :as dom]
            [crate.core :as crate]
            [lt.objs.command :as cmd]
            [lt.objs.jump-stack :as jumper]
            [lt.objs.context :as ctx]
            [clojure.string :as s])
  (:require-macros [lt.macros :refer [defui behavior]]))


(declare elm-usages)


(defui wrapper [this]
  [:div {:class "search-results elm-usages"}
   [:ul.res
    ]
   [:div.searcher
    [:p "Hello"]]])



(defn- highlight [line sym]
  (-> line
      (s/replace (re-pattern (str "\\b" sym "\\b")) (str "<em>" sym "</em>"))
      (.substring 0 150)))


(defn open-hit [file hit]
  (cmd/exec! :open-path file)
  (let [ed (pool/last-active)]
    (editor/move-cursor ed (:start hit))))

(defui hit-entry [sym file hit]
  [:p {:class "entry"}
   [:span.line (str (-> hit :start :line) "," (-> hit :start :ch))]
   [:pre (crate/raw
          (highlight (:line hit) sym))]]
  :click (fn []
           (open-hit file hit)))

(defui module-item
  [sym
   {:keys [file] :as module}]
  [:li
     [:p.path [:span.file (files/basename file)] "(" (files/parent file) ")"]
     (map #(hit-entry sym file %) (:hits module))])


(defui search-results
  [{:keys [usages-per-module candidate]}]
  [:ul.res
   (map #(module-item (:value candidate) %) usages-per-module)])


(defn- count-hits [mods]
  (->> (mapcat :hits mods)
       count))

(defui searcher
  [{:keys [usages-per-module candidate]}]
  [:div.searcher
   [:p (crate/raw
         (str "Found "
              (count-hits usages-per-module)
              " usages for "
              "<strong>"(:value candidate)"</strong>"))]])

(defn show-results [this res]
  (let [container (object/->content this)
        results-ul (dom/$ :ul.res container)
        searcher-ui (dom/$ :div.searcher container)]
    (dom/replace-with results-ul (search-results res))
    (dom/replace-with searcher-ui (searcher res))))



(defn add-or-focus! [obj]
  (let [next-ts (tabs/next-tabset (ctx/->obj :tabset))
        prev-ts (tabs/prev-tabset (ctx/->obj :tabset))]
    (when-not (tabs/in-tab? obj)
      (cond
        next-ts
          (tabs/add! obj next-ts)
        prev-ts
          (tabs/add! obj prev-ts)

        :else
          (let [ts (tabs/spawn-tabset)]
            (tabs/equalize-tabset-widths)
            (tabs/add! obj ts)))
      (tabs/active! obj))))


(behavior ::elm.find-usages
          :triggers #{:elm.find-usages}
          :reaction (fn [this ed token]
                      (let [path (-> @ed :info :path)
                            res (ast/find-usages token
                                                 (util/project-path path)
                                                 path)]
                        (add-or-focus! elm-usages)
                        (object/raise this :clear!)
                        (show-results this res))))


(behavior ::on-close
          :triggers #{:close}
          :reaction (fn [this]
                      (tabs/rem! this)))

(behavior ::clear!
          :triggers #{:clear!}
          :reaction (fn [this]
                      (dom/empty (dom/$ :ul.res (object/->content this)))))


(object/object* ::elm-usages
                :tags #{:elm.usages}
                :label "Elm usages"
                :name "Elm usages"
                :init (fn [this]
                        (wrapper this)))

(def elm-usages
  (object/create ::elm-usages))


;; (doseq [obj (object/by-tag :elm.usages)]
;;     (println "Destroying")
;;     (object/destroy! obj))




(cmd/command {:command :elm-find-usages
              :desc "Elm: Find usages of symbol at cursor"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (when-let [token (util/find-symbol ed (editor/->cursor ed))]
                          (object/raise elm-usages :elm.find-usages ed token))))})


