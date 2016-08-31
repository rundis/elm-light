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
lt.plugins.elm_light.elm_ast.upsert_ast_BANG_ = (function upsert_ast_BANG_(project,file_ast){var prj_idx = lt.plugins.elm_light.elm_ast.idx_of.call(null,(function (p1__11948_SHARP_){return cljs.core._EQ_.call(null,project,new cljs.core.Keyword(null,"project","project",704593547).cljs$core$IFn$_invoke$arity$1(p1__11948_SHARP_));
}),cljs.core.deref.call(null,lt.plugins.elm_light.elm_ast.project_asts));if(cljs.core.truth_(prj_idx))
{return cljs.core.swap_BANG_.call(null,lt.plugins.elm_light.elm_ast.project_asts,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prj_idx,new cljs.core.Keyword(null,"file-asts","file-asts",3945857876)], null),((function (prj_idx){
return (function (file_asts){return cljs.core.conj.call(null,cljs.core.filterv.call(null,((function (prj_idx){
return (function (p1__11949_SHARP_){return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"file","file",1017047278).cljs$core$IFn$_invoke$arity$1(file_ast),new cljs.core.Keyword(null,"file","file",1017047278).cljs$core$IFn$_invoke$arity$1(p1__11949_SHARP_));
});})(prj_idx))
,file_asts),file_ast);
});})(prj_idx))
);
} else
{return cljs.core.swap_BANG_.call(null,lt.plugins.elm_light.elm_ast.project_asts,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"project","project",704593547),project,new cljs.core.Keyword(null,"file-asts","file-asts",3945857876),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_ast], null)], null));
}
});
lt.plugins.elm_light.elm_ast.delete_ast_BANG_ = (function delete_ast_BANG_(project,file){var temp__4092__auto__ = lt.plugins.elm_light.elm_ast.idx_of.call(null,(function (p1__11950_SHARP_){return cljs.core._EQ_.call(null,project,new cljs.core.Keyword(null,"project","project",704593547).cljs$core$IFn$_invoke$arity$1(p1__11950_SHARP_));
}),cljs.core.deref.call(null,lt.plugins.elm_light.elm_ast.project_asts));if(cljs.core.truth_(temp__4092__auto__))
{var prj_idx = temp__4092__auto__;return cljs.core.swap_BANG_.call(null,lt.plugins.elm_light.elm_ast.project_asts,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prj_idx,new cljs.core.Keyword(null,"file-asts","file-asts",3945857876)], null),((function (prj_idx,temp__4092__auto__){
return (function (file_asts){return cljs.core.filterv.call(null,((function (prj_idx,temp__4092__auto__){
return (function (p1__11951_SHARP_){return cljs.core.not_EQ_.call(null,file,new cljs.core.Keyword(null,"file","file",1017047278).cljs$core$IFn$_invoke$arity$1(p1__11951_SHARP_));
});})(prj_idx,temp__4092__auto__))
,file_asts);
});})(prj_idx,temp__4092__auto__))
);
} else
{return null;
}
});
lt.plugins.elm_light.elm_ast.delete_package_asts_BANG_ = (function delete_package_asts_BANG_(project){var temp__4092__auto__ = lt.plugins.elm_light.elm_ast.idx_of.call(null,(function (p1__11952_SHARP_){return cljs.core._EQ_.call(null,project,new cljs.core.Keyword(null,"project","project",704593547).cljs$core$IFn$_invoke$arity$1(p1__11952_SHARP_));
}),cljs.core.deref.call(null,lt.plugins.elm_light.elm_ast.project_asts));if(cljs.core.truth_(temp__4092__auto__))
{var prj_idx = temp__4092__auto__;return cljs.core.swap_BANG_.call(null,lt.plugins.elm_light.elm_ast.project_asts,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prj_idx,new cljs.core.Keyword(null,"file-asts","file-asts",3945857876)], null),((function (prj_idx,temp__4092__auto__){
return (function (file_asts){return cljs.core.vec.call(null,cljs.core.remove.call(null,new cljs.core.Keyword(null,"package","package",4501809080),file_asts));
});})(prj_idx,temp__4092__auto__))
);
} else
{return null;
}
});
lt.plugins.elm_light.elm_ast.delete_project_ast_BANG_ = (function delete_project_ast_BANG_(project){return cljs.core.swap_BANG_.call(null,lt.plugins.elm_light.elm_ast.project_asts,(function (prjs){return cljs.core.filterv.call(null,(function (p1__11953_SHARP_){return cljs.core.not_EQ_.call(null,project,new cljs.core.Keyword(null,"project","project",704593547).cljs$core$IFn$_invoke$arity$1(p1__11953_SHARP_));
}),prjs);
}));
});
lt.plugins.elm_light.elm_ast.reset_asts_BANG_ = (function reset_asts_BANG_(){return cljs.core.reset_BANG_.call(null,lt.plugins.elm_light.elm_ast.project_asts,cljs.core.PersistentVector.EMPTY);
});
lt.plugins.elm_light.elm_ast.get_project = (function get_project(project){return cljs.core.first.call(null,cljs.core.filterv.call(null,(function (p1__11954_SHARP_){return cljs.core._EQ_.call(null,project,new cljs.core.Keyword(null,"project","project",704593547).cljs$core$IFn$_invoke$arity$1(p1__11954_SHARP_));
}),cljs.core.deref.call(null,lt.plugins.elm_light.elm_ast.project_asts)));
});
lt.plugins.elm_light.elm_ast.get_module_ast = (function get_module_ast(project,module_file){var temp__4092__auto__ = lt.plugins.elm_light.elm_ast.get_project.call(null,project);if(cljs.core.truth_(temp__4092__auto__))
{var prj = temp__4092__auto__;return cljs.core.first.call(null,cljs.core.filterv.call(null,((function (prj,temp__4092__auto__){
return (function (p1__11955_SHARP_){return cljs.core._EQ_.call(null,module_file,new cljs.core.Keyword(null,"file","file",1017047278).cljs$core$IFn$_invoke$arity$1(p1__11955_SHARP_));
});})(prj,temp__4092__auto__))
,new cljs.core.Keyword(null,"file-asts","file-asts",3945857876).cljs$core$IFn$_invoke$arity$1(prj)));
} else
{return null;
}
});
lt.plugins.elm_light.elm_ast.get_module_by_name = (function get_module_by_name(project,module_name){var temp__4092__auto__ = lt.plugins.elm_light.elm_ast.get_project.call(null,project);if(cljs.core.truth_(temp__4092__auto__))
{var prj = temp__4092__auto__;return cljs.core.first.call(null,cljs.core.filterv.call(null,((function (prj,temp__4092__auto__){
return (function (p1__11956_SHARP_){return cljs.core._EQ_.call(null,module_name,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"moduleDeclaration","moduleDeclaration",1240624864).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",1014001140).cljs$core$IFn$_invoke$arity$1(p1__11956_SHARP_))));
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
lt.plugins.elm_light.elm_ast.enrich_module_declarations = (function enrich_module_declarations(module){return cljs.core.map.call(null,(function (p1__11957_SHARP_){return cljs.core.assoc.call(null,p1__11957_SHARP_,new cljs.core.Keyword(null,"exposed?","exposed?",3382850193),lt.plugins.elm_light.elm_ast.exposed_by_module_QMARK_.call(null,module,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p1__11957_SHARP_)),new cljs.core.Keyword(null,"file","file",1017047278),new cljs.core.Keyword(null,"file","file",1017047278).cljs$core$IFn$_invoke$arity$1(module),new cljs.core.Keyword(null,"module-name","module-name",4067691710),new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"moduleDeclaration","moduleDeclaration",1240624864).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",1014001140).cljs$core$IFn$_invoke$arity$1(module))),new cljs.core.Keyword(null,"package","package",4501809080),new cljs.core.Keyword(null,"package","package",4501809080).cljs$core$IFn$_invoke$arity$1(module));
}),new cljs.core.Keyword(null,"declarations","declarations",2554736043).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",1014001140).cljs$core$IFn$_invoke$arity$1(module)));
});
lt.plugins.elm_light.elm_ast.get_exposed_declarations = (function get_exposed_declarations(module){return cljs.core.filter.call(null,new cljs.core.Keyword(null,"exposed?","exposed?",3382850193),lt.plugins.elm_light.elm_ast.enrich_module_declarations.call(null,module));
});
lt.plugins.elm_light.elm_ast.get_import_candidate_tokens = (function get_import_candidate_tokens(import_def,exposed_declaration){return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(import_def)),cljs.core.str("."),cljs.core.str(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(exposed_declaration))].join(''),(function (){var temp__4092__auto__ = new cljs.core.Keyword(null,"alias","alias",1106807234).cljs$core$IFn$_invoke$arity$1(import_def);if(cljs.core.truth_(temp__4092__auto__))
{var alias = temp__4092__auto__;return [cljs.core.str(alias),cljs.core.str("."),cljs.core.str(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(exposed_declaration))].join('');
} else
{return null;
}
})(),(((lt.plugins.elm_light.elm_ast.exposeAll_QMARK_.call(null,new cljs.core.Keyword(null,"exposing","exposing",3382854387).cljs$core$IFn$_invoke$arity$1(import_def))) || (cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__11958_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(exposed_declaration),new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p1__11958_SHARP_));
}),new cljs.core.Keyword(null,"exposing","exposing",3382854387).cljs$core$IFn$_invoke$arity$1(import_def)))))?new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(exposed_declaration):null)], null)));
});
lt.plugins.elm_light.elm_ast.get_external_candidates = (function get_external_candidates(module,modules){var imports = new cljs.core.Keyword(null,"imports","imports",2939942112).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",1014001140).cljs$core$IFn$_invoke$arity$1(module));var imported_mod_names = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,new cljs.core.Keyword(null,"value","value",1125876963),imports));var external_exposed = cljs.core.mapcat.call(null,((function (imports,imported_mod_names){
return (function (p1__11960_SHARP_){return lt.plugins.elm_light.elm_ast.get_exposed_declarations.call(null,p1__11960_SHARP_);
});})(imports,imported_mod_names))
,cljs.core.filter.call(null,((function (imports,imported_mod_names){
return (function (p1__11959_SHARP_){return (cljs.core.not_EQ_.call(null,lt.plugins.elm_light.elm_ast.get_module_name.call(null,module),lt.plugins.elm_light.elm_ast.get_module_name.call(null,p1__11959_SHARP_))) && (cljs.core.contains_QMARK_.call(null,imported_mod_names,lt.plugins.elm_light.elm_ast.get_module_name.call(null,p1__11959_SHARP_)));
});})(imports,imported_mod_names))
,modules));return cljs.core.mapcat.call(null,((function (imports,imported_mod_names,external_exposed){
return (function (imp){return cljs.core.map.call(null,((function (imports,imported_mod_names,external_exposed){
return (function (p1__11962_SHARP_){return cljs.core.assoc.call(null,p1__11962_SHARP_,new cljs.core.Keyword(null,"candidate-tokens","candidate-tokens",3775833238),lt.plugins.elm_light.elm_ast.get_import_candidate_tokens.call(null,imp,p1__11962_SHARP_));
});})(imports,imported_mod_names,external_exposed))
,cljs.core.filter.call(null,((function (imports,imported_mod_names,external_exposed){
return (function (p1__11961_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(imp),new cljs.core.Keyword(null,"module-name","module-name",4067691710).cljs$core$IFn$_invoke$arity$1(p1__11961_SHARP_));
});})(imports,imported_mod_names,external_exposed))
,external_exposed));
});})(imports,imported_mod_names,external_exposed))
,imports);
});
/**
* Get candidates for Elm default imports as per
* https://github.com/elm-lang/core
*/
lt.plugins.elm_light.elm_ast.get_default_candidates = (function get_default_candidates(modules){return cljs.core.concat.call(null,cljs.core.map.call(null,(function (p1__11964_SHARP_){return cljs.core.assoc.call(null,p1__11964_SHARP_,new cljs.core.Keyword(null,"candidate-tokens","candidate-tokens",3775833238),cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p1__11964_SHARP_)], true));
}),cljs.core.mapcat.call(null,lt.plugins.elm_light.elm_ast.get_exposed_declarations,cljs.core.filterv.call(null,(function (p1__11963_SHARP_){return cljs.core._EQ_.call(null,"Basics",new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"moduleDeclaration","moduleDeclaration",1240624864).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",1014001140).cljs$core$IFn$_invoke$arity$1(p1__11963_SHARP_))));
}),modules))),cljs.core.map.call(null,(function (p1__11966_SHARP_){return cljs.core.assoc.call(null,p1__11966_SHARP_,new cljs.core.Keyword(null,"candidate-tokens","candidate-tokens",3775833238),cljs.core.PersistentHashSet.fromArray([[cljs.core.str("Debug."),cljs.core.str(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p1__11966_SHARP_))].join('')], true));
}),cljs.core.mapcat.call(null,lt.plugins.elm_light.elm_ast.get_exposed_declarations,cljs.core.filterv.call(null,(function (p1__11965_SHARP_){return cljs.core._EQ_.call(null,"Debug",new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"moduleDeclaration","moduleDeclaration",1240624864).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",1014001140).cljs$core$IFn$_invoke$arity$1(p1__11965_SHARP_))));
}),modules))),cljs.core.map.call(null,(function (p1__11968_SHARP_){return cljs.core.assoc.call(null,p1__11968_SHARP_,new cljs.core.Keyword(null,"candidate-tokens","candidate-tokens",3775833238),cljs.core.PersistentHashSet.fromArray([[cljs.core.str("Maybe."),cljs.core.str(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p1__11968_SHARP_))].join('')], true));
}),cljs.core.mapcat.call(null,lt.plugins.elm_light.elm_ast.get_exposed_declarations,cljs.core.filterv.call(null,(function (p1__11967_SHARP_){return cljs.core._EQ_.call(null,"Maybe",new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"moduleDeclaration","moduleDeclaration",1240624864).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",1014001140).cljs$core$IFn$_invoke$arity$1(p1__11967_SHARP_))));
}),modules))),cljs.core.map.call(null,(function (p1__11970_SHARP_){return cljs.core.assoc.call(null,p1__11970_SHARP_,new cljs.core.Keyword(null,"candidate-tokens","candidate-tokens",3775833238),cljs.core.PersistentHashSet.fromArray([[cljs.core.str("Result."),cljs.core.str(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p1__11970_SHARP_))].join('')], true));
}),cljs.core.mapcat.call(null,lt.plugins.elm_light.elm_ast.get_exposed_declarations,cljs.core.filterv.call(null,(function (p1__11969_SHARP_){return cljs.core._EQ_.call(null,"Result",new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"moduleDeclaration","moduleDeclaration",1240624864).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",1014001140).cljs$core$IFn$_invoke$arity$1(p1__11969_SHARP_))));
}),modules))),cljs.core.map.call(null,(function (p1__11972_SHARP_){return cljs.core.assoc.call(null,p1__11972_SHARP_,new cljs.core.Keyword(null,"candidate-tokens","candidate-tokens",3775833238),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p1__11972_SHARP_),"Program"))?new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["Program",null], null), null):cljs.core.PersistentHashSet.fromArray([[cljs.core.str("Platform."),cljs.core.str(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p1__11972_SHARP_))].join('')], true)));
}),cljs.core.mapcat.call(null,lt.plugins.elm_light.elm_ast.get_exposed_declarations,cljs.core.filterv.call(null,(function (p1__11971_SHARP_){return cljs.core._EQ_.call(null,"Platform",new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"moduleDeclaration","moduleDeclaration",1240624864).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",1014001140).cljs$core$IFn$_invoke$arity$1(p1__11971_SHARP_))));
}),modules))),cljs.core.map.call(null,(function (p1__11974_SHARP_){return cljs.core.assoc.call(null,p1__11974_SHARP_,new cljs.core.Keyword(null,"candidate-tokens","candidate-tokens",3775833238),(function (){var G__11980 = new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p1__11974_SHARP_);if(cljs.core._EQ_.call(null,"!",G__11980))
{return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["!",null], null), null);
} else
{if(cljs.core._EQ_.call(null,"Cmd",G__11980))
{return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["Cmd",null], null), null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.PersistentHashSet.fromArray([[cljs.core.str("Platform.Cmd"),cljs.core.str(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p1__11974_SHARP_))].join('')], true);
} else
{return null;
}
}
}
})());
}),cljs.core.mapcat.call(null,lt.plugins.elm_light.elm_ast.get_exposed_declarations,cljs.core.filterv.call(null,(function (p1__11973_SHARP_){return cljs.core._EQ_.call(null,"Platform.Cmd",new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"moduleDeclaration","moduleDeclaration",1240624864).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",1014001140).cljs$core$IFn$_invoke$arity$1(p1__11973_SHARP_))));
}),modules))),cljs.core.map.call(null,(function (p1__11976_SHARP_){return cljs.core.assoc.call(null,p1__11976_SHARP_,new cljs.core.Keyword(null,"candidate-tokens","candidate-tokens",3775833238),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p1__11976_SHARP_),"Sub"))?new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["Sub",null], null), null):cljs.core.PersistentHashSet.fromArray([[cljs.core.str("Platform.Sub."),cljs.core.str(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p1__11976_SHARP_))].join('')], true)));
}),cljs.core.mapcat.call(null,lt.plugins.elm_light.elm_ast.get_exposed_declarations,cljs.core.filterv.call(null,(function (p1__11975_SHARP_){return cljs.core._EQ_.call(null,"Platform.Sub",new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"moduleDeclaration","moduleDeclaration",1240624864).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",1014001140).cljs$core$IFn$_invoke$arity$1(p1__11975_SHARP_))));
}),modules))),cljs.core.map.call(null,(function (p1__11978_SHARP_){return cljs.core.assoc.call(null,p1__11978_SHARP_,new cljs.core.Keyword(null,"candidate-tokens","candidate-tokens",3775833238),((cljs.core._EQ_.call(null,"::",new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p1__11978_SHARP_)))?new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["::",null], null), null):cljs.core.PersistentHashSet.fromArray([[cljs.core.str("List."),cljs.core.str(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p1__11978_SHARP_))].join('')], true)));
}),cljs.core.mapcat.call(null,lt.plugins.elm_light.elm_ast.get_exposed_declarations,cljs.core.filterv.call(null,(function (p1__11977_SHARP_){return cljs.core._EQ_.call(null,"List",new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"moduleDeclaration","moduleDeclaration",1240624864).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",1014001140).cljs$core$IFn$_invoke$arity$1(p1__11977_SHARP_))));
}),modules))));
});
lt.plugins.elm_light.elm_ast.get_current_module_candidates = (function get_current_module_candidates(module){return cljs.core.map.call(null,(function (p1__11981_SHARP_){return cljs.core.assoc.call(null,p1__11981_SHARP_,new cljs.core.Keyword(null,"candidate-tokens","candidate-tokens",3775833238),cljs.core.PersistentHashSet.fromArray([[cljs.core.str(lt.plugins.elm_light.elm_ast.get_module_name.call(null,module)),cljs.core.str("."),cljs.core.str(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p1__11981_SHARP_))].join(''),new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p1__11981_SHARP_)], true));
}),lt.plugins.elm_light.elm_ast.enrich_module_declarations.call(null,module));
});
lt.plugins.elm_light.elm_ast.get_jump_to_candidates = (function get_jump_to_candidates(module,modules){return cljs.core.concat.call(null,lt.plugins.elm_light.elm_ast.get_current_module_candidates.call(null,module),lt.plugins.elm_light.elm_ast.get_external_candidates.call(null,module,modules),lt.plugins.elm_light.elm_ast.get_default_candidates.call(null,modules));
});
lt.plugins.elm_light.elm_ast.get_candidate_by_token = (function get_candidate_by_token(token,module,modules){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__11982_SHARP_){return cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"candidate-tokens","candidate-tokens",3775833238).cljs$core$IFn$_invoke$arity$1(p1__11982_SHARP_),token);
}),lt.plugins.elm_light.elm_ast.get_jump_to_candidates.call(null,module,modules)));
});
lt.plugins.elm_light.elm_ast.__GT_pos = (function __GT_pos(ast_pos){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(ast_pos) - 1),new cljs.core.Keyword(null,"ch","ch",1013907415),(new cljs.core.Keyword(null,"column","column",3954034376).cljs$core$IFn$_invoke$arity$1(ast_pos) - 1)], null);
});
lt.plugins.elm_light.elm_ast.__GT_range = (function __GT_range(location){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",1123661780),lt.plugins.elm_light.elm_ast.__GT_pos.call(null,new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(location)),new cljs.core.Keyword(null,"end","end",1014004813),lt.plugins.elm_light.elm_ast.__GT_pos.call(null,new cljs.core.Keyword(null,"end","end",1014004813).cljs$core$IFn$_invoke$arity$1(location))], null);
});
lt.plugins.elm_light.elm_ast.in_range_QMARK_ = (function in_range_QMARK_(p__11983,decl){var map__11986 = p__11983;var map__11986__$1 = ((cljs.core.seq_QMARK_.call(null,map__11986))?cljs.core.apply.call(null,cljs.core.hash_map,map__11986):map__11986);var line = cljs.core.get.call(null,map__11986__$1,new cljs.core.Keyword(null,"line","line",1017226086));var ch = cljs.core.get.call(null,map__11986__$1,new cljs.core.Keyword(null,"ch","ch",1013907415));var map__11987 = lt.plugins.elm_light.elm_ast.__GT_range.call(null,new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(decl));var map__11987__$1 = ((cljs.core.seq_QMARK_.call(null,map__11987))?cljs.core.apply.call(null,cljs.core.hash_map,map__11987):map__11987);var end = cljs.core.get.call(null,map__11987__$1,new cljs.core.Keyword(null,"end","end",1014004813));var start = cljs.core.get.call(null,map__11987__$1,new cljs.core.Keyword(null,"start","start",1123661780));if(((line < new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(start))) || ((line > new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(end))))
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
var find_top_level_declaration_by_pos__2 = (function (pos,module){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__11988_SHARP_){return lt.plugins.elm_light.elm_ast.in_range_QMARK_.call(null,pos,p1__11988_SHARP_);
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
lt.plugins.elm_light.elm_ast.get_hints = (function get_hints(p__11990,module_file,project_dir){var map__11992 = p__11990;var map__11992__$1 = ((cljs.core.seq_QMARK_.call(null,map__11992))?cljs.core.apply.call(null,cljs.core.hash_map,map__11992):map__11992);var token = cljs.core.get.call(null,map__11992__$1,new cljs.core.Keyword(null,"token","token",1124445547));var temp__4092__auto__ = lt.plugins.elm_light.elm_ast.get_module_ast.call(null,project_dir,module_file);if(cljs.core.truth_(temp__4092__auto__))
{var module = temp__4092__auto__;return cljs.core.sort_by.call(null,cljs.core.juxt.call(null,((function (module,temp__4092__auto__,map__11992,map__11992__$1,token){
return (function (x){return new cljs.core.Keyword(null,"completion","completion",4767668046).cljs$core$IFn$_invoke$arity$1(x).lastIndexOf(".");
});})(module,temp__4092__auto__,map__11992,map__11992__$1,token))
,new cljs.core.Keyword(null,"completion","completion",4767668046)),cljs.core.filter.call(null,((function (module,temp__4092__auto__,map__11992,map__11992__$1,token){
return (function (p1__11989_SHARP_){return cljs.core._EQ_.call(null,0,new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(p1__11989_SHARP_).indexOf(token));
});})(module,temp__4092__auto__,map__11992,map__11992__$1,token))
,cljs.core.mapcat.call(null,cljs.core.partial.call(null,lt.plugins.elm_light.elm_ast.to_hint,lt.plugins.elm_light.elm_ast.get_module_name.call(null,module)),lt.plugins.elm_light.elm_ast.get_jump_to_candidates.call(null,module,new cljs.core.Keyword(null,"file-asts","file-asts",3945857876).cljs$core$IFn$_invoke$arity$1(lt.plugins.elm_light.elm_ast.get_project.call(null,project_dir))))));
} else
{return null;
}
});
lt.plugins.elm_light.elm_ast.search_docs = (function search_docs(sym,project_dir){var qualified_name = (function (p1__11993_SHARP_){return [cljs.core.str(new cljs.core.Keyword(null,"module-name","module-name",4067691710).cljs$core$IFn$_invoke$arity$1(p1__11993_SHARP_)),cljs.core.str("."),cljs.core.str(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p1__11993_SHARP_))].join('');
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
lt.plugins.elm_light.elm_ast.print_exposing = (function print_exposing(p__11994){var map__11996 = p__11994;var map__11996__$1 = ((cljs.core.seq_QMARK_.call(null,map__11996))?cljs.core.apply.call(null,cljs.core.hash_map,map__11996):map__11996);var exposing = map__11996__$1;var exports = cljs.core.get.call(null,map__11996__$1,new cljs.core.Keyword(null,"exports","exports",3999815345));if(cljs.core.not.call(null,cljs.core.seq.call(null,exports)))
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
return (function (exports){return cljs.core.conj.call(null,exports,(function (){var G__11998 = new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(decl);if(cljs.core._EQ_.call(null,"binOpDef",G__11998))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"binOpRef",new cljs.core.Keyword(null,"value","value",1125876963),value], null);
} else
{if(cljs.core._EQ_.call(null,"typeDecl",G__11998))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"adt",new cljs.core.Keyword(null,"value","value",1125876963),value], null);
} else
{if(cljs.core._EQ_.call(null,"typeAliasDecl",G__11998))
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
/**
* Removes an export from and exposing node. Ignored if exposed through exposeAll (..)
*/
lt.plugins.elm_light.elm_ast.unexpose_decl = (function unexpose_decl(decl,exposing){var value = new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(decl);return cljs.core.update_in.call(null,exposing,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exports","exports",3999815345)], null),((function (value){
return (function (exports){return cljs.core.remove.call(null,((function (value){
return (function (p1__11999_SHARP_){return cljs.core._EQ_.call(null,value,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p1__11999_SHARP_));
});})(value))
,exports);
});})(value))
);
});
lt.plugins.elm_light.elm_ast.status_class = (function status_class(p__12000){var map__12003 = p__12000;var map__12003__$1 = ((cljs.core.seq_QMARK_.call(null,map__12003))?cljs.core.apply.call(null,cljs.core.hash_map,map__12003):map__12003);var status = cljs.core.get.call(null,map__12003__$1,new cljs.core.Keyword(null,"status","status",4416389988));var G__12004 = status;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",1013907790),G__12004))
{return "ok";
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",1110689146),G__12004))
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
lt.plugins.elm_light.elm_ast.status_text = (function status_text(p__12005){var map__12008 = p__12005;var map__12008__$1 = ((cljs.core.seq_QMARK_.call(null,map__12008))?cljs.core.apply.call(null,cljs.core.hash_map,map__12008):map__12008);var error = cljs.core.get.call(null,map__12008__$1,new cljs.core.Keyword(null,"error","error",1110689146));var status = cljs.core.get.call(null,map__12008__$1,new cljs.core.Keyword(null,"status","status",4416389988));return [cljs.core.str("AST: "),cljs.core.str((function (){var G__12009 = status;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",1110689146),G__12009))
{return "Error";
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",1013907790),G__12009))
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
lt.plugins.elm_light.elm_ast.__GT_status_ui = (function __GT_status_ui(p__12010){var map__12012 = p__12010;var map__12012__$1 = ((cljs.core.seq_QMARK_.call(null,map__12012))?cljs.core.apply.call(null,cljs.core.hash_map,map__12012):map__12012);var ast_summary = cljs.core.get.call(null,map__12012__$1,new cljs.core.Keyword(null,"ast-summary","ast-summary",1727157965));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("ast-status "),cljs.core.str(lt.plugins.elm_light.elm_ast.status_class.call(null,ast_summary))].join('')], null),lt.plugins.elm_light.elm_ast.status_text.call(null,ast_summary)], null);
});
lt.plugins.elm_light.elm_ast.__BEH__update_ast_status = (function __BEH__update_ast_status(this$,f){return lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast-summary","ast-summary",1727157965)], null),f);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.elm-ast","update-ast-status","lt.plugins.elm-light.elm-ast/update-ast-status",2519133077),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.elm_ast.__BEH__update_ast_status,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"update!","update!",779473898),null], null), null));
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.elm-ast","statusbar.ast-status","lt.plugins.elm-light.elm-ast/statusbar.ast-status",1374391534),new cljs.core.Keyword(null,"triggers","triggers",2516997421),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.elm-light.elm-ast","update-ast-status","lt.plugins.elm-light.elm-ast/update-ast-status",2519133077),null], null), null),new cljs.core.Keyword(null,"ast-summary","ast-summary",1727157965),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",4416389988),""], null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return lt.objs.statusbar.statusbar_item.call(null,crate.binding.bound.call(null,this$,lt.plugins.elm_light.elm_ast.__GT_status_ui),"");
}));
lt.plugins.elm_light.elm_ast.statusbar_ast_summary = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.elm-light.elm-ast","statusbar.ast-status","lt.plugins.elm-light.elm-ast/statusbar.ast-status",1374391534));
lt.objs.statusbar.add_statusbar_item.call(null,lt.plugins.elm_light.elm_ast.statusbar_ast_summary);
lt.plugins.elm_light.elm_ast.update_status_for_editor = (function update_status_for_editor(ed){var map__12015 = new cljs.core.Keyword(null,"ast-status","ast-status",2421112079).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed));var map__12015__$1 = ((cljs.core.seq_QMARK_.call(null,map__12015))?cljs.core.apply.call(null,cljs.core.hash_map,map__12015):map__12015);var error = cljs.core.get.call(null,map__12015__$1,new cljs.core.Keyword(null,"error","error",1110689146));var status = cljs.core.get.call(null,map__12015__$1,new cljs.core.Keyword(null,"status","status",4416389988));return lt.object.raise.call(null,lt.plugins.elm_light.elm_ast.statusbar_ast_summary,new cljs.core.Keyword(null,"update!","update!",779473898),((function (map__12015,map__12015__$1,error,status){
return (function (p1__12013_SHARP_){return cljs.core.assoc.call(null,p1__12013_SHARP_,new cljs.core.Keyword(null,"status","status",4416389988),status,new cljs.core.Keyword(null,"error","error",1110689146),error);
});})(map__12015,map__12015__$1,error,status))
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
lt.plugins.elm_light.utils.find_symbol = (function find_symbol(ed,pos){var curr_tok = lt.objs.editor.__GT_token.call(null,ed,pos);var G__19052 = new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(curr_tok);if(cljs.core._EQ_.call(null,"builtin",G__19052))
{return [cljs.core.str(find_symbol.call(null,ed,cljs.core.assoc.call(null,pos,new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(curr_tok)))),cljs.core.str(new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(curr_tok))].join('');
} else
{if(cljs.core._EQ_.call(null,"variable-3",G__19052))
{return [cljs.core.str(find_symbol.call(null,ed,cljs.core.assoc.call(null,pos,new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(curr_tok)))),cljs.core.str(new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(curr_tok))].join('');
} else
{if(cljs.core._EQ_.call(null,"variable-2",G__19052))
{return [cljs.core.str(find_symbol.call(null,ed,cljs.core.assoc.call(null,pos,new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(curr_tok)))),cljs.core.str(new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(curr_tok))].join('');
} else
{if(cljs.core._EQ_.call(null,"variable",G__19052))
{return [cljs.core.str(find_symbol.call(null,ed,cljs.core.assoc.call(null,pos,new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(curr_tok)))),cljs.core.str(new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(curr_tok))].join('');
} else
{if(cljs.core._EQ_.call(null,"qualifier",G__19052))
{return [cljs.core.str(find_symbol.call(null,ed,cljs.core.assoc.call(null,pos,new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(curr_tok)))),cljs.core.str(new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(curr_tok))].join('');
} else
{if(cljs.core._EQ_.call(null,"def",G__19052))
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
return (function (p__19059){var vec__19060 = p__19059;var _ = cljs.core.nth.call(null,vec__19060,0,null);var vs = cljs.core.nth.call(null,vec__19060,1,null);return cljs.core.apply.call(null,cljs.core.merge,vs);
});})(pkg_json,deps_json))
,cljs.core.group_by.call(null,new cljs.core.Keyword(null,"package","package",4501809080),cljs.core.concat.call(null,cljs.core.mapv.call(null,((function (pkg_json,deps_json){
return (function (p__19061){var vec__19062 = p__19061;var k = cljs.core.nth.call(null,vec__19062,0,null);var v = cljs.core.nth.call(null,vec__19062,1,null);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"package","package",4501809080),lt.plugins.elm_light.utils.nskw__GT_name.call(null,k),new cljs.core.Keyword(null,"exact","exact",1110851185),v], null);
});})(pkg_json,deps_json))
,lt.plugins.elm_light.utils.parse_json_file.call(null,deps_json)),cljs.core.mapv.call(null,((function (pkg_json,deps_json){
return (function (p__19063){var vec__19064 = p__19063;var k = cljs.core.nth.call(null,vec__19064,0,null);var v = cljs.core.nth.call(null,vec__19064,1,null);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"package","package",4501809080),lt.plugins.elm_light.utils.nskw__GT_name.call(null,k),new cljs.core.Keyword(null,"range","range",1122184367),v], null);
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
lt.plugins.elm_light.gutter.gutter_marker_exposed = (function gutter_marker_exposed(){var e__6289__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.elm-gutter-marker","div.elm-gutter-marker",2892074906),"@"], null));var seq__12205_12235 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__12206_12236 = null;var count__12207_12237 = 0;var i__12208_12238 = 0;while(true){
if((i__12208_12238 < count__12207_12237))
{var vec__12209_12239 = cljs.core._nth.call(null,chunk__12206_12236,i__12208_12238);var ev__6290__auto___12240 = cljs.core.nth.call(null,vec__12209_12239,0,null);var func__6291__auto___12241 = cljs.core.nth.call(null,vec__12209_12239,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___12240,func__6291__auto___12241);
{
var G__12242 = seq__12205_12235;
var G__12243 = chunk__12206_12236;
var G__12244 = count__12207_12237;
var G__12245 = (i__12208_12238 + 1);
seq__12205_12235 = G__12242;
chunk__12206_12236 = G__12243;
count__12207_12237 = G__12244;
i__12208_12238 = G__12245;
continue;
}
} else
{var temp__4092__auto___12246 = cljs.core.seq.call(null,seq__12205_12235);if(temp__4092__auto___12246)
{var seq__12205_12247__$1 = temp__4092__auto___12246;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12205_12247__$1))
{var c__5632__auto___12248 = cljs.core.chunk_first.call(null,seq__12205_12247__$1);{
var G__12249 = cljs.core.chunk_rest.call(null,seq__12205_12247__$1);
var G__12250 = c__5632__auto___12248;
var G__12251 = cljs.core.count.call(null,c__5632__auto___12248);
var G__12252 = 0;
seq__12205_12235 = G__12249;
chunk__12206_12236 = G__12250;
count__12207_12237 = G__12251;
i__12208_12238 = G__12252;
continue;
}
} else
{var vec__12210_12253 = cljs.core.first.call(null,seq__12205_12247__$1);var ev__6290__auto___12254 = cljs.core.nth.call(null,vec__12210_12253,0,null);var func__6291__auto___12255 = cljs.core.nth.call(null,vec__12210_12253,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___12254,func__6291__auto___12255);
{
var G__12256 = cljs.core.next.call(null,seq__12205_12247__$1);
var G__12257 = null;
var G__12258 = 0;
var G__12259 = 0;
seq__12205_12235 = G__12256;
chunk__12206_12236 = G__12257;
count__12207_12237 = G__12258;
i__12208_12238 = G__12259;
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
lt.plugins.elm_light.gutter.__BEH__elm_gutter_exposeds = (function __BEH__elm_gutter_exposeds(ed){var cm_ed_12260 = lt.objs.editor.__GT_cm_ed.call(null,ed);var seq__12219_12261 = cljs.core.seq.call(null,cm_ed_12260.gutters);var chunk__12220_12262 = null;var count__12221_12263 = 0;var i__12222_12264 = 0;while(true){
if((i__12222_12264 < count__12221_12263))
{var gutter_12265 = cljs.core._nth.call(null,chunk__12220_12262,i__12222_12264);cljs.core.println.call(null,"gutter: ",gutter_12265);
{
var G__12266 = seq__12219_12261;
var G__12267 = chunk__12220_12262;
var G__12268 = count__12221_12263;
var G__12269 = (i__12222_12264 + 1);
seq__12219_12261 = G__12266;
chunk__12220_12262 = G__12267;
count__12221_12263 = G__12268;
i__12222_12264 = G__12269;
continue;
}
} else
{var temp__4092__auto___12270 = cljs.core.seq.call(null,seq__12219_12261);if(temp__4092__auto___12270)
{var seq__12219_12271__$1 = temp__4092__auto___12270;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12219_12271__$1))
{var c__5632__auto___12272 = cljs.core.chunk_first.call(null,seq__12219_12271__$1);{
var G__12273 = cljs.core.chunk_rest.call(null,seq__12219_12271__$1);
var G__12274 = c__5632__auto___12272;
var G__12275 = cljs.core.count.call(null,c__5632__auto___12272);
var G__12276 = 0;
seq__12219_12261 = G__12273;
chunk__12220_12262 = G__12274;
count__12221_12263 = G__12275;
i__12222_12264 = G__12276;
continue;
}
} else
{var gutter_12277 = cljs.core.first.call(null,seq__12219_12271__$1);cljs.core.println.call(null,"gutter: ",gutter_12277);
{
var G__12278 = cljs.core.next.call(null,seq__12219_12271__$1);
var G__12279 = null;
var G__12280 = 0;
var G__12281 = 0;
seq__12219_12261 = G__12278;
chunk__12220_12262 = G__12279;
count__12221_12263 = G__12280;
i__12222_12264 = G__12281;
continue;
}
}
} else
{}
}
break;
}
return lt.objs.editor.operation.call(null,lt.objs.editor.__GT_cm_ed.call(null,ed),(function (){lt.objs.editor.__GT_cm_ed.call(null,ed).clearGutter("elm-gutter");
var seq__12223 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"elm-exposeds-bookmarks","elm-exposeds-bookmarks",1216410620).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));var chunk__12224 = null;var count__12225 = 0;var i__12226 = 0;while(true){
if((i__12226 < count__12225))
{var bm = cljs.core._nth.call(null,chunk__12224,i__12226);var temp__4092__auto___12282 = cljs.core.js__GT_clj.call(null,bm.find(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true,new cljs.core.Keyword(null,"force-obj","force-obj",2540778119),true);if(cljs.core.truth_(temp__4092__auto___12282))
{var pos_12283 = temp__4092__auto___12282;var temp__4092__auto___12284__$1 = pos_12283.line;if(cljs.core.truth_(temp__4092__auto___12284__$1))
{var line_12285 = temp__4092__auto___12284__$1;lt.objs.editor.__GT_cm_ed.call(null,ed).setGutterMarker(line_12285,"elm-gutter",lt.plugins.elm_light.gutter.gutter_marker_exposed.call(null));
} else
{}
} else
{}
{
var G__12286 = seq__12223;
var G__12287 = chunk__12224;
var G__12288 = count__12225;
var G__12289 = (i__12226 + 1);
seq__12223 = G__12286;
chunk__12224 = G__12287;
count__12225 = G__12288;
i__12226 = G__12289;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12223);if(temp__4092__auto__)
{var seq__12223__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12223__$1))
{var c__5632__auto__ = cljs.core.chunk_first.call(null,seq__12223__$1);{
var G__12290 = cljs.core.chunk_rest.call(null,seq__12223__$1);
var G__12291 = c__5632__auto__;
var G__12292 = cljs.core.count.call(null,c__5632__auto__);
var G__12293 = 0;
seq__12223 = G__12290;
chunk__12224 = G__12291;
count__12225 = G__12292;
i__12226 = G__12293;
continue;
}
} else
{var bm = cljs.core.first.call(null,seq__12223__$1);var temp__4092__auto___12294__$1 = cljs.core.js__GT_clj.call(null,bm.find(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true,new cljs.core.Keyword(null,"force-obj","force-obj",2540778119),true);if(cljs.core.truth_(temp__4092__auto___12294__$1))
{var pos_12295 = temp__4092__auto___12294__$1;var temp__4092__auto___12296__$2 = pos_12295.line;if(cljs.core.truth_(temp__4092__auto___12296__$2))
{var line_12297 = temp__4092__auto___12296__$2;lt.objs.editor.__GT_cm_ed.call(null,ed).setGutterMarker(line_12297,"elm-gutter",lt.plugins.elm_light.gutter.gutter_marker_exposed.call(null));
} else
{}
} else
{}
{
var G__12298 = cljs.core.next.call(null,seq__12223__$1);
var G__12299 = null;
var G__12300 = 0;
var G__12301 = 0;
seq__12223 = G__12298;
chunk__12224 = G__12299;
count__12225 = G__12300;
i__12226 = G__12301;
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
lt.plugins.elm_light.gutter.__BEH__elm_gutter_exposeds_mark = (function __BEH__elm_gutter_exposeds_mark(ed){var path = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));var exposeds = lt.plugins.elm_light.elm_ast.get_gutter_exposeds.call(null,path,lt.plugins.elm_light.utils.project_path.call(null,path));var seq__12231_12302 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"elm-exposeds-bookmarks","elm-exposeds-bookmarks",1216410620).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));var chunk__12232_12303 = null;var count__12233_12304 = 0;var i__12234_12305 = 0;while(true){
if((i__12234_12305 < count__12233_12304))
{var bm_12306 = cljs.core._nth.call(null,chunk__12232_12303,i__12234_12305);bm_12306.clear();
{
var G__12307 = seq__12231_12302;
var G__12308 = chunk__12232_12303;
var G__12309 = count__12233_12304;
var G__12310 = (i__12234_12305 + 1);
seq__12231_12302 = G__12307;
chunk__12232_12303 = G__12308;
count__12233_12304 = G__12309;
i__12234_12305 = G__12310;
continue;
}
} else
{var temp__4092__auto___12311 = cljs.core.seq.call(null,seq__12231_12302);if(temp__4092__auto___12311)
{var seq__12231_12312__$1 = temp__4092__auto___12311;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12231_12312__$1))
{var c__5632__auto___12313 = cljs.core.chunk_first.call(null,seq__12231_12312__$1);{
var G__12314 = cljs.core.chunk_rest.call(null,seq__12231_12312__$1);
var G__12315 = c__5632__auto___12313;
var G__12316 = cljs.core.count.call(null,c__5632__auto___12313);
var G__12317 = 0;
seq__12231_12302 = G__12314;
chunk__12232_12303 = G__12315;
count__12233_12304 = G__12316;
i__12234_12305 = G__12317;
continue;
}
} else
{var bm_12318 = cljs.core.first.call(null,seq__12231_12312__$1);bm_12318.clear();
{
var G__12319 = cljs.core.next.call(null,seq__12231_12312__$1);
var G__12320 = null;
var G__12321 = 0;
var G__12322 = 0;
seq__12231_12302 = G__12319;
chunk__12232_12303 = G__12320;
count__12233_12304 = G__12321;
i__12234_12305 = G__12322;
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
cljs.core.async.impl.protocols.ReadPort = (function (){var obj18579 = {};return obj18579;
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
cljs.core.async.impl.protocols.WritePort = (function (){var obj18581 = {};return obj18581;
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
cljs.core.async.impl.protocols.Channel = (function (){var obj18583 = {};return obj18583;
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
cljs.core.async.impl.protocols.Handler = (function (){var obj18585 = {};return obj18585;
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
cljs.core.async.impl.protocols.Buffer = (function (){var obj18587 = {};return obj18587;
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
cljs.core.async.impl.protocols.UnblockingBuffer = (function (){var obj18589 = {};return obj18589;
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
var G__18544 = (cnt + 1);
cnt = G__18544;
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
{var v_18545 = this$.pop();if(keep_QMARK_.call(null,v_18545))
{this$.unshift(v_18545);
} else
{}
{
var G__18546 = (x + 1);
x = G__18546;
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
var count_18575 = 0;while(true){
var m_18576 = cljs.core.async.impl.dispatch.tasks.pop();if((m_18576 == null))
{} else
{m_18576.call(null);
if((count_18575 < cljs.core.async.impl.dispatch.TASK_BATCH_SIZE))
{{
var G__18577 = (count_18575 + 1);
count_18575 = G__18577;
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
cljs.core.async.impl.channels.box = (function box(val){if(typeof cljs.core.async.impl.channels.t18550 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.impl.channels.t18550 = (function (val,box,meta18551){
this.val = val;
this.box = box;
this.meta18551 = meta18551;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
cljs.core.async.impl.channels.t18550.cljs$lang$type = true;
cljs.core.async.impl.channels.t18550.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t18550";
cljs.core.async.impl.channels.t18550.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async.impl.channels/t18550");
});
cljs.core.async.impl.channels.t18550.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.val;
});
cljs.core.async.impl.channels.t18550.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18552){var self__ = this;
var _18552__$1 = this;return self__.meta18551;
});
cljs.core.async.impl.channels.t18550.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18552,meta18551__$1){var self__ = this;
var _18552__$1 = this;return (new cljs.core.async.impl.channels.t18550(self__.val,self__.box,meta18551__$1));
});
cljs.core.async.impl.channels.__GT_t18550 = (function __GT_t18550(val__$1,box__$1,meta18551){return (new cljs.core.async.impl.channels.t18550(val__$1,box__$1,meta18551));
});
}
return (new cljs.core.async.impl.channels.t18550(val,box,null));
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
var taker_18563 = self__.takes.pop();if((taker_18563 == null))
{} else
{if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker_18563))
{var take_cb_18564 = cljs.core.async.impl.protocols.commit.call(null,taker_18563);cljs.core.async.impl.dispatch.run.call(null,((function (take_cb_18564,taker_18563,this$__$1){
return (function (){return take_cb_18564.call(null,null);
});})(take_cb_18564,taker_18563,this$__$1))
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
var G__18610 = (level + 1);
level = G__18610;
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
var skip_list_node__3 = (function (k,v,level){var arr = (new Array((level + 1)));var i_18611 = 0;while(true){
if((i_18611 < arr.length))
{(arr[i_18611] = null);
{
var G__18612 = (i_18611 + 1);
i_18611 = G__18612;
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
var G__18613 = x_SINGLEQUOTE_;
x__$1 = G__18613;
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
var G__18614 = x__$1;
var G__18615 = k;
var G__18616 = (level - 1);
var G__18617 = update;
x = G__18614;
k = G__18615;
level = G__18616;
update = G__18617;
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
{var i_18618 = (self__.level + 1);while(true){
if((i_18618 <= (new_level + 1)))
{(update[i_18618] = self__.header);
{
var G__18619 = (i_18618 + 1);
i_18618 = G__18619;
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
{var i_18620 = 0;while(true){
if((i_18620 <= self__.level))
{var links_18621 = (update[i_18620]).forward;if(((links_18621[i_18620]) === x__$1))
{(links_18621[i_18620] = (x__$1.forward[i_18620]));
{
var G__18622 = (i_18620 + 1);
i_18620 = G__18622;
continue;
}
} else
{{
var G__18623 = (i_18620 + 1);
i_18620 = G__18623;
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
var G__18624 = x_SINGLEQUOTE_;
x__$1 = G__18624;
continue;
}
}
}
break;
}
})();if(!((nx == null)))
{{
var G__18625 = nx;
var G__18626 = (level__$1 - 1);
x = G__18625;
level__$1 = G__18626;
continue;
}
} else
{{
var G__18627 = x;
var G__18628 = (level__$1 - 1);
x = G__18627;
level__$1 = G__18628;
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
var G__18629 = x_SINGLEQUOTE_;
x__$1 = G__18629;
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
var G__18630 = nx;
var G__18631 = (level__$1 - 1);
x = G__18630;
level__$1 = G__18631;
continue;
}
} else
{{
var G__18632 = x;
var G__18633 = (level__$1 - 1);
x = G__18632;
level__$1 = G__18633;
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
cljs.core.async.impl.ioc_helpers.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.impl.ioc_helpers.t18474 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t18474 = (function (f,fn_handler,meta18475){
this.f = f;
this.fn_handler = fn_handler;
this.meta18475 = meta18475;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.impl.ioc_helpers.t18474.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.t18474.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t18474";
cljs.core.async.impl.ioc_helpers.t18474.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async.impl.ioc-helpers/t18474");
});
cljs.core.async.impl.ioc_helpers.t18474.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.impl.ioc_helpers.t18474.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.impl.ioc_helpers.t18474.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.impl.ioc_helpers.t18474.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18476){var self__ = this;
var _18476__$1 = this;return self__.meta18475;
});
cljs.core.async.impl.ioc_helpers.t18474.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18476,meta18475__$1){var self__ = this;
var _18476__$1 = this;return (new cljs.core.async.impl.ioc_helpers.t18474(self__.f,self__.fn_handler,meta18475__$1));
});
cljs.core.async.impl.ioc_helpers.__GT_t18474 = (function __GT_t18474(f__$1,fn_handler__$1,meta18475){return (new cljs.core.async.impl.ioc_helpers.t18474(f__$1,fn_handler__$1,meta18475));
});
}
return (new cljs.core.async.impl.ioc_helpers.t18474(f,fn_handler,null));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function run_state_machine(state){return cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function run_state_machine_wrapped(state){try{return cljs.core.async.impl.ioc_helpers.run_state_machine.call(null,state);
}catch (e18478){if((e18478 instanceof Object))
{var ex = e18478;cljs.core.async.impl.protocols.close_BANG_.call(null,cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.USER_START_IDX));
throw ex;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18478;
} else
{return null;
}
}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function take_BANG_(state,blk,c){var temp__4090__auto__ = cljs.core.async.impl.protocols.take_BANG_.call(null,c,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (x){var statearr_18481_18524 = state;(statearr_18481_18524[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);
(statearr_18481_18524[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
})));if(cljs.core.truth_(temp__4090__auto__))
{var cb = temp__4090__auto__;var statearr_18482_18525 = state;(statearr_18482_18525[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
(statearr_18482_18525[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function put_BANG_(state,blk,c,val){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,c,val,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (){var statearr_18485_18526 = state;(statearr_18485_18526[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = null);
(statearr_18485_18526[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
})));if(cljs.core.truth_(temp__4090__auto__))
{var cb = temp__4090__auto__;var statearr_18486_18527 = state;(statearr_18486_18527[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
(statearr_18486_18527[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__18487){var map__18492 = p__18487;var map__18492__$1 = ((cljs.core.seq_QMARK_.call(null,map__18492))?cljs.core.apply.call(null,cljs.core.hash_map,map__18492):map__18492);var opts = map__18492__$1;var statearr_18493_18528 = state;(statearr_18493_18528[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4092__auto__ = cljs.core.async.do_alts.call(null,((function (map__18492,map__18492__$1,opts){
return (function (val){var statearr_18494_18529 = state;(statearr_18494_18529[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__18492,map__18492__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4092__auto__))
{var cb = temp__4092__auto__;var statearr_18495_18530 = state;(statearr_18495_18530[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__18487 = null;if (arguments.length > 3) {
  p__18487 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__18487);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__18531){
var state = cljs.core.first(arglist__18531);
arglist__18531 = cljs.core.next(arglist__18531);
var cont_block = cljs.core.first(arglist__18531);
arglist__18531 = cljs.core.next(arglist__18531);
var ports = cljs.core.first(arglist__18531);
var p__18487 = cljs.core.rest(arglist__18531);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__18487);
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
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5472__auto__,k18497,else__5473__auto__){var self__ = this;
var this__5472__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k18497,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893)))
{return self__.catch_block;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k18497,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687)))
{return self__.catch_exception;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k18497,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429)))
{return self__.finally_block;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k18497,new cljs.core.Keyword(null,"continue-block","continue-block",1486987097)))
{return self__.continue_block;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k18497,new cljs.core.Keyword(null,"prev","prev",1017353637)))
{return self__.prev;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k18497,else__5473__auto__);
} else
{return null;
}
}
}
}
}
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__18496){var self__ = this;
var this__5477__auto____$1 = this;var pred__18499 = cljs.core.keyword_identical_QMARK_;var expr__18500 = k__5478__auto__;if(cljs.core.truth_(pred__18499.call(null,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),expr__18500)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__18496,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__18499.call(null,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),expr__18500)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__18496,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__18499.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),expr__18500)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__18496,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__18499.call(null,new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),expr__18500)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__18496,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__18499.call(null,new cljs.core.Keyword(null,"prev","prev",1017353637),expr__18500)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__18496,self__.__meta,self__.__extmap,null));
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5478__auto__,G__18496),null));
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
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5469__auto__,G__18496){var self__ = this;
var this__5469__auto____$1 = this;return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__18496,self__.__extmap,self__.__hash));
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
cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function map__GT_ExceptionFrame(G__18498){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(new cljs.core.Keyword(null,"catch-block","catch-block",2343862893).cljs$core$IFn$_invoke$arity$1(G__18498),new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687).cljs$core$IFn$_invoke$arity$1(G__18498),new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(G__18498),new cljs.core.Keyword(null,"continue-block","continue-block",1486987097).cljs$core$IFn$_invoke$arity$1(G__18498),new cljs.core.Keyword(null,"prev","prev",1017353637).cljs$core$IFn$_invoke$arity$1(G__18498),null,cljs.core.dissoc.call(null,G__18498,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),new cljs.core.Keyword(null,"prev","prev",1017353637))));
});
cljs.core.async.impl.ioc_helpers.add_exception_frame = (function add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){var statearr_18503 = state;(statearr_18503[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame.call(null,catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES)));
return statearr_18503;
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
{var statearr_18509 = state;(statearr_18509[cljs.core.async.impl.ioc_helpers.STATE_IDX] = catch_block);
(statearr_18509[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = exception);
(statearr_18509[cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION] = null);
(statearr_18509[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),null,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),null));
return statearr_18509;
} else
{if(cljs.core.truth_((function (){var and__4872__auto__ = exception;if(cljs.core.truth_(and__4872__auto__))
{return (cljs.core.not.call(null,catch_block)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else
{return and__4872__auto__;
}
})()))
{var statearr_18510_18532 = state;(statearr_18510_18532[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = new cljs.core.Keyword(null,"prev","prev",1017353637).cljs$core$IFn$_invoke$arity$1(exception_frame));
{
var G__18533 = state;
state = G__18533;
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
{var statearr_18511 = state;(statearr_18511[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_18511[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),null));
return statearr_18511;
} else
{if(cljs.core.truth_((function (){var and__4872__auto__ = cljs.core.not.call(null,exception);if(and__4872__auto__)
{return new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__4872__auto__;
}
})()))
{var statearr_18512 = state;(statearr_18512[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_18512[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),null));
return statearr_18512;
} else
{if((cljs.core.not.call(null,exception)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame))))
{var statearr_18513 = state;(statearr_18513[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"continue-block","continue-block",1486987097).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_18513[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = new cljs.core.Keyword(null,"prev","prev",1017353637).cljs$core$IFn$_invoke$arity$1(exception_frame));
return statearr_18513;
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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t15910 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15910 = (function (f,fn_handler,meta15911){
this.f = f;
this.fn_handler = fn_handler;
this.meta15911 = meta15911;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15910.cljs$lang$type = true;
cljs.core.async.t15910.cljs$lang$ctorStr = "cljs.core.async/t15910";
cljs.core.async.t15910.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async/t15910");
});
cljs.core.async.t15910.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15910.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t15910.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t15910.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15912){var self__ = this;
var _15912__$1 = this;return self__.meta15911;
});
cljs.core.async.t15910.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15912,meta15911__$1){var self__ = this;
var _15912__$1 = this;return (new cljs.core.async.t15910(self__.f,self__.fn_handler,meta15911__$1));
});
cljs.core.async.__GT_t15910 = (function __GT_t15910(f__$1,fn_handler__$1,meta15911){return (new cljs.core.async.t15910(f__$1,fn_handler__$1,meta15911));
});
}
return (new cljs.core.async.t15910(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__15914 = buff;if(G__15914)
{var bit__5534__auto__ = null;if(cljs.core.truth_((function (){var or__4884__auto__ = bit__5534__auto__;if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return G__15914.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__15914.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15914);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15914);
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
{var val_18178 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_18178);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_18178,ret){
return (function (){return fn1.call(null,val_18178);
});})(val_18178,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__5732__auto___18179 = n;var x_18180 = 0;while(true){
if((x_18180 < n__5732__auto___18179))
{(a[x_18180] = 0);
{
var G__18181 = (x_18180 + 1);
x_18180 = G__18181;
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
var G__18182 = (i + 1);
i = G__18182;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t15918 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15918 = (function (flag,alt_flag,meta15919){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta15919 = meta15919;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15918.cljs$lang$type = true;
cljs.core.async.t15918.cljs$lang$ctorStr = "cljs.core.async/t15918";
cljs.core.async.t15918.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async/t15918");
});})(flag))
;
cljs.core.async.t15918.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15918.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t15918.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t15918.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_15920){var self__ = this;
var _15920__$1 = this;return self__.meta15919;
});})(flag))
;
cljs.core.async.t15918.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_15920,meta15919__$1){var self__ = this;
var _15920__$1 = this;return (new cljs.core.async.t15918(self__.flag,self__.alt_flag,meta15919__$1));
});})(flag))
;
cljs.core.async.__GT_t15918 = ((function (flag){
return (function __GT_t15918(flag__$1,alt_flag__$1,meta15919){return (new cljs.core.async.t15918(flag__$1,alt_flag__$1,meta15919));
});})(flag))
;
}
return (new cljs.core.async.t15918(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t15924 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15924 = (function (cb,flag,alt_handler,meta15925){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta15925 = meta15925;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15924.cljs$lang$type = true;
cljs.core.async.t15924.cljs$lang$ctorStr = "cljs.core.async/t15924";
cljs.core.async.t15924.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async/t15924");
});
cljs.core.async.t15924.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15924.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t15924.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t15924.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15926){var self__ = this;
var _15926__$1 = this;return self__.meta15925;
});
cljs.core.async.t15924.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15926,meta15925__$1){var self__ = this;
var _15926__$1 = this;return (new cljs.core.async.t15924(self__.cb,self__.flag,self__.alt_handler,meta15925__$1));
});
cljs.core.async.__GT_t15924 = (function __GT_t15924(cb__$1,flag__$1,alt_handler__$1,meta15925){return (new cljs.core.async.t15924(cb__$1,flag__$1,alt_handler__$1,meta15925));
});
}
return (new cljs.core.async.t15924(cb,flag,alt_handler,null));
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
return (function (p1__15927_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15927_SHARP_,port], null));
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
var G__18183 = (i + 1);
i = G__18183;
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
var alts_BANG___delegate = function (ports,p__15928){var map__15930 = p__15928;var map__15930__$1 = ((cljs.core.seq_QMARK_.call(null,map__15930))?cljs.core.apply.call(null,cljs.core.hash_map,map__15930):map__15930);var opts = map__15930__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__15928 = null;if (arguments.length > 1) {
  p__15928 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__15928);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__18184){
var ports = cljs.core.first(arglist__18184);
var p__15928 = cljs.core.rest(arglist__18184);
return alts_BANG___delegate(ports,p__15928);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t15938 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15938 = (function (ch,f,map_LT_,meta15939){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta15939 = meta15939;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15938.cljs$lang$type = true;
cljs.core.async.t15938.cljs$lang$ctorStr = "cljs.core.async/t15938";
cljs.core.async.t15938.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async/t15938");
});
cljs.core.async.t15938.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15938.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t15938.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15938.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t15941 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15941 = (function (fn1,_,meta15939,ch,f,map_LT_,meta15942){
this.fn1 = fn1;
this._ = _;
this.meta15939 = meta15939;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta15942 = meta15942;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15941.cljs$lang$type = true;
cljs.core.async.t15941.cljs$lang$ctorStr = "cljs.core.async/t15941";
cljs.core.async.t15941.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async/t15941");
});})(___$1))
;
cljs.core.async.t15941.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15941.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t15941.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t15941.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__15931_SHARP_){return f1.call(null,(((p1__15931_SHARP_ == null))?null:self__.f.call(null,p1__15931_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t15941.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_15943){var self__ = this;
var _15943__$1 = this;return self__.meta15942;
});})(___$1))
;
cljs.core.async.t15941.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_15943,meta15942__$1){var self__ = this;
var _15943__$1 = this;return (new cljs.core.async.t15941(self__.fn1,self__._,self__.meta15939,self__.ch,self__.f,self__.map_LT_,meta15942__$1));
});})(___$1))
;
cljs.core.async.__GT_t15941 = ((function (___$1){
return (function __GT_t15941(fn1__$1,___$2,meta15939__$1,ch__$2,f__$2,map_LT___$2,meta15942){return (new cljs.core.async.t15941(fn1__$1,___$2,meta15939__$1,ch__$2,f__$2,map_LT___$2,meta15942));
});})(___$1))
;
}
return (new cljs.core.async.t15941(fn1,___$1,self__.meta15939,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t15938.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15938.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15938.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15940){var self__ = this;
var _15940__$1 = this;return self__.meta15939;
});
cljs.core.async.t15938.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15940,meta15939__$1){var self__ = this;
var _15940__$1 = this;return (new cljs.core.async.t15938(self__.ch,self__.f,self__.map_LT_,meta15939__$1));
});
cljs.core.async.__GT_t15938 = (function __GT_t15938(ch__$1,f__$1,map_LT___$1,meta15939){return (new cljs.core.async.t15938(ch__$1,f__$1,map_LT___$1,meta15939));
});
}
return (new cljs.core.async.t15938(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t15947 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15947 = (function (ch,f,map_GT_,meta15948){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta15948 = meta15948;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15947.cljs$lang$type = true;
cljs.core.async.t15947.cljs$lang$ctorStr = "cljs.core.async/t15947";
cljs.core.async.t15947.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async/t15947");
});
cljs.core.async.t15947.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15947.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t15947.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15947.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t15947.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15947.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15947.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15949){var self__ = this;
var _15949__$1 = this;return self__.meta15948;
});
cljs.core.async.t15947.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15949,meta15948__$1){var self__ = this;
var _15949__$1 = this;return (new cljs.core.async.t15947(self__.ch,self__.f,self__.map_GT_,meta15948__$1));
});
cljs.core.async.__GT_t15947 = (function __GT_t15947(ch__$1,f__$1,map_GT___$1,meta15948){return (new cljs.core.async.t15947(ch__$1,f__$1,map_GT___$1,meta15948));
});
}
return (new cljs.core.async.t15947(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t15953 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15953 = (function (ch,p,filter_GT_,meta15954){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta15954 = meta15954;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15953.cljs$lang$type = true;
cljs.core.async.t15953.cljs$lang$ctorStr = "cljs.core.async/t15953";
cljs.core.async.t15953.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async/t15953");
});
cljs.core.async.t15953.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15953.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t15953.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15953.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t15953.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15953.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15953.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15955){var self__ = this;
var _15955__$1 = this;return self__.meta15954;
});
cljs.core.async.t15953.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15955,meta15954__$1){var self__ = this;
var _15955__$1 = this;return (new cljs.core.async.t15953(self__.ch,self__.p,self__.filter_GT_,meta15954__$1));
});
cljs.core.async.__GT_t15953 = (function __GT_t15953(ch__$1,p__$1,filter_GT___$1,meta15954){return (new cljs.core.async.t15953(ch__$1,p__$1,filter_GT___$1,meta15954));
});
}
return (new cljs.core.async.t15953(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13592__auto___18185 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13592__auto___18185,out){
return (function (){var f__13593__auto__ = (function (){var switch__13522__auto__ = ((function (c__13592__auto___18185,out){
return (function (state_16017){var state_val_16018 = (state_16017[1]);if((state_val_16018 === 1))
{var state_16017__$1 = state_16017;var statearr_16019_18186 = state_16017__$1;(statearr_16019_18186[2] = null);
(statearr_16019_18186[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16018 === 2))
{var state_16017__$1 = state_16017;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16017__$1,4,ch);
} else
{if((state_val_16018 === 3))
{var inst_16015 = (state_16017[2]);var state_16017__$1 = state_16017;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16017__$1,inst_16015);
} else
{if((state_val_16018 === 4))
{var inst_15999 = (state_16017[7]);var inst_15999__$1 = (state_16017[2]);var inst_16000 = (inst_15999__$1 == null);var state_16017__$1 = (function (){var statearr_16020 = state_16017;(statearr_16020[7] = inst_15999__$1);
return statearr_16020;
})();if(cljs.core.truth_(inst_16000))
{var statearr_16021_18187 = state_16017__$1;(statearr_16021_18187[1] = 5);
} else
{var statearr_16022_18188 = state_16017__$1;(statearr_16022_18188[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16018 === 5))
{var inst_16002 = cljs.core.async.close_BANG_.call(null,out);var state_16017__$1 = state_16017;var statearr_16023_18189 = state_16017__$1;(statearr_16023_18189[2] = inst_16002);
(statearr_16023_18189[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16018 === 6))
{var inst_15999 = (state_16017[7]);var inst_16004 = p.call(null,inst_15999);var state_16017__$1 = state_16017;if(cljs.core.truth_(inst_16004))
{var statearr_16024_18190 = state_16017__$1;(statearr_16024_18190[1] = 8);
} else
{var statearr_16025_18191 = state_16017__$1;(statearr_16025_18191[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16018 === 7))
{var inst_16013 = (state_16017[2]);var state_16017__$1 = state_16017;var statearr_16026_18192 = state_16017__$1;(statearr_16026_18192[2] = inst_16013);
(statearr_16026_18192[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16018 === 8))
{var inst_15999 = (state_16017[7]);var state_16017__$1 = state_16017;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16017__$1,11,out,inst_15999);
} else
{if((state_val_16018 === 9))
{var state_16017__$1 = state_16017;var statearr_16027_18193 = state_16017__$1;(statearr_16027_18193[2] = null);
(statearr_16027_18193[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16018 === 10))
{var inst_16010 = (state_16017[2]);var state_16017__$1 = (function (){var statearr_16028 = state_16017;(statearr_16028[8] = inst_16010);
return statearr_16028;
})();var statearr_16029_18194 = state_16017__$1;(statearr_16029_18194[2] = null);
(statearr_16029_18194[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16018 === 11))
{var inst_16007 = (state_16017[2]);var state_16017__$1 = state_16017;var statearr_16030_18195 = state_16017__$1;(statearr_16030_18195[2] = inst_16007);
(statearr_16030_18195[1] = 10);
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
});})(c__13592__auto___18185,out))
;return ((function (switch__13522__auto__,c__13592__auto___18185,out){
return (function() {
var state_machine__13523__auto__ = null;
var state_machine__13523__auto____0 = (function (){var statearr_16034 = [null,null,null,null,null,null,null,null,null];(statearr_16034[0] = state_machine__13523__auto__);
(statearr_16034[1] = 1);
return statearr_16034;
});
var state_machine__13523__auto____1 = (function (state_16017){while(true){
var ret_value__13524__auto__ = (function (){try{while(true){
var result__13525__auto__ = switch__13522__auto__.call(null,state_16017);if(cljs.core.keyword_identical_QMARK_.call(null,result__13525__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13525__auto__;
}
break;
}
}catch (e16035){if((e16035 instanceof Object))
{var ex__13526__auto__ = e16035;var statearr_16036_18196 = state_16017;(statearr_16036_18196[5] = ex__13526__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16017);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16035;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13524__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18197 = state_16017;
state_16017 = G__18197;
continue;
}
} else
{return ret_value__13524__auto__;
}
break;
}
});
state_machine__13523__auto__ = function(state_16017){
switch(arguments.length){
case 0:
return state_machine__13523__auto____0.call(this);
case 1:
return state_machine__13523__auto____1.call(this,state_16017);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13523__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13523__auto____0;
state_machine__13523__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13523__auto____1;
return state_machine__13523__auto__;
})()
;})(switch__13522__auto__,c__13592__auto___18185,out))
})();var state__13594__auto__ = (function (){var statearr_16037 = f__13593__auto__.call(null);(statearr_16037[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13592__auto___18185);
return statearr_16037;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13594__auto__);
});})(c__13592__auto___18185,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__13592__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13592__auto__){
return (function (){var f__13593__auto__ = (function (){var switch__13522__auto__ = ((function (c__13592__auto__){
return (function (state_16189){var state_val_16190 = (state_16189[1]);if((state_val_16190 === 1))
{var state_16189__$1 = state_16189;var statearr_16191_18198 = state_16189__$1;(statearr_16191_18198[2] = null);
(statearr_16191_18198[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16190 === 2))
{var state_16189__$1 = state_16189;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16189__$1,4,in$);
} else
{if((state_val_16190 === 3))
{var inst_16187 = (state_16189[2]);var state_16189__$1 = state_16189;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16189__$1,inst_16187);
} else
{if((state_val_16190 === 4))
{var inst_16135 = (state_16189[7]);var inst_16135__$1 = (state_16189[2]);var inst_16136 = (inst_16135__$1 == null);var state_16189__$1 = (function (){var statearr_16192 = state_16189;(statearr_16192[7] = inst_16135__$1);
return statearr_16192;
})();if(cljs.core.truth_(inst_16136))
{var statearr_16193_18199 = state_16189__$1;(statearr_16193_18199[1] = 5);
} else
{var statearr_16194_18200 = state_16189__$1;(statearr_16194_18200[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16190 === 5))
{var inst_16138 = cljs.core.async.close_BANG_.call(null,out);var state_16189__$1 = state_16189;var statearr_16195_18201 = state_16189__$1;(statearr_16195_18201[2] = inst_16138);
(statearr_16195_18201[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16190 === 6))
{var inst_16135 = (state_16189[7]);var inst_16140 = f.call(null,inst_16135);var inst_16145 = cljs.core.seq.call(null,inst_16140);var inst_16146 = inst_16145;var inst_16147 = null;var inst_16148 = 0;var inst_16149 = 0;var state_16189__$1 = (function (){var statearr_16196 = state_16189;(statearr_16196[8] = inst_16147);
(statearr_16196[9] = inst_16148);
(statearr_16196[10] = inst_16146);
(statearr_16196[11] = inst_16149);
return statearr_16196;
})();var statearr_16197_18202 = state_16189__$1;(statearr_16197_18202[2] = null);
(statearr_16197_18202[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16190 === 7))
{var inst_16185 = (state_16189[2]);var state_16189__$1 = state_16189;var statearr_16198_18203 = state_16189__$1;(statearr_16198_18203[2] = inst_16185);
(statearr_16198_18203[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16190 === 8))
{var inst_16148 = (state_16189[9]);var inst_16149 = (state_16189[11]);var inst_16151 = (inst_16149 < inst_16148);var inst_16152 = inst_16151;var state_16189__$1 = state_16189;if(cljs.core.truth_(inst_16152))
{var statearr_16199_18204 = state_16189__$1;(statearr_16199_18204[1] = 10);
} else
{var statearr_16200_18205 = state_16189__$1;(statearr_16200_18205[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16190 === 9))
{var inst_16182 = (state_16189[2]);var state_16189__$1 = (function (){var statearr_16201 = state_16189;(statearr_16201[12] = inst_16182);
return statearr_16201;
})();var statearr_16202_18206 = state_16189__$1;(statearr_16202_18206[2] = null);
(statearr_16202_18206[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16190 === 10))
{var inst_16147 = (state_16189[8]);var inst_16149 = (state_16189[11]);var inst_16154 = cljs.core._nth.call(null,inst_16147,inst_16149);var state_16189__$1 = state_16189;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16189__$1,13,out,inst_16154);
} else
{if((state_val_16190 === 11))
{var inst_16146 = (state_16189[10]);var inst_16160 = (state_16189[13]);var inst_16160__$1 = cljs.core.seq.call(null,inst_16146);var state_16189__$1 = (function (){var statearr_16206 = state_16189;(statearr_16206[13] = inst_16160__$1);
return statearr_16206;
})();if(inst_16160__$1)
{var statearr_16207_18207 = state_16189__$1;(statearr_16207_18207[1] = 14);
} else
{var statearr_16208_18208 = state_16189__$1;(statearr_16208_18208[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16190 === 12))
{var inst_16180 = (state_16189[2]);var state_16189__$1 = state_16189;var statearr_16209_18209 = state_16189__$1;(statearr_16209_18209[2] = inst_16180);
(statearr_16209_18209[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16190 === 13))
{var inst_16147 = (state_16189[8]);var inst_16148 = (state_16189[9]);var inst_16146 = (state_16189[10]);var inst_16149 = (state_16189[11]);var inst_16156 = (state_16189[2]);var inst_16157 = (inst_16149 + 1);var tmp16203 = inst_16147;var tmp16204 = inst_16148;var tmp16205 = inst_16146;var inst_16146__$1 = tmp16205;var inst_16147__$1 = tmp16203;var inst_16148__$1 = tmp16204;var inst_16149__$1 = inst_16157;var state_16189__$1 = (function (){var statearr_16210 = state_16189;(statearr_16210[8] = inst_16147__$1);
(statearr_16210[9] = inst_16148__$1);
(statearr_16210[10] = inst_16146__$1);
(statearr_16210[14] = inst_16156);
(statearr_16210[11] = inst_16149__$1);
return statearr_16210;
})();var statearr_16211_18210 = state_16189__$1;(statearr_16211_18210[2] = null);
(statearr_16211_18210[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16190 === 14))
{var inst_16160 = (state_16189[13]);var inst_16162 = cljs.core.chunked_seq_QMARK_.call(null,inst_16160);var state_16189__$1 = state_16189;if(inst_16162)
{var statearr_16212_18211 = state_16189__$1;(statearr_16212_18211[1] = 17);
} else
{var statearr_16213_18212 = state_16189__$1;(statearr_16213_18212[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16190 === 15))
{var state_16189__$1 = state_16189;var statearr_16214_18213 = state_16189__$1;(statearr_16214_18213[2] = null);
(statearr_16214_18213[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16190 === 16))
{var inst_16178 = (state_16189[2]);var state_16189__$1 = state_16189;var statearr_16215_18214 = state_16189__$1;(statearr_16215_18214[2] = inst_16178);
(statearr_16215_18214[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16190 === 17))
{var inst_16160 = (state_16189[13]);var inst_16164 = cljs.core.chunk_first.call(null,inst_16160);var inst_16165 = cljs.core.chunk_rest.call(null,inst_16160);var inst_16166 = cljs.core.count.call(null,inst_16164);var inst_16146 = inst_16165;var inst_16147 = inst_16164;var inst_16148 = inst_16166;var inst_16149 = 0;var state_16189__$1 = (function (){var statearr_16216 = state_16189;(statearr_16216[8] = inst_16147);
(statearr_16216[9] = inst_16148);
(statearr_16216[10] = inst_16146);
(statearr_16216[11] = inst_16149);
return statearr_16216;
})();var statearr_16217_18215 = state_16189__$1;(statearr_16217_18215[2] = null);
(statearr_16217_18215[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16190 === 18))
{var inst_16160 = (state_16189[13]);var inst_16169 = cljs.core.first.call(null,inst_16160);var state_16189__$1 = state_16189;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16189__$1,20,out,inst_16169);
} else
{if((state_val_16190 === 19))
{var inst_16175 = (state_16189[2]);var state_16189__$1 = state_16189;var statearr_16218_18216 = state_16189__$1;(statearr_16218_18216[2] = inst_16175);
(statearr_16218_18216[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16190 === 20))
{var inst_16160 = (state_16189[13]);var inst_16171 = (state_16189[2]);var inst_16172 = cljs.core.next.call(null,inst_16160);var inst_16146 = inst_16172;var inst_16147 = null;var inst_16148 = 0;var inst_16149 = 0;var state_16189__$1 = (function (){var statearr_16219 = state_16189;(statearr_16219[8] = inst_16147);
(statearr_16219[15] = inst_16171);
(statearr_16219[9] = inst_16148);
(statearr_16219[10] = inst_16146);
(statearr_16219[11] = inst_16149);
return statearr_16219;
})();var statearr_16220_18217 = state_16189__$1;(statearr_16220_18217[2] = null);
(statearr_16220_18217[1] = 8);
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
});})(c__13592__auto__))
;return ((function (switch__13522__auto__,c__13592__auto__){
return (function() {
var state_machine__13523__auto__ = null;
var state_machine__13523__auto____0 = (function (){var statearr_16224 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16224[0] = state_machine__13523__auto__);
(statearr_16224[1] = 1);
return statearr_16224;
});
var state_machine__13523__auto____1 = (function (state_16189){while(true){
var ret_value__13524__auto__ = (function (){try{while(true){
var result__13525__auto__ = switch__13522__auto__.call(null,state_16189);if(cljs.core.keyword_identical_QMARK_.call(null,result__13525__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13525__auto__;
}
break;
}
}catch (e16225){if((e16225 instanceof Object))
{var ex__13526__auto__ = e16225;var statearr_16226_18218 = state_16189;(statearr_16226_18218[5] = ex__13526__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16189);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16225;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13524__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18219 = state_16189;
state_16189 = G__18219;
continue;
}
} else
{return ret_value__13524__auto__;
}
break;
}
});
state_machine__13523__auto__ = function(state_16189){
switch(arguments.length){
case 0:
return state_machine__13523__auto____0.call(this);
case 1:
return state_machine__13523__auto____1.call(this,state_16189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13523__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13523__auto____0;
state_machine__13523__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13523__auto____1;
return state_machine__13523__auto__;
})()
;})(switch__13522__auto__,c__13592__auto__))
})();var state__13594__auto__ = (function (){var statearr_16227 = f__13593__auto__.call(null);(statearr_16227[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13592__auto__);
return statearr_16227;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13594__auto__);
});})(c__13592__auto__))
);
return c__13592__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__13592__auto___18220 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13592__auto___18220){
return (function (){var f__13593__auto__ = (function (){var switch__13522__auto__ = ((function (c__13592__auto___18220){
return (function (state_16287){var state_val_16288 = (state_16287[1]);if((state_val_16288 === 1))
{var state_16287__$1 = state_16287;var statearr_16289_18221 = state_16287__$1;(statearr_16289_18221[2] = null);
(statearr_16289_18221[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16288 === 2))
{var state_16287__$1 = state_16287;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16287__$1,4,from);
} else
{if((state_val_16288 === 3))
{var inst_16285 = (state_16287[2]);var state_16287__$1 = state_16287;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16287__$1,inst_16285);
} else
{if((state_val_16288 === 4))
{var inst_16270 = (state_16287[7]);var inst_16270__$1 = (state_16287[2]);var inst_16271 = (inst_16270__$1 == null);var state_16287__$1 = (function (){var statearr_16290 = state_16287;(statearr_16290[7] = inst_16270__$1);
return statearr_16290;
})();if(cljs.core.truth_(inst_16271))
{var statearr_16291_18222 = state_16287__$1;(statearr_16291_18222[1] = 5);
} else
{var statearr_16292_18223 = state_16287__$1;(statearr_16292_18223[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16288 === 5))
{var state_16287__$1 = state_16287;if(cljs.core.truth_(close_QMARK_))
{var statearr_16293_18224 = state_16287__$1;(statearr_16293_18224[1] = 8);
} else
{var statearr_16294_18225 = state_16287__$1;(statearr_16294_18225[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16288 === 6))
{var inst_16270 = (state_16287[7]);var state_16287__$1 = state_16287;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16287__$1,11,to,inst_16270);
} else
{if((state_val_16288 === 7))
{var inst_16283 = (state_16287[2]);var state_16287__$1 = state_16287;var statearr_16295_18226 = state_16287__$1;(statearr_16295_18226[2] = inst_16283);
(statearr_16295_18226[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16288 === 8))
{var inst_16274 = cljs.core.async.close_BANG_.call(null,to);var state_16287__$1 = state_16287;var statearr_16296_18227 = state_16287__$1;(statearr_16296_18227[2] = inst_16274);
(statearr_16296_18227[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16288 === 9))
{var state_16287__$1 = state_16287;var statearr_16297_18228 = state_16287__$1;(statearr_16297_18228[2] = null);
(statearr_16297_18228[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16288 === 10))
{var inst_16277 = (state_16287[2]);var state_16287__$1 = state_16287;var statearr_16298_18229 = state_16287__$1;(statearr_16298_18229[2] = inst_16277);
(statearr_16298_18229[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16288 === 11))
{var inst_16280 = (state_16287[2]);var state_16287__$1 = (function (){var statearr_16299 = state_16287;(statearr_16299[8] = inst_16280);
return statearr_16299;
})();var statearr_16300_18230 = state_16287__$1;(statearr_16300_18230[2] = null);
(statearr_16300_18230[1] = 2);
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
});})(c__13592__auto___18220))
;return ((function (switch__13522__auto__,c__13592__auto___18220){
return (function() {
var state_machine__13523__auto__ = null;
var state_machine__13523__auto____0 = (function (){var statearr_16304 = [null,null,null,null,null,null,null,null,null];(statearr_16304[0] = state_machine__13523__auto__);
(statearr_16304[1] = 1);
return statearr_16304;
});
var state_machine__13523__auto____1 = (function (state_16287){while(true){
var ret_value__13524__auto__ = (function (){try{while(true){
var result__13525__auto__ = switch__13522__auto__.call(null,state_16287);if(cljs.core.keyword_identical_QMARK_.call(null,result__13525__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13525__auto__;
}
break;
}
}catch (e16305){if((e16305 instanceof Object))
{var ex__13526__auto__ = e16305;var statearr_16306_18231 = state_16287;(statearr_16306_18231[5] = ex__13526__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16287);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16305;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13524__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18232 = state_16287;
state_16287 = G__18232;
continue;
}
} else
{return ret_value__13524__auto__;
}
break;
}
});
state_machine__13523__auto__ = function(state_16287){
switch(arguments.length){
case 0:
return state_machine__13523__auto____0.call(this);
case 1:
return state_machine__13523__auto____1.call(this,state_16287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13523__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13523__auto____0;
state_machine__13523__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13523__auto____1;
return state_machine__13523__auto__;
})()
;})(switch__13522__auto__,c__13592__auto___18220))
})();var state__13594__auto__ = (function (){var statearr_16307 = f__13593__auto__.call(null);(statearr_16307[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13592__auto___18220);
return statearr_16307;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13594__auto__);
});})(c__13592__auto___18220))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__13592__auto___18233 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13592__auto___18233,tc,fc){
return (function (){var f__13593__auto__ = (function (){var switch__13522__auto__ = ((function (c__13592__auto___18233,tc,fc){
return (function (state_16372){var state_val_16373 = (state_16372[1]);if((state_val_16373 === 1))
{var state_16372__$1 = state_16372;var statearr_16374_18234 = state_16372__$1;(statearr_16374_18234[2] = null);
(statearr_16374_18234[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16373 === 2))
{var state_16372__$1 = state_16372;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16372__$1,4,ch);
} else
{if((state_val_16373 === 3))
{var inst_16370 = (state_16372[2]);var state_16372__$1 = state_16372;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16372__$1,inst_16370);
} else
{if((state_val_16373 === 4))
{var inst_16353 = (state_16372[7]);var inst_16353__$1 = (state_16372[2]);var inst_16354 = (inst_16353__$1 == null);var state_16372__$1 = (function (){var statearr_16375 = state_16372;(statearr_16375[7] = inst_16353__$1);
return statearr_16375;
})();if(cljs.core.truth_(inst_16354))
{var statearr_16376_18235 = state_16372__$1;(statearr_16376_18235[1] = 5);
} else
{var statearr_16377_18236 = state_16372__$1;(statearr_16377_18236[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16373 === 5))
{var inst_16356 = cljs.core.async.close_BANG_.call(null,tc);var inst_16357 = cljs.core.async.close_BANG_.call(null,fc);var state_16372__$1 = (function (){var statearr_16378 = state_16372;(statearr_16378[8] = inst_16356);
return statearr_16378;
})();var statearr_16379_18237 = state_16372__$1;(statearr_16379_18237[2] = inst_16357);
(statearr_16379_18237[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16373 === 6))
{var inst_16353 = (state_16372[7]);var inst_16359 = p.call(null,inst_16353);var state_16372__$1 = state_16372;if(cljs.core.truth_(inst_16359))
{var statearr_16380_18238 = state_16372__$1;(statearr_16380_18238[1] = 9);
} else
{var statearr_16381_18239 = state_16372__$1;(statearr_16381_18239[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16373 === 7))
{var inst_16368 = (state_16372[2]);var state_16372__$1 = state_16372;var statearr_16382_18240 = state_16372__$1;(statearr_16382_18240[2] = inst_16368);
(statearr_16382_18240[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16373 === 8))
{var inst_16365 = (state_16372[2]);var state_16372__$1 = (function (){var statearr_16383 = state_16372;(statearr_16383[9] = inst_16365);
return statearr_16383;
})();var statearr_16384_18241 = state_16372__$1;(statearr_16384_18241[2] = null);
(statearr_16384_18241[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16373 === 9))
{var state_16372__$1 = state_16372;var statearr_16385_18242 = state_16372__$1;(statearr_16385_18242[2] = tc);
(statearr_16385_18242[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16373 === 10))
{var state_16372__$1 = state_16372;var statearr_16386_18243 = state_16372__$1;(statearr_16386_18243[2] = fc);
(statearr_16386_18243[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16373 === 11))
{var inst_16353 = (state_16372[7]);var inst_16363 = (state_16372[2]);var state_16372__$1 = state_16372;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16372__$1,8,inst_16363,inst_16353);
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
});})(c__13592__auto___18233,tc,fc))
;return ((function (switch__13522__auto__,c__13592__auto___18233,tc,fc){
return (function() {
var state_machine__13523__auto__ = null;
var state_machine__13523__auto____0 = (function (){var statearr_16390 = [null,null,null,null,null,null,null,null,null,null];(statearr_16390[0] = state_machine__13523__auto__);
(statearr_16390[1] = 1);
return statearr_16390;
});
var state_machine__13523__auto____1 = (function (state_16372){while(true){
var ret_value__13524__auto__ = (function (){try{while(true){
var result__13525__auto__ = switch__13522__auto__.call(null,state_16372);if(cljs.core.keyword_identical_QMARK_.call(null,result__13525__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13525__auto__;
}
break;
}
}catch (e16391){if((e16391 instanceof Object))
{var ex__13526__auto__ = e16391;var statearr_16392_18244 = state_16372;(statearr_16392_18244[5] = ex__13526__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16372);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16391;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13524__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18245 = state_16372;
state_16372 = G__18245;
continue;
}
} else
{return ret_value__13524__auto__;
}
break;
}
});
state_machine__13523__auto__ = function(state_16372){
switch(arguments.length){
case 0:
return state_machine__13523__auto____0.call(this);
case 1:
return state_machine__13523__auto____1.call(this,state_16372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13523__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13523__auto____0;
state_machine__13523__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13523__auto____1;
return state_machine__13523__auto__;
})()
;})(switch__13522__auto__,c__13592__auto___18233,tc,fc))
})();var state__13594__auto__ = (function (){var statearr_16393 = f__13593__auto__.call(null);(statearr_16393[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13592__auto___18233);
return statearr_16393;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13594__auto__);
});})(c__13592__auto___18233,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__13592__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13592__auto__){
return (function (){var f__13593__auto__ = (function (){var switch__13522__auto__ = ((function (c__13592__auto__){
return (function (state_16440){var state_val_16441 = (state_16440[1]);if((state_val_16441 === 7))
{var inst_16436 = (state_16440[2]);var state_16440__$1 = state_16440;var statearr_16442_18246 = state_16440__$1;(statearr_16442_18246[2] = inst_16436);
(statearr_16442_18246[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16441 === 6))
{var inst_16429 = (state_16440[7]);var inst_16426 = (state_16440[8]);var inst_16433 = f.call(null,inst_16426,inst_16429);var inst_16426__$1 = inst_16433;var state_16440__$1 = (function (){var statearr_16443 = state_16440;(statearr_16443[8] = inst_16426__$1);
return statearr_16443;
})();var statearr_16444_18247 = state_16440__$1;(statearr_16444_18247[2] = null);
(statearr_16444_18247[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16441 === 5))
{var inst_16426 = (state_16440[8]);var state_16440__$1 = state_16440;var statearr_16445_18248 = state_16440__$1;(statearr_16445_18248[2] = inst_16426);
(statearr_16445_18248[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16441 === 4))
{var inst_16429 = (state_16440[7]);var inst_16429__$1 = (state_16440[2]);var inst_16430 = (inst_16429__$1 == null);var state_16440__$1 = (function (){var statearr_16446 = state_16440;(statearr_16446[7] = inst_16429__$1);
return statearr_16446;
})();if(cljs.core.truth_(inst_16430))
{var statearr_16447_18249 = state_16440__$1;(statearr_16447_18249[1] = 5);
} else
{var statearr_16448_18250 = state_16440__$1;(statearr_16448_18250[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16441 === 3))
{var inst_16438 = (state_16440[2]);var state_16440__$1 = state_16440;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16440__$1,inst_16438);
} else
{if((state_val_16441 === 2))
{var state_16440__$1 = state_16440;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16440__$1,4,ch);
} else
{if((state_val_16441 === 1))
{var inst_16426 = init;var state_16440__$1 = (function (){var statearr_16449 = state_16440;(statearr_16449[8] = inst_16426);
return statearr_16449;
})();var statearr_16450_18251 = state_16440__$1;(statearr_16450_18251[2] = null);
(statearr_16450_18251[1] = 2);
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
});})(c__13592__auto__))
;return ((function (switch__13522__auto__,c__13592__auto__){
return (function() {
var state_machine__13523__auto__ = null;
var state_machine__13523__auto____0 = (function (){var statearr_16454 = [null,null,null,null,null,null,null,null,null];(statearr_16454[0] = state_machine__13523__auto__);
(statearr_16454[1] = 1);
return statearr_16454;
});
var state_machine__13523__auto____1 = (function (state_16440){while(true){
var ret_value__13524__auto__ = (function (){try{while(true){
var result__13525__auto__ = switch__13522__auto__.call(null,state_16440);if(cljs.core.keyword_identical_QMARK_.call(null,result__13525__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13525__auto__;
}
break;
}
}catch (e16455){if((e16455 instanceof Object))
{var ex__13526__auto__ = e16455;var statearr_16456_18252 = state_16440;(statearr_16456_18252[5] = ex__13526__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16440);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16455;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13524__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18253 = state_16440;
state_16440 = G__18253;
continue;
}
} else
{return ret_value__13524__auto__;
}
break;
}
});
state_machine__13523__auto__ = function(state_16440){
switch(arguments.length){
case 0:
return state_machine__13523__auto____0.call(this);
case 1:
return state_machine__13523__auto____1.call(this,state_16440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13523__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13523__auto____0;
state_machine__13523__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13523__auto____1;
return state_machine__13523__auto__;
})()
;})(switch__13522__auto__,c__13592__auto__))
})();var state__13594__auto__ = (function (){var statearr_16457 = f__13593__auto__.call(null);(statearr_16457[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13592__auto__);
return statearr_16457;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13594__auto__);
});})(c__13592__auto__))
);
return c__13592__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__13592__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13592__auto__){
return (function (){var f__13593__auto__ = (function (){var switch__13522__auto__ = ((function (c__13592__auto__){
return (function (state_16519){var state_val_16520 = (state_16519[1]);if((state_val_16520 === 1))
{var inst_16499 = cljs.core.seq.call(null,coll);var inst_16500 = inst_16499;var state_16519__$1 = (function (){var statearr_16521 = state_16519;(statearr_16521[7] = inst_16500);
return statearr_16521;
})();var statearr_16522_18254 = state_16519__$1;(statearr_16522_18254[2] = null);
(statearr_16522_18254[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16520 === 2))
{var inst_16500 = (state_16519[7]);var state_16519__$1 = state_16519;if(cljs.core.truth_(inst_16500))
{var statearr_16523_18255 = state_16519__$1;(statearr_16523_18255[1] = 4);
} else
{var statearr_16524_18256 = state_16519__$1;(statearr_16524_18256[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16520 === 3))
{var inst_16517 = (state_16519[2]);var state_16519__$1 = state_16519;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16519__$1,inst_16517);
} else
{if((state_val_16520 === 4))
{var inst_16500 = (state_16519[7]);var inst_16503 = cljs.core.first.call(null,inst_16500);var state_16519__$1 = state_16519;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16519__$1,7,ch,inst_16503);
} else
{if((state_val_16520 === 5))
{var state_16519__$1 = state_16519;if(cljs.core.truth_(close_QMARK_))
{var statearr_16525_18257 = state_16519__$1;(statearr_16525_18257[1] = 8);
} else
{var statearr_16526_18258 = state_16519__$1;(statearr_16526_18258[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16520 === 6))
{var inst_16515 = (state_16519[2]);var state_16519__$1 = state_16519;var statearr_16527_18259 = state_16519__$1;(statearr_16527_18259[2] = inst_16515);
(statearr_16527_18259[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16520 === 7))
{var inst_16500 = (state_16519[7]);var inst_16505 = (state_16519[2]);var inst_16506 = cljs.core.next.call(null,inst_16500);var inst_16500__$1 = inst_16506;var state_16519__$1 = (function (){var statearr_16528 = state_16519;(statearr_16528[7] = inst_16500__$1);
(statearr_16528[8] = inst_16505);
return statearr_16528;
})();var statearr_16529_18260 = state_16519__$1;(statearr_16529_18260[2] = null);
(statearr_16529_18260[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16520 === 8))
{var inst_16510 = cljs.core.async.close_BANG_.call(null,ch);var state_16519__$1 = state_16519;var statearr_16530_18261 = state_16519__$1;(statearr_16530_18261[2] = inst_16510);
(statearr_16530_18261[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16520 === 9))
{var state_16519__$1 = state_16519;var statearr_16531_18262 = state_16519__$1;(statearr_16531_18262[2] = null);
(statearr_16531_18262[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16520 === 10))
{var inst_16513 = (state_16519[2]);var state_16519__$1 = state_16519;var statearr_16532_18263 = state_16519__$1;(statearr_16532_18263[2] = inst_16513);
(statearr_16532_18263[1] = 6);
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
});})(c__13592__auto__))
;return ((function (switch__13522__auto__,c__13592__auto__){
return (function() {
var state_machine__13523__auto__ = null;
var state_machine__13523__auto____0 = (function (){var statearr_16536 = [null,null,null,null,null,null,null,null,null];(statearr_16536[0] = state_machine__13523__auto__);
(statearr_16536[1] = 1);
return statearr_16536;
});
var state_machine__13523__auto____1 = (function (state_16519){while(true){
var ret_value__13524__auto__ = (function (){try{while(true){
var result__13525__auto__ = switch__13522__auto__.call(null,state_16519);if(cljs.core.keyword_identical_QMARK_.call(null,result__13525__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13525__auto__;
}
break;
}
}catch (e16537){if((e16537 instanceof Object))
{var ex__13526__auto__ = e16537;var statearr_16538_18264 = state_16519;(statearr_16538_18264[5] = ex__13526__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16519);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16537;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13524__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18265 = state_16519;
state_16519 = G__18265;
continue;
}
} else
{return ret_value__13524__auto__;
}
break;
}
});
state_machine__13523__auto__ = function(state_16519){
switch(arguments.length){
case 0:
return state_machine__13523__auto____0.call(this);
case 1:
return state_machine__13523__auto____1.call(this,state_16519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13523__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13523__auto____0;
state_machine__13523__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13523__auto____1;
return state_machine__13523__auto__;
})()
;})(switch__13522__auto__,c__13592__auto__))
})();var state__13594__auto__ = (function (){var statearr_16539 = f__13593__auto__.call(null);(statearr_16539[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13592__auto__);
return statearr_16539;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13594__auto__);
});})(c__13592__auto__))
);
return c__13592__auto__;
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
cljs.core.async.Mux = (function (){var obj16541 = {};return obj16541;
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
cljs.core.async.Mult = (function (){var obj16543 = {};return obj16543;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t16767 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16767 = (function (cs,ch,mult,meta16768){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta16768 = meta16768;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16767.cljs$lang$type = true;
cljs.core.async.t16767.cljs$lang$ctorStr = "cljs.core.async/t16767";
cljs.core.async.t16767.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async/t16767");
});})(cs))
;
cljs.core.async.t16767.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t16767.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t16767.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t16767.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t16767.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16767.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t16767.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16769){var self__ = this;
var _16769__$1 = this;return self__.meta16768;
});})(cs))
;
cljs.core.async.t16767.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16769,meta16768__$1){var self__ = this;
var _16769__$1 = this;return (new cljs.core.async.t16767(self__.cs,self__.ch,self__.mult,meta16768__$1));
});})(cs))
;
cljs.core.async.__GT_t16767 = ((function (cs){
return (function __GT_t16767(cs__$1,ch__$1,mult__$1,meta16768){return (new cljs.core.async.t16767(cs__$1,ch__$1,mult__$1,meta16768));
});})(cs))
;
}
return (new cljs.core.async.t16767(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__13592__auto___18266 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13592__auto___18266,cs,m,dchan,dctr,done){
return (function (){var f__13593__auto__ = (function (){var switch__13522__auto__ = ((function (c__13592__auto___18266,cs,m,dchan,dctr,done){
return (function (state_16904){var state_val_16905 = (state_16904[1]);if((state_val_16905 === 32))
{var inst_16848 = (state_16904[7]);var inst_16772 = (state_16904[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16904,31,Object,null,30);var inst_16855 = cljs.core.async.put_BANG_.call(null,inst_16848,inst_16772,done);var state_16904__$1 = state_16904;var statearr_16906_18267 = state_16904__$1;(statearr_16906_18267[2] = inst_16855);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16904__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16905 === 1))
{var state_16904__$1 = state_16904;var statearr_16907_18268 = state_16904__$1;(statearr_16907_18268[2] = null);
(statearr_16907_18268[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16905 === 33))
{var inst_16861 = (state_16904[9]);var inst_16863 = cljs.core.chunked_seq_QMARK_.call(null,inst_16861);var state_16904__$1 = state_16904;if(inst_16863)
{var statearr_16908_18269 = state_16904__$1;(statearr_16908_18269[1] = 36);
} else
{var statearr_16909_18270 = state_16904__$1;(statearr_16909_18270[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16905 === 2))
{var state_16904__$1 = state_16904;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16904__$1,4,ch);
} else
{if((state_val_16905 === 34))
{var state_16904__$1 = state_16904;var statearr_16910_18271 = state_16904__$1;(statearr_16910_18271[2] = null);
(statearr_16910_18271[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16905 === 3))
{var inst_16902 = (state_16904[2]);var state_16904__$1 = state_16904;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16904__$1,inst_16902);
} else
{if((state_val_16905 === 35))
{var inst_16886 = (state_16904[2]);var state_16904__$1 = state_16904;var statearr_16911_18272 = state_16904__$1;(statearr_16911_18272[2] = inst_16886);
(statearr_16911_18272[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16905 === 4))
{var inst_16772 = (state_16904[8]);var inst_16772__$1 = (state_16904[2]);var inst_16773 = (inst_16772__$1 == null);var state_16904__$1 = (function (){var statearr_16912 = state_16904;(statearr_16912[8] = inst_16772__$1);
return statearr_16912;
})();if(cljs.core.truth_(inst_16773))
{var statearr_16913_18273 = state_16904__$1;(statearr_16913_18273[1] = 5);
} else
{var statearr_16914_18274 = state_16904__$1;(statearr_16914_18274[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16905 === 36))
{var inst_16861 = (state_16904[9]);var inst_16865 = cljs.core.chunk_first.call(null,inst_16861);var inst_16866 = cljs.core.chunk_rest.call(null,inst_16861);var inst_16867 = cljs.core.count.call(null,inst_16865);var inst_16840 = inst_16866;var inst_16841 = inst_16865;var inst_16842 = inst_16867;var inst_16843 = 0;var state_16904__$1 = (function (){var statearr_16915 = state_16904;(statearr_16915[10] = inst_16840);
(statearr_16915[11] = inst_16841);
(statearr_16915[12] = inst_16843);
(statearr_16915[13] = inst_16842);
return statearr_16915;
})();var statearr_16916_18275 = state_16904__$1;(statearr_16916_18275[2] = null);
(statearr_16916_18275[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16905 === 5))
{var inst_16779 = cljs.core.deref.call(null,cs);var inst_16780 = cljs.core.seq.call(null,inst_16779);var inst_16781 = inst_16780;var inst_16782 = null;var inst_16783 = 0;var inst_16784 = 0;var state_16904__$1 = (function (){var statearr_16917 = state_16904;(statearr_16917[14] = inst_16783);
(statearr_16917[15] = inst_16784);
(statearr_16917[16] = inst_16782);
(statearr_16917[17] = inst_16781);
return statearr_16917;
})();var statearr_16918_18276 = state_16904__$1;(statearr_16918_18276[2] = null);
(statearr_16918_18276[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16905 === 37))
{var inst_16861 = (state_16904[9]);var inst_16870 = cljs.core.first.call(null,inst_16861);var state_16904__$1 = (function (){var statearr_16919 = state_16904;(statearr_16919[18] = inst_16870);
return statearr_16919;
})();var statearr_16920_18277 = state_16904__$1;(statearr_16920_18277[2] = null);
(statearr_16920_18277[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16905 === 6))
{var inst_16832 = (state_16904[19]);var inst_16831 = cljs.core.deref.call(null,cs);var inst_16832__$1 = cljs.core.keys.call(null,inst_16831);var inst_16833 = cljs.core.count.call(null,inst_16832__$1);var inst_16834 = cljs.core.reset_BANG_.call(null,dctr,inst_16833);var inst_16839 = cljs.core.seq.call(null,inst_16832__$1);var inst_16840 = inst_16839;var inst_16841 = null;var inst_16842 = 0;var inst_16843 = 0;var state_16904__$1 = (function (){var statearr_16921 = state_16904;(statearr_16921[20] = inst_16834);
(statearr_16921[19] = inst_16832__$1);
(statearr_16921[10] = inst_16840);
(statearr_16921[11] = inst_16841);
(statearr_16921[12] = inst_16843);
(statearr_16921[13] = inst_16842);
return statearr_16921;
})();var statearr_16922_18278 = state_16904__$1;(statearr_16922_18278[2] = null);
(statearr_16922_18278[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16905 === 38))
{var inst_16883 = (state_16904[2]);var state_16904__$1 = state_16904;var statearr_16923_18279 = state_16904__$1;(statearr_16923_18279[2] = inst_16883);
(statearr_16923_18279[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16905 === 7))
{var inst_16900 = (state_16904[2]);var state_16904__$1 = state_16904;var statearr_16924_18280 = state_16904__$1;(statearr_16924_18280[2] = inst_16900);
(statearr_16924_18280[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16905 === 39))
{var inst_16861 = (state_16904[9]);var inst_16879 = (state_16904[2]);var inst_16880 = cljs.core.next.call(null,inst_16861);var inst_16840 = inst_16880;var inst_16841 = null;var inst_16842 = 0;var inst_16843 = 0;var state_16904__$1 = (function (){var statearr_16925 = state_16904;(statearr_16925[10] = inst_16840);
(statearr_16925[11] = inst_16841);
(statearr_16925[21] = inst_16879);
(statearr_16925[12] = inst_16843);
(statearr_16925[13] = inst_16842);
return statearr_16925;
})();var statearr_16926_18281 = state_16904__$1;(statearr_16926_18281[2] = null);
(statearr_16926_18281[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16905 === 8))
{var inst_16783 = (state_16904[14]);var inst_16784 = (state_16904[15]);var inst_16786 = (inst_16784 < inst_16783);var inst_16787 = inst_16786;var state_16904__$1 = state_16904;if(cljs.core.truth_(inst_16787))
{var statearr_16927_18282 = state_16904__$1;(statearr_16927_18282[1] = 10);
} else
{var statearr_16928_18283 = state_16904__$1;(statearr_16928_18283[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16905 === 40))
{var inst_16870 = (state_16904[18]);var inst_16871 = (state_16904[2]);var inst_16872 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_16873 = cljs.core.async.untap_STAR_.call(null,m,inst_16870);var state_16904__$1 = (function (){var statearr_16929 = state_16904;(statearr_16929[22] = inst_16871);
(statearr_16929[23] = inst_16872);
return statearr_16929;
})();var statearr_16930_18284 = state_16904__$1;(statearr_16930_18284[2] = inst_16873);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16904__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16905 === 9))
{var inst_16829 = (state_16904[2]);var state_16904__$1 = state_16904;var statearr_16931_18285 = state_16904__$1;(statearr_16931_18285[2] = inst_16829);
(statearr_16931_18285[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16905 === 41))
{var inst_16870 = (state_16904[18]);var inst_16772 = (state_16904[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16904,40,Object,null,39);var inst_16877 = cljs.core.async.put_BANG_.call(null,inst_16870,inst_16772,done);var state_16904__$1 = state_16904;var statearr_16932_18286 = state_16904__$1;(statearr_16932_18286[2] = inst_16877);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16904__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16905 === 10))
{var inst_16784 = (state_16904[15]);var inst_16782 = (state_16904[16]);var inst_16790 = cljs.core._nth.call(null,inst_16782,inst_16784);var inst_16791 = cljs.core.nth.call(null,inst_16790,0,null);var inst_16792 = cljs.core.nth.call(null,inst_16790,1,null);var state_16904__$1 = (function (){var statearr_16933 = state_16904;(statearr_16933[24] = inst_16791);
return statearr_16933;
})();if(cljs.core.truth_(inst_16792))
{var statearr_16934_18287 = state_16904__$1;(statearr_16934_18287[1] = 13);
} else
{var statearr_16935_18288 = state_16904__$1;(statearr_16935_18288[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16905 === 42))
{var state_16904__$1 = state_16904;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16904__$1,45,dchan);
} else
{if((state_val_16905 === 11))
{var inst_16781 = (state_16904[17]);var inst_16801 = (state_16904[25]);var inst_16801__$1 = cljs.core.seq.call(null,inst_16781);var state_16904__$1 = (function (){var statearr_16936 = state_16904;(statearr_16936[25] = inst_16801__$1);
return statearr_16936;
})();if(inst_16801__$1)
{var statearr_16937_18289 = state_16904__$1;(statearr_16937_18289[1] = 16);
} else
{var statearr_16938_18290 = state_16904__$1;(statearr_16938_18290[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16905 === 43))
{var state_16904__$1 = state_16904;var statearr_16939_18291 = state_16904__$1;(statearr_16939_18291[2] = null);
(statearr_16939_18291[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16905 === 12))
{var inst_16827 = (state_16904[2]);var state_16904__$1 = state_16904;var statearr_16940_18292 = state_16904__$1;(statearr_16940_18292[2] = inst_16827);
(statearr_16940_18292[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16905 === 44))
{var inst_16897 = (state_16904[2]);var state_16904__$1 = (function (){var statearr_16941 = state_16904;(statearr_16941[26] = inst_16897);
return statearr_16941;
})();var statearr_16942_18293 = state_16904__$1;(statearr_16942_18293[2] = null);
(statearr_16942_18293[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16905 === 13))
{var inst_16791 = (state_16904[24]);var inst_16794 = cljs.core.async.close_BANG_.call(null,inst_16791);var state_16904__$1 = state_16904;var statearr_16943_18294 = state_16904__$1;(statearr_16943_18294[2] = inst_16794);
(statearr_16943_18294[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16905 === 45))
{var inst_16894 = (state_16904[2]);var state_16904__$1 = state_16904;var statearr_16947_18295 = state_16904__$1;(statearr_16947_18295[2] = inst_16894);
(statearr_16947_18295[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16905 === 14))
{var state_16904__$1 = state_16904;var statearr_16948_18296 = state_16904__$1;(statearr_16948_18296[2] = null);
(statearr_16948_18296[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16905 === 15))
{var inst_16783 = (state_16904[14]);var inst_16784 = (state_16904[15]);var inst_16782 = (state_16904[16]);var inst_16781 = (state_16904[17]);var inst_16797 = (state_16904[2]);var inst_16798 = (inst_16784 + 1);var tmp16944 = inst_16783;var tmp16945 = inst_16782;var tmp16946 = inst_16781;var inst_16781__$1 = tmp16946;var inst_16782__$1 = tmp16945;var inst_16783__$1 = tmp16944;var inst_16784__$1 = inst_16798;var state_16904__$1 = (function (){var statearr_16949 = state_16904;(statearr_16949[14] = inst_16783__$1);
(statearr_16949[15] = inst_16784__$1);
(statearr_16949[16] = inst_16782__$1);
(statearr_16949[17] = inst_16781__$1);
(statearr_16949[27] = inst_16797);
return statearr_16949;
})();var statearr_16950_18297 = state_16904__$1;(statearr_16950_18297[2] = null);
(statearr_16950_18297[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16905 === 16))
{var inst_16801 = (state_16904[25]);var inst_16803 = cljs.core.chunked_seq_QMARK_.call(null,inst_16801);var state_16904__$1 = state_16904;if(inst_16803)
{var statearr_16951_18298 = state_16904__$1;(statearr_16951_18298[1] = 19);
} else
{var statearr_16952_18299 = state_16904__$1;(statearr_16952_18299[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16905 === 17))
{var state_16904__$1 = state_16904;var statearr_16953_18300 = state_16904__$1;(statearr_16953_18300[2] = null);
(statearr_16953_18300[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16905 === 18))
{var inst_16825 = (state_16904[2]);var state_16904__$1 = state_16904;var statearr_16954_18301 = state_16904__$1;(statearr_16954_18301[2] = inst_16825);
(statearr_16954_18301[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16905 === 19))
{var inst_16801 = (state_16904[25]);var inst_16805 = cljs.core.chunk_first.call(null,inst_16801);var inst_16806 = cljs.core.chunk_rest.call(null,inst_16801);var inst_16807 = cljs.core.count.call(null,inst_16805);var inst_16781 = inst_16806;var inst_16782 = inst_16805;var inst_16783 = inst_16807;var inst_16784 = 0;var state_16904__$1 = (function (){var statearr_16955 = state_16904;(statearr_16955[14] = inst_16783);
(statearr_16955[15] = inst_16784);
(statearr_16955[16] = inst_16782);
(statearr_16955[17] = inst_16781);
return statearr_16955;
})();var statearr_16956_18302 = state_16904__$1;(statearr_16956_18302[2] = null);
(statearr_16956_18302[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16905 === 20))
{var inst_16801 = (state_16904[25]);var inst_16811 = cljs.core.first.call(null,inst_16801);var inst_16812 = cljs.core.nth.call(null,inst_16811,0,null);var inst_16813 = cljs.core.nth.call(null,inst_16811,1,null);var state_16904__$1 = (function (){var statearr_16957 = state_16904;(statearr_16957[28] = inst_16812);
return statearr_16957;
})();if(cljs.core.truth_(inst_16813))
{var statearr_16958_18303 = state_16904__$1;(statearr_16958_18303[1] = 22);
} else
{var statearr_16959_18304 = state_16904__$1;(statearr_16959_18304[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16905 === 21))
{var inst_16822 = (state_16904[2]);var state_16904__$1 = state_16904;var statearr_16960_18305 = state_16904__$1;(statearr_16960_18305[2] = inst_16822);
(statearr_16960_18305[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16905 === 22))
{var inst_16812 = (state_16904[28]);var inst_16815 = cljs.core.async.close_BANG_.call(null,inst_16812);var state_16904__$1 = state_16904;var statearr_16961_18306 = state_16904__$1;(statearr_16961_18306[2] = inst_16815);
(statearr_16961_18306[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16905 === 23))
{var state_16904__$1 = state_16904;var statearr_16962_18307 = state_16904__$1;(statearr_16962_18307[2] = null);
(statearr_16962_18307[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16905 === 24))
{var inst_16801 = (state_16904[25]);var inst_16818 = (state_16904[2]);var inst_16819 = cljs.core.next.call(null,inst_16801);var inst_16781 = inst_16819;var inst_16782 = null;var inst_16783 = 0;var inst_16784 = 0;var state_16904__$1 = (function (){var statearr_16963 = state_16904;(statearr_16963[14] = inst_16783);
(statearr_16963[15] = inst_16784);
(statearr_16963[16] = inst_16782);
(statearr_16963[17] = inst_16781);
(statearr_16963[29] = inst_16818);
return statearr_16963;
})();var statearr_16964_18308 = state_16904__$1;(statearr_16964_18308[2] = null);
(statearr_16964_18308[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16905 === 25))
{var inst_16843 = (state_16904[12]);var inst_16842 = (state_16904[13]);var inst_16845 = (inst_16843 < inst_16842);var inst_16846 = inst_16845;var state_16904__$1 = state_16904;if(cljs.core.truth_(inst_16846))
{var statearr_16965_18309 = state_16904__$1;(statearr_16965_18309[1] = 27);
} else
{var statearr_16966_18310 = state_16904__$1;(statearr_16966_18310[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16905 === 26))
{var inst_16832 = (state_16904[19]);var inst_16890 = (state_16904[2]);var inst_16891 = cljs.core.seq.call(null,inst_16832);var state_16904__$1 = (function (){var statearr_16967 = state_16904;(statearr_16967[30] = inst_16890);
return statearr_16967;
})();if(inst_16891)
{var statearr_16968_18311 = state_16904__$1;(statearr_16968_18311[1] = 42);
} else
{var statearr_16969_18312 = state_16904__$1;(statearr_16969_18312[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16905 === 27))
{var inst_16841 = (state_16904[11]);var inst_16843 = (state_16904[12]);var inst_16848 = cljs.core._nth.call(null,inst_16841,inst_16843);var state_16904__$1 = (function (){var statearr_16970 = state_16904;(statearr_16970[7] = inst_16848);
return statearr_16970;
})();var statearr_16971_18313 = state_16904__$1;(statearr_16971_18313[2] = null);
(statearr_16971_18313[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16905 === 28))
{var inst_16861 = (state_16904[9]);var inst_16840 = (state_16904[10]);var inst_16861__$1 = cljs.core.seq.call(null,inst_16840);var state_16904__$1 = (function (){var statearr_16975 = state_16904;(statearr_16975[9] = inst_16861__$1);
return statearr_16975;
})();if(inst_16861__$1)
{var statearr_16976_18314 = state_16904__$1;(statearr_16976_18314[1] = 33);
} else
{var statearr_16977_18315 = state_16904__$1;(statearr_16977_18315[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16905 === 29))
{var inst_16888 = (state_16904[2]);var state_16904__$1 = state_16904;var statearr_16978_18316 = state_16904__$1;(statearr_16978_18316[2] = inst_16888);
(statearr_16978_18316[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16905 === 30))
{var inst_16840 = (state_16904[10]);var inst_16841 = (state_16904[11]);var inst_16843 = (state_16904[12]);var inst_16842 = (state_16904[13]);var inst_16857 = (state_16904[2]);var inst_16858 = (inst_16843 + 1);var tmp16972 = inst_16840;var tmp16973 = inst_16841;var tmp16974 = inst_16842;var inst_16840__$1 = tmp16972;var inst_16841__$1 = tmp16973;var inst_16842__$1 = tmp16974;var inst_16843__$1 = inst_16858;var state_16904__$1 = (function (){var statearr_16979 = state_16904;(statearr_16979[31] = inst_16857);
(statearr_16979[10] = inst_16840__$1);
(statearr_16979[11] = inst_16841__$1);
(statearr_16979[12] = inst_16843__$1);
(statearr_16979[13] = inst_16842__$1);
return statearr_16979;
})();var statearr_16980_18317 = state_16904__$1;(statearr_16980_18317[2] = null);
(statearr_16980_18317[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16905 === 31))
{var inst_16848 = (state_16904[7]);var inst_16849 = (state_16904[2]);var inst_16850 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_16851 = cljs.core.async.untap_STAR_.call(null,m,inst_16848);var state_16904__$1 = (function (){var statearr_16981 = state_16904;(statearr_16981[32] = inst_16849);
(statearr_16981[33] = inst_16850);
return statearr_16981;
})();var statearr_16982_18318 = state_16904__$1;(statearr_16982_18318[2] = inst_16851);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16904__$1);
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
});})(c__13592__auto___18266,cs,m,dchan,dctr,done))
;return ((function (switch__13522__auto__,c__13592__auto___18266,cs,m,dchan,dctr,done){
return (function() {
var state_machine__13523__auto__ = null;
var state_machine__13523__auto____0 = (function (){var statearr_16986 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16986[0] = state_machine__13523__auto__);
(statearr_16986[1] = 1);
return statearr_16986;
});
var state_machine__13523__auto____1 = (function (state_16904){while(true){
var ret_value__13524__auto__ = (function (){try{while(true){
var result__13525__auto__ = switch__13522__auto__.call(null,state_16904);if(cljs.core.keyword_identical_QMARK_.call(null,result__13525__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13525__auto__;
}
break;
}
}catch (e16987){if((e16987 instanceof Object))
{var ex__13526__auto__ = e16987;var statearr_16988_18319 = state_16904;(statearr_16988_18319[5] = ex__13526__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16904);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16987;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13524__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18320 = state_16904;
state_16904 = G__18320;
continue;
}
} else
{return ret_value__13524__auto__;
}
break;
}
});
state_machine__13523__auto__ = function(state_16904){
switch(arguments.length){
case 0:
return state_machine__13523__auto____0.call(this);
case 1:
return state_machine__13523__auto____1.call(this,state_16904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13523__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13523__auto____0;
state_machine__13523__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13523__auto____1;
return state_machine__13523__auto__;
})()
;})(switch__13522__auto__,c__13592__auto___18266,cs,m,dchan,dctr,done))
})();var state__13594__auto__ = (function (){var statearr_16989 = f__13593__auto__.call(null);(statearr_16989[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13592__auto___18266);
return statearr_16989;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13594__auto__);
});})(c__13592__auto___18266,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj16991 = {};return obj16991;
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
;var m = (function (){if(typeof cljs.core.async.t17101 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17101 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta17102){
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
this.meta17102 = meta17102;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17101.cljs$lang$type = true;
cljs.core.async.t17101.cljs$lang$ctorStr = "cljs.core.async/t17101";
cljs.core.async.t17101.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async/t17101");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17101.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t17101.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17101.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17101.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17101.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17101.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17101.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t17101.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17101.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17103){var self__ = this;
var _17103__$1 = this;return self__.meta17102;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17101.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17103,meta17102__$1){var self__ = this;
var _17103__$1 = this;return (new cljs.core.async.t17101(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta17102__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t17101 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t17101(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta17102){return (new cljs.core.async.t17101(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta17102));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t17101(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__13592__auto___18321 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13592__auto___18321,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__13593__auto__ = (function (){var switch__13522__auto__ = ((function (c__13592__auto___18321,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_17168){var state_val_17169 = (state_17168[1]);if((state_val_17169 === 1))
{var inst_17107 = (state_17168[7]);var inst_17107__$1 = calc_state.call(null);var inst_17108 = cljs.core.seq_QMARK_.call(null,inst_17107__$1);var state_17168__$1 = (function (){var statearr_17170 = state_17168;(statearr_17170[7] = inst_17107__$1);
return statearr_17170;
})();if(inst_17108)
{var statearr_17171_18322 = state_17168__$1;(statearr_17171_18322[1] = 2);
} else
{var statearr_17172_18323 = state_17168__$1;(statearr_17172_18323[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17169 === 2))
{var inst_17107 = (state_17168[7]);var inst_17110 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17107);var state_17168__$1 = state_17168;var statearr_17173_18324 = state_17168__$1;(statearr_17173_18324[2] = inst_17110);
(statearr_17173_18324[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17169 === 3))
{var inst_17107 = (state_17168[7]);var state_17168__$1 = state_17168;var statearr_17174_18325 = state_17168__$1;(statearr_17174_18325[2] = inst_17107);
(statearr_17174_18325[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17169 === 4))
{var inst_17107 = (state_17168[7]);var inst_17113 = (state_17168[2]);var inst_17114 = cljs.core.get.call(null,inst_17113,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_17115 = cljs.core.get.call(null,inst_17113,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_17116 = cljs.core.get.call(null,inst_17113,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_17117 = inst_17107;var state_17168__$1 = (function (){var statearr_17175 = state_17168;(statearr_17175[8] = inst_17115);
(statearr_17175[9] = inst_17116);
(statearr_17175[10] = inst_17114);
(statearr_17175[11] = inst_17117);
return statearr_17175;
})();var statearr_17176_18326 = state_17168__$1;(statearr_17176_18326[2] = null);
(statearr_17176_18326[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17169 === 5))
{var inst_17117 = (state_17168[11]);var inst_17120 = cljs.core.seq_QMARK_.call(null,inst_17117);var state_17168__$1 = state_17168;if(inst_17120)
{var statearr_17177_18327 = state_17168__$1;(statearr_17177_18327[1] = 7);
} else
{var statearr_17178_18328 = state_17168__$1;(statearr_17178_18328[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17169 === 6))
{var inst_17166 = (state_17168[2]);var state_17168__$1 = state_17168;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17168__$1,inst_17166);
} else
{if((state_val_17169 === 7))
{var inst_17117 = (state_17168[11]);var inst_17122 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17117);var state_17168__$1 = state_17168;var statearr_17179_18329 = state_17168__$1;(statearr_17179_18329[2] = inst_17122);
(statearr_17179_18329[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17169 === 8))
{var inst_17117 = (state_17168[11]);var state_17168__$1 = state_17168;var statearr_17180_18330 = state_17168__$1;(statearr_17180_18330[2] = inst_17117);
(statearr_17180_18330[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17169 === 9))
{var inst_17125 = (state_17168[12]);var inst_17125__$1 = (state_17168[2]);var inst_17126 = cljs.core.get.call(null,inst_17125__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_17127 = cljs.core.get.call(null,inst_17125__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_17128 = cljs.core.get.call(null,inst_17125__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_17168__$1 = (function (){var statearr_17181 = state_17168;(statearr_17181[13] = inst_17128);
(statearr_17181[14] = inst_17127);
(statearr_17181[12] = inst_17125__$1);
return statearr_17181;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_17168__$1,10,inst_17126);
} else
{if((state_val_17169 === 10))
{var inst_17132 = (state_17168[15]);var inst_17133 = (state_17168[16]);var inst_17131 = (state_17168[2]);var inst_17132__$1 = cljs.core.nth.call(null,inst_17131,0,null);var inst_17133__$1 = cljs.core.nth.call(null,inst_17131,1,null);var inst_17134 = (inst_17132__$1 == null);var inst_17135 = cljs.core._EQ_.call(null,inst_17133__$1,change);var inst_17136 = (inst_17134) || (inst_17135);var state_17168__$1 = (function (){var statearr_17182 = state_17168;(statearr_17182[15] = inst_17132__$1);
(statearr_17182[16] = inst_17133__$1);
return statearr_17182;
})();if(cljs.core.truth_(inst_17136))
{var statearr_17183_18331 = state_17168__$1;(statearr_17183_18331[1] = 11);
} else
{var statearr_17184_18332 = state_17168__$1;(statearr_17184_18332[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17169 === 11))
{var inst_17132 = (state_17168[15]);var inst_17138 = (inst_17132 == null);var state_17168__$1 = state_17168;if(cljs.core.truth_(inst_17138))
{var statearr_17185_18333 = state_17168__$1;(statearr_17185_18333[1] = 14);
} else
{var statearr_17186_18334 = state_17168__$1;(statearr_17186_18334[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17169 === 12))
{var inst_17128 = (state_17168[13]);var inst_17133 = (state_17168[16]);var inst_17147 = (state_17168[17]);var inst_17147__$1 = inst_17128.call(null,inst_17133);var state_17168__$1 = (function (){var statearr_17187 = state_17168;(statearr_17187[17] = inst_17147__$1);
return statearr_17187;
})();if(cljs.core.truth_(inst_17147__$1))
{var statearr_17188_18335 = state_17168__$1;(statearr_17188_18335[1] = 17);
} else
{var statearr_17189_18336 = state_17168__$1;(statearr_17189_18336[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17169 === 13))
{var inst_17164 = (state_17168[2]);var state_17168__$1 = state_17168;var statearr_17190_18337 = state_17168__$1;(statearr_17190_18337[2] = inst_17164);
(statearr_17190_18337[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17169 === 14))
{var inst_17133 = (state_17168[16]);var inst_17140 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_17133);var state_17168__$1 = state_17168;var statearr_17191_18338 = state_17168__$1;(statearr_17191_18338[2] = inst_17140);
(statearr_17191_18338[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17169 === 15))
{var state_17168__$1 = state_17168;var statearr_17192_18339 = state_17168__$1;(statearr_17192_18339[2] = null);
(statearr_17192_18339[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17169 === 16))
{var inst_17143 = (state_17168[2]);var inst_17144 = calc_state.call(null);var inst_17117 = inst_17144;var state_17168__$1 = (function (){var statearr_17193 = state_17168;(statearr_17193[11] = inst_17117);
(statearr_17193[18] = inst_17143);
return statearr_17193;
})();var statearr_17194_18340 = state_17168__$1;(statearr_17194_18340[2] = null);
(statearr_17194_18340[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17169 === 17))
{var inst_17147 = (state_17168[17]);var state_17168__$1 = state_17168;var statearr_17195_18341 = state_17168__$1;(statearr_17195_18341[2] = inst_17147);
(statearr_17195_18341[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17169 === 18))
{var inst_17128 = (state_17168[13]);var inst_17127 = (state_17168[14]);var inst_17133 = (state_17168[16]);var inst_17150 = cljs.core.empty_QMARK_.call(null,inst_17128);var inst_17151 = inst_17127.call(null,inst_17133);var inst_17152 = cljs.core.not.call(null,inst_17151);var inst_17153 = (inst_17150) && (inst_17152);var state_17168__$1 = state_17168;var statearr_17196_18342 = state_17168__$1;(statearr_17196_18342[2] = inst_17153);
(statearr_17196_18342[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17169 === 19))
{var inst_17155 = (state_17168[2]);var state_17168__$1 = state_17168;if(cljs.core.truth_(inst_17155))
{var statearr_17197_18343 = state_17168__$1;(statearr_17197_18343[1] = 20);
} else
{var statearr_17198_18344 = state_17168__$1;(statearr_17198_18344[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17169 === 20))
{var inst_17132 = (state_17168[15]);var state_17168__$1 = state_17168;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17168__$1,23,out,inst_17132);
} else
{if((state_val_17169 === 21))
{var state_17168__$1 = state_17168;var statearr_17199_18345 = state_17168__$1;(statearr_17199_18345[2] = null);
(statearr_17199_18345[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17169 === 22))
{var inst_17125 = (state_17168[12]);var inst_17161 = (state_17168[2]);var inst_17117 = inst_17125;var state_17168__$1 = (function (){var statearr_17200 = state_17168;(statearr_17200[11] = inst_17117);
(statearr_17200[19] = inst_17161);
return statearr_17200;
})();var statearr_17201_18346 = state_17168__$1;(statearr_17201_18346[2] = null);
(statearr_17201_18346[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17169 === 23))
{var inst_17158 = (state_17168[2]);var state_17168__$1 = state_17168;var statearr_17202_18347 = state_17168__$1;(statearr_17202_18347[2] = inst_17158);
(statearr_17202_18347[1] = 22);
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
});})(c__13592__auto___18321,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__13522__auto__,c__13592__auto___18321,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__13523__auto__ = null;
var state_machine__13523__auto____0 = (function (){var statearr_17206 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17206[0] = state_machine__13523__auto__);
(statearr_17206[1] = 1);
return statearr_17206;
});
var state_machine__13523__auto____1 = (function (state_17168){while(true){
var ret_value__13524__auto__ = (function (){try{while(true){
var result__13525__auto__ = switch__13522__auto__.call(null,state_17168);if(cljs.core.keyword_identical_QMARK_.call(null,result__13525__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13525__auto__;
}
break;
}
}catch (e17207){if((e17207 instanceof Object))
{var ex__13526__auto__ = e17207;var statearr_17208_18348 = state_17168;(statearr_17208_18348[5] = ex__13526__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17168);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17207;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13524__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18349 = state_17168;
state_17168 = G__18349;
continue;
}
} else
{return ret_value__13524__auto__;
}
break;
}
});
state_machine__13523__auto__ = function(state_17168){
switch(arguments.length){
case 0:
return state_machine__13523__auto____0.call(this);
case 1:
return state_machine__13523__auto____1.call(this,state_17168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13523__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13523__auto____0;
state_machine__13523__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13523__auto____1;
return state_machine__13523__auto__;
})()
;})(switch__13522__auto__,c__13592__auto___18321,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__13594__auto__ = (function (){var statearr_17209 = f__13593__auto__.call(null);(statearr_17209[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13592__auto___18321);
return statearr_17209;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13594__auto__);
});})(c__13592__auto___18321,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj17211 = {};return obj17211;
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
return (function (p1__17212_SHARP_){if(cljs.core.truth_(p1__17212_SHARP_.call(null,topic)))
{return p1__17212_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__17212_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4884__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t17337 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17337 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta17338){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta17338 = meta17338;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17337.cljs$lang$type = true;
cljs.core.async.t17337.cljs$lang$ctorStr = "cljs.core.async/t17337";
cljs.core.async.t17337.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async/t17337");
});})(mults,ensure_mult))
;
cljs.core.async.t17337.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t17337.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t17337.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t17337.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t17337.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t17337.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t17337.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t17337.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_17339){var self__ = this;
var _17339__$1 = this;return self__.meta17338;
});})(mults,ensure_mult))
;
cljs.core.async.t17337.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_17339,meta17338__$1){var self__ = this;
var _17339__$1 = this;return (new cljs.core.async.t17337(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta17338__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t17337 = ((function (mults,ensure_mult){
return (function __GT_t17337(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta17338){return (new cljs.core.async.t17337(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta17338));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t17337(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__13592__auto___18350 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13592__auto___18350,mults,ensure_mult,p){
return (function (){var f__13593__auto__ = (function (){var switch__13522__auto__ = ((function (c__13592__auto___18350,mults,ensure_mult,p){
return (function (state_17413){var state_val_17414 = (state_17413[1]);if((state_val_17414 === 1))
{var state_17413__$1 = state_17413;var statearr_17415_18351 = state_17413__$1;(statearr_17415_18351[2] = null);
(statearr_17415_18351[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17414 === 2))
{var state_17413__$1 = state_17413;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17413__$1,4,ch);
} else
{if((state_val_17414 === 3))
{var inst_17411 = (state_17413[2]);var state_17413__$1 = state_17413;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17413__$1,inst_17411);
} else
{if((state_val_17414 === 4))
{var inst_17342 = (state_17413[7]);var inst_17342__$1 = (state_17413[2]);var inst_17343 = (inst_17342__$1 == null);var state_17413__$1 = (function (){var statearr_17416 = state_17413;(statearr_17416[7] = inst_17342__$1);
return statearr_17416;
})();if(cljs.core.truth_(inst_17343))
{var statearr_17417_18352 = state_17413__$1;(statearr_17417_18352[1] = 5);
} else
{var statearr_17418_18353 = state_17413__$1;(statearr_17418_18353[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17414 === 5))
{var inst_17349 = cljs.core.deref.call(null,mults);var inst_17350 = cljs.core.vals.call(null,inst_17349);var inst_17351 = cljs.core.seq.call(null,inst_17350);var inst_17352 = inst_17351;var inst_17353 = null;var inst_17354 = 0;var inst_17355 = 0;var state_17413__$1 = (function (){var statearr_17419 = state_17413;(statearr_17419[8] = inst_17355);
(statearr_17419[9] = inst_17352);
(statearr_17419[10] = inst_17354);
(statearr_17419[11] = inst_17353);
return statearr_17419;
})();var statearr_17420_18354 = state_17413__$1;(statearr_17420_18354[2] = null);
(statearr_17420_18354[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17414 === 6))
{var inst_17390 = (state_17413[12]);var inst_17392 = (state_17413[13]);var inst_17342 = (state_17413[7]);var inst_17390__$1 = topic_fn.call(null,inst_17342);var inst_17391 = cljs.core.deref.call(null,mults);var inst_17392__$1 = cljs.core.get.call(null,inst_17391,inst_17390__$1);var state_17413__$1 = (function (){var statearr_17421 = state_17413;(statearr_17421[12] = inst_17390__$1);
(statearr_17421[13] = inst_17392__$1);
return statearr_17421;
})();if(cljs.core.truth_(inst_17392__$1))
{var statearr_17422_18355 = state_17413__$1;(statearr_17422_18355[1] = 19);
} else
{var statearr_17423_18356 = state_17413__$1;(statearr_17423_18356[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17414 === 7))
{var inst_17409 = (state_17413[2]);var state_17413__$1 = state_17413;var statearr_17424_18357 = state_17413__$1;(statearr_17424_18357[2] = inst_17409);
(statearr_17424_18357[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17414 === 8))
{var inst_17355 = (state_17413[8]);var inst_17354 = (state_17413[10]);var inst_17357 = (inst_17355 < inst_17354);var inst_17358 = inst_17357;var state_17413__$1 = state_17413;if(cljs.core.truth_(inst_17358))
{var statearr_17428_18358 = state_17413__$1;(statearr_17428_18358[1] = 10);
} else
{var statearr_17429_18359 = state_17413__$1;(statearr_17429_18359[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17414 === 9))
{var inst_17388 = (state_17413[2]);var state_17413__$1 = state_17413;var statearr_17430_18360 = state_17413__$1;(statearr_17430_18360[2] = inst_17388);
(statearr_17430_18360[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17414 === 10))
{var inst_17355 = (state_17413[8]);var inst_17352 = (state_17413[9]);var inst_17354 = (state_17413[10]);var inst_17353 = (state_17413[11]);var inst_17360 = cljs.core._nth.call(null,inst_17353,inst_17355);var inst_17361 = cljs.core.async.muxch_STAR_.call(null,inst_17360);var inst_17362 = cljs.core.async.close_BANG_.call(null,inst_17361);var inst_17363 = (inst_17355 + 1);var tmp17425 = inst_17352;var tmp17426 = inst_17354;var tmp17427 = inst_17353;var inst_17352__$1 = tmp17425;var inst_17353__$1 = tmp17427;var inst_17354__$1 = tmp17426;var inst_17355__$1 = inst_17363;var state_17413__$1 = (function (){var statearr_17431 = state_17413;(statearr_17431[8] = inst_17355__$1);
(statearr_17431[9] = inst_17352__$1);
(statearr_17431[10] = inst_17354__$1);
(statearr_17431[11] = inst_17353__$1);
(statearr_17431[14] = inst_17362);
return statearr_17431;
})();var statearr_17432_18361 = state_17413__$1;(statearr_17432_18361[2] = null);
(statearr_17432_18361[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17414 === 11))
{var inst_17352 = (state_17413[9]);var inst_17366 = (state_17413[15]);var inst_17366__$1 = cljs.core.seq.call(null,inst_17352);var state_17413__$1 = (function (){var statearr_17433 = state_17413;(statearr_17433[15] = inst_17366__$1);
return statearr_17433;
})();if(inst_17366__$1)
{var statearr_17434_18362 = state_17413__$1;(statearr_17434_18362[1] = 13);
} else
{var statearr_17435_18363 = state_17413__$1;(statearr_17435_18363[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17414 === 12))
{var inst_17386 = (state_17413[2]);var state_17413__$1 = state_17413;var statearr_17436_18364 = state_17413__$1;(statearr_17436_18364[2] = inst_17386);
(statearr_17436_18364[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17414 === 13))
{var inst_17366 = (state_17413[15]);var inst_17368 = cljs.core.chunked_seq_QMARK_.call(null,inst_17366);var state_17413__$1 = state_17413;if(inst_17368)
{var statearr_17437_18365 = state_17413__$1;(statearr_17437_18365[1] = 16);
} else
{var statearr_17438_18366 = state_17413__$1;(statearr_17438_18366[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17414 === 14))
{var state_17413__$1 = state_17413;var statearr_17439_18367 = state_17413__$1;(statearr_17439_18367[2] = null);
(statearr_17439_18367[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17414 === 15))
{var inst_17384 = (state_17413[2]);var state_17413__$1 = state_17413;var statearr_17440_18368 = state_17413__$1;(statearr_17440_18368[2] = inst_17384);
(statearr_17440_18368[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17414 === 16))
{var inst_17366 = (state_17413[15]);var inst_17370 = cljs.core.chunk_first.call(null,inst_17366);var inst_17371 = cljs.core.chunk_rest.call(null,inst_17366);var inst_17372 = cljs.core.count.call(null,inst_17370);var inst_17352 = inst_17371;var inst_17353 = inst_17370;var inst_17354 = inst_17372;var inst_17355 = 0;var state_17413__$1 = (function (){var statearr_17441 = state_17413;(statearr_17441[8] = inst_17355);
(statearr_17441[9] = inst_17352);
(statearr_17441[10] = inst_17354);
(statearr_17441[11] = inst_17353);
return statearr_17441;
})();var statearr_17442_18369 = state_17413__$1;(statearr_17442_18369[2] = null);
(statearr_17442_18369[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17414 === 17))
{var inst_17366 = (state_17413[15]);var inst_17375 = cljs.core.first.call(null,inst_17366);var inst_17376 = cljs.core.async.muxch_STAR_.call(null,inst_17375);var inst_17377 = cljs.core.async.close_BANG_.call(null,inst_17376);var inst_17378 = cljs.core.next.call(null,inst_17366);var inst_17352 = inst_17378;var inst_17353 = null;var inst_17354 = 0;var inst_17355 = 0;var state_17413__$1 = (function (){var statearr_17443 = state_17413;(statearr_17443[8] = inst_17355);
(statearr_17443[9] = inst_17352);
(statearr_17443[10] = inst_17354);
(statearr_17443[11] = inst_17353);
(statearr_17443[16] = inst_17377);
return statearr_17443;
})();var statearr_17444_18370 = state_17413__$1;(statearr_17444_18370[2] = null);
(statearr_17444_18370[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17414 === 18))
{var inst_17381 = (state_17413[2]);var state_17413__$1 = state_17413;var statearr_17445_18371 = state_17413__$1;(statearr_17445_18371[2] = inst_17381);
(statearr_17445_18371[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17414 === 19))
{var state_17413__$1 = state_17413;var statearr_17446_18372 = state_17413__$1;(statearr_17446_18372[2] = null);
(statearr_17446_18372[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17414 === 20))
{var state_17413__$1 = state_17413;var statearr_17447_18373 = state_17413__$1;(statearr_17447_18373[2] = null);
(statearr_17447_18373[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17414 === 21))
{var inst_17406 = (state_17413[2]);var state_17413__$1 = (function (){var statearr_17448 = state_17413;(statearr_17448[17] = inst_17406);
return statearr_17448;
})();var statearr_17449_18374 = state_17413__$1;(statearr_17449_18374[2] = null);
(statearr_17449_18374[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17414 === 22))
{var inst_17403 = (state_17413[2]);var state_17413__$1 = state_17413;var statearr_17450_18375 = state_17413__$1;(statearr_17450_18375[2] = inst_17403);
(statearr_17450_18375[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17414 === 23))
{var inst_17390 = (state_17413[12]);var inst_17394 = (state_17413[2]);var inst_17395 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_17390);var state_17413__$1 = (function (){var statearr_17451 = state_17413;(statearr_17451[18] = inst_17394);
return statearr_17451;
})();var statearr_17452_18376 = state_17413__$1;(statearr_17452_18376[2] = inst_17395);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17413__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17414 === 24))
{var inst_17392 = (state_17413[13]);var inst_17342 = (state_17413[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17413,23,Object,null,22);var inst_17399 = cljs.core.async.muxch_STAR_.call(null,inst_17392);var state_17413__$1 = state_17413;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17413__$1,25,inst_17399,inst_17342);
} else
{if((state_val_17414 === 25))
{var inst_17401 = (state_17413[2]);var state_17413__$1 = state_17413;var statearr_17453_18377 = state_17413__$1;(statearr_17453_18377[2] = inst_17401);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17413__$1);
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
});})(c__13592__auto___18350,mults,ensure_mult,p))
;return ((function (switch__13522__auto__,c__13592__auto___18350,mults,ensure_mult,p){
return (function() {
var state_machine__13523__auto__ = null;
var state_machine__13523__auto____0 = (function (){var statearr_17457 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17457[0] = state_machine__13523__auto__);
(statearr_17457[1] = 1);
return statearr_17457;
});
var state_machine__13523__auto____1 = (function (state_17413){while(true){
var ret_value__13524__auto__ = (function (){try{while(true){
var result__13525__auto__ = switch__13522__auto__.call(null,state_17413);if(cljs.core.keyword_identical_QMARK_.call(null,result__13525__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13525__auto__;
}
break;
}
}catch (e17458){if((e17458 instanceof Object))
{var ex__13526__auto__ = e17458;var statearr_17459_18378 = state_17413;(statearr_17459_18378[5] = ex__13526__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17413);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17458;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13524__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18379 = state_17413;
state_17413 = G__18379;
continue;
}
} else
{return ret_value__13524__auto__;
}
break;
}
});
state_machine__13523__auto__ = function(state_17413){
switch(arguments.length){
case 0:
return state_machine__13523__auto____0.call(this);
case 1:
return state_machine__13523__auto____1.call(this,state_17413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13523__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13523__auto____0;
state_machine__13523__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13523__auto____1;
return state_machine__13523__auto__;
})()
;})(switch__13522__auto__,c__13592__auto___18350,mults,ensure_mult,p))
})();var state__13594__auto__ = (function (){var statearr_17460 = f__13593__auto__.call(null);(statearr_17460[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13592__auto___18350);
return statearr_17460;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13594__auto__);
});})(c__13592__auto___18350,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__13592__auto___18380 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13592__auto___18380,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__13593__auto__ = (function (){var switch__13522__auto__ = ((function (c__13592__auto___18380,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_17567){var state_val_17568 = (state_17567[1]);if((state_val_17568 === 1))
{var state_17567__$1 = state_17567;var statearr_17569_18381 = state_17567__$1;(statearr_17569_18381[2] = null);
(statearr_17569_18381[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17568 === 2))
{var inst_17530 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_17531 = 0;var state_17567__$1 = (function (){var statearr_17570 = state_17567;(statearr_17570[7] = inst_17531);
(statearr_17570[8] = inst_17530);
return statearr_17570;
})();var statearr_17571_18382 = state_17567__$1;(statearr_17571_18382[2] = null);
(statearr_17571_18382[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17568 === 3))
{var inst_17565 = (state_17567[2]);var state_17567__$1 = state_17567;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17567__$1,inst_17565);
} else
{if((state_val_17568 === 4))
{var inst_17531 = (state_17567[7]);var inst_17533 = (inst_17531 < cnt);var state_17567__$1 = state_17567;if(cljs.core.truth_(inst_17533))
{var statearr_17572_18383 = state_17567__$1;(statearr_17572_18383[1] = 6);
} else
{var statearr_17573_18384 = state_17567__$1;(statearr_17573_18384[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17568 === 5))
{var inst_17551 = (state_17567[2]);var state_17567__$1 = (function (){var statearr_17574 = state_17567;(statearr_17574[9] = inst_17551);
return statearr_17574;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17567__$1,12,dchan);
} else
{if((state_val_17568 === 6))
{var state_17567__$1 = state_17567;var statearr_17575_18385 = state_17567__$1;(statearr_17575_18385[2] = null);
(statearr_17575_18385[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17568 === 7))
{var state_17567__$1 = state_17567;var statearr_17576_18386 = state_17567__$1;(statearr_17576_18386[2] = null);
(statearr_17576_18386[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17568 === 8))
{var inst_17549 = (state_17567[2]);var state_17567__$1 = state_17567;var statearr_17577_18387 = state_17567__$1;(statearr_17577_18387[2] = inst_17549);
(statearr_17577_18387[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17568 === 9))
{var inst_17531 = (state_17567[7]);var inst_17544 = (state_17567[2]);var inst_17545 = (inst_17531 + 1);var inst_17531__$1 = inst_17545;var state_17567__$1 = (function (){var statearr_17578 = state_17567;(statearr_17578[7] = inst_17531__$1);
(statearr_17578[10] = inst_17544);
return statearr_17578;
})();var statearr_17579_18388 = state_17567__$1;(statearr_17579_18388[2] = null);
(statearr_17579_18388[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17568 === 10))
{var inst_17535 = (state_17567[2]);var inst_17536 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_17567__$1 = (function (){var statearr_17580 = state_17567;(statearr_17580[11] = inst_17535);
return statearr_17580;
})();var statearr_17581_18389 = state_17567__$1;(statearr_17581_18389[2] = inst_17536);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17567__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17568 === 11))
{var inst_17531 = (state_17567[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17567,10,Object,null,9);var inst_17540 = chs__$1.call(null,inst_17531);var inst_17541 = done.call(null,inst_17531);var inst_17542 = cljs.core.async.take_BANG_.call(null,inst_17540,inst_17541);var state_17567__$1 = state_17567;var statearr_17582_18390 = state_17567__$1;(statearr_17582_18390[2] = inst_17542);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17567__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17568 === 12))
{var inst_17553 = (state_17567[12]);var inst_17553__$1 = (state_17567[2]);var inst_17554 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_17553__$1);var state_17567__$1 = (function (){var statearr_17583 = state_17567;(statearr_17583[12] = inst_17553__$1);
return statearr_17583;
})();if(cljs.core.truth_(inst_17554))
{var statearr_17584_18391 = state_17567__$1;(statearr_17584_18391[1] = 13);
} else
{var statearr_17585_18392 = state_17567__$1;(statearr_17585_18392[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17568 === 13))
{var inst_17556 = cljs.core.async.close_BANG_.call(null,out);var state_17567__$1 = state_17567;var statearr_17586_18393 = state_17567__$1;(statearr_17586_18393[2] = inst_17556);
(statearr_17586_18393[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17568 === 14))
{var inst_17553 = (state_17567[12]);var inst_17558 = cljs.core.apply.call(null,f,inst_17553);var state_17567__$1 = state_17567;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17567__$1,16,out,inst_17558);
} else
{if((state_val_17568 === 15))
{var inst_17563 = (state_17567[2]);var state_17567__$1 = state_17567;var statearr_17587_18394 = state_17567__$1;(statearr_17587_18394[2] = inst_17563);
(statearr_17587_18394[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17568 === 16))
{var inst_17560 = (state_17567[2]);var state_17567__$1 = (function (){var statearr_17588 = state_17567;(statearr_17588[13] = inst_17560);
return statearr_17588;
})();var statearr_17589_18395 = state_17567__$1;(statearr_17589_18395[2] = null);
(statearr_17589_18395[1] = 2);
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
});})(c__13592__auto___18380,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__13522__auto__,c__13592__auto___18380,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__13523__auto__ = null;
var state_machine__13523__auto____0 = (function (){var statearr_17593 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17593[0] = state_machine__13523__auto__);
(statearr_17593[1] = 1);
return statearr_17593;
});
var state_machine__13523__auto____1 = (function (state_17567){while(true){
var ret_value__13524__auto__ = (function (){try{while(true){
var result__13525__auto__ = switch__13522__auto__.call(null,state_17567);if(cljs.core.keyword_identical_QMARK_.call(null,result__13525__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13525__auto__;
}
break;
}
}catch (e17594){if((e17594 instanceof Object))
{var ex__13526__auto__ = e17594;var statearr_17595_18396 = state_17567;(statearr_17595_18396[5] = ex__13526__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17567);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17594;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13524__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18397 = state_17567;
state_17567 = G__18397;
continue;
}
} else
{return ret_value__13524__auto__;
}
break;
}
});
state_machine__13523__auto__ = function(state_17567){
switch(arguments.length){
case 0:
return state_machine__13523__auto____0.call(this);
case 1:
return state_machine__13523__auto____1.call(this,state_17567);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13523__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13523__auto____0;
state_machine__13523__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13523__auto____1;
return state_machine__13523__auto__;
})()
;})(switch__13522__auto__,c__13592__auto___18380,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__13594__auto__ = (function (){var statearr_17596 = f__13593__auto__.call(null);(statearr_17596[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13592__auto___18380);
return statearr_17596;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13594__auto__);
});})(c__13592__auto___18380,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13592__auto___18398 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13592__auto___18398,out){
return (function (){var f__13593__auto__ = (function (){var switch__13522__auto__ = ((function (c__13592__auto___18398,out){
return (function (state_17680){var state_val_17681 = (state_17680[1]);if((state_val_17681 === 1))
{var inst_17651 = cljs.core.vec.call(null,chs);var inst_17652 = inst_17651;var state_17680__$1 = (function (){var statearr_17682 = state_17680;(statearr_17682[7] = inst_17652);
return statearr_17682;
})();var statearr_17683_18399 = state_17680__$1;(statearr_17683_18399[2] = null);
(statearr_17683_18399[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17681 === 2))
{var inst_17652 = (state_17680[7]);var inst_17654 = cljs.core.count.call(null,inst_17652);var inst_17655 = (inst_17654 > 0);var state_17680__$1 = state_17680;if(cljs.core.truth_(inst_17655))
{var statearr_17684_18400 = state_17680__$1;(statearr_17684_18400[1] = 4);
} else
{var statearr_17685_18401 = state_17680__$1;(statearr_17685_18401[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17681 === 3))
{var inst_17678 = (state_17680[2]);var state_17680__$1 = state_17680;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17680__$1,inst_17678);
} else
{if((state_val_17681 === 4))
{var inst_17652 = (state_17680[7]);var state_17680__$1 = state_17680;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_17680__$1,7,inst_17652);
} else
{if((state_val_17681 === 5))
{var inst_17674 = cljs.core.async.close_BANG_.call(null,out);var state_17680__$1 = state_17680;var statearr_17686_18402 = state_17680__$1;(statearr_17686_18402[2] = inst_17674);
(statearr_17686_18402[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17681 === 6))
{var inst_17676 = (state_17680[2]);var state_17680__$1 = state_17680;var statearr_17687_18403 = state_17680__$1;(statearr_17687_18403[2] = inst_17676);
(statearr_17687_18403[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17681 === 7))
{var inst_17659 = (state_17680[8]);var inst_17660 = (state_17680[9]);var inst_17659__$1 = (state_17680[2]);var inst_17660__$1 = cljs.core.nth.call(null,inst_17659__$1,0,null);var inst_17661 = cljs.core.nth.call(null,inst_17659__$1,1,null);var inst_17662 = (inst_17660__$1 == null);var state_17680__$1 = (function (){var statearr_17688 = state_17680;(statearr_17688[8] = inst_17659__$1);
(statearr_17688[9] = inst_17660__$1);
(statearr_17688[10] = inst_17661);
return statearr_17688;
})();if(cljs.core.truth_(inst_17662))
{var statearr_17689_18404 = state_17680__$1;(statearr_17689_18404[1] = 8);
} else
{var statearr_17690_18405 = state_17680__$1;(statearr_17690_18405[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17681 === 8))
{var inst_17652 = (state_17680[7]);var inst_17659 = (state_17680[8]);var inst_17660 = (state_17680[9]);var inst_17661 = (state_17680[10]);var inst_17664 = (function (){var c = inst_17661;var v = inst_17660;var vec__17657 = inst_17659;var cs = inst_17652;return ((function (c,v,vec__17657,cs,inst_17652,inst_17659,inst_17660,inst_17661,state_val_17681,c__13592__auto___18398,out){
return (function (p1__17597_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__17597_SHARP_);
});
;})(c,v,vec__17657,cs,inst_17652,inst_17659,inst_17660,inst_17661,state_val_17681,c__13592__auto___18398,out))
})();var inst_17665 = cljs.core.filterv.call(null,inst_17664,inst_17652);var inst_17652__$1 = inst_17665;var state_17680__$1 = (function (){var statearr_17691 = state_17680;(statearr_17691[7] = inst_17652__$1);
return statearr_17691;
})();var statearr_17692_18406 = state_17680__$1;(statearr_17692_18406[2] = null);
(statearr_17692_18406[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17681 === 9))
{var inst_17660 = (state_17680[9]);var state_17680__$1 = state_17680;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17680__$1,11,out,inst_17660);
} else
{if((state_val_17681 === 10))
{var inst_17672 = (state_17680[2]);var state_17680__$1 = state_17680;var statearr_17694_18407 = state_17680__$1;(statearr_17694_18407[2] = inst_17672);
(statearr_17694_18407[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17681 === 11))
{var inst_17652 = (state_17680[7]);var inst_17669 = (state_17680[2]);var tmp17693 = inst_17652;var inst_17652__$1 = tmp17693;var state_17680__$1 = (function (){var statearr_17695 = state_17680;(statearr_17695[7] = inst_17652__$1);
(statearr_17695[11] = inst_17669);
return statearr_17695;
})();var statearr_17696_18408 = state_17680__$1;(statearr_17696_18408[2] = null);
(statearr_17696_18408[1] = 2);
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
});})(c__13592__auto___18398,out))
;return ((function (switch__13522__auto__,c__13592__auto___18398,out){
return (function() {
var state_machine__13523__auto__ = null;
var state_machine__13523__auto____0 = (function (){var statearr_17700 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17700[0] = state_machine__13523__auto__);
(statearr_17700[1] = 1);
return statearr_17700;
});
var state_machine__13523__auto____1 = (function (state_17680){while(true){
var ret_value__13524__auto__ = (function (){try{while(true){
var result__13525__auto__ = switch__13522__auto__.call(null,state_17680);if(cljs.core.keyword_identical_QMARK_.call(null,result__13525__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13525__auto__;
}
break;
}
}catch (e17701){if((e17701 instanceof Object))
{var ex__13526__auto__ = e17701;var statearr_17702_18409 = state_17680;(statearr_17702_18409[5] = ex__13526__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17680);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17701;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13524__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18410 = state_17680;
state_17680 = G__18410;
continue;
}
} else
{return ret_value__13524__auto__;
}
break;
}
});
state_machine__13523__auto__ = function(state_17680){
switch(arguments.length){
case 0:
return state_machine__13523__auto____0.call(this);
case 1:
return state_machine__13523__auto____1.call(this,state_17680);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13523__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13523__auto____0;
state_machine__13523__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13523__auto____1;
return state_machine__13523__auto__;
})()
;})(switch__13522__auto__,c__13592__auto___18398,out))
})();var state__13594__auto__ = (function (){var statearr_17703 = f__13593__auto__.call(null);(statearr_17703[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13592__auto___18398);
return statearr_17703;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13594__auto__);
});})(c__13592__auto___18398,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13592__auto___18411 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13592__auto___18411,out){
return (function (){var f__13593__auto__ = (function (){var switch__13522__auto__ = ((function (c__13592__auto___18411,out){
return (function (state_17773){var state_val_17774 = (state_17773[1]);if((state_val_17774 === 1))
{var inst_17750 = 0;var state_17773__$1 = (function (){var statearr_17775 = state_17773;(statearr_17775[7] = inst_17750);
return statearr_17775;
})();var statearr_17776_18412 = state_17773__$1;(statearr_17776_18412[2] = null);
(statearr_17776_18412[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17774 === 2))
{var inst_17750 = (state_17773[7]);var inst_17752 = (inst_17750 < n);var state_17773__$1 = state_17773;if(cljs.core.truth_(inst_17752))
{var statearr_17777_18413 = state_17773__$1;(statearr_17777_18413[1] = 4);
} else
{var statearr_17778_18414 = state_17773__$1;(statearr_17778_18414[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17774 === 3))
{var inst_17770 = (state_17773[2]);var inst_17771 = cljs.core.async.close_BANG_.call(null,out);var state_17773__$1 = (function (){var statearr_17779 = state_17773;(statearr_17779[8] = inst_17770);
return statearr_17779;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17773__$1,inst_17771);
} else
{if((state_val_17774 === 4))
{var state_17773__$1 = state_17773;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17773__$1,7,ch);
} else
{if((state_val_17774 === 5))
{var state_17773__$1 = state_17773;var statearr_17780_18415 = state_17773__$1;(statearr_17780_18415[2] = null);
(statearr_17780_18415[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17774 === 6))
{var inst_17768 = (state_17773[2]);var state_17773__$1 = state_17773;var statearr_17781_18416 = state_17773__$1;(statearr_17781_18416[2] = inst_17768);
(statearr_17781_18416[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17774 === 7))
{var inst_17755 = (state_17773[9]);var inst_17755__$1 = (state_17773[2]);var inst_17756 = (inst_17755__$1 == null);var inst_17757 = cljs.core.not.call(null,inst_17756);var state_17773__$1 = (function (){var statearr_17782 = state_17773;(statearr_17782[9] = inst_17755__$1);
return statearr_17782;
})();if(inst_17757)
{var statearr_17783_18417 = state_17773__$1;(statearr_17783_18417[1] = 8);
} else
{var statearr_17784_18418 = state_17773__$1;(statearr_17784_18418[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17774 === 8))
{var inst_17755 = (state_17773[9]);var state_17773__$1 = state_17773;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17773__$1,11,out,inst_17755);
} else
{if((state_val_17774 === 9))
{var state_17773__$1 = state_17773;var statearr_17785_18419 = state_17773__$1;(statearr_17785_18419[2] = null);
(statearr_17785_18419[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17774 === 10))
{var inst_17765 = (state_17773[2]);var state_17773__$1 = state_17773;var statearr_17786_18420 = state_17773__$1;(statearr_17786_18420[2] = inst_17765);
(statearr_17786_18420[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17774 === 11))
{var inst_17750 = (state_17773[7]);var inst_17760 = (state_17773[2]);var inst_17761 = (inst_17750 + 1);var inst_17750__$1 = inst_17761;var state_17773__$1 = (function (){var statearr_17787 = state_17773;(statearr_17787[7] = inst_17750__$1);
(statearr_17787[10] = inst_17760);
return statearr_17787;
})();var statearr_17788_18421 = state_17773__$1;(statearr_17788_18421[2] = null);
(statearr_17788_18421[1] = 2);
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
});})(c__13592__auto___18411,out))
;return ((function (switch__13522__auto__,c__13592__auto___18411,out){
return (function() {
var state_machine__13523__auto__ = null;
var state_machine__13523__auto____0 = (function (){var statearr_17792 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_17792[0] = state_machine__13523__auto__);
(statearr_17792[1] = 1);
return statearr_17792;
});
var state_machine__13523__auto____1 = (function (state_17773){while(true){
var ret_value__13524__auto__ = (function (){try{while(true){
var result__13525__auto__ = switch__13522__auto__.call(null,state_17773);if(cljs.core.keyword_identical_QMARK_.call(null,result__13525__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13525__auto__;
}
break;
}
}catch (e17793){if((e17793 instanceof Object))
{var ex__13526__auto__ = e17793;var statearr_17794_18422 = state_17773;(statearr_17794_18422[5] = ex__13526__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17773);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17793;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13524__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18423 = state_17773;
state_17773 = G__18423;
continue;
}
} else
{return ret_value__13524__auto__;
}
break;
}
});
state_machine__13523__auto__ = function(state_17773){
switch(arguments.length){
case 0:
return state_machine__13523__auto____0.call(this);
case 1:
return state_machine__13523__auto____1.call(this,state_17773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13523__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13523__auto____0;
state_machine__13523__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13523__auto____1;
return state_machine__13523__auto__;
})()
;})(switch__13522__auto__,c__13592__auto___18411,out))
})();var state__13594__auto__ = (function (){var statearr_17795 = f__13593__auto__.call(null);(statearr_17795[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13592__auto___18411);
return statearr_17795;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13594__auto__);
});})(c__13592__auto___18411,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13592__auto___18424 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13592__auto___18424,out){
return (function (){var f__13593__auto__ = (function (){var switch__13522__auto__ = ((function (c__13592__auto___18424,out){
return (function (state_17867){var state_val_17868 = (state_17867[1]);if((state_val_17868 === 1))
{var inst_17844 = null;var state_17867__$1 = (function (){var statearr_17869 = state_17867;(statearr_17869[7] = inst_17844);
return statearr_17869;
})();var statearr_17870_18425 = state_17867__$1;(statearr_17870_18425[2] = null);
(statearr_17870_18425[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17868 === 2))
{var state_17867__$1 = state_17867;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17867__$1,4,ch);
} else
{if((state_val_17868 === 3))
{var inst_17864 = (state_17867[2]);var inst_17865 = cljs.core.async.close_BANG_.call(null,out);var state_17867__$1 = (function (){var statearr_17871 = state_17867;(statearr_17871[8] = inst_17864);
return statearr_17871;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17867__$1,inst_17865);
} else
{if((state_val_17868 === 4))
{var inst_17847 = (state_17867[9]);var inst_17847__$1 = (state_17867[2]);var inst_17848 = (inst_17847__$1 == null);var inst_17849 = cljs.core.not.call(null,inst_17848);var state_17867__$1 = (function (){var statearr_17872 = state_17867;(statearr_17872[9] = inst_17847__$1);
return statearr_17872;
})();if(inst_17849)
{var statearr_17873_18426 = state_17867__$1;(statearr_17873_18426[1] = 5);
} else
{var statearr_17874_18427 = state_17867__$1;(statearr_17874_18427[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17868 === 5))
{var inst_17844 = (state_17867[7]);var inst_17847 = (state_17867[9]);var inst_17851 = cljs.core._EQ_.call(null,inst_17847,inst_17844);var state_17867__$1 = state_17867;if(inst_17851)
{var statearr_17875_18428 = state_17867__$1;(statearr_17875_18428[1] = 8);
} else
{var statearr_17876_18429 = state_17867__$1;(statearr_17876_18429[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17868 === 6))
{var state_17867__$1 = state_17867;var statearr_17878_18430 = state_17867__$1;(statearr_17878_18430[2] = null);
(statearr_17878_18430[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17868 === 7))
{var inst_17862 = (state_17867[2]);var state_17867__$1 = state_17867;var statearr_17879_18431 = state_17867__$1;(statearr_17879_18431[2] = inst_17862);
(statearr_17879_18431[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17868 === 8))
{var inst_17844 = (state_17867[7]);var tmp17877 = inst_17844;var inst_17844__$1 = tmp17877;var state_17867__$1 = (function (){var statearr_17880 = state_17867;(statearr_17880[7] = inst_17844__$1);
return statearr_17880;
})();var statearr_17881_18432 = state_17867__$1;(statearr_17881_18432[2] = null);
(statearr_17881_18432[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17868 === 9))
{var inst_17847 = (state_17867[9]);var state_17867__$1 = state_17867;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17867__$1,11,out,inst_17847);
} else
{if((state_val_17868 === 10))
{var inst_17859 = (state_17867[2]);var state_17867__$1 = state_17867;var statearr_17882_18433 = state_17867__$1;(statearr_17882_18433[2] = inst_17859);
(statearr_17882_18433[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17868 === 11))
{var inst_17847 = (state_17867[9]);var inst_17856 = (state_17867[2]);var inst_17844 = inst_17847;var state_17867__$1 = (function (){var statearr_17883 = state_17867;(statearr_17883[7] = inst_17844);
(statearr_17883[10] = inst_17856);
return statearr_17883;
})();var statearr_17884_18434 = state_17867__$1;(statearr_17884_18434[2] = null);
(statearr_17884_18434[1] = 2);
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
});})(c__13592__auto___18424,out))
;return ((function (switch__13522__auto__,c__13592__auto___18424,out){
return (function() {
var state_machine__13523__auto__ = null;
var state_machine__13523__auto____0 = (function (){var statearr_17888 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_17888[0] = state_machine__13523__auto__);
(statearr_17888[1] = 1);
return statearr_17888;
});
var state_machine__13523__auto____1 = (function (state_17867){while(true){
var ret_value__13524__auto__ = (function (){try{while(true){
var result__13525__auto__ = switch__13522__auto__.call(null,state_17867);if(cljs.core.keyword_identical_QMARK_.call(null,result__13525__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13525__auto__;
}
break;
}
}catch (e17889){if((e17889 instanceof Object))
{var ex__13526__auto__ = e17889;var statearr_17890_18435 = state_17867;(statearr_17890_18435[5] = ex__13526__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17867);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17889;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13524__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18436 = state_17867;
state_17867 = G__18436;
continue;
}
} else
{return ret_value__13524__auto__;
}
break;
}
});
state_machine__13523__auto__ = function(state_17867){
switch(arguments.length){
case 0:
return state_machine__13523__auto____0.call(this);
case 1:
return state_machine__13523__auto____1.call(this,state_17867);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13523__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13523__auto____0;
state_machine__13523__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13523__auto____1;
return state_machine__13523__auto__;
})()
;})(switch__13522__auto__,c__13592__auto___18424,out))
})();var state__13594__auto__ = (function (){var statearr_17891 = f__13593__auto__.call(null);(statearr_17891[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13592__auto___18424);
return statearr_17891;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13594__auto__);
});})(c__13592__auto___18424,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13592__auto___18437 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13592__auto___18437,out){
return (function (){var f__13593__auto__ = (function (){var switch__13522__auto__ = ((function (c__13592__auto___18437,out){
return (function (state_17996){var state_val_17997 = (state_17996[1]);if((state_val_17997 === 1))
{var inst_17959 = (new Array(n));var inst_17960 = inst_17959;var inst_17961 = 0;var state_17996__$1 = (function (){var statearr_17998 = state_17996;(statearr_17998[7] = inst_17960);
(statearr_17998[8] = inst_17961);
return statearr_17998;
})();var statearr_17999_18438 = state_17996__$1;(statearr_17999_18438[2] = null);
(statearr_17999_18438[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17997 === 2))
{var state_17996__$1 = state_17996;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17996__$1,4,ch);
} else
{if((state_val_17997 === 3))
{var inst_17994 = (state_17996[2]);var state_17996__$1 = state_17996;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17996__$1,inst_17994);
} else
{if((state_val_17997 === 4))
{var inst_17964 = (state_17996[9]);var inst_17964__$1 = (state_17996[2]);var inst_17965 = (inst_17964__$1 == null);var inst_17966 = cljs.core.not.call(null,inst_17965);var state_17996__$1 = (function (){var statearr_18000 = state_17996;(statearr_18000[9] = inst_17964__$1);
return statearr_18000;
})();if(inst_17966)
{var statearr_18001_18439 = state_17996__$1;(statearr_18001_18439[1] = 5);
} else
{var statearr_18002_18440 = state_17996__$1;(statearr_18002_18440[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17997 === 5))
{var inst_17964 = (state_17996[9]);var inst_17960 = (state_17996[7]);var inst_17961 = (state_17996[8]);var inst_17969 = (state_17996[10]);var inst_17968 = (inst_17960[inst_17961] = inst_17964);var inst_17969__$1 = (inst_17961 + 1);var inst_17970 = (inst_17969__$1 < n);var state_17996__$1 = (function (){var statearr_18003 = state_17996;(statearr_18003[11] = inst_17968);
(statearr_18003[10] = inst_17969__$1);
return statearr_18003;
})();if(cljs.core.truth_(inst_17970))
{var statearr_18004_18441 = state_17996__$1;(statearr_18004_18441[1] = 8);
} else
{var statearr_18005_18442 = state_17996__$1;(statearr_18005_18442[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17997 === 6))
{var inst_17961 = (state_17996[8]);var inst_17982 = (inst_17961 > 0);var state_17996__$1 = state_17996;if(cljs.core.truth_(inst_17982))
{var statearr_18007_18443 = state_17996__$1;(statearr_18007_18443[1] = 12);
} else
{var statearr_18008_18444 = state_17996__$1;(statearr_18008_18444[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17997 === 7))
{var inst_17992 = (state_17996[2]);var state_17996__$1 = state_17996;var statearr_18009_18445 = state_17996__$1;(statearr_18009_18445[2] = inst_17992);
(statearr_18009_18445[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17997 === 8))
{var inst_17960 = (state_17996[7]);var inst_17969 = (state_17996[10]);var tmp18006 = inst_17960;var inst_17960__$1 = tmp18006;var inst_17961 = inst_17969;var state_17996__$1 = (function (){var statearr_18010 = state_17996;(statearr_18010[7] = inst_17960__$1);
(statearr_18010[8] = inst_17961);
return statearr_18010;
})();var statearr_18011_18446 = state_17996__$1;(statearr_18011_18446[2] = null);
(statearr_18011_18446[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17997 === 9))
{var inst_17960 = (state_17996[7]);var inst_17974 = cljs.core.vec.call(null,inst_17960);var state_17996__$1 = state_17996;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17996__$1,11,out,inst_17974);
} else
{if((state_val_17997 === 10))
{var inst_17980 = (state_17996[2]);var state_17996__$1 = state_17996;var statearr_18012_18447 = state_17996__$1;(statearr_18012_18447[2] = inst_17980);
(statearr_18012_18447[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17997 === 11))
{var inst_17976 = (state_17996[2]);var inst_17977 = (new Array(n));var inst_17960 = inst_17977;var inst_17961 = 0;var state_17996__$1 = (function (){var statearr_18013 = state_17996;(statearr_18013[7] = inst_17960);
(statearr_18013[8] = inst_17961);
(statearr_18013[12] = inst_17976);
return statearr_18013;
})();var statearr_18014_18448 = state_17996__$1;(statearr_18014_18448[2] = null);
(statearr_18014_18448[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17997 === 12))
{var inst_17960 = (state_17996[7]);var inst_17984 = cljs.core.vec.call(null,inst_17960);var state_17996__$1 = state_17996;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17996__$1,15,out,inst_17984);
} else
{if((state_val_17997 === 13))
{var state_17996__$1 = state_17996;var statearr_18015_18449 = state_17996__$1;(statearr_18015_18449[2] = null);
(statearr_18015_18449[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17997 === 14))
{var inst_17989 = (state_17996[2]);var inst_17990 = cljs.core.async.close_BANG_.call(null,out);var state_17996__$1 = (function (){var statearr_18016 = state_17996;(statearr_18016[13] = inst_17989);
return statearr_18016;
})();var statearr_18017_18450 = state_17996__$1;(statearr_18017_18450[2] = inst_17990);
(statearr_18017_18450[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17997 === 15))
{var inst_17986 = (state_17996[2]);var state_17996__$1 = state_17996;var statearr_18018_18451 = state_17996__$1;(statearr_18018_18451[2] = inst_17986);
(statearr_18018_18451[1] = 14);
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
});})(c__13592__auto___18437,out))
;return ((function (switch__13522__auto__,c__13592__auto___18437,out){
return (function() {
var state_machine__13523__auto__ = null;
var state_machine__13523__auto____0 = (function (){var statearr_18022 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18022[0] = state_machine__13523__auto__);
(statearr_18022[1] = 1);
return statearr_18022;
});
var state_machine__13523__auto____1 = (function (state_17996){while(true){
var ret_value__13524__auto__ = (function (){try{while(true){
var result__13525__auto__ = switch__13522__auto__.call(null,state_17996);if(cljs.core.keyword_identical_QMARK_.call(null,result__13525__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13525__auto__;
}
break;
}
}catch (e18023){if((e18023 instanceof Object))
{var ex__13526__auto__ = e18023;var statearr_18024_18452 = state_17996;(statearr_18024_18452[5] = ex__13526__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17996);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18023;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13524__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18453 = state_17996;
state_17996 = G__18453;
continue;
}
} else
{return ret_value__13524__auto__;
}
break;
}
});
state_machine__13523__auto__ = function(state_17996){
switch(arguments.length){
case 0:
return state_machine__13523__auto____0.call(this);
case 1:
return state_machine__13523__auto____1.call(this,state_17996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13523__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13523__auto____0;
state_machine__13523__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13523__auto____1;
return state_machine__13523__auto__;
})()
;})(switch__13522__auto__,c__13592__auto___18437,out))
})();var state__13594__auto__ = (function (){var statearr_18025 = f__13593__auto__.call(null);(statearr_18025[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13592__auto___18437);
return statearr_18025;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13594__auto__);
});})(c__13592__auto___18437,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13592__auto___18454 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13592__auto___18454,out){
return (function (){var f__13593__auto__ = (function (){var switch__13522__auto__ = ((function (c__13592__auto___18454,out){
return (function (state_18138){var state_val_18139 = (state_18138[1]);if((state_val_18139 === 1))
{var inst_18097 = [];var inst_18098 = inst_18097;var inst_18099 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_18138__$1 = (function (){var statearr_18140 = state_18138;(statearr_18140[7] = inst_18099);
(statearr_18140[8] = inst_18098);
return statearr_18140;
})();var statearr_18141_18455 = state_18138__$1;(statearr_18141_18455[2] = null);
(statearr_18141_18455[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18139 === 2))
{var state_18138__$1 = state_18138;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18138__$1,4,ch);
} else
{if((state_val_18139 === 3))
{var inst_18136 = (state_18138[2]);var state_18138__$1 = state_18138;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18138__$1,inst_18136);
} else
{if((state_val_18139 === 4))
{var inst_18102 = (state_18138[9]);var inst_18102__$1 = (state_18138[2]);var inst_18103 = (inst_18102__$1 == null);var inst_18104 = cljs.core.not.call(null,inst_18103);var state_18138__$1 = (function (){var statearr_18142 = state_18138;(statearr_18142[9] = inst_18102__$1);
return statearr_18142;
})();if(inst_18104)
{var statearr_18143_18456 = state_18138__$1;(statearr_18143_18456[1] = 5);
} else
{var statearr_18144_18457 = state_18138__$1;(statearr_18144_18457[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18139 === 5))
{var inst_18099 = (state_18138[7]);var inst_18106 = (state_18138[10]);var inst_18102 = (state_18138[9]);var inst_18106__$1 = f.call(null,inst_18102);var inst_18107 = cljs.core._EQ_.call(null,inst_18106__$1,inst_18099);var inst_18108 = cljs.core.keyword_identical_QMARK_.call(null,inst_18099,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_18109 = (inst_18107) || (inst_18108);var state_18138__$1 = (function (){var statearr_18145 = state_18138;(statearr_18145[10] = inst_18106__$1);
return statearr_18145;
})();if(cljs.core.truth_(inst_18109))
{var statearr_18146_18458 = state_18138__$1;(statearr_18146_18458[1] = 8);
} else
{var statearr_18147_18459 = state_18138__$1;(statearr_18147_18459[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18139 === 6))
{var inst_18098 = (state_18138[8]);var inst_18123 = inst_18098.length;var inst_18124 = (inst_18123 > 0);var state_18138__$1 = state_18138;if(cljs.core.truth_(inst_18124))
{var statearr_18149_18460 = state_18138__$1;(statearr_18149_18460[1] = 12);
} else
{var statearr_18150_18461 = state_18138__$1;(statearr_18150_18461[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18139 === 7))
{var inst_18134 = (state_18138[2]);var state_18138__$1 = state_18138;var statearr_18151_18462 = state_18138__$1;(statearr_18151_18462[2] = inst_18134);
(statearr_18151_18462[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18139 === 8))
{var inst_18106 = (state_18138[10]);var inst_18098 = (state_18138[8]);var inst_18102 = (state_18138[9]);var inst_18111 = inst_18098.push(inst_18102);var tmp18148 = inst_18098;var inst_18098__$1 = tmp18148;var inst_18099 = inst_18106;var state_18138__$1 = (function (){var statearr_18152 = state_18138;(statearr_18152[7] = inst_18099);
(statearr_18152[8] = inst_18098__$1);
(statearr_18152[11] = inst_18111);
return statearr_18152;
})();var statearr_18153_18463 = state_18138__$1;(statearr_18153_18463[2] = null);
(statearr_18153_18463[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18139 === 9))
{var inst_18098 = (state_18138[8]);var inst_18114 = cljs.core.vec.call(null,inst_18098);var state_18138__$1 = state_18138;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18138__$1,11,out,inst_18114);
} else
{if((state_val_18139 === 10))
{var inst_18121 = (state_18138[2]);var state_18138__$1 = state_18138;var statearr_18154_18464 = state_18138__$1;(statearr_18154_18464[2] = inst_18121);
(statearr_18154_18464[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18139 === 11))
{var inst_18106 = (state_18138[10]);var inst_18102 = (state_18138[9]);var inst_18116 = (state_18138[2]);var inst_18117 = [];var inst_18118 = inst_18117.push(inst_18102);var inst_18098 = inst_18117;var inst_18099 = inst_18106;var state_18138__$1 = (function (){var statearr_18155 = state_18138;(statearr_18155[7] = inst_18099);
(statearr_18155[8] = inst_18098);
(statearr_18155[12] = inst_18118);
(statearr_18155[13] = inst_18116);
return statearr_18155;
})();var statearr_18156_18465 = state_18138__$1;(statearr_18156_18465[2] = null);
(statearr_18156_18465[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18139 === 12))
{var inst_18098 = (state_18138[8]);var inst_18126 = cljs.core.vec.call(null,inst_18098);var state_18138__$1 = state_18138;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18138__$1,15,out,inst_18126);
} else
{if((state_val_18139 === 13))
{var state_18138__$1 = state_18138;var statearr_18157_18466 = state_18138__$1;(statearr_18157_18466[2] = null);
(statearr_18157_18466[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18139 === 14))
{var inst_18131 = (state_18138[2]);var inst_18132 = cljs.core.async.close_BANG_.call(null,out);var state_18138__$1 = (function (){var statearr_18158 = state_18138;(statearr_18158[14] = inst_18131);
return statearr_18158;
})();var statearr_18159_18467 = state_18138__$1;(statearr_18159_18467[2] = inst_18132);
(statearr_18159_18467[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18139 === 15))
{var inst_18128 = (state_18138[2]);var state_18138__$1 = state_18138;var statearr_18160_18468 = state_18138__$1;(statearr_18160_18468[2] = inst_18128);
(statearr_18160_18468[1] = 14);
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
});})(c__13592__auto___18454,out))
;return ((function (switch__13522__auto__,c__13592__auto___18454,out){
return (function() {
var state_machine__13523__auto__ = null;
var state_machine__13523__auto____0 = (function (){var statearr_18164 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18164[0] = state_machine__13523__auto__);
(statearr_18164[1] = 1);
return statearr_18164;
});
var state_machine__13523__auto____1 = (function (state_18138){while(true){
var ret_value__13524__auto__ = (function (){try{while(true){
var result__13525__auto__ = switch__13522__auto__.call(null,state_18138);if(cljs.core.keyword_identical_QMARK_.call(null,result__13525__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13525__auto__;
}
break;
}
}catch (e18165){if((e18165 instanceof Object))
{var ex__13526__auto__ = e18165;var statearr_18166_18469 = state_18138;(statearr_18166_18469[5] = ex__13526__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18138);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18165;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13524__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18470 = state_18138;
state_18138 = G__18470;
continue;
}
} else
{return ret_value__13524__auto__;
}
break;
}
});
state_machine__13523__auto__ = function(state_18138){
switch(arguments.length){
case 0:
return state_machine__13523__auto____0.call(this);
case 1:
return state_machine__13523__auto____1.call(this,state_18138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13523__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13523__auto____0;
state_machine__13523__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13523__auto____1;
return state_machine__13523__auto__;
})()
;})(switch__13522__auto__,c__13592__auto___18454,out))
})();var state__13594__auto__ = (function (){var statearr_18167 = f__13593__auto__.call(null);(statearr_18167[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13592__auto___18454);
return statearr_18167;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13594__auto__);
});})(c__13592__auto___18454,out))
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
{var o = (function (){var obj11773 = {};return obj11773;
})();var seq__11774_11787 = cljs.core.seq.call(null,obj);var chunk__11775_11788 = null;var count__11776_11789 = 0;var i__11777_11790 = 0;while(true){
if((i__11777_11790 < count__11776_11789))
{var vec__11778_11791 = cljs.core._nth.call(null,chunk__11775_11788,i__11777_11790);var k_11792 = cljs.core.nth.call(null,vec__11778_11791,0,null);var v_11793 = cljs.core.nth.call(null,vec__11778_11791,1,null);(o[cljs.core.name.call(null,k_11792)] = js_props.call(null,v_11793));
{
var G__11794 = seq__11774_11787;
var G__11795 = chunk__11775_11788;
var G__11796 = count__11776_11789;
var G__11797 = (i__11777_11790 + 1);
seq__11774_11787 = G__11794;
chunk__11775_11788 = G__11795;
count__11776_11789 = G__11796;
i__11777_11790 = G__11797;
continue;
}
} else
{var temp__4092__auto___11798 = cljs.core.seq.call(null,seq__11774_11787);if(temp__4092__auto___11798)
{var seq__11774_11799__$1 = temp__4092__auto___11798;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11774_11799__$1))
{var c__5632__auto___11800 = cljs.core.chunk_first.call(null,seq__11774_11799__$1);{
var G__11801 = cljs.core.chunk_rest.call(null,seq__11774_11799__$1);
var G__11802 = c__5632__auto___11800;
var G__11803 = cljs.core.count.call(null,c__5632__auto___11800);
var G__11804 = 0;
seq__11774_11787 = G__11801;
chunk__11775_11788 = G__11802;
count__11776_11789 = G__11803;
i__11777_11790 = G__11804;
continue;
}
} else
{var vec__11779_11805 = cljs.core.first.call(null,seq__11774_11799__$1);var k_11806 = cljs.core.nth.call(null,vec__11779_11805,0,null);var v_11807 = cljs.core.nth.call(null,vec__11779_11805,1,null);(o[cljs.core.name.call(null,k_11806)] = js_props.call(null,v_11807));
{
var G__11808 = cljs.core.next.call(null,seq__11774_11799__$1);
var G__11809 = null;
var G__11810 = 0;
var G__11811 = 0;
seq__11774_11787 = G__11808;
chunk__11775_11788 = G__11809;
count__11776_11789 = G__11810;
i__11777_11790 = G__11811;
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
quiescent.component = (function component(renderer){var react_component = React.createClass({"render": (function (){var this$ = this;var _STAR_component_STAR_11781 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return cljs.core.apply.call(null,renderer,(this$.props["value"]),(this$.props["statics"]));
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11781;
}}), "shouldComponentUpdate": (function (next_props,_){var this$ = this;return cljs.core.not_EQ_.call(null,(this$.props["value"]),(next_props["value"]));
})});return ((function (react_component){
return (function() { 
var G__11812__delegate = function (value,static_args){return react_component.call(null,{"statics": static_args, "value": value});
};
var G__11812 = function (value,var_args){
var static_args = null;if (arguments.length > 1) {
  static_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__11812__delegate.call(this,value,static_args);};
G__11812.cljs$lang$maxFixedArity = 1;
G__11812.cljs$lang$applyTo = (function (arglist__11813){
var value = cljs.core.first(arglist__11813);
var static_args = cljs.core.rest(arglist__11813);
return G__11812__delegate(value,static_args);
});
G__11812.cljs$core$IFn$_invoke$arity$variadic = G__11812__delegate;
return G__11812;
})()
;
;})(react_component))
});
/**
* Wrapper component used to mix-in lifecycle access
*/
quiescent.WrapperComponent = React.createClass({"componentWillUnmount": (function (){var this$ = this;var temp__4092__auto__ = (this$.props["onWillUnmount"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_11786 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null);
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11786;
}} else
{return null;
}
}), "componentWillUpdate": (function (_,___$1){var this$ = this;var temp__4092__auto__ = (this$.props["onWillUpdate"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_11785 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null);
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11785;
}} else
{return null;
}
}), "componentWillMount": (function (){var this$ = this;var temp__4092__auto__ = (this$.props["onWillMount"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_11784 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null);
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11784;
}} else
{return null;
}
}), "componentDidMount": (function (){var this$ = this;var temp__4092__auto__ = (this$.props["onMount"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_11783 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null,this$.getDOMNode());
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11783;
}} else
{return null;
}
}), "componentDidUpdate": (function (prev_props,prev_state){var this$ = this;var temp__4092__auto__ = (this$.props["onUpdate"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_11782 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null,this$.getDOMNode());
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11782;
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
var wrapper__delegate = function (child,kvs){var props = quiescent.js_props.call(null,cljs.core.apply.call(null,cljs.core.array_map,new cljs.core.Keyword(null,"wrappee","wrappee",2609412088),child,kvs));var temp__4092__auto___11814 = (child.props["key"]);if(cljs.core.truth_(temp__4092__auto___11814))
{var key_11815 = temp__4092__auto___11814;(props["key"] = key_11815);
} else
{}
return quiescent.WrapperComponent.call(null,props);
};
var wrapper = function (child,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrapper__delegate.call(this,child,kvs);};
wrapper.cljs$lang$maxFixedArity = 1;
wrapper.cljs$lang$applyTo = (function (arglist__11816){
var child = cljs.core.first(arglist__11816);
var kvs = cljs.core.rest(arglist__11816);
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
var a__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8198_9146 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8199_9147 = null;var count__8200_9148 = 0;var i__8201_9149 = 0;while(true){
if((i__8201_9149 < count__8200_9148))
{var arg__7198__auto___9150 = cljs.core._nth.call(null,chunk__8199_9147,i__8201_9149);a__7197__auto__.push(arg__7198__auto___9150);
{
var G__9151 = seq__8198_9146;
var G__9152 = chunk__8199_9147;
var G__9153 = count__8200_9148;
var G__9154 = (i__8201_9149 + 1);
seq__8198_9146 = G__9151;
chunk__8199_9147 = G__9152;
count__8200_9148 = G__9153;
i__8201_9149 = G__9154;
continue;
}
} else
{var temp__4092__auto___9155 = cljs.core.seq.call(null,seq__8198_9146);if(temp__4092__auto___9155)
{var seq__8198_9156__$1 = temp__4092__auto___9155;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8198_9156__$1))
{var c__5632__auto___9157 = cljs.core.chunk_first.call(null,seq__8198_9156__$1);{
var G__9158 = cljs.core.chunk_rest.call(null,seq__8198_9156__$1);
var G__9159 = c__5632__auto___9157;
var G__9160 = cljs.core.count.call(null,c__5632__auto___9157);
var G__9161 = 0;
seq__8198_9146 = G__9158;
chunk__8199_9147 = G__9159;
count__8200_9148 = G__9160;
i__8201_9149 = G__9161;
continue;
}
} else
{var arg__7198__auto___9162 = cljs.core.first.call(null,seq__8198_9156__$1);a__7197__auto__.push(arg__7198__auto___9162);
{
var G__9163 = cljs.core.next.call(null,seq__8198_9156__$1);
var G__9164 = null;
var G__9165 = 0;
var G__9166 = 0;
seq__8198_9146 = G__9163;
chunk__8199_9147 = G__9164;
count__8200_9148 = G__9165;
i__8201_9149 = G__9166;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.a.apply(null,a__7197__auto__);
};
var a = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return a__delegate.call(this,args__7196__auto__);};
a.cljs$lang$maxFixedArity = 0;
a.cljs$lang$applyTo = (function (arglist__9167){
var args__7196__auto__ = cljs.core.seq(arglist__9167);
return a__delegate(args__7196__auto__);
});
a.cljs$core$IFn$_invoke$arity$variadic = a__delegate;
return a;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.abbr = (function() { 
var abbr__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8206_9168 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8207_9169 = null;var count__8208_9170 = 0;var i__8209_9171 = 0;while(true){
if((i__8209_9171 < count__8208_9170))
{var arg__7198__auto___9172 = cljs.core._nth.call(null,chunk__8207_9169,i__8209_9171);a__7197__auto__.push(arg__7198__auto___9172);
{
var G__9173 = seq__8206_9168;
var G__9174 = chunk__8207_9169;
var G__9175 = count__8208_9170;
var G__9176 = (i__8209_9171 + 1);
seq__8206_9168 = G__9173;
chunk__8207_9169 = G__9174;
count__8208_9170 = G__9175;
i__8209_9171 = G__9176;
continue;
}
} else
{var temp__4092__auto___9177 = cljs.core.seq.call(null,seq__8206_9168);if(temp__4092__auto___9177)
{var seq__8206_9178__$1 = temp__4092__auto___9177;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8206_9178__$1))
{var c__5632__auto___9179 = cljs.core.chunk_first.call(null,seq__8206_9178__$1);{
var G__9180 = cljs.core.chunk_rest.call(null,seq__8206_9178__$1);
var G__9181 = c__5632__auto___9179;
var G__9182 = cljs.core.count.call(null,c__5632__auto___9179);
var G__9183 = 0;
seq__8206_9168 = G__9180;
chunk__8207_9169 = G__9181;
count__8208_9170 = G__9182;
i__8209_9171 = G__9183;
continue;
}
} else
{var arg__7198__auto___9184 = cljs.core.first.call(null,seq__8206_9178__$1);a__7197__auto__.push(arg__7198__auto___9184);
{
var G__9185 = cljs.core.next.call(null,seq__8206_9178__$1);
var G__9186 = null;
var G__9187 = 0;
var G__9188 = 0;
seq__8206_9168 = G__9185;
chunk__8207_9169 = G__9186;
count__8208_9170 = G__9187;
i__8209_9171 = G__9188;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.abbr.apply(null,a__7197__auto__);
};
var abbr = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return abbr__delegate.call(this,args__7196__auto__);};
abbr.cljs$lang$maxFixedArity = 0;
abbr.cljs$lang$applyTo = (function (arglist__9189){
var args__7196__auto__ = cljs.core.seq(arglist__9189);
return abbr__delegate(args__7196__auto__);
});
abbr.cljs$core$IFn$_invoke$arity$variadic = abbr__delegate;
return abbr;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.address = (function() { 
var address__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8214_9190 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8215_9191 = null;var count__8216_9192 = 0;var i__8217_9193 = 0;while(true){
if((i__8217_9193 < count__8216_9192))
{var arg__7198__auto___9194 = cljs.core._nth.call(null,chunk__8215_9191,i__8217_9193);a__7197__auto__.push(arg__7198__auto___9194);
{
var G__9195 = seq__8214_9190;
var G__9196 = chunk__8215_9191;
var G__9197 = count__8216_9192;
var G__9198 = (i__8217_9193 + 1);
seq__8214_9190 = G__9195;
chunk__8215_9191 = G__9196;
count__8216_9192 = G__9197;
i__8217_9193 = G__9198;
continue;
}
} else
{var temp__4092__auto___9199 = cljs.core.seq.call(null,seq__8214_9190);if(temp__4092__auto___9199)
{var seq__8214_9200__$1 = temp__4092__auto___9199;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8214_9200__$1))
{var c__5632__auto___9201 = cljs.core.chunk_first.call(null,seq__8214_9200__$1);{
var G__9202 = cljs.core.chunk_rest.call(null,seq__8214_9200__$1);
var G__9203 = c__5632__auto___9201;
var G__9204 = cljs.core.count.call(null,c__5632__auto___9201);
var G__9205 = 0;
seq__8214_9190 = G__9202;
chunk__8215_9191 = G__9203;
count__8216_9192 = G__9204;
i__8217_9193 = G__9205;
continue;
}
} else
{var arg__7198__auto___9206 = cljs.core.first.call(null,seq__8214_9200__$1);a__7197__auto__.push(arg__7198__auto___9206);
{
var G__9207 = cljs.core.next.call(null,seq__8214_9200__$1);
var G__9208 = null;
var G__9209 = 0;
var G__9210 = 0;
seq__8214_9190 = G__9207;
chunk__8215_9191 = G__9208;
count__8216_9192 = G__9209;
i__8217_9193 = G__9210;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.address.apply(null,a__7197__auto__);
};
var address = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return address__delegate.call(this,args__7196__auto__);};
address.cljs$lang$maxFixedArity = 0;
address.cljs$lang$applyTo = (function (arglist__9211){
var args__7196__auto__ = cljs.core.seq(arglist__9211);
return address__delegate(args__7196__auto__);
});
address.cljs$core$IFn$_invoke$arity$variadic = address__delegate;
return address;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.area = (function() { 
var area__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8222_9212 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8223_9213 = null;var count__8224_9214 = 0;var i__8225_9215 = 0;while(true){
if((i__8225_9215 < count__8224_9214))
{var arg__7198__auto___9216 = cljs.core._nth.call(null,chunk__8223_9213,i__8225_9215);a__7197__auto__.push(arg__7198__auto___9216);
{
var G__9217 = seq__8222_9212;
var G__9218 = chunk__8223_9213;
var G__9219 = count__8224_9214;
var G__9220 = (i__8225_9215 + 1);
seq__8222_9212 = G__9217;
chunk__8223_9213 = G__9218;
count__8224_9214 = G__9219;
i__8225_9215 = G__9220;
continue;
}
} else
{var temp__4092__auto___9221 = cljs.core.seq.call(null,seq__8222_9212);if(temp__4092__auto___9221)
{var seq__8222_9222__$1 = temp__4092__auto___9221;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8222_9222__$1))
{var c__5632__auto___9223 = cljs.core.chunk_first.call(null,seq__8222_9222__$1);{
var G__9224 = cljs.core.chunk_rest.call(null,seq__8222_9222__$1);
var G__9225 = c__5632__auto___9223;
var G__9226 = cljs.core.count.call(null,c__5632__auto___9223);
var G__9227 = 0;
seq__8222_9212 = G__9224;
chunk__8223_9213 = G__9225;
count__8224_9214 = G__9226;
i__8225_9215 = G__9227;
continue;
}
} else
{var arg__7198__auto___9228 = cljs.core.first.call(null,seq__8222_9222__$1);a__7197__auto__.push(arg__7198__auto___9228);
{
var G__9229 = cljs.core.next.call(null,seq__8222_9222__$1);
var G__9230 = null;
var G__9231 = 0;
var G__9232 = 0;
seq__8222_9212 = G__9229;
chunk__8223_9213 = G__9230;
count__8224_9214 = G__9231;
i__8225_9215 = G__9232;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.area.apply(null,a__7197__auto__);
};
var area = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return area__delegate.call(this,args__7196__auto__);};
area.cljs$lang$maxFixedArity = 0;
area.cljs$lang$applyTo = (function (arglist__9233){
var args__7196__auto__ = cljs.core.seq(arglist__9233);
return area__delegate(args__7196__auto__);
});
area.cljs$core$IFn$_invoke$arity$variadic = area__delegate;
return area;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.article = (function() { 
var article__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8230_9234 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8231_9235 = null;var count__8232_9236 = 0;var i__8233_9237 = 0;while(true){
if((i__8233_9237 < count__8232_9236))
{var arg__7198__auto___9238 = cljs.core._nth.call(null,chunk__8231_9235,i__8233_9237);a__7197__auto__.push(arg__7198__auto___9238);
{
var G__9239 = seq__8230_9234;
var G__9240 = chunk__8231_9235;
var G__9241 = count__8232_9236;
var G__9242 = (i__8233_9237 + 1);
seq__8230_9234 = G__9239;
chunk__8231_9235 = G__9240;
count__8232_9236 = G__9241;
i__8233_9237 = G__9242;
continue;
}
} else
{var temp__4092__auto___9243 = cljs.core.seq.call(null,seq__8230_9234);if(temp__4092__auto___9243)
{var seq__8230_9244__$1 = temp__4092__auto___9243;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8230_9244__$1))
{var c__5632__auto___9245 = cljs.core.chunk_first.call(null,seq__8230_9244__$1);{
var G__9246 = cljs.core.chunk_rest.call(null,seq__8230_9244__$1);
var G__9247 = c__5632__auto___9245;
var G__9248 = cljs.core.count.call(null,c__5632__auto___9245);
var G__9249 = 0;
seq__8230_9234 = G__9246;
chunk__8231_9235 = G__9247;
count__8232_9236 = G__9248;
i__8233_9237 = G__9249;
continue;
}
} else
{var arg__7198__auto___9250 = cljs.core.first.call(null,seq__8230_9244__$1);a__7197__auto__.push(arg__7198__auto___9250);
{
var G__9251 = cljs.core.next.call(null,seq__8230_9244__$1);
var G__9252 = null;
var G__9253 = 0;
var G__9254 = 0;
seq__8230_9234 = G__9251;
chunk__8231_9235 = G__9252;
count__8232_9236 = G__9253;
i__8233_9237 = G__9254;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.article.apply(null,a__7197__auto__);
};
var article = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return article__delegate.call(this,args__7196__auto__);};
article.cljs$lang$maxFixedArity = 0;
article.cljs$lang$applyTo = (function (arglist__9255){
var args__7196__auto__ = cljs.core.seq(arglist__9255);
return article__delegate(args__7196__auto__);
});
article.cljs$core$IFn$_invoke$arity$variadic = article__delegate;
return article;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.aside = (function() { 
var aside__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8238_9256 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8239_9257 = null;var count__8240_9258 = 0;var i__8241_9259 = 0;while(true){
if((i__8241_9259 < count__8240_9258))
{var arg__7198__auto___9260 = cljs.core._nth.call(null,chunk__8239_9257,i__8241_9259);a__7197__auto__.push(arg__7198__auto___9260);
{
var G__9261 = seq__8238_9256;
var G__9262 = chunk__8239_9257;
var G__9263 = count__8240_9258;
var G__9264 = (i__8241_9259 + 1);
seq__8238_9256 = G__9261;
chunk__8239_9257 = G__9262;
count__8240_9258 = G__9263;
i__8241_9259 = G__9264;
continue;
}
} else
{var temp__4092__auto___9265 = cljs.core.seq.call(null,seq__8238_9256);if(temp__4092__auto___9265)
{var seq__8238_9266__$1 = temp__4092__auto___9265;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8238_9266__$1))
{var c__5632__auto___9267 = cljs.core.chunk_first.call(null,seq__8238_9266__$1);{
var G__9268 = cljs.core.chunk_rest.call(null,seq__8238_9266__$1);
var G__9269 = c__5632__auto___9267;
var G__9270 = cljs.core.count.call(null,c__5632__auto___9267);
var G__9271 = 0;
seq__8238_9256 = G__9268;
chunk__8239_9257 = G__9269;
count__8240_9258 = G__9270;
i__8241_9259 = G__9271;
continue;
}
} else
{var arg__7198__auto___9272 = cljs.core.first.call(null,seq__8238_9266__$1);a__7197__auto__.push(arg__7198__auto___9272);
{
var G__9273 = cljs.core.next.call(null,seq__8238_9266__$1);
var G__9274 = null;
var G__9275 = 0;
var G__9276 = 0;
seq__8238_9256 = G__9273;
chunk__8239_9257 = G__9274;
count__8240_9258 = G__9275;
i__8241_9259 = G__9276;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.aside.apply(null,a__7197__auto__);
};
var aside = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return aside__delegate.call(this,args__7196__auto__);};
aside.cljs$lang$maxFixedArity = 0;
aside.cljs$lang$applyTo = (function (arglist__9277){
var args__7196__auto__ = cljs.core.seq(arglist__9277);
return aside__delegate(args__7196__auto__);
});
aside.cljs$core$IFn$_invoke$arity$variadic = aside__delegate;
return aside;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.audio = (function() { 
var audio__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8246_9278 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8247_9279 = null;var count__8248_9280 = 0;var i__8249_9281 = 0;while(true){
if((i__8249_9281 < count__8248_9280))
{var arg__7198__auto___9282 = cljs.core._nth.call(null,chunk__8247_9279,i__8249_9281);a__7197__auto__.push(arg__7198__auto___9282);
{
var G__9283 = seq__8246_9278;
var G__9284 = chunk__8247_9279;
var G__9285 = count__8248_9280;
var G__9286 = (i__8249_9281 + 1);
seq__8246_9278 = G__9283;
chunk__8247_9279 = G__9284;
count__8248_9280 = G__9285;
i__8249_9281 = G__9286;
continue;
}
} else
{var temp__4092__auto___9287 = cljs.core.seq.call(null,seq__8246_9278);if(temp__4092__auto___9287)
{var seq__8246_9288__$1 = temp__4092__auto___9287;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8246_9288__$1))
{var c__5632__auto___9289 = cljs.core.chunk_first.call(null,seq__8246_9288__$1);{
var G__9290 = cljs.core.chunk_rest.call(null,seq__8246_9288__$1);
var G__9291 = c__5632__auto___9289;
var G__9292 = cljs.core.count.call(null,c__5632__auto___9289);
var G__9293 = 0;
seq__8246_9278 = G__9290;
chunk__8247_9279 = G__9291;
count__8248_9280 = G__9292;
i__8249_9281 = G__9293;
continue;
}
} else
{var arg__7198__auto___9294 = cljs.core.first.call(null,seq__8246_9288__$1);a__7197__auto__.push(arg__7198__auto___9294);
{
var G__9295 = cljs.core.next.call(null,seq__8246_9288__$1);
var G__9296 = null;
var G__9297 = 0;
var G__9298 = 0;
seq__8246_9278 = G__9295;
chunk__8247_9279 = G__9296;
count__8248_9280 = G__9297;
i__8249_9281 = G__9298;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.audio.apply(null,a__7197__auto__);
};
var audio = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return audio__delegate.call(this,args__7196__auto__);};
audio.cljs$lang$maxFixedArity = 0;
audio.cljs$lang$applyTo = (function (arglist__9299){
var args__7196__auto__ = cljs.core.seq(arglist__9299);
return audio__delegate(args__7196__auto__);
});
audio.cljs$core$IFn$_invoke$arity$variadic = audio__delegate;
return audio;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.b = (function() { 
var b__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8254_9300 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8255_9301 = null;var count__8256_9302 = 0;var i__8257_9303 = 0;while(true){
if((i__8257_9303 < count__8256_9302))
{var arg__7198__auto___9304 = cljs.core._nth.call(null,chunk__8255_9301,i__8257_9303);a__7197__auto__.push(arg__7198__auto___9304);
{
var G__9305 = seq__8254_9300;
var G__9306 = chunk__8255_9301;
var G__9307 = count__8256_9302;
var G__9308 = (i__8257_9303 + 1);
seq__8254_9300 = G__9305;
chunk__8255_9301 = G__9306;
count__8256_9302 = G__9307;
i__8257_9303 = G__9308;
continue;
}
} else
{var temp__4092__auto___9309 = cljs.core.seq.call(null,seq__8254_9300);if(temp__4092__auto___9309)
{var seq__8254_9310__$1 = temp__4092__auto___9309;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8254_9310__$1))
{var c__5632__auto___9311 = cljs.core.chunk_first.call(null,seq__8254_9310__$1);{
var G__9312 = cljs.core.chunk_rest.call(null,seq__8254_9310__$1);
var G__9313 = c__5632__auto___9311;
var G__9314 = cljs.core.count.call(null,c__5632__auto___9311);
var G__9315 = 0;
seq__8254_9300 = G__9312;
chunk__8255_9301 = G__9313;
count__8256_9302 = G__9314;
i__8257_9303 = G__9315;
continue;
}
} else
{var arg__7198__auto___9316 = cljs.core.first.call(null,seq__8254_9310__$1);a__7197__auto__.push(arg__7198__auto___9316);
{
var G__9317 = cljs.core.next.call(null,seq__8254_9310__$1);
var G__9318 = null;
var G__9319 = 0;
var G__9320 = 0;
seq__8254_9300 = G__9317;
chunk__8255_9301 = G__9318;
count__8256_9302 = G__9319;
i__8257_9303 = G__9320;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.b.apply(null,a__7197__auto__);
};
var b = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return b__delegate.call(this,args__7196__auto__);};
b.cljs$lang$maxFixedArity = 0;
b.cljs$lang$applyTo = (function (arglist__9321){
var args__7196__auto__ = cljs.core.seq(arglist__9321);
return b__delegate(args__7196__auto__);
});
b.cljs$core$IFn$_invoke$arity$variadic = b__delegate;
return b;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.base = (function() { 
var base__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8262_9322 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8263_9323 = null;var count__8264_9324 = 0;var i__8265_9325 = 0;while(true){
if((i__8265_9325 < count__8264_9324))
{var arg__7198__auto___9326 = cljs.core._nth.call(null,chunk__8263_9323,i__8265_9325);a__7197__auto__.push(arg__7198__auto___9326);
{
var G__9327 = seq__8262_9322;
var G__9328 = chunk__8263_9323;
var G__9329 = count__8264_9324;
var G__9330 = (i__8265_9325 + 1);
seq__8262_9322 = G__9327;
chunk__8263_9323 = G__9328;
count__8264_9324 = G__9329;
i__8265_9325 = G__9330;
continue;
}
} else
{var temp__4092__auto___9331 = cljs.core.seq.call(null,seq__8262_9322);if(temp__4092__auto___9331)
{var seq__8262_9332__$1 = temp__4092__auto___9331;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8262_9332__$1))
{var c__5632__auto___9333 = cljs.core.chunk_first.call(null,seq__8262_9332__$1);{
var G__9334 = cljs.core.chunk_rest.call(null,seq__8262_9332__$1);
var G__9335 = c__5632__auto___9333;
var G__9336 = cljs.core.count.call(null,c__5632__auto___9333);
var G__9337 = 0;
seq__8262_9322 = G__9334;
chunk__8263_9323 = G__9335;
count__8264_9324 = G__9336;
i__8265_9325 = G__9337;
continue;
}
} else
{var arg__7198__auto___9338 = cljs.core.first.call(null,seq__8262_9332__$1);a__7197__auto__.push(arg__7198__auto___9338);
{
var G__9339 = cljs.core.next.call(null,seq__8262_9332__$1);
var G__9340 = null;
var G__9341 = 0;
var G__9342 = 0;
seq__8262_9322 = G__9339;
chunk__8263_9323 = G__9340;
count__8264_9324 = G__9341;
i__8265_9325 = G__9342;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.base.apply(null,a__7197__auto__);
};
var base = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return base__delegate.call(this,args__7196__auto__);};
base.cljs$lang$maxFixedArity = 0;
base.cljs$lang$applyTo = (function (arglist__9343){
var args__7196__auto__ = cljs.core.seq(arglist__9343);
return base__delegate(args__7196__auto__);
});
base.cljs$core$IFn$_invoke$arity$variadic = base__delegate;
return base;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.bdi = (function() { 
var bdi__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8270_9344 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8271_9345 = null;var count__8272_9346 = 0;var i__8273_9347 = 0;while(true){
if((i__8273_9347 < count__8272_9346))
{var arg__7198__auto___9348 = cljs.core._nth.call(null,chunk__8271_9345,i__8273_9347);a__7197__auto__.push(arg__7198__auto___9348);
{
var G__9349 = seq__8270_9344;
var G__9350 = chunk__8271_9345;
var G__9351 = count__8272_9346;
var G__9352 = (i__8273_9347 + 1);
seq__8270_9344 = G__9349;
chunk__8271_9345 = G__9350;
count__8272_9346 = G__9351;
i__8273_9347 = G__9352;
continue;
}
} else
{var temp__4092__auto___9353 = cljs.core.seq.call(null,seq__8270_9344);if(temp__4092__auto___9353)
{var seq__8270_9354__$1 = temp__4092__auto___9353;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8270_9354__$1))
{var c__5632__auto___9355 = cljs.core.chunk_first.call(null,seq__8270_9354__$1);{
var G__9356 = cljs.core.chunk_rest.call(null,seq__8270_9354__$1);
var G__9357 = c__5632__auto___9355;
var G__9358 = cljs.core.count.call(null,c__5632__auto___9355);
var G__9359 = 0;
seq__8270_9344 = G__9356;
chunk__8271_9345 = G__9357;
count__8272_9346 = G__9358;
i__8273_9347 = G__9359;
continue;
}
} else
{var arg__7198__auto___9360 = cljs.core.first.call(null,seq__8270_9354__$1);a__7197__auto__.push(arg__7198__auto___9360);
{
var G__9361 = cljs.core.next.call(null,seq__8270_9354__$1);
var G__9362 = null;
var G__9363 = 0;
var G__9364 = 0;
seq__8270_9344 = G__9361;
chunk__8271_9345 = G__9362;
count__8272_9346 = G__9363;
i__8273_9347 = G__9364;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.bdi.apply(null,a__7197__auto__);
};
var bdi = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return bdi__delegate.call(this,args__7196__auto__);};
bdi.cljs$lang$maxFixedArity = 0;
bdi.cljs$lang$applyTo = (function (arglist__9365){
var args__7196__auto__ = cljs.core.seq(arglist__9365);
return bdi__delegate(args__7196__auto__);
});
bdi.cljs$core$IFn$_invoke$arity$variadic = bdi__delegate;
return bdi;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.bdo = (function() { 
var bdo__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8278_9366 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8279_9367 = null;var count__8280_9368 = 0;var i__8281_9369 = 0;while(true){
if((i__8281_9369 < count__8280_9368))
{var arg__7198__auto___9370 = cljs.core._nth.call(null,chunk__8279_9367,i__8281_9369);a__7197__auto__.push(arg__7198__auto___9370);
{
var G__9371 = seq__8278_9366;
var G__9372 = chunk__8279_9367;
var G__9373 = count__8280_9368;
var G__9374 = (i__8281_9369 + 1);
seq__8278_9366 = G__9371;
chunk__8279_9367 = G__9372;
count__8280_9368 = G__9373;
i__8281_9369 = G__9374;
continue;
}
} else
{var temp__4092__auto___9375 = cljs.core.seq.call(null,seq__8278_9366);if(temp__4092__auto___9375)
{var seq__8278_9376__$1 = temp__4092__auto___9375;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8278_9376__$1))
{var c__5632__auto___9377 = cljs.core.chunk_first.call(null,seq__8278_9376__$1);{
var G__9378 = cljs.core.chunk_rest.call(null,seq__8278_9376__$1);
var G__9379 = c__5632__auto___9377;
var G__9380 = cljs.core.count.call(null,c__5632__auto___9377);
var G__9381 = 0;
seq__8278_9366 = G__9378;
chunk__8279_9367 = G__9379;
count__8280_9368 = G__9380;
i__8281_9369 = G__9381;
continue;
}
} else
{var arg__7198__auto___9382 = cljs.core.first.call(null,seq__8278_9376__$1);a__7197__auto__.push(arg__7198__auto___9382);
{
var G__9383 = cljs.core.next.call(null,seq__8278_9376__$1);
var G__9384 = null;
var G__9385 = 0;
var G__9386 = 0;
seq__8278_9366 = G__9383;
chunk__8279_9367 = G__9384;
count__8280_9368 = G__9385;
i__8281_9369 = G__9386;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.bdo.apply(null,a__7197__auto__);
};
var bdo = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return bdo__delegate.call(this,args__7196__auto__);};
bdo.cljs$lang$maxFixedArity = 0;
bdo.cljs$lang$applyTo = (function (arglist__9387){
var args__7196__auto__ = cljs.core.seq(arglist__9387);
return bdo__delegate(args__7196__auto__);
});
bdo.cljs$core$IFn$_invoke$arity$variadic = bdo__delegate;
return bdo;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.big = (function() { 
var big__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8286_9388 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8287_9389 = null;var count__8288_9390 = 0;var i__8289_9391 = 0;while(true){
if((i__8289_9391 < count__8288_9390))
{var arg__7198__auto___9392 = cljs.core._nth.call(null,chunk__8287_9389,i__8289_9391);a__7197__auto__.push(arg__7198__auto___9392);
{
var G__9393 = seq__8286_9388;
var G__9394 = chunk__8287_9389;
var G__9395 = count__8288_9390;
var G__9396 = (i__8289_9391 + 1);
seq__8286_9388 = G__9393;
chunk__8287_9389 = G__9394;
count__8288_9390 = G__9395;
i__8289_9391 = G__9396;
continue;
}
} else
{var temp__4092__auto___9397 = cljs.core.seq.call(null,seq__8286_9388);if(temp__4092__auto___9397)
{var seq__8286_9398__$1 = temp__4092__auto___9397;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8286_9398__$1))
{var c__5632__auto___9399 = cljs.core.chunk_first.call(null,seq__8286_9398__$1);{
var G__9400 = cljs.core.chunk_rest.call(null,seq__8286_9398__$1);
var G__9401 = c__5632__auto___9399;
var G__9402 = cljs.core.count.call(null,c__5632__auto___9399);
var G__9403 = 0;
seq__8286_9388 = G__9400;
chunk__8287_9389 = G__9401;
count__8288_9390 = G__9402;
i__8289_9391 = G__9403;
continue;
}
} else
{var arg__7198__auto___9404 = cljs.core.first.call(null,seq__8286_9398__$1);a__7197__auto__.push(arg__7198__auto___9404);
{
var G__9405 = cljs.core.next.call(null,seq__8286_9398__$1);
var G__9406 = null;
var G__9407 = 0;
var G__9408 = 0;
seq__8286_9388 = G__9405;
chunk__8287_9389 = G__9406;
count__8288_9390 = G__9407;
i__8289_9391 = G__9408;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.big.apply(null,a__7197__auto__);
};
var big = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return big__delegate.call(this,args__7196__auto__);};
big.cljs$lang$maxFixedArity = 0;
big.cljs$lang$applyTo = (function (arglist__9409){
var args__7196__auto__ = cljs.core.seq(arglist__9409);
return big__delegate(args__7196__auto__);
});
big.cljs$core$IFn$_invoke$arity$variadic = big__delegate;
return big;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.blockquote = (function() { 
var blockquote__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8294_9410 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8295_9411 = null;var count__8296_9412 = 0;var i__8297_9413 = 0;while(true){
if((i__8297_9413 < count__8296_9412))
{var arg__7198__auto___9414 = cljs.core._nth.call(null,chunk__8295_9411,i__8297_9413);a__7197__auto__.push(arg__7198__auto___9414);
{
var G__9415 = seq__8294_9410;
var G__9416 = chunk__8295_9411;
var G__9417 = count__8296_9412;
var G__9418 = (i__8297_9413 + 1);
seq__8294_9410 = G__9415;
chunk__8295_9411 = G__9416;
count__8296_9412 = G__9417;
i__8297_9413 = G__9418;
continue;
}
} else
{var temp__4092__auto___9419 = cljs.core.seq.call(null,seq__8294_9410);if(temp__4092__auto___9419)
{var seq__8294_9420__$1 = temp__4092__auto___9419;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8294_9420__$1))
{var c__5632__auto___9421 = cljs.core.chunk_first.call(null,seq__8294_9420__$1);{
var G__9422 = cljs.core.chunk_rest.call(null,seq__8294_9420__$1);
var G__9423 = c__5632__auto___9421;
var G__9424 = cljs.core.count.call(null,c__5632__auto___9421);
var G__9425 = 0;
seq__8294_9410 = G__9422;
chunk__8295_9411 = G__9423;
count__8296_9412 = G__9424;
i__8297_9413 = G__9425;
continue;
}
} else
{var arg__7198__auto___9426 = cljs.core.first.call(null,seq__8294_9420__$1);a__7197__auto__.push(arg__7198__auto___9426);
{
var G__9427 = cljs.core.next.call(null,seq__8294_9420__$1);
var G__9428 = null;
var G__9429 = 0;
var G__9430 = 0;
seq__8294_9410 = G__9427;
chunk__8295_9411 = G__9428;
count__8296_9412 = G__9429;
i__8297_9413 = G__9430;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.blockquote.apply(null,a__7197__auto__);
};
var blockquote = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return blockquote__delegate.call(this,args__7196__auto__);};
blockquote.cljs$lang$maxFixedArity = 0;
blockquote.cljs$lang$applyTo = (function (arglist__9431){
var args__7196__auto__ = cljs.core.seq(arglist__9431);
return blockquote__delegate(args__7196__auto__);
});
blockquote.cljs$core$IFn$_invoke$arity$variadic = blockquote__delegate;
return blockquote;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.body = (function() { 
var body__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8302_9432 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8303_9433 = null;var count__8304_9434 = 0;var i__8305_9435 = 0;while(true){
if((i__8305_9435 < count__8304_9434))
{var arg__7198__auto___9436 = cljs.core._nth.call(null,chunk__8303_9433,i__8305_9435);a__7197__auto__.push(arg__7198__auto___9436);
{
var G__9437 = seq__8302_9432;
var G__9438 = chunk__8303_9433;
var G__9439 = count__8304_9434;
var G__9440 = (i__8305_9435 + 1);
seq__8302_9432 = G__9437;
chunk__8303_9433 = G__9438;
count__8304_9434 = G__9439;
i__8305_9435 = G__9440;
continue;
}
} else
{var temp__4092__auto___9441 = cljs.core.seq.call(null,seq__8302_9432);if(temp__4092__auto___9441)
{var seq__8302_9442__$1 = temp__4092__auto___9441;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8302_9442__$1))
{var c__5632__auto___9443 = cljs.core.chunk_first.call(null,seq__8302_9442__$1);{
var G__9444 = cljs.core.chunk_rest.call(null,seq__8302_9442__$1);
var G__9445 = c__5632__auto___9443;
var G__9446 = cljs.core.count.call(null,c__5632__auto___9443);
var G__9447 = 0;
seq__8302_9432 = G__9444;
chunk__8303_9433 = G__9445;
count__8304_9434 = G__9446;
i__8305_9435 = G__9447;
continue;
}
} else
{var arg__7198__auto___9448 = cljs.core.first.call(null,seq__8302_9442__$1);a__7197__auto__.push(arg__7198__auto___9448);
{
var G__9449 = cljs.core.next.call(null,seq__8302_9442__$1);
var G__9450 = null;
var G__9451 = 0;
var G__9452 = 0;
seq__8302_9432 = G__9449;
chunk__8303_9433 = G__9450;
count__8304_9434 = G__9451;
i__8305_9435 = G__9452;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.body.apply(null,a__7197__auto__);
};
var body = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return body__delegate.call(this,args__7196__auto__);};
body.cljs$lang$maxFixedArity = 0;
body.cljs$lang$applyTo = (function (arglist__9453){
var args__7196__auto__ = cljs.core.seq(arglist__9453);
return body__delegate(args__7196__auto__);
});
body.cljs$core$IFn$_invoke$arity$variadic = body__delegate;
return body;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.br = (function() { 
var br__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8310_9454 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8311_9455 = null;var count__8312_9456 = 0;var i__8313_9457 = 0;while(true){
if((i__8313_9457 < count__8312_9456))
{var arg__7198__auto___9458 = cljs.core._nth.call(null,chunk__8311_9455,i__8313_9457);a__7197__auto__.push(arg__7198__auto___9458);
{
var G__9459 = seq__8310_9454;
var G__9460 = chunk__8311_9455;
var G__9461 = count__8312_9456;
var G__9462 = (i__8313_9457 + 1);
seq__8310_9454 = G__9459;
chunk__8311_9455 = G__9460;
count__8312_9456 = G__9461;
i__8313_9457 = G__9462;
continue;
}
} else
{var temp__4092__auto___9463 = cljs.core.seq.call(null,seq__8310_9454);if(temp__4092__auto___9463)
{var seq__8310_9464__$1 = temp__4092__auto___9463;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8310_9464__$1))
{var c__5632__auto___9465 = cljs.core.chunk_first.call(null,seq__8310_9464__$1);{
var G__9466 = cljs.core.chunk_rest.call(null,seq__8310_9464__$1);
var G__9467 = c__5632__auto___9465;
var G__9468 = cljs.core.count.call(null,c__5632__auto___9465);
var G__9469 = 0;
seq__8310_9454 = G__9466;
chunk__8311_9455 = G__9467;
count__8312_9456 = G__9468;
i__8313_9457 = G__9469;
continue;
}
} else
{var arg__7198__auto___9470 = cljs.core.first.call(null,seq__8310_9464__$1);a__7197__auto__.push(arg__7198__auto___9470);
{
var G__9471 = cljs.core.next.call(null,seq__8310_9464__$1);
var G__9472 = null;
var G__9473 = 0;
var G__9474 = 0;
seq__8310_9454 = G__9471;
chunk__8311_9455 = G__9472;
count__8312_9456 = G__9473;
i__8313_9457 = G__9474;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.br.apply(null,a__7197__auto__);
};
var br = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return br__delegate.call(this,args__7196__auto__);};
br.cljs$lang$maxFixedArity = 0;
br.cljs$lang$applyTo = (function (arglist__9475){
var args__7196__auto__ = cljs.core.seq(arglist__9475);
return br__delegate(args__7196__auto__);
});
br.cljs$core$IFn$_invoke$arity$variadic = br__delegate;
return br;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.button = (function() { 
var button__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8318_9476 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8319_9477 = null;var count__8320_9478 = 0;var i__8321_9479 = 0;while(true){
if((i__8321_9479 < count__8320_9478))
{var arg__7198__auto___9480 = cljs.core._nth.call(null,chunk__8319_9477,i__8321_9479);a__7197__auto__.push(arg__7198__auto___9480);
{
var G__9481 = seq__8318_9476;
var G__9482 = chunk__8319_9477;
var G__9483 = count__8320_9478;
var G__9484 = (i__8321_9479 + 1);
seq__8318_9476 = G__9481;
chunk__8319_9477 = G__9482;
count__8320_9478 = G__9483;
i__8321_9479 = G__9484;
continue;
}
} else
{var temp__4092__auto___9485 = cljs.core.seq.call(null,seq__8318_9476);if(temp__4092__auto___9485)
{var seq__8318_9486__$1 = temp__4092__auto___9485;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8318_9486__$1))
{var c__5632__auto___9487 = cljs.core.chunk_first.call(null,seq__8318_9486__$1);{
var G__9488 = cljs.core.chunk_rest.call(null,seq__8318_9486__$1);
var G__9489 = c__5632__auto___9487;
var G__9490 = cljs.core.count.call(null,c__5632__auto___9487);
var G__9491 = 0;
seq__8318_9476 = G__9488;
chunk__8319_9477 = G__9489;
count__8320_9478 = G__9490;
i__8321_9479 = G__9491;
continue;
}
} else
{var arg__7198__auto___9492 = cljs.core.first.call(null,seq__8318_9486__$1);a__7197__auto__.push(arg__7198__auto___9492);
{
var G__9493 = cljs.core.next.call(null,seq__8318_9486__$1);
var G__9494 = null;
var G__9495 = 0;
var G__9496 = 0;
seq__8318_9476 = G__9493;
chunk__8319_9477 = G__9494;
count__8320_9478 = G__9495;
i__8321_9479 = G__9496;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.button.apply(null,a__7197__auto__);
};
var button = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return button__delegate.call(this,args__7196__auto__);};
button.cljs$lang$maxFixedArity = 0;
button.cljs$lang$applyTo = (function (arglist__9497){
var args__7196__auto__ = cljs.core.seq(arglist__9497);
return button__delegate(args__7196__auto__);
});
button.cljs$core$IFn$_invoke$arity$variadic = button__delegate;
return button;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.canvas = (function() { 
var canvas__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8326_9498 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8327_9499 = null;var count__8328_9500 = 0;var i__8329_9501 = 0;while(true){
if((i__8329_9501 < count__8328_9500))
{var arg__7198__auto___9502 = cljs.core._nth.call(null,chunk__8327_9499,i__8329_9501);a__7197__auto__.push(arg__7198__auto___9502);
{
var G__9503 = seq__8326_9498;
var G__9504 = chunk__8327_9499;
var G__9505 = count__8328_9500;
var G__9506 = (i__8329_9501 + 1);
seq__8326_9498 = G__9503;
chunk__8327_9499 = G__9504;
count__8328_9500 = G__9505;
i__8329_9501 = G__9506;
continue;
}
} else
{var temp__4092__auto___9507 = cljs.core.seq.call(null,seq__8326_9498);if(temp__4092__auto___9507)
{var seq__8326_9508__$1 = temp__4092__auto___9507;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8326_9508__$1))
{var c__5632__auto___9509 = cljs.core.chunk_first.call(null,seq__8326_9508__$1);{
var G__9510 = cljs.core.chunk_rest.call(null,seq__8326_9508__$1);
var G__9511 = c__5632__auto___9509;
var G__9512 = cljs.core.count.call(null,c__5632__auto___9509);
var G__9513 = 0;
seq__8326_9498 = G__9510;
chunk__8327_9499 = G__9511;
count__8328_9500 = G__9512;
i__8329_9501 = G__9513;
continue;
}
} else
{var arg__7198__auto___9514 = cljs.core.first.call(null,seq__8326_9508__$1);a__7197__auto__.push(arg__7198__auto___9514);
{
var G__9515 = cljs.core.next.call(null,seq__8326_9508__$1);
var G__9516 = null;
var G__9517 = 0;
var G__9518 = 0;
seq__8326_9498 = G__9515;
chunk__8327_9499 = G__9516;
count__8328_9500 = G__9517;
i__8329_9501 = G__9518;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.canvas.apply(null,a__7197__auto__);
};
var canvas = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return canvas__delegate.call(this,args__7196__auto__);};
canvas.cljs$lang$maxFixedArity = 0;
canvas.cljs$lang$applyTo = (function (arglist__9519){
var args__7196__auto__ = cljs.core.seq(arglist__9519);
return canvas__delegate(args__7196__auto__);
});
canvas.cljs$core$IFn$_invoke$arity$variadic = canvas__delegate;
return canvas;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.caption = (function() { 
var caption__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8334_9520 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8335_9521 = null;var count__8336_9522 = 0;var i__8337_9523 = 0;while(true){
if((i__8337_9523 < count__8336_9522))
{var arg__7198__auto___9524 = cljs.core._nth.call(null,chunk__8335_9521,i__8337_9523);a__7197__auto__.push(arg__7198__auto___9524);
{
var G__9525 = seq__8334_9520;
var G__9526 = chunk__8335_9521;
var G__9527 = count__8336_9522;
var G__9528 = (i__8337_9523 + 1);
seq__8334_9520 = G__9525;
chunk__8335_9521 = G__9526;
count__8336_9522 = G__9527;
i__8337_9523 = G__9528;
continue;
}
} else
{var temp__4092__auto___9529 = cljs.core.seq.call(null,seq__8334_9520);if(temp__4092__auto___9529)
{var seq__8334_9530__$1 = temp__4092__auto___9529;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8334_9530__$1))
{var c__5632__auto___9531 = cljs.core.chunk_first.call(null,seq__8334_9530__$1);{
var G__9532 = cljs.core.chunk_rest.call(null,seq__8334_9530__$1);
var G__9533 = c__5632__auto___9531;
var G__9534 = cljs.core.count.call(null,c__5632__auto___9531);
var G__9535 = 0;
seq__8334_9520 = G__9532;
chunk__8335_9521 = G__9533;
count__8336_9522 = G__9534;
i__8337_9523 = G__9535;
continue;
}
} else
{var arg__7198__auto___9536 = cljs.core.first.call(null,seq__8334_9530__$1);a__7197__auto__.push(arg__7198__auto___9536);
{
var G__9537 = cljs.core.next.call(null,seq__8334_9530__$1);
var G__9538 = null;
var G__9539 = 0;
var G__9540 = 0;
seq__8334_9520 = G__9537;
chunk__8335_9521 = G__9538;
count__8336_9522 = G__9539;
i__8337_9523 = G__9540;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.caption.apply(null,a__7197__auto__);
};
var caption = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return caption__delegate.call(this,args__7196__auto__);};
caption.cljs$lang$maxFixedArity = 0;
caption.cljs$lang$applyTo = (function (arglist__9541){
var args__7196__auto__ = cljs.core.seq(arglist__9541);
return caption__delegate(args__7196__auto__);
});
caption.cljs$core$IFn$_invoke$arity$variadic = caption__delegate;
return caption;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.cite = (function() { 
var cite__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8342_9542 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8343_9543 = null;var count__8344_9544 = 0;var i__8345_9545 = 0;while(true){
if((i__8345_9545 < count__8344_9544))
{var arg__7198__auto___9546 = cljs.core._nth.call(null,chunk__8343_9543,i__8345_9545);a__7197__auto__.push(arg__7198__auto___9546);
{
var G__9547 = seq__8342_9542;
var G__9548 = chunk__8343_9543;
var G__9549 = count__8344_9544;
var G__9550 = (i__8345_9545 + 1);
seq__8342_9542 = G__9547;
chunk__8343_9543 = G__9548;
count__8344_9544 = G__9549;
i__8345_9545 = G__9550;
continue;
}
} else
{var temp__4092__auto___9551 = cljs.core.seq.call(null,seq__8342_9542);if(temp__4092__auto___9551)
{var seq__8342_9552__$1 = temp__4092__auto___9551;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8342_9552__$1))
{var c__5632__auto___9553 = cljs.core.chunk_first.call(null,seq__8342_9552__$1);{
var G__9554 = cljs.core.chunk_rest.call(null,seq__8342_9552__$1);
var G__9555 = c__5632__auto___9553;
var G__9556 = cljs.core.count.call(null,c__5632__auto___9553);
var G__9557 = 0;
seq__8342_9542 = G__9554;
chunk__8343_9543 = G__9555;
count__8344_9544 = G__9556;
i__8345_9545 = G__9557;
continue;
}
} else
{var arg__7198__auto___9558 = cljs.core.first.call(null,seq__8342_9552__$1);a__7197__auto__.push(arg__7198__auto___9558);
{
var G__9559 = cljs.core.next.call(null,seq__8342_9552__$1);
var G__9560 = null;
var G__9561 = 0;
var G__9562 = 0;
seq__8342_9542 = G__9559;
chunk__8343_9543 = G__9560;
count__8344_9544 = G__9561;
i__8345_9545 = G__9562;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.cite.apply(null,a__7197__auto__);
};
var cite = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return cite__delegate.call(this,args__7196__auto__);};
cite.cljs$lang$maxFixedArity = 0;
cite.cljs$lang$applyTo = (function (arglist__9563){
var args__7196__auto__ = cljs.core.seq(arglist__9563);
return cite__delegate(args__7196__auto__);
});
cite.cljs$core$IFn$_invoke$arity$variadic = cite__delegate;
return cite;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.code = (function() { 
var code__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8350_9564 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8351_9565 = null;var count__8352_9566 = 0;var i__8353_9567 = 0;while(true){
if((i__8353_9567 < count__8352_9566))
{var arg__7198__auto___9568 = cljs.core._nth.call(null,chunk__8351_9565,i__8353_9567);a__7197__auto__.push(arg__7198__auto___9568);
{
var G__9569 = seq__8350_9564;
var G__9570 = chunk__8351_9565;
var G__9571 = count__8352_9566;
var G__9572 = (i__8353_9567 + 1);
seq__8350_9564 = G__9569;
chunk__8351_9565 = G__9570;
count__8352_9566 = G__9571;
i__8353_9567 = G__9572;
continue;
}
} else
{var temp__4092__auto___9573 = cljs.core.seq.call(null,seq__8350_9564);if(temp__4092__auto___9573)
{var seq__8350_9574__$1 = temp__4092__auto___9573;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8350_9574__$1))
{var c__5632__auto___9575 = cljs.core.chunk_first.call(null,seq__8350_9574__$1);{
var G__9576 = cljs.core.chunk_rest.call(null,seq__8350_9574__$1);
var G__9577 = c__5632__auto___9575;
var G__9578 = cljs.core.count.call(null,c__5632__auto___9575);
var G__9579 = 0;
seq__8350_9564 = G__9576;
chunk__8351_9565 = G__9577;
count__8352_9566 = G__9578;
i__8353_9567 = G__9579;
continue;
}
} else
{var arg__7198__auto___9580 = cljs.core.first.call(null,seq__8350_9574__$1);a__7197__auto__.push(arg__7198__auto___9580);
{
var G__9581 = cljs.core.next.call(null,seq__8350_9574__$1);
var G__9582 = null;
var G__9583 = 0;
var G__9584 = 0;
seq__8350_9564 = G__9581;
chunk__8351_9565 = G__9582;
count__8352_9566 = G__9583;
i__8353_9567 = G__9584;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.code.apply(null,a__7197__auto__);
};
var code = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return code__delegate.call(this,args__7196__auto__);};
code.cljs$lang$maxFixedArity = 0;
code.cljs$lang$applyTo = (function (arglist__9585){
var args__7196__auto__ = cljs.core.seq(arglist__9585);
return code__delegate(args__7196__auto__);
});
code.cljs$core$IFn$_invoke$arity$variadic = code__delegate;
return code;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.col = (function() { 
var col__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8358_9586 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8359_9587 = null;var count__8360_9588 = 0;var i__8361_9589 = 0;while(true){
if((i__8361_9589 < count__8360_9588))
{var arg__7198__auto___9590 = cljs.core._nth.call(null,chunk__8359_9587,i__8361_9589);a__7197__auto__.push(arg__7198__auto___9590);
{
var G__9591 = seq__8358_9586;
var G__9592 = chunk__8359_9587;
var G__9593 = count__8360_9588;
var G__9594 = (i__8361_9589 + 1);
seq__8358_9586 = G__9591;
chunk__8359_9587 = G__9592;
count__8360_9588 = G__9593;
i__8361_9589 = G__9594;
continue;
}
} else
{var temp__4092__auto___9595 = cljs.core.seq.call(null,seq__8358_9586);if(temp__4092__auto___9595)
{var seq__8358_9596__$1 = temp__4092__auto___9595;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8358_9596__$1))
{var c__5632__auto___9597 = cljs.core.chunk_first.call(null,seq__8358_9596__$1);{
var G__9598 = cljs.core.chunk_rest.call(null,seq__8358_9596__$1);
var G__9599 = c__5632__auto___9597;
var G__9600 = cljs.core.count.call(null,c__5632__auto___9597);
var G__9601 = 0;
seq__8358_9586 = G__9598;
chunk__8359_9587 = G__9599;
count__8360_9588 = G__9600;
i__8361_9589 = G__9601;
continue;
}
} else
{var arg__7198__auto___9602 = cljs.core.first.call(null,seq__8358_9596__$1);a__7197__auto__.push(arg__7198__auto___9602);
{
var G__9603 = cljs.core.next.call(null,seq__8358_9596__$1);
var G__9604 = null;
var G__9605 = 0;
var G__9606 = 0;
seq__8358_9586 = G__9603;
chunk__8359_9587 = G__9604;
count__8360_9588 = G__9605;
i__8361_9589 = G__9606;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.col.apply(null,a__7197__auto__);
};
var col = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return col__delegate.call(this,args__7196__auto__);};
col.cljs$lang$maxFixedArity = 0;
col.cljs$lang$applyTo = (function (arglist__9607){
var args__7196__auto__ = cljs.core.seq(arglist__9607);
return col__delegate(args__7196__auto__);
});
col.cljs$core$IFn$_invoke$arity$variadic = col__delegate;
return col;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.colgroup = (function() { 
var colgroup__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8366_9608 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8367_9609 = null;var count__8368_9610 = 0;var i__8369_9611 = 0;while(true){
if((i__8369_9611 < count__8368_9610))
{var arg__7198__auto___9612 = cljs.core._nth.call(null,chunk__8367_9609,i__8369_9611);a__7197__auto__.push(arg__7198__auto___9612);
{
var G__9613 = seq__8366_9608;
var G__9614 = chunk__8367_9609;
var G__9615 = count__8368_9610;
var G__9616 = (i__8369_9611 + 1);
seq__8366_9608 = G__9613;
chunk__8367_9609 = G__9614;
count__8368_9610 = G__9615;
i__8369_9611 = G__9616;
continue;
}
} else
{var temp__4092__auto___9617 = cljs.core.seq.call(null,seq__8366_9608);if(temp__4092__auto___9617)
{var seq__8366_9618__$1 = temp__4092__auto___9617;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8366_9618__$1))
{var c__5632__auto___9619 = cljs.core.chunk_first.call(null,seq__8366_9618__$1);{
var G__9620 = cljs.core.chunk_rest.call(null,seq__8366_9618__$1);
var G__9621 = c__5632__auto___9619;
var G__9622 = cljs.core.count.call(null,c__5632__auto___9619);
var G__9623 = 0;
seq__8366_9608 = G__9620;
chunk__8367_9609 = G__9621;
count__8368_9610 = G__9622;
i__8369_9611 = G__9623;
continue;
}
} else
{var arg__7198__auto___9624 = cljs.core.first.call(null,seq__8366_9618__$1);a__7197__auto__.push(arg__7198__auto___9624);
{
var G__9625 = cljs.core.next.call(null,seq__8366_9618__$1);
var G__9626 = null;
var G__9627 = 0;
var G__9628 = 0;
seq__8366_9608 = G__9625;
chunk__8367_9609 = G__9626;
count__8368_9610 = G__9627;
i__8369_9611 = G__9628;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.colgroup.apply(null,a__7197__auto__);
};
var colgroup = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return colgroup__delegate.call(this,args__7196__auto__);};
colgroup.cljs$lang$maxFixedArity = 0;
colgroup.cljs$lang$applyTo = (function (arglist__9629){
var args__7196__auto__ = cljs.core.seq(arglist__9629);
return colgroup__delegate(args__7196__auto__);
});
colgroup.cljs$core$IFn$_invoke$arity$variadic = colgroup__delegate;
return colgroup;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.data = (function() { 
var data__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8374_9630 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8375_9631 = null;var count__8376_9632 = 0;var i__8377_9633 = 0;while(true){
if((i__8377_9633 < count__8376_9632))
{var arg__7198__auto___9634 = cljs.core._nth.call(null,chunk__8375_9631,i__8377_9633);a__7197__auto__.push(arg__7198__auto___9634);
{
var G__9635 = seq__8374_9630;
var G__9636 = chunk__8375_9631;
var G__9637 = count__8376_9632;
var G__9638 = (i__8377_9633 + 1);
seq__8374_9630 = G__9635;
chunk__8375_9631 = G__9636;
count__8376_9632 = G__9637;
i__8377_9633 = G__9638;
continue;
}
} else
{var temp__4092__auto___9639 = cljs.core.seq.call(null,seq__8374_9630);if(temp__4092__auto___9639)
{var seq__8374_9640__$1 = temp__4092__auto___9639;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8374_9640__$1))
{var c__5632__auto___9641 = cljs.core.chunk_first.call(null,seq__8374_9640__$1);{
var G__9642 = cljs.core.chunk_rest.call(null,seq__8374_9640__$1);
var G__9643 = c__5632__auto___9641;
var G__9644 = cljs.core.count.call(null,c__5632__auto___9641);
var G__9645 = 0;
seq__8374_9630 = G__9642;
chunk__8375_9631 = G__9643;
count__8376_9632 = G__9644;
i__8377_9633 = G__9645;
continue;
}
} else
{var arg__7198__auto___9646 = cljs.core.first.call(null,seq__8374_9640__$1);a__7197__auto__.push(arg__7198__auto___9646);
{
var G__9647 = cljs.core.next.call(null,seq__8374_9640__$1);
var G__9648 = null;
var G__9649 = 0;
var G__9650 = 0;
seq__8374_9630 = G__9647;
chunk__8375_9631 = G__9648;
count__8376_9632 = G__9649;
i__8377_9633 = G__9650;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.data.apply(null,a__7197__auto__);
};
var data = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return data__delegate.call(this,args__7196__auto__);};
data.cljs$lang$maxFixedArity = 0;
data.cljs$lang$applyTo = (function (arglist__9651){
var args__7196__auto__ = cljs.core.seq(arglist__9651);
return data__delegate(args__7196__auto__);
});
data.cljs$core$IFn$_invoke$arity$variadic = data__delegate;
return data;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.datalist = (function() { 
var datalist__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8382_9652 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8383_9653 = null;var count__8384_9654 = 0;var i__8385_9655 = 0;while(true){
if((i__8385_9655 < count__8384_9654))
{var arg__7198__auto___9656 = cljs.core._nth.call(null,chunk__8383_9653,i__8385_9655);a__7197__auto__.push(arg__7198__auto___9656);
{
var G__9657 = seq__8382_9652;
var G__9658 = chunk__8383_9653;
var G__9659 = count__8384_9654;
var G__9660 = (i__8385_9655 + 1);
seq__8382_9652 = G__9657;
chunk__8383_9653 = G__9658;
count__8384_9654 = G__9659;
i__8385_9655 = G__9660;
continue;
}
} else
{var temp__4092__auto___9661 = cljs.core.seq.call(null,seq__8382_9652);if(temp__4092__auto___9661)
{var seq__8382_9662__$1 = temp__4092__auto___9661;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8382_9662__$1))
{var c__5632__auto___9663 = cljs.core.chunk_first.call(null,seq__8382_9662__$1);{
var G__9664 = cljs.core.chunk_rest.call(null,seq__8382_9662__$1);
var G__9665 = c__5632__auto___9663;
var G__9666 = cljs.core.count.call(null,c__5632__auto___9663);
var G__9667 = 0;
seq__8382_9652 = G__9664;
chunk__8383_9653 = G__9665;
count__8384_9654 = G__9666;
i__8385_9655 = G__9667;
continue;
}
} else
{var arg__7198__auto___9668 = cljs.core.first.call(null,seq__8382_9662__$1);a__7197__auto__.push(arg__7198__auto___9668);
{
var G__9669 = cljs.core.next.call(null,seq__8382_9662__$1);
var G__9670 = null;
var G__9671 = 0;
var G__9672 = 0;
seq__8382_9652 = G__9669;
chunk__8383_9653 = G__9670;
count__8384_9654 = G__9671;
i__8385_9655 = G__9672;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.datalist.apply(null,a__7197__auto__);
};
var datalist = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return datalist__delegate.call(this,args__7196__auto__);};
datalist.cljs$lang$maxFixedArity = 0;
datalist.cljs$lang$applyTo = (function (arglist__9673){
var args__7196__auto__ = cljs.core.seq(arglist__9673);
return datalist__delegate(args__7196__auto__);
});
datalist.cljs$core$IFn$_invoke$arity$variadic = datalist__delegate;
return datalist;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.dd = (function() { 
var dd__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8390_9674 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8391_9675 = null;var count__8392_9676 = 0;var i__8393_9677 = 0;while(true){
if((i__8393_9677 < count__8392_9676))
{var arg__7198__auto___9678 = cljs.core._nth.call(null,chunk__8391_9675,i__8393_9677);a__7197__auto__.push(arg__7198__auto___9678);
{
var G__9679 = seq__8390_9674;
var G__9680 = chunk__8391_9675;
var G__9681 = count__8392_9676;
var G__9682 = (i__8393_9677 + 1);
seq__8390_9674 = G__9679;
chunk__8391_9675 = G__9680;
count__8392_9676 = G__9681;
i__8393_9677 = G__9682;
continue;
}
} else
{var temp__4092__auto___9683 = cljs.core.seq.call(null,seq__8390_9674);if(temp__4092__auto___9683)
{var seq__8390_9684__$1 = temp__4092__auto___9683;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8390_9684__$1))
{var c__5632__auto___9685 = cljs.core.chunk_first.call(null,seq__8390_9684__$1);{
var G__9686 = cljs.core.chunk_rest.call(null,seq__8390_9684__$1);
var G__9687 = c__5632__auto___9685;
var G__9688 = cljs.core.count.call(null,c__5632__auto___9685);
var G__9689 = 0;
seq__8390_9674 = G__9686;
chunk__8391_9675 = G__9687;
count__8392_9676 = G__9688;
i__8393_9677 = G__9689;
continue;
}
} else
{var arg__7198__auto___9690 = cljs.core.first.call(null,seq__8390_9684__$1);a__7197__auto__.push(arg__7198__auto___9690);
{
var G__9691 = cljs.core.next.call(null,seq__8390_9684__$1);
var G__9692 = null;
var G__9693 = 0;
var G__9694 = 0;
seq__8390_9674 = G__9691;
chunk__8391_9675 = G__9692;
count__8392_9676 = G__9693;
i__8393_9677 = G__9694;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.dd.apply(null,a__7197__auto__);
};
var dd = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return dd__delegate.call(this,args__7196__auto__);};
dd.cljs$lang$maxFixedArity = 0;
dd.cljs$lang$applyTo = (function (arglist__9695){
var args__7196__auto__ = cljs.core.seq(arglist__9695);
return dd__delegate(args__7196__auto__);
});
dd.cljs$core$IFn$_invoke$arity$variadic = dd__delegate;
return dd;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.del = (function() { 
var del__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8398_9696 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8399_9697 = null;var count__8400_9698 = 0;var i__8401_9699 = 0;while(true){
if((i__8401_9699 < count__8400_9698))
{var arg__7198__auto___9700 = cljs.core._nth.call(null,chunk__8399_9697,i__8401_9699);a__7197__auto__.push(arg__7198__auto___9700);
{
var G__9701 = seq__8398_9696;
var G__9702 = chunk__8399_9697;
var G__9703 = count__8400_9698;
var G__9704 = (i__8401_9699 + 1);
seq__8398_9696 = G__9701;
chunk__8399_9697 = G__9702;
count__8400_9698 = G__9703;
i__8401_9699 = G__9704;
continue;
}
} else
{var temp__4092__auto___9705 = cljs.core.seq.call(null,seq__8398_9696);if(temp__4092__auto___9705)
{var seq__8398_9706__$1 = temp__4092__auto___9705;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8398_9706__$1))
{var c__5632__auto___9707 = cljs.core.chunk_first.call(null,seq__8398_9706__$1);{
var G__9708 = cljs.core.chunk_rest.call(null,seq__8398_9706__$1);
var G__9709 = c__5632__auto___9707;
var G__9710 = cljs.core.count.call(null,c__5632__auto___9707);
var G__9711 = 0;
seq__8398_9696 = G__9708;
chunk__8399_9697 = G__9709;
count__8400_9698 = G__9710;
i__8401_9699 = G__9711;
continue;
}
} else
{var arg__7198__auto___9712 = cljs.core.first.call(null,seq__8398_9706__$1);a__7197__auto__.push(arg__7198__auto___9712);
{
var G__9713 = cljs.core.next.call(null,seq__8398_9706__$1);
var G__9714 = null;
var G__9715 = 0;
var G__9716 = 0;
seq__8398_9696 = G__9713;
chunk__8399_9697 = G__9714;
count__8400_9698 = G__9715;
i__8401_9699 = G__9716;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.del.apply(null,a__7197__auto__);
};
var del = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return del__delegate.call(this,args__7196__auto__);};
del.cljs$lang$maxFixedArity = 0;
del.cljs$lang$applyTo = (function (arglist__9717){
var args__7196__auto__ = cljs.core.seq(arglist__9717);
return del__delegate(args__7196__auto__);
});
del.cljs$core$IFn$_invoke$arity$variadic = del__delegate;
return del;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.details = (function() { 
var details__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8406_9718 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8407_9719 = null;var count__8408_9720 = 0;var i__8409_9721 = 0;while(true){
if((i__8409_9721 < count__8408_9720))
{var arg__7198__auto___9722 = cljs.core._nth.call(null,chunk__8407_9719,i__8409_9721);a__7197__auto__.push(arg__7198__auto___9722);
{
var G__9723 = seq__8406_9718;
var G__9724 = chunk__8407_9719;
var G__9725 = count__8408_9720;
var G__9726 = (i__8409_9721 + 1);
seq__8406_9718 = G__9723;
chunk__8407_9719 = G__9724;
count__8408_9720 = G__9725;
i__8409_9721 = G__9726;
continue;
}
} else
{var temp__4092__auto___9727 = cljs.core.seq.call(null,seq__8406_9718);if(temp__4092__auto___9727)
{var seq__8406_9728__$1 = temp__4092__auto___9727;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8406_9728__$1))
{var c__5632__auto___9729 = cljs.core.chunk_first.call(null,seq__8406_9728__$1);{
var G__9730 = cljs.core.chunk_rest.call(null,seq__8406_9728__$1);
var G__9731 = c__5632__auto___9729;
var G__9732 = cljs.core.count.call(null,c__5632__auto___9729);
var G__9733 = 0;
seq__8406_9718 = G__9730;
chunk__8407_9719 = G__9731;
count__8408_9720 = G__9732;
i__8409_9721 = G__9733;
continue;
}
} else
{var arg__7198__auto___9734 = cljs.core.first.call(null,seq__8406_9728__$1);a__7197__auto__.push(arg__7198__auto___9734);
{
var G__9735 = cljs.core.next.call(null,seq__8406_9728__$1);
var G__9736 = null;
var G__9737 = 0;
var G__9738 = 0;
seq__8406_9718 = G__9735;
chunk__8407_9719 = G__9736;
count__8408_9720 = G__9737;
i__8409_9721 = G__9738;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.details.apply(null,a__7197__auto__);
};
var details = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return details__delegate.call(this,args__7196__auto__);};
details.cljs$lang$maxFixedArity = 0;
details.cljs$lang$applyTo = (function (arglist__9739){
var args__7196__auto__ = cljs.core.seq(arglist__9739);
return details__delegate(args__7196__auto__);
});
details.cljs$core$IFn$_invoke$arity$variadic = details__delegate;
return details;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.dfn = (function() { 
var dfn__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8414_9740 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8415_9741 = null;var count__8416_9742 = 0;var i__8417_9743 = 0;while(true){
if((i__8417_9743 < count__8416_9742))
{var arg__7198__auto___9744 = cljs.core._nth.call(null,chunk__8415_9741,i__8417_9743);a__7197__auto__.push(arg__7198__auto___9744);
{
var G__9745 = seq__8414_9740;
var G__9746 = chunk__8415_9741;
var G__9747 = count__8416_9742;
var G__9748 = (i__8417_9743 + 1);
seq__8414_9740 = G__9745;
chunk__8415_9741 = G__9746;
count__8416_9742 = G__9747;
i__8417_9743 = G__9748;
continue;
}
} else
{var temp__4092__auto___9749 = cljs.core.seq.call(null,seq__8414_9740);if(temp__4092__auto___9749)
{var seq__8414_9750__$1 = temp__4092__auto___9749;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8414_9750__$1))
{var c__5632__auto___9751 = cljs.core.chunk_first.call(null,seq__8414_9750__$1);{
var G__9752 = cljs.core.chunk_rest.call(null,seq__8414_9750__$1);
var G__9753 = c__5632__auto___9751;
var G__9754 = cljs.core.count.call(null,c__5632__auto___9751);
var G__9755 = 0;
seq__8414_9740 = G__9752;
chunk__8415_9741 = G__9753;
count__8416_9742 = G__9754;
i__8417_9743 = G__9755;
continue;
}
} else
{var arg__7198__auto___9756 = cljs.core.first.call(null,seq__8414_9750__$1);a__7197__auto__.push(arg__7198__auto___9756);
{
var G__9757 = cljs.core.next.call(null,seq__8414_9750__$1);
var G__9758 = null;
var G__9759 = 0;
var G__9760 = 0;
seq__8414_9740 = G__9757;
chunk__8415_9741 = G__9758;
count__8416_9742 = G__9759;
i__8417_9743 = G__9760;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.dfn.apply(null,a__7197__auto__);
};
var dfn = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return dfn__delegate.call(this,args__7196__auto__);};
dfn.cljs$lang$maxFixedArity = 0;
dfn.cljs$lang$applyTo = (function (arglist__9761){
var args__7196__auto__ = cljs.core.seq(arglist__9761);
return dfn__delegate(args__7196__auto__);
});
dfn.cljs$core$IFn$_invoke$arity$variadic = dfn__delegate;
return dfn;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.div = (function() { 
var div__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8422_9762 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8423_9763 = null;var count__8424_9764 = 0;var i__8425_9765 = 0;while(true){
if((i__8425_9765 < count__8424_9764))
{var arg__7198__auto___9766 = cljs.core._nth.call(null,chunk__8423_9763,i__8425_9765);a__7197__auto__.push(arg__7198__auto___9766);
{
var G__9767 = seq__8422_9762;
var G__9768 = chunk__8423_9763;
var G__9769 = count__8424_9764;
var G__9770 = (i__8425_9765 + 1);
seq__8422_9762 = G__9767;
chunk__8423_9763 = G__9768;
count__8424_9764 = G__9769;
i__8425_9765 = G__9770;
continue;
}
} else
{var temp__4092__auto___9771 = cljs.core.seq.call(null,seq__8422_9762);if(temp__4092__auto___9771)
{var seq__8422_9772__$1 = temp__4092__auto___9771;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8422_9772__$1))
{var c__5632__auto___9773 = cljs.core.chunk_first.call(null,seq__8422_9772__$1);{
var G__9774 = cljs.core.chunk_rest.call(null,seq__8422_9772__$1);
var G__9775 = c__5632__auto___9773;
var G__9776 = cljs.core.count.call(null,c__5632__auto___9773);
var G__9777 = 0;
seq__8422_9762 = G__9774;
chunk__8423_9763 = G__9775;
count__8424_9764 = G__9776;
i__8425_9765 = G__9777;
continue;
}
} else
{var arg__7198__auto___9778 = cljs.core.first.call(null,seq__8422_9772__$1);a__7197__auto__.push(arg__7198__auto___9778);
{
var G__9779 = cljs.core.next.call(null,seq__8422_9772__$1);
var G__9780 = null;
var G__9781 = 0;
var G__9782 = 0;
seq__8422_9762 = G__9779;
chunk__8423_9763 = G__9780;
count__8424_9764 = G__9781;
i__8425_9765 = G__9782;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.div.apply(null,a__7197__auto__);
};
var div = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return div__delegate.call(this,args__7196__auto__);};
div.cljs$lang$maxFixedArity = 0;
div.cljs$lang$applyTo = (function (arglist__9783){
var args__7196__auto__ = cljs.core.seq(arglist__9783);
return div__delegate(args__7196__auto__);
});
div.cljs$core$IFn$_invoke$arity$variadic = div__delegate;
return div;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.dl = (function() { 
var dl__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8430_9784 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8431_9785 = null;var count__8432_9786 = 0;var i__8433_9787 = 0;while(true){
if((i__8433_9787 < count__8432_9786))
{var arg__7198__auto___9788 = cljs.core._nth.call(null,chunk__8431_9785,i__8433_9787);a__7197__auto__.push(arg__7198__auto___9788);
{
var G__9789 = seq__8430_9784;
var G__9790 = chunk__8431_9785;
var G__9791 = count__8432_9786;
var G__9792 = (i__8433_9787 + 1);
seq__8430_9784 = G__9789;
chunk__8431_9785 = G__9790;
count__8432_9786 = G__9791;
i__8433_9787 = G__9792;
continue;
}
} else
{var temp__4092__auto___9793 = cljs.core.seq.call(null,seq__8430_9784);if(temp__4092__auto___9793)
{var seq__8430_9794__$1 = temp__4092__auto___9793;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8430_9794__$1))
{var c__5632__auto___9795 = cljs.core.chunk_first.call(null,seq__8430_9794__$1);{
var G__9796 = cljs.core.chunk_rest.call(null,seq__8430_9794__$1);
var G__9797 = c__5632__auto___9795;
var G__9798 = cljs.core.count.call(null,c__5632__auto___9795);
var G__9799 = 0;
seq__8430_9784 = G__9796;
chunk__8431_9785 = G__9797;
count__8432_9786 = G__9798;
i__8433_9787 = G__9799;
continue;
}
} else
{var arg__7198__auto___9800 = cljs.core.first.call(null,seq__8430_9794__$1);a__7197__auto__.push(arg__7198__auto___9800);
{
var G__9801 = cljs.core.next.call(null,seq__8430_9794__$1);
var G__9802 = null;
var G__9803 = 0;
var G__9804 = 0;
seq__8430_9784 = G__9801;
chunk__8431_9785 = G__9802;
count__8432_9786 = G__9803;
i__8433_9787 = G__9804;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.dl.apply(null,a__7197__auto__);
};
var dl = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return dl__delegate.call(this,args__7196__auto__);};
dl.cljs$lang$maxFixedArity = 0;
dl.cljs$lang$applyTo = (function (arglist__9805){
var args__7196__auto__ = cljs.core.seq(arglist__9805);
return dl__delegate(args__7196__auto__);
});
dl.cljs$core$IFn$_invoke$arity$variadic = dl__delegate;
return dl;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.dt = (function() { 
var dt__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8438_9806 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8439_9807 = null;var count__8440_9808 = 0;var i__8441_9809 = 0;while(true){
if((i__8441_9809 < count__8440_9808))
{var arg__7198__auto___9810 = cljs.core._nth.call(null,chunk__8439_9807,i__8441_9809);a__7197__auto__.push(arg__7198__auto___9810);
{
var G__9811 = seq__8438_9806;
var G__9812 = chunk__8439_9807;
var G__9813 = count__8440_9808;
var G__9814 = (i__8441_9809 + 1);
seq__8438_9806 = G__9811;
chunk__8439_9807 = G__9812;
count__8440_9808 = G__9813;
i__8441_9809 = G__9814;
continue;
}
} else
{var temp__4092__auto___9815 = cljs.core.seq.call(null,seq__8438_9806);if(temp__4092__auto___9815)
{var seq__8438_9816__$1 = temp__4092__auto___9815;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8438_9816__$1))
{var c__5632__auto___9817 = cljs.core.chunk_first.call(null,seq__8438_9816__$1);{
var G__9818 = cljs.core.chunk_rest.call(null,seq__8438_9816__$1);
var G__9819 = c__5632__auto___9817;
var G__9820 = cljs.core.count.call(null,c__5632__auto___9817);
var G__9821 = 0;
seq__8438_9806 = G__9818;
chunk__8439_9807 = G__9819;
count__8440_9808 = G__9820;
i__8441_9809 = G__9821;
continue;
}
} else
{var arg__7198__auto___9822 = cljs.core.first.call(null,seq__8438_9816__$1);a__7197__auto__.push(arg__7198__auto___9822);
{
var G__9823 = cljs.core.next.call(null,seq__8438_9816__$1);
var G__9824 = null;
var G__9825 = 0;
var G__9826 = 0;
seq__8438_9806 = G__9823;
chunk__8439_9807 = G__9824;
count__8440_9808 = G__9825;
i__8441_9809 = G__9826;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.dt.apply(null,a__7197__auto__);
};
var dt = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return dt__delegate.call(this,args__7196__auto__);};
dt.cljs$lang$maxFixedArity = 0;
dt.cljs$lang$applyTo = (function (arglist__9827){
var args__7196__auto__ = cljs.core.seq(arglist__9827);
return dt__delegate(args__7196__auto__);
});
dt.cljs$core$IFn$_invoke$arity$variadic = dt__delegate;
return dt;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.em = (function() { 
var em__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8446_9828 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8447_9829 = null;var count__8448_9830 = 0;var i__8449_9831 = 0;while(true){
if((i__8449_9831 < count__8448_9830))
{var arg__7198__auto___9832 = cljs.core._nth.call(null,chunk__8447_9829,i__8449_9831);a__7197__auto__.push(arg__7198__auto___9832);
{
var G__9833 = seq__8446_9828;
var G__9834 = chunk__8447_9829;
var G__9835 = count__8448_9830;
var G__9836 = (i__8449_9831 + 1);
seq__8446_9828 = G__9833;
chunk__8447_9829 = G__9834;
count__8448_9830 = G__9835;
i__8449_9831 = G__9836;
continue;
}
} else
{var temp__4092__auto___9837 = cljs.core.seq.call(null,seq__8446_9828);if(temp__4092__auto___9837)
{var seq__8446_9838__$1 = temp__4092__auto___9837;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8446_9838__$1))
{var c__5632__auto___9839 = cljs.core.chunk_first.call(null,seq__8446_9838__$1);{
var G__9840 = cljs.core.chunk_rest.call(null,seq__8446_9838__$1);
var G__9841 = c__5632__auto___9839;
var G__9842 = cljs.core.count.call(null,c__5632__auto___9839);
var G__9843 = 0;
seq__8446_9828 = G__9840;
chunk__8447_9829 = G__9841;
count__8448_9830 = G__9842;
i__8449_9831 = G__9843;
continue;
}
} else
{var arg__7198__auto___9844 = cljs.core.first.call(null,seq__8446_9838__$1);a__7197__auto__.push(arg__7198__auto___9844);
{
var G__9845 = cljs.core.next.call(null,seq__8446_9838__$1);
var G__9846 = null;
var G__9847 = 0;
var G__9848 = 0;
seq__8446_9828 = G__9845;
chunk__8447_9829 = G__9846;
count__8448_9830 = G__9847;
i__8449_9831 = G__9848;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.em.apply(null,a__7197__auto__);
};
var em = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return em__delegate.call(this,args__7196__auto__);};
em.cljs$lang$maxFixedArity = 0;
em.cljs$lang$applyTo = (function (arglist__9849){
var args__7196__auto__ = cljs.core.seq(arglist__9849);
return em__delegate(args__7196__auto__);
});
em.cljs$core$IFn$_invoke$arity$variadic = em__delegate;
return em;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.embed = (function() { 
var embed__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8462_9850 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8463_9851 = null;var count__8464_9852 = 0;var i__8465_9853 = 0;while(true){
if((i__8465_9853 < count__8464_9852))
{var arg__7198__auto___9854 = cljs.core._nth.call(null,chunk__8463_9851,i__8465_9853);a__7197__auto__.push(arg__7198__auto___9854);
{
var G__9855 = seq__8462_9850;
var G__9856 = chunk__8463_9851;
var G__9857 = count__8464_9852;
var G__9858 = (i__8465_9853 + 1);
seq__8462_9850 = G__9855;
chunk__8463_9851 = G__9856;
count__8464_9852 = G__9857;
i__8465_9853 = G__9858;
continue;
}
} else
{var temp__4092__auto___9859 = cljs.core.seq.call(null,seq__8462_9850);if(temp__4092__auto___9859)
{var seq__8462_9860__$1 = temp__4092__auto___9859;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8462_9860__$1))
{var c__5632__auto___9861 = cljs.core.chunk_first.call(null,seq__8462_9860__$1);{
var G__9862 = cljs.core.chunk_rest.call(null,seq__8462_9860__$1);
var G__9863 = c__5632__auto___9861;
var G__9864 = cljs.core.count.call(null,c__5632__auto___9861);
var G__9865 = 0;
seq__8462_9850 = G__9862;
chunk__8463_9851 = G__9863;
count__8464_9852 = G__9864;
i__8465_9853 = G__9865;
continue;
}
} else
{var arg__7198__auto___9866 = cljs.core.first.call(null,seq__8462_9860__$1);a__7197__auto__.push(arg__7198__auto___9866);
{
var G__9867 = cljs.core.next.call(null,seq__8462_9860__$1);
var G__9868 = null;
var G__9869 = 0;
var G__9870 = 0;
seq__8462_9850 = G__9867;
chunk__8463_9851 = G__9868;
count__8464_9852 = G__9869;
i__8465_9853 = G__9870;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.embed.apply(null,a__7197__auto__);
};
var embed = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return embed__delegate.call(this,args__7196__auto__);};
embed.cljs$lang$maxFixedArity = 0;
embed.cljs$lang$applyTo = (function (arglist__9871){
var args__7196__auto__ = cljs.core.seq(arglist__9871);
return embed__delegate(args__7196__auto__);
});
embed.cljs$core$IFn$_invoke$arity$variadic = embed__delegate;
return embed;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.fieldset = (function() { 
var fieldset__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8470_9872 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8471_9873 = null;var count__8472_9874 = 0;var i__8473_9875 = 0;while(true){
if((i__8473_9875 < count__8472_9874))
{var arg__7198__auto___9876 = cljs.core._nth.call(null,chunk__8471_9873,i__8473_9875);a__7197__auto__.push(arg__7198__auto___9876);
{
var G__9877 = seq__8470_9872;
var G__9878 = chunk__8471_9873;
var G__9879 = count__8472_9874;
var G__9880 = (i__8473_9875 + 1);
seq__8470_9872 = G__9877;
chunk__8471_9873 = G__9878;
count__8472_9874 = G__9879;
i__8473_9875 = G__9880;
continue;
}
} else
{var temp__4092__auto___9881 = cljs.core.seq.call(null,seq__8470_9872);if(temp__4092__auto___9881)
{var seq__8470_9882__$1 = temp__4092__auto___9881;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8470_9882__$1))
{var c__5632__auto___9883 = cljs.core.chunk_first.call(null,seq__8470_9882__$1);{
var G__9884 = cljs.core.chunk_rest.call(null,seq__8470_9882__$1);
var G__9885 = c__5632__auto___9883;
var G__9886 = cljs.core.count.call(null,c__5632__auto___9883);
var G__9887 = 0;
seq__8470_9872 = G__9884;
chunk__8471_9873 = G__9885;
count__8472_9874 = G__9886;
i__8473_9875 = G__9887;
continue;
}
} else
{var arg__7198__auto___9888 = cljs.core.first.call(null,seq__8470_9882__$1);a__7197__auto__.push(arg__7198__auto___9888);
{
var G__9889 = cljs.core.next.call(null,seq__8470_9882__$1);
var G__9890 = null;
var G__9891 = 0;
var G__9892 = 0;
seq__8470_9872 = G__9889;
chunk__8471_9873 = G__9890;
count__8472_9874 = G__9891;
i__8473_9875 = G__9892;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.fieldset.apply(null,a__7197__auto__);
};
var fieldset = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return fieldset__delegate.call(this,args__7196__auto__);};
fieldset.cljs$lang$maxFixedArity = 0;
fieldset.cljs$lang$applyTo = (function (arglist__9893){
var args__7196__auto__ = cljs.core.seq(arglist__9893);
return fieldset__delegate(args__7196__auto__);
});
fieldset.cljs$core$IFn$_invoke$arity$variadic = fieldset__delegate;
return fieldset;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.figcaption = (function() { 
var figcaption__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8478_9894 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8479_9895 = null;var count__8480_9896 = 0;var i__8481_9897 = 0;while(true){
if((i__8481_9897 < count__8480_9896))
{var arg__7198__auto___9898 = cljs.core._nth.call(null,chunk__8479_9895,i__8481_9897);a__7197__auto__.push(arg__7198__auto___9898);
{
var G__9899 = seq__8478_9894;
var G__9900 = chunk__8479_9895;
var G__9901 = count__8480_9896;
var G__9902 = (i__8481_9897 + 1);
seq__8478_9894 = G__9899;
chunk__8479_9895 = G__9900;
count__8480_9896 = G__9901;
i__8481_9897 = G__9902;
continue;
}
} else
{var temp__4092__auto___9903 = cljs.core.seq.call(null,seq__8478_9894);if(temp__4092__auto___9903)
{var seq__8478_9904__$1 = temp__4092__auto___9903;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8478_9904__$1))
{var c__5632__auto___9905 = cljs.core.chunk_first.call(null,seq__8478_9904__$1);{
var G__9906 = cljs.core.chunk_rest.call(null,seq__8478_9904__$1);
var G__9907 = c__5632__auto___9905;
var G__9908 = cljs.core.count.call(null,c__5632__auto___9905);
var G__9909 = 0;
seq__8478_9894 = G__9906;
chunk__8479_9895 = G__9907;
count__8480_9896 = G__9908;
i__8481_9897 = G__9909;
continue;
}
} else
{var arg__7198__auto___9910 = cljs.core.first.call(null,seq__8478_9904__$1);a__7197__auto__.push(arg__7198__auto___9910);
{
var G__9911 = cljs.core.next.call(null,seq__8478_9904__$1);
var G__9912 = null;
var G__9913 = 0;
var G__9914 = 0;
seq__8478_9894 = G__9911;
chunk__8479_9895 = G__9912;
count__8480_9896 = G__9913;
i__8481_9897 = G__9914;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.figcaption.apply(null,a__7197__auto__);
};
var figcaption = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return figcaption__delegate.call(this,args__7196__auto__);};
figcaption.cljs$lang$maxFixedArity = 0;
figcaption.cljs$lang$applyTo = (function (arglist__9915){
var args__7196__auto__ = cljs.core.seq(arglist__9915);
return figcaption__delegate(args__7196__auto__);
});
figcaption.cljs$core$IFn$_invoke$arity$variadic = figcaption__delegate;
return figcaption;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.figure = (function() { 
var figure__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8486_9916 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8487_9917 = null;var count__8488_9918 = 0;var i__8489_9919 = 0;while(true){
if((i__8489_9919 < count__8488_9918))
{var arg__7198__auto___9920 = cljs.core._nth.call(null,chunk__8487_9917,i__8489_9919);a__7197__auto__.push(arg__7198__auto___9920);
{
var G__9921 = seq__8486_9916;
var G__9922 = chunk__8487_9917;
var G__9923 = count__8488_9918;
var G__9924 = (i__8489_9919 + 1);
seq__8486_9916 = G__9921;
chunk__8487_9917 = G__9922;
count__8488_9918 = G__9923;
i__8489_9919 = G__9924;
continue;
}
} else
{var temp__4092__auto___9925 = cljs.core.seq.call(null,seq__8486_9916);if(temp__4092__auto___9925)
{var seq__8486_9926__$1 = temp__4092__auto___9925;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8486_9926__$1))
{var c__5632__auto___9927 = cljs.core.chunk_first.call(null,seq__8486_9926__$1);{
var G__9928 = cljs.core.chunk_rest.call(null,seq__8486_9926__$1);
var G__9929 = c__5632__auto___9927;
var G__9930 = cljs.core.count.call(null,c__5632__auto___9927);
var G__9931 = 0;
seq__8486_9916 = G__9928;
chunk__8487_9917 = G__9929;
count__8488_9918 = G__9930;
i__8489_9919 = G__9931;
continue;
}
} else
{var arg__7198__auto___9932 = cljs.core.first.call(null,seq__8486_9926__$1);a__7197__auto__.push(arg__7198__auto___9932);
{
var G__9933 = cljs.core.next.call(null,seq__8486_9926__$1);
var G__9934 = null;
var G__9935 = 0;
var G__9936 = 0;
seq__8486_9916 = G__9933;
chunk__8487_9917 = G__9934;
count__8488_9918 = G__9935;
i__8489_9919 = G__9936;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.figure.apply(null,a__7197__auto__);
};
var figure = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return figure__delegate.call(this,args__7196__auto__);};
figure.cljs$lang$maxFixedArity = 0;
figure.cljs$lang$applyTo = (function (arglist__9937){
var args__7196__auto__ = cljs.core.seq(arglist__9937);
return figure__delegate(args__7196__auto__);
});
figure.cljs$core$IFn$_invoke$arity$variadic = figure__delegate;
return figure;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.footer = (function() { 
var footer__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8494_9938 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8495_9939 = null;var count__8496_9940 = 0;var i__8497_9941 = 0;while(true){
if((i__8497_9941 < count__8496_9940))
{var arg__7198__auto___9942 = cljs.core._nth.call(null,chunk__8495_9939,i__8497_9941);a__7197__auto__.push(arg__7198__auto___9942);
{
var G__9943 = seq__8494_9938;
var G__9944 = chunk__8495_9939;
var G__9945 = count__8496_9940;
var G__9946 = (i__8497_9941 + 1);
seq__8494_9938 = G__9943;
chunk__8495_9939 = G__9944;
count__8496_9940 = G__9945;
i__8497_9941 = G__9946;
continue;
}
} else
{var temp__4092__auto___9947 = cljs.core.seq.call(null,seq__8494_9938);if(temp__4092__auto___9947)
{var seq__8494_9948__$1 = temp__4092__auto___9947;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8494_9948__$1))
{var c__5632__auto___9949 = cljs.core.chunk_first.call(null,seq__8494_9948__$1);{
var G__9950 = cljs.core.chunk_rest.call(null,seq__8494_9948__$1);
var G__9951 = c__5632__auto___9949;
var G__9952 = cljs.core.count.call(null,c__5632__auto___9949);
var G__9953 = 0;
seq__8494_9938 = G__9950;
chunk__8495_9939 = G__9951;
count__8496_9940 = G__9952;
i__8497_9941 = G__9953;
continue;
}
} else
{var arg__7198__auto___9954 = cljs.core.first.call(null,seq__8494_9948__$1);a__7197__auto__.push(arg__7198__auto___9954);
{
var G__9955 = cljs.core.next.call(null,seq__8494_9948__$1);
var G__9956 = null;
var G__9957 = 0;
var G__9958 = 0;
seq__8494_9938 = G__9955;
chunk__8495_9939 = G__9956;
count__8496_9940 = G__9957;
i__8497_9941 = G__9958;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.footer.apply(null,a__7197__auto__);
};
var footer = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return footer__delegate.call(this,args__7196__auto__);};
footer.cljs$lang$maxFixedArity = 0;
footer.cljs$lang$applyTo = (function (arglist__9959){
var args__7196__auto__ = cljs.core.seq(arglist__9959);
return footer__delegate(args__7196__auto__);
});
footer.cljs$core$IFn$_invoke$arity$variadic = footer__delegate;
return footer;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.form = (function() { 
var form__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8502_9960 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8503_9961 = null;var count__8504_9962 = 0;var i__8505_9963 = 0;while(true){
if((i__8505_9963 < count__8504_9962))
{var arg__7198__auto___9964 = cljs.core._nth.call(null,chunk__8503_9961,i__8505_9963);a__7197__auto__.push(arg__7198__auto___9964);
{
var G__9965 = seq__8502_9960;
var G__9966 = chunk__8503_9961;
var G__9967 = count__8504_9962;
var G__9968 = (i__8505_9963 + 1);
seq__8502_9960 = G__9965;
chunk__8503_9961 = G__9966;
count__8504_9962 = G__9967;
i__8505_9963 = G__9968;
continue;
}
} else
{var temp__4092__auto___9969 = cljs.core.seq.call(null,seq__8502_9960);if(temp__4092__auto___9969)
{var seq__8502_9970__$1 = temp__4092__auto___9969;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8502_9970__$1))
{var c__5632__auto___9971 = cljs.core.chunk_first.call(null,seq__8502_9970__$1);{
var G__9972 = cljs.core.chunk_rest.call(null,seq__8502_9970__$1);
var G__9973 = c__5632__auto___9971;
var G__9974 = cljs.core.count.call(null,c__5632__auto___9971);
var G__9975 = 0;
seq__8502_9960 = G__9972;
chunk__8503_9961 = G__9973;
count__8504_9962 = G__9974;
i__8505_9963 = G__9975;
continue;
}
} else
{var arg__7198__auto___9976 = cljs.core.first.call(null,seq__8502_9970__$1);a__7197__auto__.push(arg__7198__auto___9976);
{
var G__9977 = cljs.core.next.call(null,seq__8502_9970__$1);
var G__9978 = null;
var G__9979 = 0;
var G__9980 = 0;
seq__8502_9960 = G__9977;
chunk__8503_9961 = G__9978;
count__8504_9962 = G__9979;
i__8505_9963 = G__9980;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.form.apply(null,a__7197__auto__);
};
var form = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return form__delegate.call(this,args__7196__auto__);};
form.cljs$lang$maxFixedArity = 0;
form.cljs$lang$applyTo = (function (arglist__9981){
var args__7196__auto__ = cljs.core.seq(arglist__9981);
return form__delegate(args__7196__auto__);
});
form.cljs$core$IFn$_invoke$arity$variadic = form__delegate;
return form;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h1 = (function() { 
var h1__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8510_9982 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8511_9983 = null;var count__8512_9984 = 0;var i__8513_9985 = 0;while(true){
if((i__8513_9985 < count__8512_9984))
{var arg__7198__auto___9986 = cljs.core._nth.call(null,chunk__8511_9983,i__8513_9985);a__7197__auto__.push(arg__7198__auto___9986);
{
var G__9987 = seq__8510_9982;
var G__9988 = chunk__8511_9983;
var G__9989 = count__8512_9984;
var G__9990 = (i__8513_9985 + 1);
seq__8510_9982 = G__9987;
chunk__8511_9983 = G__9988;
count__8512_9984 = G__9989;
i__8513_9985 = G__9990;
continue;
}
} else
{var temp__4092__auto___9991 = cljs.core.seq.call(null,seq__8510_9982);if(temp__4092__auto___9991)
{var seq__8510_9992__$1 = temp__4092__auto___9991;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8510_9992__$1))
{var c__5632__auto___9993 = cljs.core.chunk_first.call(null,seq__8510_9992__$1);{
var G__9994 = cljs.core.chunk_rest.call(null,seq__8510_9992__$1);
var G__9995 = c__5632__auto___9993;
var G__9996 = cljs.core.count.call(null,c__5632__auto___9993);
var G__9997 = 0;
seq__8510_9982 = G__9994;
chunk__8511_9983 = G__9995;
count__8512_9984 = G__9996;
i__8513_9985 = G__9997;
continue;
}
} else
{var arg__7198__auto___9998 = cljs.core.first.call(null,seq__8510_9992__$1);a__7197__auto__.push(arg__7198__auto___9998);
{
var G__9999 = cljs.core.next.call(null,seq__8510_9992__$1);
var G__10000 = null;
var G__10001 = 0;
var G__10002 = 0;
seq__8510_9982 = G__9999;
chunk__8511_9983 = G__10000;
count__8512_9984 = G__10001;
i__8513_9985 = G__10002;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h1.apply(null,a__7197__auto__);
};
var h1 = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h1__delegate.call(this,args__7196__auto__);};
h1.cljs$lang$maxFixedArity = 0;
h1.cljs$lang$applyTo = (function (arglist__10003){
var args__7196__auto__ = cljs.core.seq(arglist__10003);
return h1__delegate(args__7196__auto__);
});
h1.cljs$core$IFn$_invoke$arity$variadic = h1__delegate;
return h1;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h2 = (function() { 
var h2__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8518_10004 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8519_10005 = null;var count__8520_10006 = 0;var i__8521_10007 = 0;while(true){
if((i__8521_10007 < count__8520_10006))
{var arg__7198__auto___10008 = cljs.core._nth.call(null,chunk__8519_10005,i__8521_10007);a__7197__auto__.push(arg__7198__auto___10008);
{
var G__10009 = seq__8518_10004;
var G__10010 = chunk__8519_10005;
var G__10011 = count__8520_10006;
var G__10012 = (i__8521_10007 + 1);
seq__8518_10004 = G__10009;
chunk__8519_10005 = G__10010;
count__8520_10006 = G__10011;
i__8521_10007 = G__10012;
continue;
}
} else
{var temp__4092__auto___10013 = cljs.core.seq.call(null,seq__8518_10004);if(temp__4092__auto___10013)
{var seq__8518_10014__$1 = temp__4092__auto___10013;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8518_10014__$1))
{var c__5632__auto___10015 = cljs.core.chunk_first.call(null,seq__8518_10014__$1);{
var G__10016 = cljs.core.chunk_rest.call(null,seq__8518_10014__$1);
var G__10017 = c__5632__auto___10015;
var G__10018 = cljs.core.count.call(null,c__5632__auto___10015);
var G__10019 = 0;
seq__8518_10004 = G__10016;
chunk__8519_10005 = G__10017;
count__8520_10006 = G__10018;
i__8521_10007 = G__10019;
continue;
}
} else
{var arg__7198__auto___10020 = cljs.core.first.call(null,seq__8518_10014__$1);a__7197__auto__.push(arg__7198__auto___10020);
{
var G__10021 = cljs.core.next.call(null,seq__8518_10014__$1);
var G__10022 = null;
var G__10023 = 0;
var G__10024 = 0;
seq__8518_10004 = G__10021;
chunk__8519_10005 = G__10022;
count__8520_10006 = G__10023;
i__8521_10007 = G__10024;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h2.apply(null,a__7197__auto__);
};
var h2 = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h2__delegate.call(this,args__7196__auto__);};
h2.cljs$lang$maxFixedArity = 0;
h2.cljs$lang$applyTo = (function (arglist__10025){
var args__7196__auto__ = cljs.core.seq(arglist__10025);
return h2__delegate(args__7196__auto__);
});
h2.cljs$core$IFn$_invoke$arity$variadic = h2__delegate;
return h2;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h3 = (function() { 
var h3__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8526_10026 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8527_10027 = null;var count__8528_10028 = 0;var i__8529_10029 = 0;while(true){
if((i__8529_10029 < count__8528_10028))
{var arg__7198__auto___10030 = cljs.core._nth.call(null,chunk__8527_10027,i__8529_10029);a__7197__auto__.push(arg__7198__auto___10030);
{
var G__10031 = seq__8526_10026;
var G__10032 = chunk__8527_10027;
var G__10033 = count__8528_10028;
var G__10034 = (i__8529_10029 + 1);
seq__8526_10026 = G__10031;
chunk__8527_10027 = G__10032;
count__8528_10028 = G__10033;
i__8529_10029 = G__10034;
continue;
}
} else
{var temp__4092__auto___10035 = cljs.core.seq.call(null,seq__8526_10026);if(temp__4092__auto___10035)
{var seq__8526_10036__$1 = temp__4092__auto___10035;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8526_10036__$1))
{var c__5632__auto___10037 = cljs.core.chunk_first.call(null,seq__8526_10036__$1);{
var G__10038 = cljs.core.chunk_rest.call(null,seq__8526_10036__$1);
var G__10039 = c__5632__auto___10037;
var G__10040 = cljs.core.count.call(null,c__5632__auto___10037);
var G__10041 = 0;
seq__8526_10026 = G__10038;
chunk__8527_10027 = G__10039;
count__8528_10028 = G__10040;
i__8529_10029 = G__10041;
continue;
}
} else
{var arg__7198__auto___10042 = cljs.core.first.call(null,seq__8526_10036__$1);a__7197__auto__.push(arg__7198__auto___10042);
{
var G__10043 = cljs.core.next.call(null,seq__8526_10036__$1);
var G__10044 = null;
var G__10045 = 0;
var G__10046 = 0;
seq__8526_10026 = G__10043;
chunk__8527_10027 = G__10044;
count__8528_10028 = G__10045;
i__8529_10029 = G__10046;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h3.apply(null,a__7197__auto__);
};
var h3 = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h3__delegate.call(this,args__7196__auto__);};
h3.cljs$lang$maxFixedArity = 0;
h3.cljs$lang$applyTo = (function (arglist__10047){
var args__7196__auto__ = cljs.core.seq(arglist__10047);
return h3__delegate(args__7196__auto__);
});
h3.cljs$core$IFn$_invoke$arity$variadic = h3__delegate;
return h3;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h4 = (function() { 
var h4__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8534_10048 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8535_10049 = null;var count__8536_10050 = 0;var i__8537_10051 = 0;while(true){
if((i__8537_10051 < count__8536_10050))
{var arg__7198__auto___10052 = cljs.core._nth.call(null,chunk__8535_10049,i__8537_10051);a__7197__auto__.push(arg__7198__auto___10052);
{
var G__10053 = seq__8534_10048;
var G__10054 = chunk__8535_10049;
var G__10055 = count__8536_10050;
var G__10056 = (i__8537_10051 + 1);
seq__8534_10048 = G__10053;
chunk__8535_10049 = G__10054;
count__8536_10050 = G__10055;
i__8537_10051 = G__10056;
continue;
}
} else
{var temp__4092__auto___10057 = cljs.core.seq.call(null,seq__8534_10048);if(temp__4092__auto___10057)
{var seq__8534_10058__$1 = temp__4092__auto___10057;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8534_10058__$1))
{var c__5632__auto___10059 = cljs.core.chunk_first.call(null,seq__8534_10058__$1);{
var G__10060 = cljs.core.chunk_rest.call(null,seq__8534_10058__$1);
var G__10061 = c__5632__auto___10059;
var G__10062 = cljs.core.count.call(null,c__5632__auto___10059);
var G__10063 = 0;
seq__8534_10048 = G__10060;
chunk__8535_10049 = G__10061;
count__8536_10050 = G__10062;
i__8537_10051 = G__10063;
continue;
}
} else
{var arg__7198__auto___10064 = cljs.core.first.call(null,seq__8534_10058__$1);a__7197__auto__.push(arg__7198__auto___10064);
{
var G__10065 = cljs.core.next.call(null,seq__8534_10058__$1);
var G__10066 = null;
var G__10067 = 0;
var G__10068 = 0;
seq__8534_10048 = G__10065;
chunk__8535_10049 = G__10066;
count__8536_10050 = G__10067;
i__8537_10051 = G__10068;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h4.apply(null,a__7197__auto__);
};
var h4 = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h4__delegate.call(this,args__7196__auto__);};
h4.cljs$lang$maxFixedArity = 0;
h4.cljs$lang$applyTo = (function (arglist__10069){
var args__7196__auto__ = cljs.core.seq(arglist__10069);
return h4__delegate(args__7196__auto__);
});
h4.cljs$core$IFn$_invoke$arity$variadic = h4__delegate;
return h4;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h5 = (function() { 
var h5__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8542_10070 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8543_10071 = null;var count__8544_10072 = 0;var i__8545_10073 = 0;while(true){
if((i__8545_10073 < count__8544_10072))
{var arg__7198__auto___10074 = cljs.core._nth.call(null,chunk__8543_10071,i__8545_10073);a__7197__auto__.push(arg__7198__auto___10074);
{
var G__10075 = seq__8542_10070;
var G__10076 = chunk__8543_10071;
var G__10077 = count__8544_10072;
var G__10078 = (i__8545_10073 + 1);
seq__8542_10070 = G__10075;
chunk__8543_10071 = G__10076;
count__8544_10072 = G__10077;
i__8545_10073 = G__10078;
continue;
}
} else
{var temp__4092__auto___10079 = cljs.core.seq.call(null,seq__8542_10070);if(temp__4092__auto___10079)
{var seq__8542_10080__$1 = temp__4092__auto___10079;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8542_10080__$1))
{var c__5632__auto___10081 = cljs.core.chunk_first.call(null,seq__8542_10080__$1);{
var G__10082 = cljs.core.chunk_rest.call(null,seq__8542_10080__$1);
var G__10083 = c__5632__auto___10081;
var G__10084 = cljs.core.count.call(null,c__5632__auto___10081);
var G__10085 = 0;
seq__8542_10070 = G__10082;
chunk__8543_10071 = G__10083;
count__8544_10072 = G__10084;
i__8545_10073 = G__10085;
continue;
}
} else
{var arg__7198__auto___10086 = cljs.core.first.call(null,seq__8542_10080__$1);a__7197__auto__.push(arg__7198__auto___10086);
{
var G__10087 = cljs.core.next.call(null,seq__8542_10080__$1);
var G__10088 = null;
var G__10089 = 0;
var G__10090 = 0;
seq__8542_10070 = G__10087;
chunk__8543_10071 = G__10088;
count__8544_10072 = G__10089;
i__8545_10073 = G__10090;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h5.apply(null,a__7197__auto__);
};
var h5 = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h5__delegate.call(this,args__7196__auto__);};
h5.cljs$lang$maxFixedArity = 0;
h5.cljs$lang$applyTo = (function (arglist__10091){
var args__7196__auto__ = cljs.core.seq(arglist__10091);
return h5__delegate(args__7196__auto__);
});
h5.cljs$core$IFn$_invoke$arity$variadic = h5__delegate;
return h5;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h6 = (function() { 
var h6__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8550_10092 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8551_10093 = null;var count__8552_10094 = 0;var i__8553_10095 = 0;while(true){
if((i__8553_10095 < count__8552_10094))
{var arg__7198__auto___10096 = cljs.core._nth.call(null,chunk__8551_10093,i__8553_10095);a__7197__auto__.push(arg__7198__auto___10096);
{
var G__10097 = seq__8550_10092;
var G__10098 = chunk__8551_10093;
var G__10099 = count__8552_10094;
var G__10100 = (i__8553_10095 + 1);
seq__8550_10092 = G__10097;
chunk__8551_10093 = G__10098;
count__8552_10094 = G__10099;
i__8553_10095 = G__10100;
continue;
}
} else
{var temp__4092__auto___10101 = cljs.core.seq.call(null,seq__8550_10092);if(temp__4092__auto___10101)
{var seq__8550_10102__$1 = temp__4092__auto___10101;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8550_10102__$1))
{var c__5632__auto___10103 = cljs.core.chunk_first.call(null,seq__8550_10102__$1);{
var G__10104 = cljs.core.chunk_rest.call(null,seq__8550_10102__$1);
var G__10105 = c__5632__auto___10103;
var G__10106 = cljs.core.count.call(null,c__5632__auto___10103);
var G__10107 = 0;
seq__8550_10092 = G__10104;
chunk__8551_10093 = G__10105;
count__8552_10094 = G__10106;
i__8553_10095 = G__10107;
continue;
}
} else
{var arg__7198__auto___10108 = cljs.core.first.call(null,seq__8550_10102__$1);a__7197__auto__.push(arg__7198__auto___10108);
{
var G__10109 = cljs.core.next.call(null,seq__8550_10102__$1);
var G__10110 = null;
var G__10111 = 0;
var G__10112 = 0;
seq__8550_10092 = G__10109;
chunk__8551_10093 = G__10110;
count__8552_10094 = G__10111;
i__8553_10095 = G__10112;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h6.apply(null,a__7197__auto__);
};
var h6 = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h6__delegate.call(this,args__7196__auto__);};
h6.cljs$lang$maxFixedArity = 0;
h6.cljs$lang$applyTo = (function (arglist__10113){
var args__7196__auto__ = cljs.core.seq(arglist__10113);
return h6__delegate(args__7196__auto__);
});
h6.cljs$core$IFn$_invoke$arity$variadic = h6__delegate;
return h6;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.head = (function() { 
var head__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8558_10114 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8559_10115 = null;var count__8560_10116 = 0;var i__8561_10117 = 0;while(true){
if((i__8561_10117 < count__8560_10116))
{var arg__7198__auto___10118 = cljs.core._nth.call(null,chunk__8559_10115,i__8561_10117);a__7197__auto__.push(arg__7198__auto___10118);
{
var G__10119 = seq__8558_10114;
var G__10120 = chunk__8559_10115;
var G__10121 = count__8560_10116;
var G__10122 = (i__8561_10117 + 1);
seq__8558_10114 = G__10119;
chunk__8559_10115 = G__10120;
count__8560_10116 = G__10121;
i__8561_10117 = G__10122;
continue;
}
} else
{var temp__4092__auto___10123 = cljs.core.seq.call(null,seq__8558_10114);if(temp__4092__auto___10123)
{var seq__8558_10124__$1 = temp__4092__auto___10123;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8558_10124__$1))
{var c__5632__auto___10125 = cljs.core.chunk_first.call(null,seq__8558_10124__$1);{
var G__10126 = cljs.core.chunk_rest.call(null,seq__8558_10124__$1);
var G__10127 = c__5632__auto___10125;
var G__10128 = cljs.core.count.call(null,c__5632__auto___10125);
var G__10129 = 0;
seq__8558_10114 = G__10126;
chunk__8559_10115 = G__10127;
count__8560_10116 = G__10128;
i__8561_10117 = G__10129;
continue;
}
} else
{var arg__7198__auto___10130 = cljs.core.first.call(null,seq__8558_10124__$1);a__7197__auto__.push(arg__7198__auto___10130);
{
var G__10131 = cljs.core.next.call(null,seq__8558_10124__$1);
var G__10132 = null;
var G__10133 = 0;
var G__10134 = 0;
seq__8558_10114 = G__10131;
chunk__8559_10115 = G__10132;
count__8560_10116 = G__10133;
i__8561_10117 = G__10134;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.head.apply(null,a__7197__auto__);
};
var head = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return head__delegate.call(this,args__7196__auto__);};
head.cljs$lang$maxFixedArity = 0;
head.cljs$lang$applyTo = (function (arglist__10135){
var args__7196__auto__ = cljs.core.seq(arglist__10135);
return head__delegate(args__7196__auto__);
});
head.cljs$core$IFn$_invoke$arity$variadic = head__delegate;
return head;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.header = (function() { 
var header__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8566_10136 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8567_10137 = null;var count__8568_10138 = 0;var i__8569_10139 = 0;while(true){
if((i__8569_10139 < count__8568_10138))
{var arg__7198__auto___10140 = cljs.core._nth.call(null,chunk__8567_10137,i__8569_10139);a__7197__auto__.push(arg__7198__auto___10140);
{
var G__10141 = seq__8566_10136;
var G__10142 = chunk__8567_10137;
var G__10143 = count__8568_10138;
var G__10144 = (i__8569_10139 + 1);
seq__8566_10136 = G__10141;
chunk__8567_10137 = G__10142;
count__8568_10138 = G__10143;
i__8569_10139 = G__10144;
continue;
}
} else
{var temp__4092__auto___10145 = cljs.core.seq.call(null,seq__8566_10136);if(temp__4092__auto___10145)
{var seq__8566_10146__$1 = temp__4092__auto___10145;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8566_10146__$1))
{var c__5632__auto___10147 = cljs.core.chunk_first.call(null,seq__8566_10146__$1);{
var G__10148 = cljs.core.chunk_rest.call(null,seq__8566_10146__$1);
var G__10149 = c__5632__auto___10147;
var G__10150 = cljs.core.count.call(null,c__5632__auto___10147);
var G__10151 = 0;
seq__8566_10136 = G__10148;
chunk__8567_10137 = G__10149;
count__8568_10138 = G__10150;
i__8569_10139 = G__10151;
continue;
}
} else
{var arg__7198__auto___10152 = cljs.core.first.call(null,seq__8566_10146__$1);a__7197__auto__.push(arg__7198__auto___10152);
{
var G__10153 = cljs.core.next.call(null,seq__8566_10146__$1);
var G__10154 = null;
var G__10155 = 0;
var G__10156 = 0;
seq__8566_10136 = G__10153;
chunk__8567_10137 = G__10154;
count__8568_10138 = G__10155;
i__8569_10139 = G__10156;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.header.apply(null,a__7197__auto__);
};
var header = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return header__delegate.call(this,args__7196__auto__);};
header.cljs$lang$maxFixedArity = 0;
header.cljs$lang$applyTo = (function (arglist__10157){
var args__7196__auto__ = cljs.core.seq(arglist__10157);
return header__delegate(args__7196__auto__);
});
header.cljs$core$IFn$_invoke$arity$variadic = header__delegate;
return header;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.hr = (function() { 
var hr__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8574_10158 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8575_10159 = null;var count__8576_10160 = 0;var i__8577_10161 = 0;while(true){
if((i__8577_10161 < count__8576_10160))
{var arg__7198__auto___10162 = cljs.core._nth.call(null,chunk__8575_10159,i__8577_10161);a__7197__auto__.push(arg__7198__auto___10162);
{
var G__10163 = seq__8574_10158;
var G__10164 = chunk__8575_10159;
var G__10165 = count__8576_10160;
var G__10166 = (i__8577_10161 + 1);
seq__8574_10158 = G__10163;
chunk__8575_10159 = G__10164;
count__8576_10160 = G__10165;
i__8577_10161 = G__10166;
continue;
}
} else
{var temp__4092__auto___10167 = cljs.core.seq.call(null,seq__8574_10158);if(temp__4092__auto___10167)
{var seq__8574_10168__$1 = temp__4092__auto___10167;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8574_10168__$1))
{var c__5632__auto___10169 = cljs.core.chunk_first.call(null,seq__8574_10168__$1);{
var G__10170 = cljs.core.chunk_rest.call(null,seq__8574_10168__$1);
var G__10171 = c__5632__auto___10169;
var G__10172 = cljs.core.count.call(null,c__5632__auto___10169);
var G__10173 = 0;
seq__8574_10158 = G__10170;
chunk__8575_10159 = G__10171;
count__8576_10160 = G__10172;
i__8577_10161 = G__10173;
continue;
}
} else
{var arg__7198__auto___10174 = cljs.core.first.call(null,seq__8574_10168__$1);a__7197__auto__.push(arg__7198__auto___10174);
{
var G__10175 = cljs.core.next.call(null,seq__8574_10168__$1);
var G__10176 = null;
var G__10177 = 0;
var G__10178 = 0;
seq__8574_10158 = G__10175;
chunk__8575_10159 = G__10176;
count__8576_10160 = G__10177;
i__8577_10161 = G__10178;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.hr.apply(null,a__7197__auto__);
};
var hr = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return hr__delegate.call(this,args__7196__auto__);};
hr.cljs$lang$maxFixedArity = 0;
hr.cljs$lang$applyTo = (function (arglist__10179){
var args__7196__auto__ = cljs.core.seq(arglist__10179);
return hr__delegate(args__7196__auto__);
});
hr.cljs$core$IFn$_invoke$arity$variadic = hr__delegate;
return hr;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.html = (function() { 
var html__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8582_10180 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8583_10181 = null;var count__8584_10182 = 0;var i__8585_10183 = 0;while(true){
if((i__8585_10183 < count__8584_10182))
{var arg__7198__auto___10184 = cljs.core._nth.call(null,chunk__8583_10181,i__8585_10183);a__7197__auto__.push(arg__7198__auto___10184);
{
var G__10185 = seq__8582_10180;
var G__10186 = chunk__8583_10181;
var G__10187 = count__8584_10182;
var G__10188 = (i__8585_10183 + 1);
seq__8582_10180 = G__10185;
chunk__8583_10181 = G__10186;
count__8584_10182 = G__10187;
i__8585_10183 = G__10188;
continue;
}
} else
{var temp__4092__auto___10189 = cljs.core.seq.call(null,seq__8582_10180);if(temp__4092__auto___10189)
{var seq__8582_10190__$1 = temp__4092__auto___10189;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8582_10190__$1))
{var c__5632__auto___10191 = cljs.core.chunk_first.call(null,seq__8582_10190__$1);{
var G__10192 = cljs.core.chunk_rest.call(null,seq__8582_10190__$1);
var G__10193 = c__5632__auto___10191;
var G__10194 = cljs.core.count.call(null,c__5632__auto___10191);
var G__10195 = 0;
seq__8582_10180 = G__10192;
chunk__8583_10181 = G__10193;
count__8584_10182 = G__10194;
i__8585_10183 = G__10195;
continue;
}
} else
{var arg__7198__auto___10196 = cljs.core.first.call(null,seq__8582_10190__$1);a__7197__auto__.push(arg__7198__auto___10196);
{
var G__10197 = cljs.core.next.call(null,seq__8582_10190__$1);
var G__10198 = null;
var G__10199 = 0;
var G__10200 = 0;
seq__8582_10180 = G__10197;
chunk__8583_10181 = G__10198;
count__8584_10182 = G__10199;
i__8585_10183 = G__10200;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.html.apply(null,a__7197__auto__);
};
var html = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return html__delegate.call(this,args__7196__auto__);};
html.cljs$lang$maxFixedArity = 0;
html.cljs$lang$applyTo = (function (arglist__10201){
var args__7196__auto__ = cljs.core.seq(arglist__10201);
return html__delegate(args__7196__auto__);
});
html.cljs$core$IFn$_invoke$arity$variadic = html__delegate;
return html;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.i = (function() { 
var i__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8590_10202 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8591_10203 = null;var count__8592_10204 = 0;var i__8593_10205 = 0;while(true){
if((i__8593_10205 < count__8592_10204))
{var arg__7198__auto___10206 = cljs.core._nth.call(null,chunk__8591_10203,i__8593_10205);a__7197__auto__.push(arg__7198__auto___10206);
{
var G__10207 = seq__8590_10202;
var G__10208 = chunk__8591_10203;
var G__10209 = count__8592_10204;
var G__10210 = (i__8593_10205 + 1);
seq__8590_10202 = G__10207;
chunk__8591_10203 = G__10208;
count__8592_10204 = G__10209;
i__8593_10205 = G__10210;
continue;
}
} else
{var temp__4092__auto___10211 = cljs.core.seq.call(null,seq__8590_10202);if(temp__4092__auto___10211)
{var seq__8590_10212__$1 = temp__4092__auto___10211;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8590_10212__$1))
{var c__5632__auto___10213 = cljs.core.chunk_first.call(null,seq__8590_10212__$1);{
var G__10214 = cljs.core.chunk_rest.call(null,seq__8590_10212__$1);
var G__10215 = c__5632__auto___10213;
var G__10216 = cljs.core.count.call(null,c__5632__auto___10213);
var G__10217 = 0;
seq__8590_10202 = G__10214;
chunk__8591_10203 = G__10215;
count__8592_10204 = G__10216;
i__8593_10205 = G__10217;
continue;
}
} else
{var arg__7198__auto___10218 = cljs.core.first.call(null,seq__8590_10212__$1);a__7197__auto__.push(arg__7198__auto___10218);
{
var G__10219 = cljs.core.next.call(null,seq__8590_10212__$1);
var G__10220 = null;
var G__10221 = 0;
var G__10222 = 0;
seq__8590_10202 = G__10219;
chunk__8591_10203 = G__10220;
count__8592_10204 = G__10221;
i__8593_10205 = G__10222;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.i.apply(null,a__7197__auto__);
};
var i = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return i__delegate.call(this,args__7196__auto__);};
i.cljs$lang$maxFixedArity = 0;
i.cljs$lang$applyTo = (function (arglist__10223){
var args__7196__auto__ = cljs.core.seq(arglist__10223);
return i__delegate(args__7196__auto__);
});
i.cljs$core$IFn$_invoke$arity$variadic = i__delegate;
return i;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.iframe = (function() { 
var iframe__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8598_10224 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8599_10225 = null;var count__8600_10226 = 0;var i__8601_10227 = 0;while(true){
if((i__8601_10227 < count__8600_10226))
{var arg__7198__auto___10228 = cljs.core._nth.call(null,chunk__8599_10225,i__8601_10227);a__7197__auto__.push(arg__7198__auto___10228);
{
var G__10229 = seq__8598_10224;
var G__10230 = chunk__8599_10225;
var G__10231 = count__8600_10226;
var G__10232 = (i__8601_10227 + 1);
seq__8598_10224 = G__10229;
chunk__8599_10225 = G__10230;
count__8600_10226 = G__10231;
i__8601_10227 = G__10232;
continue;
}
} else
{var temp__4092__auto___10233 = cljs.core.seq.call(null,seq__8598_10224);if(temp__4092__auto___10233)
{var seq__8598_10234__$1 = temp__4092__auto___10233;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8598_10234__$1))
{var c__5632__auto___10235 = cljs.core.chunk_first.call(null,seq__8598_10234__$1);{
var G__10236 = cljs.core.chunk_rest.call(null,seq__8598_10234__$1);
var G__10237 = c__5632__auto___10235;
var G__10238 = cljs.core.count.call(null,c__5632__auto___10235);
var G__10239 = 0;
seq__8598_10224 = G__10236;
chunk__8599_10225 = G__10237;
count__8600_10226 = G__10238;
i__8601_10227 = G__10239;
continue;
}
} else
{var arg__7198__auto___10240 = cljs.core.first.call(null,seq__8598_10234__$1);a__7197__auto__.push(arg__7198__auto___10240);
{
var G__10241 = cljs.core.next.call(null,seq__8598_10234__$1);
var G__10242 = null;
var G__10243 = 0;
var G__10244 = 0;
seq__8598_10224 = G__10241;
chunk__8599_10225 = G__10242;
count__8600_10226 = G__10243;
i__8601_10227 = G__10244;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.iframe.apply(null,a__7197__auto__);
};
var iframe = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return iframe__delegate.call(this,args__7196__auto__);};
iframe.cljs$lang$maxFixedArity = 0;
iframe.cljs$lang$applyTo = (function (arglist__10245){
var args__7196__auto__ = cljs.core.seq(arglist__10245);
return iframe__delegate(args__7196__auto__);
});
iframe.cljs$core$IFn$_invoke$arity$variadic = iframe__delegate;
return iframe;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.img = (function() { 
var img__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8606_10246 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8607_10247 = null;var count__8608_10248 = 0;var i__8609_10249 = 0;while(true){
if((i__8609_10249 < count__8608_10248))
{var arg__7198__auto___10250 = cljs.core._nth.call(null,chunk__8607_10247,i__8609_10249);a__7197__auto__.push(arg__7198__auto___10250);
{
var G__10251 = seq__8606_10246;
var G__10252 = chunk__8607_10247;
var G__10253 = count__8608_10248;
var G__10254 = (i__8609_10249 + 1);
seq__8606_10246 = G__10251;
chunk__8607_10247 = G__10252;
count__8608_10248 = G__10253;
i__8609_10249 = G__10254;
continue;
}
} else
{var temp__4092__auto___10255 = cljs.core.seq.call(null,seq__8606_10246);if(temp__4092__auto___10255)
{var seq__8606_10256__$1 = temp__4092__auto___10255;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8606_10256__$1))
{var c__5632__auto___10257 = cljs.core.chunk_first.call(null,seq__8606_10256__$1);{
var G__10258 = cljs.core.chunk_rest.call(null,seq__8606_10256__$1);
var G__10259 = c__5632__auto___10257;
var G__10260 = cljs.core.count.call(null,c__5632__auto___10257);
var G__10261 = 0;
seq__8606_10246 = G__10258;
chunk__8607_10247 = G__10259;
count__8608_10248 = G__10260;
i__8609_10249 = G__10261;
continue;
}
} else
{var arg__7198__auto___10262 = cljs.core.first.call(null,seq__8606_10256__$1);a__7197__auto__.push(arg__7198__auto___10262);
{
var G__10263 = cljs.core.next.call(null,seq__8606_10256__$1);
var G__10264 = null;
var G__10265 = 0;
var G__10266 = 0;
seq__8606_10246 = G__10263;
chunk__8607_10247 = G__10264;
count__8608_10248 = G__10265;
i__8609_10249 = G__10266;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.img.apply(null,a__7197__auto__);
};
var img = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return img__delegate.call(this,args__7196__auto__);};
img.cljs$lang$maxFixedArity = 0;
img.cljs$lang$applyTo = (function (arglist__10267){
var args__7196__auto__ = cljs.core.seq(arglist__10267);
return img__delegate(args__7196__auto__);
});
img.cljs$core$IFn$_invoke$arity$variadic = img__delegate;
return img;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.input = (function() { 
var input__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8614_10268 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8615_10269 = null;var count__8616_10270 = 0;var i__8617_10271 = 0;while(true){
if((i__8617_10271 < count__8616_10270))
{var arg__7198__auto___10272 = cljs.core._nth.call(null,chunk__8615_10269,i__8617_10271);a__7197__auto__.push(arg__7198__auto___10272);
{
var G__10273 = seq__8614_10268;
var G__10274 = chunk__8615_10269;
var G__10275 = count__8616_10270;
var G__10276 = (i__8617_10271 + 1);
seq__8614_10268 = G__10273;
chunk__8615_10269 = G__10274;
count__8616_10270 = G__10275;
i__8617_10271 = G__10276;
continue;
}
} else
{var temp__4092__auto___10277 = cljs.core.seq.call(null,seq__8614_10268);if(temp__4092__auto___10277)
{var seq__8614_10278__$1 = temp__4092__auto___10277;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8614_10278__$1))
{var c__5632__auto___10279 = cljs.core.chunk_first.call(null,seq__8614_10278__$1);{
var G__10280 = cljs.core.chunk_rest.call(null,seq__8614_10278__$1);
var G__10281 = c__5632__auto___10279;
var G__10282 = cljs.core.count.call(null,c__5632__auto___10279);
var G__10283 = 0;
seq__8614_10268 = G__10280;
chunk__8615_10269 = G__10281;
count__8616_10270 = G__10282;
i__8617_10271 = G__10283;
continue;
}
} else
{var arg__7198__auto___10284 = cljs.core.first.call(null,seq__8614_10278__$1);a__7197__auto__.push(arg__7198__auto___10284);
{
var G__10285 = cljs.core.next.call(null,seq__8614_10278__$1);
var G__10286 = null;
var G__10287 = 0;
var G__10288 = 0;
seq__8614_10268 = G__10285;
chunk__8615_10269 = G__10286;
count__8616_10270 = G__10287;
i__8617_10271 = G__10288;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.input.apply(null,a__7197__auto__);
};
var input = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return input__delegate.call(this,args__7196__auto__);};
input.cljs$lang$maxFixedArity = 0;
input.cljs$lang$applyTo = (function (arglist__10289){
var args__7196__auto__ = cljs.core.seq(arglist__10289);
return input__delegate(args__7196__auto__);
});
input.cljs$core$IFn$_invoke$arity$variadic = input__delegate;
return input;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.ins = (function() { 
var ins__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8622_10290 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8623_10291 = null;var count__8624_10292 = 0;var i__8625_10293 = 0;while(true){
if((i__8625_10293 < count__8624_10292))
{var arg__7198__auto___10294 = cljs.core._nth.call(null,chunk__8623_10291,i__8625_10293);a__7197__auto__.push(arg__7198__auto___10294);
{
var G__10295 = seq__8622_10290;
var G__10296 = chunk__8623_10291;
var G__10297 = count__8624_10292;
var G__10298 = (i__8625_10293 + 1);
seq__8622_10290 = G__10295;
chunk__8623_10291 = G__10296;
count__8624_10292 = G__10297;
i__8625_10293 = G__10298;
continue;
}
} else
{var temp__4092__auto___10299 = cljs.core.seq.call(null,seq__8622_10290);if(temp__4092__auto___10299)
{var seq__8622_10300__$1 = temp__4092__auto___10299;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8622_10300__$1))
{var c__5632__auto___10301 = cljs.core.chunk_first.call(null,seq__8622_10300__$1);{
var G__10302 = cljs.core.chunk_rest.call(null,seq__8622_10300__$1);
var G__10303 = c__5632__auto___10301;
var G__10304 = cljs.core.count.call(null,c__5632__auto___10301);
var G__10305 = 0;
seq__8622_10290 = G__10302;
chunk__8623_10291 = G__10303;
count__8624_10292 = G__10304;
i__8625_10293 = G__10305;
continue;
}
} else
{var arg__7198__auto___10306 = cljs.core.first.call(null,seq__8622_10300__$1);a__7197__auto__.push(arg__7198__auto___10306);
{
var G__10307 = cljs.core.next.call(null,seq__8622_10300__$1);
var G__10308 = null;
var G__10309 = 0;
var G__10310 = 0;
seq__8622_10290 = G__10307;
chunk__8623_10291 = G__10308;
count__8624_10292 = G__10309;
i__8625_10293 = G__10310;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.ins.apply(null,a__7197__auto__);
};
var ins = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ins__delegate.call(this,args__7196__auto__);};
ins.cljs$lang$maxFixedArity = 0;
ins.cljs$lang$applyTo = (function (arglist__10311){
var args__7196__auto__ = cljs.core.seq(arglist__10311);
return ins__delegate(args__7196__auto__);
});
ins.cljs$core$IFn$_invoke$arity$variadic = ins__delegate;
return ins;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.kbd = (function() { 
var kbd__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8630_10312 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8631_10313 = null;var count__8632_10314 = 0;var i__8633_10315 = 0;while(true){
if((i__8633_10315 < count__8632_10314))
{var arg__7198__auto___10316 = cljs.core._nth.call(null,chunk__8631_10313,i__8633_10315);a__7197__auto__.push(arg__7198__auto___10316);
{
var G__10317 = seq__8630_10312;
var G__10318 = chunk__8631_10313;
var G__10319 = count__8632_10314;
var G__10320 = (i__8633_10315 + 1);
seq__8630_10312 = G__10317;
chunk__8631_10313 = G__10318;
count__8632_10314 = G__10319;
i__8633_10315 = G__10320;
continue;
}
} else
{var temp__4092__auto___10321 = cljs.core.seq.call(null,seq__8630_10312);if(temp__4092__auto___10321)
{var seq__8630_10322__$1 = temp__4092__auto___10321;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8630_10322__$1))
{var c__5632__auto___10323 = cljs.core.chunk_first.call(null,seq__8630_10322__$1);{
var G__10324 = cljs.core.chunk_rest.call(null,seq__8630_10322__$1);
var G__10325 = c__5632__auto___10323;
var G__10326 = cljs.core.count.call(null,c__5632__auto___10323);
var G__10327 = 0;
seq__8630_10312 = G__10324;
chunk__8631_10313 = G__10325;
count__8632_10314 = G__10326;
i__8633_10315 = G__10327;
continue;
}
} else
{var arg__7198__auto___10328 = cljs.core.first.call(null,seq__8630_10322__$1);a__7197__auto__.push(arg__7198__auto___10328);
{
var G__10329 = cljs.core.next.call(null,seq__8630_10322__$1);
var G__10330 = null;
var G__10331 = 0;
var G__10332 = 0;
seq__8630_10312 = G__10329;
chunk__8631_10313 = G__10330;
count__8632_10314 = G__10331;
i__8633_10315 = G__10332;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.kbd.apply(null,a__7197__auto__);
};
var kbd = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return kbd__delegate.call(this,args__7196__auto__);};
kbd.cljs$lang$maxFixedArity = 0;
kbd.cljs$lang$applyTo = (function (arglist__10333){
var args__7196__auto__ = cljs.core.seq(arglist__10333);
return kbd__delegate(args__7196__auto__);
});
kbd.cljs$core$IFn$_invoke$arity$variadic = kbd__delegate;
return kbd;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.keygen = (function() { 
var keygen__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8638_10334 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8639_10335 = null;var count__8640_10336 = 0;var i__8641_10337 = 0;while(true){
if((i__8641_10337 < count__8640_10336))
{var arg__7198__auto___10338 = cljs.core._nth.call(null,chunk__8639_10335,i__8641_10337);a__7197__auto__.push(arg__7198__auto___10338);
{
var G__10339 = seq__8638_10334;
var G__10340 = chunk__8639_10335;
var G__10341 = count__8640_10336;
var G__10342 = (i__8641_10337 + 1);
seq__8638_10334 = G__10339;
chunk__8639_10335 = G__10340;
count__8640_10336 = G__10341;
i__8641_10337 = G__10342;
continue;
}
} else
{var temp__4092__auto___10343 = cljs.core.seq.call(null,seq__8638_10334);if(temp__4092__auto___10343)
{var seq__8638_10344__$1 = temp__4092__auto___10343;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8638_10344__$1))
{var c__5632__auto___10345 = cljs.core.chunk_first.call(null,seq__8638_10344__$1);{
var G__10346 = cljs.core.chunk_rest.call(null,seq__8638_10344__$1);
var G__10347 = c__5632__auto___10345;
var G__10348 = cljs.core.count.call(null,c__5632__auto___10345);
var G__10349 = 0;
seq__8638_10334 = G__10346;
chunk__8639_10335 = G__10347;
count__8640_10336 = G__10348;
i__8641_10337 = G__10349;
continue;
}
} else
{var arg__7198__auto___10350 = cljs.core.first.call(null,seq__8638_10344__$1);a__7197__auto__.push(arg__7198__auto___10350);
{
var G__10351 = cljs.core.next.call(null,seq__8638_10344__$1);
var G__10352 = null;
var G__10353 = 0;
var G__10354 = 0;
seq__8638_10334 = G__10351;
chunk__8639_10335 = G__10352;
count__8640_10336 = G__10353;
i__8641_10337 = G__10354;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.keygen.apply(null,a__7197__auto__);
};
var keygen = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return keygen__delegate.call(this,args__7196__auto__);};
keygen.cljs$lang$maxFixedArity = 0;
keygen.cljs$lang$applyTo = (function (arglist__10355){
var args__7196__auto__ = cljs.core.seq(arglist__10355);
return keygen__delegate(args__7196__auto__);
});
keygen.cljs$core$IFn$_invoke$arity$variadic = keygen__delegate;
return keygen;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.label = (function() { 
var label__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8646_10356 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8647_10357 = null;var count__8648_10358 = 0;var i__8649_10359 = 0;while(true){
if((i__8649_10359 < count__8648_10358))
{var arg__7198__auto___10360 = cljs.core._nth.call(null,chunk__8647_10357,i__8649_10359);a__7197__auto__.push(arg__7198__auto___10360);
{
var G__10361 = seq__8646_10356;
var G__10362 = chunk__8647_10357;
var G__10363 = count__8648_10358;
var G__10364 = (i__8649_10359 + 1);
seq__8646_10356 = G__10361;
chunk__8647_10357 = G__10362;
count__8648_10358 = G__10363;
i__8649_10359 = G__10364;
continue;
}
} else
{var temp__4092__auto___10365 = cljs.core.seq.call(null,seq__8646_10356);if(temp__4092__auto___10365)
{var seq__8646_10366__$1 = temp__4092__auto___10365;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8646_10366__$1))
{var c__5632__auto___10367 = cljs.core.chunk_first.call(null,seq__8646_10366__$1);{
var G__10368 = cljs.core.chunk_rest.call(null,seq__8646_10366__$1);
var G__10369 = c__5632__auto___10367;
var G__10370 = cljs.core.count.call(null,c__5632__auto___10367);
var G__10371 = 0;
seq__8646_10356 = G__10368;
chunk__8647_10357 = G__10369;
count__8648_10358 = G__10370;
i__8649_10359 = G__10371;
continue;
}
} else
{var arg__7198__auto___10372 = cljs.core.first.call(null,seq__8646_10366__$1);a__7197__auto__.push(arg__7198__auto___10372);
{
var G__10373 = cljs.core.next.call(null,seq__8646_10366__$1);
var G__10374 = null;
var G__10375 = 0;
var G__10376 = 0;
seq__8646_10356 = G__10373;
chunk__8647_10357 = G__10374;
count__8648_10358 = G__10375;
i__8649_10359 = G__10376;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.label.apply(null,a__7197__auto__);
};
var label = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return label__delegate.call(this,args__7196__auto__);};
label.cljs$lang$maxFixedArity = 0;
label.cljs$lang$applyTo = (function (arglist__10377){
var args__7196__auto__ = cljs.core.seq(arglist__10377);
return label__delegate(args__7196__auto__);
});
label.cljs$core$IFn$_invoke$arity$variadic = label__delegate;
return label;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.legend = (function() { 
var legend__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8654_10378 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8655_10379 = null;var count__8656_10380 = 0;var i__8657_10381 = 0;while(true){
if((i__8657_10381 < count__8656_10380))
{var arg__7198__auto___10382 = cljs.core._nth.call(null,chunk__8655_10379,i__8657_10381);a__7197__auto__.push(arg__7198__auto___10382);
{
var G__10383 = seq__8654_10378;
var G__10384 = chunk__8655_10379;
var G__10385 = count__8656_10380;
var G__10386 = (i__8657_10381 + 1);
seq__8654_10378 = G__10383;
chunk__8655_10379 = G__10384;
count__8656_10380 = G__10385;
i__8657_10381 = G__10386;
continue;
}
} else
{var temp__4092__auto___10387 = cljs.core.seq.call(null,seq__8654_10378);if(temp__4092__auto___10387)
{var seq__8654_10388__$1 = temp__4092__auto___10387;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8654_10388__$1))
{var c__5632__auto___10389 = cljs.core.chunk_first.call(null,seq__8654_10388__$1);{
var G__10390 = cljs.core.chunk_rest.call(null,seq__8654_10388__$1);
var G__10391 = c__5632__auto___10389;
var G__10392 = cljs.core.count.call(null,c__5632__auto___10389);
var G__10393 = 0;
seq__8654_10378 = G__10390;
chunk__8655_10379 = G__10391;
count__8656_10380 = G__10392;
i__8657_10381 = G__10393;
continue;
}
} else
{var arg__7198__auto___10394 = cljs.core.first.call(null,seq__8654_10388__$1);a__7197__auto__.push(arg__7198__auto___10394);
{
var G__10395 = cljs.core.next.call(null,seq__8654_10388__$1);
var G__10396 = null;
var G__10397 = 0;
var G__10398 = 0;
seq__8654_10378 = G__10395;
chunk__8655_10379 = G__10396;
count__8656_10380 = G__10397;
i__8657_10381 = G__10398;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.legend.apply(null,a__7197__auto__);
};
var legend = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return legend__delegate.call(this,args__7196__auto__);};
legend.cljs$lang$maxFixedArity = 0;
legend.cljs$lang$applyTo = (function (arglist__10399){
var args__7196__auto__ = cljs.core.seq(arglist__10399);
return legend__delegate(args__7196__auto__);
});
legend.cljs$core$IFn$_invoke$arity$variadic = legend__delegate;
return legend;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.li = (function() { 
var li__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8662_10400 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8663_10401 = null;var count__8664_10402 = 0;var i__8665_10403 = 0;while(true){
if((i__8665_10403 < count__8664_10402))
{var arg__7198__auto___10404 = cljs.core._nth.call(null,chunk__8663_10401,i__8665_10403);a__7197__auto__.push(arg__7198__auto___10404);
{
var G__10405 = seq__8662_10400;
var G__10406 = chunk__8663_10401;
var G__10407 = count__8664_10402;
var G__10408 = (i__8665_10403 + 1);
seq__8662_10400 = G__10405;
chunk__8663_10401 = G__10406;
count__8664_10402 = G__10407;
i__8665_10403 = G__10408;
continue;
}
} else
{var temp__4092__auto___10409 = cljs.core.seq.call(null,seq__8662_10400);if(temp__4092__auto___10409)
{var seq__8662_10410__$1 = temp__4092__auto___10409;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8662_10410__$1))
{var c__5632__auto___10411 = cljs.core.chunk_first.call(null,seq__8662_10410__$1);{
var G__10412 = cljs.core.chunk_rest.call(null,seq__8662_10410__$1);
var G__10413 = c__5632__auto___10411;
var G__10414 = cljs.core.count.call(null,c__5632__auto___10411);
var G__10415 = 0;
seq__8662_10400 = G__10412;
chunk__8663_10401 = G__10413;
count__8664_10402 = G__10414;
i__8665_10403 = G__10415;
continue;
}
} else
{var arg__7198__auto___10416 = cljs.core.first.call(null,seq__8662_10410__$1);a__7197__auto__.push(arg__7198__auto___10416);
{
var G__10417 = cljs.core.next.call(null,seq__8662_10410__$1);
var G__10418 = null;
var G__10419 = 0;
var G__10420 = 0;
seq__8662_10400 = G__10417;
chunk__8663_10401 = G__10418;
count__8664_10402 = G__10419;
i__8665_10403 = G__10420;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.li.apply(null,a__7197__auto__);
};
var li = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return li__delegate.call(this,args__7196__auto__);};
li.cljs$lang$maxFixedArity = 0;
li.cljs$lang$applyTo = (function (arglist__10421){
var args__7196__auto__ = cljs.core.seq(arglist__10421);
return li__delegate(args__7196__auto__);
});
li.cljs$core$IFn$_invoke$arity$variadic = li__delegate;
return li;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.link = (function() { 
var link__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8670_10422 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8671_10423 = null;var count__8672_10424 = 0;var i__8673_10425 = 0;while(true){
if((i__8673_10425 < count__8672_10424))
{var arg__7198__auto___10426 = cljs.core._nth.call(null,chunk__8671_10423,i__8673_10425);a__7197__auto__.push(arg__7198__auto___10426);
{
var G__10427 = seq__8670_10422;
var G__10428 = chunk__8671_10423;
var G__10429 = count__8672_10424;
var G__10430 = (i__8673_10425 + 1);
seq__8670_10422 = G__10427;
chunk__8671_10423 = G__10428;
count__8672_10424 = G__10429;
i__8673_10425 = G__10430;
continue;
}
} else
{var temp__4092__auto___10431 = cljs.core.seq.call(null,seq__8670_10422);if(temp__4092__auto___10431)
{var seq__8670_10432__$1 = temp__4092__auto___10431;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8670_10432__$1))
{var c__5632__auto___10433 = cljs.core.chunk_first.call(null,seq__8670_10432__$1);{
var G__10434 = cljs.core.chunk_rest.call(null,seq__8670_10432__$1);
var G__10435 = c__5632__auto___10433;
var G__10436 = cljs.core.count.call(null,c__5632__auto___10433);
var G__10437 = 0;
seq__8670_10422 = G__10434;
chunk__8671_10423 = G__10435;
count__8672_10424 = G__10436;
i__8673_10425 = G__10437;
continue;
}
} else
{var arg__7198__auto___10438 = cljs.core.first.call(null,seq__8670_10432__$1);a__7197__auto__.push(arg__7198__auto___10438);
{
var G__10439 = cljs.core.next.call(null,seq__8670_10432__$1);
var G__10440 = null;
var G__10441 = 0;
var G__10442 = 0;
seq__8670_10422 = G__10439;
chunk__8671_10423 = G__10440;
count__8672_10424 = G__10441;
i__8673_10425 = G__10442;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.link.apply(null,a__7197__auto__);
};
var link = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return link__delegate.call(this,args__7196__auto__);};
link.cljs$lang$maxFixedArity = 0;
link.cljs$lang$applyTo = (function (arglist__10443){
var args__7196__auto__ = cljs.core.seq(arglist__10443);
return link__delegate(args__7196__auto__);
});
link.cljs$core$IFn$_invoke$arity$variadic = link__delegate;
return link;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.main = (function() { 
var main__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8678_10444 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8679_10445 = null;var count__8680_10446 = 0;var i__8681_10447 = 0;while(true){
if((i__8681_10447 < count__8680_10446))
{var arg__7198__auto___10448 = cljs.core._nth.call(null,chunk__8679_10445,i__8681_10447);a__7197__auto__.push(arg__7198__auto___10448);
{
var G__10449 = seq__8678_10444;
var G__10450 = chunk__8679_10445;
var G__10451 = count__8680_10446;
var G__10452 = (i__8681_10447 + 1);
seq__8678_10444 = G__10449;
chunk__8679_10445 = G__10450;
count__8680_10446 = G__10451;
i__8681_10447 = G__10452;
continue;
}
} else
{var temp__4092__auto___10453 = cljs.core.seq.call(null,seq__8678_10444);if(temp__4092__auto___10453)
{var seq__8678_10454__$1 = temp__4092__auto___10453;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8678_10454__$1))
{var c__5632__auto___10455 = cljs.core.chunk_first.call(null,seq__8678_10454__$1);{
var G__10456 = cljs.core.chunk_rest.call(null,seq__8678_10454__$1);
var G__10457 = c__5632__auto___10455;
var G__10458 = cljs.core.count.call(null,c__5632__auto___10455);
var G__10459 = 0;
seq__8678_10444 = G__10456;
chunk__8679_10445 = G__10457;
count__8680_10446 = G__10458;
i__8681_10447 = G__10459;
continue;
}
} else
{var arg__7198__auto___10460 = cljs.core.first.call(null,seq__8678_10454__$1);a__7197__auto__.push(arg__7198__auto___10460);
{
var G__10461 = cljs.core.next.call(null,seq__8678_10454__$1);
var G__10462 = null;
var G__10463 = 0;
var G__10464 = 0;
seq__8678_10444 = G__10461;
chunk__8679_10445 = G__10462;
count__8680_10446 = G__10463;
i__8681_10447 = G__10464;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.main.apply(null,a__7197__auto__);
};
var main = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return main__delegate.call(this,args__7196__auto__);};
main.cljs$lang$maxFixedArity = 0;
main.cljs$lang$applyTo = (function (arglist__10465){
var args__7196__auto__ = cljs.core.seq(arglist__10465);
return main__delegate(args__7196__auto__);
});
main.cljs$core$IFn$_invoke$arity$variadic = main__delegate;
return main;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.map = (function() { 
var map__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8686_10466 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8687_10467 = null;var count__8688_10468 = 0;var i__8689_10469 = 0;while(true){
if((i__8689_10469 < count__8688_10468))
{var arg__7198__auto___10470 = cljs.core._nth.call(null,chunk__8687_10467,i__8689_10469);a__7197__auto__.push(arg__7198__auto___10470);
{
var G__10471 = seq__8686_10466;
var G__10472 = chunk__8687_10467;
var G__10473 = count__8688_10468;
var G__10474 = (i__8689_10469 + 1);
seq__8686_10466 = G__10471;
chunk__8687_10467 = G__10472;
count__8688_10468 = G__10473;
i__8689_10469 = G__10474;
continue;
}
} else
{var temp__4092__auto___10475 = cljs.core.seq.call(null,seq__8686_10466);if(temp__4092__auto___10475)
{var seq__8686_10476__$1 = temp__4092__auto___10475;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8686_10476__$1))
{var c__5632__auto___10477 = cljs.core.chunk_first.call(null,seq__8686_10476__$1);{
var G__10478 = cljs.core.chunk_rest.call(null,seq__8686_10476__$1);
var G__10479 = c__5632__auto___10477;
var G__10480 = cljs.core.count.call(null,c__5632__auto___10477);
var G__10481 = 0;
seq__8686_10466 = G__10478;
chunk__8687_10467 = G__10479;
count__8688_10468 = G__10480;
i__8689_10469 = G__10481;
continue;
}
} else
{var arg__7198__auto___10482 = cljs.core.first.call(null,seq__8686_10476__$1);a__7197__auto__.push(arg__7198__auto___10482);
{
var G__10483 = cljs.core.next.call(null,seq__8686_10476__$1);
var G__10484 = null;
var G__10485 = 0;
var G__10486 = 0;
seq__8686_10466 = G__10483;
chunk__8687_10467 = G__10484;
count__8688_10468 = G__10485;
i__8689_10469 = G__10486;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.map.apply(null,a__7197__auto__);
};
var map = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return map__delegate.call(this,args__7196__auto__);};
map.cljs$lang$maxFixedArity = 0;
map.cljs$lang$applyTo = (function (arglist__10487){
var args__7196__auto__ = cljs.core.seq(arglist__10487);
return map__delegate(args__7196__auto__);
});
map.cljs$core$IFn$_invoke$arity$variadic = map__delegate;
return map;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.mark = (function() { 
var mark__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8694_10488 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8695_10489 = null;var count__8696_10490 = 0;var i__8697_10491 = 0;while(true){
if((i__8697_10491 < count__8696_10490))
{var arg__7198__auto___10492 = cljs.core._nth.call(null,chunk__8695_10489,i__8697_10491);a__7197__auto__.push(arg__7198__auto___10492);
{
var G__10493 = seq__8694_10488;
var G__10494 = chunk__8695_10489;
var G__10495 = count__8696_10490;
var G__10496 = (i__8697_10491 + 1);
seq__8694_10488 = G__10493;
chunk__8695_10489 = G__10494;
count__8696_10490 = G__10495;
i__8697_10491 = G__10496;
continue;
}
} else
{var temp__4092__auto___10497 = cljs.core.seq.call(null,seq__8694_10488);if(temp__4092__auto___10497)
{var seq__8694_10498__$1 = temp__4092__auto___10497;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8694_10498__$1))
{var c__5632__auto___10499 = cljs.core.chunk_first.call(null,seq__8694_10498__$1);{
var G__10500 = cljs.core.chunk_rest.call(null,seq__8694_10498__$1);
var G__10501 = c__5632__auto___10499;
var G__10502 = cljs.core.count.call(null,c__5632__auto___10499);
var G__10503 = 0;
seq__8694_10488 = G__10500;
chunk__8695_10489 = G__10501;
count__8696_10490 = G__10502;
i__8697_10491 = G__10503;
continue;
}
} else
{var arg__7198__auto___10504 = cljs.core.first.call(null,seq__8694_10498__$1);a__7197__auto__.push(arg__7198__auto___10504);
{
var G__10505 = cljs.core.next.call(null,seq__8694_10498__$1);
var G__10506 = null;
var G__10507 = 0;
var G__10508 = 0;
seq__8694_10488 = G__10505;
chunk__8695_10489 = G__10506;
count__8696_10490 = G__10507;
i__8697_10491 = G__10508;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.mark.apply(null,a__7197__auto__);
};
var mark = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return mark__delegate.call(this,args__7196__auto__);};
mark.cljs$lang$maxFixedArity = 0;
mark.cljs$lang$applyTo = (function (arglist__10509){
var args__7196__auto__ = cljs.core.seq(arglist__10509);
return mark__delegate(args__7196__auto__);
});
mark.cljs$core$IFn$_invoke$arity$variadic = mark__delegate;
return mark;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.menu = (function() { 
var menu__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8702_10510 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8703_10511 = null;var count__8704_10512 = 0;var i__8705_10513 = 0;while(true){
if((i__8705_10513 < count__8704_10512))
{var arg__7198__auto___10514 = cljs.core._nth.call(null,chunk__8703_10511,i__8705_10513);a__7197__auto__.push(arg__7198__auto___10514);
{
var G__10515 = seq__8702_10510;
var G__10516 = chunk__8703_10511;
var G__10517 = count__8704_10512;
var G__10518 = (i__8705_10513 + 1);
seq__8702_10510 = G__10515;
chunk__8703_10511 = G__10516;
count__8704_10512 = G__10517;
i__8705_10513 = G__10518;
continue;
}
} else
{var temp__4092__auto___10519 = cljs.core.seq.call(null,seq__8702_10510);if(temp__4092__auto___10519)
{var seq__8702_10520__$1 = temp__4092__auto___10519;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8702_10520__$1))
{var c__5632__auto___10521 = cljs.core.chunk_first.call(null,seq__8702_10520__$1);{
var G__10522 = cljs.core.chunk_rest.call(null,seq__8702_10520__$1);
var G__10523 = c__5632__auto___10521;
var G__10524 = cljs.core.count.call(null,c__5632__auto___10521);
var G__10525 = 0;
seq__8702_10510 = G__10522;
chunk__8703_10511 = G__10523;
count__8704_10512 = G__10524;
i__8705_10513 = G__10525;
continue;
}
} else
{var arg__7198__auto___10526 = cljs.core.first.call(null,seq__8702_10520__$1);a__7197__auto__.push(arg__7198__auto___10526);
{
var G__10527 = cljs.core.next.call(null,seq__8702_10520__$1);
var G__10528 = null;
var G__10529 = 0;
var G__10530 = 0;
seq__8702_10510 = G__10527;
chunk__8703_10511 = G__10528;
count__8704_10512 = G__10529;
i__8705_10513 = G__10530;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.menu.apply(null,a__7197__auto__);
};
var menu = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return menu__delegate.call(this,args__7196__auto__);};
menu.cljs$lang$maxFixedArity = 0;
menu.cljs$lang$applyTo = (function (arglist__10531){
var args__7196__auto__ = cljs.core.seq(arglist__10531);
return menu__delegate(args__7196__auto__);
});
menu.cljs$core$IFn$_invoke$arity$variadic = menu__delegate;
return menu;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.menuitem = (function() { 
var menuitem__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8710_10532 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8711_10533 = null;var count__8712_10534 = 0;var i__8713_10535 = 0;while(true){
if((i__8713_10535 < count__8712_10534))
{var arg__7198__auto___10536 = cljs.core._nth.call(null,chunk__8711_10533,i__8713_10535);a__7197__auto__.push(arg__7198__auto___10536);
{
var G__10537 = seq__8710_10532;
var G__10538 = chunk__8711_10533;
var G__10539 = count__8712_10534;
var G__10540 = (i__8713_10535 + 1);
seq__8710_10532 = G__10537;
chunk__8711_10533 = G__10538;
count__8712_10534 = G__10539;
i__8713_10535 = G__10540;
continue;
}
} else
{var temp__4092__auto___10541 = cljs.core.seq.call(null,seq__8710_10532);if(temp__4092__auto___10541)
{var seq__8710_10542__$1 = temp__4092__auto___10541;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8710_10542__$1))
{var c__5632__auto___10543 = cljs.core.chunk_first.call(null,seq__8710_10542__$1);{
var G__10544 = cljs.core.chunk_rest.call(null,seq__8710_10542__$1);
var G__10545 = c__5632__auto___10543;
var G__10546 = cljs.core.count.call(null,c__5632__auto___10543);
var G__10547 = 0;
seq__8710_10532 = G__10544;
chunk__8711_10533 = G__10545;
count__8712_10534 = G__10546;
i__8713_10535 = G__10547;
continue;
}
} else
{var arg__7198__auto___10548 = cljs.core.first.call(null,seq__8710_10542__$1);a__7197__auto__.push(arg__7198__auto___10548);
{
var G__10549 = cljs.core.next.call(null,seq__8710_10542__$1);
var G__10550 = null;
var G__10551 = 0;
var G__10552 = 0;
seq__8710_10532 = G__10549;
chunk__8711_10533 = G__10550;
count__8712_10534 = G__10551;
i__8713_10535 = G__10552;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.menuitem.apply(null,a__7197__auto__);
};
var menuitem = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return menuitem__delegate.call(this,args__7196__auto__);};
menuitem.cljs$lang$maxFixedArity = 0;
menuitem.cljs$lang$applyTo = (function (arglist__10553){
var args__7196__auto__ = cljs.core.seq(arglist__10553);
return menuitem__delegate(args__7196__auto__);
});
menuitem.cljs$core$IFn$_invoke$arity$variadic = menuitem__delegate;
return menuitem;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.meta = (function() { 
var meta__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8718_10554 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8719_10555 = null;var count__8720_10556 = 0;var i__8721_10557 = 0;while(true){
if((i__8721_10557 < count__8720_10556))
{var arg__7198__auto___10558 = cljs.core._nth.call(null,chunk__8719_10555,i__8721_10557);a__7197__auto__.push(arg__7198__auto___10558);
{
var G__10559 = seq__8718_10554;
var G__10560 = chunk__8719_10555;
var G__10561 = count__8720_10556;
var G__10562 = (i__8721_10557 + 1);
seq__8718_10554 = G__10559;
chunk__8719_10555 = G__10560;
count__8720_10556 = G__10561;
i__8721_10557 = G__10562;
continue;
}
} else
{var temp__4092__auto___10563 = cljs.core.seq.call(null,seq__8718_10554);if(temp__4092__auto___10563)
{var seq__8718_10564__$1 = temp__4092__auto___10563;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8718_10564__$1))
{var c__5632__auto___10565 = cljs.core.chunk_first.call(null,seq__8718_10564__$1);{
var G__10566 = cljs.core.chunk_rest.call(null,seq__8718_10564__$1);
var G__10567 = c__5632__auto___10565;
var G__10568 = cljs.core.count.call(null,c__5632__auto___10565);
var G__10569 = 0;
seq__8718_10554 = G__10566;
chunk__8719_10555 = G__10567;
count__8720_10556 = G__10568;
i__8721_10557 = G__10569;
continue;
}
} else
{var arg__7198__auto___10570 = cljs.core.first.call(null,seq__8718_10564__$1);a__7197__auto__.push(arg__7198__auto___10570);
{
var G__10571 = cljs.core.next.call(null,seq__8718_10564__$1);
var G__10572 = null;
var G__10573 = 0;
var G__10574 = 0;
seq__8718_10554 = G__10571;
chunk__8719_10555 = G__10572;
count__8720_10556 = G__10573;
i__8721_10557 = G__10574;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.meta.apply(null,a__7197__auto__);
};
var meta = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return meta__delegate.call(this,args__7196__auto__);};
meta.cljs$lang$maxFixedArity = 0;
meta.cljs$lang$applyTo = (function (arglist__10575){
var args__7196__auto__ = cljs.core.seq(arglist__10575);
return meta__delegate(args__7196__auto__);
});
meta.cljs$core$IFn$_invoke$arity$variadic = meta__delegate;
return meta;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.meter = (function() { 
var meter__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8726_10576 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8727_10577 = null;var count__8728_10578 = 0;var i__8729_10579 = 0;while(true){
if((i__8729_10579 < count__8728_10578))
{var arg__7198__auto___10580 = cljs.core._nth.call(null,chunk__8727_10577,i__8729_10579);a__7197__auto__.push(arg__7198__auto___10580);
{
var G__10581 = seq__8726_10576;
var G__10582 = chunk__8727_10577;
var G__10583 = count__8728_10578;
var G__10584 = (i__8729_10579 + 1);
seq__8726_10576 = G__10581;
chunk__8727_10577 = G__10582;
count__8728_10578 = G__10583;
i__8729_10579 = G__10584;
continue;
}
} else
{var temp__4092__auto___10585 = cljs.core.seq.call(null,seq__8726_10576);if(temp__4092__auto___10585)
{var seq__8726_10586__$1 = temp__4092__auto___10585;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8726_10586__$1))
{var c__5632__auto___10587 = cljs.core.chunk_first.call(null,seq__8726_10586__$1);{
var G__10588 = cljs.core.chunk_rest.call(null,seq__8726_10586__$1);
var G__10589 = c__5632__auto___10587;
var G__10590 = cljs.core.count.call(null,c__5632__auto___10587);
var G__10591 = 0;
seq__8726_10576 = G__10588;
chunk__8727_10577 = G__10589;
count__8728_10578 = G__10590;
i__8729_10579 = G__10591;
continue;
}
} else
{var arg__7198__auto___10592 = cljs.core.first.call(null,seq__8726_10586__$1);a__7197__auto__.push(arg__7198__auto___10592);
{
var G__10593 = cljs.core.next.call(null,seq__8726_10586__$1);
var G__10594 = null;
var G__10595 = 0;
var G__10596 = 0;
seq__8726_10576 = G__10593;
chunk__8727_10577 = G__10594;
count__8728_10578 = G__10595;
i__8729_10579 = G__10596;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.meter.apply(null,a__7197__auto__);
};
var meter = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return meter__delegate.call(this,args__7196__auto__);};
meter.cljs$lang$maxFixedArity = 0;
meter.cljs$lang$applyTo = (function (arglist__10597){
var args__7196__auto__ = cljs.core.seq(arglist__10597);
return meter__delegate(args__7196__auto__);
});
meter.cljs$core$IFn$_invoke$arity$variadic = meter__delegate;
return meter;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.nav = (function() { 
var nav__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8734_10598 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8735_10599 = null;var count__8736_10600 = 0;var i__8737_10601 = 0;while(true){
if((i__8737_10601 < count__8736_10600))
{var arg__7198__auto___10602 = cljs.core._nth.call(null,chunk__8735_10599,i__8737_10601);a__7197__auto__.push(arg__7198__auto___10602);
{
var G__10603 = seq__8734_10598;
var G__10604 = chunk__8735_10599;
var G__10605 = count__8736_10600;
var G__10606 = (i__8737_10601 + 1);
seq__8734_10598 = G__10603;
chunk__8735_10599 = G__10604;
count__8736_10600 = G__10605;
i__8737_10601 = G__10606;
continue;
}
} else
{var temp__4092__auto___10607 = cljs.core.seq.call(null,seq__8734_10598);if(temp__4092__auto___10607)
{var seq__8734_10608__$1 = temp__4092__auto___10607;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8734_10608__$1))
{var c__5632__auto___10609 = cljs.core.chunk_first.call(null,seq__8734_10608__$1);{
var G__10610 = cljs.core.chunk_rest.call(null,seq__8734_10608__$1);
var G__10611 = c__5632__auto___10609;
var G__10612 = cljs.core.count.call(null,c__5632__auto___10609);
var G__10613 = 0;
seq__8734_10598 = G__10610;
chunk__8735_10599 = G__10611;
count__8736_10600 = G__10612;
i__8737_10601 = G__10613;
continue;
}
} else
{var arg__7198__auto___10614 = cljs.core.first.call(null,seq__8734_10608__$1);a__7197__auto__.push(arg__7198__auto___10614);
{
var G__10615 = cljs.core.next.call(null,seq__8734_10608__$1);
var G__10616 = null;
var G__10617 = 0;
var G__10618 = 0;
seq__8734_10598 = G__10615;
chunk__8735_10599 = G__10616;
count__8736_10600 = G__10617;
i__8737_10601 = G__10618;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.nav.apply(null,a__7197__auto__);
};
var nav = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return nav__delegate.call(this,args__7196__auto__);};
nav.cljs$lang$maxFixedArity = 0;
nav.cljs$lang$applyTo = (function (arglist__10619){
var args__7196__auto__ = cljs.core.seq(arglist__10619);
return nav__delegate(args__7196__auto__);
});
nav.cljs$core$IFn$_invoke$arity$variadic = nav__delegate;
return nav;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.noscript = (function() { 
var noscript__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8742_10620 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8743_10621 = null;var count__8744_10622 = 0;var i__8745_10623 = 0;while(true){
if((i__8745_10623 < count__8744_10622))
{var arg__7198__auto___10624 = cljs.core._nth.call(null,chunk__8743_10621,i__8745_10623);a__7197__auto__.push(arg__7198__auto___10624);
{
var G__10625 = seq__8742_10620;
var G__10626 = chunk__8743_10621;
var G__10627 = count__8744_10622;
var G__10628 = (i__8745_10623 + 1);
seq__8742_10620 = G__10625;
chunk__8743_10621 = G__10626;
count__8744_10622 = G__10627;
i__8745_10623 = G__10628;
continue;
}
} else
{var temp__4092__auto___10629 = cljs.core.seq.call(null,seq__8742_10620);if(temp__4092__auto___10629)
{var seq__8742_10630__$1 = temp__4092__auto___10629;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8742_10630__$1))
{var c__5632__auto___10631 = cljs.core.chunk_first.call(null,seq__8742_10630__$1);{
var G__10632 = cljs.core.chunk_rest.call(null,seq__8742_10630__$1);
var G__10633 = c__5632__auto___10631;
var G__10634 = cljs.core.count.call(null,c__5632__auto___10631);
var G__10635 = 0;
seq__8742_10620 = G__10632;
chunk__8743_10621 = G__10633;
count__8744_10622 = G__10634;
i__8745_10623 = G__10635;
continue;
}
} else
{var arg__7198__auto___10636 = cljs.core.first.call(null,seq__8742_10630__$1);a__7197__auto__.push(arg__7198__auto___10636);
{
var G__10637 = cljs.core.next.call(null,seq__8742_10630__$1);
var G__10638 = null;
var G__10639 = 0;
var G__10640 = 0;
seq__8742_10620 = G__10637;
chunk__8743_10621 = G__10638;
count__8744_10622 = G__10639;
i__8745_10623 = G__10640;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.noscript.apply(null,a__7197__auto__);
};
var noscript = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return noscript__delegate.call(this,args__7196__auto__);};
noscript.cljs$lang$maxFixedArity = 0;
noscript.cljs$lang$applyTo = (function (arglist__10641){
var args__7196__auto__ = cljs.core.seq(arglist__10641);
return noscript__delegate(args__7196__auto__);
});
noscript.cljs$core$IFn$_invoke$arity$variadic = noscript__delegate;
return noscript;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.object = (function() { 
var object__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8750_10642 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8751_10643 = null;var count__8752_10644 = 0;var i__8753_10645 = 0;while(true){
if((i__8753_10645 < count__8752_10644))
{var arg__7198__auto___10646 = cljs.core._nth.call(null,chunk__8751_10643,i__8753_10645);a__7197__auto__.push(arg__7198__auto___10646);
{
var G__10647 = seq__8750_10642;
var G__10648 = chunk__8751_10643;
var G__10649 = count__8752_10644;
var G__10650 = (i__8753_10645 + 1);
seq__8750_10642 = G__10647;
chunk__8751_10643 = G__10648;
count__8752_10644 = G__10649;
i__8753_10645 = G__10650;
continue;
}
} else
{var temp__4092__auto___10651 = cljs.core.seq.call(null,seq__8750_10642);if(temp__4092__auto___10651)
{var seq__8750_10652__$1 = temp__4092__auto___10651;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8750_10652__$1))
{var c__5632__auto___10653 = cljs.core.chunk_first.call(null,seq__8750_10652__$1);{
var G__10654 = cljs.core.chunk_rest.call(null,seq__8750_10652__$1);
var G__10655 = c__5632__auto___10653;
var G__10656 = cljs.core.count.call(null,c__5632__auto___10653);
var G__10657 = 0;
seq__8750_10642 = G__10654;
chunk__8751_10643 = G__10655;
count__8752_10644 = G__10656;
i__8753_10645 = G__10657;
continue;
}
} else
{var arg__7198__auto___10658 = cljs.core.first.call(null,seq__8750_10652__$1);a__7197__auto__.push(arg__7198__auto___10658);
{
var G__10659 = cljs.core.next.call(null,seq__8750_10652__$1);
var G__10660 = null;
var G__10661 = 0;
var G__10662 = 0;
seq__8750_10642 = G__10659;
chunk__8751_10643 = G__10660;
count__8752_10644 = G__10661;
i__8753_10645 = G__10662;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.object.apply(null,a__7197__auto__);
};
var object = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return object__delegate.call(this,args__7196__auto__);};
object.cljs$lang$maxFixedArity = 0;
object.cljs$lang$applyTo = (function (arglist__10663){
var args__7196__auto__ = cljs.core.seq(arglist__10663);
return object__delegate(args__7196__auto__);
});
object.cljs$core$IFn$_invoke$arity$variadic = object__delegate;
return object;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.ol = (function() { 
var ol__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8758_10664 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8759_10665 = null;var count__8760_10666 = 0;var i__8761_10667 = 0;while(true){
if((i__8761_10667 < count__8760_10666))
{var arg__7198__auto___10668 = cljs.core._nth.call(null,chunk__8759_10665,i__8761_10667);a__7197__auto__.push(arg__7198__auto___10668);
{
var G__10669 = seq__8758_10664;
var G__10670 = chunk__8759_10665;
var G__10671 = count__8760_10666;
var G__10672 = (i__8761_10667 + 1);
seq__8758_10664 = G__10669;
chunk__8759_10665 = G__10670;
count__8760_10666 = G__10671;
i__8761_10667 = G__10672;
continue;
}
} else
{var temp__4092__auto___10673 = cljs.core.seq.call(null,seq__8758_10664);if(temp__4092__auto___10673)
{var seq__8758_10674__$1 = temp__4092__auto___10673;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8758_10674__$1))
{var c__5632__auto___10675 = cljs.core.chunk_first.call(null,seq__8758_10674__$1);{
var G__10676 = cljs.core.chunk_rest.call(null,seq__8758_10674__$1);
var G__10677 = c__5632__auto___10675;
var G__10678 = cljs.core.count.call(null,c__5632__auto___10675);
var G__10679 = 0;
seq__8758_10664 = G__10676;
chunk__8759_10665 = G__10677;
count__8760_10666 = G__10678;
i__8761_10667 = G__10679;
continue;
}
} else
{var arg__7198__auto___10680 = cljs.core.first.call(null,seq__8758_10674__$1);a__7197__auto__.push(arg__7198__auto___10680);
{
var G__10681 = cljs.core.next.call(null,seq__8758_10674__$1);
var G__10682 = null;
var G__10683 = 0;
var G__10684 = 0;
seq__8758_10664 = G__10681;
chunk__8759_10665 = G__10682;
count__8760_10666 = G__10683;
i__8761_10667 = G__10684;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.ol.apply(null,a__7197__auto__);
};
var ol = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ol__delegate.call(this,args__7196__auto__);};
ol.cljs$lang$maxFixedArity = 0;
ol.cljs$lang$applyTo = (function (arglist__10685){
var args__7196__auto__ = cljs.core.seq(arglist__10685);
return ol__delegate(args__7196__auto__);
});
ol.cljs$core$IFn$_invoke$arity$variadic = ol__delegate;
return ol;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.optgroup = (function() { 
var optgroup__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8766_10686 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8767_10687 = null;var count__8768_10688 = 0;var i__8769_10689 = 0;while(true){
if((i__8769_10689 < count__8768_10688))
{var arg__7198__auto___10690 = cljs.core._nth.call(null,chunk__8767_10687,i__8769_10689);a__7197__auto__.push(arg__7198__auto___10690);
{
var G__10691 = seq__8766_10686;
var G__10692 = chunk__8767_10687;
var G__10693 = count__8768_10688;
var G__10694 = (i__8769_10689 + 1);
seq__8766_10686 = G__10691;
chunk__8767_10687 = G__10692;
count__8768_10688 = G__10693;
i__8769_10689 = G__10694;
continue;
}
} else
{var temp__4092__auto___10695 = cljs.core.seq.call(null,seq__8766_10686);if(temp__4092__auto___10695)
{var seq__8766_10696__$1 = temp__4092__auto___10695;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8766_10696__$1))
{var c__5632__auto___10697 = cljs.core.chunk_first.call(null,seq__8766_10696__$1);{
var G__10698 = cljs.core.chunk_rest.call(null,seq__8766_10696__$1);
var G__10699 = c__5632__auto___10697;
var G__10700 = cljs.core.count.call(null,c__5632__auto___10697);
var G__10701 = 0;
seq__8766_10686 = G__10698;
chunk__8767_10687 = G__10699;
count__8768_10688 = G__10700;
i__8769_10689 = G__10701;
continue;
}
} else
{var arg__7198__auto___10702 = cljs.core.first.call(null,seq__8766_10696__$1);a__7197__auto__.push(arg__7198__auto___10702);
{
var G__10703 = cljs.core.next.call(null,seq__8766_10696__$1);
var G__10704 = null;
var G__10705 = 0;
var G__10706 = 0;
seq__8766_10686 = G__10703;
chunk__8767_10687 = G__10704;
count__8768_10688 = G__10705;
i__8769_10689 = G__10706;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.optgroup.apply(null,a__7197__auto__);
};
var optgroup = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return optgroup__delegate.call(this,args__7196__auto__);};
optgroup.cljs$lang$maxFixedArity = 0;
optgroup.cljs$lang$applyTo = (function (arglist__10707){
var args__7196__auto__ = cljs.core.seq(arglist__10707);
return optgroup__delegate(args__7196__auto__);
});
optgroup.cljs$core$IFn$_invoke$arity$variadic = optgroup__delegate;
return optgroup;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.option = (function() { 
var option__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8774_10708 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8775_10709 = null;var count__8776_10710 = 0;var i__8777_10711 = 0;while(true){
if((i__8777_10711 < count__8776_10710))
{var arg__7198__auto___10712 = cljs.core._nth.call(null,chunk__8775_10709,i__8777_10711);a__7197__auto__.push(arg__7198__auto___10712);
{
var G__10713 = seq__8774_10708;
var G__10714 = chunk__8775_10709;
var G__10715 = count__8776_10710;
var G__10716 = (i__8777_10711 + 1);
seq__8774_10708 = G__10713;
chunk__8775_10709 = G__10714;
count__8776_10710 = G__10715;
i__8777_10711 = G__10716;
continue;
}
} else
{var temp__4092__auto___10717 = cljs.core.seq.call(null,seq__8774_10708);if(temp__4092__auto___10717)
{var seq__8774_10718__$1 = temp__4092__auto___10717;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8774_10718__$1))
{var c__5632__auto___10719 = cljs.core.chunk_first.call(null,seq__8774_10718__$1);{
var G__10720 = cljs.core.chunk_rest.call(null,seq__8774_10718__$1);
var G__10721 = c__5632__auto___10719;
var G__10722 = cljs.core.count.call(null,c__5632__auto___10719);
var G__10723 = 0;
seq__8774_10708 = G__10720;
chunk__8775_10709 = G__10721;
count__8776_10710 = G__10722;
i__8777_10711 = G__10723;
continue;
}
} else
{var arg__7198__auto___10724 = cljs.core.first.call(null,seq__8774_10718__$1);a__7197__auto__.push(arg__7198__auto___10724);
{
var G__10725 = cljs.core.next.call(null,seq__8774_10718__$1);
var G__10726 = null;
var G__10727 = 0;
var G__10728 = 0;
seq__8774_10708 = G__10725;
chunk__8775_10709 = G__10726;
count__8776_10710 = G__10727;
i__8777_10711 = G__10728;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.option.apply(null,a__7197__auto__);
};
var option = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return option__delegate.call(this,args__7196__auto__);};
option.cljs$lang$maxFixedArity = 0;
option.cljs$lang$applyTo = (function (arglist__10729){
var args__7196__auto__ = cljs.core.seq(arglist__10729);
return option__delegate(args__7196__auto__);
});
option.cljs$core$IFn$_invoke$arity$variadic = option__delegate;
return option;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.output = (function() { 
var output__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8782_10730 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8783_10731 = null;var count__8784_10732 = 0;var i__8785_10733 = 0;while(true){
if((i__8785_10733 < count__8784_10732))
{var arg__7198__auto___10734 = cljs.core._nth.call(null,chunk__8783_10731,i__8785_10733);a__7197__auto__.push(arg__7198__auto___10734);
{
var G__10735 = seq__8782_10730;
var G__10736 = chunk__8783_10731;
var G__10737 = count__8784_10732;
var G__10738 = (i__8785_10733 + 1);
seq__8782_10730 = G__10735;
chunk__8783_10731 = G__10736;
count__8784_10732 = G__10737;
i__8785_10733 = G__10738;
continue;
}
} else
{var temp__4092__auto___10739 = cljs.core.seq.call(null,seq__8782_10730);if(temp__4092__auto___10739)
{var seq__8782_10740__$1 = temp__4092__auto___10739;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8782_10740__$1))
{var c__5632__auto___10741 = cljs.core.chunk_first.call(null,seq__8782_10740__$1);{
var G__10742 = cljs.core.chunk_rest.call(null,seq__8782_10740__$1);
var G__10743 = c__5632__auto___10741;
var G__10744 = cljs.core.count.call(null,c__5632__auto___10741);
var G__10745 = 0;
seq__8782_10730 = G__10742;
chunk__8783_10731 = G__10743;
count__8784_10732 = G__10744;
i__8785_10733 = G__10745;
continue;
}
} else
{var arg__7198__auto___10746 = cljs.core.first.call(null,seq__8782_10740__$1);a__7197__auto__.push(arg__7198__auto___10746);
{
var G__10747 = cljs.core.next.call(null,seq__8782_10740__$1);
var G__10748 = null;
var G__10749 = 0;
var G__10750 = 0;
seq__8782_10730 = G__10747;
chunk__8783_10731 = G__10748;
count__8784_10732 = G__10749;
i__8785_10733 = G__10750;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.output.apply(null,a__7197__auto__);
};
var output = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return output__delegate.call(this,args__7196__auto__);};
output.cljs$lang$maxFixedArity = 0;
output.cljs$lang$applyTo = (function (arglist__10751){
var args__7196__auto__ = cljs.core.seq(arglist__10751);
return output__delegate(args__7196__auto__);
});
output.cljs$core$IFn$_invoke$arity$variadic = output__delegate;
return output;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.p = (function() { 
var p__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8790_10752 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8791_10753 = null;var count__8792_10754 = 0;var i__8793_10755 = 0;while(true){
if((i__8793_10755 < count__8792_10754))
{var arg__7198__auto___10756 = cljs.core._nth.call(null,chunk__8791_10753,i__8793_10755);a__7197__auto__.push(arg__7198__auto___10756);
{
var G__10757 = seq__8790_10752;
var G__10758 = chunk__8791_10753;
var G__10759 = count__8792_10754;
var G__10760 = (i__8793_10755 + 1);
seq__8790_10752 = G__10757;
chunk__8791_10753 = G__10758;
count__8792_10754 = G__10759;
i__8793_10755 = G__10760;
continue;
}
} else
{var temp__4092__auto___10761 = cljs.core.seq.call(null,seq__8790_10752);if(temp__4092__auto___10761)
{var seq__8790_10762__$1 = temp__4092__auto___10761;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8790_10762__$1))
{var c__5632__auto___10763 = cljs.core.chunk_first.call(null,seq__8790_10762__$1);{
var G__10764 = cljs.core.chunk_rest.call(null,seq__8790_10762__$1);
var G__10765 = c__5632__auto___10763;
var G__10766 = cljs.core.count.call(null,c__5632__auto___10763);
var G__10767 = 0;
seq__8790_10752 = G__10764;
chunk__8791_10753 = G__10765;
count__8792_10754 = G__10766;
i__8793_10755 = G__10767;
continue;
}
} else
{var arg__7198__auto___10768 = cljs.core.first.call(null,seq__8790_10762__$1);a__7197__auto__.push(arg__7198__auto___10768);
{
var G__10769 = cljs.core.next.call(null,seq__8790_10762__$1);
var G__10770 = null;
var G__10771 = 0;
var G__10772 = 0;
seq__8790_10752 = G__10769;
chunk__8791_10753 = G__10770;
count__8792_10754 = G__10771;
i__8793_10755 = G__10772;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.p.apply(null,a__7197__auto__);
};
var p = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return p__delegate.call(this,args__7196__auto__);};
p.cljs$lang$maxFixedArity = 0;
p.cljs$lang$applyTo = (function (arglist__10773){
var args__7196__auto__ = cljs.core.seq(arglist__10773);
return p__delegate(args__7196__auto__);
});
p.cljs$core$IFn$_invoke$arity$variadic = p__delegate;
return p;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.param = (function() { 
var param__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8798_10774 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8799_10775 = null;var count__8800_10776 = 0;var i__8801_10777 = 0;while(true){
if((i__8801_10777 < count__8800_10776))
{var arg__7198__auto___10778 = cljs.core._nth.call(null,chunk__8799_10775,i__8801_10777);a__7197__auto__.push(arg__7198__auto___10778);
{
var G__10779 = seq__8798_10774;
var G__10780 = chunk__8799_10775;
var G__10781 = count__8800_10776;
var G__10782 = (i__8801_10777 + 1);
seq__8798_10774 = G__10779;
chunk__8799_10775 = G__10780;
count__8800_10776 = G__10781;
i__8801_10777 = G__10782;
continue;
}
} else
{var temp__4092__auto___10783 = cljs.core.seq.call(null,seq__8798_10774);if(temp__4092__auto___10783)
{var seq__8798_10784__$1 = temp__4092__auto___10783;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8798_10784__$1))
{var c__5632__auto___10785 = cljs.core.chunk_first.call(null,seq__8798_10784__$1);{
var G__10786 = cljs.core.chunk_rest.call(null,seq__8798_10784__$1);
var G__10787 = c__5632__auto___10785;
var G__10788 = cljs.core.count.call(null,c__5632__auto___10785);
var G__10789 = 0;
seq__8798_10774 = G__10786;
chunk__8799_10775 = G__10787;
count__8800_10776 = G__10788;
i__8801_10777 = G__10789;
continue;
}
} else
{var arg__7198__auto___10790 = cljs.core.first.call(null,seq__8798_10784__$1);a__7197__auto__.push(arg__7198__auto___10790);
{
var G__10791 = cljs.core.next.call(null,seq__8798_10784__$1);
var G__10792 = null;
var G__10793 = 0;
var G__10794 = 0;
seq__8798_10774 = G__10791;
chunk__8799_10775 = G__10792;
count__8800_10776 = G__10793;
i__8801_10777 = G__10794;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.param.apply(null,a__7197__auto__);
};
var param = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return param__delegate.call(this,args__7196__auto__);};
param.cljs$lang$maxFixedArity = 0;
param.cljs$lang$applyTo = (function (arglist__10795){
var args__7196__auto__ = cljs.core.seq(arglist__10795);
return param__delegate(args__7196__auto__);
});
param.cljs$core$IFn$_invoke$arity$variadic = param__delegate;
return param;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.pre = (function() { 
var pre__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8806_10796 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8807_10797 = null;var count__8808_10798 = 0;var i__8809_10799 = 0;while(true){
if((i__8809_10799 < count__8808_10798))
{var arg__7198__auto___10800 = cljs.core._nth.call(null,chunk__8807_10797,i__8809_10799);a__7197__auto__.push(arg__7198__auto___10800);
{
var G__10801 = seq__8806_10796;
var G__10802 = chunk__8807_10797;
var G__10803 = count__8808_10798;
var G__10804 = (i__8809_10799 + 1);
seq__8806_10796 = G__10801;
chunk__8807_10797 = G__10802;
count__8808_10798 = G__10803;
i__8809_10799 = G__10804;
continue;
}
} else
{var temp__4092__auto___10805 = cljs.core.seq.call(null,seq__8806_10796);if(temp__4092__auto___10805)
{var seq__8806_10806__$1 = temp__4092__auto___10805;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8806_10806__$1))
{var c__5632__auto___10807 = cljs.core.chunk_first.call(null,seq__8806_10806__$1);{
var G__10808 = cljs.core.chunk_rest.call(null,seq__8806_10806__$1);
var G__10809 = c__5632__auto___10807;
var G__10810 = cljs.core.count.call(null,c__5632__auto___10807);
var G__10811 = 0;
seq__8806_10796 = G__10808;
chunk__8807_10797 = G__10809;
count__8808_10798 = G__10810;
i__8809_10799 = G__10811;
continue;
}
} else
{var arg__7198__auto___10812 = cljs.core.first.call(null,seq__8806_10806__$1);a__7197__auto__.push(arg__7198__auto___10812);
{
var G__10813 = cljs.core.next.call(null,seq__8806_10806__$1);
var G__10814 = null;
var G__10815 = 0;
var G__10816 = 0;
seq__8806_10796 = G__10813;
chunk__8807_10797 = G__10814;
count__8808_10798 = G__10815;
i__8809_10799 = G__10816;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.pre.apply(null,a__7197__auto__);
};
var pre = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return pre__delegate.call(this,args__7196__auto__);};
pre.cljs$lang$maxFixedArity = 0;
pre.cljs$lang$applyTo = (function (arglist__10817){
var args__7196__auto__ = cljs.core.seq(arglist__10817);
return pre__delegate(args__7196__auto__);
});
pre.cljs$core$IFn$_invoke$arity$variadic = pre__delegate;
return pre;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.progress = (function() { 
var progress__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8814_10818 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8815_10819 = null;var count__8816_10820 = 0;var i__8817_10821 = 0;while(true){
if((i__8817_10821 < count__8816_10820))
{var arg__7198__auto___10822 = cljs.core._nth.call(null,chunk__8815_10819,i__8817_10821);a__7197__auto__.push(arg__7198__auto___10822);
{
var G__10823 = seq__8814_10818;
var G__10824 = chunk__8815_10819;
var G__10825 = count__8816_10820;
var G__10826 = (i__8817_10821 + 1);
seq__8814_10818 = G__10823;
chunk__8815_10819 = G__10824;
count__8816_10820 = G__10825;
i__8817_10821 = G__10826;
continue;
}
} else
{var temp__4092__auto___10827 = cljs.core.seq.call(null,seq__8814_10818);if(temp__4092__auto___10827)
{var seq__8814_10828__$1 = temp__4092__auto___10827;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8814_10828__$1))
{var c__5632__auto___10829 = cljs.core.chunk_first.call(null,seq__8814_10828__$1);{
var G__10830 = cljs.core.chunk_rest.call(null,seq__8814_10828__$1);
var G__10831 = c__5632__auto___10829;
var G__10832 = cljs.core.count.call(null,c__5632__auto___10829);
var G__10833 = 0;
seq__8814_10818 = G__10830;
chunk__8815_10819 = G__10831;
count__8816_10820 = G__10832;
i__8817_10821 = G__10833;
continue;
}
} else
{var arg__7198__auto___10834 = cljs.core.first.call(null,seq__8814_10828__$1);a__7197__auto__.push(arg__7198__auto___10834);
{
var G__10835 = cljs.core.next.call(null,seq__8814_10828__$1);
var G__10836 = null;
var G__10837 = 0;
var G__10838 = 0;
seq__8814_10818 = G__10835;
chunk__8815_10819 = G__10836;
count__8816_10820 = G__10837;
i__8817_10821 = G__10838;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.progress.apply(null,a__7197__auto__);
};
var progress = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return progress__delegate.call(this,args__7196__auto__);};
progress.cljs$lang$maxFixedArity = 0;
progress.cljs$lang$applyTo = (function (arglist__10839){
var args__7196__auto__ = cljs.core.seq(arglist__10839);
return progress__delegate(args__7196__auto__);
});
progress.cljs$core$IFn$_invoke$arity$variadic = progress__delegate;
return progress;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.q = (function() { 
var q__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8822_10840 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8823_10841 = null;var count__8824_10842 = 0;var i__8825_10843 = 0;while(true){
if((i__8825_10843 < count__8824_10842))
{var arg__7198__auto___10844 = cljs.core._nth.call(null,chunk__8823_10841,i__8825_10843);a__7197__auto__.push(arg__7198__auto___10844);
{
var G__10845 = seq__8822_10840;
var G__10846 = chunk__8823_10841;
var G__10847 = count__8824_10842;
var G__10848 = (i__8825_10843 + 1);
seq__8822_10840 = G__10845;
chunk__8823_10841 = G__10846;
count__8824_10842 = G__10847;
i__8825_10843 = G__10848;
continue;
}
} else
{var temp__4092__auto___10849 = cljs.core.seq.call(null,seq__8822_10840);if(temp__4092__auto___10849)
{var seq__8822_10850__$1 = temp__4092__auto___10849;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8822_10850__$1))
{var c__5632__auto___10851 = cljs.core.chunk_first.call(null,seq__8822_10850__$1);{
var G__10852 = cljs.core.chunk_rest.call(null,seq__8822_10850__$1);
var G__10853 = c__5632__auto___10851;
var G__10854 = cljs.core.count.call(null,c__5632__auto___10851);
var G__10855 = 0;
seq__8822_10840 = G__10852;
chunk__8823_10841 = G__10853;
count__8824_10842 = G__10854;
i__8825_10843 = G__10855;
continue;
}
} else
{var arg__7198__auto___10856 = cljs.core.first.call(null,seq__8822_10850__$1);a__7197__auto__.push(arg__7198__auto___10856);
{
var G__10857 = cljs.core.next.call(null,seq__8822_10850__$1);
var G__10858 = null;
var G__10859 = 0;
var G__10860 = 0;
seq__8822_10840 = G__10857;
chunk__8823_10841 = G__10858;
count__8824_10842 = G__10859;
i__8825_10843 = G__10860;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.q.apply(null,a__7197__auto__);
};
var q = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return q__delegate.call(this,args__7196__auto__);};
q.cljs$lang$maxFixedArity = 0;
q.cljs$lang$applyTo = (function (arglist__10861){
var args__7196__auto__ = cljs.core.seq(arglist__10861);
return q__delegate(args__7196__auto__);
});
q.cljs$core$IFn$_invoke$arity$variadic = q__delegate;
return q;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.rp = (function() { 
var rp__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8830_10862 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8831_10863 = null;var count__8832_10864 = 0;var i__8833_10865 = 0;while(true){
if((i__8833_10865 < count__8832_10864))
{var arg__7198__auto___10866 = cljs.core._nth.call(null,chunk__8831_10863,i__8833_10865);a__7197__auto__.push(arg__7198__auto___10866);
{
var G__10867 = seq__8830_10862;
var G__10868 = chunk__8831_10863;
var G__10869 = count__8832_10864;
var G__10870 = (i__8833_10865 + 1);
seq__8830_10862 = G__10867;
chunk__8831_10863 = G__10868;
count__8832_10864 = G__10869;
i__8833_10865 = G__10870;
continue;
}
} else
{var temp__4092__auto___10871 = cljs.core.seq.call(null,seq__8830_10862);if(temp__4092__auto___10871)
{var seq__8830_10872__$1 = temp__4092__auto___10871;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8830_10872__$1))
{var c__5632__auto___10873 = cljs.core.chunk_first.call(null,seq__8830_10872__$1);{
var G__10874 = cljs.core.chunk_rest.call(null,seq__8830_10872__$1);
var G__10875 = c__5632__auto___10873;
var G__10876 = cljs.core.count.call(null,c__5632__auto___10873);
var G__10877 = 0;
seq__8830_10862 = G__10874;
chunk__8831_10863 = G__10875;
count__8832_10864 = G__10876;
i__8833_10865 = G__10877;
continue;
}
} else
{var arg__7198__auto___10878 = cljs.core.first.call(null,seq__8830_10872__$1);a__7197__auto__.push(arg__7198__auto___10878);
{
var G__10879 = cljs.core.next.call(null,seq__8830_10872__$1);
var G__10880 = null;
var G__10881 = 0;
var G__10882 = 0;
seq__8830_10862 = G__10879;
chunk__8831_10863 = G__10880;
count__8832_10864 = G__10881;
i__8833_10865 = G__10882;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.rp.apply(null,a__7197__auto__);
};
var rp = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return rp__delegate.call(this,args__7196__auto__);};
rp.cljs$lang$maxFixedArity = 0;
rp.cljs$lang$applyTo = (function (arglist__10883){
var args__7196__auto__ = cljs.core.seq(arglist__10883);
return rp__delegate(args__7196__auto__);
});
rp.cljs$core$IFn$_invoke$arity$variadic = rp__delegate;
return rp;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.rt = (function() { 
var rt__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8838_10884 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8839_10885 = null;var count__8840_10886 = 0;var i__8841_10887 = 0;while(true){
if((i__8841_10887 < count__8840_10886))
{var arg__7198__auto___10888 = cljs.core._nth.call(null,chunk__8839_10885,i__8841_10887);a__7197__auto__.push(arg__7198__auto___10888);
{
var G__10889 = seq__8838_10884;
var G__10890 = chunk__8839_10885;
var G__10891 = count__8840_10886;
var G__10892 = (i__8841_10887 + 1);
seq__8838_10884 = G__10889;
chunk__8839_10885 = G__10890;
count__8840_10886 = G__10891;
i__8841_10887 = G__10892;
continue;
}
} else
{var temp__4092__auto___10893 = cljs.core.seq.call(null,seq__8838_10884);if(temp__4092__auto___10893)
{var seq__8838_10894__$1 = temp__4092__auto___10893;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8838_10894__$1))
{var c__5632__auto___10895 = cljs.core.chunk_first.call(null,seq__8838_10894__$1);{
var G__10896 = cljs.core.chunk_rest.call(null,seq__8838_10894__$1);
var G__10897 = c__5632__auto___10895;
var G__10898 = cljs.core.count.call(null,c__5632__auto___10895);
var G__10899 = 0;
seq__8838_10884 = G__10896;
chunk__8839_10885 = G__10897;
count__8840_10886 = G__10898;
i__8841_10887 = G__10899;
continue;
}
} else
{var arg__7198__auto___10900 = cljs.core.first.call(null,seq__8838_10894__$1);a__7197__auto__.push(arg__7198__auto___10900);
{
var G__10901 = cljs.core.next.call(null,seq__8838_10894__$1);
var G__10902 = null;
var G__10903 = 0;
var G__10904 = 0;
seq__8838_10884 = G__10901;
chunk__8839_10885 = G__10902;
count__8840_10886 = G__10903;
i__8841_10887 = G__10904;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.rt.apply(null,a__7197__auto__);
};
var rt = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return rt__delegate.call(this,args__7196__auto__);};
rt.cljs$lang$maxFixedArity = 0;
rt.cljs$lang$applyTo = (function (arglist__10905){
var args__7196__auto__ = cljs.core.seq(arglist__10905);
return rt__delegate(args__7196__auto__);
});
rt.cljs$core$IFn$_invoke$arity$variadic = rt__delegate;
return rt;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.ruby = (function() { 
var ruby__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8846_10906 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8847_10907 = null;var count__8848_10908 = 0;var i__8849_10909 = 0;while(true){
if((i__8849_10909 < count__8848_10908))
{var arg__7198__auto___10910 = cljs.core._nth.call(null,chunk__8847_10907,i__8849_10909);a__7197__auto__.push(arg__7198__auto___10910);
{
var G__10911 = seq__8846_10906;
var G__10912 = chunk__8847_10907;
var G__10913 = count__8848_10908;
var G__10914 = (i__8849_10909 + 1);
seq__8846_10906 = G__10911;
chunk__8847_10907 = G__10912;
count__8848_10908 = G__10913;
i__8849_10909 = G__10914;
continue;
}
} else
{var temp__4092__auto___10915 = cljs.core.seq.call(null,seq__8846_10906);if(temp__4092__auto___10915)
{var seq__8846_10916__$1 = temp__4092__auto___10915;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8846_10916__$1))
{var c__5632__auto___10917 = cljs.core.chunk_first.call(null,seq__8846_10916__$1);{
var G__10918 = cljs.core.chunk_rest.call(null,seq__8846_10916__$1);
var G__10919 = c__5632__auto___10917;
var G__10920 = cljs.core.count.call(null,c__5632__auto___10917);
var G__10921 = 0;
seq__8846_10906 = G__10918;
chunk__8847_10907 = G__10919;
count__8848_10908 = G__10920;
i__8849_10909 = G__10921;
continue;
}
} else
{var arg__7198__auto___10922 = cljs.core.first.call(null,seq__8846_10916__$1);a__7197__auto__.push(arg__7198__auto___10922);
{
var G__10923 = cljs.core.next.call(null,seq__8846_10916__$1);
var G__10924 = null;
var G__10925 = 0;
var G__10926 = 0;
seq__8846_10906 = G__10923;
chunk__8847_10907 = G__10924;
count__8848_10908 = G__10925;
i__8849_10909 = G__10926;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.ruby.apply(null,a__7197__auto__);
};
var ruby = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ruby__delegate.call(this,args__7196__auto__);};
ruby.cljs$lang$maxFixedArity = 0;
ruby.cljs$lang$applyTo = (function (arglist__10927){
var args__7196__auto__ = cljs.core.seq(arglist__10927);
return ruby__delegate(args__7196__auto__);
});
ruby.cljs$core$IFn$_invoke$arity$variadic = ruby__delegate;
return ruby;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.s = (function() { 
var s__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8854_10928 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8855_10929 = null;var count__8856_10930 = 0;var i__8857_10931 = 0;while(true){
if((i__8857_10931 < count__8856_10930))
{var arg__7198__auto___10932 = cljs.core._nth.call(null,chunk__8855_10929,i__8857_10931);a__7197__auto__.push(arg__7198__auto___10932);
{
var G__10933 = seq__8854_10928;
var G__10934 = chunk__8855_10929;
var G__10935 = count__8856_10930;
var G__10936 = (i__8857_10931 + 1);
seq__8854_10928 = G__10933;
chunk__8855_10929 = G__10934;
count__8856_10930 = G__10935;
i__8857_10931 = G__10936;
continue;
}
} else
{var temp__4092__auto___10937 = cljs.core.seq.call(null,seq__8854_10928);if(temp__4092__auto___10937)
{var seq__8854_10938__$1 = temp__4092__auto___10937;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8854_10938__$1))
{var c__5632__auto___10939 = cljs.core.chunk_first.call(null,seq__8854_10938__$1);{
var G__10940 = cljs.core.chunk_rest.call(null,seq__8854_10938__$1);
var G__10941 = c__5632__auto___10939;
var G__10942 = cljs.core.count.call(null,c__5632__auto___10939);
var G__10943 = 0;
seq__8854_10928 = G__10940;
chunk__8855_10929 = G__10941;
count__8856_10930 = G__10942;
i__8857_10931 = G__10943;
continue;
}
} else
{var arg__7198__auto___10944 = cljs.core.first.call(null,seq__8854_10938__$1);a__7197__auto__.push(arg__7198__auto___10944);
{
var G__10945 = cljs.core.next.call(null,seq__8854_10938__$1);
var G__10946 = null;
var G__10947 = 0;
var G__10948 = 0;
seq__8854_10928 = G__10945;
chunk__8855_10929 = G__10946;
count__8856_10930 = G__10947;
i__8857_10931 = G__10948;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.s.apply(null,a__7197__auto__);
};
var s = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return s__delegate.call(this,args__7196__auto__);};
s.cljs$lang$maxFixedArity = 0;
s.cljs$lang$applyTo = (function (arglist__10949){
var args__7196__auto__ = cljs.core.seq(arglist__10949);
return s__delegate(args__7196__auto__);
});
s.cljs$core$IFn$_invoke$arity$variadic = s__delegate;
return s;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.samp = (function() { 
var samp__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8862_10950 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8863_10951 = null;var count__8864_10952 = 0;var i__8865_10953 = 0;while(true){
if((i__8865_10953 < count__8864_10952))
{var arg__7198__auto___10954 = cljs.core._nth.call(null,chunk__8863_10951,i__8865_10953);a__7197__auto__.push(arg__7198__auto___10954);
{
var G__10955 = seq__8862_10950;
var G__10956 = chunk__8863_10951;
var G__10957 = count__8864_10952;
var G__10958 = (i__8865_10953 + 1);
seq__8862_10950 = G__10955;
chunk__8863_10951 = G__10956;
count__8864_10952 = G__10957;
i__8865_10953 = G__10958;
continue;
}
} else
{var temp__4092__auto___10959 = cljs.core.seq.call(null,seq__8862_10950);if(temp__4092__auto___10959)
{var seq__8862_10960__$1 = temp__4092__auto___10959;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8862_10960__$1))
{var c__5632__auto___10961 = cljs.core.chunk_first.call(null,seq__8862_10960__$1);{
var G__10962 = cljs.core.chunk_rest.call(null,seq__8862_10960__$1);
var G__10963 = c__5632__auto___10961;
var G__10964 = cljs.core.count.call(null,c__5632__auto___10961);
var G__10965 = 0;
seq__8862_10950 = G__10962;
chunk__8863_10951 = G__10963;
count__8864_10952 = G__10964;
i__8865_10953 = G__10965;
continue;
}
} else
{var arg__7198__auto___10966 = cljs.core.first.call(null,seq__8862_10960__$1);a__7197__auto__.push(arg__7198__auto___10966);
{
var G__10967 = cljs.core.next.call(null,seq__8862_10960__$1);
var G__10968 = null;
var G__10969 = 0;
var G__10970 = 0;
seq__8862_10950 = G__10967;
chunk__8863_10951 = G__10968;
count__8864_10952 = G__10969;
i__8865_10953 = G__10970;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.samp.apply(null,a__7197__auto__);
};
var samp = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return samp__delegate.call(this,args__7196__auto__);};
samp.cljs$lang$maxFixedArity = 0;
samp.cljs$lang$applyTo = (function (arglist__10971){
var args__7196__auto__ = cljs.core.seq(arglist__10971);
return samp__delegate(args__7196__auto__);
});
samp.cljs$core$IFn$_invoke$arity$variadic = samp__delegate;
return samp;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.script = (function() { 
var script__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8870_10972 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8871_10973 = null;var count__8872_10974 = 0;var i__8873_10975 = 0;while(true){
if((i__8873_10975 < count__8872_10974))
{var arg__7198__auto___10976 = cljs.core._nth.call(null,chunk__8871_10973,i__8873_10975);a__7197__auto__.push(arg__7198__auto___10976);
{
var G__10977 = seq__8870_10972;
var G__10978 = chunk__8871_10973;
var G__10979 = count__8872_10974;
var G__10980 = (i__8873_10975 + 1);
seq__8870_10972 = G__10977;
chunk__8871_10973 = G__10978;
count__8872_10974 = G__10979;
i__8873_10975 = G__10980;
continue;
}
} else
{var temp__4092__auto___10981 = cljs.core.seq.call(null,seq__8870_10972);if(temp__4092__auto___10981)
{var seq__8870_10982__$1 = temp__4092__auto___10981;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8870_10982__$1))
{var c__5632__auto___10983 = cljs.core.chunk_first.call(null,seq__8870_10982__$1);{
var G__10984 = cljs.core.chunk_rest.call(null,seq__8870_10982__$1);
var G__10985 = c__5632__auto___10983;
var G__10986 = cljs.core.count.call(null,c__5632__auto___10983);
var G__10987 = 0;
seq__8870_10972 = G__10984;
chunk__8871_10973 = G__10985;
count__8872_10974 = G__10986;
i__8873_10975 = G__10987;
continue;
}
} else
{var arg__7198__auto___10988 = cljs.core.first.call(null,seq__8870_10982__$1);a__7197__auto__.push(arg__7198__auto___10988);
{
var G__10989 = cljs.core.next.call(null,seq__8870_10982__$1);
var G__10990 = null;
var G__10991 = 0;
var G__10992 = 0;
seq__8870_10972 = G__10989;
chunk__8871_10973 = G__10990;
count__8872_10974 = G__10991;
i__8873_10975 = G__10992;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.script.apply(null,a__7197__auto__);
};
var script = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return script__delegate.call(this,args__7196__auto__);};
script.cljs$lang$maxFixedArity = 0;
script.cljs$lang$applyTo = (function (arglist__10993){
var args__7196__auto__ = cljs.core.seq(arglist__10993);
return script__delegate(args__7196__auto__);
});
script.cljs$core$IFn$_invoke$arity$variadic = script__delegate;
return script;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.section = (function() { 
var section__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8878_10994 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8879_10995 = null;var count__8880_10996 = 0;var i__8881_10997 = 0;while(true){
if((i__8881_10997 < count__8880_10996))
{var arg__7198__auto___10998 = cljs.core._nth.call(null,chunk__8879_10995,i__8881_10997);a__7197__auto__.push(arg__7198__auto___10998);
{
var G__10999 = seq__8878_10994;
var G__11000 = chunk__8879_10995;
var G__11001 = count__8880_10996;
var G__11002 = (i__8881_10997 + 1);
seq__8878_10994 = G__10999;
chunk__8879_10995 = G__11000;
count__8880_10996 = G__11001;
i__8881_10997 = G__11002;
continue;
}
} else
{var temp__4092__auto___11003 = cljs.core.seq.call(null,seq__8878_10994);if(temp__4092__auto___11003)
{var seq__8878_11004__$1 = temp__4092__auto___11003;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8878_11004__$1))
{var c__5632__auto___11005 = cljs.core.chunk_first.call(null,seq__8878_11004__$1);{
var G__11006 = cljs.core.chunk_rest.call(null,seq__8878_11004__$1);
var G__11007 = c__5632__auto___11005;
var G__11008 = cljs.core.count.call(null,c__5632__auto___11005);
var G__11009 = 0;
seq__8878_10994 = G__11006;
chunk__8879_10995 = G__11007;
count__8880_10996 = G__11008;
i__8881_10997 = G__11009;
continue;
}
} else
{var arg__7198__auto___11010 = cljs.core.first.call(null,seq__8878_11004__$1);a__7197__auto__.push(arg__7198__auto___11010);
{
var G__11011 = cljs.core.next.call(null,seq__8878_11004__$1);
var G__11012 = null;
var G__11013 = 0;
var G__11014 = 0;
seq__8878_10994 = G__11011;
chunk__8879_10995 = G__11012;
count__8880_10996 = G__11013;
i__8881_10997 = G__11014;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.section.apply(null,a__7197__auto__);
};
var section = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return section__delegate.call(this,args__7196__auto__);};
section.cljs$lang$maxFixedArity = 0;
section.cljs$lang$applyTo = (function (arglist__11015){
var args__7196__auto__ = cljs.core.seq(arglist__11015);
return section__delegate(args__7196__auto__);
});
section.cljs$core$IFn$_invoke$arity$variadic = section__delegate;
return section;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.select = (function() { 
var select__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8886_11016 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8887_11017 = null;var count__8888_11018 = 0;var i__8889_11019 = 0;while(true){
if((i__8889_11019 < count__8888_11018))
{var arg__7198__auto___11020 = cljs.core._nth.call(null,chunk__8887_11017,i__8889_11019);a__7197__auto__.push(arg__7198__auto___11020);
{
var G__11021 = seq__8886_11016;
var G__11022 = chunk__8887_11017;
var G__11023 = count__8888_11018;
var G__11024 = (i__8889_11019 + 1);
seq__8886_11016 = G__11021;
chunk__8887_11017 = G__11022;
count__8888_11018 = G__11023;
i__8889_11019 = G__11024;
continue;
}
} else
{var temp__4092__auto___11025 = cljs.core.seq.call(null,seq__8886_11016);if(temp__4092__auto___11025)
{var seq__8886_11026__$1 = temp__4092__auto___11025;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8886_11026__$1))
{var c__5632__auto___11027 = cljs.core.chunk_first.call(null,seq__8886_11026__$1);{
var G__11028 = cljs.core.chunk_rest.call(null,seq__8886_11026__$1);
var G__11029 = c__5632__auto___11027;
var G__11030 = cljs.core.count.call(null,c__5632__auto___11027);
var G__11031 = 0;
seq__8886_11016 = G__11028;
chunk__8887_11017 = G__11029;
count__8888_11018 = G__11030;
i__8889_11019 = G__11031;
continue;
}
} else
{var arg__7198__auto___11032 = cljs.core.first.call(null,seq__8886_11026__$1);a__7197__auto__.push(arg__7198__auto___11032);
{
var G__11033 = cljs.core.next.call(null,seq__8886_11026__$1);
var G__11034 = null;
var G__11035 = 0;
var G__11036 = 0;
seq__8886_11016 = G__11033;
chunk__8887_11017 = G__11034;
count__8888_11018 = G__11035;
i__8889_11019 = G__11036;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.select.apply(null,a__7197__auto__);
};
var select = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return select__delegate.call(this,args__7196__auto__);};
select.cljs$lang$maxFixedArity = 0;
select.cljs$lang$applyTo = (function (arglist__11037){
var args__7196__auto__ = cljs.core.seq(arglist__11037);
return select__delegate(args__7196__auto__);
});
select.cljs$core$IFn$_invoke$arity$variadic = select__delegate;
return select;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.small = (function() { 
var small__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8894_11038 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8895_11039 = null;var count__8896_11040 = 0;var i__8897_11041 = 0;while(true){
if((i__8897_11041 < count__8896_11040))
{var arg__7198__auto___11042 = cljs.core._nth.call(null,chunk__8895_11039,i__8897_11041);a__7197__auto__.push(arg__7198__auto___11042);
{
var G__11043 = seq__8894_11038;
var G__11044 = chunk__8895_11039;
var G__11045 = count__8896_11040;
var G__11046 = (i__8897_11041 + 1);
seq__8894_11038 = G__11043;
chunk__8895_11039 = G__11044;
count__8896_11040 = G__11045;
i__8897_11041 = G__11046;
continue;
}
} else
{var temp__4092__auto___11047 = cljs.core.seq.call(null,seq__8894_11038);if(temp__4092__auto___11047)
{var seq__8894_11048__$1 = temp__4092__auto___11047;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8894_11048__$1))
{var c__5632__auto___11049 = cljs.core.chunk_first.call(null,seq__8894_11048__$1);{
var G__11050 = cljs.core.chunk_rest.call(null,seq__8894_11048__$1);
var G__11051 = c__5632__auto___11049;
var G__11052 = cljs.core.count.call(null,c__5632__auto___11049);
var G__11053 = 0;
seq__8894_11038 = G__11050;
chunk__8895_11039 = G__11051;
count__8896_11040 = G__11052;
i__8897_11041 = G__11053;
continue;
}
} else
{var arg__7198__auto___11054 = cljs.core.first.call(null,seq__8894_11048__$1);a__7197__auto__.push(arg__7198__auto___11054);
{
var G__11055 = cljs.core.next.call(null,seq__8894_11048__$1);
var G__11056 = null;
var G__11057 = 0;
var G__11058 = 0;
seq__8894_11038 = G__11055;
chunk__8895_11039 = G__11056;
count__8896_11040 = G__11057;
i__8897_11041 = G__11058;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.small.apply(null,a__7197__auto__);
};
var small = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return small__delegate.call(this,args__7196__auto__);};
small.cljs$lang$maxFixedArity = 0;
small.cljs$lang$applyTo = (function (arglist__11059){
var args__7196__auto__ = cljs.core.seq(arglist__11059);
return small__delegate(args__7196__auto__);
});
small.cljs$core$IFn$_invoke$arity$variadic = small__delegate;
return small;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.source = (function() { 
var source__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8902_11060 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8903_11061 = null;var count__8904_11062 = 0;var i__8905_11063 = 0;while(true){
if((i__8905_11063 < count__8904_11062))
{var arg__7198__auto___11064 = cljs.core._nth.call(null,chunk__8903_11061,i__8905_11063);a__7197__auto__.push(arg__7198__auto___11064);
{
var G__11065 = seq__8902_11060;
var G__11066 = chunk__8903_11061;
var G__11067 = count__8904_11062;
var G__11068 = (i__8905_11063 + 1);
seq__8902_11060 = G__11065;
chunk__8903_11061 = G__11066;
count__8904_11062 = G__11067;
i__8905_11063 = G__11068;
continue;
}
} else
{var temp__4092__auto___11069 = cljs.core.seq.call(null,seq__8902_11060);if(temp__4092__auto___11069)
{var seq__8902_11070__$1 = temp__4092__auto___11069;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8902_11070__$1))
{var c__5632__auto___11071 = cljs.core.chunk_first.call(null,seq__8902_11070__$1);{
var G__11072 = cljs.core.chunk_rest.call(null,seq__8902_11070__$1);
var G__11073 = c__5632__auto___11071;
var G__11074 = cljs.core.count.call(null,c__5632__auto___11071);
var G__11075 = 0;
seq__8902_11060 = G__11072;
chunk__8903_11061 = G__11073;
count__8904_11062 = G__11074;
i__8905_11063 = G__11075;
continue;
}
} else
{var arg__7198__auto___11076 = cljs.core.first.call(null,seq__8902_11070__$1);a__7197__auto__.push(arg__7198__auto___11076);
{
var G__11077 = cljs.core.next.call(null,seq__8902_11070__$1);
var G__11078 = null;
var G__11079 = 0;
var G__11080 = 0;
seq__8902_11060 = G__11077;
chunk__8903_11061 = G__11078;
count__8904_11062 = G__11079;
i__8905_11063 = G__11080;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.source.apply(null,a__7197__auto__);
};
var source = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return source__delegate.call(this,args__7196__auto__);};
source.cljs$lang$maxFixedArity = 0;
source.cljs$lang$applyTo = (function (arglist__11081){
var args__7196__auto__ = cljs.core.seq(arglist__11081);
return source__delegate(args__7196__auto__);
});
source.cljs$core$IFn$_invoke$arity$variadic = source__delegate;
return source;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.span = (function() { 
var span__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8910_11082 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8911_11083 = null;var count__8912_11084 = 0;var i__8913_11085 = 0;while(true){
if((i__8913_11085 < count__8912_11084))
{var arg__7198__auto___11086 = cljs.core._nth.call(null,chunk__8911_11083,i__8913_11085);a__7197__auto__.push(arg__7198__auto___11086);
{
var G__11087 = seq__8910_11082;
var G__11088 = chunk__8911_11083;
var G__11089 = count__8912_11084;
var G__11090 = (i__8913_11085 + 1);
seq__8910_11082 = G__11087;
chunk__8911_11083 = G__11088;
count__8912_11084 = G__11089;
i__8913_11085 = G__11090;
continue;
}
} else
{var temp__4092__auto___11091 = cljs.core.seq.call(null,seq__8910_11082);if(temp__4092__auto___11091)
{var seq__8910_11092__$1 = temp__4092__auto___11091;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8910_11092__$1))
{var c__5632__auto___11093 = cljs.core.chunk_first.call(null,seq__8910_11092__$1);{
var G__11094 = cljs.core.chunk_rest.call(null,seq__8910_11092__$1);
var G__11095 = c__5632__auto___11093;
var G__11096 = cljs.core.count.call(null,c__5632__auto___11093);
var G__11097 = 0;
seq__8910_11082 = G__11094;
chunk__8911_11083 = G__11095;
count__8912_11084 = G__11096;
i__8913_11085 = G__11097;
continue;
}
} else
{var arg__7198__auto___11098 = cljs.core.first.call(null,seq__8910_11092__$1);a__7197__auto__.push(arg__7198__auto___11098);
{
var G__11099 = cljs.core.next.call(null,seq__8910_11092__$1);
var G__11100 = null;
var G__11101 = 0;
var G__11102 = 0;
seq__8910_11082 = G__11099;
chunk__8911_11083 = G__11100;
count__8912_11084 = G__11101;
i__8913_11085 = G__11102;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.span.apply(null,a__7197__auto__);
};
var span = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return span__delegate.call(this,args__7196__auto__);};
span.cljs$lang$maxFixedArity = 0;
span.cljs$lang$applyTo = (function (arglist__11103){
var args__7196__auto__ = cljs.core.seq(arglist__11103);
return span__delegate(args__7196__auto__);
});
span.cljs$core$IFn$_invoke$arity$variadic = span__delegate;
return span;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.strong = (function() { 
var strong__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8918_11104 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8919_11105 = null;var count__8920_11106 = 0;var i__8921_11107 = 0;while(true){
if((i__8921_11107 < count__8920_11106))
{var arg__7198__auto___11108 = cljs.core._nth.call(null,chunk__8919_11105,i__8921_11107);a__7197__auto__.push(arg__7198__auto___11108);
{
var G__11109 = seq__8918_11104;
var G__11110 = chunk__8919_11105;
var G__11111 = count__8920_11106;
var G__11112 = (i__8921_11107 + 1);
seq__8918_11104 = G__11109;
chunk__8919_11105 = G__11110;
count__8920_11106 = G__11111;
i__8921_11107 = G__11112;
continue;
}
} else
{var temp__4092__auto___11113 = cljs.core.seq.call(null,seq__8918_11104);if(temp__4092__auto___11113)
{var seq__8918_11114__$1 = temp__4092__auto___11113;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8918_11114__$1))
{var c__5632__auto___11115 = cljs.core.chunk_first.call(null,seq__8918_11114__$1);{
var G__11116 = cljs.core.chunk_rest.call(null,seq__8918_11114__$1);
var G__11117 = c__5632__auto___11115;
var G__11118 = cljs.core.count.call(null,c__5632__auto___11115);
var G__11119 = 0;
seq__8918_11104 = G__11116;
chunk__8919_11105 = G__11117;
count__8920_11106 = G__11118;
i__8921_11107 = G__11119;
continue;
}
} else
{var arg__7198__auto___11120 = cljs.core.first.call(null,seq__8918_11114__$1);a__7197__auto__.push(arg__7198__auto___11120);
{
var G__11121 = cljs.core.next.call(null,seq__8918_11114__$1);
var G__11122 = null;
var G__11123 = 0;
var G__11124 = 0;
seq__8918_11104 = G__11121;
chunk__8919_11105 = G__11122;
count__8920_11106 = G__11123;
i__8921_11107 = G__11124;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.strong.apply(null,a__7197__auto__);
};
var strong = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return strong__delegate.call(this,args__7196__auto__);};
strong.cljs$lang$maxFixedArity = 0;
strong.cljs$lang$applyTo = (function (arglist__11125){
var args__7196__auto__ = cljs.core.seq(arglist__11125);
return strong__delegate(args__7196__auto__);
});
strong.cljs$core$IFn$_invoke$arity$variadic = strong__delegate;
return strong;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.style = (function() { 
var style__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8926_11126 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8927_11127 = null;var count__8928_11128 = 0;var i__8929_11129 = 0;while(true){
if((i__8929_11129 < count__8928_11128))
{var arg__7198__auto___11130 = cljs.core._nth.call(null,chunk__8927_11127,i__8929_11129);a__7197__auto__.push(arg__7198__auto___11130);
{
var G__11131 = seq__8926_11126;
var G__11132 = chunk__8927_11127;
var G__11133 = count__8928_11128;
var G__11134 = (i__8929_11129 + 1);
seq__8926_11126 = G__11131;
chunk__8927_11127 = G__11132;
count__8928_11128 = G__11133;
i__8929_11129 = G__11134;
continue;
}
} else
{var temp__4092__auto___11135 = cljs.core.seq.call(null,seq__8926_11126);if(temp__4092__auto___11135)
{var seq__8926_11136__$1 = temp__4092__auto___11135;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8926_11136__$1))
{var c__5632__auto___11137 = cljs.core.chunk_first.call(null,seq__8926_11136__$1);{
var G__11138 = cljs.core.chunk_rest.call(null,seq__8926_11136__$1);
var G__11139 = c__5632__auto___11137;
var G__11140 = cljs.core.count.call(null,c__5632__auto___11137);
var G__11141 = 0;
seq__8926_11126 = G__11138;
chunk__8927_11127 = G__11139;
count__8928_11128 = G__11140;
i__8929_11129 = G__11141;
continue;
}
} else
{var arg__7198__auto___11142 = cljs.core.first.call(null,seq__8926_11136__$1);a__7197__auto__.push(arg__7198__auto___11142);
{
var G__11143 = cljs.core.next.call(null,seq__8926_11136__$1);
var G__11144 = null;
var G__11145 = 0;
var G__11146 = 0;
seq__8926_11126 = G__11143;
chunk__8927_11127 = G__11144;
count__8928_11128 = G__11145;
i__8929_11129 = G__11146;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.style.apply(null,a__7197__auto__);
};
var style = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return style__delegate.call(this,args__7196__auto__);};
style.cljs$lang$maxFixedArity = 0;
style.cljs$lang$applyTo = (function (arglist__11147){
var args__7196__auto__ = cljs.core.seq(arglist__11147);
return style__delegate(args__7196__auto__);
});
style.cljs$core$IFn$_invoke$arity$variadic = style__delegate;
return style;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.sub = (function() { 
var sub__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8934_11148 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8935_11149 = null;var count__8936_11150 = 0;var i__8937_11151 = 0;while(true){
if((i__8937_11151 < count__8936_11150))
{var arg__7198__auto___11152 = cljs.core._nth.call(null,chunk__8935_11149,i__8937_11151);a__7197__auto__.push(arg__7198__auto___11152);
{
var G__11153 = seq__8934_11148;
var G__11154 = chunk__8935_11149;
var G__11155 = count__8936_11150;
var G__11156 = (i__8937_11151 + 1);
seq__8934_11148 = G__11153;
chunk__8935_11149 = G__11154;
count__8936_11150 = G__11155;
i__8937_11151 = G__11156;
continue;
}
} else
{var temp__4092__auto___11157 = cljs.core.seq.call(null,seq__8934_11148);if(temp__4092__auto___11157)
{var seq__8934_11158__$1 = temp__4092__auto___11157;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8934_11158__$1))
{var c__5632__auto___11159 = cljs.core.chunk_first.call(null,seq__8934_11158__$1);{
var G__11160 = cljs.core.chunk_rest.call(null,seq__8934_11158__$1);
var G__11161 = c__5632__auto___11159;
var G__11162 = cljs.core.count.call(null,c__5632__auto___11159);
var G__11163 = 0;
seq__8934_11148 = G__11160;
chunk__8935_11149 = G__11161;
count__8936_11150 = G__11162;
i__8937_11151 = G__11163;
continue;
}
} else
{var arg__7198__auto___11164 = cljs.core.first.call(null,seq__8934_11158__$1);a__7197__auto__.push(arg__7198__auto___11164);
{
var G__11165 = cljs.core.next.call(null,seq__8934_11158__$1);
var G__11166 = null;
var G__11167 = 0;
var G__11168 = 0;
seq__8934_11148 = G__11165;
chunk__8935_11149 = G__11166;
count__8936_11150 = G__11167;
i__8937_11151 = G__11168;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.sub.apply(null,a__7197__auto__);
};
var sub = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return sub__delegate.call(this,args__7196__auto__);};
sub.cljs$lang$maxFixedArity = 0;
sub.cljs$lang$applyTo = (function (arglist__11169){
var args__7196__auto__ = cljs.core.seq(arglist__11169);
return sub__delegate(args__7196__auto__);
});
sub.cljs$core$IFn$_invoke$arity$variadic = sub__delegate;
return sub;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.summary = (function() { 
var summary__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8942_11170 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8943_11171 = null;var count__8944_11172 = 0;var i__8945_11173 = 0;while(true){
if((i__8945_11173 < count__8944_11172))
{var arg__7198__auto___11174 = cljs.core._nth.call(null,chunk__8943_11171,i__8945_11173);a__7197__auto__.push(arg__7198__auto___11174);
{
var G__11175 = seq__8942_11170;
var G__11176 = chunk__8943_11171;
var G__11177 = count__8944_11172;
var G__11178 = (i__8945_11173 + 1);
seq__8942_11170 = G__11175;
chunk__8943_11171 = G__11176;
count__8944_11172 = G__11177;
i__8945_11173 = G__11178;
continue;
}
} else
{var temp__4092__auto___11179 = cljs.core.seq.call(null,seq__8942_11170);if(temp__4092__auto___11179)
{var seq__8942_11180__$1 = temp__4092__auto___11179;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8942_11180__$1))
{var c__5632__auto___11181 = cljs.core.chunk_first.call(null,seq__8942_11180__$1);{
var G__11182 = cljs.core.chunk_rest.call(null,seq__8942_11180__$1);
var G__11183 = c__5632__auto___11181;
var G__11184 = cljs.core.count.call(null,c__5632__auto___11181);
var G__11185 = 0;
seq__8942_11170 = G__11182;
chunk__8943_11171 = G__11183;
count__8944_11172 = G__11184;
i__8945_11173 = G__11185;
continue;
}
} else
{var arg__7198__auto___11186 = cljs.core.first.call(null,seq__8942_11180__$1);a__7197__auto__.push(arg__7198__auto___11186);
{
var G__11187 = cljs.core.next.call(null,seq__8942_11180__$1);
var G__11188 = null;
var G__11189 = 0;
var G__11190 = 0;
seq__8942_11170 = G__11187;
chunk__8943_11171 = G__11188;
count__8944_11172 = G__11189;
i__8945_11173 = G__11190;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.summary.apply(null,a__7197__auto__);
};
var summary = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return summary__delegate.call(this,args__7196__auto__);};
summary.cljs$lang$maxFixedArity = 0;
summary.cljs$lang$applyTo = (function (arglist__11191){
var args__7196__auto__ = cljs.core.seq(arglist__11191);
return summary__delegate(args__7196__auto__);
});
summary.cljs$core$IFn$_invoke$arity$variadic = summary__delegate;
return summary;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.sup = (function() { 
var sup__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8950_11192 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8951_11193 = null;var count__8952_11194 = 0;var i__8953_11195 = 0;while(true){
if((i__8953_11195 < count__8952_11194))
{var arg__7198__auto___11196 = cljs.core._nth.call(null,chunk__8951_11193,i__8953_11195);a__7197__auto__.push(arg__7198__auto___11196);
{
var G__11197 = seq__8950_11192;
var G__11198 = chunk__8951_11193;
var G__11199 = count__8952_11194;
var G__11200 = (i__8953_11195 + 1);
seq__8950_11192 = G__11197;
chunk__8951_11193 = G__11198;
count__8952_11194 = G__11199;
i__8953_11195 = G__11200;
continue;
}
} else
{var temp__4092__auto___11201 = cljs.core.seq.call(null,seq__8950_11192);if(temp__4092__auto___11201)
{var seq__8950_11202__$1 = temp__4092__auto___11201;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8950_11202__$1))
{var c__5632__auto___11203 = cljs.core.chunk_first.call(null,seq__8950_11202__$1);{
var G__11204 = cljs.core.chunk_rest.call(null,seq__8950_11202__$1);
var G__11205 = c__5632__auto___11203;
var G__11206 = cljs.core.count.call(null,c__5632__auto___11203);
var G__11207 = 0;
seq__8950_11192 = G__11204;
chunk__8951_11193 = G__11205;
count__8952_11194 = G__11206;
i__8953_11195 = G__11207;
continue;
}
} else
{var arg__7198__auto___11208 = cljs.core.first.call(null,seq__8950_11202__$1);a__7197__auto__.push(arg__7198__auto___11208);
{
var G__11209 = cljs.core.next.call(null,seq__8950_11202__$1);
var G__11210 = null;
var G__11211 = 0;
var G__11212 = 0;
seq__8950_11192 = G__11209;
chunk__8951_11193 = G__11210;
count__8952_11194 = G__11211;
i__8953_11195 = G__11212;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.sup.apply(null,a__7197__auto__);
};
var sup = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return sup__delegate.call(this,args__7196__auto__);};
sup.cljs$lang$maxFixedArity = 0;
sup.cljs$lang$applyTo = (function (arglist__11213){
var args__7196__auto__ = cljs.core.seq(arglist__11213);
return sup__delegate(args__7196__auto__);
});
sup.cljs$core$IFn$_invoke$arity$variadic = sup__delegate;
return sup;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.table = (function() { 
var table__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8958_11214 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8959_11215 = null;var count__8960_11216 = 0;var i__8961_11217 = 0;while(true){
if((i__8961_11217 < count__8960_11216))
{var arg__7198__auto___11218 = cljs.core._nth.call(null,chunk__8959_11215,i__8961_11217);a__7197__auto__.push(arg__7198__auto___11218);
{
var G__11219 = seq__8958_11214;
var G__11220 = chunk__8959_11215;
var G__11221 = count__8960_11216;
var G__11222 = (i__8961_11217 + 1);
seq__8958_11214 = G__11219;
chunk__8959_11215 = G__11220;
count__8960_11216 = G__11221;
i__8961_11217 = G__11222;
continue;
}
} else
{var temp__4092__auto___11223 = cljs.core.seq.call(null,seq__8958_11214);if(temp__4092__auto___11223)
{var seq__8958_11224__$1 = temp__4092__auto___11223;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8958_11224__$1))
{var c__5632__auto___11225 = cljs.core.chunk_first.call(null,seq__8958_11224__$1);{
var G__11226 = cljs.core.chunk_rest.call(null,seq__8958_11224__$1);
var G__11227 = c__5632__auto___11225;
var G__11228 = cljs.core.count.call(null,c__5632__auto___11225);
var G__11229 = 0;
seq__8958_11214 = G__11226;
chunk__8959_11215 = G__11227;
count__8960_11216 = G__11228;
i__8961_11217 = G__11229;
continue;
}
} else
{var arg__7198__auto___11230 = cljs.core.first.call(null,seq__8958_11224__$1);a__7197__auto__.push(arg__7198__auto___11230);
{
var G__11231 = cljs.core.next.call(null,seq__8958_11224__$1);
var G__11232 = null;
var G__11233 = 0;
var G__11234 = 0;
seq__8958_11214 = G__11231;
chunk__8959_11215 = G__11232;
count__8960_11216 = G__11233;
i__8961_11217 = G__11234;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.table.apply(null,a__7197__auto__);
};
var table = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return table__delegate.call(this,args__7196__auto__);};
table.cljs$lang$maxFixedArity = 0;
table.cljs$lang$applyTo = (function (arglist__11235){
var args__7196__auto__ = cljs.core.seq(arglist__11235);
return table__delegate(args__7196__auto__);
});
table.cljs$core$IFn$_invoke$arity$variadic = table__delegate;
return table;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.tbody = (function() { 
var tbody__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8966_11236 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8967_11237 = null;var count__8968_11238 = 0;var i__8969_11239 = 0;while(true){
if((i__8969_11239 < count__8968_11238))
{var arg__7198__auto___11240 = cljs.core._nth.call(null,chunk__8967_11237,i__8969_11239);a__7197__auto__.push(arg__7198__auto___11240);
{
var G__11241 = seq__8966_11236;
var G__11242 = chunk__8967_11237;
var G__11243 = count__8968_11238;
var G__11244 = (i__8969_11239 + 1);
seq__8966_11236 = G__11241;
chunk__8967_11237 = G__11242;
count__8968_11238 = G__11243;
i__8969_11239 = G__11244;
continue;
}
} else
{var temp__4092__auto___11245 = cljs.core.seq.call(null,seq__8966_11236);if(temp__4092__auto___11245)
{var seq__8966_11246__$1 = temp__4092__auto___11245;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8966_11246__$1))
{var c__5632__auto___11247 = cljs.core.chunk_first.call(null,seq__8966_11246__$1);{
var G__11248 = cljs.core.chunk_rest.call(null,seq__8966_11246__$1);
var G__11249 = c__5632__auto___11247;
var G__11250 = cljs.core.count.call(null,c__5632__auto___11247);
var G__11251 = 0;
seq__8966_11236 = G__11248;
chunk__8967_11237 = G__11249;
count__8968_11238 = G__11250;
i__8969_11239 = G__11251;
continue;
}
} else
{var arg__7198__auto___11252 = cljs.core.first.call(null,seq__8966_11246__$1);a__7197__auto__.push(arg__7198__auto___11252);
{
var G__11253 = cljs.core.next.call(null,seq__8966_11246__$1);
var G__11254 = null;
var G__11255 = 0;
var G__11256 = 0;
seq__8966_11236 = G__11253;
chunk__8967_11237 = G__11254;
count__8968_11238 = G__11255;
i__8969_11239 = G__11256;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.tbody.apply(null,a__7197__auto__);
};
var tbody = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return tbody__delegate.call(this,args__7196__auto__);};
tbody.cljs$lang$maxFixedArity = 0;
tbody.cljs$lang$applyTo = (function (arglist__11257){
var args__7196__auto__ = cljs.core.seq(arglist__11257);
return tbody__delegate(args__7196__auto__);
});
tbody.cljs$core$IFn$_invoke$arity$variadic = tbody__delegate;
return tbody;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.td = (function() { 
var td__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8974_11258 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8975_11259 = null;var count__8976_11260 = 0;var i__8977_11261 = 0;while(true){
if((i__8977_11261 < count__8976_11260))
{var arg__7198__auto___11262 = cljs.core._nth.call(null,chunk__8975_11259,i__8977_11261);a__7197__auto__.push(arg__7198__auto___11262);
{
var G__11263 = seq__8974_11258;
var G__11264 = chunk__8975_11259;
var G__11265 = count__8976_11260;
var G__11266 = (i__8977_11261 + 1);
seq__8974_11258 = G__11263;
chunk__8975_11259 = G__11264;
count__8976_11260 = G__11265;
i__8977_11261 = G__11266;
continue;
}
} else
{var temp__4092__auto___11267 = cljs.core.seq.call(null,seq__8974_11258);if(temp__4092__auto___11267)
{var seq__8974_11268__$1 = temp__4092__auto___11267;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8974_11268__$1))
{var c__5632__auto___11269 = cljs.core.chunk_first.call(null,seq__8974_11268__$1);{
var G__11270 = cljs.core.chunk_rest.call(null,seq__8974_11268__$1);
var G__11271 = c__5632__auto___11269;
var G__11272 = cljs.core.count.call(null,c__5632__auto___11269);
var G__11273 = 0;
seq__8974_11258 = G__11270;
chunk__8975_11259 = G__11271;
count__8976_11260 = G__11272;
i__8977_11261 = G__11273;
continue;
}
} else
{var arg__7198__auto___11274 = cljs.core.first.call(null,seq__8974_11268__$1);a__7197__auto__.push(arg__7198__auto___11274);
{
var G__11275 = cljs.core.next.call(null,seq__8974_11268__$1);
var G__11276 = null;
var G__11277 = 0;
var G__11278 = 0;
seq__8974_11258 = G__11275;
chunk__8975_11259 = G__11276;
count__8976_11260 = G__11277;
i__8977_11261 = G__11278;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.td.apply(null,a__7197__auto__);
};
var td = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return td__delegate.call(this,args__7196__auto__);};
td.cljs$lang$maxFixedArity = 0;
td.cljs$lang$applyTo = (function (arglist__11279){
var args__7196__auto__ = cljs.core.seq(arglist__11279);
return td__delegate(args__7196__auto__);
});
td.cljs$core$IFn$_invoke$arity$variadic = td__delegate;
return td;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.textarea = (function() { 
var textarea__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8982_11280 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8983_11281 = null;var count__8984_11282 = 0;var i__8985_11283 = 0;while(true){
if((i__8985_11283 < count__8984_11282))
{var arg__7198__auto___11284 = cljs.core._nth.call(null,chunk__8983_11281,i__8985_11283);a__7197__auto__.push(arg__7198__auto___11284);
{
var G__11285 = seq__8982_11280;
var G__11286 = chunk__8983_11281;
var G__11287 = count__8984_11282;
var G__11288 = (i__8985_11283 + 1);
seq__8982_11280 = G__11285;
chunk__8983_11281 = G__11286;
count__8984_11282 = G__11287;
i__8985_11283 = G__11288;
continue;
}
} else
{var temp__4092__auto___11289 = cljs.core.seq.call(null,seq__8982_11280);if(temp__4092__auto___11289)
{var seq__8982_11290__$1 = temp__4092__auto___11289;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8982_11290__$1))
{var c__5632__auto___11291 = cljs.core.chunk_first.call(null,seq__8982_11290__$1);{
var G__11292 = cljs.core.chunk_rest.call(null,seq__8982_11290__$1);
var G__11293 = c__5632__auto___11291;
var G__11294 = cljs.core.count.call(null,c__5632__auto___11291);
var G__11295 = 0;
seq__8982_11280 = G__11292;
chunk__8983_11281 = G__11293;
count__8984_11282 = G__11294;
i__8985_11283 = G__11295;
continue;
}
} else
{var arg__7198__auto___11296 = cljs.core.first.call(null,seq__8982_11290__$1);a__7197__auto__.push(arg__7198__auto___11296);
{
var G__11297 = cljs.core.next.call(null,seq__8982_11290__$1);
var G__11298 = null;
var G__11299 = 0;
var G__11300 = 0;
seq__8982_11280 = G__11297;
chunk__8983_11281 = G__11298;
count__8984_11282 = G__11299;
i__8985_11283 = G__11300;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.textarea.apply(null,a__7197__auto__);
};
var textarea = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return textarea__delegate.call(this,args__7196__auto__);};
textarea.cljs$lang$maxFixedArity = 0;
textarea.cljs$lang$applyTo = (function (arglist__11301){
var args__7196__auto__ = cljs.core.seq(arglist__11301);
return textarea__delegate(args__7196__auto__);
});
textarea.cljs$core$IFn$_invoke$arity$variadic = textarea__delegate;
return textarea;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.tfoot = (function() { 
var tfoot__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8990_11302 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8991_11303 = null;var count__8992_11304 = 0;var i__8993_11305 = 0;while(true){
if((i__8993_11305 < count__8992_11304))
{var arg__7198__auto___11306 = cljs.core._nth.call(null,chunk__8991_11303,i__8993_11305);a__7197__auto__.push(arg__7198__auto___11306);
{
var G__11307 = seq__8990_11302;
var G__11308 = chunk__8991_11303;
var G__11309 = count__8992_11304;
var G__11310 = (i__8993_11305 + 1);
seq__8990_11302 = G__11307;
chunk__8991_11303 = G__11308;
count__8992_11304 = G__11309;
i__8993_11305 = G__11310;
continue;
}
} else
{var temp__4092__auto___11311 = cljs.core.seq.call(null,seq__8990_11302);if(temp__4092__auto___11311)
{var seq__8990_11312__$1 = temp__4092__auto___11311;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8990_11312__$1))
{var c__5632__auto___11313 = cljs.core.chunk_first.call(null,seq__8990_11312__$1);{
var G__11314 = cljs.core.chunk_rest.call(null,seq__8990_11312__$1);
var G__11315 = c__5632__auto___11313;
var G__11316 = cljs.core.count.call(null,c__5632__auto___11313);
var G__11317 = 0;
seq__8990_11302 = G__11314;
chunk__8991_11303 = G__11315;
count__8992_11304 = G__11316;
i__8993_11305 = G__11317;
continue;
}
} else
{var arg__7198__auto___11318 = cljs.core.first.call(null,seq__8990_11312__$1);a__7197__auto__.push(arg__7198__auto___11318);
{
var G__11319 = cljs.core.next.call(null,seq__8990_11312__$1);
var G__11320 = null;
var G__11321 = 0;
var G__11322 = 0;
seq__8990_11302 = G__11319;
chunk__8991_11303 = G__11320;
count__8992_11304 = G__11321;
i__8993_11305 = G__11322;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.tfoot.apply(null,a__7197__auto__);
};
var tfoot = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return tfoot__delegate.call(this,args__7196__auto__);};
tfoot.cljs$lang$maxFixedArity = 0;
tfoot.cljs$lang$applyTo = (function (arglist__11323){
var args__7196__auto__ = cljs.core.seq(arglist__11323);
return tfoot__delegate(args__7196__auto__);
});
tfoot.cljs$core$IFn$_invoke$arity$variadic = tfoot__delegate;
return tfoot;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.th = (function() { 
var th__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8998_11324 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8999_11325 = null;var count__9000_11326 = 0;var i__9001_11327 = 0;while(true){
if((i__9001_11327 < count__9000_11326))
{var arg__7198__auto___11328 = cljs.core._nth.call(null,chunk__8999_11325,i__9001_11327);a__7197__auto__.push(arg__7198__auto___11328);
{
var G__11329 = seq__8998_11324;
var G__11330 = chunk__8999_11325;
var G__11331 = count__9000_11326;
var G__11332 = (i__9001_11327 + 1);
seq__8998_11324 = G__11329;
chunk__8999_11325 = G__11330;
count__9000_11326 = G__11331;
i__9001_11327 = G__11332;
continue;
}
} else
{var temp__4092__auto___11333 = cljs.core.seq.call(null,seq__8998_11324);if(temp__4092__auto___11333)
{var seq__8998_11334__$1 = temp__4092__auto___11333;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8998_11334__$1))
{var c__5632__auto___11335 = cljs.core.chunk_first.call(null,seq__8998_11334__$1);{
var G__11336 = cljs.core.chunk_rest.call(null,seq__8998_11334__$1);
var G__11337 = c__5632__auto___11335;
var G__11338 = cljs.core.count.call(null,c__5632__auto___11335);
var G__11339 = 0;
seq__8998_11324 = G__11336;
chunk__8999_11325 = G__11337;
count__9000_11326 = G__11338;
i__9001_11327 = G__11339;
continue;
}
} else
{var arg__7198__auto___11340 = cljs.core.first.call(null,seq__8998_11334__$1);a__7197__auto__.push(arg__7198__auto___11340);
{
var G__11341 = cljs.core.next.call(null,seq__8998_11334__$1);
var G__11342 = null;
var G__11343 = 0;
var G__11344 = 0;
seq__8998_11324 = G__11341;
chunk__8999_11325 = G__11342;
count__9000_11326 = G__11343;
i__9001_11327 = G__11344;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.th.apply(null,a__7197__auto__);
};
var th = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return th__delegate.call(this,args__7196__auto__);};
th.cljs$lang$maxFixedArity = 0;
th.cljs$lang$applyTo = (function (arglist__11345){
var args__7196__auto__ = cljs.core.seq(arglist__11345);
return th__delegate(args__7196__auto__);
});
th.cljs$core$IFn$_invoke$arity$variadic = th__delegate;
return th;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.thead = (function() { 
var thead__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__9006_11346 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__9007_11347 = null;var count__9008_11348 = 0;var i__9009_11349 = 0;while(true){
if((i__9009_11349 < count__9008_11348))
{var arg__7198__auto___11350 = cljs.core._nth.call(null,chunk__9007_11347,i__9009_11349);a__7197__auto__.push(arg__7198__auto___11350);
{
var G__11351 = seq__9006_11346;
var G__11352 = chunk__9007_11347;
var G__11353 = count__9008_11348;
var G__11354 = (i__9009_11349 + 1);
seq__9006_11346 = G__11351;
chunk__9007_11347 = G__11352;
count__9008_11348 = G__11353;
i__9009_11349 = G__11354;
continue;
}
} else
{var temp__4092__auto___11355 = cljs.core.seq.call(null,seq__9006_11346);if(temp__4092__auto___11355)
{var seq__9006_11356__$1 = temp__4092__auto___11355;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9006_11356__$1))
{var c__5632__auto___11357 = cljs.core.chunk_first.call(null,seq__9006_11356__$1);{
var G__11358 = cljs.core.chunk_rest.call(null,seq__9006_11356__$1);
var G__11359 = c__5632__auto___11357;
var G__11360 = cljs.core.count.call(null,c__5632__auto___11357);
var G__11361 = 0;
seq__9006_11346 = G__11358;
chunk__9007_11347 = G__11359;
count__9008_11348 = G__11360;
i__9009_11349 = G__11361;
continue;
}
} else
{var arg__7198__auto___11362 = cljs.core.first.call(null,seq__9006_11356__$1);a__7197__auto__.push(arg__7198__auto___11362);
{
var G__11363 = cljs.core.next.call(null,seq__9006_11356__$1);
var G__11364 = null;
var G__11365 = 0;
var G__11366 = 0;
seq__9006_11346 = G__11363;
chunk__9007_11347 = G__11364;
count__9008_11348 = G__11365;
i__9009_11349 = G__11366;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.thead.apply(null,a__7197__auto__);
};
var thead = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return thead__delegate.call(this,args__7196__auto__);};
thead.cljs$lang$maxFixedArity = 0;
thead.cljs$lang$applyTo = (function (arglist__11367){
var args__7196__auto__ = cljs.core.seq(arglist__11367);
return thead__delegate(args__7196__auto__);
});
thead.cljs$core$IFn$_invoke$arity$variadic = thead__delegate;
return thead;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.time = (function() { 
var time__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__9014_11368 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__9015_11369 = null;var count__9016_11370 = 0;var i__9017_11371 = 0;while(true){
if((i__9017_11371 < count__9016_11370))
{var arg__7198__auto___11372 = cljs.core._nth.call(null,chunk__9015_11369,i__9017_11371);a__7197__auto__.push(arg__7198__auto___11372);
{
var G__11373 = seq__9014_11368;
var G__11374 = chunk__9015_11369;
var G__11375 = count__9016_11370;
var G__11376 = (i__9017_11371 + 1);
seq__9014_11368 = G__11373;
chunk__9015_11369 = G__11374;
count__9016_11370 = G__11375;
i__9017_11371 = G__11376;
continue;
}
} else
{var temp__4092__auto___11377 = cljs.core.seq.call(null,seq__9014_11368);if(temp__4092__auto___11377)
{var seq__9014_11378__$1 = temp__4092__auto___11377;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9014_11378__$1))
{var c__5632__auto___11379 = cljs.core.chunk_first.call(null,seq__9014_11378__$1);{
var G__11380 = cljs.core.chunk_rest.call(null,seq__9014_11378__$1);
var G__11381 = c__5632__auto___11379;
var G__11382 = cljs.core.count.call(null,c__5632__auto___11379);
var G__11383 = 0;
seq__9014_11368 = G__11380;
chunk__9015_11369 = G__11381;
count__9016_11370 = G__11382;
i__9017_11371 = G__11383;
continue;
}
} else
{var arg__7198__auto___11384 = cljs.core.first.call(null,seq__9014_11378__$1);a__7197__auto__.push(arg__7198__auto___11384);
{
var G__11385 = cljs.core.next.call(null,seq__9014_11378__$1);
var G__11386 = null;
var G__11387 = 0;
var G__11388 = 0;
seq__9014_11368 = G__11385;
chunk__9015_11369 = G__11386;
count__9016_11370 = G__11387;
i__9017_11371 = G__11388;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.time.apply(null,a__7197__auto__);
};
var time = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return time__delegate.call(this,args__7196__auto__);};
time.cljs$lang$maxFixedArity = 0;
time.cljs$lang$applyTo = (function (arglist__11389){
var args__7196__auto__ = cljs.core.seq(arglist__11389);
return time__delegate(args__7196__auto__);
});
time.cljs$core$IFn$_invoke$arity$variadic = time__delegate;
return time;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.title = (function() { 
var title__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__9022_11390 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__9023_11391 = null;var count__9024_11392 = 0;var i__9025_11393 = 0;while(true){
if((i__9025_11393 < count__9024_11392))
{var arg__7198__auto___11394 = cljs.core._nth.call(null,chunk__9023_11391,i__9025_11393);a__7197__auto__.push(arg__7198__auto___11394);
{
var G__11395 = seq__9022_11390;
var G__11396 = chunk__9023_11391;
var G__11397 = count__9024_11392;
var G__11398 = (i__9025_11393 + 1);
seq__9022_11390 = G__11395;
chunk__9023_11391 = G__11396;
count__9024_11392 = G__11397;
i__9025_11393 = G__11398;
continue;
}
} else
{var temp__4092__auto___11399 = cljs.core.seq.call(null,seq__9022_11390);if(temp__4092__auto___11399)
{var seq__9022_11400__$1 = temp__4092__auto___11399;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9022_11400__$1))
{var c__5632__auto___11401 = cljs.core.chunk_first.call(null,seq__9022_11400__$1);{
var G__11402 = cljs.core.chunk_rest.call(null,seq__9022_11400__$1);
var G__11403 = c__5632__auto___11401;
var G__11404 = cljs.core.count.call(null,c__5632__auto___11401);
var G__11405 = 0;
seq__9022_11390 = G__11402;
chunk__9023_11391 = G__11403;
count__9024_11392 = G__11404;
i__9025_11393 = G__11405;
continue;
}
} else
{var arg__7198__auto___11406 = cljs.core.first.call(null,seq__9022_11400__$1);a__7197__auto__.push(arg__7198__auto___11406);
{
var G__11407 = cljs.core.next.call(null,seq__9022_11400__$1);
var G__11408 = null;
var G__11409 = 0;
var G__11410 = 0;
seq__9022_11390 = G__11407;
chunk__9023_11391 = G__11408;
count__9024_11392 = G__11409;
i__9025_11393 = G__11410;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.title.apply(null,a__7197__auto__);
};
var title = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return title__delegate.call(this,args__7196__auto__);};
title.cljs$lang$maxFixedArity = 0;
title.cljs$lang$applyTo = (function (arglist__11411){
var args__7196__auto__ = cljs.core.seq(arglist__11411);
return title__delegate(args__7196__auto__);
});
title.cljs$core$IFn$_invoke$arity$variadic = title__delegate;
return title;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.tr = (function() { 
var tr__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__9030_11412 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__9031_11413 = null;var count__9032_11414 = 0;var i__9033_11415 = 0;while(true){
if((i__9033_11415 < count__9032_11414))
{var arg__7198__auto___11416 = cljs.core._nth.call(null,chunk__9031_11413,i__9033_11415);a__7197__auto__.push(arg__7198__auto___11416);
{
var G__11417 = seq__9030_11412;
var G__11418 = chunk__9031_11413;
var G__11419 = count__9032_11414;
var G__11420 = (i__9033_11415 + 1);
seq__9030_11412 = G__11417;
chunk__9031_11413 = G__11418;
count__9032_11414 = G__11419;
i__9033_11415 = G__11420;
continue;
}
} else
{var temp__4092__auto___11421 = cljs.core.seq.call(null,seq__9030_11412);if(temp__4092__auto___11421)
{var seq__9030_11422__$1 = temp__4092__auto___11421;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9030_11422__$1))
{var c__5632__auto___11423 = cljs.core.chunk_first.call(null,seq__9030_11422__$1);{
var G__11424 = cljs.core.chunk_rest.call(null,seq__9030_11422__$1);
var G__11425 = c__5632__auto___11423;
var G__11426 = cljs.core.count.call(null,c__5632__auto___11423);
var G__11427 = 0;
seq__9030_11412 = G__11424;
chunk__9031_11413 = G__11425;
count__9032_11414 = G__11426;
i__9033_11415 = G__11427;
continue;
}
} else
{var arg__7198__auto___11428 = cljs.core.first.call(null,seq__9030_11422__$1);a__7197__auto__.push(arg__7198__auto___11428);
{
var G__11429 = cljs.core.next.call(null,seq__9030_11422__$1);
var G__11430 = null;
var G__11431 = 0;
var G__11432 = 0;
seq__9030_11412 = G__11429;
chunk__9031_11413 = G__11430;
count__9032_11414 = G__11431;
i__9033_11415 = G__11432;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.tr.apply(null,a__7197__auto__);
};
var tr = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return tr__delegate.call(this,args__7196__auto__);};
tr.cljs$lang$maxFixedArity = 0;
tr.cljs$lang$applyTo = (function (arglist__11433){
var args__7196__auto__ = cljs.core.seq(arglist__11433);
return tr__delegate(args__7196__auto__);
});
tr.cljs$core$IFn$_invoke$arity$variadic = tr__delegate;
return tr;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.track = (function() { 
var track__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__9038_11434 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__9039_11435 = null;var count__9040_11436 = 0;var i__9041_11437 = 0;while(true){
if((i__9041_11437 < count__9040_11436))
{var arg__7198__auto___11438 = cljs.core._nth.call(null,chunk__9039_11435,i__9041_11437);a__7197__auto__.push(arg__7198__auto___11438);
{
var G__11439 = seq__9038_11434;
var G__11440 = chunk__9039_11435;
var G__11441 = count__9040_11436;
var G__11442 = (i__9041_11437 + 1);
seq__9038_11434 = G__11439;
chunk__9039_11435 = G__11440;
count__9040_11436 = G__11441;
i__9041_11437 = G__11442;
continue;
}
} else
{var temp__4092__auto___11443 = cljs.core.seq.call(null,seq__9038_11434);if(temp__4092__auto___11443)
{var seq__9038_11444__$1 = temp__4092__auto___11443;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9038_11444__$1))
{var c__5632__auto___11445 = cljs.core.chunk_first.call(null,seq__9038_11444__$1);{
var G__11446 = cljs.core.chunk_rest.call(null,seq__9038_11444__$1);
var G__11447 = c__5632__auto___11445;
var G__11448 = cljs.core.count.call(null,c__5632__auto___11445);
var G__11449 = 0;
seq__9038_11434 = G__11446;
chunk__9039_11435 = G__11447;
count__9040_11436 = G__11448;
i__9041_11437 = G__11449;
continue;
}
} else
{var arg__7198__auto___11450 = cljs.core.first.call(null,seq__9038_11444__$1);a__7197__auto__.push(arg__7198__auto___11450);
{
var G__11451 = cljs.core.next.call(null,seq__9038_11444__$1);
var G__11452 = null;
var G__11453 = 0;
var G__11454 = 0;
seq__9038_11434 = G__11451;
chunk__9039_11435 = G__11452;
count__9040_11436 = G__11453;
i__9041_11437 = G__11454;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.track.apply(null,a__7197__auto__);
};
var track = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return track__delegate.call(this,args__7196__auto__);};
track.cljs$lang$maxFixedArity = 0;
track.cljs$lang$applyTo = (function (arglist__11455){
var args__7196__auto__ = cljs.core.seq(arglist__11455);
return track__delegate(args__7196__auto__);
});
track.cljs$core$IFn$_invoke$arity$variadic = track__delegate;
return track;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.u = (function() { 
var u__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__9046_11456 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__9047_11457 = null;var count__9048_11458 = 0;var i__9049_11459 = 0;while(true){
if((i__9049_11459 < count__9048_11458))
{var arg__7198__auto___11460 = cljs.core._nth.call(null,chunk__9047_11457,i__9049_11459);a__7197__auto__.push(arg__7198__auto___11460);
{
var G__11461 = seq__9046_11456;
var G__11462 = chunk__9047_11457;
var G__11463 = count__9048_11458;
var G__11464 = (i__9049_11459 + 1);
seq__9046_11456 = G__11461;
chunk__9047_11457 = G__11462;
count__9048_11458 = G__11463;
i__9049_11459 = G__11464;
continue;
}
} else
{var temp__4092__auto___11465 = cljs.core.seq.call(null,seq__9046_11456);if(temp__4092__auto___11465)
{var seq__9046_11466__$1 = temp__4092__auto___11465;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9046_11466__$1))
{var c__5632__auto___11467 = cljs.core.chunk_first.call(null,seq__9046_11466__$1);{
var G__11468 = cljs.core.chunk_rest.call(null,seq__9046_11466__$1);
var G__11469 = c__5632__auto___11467;
var G__11470 = cljs.core.count.call(null,c__5632__auto___11467);
var G__11471 = 0;
seq__9046_11456 = G__11468;
chunk__9047_11457 = G__11469;
count__9048_11458 = G__11470;
i__9049_11459 = G__11471;
continue;
}
} else
{var arg__7198__auto___11472 = cljs.core.first.call(null,seq__9046_11466__$1);a__7197__auto__.push(arg__7198__auto___11472);
{
var G__11473 = cljs.core.next.call(null,seq__9046_11466__$1);
var G__11474 = null;
var G__11475 = 0;
var G__11476 = 0;
seq__9046_11456 = G__11473;
chunk__9047_11457 = G__11474;
count__9048_11458 = G__11475;
i__9049_11459 = G__11476;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.u.apply(null,a__7197__auto__);
};
var u = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return u__delegate.call(this,args__7196__auto__);};
u.cljs$lang$maxFixedArity = 0;
u.cljs$lang$applyTo = (function (arglist__11477){
var args__7196__auto__ = cljs.core.seq(arglist__11477);
return u__delegate(args__7196__auto__);
});
u.cljs$core$IFn$_invoke$arity$variadic = u__delegate;
return u;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.ul = (function() { 
var ul__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__9054_11478 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__9055_11479 = null;var count__9056_11480 = 0;var i__9057_11481 = 0;while(true){
if((i__9057_11481 < count__9056_11480))
{var arg__7198__auto___11482 = cljs.core._nth.call(null,chunk__9055_11479,i__9057_11481);a__7197__auto__.push(arg__7198__auto___11482);
{
var G__11483 = seq__9054_11478;
var G__11484 = chunk__9055_11479;
var G__11485 = count__9056_11480;
var G__11486 = (i__9057_11481 + 1);
seq__9054_11478 = G__11483;
chunk__9055_11479 = G__11484;
count__9056_11480 = G__11485;
i__9057_11481 = G__11486;
continue;
}
} else
{var temp__4092__auto___11487 = cljs.core.seq.call(null,seq__9054_11478);if(temp__4092__auto___11487)
{var seq__9054_11488__$1 = temp__4092__auto___11487;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9054_11488__$1))
{var c__5632__auto___11489 = cljs.core.chunk_first.call(null,seq__9054_11488__$1);{
var G__11490 = cljs.core.chunk_rest.call(null,seq__9054_11488__$1);
var G__11491 = c__5632__auto___11489;
var G__11492 = cljs.core.count.call(null,c__5632__auto___11489);
var G__11493 = 0;
seq__9054_11478 = G__11490;
chunk__9055_11479 = G__11491;
count__9056_11480 = G__11492;
i__9057_11481 = G__11493;
continue;
}
} else
{var arg__7198__auto___11494 = cljs.core.first.call(null,seq__9054_11488__$1);a__7197__auto__.push(arg__7198__auto___11494);
{
var G__11495 = cljs.core.next.call(null,seq__9054_11488__$1);
var G__11496 = null;
var G__11497 = 0;
var G__11498 = 0;
seq__9054_11478 = G__11495;
chunk__9055_11479 = G__11496;
count__9056_11480 = G__11497;
i__9057_11481 = G__11498;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.ul.apply(null,a__7197__auto__);
};
var ul = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ul__delegate.call(this,args__7196__auto__);};
ul.cljs$lang$maxFixedArity = 0;
ul.cljs$lang$applyTo = (function (arglist__11499){
var args__7196__auto__ = cljs.core.seq(arglist__11499);
return ul__delegate(args__7196__auto__);
});
ul.cljs$core$IFn$_invoke$arity$variadic = ul__delegate;
return ul;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.var$ = (function() { 
var var$__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__9062_11500 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__9063_11501 = null;var count__9064_11502 = 0;var i__9065_11503 = 0;while(true){
if((i__9065_11503 < count__9064_11502))
{var arg__7198__auto___11504 = cljs.core._nth.call(null,chunk__9063_11501,i__9065_11503);a__7197__auto__.push(arg__7198__auto___11504);
{
var G__11505 = seq__9062_11500;
var G__11506 = chunk__9063_11501;
var G__11507 = count__9064_11502;
var G__11508 = (i__9065_11503 + 1);
seq__9062_11500 = G__11505;
chunk__9063_11501 = G__11506;
count__9064_11502 = G__11507;
i__9065_11503 = G__11508;
continue;
}
} else
{var temp__4092__auto___11509 = cljs.core.seq.call(null,seq__9062_11500);if(temp__4092__auto___11509)
{var seq__9062_11510__$1 = temp__4092__auto___11509;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9062_11510__$1))
{var c__5632__auto___11511 = cljs.core.chunk_first.call(null,seq__9062_11510__$1);{
var G__11512 = cljs.core.chunk_rest.call(null,seq__9062_11510__$1);
var G__11513 = c__5632__auto___11511;
var G__11514 = cljs.core.count.call(null,c__5632__auto___11511);
var G__11515 = 0;
seq__9062_11500 = G__11512;
chunk__9063_11501 = G__11513;
count__9064_11502 = G__11514;
i__9065_11503 = G__11515;
continue;
}
} else
{var arg__7198__auto___11516 = cljs.core.first.call(null,seq__9062_11510__$1);a__7197__auto__.push(arg__7198__auto___11516);
{
var G__11517 = cljs.core.next.call(null,seq__9062_11510__$1);
var G__11518 = null;
var G__11519 = 0;
var G__11520 = 0;
seq__9062_11500 = G__11517;
chunk__9063_11501 = G__11518;
count__9064_11502 = G__11519;
i__9065_11503 = G__11520;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.var$.apply(null,a__7197__auto__);
};
var var$ = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return var$__delegate.call(this,args__7196__auto__);};
var$.cljs$lang$maxFixedArity = 0;
var$.cljs$lang$applyTo = (function (arglist__11521){
var args__7196__auto__ = cljs.core.seq(arglist__11521);
return var$__delegate(args__7196__auto__);
});
var$.cljs$core$IFn$_invoke$arity$variadic = var$__delegate;
return var$;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.video = (function() { 
var video__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__9070_11522 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__9071_11523 = null;var count__9072_11524 = 0;var i__9073_11525 = 0;while(true){
if((i__9073_11525 < count__9072_11524))
{var arg__7198__auto___11526 = cljs.core._nth.call(null,chunk__9071_11523,i__9073_11525);a__7197__auto__.push(arg__7198__auto___11526);
{
var G__11527 = seq__9070_11522;
var G__11528 = chunk__9071_11523;
var G__11529 = count__9072_11524;
var G__11530 = (i__9073_11525 + 1);
seq__9070_11522 = G__11527;
chunk__9071_11523 = G__11528;
count__9072_11524 = G__11529;
i__9073_11525 = G__11530;
continue;
}
} else
{var temp__4092__auto___11531 = cljs.core.seq.call(null,seq__9070_11522);if(temp__4092__auto___11531)
{var seq__9070_11532__$1 = temp__4092__auto___11531;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9070_11532__$1))
{var c__5632__auto___11533 = cljs.core.chunk_first.call(null,seq__9070_11532__$1);{
var G__11534 = cljs.core.chunk_rest.call(null,seq__9070_11532__$1);
var G__11535 = c__5632__auto___11533;
var G__11536 = cljs.core.count.call(null,c__5632__auto___11533);
var G__11537 = 0;
seq__9070_11522 = G__11534;
chunk__9071_11523 = G__11535;
count__9072_11524 = G__11536;
i__9073_11525 = G__11537;
continue;
}
} else
{var arg__7198__auto___11538 = cljs.core.first.call(null,seq__9070_11532__$1);a__7197__auto__.push(arg__7198__auto___11538);
{
var G__11539 = cljs.core.next.call(null,seq__9070_11532__$1);
var G__11540 = null;
var G__11541 = 0;
var G__11542 = 0;
seq__9070_11522 = G__11539;
chunk__9071_11523 = G__11540;
count__9072_11524 = G__11541;
i__9073_11525 = G__11542;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.video.apply(null,a__7197__auto__);
};
var video = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return video__delegate.call(this,args__7196__auto__);};
video.cljs$lang$maxFixedArity = 0;
video.cljs$lang$applyTo = (function (arglist__11543){
var args__7196__auto__ = cljs.core.seq(arglist__11543);
return video__delegate(args__7196__auto__);
});
video.cljs$core$IFn$_invoke$arity$variadic = video__delegate;
return video;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.wbr = (function() { 
var wbr__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__9078_11544 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__9079_11545 = null;var count__9080_11546 = 0;var i__9081_11547 = 0;while(true){
if((i__9081_11547 < count__9080_11546))
{var arg__7198__auto___11548 = cljs.core._nth.call(null,chunk__9079_11545,i__9081_11547);a__7197__auto__.push(arg__7198__auto___11548);
{
var G__11549 = seq__9078_11544;
var G__11550 = chunk__9079_11545;
var G__11551 = count__9080_11546;
var G__11552 = (i__9081_11547 + 1);
seq__9078_11544 = G__11549;
chunk__9079_11545 = G__11550;
count__9080_11546 = G__11551;
i__9081_11547 = G__11552;
continue;
}
} else
{var temp__4092__auto___11553 = cljs.core.seq.call(null,seq__9078_11544);if(temp__4092__auto___11553)
{var seq__9078_11554__$1 = temp__4092__auto___11553;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9078_11554__$1))
{var c__5632__auto___11555 = cljs.core.chunk_first.call(null,seq__9078_11554__$1);{
var G__11556 = cljs.core.chunk_rest.call(null,seq__9078_11554__$1);
var G__11557 = c__5632__auto___11555;
var G__11558 = cljs.core.count.call(null,c__5632__auto___11555);
var G__11559 = 0;
seq__9078_11544 = G__11556;
chunk__9079_11545 = G__11557;
count__9080_11546 = G__11558;
i__9081_11547 = G__11559;
continue;
}
} else
{var arg__7198__auto___11560 = cljs.core.first.call(null,seq__9078_11554__$1);a__7197__auto__.push(arg__7198__auto___11560);
{
var G__11561 = cljs.core.next.call(null,seq__9078_11554__$1);
var G__11562 = null;
var G__11563 = 0;
var G__11564 = 0;
seq__9078_11544 = G__11561;
chunk__9079_11545 = G__11562;
count__9080_11546 = G__11563;
i__9081_11547 = G__11564;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.wbr.apply(null,a__7197__auto__);
};
var wbr = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return wbr__delegate.call(this,args__7196__auto__);};
wbr.cljs$lang$maxFixedArity = 0;
wbr.cljs$lang$applyTo = (function (arglist__11565){
var args__7196__auto__ = cljs.core.seq(arglist__11565);
return wbr__delegate(args__7196__auto__);
});
wbr.cljs$core$IFn$_invoke$arity$variadic = wbr__delegate;
return wbr;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.circle = (function() { 
var circle__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__9086_11566 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__9087_11567 = null;var count__9088_11568 = 0;var i__9089_11569 = 0;while(true){
if((i__9089_11569 < count__9088_11568))
{var arg__7198__auto___11570 = cljs.core._nth.call(null,chunk__9087_11567,i__9089_11569);a__7197__auto__.push(arg__7198__auto___11570);
{
var G__11571 = seq__9086_11566;
var G__11572 = chunk__9087_11567;
var G__11573 = count__9088_11568;
var G__11574 = (i__9089_11569 + 1);
seq__9086_11566 = G__11571;
chunk__9087_11567 = G__11572;
count__9088_11568 = G__11573;
i__9089_11569 = G__11574;
continue;
}
} else
{var temp__4092__auto___11575 = cljs.core.seq.call(null,seq__9086_11566);if(temp__4092__auto___11575)
{var seq__9086_11576__$1 = temp__4092__auto___11575;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9086_11576__$1))
{var c__5632__auto___11577 = cljs.core.chunk_first.call(null,seq__9086_11576__$1);{
var G__11578 = cljs.core.chunk_rest.call(null,seq__9086_11576__$1);
var G__11579 = c__5632__auto___11577;
var G__11580 = cljs.core.count.call(null,c__5632__auto___11577);
var G__11581 = 0;
seq__9086_11566 = G__11578;
chunk__9087_11567 = G__11579;
count__9088_11568 = G__11580;
i__9089_11569 = G__11581;
continue;
}
} else
{var arg__7198__auto___11582 = cljs.core.first.call(null,seq__9086_11576__$1);a__7197__auto__.push(arg__7198__auto___11582);
{
var G__11583 = cljs.core.next.call(null,seq__9086_11576__$1);
var G__11584 = null;
var G__11585 = 0;
var G__11586 = 0;
seq__9086_11566 = G__11583;
chunk__9087_11567 = G__11584;
count__9088_11568 = G__11585;
i__9089_11569 = G__11586;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.circle.apply(null,a__7197__auto__);
};
var circle = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return circle__delegate.call(this,args__7196__auto__);};
circle.cljs$lang$maxFixedArity = 0;
circle.cljs$lang$applyTo = (function (arglist__11587){
var args__7196__auto__ = cljs.core.seq(arglist__11587);
return circle__delegate(args__7196__auto__);
});
circle.cljs$core$IFn$_invoke$arity$variadic = circle__delegate;
return circle;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.g = (function() { 
var g__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__9094_11588 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__9095_11589 = null;var count__9096_11590 = 0;var i__9097_11591 = 0;while(true){
if((i__9097_11591 < count__9096_11590))
{var arg__7198__auto___11592 = cljs.core._nth.call(null,chunk__9095_11589,i__9097_11591);a__7197__auto__.push(arg__7198__auto___11592);
{
var G__11593 = seq__9094_11588;
var G__11594 = chunk__9095_11589;
var G__11595 = count__9096_11590;
var G__11596 = (i__9097_11591 + 1);
seq__9094_11588 = G__11593;
chunk__9095_11589 = G__11594;
count__9096_11590 = G__11595;
i__9097_11591 = G__11596;
continue;
}
} else
{var temp__4092__auto___11597 = cljs.core.seq.call(null,seq__9094_11588);if(temp__4092__auto___11597)
{var seq__9094_11598__$1 = temp__4092__auto___11597;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9094_11598__$1))
{var c__5632__auto___11599 = cljs.core.chunk_first.call(null,seq__9094_11598__$1);{
var G__11600 = cljs.core.chunk_rest.call(null,seq__9094_11598__$1);
var G__11601 = c__5632__auto___11599;
var G__11602 = cljs.core.count.call(null,c__5632__auto___11599);
var G__11603 = 0;
seq__9094_11588 = G__11600;
chunk__9095_11589 = G__11601;
count__9096_11590 = G__11602;
i__9097_11591 = G__11603;
continue;
}
} else
{var arg__7198__auto___11604 = cljs.core.first.call(null,seq__9094_11598__$1);a__7197__auto__.push(arg__7198__auto___11604);
{
var G__11605 = cljs.core.next.call(null,seq__9094_11598__$1);
var G__11606 = null;
var G__11607 = 0;
var G__11608 = 0;
seq__9094_11588 = G__11605;
chunk__9095_11589 = G__11606;
count__9096_11590 = G__11607;
i__9097_11591 = G__11608;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.g.apply(null,a__7197__auto__);
};
var g = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return g__delegate.call(this,args__7196__auto__);};
g.cljs$lang$maxFixedArity = 0;
g.cljs$lang$applyTo = (function (arglist__11609){
var args__7196__auto__ = cljs.core.seq(arglist__11609);
return g__delegate(args__7196__auto__);
});
g.cljs$core$IFn$_invoke$arity$variadic = g__delegate;
return g;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.line = (function() { 
var line__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__9102_11610 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__9103_11611 = null;var count__9104_11612 = 0;var i__9105_11613 = 0;while(true){
if((i__9105_11613 < count__9104_11612))
{var arg__7198__auto___11614 = cljs.core._nth.call(null,chunk__9103_11611,i__9105_11613);a__7197__auto__.push(arg__7198__auto___11614);
{
var G__11615 = seq__9102_11610;
var G__11616 = chunk__9103_11611;
var G__11617 = count__9104_11612;
var G__11618 = (i__9105_11613 + 1);
seq__9102_11610 = G__11615;
chunk__9103_11611 = G__11616;
count__9104_11612 = G__11617;
i__9105_11613 = G__11618;
continue;
}
} else
{var temp__4092__auto___11619 = cljs.core.seq.call(null,seq__9102_11610);if(temp__4092__auto___11619)
{var seq__9102_11620__$1 = temp__4092__auto___11619;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9102_11620__$1))
{var c__5632__auto___11621 = cljs.core.chunk_first.call(null,seq__9102_11620__$1);{
var G__11622 = cljs.core.chunk_rest.call(null,seq__9102_11620__$1);
var G__11623 = c__5632__auto___11621;
var G__11624 = cljs.core.count.call(null,c__5632__auto___11621);
var G__11625 = 0;
seq__9102_11610 = G__11622;
chunk__9103_11611 = G__11623;
count__9104_11612 = G__11624;
i__9105_11613 = G__11625;
continue;
}
} else
{var arg__7198__auto___11626 = cljs.core.first.call(null,seq__9102_11620__$1);a__7197__auto__.push(arg__7198__auto___11626);
{
var G__11627 = cljs.core.next.call(null,seq__9102_11620__$1);
var G__11628 = null;
var G__11629 = 0;
var G__11630 = 0;
seq__9102_11610 = G__11627;
chunk__9103_11611 = G__11628;
count__9104_11612 = G__11629;
i__9105_11613 = G__11630;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.line.apply(null,a__7197__auto__);
};
var line = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return line__delegate.call(this,args__7196__auto__);};
line.cljs$lang$maxFixedArity = 0;
line.cljs$lang$applyTo = (function (arglist__11631){
var args__7196__auto__ = cljs.core.seq(arglist__11631);
return line__delegate(args__7196__auto__);
});
line.cljs$core$IFn$_invoke$arity$variadic = line__delegate;
return line;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.path = (function() { 
var path__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__9110_11632 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__9111_11633 = null;var count__9112_11634 = 0;var i__9113_11635 = 0;while(true){
if((i__9113_11635 < count__9112_11634))
{var arg__7198__auto___11636 = cljs.core._nth.call(null,chunk__9111_11633,i__9113_11635);a__7197__auto__.push(arg__7198__auto___11636);
{
var G__11637 = seq__9110_11632;
var G__11638 = chunk__9111_11633;
var G__11639 = count__9112_11634;
var G__11640 = (i__9113_11635 + 1);
seq__9110_11632 = G__11637;
chunk__9111_11633 = G__11638;
count__9112_11634 = G__11639;
i__9113_11635 = G__11640;
continue;
}
} else
{var temp__4092__auto___11641 = cljs.core.seq.call(null,seq__9110_11632);if(temp__4092__auto___11641)
{var seq__9110_11642__$1 = temp__4092__auto___11641;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9110_11642__$1))
{var c__5632__auto___11643 = cljs.core.chunk_first.call(null,seq__9110_11642__$1);{
var G__11644 = cljs.core.chunk_rest.call(null,seq__9110_11642__$1);
var G__11645 = c__5632__auto___11643;
var G__11646 = cljs.core.count.call(null,c__5632__auto___11643);
var G__11647 = 0;
seq__9110_11632 = G__11644;
chunk__9111_11633 = G__11645;
count__9112_11634 = G__11646;
i__9113_11635 = G__11647;
continue;
}
} else
{var arg__7198__auto___11648 = cljs.core.first.call(null,seq__9110_11642__$1);a__7197__auto__.push(arg__7198__auto___11648);
{
var G__11649 = cljs.core.next.call(null,seq__9110_11642__$1);
var G__11650 = null;
var G__11651 = 0;
var G__11652 = 0;
seq__9110_11632 = G__11649;
chunk__9111_11633 = G__11650;
count__9112_11634 = G__11651;
i__9113_11635 = G__11652;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.path.apply(null,a__7197__auto__);
};
var path = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return path__delegate.call(this,args__7196__auto__);};
path.cljs$lang$maxFixedArity = 0;
path.cljs$lang$applyTo = (function (arglist__11653){
var args__7196__auto__ = cljs.core.seq(arglist__11653);
return path__delegate(args__7196__auto__);
});
path.cljs$core$IFn$_invoke$arity$variadic = path__delegate;
return path;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.polygon = (function() { 
var polygon__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__9118_11654 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__9119_11655 = null;var count__9120_11656 = 0;var i__9121_11657 = 0;while(true){
if((i__9121_11657 < count__9120_11656))
{var arg__7198__auto___11658 = cljs.core._nth.call(null,chunk__9119_11655,i__9121_11657);a__7197__auto__.push(arg__7198__auto___11658);
{
var G__11659 = seq__9118_11654;
var G__11660 = chunk__9119_11655;
var G__11661 = count__9120_11656;
var G__11662 = (i__9121_11657 + 1);
seq__9118_11654 = G__11659;
chunk__9119_11655 = G__11660;
count__9120_11656 = G__11661;
i__9121_11657 = G__11662;
continue;
}
} else
{var temp__4092__auto___11663 = cljs.core.seq.call(null,seq__9118_11654);if(temp__4092__auto___11663)
{var seq__9118_11664__$1 = temp__4092__auto___11663;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9118_11664__$1))
{var c__5632__auto___11665 = cljs.core.chunk_first.call(null,seq__9118_11664__$1);{
var G__11666 = cljs.core.chunk_rest.call(null,seq__9118_11664__$1);
var G__11667 = c__5632__auto___11665;
var G__11668 = cljs.core.count.call(null,c__5632__auto___11665);
var G__11669 = 0;
seq__9118_11654 = G__11666;
chunk__9119_11655 = G__11667;
count__9120_11656 = G__11668;
i__9121_11657 = G__11669;
continue;
}
} else
{var arg__7198__auto___11670 = cljs.core.first.call(null,seq__9118_11664__$1);a__7197__auto__.push(arg__7198__auto___11670);
{
var G__11671 = cljs.core.next.call(null,seq__9118_11664__$1);
var G__11672 = null;
var G__11673 = 0;
var G__11674 = 0;
seq__9118_11654 = G__11671;
chunk__9119_11655 = G__11672;
count__9120_11656 = G__11673;
i__9121_11657 = G__11674;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.polygon.apply(null,a__7197__auto__);
};
var polygon = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return polygon__delegate.call(this,args__7196__auto__);};
polygon.cljs$lang$maxFixedArity = 0;
polygon.cljs$lang$applyTo = (function (arglist__11675){
var args__7196__auto__ = cljs.core.seq(arglist__11675);
return polygon__delegate(args__7196__auto__);
});
polygon.cljs$core$IFn$_invoke$arity$variadic = polygon__delegate;
return polygon;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.polyline = (function() { 
var polyline__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__9126_11676 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__9127_11677 = null;var count__9128_11678 = 0;var i__9129_11679 = 0;while(true){
if((i__9129_11679 < count__9128_11678))
{var arg__7198__auto___11680 = cljs.core._nth.call(null,chunk__9127_11677,i__9129_11679);a__7197__auto__.push(arg__7198__auto___11680);
{
var G__11681 = seq__9126_11676;
var G__11682 = chunk__9127_11677;
var G__11683 = count__9128_11678;
var G__11684 = (i__9129_11679 + 1);
seq__9126_11676 = G__11681;
chunk__9127_11677 = G__11682;
count__9128_11678 = G__11683;
i__9129_11679 = G__11684;
continue;
}
} else
{var temp__4092__auto___11685 = cljs.core.seq.call(null,seq__9126_11676);if(temp__4092__auto___11685)
{var seq__9126_11686__$1 = temp__4092__auto___11685;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9126_11686__$1))
{var c__5632__auto___11687 = cljs.core.chunk_first.call(null,seq__9126_11686__$1);{
var G__11688 = cljs.core.chunk_rest.call(null,seq__9126_11686__$1);
var G__11689 = c__5632__auto___11687;
var G__11690 = cljs.core.count.call(null,c__5632__auto___11687);
var G__11691 = 0;
seq__9126_11676 = G__11688;
chunk__9127_11677 = G__11689;
count__9128_11678 = G__11690;
i__9129_11679 = G__11691;
continue;
}
} else
{var arg__7198__auto___11692 = cljs.core.first.call(null,seq__9126_11686__$1);a__7197__auto__.push(arg__7198__auto___11692);
{
var G__11693 = cljs.core.next.call(null,seq__9126_11686__$1);
var G__11694 = null;
var G__11695 = 0;
var G__11696 = 0;
seq__9126_11676 = G__11693;
chunk__9127_11677 = G__11694;
count__9128_11678 = G__11695;
i__9129_11679 = G__11696;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.polyline.apply(null,a__7197__auto__);
};
var polyline = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return polyline__delegate.call(this,args__7196__auto__);};
polyline.cljs$lang$maxFixedArity = 0;
polyline.cljs$lang$applyTo = (function (arglist__11697){
var args__7196__auto__ = cljs.core.seq(arglist__11697);
return polyline__delegate(args__7196__auto__);
});
polyline.cljs$core$IFn$_invoke$arity$variadic = polyline__delegate;
return polyline;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.rect = (function() { 
var rect__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__9134_11698 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__9135_11699 = null;var count__9136_11700 = 0;var i__9137_11701 = 0;while(true){
if((i__9137_11701 < count__9136_11700))
{var arg__7198__auto___11702 = cljs.core._nth.call(null,chunk__9135_11699,i__9137_11701);a__7197__auto__.push(arg__7198__auto___11702);
{
var G__11703 = seq__9134_11698;
var G__11704 = chunk__9135_11699;
var G__11705 = count__9136_11700;
var G__11706 = (i__9137_11701 + 1);
seq__9134_11698 = G__11703;
chunk__9135_11699 = G__11704;
count__9136_11700 = G__11705;
i__9137_11701 = G__11706;
continue;
}
} else
{var temp__4092__auto___11707 = cljs.core.seq.call(null,seq__9134_11698);if(temp__4092__auto___11707)
{var seq__9134_11708__$1 = temp__4092__auto___11707;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9134_11708__$1))
{var c__5632__auto___11709 = cljs.core.chunk_first.call(null,seq__9134_11708__$1);{
var G__11710 = cljs.core.chunk_rest.call(null,seq__9134_11708__$1);
var G__11711 = c__5632__auto___11709;
var G__11712 = cljs.core.count.call(null,c__5632__auto___11709);
var G__11713 = 0;
seq__9134_11698 = G__11710;
chunk__9135_11699 = G__11711;
count__9136_11700 = G__11712;
i__9137_11701 = G__11713;
continue;
}
} else
{var arg__7198__auto___11714 = cljs.core.first.call(null,seq__9134_11708__$1);a__7197__auto__.push(arg__7198__auto___11714);
{
var G__11715 = cljs.core.next.call(null,seq__9134_11708__$1);
var G__11716 = null;
var G__11717 = 0;
var G__11718 = 0;
seq__9134_11698 = G__11715;
chunk__9135_11699 = G__11716;
count__9136_11700 = G__11717;
i__9137_11701 = G__11718;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.rect.apply(null,a__7197__auto__);
};
var rect = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return rect__delegate.call(this,args__7196__auto__);};
rect.cljs$lang$maxFixedArity = 0;
rect.cljs$lang$applyTo = (function (arglist__11719){
var args__7196__auto__ = cljs.core.seq(arglist__11719);
return rect__delegate(args__7196__auto__);
});
rect.cljs$core$IFn$_invoke$arity$variadic = rect__delegate;
return rect;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.svg = (function() { 
var svg__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__9142_11720 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__9143_11721 = null;var count__9144_11722 = 0;var i__9145_11723 = 0;while(true){
if((i__9145_11723 < count__9144_11722))
{var arg__7198__auto___11724 = cljs.core._nth.call(null,chunk__9143_11721,i__9145_11723);a__7197__auto__.push(arg__7198__auto___11724);
{
var G__11725 = seq__9142_11720;
var G__11726 = chunk__9143_11721;
var G__11727 = count__9144_11722;
var G__11728 = (i__9145_11723 + 1);
seq__9142_11720 = G__11725;
chunk__9143_11721 = G__11726;
count__9144_11722 = G__11727;
i__9145_11723 = G__11728;
continue;
}
} else
{var temp__4092__auto___11729 = cljs.core.seq.call(null,seq__9142_11720);if(temp__4092__auto___11729)
{var seq__9142_11730__$1 = temp__4092__auto___11729;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9142_11730__$1))
{var c__5632__auto___11731 = cljs.core.chunk_first.call(null,seq__9142_11730__$1);{
var G__11732 = cljs.core.chunk_rest.call(null,seq__9142_11730__$1);
var G__11733 = c__5632__auto___11731;
var G__11734 = cljs.core.count.call(null,c__5632__auto___11731);
var G__11735 = 0;
seq__9142_11720 = G__11732;
chunk__9143_11721 = G__11733;
count__9144_11722 = G__11734;
i__9145_11723 = G__11735;
continue;
}
} else
{var arg__7198__auto___11736 = cljs.core.first.call(null,seq__9142_11730__$1);a__7197__auto__.push(arg__7198__auto___11736);
{
var G__11737 = cljs.core.next.call(null,seq__9142_11730__$1);
var G__11738 = null;
var G__11739 = 0;
var G__11740 = 0;
seq__9142_11720 = G__11737;
chunk__9143_11721 = G__11738;
count__9144_11722 = G__11739;
i__9145_11723 = G__11740;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.svg.apply(null,a__7197__auto__);
};
var svg = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return svg__delegate.call(this,args__7196__auto__);};
svg.cljs$lang$maxFixedArity = 0;
svg.cljs$lang$applyTo = (function (arglist__11741){
var args__7196__auto__ = cljs.core.seq(arglist__11741);
return svg__delegate(args__7196__auto__);
});
svg.cljs$core$IFn$_invoke$arity$variadic = svg__delegate;
return svg;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.text = (function() { 
var text__delegate = function (args__7196__auto__){var a__7197__auto__ = [];a__7197__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7196__auto__)));
var seq__8454_11742 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7196__auto__));var chunk__8455_11743 = null;var count__8456_11744 = 0;var i__8457_11745 = 0;while(true){
if((i__8457_11745 < count__8456_11744))
{var arg__7198__auto___11746 = cljs.core._nth.call(null,chunk__8455_11743,i__8457_11745);a__7197__auto__.push(arg__7198__auto___11746);
{
var G__11747 = seq__8454_11742;
var G__11748 = chunk__8455_11743;
var G__11749 = count__8456_11744;
var G__11750 = (i__8457_11745 + 1);
seq__8454_11742 = G__11747;
chunk__8455_11743 = G__11748;
count__8456_11744 = G__11749;
i__8457_11745 = G__11750;
continue;
}
} else
{var temp__4092__auto___11751 = cljs.core.seq.call(null,seq__8454_11742);if(temp__4092__auto___11751)
{var seq__8454_11752__$1 = temp__4092__auto___11751;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8454_11752__$1))
{var c__5632__auto___11753 = cljs.core.chunk_first.call(null,seq__8454_11752__$1);{
var G__11754 = cljs.core.chunk_rest.call(null,seq__8454_11752__$1);
var G__11755 = c__5632__auto___11753;
var G__11756 = cljs.core.count.call(null,c__5632__auto___11753);
var G__11757 = 0;
seq__8454_11742 = G__11754;
chunk__8455_11743 = G__11755;
count__8456_11744 = G__11756;
i__8457_11745 = G__11757;
continue;
}
} else
{var arg__7198__auto___11758 = cljs.core.first.call(null,seq__8454_11752__$1);a__7197__auto__.push(arg__7198__auto___11758);
{
var G__11759 = cljs.core.next.call(null,seq__8454_11752__$1);
var G__11760 = null;
var G__11761 = 0;
var G__11762 = 0;
seq__8454_11742 = G__11759;
chunk__8455_11743 = G__11760;
count__8456_11744 = G__11761;
i__8457_11745 = G__11762;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.text.apply(null,a__7197__auto__);
};
var text = function (var_args){
var args__7196__auto__ = null;if (arguments.length > 0) {
  args__7196__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return text__delegate.call(this,args__7196__auto__);};
text.cljs$lang$maxFixedArity = 0;
text.cljs$lang$applyTo = (function (arglist__11763){
var args__7196__auto__ = cljs.core.seq(arglist__11763);
return text__delegate(args__7196__auto__);
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
lt.plugins.elm_light.autocompleter.handle_keypress = (function handle_keypress(p__8172,ev){var map__8175 = p__8172;var map__8175__$1 = ((cljs.core.seq_QMARK_.call(null,map__8175))?cljs.core.apply.call(null,cljs.core.hash_map,map__8175):map__8175);var props = map__8175__$1;var on_cancel = cljs.core.get.call(null,map__8175__$1,new cljs.core.Keyword(null,"on-cancel","on-cancel",600765850));var on_select = cljs.core.get.call(null,map__8175__$1,new cljs.core.Keyword(null,"on-select","on-select",1062468636));var on_down = cljs.core.get.call(null,map__8175__$1,new cljs.core.Keyword(null,"on-down","on-down",3936419650));var on_up = cljs.core.get.call(null,map__8175__$1,new cljs.core.Keyword(null,"on-up","on-up",1119739067));var kk = ev.which;var G__8176 = kk;if(cljs.core._EQ_.call(null,27,G__8176))
{ev.preventDefault();
ev.target.value = "";
return on_cancel.call(null);
} else
{if(cljs.core._EQ_.call(null,13,G__8176))
{ev.preventDefault();
var temp__4092__auto___8192 = lt.plugins.elm_light.autocompleter.find_active.call(null,new cljs.core.Keyword(null,"items","items",1114430258).cljs$core$IFn$_invoke$arity$1(props));if(cljs.core.truth_(temp__4092__auto___8192))
{var active_8193 = temp__4092__auto___8192;ev.target.value = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(active_8193);
} else
{}
return on_select.call(null);
} else
{if(cljs.core._EQ_.call(null,40,G__8176))
{ev.preventDefault();
return on_down.call(null);
} else
{if(cljs.core._EQ_.call(null,38,G__8176))
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
return (function (p1__8177_SHARP_){return "autocomplete-dropdown-item row".concat((cljs.core.truth_(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(p1__8177_SHARP_))?" autocomplete-active":""));
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
lt.plugins.elm_light.autocompleter.Adder = quiescent.component.call(null,(function (p__8178){var map__8179 = p__8178;var map__8179__$1 = ((cljs.core.seq_QMARK_.call(null,map__8179))?cljs.core.apply.call(null,cljs.core.hash_map,map__8179):map__8179);var props = map__8179__$1;var disabled = cljs.core.get.call(null,map__8179__$1,new cljs.core.Keyword(null,"disabled","disabled",1284845038));var on_add_package = cljs.core.get.call(null,map__8179__$1,new cljs.core.Keyword(null,"on-add-package","on-add-package",3601701790));return quiescent.dom.button.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",1004015509),"btn",new cljs.core.Keyword(null,"disabled","disabled",1284845038),disabled,new cljs.core.Keyword(null,"onClick","onClick",3956969051),((function (map__8179,map__8179__$1,props,disabled,on_add_package){
return (function (){return on_add_package.call(null);
});})(map__8179,map__8179__$1,props,disabled,on_add_package))
], null),"Add package");
}));
/**
* 
*/
lt.plugins.elm_light.autocompleter.Versions = quiescent.component.call(null,(function (props){return cljs.core.apply.call(null,quiescent.dom.select,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",1004015509),"versions",new cljs.core.Keyword(null,"value","value",1125876963),new cljs.core.Keyword(null,"version","version",1365512266).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"onChange","onChange",2050678241),(function (p1__8180_SHARP_){return new cljs.core.Keyword(null,"on-change-version","on-change-version",822058203).cljs$core$IFn$_invoke$arity$1(props).call(null,p1__8180_SHARP_.target.value);
})], null),cljs.core.map.call(null,(function (p1__8181_SHARP_){return quiescent.dom.option.call(null,cljs.core.PersistentArrayMap.EMPTY,p1__8181_SHARP_);
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
clojure.walk.keywordize_keys = (function keywordize_keys(m){var f = (function (p__19014){var vec__19015 = p__19014;var k = cljs.core.nth.call(null,vec__19015,0,null);var v = cljs.core.nth.call(null,vec__19015,1,null);if(typeof k === 'string')
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
clojure.walk.stringify_keys = (function stringify_keys(m){var f = (function (p__19018){var vec__19019 = p__19018;var k = cljs.core.nth.call(null,vec__19019,0,null);var v = cljs.core.nth.call(null,vec__19019,1,null);if((k instanceof cljs.core.Keyword))
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
lt.plugins.elm_light.graph.find_package_by_name = (function find_package_by_name(this$,name){return cljs.core.some.call(null,(function (p1__12060_SHARP_){if(cljs.core._EQ_.call(null,lt.plugins.elm_light.graph.lower.call(null,new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(p1__12060_SHARP_)),lt.plugins.elm_light.graph.lower.call(null,name)))
{return p1__12060_SHARP_;
} else
{return null;
}
}),new cljs.core.Keyword(null,"all-packages","all-packages",1123981067).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
});
lt.plugins.elm_light.graph.dependency_graph_ui = (function dependency_graph_ui(this$){var e__6289__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.graph","div.graph",2030351651),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dependency-graph","div.dependency-graph",3039800187),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg:svg","svg:svg",3472817088),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",1127031096),"650",new cljs.core.Keyword(null,"height","height",4087841945),"680"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg:g","svg:g",1123725379),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",2066570974),"translate(20,20)"], null)], null)], null)], null)], null));var seq__12067_12118 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__12068_12119 = null;var count__12069_12120 = 0;var i__12070_12121 = 0;while(true){
if((i__12070_12121 < count__12069_12120))
{var vec__12071_12122 = cljs.core._nth.call(null,chunk__12068_12119,i__12070_12121);var ev__6290__auto___12123 = cljs.core.nth.call(null,vec__12071_12122,0,null);var func__6291__auto___12124 = cljs.core.nth.call(null,vec__12071_12122,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___12123,func__6291__auto___12124);
{
var G__12125 = seq__12067_12118;
var G__12126 = chunk__12068_12119;
var G__12127 = count__12069_12120;
var G__12128 = (i__12070_12121 + 1);
seq__12067_12118 = G__12125;
chunk__12068_12119 = G__12126;
count__12069_12120 = G__12127;
i__12070_12121 = G__12128;
continue;
}
} else
{var temp__4092__auto___12129 = cljs.core.seq.call(null,seq__12067_12118);if(temp__4092__auto___12129)
{var seq__12067_12130__$1 = temp__4092__auto___12129;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12067_12130__$1))
{var c__5632__auto___12131 = cljs.core.chunk_first.call(null,seq__12067_12130__$1);{
var G__12132 = cljs.core.chunk_rest.call(null,seq__12067_12130__$1);
var G__12133 = c__5632__auto___12131;
var G__12134 = cljs.core.count.call(null,c__5632__auto___12131);
var G__12135 = 0;
seq__12067_12118 = G__12132;
chunk__12068_12119 = G__12133;
count__12069_12120 = G__12134;
i__12070_12121 = G__12135;
continue;
}
} else
{var vec__12072_12136 = cljs.core.first.call(null,seq__12067_12130__$1);var ev__6290__auto___12137 = cljs.core.nth.call(null,vec__12072_12136,0,null);var func__6291__auto___12138 = cljs.core.nth.call(null,vec__12072_12136,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___12137,func__6291__auto___12138);
{
var G__12139 = cljs.core.next.call(null,seq__12067_12130__$1);
var G__12140 = null;
var G__12141 = 0;
var G__12142 = 0;
seq__12067_12118 = G__12139;
chunk__12068_12119 = G__12140;
count__12069_12120 = G__12141;
i__12070_12121 = G__12142;
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
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.graph","dependency-graph","lt.plugins.elm-light.graph/dependency-graph",2371711049),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elm.graph.dependency","elm.graph.dependency",658564005)], null),new cljs.core.Keyword(null,"name","name",1017277949),"Dependency graph",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){lt.plugins.elm_light.utils.fetch_all_packages.call(null,(function (p1__12073_SHARP_){return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"all-packages","all-packages",1123981067),p1__12073_SHARP_], null));
}));
return lt.plugins.elm_light.graph.dependency_graph_ui.call(null,this$);
}));
lt.plugins.elm_light.graph.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___12143 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___12143))
{var ts_12144 = temp__4092__auto___12143;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_12144))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_12144);
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
lt.plugins.elm_light.graph.create_graph = (function create_graph(data){var g = (new lt.plugins.elm_light.graph.dagreD3.graphlib.Graph()).setGraph({});var seq__12082_12145 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"nodes","nodes",1118897699).cljs$core$IFn$_invoke$arity$1(data));var chunk__12083_12146 = null;var count__12084_12147 = 0;var i__12085_12148 = 0;while(true){
if((i__12085_12148 < count__12084_12147))
{var x_12149 = cljs.core._nth.call(null,chunk__12083_12146,i__12085_12148);g.setNode(lt.plugins.elm_light.graph.dep_id.call(null,x_12149),lt.plugins.elm_light.graph.node_label.call(null,x_12149));
{
var G__12150 = seq__12082_12145;
var G__12151 = chunk__12083_12146;
var G__12152 = count__12084_12147;
var G__12153 = (i__12085_12148 + 1);
seq__12082_12145 = G__12150;
chunk__12083_12146 = G__12151;
count__12084_12147 = G__12152;
i__12085_12148 = G__12153;
continue;
}
} else
{var temp__4092__auto___12154 = cljs.core.seq.call(null,seq__12082_12145);if(temp__4092__auto___12154)
{var seq__12082_12155__$1 = temp__4092__auto___12154;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12082_12155__$1))
{var c__5632__auto___12156 = cljs.core.chunk_first.call(null,seq__12082_12155__$1);{
var G__12157 = cljs.core.chunk_rest.call(null,seq__12082_12155__$1);
var G__12158 = c__5632__auto___12156;
var G__12159 = cljs.core.count.call(null,c__5632__auto___12156);
var G__12160 = 0;
seq__12082_12145 = G__12157;
chunk__12083_12146 = G__12158;
count__12084_12147 = G__12159;
i__12085_12148 = G__12160;
continue;
}
} else
{var x_12161 = cljs.core.first.call(null,seq__12082_12155__$1);g.setNode(lt.plugins.elm_light.graph.dep_id.call(null,x_12161),lt.plugins.elm_light.graph.node_label.call(null,x_12161));
{
var G__12162 = cljs.core.next.call(null,seq__12082_12155__$1);
var G__12163 = null;
var G__12164 = 0;
var G__12165 = 0;
seq__12082_12145 = G__12162;
chunk__12083_12146 = G__12163;
count__12084_12147 = G__12164;
i__12085_12148 = G__12165;
continue;
}
}
} else
{}
}
break;
}
var seq__12086_12166 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"edges","edges",1110261192).cljs$core$IFn$_invoke$arity$1(data));var chunk__12087_12167 = null;var count__12088_12168 = 0;var i__12089_12169 = 0;while(true){
if((i__12089_12169 < count__12088_12168))
{var x_12170 = cljs.core._nth.call(null,chunk__12087_12167,i__12089_12169);g.setEdge(new cljs.core.Keyword(null,"a","a",1013904339).cljs$core$IFn$_invoke$arity$1(x_12170),new cljs.core.Keyword(null,"b","b",1013904340).cljs$core$IFn$_invoke$arity$1(x_12170),{"style": (cljs.core.truth_(new cljs.core.Keyword(null,"transitive","transitive",3584713111).cljs$core$IFn$_invoke$arity$1(x_12170))?"stroke-dasharray: 5, 5;":null), "label": new cljs.core.Keyword(null,"label","label",1116631654).cljs$core$IFn$_invoke$arity$1(x_12170)});
{
var G__12171 = seq__12086_12166;
var G__12172 = chunk__12087_12167;
var G__12173 = count__12088_12168;
var G__12174 = (i__12089_12169 + 1);
seq__12086_12166 = G__12171;
chunk__12087_12167 = G__12172;
count__12088_12168 = G__12173;
i__12089_12169 = G__12174;
continue;
}
} else
{var temp__4092__auto___12175 = cljs.core.seq.call(null,seq__12086_12166);if(temp__4092__auto___12175)
{var seq__12086_12176__$1 = temp__4092__auto___12175;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12086_12176__$1))
{var c__5632__auto___12177 = cljs.core.chunk_first.call(null,seq__12086_12176__$1);{
var G__12178 = cljs.core.chunk_rest.call(null,seq__12086_12176__$1);
var G__12179 = c__5632__auto___12177;
var G__12180 = cljs.core.count.call(null,c__5632__auto___12177);
var G__12181 = 0;
seq__12086_12166 = G__12178;
chunk__12087_12167 = G__12179;
count__12088_12168 = G__12180;
i__12089_12169 = G__12181;
continue;
}
} else
{var x_12182 = cljs.core.first.call(null,seq__12086_12176__$1);g.setEdge(new cljs.core.Keyword(null,"a","a",1013904339).cljs$core$IFn$_invoke$arity$1(x_12182),new cljs.core.Keyword(null,"b","b",1013904340).cljs$core$IFn$_invoke$arity$1(x_12182),{"style": (cljs.core.truth_(new cljs.core.Keyword(null,"transitive","transitive",3584713111).cljs$core$IFn$_invoke$arity$1(x_12182))?"stroke-dasharray: 5, 5;":null), "label": new cljs.core.Keyword(null,"label","label",1116631654).cljs$core$IFn$_invoke$arity$1(x_12182)});
{
var G__12183 = cljs.core.next.call(null,seq__12086_12176__$1);
var G__12184 = null;
var G__12185 = 0;
var G__12186 = 0;
seq__12086_12166 = G__12183;
chunk__12087_12167 = G__12184;
count__12088_12168 = G__12185;
i__12089_12169 = G__12186;
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
}),cljs.core.map.call(null,(function (p__12094){var vec__12095 = p__12094;var k = cljs.core.nth.call(null,vec__12095,0,null);var v = cljs.core.nth.call(null,vec__12095,1,null);return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"package","package",4501809080),new cljs.core.Keyword(null,"range","range",1122184367),new cljs.core.Keyword(null,"version","version",1365512266)],[lt.plugins.elm_light.utils.nskw__GT_name.call(null,k),v,new cljs.core.Keyword(null,"version","version",1365512266).cljs$core$IFn$_invoke$arity$1(cljs.core.some.call(null,((function (vec__12095,k,v){
return (function (p1__12090_SHARP_){if(cljs.core._EQ_.call(null,lt.plugins.elm_light.utils.nskw__GT_name.call(null,k),new cljs.core.Keyword(null,"package","package",4501809080).cljs$core$IFn$_invoke$arity$1(p1__12090_SHARP_)))
{return p1__12090_SHARP_;
} else
{return null;
}
});})(vec__12095,k,v))
,new cljs.core.Keyword(null,"packages","packages",1764771935).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))))]);
}),new cljs.core.Keyword(null,"dependencies","dependencies",1517678747).cljs$core$IFn$_invoke$arity$1(pkg_json))));if(temp__4092__auto__)
{var edges = temp__4092__auto__;lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",1016980252),new cljs.core.Keyword(null,"edges","edges",1110261192)], null),((function (edges,temp__4092__auto__){
return (function (p1__12091_SHARP_){return cljs.core.concat.call(null,p1__12091_SHARP_,edges);
});})(edges,temp__4092__auto__))
);
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"elm.graph.render","elm.graph.render",2076182000));
} else
{return null;
}
});
lt.plugins.elm_light.graph.__BEH__on_get_transitives = (function __BEH__on_get_transitives(this$){var transitives = cljs.core.remove.call(null,new cljs.core.Keyword(null,"range","range",1122184367),new cljs.core.Keyword(null,"packages","packages",1764771935).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))));lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",1016980252),new cljs.core.Keyword(null,"nodes","nodes",1118897699)], null),((function (transitives){
return (function (p1__12096_SHARP_){return cljs.core.concat.call(null,p1__12096_SHARP_,transitives);
});})(transitives))
);
lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"elm.graph.render","elm.graph.render",2076182000));
var seq__12101 = cljs.core.seq.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"version","version",1365512266),new cljs.core.Keyword(null,"packages","packages",1764771935).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))));var chunk__12102 = null;var count__12103 = 0;var i__12104 = 0;while(true){
if((i__12104 < count__12103))
{var x = cljs.core._nth.call(null,chunk__12102,i__12104);lt.plugins.elm_light.graph.get_package_json.call(null,x,cljs.core.partial.call(null,lt.plugins.elm_light.graph.add_edges_for_dep,this$,x));
{
var G__12187 = seq__12101;
var G__12188 = chunk__12102;
var G__12189 = count__12103;
var G__12190 = (i__12104 + 1);
seq__12101 = G__12187;
chunk__12102 = G__12188;
count__12103 = G__12189;
i__12104 = G__12190;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12101);if(temp__4092__auto__)
{var seq__12101__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12101__$1))
{var c__5632__auto__ = cljs.core.chunk_first.call(null,seq__12101__$1);{
var G__12191 = cljs.core.chunk_rest.call(null,seq__12101__$1);
var G__12192 = c__5632__auto__;
var G__12193 = cljs.core.count.call(null,c__5632__auto__);
var G__12194 = 0;
seq__12101 = G__12191;
chunk__12102 = G__12192;
count__12103 = G__12193;
i__12104 = G__12194;
continue;
}
} else
{var x = cljs.core.first.call(null,seq__12101__$1);lt.plugins.elm_light.graph.get_package_json.call(null,x,cljs.core.partial.call(null,lt.plugins.elm_light.graph.add_edges_for_dep,this$,x));
{
var G__12195 = cljs.core.next.call(null,seq__12101__$1);
var G__12196 = null;
var G__12197 = 0;
var G__12198 = 0;
seq__12101 = G__12195;
chunk__12102 = G__12196;
count__12103 = G__12197;
i__12104 = G__12198;
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
lt.plugins.elm_light.graph.get_dependency_data = (function get_dependency_data(project_path){var pkgs = cljs.core.map.call(null,(function (p1__12106_SHARP_){return cljs.core.assoc.call(null,p1__12106_SHARP_,new cljs.core.Keyword(null,"summary","summary",3451231000),new cljs.core.Keyword(null,"summary","summary",3451231000).cljs$core$IFn$_invoke$arity$1(lt.plugins.elm_light.graph.find_package_by_name.call(null,lt.plugins.elm_light.graph.dependency_graph,new cljs.core.Keyword(null,"package","package",4501809080).cljs$core$IFn$_invoke$arity$1(p1__12106_SHARP_))));
}),cljs.core.map.call(null,(function (p1__12105_SHARP_){return clojure.set.rename_keys.call(null,p1__12105_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"exact","exact",1110851185),new cljs.core.Keyword(null,"version","version",1365512266)], null));
}),lt.plugins.elm_light.utils.get_project_deps.call(null,project_path)));var direct = cljs.core.filter.call(null,new cljs.core.Keyword(null,"range","range",1122184367),pkgs);var rootVersion = new cljs.core.Keyword(null,"version","version",1365512266).cljs$core$IFn$_invoke$arity$1(lt.plugins.elm_light.utils.parse_json_file.call(null,lt.objs.files.join.call(null,project_path,"elm-package.json")));var root = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"package","package",4501809080),lt.objs.files.basename.call(null,project_path),new cljs.core.Keyword(null,"version","version",1365512266),rootVersion,new cljs.core.Keyword(null,"shape","shape",1123304211),"ellipse"], null);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"packages","packages",1764771935),pkgs,new cljs.core.Keyword(null,"nodes","nodes",1118897699),cljs.core.conj.call(null,direct,root),new cljs.core.Keyword(null,"edges","edges",1110261192),cljs.core.map.call(null,((function (pkgs,direct,rootVersion,root){
return (function (p1__12107_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"label","label",1116631654)],[lt.plugins.elm_light.graph.dep_id.call(null,root),lt.plugins.elm_light.graph.dep_id.call(null,p1__12107_SHARP_),new cljs.core.Keyword(null,"range","range",1122184367).cljs$core$IFn$_invoke$arity$1(p1__12107_SHARP_)]);
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
return (function (p__18951){var vec__18952 = p__18951;var k = cljs.core.nth.call(null,vec__18952,0,null);var v = cljs.core.nth.call(null,vec__18952,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.elm_light.utils.nskw__GT_name.call(null,k),v], null);
});})(pkg_file))
,deps)),pkg);
});})(pkg_file))
)));
});
lt.plugins.elm_light.packages.project_wrapper = (function project_wrapper(this$){var e__6289__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.elm","div.elm",2686466363),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"project-packages-wrapper"], null),"Retrieving project package info..."], null)], null));var seq__18959_18984 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__18960_18985 = null;var count__18961_18986 = 0;var i__18962_18987 = 0;while(true){
if((i__18962_18987 < count__18961_18986))
{var vec__18963_18988 = cljs.core._nth.call(null,chunk__18960_18985,i__18962_18987);var ev__6290__auto___18989 = cljs.core.nth.call(null,vec__18963_18988,0,null);var func__6291__auto___18990 = cljs.core.nth.call(null,vec__18963_18988,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___18989,func__6291__auto___18990);
{
var G__18991 = seq__18959_18984;
var G__18992 = chunk__18960_18985;
var G__18993 = count__18961_18986;
var G__18994 = (i__18962_18987 + 1);
seq__18959_18984 = G__18991;
chunk__18960_18985 = G__18992;
count__18961_18986 = G__18993;
i__18962_18987 = G__18994;
continue;
}
} else
{var temp__4092__auto___18995 = cljs.core.seq.call(null,seq__18959_18984);if(temp__4092__auto___18995)
{var seq__18959_18996__$1 = temp__4092__auto___18995;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18959_18996__$1))
{var c__5632__auto___18997 = cljs.core.chunk_first.call(null,seq__18959_18996__$1);{
var G__18998 = cljs.core.chunk_rest.call(null,seq__18959_18996__$1);
var G__18999 = c__5632__auto___18997;
var G__19000 = cljs.core.count.call(null,c__5632__auto___18997);
var G__19001 = 0;
seq__18959_18984 = G__18998;
chunk__18960_18985 = G__18999;
count__18961_18986 = G__19000;
i__18962_18987 = G__19001;
continue;
}
} else
{var vec__18964_19002 = cljs.core.first.call(null,seq__18959_18996__$1);var ev__6290__auto___19003 = cljs.core.nth.call(null,vec__18964_19002,0,null);var func__6291__auto___19004 = cljs.core.nth.call(null,vec__18964_19002,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___19003,func__6291__auto___19004);
{
var G__19005 = cljs.core.next.call(null,seq__18959_18996__$1);
var G__19006 = null;
var G__19007 = 0;
var G__19008 = 0;
seq__18959_18984 = G__19005;
chunk__18960_18985 = G__19006;
count__18961_18986 = G__19007;
i__18962_18987 = G__19008;
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
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.packages","elm-packages","lt.plugins.elm-light.packages/elm-packages",4552372902),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elm.packages","elm.packages",3931311271),null], null), null),new cljs.core.Keyword(null,"label","label",1116631654),"Elm project packages",new cljs.core.Keyword(null,"name","name",1017277949),"Elm project packages",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){lt.plugins.elm_light.utils.fetch_all_packages.call(null,(function (p1__18965_SHARP_){return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"all-packages","all-packages",1123981067),p1__18965_SHARP_], null));
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
lt.plugins.elm_light.packages.idx_active = (function idx_active(items){return cljs.core.first.call(null,cljs.core.keep_indexed.call(null,(function (p1__18967_SHARP_,p2__18966_SHARP_){if(cljs.core.truth_(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(p2__18966_SHARP_)))
{return p1__18967_SHARP_;
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
lt.plugins.elm_light.packages.on_pkg_sel = (function on_pkg_sel(){var items_19009 = new cljs.core.Keyword(null,"ac-packages","ac-packages",1548109226).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.elm_light.packages.elm_packages));var temp__4090__auto___19010 = lt.plugins.elm_light.packages.idx_active.call(null,items_19009);if(cljs.core.truth_(temp__4090__auto___19010))
{var idx_19011 = temp__4090__auto___19010;lt.object.assoc_in_BANG_.call(null,lt.plugins.elm_light.packages.elm_packages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ac-versions","ac-versions",3107155800)], null),new cljs.core.Keyword(null,"versions","versions",3323818509).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,items_19009,idx_19011)));
lt.object.assoc_in_BANG_.call(null,lt.plugins.elm_light.packages.elm_packages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ac-version","ac-version",2051259807)], null),cljs.core.first.call(null,new cljs.core.Keyword(null,"versions","versions",3323818509).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,items_19009,idx_19011))));
lt.object.assoc_in_BANG_.call(null,lt.plugins.elm_light.packages.elm_packages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ac-package","ac-package",892589325)], null),new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,items_19009,idx_19011)));
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
return (function (p1__18968_SHARP_){if(cljs.core._EQ_.call(null,p1__18968_SHARP_,0))
{lt.objs.notifos.done_working.call(null);
} else
{lt.objs.notifos.set_msg_BANG_.call(null,"Error installing elm package",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),"error",new cljs.core.Keyword(null,"timeout","timeout",3994960083),5000], null));
}
lt.object.raise.call(null,lt.plugins.elm_light.packages.elm_packages,new cljs.core.Keyword(null,"elm.show.project.packages","elm.show.project.packages",3385102109),new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.elm_light.packages.elm_packages)));
return lt.object.raise.call(null,lt.plugins.elm_light.graph.dependency_graph,new cljs.core.Keyword(null,"elm.graph.show-dependencies","elm.graph.show-dependencies",3464547203),new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.elm_light.packages.elm_packages)),false);
});})(proc,args))
);
proc.stdout.on("data",((function (proc,args){
return (function (p1__18969_SHARP_){return lt.objs.notifos.msg_STAR_.call(null,[cljs.core.str("Package install: "),cljs.core.str(p1__18969_SHARP_)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"timeout","timeout",3994960083),5000], null));
});})(proc,args))
);
return proc.stderr.on("data",((function (proc,args){
return (function (p1__18970_SHARP_){return lt.objs.console.error.call(null,[cljs.core.str(p1__18970_SHARP_)].join(''));
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
lt.plugins.elm_light.packages.PackageRow = quiescent.component.call(null,(function (p__18971){var map__18972 = p__18971;var map__18972__$1 = ((cljs.core.seq_QMARK_.call(null,map__18972))?cljs.core.apply.call(null,cljs.core.hash_map,map__18972):map__18972);var on_browse = cljs.core.get.call(null,map__18972__$1,new cljs.core.Keyword(null,"on-browse","on-browse",587885994));var on_remove = cljs.core.get.call(null,map__18972__$1,new cljs.core.Keyword(null,"on-remove","on-remove",1033879460));var exact = cljs.core.get.call(null,map__18972__$1,new cljs.core.Keyword(null,"exact","exact",1110851185));var range = cljs.core.get.call(null,map__18972__$1,new cljs.core.Keyword(null,"range","range",1122184367));var package$ = cljs.core.get.call(null,map__18972__$1,new cljs.core.Keyword(null,"package","package",4501809080));return quiescent.dom.tr.call(null,cljs.core.PersistentArrayMap.EMPTY,quiescent.dom.td.call(null,cljs.core.PersistentArrayMap.EMPTY,(cljs.core.truth_((function (){var and__4872__auto__ = package$;if(cljs.core.truth_(and__4872__auto__))
{return exact;
} else
{return and__4872__auto__;
}
})())?quiescent.dom.span.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",1004015509),"link",new cljs.core.Keyword(null,"onClick","onClick",3956969051),((function (map__18972,map__18972__$1,on_browse,on_remove,exact,range,package$){
return (function (){return on_browse.call(null,package$,exact);
});})(map__18972,map__18972__$1,on_browse,on_remove,exact,range,package$))
], null),package$):package$)),quiescent.dom.td.call(null,cljs.core.PersistentArrayMap.EMPTY,range),quiescent.dom.td.call(null,cljs.core.PersistentArrayMap.EMPTY,exact),quiescent.dom.td.call(null,cljs.core.PersistentArrayMap.EMPTY,(cljs.core.truth_(range)?quiescent.dom.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",3956969051),((function (map__18972,map__18972__$1,on_browse,on_remove,exact,range,package$){
return (function (){return on_remove.call(null,package$);
});})(map__18972,map__18972__$1,on_browse,on_remove,exact,range,package$))
], null),"remove"):null)));
}));
/**
* 
*/
lt.plugins.elm_light.packages.PackageTable = quiescent.component.call(null,(function (props){return quiescent.dom.table.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",1004015509),"package-table"], null),quiescent.dom.thead.call(null,cljs.core.PersistentArrayMap.EMPTY,quiescent.dom.tr.call(null,cljs.core.PersistentArrayMap.EMPTY,quiescent.dom.th.call(null,cljs.core.PersistentArrayMap.EMPTY,"Package"),quiescent.dom.th.call(null,cljs.core.PersistentArrayMap.EMPTY,"Range"),quiescent.dom.th.call(null,cljs.core.PersistentArrayMap.EMPTY,"Exact"),quiescent.dom.th.call(null,cljs.core.PersistentArrayMap.EMPTY,""))),cljs.core.apply.call(null,quiescent.dom.tbody,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__18973_SHARP_){return lt.plugins.elm_light.packages.PackageRow.call(null,cljs.core.assoc.call(null,p1__18973_SHARP_,new cljs.core.Keyword(null,"on-remove","on-remove",1033879460),new cljs.core.Keyword(null,"on-remove","on-remove",1033879460).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"on-browse","on-browse",587885994),new cljs.core.Keyword(null,"on-browse","on-browse",587885994).cljs$core$IFn$_invoke$arity$1(props)));
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
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",1013907517),new cljs.core.Keyword(null,"args","args",1016906831).cljs$core$IFn$_invoke$arity$1(doc)], null):null)], null));var seq__18640_18672 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__18641_18673 = null;var count__18642_18674 = 0;var i__18643_18675 = 0;while(true){
if((i__18643_18675 < count__18642_18674))
{var vec__18644_18676 = cljs.core._nth.call(null,chunk__18641_18673,i__18643_18675);var ev__6290__auto___18677 = cljs.core.nth.call(null,vec__18644_18676,0,null);var func__6291__auto___18678 = cljs.core.nth.call(null,vec__18644_18676,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___18677,func__6291__auto___18678);
{
var G__18679 = seq__18640_18672;
var G__18680 = chunk__18641_18673;
var G__18681 = count__18642_18674;
var G__18682 = (i__18643_18675 + 1);
seq__18640_18672 = G__18679;
chunk__18641_18673 = G__18680;
count__18642_18674 = G__18681;
i__18643_18675 = G__18682;
continue;
}
} else
{var temp__4092__auto___18683 = cljs.core.seq.call(null,seq__18640_18672);if(temp__4092__auto___18683)
{var seq__18640_18684__$1 = temp__4092__auto___18683;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18640_18684__$1))
{var c__5632__auto___18685 = cljs.core.chunk_first.call(null,seq__18640_18684__$1);{
var G__18686 = cljs.core.chunk_rest.call(null,seq__18640_18684__$1);
var G__18687 = c__5632__auto___18685;
var G__18688 = cljs.core.count.call(null,c__5632__auto___18685);
var G__18689 = 0;
seq__18640_18672 = G__18686;
chunk__18641_18673 = G__18687;
count__18642_18674 = G__18688;
i__18643_18675 = G__18689;
continue;
}
} else
{var vec__18645_18690 = cljs.core.first.call(null,seq__18640_18684__$1);var ev__6290__auto___18691 = cljs.core.nth.call(null,vec__18645_18690,0,null);var func__6291__auto___18692 = cljs.core.nth.call(null,vec__18645_18690,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___18691,func__6291__auto___18692);
{
var G__18693 = cljs.core.next.call(null,seq__18640_18684__$1);
var G__18694 = null;
var G__18695 = 0;
var G__18696 = 0;
seq__18640_18672 = G__18693;
chunk__18641_18673 = G__18694;
count__18642_18674 = G__18695;
i__18643_18675 = G__18696;
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
lt.plugins.elm_light.inline_doc.highlight_code = (function highlight_code(container_elem){var seq__18650 = cljs.core.seq.call(null,lt.util.dom.$$.call(null,"pre > code",container_elem));var chunk__18651 = null;var count__18652 = 0;var i__18653 = 0;while(true){
if((i__18653 < count__18652))
{var code = cljs.core._nth.call(null,chunk__18651,i__18653);hljs.highlightBlock(code);
{
var G__18697 = seq__18650;
var G__18698 = chunk__18651;
var G__18699 = count__18652;
var G__18700 = (i__18653 + 1);
seq__18650 = G__18697;
chunk__18651 = G__18698;
count__18652 = G__18699;
i__18653 = G__18700;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__18650);if(temp__4092__auto__)
{var seq__18650__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18650__$1))
{var c__5632__auto__ = cljs.core.chunk_first.call(null,seq__18650__$1);{
var G__18701 = cljs.core.chunk_rest.call(null,seq__18650__$1);
var G__18702 = c__5632__auto__;
var G__18703 = cljs.core.count.call(null,c__5632__auto__);
var G__18704 = 0;
seq__18650 = G__18701;
chunk__18651 = G__18702;
count__18652 = G__18703;
i__18653 = G__18704;
continue;
}
} else
{var code = cljs.core.first.call(null,seq__18650__$1);hljs.highlightBlock(code);
{
var G__18705 = cljs.core.next.call(null,seq__18650__$1);
var G__18706 = null;
var G__18707 = 0;
var G__18708 = 0;
seq__18650 = G__18705;
chunk__18651 = G__18706;
count__18652 = G__18707;
i__18653 = G__18708;
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
lt.plugins.elm_light.inline_doc.add_click_handlers = (function add_click_handlers(elem){var seq__18658 = cljs.core.seq.call(null,lt.util.dom.$$.call(null,"a",elem));var chunk__18659 = null;var count__18660 = 0;var i__18661 = 0;while(true){
if((i__18661 < count__18660))
{var link = cljs.core._nth.call(null,chunk__18659,i__18661);lt.util.dom.on.call(null,link,"click",((function (seq__18658,chunk__18659,count__18660,i__18661,link){
return (function (){return lt.plugins.elm_light.inline_doc.handle_url_click.call(null,lt.util.dom.attr.call(null,link,new cljs.core.Keyword(null,"href","href",1017115293)));
});})(seq__18658,chunk__18659,count__18660,i__18661,link))
);
{
var G__18709 = seq__18658;
var G__18710 = chunk__18659;
var G__18711 = count__18660;
var G__18712 = (i__18661 + 1);
seq__18658 = G__18709;
chunk__18659 = G__18710;
count__18660 = G__18711;
i__18661 = G__18712;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__18658);if(temp__4092__auto__)
{var seq__18658__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18658__$1))
{var c__5632__auto__ = cljs.core.chunk_first.call(null,seq__18658__$1);{
var G__18713 = cljs.core.chunk_rest.call(null,seq__18658__$1);
var G__18714 = c__5632__auto__;
var G__18715 = cljs.core.count.call(null,c__5632__auto__);
var G__18716 = 0;
seq__18658 = G__18713;
chunk__18659 = G__18714;
count__18660 = G__18715;
i__18661 = G__18716;
continue;
}
} else
{var link = cljs.core.first.call(null,seq__18658__$1);lt.util.dom.on.call(null,link,"click",((function (seq__18658,chunk__18659,count__18660,i__18661,link,seq__18658__$1,temp__4092__auto__){
return (function (){return lt.plugins.elm_light.inline_doc.handle_url_click.call(null,lt.util.dom.attr.call(null,link,new cljs.core.Keyword(null,"href","href",1017115293)));
});})(seq__18658,chunk__18659,count__18660,i__18661,link,seq__18658__$1,temp__4092__auto__))
);
{
var G__18717 = cljs.core.next.call(null,seq__18658__$1);
var G__18718 = null;
var G__18719 = 0;
var G__18720 = 0;
seq__18658 = G__18717;
chunk__18659 = G__18718;
count__18660 = G__18719;
i__18661 = G__18720;
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
lt.plugins.elm_light.autocompleter.core.default_options = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"async","async",1107031534),true,new cljs.core.Keyword(null,"completeSingle","completeSingle",2100037203),false,new cljs.core.Keyword(null,"supportsSelection","supportsSelection",3475218138),true,new cljs.core.Keyword(null,"closeOnUnfocus","closeOnUnfocus",2215570266),true,new cljs.core.Keyword(null,"customKeys","customKeys",3726901367),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"Up","Up",1013906989),(function (p1__19066_SHARP_,p2__19065_SHARP_){return p2__19065_SHARP_.moveFocus.call(null,-1);
}),new cljs.core.Keyword(null,"Down","Down",1016040500),(function (p1__19068_SHARP_,p2__19067_SHARP_){return p2__19067_SHARP_.moveFocus.call(null,1);
}),new cljs.core.Keyword(null,"Enter","Enter",1081018922),(function (a,b){return b.pick();
}),new cljs.core.Keyword(null,"Tab","Tab",1013988071),(function (a,b){return b.pick();
}),new cljs.core.Keyword(null,"Esc","Esc",1013974215),(function (p1__19070_SHARP_,p2__19069_SHARP_){return p2__19069_SHARP_.close.call(null);
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
{return cljs.core.clj__GT_js.call(null,(function (p1__19072_SHARP_){var fst = cljs.core.first.call(null,new cljs.core.Keyword(null,"list","list",1017226256).cljs$core$IFn$_invoke$arity$1(p1__19072_SHARP_));return cljs.core.assoc.call(null,p1__19072_SHARP_,new cljs.core.Keyword(null,"from","from",1017056028),new cljs.core.Keyword(null,"from","from",1017056028).cljs$core$IFn$_invoke$arity$1(fst),new cljs.core.Keyword(null,"to","to",1013907949),new cljs.core.Keyword(null,"to","to",1013907949).cljs$core$IFn$_invoke$arity$1(fst));
}).call(null,cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"list","list",1017226256)],[cljs.core.take.call(null,25,cljs.core.filter.call(null,(function (p1__19071_SHARP_){return (new cljs.core.Keyword(null,"displayText","displayText",2728236161).cljs$core$IFn$_invoke$arity$1(p1__19071_SHARP_).length < 1000);
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
lt.plugins.elm_light.autocompleter.core.listen_for_hint_results = (function listen_for_hint_results(ed,channels,hinter_ch){var t = cljs.core.async.timeout.call(null,500);var c__13592__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13592__auto__,t){
return (function (){var f__13593__auto__ = (function (){var switch__13522__auto__ = ((function (c__13592__auto__,t){
return (function (state_19158){var state_val_19159 = (state_19158[1]);if((state_val_19159 === 1))
{var inst_19127 = cljs.core.conj.call(null,channels,t);var inst_19128 = cljs.core.PersistentVector.EMPTY;var inst_19129 = inst_19127;var state_19158__$1 = (function (){var statearr_19160 = state_19158;(statearr_19160[7] = inst_19128);
(statearr_19160[8] = inst_19129);
return statearr_19160;
})();var statearr_19161_19219 = state_19158__$1;(statearr_19161_19219[2] = null);
(statearr_19161_19219[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19159 === 2))
{var inst_19129 = (state_19158[8]);var inst_19131 = cljs.core.count.call(null,inst_19129);var inst_19132 = cljs.core._EQ_.call(null,1,inst_19131);var state_19158__$1 = state_19158;if(inst_19132)
{var statearr_19162_19220 = state_19158__$1;(statearr_19162_19220[1] = 4);
} else
{var statearr_19163_19221 = state_19158__$1;(statearr_19163_19221[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19159 === 3))
{var inst_19156 = (state_19158[2]);var state_19158__$1 = state_19158;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19158__$1,inst_19156);
} else
{if((state_val_19159 === 4))
{var inst_19128 = (state_19158[7]);var inst_19134 = cljs.core.async.put_BANG_.call(null,hinter_ch,inst_19128);var state_19158__$1 = state_19158;var statearr_19164_19222 = state_19158__$1;(statearr_19164_19222[2] = inst_19134);
(statearr_19164_19222[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19159 === 5))
{var inst_19129 = (state_19158[8]);var state_19158__$1 = state_19158;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_19158__$1,7,inst_19129);
} else
{if((state_val_19159 === 6))
{var inst_19154 = (state_19158[2]);var state_19158__$1 = state_19158;var statearr_19165_19223 = state_19158__$1;(statearr_19165_19223[2] = inst_19154);
(statearr_19165_19223[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19159 === 7))
{var inst_19140 = (state_19158[9]);var inst_19138 = (state_19158[2]);var inst_19139 = cljs.core.nth.call(null,inst_19138,0,null);var inst_19140__$1 = cljs.core.nth.call(null,inst_19138,1,null);var inst_19141 = (inst_19140__$1 === t);var state_19158__$1 = (function (){var statearr_19166 = state_19158;(statearr_19166[10] = inst_19139);
(statearr_19166[9] = inst_19140__$1);
return statearr_19166;
})();if(cljs.core.truth_(inst_19141))
{var statearr_19167_19224 = state_19158__$1;(statearr_19167_19224[1] = 8);
} else
{var statearr_19168_19225 = state_19158__$1;(statearr_19168_19225[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19159 === 8))
{var inst_19128 = (state_19158[7]);var inst_19143 = cljs.core.println.call(null,"WARNING: Timeout waiting for hinter provider channel results");var inst_19144 = cljs.core.async.put_BANG_.call(null,hinter_ch,inst_19128);var state_19158__$1 = (function (){var statearr_19169 = state_19158;(statearr_19169[11] = inst_19143);
return statearr_19169;
})();var statearr_19170_19226 = state_19158__$1;(statearr_19170_19226[2] = inst_19144);
(statearr_19170_19226[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19159 === 9))
{var inst_19139 = (state_19158[10]);var inst_19140 = (state_19158[9]);var inst_19128 = (state_19158[7]);var inst_19129 = (state_19158[8]);var inst_19146 = cljs.core.into.call(null,inst_19128,inst_19139);var inst_19147 = [inst_19140];var inst_19148 = cljs.core.PersistentHashSet.fromArray.call(null,inst_19147,true);var inst_19149 = cljs.core.remove.call(null,inst_19148,inst_19129);var inst_19128__$1 = inst_19146;var inst_19129__$1 = inst_19149;var state_19158__$1 = (function (){var statearr_19171 = state_19158;(statearr_19171[7] = inst_19128__$1);
(statearr_19171[8] = inst_19129__$1);
return statearr_19171;
})();var statearr_19172_19227 = state_19158__$1;(statearr_19172_19227[2] = null);
(statearr_19172_19227[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19159 === 10))
{var inst_19152 = (state_19158[2]);var state_19158__$1 = state_19158;var statearr_19173_19228 = state_19158__$1;(statearr_19173_19228[2] = inst_19152);
(statearr_19173_19228[1] = 6);
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
});})(c__13592__auto__,t))
;return ((function (switch__13522__auto__,c__13592__auto__,t){
return (function() {
var state_machine__13523__auto__ = null;
var state_machine__13523__auto____0 = (function (){var statearr_19177 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19177[0] = state_machine__13523__auto__);
(statearr_19177[1] = 1);
return statearr_19177;
});
var state_machine__13523__auto____1 = (function (state_19158){while(true){
var ret_value__13524__auto__ = (function (){try{while(true){
var result__13525__auto__ = switch__13522__auto__.call(null,state_19158);if(cljs.core.keyword_identical_QMARK_.call(null,result__13525__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13525__auto__;
}
break;
}
}catch (e19178){if((e19178 instanceof Object))
{var ex__13526__auto__ = e19178;var statearr_19179_19229 = state_19158;(statearr_19179_19229[5] = ex__13526__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19158);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19178;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13524__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19230 = state_19158;
state_19158 = G__19230;
continue;
}
} else
{return ret_value__13524__auto__;
}
break;
}
});
state_machine__13523__auto__ = function(state_19158){
switch(arguments.length){
case 0:
return state_machine__13523__auto____0.call(this);
case 1:
return state_machine__13523__auto____1.call(this,state_19158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13523__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13523__auto____0;
state_machine__13523__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13523__auto____1;
return state_machine__13523__auto__;
})()
;})(switch__13522__auto__,c__13592__auto__,t))
})();var state__13594__auto__ = (function (){var statearr_19180 = f__13593__auto__.call(null);(statearr_19180[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13592__auto__);
return statearr_19180;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13594__auto__);
});})(c__13592__auto__,t))
);
return c__13592__auto__;
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
return (function (_,cb){var c__13592__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13592__auto__,ch){
return (function (){var f__13593__auto__ = (function (){var switch__13522__auto__ = ((function (c__13592__auto__,ch){
return (function (state_19200){var state_val_19201 = (state_19200[1]);if((state_val_19201 === 2))
{var inst_19196 = (state_19200[2]);var inst_19197 = lt.plugins.elm_light.autocompleter.core.process_hint_results.call(null,inst_19196);var inst_19198 = cb.call(null,inst_19197);var state_19200__$1 = state_19200;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19200__$1,inst_19198);
} else
{if((state_val_19201 === 1))
{var state_19200__$1 = state_19200;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19200__$1,2,ch);
} else
{return null;
}
}
});})(c__13592__auto__,ch))
;return ((function (switch__13522__auto__,c__13592__auto__,ch){
return (function() {
var state_machine__13523__auto__ = null;
var state_machine__13523__auto____0 = (function (){var statearr_19205 = [null,null,null,null,null,null,null];(statearr_19205[0] = state_machine__13523__auto__);
(statearr_19205[1] = 1);
return statearr_19205;
});
var state_machine__13523__auto____1 = (function (state_19200){while(true){
var ret_value__13524__auto__ = (function (){try{while(true){
var result__13525__auto__ = switch__13522__auto__.call(null,state_19200);if(cljs.core.keyword_identical_QMARK_.call(null,result__13525__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13525__auto__;
}
break;
}
}catch (e19206){if((e19206 instanceof Object))
{var ex__13526__auto__ = e19206;var statearr_19207_19231 = state_19200;(statearr_19207_19231[5] = ex__13526__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19200);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19206;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13524__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19232 = state_19200;
state_19200 = G__19232;
continue;
}
} else
{return ret_value__13524__auto__;
}
break;
}
});
state_machine__13523__auto__ = function(state_19200){
switch(arguments.length){
case 0:
return state_machine__13523__auto____0.call(this);
case 1:
return state_machine__13523__auto____1.call(this,state_19200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13523__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13523__auto____0;
state_machine__13523__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13523__auto____1;
return state_machine__13523__auto__;
})()
;})(switch__13522__auto__,c__13592__auto__,ch))
})();var state__13594__auto__ = (function (){var statearr_19208 = f__13593__auto__.call(null);(statearr_19208[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13592__auto__);
return statearr_19208;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13594__auto__);
});})(c__13592__auto__,ch))
);
return c__13592__auto__;
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
var G__19030 = (line - 1);
line = G__19030;
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
var G__19031 = (line + 1);
line = G__19031;
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
var G__19032 = (line - 1);
line = G__19032;
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
var seq__19308_19334 = cljs.core.seq.call(null,lt.objs.editor.pool.containing_path.call(null,new cljs.core.Keyword(null,"dir","dir",1014003711).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client))));var chunk__19309_19335 = null;var count__19310_19336 = 0;var i__19311_19337 = 0;while(true){
if((i__19311_19337 < count__19310_19336))
{var ed_19338 = cljs.core._nth.call(null,chunk__19309_19335,i__19311_19337);lt.object.raise.call(null,ed_19338,new cljs.core.Keyword(null,"project-disconnected","project-disconnected",2085293025));
{
var G__19339 = seq__19308_19334;
var G__19340 = chunk__19309_19335;
var G__19341 = count__19310_19336;
var G__19342 = (i__19311_19337 + 1);
seq__19308_19334 = G__19339;
chunk__19309_19335 = G__19340;
count__19310_19336 = G__19341;
i__19311_19337 = G__19342;
continue;
}
} else
{var temp__4092__auto___19343 = cljs.core.seq.call(null,seq__19308_19334);if(temp__4092__auto___19343)
{var seq__19308_19344__$1 = temp__4092__auto___19343;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19308_19344__$1))
{var c__5632__auto___19345 = cljs.core.chunk_first.call(null,seq__19308_19344__$1);{
var G__19346 = cljs.core.chunk_rest.call(null,seq__19308_19344__$1);
var G__19347 = c__5632__auto___19345;
var G__19348 = cljs.core.count.call(null,c__5632__auto___19345);
var G__19349 = 0;
seq__19308_19334 = G__19346;
chunk__19309_19335 = G__19347;
count__19310_19336 = G__19348;
i__19311_19337 = G__19349;
continue;
}
} else
{var ed_19350 = cljs.core.first.call(null,seq__19308_19344__$1);lt.object.raise.call(null,ed_19350,new cljs.core.Keyword(null,"project-disconnected","project-disconnected",2085293025));
{
var G__19351 = cljs.core.next.call(null,seq__19308_19344__$1);
var G__19352 = null;
var G__19353 = 0;
var G__19354 = 0;
seq__19308_19334 = G__19351;
chunk__19309_19335 = G__19352;
count__19310_19336 = G__19353;
i__19311_19337 = G__19354;
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
var seq__19318 = cljs.core.seq.call(null,lt.objs.editor.pool.containing_path.call(null,new cljs.core.Keyword(null,"dir","dir",1014003711).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client))));var chunk__19319 = null;var count__19320 = 0;var i__19321 = 0;while(true){
if((i__19321 < count__19320))
{var ed = cljs.core._nth.call(null,chunk__19319,i__19321);lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"project-connected","project-connected",3474311367));
{
var G__19355 = seq__19318;
var G__19356 = chunk__19319;
var G__19357 = count__19320;
var G__19358 = (i__19321 + 1);
seq__19318 = G__19355;
chunk__19319 = G__19356;
count__19320 = G__19357;
i__19321 = G__19358;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__19318);if(temp__4092__auto__)
{var seq__19318__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19318__$1))
{var c__5632__auto__ = cljs.core.chunk_first.call(null,seq__19318__$1);{
var G__19359 = cljs.core.chunk_rest.call(null,seq__19318__$1);
var G__19360 = c__5632__auto__;
var G__19361 = cljs.core.count.call(null,c__5632__auto__);
var G__19362 = 0;
seq__19318 = G__19359;
chunk__19319 = G__19360;
count__19320 = G__19361;
i__19321 = G__19362;
continue;
}
} else
{var ed = cljs.core.first.call(null,seq__19318__$1);lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"project-connected","project-connected",3474311367));
{
var G__19363 = cljs.core.next.call(null,seq__19318__$1);
var G__19364 = null;
var G__19365 = 0;
var G__19366 = 0;
seq__19318 = G__19363;
chunk__19319 = G__19364;
count__19320 = G__19365;
i__19321 = G__19366;
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
{var map__19322 = cljs.core.last.call(null,msg);var map__19322__$1 = ((cljs.core.seq_QMARK_.call(null,map__19322))?cljs.core.apply.call(null,cljs.core.hash_map,map__19322):map__19322);var package$ = cljs.core.get.call(null,map__19322__$1,new cljs.core.Keyword(null,"package","package",4501809080));var error = cljs.core.get.call(null,map__19322__$1,new cljs.core.Keyword(null,"error","error",1110689146));var ast = cljs.core.get.call(null,map__19322__$1,new cljs.core.Keyword(null,"ast","ast",1014001140));var type = cljs.core.get.call(null,map__19322__$1,new cljs.core.Keyword(null,"type","type",1017479852));var file = cljs.core.get.call(null,map__19322__$1,new cljs.core.Keyword(null,"file","file",1017047278));var G__19323 = type;if(cljs.core._EQ_.call(null,"parsed",G__19323))
{return lt.plugins.elm_light.elm_ast.upsert_ast_BANG_.call(null,new cljs.core.Keyword(null,"dir","dir",1014003711).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file","file",1017047278),file,new cljs.core.Keyword(null,"ast","ast",1014001140),ast,new cljs.core.Keyword(null,"package","package",4501809080),package$], null));
} else
{if(cljs.core._EQ_.call(null,"parseError",G__19323))
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
return (function (p1__19324_SHARP_){return lt.plugins.elm_light.clients.on_elm_message.call(null,client,p1__19324_SHARP_);
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
lt.plugins.elm_light.clients.start_elm_client = (function start_elm_client(p__19325){var map__19327 = p__19325;var map__19327__$1 = ((cljs.core.seq_QMARK_.call(null,map__19327))?cljs.core.apply.call(null,cljs.core.hash_map,map__19327):map__19327);var props = map__19327__$1;var client = cljs.core.get.call(null,map__19327__$1,new cljs.core.Keyword(null,"client","client",3951159101));var proj_path = cljs.core.get.call(null,map__19327__$1,new cljs.core.Keyword(null,"proj-path","proj-path",4362692615));var path = cljs.core.get.call(null,map__19327__$1,new cljs.core.Keyword(null,"path","path",1017337751));lt.objs.notifos.working.call(null,"Connecting..");
return lt.plugins.elm_light.clients.claim_reactor_port.call(null,proj_path,((function (map__19327,map__19327__$1,props,client,proj_path,path){
return (function (_,port){var worker = lt.plugins.elm_light.clients.start_elm_worker.call(null,proj_path,port,client);lt.object.merge_BANG_.call(null,client,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1017277949),lt.objs.files.basename.call(null,proj_path),new cljs.core.Keyword(null,"dir","dir",1014003711),proj_path,new cljs.core.Keyword(null,"reactor-port","reactor-port",4649590590),port,new cljs.core.Keyword(null,"worker","worker",4526786288),worker,new cljs.core.Keyword(null,"commands","commands",4706336250),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"editor.elm.lint","editor.elm.lint",1086056222),null,new cljs.core.Keyword(null,"editor.elm.make","editor.elm.make",1086078217),null,new cljs.core.Keyword(null,"editor.elm.ast.passthrough","editor.elm.ast.passthrough",3082755153),null,new cljs.core.Keyword(null,"editor.eval.elm","editor.eval.elm",1083015975),null,new cljs.core.Keyword(null,"editor.elm.hint","editor.elm.hint",1085937058),null,new cljs.core.Keyword(null,"elm.repl.restart","elm.repl.restart",2931654218),null,new cljs.core.Keyword(null,"editor.elm.ast.parsetext","editor.elm.ast.parsetext",1992138717),null,new cljs.core.Keyword(null,"docs.elm.search","docs.elm.search",737241333),null,new cljs.core.Keyword(null,"editor.elm.doc","editor.elm.doc",1570413537),null,new cljs.core.Keyword(null,"editor.elm.gendoc","editor.elm.gendoc",1485628611),null,new cljs.core.Keyword(null,"elm.reload.ast","elm.reload.ast",3046520423),null], null), null)], null));
return lt.object.add_behavior_BANG_.call(null,client,new cljs.core.Keyword("lt.plugins.elm-light.clients","send!","lt.plugins.elm-light.clients/send!",867013595));
});})(map__19327,map__19327__$1,props,client,proj_path,path))
);
});
lt.plugins.elm_light.clients.try_connect = (function try_connect(p__19328){var map__19330 = p__19328;var map__19330__$1 = ((cljs.core.seq_QMARK_.call(null,map__19330))?cljs.core.apply.call(null,cljs.core.hash_map,map__19330):map__19330);var props = map__19330__$1;var info = cljs.core.get.call(null,map__19330__$1,new cljs.core.Keyword(null,"info","info",1017141280));var path = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(info);var proj_path = lt.plugins.elm_light.utils.project_path.call(null,path);var client = lt.objs.clients.client_BANG_.call(null,new cljs.core.Keyword(null,"elm-client","elm-client",1622336068));if(cljs.core.truth_(proj_path))
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
lt.plugins.elm_light.clients.__BEH__elm_doc_search_results = (function __BEH__elm_doc_search_results(_,p__19331){var vec__19333 = p__19331;var client_id = cljs.core.nth.call(null,vec__19333,0,null);var command = cljs.core.nth.call(null,vec__19333,1,null);var msg = cljs.core.nth.call(null,vec__19333,2,null);cljs.core.println.call(null,"Here !");
return lt.object.raise.call(null,lt.objs.clients.clients,new cljs.core.Keyword(null,"message","message",1968829305),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [client_id,command,lt.plugins.elm_light.elm_ast.search_docs.call(null,new cljs.core.Keyword(null,"search","search",4402534682).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"project-dir","project-dir",4367844171).cljs$core$IFn$_invoke$arity$1(msg))], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.clients","elm-doc-search-results","lt.plugins.elm-light.clients/elm-doc-search-results",565676279),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.clients.__BEH__elm_doc_search_results,new cljs.core.Keyword(null,"desc","desc",1016984067),"Workaround behavior for showing doc search results in sidebar",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elm.doc.search.results","elm.doc.search.results",3225944800),null], null), null));
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
lt.plugins.elm_light.docpreview.preview_skeleton = (function preview_skeleton(this$){var e__6289__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"elm-doc-preview"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"Generating elm docs, please wait a little..."], null)], null));var seq__11883_11907 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__11884_11908 = null;var count__11885_11909 = 0;var i__11886_11910 = 0;while(true){
if((i__11886_11910 < count__11885_11909))
{var vec__11887_11911 = cljs.core._nth.call(null,chunk__11884_11908,i__11886_11910);var ev__6290__auto___11912 = cljs.core.nth.call(null,vec__11887_11911,0,null);var func__6291__auto___11913 = cljs.core.nth.call(null,vec__11887_11911,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___11912,func__6291__auto___11913);
{
var G__11914 = seq__11883_11907;
var G__11915 = chunk__11884_11908;
var G__11916 = count__11885_11909;
var G__11917 = (i__11886_11910 + 1);
seq__11883_11907 = G__11914;
chunk__11884_11908 = G__11915;
count__11885_11909 = G__11916;
i__11886_11910 = G__11917;
continue;
}
} else
{var temp__4092__auto___11918 = cljs.core.seq.call(null,seq__11883_11907);if(temp__4092__auto___11918)
{var seq__11883_11919__$1 = temp__4092__auto___11918;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11883_11919__$1))
{var c__5632__auto___11920 = cljs.core.chunk_first.call(null,seq__11883_11919__$1);{
var G__11921 = cljs.core.chunk_rest.call(null,seq__11883_11919__$1);
var G__11922 = c__5632__auto___11920;
var G__11923 = cljs.core.count.call(null,c__5632__auto___11920);
var G__11924 = 0;
seq__11883_11907 = G__11921;
chunk__11884_11908 = G__11922;
count__11885_11909 = G__11923;
i__11886_11910 = G__11924;
continue;
}
} else
{var vec__11888_11925 = cljs.core.first.call(null,seq__11883_11919__$1);var ev__6290__auto___11926 = cljs.core.nth.call(null,vec__11888_11925,0,null);var func__6291__auto___11927 = cljs.core.nth.call(null,vec__11888_11925,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___11926,func__6291__auto___11927);
{
var G__11928 = cljs.core.next.call(null,seq__11883_11919__$1);
var G__11929 = null;
var G__11930 = 0;
var G__11931 = 0;
seq__11883_11907 = G__11928;
chunk__11884_11908 = G__11929;
count__11885_11909 = G__11930;
i__11886_11910 = G__11931;
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
lt.plugins.elm_light.docpreview.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___11932 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___11932))
{var ts_11933 = temp__4092__auto___11932;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_11933))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_11933);
} else
{}
} else
{}
var temp__4092__auto___11934 = new cljs.core.Keyword(null,"owner-ed","owner-ed",2677003627).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___11934))
{var ed_11935 = temp__4092__auto___11934;lt.object.assoc_in_BANG_.call(null,ed_11935,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elmdoc","elmdoc",4008535620)], null),null);
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
return (function (){var seq__11893 = cljs.core.seq.call(null,lt.util.dom.$$.call(null,"pre code",lt.object.__GT_content.call(null,elmdoc)));var chunk__11894 = null;var count__11895 = 0;var i__11896 = 0;while(true){
if((i__11896 < count__11895))
{var block = cljs.core._nth.call(null,chunk__11894,i__11896);hljs.highlightBlock(block);
{
var G__11936 = seq__11893;
var G__11937 = chunk__11894;
var G__11938 = count__11895;
var G__11939 = (i__11896 + 1);
seq__11893 = G__11936;
chunk__11894 = G__11937;
count__11895 = G__11938;
i__11896 = G__11939;
continue;
}
} else
{var temp__4092__auto____$1 = cljs.core.seq.call(null,seq__11893);if(temp__4092__auto____$1)
{var seq__11893__$1 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11893__$1))
{var c__5632__auto__ = cljs.core.chunk_first.call(null,seq__11893__$1);{
var G__11940 = cljs.core.chunk_rest.call(null,seq__11893__$1);
var G__11941 = c__5632__auto__;
var G__11942 = cljs.core.count.call(null,c__5632__auto__);
var G__11943 = 0;
seq__11893 = G__11940;
chunk__11894 = G__11941;
count__11895 = G__11942;
i__11896 = G__11943;
continue;
}
} else
{var block = cljs.core.first.call(null,seq__11893__$1);hljs.highlightBlock(block);
{
var G__11944 = cljs.core.next.call(null,seq__11893__$1);
var G__11945 = null;
var G__11946 = 0;
var G__11947 = 0;
seq__11893 = G__11944;
chunk__11894 = G__11945;
count__11895 = G__11946;
i__11896 = G__11947;
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
lt.plugins.elm_light.modulebrowser.resolve_module_file = (function resolve_module_file(project_path,pck_json,package$,module,version){return cljs.core.some.call(null,(function (p1__18888_SHARP_){if(cljs.core.truth_(lt.objs.files.exists_QMARK_.call(null,p1__18888_SHARP_)))
{return p1__18888_SHARP_;
} else
{return null;
}
}),cljs.core.map.call(null,(function (p1__18887_SHARP_){return lt.objs.files.join.call(null,project_path,"elm-stuff/packages",package$,version,p1__18887_SHARP_,[cljs.core.str(clojure.string.replace.call(null,module,".",lt.objs.files.separator)),cljs.core.str(".elm")].join(''));
}),new cljs.core.Keyword(null,"source-directories","source-directories",4475397259).cljs$core$IFn$_invoke$arity$1(pck_json)));
});
lt.plugins.elm_light.modulebrowser.get_exposed_modules = (function get_exposed_modules(project_path,p__18889){var map__18891 = p__18889;var map__18891__$1 = ((cljs.core.seq_QMARK_.call(null,map__18891))?cljs.core.apply.call(null,cljs.core.hash_map,map__18891):map__18891);var exact = cljs.core.get.call(null,map__18891__$1,new cljs.core.Keyword(null,"exact","exact",1110851185));var package$ = cljs.core.get.call(null,map__18891__$1,new cljs.core.Keyword(null,"package","package",4501809080));var pck_json = lt.plugins.elm_light.utils.parse_json_file.call(null,lt.objs.files.join.call(null,project_path,"elm-stuff/packages",package$,exact,"elm-package.json"));return cljs.core.map.call(null,((function (pck_json,map__18891,map__18891__$1,exact,package$){
return (function (x){return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1017277949),x,new cljs.core.Keyword(null,"packageName","packageName",1922663267),package$,new cljs.core.Keyword(null,"version","version",1365512266),exact,new cljs.core.Keyword(null,"file","file",1017047278),lt.plugins.elm_light.modulebrowser.resolve_module_file.call(null,project_path,pck_json,package$,x,exact)], null);
});})(pck_json,map__18891,map__18891__$1,exact,package$))
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
return (function (p1__18892_SHARP_){return cljs.core._EQ_.call(null,lt.objs.files.ext.call(null,p1__18892_SHARP_),"elm");
});})(pck_json))
,lt.objs.files.ls.call(null,project_path)));
} else
{return cljs.core.map.call(null,((function (pck_json){
return (function (x){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),lt.plugins.elm_light.modulebrowser.deduce_module_name.call(null,lt.objs.files.join.call(null,project_path,dir),x),new cljs.core.Keyword(null,"file","file",1017047278),x], null);
});})(pck_json))
,lt.objs.files.filter_walk.call(null,((function (pck_json){
return (function (p1__18893_SHARP_){return cljs.core._EQ_.call(null,lt.objs.files.ext.call(null,p1__18893_SHARP_),"elm");
});})(pck_json))
,lt.objs.files.join.call(null,project_path,dir)));
}
});})(pck_json))
,new cljs.core.Keyword(null,"source-directories","source-directories",4475397259).cljs$core$IFn$_invoke$arity$1(pck_json))));
});
lt.plugins.elm_light.modulebrowser.get_all_modules = (function get_all_modules(project_path){return cljs.core.concat.call(null,lt.plugins.elm_light.modulebrowser.get_project_modules.call(null,project_path),lt.plugins.elm_light.modulebrowser.get_package_modules.call(null,project_path));
});
lt.plugins.elm_light.modulebrowser.wrapper = (function wrapper(this$){var e__6289__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"elm-module-browser"], null),"Retrieving modules..."], null));var seq__18900_18916 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__18901_18917 = null;var count__18902_18918 = 0;var i__18903_18919 = 0;while(true){
if((i__18903_18919 < count__18902_18918))
{var vec__18904_18920 = cljs.core._nth.call(null,chunk__18901_18917,i__18903_18919);var ev__6290__auto___18921 = cljs.core.nth.call(null,vec__18904_18920,0,null);var func__6291__auto___18922 = cljs.core.nth.call(null,vec__18904_18920,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___18921,func__6291__auto___18922);
{
var G__18923 = seq__18900_18916;
var G__18924 = chunk__18901_18917;
var G__18925 = count__18902_18918;
var G__18926 = (i__18903_18919 + 1);
seq__18900_18916 = G__18923;
chunk__18901_18917 = G__18924;
count__18902_18918 = G__18925;
i__18903_18919 = G__18926;
continue;
}
} else
{var temp__4092__auto___18927 = cljs.core.seq.call(null,seq__18900_18916);if(temp__4092__auto___18927)
{var seq__18900_18928__$1 = temp__4092__auto___18927;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18900_18928__$1))
{var c__5632__auto___18929 = cljs.core.chunk_first.call(null,seq__18900_18928__$1);{
var G__18930 = cljs.core.chunk_rest.call(null,seq__18900_18928__$1);
var G__18931 = c__5632__auto___18929;
var G__18932 = cljs.core.count.call(null,c__5632__auto___18929);
var G__18933 = 0;
seq__18900_18916 = G__18930;
chunk__18901_18917 = G__18931;
count__18902_18918 = G__18932;
i__18903_18919 = G__18933;
continue;
}
} else
{var vec__18905_18934 = cljs.core.first.call(null,seq__18900_18928__$1);var ev__6290__auto___18935 = cljs.core.nth.call(null,vec__18905_18934,0,null);var func__6291__auto___18936 = cljs.core.nth.call(null,vec__18905_18934,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___18935,func__6291__auto___18936);
{
var G__18937 = cljs.core.next.call(null,seq__18900_18928__$1);
var G__18938 = null;
var G__18939 = 0;
var G__18940 = 0;
seq__18900_18916 = G__18937;
chunk__18901_18917 = G__18938;
count__18902_18918 = G__18939;
i__18903_18919 = G__18940;
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
lt.plugins.elm_light.hinter.__GT_hints = (function __GT_hints(token,completions){return cljs.core.map.call(null,(function (p1__15896_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"text","text",1017460895),new cljs.core.Keyword(null,"displayText","displayText",2728236161),new cljs.core.Keyword(null,"render","render",4374279432),new cljs.core.Keyword(null,"from","from",1017056028),new cljs.core.Keyword(null,"to","to",1013907949)],[new cljs.core.Keyword(null,"completion","completion",4767668046).cljs$core$IFn$_invoke$arity$1(p1__15896_SHARP_),new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(p1__15896_SHARP_),(function (el,self,data){return lt.util.dom.html.call(null,el,wrapMatch(data.displayText,{"matched": new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(token)}));
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
lt.plugins.elm_light.linter.status_class = (function status_class(p__18721){var map__18723 = p__18721;var map__18723__$1 = ((cljs.core.seq_QMARK_.call(null,map__18723))?cljs.core.apply.call(null,cljs.core.hash_map,map__18723):map__18723);var warnings = cljs.core.get.call(null,map__18723__$1,new cljs.core.Keyword(null,"warnings","warnings",1511995337));var errors = cljs.core.get.call(null,map__18723__$1,new cljs.core.Keyword(null,"errors","errors",4014236381));if((errors > 0))
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
lt.plugins.elm_light.linter.status_text = (function status_text(p__18724){var map__18726 = p__18724;var map__18726__$1 = ((cljs.core.seq_QMARK_.call(null,map__18726))?cljs.core.apply.call(null,cljs.core.hash_map,map__18726):map__18726);var warnings = cljs.core.get.call(null,map__18726__$1,new cljs.core.Keyword(null,"warnings","warnings",1511995337));var errors = cljs.core.get.call(null,map__18726__$1,new cljs.core.Keyword(null,"errors","errors",4014236381));return [cljs.core.str("Lint status: "),cljs.core.str(errors),cljs.core.str("/"),cljs.core.str(warnings)].join('');
});
lt.plugins.elm_light.linter.__GT_status_ui = (function __GT_status_ui(p__18727){var map__18729 = p__18727;var map__18729__$1 = ((cljs.core.seq_QMARK_.call(null,map__18729))?cljs.core.apply.call(null,cljs.core.hash_map,map__18729):map__18729);var lint_summary = cljs.core.get.call(null,map__18729__$1,new cljs.core.Keyword(null,"lint-summary","lint-summary",2275048270));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("lint-status "),cljs.core.str(lt.plugins.elm_light.linter.status_class.call(null,lint_summary))].join('')], null),lt.plugins.elm_light.linter.status_text.call(null,lint_summary)], null);
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
return (function (p__18732){var vec__18733 = p__18732;var k = cljs.core.nth.call(null,vec__18733,0,null);var v = cljs.core.nth.call(null,vec__18733,1,null);return new cljs.core.PersistentArrayMap.fromArray([k,cljs.core.count.call(null,v)], true, false);
});})(results,temp__4090__auto__))
,cljs.core.group_by.call(null,new cljs.core.Keyword(null,"category","category",1064415344),cljs.core.map.call(null,new cljs.core.Keyword(null,"result","result",4374444943),cljs.core.vals.call(null,results)))));
} else
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",1110689146),0,new cljs.core.Keyword(null,"warning","warning",2138350350),0], null);
}
});
lt.plugins.elm_light.linter.update_status_for_editor = (function update_status_for_editor(ed){var map__18736 = lt.plugins.elm_light.linter.grouped_lint_count.call(null,ed);var map__18736__$1 = ((cljs.core.seq_QMARK_.call(null,map__18736))?cljs.core.apply.call(null,cljs.core.hash_map,map__18736):map__18736);var warning = cljs.core.get.call(null,map__18736__$1,new cljs.core.Keyword(null,"warning","warning",2138350350));var error = cljs.core.get.call(null,map__18736__$1,new cljs.core.Keyword(null,"error","error",1110689146));return lt.object.raise.call(null,lt.plugins.elm_light.linter.statusbar_lint_summary,new cljs.core.Keyword(null,"update!","update!",779473898),((function (map__18736,map__18736__$1,warning,error){
return (function (p1__18734_SHARP_){return cljs.core.assoc.call(null,p1__18734_SHARP_,new cljs.core.Keyword(null,"warnings","warnings",1511995337),(function (){var or__4884__auto__ = warning;if(cljs.core.truth_(or__4884__auto__))
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
});})(map__18736,map__18736__$1,warning,error))
);
});
lt.plugins.elm_light.linter.__BEH__update_linter_on_editor_change = (function __BEH__update_linter_on_editor_change(ed){return lt.plugins.elm_light.linter.update_status_for_editor.call(null,ed);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.linter","update-linter-on-editor-change","lt.plugins.elm-light.linter/update-linter-on-editor-change",2858337088),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.linter.__BEH__update_linter_on_editor_change,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"focus","focus",1111509066),null], null), null));
lt.plugins.elm_light.linter.remove_widget = (function remove_widget(ed,el){try{lt.util.dom.remove.call(null,el);
}catch (e18738){var e_18798 = e18738;}return lt.objs.editor.focus.call(null,ed);
});
lt.plugins.elm_light.linter.remove_res = (function remove_res(ed,res_id){var map__18740_18799 = cljs.core.get_in.call(null,cljs.core.deref.call(null,ed),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linter-results","linter-results",4482067083),res_id], null));var map__18740_18800__$1 = ((cljs.core.seq_QMARK_.call(null,map__18740_18799))?cljs.core.apply.call(null,cljs.core.hash_map,map__18740_18799):map__18740_18799);var dill_18801 = map__18740_18800__$1;var result_18802 = cljs.core.get.call(null,map__18740_18800__$1,new cljs.core.Keyword(null,"result","result",4374444943));var mark_18803 = cljs.core.get.call(null,map__18740_18800__$1,new cljs.core.Keyword(null,"mark","mark",1017248319));if(cljs.core.truth_(mark_18803))
{mark_18803.clear();
} else
{}
lt.object.update_BANG_.call(null,ed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linter-results","linter-results",4482067083)], null),cljs.core.dissoc,res_id);
return lt.objs.editor.focus.call(null,ed);
});
lt.plugins.elm_light.linter.current_range = (function current_range(ed,mark){var rng = mark.find();var from = rng.from;var to = rng.to;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1017056028),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",1013907415),from.ch,new cljs.core.Keyword(null,"line","line",1017226086),from.line], null),new cljs.core.Keyword(null,"to","to",1013907949),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",1013907415),to.ch,new cljs.core.Keyword(null,"line","line",1017226086),to.line], null)], null);
});
lt.plugins.elm_light.linter.execute_action = (function execute_action(ed,res_id,action_fn,res){var map__18742 = cljs.core.get_in.call(null,cljs.core.deref.call(null,ed),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linter-results","linter-results",4482067083),res_id], null));var map__18742__$1 = ((cljs.core.seq_QMARK_.call(null,map__18742))?cljs.core.apply.call(null,cljs.core.hash_map,map__18742):map__18742);var mark = cljs.core.get.call(null,map__18742__$1,new cljs.core.Keyword(null,"mark","mark",1017248319));action_fn.call(null,res,lt.plugins.elm_light.linter.current_range.call(null,ed,mark));
return lt.plugins.elm_light.linter.remove_res.call(null,ed,res_id);
});
lt.plugins.elm_light.linter.action_ui = (function action_ui(ed,action,res_id,res){var e__6289__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.button","span.button",4282180040),[cljs.core.str(new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(action))].join('')], null));var seq__18749_18804 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__6289__auto__){
return (function (){return lt.plugins.elm_light.linter.execute_action.call(null,ed,res_id,new cljs.core.Keyword(null,"action","action",3885920680).cljs$core$IFn$_invoke$arity$1(action),res);
});})(e__6289__auto__))
], null)));var chunk__18750_18805 = null;var count__18751_18806 = 0;var i__18752_18807 = 0;while(true){
if((i__18752_18807 < count__18751_18806))
{var vec__18753_18808 = cljs.core._nth.call(null,chunk__18750_18805,i__18752_18807);var ev__6290__auto___18809 = cljs.core.nth.call(null,vec__18753_18808,0,null);var func__6291__auto___18810 = cljs.core.nth.call(null,vec__18753_18808,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___18809,func__6291__auto___18810);
{
var G__18811 = seq__18749_18804;
var G__18812 = chunk__18750_18805;
var G__18813 = count__18751_18806;
var G__18814 = (i__18752_18807 + 1);
seq__18749_18804 = G__18811;
chunk__18750_18805 = G__18812;
count__18751_18806 = G__18813;
i__18752_18807 = G__18814;
continue;
}
} else
{var temp__4092__auto___18815 = cljs.core.seq.call(null,seq__18749_18804);if(temp__4092__auto___18815)
{var seq__18749_18816__$1 = temp__4092__auto___18815;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18749_18816__$1))
{var c__5632__auto___18817 = cljs.core.chunk_first.call(null,seq__18749_18816__$1);{
var G__18818 = cljs.core.chunk_rest.call(null,seq__18749_18816__$1);
var G__18819 = c__5632__auto___18817;
var G__18820 = cljs.core.count.call(null,c__5632__auto___18817);
var G__18821 = 0;
seq__18749_18804 = G__18818;
chunk__18750_18805 = G__18819;
count__18751_18806 = G__18820;
i__18752_18807 = G__18821;
continue;
}
} else
{var vec__18754_18822 = cljs.core.first.call(null,seq__18749_18816__$1);var ev__6290__auto___18823 = cljs.core.nth.call(null,vec__18754_18822,0,null);var func__6291__auto___18824 = cljs.core.nth.call(null,vec__18754_18822,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___18823,func__6291__auto___18824);
{
var G__18825 = cljs.core.next.call(null,seq__18749_18816__$1);
var G__18826 = null;
var G__18827 = 0;
var G__18828 = 0;
seq__18749_18804 = G__18825;
chunk__18750_18805 = G__18826;
count__18751_18806 = G__18827;
i__18752_18807 = G__18828;
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
lt.plugins.elm_light.linter.inline_ui = (function inline_ui(ed,res_id,p__18758){var map__18766 = p__18758;var map__18766__$1 = ((cljs.core.seq_QMARK_.call(null,map__18766))?cljs.core.apply.call(null,cljs.core.hash_map,map__18766):map__18766);var res = map__18766__$1;var actions = cljs.core.get.call(null,map__18766__$1,new cljs.core.Keyword(null,"actions","actions",4147068015));var category = cljs.core.get.call(null,map__18766__$1,new cljs.core.Keyword(null,"category","category",1064415344));var details = cljs.core.get.call(null,map__18766__$1,new cljs.core.Keyword(null,"details","details",2571625908));var title = cljs.core.get.call(null,map__18766__$1,new cljs.core.Keyword(null,"title","title",1124275658));var e__6289__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tabindex","tabindex",4410954191),-1,new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("linter-res "),cljs.core.str((function (){var or__4884__auto__ = cljs.core.name.call(null,category);if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return "error";
}
})())].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.title","p.title",3057381068),title], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.details","div.details",4139669847),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),details], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),cljs.core.map.call(null,((function (map__18766,map__18766__$1,res,actions,category,details,title){
return (function (p1__18755_SHARP_){return lt.plugins.elm_light.linter.action_ui.call(null,ed,p1__18755_SHARP_,res_id,res);
});})(map__18766,map__18766__$1,res,actions,category,details,title))
,actions)], null)], null)], null));var seq__18767_18829 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blur","blur",1016931289),((function (e__6289__auto__,map__18766,map__18766__$1,res,actions,category,details,title){
return (function (p1__18756_SHARP_){return lt.plugins.elm_light.linter.remove_widget.call(null,ed,p1__18756_SHARP_.target);
});})(e__6289__auto__,map__18766,map__18766__$1,res,actions,category,details,title))
,new cljs.core.Keyword(null,"keydown","keydown",4493897459),((function (e__6289__auto__,map__18766,map__18766__$1,res,actions,category,details,title){
return (function (p1__18757_SHARP_){var kc = p1__18757_SHARP_.keyCode;if(cljs.core._EQ_.call(null,kc,27))
{lt.plugins.elm_light.linter.remove_widget.call(null,ed,p1__18757_SHARP_.target);
} else
{}
if((cljs.core._EQ_.call(null,kc,13)) && (cljs.core.seq.call(null,actions)))
{p1__18757_SHARP_.preventDefault();
p1__18757_SHARP_.stopPropagation();
return lt.plugins.elm_light.linter.execute_action.call(null,ed,res_id,new cljs.core.Keyword(null,"action","action",3885920680).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,actions)),res);
} else
{return null;
}
});})(e__6289__auto__,map__18766,map__18766__$1,res,actions,category,details,title))
], null)));var chunk__18768_18830 = null;var count__18769_18831 = 0;var i__18770_18832 = 0;while(true){
if((i__18770_18832 < count__18769_18831))
{var vec__18771_18833 = cljs.core._nth.call(null,chunk__18768_18830,i__18770_18832);var ev__6290__auto___18834 = cljs.core.nth.call(null,vec__18771_18833,0,null);var func__6291__auto___18835 = cljs.core.nth.call(null,vec__18771_18833,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___18834,func__6291__auto___18835);
{
var G__18836 = seq__18767_18829;
var G__18837 = chunk__18768_18830;
var G__18838 = count__18769_18831;
var G__18839 = (i__18770_18832 + 1);
seq__18767_18829 = G__18836;
chunk__18768_18830 = G__18837;
count__18769_18831 = G__18838;
i__18770_18832 = G__18839;
continue;
}
} else
{var temp__4092__auto___18840 = cljs.core.seq.call(null,seq__18767_18829);if(temp__4092__auto___18840)
{var seq__18767_18841__$1 = temp__4092__auto___18840;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18767_18841__$1))
{var c__5632__auto___18842 = cljs.core.chunk_first.call(null,seq__18767_18841__$1);{
var G__18843 = cljs.core.chunk_rest.call(null,seq__18767_18841__$1);
var G__18844 = c__5632__auto___18842;
var G__18845 = cljs.core.count.call(null,c__5632__auto___18842);
var G__18846 = 0;
seq__18767_18829 = G__18843;
chunk__18768_18830 = G__18844;
count__18769_18831 = G__18845;
i__18770_18832 = G__18846;
continue;
}
} else
{var vec__18772_18847 = cljs.core.first.call(null,seq__18767_18841__$1);var ev__6290__auto___18848 = cljs.core.nth.call(null,vec__18772_18847,0,null);var func__6291__auto___18849 = cljs.core.nth.call(null,vec__18772_18847,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___18848,func__6291__auto___18849);
{
var G__18850 = cljs.core.next.call(null,seq__18767_18841__$1);
var G__18851 = null;
var G__18852 = 0;
var G__18853 = 0;
seq__18767_18829 = G__18850;
chunk__18768_18830 = G__18851;
count__18769_18831 = G__18852;
i__18770_18832 = G__18853;
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
lt.plugins.elm_light.linter.add_widget = (function add_widget(ed,res_id){var map__18774 = cljs.core.get_in.call(null,cljs.core.deref.call(null,ed),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linter-results","linter-results",4482067083),res_id], null));var map__18774__$1 = ((cljs.core.seq_QMARK_.call(null,map__18774))?cljs.core.apply.call(null,cljs.core.hash_map,map__18774):map__18774);var result = cljs.core.get.call(null,map__18774__$1,new cljs.core.Keyword(null,"result","result",4374444943));var mark = cljs.core.get.call(null,map__18774__$1,new cljs.core.Keyword(null,"mark","mark",1017248319));var ui = lt.plugins.elm_light.linter.inline_ui.call(null,ed,res_id,result);var from = mark.find().from;lt.objs.editor.__GT_cm_ed.call(null,ed).addWidget(from,ui,{"scrollIntoView": true});
return lt.util.dom.focus.call(null,ui);
});
lt.plugins.elm_light.linter.create_mark = (function create_mark(ed,p__18775){var map__18777 = p__18775;var map__18777__$1 = ((cljs.core.seq_QMARK_.call(null,map__18777))?cljs.core.apply.call(null,cljs.core.hash_map,map__18777):map__18777);var code_range = cljs.core.get.call(null,map__18777__$1,new cljs.core.Keyword(null,"code-range","code-range",3297446095));var category = cljs.core.get.call(null,map__18777__$1,new cljs.core.Keyword(null,"category","category",1064415344));var from = new cljs.core.Keyword(null,"from","from",1017056028).cljs$core$IFn$_invoke$arity$1(code_range);var to = ((!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"to","to",1013907949).cljs$core$IFn$_invoke$arity$1(code_range),from)))?new cljs.core.Keyword(null,"to","to",1013907949).cljs$core$IFn$_invoke$arity$1(code_range):cljs.core.assoc.call(null,from,new cljs.core.Keyword(null,"ch","ch",1013907415),(lt.objs.editor.line_length.call(null,ed,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(from)) - 1)));return lt.objs.editor.mark.call(null,ed,from,to,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",1004015509),[cljs.core.str("lint-"),cljs.core.str((function (){var or__4884__auto__ = cljs.core.name.call(null,category);if(cljs.core.truth_(or__4884__auto__))
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
lt.plugins.elm_light.linter.__BEH__clear_linter_results_BANG_ = (function __BEH__clear_linter_results_BANG_(ed){var seq__18784_18854 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"linter-results","linter-results",4482067083).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));var chunk__18785_18855 = null;var count__18786_18856 = 0;var i__18787_18857 = 0;while(true){
if((i__18787_18857 < count__18786_18856))
{var vec__18788_18858 = cljs.core._nth.call(null,chunk__18785_18855,i__18787_18857);var id_18859 = cljs.core.nth.call(null,vec__18788_18858,0,null);var res_18860 = cljs.core.nth.call(null,vec__18788_18858,1,null);var temp__4092__auto___18861 = new cljs.core.Keyword(null,"mark","mark",1017248319).cljs$core$IFn$_invoke$arity$1(res_18860);if(cljs.core.truth_(temp__4092__auto___18861))
{var m_18862 = temp__4092__auto___18861;m_18862.clear();
} else
{}
var temp__4092__auto___18863 = new cljs.core.Keyword(null,"widget","widget",4520824246).cljs$core$IFn$_invoke$arity$1(res_18860);if(cljs.core.truth_(temp__4092__auto___18863))
{var w_18864 = temp__4092__auto___18863;lt.util.dom.remove.call(null,w_18864);
} else
{}
{
var G__18865 = seq__18784_18854;
var G__18866 = chunk__18785_18855;
var G__18867 = count__18786_18856;
var G__18868 = (i__18787_18857 + 1);
seq__18784_18854 = G__18865;
chunk__18785_18855 = G__18866;
count__18786_18856 = G__18867;
i__18787_18857 = G__18868;
continue;
}
} else
{var temp__4092__auto___18869 = cljs.core.seq.call(null,seq__18784_18854);if(temp__4092__auto___18869)
{var seq__18784_18870__$1 = temp__4092__auto___18869;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18784_18870__$1))
{var c__5632__auto___18871 = cljs.core.chunk_first.call(null,seq__18784_18870__$1);{
var G__18872 = cljs.core.chunk_rest.call(null,seq__18784_18870__$1);
var G__18873 = c__5632__auto___18871;
var G__18874 = cljs.core.count.call(null,c__5632__auto___18871);
var G__18875 = 0;
seq__18784_18854 = G__18872;
chunk__18785_18855 = G__18873;
count__18786_18856 = G__18874;
i__18787_18857 = G__18875;
continue;
}
} else
{var vec__18789_18876 = cljs.core.first.call(null,seq__18784_18870__$1);var id_18877 = cljs.core.nth.call(null,vec__18789_18876,0,null);var res_18878 = cljs.core.nth.call(null,vec__18789_18876,1,null);var temp__4092__auto___18879__$1 = new cljs.core.Keyword(null,"mark","mark",1017248319).cljs$core$IFn$_invoke$arity$1(res_18878);if(cljs.core.truth_(temp__4092__auto___18879__$1))
{var m_18880 = temp__4092__auto___18879__$1;m_18880.clear();
} else
{}
var temp__4092__auto___18881__$1 = new cljs.core.Keyword(null,"widget","widget",4520824246).cljs$core$IFn$_invoke$arity$1(res_18878);if(cljs.core.truth_(temp__4092__auto___18881__$1))
{var w_18882 = temp__4092__auto___18881__$1;lt.util.dom.remove.call(null,w_18882);
} else
{}
{
var G__18883 = cljs.core.next.call(null,seq__18784_18870__$1);
var G__18884 = null;
var G__18885 = 0;
var G__18886 = 0;
seq__18784_18854 = G__18883;
chunk__18785_18855 = G__18884;
count__18786_18856 = G__18885;
i__18787_18857 = G__18886;
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
lt.plugins.elm_light.linter.find_current_lint_mark = (function find_current_lint_mark(ed){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__18790_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"linter","linter",4206213986),p1__18790_SHARP_.lttype);
}),lt.objs.editor.find_marks.call(null,ed,lt.objs.editor.__GT_cursor.call(null,ed))));
});
lt.plugins.elm_light.linter.get_widget_by_mark = (function get_widget_by_mark(ed,mark){return cljs.core.get_in.call(null,cljs.core.deref.call(null,ed),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linter-results","linter-results",4482067083),mark.ltlintid,new cljs.core.Keyword(null,"widget","widget",4520824246)], null));
});
lt.plugins.elm_light.linter.mark__GT_pos = (function mark__GT_pos(mark){var cm_pos = mark.find().from;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",1013907415),cm_pos.ch,new cljs.core.Keyword(null,"line","line",1017226086),cm_pos.line], null);
});
lt.plugins.elm_light.linter.get_all_lint_marks = (function get_all_lint_marks(ed){return cljs.core.sort_by.call(null,(function (p1__18792_SHARP_){return cljs.core.juxt.call(null,new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"ch","ch",1013907415)).call(null,lt.plugins.elm_light.linter.mark__GT_pos.call(null,p1__18792_SHARP_));
}),cljs.core.filter.call(null,(function (p1__18791_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"linter","linter",4206213986),p1__18791_SHARP_.lttype);
}),lt.objs.editor.__GT_cm_ed.call(null,ed).getAllMarks()));
});
lt.plugins.elm_light.linter.split_with_mark = (function split_with_mark(ed){var all_marks = lt.plugins.elm_light.linter.get_all_lint_marks.call(null,ed);var curr_mark = lt.plugins.elm_light.linter.find_current_lint_mark.call(null,ed);return cljs.core.split_with.call(null,((function (all_marks,curr_mark){
return (function (p1__18793_SHARP_){return !(cljs.core._EQ_.call(null,(cljs.core.truth_(curr_mark)?curr_mark.ltlintid:null),p1__18793_SHARP_.ltlintid));
});})(all_marks,curr_mark))
,all_marks);
});
lt.plugins.elm_light.linter.find_next_mark = (function find_next_mark(ed){var vec__18795 = lt.plugins.elm_light.linter.split_with_mark.call(null,ed);var ms1 = cljs.core.nth.call(null,vec__18795,0,null);var ms2 = cljs.core.nth.call(null,vec__18795,1,null);return cljs.core.first.call(null,cljs.core.into.call(null,cljs.core.vec.call(null,cljs.core.drop.call(null,1,ms2)),ms1));
});
lt.plugins.elm_light.linter.find_prev_mark = (function find_prev_mark(ed){var vec__18797 = lt.plugins.elm_light.linter.split_with_mark.call(null,ed);var ms1 = cljs.core.nth.call(null,vec__18797,0,null);var ms2 = cljs.core.nth.call(null,vec__18797,1,null);return cljs.core.first.call(null,cljs.core.into.call(null,cljs.core.reverse.call(null,cljs.core.drop.call(null,1,ms2)),ms1));
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
lt.plugins.elm_light.__GT_lt_range = (function __GT_lt_range(p__6587){var map__6589 = p__6587;var map__6589__$1 = ((cljs.core.seq_QMARK_.call(null,map__6589))?cljs.core.apply.call(null,cljs.core.hash_map,map__6589):map__6589);var end = cljs.core.get.call(null,map__6589__$1,new cljs.core.Keyword(null,"end","end",1014004813));var start = cljs.core.get.call(null,map__6589__$1,new cljs.core.Keyword(null,"start","start",1123661780));return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1017056028),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",1013907415),(new cljs.core.Keyword(null,"column","column",3954034376).cljs$core$IFn$_invoke$arity$1(start) - 1),new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(start) - 1)], null),new cljs.core.Keyword(null,"to","to",1013907949),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",1013907415),(new cljs.core.Keyword(null,"column","column",3954034376).cljs$core$IFn$_invoke$arity$1(end) - 1),new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(end) - 1)], null)], null);
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
lt.plugins.elm_light.linter_action = (function linter_action(ed,row){var G__6601 = new cljs.core.Keyword(null,"tag","tag",1014018828).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core._EQ_.call(null,"TYPE MISMATCH",G__6601))
{var ann = lt.plugins.elm_light.maybe_strip_hint.call(null,lt.plugins.elm_light.maybe_trim.call(null,cljs.core.second.call(null,cljs.core.re_find.call(null,/But I am inferring that the definition has this type:([\s\S]*$)/m,new cljs.core.Keyword(null,"details","details",2571625908).cljs$core$IFn$_invoke$arity$1(row)))));if(cljs.core.truth_((function (){var and__4872__auto__ = ann;if(cljs.core.truth_(and__4872__auto__))
{return cljs.core.not.call(null,lt.plugins.elm_light.str_contains_QMARK_.call(null,ann,"..."));
} else
{return and__4872__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",1017460895),"Fix annotation",new cljs.core.Keyword(null,"action","action",3885920680),((function (ann,G__6601){
return (function (_,p__6602){var map__6603 = p__6602;var map__6603__$1 = ((cljs.core.seq_QMARK_.call(null,map__6603))?cljs.core.apply.call(null,cljs.core.hash_map,map__6603):map__6603);var to = cljs.core.get.call(null,map__6603__$1,new cljs.core.Keyword(null,"to","to",1013907949));var from = cljs.core.get.call(null,map__6603__$1,new cljs.core.Keyword(null,"from","from",1017056028));return lt.objs.editor.replace.call(null,ed,from,to,ann);
});})(ann,G__6601))
], null)], null);
} else
{return cljs.core.PersistentVector.EMPTY;
}
} else
{if(cljs.core._EQ_.call(null,"NAMING ERROR",G__6601))
{var fixes = cljs.core.filter.call(null,cljs.core.seq,cljs.core.map.call(null,clojure.string.trim,clojure.string.split_lines.call(null,cljs.core.second.call(null,cljs.core.re_find.call(null,/Maybe you want one of the following\?(:?[\s\S]*$)/m,new cljs.core.Keyword(null,"details","details",2571625908).cljs$core$IFn$_invoke$arity$1(row))))));return cljs.core.map.call(null,((function (fixes,G__6601){
return (function (suggestion){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",1017460895),suggestion,new cljs.core.Keyword(null,"action","action",3885920680),((function (fixes,G__6601){
return (function (_,p__6604){var map__6605 = p__6604;var map__6605__$1 = ((cljs.core.seq_QMARK_.call(null,map__6605))?cljs.core.apply.call(null,cljs.core.hash_map,map__6605):map__6605);var to = cljs.core.get.call(null,map__6605__$1,new cljs.core.Keyword(null,"to","to",1013907949));var from = cljs.core.get.call(null,map__6605__$1,new cljs.core.Keyword(null,"from","from",1017056028));return lt.objs.editor.replace.call(null,ed,from,to,suggestion);
});})(fixes,G__6601))
], null);
});})(fixes,G__6601))
,fixes);
} else
{if(cljs.core._EQ_.call(null,"missing type annotation",G__6601))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",1017460895),"Add",new cljs.core.Keyword(null,"action","action",3885920680),((function (G__6601){
return (function (p__6606,p__6607){var map__6608 = p__6606;var map__6608__$1 = ((cljs.core.seq_QMARK_.call(null,map__6608))?cljs.core.apply.call(null,cljs.core.hash_map,map__6608):map__6608);var details = cljs.core.get.call(null,map__6608__$1,new cljs.core.Keyword(null,"details","details",2571625908));var map__6609 = p__6607;var map__6609__$1 = ((cljs.core.seq_QMARK_.call(null,map__6609))?cljs.core.apply.call(null,cljs.core.hash_map,map__6609):map__6609);var from = cljs.core.get.call(null,map__6609__$1,new cljs.core.Keyword(null,"from","from",1017056028));var ann = [cljs.core.str(clojure.string.trim.call(null,cljs.core.second.call(null,cljs.core.re_find.call(null,/I inferred the type annotation so you can copy it into your code:([\s\S]*$)/m,details)))),cljs.core.str("\n")].join('');return lt.objs.editor.replace.call(null,ed,from,ann);
});})(G__6601))
], null)], null);
} else
{if(cljs.core._EQ_.call(null,"unused import",G__6601))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",1017460895),"Remove",new cljs.core.Keyword(null,"action","action",3885920680),((function (G__6601){
return (function (_,p__6610){var map__6611 = p__6610;var map__6611__$1 = ((cljs.core.seq_QMARK_.call(null,map__6611))?cljs.core.apply.call(null,cljs.core.hash_map,map__6611):map__6611);var to = cljs.core.get.call(null,map__6611__$1,new cljs.core.Keyword(null,"to","to",1013907949));var from = cljs.core.get.call(null,map__6611__$1,new cljs.core.Keyword(null,"from","from",1017056028));lt.objs.editor.replace.call(null,ed,from,to,"");
return CodeMirror.commands.deleteLine(lt.objs.editor.__GT_cm_ed.call(null,ed));
});})(G__6601))
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
if(cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__6612_SHARP_){return cljs.core._EQ_.call(null,"error",new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(p1__6612_SHARP_));
}),res)))
{lt.objs.notifos.set_msg_BANG_.call(null,"Elm make returned errors; check you editor or the console for details",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
} else
{}
var seq__6619 = cljs.core.seq.call(null,res);var chunk__6620 = null;var count__6621 = 0;var i__6622 = 0;while(true){
if((i__6622 < count__6621))
{var map__6623 = cljs.core._nth.call(null,chunk__6620,i__6622);var map__6623__$1 = ((cljs.core.seq_QMARK_.call(null,map__6623))?cljs.core.apply.call(null,cljs.core.hash_map,map__6623):map__6623);var row = map__6623__$1;var tag = cljs.core.get.call(null,map__6623__$1,new cljs.core.Keyword(null,"tag","tag",1014018828));var subregion = cljs.core.get.call(null,map__6623__$1,new cljs.core.Keyword(null,"subregion","subregion",1501636774));var region = cljs.core.get.call(null,map__6623__$1,new cljs.core.Keyword(null,"region","region",4374076006));var details = cljs.core.get.call(null,map__6623__$1,new cljs.core.Keyword(null,"details","details",2571625908));var overview = cljs.core.get.call(null,map__6623__$1,new cljs.core.Keyword(null,"overview","overview",1544020203));var type = cljs.core.get.call(null,map__6623__$1,new cljs.core.Keyword(null,"type","type",1017479852));var file = cljs.core.get.call(null,map__6623__$1,new cljs.core.Keyword(null,"file","file",1017047278));var msg_6649 = [cljs.core.str(overview),cljs.core.str("\n"),cljs.core.str(lt.plugins.elm_light.colorize_msg.call(null,details))].join('');if(cljs.core.truth_((function (){var and__4872__auto__ = cljs.core._EQ_.call(null,path,file);if(and__4872__auto__)
{return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["error",null,"warning",null], null), null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [type], null));
} else
{return and__4872__auto__;
}
})()))
{lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"linter-result!","linter-result!",4482067001),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",1124275658),tag,new cljs.core.Keyword(null,"details","details",2571625908),msg_6649,new cljs.core.Keyword(null,"category","category",1064415344),cljs.core.keyword.call(null,type),new cljs.core.Keyword(null,"actions","actions",4147068015),lt.plugins.elm_light.linter_action.call(null,ed,row),new cljs.core.Keyword(null,"code-range","code-range",3297446095),lt.plugins.elm_light.__GT_lt_range.call(null,(function (){var or__4884__auto__ = subregion;if(cljs.core.truth_(or__4884__auto__))
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
var G__6650 = seq__6619;
var G__6651 = chunk__6620;
var G__6652 = count__6621;
var G__6653 = (i__6622 + 1);
seq__6619 = G__6650;
chunk__6620 = G__6651;
count__6621 = G__6652;
i__6622 = G__6653;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__6619);if(temp__4092__auto__)
{var seq__6619__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6619__$1))
{var c__5632__auto__ = cljs.core.chunk_first.call(null,seq__6619__$1);{
var G__6654 = cljs.core.chunk_rest.call(null,seq__6619__$1);
var G__6655 = c__5632__auto__;
var G__6656 = cljs.core.count.call(null,c__5632__auto__);
var G__6657 = 0;
seq__6619 = G__6654;
chunk__6620 = G__6655;
count__6621 = G__6656;
i__6622 = G__6657;
continue;
}
} else
{var map__6624 = cljs.core.first.call(null,seq__6619__$1);var map__6624__$1 = ((cljs.core.seq_QMARK_.call(null,map__6624))?cljs.core.apply.call(null,cljs.core.hash_map,map__6624):map__6624);var row = map__6624__$1;var tag = cljs.core.get.call(null,map__6624__$1,new cljs.core.Keyword(null,"tag","tag",1014018828));var subregion = cljs.core.get.call(null,map__6624__$1,new cljs.core.Keyword(null,"subregion","subregion",1501636774));var region = cljs.core.get.call(null,map__6624__$1,new cljs.core.Keyword(null,"region","region",4374076006));var details = cljs.core.get.call(null,map__6624__$1,new cljs.core.Keyword(null,"details","details",2571625908));var overview = cljs.core.get.call(null,map__6624__$1,new cljs.core.Keyword(null,"overview","overview",1544020203));var type = cljs.core.get.call(null,map__6624__$1,new cljs.core.Keyword(null,"type","type",1017479852));var file = cljs.core.get.call(null,map__6624__$1,new cljs.core.Keyword(null,"file","file",1017047278));var msg_6658 = [cljs.core.str(overview),cljs.core.str("\n"),cljs.core.str(lt.plugins.elm_light.colorize_msg.call(null,details))].join('');if(cljs.core.truth_((function (){var and__4872__auto__ = cljs.core._EQ_.call(null,path,file);if(and__4872__auto__)
{return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["error",null,"warning",null], null), null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [type], null));
} else
{return and__4872__auto__;
}
})()))
{lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"linter-result!","linter-result!",4482067001),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",1124275658),tag,new cljs.core.Keyword(null,"details","details",2571625908),msg_6658,new cljs.core.Keyword(null,"category","category",1064415344),cljs.core.keyword.call(null,type),new cljs.core.Keyword(null,"actions","actions",4147068015),lt.plugins.elm_light.linter_action.call(null,ed,row),new cljs.core.Keyword(null,"code-range","code-range",3297446095),lt.plugins.elm_light.__GT_lt_range.call(null,(function (){var or__4884__auto__ = subregion;if(cljs.core.truth_(or__4884__auto__))
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
var G__6659 = cljs.core.next.call(null,seq__6619__$1);
var G__6660 = null;
var G__6661 = 0;
var G__6662 = 0;
seq__6619 = G__6659;
chunk__6620 = G__6660;
count__6621 = G__6661;
i__6622 = G__6662;
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
lt.plugins.elm_light.__BEH__make_project = (function __BEH__make_project(ed){var info = new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed));var project_path = lt.plugins.elm_light.utils.project_path.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(info));var map__6626 = new cljs.core.Keyword(null,"make-info","make-info",2233727135).cljs$core$IFn$_invoke$arity$1(lt.plugins.elm_light.utils.parse_json_file.call(null,lt.objs.files.join.call(null,project_path,"elm-package.json")));var map__6626__$1 = ((cljs.core.seq_QMARK_.call(null,map__6626))?cljs.core.apply.call(null,cljs.core.hash_map,map__6626):map__6626);var out = cljs.core.get.call(null,map__6626__$1,new cljs.core.Keyword(null,"out","out",1014014656));var main = cljs.core.get.call(null,map__6626__$1,new cljs.core.Keyword(null,"main","main",1017248043));if(cljs.core.truth_((function (){var and__4872__auto__ = main;if(cljs.core.truth_(and__4872__auto__))
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
lt.plugins.elm_light.__BEH__elm_make_res = (function __BEH__elm_make_res(ed,p__6627){var map__6629 = p__6627;var map__6629__$1 = ((cljs.core.seq_QMARK_.call(null,map__6629))?cljs.core.apply.call(null,cljs.core.hash_map,map__6629):map__6629);var res = cljs.core.get.call(null,map__6629__$1,new cljs.core.Keyword(null,"res","res",1014017042));var outputFile = cljs.core.get.call(null,map__6629__$1,new cljs.core.Keyword(null,"outputFile","outputFile",4034596239));lt.objs.notifos.done_working.call(null,[cljs.core.str("Elm make compiled to: "),cljs.core.str(outputFile)].join(''));
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
lt.plugins.elm_light.__BEH__eval_BANG_ = (function __BEH__eval_BANG_(this$,event){var map__6631 = event;var map__6631__$1 = ((cljs.core.seq_QMARK_.call(null,map__6631))?cljs.core.apply.call(null,cljs.core.hash_map,map__6631):map__6631);var origin = cljs.core.get.call(null,map__6631__$1,new cljs.core.Keyword(null,"origin","origin",4300251800));var info = cljs.core.get.call(null,map__6631__$1,new cljs.core.Keyword(null,"info","info",1017141280));lt.objs.notifos.working.call(null,"Evaluating elm...");
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
lt.plugins.elm_light.__BEH__repl_restart_BANG_ = (function __BEH__repl_restart_BANG_(p__6632){var map__6634 = p__6632;var map__6634__$1 = ((cljs.core.seq_QMARK_.call(null,map__6634))?cljs.core.apply.call(null,cljs.core.hash_map,map__6634):map__6634);var ed = map__6634__$1;var info = cljs.core.get.call(null,map__6634__$1,new cljs.core.Keyword(null,"info","info",1017141280));var temp__4092__auto__ = new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));if(cljs.core.truth_(temp__4092__auto__))
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
var b_6663 = (function (){var or__4884__auto__ = cljs.core.first.call(null,lt.object.by_tag.call(null,new cljs.core.Keyword(null,"browser","browser",1164844698)));if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return lt.objs.browser.add.call(null);
}
})();var get_url_6664 = ((function (b_6663,path,client){
return (function (){return [cljs.core.str("http://localhost:"),cljs.core.str(new cljs.core.Keyword(null,"reactor-port","reactor-port",4649590590).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client))),cljs.core.str(path),cljs.core.str((cljs.core.truth_(debug_QMARK_)?"?debug":""))].join('');
});})(b_6663,path,client))
;if(cljs.core.truth_(new cljs.core.Keyword(null,"connected","connected",4729661051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client))))
{lt.object.raise.call(null,b_6663,new cljs.core.Keyword(null,"navigate!","navigate!",1766726722),get_url_6664.call(null));
} else
{lt.util.js.wait.call(null,100,((function (b_6663,get_url_6664,path,client){
return (function (){return lt.object.raise.call(null,b_6663,new cljs.core.Keyword(null,"navigate!","navigate!",1766726722),get_url_6664.call(null));
});})(b_6663,get_url_6664,path,client))
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
lt.plugins.elm_light.__BEH__elm_parse_editor_result = (function __BEH__elm_parse_editor_result(ed,res){var temp__4090__auto___6665 = new cljs.core.Keyword(null,"error","error",1110689146).cljs$core$IFn$_invoke$arity$1(res);if(cljs.core.truth_(temp__4090__auto___6665))
{var error_6666 = temp__4090__auto___6665;lt.object.update_BANG_.call(null,ed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast-status","ast-status",2421112079)], null),cljs.core.assoc,new cljs.core.Keyword(null,"status","status",4416389988),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"error","error",1110689146),error_6666);
} else
{var path_6667 = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));lt.object.update_BANG_.call(null,ed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast-status","ast-status",2421112079)], null),cljs.core.assoc,new cljs.core.Keyword(null,"status","status",4416389988),new cljs.core.Keyword(null,"ok","ok",1013907790),new cljs.core.Keyword(null,"error","error",1110689146),null);
lt.plugins.elm_light.elm_ast.upsert_ast_BANG_.call(null,lt.plugins.elm_light.utils.project_path.call(null,path_6667),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",1017047278),path_6667,new cljs.core.Keyword(null,"ast","ast",1014001140),new cljs.core.Keyword(null,"ast","ast",1014001140).cljs$core$IFn$_invoke$arity$1(res)], null));
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
{var map__6636 = lt.plugins.elm_light.elm_ast.__GT_range.call(null,new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(exposing));var map__6636__$1 = ((cljs.core.seq_QMARK_.call(null,map__6636))?cljs.core.apply.call(null,cljs.core.hash_map,map__6636):map__6636);var end = cljs.core.get.call(null,map__6636__$1,new cljs.core.Keyword(null,"end","end",1014004813));var start = cljs.core.get.call(null,map__6636__$1,new cljs.core.Keyword(null,"start","start",1123661780));var upd_exp = lt.plugins.elm_light.elm_ast.expose_decl.call(null,decl,exposing);var bm = lt.objs.editor.bookmark.call(null,ed,lt.objs.editor.__GT_cursor.call(null,ed));lt.objs.editor.replace.call(null,ed,start,end,lt.plugins.elm_light.elm_ast.print_exposing.call(null,upd_exp));
return lt.objs.editor.move_cursor.call(null,ed,lt.plugins.elm_light.cm_pos__GT_pos.call(null,bm.find()));
}
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light","elm-expose-top-level","lt.plugins.elm-light/elm-expose-top-level",2519767763),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.__BEH__elm_expose_top_level,new cljs.core.Keyword(null,"desc","desc",1016984067),"Behavior to expose top level Elm declaration",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elm.expose.top.level","elm.expose.top.level",3091507131),null], null), null));
lt.plugins.elm_light.__BEH__elm_unexpose_top_level = (function __BEH__elm_unexpose_top_level(ed){var path = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));var prj_path = lt.plugins.elm_light.utils.project_path.call(null,path);var module = lt.plugins.elm_light.elm_ast.get_module_ast.call(null,prj_path,path);var exposing = new cljs.core.Keyword(null,"exposing","exposing",3382854387).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"moduleDeclaration","moduleDeclaration",1240624864).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",1014001140).cljs$core$IFn$_invoke$arity$1(module)));var temp__4092__auto__ = lt.plugins.elm_light.elm_ast.find_top_level_declaration_by_pos.call(null,lt.objs.editor.__GT_cursor.call(null,ed),module);if(cljs.core.truth_(temp__4092__auto__))
{var decl = temp__4092__auto__;if((lt.plugins.elm_light.elm_ast.exposed_by_module_QMARK_.call(null,module,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(decl))) && (!(lt.plugins.elm_light.elm_ast.exposeAll_QMARK_.call(null,exposing))))
{var map__6638 = lt.plugins.elm_light.elm_ast.__GT_range.call(null,new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(exposing));var map__6638__$1 = ((cljs.core.seq_QMARK_.call(null,map__6638))?cljs.core.apply.call(null,cljs.core.hash_map,map__6638):map__6638);var end = cljs.core.get.call(null,map__6638__$1,new cljs.core.Keyword(null,"end","end",1014004813));var start = cljs.core.get.call(null,map__6638__$1,new cljs.core.Keyword(null,"start","start",1123661780));var upd_exp = lt.plugins.elm_light.elm_ast.unexpose_decl.call(null,decl,exposing);var bm = lt.objs.editor.bookmark.call(null,ed,lt.objs.editor.__GT_cursor.call(null,ed));lt.objs.editor.replace.call(null,ed,start,end,lt.plugins.elm_light.elm_ast.print_exposing.call(null,upd_exp));
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
lt.plugins.elm_light.test.deps__GT_named = (function deps__GT_named(deps){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__19035){var vec__19036 = p__19035;var k = cljs.core.nth.call(null,vec__19036,0,null);var v = cljs.core.nth.call(null,vec__19036,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.elm_light.utils.nskw__GT_name.call(null,k),v], null);
}),deps));
});
lt.plugins.elm_light.test.__GT_test_config = (function __GT_test_config(project_cfg){return cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.assoc.call(null,cljs.core.update_in.call(null,project_cfg,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-directories","source-directories",4475397259)], null),lt.plugins.elm_light.test.__GT_test_src_dirs),new cljs.core.Keyword(null,"exposed-modules","exposed-modules",4185867084),cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependencies","dependencies",1517678747)], null),(function (p1__19037_SHARP_){return cljs.core.merge.call(null,p1__19037_SHARP_,lt.plugins.elm_light.test.default_test_deps);
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
return (function (p1__19038_SHARP_){return cljs.core.println.call(null,[cljs.core.str("Test package install: "),cljs.core.str(p1__19038_SHARP_)].join(''));
});})(args,proc))
);
proc.stderr.on("data",((function (args,proc){
return (function (p1__19039_SHARP_){return lt.objs.console.error.call(null,[cljs.core.str(p1__19039_SHARP_)].join(''));
});})(args,proc))
);
proc.on("exit",((function (args,proc){
return (function (p1__19040_SHARP_){if(cljs.core._EQ_.call(null,p1__19040_SHARP_,0))
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
}catch (e12017){var e = e12017;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,e.message], null);
}});
/**
* Format file or all elm files in dir using elm-format.
* If successful returns [true nil]
* If errors returns [false err]
*/
lt.plugins.elm_light.format.format_path = (function format_path(cwd,path){try{require("child_process").execSync([cljs.core.str("elm-format --yes "),cljs.core.str(path)].join(''),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cwd","cwd",1014003170),cwd,new cljs.core.Keyword(null,"stdio","stdio",1123664379),"pipe"], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);
}catch (e12019){var e = e12019;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,e.message], null);
}});
lt.plugins.elm_light.format.handle_format_error = (function handle_format_error(err){lt.objs.notifos.set_msg_BANG_.call(null,"Elm format reported errors. See console for details",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),"error",new cljs.core.Keyword(null,"timeout","timeout",3994960083),5000], null));
return lt.objs.console.error.call(null,err);
});
lt.plugins.elm_light.format.__BEH__elm_format = (function __BEH__elm_format(ed){var temp__4092__auto__ = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));if(cljs.core.truth_(temp__4092__auto__))
{var path = temp__4092__auto__;var pos = lt.objs.editor.__GT_cursor.call(null,ed);var vec__12021 = lt.plugins.elm_light.format.format_path.call(null,lt.plugins.elm_light.utils.project_path.call(null,path),path);var ok_QMARK_ = cljs.core.nth.call(null,vec__12021,0,null);var res = cljs.core.nth.call(null,vec__12021,1,null);if(cljs.core.truth_(ok_QMARK_))
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
{var map__12024 = temp__4092__auto__;var map__12024__$1 = ((cljs.core.seq_QMARK_.call(null,map__12024))?cljs.core.apply.call(null,cljs.core.hash_map,map__12024):map__12024);var to = cljs.core.get.call(null,map__12024__$1,new cljs.core.Keyword(null,"to","to",1013907949));var from = cljs.core.get.call(null,map__12024__$1,new cljs.core.Keyword(null,"from","from",1017056028));var vec__12025 = lt.plugins.elm_light.format.format_input.call(null,cwd,lt.objs.editor.range.call(null,ed,from,to));var ok_QMARK_ = cljs.core.nth.call(null,vec__12025,0,null);var res = cljs.core.nth.call(null,vec__12025,1,null);if(cljs.core.truth_(ok_QMARK_))
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
lt.plugins.elm_light.format.__BEH__elm_format_buffer = (function __BEH__elm_format_buffer(ed){var pos = lt.objs.editor.__GT_cursor.call(null,ed);var vec__12027 = lt.plugins.elm_light.format.format_input.call(null,lt.plugins.elm_light.utils.project_path.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)))),lt.objs.editor.__GT_val.call(null,ed));var ok_QMARK_ = cljs.core.nth.call(null,vec__12027,0,null);var res = cljs.core.nth.call(null,vec__12027,1,null);if(cljs.core.truth_(ok_QMARK_))
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