(ns lt.plugins.elm-light.widgets.selector
  "Drop down select widget positioned absolutely in editor at given line/ch"
   (:require [lt.object :as object]
            [lt.objs.command :as cmd]
            [lt.objs.editor.pool :as pool]
            [lt.objs.editor :as editor]
            [lt.objs.files :as files]
            [lt.util.dom :as dom]
            [clojure.string :as s])
  (:require-macros [lt.macros :refer [defui behavior]]))


(defn remove-form [this]
  ;;"Hacky solution to try and address race conflict between keydown and blur"
  (when-not (:deleted @this)
    (object/merge! this {:deleted true})
    (object/destroy! this)))

(defui select-item [this idx item]
  [:option {:value idx
            :selected (= idx 0)} (if (map? item) (:label item) item)])

(defui select-form [this items]
  [:div.elm-select
   [:select {:size (count items)}
    (map-indexed (partial select-item this) items)]])


(defn on-keydown [this ed ev]
  (let [kc (.-keyCode ev)
        el (.-target ev)]
    (cond
     (or (= 13 kc) (= 9 kc)) (do
                               (dom/stop-propagation ev)
                               (dom/prevent ev)
                               (let [idx  (.-value (dom/$ "option:checked" el))
                                     item (nth (vec (:items @this)) idx)
                                     the-ed (:ed @this)
                                     beh (:behavior @this)]
                                 (object/raise the-ed beh item)
                                 (remove-form this)))

     (= 27 kc) (do
                 (dom/stop-propagation ev)
                 (dom/prevent ev)
                 (remove-form this)
                 (editor/focus ed)))))


(object/object* ::elm-selector
                :triggers #{:click :clear!}
                :tags #{:inline :inline.elm.selector}
                :init (fn [this info]
                        (when-let [ed (editor/->cm-ed (:ed info))]
                          (object/merge! this info)
                          (let [content (select-form this (:items info))]
                            (dom/on (dom/$ :select content) "blur"
                                    (fn []
                                      ;(println "Remove from blur")
                                      (remove-form this)))

                            (dom/on content "keydown" (partial on-keydown this ed))
                            (dom/val (dom/$ :option content) 0)

                            (js/CodeMirror.positionHint ed content (:line (:pos info)))
                            (dom/focus (dom/$ :select content))
                            content))))



(defn make
  "Create a selector. It expects a map with the following keys
   :ed - the editor the selector is used by
   :pos - Where to position the selector
   :Items - List of items , if item is a map it must have a :label key used for display in the dropdown
   :behavior - The behavior to be raise when an item is selected. It will pass the item back"
  [info]
  (object/create ::elm-selector info))
