if(!lt.util.load.provided_QMARK_('lt.plugins.elm-light.elm-ast')) {
goog.provide('lt.plugins.elm_light.elm_ast');
goog.require('cljs.core');
goog.require('crate.binding');
goog.require('lt.objs.statusbar');
goog.require('clojure.string');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.statusbar');
goog.require('clojure.string');
goog.require('crate.binding');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.console');
goog.require('lt.objs.editor');
goog.require('lt.objs.console');
goog.require('lt.objs.editor.pool');
lt.plugins.elm_light.elm_ast.start_with_QMARK_ = (function start_with_QMARK_(the_str,fragment){if(cljs.core.truth_((function (){var and__4872__auto__ = the_str;if(cljs.core.truth_(and__4872__auto__))
{return fragment;
} else
{return and__4872__auto__;
}
})()))
{return cljs.core._EQ_.call(null,0,the_str.indexOf(fragment));
} else
{return null;
}
});
lt.plugins.elm_light.elm_ast.idx_of = (function idx_of(pred,coll){return cljs.core.first.call(null,cljs.core.keep_indexed.call(null,(function (idx,x){if(cljs.core.truth_(pred.call(null,x)))
{return idx;
} else
{return null;
}
}),coll));
});
if(typeof lt.plugins.elm_light.elm_ast.project_asts !== 'undefined')
{} else
{lt.plugins.elm_light.elm_ast.project_asts = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
lt.plugins.elm_light.elm_ast.upsert_ast_BANG_ = (function upsert_ast_BANG_(project,file_ast){var prj_idx = lt.plugins.elm_light.elm_ast.idx_of.call(null,(function (p1__24894_SHARP_){return cljs.core._EQ_.call(null,project,new cljs.core.Keyword(null,"project","project",704593547).cljs$core$IFn$_invoke$arity$1(p1__24894_SHARP_));
}),cljs.core.deref.call(null,lt.plugins.elm_light.elm_ast.project_asts));if(cljs.core.truth_(prj_idx))
{return cljs.core.swap_BANG_.call(null,lt.plugins.elm_light.elm_ast.project_asts,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prj_idx,new cljs.core.Keyword(null,"file-asts","file-asts",3945857876)], null),((function (prj_idx){
return (function (file_asts){return cljs.core.conj.call(null,cljs.core.filterv.call(null,((function (prj_idx){
return (function (p1__24895_SHARP_){return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"file","file",1017047278).cljs$core$IFn$_invoke$arity$1(file_ast),new cljs.core.Keyword(null,"file","file",1017047278).cljs$core$IFn$_invoke$arity$1(p1__24895_SHARP_));
});})(prj_idx))
,file_asts),file_ast);
});})(prj_idx))
);
} else
{return cljs.core.swap_BANG_.call(null,lt.plugins.elm_light.elm_ast.project_asts,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"project","project",704593547),project,new cljs.core.Keyword(null,"file-asts","file-asts",3945857876),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_ast], null)], null));
}
});
lt.plugins.elm_light.elm_ast.delete_ast_BANG_ = (function delete_ast_BANG_(project,file){var temp__4092__auto__ = lt.plugins.elm_light.elm_ast.idx_of.call(null,(function (p1__24896_SHARP_){return cljs.core._EQ_.call(null,project,new cljs.core.Keyword(null,"project","project",704593547).cljs$core$IFn$_invoke$arity$1(p1__24896_SHARP_));
}),cljs.core.deref.call(null,lt.plugins.elm_light.elm_ast.project_asts));if(cljs.core.truth_(temp__4092__auto__))
{var prj_idx = temp__4092__auto__;return cljs.core.swap_BANG_.call(null,lt.plugins.elm_light.elm_ast.project_asts,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prj_idx,new cljs.core.Keyword(null,"file-asts","file-asts",3945857876)], null),((function (prj_idx,temp__4092__auto__){
return (function (file_asts){return cljs.core.filterv.call(null,((function (prj_idx,temp__4092__auto__){
return (function (p1__24897_SHARP_){return cljs.core.not_EQ_.call(null,file,new cljs.core.Keyword(null,"file","file",1017047278).cljs$core$IFn$_invoke$arity$1(p1__24897_SHARP_));
});})(prj_idx,temp__4092__auto__))
,file_asts);
});})(prj_idx,temp__4092__auto__))
);
} else
{return null;
}
});
lt.plugins.elm_light.elm_ast.delete_package_asts_BANG_ = (function delete_package_asts_BANG_(project){var temp__4092__auto__ = lt.plugins.elm_light.elm_ast.idx_of.call(null,(function (p1__24898_SHARP_){return cljs.core._EQ_.call(null,project,new cljs.core.Keyword(null,"project","project",704593547).cljs$core$IFn$_invoke$arity$1(p1__24898_SHARP_));
}),cljs.core.deref.call(null,lt.plugins.elm_light.elm_ast.project_asts));if(cljs.core.truth_(temp__4092__auto__))
{var prj_idx = temp__4092__auto__;return cljs.core.swap_BANG_.call(null,lt.plugins.elm_light.elm_ast.project_asts,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prj_idx,new cljs.core.Keyword(null,"file-asts","file-asts",3945857876)], null),((function (prj_idx,temp__4092__auto__){
return (function (file_asts){return cljs.core.vec.call(null,cljs.core.remove.call(null,new cljs.core.Keyword(null,"package","package",4501809080),file_asts));
});})(prj_idx,temp__4092__auto__))
);
} else
{return null;
}
});
lt.plugins.elm_light.elm_ast.delete_project_ast_BANG_ = (function delete_project_ast_BANG_(project){return cljs.core.swap_BANG_.call(null,lt.plugins.elm_light.elm_ast.project_asts,(function (prjs){return cljs.core.filterv.call(null,(function (p1__24899_SHARP_){return cljs.core.not_EQ_.call(null,project,new cljs.core.Keyword(null,"project","project",704593547).cljs$core$IFn$_invoke$arity$1(p1__24899_SHARP_));
}),prjs);
}));
});
lt.plugins.elm_light.elm_ast.reset_asts_BANG_ = (function reset_asts_BANG_(){return cljs.core.reset_BANG_.call(null,lt.plugins.elm_light.elm_ast.project_asts,cljs.core.PersistentVector.EMPTY);
});
lt.plugins.elm_light.elm_ast.get_project = (function get_project(project){return cljs.core.first.call(null,cljs.core.filterv.call(null,(function (p1__24900_SHARP_){return cljs.core._EQ_.call(null,project,new cljs.core.Keyword(null,"project","project",704593547).cljs$core$IFn$_invoke$arity$1(p1__24900_SHARP_));
}),cljs.core.deref.call(null,lt.plugins.elm_light.elm_ast.project_asts)));
});
lt.plugins.elm_light.elm_ast.get_module_ast = (function get_module_ast(project,module_file){var temp__4092__auto__ = lt.plugins.elm_light.elm_ast.get_project.call(null,project);if(cljs.core.truth_(temp__4092__auto__))
{var prj = temp__4092__auto__;return cljs.core.first.call(null,cljs.core.filterv.call(null,((function (prj,temp__4092__auto__){
return (function (p1__24901_SHARP_){return cljs.core._EQ_.call(null,module_file,new cljs.core.Keyword(null,"file","file",1017047278).cljs$core$IFn$_invoke$arity$1(p1__24901_SHARP_));
});})(prj,temp__4092__auto__))
,new cljs.core.Keyword(null,"file-asts","file-asts",3945857876).cljs$core$IFn$_invoke$arity$1(prj)));
} else
{return null;
}
});
lt.plugins.elm_light.elm_ast.get_module_by_name = (function get_module_by_name(project,module_name){var temp__4092__auto__ = lt.plugins.elm_light.elm_ast.get_project.call(null,project);if(cljs.core.truth_(temp__4092__auto__))
{var prj = temp__4092__auto__;return cljs.core.first.call(null,cljs.core.filterv.call(null,((function (prj,temp__4092__auto__){
return (function (p1__24902_SHARP_){return cljs.core._EQ_.call(null,module_name,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"moduleDeclaration","moduleDeclaration",1240624864).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",1014001140).cljs$core$IFn$_invoke$arity$1(p1__24902_SHARP_))));
});})(prj,temp__4092__auto__))
,new cljs.core.Keyword(null,"file-asts","file-asts",3945857876).cljs$core$IFn$_invoke$arity$1(prj)));
} else
{return null;
}
});
lt.plugins.elm_light.elm_ast.get_module_name = (function get_module_name(module){return new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"moduleDeclaration","moduleDeclaration",1240624864).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",1014001140).cljs$core$IFn$_invoke$arity$1(module)));
});
lt.plugins.elm_light.elm_ast.exposeAll_QMARK_ = (function exposeAll_QMARK_(exposing){return cljs.core._EQ_.call(null,"exposeAll",new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"exports","exports",3999815345).cljs$core$IFn$_invoke$arity$1(exposing))));
});
lt.plugins.elm_light.elm_ast.extract_exports = (function extract_exports(exposing){return cljs.core.map.call(null,new cljs.core.Keyword(null,"value","value",1125876963),new cljs.core.Keyword(null,"exports","exports",3999815345).cljs$core$IFn$_invoke$arity$1(exposing));
});
lt.plugins.elm_light.elm_ast.exposed_by_module_QMARK_ = (function exposed_by_module_QMARK_(module,candidate){var exposing = new cljs.core.Keyword(null,"exposing","exposing",3382854387).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"moduleDeclaration","moduleDeclaration",1240624864).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",1014001140).cljs$core$IFn$_invoke$arity$1(module)));if(lt.plugins.elm_light.elm_ast.exposeAll_QMARK_.call(null,exposing))
{return true;
} else
{return cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,lt.plugins.elm_light.elm_ast.extract_exports.call(null,exposing)),candidate);
}
});
lt.plugins.elm_light.elm_ast.enrich_module_declarations = (function enrich_module_declarations(module){return cljs.core.map.call(null,(function (p1__24903_SHARP_){return cljs.core.assoc.call(null,p1__24903_SHARP_,new cljs.core.Keyword(null,"exposed?","exposed?",3382850193),lt.plugins.elm_light.elm_ast.exposed_by_module_QMARK_.call(null,module,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p1__24903_SHARP_)),new cljs.core.Keyword(null,"file","file",1017047278),new cljs.core.Keyword(null,"file","file",1017047278).cljs$core$IFn$_invoke$arity$1(module),new cljs.core.Keyword(null,"module-name","module-name",4067691710),new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"moduleDeclaration","moduleDeclaration",1240624864).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",1014001140).cljs$core$IFn$_invoke$arity$1(module))),new cljs.core.Keyword(null,"package","package",4501809080),new cljs.core.Keyword(null,"package","package",4501809080).cljs$core$IFn$_invoke$arity$1(module));
}),new cljs.core.Keyword(null,"declarations","declarations",2554736043).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",1014001140).cljs$core$IFn$_invoke$arity$1(module)));
});
lt.plugins.elm_light.elm_ast.get_exposed_declarations = (function get_exposed_declarations(module){return cljs.core.filter.call(null,new cljs.core.Keyword(null,"exposed?","exposed?",3382850193),lt.plugins.elm_light.elm_ast.enrich_module_declarations.call(null,module));
});
lt.plugins.elm_light.elm_ast.get_import_candidate_tokens = (function get_import_candidate_tokens(import_def,exposed_declaration){return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(import_def)),cljs.core.str("."),cljs.core.str(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(exposed_declaration))].join(''),(function (){var temp__4092__auto__ = new cljs.core.Keyword(null,"alias","alias",1106807234).cljs$core$IFn$_invoke$arity$1(import_def);if(cljs.core.truth_(temp__4092__auto__))
{var alias = temp__4092__auto__;return [cljs.core.str(alias),cljs.core.str("."),cljs.core.str(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(exposed_declaration))].join('');
} else
{return null;
}
})(),(((lt.plugins.elm_light.elm_ast.exposeAll_QMARK_.call(null,new cljs.core.Keyword(null,"exposing","exposing",3382854387).cljs$core$IFn$_invoke$arity$1(import_def))) || (cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__24904_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(exposed_declaration),new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p1__24904_SHARP_));
}),new cljs.core.Keyword(null,"exposing","exposing",3382854387).cljs$core$IFn$_invoke$arity$1(import_def)))))?new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(exposed_declaration):null)], null)));
});
lt.plugins.elm_light.elm_ast.get_external_candidates = (function get_external_candidates(module,modules){var imports = new cljs.core.Keyword(null,"imports","imports",2939942112).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",1014001140).cljs$core$IFn$_invoke$arity$1(module));var imported_mod_names = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,new cljs.core.Keyword(null,"value","value",1125876963),imports));var external_exposed = cljs.core.mapcat.call(null,((function (imports,imported_mod_names){
return (function (p1__24906_SHARP_){return lt.plugins.elm_light.elm_ast.get_exposed_declarations.call(null,p1__24906_SHARP_);
});})(imports,imported_mod_names))
,cljs.core.filter.call(null,((function (imports,imported_mod_names){
return (function (p1__24905_SHARP_){return (cljs.core.not_EQ_.call(null,lt.plugins.elm_light.elm_ast.get_module_name.call(null,module),lt.plugins.elm_light.elm_ast.get_module_name.call(null,p1__24905_SHARP_))) && (cljs.core.contains_QMARK_.call(null,imported_mod_names,lt.plugins.elm_light.elm_ast.get_module_name.call(null,p1__24905_SHARP_)));
});})(imports,imported_mod_names))
,modules));return cljs.core.mapcat.call(null,((function (imports,imported_mod_names,external_exposed){
return (function (imp){return cljs.core.map.call(null,((function (imports,imported_mod_names,external_exposed){
return (function (p1__24908_SHARP_){return cljs.core.assoc.call(null,p1__24908_SHARP_,new cljs.core.Keyword(null,"candidate-tokens","candidate-tokens",3775833238),lt.plugins.elm_light.elm_ast.get_import_candidate_tokens.call(null,imp,p1__24908_SHARP_));
});})(imports,imported_mod_names,external_exposed))
,cljs.core.filter.call(null,((function (imports,imported_mod_names,external_exposed){
return (function (p1__24907_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(imp),new cljs.core.Keyword(null,"module-name","module-name",4067691710).cljs$core$IFn$_invoke$arity$1(p1__24907_SHARP_));
});})(imports,imported_mod_names,external_exposed))
,external_exposed));
});})(imports,imported_mod_names,external_exposed))
,imports);
});
/**
* Get candidates for Elm default imports as per
* https://github.com/elm-lang/core
*/
lt.plugins.elm_light.elm_ast.get_default_candidates = (function get_default_candidates(modules){return cljs.core.concat.call(null,cljs.core.map.call(null,(function (p1__24910_SHARP_){return cljs.core.assoc.call(null,p1__24910_SHARP_,new cljs.core.Keyword(null,"candidate-tokens","candidate-tokens",3775833238),cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p1__24910_SHARP_)], true));
}),cljs.core.mapcat.call(null,lt.plugins.elm_light.elm_ast.get_exposed_declarations,cljs.core.filterv.call(null,(function (p1__24909_SHARP_){return cljs.core._EQ_.call(null,"Basics",new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"moduleDeclaration","moduleDeclaration",1240624864).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",1014001140).cljs$core$IFn$_invoke$arity$1(p1__24909_SHARP_))));
}),modules))),cljs.core.map.call(null,(function (p1__24912_SHARP_){return cljs.core.assoc.call(null,p1__24912_SHARP_,new cljs.core.Keyword(null,"candidate-tokens","candidate-tokens",3775833238),cljs.core.PersistentHashSet.fromArray([[cljs.core.str("Debug."),cljs.core.str(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p1__24912_SHARP_))].join('')], true));
}),cljs.core.mapcat.call(null,lt.plugins.elm_light.elm_ast.get_exposed_declarations,cljs.core.filterv.call(null,(function (p1__24911_SHARP_){return cljs.core._EQ_.call(null,"Debug",new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"moduleDeclaration","moduleDeclaration",1240624864).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",1014001140).cljs$core$IFn$_invoke$arity$1(p1__24911_SHARP_))));
}),modules))),cljs.core.map.call(null,(function (p1__24914_SHARP_){return cljs.core.assoc.call(null,p1__24914_SHARP_,new cljs.core.Keyword(null,"candidate-tokens","candidate-tokens",3775833238),cljs.core.PersistentHashSet.fromArray([[cljs.core.str("Maybe."),cljs.core.str(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p1__24914_SHARP_))].join('')], true));
}),cljs.core.mapcat.call(null,lt.plugins.elm_light.elm_ast.get_exposed_declarations,cljs.core.filterv.call(null,(function (p1__24913_SHARP_){return cljs.core._EQ_.call(null,"Maybe",new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"moduleDeclaration","moduleDeclaration",1240624864).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",1014001140).cljs$core$IFn$_invoke$arity$1(p1__24913_SHARP_))));
}),modules))),cljs.core.map.call(null,(function (p1__24916_SHARP_){return cljs.core.assoc.call(null,p1__24916_SHARP_,new cljs.core.Keyword(null,"candidate-tokens","candidate-tokens",3775833238),cljs.core.PersistentHashSet.fromArray([[cljs.core.str("Result."),cljs.core.str(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p1__24916_SHARP_))].join('')], true));
}),cljs.core.mapcat.call(null,lt.plugins.elm_light.elm_ast.get_exposed_declarations,cljs.core.filterv.call(null,(function (p1__24915_SHARP_){return cljs.core._EQ_.call(null,"Result",new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"moduleDeclaration","moduleDeclaration",1240624864).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",1014001140).cljs$core$IFn$_invoke$arity$1(p1__24915_SHARP_))));
}),modules))),cljs.core.map.call(null,(function (p1__24918_SHARP_){return cljs.core.assoc.call(null,p1__24918_SHARP_,new cljs.core.Keyword(null,"candidate-tokens","candidate-tokens",3775833238),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p1__24918_SHARP_),"Program"))?new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["Program",null], null), null):cljs.core.PersistentHashSet.fromArray([[cljs.core.str("Platform."),cljs.core.str(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p1__24918_SHARP_))].join('')], true)));
}),cljs.core.mapcat.call(null,lt.plugins.elm_light.elm_ast.get_exposed_declarations,cljs.core.filterv.call(null,(function (p1__24917_SHARP_){return cljs.core._EQ_.call(null,"Platform",new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"moduleDeclaration","moduleDeclaration",1240624864).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",1014001140).cljs$core$IFn$_invoke$arity$1(p1__24917_SHARP_))));
}),modules))),cljs.core.map.call(null,(function (p1__24920_SHARP_){return cljs.core.assoc.call(null,p1__24920_SHARP_,new cljs.core.Keyword(null,"candidate-tokens","candidate-tokens",3775833238),(function (){var G__24926 = new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p1__24920_SHARP_);if(cljs.core._EQ_.call(null,"!",G__24926))
{return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["!",null], null), null);
} else
{if(cljs.core._EQ_.call(null,"Cmd",G__24926))
{return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["Cmd",null], null), null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.PersistentHashSet.fromArray([[cljs.core.str("Platform.Cmd"),cljs.core.str(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p1__24920_SHARP_))].join('')], true);
} else
{return null;
}
}
}
})());
}),cljs.core.mapcat.call(null,lt.plugins.elm_light.elm_ast.get_exposed_declarations,cljs.core.filterv.call(null,(function (p1__24919_SHARP_){return cljs.core._EQ_.call(null,"Platform.Cmd",new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"moduleDeclaration","moduleDeclaration",1240624864).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",1014001140).cljs$core$IFn$_invoke$arity$1(p1__24919_SHARP_))));
}),modules))),cljs.core.map.call(null,(function (p1__24922_SHARP_){return cljs.core.assoc.call(null,p1__24922_SHARP_,new cljs.core.Keyword(null,"candidate-tokens","candidate-tokens",3775833238),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p1__24922_SHARP_),"Sub"))?new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["Sub",null], null), null):cljs.core.PersistentHashSet.fromArray([[cljs.core.str("Platform.Sub."),cljs.core.str(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p1__24922_SHARP_))].join('')], true)));
}),cljs.core.mapcat.call(null,lt.plugins.elm_light.elm_ast.get_exposed_declarations,cljs.core.filterv.call(null,(function (p1__24921_SHARP_){return cljs.core._EQ_.call(null,"Platform.Sub",new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"moduleDeclaration","moduleDeclaration",1240624864).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",1014001140).cljs$core$IFn$_invoke$arity$1(p1__24921_SHARP_))));
}),modules))),cljs.core.map.call(null,(function (p1__24924_SHARP_){return cljs.core.assoc.call(null,p1__24924_SHARP_,new cljs.core.Keyword(null,"candidate-tokens","candidate-tokens",3775833238),((cljs.core._EQ_.call(null,"::",new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p1__24924_SHARP_)))?new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["::",null], null), null):cljs.core.PersistentHashSet.fromArray([[cljs.core.str("List."),cljs.core.str(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p1__24924_SHARP_))].join('')], true)));
}),cljs.core.mapcat.call(null,lt.plugins.elm_light.elm_ast.get_exposed_declarations,cljs.core.filterv.call(null,(function (p1__24923_SHARP_){return cljs.core._EQ_.call(null,"List",new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"moduleDeclaration","moduleDeclaration",1240624864).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",1014001140).cljs$core$IFn$_invoke$arity$1(p1__24923_SHARP_))));
}),modules))));
});
lt.plugins.elm_light.elm_ast.get_current_module_candidates = (function get_current_module_candidates(module){return cljs.core.map.call(null,(function (p1__24927_SHARP_){return cljs.core.assoc.call(null,p1__24927_SHARP_,new cljs.core.Keyword(null,"candidate-tokens","candidate-tokens",3775833238),cljs.core.PersistentHashSet.fromArray([[cljs.core.str(lt.plugins.elm_light.elm_ast.get_module_name.call(null,module)),cljs.core.str("."),cljs.core.str(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p1__24927_SHARP_))].join(''),new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p1__24927_SHARP_)], true));
}),lt.plugins.elm_light.elm_ast.enrich_module_declarations.call(null,module));
});
lt.plugins.elm_light.elm_ast.get_jump_to_candidates = (function get_jump_to_candidates(module,modules){return cljs.core.concat.call(null,lt.plugins.elm_light.elm_ast.get_current_module_candidates.call(null,module),lt.plugins.elm_light.elm_ast.get_external_candidates.call(null,module,modules),lt.plugins.elm_light.elm_ast.get_default_candidates.call(null,modules));
});
lt.plugins.elm_light.elm_ast.get_candidate_by_token = (function get_candidate_by_token(token,module,modules){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__24928_SHARP_){return cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"candidate-tokens","candidate-tokens",3775833238).cljs$core$IFn$_invoke$arity$1(p1__24928_SHARP_),token);
}),lt.plugins.elm_light.elm_ast.get_jump_to_candidates.call(null,module,modules)));
});
lt.plugins.elm_light.elm_ast.__GT_pos = (function __GT_pos(ast_pos){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(ast_pos) - 1),new cljs.core.Keyword(null,"ch","ch",1013907415),(new cljs.core.Keyword(null,"column","column",3954034376).cljs$core$IFn$_invoke$arity$1(ast_pos) - 1)], null);
});
lt.plugins.elm_light.elm_ast.__GT_range = (function __GT_range(location){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",1123661780),lt.plugins.elm_light.elm_ast.__GT_pos.call(null,new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(location)),new cljs.core.Keyword(null,"end","end",1014004813),lt.plugins.elm_light.elm_ast.__GT_pos.call(null,new cljs.core.Keyword(null,"end","end",1014004813).cljs$core$IFn$_invoke$arity$1(location))], null);
});
lt.plugins.elm_light.elm_ast.in_range_QMARK_ = (function in_range_QMARK_(p__24929,decl){var map__24932 = p__24929;var map__24932__$1 = ((cljs.core.seq_QMARK_.call(null,map__24932))?cljs.core.apply.call(null,cljs.core.hash_map,map__24932):map__24932);var line = cljs.core.get.call(null,map__24932__$1,new cljs.core.Keyword(null,"line","line",1017226086));var ch = cljs.core.get.call(null,map__24932__$1,new cljs.core.Keyword(null,"ch","ch",1013907415));var map__24933 = lt.plugins.elm_light.elm_ast.__GT_range.call(null,new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(decl));var map__24933__$1 = ((cljs.core.seq_QMARK_.call(null,map__24933))?cljs.core.apply.call(null,cljs.core.hash_map,map__24933):map__24933);var end = cljs.core.get.call(null,map__24933__$1,new cljs.core.Keyword(null,"end","end",1014004813));var start = cljs.core.get.call(null,map__24933__$1,new cljs.core.Keyword(null,"start","start",1123661780));if(((line < new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(start))) || ((line > new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(end))))
{return false;
} else
{if(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(start),line)) && ((ch < new cljs.core.Keyword(null,"ch","ch",1013907415).cljs$core$IFn$_invoke$arity$1(start)))) || ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(end),line)) && ((ch > new cljs.core.Keyword(null,"ch","ch",1013907415).cljs$core$IFn$_invoke$arity$1(end)))))
{return false;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return true;
} else
{return null;
}
}
}
});
lt.plugins.elm_light.elm_ast.find_top_level_declaration_by_pos = (function() {
var find_top_level_declaration_by_pos = null;
var find_top_level_declaration_by_pos__2 = (function (pos,module){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__24934_SHARP_){return lt.plugins.elm_light.elm_ast.in_range_QMARK_.call(null,pos,p1__24934_SHARP_);
}),new cljs.core.Keyword(null,"declarations","declarations",2554736043).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",1014001140).cljs$core$IFn$_invoke$arity$1(module))));
});
var find_top_level_declaration_by_pos__3 = (function (pos,project_dir,module_file){return find_top_level_declaration_by_pos.call(null,pos,lt.plugins.elm_light.elm_ast.get_module_ast.call(null,project_dir,module_file));
});
find_top_level_declaration_by_pos = function(pos,project_dir,module_file){
switch(arguments.length){
case 2:
return find_top_level_declaration_by_pos__2.call(this,pos,project_dir);
case 3:
return find_top_level_declaration_by_pos__3.call(this,pos,project_dir,module_file);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
find_top_level_declaration_by_pos.cljs$core$IFn$_invoke$arity$2 = find_top_level_declaration_by_pos__2;
find_top_level_declaration_by_pos.cljs$core$IFn$_invoke$arity$3 = find_top_level_declaration_by_pos__3;
return find_top_level_declaration_by_pos;
})()
;
lt.plugins.elm_light.elm_ast.get_jump_to_definition = (function get_jump_to_definition(token,module_file,project_file){var temp__4092__auto__ = lt.plugins.elm_light.elm_ast.get_module_ast.call(null,project_file,module_file);if(cljs.core.truth_(temp__4092__auto__))
{var module = temp__4092__auto__;return lt.plugins.elm_light.elm_ast.get_candidate_by_token.call(null,token,module,new cljs.core.Keyword(null,"file-asts","file-asts",3945857876).cljs$core$IFn$_invoke$arity$1(lt.plugins.elm_light.elm_ast.get_project.call(null,project_file)));
} else
{return null;
}
});
lt.plugins.elm_light.elm_ast.to_hint = (function to_hint(curr_module_name,candidate){return cljs.core.map.call(null,(function (c_tok){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(candidate),new cljs.core.Keyword(null,"completion","completion",4767668046),c_tok,new cljs.core.Keyword(null,"text","text",1017460895),[cljs.core.str(c_tok),cljs.core.str(((cljs.core.not_EQ_.call(null,curr_module_name,new cljs.core.Keyword(null,"module-name","module-name",4067691710).cljs$core$IFn$_invoke$arity$1(candidate)))?[cljs.core.str(" ("),cljs.core.str(new cljs.core.Keyword(null,"module-name","module-name",4067691710).cljs$core$IFn$_invoke$arity$1(candidate)),cljs.core.str(")")].join(''):null))].join('')], null);
}),new cljs.core.Keyword(null,"candidate-tokens","candidate-tokens",3775833238).cljs$core$IFn$_invoke$arity$1(candidate));
});
/**
* Return hints for a given module file and project.
* The context parameter provides additional info to filter results
* and to help make the results context aware to provide better more relevant results
* 
* TODO: Only token is used and only toplevel declarations currently TBI
*/
lt.plugins.elm_light.elm_ast.get_hints = (function get_hints(p__24936,module_file,project_dir){var map__24938 = p__24936;var map__24938__$1 = ((cljs.core.seq_QMARK_.call(null,map__24938))?cljs.core.apply.call(null,cljs.core.hash_map,map__24938):map__24938);var token = cljs.core.get.call(null,map__24938__$1,new cljs.core.Keyword(null,"token","token",1124445547));var temp__4092__auto__ = lt.plugins.elm_light.elm_ast.get_module_ast.call(null,project_dir,module_file);if(cljs.core.truth_(temp__4092__auto__))
{var module = temp__4092__auto__;return cljs.core.sort_by.call(null,cljs.core.juxt.call(null,((function (module,temp__4092__auto__,map__24938,map__24938__$1,token){
return (function (x){return new cljs.core.Keyword(null,"completion","completion",4767668046).cljs$core$IFn$_invoke$arity$1(x).lastIndexOf(".");
});})(module,temp__4092__auto__,map__24938,map__24938__$1,token))
,new cljs.core.Keyword(null,"completion","completion",4767668046)),cljs.core.filter.call(null,((function (module,temp__4092__auto__,map__24938,map__24938__$1,token){
return (function (p1__24935_SHARP_){return cljs.core._EQ_.call(null,0,new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(p1__24935_SHARP_).indexOf(token));
});})(module,temp__4092__auto__,map__24938,map__24938__$1,token))
,cljs.core.mapcat.call(null,cljs.core.partial.call(null,lt.plugins.elm_light.elm_ast.to_hint,lt.plugins.elm_light.elm_ast.get_module_name.call(null,module)),lt.plugins.elm_light.elm_ast.get_jump_to_candidates.call(null,module,new cljs.core.Keyword(null,"file-asts","file-asts",3945857876).cljs$core$IFn$_invoke$arity$1(lt.plugins.elm_light.elm_ast.get_project.call(null,project_dir))))));
} else
{return null;
}
});
lt.plugins.elm_light.elm_ast.search_docs = (function search_docs(sym,project_dir){var qualified_name = (function (p1__24939_SHARP_){return [cljs.core.str(new cljs.core.Keyword(null,"module-name","module-name",4067691710).cljs$core$IFn$_invoke$arity$1(p1__24939_SHARP_)),cljs.core.str("."),cljs.core.str(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p1__24939_SHARP_))].join('');
});var temp__4092__auto__ = lt.plugins.elm_light.elm_ast.get_project.call(null,project_dir);if(cljs.core.truth_(temp__4092__auto__))
{var prj = temp__4092__auto__;return cljs.core.sort_by.call(null,cljs.core.juxt.call(null,new cljs.core.Keyword(null,"value","value",1125876963),new cljs.core.Keyword(null,"module-name","module-name",4067691710)),cljs.core.map.call(null,((function (prj,temp__4092__auto__,qualified_name){
return (function (decl){return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(decl),new cljs.core.Keyword(null,"ns","ns",1013907767),new cljs.core.Keyword(null,"module-name","module-name",4067691710).cljs$core$IFn$_invoke$arity$1(decl),new cljs.core.Keyword(null,"args","args",1016906831),(function (){var or__4884__auto__ = new cljs.core.Keyword(null,"signatureRaw","signatureRaw",3837738946).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"annotation","annotation",3753828001).cljs$core$IFn$_invoke$arity$1(decl));if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return new cljs.core.Keyword(null,"signatureRaw","signatureRaw",3837738946).cljs$core$IFn$_invoke$arity$1(decl);
}
})(),new cljs.core.Keyword(null,"doc","doc",1014003882),new cljs.core.Keyword(null,"doc","doc",1014003882).cljs$core$IFn$_invoke$arity$1(decl),new cljs.core.Keyword(null,"value","value",1125876963),new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(decl),new cljs.core.Keyword(null,"module-name","module-name",4067691710),new cljs.core.Keyword(null,"module-name","module-name",4067691710).cljs$core$IFn$_invoke$arity$1(decl)], null);
});})(prj,temp__4092__auto__,qualified_name))
,cljs.core.filter.call(null,((function (prj,temp__4092__auto__,qualified_name){
return (function (decl){var or__4884__auto__ = lt.plugins.elm_light.elm_ast.start_with_QMARK_.call(null,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(decl),sym);if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return lt.plugins.elm_light.elm_ast.start_with_QMARK_.call(null,qualified_name.call(null,decl),sym);
}
});})(prj,temp__4092__auto__,qualified_name))
,cljs.core.mapcat.call(null,lt.plugins.elm_light.elm_ast.get_exposed_declarations,new cljs.core.Keyword(null,"file-asts","file-asts",3945857876).cljs$core$IFn$_invoke$arity$1(prj)))));
} else
{return null;
}
});
lt.plugins.elm_light.elm_ast.get_gutter_exposeds = (function get_gutter_exposeds(module_file,project_file){var temp__4092__auto__ = lt.plugins.elm_light.elm_ast.get_module_ast.call(null,project_file,module_file);if(cljs.core.truth_(temp__4092__auto__))
{var module = temp__4092__auto__;return lt.plugins.elm_light.elm_ast.get_exposed_declarations.call(null,module);
} else
{return null;
}
});
lt.plugins.elm_light.elm_ast.print_export = (function print_export(export$){return [cljs.core.str(((cljs.core._EQ_.call(null,"binOpRef",new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(export$)))?[cljs.core.str("("),cljs.core.str(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(export$)),cljs.core.str(")")].join(''):new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(export$))),cljs.core.str(((cljs.core.not.call(null,cljs.core.seq.call(null,new cljs.core.Keyword(null,"exports","exports",3999815345).cljs$core$IFn$_invoke$arity$1(export$))))?"":((new cljs.core.Keyword(null,"else","else",1017020587))?[cljs.core.str(" ("),cljs.core.str(lt.plugins.elm_light.elm_ast.print_exports.call(null,new cljs.core.Keyword(null,"exports","exports",3999815345).cljs$core$IFn$_invoke$arity$1(export$))),cljs.core.str(")")].join(''):null)))].join('');
});
lt.plugins.elm_light.elm_ast.print_exports = (function print_exports(exports){if(cljs.core.not.call(null,cljs.core.seq.call(null,exports)))
{return "";
} else
{if(cljs.core._EQ_.call(null,"exposeAll",new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,exports))))
{return "..";
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return clojure.string.join.call(null,", ",cljs.core.map.call(null,lt.plugins.elm_light.elm_ast.print_export,exports));
} else
{return null;
}
}
}
});
lt.plugins.elm_light.elm_ast.print_exposing = (function print_exposing(p__24940){var map__24942 = p__24940;var map__24942__$1 = ((cljs.core.seq_QMARK_.call(null,map__24942))?cljs.core.apply.call(null,cljs.core.hash_map,map__24942):map__24942);var exposing = map__24942__$1;var exports = cljs.core.get.call(null,map__24942__$1,new cljs.core.Keyword(null,"exports","exports",3999815345));if(cljs.core.not.call(null,cljs.core.seq.call(null,exports)))
{return "";
} else
{return [cljs.core.str("exposing ("),cljs.core.str(lt.plugins.elm_light.elm_ast.print_exports.call(null,exports)),cljs.core.str(")")].join('');
}
});
lt.plugins.elm_light.elm_ast.sym_exposed_QMARK_ = (function sym_exposed_QMARK_(sym,project_dir,module_file){return lt.plugins.elm_light.elm_ast.exposed_by_module_QMARK_.call(null,lt.plugins.elm_light.elm_ast.get_module_ast.call(null,project_dir,module_file),sym);
});
/**
* Adds an export to exposing node
* NOTE: Does not check if exposeAll or already exposed.
*/
lt.plugins.elm_light.elm_ast.expose_decl = (function expose_decl(decl,exposing){var value = new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(decl);return cljs.core.update_in.call(null,exposing,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exports","exports",3999815345)], null),((function (value){
return (function (exports){return cljs.core.conj.call(null,exports,(function (){var G__24944 = new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(decl);if(cljs.core._EQ_.call(null,"binOpDef",G__24944))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"binOpRef",new cljs.core.Keyword(null,"value","value",1125876963),value], null);
} else
{if(cljs.core._EQ_.call(null,"typeDecl",G__24944))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"adt",new cljs.core.Keyword(null,"value","value",1125876963),value], null);
} else
{if(cljs.core._EQ_.call(null,"typeAliasDecl",G__24944))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"adt",new cljs.core.Keyword(null,"value","value",1125876963),value], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"ref",new cljs.core.Keyword(null,"value","value",1125876963),value], null);
} else
{return null;
}
}
}
}
})());
});})(value))
);
});
lt.plugins.elm_light.elm_ast.status_class = (function status_class(p__24945){var map__24948 = p__24945;var map__24948__$1 = ((cljs.core.seq_QMARK_.call(null,map__24948))?cljs.core.apply.call(null,cljs.core.hash_map,map__24948):map__24948);var status = cljs.core.get.call(null,map__24948__$1,new cljs.core.Keyword(null,"status","status",4416389988));var G__24949 = status;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",1013907790),G__24949))
{return "ok";
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",1110689146),G__24949))
{return "error";
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return "";
} else
{return null;
}
}
}
});
lt.plugins.elm_light.elm_ast.status_text = (function status_text(p__24950){var map__24953 = p__24950;var map__24953__$1 = ((cljs.core.seq_QMARK_.call(null,map__24953))?cljs.core.apply.call(null,cljs.core.hash_map,map__24953):map__24953);var error = cljs.core.get.call(null,map__24953__$1,new cljs.core.Keyword(null,"error","error",1110689146));var status = cljs.core.get.call(null,map__24953__$1,new cljs.core.Keyword(null,"status","status",4416389988));return [cljs.core.str("AST: "),cljs.core.str((function (){var G__24954 = status;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",1110689146),G__24954))
{return "Error";
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",1013907790),G__24954))
{return "Ok";
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return "Not connected";
} else
{return null;
}
}
}
})())].join('');
});
lt.plugins.elm_light.elm_ast.__GT_status_ui = (function __GT_status_ui(p__24955){var map__24957 = p__24955;var map__24957__$1 = ((cljs.core.seq_QMARK_.call(null,map__24957))?cljs.core.apply.call(null,cljs.core.hash_map,map__24957):map__24957);var ast_summary = cljs.core.get.call(null,map__24957__$1,new cljs.core.Keyword(null,"ast-summary","ast-summary",1727157965));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("ast-status "),cljs.core.str(lt.plugins.elm_light.elm_ast.status_class.call(null,ast_summary))].join('')], null),lt.plugins.elm_light.elm_ast.status_text.call(null,ast_summary)], null);
});
lt.plugins.elm_light.elm_ast.__BEH__update_ast_status = (function __BEH__update_ast_status(this$,f){return lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast-summary","ast-summary",1727157965)], null),f);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.elm-ast","update-ast-status","lt.plugins.elm-light.elm-ast/update-ast-status",2519133077),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.elm_ast.__BEH__update_ast_status,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"update!","update!",779473898),null], null), null));
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.elm-ast","statusbar.ast-status","lt.plugins.elm-light.elm-ast/statusbar.ast-status",1374391534),new cljs.core.Keyword(null,"triggers","triggers",2516997421),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.elm-light.elm-ast","update-ast-status","lt.plugins.elm-light.elm-ast/update-ast-status",2519133077),null], null), null),new cljs.core.Keyword(null,"ast-summary","ast-summary",1727157965),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",4416389988),""], null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return lt.objs.statusbar.statusbar_item.call(null,crate.binding.bound.call(null,this$,lt.plugins.elm_light.elm_ast.__GT_status_ui),"");
}));
lt.plugins.elm_light.elm_ast.statusbar_ast_summary = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.elm-light.elm-ast","statusbar.ast-status","lt.plugins.elm-light.elm-ast/statusbar.ast-status",1374391534));
lt.objs.statusbar.add_statusbar_item.call(null,lt.plugins.elm_light.elm_ast.statusbar_ast_summary);
lt.plugins.elm_light.elm_ast.update_status_for_editor = (function update_status_for_editor(ed){var map__24960 = new cljs.core.Keyword(null,"ast-status","ast-status",2421112079).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed));var map__24960__$1 = ((cljs.core.seq_QMARK_.call(null,map__24960))?cljs.core.apply.call(null,cljs.core.hash_map,map__24960):map__24960);var error = cljs.core.get.call(null,map__24960__$1,new cljs.core.Keyword(null,"error","error",1110689146));var status = cljs.core.get.call(null,map__24960__$1,new cljs.core.Keyword(null,"status","status",4416389988));return lt.object.raise.call(null,lt.plugins.elm_light.elm_ast.statusbar_ast_summary,new cljs.core.Keyword(null,"update!","update!",779473898),((function (map__24960,map__24960__$1,error,status){
return (function (p1__24958_SHARP_){return cljs.core.assoc.call(null,p1__24958_SHARP_,new cljs.core.Keyword(null,"status","status",4416389988),status,new cljs.core.Keyword(null,"error","error",1110689146),error);
});})(map__24960,map__24960__$1,error,status))
);
});
lt.plugins.elm_light.elm_ast.__BEH__update_ast_status_on_editor_change = (function __BEH__update_ast_status_on_editor_change(ed){return lt.plugins.elm_light.elm_ast.update_status_for_editor.call(null,ed);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.elm-ast","update-ast-status-on-editor-change","lt.plugins.elm-light.elm-ast/update-ast-status-on-editor-change",1769747394),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.elm_ast.__BEH__update_ast_status_on_editor_change,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"focus","focus",1111509066),null], null), null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.elm-light.repl')) {
goog.provide('lt.plugins.elm_light.repl');
goog.require('cljs.core');
goog.require('lt.objs.tabs');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.tabs');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
lt.plugins.elm_light.repl.__BEH__on_focus_repl_ed = (function __BEH__on_focus_repl_ed(this$){if(cljs.core.truth_(new cljs.core.Keyword(null,"main","main",1017248043).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))))
{return lt.object.raise.call(null,new cljs.core.Keyword(null,"main","main",1017248043).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.Keyword(null,"focus!","focus!",4039653819));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.repl","on-focus-repl-ed","lt.plugins.elm-light.repl/on-focus-repl-ed",902928202),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.repl.__BEH__on_focus_repl_ed,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"focus!","focus!",4039653819),null], null), null));
lt.plugins.elm_light.repl.__BEH__repl_destroy_on_close = (function __BEH__repl_destroy_on_close(this$){lt.object.raise.call(null,new cljs.core.Keyword(null,"main","main",1017248043).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.Keyword(null,"close","close",1108660586));
return lt.object.destroy_BANG_.call(null,this$);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.repl","repl-destroy-on-close","lt.plugins.elm-light.repl/repl-destroy-on-close",1223254671),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.repl.__BEH__repl_destroy_on_close,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));
lt.plugins.elm_light.repl.__BEH__repl_close_parent = (function __BEH__repl_close_parent(this$){return lt.object.destroy_BANG_.call(null,new cljs.core.Keyword(null,"frame","frame",1111596255).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.repl","repl-close-parent","lt.plugins.elm-light.repl/repl-close-parent",1283075757),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.repl.__BEH__repl_close_parent,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"destroy","destroy",2571277164),null], null), null));
lt.plugins.elm_light.repl.__BEH__on_show_repl_refresh_eds = (function __BEH__on_show_repl_refresh_eds(this$){if(cljs.core.truth_(new cljs.core.Keyword(null,"main","main",1017248043).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))))
{lt.object.raise.call(null,new cljs.core.Keyword(null,"main","main",1017248043).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.Keyword(null,"show","show",1017433711));
lt.object.raise.call(null,new cljs.core.Keyword(null,"main","main",1017248043).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.Keyword(null,"refresh!","refresh!",4597922840));
return lt.objs.editor.focus.call(null,new cljs.core.Keyword(null,"main","main",1017248043).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.repl","on-show-repl-refresh-eds","lt.plugins.elm-light.repl/on-show-repl-refresh-eds",1683212982),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.repl.__BEH__on_show_repl_refresh_eds,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"show","show",1017433711),null], null), null));
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.repl","elmrepl","lt.plugins.elm-light.repl/elmrepl",2110428165),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elmrepl","elmrepl",3653571719),null], null), null),new cljs.core.Keyword(null,"name","name",1017277949),"elmrepl",new cljs.core.Keyword(null,"live","live",1017226334),true,new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){var main = lt.object.add_tags.call(null,lt.object.remove_tags.call(null,lt.objs.editor.pool.create.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mime","mime",1017255846),"text/x-elm",new cljs.core.Keyword(null,"content","content",1965434859),"",new cljs.core.Keyword(null,"ns","ns",1013907767),"user"], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor.elm","editor.elm",3751348247)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor.elm.repl","editor.elm.repl",1086231178),new cljs.core.Keyword(null,"editor.transient","editor.transient",3554141883)], null));lt.object.merge_BANG_.call(null,main,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"frame","frame",1111596255),this$], null));
lt.objs.editor.clear_history.call(null,main);
lt.object.merge_BANG_.call(null,main,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dirty","dirty",1109497668),false,new cljs.core.Keyword(null,"editor.generation","editor.generation",4482163627),lt.objs.editor.__GT_generation.call(null,main)], null));
lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"main","main",1017248043),main,new cljs.core.Keyword(null,"dirty","dirty",1109497668),false], null));
lt.objs.editor._PLUS_class.call(null,main,new cljs.core.Keyword(null,"main","main",1017248043));
lt.objs.editor.move_cursor.call(null,main,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),0,new cljs.core.Keyword(null,"ch","ch",1013907415),0], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.elmrepl","div.elmrepl",926648362),lt.object.__GT_content.call(null,main)], null);
}));
lt.plugins.elm_light.repl.add_repl = (function add_repl(){var elmrepl = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.elm-light.repl","elmrepl","lt.plugins.elm-light.repl/elmrepl",2110428165));lt.objs.tabs.add_BANG_.call(null,elmrepl);
lt.objs.tabs.active_BANG_.call(null,elmrepl);
return elmrepl;
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"elmrepl","elmrepl",3653571719),new cljs.core.Keyword(null,"desc","desc",1016984067),"Elm repl: Open a elm repl",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.plugins.elm_light.repl.add_repl.call(null);
})], null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.elm-light.utils')) {
goog.provide('lt.plugins.elm_light.utils');
goog.require('cljs.core');
goog.require('lt.objs.plugins');
goog.require('lt.objs.files');
goog.require('lt.util.dom');
goog.require('lt.util.dom');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.files');
goog.require('lt.objs.plugins');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor.pool');
goog.require('fetch.core');
goog.require('fetch.core');
lt.plugins.elm_light.utils.elm_plugin_dir = lt.objs.plugins.find_plugin.call(null,"elm-light");
lt.plugins.elm_light.utils.marked = require(lt.objs.files.join.call(null,lt.plugins.elm_light.utils.elm_plugin_dir,"node_modules","marked"));
lt.plugins.elm_light.utils.str_contains = (function str_contains(s,v){return (s.indexOf(v) > -1);
});
lt.plugins.elm_light.utils.find_symbol = (function find_symbol(ed,pos){var curr_tok = lt.objs.editor.__GT_token.call(null,ed,pos);var G__20005 = new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(curr_tok);if(cljs.core._EQ_.call(null,"builtin",G__20005))
{return [cljs.core.str(find_symbol.call(null,ed,cljs.core.assoc.call(null,pos,new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(curr_tok)))),cljs.core.str(new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(curr_tok))].join('');
} else
{if(cljs.core._EQ_.call(null,"variable-3",G__20005))
{return [cljs.core.str(find_symbol.call(null,ed,cljs.core.assoc.call(null,pos,new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(curr_tok)))),cljs.core.str(new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(curr_tok))].join('');
} else
{if(cljs.core._EQ_.call(null,"variable-2",G__20005))
{return [cljs.core.str(find_symbol.call(null,ed,cljs.core.assoc.call(null,pos,new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(curr_tok)))),cljs.core.str(new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(curr_tok))].join('');
} else
{if(cljs.core._EQ_.call(null,"variable",G__20005))
{return [cljs.core.str(find_symbol.call(null,ed,cljs.core.assoc.call(null,pos,new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(curr_tok)))),cljs.core.str(new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(curr_tok))].join('');
} else
{if(cljs.core._EQ_.call(null,"qualifier",G__20005))
{return [cljs.core.str(find_symbol.call(null,ed,cljs.core.assoc.call(null,pos,new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(curr_tok)))),cljs.core.str(new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(curr_tok))].join('');
} else
{if(cljs.core._EQ_.call(null,"def",G__20005))
{return [cljs.core.str(find_symbol.call(null,ed,cljs.core.assoc.call(null,pos,new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(curr_tok)))),cljs.core.str(new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(curr_tok))].join('');
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return "";
} else
{return null;
}
}
}
}
}
}
}
});
lt.plugins.elm_light.utils.project_path = (function project_path(path){if(cljs.core.truth_(lt.objs.files.dir_QMARK_.call(null,path)))
{return path;
} else
{var temp__4090__auto__ = lt.objs.files.walk_up_find.call(null,path,"elm-package.json");if(cljs.core.truth_(temp__4090__auto__))
{var pkg_json = temp__4090__auto__;return lt.objs.files.parent.call(null,pkg_json);
} else
{return null;
}
}
});
lt.plugins.elm_light.utils.reactor_path = (function reactor_path(path){var root = lt.plugins.elm_light.utils.project_path.call(null,path);if(cljs.core._EQ_.call(null,path.indexOf(root),0))
{return cljs.core.subs.call(null,path,cljs.core.count.call(null,root));
} else
{return null;
}
});
lt.plugins.elm_light.utils.parse_json_file = (function parse_json_file(json_file){if(cljs.core.truth_(lt.objs.files.exists_QMARK_.call(null,json_file)))
{return cljs.core.js__GT_clj.call(null,JSON.parse(new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(lt.objs.files.open_sync.call(null,json_file))),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
} else
{return null;
}
});
lt.plugins.elm_light.utils.pretty_json = (function pretty_json(data){return JSON.stringify(cljs.core.clj__GT_js.call(null,data),lt.plugins.elm_light.utils.null$,4);
});
lt.plugins.elm_light.utils.nskw__GT_name = (function nskw__GT_name(kw){return [cljs.core.str(cljs.core.namespace.call(null,kw)),cljs.core.str("/"),cljs.core.str(cljs.core.name.call(null,kw))].join('');
});
lt.plugins.elm_light.utils.get_project_deps = (function get_project_deps(project_path){var pkg_json = lt.objs.files.join.call(null,project_path,"elm-package.json");var deps_json = lt.objs.files.join.call(null,project_path,"elm-stuff","exact-dependencies.json");return cljs.core.mapv.call(null,((function (pkg_json,deps_json){
return (function (p__20012){var vec__20013 = p__20012;var _ = cljs.core.nth.call(null,vec__20013,0,null);var vs = cljs.core.nth.call(null,vec__20013,1,null);return cljs.core.apply.call(null,cljs.core.merge,vs);
});})(pkg_json,deps_json))
,cljs.core.group_by.call(null,new cljs.core.Keyword(null,"package","package",4501809080),cljs.core.concat.call(null,cljs.core.mapv.call(null,((function (pkg_json,deps_json){
return (function (p__20014){var vec__20015 = p__20014;var k = cljs.core.nth.call(null,vec__20015,0,null);var v = cljs.core.nth.call(null,vec__20015,1,null);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"package","package",4501809080),lt.plugins.elm_light.utils.nskw__GT_name.call(null,k),new cljs.core.Keyword(null,"exact","exact",1110851185),v], null);
});})(pkg_json,deps_json))
,lt.plugins.elm_light.utils.parse_json_file.call(null,deps_json)),cljs.core.mapv.call(null,((function (pkg_json,deps_json){
return (function (p__20016){var vec__20017 = p__20016;var k = cljs.core.nth.call(null,vec__20017,0,null);var v = cljs.core.nth.call(null,vec__20017,1,null);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"package","package",4501809080),lt.plugins.elm_light.utils.nskw__GT_name.call(null,k),new cljs.core.Keyword(null,"range","range",1122184367),v], null);
});})(pkg_json,deps_json))
,new cljs.core.Keyword(null,"dependencies","dependencies",1517678747).cljs$core$IFn$_invoke$arity$1(lt.plugins.elm_light.utils.parse_json_file.call(null,pkg_json))))));
});
/**
* Fetch all packages from package.elm-lang.org
*/
lt.plugins.elm_light.utils.fetch_all_packages = (function fetch_all_packages(callback){return fetch.core.xhr.call(null,[cljs.core.str("http://package.elm-lang.org/all-packages?date="),cljs.core.str((new Date()).getTime())].join(''),cljs.core.PersistentArrayMap.EMPTY,(function (data){var pkgs = cljs.core.js__GT_clj.call(null,JSON.parse(data),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);return callback.call(null,pkgs);
}));
});
}
if(!lt.util.load.provided_QMARK_('lt.plugins.elm-light.gutter')) {
goog.provide('lt.plugins.elm_light.gutter');
goog.require('cljs.core');
goog.require('lt.objs.files');
goog.require('lt.util.dom');
goog.require('lt.plugins.elm_light.utils');
goog.require('lt.util.dom');
goog.require('lt.objs.files');
goog.require('lt.plugins.elm_light.utils');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.editor');
goog.require('lt.plugins.elm_light.elm_ast');
goog.require('lt.plugins.elm_light.elm_ast');
lt.plugins.elm_light.gutter.icon_url = lt.objs.files.join.call(null,lt.plugins.elm_light.utils.elm_plugin_dir,"css","export.svg");
lt.plugins.elm_light.gutter.gutter_marker_exposed = (function gutter_marker_exposed(){var e__6289__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.elm-gutter-marker","div.elm-gutter-marker",2892074906),"@"], null));var seq__20892_20922 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__20893_20923 = null;var count__20894_20924 = 0;var i__20895_20925 = 0;while(true){
if((i__20895_20925 < count__20894_20924))
{var vec__20896_20926 = cljs.core._nth.call(null,chunk__20893_20923,i__20895_20925);var ev__6290__auto___20927 = cljs.core.nth.call(null,vec__20896_20926,0,null);var func__6291__auto___20928 = cljs.core.nth.call(null,vec__20896_20926,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___20927,func__6291__auto___20928);
{
var G__20929 = seq__20892_20922;
var G__20930 = chunk__20893_20923;
var G__20931 = count__20894_20924;
var G__20932 = (i__20895_20925 + 1);
seq__20892_20922 = G__20929;
chunk__20893_20923 = G__20930;
count__20894_20924 = G__20931;
i__20895_20925 = G__20932;
continue;
}
} else
{var temp__4092__auto___20933 = cljs.core.seq.call(null,seq__20892_20922);if(temp__4092__auto___20933)
{var seq__20892_20934__$1 = temp__4092__auto___20933;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20892_20934__$1))
{var c__5632__auto___20935 = cljs.core.chunk_first.call(null,seq__20892_20934__$1);{
var G__20936 = cljs.core.chunk_rest.call(null,seq__20892_20934__$1);
var G__20937 = c__5632__auto___20935;
var G__20938 = cljs.core.count.call(null,c__5632__auto___20935);
var G__20939 = 0;
seq__20892_20922 = G__20936;
chunk__20893_20923 = G__20937;
count__20894_20924 = G__20938;
i__20895_20925 = G__20939;
continue;
}
} else
{var vec__20897_20940 = cljs.core.first.call(null,seq__20892_20934__$1);var ev__6290__auto___20941 = cljs.core.nth.call(null,vec__20897_20940,0,null);var func__6291__auto___20942 = cljs.core.nth.call(null,vec__20897_20940,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___20941,func__6291__auto___20942);
{
var G__20943 = cljs.core.next.call(null,seq__20892_20934__$1);
var G__20944 = null;
var G__20945 = 0;
var G__20946 = 0;
seq__20892_20922 = G__20943;
chunk__20893_20923 = G__20944;
count__20894_20924 = G__20945;
i__20895_20925 = G__20946;
continue;
}
}
} else
{}
}
break;
}
return e__6289__auto__;
});
lt.plugins.elm_light.gutter.__BEH__show_elm_gutter = (function __BEH__show_elm_gutter(ed){if(cljs.core.truth_(new cljs.core.Keyword(null,"elm-gutter","elm-gutter",1745506196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed))))
{return null;
} else
{lt.objs.editor.add_gutter.call(null,ed,"elm-gutter",10);
return lt.object.assoc_in_BANG_.call(null,ed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elm-gutter","elm-gutter",1745506196)], null),true);
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.gutter","show-elm-gutter","lt.plugins.elm-light.gutter/show-elm-gutter",3265354305),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.gutter.__BEH__show_elm_gutter,new cljs.core.Keyword(null,"desc","desc",1016984067),"Editor Elm: Display elm gutter",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),"user");
lt.plugins.elm_light.gutter.__BEH__elm_gutter_exposeds = (function __BEH__elm_gutter_exposeds(ed){var cm_ed_20947 = lt.objs.editor.__GT_cm_ed.call(null,ed);var seq__20906_20948 = cljs.core.seq.call(null,cm_ed_20947.gutters);var chunk__20907_20949 = null;var count__20908_20950 = 0;var i__20909_20951 = 0;while(true){
if((i__20909_20951 < count__20908_20950))
{var gutter_20952 = cljs.core._nth.call(null,chunk__20907_20949,i__20909_20951);cljs.core.println.call(null,"gutter: ",gutter_20952);
{
var G__20953 = seq__20906_20948;
var G__20954 = chunk__20907_20949;
var G__20955 = count__20908_20950;
var G__20956 = (i__20909_20951 + 1);
seq__20906_20948 = G__20953;
chunk__20907_20949 = G__20954;
count__20908_20950 = G__20955;
i__20909_20951 = G__20956;
continue;
}
} else
{var temp__4092__auto___20957 = cljs.core.seq.call(null,seq__20906_20948);if(temp__4092__auto___20957)
{var seq__20906_20958__$1 = temp__4092__auto___20957;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20906_20958__$1))
{var c__5632__auto___20959 = cljs.core.chunk_first.call(null,seq__20906_20958__$1);{
var G__20960 = cljs.core.chunk_rest.call(null,seq__20906_20958__$1);
var G__20961 = c__5632__auto___20959;
var G__20962 = cljs.core.count.call(null,c__5632__auto___20959);
var G__20963 = 0;
seq__20906_20948 = G__20960;
chunk__20907_20949 = G__20961;
count__20908_20950 = G__20962;
i__20909_20951 = G__20963;
continue;
}
} else
{var gutter_20964 = cljs.core.first.call(null,seq__20906_20958__$1);cljs.core.println.call(null,"gutter: ",gutter_20964);
{
var G__20965 = cljs.core.next.call(null,seq__20906_20958__$1);
var G__20966 = null;
var G__20967 = 0;
var G__20968 = 0;
seq__20906_20948 = G__20965;
chunk__20907_20949 = G__20966;
count__20908_20950 = G__20967;
i__20909_20951 = G__20968;
continue;
}
}
} else
{}
}
break;
}
return lt.objs.editor.operation.call(null,lt.objs.editor.__GT_cm_ed.call(null,ed),(function (){lt.objs.editor.__GT_cm_ed.call(null,ed).clearGutter("elm-gutter");
var seq__20910 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"elm-exposeds-bookmarks","elm-exposeds-bookmarks",1216410620).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));var chunk__20911 = null;var count__20912 = 0;var i__20913 = 0;while(true){
if((i__20913 < count__20912))
{var bm = cljs.core._nth.call(null,chunk__20911,i__20913);var temp__4092__auto___20969 = cljs.core.js__GT_clj.call(null,bm.find(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true,new cljs.core.Keyword(null,"force-obj","force-obj",2540778119),true);if(cljs.core.truth_(temp__4092__auto___20969))
{var pos_20970 = temp__4092__auto___20969;var temp__4092__auto___20971__$1 = pos_20970.line;if(cljs.core.truth_(temp__4092__auto___20971__$1))
{var line_20972 = temp__4092__auto___20971__$1;lt.objs.editor.__GT_cm_ed.call(null,ed).setGutterMarker(line_20972,"elm-gutter",lt.plugins.elm_light.gutter.gutter_marker_exposed.call(null));
} else
{}
} else
{}
{
var G__20973 = seq__20910;
var G__20974 = chunk__20911;
var G__20975 = count__20912;
var G__20976 = (i__20913 + 1);
seq__20910 = G__20973;
chunk__20911 = G__20974;
count__20912 = G__20975;
i__20913 = G__20976;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__20910);if(temp__4092__auto__)
{var seq__20910__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20910__$1))
{var c__5632__auto__ = cljs.core.chunk_first.call(null,seq__20910__$1);{
var G__20977 = cljs.core.chunk_rest.call(null,seq__20910__$1);
var G__20978 = c__5632__auto__;
var G__20979 = cljs.core.count.call(null,c__5632__auto__);
var G__20980 = 0;
seq__20910 = G__20977;
chunk__20911 = G__20978;
count__20912 = G__20979;
i__20913 = G__20980;
continue;
}
} else
{var bm = cljs.core.first.call(null,seq__20910__$1);var temp__4092__auto___20981__$1 = cljs.core.js__GT_clj.call(null,bm.find(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true,new cljs.core.Keyword(null,"force-obj","force-obj",2540778119),true);if(cljs.core.truth_(temp__4092__auto___20981__$1))
{var pos_20982 = temp__4092__auto___20981__$1;var temp__4092__auto___20983__$2 = pos_20982.line;if(cljs.core.truth_(temp__4092__auto___20983__$2))
{var line_20984 = temp__4092__auto___20983__$2;lt.objs.editor.__GT_cm_ed.call(null,ed).setGutterMarker(line_20984,"elm-gutter",lt.plugins.elm_light.gutter.gutter_marker_exposed.call(null));
} else
{}
} else
{}
{
var G__20985 = cljs.core.next.call(null,seq__20910__$1);
var G__20986 = null;
var G__20987 = 0;
var G__20988 = 0;
seq__20910 = G__20985;
chunk__20911 = G__20986;
count__20912 = G__20987;
i__20913 = G__20988;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.gutter","elm-gutter-exposeds","lt.plugins.elm-light.gutter/elm-gutter-exposeds",2318158517),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.gutter.__BEH__elm_gutter_exposeds,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elm.gutter.refresh","elm.gutter.refresh",722016962),null], null), null));
lt.plugins.elm_light.gutter.__BEH__elm_gutter_exposeds_mark = (function __BEH__elm_gutter_exposeds_mark(ed){var path = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));var exposeds = lt.plugins.elm_light.elm_ast.get_gutter_exposeds.call(null,path,lt.plugins.elm_light.utils.project_path.call(null,path));var seq__20918_20989 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"elm-exposeds-bookmarks","elm-exposeds-bookmarks",1216410620).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));var chunk__20919_20990 = null;var count__20920_20991 = 0;var i__20921_20992 = 0;while(true){
if((i__20921_20992 < count__20920_20991))
{var bm_20993 = cljs.core._nth.call(null,chunk__20919_20990,i__20921_20992);bm_20993.clear();
{
var G__20994 = seq__20918_20989;
var G__20995 = chunk__20919_20990;
var G__20996 = count__20920_20991;
var G__20997 = (i__20921_20992 + 1);
seq__20918_20989 = G__20994;
chunk__20919_20990 = G__20995;
count__20920_20991 = G__20996;
i__20921_20992 = G__20997;
continue;
}
} else
{var temp__4092__auto___20998 = cljs.core.seq.call(null,seq__20918_20989);if(temp__4092__auto___20998)
{var seq__20918_20999__$1 = temp__4092__auto___20998;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20918_20999__$1))
{var c__5632__auto___21000 = cljs.core.chunk_first.call(null,seq__20918_20999__$1);{
var G__21001 = cljs.core.chunk_rest.call(null,seq__20918_20999__$1);
var G__21002 = c__5632__auto___21000;
var G__21003 = cljs.core.count.call(null,c__5632__auto___21000);
var G__21004 = 0;
seq__20918_20989 = G__21001;
chunk__20919_20990 = G__21002;
count__20920_20991 = G__21003;
i__20921_20992 = G__21004;
continue;
}
} else
{var bm_21005 = cljs.core.first.call(null,seq__20918_20999__$1);bm_21005.clear();
{
var G__21006 = cljs.core.next.call(null,seq__20918_20999__$1);
var G__21007 = null;
var G__21008 = 0;
var G__21009 = 0;
seq__20918_20989 = G__21006;
chunk__20919_20990 = G__21007;
count__20920_20991 = G__21008;
i__20921_20992 = G__21009;
continue;
}
}
} else
{}
}
break;
}
lt.object.assoc_in_BANG_.call(null,ed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elm-exposeds-bookmarks","elm-exposeds-bookmarks",1216410620)], null),cljs.core.map.call(null,((function (path,exposeds){
return (function (exposed){return lt.objs.editor.bookmark.call(null,ed,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",1013907415),1,new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(exposed))) - 1)], null));
});})(path,exposeds))
,exposeds));
return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"elm.gutter.refresh","elm.gutter.refresh",722016962));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.gutter","elm-gutter-exposeds-mark","lt.plugins.elm-light.gutter/elm-gutter-exposeds-mark",2789067959),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.gutter.__BEH__elm_gutter_exposeds_mark,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elm.gutter.exposeds.mark","elm.gutter.exposeds.mark",3035248815),null], null), null));
}
if(!lt.util.load.provided_QMARK_('cljs.core.async.impl.protocols')) {
goog.provide('cljs.core.async.impl.protocols');
goog.require('cljs.core');
cljs.core.async.impl.protocols.MAX_QUEUE_SIZE = 1024;
cljs.core.async.impl.protocols.ReadPort = (function (){var obj18474 = {};return obj18474;
})();
cljs.core.async.impl.protocols.take_BANG_ = (function take_BANG_(port,fn1_handler){if((function (){var and__4872__auto__ = port;if(and__4872__auto__)
{return port.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2;
} else
{return and__4872__auto__;
}
})())
{return port.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(port,fn1_handler);
} else
{var x__5511__auto__ = (((port == null))?null:port);return (function (){var or__4884__auto__ = (cljs.core.async.impl.protocols.take_BANG_[goog.typeOf(x__5511__auto__)]);if(or__4884__auto__)
{return or__4884__auto__;
} else
{var or__4884__auto____$1 = (cljs.core.async.impl.protocols.take_BANG_["_"]);if(or__4884__auto____$1)
{return or__4884__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ReadPort.take!",port);
}
}
})().call(null,port,fn1_handler);
}
});
cljs.core.async.impl.protocols.WritePort = (function (){var obj18476 = {};return obj18476;
})();
cljs.core.async.impl.protocols.put_BANG_ = (function put_BANG_(port,val,fn0_handler){if((function (){var and__4872__auto__ = port;if(and__4872__auto__)
{return port.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3;
} else
{return and__4872__auto__;
}
})())
{return port.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(port,val,fn0_handler);
} else
{var x__5511__auto__ = (((port == null))?null:port);return (function (){var or__4884__auto__ = (cljs.core.async.impl.protocols.put_BANG_[goog.typeOf(x__5511__auto__)]);if(or__4884__auto__)
{return or__4884__auto__;
} else
{var or__4884__auto____$1 = (cljs.core.async.impl.protocols.put_BANG_["_"]);if(or__4884__auto____$1)
{return or__4884__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"WritePort.put!",port);
}
}
})().call(null,port,val,fn0_handler);
}
});
cljs.core.async.impl.protocols.Channel = (function (){var obj18478 = {};return obj18478;
})();
cljs.core.async.impl.protocols.close_BANG_ = (function close_BANG_(chan){if((function (){var and__4872__auto__ = chan;if(and__4872__auto__)
{return chan.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1;
} else
{return and__4872__auto__;
}
})())
{return chan.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(chan);
} else
{var x__5511__auto__ = (((chan == null))?null:chan);return (function (){var or__4884__auto__ = (cljs.core.async.impl.protocols.close_BANG_[goog.typeOf(x__5511__auto__)]);if(or__4884__auto__)
{return or__4884__auto__;
} else
{var or__4884__auto____$1 = (cljs.core.async.impl.protocols.close_BANG_["_"]);if(or__4884__auto____$1)
{return or__4884__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Channel.close!",chan);
}
}
})().call(null,chan);
}
});
cljs.core.async.impl.protocols.Handler = (function (){var obj18480 = {};return obj18480;
})();
cljs.core.async.impl.protocols.active_QMARK_ = (function active_QMARK_(h){if((function (){var and__4872__auto__ = h;if(and__4872__auto__)
{return h.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1;
} else
{return and__4872__auto__;
}
})())
{return h.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(h);
} else
{var x__5511__auto__ = (((h == null))?null:h);return (function (){var or__4884__auto__ = (cljs.core.async.impl.protocols.active_QMARK_[goog.typeOf(x__5511__auto__)]);if(or__4884__auto__)
{return or__4884__auto__;
} else
{var or__4884__auto____$1 = (cljs.core.async.impl.protocols.active_QMARK_["_"]);if(or__4884__auto____$1)
{return or__4884__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Handler.active?",h);
}
}
})().call(null,h);
}
});
cljs.core.async.impl.protocols.commit = (function commit(h){if((function (){var and__4872__auto__ = h;if(and__4872__auto__)
{return h.cljs$core$async$impl$protocols$Handler$commit$arity$1;
} else
{return and__4872__auto__;
}
})())
{return h.cljs$core$async$impl$protocols$Handler$commit$arity$1(h);
} else
{var x__5511__auto__ = (((h == null))?null:h);return (function (){var or__4884__auto__ = (cljs.core.async.impl.protocols.commit[goog.typeOf(x__5511__auto__)]);if(or__4884__auto__)
{return or__4884__auto__;
} else
{var or__4884__auto____$1 = (cljs.core.async.impl.protocols.commit["_"]);if(or__4884__auto____$1)
{return or__4884__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Handler.commit",h);
}
}
})().call(null,h);
}
});
cljs.core.async.impl.protocols.Buffer = (function (){var obj18482 = {};return obj18482;
})();
cljs.core.async.impl.protocols.full_QMARK_ = (function full_QMARK_(b){if((function (){var and__4872__auto__ = b;if(and__4872__auto__)
{return b.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1;
} else
{return and__4872__auto__;
}
})())
{return b.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(b);
} else
{var x__5511__auto__ = (((b == null))?null:b);return (function (){var or__4884__auto__ = (cljs.core.async.impl.protocols.full_QMARK_[goog.typeOf(x__5511__auto__)]);if(or__4884__auto__)
{return or__4884__auto__;
} else
{var or__4884__auto____$1 = (cljs.core.async.impl.protocols.full_QMARK_["_"]);if(or__4884__auto____$1)
{return or__4884__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Buffer.full?",b);
}
}
})().call(null,b);
}
});
cljs.core.async.impl.protocols.remove_BANG_ = (function remove_BANG_(b){if((function (){var and__4872__auto__ = b;if(and__4872__auto__)
{return b.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1;
} else
{return and__4872__auto__;
}
})())
{return b.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(b);
} else
{var x__5511__auto__ = (((b == null))?null:b);return (function (){var or__4884__auto__ = (cljs.core.async.impl.protocols.remove_BANG_[goog.typeOf(x__5511__auto__)]);if(or__4884__auto__)
{return or__4884__auto__;
} else
{var or__4884__auto____$1 = (cljs.core.async.impl.protocols.remove_BANG_["_"]);if(or__4884__auto____$1)
{return or__4884__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Buffer.remove!",b);
}
}
})().call(null,b);
}
});
cljs.core.async.impl.protocols.add_BANG_ = (function add_BANG_(b,itm){if((function (){var and__4872__auto__ = b;if(and__4872__auto__)
{return b.cljs$core$async$impl$protocols$Buffer$add_BANG_$arity$2;
} else
{return and__4872__auto__;
}
})())
{return b.cljs$core$async$impl$protocols$Buffer$add_BANG_$arity$2(b,itm);
} else
{var x__5511__auto__ = (((b == null))?null:b);return (function (){var or__4884__auto__ = (cljs.core.async.impl.protocols.add_BANG_[goog.typeOf(x__5511__auto__)]);if(or__4884__auto__)
{return or__4884__auto__;
} else
{var or__4884__auto____$1 = (cljs.core.async.impl.protocols.add_BANG_["_"]);if(or__4884__auto____$1)
{return or__4884__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Buffer.add!",b);
}
}
})().call(null,b,itm);
}
});
cljs.core.async.impl.protocols.UnblockingBuffer = (function (){var obj18484 = {};return obj18484;
})();
}
if(!lt.util.load.provided_QMARK_('cljs.core.async.impl.buffers')) {
goog.provide('cljs.core.async.impl.buffers');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.buffers.acopy = (function acopy(src,src_start,dest,dest_start,len){var cnt = 0;while(true){
if((cnt < len))
{(dest[(dest_start + cnt)] = (src[(src_start + cnt)]));
{
var G__18439 = (cnt + 1);
cnt = G__18439;
continue;
}
} else
{return null;
}
break;
}
});

/**
* @constructor
*/
cljs.core.async.impl.buffers.RingBuffer = (function (head,tail,length,arr){
this.head = head;
this.tail = tail;
this.length = length;
this.arr = arr;
})
cljs.core.async.impl.buffers.RingBuffer.cljs$lang$type = true;
cljs.core.async.impl.buffers.RingBuffer.cljs$lang$ctorStr = "cljs.core.async.impl.buffers/RingBuffer";
cljs.core.async.impl.buffers.RingBuffer.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async.impl.buffers/RingBuffer");
});
cljs.core.async.impl.buffers.RingBuffer.prototype.pop = (function (){var self__ = this;
var _ = this;if((self__.length === 0))
{return null;
} else
{var x = (self__.arr[self__.tail]);(self__.arr[self__.tail] = null);
self__.tail = ((self__.tail + 1) % self__.arr.length);
self__.length = (self__.length - 1);
return x;
}
});
cljs.core.async.impl.buffers.RingBuffer.prototype.unshift = (function (x){var self__ = this;
var _ = this;(self__.arr[self__.head] = x);
self__.head = ((self__.head + 1) % self__.arr.length);
self__.length = (self__.length + 1);
return null;
});
cljs.core.async.impl.buffers.RingBuffer.prototype.unbounded_unshift = (function (x){var self__ = this;
var this$ = this;if(((self__.length + 1) === self__.arr.length))
{this$.resize();
} else
{}
return this$.unshift(x);
});
cljs.core.async.impl.buffers.RingBuffer.prototype.resize = (function (){var self__ = this;
var _ = this;var new_arr_size = (self__.arr.length * 2);var new_arr = (new Array(new_arr_size));if((self__.tail < self__.head))
{cljs.core.async.impl.buffers.acopy.call(null,self__.arr,self__.tail,new_arr,0,self__.length);
self__.tail = 0;
self__.head = self__.length;
return self__.arr = new_arr;
} else
{if((self__.tail > self__.head))
{cljs.core.async.impl.buffers.acopy.call(null,self__.arr,self__.tail,new_arr,0,(self__.arr.length - self__.tail));
cljs.core.async.impl.buffers.acopy.call(null,self__.arr,0,new_arr,(self__.arr.length - self__.tail),self__.head);
self__.tail = 0;
self__.head = self__.length;
return self__.arr = new_arr;
} else
{if((self__.tail === self__.head))
{self__.tail = 0;
self__.head = 0;
return self__.arr = new_arr;
} else
{return null;
}
}
}
});
cljs.core.async.impl.buffers.RingBuffer.prototype.cleanup = (function (keep_QMARK_){var self__ = this;
var this$ = this;var n__5732__auto__ = self__.length;var x = 0;while(true){
if((x < n__5732__auto__))
{var v_18440 = this$.pop();if(keep_QMARK_.call(null,v_18440))
{this$.unshift(v_18440);
} else
{}
{
var G__18441 = (x + 1);
x = G__18441;
continue;
}
} else
{return null;
}
break;
}
});
cljs.core.async.impl.buffers.__GT_RingBuffer = (function __GT_RingBuffer(head,tail,length,arr){return (new cljs.core.async.impl.buffers.RingBuffer(head,tail,length,arr));
});
cljs.core.async.impl.buffers.ring_buffer = (function ring_buffer(n){if((n > 0))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Can't create a ring buffer of size 0"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,">",">",-1640531465,null),new cljs.core.Symbol(null,"n","n",-1640531417,null),0)))].join('')));
}
return (new cljs.core.async.impl.buffers.RingBuffer(0,0,0,(new Array(n))));
});

/**
* @constructor
*/
cljs.core.async.impl.buffers.FixedBuffer = (function (buf,n){
this.buf = buf;
this.n = n;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2;
})
cljs.core.async.impl.buffers.FixedBuffer.cljs$lang$type = true;
cljs.core.async.impl.buffers.FixedBuffer.cljs$lang$ctorStr = "cljs.core.async.impl.buffers/FixedBuffer";
cljs.core.async.impl.buffers.FixedBuffer.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async.impl.buffers/FixedBuffer");
});
cljs.core.async.impl.buffers.FixedBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.buf.length;
});
cljs.core.async.impl.buffers.FixedBuffer.prototype.cljs$core$async$impl$protocols$Buffer$ = true;
cljs.core.async.impl.buffers.FixedBuffer.prototype.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return (self__.buf.length === self__.n);
});
cljs.core.async.impl.buffers.FixedBuffer.prototype.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.buf.pop();
});
cljs.core.async.impl.buffers.FixedBuffer.prototype.cljs$core$async$impl$protocols$Buffer$add_BANG_$arity$2 = (function (this$,itm){var self__ = this;
var this$__$1 = this;if(cljs.core.not.call(null,cljs.core.async.impl.protocols.full_QMARK_.call(null,this$__$1)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Can't add to a full buffer"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol("impl","full?","impl/full?",-1337857039,null),new cljs.core.Symbol(null,"this","this",-1636972457,null)))))].join('')));
}
return self__.buf.unshift(itm);
});
cljs.core.async.impl.buffers.__GT_FixedBuffer = (function __GT_FixedBuffer(buf,n){return (new cljs.core.async.impl.buffers.FixedBuffer(buf,n));
});
cljs.core.async.impl.buffers.fixed_buffer = (function fixed_buffer(n){return (new cljs.core.async.impl.buffers.FixedBuffer(cljs.core.async.impl.buffers.ring_buffer.call(null,n),n));
});

/**
* @constructor
*/
cljs.core.async.impl.buffers.DroppingBuffer = (function (buf,n){
this.buf = buf;
this.n = n;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2;
})
cljs.core.async.impl.buffers.DroppingBuffer.cljs$lang$type = true;
cljs.core.async.impl.buffers.DroppingBuffer.cljs$lang$ctorStr = "cljs.core.async.impl.buffers/DroppingBuffer";
cljs.core.async.impl.buffers.DroppingBuffer.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async.impl.buffers/DroppingBuffer");
});
cljs.core.async.impl.buffers.DroppingBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.buf.length;
});
cljs.core.async.impl.buffers.DroppingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$ = true;
cljs.core.async.impl.buffers.DroppingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return false;
});
cljs.core.async.impl.buffers.DroppingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.buf.pop();
});
cljs.core.async.impl.buffers.DroppingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$add_BANG_$arity$2 = (function (this$,itm){var self__ = this;
var this$__$1 = this;if((self__.buf.length === self__.n))
{return null;
} else
{return self__.buf.unshift(itm);
}
});
cljs.core.async.impl.buffers.DroppingBuffer.prototype.cljs$core$async$impl$protocols$UnblockingBuffer$ = true;
cljs.core.async.impl.buffers.__GT_DroppingBuffer = (function __GT_DroppingBuffer(buf,n){return (new cljs.core.async.impl.buffers.DroppingBuffer(buf,n));
});
cljs.core.async.impl.buffers.dropping_buffer = (function dropping_buffer(n){return (new cljs.core.async.impl.buffers.DroppingBuffer(cljs.core.async.impl.buffers.ring_buffer.call(null,n),n));
});

/**
* @constructor
*/
cljs.core.async.impl.buffers.SlidingBuffer = (function (buf,n){
this.buf = buf;
this.n = n;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2;
})
cljs.core.async.impl.buffers.SlidingBuffer.cljs$lang$type = true;
cljs.core.async.impl.buffers.SlidingBuffer.cljs$lang$ctorStr = "cljs.core.async.impl.buffers/SlidingBuffer";
cljs.core.async.impl.buffers.SlidingBuffer.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async.impl.buffers/SlidingBuffer");
});
cljs.core.async.impl.buffers.SlidingBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.buf.length;
});
cljs.core.async.impl.buffers.SlidingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$ = true;
cljs.core.async.impl.buffers.SlidingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return false;
});
cljs.core.async.impl.buffers.SlidingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.buf.pop();
});
cljs.core.async.impl.buffers.SlidingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$add_BANG_$arity$2 = (function (this$,itm){var self__ = this;
var this$__$1 = this;if((self__.buf.length === self__.n))
{cljs.core.async.impl.protocols.remove_BANG_.call(null,this$__$1);
} else
{}
return self__.buf.unshift(itm);
});
cljs.core.async.impl.buffers.SlidingBuffer.prototype.cljs$core$async$impl$protocols$UnblockingBuffer$ = true;
cljs.core.async.impl.buffers.__GT_SlidingBuffer = (function __GT_SlidingBuffer(buf,n){return (new cljs.core.async.impl.buffers.SlidingBuffer(buf,n));
});
cljs.core.async.impl.buffers.sliding_buffer = (function sliding_buffer(n){return (new cljs.core.async.impl.buffers.SlidingBuffer(cljs.core.async.impl.buffers.ring_buffer.call(null,n),n));
});
}
if(!lt.util.load.provided_QMARK_('cljs.core.async.impl.dispatch')) {
goog.provide('cljs.core.async.impl.dispatch');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.buffers');
cljs.core.async.impl.dispatch.message_channel = null;
cljs.core.async.impl.dispatch.tasks = cljs.core.async.impl.buffers.ring_buffer.call(null,32);
cljs.core.async.impl.dispatch.running_QMARK_ = false;
cljs.core.async.impl.dispatch.queued_QMARK_ = false;
cljs.core.async.impl.dispatch.TASK_BATCH_SIZE = 1024;
cljs.core.async.impl.dispatch.process_messages = (function process_messages(){cljs.core.async.impl.dispatch.running_QMARK_ = true;
cljs.core.async.impl.dispatch.queued_QMARK_ = false;
var count_18470 = 0;while(true){
var m_18471 = cljs.core.async.impl.dispatch.tasks.pop();if((m_18471 == null))
{} else
{m_18471.call(null);
if((count_18470 < cljs.core.async.impl.dispatch.TASK_BATCH_SIZE))
{{
var G__18472 = (count_18470 + 1);
count_18470 = G__18472;
continue;
}
} else
{}
}
break;
}
cljs.core.async.impl.dispatch.running_QMARK_ = false;
if((cljs.core.async.impl.dispatch.tasks.length > 0))
{return cljs.core.async.impl.dispatch.queue_dispatcher.call(null);
} else
{return null;
}
});
if(typeof MessageChannel !== 'undefined')
{cljs.core.async.impl.dispatch.message_channel = (new MessageChannel());
cljs.core.async.impl.dispatch.message_channel.port1.onmessage = (function (msg){return cljs.core.async.impl.dispatch.process_messages.call(null);
});
} else
{}
cljs.core.async.impl.dispatch.queue_dispatcher = (function queue_dispatcher(){if(cljs.core.truth_((function (){var and__4872__auto__ = cljs.core.async.impl.dispatch.queued_QMARK_;if(and__4872__auto__)
{return cljs.core.async.impl.dispatch.running_QMARK_;
} else
{return and__4872__auto__;
}
})()))
{return null;
} else
{cljs.core.async.impl.dispatch.queued_QMARK_ = true;
if(typeof MessageChannel !== 'undefined')
{return cljs.core.async.impl.dispatch.message_channel.port2.postMessage(0);
} else
{if(typeof setImmediate !== 'undefined')
{return setImmediate(cljs.core.async.impl.dispatch.process_messages);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return setTimeout(cljs.core.async.impl.dispatch.process_messages,0);
} else
{return null;
}
}
}
}
});
cljs.core.async.impl.dispatch.run = (function run(f){cljs.core.async.impl.dispatch.tasks.unbounded_unshift(f);
return cljs.core.async.impl.dispatch.queue_dispatcher.call(null);
});
cljs.core.async.impl.dispatch.queue_delay = (function queue_delay(f,delay){return setTimeout(f,delay);
});
}
if(!lt.util.load.provided_QMARK_('cljs.core.async.impl.channels')) {
goog.provide('cljs.core.async.impl.channels');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.channels.box = (function box(val){if(typeof cljs.core.async.impl.channels.t18445 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.impl.channels.t18445 = (function (val,box,meta18446){
this.val = val;
this.box = box;
this.meta18446 = meta18446;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
cljs.core.async.impl.channels.t18445.cljs$lang$type = true;
cljs.core.async.impl.channels.t18445.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t18445";
cljs.core.async.impl.channels.t18445.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async.impl.channels/t18445");
});
cljs.core.async.impl.channels.t18445.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.val;
});
cljs.core.async.impl.channels.t18445.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18447){var self__ = this;
var _18447__$1 = this;return self__.meta18446;
});
cljs.core.async.impl.channels.t18445.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18447,meta18446__$1){var self__ = this;
var _18447__$1 = this;return (new cljs.core.async.impl.channels.t18445(self__.val,self__.box,meta18446__$1));
});
cljs.core.async.impl.channels.__GT_t18445 = (function __GT_t18445(val__$1,box__$1,meta18446){return (new cljs.core.async.impl.channels.t18445(val__$1,box__$1,meta18446));
});
}
return (new cljs.core.async.impl.channels.t18445(val,box,null));
});

/**
* @constructor
*/
cljs.core.async.impl.channels.PutBox = (function (handler,val){
this.handler = handler;
this.val = val;
})
cljs.core.async.impl.channels.PutBox.cljs$lang$type = true;
cljs.core.async.impl.channels.PutBox.cljs$lang$ctorStr = "cljs.core.async.impl.channels/PutBox";
cljs.core.async.impl.channels.PutBox.cljs$lang$ctorPrWriter = (function (this__5454__auto__,writer__5455__auto__,opts__5456__auto__){return cljs.core._write.call(null,writer__5455__auto__,"cljs.core.async.impl.channels/PutBox");
});
cljs.core.async.impl.channels.__GT_PutBox = (function __GT_PutBox(handler,val){return (new cljs.core.async.impl.channels.PutBox(handler,val));
});
cljs.core.async.impl.channels.put_active_QMARK_ = (function put_active_QMARK_(box){return cljs.core.async.impl.protocols.active_QMARK_.call(null,box.handler);
});
cljs.core.async.impl.channels.MAX_DIRTY = 64;

/**
* @constructor
*/
cljs.core.async.impl.channels.ManyToManyChannel = (function (takes,dirty_takes,puts,dirty_puts,buf,closed){
this.takes = takes;
this.dirty_takes = dirty_takes;
this.puts = puts;
this.dirty_puts = dirty_puts;
this.buf = buf;
this.closed = closed;
})
cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$type = true;
cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorStr = "cljs.core.async.impl.channels/ManyToManyChannel";
cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async.impl.channels/ManyToManyChannel");
});
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(self__.closed)
{return null;
} else
{self__.closed = true;
while(true){
var taker_18458 = self__.takes.pop();if((taker_18458 == null))
{} else
{if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker_18458))
{var take_cb_18459 = cljs.core.async.impl.protocols.commit.call(null,taker_18458);cljs.core.async.impl.dispatch.run.call(null,((function (take_cb_18459,taker_18458,this$__$1){
return (function (){return take_cb_18459.call(null,null);
});})(take_cb_18459,taker_18458,this$__$1))
);
} else
{}
{
continue;
}
}
break;
}
return null;
}
});
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){var self__ = this;
var this$__$1 = this;if(!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler)))
{return null;
} else
{if((!((self__.buf == null))) && ((cljs.core.count.call(null,self__.buf) > 0)))
{var _ = cljs.core.async.impl.protocols.commit.call(null,handler);return cljs.core.async.impl.channels.box.call(null,cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf));
} else
{while(true){
var putter = self__.puts.pop();if(!((putter == null)))
{var put_handler = putter.handler;var val = putter.val;if(cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler))
{var put_cb = cljs.core.async.impl.protocols.commit.call(null,put_handler);var _ = cljs.core.async.impl.protocols.commit.call(null,handler);cljs.core.async.impl.dispatch.run.call(null,put_cb);
return cljs.core.async.impl.channels.box.call(null,val);
} else
{{
continue;
}
}
} else
{if(self__.closed)
{var _ = cljs.core.async.impl.protocols.commit.call(null,handler);return cljs.core.async.impl.channels.box.call(null,null);
} else
{if((self__.dirty_takes > cljs.core.async.impl.channels.MAX_DIRTY))
{self__.dirty_takes = 0;
self__.takes.cleanup(cljs.core.async.impl.protocols.active_QMARK_);
} else
{self__.dirty_takes = (self__.dirty_takes + 1);
}
if((self__.takes.length < cljs.core.async.impl.protocols.MAX_QUEUE_SIZE))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("No more than "),cljs.core.str(cljs.core.async.impl.protocols.MAX_QUEUE_SIZE),cljs.core.str(" pending takes are allowed on a single channel.")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"<","<",-1640531467,null),cljs.core.list(new cljs.core.Symbol(null,".-length",".-length",1395928862,null),new cljs.core.Symbol(null,"takes","takes",-1530407291,null)),new cljs.core.Symbol("impl","MAX-QUEUE-SIZE","impl/MAX-QUEUE-SIZE",-1989946393,null))))].join('')));
}
self__.takes.unbounded_unshift(handler);
return null;
}
}
break;
}
}
}
});
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (this$,val,handler){var self__ = this;
var this$__$1 = this;if(!((val == null)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Can't put nil in on a channel"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),new cljs.core.Symbol(null,"val","val",-1640415014,null)))))].join('')));
}
var closed__$1 = self__.closed;if((closed__$1) || (!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler))))
{return cljs.core.async.impl.channels.box.call(null,null);
} else
{while(true){
var taker = self__.takes.pop();if(!((taker == null)))
{if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker))
{var take_cb = cljs.core.async.impl.protocols.commit.call(null,taker);var _ = cljs.core.async.impl.protocols.commit.call(null,handler);cljs.core.async.impl.dispatch.run.call(null,((function (take_cb,_,taker,closed__$1,this$__$1){
return (function (){return take_cb.call(null,val);
});})(take_cb,_,taker,closed__$1,this$__$1))
);
return cljs.core.async.impl.channels.box.call(null,null);
} else
{{
continue;
}
}
} else
{if(!(((self__.buf == null)) || (cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf))))
{var _ = cljs.core.async.impl.protocols.commit.call(null,handler);cljs.core.async.impl.protocols.add_BANG_.call(null,self__.buf,val);
return cljs.core.async.impl.channels.box.call(null,null);
} else
{if((self__.dirty_puts > cljs.core.async.impl.channels.MAX_DIRTY))
{self__.dirty_puts = 0;
self__.puts.cleanup(cljs.core.async.impl.channels.put_active_QMARK_);
} else
{self__.dirty_puts = (self__.dirty_puts + 1);
}
if((self__.puts.length < cljs.core.async.impl.protocols.MAX_QUEUE_SIZE))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("No more than "),cljs.core.str(cljs.core.async.impl.protocols.MAX_QUEUE_SIZE),cljs.core.str(" pending puts are allowed on a single channel."),cljs.core.str(" Consider using a windowed buffer.")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"<","<",-1640531467,null),cljs.core.list(new cljs.core.Symbol(null,".-length",".-length",1395928862,null),new cljs.core.Symbol(null,"puts","puts",-1637078787,null)),new cljs.core.Symbol("impl","MAX-QUEUE-SIZE","impl/MAX-QUEUE-SIZE",-1989946393,null))))].join('')));
}
self__.puts.unbounded_unshift((new cljs.core.async.impl.channels.PutBox(handler,val)));
return null;
}
}
break;
}
}
});
cljs.core.async.impl.channels.__GT_ManyToManyChannel = (function __GT_ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed){return (new cljs.core.async.impl.channels.ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed));
});
cljs.core.async.impl.channels.chan = (function chan(buf){return (new cljs.core.async.impl.channels.ManyToManyChannel(cljs.core.async.impl.buffers.ring_buffer.call(null,32),0,cljs.core.async.impl.buffers.ring_buffer.call(null,32),0,buf,null));
});
}
if(!lt.util.load.provided_QMARK_('cljs.core.async.impl.timers')) {
goog.provide('cljs.core.async.impl.timers');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.timers.MAX_LEVEL = 15;
cljs.core.async.impl.timers.P = (1 / 2);
cljs.core.async.impl.timers.random_level = (function() {
var random_level = null;
var random_level__0 = (function (){return random_level.call(null,0);
});
var random_level__1 = (function (level){while(true){
if(((Math.random() < cljs.core.async.impl.timers.P)) && ((level < cljs.core.async.impl.timers.MAX_LEVEL)))
{{
var G__18505 = (level + 1);
level = G__18505;
continue;
}
} else
{return level;
}
break;
}
});
random_level = function(level){
switch(arguments.length){
case 0:
return random_level__0.call(this);
case 1:
return random_level__1.call(this,level);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
random_level.cljs$core$IFn$_invoke$arity$0 = random_level__0;
random_level.cljs$core$IFn$_invoke$arity$1 = random_level__1;
return random_level;
})()
;

/**
* @constructor
*/
cljs.core.async.impl.timers.SkipListNode = (function (key,val,forward){
this.key = key;
this.val = val;
this.forward = forward;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2155872256;
})
cljs.core.async.impl.timers.SkipListNode.cljs$lang$type = true;
cljs.core.async.impl.timers.SkipListNode.cljs$lang$ctorStr = "cljs.core.async.impl.timers/SkipListNode";
cljs.core.async.impl.timers.SkipListNode.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async.impl.timers/SkipListNode");
});
cljs.core.async.impl.timers.SkipListNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var self__ = this;
var coll__$1 = this;return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"["," ","]",opts,coll__$1);
});
cljs.core.async.impl.timers.SkipListNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,self__.val),self__.key);
});
cljs.core.async.impl.timers.__GT_SkipListNode = (function __GT_SkipListNode(key,val,forward){return (new cljs.core.async.impl.timers.SkipListNode(key,val,forward));
});
cljs.core.async.impl.timers.skip_list_node = (function() {
var skip_list_node = null;
var skip_list_node__1 = (function (level){return skip_list_node.call(null,null,null,level);
});
var skip_list_node__3 = (function (k,v,level){var arr = (new Array((level + 1)));var i_18506 = 0;while(true){
if((i_18506 < arr.length))
{(arr[i_18506] = null);
{
var G__18507 = (i_18506 + 1);
i_18506 = G__18507;
continue;
}
} else
{}
break;
}
return (new cljs.core.async.impl.timers.SkipListNode(k,v,arr));
});
skip_list_node = function(k,v,level){
switch(arguments.length){
case 1:
return skip_list_node__1.call(this,k);
case 3:
return skip_list_node__3.call(this,k,v,level);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
skip_list_node.cljs$core$IFn$_invoke$arity$1 = skip_list_node__1;
skip_list_node.cljs$core$IFn$_invoke$arity$3 = skip_list_node__3;
return skip_list_node;
})()
;
cljs.core.async.impl.timers.least_greater_node = (function() {
var least_greater_node = null;
var least_greater_node__3 = (function (x,k,level){return least_greater_node.call(null,x,k,level,null);
});
var least_greater_node__4 = (function (x,k,level,update){while(true){
if(!((level < 0)))
{var x__$1 = (function (){var x__$1 = x;while(true){
var temp__4090__auto__ = (x__$1.forward[level]);if(cljs.core.truth_(temp__4090__auto__))
{var x_SINGLEQUOTE_ = temp__4090__auto__;if((x_SINGLEQUOTE_.key < k))
{{
var G__18508 = x_SINGLEQUOTE_;
x__$1 = G__18508;
continue;
}
} else
{return x__$1;
}
} else
{return x__$1;
}
break;
}
})();if((update == null))
{} else
{(update[level] = x__$1);
}
{
var G__18509 = x__$1;
var G__18510 = k;
var G__18511 = (level - 1);
var G__18512 = update;
x = G__18509;
k = G__18510;
level = G__18511;
update = G__18512;
continue;
}
} else
{return x;
}
break;
}
});
least_greater_node = function(x,k,level,update){
switch(arguments.length){
case 3:
return least_greater_node__3.call(this,x,k,level);
case 4:
return least_greater_node__4.call(this,x,k,level,update);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
least_greater_node.cljs$core$IFn$_invoke$arity$3 = least_greater_node__3;
least_greater_node.cljs$core$IFn$_invoke$arity$4 = least_greater_node__4;
return least_greater_node;
})()
;

/**
* @constructor
*/
cljs.core.async.impl.timers.SkipList = (function (header,level){
this.header = header;
this.level = level;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2155872256;
})
cljs.core.async.impl.timers.SkipList.cljs$lang$type = true;
cljs.core.async.impl.timers.SkipList.cljs$lang$ctorStr = "cljs.core.async.impl.timers/SkipList";
cljs.core.async.impl.timers.SkipList.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async.impl.timers/SkipList");
});
cljs.core.async.impl.timers.SkipList.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var self__ = this;
var coll__$1 = this;var pr_pair = ((function (coll__$1){
return (function (keyval){return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});})(coll__$1))
;return cljs.core.pr_sequential_writer.call(null,writer,pr_pair,"{",", ","}",opts,coll__$1);
});
cljs.core.async.impl.timers.SkipList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var iter = ((function (coll__$1){
return (function iter(node){return (new cljs.core.LazySeq(null,((function (coll__$1){
return (function (){if((node == null))
{return null;
} else
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node.key,node.val], null),iter.call(null,(node.forward[0])));
}
});})(coll__$1))
,null,null));
});})(coll__$1))
;
return iter.call(null,(self__.header.forward[0]));
});
cljs.core.async.impl.timers.SkipList.prototype.put = (function (k,v){var self__ = this;
var coll = this;var update = (new Array(cljs.core.async.impl.timers.MAX_LEVEL));var x = cljs.core.async.impl.timers.least_greater_node.call(null,self__.header,k,self__.level,update);var x__$1 = (x.forward[0]);if((!((x__$1 == null))) && ((x__$1.key === k)))
{return x__$1.val = v;
} else
{var new_level = cljs.core.async.impl.timers.random_level.call(null);if((new_level > self__.level))
{var i_18513 = (self__.level + 1);while(true){
if((i_18513 <= (new_level + 1)))
{(update[i_18513] = self__.header);
{
var G__18514 = (i_18513 + 1);
i_18513 = G__18514;
continue;
}
} else
{}
break;
}
self__.level = new_level;
} else
{}
var x__$2 = cljs.core.async.impl.timers.skip_list_node.call(null,k,v,(new Array(new_level)));var i = 0;while(true){
if((i <= self__.level))
{var links = (update[i]).forward;(x__$2.forward[i] = (links[i]));
return (links[i] = x__$2);
} else
{return null;
}
break;
}
}
});
cljs.core.async.impl.timers.SkipList.prototype.remove = (function (k){var self__ = this;
var coll = this;var update = (new Array(cljs.core.async.impl.timers.MAX_LEVEL));var x = cljs.core.async.impl.timers.least_greater_node.call(null,self__.header,k,self__.level,update);var x__$1 = (x.forward[0]);if((!((x__$1 == null))) && ((x__$1.key === k)))
{var i_18515 = 0;while(true){
if((i_18515 <= self__.level))
{var links_18516 = (update[i_18515]).forward;if(((links_18516[i_18515]) === x__$1))
{(links_18516[i_18515] = (x__$1.forward[i_18515]));
{
var G__18517 = (i_18515 + 1);
i_18515 = G__18517;
continue;
}
} else
{{
var G__18518 = (i_18515 + 1);
i_18515 = G__18518;
continue;
}
}
} else
{}
break;
}
while(true){
if(((self__.level > 0)) && (((self__.header.forward[self__.level]) == null)))
{self__.level = (self__.level - 1);
{
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.async.impl.timers.SkipList.prototype.ceilingEntry = (function (k){var self__ = this;
var coll = this;var x = self__.header;var level__$1 = self__.level;while(true){
if(!((level__$1 < 0)))
{var nx = (function (){var x__$1 = x;while(true){
var x_SINGLEQUOTE_ = (x__$1.forward[level__$1]);if((x_SINGLEQUOTE_ == null))
{return null;
} else
{if((x_SINGLEQUOTE_.key >= k))
{return x_SINGLEQUOTE_;
} else
{{
var G__18519 = x_SINGLEQUOTE_;
x__$1 = G__18519;
continue;
}
}
}
break;
}
})();if(!((nx == null)))
{{
var G__18520 = nx;
var G__18521 = (level__$1 - 1);
x = G__18520;
level__$1 = G__18521;
continue;
}
} else
{{
var G__18522 = x;
var G__18523 = (level__$1 - 1);
x = G__18522;
level__$1 = G__18523;
continue;
}
}
} else
{if((x === self__.header))
{return null;
} else
{return x;
}
}
break;
}
});
cljs.core.async.impl.timers.SkipList.prototype.floorEntry = (function (k){var self__ = this;
var coll = this;var x = self__.header;var level__$1 = self__.level;while(true){
if(!((level__$1 < 0)))
{var nx = (function (){var x__$1 = x;while(true){
var x_SINGLEQUOTE_ = (x__$1.forward[level__$1]);if(!((x_SINGLEQUOTE_ == null)))
{if((x_SINGLEQUOTE_.key > k))
{return x__$1;
} else
{{
var G__18524 = x_SINGLEQUOTE_;
x__$1 = G__18524;
continue;
}
}
} else
{if((level__$1 === 0))
{return x__$1;
} else
{return null;
}
}
break;
}
})();if(cljs.core.truth_(nx))
{{
var G__18525 = nx;
var G__18526 = (level__$1 - 1);
x = G__18525;
level__$1 = G__18526;
continue;
}
} else
{{
var G__18527 = x;
var G__18528 = (level__$1 - 1);
x = G__18527;
level__$1 = G__18528;
continue;
}
}
} else
{if((x === self__.header))
{return null;
} else
{return x;
}
}
break;
}
});
cljs.core.async.impl.timers.__GT_SkipList = (function __GT_SkipList(header,level){return (new cljs.core.async.impl.timers.SkipList(header,level));
});
cljs.core.async.impl.timers.skip_list = (function skip_list(){return (new cljs.core.async.impl.timers.SkipList(cljs.core.async.impl.timers.skip_list_node.call(null,0),0));
});
cljs.core.async.impl.timers.timeouts_map = cljs.core.async.impl.timers.skip_list.call(null);
cljs.core.async.impl.timers.TIMEOUT_RESOLUTION_MS = 10;
/**
* returns a channel that will close after msecs
*/
cljs.core.async.impl.timers.timeout = (function timeout(msecs){var timeout__$1 = ((new Date()).valueOf() + msecs);var me = cljs.core.async.impl.timers.timeouts_map.ceilingEntry(timeout__$1);var or__4884__auto__ = (cljs.core.truth_((function (){var and__4872__auto__ = me;if(cljs.core.truth_(and__4872__auto__))
{return (me.key < (timeout__$1 + cljs.core.async.impl.timers.TIMEOUT_RESOLUTION_MS));
} else
{return and__4872__auto__;
}
})())?me.val:null);if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{var timeout_channel = cljs.core.async.impl.channels.chan.call(null,null);cljs.core.async.impl.timers.timeouts_map.put(timeout__$1,timeout_channel);
cljs.core.async.impl.dispatch.queue_delay.call(null,((function (timeout_channel,or__4884__auto__,timeout__$1,me){
return (function (){cljs.core.async.impl.timers.timeouts_map.remove(timeout__$1);
return cljs.core.async.impl.protocols.close_BANG_.call(null,timeout_channel);
});})(timeout_channel,or__4884__auto__,timeout__$1,me))
,msecs);
return timeout_channel;
}
});
}
if(!lt.util.load.provided_QMARK_('cljs.core.async.impl.ioc-helpers')) {
goog.provide('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.ioc_helpers.FN_IDX = 0;
cljs.core.async.impl.ioc_helpers.STATE_IDX = 1;
cljs.core.async.impl.ioc_helpers.VALUE_IDX = 2;
cljs.core.async.impl.ioc_helpers.BINDINGS_IDX = 3;
cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES = 4;
cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION = 5;
cljs.core.async.impl.ioc_helpers.USER_START_IDX = 6;
cljs.core.async.impl.ioc_helpers.aset_object = (function aset_object(arr,idx,o){return (arr[idx][o]);
});
cljs.core.async.impl.ioc_helpers.aget_object = (function aget_object(arr,idx){return (arr[idx]);
});
/**
* Returns true if the machine is in a finished state
*/
cljs.core.async.impl.ioc_helpers.finished_QMARK_ = (function finished_QMARK_(state_array){return cljs.core.keyword_identical_QMARK_.call(null,(state_array[cljs.core.async.impl.ioc_helpers.STATE_IDX]),new cljs.core.Keyword(null,"finished","finished",4635210724));
});
cljs.core.async.impl.ioc_helpers.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.impl.ioc_helpers.t18369 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t18369 = (function (f,fn_handler,meta18370){
this.f = f;
this.fn_handler = fn_handler;
this.meta18370 = meta18370;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.impl.ioc_helpers.t18369.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.t18369.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t18369";
cljs.core.async.impl.ioc_helpers.t18369.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async.impl.ioc-helpers/t18369");
});
cljs.core.async.impl.ioc_helpers.t18369.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.impl.ioc_helpers.t18369.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.impl.ioc_helpers.t18369.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.impl.ioc_helpers.t18369.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18371){var self__ = this;
var _18371__$1 = this;return self__.meta18370;
});
cljs.core.async.impl.ioc_helpers.t18369.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18371,meta18370__$1){var self__ = this;
var _18371__$1 = this;return (new cljs.core.async.impl.ioc_helpers.t18369(self__.f,self__.fn_handler,meta18370__$1));
});
cljs.core.async.impl.ioc_helpers.__GT_t18369 = (function __GT_t18369(f__$1,fn_handler__$1,meta18370){return (new cljs.core.async.impl.ioc_helpers.t18369(f__$1,fn_handler__$1,meta18370));
});
}
return (new cljs.core.async.impl.ioc_helpers.t18369(f,fn_handler,null));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function run_state_machine(state){return cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function run_state_machine_wrapped(state){try{return cljs.core.async.impl.ioc_helpers.run_state_machine.call(null,state);
}catch (e18373){if((e18373 instanceof Object))
{var ex = e18373;cljs.core.async.impl.protocols.close_BANG_.call(null,cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.USER_START_IDX));
throw ex;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18373;
} else
{return null;
}
}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function take_BANG_(state,blk,c){var temp__4090__auto__ = cljs.core.async.impl.protocols.take_BANG_.call(null,c,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (x){var statearr_18376_18419 = state;(statearr_18376_18419[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);
(statearr_18376_18419[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
})));if(cljs.core.truth_(temp__4090__auto__))
{var cb = temp__4090__auto__;var statearr_18377_18420 = state;(statearr_18377_18420[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
(statearr_18377_18420[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function put_BANG_(state,blk,c,val){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,c,val,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (){var statearr_18380_18421 = state;(statearr_18380_18421[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = null);
(statearr_18380_18421[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
})));if(cljs.core.truth_(temp__4090__auto__))
{var cb = temp__4090__auto__;var statearr_18381_18422 = state;(statearr_18381_18422[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
(statearr_18381_18422[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__18382){var map__18387 = p__18382;var map__18387__$1 = ((cljs.core.seq_QMARK_.call(null,map__18387))?cljs.core.apply.call(null,cljs.core.hash_map,map__18387):map__18387);var opts = map__18387__$1;var statearr_18388_18423 = state;(statearr_18388_18423[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4092__auto__ = cljs.core.async.do_alts.call(null,((function (map__18387,map__18387__$1,opts){
return (function (val){var statearr_18389_18424 = state;(statearr_18389_18424[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__18387,map__18387__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4092__auto__))
{var cb = temp__4092__auto__;var statearr_18390_18425 = state;(statearr_18390_18425[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__18382 = null;if (arguments.length > 3) {
  p__18382 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__18382);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__18426){
var state = cljs.core.first(arglist__18426);
arglist__18426 = cljs.core.next(arglist__18426);
var cont_block = cljs.core.first(arglist__18426);
arglist__18426 = cljs.core.next(arglist__18426);
var ports = cljs.core.first(arglist__18426);
var p__18382 = cljs.core.rest(arglist__18426);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__18382);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
cljs.core.async.impl.ioc_helpers.return_chan = (function return_chan(state,value){var c = (state[cljs.core.async.impl.ioc_helpers.USER_START_IDX]);if((value == null))
{} else
{cljs.core.async.impl.protocols.put_BANG_.call(null,c,value,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,((function (c){
return (function (){return null;
});})(c))
));
}
cljs.core.async.impl.protocols.close_BANG_.call(null,c);
return c;
});

/**
* @constructor
* @param {*} catch_block
* @param {*} catch_exception
* @param {*} finally_block
* @param {*} continue_block
* @param {*} prev
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
cljs.core.async.impl.ioc_helpers.ExceptionFrame = (function (catch_block,catch_exception,finally_block,continue_block,prev,__meta,__extmap){
this.catch_block = catch_block;
this.catch_exception = catch_exception;
this.finally_block = finally_block;
this.continue_block = continue_block;
this.prev = prev;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>5){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){var self__ = this;
var this__5465__auto____$1 = this;var h__5295__auto__ = self__.__hash;if(!((h__5295__auto__ == null)))
{return h__5295__auto__;
} else
{var h__5295__auto____$1 = cljs.core.hash_imap.call(null,this__5465__auto____$1);self__.__hash = h__5295__auto____$1;
return h__5295__auto____$1;
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5470__auto__,k__5471__auto__){var self__ = this;
var this__5470__auto____$1 = this;return cljs.core._lookup.call(null,this__5470__auto____$1,k__5471__auto__,null);
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5472__auto__,k18392,else__5473__auto__){var self__ = this;
var this__5472__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k18392,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893)))
{return self__.catch_block;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k18392,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687)))
{return self__.catch_exception;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k18392,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429)))
{return self__.finally_block;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k18392,new cljs.core.Keyword(null,"continue-block","continue-block",1486987097)))
{return self__.continue_block;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k18392,new cljs.core.Keyword(null,"prev","prev",1017353637)))
{return self__.prev;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k18392,else__5473__auto__);
} else
{return null;
}
}
}
}
}
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__18391){var self__ = this;
var this__5477__auto____$1 = this;var pred__18394 = cljs.core.keyword_identical_QMARK_;var expr__18395 = k__5478__auto__;if(cljs.core.truth_(pred__18394.call(null,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),expr__18395)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__18391,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__18394.call(null,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),expr__18395)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__18391,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__18394.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),expr__18395)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__18391,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__18394.call(null,new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),expr__18395)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__18391,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__18394.call(null,new cljs.core.Keyword(null,"prev","prev",1017353637),expr__18395)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__18391,self__.__meta,self__.__extmap,null));
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5478__auto__,G__18391),null));
}
}
}
}
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){var self__ = this;
var this__5484__auto____$1 = this;var pr_pair__5487__auto__ = ((function (this__5484__auto____$1){
return (function (keyval__5488__auto__){return cljs.core.pr_sequential_writer.call(null,writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});})(this__5484__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__5485__auto__,pr_pair__5487__auto__,"#cljs.core.async.impl.ioc-helpers.ExceptionFrame{",", ","}",opts__5486__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prev","prev",1017353637),self__.prev],null))], null),self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5475__auto__,entry__5476__auto__){var self__ = this;
var this__5475__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__5476__auto__))
{return cljs.core._assoc.call(null,this__5475__auto____$1,cljs.core._nth.call(null,entry__5476__auto__,0),cljs.core._nth.call(null,entry__5476__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__5475__auto____$1,entry__5476__auto__);
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){var self__ = this;
var this__5482__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prev","prev",1017353637),self__.prev],null))], null),self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5474__auto__){var self__ = this;
var this__5474__auto____$1 = this;return (5 + cljs.core.count.call(null,self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5466__auto__,other__5467__auto__){var self__ = this;
var this__5466__auto____$1 = this;if(cljs.core.truth_((function (){var and__4872__auto__ = other__5467__auto__;if(cljs.core.truth_(and__4872__auto__))
{return ((this__5466__auto____$1.constructor === other__5467__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__5466__auto____$1,other__5467__auto__));
} else
{return and__4872__auto__;
}
})()))
{return true;
} else
{return false;
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5469__auto__,G__18391){var self__ = this;
var this__5469__auto____$1 = this;return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__18391,self__.__extmap,self__.__hash));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){var self__ = this;
var this__5464__auto____$1 = this;return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,self__.__hash));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5468__auto__){var self__ = this;
var this__5468__auto____$1 = this;return self__.__meta;
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){var self__ = this;
var this__5479__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),null,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),null,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),null,new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),null,new cljs.core.Keyword(null,"prev","prev",1017353637),null], null), null),k__5480__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5480__auto__)),null));
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrSeq = (function (this__5504__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrWriter = (function (this__5504__auto__,writer__5505__auto__){return cljs.core._write.call(null,writer__5505__auto__,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});
cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame = (function __GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev));
});
cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function map__GT_ExceptionFrame(G__18393){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(new cljs.core.Keyword(null,"catch-block","catch-block",2343862893).cljs$core$IFn$_invoke$arity$1(G__18393),new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687).cljs$core$IFn$_invoke$arity$1(G__18393),new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(G__18393),new cljs.core.Keyword(null,"continue-block","continue-block",1486987097).cljs$core$IFn$_invoke$arity$1(G__18393),new cljs.core.Keyword(null,"prev","prev",1017353637).cljs$core$IFn$_invoke$arity$1(G__18393),null,cljs.core.dissoc.call(null,G__18393,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),new cljs.core.Keyword(null,"prev","prev",1017353637))));
});
cljs.core.async.impl.ioc_helpers.add_exception_frame = (function add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){var statearr_18398 = state;(statearr_18398[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame.call(null,catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES)));
return statearr_18398;
});
cljs.core.async.impl.ioc_helpers.process_exception = (function process_exception(state){while(true){
var exception_frame = cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES);var catch_block = new cljs.core.Keyword(null,"catch-block","catch-block",2343862893).cljs$core$IFn$_invoke$arity$1(exception_frame);var catch_exception = new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687).cljs$core$IFn$_invoke$arity$1(exception_frame);var exception = cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION);if(cljs.core.truth_((function (){var and__4872__auto__ = exception;if(cljs.core.truth_(and__4872__auto__))
{return cljs.core.not.call(null,exception_frame);
} else
{return and__4872__auto__;
}
})()))
{throw exception;
} else
{if(cljs.core.truth_((function (){var and__4872__auto__ = exception;if(cljs.core.truth_(and__4872__auto__))
{var and__4872__auto____$1 = catch_block;if(cljs.core.truth_(and__4872__auto____$1))
{return (exception instanceof catch_exception);
} else
{return and__4872__auto____$1;
}
} else
{return and__4872__auto__;
}
})()))
{var statearr_18404 = state;(statearr_18404[cljs.core.async.impl.ioc_helpers.STATE_IDX] = catch_block);
(statearr_18404[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = exception);
(statearr_18404[cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION] = null);
(statearr_18404[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),null,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),null));
return statearr_18404;
} else
{if(cljs.core.truth_((function (){var and__4872__auto__ = exception;if(cljs.core.truth_(and__4872__auto__))
{return (cljs.core.not.call(null,catch_block)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else
{return and__4872__auto__;
}
})()))
{var statearr_18405_18427 = state;(statearr_18405_18427[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = new cljs.core.Keyword(null,"prev","prev",1017353637).cljs$core$IFn$_invoke$arity$1(exception_frame));
{
var G__18428 = state;
state = G__18428;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__4872__auto__ = exception;if(cljs.core.truth_(and__4872__auto__))
{var and__4872__auto____$1 = cljs.core.not.call(null,catch_block);if(and__4872__auto____$1)
{return new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__4872__auto____$1;
}
} else
{return and__4872__auto__;
}
})()))
{var statearr_18406 = state;(statearr_18406[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_18406[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),null));
return statearr_18406;
} else
{if(cljs.core.truth_((function (){var and__4872__auto__ = cljs.core.not.call(null,exception);if(and__4872__auto__)
{return new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__4872__auto__;
}
})()))
{var statearr_18407 = state;(statearr_18407[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_18407[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),null));
return statearr_18407;
} else
{if((cljs.core.not.call(null,exception)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame))))
{var statearr_18408 = state;(statearr_18408[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"continue-block","continue-block",1486987097).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_18408[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = new cljs.core.Keyword(null,"prev","prev",1017353637).cljs$core$IFn$_invoke$arity$1(exception_frame));
return statearr_18408;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(false)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("No matching clause"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,false))].join('')));
}
} else
{return null;
}
}
}
}
}
}
}
break;
}
});
}
if(!lt.util.load.provided_QMARK_('cljs.core.async')) {
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t15805 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15805 = (function (f,fn_handler,meta15806){
this.f = f;
this.fn_handler = fn_handler;
this.meta15806 = meta15806;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15805.cljs$lang$type = true;
cljs.core.async.t15805.cljs$lang$ctorStr = "cljs.core.async/t15805";
cljs.core.async.t15805.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async/t15805");
});
cljs.core.async.t15805.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15805.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t15805.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t15805.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15807){var self__ = this;
var _15807__$1 = this;return self__.meta15806;
});
cljs.core.async.t15805.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15807,meta15806__$1){var self__ = this;
var _15807__$1 = this;return (new cljs.core.async.t15805(self__.f,self__.fn_handler,meta15806__$1));
});
cljs.core.async.__GT_t15805 = (function __GT_t15805(f__$1,fn_handler__$1,meta15806){return (new cljs.core.async.t15805(f__$1,fn_handler__$1,meta15806));
});
}
return (new cljs.core.async.t15805(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__15809 = buff;if(G__15809)
{var bit__5534__auto__ = null;if(cljs.core.truth_((function (){var or__4884__auto__ = bit__5534__auto__;if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return G__15809.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__15809.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15809);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15809);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_18073 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_18073);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_18073,ret){
return (function (){return fn1.call(null,val_18073);
});})(val_18073,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__4872__auto__ = ret;if(cljs.core.truth_(and__4872__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__4872__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__5732__auto___18074 = n;var x_18075 = 0;while(true){
if((x_18075 < n__5732__auto___18074))
{(a[x_18075] = 0);
{
var G__18076 = (x_18075 + 1);
x_18075 = G__18076;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__18077 = (i + 1);
i = G__18077;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t15813 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15813 = (function (flag,alt_flag,meta15814){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta15814 = meta15814;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15813.cljs$lang$type = true;
cljs.core.async.t15813.cljs$lang$ctorStr = "cljs.core.async/t15813";
cljs.core.async.t15813.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async/t15813");
});})(flag))
;
cljs.core.async.t15813.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15813.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t15813.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t15813.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_15815){var self__ = this;
var _15815__$1 = this;return self__.meta15814;
});})(flag))
;
cljs.core.async.t15813.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_15815,meta15814__$1){var self__ = this;
var _15815__$1 = this;return (new cljs.core.async.t15813(self__.flag,self__.alt_flag,meta15814__$1));
});})(flag))
;
cljs.core.async.__GT_t15813 = ((function (flag){
return (function __GT_t15813(flag__$1,alt_flag__$1,meta15814){return (new cljs.core.async.t15813(flag__$1,alt_flag__$1,meta15814));
});})(flag))
;
}
return (new cljs.core.async.t15813(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t15819 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15819 = (function (cb,flag,alt_handler,meta15820){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta15820 = meta15820;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15819.cljs$lang$type = true;
cljs.core.async.t15819.cljs$lang$ctorStr = "cljs.core.async/t15819";
cljs.core.async.t15819.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async/t15819");
});
cljs.core.async.t15819.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15819.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t15819.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t15819.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15821){var self__ = this;
var _15821__$1 = this;return self__.meta15820;
});
cljs.core.async.t15819.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15821,meta15820__$1){var self__ = this;
var _15821__$1 = this;return (new cljs.core.async.t15819(self__.cb,self__.flag,self__.alt_handler,meta15820__$1));
});
cljs.core.async.__GT_t15819 = (function __GT_t15819(cb__$1,flag__$1,alt_handler__$1,meta15820){return (new cljs.core.async.t15819(cb__$1,flag__$1,alt_handler__$1,meta15820));
});
}
return (new cljs.core.async.t15819(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15822_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15822_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4884__auto__ = wport;if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__18078 = (i + 1);
i = G__18078;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__4884__auto__ = ret;if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__4872__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__4872__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__4872__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__15823){var map__15825 = p__15823;var map__15825__$1 = ((cljs.core.seq_QMARK_.call(null,map__15825))?cljs.core.apply.call(null,cljs.core.hash_map,map__15825):map__15825);var opts = map__15825__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__15823 = null;if (arguments.length > 1) {
  p__15823 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__15823);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__18079){
var ports = cljs.core.first(arglist__18079);
var p__15823 = cljs.core.rest(arglist__18079);
return alts_BANG___delegate(ports,p__15823);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t15833 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15833 = (function (ch,f,map_LT_,meta15834){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta15834 = meta15834;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15833.cljs$lang$type = true;
cljs.core.async.t15833.cljs$lang$ctorStr = "cljs.core.async/t15833";
cljs.core.async.t15833.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async/t15833");
});
cljs.core.async.t15833.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15833.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t15833.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15833.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t15836 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15836 = (function (fn1,_,meta15834,ch,f,map_LT_,meta15837){
this.fn1 = fn1;
this._ = _;
this.meta15834 = meta15834;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta15837 = meta15837;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15836.cljs$lang$type = true;
cljs.core.async.t15836.cljs$lang$ctorStr = "cljs.core.async/t15836";
cljs.core.async.t15836.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async/t15836");
});})(___$1))
;
cljs.core.async.t15836.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15836.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t15836.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t15836.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__15826_SHARP_){return f1.call(null,(((p1__15826_SHARP_ == null))?null:self__.f.call(null,p1__15826_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t15836.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_15838){var self__ = this;
var _15838__$1 = this;return self__.meta15837;
});})(___$1))
;
cljs.core.async.t15836.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_15838,meta15837__$1){var self__ = this;
var _15838__$1 = this;return (new cljs.core.async.t15836(self__.fn1,self__._,self__.meta15834,self__.ch,self__.f,self__.map_LT_,meta15837__$1));
});})(___$1))
;
cljs.core.async.__GT_t15836 = ((function (___$1){
return (function __GT_t15836(fn1__$1,___$2,meta15834__$1,ch__$2,f__$2,map_LT___$2,meta15837){return (new cljs.core.async.t15836(fn1__$1,___$2,meta15834__$1,ch__$2,f__$2,map_LT___$2,meta15837));
});})(___$1))
;
}
return (new cljs.core.async.t15836(fn1,___$1,self__.meta15834,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__4872__auto__ = ret;if(cljs.core.truth_(and__4872__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__4872__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t15833.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15833.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15833.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15835){var self__ = this;
var _15835__$1 = this;return self__.meta15834;
});
cljs.core.async.t15833.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15835,meta15834__$1){var self__ = this;
var _15835__$1 = this;return (new cljs.core.async.t15833(self__.ch,self__.f,self__.map_LT_,meta15834__$1));
});
cljs.core.async.__GT_t15833 = (function __GT_t15833(ch__$1,f__$1,map_LT___$1,meta15834){return (new cljs.core.async.t15833(ch__$1,f__$1,map_LT___$1,meta15834));
});
}
return (new cljs.core.async.t15833(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t15842 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15842 = (function (ch,f,map_GT_,meta15843){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta15843 = meta15843;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15842.cljs$lang$type = true;
cljs.core.async.t15842.cljs$lang$ctorStr = "cljs.core.async/t15842";
cljs.core.async.t15842.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async/t15842");
});
cljs.core.async.t15842.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15842.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t15842.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15842.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t15842.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15842.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15842.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15844){var self__ = this;
var _15844__$1 = this;return self__.meta15843;
});
cljs.core.async.t15842.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15844,meta15843__$1){var self__ = this;
var _15844__$1 = this;return (new cljs.core.async.t15842(self__.ch,self__.f,self__.map_GT_,meta15843__$1));
});
cljs.core.async.__GT_t15842 = (function __GT_t15842(ch__$1,f__$1,map_GT___$1,meta15843){return (new cljs.core.async.t15842(ch__$1,f__$1,map_GT___$1,meta15843));
});
}
return (new cljs.core.async.t15842(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t15848 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15848 = (function (ch,p,filter_GT_,meta15849){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta15849 = meta15849;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15848.cljs$lang$type = true;
cljs.core.async.t15848.cljs$lang$ctorStr = "cljs.core.async/t15848";
cljs.core.async.t15848.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async/t15848");
});
cljs.core.async.t15848.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15848.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t15848.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15848.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t15848.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15848.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15848.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15850){var self__ = this;
var _15850__$1 = this;return self__.meta15849;
});
cljs.core.async.t15848.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15850,meta15849__$1){var self__ = this;
var _15850__$1 = this;return (new cljs.core.async.t15848(self__.ch,self__.p,self__.filter_GT_,meta15849__$1));
});
cljs.core.async.__GT_t15848 = (function __GT_t15848(ch__$1,p__$1,filter_GT___$1,meta15849){return (new cljs.core.async.t15848(ch__$1,p__$1,filter_GT___$1,meta15849));
});
}
return (new cljs.core.async.t15848(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13487__auto___18080 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13487__auto___18080,out){
return (function (){var f__13488__auto__ = (function (){var switch__13417__auto__ = ((function (c__13487__auto___18080,out){
return (function (state_15912){var state_val_15913 = (state_15912[1]);if((state_val_15913 === 1))
{var state_15912__$1 = state_15912;var statearr_15914_18081 = state_15912__$1;(statearr_15914_18081[2] = null);
(statearr_15914_18081[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15913 === 2))
{var state_15912__$1 = state_15912;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15912__$1,4,ch);
} else
{if((state_val_15913 === 3))
{var inst_15910 = (state_15912[2]);var state_15912__$1 = state_15912;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15912__$1,inst_15910);
} else
{if((state_val_15913 === 4))
{var inst_15894 = (state_15912[7]);var inst_15894__$1 = (state_15912[2]);var inst_15895 = (inst_15894__$1 == null);var state_15912__$1 = (function (){var statearr_15915 = state_15912;(statearr_15915[7] = inst_15894__$1);
return statearr_15915;
})();if(cljs.core.truth_(inst_15895))
{var statearr_15916_18082 = state_15912__$1;(statearr_15916_18082[1] = 5);
} else
{var statearr_15917_18083 = state_15912__$1;(statearr_15917_18083[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15913 === 5))
{var inst_15897 = cljs.core.async.close_BANG_.call(null,out);var state_15912__$1 = state_15912;var statearr_15918_18084 = state_15912__$1;(statearr_15918_18084[2] = inst_15897);
(statearr_15918_18084[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15913 === 6))
{var inst_15894 = (state_15912[7]);var inst_15899 = p.call(null,inst_15894);var state_15912__$1 = state_15912;if(cljs.core.truth_(inst_15899))
{var statearr_15919_18085 = state_15912__$1;(statearr_15919_18085[1] = 8);
} else
{var statearr_15920_18086 = state_15912__$1;(statearr_15920_18086[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15913 === 7))
{var inst_15908 = (state_15912[2]);var state_15912__$1 = state_15912;var statearr_15921_18087 = state_15912__$1;(statearr_15921_18087[2] = inst_15908);
(statearr_15921_18087[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15913 === 8))
{var inst_15894 = (state_15912[7]);var state_15912__$1 = state_15912;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15912__$1,11,out,inst_15894);
} else
{if((state_val_15913 === 9))
{var state_15912__$1 = state_15912;var statearr_15922_18088 = state_15912__$1;(statearr_15922_18088[2] = null);
(statearr_15922_18088[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15913 === 10))
{var inst_15905 = (state_15912[2]);var state_15912__$1 = (function (){var statearr_15923 = state_15912;(statearr_15923[8] = inst_15905);
return statearr_15923;
})();var statearr_15924_18089 = state_15912__$1;(statearr_15924_18089[2] = null);
(statearr_15924_18089[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15913 === 11))
{var inst_15902 = (state_15912[2]);var state_15912__$1 = state_15912;var statearr_15925_18090 = state_15912__$1;(statearr_15925_18090[2] = inst_15902);
(statearr_15925_18090[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__13487__auto___18080,out))
;return ((function (switch__13417__auto__,c__13487__auto___18080,out){
return (function() {
var state_machine__13418__auto__ = null;
var state_machine__13418__auto____0 = (function (){var statearr_15929 = [null,null,null,null,null,null,null,null,null];(statearr_15929[0] = state_machine__13418__auto__);
(statearr_15929[1] = 1);
return statearr_15929;
});
var state_machine__13418__auto____1 = (function (state_15912){while(true){
var ret_value__13419__auto__ = (function (){try{while(true){
var result__13420__auto__ = switch__13417__auto__.call(null,state_15912);if(cljs.core.keyword_identical_QMARK_.call(null,result__13420__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13420__auto__;
}
break;
}
}catch (e15930){if((e15930 instanceof Object))
{var ex__13421__auto__ = e15930;var statearr_15931_18091 = state_15912;(statearr_15931_18091[5] = ex__13421__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15912);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15930;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13419__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18092 = state_15912;
state_15912 = G__18092;
continue;
}
} else
{return ret_value__13419__auto__;
}
break;
}
});
state_machine__13418__auto__ = function(state_15912){
switch(arguments.length){
case 0:
return state_machine__13418__auto____0.call(this);
case 1:
return state_machine__13418__auto____1.call(this,state_15912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13418__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13418__auto____0;
state_machine__13418__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13418__auto____1;
return state_machine__13418__auto__;
})()
;})(switch__13417__auto__,c__13487__auto___18080,out))
})();var state__13489__auto__ = (function (){var statearr_15932 = f__13488__auto__.call(null);(statearr_15932[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13487__auto___18080);
return statearr_15932;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13489__auto__);
});})(c__13487__auto___18080,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__13487__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13487__auto__){
return (function (){var f__13488__auto__ = (function (){var switch__13417__auto__ = ((function (c__13487__auto__){
return (function (state_16084){var state_val_16085 = (state_16084[1]);if((state_val_16085 === 1))
{var state_16084__$1 = state_16084;var statearr_16086_18093 = state_16084__$1;(statearr_16086_18093[2] = null);
(statearr_16086_18093[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16085 === 2))
{var state_16084__$1 = state_16084;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16084__$1,4,in$);
} else
{if((state_val_16085 === 3))
{var inst_16082 = (state_16084[2]);var state_16084__$1 = state_16084;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16084__$1,inst_16082);
} else
{if((state_val_16085 === 4))
{var inst_16030 = (state_16084[7]);var inst_16030__$1 = (state_16084[2]);var inst_16031 = (inst_16030__$1 == null);var state_16084__$1 = (function (){var statearr_16087 = state_16084;(statearr_16087[7] = inst_16030__$1);
return statearr_16087;
})();if(cljs.core.truth_(inst_16031))
{var statearr_16088_18094 = state_16084__$1;(statearr_16088_18094[1] = 5);
} else
{var statearr_16089_18095 = state_16084__$1;(statearr_16089_18095[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16085 === 5))
{var inst_16033 = cljs.core.async.close_BANG_.call(null,out);var state_16084__$1 = state_16084;var statearr_16090_18096 = state_16084__$1;(statearr_16090_18096[2] = inst_16033);
(statearr_16090_18096[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16085 === 6))
{var inst_16030 = (state_16084[7]);var inst_16035 = f.call(null,inst_16030);var inst_16040 = cljs.core.seq.call(null,inst_16035);var inst_16041 = inst_16040;var inst_16042 = null;var inst_16043 = 0;var inst_16044 = 0;var state_16084__$1 = (function (){var statearr_16091 = state_16084;(statearr_16091[8] = inst_16041);
(statearr_16091[9] = inst_16043);
(statearr_16091[10] = inst_16042);
(statearr_16091[11] = inst_16044);
return statearr_16091;
})();var statearr_16092_18097 = state_16084__$1;(statearr_16092_18097[2] = null);
(statearr_16092_18097[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16085 === 7))
{var inst_16080 = (state_16084[2]);var state_16084__$1 = state_16084;var statearr_16093_18098 = state_16084__$1;(statearr_16093_18098[2] = inst_16080);
(statearr_16093_18098[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16085 === 8))
{var inst_16043 = (state_16084[9]);var inst_16044 = (state_16084[11]);var inst_16046 = (inst_16044 < inst_16043);var inst_16047 = inst_16046;var state_16084__$1 = state_16084;if(cljs.core.truth_(inst_16047))
{var statearr_16094_18099 = state_16084__$1;(statearr_16094_18099[1] = 10);
} else
{var statearr_16095_18100 = state_16084__$1;(statearr_16095_18100[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16085 === 9))
{var inst_16077 = (state_16084[2]);var state_16084__$1 = (function (){var statearr_16096 = state_16084;(statearr_16096[12] = inst_16077);
return statearr_16096;
})();var statearr_16097_18101 = state_16084__$1;(statearr_16097_18101[2] = null);
(statearr_16097_18101[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16085 === 10))
{var inst_16042 = (state_16084[10]);var inst_16044 = (state_16084[11]);var inst_16049 = cljs.core._nth.call(null,inst_16042,inst_16044);var state_16084__$1 = state_16084;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16084__$1,13,out,inst_16049);
} else
{if((state_val_16085 === 11))
{var inst_16041 = (state_16084[8]);var inst_16055 = (state_16084[13]);var inst_16055__$1 = cljs.core.seq.call(null,inst_16041);var state_16084__$1 = (function (){var statearr_16101 = state_16084;(statearr_16101[13] = inst_16055__$1);
return statearr_16101;
})();if(inst_16055__$1)
{var statearr_16102_18102 = state_16084__$1;(statearr_16102_18102[1] = 14);
} else
{var statearr_16103_18103 = state_16084__$1;(statearr_16103_18103[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16085 === 12))
{var inst_16075 = (state_16084[2]);var state_16084__$1 = state_16084;var statearr_16104_18104 = state_16084__$1;(statearr_16104_18104[2] = inst_16075);
(statearr_16104_18104[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16085 === 13))
{var inst_16041 = (state_16084[8]);var inst_16043 = (state_16084[9]);var inst_16042 = (state_16084[10]);var inst_16044 = (state_16084[11]);var inst_16051 = (state_16084[2]);var inst_16052 = (inst_16044 + 1);var tmp16098 = inst_16041;var tmp16099 = inst_16043;var tmp16100 = inst_16042;var inst_16041__$1 = tmp16098;var inst_16042__$1 = tmp16100;var inst_16043__$1 = tmp16099;var inst_16044__$1 = inst_16052;var state_16084__$1 = (function (){var statearr_16105 = state_16084;(statearr_16105[14] = inst_16051);
(statearr_16105[8] = inst_16041__$1);
(statearr_16105[9] = inst_16043__$1);
(statearr_16105[10] = inst_16042__$1);
(statearr_16105[11] = inst_16044__$1);
return statearr_16105;
})();var statearr_16106_18105 = state_16084__$1;(statearr_16106_18105[2] = null);
(statearr_16106_18105[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16085 === 14))
{var inst_16055 = (state_16084[13]);var inst_16057 = cljs.core.chunked_seq_QMARK_.call(null,inst_16055);var state_16084__$1 = state_16084;if(inst_16057)
{var statearr_16107_18106 = state_16084__$1;(statearr_16107_18106[1] = 17);
} else
{var statearr_16108_18107 = state_16084__$1;(statearr_16108_18107[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16085 === 15))
{var state_16084__$1 = state_16084;var statearr_16109_18108 = state_16084__$1;(statearr_16109_18108[2] = null);
(statearr_16109_18108[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16085 === 16))
{var inst_16073 = (state_16084[2]);var state_16084__$1 = state_16084;var statearr_16110_18109 = state_16084__$1;(statearr_16110_18109[2] = inst_16073);
(statearr_16110_18109[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16085 === 17))
{var inst_16055 = (state_16084[13]);var inst_16059 = cljs.core.chunk_first.call(null,inst_16055);var inst_16060 = cljs.core.chunk_rest.call(null,inst_16055);var inst_16061 = cljs.core.count.call(null,inst_16059);var inst_16041 = inst_16060;var inst_16042 = inst_16059;var inst_16043 = inst_16061;var inst_16044 = 0;var state_16084__$1 = (function (){var statearr_16111 = state_16084;(statearr_16111[8] = inst_16041);
(statearr_16111[9] = inst_16043);
(statearr_16111[10] = inst_16042);
(statearr_16111[11] = inst_16044);
return statearr_16111;
})();var statearr_16112_18110 = state_16084__$1;(statearr_16112_18110[2] = null);
(statearr_16112_18110[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16085 === 18))
{var inst_16055 = (state_16084[13]);var inst_16064 = cljs.core.first.call(null,inst_16055);var state_16084__$1 = state_16084;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16084__$1,20,out,inst_16064);
} else
{if((state_val_16085 === 19))
{var inst_16070 = (state_16084[2]);var state_16084__$1 = state_16084;var statearr_16113_18111 = state_16084__$1;(statearr_16113_18111[2] = inst_16070);
(statearr_16113_18111[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16085 === 20))
{var inst_16055 = (state_16084[13]);var inst_16066 = (state_16084[2]);var inst_16067 = cljs.core.next.call(null,inst_16055);var inst_16041 = inst_16067;var inst_16042 = null;var inst_16043 = 0;var inst_16044 = 0;var state_16084__$1 = (function (){var statearr_16114 = state_16084;(statearr_16114[15] = inst_16066);
(statearr_16114[8] = inst_16041);
(statearr_16114[9] = inst_16043);
(statearr_16114[10] = inst_16042);
(statearr_16114[11] = inst_16044);
return statearr_16114;
})();var statearr_16115_18112 = state_16084__$1;(statearr_16115_18112[2] = null);
(statearr_16115_18112[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13487__auto__))
;return ((function (switch__13417__auto__,c__13487__auto__){
return (function() {
var state_machine__13418__auto__ = null;
var state_machine__13418__auto____0 = (function (){var statearr_16119 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16119[0] = state_machine__13418__auto__);
(statearr_16119[1] = 1);
return statearr_16119;
});
var state_machine__13418__auto____1 = (function (state_16084){while(true){
var ret_value__13419__auto__ = (function (){try{while(true){
var result__13420__auto__ = switch__13417__auto__.call(null,state_16084);if(cljs.core.keyword_identical_QMARK_.call(null,result__13420__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13420__auto__;
}
break;
}
}catch (e16120){if((e16120 instanceof Object))
{var ex__13421__auto__ = e16120;var statearr_16121_18113 = state_16084;(statearr_16121_18113[5] = ex__13421__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16084);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16120;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13419__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18114 = state_16084;
state_16084 = G__18114;
continue;
}
} else
{return ret_value__13419__auto__;
}
break;
}
});
state_machine__13418__auto__ = function(state_16084){
switch(arguments.length){
case 0:
return state_machine__13418__auto____0.call(this);
case 1:
return state_machine__13418__auto____1.call(this,state_16084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13418__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13418__auto____0;
state_machine__13418__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13418__auto____1;
return state_machine__13418__auto__;
})()
;})(switch__13417__auto__,c__13487__auto__))
})();var state__13489__auto__ = (function (){var statearr_16122 = f__13488__auto__.call(null);(statearr_16122[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13487__auto__);
return statearr_16122;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13489__auto__);
});})(c__13487__auto__))
);
return c__13487__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__13487__auto___18115 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13487__auto___18115){
return (function (){var f__13488__auto__ = (function (){var switch__13417__auto__ = ((function (c__13487__auto___18115){
return (function (state_16182){var state_val_16183 = (state_16182[1]);if((state_val_16183 === 1))
{var state_16182__$1 = state_16182;var statearr_16184_18116 = state_16182__$1;(statearr_16184_18116[2] = null);
(statearr_16184_18116[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16183 === 2))
{var state_16182__$1 = state_16182;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16182__$1,4,from);
} else
{if((state_val_16183 === 3))
{var inst_16180 = (state_16182[2]);var state_16182__$1 = state_16182;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16182__$1,inst_16180);
} else
{if((state_val_16183 === 4))
{var inst_16165 = (state_16182[7]);var inst_16165__$1 = (state_16182[2]);var inst_16166 = (inst_16165__$1 == null);var state_16182__$1 = (function (){var statearr_16185 = state_16182;(statearr_16185[7] = inst_16165__$1);
return statearr_16185;
})();if(cljs.core.truth_(inst_16166))
{var statearr_16186_18117 = state_16182__$1;(statearr_16186_18117[1] = 5);
} else
{var statearr_16187_18118 = state_16182__$1;(statearr_16187_18118[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16183 === 5))
{var state_16182__$1 = state_16182;if(cljs.core.truth_(close_QMARK_))
{var statearr_16188_18119 = state_16182__$1;(statearr_16188_18119[1] = 8);
} else
{var statearr_16189_18120 = state_16182__$1;(statearr_16189_18120[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16183 === 6))
{var inst_16165 = (state_16182[7]);var state_16182__$1 = state_16182;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16182__$1,11,to,inst_16165);
} else
{if((state_val_16183 === 7))
{var inst_16178 = (state_16182[2]);var state_16182__$1 = state_16182;var statearr_16190_18121 = state_16182__$1;(statearr_16190_18121[2] = inst_16178);
(statearr_16190_18121[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16183 === 8))
{var inst_16169 = cljs.core.async.close_BANG_.call(null,to);var state_16182__$1 = state_16182;var statearr_16191_18122 = state_16182__$1;(statearr_16191_18122[2] = inst_16169);
(statearr_16191_18122[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16183 === 9))
{var state_16182__$1 = state_16182;var statearr_16192_18123 = state_16182__$1;(statearr_16192_18123[2] = null);
(statearr_16192_18123[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16183 === 10))
{var inst_16172 = (state_16182[2]);var state_16182__$1 = state_16182;var statearr_16193_18124 = state_16182__$1;(statearr_16193_18124[2] = inst_16172);
(statearr_16193_18124[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16183 === 11))
{var inst_16175 = (state_16182[2]);var state_16182__$1 = (function (){var statearr_16194 = state_16182;(statearr_16194[8] = inst_16175);
return statearr_16194;
})();var statearr_16195_18125 = state_16182__$1;(statearr_16195_18125[2] = null);
(statearr_16195_18125[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__13487__auto___18115))
;return ((function (switch__13417__auto__,c__13487__auto___18115){
return (function() {
var state_machine__13418__auto__ = null;
var state_machine__13418__auto____0 = (function (){var statearr_16199 = [null,null,null,null,null,null,null,null,null];(statearr_16199[0] = state_machine__13418__auto__);
(statearr_16199[1] = 1);
return statearr_16199;
});
var state_machine__13418__auto____1 = (function (state_16182){while(true){
var ret_value__13419__auto__ = (function (){try{while(true){
var result__13420__auto__ = switch__13417__auto__.call(null,state_16182);if(cljs.core.keyword_identical_QMARK_.call(null,result__13420__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13420__auto__;
}
break;
}
}catch (e16200){if((e16200 instanceof Object))
{var ex__13421__auto__ = e16200;var statearr_16201_18126 = state_16182;(statearr_16201_18126[5] = ex__13421__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16182);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16200;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13419__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18127 = state_16182;
state_16182 = G__18127;
continue;
}
} else
{return ret_value__13419__auto__;
}
break;
}
});
state_machine__13418__auto__ = function(state_16182){
switch(arguments.length){
case 0:
return state_machine__13418__auto____0.call(this);
case 1:
return state_machine__13418__auto____1.call(this,state_16182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13418__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13418__auto____0;
state_machine__13418__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13418__auto____1;
return state_machine__13418__auto__;
})()
;})(switch__13417__auto__,c__13487__auto___18115))
})();var state__13489__auto__ = (function (){var statearr_16202 = f__13488__auto__.call(null);(statearr_16202[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13487__auto___18115);
return statearr_16202;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13489__auto__);
});})(c__13487__auto___18115))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__13487__auto___18128 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13487__auto___18128,tc,fc){
return (function (){var f__13488__auto__ = (function (){var switch__13417__auto__ = ((function (c__13487__auto___18128,tc,fc){
return (function (state_16267){var state_val_16268 = (state_16267[1]);if((state_val_16268 === 1))
{var state_16267__$1 = state_16267;var statearr_16269_18129 = state_16267__$1;(statearr_16269_18129[2] = null);
(statearr_16269_18129[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16268 === 2))
{var state_16267__$1 = state_16267;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16267__$1,4,ch);
} else
{if((state_val_16268 === 3))
{var inst_16265 = (state_16267[2]);var state_16267__$1 = state_16267;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16267__$1,inst_16265);
} else
{if((state_val_16268 === 4))
{var inst_16248 = (state_16267[7]);var inst_16248__$1 = (state_16267[2]);var inst_16249 = (inst_16248__$1 == null);var state_16267__$1 = (function (){var statearr_16270 = state_16267;(statearr_16270[7] = inst_16248__$1);
return statearr_16270;
})();if(cljs.core.truth_(inst_16249))
{var statearr_16271_18130 = state_16267__$1;(statearr_16271_18130[1] = 5);
} else
{var statearr_16272_18131 = state_16267__$1;(statearr_16272_18131[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16268 === 5))
{var inst_16251 = cljs.core.async.close_BANG_.call(null,tc);var inst_16252 = cljs.core.async.close_BANG_.call(null,fc);var state_16267__$1 = (function (){var statearr_16273 = state_16267;(statearr_16273[8] = inst_16251);
return statearr_16273;
})();var statearr_16274_18132 = state_16267__$1;(statearr_16274_18132[2] = inst_16252);
(statearr_16274_18132[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16268 === 6))
{var inst_16248 = (state_16267[7]);var inst_16254 = p.call(null,inst_16248);var state_16267__$1 = state_16267;if(cljs.core.truth_(inst_16254))
{var statearr_16275_18133 = state_16267__$1;(statearr_16275_18133[1] = 9);
} else
{var statearr_16276_18134 = state_16267__$1;(statearr_16276_18134[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16268 === 7))
{var inst_16263 = (state_16267[2]);var state_16267__$1 = state_16267;var statearr_16277_18135 = state_16267__$1;(statearr_16277_18135[2] = inst_16263);
(statearr_16277_18135[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16268 === 8))
{var inst_16260 = (state_16267[2]);var state_16267__$1 = (function (){var statearr_16278 = state_16267;(statearr_16278[9] = inst_16260);
return statearr_16278;
})();var statearr_16279_18136 = state_16267__$1;(statearr_16279_18136[2] = null);
(statearr_16279_18136[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16268 === 9))
{var state_16267__$1 = state_16267;var statearr_16280_18137 = state_16267__$1;(statearr_16280_18137[2] = tc);
(statearr_16280_18137[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16268 === 10))
{var state_16267__$1 = state_16267;var statearr_16281_18138 = state_16267__$1;(statearr_16281_18138[2] = fc);
(statearr_16281_18138[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16268 === 11))
{var inst_16248 = (state_16267[7]);var inst_16258 = (state_16267[2]);var state_16267__$1 = state_16267;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16267__$1,8,inst_16258,inst_16248);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__13487__auto___18128,tc,fc))
;return ((function (switch__13417__auto__,c__13487__auto___18128,tc,fc){
return (function() {
var state_machine__13418__auto__ = null;
var state_machine__13418__auto____0 = (function (){var statearr_16285 = [null,null,null,null,null,null,null,null,null,null];(statearr_16285[0] = state_machine__13418__auto__);
(statearr_16285[1] = 1);
return statearr_16285;
});
var state_machine__13418__auto____1 = (function (state_16267){while(true){
var ret_value__13419__auto__ = (function (){try{while(true){
var result__13420__auto__ = switch__13417__auto__.call(null,state_16267);if(cljs.core.keyword_identical_QMARK_.call(null,result__13420__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13420__auto__;
}
break;
}
}catch (e16286){if((e16286 instanceof Object))
{var ex__13421__auto__ = e16286;var statearr_16287_18139 = state_16267;(statearr_16287_18139[5] = ex__13421__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16267);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16286;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13419__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18140 = state_16267;
state_16267 = G__18140;
continue;
}
} else
{return ret_value__13419__auto__;
}
break;
}
});
state_machine__13418__auto__ = function(state_16267){
switch(arguments.length){
case 0:
return state_machine__13418__auto____0.call(this);
case 1:
return state_machine__13418__auto____1.call(this,state_16267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13418__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13418__auto____0;
state_machine__13418__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13418__auto____1;
return state_machine__13418__auto__;
})()
;})(switch__13417__auto__,c__13487__auto___18128,tc,fc))
})();var state__13489__auto__ = (function (){var statearr_16288 = f__13488__auto__.call(null);(statearr_16288[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13487__auto___18128);
return statearr_16288;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13489__auto__);
});})(c__13487__auto___18128,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__13487__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13487__auto__){
return (function (){var f__13488__auto__ = (function (){var switch__13417__auto__ = ((function (c__13487__auto__){
return (function (state_16335){var state_val_16336 = (state_16335[1]);if((state_val_16336 === 7))
{var inst_16331 = (state_16335[2]);var state_16335__$1 = state_16335;var statearr_16337_18141 = state_16335__$1;(statearr_16337_18141[2] = inst_16331);
(statearr_16337_18141[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16336 === 6))
{var inst_16324 = (state_16335[7]);var inst_16321 = (state_16335[8]);var inst_16328 = f.call(null,inst_16321,inst_16324);var inst_16321__$1 = inst_16328;var state_16335__$1 = (function (){var statearr_16338 = state_16335;(statearr_16338[8] = inst_16321__$1);
return statearr_16338;
})();var statearr_16339_18142 = state_16335__$1;(statearr_16339_18142[2] = null);
(statearr_16339_18142[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16336 === 5))
{var inst_16321 = (state_16335[8]);var state_16335__$1 = state_16335;var statearr_16340_18143 = state_16335__$1;(statearr_16340_18143[2] = inst_16321);
(statearr_16340_18143[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16336 === 4))
{var inst_16324 = (state_16335[7]);var inst_16324__$1 = (state_16335[2]);var inst_16325 = (inst_16324__$1 == null);var state_16335__$1 = (function (){var statearr_16341 = state_16335;(statearr_16341[7] = inst_16324__$1);
return statearr_16341;
})();if(cljs.core.truth_(inst_16325))
{var statearr_16342_18144 = state_16335__$1;(statearr_16342_18144[1] = 5);
} else
{var statearr_16343_18145 = state_16335__$1;(statearr_16343_18145[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16336 === 3))
{var inst_16333 = (state_16335[2]);var state_16335__$1 = state_16335;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16335__$1,inst_16333);
} else
{if((state_val_16336 === 2))
{var state_16335__$1 = state_16335;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16335__$1,4,ch);
} else
{if((state_val_16336 === 1))
{var inst_16321 = init;var state_16335__$1 = (function (){var statearr_16344 = state_16335;(statearr_16344[8] = inst_16321);
return statearr_16344;
})();var statearr_16345_18146 = state_16335__$1;(statearr_16345_18146[2] = null);
(statearr_16345_18146[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});})(c__13487__auto__))
;return ((function (switch__13417__auto__,c__13487__auto__){
return (function() {
var state_machine__13418__auto__ = null;
var state_machine__13418__auto____0 = (function (){var statearr_16349 = [null,null,null,null,null,null,null,null,null];(statearr_16349[0] = state_machine__13418__auto__);
(statearr_16349[1] = 1);
return statearr_16349;
});
var state_machine__13418__auto____1 = (function (state_16335){while(true){
var ret_value__13419__auto__ = (function (){try{while(true){
var result__13420__auto__ = switch__13417__auto__.call(null,state_16335);if(cljs.core.keyword_identical_QMARK_.call(null,result__13420__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13420__auto__;
}
break;
}
}catch (e16350){if((e16350 instanceof Object))
{var ex__13421__auto__ = e16350;var statearr_16351_18147 = state_16335;(statearr_16351_18147[5] = ex__13421__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16335);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16350;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13419__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18148 = state_16335;
state_16335 = G__18148;
continue;
}
} else
{return ret_value__13419__auto__;
}
break;
}
});
state_machine__13418__auto__ = function(state_16335){
switch(arguments.length){
case 0:
return state_machine__13418__auto____0.call(this);
case 1:
return state_machine__13418__auto____1.call(this,state_16335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13418__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13418__auto____0;
state_machine__13418__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13418__auto____1;
return state_machine__13418__auto__;
})()
;})(switch__13417__auto__,c__13487__auto__))
})();var state__13489__auto__ = (function (){var statearr_16352 = f__13488__auto__.call(null);(statearr_16352[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13487__auto__);
return statearr_16352;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13489__auto__);
});})(c__13487__auto__))
);
return c__13487__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__13487__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13487__auto__){
return (function (){var f__13488__auto__ = (function (){var switch__13417__auto__ = ((function (c__13487__auto__){
return (function (state_16414){var state_val_16415 = (state_16414[1]);if((state_val_16415 === 1))
{var inst_16394 = cljs.core.seq.call(null,coll);var inst_16395 = inst_16394;var state_16414__$1 = (function (){var statearr_16416 = state_16414;(statearr_16416[7] = inst_16395);
return statearr_16416;
})();var statearr_16417_18149 = state_16414__$1;(statearr_16417_18149[2] = null);
(statearr_16417_18149[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16415 === 2))
{var inst_16395 = (state_16414[7]);var state_16414__$1 = state_16414;if(cljs.core.truth_(inst_16395))
{var statearr_16418_18150 = state_16414__$1;(statearr_16418_18150[1] = 4);
} else
{var statearr_16419_18151 = state_16414__$1;(statearr_16419_18151[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16415 === 3))
{var inst_16412 = (state_16414[2]);var state_16414__$1 = state_16414;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16414__$1,inst_16412);
} else
{if((state_val_16415 === 4))
{var inst_16395 = (state_16414[7]);var inst_16398 = cljs.core.first.call(null,inst_16395);var state_16414__$1 = state_16414;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16414__$1,7,ch,inst_16398);
} else
{if((state_val_16415 === 5))
{var state_16414__$1 = state_16414;if(cljs.core.truth_(close_QMARK_))
{var statearr_16420_18152 = state_16414__$1;(statearr_16420_18152[1] = 8);
} else
{var statearr_16421_18153 = state_16414__$1;(statearr_16421_18153[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16415 === 6))
{var inst_16410 = (state_16414[2]);var state_16414__$1 = state_16414;var statearr_16422_18154 = state_16414__$1;(statearr_16422_18154[2] = inst_16410);
(statearr_16422_18154[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16415 === 7))
{var inst_16395 = (state_16414[7]);var inst_16400 = (state_16414[2]);var inst_16401 = cljs.core.next.call(null,inst_16395);var inst_16395__$1 = inst_16401;var state_16414__$1 = (function (){var statearr_16423 = state_16414;(statearr_16423[7] = inst_16395__$1);
(statearr_16423[8] = inst_16400);
return statearr_16423;
})();var statearr_16424_18155 = state_16414__$1;(statearr_16424_18155[2] = null);
(statearr_16424_18155[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16415 === 8))
{var inst_16405 = cljs.core.async.close_BANG_.call(null,ch);var state_16414__$1 = state_16414;var statearr_16425_18156 = state_16414__$1;(statearr_16425_18156[2] = inst_16405);
(statearr_16425_18156[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16415 === 9))
{var state_16414__$1 = state_16414;var statearr_16426_18157 = state_16414__$1;(statearr_16426_18157[2] = null);
(statearr_16426_18157[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16415 === 10))
{var inst_16408 = (state_16414[2]);var state_16414__$1 = state_16414;var statearr_16427_18158 = state_16414__$1;(statearr_16427_18158[2] = inst_16408);
(statearr_16427_18158[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
});})(c__13487__auto__))
;return ((function (switch__13417__auto__,c__13487__auto__){
return (function() {
var state_machine__13418__auto__ = null;
var state_machine__13418__auto____0 = (function (){var statearr_16431 = [null,null,null,null,null,null,null,null,null];(statearr_16431[0] = state_machine__13418__auto__);
(statearr_16431[1] = 1);
return statearr_16431;
});
var state_machine__13418__auto____1 = (function (state_16414){while(true){
var ret_value__13419__auto__ = (function (){try{while(true){
var result__13420__auto__ = switch__13417__auto__.call(null,state_16414);if(cljs.core.keyword_identical_QMARK_.call(null,result__13420__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13420__auto__;
}
break;
}
}catch (e16432){if((e16432 instanceof Object))
{var ex__13421__auto__ = e16432;var statearr_16433_18159 = state_16414;(statearr_16433_18159[5] = ex__13421__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16414);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16432;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13419__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18160 = state_16414;
state_16414 = G__18160;
continue;
}
} else
{return ret_value__13419__auto__;
}
break;
}
});
state_machine__13418__auto__ = function(state_16414){
switch(arguments.length){
case 0:
return state_machine__13418__auto____0.call(this);
case 1:
return state_machine__13418__auto____1.call(this,state_16414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13418__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13418__auto____0;
state_machine__13418__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13418__auto____1;
return state_machine__13418__auto__;
})()
;})(switch__13417__auto__,c__13487__auto__))
})();var state__13489__auto__ = (function (){var statearr_16434 = f__13488__auto__.call(null);(statearr_16434[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13487__auto__);
return statearr_16434;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13489__auto__);
});})(c__13487__auto__))
);
return c__13487__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj16436 = {};return obj16436;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__4872__auto__ = _;if(and__4872__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__4872__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__5511__auto__ = (((_ == null))?null:_);return (function (){var or__4884__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5511__auto__)]);if(or__4884__auto__)
{return or__4884__auto__;
} else
{var or__4884__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__4884__auto____$1)
{return or__4884__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj16438 = {};return obj16438;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__4872__auto__ = m;if(and__4872__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__4872__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__5511__auto__ = (((m == null))?null:m);return (function (){var or__4884__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5511__auto__)]);if(or__4884__auto__)
{return or__4884__auto__;
} else
{var or__4884__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__4884__auto____$1)
{return or__4884__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__4872__auto__ = m;if(and__4872__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__4872__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__5511__auto__ = (((m == null))?null:m);return (function (){var or__4884__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5511__auto__)]);if(or__4884__auto__)
{return or__4884__auto__;
} else
{var or__4884__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__4884__auto____$1)
{return or__4884__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__4872__auto__ = m;if(and__4872__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__4872__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__5511__auto__ = (((m == null))?null:m);return (function (){var or__4884__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5511__auto__)]);if(or__4884__auto__)
{return or__4884__auto__;
} else
{var or__4884__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__4884__auto____$1)
{return or__4884__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t16662 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16662 = (function (cs,ch,mult,meta16663){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta16663 = meta16663;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16662.cljs$lang$type = true;
cljs.core.async.t16662.cljs$lang$ctorStr = "cljs.core.async/t16662";
cljs.core.async.t16662.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async/t16662");
});})(cs))
;
cljs.core.async.t16662.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t16662.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t16662.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t16662.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t16662.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16662.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t16662.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16664){var self__ = this;
var _16664__$1 = this;return self__.meta16663;
});})(cs))
;
cljs.core.async.t16662.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16664,meta16663__$1){var self__ = this;
var _16664__$1 = this;return (new cljs.core.async.t16662(self__.cs,self__.ch,self__.mult,meta16663__$1));
});})(cs))
;
cljs.core.async.__GT_t16662 = ((function (cs){
return (function __GT_t16662(cs__$1,ch__$1,mult__$1,meta16663){return (new cljs.core.async.t16662(cs__$1,ch__$1,mult__$1,meta16663));
});})(cs))
;
}
return (new cljs.core.async.t16662(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__13487__auto___18161 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13487__auto___18161,cs,m,dchan,dctr,done){
return (function (){var f__13488__auto__ = (function (){var switch__13417__auto__ = ((function (c__13487__auto___18161,cs,m,dchan,dctr,done){
return (function (state_16799){var state_val_16800 = (state_16799[1]);if((state_val_16800 === 32))
{var inst_16667 = (state_16799[7]);var inst_16743 = (state_16799[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16799,31,Object,null,30);var inst_16750 = cljs.core.async.put_BANG_.call(null,inst_16743,inst_16667,done);var state_16799__$1 = state_16799;var statearr_16801_18162 = state_16799__$1;(statearr_16801_18162[2] = inst_16750);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16799__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16800 === 1))
{var state_16799__$1 = state_16799;var statearr_16802_18163 = state_16799__$1;(statearr_16802_18163[2] = null);
(statearr_16802_18163[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16800 === 33))
{var inst_16756 = (state_16799[9]);var inst_16758 = cljs.core.chunked_seq_QMARK_.call(null,inst_16756);var state_16799__$1 = state_16799;if(inst_16758)
{var statearr_16803_18164 = state_16799__$1;(statearr_16803_18164[1] = 36);
} else
{var statearr_16804_18165 = state_16799__$1;(statearr_16804_18165[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16800 === 2))
{var state_16799__$1 = state_16799;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16799__$1,4,ch);
} else
{if((state_val_16800 === 34))
{var state_16799__$1 = state_16799;var statearr_16805_18166 = state_16799__$1;(statearr_16805_18166[2] = null);
(statearr_16805_18166[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16800 === 3))
{var inst_16797 = (state_16799[2]);var state_16799__$1 = state_16799;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16799__$1,inst_16797);
} else
{if((state_val_16800 === 35))
{var inst_16781 = (state_16799[2]);var state_16799__$1 = state_16799;var statearr_16806_18167 = state_16799__$1;(statearr_16806_18167[2] = inst_16781);
(statearr_16806_18167[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16800 === 4))
{var inst_16667 = (state_16799[7]);var inst_16667__$1 = (state_16799[2]);var inst_16668 = (inst_16667__$1 == null);var state_16799__$1 = (function (){var statearr_16807 = state_16799;(statearr_16807[7] = inst_16667__$1);
return statearr_16807;
})();if(cljs.core.truth_(inst_16668))
{var statearr_16808_18168 = state_16799__$1;(statearr_16808_18168[1] = 5);
} else
{var statearr_16809_18169 = state_16799__$1;(statearr_16809_18169[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16800 === 36))
{var inst_16756 = (state_16799[9]);var inst_16760 = cljs.core.chunk_first.call(null,inst_16756);var inst_16761 = cljs.core.chunk_rest.call(null,inst_16756);var inst_16762 = cljs.core.count.call(null,inst_16760);var inst_16735 = inst_16761;var inst_16736 = inst_16760;var inst_16737 = inst_16762;var inst_16738 = 0;var state_16799__$1 = (function (){var statearr_16810 = state_16799;(statearr_16810[10] = inst_16736);
(statearr_16810[11] = inst_16737);
(statearr_16810[12] = inst_16738);
(statearr_16810[13] = inst_16735);
return statearr_16810;
})();var statearr_16811_18170 = state_16799__$1;(statearr_16811_18170[2] = null);
(statearr_16811_18170[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16800 === 5))
{var inst_16674 = cljs.core.deref.call(null,cs);var inst_16675 = cljs.core.seq.call(null,inst_16674);var inst_16676 = inst_16675;var inst_16677 = null;var inst_16678 = 0;var inst_16679 = 0;var state_16799__$1 = (function (){var statearr_16812 = state_16799;(statearr_16812[14] = inst_16679);
(statearr_16812[15] = inst_16678);
(statearr_16812[16] = inst_16677);
(statearr_16812[17] = inst_16676);
return statearr_16812;
})();var statearr_16813_18171 = state_16799__$1;(statearr_16813_18171[2] = null);
(statearr_16813_18171[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16800 === 37))
{var inst_16756 = (state_16799[9]);var inst_16765 = cljs.core.first.call(null,inst_16756);var state_16799__$1 = (function (){var statearr_16814 = state_16799;(statearr_16814[18] = inst_16765);
return statearr_16814;
})();var statearr_16815_18172 = state_16799__$1;(statearr_16815_18172[2] = null);
(statearr_16815_18172[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16800 === 6))
{var inst_16727 = (state_16799[19]);var inst_16726 = cljs.core.deref.call(null,cs);var inst_16727__$1 = cljs.core.keys.call(null,inst_16726);var inst_16728 = cljs.core.count.call(null,inst_16727__$1);var inst_16729 = cljs.core.reset_BANG_.call(null,dctr,inst_16728);var inst_16734 = cljs.core.seq.call(null,inst_16727__$1);var inst_16735 = inst_16734;var inst_16736 = null;var inst_16737 = 0;var inst_16738 = 0;var state_16799__$1 = (function (){var statearr_16816 = state_16799;(statearr_16816[20] = inst_16729);
(statearr_16816[10] = inst_16736);
(statearr_16816[11] = inst_16737);
(statearr_16816[12] = inst_16738);
(statearr_16816[13] = inst_16735);
(statearr_16816[19] = inst_16727__$1);
return statearr_16816;
})();var statearr_16817_18173 = state_16799__$1;(statearr_16817_18173[2] = null);
(statearr_16817_18173[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16800 === 38))
{var inst_16778 = (state_16799[2]);var state_16799__$1 = state_16799;var statearr_16818_18174 = state_16799__$1;(statearr_16818_18174[2] = inst_16778);
(statearr_16818_18174[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16800 === 7))
{var inst_16795 = (state_16799[2]);var state_16799__$1 = state_16799;var statearr_16819_18175 = state_16799__$1;(statearr_16819_18175[2] = inst_16795);
(statearr_16819_18175[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16800 === 39))
{var inst_16756 = (state_16799[9]);var inst_16774 = (state_16799[2]);var inst_16775 = cljs.core.next.call(null,inst_16756);var inst_16735 = inst_16775;var inst_16736 = null;var inst_16737 = 0;var inst_16738 = 0;var state_16799__$1 = (function (){var statearr_16820 = state_16799;(statearr_16820[10] = inst_16736);
(statearr_16820[11] = inst_16737);
(statearr_16820[12] = inst_16738);
(statearr_16820[13] = inst_16735);
(statearr_16820[21] = inst_16774);
return statearr_16820;
})();var statearr_16821_18176 = state_16799__$1;(statearr_16821_18176[2] = null);
(statearr_16821_18176[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16800 === 8))
{var inst_16679 = (state_16799[14]);var inst_16678 = (state_16799[15]);var inst_16681 = (inst_16679 < inst_16678);var inst_16682 = inst_16681;var state_16799__$1 = state_16799;if(cljs.core.truth_(inst_16682))
{var statearr_16822_18177 = state_16799__$1;(statearr_16822_18177[1] = 10);
} else
{var statearr_16823_18178 = state_16799__$1;(statearr_16823_18178[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16800 === 40))
{var inst_16765 = (state_16799[18]);var inst_16766 = (state_16799[2]);var inst_16767 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_16768 = cljs.core.async.untap_STAR_.call(null,m,inst_16765);var state_16799__$1 = (function (){var statearr_16824 = state_16799;(statearr_16824[22] = inst_16767);
(statearr_16824[23] = inst_16766);
return statearr_16824;
})();var statearr_16825_18179 = state_16799__$1;(statearr_16825_18179[2] = inst_16768);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16799__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16800 === 9))
{var inst_16724 = (state_16799[2]);var state_16799__$1 = state_16799;var statearr_16826_18180 = state_16799__$1;(statearr_16826_18180[2] = inst_16724);
(statearr_16826_18180[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16800 === 41))
{var inst_16667 = (state_16799[7]);var inst_16765 = (state_16799[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16799,40,Object,null,39);var inst_16772 = cljs.core.async.put_BANG_.call(null,inst_16765,inst_16667,done);var state_16799__$1 = state_16799;var statearr_16827_18181 = state_16799__$1;(statearr_16827_18181[2] = inst_16772);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16799__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16800 === 10))
{var inst_16679 = (state_16799[14]);var inst_16677 = (state_16799[16]);var inst_16685 = cljs.core._nth.call(null,inst_16677,inst_16679);var inst_16686 = cljs.core.nth.call(null,inst_16685,0,null);var inst_16687 = cljs.core.nth.call(null,inst_16685,1,null);var state_16799__$1 = (function (){var statearr_16828 = state_16799;(statearr_16828[24] = inst_16686);
return statearr_16828;
})();if(cljs.core.truth_(inst_16687))
{var statearr_16829_18182 = state_16799__$1;(statearr_16829_18182[1] = 13);
} else
{var statearr_16830_18183 = state_16799__$1;(statearr_16830_18183[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16800 === 42))
{var state_16799__$1 = state_16799;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16799__$1,45,dchan);
} else
{if((state_val_16800 === 11))
{var inst_16676 = (state_16799[17]);var inst_16696 = (state_16799[25]);var inst_16696__$1 = cljs.core.seq.call(null,inst_16676);var state_16799__$1 = (function (){var statearr_16831 = state_16799;(statearr_16831[25] = inst_16696__$1);
return statearr_16831;
})();if(inst_16696__$1)
{var statearr_16832_18184 = state_16799__$1;(statearr_16832_18184[1] = 16);
} else
{var statearr_16833_18185 = state_16799__$1;(statearr_16833_18185[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16800 === 43))
{var state_16799__$1 = state_16799;var statearr_16834_18186 = state_16799__$1;(statearr_16834_18186[2] = null);
(statearr_16834_18186[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16800 === 12))
{var inst_16722 = (state_16799[2]);var state_16799__$1 = state_16799;var statearr_16835_18187 = state_16799__$1;(statearr_16835_18187[2] = inst_16722);
(statearr_16835_18187[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16800 === 44))
{var inst_16792 = (state_16799[2]);var state_16799__$1 = (function (){var statearr_16836 = state_16799;(statearr_16836[26] = inst_16792);
return statearr_16836;
})();var statearr_16837_18188 = state_16799__$1;(statearr_16837_18188[2] = null);
(statearr_16837_18188[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16800 === 13))
{var inst_16686 = (state_16799[24]);var inst_16689 = cljs.core.async.close_BANG_.call(null,inst_16686);var state_16799__$1 = state_16799;var statearr_16838_18189 = state_16799__$1;(statearr_16838_18189[2] = inst_16689);
(statearr_16838_18189[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16800 === 45))
{var inst_16789 = (state_16799[2]);var state_16799__$1 = state_16799;var statearr_16842_18190 = state_16799__$1;(statearr_16842_18190[2] = inst_16789);
(statearr_16842_18190[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16800 === 14))
{var state_16799__$1 = state_16799;var statearr_16843_18191 = state_16799__$1;(statearr_16843_18191[2] = null);
(statearr_16843_18191[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16800 === 15))
{var inst_16679 = (state_16799[14]);var inst_16678 = (state_16799[15]);var inst_16677 = (state_16799[16]);var inst_16676 = (state_16799[17]);var inst_16692 = (state_16799[2]);var inst_16693 = (inst_16679 + 1);var tmp16839 = inst_16678;var tmp16840 = inst_16677;var tmp16841 = inst_16676;var inst_16676__$1 = tmp16841;var inst_16677__$1 = tmp16840;var inst_16678__$1 = tmp16839;var inst_16679__$1 = inst_16693;var state_16799__$1 = (function (){var statearr_16844 = state_16799;(statearr_16844[14] = inst_16679__$1);
(statearr_16844[15] = inst_16678__$1);
(statearr_16844[16] = inst_16677__$1);
(statearr_16844[17] = inst_16676__$1);
(statearr_16844[27] = inst_16692);
return statearr_16844;
})();var statearr_16845_18192 = state_16799__$1;(statearr_16845_18192[2] = null);
(statearr_16845_18192[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16800 === 16))
{var inst_16696 = (state_16799[25]);var inst_16698 = cljs.core.chunked_seq_QMARK_.call(null,inst_16696);var state_16799__$1 = state_16799;if(inst_16698)
{var statearr_16846_18193 = state_16799__$1;(statearr_16846_18193[1] = 19);
} else
{var statearr_16847_18194 = state_16799__$1;(statearr_16847_18194[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16800 === 17))
{var state_16799__$1 = state_16799;var statearr_16848_18195 = state_16799__$1;(statearr_16848_18195[2] = null);
(statearr_16848_18195[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16800 === 18))
{var inst_16720 = (state_16799[2]);var state_16799__$1 = state_16799;var statearr_16849_18196 = state_16799__$1;(statearr_16849_18196[2] = inst_16720);
(statearr_16849_18196[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16800 === 19))
{var inst_16696 = (state_16799[25]);var inst_16700 = cljs.core.chunk_first.call(null,inst_16696);var inst_16701 = cljs.core.chunk_rest.call(null,inst_16696);var inst_16702 = cljs.core.count.call(null,inst_16700);var inst_16676 = inst_16701;var inst_16677 = inst_16700;var inst_16678 = inst_16702;var inst_16679 = 0;var state_16799__$1 = (function (){var statearr_16850 = state_16799;(statearr_16850[14] = inst_16679);
(statearr_16850[15] = inst_16678);
(statearr_16850[16] = inst_16677);
(statearr_16850[17] = inst_16676);
return statearr_16850;
})();var statearr_16851_18197 = state_16799__$1;(statearr_16851_18197[2] = null);
(statearr_16851_18197[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16800 === 20))
{var inst_16696 = (state_16799[25]);var inst_16706 = cljs.core.first.call(null,inst_16696);var inst_16707 = cljs.core.nth.call(null,inst_16706,0,null);var inst_16708 = cljs.core.nth.call(null,inst_16706,1,null);var state_16799__$1 = (function (){var statearr_16852 = state_16799;(statearr_16852[28] = inst_16707);
return statearr_16852;
})();if(cljs.core.truth_(inst_16708))
{var statearr_16853_18198 = state_16799__$1;(statearr_16853_18198[1] = 22);
} else
{var statearr_16854_18199 = state_16799__$1;(statearr_16854_18199[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16800 === 21))
{var inst_16717 = (state_16799[2]);var state_16799__$1 = state_16799;var statearr_16855_18200 = state_16799__$1;(statearr_16855_18200[2] = inst_16717);
(statearr_16855_18200[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16800 === 22))
{var inst_16707 = (state_16799[28]);var inst_16710 = cljs.core.async.close_BANG_.call(null,inst_16707);var state_16799__$1 = state_16799;var statearr_16856_18201 = state_16799__$1;(statearr_16856_18201[2] = inst_16710);
(statearr_16856_18201[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16800 === 23))
{var state_16799__$1 = state_16799;var statearr_16857_18202 = state_16799__$1;(statearr_16857_18202[2] = null);
(statearr_16857_18202[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16800 === 24))
{var inst_16696 = (state_16799[25]);var inst_16713 = (state_16799[2]);var inst_16714 = cljs.core.next.call(null,inst_16696);var inst_16676 = inst_16714;var inst_16677 = null;var inst_16678 = 0;var inst_16679 = 0;var state_16799__$1 = (function (){var statearr_16858 = state_16799;(statearr_16858[29] = inst_16713);
(statearr_16858[14] = inst_16679);
(statearr_16858[15] = inst_16678);
(statearr_16858[16] = inst_16677);
(statearr_16858[17] = inst_16676);
return statearr_16858;
})();var statearr_16859_18203 = state_16799__$1;(statearr_16859_18203[2] = null);
(statearr_16859_18203[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16800 === 25))
{var inst_16737 = (state_16799[11]);var inst_16738 = (state_16799[12]);var inst_16740 = (inst_16738 < inst_16737);var inst_16741 = inst_16740;var state_16799__$1 = state_16799;if(cljs.core.truth_(inst_16741))
{var statearr_16860_18204 = state_16799__$1;(statearr_16860_18204[1] = 27);
} else
{var statearr_16861_18205 = state_16799__$1;(statearr_16861_18205[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16800 === 26))
{var inst_16727 = (state_16799[19]);var inst_16785 = (state_16799[2]);var inst_16786 = cljs.core.seq.call(null,inst_16727);var state_16799__$1 = (function (){var statearr_16862 = state_16799;(statearr_16862[30] = inst_16785);
return statearr_16862;
})();if(inst_16786)
{var statearr_16863_18206 = state_16799__$1;(statearr_16863_18206[1] = 42);
} else
{var statearr_16864_18207 = state_16799__$1;(statearr_16864_18207[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16800 === 27))
{var inst_16736 = (state_16799[10]);var inst_16738 = (state_16799[12]);var inst_16743 = cljs.core._nth.call(null,inst_16736,inst_16738);var state_16799__$1 = (function (){var statearr_16865 = state_16799;(statearr_16865[8] = inst_16743);
return statearr_16865;
})();var statearr_16866_18208 = state_16799__$1;(statearr_16866_18208[2] = null);
(statearr_16866_18208[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16800 === 28))
{var inst_16756 = (state_16799[9]);var inst_16735 = (state_16799[13]);var inst_16756__$1 = cljs.core.seq.call(null,inst_16735);var state_16799__$1 = (function (){var statearr_16870 = state_16799;(statearr_16870[9] = inst_16756__$1);
return statearr_16870;
})();if(inst_16756__$1)
{var statearr_16871_18209 = state_16799__$1;(statearr_16871_18209[1] = 33);
} else
{var statearr_16872_18210 = state_16799__$1;(statearr_16872_18210[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16800 === 29))
{var inst_16783 = (state_16799[2]);var state_16799__$1 = state_16799;var statearr_16873_18211 = state_16799__$1;(statearr_16873_18211[2] = inst_16783);
(statearr_16873_18211[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16800 === 30))
{var inst_16736 = (state_16799[10]);var inst_16737 = (state_16799[11]);var inst_16738 = (state_16799[12]);var inst_16735 = (state_16799[13]);var inst_16752 = (state_16799[2]);var inst_16753 = (inst_16738 + 1);var tmp16867 = inst_16736;var tmp16868 = inst_16737;var tmp16869 = inst_16735;var inst_16735__$1 = tmp16869;var inst_16736__$1 = tmp16867;var inst_16737__$1 = tmp16868;var inst_16738__$1 = inst_16753;var state_16799__$1 = (function (){var statearr_16874 = state_16799;(statearr_16874[31] = inst_16752);
(statearr_16874[10] = inst_16736__$1);
(statearr_16874[11] = inst_16737__$1);
(statearr_16874[12] = inst_16738__$1);
(statearr_16874[13] = inst_16735__$1);
return statearr_16874;
})();var statearr_16875_18212 = state_16799__$1;(statearr_16875_18212[2] = null);
(statearr_16875_18212[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16800 === 31))
{var inst_16743 = (state_16799[8]);var inst_16744 = (state_16799[2]);var inst_16745 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_16746 = cljs.core.async.untap_STAR_.call(null,m,inst_16743);var state_16799__$1 = (function (){var statearr_16876 = state_16799;(statearr_16876[32] = inst_16745);
(statearr_16876[33] = inst_16744);
return statearr_16876;
})();var statearr_16877_18213 = state_16799__$1;(statearr_16877_18213[2] = inst_16746);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16799__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13487__auto___18161,cs,m,dchan,dctr,done))
;return ((function (switch__13417__auto__,c__13487__auto___18161,cs,m,dchan,dctr,done){
return (function() {
var state_machine__13418__auto__ = null;
var state_machine__13418__auto____0 = (function (){var statearr_16881 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16881[0] = state_machine__13418__auto__);
(statearr_16881[1] = 1);
return statearr_16881;
});
var state_machine__13418__auto____1 = (function (state_16799){while(true){
var ret_value__13419__auto__ = (function (){try{while(true){
var result__13420__auto__ = switch__13417__auto__.call(null,state_16799);if(cljs.core.keyword_identical_QMARK_.call(null,result__13420__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13420__auto__;
}
break;
}
}catch (e16882){if((e16882 instanceof Object))
{var ex__13421__auto__ = e16882;var statearr_16883_18214 = state_16799;(statearr_16883_18214[5] = ex__13421__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16799);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16882;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13419__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18215 = state_16799;
state_16799 = G__18215;
continue;
}
} else
{return ret_value__13419__auto__;
}
break;
}
});
state_machine__13418__auto__ = function(state_16799){
switch(arguments.length){
case 0:
return state_machine__13418__auto____0.call(this);
case 1:
return state_machine__13418__auto____1.call(this,state_16799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13418__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13418__auto____0;
state_machine__13418__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13418__auto____1;
return state_machine__13418__auto__;
})()
;})(switch__13417__auto__,c__13487__auto___18161,cs,m,dchan,dctr,done))
})();var state__13489__auto__ = (function (){var statearr_16884 = f__13488__auto__.call(null);(statearr_16884[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13487__auto___18161);
return statearr_16884;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13489__auto__);
});})(c__13487__auto___18161,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj16886 = {};return obj16886;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__4872__auto__ = m;if(and__4872__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__4872__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__5511__auto__ = (((m == null))?null:m);return (function (){var or__4884__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5511__auto__)]);if(or__4884__auto__)
{return or__4884__auto__;
} else
{var or__4884__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__4884__auto____$1)
{return or__4884__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__4872__auto__ = m;if(and__4872__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__4872__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__5511__auto__ = (((m == null))?null:m);return (function (){var or__4884__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5511__auto__)]);if(or__4884__auto__)
{return or__4884__auto__;
} else
{var or__4884__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__4884__auto____$1)
{return or__4884__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__4872__auto__ = m;if(and__4872__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__4872__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__5511__auto__ = (((m == null))?null:m);return (function (){var or__4884__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5511__auto__)]);if(or__4884__auto__)
{return or__4884__auto__;
} else
{var or__4884__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__4884__auto____$1)
{return or__4884__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__4872__auto__ = m;if(and__4872__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__4872__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__5511__auto__ = (((m == null))?null:m);return (function (){var or__4884__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5511__auto__)]);if(or__4884__auto__)
{return or__4884__auto__;
} else
{var or__4884__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__4884__auto____$1)
{return or__4884__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__4872__auto__ = m;if(and__4872__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__4872__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__5511__auto__ = (((m == null))?null:m);return (function (){var or__4884__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5511__auto__)]);if(or__4884__auto__)
{return or__4884__auto__;
} else
{var or__4884__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__4884__auto____$1)
{return or__4884__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t16996 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16996 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta16997){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta16997 = meta16997;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16996.cljs$lang$type = true;
cljs.core.async.t16996.cljs$lang$ctorStr = "cljs.core.async/t16996";
cljs.core.async.t16996.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async/t16996");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16996.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t16996.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16996.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16996.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16996.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16996.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16996.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16996.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16996.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16998){var self__ = this;
var _16998__$1 = this;return self__.meta16997;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16996.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16998,meta16997__$1){var self__ = this;
var _16998__$1 = this;return (new cljs.core.async.t16996(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta16997__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t16996 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t16996(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta16997){return (new cljs.core.async.t16996(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta16997));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t16996(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__13487__auto___18216 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13487__auto___18216,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__13488__auto__ = (function (){var switch__13417__auto__ = ((function (c__13487__auto___18216,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_17063){var state_val_17064 = (state_17063[1]);if((state_val_17064 === 1))
{var inst_17002 = (state_17063[7]);var inst_17002__$1 = calc_state.call(null);var inst_17003 = cljs.core.seq_QMARK_.call(null,inst_17002__$1);var state_17063__$1 = (function (){var statearr_17065 = state_17063;(statearr_17065[7] = inst_17002__$1);
return statearr_17065;
})();if(inst_17003)
{var statearr_17066_18217 = state_17063__$1;(statearr_17066_18217[1] = 2);
} else
{var statearr_17067_18218 = state_17063__$1;(statearr_17067_18218[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17064 === 2))
{var inst_17002 = (state_17063[7]);var inst_17005 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17002);var state_17063__$1 = state_17063;var statearr_17068_18219 = state_17063__$1;(statearr_17068_18219[2] = inst_17005);
(statearr_17068_18219[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17064 === 3))
{var inst_17002 = (state_17063[7]);var state_17063__$1 = state_17063;var statearr_17069_18220 = state_17063__$1;(statearr_17069_18220[2] = inst_17002);
(statearr_17069_18220[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17064 === 4))
{var inst_17002 = (state_17063[7]);var inst_17008 = (state_17063[2]);var inst_17009 = cljs.core.get.call(null,inst_17008,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_17010 = cljs.core.get.call(null,inst_17008,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_17011 = cljs.core.get.call(null,inst_17008,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_17012 = inst_17002;var state_17063__$1 = (function (){var statearr_17070 = state_17063;(statearr_17070[8] = inst_17009);
(statearr_17070[9] = inst_17011);
(statearr_17070[10] = inst_17010);
(statearr_17070[11] = inst_17012);
return statearr_17070;
})();var statearr_17071_18221 = state_17063__$1;(statearr_17071_18221[2] = null);
(statearr_17071_18221[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17064 === 5))
{var inst_17012 = (state_17063[11]);var inst_17015 = cljs.core.seq_QMARK_.call(null,inst_17012);var state_17063__$1 = state_17063;if(inst_17015)
{var statearr_17072_18222 = state_17063__$1;(statearr_17072_18222[1] = 7);
} else
{var statearr_17073_18223 = state_17063__$1;(statearr_17073_18223[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17064 === 6))
{var inst_17061 = (state_17063[2]);var state_17063__$1 = state_17063;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17063__$1,inst_17061);
} else
{if((state_val_17064 === 7))
{var inst_17012 = (state_17063[11]);var inst_17017 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17012);var state_17063__$1 = state_17063;var statearr_17074_18224 = state_17063__$1;(statearr_17074_18224[2] = inst_17017);
(statearr_17074_18224[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17064 === 8))
{var inst_17012 = (state_17063[11]);var state_17063__$1 = state_17063;var statearr_17075_18225 = state_17063__$1;(statearr_17075_18225[2] = inst_17012);
(statearr_17075_18225[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17064 === 9))
{var inst_17020 = (state_17063[12]);var inst_17020__$1 = (state_17063[2]);var inst_17021 = cljs.core.get.call(null,inst_17020__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_17022 = cljs.core.get.call(null,inst_17020__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_17023 = cljs.core.get.call(null,inst_17020__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_17063__$1 = (function (){var statearr_17076 = state_17063;(statearr_17076[12] = inst_17020__$1);
(statearr_17076[13] = inst_17022);
(statearr_17076[14] = inst_17023);
return statearr_17076;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_17063__$1,10,inst_17021);
} else
{if((state_val_17064 === 10))
{var inst_17027 = (state_17063[15]);var inst_17028 = (state_17063[16]);var inst_17026 = (state_17063[2]);var inst_17027__$1 = cljs.core.nth.call(null,inst_17026,0,null);var inst_17028__$1 = cljs.core.nth.call(null,inst_17026,1,null);var inst_17029 = (inst_17027__$1 == null);var inst_17030 = cljs.core._EQ_.call(null,inst_17028__$1,change);var inst_17031 = (inst_17029) || (inst_17030);var state_17063__$1 = (function (){var statearr_17077 = state_17063;(statearr_17077[15] = inst_17027__$1);
(statearr_17077[16] = inst_17028__$1);
return statearr_17077;
})();if(cljs.core.truth_(inst_17031))
{var statearr_17078_18226 = state_17063__$1;(statearr_17078_18226[1] = 11);
} else
{var statearr_17079_18227 = state_17063__$1;(statearr_17079_18227[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17064 === 11))
{var inst_17027 = (state_17063[15]);var inst_17033 = (inst_17027 == null);var state_17063__$1 = state_17063;if(cljs.core.truth_(inst_17033))
{var statearr_17080_18228 = state_17063__$1;(statearr_17080_18228[1] = 14);
} else
{var statearr_17081_18229 = state_17063__$1;(statearr_17081_18229[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17064 === 12))
{var inst_17042 = (state_17063[17]);var inst_17028 = (state_17063[16]);var inst_17023 = (state_17063[14]);var inst_17042__$1 = inst_17023.call(null,inst_17028);var state_17063__$1 = (function (){var statearr_17082 = state_17063;(statearr_17082[17] = inst_17042__$1);
return statearr_17082;
})();if(cljs.core.truth_(inst_17042__$1))
{var statearr_17083_18230 = state_17063__$1;(statearr_17083_18230[1] = 17);
} else
{var statearr_17084_18231 = state_17063__$1;(statearr_17084_18231[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17064 === 13))
{var inst_17059 = (state_17063[2]);var state_17063__$1 = state_17063;var statearr_17085_18232 = state_17063__$1;(statearr_17085_18232[2] = inst_17059);
(statearr_17085_18232[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17064 === 14))
{var inst_17028 = (state_17063[16]);var inst_17035 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_17028);var state_17063__$1 = state_17063;var statearr_17086_18233 = state_17063__$1;(statearr_17086_18233[2] = inst_17035);
(statearr_17086_18233[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17064 === 15))
{var state_17063__$1 = state_17063;var statearr_17087_18234 = state_17063__$1;(statearr_17087_18234[2] = null);
(statearr_17087_18234[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17064 === 16))
{var inst_17038 = (state_17063[2]);var inst_17039 = calc_state.call(null);var inst_17012 = inst_17039;var state_17063__$1 = (function (){var statearr_17088 = state_17063;(statearr_17088[18] = inst_17038);
(statearr_17088[11] = inst_17012);
return statearr_17088;
})();var statearr_17089_18235 = state_17063__$1;(statearr_17089_18235[2] = null);
(statearr_17089_18235[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17064 === 17))
{var inst_17042 = (state_17063[17]);var state_17063__$1 = state_17063;var statearr_17090_18236 = state_17063__$1;(statearr_17090_18236[2] = inst_17042);
(statearr_17090_18236[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17064 === 18))
{var inst_17028 = (state_17063[16]);var inst_17022 = (state_17063[13]);var inst_17023 = (state_17063[14]);var inst_17045 = cljs.core.empty_QMARK_.call(null,inst_17023);var inst_17046 = inst_17022.call(null,inst_17028);var inst_17047 = cljs.core.not.call(null,inst_17046);var inst_17048 = (inst_17045) && (inst_17047);var state_17063__$1 = state_17063;var statearr_17091_18237 = state_17063__$1;(statearr_17091_18237[2] = inst_17048);
(statearr_17091_18237[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17064 === 19))
{var inst_17050 = (state_17063[2]);var state_17063__$1 = state_17063;if(cljs.core.truth_(inst_17050))
{var statearr_17092_18238 = state_17063__$1;(statearr_17092_18238[1] = 20);
} else
{var statearr_17093_18239 = state_17063__$1;(statearr_17093_18239[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17064 === 20))
{var inst_17027 = (state_17063[15]);var state_17063__$1 = state_17063;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17063__$1,23,out,inst_17027);
} else
{if((state_val_17064 === 21))
{var state_17063__$1 = state_17063;var statearr_17094_18240 = state_17063__$1;(statearr_17094_18240[2] = null);
(statearr_17094_18240[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17064 === 22))
{var inst_17020 = (state_17063[12]);var inst_17056 = (state_17063[2]);var inst_17012 = inst_17020;var state_17063__$1 = (function (){var statearr_17095 = state_17063;(statearr_17095[11] = inst_17012);
(statearr_17095[19] = inst_17056);
return statearr_17095;
})();var statearr_17096_18241 = state_17063__$1;(statearr_17096_18241[2] = null);
(statearr_17096_18241[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17064 === 23))
{var inst_17053 = (state_17063[2]);var state_17063__$1 = state_17063;var statearr_17097_18242 = state_17063__$1;(statearr_17097_18242[2] = inst_17053);
(statearr_17097_18242[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13487__auto___18216,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__13417__auto__,c__13487__auto___18216,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__13418__auto__ = null;
var state_machine__13418__auto____0 = (function (){var statearr_17101 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17101[0] = state_machine__13418__auto__);
(statearr_17101[1] = 1);
return statearr_17101;
});
var state_machine__13418__auto____1 = (function (state_17063){while(true){
var ret_value__13419__auto__ = (function (){try{while(true){
var result__13420__auto__ = switch__13417__auto__.call(null,state_17063);if(cljs.core.keyword_identical_QMARK_.call(null,result__13420__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13420__auto__;
}
break;
}
}catch (e17102){if((e17102 instanceof Object))
{var ex__13421__auto__ = e17102;var statearr_17103_18243 = state_17063;(statearr_17103_18243[5] = ex__13421__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17063);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17102;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13419__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18244 = state_17063;
state_17063 = G__18244;
continue;
}
} else
{return ret_value__13419__auto__;
}
break;
}
});
state_machine__13418__auto__ = function(state_17063){
switch(arguments.length){
case 0:
return state_machine__13418__auto____0.call(this);
case 1:
return state_machine__13418__auto____1.call(this,state_17063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13418__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13418__auto____0;
state_machine__13418__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13418__auto____1;
return state_machine__13418__auto__;
})()
;})(switch__13417__auto__,c__13487__auto___18216,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__13489__auto__ = (function (){var statearr_17104 = f__13488__auto__.call(null);(statearr_17104[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13487__auto___18216);
return statearr_17104;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13489__auto__);
});})(c__13487__auto___18216,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj17106 = {};return obj17106;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__4872__auto__ = p;if(and__4872__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__4872__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__5511__auto__ = (((p == null))?null:p);return (function (){var or__4884__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5511__auto__)]);if(or__4884__auto__)
{return or__4884__auto__;
} else
{var or__4884__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__4884__auto____$1)
{return or__4884__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__4872__auto__ = p;if(and__4872__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__4872__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__5511__auto__ = (((p == null))?null:p);return (function (){var or__4884__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5511__auto__)]);if(or__4884__auto__)
{return or__4884__auto__;
} else
{var or__4884__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__4884__auto____$1)
{return or__4884__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__4872__auto__ = p;if(and__4872__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__4872__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__5511__auto__ = (((p == null))?null:p);return (function (){var or__4884__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5511__auto__)]);if(or__4884__auto__)
{return or__4884__auto__;
} else
{var or__4884__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__4884__auto____$1)
{return or__4884__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__4872__auto__ = p;if(and__4872__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__4872__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__5511__auto__ = (((p == null))?null:p);return (function (){var or__4884__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5511__auto__)]);if(or__4884__auto__)
{return or__4884__auto__;
} else
{var or__4884__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__4884__auto____$1)
{return or__4884__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__4884__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4884__auto__,mults){
return (function (p1__17107_SHARP_){if(cljs.core.truth_(p1__17107_SHARP_.call(null,topic)))
{return p1__17107_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__17107_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4884__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t17232 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17232 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta17233){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta17233 = meta17233;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17232.cljs$lang$type = true;
cljs.core.async.t17232.cljs$lang$ctorStr = "cljs.core.async/t17232";
cljs.core.async.t17232.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async/t17232");
});})(mults,ensure_mult))
;
cljs.core.async.t17232.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t17232.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t17232.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t17232.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t17232.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t17232.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t17232.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t17232.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_17234){var self__ = this;
var _17234__$1 = this;return self__.meta17233;
});})(mults,ensure_mult))
;
cljs.core.async.t17232.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_17234,meta17233__$1){var self__ = this;
var _17234__$1 = this;return (new cljs.core.async.t17232(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta17233__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t17232 = ((function (mults,ensure_mult){
return (function __GT_t17232(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta17233){return (new cljs.core.async.t17232(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta17233));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t17232(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__13487__auto___18245 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13487__auto___18245,mults,ensure_mult,p){
return (function (){var f__13488__auto__ = (function (){var switch__13417__auto__ = ((function (c__13487__auto___18245,mults,ensure_mult,p){
return (function (state_17308){var state_val_17309 = (state_17308[1]);if((state_val_17309 === 1))
{var state_17308__$1 = state_17308;var statearr_17310_18246 = state_17308__$1;(statearr_17310_18246[2] = null);
(statearr_17310_18246[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17309 === 2))
{var state_17308__$1 = state_17308;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17308__$1,4,ch);
} else
{if((state_val_17309 === 3))
{var inst_17306 = (state_17308[2]);var state_17308__$1 = state_17308;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17308__$1,inst_17306);
} else
{if((state_val_17309 === 4))
{var inst_17237 = (state_17308[7]);var inst_17237__$1 = (state_17308[2]);var inst_17238 = (inst_17237__$1 == null);var state_17308__$1 = (function (){var statearr_17311 = state_17308;(statearr_17311[7] = inst_17237__$1);
return statearr_17311;
})();if(cljs.core.truth_(inst_17238))
{var statearr_17312_18247 = state_17308__$1;(statearr_17312_18247[1] = 5);
} else
{var statearr_17313_18248 = state_17308__$1;(statearr_17313_18248[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17309 === 5))
{var inst_17244 = cljs.core.deref.call(null,mults);var inst_17245 = cljs.core.vals.call(null,inst_17244);var inst_17246 = cljs.core.seq.call(null,inst_17245);var inst_17247 = inst_17246;var inst_17248 = null;var inst_17249 = 0;var inst_17250 = 0;var state_17308__$1 = (function (){var statearr_17314 = state_17308;(statearr_17314[8] = inst_17249);
(statearr_17314[9] = inst_17247);
(statearr_17314[10] = inst_17248);
(statearr_17314[11] = inst_17250);
return statearr_17314;
})();var statearr_17315_18249 = state_17308__$1;(statearr_17315_18249[2] = null);
(statearr_17315_18249[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17309 === 6))
{var inst_17237 = (state_17308[7]);var inst_17285 = (state_17308[12]);var inst_17287 = (state_17308[13]);var inst_17285__$1 = topic_fn.call(null,inst_17237);var inst_17286 = cljs.core.deref.call(null,mults);var inst_17287__$1 = cljs.core.get.call(null,inst_17286,inst_17285__$1);var state_17308__$1 = (function (){var statearr_17316 = state_17308;(statearr_17316[12] = inst_17285__$1);
(statearr_17316[13] = inst_17287__$1);
return statearr_17316;
})();if(cljs.core.truth_(inst_17287__$1))
{var statearr_17317_18250 = state_17308__$1;(statearr_17317_18250[1] = 19);
} else
{var statearr_17318_18251 = state_17308__$1;(statearr_17318_18251[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17309 === 7))
{var inst_17304 = (state_17308[2]);var state_17308__$1 = state_17308;var statearr_17319_18252 = state_17308__$1;(statearr_17319_18252[2] = inst_17304);
(statearr_17319_18252[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17309 === 8))
{var inst_17249 = (state_17308[8]);var inst_17250 = (state_17308[11]);var inst_17252 = (inst_17250 < inst_17249);var inst_17253 = inst_17252;var state_17308__$1 = state_17308;if(cljs.core.truth_(inst_17253))
{var statearr_17323_18253 = state_17308__$1;(statearr_17323_18253[1] = 10);
} else
{var statearr_17324_18254 = state_17308__$1;(statearr_17324_18254[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17309 === 9))
{var inst_17283 = (state_17308[2]);var state_17308__$1 = state_17308;var statearr_17325_18255 = state_17308__$1;(statearr_17325_18255[2] = inst_17283);
(statearr_17325_18255[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17309 === 10))
{var inst_17249 = (state_17308[8]);var inst_17247 = (state_17308[9]);var inst_17248 = (state_17308[10]);var inst_17250 = (state_17308[11]);var inst_17255 = cljs.core._nth.call(null,inst_17248,inst_17250);var inst_17256 = cljs.core.async.muxch_STAR_.call(null,inst_17255);var inst_17257 = cljs.core.async.close_BANG_.call(null,inst_17256);var inst_17258 = (inst_17250 + 1);var tmp17320 = inst_17249;var tmp17321 = inst_17247;var tmp17322 = inst_17248;var inst_17247__$1 = tmp17321;var inst_17248__$1 = tmp17322;var inst_17249__$1 = tmp17320;var inst_17250__$1 = inst_17258;var state_17308__$1 = (function (){var statearr_17326 = state_17308;(statearr_17326[8] = inst_17249__$1);
(statearr_17326[9] = inst_17247__$1);
(statearr_17326[10] = inst_17248__$1);
(statearr_17326[11] = inst_17250__$1);
(statearr_17326[14] = inst_17257);
return statearr_17326;
})();var statearr_17327_18256 = state_17308__$1;(statearr_17327_18256[2] = null);
(statearr_17327_18256[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17309 === 11))
{var inst_17261 = (state_17308[15]);var inst_17247 = (state_17308[9]);var inst_17261__$1 = cljs.core.seq.call(null,inst_17247);var state_17308__$1 = (function (){var statearr_17328 = state_17308;(statearr_17328[15] = inst_17261__$1);
return statearr_17328;
})();if(inst_17261__$1)
{var statearr_17329_18257 = state_17308__$1;(statearr_17329_18257[1] = 13);
} else
{var statearr_17330_18258 = state_17308__$1;(statearr_17330_18258[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17309 === 12))
{var inst_17281 = (state_17308[2]);var state_17308__$1 = state_17308;var statearr_17331_18259 = state_17308__$1;(statearr_17331_18259[2] = inst_17281);
(statearr_17331_18259[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17309 === 13))
{var inst_17261 = (state_17308[15]);var inst_17263 = cljs.core.chunked_seq_QMARK_.call(null,inst_17261);var state_17308__$1 = state_17308;if(inst_17263)
{var statearr_17332_18260 = state_17308__$1;(statearr_17332_18260[1] = 16);
} else
{var statearr_17333_18261 = state_17308__$1;(statearr_17333_18261[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17309 === 14))
{var state_17308__$1 = state_17308;var statearr_17334_18262 = state_17308__$1;(statearr_17334_18262[2] = null);
(statearr_17334_18262[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17309 === 15))
{var inst_17279 = (state_17308[2]);var state_17308__$1 = state_17308;var statearr_17335_18263 = state_17308__$1;(statearr_17335_18263[2] = inst_17279);
(statearr_17335_18263[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17309 === 16))
{var inst_17261 = (state_17308[15]);var inst_17265 = cljs.core.chunk_first.call(null,inst_17261);var inst_17266 = cljs.core.chunk_rest.call(null,inst_17261);var inst_17267 = cljs.core.count.call(null,inst_17265);var inst_17247 = inst_17266;var inst_17248 = inst_17265;var inst_17249 = inst_17267;var inst_17250 = 0;var state_17308__$1 = (function (){var statearr_17336 = state_17308;(statearr_17336[8] = inst_17249);
(statearr_17336[9] = inst_17247);
(statearr_17336[10] = inst_17248);
(statearr_17336[11] = inst_17250);
return statearr_17336;
})();var statearr_17337_18264 = state_17308__$1;(statearr_17337_18264[2] = null);
(statearr_17337_18264[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17309 === 17))
{var inst_17261 = (state_17308[15]);var inst_17270 = cljs.core.first.call(null,inst_17261);var inst_17271 = cljs.core.async.muxch_STAR_.call(null,inst_17270);var inst_17272 = cljs.core.async.close_BANG_.call(null,inst_17271);var inst_17273 = cljs.core.next.call(null,inst_17261);var inst_17247 = inst_17273;var inst_17248 = null;var inst_17249 = 0;var inst_17250 = 0;var state_17308__$1 = (function (){var statearr_17338 = state_17308;(statearr_17338[8] = inst_17249);
(statearr_17338[9] = inst_17247);
(statearr_17338[10] = inst_17248);
(statearr_17338[11] = inst_17250);
(statearr_17338[16] = inst_17272);
return statearr_17338;
})();var statearr_17339_18265 = state_17308__$1;(statearr_17339_18265[2] = null);
(statearr_17339_18265[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17309 === 18))
{var inst_17276 = (state_17308[2]);var state_17308__$1 = state_17308;var statearr_17340_18266 = state_17308__$1;(statearr_17340_18266[2] = inst_17276);
(statearr_17340_18266[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17309 === 19))
{var state_17308__$1 = state_17308;var statearr_17341_18267 = state_17308__$1;(statearr_17341_18267[2] = null);
(statearr_17341_18267[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17309 === 20))
{var state_17308__$1 = state_17308;var statearr_17342_18268 = state_17308__$1;(statearr_17342_18268[2] = null);
(statearr_17342_18268[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17309 === 21))
{var inst_17301 = (state_17308[2]);var state_17308__$1 = (function (){var statearr_17343 = state_17308;(statearr_17343[17] = inst_17301);
return statearr_17343;
})();var statearr_17344_18269 = state_17308__$1;(statearr_17344_18269[2] = null);
(statearr_17344_18269[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17309 === 22))
{var inst_17298 = (state_17308[2]);var state_17308__$1 = state_17308;var statearr_17345_18270 = state_17308__$1;(statearr_17345_18270[2] = inst_17298);
(statearr_17345_18270[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17309 === 23))
{var inst_17285 = (state_17308[12]);var inst_17289 = (state_17308[2]);var inst_17290 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_17285);var state_17308__$1 = (function (){var statearr_17346 = state_17308;(statearr_17346[18] = inst_17289);
return statearr_17346;
})();var statearr_17347_18271 = state_17308__$1;(statearr_17347_18271[2] = inst_17290);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17308__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17309 === 24))
{var inst_17237 = (state_17308[7]);var inst_17287 = (state_17308[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17308,23,Object,null,22);var inst_17294 = cljs.core.async.muxch_STAR_.call(null,inst_17287);var state_17308__$1 = state_17308;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17308__$1,25,inst_17294,inst_17237);
} else
{if((state_val_17309 === 25))
{var inst_17296 = (state_17308[2]);var state_17308__$1 = state_17308;var statearr_17348_18272 = state_17308__$1;(statearr_17348_18272[2] = inst_17296);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17308__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13487__auto___18245,mults,ensure_mult,p))
;return ((function (switch__13417__auto__,c__13487__auto___18245,mults,ensure_mult,p){
return (function() {
var state_machine__13418__auto__ = null;
var state_machine__13418__auto____0 = (function (){var statearr_17352 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17352[0] = state_machine__13418__auto__);
(statearr_17352[1] = 1);
return statearr_17352;
});
var state_machine__13418__auto____1 = (function (state_17308){while(true){
var ret_value__13419__auto__ = (function (){try{while(true){
var result__13420__auto__ = switch__13417__auto__.call(null,state_17308);if(cljs.core.keyword_identical_QMARK_.call(null,result__13420__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13420__auto__;
}
break;
}
}catch (e17353){if((e17353 instanceof Object))
{var ex__13421__auto__ = e17353;var statearr_17354_18273 = state_17308;(statearr_17354_18273[5] = ex__13421__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17308);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17353;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13419__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18274 = state_17308;
state_17308 = G__18274;
continue;
}
} else
{return ret_value__13419__auto__;
}
break;
}
});
state_machine__13418__auto__ = function(state_17308){
switch(arguments.length){
case 0:
return state_machine__13418__auto____0.call(this);
case 1:
return state_machine__13418__auto____1.call(this,state_17308);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13418__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13418__auto____0;
state_machine__13418__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13418__auto____1;
return state_machine__13418__auto__;
})()
;})(switch__13417__auto__,c__13487__auto___18245,mults,ensure_mult,p))
})();var state__13489__auto__ = (function (){var statearr_17355 = f__13488__auto__.call(null);(statearr_17355[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13487__auto___18245);
return statearr_17355;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13489__auto__);
});})(c__13487__auto___18245,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__13487__auto___18275 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13487__auto___18275,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__13488__auto__ = (function (){var switch__13417__auto__ = ((function (c__13487__auto___18275,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_17462){var state_val_17463 = (state_17462[1]);if((state_val_17463 === 1))
{var state_17462__$1 = state_17462;var statearr_17464_18276 = state_17462__$1;(statearr_17464_18276[2] = null);
(statearr_17464_18276[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17463 === 2))
{var inst_17425 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_17426 = 0;var state_17462__$1 = (function (){var statearr_17465 = state_17462;(statearr_17465[7] = inst_17426);
(statearr_17465[8] = inst_17425);
return statearr_17465;
})();var statearr_17466_18277 = state_17462__$1;(statearr_17466_18277[2] = null);
(statearr_17466_18277[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17463 === 3))
{var inst_17460 = (state_17462[2]);var state_17462__$1 = state_17462;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17462__$1,inst_17460);
} else
{if((state_val_17463 === 4))
{var inst_17426 = (state_17462[7]);var inst_17428 = (inst_17426 < cnt);var state_17462__$1 = state_17462;if(cljs.core.truth_(inst_17428))
{var statearr_17467_18278 = state_17462__$1;(statearr_17467_18278[1] = 6);
} else
{var statearr_17468_18279 = state_17462__$1;(statearr_17468_18279[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17463 === 5))
{var inst_17446 = (state_17462[2]);var state_17462__$1 = (function (){var statearr_17469 = state_17462;(statearr_17469[9] = inst_17446);
return statearr_17469;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17462__$1,12,dchan);
} else
{if((state_val_17463 === 6))
{var state_17462__$1 = state_17462;var statearr_17470_18280 = state_17462__$1;(statearr_17470_18280[2] = null);
(statearr_17470_18280[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17463 === 7))
{var state_17462__$1 = state_17462;var statearr_17471_18281 = state_17462__$1;(statearr_17471_18281[2] = null);
(statearr_17471_18281[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17463 === 8))
{var inst_17444 = (state_17462[2]);var state_17462__$1 = state_17462;var statearr_17472_18282 = state_17462__$1;(statearr_17472_18282[2] = inst_17444);
(statearr_17472_18282[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17463 === 9))
{var inst_17426 = (state_17462[7]);var inst_17439 = (state_17462[2]);var inst_17440 = (inst_17426 + 1);var inst_17426__$1 = inst_17440;var state_17462__$1 = (function (){var statearr_17473 = state_17462;(statearr_17473[10] = inst_17439);
(statearr_17473[7] = inst_17426__$1);
return statearr_17473;
})();var statearr_17474_18283 = state_17462__$1;(statearr_17474_18283[2] = null);
(statearr_17474_18283[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17463 === 10))
{var inst_17430 = (state_17462[2]);var inst_17431 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_17462__$1 = (function (){var statearr_17475 = state_17462;(statearr_17475[11] = inst_17430);
return statearr_17475;
})();var statearr_17476_18284 = state_17462__$1;(statearr_17476_18284[2] = inst_17431);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17462__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17463 === 11))
{var inst_17426 = (state_17462[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17462,10,Object,null,9);var inst_17435 = chs__$1.call(null,inst_17426);var inst_17436 = done.call(null,inst_17426);var inst_17437 = cljs.core.async.take_BANG_.call(null,inst_17435,inst_17436);var state_17462__$1 = state_17462;var statearr_17477_18285 = state_17462__$1;(statearr_17477_18285[2] = inst_17437);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17462__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17463 === 12))
{var inst_17448 = (state_17462[12]);var inst_17448__$1 = (state_17462[2]);var inst_17449 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_17448__$1);var state_17462__$1 = (function (){var statearr_17478 = state_17462;(statearr_17478[12] = inst_17448__$1);
return statearr_17478;
})();if(cljs.core.truth_(inst_17449))
{var statearr_17479_18286 = state_17462__$1;(statearr_17479_18286[1] = 13);
} else
{var statearr_17480_18287 = state_17462__$1;(statearr_17480_18287[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17463 === 13))
{var inst_17451 = cljs.core.async.close_BANG_.call(null,out);var state_17462__$1 = state_17462;var statearr_17481_18288 = state_17462__$1;(statearr_17481_18288[2] = inst_17451);
(statearr_17481_18288[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17463 === 14))
{var inst_17448 = (state_17462[12]);var inst_17453 = cljs.core.apply.call(null,f,inst_17448);var state_17462__$1 = state_17462;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17462__$1,16,out,inst_17453);
} else
{if((state_val_17463 === 15))
{var inst_17458 = (state_17462[2]);var state_17462__$1 = state_17462;var statearr_17482_18289 = state_17462__$1;(statearr_17482_18289[2] = inst_17458);
(statearr_17482_18289[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17463 === 16))
{var inst_17455 = (state_17462[2]);var state_17462__$1 = (function (){var statearr_17483 = state_17462;(statearr_17483[13] = inst_17455);
return statearr_17483;
})();var statearr_17484_18290 = state_17462__$1;(statearr_17484_18290[2] = null);
(statearr_17484_18290[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13487__auto___18275,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__13417__auto__,c__13487__auto___18275,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__13418__auto__ = null;
var state_machine__13418__auto____0 = (function (){var statearr_17488 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17488[0] = state_machine__13418__auto__);
(statearr_17488[1] = 1);
return statearr_17488;
});
var state_machine__13418__auto____1 = (function (state_17462){while(true){
var ret_value__13419__auto__ = (function (){try{while(true){
var result__13420__auto__ = switch__13417__auto__.call(null,state_17462);if(cljs.core.keyword_identical_QMARK_.call(null,result__13420__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13420__auto__;
}
break;
}
}catch (e17489){if((e17489 instanceof Object))
{var ex__13421__auto__ = e17489;var statearr_17490_18291 = state_17462;(statearr_17490_18291[5] = ex__13421__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17462);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17489;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13419__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18292 = state_17462;
state_17462 = G__18292;
continue;
}
} else
{return ret_value__13419__auto__;
}
break;
}
});
state_machine__13418__auto__ = function(state_17462){
switch(arguments.length){
case 0:
return state_machine__13418__auto____0.call(this);
case 1:
return state_machine__13418__auto____1.call(this,state_17462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13418__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13418__auto____0;
state_machine__13418__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13418__auto____1;
return state_machine__13418__auto__;
})()
;})(switch__13417__auto__,c__13487__auto___18275,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__13489__auto__ = (function (){var statearr_17491 = f__13488__auto__.call(null);(statearr_17491[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13487__auto___18275);
return statearr_17491;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13489__auto__);
});})(c__13487__auto___18275,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13487__auto___18293 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13487__auto___18293,out){
return (function (){var f__13488__auto__ = (function (){var switch__13417__auto__ = ((function (c__13487__auto___18293,out){
return (function (state_17575){var state_val_17576 = (state_17575[1]);if((state_val_17576 === 1))
{var inst_17546 = cljs.core.vec.call(null,chs);var inst_17547 = inst_17546;var state_17575__$1 = (function (){var statearr_17577 = state_17575;(statearr_17577[7] = inst_17547);
return statearr_17577;
})();var statearr_17578_18294 = state_17575__$1;(statearr_17578_18294[2] = null);
(statearr_17578_18294[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17576 === 2))
{var inst_17547 = (state_17575[7]);var inst_17549 = cljs.core.count.call(null,inst_17547);var inst_17550 = (inst_17549 > 0);var state_17575__$1 = state_17575;if(cljs.core.truth_(inst_17550))
{var statearr_17579_18295 = state_17575__$1;(statearr_17579_18295[1] = 4);
} else
{var statearr_17580_18296 = state_17575__$1;(statearr_17580_18296[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17576 === 3))
{var inst_17573 = (state_17575[2]);var state_17575__$1 = state_17575;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17575__$1,inst_17573);
} else
{if((state_val_17576 === 4))
{var inst_17547 = (state_17575[7]);var state_17575__$1 = state_17575;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_17575__$1,7,inst_17547);
} else
{if((state_val_17576 === 5))
{var inst_17569 = cljs.core.async.close_BANG_.call(null,out);var state_17575__$1 = state_17575;var statearr_17581_18297 = state_17575__$1;(statearr_17581_18297[2] = inst_17569);
(statearr_17581_18297[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17576 === 6))
{var inst_17571 = (state_17575[2]);var state_17575__$1 = state_17575;var statearr_17582_18298 = state_17575__$1;(statearr_17582_18298[2] = inst_17571);
(statearr_17582_18298[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17576 === 7))
{var inst_17555 = (state_17575[8]);var inst_17554 = (state_17575[9]);var inst_17554__$1 = (state_17575[2]);var inst_17555__$1 = cljs.core.nth.call(null,inst_17554__$1,0,null);var inst_17556 = cljs.core.nth.call(null,inst_17554__$1,1,null);var inst_17557 = (inst_17555__$1 == null);var state_17575__$1 = (function (){var statearr_17583 = state_17575;(statearr_17583[8] = inst_17555__$1);
(statearr_17583[10] = inst_17556);
(statearr_17583[9] = inst_17554__$1);
return statearr_17583;
})();if(cljs.core.truth_(inst_17557))
{var statearr_17584_18299 = state_17575__$1;(statearr_17584_18299[1] = 8);
} else
{var statearr_17585_18300 = state_17575__$1;(statearr_17585_18300[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17576 === 8))
{var inst_17555 = (state_17575[8]);var inst_17556 = (state_17575[10]);var inst_17554 = (state_17575[9]);var inst_17547 = (state_17575[7]);var inst_17559 = (function (){var c = inst_17556;var v = inst_17555;var vec__17552 = inst_17554;var cs = inst_17547;return ((function (c,v,vec__17552,cs,inst_17555,inst_17556,inst_17554,inst_17547,state_val_17576,c__13487__auto___18293,out){
return (function (p1__17492_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__17492_SHARP_);
});
;})(c,v,vec__17552,cs,inst_17555,inst_17556,inst_17554,inst_17547,state_val_17576,c__13487__auto___18293,out))
})();var inst_17560 = cljs.core.filterv.call(null,inst_17559,inst_17547);var inst_17547__$1 = inst_17560;var state_17575__$1 = (function (){var statearr_17586 = state_17575;(statearr_17586[7] = inst_17547__$1);
return statearr_17586;
})();var statearr_17587_18301 = state_17575__$1;(statearr_17587_18301[2] = null);
(statearr_17587_18301[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17576 === 9))
{var inst_17555 = (state_17575[8]);var state_17575__$1 = state_17575;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17575__$1,11,out,inst_17555);
} else
{if((state_val_17576 === 10))
{var inst_17567 = (state_17575[2]);var state_17575__$1 = state_17575;var statearr_17589_18302 = state_17575__$1;(statearr_17589_18302[2] = inst_17567);
(statearr_17589_18302[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17576 === 11))
{var inst_17547 = (state_17575[7]);var inst_17564 = (state_17575[2]);var tmp17588 = inst_17547;var inst_17547__$1 = tmp17588;var state_17575__$1 = (function (){var statearr_17590 = state_17575;(statearr_17590[11] = inst_17564);
(statearr_17590[7] = inst_17547__$1);
return statearr_17590;
})();var statearr_17591_18303 = state_17575__$1;(statearr_17591_18303[2] = null);
(statearr_17591_18303[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__13487__auto___18293,out))
;return ((function (switch__13417__auto__,c__13487__auto___18293,out){
return (function() {
var state_machine__13418__auto__ = null;
var state_machine__13418__auto____0 = (function (){var statearr_17595 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17595[0] = state_machine__13418__auto__);
(statearr_17595[1] = 1);
return statearr_17595;
});
var state_machine__13418__auto____1 = (function (state_17575){while(true){
var ret_value__13419__auto__ = (function (){try{while(true){
var result__13420__auto__ = switch__13417__auto__.call(null,state_17575);if(cljs.core.keyword_identical_QMARK_.call(null,result__13420__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13420__auto__;
}
break;
}
}catch (e17596){if((e17596 instanceof Object))
{var ex__13421__auto__ = e17596;var statearr_17597_18304 = state_17575;(statearr_17597_18304[5] = ex__13421__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17575);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17596;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13419__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18305 = state_17575;
state_17575 = G__18305;
continue;
}
} else
{return ret_value__13419__auto__;
}
break;
}
});
state_machine__13418__auto__ = function(state_17575){
switch(arguments.length){
case 0:
return state_machine__13418__auto____0.call(this);
case 1:
return state_machine__13418__auto____1.call(this,state_17575);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13418__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13418__auto____0;
state_machine__13418__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13418__auto____1;
return state_machine__13418__auto__;
})()
;})(switch__13417__auto__,c__13487__auto___18293,out))
})();var state__13489__auto__ = (function (){var statearr_17598 = f__13488__auto__.call(null);(statearr_17598[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13487__auto___18293);
return statearr_17598;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13489__auto__);
});})(c__13487__auto___18293,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13487__auto___18306 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13487__auto___18306,out){
return (function (){var f__13488__auto__ = (function (){var switch__13417__auto__ = ((function (c__13487__auto___18306,out){
return (function (state_17668){var state_val_17669 = (state_17668[1]);if((state_val_17669 === 1))
{var inst_17645 = 0;var state_17668__$1 = (function (){var statearr_17670 = state_17668;(statearr_17670[7] = inst_17645);
return statearr_17670;
})();var statearr_17671_18307 = state_17668__$1;(statearr_17671_18307[2] = null);
(statearr_17671_18307[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17669 === 2))
{var inst_17645 = (state_17668[7]);var inst_17647 = (inst_17645 < n);var state_17668__$1 = state_17668;if(cljs.core.truth_(inst_17647))
{var statearr_17672_18308 = state_17668__$1;(statearr_17672_18308[1] = 4);
} else
{var statearr_17673_18309 = state_17668__$1;(statearr_17673_18309[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17669 === 3))
{var inst_17665 = (state_17668[2]);var inst_17666 = cljs.core.async.close_BANG_.call(null,out);var state_17668__$1 = (function (){var statearr_17674 = state_17668;(statearr_17674[8] = inst_17665);
return statearr_17674;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17668__$1,inst_17666);
} else
{if((state_val_17669 === 4))
{var state_17668__$1 = state_17668;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17668__$1,7,ch);
} else
{if((state_val_17669 === 5))
{var state_17668__$1 = state_17668;var statearr_17675_18310 = state_17668__$1;(statearr_17675_18310[2] = null);
(statearr_17675_18310[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17669 === 6))
{var inst_17663 = (state_17668[2]);var state_17668__$1 = state_17668;var statearr_17676_18311 = state_17668__$1;(statearr_17676_18311[2] = inst_17663);
(statearr_17676_18311[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17669 === 7))
{var inst_17650 = (state_17668[9]);var inst_17650__$1 = (state_17668[2]);var inst_17651 = (inst_17650__$1 == null);var inst_17652 = cljs.core.not.call(null,inst_17651);var state_17668__$1 = (function (){var statearr_17677 = state_17668;(statearr_17677[9] = inst_17650__$1);
return statearr_17677;
})();if(inst_17652)
{var statearr_17678_18312 = state_17668__$1;(statearr_17678_18312[1] = 8);
} else
{var statearr_17679_18313 = state_17668__$1;(statearr_17679_18313[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17669 === 8))
{var inst_17650 = (state_17668[9]);var state_17668__$1 = state_17668;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17668__$1,11,out,inst_17650);
} else
{if((state_val_17669 === 9))
{var state_17668__$1 = state_17668;var statearr_17680_18314 = state_17668__$1;(statearr_17680_18314[2] = null);
(statearr_17680_18314[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17669 === 10))
{var inst_17660 = (state_17668[2]);var state_17668__$1 = state_17668;var statearr_17681_18315 = state_17668__$1;(statearr_17681_18315[2] = inst_17660);
(statearr_17681_18315[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17669 === 11))
{var inst_17645 = (state_17668[7]);var inst_17655 = (state_17668[2]);var inst_17656 = (inst_17645 + 1);var inst_17645__$1 = inst_17656;var state_17668__$1 = (function (){var statearr_17682 = state_17668;(statearr_17682[7] = inst_17645__$1);
(statearr_17682[10] = inst_17655);
return statearr_17682;
})();var statearr_17683_18316 = state_17668__$1;(statearr_17683_18316[2] = null);
(statearr_17683_18316[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__13487__auto___18306,out))
;return ((function (switch__13417__auto__,c__13487__auto___18306,out){
return (function() {
var state_machine__13418__auto__ = null;
var state_machine__13418__auto____0 = (function (){var statearr_17687 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_17687[0] = state_machine__13418__auto__);
(statearr_17687[1] = 1);
return statearr_17687;
});
var state_machine__13418__auto____1 = (function (state_17668){while(true){
var ret_value__13419__auto__ = (function (){try{while(true){
var result__13420__auto__ = switch__13417__auto__.call(null,state_17668);if(cljs.core.keyword_identical_QMARK_.call(null,result__13420__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13420__auto__;
}
break;
}
}catch (e17688){if((e17688 instanceof Object))
{var ex__13421__auto__ = e17688;var statearr_17689_18317 = state_17668;(statearr_17689_18317[5] = ex__13421__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17668);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17688;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13419__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18318 = state_17668;
state_17668 = G__18318;
continue;
}
} else
{return ret_value__13419__auto__;
}
break;
}
});
state_machine__13418__auto__ = function(state_17668){
switch(arguments.length){
case 0:
return state_machine__13418__auto____0.call(this);
case 1:
return state_machine__13418__auto____1.call(this,state_17668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13418__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13418__auto____0;
state_machine__13418__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13418__auto____1;
return state_machine__13418__auto__;
})()
;})(switch__13417__auto__,c__13487__auto___18306,out))
})();var state__13489__auto__ = (function (){var statearr_17690 = f__13488__auto__.call(null);(statearr_17690[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13487__auto___18306);
return statearr_17690;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13489__auto__);
});})(c__13487__auto___18306,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13487__auto___18319 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13487__auto___18319,out){
return (function (){var f__13488__auto__ = (function (){var switch__13417__auto__ = ((function (c__13487__auto___18319,out){
return (function (state_17762){var state_val_17763 = (state_17762[1]);if((state_val_17763 === 1))
{var inst_17739 = null;var state_17762__$1 = (function (){var statearr_17764 = state_17762;(statearr_17764[7] = inst_17739);
return statearr_17764;
})();var statearr_17765_18320 = state_17762__$1;(statearr_17765_18320[2] = null);
(statearr_17765_18320[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17763 === 2))
{var state_17762__$1 = state_17762;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17762__$1,4,ch);
} else
{if((state_val_17763 === 3))
{var inst_17759 = (state_17762[2]);var inst_17760 = cljs.core.async.close_BANG_.call(null,out);var state_17762__$1 = (function (){var statearr_17766 = state_17762;(statearr_17766[8] = inst_17759);
return statearr_17766;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17762__$1,inst_17760);
} else
{if((state_val_17763 === 4))
{var inst_17742 = (state_17762[9]);var inst_17742__$1 = (state_17762[2]);var inst_17743 = (inst_17742__$1 == null);var inst_17744 = cljs.core.not.call(null,inst_17743);var state_17762__$1 = (function (){var statearr_17767 = state_17762;(statearr_17767[9] = inst_17742__$1);
return statearr_17767;
})();if(inst_17744)
{var statearr_17768_18321 = state_17762__$1;(statearr_17768_18321[1] = 5);
} else
{var statearr_17769_18322 = state_17762__$1;(statearr_17769_18322[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17763 === 5))
{var inst_17739 = (state_17762[7]);var inst_17742 = (state_17762[9]);var inst_17746 = cljs.core._EQ_.call(null,inst_17742,inst_17739);var state_17762__$1 = state_17762;if(inst_17746)
{var statearr_17770_18323 = state_17762__$1;(statearr_17770_18323[1] = 8);
} else
{var statearr_17771_18324 = state_17762__$1;(statearr_17771_18324[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17763 === 6))
{var state_17762__$1 = state_17762;var statearr_17773_18325 = state_17762__$1;(statearr_17773_18325[2] = null);
(statearr_17773_18325[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17763 === 7))
{var inst_17757 = (state_17762[2]);var state_17762__$1 = state_17762;var statearr_17774_18326 = state_17762__$1;(statearr_17774_18326[2] = inst_17757);
(statearr_17774_18326[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17763 === 8))
{var inst_17739 = (state_17762[7]);var tmp17772 = inst_17739;var inst_17739__$1 = tmp17772;var state_17762__$1 = (function (){var statearr_17775 = state_17762;(statearr_17775[7] = inst_17739__$1);
return statearr_17775;
})();var statearr_17776_18327 = state_17762__$1;(statearr_17776_18327[2] = null);
(statearr_17776_18327[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17763 === 9))
{var inst_17742 = (state_17762[9]);var state_17762__$1 = state_17762;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17762__$1,11,out,inst_17742);
} else
{if((state_val_17763 === 10))
{var inst_17754 = (state_17762[2]);var state_17762__$1 = state_17762;var statearr_17777_18328 = state_17762__$1;(statearr_17777_18328[2] = inst_17754);
(statearr_17777_18328[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17763 === 11))
{var inst_17742 = (state_17762[9]);var inst_17751 = (state_17762[2]);var inst_17739 = inst_17742;var state_17762__$1 = (function (){var statearr_17778 = state_17762;(statearr_17778[10] = inst_17751);
(statearr_17778[7] = inst_17739);
return statearr_17778;
})();var statearr_17779_18329 = state_17762__$1;(statearr_17779_18329[2] = null);
(statearr_17779_18329[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__13487__auto___18319,out))
;return ((function (switch__13417__auto__,c__13487__auto___18319,out){
return (function() {
var state_machine__13418__auto__ = null;
var state_machine__13418__auto____0 = (function (){var statearr_17783 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_17783[0] = state_machine__13418__auto__);
(statearr_17783[1] = 1);
return statearr_17783;
});
var state_machine__13418__auto____1 = (function (state_17762){while(true){
var ret_value__13419__auto__ = (function (){try{while(true){
var result__13420__auto__ = switch__13417__auto__.call(null,state_17762);if(cljs.core.keyword_identical_QMARK_.call(null,result__13420__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13420__auto__;
}
break;
}
}catch (e17784){if((e17784 instanceof Object))
{var ex__13421__auto__ = e17784;var statearr_17785_18330 = state_17762;(statearr_17785_18330[5] = ex__13421__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17762);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17784;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13419__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18331 = state_17762;
state_17762 = G__18331;
continue;
}
} else
{return ret_value__13419__auto__;
}
break;
}
});
state_machine__13418__auto__ = function(state_17762){
switch(arguments.length){
case 0:
return state_machine__13418__auto____0.call(this);
case 1:
return state_machine__13418__auto____1.call(this,state_17762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13418__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13418__auto____0;
state_machine__13418__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13418__auto____1;
return state_machine__13418__auto__;
})()
;})(switch__13417__auto__,c__13487__auto___18319,out))
})();var state__13489__auto__ = (function (){var statearr_17786 = f__13488__auto__.call(null);(statearr_17786[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13487__auto___18319);
return statearr_17786;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13489__auto__);
});})(c__13487__auto___18319,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13487__auto___18332 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13487__auto___18332,out){
return (function (){var f__13488__auto__ = (function (){var switch__13417__auto__ = ((function (c__13487__auto___18332,out){
return (function (state_17891){var state_val_17892 = (state_17891[1]);if((state_val_17892 === 1))
{var inst_17854 = (new Array(n));var inst_17855 = inst_17854;var inst_17856 = 0;var state_17891__$1 = (function (){var statearr_17893 = state_17891;(statearr_17893[7] = inst_17856);
(statearr_17893[8] = inst_17855);
return statearr_17893;
})();var statearr_17894_18333 = state_17891__$1;(statearr_17894_18333[2] = null);
(statearr_17894_18333[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17892 === 2))
{var state_17891__$1 = state_17891;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17891__$1,4,ch);
} else
{if((state_val_17892 === 3))
{var inst_17889 = (state_17891[2]);var state_17891__$1 = state_17891;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17891__$1,inst_17889);
} else
{if((state_val_17892 === 4))
{var inst_17859 = (state_17891[9]);var inst_17859__$1 = (state_17891[2]);var inst_17860 = (inst_17859__$1 == null);var inst_17861 = cljs.core.not.call(null,inst_17860);var state_17891__$1 = (function (){var statearr_17895 = state_17891;(statearr_17895[9] = inst_17859__$1);
return statearr_17895;
})();if(inst_17861)
{var statearr_17896_18334 = state_17891__$1;(statearr_17896_18334[1] = 5);
} else
{var statearr_17897_18335 = state_17891__$1;(statearr_17897_18335[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17892 === 5))
{var inst_17859 = (state_17891[9]);var inst_17864 = (state_17891[10]);var inst_17856 = (state_17891[7]);var inst_17855 = (state_17891[8]);var inst_17863 = (inst_17855[inst_17856] = inst_17859);var inst_17864__$1 = (inst_17856 + 1);var inst_17865 = (inst_17864__$1 < n);var state_17891__$1 = (function (){var statearr_17898 = state_17891;(statearr_17898[11] = inst_17863);
(statearr_17898[10] = inst_17864__$1);
return statearr_17898;
})();if(cljs.core.truth_(inst_17865))
{var statearr_17899_18336 = state_17891__$1;(statearr_17899_18336[1] = 8);
} else
{var statearr_17900_18337 = state_17891__$1;(statearr_17900_18337[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17892 === 6))
{var inst_17856 = (state_17891[7]);var inst_17877 = (inst_17856 > 0);var state_17891__$1 = state_17891;if(cljs.core.truth_(inst_17877))
{var statearr_17902_18338 = state_17891__$1;(statearr_17902_18338[1] = 12);
} else
{var statearr_17903_18339 = state_17891__$1;(statearr_17903_18339[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17892 === 7))
{var inst_17887 = (state_17891[2]);var state_17891__$1 = state_17891;var statearr_17904_18340 = state_17891__$1;(statearr_17904_18340[2] = inst_17887);
(statearr_17904_18340[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17892 === 8))
{var inst_17864 = (state_17891[10]);var inst_17855 = (state_17891[8]);var tmp17901 = inst_17855;var inst_17855__$1 = tmp17901;var inst_17856 = inst_17864;var state_17891__$1 = (function (){var statearr_17905 = state_17891;(statearr_17905[7] = inst_17856);
(statearr_17905[8] = inst_17855__$1);
return statearr_17905;
})();var statearr_17906_18341 = state_17891__$1;(statearr_17906_18341[2] = null);
(statearr_17906_18341[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17892 === 9))
{var inst_17855 = (state_17891[8]);var inst_17869 = cljs.core.vec.call(null,inst_17855);var state_17891__$1 = state_17891;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17891__$1,11,out,inst_17869);
} else
{if((state_val_17892 === 10))
{var inst_17875 = (state_17891[2]);var state_17891__$1 = state_17891;var statearr_17907_18342 = state_17891__$1;(statearr_17907_18342[2] = inst_17875);
(statearr_17907_18342[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17892 === 11))
{var inst_17871 = (state_17891[2]);var inst_17872 = (new Array(n));var inst_17855 = inst_17872;var inst_17856 = 0;var state_17891__$1 = (function (){var statearr_17908 = state_17891;(statearr_17908[12] = inst_17871);
(statearr_17908[7] = inst_17856);
(statearr_17908[8] = inst_17855);
return statearr_17908;
})();var statearr_17909_18343 = state_17891__$1;(statearr_17909_18343[2] = null);
(statearr_17909_18343[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17892 === 12))
{var inst_17855 = (state_17891[8]);var inst_17879 = cljs.core.vec.call(null,inst_17855);var state_17891__$1 = state_17891;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17891__$1,15,out,inst_17879);
} else
{if((state_val_17892 === 13))
{var state_17891__$1 = state_17891;var statearr_17910_18344 = state_17891__$1;(statearr_17910_18344[2] = null);
(statearr_17910_18344[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17892 === 14))
{var inst_17884 = (state_17891[2]);var inst_17885 = cljs.core.async.close_BANG_.call(null,out);var state_17891__$1 = (function (){var statearr_17911 = state_17891;(statearr_17911[13] = inst_17884);
return statearr_17911;
})();var statearr_17912_18345 = state_17891__$1;(statearr_17912_18345[2] = inst_17885);
(statearr_17912_18345[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17892 === 15))
{var inst_17881 = (state_17891[2]);var state_17891__$1 = state_17891;var statearr_17913_18346 = state_17891__$1;(statearr_17913_18346[2] = inst_17881);
(statearr_17913_18346[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13487__auto___18332,out))
;return ((function (switch__13417__auto__,c__13487__auto___18332,out){
return (function() {
var state_machine__13418__auto__ = null;
var state_machine__13418__auto____0 = (function (){var statearr_17917 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17917[0] = state_machine__13418__auto__);
(statearr_17917[1] = 1);
return statearr_17917;
});
var state_machine__13418__auto____1 = (function (state_17891){while(true){
var ret_value__13419__auto__ = (function (){try{while(true){
var result__13420__auto__ = switch__13417__auto__.call(null,state_17891);if(cljs.core.keyword_identical_QMARK_.call(null,result__13420__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13420__auto__;
}
break;
}
}catch (e17918){if((e17918 instanceof Object))
{var ex__13421__auto__ = e17918;var statearr_17919_18347 = state_17891;(statearr_17919_18347[5] = ex__13421__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17891);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17918;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13419__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18348 = state_17891;
state_17891 = G__18348;
continue;
}
} else
{return ret_value__13419__auto__;
}
break;
}
});
state_machine__13418__auto__ = function(state_17891){
switch(arguments.length){
case 0:
return state_machine__13418__auto____0.call(this);
case 1:
return state_machine__13418__auto____1.call(this,state_17891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13418__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13418__auto____0;
state_machine__13418__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13418__auto____1;
return state_machine__13418__auto__;
})()
;})(switch__13417__auto__,c__13487__auto___18332,out))
})();var state__13489__auto__ = (function (){var statearr_17920 = f__13488__auto__.call(null);(statearr_17920[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13487__auto___18332);
return statearr_17920;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13489__auto__);
});})(c__13487__auto___18332,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13487__auto___18349 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13487__auto___18349,out){
return (function (){var f__13488__auto__ = (function (){var switch__13417__auto__ = ((function (c__13487__auto___18349,out){
return (function (state_18033){var state_val_18034 = (state_18033[1]);if((state_val_18034 === 1))
{var inst_17992 = [];var inst_17993 = inst_17992;var inst_17994 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_18033__$1 = (function (){var statearr_18035 = state_18033;(statearr_18035[7] = inst_17993);
(statearr_18035[8] = inst_17994);
return statearr_18035;
})();var statearr_18036_18350 = state_18033__$1;(statearr_18036_18350[2] = null);
(statearr_18036_18350[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18034 === 2))
{var state_18033__$1 = state_18033;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18033__$1,4,ch);
} else
{if((state_val_18034 === 3))
{var inst_18031 = (state_18033[2]);var state_18033__$1 = state_18033;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18033__$1,inst_18031);
} else
{if((state_val_18034 === 4))
{var inst_17997 = (state_18033[9]);var inst_17997__$1 = (state_18033[2]);var inst_17998 = (inst_17997__$1 == null);var inst_17999 = cljs.core.not.call(null,inst_17998);var state_18033__$1 = (function (){var statearr_18037 = state_18033;(statearr_18037[9] = inst_17997__$1);
return statearr_18037;
})();if(inst_17999)
{var statearr_18038_18351 = state_18033__$1;(statearr_18038_18351[1] = 5);
} else
{var statearr_18039_18352 = state_18033__$1;(statearr_18039_18352[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18034 === 5))
{var inst_17994 = (state_18033[8]);var inst_18001 = (state_18033[10]);var inst_17997 = (state_18033[9]);var inst_18001__$1 = f.call(null,inst_17997);var inst_18002 = cljs.core._EQ_.call(null,inst_18001__$1,inst_17994);var inst_18003 = cljs.core.keyword_identical_QMARK_.call(null,inst_17994,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_18004 = (inst_18002) || (inst_18003);var state_18033__$1 = (function (){var statearr_18040 = state_18033;(statearr_18040[10] = inst_18001__$1);
return statearr_18040;
})();if(cljs.core.truth_(inst_18004))
{var statearr_18041_18353 = state_18033__$1;(statearr_18041_18353[1] = 8);
} else
{var statearr_18042_18354 = state_18033__$1;(statearr_18042_18354[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18034 === 6))
{var inst_17993 = (state_18033[7]);var inst_18018 = inst_17993.length;var inst_18019 = (inst_18018 > 0);var state_18033__$1 = state_18033;if(cljs.core.truth_(inst_18019))
{var statearr_18044_18355 = state_18033__$1;(statearr_18044_18355[1] = 12);
} else
{var statearr_18045_18356 = state_18033__$1;(statearr_18045_18356[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18034 === 7))
{var inst_18029 = (state_18033[2]);var state_18033__$1 = state_18033;var statearr_18046_18357 = state_18033__$1;(statearr_18046_18357[2] = inst_18029);
(statearr_18046_18357[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18034 === 8))
{var inst_17993 = (state_18033[7]);var inst_18001 = (state_18033[10]);var inst_17997 = (state_18033[9]);var inst_18006 = inst_17993.push(inst_17997);var tmp18043 = inst_17993;var inst_17993__$1 = tmp18043;var inst_17994 = inst_18001;var state_18033__$1 = (function (){var statearr_18047 = state_18033;(statearr_18047[11] = inst_18006);
(statearr_18047[7] = inst_17993__$1);
(statearr_18047[8] = inst_17994);
return statearr_18047;
})();var statearr_18048_18358 = state_18033__$1;(statearr_18048_18358[2] = null);
(statearr_18048_18358[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18034 === 9))
{var inst_17993 = (state_18033[7]);var inst_18009 = cljs.core.vec.call(null,inst_17993);var state_18033__$1 = state_18033;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18033__$1,11,out,inst_18009);
} else
{if((state_val_18034 === 10))
{var inst_18016 = (state_18033[2]);var state_18033__$1 = state_18033;var statearr_18049_18359 = state_18033__$1;(statearr_18049_18359[2] = inst_18016);
(statearr_18049_18359[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18034 === 11))
{var inst_18001 = (state_18033[10]);var inst_17997 = (state_18033[9]);var inst_18011 = (state_18033[2]);var inst_18012 = [];var inst_18013 = inst_18012.push(inst_17997);var inst_17993 = inst_18012;var inst_17994 = inst_18001;var state_18033__$1 = (function (){var statearr_18050 = state_18033;(statearr_18050[7] = inst_17993);
(statearr_18050[8] = inst_17994);
(statearr_18050[12] = inst_18011);
(statearr_18050[13] = inst_18013);
return statearr_18050;
})();var statearr_18051_18360 = state_18033__$1;(statearr_18051_18360[2] = null);
(statearr_18051_18360[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18034 === 12))
{var inst_17993 = (state_18033[7]);var inst_18021 = cljs.core.vec.call(null,inst_17993);var state_18033__$1 = state_18033;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18033__$1,15,out,inst_18021);
} else
{if((state_val_18034 === 13))
{var state_18033__$1 = state_18033;var statearr_18052_18361 = state_18033__$1;(statearr_18052_18361[2] = null);
(statearr_18052_18361[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18034 === 14))
{var inst_18026 = (state_18033[2]);var inst_18027 = cljs.core.async.close_BANG_.call(null,out);var state_18033__$1 = (function (){var statearr_18053 = state_18033;(statearr_18053[14] = inst_18026);
return statearr_18053;
})();var statearr_18054_18362 = state_18033__$1;(statearr_18054_18362[2] = inst_18027);
(statearr_18054_18362[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18034 === 15))
{var inst_18023 = (state_18033[2]);var state_18033__$1 = state_18033;var statearr_18055_18363 = state_18033__$1;(statearr_18055_18363[2] = inst_18023);
(statearr_18055_18363[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13487__auto___18349,out))
;return ((function (switch__13417__auto__,c__13487__auto___18349,out){
return (function() {
var state_machine__13418__auto__ = null;
var state_machine__13418__auto____0 = (function (){var statearr_18059 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18059[0] = state_machine__13418__auto__);
(statearr_18059[1] = 1);
return statearr_18059;
});
var state_machine__13418__auto____1 = (function (state_18033){while(true){
var ret_value__13419__auto__ = (function (){try{while(true){
var result__13420__auto__ = switch__13417__auto__.call(null,state_18033);if(cljs.core.keyword_identical_QMARK_.call(null,result__13420__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13420__auto__;
}
break;
}
}catch (e18060){if((e18060 instanceof Object))
{var ex__13421__auto__ = e18060;var statearr_18061_18364 = state_18033;(statearr_18061_18364[5] = ex__13421__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18033);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18060;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13419__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18365 = state_18033;
state_18033 = G__18365;
continue;
}
} else
{return ret_value__13419__auto__;
}
break;
}
});
state_machine__13418__auto__ = function(state_18033){
switch(arguments.length){
case 0:
return state_machine__13418__auto____0.call(this);
case 1:
return state_machine__13418__auto____1.call(this,state_18033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13418__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13418__auto____0;
state_machine__13418__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13418__auto____1;
return state_machine__13418__auto__;
})()
;})(switch__13417__auto__,c__13487__auto___18349,out))
})();var state__13489__auto__ = (function (){var statearr_18062 = f__13488__auto__.call(null);(statearr_18062[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13487__auto___18349);
return statearr_18062;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13489__auto__);
});})(c__13487__auto___18349,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
}
if(!lt.util.load.provided_QMARK_('quiescent')) {
goog.provide('quiescent');
goog.require('cljs.core');
/**
* Utility function. Takes an object which is (possibly) a
* ClojureScript map. If the value is a ClojureScript map, convert it
* to a JavaScript properties object. Otherwise, return the argument
* unchanged.
*/
quiescent.js_props = (function js_props(obj){if(cljs.core.map_QMARK_.call(null,obj))
{var o = (function (){var obj11710 = {};return obj11710;
})();var seq__11711_11724 = cljs.core.seq.call(null,obj);var chunk__11712_11725 = null;var count__11713_11726 = 0;var i__11714_11727 = 0;while(true){
if((i__11714_11727 < count__11713_11726))
{var vec__11715_11728 = cljs.core._nth.call(null,chunk__11712_11725,i__11714_11727);var k_11729 = cljs.core.nth.call(null,vec__11715_11728,0,null);var v_11730 = cljs.core.nth.call(null,vec__11715_11728,1,null);(o[cljs.core.name.call(null,k_11729)] = js_props.call(null,v_11730));
{
var G__11731 = seq__11711_11724;
var G__11732 = chunk__11712_11725;
var G__11733 = count__11713_11726;
var G__11734 = (i__11714_11727 + 1);
seq__11711_11724 = G__11731;
chunk__11712_11725 = G__11732;
count__11713_11726 = G__11733;
i__11714_11727 = G__11734;
continue;
}
} else
{var temp__4092__auto___11735 = cljs.core.seq.call(null,seq__11711_11724);if(temp__4092__auto___11735)
{var seq__11711_11736__$1 = temp__4092__auto___11735;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11711_11736__$1))
{var c__5632__auto___11737 = cljs.core.chunk_first.call(null,seq__11711_11736__$1);{
var G__11738 = cljs.core.chunk_rest.call(null,seq__11711_11736__$1);
var G__11739 = c__5632__auto___11737;
var G__11740 = cljs.core.count.call(null,c__5632__auto___11737);
var G__11741 = 0;
seq__11711_11724 = G__11738;
chunk__11712_11725 = G__11739;
count__11713_11726 = G__11740;
i__11714_11727 = G__11741;
continue;
}
} else
{var vec__11716_11742 = cljs.core.first.call(null,seq__11711_11736__$1);var k_11743 = cljs.core.nth.call(null,vec__11716_11742,0,null);var v_11744 = cljs.core.nth.call(null,vec__11716_11742,1,null);(o[cljs.core.name.call(null,k_11743)] = js_props.call(null,v_11744));
{
var G__11745 = cljs.core.next.call(null,seq__11711_11736__$1);
var G__11746 = null;
var G__11747 = 0;
var G__11748 = 0;
seq__11711_11724 = G__11745;
chunk__11712_11725 = G__11746;
count__11713_11726 = G__11747;
i__11714_11727 = G__11748;
continue;
}
}
} else
{}
}
break;
}
return o;
} else
{return obj;
}
});
/**
* Within a component render function, will be bound to the raw
* ReactJS component.
*/
quiescent._STAR_component_STAR_ = null;
/**
* Return a function that will return a ReactJS component, using the
* provided function as the implementation for React's 'render' method
* on the component.
* 
* The given render function should take a single immutable value as
* its first argument, and return a single ReactJS component.
* Additional arguments to the component constructor will be passed as
* additional arguments to the render function whenever it is invoked,
* but will *not* be included in any calculations regarding whether the
* component should re-render.
*/
quiescent.component = (function component(renderer){var react_component = React.createClass({"render": (function (){var this$ = this;var _STAR_component_STAR_11718 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return cljs.core.apply.call(null,renderer,(this$.props["value"]),(this$.props["statics"]));
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11718;
}}), "shouldComponentUpdate": (function (next_props,_){var this$ = this;return cljs.core.not_EQ_.call(null,(this$.props["value"]),(next_props["value"]));
})});return ((function (react_component){
return (function() { 
var G__11749__delegate = function (value,static_args){return react_component.call(null,{"statics": static_args, "value": value});
};
var G__11749 = function (value,var_args){
var static_args = null;if (arguments.length > 1) {
  static_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__11749__delegate.call(this,value,static_args);};
G__11749.cljs$lang$maxFixedArity = 1;
G__11749.cljs$lang$applyTo = (function (arglist__11750){
var value = cljs.core.first(arglist__11750);
var static_args = cljs.core.rest(arglist__11750);
return G__11749__delegate(value,static_args);
});
G__11749.cljs$core$IFn$_invoke$arity$variadic = G__11749__delegate;
return G__11749;
})()
;
;})(react_component))
});
/**
* Wrapper component used to mix-in lifecycle access
*/
quiescent.WrapperComponent = React.createClass({"componentWillUnmount": (function (){var this$ = this;var temp__4092__auto__ = (this$.props["onWillUnmount"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_11723 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null);
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11723;
}} else
{return null;
}
}), "componentWillUpdate": (function (_,___$1){var this$ = this;var temp__4092__auto__ = (this$.props["onWillUpdate"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_11722 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null);
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11722;
}} else
{return null;
}
}), "componentWillMount": (function (){var this$ = this;var temp__4092__auto__ = (this$.props["onWillMount"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_11721 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null);
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11721;
}} else
{return null;
}
}), "componentDidMount": (function (){var this$ = this;var temp__4092__auto__ = (this$.props["onMount"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_11720 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null,this$.getDOMNode());
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11720;
}} else
{return null;
}
}), "componentDidUpdate": (function (prev_props,prev_state){var this$ = this;var temp__4092__auto__ = (this$.props["onUpdate"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_11719 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null,this$.getDOMNode());
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11719;
}} else
{return null;
}
}), "render": (function (){var this$ = this;return (this$.props["wrappee"]);
})});
/**
* Create a wrapper function for a compoment implementing multiple
* lifecycle functions. Lifecycle functions are specified as any number
* of additional key-value pairs passed as arguments to this function.
* 
* Valid keys and values include:
* 
* :onUpdate - will call the provided function,
* passing the rendered DOM node as a single arg
* :onMount - will call the provided function,
* passing the rendered DOM node as a single arg
* :onWillUpdate - will call the provided function with no arguments
* :onWillMount - will call the provided function with no arguments
* :onWillUnmount - will call the provided function with no arguments
* @param {...*} var_args
*/
quiescent.wrapper = (function() { 
var wrapper__delegate = function (child,kvs){var props = quiescent.js_props.call(null,cljs.core.apply.call(null,cljs.core.array_map,new cljs.core.Keyword(null,"wrappee","wrappee",2609412088),child,kvs));var temp__4092__auto___11751 = (child.props["key"]);if(cljs.core.truth_(temp__4092__auto___11751))
{var key_11752 = temp__4092__auto___11751;(props["key"] = key_11752);
} else
{}
return quiescent.WrapperComponent.call(null,props);
};
var wrapper = function (child,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrapper__delegate.call(this,child,kvs);};
wrapper.cljs$lang$maxFixedArity = 1;
wrapper.cljs$lang$applyTo = (function (arglist__11753){
var child = cljs.core.first(arglist__11753);
var kvs = cljs.core.rest(arglist__11753);
return wrapper__delegate(child,kvs);
});
wrapper.cljs$core$IFn$_invoke$arity$variadic = wrapper__delegate;
return wrapper;
})()
;
/**
* Wrap a component, specifying a function to be called on the
* componentDidUpdate lifecycle event.
* 
* The function will be passed the rendered DOM node.
*/
quiescent.on_update = (function on_update(child,f){return quiescent.wrapper.call(null,child,new cljs.core.Keyword(null,"onUpdate","onUpdate",2573468410),f);
});
/**
* Wrap a component, specifying a function to be called on the
* componentDidMount lifecycle event.
* 
* The function will be passed the rendered DOM node.
*/
quiescent.on_mount = (function on_mount(child,f){return quiescent.wrapper.call(null,child,new cljs.core.Keyword(null,"onMount","onMount",3966305516),f);
});
/**
* Wrap a component, specifying a function to be called on the
* componentDidMount AND the componentDidUpdate lifecycle events.
* 
* The function will be passed the rendered DOM node.
*/
quiescent.on_render = (function on_render(child,f){return quiescent.wrapper.call(null,child,new cljs.core.Keyword(null,"onMount","onMount",3966305516),f,new cljs.core.Keyword(null,"onUpdate","onUpdate",2573468410),f);
});
/**
* Wrap a component, specifying a function to be called on the
* componentWillMount lifecycle event.
* 
* The function will be called with no arguments.
*/
quiescent.on_will_mount = (function on_will_mount(child,f){return quiescent.wrapper.call(null,child,new cljs.core.Keyword(null,"onWillMount","onWillMount",3483492282),f);
});
/**
* Wrap a component, specifying a function to be called on the
* componentWillUpdate lifecycle event.
* 
* The function will be called with no arguments.
*/
quiescent.on_will_update = (function on_will_update(child,f){return quiescent.wrapper.call(null,child,new cljs.core.Keyword(null,"onWillUpdate","onWillUpdate",4786127340),f);
});
/**
* Wrap a component, specifying a function to be called on the
* componentWillMount AND the componentWillUpdate lifecycle events.
* 
* The function will be called with no arguments.
*/
quiescent.on_will_render = (function on_will_render(child,f){return quiescent.wrapper.call(null,child,new cljs.core.Keyword(null,"onWillMount","onWillMount",3483492282),f,new cljs.core.Keyword(null,"onWillUpdate","onWillUpdate",4786127340),f);
});
/**
* Wrap a component, specifying a function to be called on the
* componentWillUnmount lifecycle event.
* 
* The function will be called with no arguments.
*/
quiescent.on_will_unmount = (function on_will_unmount(child,f){return quiescent.wrapper.call(null,child,new cljs.core.Keyword(null,"onWillUnmount","onWillUnmount",1940175105),f);
});
/**
* Given a ReactJS component, immediately render it, rooted to the
* specified DOM node.
*/
quiescent.render = (function render(component,node){return React.renderComponent(component,node);
});
}
if(!lt.util.load.provided_QMARK_('quiescent.dom')) {
goog.provide('quiescent.dom');
goog.require('cljs.core');
goog.require('quiescent');
goog.require('quiescent');
/**
* @param {...*} var_args
*/
quiescent.dom.a = (function() { 
var a__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8135_9083 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8136_9084 = null;var count__8137_9085 = 0;var i__8138_9086 = 0;while(true){
if((i__8138_9086 < count__8137_9085))
{var arg__7135__auto___9087 = cljs.core._nth.call(null,chunk__8136_9084,i__8138_9086);a__7134__auto__.push(arg__7135__auto___9087);
{
var G__9088 = seq__8135_9083;
var G__9089 = chunk__8136_9084;
var G__9090 = count__8137_9085;
var G__9091 = (i__8138_9086 + 1);
seq__8135_9083 = G__9088;
chunk__8136_9084 = G__9089;
count__8137_9085 = G__9090;
i__8138_9086 = G__9091;
continue;
}
} else
{var temp__4092__auto___9092 = cljs.core.seq.call(null,seq__8135_9083);if(temp__4092__auto___9092)
{var seq__8135_9093__$1 = temp__4092__auto___9092;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8135_9093__$1))
{var c__5632__auto___9094 = cljs.core.chunk_first.call(null,seq__8135_9093__$1);{
var G__9095 = cljs.core.chunk_rest.call(null,seq__8135_9093__$1);
var G__9096 = c__5632__auto___9094;
var G__9097 = cljs.core.count.call(null,c__5632__auto___9094);
var G__9098 = 0;
seq__8135_9083 = G__9095;
chunk__8136_9084 = G__9096;
count__8137_9085 = G__9097;
i__8138_9086 = G__9098;
continue;
}
} else
{var arg__7135__auto___9099 = cljs.core.first.call(null,seq__8135_9093__$1);a__7134__auto__.push(arg__7135__auto___9099);
{
var G__9100 = cljs.core.next.call(null,seq__8135_9093__$1);
var G__9101 = null;
var G__9102 = 0;
var G__9103 = 0;
seq__8135_9083 = G__9100;
chunk__8136_9084 = G__9101;
count__8137_9085 = G__9102;
i__8138_9086 = G__9103;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.a.apply(null,a__7134__auto__);
};
var a = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return a__delegate.call(this,args__7133__auto__);};
a.cljs$lang$maxFixedArity = 0;
a.cljs$lang$applyTo = (function (arglist__9104){
var args__7133__auto__ = cljs.core.seq(arglist__9104);
return a__delegate(args__7133__auto__);
});
a.cljs$core$IFn$_invoke$arity$variadic = a__delegate;
return a;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.abbr = (function() { 
var abbr__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8143_9105 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8144_9106 = null;var count__8145_9107 = 0;var i__8146_9108 = 0;while(true){
if((i__8146_9108 < count__8145_9107))
{var arg__7135__auto___9109 = cljs.core._nth.call(null,chunk__8144_9106,i__8146_9108);a__7134__auto__.push(arg__7135__auto___9109);
{
var G__9110 = seq__8143_9105;
var G__9111 = chunk__8144_9106;
var G__9112 = count__8145_9107;
var G__9113 = (i__8146_9108 + 1);
seq__8143_9105 = G__9110;
chunk__8144_9106 = G__9111;
count__8145_9107 = G__9112;
i__8146_9108 = G__9113;
continue;
}
} else
{var temp__4092__auto___9114 = cljs.core.seq.call(null,seq__8143_9105);if(temp__4092__auto___9114)
{var seq__8143_9115__$1 = temp__4092__auto___9114;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8143_9115__$1))
{var c__5632__auto___9116 = cljs.core.chunk_first.call(null,seq__8143_9115__$1);{
var G__9117 = cljs.core.chunk_rest.call(null,seq__8143_9115__$1);
var G__9118 = c__5632__auto___9116;
var G__9119 = cljs.core.count.call(null,c__5632__auto___9116);
var G__9120 = 0;
seq__8143_9105 = G__9117;
chunk__8144_9106 = G__9118;
count__8145_9107 = G__9119;
i__8146_9108 = G__9120;
continue;
}
} else
{var arg__7135__auto___9121 = cljs.core.first.call(null,seq__8143_9115__$1);a__7134__auto__.push(arg__7135__auto___9121);
{
var G__9122 = cljs.core.next.call(null,seq__8143_9115__$1);
var G__9123 = null;
var G__9124 = 0;
var G__9125 = 0;
seq__8143_9105 = G__9122;
chunk__8144_9106 = G__9123;
count__8145_9107 = G__9124;
i__8146_9108 = G__9125;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.abbr.apply(null,a__7134__auto__);
};
var abbr = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return abbr__delegate.call(this,args__7133__auto__);};
abbr.cljs$lang$maxFixedArity = 0;
abbr.cljs$lang$applyTo = (function (arglist__9126){
var args__7133__auto__ = cljs.core.seq(arglist__9126);
return abbr__delegate(args__7133__auto__);
});
abbr.cljs$core$IFn$_invoke$arity$variadic = abbr__delegate;
return abbr;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.address = (function() { 
var address__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8151_9127 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8152_9128 = null;var count__8153_9129 = 0;var i__8154_9130 = 0;while(true){
if((i__8154_9130 < count__8153_9129))
{var arg__7135__auto___9131 = cljs.core._nth.call(null,chunk__8152_9128,i__8154_9130);a__7134__auto__.push(arg__7135__auto___9131);
{
var G__9132 = seq__8151_9127;
var G__9133 = chunk__8152_9128;
var G__9134 = count__8153_9129;
var G__9135 = (i__8154_9130 + 1);
seq__8151_9127 = G__9132;
chunk__8152_9128 = G__9133;
count__8153_9129 = G__9134;
i__8154_9130 = G__9135;
continue;
}
} else
{var temp__4092__auto___9136 = cljs.core.seq.call(null,seq__8151_9127);if(temp__4092__auto___9136)
{var seq__8151_9137__$1 = temp__4092__auto___9136;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8151_9137__$1))
{var c__5632__auto___9138 = cljs.core.chunk_first.call(null,seq__8151_9137__$1);{
var G__9139 = cljs.core.chunk_rest.call(null,seq__8151_9137__$1);
var G__9140 = c__5632__auto___9138;
var G__9141 = cljs.core.count.call(null,c__5632__auto___9138);
var G__9142 = 0;
seq__8151_9127 = G__9139;
chunk__8152_9128 = G__9140;
count__8153_9129 = G__9141;
i__8154_9130 = G__9142;
continue;
}
} else
{var arg__7135__auto___9143 = cljs.core.first.call(null,seq__8151_9137__$1);a__7134__auto__.push(arg__7135__auto___9143);
{
var G__9144 = cljs.core.next.call(null,seq__8151_9137__$1);
var G__9145 = null;
var G__9146 = 0;
var G__9147 = 0;
seq__8151_9127 = G__9144;
chunk__8152_9128 = G__9145;
count__8153_9129 = G__9146;
i__8154_9130 = G__9147;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.address.apply(null,a__7134__auto__);
};
var address = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return address__delegate.call(this,args__7133__auto__);};
address.cljs$lang$maxFixedArity = 0;
address.cljs$lang$applyTo = (function (arglist__9148){
var args__7133__auto__ = cljs.core.seq(arglist__9148);
return address__delegate(args__7133__auto__);
});
address.cljs$core$IFn$_invoke$arity$variadic = address__delegate;
return address;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.area = (function() { 
var area__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8159_9149 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8160_9150 = null;var count__8161_9151 = 0;var i__8162_9152 = 0;while(true){
if((i__8162_9152 < count__8161_9151))
{var arg__7135__auto___9153 = cljs.core._nth.call(null,chunk__8160_9150,i__8162_9152);a__7134__auto__.push(arg__7135__auto___9153);
{
var G__9154 = seq__8159_9149;
var G__9155 = chunk__8160_9150;
var G__9156 = count__8161_9151;
var G__9157 = (i__8162_9152 + 1);
seq__8159_9149 = G__9154;
chunk__8160_9150 = G__9155;
count__8161_9151 = G__9156;
i__8162_9152 = G__9157;
continue;
}
} else
{var temp__4092__auto___9158 = cljs.core.seq.call(null,seq__8159_9149);if(temp__4092__auto___9158)
{var seq__8159_9159__$1 = temp__4092__auto___9158;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8159_9159__$1))
{var c__5632__auto___9160 = cljs.core.chunk_first.call(null,seq__8159_9159__$1);{
var G__9161 = cljs.core.chunk_rest.call(null,seq__8159_9159__$1);
var G__9162 = c__5632__auto___9160;
var G__9163 = cljs.core.count.call(null,c__5632__auto___9160);
var G__9164 = 0;
seq__8159_9149 = G__9161;
chunk__8160_9150 = G__9162;
count__8161_9151 = G__9163;
i__8162_9152 = G__9164;
continue;
}
} else
{var arg__7135__auto___9165 = cljs.core.first.call(null,seq__8159_9159__$1);a__7134__auto__.push(arg__7135__auto___9165);
{
var G__9166 = cljs.core.next.call(null,seq__8159_9159__$1);
var G__9167 = null;
var G__9168 = 0;
var G__9169 = 0;
seq__8159_9149 = G__9166;
chunk__8160_9150 = G__9167;
count__8161_9151 = G__9168;
i__8162_9152 = G__9169;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.area.apply(null,a__7134__auto__);
};
var area = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return area__delegate.call(this,args__7133__auto__);};
area.cljs$lang$maxFixedArity = 0;
area.cljs$lang$applyTo = (function (arglist__9170){
var args__7133__auto__ = cljs.core.seq(arglist__9170);
return area__delegate(args__7133__auto__);
});
area.cljs$core$IFn$_invoke$arity$variadic = area__delegate;
return area;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.article = (function() { 
var article__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8167_9171 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8168_9172 = null;var count__8169_9173 = 0;var i__8170_9174 = 0;while(true){
if((i__8170_9174 < count__8169_9173))
{var arg__7135__auto___9175 = cljs.core._nth.call(null,chunk__8168_9172,i__8170_9174);a__7134__auto__.push(arg__7135__auto___9175);
{
var G__9176 = seq__8167_9171;
var G__9177 = chunk__8168_9172;
var G__9178 = count__8169_9173;
var G__9179 = (i__8170_9174 + 1);
seq__8167_9171 = G__9176;
chunk__8168_9172 = G__9177;
count__8169_9173 = G__9178;
i__8170_9174 = G__9179;
continue;
}
} else
{var temp__4092__auto___9180 = cljs.core.seq.call(null,seq__8167_9171);if(temp__4092__auto___9180)
{var seq__8167_9181__$1 = temp__4092__auto___9180;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8167_9181__$1))
{var c__5632__auto___9182 = cljs.core.chunk_first.call(null,seq__8167_9181__$1);{
var G__9183 = cljs.core.chunk_rest.call(null,seq__8167_9181__$1);
var G__9184 = c__5632__auto___9182;
var G__9185 = cljs.core.count.call(null,c__5632__auto___9182);
var G__9186 = 0;
seq__8167_9171 = G__9183;
chunk__8168_9172 = G__9184;
count__8169_9173 = G__9185;
i__8170_9174 = G__9186;
continue;
}
} else
{var arg__7135__auto___9187 = cljs.core.first.call(null,seq__8167_9181__$1);a__7134__auto__.push(arg__7135__auto___9187);
{
var G__9188 = cljs.core.next.call(null,seq__8167_9181__$1);
var G__9189 = null;
var G__9190 = 0;
var G__9191 = 0;
seq__8167_9171 = G__9188;
chunk__8168_9172 = G__9189;
count__8169_9173 = G__9190;
i__8170_9174 = G__9191;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.article.apply(null,a__7134__auto__);
};
var article = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return article__delegate.call(this,args__7133__auto__);};
article.cljs$lang$maxFixedArity = 0;
article.cljs$lang$applyTo = (function (arglist__9192){
var args__7133__auto__ = cljs.core.seq(arglist__9192);
return article__delegate(args__7133__auto__);
});
article.cljs$core$IFn$_invoke$arity$variadic = article__delegate;
return article;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.aside = (function() { 
var aside__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8175_9193 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8176_9194 = null;var count__8177_9195 = 0;var i__8178_9196 = 0;while(true){
if((i__8178_9196 < count__8177_9195))
{var arg__7135__auto___9197 = cljs.core._nth.call(null,chunk__8176_9194,i__8178_9196);a__7134__auto__.push(arg__7135__auto___9197);
{
var G__9198 = seq__8175_9193;
var G__9199 = chunk__8176_9194;
var G__9200 = count__8177_9195;
var G__9201 = (i__8178_9196 + 1);
seq__8175_9193 = G__9198;
chunk__8176_9194 = G__9199;
count__8177_9195 = G__9200;
i__8178_9196 = G__9201;
continue;
}
} else
{var temp__4092__auto___9202 = cljs.core.seq.call(null,seq__8175_9193);if(temp__4092__auto___9202)
{var seq__8175_9203__$1 = temp__4092__auto___9202;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8175_9203__$1))
{var c__5632__auto___9204 = cljs.core.chunk_first.call(null,seq__8175_9203__$1);{
var G__9205 = cljs.core.chunk_rest.call(null,seq__8175_9203__$1);
var G__9206 = c__5632__auto___9204;
var G__9207 = cljs.core.count.call(null,c__5632__auto___9204);
var G__9208 = 0;
seq__8175_9193 = G__9205;
chunk__8176_9194 = G__9206;
count__8177_9195 = G__9207;
i__8178_9196 = G__9208;
continue;
}
} else
{var arg__7135__auto___9209 = cljs.core.first.call(null,seq__8175_9203__$1);a__7134__auto__.push(arg__7135__auto___9209);
{
var G__9210 = cljs.core.next.call(null,seq__8175_9203__$1);
var G__9211 = null;
var G__9212 = 0;
var G__9213 = 0;
seq__8175_9193 = G__9210;
chunk__8176_9194 = G__9211;
count__8177_9195 = G__9212;
i__8178_9196 = G__9213;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.aside.apply(null,a__7134__auto__);
};
var aside = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return aside__delegate.call(this,args__7133__auto__);};
aside.cljs$lang$maxFixedArity = 0;
aside.cljs$lang$applyTo = (function (arglist__9214){
var args__7133__auto__ = cljs.core.seq(arglist__9214);
return aside__delegate(args__7133__auto__);
});
aside.cljs$core$IFn$_invoke$arity$variadic = aside__delegate;
return aside;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.audio = (function() { 
var audio__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8183_9215 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8184_9216 = null;var count__8185_9217 = 0;var i__8186_9218 = 0;while(true){
if((i__8186_9218 < count__8185_9217))
{var arg__7135__auto___9219 = cljs.core._nth.call(null,chunk__8184_9216,i__8186_9218);a__7134__auto__.push(arg__7135__auto___9219);
{
var G__9220 = seq__8183_9215;
var G__9221 = chunk__8184_9216;
var G__9222 = count__8185_9217;
var G__9223 = (i__8186_9218 + 1);
seq__8183_9215 = G__9220;
chunk__8184_9216 = G__9221;
count__8185_9217 = G__9222;
i__8186_9218 = G__9223;
continue;
}
} else
{var temp__4092__auto___9224 = cljs.core.seq.call(null,seq__8183_9215);if(temp__4092__auto___9224)
{var seq__8183_9225__$1 = temp__4092__auto___9224;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8183_9225__$1))
{var c__5632__auto___9226 = cljs.core.chunk_first.call(null,seq__8183_9225__$1);{
var G__9227 = cljs.core.chunk_rest.call(null,seq__8183_9225__$1);
var G__9228 = c__5632__auto___9226;
var G__9229 = cljs.core.count.call(null,c__5632__auto___9226);
var G__9230 = 0;
seq__8183_9215 = G__9227;
chunk__8184_9216 = G__9228;
count__8185_9217 = G__9229;
i__8186_9218 = G__9230;
continue;
}
} else
{var arg__7135__auto___9231 = cljs.core.first.call(null,seq__8183_9225__$1);a__7134__auto__.push(arg__7135__auto___9231);
{
var G__9232 = cljs.core.next.call(null,seq__8183_9225__$1);
var G__9233 = null;
var G__9234 = 0;
var G__9235 = 0;
seq__8183_9215 = G__9232;
chunk__8184_9216 = G__9233;
count__8185_9217 = G__9234;
i__8186_9218 = G__9235;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.audio.apply(null,a__7134__auto__);
};
var audio = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return audio__delegate.call(this,args__7133__auto__);};
audio.cljs$lang$maxFixedArity = 0;
audio.cljs$lang$applyTo = (function (arglist__9236){
var args__7133__auto__ = cljs.core.seq(arglist__9236);
return audio__delegate(args__7133__auto__);
});
audio.cljs$core$IFn$_invoke$arity$variadic = audio__delegate;
return audio;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.b = (function() { 
var b__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8191_9237 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8192_9238 = null;var count__8193_9239 = 0;var i__8194_9240 = 0;while(true){
if((i__8194_9240 < count__8193_9239))
{var arg__7135__auto___9241 = cljs.core._nth.call(null,chunk__8192_9238,i__8194_9240);a__7134__auto__.push(arg__7135__auto___9241);
{
var G__9242 = seq__8191_9237;
var G__9243 = chunk__8192_9238;
var G__9244 = count__8193_9239;
var G__9245 = (i__8194_9240 + 1);
seq__8191_9237 = G__9242;
chunk__8192_9238 = G__9243;
count__8193_9239 = G__9244;
i__8194_9240 = G__9245;
continue;
}
} else
{var temp__4092__auto___9246 = cljs.core.seq.call(null,seq__8191_9237);if(temp__4092__auto___9246)
{var seq__8191_9247__$1 = temp__4092__auto___9246;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8191_9247__$1))
{var c__5632__auto___9248 = cljs.core.chunk_first.call(null,seq__8191_9247__$1);{
var G__9249 = cljs.core.chunk_rest.call(null,seq__8191_9247__$1);
var G__9250 = c__5632__auto___9248;
var G__9251 = cljs.core.count.call(null,c__5632__auto___9248);
var G__9252 = 0;
seq__8191_9237 = G__9249;
chunk__8192_9238 = G__9250;
count__8193_9239 = G__9251;
i__8194_9240 = G__9252;
continue;
}
} else
{var arg__7135__auto___9253 = cljs.core.first.call(null,seq__8191_9247__$1);a__7134__auto__.push(arg__7135__auto___9253);
{
var G__9254 = cljs.core.next.call(null,seq__8191_9247__$1);
var G__9255 = null;
var G__9256 = 0;
var G__9257 = 0;
seq__8191_9237 = G__9254;
chunk__8192_9238 = G__9255;
count__8193_9239 = G__9256;
i__8194_9240 = G__9257;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.b.apply(null,a__7134__auto__);
};
var b = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return b__delegate.call(this,args__7133__auto__);};
b.cljs$lang$maxFixedArity = 0;
b.cljs$lang$applyTo = (function (arglist__9258){
var args__7133__auto__ = cljs.core.seq(arglist__9258);
return b__delegate(args__7133__auto__);
});
b.cljs$core$IFn$_invoke$arity$variadic = b__delegate;
return b;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.base = (function() { 
var base__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8199_9259 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8200_9260 = null;var count__8201_9261 = 0;var i__8202_9262 = 0;while(true){
if((i__8202_9262 < count__8201_9261))
{var arg__7135__auto___9263 = cljs.core._nth.call(null,chunk__8200_9260,i__8202_9262);a__7134__auto__.push(arg__7135__auto___9263);
{
var G__9264 = seq__8199_9259;
var G__9265 = chunk__8200_9260;
var G__9266 = count__8201_9261;
var G__9267 = (i__8202_9262 + 1);
seq__8199_9259 = G__9264;
chunk__8200_9260 = G__9265;
count__8201_9261 = G__9266;
i__8202_9262 = G__9267;
continue;
}
} else
{var temp__4092__auto___9268 = cljs.core.seq.call(null,seq__8199_9259);if(temp__4092__auto___9268)
{var seq__8199_9269__$1 = temp__4092__auto___9268;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8199_9269__$1))
{var c__5632__auto___9270 = cljs.core.chunk_first.call(null,seq__8199_9269__$1);{
var G__9271 = cljs.core.chunk_rest.call(null,seq__8199_9269__$1);
var G__9272 = c__5632__auto___9270;
var G__9273 = cljs.core.count.call(null,c__5632__auto___9270);
var G__9274 = 0;
seq__8199_9259 = G__9271;
chunk__8200_9260 = G__9272;
count__8201_9261 = G__9273;
i__8202_9262 = G__9274;
continue;
}
} else
{var arg__7135__auto___9275 = cljs.core.first.call(null,seq__8199_9269__$1);a__7134__auto__.push(arg__7135__auto___9275);
{
var G__9276 = cljs.core.next.call(null,seq__8199_9269__$1);
var G__9277 = null;
var G__9278 = 0;
var G__9279 = 0;
seq__8199_9259 = G__9276;
chunk__8200_9260 = G__9277;
count__8201_9261 = G__9278;
i__8202_9262 = G__9279;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.base.apply(null,a__7134__auto__);
};
var base = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return base__delegate.call(this,args__7133__auto__);};
base.cljs$lang$maxFixedArity = 0;
base.cljs$lang$applyTo = (function (arglist__9280){
var args__7133__auto__ = cljs.core.seq(arglist__9280);
return base__delegate(args__7133__auto__);
});
base.cljs$core$IFn$_invoke$arity$variadic = base__delegate;
return base;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.bdi = (function() { 
var bdi__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8207_9281 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8208_9282 = null;var count__8209_9283 = 0;var i__8210_9284 = 0;while(true){
if((i__8210_9284 < count__8209_9283))
{var arg__7135__auto___9285 = cljs.core._nth.call(null,chunk__8208_9282,i__8210_9284);a__7134__auto__.push(arg__7135__auto___9285);
{
var G__9286 = seq__8207_9281;
var G__9287 = chunk__8208_9282;
var G__9288 = count__8209_9283;
var G__9289 = (i__8210_9284 + 1);
seq__8207_9281 = G__9286;
chunk__8208_9282 = G__9287;
count__8209_9283 = G__9288;
i__8210_9284 = G__9289;
continue;
}
} else
{var temp__4092__auto___9290 = cljs.core.seq.call(null,seq__8207_9281);if(temp__4092__auto___9290)
{var seq__8207_9291__$1 = temp__4092__auto___9290;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8207_9291__$1))
{var c__5632__auto___9292 = cljs.core.chunk_first.call(null,seq__8207_9291__$1);{
var G__9293 = cljs.core.chunk_rest.call(null,seq__8207_9291__$1);
var G__9294 = c__5632__auto___9292;
var G__9295 = cljs.core.count.call(null,c__5632__auto___9292);
var G__9296 = 0;
seq__8207_9281 = G__9293;
chunk__8208_9282 = G__9294;
count__8209_9283 = G__9295;
i__8210_9284 = G__9296;
continue;
}
} else
{var arg__7135__auto___9297 = cljs.core.first.call(null,seq__8207_9291__$1);a__7134__auto__.push(arg__7135__auto___9297);
{
var G__9298 = cljs.core.next.call(null,seq__8207_9291__$1);
var G__9299 = null;
var G__9300 = 0;
var G__9301 = 0;
seq__8207_9281 = G__9298;
chunk__8208_9282 = G__9299;
count__8209_9283 = G__9300;
i__8210_9284 = G__9301;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.bdi.apply(null,a__7134__auto__);
};
var bdi = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return bdi__delegate.call(this,args__7133__auto__);};
bdi.cljs$lang$maxFixedArity = 0;
bdi.cljs$lang$applyTo = (function (arglist__9302){
var args__7133__auto__ = cljs.core.seq(arglist__9302);
return bdi__delegate(args__7133__auto__);
});
bdi.cljs$core$IFn$_invoke$arity$variadic = bdi__delegate;
return bdi;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.bdo = (function() { 
var bdo__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8215_9303 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8216_9304 = null;var count__8217_9305 = 0;var i__8218_9306 = 0;while(true){
if((i__8218_9306 < count__8217_9305))
{var arg__7135__auto___9307 = cljs.core._nth.call(null,chunk__8216_9304,i__8218_9306);a__7134__auto__.push(arg__7135__auto___9307);
{
var G__9308 = seq__8215_9303;
var G__9309 = chunk__8216_9304;
var G__9310 = count__8217_9305;
var G__9311 = (i__8218_9306 + 1);
seq__8215_9303 = G__9308;
chunk__8216_9304 = G__9309;
count__8217_9305 = G__9310;
i__8218_9306 = G__9311;
continue;
}
} else
{var temp__4092__auto___9312 = cljs.core.seq.call(null,seq__8215_9303);if(temp__4092__auto___9312)
{var seq__8215_9313__$1 = temp__4092__auto___9312;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8215_9313__$1))
{var c__5632__auto___9314 = cljs.core.chunk_first.call(null,seq__8215_9313__$1);{
var G__9315 = cljs.core.chunk_rest.call(null,seq__8215_9313__$1);
var G__9316 = c__5632__auto___9314;
var G__9317 = cljs.core.count.call(null,c__5632__auto___9314);
var G__9318 = 0;
seq__8215_9303 = G__9315;
chunk__8216_9304 = G__9316;
count__8217_9305 = G__9317;
i__8218_9306 = G__9318;
continue;
}
} else
{var arg__7135__auto___9319 = cljs.core.first.call(null,seq__8215_9313__$1);a__7134__auto__.push(arg__7135__auto___9319);
{
var G__9320 = cljs.core.next.call(null,seq__8215_9313__$1);
var G__9321 = null;
var G__9322 = 0;
var G__9323 = 0;
seq__8215_9303 = G__9320;
chunk__8216_9304 = G__9321;
count__8217_9305 = G__9322;
i__8218_9306 = G__9323;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.bdo.apply(null,a__7134__auto__);
};
var bdo = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return bdo__delegate.call(this,args__7133__auto__);};
bdo.cljs$lang$maxFixedArity = 0;
bdo.cljs$lang$applyTo = (function (arglist__9324){
var args__7133__auto__ = cljs.core.seq(arglist__9324);
return bdo__delegate(args__7133__auto__);
});
bdo.cljs$core$IFn$_invoke$arity$variadic = bdo__delegate;
return bdo;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.big = (function() { 
var big__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8223_9325 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8224_9326 = null;var count__8225_9327 = 0;var i__8226_9328 = 0;while(true){
if((i__8226_9328 < count__8225_9327))
{var arg__7135__auto___9329 = cljs.core._nth.call(null,chunk__8224_9326,i__8226_9328);a__7134__auto__.push(arg__7135__auto___9329);
{
var G__9330 = seq__8223_9325;
var G__9331 = chunk__8224_9326;
var G__9332 = count__8225_9327;
var G__9333 = (i__8226_9328 + 1);
seq__8223_9325 = G__9330;
chunk__8224_9326 = G__9331;
count__8225_9327 = G__9332;
i__8226_9328 = G__9333;
continue;
}
} else
{var temp__4092__auto___9334 = cljs.core.seq.call(null,seq__8223_9325);if(temp__4092__auto___9334)
{var seq__8223_9335__$1 = temp__4092__auto___9334;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8223_9335__$1))
{var c__5632__auto___9336 = cljs.core.chunk_first.call(null,seq__8223_9335__$1);{
var G__9337 = cljs.core.chunk_rest.call(null,seq__8223_9335__$1);
var G__9338 = c__5632__auto___9336;
var G__9339 = cljs.core.count.call(null,c__5632__auto___9336);
var G__9340 = 0;
seq__8223_9325 = G__9337;
chunk__8224_9326 = G__9338;
count__8225_9327 = G__9339;
i__8226_9328 = G__9340;
continue;
}
} else
{var arg__7135__auto___9341 = cljs.core.first.call(null,seq__8223_9335__$1);a__7134__auto__.push(arg__7135__auto___9341);
{
var G__9342 = cljs.core.next.call(null,seq__8223_9335__$1);
var G__9343 = null;
var G__9344 = 0;
var G__9345 = 0;
seq__8223_9325 = G__9342;
chunk__8224_9326 = G__9343;
count__8225_9327 = G__9344;
i__8226_9328 = G__9345;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.big.apply(null,a__7134__auto__);
};
var big = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return big__delegate.call(this,args__7133__auto__);};
big.cljs$lang$maxFixedArity = 0;
big.cljs$lang$applyTo = (function (arglist__9346){
var args__7133__auto__ = cljs.core.seq(arglist__9346);
return big__delegate(args__7133__auto__);
});
big.cljs$core$IFn$_invoke$arity$variadic = big__delegate;
return big;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.blockquote = (function() { 
var blockquote__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8231_9347 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8232_9348 = null;var count__8233_9349 = 0;var i__8234_9350 = 0;while(true){
if((i__8234_9350 < count__8233_9349))
{var arg__7135__auto___9351 = cljs.core._nth.call(null,chunk__8232_9348,i__8234_9350);a__7134__auto__.push(arg__7135__auto___9351);
{
var G__9352 = seq__8231_9347;
var G__9353 = chunk__8232_9348;
var G__9354 = count__8233_9349;
var G__9355 = (i__8234_9350 + 1);
seq__8231_9347 = G__9352;
chunk__8232_9348 = G__9353;
count__8233_9349 = G__9354;
i__8234_9350 = G__9355;
continue;
}
} else
{var temp__4092__auto___9356 = cljs.core.seq.call(null,seq__8231_9347);if(temp__4092__auto___9356)
{var seq__8231_9357__$1 = temp__4092__auto___9356;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8231_9357__$1))
{var c__5632__auto___9358 = cljs.core.chunk_first.call(null,seq__8231_9357__$1);{
var G__9359 = cljs.core.chunk_rest.call(null,seq__8231_9357__$1);
var G__9360 = c__5632__auto___9358;
var G__9361 = cljs.core.count.call(null,c__5632__auto___9358);
var G__9362 = 0;
seq__8231_9347 = G__9359;
chunk__8232_9348 = G__9360;
count__8233_9349 = G__9361;
i__8234_9350 = G__9362;
continue;
}
} else
{var arg__7135__auto___9363 = cljs.core.first.call(null,seq__8231_9357__$1);a__7134__auto__.push(arg__7135__auto___9363);
{
var G__9364 = cljs.core.next.call(null,seq__8231_9357__$1);
var G__9365 = null;
var G__9366 = 0;
var G__9367 = 0;
seq__8231_9347 = G__9364;
chunk__8232_9348 = G__9365;
count__8233_9349 = G__9366;
i__8234_9350 = G__9367;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.blockquote.apply(null,a__7134__auto__);
};
var blockquote = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return blockquote__delegate.call(this,args__7133__auto__);};
blockquote.cljs$lang$maxFixedArity = 0;
blockquote.cljs$lang$applyTo = (function (arglist__9368){
var args__7133__auto__ = cljs.core.seq(arglist__9368);
return blockquote__delegate(args__7133__auto__);
});
blockquote.cljs$core$IFn$_invoke$arity$variadic = blockquote__delegate;
return blockquote;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.body = (function() { 
var body__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8239_9369 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8240_9370 = null;var count__8241_9371 = 0;var i__8242_9372 = 0;while(true){
if((i__8242_9372 < count__8241_9371))
{var arg__7135__auto___9373 = cljs.core._nth.call(null,chunk__8240_9370,i__8242_9372);a__7134__auto__.push(arg__7135__auto___9373);
{
var G__9374 = seq__8239_9369;
var G__9375 = chunk__8240_9370;
var G__9376 = count__8241_9371;
var G__9377 = (i__8242_9372 + 1);
seq__8239_9369 = G__9374;
chunk__8240_9370 = G__9375;
count__8241_9371 = G__9376;
i__8242_9372 = G__9377;
continue;
}
} else
{var temp__4092__auto___9378 = cljs.core.seq.call(null,seq__8239_9369);if(temp__4092__auto___9378)
{var seq__8239_9379__$1 = temp__4092__auto___9378;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8239_9379__$1))
{var c__5632__auto___9380 = cljs.core.chunk_first.call(null,seq__8239_9379__$1);{
var G__9381 = cljs.core.chunk_rest.call(null,seq__8239_9379__$1);
var G__9382 = c__5632__auto___9380;
var G__9383 = cljs.core.count.call(null,c__5632__auto___9380);
var G__9384 = 0;
seq__8239_9369 = G__9381;
chunk__8240_9370 = G__9382;
count__8241_9371 = G__9383;
i__8242_9372 = G__9384;
continue;
}
} else
{var arg__7135__auto___9385 = cljs.core.first.call(null,seq__8239_9379__$1);a__7134__auto__.push(arg__7135__auto___9385);
{
var G__9386 = cljs.core.next.call(null,seq__8239_9379__$1);
var G__9387 = null;
var G__9388 = 0;
var G__9389 = 0;
seq__8239_9369 = G__9386;
chunk__8240_9370 = G__9387;
count__8241_9371 = G__9388;
i__8242_9372 = G__9389;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.body.apply(null,a__7134__auto__);
};
var body = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return body__delegate.call(this,args__7133__auto__);};
body.cljs$lang$maxFixedArity = 0;
body.cljs$lang$applyTo = (function (arglist__9390){
var args__7133__auto__ = cljs.core.seq(arglist__9390);
return body__delegate(args__7133__auto__);
});
body.cljs$core$IFn$_invoke$arity$variadic = body__delegate;
return body;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.br = (function() { 
var br__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8247_9391 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8248_9392 = null;var count__8249_9393 = 0;var i__8250_9394 = 0;while(true){
if((i__8250_9394 < count__8249_9393))
{var arg__7135__auto___9395 = cljs.core._nth.call(null,chunk__8248_9392,i__8250_9394);a__7134__auto__.push(arg__7135__auto___9395);
{
var G__9396 = seq__8247_9391;
var G__9397 = chunk__8248_9392;
var G__9398 = count__8249_9393;
var G__9399 = (i__8250_9394 + 1);
seq__8247_9391 = G__9396;
chunk__8248_9392 = G__9397;
count__8249_9393 = G__9398;
i__8250_9394 = G__9399;
continue;
}
} else
{var temp__4092__auto___9400 = cljs.core.seq.call(null,seq__8247_9391);if(temp__4092__auto___9400)
{var seq__8247_9401__$1 = temp__4092__auto___9400;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8247_9401__$1))
{var c__5632__auto___9402 = cljs.core.chunk_first.call(null,seq__8247_9401__$1);{
var G__9403 = cljs.core.chunk_rest.call(null,seq__8247_9401__$1);
var G__9404 = c__5632__auto___9402;
var G__9405 = cljs.core.count.call(null,c__5632__auto___9402);
var G__9406 = 0;
seq__8247_9391 = G__9403;
chunk__8248_9392 = G__9404;
count__8249_9393 = G__9405;
i__8250_9394 = G__9406;
continue;
}
} else
{var arg__7135__auto___9407 = cljs.core.first.call(null,seq__8247_9401__$1);a__7134__auto__.push(arg__7135__auto___9407);
{
var G__9408 = cljs.core.next.call(null,seq__8247_9401__$1);
var G__9409 = null;
var G__9410 = 0;
var G__9411 = 0;
seq__8247_9391 = G__9408;
chunk__8248_9392 = G__9409;
count__8249_9393 = G__9410;
i__8250_9394 = G__9411;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.br.apply(null,a__7134__auto__);
};
var br = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return br__delegate.call(this,args__7133__auto__);};
br.cljs$lang$maxFixedArity = 0;
br.cljs$lang$applyTo = (function (arglist__9412){
var args__7133__auto__ = cljs.core.seq(arglist__9412);
return br__delegate(args__7133__auto__);
});
br.cljs$core$IFn$_invoke$arity$variadic = br__delegate;
return br;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.button = (function() { 
var button__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8255_9413 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8256_9414 = null;var count__8257_9415 = 0;var i__8258_9416 = 0;while(true){
if((i__8258_9416 < count__8257_9415))
{var arg__7135__auto___9417 = cljs.core._nth.call(null,chunk__8256_9414,i__8258_9416);a__7134__auto__.push(arg__7135__auto___9417);
{
var G__9418 = seq__8255_9413;
var G__9419 = chunk__8256_9414;
var G__9420 = count__8257_9415;
var G__9421 = (i__8258_9416 + 1);
seq__8255_9413 = G__9418;
chunk__8256_9414 = G__9419;
count__8257_9415 = G__9420;
i__8258_9416 = G__9421;
continue;
}
} else
{var temp__4092__auto___9422 = cljs.core.seq.call(null,seq__8255_9413);if(temp__4092__auto___9422)
{var seq__8255_9423__$1 = temp__4092__auto___9422;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8255_9423__$1))
{var c__5632__auto___9424 = cljs.core.chunk_first.call(null,seq__8255_9423__$1);{
var G__9425 = cljs.core.chunk_rest.call(null,seq__8255_9423__$1);
var G__9426 = c__5632__auto___9424;
var G__9427 = cljs.core.count.call(null,c__5632__auto___9424);
var G__9428 = 0;
seq__8255_9413 = G__9425;
chunk__8256_9414 = G__9426;
count__8257_9415 = G__9427;
i__8258_9416 = G__9428;
continue;
}
} else
{var arg__7135__auto___9429 = cljs.core.first.call(null,seq__8255_9423__$1);a__7134__auto__.push(arg__7135__auto___9429);
{
var G__9430 = cljs.core.next.call(null,seq__8255_9423__$1);
var G__9431 = null;
var G__9432 = 0;
var G__9433 = 0;
seq__8255_9413 = G__9430;
chunk__8256_9414 = G__9431;
count__8257_9415 = G__9432;
i__8258_9416 = G__9433;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.button.apply(null,a__7134__auto__);
};
var button = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return button__delegate.call(this,args__7133__auto__);};
button.cljs$lang$maxFixedArity = 0;
button.cljs$lang$applyTo = (function (arglist__9434){
var args__7133__auto__ = cljs.core.seq(arglist__9434);
return button__delegate(args__7133__auto__);
});
button.cljs$core$IFn$_invoke$arity$variadic = button__delegate;
return button;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.canvas = (function() { 
var canvas__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8263_9435 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8264_9436 = null;var count__8265_9437 = 0;var i__8266_9438 = 0;while(true){
if((i__8266_9438 < count__8265_9437))
{var arg__7135__auto___9439 = cljs.core._nth.call(null,chunk__8264_9436,i__8266_9438);a__7134__auto__.push(arg__7135__auto___9439);
{
var G__9440 = seq__8263_9435;
var G__9441 = chunk__8264_9436;
var G__9442 = count__8265_9437;
var G__9443 = (i__8266_9438 + 1);
seq__8263_9435 = G__9440;
chunk__8264_9436 = G__9441;
count__8265_9437 = G__9442;
i__8266_9438 = G__9443;
continue;
}
} else
{var temp__4092__auto___9444 = cljs.core.seq.call(null,seq__8263_9435);if(temp__4092__auto___9444)
{var seq__8263_9445__$1 = temp__4092__auto___9444;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8263_9445__$1))
{var c__5632__auto___9446 = cljs.core.chunk_first.call(null,seq__8263_9445__$1);{
var G__9447 = cljs.core.chunk_rest.call(null,seq__8263_9445__$1);
var G__9448 = c__5632__auto___9446;
var G__9449 = cljs.core.count.call(null,c__5632__auto___9446);
var G__9450 = 0;
seq__8263_9435 = G__9447;
chunk__8264_9436 = G__9448;
count__8265_9437 = G__9449;
i__8266_9438 = G__9450;
continue;
}
} else
{var arg__7135__auto___9451 = cljs.core.first.call(null,seq__8263_9445__$1);a__7134__auto__.push(arg__7135__auto___9451);
{
var G__9452 = cljs.core.next.call(null,seq__8263_9445__$1);
var G__9453 = null;
var G__9454 = 0;
var G__9455 = 0;
seq__8263_9435 = G__9452;
chunk__8264_9436 = G__9453;
count__8265_9437 = G__9454;
i__8266_9438 = G__9455;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.canvas.apply(null,a__7134__auto__);
};
var canvas = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return canvas__delegate.call(this,args__7133__auto__);};
canvas.cljs$lang$maxFixedArity = 0;
canvas.cljs$lang$applyTo = (function (arglist__9456){
var args__7133__auto__ = cljs.core.seq(arglist__9456);
return canvas__delegate(args__7133__auto__);
});
canvas.cljs$core$IFn$_invoke$arity$variadic = canvas__delegate;
return canvas;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.caption = (function() { 
var caption__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8271_9457 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8272_9458 = null;var count__8273_9459 = 0;var i__8274_9460 = 0;while(true){
if((i__8274_9460 < count__8273_9459))
{var arg__7135__auto___9461 = cljs.core._nth.call(null,chunk__8272_9458,i__8274_9460);a__7134__auto__.push(arg__7135__auto___9461);
{
var G__9462 = seq__8271_9457;
var G__9463 = chunk__8272_9458;
var G__9464 = count__8273_9459;
var G__9465 = (i__8274_9460 + 1);
seq__8271_9457 = G__9462;
chunk__8272_9458 = G__9463;
count__8273_9459 = G__9464;
i__8274_9460 = G__9465;
continue;
}
} else
{var temp__4092__auto___9466 = cljs.core.seq.call(null,seq__8271_9457);if(temp__4092__auto___9466)
{var seq__8271_9467__$1 = temp__4092__auto___9466;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8271_9467__$1))
{var c__5632__auto___9468 = cljs.core.chunk_first.call(null,seq__8271_9467__$1);{
var G__9469 = cljs.core.chunk_rest.call(null,seq__8271_9467__$1);
var G__9470 = c__5632__auto___9468;
var G__9471 = cljs.core.count.call(null,c__5632__auto___9468);
var G__9472 = 0;
seq__8271_9457 = G__9469;
chunk__8272_9458 = G__9470;
count__8273_9459 = G__9471;
i__8274_9460 = G__9472;
continue;
}
} else
{var arg__7135__auto___9473 = cljs.core.first.call(null,seq__8271_9467__$1);a__7134__auto__.push(arg__7135__auto___9473);
{
var G__9474 = cljs.core.next.call(null,seq__8271_9467__$1);
var G__9475 = null;
var G__9476 = 0;
var G__9477 = 0;
seq__8271_9457 = G__9474;
chunk__8272_9458 = G__9475;
count__8273_9459 = G__9476;
i__8274_9460 = G__9477;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.caption.apply(null,a__7134__auto__);
};
var caption = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return caption__delegate.call(this,args__7133__auto__);};
caption.cljs$lang$maxFixedArity = 0;
caption.cljs$lang$applyTo = (function (arglist__9478){
var args__7133__auto__ = cljs.core.seq(arglist__9478);
return caption__delegate(args__7133__auto__);
});
caption.cljs$core$IFn$_invoke$arity$variadic = caption__delegate;
return caption;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.cite = (function() { 
var cite__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8279_9479 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8280_9480 = null;var count__8281_9481 = 0;var i__8282_9482 = 0;while(true){
if((i__8282_9482 < count__8281_9481))
{var arg__7135__auto___9483 = cljs.core._nth.call(null,chunk__8280_9480,i__8282_9482);a__7134__auto__.push(arg__7135__auto___9483);
{
var G__9484 = seq__8279_9479;
var G__9485 = chunk__8280_9480;
var G__9486 = count__8281_9481;
var G__9487 = (i__8282_9482 + 1);
seq__8279_9479 = G__9484;
chunk__8280_9480 = G__9485;
count__8281_9481 = G__9486;
i__8282_9482 = G__9487;
continue;
}
} else
{var temp__4092__auto___9488 = cljs.core.seq.call(null,seq__8279_9479);if(temp__4092__auto___9488)
{var seq__8279_9489__$1 = temp__4092__auto___9488;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8279_9489__$1))
{var c__5632__auto___9490 = cljs.core.chunk_first.call(null,seq__8279_9489__$1);{
var G__9491 = cljs.core.chunk_rest.call(null,seq__8279_9489__$1);
var G__9492 = c__5632__auto___9490;
var G__9493 = cljs.core.count.call(null,c__5632__auto___9490);
var G__9494 = 0;
seq__8279_9479 = G__9491;
chunk__8280_9480 = G__9492;
count__8281_9481 = G__9493;
i__8282_9482 = G__9494;
continue;
}
} else
{var arg__7135__auto___9495 = cljs.core.first.call(null,seq__8279_9489__$1);a__7134__auto__.push(arg__7135__auto___9495);
{
var G__9496 = cljs.core.next.call(null,seq__8279_9489__$1);
var G__9497 = null;
var G__9498 = 0;
var G__9499 = 0;
seq__8279_9479 = G__9496;
chunk__8280_9480 = G__9497;
count__8281_9481 = G__9498;
i__8282_9482 = G__9499;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.cite.apply(null,a__7134__auto__);
};
var cite = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return cite__delegate.call(this,args__7133__auto__);};
cite.cljs$lang$maxFixedArity = 0;
cite.cljs$lang$applyTo = (function (arglist__9500){
var args__7133__auto__ = cljs.core.seq(arglist__9500);
return cite__delegate(args__7133__auto__);
});
cite.cljs$core$IFn$_invoke$arity$variadic = cite__delegate;
return cite;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.code = (function() { 
var code__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8287_9501 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8288_9502 = null;var count__8289_9503 = 0;var i__8290_9504 = 0;while(true){
if((i__8290_9504 < count__8289_9503))
{var arg__7135__auto___9505 = cljs.core._nth.call(null,chunk__8288_9502,i__8290_9504);a__7134__auto__.push(arg__7135__auto___9505);
{
var G__9506 = seq__8287_9501;
var G__9507 = chunk__8288_9502;
var G__9508 = count__8289_9503;
var G__9509 = (i__8290_9504 + 1);
seq__8287_9501 = G__9506;
chunk__8288_9502 = G__9507;
count__8289_9503 = G__9508;
i__8290_9504 = G__9509;
continue;
}
} else
{var temp__4092__auto___9510 = cljs.core.seq.call(null,seq__8287_9501);if(temp__4092__auto___9510)
{var seq__8287_9511__$1 = temp__4092__auto___9510;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8287_9511__$1))
{var c__5632__auto___9512 = cljs.core.chunk_first.call(null,seq__8287_9511__$1);{
var G__9513 = cljs.core.chunk_rest.call(null,seq__8287_9511__$1);
var G__9514 = c__5632__auto___9512;
var G__9515 = cljs.core.count.call(null,c__5632__auto___9512);
var G__9516 = 0;
seq__8287_9501 = G__9513;
chunk__8288_9502 = G__9514;
count__8289_9503 = G__9515;
i__8290_9504 = G__9516;
continue;
}
} else
{var arg__7135__auto___9517 = cljs.core.first.call(null,seq__8287_9511__$1);a__7134__auto__.push(arg__7135__auto___9517);
{
var G__9518 = cljs.core.next.call(null,seq__8287_9511__$1);
var G__9519 = null;
var G__9520 = 0;
var G__9521 = 0;
seq__8287_9501 = G__9518;
chunk__8288_9502 = G__9519;
count__8289_9503 = G__9520;
i__8290_9504 = G__9521;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.code.apply(null,a__7134__auto__);
};
var code = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return code__delegate.call(this,args__7133__auto__);};
code.cljs$lang$maxFixedArity = 0;
code.cljs$lang$applyTo = (function (arglist__9522){
var args__7133__auto__ = cljs.core.seq(arglist__9522);
return code__delegate(args__7133__auto__);
});
code.cljs$core$IFn$_invoke$arity$variadic = code__delegate;
return code;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.col = (function() { 
var col__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8295_9523 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8296_9524 = null;var count__8297_9525 = 0;var i__8298_9526 = 0;while(true){
if((i__8298_9526 < count__8297_9525))
{var arg__7135__auto___9527 = cljs.core._nth.call(null,chunk__8296_9524,i__8298_9526);a__7134__auto__.push(arg__7135__auto___9527);
{
var G__9528 = seq__8295_9523;
var G__9529 = chunk__8296_9524;
var G__9530 = count__8297_9525;
var G__9531 = (i__8298_9526 + 1);
seq__8295_9523 = G__9528;
chunk__8296_9524 = G__9529;
count__8297_9525 = G__9530;
i__8298_9526 = G__9531;
continue;
}
} else
{var temp__4092__auto___9532 = cljs.core.seq.call(null,seq__8295_9523);if(temp__4092__auto___9532)
{var seq__8295_9533__$1 = temp__4092__auto___9532;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8295_9533__$1))
{var c__5632__auto___9534 = cljs.core.chunk_first.call(null,seq__8295_9533__$1);{
var G__9535 = cljs.core.chunk_rest.call(null,seq__8295_9533__$1);
var G__9536 = c__5632__auto___9534;
var G__9537 = cljs.core.count.call(null,c__5632__auto___9534);
var G__9538 = 0;
seq__8295_9523 = G__9535;
chunk__8296_9524 = G__9536;
count__8297_9525 = G__9537;
i__8298_9526 = G__9538;
continue;
}
} else
{var arg__7135__auto___9539 = cljs.core.first.call(null,seq__8295_9533__$1);a__7134__auto__.push(arg__7135__auto___9539);
{
var G__9540 = cljs.core.next.call(null,seq__8295_9533__$1);
var G__9541 = null;
var G__9542 = 0;
var G__9543 = 0;
seq__8295_9523 = G__9540;
chunk__8296_9524 = G__9541;
count__8297_9525 = G__9542;
i__8298_9526 = G__9543;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.col.apply(null,a__7134__auto__);
};
var col = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return col__delegate.call(this,args__7133__auto__);};
col.cljs$lang$maxFixedArity = 0;
col.cljs$lang$applyTo = (function (arglist__9544){
var args__7133__auto__ = cljs.core.seq(arglist__9544);
return col__delegate(args__7133__auto__);
});
col.cljs$core$IFn$_invoke$arity$variadic = col__delegate;
return col;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.colgroup = (function() { 
var colgroup__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8303_9545 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8304_9546 = null;var count__8305_9547 = 0;var i__8306_9548 = 0;while(true){
if((i__8306_9548 < count__8305_9547))
{var arg__7135__auto___9549 = cljs.core._nth.call(null,chunk__8304_9546,i__8306_9548);a__7134__auto__.push(arg__7135__auto___9549);
{
var G__9550 = seq__8303_9545;
var G__9551 = chunk__8304_9546;
var G__9552 = count__8305_9547;
var G__9553 = (i__8306_9548 + 1);
seq__8303_9545 = G__9550;
chunk__8304_9546 = G__9551;
count__8305_9547 = G__9552;
i__8306_9548 = G__9553;
continue;
}
} else
{var temp__4092__auto___9554 = cljs.core.seq.call(null,seq__8303_9545);if(temp__4092__auto___9554)
{var seq__8303_9555__$1 = temp__4092__auto___9554;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8303_9555__$1))
{var c__5632__auto___9556 = cljs.core.chunk_first.call(null,seq__8303_9555__$1);{
var G__9557 = cljs.core.chunk_rest.call(null,seq__8303_9555__$1);
var G__9558 = c__5632__auto___9556;
var G__9559 = cljs.core.count.call(null,c__5632__auto___9556);
var G__9560 = 0;
seq__8303_9545 = G__9557;
chunk__8304_9546 = G__9558;
count__8305_9547 = G__9559;
i__8306_9548 = G__9560;
continue;
}
} else
{var arg__7135__auto___9561 = cljs.core.first.call(null,seq__8303_9555__$1);a__7134__auto__.push(arg__7135__auto___9561);
{
var G__9562 = cljs.core.next.call(null,seq__8303_9555__$1);
var G__9563 = null;
var G__9564 = 0;
var G__9565 = 0;
seq__8303_9545 = G__9562;
chunk__8304_9546 = G__9563;
count__8305_9547 = G__9564;
i__8306_9548 = G__9565;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.colgroup.apply(null,a__7134__auto__);
};
var colgroup = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return colgroup__delegate.call(this,args__7133__auto__);};
colgroup.cljs$lang$maxFixedArity = 0;
colgroup.cljs$lang$applyTo = (function (arglist__9566){
var args__7133__auto__ = cljs.core.seq(arglist__9566);
return colgroup__delegate(args__7133__auto__);
});
colgroup.cljs$core$IFn$_invoke$arity$variadic = colgroup__delegate;
return colgroup;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.data = (function() { 
var data__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8311_9567 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8312_9568 = null;var count__8313_9569 = 0;var i__8314_9570 = 0;while(true){
if((i__8314_9570 < count__8313_9569))
{var arg__7135__auto___9571 = cljs.core._nth.call(null,chunk__8312_9568,i__8314_9570);a__7134__auto__.push(arg__7135__auto___9571);
{
var G__9572 = seq__8311_9567;
var G__9573 = chunk__8312_9568;
var G__9574 = count__8313_9569;
var G__9575 = (i__8314_9570 + 1);
seq__8311_9567 = G__9572;
chunk__8312_9568 = G__9573;
count__8313_9569 = G__9574;
i__8314_9570 = G__9575;
continue;
}
} else
{var temp__4092__auto___9576 = cljs.core.seq.call(null,seq__8311_9567);if(temp__4092__auto___9576)
{var seq__8311_9577__$1 = temp__4092__auto___9576;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8311_9577__$1))
{var c__5632__auto___9578 = cljs.core.chunk_first.call(null,seq__8311_9577__$1);{
var G__9579 = cljs.core.chunk_rest.call(null,seq__8311_9577__$1);
var G__9580 = c__5632__auto___9578;
var G__9581 = cljs.core.count.call(null,c__5632__auto___9578);
var G__9582 = 0;
seq__8311_9567 = G__9579;
chunk__8312_9568 = G__9580;
count__8313_9569 = G__9581;
i__8314_9570 = G__9582;
continue;
}
} else
{var arg__7135__auto___9583 = cljs.core.first.call(null,seq__8311_9577__$1);a__7134__auto__.push(arg__7135__auto___9583);
{
var G__9584 = cljs.core.next.call(null,seq__8311_9577__$1);
var G__9585 = null;
var G__9586 = 0;
var G__9587 = 0;
seq__8311_9567 = G__9584;
chunk__8312_9568 = G__9585;
count__8313_9569 = G__9586;
i__8314_9570 = G__9587;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.data.apply(null,a__7134__auto__);
};
var data = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return data__delegate.call(this,args__7133__auto__);};
data.cljs$lang$maxFixedArity = 0;
data.cljs$lang$applyTo = (function (arglist__9588){
var args__7133__auto__ = cljs.core.seq(arglist__9588);
return data__delegate(args__7133__auto__);
});
data.cljs$core$IFn$_invoke$arity$variadic = data__delegate;
return data;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.datalist = (function() { 
var datalist__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8319_9589 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8320_9590 = null;var count__8321_9591 = 0;var i__8322_9592 = 0;while(true){
if((i__8322_9592 < count__8321_9591))
{var arg__7135__auto___9593 = cljs.core._nth.call(null,chunk__8320_9590,i__8322_9592);a__7134__auto__.push(arg__7135__auto___9593);
{
var G__9594 = seq__8319_9589;
var G__9595 = chunk__8320_9590;
var G__9596 = count__8321_9591;
var G__9597 = (i__8322_9592 + 1);
seq__8319_9589 = G__9594;
chunk__8320_9590 = G__9595;
count__8321_9591 = G__9596;
i__8322_9592 = G__9597;
continue;
}
} else
{var temp__4092__auto___9598 = cljs.core.seq.call(null,seq__8319_9589);if(temp__4092__auto___9598)
{var seq__8319_9599__$1 = temp__4092__auto___9598;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8319_9599__$1))
{var c__5632__auto___9600 = cljs.core.chunk_first.call(null,seq__8319_9599__$1);{
var G__9601 = cljs.core.chunk_rest.call(null,seq__8319_9599__$1);
var G__9602 = c__5632__auto___9600;
var G__9603 = cljs.core.count.call(null,c__5632__auto___9600);
var G__9604 = 0;
seq__8319_9589 = G__9601;
chunk__8320_9590 = G__9602;
count__8321_9591 = G__9603;
i__8322_9592 = G__9604;
continue;
}
} else
{var arg__7135__auto___9605 = cljs.core.first.call(null,seq__8319_9599__$1);a__7134__auto__.push(arg__7135__auto___9605);
{
var G__9606 = cljs.core.next.call(null,seq__8319_9599__$1);
var G__9607 = null;
var G__9608 = 0;
var G__9609 = 0;
seq__8319_9589 = G__9606;
chunk__8320_9590 = G__9607;
count__8321_9591 = G__9608;
i__8322_9592 = G__9609;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.datalist.apply(null,a__7134__auto__);
};
var datalist = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return datalist__delegate.call(this,args__7133__auto__);};
datalist.cljs$lang$maxFixedArity = 0;
datalist.cljs$lang$applyTo = (function (arglist__9610){
var args__7133__auto__ = cljs.core.seq(arglist__9610);
return datalist__delegate(args__7133__auto__);
});
datalist.cljs$core$IFn$_invoke$arity$variadic = datalist__delegate;
return datalist;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.dd = (function() { 
var dd__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8327_9611 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8328_9612 = null;var count__8329_9613 = 0;var i__8330_9614 = 0;while(true){
if((i__8330_9614 < count__8329_9613))
{var arg__7135__auto___9615 = cljs.core._nth.call(null,chunk__8328_9612,i__8330_9614);a__7134__auto__.push(arg__7135__auto___9615);
{
var G__9616 = seq__8327_9611;
var G__9617 = chunk__8328_9612;
var G__9618 = count__8329_9613;
var G__9619 = (i__8330_9614 + 1);
seq__8327_9611 = G__9616;
chunk__8328_9612 = G__9617;
count__8329_9613 = G__9618;
i__8330_9614 = G__9619;
continue;
}
} else
{var temp__4092__auto___9620 = cljs.core.seq.call(null,seq__8327_9611);if(temp__4092__auto___9620)
{var seq__8327_9621__$1 = temp__4092__auto___9620;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8327_9621__$1))
{var c__5632__auto___9622 = cljs.core.chunk_first.call(null,seq__8327_9621__$1);{
var G__9623 = cljs.core.chunk_rest.call(null,seq__8327_9621__$1);
var G__9624 = c__5632__auto___9622;
var G__9625 = cljs.core.count.call(null,c__5632__auto___9622);
var G__9626 = 0;
seq__8327_9611 = G__9623;
chunk__8328_9612 = G__9624;
count__8329_9613 = G__9625;
i__8330_9614 = G__9626;
continue;
}
} else
{var arg__7135__auto___9627 = cljs.core.first.call(null,seq__8327_9621__$1);a__7134__auto__.push(arg__7135__auto___9627);
{
var G__9628 = cljs.core.next.call(null,seq__8327_9621__$1);
var G__9629 = null;
var G__9630 = 0;
var G__9631 = 0;
seq__8327_9611 = G__9628;
chunk__8328_9612 = G__9629;
count__8329_9613 = G__9630;
i__8330_9614 = G__9631;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.dd.apply(null,a__7134__auto__);
};
var dd = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return dd__delegate.call(this,args__7133__auto__);};
dd.cljs$lang$maxFixedArity = 0;
dd.cljs$lang$applyTo = (function (arglist__9632){
var args__7133__auto__ = cljs.core.seq(arglist__9632);
return dd__delegate(args__7133__auto__);
});
dd.cljs$core$IFn$_invoke$arity$variadic = dd__delegate;
return dd;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.del = (function() { 
var del__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8335_9633 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8336_9634 = null;var count__8337_9635 = 0;var i__8338_9636 = 0;while(true){
if((i__8338_9636 < count__8337_9635))
{var arg__7135__auto___9637 = cljs.core._nth.call(null,chunk__8336_9634,i__8338_9636);a__7134__auto__.push(arg__7135__auto___9637);
{
var G__9638 = seq__8335_9633;
var G__9639 = chunk__8336_9634;
var G__9640 = count__8337_9635;
var G__9641 = (i__8338_9636 + 1);
seq__8335_9633 = G__9638;
chunk__8336_9634 = G__9639;
count__8337_9635 = G__9640;
i__8338_9636 = G__9641;
continue;
}
} else
{var temp__4092__auto___9642 = cljs.core.seq.call(null,seq__8335_9633);if(temp__4092__auto___9642)
{var seq__8335_9643__$1 = temp__4092__auto___9642;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8335_9643__$1))
{var c__5632__auto___9644 = cljs.core.chunk_first.call(null,seq__8335_9643__$1);{
var G__9645 = cljs.core.chunk_rest.call(null,seq__8335_9643__$1);
var G__9646 = c__5632__auto___9644;
var G__9647 = cljs.core.count.call(null,c__5632__auto___9644);
var G__9648 = 0;
seq__8335_9633 = G__9645;
chunk__8336_9634 = G__9646;
count__8337_9635 = G__9647;
i__8338_9636 = G__9648;
continue;
}
} else
{var arg__7135__auto___9649 = cljs.core.first.call(null,seq__8335_9643__$1);a__7134__auto__.push(arg__7135__auto___9649);
{
var G__9650 = cljs.core.next.call(null,seq__8335_9643__$1);
var G__9651 = null;
var G__9652 = 0;
var G__9653 = 0;
seq__8335_9633 = G__9650;
chunk__8336_9634 = G__9651;
count__8337_9635 = G__9652;
i__8338_9636 = G__9653;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.del.apply(null,a__7134__auto__);
};
var del = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return del__delegate.call(this,args__7133__auto__);};
del.cljs$lang$maxFixedArity = 0;
del.cljs$lang$applyTo = (function (arglist__9654){
var args__7133__auto__ = cljs.core.seq(arglist__9654);
return del__delegate(args__7133__auto__);
});
del.cljs$core$IFn$_invoke$arity$variadic = del__delegate;
return del;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.details = (function() { 
var details__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8343_9655 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8344_9656 = null;var count__8345_9657 = 0;var i__8346_9658 = 0;while(true){
if((i__8346_9658 < count__8345_9657))
{var arg__7135__auto___9659 = cljs.core._nth.call(null,chunk__8344_9656,i__8346_9658);a__7134__auto__.push(arg__7135__auto___9659);
{
var G__9660 = seq__8343_9655;
var G__9661 = chunk__8344_9656;
var G__9662 = count__8345_9657;
var G__9663 = (i__8346_9658 + 1);
seq__8343_9655 = G__9660;
chunk__8344_9656 = G__9661;
count__8345_9657 = G__9662;
i__8346_9658 = G__9663;
continue;
}
} else
{var temp__4092__auto___9664 = cljs.core.seq.call(null,seq__8343_9655);if(temp__4092__auto___9664)
{var seq__8343_9665__$1 = temp__4092__auto___9664;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8343_9665__$1))
{var c__5632__auto___9666 = cljs.core.chunk_first.call(null,seq__8343_9665__$1);{
var G__9667 = cljs.core.chunk_rest.call(null,seq__8343_9665__$1);
var G__9668 = c__5632__auto___9666;
var G__9669 = cljs.core.count.call(null,c__5632__auto___9666);
var G__9670 = 0;
seq__8343_9655 = G__9667;
chunk__8344_9656 = G__9668;
count__8345_9657 = G__9669;
i__8346_9658 = G__9670;
continue;
}
} else
{var arg__7135__auto___9671 = cljs.core.first.call(null,seq__8343_9665__$1);a__7134__auto__.push(arg__7135__auto___9671);
{
var G__9672 = cljs.core.next.call(null,seq__8343_9665__$1);
var G__9673 = null;
var G__9674 = 0;
var G__9675 = 0;
seq__8343_9655 = G__9672;
chunk__8344_9656 = G__9673;
count__8345_9657 = G__9674;
i__8346_9658 = G__9675;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.details.apply(null,a__7134__auto__);
};
var details = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return details__delegate.call(this,args__7133__auto__);};
details.cljs$lang$maxFixedArity = 0;
details.cljs$lang$applyTo = (function (arglist__9676){
var args__7133__auto__ = cljs.core.seq(arglist__9676);
return details__delegate(args__7133__auto__);
});
details.cljs$core$IFn$_invoke$arity$variadic = details__delegate;
return details;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.dfn = (function() { 
var dfn__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8351_9677 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8352_9678 = null;var count__8353_9679 = 0;var i__8354_9680 = 0;while(true){
if((i__8354_9680 < count__8353_9679))
{var arg__7135__auto___9681 = cljs.core._nth.call(null,chunk__8352_9678,i__8354_9680);a__7134__auto__.push(arg__7135__auto___9681);
{
var G__9682 = seq__8351_9677;
var G__9683 = chunk__8352_9678;
var G__9684 = count__8353_9679;
var G__9685 = (i__8354_9680 + 1);
seq__8351_9677 = G__9682;
chunk__8352_9678 = G__9683;
count__8353_9679 = G__9684;
i__8354_9680 = G__9685;
continue;
}
} else
{var temp__4092__auto___9686 = cljs.core.seq.call(null,seq__8351_9677);if(temp__4092__auto___9686)
{var seq__8351_9687__$1 = temp__4092__auto___9686;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8351_9687__$1))
{var c__5632__auto___9688 = cljs.core.chunk_first.call(null,seq__8351_9687__$1);{
var G__9689 = cljs.core.chunk_rest.call(null,seq__8351_9687__$1);
var G__9690 = c__5632__auto___9688;
var G__9691 = cljs.core.count.call(null,c__5632__auto___9688);
var G__9692 = 0;
seq__8351_9677 = G__9689;
chunk__8352_9678 = G__9690;
count__8353_9679 = G__9691;
i__8354_9680 = G__9692;
continue;
}
} else
{var arg__7135__auto___9693 = cljs.core.first.call(null,seq__8351_9687__$1);a__7134__auto__.push(arg__7135__auto___9693);
{
var G__9694 = cljs.core.next.call(null,seq__8351_9687__$1);
var G__9695 = null;
var G__9696 = 0;
var G__9697 = 0;
seq__8351_9677 = G__9694;
chunk__8352_9678 = G__9695;
count__8353_9679 = G__9696;
i__8354_9680 = G__9697;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.dfn.apply(null,a__7134__auto__);
};
var dfn = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return dfn__delegate.call(this,args__7133__auto__);};
dfn.cljs$lang$maxFixedArity = 0;
dfn.cljs$lang$applyTo = (function (arglist__9698){
var args__7133__auto__ = cljs.core.seq(arglist__9698);
return dfn__delegate(args__7133__auto__);
});
dfn.cljs$core$IFn$_invoke$arity$variadic = dfn__delegate;
return dfn;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.div = (function() { 
var div__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8359_9699 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8360_9700 = null;var count__8361_9701 = 0;var i__8362_9702 = 0;while(true){
if((i__8362_9702 < count__8361_9701))
{var arg__7135__auto___9703 = cljs.core._nth.call(null,chunk__8360_9700,i__8362_9702);a__7134__auto__.push(arg__7135__auto___9703);
{
var G__9704 = seq__8359_9699;
var G__9705 = chunk__8360_9700;
var G__9706 = count__8361_9701;
var G__9707 = (i__8362_9702 + 1);
seq__8359_9699 = G__9704;
chunk__8360_9700 = G__9705;
count__8361_9701 = G__9706;
i__8362_9702 = G__9707;
continue;
}
} else
{var temp__4092__auto___9708 = cljs.core.seq.call(null,seq__8359_9699);if(temp__4092__auto___9708)
{var seq__8359_9709__$1 = temp__4092__auto___9708;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8359_9709__$1))
{var c__5632__auto___9710 = cljs.core.chunk_first.call(null,seq__8359_9709__$1);{
var G__9711 = cljs.core.chunk_rest.call(null,seq__8359_9709__$1);
var G__9712 = c__5632__auto___9710;
var G__9713 = cljs.core.count.call(null,c__5632__auto___9710);
var G__9714 = 0;
seq__8359_9699 = G__9711;
chunk__8360_9700 = G__9712;
count__8361_9701 = G__9713;
i__8362_9702 = G__9714;
continue;
}
} else
{var arg__7135__auto___9715 = cljs.core.first.call(null,seq__8359_9709__$1);a__7134__auto__.push(arg__7135__auto___9715);
{
var G__9716 = cljs.core.next.call(null,seq__8359_9709__$1);
var G__9717 = null;
var G__9718 = 0;
var G__9719 = 0;
seq__8359_9699 = G__9716;
chunk__8360_9700 = G__9717;
count__8361_9701 = G__9718;
i__8362_9702 = G__9719;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.div.apply(null,a__7134__auto__);
};
var div = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return div__delegate.call(this,args__7133__auto__);};
div.cljs$lang$maxFixedArity = 0;
div.cljs$lang$applyTo = (function (arglist__9720){
var args__7133__auto__ = cljs.core.seq(arglist__9720);
return div__delegate(args__7133__auto__);
});
div.cljs$core$IFn$_invoke$arity$variadic = div__delegate;
return div;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.dl = (function() { 
var dl__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8367_9721 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8368_9722 = null;var count__8369_9723 = 0;var i__8370_9724 = 0;while(true){
if((i__8370_9724 < count__8369_9723))
{var arg__7135__auto___9725 = cljs.core._nth.call(null,chunk__8368_9722,i__8370_9724);a__7134__auto__.push(arg__7135__auto___9725);
{
var G__9726 = seq__8367_9721;
var G__9727 = chunk__8368_9722;
var G__9728 = count__8369_9723;
var G__9729 = (i__8370_9724 + 1);
seq__8367_9721 = G__9726;
chunk__8368_9722 = G__9727;
count__8369_9723 = G__9728;
i__8370_9724 = G__9729;
continue;
}
} else
{var temp__4092__auto___9730 = cljs.core.seq.call(null,seq__8367_9721);if(temp__4092__auto___9730)
{var seq__8367_9731__$1 = temp__4092__auto___9730;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8367_9731__$1))
{var c__5632__auto___9732 = cljs.core.chunk_first.call(null,seq__8367_9731__$1);{
var G__9733 = cljs.core.chunk_rest.call(null,seq__8367_9731__$1);
var G__9734 = c__5632__auto___9732;
var G__9735 = cljs.core.count.call(null,c__5632__auto___9732);
var G__9736 = 0;
seq__8367_9721 = G__9733;
chunk__8368_9722 = G__9734;
count__8369_9723 = G__9735;
i__8370_9724 = G__9736;
continue;
}
} else
{var arg__7135__auto___9737 = cljs.core.first.call(null,seq__8367_9731__$1);a__7134__auto__.push(arg__7135__auto___9737);
{
var G__9738 = cljs.core.next.call(null,seq__8367_9731__$1);
var G__9739 = null;
var G__9740 = 0;
var G__9741 = 0;
seq__8367_9721 = G__9738;
chunk__8368_9722 = G__9739;
count__8369_9723 = G__9740;
i__8370_9724 = G__9741;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.dl.apply(null,a__7134__auto__);
};
var dl = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return dl__delegate.call(this,args__7133__auto__);};
dl.cljs$lang$maxFixedArity = 0;
dl.cljs$lang$applyTo = (function (arglist__9742){
var args__7133__auto__ = cljs.core.seq(arglist__9742);
return dl__delegate(args__7133__auto__);
});
dl.cljs$core$IFn$_invoke$arity$variadic = dl__delegate;
return dl;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.dt = (function() { 
var dt__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8375_9743 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8376_9744 = null;var count__8377_9745 = 0;var i__8378_9746 = 0;while(true){
if((i__8378_9746 < count__8377_9745))
{var arg__7135__auto___9747 = cljs.core._nth.call(null,chunk__8376_9744,i__8378_9746);a__7134__auto__.push(arg__7135__auto___9747);
{
var G__9748 = seq__8375_9743;
var G__9749 = chunk__8376_9744;
var G__9750 = count__8377_9745;
var G__9751 = (i__8378_9746 + 1);
seq__8375_9743 = G__9748;
chunk__8376_9744 = G__9749;
count__8377_9745 = G__9750;
i__8378_9746 = G__9751;
continue;
}
} else
{var temp__4092__auto___9752 = cljs.core.seq.call(null,seq__8375_9743);if(temp__4092__auto___9752)
{var seq__8375_9753__$1 = temp__4092__auto___9752;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8375_9753__$1))
{var c__5632__auto___9754 = cljs.core.chunk_first.call(null,seq__8375_9753__$1);{
var G__9755 = cljs.core.chunk_rest.call(null,seq__8375_9753__$1);
var G__9756 = c__5632__auto___9754;
var G__9757 = cljs.core.count.call(null,c__5632__auto___9754);
var G__9758 = 0;
seq__8375_9743 = G__9755;
chunk__8376_9744 = G__9756;
count__8377_9745 = G__9757;
i__8378_9746 = G__9758;
continue;
}
} else
{var arg__7135__auto___9759 = cljs.core.first.call(null,seq__8375_9753__$1);a__7134__auto__.push(arg__7135__auto___9759);
{
var G__9760 = cljs.core.next.call(null,seq__8375_9753__$1);
var G__9761 = null;
var G__9762 = 0;
var G__9763 = 0;
seq__8375_9743 = G__9760;
chunk__8376_9744 = G__9761;
count__8377_9745 = G__9762;
i__8378_9746 = G__9763;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.dt.apply(null,a__7134__auto__);
};
var dt = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return dt__delegate.call(this,args__7133__auto__);};
dt.cljs$lang$maxFixedArity = 0;
dt.cljs$lang$applyTo = (function (arglist__9764){
var args__7133__auto__ = cljs.core.seq(arglist__9764);
return dt__delegate(args__7133__auto__);
});
dt.cljs$core$IFn$_invoke$arity$variadic = dt__delegate;
return dt;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.em = (function() { 
var em__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8383_9765 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8384_9766 = null;var count__8385_9767 = 0;var i__8386_9768 = 0;while(true){
if((i__8386_9768 < count__8385_9767))
{var arg__7135__auto___9769 = cljs.core._nth.call(null,chunk__8384_9766,i__8386_9768);a__7134__auto__.push(arg__7135__auto___9769);
{
var G__9770 = seq__8383_9765;
var G__9771 = chunk__8384_9766;
var G__9772 = count__8385_9767;
var G__9773 = (i__8386_9768 + 1);
seq__8383_9765 = G__9770;
chunk__8384_9766 = G__9771;
count__8385_9767 = G__9772;
i__8386_9768 = G__9773;
continue;
}
} else
{var temp__4092__auto___9774 = cljs.core.seq.call(null,seq__8383_9765);if(temp__4092__auto___9774)
{var seq__8383_9775__$1 = temp__4092__auto___9774;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8383_9775__$1))
{var c__5632__auto___9776 = cljs.core.chunk_first.call(null,seq__8383_9775__$1);{
var G__9777 = cljs.core.chunk_rest.call(null,seq__8383_9775__$1);
var G__9778 = c__5632__auto___9776;
var G__9779 = cljs.core.count.call(null,c__5632__auto___9776);
var G__9780 = 0;
seq__8383_9765 = G__9777;
chunk__8384_9766 = G__9778;
count__8385_9767 = G__9779;
i__8386_9768 = G__9780;
continue;
}
} else
{var arg__7135__auto___9781 = cljs.core.first.call(null,seq__8383_9775__$1);a__7134__auto__.push(arg__7135__auto___9781);
{
var G__9782 = cljs.core.next.call(null,seq__8383_9775__$1);
var G__9783 = null;
var G__9784 = 0;
var G__9785 = 0;
seq__8383_9765 = G__9782;
chunk__8384_9766 = G__9783;
count__8385_9767 = G__9784;
i__8386_9768 = G__9785;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.em.apply(null,a__7134__auto__);
};
var em = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return em__delegate.call(this,args__7133__auto__);};
em.cljs$lang$maxFixedArity = 0;
em.cljs$lang$applyTo = (function (arglist__9786){
var args__7133__auto__ = cljs.core.seq(arglist__9786);
return em__delegate(args__7133__auto__);
});
em.cljs$core$IFn$_invoke$arity$variadic = em__delegate;
return em;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.embed = (function() { 
var embed__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8399_9787 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8400_9788 = null;var count__8401_9789 = 0;var i__8402_9790 = 0;while(true){
if((i__8402_9790 < count__8401_9789))
{var arg__7135__auto___9791 = cljs.core._nth.call(null,chunk__8400_9788,i__8402_9790);a__7134__auto__.push(arg__7135__auto___9791);
{
var G__9792 = seq__8399_9787;
var G__9793 = chunk__8400_9788;
var G__9794 = count__8401_9789;
var G__9795 = (i__8402_9790 + 1);
seq__8399_9787 = G__9792;
chunk__8400_9788 = G__9793;
count__8401_9789 = G__9794;
i__8402_9790 = G__9795;
continue;
}
} else
{var temp__4092__auto___9796 = cljs.core.seq.call(null,seq__8399_9787);if(temp__4092__auto___9796)
{var seq__8399_9797__$1 = temp__4092__auto___9796;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8399_9797__$1))
{var c__5632__auto___9798 = cljs.core.chunk_first.call(null,seq__8399_9797__$1);{
var G__9799 = cljs.core.chunk_rest.call(null,seq__8399_9797__$1);
var G__9800 = c__5632__auto___9798;
var G__9801 = cljs.core.count.call(null,c__5632__auto___9798);
var G__9802 = 0;
seq__8399_9787 = G__9799;
chunk__8400_9788 = G__9800;
count__8401_9789 = G__9801;
i__8402_9790 = G__9802;
continue;
}
} else
{var arg__7135__auto___9803 = cljs.core.first.call(null,seq__8399_9797__$1);a__7134__auto__.push(arg__7135__auto___9803);
{
var G__9804 = cljs.core.next.call(null,seq__8399_9797__$1);
var G__9805 = null;
var G__9806 = 0;
var G__9807 = 0;
seq__8399_9787 = G__9804;
chunk__8400_9788 = G__9805;
count__8401_9789 = G__9806;
i__8402_9790 = G__9807;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.embed.apply(null,a__7134__auto__);
};
var embed = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return embed__delegate.call(this,args__7133__auto__);};
embed.cljs$lang$maxFixedArity = 0;
embed.cljs$lang$applyTo = (function (arglist__9808){
var args__7133__auto__ = cljs.core.seq(arglist__9808);
return embed__delegate(args__7133__auto__);
});
embed.cljs$core$IFn$_invoke$arity$variadic = embed__delegate;
return embed;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.fieldset = (function() { 
var fieldset__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8407_9809 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8408_9810 = null;var count__8409_9811 = 0;var i__8410_9812 = 0;while(true){
if((i__8410_9812 < count__8409_9811))
{var arg__7135__auto___9813 = cljs.core._nth.call(null,chunk__8408_9810,i__8410_9812);a__7134__auto__.push(arg__7135__auto___9813);
{
var G__9814 = seq__8407_9809;
var G__9815 = chunk__8408_9810;
var G__9816 = count__8409_9811;
var G__9817 = (i__8410_9812 + 1);
seq__8407_9809 = G__9814;
chunk__8408_9810 = G__9815;
count__8409_9811 = G__9816;
i__8410_9812 = G__9817;
continue;
}
} else
{var temp__4092__auto___9818 = cljs.core.seq.call(null,seq__8407_9809);if(temp__4092__auto___9818)
{var seq__8407_9819__$1 = temp__4092__auto___9818;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8407_9819__$1))
{var c__5632__auto___9820 = cljs.core.chunk_first.call(null,seq__8407_9819__$1);{
var G__9821 = cljs.core.chunk_rest.call(null,seq__8407_9819__$1);
var G__9822 = c__5632__auto___9820;
var G__9823 = cljs.core.count.call(null,c__5632__auto___9820);
var G__9824 = 0;
seq__8407_9809 = G__9821;
chunk__8408_9810 = G__9822;
count__8409_9811 = G__9823;
i__8410_9812 = G__9824;
continue;
}
} else
{var arg__7135__auto___9825 = cljs.core.first.call(null,seq__8407_9819__$1);a__7134__auto__.push(arg__7135__auto___9825);
{
var G__9826 = cljs.core.next.call(null,seq__8407_9819__$1);
var G__9827 = null;
var G__9828 = 0;
var G__9829 = 0;
seq__8407_9809 = G__9826;
chunk__8408_9810 = G__9827;
count__8409_9811 = G__9828;
i__8410_9812 = G__9829;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.fieldset.apply(null,a__7134__auto__);
};
var fieldset = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return fieldset__delegate.call(this,args__7133__auto__);};
fieldset.cljs$lang$maxFixedArity = 0;
fieldset.cljs$lang$applyTo = (function (arglist__9830){
var args__7133__auto__ = cljs.core.seq(arglist__9830);
return fieldset__delegate(args__7133__auto__);
});
fieldset.cljs$core$IFn$_invoke$arity$variadic = fieldset__delegate;
return fieldset;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.figcaption = (function() { 
var figcaption__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8415_9831 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8416_9832 = null;var count__8417_9833 = 0;var i__8418_9834 = 0;while(true){
if((i__8418_9834 < count__8417_9833))
{var arg__7135__auto___9835 = cljs.core._nth.call(null,chunk__8416_9832,i__8418_9834);a__7134__auto__.push(arg__7135__auto___9835);
{
var G__9836 = seq__8415_9831;
var G__9837 = chunk__8416_9832;
var G__9838 = count__8417_9833;
var G__9839 = (i__8418_9834 + 1);
seq__8415_9831 = G__9836;
chunk__8416_9832 = G__9837;
count__8417_9833 = G__9838;
i__8418_9834 = G__9839;
continue;
}
} else
{var temp__4092__auto___9840 = cljs.core.seq.call(null,seq__8415_9831);if(temp__4092__auto___9840)
{var seq__8415_9841__$1 = temp__4092__auto___9840;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8415_9841__$1))
{var c__5632__auto___9842 = cljs.core.chunk_first.call(null,seq__8415_9841__$1);{
var G__9843 = cljs.core.chunk_rest.call(null,seq__8415_9841__$1);
var G__9844 = c__5632__auto___9842;
var G__9845 = cljs.core.count.call(null,c__5632__auto___9842);
var G__9846 = 0;
seq__8415_9831 = G__9843;
chunk__8416_9832 = G__9844;
count__8417_9833 = G__9845;
i__8418_9834 = G__9846;
continue;
}
} else
{var arg__7135__auto___9847 = cljs.core.first.call(null,seq__8415_9841__$1);a__7134__auto__.push(arg__7135__auto___9847);
{
var G__9848 = cljs.core.next.call(null,seq__8415_9841__$1);
var G__9849 = null;
var G__9850 = 0;
var G__9851 = 0;
seq__8415_9831 = G__9848;
chunk__8416_9832 = G__9849;
count__8417_9833 = G__9850;
i__8418_9834 = G__9851;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.figcaption.apply(null,a__7134__auto__);
};
var figcaption = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return figcaption__delegate.call(this,args__7133__auto__);};
figcaption.cljs$lang$maxFixedArity = 0;
figcaption.cljs$lang$applyTo = (function (arglist__9852){
var args__7133__auto__ = cljs.core.seq(arglist__9852);
return figcaption__delegate(args__7133__auto__);
});
figcaption.cljs$core$IFn$_invoke$arity$variadic = figcaption__delegate;
return figcaption;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.figure = (function() { 
var figure__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8423_9853 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8424_9854 = null;var count__8425_9855 = 0;var i__8426_9856 = 0;while(true){
if((i__8426_9856 < count__8425_9855))
{var arg__7135__auto___9857 = cljs.core._nth.call(null,chunk__8424_9854,i__8426_9856);a__7134__auto__.push(arg__7135__auto___9857);
{
var G__9858 = seq__8423_9853;
var G__9859 = chunk__8424_9854;
var G__9860 = count__8425_9855;
var G__9861 = (i__8426_9856 + 1);
seq__8423_9853 = G__9858;
chunk__8424_9854 = G__9859;
count__8425_9855 = G__9860;
i__8426_9856 = G__9861;
continue;
}
} else
{var temp__4092__auto___9862 = cljs.core.seq.call(null,seq__8423_9853);if(temp__4092__auto___9862)
{var seq__8423_9863__$1 = temp__4092__auto___9862;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8423_9863__$1))
{var c__5632__auto___9864 = cljs.core.chunk_first.call(null,seq__8423_9863__$1);{
var G__9865 = cljs.core.chunk_rest.call(null,seq__8423_9863__$1);
var G__9866 = c__5632__auto___9864;
var G__9867 = cljs.core.count.call(null,c__5632__auto___9864);
var G__9868 = 0;
seq__8423_9853 = G__9865;
chunk__8424_9854 = G__9866;
count__8425_9855 = G__9867;
i__8426_9856 = G__9868;
continue;
}
} else
{var arg__7135__auto___9869 = cljs.core.first.call(null,seq__8423_9863__$1);a__7134__auto__.push(arg__7135__auto___9869);
{
var G__9870 = cljs.core.next.call(null,seq__8423_9863__$1);
var G__9871 = null;
var G__9872 = 0;
var G__9873 = 0;
seq__8423_9853 = G__9870;
chunk__8424_9854 = G__9871;
count__8425_9855 = G__9872;
i__8426_9856 = G__9873;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.figure.apply(null,a__7134__auto__);
};
var figure = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return figure__delegate.call(this,args__7133__auto__);};
figure.cljs$lang$maxFixedArity = 0;
figure.cljs$lang$applyTo = (function (arglist__9874){
var args__7133__auto__ = cljs.core.seq(arglist__9874);
return figure__delegate(args__7133__auto__);
});
figure.cljs$core$IFn$_invoke$arity$variadic = figure__delegate;
return figure;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.footer = (function() { 
var footer__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8431_9875 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8432_9876 = null;var count__8433_9877 = 0;var i__8434_9878 = 0;while(true){
if((i__8434_9878 < count__8433_9877))
{var arg__7135__auto___9879 = cljs.core._nth.call(null,chunk__8432_9876,i__8434_9878);a__7134__auto__.push(arg__7135__auto___9879);
{
var G__9880 = seq__8431_9875;
var G__9881 = chunk__8432_9876;
var G__9882 = count__8433_9877;
var G__9883 = (i__8434_9878 + 1);
seq__8431_9875 = G__9880;
chunk__8432_9876 = G__9881;
count__8433_9877 = G__9882;
i__8434_9878 = G__9883;
continue;
}
} else
{var temp__4092__auto___9884 = cljs.core.seq.call(null,seq__8431_9875);if(temp__4092__auto___9884)
{var seq__8431_9885__$1 = temp__4092__auto___9884;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8431_9885__$1))
{var c__5632__auto___9886 = cljs.core.chunk_first.call(null,seq__8431_9885__$1);{
var G__9887 = cljs.core.chunk_rest.call(null,seq__8431_9885__$1);
var G__9888 = c__5632__auto___9886;
var G__9889 = cljs.core.count.call(null,c__5632__auto___9886);
var G__9890 = 0;
seq__8431_9875 = G__9887;
chunk__8432_9876 = G__9888;
count__8433_9877 = G__9889;
i__8434_9878 = G__9890;
continue;
}
} else
{var arg__7135__auto___9891 = cljs.core.first.call(null,seq__8431_9885__$1);a__7134__auto__.push(arg__7135__auto___9891);
{
var G__9892 = cljs.core.next.call(null,seq__8431_9885__$1);
var G__9893 = null;
var G__9894 = 0;
var G__9895 = 0;
seq__8431_9875 = G__9892;
chunk__8432_9876 = G__9893;
count__8433_9877 = G__9894;
i__8434_9878 = G__9895;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.footer.apply(null,a__7134__auto__);
};
var footer = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return footer__delegate.call(this,args__7133__auto__);};
footer.cljs$lang$maxFixedArity = 0;
footer.cljs$lang$applyTo = (function (arglist__9896){
var args__7133__auto__ = cljs.core.seq(arglist__9896);
return footer__delegate(args__7133__auto__);
});
footer.cljs$core$IFn$_invoke$arity$variadic = footer__delegate;
return footer;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.form = (function() { 
var form__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8439_9897 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8440_9898 = null;var count__8441_9899 = 0;var i__8442_9900 = 0;while(true){
if((i__8442_9900 < count__8441_9899))
{var arg__7135__auto___9901 = cljs.core._nth.call(null,chunk__8440_9898,i__8442_9900);a__7134__auto__.push(arg__7135__auto___9901);
{
var G__9902 = seq__8439_9897;
var G__9903 = chunk__8440_9898;
var G__9904 = count__8441_9899;
var G__9905 = (i__8442_9900 + 1);
seq__8439_9897 = G__9902;
chunk__8440_9898 = G__9903;
count__8441_9899 = G__9904;
i__8442_9900 = G__9905;
continue;
}
} else
{var temp__4092__auto___9906 = cljs.core.seq.call(null,seq__8439_9897);if(temp__4092__auto___9906)
{var seq__8439_9907__$1 = temp__4092__auto___9906;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8439_9907__$1))
{var c__5632__auto___9908 = cljs.core.chunk_first.call(null,seq__8439_9907__$1);{
var G__9909 = cljs.core.chunk_rest.call(null,seq__8439_9907__$1);
var G__9910 = c__5632__auto___9908;
var G__9911 = cljs.core.count.call(null,c__5632__auto___9908);
var G__9912 = 0;
seq__8439_9897 = G__9909;
chunk__8440_9898 = G__9910;
count__8441_9899 = G__9911;
i__8442_9900 = G__9912;
continue;
}
} else
{var arg__7135__auto___9913 = cljs.core.first.call(null,seq__8439_9907__$1);a__7134__auto__.push(arg__7135__auto___9913);
{
var G__9914 = cljs.core.next.call(null,seq__8439_9907__$1);
var G__9915 = null;
var G__9916 = 0;
var G__9917 = 0;
seq__8439_9897 = G__9914;
chunk__8440_9898 = G__9915;
count__8441_9899 = G__9916;
i__8442_9900 = G__9917;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.form.apply(null,a__7134__auto__);
};
var form = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return form__delegate.call(this,args__7133__auto__);};
form.cljs$lang$maxFixedArity = 0;
form.cljs$lang$applyTo = (function (arglist__9918){
var args__7133__auto__ = cljs.core.seq(arglist__9918);
return form__delegate(args__7133__auto__);
});
form.cljs$core$IFn$_invoke$arity$variadic = form__delegate;
return form;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h1 = (function() { 
var h1__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8447_9919 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8448_9920 = null;var count__8449_9921 = 0;var i__8450_9922 = 0;while(true){
if((i__8450_9922 < count__8449_9921))
{var arg__7135__auto___9923 = cljs.core._nth.call(null,chunk__8448_9920,i__8450_9922);a__7134__auto__.push(arg__7135__auto___9923);
{
var G__9924 = seq__8447_9919;
var G__9925 = chunk__8448_9920;
var G__9926 = count__8449_9921;
var G__9927 = (i__8450_9922 + 1);
seq__8447_9919 = G__9924;
chunk__8448_9920 = G__9925;
count__8449_9921 = G__9926;
i__8450_9922 = G__9927;
continue;
}
} else
{var temp__4092__auto___9928 = cljs.core.seq.call(null,seq__8447_9919);if(temp__4092__auto___9928)
{var seq__8447_9929__$1 = temp__4092__auto___9928;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8447_9929__$1))
{var c__5632__auto___9930 = cljs.core.chunk_first.call(null,seq__8447_9929__$1);{
var G__9931 = cljs.core.chunk_rest.call(null,seq__8447_9929__$1);
var G__9932 = c__5632__auto___9930;
var G__9933 = cljs.core.count.call(null,c__5632__auto___9930);
var G__9934 = 0;
seq__8447_9919 = G__9931;
chunk__8448_9920 = G__9932;
count__8449_9921 = G__9933;
i__8450_9922 = G__9934;
continue;
}
} else
{var arg__7135__auto___9935 = cljs.core.first.call(null,seq__8447_9929__$1);a__7134__auto__.push(arg__7135__auto___9935);
{
var G__9936 = cljs.core.next.call(null,seq__8447_9929__$1);
var G__9937 = null;
var G__9938 = 0;
var G__9939 = 0;
seq__8447_9919 = G__9936;
chunk__8448_9920 = G__9937;
count__8449_9921 = G__9938;
i__8450_9922 = G__9939;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h1.apply(null,a__7134__auto__);
};
var h1 = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h1__delegate.call(this,args__7133__auto__);};
h1.cljs$lang$maxFixedArity = 0;
h1.cljs$lang$applyTo = (function (arglist__9940){
var args__7133__auto__ = cljs.core.seq(arglist__9940);
return h1__delegate(args__7133__auto__);
});
h1.cljs$core$IFn$_invoke$arity$variadic = h1__delegate;
return h1;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h2 = (function() { 
var h2__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8455_9941 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8456_9942 = null;var count__8457_9943 = 0;var i__8458_9944 = 0;while(true){
if((i__8458_9944 < count__8457_9943))
{var arg__7135__auto___9945 = cljs.core._nth.call(null,chunk__8456_9942,i__8458_9944);a__7134__auto__.push(arg__7135__auto___9945);
{
var G__9946 = seq__8455_9941;
var G__9947 = chunk__8456_9942;
var G__9948 = count__8457_9943;
var G__9949 = (i__8458_9944 + 1);
seq__8455_9941 = G__9946;
chunk__8456_9942 = G__9947;
count__8457_9943 = G__9948;
i__8458_9944 = G__9949;
continue;
}
} else
{var temp__4092__auto___9950 = cljs.core.seq.call(null,seq__8455_9941);if(temp__4092__auto___9950)
{var seq__8455_9951__$1 = temp__4092__auto___9950;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8455_9951__$1))
{var c__5632__auto___9952 = cljs.core.chunk_first.call(null,seq__8455_9951__$1);{
var G__9953 = cljs.core.chunk_rest.call(null,seq__8455_9951__$1);
var G__9954 = c__5632__auto___9952;
var G__9955 = cljs.core.count.call(null,c__5632__auto___9952);
var G__9956 = 0;
seq__8455_9941 = G__9953;
chunk__8456_9942 = G__9954;
count__8457_9943 = G__9955;
i__8458_9944 = G__9956;
continue;
}
} else
{var arg__7135__auto___9957 = cljs.core.first.call(null,seq__8455_9951__$1);a__7134__auto__.push(arg__7135__auto___9957);
{
var G__9958 = cljs.core.next.call(null,seq__8455_9951__$1);
var G__9959 = null;
var G__9960 = 0;
var G__9961 = 0;
seq__8455_9941 = G__9958;
chunk__8456_9942 = G__9959;
count__8457_9943 = G__9960;
i__8458_9944 = G__9961;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h2.apply(null,a__7134__auto__);
};
var h2 = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h2__delegate.call(this,args__7133__auto__);};
h2.cljs$lang$maxFixedArity = 0;
h2.cljs$lang$applyTo = (function (arglist__9962){
var args__7133__auto__ = cljs.core.seq(arglist__9962);
return h2__delegate(args__7133__auto__);
});
h2.cljs$core$IFn$_invoke$arity$variadic = h2__delegate;
return h2;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h3 = (function() { 
var h3__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8463_9963 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8464_9964 = null;var count__8465_9965 = 0;var i__8466_9966 = 0;while(true){
if((i__8466_9966 < count__8465_9965))
{var arg__7135__auto___9967 = cljs.core._nth.call(null,chunk__8464_9964,i__8466_9966);a__7134__auto__.push(arg__7135__auto___9967);
{
var G__9968 = seq__8463_9963;
var G__9969 = chunk__8464_9964;
var G__9970 = count__8465_9965;
var G__9971 = (i__8466_9966 + 1);
seq__8463_9963 = G__9968;
chunk__8464_9964 = G__9969;
count__8465_9965 = G__9970;
i__8466_9966 = G__9971;
continue;
}
} else
{var temp__4092__auto___9972 = cljs.core.seq.call(null,seq__8463_9963);if(temp__4092__auto___9972)
{var seq__8463_9973__$1 = temp__4092__auto___9972;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8463_9973__$1))
{var c__5632__auto___9974 = cljs.core.chunk_first.call(null,seq__8463_9973__$1);{
var G__9975 = cljs.core.chunk_rest.call(null,seq__8463_9973__$1);
var G__9976 = c__5632__auto___9974;
var G__9977 = cljs.core.count.call(null,c__5632__auto___9974);
var G__9978 = 0;
seq__8463_9963 = G__9975;
chunk__8464_9964 = G__9976;
count__8465_9965 = G__9977;
i__8466_9966 = G__9978;
continue;
}
} else
{var arg__7135__auto___9979 = cljs.core.first.call(null,seq__8463_9973__$1);a__7134__auto__.push(arg__7135__auto___9979);
{
var G__9980 = cljs.core.next.call(null,seq__8463_9973__$1);
var G__9981 = null;
var G__9982 = 0;
var G__9983 = 0;
seq__8463_9963 = G__9980;
chunk__8464_9964 = G__9981;
count__8465_9965 = G__9982;
i__8466_9966 = G__9983;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h3.apply(null,a__7134__auto__);
};
var h3 = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h3__delegate.call(this,args__7133__auto__);};
h3.cljs$lang$maxFixedArity = 0;
h3.cljs$lang$applyTo = (function (arglist__9984){
var args__7133__auto__ = cljs.core.seq(arglist__9984);
return h3__delegate(args__7133__auto__);
});
h3.cljs$core$IFn$_invoke$arity$variadic = h3__delegate;
return h3;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h4 = (function() { 
var h4__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8471_9985 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8472_9986 = null;var count__8473_9987 = 0;var i__8474_9988 = 0;while(true){
if((i__8474_9988 < count__8473_9987))
{var arg__7135__auto___9989 = cljs.core._nth.call(null,chunk__8472_9986,i__8474_9988);a__7134__auto__.push(arg__7135__auto___9989);
{
var G__9990 = seq__8471_9985;
var G__9991 = chunk__8472_9986;
var G__9992 = count__8473_9987;
var G__9993 = (i__8474_9988 + 1);
seq__8471_9985 = G__9990;
chunk__8472_9986 = G__9991;
count__8473_9987 = G__9992;
i__8474_9988 = G__9993;
continue;
}
} else
{var temp__4092__auto___9994 = cljs.core.seq.call(null,seq__8471_9985);if(temp__4092__auto___9994)
{var seq__8471_9995__$1 = temp__4092__auto___9994;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8471_9995__$1))
{var c__5632__auto___9996 = cljs.core.chunk_first.call(null,seq__8471_9995__$1);{
var G__9997 = cljs.core.chunk_rest.call(null,seq__8471_9995__$1);
var G__9998 = c__5632__auto___9996;
var G__9999 = cljs.core.count.call(null,c__5632__auto___9996);
var G__10000 = 0;
seq__8471_9985 = G__9997;
chunk__8472_9986 = G__9998;
count__8473_9987 = G__9999;
i__8474_9988 = G__10000;
continue;
}
} else
{var arg__7135__auto___10001 = cljs.core.first.call(null,seq__8471_9995__$1);a__7134__auto__.push(arg__7135__auto___10001);
{
var G__10002 = cljs.core.next.call(null,seq__8471_9995__$1);
var G__10003 = null;
var G__10004 = 0;
var G__10005 = 0;
seq__8471_9985 = G__10002;
chunk__8472_9986 = G__10003;
count__8473_9987 = G__10004;
i__8474_9988 = G__10005;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h4.apply(null,a__7134__auto__);
};
var h4 = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h4__delegate.call(this,args__7133__auto__);};
h4.cljs$lang$maxFixedArity = 0;
h4.cljs$lang$applyTo = (function (arglist__10006){
var args__7133__auto__ = cljs.core.seq(arglist__10006);
return h4__delegate(args__7133__auto__);
});
h4.cljs$core$IFn$_invoke$arity$variadic = h4__delegate;
return h4;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h5 = (function() { 
var h5__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8479_10007 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8480_10008 = null;var count__8481_10009 = 0;var i__8482_10010 = 0;while(true){
if((i__8482_10010 < count__8481_10009))
{var arg__7135__auto___10011 = cljs.core._nth.call(null,chunk__8480_10008,i__8482_10010);a__7134__auto__.push(arg__7135__auto___10011);
{
var G__10012 = seq__8479_10007;
var G__10013 = chunk__8480_10008;
var G__10014 = count__8481_10009;
var G__10015 = (i__8482_10010 + 1);
seq__8479_10007 = G__10012;
chunk__8480_10008 = G__10013;
count__8481_10009 = G__10014;
i__8482_10010 = G__10015;
continue;
}
} else
{var temp__4092__auto___10016 = cljs.core.seq.call(null,seq__8479_10007);if(temp__4092__auto___10016)
{var seq__8479_10017__$1 = temp__4092__auto___10016;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8479_10017__$1))
{var c__5632__auto___10018 = cljs.core.chunk_first.call(null,seq__8479_10017__$1);{
var G__10019 = cljs.core.chunk_rest.call(null,seq__8479_10017__$1);
var G__10020 = c__5632__auto___10018;
var G__10021 = cljs.core.count.call(null,c__5632__auto___10018);
var G__10022 = 0;
seq__8479_10007 = G__10019;
chunk__8480_10008 = G__10020;
count__8481_10009 = G__10021;
i__8482_10010 = G__10022;
continue;
}
} else
{var arg__7135__auto___10023 = cljs.core.first.call(null,seq__8479_10017__$1);a__7134__auto__.push(arg__7135__auto___10023);
{
var G__10024 = cljs.core.next.call(null,seq__8479_10017__$1);
var G__10025 = null;
var G__10026 = 0;
var G__10027 = 0;
seq__8479_10007 = G__10024;
chunk__8480_10008 = G__10025;
count__8481_10009 = G__10026;
i__8482_10010 = G__10027;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h5.apply(null,a__7134__auto__);
};
var h5 = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h5__delegate.call(this,args__7133__auto__);};
h5.cljs$lang$maxFixedArity = 0;
h5.cljs$lang$applyTo = (function (arglist__10028){
var args__7133__auto__ = cljs.core.seq(arglist__10028);
return h5__delegate(args__7133__auto__);
});
h5.cljs$core$IFn$_invoke$arity$variadic = h5__delegate;
return h5;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h6 = (function() { 
var h6__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8487_10029 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8488_10030 = null;var count__8489_10031 = 0;var i__8490_10032 = 0;while(true){
if((i__8490_10032 < count__8489_10031))
{var arg__7135__auto___10033 = cljs.core._nth.call(null,chunk__8488_10030,i__8490_10032);a__7134__auto__.push(arg__7135__auto___10033);
{
var G__10034 = seq__8487_10029;
var G__10035 = chunk__8488_10030;
var G__10036 = count__8489_10031;
var G__10037 = (i__8490_10032 + 1);
seq__8487_10029 = G__10034;
chunk__8488_10030 = G__10035;
count__8489_10031 = G__10036;
i__8490_10032 = G__10037;
continue;
}
} else
{var temp__4092__auto___10038 = cljs.core.seq.call(null,seq__8487_10029);if(temp__4092__auto___10038)
{var seq__8487_10039__$1 = temp__4092__auto___10038;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8487_10039__$1))
{var c__5632__auto___10040 = cljs.core.chunk_first.call(null,seq__8487_10039__$1);{
var G__10041 = cljs.core.chunk_rest.call(null,seq__8487_10039__$1);
var G__10042 = c__5632__auto___10040;
var G__10043 = cljs.core.count.call(null,c__5632__auto___10040);
var G__10044 = 0;
seq__8487_10029 = G__10041;
chunk__8488_10030 = G__10042;
count__8489_10031 = G__10043;
i__8490_10032 = G__10044;
continue;
}
} else
{var arg__7135__auto___10045 = cljs.core.first.call(null,seq__8487_10039__$1);a__7134__auto__.push(arg__7135__auto___10045);
{
var G__10046 = cljs.core.next.call(null,seq__8487_10039__$1);
var G__10047 = null;
var G__10048 = 0;
var G__10049 = 0;
seq__8487_10029 = G__10046;
chunk__8488_10030 = G__10047;
count__8489_10031 = G__10048;
i__8490_10032 = G__10049;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h6.apply(null,a__7134__auto__);
};
var h6 = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h6__delegate.call(this,args__7133__auto__);};
h6.cljs$lang$maxFixedArity = 0;
h6.cljs$lang$applyTo = (function (arglist__10050){
var args__7133__auto__ = cljs.core.seq(arglist__10050);
return h6__delegate(args__7133__auto__);
});
h6.cljs$core$IFn$_invoke$arity$variadic = h6__delegate;
return h6;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.head = (function() { 
var head__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8495_10051 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8496_10052 = null;var count__8497_10053 = 0;var i__8498_10054 = 0;while(true){
if((i__8498_10054 < count__8497_10053))
{var arg__7135__auto___10055 = cljs.core._nth.call(null,chunk__8496_10052,i__8498_10054);a__7134__auto__.push(arg__7135__auto___10055);
{
var G__10056 = seq__8495_10051;
var G__10057 = chunk__8496_10052;
var G__10058 = count__8497_10053;
var G__10059 = (i__8498_10054 + 1);
seq__8495_10051 = G__10056;
chunk__8496_10052 = G__10057;
count__8497_10053 = G__10058;
i__8498_10054 = G__10059;
continue;
}
} else
{var temp__4092__auto___10060 = cljs.core.seq.call(null,seq__8495_10051);if(temp__4092__auto___10060)
{var seq__8495_10061__$1 = temp__4092__auto___10060;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8495_10061__$1))
{var c__5632__auto___10062 = cljs.core.chunk_first.call(null,seq__8495_10061__$1);{
var G__10063 = cljs.core.chunk_rest.call(null,seq__8495_10061__$1);
var G__10064 = c__5632__auto___10062;
var G__10065 = cljs.core.count.call(null,c__5632__auto___10062);
var G__10066 = 0;
seq__8495_10051 = G__10063;
chunk__8496_10052 = G__10064;
count__8497_10053 = G__10065;
i__8498_10054 = G__10066;
continue;
}
} else
{var arg__7135__auto___10067 = cljs.core.first.call(null,seq__8495_10061__$1);a__7134__auto__.push(arg__7135__auto___10067);
{
var G__10068 = cljs.core.next.call(null,seq__8495_10061__$1);
var G__10069 = null;
var G__10070 = 0;
var G__10071 = 0;
seq__8495_10051 = G__10068;
chunk__8496_10052 = G__10069;
count__8497_10053 = G__10070;
i__8498_10054 = G__10071;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.head.apply(null,a__7134__auto__);
};
var head = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return head__delegate.call(this,args__7133__auto__);};
head.cljs$lang$maxFixedArity = 0;
head.cljs$lang$applyTo = (function (arglist__10072){
var args__7133__auto__ = cljs.core.seq(arglist__10072);
return head__delegate(args__7133__auto__);
});
head.cljs$core$IFn$_invoke$arity$variadic = head__delegate;
return head;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.header = (function() { 
var header__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8503_10073 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8504_10074 = null;var count__8505_10075 = 0;var i__8506_10076 = 0;while(true){
if((i__8506_10076 < count__8505_10075))
{var arg__7135__auto___10077 = cljs.core._nth.call(null,chunk__8504_10074,i__8506_10076);a__7134__auto__.push(arg__7135__auto___10077);
{
var G__10078 = seq__8503_10073;
var G__10079 = chunk__8504_10074;
var G__10080 = count__8505_10075;
var G__10081 = (i__8506_10076 + 1);
seq__8503_10073 = G__10078;
chunk__8504_10074 = G__10079;
count__8505_10075 = G__10080;
i__8506_10076 = G__10081;
continue;
}
} else
{var temp__4092__auto___10082 = cljs.core.seq.call(null,seq__8503_10073);if(temp__4092__auto___10082)
{var seq__8503_10083__$1 = temp__4092__auto___10082;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8503_10083__$1))
{var c__5632__auto___10084 = cljs.core.chunk_first.call(null,seq__8503_10083__$1);{
var G__10085 = cljs.core.chunk_rest.call(null,seq__8503_10083__$1);
var G__10086 = c__5632__auto___10084;
var G__10087 = cljs.core.count.call(null,c__5632__auto___10084);
var G__10088 = 0;
seq__8503_10073 = G__10085;
chunk__8504_10074 = G__10086;
count__8505_10075 = G__10087;
i__8506_10076 = G__10088;
continue;
}
} else
{var arg__7135__auto___10089 = cljs.core.first.call(null,seq__8503_10083__$1);a__7134__auto__.push(arg__7135__auto___10089);
{
var G__10090 = cljs.core.next.call(null,seq__8503_10083__$1);
var G__10091 = null;
var G__10092 = 0;
var G__10093 = 0;
seq__8503_10073 = G__10090;
chunk__8504_10074 = G__10091;
count__8505_10075 = G__10092;
i__8506_10076 = G__10093;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.header.apply(null,a__7134__auto__);
};
var header = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return header__delegate.call(this,args__7133__auto__);};
header.cljs$lang$maxFixedArity = 0;
header.cljs$lang$applyTo = (function (arglist__10094){
var args__7133__auto__ = cljs.core.seq(arglist__10094);
return header__delegate(args__7133__auto__);
});
header.cljs$core$IFn$_invoke$arity$variadic = header__delegate;
return header;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.hr = (function() { 
var hr__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8511_10095 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8512_10096 = null;var count__8513_10097 = 0;var i__8514_10098 = 0;while(true){
if((i__8514_10098 < count__8513_10097))
{var arg__7135__auto___10099 = cljs.core._nth.call(null,chunk__8512_10096,i__8514_10098);a__7134__auto__.push(arg__7135__auto___10099);
{
var G__10100 = seq__8511_10095;
var G__10101 = chunk__8512_10096;
var G__10102 = count__8513_10097;
var G__10103 = (i__8514_10098 + 1);
seq__8511_10095 = G__10100;
chunk__8512_10096 = G__10101;
count__8513_10097 = G__10102;
i__8514_10098 = G__10103;
continue;
}
} else
{var temp__4092__auto___10104 = cljs.core.seq.call(null,seq__8511_10095);if(temp__4092__auto___10104)
{var seq__8511_10105__$1 = temp__4092__auto___10104;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8511_10105__$1))
{var c__5632__auto___10106 = cljs.core.chunk_first.call(null,seq__8511_10105__$1);{
var G__10107 = cljs.core.chunk_rest.call(null,seq__8511_10105__$1);
var G__10108 = c__5632__auto___10106;
var G__10109 = cljs.core.count.call(null,c__5632__auto___10106);
var G__10110 = 0;
seq__8511_10095 = G__10107;
chunk__8512_10096 = G__10108;
count__8513_10097 = G__10109;
i__8514_10098 = G__10110;
continue;
}
} else
{var arg__7135__auto___10111 = cljs.core.first.call(null,seq__8511_10105__$1);a__7134__auto__.push(arg__7135__auto___10111);
{
var G__10112 = cljs.core.next.call(null,seq__8511_10105__$1);
var G__10113 = null;
var G__10114 = 0;
var G__10115 = 0;
seq__8511_10095 = G__10112;
chunk__8512_10096 = G__10113;
count__8513_10097 = G__10114;
i__8514_10098 = G__10115;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.hr.apply(null,a__7134__auto__);
};
var hr = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return hr__delegate.call(this,args__7133__auto__);};
hr.cljs$lang$maxFixedArity = 0;
hr.cljs$lang$applyTo = (function (arglist__10116){
var args__7133__auto__ = cljs.core.seq(arglist__10116);
return hr__delegate(args__7133__auto__);
});
hr.cljs$core$IFn$_invoke$arity$variadic = hr__delegate;
return hr;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.html = (function() { 
var html__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8519_10117 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8520_10118 = null;var count__8521_10119 = 0;var i__8522_10120 = 0;while(true){
if((i__8522_10120 < count__8521_10119))
{var arg__7135__auto___10121 = cljs.core._nth.call(null,chunk__8520_10118,i__8522_10120);a__7134__auto__.push(arg__7135__auto___10121);
{
var G__10122 = seq__8519_10117;
var G__10123 = chunk__8520_10118;
var G__10124 = count__8521_10119;
var G__10125 = (i__8522_10120 + 1);
seq__8519_10117 = G__10122;
chunk__8520_10118 = G__10123;
count__8521_10119 = G__10124;
i__8522_10120 = G__10125;
continue;
}
} else
{var temp__4092__auto___10126 = cljs.core.seq.call(null,seq__8519_10117);if(temp__4092__auto___10126)
{var seq__8519_10127__$1 = temp__4092__auto___10126;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8519_10127__$1))
{var c__5632__auto___10128 = cljs.core.chunk_first.call(null,seq__8519_10127__$1);{
var G__10129 = cljs.core.chunk_rest.call(null,seq__8519_10127__$1);
var G__10130 = c__5632__auto___10128;
var G__10131 = cljs.core.count.call(null,c__5632__auto___10128);
var G__10132 = 0;
seq__8519_10117 = G__10129;
chunk__8520_10118 = G__10130;
count__8521_10119 = G__10131;
i__8522_10120 = G__10132;
continue;
}
} else
{var arg__7135__auto___10133 = cljs.core.first.call(null,seq__8519_10127__$1);a__7134__auto__.push(arg__7135__auto___10133);
{
var G__10134 = cljs.core.next.call(null,seq__8519_10127__$1);
var G__10135 = null;
var G__10136 = 0;
var G__10137 = 0;
seq__8519_10117 = G__10134;
chunk__8520_10118 = G__10135;
count__8521_10119 = G__10136;
i__8522_10120 = G__10137;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.html.apply(null,a__7134__auto__);
};
var html = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return html__delegate.call(this,args__7133__auto__);};
html.cljs$lang$maxFixedArity = 0;
html.cljs$lang$applyTo = (function (arglist__10138){
var args__7133__auto__ = cljs.core.seq(arglist__10138);
return html__delegate(args__7133__auto__);
});
html.cljs$core$IFn$_invoke$arity$variadic = html__delegate;
return html;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.i = (function() { 
var i__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8527_10139 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8528_10140 = null;var count__8529_10141 = 0;var i__8530_10142 = 0;while(true){
if((i__8530_10142 < count__8529_10141))
{var arg__7135__auto___10143 = cljs.core._nth.call(null,chunk__8528_10140,i__8530_10142);a__7134__auto__.push(arg__7135__auto___10143);
{
var G__10144 = seq__8527_10139;
var G__10145 = chunk__8528_10140;
var G__10146 = count__8529_10141;
var G__10147 = (i__8530_10142 + 1);
seq__8527_10139 = G__10144;
chunk__8528_10140 = G__10145;
count__8529_10141 = G__10146;
i__8530_10142 = G__10147;
continue;
}
} else
{var temp__4092__auto___10148 = cljs.core.seq.call(null,seq__8527_10139);if(temp__4092__auto___10148)
{var seq__8527_10149__$1 = temp__4092__auto___10148;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8527_10149__$1))
{var c__5632__auto___10150 = cljs.core.chunk_first.call(null,seq__8527_10149__$1);{
var G__10151 = cljs.core.chunk_rest.call(null,seq__8527_10149__$1);
var G__10152 = c__5632__auto___10150;
var G__10153 = cljs.core.count.call(null,c__5632__auto___10150);
var G__10154 = 0;
seq__8527_10139 = G__10151;
chunk__8528_10140 = G__10152;
count__8529_10141 = G__10153;
i__8530_10142 = G__10154;
continue;
}
} else
{var arg__7135__auto___10155 = cljs.core.first.call(null,seq__8527_10149__$1);a__7134__auto__.push(arg__7135__auto___10155);
{
var G__10156 = cljs.core.next.call(null,seq__8527_10149__$1);
var G__10157 = null;
var G__10158 = 0;
var G__10159 = 0;
seq__8527_10139 = G__10156;
chunk__8528_10140 = G__10157;
count__8529_10141 = G__10158;
i__8530_10142 = G__10159;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.i.apply(null,a__7134__auto__);
};
var i = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return i__delegate.call(this,args__7133__auto__);};
i.cljs$lang$maxFixedArity = 0;
i.cljs$lang$applyTo = (function (arglist__10160){
var args__7133__auto__ = cljs.core.seq(arglist__10160);
return i__delegate(args__7133__auto__);
});
i.cljs$core$IFn$_invoke$arity$variadic = i__delegate;
return i;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.iframe = (function() { 
var iframe__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8535_10161 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8536_10162 = null;var count__8537_10163 = 0;var i__8538_10164 = 0;while(true){
if((i__8538_10164 < count__8537_10163))
{var arg__7135__auto___10165 = cljs.core._nth.call(null,chunk__8536_10162,i__8538_10164);a__7134__auto__.push(arg__7135__auto___10165);
{
var G__10166 = seq__8535_10161;
var G__10167 = chunk__8536_10162;
var G__10168 = count__8537_10163;
var G__10169 = (i__8538_10164 + 1);
seq__8535_10161 = G__10166;
chunk__8536_10162 = G__10167;
count__8537_10163 = G__10168;
i__8538_10164 = G__10169;
continue;
}
} else
{var temp__4092__auto___10170 = cljs.core.seq.call(null,seq__8535_10161);if(temp__4092__auto___10170)
{var seq__8535_10171__$1 = temp__4092__auto___10170;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8535_10171__$1))
{var c__5632__auto___10172 = cljs.core.chunk_first.call(null,seq__8535_10171__$1);{
var G__10173 = cljs.core.chunk_rest.call(null,seq__8535_10171__$1);
var G__10174 = c__5632__auto___10172;
var G__10175 = cljs.core.count.call(null,c__5632__auto___10172);
var G__10176 = 0;
seq__8535_10161 = G__10173;
chunk__8536_10162 = G__10174;
count__8537_10163 = G__10175;
i__8538_10164 = G__10176;
continue;
}
} else
{var arg__7135__auto___10177 = cljs.core.first.call(null,seq__8535_10171__$1);a__7134__auto__.push(arg__7135__auto___10177);
{
var G__10178 = cljs.core.next.call(null,seq__8535_10171__$1);
var G__10179 = null;
var G__10180 = 0;
var G__10181 = 0;
seq__8535_10161 = G__10178;
chunk__8536_10162 = G__10179;
count__8537_10163 = G__10180;
i__8538_10164 = G__10181;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.iframe.apply(null,a__7134__auto__);
};
var iframe = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return iframe__delegate.call(this,args__7133__auto__);};
iframe.cljs$lang$maxFixedArity = 0;
iframe.cljs$lang$applyTo = (function (arglist__10182){
var args__7133__auto__ = cljs.core.seq(arglist__10182);
return iframe__delegate(args__7133__auto__);
});
iframe.cljs$core$IFn$_invoke$arity$variadic = iframe__delegate;
return iframe;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.img = (function() { 
var img__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8543_10183 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8544_10184 = null;var count__8545_10185 = 0;var i__8546_10186 = 0;while(true){
if((i__8546_10186 < count__8545_10185))
{var arg__7135__auto___10187 = cljs.core._nth.call(null,chunk__8544_10184,i__8546_10186);a__7134__auto__.push(arg__7135__auto___10187);
{
var G__10188 = seq__8543_10183;
var G__10189 = chunk__8544_10184;
var G__10190 = count__8545_10185;
var G__10191 = (i__8546_10186 + 1);
seq__8543_10183 = G__10188;
chunk__8544_10184 = G__10189;
count__8545_10185 = G__10190;
i__8546_10186 = G__10191;
continue;
}
} else
{var temp__4092__auto___10192 = cljs.core.seq.call(null,seq__8543_10183);if(temp__4092__auto___10192)
{var seq__8543_10193__$1 = temp__4092__auto___10192;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8543_10193__$1))
{var c__5632__auto___10194 = cljs.core.chunk_first.call(null,seq__8543_10193__$1);{
var G__10195 = cljs.core.chunk_rest.call(null,seq__8543_10193__$1);
var G__10196 = c__5632__auto___10194;
var G__10197 = cljs.core.count.call(null,c__5632__auto___10194);
var G__10198 = 0;
seq__8543_10183 = G__10195;
chunk__8544_10184 = G__10196;
count__8545_10185 = G__10197;
i__8546_10186 = G__10198;
continue;
}
} else
{var arg__7135__auto___10199 = cljs.core.first.call(null,seq__8543_10193__$1);a__7134__auto__.push(arg__7135__auto___10199);
{
var G__10200 = cljs.core.next.call(null,seq__8543_10193__$1);
var G__10201 = null;
var G__10202 = 0;
var G__10203 = 0;
seq__8543_10183 = G__10200;
chunk__8544_10184 = G__10201;
count__8545_10185 = G__10202;
i__8546_10186 = G__10203;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.img.apply(null,a__7134__auto__);
};
var img = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return img__delegate.call(this,args__7133__auto__);};
img.cljs$lang$maxFixedArity = 0;
img.cljs$lang$applyTo = (function (arglist__10204){
var args__7133__auto__ = cljs.core.seq(arglist__10204);
return img__delegate(args__7133__auto__);
});
img.cljs$core$IFn$_invoke$arity$variadic = img__delegate;
return img;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.input = (function() { 
var input__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8551_10205 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8552_10206 = null;var count__8553_10207 = 0;var i__8554_10208 = 0;while(true){
if((i__8554_10208 < count__8553_10207))
{var arg__7135__auto___10209 = cljs.core._nth.call(null,chunk__8552_10206,i__8554_10208);a__7134__auto__.push(arg__7135__auto___10209);
{
var G__10210 = seq__8551_10205;
var G__10211 = chunk__8552_10206;
var G__10212 = count__8553_10207;
var G__10213 = (i__8554_10208 + 1);
seq__8551_10205 = G__10210;
chunk__8552_10206 = G__10211;
count__8553_10207 = G__10212;
i__8554_10208 = G__10213;
continue;
}
} else
{var temp__4092__auto___10214 = cljs.core.seq.call(null,seq__8551_10205);if(temp__4092__auto___10214)
{var seq__8551_10215__$1 = temp__4092__auto___10214;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8551_10215__$1))
{var c__5632__auto___10216 = cljs.core.chunk_first.call(null,seq__8551_10215__$1);{
var G__10217 = cljs.core.chunk_rest.call(null,seq__8551_10215__$1);
var G__10218 = c__5632__auto___10216;
var G__10219 = cljs.core.count.call(null,c__5632__auto___10216);
var G__10220 = 0;
seq__8551_10205 = G__10217;
chunk__8552_10206 = G__10218;
count__8553_10207 = G__10219;
i__8554_10208 = G__10220;
continue;
}
} else
{var arg__7135__auto___10221 = cljs.core.first.call(null,seq__8551_10215__$1);a__7134__auto__.push(arg__7135__auto___10221);
{
var G__10222 = cljs.core.next.call(null,seq__8551_10215__$1);
var G__10223 = null;
var G__10224 = 0;
var G__10225 = 0;
seq__8551_10205 = G__10222;
chunk__8552_10206 = G__10223;
count__8553_10207 = G__10224;
i__8554_10208 = G__10225;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.input.apply(null,a__7134__auto__);
};
var input = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return input__delegate.call(this,args__7133__auto__);};
input.cljs$lang$maxFixedArity = 0;
input.cljs$lang$applyTo = (function (arglist__10226){
var args__7133__auto__ = cljs.core.seq(arglist__10226);
return input__delegate(args__7133__auto__);
});
input.cljs$core$IFn$_invoke$arity$variadic = input__delegate;
return input;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.ins = (function() { 
var ins__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8559_10227 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8560_10228 = null;var count__8561_10229 = 0;var i__8562_10230 = 0;while(true){
if((i__8562_10230 < count__8561_10229))
{var arg__7135__auto___10231 = cljs.core._nth.call(null,chunk__8560_10228,i__8562_10230);a__7134__auto__.push(arg__7135__auto___10231);
{
var G__10232 = seq__8559_10227;
var G__10233 = chunk__8560_10228;
var G__10234 = count__8561_10229;
var G__10235 = (i__8562_10230 + 1);
seq__8559_10227 = G__10232;
chunk__8560_10228 = G__10233;
count__8561_10229 = G__10234;
i__8562_10230 = G__10235;
continue;
}
} else
{var temp__4092__auto___10236 = cljs.core.seq.call(null,seq__8559_10227);if(temp__4092__auto___10236)
{var seq__8559_10237__$1 = temp__4092__auto___10236;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8559_10237__$1))
{var c__5632__auto___10238 = cljs.core.chunk_first.call(null,seq__8559_10237__$1);{
var G__10239 = cljs.core.chunk_rest.call(null,seq__8559_10237__$1);
var G__10240 = c__5632__auto___10238;
var G__10241 = cljs.core.count.call(null,c__5632__auto___10238);
var G__10242 = 0;
seq__8559_10227 = G__10239;
chunk__8560_10228 = G__10240;
count__8561_10229 = G__10241;
i__8562_10230 = G__10242;
continue;
}
} else
{var arg__7135__auto___10243 = cljs.core.first.call(null,seq__8559_10237__$1);a__7134__auto__.push(arg__7135__auto___10243);
{
var G__10244 = cljs.core.next.call(null,seq__8559_10237__$1);
var G__10245 = null;
var G__10246 = 0;
var G__10247 = 0;
seq__8559_10227 = G__10244;
chunk__8560_10228 = G__10245;
count__8561_10229 = G__10246;
i__8562_10230 = G__10247;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.ins.apply(null,a__7134__auto__);
};
var ins = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ins__delegate.call(this,args__7133__auto__);};
ins.cljs$lang$maxFixedArity = 0;
ins.cljs$lang$applyTo = (function (arglist__10248){
var args__7133__auto__ = cljs.core.seq(arglist__10248);
return ins__delegate(args__7133__auto__);
});
ins.cljs$core$IFn$_invoke$arity$variadic = ins__delegate;
return ins;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.kbd = (function() { 
var kbd__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8567_10249 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8568_10250 = null;var count__8569_10251 = 0;var i__8570_10252 = 0;while(true){
if((i__8570_10252 < count__8569_10251))
{var arg__7135__auto___10253 = cljs.core._nth.call(null,chunk__8568_10250,i__8570_10252);a__7134__auto__.push(arg__7135__auto___10253);
{
var G__10254 = seq__8567_10249;
var G__10255 = chunk__8568_10250;
var G__10256 = count__8569_10251;
var G__10257 = (i__8570_10252 + 1);
seq__8567_10249 = G__10254;
chunk__8568_10250 = G__10255;
count__8569_10251 = G__10256;
i__8570_10252 = G__10257;
continue;
}
} else
{var temp__4092__auto___10258 = cljs.core.seq.call(null,seq__8567_10249);if(temp__4092__auto___10258)
{var seq__8567_10259__$1 = temp__4092__auto___10258;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8567_10259__$1))
{var c__5632__auto___10260 = cljs.core.chunk_first.call(null,seq__8567_10259__$1);{
var G__10261 = cljs.core.chunk_rest.call(null,seq__8567_10259__$1);
var G__10262 = c__5632__auto___10260;
var G__10263 = cljs.core.count.call(null,c__5632__auto___10260);
var G__10264 = 0;
seq__8567_10249 = G__10261;
chunk__8568_10250 = G__10262;
count__8569_10251 = G__10263;
i__8570_10252 = G__10264;
continue;
}
} else
{var arg__7135__auto___10265 = cljs.core.first.call(null,seq__8567_10259__$1);a__7134__auto__.push(arg__7135__auto___10265);
{
var G__10266 = cljs.core.next.call(null,seq__8567_10259__$1);
var G__10267 = null;
var G__10268 = 0;
var G__10269 = 0;
seq__8567_10249 = G__10266;
chunk__8568_10250 = G__10267;
count__8569_10251 = G__10268;
i__8570_10252 = G__10269;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.kbd.apply(null,a__7134__auto__);
};
var kbd = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return kbd__delegate.call(this,args__7133__auto__);};
kbd.cljs$lang$maxFixedArity = 0;
kbd.cljs$lang$applyTo = (function (arglist__10270){
var args__7133__auto__ = cljs.core.seq(arglist__10270);
return kbd__delegate(args__7133__auto__);
});
kbd.cljs$core$IFn$_invoke$arity$variadic = kbd__delegate;
return kbd;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.keygen = (function() { 
var keygen__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8575_10271 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8576_10272 = null;var count__8577_10273 = 0;var i__8578_10274 = 0;while(true){
if((i__8578_10274 < count__8577_10273))
{var arg__7135__auto___10275 = cljs.core._nth.call(null,chunk__8576_10272,i__8578_10274);a__7134__auto__.push(arg__7135__auto___10275);
{
var G__10276 = seq__8575_10271;
var G__10277 = chunk__8576_10272;
var G__10278 = count__8577_10273;
var G__10279 = (i__8578_10274 + 1);
seq__8575_10271 = G__10276;
chunk__8576_10272 = G__10277;
count__8577_10273 = G__10278;
i__8578_10274 = G__10279;
continue;
}
} else
{var temp__4092__auto___10280 = cljs.core.seq.call(null,seq__8575_10271);if(temp__4092__auto___10280)
{var seq__8575_10281__$1 = temp__4092__auto___10280;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8575_10281__$1))
{var c__5632__auto___10282 = cljs.core.chunk_first.call(null,seq__8575_10281__$1);{
var G__10283 = cljs.core.chunk_rest.call(null,seq__8575_10281__$1);
var G__10284 = c__5632__auto___10282;
var G__10285 = cljs.core.count.call(null,c__5632__auto___10282);
var G__10286 = 0;
seq__8575_10271 = G__10283;
chunk__8576_10272 = G__10284;
count__8577_10273 = G__10285;
i__8578_10274 = G__10286;
continue;
}
} else
{var arg__7135__auto___10287 = cljs.core.first.call(null,seq__8575_10281__$1);a__7134__auto__.push(arg__7135__auto___10287);
{
var G__10288 = cljs.core.next.call(null,seq__8575_10281__$1);
var G__10289 = null;
var G__10290 = 0;
var G__10291 = 0;
seq__8575_10271 = G__10288;
chunk__8576_10272 = G__10289;
count__8577_10273 = G__10290;
i__8578_10274 = G__10291;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.keygen.apply(null,a__7134__auto__);
};
var keygen = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return keygen__delegate.call(this,args__7133__auto__);};
keygen.cljs$lang$maxFixedArity = 0;
keygen.cljs$lang$applyTo = (function (arglist__10292){
var args__7133__auto__ = cljs.core.seq(arglist__10292);
return keygen__delegate(args__7133__auto__);
});
keygen.cljs$core$IFn$_invoke$arity$variadic = keygen__delegate;
return keygen;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.label = (function() { 
var label__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8583_10293 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8584_10294 = null;var count__8585_10295 = 0;var i__8586_10296 = 0;while(true){
if((i__8586_10296 < count__8585_10295))
{var arg__7135__auto___10297 = cljs.core._nth.call(null,chunk__8584_10294,i__8586_10296);a__7134__auto__.push(arg__7135__auto___10297);
{
var G__10298 = seq__8583_10293;
var G__10299 = chunk__8584_10294;
var G__10300 = count__8585_10295;
var G__10301 = (i__8586_10296 + 1);
seq__8583_10293 = G__10298;
chunk__8584_10294 = G__10299;
count__8585_10295 = G__10300;
i__8586_10296 = G__10301;
continue;
}
} else
{var temp__4092__auto___10302 = cljs.core.seq.call(null,seq__8583_10293);if(temp__4092__auto___10302)
{var seq__8583_10303__$1 = temp__4092__auto___10302;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8583_10303__$1))
{var c__5632__auto___10304 = cljs.core.chunk_first.call(null,seq__8583_10303__$1);{
var G__10305 = cljs.core.chunk_rest.call(null,seq__8583_10303__$1);
var G__10306 = c__5632__auto___10304;
var G__10307 = cljs.core.count.call(null,c__5632__auto___10304);
var G__10308 = 0;
seq__8583_10293 = G__10305;
chunk__8584_10294 = G__10306;
count__8585_10295 = G__10307;
i__8586_10296 = G__10308;
continue;
}
} else
{var arg__7135__auto___10309 = cljs.core.first.call(null,seq__8583_10303__$1);a__7134__auto__.push(arg__7135__auto___10309);
{
var G__10310 = cljs.core.next.call(null,seq__8583_10303__$1);
var G__10311 = null;
var G__10312 = 0;
var G__10313 = 0;
seq__8583_10293 = G__10310;
chunk__8584_10294 = G__10311;
count__8585_10295 = G__10312;
i__8586_10296 = G__10313;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.label.apply(null,a__7134__auto__);
};
var label = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return label__delegate.call(this,args__7133__auto__);};
label.cljs$lang$maxFixedArity = 0;
label.cljs$lang$applyTo = (function (arglist__10314){
var args__7133__auto__ = cljs.core.seq(arglist__10314);
return label__delegate(args__7133__auto__);
});
label.cljs$core$IFn$_invoke$arity$variadic = label__delegate;
return label;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.legend = (function() { 
var legend__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8591_10315 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8592_10316 = null;var count__8593_10317 = 0;var i__8594_10318 = 0;while(true){
if((i__8594_10318 < count__8593_10317))
{var arg__7135__auto___10319 = cljs.core._nth.call(null,chunk__8592_10316,i__8594_10318);a__7134__auto__.push(arg__7135__auto___10319);
{
var G__10320 = seq__8591_10315;
var G__10321 = chunk__8592_10316;
var G__10322 = count__8593_10317;
var G__10323 = (i__8594_10318 + 1);
seq__8591_10315 = G__10320;
chunk__8592_10316 = G__10321;
count__8593_10317 = G__10322;
i__8594_10318 = G__10323;
continue;
}
} else
{var temp__4092__auto___10324 = cljs.core.seq.call(null,seq__8591_10315);if(temp__4092__auto___10324)
{var seq__8591_10325__$1 = temp__4092__auto___10324;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8591_10325__$1))
{var c__5632__auto___10326 = cljs.core.chunk_first.call(null,seq__8591_10325__$1);{
var G__10327 = cljs.core.chunk_rest.call(null,seq__8591_10325__$1);
var G__10328 = c__5632__auto___10326;
var G__10329 = cljs.core.count.call(null,c__5632__auto___10326);
var G__10330 = 0;
seq__8591_10315 = G__10327;
chunk__8592_10316 = G__10328;
count__8593_10317 = G__10329;
i__8594_10318 = G__10330;
continue;
}
} else
{var arg__7135__auto___10331 = cljs.core.first.call(null,seq__8591_10325__$1);a__7134__auto__.push(arg__7135__auto___10331);
{
var G__10332 = cljs.core.next.call(null,seq__8591_10325__$1);
var G__10333 = null;
var G__10334 = 0;
var G__10335 = 0;
seq__8591_10315 = G__10332;
chunk__8592_10316 = G__10333;
count__8593_10317 = G__10334;
i__8594_10318 = G__10335;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.legend.apply(null,a__7134__auto__);
};
var legend = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return legend__delegate.call(this,args__7133__auto__);};
legend.cljs$lang$maxFixedArity = 0;
legend.cljs$lang$applyTo = (function (arglist__10336){
var args__7133__auto__ = cljs.core.seq(arglist__10336);
return legend__delegate(args__7133__auto__);
});
legend.cljs$core$IFn$_invoke$arity$variadic = legend__delegate;
return legend;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.li = (function() { 
var li__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8599_10337 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8600_10338 = null;var count__8601_10339 = 0;var i__8602_10340 = 0;while(true){
if((i__8602_10340 < count__8601_10339))
{var arg__7135__auto___10341 = cljs.core._nth.call(null,chunk__8600_10338,i__8602_10340);a__7134__auto__.push(arg__7135__auto___10341);
{
var G__10342 = seq__8599_10337;
var G__10343 = chunk__8600_10338;
var G__10344 = count__8601_10339;
var G__10345 = (i__8602_10340 + 1);
seq__8599_10337 = G__10342;
chunk__8600_10338 = G__10343;
count__8601_10339 = G__10344;
i__8602_10340 = G__10345;
continue;
}
} else
{var temp__4092__auto___10346 = cljs.core.seq.call(null,seq__8599_10337);if(temp__4092__auto___10346)
{var seq__8599_10347__$1 = temp__4092__auto___10346;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8599_10347__$1))
{var c__5632__auto___10348 = cljs.core.chunk_first.call(null,seq__8599_10347__$1);{
var G__10349 = cljs.core.chunk_rest.call(null,seq__8599_10347__$1);
var G__10350 = c__5632__auto___10348;
var G__10351 = cljs.core.count.call(null,c__5632__auto___10348);
var G__10352 = 0;
seq__8599_10337 = G__10349;
chunk__8600_10338 = G__10350;
count__8601_10339 = G__10351;
i__8602_10340 = G__10352;
continue;
}
} else
{var arg__7135__auto___10353 = cljs.core.first.call(null,seq__8599_10347__$1);a__7134__auto__.push(arg__7135__auto___10353);
{
var G__10354 = cljs.core.next.call(null,seq__8599_10347__$1);
var G__10355 = null;
var G__10356 = 0;
var G__10357 = 0;
seq__8599_10337 = G__10354;
chunk__8600_10338 = G__10355;
count__8601_10339 = G__10356;
i__8602_10340 = G__10357;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.li.apply(null,a__7134__auto__);
};
var li = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return li__delegate.call(this,args__7133__auto__);};
li.cljs$lang$maxFixedArity = 0;
li.cljs$lang$applyTo = (function (arglist__10358){
var args__7133__auto__ = cljs.core.seq(arglist__10358);
return li__delegate(args__7133__auto__);
});
li.cljs$core$IFn$_invoke$arity$variadic = li__delegate;
return li;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.link = (function() { 
var link__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8607_10359 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8608_10360 = null;var count__8609_10361 = 0;var i__8610_10362 = 0;while(true){
if((i__8610_10362 < count__8609_10361))
{var arg__7135__auto___10363 = cljs.core._nth.call(null,chunk__8608_10360,i__8610_10362);a__7134__auto__.push(arg__7135__auto___10363);
{
var G__10364 = seq__8607_10359;
var G__10365 = chunk__8608_10360;
var G__10366 = count__8609_10361;
var G__10367 = (i__8610_10362 + 1);
seq__8607_10359 = G__10364;
chunk__8608_10360 = G__10365;
count__8609_10361 = G__10366;
i__8610_10362 = G__10367;
continue;
}
} else
{var temp__4092__auto___10368 = cljs.core.seq.call(null,seq__8607_10359);if(temp__4092__auto___10368)
{var seq__8607_10369__$1 = temp__4092__auto___10368;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8607_10369__$1))
{var c__5632__auto___10370 = cljs.core.chunk_first.call(null,seq__8607_10369__$1);{
var G__10371 = cljs.core.chunk_rest.call(null,seq__8607_10369__$1);
var G__10372 = c__5632__auto___10370;
var G__10373 = cljs.core.count.call(null,c__5632__auto___10370);
var G__10374 = 0;
seq__8607_10359 = G__10371;
chunk__8608_10360 = G__10372;
count__8609_10361 = G__10373;
i__8610_10362 = G__10374;
continue;
}
} else
{var arg__7135__auto___10375 = cljs.core.first.call(null,seq__8607_10369__$1);a__7134__auto__.push(arg__7135__auto___10375);
{
var G__10376 = cljs.core.next.call(null,seq__8607_10369__$1);
var G__10377 = null;
var G__10378 = 0;
var G__10379 = 0;
seq__8607_10359 = G__10376;
chunk__8608_10360 = G__10377;
count__8609_10361 = G__10378;
i__8610_10362 = G__10379;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.link.apply(null,a__7134__auto__);
};
var link = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return link__delegate.call(this,args__7133__auto__);};
link.cljs$lang$maxFixedArity = 0;
link.cljs$lang$applyTo = (function (arglist__10380){
var args__7133__auto__ = cljs.core.seq(arglist__10380);
return link__delegate(args__7133__auto__);
});
link.cljs$core$IFn$_invoke$arity$variadic = link__delegate;
return link;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.main = (function() { 
var main__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8615_10381 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8616_10382 = null;var count__8617_10383 = 0;var i__8618_10384 = 0;while(true){
if((i__8618_10384 < count__8617_10383))
{var arg__7135__auto___10385 = cljs.core._nth.call(null,chunk__8616_10382,i__8618_10384);a__7134__auto__.push(arg__7135__auto___10385);
{
var G__10386 = seq__8615_10381;
var G__10387 = chunk__8616_10382;
var G__10388 = count__8617_10383;
var G__10389 = (i__8618_10384 + 1);
seq__8615_10381 = G__10386;
chunk__8616_10382 = G__10387;
count__8617_10383 = G__10388;
i__8618_10384 = G__10389;
continue;
}
} else
{var temp__4092__auto___10390 = cljs.core.seq.call(null,seq__8615_10381);if(temp__4092__auto___10390)
{var seq__8615_10391__$1 = temp__4092__auto___10390;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8615_10391__$1))
{var c__5632__auto___10392 = cljs.core.chunk_first.call(null,seq__8615_10391__$1);{
var G__10393 = cljs.core.chunk_rest.call(null,seq__8615_10391__$1);
var G__10394 = c__5632__auto___10392;
var G__10395 = cljs.core.count.call(null,c__5632__auto___10392);
var G__10396 = 0;
seq__8615_10381 = G__10393;
chunk__8616_10382 = G__10394;
count__8617_10383 = G__10395;
i__8618_10384 = G__10396;
continue;
}
} else
{var arg__7135__auto___10397 = cljs.core.first.call(null,seq__8615_10391__$1);a__7134__auto__.push(arg__7135__auto___10397);
{
var G__10398 = cljs.core.next.call(null,seq__8615_10391__$1);
var G__10399 = null;
var G__10400 = 0;
var G__10401 = 0;
seq__8615_10381 = G__10398;
chunk__8616_10382 = G__10399;
count__8617_10383 = G__10400;
i__8618_10384 = G__10401;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.main.apply(null,a__7134__auto__);
};
var main = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return main__delegate.call(this,args__7133__auto__);};
main.cljs$lang$maxFixedArity = 0;
main.cljs$lang$applyTo = (function (arglist__10402){
var args__7133__auto__ = cljs.core.seq(arglist__10402);
return main__delegate(args__7133__auto__);
});
main.cljs$core$IFn$_invoke$arity$variadic = main__delegate;
return main;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.map = (function() { 
var map__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8623_10403 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8624_10404 = null;var count__8625_10405 = 0;var i__8626_10406 = 0;while(true){
if((i__8626_10406 < count__8625_10405))
{var arg__7135__auto___10407 = cljs.core._nth.call(null,chunk__8624_10404,i__8626_10406);a__7134__auto__.push(arg__7135__auto___10407);
{
var G__10408 = seq__8623_10403;
var G__10409 = chunk__8624_10404;
var G__10410 = count__8625_10405;
var G__10411 = (i__8626_10406 + 1);
seq__8623_10403 = G__10408;
chunk__8624_10404 = G__10409;
count__8625_10405 = G__10410;
i__8626_10406 = G__10411;
continue;
}
} else
{var temp__4092__auto___10412 = cljs.core.seq.call(null,seq__8623_10403);if(temp__4092__auto___10412)
{var seq__8623_10413__$1 = temp__4092__auto___10412;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8623_10413__$1))
{var c__5632__auto___10414 = cljs.core.chunk_first.call(null,seq__8623_10413__$1);{
var G__10415 = cljs.core.chunk_rest.call(null,seq__8623_10413__$1);
var G__10416 = c__5632__auto___10414;
var G__10417 = cljs.core.count.call(null,c__5632__auto___10414);
var G__10418 = 0;
seq__8623_10403 = G__10415;
chunk__8624_10404 = G__10416;
count__8625_10405 = G__10417;
i__8626_10406 = G__10418;
continue;
}
} else
{var arg__7135__auto___10419 = cljs.core.first.call(null,seq__8623_10413__$1);a__7134__auto__.push(arg__7135__auto___10419);
{
var G__10420 = cljs.core.next.call(null,seq__8623_10413__$1);
var G__10421 = null;
var G__10422 = 0;
var G__10423 = 0;
seq__8623_10403 = G__10420;
chunk__8624_10404 = G__10421;
count__8625_10405 = G__10422;
i__8626_10406 = G__10423;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.map.apply(null,a__7134__auto__);
};
var map = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return map__delegate.call(this,args__7133__auto__);};
map.cljs$lang$maxFixedArity = 0;
map.cljs$lang$applyTo = (function (arglist__10424){
var args__7133__auto__ = cljs.core.seq(arglist__10424);
return map__delegate(args__7133__auto__);
});
map.cljs$core$IFn$_invoke$arity$variadic = map__delegate;
return map;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.mark = (function() { 
var mark__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8631_10425 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8632_10426 = null;var count__8633_10427 = 0;var i__8634_10428 = 0;while(true){
if((i__8634_10428 < count__8633_10427))
{var arg__7135__auto___10429 = cljs.core._nth.call(null,chunk__8632_10426,i__8634_10428);a__7134__auto__.push(arg__7135__auto___10429);
{
var G__10430 = seq__8631_10425;
var G__10431 = chunk__8632_10426;
var G__10432 = count__8633_10427;
var G__10433 = (i__8634_10428 + 1);
seq__8631_10425 = G__10430;
chunk__8632_10426 = G__10431;
count__8633_10427 = G__10432;
i__8634_10428 = G__10433;
continue;
}
} else
{var temp__4092__auto___10434 = cljs.core.seq.call(null,seq__8631_10425);if(temp__4092__auto___10434)
{var seq__8631_10435__$1 = temp__4092__auto___10434;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8631_10435__$1))
{var c__5632__auto___10436 = cljs.core.chunk_first.call(null,seq__8631_10435__$1);{
var G__10437 = cljs.core.chunk_rest.call(null,seq__8631_10435__$1);
var G__10438 = c__5632__auto___10436;
var G__10439 = cljs.core.count.call(null,c__5632__auto___10436);
var G__10440 = 0;
seq__8631_10425 = G__10437;
chunk__8632_10426 = G__10438;
count__8633_10427 = G__10439;
i__8634_10428 = G__10440;
continue;
}
} else
{var arg__7135__auto___10441 = cljs.core.first.call(null,seq__8631_10435__$1);a__7134__auto__.push(arg__7135__auto___10441);
{
var G__10442 = cljs.core.next.call(null,seq__8631_10435__$1);
var G__10443 = null;
var G__10444 = 0;
var G__10445 = 0;
seq__8631_10425 = G__10442;
chunk__8632_10426 = G__10443;
count__8633_10427 = G__10444;
i__8634_10428 = G__10445;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.mark.apply(null,a__7134__auto__);
};
var mark = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return mark__delegate.call(this,args__7133__auto__);};
mark.cljs$lang$maxFixedArity = 0;
mark.cljs$lang$applyTo = (function (arglist__10446){
var args__7133__auto__ = cljs.core.seq(arglist__10446);
return mark__delegate(args__7133__auto__);
});
mark.cljs$core$IFn$_invoke$arity$variadic = mark__delegate;
return mark;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.menu = (function() { 
var menu__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8639_10447 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8640_10448 = null;var count__8641_10449 = 0;var i__8642_10450 = 0;while(true){
if((i__8642_10450 < count__8641_10449))
{var arg__7135__auto___10451 = cljs.core._nth.call(null,chunk__8640_10448,i__8642_10450);a__7134__auto__.push(arg__7135__auto___10451);
{
var G__10452 = seq__8639_10447;
var G__10453 = chunk__8640_10448;
var G__10454 = count__8641_10449;
var G__10455 = (i__8642_10450 + 1);
seq__8639_10447 = G__10452;
chunk__8640_10448 = G__10453;
count__8641_10449 = G__10454;
i__8642_10450 = G__10455;
continue;
}
} else
{var temp__4092__auto___10456 = cljs.core.seq.call(null,seq__8639_10447);if(temp__4092__auto___10456)
{var seq__8639_10457__$1 = temp__4092__auto___10456;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8639_10457__$1))
{var c__5632__auto___10458 = cljs.core.chunk_first.call(null,seq__8639_10457__$1);{
var G__10459 = cljs.core.chunk_rest.call(null,seq__8639_10457__$1);
var G__10460 = c__5632__auto___10458;
var G__10461 = cljs.core.count.call(null,c__5632__auto___10458);
var G__10462 = 0;
seq__8639_10447 = G__10459;
chunk__8640_10448 = G__10460;
count__8641_10449 = G__10461;
i__8642_10450 = G__10462;
continue;
}
} else
{var arg__7135__auto___10463 = cljs.core.first.call(null,seq__8639_10457__$1);a__7134__auto__.push(arg__7135__auto___10463);
{
var G__10464 = cljs.core.next.call(null,seq__8639_10457__$1);
var G__10465 = null;
var G__10466 = 0;
var G__10467 = 0;
seq__8639_10447 = G__10464;
chunk__8640_10448 = G__10465;
count__8641_10449 = G__10466;
i__8642_10450 = G__10467;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.menu.apply(null,a__7134__auto__);
};
var menu = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return menu__delegate.call(this,args__7133__auto__);};
menu.cljs$lang$maxFixedArity = 0;
menu.cljs$lang$applyTo = (function (arglist__10468){
var args__7133__auto__ = cljs.core.seq(arglist__10468);
return menu__delegate(args__7133__auto__);
});
menu.cljs$core$IFn$_invoke$arity$variadic = menu__delegate;
return menu;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.menuitem = (function() { 
var menuitem__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8647_10469 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8648_10470 = null;var count__8649_10471 = 0;var i__8650_10472 = 0;while(true){
if((i__8650_10472 < count__8649_10471))
{var arg__7135__auto___10473 = cljs.core._nth.call(null,chunk__8648_10470,i__8650_10472);a__7134__auto__.push(arg__7135__auto___10473);
{
var G__10474 = seq__8647_10469;
var G__10475 = chunk__8648_10470;
var G__10476 = count__8649_10471;
var G__10477 = (i__8650_10472 + 1);
seq__8647_10469 = G__10474;
chunk__8648_10470 = G__10475;
count__8649_10471 = G__10476;
i__8650_10472 = G__10477;
continue;
}
} else
{var temp__4092__auto___10478 = cljs.core.seq.call(null,seq__8647_10469);if(temp__4092__auto___10478)
{var seq__8647_10479__$1 = temp__4092__auto___10478;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8647_10479__$1))
{var c__5632__auto___10480 = cljs.core.chunk_first.call(null,seq__8647_10479__$1);{
var G__10481 = cljs.core.chunk_rest.call(null,seq__8647_10479__$1);
var G__10482 = c__5632__auto___10480;
var G__10483 = cljs.core.count.call(null,c__5632__auto___10480);
var G__10484 = 0;
seq__8647_10469 = G__10481;
chunk__8648_10470 = G__10482;
count__8649_10471 = G__10483;
i__8650_10472 = G__10484;
continue;
}
} else
{var arg__7135__auto___10485 = cljs.core.first.call(null,seq__8647_10479__$1);a__7134__auto__.push(arg__7135__auto___10485);
{
var G__10486 = cljs.core.next.call(null,seq__8647_10479__$1);
var G__10487 = null;
var G__10488 = 0;
var G__10489 = 0;
seq__8647_10469 = G__10486;
chunk__8648_10470 = G__10487;
count__8649_10471 = G__10488;
i__8650_10472 = G__10489;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.menuitem.apply(null,a__7134__auto__);
};
var menuitem = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return menuitem__delegate.call(this,args__7133__auto__);};
menuitem.cljs$lang$maxFixedArity = 0;
menuitem.cljs$lang$applyTo = (function (arglist__10490){
var args__7133__auto__ = cljs.core.seq(arglist__10490);
return menuitem__delegate(args__7133__auto__);
});
menuitem.cljs$core$IFn$_invoke$arity$variadic = menuitem__delegate;
return menuitem;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.meta = (function() { 
var meta__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8655_10491 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8656_10492 = null;var count__8657_10493 = 0;var i__8658_10494 = 0;while(true){
if((i__8658_10494 < count__8657_10493))
{var arg__7135__auto___10495 = cljs.core._nth.call(null,chunk__8656_10492,i__8658_10494);a__7134__auto__.push(arg__7135__auto___10495);
{
var G__10496 = seq__8655_10491;
var G__10497 = chunk__8656_10492;
var G__10498 = count__8657_10493;
var G__10499 = (i__8658_10494 + 1);
seq__8655_10491 = G__10496;
chunk__8656_10492 = G__10497;
count__8657_10493 = G__10498;
i__8658_10494 = G__10499;
continue;
}
} else
{var temp__4092__auto___10500 = cljs.core.seq.call(null,seq__8655_10491);if(temp__4092__auto___10500)
{var seq__8655_10501__$1 = temp__4092__auto___10500;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8655_10501__$1))
{var c__5632__auto___10502 = cljs.core.chunk_first.call(null,seq__8655_10501__$1);{
var G__10503 = cljs.core.chunk_rest.call(null,seq__8655_10501__$1);
var G__10504 = c__5632__auto___10502;
var G__10505 = cljs.core.count.call(null,c__5632__auto___10502);
var G__10506 = 0;
seq__8655_10491 = G__10503;
chunk__8656_10492 = G__10504;
count__8657_10493 = G__10505;
i__8658_10494 = G__10506;
continue;
}
} else
{var arg__7135__auto___10507 = cljs.core.first.call(null,seq__8655_10501__$1);a__7134__auto__.push(arg__7135__auto___10507);
{
var G__10508 = cljs.core.next.call(null,seq__8655_10501__$1);
var G__10509 = null;
var G__10510 = 0;
var G__10511 = 0;
seq__8655_10491 = G__10508;
chunk__8656_10492 = G__10509;
count__8657_10493 = G__10510;
i__8658_10494 = G__10511;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.meta.apply(null,a__7134__auto__);
};
var meta = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return meta__delegate.call(this,args__7133__auto__);};
meta.cljs$lang$maxFixedArity = 0;
meta.cljs$lang$applyTo = (function (arglist__10512){
var args__7133__auto__ = cljs.core.seq(arglist__10512);
return meta__delegate(args__7133__auto__);
});
meta.cljs$core$IFn$_invoke$arity$variadic = meta__delegate;
return meta;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.meter = (function() { 
var meter__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8663_10513 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8664_10514 = null;var count__8665_10515 = 0;var i__8666_10516 = 0;while(true){
if((i__8666_10516 < count__8665_10515))
{var arg__7135__auto___10517 = cljs.core._nth.call(null,chunk__8664_10514,i__8666_10516);a__7134__auto__.push(arg__7135__auto___10517);
{
var G__10518 = seq__8663_10513;
var G__10519 = chunk__8664_10514;
var G__10520 = count__8665_10515;
var G__10521 = (i__8666_10516 + 1);
seq__8663_10513 = G__10518;
chunk__8664_10514 = G__10519;
count__8665_10515 = G__10520;
i__8666_10516 = G__10521;
continue;
}
} else
{var temp__4092__auto___10522 = cljs.core.seq.call(null,seq__8663_10513);if(temp__4092__auto___10522)
{var seq__8663_10523__$1 = temp__4092__auto___10522;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8663_10523__$1))
{var c__5632__auto___10524 = cljs.core.chunk_first.call(null,seq__8663_10523__$1);{
var G__10525 = cljs.core.chunk_rest.call(null,seq__8663_10523__$1);
var G__10526 = c__5632__auto___10524;
var G__10527 = cljs.core.count.call(null,c__5632__auto___10524);
var G__10528 = 0;
seq__8663_10513 = G__10525;
chunk__8664_10514 = G__10526;
count__8665_10515 = G__10527;
i__8666_10516 = G__10528;
continue;
}
} else
{var arg__7135__auto___10529 = cljs.core.first.call(null,seq__8663_10523__$1);a__7134__auto__.push(arg__7135__auto___10529);
{
var G__10530 = cljs.core.next.call(null,seq__8663_10523__$1);
var G__10531 = null;
var G__10532 = 0;
var G__10533 = 0;
seq__8663_10513 = G__10530;
chunk__8664_10514 = G__10531;
count__8665_10515 = G__10532;
i__8666_10516 = G__10533;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.meter.apply(null,a__7134__auto__);
};
var meter = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return meter__delegate.call(this,args__7133__auto__);};
meter.cljs$lang$maxFixedArity = 0;
meter.cljs$lang$applyTo = (function (arglist__10534){
var args__7133__auto__ = cljs.core.seq(arglist__10534);
return meter__delegate(args__7133__auto__);
});
meter.cljs$core$IFn$_invoke$arity$variadic = meter__delegate;
return meter;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.nav = (function() { 
var nav__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8671_10535 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8672_10536 = null;var count__8673_10537 = 0;var i__8674_10538 = 0;while(true){
if((i__8674_10538 < count__8673_10537))
{var arg__7135__auto___10539 = cljs.core._nth.call(null,chunk__8672_10536,i__8674_10538);a__7134__auto__.push(arg__7135__auto___10539);
{
var G__10540 = seq__8671_10535;
var G__10541 = chunk__8672_10536;
var G__10542 = count__8673_10537;
var G__10543 = (i__8674_10538 + 1);
seq__8671_10535 = G__10540;
chunk__8672_10536 = G__10541;
count__8673_10537 = G__10542;
i__8674_10538 = G__10543;
continue;
}
} else
{var temp__4092__auto___10544 = cljs.core.seq.call(null,seq__8671_10535);if(temp__4092__auto___10544)
{var seq__8671_10545__$1 = temp__4092__auto___10544;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8671_10545__$1))
{var c__5632__auto___10546 = cljs.core.chunk_first.call(null,seq__8671_10545__$1);{
var G__10547 = cljs.core.chunk_rest.call(null,seq__8671_10545__$1);
var G__10548 = c__5632__auto___10546;
var G__10549 = cljs.core.count.call(null,c__5632__auto___10546);
var G__10550 = 0;
seq__8671_10535 = G__10547;
chunk__8672_10536 = G__10548;
count__8673_10537 = G__10549;
i__8674_10538 = G__10550;
continue;
}
} else
{var arg__7135__auto___10551 = cljs.core.first.call(null,seq__8671_10545__$1);a__7134__auto__.push(arg__7135__auto___10551);
{
var G__10552 = cljs.core.next.call(null,seq__8671_10545__$1);
var G__10553 = null;
var G__10554 = 0;
var G__10555 = 0;
seq__8671_10535 = G__10552;
chunk__8672_10536 = G__10553;
count__8673_10537 = G__10554;
i__8674_10538 = G__10555;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.nav.apply(null,a__7134__auto__);
};
var nav = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return nav__delegate.call(this,args__7133__auto__);};
nav.cljs$lang$maxFixedArity = 0;
nav.cljs$lang$applyTo = (function (arglist__10556){
var args__7133__auto__ = cljs.core.seq(arglist__10556);
return nav__delegate(args__7133__auto__);
});
nav.cljs$core$IFn$_invoke$arity$variadic = nav__delegate;
return nav;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.noscript = (function() { 
var noscript__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8679_10557 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8680_10558 = null;var count__8681_10559 = 0;var i__8682_10560 = 0;while(true){
if((i__8682_10560 < count__8681_10559))
{var arg__7135__auto___10561 = cljs.core._nth.call(null,chunk__8680_10558,i__8682_10560);a__7134__auto__.push(arg__7135__auto___10561);
{
var G__10562 = seq__8679_10557;
var G__10563 = chunk__8680_10558;
var G__10564 = count__8681_10559;
var G__10565 = (i__8682_10560 + 1);
seq__8679_10557 = G__10562;
chunk__8680_10558 = G__10563;
count__8681_10559 = G__10564;
i__8682_10560 = G__10565;
continue;
}
} else
{var temp__4092__auto___10566 = cljs.core.seq.call(null,seq__8679_10557);if(temp__4092__auto___10566)
{var seq__8679_10567__$1 = temp__4092__auto___10566;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8679_10567__$1))
{var c__5632__auto___10568 = cljs.core.chunk_first.call(null,seq__8679_10567__$1);{
var G__10569 = cljs.core.chunk_rest.call(null,seq__8679_10567__$1);
var G__10570 = c__5632__auto___10568;
var G__10571 = cljs.core.count.call(null,c__5632__auto___10568);
var G__10572 = 0;
seq__8679_10557 = G__10569;
chunk__8680_10558 = G__10570;
count__8681_10559 = G__10571;
i__8682_10560 = G__10572;
continue;
}
} else
{var arg__7135__auto___10573 = cljs.core.first.call(null,seq__8679_10567__$1);a__7134__auto__.push(arg__7135__auto___10573);
{
var G__10574 = cljs.core.next.call(null,seq__8679_10567__$1);
var G__10575 = null;
var G__10576 = 0;
var G__10577 = 0;
seq__8679_10557 = G__10574;
chunk__8680_10558 = G__10575;
count__8681_10559 = G__10576;
i__8682_10560 = G__10577;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.noscript.apply(null,a__7134__auto__);
};
var noscript = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return noscript__delegate.call(this,args__7133__auto__);};
noscript.cljs$lang$maxFixedArity = 0;
noscript.cljs$lang$applyTo = (function (arglist__10578){
var args__7133__auto__ = cljs.core.seq(arglist__10578);
return noscript__delegate(args__7133__auto__);
});
noscript.cljs$core$IFn$_invoke$arity$variadic = noscript__delegate;
return noscript;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.object = (function() { 
var object__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8687_10579 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8688_10580 = null;var count__8689_10581 = 0;var i__8690_10582 = 0;while(true){
if((i__8690_10582 < count__8689_10581))
{var arg__7135__auto___10583 = cljs.core._nth.call(null,chunk__8688_10580,i__8690_10582);a__7134__auto__.push(arg__7135__auto___10583);
{
var G__10584 = seq__8687_10579;
var G__10585 = chunk__8688_10580;
var G__10586 = count__8689_10581;
var G__10587 = (i__8690_10582 + 1);
seq__8687_10579 = G__10584;
chunk__8688_10580 = G__10585;
count__8689_10581 = G__10586;
i__8690_10582 = G__10587;
continue;
}
} else
{var temp__4092__auto___10588 = cljs.core.seq.call(null,seq__8687_10579);if(temp__4092__auto___10588)
{var seq__8687_10589__$1 = temp__4092__auto___10588;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8687_10589__$1))
{var c__5632__auto___10590 = cljs.core.chunk_first.call(null,seq__8687_10589__$1);{
var G__10591 = cljs.core.chunk_rest.call(null,seq__8687_10589__$1);
var G__10592 = c__5632__auto___10590;
var G__10593 = cljs.core.count.call(null,c__5632__auto___10590);
var G__10594 = 0;
seq__8687_10579 = G__10591;
chunk__8688_10580 = G__10592;
count__8689_10581 = G__10593;
i__8690_10582 = G__10594;
continue;
}
} else
{var arg__7135__auto___10595 = cljs.core.first.call(null,seq__8687_10589__$1);a__7134__auto__.push(arg__7135__auto___10595);
{
var G__10596 = cljs.core.next.call(null,seq__8687_10589__$1);
var G__10597 = null;
var G__10598 = 0;
var G__10599 = 0;
seq__8687_10579 = G__10596;
chunk__8688_10580 = G__10597;
count__8689_10581 = G__10598;
i__8690_10582 = G__10599;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.object.apply(null,a__7134__auto__);
};
var object = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return object__delegate.call(this,args__7133__auto__);};
object.cljs$lang$maxFixedArity = 0;
object.cljs$lang$applyTo = (function (arglist__10600){
var args__7133__auto__ = cljs.core.seq(arglist__10600);
return object__delegate(args__7133__auto__);
});
object.cljs$core$IFn$_invoke$arity$variadic = object__delegate;
return object;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.ol = (function() { 
var ol__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8695_10601 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8696_10602 = null;var count__8697_10603 = 0;var i__8698_10604 = 0;while(true){
if((i__8698_10604 < count__8697_10603))
{var arg__7135__auto___10605 = cljs.core._nth.call(null,chunk__8696_10602,i__8698_10604);a__7134__auto__.push(arg__7135__auto___10605);
{
var G__10606 = seq__8695_10601;
var G__10607 = chunk__8696_10602;
var G__10608 = count__8697_10603;
var G__10609 = (i__8698_10604 + 1);
seq__8695_10601 = G__10606;
chunk__8696_10602 = G__10607;
count__8697_10603 = G__10608;
i__8698_10604 = G__10609;
continue;
}
} else
{var temp__4092__auto___10610 = cljs.core.seq.call(null,seq__8695_10601);if(temp__4092__auto___10610)
{var seq__8695_10611__$1 = temp__4092__auto___10610;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8695_10611__$1))
{var c__5632__auto___10612 = cljs.core.chunk_first.call(null,seq__8695_10611__$1);{
var G__10613 = cljs.core.chunk_rest.call(null,seq__8695_10611__$1);
var G__10614 = c__5632__auto___10612;
var G__10615 = cljs.core.count.call(null,c__5632__auto___10612);
var G__10616 = 0;
seq__8695_10601 = G__10613;
chunk__8696_10602 = G__10614;
count__8697_10603 = G__10615;
i__8698_10604 = G__10616;
continue;
}
} else
{var arg__7135__auto___10617 = cljs.core.first.call(null,seq__8695_10611__$1);a__7134__auto__.push(arg__7135__auto___10617);
{
var G__10618 = cljs.core.next.call(null,seq__8695_10611__$1);
var G__10619 = null;
var G__10620 = 0;
var G__10621 = 0;
seq__8695_10601 = G__10618;
chunk__8696_10602 = G__10619;
count__8697_10603 = G__10620;
i__8698_10604 = G__10621;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.ol.apply(null,a__7134__auto__);
};
var ol = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ol__delegate.call(this,args__7133__auto__);};
ol.cljs$lang$maxFixedArity = 0;
ol.cljs$lang$applyTo = (function (arglist__10622){
var args__7133__auto__ = cljs.core.seq(arglist__10622);
return ol__delegate(args__7133__auto__);
});
ol.cljs$core$IFn$_invoke$arity$variadic = ol__delegate;
return ol;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.optgroup = (function() { 
var optgroup__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8703_10623 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8704_10624 = null;var count__8705_10625 = 0;var i__8706_10626 = 0;while(true){
if((i__8706_10626 < count__8705_10625))
{var arg__7135__auto___10627 = cljs.core._nth.call(null,chunk__8704_10624,i__8706_10626);a__7134__auto__.push(arg__7135__auto___10627);
{
var G__10628 = seq__8703_10623;
var G__10629 = chunk__8704_10624;
var G__10630 = count__8705_10625;
var G__10631 = (i__8706_10626 + 1);
seq__8703_10623 = G__10628;
chunk__8704_10624 = G__10629;
count__8705_10625 = G__10630;
i__8706_10626 = G__10631;
continue;
}
} else
{var temp__4092__auto___10632 = cljs.core.seq.call(null,seq__8703_10623);if(temp__4092__auto___10632)
{var seq__8703_10633__$1 = temp__4092__auto___10632;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8703_10633__$1))
{var c__5632__auto___10634 = cljs.core.chunk_first.call(null,seq__8703_10633__$1);{
var G__10635 = cljs.core.chunk_rest.call(null,seq__8703_10633__$1);
var G__10636 = c__5632__auto___10634;
var G__10637 = cljs.core.count.call(null,c__5632__auto___10634);
var G__10638 = 0;
seq__8703_10623 = G__10635;
chunk__8704_10624 = G__10636;
count__8705_10625 = G__10637;
i__8706_10626 = G__10638;
continue;
}
} else
{var arg__7135__auto___10639 = cljs.core.first.call(null,seq__8703_10633__$1);a__7134__auto__.push(arg__7135__auto___10639);
{
var G__10640 = cljs.core.next.call(null,seq__8703_10633__$1);
var G__10641 = null;
var G__10642 = 0;
var G__10643 = 0;
seq__8703_10623 = G__10640;
chunk__8704_10624 = G__10641;
count__8705_10625 = G__10642;
i__8706_10626 = G__10643;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.optgroup.apply(null,a__7134__auto__);
};
var optgroup = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return optgroup__delegate.call(this,args__7133__auto__);};
optgroup.cljs$lang$maxFixedArity = 0;
optgroup.cljs$lang$applyTo = (function (arglist__10644){
var args__7133__auto__ = cljs.core.seq(arglist__10644);
return optgroup__delegate(args__7133__auto__);
});
optgroup.cljs$core$IFn$_invoke$arity$variadic = optgroup__delegate;
return optgroup;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.option = (function() { 
var option__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8711_10645 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8712_10646 = null;var count__8713_10647 = 0;var i__8714_10648 = 0;while(true){
if((i__8714_10648 < count__8713_10647))
{var arg__7135__auto___10649 = cljs.core._nth.call(null,chunk__8712_10646,i__8714_10648);a__7134__auto__.push(arg__7135__auto___10649);
{
var G__10650 = seq__8711_10645;
var G__10651 = chunk__8712_10646;
var G__10652 = count__8713_10647;
var G__10653 = (i__8714_10648 + 1);
seq__8711_10645 = G__10650;
chunk__8712_10646 = G__10651;
count__8713_10647 = G__10652;
i__8714_10648 = G__10653;
continue;
}
} else
{var temp__4092__auto___10654 = cljs.core.seq.call(null,seq__8711_10645);if(temp__4092__auto___10654)
{var seq__8711_10655__$1 = temp__4092__auto___10654;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8711_10655__$1))
{var c__5632__auto___10656 = cljs.core.chunk_first.call(null,seq__8711_10655__$1);{
var G__10657 = cljs.core.chunk_rest.call(null,seq__8711_10655__$1);
var G__10658 = c__5632__auto___10656;
var G__10659 = cljs.core.count.call(null,c__5632__auto___10656);
var G__10660 = 0;
seq__8711_10645 = G__10657;
chunk__8712_10646 = G__10658;
count__8713_10647 = G__10659;
i__8714_10648 = G__10660;
continue;
}
} else
{var arg__7135__auto___10661 = cljs.core.first.call(null,seq__8711_10655__$1);a__7134__auto__.push(arg__7135__auto___10661);
{
var G__10662 = cljs.core.next.call(null,seq__8711_10655__$1);
var G__10663 = null;
var G__10664 = 0;
var G__10665 = 0;
seq__8711_10645 = G__10662;
chunk__8712_10646 = G__10663;
count__8713_10647 = G__10664;
i__8714_10648 = G__10665;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.option.apply(null,a__7134__auto__);
};
var option = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return option__delegate.call(this,args__7133__auto__);};
option.cljs$lang$maxFixedArity = 0;
option.cljs$lang$applyTo = (function (arglist__10666){
var args__7133__auto__ = cljs.core.seq(arglist__10666);
return option__delegate(args__7133__auto__);
});
option.cljs$core$IFn$_invoke$arity$variadic = option__delegate;
return option;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.output = (function() { 
var output__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8719_10667 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8720_10668 = null;var count__8721_10669 = 0;var i__8722_10670 = 0;while(true){
if((i__8722_10670 < count__8721_10669))
{var arg__7135__auto___10671 = cljs.core._nth.call(null,chunk__8720_10668,i__8722_10670);a__7134__auto__.push(arg__7135__auto___10671);
{
var G__10672 = seq__8719_10667;
var G__10673 = chunk__8720_10668;
var G__10674 = count__8721_10669;
var G__10675 = (i__8722_10670 + 1);
seq__8719_10667 = G__10672;
chunk__8720_10668 = G__10673;
count__8721_10669 = G__10674;
i__8722_10670 = G__10675;
continue;
}
} else
{var temp__4092__auto___10676 = cljs.core.seq.call(null,seq__8719_10667);if(temp__4092__auto___10676)
{var seq__8719_10677__$1 = temp__4092__auto___10676;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8719_10677__$1))
{var c__5632__auto___10678 = cljs.core.chunk_first.call(null,seq__8719_10677__$1);{
var G__10679 = cljs.core.chunk_rest.call(null,seq__8719_10677__$1);
var G__10680 = c__5632__auto___10678;
var G__10681 = cljs.core.count.call(null,c__5632__auto___10678);
var G__10682 = 0;
seq__8719_10667 = G__10679;
chunk__8720_10668 = G__10680;
count__8721_10669 = G__10681;
i__8722_10670 = G__10682;
continue;
}
} else
{var arg__7135__auto___10683 = cljs.core.first.call(null,seq__8719_10677__$1);a__7134__auto__.push(arg__7135__auto___10683);
{
var G__10684 = cljs.core.next.call(null,seq__8719_10677__$1);
var G__10685 = null;
var G__10686 = 0;
var G__10687 = 0;
seq__8719_10667 = G__10684;
chunk__8720_10668 = G__10685;
count__8721_10669 = G__10686;
i__8722_10670 = G__10687;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.output.apply(null,a__7134__auto__);
};
var output = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return output__delegate.call(this,args__7133__auto__);};
output.cljs$lang$maxFixedArity = 0;
output.cljs$lang$applyTo = (function (arglist__10688){
var args__7133__auto__ = cljs.core.seq(arglist__10688);
return output__delegate(args__7133__auto__);
});
output.cljs$core$IFn$_invoke$arity$variadic = output__delegate;
return output;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.p = (function() { 
var p__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8727_10689 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8728_10690 = null;var count__8729_10691 = 0;var i__8730_10692 = 0;while(true){
if((i__8730_10692 < count__8729_10691))
{var arg__7135__auto___10693 = cljs.core._nth.call(null,chunk__8728_10690,i__8730_10692);a__7134__auto__.push(arg__7135__auto___10693);
{
var G__10694 = seq__8727_10689;
var G__10695 = chunk__8728_10690;
var G__10696 = count__8729_10691;
var G__10697 = (i__8730_10692 + 1);
seq__8727_10689 = G__10694;
chunk__8728_10690 = G__10695;
count__8729_10691 = G__10696;
i__8730_10692 = G__10697;
continue;
}
} else
{var temp__4092__auto___10698 = cljs.core.seq.call(null,seq__8727_10689);if(temp__4092__auto___10698)
{var seq__8727_10699__$1 = temp__4092__auto___10698;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8727_10699__$1))
{var c__5632__auto___10700 = cljs.core.chunk_first.call(null,seq__8727_10699__$1);{
var G__10701 = cljs.core.chunk_rest.call(null,seq__8727_10699__$1);
var G__10702 = c__5632__auto___10700;
var G__10703 = cljs.core.count.call(null,c__5632__auto___10700);
var G__10704 = 0;
seq__8727_10689 = G__10701;
chunk__8728_10690 = G__10702;
count__8729_10691 = G__10703;
i__8730_10692 = G__10704;
continue;
}
} else
{var arg__7135__auto___10705 = cljs.core.first.call(null,seq__8727_10699__$1);a__7134__auto__.push(arg__7135__auto___10705);
{
var G__10706 = cljs.core.next.call(null,seq__8727_10699__$1);
var G__10707 = null;
var G__10708 = 0;
var G__10709 = 0;
seq__8727_10689 = G__10706;
chunk__8728_10690 = G__10707;
count__8729_10691 = G__10708;
i__8730_10692 = G__10709;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.p.apply(null,a__7134__auto__);
};
var p = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return p__delegate.call(this,args__7133__auto__);};
p.cljs$lang$maxFixedArity = 0;
p.cljs$lang$applyTo = (function (arglist__10710){
var args__7133__auto__ = cljs.core.seq(arglist__10710);
return p__delegate(args__7133__auto__);
});
p.cljs$core$IFn$_invoke$arity$variadic = p__delegate;
return p;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.param = (function() { 
var param__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8735_10711 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8736_10712 = null;var count__8737_10713 = 0;var i__8738_10714 = 0;while(true){
if((i__8738_10714 < count__8737_10713))
{var arg__7135__auto___10715 = cljs.core._nth.call(null,chunk__8736_10712,i__8738_10714);a__7134__auto__.push(arg__7135__auto___10715);
{
var G__10716 = seq__8735_10711;
var G__10717 = chunk__8736_10712;
var G__10718 = count__8737_10713;
var G__10719 = (i__8738_10714 + 1);
seq__8735_10711 = G__10716;
chunk__8736_10712 = G__10717;
count__8737_10713 = G__10718;
i__8738_10714 = G__10719;
continue;
}
} else
{var temp__4092__auto___10720 = cljs.core.seq.call(null,seq__8735_10711);if(temp__4092__auto___10720)
{var seq__8735_10721__$1 = temp__4092__auto___10720;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8735_10721__$1))
{var c__5632__auto___10722 = cljs.core.chunk_first.call(null,seq__8735_10721__$1);{
var G__10723 = cljs.core.chunk_rest.call(null,seq__8735_10721__$1);
var G__10724 = c__5632__auto___10722;
var G__10725 = cljs.core.count.call(null,c__5632__auto___10722);
var G__10726 = 0;
seq__8735_10711 = G__10723;
chunk__8736_10712 = G__10724;
count__8737_10713 = G__10725;
i__8738_10714 = G__10726;
continue;
}
} else
{var arg__7135__auto___10727 = cljs.core.first.call(null,seq__8735_10721__$1);a__7134__auto__.push(arg__7135__auto___10727);
{
var G__10728 = cljs.core.next.call(null,seq__8735_10721__$1);
var G__10729 = null;
var G__10730 = 0;
var G__10731 = 0;
seq__8735_10711 = G__10728;
chunk__8736_10712 = G__10729;
count__8737_10713 = G__10730;
i__8738_10714 = G__10731;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.param.apply(null,a__7134__auto__);
};
var param = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return param__delegate.call(this,args__7133__auto__);};
param.cljs$lang$maxFixedArity = 0;
param.cljs$lang$applyTo = (function (arglist__10732){
var args__7133__auto__ = cljs.core.seq(arglist__10732);
return param__delegate(args__7133__auto__);
});
param.cljs$core$IFn$_invoke$arity$variadic = param__delegate;
return param;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.pre = (function() { 
var pre__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8743_10733 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8744_10734 = null;var count__8745_10735 = 0;var i__8746_10736 = 0;while(true){
if((i__8746_10736 < count__8745_10735))
{var arg__7135__auto___10737 = cljs.core._nth.call(null,chunk__8744_10734,i__8746_10736);a__7134__auto__.push(arg__7135__auto___10737);
{
var G__10738 = seq__8743_10733;
var G__10739 = chunk__8744_10734;
var G__10740 = count__8745_10735;
var G__10741 = (i__8746_10736 + 1);
seq__8743_10733 = G__10738;
chunk__8744_10734 = G__10739;
count__8745_10735 = G__10740;
i__8746_10736 = G__10741;
continue;
}
} else
{var temp__4092__auto___10742 = cljs.core.seq.call(null,seq__8743_10733);if(temp__4092__auto___10742)
{var seq__8743_10743__$1 = temp__4092__auto___10742;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8743_10743__$1))
{var c__5632__auto___10744 = cljs.core.chunk_first.call(null,seq__8743_10743__$1);{
var G__10745 = cljs.core.chunk_rest.call(null,seq__8743_10743__$1);
var G__10746 = c__5632__auto___10744;
var G__10747 = cljs.core.count.call(null,c__5632__auto___10744);
var G__10748 = 0;
seq__8743_10733 = G__10745;
chunk__8744_10734 = G__10746;
count__8745_10735 = G__10747;
i__8746_10736 = G__10748;
continue;
}
} else
{var arg__7135__auto___10749 = cljs.core.first.call(null,seq__8743_10743__$1);a__7134__auto__.push(arg__7135__auto___10749);
{
var G__10750 = cljs.core.next.call(null,seq__8743_10743__$1);
var G__10751 = null;
var G__10752 = 0;
var G__10753 = 0;
seq__8743_10733 = G__10750;
chunk__8744_10734 = G__10751;
count__8745_10735 = G__10752;
i__8746_10736 = G__10753;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.pre.apply(null,a__7134__auto__);
};
var pre = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return pre__delegate.call(this,args__7133__auto__);};
pre.cljs$lang$maxFixedArity = 0;
pre.cljs$lang$applyTo = (function (arglist__10754){
var args__7133__auto__ = cljs.core.seq(arglist__10754);
return pre__delegate(args__7133__auto__);
});
pre.cljs$core$IFn$_invoke$arity$variadic = pre__delegate;
return pre;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.progress = (function() { 
var progress__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8751_10755 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8752_10756 = null;var count__8753_10757 = 0;var i__8754_10758 = 0;while(true){
if((i__8754_10758 < count__8753_10757))
{var arg__7135__auto___10759 = cljs.core._nth.call(null,chunk__8752_10756,i__8754_10758);a__7134__auto__.push(arg__7135__auto___10759);
{
var G__10760 = seq__8751_10755;
var G__10761 = chunk__8752_10756;
var G__10762 = count__8753_10757;
var G__10763 = (i__8754_10758 + 1);
seq__8751_10755 = G__10760;
chunk__8752_10756 = G__10761;
count__8753_10757 = G__10762;
i__8754_10758 = G__10763;
continue;
}
} else
{var temp__4092__auto___10764 = cljs.core.seq.call(null,seq__8751_10755);if(temp__4092__auto___10764)
{var seq__8751_10765__$1 = temp__4092__auto___10764;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8751_10765__$1))
{var c__5632__auto___10766 = cljs.core.chunk_first.call(null,seq__8751_10765__$1);{
var G__10767 = cljs.core.chunk_rest.call(null,seq__8751_10765__$1);
var G__10768 = c__5632__auto___10766;
var G__10769 = cljs.core.count.call(null,c__5632__auto___10766);
var G__10770 = 0;
seq__8751_10755 = G__10767;
chunk__8752_10756 = G__10768;
count__8753_10757 = G__10769;
i__8754_10758 = G__10770;
continue;
}
} else
{var arg__7135__auto___10771 = cljs.core.first.call(null,seq__8751_10765__$1);a__7134__auto__.push(arg__7135__auto___10771);
{
var G__10772 = cljs.core.next.call(null,seq__8751_10765__$1);
var G__10773 = null;
var G__10774 = 0;
var G__10775 = 0;
seq__8751_10755 = G__10772;
chunk__8752_10756 = G__10773;
count__8753_10757 = G__10774;
i__8754_10758 = G__10775;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.progress.apply(null,a__7134__auto__);
};
var progress = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return progress__delegate.call(this,args__7133__auto__);};
progress.cljs$lang$maxFixedArity = 0;
progress.cljs$lang$applyTo = (function (arglist__10776){
var args__7133__auto__ = cljs.core.seq(arglist__10776);
return progress__delegate(args__7133__auto__);
});
progress.cljs$core$IFn$_invoke$arity$variadic = progress__delegate;
return progress;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.q = (function() { 
var q__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8759_10777 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8760_10778 = null;var count__8761_10779 = 0;var i__8762_10780 = 0;while(true){
if((i__8762_10780 < count__8761_10779))
{var arg__7135__auto___10781 = cljs.core._nth.call(null,chunk__8760_10778,i__8762_10780);a__7134__auto__.push(arg__7135__auto___10781);
{
var G__10782 = seq__8759_10777;
var G__10783 = chunk__8760_10778;
var G__10784 = count__8761_10779;
var G__10785 = (i__8762_10780 + 1);
seq__8759_10777 = G__10782;
chunk__8760_10778 = G__10783;
count__8761_10779 = G__10784;
i__8762_10780 = G__10785;
continue;
}
} else
{var temp__4092__auto___10786 = cljs.core.seq.call(null,seq__8759_10777);if(temp__4092__auto___10786)
{var seq__8759_10787__$1 = temp__4092__auto___10786;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8759_10787__$1))
{var c__5632__auto___10788 = cljs.core.chunk_first.call(null,seq__8759_10787__$1);{
var G__10789 = cljs.core.chunk_rest.call(null,seq__8759_10787__$1);
var G__10790 = c__5632__auto___10788;
var G__10791 = cljs.core.count.call(null,c__5632__auto___10788);
var G__10792 = 0;
seq__8759_10777 = G__10789;
chunk__8760_10778 = G__10790;
count__8761_10779 = G__10791;
i__8762_10780 = G__10792;
continue;
}
} else
{var arg__7135__auto___10793 = cljs.core.first.call(null,seq__8759_10787__$1);a__7134__auto__.push(arg__7135__auto___10793);
{
var G__10794 = cljs.core.next.call(null,seq__8759_10787__$1);
var G__10795 = null;
var G__10796 = 0;
var G__10797 = 0;
seq__8759_10777 = G__10794;
chunk__8760_10778 = G__10795;
count__8761_10779 = G__10796;
i__8762_10780 = G__10797;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.q.apply(null,a__7134__auto__);
};
var q = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return q__delegate.call(this,args__7133__auto__);};
q.cljs$lang$maxFixedArity = 0;
q.cljs$lang$applyTo = (function (arglist__10798){
var args__7133__auto__ = cljs.core.seq(arglist__10798);
return q__delegate(args__7133__auto__);
});
q.cljs$core$IFn$_invoke$arity$variadic = q__delegate;
return q;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.rp = (function() { 
var rp__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8767_10799 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8768_10800 = null;var count__8769_10801 = 0;var i__8770_10802 = 0;while(true){
if((i__8770_10802 < count__8769_10801))
{var arg__7135__auto___10803 = cljs.core._nth.call(null,chunk__8768_10800,i__8770_10802);a__7134__auto__.push(arg__7135__auto___10803);
{
var G__10804 = seq__8767_10799;
var G__10805 = chunk__8768_10800;
var G__10806 = count__8769_10801;
var G__10807 = (i__8770_10802 + 1);
seq__8767_10799 = G__10804;
chunk__8768_10800 = G__10805;
count__8769_10801 = G__10806;
i__8770_10802 = G__10807;
continue;
}
} else
{var temp__4092__auto___10808 = cljs.core.seq.call(null,seq__8767_10799);if(temp__4092__auto___10808)
{var seq__8767_10809__$1 = temp__4092__auto___10808;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8767_10809__$1))
{var c__5632__auto___10810 = cljs.core.chunk_first.call(null,seq__8767_10809__$1);{
var G__10811 = cljs.core.chunk_rest.call(null,seq__8767_10809__$1);
var G__10812 = c__5632__auto___10810;
var G__10813 = cljs.core.count.call(null,c__5632__auto___10810);
var G__10814 = 0;
seq__8767_10799 = G__10811;
chunk__8768_10800 = G__10812;
count__8769_10801 = G__10813;
i__8770_10802 = G__10814;
continue;
}
} else
{var arg__7135__auto___10815 = cljs.core.first.call(null,seq__8767_10809__$1);a__7134__auto__.push(arg__7135__auto___10815);
{
var G__10816 = cljs.core.next.call(null,seq__8767_10809__$1);
var G__10817 = null;
var G__10818 = 0;
var G__10819 = 0;
seq__8767_10799 = G__10816;
chunk__8768_10800 = G__10817;
count__8769_10801 = G__10818;
i__8770_10802 = G__10819;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.rp.apply(null,a__7134__auto__);
};
var rp = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return rp__delegate.call(this,args__7133__auto__);};
rp.cljs$lang$maxFixedArity = 0;
rp.cljs$lang$applyTo = (function (arglist__10820){
var args__7133__auto__ = cljs.core.seq(arglist__10820);
return rp__delegate(args__7133__auto__);
});
rp.cljs$core$IFn$_invoke$arity$variadic = rp__delegate;
return rp;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.rt = (function() { 
var rt__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8775_10821 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8776_10822 = null;var count__8777_10823 = 0;var i__8778_10824 = 0;while(true){
if((i__8778_10824 < count__8777_10823))
{var arg__7135__auto___10825 = cljs.core._nth.call(null,chunk__8776_10822,i__8778_10824);a__7134__auto__.push(arg__7135__auto___10825);
{
var G__10826 = seq__8775_10821;
var G__10827 = chunk__8776_10822;
var G__10828 = count__8777_10823;
var G__10829 = (i__8778_10824 + 1);
seq__8775_10821 = G__10826;
chunk__8776_10822 = G__10827;
count__8777_10823 = G__10828;
i__8778_10824 = G__10829;
continue;
}
} else
{var temp__4092__auto___10830 = cljs.core.seq.call(null,seq__8775_10821);if(temp__4092__auto___10830)
{var seq__8775_10831__$1 = temp__4092__auto___10830;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8775_10831__$1))
{var c__5632__auto___10832 = cljs.core.chunk_first.call(null,seq__8775_10831__$1);{
var G__10833 = cljs.core.chunk_rest.call(null,seq__8775_10831__$1);
var G__10834 = c__5632__auto___10832;
var G__10835 = cljs.core.count.call(null,c__5632__auto___10832);
var G__10836 = 0;
seq__8775_10821 = G__10833;
chunk__8776_10822 = G__10834;
count__8777_10823 = G__10835;
i__8778_10824 = G__10836;
continue;
}
} else
{var arg__7135__auto___10837 = cljs.core.first.call(null,seq__8775_10831__$1);a__7134__auto__.push(arg__7135__auto___10837);
{
var G__10838 = cljs.core.next.call(null,seq__8775_10831__$1);
var G__10839 = null;
var G__10840 = 0;
var G__10841 = 0;
seq__8775_10821 = G__10838;
chunk__8776_10822 = G__10839;
count__8777_10823 = G__10840;
i__8778_10824 = G__10841;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.rt.apply(null,a__7134__auto__);
};
var rt = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return rt__delegate.call(this,args__7133__auto__);};
rt.cljs$lang$maxFixedArity = 0;
rt.cljs$lang$applyTo = (function (arglist__10842){
var args__7133__auto__ = cljs.core.seq(arglist__10842);
return rt__delegate(args__7133__auto__);
});
rt.cljs$core$IFn$_invoke$arity$variadic = rt__delegate;
return rt;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.ruby = (function() { 
var ruby__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8783_10843 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8784_10844 = null;var count__8785_10845 = 0;var i__8786_10846 = 0;while(true){
if((i__8786_10846 < count__8785_10845))
{var arg__7135__auto___10847 = cljs.core._nth.call(null,chunk__8784_10844,i__8786_10846);a__7134__auto__.push(arg__7135__auto___10847);
{
var G__10848 = seq__8783_10843;
var G__10849 = chunk__8784_10844;
var G__10850 = count__8785_10845;
var G__10851 = (i__8786_10846 + 1);
seq__8783_10843 = G__10848;
chunk__8784_10844 = G__10849;
count__8785_10845 = G__10850;
i__8786_10846 = G__10851;
continue;
}
} else
{var temp__4092__auto___10852 = cljs.core.seq.call(null,seq__8783_10843);if(temp__4092__auto___10852)
{var seq__8783_10853__$1 = temp__4092__auto___10852;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8783_10853__$1))
{var c__5632__auto___10854 = cljs.core.chunk_first.call(null,seq__8783_10853__$1);{
var G__10855 = cljs.core.chunk_rest.call(null,seq__8783_10853__$1);
var G__10856 = c__5632__auto___10854;
var G__10857 = cljs.core.count.call(null,c__5632__auto___10854);
var G__10858 = 0;
seq__8783_10843 = G__10855;
chunk__8784_10844 = G__10856;
count__8785_10845 = G__10857;
i__8786_10846 = G__10858;
continue;
}
} else
{var arg__7135__auto___10859 = cljs.core.first.call(null,seq__8783_10853__$1);a__7134__auto__.push(arg__7135__auto___10859);
{
var G__10860 = cljs.core.next.call(null,seq__8783_10853__$1);
var G__10861 = null;
var G__10862 = 0;
var G__10863 = 0;
seq__8783_10843 = G__10860;
chunk__8784_10844 = G__10861;
count__8785_10845 = G__10862;
i__8786_10846 = G__10863;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.ruby.apply(null,a__7134__auto__);
};
var ruby = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ruby__delegate.call(this,args__7133__auto__);};
ruby.cljs$lang$maxFixedArity = 0;
ruby.cljs$lang$applyTo = (function (arglist__10864){
var args__7133__auto__ = cljs.core.seq(arglist__10864);
return ruby__delegate(args__7133__auto__);
});
ruby.cljs$core$IFn$_invoke$arity$variadic = ruby__delegate;
return ruby;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.s = (function() { 
var s__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8791_10865 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8792_10866 = null;var count__8793_10867 = 0;var i__8794_10868 = 0;while(true){
if((i__8794_10868 < count__8793_10867))
{var arg__7135__auto___10869 = cljs.core._nth.call(null,chunk__8792_10866,i__8794_10868);a__7134__auto__.push(arg__7135__auto___10869);
{
var G__10870 = seq__8791_10865;
var G__10871 = chunk__8792_10866;
var G__10872 = count__8793_10867;
var G__10873 = (i__8794_10868 + 1);
seq__8791_10865 = G__10870;
chunk__8792_10866 = G__10871;
count__8793_10867 = G__10872;
i__8794_10868 = G__10873;
continue;
}
} else
{var temp__4092__auto___10874 = cljs.core.seq.call(null,seq__8791_10865);if(temp__4092__auto___10874)
{var seq__8791_10875__$1 = temp__4092__auto___10874;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8791_10875__$1))
{var c__5632__auto___10876 = cljs.core.chunk_first.call(null,seq__8791_10875__$1);{
var G__10877 = cljs.core.chunk_rest.call(null,seq__8791_10875__$1);
var G__10878 = c__5632__auto___10876;
var G__10879 = cljs.core.count.call(null,c__5632__auto___10876);
var G__10880 = 0;
seq__8791_10865 = G__10877;
chunk__8792_10866 = G__10878;
count__8793_10867 = G__10879;
i__8794_10868 = G__10880;
continue;
}
} else
{var arg__7135__auto___10881 = cljs.core.first.call(null,seq__8791_10875__$1);a__7134__auto__.push(arg__7135__auto___10881);
{
var G__10882 = cljs.core.next.call(null,seq__8791_10875__$1);
var G__10883 = null;
var G__10884 = 0;
var G__10885 = 0;
seq__8791_10865 = G__10882;
chunk__8792_10866 = G__10883;
count__8793_10867 = G__10884;
i__8794_10868 = G__10885;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.s.apply(null,a__7134__auto__);
};
var s = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return s__delegate.call(this,args__7133__auto__);};
s.cljs$lang$maxFixedArity = 0;
s.cljs$lang$applyTo = (function (arglist__10886){
var args__7133__auto__ = cljs.core.seq(arglist__10886);
return s__delegate(args__7133__auto__);
});
s.cljs$core$IFn$_invoke$arity$variadic = s__delegate;
return s;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.samp = (function() { 
var samp__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8799_10887 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8800_10888 = null;var count__8801_10889 = 0;var i__8802_10890 = 0;while(true){
if((i__8802_10890 < count__8801_10889))
{var arg__7135__auto___10891 = cljs.core._nth.call(null,chunk__8800_10888,i__8802_10890);a__7134__auto__.push(arg__7135__auto___10891);
{
var G__10892 = seq__8799_10887;
var G__10893 = chunk__8800_10888;
var G__10894 = count__8801_10889;
var G__10895 = (i__8802_10890 + 1);
seq__8799_10887 = G__10892;
chunk__8800_10888 = G__10893;
count__8801_10889 = G__10894;
i__8802_10890 = G__10895;
continue;
}
} else
{var temp__4092__auto___10896 = cljs.core.seq.call(null,seq__8799_10887);if(temp__4092__auto___10896)
{var seq__8799_10897__$1 = temp__4092__auto___10896;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8799_10897__$1))
{var c__5632__auto___10898 = cljs.core.chunk_first.call(null,seq__8799_10897__$1);{
var G__10899 = cljs.core.chunk_rest.call(null,seq__8799_10897__$1);
var G__10900 = c__5632__auto___10898;
var G__10901 = cljs.core.count.call(null,c__5632__auto___10898);
var G__10902 = 0;
seq__8799_10887 = G__10899;
chunk__8800_10888 = G__10900;
count__8801_10889 = G__10901;
i__8802_10890 = G__10902;
continue;
}
} else
{var arg__7135__auto___10903 = cljs.core.first.call(null,seq__8799_10897__$1);a__7134__auto__.push(arg__7135__auto___10903);
{
var G__10904 = cljs.core.next.call(null,seq__8799_10897__$1);
var G__10905 = null;
var G__10906 = 0;
var G__10907 = 0;
seq__8799_10887 = G__10904;
chunk__8800_10888 = G__10905;
count__8801_10889 = G__10906;
i__8802_10890 = G__10907;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.samp.apply(null,a__7134__auto__);
};
var samp = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return samp__delegate.call(this,args__7133__auto__);};
samp.cljs$lang$maxFixedArity = 0;
samp.cljs$lang$applyTo = (function (arglist__10908){
var args__7133__auto__ = cljs.core.seq(arglist__10908);
return samp__delegate(args__7133__auto__);
});
samp.cljs$core$IFn$_invoke$arity$variadic = samp__delegate;
return samp;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.script = (function() { 
var script__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8807_10909 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8808_10910 = null;var count__8809_10911 = 0;var i__8810_10912 = 0;while(true){
if((i__8810_10912 < count__8809_10911))
{var arg__7135__auto___10913 = cljs.core._nth.call(null,chunk__8808_10910,i__8810_10912);a__7134__auto__.push(arg__7135__auto___10913);
{
var G__10914 = seq__8807_10909;
var G__10915 = chunk__8808_10910;
var G__10916 = count__8809_10911;
var G__10917 = (i__8810_10912 + 1);
seq__8807_10909 = G__10914;
chunk__8808_10910 = G__10915;
count__8809_10911 = G__10916;
i__8810_10912 = G__10917;
continue;
}
} else
{var temp__4092__auto___10918 = cljs.core.seq.call(null,seq__8807_10909);if(temp__4092__auto___10918)
{var seq__8807_10919__$1 = temp__4092__auto___10918;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8807_10919__$1))
{var c__5632__auto___10920 = cljs.core.chunk_first.call(null,seq__8807_10919__$1);{
var G__10921 = cljs.core.chunk_rest.call(null,seq__8807_10919__$1);
var G__10922 = c__5632__auto___10920;
var G__10923 = cljs.core.count.call(null,c__5632__auto___10920);
var G__10924 = 0;
seq__8807_10909 = G__10921;
chunk__8808_10910 = G__10922;
count__8809_10911 = G__10923;
i__8810_10912 = G__10924;
continue;
}
} else
{var arg__7135__auto___10925 = cljs.core.first.call(null,seq__8807_10919__$1);a__7134__auto__.push(arg__7135__auto___10925);
{
var G__10926 = cljs.core.next.call(null,seq__8807_10919__$1);
var G__10927 = null;
var G__10928 = 0;
var G__10929 = 0;
seq__8807_10909 = G__10926;
chunk__8808_10910 = G__10927;
count__8809_10911 = G__10928;
i__8810_10912 = G__10929;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.script.apply(null,a__7134__auto__);
};
var script = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return script__delegate.call(this,args__7133__auto__);};
script.cljs$lang$maxFixedArity = 0;
script.cljs$lang$applyTo = (function (arglist__10930){
var args__7133__auto__ = cljs.core.seq(arglist__10930);
return script__delegate(args__7133__auto__);
});
script.cljs$core$IFn$_invoke$arity$variadic = script__delegate;
return script;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.section = (function() { 
var section__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8815_10931 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8816_10932 = null;var count__8817_10933 = 0;var i__8818_10934 = 0;while(true){
if((i__8818_10934 < count__8817_10933))
{var arg__7135__auto___10935 = cljs.core._nth.call(null,chunk__8816_10932,i__8818_10934);a__7134__auto__.push(arg__7135__auto___10935);
{
var G__10936 = seq__8815_10931;
var G__10937 = chunk__8816_10932;
var G__10938 = count__8817_10933;
var G__10939 = (i__8818_10934 + 1);
seq__8815_10931 = G__10936;
chunk__8816_10932 = G__10937;
count__8817_10933 = G__10938;
i__8818_10934 = G__10939;
continue;
}
} else
{var temp__4092__auto___10940 = cljs.core.seq.call(null,seq__8815_10931);if(temp__4092__auto___10940)
{var seq__8815_10941__$1 = temp__4092__auto___10940;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8815_10941__$1))
{var c__5632__auto___10942 = cljs.core.chunk_first.call(null,seq__8815_10941__$1);{
var G__10943 = cljs.core.chunk_rest.call(null,seq__8815_10941__$1);
var G__10944 = c__5632__auto___10942;
var G__10945 = cljs.core.count.call(null,c__5632__auto___10942);
var G__10946 = 0;
seq__8815_10931 = G__10943;
chunk__8816_10932 = G__10944;
count__8817_10933 = G__10945;
i__8818_10934 = G__10946;
continue;
}
} else
{var arg__7135__auto___10947 = cljs.core.first.call(null,seq__8815_10941__$1);a__7134__auto__.push(arg__7135__auto___10947);
{
var G__10948 = cljs.core.next.call(null,seq__8815_10941__$1);
var G__10949 = null;
var G__10950 = 0;
var G__10951 = 0;
seq__8815_10931 = G__10948;
chunk__8816_10932 = G__10949;
count__8817_10933 = G__10950;
i__8818_10934 = G__10951;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.section.apply(null,a__7134__auto__);
};
var section = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return section__delegate.call(this,args__7133__auto__);};
section.cljs$lang$maxFixedArity = 0;
section.cljs$lang$applyTo = (function (arglist__10952){
var args__7133__auto__ = cljs.core.seq(arglist__10952);
return section__delegate(args__7133__auto__);
});
section.cljs$core$IFn$_invoke$arity$variadic = section__delegate;
return section;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.select = (function() { 
var select__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8823_10953 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8824_10954 = null;var count__8825_10955 = 0;var i__8826_10956 = 0;while(true){
if((i__8826_10956 < count__8825_10955))
{var arg__7135__auto___10957 = cljs.core._nth.call(null,chunk__8824_10954,i__8826_10956);a__7134__auto__.push(arg__7135__auto___10957);
{
var G__10958 = seq__8823_10953;
var G__10959 = chunk__8824_10954;
var G__10960 = count__8825_10955;
var G__10961 = (i__8826_10956 + 1);
seq__8823_10953 = G__10958;
chunk__8824_10954 = G__10959;
count__8825_10955 = G__10960;
i__8826_10956 = G__10961;
continue;
}
} else
{var temp__4092__auto___10962 = cljs.core.seq.call(null,seq__8823_10953);if(temp__4092__auto___10962)
{var seq__8823_10963__$1 = temp__4092__auto___10962;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8823_10963__$1))
{var c__5632__auto___10964 = cljs.core.chunk_first.call(null,seq__8823_10963__$1);{
var G__10965 = cljs.core.chunk_rest.call(null,seq__8823_10963__$1);
var G__10966 = c__5632__auto___10964;
var G__10967 = cljs.core.count.call(null,c__5632__auto___10964);
var G__10968 = 0;
seq__8823_10953 = G__10965;
chunk__8824_10954 = G__10966;
count__8825_10955 = G__10967;
i__8826_10956 = G__10968;
continue;
}
} else
{var arg__7135__auto___10969 = cljs.core.first.call(null,seq__8823_10963__$1);a__7134__auto__.push(arg__7135__auto___10969);
{
var G__10970 = cljs.core.next.call(null,seq__8823_10963__$1);
var G__10971 = null;
var G__10972 = 0;
var G__10973 = 0;
seq__8823_10953 = G__10970;
chunk__8824_10954 = G__10971;
count__8825_10955 = G__10972;
i__8826_10956 = G__10973;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.select.apply(null,a__7134__auto__);
};
var select = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return select__delegate.call(this,args__7133__auto__);};
select.cljs$lang$maxFixedArity = 0;
select.cljs$lang$applyTo = (function (arglist__10974){
var args__7133__auto__ = cljs.core.seq(arglist__10974);
return select__delegate(args__7133__auto__);
});
select.cljs$core$IFn$_invoke$arity$variadic = select__delegate;
return select;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.small = (function() { 
var small__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8831_10975 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8832_10976 = null;var count__8833_10977 = 0;var i__8834_10978 = 0;while(true){
if((i__8834_10978 < count__8833_10977))
{var arg__7135__auto___10979 = cljs.core._nth.call(null,chunk__8832_10976,i__8834_10978);a__7134__auto__.push(arg__7135__auto___10979);
{
var G__10980 = seq__8831_10975;
var G__10981 = chunk__8832_10976;
var G__10982 = count__8833_10977;
var G__10983 = (i__8834_10978 + 1);
seq__8831_10975 = G__10980;
chunk__8832_10976 = G__10981;
count__8833_10977 = G__10982;
i__8834_10978 = G__10983;
continue;
}
} else
{var temp__4092__auto___10984 = cljs.core.seq.call(null,seq__8831_10975);if(temp__4092__auto___10984)
{var seq__8831_10985__$1 = temp__4092__auto___10984;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8831_10985__$1))
{var c__5632__auto___10986 = cljs.core.chunk_first.call(null,seq__8831_10985__$1);{
var G__10987 = cljs.core.chunk_rest.call(null,seq__8831_10985__$1);
var G__10988 = c__5632__auto___10986;
var G__10989 = cljs.core.count.call(null,c__5632__auto___10986);
var G__10990 = 0;
seq__8831_10975 = G__10987;
chunk__8832_10976 = G__10988;
count__8833_10977 = G__10989;
i__8834_10978 = G__10990;
continue;
}
} else
{var arg__7135__auto___10991 = cljs.core.first.call(null,seq__8831_10985__$1);a__7134__auto__.push(arg__7135__auto___10991);
{
var G__10992 = cljs.core.next.call(null,seq__8831_10985__$1);
var G__10993 = null;
var G__10994 = 0;
var G__10995 = 0;
seq__8831_10975 = G__10992;
chunk__8832_10976 = G__10993;
count__8833_10977 = G__10994;
i__8834_10978 = G__10995;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.small.apply(null,a__7134__auto__);
};
var small = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return small__delegate.call(this,args__7133__auto__);};
small.cljs$lang$maxFixedArity = 0;
small.cljs$lang$applyTo = (function (arglist__10996){
var args__7133__auto__ = cljs.core.seq(arglist__10996);
return small__delegate(args__7133__auto__);
});
small.cljs$core$IFn$_invoke$arity$variadic = small__delegate;
return small;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.source = (function() { 
var source__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8839_10997 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8840_10998 = null;var count__8841_10999 = 0;var i__8842_11000 = 0;while(true){
if((i__8842_11000 < count__8841_10999))
{var arg__7135__auto___11001 = cljs.core._nth.call(null,chunk__8840_10998,i__8842_11000);a__7134__auto__.push(arg__7135__auto___11001);
{
var G__11002 = seq__8839_10997;
var G__11003 = chunk__8840_10998;
var G__11004 = count__8841_10999;
var G__11005 = (i__8842_11000 + 1);
seq__8839_10997 = G__11002;
chunk__8840_10998 = G__11003;
count__8841_10999 = G__11004;
i__8842_11000 = G__11005;
continue;
}
} else
{var temp__4092__auto___11006 = cljs.core.seq.call(null,seq__8839_10997);if(temp__4092__auto___11006)
{var seq__8839_11007__$1 = temp__4092__auto___11006;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8839_11007__$1))
{var c__5632__auto___11008 = cljs.core.chunk_first.call(null,seq__8839_11007__$1);{
var G__11009 = cljs.core.chunk_rest.call(null,seq__8839_11007__$1);
var G__11010 = c__5632__auto___11008;
var G__11011 = cljs.core.count.call(null,c__5632__auto___11008);
var G__11012 = 0;
seq__8839_10997 = G__11009;
chunk__8840_10998 = G__11010;
count__8841_10999 = G__11011;
i__8842_11000 = G__11012;
continue;
}
} else
{var arg__7135__auto___11013 = cljs.core.first.call(null,seq__8839_11007__$1);a__7134__auto__.push(arg__7135__auto___11013);
{
var G__11014 = cljs.core.next.call(null,seq__8839_11007__$1);
var G__11015 = null;
var G__11016 = 0;
var G__11017 = 0;
seq__8839_10997 = G__11014;
chunk__8840_10998 = G__11015;
count__8841_10999 = G__11016;
i__8842_11000 = G__11017;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.source.apply(null,a__7134__auto__);
};
var source = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return source__delegate.call(this,args__7133__auto__);};
source.cljs$lang$maxFixedArity = 0;
source.cljs$lang$applyTo = (function (arglist__11018){
var args__7133__auto__ = cljs.core.seq(arglist__11018);
return source__delegate(args__7133__auto__);
});
source.cljs$core$IFn$_invoke$arity$variadic = source__delegate;
return source;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.span = (function() { 
var span__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8847_11019 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8848_11020 = null;var count__8849_11021 = 0;var i__8850_11022 = 0;while(true){
if((i__8850_11022 < count__8849_11021))
{var arg__7135__auto___11023 = cljs.core._nth.call(null,chunk__8848_11020,i__8850_11022);a__7134__auto__.push(arg__7135__auto___11023);
{
var G__11024 = seq__8847_11019;
var G__11025 = chunk__8848_11020;
var G__11026 = count__8849_11021;
var G__11027 = (i__8850_11022 + 1);
seq__8847_11019 = G__11024;
chunk__8848_11020 = G__11025;
count__8849_11021 = G__11026;
i__8850_11022 = G__11027;
continue;
}
} else
{var temp__4092__auto___11028 = cljs.core.seq.call(null,seq__8847_11019);if(temp__4092__auto___11028)
{var seq__8847_11029__$1 = temp__4092__auto___11028;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8847_11029__$1))
{var c__5632__auto___11030 = cljs.core.chunk_first.call(null,seq__8847_11029__$1);{
var G__11031 = cljs.core.chunk_rest.call(null,seq__8847_11029__$1);
var G__11032 = c__5632__auto___11030;
var G__11033 = cljs.core.count.call(null,c__5632__auto___11030);
var G__11034 = 0;
seq__8847_11019 = G__11031;
chunk__8848_11020 = G__11032;
count__8849_11021 = G__11033;
i__8850_11022 = G__11034;
continue;
}
} else
{var arg__7135__auto___11035 = cljs.core.first.call(null,seq__8847_11029__$1);a__7134__auto__.push(arg__7135__auto___11035);
{
var G__11036 = cljs.core.next.call(null,seq__8847_11029__$1);
var G__11037 = null;
var G__11038 = 0;
var G__11039 = 0;
seq__8847_11019 = G__11036;
chunk__8848_11020 = G__11037;
count__8849_11021 = G__11038;
i__8850_11022 = G__11039;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.span.apply(null,a__7134__auto__);
};
var span = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return span__delegate.call(this,args__7133__auto__);};
span.cljs$lang$maxFixedArity = 0;
span.cljs$lang$applyTo = (function (arglist__11040){
var args__7133__auto__ = cljs.core.seq(arglist__11040);
return span__delegate(args__7133__auto__);
});
span.cljs$core$IFn$_invoke$arity$variadic = span__delegate;
return span;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.strong = (function() { 
var strong__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8855_11041 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8856_11042 = null;var count__8857_11043 = 0;var i__8858_11044 = 0;while(true){
if((i__8858_11044 < count__8857_11043))
{var arg__7135__auto___11045 = cljs.core._nth.call(null,chunk__8856_11042,i__8858_11044);a__7134__auto__.push(arg__7135__auto___11045);
{
var G__11046 = seq__8855_11041;
var G__11047 = chunk__8856_11042;
var G__11048 = count__8857_11043;
var G__11049 = (i__8858_11044 + 1);
seq__8855_11041 = G__11046;
chunk__8856_11042 = G__11047;
count__8857_11043 = G__11048;
i__8858_11044 = G__11049;
continue;
}
} else
{var temp__4092__auto___11050 = cljs.core.seq.call(null,seq__8855_11041);if(temp__4092__auto___11050)
{var seq__8855_11051__$1 = temp__4092__auto___11050;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8855_11051__$1))
{var c__5632__auto___11052 = cljs.core.chunk_first.call(null,seq__8855_11051__$1);{
var G__11053 = cljs.core.chunk_rest.call(null,seq__8855_11051__$1);
var G__11054 = c__5632__auto___11052;
var G__11055 = cljs.core.count.call(null,c__5632__auto___11052);
var G__11056 = 0;
seq__8855_11041 = G__11053;
chunk__8856_11042 = G__11054;
count__8857_11043 = G__11055;
i__8858_11044 = G__11056;
continue;
}
} else
{var arg__7135__auto___11057 = cljs.core.first.call(null,seq__8855_11051__$1);a__7134__auto__.push(arg__7135__auto___11057);
{
var G__11058 = cljs.core.next.call(null,seq__8855_11051__$1);
var G__11059 = null;
var G__11060 = 0;
var G__11061 = 0;
seq__8855_11041 = G__11058;
chunk__8856_11042 = G__11059;
count__8857_11043 = G__11060;
i__8858_11044 = G__11061;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.strong.apply(null,a__7134__auto__);
};
var strong = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return strong__delegate.call(this,args__7133__auto__);};
strong.cljs$lang$maxFixedArity = 0;
strong.cljs$lang$applyTo = (function (arglist__11062){
var args__7133__auto__ = cljs.core.seq(arglist__11062);
return strong__delegate(args__7133__auto__);
});
strong.cljs$core$IFn$_invoke$arity$variadic = strong__delegate;
return strong;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.style = (function() { 
var style__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8863_11063 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8864_11064 = null;var count__8865_11065 = 0;var i__8866_11066 = 0;while(true){
if((i__8866_11066 < count__8865_11065))
{var arg__7135__auto___11067 = cljs.core._nth.call(null,chunk__8864_11064,i__8866_11066);a__7134__auto__.push(arg__7135__auto___11067);
{
var G__11068 = seq__8863_11063;
var G__11069 = chunk__8864_11064;
var G__11070 = count__8865_11065;
var G__11071 = (i__8866_11066 + 1);
seq__8863_11063 = G__11068;
chunk__8864_11064 = G__11069;
count__8865_11065 = G__11070;
i__8866_11066 = G__11071;
continue;
}
} else
{var temp__4092__auto___11072 = cljs.core.seq.call(null,seq__8863_11063);if(temp__4092__auto___11072)
{var seq__8863_11073__$1 = temp__4092__auto___11072;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8863_11073__$1))
{var c__5632__auto___11074 = cljs.core.chunk_first.call(null,seq__8863_11073__$1);{
var G__11075 = cljs.core.chunk_rest.call(null,seq__8863_11073__$1);
var G__11076 = c__5632__auto___11074;
var G__11077 = cljs.core.count.call(null,c__5632__auto___11074);
var G__11078 = 0;
seq__8863_11063 = G__11075;
chunk__8864_11064 = G__11076;
count__8865_11065 = G__11077;
i__8866_11066 = G__11078;
continue;
}
} else
{var arg__7135__auto___11079 = cljs.core.first.call(null,seq__8863_11073__$1);a__7134__auto__.push(arg__7135__auto___11079);
{
var G__11080 = cljs.core.next.call(null,seq__8863_11073__$1);
var G__11081 = null;
var G__11082 = 0;
var G__11083 = 0;
seq__8863_11063 = G__11080;
chunk__8864_11064 = G__11081;
count__8865_11065 = G__11082;
i__8866_11066 = G__11083;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.style.apply(null,a__7134__auto__);
};
var style = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return style__delegate.call(this,args__7133__auto__);};
style.cljs$lang$maxFixedArity = 0;
style.cljs$lang$applyTo = (function (arglist__11084){
var args__7133__auto__ = cljs.core.seq(arglist__11084);
return style__delegate(args__7133__auto__);
});
style.cljs$core$IFn$_invoke$arity$variadic = style__delegate;
return style;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.sub = (function() { 
var sub__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8871_11085 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8872_11086 = null;var count__8873_11087 = 0;var i__8874_11088 = 0;while(true){
if((i__8874_11088 < count__8873_11087))
{var arg__7135__auto___11089 = cljs.core._nth.call(null,chunk__8872_11086,i__8874_11088);a__7134__auto__.push(arg__7135__auto___11089);
{
var G__11090 = seq__8871_11085;
var G__11091 = chunk__8872_11086;
var G__11092 = count__8873_11087;
var G__11093 = (i__8874_11088 + 1);
seq__8871_11085 = G__11090;
chunk__8872_11086 = G__11091;
count__8873_11087 = G__11092;
i__8874_11088 = G__11093;
continue;
}
} else
{var temp__4092__auto___11094 = cljs.core.seq.call(null,seq__8871_11085);if(temp__4092__auto___11094)
{var seq__8871_11095__$1 = temp__4092__auto___11094;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8871_11095__$1))
{var c__5632__auto___11096 = cljs.core.chunk_first.call(null,seq__8871_11095__$1);{
var G__11097 = cljs.core.chunk_rest.call(null,seq__8871_11095__$1);
var G__11098 = c__5632__auto___11096;
var G__11099 = cljs.core.count.call(null,c__5632__auto___11096);
var G__11100 = 0;
seq__8871_11085 = G__11097;
chunk__8872_11086 = G__11098;
count__8873_11087 = G__11099;
i__8874_11088 = G__11100;
continue;
}
} else
{var arg__7135__auto___11101 = cljs.core.first.call(null,seq__8871_11095__$1);a__7134__auto__.push(arg__7135__auto___11101);
{
var G__11102 = cljs.core.next.call(null,seq__8871_11095__$1);
var G__11103 = null;
var G__11104 = 0;
var G__11105 = 0;
seq__8871_11085 = G__11102;
chunk__8872_11086 = G__11103;
count__8873_11087 = G__11104;
i__8874_11088 = G__11105;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.sub.apply(null,a__7134__auto__);
};
var sub = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return sub__delegate.call(this,args__7133__auto__);};
sub.cljs$lang$maxFixedArity = 0;
sub.cljs$lang$applyTo = (function (arglist__11106){
var args__7133__auto__ = cljs.core.seq(arglist__11106);
return sub__delegate(args__7133__auto__);
});
sub.cljs$core$IFn$_invoke$arity$variadic = sub__delegate;
return sub;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.summary = (function() { 
var summary__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8879_11107 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8880_11108 = null;var count__8881_11109 = 0;var i__8882_11110 = 0;while(true){
if((i__8882_11110 < count__8881_11109))
{var arg__7135__auto___11111 = cljs.core._nth.call(null,chunk__8880_11108,i__8882_11110);a__7134__auto__.push(arg__7135__auto___11111);
{
var G__11112 = seq__8879_11107;
var G__11113 = chunk__8880_11108;
var G__11114 = count__8881_11109;
var G__11115 = (i__8882_11110 + 1);
seq__8879_11107 = G__11112;
chunk__8880_11108 = G__11113;
count__8881_11109 = G__11114;
i__8882_11110 = G__11115;
continue;
}
} else
{var temp__4092__auto___11116 = cljs.core.seq.call(null,seq__8879_11107);if(temp__4092__auto___11116)
{var seq__8879_11117__$1 = temp__4092__auto___11116;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8879_11117__$1))
{var c__5632__auto___11118 = cljs.core.chunk_first.call(null,seq__8879_11117__$1);{
var G__11119 = cljs.core.chunk_rest.call(null,seq__8879_11117__$1);
var G__11120 = c__5632__auto___11118;
var G__11121 = cljs.core.count.call(null,c__5632__auto___11118);
var G__11122 = 0;
seq__8879_11107 = G__11119;
chunk__8880_11108 = G__11120;
count__8881_11109 = G__11121;
i__8882_11110 = G__11122;
continue;
}
} else
{var arg__7135__auto___11123 = cljs.core.first.call(null,seq__8879_11117__$1);a__7134__auto__.push(arg__7135__auto___11123);
{
var G__11124 = cljs.core.next.call(null,seq__8879_11117__$1);
var G__11125 = null;
var G__11126 = 0;
var G__11127 = 0;
seq__8879_11107 = G__11124;
chunk__8880_11108 = G__11125;
count__8881_11109 = G__11126;
i__8882_11110 = G__11127;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.summary.apply(null,a__7134__auto__);
};
var summary = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return summary__delegate.call(this,args__7133__auto__);};
summary.cljs$lang$maxFixedArity = 0;
summary.cljs$lang$applyTo = (function (arglist__11128){
var args__7133__auto__ = cljs.core.seq(arglist__11128);
return summary__delegate(args__7133__auto__);
});
summary.cljs$core$IFn$_invoke$arity$variadic = summary__delegate;
return summary;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.sup = (function() { 
var sup__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8887_11129 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8888_11130 = null;var count__8889_11131 = 0;var i__8890_11132 = 0;while(true){
if((i__8890_11132 < count__8889_11131))
{var arg__7135__auto___11133 = cljs.core._nth.call(null,chunk__8888_11130,i__8890_11132);a__7134__auto__.push(arg__7135__auto___11133);
{
var G__11134 = seq__8887_11129;
var G__11135 = chunk__8888_11130;
var G__11136 = count__8889_11131;
var G__11137 = (i__8890_11132 + 1);
seq__8887_11129 = G__11134;
chunk__8888_11130 = G__11135;
count__8889_11131 = G__11136;
i__8890_11132 = G__11137;
continue;
}
} else
{var temp__4092__auto___11138 = cljs.core.seq.call(null,seq__8887_11129);if(temp__4092__auto___11138)
{var seq__8887_11139__$1 = temp__4092__auto___11138;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8887_11139__$1))
{var c__5632__auto___11140 = cljs.core.chunk_first.call(null,seq__8887_11139__$1);{
var G__11141 = cljs.core.chunk_rest.call(null,seq__8887_11139__$1);
var G__11142 = c__5632__auto___11140;
var G__11143 = cljs.core.count.call(null,c__5632__auto___11140);
var G__11144 = 0;
seq__8887_11129 = G__11141;
chunk__8888_11130 = G__11142;
count__8889_11131 = G__11143;
i__8890_11132 = G__11144;
continue;
}
} else
{var arg__7135__auto___11145 = cljs.core.first.call(null,seq__8887_11139__$1);a__7134__auto__.push(arg__7135__auto___11145);
{
var G__11146 = cljs.core.next.call(null,seq__8887_11139__$1);
var G__11147 = null;
var G__11148 = 0;
var G__11149 = 0;
seq__8887_11129 = G__11146;
chunk__8888_11130 = G__11147;
count__8889_11131 = G__11148;
i__8890_11132 = G__11149;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.sup.apply(null,a__7134__auto__);
};
var sup = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return sup__delegate.call(this,args__7133__auto__);};
sup.cljs$lang$maxFixedArity = 0;
sup.cljs$lang$applyTo = (function (arglist__11150){
var args__7133__auto__ = cljs.core.seq(arglist__11150);
return sup__delegate(args__7133__auto__);
});
sup.cljs$core$IFn$_invoke$arity$variadic = sup__delegate;
return sup;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.table = (function() { 
var table__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8895_11151 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8896_11152 = null;var count__8897_11153 = 0;var i__8898_11154 = 0;while(true){
if((i__8898_11154 < count__8897_11153))
{var arg__7135__auto___11155 = cljs.core._nth.call(null,chunk__8896_11152,i__8898_11154);a__7134__auto__.push(arg__7135__auto___11155);
{
var G__11156 = seq__8895_11151;
var G__11157 = chunk__8896_11152;
var G__11158 = count__8897_11153;
var G__11159 = (i__8898_11154 + 1);
seq__8895_11151 = G__11156;
chunk__8896_11152 = G__11157;
count__8897_11153 = G__11158;
i__8898_11154 = G__11159;
continue;
}
} else
{var temp__4092__auto___11160 = cljs.core.seq.call(null,seq__8895_11151);if(temp__4092__auto___11160)
{var seq__8895_11161__$1 = temp__4092__auto___11160;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8895_11161__$1))
{var c__5632__auto___11162 = cljs.core.chunk_first.call(null,seq__8895_11161__$1);{
var G__11163 = cljs.core.chunk_rest.call(null,seq__8895_11161__$1);
var G__11164 = c__5632__auto___11162;
var G__11165 = cljs.core.count.call(null,c__5632__auto___11162);
var G__11166 = 0;
seq__8895_11151 = G__11163;
chunk__8896_11152 = G__11164;
count__8897_11153 = G__11165;
i__8898_11154 = G__11166;
continue;
}
} else
{var arg__7135__auto___11167 = cljs.core.first.call(null,seq__8895_11161__$1);a__7134__auto__.push(arg__7135__auto___11167);
{
var G__11168 = cljs.core.next.call(null,seq__8895_11161__$1);
var G__11169 = null;
var G__11170 = 0;
var G__11171 = 0;
seq__8895_11151 = G__11168;
chunk__8896_11152 = G__11169;
count__8897_11153 = G__11170;
i__8898_11154 = G__11171;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.table.apply(null,a__7134__auto__);
};
var table = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return table__delegate.call(this,args__7133__auto__);};
table.cljs$lang$maxFixedArity = 0;
table.cljs$lang$applyTo = (function (arglist__11172){
var args__7133__auto__ = cljs.core.seq(arglist__11172);
return table__delegate(args__7133__auto__);
});
table.cljs$core$IFn$_invoke$arity$variadic = table__delegate;
return table;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.tbody = (function() { 
var tbody__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8903_11173 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8904_11174 = null;var count__8905_11175 = 0;var i__8906_11176 = 0;while(true){
if((i__8906_11176 < count__8905_11175))
{var arg__7135__auto___11177 = cljs.core._nth.call(null,chunk__8904_11174,i__8906_11176);a__7134__auto__.push(arg__7135__auto___11177);
{
var G__11178 = seq__8903_11173;
var G__11179 = chunk__8904_11174;
var G__11180 = count__8905_11175;
var G__11181 = (i__8906_11176 + 1);
seq__8903_11173 = G__11178;
chunk__8904_11174 = G__11179;
count__8905_11175 = G__11180;
i__8906_11176 = G__11181;
continue;
}
} else
{var temp__4092__auto___11182 = cljs.core.seq.call(null,seq__8903_11173);if(temp__4092__auto___11182)
{var seq__8903_11183__$1 = temp__4092__auto___11182;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8903_11183__$1))
{var c__5632__auto___11184 = cljs.core.chunk_first.call(null,seq__8903_11183__$1);{
var G__11185 = cljs.core.chunk_rest.call(null,seq__8903_11183__$1);
var G__11186 = c__5632__auto___11184;
var G__11187 = cljs.core.count.call(null,c__5632__auto___11184);
var G__11188 = 0;
seq__8903_11173 = G__11185;
chunk__8904_11174 = G__11186;
count__8905_11175 = G__11187;
i__8906_11176 = G__11188;
continue;
}
} else
{var arg__7135__auto___11189 = cljs.core.first.call(null,seq__8903_11183__$1);a__7134__auto__.push(arg__7135__auto___11189);
{
var G__11190 = cljs.core.next.call(null,seq__8903_11183__$1);
var G__11191 = null;
var G__11192 = 0;
var G__11193 = 0;
seq__8903_11173 = G__11190;
chunk__8904_11174 = G__11191;
count__8905_11175 = G__11192;
i__8906_11176 = G__11193;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.tbody.apply(null,a__7134__auto__);
};
var tbody = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return tbody__delegate.call(this,args__7133__auto__);};
tbody.cljs$lang$maxFixedArity = 0;
tbody.cljs$lang$applyTo = (function (arglist__11194){
var args__7133__auto__ = cljs.core.seq(arglist__11194);
return tbody__delegate(args__7133__auto__);
});
tbody.cljs$core$IFn$_invoke$arity$variadic = tbody__delegate;
return tbody;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.td = (function() { 
var td__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8911_11195 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8912_11196 = null;var count__8913_11197 = 0;var i__8914_11198 = 0;while(true){
if((i__8914_11198 < count__8913_11197))
{var arg__7135__auto___11199 = cljs.core._nth.call(null,chunk__8912_11196,i__8914_11198);a__7134__auto__.push(arg__7135__auto___11199);
{
var G__11200 = seq__8911_11195;
var G__11201 = chunk__8912_11196;
var G__11202 = count__8913_11197;
var G__11203 = (i__8914_11198 + 1);
seq__8911_11195 = G__11200;
chunk__8912_11196 = G__11201;
count__8913_11197 = G__11202;
i__8914_11198 = G__11203;
continue;
}
} else
{var temp__4092__auto___11204 = cljs.core.seq.call(null,seq__8911_11195);if(temp__4092__auto___11204)
{var seq__8911_11205__$1 = temp__4092__auto___11204;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8911_11205__$1))
{var c__5632__auto___11206 = cljs.core.chunk_first.call(null,seq__8911_11205__$1);{
var G__11207 = cljs.core.chunk_rest.call(null,seq__8911_11205__$1);
var G__11208 = c__5632__auto___11206;
var G__11209 = cljs.core.count.call(null,c__5632__auto___11206);
var G__11210 = 0;
seq__8911_11195 = G__11207;
chunk__8912_11196 = G__11208;
count__8913_11197 = G__11209;
i__8914_11198 = G__11210;
continue;
}
} else
{var arg__7135__auto___11211 = cljs.core.first.call(null,seq__8911_11205__$1);a__7134__auto__.push(arg__7135__auto___11211);
{
var G__11212 = cljs.core.next.call(null,seq__8911_11205__$1);
var G__11213 = null;
var G__11214 = 0;
var G__11215 = 0;
seq__8911_11195 = G__11212;
chunk__8912_11196 = G__11213;
count__8913_11197 = G__11214;
i__8914_11198 = G__11215;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.td.apply(null,a__7134__auto__);
};
var td = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return td__delegate.call(this,args__7133__auto__);};
td.cljs$lang$maxFixedArity = 0;
td.cljs$lang$applyTo = (function (arglist__11216){
var args__7133__auto__ = cljs.core.seq(arglist__11216);
return td__delegate(args__7133__auto__);
});
td.cljs$core$IFn$_invoke$arity$variadic = td__delegate;
return td;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.textarea = (function() { 
var textarea__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8919_11217 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8920_11218 = null;var count__8921_11219 = 0;var i__8922_11220 = 0;while(true){
if((i__8922_11220 < count__8921_11219))
{var arg__7135__auto___11221 = cljs.core._nth.call(null,chunk__8920_11218,i__8922_11220);a__7134__auto__.push(arg__7135__auto___11221);
{
var G__11222 = seq__8919_11217;
var G__11223 = chunk__8920_11218;
var G__11224 = count__8921_11219;
var G__11225 = (i__8922_11220 + 1);
seq__8919_11217 = G__11222;
chunk__8920_11218 = G__11223;
count__8921_11219 = G__11224;
i__8922_11220 = G__11225;
continue;
}
} else
{var temp__4092__auto___11226 = cljs.core.seq.call(null,seq__8919_11217);if(temp__4092__auto___11226)
{var seq__8919_11227__$1 = temp__4092__auto___11226;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8919_11227__$1))
{var c__5632__auto___11228 = cljs.core.chunk_first.call(null,seq__8919_11227__$1);{
var G__11229 = cljs.core.chunk_rest.call(null,seq__8919_11227__$1);
var G__11230 = c__5632__auto___11228;
var G__11231 = cljs.core.count.call(null,c__5632__auto___11228);
var G__11232 = 0;
seq__8919_11217 = G__11229;
chunk__8920_11218 = G__11230;
count__8921_11219 = G__11231;
i__8922_11220 = G__11232;
continue;
}
} else
{var arg__7135__auto___11233 = cljs.core.first.call(null,seq__8919_11227__$1);a__7134__auto__.push(arg__7135__auto___11233);
{
var G__11234 = cljs.core.next.call(null,seq__8919_11227__$1);
var G__11235 = null;
var G__11236 = 0;
var G__11237 = 0;
seq__8919_11217 = G__11234;
chunk__8920_11218 = G__11235;
count__8921_11219 = G__11236;
i__8922_11220 = G__11237;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.textarea.apply(null,a__7134__auto__);
};
var textarea = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return textarea__delegate.call(this,args__7133__auto__);};
textarea.cljs$lang$maxFixedArity = 0;
textarea.cljs$lang$applyTo = (function (arglist__11238){
var args__7133__auto__ = cljs.core.seq(arglist__11238);
return textarea__delegate(args__7133__auto__);
});
textarea.cljs$core$IFn$_invoke$arity$variadic = textarea__delegate;
return textarea;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.tfoot = (function() { 
var tfoot__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8927_11239 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8928_11240 = null;var count__8929_11241 = 0;var i__8930_11242 = 0;while(true){
if((i__8930_11242 < count__8929_11241))
{var arg__7135__auto___11243 = cljs.core._nth.call(null,chunk__8928_11240,i__8930_11242);a__7134__auto__.push(arg__7135__auto___11243);
{
var G__11244 = seq__8927_11239;
var G__11245 = chunk__8928_11240;
var G__11246 = count__8929_11241;
var G__11247 = (i__8930_11242 + 1);
seq__8927_11239 = G__11244;
chunk__8928_11240 = G__11245;
count__8929_11241 = G__11246;
i__8930_11242 = G__11247;
continue;
}
} else
{var temp__4092__auto___11248 = cljs.core.seq.call(null,seq__8927_11239);if(temp__4092__auto___11248)
{var seq__8927_11249__$1 = temp__4092__auto___11248;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8927_11249__$1))
{var c__5632__auto___11250 = cljs.core.chunk_first.call(null,seq__8927_11249__$1);{
var G__11251 = cljs.core.chunk_rest.call(null,seq__8927_11249__$1);
var G__11252 = c__5632__auto___11250;
var G__11253 = cljs.core.count.call(null,c__5632__auto___11250);
var G__11254 = 0;
seq__8927_11239 = G__11251;
chunk__8928_11240 = G__11252;
count__8929_11241 = G__11253;
i__8930_11242 = G__11254;
continue;
}
} else
{var arg__7135__auto___11255 = cljs.core.first.call(null,seq__8927_11249__$1);a__7134__auto__.push(arg__7135__auto___11255);
{
var G__11256 = cljs.core.next.call(null,seq__8927_11249__$1);
var G__11257 = null;
var G__11258 = 0;
var G__11259 = 0;
seq__8927_11239 = G__11256;
chunk__8928_11240 = G__11257;
count__8929_11241 = G__11258;
i__8930_11242 = G__11259;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.tfoot.apply(null,a__7134__auto__);
};
var tfoot = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return tfoot__delegate.call(this,args__7133__auto__);};
tfoot.cljs$lang$maxFixedArity = 0;
tfoot.cljs$lang$applyTo = (function (arglist__11260){
var args__7133__auto__ = cljs.core.seq(arglist__11260);
return tfoot__delegate(args__7133__auto__);
});
tfoot.cljs$core$IFn$_invoke$arity$variadic = tfoot__delegate;
return tfoot;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.th = (function() { 
var th__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8935_11261 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8936_11262 = null;var count__8937_11263 = 0;var i__8938_11264 = 0;while(true){
if((i__8938_11264 < count__8937_11263))
{var arg__7135__auto___11265 = cljs.core._nth.call(null,chunk__8936_11262,i__8938_11264);a__7134__auto__.push(arg__7135__auto___11265);
{
var G__11266 = seq__8935_11261;
var G__11267 = chunk__8936_11262;
var G__11268 = count__8937_11263;
var G__11269 = (i__8938_11264 + 1);
seq__8935_11261 = G__11266;
chunk__8936_11262 = G__11267;
count__8937_11263 = G__11268;
i__8938_11264 = G__11269;
continue;
}
} else
{var temp__4092__auto___11270 = cljs.core.seq.call(null,seq__8935_11261);if(temp__4092__auto___11270)
{var seq__8935_11271__$1 = temp__4092__auto___11270;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8935_11271__$1))
{var c__5632__auto___11272 = cljs.core.chunk_first.call(null,seq__8935_11271__$1);{
var G__11273 = cljs.core.chunk_rest.call(null,seq__8935_11271__$1);
var G__11274 = c__5632__auto___11272;
var G__11275 = cljs.core.count.call(null,c__5632__auto___11272);
var G__11276 = 0;
seq__8935_11261 = G__11273;
chunk__8936_11262 = G__11274;
count__8937_11263 = G__11275;
i__8938_11264 = G__11276;
continue;
}
} else
{var arg__7135__auto___11277 = cljs.core.first.call(null,seq__8935_11271__$1);a__7134__auto__.push(arg__7135__auto___11277);
{
var G__11278 = cljs.core.next.call(null,seq__8935_11271__$1);
var G__11279 = null;
var G__11280 = 0;
var G__11281 = 0;
seq__8935_11261 = G__11278;
chunk__8936_11262 = G__11279;
count__8937_11263 = G__11280;
i__8938_11264 = G__11281;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.th.apply(null,a__7134__auto__);
};
var th = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return th__delegate.call(this,args__7133__auto__);};
th.cljs$lang$maxFixedArity = 0;
th.cljs$lang$applyTo = (function (arglist__11282){
var args__7133__auto__ = cljs.core.seq(arglist__11282);
return th__delegate(args__7133__auto__);
});
th.cljs$core$IFn$_invoke$arity$variadic = th__delegate;
return th;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.thead = (function() { 
var thead__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8943_11283 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8944_11284 = null;var count__8945_11285 = 0;var i__8946_11286 = 0;while(true){
if((i__8946_11286 < count__8945_11285))
{var arg__7135__auto___11287 = cljs.core._nth.call(null,chunk__8944_11284,i__8946_11286);a__7134__auto__.push(arg__7135__auto___11287);
{
var G__11288 = seq__8943_11283;
var G__11289 = chunk__8944_11284;
var G__11290 = count__8945_11285;
var G__11291 = (i__8946_11286 + 1);
seq__8943_11283 = G__11288;
chunk__8944_11284 = G__11289;
count__8945_11285 = G__11290;
i__8946_11286 = G__11291;
continue;
}
} else
{var temp__4092__auto___11292 = cljs.core.seq.call(null,seq__8943_11283);if(temp__4092__auto___11292)
{var seq__8943_11293__$1 = temp__4092__auto___11292;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8943_11293__$1))
{var c__5632__auto___11294 = cljs.core.chunk_first.call(null,seq__8943_11293__$1);{
var G__11295 = cljs.core.chunk_rest.call(null,seq__8943_11293__$1);
var G__11296 = c__5632__auto___11294;
var G__11297 = cljs.core.count.call(null,c__5632__auto___11294);
var G__11298 = 0;
seq__8943_11283 = G__11295;
chunk__8944_11284 = G__11296;
count__8945_11285 = G__11297;
i__8946_11286 = G__11298;
continue;
}
} else
{var arg__7135__auto___11299 = cljs.core.first.call(null,seq__8943_11293__$1);a__7134__auto__.push(arg__7135__auto___11299);
{
var G__11300 = cljs.core.next.call(null,seq__8943_11293__$1);
var G__11301 = null;
var G__11302 = 0;
var G__11303 = 0;
seq__8943_11283 = G__11300;
chunk__8944_11284 = G__11301;
count__8945_11285 = G__11302;
i__8946_11286 = G__11303;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.thead.apply(null,a__7134__auto__);
};
var thead = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return thead__delegate.call(this,args__7133__auto__);};
thead.cljs$lang$maxFixedArity = 0;
thead.cljs$lang$applyTo = (function (arglist__11304){
var args__7133__auto__ = cljs.core.seq(arglist__11304);
return thead__delegate(args__7133__auto__);
});
thead.cljs$core$IFn$_invoke$arity$variadic = thead__delegate;
return thead;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.time = (function() { 
var time__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8951_11305 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8952_11306 = null;var count__8953_11307 = 0;var i__8954_11308 = 0;while(true){
if((i__8954_11308 < count__8953_11307))
{var arg__7135__auto___11309 = cljs.core._nth.call(null,chunk__8952_11306,i__8954_11308);a__7134__auto__.push(arg__7135__auto___11309);
{
var G__11310 = seq__8951_11305;
var G__11311 = chunk__8952_11306;
var G__11312 = count__8953_11307;
var G__11313 = (i__8954_11308 + 1);
seq__8951_11305 = G__11310;
chunk__8952_11306 = G__11311;
count__8953_11307 = G__11312;
i__8954_11308 = G__11313;
continue;
}
} else
{var temp__4092__auto___11314 = cljs.core.seq.call(null,seq__8951_11305);if(temp__4092__auto___11314)
{var seq__8951_11315__$1 = temp__4092__auto___11314;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8951_11315__$1))
{var c__5632__auto___11316 = cljs.core.chunk_first.call(null,seq__8951_11315__$1);{
var G__11317 = cljs.core.chunk_rest.call(null,seq__8951_11315__$1);
var G__11318 = c__5632__auto___11316;
var G__11319 = cljs.core.count.call(null,c__5632__auto___11316);
var G__11320 = 0;
seq__8951_11305 = G__11317;
chunk__8952_11306 = G__11318;
count__8953_11307 = G__11319;
i__8954_11308 = G__11320;
continue;
}
} else
{var arg__7135__auto___11321 = cljs.core.first.call(null,seq__8951_11315__$1);a__7134__auto__.push(arg__7135__auto___11321);
{
var G__11322 = cljs.core.next.call(null,seq__8951_11315__$1);
var G__11323 = null;
var G__11324 = 0;
var G__11325 = 0;
seq__8951_11305 = G__11322;
chunk__8952_11306 = G__11323;
count__8953_11307 = G__11324;
i__8954_11308 = G__11325;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.time.apply(null,a__7134__auto__);
};
var time = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return time__delegate.call(this,args__7133__auto__);};
time.cljs$lang$maxFixedArity = 0;
time.cljs$lang$applyTo = (function (arglist__11326){
var args__7133__auto__ = cljs.core.seq(arglist__11326);
return time__delegate(args__7133__auto__);
});
time.cljs$core$IFn$_invoke$arity$variadic = time__delegate;
return time;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.title = (function() { 
var title__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8959_11327 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8960_11328 = null;var count__8961_11329 = 0;var i__8962_11330 = 0;while(true){
if((i__8962_11330 < count__8961_11329))
{var arg__7135__auto___11331 = cljs.core._nth.call(null,chunk__8960_11328,i__8962_11330);a__7134__auto__.push(arg__7135__auto___11331);
{
var G__11332 = seq__8959_11327;
var G__11333 = chunk__8960_11328;
var G__11334 = count__8961_11329;
var G__11335 = (i__8962_11330 + 1);
seq__8959_11327 = G__11332;
chunk__8960_11328 = G__11333;
count__8961_11329 = G__11334;
i__8962_11330 = G__11335;
continue;
}
} else
{var temp__4092__auto___11336 = cljs.core.seq.call(null,seq__8959_11327);if(temp__4092__auto___11336)
{var seq__8959_11337__$1 = temp__4092__auto___11336;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8959_11337__$1))
{var c__5632__auto___11338 = cljs.core.chunk_first.call(null,seq__8959_11337__$1);{
var G__11339 = cljs.core.chunk_rest.call(null,seq__8959_11337__$1);
var G__11340 = c__5632__auto___11338;
var G__11341 = cljs.core.count.call(null,c__5632__auto___11338);
var G__11342 = 0;
seq__8959_11327 = G__11339;
chunk__8960_11328 = G__11340;
count__8961_11329 = G__11341;
i__8962_11330 = G__11342;
continue;
}
} else
{var arg__7135__auto___11343 = cljs.core.first.call(null,seq__8959_11337__$1);a__7134__auto__.push(arg__7135__auto___11343);
{
var G__11344 = cljs.core.next.call(null,seq__8959_11337__$1);
var G__11345 = null;
var G__11346 = 0;
var G__11347 = 0;
seq__8959_11327 = G__11344;
chunk__8960_11328 = G__11345;
count__8961_11329 = G__11346;
i__8962_11330 = G__11347;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.title.apply(null,a__7134__auto__);
};
var title = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return title__delegate.call(this,args__7133__auto__);};
title.cljs$lang$maxFixedArity = 0;
title.cljs$lang$applyTo = (function (arglist__11348){
var args__7133__auto__ = cljs.core.seq(arglist__11348);
return title__delegate(args__7133__auto__);
});
title.cljs$core$IFn$_invoke$arity$variadic = title__delegate;
return title;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.tr = (function() { 
var tr__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8967_11349 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8968_11350 = null;var count__8969_11351 = 0;var i__8970_11352 = 0;while(true){
if((i__8970_11352 < count__8969_11351))
{var arg__7135__auto___11353 = cljs.core._nth.call(null,chunk__8968_11350,i__8970_11352);a__7134__auto__.push(arg__7135__auto___11353);
{
var G__11354 = seq__8967_11349;
var G__11355 = chunk__8968_11350;
var G__11356 = count__8969_11351;
var G__11357 = (i__8970_11352 + 1);
seq__8967_11349 = G__11354;
chunk__8968_11350 = G__11355;
count__8969_11351 = G__11356;
i__8970_11352 = G__11357;
continue;
}
} else
{var temp__4092__auto___11358 = cljs.core.seq.call(null,seq__8967_11349);if(temp__4092__auto___11358)
{var seq__8967_11359__$1 = temp__4092__auto___11358;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8967_11359__$1))
{var c__5632__auto___11360 = cljs.core.chunk_first.call(null,seq__8967_11359__$1);{
var G__11361 = cljs.core.chunk_rest.call(null,seq__8967_11359__$1);
var G__11362 = c__5632__auto___11360;
var G__11363 = cljs.core.count.call(null,c__5632__auto___11360);
var G__11364 = 0;
seq__8967_11349 = G__11361;
chunk__8968_11350 = G__11362;
count__8969_11351 = G__11363;
i__8970_11352 = G__11364;
continue;
}
} else
{var arg__7135__auto___11365 = cljs.core.first.call(null,seq__8967_11359__$1);a__7134__auto__.push(arg__7135__auto___11365);
{
var G__11366 = cljs.core.next.call(null,seq__8967_11359__$1);
var G__11367 = null;
var G__11368 = 0;
var G__11369 = 0;
seq__8967_11349 = G__11366;
chunk__8968_11350 = G__11367;
count__8969_11351 = G__11368;
i__8970_11352 = G__11369;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.tr.apply(null,a__7134__auto__);
};
var tr = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return tr__delegate.call(this,args__7133__auto__);};
tr.cljs$lang$maxFixedArity = 0;
tr.cljs$lang$applyTo = (function (arglist__11370){
var args__7133__auto__ = cljs.core.seq(arglist__11370);
return tr__delegate(args__7133__auto__);
});
tr.cljs$core$IFn$_invoke$arity$variadic = tr__delegate;
return tr;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.track = (function() { 
var track__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8975_11371 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8976_11372 = null;var count__8977_11373 = 0;var i__8978_11374 = 0;while(true){
if((i__8978_11374 < count__8977_11373))
{var arg__7135__auto___11375 = cljs.core._nth.call(null,chunk__8976_11372,i__8978_11374);a__7134__auto__.push(arg__7135__auto___11375);
{
var G__11376 = seq__8975_11371;
var G__11377 = chunk__8976_11372;
var G__11378 = count__8977_11373;
var G__11379 = (i__8978_11374 + 1);
seq__8975_11371 = G__11376;
chunk__8976_11372 = G__11377;
count__8977_11373 = G__11378;
i__8978_11374 = G__11379;
continue;
}
} else
{var temp__4092__auto___11380 = cljs.core.seq.call(null,seq__8975_11371);if(temp__4092__auto___11380)
{var seq__8975_11381__$1 = temp__4092__auto___11380;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8975_11381__$1))
{var c__5632__auto___11382 = cljs.core.chunk_first.call(null,seq__8975_11381__$1);{
var G__11383 = cljs.core.chunk_rest.call(null,seq__8975_11381__$1);
var G__11384 = c__5632__auto___11382;
var G__11385 = cljs.core.count.call(null,c__5632__auto___11382);
var G__11386 = 0;
seq__8975_11371 = G__11383;
chunk__8976_11372 = G__11384;
count__8977_11373 = G__11385;
i__8978_11374 = G__11386;
continue;
}
} else
{var arg__7135__auto___11387 = cljs.core.first.call(null,seq__8975_11381__$1);a__7134__auto__.push(arg__7135__auto___11387);
{
var G__11388 = cljs.core.next.call(null,seq__8975_11381__$1);
var G__11389 = null;
var G__11390 = 0;
var G__11391 = 0;
seq__8975_11371 = G__11388;
chunk__8976_11372 = G__11389;
count__8977_11373 = G__11390;
i__8978_11374 = G__11391;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.track.apply(null,a__7134__auto__);
};
var track = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return track__delegate.call(this,args__7133__auto__);};
track.cljs$lang$maxFixedArity = 0;
track.cljs$lang$applyTo = (function (arglist__11392){
var args__7133__auto__ = cljs.core.seq(arglist__11392);
return track__delegate(args__7133__auto__);
});
track.cljs$core$IFn$_invoke$arity$variadic = track__delegate;
return track;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.u = (function() { 
var u__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8983_11393 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8984_11394 = null;var count__8985_11395 = 0;var i__8986_11396 = 0;while(true){
if((i__8986_11396 < count__8985_11395))
{var arg__7135__auto___11397 = cljs.core._nth.call(null,chunk__8984_11394,i__8986_11396);a__7134__auto__.push(arg__7135__auto___11397);
{
var G__11398 = seq__8983_11393;
var G__11399 = chunk__8984_11394;
var G__11400 = count__8985_11395;
var G__11401 = (i__8986_11396 + 1);
seq__8983_11393 = G__11398;
chunk__8984_11394 = G__11399;
count__8985_11395 = G__11400;
i__8986_11396 = G__11401;
continue;
}
} else
{var temp__4092__auto___11402 = cljs.core.seq.call(null,seq__8983_11393);if(temp__4092__auto___11402)
{var seq__8983_11403__$1 = temp__4092__auto___11402;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8983_11403__$1))
{var c__5632__auto___11404 = cljs.core.chunk_first.call(null,seq__8983_11403__$1);{
var G__11405 = cljs.core.chunk_rest.call(null,seq__8983_11403__$1);
var G__11406 = c__5632__auto___11404;
var G__11407 = cljs.core.count.call(null,c__5632__auto___11404);
var G__11408 = 0;
seq__8983_11393 = G__11405;
chunk__8984_11394 = G__11406;
count__8985_11395 = G__11407;
i__8986_11396 = G__11408;
continue;
}
} else
{var arg__7135__auto___11409 = cljs.core.first.call(null,seq__8983_11403__$1);a__7134__auto__.push(arg__7135__auto___11409);
{
var G__11410 = cljs.core.next.call(null,seq__8983_11403__$1);
var G__11411 = null;
var G__11412 = 0;
var G__11413 = 0;
seq__8983_11393 = G__11410;
chunk__8984_11394 = G__11411;
count__8985_11395 = G__11412;
i__8986_11396 = G__11413;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.u.apply(null,a__7134__auto__);
};
var u = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return u__delegate.call(this,args__7133__auto__);};
u.cljs$lang$maxFixedArity = 0;
u.cljs$lang$applyTo = (function (arglist__11414){
var args__7133__auto__ = cljs.core.seq(arglist__11414);
return u__delegate(args__7133__auto__);
});
u.cljs$core$IFn$_invoke$arity$variadic = u__delegate;
return u;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.ul = (function() { 
var ul__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8991_11415 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8992_11416 = null;var count__8993_11417 = 0;var i__8994_11418 = 0;while(true){
if((i__8994_11418 < count__8993_11417))
{var arg__7135__auto___11419 = cljs.core._nth.call(null,chunk__8992_11416,i__8994_11418);a__7134__auto__.push(arg__7135__auto___11419);
{
var G__11420 = seq__8991_11415;
var G__11421 = chunk__8992_11416;
var G__11422 = count__8993_11417;
var G__11423 = (i__8994_11418 + 1);
seq__8991_11415 = G__11420;
chunk__8992_11416 = G__11421;
count__8993_11417 = G__11422;
i__8994_11418 = G__11423;
continue;
}
} else
{var temp__4092__auto___11424 = cljs.core.seq.call(null,seq__8991_11415);if(temp__4092__auto___11424)
{var seq__8991_11425__$1 = temp__4092__auto___11424;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8991_11425__$1))
{var c__5632__auto___11426 = cljs.core.chunk_first.call(null,seq__8991_11425__$1);{
var G__11427 = cljs.core.chunk_rest.call(null,seq__8991_11425__$1);
var G__11428 = c__5632__auto___11426;
var G__11429 = cljs.core.count.call(null,c__5632__auto___11426);
var G__11430 = 0;
seq__8991_11415 = G__11427;
chunk__8992_11416 = G__11428;
count__8993_11417 = G__11429;
i__8994_11418 = G__11430;
continue;
}
} else
{var arg__7135__auto___11431 = cljs.core.first.call(null,seq__8991_11425__$1);a__7134__auto__.push(arg__7135__auto___11431);
{
var G__11432 = cljs.core.next.call(null,seq__8991_11425__$1);
var G__11433 = null;
var G__11434 = 0;
var G__11435 = 0;
seq__8991_11415 = G__11432;
chunk__8992_11416 = G__11433;
count__8993_11417 = G__11434;
i__8994_11418 = G__11435;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.ul.apply(null,a__7134__auto__);
};
var ul = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ul__delegate.call(this,args__7133__auto__);};
ul.cljs$lang$maxFixedArity = 0;
ul.cljs$lang$applyTo = (function (arglist__11436){
var args__7133__auto__ = cljs.core.seq(arglist__11436);
return ul__delegate(args__7133__auto__);
});
ul.cljs$core$IFn$_invoke$arity$variadic = ul__delegate;
return ul;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.var$ = (function() { 
var var$__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8999_11437 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__9000_11438 = null;var count__9001_11439 = 0;var i__9002_11440 = 0;while(true){
if((i__9002_11440 < count__9001_11439))
{var arg__7135__auto___11441 = cljs.core._nth.call(null,chunk__9000_11438,i__9002_11440);a__7134__auto__.push(arg__7135__auto___11441);
{
var G__11442 = seq__8999_11437;
var G__11443 = chunk__9000_11438;
var G__11444 = count__9001_11439;
var G__11445 = (i__9002_11440 + 1);
seq__8999_11437 = G__11442;
chunk__9000_11438 = G__11443;
count__9001_11439 = G__11444;
i__9002_11440 = G__11445;
continue;
}
} else
{var temp__4092__auto___11446 = cljs.core.seq.call(null,seq__8999_11437);if(temp__4092__auto___11446)
{var seq__8999_11447__$1 = temp__4092__auto___11446;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8999_11447__$1))
{var c__5632__auto___11448 = cljs.core.chunk_first.call(null,seq__8999_11447__$1);{
var G__11449 = cljs.core.chunk_rest.call(null,seq__8999_11447__$1);
var G__11450 = c__5632__auto___11448;
var G__11451 = cljs.core.count.call(null,c__5632__auto___11448);
var G__11452 = 0;
seq__8999_11437 = G__11449;
chunk__9000_11438 = G__11450;
count__9001_11439 = G__11451;
i__9002_11440 = G__11452;
continue;
}
} else
{var arg__7135__auto___11453 = cljs.core.first.call(null,seq__8999_11447__$1);a__7134__auto__.push(arg__7135__auto___11453);
{
var G__11454 = cljs.core.next.call(null,seq__8999_11447__$1);
var G__11455 = null;
var G__11456 = 0;
var G__11457 = 0;
seq__8999_11437 = G__11454;
chunk__9000_11438 = G__11455;
count__9001_11439 = G__11456;
i__9002_11440 = G__11457;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.var$.apply(null,a__7134__auto__);
};
var var$ = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return var$__delegate.call(this,args__7133__auto__);};
var$.cljs$lang$maxFixedArity = 0;
var$.cljs$lang$applyTo = (function (arglist__11458){
var args__7133__auto__ = cljs.core.seq(arglist__11458);
return var$__delegate(args__7133__auto__);
});
var$.cljs$core$IFn$_invoke$arity$variadic = var$__delegate;
return var$;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.video = (function() { 
var video__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__9007_11459 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__9008_11460 = null;var count__9009_11461 = 0;var i__9010_11462 = 0;while(true){
if((i__9010_11462 < count__9009_11461))
{var arg__7135__auto___11463 = cljs.core._nth.call(null,chunk__9008_11460,i__9010_11462);a__7134__auto__.push(arg__7135__auto___11463);
{
var G__11464 = seq__9007_11459;
var G__11465 = chunk__9008_11460;
var G__11466 = count__9009_11461;
var G__11467 = (i__9010_11462 + 1);
seq__9007_11459 = G__11464;
chunk__9008_11460 = G__11465;
count__9009_11461 = G__11466;
i__9010_11462 = G__11467;
continue;
}
} else
{var temp__4092__auto___11468 = cljs.core.seq.call(null,seq__9007_11459);if(temp__4092__auto___11468)
{var seq__9007_11469__$1 = temp__4092__auto___11468;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9007_11469__$1))
{var c__5632__auto___11470 = cljs.core.chunk_first.call(null,seq__9007_11469__$1);{
var G__11471 = cljs.core.chunk_rest.call(null,seq__9007_11469__$1);
var G__11472 = c__5632__auto___11470;
var G__11473 = cljs.core.count.call(null,c__5632__auto___11470);
var G__11474 = 0;
seq__9007_11459 = G__11471;
chunk__9008_11460 = G__11472;
count__9009_11461 = G__11473;
i__9010_11462 = G__11474;
continue;
}
} else
{var arg__7135__auto___11475 = cljs.core.first.call(null,seq__9007_11469__$1);a__7134__auto__.push(arg__7135__auto___11475);
{
var G__11476 = cljs.core.next.call(null,seq__9007_11469__$1);
var G__11477 = null;
var G__11478 = 0;
var G__11479 = 0;
seq__9007_11459 = G__11476;
chunk__9008_11460 = G__11477;
count__9009_11461 = G__11478;
i__9010_11462 = G__11479;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.video.apply(null,a__7134__auto__);
};
var video = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return video__delegate.call(this,args__7133__auto__);};
video.cljs$lang$maxFixedArity = 0;
video.cljs$lang$applyTo = (function (arglist__11480){
var args__7133__auto__ = cljs.core.seq(arglist__11480);
return video__delegate(args__7133__auto__);
});
video.cljs$core$IFn$_invoke$arity$variadic = video__delegate;
return video;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.wbr = (function() { 
var wbr__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__9015_11481 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__9016_11482 = null;var count__9017_11483 = 0;var i__9018_11484 = 0;while(true){
if((i__9018_11484 < count__9017_11483))
{var arg__7135__auto___11485 = cljs.core._nth.call(null,chunk__9016_11482,i__9018_11484);a__7134__auto__.push(arg__7135__auto___11485);
{
var G__11486 = seq__9015_11481;
var G__11487 = chunk__9016_11482;
var G__11488 = count__9017_11483;
var G__11489 = (i__9018_11484 + 1);
seq__9015_11481 = G__11486;
chunk__9016_11482 = G__11487;
count__9017_11483 = G__11488;
i__9018_11484 = G__11489;
continue;
}
} else
{var temp__4092__auto___11490 = cljs.core.seq.call(null,seq__9015_11481);if(temp__4092__auto___11490)
{var seq__9015_11491__$1 = temp__4092__auto___11490;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9015_11491__$1))
{var c__5632__auto___11492 = cljs.core.chunk_first.call(null,seq__9015_11491__$1);{
var G__11493 = cljs.core.chunk_rest.call(null,seq__9015_11491__$1);
var G__11494 = c__5632__auto___11492;
var G__11495 = cljs.core.count.call(null,c__5632__auto___11492);
var G__11496 = 0;
seq__9015_11481 = G__11493;
chunk__9016_11482 = G__11494;
count__9017_11483 = G__11495;
i__9018_11484 = G__11496;
continue;
}
} else
{var arg__7135__auto___11497 = cljs.core.first.call(null,seq__9015_11491__$1);a__7134__auto__.push(arg__7135__auto___11497);
{
var G__11498 = cljs.core.next.call(null,seq__9015_11491__$1);
var G__11499 = null;
var G__11500 = 0;
var G__11501 = 0;
seq__9015_11481 = G__11498;
chunk__9016_11482 = G__11499;
count__9017_11483 = G__11500;
i__9018_11484 = G__11501;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.wbr.apply(null,a__7134__auto__);
};
var wbr = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return wbr__delegate.call(this,args__7133__auto__);};
wbr.cljs$lang$maxFixedArity = 0;
wbr.cljs$lang$applyTo = (function (arglist__11502){
var args__7133__auto__ = cljs.core.seq(arglist__11502);
return wbr__delegate(args__7133__auto__);
});
wbr.cljs$core$IFn$_invoke$arity$variadic = wbr__delegate;
return wbr;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.circle = (function() { 
var circle__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__9023_11503 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__9024_11504 = null;var count__9025_11505 = 0;var i__9026_11506 = 0;while(true){
if((i__9026_11506 < count__9025_11505))
{var arg__7135__auto___11507 = cljs.core._nth.call(null,chunk__9024_11504,i__9026_11506);a__7134__auto__.push(arg__7135__auto___11507);
{
var G__11508 = seq__9023_11503;
var G__11509 = chunk__9024_11504;
var G__11510 = count__9025_11505;
var G__11511 = (i__9026_11506 + 1);
seq__9023_11503 = G__11508;
chunk__9024_11504 = G__11509;
count__9025_11505 = G__11510;
i__9026_11506 = G__11511;
continue;
}
} else
{var temp__4092__auto___11512 = cljs.core.seq.call(null,seq__9023_11503);if(temp__4092__auto___11512)
{var seq__9023_11513__$1 = temp__4092__auto___11512;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9023_11513__$1))
{var c__5632__auto___11514 = cljs.core.chunk_first.call(null,seq__9023_11513__$1);{
var G__11515 = cljs.core.chunk_rest.call(null,seq__9023_11513__$1);
var G__11516 = c__5632__auto___11514;
var G__11517 = cljs.core.count.call(null,c__5632__auto___11514);
var G__11518 = 0;
seq__9023_11503 = G__11515;
chunk__9024_11504 = G__11516;
count__9025_11505 = G__11517;
i__9026_11506 = G__11518;
continue;
}
} else
{var arg__7135__auto___11519 = cljs.core.first.call(null,seq__9023_11513__$1);a__7134__auto__.push(arg__7135__auto___11519);
{
var G__11520 = cljs.core.next.call(null,seq__9023_11513__$1);
var G__11521 = null;
var G__11522 = 0;
var G__11523 = 0;
seq__9023_11503 = G__11520;
chunk__9024_11504 = G__11521;
count__9025_11505 = G__11522;
i__9026_11506 = G__11523;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.circle.apply(null,a__7134__auto__);
};
var circle = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return circle__delegate.call(this,args__7133__auto__);};
circle.cljs$lang$maxFixedArity = 0;
circle.cljs$lang$applyTo = (function (arglist__11524){
var args__7133__auto__ = cljs.core.seq(arglist__11524);
return circle__delegate(args__7133__auto__);
});
circle.cljs$core$IFn$_invoke$arity$variadic = circle__delegate;
return circle;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.g = (function() { 
var g__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__9031_11525 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__9032_11526 = null;var count__9033_11527 = 0;var i__9034_11528 = 0;while(true){
if((i__9034_11528 < count__9033_11527))
{var arg__7135__auto___11529 = cljs.core._nth.call(null,chunk__9032_11526,i__9034_11528);a__7134__auto__.push(arg__7135__auto___11529);
{
var G__11530 = seq__9031_11525;
var G__11531 = chunk__9032_11526;
var G__11532 = count__9033_11527;
var G__11533 = (i__9034_11528 + 1);
seq__9031_11525 = G__11530;
chunk__9032_11526 = G__11531;
count__9033_11527 = G__11532;
i__9034_11528 = G__11533;
continue;
}
} else
{var temp__4092__auto___11534 = cljs.core.seq.call(null,seq__9031_11525);if(temp__4092__auto___11534)
{var seq__9031_11535__$1 = temp__4092__auto___11534;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9031_11535__$1))
{var c__5632__auto___11536 = cljs.core.chunk_first.call(null,seq__9031_11535__$1);{
var G__11537 = cljs.core.chunk_rest.call(null,seq__9031_11535__$1);
var G__11538 = c__5632__auto___11536;
var G__11539 = cljs.core.count.call(null,c__5632__auto___11536);
var G__11540 = 0;
seq__9031_11525 = G__11537;
chunk__9032_11526 = G__11538;
count__9033_11527 = G__11539;
i__9034_11528 = G__11540;
continue;
}
} else
{var arg__7135__auto___11541 = cljs.core.first.call(null,seq__9031_11535__$1);a__7134__auto__.push(arg__7135__auto___11541);
{
var G__11542 = cljs.core.next.call(null,seq__9031_11535__$1);
var G__11543 = null;
var G__11544 = 0;
var G__11545 = 0;
seq__9031_11525 = G__11542;
chunk__9032_11526 = G__11543;
count__9033_11527 = G__11544;
i__9034_11528 = G__11545;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.g.apply(null,a__7134__auto__);
};
var g = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return g__delegate.call(this,args__7133__auto__);};
g.cljs$lang$maxFixedArity = 0;
g.cljs$lang$applyTo = (function (arglist__11546){
var args__7133__auto__ = cljs.core.seq(arglist__11546);
return g__delegate(args__7133__auto__);
});
g.cljs$core$IFn$_invoke$arity$variadic = g__delegate;
return g;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.line = (function() { 
var line__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__9039_11547 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__9040_11548 = null;var count__9041_11549 = 0;var i__9042_11550 = 0;while(true){
if((i__9042_11550 < count__9041_11549))
{var arg__7135__auto___11551 = cljs.core._nth.call(null,chunk__9040_11548,i__9042_11550);a__7134__auto__.push(arg__7135__auto___11551);
{
var G__11552 = seq__9039_11547;
var G__11553 = chunk__9040_11548;
var G__11554 = count__9041_11549;
var G__11555 = (i__9042_11550 + 1);
seq__9039_11547 = G__11552;
chunk__9040_11548 = G__11553;
count__9041_11549 = G__11554;
i__9042_11550 = G__11555;
continue;
}
} else
{var temp__4092__auto___11556 = cljs.core.seq.call(null,seq__9039_11547);if(temp__4092__auto___11556)
{var seq__9039_11557__$1 = temp__4092__auto___11556;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9039_11557__$1))
{var c__5632__auto___11558 = cljs.core.chunk_first.call(null,seq__9039_11557__$1);{
var G__11559 = cljs.core.chunk_rest.call(null,seq__9039_11557__$1);
var G__11560 = c__5632__auto___11558;
var G__11561 = cljs.core.count.call(null,c__5632__auto___11558);
var G__11562 = 0;
seq__9039_11547 = G__11559;
chunk__9040_11548 = G__11560;
count__9041_11549 = G__11561;
i__9042_11550 = G__11562;
continue;
}
} else
{var arg__7135__auto___11563 = cljs.core.first.call(null,seq__9039_11557__$1);a__7134__auto__.push(arg__7135__auto___11563);
{
var G__11564 = cljs.core.next.call(null,seq__9039_11557__$1);
var G__11565 = null;
var G__11566 = 0;
var G__11567 = 0;
seq__9039_11547 = G__11564;
chunk__9040_11548 = G__11565;
count__9041_11549 = G__11566;
i__9042_11550 = G__11567;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.line.apply(null,a__7134__auto__);
};
var line = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return line__delegate.call(this,args__7133__auto__);};
line.cljs$lang$maxFixedArity = 0;
line.cljs$lang$applyTo = (function (arglist__11568){
var args__7133__auto__ = cljs.core.seq(arglist__11568);
return line__delegate(args__7133__auto__);
});
line.cljs$core$IFn$_invoke$arity$variadic = line__delegate;
return line;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.path = (function() { 
var path__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__9047_11569 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__9048_11570 = null;var count__9049_11571 = 0;var i__9050_11572 = 0;while(true){
if((i__9050_11572 < count__9049_11571))
{var arg__7135__auto___11573 = cljs.core._nth.call(null,chunk__9048_11570,i__9050_11572);a__7134__auto__.push(arg__7135__auto___11573);
{
var G__11574 = seq__9047_11569;
var G__11575 = chunk__9048_11570;
var G__11576 = count__9049_11571;
var G__11577 = (i__9050_11572 + 1);
seq__9047_11569 = G__11574;
chunk__9048_11570 = G__11575;
count__9049_11571 = G__11576;
i__9050_11572 = G__11577;
continue;
}
} else
{var temp__4092__auto___11578 = cljs.core.seq.call(null,seq__9047_11569);if(temp__4092__auto___11578)
{var seq__9047_11579__$1 = temp__4092__auto___11578;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9047_11579__$1))
{var c__5632__auto___11580 = cljs.core.chunk_first.call(null,seq__9047_11579__$1);{
var G__11581 = cljs.core.chunk_rest.call(null,seq__9047_11579__$1);
var G__11582 = c__5632__auto___11580;
var G__11583 = cljs.core.count.call(null,c__5632__auto___11580);
var G__11584 = 0;
seq__9047_11569 = G__11581;
chunk__9048_11570 = G__11582;
count__9049_11571 = G__11583;
i__9050_11572 = G__11584;
continue;
}
} else
{var arg__7135__auto___11585 = cljs.core.first.call(null,seq__9047_11579__$1);a__7134__auto__.push(arg__7135__auto___11585);
{
var G__11586 = cljs.core.next.call(null,seq__9047_11579__$1);
var G__11587 = null;
var G__11588 = 0;
var G__11589 = 0;
seq__9047_11569 = G__11586;
chunk__9048_11570 = G__11587;
count__9049_11571 = G__11588;
i__9050_11572 = G__11589;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.path.apply(null,a__7134__auto__);
};
var path = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return path__delegate.call(this,args__7133__auto__);};
path.cljs$lang$maxFixedArity = 0;
path.cljs$lang$applyTo = (function (arglist__11590){
var args__7133__auto__ = cljs.core.seq(arglist__11590);
return path__delegate(args__7133__auto__);
});
path.cljs$core$IFn$_invoke$arity$variadic = path__delegate;
return path;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.polygon = (function() { 
var polygon__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__9055_11591 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__9056_11592 = null;var count__9057_11593 = 0;var i__9058_11594 = 0;while(true){
if((i__9058_11594 < count__9057_11593))
{var arg__7135__auto___11595 = cljs.core._nth.call(null,chunk__9056_11592,i__9058_11594);a__7134__auto__.push(arg__7135__auto___11595);
{
var G__11596 = seq__9055_11591;
var G__11597 = chunk__9056_11592;
var G__11598 = count__9057_11593;
var G__11599 = (i__9058_11594 + 1);
seq__9055_11591 = G__11596;
chunk__9056_11592 = G__11597;
count__9057_11593 = G__11598;
i__9058_11594 = G__11599;
continue;
}
} else
{var temp__4092__auto___11600 = cljs.core.seq.call(null,seq__9055_11591);if(temp__4092__auto___11600)
{var seq__9055_11601__$1 = temp__4092__auto___11600;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9055_11601__$1))
{var c__5632__auto___11602 = cljs.core.chunk_first.call(null,seq__9055_11601__$1);{
var G__11603 = cljs.core.chunk_rest.call(null,seq__9055_11601__$1);
var G__11604 = c__5632__auto___11602;
var G__11605 = cljs.core.count.call(null,c__5632__auto___11602);
var G__11606 = 0;
seq__9055_11591 = G__11603;
chunk__9056_11592 = G__11604;
count__9057_11593 = G__11605;
i__9058_11594 = G__11606;
continue;
}
} else
{var arg__7135__auto___11607 = cljs.core.first.call(null,seq__9055_11601__$1);a__7134__auto__.push(arg__7135__auto___11607);
{
var G__11608 = cljs.core.next.call(null,seq__9055_11601__$1);
var G__11609 = null;
var G__11610 = 0;
var G__11611 = 0;
seq__9055_11591 = G__11608;
chunk__9056_11592 = G__11609;
count__9057_11593 = G__11610;
i__9058_11594 = G__11611;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.polygon.apply(null,a__7134__auto__);
};
var polygon = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return polygon__delegate.call(this,args__7133__auto__);};
polygon.cljs$lang$maxFixedArity = 0;
polygon.cljs$lang$applyTo = (function (arglist__11612){
var args__7133__auto__ = cljs.core.seq(arglist__11612);
return polygon__delegate(args__7133__auto__);
});
polygon.cljs$core$IFn$_invoke$arity$variadic = polygon__delegate;
return polygon;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.polyline = (function() { 
var polyline__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__9063_11613 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__9064_11614 = null;var count__9065_11615 = 0;var i__9066_11616 = 0;while(true){
if((i__9066_11616 < count__9065_11615))
{var arg__7135__auto___11617 = cljs.core._nth.call(null,chunk__9064_11614,i__9066_11616);a__7134__auto__.push(arg__7135__auto___11617);
{
var G__11618 = seq__9063_11613;
var G__11619 = chunk__9064_11614;
var G__11620 = count__9065_11615;
var G__11621 = (i__9066_11616 + 1);
seq__9063_11613 = G__11618;
chunk__9064_11614 = G__11619;
count__9065_11615 = G__11620;
i__9066_11616 = G__11621;
continue;
}
} else
{var temp__4092__auto___11622 = cljs.core.seq.call(null,seq__9063_11613);if(temp__4092__auto___11622)
{var seq__9063_11623__$1 = temp__4092__auto___11622;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9063_11623__$1))
{var c__5632__auto___11624 = cljs.core.chunk_first.call(null,seq__9063_11623__$1);{
var G__11625 = cljs.core.chunk_rest.call(null,seq__9063_11623__$1);
var G__11626 = c__5632__auto___11624;
var G__11627 = cljs.core.count.call(null,c__5632__auto___11624);
var G__11628 = 0;
seq__9063_11613 = G__11625;
chunk__9064_11614 = G__11626;
count__9065_11615 = G__11627;
i__9066_11616 = G__11628;
continue;
}
} else
{var arg__7135__auto___11629 = cljs.core.first.call(null,seq__9063_11623__$1);a__7134__auto__.push(arg__7135__auto___11629);
{
var G__11630 = cljs.core.next.call(null,seq__9063_11623__$1);
var G__11631 = null;
var G__11632 = 0;
var G__11633 = 0;
seq__9063_11613 = G__11630;
chunk__9064_11614 = G__11631;
count__9065_11615 = G__11632;
i__9066_11616 = G__11633;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.polyline.apply(null,a__7134__auto__);
};
var polyline = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return polyline__delegate.call(this,args__7133__auto__);};
polyline.cljs$lang$maxFixedArity = 0;
polyline.cljs$lang$applyTo = (function (arglist__11634){
var args__7133__auto__ = cljs.core.seq(arglist__11634);
return polyline__delegate(args__7133__auto__);
});
polyline.cljs$core$IFn$_invoke$arity$variadic = polyline__delegate;
return polyline;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.rect = (function() { 
var rect__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__9071_11635 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__9072_11636 = null;var count__9073_11637 = 0;var i__9074_11638 = 0;while(true){
if((i__9074_11638 < count__9073_11637))
{var arg__7135__auto___11639 = cljs.core._nth.call(null,chunk__9072_11636,i__9074_11638);a__7134__auto__.push(arg__7135__auto___11639);
{
var G__11640 = seq__9071_11635;
var G__11641 = chunk__9072_11636;
var G__11642 = count__9073_11637;
var G__11643 = (i__9074_11638 + 1);
seq__9071_11635 = G__11640;
chunk__9072_11636 = G__11641;
count__9073_11637 = G__11642;
i__9074_11638 = G__11643;
continue;
}
} else
{var temp__4092__auto___11644 = cljs.core.seq.call(null,seq__9071_11635);if(temp__4092__auto___11644)
{var seq__9071_11645__$1 = temp__4092__auto___11644;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9071_11645__$1))
{var c__5632__auto___11646 = cljs.core.chunk_first.call(null,seq__9071_11645__$1);{
var G__11647 = cljs.core.chunk_rest.call(null,seq__9071_11645__$1);
var G__11648 = c__5632__auto___11646;
var G__11649 = cljs.core.count.call(null,c__5632__auto___11646);
var G__11650 = 0;
seq__9071_11635 = G__11647;
chunk__9072_11636 = G__11648;
count__9073_11637 = G__11649;
i__9074_11638 = G__11650;
continue;
}
} else
{var arg__7135__auto___11651 = cljs.core.first.call(null,seq__9071_11645__$1);a__7134__auto__.push(arg__7135__auto___11651);
{
var G__11652 = cljs.core.next.call(null,seq__9071_11645__$1);
var G__11653 = null;
var G__11654 = 0;
var G__11655 = 0;
seq__9071_11635 = G__11652;
chunk__9072_11636 = G__11653;
count__9073_11637 = G__11654;
i__9074_11638 = G__11655;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.rect.apply(null,a__7134__auto__);
};
var rect = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return rect__delegate.call(this,args__7133__auto__);};
rect.cljs$lang$maxFixedArity = 0;
rect.cljs$lang$applyTo = (function (arglist__11656){
var args__7133__auto__ = cljs.core.seq(arglist__11656);
return rect__delegate(args__7133__auto__);
});
rect.cljs$core$IFn$_invoke$arity$variadic = rect__delegate;
return rect;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.svg = (function() { 
var svg__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__9079_11657 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__9080_11658 = null;var count__9081_11659 = 0;var i__9082_11660 = 0;while(true){
if((i__9082_11660 < count__9081_11659))
{var arg__7135__auto___11661 = cljs.core._nth.call(null,chunk__9080_11658,i__9082_11660);a__7134__auto__.push(arg__7135__auto___11661);
{
var G__11662 = seq__9079_11657;
var G__11663 = chunk__9080_11658;
var G__11664 = count__9081_11659;
var G__11665 = (i__9082_11660 + 1);
seq__9079_11657 = G__11662;
chunk__9080_11658 = G__11663;
count__9081_11659 = G__11664;
i__9082_11660 = G__11665;
continue;
}
} else
{var temp__4092__auto___11666 = cljs.core.seq.call(null,seq__9079_11657);if(temp__4092__auto___11666)
{var seq__9079_11667__$1 = temp__4092__auto___11666;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9079_11667__$1))
{var c__5632__auto___11668 = cljs.core.chunk_first.call(null,seq__9079_11667__$1);{
var G__11669 = cljs.core.chunk_rest.call(null,seq__9079_11667__$1);
var G__11670 = c__5632__auto___11668;
var G__11671 = cljs.core.count.call(null,c__5632__auto___11668);
var G__11672 = 0;
seq__9079_11657 = G__11669;
chunk__9080_11658 = G__11670;
count__9081_11659 = G__11671;
i__9082_11660 = G__11672;
continue;
}
} else
{var arg__7135__auto___11673 = cljs.core.first.call(null,seq__9079_11667__$1);a__7134__auto__.push(arg__7135__auto___11673);
{
var G__11674 = cljs.core.next.call(null,seq__9079_11667__$1);
var G__11675 = null;
var G__11676 = 0;
var G__11677 = 0;
seq__9079_11657 = G__11674;
chunk__9080_11658 = G__11675;
count__9081_11659 = G__11676;
i__9082_11660 = G__11677;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.svg.apply(null,a__7134__auto__);
};
var svg = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return svg__delegate.call(this,args__7133__auto__);};
svg.cljs$lang$maxFixedArity = 0;
svg.cljs$lang$applyTo = (function (arglist__11678){
var args__7133__auto__ = cljs.core.seq(arglist__11678);
return svg__delegate(args__7133__auto__);
});
svg.cljs$core$IFn$_invoke$arity$variadic = svg__delegate;
return svg;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.text = (function() { 
var text__delegate = function (args__7133__auto__){var a__7134__auto__ = [];a__7134__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7133__auto__)));
var seq__8391_11679 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7133__auto__));var chunk__8392_11680 = null;var count__8393_11681 = 0;var i__8394_11682 = 0;while(true){
if((i__8394_11682 < count__8393_11681))
{var arg__7135__auto___11683 = cljs.core._nth.call(null,chunk__8392_11680,i__8394_11682);a__7134__auto__.push(arg__7135__auto___11683);
{
var G__11684 = seq__8391_11679;
var G__11685 = chunk__8392_11680;
var G__11686 = count__8393_11681;
var G__11687 = (i__8394_11682 + 1);
seq__8391_11679 = G__11684;
chunk__8392_11680 = G__11685;
count__8393_11681 = G__11686;
i__8394_11682 = G__11687;
continue;
}
} else
{var temp__4092__auto___11688 = cljs.core.seq.call(null,seq__8391_11679);if(temp__4092__auto___11688)
{var seq__8391_11689__$1 = temp__4092__auto___11688;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8391_11689__$1))
{var c__5632__auto___11690 = cljs.core.chunk_first.call(null,seq__8391_11689__$1);{
var G__11691 = cljs.core.chunk_rest.call(null,seq__8391_11689__$1);
var G__11692 = c__5632__auto___11690;
var G__11693 = cljs.core.count.call(null,c__5632__auto___11690);
var G__11694 = 0;
seq__8391_11679 = G__11691;
chunk__8392_11680 = G__11692;
count__8393_11681 = G__11693;
i__8394_11682 = G__11694;
continue;
}
} else
{var arg__7135__auto___11695 = cljs.core.first.call(null,seq__8391_11689__$1);a__7134__auto__.push(arg__7135__auto___11695);
{
var G__11696 = cljs.core.next.call(null,seq__8391_11689__$1);
var G__11697 = null;
var G__11698 = 0;
var G__11699 = 0;
seq__8391_11679 = G__11696;
chunk__8392_11680 = G__11697;
count__8393_11681 = G__11698;
i__8394_11682 = G__11699;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.text.apply(null,a__7134__auto__);
};
var text = function (var_args){
var args__7133__auto__ = null;if (arguments.length > 0) {
  args__7133__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return text__delegate.call(this,args__7133__auto__);};
text.cljs$lang$maxFixedArity = 0;
text.cljs$lang$applyTo = (function (arglist__11700){
var args__7133__auto__ = cljs.core.seq(arglist__11700);
return text__delegate(args__7133__auto__);
});
text.cljs$core$IFn$_invoke$arity$variadic = text__delegate;
return text;
})()
;
quiescent.dom.defined_tags = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"colgroup","colgroup",4672673905),new cljs.core.Keyword(null,"path","path",1017337751),new cljs.core.Keyword(null,"menuitem","menuitem",4705729636),new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.Keyword(null,"tbody","tbody",1124062088),new cljs.core.Keyword(null,"html","html",1017117469),new cljs.core.Keyword(null,"dfn","dfn",1014003614),new cljs.core.Keyword(null,"sub","sub",1014018482),new cljs.core.Keyword(null,"text","text",1017460895),new cljs.core.Keyword(null,"strong","strong",4416891401),new cljs.core.Keyword(null,"data","data",1016980252),new cljs.core.Keyword(null,"progress","progress",4307793311),new cljs.core.Keyword(null,"polyline","polyline",1575843122),new cljs.core.Keyword(null,"ul","ul",1013907977),new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.Keyword(null,"em","em",1013907482),new cljs.core.Keyword(null,"rt","rt",1013907892),new cljs.core.Keyword(null,"details","details",2571625908),new cljs.core.Keyword(null,"fieldset","fieldset",4379882650),new cljs.core.Keyword(null,"keygen","keygen",4174205955),new cljs.core.Keyword(null,"map","map",1014012110),new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.Keyword(null,"video","video",1126107117),new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.Keyword(null,"dt","dt",1013907458),new cljs.core.Keyword(null,"ol","ol",1013907791),new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.Keyword(null,"menu","menu",1017252049),new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.Keyword(null,"del","del",1014003581),new cljs.core.Keyword(null,"hr","hr",1013907580),new cljs.core.Keyword(null,"header","header",4087600639),new cljs.core.Keyword(null,"param","param",1120340991),new cljs.core.Keyword(null,"head","head",1017102674),new cljs.core.Keyword(null,"area","area",1016906751),new cljs.core.Keyword(null,"legend","legend",4202297215),new cljs.core.Keyword(null,"meter","meter",1117691643),new cljs.core.Keyword(null,"dl","dl",1013907450),new cljs.core.Keyword(null,"figcaption","figcaption",1313617108),new cljs.core.Keyword(null,"tfoot","tfoot",1124181588),new cljs.core.Keyword(null,"blockquote","blockquote",2317106561),new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"abbr","abbr",1016891299),new cljs.core.Keyword(null,"caption","caption",1566477656),new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.Keyword(null,"bdi","bdi",1014001625),new cljs.core.Keyword(null,"g","g",1013904345),new cljs.core.Keyword(null,"ruby","ruby",1017416012),new cljs.core.Keyword(null,"rp","rp",1013907888),new cljs.core.Keyword(null,"figure","figure",4034231894),new cljs.core.Keyword(null,"svg","svg",1014018518),new cljs.core.Keyword(null,"rect","rect",1017400662),new cljs.core.Keyword(null,"embed","embed",1110524491),new cljs.core.Keyword(null,"button","button",3931183780),new cljs.core.Keyword(null,"canvas","canvas",3941165258),new cljs.core.Keyword(null,"section","section",2984145495),new cljs.core.Keyword(null,"object","object",4285503153),new cljs.core.Keyword(null,"title","title",1124275658),new cljs.core.Keyword(null,"output","output",4303359091),new cljs.core.Keyword(null,"audio","audio",1107070792),new cljs.core.Keyword(null,"col","col",1014002930),new cljs.core.Keyword(null,"dd","dd",1013907442),new cljs.core.Keyword(null,"bdo","bdo",1014001631),new cljs.core.Keyword(null,"cite","cite",1016958153),new cljs.core.Keyword(null,"code","code",1016963423),new cljs.core.Keyword(null,"kbd","kbd",1014010207),new cljs.core.Keyword(null,"big","big",1014001778),new cljs.core.Keyword(null,"thead","thead",1124231110),new cljs.core.Keyword(null,"i","i",1013904347),new cljs.core.Keyword(null,"ins","ins",1014008672),new cljs.core.Keyword(null,"base","base",1016920643),new cljs.core.Keyword(null,"circle","circle",3948654658),new cljs.core.Keyword(null,"br","br",1013907394),new cljs.core.Keyword(null,"polygon","polygon",616384684),new cljs.core.Keyword(null,"wbr","wbr",1014021753),new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.Keyword(null,"small","small",1123453049),new cljs.core.Keyword(null,"main","main",1017248043),new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.Keyword(null,"aside","aside",1107015850),new cljs.core.Keyword(null,"article","article",4576493672),new cljs.core.Keyword(null,"noscript","noscript",2565455166),new cljs.core.Keyword(null,"h4","h4",1013907518),new cljs.core.Keyword(null,"h3","h3",1013907517),new cljs.core.Keyword(null,"script","script",4401185853),new cljs.core.Keyword(null,"track","track",1124525245),new cljs.core.Keyword(null,"time","time",1017464383),new cljs.core.Keyword(null,"h2","h2",1013907516),new cljs.core.Keyword(null,"mark","mark",1017248319),new cljs.core.Keyword(null,"h5","h5",1013907519),new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.Keyword(null,"sup","sup",1014018496),new cljs.core.Keyword(null,"h1","h1",1013907515),new cljs.core.Keyword(null,"table","table",1124020032),new cljs.core.Keyword(null,"th","th",1013907942),new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.Keyword(null,"h6","h6",1013907520),new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"pre","pre",1014015509),new cljs.core.Keyword(null,"nav","nav",1014013077),new cljs.core.Keyword(null,"address","address",4161179494),new cljs.core.Keyword(null,"u","u",1013904359),new cljs.core.Keyword(null,"body","body",1016933652),new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.Keyword(null,"datalist","datalist",2803674810),new cljs.core.Keyword(null,"q","q",1013904355),new cljs.core.Keyword(null,"samp","samp",1017426915),new cljs.core.Keyword(null,"source","source",4412365709),new cljs.core.Keyword(null,"summary","summary",3451231000),new cljs.core.Keyword(null,"footer","footer",4040009997),new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.Keyword(null,"var","var",1014020761),new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.Keyword(null,"p","p",1013904354),new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.Keyword(null,"s","s",1013904357),new cljs.core.Keyword(null,"iframe","iframe",4117657110)],[quiescent.dom.colgroup,quiescent.dom.path,quiescent.dom.menuitem,quiescent.dom.optgroup,quiescent.dom.tbody,quiescent.dom.html,quiescent.dom.dfn,quiescent.dom.sub,quiescent.dom.text,quiescent.dom.strong,quiescent.dom.data,quiescent.dom.progress,quiescent.dom.polyline,quiescent.dom.ul,quiescent.dom.img,quiescent.dom.em,quiescent.dom.rt,quiescent.dom.details,quiescent.dom.fieldset,quiescent.dom.keygen,quiescent.dom.map,quiescent.dom.div,quiescent.dom.video,quiescent.dom.link,quiescent.dom.dt,quiescent.dom.ol,quiescent.dom.form,quiescent.dom.menu,quiescent.dom.a,quiescent.dom.del,quiescent.dom.hr,quiescent.dom.header,quiescent.dom.param,quiescent.dom.head,quiescent.dom.area,quiescent.dom.legend,quiescent.dom.meter,quiescent.dom.dl,quiescent.dom.figcaption,quiescent.dom.tfoot,quiescent.dom.blockquote,quiescent.dom.b,quiescent.dom.abbr,quiescent.dom.caption,quiescent.dom.style,quiescent.dom.bdi,quiescent.dom.g,quiescent.dom.ruby,quiescent.dom.rp,quiescent.dom.figure,quiescent.dom.svg,quiescent.dom.rect,quiescent.dom.embed,quiescent.dom.button,quiescent.dom.canvas,quiescent.dom.section,quiescent.dom.object,quiescent.dom.title,quiescent.dom.output,quiescent.dom.audio,quiescent.dom.col,quiescent.dom.dd,quiescent.dom.bdo,quiescent.dom.cite,quiescent.dom.code,quiescent.dom.kbd,quiescent.dom.big,quiescent.dom.thead,quiescent.dom.i,quiescent.dom.ins,quiescent.dom.base,quiescent.dom.circle,quiescent.dom.br,quiescent.dom.polygon,quiescent.dom.wbr,quiescent.dom.textarea,quiescent.dom.small,quiescent.dom.main,quiescent.dom.meta,quiescent.dom.aside,quiescent.dom.article,quiescent.dom.noscript,quiescent.dom.h4,quiescent.dom.h3,quiescent.dom.script,quiescent.dom.track,quiescent.dom.time,quiescent.dom.h2,quiescent.dom.mark,quiescent.dom.h5,quiescent.dom.span,quiescent.dom.input,quiescent.dom.sup,quiescent.dom.h1,quiescent.dom.table,quiescent.dom.th,quiescent.dom.label,quiescent.dom.h6,quiescent.dom.line,quiescent.dom.pre,quiescent.dom.nav,quiescent.dom.address,quiescent.dom.u,quiescent.dom.body,quiescent.dom.option,quiescent.dom.datalist,quiescent.dom.q,quiescent.dom.samp,quiescent.dom.source,quiescent.dom.summary,quiescent.dom.footer,quiescent.dom.select,quiescent.dom.var$,quiescent.dom.td,quiescent.dom.li,quiescent.dom.p,quiescent.dom.tr,quiescent.dom.s,quiescent.dom.iframe]);
}
if(!lt.util.load.provided_QMARK_('lt.plugins.elm-light.autocompleter')) {
goog.provide('lt.plugins.elm_light.autocompleter');
goog.require('cljs.core');
goog.require('quiescent.dom');
goog.require('quiescent.dom');
goog.require('quiescent');
goog.require('quiescent');
lt.plugins.elm_light.autocompleter.find_active = (function find_active(items){return cljs.core.first.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"active","active",3885920888),items));
});
lt.plugins.elm_light.autocompleter.handle_keypress = (function handle_keypress(p__8109,ev){var map__8112 = p__8109;var map__8112__$1 = ((cljs.core.seq_QMARK_.call(null,map__8112))?cljs.core.apply.call(null,cljs.core.hash_map,map__8112):map__8112);var props = map__8112__$1;var on_cancel = cljs.core.get.call(null,map__8112__$1,new cljs.core.Keyword(null,"on-cancel","on-cancel",600765850));var on_select = cljs.core.get.call(null,map__8112__$1,new cljs.core.Keyword(null,"on-select","on-select",1062468636));var on_down = cljs.core.get.call(null,map__8112__$1,new cljs.core.Keyword(null,"on-down","on-down",3936419650));var on_up = cljs.core.get.call(null,map__8112__$1,new cljs.core.Keyword(null,"on-up","on-up",1119739067));var kk = ev.which;var G__8113 = kk;if(cljs.core._EQ_.call(null,27,G__8113))
{ev.preventDefault();
ev.target.value = "";
return on_cancel.call(null);
} else
{if(cljs.core._EQ_.call(null,13,G__8113))
{ev.preventDefault();
var temp__4092__auto___8129 = lt.plugins.elm_light.autocompleter.find_active.call(null,new cljs.core.Keyword(null,"items","items",1114430258).cljs$core$IFn$_invoke$arity$1(props));if(cljs.core.truth_(temp__4092__auto___8129))
{var active_8130 = temp__4092__auto___8129;ev.target.value = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(active_8130);
} else
{}
return on_select.call(null);
} else
{if(cljs.core._EQ_.call(null,40,G__8113))
{ev.preventDefault();
return on_down.call(null);
} else
{if(cljs.core._EQ_.call(null,38,G__8113))
{ev.preventDefault();
return on_up.call(null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return new cljs.core.Keyword(null,"default","default",2558708147);
} else
{return null;
}
}
}
}
}
});
/**
* 
*/
lt.plugins.elm_light.autocompleter.AutoCompleteMenu = quiescent.component.call(null,(function (props){var items = new cljs.core.Keyword(null,"items","items",1114430258).cljs$core$IFn$_invoke$arity$1(props);var style = ((cljs.core.seq.call(null,items))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",2685668404),"none"], null));var item_classes = ((function (items,style){
return (function (p1__8114_SHARP_){return "autocomplete-dropdown-item row".concat((cljs.core.truth_(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(p1__8114_SHARP_))?" autocomplete-active":""));
});})(items,style))
;return cljs.core.apply.call(null,quiescent.dom.div,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"onMouseDown","onMouseDown",1569008442),((function (items,style,item_classes){
return (function (e){e.preventDefault();
return e.stopPropagation();
});})(items,style,item_classes))
,new cljs.core.Keyword(null,"className","className",1004015509),"autocomplete-dropdown-menu",new cljs.core.Keyword(null,"style","style",1123684643),style], null),cljs.core.map.call(null,((function (items,style,item_classes){
return (function (item){return quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",1004015509),item_classes.call(null,item)], null),quiescent.dom.div.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(item)));
});})(items,style,item_classes))
,items));
}));
/**
* 
*/
lt.plugins.elm_light.autocompleter.Adder = quiescent.component.call(null,(function (p__8115){var map__8116 = p__8115;var map__8116__$1 = ((cljs.core.seq_QMARK_.call(null,map__8116))?cljs.core.apply.call(null,cljs.core.hash_map,map__8116):map__8116);var props = map__8116__$1;var disabled = cljs.core.get.call(null,map__8116__$1,new cljs.core.Keyword(null,"disabled","disabled",1284845038));var on_add_package = cljs.core.get.call(null,map__8116__$1,new cljs.core.Keyword(null,"on-add-package","on-add-package",3601701790));return quiescent.dom.button.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",1004015509),"btn",new cljs.core.Keyword(null,"disabled","disabled",1284845038),disabled,new cljs.core.Keyword(null,"onClick","onClick",3956969051),((function (map__8116,map__8116__$1,props,disabled,on_add_package){
return (function (){return on_add_package.call(null);
});})(map__8116,map__8116__$1,props,disabled,on_add_package))
], null),"Add package");
}));
/**
* 
*/
lt.plugins.elm_light.autocompleter.Versions = quiescent.component.call(null,(function (props){return cljs.core.apply.call(null,quiescent.dom.select,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",1004015509),"versions",new cljs.core.Keyword(null,"value","value",1125876963),new cljs.core.Keyword(null,"version","version",1365512266).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"onChange","onChange",2050678241),(function (p1__8117_SHARP_){return new cljs.core.Keyword(null,"on-change-version","on-change-version",822058203).cljs$core$IFn$_invoke$arity$1(props).call(null,p1__8117_SHARP_.target.value);
})], null),cljs.core.map.call(null,(function (p1__8118_SHARP_){return quiescent.dom.option.call(null,cljs.core.PersistentArrayMap.EMPTY,p1__8118_SHARP_);
}),new cljs.core.Keyword(null,"versions","versions",3323818509).cljs$core$IFn$_invoke$arity$1(props)));
}));
/**
* 
*/
lt.plugins.elm_light.autocompleter.AutoComplete = quiescent.component.call(null,(function (props){return quiescent.dom.span.call(null,cljs.core.PersistentArrayMap.EMPTY,quiescent.dom.input.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"onKeyDown","onKeyDown",1534256180),new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"autoComplete","autoComplete",4535568250),new cljs.core.Keyword(null,"onBlur","onBlur",4295401048),new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.Keyword(null,"autoFocus","autoFocus",2651959259),new cljs.core.Keyword(null,"onChange","onChange",2050678241),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"value","value",1125876963)],[cljs.core.partial.call(null,lt.plugins.elm_light.autocompleter.handle_keypress,props),"package-search","off",(function (_){return new cljs.core.Keyword(null,"on-blur","on-blur",3936357127).cljs$core$IFn$_invoke$arity$1(props).call(null);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",1127031096),"250px"], null),true,(function (ev){return new cljs.core.Keyword(null,"on-change","on-change",606853840).cljs$core$IFn$_invoke$arity$1(props).call(null,(ev["target"]["value"]));
}),"text",new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(props)])),lt.plugins.elm_light.autocompleter.Versions.call(null,props),lt.plugins.elm_light.autocompleter.Adder.call(null,cljs.core.assoc.call(null,props,new cljs.core.Keyword(null,"disabled","disabled",1284845038),(new cljs.core.Keyword(null,"version","version",1365512266).cljs$core$IFn$_invoke$arity$1(props) == null))),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",1004015509),"autocomplete-dropdown"], null),lt.plugins.elm_light.autocompleter.AutoCompleteMenu.call(null,props)));
}));
}
if(!lt.util.load.provided_QMARK_('clojure.walk')) {
goog.provide('clojure.walk');
goog.require('cljs.core');
/**
* Traverses form, an arbitrary data structure.  inner and outer are
* functions.  Applies inner to each element of form, building up a
* data structure of the same type, then applies outer to the result.
* Recognizes all Clojure data structures. Consumes seqs as with doall.
*/
clojure.walk.walk = (function walk(inner,outer,form){if(cljs.core.seq_QMARK_.call(null,form))
{return outer.call(null,cljs.core.doall.call(null,cljs.core.map.call(null,inner,form)));
} else
{if(cljs.core.coll_QMARK_.call(null,form))
{return outer.call(null,cljs.core.into.call(null,cljs.core.empty.call(null,form),cljs.core.map.call(null,inner,form)));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return outer.call(null,form);
} else
{return null;
}
}
}
});
/**
* Performs a depth-first, post-order traversal of form.  Calls f on
* each sub-form, uses f's return value in place of the original.
* Recognizes all Clojure data structures. Consumes seqs as with doall.
*/
clojure.walk.postwalk = (function postwalk(f,form){return clojure.walk.walk.call(null,cljs.core.partial.call(null,postwalk,f),f,form);
});
/**
* Like postwalk, but does pre-order traversal.
*/
clojure.walk.prewalk = (function prewalk(f,form){return clojure.walk.walk.call(null,cljs.core.partial.call(null,prewalk,f),cljs.core.identity,f.call(null,form));
});
/**
* Recursively transforms all map keys from strings to keywords.
*/
clojure.walk.keywordize_keys = (function keywordize_keys(m){var f = (function (p__18909){var vec__18910 = p__18909;var k = cljs.core.nth.call(null,vec__18910,0,null);var v = cljs.core.nth.call(null,vec__18910,1,null);if(typeof k === 'string')
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),v], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
}
});return clojure.walk.postwalk.call(null,((function (f){
return (function (x){if(cljs.core.map_QMARK_.call(null,x))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,f,x));
} else
{return x;
}
});})(f))
,m);
});
/**
* Recursively transforms all map keys from keywords to strings.
*/
clojure.walk.stringify_keys = (function stringify_keys(m){var f = (function (p__18913){var vec__18914 = p__18913;var k = cljs.core.nth.call(null,vec__18914,0,null);var v = cljs.core.nth.call(null,vec__18914,1,null);if((k instanceof cljs.core.Keyword))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),v], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
}
});return clojure.walk.postwalk.call(null,((function (f){
return (function (x){if(cljs.core.map_QMARK_.call(null,x))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,f,x));
} else
{return x;
}
});})(f))
,m);
});
/**
* Recursively transforms form by replacing keys in smap with their
* values.  Like clojure/replace but works on any data structure.  Does
* replacement at the root of the tree first.
*/
clojure.walk.prewalk_replace = (function prewalk_replace(smap,form){return clojure.walk.prewalk.call(null,(function (x){if(cljs.core.contains_QMARK_.call(null,smap,x))
{return smap.call(null,x);
} else
{return x;
}
}),form);
});
/**
* Recursively transforms form by replacing keys in smap with their
* values.  Like clojure/replace but works on any data structure.  Does
* replacement at the leaves of the tree first.
*/
clojure.walk.postwalk_replace = (function postwalk_replace(smap,form){return clojure.walk.postwalk.call(null,(function (x){if(cljs.core.contains_QMARK_.call(null,smap,x))
{return smap.call(null,x);
} else
{return x;
}
}),form);
});
}
if(!lt.util.load.provided_QMARK_('lt.plugins.elm-light.graph')) {
goog.provide('lt.plugins.elm_light.graph');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('lt.objs.files');
goog.require('lt.plugins.elm_light.utils');
goog.require('lt.util.dom');
goog.require('lt.objs.tabs');
goog.require('clojure.string');
goog.require('lt.plugins.elm_light.utils');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('lt.util.dom');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.files');
goog.require('lt.util.load');
goog.require('clojure.string');
goog.require('lt.object');
goog.require('lt.object');
goog.require('clojure.set');
goog.require('lt.util.load');
goog.require('lt.objs.console');
goog.require('lt.objs.tabs');
goog.require('lt.objs.console');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('fetch.core');
goog.require('fetch.core');
lt.plugins.elm_light.graph.dagreD3 = require(lt.objs.files.join.call(null,lt.plugins.elm_light.utils.elm_plugin_dir,"node_modules/dagre-d3"));
lt.plugins.elm_light.graph.d3 = require(lt.objs.files.join.call(null,lt.plugins.elm_light.utils.elm_plugin_dir,"node_modules/d3"));
lt.plugins.elm_light.graph.lower = (function lower(term){return clojure.string.lower_case.call(null,term);
});
lt.plugins.elm_light.graph.find_package_by_name = (function find_package_by_name(this$,name){return cljs.core.some.call(null,(function (p1__11985_SHARP_){if(cljs.core._EQ_.call(null,lt.plugins.elm_light.graph.lower.call(null,new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(p1__11985_SHARP_)),lt.plugins.elm_light.graph.lower.call(null,name)))
{return p1__11985_SHARP_;
} else
{return null;
}
}),new cljs.core.Keyword(null,"all-packages","all-packages",1123981067).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
});
lt.plugins.elm_light.graph.dependency_graph_ui = (function dependency_graph_ui(this$){var e__6289__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.graph","div.graph",2030351651),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dependency-graph","div.dependency-graph",3039800187),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg:svg","svg:svg",3472817088),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",1127031096),"650",new cljs.core.Keyword(null,"height","height",4087841945),"680"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg:g","svg:g",1123725379),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",2066570974),"translate(20,20)"], null)], null)], null)], null)], null));var seq__11992_12043 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__11993_12044 = null;var count__11994_12045 = 0;var i__11995_12046 = 0;while(true){
if((i__11995_12046 < count__11994_12045))
{var vec__11996_12047 = cljs.core._nth.call(null,chunk__11993_12044,i__11995_12046);var ev__6290__auto___12048 = cljs.core.nth.call(null,vec__11996_12047,0,null);var func__6291__auto___12049 = cljs.core.nth.call(null,vec__11996_12047,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___12048,func__6291__auto___12049);
{
var G__12050 = seq__11992_12043;
var G__12051 = chunk__11993_12044;
var G__12052 = count__11994_12045;
var G__12053 = (i__11995_12046 + 1);
seq__11992_12043 = G__12050;
chunk__11993_12044 = G__12051;
count__11994_12045 = G__12052;
i__11995_12046 = G__12053;
continue;
}
} else
{var temp__4092__auto___12054 = cljs.core.seq.call(null,seq__11992_12043);if(temp__4092__auto___12054)
{var seq__11992_12055__$1 = temp__4092__auto___12054;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11992_12055__$1))
{var c__5632__auto___12056 = cljs.core.chunk_first.call(null,seq__11992_12055__$1);{
var G__12057 = cljs.core.chunk_rest.call(null,seq__11992_12055__$1);
var G__12058 = c__5632__auto___12056;
var G__12059 = cljs.core.count.call(null,c__5632__auto___12056);
var G__12060 = 0;
seq__11992_12043 = G__12057;
chunk__11993_12044 = G__12058;
count__11994_12045 = G__12059;
i__11995_12046 = G__12060;
continue;
}
} else
{var vec__11997_12061 = cljs.core.first.call(null,seq__11992_12055__$1);var ev__6290__auto___12062 = cljs.core.nth.call(null,vec__11997_12061,0,null);var func__6291__auto___12063 = cljs.core.nth.call(null,vec__11997_12061,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___12062,func__6291__auto___12063);
{
var G__12064 = cljs.core.next.call(null,seq__11992_12055__$1);
var G__12065 = null;
var G__12066 = 0;
var G__12067 = 0;
seq__11992_12043 = G__12064;
chunk__11993_12044 = G__12065;
count__11994_12045 = G__12066;
i__11995_12046 = G__12067;
continue;
}
}
} else
{}
}
break;
}
return e__6289__auto__;
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.graph","dependency-graph","lt.plugins.elm-light.graph/dependency-graph",2371711049),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elm.graph.dependency","elm.graph.dependency",658564005)], null),new cljs.core.Keyword(null,"name","name",1017277949),"Dependency graph",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){lt.plugins.elm_light.utils.fetch_all_packages.call(null,(function (p1__11998_SHARP_){return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"all-packages","all-packages",1123981067),p1__11998_SHARP_], null));
}));
return lt.plugins.elm_light.graph.dependency_graph_ui.call(null,this$);
}));
lt.plugins.elm_light.graph.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___12068 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___12068))
{var ts_12069 = temp__4092__auto___12068;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_12069))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_12069);
} else
{}
} else
{}
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"destroy","destroy",2571277164));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.graph","on-close-destroy","lt.plugins.elm-light.graph/on-close-destroy",4331265958),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.graph.__BEH__on_close_destroy,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));
lt.plugins.elm_light.graph.select_values = cljs.core.comp.call(null,cljs.core.vals,cljs.core.select_keys);
lt.plugins.elm_light.graph.dep_id = (function dep_id(dep){return clojure.string.join.call(null,":",lt.plugins.elm_light.graph.select_values.call(null,dep,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"package","package",4501809080),new cljs.core.Keyword(null,"version","version",1365512266)], null)));
});
lt.plugins.elm_light.graph.node_label = (function node_label(x){return {"label": [cljs.core.str("<div class='graph-label"),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"version","version",1365512266).cljs$core$IFn$_invoke$arity$1(x))?"'":" error'")),cljs.core.str(" title='"),cljs.core.str((function (){var or__4884__auto__ = new cljs.core.Keyword(null,"summary","summary",3451231000).cljs$core$IFn$_invoke$arity$1(x);if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return lt.plugins.elm_light.graph.dep_id.call(null,x);
}
})()),cljs.core.str("'>"),cljs.core.str(new cljs.core.Keyword(null,"package","package",4501809080).cljs$core$IFn$_invoke$arity$1(x)),cljs.core.str("<br/>"),cljs.core.str(new cljs.core.Keyword(null,"version","version",1365512266).cljs$core$IFn$_invoke$arity$1(x)),cljs.core.str("</div>")].join(''), "labelType": "html", "style": (cljs.core.truth_(new cljs.core.Keyword(null,"version","version",1365512266).cljs$core$IFn$_invoke$arity$1(x))?null:"fill: #73404c"), "shape": (function (){var temp__4090__auto__ = new cljs.core.Keyword(null,"shape","shape",1123304211).cljs$core$IFn$_invoke$arity$1(x);if(cljs.core.truth_(temp__4090__auto__))
{var shape = temp__4090__auto__;return shape;
} else
{return "rect";
}
})()};
});
lt.plugins.elm_light.graph.create_graph = (function create_graph(data){var g = (new lt.plugins.elm_light.graph.dagreD3.graphlib.Graph()).setGraph({});var seq__12007_12070 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"nodes","nodes",1118897699).cljs$core$IFn$_invoke$arity$1(data));var chunk__12008_12071 = null;var count__12009_12072 = 0;var i__12010_12073 = 0;while(true){
if((i__12010_12073 < count__12009_12072))
{var x_12074 = cljs.core._nth.call(null,chunk__12008_12071,i__12010_12073);g.setNode(lt.plugins.elm_light.graph.dep_id.call(null,x_12074),lt.plugins.elm_light.graph.node_label.call(null,x_12074));
{
var G__12075 = seq__12007_12070;
var G__12076 = chunk__12008_12071;
var G__12077 = count__12009_12072;
var G__12078 = (i__12010_12073 + 1);
seq__12007_12070 = G__12075;
chunk__12008_12071 = G__12076;
count__12009_12072 = G__12077;
i__12010_12073 = G__12078;
continue;
}
} else
{var temp__4092__auto___12079 = cljs.core.seq.call(null,seq__12007_12070);if(temp__4092__auto___12079)
{var seq__12007_12080__$1 = temp__4092__auto___12079;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12007_12080__$1))
{var c__5632__auto___12081 = cljs.core.chunk_first.call(null,seq__12007_12080__$1);{
var G__12082 = cljs.core.chunk_rest.call(null,seq__12007_12080__$1);
var G__12083 = c__5632__auto___12081;
var G__12084 = cljs.core.count.call(null,c__5632__auto___12081);
var G__12085 = 0;
seq__12007_12070 = G__12082;
chunk__12008_12071 = G__12083;
count__12009_12072 = G__12084;
i__12010_12073 = G__12085;
continue;
}
} else
{var x_12086 = cljs.core.first.call(null,seq__12007_12080__$1);g.setNode(lt.plugins.elm_light.graph.dep_id.call(null,x_12086),lt.plugins.elm_light.graph.node_label.call(null,x_12086));
{
var G__12087 = cljs.core.next.call(null,seq__12007_12080__$1);
var G__12088 = null;
var G__12089 = 0;
var G__12090 = 0;
seq__12007_12070 = G__12087;
chunk__12008_12071 = G__12088;
count__12009_12072 = G__12089;
i__12010_12073 = G__12090;
continue;
}
}
} else
{}
}
break;
}
var seq__12011_12091 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"edges","edges",1110261192).cljs$core$IFn$_invoke$arity$1(data));var chunk__12012_12092 = null;var count__12013_12093 = 0;var i__12014_12094 = 0;while(true){
if((i__12014_12094 < count__12013_12093))
{var x_12095 = cljs.core._nth.call(null,chunk__12012_12092,i__12014_12094);g.setEdge(new cljs.core.Keyword(null,"a","a",1013904339).cljs$core$IFn$_invoke$arity$1(x_12095),new cljs.core.Keyword(null,"b","b",1013904340).cljs$core$IFn$_invoke$arity$1(x_12095),{"style": (cljs.core.truth_(new cljs.core.Keyword(null,"transitive","transitive",3584713111).cljs$core$IFn$_invoke$arity$1(x_12095))?"stroke-dasharray: 5, 5;":null), "label": new cljs.core.Keyword(null,"label","label",1116631654).cljs$core$IFn$_invoke$arity$1(x_12095)});
{
var G__12096 = seq__12011_12091;
var G__12097 = chunk__12012_12092;
var G__12098 = count__12013_12093;
var G__12099 = (i__12014_12094 + 1);
seq__12011_12091 = G__12096;
chunk__12012_12092 = G__12097;
count__12013_12093 = G__12098;
i__12014_12094 = G__12099;
continue;
}
} else
{var temp__4092__auto___12100 = cljs.core.seq.call(null,seq__12011_12091);if(temp__4092__auto___12100)
{var seq__12011_12101__$1 = temp__4092__auto___12100;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12011_12101__$1))
{var c__5632__auto___12102 = cljs.core.chunk_first.call(null,seq__12011_12101__$1);{
var G__12103 = cljs.core.chunk_rest.call(null,seq__12011_12101__$1);
var G__12104 = c__5632__auto___12102;
var G__12105 = cljs.core.count.call(null,c__5632__auto___12102);
var G__12106 = 0;
seq__12011_12091 = G__12103;
chunk__12012_12092 = G__12104;
count__12013_12093 = G__12105;
i__12014_12094 = G__12106;
continue;
}
} else
{var x_12107 = cljs.core.first.call(null,seq__12011_12101__$1);g.setEdge(new cljs.core.Keyword(null,"a","a",1013904339).cljs$core$IFn$_invoke$arity$1(x_12107),new cljs.core.Keyword(null,"b","b",1013904340).cljs$core$IFn$_invoke$arity$1(x_12107),{"style": (cljs.core.truth_(new cljs.core.Keyword(null,"transitive","transitive",3584713111).cljs$core$IFn$_invoke$arity$1(x_12107))?"stroke-dasharray: 5, 5;":null), "label": new cljs.core.Keyword(null,"label","label",1116631654).cljs$core$IFn$_invoke$arity$1(x_12107)});
{
var G__12108 = cljs.core.next.call(null,seq__12011_12101__$1);
var G__12109 = null;
var G__12110 = 0;
var G__12111 = 0;
seq__12011_12091 = G__12108;
chunk__12012_12092 = G__12109;
count__12013_12093 = G__12110;
i__12014_12094 = G__12111;
continue;
}
}
} else
{}
}
break;
}
return g;
});
lt.plugins.elm_light.graph.d3_sel = (function d3_sel(selector){console.log(lt.plugins.elm_light.graph.d3.select(selector));
return lt.plugins.elm_light.graph.d3.select(selector);
});
lt.plugins.elm_light.graph.dimensions = (function dimensions(this$){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",1013904361),new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)).clientWidth,new cljs.core.Keyword(null,"h","h",1013904346),new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)).clientHeight], null);
});
lt.plugins.elm_light.graph.init_zoom = (function init_zoom(svg,g){var zoom = lt.plugins.elm_light.graph.d3.behavior.zoom().on("zoom",(function (){return g.attr("transform",[cljs.core.str("translate("),cljs.core.str(lt.plugins.elm_light.graph.d3.event.translate),cljs.core.str(")"),cljs.core.str("scale("),cljs.core.str(lt.plugins.elm_light.graph.d3.event.scale),cljs.core.str(")")].join(''));
}));return svg.call(zoom);
});
lt.plugins.elm_light.graph.resize_graph = (function resize_graph(this$,svg){var dim = lt.plugins.elm_light.graph.dimensions.call(null,this$);svg.attr("width",(new cljs.core.Keyword(null,"w","w",1013904361).cljs$core$IFn$_invoke$arity$1(dim) + 20));
return svg.attr("height",(new cljs.core.Keyword(null,"h","h",1013904346).cljs$core$IFn$_invoke$arity$1(dim) + 20));
});
lt.plugins.elm_light.graph.__BEH__on_render = (function __BEH__on_render(this$){var svg = lt.plugins.elm_light.graph.d3.select("svg");var g = svg.select("g");var renderer = lt.plugins.elm_light.graph.dagreD3.render();renderer.call(null,g,lt.plugins.elm_light.graph.create_graph.call(null,new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))));
lt.plugins.elm_light.graph.init_zoom.call(null,svg,g);
return lt.plugins.elm_light.graph.resize_graph.call(null,this$,svg);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.graph","on-render","lt.plugins.elm-light.graph/on-render",4390043473),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.graph.__BEH__on_render,new cljs.core.Keyword(null,"desc","desc",1016984067),"Elm render dependencies",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elm.graph.render","elm.graph.render",2076182000),null], null), null));
lt.plugins.elm_light.graph.get_package_json = (function get_package_json(dep,callback){var url = [cljs.core.str("http://package.elm-lang.org/packages/"),cljs.core.str(new cljs.core.Keyword(null,"package","package",4501809080).cljs$core$IFn$_invoke$arity$1(dep)),cljs.core.str("/"),cljs.core.str(new cljs.core.Keyword(null,"version","version",1365512266).cljs$core$IFn$_invoke$arity$1(dep)),cljs.core.str("/"),cljs.core.str("elm-package.json")].join('');return fetch.core.xhr.call(null,url,cljs.core.PersistentArrayMap.EMPTY,((function (url){
return (function (data){return callback.call(null,cljs.core.js__GT_clj.call(null,JSON.parse(data),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true));
});})(url))
);
});
lt.plugins.elm_light.graph.add_edges_for_dep = (function add_edges_for_dep(this$,origin,pkg_json){var temp__4092__auto__ = cljs.core.seq.call(null,cljs.core.map.call(null,(function (dep){return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"a","a",1013904339),lt.plugins.elm_light.graph.dep_id.call(null,origin),new cljs.core.Keyword(null,"b","b",1013904340),lt.plugins.elm_light.graph.dep_id.call(null,dep),new cljs.core.Keyword(null,"transitive","transitive",3584713111),true,new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.Keyword(null,"range","range",1122184367).cljs$core$IFn$_invoke$arity$1(dep)], null);
}),cljs.core.map.call(null,(function (p__12019){var vec__12020 = p__12019;var k = cljs.core.nth.call(null,vec__12020,0,null);var v = cljs.core.nth.call(null,vec__12020,1,null);return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"package","package",4501809080),new cljs.core.Keyword(null,"range","range",1122184367),new cljs.core.Keyword(null,"version","version",1365512266)],[lt.plugins.elm_light.utils.nskw__GT_name.call(null,k),v,new cljs.core.Keyword(null,"version","version",1365512266).cljs$core$IFn$_invoke$arity$1(cljs.core.some.call(null,((function (vec__12020,k,v){
return (function (p1__12015_SHARP_){if(cljs.core._EQ_.call(null,lt.plugins.elm_light.utils.nskw__GT_name.call(null,k),new cljs.core.Keyword(null,"package","package",4501809080).cljs$core$IFn$_invoke$arity$1(p1__12015_SHARP_)))
{return p1__12015_SHARP_;
} else
{return null;
}
});})(vec__12020,k,v))
,new cljs.core.Keyword(null,"packages","packages",1764771935).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))))]);
}),new cljs.core.Keyword(null,"dependencies","dependencies",1517678747).cljs$core$IFn$_invoke$arity$1(pkg_json))));if(temp__4092__auto__)
{var edges = temp__4092__auto__;lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",1016980252),new cljs.core.Keyword(null,"edges","edges",1110261192)], null),((function (edges,temp__4092__auto__){
return (function (p1__12016_SHARP_){return cljs.core.concat.call(null,p1__12016_SHARP_,edges);
});})(edges,temp__4092__auto__))
);
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"elm.graph.render","elm.graph.render",2076182000));
} else
{return null;
}
});
lt.plugins.elm_light.graph.__BEH__on_get_transitives = (function __BEH__on_get_transitives(this$){var transitives = cljs.core.remove.call(null,new cljs.core.Keyword(null,"range","range",1122184367),new cljs.core.Keyword(null,"packages","packages",1764771935).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))));lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",1016980252),new cljs.core.Keyword(null,"nodes","nodes",1118897699)], null),((function (transitives){
return (function (p1__12021_SHARP_){return cljs.core.concat.call(null,p1__12021_SHARP_,transitives);
});})(transitives))
);
lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"elm.graph.render","elm.graph.render",2076182000));
var seq__12026 = cljs.core.seq.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"version","version",1365512266),new cljs.core.Keyword(null,"packages","packages",1764771935).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))));var chunk__12027 = null;var count__12028 = 0;var i__12029 = 0;while(true){
if((i__12029 < count__12028))
{var x = cljs.core._nth.call(null,chunk__12027,i__12029);lt.plugins.elm_light.graph.get_package_json.call(null,x,cljs.core.partial.call(null,lt.plugins.elm_light.graph.add_edges_for_dep,this$,x));
{
var G__12112 = seq__12026;
var G__12113 = chunk__12027;
var G__12114 = count__12028;
var G__12115 = (i__12029 + 1);
seq__12026 = G__12112;
chunk__12027 = G__12113;
count__12028 = G__12114;
i__12029 = G__12115;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12026);if(temp__4092__auto__)
{var seq__12026__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12026__$1))
{var c__5632__auto__ = cljs.core.chunk_first.call(null,seq__12026__$1);{
var G__12116 = cljs.core.chunk_rest.call(null,seq__12026__$1);
var G__12117 = c__5632__auto__;
var G__12118 = cljs.core.count.call(null,c__5632__auto__);
var G__12119 = 0;
seq__12026 = G__12116;
chunk__12027 = G__12117;
count__12028 = G__12118;
i__12029 = G__12119;
continue;
}
} else
{var x = cljs.core.first.call(null,seq__12026__$1);lt.plugins.elm_light.graph.get_package_json.call(null,x,cljs.core.partial.call(null,lt.plugins.elm_light.graph.add_edges_for_dep,this$,x));
{
var G__12120 = cljs.core.next.call(null,seq__12026__$1);
var G__12121 = null;
var G__12122 = 0;
var G__12123 = 0;
seq__12026 = G__12120;
chunk__12027 = G__12121;
count__12028 = G__12122;
i__12029 = G__12123;
continue;
}
}
} else
{return null;
}
}
break;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.graph","on-get-transitives","lt.plugins.elm-light.graph/on-get-transitives",3355428108),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.graph.__BEH__on_get_transitives,new cljs.core.Keyword(null,"desc","desc",1016984067),"Elm get 1.st level transitive dependencies",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elm.graph.get-transitives","elm.graph.get-transitives",689262209),null], null), null));
lt.plugins.elm_light.graph.get_dependency_data = (function get_dependency_data(project_path){var pkgs = cljs.core.map.call(null,(function (p1__12031_SHARP_){return cljs.core.assoc.call(null,p1__12031_SHARP_,new cljs.core.Keyword(null,"summary","summary",3451231000),new cljs.core.Keyword(null,"summary","summary",3451231000).cljs$core$IFn$_invoke$arity$1(lt.plugins.elm_light.graph.find_package_by_name.call(null,lt.plugins.elm_light.graph.dependency_graph,new cljs.core.Keyword(null,"package","package",4501809080).cljs$core$IFn$_invoke$arity$1(p1__12031_SHARP_))));
}),cljs.core.map.call(null,(function (p1__12030_SHARP_){return clojure.set.rename_keys.call(null,p1__12030_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"exact","exact",1110851185),new cljs.core.Keyword(null,"version","version",1365512266)], null));
}),lt.plugins.elm_light.utils.get_project_deps.call(null,project_path)));var direct = cljs.core.filter.call(null,new cljs.core.Keyword(null,"range","range",1122184367),pkgs);var rootVersion = new cljs.core.Keyword(null,"version","version",1365512266).cljs$core$IFn$_invoke$arity$1(lt.plugins.elm_light.utils.parse_json_file.call(null,lt.objs.files.join.call(null,project_path,"elm-package.json")));var root = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"package","package",4501809080),lt.objs.files.basename.call(null,project_path),new cljs.core.Keyword(null,"version","version",1365512266),rootVersion,new cljs.core.Keyword(null,"shape","shape",1123304211),"ellipse"], null);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"packages","packages",1764771935),pkgs,new cljs.core.Keyword(null,"nodes","nodes",1118897699),cljs.core.conj.call(null,direct,root),new cljs.core.Keyword(null,"edges","edges",1110261192),cljs.core.map.call(null,((function (pkgs,direct,rootVersion,root){
return (function (p1__12032_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"label","label",1116631654)],[lt.plugins.elm_light.graph.dep_id.call(null,root),lt.plugins.elm_light.graph.dep_id.call(null,p1__12032_SHARP_),new cljs.core.Keyword(null,"range","range",1122184367).cljs$core$IFn$_invoke$arity$1(p1__12032_SHARP_)]);
});})(pkgs,direct,rootVersion,root))
,direct)], null);
});
lt.plugins.elm_light.graph.__BEH__on_get_data = (function __BEH__on_get_data(this$){var data = lt.plugins.elm_light.graph.get_dependency_data.call(null,new cljs.core.Keyword(null,"project-path","project-path",1907176907).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));lt.object.assoc_in_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",1016980252)], null),data);
lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"elm.graph.render","elm.graph.render",2076182000));
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"elm.graph.get-transitives","elm.graph.get-transitives",689262209));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.graph","on-get-data","lt.plugins.elm-light.graph/on-get-data",4501730286),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.graph.__BEH__on_get_data,new cljs.core.Keyword(null,"desc","desc",1016984067),"Elm retrieve dependency data for project",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elm.graph.get-data","elm.graph.get-data",2085474843),null], null), null));
lt.plugins.elm_light.graph.__BEH__on_show_dependencies = (function __BEH__on_show_dependencies(this$,project_path,focus_tab_QMARK_){if(cljs.core.truth_(focus_tab_QMARK_))
{lt.objs.tabs.add_or_focus_BANG_.call(null,this$);
} else
{}
lt.object.assoc_in_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"project-path","project-path",1907176907)], null),project_path);
lt.object.assoc_in_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",1016980252)], null),cljs.core.PersistentArrayMap.EMPTY);
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"elm.graph.get-data","elm.graph.get-data",2085474843));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.graph","on-show-dependencies","lt.plugins.elm-light.graph/on-show-dependencies",928753546),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.graph.__BEH__on_show_dependencies,new cljs.core.Keyword(null,"desc","desc",1016984067),"Elm show dependency graph",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elm.graph.show-dependencies","elm.graph.show-dependencies",3464547203),null], null), null));
lt.plugins.elm_light.graph.__BEH__on_tab_resized = (function __BEH__on_tab_resized(_){var svg = lt.plugins.elm_light.graph.d3.select("svg");return lt.plugins.elm_light.graph.resize_graph.call(null,lt.plugins.elm_light.graph.dependency_graph,svg);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.graph","on-tab-resized","lt.plugins.elm-light.graph/on-tab-resized",4543261451),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.graph.__BEH__on_tab_resized,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"end-drag","end-drag",2692811352),null], null), null));
lt.plugins.elm_light.graph.dependency_graph = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.elm-light.graph","dependency-graph","lt.plugins.elm-light.graph/dependency-graph",2371711049));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"show-elm-dep-graph","show-elm-dep-graph",2736186955),new cljs.core.Keyword(null,"desc","desc",1016984067),"Elm: Show dependency graph",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;var temp__4092__auto____$1 = lt.plugins.elm_light.utils.project_path.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed))));if(cljs.core.truth_(temp__4092__auto____$1))
{var path = temp__4092__auto____$1;return lt.object.raise.call(null,lt.plugins.elm_light.graph.dependency_graph,new cljs.core.Keyword(null,"elm.graph.show-dependencies","elm.graph.show-dependencies",3464547203),path,true);
} else
{return null;
}
} else
{return null;
}
})], null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.elm-light.packages')) {
goog.provide('lt.plugins.elm_light.packages');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('lt.objs.files');
goog.require('lt.plugins.elm_light.graph');
goog.require('lt.plugins.elm_light.autocompleter');
goog.require('lt.plugins.elm_light.utils');
goog.require('lt.util.dom');
goog.require('lt.plugins.elm_light.graph');
goog.require('quiescent');
goog.require('lt.objs.tabs');
goog.require('clojure.string');
goog.require('lt.plugins.elm_light.utils');
goog.require('lt.objs.notifos');
goog.require('quiescent.dom');
goog.require('lt.objs.browser');
goog.require('lt.objs.notifos');
goog.require('lt.util.dom');
goog.require('lt.objs.editor.pool');
goog.require('clojure.walk');
goog.require('lt.objs.command');
goog.require('lt.objs.files');
goog.require('clojure.string');
goog.require('quiescent');
goog.require('lt.objs.browser');
goog.require('quiescent.dom');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.console');
goog.require('lt.objs.tabs');
goog.require('lt.objs.console');
goog.require('lt.plugins.elm_light.autocompleter');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
lt.plugins.elm_light.packages.remove_pkg = (function remove_pkg(path,pkg){var pkg_file = lt.objs.files.join.call(null,path,"elm-package.json");return cljs.core.partial.call(null,lt.objs.files.save,pkg_file).call(null,lt.plugins.elm_light.utils.pretty_json.call(null,cljs.core.update_in.call(null,lt.plugins.elm_light.utils.parse_json_file.call(null,pkg_file),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependencies","dependencies",1517678747)], null),((function (pkg_file){
return (function (deps){return cljs.core.dissoc.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (pkg_file){
return (function (p__18846){var vec__18847 = p__18846;var k = cljs.core.nth.call(null,vec__18847,0,null);var v = cljs.core.nth.call(null,vec__18847,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.elm_light.utils.nskw__GT_name.call(null,k),v], null);
});})(pkg_file))
,deps)),pkg);
});})(pkg_file))
)));
});
lt.plugins.elm_light.packages.project_wrapper = (function project_wrapper(this$){var e__6289__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.elm","div.elm",2686466363),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"project-packages-wrapper"], null),"Retrieving project package info..."], null)], null));var seq__18854_18879 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__18855_18880 = null;var count__18856_18881 = 0;var i__18857_18882 = 0;while(true){
if((i__18857_18882 < count__18856_18881))
{var vec__18858_18883 = cljs.core._nth.call(null,chunk__18855_18880,i__18857_18882);var ev__6290__auto___18884 = cljs.core.nth.call(null,vec__18858_18883,0,null);var func__6291__auto___18885 = cljs.core.nth.call(null,vec__18858_18883,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___18884,func__6291__auto___18885);
{
var G__18886 = seq__18854_18879;
var G__18887 = chunk__18855_18880;
var G__18888 = count__18856_18881;
var G__18889 = (i__18857_18882 + 1);
seq__18854_18879 = G__18886;
chunk__18855_18880 = G__18887;
count__18856_18881 = G__18888;
i__18857_18882 = G__18889;
continue;
}
} else
{var temp__4092__auto___18890 = cljs.core.seq.call(null,seq__18854_18879);if(temp__4092__auto___18890)
{var seq__18854_18891__$1 = temp__4092__auto___18890;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18854_18891__$1))
{var c__5632__auto___18892 = cljs.core.chunk_first.call(null,seq__18854_18891__$1);{
var G__18893 = cljs.core.chunk_rest.call(null,seq__18854_18891__$1);
var G__18894 = c__5632__auto___18892;
var G__18895 = cljs.core.count.call(null,c__5632__auto___18892);
var G__18896 = 0;
seq__18854_18879 = G__18893;
chunk__18855_18880 = G__18894;
count__18856_18881 = G__18895;
i__18857_18882 = G__18896;
continue;
}
} else
{var vec__18859_18897 = cljs.core.first.call(null,seq__18854_18891__$1);var ev__6290__auto___18898 = cljs.core.nth.call(null,vec__18859_18897,0,null);var func__6291__auto___18899 = cljs.core.nth.call(null,vec__18859_18897,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___18898,func__6291__auto___18899);
{
var G__18900 = cljs.core.next.call(null,seq__18854_18891__$1);
var G__18901 = null;
var G__18902 = 0;
var G__18903 = 0;
seq__18854_18879 = G__18900;
chunk__18855_18880 = G__18901;
count__18856_18881 = G__18902;
i__18857_18882 = G__18903;
continue;
}
}
} else
{}
}
break;
}
return e__6289__auto__;
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.packages","elm-packages","lt.plugins.elm-light.packages/elm-packages",4552372902),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elm.packages","elm.packages",3931311271),null], null), null),new cljs.core.Keyword(null,"label","label",1116631654),"Elm project packages",new cljs.core.Keyword(null,"name","name",1017277949),"Elm project packages",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){lt.plugins.elm_light.utils.fetch_all_packages.call(null,(function (p1__18860_SHARP_){return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"all-packages","all-packages",1123981067),p1__18860_SHARP_], null));
}));
return lt.plugins.elm_light.packages.project_wrapper.call(null,this$);
}));
lt.plugins.elm_light.packages.ensure_visible = (function ensure_visible(this$){var list = lt.util.dom.$.call(null,".autocomplete-dropdown-menu",lt.object.__GT_content.call(null,this$));var elem = lt.util.dom.$.call(null,".autocomplete-active",list);if((elem.offsetTop < list.scrollTop))
{return list.scrollTop = (elem.offsetTop - 15);
} else
{if(((elem.offsetTop + elem.offsetHeight) > (list.scrollTop + list.clientHeight)))
{return list.scrollTop = (((elem.offsetTop + elem.offsetHeight) + 15) - list.clientHeight);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return null;
} else
{return null;
}
}
}
});
lt.plugins.elm_light.packages.filter_packages = (function filter_packages(token,pkgs){return cljs.core.vec.call(null,cljs.core.filter.call(null,(function (pkg){return (clojure.string.lower_case.call(null,new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(pkg)).indexOf(clojure.string.lower_case.call(null,token)) > -1);
}),pkgs));
});
lt.plugins.elm_light.packages.idx_active = (function idx_active(items){return cljs.core.first.call(null,cljs.core.keep_indexed.call(null,(function (p1__18862_SHARP_,p2__18861_SHARP_){if(cljs.core.truth_(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(p2__18861_SHARP_)))
{return p1__18862_SHARP_;
} else
{return null;
}
}),items));
});
lt.plugins.elm_light.packages.move_down = (function move_down(items){if(cljs.core.empty_QMARK_.call(null,items))
{return null;
} else
{return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,items,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.elm_light.packages.idx_active.call(null,items),new cljs.core.Keyword(null,"active","active",3885920888)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__5198__auto__ = (cljs.core.count.call(null,items) - 1);var y__5199__auto__ = (lt.plugins.elm_light.packages.idx_active.call(null,items) + 1);return ((x__5198__auto__ < y__5199__auto__) ? x__5198__auto__ : y__5199__auto__);
})(),new cljs.core.Keyword(null,"active","active",3885920888)], null),true);
}
});
lt.plugins.elm_light.packages.move_up = (function move_up(items){if(cljs.core.empty_QMARK_.call(null,items))
{return null;
} else
{return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,items,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.elm_light.packages.idx_active.call(null,items),new cljs.core.Keyword(null,"active","active",3885920888)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__5191__auto__ = 0;var y__5192__auto__ = (lt.plugins.elm_light.packages.idx_active.call(null,items) - 1);return ((x__5191__auto__ > y__5192__auto__) ? x__5191__auto__ : y__5192__auto__);
})(),new cljs.core.Keyword(null,"active","active",3885920888)], null),true);
}
});
lt.plugins.elm_light.packages.on_pkg_down = (function on_pkg_down(){lt.object.update_BANG_.call(null,lt.plugins.elm_light.packages.elm_packages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ac-packages","ac-packages",1548109226)], null),lt.plugins.elm_light.packages.move_down);
lt.plugins.elm_light.packages.render.call(null,cljs.core.PersistentArrayMap.EMPTY);
return lt.plugins.elm_light.packages.ensure_visible.call(null,lt.plugins.elm_light.packages.elm_packages);
});
lt.plugins.elm_light.packages.on_pkg_up = (function on_pkg_up(){lt.object.update_BANG_.call(null,lt.plugins.elm_light.packages.elm_packages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ac-packages","ac-packages",1548109226)], null),lt.plugins.elm_light.packages.move_up);
lt.plugins.elm_light.packages.render.call(null,cljs.core.PersistentArrayMap.EMPTY);
return lt.plugins.elm_light.packages.ensure_visible.call(null,lt.plugins.elm_light.packages.elm_packages);
});
lt.plugins.elm_light.packages.on_pkg_sel = (function on_pkg_sel(){var items_18904 = new cljs.core.Keyword(null,"ac-packages","ac-packages",1548109226).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.elm_light.packages.elm_packages));var temp__4090__auto___18905 = lt.plugins.elm_light.packages.idx_active.call(null,items_18904);if(cljs.core.truth_(temp__4090__auto___18905))
{var idx_18906 = temp__4090__auto___18905;lt.object.assoc_in_BANG_.call(null,lt.plugins.elm_light.packages.elm_packages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ac-versions","ac-versions",3107155800)], null),new cljs.core.Keyword(null,"versions","versions",3323818509).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,items_18904,idx_18906)));
lt.object.assoc_in_BANG_.call(null,lt.plugins.elm_light.packages.elm_packages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ac-version","ac-version",2051259807)], null),cljs.core.first.call(null,new cljs.core.Keyword(null,"versions","versions",3323818509).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,items_18904,idx_18906))));
lt.object.assoc_in_BANG_.call(null,lt.plugins.elm_light.packages.elm_packages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ac-package","ac-package",892589325)], null),new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,items_18904,idx_18906)));
} else
{lt.object.assoc_in_BANG_.call(null,lt.plugins.elm_light.packages.elm_packages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ac-versions","ac-versions",3107155800)], null),cljs.core.PersistentVector.EMPTY);
}
lt.object.merge_BANG_.call(null,lt.plugins.elm_light.packages.elm_packages,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ac-packages","ac-packages",1548109226),null], null));
return lt.plugins.elm_light.packages.render.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
lt.plugins.elm_light.packages.on_pkg_cancel = (function on_pkg_cancel(){lt.object.merge_BANG_.call(null,lt.plugins.elm_light.packages.elm_packages,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ac-packages","ac-packages",1548109226),null,new cljs.core.Keyword(null,"ac-versions","ac-versions",3107155800),cljs.core.PersistentVector.EMPTY], null));
return lt.plugins.elm_light.packages.render.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
lt.plugins.elm_light.packages.on_pkg_blur = (function on_pkg_blur(){lt.object.merge_BANG_.call(null,lt.plugins.elm_light.packages.elm_packages,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ac-packages","ac-packages",1548109226),null], null));
return lt.plugins.elm_light.packages.render.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
lt.plugins.elm_light.packages.on_pkg_change = (function on_pkg_change(v){var items = lt.plugins.elm_light.packages.filter_packages.call(null,v,new cljs.core.Keyword(null,"all-packages","all-packages",1123981067).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.elm_light.packages.elm_packages)));lt.object.merge_BANG_.call(null,lt.plugins.elm_light.packages.elm_packages,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ac-packages","ac-packages",1548109226),items,new cljs.core.Keyword(null,"ac-package","ac-package",892589325),v,new cljs.core.Keyword(null,"ac-versions","ac-versions",3107155800),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"ac-version","ac-version",2051259807),null], null));
if(cljs.core.empty_QMARK_.call(null,items))
{} else
{lt.object.assoc_in_BANG_.call(null,lt.plugins.elm_light.packages.elm_packages,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ac-packages","ac-packages",1548109226),0,new cljs.core.Keyword(null,"active","active",3885920888)], null),true);
}
return lt.plugins.elm_light.packages.render.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
lt.plugins.elm_light.packages.pkg_install = (function pkg_install(pkg,v){var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["install","--yes"], null),(cljs.core.truth_(pkg)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pkg,v], null):cljs.core.PersistentVector.EMPTY));lt.objs.notifos.working.call(null,clojure.string.join.call(null," ",cljs.core.cons.call(null,"elm-package",args)));
var proc = require("child_process").spawn("elm-package",cljs.core.clj__GT_js.call(null,args),{"cwd": new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.elm_light.packages.elm_packages))});proc.on("exit",((function (proc,args){
return (function (p1__18863_SHARP_){if(cljs.core._EQ_.call(null,p1__18863_SHARP_,0))
{lt.objs.notifos.done_working.call(null);
} else
{lt.objs.notifos.set_msg_BANG_.call(null,"Error installing elm package",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),"error",new cljs.core.Keyword(null,"timeout","timeout",3994960083),5000], null));
}
lt.object.raise.call(null,lt.plugins.elm_light.packages.elm_packages,new cljs.core.Keyword(null,"elm.show.project.packages","elm.show.project.packages",3385102109),new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.elm_light.packages.elm_packages)));
return lt.object.raise.call(null,lt.plugins.elm_light.graph.dependency_graph,new cljs.core.Keyword(null,"elm.graph.show-dependencies","elm.graph.show-dependencies",3464547203),new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.elm_light.packages.elm_packages)),false);
});})(proc,args))
);
proc.stdout.on("data",((function (proc,args){
return (function (p1__18864_SHARP_){return lt.objs.notifos.msg_STAR_.call(null,[cljs.core.str("Package install: "),cljs.core.str(p1__18864_SHARP_)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"timeout","timeout",3994960083),5000], null));
});})(proc,args))
);
return proc.stderr.on("data",((function (proc,args){
return (function (p1__18865_SHARP_){return lt.objs.console.error.call(null,[cljs.core.str(p1__18865_SHARP_)].join(''));
});})(proc,args))
);
});
lt.plugins.elm_light.packages.on_add_package = (function on_add_package(){return lt.plugins.elm_light.packages.pkg_install.call(null,new cljs.core.Keyword(null,"ac-package","ac-package",892589325).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.elm_light.packages.elm_packages)),new cljs.core.Keyword(null,"ac-version","ac-version",2051259807).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.elm_light.packages.elm_packages)));
});
lt.plugins.elm_light.packages.on_pkg_refresh = (function on_pkg_refresh(){return lt.plugins.elm_light.packages.pkg_install.call(null,null,null);
});
lt.plugins.elm_light.packages.on_remove_pkg = (function on_remove_pkg(pkg){lt.plugins.elm_light.packages.remove_pkg.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.elm_light.packages.elm_packages)),pkg);
return lt.plugins.elm_light.packages.pkg_install.call(null,null,null);
});
lt.plugins.elm_light.packages.on_change_version = (function on_change_version(v){lt.object.assoc_in_BANG_.call(null,lt.plugins.elm_light.packages.elm_packages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ac-version","ac-version",2051259807)], null),v);
return lt.plugins.elm_light.packages.render.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
lt.plugins.elm_light.packages.on_pkg_browse = (function on_pkg_browse(pkg,version){var url = [cljs.core.str("http://package.elm-lang.org/packages/"),cljs.core.str(pkg),cljs.core.str("/"),cljs.core.str(version)].join('');var b = (function (){var or__4884__auto__ = cljs.core.first.call(null,lt.object.by_tag.call(null,new cljs.core.Keyword(null,"browser","browser",1164844698)));if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return lt.objs.browser.add.call(null);
}
})();lt.objs.tabs.add_or_focus_BANG_.call(null,b);
return lt.object.raise.call(null,b,new cljs.core.Keyword(null,"navigate!","navigate!",1766726722),url);
});
lt.plugins.elm_light.packages.on_show_graph = (function on_show_graph(){return lt.object.raise.call(null,lt.plugins.elm_light.graph.dependency_graph,new cljs.core.Keyword(null,"elm.graph.show-dependencies","elm.graph.show-dependencies",3464547203),new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.elm_light.packages.elm_packages)),true);
});
/**
* 
*/
lt.plugins.elm_light.packages.AddPackageForm = quiescent.component.call(null,(function (props){return quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",1004015509),"add-package"], null),quiescent.dom.h3.call(null,cljs.core.PersistentArrayMap.EMPTY,"Add package:"),lt.plugins.elm_light.autocompleter.AutoComplete.call(null,new cljs.core.Keyword(null,"ac-props","ac-props",1626585975).cljs$core$IFn$_invoke$arity$1(props)));
}));
/**
* 
*/
lt.plugins.elm_light.packages.PackageRow = quiescent.component.call(null,(function (p__18866){var map__18867 = p__18866;var map__18867__$1 = ((cljs.core.seq_QMARK_.call(null,map__18867))?cljs.core.apply.call(null,cljs.core.hash_map,map__18867):map__18867);var on_browse = cljs.core.get.call(null,map__18867__$1,new cljs.core.Keyword(null,"on-browse","on-browse",587885994));var on_remove = cljs.core.get.call(null,map__18867__$1,new cljs.core.Keyword(null,"on-remove","on-remove",1033879460));var exact = cljs.core.get.call(null,map__18867__$1,new cljs.core.Keyword(null,"exact","exact",1110851185));var range = cljs.core.get.call(null,map__18867__$1,new cljs.core.Keyword(null,"range","range",1122184367));var package$ = cljs.core.get.call(null,map__18867__$1,new cljs.core.Keyword(null,"package","package",4501809080));return quiescent.dom.tr.call(null,cljs.core.PersistentArrayMap.EMPTY,quiescent.dom.td.call(null,cljs.core.PersistentArrayMap.EMPTY,(cljs.core.truth_((function (){var and__4872__auto__ = package$;if(cljs.core.truth_(and__4872__auto__))
{return exact;
} else
{return and__4872__auto__;
}
})())?quiescent.dom.span.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",1004015509),"link",new cljs.core.Keyword(null,"onClick","onClick",3956969051),((function (map__18867,map__18867__$1,on_browse,on_remove,exact,range,package$){
return (function (){return on_browse.call(null,package$,exact);
});})(map__18867,map__18867__$1,on_browse,on_remove,exact,range,package$))
], null),package$):package$)),quiescent.dom.td.call(null,cljs.core.PersistentArrayMap.EMPTY,range),quiescent.dom.td.call(null,cljs.core.PersistentArrayMap.EMPTY,exact),quiescent.dom.td.call(null,cljs.core.PersistentArrayMap.EMPTY,(cljs.core.truth_(range)?quiescent.dom.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",3956969051),((function (map__18867,map__18867__$1,on_browse,on_remove,exact,range,package$){
return (function (){return on_remove.call(null,package$);
});})(map__18867,map__18867__$1,on_browse,on_remove,exact,range,package$))
], null),"remove"):null)));
}));
/**
* 
*/
lt.plugins.elm_light.packages.PackageTable = quiescent.component.call(null,(function (props){return quiescent.dom.table.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",1004015509),"package-table"], null),quiescent.dom.thead.call(null,cljs.core.PersistentArrayMap.EMPTY,quiescent.dom.tr.call(null,cljs.core.PersistentArrayMap.EMPTY,quiescent.dom.th.call(null,cljs.core.PersistentArrayMap.EMPTY,"Package"),quiescent.dom.th.call(null,cljs.core.PersistentArrayMap.EMPTY,"Range"),quiescent.dom.th.call(null,cljs.core.PersistentArrayMap.EMPTY,"Exact"),quiescent.dom.th.call(null,cljs.core.PersistentArrayMap.EMPTY,""))),cljs.core.apply.call(null,quiescent.dom.tbody,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__18868_SHARP_){return lt.plugins.elm_light.packages.PackageRow.call(null,cljs.core.assoc.call(null,p1__18868_SHARP_,new cljs.core.Keyword(null,"on-remove","on-remove",1033879460),new cljs.core.Keyword(null,"on-remove","on-remove",1033879460).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"on-browse","on-browse",587885994),new cljs.core.Keyword(null,"on-browse","on-browse",587885994).cljs$core$IFn$_invoke$arity$1(props)));
}),new cljs.core.Keyword(null,"packages","packages",1764771935).cljs$core$IFn$_invoke$arity$1(props))));
}));
/**
* 
*/
lt.plugins.elm_light.packages.ProjectPackages = quiescent.component.call(null,(function (props){return quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",1004015509),"project-packages"], null),quiescent.dom.h1.call(null,cljs.core.PersistentArrayMap.EMPTY,[cljs.core.str(lt.objs.files.basename.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(props))),cljs.core.str(" - packages")].join('')),lt.plugins.elm_light.packages.PackageTable.call(null,props),quiescent.dom.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",3956969051),(function (){return new cljs.core.Keyword(null,"on-pkg-refresh","on-pkg-refresh",1806751838).cljs$core$IFn$_invoke$arity$1(props).call(null);
})], null),"Refresh packages"),quiescent.dom.button.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",3956969051),(function (){return new cljs.core.Keyword(null,"on-show-graph","on-show-graph",4544855710).cljs$core$IFn$_invoke$arity$1(props).call(null);
}),new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",2984838727),"10px"], null)], null),"Show dependency graph"),lt.plugins.elm_light.packages.AddPackageForm.call(null,props));
}));
lt.plugins.elm_light.packages.render = (function render(props){return quiescent.render.call(null,lt.plugins.elm_light.packages.ProjectPackages.call(null,cljs.core.merge.call(null,props,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"path","path",1017337751),new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.elm_light.packages.elm_packages)),new cljs.core.Keyword(null,"packages","packages",1764771935),new cljs.core.Keyword(null,"packages","packages",1764771935).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.elm_light.packages.elm_packages)),new cljs.core.Keyword(null,"on-pkg-refresh","on-pkg-refresh",1806751838),lt.plugins.elm_light.packages.on_pkg_refresh,new cljs.core.Keyword(null,"on-remove","on-remove",1033879460),lt.plugins.elm_light.packages.on_remove_pkg,new cljs.core.Keyword(null,"on-browse","on-browse",587885994),lt.plugins.elm_light.packages.on_pkg_browse,new cljs.core.Keyword(null,"on-show-graph","on-show-graph",4544855710),lt.plugins.elm_light.packages.on_show_graph,new cljs.core.Keyword(null,"ac-props","ac-props",1626585975),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-add-package","on-add-package",3601701790),new cljs.core.Keyword(null,"on-select","on-select",1062468636),new cljs.core.Keyword(null,"items","items",1114430258),new cljs.core.Keyword(null,"on-cancel","on-cancel",600765850),new cljs.core.Keyword(null,"on-blur","on-blur",3936357127),new cljs.core.Keyword(null,"on-change","on-change",606853840),new cljs.core.Keyword(null,"version","version",1365512266),new cljs.core.Keyword(null,"on-change-version","on-change-version",822058203),new cljs.core.Keyword(null,"on-down","on-down",3936419650),new cljs.core.Keyword(null,"on-up","on-up",1119739067),new cljs.core.Keyword(null,"versions","versions",3323818509),new cljs.core.Keyword(null,"value","value",1125876963)],[lt.plugins.elm_light.packages.on_add_package,lt.plugins.elm_light.packages.on_pkg_sel,new cljs.core.Keyword(null,"ac-packages","ac-packages",1548109226).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.elm_light.packages.elm_packages)),lt.plugins.elm_light.packages.on_pkg_cancel,lt.plugins.elm_light.packages.on_pkg_blur,lt.plugins.elm_light.packages.on_pkg_change,new cljs.core.Keyword(null,"ac-version","ac-version",2051259807).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.elm_light.packages.elm_packages)),lt.plugins.elm_light.packages.on_change_version,lt.plugins.elm_light.packages.on_pkg_down,lt.plugins.elm_light.packages.on_pkg_up,new cljs.core.Keyword(null,"ac-versions","ac-versions",3107155800).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.elm_light.packages.elm_packages)),new cljs.core.Keyword(null,"ac-package","ac-package",892589325).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.elm_light.packages.elm_packages))]),new cljs.core.Keyword(null,"all-packages","all-packages",1123981067),new cljs.core.Keyword(null,"all-packages","all-packages",1123981067).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.elm_light.packages.elm_packages))], null))),document.getElementById("project-packages-wrapper"));
});
lt.plugins.elm_light.packages.__BEH__on_close_project_packages = (function __BEH__on_close_project_packages(this$){return lt.objs.tabs.rem_BANG_.call(null,this$);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.packages","on-close-project-packages","lt.plugins.elm-light.packages/on-close-project-packages",801429622),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.packages.__BEH__on_close_project_packages,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));
lt.plugins.elm_light.packages.__BEH__show_project_packages = (function __BEH__show_project_packages(this$,path){lt.objs.tabs.add_or_focus_BANG_.call(null,lt.plugins.elm_light.packages.elm_packages);
lt.object.assoc_in_BANG_.call(null,lt.plugins.elm_light.packages.elm_packages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ac-packages","ac-packages",1548109226)], null),null);
lt.object.assoc_in_BANG_.call(null,lt.plugins.elm_light.packages.elm_packages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ac-package","ac-package",892589325)], null),null);
lt.object.assoc_in_BANG_.call(null,lt.plugins.elm_light.packages.elm_packages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ac-versions","ac-versions",3107155800)], null),cljs.core.PersistentVector.EMPTY);
lt.object.assoc_in_BANG_.call(null,lt.plugins.elm_light.packages.elm_packages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ac-version","ac-version",2051259807)], null),null);
lt.object.assoc_in_BANG_.call(null,lt.plugins.elm_light.packages.elm_packages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",1017337751)], null),path);
lt.object.assoc_in_BANG_.call(null,lt.plugins.elm_light.packages.elm_packages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"packages","packages",1764771935)], null),lt.plugins.elm_light.utils.get_project_deps.call(null,path));
return lt.plugins.elm_light.packages.render.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.packages","show-project-packages","lt.plugins.elm-light.packages/show-project-packages",999583331),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.packages.__BEH__show_project_packages,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elm.show.project.packages","elm.show.project.packages",3385102109),null], null), null));
lt.plugins.elm_light.packages.elm_packages = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.elm-light.packages","elm-packages","lt.plugins.elm-light.packages/elm-packages",4552372902));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"show-elm-project-packages","show-elm-project-packages",3767469994),new cljs.core.Keyword(null,"desc","desc",1016984067),"Elm: Show project packages",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;var temp__4092__auto____$1 = lt.plugins.elm_light.utils.project_path.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed))));if(cljs.core.truth_(temp__4092__auto____$1))
{var path = temp__4092__auto____$1;return lt.object.raise.call(null,lt.plugins.elm_light.packages.elm_packages,new cljs.core.Keyword(null,"elm.show.project.packages","elm.show.project.packages",3385102109),path);
} else
{return null;
}
} else
{return null;
}
})], null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.elm-light.inline-doc')) {
goog.provide('lt.plugins.elm_light.inline_doc');
goog.require('cljs.core');
goog.require('lt.objs.files');
goog.require('lt.plugins.elm_light.utils');
goog.require('lt.util.dom');
goog.require('lt.plugins.elm_light.utils');
goog.require('lt.objs.browser');
goog.require('lt.util.dom');
goog.require('lt.objs.files');
goog.require('lt.objs.browser');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.editor');
lt.plugins.elm_light.inline_doc.marked = require(lt.objs.files.join.call(null,lt.plugins.elm_light.utils.elm_plugin_dir,"node_modules","marked"));
lt.plugins.elm_light.inline_doc.doc_ui_header = (function doc_ui_header(doc){var e__6289__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.inline-doc","div.inline-doc",3323486451),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(doc)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",1013907516),new cljs.core.Keyword(null,"ns","ns",1013907767).cljs$core$IFn$_invoke$arity$1(doc)], null),(cljs.core.truth_((function (){var and__4872__auto__ = new cljs.core.Keyword(null,"args","args",1016906831).cljs$core$IFn$_invoke$arity$1(doc);if(cljs.core.truth_(and__4872__auto__))
{return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"args","args",1016906831).cljs$core$IFn$_invoke$arity$1(doc),"nil");
} else
{return and__4872__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",1013907517),new cljs.core.Keyword(null,"args","args",1016906831).cljs$core$IFn$_invoke$arity$1(doc)], null):null)], null));var seq__18535_18567 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__18536_18568 = null;var count__18537_18569 = 0;var i__18538_18570 = 0;while(true){
if((i__18538_18570 < count__18537_18569))
{var vec__18539_18571 = cljs.core._nth.call(null,chunk__18536_18568,i__18538_18570);var ev__6290__auto___18572 = cljs.core.nth.call(null,vec__18539_18571,0,null);var func__6291__auto___18573 = cljs.core.nth.call(null,vec__18539_18571,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___18572,func__6291__auto___18573);
{
var G__18574 = seq__18535_18567;
var G__18575 = chunk__18536_18568;
var G__18576 = count__18537_18569;
var G__18577 = (i__18538_18570 + 1);
seq__18535_18567 = G__18574;
chunk__18536_18568 = G__18575;
count__18537_18569 = G__18576;
i__18538_18570 = G__18577;
continue;
}
} else
{var temp__4092__auto___18578 = cljs.core.seq.call(null,seq__18535_18567);if(temp__4092__auto___18578)
{var seq__18535_18579__$1 = temp__4092__auto___18578;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18535_18579__$1))
{var c__5632__auto___18580 = cljs.core.chunk_first.call(null,seq__18535_18579__$1);{
var G__18581 = cljs.core.chunk_rest.call(null,seq__18535_18579__$1);
var G__18582 = c__5632__auto___18580;
var G__18583 = cljs.core.count.call(null,c__5632__auto___18580);
var G__18584 = 0;
seq__18535_18567 = G__18581;
chunk__18536_18568 = G__18582;
count__18537_18569 = G__18583;
i__18538_18570 = G__18584;
continue;
}
} else
{var vec__18540_18585 = cljs.core.first.call(null,seq__18535_18579__$1);var ev__6290__auto___18586 = cljs.core.nth.call(null,vec__18540_18585,0,null);var func__6291__auto___18587 = cljs.core.nth.call(null,vec__18540_18585,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___18586,func__6291__auto___18587);
{
var G__18588 = cljs.core.next.call(null,seq__18535_18579__$1);
var G__18589 = null;
var G__18590 = 0;
var G__18591 = 0;
seq__18535_18567 = G__18588;
chunk__18536_18568 = G__18589;
count__18537_18569 = G__18590;
i__18538_18570 = G__18591;
continue;
}
}
} else
{}
}
break;
}
return e__6289__auto__;
});
lt.plugins.elm_light.inline_doc.marked_doc = (function marked_doc(md_doc){var elem = document.createElement("div");lt.util.dom.add_class.call(null,elem,"elm-inline-doc");
elem.innerHTML = lt.plugins.elm_light.inline_doc.marked.call(null,md_doc,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sanitize","sanitize",3011877851),false], null)));
return elem;
});
lt.plugins.elm_light.inline_doc.maybe_append_marked_doc = (function maybe_append_marked_doc(elem,doc){var temp__4090__auto__ = new cljs.core.Keyword(null,"doc","doc",1014003882).cljs$core$IFn$_invoke$arity$1(doc);if(cljs.core.truth_(temp__4090__auto__))
{var md_str = temp__4090__auto__;lt.util.dom.append.call(null,elem,lt.plugins.elm_light.inline_doc.marked_doc.call(null,md_str));
return elem;
} else
{return elem;
}
});
lt.plugins.elm_light.inline_doc.highlight_code = (function highlight_code(container_elem){var seq__18545 = cljs.core.seq.call(null,lt.util.dom.$$.call(null,"pre > code",container_elem));var chunk__18546 = null;var count__18547 = 0;var i__18548 = 0;while(true){
if((i__18548 < count__18547))
{var code = cljs.core._nth.call(null,chunk__18546,i__18548);hljs.highlightBlock(code);
{
var G__18592 = seq__18545;
var G__18593 = chunk__18546;
var G__18594 = count__18547;
var G__18595 = (i__18548 + 1);
seq__18545 = G__18592;
chunk__18546 = G__18593;
count__18547 = G__18594;
i__18548 = G__18595;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__18545);if(temp__4092__auto__)
{var seq__18545__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18545__$1))
{var c__5632__auto__ = cljs.core.chunk_first.call(null,seq__18545__$1);{
var G__18596 = cljs.core.chunk_rest.call(null,seq__18545__$1);
var G__18597 = c__5632__auto__;
var G__18598 = cljs.core.count.call(null,c__5632__auto__);
var G__18599 = 0;
seq__18545 = G__18596;
chunk__18546 = G__18597;
count__18547 = G__18598;
i__18548 = G__18599;
continue;
}
} else
{var code = cljs.core.first.call(null,seq__18545__$1);hljs.highlightBlock(code);
{
var G__18600 = cljs.core.next.call(null,seq__18545__$1);
var G__18601 = null;
var G__18602 = 0;
var G__18603 = 0;
seq__18545 = G__18600;
chunk__18546 = G__18601;
count__18547 = G__18602;
i__18548 = G__18603;
continue;
}
}
} else
{return null;
}
}
break;
}
});
lt.plugins.elm_light.inline_doc.handle_url_click = (function handle_url_click(url){var b = (function (){var or__4884__auto__ = cljs.core.first.call(null,lt.object.by_tag.call(null,new cljs.core.Keyword(null,"browser","browser",1164844698)));if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return lt.objs.browser.add.call(null);
}
})();return lt.object.raise.call(null,b,new cljs.core.Keyword(null,"navigate!","navigate!",1766726722),url);
});
lt.plugins.elm_light.inline_doc.add_click_handlers = (function add_click_handlers(elem){var seq__18553 = cljs.core.seq.call(null,lt.util.dom.$$.call(null,"a",elem));var chunk__18554 = null;var count__18555 = 0;var i__18556 = 0;while(true){
if((i__18556 < count__18555))
{var link = cljs.core._nth.call(null,chunk__18554,i__18556);lt.util.dom.on.call(null,link,"click",((function (seq__18553,chunk__18554,count__18555,i__18556,link){
return (function (){return lt.plugins.elm_light.inline_doc.handle_url_click.call(null,lt.util.dom.attr.call(null,link,new cljs.core.Keyword(null,"href","href",1017115293)));
});})(seq__18553,chunk__18554,count__18555,i__18556,link))
);
{
var G__18604 = seq__18553;
var G__18605 = chunk__18554;
var G__18606 = count__18555;
var G__18607 = (i__18556 + 1);
seq__18553 = G__18604;
chunk__18554 = G__18605;
count__18555 = G__18606;
i__18556 = G__18607;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__18553);if(temp__4092__auto__)
{var seq__18553__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18553__$1))
{var c__5632__auto__ = cljs.core.chunk_first.call(null,seq__18553__$1);{
var G__18608 = cljs.core.chunk_rest.call(null,seq__18553__$1);
var G__18609 = c__5632__auto__;
var G__18610 = cljs.core.count.call(null,c__5632__auto__);
var G__18611 = 0;
seq__18553 = G__18608;
chunk__18554 = G__18609;
count__18555 = G__18610;
i__18556 = G__18611;
continue;
}
} else
{var link = cljs.core.first.call(null,seq__18553__$1);lt.util.dom.on.call(null,link,"click",((function (seq__18553,chunk__18554,count__18555,i__18556,link,seq__18553__$1,temp__4092__auto__){
return (function (){return lt.plugins.elm_light.inline_doc.handle_url_click.call(null,lt.util.dom.attr.call(null,link,new cljs.core.Keyword(null,"href","href",1017115293)));
});})(seq__18553,chunk__18554,count__18555,i__18556,link,seq__18553__$1,temp__4092__auto__))
);
{
var G__18612 = cljs.core.next.call(null,seq__18553__$1);
var G__18613 = null;
var G__18614 = 0;
var G__18615 = 0;
seq__18553 = G__18612;
chunk__18554 = G__18613;
count__18555 = G__18614;
i__18556 = G__18615;
continue;
}
}
} else
{return null;
}
}
break;
}
});
lt.plugins.elm_light.inline_doc.__BEH__editor__DOT__elm__DOT__doc__DOT__show_BANG_ = (function __BEH__editor__DOT__elm__DOT__doc__DOT__show_BANG_(ed,doc){if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(doc),""))
{var doc_elem = lt.plugins.elm_light.inline_doc.maybe_append_marked_doc.call(null,lt.plugins.elm_light.inline_doc.doc_ui_header.call(null,doc),doc);lt.plugins.elm_light.inline_doc.inline_doc.call(null,ed,doc_elem,new cljs.core.Keyword(null,"loc","loc",1014011570).cljs$core$IFn$_invoke$arity$1(doc));
lt.plugins.elm_light.inline_doc.highlight_code.call(null,doc_elem);
return lt.plugins.elm_light.inline_doc.add_click_handlers.call(null,doc_elem);
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.inline-doc","editor.elm.doc.show!","lt.plugins.elm-light.inline-doc/editor.elm.doc.show!",1579757949),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.inline_doc.__BEH__editor__DOT__elm__DOT__doc__DOT__show_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.elm.doc.show!","editor.elm.doc.show!",3977559543),null], null), null));
lt.plugins.elm_light.inline_doc.inline_doc = (function inline_doc(this$,doc_elem,loc){var ed = new cljs.core.Keyword(null,"ed","ed",1013907473).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));var type = new cljs.core.Keyword(null,"underline","underline",4281907774);var line = lt.objs.editor.line_handle.call(null,ed,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(loc));var res_obj = lt.object.create.call(null,new cljs.core.Keyword("lt.objs.eval","underline-result","lt.objs.eval/underline-result",1485297066),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ed","ed",1013907473),this$,new cljs.core.Keyword(null,"class","class",1108647146),"underline",new cljs.core.Keyword(null,"opts","opts",1017322386),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"result","result",4374444943),doc_elem,new cljs.core.Keyword(null,"loc","loc",1014011570),loc,new cljs.core.Keyword(null,"line","line",1017226086),line], null));lt.object.add_tags.call(null,res_obj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inline.doc","inline.doc",1790840789)], null));
lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"widgets","widgets",2354242081)], null),cljs.core.assoc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,new cljs.core.Keyword(null,"underline","underline",4281907774)], null),res_obj);
return res_obj;
});
}
if(!lt.util.load.provided_QMARK_('lt.plugins.elm-light.autocompleter.core')) {
goog.provide('lt.plugins.elm_light.autocompleter.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('lt.util.js');
goog.require('lt.util.js');
goog.require('lt.util.dom');
goog.require('cljs.core.async');
goog.require('lt.objs.context');
goog.require('lt.objs.context');
goog.require('lt.util.dom');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.keyboard');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.editor');
goog.require('cljs.core.async');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.keyboard');
lt.plugins.elm_light.autocompleter.core.curr_time = (function curr_time(){return (new Date()).getTime();
});
lt.plugins.elm_light.autocompleter.core.elapsed = (function elapsed(start){return [cljs.core.str((lt.plugins.elm_light.autocompleter.core.curr_time.call(null) - start)),cljs.core.str(" ms")].join('');
});
lt.plugins.elm_light.autocompleter.core.default_options = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"async","async",1107031534),true,new cljs.core.Keyword(null,"completeSingle","completeSingle",2100037203),false,new cljs.core.Keyword(null,"supportsSelection","supportsSelection",3475218138),true,new cljs.core.Keyword(null,"closeOnUnfocus","closeOnUnfocus",2215570266),true,new cljs.core.Keyword(null,"customKeys","customKeys",3726901367),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"Up","Up",1013906989),(function (p1__18961_SHARP_,p2__18960_SHARP_){return p2__18960_SHARP_.moveFocus.call(null,-1);
}),new cljs.core.Keyword(null,"Down","Down",1016040500),(function (p1__18963_SHARP_,p2__18962_SHARP_){return p2__18962_SHARP_.moveFocus.call(null,1);
}),new cljs.core.Keyword(null,"Enter","Enter",1081018922),(function (a,b){return b.pick();
}),new cljs.core.Keyword(null,"Tab","Tab",1013988071),(function (a,b){return b.pick();
}),new cljs.core.Keyword(null,"Esc","Esc",1013974215),(function (p1__18965_SHARP_,p2__18964_SHARP_){return p2__18964_SHARP_.close.call(null);
})], null)], null);
lt.plugins.elm_light.autocompleter.core.distinct_completions = (function distinct_completions(hints){var seen = {};return cljs.core.filter.call(null,((function (seen){
return (function (hint){if((seen[new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(hint)]) === true)
{return false;
} else
{return (seen[new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(hint)] = true);
}
});})(seen))
,hints);
});
/**
* Prepare found hints for display through CM showHint
*/
lt.plugins.elm_light.autocompleter.core.process_hint_results = (function process_hint_results(hints){if(cljs.core.seq.call(null,hints))
{return cljs.core.clj__GT_js.call(null,(function (p1__18967_SHARP_){var fst = cljs.core.first.call(null,new cljs.core.Keyword(null,"list","list",1017226256).cljs$core$IFn$_invoke$arity$1(p1__18967_SHARP_));return cljs.core.assoc.call(null,p1__18967_SHARP_,new cljs.core.Keyword(null,"from","from",1017056028),new cljs.core.Keyword(null,"from","from",1017056028).cljs$core$IFn$_invoke$arity$1(fst),new cljs.core.Keyword(null,"to","to",1013907949),new cljs.core.Keyword(null,"to","to",1013907949).cljs$core$IFn$_invoke$arity$1(fst));
}).call(null,cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"list","list",1017226256)],[cljs.core.take.call(null,25,cljs.core.filter.call(null,(function (p1__18966_SHARP_){return (new cljs.core.Keyword(null,"displayText","displayText",2728236161).cljs$core$IFn$_invoke$arity$1(p1__18966_SHARP_).length < 1000);
}),hints))])));
} else
{return null;
}
});
/**
* Listen for hint results from all given channels
* Will raise a behavior to show results when all channels have delivered a result
* or alternatively the specified timeout has elapsed
*/
lt.plugins.elm_light.autocompleter.core.listen_for_hint_results = (function listen_for_hint_results(ed,channels,hinter_ch){var t = cljs.core.async.timeout.call(null,500);var c__13487__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13487__auto__,t){
return (function (){var f__13488__auto__ = (function (){var switch__13417__auto__ = ((function (c__13487__auto__,t){
return (function (state_19053){var state_val_19054 = (state_19053[1]);if((state_val_19054 === 1))
{var inst_19022 = cljs.core.conj.call(null,channels,t);var inst_19023 = cljs.core.PersistentVector.EMPTY;var inst_19024 = inst_19022;var state_19053__$1 = (function (){var statearr_19055 = state_19053;(statearr_19055[7] = inst_19024);
(statearr_19055[8] = inst_19023);
return statearr_19055;
})();var statearr_19056_19114 = state_19053__$1;(statearr_19056_19114[2] = null);
(statearr_19056_19114[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19054 === 2))
{var inst_19024 = (state_19053[7]);var inst_19026 = cljs.core.count.call(null,inst_19024);var inst_19027 = cljs.core._EQ_.call(null,1,inst_19026);var state_19053__$1 = state_19053;if(inst_19027)
{var statearr_19057_19115 = state_19053__$1;(statearr_19057_19115[1] = 4);
} else
{var statearr_19058_19116 = state_19053__$1;(statearr_19058_19116[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19054 === 3))
{var inst_19051 = (state_19053[2]);var state_19053__$1 = state_19053;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19053__$1,inst_19051);
} else
{if((state_val_19054 === 4))
{var inst_19023 = (state_19053[8]);var inst_19029 = cljs.core.async.put_BANG_.call(null,hinter_ch,inst_19023);var state_19053__$1 = state_19053;var statearr_19059_19117 = state_19053__$1;(statearr_19059_19117[2] = inst_19029);
(statearr_19059_19117[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19054 === 5))
{var inst_19024 = (state_19053[7]);var state_19053__$1 = state_19053;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_19053__$1,7,inst_19024);
} else
{if((state_val_19054 === 6))
{var inst_19049 = (state_19053[2]);var state_19053__$1 = state_19053;var statearr_19060_19118 = state_19053__$1;(statearr_19060_19118[2] = inst_19049);
(statearr_19060_19118[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19054 === 7))
{var inst_19035 = (state_19053[9]);var inst_19033 = (state_19053[2]);var inst_19034 = cljs.core.nth.call(null,inst_19033,0,null);var inst_19035__$1 = cljs.core.nth.call(null,inst_19033,1,null);var inst_19036 = (inst_19035__$1 === t);var state_19053__$1 = (function (){var statearr_19061 = state_19053;(statearr_19061[9] = inst_19035__$1);
(statearr_19061[10] = inst_19034);
return statearr_19061;
})();if(cljs.core.truth_(inst_19036))
{var statearr_19062_19119 = state_19053__$1;(statearr_19062_19119[1] = 8);
} else
{var statearr_19063_19120 = state_19053__$1;(statearr_19063_19120[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19054 === 8))
{var inst_19023 = (state_19053[8]);var inst_19038 = cljs.core.println.call(null,"WARNING: Timeout waiting for hinter provider channel results");var inst_19039 = cljs.core.async.put_BANG_.call(null,hinter_ch,inst_19023);var state_19053__$1 = (function (){var statearr_19064 = state_19053;(statearr_19064[11] = inst_19038);
return statearr_19064;
})();var statearr_19065_19121 = state_19053__$1;(statearr_19065_19121[2] = inst_19039);
(statearr_19065_19121[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19054 === 9))
{var inst_19024 = (state_19053[7]);var inst_19023 = (state_19053[8]);var inst_19035 = (state_19053[9]);var inst_19034 = (state_19053[10]);var inst_19041 = cljs.core.into.call(null,inst_19023,inst_19034);var inst_19042 = [inst_19035];var inst_19043 = cljs.core.PersistentHashSet.fromArray.call(null,inst_19042,true);var inst_19044 = cljs.core.remove.call(null,inst_19043,inst_19024);var inst_19023__$1 = inst_19041;var inst_19024__$1 = inst_19044;var state_19053__$1 = (function (){var statearr_19066 = state_19053;(statearr_19066[7] = inst_19024__$1);
(statearr_19066[8] = inst_19023__$1);
return statearr_19066;
})();var statearr_19067_19122 = state_19053__$1;(statearr_19067_19122[2] = null);
(statearr_19067_19122[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19054 === 10))
{var inst_19047 = (state_19053[2]);var state_19053__$1 = state_19053;var statearr_19068_19123 = state_19053__$1;(statearr_19068_19123[2] = inst_19047);
(statearr_19068_19123[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
});})(c__13487__auto__,t))
;return ((function (switch__13417__auto__,c__13487__auto__,t){
return (function() {
var state_machine__13418__auto__ = null;
var state_machine__13418__auto____0 = (function (){var statearr_19072 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19072[0] = state_machine__13418__auto__);
(statearr_19072[1] = 1);
return statearr_19072;
});
var state_machine__13418__auto____1 = (function (state_19053){while(true){
var ret_value__13419__auto__ = (function (){try{while(true){
var result__13420__auto__ = switch__13417__auto__.call(null,state_19053);if(cljs.core.keyword_identical_QMARK_.call(null,result__13420__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13420__auto__;
}
break;
}
}catch (e19073){if((e19073 instanceof Object))
{var ex__13421__auto__ = e19073;var statearr_19074_19124 = state_19053;(statearr_19074_19124[5] = ex__13421__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19053);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19073;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13419__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19125 = state_19053;
state_19053 = G__19125;
continue;
}
} else
{return ret_value__13419__auto__;
}
break;
}
});
state_machine__13418__auto__ = function(state_19053){
switch(arguments.length){
case 0:
return state_machine__13418__auto____0.call(this);
case 1:
return state_machine__13418__auto____1.call(this,state_19053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13418__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13418__auto____0;
state_machine__13418__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13418__auto____1;
return state_machine__13418__auto__;
})()
;})(switch__13417__auto__,c__13487__auto__,t))
})();var state__13489__auto__ = (function (){var statearr_19075 = f__13488__auto__.call(null);(statearr_19075[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13487__auto__);
return statearr_19075;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13489__auto__);
});})(c__13487__auto__,t))
);
return c__13487__auto__;
});
lt.plugins.elm_light.autocompleter.core.completion_active_QMARK_ = (function completion_active_QMARK_(ed){return lt.objs.editor.__GT_cm_ed.call(null,ed).state.completionActive;
});
lt.plugins.elm_light.autocompleter.core.maybe_close_hinter = (function maybe_close_hinter(ed){var temp__4092__auto__ = lt.plugins.elm_light.autocompleter.core.completion_active_QMARK_.call(null,ed);if(cljs.core.truth_(temp__4092__auto__))
{var state = temp__4092__auto__;return state.close();
} else
{return null;
}
});
lt.plugins.elm_light.autocompleter.core.on_line_change = (function on_line_change(line,ch){var ed = lt.objs.editor.pool.last_active.call(null);if(cljs.core.not.call(null,lt.plugins.elm_light.autocompleter.core.completion_active_QMARK_.call(null,ed)))
{return CodeMirror.off(line,"change",on_line_change);
} else
{if(cljs.core._EQ_.call(null,"+delete",ch.origin))
{return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"start-hinting","start-hinting",3115741442));
} else
{return null;
}
}
});
/**
* Creates a channel for writing results that are to be popped up with the hinter ui
* Displays hint results async by calling the showHint plugin callback when
* results are received on the channel
*/
lt.plugins.elm_light.autocompleter.core.init_show_hint_ch = (function init_show_hint_ch(ed){var ch = cljs.core.async.chan.call(null);CodeMirror.showHint(lt.objs.editor.__GT_cm_ed.call(null,ed),((function (ch){
return (function (_,cb){var c__13487__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13487__auto__,ch){
return (function (){var f__13488__auto__ = (function (){var switch__13417__auto__ = ((function (c__13487__auto__,ch){
return (function (state_19095){var state_val_19096 = (state_19095[1]);if((state_val_19096 === 2))
{var inst_19091 = (state_19095[2]);var inst_19092 = lt.plugins.elm_light.autocompleter.core.process_hint_results.call(null,inst_19091);var inst_19093 = cb.call(null,inst_19092);var state_19095__$1 = state_19095;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19095__$1,inst_19093);
} else
{if((state_val_19096 === 1))
{var state_19095__$1 = state_19095;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19095__$1,2,ch);
} else
{return null;
}
}
});})(c__13487__auto__,ch))
;return ((function (switch__13417__auto__,c__13487__auto__,ch){
return (function() {
var state_machine__13418__auto__ = null;
var state_machine__13418__auto____0 = (function (){var statearr_19100 = [null,null,null,null,null,null,null];(statearr_19100[0] = state_machine__13418__auto__);
(statearr_19100[1] = 1);
return statearr_19100;
});
var state_machine__13418__auto____1 = (function (state_19095){while(true){
var ret_value__13419__auto__ = (function (){try{while(true){
var result__13420__auto__ = switch__13417__auto__.call(null,state_19095);if(cljs.core.keyword_identical_QMARK_.call(null,result__13420__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13420__auto__;
}
break;
}
}catch (e19101){if((e19101 instanceof Object))
{var ex__13421__auto__ = e19101;var statearr_19102_19126 = state_19095;(statearr_19102_19126[5] = ex__13421__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19095);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19101;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13419__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19127 = state_19095;
state_19095 = G__19127;
continue;
}
} else
{return ret_value__13419__auto__;
}
break;
}
});
state_machine__13418__auto__ = function(state_19095){
switch(arguments.length){
case 0:
return state_machine__13418__auto____0.call(this);
case 1:
return state_machine__13418__auto____1.call(this,state_19095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13418__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13418__auto____0;
state_machine__13418__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13418__auto____1;
return state_machine__13418__auto__;
})()
;})(switch__13417__auto__,c__13487__auto__,ch))
})();var state__13489__auto__ = (function (){var statearr_19103 = f__13488__auto__.call(null);(statearr_19103[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13487__auto__);
return statearr_19103;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13489__auto__);
});})(c__13487__auto__,ch))
);
return c__13487__auto__;
});})(ch))
,cljs.core.clj__GT_js.call(null,lt.plugins.elm_light.autocompleter.core.default_options));
return ch;
});
lt.plugins.elm_light.autocompleter.core.__BEH__start_hinting = (function __BEH__start_hinting(ed){var pos = lt.objs.editor.__GT_cursor.call(null,ed);var line_handle = lt.objs.editor.line_handle.call(null,ed,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(pos));var chs = lt.object.raise_reduce.call(null,ed,new cljs.core.Keyword(null,"init-hints","init-hints",4468593473),cljs.core.PersistentVector.EMPTY);CodeMirror.off(line_handle,"change",lt.plugins.elm_light.autocompleter.core.on_line_change);
if(cljs.core.seq.call(null,chs))
{lt.plugins.elm_light.autocompleter.core.listen_for_hint_results.call(null,ed,chs,lt.plugins.elm_light.autocompleter.core.init_show_hint_ch.call(null,ed));
return CodeMirror.on(line_handle,"change",lt.plugins.elm_light.autocompleter.core.on_line_change);
} else
{return lt.plugins.elm_light.autocompleter.core.maybe_close_hinter.call(null,ed);
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.autocompleter.core","start-hinting","lt.plugins.elm-light.autocompleter.core/start-hinting",540241633),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.autocompleter.core.__BEH__start_hinting,new cljs.core.Keyword(null,"desc","desc",1016984067),"Autocompleter: Start hinting",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"start-hinting","start-hinting",3115741442),null], null), null));
lt.plugins.elm_light.autocompleter.core.__BEH__auto_show_on_input = (function __BEH__auto_show_on_input(ed,_,ch){return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"start-hinting","start-hinting",3115741442));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.autocompleter.core","auto-show-on-input","lt.plugins.elm-light.autocompleter.core/auto-show-on-input",3970467043),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.autocompleter.core.__BEH__auto_show_on_input,new cljs.core.Keyword(null,"desc","desc",1016984067),"Autocompleter: Show on change",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",1114262332),null], null), null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.elm-light.selection')) {
goog.provide('lt.plugins.elm_light.selection');
goog.require('cljs.core');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor');
lt.plugins.elm_light.selection.indented_QMARK_ = (function indented_QMARK_(s){return (cljs.core.count.call(null,cljs.core.re_find.call(null,/\s*/,s)) > 0);
});
lt.plugins.elm_light.selection.comment_line_QMARK_ = (function comment_line_QMARK_(ed,l){return cljs.core._EQ_.call(null,"comment",new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(lt.objs.editor.__GT_token.call(null,ed,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),l,new cljs.core.Keyword(null,"ch","ch",1013907415),1], null))));
});
lt.plugins.elm_light.selection.no_content_line_QMARK_ = (function no_content_line_QMARK_(s){return (!((s == null))) && (cljs.core._EQ_.call(null,0,cljs.core.count.call(null,s.trim())));
});
lt.plugins.elm_light.selection.top_level_line_QMARK_ = (function top_level_line_QMARK_(ed,l){var line_str = lt.objs.editor.line.call(null,ed,l);return (!(lt.plugins.elm_light.selection.indented_QMARK_.call(null,line_str))) && (!(lt.plugins.elm_light.selection.no_content_line_QMARK_.call(null,line_str))) && (!(lt.plugins.elm_light.selection.comment_line_QMARK_.call(null,ed,l)));
});
lt.plugins.elm_light.selection.get_top_level_line_back = (function get_top_level_line_back(ed,pos){var line = new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(pos);while(true){
if(lt.plugins.elm_light.selection.top_level_line_QMARK_.call(null,ed,line))
{return line;
} else
{if(cljs.core._EQ_.call(null,0,line))
{return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__18925 = (line - 1);
line = G__18925;
continue;
}
} else
{return null;
}
}
}
break;
}
});
lt.plugins.elm_light.selection.get_top_level_line_down = (function get_top_level_line_down(ed,start_line){var last_line = lt.objs.editor.last_line.call(null,ed);var line = start_line;while(true){
if(lt.plugins.elm_light.selection.top_level_line_QMARK_.call(null,ed,line))
{return line;
} else
{if(cljs.core._EQ_.call(null,line,last_line))
{return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__18926 = (line + 1);
line = G__18926;
continue;
}
} else
{return null;
}
}
}
break;
}
});
lt.plugins.elm_light.selection.maybe_backup = (function maybe_backup(ed,l){var line = l;while(true){
if((lt.plugins.elm_light.selection.no_content_line_QMARK_.call(null,lt.objs.editor.line.call(null,ed,line))) || (lt.plugins.elm_light.selection.comment_line_QMARK_.call(null,ed,line)))
{{
var G__18927 = (line - 1);
line = G__18927;
continue;
}
} else
{return line;
}
break;
}
});
lt.plugins.elm_light.selection.get_top_level_expr = (function get_top_level_expr(ed,pos){var temp__4092__auto__ = lt.plugins.elm_light.selection.get_top_level_line_back.call(null,ed,pos);if(cljs.core.truth_(temp__4092__auto__))
{var start_line = temp__4092__auto__;var last_line = lt.objs.editor.last_line.call(null,ed);var end_line = lt.plugins.elm_light.selection.maybe_backup.call(null,ed,((cljs.core._EQ_.call(null,last_line,start_line))?start_line:(function (){var temp__4090__auto__ = lt.plugins.elm_light.selection.get_top_level_line_down.call(null,ed,(start_line + 1));if(cljs.core.truth_(temp__4090__auto__))
{var l = temp__4090__auto__;return (l - 1);
} else
{return last_line;
}
})()));return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1017056028),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),start_line,new cljs.core.Keyword(null,"ch","ch",1013907415),0], null),new cljs.core.Keyword(null,"to","to",1013907949),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),end_line,new cljs.core.Keyword(null,"ch","ch",1013907415),lt.objs.editor.line_length.call(null,ed,end_line)], null)], null);
} else
{return null;
}
});
}
if(!lt.util.load.provided_QMARK_('lt.plugins.elm-light.clients')) {
goog.provide('lt.plugins.elm_light.clients');
goog.require('cljs.core');
goog.require('lt.objs.files');
goog.require('lt.plugins.elm_light.utils');
goog.require('lt.objs.clients');
goog.require('lt.plugins.elm_light.utils');
goog.require('lt.objs.notifos');
goog.require('lt.objs.proc');
goog.require('lt.objs.notifos');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.files');
goog.require('lt.objs.sidebar.clients');
goog.require('lt.objs.eval');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.console');
goog.require('lt.objs.proc');
goog.require('lt.objs.console');
goog.require('lt.plugins.elm_light.elm_ast');
goog.require('lt.plugins.elm_light.elm_ast');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.sidebar.clients');
lt.plugins.elm_light.clients.cp = require("child_process");
lt.plugins.elm_light.clients.os = require("os");
lt.plugins.elm_light.clients.elm_client_path = lt.objs.files.join.call(null,lt.plugins.elm_light.utils.elm_plugin_dir,"node/elm-client.js");
lt.plugins.elm_light.clients.elm_node_path = lt.objs.files.join.call(null,lt.plugins.elm_light.utils.elm_plugin_dir,"node_modules");
lt.plugins.elm_light.clients.harbor = require(lt.objs.files.join.call(null,lt.plugins.elm_light.clients.elm_node_path,"harbor")).call(null,3000,4000);
lt.plugins.elm_light.clients.claim_reactor_port = (function claim_reactor_port(path,cb){return lt.plugins.elm_light.clients.harbor.claim(path,cb);
});
lt.plugins.elm_light.clients.release_reactor_port = (function release_reactor_port(path){return lt.plugins.elm_light.clients.harbor.release(path);
});
lt.plugins.elm_light.clients.on_exit = (function on_exit(client){lt.plugins.elm_light.elm_ast.delete_project_ast_BANG_.call(null,new cljs.core.Keyword(null,"dir","dir",1014003711).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client)));
var seq__11758_11781 = cljs.core.seq.call(null,lt.objs.editor.pool.containing_path.call(null,new cljs.core.Keyword(null,"dir","dir",1014003711).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client))));var chunk__11759_11782 = null;var count__11760_11783 = 0;var i__11761_11784 = 0;while(true){
if((i__11761_11784 < count__11760_11783))
{var ed_11785 = cljs.core._nth.call(null,chunk__11759_11782,i__11761_11784);lt.object.raise.call(null,ed_11785,new cljs.core.Keyword(null,"project-disconnected","project-disconnected",2085293025));
{
var G__11786 = seq__11758_11781;
var G__11787 = chunk__11759_11782;
var G__11788 = count__11760_11783;
var G__11789 = (i__11761_11784 + 1);
seq__11758_11781 = G__11786;
chunk__11759_11782 = G__11787;
count__11760_11783 = G__11788;
i__11761_11784 = G__11789;
continue;
}
} else
{var temp__4092__auto___11790 = cljs.core.seq.call(null,seq__11758_11781);if(temp__4092__auto___11790)
{var seq__11758_11791__$1 = temp__4092__auto___11790;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11758_11791__$1))
{var c__5632__auto___11792 = cljs.core.chunk_first.call(null,seq__11758_11791__$1);{
var G__11793 = cljs.core.chunk_rest.call(null,seq__11758_11791__$1);
var G__11794 = c__5632__auto___11792;
var G__11795 = cljs.core.count.call(null,c__5632__auto___11792);
var G__11796 = 0;
seq__11758_11781 = G__11793;
chunk__11759_11782 = G__11794;
count__11760_11783 = G__11795;
i__11761_11784 = G__11796;
continue;
}
} else
{var ed_11797 = cljs.core.first.call(null,seq__11758_11791__$1);lt.object.raise.call(null,ed_11797,new cljs.core.Keyword(null,"project-disconnected","project-disconnected",2085293025));
{
var G__11798 = cljs.core.next.call(null,seq__11758_11791__$1);
var G__11799 = null;
var G__11800 = 0;
var G__11801 = 0;
seq__11758_11781 = G__11798;
chunk__11759_11782 = G__11799;
count__11760_11783 = G__11800;
i__11761_11784 = G__11801;
continue;
}
}
} else
{}
}
break;
}
lt.plugins.elm_light.clients.release_reactor_port.call(null,new cljs.core.Keyword(null,"dir","dir",1014003711).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client)));
return lt.objs.clients.rem_BANG_.call(null,client);
});
lt.plugins.elm_light.clients.on_elm_message = (function on_elm_message(client,data){var msg = cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);var logTime = (new Date());var logPrefix = [cljs.core.str(logTime.getSeconds()),cljs.core.str(":"),cljs.core.str(logTime.getMilliseconds()),cljs.core.str(" >>")].join('');if(cljs.core._EQ_.call(null,cljs.core.second.call(null,msg),"elm.client.connected"))
{lt.object.raise.call(null,client,new cljs.core.Keyword(null,"connect","connect",1965255772));
lt.object.raise.call(null,lt.objs.clients.clients,new cljs.core.Keyword(null,"connect","connect",1965255772),client);
var seq__11768 = cljs.core.seq.call(null,lt.objs.editor.pool.containing_path.call(null,new cljs.core.Keyword(null,"dir","dir",1014003711).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client))));var chunk__11769 = null;var count__11770 = 0;var i__11771 = 0;while(true){
if((i__11771 < count__11770))
{var ed = cljs.core._nth.call(null,chunk__11769,i__11771);lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"project-connected","project-connected",3474311367));
{
var G__11802 = seq__11768;
var G__11803 = chunk__11769;
var G__11804 = count__11770;
var G__11805 = (i__11771 + 1);
seq__11768 = G__11802;
chunk__11769 = G__11803;
count__11770 = G__11804;
i__11771 = G__11805;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__11768);if(temp__4092__auto__)
{var seq__11768__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11768__$1))
{var c__5632__auto__ = cljs.core.chunk_first.call(null,seq__11768__$1);{
var G__11806 = cljs.core.chunk_rest.call(null,seq__11768__$1);
var G__11807 = c__5632__auto__;
var G__11808 = cljs.core.count.call(null,c__5632__auto__);
var G__11809 = 0;
seq__11768 = G__11806;
chunk__11769 = G__11807;
count__11770 = G__11808;
i__11771 = G__11809;
continue;
}
} else
{var ed = cljs.core.first.call(null,seq__11768__$1);lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"project-connected","project-connected",3474311367));
{
var G__11810 = cljs.core.next.call(null,seq__11768__$1);
var G__11811 = null;
var G__11812 = 0;
var G__11813 = 0;
seq__11768 = G__11810;
chunk__11769 = G__11811;
count__11770 = G__11812;
i__11771 = G__11813;
continue;
}
}
} else
{return null;
}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,cljs.core.second.call(null,msg),"elm.ast.update"))
{var map__11772 = cljs.core.last.call(null,msg);var map__11772__$1 = ((cljs.core.seq_QMARK_.call(null,map__11772))?cljs.core.apply.call(null,cljs.core.hash_map,map__11772):map__11772);var package$ = cljs.core.get.call(null,map__11772__$1,new cljs.core.Keyword(null,"package","package",4501809080));var error = cljs.core.get.call(null,map__11772__$1,new cljs.core.Keyword(null,"error","error",1110689146));var ast = cljs.core.get.call(null,map__11772__$1,new cljs.core.Keyword(null,"ast","ast",1014001140));var type = cljs.core.get.call(null,map__11772__$1,new cljs.core.Keyword(null,"type","type",1017479852));var file = cljs.core.get.call(null,map__11772__$1,new cljs.core.Keyword(null,"file","file",1017047278));var G__11773 = type;if(cljs.core._EQ_.call(null,"parsed",G__11773))
{return lt.plugins.elm_light.elm_ast.upsert_ast_BANG_.call(null,new cljs.core.Keyword(null,"dir","dir",1014003711).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file","file",1017047278),file,new cljs.core.Keyword(null,"ast","ast",1014001140),ast,new cljs.core.Keyword(null,"package","package",4501809080),package$], null));
} else
{if(cljs.core._EQ_.call(null,"parseError",G__11773))
{return lt.objs.console.error.call(null,[cljs.core.str(file),cljs.core.str("\n"),cljs.core.str(error)].join(''));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.println.call(null,type,file);
} else
{return null;
}
}
}
} else
{if(cljs.core._EQ_.call(null,cljs.core.second.call(null,msg),"doc.search.results"))
{return lt.object.raise.call(null,lt.plugins.elm_light.clients.elm,new cljs.core.Keyword(null,"elm.doc.search.results","elm.doc.search.results",3225944800),cljs.core.assoc_in.call(null,msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,new cljs.core.Keyword(null,"project-dir","project-dir",4367844171)], null),new cljs.core.Keyword(null,"dir","dir",1014003711).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client))));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return lt.object.raise.call(null,lt.objs.clients.clients,new cljs.core.Keyword(null,"message","message",1968829305),msg);
} else
{return null;
}
}
}
}
});
lt.plugins.elm_light.clients.start_elm_worker = (function start_elm_worker(path,port,client){var worker = lt.plugins.elm_light.clients.cp.fork(lt.plugins.elm_light.clients.elm_client_path,[port],cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"execPath","execPath",3055801288),process.executable,new cljs.core.Keyword(null,"cwd","cwd",1014003170),path,new cljs.core.Keyword(null,"silent","silent",4406544327),true,new cljs.core.Keyword(null,"env","env",1014004831),((cljs.core._EQ_.call(null,lt.plugins.elm_light.clients.os.platform(),"win32"))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"NODE_PATH","NODE_PATH",4295742388),lt.plugins.elm_light.clients.elm_node_path], null):lt.objs.proc.merge_env.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"NODE_PATH","NODE_PATH",4295742388),lt.plugins.elm_light.clients.elm_node_path], null)))], null)));worker.stdout.on("data",((function (worker){
return (function (msg){return cljs.core.println.call(null,[cljs.core.str("out: "),cljs.core.str(msg)].join(''));
});})(worker))
);
worker.stderr.on("data",((function (worker){
return (function (err){lt.objs.notifos.set_msg_BANG_.call(null,[cljs.core.str("Elm error: "),cljs.core.str(err)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
return lt.objs.console.error.call(null,err);
});})(worker))
);
worker.on("message",((function (worker){
return (function (p1__11774_SHARP_){return lt.plugins.elm_light.clients.on_elm_message.call(null,client,p1__11774_SHARP_);
});})(worker))
);
worker.on("exit",((function (worker){
return (function (){return lt.plugins.elm_light.clients.on_exit.call(null,client);
});})(worker))
);
return worker;
});
lt.plugins.elm_light.clients.__BEH__send_BANG_ = (function __BEH__send_BANG_(client,msg){return new cljs.core.Keyword(null,"worker","worker",4526786288).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client)).send(cljs.core.clj__GT_js.call(null,msg));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.clients","send!","lt.plugins.elm-light.clients/send!",867013595),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.clients.__BEH__send_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"send!","send!",1123226891),null], null), null));
lt.plugins.elm_light.clients.start_elm_client = (function start_elm_client(p__11775){var map__11777 = p__11775;var map__11777__$1 = ((cljs.core.seq_QMARK_.call(null,map__11777))?cljs.core.apply.call(null,cljs.core.hash_map,map__11777):map__11777);var props = map__11777__$1;var client = cljs.core.get.call(null,map__11777__$1,new cljs.core.Keyword(null,"client","client",3951159101));var proj_path = cljs.core.get.call(null,map__11777__$1,new cljs.core.Keyword(null,"proj-path","proj-path",4362692615));var path = cljs.core.get.call(null,map__11777__$1,new cljs.core.Keyword(null,"path","path",1017337751));lt.objs.notifos.working.call(null,"Connecting..");
return lt.plugins.elm_light.clients.claim_reactor_port.call(null,proj_path,((function (map__11777,map__11777__$1,props,client,proj_path,path){
return (function (_,port){var worker = lt.plugins.elm_light.clients.start_elm_worker.call(null,proj_path,port,client);lt.object.merge_BANG_.call(null,client,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1017277949),lt.objs.files.basename.call(null,proj_path),new cljs.core.Keyword(null,"dir","dir",1014003711),proj_path,new cljs.core.Keyword(null,"reactor-port","reactor-port",4649590590),port,new cljs.core.Keyword(null,"worker","worker",4526786288),worker,new cljs.core.Keyword(null,"commands","commands",4706336250),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"editor.elm.lint","editor.elm.lint",1086056222),null,new cljs.core.Keyword(null,"editor.elm.make","editor.elm.make",1086078217),null,new cljs.core.Keyword(null,"editor.elm.ast.passthrough","editor.elm.ast.passthrough",3082755153),null,new cljs.core.Keyword(null,"editor.eval.elm","editor.eval.elm",1083015975),null,new cljs.core.Keyword(null,"editor.elm.hint","editor.elm.hint",1085937058),null,new cljs.core.Keyword(null,"elm.repl.restart","elm.repl.restart",2931654218),null,new cljs.core.Keyword(null,"editor.elm.ast.parsetext","editor.elm.ast.parsetext",1992138717),null,new cljs.core.Keyword(null,"docs.elm.search","docs.elm.search",737241333),null,new cljs.core.Keyword(null,"editor.elm.doc","editor.elm.doc",1570413537),null,new cljs.core.Keyword(null,"editor.elm.gendoc","editor.elm.gendoc",1485628611),null,new cljs.core.Keyword(null,"elm.reload.ast","elm.reload.ast",3046520423),null], null), null)], null));
return lt.object.add_behavior_BANG_.call(null,client,new cljs.core.Keyword("lt.plugins.elm-light.clients","send!","lt.plugins.elm-light.clients/send!",867013595));
});})(map__11777,map__11777__$1,props,client,proj_path,path))
);
});
lt.plugins.elm_light.clients.try_connect = (function try_connect(p__11778){var map__11780 = p__11778;var map__11780__$1 = ((cljs.core.seq_QMARK_.call(null,map__11780))?cljs.core.apply.call(null,cljs.core.hash_map,map__11780):map__11780);var props = map__11780__$1;var info = cljs.core.get.call(null,map__11780__$1,new cljs.core.Keyword(null,"info","info",1017141280));var path = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(info);var proj_path = lt.plugins.elm_light.utils.project_path.call(null,path);var client = lt.objs.clients.client_BANG_.call(null,new cljs.core.Keyword(null,"elm-client","elm-client",1622336068));if(cljs.core.truth_(proj_path))
{lt.plugins.elm_light.clients.start_elm_client.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",1017337751),path,new cljs.core.Keyword(null,"proj-path","proj-path",4362692615),proj_path,new cljs.core.Keyword(null,"client","client",3951159101),client], null));
} else
{lt.objs.notifos.done_working.call(null);
lt.objs.notifos.set_msg_BANG_.call(null,[cljs.core.str("Couldn't find a elm-package.json in any parent of path: "),cljs.core.str(path)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
lt.objs.clients.rem_BANG_.call(null,client);
}
return client;
});
/**
* Helper method to get eval client for a given editor and command
* If none found it will try to connect
*/
lt.plugins.elm_light.clients.get_eval_client = (function get_eval_client(ed,cmd){return lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),cmd,new cljs.core.Keyword(null,"origin","origin",4300251800),ed,new cljs.core.Keyword(null,"info","info",1017141280),new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)),new cljs.core.Keyword(null,"create","create",3956577390),lt.plugins.elm_light.clients.try_connect], null));
});
/**
* Helper method to get eval client for a given editor and command
*/
lt.plugins.elm_light.clients.get_eval_client_if_connected = (function get_eval_client_if_connected(ed,cmd){return lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),cmd,new cljs.core.Keyword(null,"origin","origin",4300251800),ed,new cljs.core.Keyword(null,"info","info",1017141280),new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)),new cljs.core.Keyword(null,"create","create",3956577390),(function (opts){lt.objs.notifos.done_working.call(null,"");
return null;
})], null));
});
lt.plugins.elm_light.clients.__BEH__connect = (function __BEH__connect(this$,path){return lt.plugins.elm_light.clients.try_connect.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"info","info",1017141280),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",1017337751),path], null)], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.clients","connect","lt.plugins.elm-light.clients/connect",3850263638),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.clients.__BEH__connect,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"connect","connect",1965255772),null], null), null));
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.clients","elm-lang","lt.plugins.elm-light.clients/elm-lang",4404942079),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elm.lang","elm.lang",1176612264),null], null), null));
lt.plugins.elm_light.clients.elm = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.elm-light.clients","elm-lang","lt.plugins.elm-light.clients/elm-lang",4404942079));
lt.objs.sidebar.clients.add_connector.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),"Elm",new cljs.core.Keyword(null,"desc","desc",1016984067),"Select a directory to serve as the root of your elm project.",new cljs.core.Keyword(null,"connect","connect",1965255772),(function (){return dialogs.dir.call(null,lt.plugins.elm_light.clients.elm,new cljs.core.Keyword(null,"connect","connect",1965255772));
})], null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.elm-light.docpreview')) {
goog.provide('lt.plugins.elm_light.docpreview');
goog.require('cljs.core');
goog.require('lt.plugins.elm_light.clients');
goog.require('lt.plugins.elm_light.utils');
goog.require('lt.util.js');
goog.require('lt.util.dom');
goog.require('lt.objs.tabs');
goog.require('lt.plugins.elm_light.utils');
goog.require('lt.objs.notifos');
goog.require('lt.plugins.elm_light.clients');
goog.require('lt.objs.notifos');
goog.require('lt.util.dom');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.tabs');
goog.require('lt.objs.editor');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('lt.objs.editor.pool');
goog.require('lt.util.js');
goog.require('lt.objs.command');
lt.plugins.elm_light.docpreview.preview_skeleton = (function preview_skeleton(this$){var e__6289__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"elm-doc-preview"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"Generating elm docs, please wait a little..."], null)], null));var seq__11820_11844 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__11821_11845 = null;var count__11822_11846 = 0;var i__11823_11847 = 0;while(true){
if((i__11823_11847 < count__11822_11846))
{var vec__11824_11848 = cljs.core._nth.call(null,chunk__11821_11845,i__11823_11847);var ev__6290__auto___11849 = cljs.core.nth.call(null,vec__11824_11848,0,null);var func__6291__auto___11850 = cljs.core.nth.call(null,vec__11824_11848,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___11849,func__6291__auto___11850);
{
var G__11851 = seq__11820_11844;
var G__11852 = chunk__11821_11845;
var G__11853 = count__11822_11846;
var G__11854 = (i__11823_11847 + 1);
seq__11820_11844 = G__11851;
chunk__11821_11845 = G__11852;
count__11822_11846 = G__11853;
i__11823_11847 = G__11854;
continue;
}
} else
{var temp__4092__auto___11855 = cljs.core.seq.call(null,seq__11820_11844);if(temp__4092__auto___11855)
{var seq__11820_11856__$1 = temp__4092__auto___11855;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11820_11856__$1))
{var c__5632__auto___11857 = cljs.core.chunk_first.call(null,seq__11820_11856__$1);{
var G__11858 = cljs.core.chunk_rest.call(null,seq__11820_11856__$1);
var G__11859 = c__5632__auto___11857;
var G__11860 = cljs.core.count.call(null,c__5632__auto___11857);
var G__11861 = 0;
seq__11820_11844 = G__11858;
chunk__11821_11845 = G__11859;
count__11822_11846 = G__11860;
i__11823_11847 = G__11861;
continue;
}
} else
{var vec__11825_11862 = cljs.core.first.call(null,seq__11820_11856__$1);var ev__6290__auto___11863 = cljs.core.nth.call(null,vec__11825_11862,0,null);var func__6291__auto___11864 = cljs.core.nth.call(null,vec__11825_11862,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___11863,func__6291__auto___11864);
{
var G__11865 = cljs.core.next.call(null,seq__11820_11856__$1);
var G__11866 = null;
var G__11867 = 0;
var G__11868 = 0;
seq__11820_11844 = G__11865;
chunk__11821_11845 = G__11866;
count__11822_11846 = G__11867;
i__11823_11847 = G__11868;
continue;
}
}
} else
{}
}
break;
}
return e__6289__auto__;
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.docpreview","elmdoc","lt.plugins.elm-light.docpreview/elmdoc",1597859033),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elmdoc","elmdoc",4008535620)], null),new cljs.core.Keyword(null,"name","name",1017277949),"elmdoc",new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.elm-light.docpreview","on-close-destroy","lt.plugins.elm-light.docpreview/on-close-destroy",906178052)], null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,filename){lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1017277949)], null),cljs.core.constantly.call(null,[cljs.core.str(filename),cljs.core.str(" - Live")].join('')));
return lt.plugins.elm_light.docpreview.preview_skeleton.call(null,this$);
}));
lt.plugins.elm_light.docpreview.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___11869 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___11869))
{var ts_11870 = temp__4092__auto___11869;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_11870))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_11870);
} else
{}
} else
{}
var temp__4092__auto___11871 = new cljs.core.Keyword(null,"owner-ed","owner-ed",2677003627).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___11871))
{var ed_11872 = temp__4092__auto___11871;lt.object.assoc_in_BANG_.call(null,ed_11872,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elmdoc","elmdoc",4008535620)], null),null);
} else
{}
return lt.object.destroy_BANG_.call(null,this$);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.docpreview","on-close-destroy","lt.plugins.elm-light.docpreview/on-close-destroy",906178052),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.docpreview.__BEH__on_close_destroy,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));
lt.plugins.elm_light.docpreview.__BEH__gendoc = (function __BEH__gendoc(ed){var info = new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed));var cl = lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor.elm.gendoc","editor.elm.gendoc",1485628611),new cljs.core.Keyword(null,"origin","origin",4300251800),ed,new cljs.core.Keyword(null,"info","info",1017141280),info,new cljs.core.Keyword(null,"create","create",3956577390),lt.plugins.elm_light.clients.try_connect], null));lt.objs.notifos.working.call(null,[cljs.core.str("Starting elm doc generation for: "),cljs.core.str(new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(info))].join(''));
return lt.objs.clients.send.call(null,cl,new cljs.core.Keyword(null,"editor.elm.gendoc","editor.elm.gendoc",1485628611),cljs.core.assoc.call(null,info,new cljs.core.Keyword(null,"project-path","project-path",1907176907),lt.plugins.elm_light.utils.project_path.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(info))),new cljs.core.Keyword(null,"only","only",1017320222),ed);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.docpreview","gendoc","lt.plugins.elm-light.docpreview/gendoc",1698030579),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.docpreview.__BEH__gendoc,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gendoc","gendoc",4059359066),null], null), null),new cljs.core.Keyword(null,"description","description",3584325486),"Preview package doc for a given Elm file");
lt.plugins.elm_light.docpreview.maybe_create_elm_preview = (function maybe_create_elm_preview(elmdoc){var temp__4090__auto__ = new cljs.core.Keyword(null,"preview","preview",695719738).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,elmdoc));if(cljs.core.truth_(temp__4090__auto__))
{var preview = temp__4090__auto__;return preview;
} else
{var el = lt.object.__GT_content.call(null,elmdoc);var preview = Elm.embed(Elm.DocPreview,el,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"modules","modules",2241338105),"[]",new cljs.core.Keyword(null,"selectModule","selectModule",2877951482),""], null)));lt.object.assoc_in_BANG_.call(null,elmdoc,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"preview","preview",695719738)], null),preview);
return preview;
}
});
lt.plugins.elm_light.docpreview.__BEH__elm_gendoc_res = (function __BEH__elm_gendoc_res(ed,res){lt.objs.notifos.done_working.call(null,"Elm doc generated");
var temp__4092__auto__ = new cljs.core.Keyword(null,"elmdoc","elmdoc",4008535620).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed));if(cljs.core.truth_(temp__4092__auto__))
{var elmdoc = temp__4092__auto__;var preview = lt.plugins.elm_light.docpreview.maybe_create_elm_preview.call(null,elmdoc);preview.ports.modules.send(res);
return lt.util.js.wait.call(null,50,((function (preview,elmdoc,temp__4092__auto__){
return (function (){var seq__11830 = cljs.core.seq.call(null,lt.util.dom.$$.call(null,"pre code",lt.object.__GT_content.call(null,elmdoc)));var chunk__11831 = null;var count__11832 = 0;var i__11833 = 0;while(true){
if((i__11833 < count__11832))
{var block = cljs.core._nth.call(null,chunk__11831,i__11833);hljs.highlightBlock(block);
{
var G__11873 = seq__11830;
var G__11874 = chunk__11831;
var G__11875 = count__11832;
var G__11876 = (i__11833 + 1);
seq__11830 = G__11873;
chunk__11831 = G__11874;
count__11832 = G__11875;
i__11833 = G__11876;
continue;
}
} else
{var temp__4092__auto____$1 = cljs.core.seq.call(null,seq__11830);if(temp__4092__auto____$1)
{var seq__11830__$1 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11830__$1))
{var c__5632__auto__ = cljs.core.chunk_first.call(null,seq__11830__$1);{
var G__11877 = cljs.core.chunk_rest.call(null,seq__11830__$1);
var G__11878 = c__5632__auto__;
var G__11879 = cljs.core.count.call(null,c__5632__auto__);
var G__11880 = 0;
seq__11830 = G__11877;
chunk__11831 = G__11878;
count__11832 = G__11879;
i__11833 = G__11880;
continue;
}
} else
{var block = cljs.core.first.call(null,seq__11830__$1);hljs.highlightBlock(block);
{
var G__11881 = cljs.core.next.call(null,seq__11830__$1);
var G__11882 = null;
var G__11883 = 0;
var G__11884 = 0;
seq__11830 = G__11881;
chunk__11831 = G__11882;
count__11832 = G__11883;
i__11833 = G__11884;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(preview,elmdoc,temp__4092__auto__))
);
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.docpreview","elm-gendoc-res","lt.plugins.elm-light.docpreview/elm-gendoc-res",871221001),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.docpreview.__BEH__elm_gendoc_res,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elm.gendoc.res","elm.gendoc.res",3626116948),null], null), null));
lt.plugins.elm_light.docpreview.__BEH__gen_on_save = (function __BEH__gen_on_save(ed){return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"gendoc","gendoc",4059359066));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.docpreview","gen-on-save","lt.plugins.elm-light.docpreview/gen-on-save",713063605),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.docpreview.__BEH__gen_on_save,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"save","save",1017427183),null], null), null));
lt.plugins.elm_light.docpreview.__BEH__elm_docpreview = (function __BEH__elm_docpreview(ed){var path = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));var elmdoc_obj = (function (){var or__4884__auto__ = new cljs.core.Keyword(null,"elmdoc","elmdoc",4008535620).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed));if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.elm-light.docpreview","elmdoc","lt.plugins.elm-light.docpreview/elmdoc",1597859033),path);
}
})();lt.objs.tabs.add_or_focus_BANG_.call(null,elmdoc_obj);
lt.object.assoc_in_BANG_.call(null,ed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elmdoc","elmdoc",4008535620)], null),elmdoc_obj);
lt.object.assoc_in_BANG_.call(null,elmdoc_obj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"owner-ed","owner-ed",2677003627)], null),ed);
lt.object.add_behavior_BANG_.call(null,ed,new cljs.core.Keyword("lt.plugins.elm-light.docpreview","gen-on-save","lt.plugins.elm-light.docpreview/gen-on-save",713063605));
return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"gendoc","gendoc",4059359066));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.docpreview","elm-docpreview","lt.plugins.elm-light.docpreview/elm-docpreview",1000581284),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.docpreview.__BEH__elm_docpreview,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elm.docpreview","elm.docpreview",3479917898),null], null), null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"elm.docpreview","elm.docpreview",3479917898),new cljs.core.Keyword(null,"desc","desc",1016984067),"Elm: Preview doc for selected file",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"elm.docpreview","elm.docpreview",3479917898));
} else
{return null;
}
})], null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.elm-light.modulebrowser')) {
goog.provide('lt.plugins.elm_light.modulebrowser');
goog.require('cljs.core');
goog.require('lt.objs.sidebar.command');
goog.require('lt.objs.files');
goog.require('lt.objs.sidebar.command');
goog.require('lt.plugins.elm_light.utils');
goog.require('lt.util.dom');
goog.require('lt.objs.sidebar');
goog.require('clojure.string');
goog.require('lt.plugins.elm_light.utils');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('lt.util.dom');
goog.require('lt.objs.sidebar');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.files');
goog.require('clojure.string');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
lt.plugins.elm_light.modulebrowser.resolve_module_file = (function resolve_module_file(project_path,pck_json,package$,module,version){return cljs.core.some.call(null,(function (p1__18783_SHARP_){if(cljs.core.truth_(lt.objs.files.exists_QMARK_.call(null,p1__18783_SHARP_)))
{return p1__18783_SHARP_;
} else
{return null;
}
}),cljs.core.map.call(null,(function (p1__18782_SHARP_){return lt.objs.files.join.call(null,project_path,"elm-stuff/packages",package$,version,p1__18782_SHARP_,[cljs.core.str(clojure.string.replace.call(null,module,".",lt.objs.files.separator)),cljs.core.str(".elm")].join(''));
}),new cljs.core.Keyword(null,"source-directories","source-directories",4475397259).cljs$core$IFn$_invoke$arity$1(pck_json)));
});
lt.plugins.elm_light.modulebrowser.get_exposed_modules = (function get_exposed_modules(project_path,p__18784){var map__18786 = p__18784;var map__18786__$1 = ((cljs.core.seq_QMARK_.call(null,map__18786))?cljs.core.apply.call(null,cljs.core.hash_map,map__18786):map__18786);var exact = cljs.core.get.call(null,map__18786__$1,new cljs.core.Keyword(null,"exact","exact",1110851185));var package$ = cljs.core.get.call(null,map__18786__$1,new cljs.core.Keyword(null,"package","package",4501809080));var pck_json = lt.plugins.elm_light.utils.parse_json_file.call(null,lt.objs.files.join.call(null,project_path,"elm-stuff/packages",package$,exact,"elm-package.json"));return cljs.core.map.call(null,((function (pck_json,map__18786,map__18786__$1,exact,package$){
return (function (x){return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1017277949),x,new cljs.core.Keyword(null,"packageName","packageName",1922663267),package$,new cljs.core.Keyword(null,"version","version",1365512266),exact,new cljs.core.Keyword(null,"file","file",1017047278),lt.plugins.elm_light.modulebrowser.resolve_module_file.call(null,project_path,pck_json,package$,x,exact)], null);
});})(pck_json,map__18786,map__18786__$1,exact,package$))
,new cljs.core.Keyword(null,"exposed-modules","exposed-modules",4185867084).cljs$core$IFn$_invoke$arity$1(pck_json));
});
lt.plugins.elm_light.modulebrowser.get_package_modules = (function get_package_modules(project_path){return cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"name","name",1017277949),cljs.core.mapcat.call(null,cljs.core.partial.call(null,lt.plugins.elm_light.modulebrowser.get_exposed_modules,project_path),cljs.core.filter.call(null,new cljs.core.Keyword(null,"exact","exact",1110851185),lt.plugins.elm_light.utils.get_project_deps.call(null,project_path))));
});
lt.plugins.elm_light.modulebrowser.deduce_module_name = (function deduce_module_name(root_path,elm_file_path){return clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,elm_file_path,root_path,""),".elm",""),/^\//,""),lt.objs.files.separator,".");
});
lt.plugins.elm_light.modulebrowser.get_project_modules = (function get_project_modules(project_path){var pck_json = lt.plugins.elm_light.utils.parse_json_file.call(null,lt.objs.files.join.call(null,project_path,"elm-package.json"));return cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"name","name",1017277949),cljs.core.map.call(null,((function (pck_json){
return (function (m){return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"packageName","packageName",1922663267),lt.objs.files.basename.call(null,project_path),new cljs.core.Keyword(null,"version","version",1365512266),new cljs.core.Keyword(null,"version","version",1365512266).cljs$core$IFn$_invoke$arity$1(pck_json));
});})(pck_json))
,cljs.core.mapcat.call(null,((function (pck_json){
return (function (dir){if(cljs.core._EQ_.call(null,dir,"."))
{return cljs.core.map.call(null,((function (pck_json){
return (function (x){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),lt.plugins.elm_light.modulebrowser.deduce_module_name.call(null,"",x),new cljs.core.Keyword(null,"file","file",1017047278),lt.objs.files.join.call(null,project_path,x)], null);
});})(pck_json))
,cljs.core.filter.call(null,((function (pck_json){
return (function (p1__18787_SHARP_){return cljs.core._EQ_.call(null,lt.objs.files.ext.call(null,p1__18787_SHARP_),"elm");
});})(pck_json))
,lt.objs.files.ls.call(null,project_path)));
} else
{return cljs.core.map.call(null,((function (pck_json){
return (function (x){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),lt.plugins.elm_light.modulebrowser.deduce_module_name.call(null,lt.objs.files.join.call(null,project_path,dir),x),new cljs.core.Keyword(null,"file","file",1017047278),x], null);
});})(pck_json))
,lt.objs.files.filter_walk.call(null,((function (pck_json){
return (function (p1__18788_SHARP_){return cljs.core._EQ_.call(null,lt.objs.files.ext.call(null,p1__18788_SHARP_),"elm");
});})(pck_json))
,lt.objs.files.join.call(null,project_path,dir)));
}
});})(pck_json))
,new cljs.core.Keyword(null,"source-directories","source-directories",4475397259).cljs$core$IFn$_invoke$arity$1(pck_json))));
});
lt.plugins.elm_light.modulebrowser.get_all_modules = (function get_all_modules(project_path){return cljs.core.concat.call(null,lt.plugins.elm_light.modulebrowser.get_project_modules.call(null,project_path),lt.plugins.elm_light.modulebrowser.get_package_modules.call(null,project_path));
});
lt.plugins.elm_light.modulebrowser.wrapper = (function wrapper(this$){var e__6289__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"elm-module-browser"], null),"Retrieving modules..."], null));var seq__18795_18811 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__18796_18812 = null;var count__18797_18813 = 0;var i__18798_18814 = 0;while(true){
if((i__18798_18814 < count__18797_18813))
{var vec__18799_18815 = cljs.core._nth.call(null,chunk__18796_18812,i__18798_18814);var ev__6290__auto___18816 = cljs.core.nth.call(null,vec__18799_18815,0,null);var func__6291__auto___18817 = cljs.core.nth.call(null,vec__18799_18815,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___18816,func__6291__auto___18817);
{
var G__18818 = seq__18795_18811;
var G__18819 = chunk__18796_18812;
var G__18820 = count__18797_18813;
var G__18821 = (i__18798_18814 + 1);
seq__18795_18811 = G__18818;
chunk__18796_18812 = G__18819;
count__18797_18813 = G__18820;
i__18798_18814 = G__18821;
continue;
}
} else
{var temp__4092__auto___18822 = cljs.core.seq.call(null,seq__18795_18811);if(temp__4092__auto___18822)
{var seq__18795_18823__$1 = temp__4092__auto___18822;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18795_18823__$1))
{var c__5632__auto___18824 = cljs.core.chunk_first.call(null,seq__18795_18823__$1);{
var G__18825 = cljs.core.chunk_rest.call(null,seq__18795_18823__$1);
var G__18826 = c__5632__auto___18824;
var G__18827 = cljs.core.count.call(null,c__5632__auto___18824);
var G__18828 = 0;
seq__18795_18811 = G__18825;
chunk__18796_18812 = G__18826;
count__18797_18813 = G__18827;
i__18798_18814 = G__18828;
continue;
}
} else
{var vec__18800_18829 = cljs.core.first.call(null,seq__18795_18823__$1);var ev__6290__auto___18830 = cljs.core.nth.call(null,vec__18800_18829,0,null);var func__6291__auto___18831 = cljs.core.nth.call(null,vec__18800_18829,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___18830,func__6291__auto___18831);
{
var G__18832 = cljs.core.next.call(null,seq__18795_18823__$1);
var G__18833 = null;
var G__18834 = 0;
var G__18835 = 0;
seq__18795_18811 = G__18832;
chunk__18796_18812 = G__18833;
count__18797_18813 = G__18834;
i__18798_18814 = G__18835;
continue;
}
}
} else
{}
}
break;
}
return e__6289__auto__;
});
lt.plugins.elm_light.modulebrowser.__BEH__clear_BANG_ = (function __BEH__clear_BANG_(this$){return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"close-sidebar","close-sidebar",1108494329));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.modulebrowser","clear!","lt.plugins.elm-light.modulebrowser/clear!",830826271),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.modulebrowser.__BEH__clear_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clear!","clear!",3951036134),null], null), null));
lt.plugins.elm_light.modulebrowser.__BEH__focus_BANG_ = (function __BEH__focus_BANG_(this$){var input = lt.util.dom.$.call(null,"#elm-module-browser input");return input.focus();
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.modulebrowser","focus!","lt.plugins.elm-light.modulebrowser/focus!",876390918),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.modulebrowser.__BEH__focus_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"focus!","focus!",4039653819),null], null), null));
lt.plugins.elm_light.modulebrowser.__BEH__ensure_visible = (function __BEH__ensure_visible(this$){return lt.objs.sidebar.command.ensure_visible.call(null,this$);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.modulebrowser","ensure-visible","lt.plugins.elm-light.modulebrowser/ensure-visible",547005840),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.modulebrowser.__BEH__ensure_visible,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ensure-visible","ensure-visible",4239017301),null], null), null));
lt.plugins.elm_light.modulebrowser.__BEH__show_project_modules = (function __BEH__show_project_modules(this$,prj_path){var modules = lt.plugins.elm_light.modulebrowser.get_all_modules.call(null,prj_path);var el = lt.util.dom.$.call(null,"#elm-module-browser");var mod_browser = Elm.embed(Elm.ModuleBrowser,el,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"modzPort","modzPort",4708408779),cljs.core.PersistentVector.EMPTY], null)));mod_browser.ports.modzPort.send(cljs.core.clj__GT_js.call(null,modules));
mod_browser.ports.changeSelection.subscribe(((function (modules,el,mod_browser){
return (function (){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"ensure-visible","ensure-visible",4239017301));
});})(modules,el,mod_browser))
);
mod_browser.ports.select.subscribe(((function (modules,el,mod_browser){
return (function (file){lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"open-path","open-path",2513940794),file);
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"clear!","clear!",3951036134));
});})(modules,el,mod_browser))
);
mod_browser.ports.close.subscribe(((function (modules,el,mod_browser){
return (function (){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"clear!","clear!",3951036134));
});})(modules,el,mod_browser))
);
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"focus!","focus!",4039653819));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.modulebrowser","show-project-modules","lt.plugins.elm-light.modulebrowser/show-project-modules",4239249840),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.modulebrowser.__BEH__show_project_modules,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"show-project-modules","show-project-modules",2830590325),null], null), null));
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.modulebrowser","modulebrowser","lt.plugins.elm-light.modulebrowser/modulebrowser",2756314871),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elm.modulebrowser","elm.modulebrowser",1437552486),null], null), null),new cljs.core.Keyword(null,"label","label",1116631654),"Elm module browser",new cljs.core.Keyword(null,"order","order",1119910592),2,new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return lt.plugins.elm_light.modulebrowser.wrapper.call(null,this$);
}));
lt.plugins.elm_light.modulebrowser.module_bar = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.elm-light.modulebrowser","modulebrowser","lt.plugins.elm-light.modulebrowser/modulebrowser",2756314871));
lt.objs.sidebar.add_item.call(null,lt.objs.sidebar.rightbar,lt.plugins.elm_light.modulebrowser.module_bar);
lt.plugins.elm_light.modulebrowser.__BEH__list_modules = (function __BEH__list_modules(ed){var temp__4092__auto__ = lt.plugins.elm_light.utils.project_path.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed))));if(cljs.core.truth_(temp__4092__auto__))
{var prj_path = temp__4092__auto__;lt.object.raise.call(null,lt.objs.sidebar.rightbar,new cljs.core.Keyword(null,"toggle","toggle",4440567494),lt.plugins.elm_light.modulebrowser.module_bar);
return lt.object.raise.call(null,lt.plugins.elm_light.modulebrowser.module_bar,new cljs.core.Keyword(null,"show-project-modules","show-project-modules",2830590325),prj_path);
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.modulebrowser","list-modules","lt.plugins.elm-light.modulebrowser/list-modules",1482195219),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.modulebrowser.__BEH__list_modules,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.elm.list-modules","editor.elm.list-modules",4718639987),null], null), null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"show-modulebrowser","show-modulebrowser",3667882974),new cljs.core.Keyword(null,"desc","desc",1016984067),"Elm: Show module-browser",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.elm.list-modules","editor.elm.list-modules",4718639987));
} else
{return null;
}
})], null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.elm-light.hinter')) {
goog.provide('lt.plugins.elm_light.hinter');
goog.require('cljs.core');
goog.require('lt.plugins.elm_light.utils');
goog.require('cljs.core.async');
goog.require('lt.util.dom');
goog.require('cljs.core.async');
goog.require('lt.plugins.elm_light.utils');
goog.require('lt.util.dom');
goog.require('lt.objs.clients');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.editor');
goog.require('cljs.core.async');
goog.require('lt.plugins.elm_light.elm_ast');
goog.require('lt.plugins.elm_light.elm_ast');
goog.require('lt.objs.clients');
lt.plugins.elm_light.hinter.get_token = (function get_token(ed){var pos = lt.objs.editor.__GT_cursor.call(null,ed);var sym = lt.plugins.elm_light.utils.find_symbol.call(null,ed,pos);if(cljs.core.truth_((function (){var and__4872__auto__ = sym;if(cljs.core.truth_(and__4872__auto__))
{return cljs.core.seq.call(null,sym);
} else
{return and__4872__auto__;
}
})()))
{return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"string","string",4416885635),sym,new cljs.core.Keyword(null,"start","start",1123661780),(new cljs.core.Keyword(null,"ch","ch",1013907415).cljs$core$IFn$_invoke$arity$1(pos) - cljs.core.count.call(null,sym)),new cljs.core.Keyword(null,"end","end",1014004813),new cljs.core.Keyword(null,"ch","ch",1013907415).cljs$core$IFn$_invoke$arity$1(pos),new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(pos)], null);
} else
{return null;
}
});
lt.plugins.elm_light.hinter.__GT_hints = (function __GT_hints(token,completions){return cljs.core.map.call(null,(function (p1__15791_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"text","text",1017460895),new cljs.core.Keyword(null,"displayText","displayText",2728236161),new cljs.core.Keyword(null,"render","render",4374279432),new cljs.core.Keyword(null,"from","from",1017056028),new cljs.core.Keyword(null,"to","to",1013907949)],[new cljs.core.Keyword(null,"completion","completion",4767668046).cljs$core$IFn$_invoke$arity$1(p1__15791_SHARP_),new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(p1__15791_SHARP_),(function (el,self,data){return lt.util.dom.html.call(null,el,wrapMatch(data.displayText,{"matched": new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(token)}));
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(token)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"end","end",1014004813).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(token)], null)]);
}),completions);
});
lt.plugins.elm_light.hinter.connected_QMARK_ = (function connected_QMARK_(ed){var temp__4092__auto__ = new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));if(cljs.core.truth_(temp__4092__auto__))
{var default_client = temp__4092__auto__;if(cljs.core.truth_(cljs.core.deref.call(null,default_client)))
{return true;
} else
{return null;
}
} else
{return null;
}
});
lt.plugins.elm_light.hinter.__BEH__elm_hints = (function __BEH__elm_hints(ed,channels){var token = lt.plugins.elm_light.hinter.get_token.call(null,ed);var ch = cljs.core.async.chan.call(null);var path = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));if(cljs.core.truth_((function (){var and__4872__auto__ = token;if(cljs.core.truth_(and__4872__auto__))
{return lt.plugins.elm_light.hinter.connected_QMARK_.call(null,ed);
} else
{return and__4872__auto__;
}
})()))
{cljs.core.async.put_BANG_.call(null,ch,lt.plugins.elm_light.hinter.__GT_hints.call(null,token,lt.plugins.elm_light.elm_ast.get_hints.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"token","token",1124445547),new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(token)], null),path,lt.plugins.elm_light.utils.project_path.call(null,path))));
return cljs.core.conj.call(null,channels,ch);
} else
{return channels;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.hinter","elm-hints","lt.plugins.elm-light.hinter/elm-hints",3388910241),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.hinter.__BEH__elm_hints,new cljs.core.Keyword(null,"desc","desc",1016984067),"Provide Elm hints for current cursor position",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-hints","init-hints",4468593473),null], null), null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.elm-light.linter')) {
goog.provide('lt.plugins.elm_light.linter');
goog.require('cljs.core');
goog.require('crate.binding');
goog.require('lt.objs.statusbar');
goog.require('lt.util.dom');
goog.require('lt.util.dom');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.statusbar');
goog.require('crate.binding');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
lt.plugins.elm_light.linter.status_class = (function status_class(p__18616){var map__18618 = p__18616;var map__18618__$1 = ((cljs.core.seq_QMARK_.call(null,map__18618))?cljs.core.apply.call(null,cljs.core.hash_map,map__18618):map__18618);var warnings = cljs.core.get.call(null,map__18618__$1,new cljs.core.Keyword(null,"warnings","warnings",1511995337));var errors = cljs.core.get.call(null,map__18618__$1,new cljs.core.Keyword(null,"errors","errors",4014236381));if((errors > 0))
{return "error";
} else
{if((warnings > 0))
{return "warning";
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return "";
} else
{return null;
}
}
}
});
lt.plugins.elm_light.linter.status_text = (function status_text(p__18619){var map__18621 = p__18619;var map__18621__$1 = ((cljs.core.seq_QMARK_.call(null,map__18621))?cljs.core.apply.call(null,cljs.core.hash_map,map__18621):map__18621);var warnings = cljs.core.get.call(null,map__18621__$1,new cljs.core.Keyword(null,"warnings","warnings",1511995337));var errors = cljs.core.get.call(null,map__18621__$1,new cljs.core.Keyword(null,"errors","errors",4014236381));return [cljs.core.str("Lint status: "),cljs.core.str(errors),cljs.core.str("/"),cljs.core.str(warnings)].join('');
});
lt.plugins.elm_light.linter.__GT_status_ui = (function __GT_status_ui(p__18622){var map__18624 = p__18622;var map__18624__$1 = ((cljs.core.seq_QMARK_.call(null,map__18624))?cljs.core.apply.call(null,cljs.core.hash_map,map__18624):map__18624);var lint_summary = cljs.core.get.call(null,map__18624__$1,new cljs.core.Keyword(null,"lint-summary","lint-summary",2275048270));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("lint-status "),cljs.core.str(lt.plugins.elm_light.linter.status_class.call(null,lint_summary))].join('')], null),lt.plugins.elm_light.linter.status_text.call(null,lint_summary)], null);
});
lt.plugins.elm_light.linter.__BEH__update_lint_status = (function __BEH__update_lint_status(this$,f){return lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lint-summary","lint-summary",2275048270)], null),f);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.linter","update-lint-status","lt.plugins.elm-light.linter/update-lint-status",1465899355),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.linter.__BEH__update_lint_status,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"update!","update!",779473898),null], null), null));
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.linter","statusbar.lint-status","lt.plugins.elm-light.linter/statusbar.lint-status",2197520852),new cljs.core.Keyword(null,"triggers","triggers",2516997421),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.elm-light.linter","update-lint-status","lt.plugins.elm-light.linter/update-lint-status",1465899355),null], null), null),new cljs.core.Keyword(null,"lint-summary","lint-summary",2275048270),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"errors","errors",4014236381),0,new cljs.core.Keyword(null,"warnings","warnings",1511995337),0], null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return lt.objs.statusbar.statusbar_item.call(null,crate.binding.bound.call(null,this$,lt.plugins.elm_light.linter.__GT_status_ui),"");
}));
lt.plugins.elm_light.linter.statusbar_lint_summary = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.elm-light.linter","statusbar.lint-status","lt.plugins.elm-light.linter/statusbar.lint-status",2197520852));
lt.objs.statusbar.add_statusbar_item.call(null,lt.plugins.elm_light.linter.statusbar_lint_summary);
lt.plugins.elm_light.linter.grouped_lint_count = (function grouped_lint_count(ed){var temp__4090__auto__ = new cljs.core.Keyword(null,"linter-results","linter-results",4482067083).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed));if(cljs.core.truth_(temp__4090__auto__))
{var results = temp__4090__auto__;return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (results,temp__4090__auto__){
return (function (p__18627){var vec__18628 = p__18627;var k = cljs.core.nth.call(null,vec__18628,0,null);var v = cljs.core.nth.call(null,vec__18628,1,null);return new cljs.core.PersistentArrayMap.fromArray([k,cljs.core.count.call(null,v)], true, false);
});})(results,temp__4090__auto__))
,cljs.core.group_by.call(null,new cljs.core.Keyword(null,"category","category",1064415344),cljs.core.map.call(null,new cljs.core.Keyword(null,"result","result",4374444943),cljs.core.vals.call(null,results)))));
} else
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",1110689146),0,new cljs.core.Keyword(null,"warning","warning",2138350350),0], null);
}
});
lt.plugins.elm_light.linter.update_status_for_editor = (function update_status_for_editor(ed){var map__18631 = lt.plugins.elm_light.linter.grouped_lint_count.call(null,ed);var map__18631__$1 = ((cljs.core.seq_QMARK_.call(null,map__18631))?cljs.core.apply.call(null,cljs.core.hash_map,map__18631):map__18631);var warning = cljs.core.get.call(null,map__18631__$1,new cljs.core.Keyword(null,"warning","warning",2138350350));var error = cljs.core.get.call(null,map__18631__$1,new cljs.core.Keyword(null,"error","error",1110689146));return lt.object.raise.call(null,lt.plugins.elm_light.linter.statusbar_lint_summary,new cljs.core.Keyword(null,"update!","update!",779473898),((function (map__18631,map__18631__$1,warning,error){
return (function (p1__18629_SHARP_){return cljs.core.assoc.call(null,p1__18629_SHARP_,new cljs.core.Keyword(null,"warnings","warnings",1511995337),(function (){var or__4884__auto__ = warning;if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return 0;
}
})(),new cljs.core.Keyword(null,"errors","errors",4014236381),(function (){var or__4884__auto__ = error;if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return 0;
}
})());
});})(map__18631,map__18631__$1,warning,error))
);
});
lt.plugins.elm_light.linter.__BEH__update_linter_on_editor_change = (function __BEH__update_linter_on_editor_change(ed){return lt.plugins.elm_light.linter.update_status_for_editor.call(null,ed);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.linter","update-linter-on-editor-change","lt.plugins.elm-light.linter/update-linter-on-editor-change",2858337088),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.linter.__BEH__update_linter_on_editor_change,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"focus","focus",1111509066),null], null), null));
lt.plugins.elm_light.linter.remove_widget = (function remove_widget(ed,el){try{lt.util.dom.remove.call(null,el);
}catch (e18633){var e_18693 = e18633;}return lt.objs.editor.focus.call(null,ed);
});
lt.plugins.elm_light.linter.remove_res = (function remove_res(ed,res_id){var map__18635_18694 = cljs.core.get_in.call(null,cljs.core.deref.call(null,ed),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linter-results","linter-results",4482067083),res_id], null));var map__18635_18695__$1 = ((cljs.core.seq_QMARK_.call(null,map__18635_18694))?cljs.core.apply.call(null,cljs.core.hash_map,map__18635_18694):map__18635_18694);var dill_18696 = map__18635_18695__$1;var result_18697 = cljs.core.get.call(null,map__18635_18695__$1,new cljs.core.Keyword(null,"result","result",4374444943));var mark_18698 = cljs.core.get.call(null,map__18635_18695__$1,new cljs.core.Keyword(null,"mark","mark",1017248319));if(cljs.core.truth_(mark_18698))
{mark_18698.clear();
} else
{}
lt.object.update_BANG_.call(null,ed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linter-results","linter-results",4482067083)], null),cljs.core.dissoc,res_id);
return lt.objs.editor.focus.call(null,ed);
});
lt.plugins.elm_light.linter.current_range = (function current_range(ed,mark){var rng = mark.find();var from = rng.from;var to = rng.to;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1017056028),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",1013907415),from.ch,new cljs.core.Keyword(null,"line","line",1017226086),from.line], null),new cljs.core.Keyword(null,"to","to",1013907949),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",1013907415),to.ch,new cljs.core.Keyword(null,"line","line",1017226086),to.line], null)], null);
});
lt.plugins.elm_light.linter.execute_action = (function execute_action(ed,res_id,action_fn,res){var map__18637 = cljs.core.get_in.call(null,cljs.core.deref.call(null,ed),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linter-results","linter-results",4482067083),res_id], null));var map__18637__$1 = ((cljs.core.seq_QMARK_.call(null,map__18637))?cljs.core.apply.call(null,cljs.core.hash_map,map__18637):map__18637);var mark = cljs.core.get.call(null,map__18637__$1,new cljs.core.Keyword(null,"mark","mark",1017248319));action_fn.call(null,res,lt.plugins.elm_light.linter.current_range.call(null,ed,mark));
return lt.plugins.elm_light.linter.remove_res.call(null,ed,res_id);
});
lt.plugins.elm_light.linter.action_ui = (function action_ui(ed,action,res_id,res){var e__6289__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.button","span.button",4282180040),[cljs.core.str(new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(action))].join('')], null));var seq__18644_18699 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__6289__auto__){
return (function (){return lt.plugins.elm_light.linter.execute_action.call(null,ed,res_id,new cljs.core.Keyword(null,"action","action",3885920680).cljs$core$IFn$_invoke$arity$1(action),res);
});})(e__6289__auto__))
], null)));var chunk__18645_18700 = null;var count__18646_18701 = 0;var i__18647_18702 = 0;while(true){
if((i__18647_18702 < count__18646_18701))
{var vec__18648_18703 = cljs.core._nth.call(null,chunk__18645_18700,i__18647_18702);var ev__6290__auto___18704 = cljs.core.nth.call(null,vec__18648_18703,0,null);var func__6291__auto___18705 = cljs.core.nth.call(null,vec__18648_18703,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___18704,func__6291__auto___18705);
{
var G__18706 = seq__18644_18699;
var G__18707 = chunk__18645_18700;
var G__18708 = count__18646_18701;
var G__18709 = (i__18647_18702 + 1);
seq__18644_18699 = G__18706;
chunk__18645_18700 = G__18707;
count__18646_18701 = G__18708;
i__18647_18702 = G__18709;
continue;
}
} else
{var temp__4092__auto___18710 = cljs.core.seq.call(null,seq__18644_18699);if(temp__4092__auto___18710)
{var seq__18644_18711__$1 = temp__4092__auto___18710;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18644_18711__$1))
{var c__5632__auto___18712 = cljs.core.chunk_first.call(null,seq__18644_18711__$1);{
var G__18713 = cljs.core.chunk_rest.call(null,seq__18644_18711__$1);
var G__18714 = c__5632__auto___18712;
var G__18715 = cljs.core.count.call(null,c__5632__auto___18712);
var G__18716 = 0;
seq__18644_18699 = G__18713;
chunk__18645_18700 = G__18714;
count__18646_18701 = G__18715;
i__18647_18702 = G__18716;
continue;
}
} else
{var vec__18649_18717 = cljs.core.first.call(null,seq__18644_18711__$1);var ev__6290__auto___18718 = cljs.core.nth.call(null,vec__18649_18717,0,null);var func__6291__auto___18719 = cljs.core.nth.call(null,vec__18649_18717,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___18718,func__6291__auto___18719);
{
var G__18720 = cljs.core.next.call(null,seq__18644_18711__$1);
var G__18721 = null;
var G__18722 = 0;
var G__18723 = 0;
seq__18644_18699 = G__18720;
chunk__18645_18700 = G__18721;
count__18646_18701 = G__18722;
i__18647_18702 = G__18723;
continue;
}
}
} else
{}
}
break;
}
return e__6289__auto__;
});
lt.plugins.elm_light.linter.inline_ui = (function inline_ui(ed,res_id,p__18653){var map__18661 = p__18653;var map__18661__$1 = ((cljs.core.seq_QMARK_.call(null,map__18661))?cljs.core.apply.call(null,cljs.core.hash_map,map__18661):map__18661);var res = map__18661__$1;var actions = cljs.core.get.call(null,map__18661__$1,new cljs.core.Keyword(null,"actions","actions",4147068015));var category = cljs.core.get.call(null,map__18661__$1,new cljs.core.Keyword(null,"category","category",1064415344));var details = cljs.core.get.call(null,map__18661__$1,new cljs.core.Keyword(null,"details","details",2571625908));var title = cljs.core.get.call(null,map__18661__$1,new cljs.core.Keyword(null,"title","title",1124275658));var e__6289__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tabindex","tabindex",4410954191),-1,new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("linter-res "),cljs.core.str((function (){var or__4884__auto__ = cljs.core.name.call(null,category);if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return "error";
}
})())].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.title","p.title",3057381068),title], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.details","div.details",4139669847),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),details], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),cljs.core.map.call(null,((function (map__18661,map__18661__$1,res,actions,category,details,title){
return (function (p1__18650_SHARP_){return lt.plugins.elm_light.linter.action_ui.call(null,ed,p1__18650_SHARP_,res_id,res);
});})(map__18661,map__18661__$1,res,actions,category,details,title))
,actions)], null)], null)], null));var seq__18662_18724 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blur","blur",1016931289),((function (e__6289__auto__,map__18661,map__18661__$1,res,actions,category,details,title){
return (function (p1__18651_SHARP_){return lt.plugins.elm_light.linter.remove_widget.call(null,ed,p1__18651_SHARP_.target);
});})(e__6289__auto__,map__18661,map__18661__$1,res,actions,category,details,title))
,new cljs.core.Keyword(null,"keydown","keydown",4493897459),((function (e__6289__auto__,map__18661,map__18661__$1,res,actions,category,details,title){
return (function (p1__18652_SHARP_){var kc = p1__18652_SHARP_.keyCode;if(cljs.core._EQ_.call(null,kc,27))
{lt.plugins.elm_light.linter.remove_widget.call(null,ed,p1__18652_SHARP_.target);
} else
{}
if((cljs.core._EQ_.call(null,kc,13)) && (cljs.core.seq.call(null,actions)))
{p1__18652_SHARP_.preventDefault();
p1__18652_SHARP_.stopPropagation();
return lt.plugins.elm_light.linter.execute_action.call(null,ed,res_id,new cljs.core.Keyword(null,"action","action",3885920680).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,actions)),res);
} else
{return null;
}
});})(e__6289__auto__,map__18661,map__18661__$1,res,actions,category,details,title))
], null)));var chunk__18663_18725 = null;var count__18664_18726 = 0;var i__18665_18727 = 0;while(true){
if((i__18665_18727 < count__18664_18726))
{var vec__18666_18728 = cljs.core._nth.call(null,chunk__18663_18725,i__18665_18727);var ev__6290__auto___18729 = cljs.core.nth.call(null,vec__18666_18728,0,null);var func__6291__auto___18730 = cljs.core.nth.call(null,vec__18666_18728,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___18729,func__6291__auto___18730);
{
var G__18731 = seq__18662_18724;
var G__18732 = chunk__18663_18725;
var G__18733 = count__18664_18726;
var G__18734 = (i__18665_18727 + 1);
seq__18662_18724 = G__18731;
chunk__18663_18725 = G__18732;
count__18664_18726 = G__18733;
i__18665_18727 = G__18734;
continue;
}
} else
{var temp__4092__auto___18735 = cljs.core.seq.call(null,seq__18662_18724);if(temp__4092__auto___18735)
{var seq__18662_18736__$1 = temp__4092__auto___18735;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18662_18736__$1))
{var c__5632__auto___18737 = cljs.core.chunk_first.call(null,seq__18662_18736__$1);{
var G__18738 = cljs.core.chunk_rest.call(null,seq__18662_18736__$1);
var G__18739 = c__5632__auto___18737;
var G__18740 = cljs.core.count.call(null,c__5632__auto___18737);
var G__18741 = 0;
seq__18662_18724 = G__18738;
chunk__18663_18725 = G__18739;
count__18664_18726 = G__18740;
i__18665_18727 = G__18741;
continue;
}
} else
{var vec__18667_18742 = cljs.core.first.call(null,seq__18662_18736__$1);var ev__6290__auto___18743 = cljs.core.nth.call(null,vec__18667_18742,0,null);var func__6291__auto___18744 = cljs.core.nth.call(null,vec__18667_18742,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___18743,func__6291__auto___18744);
{
var G__18745 = cljs.core.next.call(null,seq__18662_18736__$1);
var G__18746 = null;
var G__18747 = 0;
var G__18748 = 0;
seq__18662_18724 = G__18745;
chunk__18663_18725 = G__18746;
count__18664_18726 = G__18747;
i__18665_18727 = G__18748;
continue;
}
}
} else
{}
}
break;
}
return e__6289__auto__;
});
lt.plugins.elm_light.linter.add_widget = (function add_widget(ed,res_id){var map__18669 = cljs.core.get_in.call(null,cljs.core.deref.call(null,ed),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linter-results","linter-results",4482067083),res_id], null));var map__18669__$1 = ((cljs.core.seq_QMARK_.call(null,map__18669))?cljs.core.apply.call(null,cljs.core.hash_map,map__18669):map__18669);var result = cljs.core.get.call(null,map__18669__$1,new cljs.core.Keyword(null,"result","result",4374444943));var mark = cljs.core.get.call(null,map__18669__$1,new cljs.core.Keyword(null,"mark","mark",1017248319));var ui = lt.plugins.elm_light.linter.inline_ui.call(null,ed,res_id,result);var from = mark.find().from;lt.objs.editor.__GT_cm_ed.call(null,ed).addWidget(from,ui,{"scrollIntoView": true});
return lt.util.dom.focus.call(null,ui);
});
lt.plugins.elm_light.linter.create_mark = (function create_mark(ed,p__18670){var map__18672 = p__18670;var map__18672__$1 = ((cljs.core.seq_QMARK_.call(null,map__18672))?cljs.core.apply.call(null,cljs.core.hash_map,map__18672):map__18672);var code_range = cljs.core.get.call(null,map__18672__$1,new cljs.core.Keyword(null,"code-range","code-range",3297446095));var category = cljs.core.get.call(null,map__18672__$1,new cljs.core.Keyword(null,"category","category",1064415344));var from = new cljs.core.Keyword(null,"from","from",1017056028).cljs$core$IFn$_invoke$arity$1(code_range);var to = ((!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"to","to",1013907949).cljs$core$IFn$_invoke$arity$1(code_range),from)))?new cljs.core.Keyword(null,"to","to",1013907949).cljs$core$IFn$_invoke$arity$1(code_range):cljs.core.assoc.call(null,from,new cljs.core.Keyword(null,"ch","ch",1013907415),(lt.objs.editor.line_length.call(null,ed,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(from)) - 1)));return lt.objs.editor.mark.call(null,ed,from,to,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",1004015509),[cljs.core.str("lint-"),cljs.core.str((function (){var or__4884__auto__ = cljs.core.name.call(null,category);if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return "error";
}
})())].join(''),new cljs.core.Keyword(null,"inclusiveLeft","inclusiveLeft",4040813445),false,new cljs.core.Keyword(null,"inclusiveRight","inclusiveRight",4659437314),false], null));
});
lt.plugins.elm_light.linter.__BEH__linter_result_BANG_ = (function __BEH__linter_result_BANG_(ed,res){var id = [cljs.core.str(cljs.core.gensym.call(null,"linter-res"))].join('');var mark = lt.plugins.elm_light.linter.create_mark.call(null,ed,res);mark.ltlintid = id;
mark.lttype = new cljs.core.Keyword(null,"linter","linter",4206213986);
lt.object.update_BANG_.call(null,ed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linter-results","linter-results",4482067083)], null),cljs.core.assoc,id,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mark","mark",1017248319),mark,new cljs.core.Keyword(null,"result","result",4374444943),res], null));
return lt.plugins.elm_light.linter.update_status_for_editor.call(null,ed);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.linter","linter-result!","lt.plugins.elm-light.linter/linter-result!",4030814380),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.linter.__BEH__linter_result_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"linter-result!","linter-result!",4482067001),null], null), null));
lt.plugins.elm_light.linter.__BEH__clear_linter_results_BANG_ = (function __BEH__clear_linter_results_BANG_(ed){var seq__18679_18749 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"linter-results","linter-results",4482067083).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));var chunk__18680_18750 = null;var count__18681_18751 = 0;var i__18682_18752 = 0;while(true){
if((i__18682_18752 < count__18681_18751))
{var vec__18683_18753 = cljs.core._nth.call(null,chunk__18680_18750,i__18682_18752);var id_18754 = cljs.core.nth.call(null,vec__18683_18753,0,null);var res_18755 = cljs.core.nth.call(null,vec__18683_18753,1,null);var temp__4092__auto___18756 = new cljs.core.Keyword(null,"mark","mark",1017248319).cljs$core$IFn$_invoke$arity$1(res_18755);if(cljs.core.truth_(temp__4092__auto___18756))
{var m_18757 = temp__4092__auto___18756;m_18757.clear();
} else
{}
var temp__4092__auto___18758 = new cljs.core.Keyword(null,"widget","widget",4520824246).cljs$core$IFn$_invoke$arity$1(res_18755);if(cljs.core.truth_(temp__4092__auto___18758))
{var w_18759 = temp__4092__auto___18758;lt.util.dom.remove.call(null,w_18759);
} else
{}
{
var G__18760 = seq__18679_18749;
var G__18761 = chunk__18680_18750;
var G__18762 = count__18681_18751;
var G__18763 = (i__18682_18752 + 1);
seq__18679_18749 = G__18760;
chunk__18680_18750 = G__18761;
count__18681_18751 = G__18762;
i__18682_18752 = G__18763;
continue;
}
} else
{var temp__4092__auto___18764 = cljs.core.seq.call(null,seq__18679_18749);if(temp__4092__auto___18764)
{var seq__18679_18765__$1 = temp__4092__auto___18764;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18679_18765__$1))
{var c__5632__auto___18766 = cljs.core.chunk_first.call(null,seq__18679_18765__$1);{
var G__18767 = cljs.core.chunk_rest.call(null,seq__18679_18765__$1);
var G__18768 = c__5632__auto___18766;
var G__18769 = cljs.core.count.call(null,c__5632__auto___18766);
var G__18770 = 0;
seq__18679_18749 = G__18767;
chunk__18680_18750 = G__18768;
count__18681_18751 = G__18769;
i__18682_18752 = G__18770;
continue;
}
} else
{var vec__18684_18771 = cljs.core.first.call(null,seq__18679_18765__$1);var id_18772 = cljs.core.nth.call(null,vec__18684_18771,0,null);var res_18773 = cljs.core.nth.call(null,vec__18684_18771,1,null);var temp__4092__auto___18774__$1 = new cljs.core.Keyword(null,"mark","mark",1017248319).cljs$core$IFn$_invoke$arity$1(res_18773);if(cljs.core.truth_(temp__4092__auto___18774__$1))
{var m_18775 = temp__4092__auto___18774__$1;m_18775.clear();
} else
{}
var temp__4092__auto___18776__$1 = new cljs.core.Keyword(null,"widget","widget",4520824246).cljs$core$IFn$_invoke$arity$1(res_18773);if(cljs.core.truth_(temp__4092__auto___18776__$1))
{var w_18777 = temp__4092__auto___18776__$1;lt.util.dom.remove.call(null,w_18777);
} else
{}
{
var G__18778 = cljs.core.next.call(null,seq__18679_18765__$1);
var G__18779 = null;
var G__18780 = 0;
var G__18781 = 0;
seq__18679_18749 = G__18778;
chunk__18680_18750 = G__18779;
count__18681_18751 = G__18780;
i__18682_18752 = G__18781;
continue;
}
}
} else
{}
}
break;
}
lt.object.assoc_in_BANG_.call(null,ed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linter-results","linter-results",4482067083)], null),null);
return lt.plugins.elm_light.linter.update_status_for_editor.call(null,ed);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.linter","clear-linter-results!","lt.plugins.elm-light.linter/clear-linter-results!",4126992011),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.linter.__BEH__clear_linter_results_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clear-linter-results!","clear-linter-results!",4528495642),null], null), null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor.linter.remove-all","editor.linter.remove-all",3899267783),new cljs.core.Keyword(null,"desc","desc",1016984067),"Editor: Clear all lint results",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"clear-linter-results!","clear-linter-results!",4528495642));
} else
{return null;
}
})], null));
lt.plugins.elm_light.linter.find_current_lint_mark = (function find_current_lint_mark(ed){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__18685_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"linter","linter",4206213986),p1__18685_SHARP_.lttype);
}),lt.objs.editor.find_marks.call(null,ed,lt.objs.editor.__GT_cursor.call(null,ed))));
});
lt.plugins.elm_light.linter.get_widget_by_mark = (function get_widget_by_mark(ed,mark){return cljs.core.get_in.call(null,cljs.core.deref.call(null,ed),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linter-results","linter-results",4482067083),mark.ltlintid,new cljs.core.Keyword(null,"widget","widget",4520824246)], null));
});
lt.plugins.elm_light.linter.mark__GT_pos = (function mark__GT_pos(mark){var cm_pos = mark.find().from;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",1013907415),cm_pos.ch,new cljs.core.Keyword(null,"line","line",1017226086),cm_pos.line], null);
});
lt.plugins.elm_light.linter.get_all_lint_marks = (function get_all_lint_marks(ed){return cljs.core.sort_by.call(null,(function (p1__18687_SHARP_){return cljs.core.juxt.call(null,new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"ch","ch",1013907415)).call(null,lt.plugins.elm_light.linter.mark__GT_pos.call(null,p1__18687_SHARP_));
}),cljs.core.filter.call(null,(function (p1__18686_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"linter","linter",4206213986),p1__18686_SHARP_.lttype);
}),lt.objs.editor.__GT_cm_ed.call(null,ed).getAllMarks()));
});
lt.plugins.elm_light.linter.split_with_mark = (function split_with_mark(ed){var all_marks = lt.plugins.elm_light.linter.get_all_lint_marks.call(null,ed);var curr_mark = lt.plugins.elm_light.linter.find_current_lint_mark.call(null,ed);return cljs.core.split_with.call(null,((function (all_marks,curr_mark){
return (function (p1__18688_SHARP_){return !(cljs.core._EQ_.call(null,(cljs.core.truth_(curr_mark)?curr_mark.ltlintid:null),p1__18688_SHARP_.ltlintid));
});})(all_marks,curr_mark))
,all_marks);
});
lt.plugins.elm_light.linter.find_next_mark = (function find_next_mark(ed){var vec__18690 = lt.plugins.elm_light.linter.split_with_mark.call(null,ed);var ms1 = cljs.core.nth.call(null,vec__18690,0,null);var ms2 = cljs.core.nth.call(null,vec__18690,1,null);return cljs.core.first.call(null,cljs.core.into.call(null,cljs.core.vec.call(null,cljs.core.drop.call(null,1,ms2)),ms1));
});
lt.plugins.elm_light.linter.find_prev_mark = (function find_prev_mark(ed){var vec__18692 = lt.plugins.elm_light.linter.split_with_mark.call(null,ed);var ms1 = cljs.core.nth.call(null,vec__18692,0,null);var ms2 = cljs.core.nth.call(null,vec__18692,1,null);return cljs.core.first.call(null,cljs.core.into.call(null,cljs.core.reverse.call(null,cljs.core.drop.call(null,1,ms2)),ms1));
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor.linter.details","editor.linter.details",4312538199),new cljs.core.Keyword(null,"desc","desc",1016984067),"Linter: Show details at cursor",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;var temp__4092__auto____$1 = lt.plugins.elm_light.linter.find_current_lint_mark.call(null,ed);if(cljs.core.truth_(temp__4092__auto____$1))
{var mark = temp__4092__auto____$1;return lt.plugins.elm_light.linter.add_widget.call(null,ed,mark.ltlintid);
} else
{return null;
}
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor.next.lint-result","editor.next.lint-result",4143748223),new cljs.core.Keyword(null,"desc","desc",1016984067),"Linter: Move to next result",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;var temp__4092__auto____$1 = lt.plugins.elm_light.linter.find_next_mark.call(null,ed);if(cljs.core.truth_(temp__4092__auto____$1))
{var next_mark = temp__4092__auto____$1;return lt.objs.editor.move_cursor.call(null,ed,lt.plugins.elm_light.linter.mark__GT_pos.call(null,next_mark));
} else
{return null;
}
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor.prev.lint-result","editor.prev.lint-result",1674890175),new cljs.core.Keyword(null,"desc","desc",1016984067),"Linter: Move to previous result",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;var temp__4092__auto____$1 = lt.plugins.elm_light.linter.find_prev_mark.call(null,ed);if(cljs.core.truth_(temp__4092__auto____$1))
{var prev_mark = temp__4092__auto____$1;return lt.objs.editor.move_cursor.call(null,ed,lt.plugins.elm_light.linter.mark__GT_pos.call(null,lt.plugins.elm_light.linter.next_mark));
} else
{return null;
}
} else
{return null;
}
})], null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.elm-light')) {
goog.provide('lt.plugins.elm_light');
goog.require('cljs.core');
goog.require('lt.plugins.elm_light.utils');
goog.require('lt.plugins.elm_light.clients');
goog.require('lt.objs.files');
goog.require('lt.util.js');
goog.require('lt.plugins.elm_light.gutter');
goog.require('lt.plugins.elm_light.linter');
goog.require('lt.objs.tabs');
goog.require('clojure.string');
goog.require('lt.plugins.elm_light.utils');
goog.require('lt.objs.popup');
goog.require('lt.objs.dialogs');
goog.require('lt.objs.popup');
goog.require('lt.plugins.elm_light.linter');
goog.require('lt.objs.notifos');
goog.require('lt.plugins.elm_light.clients');
goog.require('lt.objs.browser');
goog.require('lt.objs.notifos');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.files');
goog.require('lt.objs.sidebar.clients');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('clojure.string');
goog.require('lt.plugins.elm_light.elm_ast');
goog.require('lt.objs.browser');
goog.require('lt.plugins.elm_light.selection');
goog.require('lt.plugins.elm_light.selection');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.dialogs');
goog.require('lt.objs.console');
goog.require('lt.objs.tabs');
goog.require('lt.objs.editor');
goog.require('lt.objs.console');
goog.require('lt.plugins.elm_light.gutter');
goog.require('lt.plugins.elm_light.elm_ast');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('lt.objs.editor.pool');
goog.require('lt.util.js');
goog.require('lt.objs.sidebar.clients');
goog.require('lt.objs.command');
lt.plugins.elm_light.__BEH__elm_unsupported = (function __BEH__elm_unsupported(_,res){lt.objs.notifos.done_working.call(null);
return lt.objs.notifos.set_msg_BANG_.call(null,new cljs.core.Keyword(null,"err","err",1014004951).cljs$core$IFn$_invoke$arity$1(res),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light","elm-unsupported","lt.plugins.elm-light/elm-unsupported",2702653399),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.__BEH__elm_unsupported,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elm.unsupported","elm.unsupported",3962342495),null], null), null));
lt.plugins.elm_light.colorize_msg = (function colorize_msg(msg){return clojure.string.replace.call(null,clojure.string.replace.call(null,msg,/\[\d+m/,""),/\[0m/,"");
});
lt.plugins.elm_light.__GT_lt_range = (function __GT_lt_range(p__24961){var map__24963 = p__24961;var map__24963__$1 = ((cljs.core.seq_QMARK_.call(null,map__24963))?cljs.core.apply.call(null,cljs.core.hash_map,map__24963):map__24963);var end = cljs.core.get.call(null,map__24963__$1,new cljs.core.Keyword(null,"end","end",1014004813));var start = cljs.core.get.call(null,map__24963__$1,new cljs.core.Keyword(null,"start","start",1123661780));return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1017056028),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",1013907415),(new cljs.core.Keyword(null,"column","column",3954034376).cljs$core$IFn$_invoke$arity$1(start) - 1),new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(start) - 1)], null),new cljs.core.Keyword(null,"to","to",1013907949),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",1013907415),(new cljs.core.Keyword(null,"column","column",3954034376).cljs$core$IFn$_invoke$arity$1(end) - 1),new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(end) - 1)], null)], null);
});
lt.plugins.elm_light.maybe_trim = (function maybe_trim(ss){if(cljs.core.truth_(ss))
{return clojure.string.trim.call(null,ss);
} else
{return null;
}
});
lt.plugins.elm_light.str_contains_QMARK_ = (function str_contains_QMARK_(source,target){if(cljs.core.truth_((function (){var and__4872__auto__ = source;if(cljs.core.truth_(and__4872__auto__))
{return target;
} else
{return and__4872__auto__;
}
})()))
{return (-1 < source.indexOf(target));
} else
{return null;
}
});
lt.plugins.elm_light.maybe_strip_hint = (function maybe_strip_hint(source){if(cljs.core.truth_(source))
{if(cljs.core.truth_(lt.plugins.elm_light.str_contains_QMARK_.call(null,source,"Hint:")))
{return clojure.string.trim.call(null,cljs.core.first.call(null,cljs.core.re_find.call(null,/([\s\S]*?(?=Hint:))/m,source)));
} else
{return source;
}
} else
{return null;
}
});
lt.plugins.elm_light.linter_action = (function linter_action(ed,row){var G__24975 = new cljs.core.Keyword(null,"tag","tag",1014018828).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core._EQ_.call(null,"TYPE MISMATCH",G__24975))
{var ann = lt.plugins.elm_light.maybe_strip_hint.call(null,lt.plugins.elm_light.maybe_trim.call(null,cljs.core.second.call(null,cljs.core.re_find.call(null,/But I am inferring that the definition has this type:([\s\S]*$)/m,new cljs.core.Keyword(null,"details","details",2571625908).cljs$core$IFn$_invoke$arity$1(row)))));if(cljs.core.truth_((function (){var and__4872__auto__ = ann;if(cljs.core.truth_(and__4872__auto__))
{return cljs.core.not.call(null,lt.plugins.elm_light.str_contains_QMARK_.call(null,ann,"..."));
} else
{return and__4872__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",1017460895),"Fix annotation",new cljs.core.Keyword(null,"action","action",3885920680),((function (ann,G__24975){
return (function (_,p__24976){var map__24977 = p__24976;var map__24977__$1 = ((cljs.core.seq_QMARK_.call(null,map__24977))?cljs.core.apply.call(null,cljs.core.hash_map,map__24977):map__24977);var to = cljs.core.get.call(null,map__24977__$1,new cljs.core.Keyword(null,"to","to",1013907949));var from = cljs.core.get.call(null,map__24977__$1,new cljs.core.Keyword(null,"from","from",1017056028));return lt.objs.editor.replace.call(null,ed,from,to,ann);
});})(ann,G__24975))
], null)], null);
} else
{return cljs.core.PersistentVector.EMPTY;
}
} else
{if(cljs.core._EQ_.call(null,"NAMING ERROR",G__24975))
{var fixes = cljs.core.filter.call(null,cljs.core.seq,cljs.core.map.call(null,clojure.string.trim,clojure.string.split_lines.call(null,cljs.core.second.call(null,cljs.core.re_find.call(null,/Maybe you want one of the following\?(:?[\s\S]*$)/m,new cljs.core.Keyword(null,"details","details",2571625908).cljs$core$IFn$_invoke$arity$1(row))))));return cljs.core.map.call(null,((function (fixes,G__24975){
return (function (suggestion){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",1017460895),suggestion,new cljs.core.Keyword(null,"action","action",3885920680),((function (fixes,G__24975){
return (function (_,p__24978){var map__24979 = p__24978;var map__24979__$1 = ((cljs.core.seq_QMARK_.call(null,map__24979))?cljs.core.apply.call(null,cljs.core.hash_map,map__24979):map__24979);var to = cljs.core.get.call(null,map__24979__$1,new cljs.core.Keyword(null,"to","to",1013907949));var from = cljs.core.get.call(null,map__24979__$1,new cljs.core.Keyword(null,"from","from",1017056028));return lt.objs.editor.replace.call(null,ed,from,to,suggestion);
});})(fixes,G__24975))
], null);
});})(fixes,G__24975))
,fixes);
} else
{if(cljs.core._EQ_.call(null,"missing type annotation",G__24975))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",1017460895),"Add",new cljs.core.Keyword(null,"action","action",3885920680),((function (G__24975){
return (function (p__24980,p__24981){var map__24982 = p__24980;var map__24982__$1 = ((cljs.core.seq_QMARK_.call(null,map__24982))?cljs.core.apply.call(null,cljs.core.hash_map,map__24982):map__24982);var details = cljs.core.get.call(null,map__24982__$1,new cljs.core.Keyword(null,"details","details",2571625908));var map__24983 = p__24981;var map__24983__$1 = ((cljs.core.seq_QMARK_.call(null,map__24983))?cljs.core.apply.call(null,cljs.core.hash_map,map__24983):map__24983);var from = cljs.core.get.call(null,map__24983__$1,new cljs.core.Keyword(null,"from","from",1017056028));var ann = [cljs.core.str(clojure.string.trim.call(null,cljs.core.second.call(null,cljs.core.re_find.call(null,/I inferred the type annotation so you can copy it into your code:([\s\S]*$)/m,details)))),cljs.core.str("\n")].join('');return lt.objs.editor.replace.call(null,ed,from,ann);
});})(G__24975))
], null)], null);
} else
{if(cljs.core._EQ_.call(null,"unused import",G__24975))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",1017460895),"Remove",new cljs.core.Keyword(null,"action","action",3885920680),((function (G__24975){
return (function (_,p__24984){var map__24985 = p__24984;var map__24985__$1 = ((cljs.core.seq_QMARK_.call(null,map__24985))?cljs.core.apply.call(null,cljs.core.hash_map,map__24985):map__24985);var to = cljs.core.get.call(null,map__24985__$1,new cljs.core.Keyword(null,"to","to",1013907949));var from = cljs.core.get.call(null,map__24985__$1,new cljs.core.Keyword(null,"from","from",1017056028));lt.objs.editor.replace.call(null,ed,from,to,"");
return CodeMirror.commands.deleteLine(lt.objs.editor.__GT_cm_ed.call(null,ed));
});})(G__24975))
], null)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.PersistentVector.EMPTY;
} else
{return null;
}
}
}
}
}
});
lt.plugins.elm_light.display_make_results = (function display_make_results(ed,res,path){lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"clear-linter-results!","clear-linter-results!",4528495642));
if(cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__24986_SHARP_){return cljs.core._EQ_.call(null,"error",new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(p1__24986_SHARP_));
}),res)))
{lt.objs.notifos.set_msg_BANG_.call(null,"Elm make returned errors; check you editor or the console for details",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
} else
{}
var seq__24993 = cljs.core.seq.call(null,res);var chunk__24994 = null;var count__24995 = 0;var i__24996 = 0;while(true){
if((i__24996 < count__24995))
{var map__24997 = cljs.core._nth.call(null,chunk__24994,i__24996);var map__24997__$1 = ((cljs.core.seq_QMARK_.call(null,map__24997))?cljs.core.apply.call(null,cljs.core.hash_map,map__24997):map__24997);var row = map__24997__$1;var tag = cljs.core.get.call(null,map__24997__$1,new cljs.core.Keyword(null,"tag","tag",1014018828));var subregion = cljs.core.get.call(null,map__24997__$1,new cljs.core.Keyword(null,"subregion","subregion",1501636774));var region = cljs.core.get.call(null,map__24997__$1,new cljs.core.Keyword(null,"region","region",4374076006));var details = cljs.core.get.call(null,map__24997__$1,new cljs.core.Keyword(null,"details","details",2571625908));var overview = cljs.core.get.call(null,map__24997__$1,new cljs.core.Keyword(null,"overview","overview",1544020203));var type = cljs.core.get.call(null,map__24997__$1,new cljs.core.Keyword(null,"type","type",1017479852));var file = cljs.core.get.call(null,map__24997__$1,new cljs.core.Keyword(null,"file","file",1017047278));var msg_25016 = [cljs.core.str(overview),cljs.core.str("\n"),cljs.core.str(lt.plugins.elm_light.colorize_msg.call(null,details))].join('');if(cljs.core.truth_((function (){var and__4872__auto__ = cljs.core._EQ_.call(null,path,file);if(and__4872__auto__)
{return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["error",null,"warning",null], null), null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [type], null));
} else
{return and__4872__auto__;
}
})()))
{lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"linter-result!","linter-result!",4482067001),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",1124275658),tag,new cljs.core.Keyword(null,"details","details",2571625908),msg_25016,new cljs.core.Keyword(null,"category","category",1064415344),cljs.core.keyword.call(null,type),new cljs.core.Keyword(null,"actions","actions",4147068015),lt.plugins.elm_light.linter_action.call(null,ed,row),new cljs.core.Keyword(null,"code-range","code-range",3297446095),lt.plugins.elm_light.__GT_lt_range.call(null,(function (){var or__4884__auto__ = subregion;if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return region;
}
})())], null));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{lt.objs.console.verbatim.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),overview], null)),": "),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em.line","em.line",3623844076),"[Elm error]"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em.file","em.file",3623665268),file], null)),"error");
} else
{}
}
{
var G__25017 = seq__24993;
var G__25018 = chunk__24994;
var G__25019 = count__24995;
var G__25020 = (i__24996 + 1);
seq__24993 = G__25017;
chunk__24994 = G__25018;
count__24995 = G__25019;
i__24996 = G__25020;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__24993);if(temp__4092__auto__)
{var seq__24993__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24993__$1))
{var c__5632__auto__ = cljs.core.chunk_first.call(null,seq__24993__$1);{
var G__25021 = cljs.core.chunk_rest.call(null,seq__24993__$1);
var G__25022 = c__5632__auto__;
var G__25023 = cljs.core.count.call(null,c__5632__auto__);
var G__25024 = 0;
seq__24993 = G__25021;
chunk__24994 = G__25022;
count__24995 = G__25023;
i__24996 = G__25024;
continue;
}
} else
{var map__24998 = cljs.core.first.call(null,seq__24993__$1);var map__24998__$1 = ((cljs.core.seq_QMARK_.call(null,map__24998))?cljs.core.apply.call(null,cljs.core.hash_map,map__24998):map__24998);var row = map__24998__$1;var tag = cljs.core.get.call(null,map__24998__$1,new cljs.core.Keyword(null,"tag","tag",1014018828));var subregion = cljs.core.get.call(null,map__24998__$1,new cljs.core.Keyword(null,"subregion","subregion",1501636774));var region = cljs.core.get.call(null,map__24998__$1,new cljs.core.Keyword(null,"region","region",4374076006));var details = cljs.core.get.call(null,map__24998__$1,new cljs.core.Keyword(null,"details","details",2571625908));var overview = cljs.core.get.call(null,map__24998__$1,new cljs.core.Keyword(null,"overview","overview",1544020203));var type = cljs.core.get.call(null,map__24998__$1,new cljs.core.Keyword(null,"type","type",1017479852));var file = cljs.core.get.call(null,map__24998__$1,new cljs.core.Keyword(null,"file","file",1017047278));var msg_25025 = [cljs.core.str(overview),cljs.core.str("\n"),cljs.core.str(lt.plugins.elm_light.colorize_msg.call(null,details))].join('');if(cljs.core.truth_((function (){var and__4872__auto__ = cljs.core._EQ_.call(null,path,file);if(and__4872__auto__)
{return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["error",null,"warning",null], null), null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [type], null));
} else
{return and__4872__auto__;
}
})()))
{lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"linter-result!","linter-result!",4482067001),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",1124275658),tag,new cljs.core.Keyword(null,"details","details",2571625908),msg_25025,new cljs.core.Keyword(null,"category","category",1064415344),cljs.core.keyword.call(null,type),new cljs.core.Keyword(null,"actions","actions",4147068015),lt.plugins.elm_light.linter_action.call(null,ed,row),new cljs.core.Keyword(null,"code-range","code-range",3297446095),lt.plugins.elm_light.__GT_lt_range.call(null,(function (){var or__4884__auto__ = subregion;if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return region;
}
})())], null));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{lt.objs.console.verbatim.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),overview], null)),": "),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em.line","em.line",3623844076),"[Elm error]"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em.file","em.file",3623665268),file], null)),"error");
} else
{}
}
{
var G__25026 = cljs.core.next.call(null,seq__24993__$1);
var G__25027 = null;
var G__25028 = 0;
var G__25029 = 0;
seq__24993 = G__25026;
chunk__24994 = G__25027;
count__24995 = G__25028;
i__24996 = G__25029;
continue;
}
}
} else
{return null;
}
}
break;
}
});
lt.plugins.elm_light.__BEH__lint = (function __BEH__lint(ed,result_handler_trigger){var info = new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed));var cl = lt.plugins.elm_light.clients.get_eval_client.call(null,ed,new cljs.core.Keyword(null,"editor.elm.lint","editor.elm.lint",1086056222));lt.objs.notifos.working.call(null,[cljs.core.str("Starting elm linting of: "),cljs.core.str(new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(info))].join(''));
return lt.objs.clients.send.call(null,cl,new cljs.core.Keyword(null,"editor.elm.lint","editor.elm.lint",1086056222),cljs.core.assoc.call(null,info,new cljs.core.Keyword(null,"project-path","project-path",1907176907),lt.plugins.elm_light.utils.project_path.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(info)),new cljs.core.Keyword(null,"handler","handler",1706707644),cljs.core.name.call(null,result_handler_trigger)),new cljs.core.Keyword(null,"only","only",1017320222),ed);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light","lint","lt.plugins.elm-light/lint",1497250906),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.__BEH__lint,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lint","lint",1017226101),null], null), null),new cljs.core.Keyword(null,"description","description",3584325486),"Lint (/make) a given elm file");
lt.plugins.elm_light.__BEH__elm_lint_res = (function __BEH__elm_lint_res(ed,res){var path = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));lt.objs.notifos.done_working.call(null,"Elm linted");
return lt.plugins.elm_light.display_make_results.call(null,ed,res,path);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light","elm-lint-res","lt.plugins.elm-light/elm-lint-res",2508500808),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.__BEH__elm_lint_res,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elm.lint.res","elm.lint.res",4381822959),null], null), null));
lt.plugins.elm_light.__BEH__make = (function __BEH__make(ed){var info = new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed));var cl = lt.plugins.elm_light.clients.get_eval_client.call(null,ed,new cljs.core.Keyword(null,"editor.elm.make","editor.elm.make",1086078217));lt.objs.notifos.working.call(null,[cljs.core.str("Starting elm make for: "),cljs.core.str(new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(info))].join(''));
return lt.objs.clients.send.call(null,cl,new cljs.core.Keyword(null,"editor.elm.make","editor.elm.make",1086078217),cljs.core.assoc.call(null,info,new cljs.core.Keyword(null,"project-path","project-path",1907176907),lt.plugins.elm_light.utils.project_path.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(info))),new cljs.core.Keyword(null,"only","only",1017320222),ed);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light","make","lt.plugins.elm-light/make",1497244279),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.__BEH__make,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elm.make","elm.make",1176641960),null], null), null),new cljs.core.Keyword(null,"description","description",3584325486),"Make (to js) a given elm file");
lt.plugins.elm_light.missing_make_info_popup = (function missing_make_info_popup(){return lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"You need to configure make info for your project",new cljs.core.Keyword(null,"body","body",1016933652),[cljs.core.str("You configure a key \"make-info\" in your elm-package.json\n                              Example:\n                             \"make-info\": {\"main\": \"src/Main.elm\", \"out\": \"dist/main.js\"}")].join(''),new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"Ok"], null)], null)], null));
});
lt.plugins.elm_light.__BEH__make_project = (function __BEH__make_project(ed){var info = new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed));var project_path = lt.plugins.elm_light.utils.project_path.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(info));var map__25000 = new cljs.core.Keyword(null,"make-info","make-info",2233727135).cljs$core$IFn$_invoke$arity$1(lt.plugins.elm_light.utils.parse_json_file.call(null,lt.objs.files.join.call(null,project_path,"elm-package.json")));var map__25000__$1 = ((cljs.core.seq_QMARK_.call(null,map__25000))?cljs.core.apply.call(null,cljs.core.hash_map,map__25000):map__25000);var out = cljs.core.get.call(null,map__25000__$1,new cljs.core.Keyword(null,"out","out",1014014656));var main = cljs.core.get.call(null,map__25000__$1,new cljs.core.Keyword(null,"main","main",1017248043));if(cljs.core.truth_((function (){var and__4872__auto__ = main;if(cljs.core.truth_(and__4872__auto__))
{return out;
} else
{return and__4872__auto__;
}
})()))
{lt.objs.notifos.working.call(null,[cljs.core.str("Starting elm make for project: "),cljs.core.str(project_path)].join(''));
return lt.objs.clients.send.call(null,lt.plugins.elm_light.clients.get_eval_client.call(null,ed,new cljs.core.Keyword(null,"editor.elm.make","editor.elm.make",1086078217)),new cljs.core.Keyword(null,"editor.elm.make","editor.elm.make",1086078217),cljs.core.assoc.call(null,info,new cljs.core.Keyword(null,"project-path","project-path",1907176907),project_path,new cljs.core.Keyword(null,"path","path",1017337751),lt.objs.files.join.call(null,project_path,main),new cljs.core.Keyword(null,"outputFile","outputFile",4034596239),lt.objs.files.join.call(null,project_path,out)),new cljs.core.Keyword(null,"only","only",1017320222),ed);
} else
{return lt.plugins.elm_light.missing_make_info_popup.call(null);
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light","make-project","lt.plugins.elm-light/make-project",3492644131),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.__BEH__make_project,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elm.make-project","elm.make-project",2779298292),null], null), null),new cljs.core.Keyword(null,"description","description",3584325486),"Make Elm Project");
lt.plugins.elm_light.__BEH__elm_make_res = (function __BEH__elm_make_res(ed,p__25001){var map__25003 = p__25001;var map__25003__$1 = ((cljs.core.seq_QMARK_.call(null,map__25003))?cljs.core.apply.call(null,cljs.core.hash_map,map__25003):map__25003);var res = cljs.core.get.call(null,map__25003__$1,new cljs.core.Keyword(null,"res","res",1014017042));var outputFile = cljs.core.get.call(null,map__25003__$1,new cljs.core.Keyword(null,"outputFile","outputFile",4034596239));lt.objs.notifos.done_working.call(null,[cljs.core.str("Elm make compiled to: "),cljs.core.str(outputFile)].join(''));
return lt.plugins.elm_light.display_make_results.call(null,ed,res,lt.plugins.elm_light.path);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light","elm-make-res","lt.plugins.elm-light/elm-make-res",3896116701),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.__BEH__elm_make_res,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elm.make.res","elm.make.res",3219830874),null], null), null));
lt.plugins.elm_light.__BEH__elm_make_err = (function __BEH__elm_make_err(ed,res){var path = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));lt.objs.notifos.done_working.call(null,"");
lt.objs.notifos.set_msg_BANG_.call(null,[cljs.core.str("Elm make error: "),cljs.core.str(res)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
return lt.objs.console.error.call(null,res);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light","elm-make-err","lt.plugins.elm-light/elm-make-err",3896146200),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.__BEH__elm_make_err,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elm.make.err","elm.make.err",3219818783),null], null), null));
lt.plugins.elm_light.__BEH__on_eval__DOT__one = (function __BEH__on_eval__DOT__one(ed){var pos = lt.objs.editor.__GT_cursor.call(null,ed);var info = cljs.core.conj.call(null,new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)),(cljs.core.truth_(lt.objs.editor.selection_QMARK_.call(null,ed))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"code","code",1016963423),lt.objs.editor.selection.call(null,ed),new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",1123661780),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(lt.objs.editor.__GT_cursor.call(null,ed,"start")),new cljs.core.Keyword(null,"end","end",1014004813),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(lt.objs.editor.__GT_cursor.call(null,ed,"end"))], null)], null):(function (){var temp__4090__auto__ = lt.plugins.elm_light.selection.get_top_level_expr.call(null,ed,pos);if(cljs.core.truth_(temp__4090__auto__))
{var rng = temp__4090__auto__;return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",1014015430),pos,new cljs.core.Keyword(null,"code","code",1016963423),lt.objs.editor.range.call(null,ed,new cljs.core.Keyword(null,"from","from",1017056028).cljs$core$IFn$_invoke$arity$1(rng),new cljs.core.Keyword(null,"to","to",1013907949).cljs$core$IFn$_invoke$arity$1(rng)),new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",1123661780),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"from","from",1017056028).cljs$core$IFn$_invoke$arity$1(rng)),new cljs.core.Keyword(null,"end","end",1014004813),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"end","end",1014004813).cljs$core$IFn$_invoke$arity$1(rng))], null)], null);
} else
{return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",1014015430),pos,new cljs.core.Keyword(null,"code","code",1016963423),lt.objs.editor.line.call(null,ed,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(pos)),new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",1123661780),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(pos),new cljs.core.Keyword(null,"end","end",1014004813),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(pos)], null)], null);
}
})()));return lt.object.raise.call(null,lt.plugins.elm_light.clients.elm,new cljs.core.Keyword(null,"eval!","eval!",1110791799),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"origin","origin",4300251800),ed,new cljs.core.Keyword(null,"info","info",1017141280),info], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light","on-eval.one","lt.plugins.elm-light/on-eval.one",3108499739),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.__BEH__on_eval__DOT__one,new cljs.core.Keyword(null,"desc","desc",1016984067),"Elm repl: Eval current selection",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval.one","eval.one",1173589382),null], null), null));
lt.plugins.elm_light.__BEH__eval_BANG_ = (function __BEH__eval_BANG_(this$,event){var map__25005 = event;var map__25005__$1 = ((cljs.core.seq_QMARK_.call(null,map__25005))?cljs.core.apply.call(null,cljs.core.hash_map,map__25005):map__25005);var origin = cljs.core.get.call(null,map__25005__$1,new cljs.core.Keyword(null,"origin","origin",4300251800));var info = cljs.core.get.call(null,map__25005__$1,new cljs.core.Keyword(null,"info","info",1017141280));lt.objs.notifos.working.call(null,"Evaluating elm...");
return lt.objs.clients.send.call(null,lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor.eval.elm","editor.eval.elm",1083015975),new cljs.core.Keyword(null,"origin","origin",4300251800),origin,new cljs.core.Keyword(null,"info","info",1017141280),info,new cljs.core.Keyword(null,"create","create",3956577390),lt.plugins.elm_light.clients.try_connect], null)),new cljs.core.Keyword(null,"editor.eval.elm","editor.eval.elm",1083015975),info,new cljs.core.Keyword(null,"only","only",1017320222),origin);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light","eval!","lt.plugins.elm-light/eval!",1120504160),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.__BEH__eval_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval!","eval!",1110791799),null], null), null));
lt.plugins.elm_light.__BEH__eval_result = (function __BEH__eval_result(ed,res){lt.objs.notifos.done_working.call(null,"Elm evaluated");
return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.result","editor.result",4030217008),new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(res),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(res))], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light","eval-result","lt.plugins.elm-light/eval-result",1791693047),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.__BEH__eval_result,new cljs.core.Keyword(null,"desc","desc",1016984067),"Elm repl: Eval result",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.elm.eval.res","editor.elm.eval.res",1719787241),null], null), null));
lt.plugins.elm_light.__BEH__eval_err = (function __BEH__eval_err(ed,res){lt.objs.notifos.done_working.call(null);
lt.objs.notifos.set_msg_BANG_.call(null,"Elm eval reported errors.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.exception","editor.exception",3983021184),new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(res),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(res))], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light","eval-err","lt.plugins.elm-light/eval-err",1049569193),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.__BEH__eval_err,new cljs.core.Keyword(null,"desc","desc",1016984067),"Elm repl: Eval error",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.elm.eval.err","editor.elm.eval.err",1719775150),null], null), null));
lt.plugins.elm_light.__BEH__repl_restart_BANG_ = (function __BEH__repl_restart_BANG_(p__25006){var map__25008 = p__25006;var map__25008__$1 = ((cljs.core.seq_QMARK_.call(null,map__25008))?cljs.core.apply.call(null,cljs.core.hash_map,map__25008):map__25008);var ed = map__25008__$1;var info = cljs.core.get.call(null,map__25008__$1,new cljs.core.Keyword(null,"info","info",1017141280));var temp__4092__auto__ = new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));if(cljs.core.truth_(temp__4092__auto__))
{var default_client = temp__4092__auto__;if(cljs.core.truth_(cljs.core.deref.call(null,default_client)))
{lt.objs.notifos.working.call(null,"Restaring elm-repl...");
return lt.objs.clients.send.call(null,default_client,new cljs.core.Keyword(null,"elm.repl.restart","elm.repl.restart",2931654218),info,new cljs.core.Keyword(null,"only","only",1017320222),ed);
} else
{return null;
}
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light","repl-restart!","lt.plugins.elm-light/repl-restart!",1802858197),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.__BEH__repl_restart_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elm.repl.restart","elm.repl.restart",2931654218),null], null), null));
lt.plugins.elm_light.__BEH__repl_restart_res = (function __BEH__repl_restart_res(ed,res){return lt.objs.notifos.done_working.call(null,"Elm Repl restarted");
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light","repl-restart-res","lt.plugins.elm-light/repl-restart-res",4193190105),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.__BEH__repl_restart_res,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elm.repl.restart.res","elm.repl.restart.res",2086859772),null], null), null));
lt.plugins.elm_light.__BEH__elm_browse_BANG_ = (function __BEH__elm_browse_BANG_(ed,debug_QMARK_){var path = lt.plugins.elm_light.utils.reactor_path.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed))));var client = lt.plugins.elm_light.clients.get_eval_client.call(null,ed,new cljs.core.Keyword(null,"editor.eval.elm","editor.eval.elm",1083015975));if(cljs.core.truth_((function (){var and__4872__auto__ = client;if(cljs.core.truth_(and__4872__auto__))
{return path;
} else
{return and__4872__auto__;
}
})()))
{lt.objs.notifos.working.call(null,"Opening elm file in browser");
var b_25030 = (function (){var or__4884__auto__ = cljs.core.first.call(null,lt.object.by_tag.call(null,new cljs.core.Keyword(null,"browser","browser",1164844698)));if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return lt.objs.browser.add.call(null);
}
})();var get_url_25031 = ((function (b_25030,path,client){
return (function (){return [cljs.core.str("http://localhost:"),cljs.core.str(new cljs.core.Keyword(null,"reactor-port","reactor-port",4649590590).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client))),cljs.core.str(path),cljs.core.str((cljs.core.truth_(debug_QMARK_)?"?debug":""))].join('');
});})(b_25030,path,client))
;if(cljs.core.truth_(new cljs.core.Keyword(null,"connected","connected",4729661051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client))))
{lt.object.raise.call(null,b_25030,new cljs.core.Keyword(null,"navigate!","navigate!",1766726722),get_url_25031.call(null));
} else
{lt.util.js.wait.call(null,100,((function (b_25030,get_url_25031,path,client){
return (function (){return lt.object.raise.call(null,b_25030,new cljs.core.Keyword(null,"navigate!","navigate!",1766726722),get_url_25031.call(null));
});})(b_25030,get_url_25031,path,client))
);
}
return lt.objs.notifos.done_working.call(null);
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light","elm-browse!","lt.plugins.elm-light/elm-browse!",2398181301),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.__BEH__elm_browse_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elm.browse","elm.browse",2486947908),null], null), null));
lt.plugins.elm_light.__BEH__elm_doc_search = (function __BEH__elm_doc_search(this$,cur){return cljs.core.conj.call(null,cur,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1116631654),"elm",new cljs.core.Keyword(null,"trigger","trigger",4248979754),new cljs.core.Keyword(null,"docs.elm.search","docs.elm.search",737241333),new cljs.core.Keyword(null,"file-types","file-types",1727875162),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["elm",null], null), null)], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light","elm-doc-search","lt.plugins.elm-light/elm-doc-search",546131961),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.__BEH__elm_doc_search,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"types+","types+",4450069060),null], null), null));
lt.plugins.elm_light.__BEH__elm_doc_search_results = (function __BEH__elm_doc_search_results(_,p__25009){var vec__25011 = p__25009;var client_id = cljs.core.nth.call(null,vec__25011,0,null);var command = cljs.core.nth.call(null,vec__25011,1,null);var msg = cljs.core.nth.call(null,vec__25011,2,null);return lt.object.raise.call(null,lt.objs.clients.clients,new cljs.core.Keyword(null,"message","message",1968829305),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [client_id,command,lt.plugins.elm_light.elm_ast.search_docs.call(null,new cljs.core.Keyword(null,"search","search",4402534682).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"project-dir","project-dir",4367844171).cljs$core$IFn$_invoke$arity$1(msg))], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light","elm-doc-search-results","lt.plugins.elm-light/elm-doc-search-results",1434309848),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.__BEH__elm_doc_search_results,new cljs.core.Keyword(null,"desc","desc",1016984067),"Workaround behavior for showing doc search results in sidebar",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elm.doc.search.results","elm.doc.search.results",3225944800),null], null), null));
lt.plugins.elm_light.get_editor_client = (function get_editor_client(ed){var temp__4092__auto__ = new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));if(cljs.core.truth_(temp__4092__auto__))
{var default_client = temp__4092__auto__;if(cljs.core.truth_(cljs.core.deref.call(null,default_client)))
{return default_client;
} else
{return null;
}
} else
{return null;
}
});
lt.plugins.elm_light.location__GT_pos = (function location__GT_pos(loc){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(loc)) - 1),new cljs.core.Keyword(null,"ch","ch",1013907415),(new cljs.core.Keyword(null,"column","column",3954034376).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(loc)) - 1)], null);
});
lt.plugins.elm_light.ast_pass_through = (function ast_pass_through(ed,msg){return lt.objs.clients.send.call(null,lt.plugins.elm_light.clients.get_eval_client.call(null,ed,new cljs.core.Keyword(null,"editor.elm.ast.passthrough","editor.elm.ast.passthrough",3082755153)),new cljs.core.Keyword(null,"editor.elm.ast.passthrough","editor.elm.ast.passthrough",3082755153),msg,new cljs.core.Keyword(null,"only","only",1017320222),ed);
});
lt.plugins.elm_light.__BEH__elm_reload_ast = (function __BEH__elm_reload_ast(ed){var project = lt.plugins.elm_light.utils.project_path.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed))));lt.objs.notifos.working.call(null,[cljs.core.str("Init reload of ast for project: "),cljs.core.str(project)].join(''));
lt.plugins.elm_light.elm_ast.delete_project_ast_BANG_.call(null,project);
return lt.objs.clients.send.call(null,lt.plugins.elm_light.clients.get_eval_client.call(null,ed,new cljs.core.Keyword(null,"elm.reload.ast","elm.reload.ast",3046520423)),new cljs.core.Keyword(null,"elm.reload.ast","elm.reload.ast",3046520423),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"only","only",1017320222),ed);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light","elm-reload-ast","lt.plugins.elm-light/elm-reload-ast",3847082128),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.__BEH__elm_reload_ast,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elm.reload-ast","elm.reload-ast",3046490632),null], null), null));
lt.plugins.elm_light.__BEH__elm_reload_ast_started = (function __BEH__elm_reload_ast_started(ed){return lt.objs.notifos.done_working.call(null,"Parsing ast started");
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light","elm-reload-ast-started","lt.plugins.elm-light/elm-reload-ast-started",3781906644),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.__BEH__elm_reload_ast_started,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elm.ast.reload.started","elm.ast.reload.started",2010853330),null], null), null));
lt.plugins.elm_light.__BEH__elm_jump_to_definition_start = (function __BEH__elm_jump_to_definition_start(ed){lt.objs.notifos.working.call(null,[cljs.core.str("Initiate jump to definition")].join(''));
var temp__4090__auto__ = lt.plugins.elm_light.get_editor_client.call(null,ed);if(cljs.core.truth_(temp__4090__auto__))
{var default_client = temp__4090__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.elm.jump-to-definition","editor.elm.jump-to-definition",1945362401),cljs.core.PersistentArrayMap.EMPTY);
} else
{return lt.plugins.elm_light.ast_pass_through.call(null,ed,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",4427965699),new cljs.core.Keyword(null,"editor.elm.jump-to-definition","editor.elm.jump-to-definition",1945362401),new cljs.core.Keyword(null,"data","data",1016980252),cljs.core.PersistentArrayMap.EMPTY], null));
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light","elm-jump-to-definition-start","lt.plugins.elm-light/elm-jump-to-definition-start",3920864187),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.__BEH__elm_jump_to_definition_start,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.jump-to-definition-at-cursor!","editor.jump-to-definition-at-cursor!",4501637705),null], null), null));
lt.plugins.elm_light.__BEH__elm_jump_to_definition = (function __BEH__elm_jump_to_definition(ed,data){lt.objs.notifos.done_working.call(null,"");
var pos = lt.objs.editor.__GT_cursor.call(null,ed);var token = lt.plugins.elm_light.utils.find_symbol.call(null,ed,pos);var path = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));if(cljs.core.truth_(token))
{var temp__4092__auto__ = lt.plugins.elm_light.elm_ast.get_jump_to_definition.call(null,token,path,lt.plugins.elm_light.utils.project_path.call(null,path));if(cljs.core.truth_(temp__4092__auto__))
{var target = temp__4092__auto__;return lt.object.raise.call(null,lt.objs.jump_stack.jump_stack,new cljs.core.Keyword(null,"jump-stack.push!","jump-stack.push!",4063822260),ed,new cljs.core.Keyword(null,"file","file",1017047278).cljs$core$IFn$_invoke$arity$1(target),lt.plugins.elm_light.location__GT_pos.call(null,new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(target)));
} else
{return null;
}
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light","elm-jump-to-definition","lt.plugins.elm-light/elm-jump-to-definition",4117986136),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.__BEH__elm_jump_to_definition,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.elm.jump-to-definition","editor.elm.jump-to-definition",1945362401),null], null), null));
lt.plugins.elm_light.__BEH__elm_doc_start = (function __BEH__elm_doc_start(ed){lt.objs.notifos.working.call(null,[cljs.core.str("Initiate show doc")].join(''));
var temp__4090__auto__ = lt.plugins.elm_light.get_editor_client.call(null,ed);if(cljs.core.truth_(temp__4090__auto__))
{var default_client = temp__4090__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.elm.doc","editor.elm.doc",1570413537),cljs.core.PersistentArrayMap.EMPTY);
} else
{return lt.plugins.elm_light.ast_pass_through.call(null,ed,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",4427965699),new cljs.core.Keyword(null,"editor.elm.doc","editor.elm.doc",1570413537),new cljs.core.Keyword(null,"data","data",1016980252),cljs.core.PersistentArrayMap.EMPTY], null));
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light","elm-doc-start","lt.plugins.elm-light/elm-doc-start",1839924543),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.__BEH__elm_doc_start,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.doc","editor.doc",3751347369),null], null), null));
lt.plugins.elm_light.__BEH__elm_doc = (function __BEH__elm_doc(ed){var pos = lt.objs.editor.__GT_cursor.call(null,ed);var token = lt.plugins.elm_light.utils.find_symbol.call(null,ed,pos);var path = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));if(cljs.core.truth_(token))
{lt.objs.notifos.done_working.call(null,"");
} else
{}
var temp__4092__auto__ = lt.plugins.elm_light.elm_ast.get_jump_to_definition.call(null,token,path,lt.plugins.elm_light.utils.project_path.call(null,path));if(cljs.core.truth_(temp__4092__auto__))
{var target = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.elm.doc.show!","editor.elm.doc.show!",3977559543),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1017277949),[cljs.core.str(new cljs.core.Keyword(null,"module-name","module-name",4067691710).cljs$core$IFn$_invoke$arity$1(target)),cljs.core.str("."),cljs.core.str(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(target)),cljs.core.str((function (){var temp__4092__auto____$1 = new cljs.core.Keyword(null,"package","package",4501809080).cljs$core$IFn$_invoke$arity$1(target);if(cljs.core.truth_(temp__4092__auto____$1))
{var pck = temp__4092__auto____$1;return [cljs.core.str(" ("),cljs.core.str(new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(pck)),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"version","version",1365512266).cljs$core$IFn$_invoke$arity$1(pck)),cljs.core.str(")")].join('');
} else
{return null;
}
})())].join(''),new cljs.core.Keyword(null,"args","args",1016906831),(function (){var or__4884__auto__ = new cljs.core.Keyword(null,"signatureRaw","signatureRaw",3837738946).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"annotation","annotation",3753828001).cljs$core$IFn$_invoke$arity$1(target));if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return new cljs.core.Keyword(null,"signatureRaw","signatureRaw",3837738946).cljs$core$IFn$_invoke$arity$1(target);
}
})(),new cljs.core.Keyword(null,"doc","doc",1014003882),(function (){var temp__4092__auto____$1 = new cljs.core.Keyword(null,"doc","doc",1014003882).cljs$core$IFn$_invoke$arity$1(target);if(cljs.core.truth_(temp__4092__auto____$1))
{var doc = temp__4092__auto____$1;return doc.trim();
} else
{return null;
}
})(),new cljs.core.Keyword(null,"loc","loc",1014011570),pos], null));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light","elm-doc","lt.plugins.elm-light/elm-doc",3124390860),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.__BEH__elm_doc,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.elm.doc","editor.elm.doc",1570413537),null], null), null));
lt.plugins.elm_light.__BEH__elm_parse_editor_on_change = (function __BEH__elm_parse_editor_on_change(ed){return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"elm.parse.editor","elm.parse.editor",2241470658));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light","elm-parse-editor-on-change","lt.plugins.elm-light/elm-parse-editor-on-change",1092931718),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.__BEH__elm_parse_editor_on_change,new cljs.core.Keyword(null,"desc","desc",1016984067),"Parse a connected elm editor on content change",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"change","change",3947235106),null], null), null),new cljs.core.Keyword(null,"debounce","debounce",1556599227),100);
lt.plugins.elm_light.__BEH__elm_parse_editor = (function __BEH__elm_parse_editor(ed){if(!(lt.plugins.elm_light.utils.str_contains.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed))),"elm-stuff")))
{var client = lt.plugins.elm_light.clients.get_eval_client_if_connected.call(null,ed,new cljs.core.Keyword(null,"editor.elm.ast.parsetext","editor.elm.ast.parsetext",1992138717));var path = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));if(cljs.core.truth_((function (){var and__4872__auto__ = client;if(cljs.core.truth_(and__4872__auto__))
{return (cljs.core._EQ_.call(null,lt.objs.editor.pool.last_active.call(null),ed)) && (!(lt.plugins.elm_light.utils.str_contains.call(null,path,"elm-stuff")));
} else
{return and__4872__auto__;
}
})()))
{return lt.objs.clients.send.call(null,client,new cljs.core.Keyword(null,"editor.elm.ast.parsetext","editor.elm.ast.parsetext",1992138717),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"code","code",1016963423),lt.objs.editor.__GT_val.call(null,ed)], null),new cljs.core.Keyword(null,"only","only",1017320222),ed);
} else
{return null;
}
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light","elm-parse-editor","lt.plugins.elm-light/elm-parse-editor",583860183),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.__BEH__elm_parse_editor,new cljs.core.Keyword(null,"desc","desc",1016984067),"Initiate parsing of the content/elm code of the given editor",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"focus","focus",1111509066),null,new cljs.core.Keyword(null,"project-connected","project-connected",3474311367),null,new cljs.core.Keyword(null,"elm.parse.editor","elm.parse.editor",2241470658),null], null), null));
lt.plugins.elm_light.__BEH__elm_editor_disconnected = (function __BEH__elm_editor_disconnected(ed){lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"clear-linter-results!","clear-linter-results!",4528495642));
lt.object.update_BANG_.call(null,ed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast-status","ast-status",2421112079)], null),cljs.core.assoc,new cljs.core.Keyword(null,"status","status",4416389988),null,new cljs.core.Keyword(null,"error","error",1110689146),null);
lt.plugins.elm_light.elm_ast.update_status_for_editor.call(null,ed);
return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"elm.gutter.exposeds.mark","elm.gutter.exposeds.mark",3035248815));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light","elm-editor-disconnected","lt.plugins.elm-light/elm-editor-disconnected",3526187369),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.__BEH__elm_editor_disconnected,new cljs.core.Keyword(null,"desc","desc",1016984067),"Clean up state when project connection for an editor has been disconnected",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"project-disconnected","project-disconnected",2085293025),null], null), null));
lt.plugins.elm_light.__BEH__elm_parse_editor_result = (function __BEH__elm_parse_editor_result(ed,res){var temp__4090__auto___25032 = new cljs.core.Keyword(null,"error","error",1110689146).cljs$core$IFn$_invoke$arity$1(res);if(cljs.core.truth_(temp__4090__auto___25032))
{var error_25033 = temp__4090__auto___25032;lt.object.update_BANG_.call(null,ed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast-status","ast-status",2421112079)], null),cljs.core.assoc,new cljs.core.Keyword(null,"status","status",4416389988),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"error","error",1110689146),error_25033);
} else
{var path_25034 = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));lt.object.update_BANG_.call(null,ed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast-status","ast-status",2421112079)], null),cljs.core.assoc,new cljs.core.Keyword(null,"status","status",4416389988),new cljs.core.Keyword(null,"ok","ok",1013907790),new cljs.core.Keyword(null,"error","error",1110689146),null);
lt.plugins.elm_light.elm_ast.upsert_ast_BANG_.call(null,lt.plugins.elm_light.utils.project_path.call(null,path_25034),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",1017047278),path_25034,new cljs.core.Keyword(null,"ast","ast",1014001140),new cljs.core.Keyword(null,"ast","ast",1014001140).cljs$core$IFn$_invoke$arity$1(res)], null));
lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"elm.gutter.exposeds.mark","elm.gutter.exposeds.mark",3035248815));
}
lt.plugins.elm_light.elm_ast.update_status_for_editor.call(null,ed);
return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"elm.gutter.refresh","elm.gutter.refresh",722016962));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light","elm-parse-editor-result","lt.plugins.elm-light/elm-parse-editor-result",3556794401),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.__BEH__elm_parse_editor_result,new cljs.core.Keyword(null,"desc","desc",1016984067),"Handle parse results for a parsed editors content",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.elm.ast.parsetext.result","editor.elm.ast.parsetext.result",1834022514),null], null), null));
lt.plugins.elm_light.cm_pos__GT_pos = (function cm_pos__GT_pos(cm_pos){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",1013907415),cm_pos.ch,new cljs.core.Keyword(null,"line","line",1017226086),cm_pos.line], null);
});
lt.plugins.elm_light.__BEH__elm_expose_top_level = (function __BEH__elm_expose_top_level(ed){var path = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));var prj_path = lt.plugins.elm_light.utils.project_path.call(null,path);var module = lt.plugins.elm_light.elm_ast.get_module_ast.call(null,prj_path,path);var exposing = new cljs.core.Keyword(null,"exposing","exposing",3382854387).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"moduleDeclaration","moduleDeclaration",1240624864).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",1014001140).cljs$core$IFn$_invoke$arity$1(module)));var temp__4092__auto__ = lt.plugins.elm_light.elm_ast.find_top_level_declaration_by_pos.call(null,lt.objs.editor.__GT_cursor.call(null,ed),module);if(cljs.core.truth_(temp__4092__auto__))
{var decl = temp__4092__auto__;if(lt.plugins.elm_light.elm_ast.exposed_by_module_QMARK_.call(null,module,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(decl)))
{return null;
} else
{var map__25013 = lt.plugins.elm_light.elm_ast.__GT_range.call(null,new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(exposing));var map__25013__$1 = ((cljs.core.seq_QMARK_.call(null,map__25013))?cljs.core.apply.call(null,cljs.core.hash_map,map__25013):map__25013);var end = cljs.core.get.call(null,map__25013__$1,new cljs.core.Keyword(null,"end","end",1014004813));var start = cljs.core.get.call(null,map__25013__$1,new cljs.core.Keyword(null,"start","start",1123661780));var upd_exp = lt.plugins.elm_light.elm_ast.expose_decl.call(null,decl,exposing);var bm = lt.objs.editor.bookmark.call(null,ed,lt.objs.editor.__GT_cursor.call(null,ed));lt.objs.editor.replace.call(null,ed,start,end,lt.plugins.elm_light.elm_ast.print_exposing.call(null,upd_exp));
return lt.objs.editor.move_cursor.call(null,ed,lt.plugins.elm_light.cm_pos__GT_pos.call(null,bm.find()));
}
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light","elm-expose-top-level","lt.plugins.elm-light/elm-expose-top-level",2519767763),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.__BEH__elm_expose_top_level,new cljs.core.Keyword(null,"desc","desc",1016984067),"Behavior to expose top level Elm declaration",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elm.expose.top.level","elm.expose.top.level",3091507131),null], null), null));
lt.plugins.elm_light.__BEH__elm_unexpose_top_level = (function __BEH__elm_unexpose_top_level(ed){var path = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));var prj_path = lt.plugins.elm_light.utils.project_path.call(null,path);var module = lt.plugins.elm_light.elm_ast.get_module_ast.call(null,prj_path,path);var exposing = new cljs.core.Keyword(null,"exposing","exposing",3382854387).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"moduleDeclaration","moduleDeclaration",1240624864).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",1014001140).cljs$core$IFn$_invoke$arity$1(module)));var temp__4092__auto__ = lt.plugins.elm_light.elm_ast.find_top_level_declaration_by_pos.call(null,lt.objs.editor.__GT_cursor.call(null,ed),module);if(cljs.core.truth_(temp__4092__auto__))
{var decl = temp__4092__auto__;if((lt.plugins.elm_light.elm_ast.exposed_by_module_QMARK_.call(null,module,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(decl))) && (!(lt.plugins.elm_light.elm_ast.exposeAll_QMARK_.call(null,exposing))))
{var map__25015 = lt.plugins.elm_light.elm_ast.__GT_range.call(null,new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(exposing));var map__25015__$1 = ((cljs.core.seq_QMARK_.call(null,map__25015))?cljs.core.apply.call(null,cljs.core.hash_map,map__25015):map__25015);var end = cljs.core.get.call(null,map__25015__$1,new cljs.core.Keyword(null,"end","end",1014004813));var start = cljs.core.get.call(null,map__25015__$1,new cljs.core.Keyword(null,"start","start",1123661780));var upd_exp = lt.plugins.elm_light.elm_ast.unexpose_decl.call(null,decl,exposing);var bm = lt.objs.editor.bookmark.call(null,ed,lt.objs.editor.__GT_cursor.call(null,ed));lt.objs.editor.replace.call(null,ed,start,end,lt.plugins.elm_light.elm_ast.print_exposing.call(null,upd_exp));
return lt.objs.editor.move_cursor.call(null,ed,lt.plugins.elm_light.cm_pos__GT_pos.call(null,bm.find()));
} else
{return null;
}
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light","elm-unexpose-top-level","lt.plugins.elm-light/elm-unexpose-top-level",4048820218),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.__BEH__elm_unexpose_top_level,new cljs.core.Keyword(null,"desc","desc",1016984067),"Behavior to unexpose top level Elm declaration",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elm.unexpose.top.level","elm.unexpose.top.level",3630199380),null], null), null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"elm.reload.ast","elm.reload.ast",3046520423),new cljs.core.Keyword(null,"desc","desc",1016984067),"Elm: Load/Reload project AST",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"elm.reload-ast","elm.reload-ast",3046490632));
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"elm.lint","elm.lint",1176619965),new cljs.core.Keyword(null,"desc","desc",1016984067),"Elm: Lint selected file",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"lint","lint",1017226101),new cljs.core.Keyword(null,"elm.lint.res","elm.lint.res",4381822959));
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"elm.make","elm.make",1176641960),new cljs.core.Keyword(null,"desc","desc",1016984067),"Elm: Make selected file",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"elm.make","elm.make",1176641960));
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"elm.make-project","elm.make-project",2779298292),new cljs.core.Keyword(null,"desc","desc",1016984067),"Elm: Make current project",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"elm.make-project","elm.make-project",2779298292));
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"elm.browse","elm.browse",2486947908),new cljs.core.Keyword(null,"desc","desc",1016984067),"Elm: View current elm file in browser (elm-reactor)",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"elm.browse","elm.browse",2486947908),false);
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"elm.browse.debug","elm.browse.debug",523431337),new cljs.core.Keyword(null,"desc","desc",1016984067),"Elm: View current elm file in browser with debugger (elm-reactor)",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"elm.browse","elm.browse",2486947908),true);
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"elm.restart-repl","elm.restart-repl",4116096039),new cljs.core.Keyword(null,"desc","desc",1016984067),"Elm: Restart repl for current project",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"elm.repl.restart","elm.repl.restart",2931654218));
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"elm.expose-top-level","elm.expose-top-level",3259391485),new cljs.core.Keyword(null,"desc","desc",1016984067),"Elm: Expose top level definition",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"elm.expose.top.level","elm.expose.top.level",3091507131));
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"elm.unexpose-top-level","elm.unexpose-top-level",3798083734),new cljs.core.Keyword(null,"desc","desc",1016984067),"Elm: Un-expose top level definition",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"elm.unexpose.top.level","elm.unexpose.top.level",3630199380));
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"elm.select.top.level","elm.select.top.level",3366757107),new cljs.core.Keyword(null,"desc","desc",1016984067),"Elm: Select top level expression from current cursor position",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;var temp__4092__auto____$1 = lt.plugins.elm_light.selection.get_top_level_expr.call(null,ed,lt.objs.editor.__GT_cursor.call(null,ed));if(cljs.core.truth_(temp__4092__auto____$1))
{var rng = temp__4092__auto____$1;return lt.objs.editor.set_selection.call(null,ed,new cljs.core.Keyword(null,"from","from",1017056028).cljs$core$IFn$_invoke$arity$1(rng),new cljs.core.Keyword(null,"to","to",1013907949).cljs$core$IFn$_invoke$arity$1(rng));
} else
{return null;
}
} else
{return null;
}
})], null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.elm-light.test')) {
goog.provide('lt.plugins.elm_light.test');
goog.require('cljs.core');
goog.require('lt.objs.files');
goog.require('lt.plugins.elm_light.utils');
goog.require('lt.plugins.elm_light.utils');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.files');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.console');
goog.require('lt.objs.editor');
goog.require('lt.objs.console');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
lt.plugins.elm_light.test.default_test_deps = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("deadfoxygrandpa","elm-test","deadfoxygrandpa/elm-test",3258163043),"3.0.1 <= v < 4.0.0",new cljs.core.Keyword("laszlopandy","elm-console","laszlopandy/elm-console",1265387071),"1.0.3 <= v < 2.0.0"], null);
lt.plugins.elm_light.test.__GT_test_src_dir = (function __GT_test_src_dir(src_dir){if(cljs.core._EQ_.call(null,src_dir,"."))
{return "../";
} else
{return [cljs.core.str("../".call(null,src_dir))].join('');
}
});
lt.plugins.elm_light.test.__GT_test_src_dirs = (function __GT_test_src_dirs(src_dirs){return cljs.core.conj.call(null,cljs.core.mapv.call(null,lt.plugins.elm_light.test.__GT_test_src_dir,src_dirs),".");
});
lt.plugins.elm_light.test.deps__GT_named = (function deps__GT_named(deps){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__18930){var vec__18931 = p__18930;var k = cljs.core.nth.call(null,vec__18931,0,null);var v = cljs.core.nth.call(null,vec__18931,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.elm_light.utils.nskw__GT_name.call(null,k),v], null);
}),deps));
});
lt.plugins.elm_light.test.__GT_test_config = (function __GT_test_config(project_cfg){return cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.assoc.call(null,cljs.core.update_in.call(null,project_cfg,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-directories","source-directories",4475397259)], null),lt.plugins.elm_light.test.__GT_test_src_dirs),new cljs.core.Keyword(null,"exposed-modules","exposed-modules",4185867084),cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependencies","dependencies",1517678747)], null),(function (p1__18932_SHARP_){return cljs.core.merge.call(null,p1__18932_SHARP_,lt.plugins.elm_light.test.default_test_deps);
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependencies","dependencies",1517678747)], null),lt.plugins.elm_light.test.deps__GT_named);
});
lt.plugins.elm_light.test.parse_project_cfg = (function parse_project_cfg(project_path){return lt.plugins.elm_light.utils.parse_json_file.call(null,lt.objs.files.join.call(null,project_path,"elm-package.json"));
});
lt.plugins.elm_light.test.save_test_cfg_BANG_ = (function save_test_cfg_BANG_(path,test_cfg){return lt.objs.files.save.call(null,path,lt.plugins.elm_light.utils.pretty_json.call(null,test_cfg));
});
lt.plugins.elm_light.test.maybe_create_test_path_BANG_ = (function maybe_create_test_path_BANG_(project_path){var test_path = lt.objs.files.join.call(null,project_path,"test");if(cljs.core.truth_(lt.objs.files.exists_QMARK_.call(null,test_path)))
{} else
{lt.objs.files.mkdir.call(null,test_path);
}
return test_path;
});
lt.plugins.elm_light.test.install_packages_BANG_ = (function install_packages_BANG_(test_path){var args = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["install","--yes"], null);var proc = require("child_process").spawn("elm-package",cljs.core.clj__GT_js.call(null,args),{"cwd": test_path});proc.stdout.on("data",((function (args,proc){
return (function (p1__18933_SHARP_){return cljs.core.println.call(null,[cljs.core.str("Test package install: "),cljs.core.str(p1__18933_SHARP_)].join(''));
});})(args,proc))
);
proc.stderr.on("data",((function (args,proc){
return (function (p1__18934_SHARP_){return lt.objs.console.error.call(null,[cljs.core.str(p1__18934_SHARP_)].join(''));
});})(args,proc))
);
proc.on("exit",((function (args,proc){
return (function (p1__18935_SHARP_){if(cljs.core._EQ_.call(null,p1__18935_SHARP_,0))
{return lt.objs.notifos.done_working.call(null,"Successfully configured elm test");
} else
{return lt.objs.notifos.set_msg_BANG_.call(null,"Error installing test elm packages",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),"error",new cljs.core.Keyword(null,"timeout","timeout",3994960083),5000], null));
}
});})(args,proc))
);
return null;
});
lt.plugins.elm_light.test.maybe_add_templates = (function maybe_add_templates(test_path){var templ_dir = lt.objs.files.join.call(null,lt.plugins.elm_light.utils.elm_plugin_dir,"node_modules/elm-test/templates");var runner = lt.objs.files.join.call(null,templ_dir,"TestRunner.elm");var tests = lt.objs.files.join.call(null,templ_dir,"Tests.elm");if(cljs.core.truth_(lt.objs.files.exists_QMARK_.call(null,lt.objs.files.join.call(null,test_path,"TestRunner.elm"))))
{} else
{lt.objs.files.copy.call(null,runner,lt.objs.files.join.call(null,test_path,"TestRunner.elm"));
}
if(cljs.core.truth_(lt.objs.files.exists_QMARK_.call(null,lt.objs.files.join.call(null,test_path,"Tests.elm"))))
{return null;
} else
{return lt.objs.files.copy.call(null,tests,lt.objs.files.join.call(null,test_path,"Tests.elm"));
}
});
lt.plugins.elm_light.test.init_test = (function init_test(project_path){var temp__4092__auto__ = lt.plugins.elm_light.test.parse_project_cfg.call(null,project_path);if(cljs.core.truth_(temp__4092__auto__))
{var project_cfg = temp__4092__auto__;lt.objs.notifos.working.call(null,"Init elm test config");
var test_path = lt.plugins.elm_light.test.maybe_create_test_path_BANG_.call(null,project_path);var test_cfg_path = lt.objs.files.join.call(null,test_path,"elm-package.json");lt.plugins.elm_light.test.maybe_add_templates.call(null,test_path);
lt.plugins.elm_light.test.save_test_cfg_BANG_.call(null,test_cfg_path,lt.plugins.elm_light.test.__GT_test_config.call(null,project_cfg));
return lt.plugins.elm_light.test.install_packages_BANG_.call(null,test_path);
} else
{return null;
}
});
lt.plugins.elm_light.test.run_tests = (function run_tests(test_file){lt.objs.notifos.working.call(null,[cljs.core.str("Running test: "),cljs.core.str(lt.objs.files.basename.call(null,test_file))].join(''));
var worker = require("child_process").fork(lt.objs.files.join.call(null,lt.plugins.elm_light.utils.elm_plugin_dir,"node_modules/elm-test/bin/elm-test"),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [test_file], null)),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"execPath","execPath",3055801288),process.execPath,new cljs.core.Keyword(null,"silent","silent",4406544327),true,new cljs.core.Keyword(null,"env","env",1014004831),new cljs.core.PersistentArrayMap(null, 2, ["ATOM_SHELL_INTERNAL_RUN_AS_NODE",1,"PATH",process.env.PATH], null),new cljs.core.Keyword(null,"cwd","cwd",1014003170),lt.objs.files.parent.call(null,test_file)], null)));worker.on("exit",((function (worker){
return (function (code){lt.objs.notifos.done_working.call(null);
if(cljs.core._EQ_.call(null,lt.plugins.elm_light.test._PERCENT_,code,0))
{return lt.objs.notifos.set_msg_BANG_.call(null,"Elm test successful !",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"timeout","timeout",3994960083),5000], null));
} else
{return lt.objs.notifos.set_msg_BANG_.call(null,"Elm test reported errors. See console for details",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),"error",new cljs.core.Keyword(null,"timeout","timeout",3994960083),5000], null));
}
});})(worker))
);
worker.stdout.on("data",((function (worker){
return (function (data){if(cljs.core.seq.call(null,[cljs.core.str(data)].join('').trim()))
{return lt.objs.console.log.call(null,[cljs.core.str("Elm Test: "),cljs.core.str(data)].join(''));
} else
{return null;
}
});})(worker))
);
worker.stderr.on("data",((function (worker){
return (function (data){return lt.objs.console.error.call(null,[cljs.core.str("Elm Test err:"),cljs.core.str(data)].join(''));
});})(worker))
);
return null;
});
lt.plugins.elm_light.test.__BEH__elm_test = (function __BEH__elm_test(ed){var path = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));var v = lt.objs.editor.__GT_val.call(null,ed);if((lt.plugins.elm_light.utils.str_contains.call(null,v,"consoleRunner")) || (lt.plugins.elm_light.utils.str_contains.call(null,v,"Console")))
{return lt.plugins.elm_light.test.run_tests.call(null,path);
} else
{return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"elm.browse","elm.browse",2486947908),false);
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.test","elm-test","lt.plugins.elm-light.test/elm-test",4453364343),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.test.__BEH__elm_test,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elm.test","elm.test",1176854604),null], null), null));
lt.plugins.elm_light.test.__BEH__elm_test_init = (function __BEH__elm_test_init(ed){var path = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));var temp__4092__auto__ = lt.plugins.elm_light.utils.project_path.call(null,path);if(cljs.core.truth_(temp__4092__auto__))
{var prj_path = temp__4092__auto__;return lt.plugins.elm_light.test.init_test.call(null,prj_path);
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.test","elm-test-init","lt.plugins.elm-light.test/elm-test-init",2767693340),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.test.__BEH__elm_test_init,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elm.test.init","elm.test.init",2526420246),null], null), null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"elm.test","elm.test",1176854604),new cljs.core.Keyword(null,"desc","desc",1016984067),"Elm: Test current file",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"elm.test","elm.test",1176854604));
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"elm.test.init","elm.test.init",2526420246),new cljs.core.Keyword(null,"desc","desc",1016984067),"Elm: Add test subproject to current project",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"elm.test.init","elm.test.init",2526420246));
} else
{return null;
}
})], null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.elm-light.format')) {
goog.provide('lt.plugins.elm_light.format');
goog.require('cljs.core');
goog.require('lt.plugins.elm_light.utils');
goog.require('clojure.string');
goog.require('lt.plugins.elm_light.utils');
goog.require('lt.objs.notifos');
goog.require('lt.plugins.elm_light.clients');
goog.require('lt.objs.notifos');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.plugins.elm_light.clients');
goog.require('clojure.string');
goog.require('lt.plugins.elm_light.selection');
goog.require('lt.plugins.elm_light.selection');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.console');
goog.require('lt.objs.editor');
goog.require('lt.objs.console');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
/**
* Format string input using elm-format.
* If successful returns [true result]
* If errors returns [false err]
*/
lt.plugins.elm_light.format.format_input = (function format_input(cwd,input){try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,require("child_process").execSync("elm-format --stdin",cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cwd","cwd",1014003170),cwd,new cljs.core.Keyword(null,"input","input",1114262332),input,new cljs.core.Keyword(null,"stdio","stdio",1123664379),"pipe"], null))).toString()], null);
}catch (e11942){var e = e11942;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,e.message], null);
}});
/**
* Format file or all elm files in dir using elm-format.
* If successful returns [true nil]
* If errors returns [false err]
*/
lt.plugins.elm_light.format.format_path = (function format_path(cwd,path){try{require("child_process").execSync([cljs.core.str("elm-format --yes "),cljs.core.str(path)].join(''),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cwd","cwd",1014003170),cwd,new cljs.core.Keyword(null,"stdio","stdio",1123664379),"pipe"], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);
}catch (e11944){var e = e11944;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,e.message], null);
}});
lt.plugins.elm_light.format.handle_format_error = (function handle_format_error(err){lt.objs.notifos.set_msg_BANG_.call(null,"Elm format reported errors. See console for details",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),"error",new cljs.core.Keyword(null,"timeout","timeout",3994960083),5000], null));
return lt.objs.console.error.call(null,err);
});
lt.plugins.elm_light.format.__BEH__elm_format = (function __BEH__elm_format(ed){var temp__4092__auto__ = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));if(cljs.core.truth_(temp__4092__auto__))
{var path = temp__4092__auto__;var pos = lt.objs.editor.__GT_cursor.call(null,ed);var vec__11946 = lt.plugins.elm_light.format.format_path.call(null,lt.plugins.elm_light.utils.project_path.call(null,path),path);var ok_QMARK_ = cljs.core.nth.call(null,vec__11946,0,null);var res = cljs.core.nth.call(null,vec__11946,1,null);if(cljs.core.truth_(ok_QMARK_))
{lt.objs.editor.pool.reload.call(null,ed);
} else
{lt.plugins.elm_light.format.handle_format_error.call(null,res);
}
lt.objs.editor.move_cursor.call(null,ed,pos);
return lt.objs.editor.center_cursor.call(null,ed);
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.format","elm-format","lt.plugins.elm-light.format/elm-format",4432445084),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.format.__BEH__elm_format,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elm.format","elm.format",2598773169),null], null), null));
lt.plugins.elm_light.format.strip_module = (function strip_module(expr){return clojure.string.join.call(null,"\n",cljs.core.drop.call(null,3,clojure.string.split_lines.call(null,expr)));
});
lt.plugins.elm_light.format.__BEH__elm_format_expression = (function __BEH__elm_format_expression(ed){var pos = lt.objs.editor.__GT_cursor.call(null,ed);var cwd = lt.plugins.elm_light.utils.project_path.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed))));var temp__4092__auto__ = lt.plugins.elm_light.selection.get_top_level_expr.call(null,ed,pos);if(cljs.core.truth_(temp__4092__auto__))
{var map__11949 = temp__4092__auto__;var map__11949__$1 = ((cljs.core.seq_QMARK_.call(null,map__11949))?cljs.core.apply.call(null,cljs.core.hash_map,map__11949):map__11949);var to = cljs.core.get.call(null,map__11949__$1,new cljs.core.Keyword(null,"to","to",1013907949));var from = cljs.core.get.call(null,map__11949__$1,new cljs.core.Keyword(null,"from","from",1017056028));var vec__11950 = lt.plugins.elm_light.format.format_input.call(null,cwd,lt.objs.editor.range.call(null,ed,from,to));var ok_QMARK_ = cljs.core.nth.call(null,vec__11950,0,null);var res = cljs.core.nth.call(null,vec__11950,1,null);if(cljs.core.truth_(ok_QMARK_))
{lt.objs.editor.replace.call(null,ed,from,to,lt.plugins.elm_light.format.strip_module.call(null,res));
} else
{lt.plugins.elm_light.format.handle_format_error.call(null,res);
}
return lt.objs.editor.move_cursor.call(null,ed,pos);
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.format","elm-format-expression","lt.plugins.elm-light.format/elm-format-expression",731246833),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.format.__BEH__elm_format_expression,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elm.format-expression","elm.format-expression",2402661976),null], null), null));
lt.plugins.elm_light.format.__BEH__elm_format_buffer = (function __BEH__elm_format_buffer(ed){var pos = lt.objs.editor.__GT_cursor.call(null,ed);var vec__11952 = lt.plugins.elm_light.format.format_input.call(null,lt.plugins.elm_light.utils.project_path.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)))),lt.objs.editor.__GT_val.call(null,ed));var ok_QMARK_ = cljs.core.nth.call(null,vec__11952,0,null);var res = cljs.core.nth.call(null,vec__11952,1,null);if(cljs.core.truth_(ok_QMARK_))
{lt.objs.editor.set_val_and_keep_cursor.call(null,ed,res);
return lt.objs.editor.center_cursor.call(null,ed);
} else
{return lt.plugins.elm_light.format.handle_format_error.call(null,res);
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.format","elm-format-buffer","lt.plugins.elm-light.format/elm-format-buffer",2032820105),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.format.__BEH__elm_format_buffer,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elm.format-buffer","elm.format-buffer",4209381120),null], null), null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"elm-format","elm-format",1711269488),new cljs.core.Keyword(null,"desc","desc",1016984067),"Elm: Format file",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"elm.format","elm.format",2598773169));
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"elm-format-buffer","elm-format-buffer",4714939745),new cljs.core.Keyword(null,"desc","desc",1016984067),"Elm: Format editor contents",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"elm.format-buffer","elm.format-buffer",4209381120));
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"elm-format-expression","elm-format-expression",3399734329),new cljs.core.Keyword(null,"desc","desc",1016984067),"Elm: Format top level expression at point",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"elm.format-expression","elm.format-expression",2402661976));
} else
{return null;
}
})], null));
}
if(!lt.util.load.provided_QMARK_('')) {
}

//# sourceMappingURL=elm-light_compiled.js.map