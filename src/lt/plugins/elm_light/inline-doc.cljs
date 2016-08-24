(ns lt.plugins.elm-light.inline-doc
  (:require [lt.plugins.elm-light.utils :as u]
            [lt.util.dom :as dom]
            [lt.objs.files :as files]
            [lt.object :as object]
            [lt.objs.editor :as editor]
            [lt.objs.browser :as browser])
  (:require-macros [lt.macros :refer [defui behavior]]))

(def marked (js/require (files/join u/elm-plugin-dir "node_modules" "marked")))


(defui doc-ui-header [doc]
  [:div.inline-doc
   [:h1 (:name doc)]
   [:h2 (:ns doc)]
   (when (and (:args doc)
              (not= (:args doc) "nil"))
     [:h3 (:args doc)])])


(defn marked-doc [md-doc]
  (let [elem (.createElement js/document "div")]
    (dom/add-class elem "elm-inline-doc")
    (set! (.-innerHTML elem)
          (marked md-doc (clj->js {:sanitize false})))
    elem))

(defn maybe-append-marked-doc [elem doc]
  (if-let [md-str (:doc doc)]
    (do (dom/append elem (marked-doc md-str))
      elem)
    elem))

(defn highlight-code [container-elem]
  (doseq [code (dom/$$ "pre > code" container-elem)]
    (.highlightBlock js/hljs code)))


(defn handle-url-click [url]
  (let [b (or (first (object/by-tag :browser))
              (browser/add))]
    (object/raise b :navigate! url)))

(defn add-click-handlers [elem]
  (doseq [link (dom/$$ "a" elem)]
    (dom/on link "click" #(handle-url-click (dom/attr link :href)))))


(behavior ::editor.elm.doc.show!
          :triggers #{:editor.elm.doc.show!}
          :reaction (fn [ed doc]
                      (when (not= (:name doc) "")
                        (let [doc-elem (-> (doc-ui-header doc)
                                            (maybe-append-marked-doc doc))]
                          (inline-doc ed doc-elem (:loc doc))
                          (highlight-code doc-elem)
                          (add-click-handlers doc-elem)))))

(defn inline-doc [this doc-elem loc]
  (let [ed (:ed @this)
        type :underline
        line (editor/line-handle ed (:line loc))
        res-obj (object/create :lt.objs.eval/underline-result {:ed this
                                                               :class "underline"
                                                               :opts {}
                                                               :result doc-elem
                                                               :loc loc
                                                               :line line})]
    (object/add-tags res-obj [:inline.doc])
    (object/update! this [:widgets] assoc [line :underline] res-obj)
    res-obj))
