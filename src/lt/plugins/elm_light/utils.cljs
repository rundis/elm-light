(ns lt.plugins.elm-light.utils
  (:require [lt.objs.files :as files]
            [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool]
            [lt.objs.plugins :as plugins]
            [lt.object :as object]
            [fetch.core :as fetch]
            [lt.util.dom :as dom]))

(def elm-plugin-dir (plugins/find-plugin "elm-light"))

(def marked (js/require (files/join elm-plugin-dir "node_modules" "marked")))


(defn str-contains [s v]
  (> (.indexOf s v) -1))



(defn find-symbol [ed pos]
  (let [curr-tok (editor/->token ed pos)]
    (case (:type curr-tok)
      "qualifier" (str (find-symbol ed (assoc pos :ch (:start curr-tok))) (:string curr-tok))
      "variable" (str (find-symbol ed (assoc pos :ch (:start curr-tok))) (:string curr-tok))
      "variable-2" (str (find-symbol ed (assoc pos :ch (:start curr-tok))) (:string curr-tok))
      "variable-3" (str (find-symbol ed (assoc pos :ch (:start curr-tok))) (:string curr-tok))
      "builtin" (str (find-symbol ed (assoc pos :ch (:start curr-tok))) (:string curr-tok))
      "")))



(defn project-path [path]
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

(defn parse-json-file [json-file]
  (when (files/exists? json-file)
    (-> (->> (files/open-sync json-file)
             :content
             (.parse js/JSON))
        (js->clj :keywordize-keys true))))


(defn pretty-json [data]
  (.stringify js/JSON (clj->js data) null 4))

(defn nskw->name [kw]
  (str (namespace kw) "/" (name kw)))


(defn get-project-deps [project-path]
  (let [pkg-json (files/join project-path "elm-package.json")
        deps-json (files/join project-path "elm-stuff" "exact-dependencies.json")]

    (->> (parse-json-file pkg-json)
         :dependencies
         (mapv (fn [[k v]]
                 {:package (nskw->name k) :range v}))
         (concat (->> (parse-json-file deps-json)
                      (mapv (fn [[k v]]
                              {:package (nskw->name k) :exact v}))))
         (group-by :package)
         (mapv (fn [[_ vs]] (apply merge vs))))))

(defn fetch-all-packages
  "Fetch all packages from package.elm-lang.org"
  [callback]
  (fetch/xhr (str "http://package.elm-lang.org/all-packages?date=" (.getTime (new js/Date)))
             {}
             (fn [data]
               (let [pkgs (js->clj (.parse js/JSON data) :keywordize-keys true)]
                 (callback pkgs)))))



