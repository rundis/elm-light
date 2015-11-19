(ns lt.plugins.elm-light.autocompleter
  (:require [quiescent :as q :include-macros true]
            [quiescent.dom :as d]))



(defn find-active [items]
  (first (filter :active items)))

(defn- handle-keypress
  [{:keys [on-up on-down on-select on-cancel] :as props}
   ev]
  (let [kk (.-which ev)]
    (case kk
      38 (do (.preventDefault ev) (on-up))
      40 (do (.preventDefault ev) (on-down))
      13 (do
           (.preventDefault ev)
           (when-let [active (find-active (:items props))]
             (set! (.-value (.-target ev)) (:name active)))
           (on-select))
      27 (do
           (.preventDefault ev)
           (set! (.-value (.-target ev)) "")
           (on-cancel))
      :default)))


(q/defcomponent AutoCompleteMenu [props]
  (let [items        (:items props)
        style        (when-not (seq items) {:display "none"})
        item-classes #(.concat "autocomplete-dropdown-item row" (if (:active %) " autocomplete-active" ""))]
    (apply d/div {:onMouseDown (fn [e]
                                 (.preventDefault e)
                                 (.stopPropagation e))
                  :className   "autocomplete-dropdown-menu" :style style}
      (map (fn [item]
               (d/div {:className (item-classes item)}
                 (d/div {} (:name item)))) items))))


(q/defcomponent Adder
  [{:keys [on-add-package disabled] :as props}]
  (d/button {:className "btn"
             :disabled disabled
             :onClick #(on-add-package)}
            "Add package"))

(q/defcomponent Versions [props]
  (apply d/select {:className "versions"
                   :value (:version props)
                   :onChange #((:on-change-version props) (.-value (.-target %)))}
         (map #(d/option {} %) (:versions props))))

(q/defcomponent AutoComplete [props]
  (d/span {}
          (d/input {:value (:value props)
                    :style        {:width "250px"}
                    :name         "package-search"
                    :autoComplete "off"
                    :autoFocus    true
                    :type         "text"
                    :onKeyDown    (partial handle-keypress props)
                    :onBlur       (fn [_] ((:on-blur props)))
                    :onChange     (fn [ev]
                                    ((:on-change props) (aget ev "target" "value")))})
          (Versions props)
          (Adder (assoc props :disabled (nil? (:version props))))
          (d/div {:className "autocomplete-dropdown"}
                 (AutoCompleteMenu props))))
