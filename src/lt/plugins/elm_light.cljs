(ns lt.plugins.elm-light
  (:require [lt.plugins.elm-light.selection :as elm-sel]
            [lt.plugins.elm-light.utils :refer [find-symbol project-path reactor-path parse-json-file str-contains]]
            [lt.plugins.elm-light.clients :refer [try-connect get-eval-client get-eval-client-if-connected elm]]
            [lt.plugins.elm-light.elm-ast :as elm-ast]
            [lt.plugins.elm-light.linter :as linter]
            [lt.plugins.elm-light.gutter :as gutter]
            [lt.plugins.elm-light.widgets.selector :as selector]
            [lt.object :as object]
            [lt.objs.command :as cmd]
            [lt.objs.editor.pool :as pool]
            [lt.objs.editor :as editor]
            [lt.objs.tabs :as tabs]
            [lt.objs.notifos :as notifos]
            [lt.objs.console :as console]
            [lt.objs.clients :as clients]
            [lt.objs.popup :as popup]
            [lt.objs.dialogs :as dialogs]
            [lt.objs.files :as files]
            [lt.objs.browser :as browser]
            [lt.objs.eval :as eval]
            [lt.objs.sidebar.clients :as scl]
            [lt.util.js :as js-util]
            [clojure.string :as s])
  (:require-macros [lt.macros :refer [behavior]]))




(behavior ::elm-unsupported
          :triggers #{:elm.unsupported}
          :reaction (fn [_ res]
                      (notifos/done-working)
                      (notifos/set-msg! (:err res) {:class "error"})))


