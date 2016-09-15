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


(def marker-templ
  (let [elem (.createElement js/document "div")]
    (dom/html elem "@")
    (dom/add-class elem "elm-gutter-marker")
    elem))

(defn gutter-marker-exposed []
  (.cloneNode marker-templ true))


(behavior ::show-elm-gutter
          :triggers #{:object.instant}
          :type "user"
          :desc "Editor Elm: Display elm gutter"
          :reaction (fn [ed]
                      (when-not (:elm-gutter @ed)
                        (editor/add-gutter ed "elm-gutter" 15)
                        (object/assoc-in! ed [:elm-gutter] true))))

(behavior ::elm-gutter-exposeds
          :triggers #{:elm.gutter.refresh}
          :reaction (fn [ed]
                      (let [cm-ed (editor/->cm-ed ed)]
                        (editor/operation
                               cm-ed
                               (fn []
                                 (.clearGutter cm-ed "elm-gutter")
                                 (doseq [bm (-> @ed :elm-exposeds-bookmarks)]
                                   (when-let [pos (.find bm)]
                                     (when-let [line (.-line pos)]
                                       (.setGutterMarker cm-ed
                                                         line
                                                         "elm-gutter"
                                                         (gutter-marker-exposed))))))))))



(behavior ::elm-gutter-exposeds-mark
          :triggers #{:elm.gutter.exposeds.mark}
          :reaction (fn [ed]
                      (let [path (-> @ed :info :path)
                            exposeds (ast/get-gutter-exposeds
                                       path
                                       (utils/project-path path))
                            cm-ed (editor/->cm-ed ed)]
                        (editor/operation
                          cm-ed
                          (fn []
                            (doseq [bm (-> @ed :elm-exposeds-bookmarks)]
                              (.clear bm))
                            (->> (map (fn [exposed]
                                        (.setBookmark cm-ed #js {:ch 1
                                                                 :line (-> exposed :location :start :line dec)}))
                                      exposeds)
                                 (object/assoc-in! ed [:elm-exposeds-bookmarks]))))
                        (object/raise ed :elm.gutter.refresh))))
