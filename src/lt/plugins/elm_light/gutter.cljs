(ns lt.plugins.elm-light.gutter
  (:require [lt.plugins.elm-light.elm-ast :as ast]
            [lt.plugins.elm-light.utils :as utils]
            [lt.object :as object]
            [lt.objs.editor :as editor]
            [lt.objs.files :as files]
            [lt.util.dom :as dom])
  (:require-macros [lt.macros :refer [behavior defui]]))


(def icon-url
  (files/join utils/elm-plugin-dir "css" "export.svg"))

(defui gutter-marker-exposed []
  [:div.elm-gutter-marker "@"])



(behavior ::show-elm-gutter
          :triggers #{:object.instant}
          :type "user"
          :desc "Editor Elm: Display elm gutter"
          :reaction (fn [ed]
                      (when-not (:elm-gutter @ed)
                        (editor/add-gutter ed "elm-gutter" 10)
                        (object/assoc-in! ed [:elm-gutter] true))))

(behavior ::elm-gutter-exposeds
          :triggers #{:elm.gutter.refresh}
          :reaction (fn [ed]
                      (let [cm-ed (editor/->cm-ed ed)]
                        (doseq [gutter (.-gutters cm-ed)]
                          (println "gutter: " gutter)))

                      (editor/operation
                        (editor/->cm-ed ed)
                        (fn []
                          (.clearGutter (editor/->cm-ed ed) "elm-gutter")
                          (doseq [bm (-> @ed :elm-exposeds-bookmarks)]
                            (when-let [pos (js->clj (.find bm) :keywordize-keys true :force-obj true)] ;; sheit still a js object
                              (when-let [line (.-line pos)]
                                (.setGutterMarker (editor/->cm-ed ed)
                                                  line
                                                  "elm-gutter"
                                                  (gutter-marker-exposed)))))))))



(behavior ::elm-gutter-exposeds-mark
          :triggers #{:elm.gutter.exposeds.mark}
          :reaction (fn [ed]
                      (let [path (-> @ed :info :path)
                            exposeds (ast/get-gutter-exposeds
                                       path
                                       (utils/project-path path))]
                        (doseq [bm (-> @ed :elm-exposeds-bookmarks)]
                          (.clear bm))
                        (->> (map (fn [exposed]
                                    (editor/bookmark ed {:ch 1
                                                         :line (-> exposed :location :start :line dec)}))
                                  exposeds)
                             (object/assoc-in! ed [:elm-exposeds-bookmarks]))
                        (object/raise ed :elm.gutter.refresh))))
