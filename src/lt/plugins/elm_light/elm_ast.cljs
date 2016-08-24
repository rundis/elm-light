(ns lt.plugins.elm-light.elm-ast
  (:require [lt.objs.console :as console]
            [lt.object :as object]
            [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool]
            [lt.objs.statusbar :as statusbar]
            [crate.binding :refer [bound]])
  (:require-macros [lt.macros :refer [defui behavior]]))



(defn idx-of
  [pred coll]
  (first
    (keep-indexed
      (fn [idx x]
        (when (pred x)
          idx))
      coll)))


;; High level desc of ast structure
(comment
  [{:project "/somedir/another/projectDir"
    :file-asts [{:file "/somedir/another/projectDir/src/MyModule.elm"
                 :ast {:moduleDeclaration {}
                       :doc "some module doc"
                       :imports []
                       :declarations []}}
                {:file "/somedir/another/projectDir/elm-stuff/packages/elm-lang/core/4.0.5/src/Array.elm"
                 :ast {:moduleDeclaration {}
                       :doc "some module doc"
                       :imports []
                       :declarations []}
                 :package {:name "elm-lang/core"
                           :version "4.0.5"}}]}
   {:project "/somedir/another/projectDir2"
    :file-asts [{:file "/somedir/another/projectDir2/src/MyModule2.elm"
                 :ast {:moduleDeclaration {}
                       :doc "some module doc2"
                       :imports []
                       :declarations []}}
                {:file "/somedir/another/projectDir2/elm-stuff/packages/elm-lang/core/4.0.5/src/Array.elm"
                 :ast {:moduleDeclaration {}
                       :doc "some module doc2"
                       :imports []
                       :declarations []}
                 :package {:name "elm-lang/core"
                           :version "4.0.5"}}]}])

(defonce project-asts
  (atom []))




;; AST Mutants

