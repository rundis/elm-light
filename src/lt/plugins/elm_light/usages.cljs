(ns lt.plugins.elm-light.usages
  (:require [lt.plugins.elm-light.elm-ast :as ast]
            [lt.plugins.elm-light.utils :as util]
            [lt.plugins.elm-light.clients :as elm-client]
            [lt.objs.clients :as clients]
            [lt.objs.console :as console]
            [lt.objs.notifos :as notifos]
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
    [:p ""]]])


(defui loader []
  [:div.bubblingG
   [:span {:id "bubblingG_1"}]
   [:span {:id "bubblingG_2"}]
   [:span {:id "bubblingG_3"}]])


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

(defui candidate-link [candidate]
  [:span.link
   (str (:value candidate) " (" (:module-name candidate) ")")]
  :click (fn []
           (cmd/exec! :open-path (:file candidate))
           (let [ed (pool/last-active)]
             (editor/move-cursor ed (-> candidate :location ast/->range :start)))))

(defui searcher
  [{:keys [usages-per-module candidate token]}]
  [:div.searcher
   [:p (crate/raw
         (str "Found "
              (count-hits usages-per-module)
              " usages for "))
    (if candidate
      (candidate-link candidate)
      [:span [:strong token]])]
   [:div.signature
    (or
      (-> candidate :annotation :signatureRaw)
      (-> candidate :signatureRaw)
      (-> candidate :paramsRaw))]])

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
            (tabs/add! obj ts))))
    (tabs/active! obj)))


(defn- ast-pass-through [this ed msg]
  (clients/send
    (elm-client/get-eval-client ed :editor.elm.ast.passthrough)
    :editor.elm.ast.passthrough
    msg
    :only this))


(behavior ::elm.find-usages.complete
          :triggers #{:elm.find-usages.complete}
          :reaction (fn [this {:keys [token path project-path]}]
                      (show-results this
                                      (ast/find-usages token
                                                       project-path
                                                       path))
                      (notifos/done-working)))


(behavior ::elm.find-usages
          :triggers #{:elm.find-usages}
          :reaction (fn [this ed token]
                      (notifos/working (str "Finding usages for " token) )
                      (let [path (-> @ed :info :path)]
                        (add-or-focus! elm-usages)
                        (object/raise this :clear!)
                        (ast-pass-through this
                                          ed
                                          {:target :elm.find-usages.complete
                                           :data {:token token
                                                  :path path
                                                  :project-path (util/project-path path)}}))))


(behavior ::on-close
          :triggers #{:close}
          :reaction (fn [this]
                      (tabs/rem! this)))

(behavior ::clear!
          :triggers #{:clear!}
          :reaction (fn [this]
                      (dom/empty (dom/$ :ul.res (object/->content this)))
                      (dom/empty (dom/$ :div.searcher (object/->content this)))
                      (dom/append (dom/$ :div.searcher (object/->content this))
                                  (loader))))


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