(defn colorize-msg [msg]
  (-> msg
      (s/replace #"\[\d+m" "")
      (s/replace #"\[0m" "")))


(defn ->lt-range [{:keys [start end]}]
  {:from {:ch (dec (:column start)) :line (dec (:line start))}
   :to   {:ch (dec (:column end)) :line (dec (:line end))}})


(defn- maybe-trim [ss]
  (when ss
    (s/trim ss)))

(defn- str-contains? [source target]
  (when (and source target)
    (< -1 (.indexOf source target))))

(defn- maybe-strip-hint [source]
  (when source
    (if (str-contains? source "Hint:")
      (-> (re-find #"(?m)([\s\S]*?(?=Hint:))" source)
          first
          s/trim)
      source)))

(defn linter-action [ed row]
  (case (:tag row)
    "unused import" [{:text "Remove"
                      :action (fn [_ {:keys [from to]}]
                                (editor/replace ed from to "")
                                (js/CodeMirror.commands.deleteLine (editor/->cm-ed ed)))}]

    "missing type annotation" [{:text "Add"
                                :action (fn [{:keys [details]} {:keys [from]}]
                                          (let [ann (-> (re-find #"(?m)I inferred the type annotation so you can copy it into your code:([\s\S]*$)" details)
                                                        second
                                                        s/trim
                                                        (str "\n"))]
                                            (editor/replace ed from ann)))}]

    "NAMING ERROR" (let [fixes (->> (re-find #"(?m)Maybe you want one of the following\?(:?[\s\S]*$)" (:details row))
                                    second
                                    (s/split-lines)
                                    (map s/trim)
                                    (filter seq))]
                     (map
                       (fn [suggestion]
                         {:text suggestion
                          :action (fn [_ {:keys [from to]}]
                                    (editor/replace ed from to suggestion))})
                       fixes))

    "TYPE MISMATCH"  (let [ann (-> (re-find #"(?m)But I am inferring that the definition has this type:([\s\S]*$)" (:details row))
                                   second
                                   maybe-trim
                                   maybe-strip-hint)]
                       (if (and ann (not (str-contains? ann "...")))
                         [{:text "Fix annotation"
                           :action (fn [_ {:keys [from to]}]
                                     (editor/replace ed from to ann))}]
                         ;; TODO: Could potentially handle typo's in records here too, but need to reliably find what the annotation belogs too (:
                         []))


    []))


(defn display-make-results [ed res path]
  (object/raise ed :clear-linter-results!)
  (when (seq (filter #(= "error" (:type %)) res))
    (notifos/set-msg! "Elm make returned errors; check you editor or the console for details"
                      {:class "error"}))

  (doseq [{:keys [file type overview details region subregion tag] :as row} res]
    (let [msg (str overview "\n" (colorize-msg details))]
      (cond
       (and (= path file)
            (some #{"warning" "error"} [type]))
       (object/raise ed :linter-result! {:title tag
                                         :details msg
                                         :category (keyword type)
                                         :actions (linter-action ed row)
                                         :code-range (->lt-range (or subregion region))})

       :else (console/verbatim
              (list [:em.file file] [:em.line "[Elm error]"] ": " [:pre overview]) "error")))))




(behavior ::lint
          :description "Lint (/make) a given elm file"
          :triggers #{:lint}
          :reaction (fn [ed result-handler-trigger]
                      (let [info (:info @ed)
                            cl (get-eval-client ed :editor.elm.lint)]
                        (notifos/working (str "Starting elm linting of: " (:path info)))
                        (clients/send cl
                                      :editor.elm.lint
                                      (assoc info :project-path (project-path (:path info))
                                                  :handler (name result-handler-trigger))
                                      :only ed))))




(behavior ::elm-lint-res
          :triggers #{:elm.lint.res}
          :reaction (fn [ed res]
                      (let [path (-> @ed :info :path)]
                        (notifos/done-working "Elm linted")
                        (display-make-results ed res path))))



(behavior ::make
          :description "Make (to js) a given elm file"
          :triggers #{:elm.make}
          :reaction (fn [ed]
                      (let [info (:info @ed)
                            cl (get-eval-client ed :editor.elm.make)]
                        (notifos/working (str "Starting elm make for: " (:path info)))
                        (clients/send cl
                                      :editor.elm.make (assoc info :project-path (project-path (:path info)))
                                      :only ed))))


(defn missing-make-info-popup []
  (popup/popup! {:header "You need to configure make info for your project"
                 :body (str "You configure a key \"make-info\" in your elm-package.json
                              Example:
                             \"make-info\": {\"main\": \"src/Main.elm\", \"out\": \"dist/main.js\"}")
                 :buttons [{:label "Ok"}]}))

(behavior ::make-project
          :description "Make Elm Project"
          :triggers #{:elm.make-project}
          :reaction (fn [ed]
                      (let [info (:info @ed)
                            project-path (project-path (:path info))
                            {:keys [main out]} (-> project-path
                                                   (files/join "elm-package.json")
                                                   parse-json-file
                                                   :make-info)]
                        (if (and main out)
                          (do
                            (notifos/working (str "Starting elm make for project: " project-path))
                            (clients/send (get-eval-client ed :editor.elm.make)
                                          :editor.elm.make
                                          (assoc info :project-path project-path
                                                      :path (files/join project-path main)
                                                      :outputFile (files/join project-path out))
                                          :only ed))
                          (missing-make-info-popup)))))


(behavior ::elm-make-res
          :triggers #{:elm.make.res}
          :reaction (fn [ed {:keys [outputFile res]}]
                      (notifos/done-working (str "Elm make compiled to: " outputFile))
                      (display-make-results ed res path)))


(behavior ::elm-make-err
          :triggers #{:elm.make.err}
          :reaction (fn [ed res]
                      (let [path (-> @ed :info :path)]
                        (notifos/done-working "")
                        (notifos/set-msg! (str "Elm make error: " res) {:class "error"})
                        (console/error res))))



;;****************************************************
;; Eval
;;****************************************************



(behavior ::on-eval.one
          :desc "Elm repl: Eval current selection"
          :triggers #{:eval.one}
          :reaction (fn [ed]
                      (let [pos (editor/->cursor ed)
                            info (conj (:info @ed)
                                       (if (editor/selection? ed)
                                         {:code (editor/selection ed) :meta {:start (-> (editor/->cursor ed "start") :line)
                                                                             :end (-> (editor/->cursor ed "end") :line)}}
                                         (if-let [rng (elm-sel/get-top-level-expr ed pos)]
                                           {:pos pos
                                            :code (editor/range ed (:from rng) (:to rng))
                                            :meta {:start (-> rng :from :line)
                                                    :end (-> rng :end :line)}}
                                           {:pos pos
                                            :code (editor/line ed (:line pos))
                                            :meta {:start (:line pos) :end (:line pos)}})))]
                        (object/raise elm :eval! {:origin ed :info info}))))


(behavior ::eval!
          :triggers #{:eval!}
          :reaction (fn [this event]
                      (let [{:keys [info origin]} event]
                        (notifos/working "Evaluating elm...")
                        (clients/send (eval/get-client! {:command :editor.eval.elm
                                                         :origin origin
                                                         :info info
                                                         :create try-connect})
                                      :editor.eval.elm info
                                      :only origin))))

(behavior ::eval-result
          :desc "Elm repl: Eval result"
          :triggers #{:editor.elm.eval.res}
          :reaction (fn [ed res]
                      (notifos/done-working "Elm evaluated")
                      (object/raise ed
                                    :editor.result
                                    (:result res)
                                    {:line (-> res :meta :start)})))


(behavior ::eval-err
          :desc "Elm repl: Eval error"
          :triggers #{:editor.elm.eval.err}
          :reaction (fn [ed res]
                      (notifos/done-working)
                      (notifos/set-msg! "Elm eval reported errors." {:class "error"})
                      (object/raise ed
                                    :editor.exception
                                    (:result res)
                                    {:line (-> res :meta :start)})))



(behavior ::repl-restart!
          :triggers #{:elm.repl.restart}
          :reaction (fn [{:keys [info] :as ed}]
                      (when-let [default-client (-> @ed :client :default)] ;; dont if not already connected
                        (when @default-client
                          (notifos/working "Restaring elm-repl...")
                          (clients/send default-client
                                        :elm.repl.restart info
                                        :only ed)))))

(behavior ::repl-restart-res
          :triggers #{:elm.repl.restart.res}
          :reaction (fn [ed res]
                      (notifos/done-working "Elm Repl restarted")))



;TODO : Make debug optional !
(behavior ::elm-browse!
          :triggers #{:elm.browse}
          :reaction (fn [ed debug?]
                      (let [path (reactor-path (-> @ed :info :path))
                            client (get-eval-client ed :editor.eval.elm)]
                        (when (and client path)
                          (notifos/working "Opening elm file in browser")
                          (let [b (or (first (object/by-tag :browser))
                                      (browser/add))
                                get-url #(str "http://localhost:" (:reactor-port @client) path (if debug? "?debug" ""))]

                            (if (:connected @client)
                              (object/raise b :navigate! (get-url))
                              (js-util/wait 100 #(object/raise b :navigate! (get-url)))))
                          (notifos/done-working)))))



;;****************************************************
;; DOCS
;;****************************************************

(behavior ::elm-doc-search
          :triggers #{:types+}
          :reaction (fn [this cur]
                      (conj cur {:label "elm" :trigger :docs.elm.search :file-types #{"elm"}})))




;;****************************************************
;; NEW AST Based features
;;****************************************************

(defn- get-editor-client [ed]
  (when-let [default-client (-> @ed :client :default)]
    (when @default-client
      default-client)))

(defn- location->pos [loc]
  {:line (-> loc :start :line dec)
   :ch (-> loc :start :column dec)})

(defn- ast-pass-through [ed msg]
  (clients/send
    (get-eval-client ed :editor.elm.ast.passthrough)
    :editor.elm.ast.passthrough
    msg
    :only ed))

(behavior ::elm-reload-ast
          :triggers #{:elm.reload-ast}
          :reaction (fn [ed]
                      (let [project (project-path (-> @ed :info :path))]
                        (notifos/working (str "Init reload of ast for project: " project))
                        (elm-ast/delete-project-ast! project)
                        (clients/send
                          (get-eval-client ed :elm.reload.ast)
                          :elm.reload.ast
                          {}
                          :only ed))))

(behavior ::elm-reload-ast-started
          :triggers #{:elm.ast.reload.started}
          :reaction (fn [ed]
                      (notifos/done-working "Parsing ast started")))



(behavior ::elm-jump-to-definition-start
          :triggers #{:editor.jump-to-definition-at-cursor!}
          :reaction (fn [ed]
                      (notifos/working (str "Initiate jump to definition"))
                      (if-let [default-client (get-editor-client ed)]
                        (object/raise ed :editor.elm.jump-to-definition {})
                        (ast-pass-through ed {:target :editor.elm.jump-to-definition
                                              :data {}}))))



(behavior ::elm-jump-to-definition
          :triggers #{:editor.elm.jump-to-definition}
          :reaction (fn [ed data]
                      (notifos/done-working "")
                      (let [pos (editor/->cursor ed)
                            token (find-symbol ed pos)
                            path (-> @ed :info :path)]
                        (when token
                          (when-let [target (elm-ast/get-jump-to-definition token path (project-path path))]
                            (object/raise lt.objs.jump-stack/jump-stack
                                            :jump-stack.push!
                                            ed
                                            (:file target)
                                            (location->pos (:location target))))))))


(behavior ::elm-doc-start
          :triggers #{:editor.doc}
          :reaction (fn [ed]
                      (notifos/working (str "Initiate show doc"))
                      (if-let [default-client (get-editor-client ed)]
                        (object/raise ed :editor.elm.doc {})
                        (ast-pass-through ed {:target :editor.elm.doc
                                              :data {}}))))


(behavior ::elm-doc
          :triggers #{:editor.elm.doc}
          :reaction (fn [ed]
                      (let [pos (editor/->cursor ed)
                            token (find-symbol ed pos)
                            path (-> @ed :info :path)]
                        (when token
                          (notifos/done-working ""))
                        (when-let [target (elm-ast/get-jump-to-definition token
                                                                          path
                                                                          (project-path path))]
                          (object/raise ed
                                        :editor.elm.doc.show!
                                        {:name (str (:module-name target) "." (:value target)
                                                    (when-let [pck (:package target)]
                                                      (str " (" (:name pck) " " (:version pck) ")")))
                                         :args (or
                                                 (-> target :annotation :signatureRaw)
                                                 (-> target :signatureRaw))

                                         :doc (when-let [doc (:doc target)]
                                                (.trim doc))
                                         :loc pos})))))



(behavior ::elm-parse-editor-on-change
          :desc "Parse a connected elm editor on content change"
          :triggers #{:change}
          :debounce 300
          :reaction (fn [ed]
                      (object/raise ed :elm.parse.editor)))


(behavior ::elm-parse-editor
          :desc "Initiate parsing of the content/elm code of the given editor"
          :triggers #{:elm.parse.editor :focus :project-connected }
          :reaction (fn [ed]
                      (when (not (str-contains (-> @ed :info :path) "elm-stuff"))
                        (let [client (get-eval-client-if-connected ed :editor.elm.ast.parsetext)
                             path (-> @ed :info :path)]

                         (when (and client
                                  (= (pool/last-active) ed)
                                  (not (str-contains path "elm-stuff")))

                           (clients/send client
                                         :editor.elm.ast.parsetext
                                         {:code (editor/->val ed)}
                                         :only ed))))))

(behavior ::elm-editor-disconnected
          :desc "Clean up state when project connection for an editor has been disconnected"
          :triggers #{:project-disconnected}
          :reaction (fn [ed]
                      (do
                        (object/raise ed :clear-linter-results!)
                        (object/update! ed [:ast-status] assoc :status nil :error nil)
                        (elm-ast/update-status-for-editor ed)
                        (object/raise ed :elm.gutter.exposeds.mark))))


(behavior ::elm-parse-editor-result
          :desc "Handle parse results for a parsed editors content"
          :triggers #{:editor.elm.ast.parsetext.result}
          :reaction (fn [ed res]


                      (if-let [error (:error res)]
                        (do
                          (object/update! ed [:ast-status] assoc :status :error :error error)
                          (object/raise ed :elm.gutter.refresh))
                        (let [path (-> @ed :info :path)]
                          (object/update! ed [:ast-status] assoc :status :ok :error nil)

                          ;; Is this really safe to do ?!
                          (elm-ast/upsert-ast! (-> (get-editor-client ed) deref :dir)
                                               {:file path
                                                :ast (:ast res)})
                          (object/raise ed :elm.gutter.exposeds.mark)))


                      (elm-ast/update-status-for-editor ed)))



;;************ Refactoring behaviors ****************
(defn- cm-pos->pos [cm-pos]
  {:ch (.-ch cm-pos)
   :line (.-line cm-pos)})


(behavior ::elm-expose-top-level
          :desc "Behavior to expose top level Elm declaration"
          :triggers #{:elm.expose.top.level}
          :reaction (fn [ed]
                      (let [path (-> @ed :info :path)
                            prj-path (project-path path)
                            module (elm-ast/get-module-ast prj-path path)
                            exposing (-> module :ast :moduleDeclaration :exposing)]

                        (when-let [decl (elm-ast/find-top-level-declaration-by-pos
                                            (editor/->cursor ed)
                                            module)]
                          (when-not (elm-ast/exposed-by-module? module (:value decl))
                            (let [{:keys [start end]} (elm-ast/->range (:location exposing))
                                  upd-exp (elm-ast/expose-decl decl exposing)
                                  bm (editor/bookmark ed (editor/->cursor ed))]
                              (editor/replace ed
                                              start
                                              end
                                              (elm-ast/print-exposing upd-exp))
                              (editor/move-cursor ed (cm-pos->pos (.find bm)))))))))


(behavior ::elm-unexpose-top-level
          :desc "Behavior to unexpose top level Elm declaration"
          :triggers #{:elm.unexpose.top.level}
          :reaction (fn [ed]
                      (let [path (-> @ed :info :path)
                            prj-path (project-path path)
                            module (elm-ast/get-module-ast prj-path path)
                            exposing (-> module :ast :moduleDeclaration :exposing)]

                        (when-let [decl (elm-ast/find-top-level-declaration-by-pos
                                          (editor/->cursor ed)
                                          module)]
                          (when (and (elm-ast/exposed-by-module? module (:value decl))
                                     (not (elm-ast/exposeAll? exposing)))
                            (let [{:keys [start end]} (elm-ast/->range (:location exposing))
                                  upd-exp (elm-ast/unexpose-decl decl exposing)
                                  bm (editor/bookmark ed (editor/->cursor ed))]
                              (editor/replace ed
                                              start
                                              end
                                              (elm-ast/print-exposing upd-exp))
                              (editor/move-cursor ed (cm-pos->pos (.find bm)))))))))


(behavior ::elm-sort-imports
          :desc "Behavior to sort import declarations for given Elm editor"
          :triggers #{:elm.sort.imports}
          :reaction (fn [ed]
                      (let [path (-> @ed :info :path)
                            prj-path (project-path path)
                            module (elm-ast/get-module-ast prj-path path)
                            imports (-> module :ast :imports :imports)
                            location (-> module :ast :imports :location)]

                        (when (seq imports)
                          (let [{:keys [start end]} (elm-ast/->range location)
                                  bm (editor/bookmark ed (editor/->cursor ed))]
                              (editor/replace ed
                                              start
                                              end
                                              (elm-ast/print-imports
                                                (partial elm-ast/sort-imports-default prj-path)
                                                imports))
                              (editor/move-cursor ed (cm-pos->pos (.find bm))))))))



(behavior ::elm-autoimport-module-selected
          :desc "Behaviour triggered when user selects a module in select for autoimport suggestions"
          :triggers #{:elm.autoimport.module.selected}
          :reaction (fn [ed item]
                      (let [path (-> @ed :info :path)
                            prj-path (project-path path)
                            pos (editor/->cursor ed)
                            bm (editor/bookmark ed pos)
                            token (find-symbol ed pos)
                            aliaz (-> (s/split token #"\.") first)
                            module (elm-ast/get-module-ast prj-path path)
                            imports (-> module :ast :imports :imports)
                            {:keys [start end]} (-> module
                                                    :ast
                                                    :imports
                                                    :location
                                                    elm-ast/->range)]

                        (let [upd-imports (elm-ast/upsert-imports (:module-name item)
                                                                  aliaz
                                                                  imports)]
                          (editor/replace ed
                                          start
                                          end
                                          (elm-ast/print-imports
                                            (partial elm-ast/sort-imports-default prj-path)
                                            upd-imports))
                          (editor/move-cursor ed (cm-pos->pos (.find bm)))
                          (editor/focus ed)))))


(behavior ::elm-autoimport-module-init
          :desc "Behaviour triggered when user tries to autoimport module for an aliased declaration"
          :triggers #{:elm.autoimport.module.init}
          :reaction (fn [ed]
                      (let [path (-> @ed :info :path)
                            pos (editor/->cursor ed)
                            token (find-symbol ed pos)
                            token-parts (if token (s/split token #"\.") [])]

                        (when (and (= 2 (count token-parts))
                                   (re-find #"[A-Z].*" (first token-parts)))

                          (let [candidates (->> (elm-ast/get-autoimport-candidates (first token-parts)
                                                                                   (second token-parts)
                                                                                   path
                                                                                   (project-path path))
                                                (map #(assoc % :label (str (:module-name %)
                                                                           (when-let [pck (:package %)]
                                                                             (str " (" (:name pck) ")"))))))]

                            (cond
                              (= 1 (count candidates))
                              (object/raise ed
                                            :elm.autoimport.module.selected
                                            (first candidates))

                              (< 0 (count candidates))
                              (selector/make {:ed ed
                                              :pos pos
                                              :behavior :elm.autoimport.module.selected
                                              :items candidates})
                              :else nil))))))








;; Commands

(cmd/command {:command :elm.reload.ast
              :desc "Elm: Load/Reload project AST"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :elm.reload-ast)))})

(cmd/command {:command :elm.lint
              :desc "Elm: Lint selected file"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :lint :elm.lint.res)))})

(cmd/command {:command :elm.make
              :desc "Elm: Make selected file"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :elm.make)))})

(cmd/command {:command :elm.make-project
              :desc "Elm: Make current project"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :elm.make-project)))})


(cmd/command {:command :elm.browse
              :desc "Elm: View current elm file in browser (elm-reactor)"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :elm.browse false)))})


(cmd/command {:command :elm.restart-repl
              :desc "Elm: Restart repl for current project"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :elm.repl.restart)))})


(cmd/command {:command :elm.expose-top-level
              :desc "Elm: Expose top level definition"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :elm.expose.top.level)))})

(cmd/command {:command :elm.unexpose-top-level
              :desc "Elm: Un-expose top level definition"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :elm.unexpose.top.level)))})

(cmd/command {:command :elm.autoimport.module
              :desc "Elm: Autoimport module"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :elm.autoimport.module.init)))})

(cmd/command {:command :elm.sort.imports
              :desc "Elm: Sort imports"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :elm.sort.imports)))})




(cmd/command {:command :elm.select.top.level
              :desc "Elm: Select top level expression from current cursor position"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (when-let [rng (elm-sel/get-top-level-expr ed (editor/->cursor ed))]
                          (editor/set-selection ed (:from rng) (:to rng)))))})