(defn upsert-ast! [project file-ast]
  (let [prj-idx (idx-of #(= project (:project %)) @project-asts)]
    (if prj-idx
      (swap! project-asts update-in
             [prj-idx :file-asts]
             (fn [file-asts]
               (-> (filterv #(not= (:file file-ast) (:file %)) file-asts)
                   (conj file-ast))))
      (swap! project-asts conj {:project project :file-asts [file-ast]}))))


(defn delete-ast! [project file]
  (when-let [prj-idx (idx-of #(= project (:project %)) @project-asts)]
    (swap! project-asts update-in
           [prj-idx :file-asts]
           (fn [file-asts]
             (filterv #(not= file (:file %)) file-asts)))))

(defn delete-package-asts! [project]
  (when-let [prj-idx (idx-of #(= project (:project %)) @project-asts)]
    (swap! project-asts update-in
           [prj-idx :file-asts]
           (fn [file-asts]
             (vec (remove :package file-asts))))))

(defn delete-project-ast! [project]
  (swap! project-asts
         (fn [prjs]
           (filterv #(not= project (:project %)) prjs))))

(defn reset-asts! []
  (reset! project-asts []))



;; AST Queries
(defn get-project [project]
  (->> @project-asts
       (filterv #(= project (:project %)))
       first))

(defn get-module-ast [project module-file]
  (when-let [prj (get-project project)]
    (->> prj
         :file-asts
         (filterv #(= module-file (:file %)))
         first)))


(defn get-module-by-name [project module-name]
  (when-let [prj (get-project project)]
    (->> prj
         :file-asts
         (filterv #(= module-name (-> % :ast :moduleDeclaration :value)))
         first)))



;; Helpers
(defn get-module-name [module]
  (-> module :ast :moduleDeclaration :value))

(defn exposeAll? [exposing]
  (= "exposeAll" (-> exposing first :type)))

(defn extract-exports [exposing]
  (->> exposing
       (map :value)))

(defn exposed-by-module? [module candidate]
  (let [exposing (-> module :ast :moduleDeclaration :exposing)]
    (if (exposeAll? candidate)
      true
      (-> (extract-exports exposing) set (contains? candidate)))))



(defn enrich-module-declarations [module]
  (->> (-> module :ast :declarations)
       (map #(assoc % :exposed?  (exposed-by-module? module (:value %))
               :file (:file module)
               :module-name (-> module :ast :moduleDeclaration :value )
               :package (-> module :package)))))

(defn get-exposed-declarations [module]
  (->> (enrich-module-declarations module)
       (filter :exposed?)))

(defn get-import-candidate-tokens [import-def exposed-declaration]
  (->> [(str (:value import-def) "." (:value exposed-declaration) )
        (when-let [alias (:alias import-def)]
          (str alias "." (:value exposed-declaration)))
        (when (or (exposeAll? (:exposing import-def))
                  (->> (:exposing import-def)
                       (filter #(= (:value exposed-declaration) (:value %)))
                       seq))
          (:value exposed-declaration))]
       (filter (complement nil?))
       (into #{})))

(defn get-external-candidates [module modules]
  (let [imports (-> module :ast :imports)
        imported-mod-names (->> imports
                                (map :value)
                                (into #{}))
        external-exposed (->> modules
                              (filter #(and (not= (get-module-name module) (get-module-name %))
                                            (contains? imported-mod-names (get-module-name %))))
                              (mapcat #(get-exposed-declarations %)))]
    (->> imports
         (mapcat (fn [imp]
                   (->> (filter #(= (:value imp) (:module-name %)) external-exposed)
                        (map #(assoc % :candidate-tokens (get-import-candidate-tokens imp %)))))))))


(defn get-default-candidates
  "Get candidates for Elm default imports as per
  https://github.com/elm-lang/core"
  [modules]
  (concat
    (->> (filterv #(= "Basics" (-> % :ast :moduleDeclaration :value)) modules)
         (mapcat get-exposed-declarations)
         (map #(assoc % :candidate-tokens #{(:value %)}) ))
    (->> (filterv #(= "Debug" (-> % :ast :moduleDeclaration :value)) modules)
         (mapcat get-exposed-declarations)
         (map #(assoc % :candidate-tokens #{(str "Debug." (:value %))}) ))
    (->> (filterv #(= "Maybe" (-> % :ast :moduleDeclaration :value)) modules)
         (mapcat get-exposed-declarations)
         (map #(assoc % :candidate-tokens #{(str "Maybe." (:value %))}) ))
    (->> (filterv #(= "Result" (-> % :ast :moduleDeclaration :value)) modules)
         (mapcat get-exposed-declarations)
         (map #(assoc % :candidate-tokens #{(str "Result." (:value %))}) ))
    (->> (filterv #(= "Platform" (-> % :ast :moduleDeclaration :value)) modules)
         (mapcat get-exposed-declarations)
         (map #(assoc % :candidate-tokens
                 (if (= (:value %) "Program")
                   #{"Program"}
                   #{(str "Platform." (:value %))}))))
    (->> (filterv #(= "Platform.Cmd" (-> % :ast :moduleDeclaration :value)) modules)
         (mapcat get-exposed-declarations)
         (map #(assoc % :candidate-tokens
                 (case (:value %)
                   "Cmd" #{"Cmd"}
                   "!" #{"!"}
                   #{(str "Platform.Cmd" (:value %))}))))
    (->> (filterv #(= "Platform.Sub" (-> % :ast :moduleDeclaration :value)) modules)
         (mapcat get-exposed-declarations)
         (map #(assoc % :candidate-tokens
                 (if (= (:value %) "Sub")
                   #{"Sub"}
                   #{(str "Platform.Sub." (:value %))}))))
    (->> (filterv #(= "List" (-> % :ast :moduleDeclaration :value)) modules)
         (mapcat get-exposed-declarations)
         (map #(assoc % :candidate-tokens
                 (if (= "::" (:value %))
                   #{"::"}
                   #{(str "List." (:value %))}))))))

(defn get-current-module-candidates [module]
  (->> (enrich-module-declarations module)
       (map #(assoc % :candidate-tokens #{(:value %)
                                          (str (get-module-name module) "." (:value %) ) }))))

(defn get-jump-to-candidates [module modules]
  (concat
    (get-current-module-candidates module)
    (get-external-candidates module modules)
    (get-default-candidates modules)))



(defn get-candidate-by-token [token module modules]
  (->> (get-jump-to-candidates module modules)
       (filter #(contains? (:candidate-tokens % ) token))
       first))



;; FEATURES


;; JUMP TO DEFINITION

(defn get-jump-to-definition [token module-file project]
  (when-let [module (get-module-ast project module-file)]
    (get-candidate-by-token token module (:file-asts (get-project project)))))


;; (->> @project-asts
;;      first
;;      :file-asts
;;      (map :ast)
;;      (map :moduleDeclaration)
;;      (map :value))


;; (get-jump-to-definition
;;   "radians"
;;   "/Users/mrundberget/projects/elm-clj-chat/src-elm/Dill.elm"
;;   "/Users/mrundberget/projects/elm-clj-chat")



;; (get-project "/Users/mrundberget/projects/elm-clj-chat")

;; (get-jump-to-definition
;;   "Direction"
;;   "/Users/mrundberget/projects/elm-clj-chat/src-elm/Dill.elm"
;;   "/Users/mrundberget/projects/elm-clj-chat")



;; (upsert-ast! "/somedir/another/projectDir"
;;              {:file "/somedir/another/projectDir2/src/Jalla.elm"
;;               :ast {:dill "mall"}
;;               :package {:name "somepack" :version "123"}})

;; (deref project-asts)




;;**********************************************************
;; AST status shown in statusbar
;;**********************************************************

(defn- status-class [{:keys [status]}]
  (case status
    :error "error"
    :ok "ok"
    ""))



(defn- status-text [{:keys [status error]}]
  (str "AST: "
       (case status
         :ok "Ok"
         :error "Error"
         "Not connected")))

(defn ->status-ui [{:keys [ast-summary]}]
  [:span {:class (str "ast-status " (status-class ast-summary))}
   (status-text ast-summary)])


(behavior ::update-ast-status
          :triggers #{:update!}
          :reaction (fn [this f]
                      (object/update! this [:ast-summary] f)))

(object/object* ::statusbar.ast-status
                :triggers #{}
                :behaviors #{::update-ast-status}
                :ast-summary {:status ""}
                :init (fn [this]
                        (statusbar/statusbar-item (bound this ->status-ui) "")))

(def statusbar-ast-summary (object/create ::statusbar.ast-status))
(statusbar/add-statusbar-item statusbar-ast-summary)



(defn update-status-for-editor [ed]
  (let [{:keys [status error]} (:ast-status @ed)]
    (object/raise statusbar-ast-summary
                  :update!
                  #(assoc % :status status :error error))))

(behavior ::update-ast-status-on-editor-change
          :triggers #{:focus}
          :reaction (fn [ed]
                      (when (not (object/has-tag? ed :editor.elm))
                        (update-status-for-editor ed))))




