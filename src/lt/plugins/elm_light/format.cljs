(ns lt.plugins.elm-light.format
  (:require [lt.plugins.elm-light.utils :as u]
            [lt.plugins.elm-light.selection :as sel]
            [lt.plugins.elm-light.clients :as clients]
            [lt.objs.console :as console]
            [lt.objs.notifos :as notifos]
            [lt.object :as object]
            [lt.objs.command :as cmd]
            [lt.objs.editor.pool :as pool]
            [lt.objs.editor :as editor]
            [lt.objs.popup :as popup]
            [lt.objs.platform :as platform]
            [clojure.string :as s])
  (:require-macros [lt.macros :refer [behavior]]))



(defn handle-no-elm-format []
  (notifos/done-working)
  (console/log (.-PATH (.-env js/process)))
  (popup/popup! {:header "We couldn't find elm-format in your path"
                 :body (str "In order to formatting related commands, elm-format must be installed and on your system PATH."
                            "(Check the console for PATH as seen from Light Table")
                 :buttons [{:label "Install elm-format"
                            :action (fn []
                                      (platform/open "https://github.com/avh4/elm-format#installation-"))}
                           {:label "ok"}]}))


(defn verify-installed []
  (if (.which clients/shelljs "elm-format")
    true
    (do
      (handle-no-elm-format)
      nil)))



(defn format-input
  "Format string input using elm-format.
    If successful returns [true result]
    If errors returns [false err]"
  [cwd input]
  (try
    [true (.toString (.execSync (js/require "child_process")
                                "elm-format --stdin"
                                (clj->js {:cwd cwd
                                          :input input
                                          :stdio "pipe"})))]
    (catch :default e
      [false (.-message e)])))




(defn format-path
  "Format file or all elm files in dir using elm-format.
  If successful returns [true nil]
  If errors returns [false err]"
  [cwd path]
  (try
    (do
      (.execSync (js/require "child_process")
                 (str "elm-format --yes " path)
                 (clj->js {:cwd cwd
                           :stdio "pipe"}))
      [true nil])
    (catch :default e
      [false (.-message e)])))



(defn- handle-format-error [err]
  (notifos/set-msg! "Elm format reported errors. See console for details" {:class "error" :timeout 5000})
  (console/error err))



;; ****************************************************
;; Elm format
;; ****************************************************
(behavior ::elm-format
          :triggers #{:elm.format}
          :reaction (fn [ed]
                      (when (verify-installed)
                        (when-let [path (-> @ed :info :path)]
                         (let [pos (editor/->cursor ed)
                               [ok? res] (format-path (u/project-path path) path)]
                           (if ok?
                             (pool/reload ed)
                             (handle-format-error res))
                           (editor/move-cursor ed pos)
                           (editor/center-cursor ed))))))

(defn- strip-module [expr]
  (->> (s/split-lines expr)
       (drop 3)
       (s/join "\n")))




(behavior ::elm-format-expression
          :triggers #{:elm.format-expression}
          :reaction (fn [ed]
                      (when (verify-installed)
                        (let [pos (editor/->cursor ed)
                              cwd (-> @ed :info :path u/project-path)]
                          (when-let [{:keys [from to]} (sel/get-top-level-expr ed pos)]
                            (let [[ok? res] (format-input cwd (editor/range ed from to))]
                              (if ok?
                                (editor/replace ed from to (strip-module res))
                                (handle-format-error res))
                              (editor/move-cursor ed pos)))))))

(behavior ::elm-format-buffer
          :triggers #{:elm.format-buffer}
          :reaction (fn [ed]
                      (when (verify-installed)
                        (let [pos (editor/->cursor ed)
                              [ok? res] (format-input (-> @ed :info :path u/project-path)
                                                      (editor/->val ed))]
                          (if ok?
                            (do
                              (editor/set-val-and-keep-cursor ed res)
                              (editor/center-cursor ed))
                            (handle-format-error res))))))



(cmd/command {:command :elm-format
              :desc "Elm: Format file"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :elm.format)))})

(cmd/command {:command :elm-format-buffer
              :desc "Elm: Format editor contents"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :elm.format-buffer)))})

(cmd/command {:command :elm-format-expression
              :desc "Elm: Format top level expression at point"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :elm.format-expression)))})
