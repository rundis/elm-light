(ns lt.plugins.elm-light.hinter
  "Hinter implementation for Elm"
  (:require [lt.plugins.elm-light.elm-ast :as ast]
            [lt.plugins.elm-light.utils :refer [find-symbol project-path]]
            [lt.objs.editor :as editor]
            [lt.object :as object]
            [lt.util.dom :as dom]
            [lt.objs.clients :as clients]
            [cljs.core.async :as async :refer [put! chan]])
  (:require-macros [lt.macros :refer [behavior]]))



(defn- get-token [ed]
  (let [pos (editor/->cursor ed)
        sym (find-symbol ed pos)]
    (when (and sym (seq sym))
      {:string sym
       :start (- (:ch pos) (count sym))
       :end (:ch pos)
       :line (:line pos)})))



(defn- ->hints [token completions]
  (map #(hash-map :text (:completion %)
                  :displayText (:text %)
                  :render (fn [el self data]
                            (dom/html el (js/wrapMatch (.-displayText data) #js {:matched (:string token)})))
                  :from {:ch (:start token) :line (:line token)}
                  :to {:ch (:end token) :line (:line token)})
       completions))



(defn- connected? [ed]
  (when-let [default-client (-> @ed :client :default)] ;; dont if not already connected
    (when @default-client
      true)))


(behavior ::elm-hints
          :triggers #{:init-hints}
          :desc "Provide Elm hints for current cursor position"
          :reaction (fn [ed channels]
                      (let [token (get-token ed)
                            ch (chan)
                            path (-> @ed :info :path)]
                        (if (and token (connected? ed))
                          (do
                            (->> (ast/get-hints {:token (:string token)}
                                                path
                                                (project-path path))
                                 (->hints token)
                                 (put! ch))
                            (conj channels ch))
                          channels))))
