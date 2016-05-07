(ns lt.plugins.elm-light.repl
  "Implementation of anyonymous Elm Repl Tab"
  (:require [lt.object :as object]
            [lt.objs.command :as cmd]
            [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool]
            [lt.objs.tabs :as tabs])
  (:require-macros [lt.macros :refer [behavior]]))


(behavior ::on-focus-repl-ed
          :triggers #{:focus!}
          :reaction (fn [this]
                      (when (:main @this)
                        (object/raise (:main @this) :focus!))))


(behavior ::repl-destroy-on-close
          :triggers #{:close}
          :reaction (fn [this]
                      (object/raise (:main @this) :close)
                      (object/destroy! this)))

(behavior ::repl-close-parent
          :triggers #{:destroy}
          :reaction (fn [this]
                      (object/destroy! (:frame @this))))

(behavior ::on-show-repl-refresh-eds
          :triggers #{:show}
          :reaction (fn [this]
                      (when (:main @this)
                        (object/raise (:main @this) :show)
                        (object/raise (:main @this) :refresh!)
                        (editor/focus (:main @this)))))

(object/object* ::elmrepl
                :tags #{:elmrepl}
                :name "elmrepl"
                :live true
                :init (fn [this]
                        (let [main (-> (pool/create {:mime "text/x-elm" :content "" :ns "user"})
                                       (object/remove-tags [:editor.elm])
                                       (object/add-tags [:editor.elm.repl :editor.transient]))]
                          (object/merge! main {:frame this})
                          (editor/clear-history main)
                          (object/merge! main {:dirty false
                                               :editor.generation (editor/->generation main)})
                          (object/merge! this {:main main
                                               :dirty false})
                          (editor/+class main :main)
                          (editor/move-cursor main {:line 0 :ch 0})
                          [:div.elmrepl
                           (object/->content main)])))


(defn add-repl []
  (let [elmrepl (object/create ::elmrepl)]
    (tabs/add! elmrepl)
    (tabs/active! elmrepl)
    elmrepl))

(cmd/command {:command :elmrepl
              :desc "Elm repl: Open a elm repl"
              :exec (fn []
                      (add-repl))})
