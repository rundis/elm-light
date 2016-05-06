(ns lt.plugins.elm-light.hinter
  "Dummy provider to illustrate async hinting"
  (:require [lt.plugins.elm-light.autocompleter.core :as ac]
            [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool]
            [lt.objs.command :as cmd]
            [lt.object :as object]
            [lt.util.js :as jsutil]
            [lt.util.dom :as dom]
            [lt.objs.eval :as eval]
            [lt.plugins.elm-light.clients :refer [try-connect]]
            [lt.plugins.elm-light.utils :refer [find-symbol]]
            [lt.objs.clients :as clients]
            [cljs.core.async :as async :refer [put! chan]])
  (:require-macros [lt.macros :refer [behavior background ]]))


;; TODO: not exactly uid quality...
(defn- chan-id [ch]
  (+ (ac/curr-time) (hash ch)))

(defn- store-ch [ed ch]
  (let [chs (or (:elm-hint-channels @ed) {})
        ch-id (chan-id ch)]
    (object/assoc-in! ed
                      [:elm-hint-channels]
                      (assoc chs ch-id ch))
    ch-id))

(defn- get-ch [ed ch-id]
  (get-in @ed [:elm-hint-channels ch-id]))

(defn- remove-ch [ed ch-id]
  (let [chs (or (:elm-hint-channels @ed) {})]
    (object/assoc-in! ed
                      [:elm-hint-channels]
                      (dissoc chs ch-id ))))


(defn- get-token [ed]
  (let [pos (editor/->cursor ed)
        sym (find-symbol ed pos)]
    (when (and sym (seq sym))
      {:string sym
       :start (- (:ch pos) (count sym))
       :end (:ch pos)
       :line (:line pos)})))



(behavior ::trigger-update-hints
          :triggers #{:editor.elm.hints.update!}
          :reaction (fn [ed token channel]
                      (let [info (:info @ed)
                            command :editor.elm.hint]
                        (clients/send (eval/get-client! {:command command
                                                         :info info
                                                         :origin ed
                                                         :create try-connect})
                                      command (assoc info :token token :channel channel) :only ed))))



(defn- ->hints [token completions]
  (map #(hash-map :text (:completion %)
                  :displayText (:text %)
                  :render (fn [el self data]
                            (dom/html el (js/wrapMatch (.-displayText data) #js {:matched (:string token)})))
                  :from {:ch (:start token) :line (:line token)}
                  :to {:ch (:end token) :line (:line token)})
       completions))


(behavior ::async-hint-results
          :triggers #{:editor.elm.hints.result}
          :desc "Async dummy: Hint results"
          :reaction (fn [ed {:keys [channel token completions]}]
                      (let [hints (->hints token completions)]
                        (when-let [ch (get-ch ed channel)]
                          (object/assoc-in! ed [:elm-hint-cached-hints] hints)
                          (object/assoc-in! ed [:elm-hint-cached-token] token)
                          (put! ch hints)
                          (remove-ch ed channel)))))


(defn- maybe-cached-hints [token cached-token cached-hints]
  (let [starts-with #(and %1 %2 (= 0 (.indexOf %1 %2)))]
    (when (and cached-token
               (seq (:string cached-token))
               (seq cached-hints)
               (and (= (:line token) (:line cached-token)))
               (and (= (:start token) (:start cached-token)))
               (starts-with (:string token) (:string cached-token)))
      (->> (filter #(starts-with (:text %) (:string token)) cached-hints)
           (map #(assoc-in % [:to :ch] (:end token)))
           (map #(assoc % :render (fn [el self data]
                                    (dom/html el (js/wrapMatch (.-displayText data) #js {:matched (:string token)})))))))))


(defn- connected? [ed]
  (when-let [default-client (-> @ed :client :default)] ;; dont if not already connected
    (when @default-client
      true)))


(behavior ::async-hints
          :triggers #{:init-hints}
          :desc "Autocompleter: Async dummy hints"
          :reaction (fn [ed channels]
                      (let [pos (editor/->cursor ed)
                            token (get-token ed)
                            cached-token (-> @ed :elm-hint-cached-token)
                            cached-hints (-> @ed :elm-hint-cached-hints)
                            ch (chan)]

                        (if (and token (connected? ed))
                          (do
                            (if-let [hints (maybe-cached-hints token cached-token cached-hints)]
                              (put! ch hints)
                              (do
                                (object/raise ed :editor.elm.hints.update! token (store-ch ed ch))))
                            (conj channels ch))
                          channels))))
