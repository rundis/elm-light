(ns lt.plugins.elm-light.hinter
  "Hinter implementation for Elm"
  (:require [lt.plugins.elm-light.utils :as utils]
            [lt.plugins.elm-light.elm-ast :as ast]
            [lt.plugins.elm-light.utils :refer [find-symbol project-path]]
            [lt.objs.editor :as editor]
            [lt.object :as object]
            [lt.util.dom :as dom]
            [lt.objs.clients :as clients]
            [cljs.core.async :as async :refer [put! chan]]
            [clojure.string :as s])
  (:require-macros [lt.macros :refer [behavior defui background]]))


(defn- curr-time []
  (.getTime (js/Date.)))

;; TODO: not exactly uid quality...
(defn- chan-id [ch]
  (+ (curr-time) (hash ch)))

(defn- store-ch [ed ch]
  (let [chs (or (:elm-async-channels @ed) {})
        ch-id (chan-id ch)]
    (object/assoc-in! ed
                      [:elm-async-channels]
                      (assoc chs ch-id ch))
    ch-id))

(defn- get-ch [ed ch-id]
  (get-in @ed [:elm-async-channels ch-id]))

(defn- remove-ch [ed ch-id]
  (let [chs (or (:elm-async-channels @ed) {})]
    (object/assoc-in! ed
                      [:elm-async-channels]
                      (dissoc chs ch-id ))))


(defn- get-token [ed]
  (let [pos (editor/->cursor ed)
        sym (find-symbol ed pos)]
    (when (and sym (seq sym))
      {:string sym
       :start (- (:ch pos) (count sym))
       :end (:ch pos)
       :line (:line pos)})))




(defn- trunc-str [v max-length]
  (if (> 100 (count v))
    sig
    (str (.substring v 0 max-lenght) "...")))


(defn- display-text-elem [token completion]
  (let [elem (.createElement js/document "div")]
    (dom/add-class elem "display-text")
    (dom/html elem (js/wrapMatch (.-text completion) #js {:matched (:string token)}))
    elem))

(defn- module-elem [completion]
  (let [elem (.createElement js/document "div")]
    (dom/add-class elem "module")
    (dom/html elem (.-moduleName completion))
    elem))

(defui item-wrapper []
  [:div
   [:div.elm-completion ""]])

(defn item-ui [token completion]
  (let [item-wrapper (item-wrapper)
        wrapper (dom/$ "div.elm-completion" item-wrapper)]
    (dom/append wrapper (display-text-elem token completion))
    (dom/append wrapper (module-elem completion))
    item-wrapper))



(defn- ->hints [token completions]
  (map #(hash-map :text (:candidate %)
                  :displayText (:candidate %)
                  :moduleName (:module-name %)
                  :signature (:signature %)
                  :render (fn [el self data]
                            (dom/html el (dom/html (item-ui token data))))
                  :from {:ch (:start token) :line (:line token)}
                  :to {:ch (:end token) :line (:line token)})
       completions))



(defn- connected? [ed]
  (when-let [default-client (-> @ed :client :default)] ;; dont if not already connected
    (when @default-client
      true)))


(def bg-parser
  (background
    (fn [obj-id ch-id elm-parser-path elm-code]
      (let [parser (js/require elm-parser-path)]
         (try
           (let [res (parser/parse elm-code #js {:startRule "headerOnly"})]
             (js/_send obj-id
                       :elm.hints.parser.results
                       #js {:status "ok" :ch-id ch-id :module res}))
           (catch :default e
             (js/_send obj-id
                       :elm.hints.parser.results
                       #js {:status "fail" :ch-id ch-id :error e})))))))



(behavior ::elm-hints-parser-results
          :triggers #{:elm.hints.parser.results}
          :desc "Trigger hints after parsing relevant parts of editor for hinting"
          :reaction (fn [ed res]
                      (let [pos (editor/->cursor ed)
                            token (get-token ed)
                            path (-> @ed :info :path)
                            {:keys [ch-id module status error]} (utils/mod-js->clj res :keywordize-keys true)
                            ch (get-ch ed ch-id)
                            get-hints (partial ast/get-hints
                                               {:token (:string token)
                                                :pos pos
                                                :ed ed}
                                               path
                                               (project-path path))]
                        (if (= "ok" status)
                          (->> (get-hints {:ast module
                                           :file path})
                               (->hints token)
                               (put! ch))
                          (->> (get-hints)
                               (->hints token)
                               (put! ch)))
                        (remove-ch ed ch-id))))



(behavior ::elm-hints
          :triggers #{:init-hints}
          :desc "Provide Elm hints for current cursor position"
          :reaction (fn [ed channels]
                      (let [pos (editor/->cursor ed)
                            token (get-token ed)
                            ch (chan)
                            path (-> @ed :info :path)]
                        (if (and token (connected? ed))
                          (if (ast/find-top-level-declaration-by-pos pos
                                                                     (project-path path)
                                                                     path)
                            (do ; don't need to parse module header for this scenario
                              (->> (ast/get-hints {:token (:string token)
                                                    :pos pos
                                                    :ed ed}
                                                   path
                                                   (project-path path))
                                   (->hints token)
                                   (put! ch))
                              (conj channels ch))
                            (let [ch-id (store-ch ed ch)]
                              (bg-parser ed ch-id ast/elm-parser-path (editor/->val ed))
                              (conj channels ch)))
                          channels))))
