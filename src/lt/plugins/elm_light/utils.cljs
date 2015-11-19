(ns lt.plugins.elm-light.utils
  (:require [lt.objs.files :as files]
            [lt.objs.editor :as editor]))


(defn find-symbol [ed pos]
  (let [curr-tok (editor/->token ed pos)]
    (case (:type curr-tok)
      "qualifier" (str (find-symbol ed (assoc pos :ch (:start curr-tok))) (:string curr-tok))
      "variable" (str (find-symbol ed (assoc pos :ch (:start curr-tok))) (:string curr-tok))
      "")))



(defn- project-path [path]
  (if (files/dir? path)
    path
    (if-let [pkg-json (files/walk-up-find path "elm-package.json")]
      (files/parent pkg-json)
      nil ;(files/parent path)
      )))

(defn reactor-path [path]
  (let [root (project-path path)]
    (when (= (.indexOf path root) 0)
      (subs path (count root)))))
