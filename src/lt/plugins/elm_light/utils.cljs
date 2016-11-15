(ns lt.plugins.elm-light.utils
  (:require [lt.objs.files :as files]
            [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool]
            [lt.objs.plugins :as plugins]
            [lt.object :as object]
            [fetch.core :as fetch]
            [lt.util.dom :as dom]
            [clojure.string :as s]))

(def elm-plugin-dir (plugins/find-plugin "elm-light"))
(def cp (js/require "child_process"))
(def marked (js/require (files/join elm-plugin-dir "node_modules" "marked")))

(def pattern #"^(\d+)\.(\d+)\.(\d+)(?:-([0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*))?(?:\+([0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*))?$")


(defn get-elm-version []
  (try
    (s/trim (.toString (.execSync cp "elm --version" #js {:stdio "pipe"})))
    (catch :default e
      (console/error "elm command not found in path")
      nil)))


(defn try-parse-int [o]
  (try
    (js/parseInt o)
    (catch :default e o)))


(defn parse-version [s]
  (let [[[_ major minor patch pre-release build]] (re-seq pattern s)]
    {:major (try-parse-int major)
     :minor (try-parse-int minor)
     :patch (try-parse-int patch)
     :pre-release pre-release
     :build build}))


(defn compare-versions [a b]
  (let [key-for-ident #(when %
                         (into [] (map try-parse-int (s/split % #"\."))))
        kay           (juxt :major
                            :minor
                            :patch
                            #(nil? (% :pre-release))
                            #(key-for-ident (:pre-release %))
                            #(key-for-ident (:build %)))]
    (compare (kay (parse-version a))
             (kay (parse-version b)))))

(defn ver-GT? [a b]
  (pos? (compare-versions a b)))

(defn ver-LT? [a b]
  (neg? (compare-versions a b)))

(defn ver-EQ? [a b]
  (zero? (compare-versions a b)))

(defn ver-LTE? [a b]
  (or
    (ver-LT? a b)
    (ver-EQ? a b)))


(defn parse-bounds-op [op]
  (if (= "<" op) ver-LT? ver-LTE?))

(defn parse-version-bounds [bounds-str]
  (let [[lower lower-op _ upper-op upper] (s/split bounds-str " ")]
    {:lower lower
     :lower-op (parse-bounds-op lower-op)
     :upper upper
     :upper-op (parse-bounds-op upper-op)}))

(defn satisfies-version [v-str bounds-str]
  (let [{:keys [lower lower-op upper upper-op]} (parse-version-bounds bounds-str)]
    (and (lower-op lower v-str)
         (upper-op v-str upper))))


(defn str-contains [s v]
  (> (.indexOf s v) -1))



(defn find-symbol [ed pos]
  (let [curr-tok (editor/->token ed pos)]
    (case (:type curr-tok)
      "def" (str (find-symbol ed (assoc pos :ch (:start curr-tok))) (:string curr-tok))
      "keyword" (str (find-symbol ed (assoc pos :ch (:start curr-tok))) (:string curr-tok))
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

(defn valid-project-elm-version [project-path]
  (let [elm (get-elm-version)
        json (parse-json-file (files/join project-path "elm-package.json"))
        v-bounds (:elm-version json)]

    (if (and elm json v-bounds)
      (if (satisfies-version elm v-bounds)
        [true nil]
        [false (str "Invalid elm-version for project: " v-bounds ", but currently installed elm platform is in version: " elm)])
      [false "Error checking elm version constraint"])))

(defn project-satisfies-version? [version project-path]
  (let [json (parse-json-file (files/join project-path "elm-package.json"))
        v-bounds (:elm-version json)]

    (if (and version json v-bounds)
      (if (satisfies-version version v-bounds)
        [true nil]
        [false v-bounds])
      (do
        (console/error "Error checking elm version constraints.")
        [false v-bounds]))))


;(project-satisfies-version? "0.19.0" "/Users/mrundberget/projects/elm-docker-cloud")


;(valid-project-elm-version "/Users/mrundberget/projects/elm-docker-cloud")


(defn fetch-all-packages
  "Fetch all packages from package.elm-lang.org"
  [callback]
  (fetch/xhr (str "http://package.elm-lang.org/all-packages?date=" (.getTime (new js/Date)))
             {}
             (fn [data]
               (let [pkgs (js->clj (.parse js/JSON data) :keywordize-keys true)]
                 (callback pkgs)))))


(defn mod-js->clj
  "Recursively transforms JavaScript arrays into ClojureScript
  vectors, and JavaScript objects into ClojureScript maps.  With
  option ':keywordize-keys true' will convert object fields from
  strings to keywords."
  ([x] (mod-js->clj3 x {:keywordize-keys false}))
  ([x & opts]
    (cond
      (satisfies? IEncodeClojure x)
      (-js->clj x (apply array-map opts))
      (seq opts)
      (let [{:keys [keywordize-keys]} opts
            keyfn (if keywordize-keys keyword str)
            f (fn thisfn [x]
                (cond
                  (seq? x)
                  (doall (map thisfn x))
                  (coll? x)
                  (into (empty x) (map thisfn x))
                  (array? x)
                  (persistent!
                    (reduce #(conj! %1 (thisfn %2))
                            (transient []) x))
                  (identical? (type x) js/Object)
                  (persistent!
                    (reduce (fn [r k] (assoc! r (keyfn k) (thisfn (aget x k))))
                            (transient {}) (js-keys x)))
                  :else x))]
        (f x)))))

