(ns lt.plugins.elm-light.gutter
  (:require [lt.plugins.elm-light.elm-ast :as ast]
            [lt.object :as object]
            [lt.objs.editor :as editor])
  (:require-macros [lt.macros :refer [behavior defui]]))


(defui gutter-marker-exposed []
  [:div.elm-gutter-marker "E"])


(behavior ::elm-gutter-exposeds
          :triggers #{:elm-gutter-refresh}
          :reaction (fn [this exposeds]
                      (editor/operation
                        (editor/->cm-ed this)
                        (fn []
                          (editor/add-gutter this "elm-gutter" 8)
                          (.clearGutter (editor/->cm-ed this) "elm-gutter")
                          (doseq [exposed exposeds]
                            (.setGutterMarker (editor/->cm-ed this)
                                              (:line exposed)
                                              "elm-gutter"
                                              (gutter-marker-exposed)))))))
