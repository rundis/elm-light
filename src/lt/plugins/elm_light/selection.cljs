(ns lt.plugins.elm-light.selection
  (:require [lt.objs.editor :as editor]))


(defn indented? [s]
  (> (count (re-find #"\s*" s)) 0))

(defn comment-line? [ed l]
  (= "comment" (:type (editor/->token ed {:line l :ch 1}))))

(defn no-content-line? [s]
  (and (not (nil? s))
       (= 0 (count (.trim s)))))


(defn top-level-line? [ed l]
  (let [line-str (editor/line ed l)]
    (and (not (indented? line-str))
         (not (no-content-line? line-str))
         (not (comment-line? ed l)))))


(defn get-top-level-line-back [ed pos]
  (loop [line (:line pos)]
    (cond
     (top-level-line? ed line) line
     (= 0 line) nil
     :else (recur (dec line)))))

(defn get-top-level-line-down [ed start-line]
  (let [last-line (editor/last-line ed)]
    (loop [line start-line]
      (cond
       (top-level-line? ed line) line
       (= line last-line) nil
       :else (recur (inc line))))))


(defn maybe-backup [ed l]
  (loop [line l]
    (if (or (no-content-line? (editor/line ed line))
            (comment-line? ed line))
      (recur (dec line))
      line)))


(defn get-top-level-expr [ed pos]
  (when-let [start-line  (get-top-level-line-back ed pos)]
    (let [last-line (editor/last-line ed)
          end-line (maybe-backup ed
                                 (if (= last-line start-line)
                                   start-line
                                   (if-let [l (get-top-level-line-down ed (inc start-line))]
                                     (dec l)
                                     last-line)))]
      {:from {:line start-line :ch 0}
       :to   {:line end-line   :ch (editor/line-length ed end-line)}})))
