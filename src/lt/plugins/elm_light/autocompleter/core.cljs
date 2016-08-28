(ns lt.plugins.elm-light.autocompleter.core
  "Basis for generic autocompleter for LT"
  (:require [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool]
            [lt.objs.command :as cmd]
            [lt.object :as object]
            [lt.util.js :as jsutil]
            [lt.util.dom :as dom]
            [lt.objs.context :as ctx]
            [lt.objs.keyboard :as keyboard]
            [cljs.core.async :as async :refer [<! put! chan timeout]])
  (:require-macros [lt.macros :refer [behavior]]
                    [cljs.core.async.macros :refer [go go-loop]]))


(defn- curr-time []
  (.getTime (js/Date.)))

(defn- elapsed [start]
  (str (- (curr-time) start) " ms"))



;; TODO: Needs to be configurable (keymap and preferences for completeSingle etc)
(def default-options
  {:async true
   :completeSingle false
   :supportsSelection true
   :closeOnUnfocus true
   :customKeys {:Up #((.-moveFocus %2) -1 )
                :Down #((.-moveFocus %2) 1)
                :Enter  (fn [a b]
                          (.pick b))
                :Tab (fn [a b]
                       (.pick b))
                :Esc #((.-close %2 ))}})



(defn- distinct-completions [hints]
  (let [seen #js {}]
    (filter (fn [hint]
              (if (true? (aget seen (:text hint)))
                false
                (aset seen (:text hint) true)))
            hints)))


;; TODO:
;; - Configurable sorting
;; - Configurable number of results ?
;; - Configurable max completion length
(defn- process-hint-results
  "Prepare found hints for display through CM showHint"
  [hints]
  (when (seq hints)
    (->> hints
         (filter #(< (.-length (:displayText %)) 1000))
         ;distinct-completions
         ;(sort-by :text)
         (take 25)
         (hash-map :list)
         (#(let [fst (-> % :list first)]
             (assoc % :from (:from fst) :to (:to fst)))) ;; allthough we've enforced from-to on each item, CM insists on having this props at root level to
         clj->js)))



(defn- listen-for-hint-results
  "Listen for hint results from all given channels
  Will raise a behavior to show results when all channels have delivered a result
  or alternatively the specified timeout has elapsed"
  [ed channels hinter-ch]
  (let [t (timeout 500)] ;; should be configurable ?
    (go-loop [all-results []
              chs (conj channels t)]
             (if (= 1 (count chs))
               (put! hinter-ch all-results)
               (let [[res source] (async/alts! chs)]
                 (if (identical? source t)
                   (do
                     (println "WARNING: Timeout waiting for hinter provider channel results")
                     (put! hinter-ch all-results))
                   (recur (into all-results res) (remove #{source} chs))))))))



(defn- completion-active? [ed]
  (.-completionActive (.-state (editor/->cm-ed ed))))

(defn- maybe-close-hinter [ed]
  (when-let [state (completion-active? ed)]
    (.close state)))




(defn- on-line-change [line ch]
  (let [ed (pool/last-active)]
    (if-not (completion-active? ed)
      (js/CodeMirror.off line "change" on-line-change)
      (when (= "+delete" (.-origin ch)) ;; TODO: should probably handle paste and other things to
        (object/raise ed :start-hinting)))))


(defn- init-show-hint-ch
  "Creates a channel for writing results that are to be popped up with the hinter ui
   Displays hint results async by calling the showHint plugin callback when
   results are received on the channel"
  [ed]
  (let [ch (chan)]
    (js/CodeMirror.showHint (editor/->cm-ed ed)
                            (fn [_ cb]
                              (go
                                (let [hints (<! ch)]
                                  (cb (process-hint-results hints)))))
                            (clj->js default-options))
    ch))


(behavior ::start-hinting
          :triggers #{:start-hinting}
          :desc "Autocompleter: Start hinting"
          :reaction (fn [ed]
                      (let [pos (editor/->cursor ed)
                            line-handle (editor/line-handle ed (:line pos))
                            chs (object/raise-reduce ed :init-hints [])]
                         (js/CodeMirror.off line-handle "change" on-line-change)
                         ;; YODO: Be nice to check if a proper channel was returned
                         (if (seq chs)
                           (do
                             (listen-for-hint-results ed chs (init-show-hint-ch ed))
                             (js/CodeMirror.on line-handle "change" on-line-change))
                           (maybe-close-hinter ed)))))



(behavior ::auto-show-on-input
          :triggers #{:input}
          :desc "Autocompleter: Show on change"
          :reaction (fn [ed _ ch]
                      (object/raise ed :start-hinting)))
