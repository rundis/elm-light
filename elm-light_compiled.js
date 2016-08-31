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
lt.plugins.elm_light.elm_ast.upsert_ast_BANG_ = (function upsert_ast_BANG_(project,file_ast){var prj_idx = lt.plugins.elm_light.elm_ast.idx_of.call(null,(function (p1__11957_SHARP_){return cljs.core._EQ_.call(null,project,new cljs.core.Keyword(null,"project","project",704593547).cljs$core$IFn$_invoke$arity$1(p1__11957_SHARP_));
}),cljs.core.deref.call(null,lt.plugins.elm_light.elm_ast.project_asts));if(cljs.core.truth_(prj_idx))
{return cljs.core.swap_BANG_.call(null,lt.plugins.elm_light.elm_ast.project_asts,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prj_idx,new cljs.core.Keyword(null,"file-asts","file-asts",3945857876)], null),((function (prj_idx){
return (function (file_asts){return cljs.core.conj.call(null,cljs.core.filterv.call(null,((function (prj_idx){
return (function (p1__11958_SHARP_){return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"file","file",1017047278).cljs$core$IFn$_invoke$arity$1(file_ast),new cljs.core.Keyword(null,"file","file",1017047278).cljs$core$IFn$_invoke$arity$1(p1__11958_SHARP_));
});})(prj_idx))
,file_asts),file_ast);
});})(prj_idx))
);
} else
{return cljs.core.swap_BANG_.call(null,lt.plugins.elm_light.elm_ast.project_asts,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"project","project",704593547),project,new cljs.core.Keyword(null,"file-asts","file-asts",3945857876),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_ast], null)], null));
}
});
lt.plugins.elm_light.elm_ast.delete_ast_BANG_ = (function delete_ast_BANG_(project,file){var temp__4092__auto__ = lt.plugins.elm_light.elm_ast.idx_of.call(null,(function (p1__11959_SHARP_){return cljs.core._EQ_.call(null,project,new cljs.core.Keyword(null,"project","project",704593547).cljs$core$IFn$_invoke$arity$1(p1__11959_SHARP_));
}),cljs.core.deref.call(null,lt.plugins.elm_light.elm_ast.project_asts));if(cljs.core.truth_(temp__4092__auto__))
{var prj_idx = temp__4092__auto__;return cljs.core.swap_BANG_.call(null,lt.plugins.elm_light.elm_ast.project_asts,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prj_idx,new cljs.core.Keyword(null,"file-asts","file-asts",3945857876)], null),((function (prj_idx,temp__4092__auto__){
return (function (file_asts){return cljs.core.filterv.call(null,((function (prj_idx,temp__4092__auto__){
return (function (p1__11960_SHARP_){return cljs.core.not_EQ_.call(null,file,new cljs.core.Keyword(null,"file","file",1017047278).cljs$core$IFn$_invoke$arity$1(p1__11960_SHARP_));
});})(prj_idx,temp__4092__auto__))
,file_asts);
});})(prj_idx,temp__4092__auto__))
);
} else
{return null;
}
});
lt.plugins.elm_light.elm_ast.delete_package_asts_BANG_ = (function delete_package_asts_BANG_(project){var temp__4092__auto__ = lt.plugins.elm_light.elm_ast.idx_of.call(null,(function (p1__11961_SHARP_){return cljs.core._EQ_.call(null,project,new cljs.core.Keyword(null,"project","project",704593547).cljs$core$IFn$_invoke$arity$1(p1__11961_SHARP_));
}),cljs.core.deref.call(null,lt.plugins.elm_light.elm_ast.project_asts));if(cljs.core.truth_(temp__4092__auto__))
{var prj_idx = temp__4092__auto__;return cljs.core.swap_BANG_.call(null,lt.plugins.elm_light.elm_ast.project_asts,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prj_idx,new cljs.core.Keyword(null,"file-asts","file-asts",3945857876)], null),((function (prj_idx,temp__4092__auto__){
return (function (file_asts){return cljs.core.vec.call(null,cljs.core.remove.call(null,new cljs.core.Keyword(null,"package","package",4501809080),file_asts));
});})(prj_idx,temp__4092__auto__))
);
} else
{return null;
}
});
lt.plugins.elm_light.elm_ast.delete_project_ast_BANG_ = (function delete_project_ast_BANG_(project){return cljs.core.swap_BANG_.call(null,lt.plugins.elm_light.elm_ast.project_asts,(function (prjs){return cljs.core.filterv.call(null,(function (p1__11962_SHARP_){return cljs.core.not_EQ_.call(null,project,new cljs.core.Keyword(null,"project","project",704593547).cljs$core$IFn$_invoke$arity$1(p1__11962_SHARP_));
}),prjs);
}));
});
lt.plugins.elm_light.elm_ast.reset_asts_BANG_ = (function reset_asts_BANG_(){return cljs.core.reset_BANG_.call(null,lt.plugins.elm_light.elm_ast.project_asts,cljs.core.PersistentVector.EMPTY);
});
lt.plugins.elm_light.elm_ast.get_project = (function get_project(project){return cljs.core.first.call(null,cljs.core.filterv.call(null,(function (p1__11963_SHARP_){return cljs.core._EQ_.call(null,project,new cljs.core.Keyword(null,"project","project",704593547).cljs$core$IFn$_invoke$arity$1(p1__11963_SHARP_));
}),cljs.core.deref.call(null,lt.plugins.elm_light.elm_ast.project_asts)));
});
lt.plugins.elm_light.elm_ast.get_module_ast = (function get_module_ast(project,module_file){var temp__4092__auto__ = lt.plugins.elm_light.elm_ast.get_project.call(null,project);if(cljs.core.truth_(temp__4092__auto__))
{var prj = temp__4092__auto__;return cljs.core.first.call(null,cljs.core.filterv.call(null,((function (prj,temp__4092__auto__){
return (function (p1__11964_SHARP_){return cljs.core._EQ_.call(null,module_file,new cljs.core.Keyword(null,"file","file",1017047278).cljs$core$IFn$_invoke$arity$1(p1__11964_SHARP_));
});})(prj,temp__4092__auto__))
,new cljs.core.Keyword(null,"file-asts","file-asts",3945857876).cljs$core$IFn$_invoke$arity$1(prj)));
} else
{return null;
}
});
lt.plugins.elm_light.elm_ast.get_module_by_name = (function get_module_by_name(project,module_name){var temp__4092__auto__ = lt.plugins.elm_light.elm_ast.get_project.call(null,project);if(cljs.core.truth_(temp__4092__auto__))
{var prj = temp__4092__auto__;return cljs.core.first.call(null,cljs.core.filterv.call(null,((function (prj,temp__4092__auto__){
return (function (p1__11965_SHARP_){return cljs.core._EQ_.call(null,module_name,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"moduleDeclaration","moduleDeclaration",1240624864).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",1014001140).cljs$core$IFn$_invoke$arity$1(p1__11965_SHARP_))));
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
lt.plugins.elm_light.elm_ast.enrich_module_declarations = (function enrich_module_declarations(module){return cljs.core.map.call(null,(function (p1__11966_SHARP_){return cljs.core.assoc.call(null,p1__11966_SHARP_,new cljs.core.Keyword(null,"exposed?","exposed?",3382850193),lt.plugins.elm_light.elm_ast.exposed_by_module_QMARK_.call(null,module,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p1__11966_SHARP_)),new cljs.core.Keyword(null,"file","file",1017047278),new cljs.core.Keyword(null,"file","file",1017047278).cljs$core$IFn$_invoke$arity$1(module),new cljs.core.Keyword(null,"module-name","module-name",4067691710),new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"moduleDeclaration","moduleDeclaration",1240624864).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",1014001140).cljs$core$IFn$_invoke$arity$1(module))),new cljs.core.Keyword(null,"package","package",4501809080),new cljs.core.Keyword(null,"package","package",4501809080).cljs$core$IFn$_invoke$arity$1(module));
}),new cljs.core.Keyword(null,"declarations","declarations",2554736043).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",1014001140).cljs$core$IFn$_invoke$arity$1(module)));
});
lt.plugins.elm_light.elm_ast.get_exposed_declarations = (function get_exposed_declarations(module){return cljs.core.filter.call(null,new cljs.core.Keyword(null,"exposed?","exposed?",3382850193),lt.plugins.elm_light.elm_ast.enrich_module_declarations.call(null,module));
});
lt.plugins.elm_light.elm_ast.get_import_candidate_tokens = (function get_import_candidate_tokens(import_def,exposed_declaration){return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(import_def)),cljs.core.str("."),cljs.core.str(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(exposed_declaration))].join(''),(function (){var temp__4092__auto__ = new cljs.core.Keyword(null,"alias","alias",1106807234).cljs$core$IFn$_invoke$arity$1(import_def);if(cljs.core.truth_(temp__4092__auto__))
{var alias = temp__4092__auto__;return [cljs.core.str(alias),cljs.core.str("."),cljs.core.str(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(exposed_declaration))].join('');
} else
{return null;
}
})(),(((lt.plugins.elm_light.elm_ast.exposeAll_QMARK_.call(null,new cljs.core.Keyword(null,"exposing","exposing",3382854387).cljs$core$IFn$_invoke$arity$1(import_def))) || (cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__11967_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(exposed_declaration),new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p1__11967_SHARP_));
}),new cljs.core.Keyword(null,"exposing","exposing",3382854387).cljs$core$IFn$_invoke$arity$1(import_def)))))?new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(exposed_declaration):null)], null)));
});
lt.plugins.elm_light.elm_ast.get_external_candidates = (function get_external_candidates(module,modules){var imports = new cljs.core.Keyword(null,"imports","imports",2939942112).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",1014001140).cljs$core$IFn$_invoke$arity$1(module));var imported_mod_names = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,new cljs.core.Keyword(null,"value","value",1125876963),imports));var external_exposed = cljs.core.mapcat.call(null,((function (imports,imported_mod_names){
return (function (p1__11969_SHARP_){return lt.plugins.elm_light.elm_ast.get_exposed_declarations.call(null,p1__11969_SHARP_);
});})(imports,imported_mod_names))
,cljs.core.filter.call(null,((function (imports,imported_mod_names){
return (function (p1__11968_SHARP_){return (cljs.core.not_EQ_.call(null,lt.plugins.elm_light.elm_ast.get_module_name.call(null,module),lt.plugins.elm_light.elm_ast.get_module_name.call(null,p1__11968_SHARP_))) && (cljs.core.contains_QMARK_.call(null,imported_mod_names,lt.plugins.elm_light.elm_ast.get_module_name.call(null,p1__11968_SHARP_)));
});})(imports,imported_mod_names))
,modules));return cljs.core.mapcat.call(null,((function (imports,imported_mod_names,external_exposed){
return (function (imp){return cljs.core.map.call(null,((function (imports,imported_mod_names,external_exposed){
return (function (p1__11971_SHARP_){return cljs.core.assoc.call(null,p1__11971_SHARP_,new cljs.core.Keyword(null,"candidate-tokens","candidate-tokens",3775833238),lt.plugins.elm_light.elm_ast.get_import_candidate_tokens.call(null,imp,p1__11971_SHARP_));
});})(imports,imported_mod_names,external_exposed))
,cljs.core.filter.call(null,((function (imports,imported_mod_names,external_exposed){
return (function (p1__11970_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(imp),new cljs.core.Keyword(null,"module-name","module-name",4067691710).cljs$core$IFn$_invoke$arity$1(p1__11970_SHARP_));
});})(imports,imported_mod_names,external_exposed))
,external_exposed));
});})(imports,imported_mod_names,external_exposed))
,imports);
});
/**
* Get candidates for Elm default imports as per
* https://github.com/elm-lang/core
*/
lt.plugins.elm_light.elm_ast.get_default_candidates = (function get_default_candidates(modules){return cljs.core.concat.call(null,cljs.core.map.call(null,(function (p1__11973_SHARP_){return cljs.core.assoc.call(null,p1__11973_SHARP_,new cljs.core.Keyword(null,"candidate-tokens","candidate-tokens",3775833238),cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p1__11973_SHARP_)], true));
}),cljs.core.mapcat.call(null,lt.plugins.elm_light.elm_ast.get_exposed_declarations,cljs.core.filterv.call(null,(function (p1__11972_SHARP_){return cljs.core._EQ_.call(null,"Basics",new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"moduleDeclaration","moduleDeclaration",1240624864).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",1014001140).cljs$core$IFn$_invoke$arity$1(p1__11972_SHARP_))));
}),modules))),cljs.core.map.call(null,(function (p1__11975_SHARP_){return cljs.core.assoc.call(null,p1__11975_SHARP_,new cljs.core.Keyword(null,"candidate-tokens","candidate-tokens",3775833238),cljs.core.PersistentHashSet.fromArray([[cljs.core.str("Debug."),cljs.core.str(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p1__11975_SHARP_))].join('')], true));
}),cljs.core.mapcat.call(null,lt.plugins.elm_light.elm_ast.get_exposed_declarations,cljs.core.filterv.call(null,(function (p1__11974_SHARP_){return cljs.core._EQ_.call(null,"Debug",new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"moduleDeclaration","moduleDeclaration",1240624864).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",1014001140).cljs$core$IFn$_invoke$arity$1(p1__11974_SHARP_))));
}),modules))),cljs.core.map.call(null,(function (p1__11977_SHARP_){return cljs.core.assoc.call(null,p1__11977_SHARP_,new cljs.core.Keyword(null,"candidate-tokens","candidate-tokens",3775833238),cljs.core.PersistentHashSet.fromArray([[cljs.core.str("Maybe."),cljs.core.str(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p1__11977_SHARP_))].join('')], true));
}),cljs.core.mapcat.call(null,lt.plugins.elm_light.elm_ast.get_exposed_declarations,cljs.core.filterv.call(null,(function (p1__11976_SHARP_){return cljs.core._EQ_.call(null,"Maybe",new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"moduleDeclaration","moduleDeclaration",1240624864).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",1014001140).cljs$core$IFn$_invoke$arity$1(p1__11976_SHARP_))));
}),modules))),cljs.core.map.call(null,(function (p1__11979_SHARP_){return cljs.core.assoc.call(null,p1__11979_SHARP_,new cljs.core.Keyword(null,"candidate-tokens","candidate-tokens",3775833238),cljs.core.PersistentHashSet.fromArray([[cljs.core.str("Result."),cljs.core.str(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p1__11979_SHARP_))].join('')], true));
}),cljs.core.mapcat.call(null,lt.plugins.elm_light.elm_ast.get_exposed_declarations,cljs.core.filterv.call(null,(function (p1__11978_SHARP_){return cljs.core._EQ_.call(null,"Result",new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"moduleDeclaration","moduleDeclaration",1240624864).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",1014001140).cljs$core$IFn$_invoke$arity$1(p1__11978_SHARP_))));
}),modules))),cljs.core.map.call(null,(function (p1__11981_SHARP_){return cljs.core.assoc.call(null,p1__11981_SHARP_,new cljs.core.Keyword(null,"candidate-tokens","candidate-tokens",3775833238),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p1__11981_SHARP_),"Program"))?new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["Program",null], null), null):cljs.core.PersistentHashSet.fromArray([[cljs.core.str("Platform."),cljs.core.str(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p1__11981_SHARP_))].join('')], true)));
}),cljs.core.mapcat.call(null,lt.plugins.elm_light.elm_ast.get_exposed_declarations,cljs.core.filterv.call(null,(function (p1__11980_SHARP_){return cljs.core._EQ_.call(null,"Platform",new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"moduleDeclaration","moduleDeclaration",1240624864).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",1014001140).cljs$core$IFn$_invoke$arity$1(p1__11980_SHARP_))));
}),modules))),cljs.core.map.call(null,(function (p1__11983_SHARP_){return cljs.core.assoc.call(null,p1__11983_SHARP_,new cljs.core.Keyword(null,"candidate-tokens","candidate-tokens",3775833238),(function (){var G__11989 = new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p1__11983_SHARP_);if(cljs.core._EQ_.call(null,"!",G__11989))
{return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["!",null], null), null);
} else
{if(cljs.core._EQ_.call(null,"Cmd",G__11989))
{return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["Cmd",null], null), null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.PersistentHashSet.fromArray([[cljs.core.str("Platform.Cmd"),cljs.core.str(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p1__11983_SHARP_))].join('')], true);
} else
{return null;
}
}
}
})());
}),cljs.core.mapcat.call(null,lt.plugins.elm_light.elm_ast.get_exposed_declarations,cljs.core.filterv.call(null,(function (p1__11982_SHARP_){return cljs.core._EQ_.call(null,"Platform.Cmd",new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"moduleDeclaration","moduleDeclaration",1240624864).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",1014001140).cljs$core$IFn$_invoke$arity$1(p1__11982_SHARP_))));
}),modules))),cljs.core.map.call(null,(function (p1__11985_SHARP_){return cljs.core.assoc.call(null,p1__11985_SHARP_,new cljs.core.Keyword(null,"candidate-tokens","candidate-tokens",3775833238),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p1__11985_SHARP_),"Sub"))?new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["Sub",null], null), null):cljs.core.PersistentHashSet.fromArray([[cljs.core.str("Platform.Sub."),cljs.core.str(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p1__11985_SHARP_))].join('')], true)));
}),cljs.core.mapcat.call(null,lt.plugins.elm_light.elm_ast.get_exposed_declarations,cljs.core.filterv.call(null,(function (p1__11984_SHARP_){return cljs.core._EQ_.call(null,"Platform.Sub",new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"moduleDeclaration","moduleDeclaration",1240624864).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",1014001140).cljs$core$IFn$_invoke$arity$1(p1__11984_SHARP_))));
}),modules))),cljs.core.map.call(null,(function (p1__11987_SHARP_){return cljs.core.assoc.call(null,p1__11987_SHARP_,new cljs.core.Keyword(null,"candidate-tokens","candidate-tokens",3775833238),((cljs.core._EQ_.call(null,"::",new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p1__11987_SHARP_)))?new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["::",null], null), null):cljs.core.PersistentHashSet.fromArray([[cljs.core.str("List."),cljs.core.str(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p1__11987_SHARP_))].join('')], true)));
}),cljs.core.mapcat.call(null,lt.plugins.elm_light.elm_ast.get_exposed_declarations,cljs.core.filterv.call(null,(function (p1__11986_SHARP_){return cljs.core._EQ_.call(null,"List",new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"moduleDeclaration","moduleDeclaration",1240624864).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",1014001140).cljs$core$IFn$_invoke$arity$1(p1__11986_SHARP_))));
}),modules))));
});
lt.plugins.elm_light.elm_ast.get_current_module_candidates = (function get_current_module_candidates(module){return cljs.core.map.call(null,(function (p1__11990_SHARP_){return cljs.core.assoc.call(null,p1__11990_SHARP_,new cljs.core.Keyword(null,"candidate-tokens","candidate-tokens",3775833238),cljs.core.PersistentHashSet.fromArray([[cljs.core.str(lt.plugins.elm_light.elm_ast.get_module_name.call(null,module)),cljs.core.str("."),cljs.core.str(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p1__11990_SHARP_))].join(''),new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p1__11990_SHARP_)], true));
}),lt.plugins.elm_light.elm_ast.enrich_module_declarations.call(null,module));
});
lt.plugins.elm_light.elm_ast.get_jump_to_candidates = (function get_jump_to_candidates(module,modules){return cljs.core.concat.call(null,lt.plugins.elm_light.elm_ast.get_current_module_candidates.call(null,module),lt.plugins.elm_light.elm_ast.get_external_candidates.call(null,module,modules),lt.plugins.elm_light.elm_ast.get_default_candidates.call(null,modules));
});
lt.plugins.elm_light.elm_ast.get_candidate_by_token = (function get_candidate_by_token(token,module,modules){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__11991_SHARP_){return cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"candidate-tokens","candidate-tokens",3775833238).cljs$core$IFn$_invoke$arity$1(p1__11991_SHARP_),token);
}),lt.plugins.elm_light.elm_ast.get_jump_to_candidates.call(null,module,modules)));
});
lt.plugins.elm_light.elm_ast.__GT_pos = (function __GT_pos(ast_pos){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(ast_pos) - 1),new cljs.core.Keyword(null,"ch","ch",1013907415),(new cljs.core.Keyword(null,"column","column",3954034376).cljs$core$IFn$_invoke$arity$1(ast_pos) - 1)], null);
});
lt.plugins.elm_light.elm_ast.__GT_range = (function __GT_range(location){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",1123661780),lt.plugins.elm_light.elm_ast.__GT_pos.call(null,new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(location)),new cljs.core.Keyword(null,"end","end",1014004813),lt.plugins.elm_light.elm_ast.__GT_pos.call(null,new cljs.core.Keyword(null,"end","end",1014004813).cljs$core$IFn$_invoke$arity$1(location))], null);
});
lt.plugins.elm_light.elm_ast.in_range_QMARK_ = (function in_range_QMARK_(p__11992,decl){var map__11995 = p__11992;var map__11995__$1 = ((cljs.core.seq_QMARK_.call(null,map__11995))?cljs.core.apply.call(null,cljs.core.hash_map,map__11995):map__11995);var line = cljs.core.get.call(null,map__11995__$1,new cljs.core.Keyword(null,"line","line",1017226086));var ch = cljs.core.get.call(null,map__11995__$1,new cljs.core.Keyword(null,"ch","ch",1013907415));var map__11996 = lt.plugins.elm_light.elm_ast.__GT_range.call(null,new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(decl));var map__11996__$1 = ((cljs.core.seq_QMARK_.call(null,map__11996))?cljs.core.apply.call(null,cljs.core.hash_map,map__11996):map__11996);var end = cljs.core.get.call(null,map__11996__$1,new cljs.core.Keyword(null,"end","end",1014004813));var start = cljs.core.get.call(null,map__11996__$1,new cljs.core.Keyword(null,"start","start",1123661780));if(((line < new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(start))) || ((line > new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(end))))
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
var find_top_level_declaration_by_pos__2 = (function (pos,module){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__11997_SHARP_){return lt.plugins.elm_light.elm_ast.in_range_QMARK_.call(null,pos,p1__11997_SHARP_);
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
lt.plugins.elm_light.elm_ast.get_hints = (function get_hints(p__11999,module_file,project_dir){var map__12001 = p__11999;var map__12001__$1 = ((cljs.core.seq_QMARK_.call(null,map__12001))?cljs.core.apply.call(null,cljs.core.hash_map,map__12001):map__12001);var token = cljs.core.get.call(null,map__12001__$1,new cljs.core.Keyword(null,"token","token",1124445547));var temp__4092__auto__ = lt.plugins.elm_light.elm_ast.get_module_ast.call(null,project_dir,module_file);if(cljs.core.truth_(temp__4092__auto__))
{var module = temp__4092__auto__;return cljs.core.sort_by.call(null,cljs.core.juxt.call(null,((function (module,temp__4092__auto__,map__12001,map__12001__$1,token){
return (function (x){return new cljs.core.Keyword(null,"completion","completion",4767668046).cljs$core$IFn$_invoke$arity$1(x).lastIndexOf(".");
});})(module,temp__4092__auto__,map__12001,map__12001__$1,token))
,new cljs.core.Keyword(null,"completion","completion",4767668046)),cljs.core.filter.call(null,((function (module,temp__4092__auto__,map__12001,map__12001__$1,token){
return (function (p1__11998_SHARP_){return cljs.core._EQ_.call(null,0,new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(p1__11998_SHARP_).indexOf(token));
});})(module,temp__4092__auto__,map__12001,map__12001__$1,token))
,cljs.core.mapcat.call(null,cljs.core.partial.call(null,lt.plugins.elm_light.elm_ast.to_hint,lt.plugins.elm_light.elm_ast.get_module_name.call(null,module)),lt.plugins.elm_light.elm_ast.get_jump_to_candidates.call(null,module,new cljs.core.Keyword(null,"file-asts","file-asts",3945857876).cljs$core$IFn$_invoke$arity$1(lt.plugins.elm_light.elm_ast.get_project.call(null,project_dir))))));
} else
{return null;
}
});
lt.plugins.elm_light.elm_ast.search_docs = (function search_docs(sym,project_dir){var qualified_name = (function (p1__12002_SHARP_){return [cljs.core.str(new cljs.core.Keyword(null,"module-name","module-name",4067691710).cljs$core$IFn$_invoke$arity$1(p1__12002_SHARP_)),cljs.core.str("."),cljs.core.str(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p1__12002_SHARP_))].join('');
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
lt.plugins.elm_light.elm_ast.print_exposing = (function print_exposing(p__12003){var map__12005 = p__12003;var map__12005__$1 = ((cljs.core.seq_QMARK_.call(null,map__12005))?cljs.core.apply.call(null,cljs.core.hash_map,map__12005):map__12005);var exposing = map__12005__$1;var exports = cljs.core.get.call(null,map__12005__$1,new cljs.core.Keyword(null,"exports","exports",3999815345));if(cljs.core.not.call(null,cljs.core.seq.call(null,exports)))
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
return (function (exports){return cljs.core.conj.call(null,exports,(function (){var G__12007 = new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(decl);if(cljs.core._EQ_.call(null,"binOpDef",G__12007))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"binOpRef",new cljs.core.Keyword(null,"value","value",1125876963),value], null);
} else
{if(cljs.core._EQ_.call(null,"typeDecl",G__12007))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"adt",new cljs.core.Keyword(null,"value","value",1125876963),value], null);
} else
{if(cljs.core._EQ_.call(null,"typeAliasDecl",G__12007))
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
return (function (p1__12008_SHARP_){return cljs.core._EQ_.call(null,value,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p1__12008_SHARP_));
});})(value))
,exports);
});})(value))
);
});
lt.plugins.elm_light.elm_ast.status_class = (function status_class(p__12009){var map__12012 = p__12009;var map__12012__$1 = ((cljs.core.seq_QMARK_.call(null,map__12012))?cljs.core.apply.call(null,cljs.core.hash_map,map__12012):map__12012);var status = cljs.core.get.call(null,map__12012__$1,new cljs.core.Keyword(null,"status","status",4416389988));var G__12013 = status;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",1013907790),G__12013))
{return "ok";
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",1110689146),G__12013))
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
lt.plugins.elm_light.elm_ast.status_text = (function status_text(p__12014){var map__12017 = p__12014;var map__12017__$1 = ((cljs.core.seq_QMARK_.call(null,map__12017))?cljs.core.apply.call(null,cljs.core.hash_map,map__12017):map__12017);var error = cljs.core.get.call(null,map__12017__$1,new cljs.core.Keyword(null,"error","error",1110689146));var status = cljs.core.get.call(null,map__12017__$1,new cljs.core.Keyword(null,"status","status",4416389988));return [cljs.core.str("AST: "),cljs.core.str((function (){var G__12018 = status;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",1110689146),G__12018))
{return "Error";
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",1013907790),G__12018))
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
lt.plugins.elm_light.elm_ast.__GT_status_ui = (function __GT_status_ui(p__12019){var map__12021 = p__12019;var map__12021__$1 = ((cljs.core.seq_QMARK_.call(null,map__12021))?cljs.core.apply.call(null,cljs.core.hash_map,map__12021):map__12021);var ast_summary = cljs.core.get.call(null,map__12021__$1,new cljs.core.Keyword(null,"ast-summary","ast-summary",1727157965));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("ast-status "),cljs.core.str(lt.plugins.elm_light.elm_ast.status_class.call(null,ast_summary))].join('')], null),lt.plugins.elm_light.elm_ast.status_text.call(null,ast_summary)], null);
});
lt.plugins.elm_light.elm_ast.__BEH__update_ast_status = (function __BEH__update_ast_status(this$,f){return lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast-summary","ast-summary",1727157965)], null),f);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.elm-ast","update-ast-status","lt.plugins.elm-light.elm-ast/update-ast-status",2519133077),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.elm_ast.__BEH__update_ast_status,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"update!","update!",779473898),null], null), null));
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.elm-ast","statusbar.ast-status","lt.plugins.elm-light.elm-ast/statusbar.ast-status",1374391534),new cljs.core.Keyword(null,"triggers","triggers",2516997421),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.elm-light.elm-ast","update-ast-status","lt.plugins.elm-light.elm-ast/update-ast-status",2519133077),null], null), null),new cljs.core.Keyword(null,"ast-summary","ast-summary",1727157965),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",4416389988),""], null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return lt.objs.statusbar.statusbar_item.call(null,crate.binding.bound.call(null,this$,lt.plugins.elm_light.elm_ast.__GT_status_ui),"");
}));
lt.plugins.elm_light.elm_ast.statusbar_ast_summary = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.elm-light.elm-ast","statusbar.ast-status","lt.plugins.elm-light.elm-ast/statusbar.ast-status",1374391534));
lt.objs.statusbar.add_statusbar_item.call(null,lt.plugins.elm_light.elm_ast.statusbar_ast_summary);
lt.plugins.elm_light.elm_ast.update_status_for_editor = (function update_status_for_editor(ed){var map__12024 = new cljs.core.Keyword(null,"ast-status","ast-status",2421112079).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed));var map__12024__$1 = ((cljs.core.seq_QMARK_.call(null,map__12024))?cljs.core.apply.call(null,cljs.core.hash_map,map__12024):map__12024);var error = cljs.core.get.call(null,map__12024__$1,new cljs.core.Keyword(null,"error","error",1110689146));var status = cljs.core.get.call(null,map__12024__$1,new cljs.core.Keyword(null,"status","status",4416389988));return lt.object.raise.call(null,lt.plugins.elm_light.elm_ast.statusbar_ast_summary,new cljs.core.Keyword(null,"update!","update!",779473898),((function (map__12024,map__12024__$1,error,status){
return (function (p1__12022_SHARP_){return cljs.core.assoc.call(null,p1__12022_SHARP_,new cljs.core.Keyword(null,"status","status",4416389988),status,new cljs.core.Keyword(null,"error","error",1110689146),error);
});})(map__12024,map__12024__$1,error,status))
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
lt.plugins.elm_light.utils.find_symbol = (function find_symbol(ed,pos){var curr_tok = lt.objs.editor.__GT_token.call(null,ed,pos);var G__19043 = new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(curr_tok);if(cljs.core._EQ_.call(null,"builtin",G__19043))
{return [cljs.core.str(find_symbol.call(null,ed,cljs.core.assoc.call(null,pos,new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(curr_tok)))),cljs.core.str(new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(curr_tok))].join('');
} else
{if(cljs.core._EQ_.call(null,"variable-3",G__19043))
{return [cljs.core.str(find_symbol.call(null,ed,cljs.core.assoc.call(null,pos,new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(curr_tok)))),cljs.core.str(new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(curr_tok))].join('');
} else
{if(cljs.core._EQ_.call(null,"variable-2",G__19043))
{return [cljs.core.str(find_symbol.call(null,ed,cljs.core.assoc.call(null,pos,new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(curr_tok)))),cljs.core.str(new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(curr_tok))].join('');
} else
{if(cljs.core._EQ_.call(null,"variable",G__19043))
{return [cljs.core.str(find_symbol.call(null,ed,cljs.core.assoc.call(null,pos,new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(curr_tok)))),cljs.core.str(new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(curr_tok))].join('');
} else
{if(cljs.core._EQ_.call(null,"qualifier",G__19043))
{return [cljs.core.str(find_symbol.call(null,ed,cljs.core.assoc.call(null,pos,new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(curr_tok)))),cljs.core.str(new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(curr_tok))].join('');
} else
{if(cljs.core._EQ_.call(null,"def",G__19043))
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
return (function (p__19050){var vec__19051 = p__19050;var _ = cljs.core.nth.call(null,vec__19051,0,null);var vs = cljs.core.nth.call(null,vec__19051,1,null);return cljs.core.apply.call(null,cljs.core.merge,vs);
});})(pkg_json,deps_json))
,cljs.core.group_by.call(null,new cljs.core.Keyword(null,"package","package",4501809080),cljs.core.concat.call(null,cljs.core.mapv.call(null,((function (pkg_json,deps_json){
return (function (p__19052){var vec__19053 = p__19052;var k = cljs.core.nth.call(null,vec__19053,0,null);var v = cljs.core.nth.call(null,vec__19053,1,null);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"package","package",4501809080),lt.plugins.elm_light.utils.nskw__GT_name.call(null,k),new cljs.core.Keyword(null,"exact","exact",1110851185),v], null);
});})(pkg_json,deps_json))
,lt.plugins.elm_light.utils.parse_json_file.call(null,deps_json)),cljs.core.mapv.call(null,((function (pkg_json,deps_json){
return (function (p__19054){var vec__19055 = p__19054;var k = cljs.core.nth.call(null,vec__19055,0,null);var v = cljs.core.nth.call(null,vec__19055,1,null);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"package","package",4501809080),lt.plugins.elm_light.utils.nskw__GT_name.call(null,k),new cljs.core.Keyword(null,"range","range",1122184367),v], null);
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
lt.plugins.elm_light.gutter.gutter_marker_exposed = (function gutter_marker_exposed(){var e__6289__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.elm-gutter-marker","div.elm-gutter-marker",2892074906),"@"], null));var seq__12214_12244 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__12215_12245 = null;var count__12216_12246 = 0;var i__12217_12247 = 0;while(true){
if((i__12217_12247 < count__12216_12246))
{var vec__12218_12248 = cljs.core._nth.call(null,chunk__12215_12245,i__12217_12247);var ev__6290__auto___12249 = cljs.core.nth.call(null,vec__12218_12248,0,null);var func__6291__auto___12250 = cljs.core.nth.call(null,vec__12218_12248,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___12249,func__6291__auto___12250);
{
var G__12251 = seq__12214_12244;
var G__12252 = chunk__12215_12245;
var G__12253 = count__12216_12246;
var G__12254 = (i__12217_12247 + 1);
seq__12214_12244 = G__12251;
chunk__12215_12245 = G__12252;
count__12216_12246 = G__12253;
i__12217_12247 = G__12254;
continue;
}
} else
{var temp__4092__auto___12255 = cljs.core.seq.call(null,seq__12214_12244);if(temp__4092__auto___12255)
{var seq__12214_12256__$1 = temp__4092__auto___12255;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12214_12256__$1))
{var c__5632__auto___12257 = cljs.core.chunk_first.call(null,seq__12214_12256__$1);{
var G__12258 = cljs.core.chunk_rest.call(null,seq__12214_12256__$1);
var G__12259 = c__5632__auto___12257;
var G__12260 = cljs.core.count.call(null,c__5632__auto___12257);
var G__12261 = 0;
seq__12214_12244 = G__12258;
chunk__12215_12245 = G__12259;
count__12216_12246 = G__12260;
i__12217_12247 = G__12261;
continue;
}
} else
{var vec__12219_12262 = cljs.core.first.call(null,seq__12214_12256__$1);var ev__6290__auto___12263 = cljs.core.nth.call(null,vec__12219_12262,0,null);var func__6291__auto___12264 = cljs.core.nth.call(null,vec__12219_12262,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___12263,func__6291__auto___12264);
{
var G__12265 = cljs.core.next.call(null,seq__12214_12256__$1);
var G__12266 = null;
var G__12267 = 0;
var G__12268 = 0;
seq__12214_12244 = G__12265;
chunk__12215_12245 = G__12266;
count__12216_12246 = G__12267;
i__12217_12247 = G__12268;
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
lt.plugins.elm_light.gutter.__BEH__elm_gutter_exposeds = (function __BEH__elm_gutter_exposeds(ed){var cm_ed_12269 = lt.objs.editor.__GT_cm_ed.call(null,ed);var seq__12228_12270 = cljs.core.seq.call(null,cm_ed_12269.gutters);var chunk__12229_12271 = null;var count__12230_12272 = 0;var i__12231_12273 = 0;while(true){
if((i__12231_12273 < count__12230_12272))
{var gutter_12274 = cljs.core._nth.call(null,chunk__12229_12271,i__12231_12273);cljs.core.println.call(null,"gutter: ",gutter_12274);
{
var G__12275 = seq__12228_12270;
var G__12276 = chunk__12229_12271;
var G__12277 = count__12230_12272;
var G__12278 = (i__12231_12273 + 1);
seq__12228_12270 = G__12275;
chunk__12229_12271 = G__12276;
count__12230_12272 = G__12277;
i__12231_12273 = G__12278;
continue;
}
} else
{var temp__4092__auto___12279 = cljs.core.seq.call(null,seq__12228_12270);if(temp__4092__auto___12279)
{var seq__12228_12280__$1 = temp__4092__auto___12279;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12228_12280__$1))
{var c__5632__auto___12281 = cljs.core.chunk_first.call(null,seq__12228_12280__$1);{
var G__12282 = cljs.core.chunk_rest.call(null,seq__12228_12280__$1);
var G__12283 = c__5632__auto___12281;
var G__12284 = cljs.core.count.call(null,c__5632__auto___12281);
var G__12285 = 0;
seq__12228_12270 = G__12282;
chunk__12229_12271 = G__12283;
count__12230_12272 = G__12284;
i__12231_12273 = G__12285;
continue;
}
} else
{var gutter_12286 = cljs.core.first.call(null,seq__12228_12280__$1);cljs.core.println.call(null,"gutter: ",gutter_12286);
{
var G__12287 = cljs.core.next.call(null,seq__12228_12280__$1);
var G__12288 = null;
var G__12289 = 0;
var G__12290 = 0;
seq__12228_12270 = G__12287;
chunk__12229_12271 = G__12288;
count__12230_12272 = G__12289;
i__12231_12273 = G__12290;
continue;
}
}
} else
{}
}
break;
}
return lt.objs.editor.operation.call(null,lt.objs.editor.__GT_cm_ed.call(null,ed),(function (){lt.objs.editor.__GT_cm_ed.call(null,ed).clearGutter("elm-gutter");
var seq__12232 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"elm-exposeds-bookmarks","elm-exposeds-bookmarks",1216410620).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));var chunk__12233 = null;var count__12234 = 0;var i__12235 = 0;while(true){
if((i__12235 < count__12234))
{var bm = cljs.core._nth.call(null,chunk__12233,i__12235);var temp__4092__auto___12291 = cljs.core.js__GT_clj.call(null,bm.find(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true,new cljs.core.Keyword(null,"force-obj","force-obj",2540778119),true);if(cljs.core.truth_(temp__4092__auto___12291))
{var pos_12292 = temp__4092__auto___12291;var temp__4092__auto___12293__$1 = pos_12292.line;if(cljs.core.truth_(temp__4092__auto___12293__$1))
{var line_12294 = temp__4092__auto___12293__$1;lt.objs.editor.__GT_cm_ed.call(null,ed).setGutterMarker(line_12294,"elm-gutter",lt.plugins.elm_light.gutter.gutter_marker_exposed.call(null));
} else
{}
} else
{}
{
var G__12295 = seq__12232;
var G__12296 = chunk__12233;
var G__12297 = count__12234;
var G__12298 = (i__12235 + 1);
seq__12232 = G__12295;
chunk__12233 = G__12296;
count__12234 = G__12297;
i__12235 = G__12298;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12232);if(temp__4092__auto__)
{var seq__12232__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12232__$1))
{var c__5632__auto__ = cljs.core.chunk_first.call(null,seq__12232__$1);{
var G__12299 = cljs.core.chunk_rest.call(null,seq__12232__$1);
var G__12300 = c__5632__auto__;
var G__12301 = cljs.core.count.call(null,c__5632__auto__);
var G__12302 = 0;
seq__12232 = G__12299;
chunk__12233 = G__12300;
count__12234 = G__12301;
i__12235 = G__12302;
continue;
}
} else
{var bm = cljs.core.first.call(null,seq__12232__$1);var temp__4092__auto___12303__$1 = cljs.core.js__GT_clj.call(null,bm.find(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true,new cljs.core.Keyword(null,"force-obj","force-obj",2540778119),true);if(cljs.core.truth_(temp__4092__auto___12303__$1))
{var pos_12304 = temp__4092__auto___12303__$1;var temp__4092__auto___12305__$2 = pos_12304.line;if(cljs.core.truth_(temp__4092__auto___12305__$2))
{var line_12306 = temp__4092__auto___12305__$2;lt.objs.editor.__GT_cm_ed.call(null,ed).setGutterMarker(line_12306,"elm-gutter",lt.plugins.elm_light.gutter.gutter_marker_exposed.call(null));
} else
{}
} else
{}
{
var G__12307 = cljs.core.next.call(null,seq__12232__$1);
var G__12308 = null;
var G__12309 = 0;
var G__12310 = 0;
seq__12232 = G__12307;
chunk__12233 = G__12308;
count__12234 = G__12309;
i__12235 = G__12310;
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
lt.plugins.elm_light.gutter.__BEH__elm_gutter_exposeds_mark = (function __BEH__elm_gutter_exposeds_mark(ed){var path = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));var exposeds = lt.plugins.elm_light.elm_ast.get_gutter_exposeds.call(null,path,lt.plugins.elm_light.utils.project_path.call(null,path));var seq__12240_12311 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"elm-exposeds-bookmarks","elm-exposeds-bookmarks",1216410620).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));var chunk__12241_12312 = null;var count__12242_12313 = 0;var i__12243_12314 = 0;while(true){
if((i__12243_12314 < count__12242_12313))
{var bm_12315 = cljs.core._nth.call(null,chunk__12241_12312,i__12243_12314);bm_12315.clear();
{
var G__12316 = seq__12240_12311;
var G__12317 = chunk__12241_12312;
var G__12318 = count__12242_12313;
var G__12319 = (i__12243_12314 + 1);
seq__12240_12311 = G__12316;
chunk__12241_12312 = G__12317;
count__12242_12313 = G__12318;
i__12243_12314 = G__12319;
continue;
}
} else
{var temp__4092__auto___12320 = cljs.core.seq.call(null,seq__12240_12311);if(temp__4092__auto___12320)
{var seq__12240_12321__$1 = temp__4092__auto___12320;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12240_12321__$1))
{var c__5632__auto___12322 = cljs.core.chunk_first.call(null,seq__12240_12321__$1);{
var G__12323 = cljs.core.chunk_rest.call(null,seq__12240_12321__$1);
var G__12324 = c__5632__auto___12322;
var G__12325 = cljs.core.count.call(null,c__5632__auto___12322);
var G__12326 = 0;
seq__12240_12311 = G__12323;
chunk__12241_12312 = G__12324;
count__12242_12313 = G__12325;
i__12243_12314 = G__12326;
continue;
}
} else
{var bm_12327 = cljs.core.first.call(null,seq__12240_12321__$1);bm_12327.clear();
{
var G__12328 = cljs.core.next.call(null,seq__12240_12321__$1);
var G__12329 = null;
var G__12330 = 0;
var G__12331 = 0;
seq__12240_12311 = G__12328;
chunk__12241_12312 = G__12329;
count__12242_12313 = G__12330;
i__12243_12314 = G__12331;
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
cljs.core.async.impl.protocols.ReadPort = (function (){var obj18588 = {};return obj18588;
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
cljs.core.async.impl.protocols.WritePort = (function (){var obj18590 = {};return obj18590;
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
cljs.core.async.impl.protocols.Channel = (function (){var obj18592 = {};return obj18592;
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
cljs.core.async.impl.protocols.Handler = (function (){var obj18594 = {};return obj18594;
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
cljs.core.async.impl.protocols.Buffer = (function (){var obj18596 = {};return obj18596;
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
cljs.core.async.impl.protocols.UnblockingBuffer = (function (){var obj18598 = {};return obj18598;
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
var G__18553 = (cnt + 1);
cnt = G__18553;
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
{var v_18554 = this$.pop();if(keep_QMARK_.call(null,v_18554))
{this$.unshift(v_18554);
} else
{}
{
var G__18555 = (x + 1);
x = G__18555;
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
var count_18584 = 0;while(true){
var m_18585 = cljs.core.async.impl.dispatch.tasks.pop();if((m_18585 == null))
{} else
{m_18585.call(null);
if((count_18584 < cljs.core.async.impl.dispatch.TASK_BATCH_SIZE))
{{
var G__18586 = (count_18584 + 1);
count_18584 = G__18586;
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
cljs.core.async.impl.channels.box = (function box(val){if(typeof cljs.core.async.impl.channels.t18559 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.impl.channels.t18559 = (function (val,box,meta18560){
this.val = val;
this.box = box;
this.meta18560 = meta18560;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
cljs.core.async.impl.channels.t18559.cljs$lang$type = true;
cljs.core.async.impl.channels.t18559.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t18559";
cljs.core.async.impl.channels.t18559.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async.impl.channels/t18559");
});
cljs.core.async.impl.channels.t18559.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.val;
});
cljs.core.async.impl.channels.t18559.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18561){var self__ = this;
var _18561__$1 = this;return self__.meta18560;
});
cljs.core.async.impl.channels.t18559.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18561,meta18560__$1){var self__ = this;
var _18561__$1 = this;return (new cljs.core.async.impl.channels.t18559(self__.val,self__.box,meta18560__$1));
});
cljs.core.async.impl.channels.__GT_t18559 = (function __GT_t18559(val__$1,box__$1,meta18560){return (new cljs.core.async.impl.channels.t18559(val__$1,box__$1,meta18560));
});
}
return (new cljs.core.async.impl.channels.t18559(val,box,null));
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
var taker_18572 = self__.takes.pop();if((taker_18572 == null))
{} else
{if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker_18572))
{var take_cb_18573 = cljs.core.async.impl.protocols.commit.call(null,taker_18572);cljs.core.async.impl.dispatch.run.call(null,((function (take_cb_18573,taker_18572,this$__$1){
return (function (){return take_cb_18573.call(null,null);
});})(take_cb_18573,taker_18572,this$__$1))
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
var G__18619 = (level + 1);
level = G__18619;
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
var skip_list_node__3 = (function (k,v,level){var arr = (new Array((level + 1)));var i_18620 = 0;while(true){
if((i_18620 < arr.length))
{(arr[i_18620] = null);
{
var G__18621 = (i_18620 + 1);
i_18620 = G__18621;
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
var G__18622 = x_SINGLEQUOTE_;
x__$1 = G__18622;
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
var G__18623 = x__$1;
var G__18624 = k;
var G__18625 = (level - 1);
var G__18626 = update;
x = G__18623;
k = G__18624;
level = G__18625;
update = G__18626;
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
{var i_18627 = (self__.level + 1);while(true){
if((i_18627 <= (new_level + 1)))
{(update[i_18627] = self__.header);
{
var G__18628 = (i_18627 + 1);
i_18627 = G__18628;
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
{var i_18629 = 0;while(true){
if((i_18629 <= self__.level))
{var links_18630 = (update[i_18629]).forward;if(((links_18630[i_18629]) === x__$1))
{(links_18630[i_18629] = (x__$1.forward[i_18629]));
{
var G__18631 = (i_18629 + 1);
i_18629 = G__18631;
continue;
}
} else
{{
var G__18632 = (i_18629 + 1);
i_18629 = G__18632;
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
var G__18633 = x_SINGLEQUOTE_;
x__$1 = G__18633;
continue;
}
}
}
break;
}
})();if(!((nx == null)))
{{
var G__18634 = nx;
var G__18635 = (level__$1 - 1);
x = G__18634;
level__$1 = G__18635;
continue;
}
} else
{{
var G__18636 = x;
var G__18637 = (level__$1 - 1);
x = G__18636;
level__$1 = G__18637;
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
var G__18638 = x_SINGLEQUOTE_;
x__$1 = G__18638;
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
var G__18639 = nx;
var G__18640 = (level__$1 - 1);
x = G__18639;
level__$1 = G__18640;
continue;
}
} else
{{
var G__18641 = x;
var G__18642 = (level__$1 - 1);
x = G__18641;
level__$1 = G__18642;
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
cljs.core.async.impl.ioc_helpers.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.impl.ioc_helpers.t18483 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t18483 = (function (f,fn_handler,meta18484){
this.f = f;
this.fn_handler = fn_handler;
this.meta18484 = meta18484;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.impl.ioc_helpers.t18483.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.t18483.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t18483";
cljs.core.async.impl.ioc_helpers.t18483.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async.impl.ioc-helpers/t18483");
});
cljs.core.async.impl.ioc_helpers.t18483.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.impl.ioc_helpers.t18483.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.impl.ioc_helpers.t18483.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.impl.ioc_helpers.t18483.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18485){var self__ = this;
var _18485__$1 = this;return self__.meta18484;
});
cljs.core.async.impl.ioc_helpers.t18483.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18485,meta18484__$1){var self__ = this;
var _18485__$1 = this;return (new cljs.core.async.impl.ioc_helpers.t18483(self__.f,self__.fn_handler,meta18484__$1));
});
cljs.core.async.impl.ioc_helpers.__GT_t18483 = (function __GT_t18483(f__$1,fn_handler__$1,meta18484){return (new cljs.core.async.impl.ioc_helpers.t18483(f__$1,fn_handler__$1,meta18484));
});
}
return (new cljs.core.async.impl.ioc_helpers.t18483(f,fn_handler,null));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function run_state_machine(state){return cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function run_state_machine_wrapped(state){try{return cljs.core.async.impl.ioc_helpers.run_state_machine.call(null,state);
}catch (e18487){if((e18487 instanceof Object))
{var ex = e18487;cljs.core.async.impl.protocols.close_BANG_.call(null,cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.USER_START_IDX));
throw ex;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18487;
} else
{return null;
}
}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function take_BANG_(state,blk,c){var temp__4090__auto__ = cljs.core.async.impl.protocols.take_BANG_.call(null,c,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (x){var statearr_18490_18533 = state;(statearr_18490_18533[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);
(statearr_18490_18533[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
})));if(cljs.core.truth_(temp__4090__auto__))
{var cb = temp__4090__auto__;var statearr_18491_18534 = state;(statearr_18491_18534[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
(statearr_18491_18534[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function put_BANG_(state,blk,c,val){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,c,val,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (){var statearr_18494_18535 = state;(statearr_18494_18535[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = null);
(statearr_18494_18535[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
})));if(cljs.core.truth_(temp__4090__auto__))
{var cb = temp__4090__auto__;var statearr_18495_18536 = state;(statearr_18495_18536[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
(statearr_18495_18536[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__18496){var map__18501 = p__18496;var map__18501__$1 = ((cljs.core.seq_QMARK_.call(null,map__18501))?cljs.core.apply.call(null,cljs.core.hash_map,map__18501):map__18501);var opts = map__18501__$1;var statearr_18502_18537 = state;(statearr_18502_18537[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4092__auto__ = cljs.core.async.do_alts.call(null,((function (map__18501,map__18501__$1,opts){
return (function (val){var statearr_18503_18538 = state;(statearr_18503_18538[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__18501,map__18501__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4092__auto__))
{var cb = temp__4092__auto__;var statearr_18504_18539 = state;(statearr_18504_18539[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__18496 = null;if (arguments.length > 3) {
  p__18496 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__18496);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__18540){
var state = cljs.core.first(arglist__18540);
arglist__18540 = cljs.core.next(arglist__18540);
var cont_block = cljs.core.first(arglist__18540);
arglist__18540 = cljs.core.next(arglist__18540);
var ports = cljs.core.first(arglist__18540);
var p__18496 = cljs.core.rest(arglist__18540);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__18496);
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
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5472__auto__,k18506,else__5473__auto__){var self__ = this;
var this__5472__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k18506,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893)))
{return self__.catch_block;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k18506,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687)))
{return self__.catch_exception;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k18506,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429)))
{return self__.finally_block;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k18506,new cljs.core.Keyword(null,"continue-block","continue-block",1486987097)))
{return self__.continue_block;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k18506,new cljs.core.Keyword(null,"prev","prev",1017353637)))
{return self__.prev;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k18506,else__5473__auto__);
} else
{return null;
}
}
}
}
}
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__18505){var self__ = this;
var this__5477__auto____$1 = this;var pred__18508 = cljs.core.keyword_identical_QMARK_;var expr__18509 = k__5478__auto__;if(cljs.core.truth_(pred__18508.call(null,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),expr__18509)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__18505,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__18508.call(null,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),expr__18509)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__18505,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__18508.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),expr__18509)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__18505,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__18508.call(null,new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),expr__18509)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__18505,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__18508.call(null,new cljs.core.Keyword(null,"prev","prev",1017353637),expr__18509)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__18505,self__.__meta,self__.__extmap,null));
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5478__auto__,G__18505),null));
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
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5469__auto__,G__18505){var self__ = this;
var this__5469__auto____$1 = this;return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__18505,self__.__extmap,self__.__hash));
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
cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function map__GT_ExceptionFrame(G__18507){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(new cljs.core.Keyword(null,"catch-block","catch-block",2343862893).cljs$core$IFn$_invoke$arity$1(G__18507),new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687).cljs$core$IFn$_invoke$arity$1(G__18507),new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(G__18507),new cljs.core.Keyword(null,"continue-block","continue-block",1486987097).cljs$core$IFn$_invoke$arity$1(G__18507),new cljs.core.Keyword(null,"prev","prev",1017353637).cljs$core$IFn$_invoke$arity$1(G__18507),null,cljs.core.dissoc.call(null,G__18507,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),new cljs.core.Keyword(null,"prev","prev",1017353637))));
});
cljs.core.async.impl.ioc_helpers.add_exception_frame = (function add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){var statearr_18512 = state;(statearr_18512[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame.call(null,catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES)));
return statearr_18512;
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
{var statearr_18518 = state;(statearr_18518[cljs.core.async.impl.ioc_helpers.STATE_IDX] = catch_block);
(statearr_18518[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = exception);
(statearr_18518[cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION] = null);
(statearr_18518[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),null,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),null));
return statearr_18518;
} else
{if(cljs.core.truth_((function (){var and__4872__auto__ = exception;if(cljs.core.truth_(and__4872__auto__))
{return (cljs.core.not.call(null,catch_block)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else
{return and__4872__auto__;
}
})()))
{var statearr_18519_18541 = state;(statearr_18519_18541[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = new cljs.core.Keyword(null,"prev","prev",1017353637).cljs$core$IFn$_invoke$arity$1(exception_frame));
{
var G__18542 = state;
state = G__18542;
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
{var statearr_18520 = state;(statearr_18520[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_18520[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),null));
return statearr_18520;
} else
{if(cljs.core.truth_((function (){var and__4872__auto__ = cljs.core.not.call(null,exception);if(and__4872__auto__)
{return new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__4872__auto__;
}
})()))
{var statearr_18521 = state;(statearr_18521[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_18521[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),null));
return statearr_18521;
} else
{if((cljs.core.not.call(null,exception)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame))))
{var statearr_18522 = state;(statearr_18522[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"continue-block","continue-block",1486987097).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_18522[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = new cljs.core.Keyword(null,"prev","prev",1017353637).cljs$core$IFn$_invoke$arity$1(exception_frame));
return statearr_18522;
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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t15919 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15919 = (function (f,fn_handler,meta15920){
this.f = f;
this.fn_handler = fn_handler;
this.meta15920 = meta15920;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15919.cljs$lang$type = true;
cljs.core.async.t15919.cljs$lang$ctorStr = "cljs.core.async/t15919";
cljs.core.async.t15919.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async/t15919");
});
cljs.core.async.t15919.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15919.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t15919.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t15919.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15921){var self__ = this;
var _15921__$1 = this;return self__.meta15920;
});
cljs.core.async.t15919.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15921,meta15920__$1){var self__ = this;
var _15921__$1 = this;return (new cljs.core.async.t15919(self__.f,self__.fn_handler,meta15920__$1));
});
cljs.core.async.__GT_t15919 = (function __GT_t15919(f__$1,fn_handler__$1,meta15920){return (new cljs.core.async.t15919(f__$1,fn_handler__$1,meta15920));
});
}
return (new cljs.core.async.t15919(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__15923 = buff;if(G__15923)
{var bit__5534__auto__ = null;if(cljs.core.truth_((function (){var or__4884__auto__ = bit__5534__auto__;if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return G__15923.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__15923.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15923);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15923);
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
{var val_18187 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_18187);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_18187,ret){
return (function (){return fn1.call(null,val_18187);
});})(val_18187,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__5732__auto___18188 = n;var x_18189 = 0;while(true){
if((x_18189 < n__5732__auto___18188))
{(a[x_18189] = 0);
{
var G__18190 = (x_18189 + 1);
x_18189 = G__18190;
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
var G__18191 = (i + 1);
i = G__18191;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t15927 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15927 = (function (flag,alt_flag,meta15928){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta15928 = meta15928;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15927.cljs$lang$type = true;
cljs.core.async.t15927.cljs$lang$ctorStr = "cljs.core.async/t15927";
cljs.core.async.t15927.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async/t15927");
});})(flag))
;
cljs.core.async.t15927.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15927.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t15927.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t15927.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_15929){var self__ = this;
var _15929__$1 = this;return self__.meta15928;
});})(flag))
;
cljs.core.async.t15927.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_15929,meta15928__$1){var self__ = this;
var _15929__$1 = this;return (new cljs.core.async.t15927(self__.flag,self__.alt_flag,meta15928__$1));
});})(flag))
;
cljs.core.async.__GT_t15927 = ((function (flag){
return (function __GT_t15927(flag__$1,alt_flag__$1,meta15928){return (new cljs.core.async.t15927(flag__$1,alt_flag__$1,meta15928));
});})(flag))
;
}
return (new cljs.core.async.t15927(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t15933 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15933 = (function (cb,flag,alt_handler,meta15934){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta15934 = meta15934;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15933.cljs$lang$type = true;
cljs.core.async.t15933.cljs$lang$ctorStr = "cljs.core.async/t15933";
cljs.core.async.t15933.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async/t15933");
});
cljs.core.async.t15933.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15933.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t15933.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t15933.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15935){var self__ = this;
var _15935__$1 = this;return self__.meta15934;
});
cljs.core.async.t15933.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15935,meta15934__$1){var self__ = this;
var _15935__$1 = this;return (new cljs.core.async.t15933(self__.cb,self__.flag,self__.alt_handler,meta15934__$1));
});
cljs.core.async.__GT_t15933 = (function __GT_t15933(cb__$1,flag__$1,alt_handler__$1,meta15934){return (new cljs.core.async.t15933(cb__$1,flag__$1,alt_handler__$1,meta15934));
});
}
return (new cljs.core.async.t15933(cb,flag,alt_handler,null));
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
return (function (p1__15936_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15936_SHARP_,port], null));
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
var G__18192 = (i + 1);
i = G__18192;
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
var alts_BANG___delegate = function (ports,p__15937){var map__15939 = p__15937;var map__15939__$1 = ((cljs.core.seq_QMARK_.call(null,map__15939))?cljs.core.apply.call(null,cljs.core.hash_map,map__15939):map__15939);var opts = map__15939__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__15937 = null;if (arguments.length > 1) {
  p__15937 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__15937);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__18193){
var ports = cljs.core.first(arglist__18193);
var p__15937 = cljs.core.rest(arglist__18193);
return alts_BANG___delegate(ports,p__15937);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t15947 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15947 = (function (ch,f,map_LT_,meta15948){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
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
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t15947.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15947.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t15950 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15950 = (function (fn1,_,meta15948,ch,f,map_LT_,meta15951){
this.fn1 = fn1;
this._ = _;
this.meta15948 = meta15948;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta15951 = meta15951;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15950.cljs$lang$type = true;
cljs.core.async.t15950.cljs$lang$ctorStr = "cljs.core.async/t15950";
cljs.core.async.t15950.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async/t15950");
});})(___$1))
;
cljs.core.async.t15950.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15950.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t15950.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t15950.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__15940_SHARP_){return f1.call(null,(((p1__15940_SHARP_ == null))?null:self__.f.call(null,p1__15940_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t15950.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_15952){var self__ = this;
var _15952__$1 = this;return self__.meta15951;
});})(___$1))
;
cljs.core.async.t15950.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_15952,meta15951__$1){var self__ = this;
var _15952__$1 = this;return (new cljs.core.async.t15950(self__.fn1,self__._,self__.meta15948,self__.ch,self__.f,self__.map_LT_,meta15951__$1));
});})(___$1))
;
cljs.core.async.__GT_t15950 = ((function (___$1){
return (function __GT_t15950(fn1__$1,___$2,meta15948__$1,ch__$2,f__$2,map_LT___$2,meta15951){return (new cljs.core.async.t15950(fn1__$1,___$2,meta15948__$1,ch__$2,f__$2,map_LT___$2,meta15951));
});})(___$1))
;
}
return (new cljs.core.async.t15950(fn1,___$1,self__.meta15948,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t15947.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15947.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15947.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15949){var self__ = this;
var _15949__$1 = this;return self__.meta15948;
});
cljs.core.async.t15947.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15949,meta15948__$1){var self__ = this;
var _15949__$1 = this;return (new cljs.core.async.t15947(self__.ch,self__.f,self__.map_LT_,meta15948__$1));
});
cljs.core.async.__GT_t15947 = (function __GT_t15947(ch__$1,f__$1,map_LT___$1,meta15948){return (new cljs.core.async.t15947(ch__$1,f__$1,map_LT___$1,meta15948));
});
}
return (new cljs.core.async.t15947(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t15956 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15956 = (function (ch,f,map_GT_,meta15957){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta15957 = meta15957;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15956.cljs$lang$type = true;
cljs.core.async.t15956.cljs$lang$ctorStr = "cljs.core.async/t15956";
cljs.core.async.t15956.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async/t15956");
});
cljs.core.async.t15956.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15956.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t15956.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15956.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t15956.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15956.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15956.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15958){var self__ = this;
var _15958__$1 = this;return self__.meta15957;
});
cljs.core.async.t15956.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15958,meta15957__$1){var self__ = this;
var _15958__$1 = this;return (new cljs.core.async.t15956(self__.ch,self__.f,self__.map_GT_,meta15957__$1));
});
cljs.core.async.__GT_t15956 = (function __GT_t15956(ch__$1,f__$1,map_GT___$1,meta15957){return (new cljs.core.async.t15956(ch__$1,f__$1,map_GT___$1,meta15957));
});
}
return (new cljs.core.async.t15956(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t15962 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15962 = (function (ch,p,filter_GT_,meta15963){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta15963 = meta15963;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15962.cljs$lang$type = true;
cljs.core.async.t15962.cljs$lang$ctorStr = "cljs.core.async/t15962";
cljs.core.async.t15962.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async/t15962");
});
cljs.core.async.t15962.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15962.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t15962.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15962.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t15962.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15962.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15962.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15964){var self__ = this;
var _15964__$1 = this;return self__.meta15963;
});
cljs.core.async.t15962.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15964,meta15963__$1){var self__ = this;
var _15964__$1 = this;return (new cljs.core.async.t15962(self__.ch,self__.p,self__.filter_GT_,meta15963__$1));
});
cljs.core.async.__GT_t15962 = (function __GT_t15962(ch__$1,p__$1,filter_GT___$1,meta15963){return (new cljs.core.async.t15962(ch__$1,p__$1,filter_GT___$1,meta15963));
});
}
return (new cljs.core.async.t15962(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13601__auto___18194 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13601__auto___18194,out){
return (function (){var f__13602__auto__ = (function (){var switch__13531__auto__ = ((function (c__13601__auto___18194,out){
return (function (state_16026){var state_val_16027 = (state_16026[1]);if((state_val_16027 === 1))
{var state_16026__$1 = state_16026;var statearr_16028_18195 = state_16026__$1;(statearr_16028_18195[2] = null);
(statearr_16028_18195[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16027 === 2))
{var state_16026__$1 = state_16026;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16026__$1,4,ch);
} else
{if((state_val_16027 === 3))
{var inst_16024 = (state_16026[2]);var state_16026__$1 = state_16026;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16026__$1,inst_16024);
} else
{if((state_val_16027 === 4))
{var inst_16008 = (state_16026[7]);var inst_16008__$1 = (state_16026[2]);var inst_16009 = (inst_16008__$1 == null);var state_16026__$1 = (function (){var statearr_16029 = state_16026;(statearr_16029[7] = inst_16008__$1);
return statearr_16029;
})();if(cljs.core.truth_(inst_16009))
{var statearr_16030_18196 = state_16026__$1;(statearr_16030_18196[1] = 5);
} else
{var statearr_16031_18197 = state_16026__$1;(statearr_16031_18197[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16027 === 5))
{var inst_16011 = cljs.core.async.close_BANG_.call(null,out);var state_16026__$1 = state_16026;var statearr_16032_18198 = state_16026__$1;(statearr_16032_18198[2] = inst_16011);
(statearr_16032_18198[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16027 === 6))
{var inst_16008 = (state_16026[7]);var inst_16013 = p.call(null,inst_16008);var state_16026__$1 = state_16026;if(cljs.core.truth_(inst_16013))
{var statearr_16033_18199 = state_16026__$1;(statearr_16033_18199[1] = 8);
} else
{var statearr_16034_18200 = state_16026__$1;(statearr_16034_18200[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16027 === 7))
{var inst_16022 = (state_16026[2]);var state_16026__$1 = state_16026;var statearr_16035_18201 = state_16026__$1;(statearr_16035_18201[2] = inst_16022);
(statearr_16035_18201[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16027 === 8))
{var inst_16008 = (state_16026[7]);var state_16026__$1 = state_16026;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16026__$1,11,out,inst_16008);
} else
{if((state_val_16027 === 9))
{var state_16026__$1 = state_16026;var statearr_16036_18202 = state_16026__$1;(statearr_16036_18202[2] = null);
(statearr_16036_18202[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16027 === 10))
{var inst_16019 = (state_16026[2]);var state_16026__$1 = (function (){var statearr_16037 = state_16026;(statearr_16037[8] = inst_16019);
return statearr_16037;
})();var statearr_16038_18203 = state_16026__$1;(statearr_16038_18203[2] = null);
(statearr_16038_18203[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16027 === 11))
{var inst_16016 = (state_16026[2]);var state_16026__$1 = state_16026;var statearr_16039_18204 = state_16026__$1;(statearr_16039_18204[2] = inst_16016);
(statearr_16039_18204[1] = 10);
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
});})(c__13601__auto___18194,out))
;return ((function (switch__13531__auto__,c__13601__auto___18194,out){
return (function() {
var state_machine__13532__auto__ = null;
var state_machine__13532__auto____0 = (function (){var statearr_16043 = [null,null,null,null,null,null,null,null,null];(statearr_16043[0] = state_machine__13532__auto__);
(statearr_16043[1] = 1);
return statearr_16043;
});
var state_machine__13532__auto____1 = (function (state_16026){while(true){
var ret_value__13533__auto__ = (function (){try{while(true){
var result__13534__auto__ = switch__13531__auto__.call(null,state_16026);if(cljs.core.keyword_identical_QMARK_.call(null,result__13534__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13534__auto__;
}
break;
}
}catch (e16044){if((e16044 instanceof Object))
{var ex__13535__auto__ = e16044;var statearr_16045_18205 = state_16026;(statearr_16045_18205[5] = ex__13535__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16026);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16044;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13533__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18206 = state_16026;
state_16026 = G__18206;
continue;
}
} else
{return ret_value__13533__auto__;
}
break;
}
});
state_machine__13532__auto__ = function(state_16026){
switch(arguments.length){
case 0:
return state_machine__13532__auto____0.call(this);
case 1:
return state_machine__13532__auto____1.call(this,state_16026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13532__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13532__auto____0;
state_machine__13532__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13532__auto____1;
return state_machine__13532__auto__;
})()
;})(switch__13531__auto__,c__13601__auto___18194,out))
})();var state__13603__auto__ = (function (){var statearr_16046 = f__13602__auto__.call(null);(statearr_16046[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13601__auto___18194);
return statearr_16046;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13603__auto__);
});})(c__13601__auto___18194,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__13601__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13601__auto__){
return (function (){var f__13602__auto__ = (function (){var switch__13531__auto__ = ((function (c__13601__auto__){
return (function (state_16198){var state_val_16199 = (state_16198[1]);if((state_val_16199 === 1))
{var state_16198__$1 = state_16198;var statearr_16200_18207 = state_16198__$1;(statearr_16200_18207[2] = null);
(statearr_16200_18207[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16199 === 2))
{var state_16198__$1 = state_16198;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16198__$1,4,in$);
} else
{if((state_val_16199 === 3))
{var inst_16196 = (state_16198[2]);var state_16198__$1 = state_16198;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16198__$1,inst_16196);
} else
{if((state_val_16199 === 4))
{var inst_16144 = (state_16198[7]);var inst_16144__$1 = (state_16198[2]);var inst_16145 = (inst_16144__$1 == null);var state_16198__$1 = (function (){var statearr_16201 = state_16198;(statearr_16201[7] = inst_16144__$1);
return statearr_16201;
})();if(cljs.core.truth_(inst_16145))
{var statearr_16202_18208 = state_16198__$1;(statearr_16202_18208[1] = 5);
} else
{var statearr_16203_18209 = state_16198__$1;(statearr_16203_18209[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16199 === 5))
{var inst_16147 = cljs.core.async.close_BANG_.call(null,out);var state_16198__$1 = state_16198;var statearr_16204_18210 = state_16198__$1;(statearr_16204_18210[2] = inst_16147);
(statearr_16204_18210[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16199 === 6))
{var inst_16144 = (state_16198[7]);var inst_16149 = f.call(null,inst_16144);var inst_16154 = cljs.core.seq.call(null,inst_16149);var inst_16155 = inst_16154;var inst_16156 = null;var inst_16157 = 0;var inst_16158 = 0;var state_16198__$1 = (function (){var statearr_16205 = state_16198;(statearr_16205[8] = inst_16158);
(statearr_16205[9] = inst_16156);
(statearr_16205[10] = inst_16157);
(statearr_16205[11] = inst_16155);
return statearr_16205;
})();var statearr_16206_18211 = state_16198__$1;(statearr_16206_18211[2] = null);
(statearr_16206_18211[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16199 === 7))
{var inst_16194 = (state_16198[2]);var state_16198__$1 = state_16198;var statearr_16207_18212 = state_16198__$1;(statearr_16207_18212[2] = inst_16194);
(statearr_16207_18212[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16199 === 8))
{var inst_16158 = (state_16198[8]);var inst_16157 = (state_16198[10]);var inst_16160 = (inst_16158 < inst_16157);var inst_16161 = inst_16160;var state_16198__$1 = state_16198;if(cljs.core.truth_(inst_16161))
{var statearr_16208_18213 = state_16198__$1;(statearr_16208_18213[1] = 10);
} else
{var statearr_16209_18214 = state_16198__$1;(statearr_16209_18214[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16199 === 9))
{var inst_16191 = (state_16198[2]);var state_16198__$1 = (function (){var statearr_16210 = state_16198;(statearr_16210[12] = inst_16191);
return statearr_16210;
})();var statearr_16211_18215 = state_16198__$1;(statearr_16211_18215[2] = null);
(statearr_16211_18215[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16199 === 10))
{var inst_16158 = (state_16198[8]);var inst_16156 = (state_16198[9]);var inst_16163 = cljs.core._nth.call(null,inst_16156,inst_16158);var state_16198__$1 = state_16198;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16198__$1,13,out,inst_16163);
} else
{if((state_val_16199 === 11))
{var inst_16155 = (state_16198[11]);var inst_16169 = (state_16198[13]);var inst_16169__$1 = cljs.core.seq.call(null,inst_16155);var state_16198__$1 = (function (){var statearr_16215 = state_16198;(statearr_16215[13] = inst_16169__$1);
return statearr_16215;
})();if(inst_16169__$1)
{var statearr_16216_18216 = state_16198__$1;(statearr_16216_18216[1] = 14);
} else
{var statearr_16217_18217 = state_16198__$1;(statearr_16217_18217[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16199 === 12))
{var inst_16189 = (state_16198[2]);var state_16198__$1 = state_16198;var statearr_16218_18218 = state_16198__$1;(statearr_16218_18218[2] = inst_16189);
(statearr_16218_18218[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16199 === 13))
{var inst_16158 = (state_16198[8]);var inst_16156 = (state_16198[9]);var inst_16157 = (state_16198[10]);var inst_16155 = (state_16198[11]);var inst_16165 = (state_16198[2]);var inst_16166 = (inst_16158 + 1);var tmp16212 = inst_16156;var tmp16213 = inst_16157;var tmp16214 = inst_16155;var inst_16155__$1 = tmp16214;var inst_16156__$1 = tmp16212;var inst_16157__$1 = tmp16213;var inst_16158__$1 = inst_16166;var state_16198__$1 = (function (){var statearr_16219 = state_16198;(statearr_16219[8] = inst_16158__$1);
(statearr_16219[9] = inst_16156__$1);
(statearr_16219[10] = inst_16157__$1);
(statearr_16219[11] = inst_16155__$1);
(statearr_16219[14] = inst_16165);
return statearr_16219;
})();var statearr_16220_18219 = state_16198__$1;(statearr_16220_18219[2] = null);
(statearr_16220_18219[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16199 === 14))
{var inst_16169 = (state_16198[13]);var inst_16171 = cljs.core.chunked_seq_QMARK_.call(null,inst_16169);var state_16198__$1 = state_16198;if(inst_16171)
{var statearr_16221_18220 = state_16198__$1;(statearr_16221_18220[1] = 17);
} else
{var statearr_16222_18221 = state_16198__$1;(statearr_16222_18221[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16199 === 15))
{var state_16198__$1 = state_16198;var statearr_16223_18222 = state_16198__$1;(statearr_16223_18222[2] = null);
(statearr_16223_18222[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16199 === 16))
{var inst_16187 = (state_16198[2]);var state_16198__$1 = state_16198;var statearr_16224_18223 = state_16198__$1;(statearr_16224_18223[2] = inst_16187);
(statearr_16224_18223[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16199 === 17))
{var inst_16169 = (state_16198[13]);var inst_16173 = cljs.core.chunk_first.call(null,inst_16169);var inst_16174 = cljs.core.chunk_rest.call(null,inst_16169);var inst_16175 = cljs.core.count.call(null,inst_16173);var inst_16155 = inst_16174;var inst_16156 = inst_16173;var inst_16157 = inst_16175;var inst_16158 = 0;var state_16198__$1 = (function (){var statearr_16225 = state_16198;(statearr_16225[8] = inst_16158);
(statearr_16225[9] = inst_16156);
(statearr_16225[10] = inst_16157);
(statearr_16225[11] = inst_16155);
return statearr_16225;
})();var statearr_16226_18224 = state_16198__$1;(statearr_16226_18224[2] = null);
(statearr_16226_18224[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16199 === 18))
{var inst_16169 = (state_16198[13]);var inst_16178 = cljs.core.first.call(null,inst_16169);var state_16198__$1 = state_16198;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16198__$1,20,out,inst_16178);
} else
{if((state_val_16199 === 19))
{var inst_16184 = (state_16198[2]);var state_16198__$1 = state_16198;var statearr_16227_18225 = state_16198__$1;(statearr_16227_18225[2] = inst_16184);
(statearr_16227_18225[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16199 === 20))
{var inst_16169 = (state_16198[13]);var inst_16180 = (state_16198[2]);var inst_16181 = cljs.core.next.call(null,inst_16169);var inst_16155 = inst_16181;var inst_16156 = null;var inst_16157 = 0;var inst_16158 = 0;var state_16198__$1 = (function (){var statearr_16228 = state_16198;(statearr_16228[8] = inst_16158);
(statearr_16228[9] = inst_16156);
(statearr_16228[10] = inst_16157);
(statearr_16228[11] = inst_16155);
(statearr_16228[15] = inst_16180);
return statearr_16228;
})();var statearr_16229_18226 = state_16198__$1;(statearr_16229_18226[2] = null);
(statearr_16229_18226[1] = 8);
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
});})(c__13601__auto__))
;return ((function (switch__13531__auto__,c__13601__auto__){
return (function() {
var state_machine__13532__auto__ = null;
var state_machine__13532__auto____0 = (function (){var statearr_16233 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16233[0] = state_machine__13532__auto__);
(statearr_16233[1] = 1);
return statearr_16233;
});
var state_machine__13532__auto____1 = (function (state_16198){while(true){
var ret_value__13533__auto__ = (function (){try{while(true){
var result__13534__auto__ = switch__13531__auto__.call(null,state_16198);if(cljs.core.keyword_identical_QMARK_.call(null,result__13534__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13534__auto__;
}
break;
}
}catch (e16234){if((e16234 instanceof Object))
{var ex__13535__auto__ = e16234;var statearr_16235_18227 = state_16198;(statearr_16235_18227[5] = ex__13535__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16198);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16234;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13533__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18228 = state_16198;
state_16198 = G__18228;
continue;
}
} else
{return ret_value__13533__auto__;
}
break;
}
});
state_machine__13532__auto__ = function(state_16198){
switch(arguments.length){
case 0:
return state_machine__13532__auto____0.call(this);
case 1:
return state_machine__13532__auto____1.call(this,state_16198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13532__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13532__auto____0;
state_machine__13532__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13532__auto____1;
return state_machine__13532__auto__;
})()
;})(switch__13531__auto__,c__13601__auto__))
})();var state__13603__auto__ = (function (){var statearr_16236 = f__13602__auto__.call(null);(statearr_16236[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13601__auto__);
return statearr_16236;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13603__auto__);
});})(c__13601__auto__))
);
return c__13601__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__13601__auto___18229 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13601__auto___18229){
return (function (){var f__13602__auto__ = (function (){var switch__13531__auto__ = ((function (c__13601__auto___18229){
return (function (state_16296){var state_val_16297 = (state_16296[1]);if((state_val_16297 === 1))
{var state_16296__$1 = state_16296;var statearr_16298_18230 = state_16296__$1;(statearr_16298_18230[2] = null);
(statearr_16298_18230[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16297 === 2))
{var state_16296__$1 = state_16296;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16296__$1,4,from);
} else
{if((state_val_16297 === 3))
{var inst_16294 = (state_16296[2]);var state_16296__$1 = state_16296;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16296__$1,inst_16294);
} else
{if((state_val_16297 === 4))
{var inst_16279 = (state_16296[7]);var inst_16279__$1 = (state_16296[2]);var inst_16280 = (inst_16279__$1 == null);var state_16296__$1 = (function (){var statearr_16299 = state_16296;(statearr_16299[7] = inst_16279__$1);
return statearr_16299;
})();if(cljs.core.truth_(inst_16280))
{var statearr_16300_18231 = state_16296__$1;(statearr_16300_18231[1] = 5);
} else
{var statearr_16301_18232 = state_16296__$1;(statearr_16301_18232[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16297 === 5))
{var state_16296__$1 = state_16296;if(cljs.core.truth_(close_QMARK_))
{var statearr_16302_18233 = state_16296__$1;(statearr_16302_18233[1] = 8);
} else
{var statearr_16303_18234 = state_16296__$1;(statearr_16303_18234[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16297 === 6))
{var inst_16279 = (state_16296[7]);var state_16296__$1 = state_16296;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16296__$1,11,to,inst_16279);
} else
{if((state_val_16297 === 7))
{var inst_16292 = (state_16296[2]);var state_16296__$1 = state_16296;var statearr_16304_18235 = state_16296__$1;(statearr_16304_18235[2] = inst_16292);
(statearr_16304_18235[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16297 === 8))
{var inst_16283 = cljs.core.async.close_BANG_.call(null,to);var state_16296__$1 = state_16296;var statearr_16305_18236 = state_16296__$1;(statearr_16305_18236[2] = inst_16283);
(statearr_16305_18236[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16297 === 9))
{var state_16296__$1 = state_16296;var statearr_16306_18237 = state_16296__$1;(statearr_16306_18237[2] = null);
(statearr_16306_18237[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16297 === 10))
{var inst_16286 = (state_16296[2]);var state_16296__$1 = state_16296;var statearr_16307_18238 = state_16296__$1;(statearr_16307_18238[2] = inst_16286);
(statearr_16307_18238[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16297 === 11))
{var inst_16289 = (state_16296[2]);var state_16296__$1 = (function (){var statearr_16308 = state_16296;(statearr_16308[8] = inst_16289);
return statearr_16308;
})();var statearr_16309_18239 = state_16296__$1;(statearr_16309_18239[2] = null);
(statearr_16309_18239[1] = 2);
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
});})(c__13601__auto___18229))
;return ((function (switch__13531__auto__,c__13601__auto___18229){
return (function() {
var state_machine__13532__auto__ = null;
var state_machine__13532__auto____0 = (function (){var statearr_16313 = [null,null,null,null,null,null,null,null,null];(statearr_16313[0] = state_machine__13532__auto__);
(statearr_16313[1] = 1);
return statearr_16313;
});
var state_machine__13532__auto____1 = (function (state_16296){while(true){
var ret_value__13533__auto__ = (function (){try{while(true){
var result__13534__auto__ = switch__13531__auto__.call(null,state_16296);if(cljs.core.keyword_identical_QMARK_.call(null,result__13534__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13534__auto__;
}
break;
}
}catch (e16314){if((e16314 instanceof Object))
{var ex__13535__auto__ = e16314;var statearr_16315_18240 = state_16296;(statearr_16315_18240[5] = ex__13535__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16296);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16314;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13533__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18241 = state_16296;
state_16296 = G__18241;
continue;
}
} else
{return ret_value__13533__auto__;
}
break;
}
});
state_machine__13532__auto__ = function(state_16296){
switch(arguments.length){
case 0:
return state_machine__13532__auto____0.call(this);
case 1:
return state_machine__13532__auto____1.call(this,state_16296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13532__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13532__auto____0;
state_machine__13532__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13532__auto____1;
return state_machine__13532__auto__;
})()
;})(switch__13531__auto__,c__13601__auto___18229))
})();var state__13603__auto__ = (function (){var statearr_16316 = f__13602__auto__.call(null);(statearr_16316[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13601__auto___18229);
return statearr_16316;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13603__auto__);
});})(c__13601__auto___18229))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__13601__auto___18242 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13601__auto___18242,tc,fc){
return (function (){var f__13602__auto__ = (function (){var switch__13531__auto__ = ((function (c__13601__auto___18242,tc,fc){
return (function (state_16381){var state_val_16382 = (state_16381[1]);if((state_val_16382 === 1))
{var state_16381__$1 = state_16381;var statearr_16383_18243 = state_16381__$1;(statearr_16383_18243[2] = null);
(statearr_16383_18243[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16382 === 2))
{var state_16381__$1 = state_16381;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16381__$1,4,ch);
} else
{if((state_val_16382 === 3))
{var inst_16379 = (state_16381[2]);var state_16381__$1 = state_16381;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16381__$1,inst_16379);
} else
{if((state_val_16382 === 4))
{var inst_16362 = (state_16381[7]);var inst_16362__$1 = (state_16381[2]);var inst_16363 = (inst_16362__$1 == null);var state_16381__$1 = (function (){var statearr_16384 = state_16381;(statearr_16384[7] = inst_16362__$1);
return statearr_16384;
})();if(cljs.core.truth_(inst_16363))
{var statearr_16385_18244 = state_16381__$1;(statearr_16385_18244[1] = 5);
} else
{var statearr_16386_18245 = state_16381__$1;(statearr_16386_18245[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16382 === 5))
{var inst_16365 = cljs.core.async.close_BANG_.call(null,tc);var inst_16366 = cljs.core.async.close_BANG_.call(null,fc);var state_16381__$1 = (function (){var statearr_16387 = state_16381;(statearr_16387[8] = inst_16365);
return statearr_16387;
})();var statearr_16388_18246 = state_16381__$1;(statearr_16388_18246[2] = inst_16366);
(statearr_16388_18246[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16382 === 6))
{var inst_16362 = (state_16381[7]);var inst_16368 = p.call(null,inst_16362);var state_16381__$1 = state_16381;if(cljs.core.truth_(inst_16368))
{var statearr_16389_18247 = state_16381__$1;(statearr_16389_18247[1] = 9);
} else
{var statearr_16390_18248 = state_16381__$1;(statearr_16390_18248[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16382 === 7))
{var inst_16377 = (state_16381[2]);var state_16381__$1 = state_16381;var statearr_16391_18249 = state_16381__$1;(statearr_16391_18249[2] = inst_16377);
(statearr_16391_18249[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16382 === 8))
{var inst_16374 = (state_16381[2]);var state_16381__$1 = (function (){var statearr_16392 = state_16381;(statearr_16392[9] = inst_16374);
return statearr_16392;
})();var statearr_16393_18250 = state_16381__$1;(statearr_16393_18250[2] = null);
(statearr_16393_18250[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16382 === 9))
{var state_16381__$1 = state_16381;var statearr_16394_18251 = state_16381__$1;(statearr_16394_18251[2] = tc);
(statearr_16394_18251[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16382 === 10))
{var state_16381__$1 = state_16381;var statearr_16395_18252 = state_16381__$1;(statearr_16395_18252[2] = fc);
(statearr_16395_18252[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16382 === 11))
{var inst_16362 = (state_16381[7]);var inst_16372 = (state_16381[2]);var state_16381__$1 = state_16381;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16381__$1,8,inst_16372,inst_16362);
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
});})(c__13601__auto___18242,tc,fc))
;return ((function (switch__13531__auto__,c__13601__auto___18242,tc,fc){
return (function() {
var state_machine__13532__auto__ = null;
var state_machine__13532__auto____0 = (function (){var statearr_16399 = [null,null,null,null,null,null,null,null,null,null];(statearr_16399[0] = state_machine__13532__auto__);
(statearr_16399[1] = 1);
return statearr_16399;
});
var state_machine__13532__auto____1 = (function (state_16381){while(true){
var ret_value__13533__auto__ = (function (){try{while(true){
var result__13534__auto__ = switch__13531__auto__.call(null,state_16381);if(cljs.core.keyword_identical_QMARK_.call(null,result__13534__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13534__auto__;
}
break;
}
}catch (e16400){if((e16400 instanceof Object))
{var ex__13535__auto__ = e16400;var statearr_16401_18253 = state_16381;(statearr_16401_18253[5] = ex__13535__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16381);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16400;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13533__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18254 = state_16381;
state_16381 = G__18254;
continue;
}
} else
{return ret_value__13533__auto__;
}
break;
}
});
state_machine__13532__auto__ = function(state_16381){
switch(arguments.length){
case 0:
return state_machine__13532__auto____0.call(this);
case 1:
return state_machine__13532__auto____1.call(this,state_16381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13532__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13532__auto____0;
state_machine__13532__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13532__auto____1;
return state_machine__13532__auto__;
})()
;})(switch__13531__auto__,c__13601__auto___18242,tc,fc))
})();var state__13603__auto__ = (function (){var statearr_16402 = f__13602__auto__.call(null);(statearr_16402[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13601__auto___18242);
return statearr_16402;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13603__auto__);
});})(c__13601__auto___18242,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__13601__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13601__auto__){
return (function (){var f__13602__auto__ = (function (){var switch__13531__auto__ = ((function (c__13601__auto__){
return (function (state_16449){var state_val_16450 = (state_16449[1]);if((state_val_16450 === 7))
{var inst_16445 = (state_16449[2]);var state_16449__$1 = state_16449;var statearr_16451_18255 = state_16449__$1;(statearr_16451_18255[2] = inst_16445);
(statearr_16451_18255[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16450 === 6))
{var inst_16438 = (state_16449[7]);var inst_16435 = (state_16449[8]);var inst_16442 = f.call(null,inst_16435,inst_16438);var inst_16435__$1 = inst_16442;var state_16449__$1 = (function (){var statearr_16452 = state_16449;(statearr_16452[8] = inst_16435__$1);
return statearr_16452;
})();var statearr_16453_18256 = state_16449__$1;(statearr_16453_18256[2] = null);
(statearr_16453_18256[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16450 === 5))
{var inst_16435 = (state_16449[8]);var state_16449__$1 = state_16449;var statearr_16454_18257 = state_16449__$1;(statearr_16454_18257[2] = inst_16435);
(statearr_16454_18257[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16450 === 4))
{var inst_16438 = (state_16449[7]);var inst_16438__$1 = (state_16449[2]);var inst_16439 = (inst_16438__$1 == null);var state_16449__$1 = (function (){var statearr_16455 = state_16449;(statearr_16455[7] = inst_16438__$1);
return statearr_16455;
})();if(cljs.core.truth_(inst_16439))
{var statearr_16456_18258 = state_16449__$1;(statearr_16456_18258[1] = 5);
} else
{var statearr_16457_18259 = state_16449__$1;(statearr_16457_18259[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16450 === 3))
{var inst_16447 = (state_16449[2]);var state_16449__$1 = state_16449;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16449__$1,inst_16447);
} else
{if((state_val_16450 === 2))
{var state_16449__$1 = state_16449;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16449__$1,4,ch);
} else
{if((state_val_16450 === 1))
{var inst_16435 = init;var state_16449__$1 = (function (){var statearr_16458 = state_16449;(statearr_16458[8] = inst_16435);
return statearr_16458;
})();var statearr_16459_18260 = state_16449__$1;(statearr_16459_18260[2] = null);
(statearr_16459_18260[1] = 2);
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
});})(c__13601__auto__))
;return ((function (switch__13531__auto__,c__13601__auto__){
return (function() {
var state_machine__13532__auto__ = null;
var state_machine__13532__auto____0 = (function (){var statearr_16463 = [null,null,null,null,null,null,null,null,null];(statearr_16463[0] = state_machine__13532__auto__);
(statearr_16463[1] = 1);
return statearr_16463;
});
var state_machine__13532__auto____1 = (function (state_16449){while(true){
var ret_value__13533__auto__ = (function (){try{while(true){
var result__13534__auto__ = switch__13531__auto__.call(null,state_16449);if(cljs.core.keyword_identical_QMARK_.call(null,result__13534__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13534__auto__;
}
break;
}
}catch (e16464){if((e16464 instanceof Object))
{var ex__13535__auto__ = e16464;var statearr_16465_18261 = state_16449;(statearr_16465_18261[5] = ex__13535__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16449);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16464;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13533__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18262 = state_16449;
state_16449 = G__18262;
continue;
}
} else
{return ret_value__13533__auto__;
}
break;
}
});
state_machine__13532__auto__ = function(state_16449){
switch(arguments.length){
case 0:
return state_machine__13532__auto____0.call(this);
case 1:
return state_machine__13532__auto____1.call(this,state_16449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13532__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13532__auto____0;
state_machine__13532__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13532__auto____1;
return state_machine__13532__auto__;
})()
;})(switch__13531__auto__,c__13601__auto__))
})();var state__13603__auto__ = (function (){var statearr_16466 = f__13602__auto__.call(null);(statearr_16466[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13601__auto__);
return statearr_16466;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13603__auto__);
});})(c__13601__auto__))
);
return c__13601__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__13601__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13601__auto__){
return (function (){var f__13602__auto__ = (function (){var switch__13531__auto__ = ((function (c__13601__auto__){
return (function (state_16528){var state_val_16529 = (state_16528[1]);if((state_val_16529 === 1))
{var inst_16508 = cljs.core.seq.call(null,coll);var inst_16509 = inst_16508;var state_16528__$1 = (function (){var statearr_16530 = state_16528;(statearr_16530[7] = inst_16509);
return statearr_16530;
})();var statearr_16531_18263 = state_16528__$1;(statearr_16531_18263[2] = null);
(statearr_16531_18263[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16529 === 2))
{var inst_16509 = (state_16528[7]);var state_16528__$1 = state_16528;if(cljs.core.truth_(inst_16509))
{var statearr_16532_18264 = state_16528__$1;(statearr_16532_18264[1] = 4);
} else
{var statearr_16533_18265 = state_16528__$1;(statearr_16533_18265[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16529 === 3))
{var inst_16526 = (state_16528[2]);var state_16528__$1 = state_16528;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16528__$1,inst_16526);
} else
{if((state_val_16529 === 4))
{var inst_16509 = (state_16528[7]);var inst_16512 = cljs.core.first.call(null,inst_16509);var state_16528__$1 = state_16528;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16528__$1,7,ch,inst_16512);
} else
{if((state_val_16529 === 5))
{var state_16528__$1 = state_16528;if(cljs.core.truth_(close_QMARK_))
{var statearr_16534_18266 = state_16528__$1;(statearr_16534_18266[1] = 8);
} else
{var statearr_16535_18267 = state_16528__$1;(statearr_16535_18267[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16529 === 6))
{var inst_16524 = (state_16528[2]);var state_16528__$1 = state_16528;var statearr_16536_18268 = state_16528__$1;(statearr_16536_18268[2] = inst_16524);
(statearr_16536_18268[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16529 === 7))
{var inst_16509 = (state_16528[7]);var inst_16514 = (state_16528[2]);var inst_16515 = cljs.core.next.call(null,inst_16509);var inst_16509__$1 = inst_16515;var state_16528__$1 = (function (){var statearr_16537 = state_16528;(statearr_16537[8] = inst_16514);
(statearr_16537[7] = inst_16509__$1);
return statearr_16537;
})();var statearr_16538_18269 = state_16528__$1;(statearr_16538_18269[2] = null);
(statearr_16538_18269[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16529 === 8))
{var inst_16519 = cljs.core.async.close_BANG_.call(null,ch);var state_16528__$1 = state_16528;var statearr_16539_18270 = state_16528__$1;(statearr_16539_18270[2] = inst_16519);
(statearr_16539_18270[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16529 === 9))
{var state_16528__$1 = state_16528;var statearr_16540_18271 = state_16528__$1;(statearr_16540_18271[2] = null);
(statearr_16540_18271[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16529 === 10))
{var inst_16522 = (state_16528[2]);var state_16528__$1 = state_16528;var statearr_16541_18272 = state_16528__$1;(statearr_16541_18272[2] = inst_16522);
(statearr_16541_18272[1] = 6);
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
});})(c__13601__auto__))
;return ((function (switch__13531__auto__,c__13601__auto__){
return (function() {
var state_machine__13532__auto__ = null;
var state_machine__13532__auto____0 = (function (){var statearr_16545 = [null,null,null,null,null,null,null,null,null];(statearr_16545[0] = state_machine__13532__auto__);
(statearr_16545[1] = 1);
return statearr_16545;
});
var state_machine__13532__auto____1 = (function (state_16528){while(true){
var ret_value__13533__auto__ = (function (){try{while(true){
var result__13534__auto__ = switch__13531__auto__.call(null,state_16528);if(cljs.core.keyword_identical_QMARK_.call(null,result__13534__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13534__auto__;
}
break;
}
}catch (e16546){if((e16546 instanceof Object))
{var ex__13535__auto__ = e16546;var statearr_16547_18273 = state_16528;(statearr_16547_18273[5] = ex__13535__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16528);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16546;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13533__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18274 = state_16528;
state_16528 = G__18274;
continue;
}
} else
{return ret_value__13533__auto__;
}
break;
}
});
state_machine__13532__auto__ = function(state_16528){
switch(arguments.length){
case 0:
return state_machine__13532__auto____0.call(this);
case 1:
return state_machine__13532__auto____1.call(this,state_16528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13532__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13532__auto____0;
state_machine__13532__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13532__auto____1;
return state_machine__13532__auto__;
})()
;})(switch__13531__auto__,c__13601__auto__))
})();var state__13603__auto__ = (function (){var statearr_16548 = f__13602__auto__.call(null);(statearr_16548[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13601__auto__);
return statearr_16548;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13603__auto__);
});})(c__13601__auto__))
);
return c__13601__auto__;
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
cljs.core.async.Mux = (function (){var obj16550 = {};return obj16550;
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
cljs.core.async.Mult = (function (){var obj16552 = {};return obj16552;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t16776 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16776 = (function (cs,ch,mult,meta16777){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta16777 = meta16777;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16776.cljs$lang$type = true;
cljs.core.async.t16776.cljs$lang$ctorStr = "cljs.core.async/t16776";
cljs.core.async.t16776.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async/t16776");
});})(cs))
;
cljs.core.async.t16776.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t16776.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t16776.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t16776.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t16776.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16776.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t16776.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16778){var self__ = this;
var _16778__$1 = this;return self__.meta16777;
});})(cs))
;
cljs.core.async.t16776.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16778,meta16777__$1){var self__ = this;
var _16778__$1 = this;return (new cljs.core.async.t16776(self__.cs,self__.ch,self__.mult,meta16777__$1));
});})(cs))
;
cljs.core.async.__GT_t16776 = ((function (cs){
return (function __GT_t16776(cs__$1,ch__$1,mult__$1,meta16777){return (new cljs.core.async.t16776(cs__$1,ch__$1,mult__$1,meta16777));
});})(cs))
;
}
return (new cljs.core.async.t16776(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__13601__auto___18275 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13601__auto___18275,cs,m,dchan,dctr,done){
return (function (){var f__13602__auto__ = (function (){var switch__13531__auto__ = ((function (c__13601__auto___18275,cs,m,dchan,dctr,done){
return (function (state_16913){var state_val_16914 = (state_16913[1]);if((state_val_16914 === 32))
{var inst_16781 = (state_16913[7]);var inst_16857 = (state_16913[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16913,31,Object,null,30);var inst_16864 = cljs.core.async.put_BANG_.call(null,inst_16857,inst_16781,done);var state_16913__$1 = state_16913;var statearr_16915_18276 = state_16913__$1;(statearr_16915_18276[2] = inst_16864);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16913__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16914 === 1))
{var state_16913__$1 = state_16913;var statearr_16916_18277 = state_16913__$1;(statearr_16916_18277[2] = null);
(statearr_16916_18277[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16914 === 33))
{var inst_16870 = (state_16913[9]);var inst_16872 = cljs.core.chunked_seq_QMARK_.call(null,inst_16870);var state_16913__$1 = state_16913;if(inst_16872)
{var statearr_16917_18278 = state_16913__$1;(statearr_16917_18278[1] = 36);
} else
{var statearr_16918_18279 = state_16913__$1;(statearr_16918_18279[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16914 === 2))
{var state_16913__$1 = state_16913;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16913__$1,4,ch);
} else
{if((state_val_16914 === 34))
{var state_16913__$1 = state_16913;var statearr_16919_18280 = state_16913__$1;(statearr_16919_18280[2] = null);
(statearr_16919_18280[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16914 === 3))
{var inst_16911 = (state_16913[2]);var state_16913__$1 = state_16913;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16913__$1,inst_16911);
} else
{if((state_val_16914 === 35))
{var inst_16895 = (state_16913[2]);var state_16913__$1 = state_16913;var statearr_16920_18281 = state_16913__$1;(statearr_16920_18281[2] = inst_16895);
(statearr_16920_18281[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16914 === 4))
{var inst_16781 = (state_16913[7]);var inst_16781__$1 = (state_16913[2]);var inst_16782 = (inst_16781__$1 == null);var state_16913__$1 = (function (){var statearr_16921 = state_16913;(statearr_16921[7] = inst_16781__$1);
return statearr_16921;
})();if(cljs.core.truth_(inst_16782))
{var statearr_16922_18282 = state_16913__$1;(statearr_16922_18282[1] = 5);
} else
{var statearr_16923_18283 = state_16913__$1;(statearr_16923_18283[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16914 === 36))
{var inst_16870 = (state_16913[9]);var inst_16874 = cljs.core.chunk_first.call(null,inst_16870);var inst_16875 = cljs.core.chunk_rest.call(null,inst_16870);var inst_16876 = cljs.core.count.call(null,inst_16874);var inst_16849 = inst_16875;var inst_16850 = inst_16874;var inst_16851 = inst_16876;var inst_16852 = 0;var state_16913__$1 = (function (){var statearr_16924 = state_16913;(statearr_16924[10] = inst_16849);
(statearr_16924[11] = inst_16851);
(statearr_16924[12] = inst_16852);
(statearr_16924[13] = inst_16850);
return statearr_16924;
})();var statearr_16925_18284 = state_16913__$1;(statearr_16925_18284[2] = null);
(statearr_16925_18284[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16914 === 5))
{var inst_16788 = cljs.core.deref.call(null,cs);var inst_16789 = cljs.core.seq.call(null,inst_16788);var inst_16790 = inst_16789;var inst_16791 = null;var inst_16792 = 0;var inst_16793 = 0;var state_16913__$1 = (function (){var statearr_16926 = state_16913;(statearr_16926[14] = inst_16791);
(statearr_16926[15] = inst_16790);
(statearr_16926[16] = inst_16793);
(statearr_16926[17] = inst_16792);
return statearr_16926;
})();var statearr_16927_18285 = state_16913__$1;(statearr_16927_18285[2] = null);
(statearr_16927_18285[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16914 === 37))
{var inst_16870 = (state_16913[9]);var inst_16879 = cljs.core.first.call(null,inst_16870);var state_16913__$1 = (function (){var statearr_16928 = state_16913;(statearr_16928[18] = inst_16879);
return statearr_16928;
})();var statearr_16929_18286 = state_16913__$1;(statearr_16929_18286[2] = null);
(statearr_16929_18286[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16914 === 6))
{var inst_16841 = (state_16913[19]);var inst_16840 = cljs.core.deref.call(null,cs);var inst_16841__$1 = cljs.core.keys.call(null,inst_16840);var inst_16842 = cljs.core.count.call(null,inst_16841__$1);var inst_16843 = cljs.core.reset_BANG_.call(null,dctr,inst_16842);var inst_16848 = cljs.core.seq.call(null,inst_16841__$1);var inst_16849 = inst_16848;var inst_16850 = null;var inst_16851 = 0;var inst_16852 = 0;var state_16913__$1 = (function (){var statearr_16930 = state_16913;(statearr_16930[19] = inst_16841__$1);
(statearr_16930[10] = inst_16849);
(statearr_16930[11] = inst_16851);
(statearr_16930[12] = inst_16852);
(statearr_16930[13] = inst_16850);
(statearr_16930[20] = inst_16843);
return statearr_16930;
})();var statearr_16931_18287 = state_16913__$1;(statearr_16931_18287[2] = null);
(statearr_16931_18287[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16914 === 38))
{var inst_16892 = (state_16913[2]);var state_16913__$1 = state_16913;var statearr_16932_18288 = state_16913__$1;(statearr_16932_18288[2] = inst_16892);
(statearr_16932_18288[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16914 === 7))
{var inst_16909 = (state_16913[2]);var state_16913__$1 = state_16913;var statearr_16933_18289 = state_16913__$1;(statearr_16933_18289[2] = inst_16909);
(statearr_16933_18289[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16914 === 39))
{var inst_16870 = (state_16913[9]);var inst_16888 = (state_16913[2]);var inst_16889 = cljs.core.next.call(null,inst_16870);var inst_16849 = inst_16889;var inst_16850 = null;var inst_16851 = 0;var inst_16852 = 0;var state_16913__$1 = (function (){var statearr_16934 = state_16913;(statearr_16934[10] = inst_16849);
(statearr_16934[11] = inst_16851);
(statearr_16934[12] = inst_16852);
(statearr_16934[13] = inst_16850);
(statearr_16934[21] = inst_16888);
return statearr_16934;
})();var statearr_16935_18290 = state_16913__$1;(statearr_16935_18290[2] = null);
(statearr_16935_18290[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16914 === 8))
{var inst_16793 = (state_16913[16]);var inst_16792 = (state_16913[17]);var inst_16795 = (inst_16793 < inst_16792);var inst_16796 = inst_16795;var state_16913__$1 = state_16913;if(cljs.core.truth_(inst_16796))
{var statearr_16936_18291 = state_16913__$1;(statearr_16936_18291[1] = 10);
} else
{var statearr_16937_18292 = state_16913__$1;(statearr_16937_18292[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16914 === 40))
{var inst_16879 = (state_16913[18]);var inst_16880 = (state_16913[2]);var inst_16881 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_16882 = cljs.core.async.untap_STAR_.call(null,m,inst_16879);var state_16913__$1 = (function (){var statearr_16938 = state_16913;(statearr_16938[22] = inst_16881);
(statearr_16938[23] = inst_16880);
return statearr_16938;
})();var statearr_16939_18293 = state_16913__$1;(statearr_16939_18293[2] = inst_16882);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16913__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16914 === 9))
{var inst_16838 = (state_16913[2]);var state_16913__$1 = state_16913;var statearr_16940_18294 = state_16913__$1;(statearr_16940_18294[2] = inst_16838);
(statearr_16940_18294[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16914 === 41))
{var inst_16781 = (state_16913[7]);var inst_16879 = (state_16913[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16913,40,Object,null,39);var inst_16886 = cljs.core.async.put_BANG_.call(null,inst_16879,inst_16781,done);var state_16913__$1 = state_16913;var statearr_16941_18295 = state_16913__$1;(statearr_16941_18295[2] = inst_16886);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16913__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16914 === 10))
{var inst_16791 = (state_16913[14]);var inst_16793 = (state_16913[16]);var inst_16799 = cljs.core._nth.call(null,inst_16791,inst_16793);var inst_16800 = cljs.core.nth.call(null,inst_16799,0,null);var inst_16801 = cljs.core.nth.call(null,inst_16799,1,null);var state_16913__$1 = (function (){var statearr_16942 = state_16913;(statearr_16942[24] = inst_16800);
return statearr_16942;
})();if(cljs.core.truth_(inst_16801))
{var statearr_16943_18296 = state_16913__$1;(statearr_16943_18296[1] = 13);
} else
{var statearr_16944_18297 = state_16913__$1;(statearr_16944_18297[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16914 === 42))
{var state_16913__$1 = state_16913;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16913__$1,45,dchan);
} else
{if((state_val_16914 === 11))
{var inst_16790 = (state_16913[15]);var inst_16810 = (state_16913[25]);var inst_16810__$1 = cljs.core.seq.call(null,inst_16790);var state_16913__$1 = (function (){var statearr_16945 = state_16913;(statearr_16945[25] = inst_16810__$1);
return statearr_16945;
})();if(inst_16810__$1)
{var statearr_16946_18298 = state_16913__$1;(statearr_16946_18298[1] = 16);
} else
{var statearr_16947_18299 = state_16913__$1;(statearr_16947_18299[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16914 === 43))
{var state_16913__$1 = state_16913;var statearr_16948_18300 = state_16913__$1;(statearr_16948_18300[2] = null);
(statearr_16948_18300[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16914 === 12))
{var inst_16836 = (state_16913[2]);var state_16913__$1 = state_16913;var statearr_16949_18301 = state_16913__$1;(statearr_16949_18301[2] = inst_16836);
(statearr_16949_18301[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16914 === 44))
{var inst_16906 = (state_16913[2]);var state_16913__$1 = (function (){var statearr_16950 = state_16913;(statearr_16950[26] = inst_16906);
return statearr_16950;
})();var statearr_16951_18302 = state_16913__$1;(statearr_16951_18302[2] = null);
(statearr_16951_18302[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16914 === 13))
{var inst_16800 = (state_16913[24]);var inst_16803 = cljs.core.async.close_BANG_.call(null,inst_16800);var state_16913__$1 = state_16913;var statearr_16952_18303 = state_16913__$1;(statearr_16952_18303[2] = inst_16803);
(statearr_16952_18303[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16914 === 45))
{var inst_16903 = (state_16913[2]);var state_16913__$1 = state_16913;var statearr_16956_18304 = state_16913__$1;(statearr_16956_18304[2] = inst_16903);
(statearr_16956_18304[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16914 === 14))
{var state_16913__$1 = state_16913;var statearr_16957_18305 = state_16913__$1;(statearr_16957_18305[2] = null);
(statearr_16957_18305[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16914 === 15))
{var inst_16791 = (state_16913[14]);var inst_16790 = (state_16913[15]);var inst_16793 = (state_16913[16]);var inst_16792 = (state_16913[17]);var inst_16806 = (state_16913[2]);var inst_16807 = (inst_16793 + 1);var tmp16953 = inst_16791;var tmp16954 = inst_16790;var tmp16955 = inst_16792;var inst_16790__$1 = tmp16954;var inst_16791__$1 = tmp16953;var inst_16792__$1 = tmp16955;var inst_16793__$1 = inst_16807;var state_16913__$1 = (function (){var statearr_16958 = state_16913;(statearr_16958[27] = inst_16806);
(statearr_16958[14] = inst_16791__$1);
(statearr_16958[15] = inst_16790__$1);
(statearr_16958[16] = inst_16793__$1);
(statearr_16958[17] = inst_16792__$1);
return statearr_16958;
})();var statearr_16959_18306 = state_16913__$1;(statearr_16959_18306[2] = null);
(statearr_16959_18306[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16914 === 16))
{var inst_16810 = (state_16913[25]);var inst_16812 = cljs.core.chunked_seq_QMARK_.call(null,inst_16810);var state_16913__$1 = state_16913;if(inst_16812)
{var statearr_16960_18307 = state_16913__$1;(statearr_16960_18307[1] = 19);
} else
{var statearr_16961_18308 = state_16913__$1;(statearr_16961_18308[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16914 === 17))
{var state_16913__$1 = state_16913;var statearr_16962_18309 = state_16913__$1;(statearr_16962_18309[2] = null);
(statearr_16962_18309[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16914 === 18))
{var inst_16834 = (state_16913[2]);var state_16913__$1 = state_16913;var statearr_16963_18310 = state_16913__$1;(statearr_16963_18310[2] = inst_16834);
(statearr_16963_18310[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16914 === 19))
{var inst_16810 = (state_16913[25]);var inst_16814 = cljs.core.chunk_first.call(null,inst_16810);var inst_16815 = cljs.core.chunk_rest.call(null,inst_16810);var inst_16816 = cljs.core.count.call(null,inst_16814);var inst_16790 = inst_16815;var inst_16791 = inst_16814;var inst_16792 = inst_16816;var inst_16793 = 0;var state_16913__$1 = (function (){var statearr_16964 = state_16913;(statearr_16964[14] = inst_16791);
(statearr_16964[15] = inst_16790);
(statearr_16964[16] = inst_16793);
(statearr_16964[17] = inst_16792);
return statearr_16964;
})();var statearr_16965_18311 = state_16913__$1;(statearr_16965_18311[2] = null);
(statearr_16965_18311[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16914 === 20))
{var inst_16810 = (state_16913[25]);var inst_16820 = cljs.core.first.call(null,inst_16810);var inst_16821 = cljs.core.nth.call(null,inst_16820,0,null);var inst_16822 = cljs.core.nth.call(null,inst_16820,1,null);var state_16913__$1 = (function (){var statearr_16966 = state_16913;(statearr_16966[28] = inst_16821);
return statearr_16966;
})();if(cljs.core.truth_(inst_16822))
{var statearr_16967_18312 = state_16913__$1;(statearr_16967_18312[1] = 22);
} else
{var statearr_16968_18313 = state_16913__$1;(statearr_16968_18313[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16914 === 21))
{var inst_16831 = (state_16913[2]);var state_16913__$1 = state_16913;var statearr_16969_18314 = state_16913__$1;(statearr_16969_18314[2] = inst_16831);
(statearr_16969_18314[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16914 === 22))
{var inst_16821 = (state_16913[28]);var inst_16824 = cljs.core.async.close_BANG_.call(null,inst_16821);var state_16913__$1 = state_16913;var statearr_16970_18315 = state_16913__$1;(statearr_16970_18315[2] = inst_16824);
(statearr_16970_18315[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16914 === 23))
{var state_16913__$1 = state_16913;var statearr_16971_18316 = state_16913__$1;(statearr_16971_18316[2] = null);
(statearr_16971_18316[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16914 === 24))
{var inst_16810 = (state_16913[25]);var inst_16827 = (state_16913[2]);var inst_16828 = cljs.core.next.call(null,inst_16810);var inst_16790 = inst_16828;var inst_16791 = null;var inst_16792 = 0;var inst_16793 = 0;var state_16913__$1 = (function (){var statearr_16972 = state_16913;(statearr_16972[29] = inst_16827);
(statearr_16972[14] = inst_16791);
(statearr_16972[15] = inst_16790);
(statearr_16972[16] = inst_16793);
(statearr_16972[17] = inst_16792);
return statearr_16972;
})();var statearr_16973_18317 = state_16913__$1;(statearr_16973_18317[2] = null);
(statearr_16973_18317[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16914 === 25))
{var inst_16851 = (state_16913[11]);var inst_16852 = (state_16913[12]);var inst_16854 = (inst_16852 < inst_16851);var inst_16855 = inst_16854;var state_16913__$1 = state_16913;if(cljs.core.truth_(inst_16855))
{var statearr_16974_18318 = state_16913__$1;(statearr_16974_18318[1] = 27);
} else
{var statearr_16975_18319 = state_16913__$1;(statearr_16975_18319[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16914 === 26))
{var inst_16841 = (state_16913[19]);var inst_16899 = (state_16913[2]);var inst_16900 = cljs.core.seq.call(null,inst_16841);var state_16913__$1 = (function (){var statearr_16976 = state_16913;(statearr_16976[30] = inst_16899);
return statearr_16976;
})();if(inst_16900)
{var statearr_16977_18320 = state_16913__$1;(statearr_16977_18320[1] = 42);
} else
{var statearr_16978_18321 = state_16913__$1;(statearr_16978_18321[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16914 === 27))
{var inst_16852 = (state_16913[12]);var inst_16850 = (state_16913[13]);var inst_16857 = cljs.core._nth.call(null,inst_16850,inst_16852);var state_16913__$1 = (function (){var statearr_16979 = state_16913;(statearr_16979[8] = inst_16857);
return statearr_16979;
})();var statearr_16980_18322 = state_16913__$1;(statearr_16980_18322[2] = null);
(statearr_16980_18322[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16914 === 28))
{var inst_16870 = (state_16913[9]);var inst_16849 = (state_16913[10]);var inst_16870__$1 = cljs.core.seq.call(null,inst_16849);var state_16913__$1 = (function (){var statearr_16984 = state_16913;(statearr_16984[9] = inst_16870__$1);
return statearr_16984;
})();if(inst_16870__$1)
{var statearr_16985_18323 = state_16913__$1;(statearr_16985_18323[1] = 33);
} else
{var statearr_16986_18324 = state_16913__$1;(statearr_16986_18324[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16914 === 29))
{var inst_16897 = (state_16913[2]);var state_16913__$1 = state_16913;var statearr_16987_18325 = state_16913__$1;(statearr_16987_18325[2] = inst_16897);
(statearr_16987_18325[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16914 === 30))
{var inst_16849 = (state_16913[10]);var inst_16851 = (state_16913[11]);var inst_16852 = (state_16913[12]);var inst_16850 = (state_16913[13]);var inst_16866 = (state_16913[2]);var inst_16867 = (inst_16852 + 1);var tmp16981 = inst_16849;var tmp16982 = inst_16851;var tmp16983 = inst_16850;var inst_16849__$1 = tmp16981;var inst_16850__$1 = tmp16983;var inst_16851__$1 = tmp16982;var inst_16852__$1 = inst_16867;var state_16913__$1 = (function (){var statearr_16988 = state_16913;(statearr_16988[31] = inst_16866);
(statearr_16988[10] = inst_16849__$1);
(statearr_16988[11] = inst_16851__$1);
(statearr_16988[12] = inst_16852__$1);
(statearr_16988[13] = inst_16850__$1);
return statearr_16988;
})();var statearr_16989_18326 = state_16913__$1;(statearr_16989_18326[2] = null);
(statearr_16989_18326[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16914 === 31))
{var inst_16857 = (state_16913[8]);var inst_16858 = (state_16913[2]);var inst_16859 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_16860 = cljs.core.async.untap_STAR_.call(null,m,inst_16857);var state_16913__$1 = (function (){var statearr_16990 = state_16913;(statearr_16990[32] = inst_16858);
(statearr_16990[33] = inst_16859);
return statearr_16990;
})();var statearr_16991_18327 = state_16913__$1;(statearr_16991_18327[2] = inst_16860);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16913__$1);
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
});})(c__13601__auto___18275,cs,m,dchan,dctr,done))
;return ((function (switch__13531__auto__,c__13601__auto___18275,cs,m,dchan,dctr,done){
return (function() {
var state_machine__13532__auto__ = null;
var state_machine__13532__auto____0 = (function (){var statearr_16995 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16995[0] = state_machine__13532__auto__);
(statearr_16995[1] = 1);
return statearr_16995;
});
var state_machine__13532__auto____1 = (function (state_16913){while(true){
var ret_value__13533__auto__ = (function (){try{while(true){
var result__13534__auto__ = switch__13531__auto__.call(null,state_16913);if(cljs.core.keyword_identical_QMARK_.call(null,result__13534__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13534__auto__;
}
break;
}
}catch (e16996){if((e16996 instanceof Object))
{var ex__13535__auto__ = e16996;var statearr_16997_18328 = state_16913;(statearr_16997_18328[5] = ex__13535__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16913);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16996;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13533__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18329 = state_16913;
state_16913 = G__18329;
continue;
}
} else
{return ret_value__13533__auto__;
}
break;
}
});
state_machine__13532__auto__ = function(state_16913){
switch(arguments.length){
case 0:
return state_machine__13532__auto____0.call(this);
case 1:
return state_machine__13532__auto____1.call(this,state_16913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13532__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13532__auto____0;
state_machine__13532__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13532__auto____1;
return state_machine__13532__auto__;
})()
;})(switch__13531__auto__,c__13601__auto___18275,cs,m,dchan,dctr,done))
})();var state__13603__auto__ = (function (){var statearr_16998 = f__13602__auto__.call(null);(statearr_16998[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13601__auto___18275);
return statearr_16998;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13603__auto__);
});})(c__13601__auto___18275,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj17000 = {};return obj17000;
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
;var m = (function (){if(typeof cljs.core.async.t17110 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17110 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta17111){
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
this.meta17111 = meta17111;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17110.cljs$lang$type = true;
cljs.core.async.t17110.cljs$lang$ctorStr = "cljs.core.async/t17110";
cljs.core.async.t17110.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async/t17110");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17110.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t17110.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17110.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17110.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17110.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17110.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17110.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t17110.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17110.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17112){var self__ = this;
var _17112__$1 = this;return self__.meta17111;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17110.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17112,meta17111__$1){var self__ = this;
var _17112__$1 = this;return (new cljs.core.async.t17110(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta17111__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t17110 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t17110(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta17111){return (new cljs.core.async.t17110(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta17111));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t17110(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__13601__auto___18330 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13601__auto___18330,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__13602__auto__ = (function (){var switch__13531__auto__ = ((function (c__13601__auto___18330,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_17177){var state_val_17178 = (state_17177[1]);if((state_val_17178 === 1))
{var inst_17116 = (state_17177[7]);var inst_17116__$1 = calc_state.call(null);var inst_17117 = cljs.core.seq_QMARK_.call(null,inst_17116__$1);var state_17177__$1 = (function (){var statearr_17179 = state_17177;(statearr_17179[7] = inst_17116__$1);
return statearr_17179;
})();if(inst_17117)
{var statearr_17180_18331 = state_17177__$1;(statearr_17180_18331[1] = 2);
} else
{var statearr_17181_18332 = state_17177__$1;(statearr_17181_18332[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17178 === 2))
{var inst_17116 = (state_17177[7]);var inst_17119 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17116);var state_17177__$1 = state_17177;var statearr_17182_18333 = state_17177__$1;(statearr_17182_18333[2] = inst_17119);
(statearr_17182_18333[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17178 === 3))
{var inst_17116 = (state_17177[7]);var state_17177__$1 = state_17177;var statearr_17183_18334 = state_17177__$1;(statearr_17183_18334[2] = inst_17116);
(statearr_17183_18334[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17178 === 4))
{var inst_17116 = (state_17177[7]);var inst_17122 = (state_17177[2]);var inst_17123 = cljs.core.get.call(null,inst_17122,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_17124 = cljs.core.get.call(null,inst_17122,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_17125 = cljs.core.get.call(null,inst_17122,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_17126 = inst_17116;var state_17177__$1 = (function (){var statearr_17184 = state_17177;(statearr_17184[8] = inst_17126);
(statearr_17184[9] = inst_17124);
(statearr_17184[10] = inst_17125);
(statearr_17184[11] = inst_17123);
return statearr_17184;
})();var statearr_17185_18335 = state_17177__$1;(statearr_17185_18335[2] = null);
(statearr_17185_18335[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17178 === 5))
{var inst_17126 = (state_17177[8]);var inst_17129 = cljs.core.seq_QMARK_.call(null,inst_17126);var state_17177__$1 = state_17177;if(inst_17129)
{var statearr_17186_18336 = state_17177__$1;(statearr_17186_18336[1] = 7);
} else
{var statearr_17187_18337 = state_17177__$1;(statearr_17187_18337[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17178 === 6))
{var inst_17175 = (state_17177[2]);var state_17177__$1 = state_17177;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17177__$1,inst_17175);
} else
{if((state_val_17178 === 7))
{var inst_17126 = (state_17177[8]);var inst_17131 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17126);var state_17177__$1 = state_17177;var statearr_17188_18338 = state_17177__$1;(statearr_17188_18338[2] = inst_17131);
(statearr_17188_18338[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17178 === 8))
{var inst_17126 = (state_17177[8]);var state_17177__$1 = state_17177;var statearr_17189_18339 = state_17177__$1;(statearr_17189_18339[2] = inst_17126);
(statearr_17189_18339[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17178 === 9))
{var inst_17134 = (state_17177[12]);var inst_17134__$1 = (state_17177[2]);var inst_17135 = cljs.core.get.call(null,inst_17134__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_17136 = cljs.core.get.call(null,inst_17134__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_17137 = cljs.core.get.call(null,inst_17134__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_17177__$1 = (function (){var statearr_17190 = state_17177;(statearr_17190[13] = inst_17137);
(statearr_17190[14] = inst_17136);
(statearr_17190[12] = inst_17134__$1);
return statearr_17190;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_17177__$1,10,inst_17135);
} else
{if((state_val_17178 === 10))
{var inst_17141 = (state_17177[15]);var inst_17142 = (state_17177[16]);var inst_17140 = (state_17177[2]);var inst_17141__$1 = cljs.core.nth.call(null,inst_17140,0,null);var inst_17142__$1 = cljs.core.nth.call(null,inst_17140,1,null);var inst_17143 = (inst_17141__$1 == null);var inst_17144 = cljs.core._EQ_.call(null,inst_17142__$1,change);var inst_17145 = (inst_17143) || (inst_17144);var state_17177__$1 = (function (){var statearr_17191 = state_17177;(statearr_17191[15] = inst_17141__$1);
(statearr_17191[16] = inst_17142__$1);
return statearr_17191;
})();if(cljs.core.truth_(inst_17145))
{var statearr_17192_18340 = state_17177__$1;(statearr_17192_18340[1] = 11);
} else
{var statearr_17193_18341 = state_17177__$1;(statearr_17193_18341[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17178 === 11))
{var inst_17141 = (state_17177[15]);var inst_17147 = (inst_17141 == null);var state_17177__$1 = state_17177;if(cljs.core.truth_(inst_17147))
{var statearr_17194_18342 = state_17177__$1;(statearr_17194_18342[1] = 14);
} else
{var statearr_17195_18343 = state_17177__$1;(statearr_17195_18343[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17178 === 12))
{var inst_17156 = (state_17177[17]);var inst_17137 = (state_17177[13]);var inst_17142 = (state_17177[16]);var inst_17156__$1 = inst_17137.call(null,inst_17142);var state_17177__$1 = (function (){var statearr_17196 = state_17177;(statearr_17196[17] = inst_17156__$1);
return statearr_17196;
})();if(cljs.core.truth_(inst_17156__$1))
{var statearr_17197_18344 = state_17177__$1;(statearr_17197_18344[1] = 17);
} else
{var statearr_17198_18345 = state_17177__$1;(statearr_17198_18345[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17178 === 13))
{var inst_17173 = (state_17177[2]);var state_17177__$1 = state_17177;var statearr_17199_18346 = state_17177__$1;(statearr_17199_18346[2] = inst_17173);
(statearr_17199_18346[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17178 === 14))
{var inst_17142 = (state_17177[16]);var inst_17149 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_17142);var state_17177__$1 = state_17177;var statearr_17200_18347 = state_17177__$1;(statearr_17200_18347[2] = inst_17149);
(statearr_17200_18347[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17178 === 15))
{var state_17177__$1 = state_17177;var statearr_17201_18348 = state_17177__$1;(statearr_17201_18348[2] = null);
(statearr_17201_18348[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17178 === 16))
{var inst_17152 = (state_17177[2]);var inst_17153 = calc_state.call(null);var inst_17126 = inst_17153;var state_17177__$1 = (function (){var statearr_17202 = state_17177;(statearr_17202[8] = inst_17126);
(statearr_17202[18] = inst_17152);
return statearr_17202;
})();var statearr_17203_18349 = state_17177__$1;(statearr_17203_18349[2] = null);
(statearr_17203_18349[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17178 === 17))
{var inst_17156 = (state_17177[17]);var state_17177__$1 = state_17177;var statearr_17204_18350 = state_17177__$1;(statearr_17204_18350[2] = inst_17156);
(statearr_17204_18350[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17178 === 18))
{var inst_17137 = (state_17177[13]);var inst_17136 = (state_17177[14]);var inst_17142 = (state_17177[16]);var inst_17159 = cljs.core.empty_QMARK_.call(null,inst_17137);var inst_17160 = inst_17136.call(null,inst_17142);var inst_17161 = cljs.core.not.call(null,inst_17160);var inst_17162 = (inst_17159) && (inst_17161);var state_17177__$1 = state_17177;var statearr_17205_18351 = state_17177__$1;(statearr_17205_18351[2] = inst_17162);
(statearr_17205_18351[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17178 === 19))
{var inst_17164 = (state_17177[2]);var state_17177__$1 = state_17177;if(cljs.core.truth_(inst_17164))
{var statearr_17206_18352 = state_17177__$1;(statearr_17206_18352[1] = 20);
} else
{var statearr_17207_18353 = state_17177__$1;(statearr_17207_18353[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17178 === 20))
{var inst_17141 = (state_17177[15]);var state_17177__$1 = state_17177;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17177__$1,23,out,inst_17141);
} else
{if((state_val_17178 === 21))
{var state_17177__$1 = state_17177;var statearr_17208_18354 = state_17177__$1;(statearr_17208_18354[2] = null);
(statearr_17208_18354[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17178 === 22))
{var inst_17134 = (state_17177[12]);var inst_17170 = (state_17177[2]);var inst_17126 = inst_17134;var state_17177__$1 = (function (){var statearr_17209 = state_17177;(statearr_17209[19] = inst_17170);
(statearr_17209[8] = inst_17126);
return statearr_17209;
})();var statearr_17210_18355 = state_17177__$1;(statearr_17210_18355[2] = null);
(statearr_17210_18355[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17178 === 23))
{var inst_17167 = (state_17177[2]);var state_17177__$1 = state_17177;var statearr_17211_18356 = state_17177__$1;(statearr_17211_18356[2] = inst_17167);
(statearr_17211_18356[1] = 22);
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
});})(c__13601__auto___18330,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__13531__auto__,c__13601__auto___18330,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__13532__auto__ = null;
var state_machine__13532__auto____0 = (function (){var statearr_17215 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17215[0] = state_machine__13532__auto__);
(statearr_17215[1] = 1);
return statearr_17215;
});
var state_machine__13532__auto____1 = (function (state_17177){while(true){
var ret_value__13533__auto__ = (function (){try{while(true){
var result__13534__auto__ = switch__13531__auto__.call(null,state_17177);if(cljs.core.keyword_identical_QMARK_.call(null,result__13534__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13534__auto__;
}
break;
}
}catch (e17216){if((e17216 instanceof Object))
{var ex__13535__auto__ = e17216;var statearr_17217_18357 = state_17177;(statearr_17217_18357[5] = ex__13535__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17177);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17216;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13533__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18358 = state_17177;
state_17177 = G__18358;
continue;
}
} else
{return ret_value__13533__auto__;
}
break;
}
});
state_machine__13532__auto__ = function(state_17177){
switch(arguments.length){
case 0:
return state_machine__13532__auto____0.call(this);
case 1:
return state_machine__13532__auto____1.call(this,state_17177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13532__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13532__auto____0;
state_machine__13532__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13532__auto____1;
return state_machine__13532__auto__;
})()
;})(switch__13531__auto__,c__13601__auto___18330,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__13603__auto__ = (function (){var statearr_17218 = f__13602__auto__.call(null);(statearr_17218[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13601__auto___18330);
return statearr_17218;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13603__auto__);
});})(c__13601__auto___18330,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj17220 = {};return obj17220;
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
return (function (p1__17221_SHARP_){if(cljs.core.truth_(p1__17221_SHARP_.call(null,topic)))
{return p1__17221_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__17221_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4884__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t17346 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17346 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta17347){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta17347 = meta17347;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17346.cljs$lang$type = true;
cljs.core.async.t17346.cljs$lang$ctorStr = "cljs.core.async/t17346";
cljs.core.async.t17346.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async/t17346");
});})(mults,ensure_mult))
;
cljs.core.async.t17346.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t17346.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t17346.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t17346.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t17346.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t17346.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t17346.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t17346.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_17348){var self__ = this;
var _17348__$1 = this;return self__.meta17347;
});})(mults,ensure_mult))
;
cljs.core.async.t17346.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_17348,meta17347__$1){var self__ = this;
var _17348__$1 = this;return (new cljs.core.async.t17346(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta17347__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t17346 = ((function (mults,ensure_mult){
return (function __GT_t17346(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta17347){return (new cljs.core.async.t17346(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta17347));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t17346(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__13601__auto___18359 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13601__auto___18359,mults,ensure_mult,p){
return (function (){var f__13602__auto__ = (function (){var switch__13531__auto__ = ((function (c__13601__auto___18359,mults,ensure_mult,p){
return (function (state_17422){var state_val_17423 = (state_17422[1]);if((state_val_17423 === 1))
{var state_17422__$1 = state_17422;var statearr_17424_18360 = state_17422__$1;(statearr_17424_18360[2] = null);
(statearr_17424_18360[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17423 === 2))
{var state_17422__$1 = state_17422;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17422__$1,4,ch);
} else
{if((state_val_17423 === 3))
{var inst_17420 = (state_17422[2]);var state_17422__$1 = state_17422;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17422__$1,inst_17420);
} else
{if((state_val_17423 === 4))
{var inst_17351 = (state_17422[7]);var inst_17351__$1 = (state_17422[2]);var inst_17352 = (inst_17351__$1 == null);var state_17422__$1 = (function (){var statearr_17425 = state_17422;(statearr_17425[7] = inst_17351__$1);
return statearr_17425;
})();if(cljs.core.truth_(inst_17352))
{var statearr_17426_18361 = state_17422__$1;(statearr_17426_18361[1] = 5);
} else
{var statearr_17427_18362 = state_17422__$1;(statearr_17427_18362[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17423 === 5))
{var inst_17358 = cljs.core.deref.call(null,mults);var inst_17359 = cljs.core.vals.call(null,inst_17358);var inst_17360 = cljs.core.seq.call(null,inst_17359);var inst_17361 = inst_17360;var inst_17362 = null;var inst_17363 = 0;var inst_17364 = 0;var state_17422__$1 = (function (){var statearr_17428 = state_17422;(statearr_17428[8] = inst_17363);
(statearr_17428[9] = inst_17362);
(statearr_17428[10] = inst_17364);
(statearr_17428[11] = inst_17361);
return statearr_17428;
})();var statearr_17429_18363 = state_17422__$1;(statearr_17429_18363[2] = null);
(statearr_17429_18363[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17423 === 6))
{var inst_17399 = (state_17422[12]);var inst_17351 = (state_17422[7]);var inst_17401 = (state_17422[13]);var inst_17399__$1 = topic_fn.call(null,inst_17351);var inst_17400 = cljs.core.deref.call(null,mults);var inst_17401__$1 = cljs.core.get.call(null,inst_17400,inst_17399__$1);var state_17422__$1 = (function (){var statearr_17430 = state_17422;(statearr_17430[12] = inst_17399__$1);
(statearr_17430[13] = inst_17401__$1);
return statearr_17430;
})();if(cljs.core.truth_(inst_17401__$1))
{var statearr_17431_18364 = state_17422__$1;(statearr_17431_18364[1] = 19);
} else
{var statearr_17432_18365 = state_17422__$1;(statearr_17432_18365[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17423 === 7))
{var inst_17418 = (state_17422[2]);var state_17422__$1 = state_17422;var statearr_17433_18366 = state_17422__$1;(statearr_17433_18366[2] = inst_17418);
(statearr_17433_18366[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17423 === 8))
{var inst_17363 = (state_17422[8]);var inst_17364 = (state_17422[10]);var inst_17366 = (inst_17364 < inst_17363);var inst_17367 = inst_17366;var state_17422__$1 = state_17422;if(cljs.core.truth_(inst_17367))
{var statearr_17437_18367 = state_17422__$1;(statearr_17437_18367[1] = 10);
} else
{var statearr_17438_18368 = state_17422__$1;(statearr_17438_18368[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17423 === 9))
{var inst_17397 = (state_17422[2]);var state_17422__$1 = state_17422;var statearr_17439_18369 = state_17422__$1;(statearr_17439_18369[2] = inst_17397);
(statearr_17439_18369[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17423 === 10))
{var inst_17363 = (state_17422[8]);var inst_17362 = (state_17422[9]);var inst_17364 = (state_17422[10]);var inst_17361 = (state_17422[11]);var inst_17369 = cljs.core._nth.call(null,inst_17362,inst_17364);var inst_17370 = cljs.core.async.muxch_STAR_.call(null,inst_17369);var inst_17371 = cljs.core.async.close_BANG_.call(null,inst_17370);var inst_17372 = (inst_17364 + 1);var tmp17434 = inst_17363;var tmp17435 = inst_17362;var tmp17436 = inst_17361;var inst_17361__$1 = tmp17436;var inst_17362__$1 = tmp17435;var inst_17363__$1 = tmp17434;var inst_17364__$1 = inst_17372;var state_17422__$1 = (function (){var statearr_17440 = state_17422;(statearr_17440[14] = inst_17371);
(statearr_17440[8] = inst_17363__$1);
(statearr_17440[9] = inst_17362__$1);
(statearr_17440[10] = inst_17364__$1);
(statearr_17440[11] = inst_17361__$1);
return statearr_17440;
})();var statearr_17441_18370 = state_17422__$1;(statearr_17441_18370[2] = null);
(statearr_17441_18370[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17423 === 11))
{var inst_17361 = (state_17422[11]);var inst_17375 = (state_17422[15]);var inst_17375__$1 = cljs.core.seq.call(null,inst_17361);var state_17422__$1 = (function (){var statearr_17442 = state_17422;(statearr_17442[15] = inst_17375__$1);
return statearr_17442;
})();if(inst_17375__$1)
{var statearr_17443_18371 = state_17422__$1;(statearr_17443_18371[1] = 13);
} else
{var statearr_17444_18372 = state_17422__$1;(statearr_17444_18372[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17423 === 12))
{var inst_17395 = (state_17422[2]);var state_17422__$1 = state_17422;var statearr_17445_18373 = state_17422__$1;(statearr_17445_18373[2] = inst_17395);
(statearr_17445_18373[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17423 === 13))
{var inst_17375 = (state_17422[15]);var inst_17377 = cljs.core.chunked_seq_QMARK_.call(null,inst_17375);var state_17422__$1 = state_17422;if(inst_17377)
{var statearr_17446_18374 = state_17422__$1;(statearr_17446_18374[1] = 16);
} else
{var statearr_17447_18375 = state_17422__$1;(statearr_17447_18375[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17423 === 14))
{var state_17422__$1 = state_17422;var statearr_17448_18376 = state_17422__$1;(statearr_17448_18376[2] = null);
(statearr_17448_18376[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17423 === 15))
{var inst_17393 = (state_17422[2]);var state_17422__$1 = state_17422;var statearr_17449_18377 = state_17422__$1;(statearr_17449_18377[2] = inst_17393);
(statearr_17449_18377[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17423 === 16))
{var inst_17375 = (state_17422[15]);var inst_17379 = cljs.core.chunk_first.call(null,inst_17375);var inst_17380 = cljs.core.chunk_rest.call(null,inst_17375);var inst_17381 = cljs.core.count.call(null,inst_17379);var inst_17361 = inst_17380;var inst_17362 = inst_17379;var inst_17363 = inst_17381;var inst_17364 = 0;var state_17422__$1 = (function (){var statearr_17450 = state_17422;(statearr_17450[8] = inst_17363);
(statearr_17450[9] = inst_17362);
(statearr_17450[10] = inst_17364);
(statearr_17450[11] = inst_17361);
return statearr_17450;
})();var statearr_17451_18378 = state_17422__$1;(statearr_17451_18378[2] = null);
(statearr_17451_18378[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17423 === 17))
{var inst_17375 = (state_17422[15]);var inst_17384 = cljs.core.first.call(null,inst_17375);var inst_17385 = cljs.core.async.muxch_STAR_.call(null,inst_17384);var inst_17386 = cljs.core.async.close_BANG_.call(null,inst_17385);var inst_17387 = cljs.core.next.call(null,inst_17375);var inst_17361 = inst_17387;var inst_17362 = null;var inst_17363 = 0;var inst_17364 = 0;var state_17422__$1 = (function (){var statearr_17452 = state_17422;(statearr_17452[8] = inst_17363);
(statearr_17452[9] = inst_17362);
(statearr_17452[10] = inst_17364);
(statearr_17452[11] = inst_17361);
(statearr_17452[16] = inst_17386);
return statearr_17452;
})();var statearr_17453_18379 = state_17422__$1;(statearr_17453_18379[2] = null);
(statearr_17453_18379[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17423 === 18))
{var inst_17390 = (state_17422[2]);var state_17422__$1 = state_17422;var statearr_17454_18380 = state_17422__$1;(statearr_17454_18380[2] = inst_17390);
(statearr_17454_18380[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17423 === 19))
{var state_17422__$1 = state_17422;var statearr_17455_18381 = state_17422__$1;(statearr_17455_18381[2] = null);
(statearr_17455_18381[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17423 === 20))
{var state_17422__$1 = state_17422;var statearr_17456_18382 = state_17422__$1;(statearr_17456_18382[2] = null);
(statearr_17456_18382[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17423 === 21))
{var inst_17415 = (state_17422[2]);var state_17422__$1 = (function (){var statearr_17457 = state_17422;(statearr_17457[17] = inst_17415);
return statearr_17457;
})();var statearr_17458_18383 = state_17422__$1;(statearr_17458_18383[2] = null);
(statearr_17458_18383[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17423 === 22))
{var inst_17412 = (state_17422[2]);var state_17422__$1 = state_17422;var statearr_17459_18384 = state_17422__$1;(statearr_17459_18384[2] = inst_17412);
(statearr_17459_18384[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17423 === 23))
{var inst_17399 = (state_17422[12]);var inst_17403 = (state_17422[2]);var inst_17404 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_17399);var state_17422__$1 = (function (){var statearr_17460 = state_17422;(statearr_17460[18] = inst_17403);
return statearr_17460;
})();var statearr_17461_18385 = state_17422__$1;(statearr_17461_18385[2] = inst_17404);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17422__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17423 === 24))
{var inst_17351 = (state_17422[7]);var inst_17401 = (state_17422[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17422,23,Object,null,22);var inst_17408 = cljs.core.async.muxch_STAR_.call(null,inst_17401);var state_17422__$1 = state_17422;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17422__$1,25,inst_17408,inst_17351);
} else
{if((state_val_17423 === 25))
{var inst_17410 = (state_17422[2]);var state_17422__$1 = state_17422;var statearr_17462_18386 = state_17422__$1;(statearr_17462_18386[2] = inst_17410);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17422__$1);
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
});})(c__13601__auto___18359,mults,ensure_mult,p))
;return ((function (switch__13531__auto__,c__13601__auto___18359,mults,ensure_mult,p){
return (function() {
var state_machine__13532__auto__ = null;
var state_machine__13532__auto____0 = (function (){var statearr_17466 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17466[0] = state_machine__13532__auto__);
(statearr_17466[1] = 1);
return statearr_17466;
});
var state_machine__13532__auto____1 = (function (state_17422){while(true){
var ret_value__13533__auto__ = (function (){try{while(true){
var result__13534__auto__ = switch__13531__auto__.call(null,state_17422);if(cljs.core.keyword_identical_QMARK_.call(null,result__13534__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13534__auto__;
}
break;
}
}catch (e17467){if((e17467 instanceof Object))
{var ex__13535__auto__ = e17467;var statearr_17468_18387 = state_17422;(statearr_17468_18387[5] = ex__13535__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17422);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17467;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13533__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18388 = state_17422;
state_17422 = G__18388;
continue;
}
} else
{return ret_value__13533__auto__;
}
break;
}
});
state_machine__13532__auto__ = function(state_17422){
switch(arguments.length){
case 0:
return state_machine__13532__auto____0.call(this);
case 1:
return state_machine__13532__auto____1.call(this,state_17422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13532__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13532__auto____0;
state_machine__13532__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13532__auto____1;
return state_machine__13532__auto__;
})()
;})(switch__13531__auto__,c__13601__auto___18359,mults,ensure_mult,p))
})();var state__13603__auto__ = (function (){var statearr_17469 = f__13602__auto__.call(null);(statearr_17469[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13601__auto___18359);
return statearr_17469;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13603__auto__);
});})(c__13601__auto___18359,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__13601__auto___18389 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13601__auto___18389,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__13602__auto__ = (function (){var switch__13531__auto__ = ((function (c__13601__auto___18389,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_17576){var state_val_17577 = (state_17576[1]);if((state_val_17577 === 1))
{var state_17576__$1 = state_17576;var statearr_17578_18390 = state_17576__$1;(statearr_17578_18390[2] = null);
(statearr_17578_18390[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17577 === 2))
{var inst_17539 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_17540 = 0;var state_17576__$1 = (function (){var statearr_17579 = state_17576;(statearr_17579[7] = inst_17539);
(statearr_17579[8] = inst_17540);
return statearr_17579;
})();var statearr_17580_18391 = state_17576__$1;(statearr_17580_18391[2] = null);
(statearr_17580_18391[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17577 === 3))
{var inst_17574 = (state_17576[2]);var state_17576__$1 = state_17576;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17576__$1,inst_17574);
} else
{if((state_val_17577 === 4))
{var inst_17540 = (state_17576[8]);var inst_17542 = (inst_17540 < cnt);var state_17576__$1 = state_17576;if(cljs.core.truth_(inst_17542))
{var statearr_17581_18392 = state_17576__$1;(statearr_17581_18392[1] = 6);
} else
{var statearr_17582_18393 = state_17576__$1;(statearr_17582_18393[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17577 === 5))
{var inst_17560 = (state_17576[2]);var state_17576__$1 = (function (){var statearr_17583 = state_17576;(statearr_17583[9] = inst_17560);
return statearr_17583;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17576__$1,12,dchan);
} else
{if((state_val_17577 === 6))
{var state_17576__$1 = state_17576;var statearr_17584_18394 = state_17576__$1;(statearr_17584_18394[2] = null);
(statearr_17584_18394[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17577 === 7))
{var state_17576__$1 = state_17576;var statearr_17585_18395 = state_17576__$1;(statearr_17585_18395[2] = null);
(statearr_17585_18395[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17577 === 8))
{var inst_17558 = (state_17576[2]);var state_17576__$1 = state_17576;var statearr_17586_18396 = state_17576__$1;(statearr_17586_18396[2] = inst_17558);
(statearr_17586_18396[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17577 === 9))
{var inst_17540 = (state_17576[8]);var inst_17553 = (state_17576[2]);var inst_17554 = (inst_17540 + 1);var inst_17540__$1 = inst_17554;var state_17576__$1 = (function (){var statearr_17587 = state_17576;(statearr_17587[10] = inst_17553);
(statearr_17587[8] = inst_17540__$1);
return statearr_17587;
})();var statearr_17588_18397 = state_17576__$1;(statearr_17588_18397[2] = null);
(statearr_17588_18397[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17577 === 10))
{var inst_17544 = (state_17576[2]);var inst_17545 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_17576__$1 = (function (){var statearr_17589 = state_17576;(statearr_17589[11] = inst_17544);
return statearr_17589;
})();var statearr_17590_18398 = state_17576__$1;(statearr_17590_18398[2] = inst_17545);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17576__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17577 === 11))
{var inst_17540 = (state_17576[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17576,10,Object,null,9);var inst_17549 = chs__$1.call(null,inst_17540);var inst_17550 = done.call(null,inst_17540);var inst_17551 = cljs.core.async.take_BANG_.call(null,inst_17549,inst_17550);var state_17576__$1 = state_17576;var statearr_17591_18399 = state_17576__$1;(statearr_17591_18399[2] = inst_17551);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17576__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17577 === 12))
{var inst_17562 = (state_17576[12]);var inst_17562__$1 = (state_17576[2]);var inst_17563 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_17562__$1);var state_17576__$1 = (function (){var statearr_17592 = state_17576;(statearr_17592[12] = inst_17562__$1);
return statearr_17592;
})();if(cljs.core.truth_(inst_17563))
{var statearr_17593_18400 = state_17576__$1;(statearr_17593_18400[1] = 13);
} else
{var statearr_17594_18401 = state_17576__$1;(statearr_17594_18401[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17577 === 13))
{var inst_17565 = cljs.core.async.close_BANG_.call(null,out);var state_17576__$1 = state_17576;var statearr_17595_18402 = state_17576__$1;(statearr_17595_18402[2] = inst_17565);
(statearr_17595_18402[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17577 === 14))
{var inst_17562 = (state_17576[12]);var inst_17567 = cljs.core.apply.call(null,f,inst_17562);var state_17576__$1 = state_17576;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17576__$1,16,out,inst_17567);
} else
{if((state_val_17577 === 15))
{var inst_17572 = (state_17576[2]);var state_17576__$1 = state_17576;var statearr_17596_18403 = state_17576__$1;(statearr_17596_18403[2] = inst_17572);
(statearr_17596_18403[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17577 === 16))
{var inst_17569 = (state_17576[2]);var state_17576__$1 = (function (){var statearr_17597 = state_17576;(statearr_17597[13] = inst_17569);
return statearr_17597;
})();var statearr_17598_18404 = state_17576__$1;(statearr_17598_18404[2] = null);
(statearr_17598_18404[1] = 2);
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
});})(c__13601__auto___18389,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__13531__auto__,c__13601__auto___18389,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__13532__auto__ = null;
var state_machine__13532__auto____0 = (function (){var statearr_17602 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17602[0] = state_machine__13532__auto__);
(statearr_17602[1] = 1);
return statearr_17602;
});
var state_machine__13532__auto____1 = (function (state_17576){while(true){
var ret_value__13533__auto__ = (function (){try{while(true){
var result__13534__auto__ = switch__13531__auto__.call(null,state_17576);if(cljs.core.keyword_identical_QMARK_.call(null,result__13534__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13534__auto__;
}
break;
}
}catch (e17603){if((e17603 instanceof Object))
{var ex__13535__auto__ = e17603;var statearr_17604_18405 = state_17576;(statearr_17604_18405[5] = ex__13535__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17576);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17603;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13533__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18406 = state_17576;
state_17576 = G__18406;
continue;
}
} else
{return ret_value__13533__auto__;
}
break;
}
});
state_machine__13532__auto__ = function(state_17576){
switch(arguments.length){
case 0:
return state_machine__13532__auto____0.call(this);
case 1:
return state_machine__13532__auto____1.call(this,state_17576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13532__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13532__auto____0;
state_machine__13532__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13532__auto____1;
return state_machine__13532__auto__;
})()
;})(switch__13531__auto__,c__13601__auto___18389,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__13603__auto__ = (function (){var statearr_17605 = f__13602__auto__.call(null);(statearr_17605[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13601__auto___18389);
return statearr_17605;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13603__auto__);
});})(c__13601__auto___18389,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13601__auto___18407 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13601__auto___18407,out){
return (function (){var f__13602__auto__ = (function (){var switch__13531__auto__ = ((function (c__13601__auto___18407,out){
return (function (state_17689){var state_val_17690 = (state_17689[1]);if((state_val_17690 === 1))
{var inst_17660 = cljs.core.vec.call(null,chs);var inst_17661 = inst_17660;var state_17689__$1 = (function (){var statearr_17691 = state_17689;(statearr_17691[7] = inst_17661);
return statearr_17691;
})();var statearr_17692_18408 = state_17689__$1;(statearr_17692_18408[2] = null);
(statearr_17692_18408[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17690 === 2))
{var inst_17661 = (state_17689[7]);var inst_17663 = cljs.core.count.call(null,inst_17661);var inst_17664 = (inst_17663 > 0);var state_17689__$1 = state_17689;if(cljs.core.truth_(inst_17664))
{var statearr_17693_18409 = state_17689__$1;(statearr_17693_18409[1] = 4);
} else
{var statearr_17694_18410 = state_17689__$1;(statearr_17694_18410[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17690 === 3))
{var inst_17687 = (state_17689[2]);var state_17689__$1 = state_17689;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17689__$1,inst_17687);
} else
{if((state_val_17690 === 4))
{var inst_17661 = (state_17689[7]);var state_17689__$1 = state_17689;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_17689__$1,7,inst_17661);
} else
{if((state_val_17690 === 5))
{var inst_17683 = cljs.core.async.close_BANG_.call(null,out);var state_17689__$1 = state_17689;var statearr_17695_18411 = state_17689__$1;(statearr_17695_18411[2] = inst_17683);
(statearr_17695_18411[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17690 === 6))
{var inst_17685 = (state_17689[2]);var state_17689__$1 = state_17689;var statearr_17696_18412 = state_17689__$1;(statearr_17696_18412[2] = inst_17685);
(statearr_17696_18412[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17690 === 7))
{var inst_17669 = (state_17689[8]);var inst_17668 = (state_17689[9]);var inst_17668__$1 = (state_17689[2]);var inst_17669__$1 = cljs.core.nth.call(null,inst_17668__$1,0,null);var inst_17670 = cljs.core.nth.call(null,inst_17668__$1,1,null);var inst_17671 = (inst_17669__$1 == null);var state_17689__$1 = (function (){var statearr_17697 = state_17689;(statearr_17697[10] = inst_17670);
(statearr_17697[8] = inst_17669__$1);
(statearr_17697[9] = inst_17668__$1);
return statearr_17697;
})();if(cljs.core.truth_(inst_17671))
{var statearr_17698_18413 = state_17689__$1;(statearr_17698_18413[1] = 8);
} else
{var statearr_17699_18414 = state_17689__$1;(statearr_17699_18414[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17690 === 8))
{var inst_17670 = (state_17689[10]);var inst_17669 = (state_17689[8]);var inst_17668 = (state_17689[9]);var inst_17661 = (state_17689[7]);var inst_17673 = (function (){var c = inst_17670;var v = inst_17669;var vec__17666 = inst_17668;var cs = inst_17661;return ((function (c,v,vec__17666,cs,inst_17670,inst_17669,inst_17668,inst_17661,state_val_17690,c__13601__auto___18407,out){
return (function (p1__17606_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__17606_SHARP_);
});
;})(c,v,vec__17666,cs,inst_17670,inst_17669,inst_17668,inst_17661,state_val_17690,c__13601__auto___18407,out))
})();var inst_17674 = cljs.core.filterv.call(null,inst_17673,inst_17661);var inst_17661__$1 = inst_17674;var state_17689__$1 = (function (){var statearr_17700 = state_17689;(statearr_17700[7] = inst_17661__$1);
return statearr_17700;
})();var statearr_17701_18415 = state_17689__$1;(statearr_17701_18415[2] = null);
(statearr_17701_18415[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17690 === 9))
{var inst_17669 = (state_17689[8]);var state_17689__$1 = state_17689;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17689__$1,11,out,inst_17669);
} else
{if((state_val_17690 === 10))
{var inst_17681 = (state_17689[2]);var state_17689__$1 = state_17689;var statearr_17703_18416 = state_17689__$1;(statearr_17703_18416[2] = inst_17681);
(statearr_17703_18416[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17690 === 11))
{var inst_17661 = (state_17689[7]);var inst_17678 = (state_17689[2]);var tmp17702 = inst_17661;var inst_17661__$1 = tmp17702;var state_17689__$1 = (function (){var statearr_17704 = state_17689;(statearr_17704[11] = inst_17678);
(statearr_17704[7] = inst_17661__$1);
return statearr_17704;
})();var statearr_17705_18417 = state_17689__$1;(statearr_17705_18417[2] = null);
(statearr_17705_18417[1] = 2);
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
});})(c__13601__auto___18407,out))
;return ((function (switch__13531__auto__,c__13601__auto___18407,out){
return (function() {
var state_machine__13532__auto__ = null;
var state_machine__13532__auto____0 = (function (){var statearr_17709 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17709[0] = state_machine__13532__auto__);
(statearr_17709[1] = 1);
return statearr_17709;
});
var state_machine__13532__auto____1 = (function (state_17689){while(true){
var ret_value__13533__auto__ = (function (){try{while(true){
var result__13534__auto__ = switch__13531__auto__.call(null,state_17689);if(cljs.core.keyword_identical_QMARK_.call(null,result__13534__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13534__auto__;
}
break;
}
}catch (e17710){if((e17710 instanceof Object))
{var ex__13535__auto__ = e17710;var statearr_17711_18418 = state_17689;(statearr_17711_18418[5] = ex__13535__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17689);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17710;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13533__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18419 = state_17689;
state_17689 = G__18419;
continue;
}
} else
{return ret_value__13533__auto__;
}
break;
}
});
state_machine__13532__auto__ = function(state_17689){
switch(arguments.length){
case 0:
return state_machine__13532__auto____0.call(this);
case 1:
return state_machine__13532__auto____1.call(this,state_17689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13532__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13532__auto____0;
state_machine__13532__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13532__auto____1;
return state_machine__13532__auto__;
})()
;})(switch__13531__auto__,c__13601__auto___18407,out))
})();var state__13603__auto__ = (function (){var statearr_17712 = f__13602__auto__.call(null);(statearr_17712[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13601__auto___18407);
return statearr_17712;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13603__auto__);
});})(c__13601__auto___18407,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13601__auto___18420 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13601__auto___18420,out){
return (function (){var f__13602__auto__ = (function (){var switch__13531__auto__ = ((function (c__13601__auto___18420,out){
return (function (state_17782){var state_val_17783 = (state_17782[1]);if((state_val_17783 === 1))
{var inst_17759 = 0;var state_17782__$1 = (function (){var statearr_17784 = state_17782;(statearr_17784[7] = inst_17759);
return statearr_17784;
})();var statearr_17785_18421 = state_17782__$1;(statearr_17785_18421[2] = null);
(statearr_17785_18421[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17783 === 2))
{var inst_17759 = (state_17782[7]);var inst_17761 = (inst_17759 < n);var state_17782__$1 = state_17782;if(cljs.core.truth_(inst_17761))
{var statearr_17786_18422 = state_17782__$1;(statearr_17786_18422[1] = 4);
} else
{var statearr_17787_18423 = state_17782__$1;(statearr_17787_18423[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17783 === 3))
{var inst_17779 = (state_17782[2]);var inst_17780 = cljs.core.async.close_BANG_.call(null,out);var state_17782__$1 = (function (){var statearr_17788 = state_17782;(statearr_17788[8] = inst_17779);
return statearr_17788;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17782__$1,inst_17780);
} else
{if((state_val_17783 === 4))
{var state_17782__$1 = state_17782;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17782__$1,7,ch);
} else
{if((state_val_17783 === 5))
{var state_17782__$1 = state_17782;var statearr_17789_18424 = state_17782__$1;(statearr_17789_18424[2] = null);
(statearr_17789_18424[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17783 === 6))
{var inst_17777 = (state_17782[2]);var state_17782__$1 = state_17782;var statearr_17790_18425 = state_17782__$1;(statearr_17790_18425[2] = inst_17777);
(statearr_17790_18425[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17783 === 7))
{var inst_17764 = (state_17782[9]);var inst_17764__$1 = (state_17782[2]);var inst_17765 = (inst_17764__$1 == null);var inst_17766 = cljs.core.not.call(null,inst_17765);var state_17782__$1 = (function (){var statearr_17791 = state_17782;(statearr_17791[9] = inst_17764__$1);
return statearr_17791;
})();if(inst_17766)
{var statearr_17792_18426 = state_17782__$1;(statearr_17792_18426[1] = 8);
} else
{var statearr_17793_18427 = state_17782__$1;(statearr_17793_18427[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17783 === 8))
{var inst_17764 = (state_17782[9]);var state_17782__$1 = state_17782;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17782__$1,11,out,inst_17764);
} else
{if((state_val_17783 === 9))
{var state_17782__$1 = state_17782;var statearr_17794_18428 = state_17782__$1;(statearr_17794_18428[2] = null);
(statearr_17794_18428[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17783 === 10))
{var inst_17774 = (state_17782[2]);var state_17782__$1 = state_17782;var statearr_17795_18429 = state_17782__$1;(statearr_17795_18429[2] = inst_17774);
(statearr_17795_18429[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17783 === 11))
{var inst_17759 = (state_17782[7]);var inst_17769 = (state_17782[2]);var inst_17770 = (inst_17759 + 1);var inst_17759__$1 = inst_17770;var state_17782__$1 = (function (){var statearr_17796 = state_17782;(statearr_17796[7] = inst_17759__$1);
(statearr_17796[10] = inst_17769);
return statearr_17796;
})();var statearr_17797_18430 = state_17782__$1;(statearr_17797_18430[2] = null);
(statearr_17797_18430[1] = 2);
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
});})(c__13601__auto___18420,out))
;return ((function (switch__13531__auto__,c__13601__auto___18420,out){
return (function() {
var state_machine__13532__auto__ = null;
var state_machine__13532__auto____0 = (function (){var statearr_17801 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_17801[0] = state_machine__13532__auto__);
(statearr_17801[1] = 1);
return statearr_17801;
});
var state_machine__13532__auto____1 = (function (state_17782){while(true){
var ret_value__13533__auto__ = (function (){try{while(true){
var result__13534__auto__ = switch__13531__auto__.call(null,state_17782);if(cljs.core.keyword_identical_QMARK_.call(null,result__13534__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13534__auto__;
}
break;
}
}catch (e17802){if((e17802 instanceof Object))
{var ex__13535__auto__ = e17802;var statearr_17803_18431 = state_17782;(statearr_17803_18431[5] = ex__13535__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17782);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17802;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13533__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18432 = state_17782;
state_17782 = G__18432;
continue;
}
} else
{return ret_value__13533__auto__;
}
break;
}
});
state_machine__13532__auto__ = function(state_17782){
switch(arguments.length){
case 0:
return state_machine__13532__auto____0.call(this);
case 1:
return state_machine__13532__auto____1.call(this,state_17782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13532__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13532__auto____0;
state_machine__13532__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13532__auto____1;
return state_machine__13532__auto__;
})()
;})(switch__13531__auto__,c__13601__auto___18420,out))
})();var state__13603__auto__ = (function (){var statearr_17804 = f__13602__auto__.call(null);(statearr_17804[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13601__auto___18420);
return statearr_17804;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13603__auto__);
});})(c__13601__auto___18420,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13601__auto___18433 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13601__auto___18433,out){
return (function (){var f__13602__auto__ = (function (){var switch__13531__auto__ = ((function (c__13601__auto___18433,out){
return (function (state_17876){var state_val_17877 = (state_17876[1]);if((state_val_17877 === 1))
{var inst_17853 = null;var state_17876__$1 = (function (){var statearr_17878 = state_17876;(statearr_17878[7] = inst_17853);
return statearr_17878;
})();var statearr_17879_18434 = state_17876__$1;(statearr_17879_18434[2] = null);
(statearr_17879_18434[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17877 === 2))
{var state_17876__$1 = state_17876;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17876__$1,4,ch);
} else
{if((state_val_17877 === 3))
{var inst_17873 = (state_17876[2]);var inst_17874 = cljs.core.async.close_BANG_.call(null,out);var state_17876__$1 = (function (){var statearr_17880 = state_17876;(statearr_17880[8] = inst_17873);
return statearr_17880;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17876__$1,inst_17874);
} else
{if((state_val_17877 === 4))
{var inst_17856 = (state_17876[9]);var inst_17856__$1 = (state_17876[2]);var inst_17857 = (inst_17856__$1 == null);var inst_17858 = cljs.core.not.call(null,inst_17857);var state_17876__$1 = (function (){var statearr_17881 = state_17876;(statearr_17881[9] = inst_17856__$1);
return statearr_17881;
})();if(inst_17858)
{var statearr_17882_18435 = state_17876__$1;(statearr_17882_18435[1] = 5);
} else
{var statearr_17883_18436 = state_17876__$1;(statearr_17883_18436[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17877 === 5))
{var inst_17853 = (state_17876[7]);var inst_17856 = (state_17876[9]);var inst_17860 = cljs.core._EQ_.call(null,inst_17856,inst_17853);var state_17876__$1 = state_17876;if(inst_17860)
{var statearr_17884_18437 = state_17876__$1;(statearr_17884_18437[1] = 8);
} else
{var statearr_17885_18438 = state_17876__$1;(statearr_17885_18438[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17877 === 6))
{var state_17876__$1 = state_17876;var statearr_17887_18439 = state_17876__$1;(statearr_17887_18439[2] = null);
(statearr_17887_18439[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17877 === 7))
{var inst_17871 = (state_17876[2]);var state_17876__$1 = state_17876;var statearr_17888_18440 = state_17876__$1;(statearr_17888_18440[2] = inst_17871);
(statearr_17888_18440[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17877 === 8))
{var inst_17853 = (state_17876[7]);var tmp17886 = inst_17853;var inst_17853__$1 = tmp17886;var state_17876__$1 = (function (){var statearr_17889 = state_17876;(statearr_17889[7] = inst_17853__$1);
return statearr_17889;
})();var statearr_17890_18441 = state_17876__$1;(statearr_17890_18441[2] = null);
(statearr_17890_18441[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17877 === 9))
{var inst_17856 = (state_17876[9]);var state_17876__$1 = state_17876;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17876__$1,11,out,inst_17856);
} else
{if((state_val_17877 === 10))
{var inst_17868 = (state_17876[2]);var state_17876__$1 = state_17876;var statearr_17891_18442 = state_17876__$1;(statearr_17891_18442[2] = inst_17868);
(statearr_17891_18442[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17877 === 11))
{var inst_17856 = (state_17876[9]);var inst_17865 = (state_17876[2]);var inst_17853 = inst_17856;var state_17876__$1 = (function (){var statearr_17892 = state_17876;(statearr_17892[7] = inst_17853);
(statearr_17892[10] = inst_17865);
return statearr_17892;
})();var statearr_17893_18443 = state_17876__$1;(statearr_17893_18443[2] = null);
(statearr_17893_18443[1] = 2);
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
});})(c__13601__auto___18433,out))
;return ((function (switch__13531__auto__,c__13601__auto___18433,out){
return (function() {
var state_machine__13532__auto__ = null;
var state_machine__13532__auto____0 = (function (){var statearr_17897 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_17897[0] = state_machine__13532__auto__);
(statearr_17897[1] = 1);
return statearr_17897;
});
var state_machine__13532__auto____1 = (function (state_17876){while(true){
var ret_value__13533__auto__ = (function (){try{while(true){
var result__13534__auto__ = switch__13531__auto__.call(null,state_17876);if(cljs.core.keyword_identical_QMARK_.call(null,result__13534__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13534__auto__;
}
break;
}
}catch (e17898){if((e17898 instanceof Object))
{var ex__13535__auto__ = e17898;var statearr_17899_18444 = state_17876;(statearr_17899_18444[5] = ex__13535__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17876);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17898;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13533__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18445 = state_17876;
state_17876 = G__18445;
continue;
}
} else
{return ret_value__13533__auto__;
}
break;
}
});
state_machine__13532__auto__ = function(state_17876){
switch(arguments.length){
case 0:
return state_machine__13532__auto____0.call(this);
case 1:
return state_machine__13532__auto____1.call(this,state_17876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13532__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13532__auto____0;
state_machine__13532__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13532__auto____1;
return state_machine__13532__auto__;
})()
;})(switch__13531__auto__,c__13601__auto___18433,out))
})();var state__13603__auto__ = (function (){var statearr_17900 = f__13602__auto__.call(null);(statearr_17900[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13601__auto___18433);
return statearr_17900;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13603__auto__);
});})(c__13601__auto___18433,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13601__auto___18446 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13601__auto___18446,out){
return (function (){var f__13602__auto__ = (function (){var switch__13531__auto__ = ((function (c__13601__auto___18446,out){
return (function (state_18005){var state_val_18006 = (state_18005[1]);if((state_val_18006 === 1))
{var inst_17968 = (new Array(n));var inst_17969 = inst_17968;var inst_17970 = 0;var state_18005__$1 = (function (){var statearr_18007 = state_18005;(statearr_18007[7] = inst_17970);
(statearr_18007[8] = inst_17969);
return statearr_18007;
})();var statearr_18008_18447 = state_18005__$1;(statearr_18008_18447[2] = null);
(statearr_18008_18447[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18006 === 2))
{var state_18005__$1 = state_18005;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18005__$1,4,ch);
} else
{if((state_val_18006 === 3))
{var inst_18003 = (state_18005[2]);var state_18005__$1 = state_18005;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18005__$1,inst_18003);
} else
{if((state_val_18006 === 4))
{var inst_17973 = (state_18005[9]);var inst_17973__$1 = (state_18005[2]);var inst_17974 = (inst_17973__$1 == null);var inst_17975 = cljs.core.not.call(null,inst_17974);var state_18005__$1 = (function (){var statearr_18009 = state_18005;(statearr_18009[9] = inst_17973__$1);
return statearr_18009;
})();if(inst_17975)
{var statearr_18010_18448 = state_18005__$1;(statearr_18010_18448[1] = 5);
} else
{var statearr_18011_18449 = state_18005__$1;(statearr_18011_18449[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18006 === 5))
{var inst_17973 = (state_18005[9]);var inst_17970 = (state_18005[7]);var inst_17978 = (state_18005[10]);var inst_17969 = (state_18005[8]);var inst_17977 = (inst_17969[inst_17970] = inst_17973);var inst_17978__$1 = (inst_17970 + 1);var inst_17979 = (inst_17978__$1 < n);var state_18005__$1 = (function (){var statearr_18012 = state_18005;(statearr_18012[10] = inst_17978__$1);
(statearr_18012[11] = inst_17977);
return statearr_18012;
})();if(cljs.core.truth_(inst_17979))
{var statearr_18013_18450 = state_18005__$1;(statearr_18013_18450[1] = 8);
} else
{var statearr_18014_18451 = state_18005__$1;(statearr_18014_18451[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18006 === 6))
{var inst_17970 = (state_18005[7]);var inst_17991 = (inst_17970 > 0);var state_18005__$1 = state_18005;if(cljs.core.truth_(inst_17991))
{var statearr_18016_18452 = state_18005__$1;(statearr_18016_18452[1] = 12);
} else
{var statearr_18017_18453 = state_18005__$1;(statearr_18017_18453[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18006 === 7))
{var inst_18001 = (state_18005[2]);var state_18005__$1 = state_18005;var statearr_18018_18454 = state_18005__$1;(statearr_18018_18454[2] = inst_18001);
(statearr_18018_18454[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18006 === 8))
{var inst_17978 = (state_18005[10]);var inst_17969 = (state_18005[8]);var tmp18015 = inst_17969;var inst_17969__$1 = tmp18015;var inst_17970 = inst_17978;var state_18005__$1 = (function (){var statearr_18019 = state_18005;(statearr_18019[7] = inst_17970);
(statearr_18019[8] = inst_17969__$1);
return statearr_18019;
})();var statearr_18020_18455 = state_18005__$1;(statearr_18020_18455[2] = null);
(statearr_18020_18455[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18006 === 9))
{var inst_17969 = (state_18005[8]);var inst_17983 = cljs.core.vec.call(null,inst_17969);var state_18005__$1 = state_18005;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18005__$1,11,out,inst_17983);
} else
{if((state_val_18006 === 10))
{var inst_17989 = (state_18005[2]);var state_18005__$1 = state_18005;var statearr_18021_18456 = state_18005__$1;(statearr_18021_18456[2] = inst_17989);
(statearr_18021_18456[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18006 === 11))
{var inst_17985 = (state_18005[2]);var inst_17986 = (new Array(n));var inst_17969 = inst_17986;var inst_17970 = 0;var state_18005__$1 = (function (){var statearr_18022 = state_18005;(statearr_18022[7] = inst_17970);
(statearr_18022[12] = inst_17985);
(statearr_18022[8] = inst_17969);
return statearr_18022;
})();var statearr_18023_18457 = state_18005__$1;(statearr_18023_18457[2] = null);
(statearr_18023_18457[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18006 === 12))
{var inst_17969 = (state_18005[8]);var inst_17993 = cljs.core.vec.call(null,inst_17969);var state_18005__$1 = state_18005;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18005__$1,15,out,inst_17993);
} else
{if((state_val_18006 === 13))
{var state_18005__$1 = state_18005;var statearr_18024_18458 = state_18005__$1;(statearr_18024_18458[2] = null);
(statearr_18024_18458[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18006 === 14))
{var inst_17998 = (state_18005[2]);var inst_17999 = cljs.core.async.close_BANG_.call(null,out);var state_18005__$1 = (function (){var statearr_18025 = state_18005;(statearr_18025[13] = inst_17998);
return statearr_18025;
})();var statearr_18026_18459 = state_18005__$1;(statearr_18026_18459[2] = inst_17999);
(statearr_18026_18459[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18006 === 15))
{var inst_17995 = (state_18005[2]);var state_18005__$1 = state_18005;var statearr_18027_18460 = state_18005__$1;(statearr_18027_18460[2] = inst_17995);
(statearr_18027_18460[1] = 14);
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
});})(c__13601__auto___18446,out))
;return ((function (switch__13531__auto__,c__13601__auto___18446,out){
return (function() {
var state_machine__13532__auto__ = null;
var state_machine__13532__auto____0 = (function (){var statearr_18031 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18031[0] = state_machine__13532__auto__);
(statearr_18031[1] = 1);
return statearr_18031;
});
var state_machine__13532__auto____1 = (function (state_18005){while(true){
var ret_value__13533__auto__ = (function (){try{while(true){
var result__13534__auto__ = switch__13531__auto__.call(null,state_18005);if(cljs.core.keyword_identical_QMARK_.call(null,result__13534__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13534__auto__;
}
break;
}
}catch (e18032){if((e18032 instanceof Object))
{var ex__13535__auto__ = e18032;var statearr_18033_18461 = state_18005;(statearr_18033_18461[5] = ex__13535__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18005);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18032;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13533__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18462 = state_18005;
state_18005 = G__18462;
continue;
}
} else
{return ret_value__13533__auto__;
}
break;
}
});
state_machine__13532__auto__ = function(state_18005){
switch(arguments.length){
case 0:
return state_machine__13532__auto____0.call(this);
case 1:
return state_machine__13532__auto____1.call(this,state_18005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13532__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13532__auto____0;
state_machine__13532__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13532__auto____1;
return state_machine__13532__auto__;
})()
;})(switch__13531__auto__,c__13601__auto___18446,out))
})();var state__13603__auto__ = (function (){var statearr_18034 = f__13602__auto__.call(null);(statearr_18034[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13601__auto___18446);
return statearr_18034;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13603__auto__);
});})(c__13601__auto___18446,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13601__auto___18463 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13601__auto___18463,out){
return (function (){var f__13602__auto__ = (function (){var switch__13531__auto__ = ((function (c__13601__auto___18463,out){
return (function (state_18147){var state_val_18148 = (state_18147[1]);if((state_val_18148 === 1))
{var inst_18106 = [];var inst_18107 = inst_18106;var inst_18108 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_18147__$1 = (function (){var statearr_18149 = state_18147;(statearr_18149[7] = inst_18108);
(statearr_18149[8] = inst_18107);
return statearr_18149;
})();var statearr_18150_18464 = state_18147__$1;(statearr_18150_18464[2] = null);
(statearr_18150_18464[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18148 === 2))
{var state_18147__$1 = state_18147;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18147__$1,4,ch);
} else
{if((state_val_18148 === 3))
{var inst_18145 = (state_18147[2]);var state_18147__$1 = state_18147;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18147__$1,inst_18145);
} else
{if((state_val_18148 === 4))
{var inst_18111 = (state_18147[9]);var inst_18111__$1 = (state_18147[2]);var inst_18112 = (inst_18111__$1 == null);var inst_18113 = cljs.core.not.call(null,inst_18112);var state_18147__$1 = (function (){var statearr_18151 = state_18147;(statearr_18151[9] = inst_18111__$1);
return statearr_18151;
})();if(inst_18113)
{var statearr_18152_18465 = state_18147__$1;(statearr_18152_18465[1] = 5);
} else
{var statearr_18153_18466 = state_18147__$1;(statearr_18153_18466[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18148 === 5))
{var inst_18115 = (state_18147[10]);var inst_18111 = (state_18147[9]);var inst_18108 = (state_18147[7]);var inst_18115__$1 = f.call(null,inst_18111);var inst_18116 = cljs.core._EQ_.call(null,inst_18115__$1,inst_18108);var inst_18117 = cljs.core.keyword_identical_QMARK_.call(null,inst_18108,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_18118 = (inst_18116) || (inst_18117);var state_18147__$1 = (function (){var statearr_18154 = state_18147;(statearr_18154[10] = inst_18115__$1);
return statearr_18154;
})();if(cljs.core.truth_(inst_18118))
{var statearr_18155_18467 = state_18147__$1;(statearr_18155_18467[1] = 8);
} else
{var statearr_18156_18468 = state_18147__$1;(statearr_18156_18468[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18148 === 6))
{var inst_18107 = (state_18147[8]);var inst_18132 = inst_18107.length;var inst_18133 = (inst_18132 > 0);var state_18147__$1 = state_18147;if(cljs.core.truth_(inst_18133))
{var statearr_18158_18469 = state_18147__$1;(statearr_18158_18469[1] = 12);
} else
{var statearr_18159_18470 = state_18147__$1;(statearr_18159_18470[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18148 === 7))
{var inst_18143 = (state_18147[2]);var state_18147__$1 = state_18147;var statearr_18160_18471 = state_18147__$1;(statearr_18160_18471[2] = inst_18143);
(statearr_18160_18471[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18148 === 8))
{var inst_18115 = (state_18147[10]);var inst_18111 = (state_18147[9]);var inst_18107 = (state_18147[8]);var inst_18120 = inst_18107.push(inst_18111);var tmp18157 = inst_18107;var inst_18107__$1 = tmp18157;var inst_18108 = inst_18115;var state_18147__$1 = (function (){var statearr_18161 = state_18147;(statearr_18161[11] = inst_18120);
(statearr_18161[7] = inst_18108);
(statearr_18161[8] = inst_18107__$1);
return statearr_18161;
})();var statearr_18162_18472 = state_18147__$1;(statearr_18162_18472[2] = null);
(statearr_18162_18472[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18148 === 9))
{var inst_18107 = (state_18147[8]);var inst_18123 = cljs.core.vec.call(null,inst_18107);var state_18147__$1 = state_18147;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18147__$1,11,out,inst_18123);
} else
{if((state_val_18148 === 10))
{var inst_18130 = (state_18147[2]);var state_18147__$1 = state_18147;var statearr_18163_18473 = state_18147__$1;(statearr_18163_18473[2] = inst_18130);
(statearr_18163_18473[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18148 === 11))
{var inst_18115 = (state_18147[10]);var inst_18111 = (state_18147[9]);var inst_18125 = (state_18147[2]);var inst_18126 = [];var inst_18127 = inst_18126.push(inst_18111);var inst_18107 = inst_18126;var inst_18108 = inst_18115;var state_18147__$1 = (function (){var statearr_18164 = state_18147;(statearr_18164[12] = inst_18127);
(statearr_18164[13] = inst_18125);
(statearr_18164[7] = inst_18108);
(statearr_18164[8] = inst_18107);
return statearr_18164;
})();var statearr_18165_18474 = state_18147__$1;(statearr_18165_18474[2] = null);
(statearr_18165_18474[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18148 === 12))
{var inst_18107 = (state_18147[8]);var inst_18135 = cljs.core.vec.call(null,inst_18107);var state_18147__$1 = state_18147;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18147__$1,15,out,inst_18135);
} else
{if((state_val_18148 === 13))
{var state_18147__$1 = state_18147;var statearr_18166_18475 = state_18147__$1;(statearr_18166_18475[2] = null);
(statearr_18166_18475[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18148 === 14))
{var inst_18140 = (state_18147[2]);var inst_18141 = cljs.core.async.close_BANG_.call(null,out);var state_18147__$1 = (function (){var statearr_18167 = state_18147;(statearr_18167[14] = inst_18140);
return statearr_18167;
})();var statearr_18168_18476 = state_18147__$1;(statearr_18168_18476[2] = inst_18141);
(statearr_18168_18476[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18148 === 15))
{var inst_18137 = (state_18147[2]);var state_18147__$1 = state_18147;var statearr_18169_18477 = state_18147__$1;(statearr_18169_18477[2] = inst_18137);
(statearr_18169_18477[1] = 14);
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
});})(c__13601__auto___18463,out))
;return ((function (switch__13531__auto__,c__13601__auto___18463,out){
return (function() {
var state_machine__13532__auto__ = null;
var state_machine__13532__auto____0 = (function (){var statearr_18173 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18173[0] = state_machine__13532__auto__);
(statearr_18173[1] = 1);
return statearr_18173;
});
var state_machine__13532__auto____1 = (function (state_18147){while(true){
var ret_value__13533__auto__ = (function (){try{while(true){
var result__13534__auto__ = switch__13531__auto__.call(null,state_18147);if(cljs.core.keyword_identical_QMARK_.call(null,result__13534__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13534__auto__;
}
break;
}
}catch (e18174){if((e18174 instanceof Object))
{var ex__13535__auto__ = e18174;var statearr_18175_18478 = state_18147;(statearr_18175_18478[5] = ex__13535__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18147);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18174;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13533__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18479 = state_18147;
state_18147 = G__18479;
continue;
}
} else
{return ret_value__13533__auto__;
}
break;
}
});
state_machine__13532__auto__ = function(state_18147){
switch(arguments.length){
case 0:
return state_machine__13532__auto____0.call(this);
case 1:
return state_machine__13532__auto____1.call(this,state_18147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13532__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13532__auto____0;
state_machine__13532__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13532__auto____1;
return state_machine__13532__auto__;
})()
;})(switch__13531__auto__,c__13601__auto___18463,out))
})();var state__13603__auto__ = (function (){var statearr_18176 = f__13602__auto__.call(null);(statearr_18176[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13601__auto___18463);
return statearr_18176;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13603__auto__);
});})(c__13601__auto___18463,out))
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
{var o = (function (){var obj11779 = {};return obj11779;
})();var seq__11780_11793 = cljs.core.seq.call(null,obj);var chunk__11781_11794 = null;var count__11782_11795 = 0;var i__11783_11796 = 0;while(true){
if((i__11783_11796 < count__11782_11795))
{var vec__11784_11797 = cljs.core._nth.call(null,chunk__11781_11794,i__11783_11796);var k_11798 = cljs.core.nth.call(null,vec__11784_11797,0,null);var v_11799 = cljs.core.nth.call(null,vec__11784_11797,1,null);(o[cljs.core.name.call(null,k_11798)] = js_props.call(null,v_11799));
{
var G__11800 = seq__11780_11793;
var G__11801 = chunk__11781_11794;
var G__11802 = count__11782_11795;
var G__11803 = (i__11783_11796 + 1);
seq__11780_11793 = G__11800;
chunk__11781_11794 = G__11801;
count__11782_11795 = G__11802;
i__11783_11796 = G__11803;
continue;
}
} else
{var temp__4092__auto___11804 = cljs.core.seq.call(null,seq__11780_11793);if(temp__4092__auto___11804)
{var seq__11780_11805__$1 = temp__4092__auto___11804;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11780_11805__$1))
{var c__5632__auto___11806 = cljs.core.chunk_first.call(null,seq__11780_11805__$1);{
var G__11807 = cljs.core.chunk_rest.call(null,seq__11780_11805__$1);
var G__11808 = c__5632__auto___11806;
var G__11809 = cljs.core.count.call(null,c__5632__auto___11806);
var G__11810 = 0;
seq__11780_11793 = G__11807;
chunk__11781_11794 = G__11808;
count__11782_11795 = G__11809;
i__11783_11796 = G__11810;
continue;
}
} else
{var vec__11785_11811 = cljs.core.first.call(null,seq__11780_11805__$1);var k_11812 = cljs.core.nth.call(null,vec__11785_11811,0,null);var v_11813 = cljs.core.nth.call(null,vec__11785_11811,1,null);(o[cljs.core.name.call(null,k_11812)] = js_props.call(null,v_11813));
{
var G__11814 = cljs.core.next.call(null,seq__11780_11805__$1);
var G__11815 = null;
var G__11816 = 0;
var G__11817 = 0;
seq__11780_11793 = G__11814;
chunk__11781_11794 = G__11815;
count__11782_11795 = G__11816;
i__11783_11796 = G__11817;
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
quiescent.component = (function component(renderer){var react_component = React.createClass({"render": (function (){var this$ = this;var _STAR_component_STAR_11787 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return cljs.core.apply.call(null,renderer,(this$.props["value"]),(this$.props["statics"]));
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11787;
}}), "shouldComponentUpdate": (function (next_props,_){var this$ = this;return cljs.core.not_EQ_.call(null,(this$.props["value"]),(next_props["value"]));
})});return ((function (react_component){
return (function() { 
var G__11818__delegate = function (value,static_args){return react_component.call(null,{"statics": static_args, "value": value});
};
var G__11818 = function (value,var_args){
var static_args = null;if (arguments.length > 1) {
  static_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__11818__delegate.call(this,value,static_args);};
G__11818.cljs$lang$maxFixedArity = 1;
G__11818.cljs$lang$applyTo = (function (arglist__11819){
var value = cljs.core.first(arglist__11819);
var static_args = cljs.core.rest(arglist__11819);
return G__11818__delegate(value,static_args);
});
G__11818.cljs$core$IFn$_invoke$arity$variadic = G__11818__delegate;
return G__11818;
})()
;
;})(react_component))
});
/**
* Wrapper component used to mix-in lifecycle access
*/
quiescent.WrapperComponent = React.createClass({"componentWillUnmount": (function (){var this$ = this;var temp__4092__auto__ = (this$.props["onWillUnmount"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_11792 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null);
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11792;
}} else
{return null;
}
}), "componentWillUpdate": (function (_,___$1){var this$ = this;var temp__4092__auto__ = (this$.props["onWillUpdate"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_11791 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null);
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11791;
}} else
{return null;
}
}), "componentWillMount": (function (){var this$ = this;var temp__4092__auto__ = (this$.props["onWillMount"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_11790 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null);
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11790;
}} else
{return null;
}
}), "componentDidMount": (function (){var this$ = this;var temp__4092__auto__ = (this$.props["onMount"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_11789 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null,this$.getDOMNode());
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11789;
}} else
{return null;
}
}), "componentDidUpdate": (function (prev_props,prev_state){var this$ = this;var temp__4092__auto__ = (this$.props["onUpdate"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_11788 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null,this$.getDOMNode());
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11788;
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
var wrapper__delegate = function (child,kvs){var props = quiescent.js_props.call(null,cljs.core.apply.call(null,cljs.core.array_map,new cljs.core.Keyword(null,"wrappee","wrappee",2609412088),child,kvs));var temp__4092__auto___11820 = (child.props["key"]);if(cljs.core.truth_(temp__4092__auto___11820))
{var key_11821 = temp__4092__auto___11820;(props["key"] = key_11821);
} else
{}
return quiescent.WrapperComponent.call(null,props);
};
var wrapper = function (child,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrapper__delegate.call(this,child,kvs);};
wrapper.cljs$lang$maxFixedArity = 1;
wrapper.cljs$lang$applyTo = (function (arglist__11822){
var child = cljs.core.first(arglist__11822);
var kvs = cljs.core.rest(arglist__11822);
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
var a__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8204_9152 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8205_9153 = null;var count__8206_9154 = 0;var i__8207_9155 = 0;while(true){
if((i__8207_9155 < count__8206_9154))
{var arg__7204__auto___9156 = cljs.core._nth.call(null,chunk__8205_9153,i__8207_9155);a__7203__auto__.push(arg__7204__auto___9156);
{
var G__9157 = seq__8204_9152;
var G__9158 = chunk__8205_9153;
var G__9159 = count__8206_9154;
var G__9160 = (i__8207_9155 + 1);
seq__8204_9152 = G__9157;
chunk__8205_9153 = G__9158;
count__8206_9154 = G__9159;
i__8207_9155 = G__9160;
continue;
}
} else
{var temp__4092__auto___9161 = cljs.core.seq.call(null,seq__8204_9152);if(temp__4092__auto___9161)
{var seq__8204_9162__$1 = temp__4092__auto___9161;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8204_9162__$1))
{var c__5632__auto___9163 = cljs.core.chunk_first.call(null,seq__8204_9162__$1);{
var G__9164 = cljs.core.chunk_rest.call(null,seq__8204_9162__$1);
var G__9165 = c__5632__auto___9163;
var G__9166 = cljs.core.count.call(null,c__5632__auto___9163);
var G__9167 = 0;
seq__8204_9152 = G__9164;
chunk__8205_9153 = G__9165;
count__8206_9154 = G__9166;
i__8207_9155 = G__9167;
continue;
}
} else
{var arg__7204__auto___9168 = cljs.core.first.call(null,seq__8204_9162__$1);a__7203__auto__.push(arg__7204__auto___9168);
{
var G__9169 = cljs.core.next.call(null,seq__8204_9162__$1);
var G__9170 = null;
var G__9171 = 0;
var G__9172 = 0;
seq__8204_9152 = G__9169;
chunk__8205_9153 = G__9170;
count__8206_9154 = G__9171;
i__8207_9155 = G__9172;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.a.apply(null,a__7203__auto__);
};
var a = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return a__delegate.call(this,args__7202__auto__);};
a.cljs$lang$maxFixedArity = 0;
a.cljs$lang$applyTo = (function (arglist__9173){
var args__7202__auto__ = cljs.core.seq(arglist__9173);
return a__delegate(args__7202__auto__);
});
a.cljs$core$IFn$_invoke$arity$variadic = a__delegate;
return a;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.abbr = (function() { 
var abbr__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8212_9174 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8213_9175 = null;var count__8214_9176 = 0;var i__8215_9177 = 0;while(true){
if((i__8215_9177 < count__8214_9176))
{var arg__7204__auto___9178 = cljs.core._nth.call(null,chunk__8213_9175,i__8215_9177);a__7203__auto__.push(arg__7204__auto___9178);
{
var G__9179 = seq__8212_9174;
var G__9180 = chunk__8213_9175;
var G__9181 = count__8214_9176;
var G__9182 = (i__8215_9177 + 1);
seq__8212_9174 = G__9179;
chunk__8213_9175 = G__9180;
count__8214_9176 = G__9181;
i__8215_9177 = G__9182;
continue;
}
} else
{var temp__4092__auto___9183 = cljs.core.seq.call(null,seq__8212_9174);if(temp__4092__auto___9183)
{var seq__8212_9184__$1 = temp__4092__auto___9183;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8212_9184__$1))
{var c__5632__auto___9185 = cljs.core.chunk_first.call(null,seq__8212_9184__$1);{
var G__9186 = cljs.core.chunk_rest.call(null,seq__8212_9184__$1);
var G__9187 = c__5632__auto___9185;
var G__9188 = cljs.core.count.call(null,c__5632__auto___9185);
var G__9189 = 0;
seq__8212_9174 = G__9186;
chunk__8213_9175 = G__9187;
count__8214_9176 = G__9188;
i__8215_9177 = G__9189;
continue;
}
} else
{var arg__7204__auto___9190 = cljs.core.first.call(null,seq__8212_9184__$1);a__7203__auto__.push(arg__7204__auto___9190);
{
var G__9191 = cljs.core.next.call(null,seq__8212_9184__$1);
var G__9192 = null;
var G__9193 = 0;
var G__9194 = 0;
seq__8212_9174 = G__9191;
chunk__8213_9175 = G__9192;
count__8214_9176 = G__9193;
i__8215_9177 = G__9194;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.abbr.apply(null,a__7203__auto__);
};
var abbr = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return abbr__delegate.call(this,args__7202__auto__);};
abbr.cljs$lang$maxFixedArity = 0;
abbr.cljs$lang$applyTo = (function (arglist__9195){
var args__7202__auto__ = cljs.core.seq(arglist__9195);
return abbr__delegate(args__7202__auto__);
});
abbr.cljs$core$IFn$_invoke$arity$variadic = abbr__delegate;
return abbr;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.address = (function() { 
var address__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8220_9196 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8221_9197 = null;var count__8222_9198 = 0;var i__8223_9199 = 0;while(true){
if((i__8223_9199 < count__8222_9198))
{var arg__7204__auto___9200 = cljs.core._nth.call(null,chunk__8221_9197,i__8223_9199);a__7203__auto__.push(arg__7204__auto___9200);
{
var G__9201 = seq__8220_9196;
var G__9202 = chunk__8221_9197;
var G__9203 = count__8222_9198;
var G__9204 = (i__8223_9199 + 1);
seq__8220_9196 = G__9201;
chunk__8221_9197 = G__9202;
count__8222_9198 = G__9203;
i__8223_9199 = G__9204;
continue;
}
} else
{var temp__4092__auto___9205 = cljs.core.seq.call(null,seq__8220_9196);if(temp__4092__auto___9205)
{var seq__8220_9206__$1 = temp__4092__auto___9205;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8220_9206__$1))
{var c__5632__auto___9207 = cljs.core.chunk_first.call(null,seq__8220_9206__$1);{
var G__9208 = cljs.core.chunk_rest.call(null,seq__8220_9206__$1);
var G__9209 = c__5632__auto___9207;
var G__9210 = cljs.core.count.call(null,c__5632__auto___9207);
var G__9211 = 0;
seq__8220_9196 = G__9208;
chunk__8221_9197 = G__9209;
count__8222_9198 = G__9210;
i__8223_9199 = G__9211;
continue;
}
} else
{var arg__7204__auto___9212 = cljs.core.first.call(null,seq__8220_9206__$1);a__7203__auto__.push(arg__7204__auto___9212);
{
var G__9213 = cljs.core.next.call(null,seq__8220_9206__$1);
var G__9214 = null;
var G__9215 = 0;
var G__9216 = 0;
seq__8220_9196 = G__9213;
chunk__8221_9197 = G__9214;
count__8222_9198 = G__9215;
i__8223_9199 = G__9216;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.address.apply(null,a__7203__auto__);
};
var address = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return address__delegate.call(this,args__7202__auto__);};
address.cljs$lang$maxFixedArity = 0;
address.cljs$lang$applyTo = (function (arglist__9217){
var args__7202__auto__ = cljs.core.seq(arglist__9217);
return address__delegate(args__7202__auto__);
});
address.cljs$core$IFn$_invoke$arity$variadic = address__delegate;
return address;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.area = (function() { 
var area__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8228_9218 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8229_9219 = null;var count__8230_9220 = 0;var i__8231_9221 = 0;while(true){
if((i__8231_9221 < count__8230_9220))
{var arg__7204__auto___9222 = cljs.core._nth.call(null,chunk__8229_9219,i__8231_9221);a__7203__auto__.push(arg__7204__auto___9222);
{
var G__9223 = seq__8228_9218;
var G__9224 = chunk__8229_9219;
var G__9225 = count__8230_9220;
var G__9226 = (i__8231_9221 + 1);
seq__8228_9218 = G__9223;
chunk__8229_9219 = G__9224;
count__8230_9220 = G__9225;
i__8231_9221 = G__9226;
continue;
}
} else
{var temp__4092__auto___9227 = cljs.core.seq.call(null,seq__8228_9218);if(temp__4092__auto___9227)
{var seq__8228_9228__$1 = temp__4092__auto___9227;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8228_9228__$1))
{var c__5632__auto___9229 = cljs.core.chunk_first.call(null,seq__8228_9228__$1);{
var G__9230 = cljs.core.chunk_rest.call(null,seq__8228_9228__$1);
var G__9231 = c__5632__auto___9229;
var G__9232 = cljs.core.count.call(null,c__5632__auto___9229);
var G__9233 = 0;
seq__8228_9218 = G__9230;
chunk__8229_9219 = G__9231;
count__8230_9220 = G__9232;
i__8231_9221 = G__9233;
continue;
}
} else
{var arg__7204__auto___9234 = cljs.core.first.call(null,seq__8228_9228__$1);a__7203__auto__.push(arg__7204__auto___9234);
{
var G__9235 = cljs.core.next.call(null,seq__8228_9228__$1);
var G__9236 = null;
var G__9237 = 0;
var G__9238 = 0;
seq__8228_9218 = G__9235;
chunk__8229_9219 = G__9236;
count__8230_9220 = G__9237;
i__8231_9221 = G__9238;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.area.apply(null,a__7203__auto__);
};
var area = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return area__delegate.call(this,args__7202__auto__);};
area.cljs$lang$maxFixedArity = 0;
area.cljs$lang$applyTo = (function (arglist__9239){
var args__7202__auto__ = cljs.core.seq(arglist__9239);
return area__delegate(args__7202__auto__);
});
area.cljs$core$IFn$_invoke$arity$variadic = area__delegate;
return area;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.article = (function() { 
var article__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8236_9240 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8237_9241 = null;var count__8238_9242 = 0;var i__8239_9243 = 0;while(true){
if((i__8239_9243 < count__8238_9242))
{var arg__7204__auto___9244 = cljs.core._nth.call(null,chunk__8237_9241,i__8239_9243);a__7203__auto__.push(arg__7204__auto___9244);
{
var G__9245 = seq__8236_9240;
var G__9246 = chunk__8237_9241;
var G__9247 = count__8238_9242;
var G__9248 = (i__8239_9243 + 1);
seq__8236_9240 = G__9245;
chunk__8237_9241 = G__9246;
count__8238_9242 = G__9247;
i__8239_9243 = G__9248;
continue;
}
} else
{var temp__4092__auto___9249 = cljs.core.seq.call(null,seq__8236_9240);if(temp__4092__auto___9249)
{var seq__8236_9250__$1 = temp__4092__auto___9249;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8236_9250__$1))
{var c__5632__auto___9251 = cljs.core.chunk_first.call(null,seq__8236_9250__$1);{
var G__9252 = cljs.core.chunk_rest.call(null,seq__8236_9250__$1);
var G__9253 = c__5632__auto___9251;
var G__9254 = cljs.core.count.call(null,c__5632__auto___9251);
var G__9255 = 0;
seq__8236_9240 = G__9252;
chunk__8237_9241 = G__9253;
count__8238_9242 = G__9254;
i__8239_9243 = G__9255;
continue;
}
} else
{var arg__7204__auto___9256 = cljs.core.first.call(null,seq__8236_9250__$1);a__7203__auto__.push(arg__7204__auto___9256);
{
var G__9257 = cljs.core.next.call(null,seq__8236_9250__$1);
var G__9258 = null;
var G__9259 = 0;
var G__9260 = 0;
seq__8236_9240 = G__9257;
chunk__8237_9241 = G__9258;
count__8238_9242 = G__9259;
i__8239_9243 = G__9260;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.article.apply(null,a__7203__auto__);
};
var article = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return article__delegate.call(this,args__7202__auto__);};
article.cljs$lang$maxFixedArity = 0;
article.cljs$lang$applyTo = (function (arglist__9261){
var args__7202__auto__ = cljs.core.seq(arglist__9261);
return article__delegate(args__7202__auto__);
});
article.cljs$core$IFn$_invoke$arity$variadic = article__delegate;
return article;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.aside = (function() { 
var aside__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8244_9262 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8245_9263 = null;var count__8246_9264 = 0;var i__8247_9265 = 0;while(true){
if((i__8247_9265 < count__8246_9264))
{var arg__7204__auto___9266 = cljs.core._nth.call(null,chunk__8245_9263,i__8247_9265);a__7203__auto__.push(arg__7204__auto___9266);
{
var G__9267 = seq__8244_9262;
var G__9268 = chunk__8245_9263;
var G__9269 = count__8246_9264;
var G__9270 = (i__8247_9265 + 1);
seq__8244_9262 = G__9267;
chunk__8245_9263 = G__9268;
count__8246_9264 = G__9269;
i__8247_9265 = G__9270;
continue;
}
} else
{var temp__4092__auto___9271 = cljs.core.seq.call(null,seq__8244_9262);if(temp__4092__auto___9271)
{var seq__8244_9272__$1 = temp__4092__auto___9271;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8244_9272__$1))
{var c__5632__auto___9273 = cljs.core.chunk_first.call(null,seq__8244_9272__$1);{
var G__9274 = cljs.core.chunk_rest.call(null,seq__8244_9272__$1);
var G__9275 = c__5632__auto___9273;
var G__9276 = cljs.core.count.call(null,c__5632__auto___9273);
var G__9277 = 0;
seq__8244_9262 = G__9274;
chunk__8245_9263 = G__9275;
count__8246_9264 = G__9276;
i__8247_9265 = G__9277;
continue;
}
} else
{var arg__7204__auto___9278 = cljs.core.first.call(null,seq__8244_9272__$1);a__7203__auto__.push(arg__7204__auto___9278);
{
var G__9279 = cljs.core.next.call(null,seq__8244_9272__$1);
var G__9280 = null;
var G__9281 = 0;
var G__9282 = 0;
seq__8244_9262 = G__9279;
chunk__8245_9263 = G__9280;
count__8246_9264 = G__9281;
i__8247_9265 = G__9282;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.aside.apply(null,a__7203__auto__);
};
var aside = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return aside__delegate.call(this,args__7202__auto__);};
aside.cljs$lang$maxFixedArity = 0;
aside.cljs$lang$applyTo = (function (arglist__9283){
var args__7202__auto__ = cljs.core.seq(arglist__9283);
return aside__delegate(args__7202__auto__);
});
aside.cljs$core$IFn$_invoke$arity$variadic = aside__delegate;
return aside;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.audio = (function() { 
var audio__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8252_9284 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8253_9285 = null;var count__8254_9286 = 0;var i__8255_9287 = 0;while(true){
if((i__8255_9287 < count__8254_9286))
{var arg__7204__auto___9288 = cljs.core._nth.call(null,chunk__8253_9285,i__8255_9287);a__7203__auto__.push(arg__7204__auto___9288);
{
var G__9289 = seq__8252_9284;
var G__9290 = chunk__8253_9285;
var G__9291 = count__8254_9286;
var G__9292 = (i__8255_9287 + 1);
seq__8252_9284 = G__9289;
chunk__8253_9285 = G__9290;
count__8254_9286 = G__9291;
i__8255_9287 = G__9292;
continue;
}
} else
{var temp__4092__auto___9293 = cljs.core.seq.call(null,seq__8252_9284);if(temp__4092__auto___9293)
{var seq__8252_9294__$1 = temp__4092__auto___9293;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8252_9294__$1))
{var c__5632__auto___9295 = cljs.core.chunk_first.call(null,seq__8252_9294__$1);{
var G__9296 = cljs.core.chunk_rest.call(null,seq__8252_9294__$1);
var G__9297 = c__5632__auto___9295;
var G__9298 = cljs.core.count.call(null,c__5632__auto___9295);
var G__9299 = 0;
seq__8252_9284 = G__9296;
chunk__8253_9285 = G__9297;
count__8254_9286 = G__9298;
i__8255_9287 = G__9299;
continue;
}
} else
{var arg__7204__auto___9300 = cljs.core.first.call(null,seq__8252_9294__$1);a__7203__auto__.push(arg__7204__auto___9300);
{
var G__9301 = cljs.core.next.call(null,seq__8252_9294__$1);
var G__9302 = null;
var G__9303 = 0;
var G__9304 = 0;
seq__8252_9284 = G__9301;
chunk__8253_9285 = G__9302;
count__8254_9286 = G__9303;
i__8255_9287 = G__9304;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.audio.apply(null,a__7203__auto__);
};
var audio = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return audio__delegate.call(this,args__7202__auto__);};
audio.cljs$lang$maxFixedArity = 0;
audio.cljs$lang$applyTo = (function (arglist__9305){
var args__7202__auto__ = cljs.core.seq(arglist__9305);
return audio__delegate(args__7202__auto__);
});
audio.cljs$core$IFn$_invoke$arity$variadic = audio__delegate;
return audio;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.b = (function() { 
var b__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8260_9306 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8261_9307 = null;var count__8262_9308 = 0;var i__8263_9309 = 0;while(true){
if((i__8263_9309 < count__8262_9308))
{var arg__7204__auto___9310 = cljs.core._nth.call(null,chunk__8261_9307,i__8263_9309);a__7203__auto__.push(arg__7204__auto___9310);
{
var G__9311 = seq__8260_9306;
var G__9312 = chunk__8261_9307;
var G__9313 = count__8262_9308;
var G__9314 = (i__8263_9309 + 1);
seq__8260_9306 = G__9311;
chunk__8261_9307 = G__9312;
count__8262_9308 = G__9313;
i__8263_9309 = G__9314;
continue;
}
} else
{var temp__4092__auto___9315 = cljs.core.seq.call(null,seq__8260_9306);if(temp__4092__auto___9315)
{var seq__8260_9316__$1 = temp__4092__auto___9315;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8260_9316__$1))
{var c__5632__auto___9317 = cljs.core.chunk_first.call(null,seq__8260_9316__$1);{
var G__9318 = cljs.core.chunk_rest.call(null,seq__8260_9316__$1);
var G__9319 = c__5632__auto___9317;
var G__9320 = cljs.core.count.call(null,c__5632__auto___9317);
var G__9321 = 0;
seq__8260_9306 = G__9318;
chunk__8261_9307 = G__9319;
count__8262_9308 = G__9320;
i__8263_9309 = G__9321;
continue;
}
} else
{var arg__7204__auto___9322 = cljs.core.first.call(null,seq__8260_9316__$1);a__7203__auto__.push(arg__7204__auto___9322);
{
var G__9323 = cljs.core.next.call(null,seq__8260_9316__$1);
var G__9324 = null;
var G__9325 = 0;
var G__9326 = 0;
seq__8260_9306 = G__9323;
chunk__8261_9307 = G__9324;
count__8262_9308 = G__9325;
i__8263_9309 = G__9326;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.b.apply(null,a__7203__auto__);
};
var b = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return b__delegate.call(this,args__7202__auto__);};
b.cljs$lang$maxFixedArity = 0;
b.cljs$lang$applyTo = (function (arglist__9327){
var args__7202__auto__ = cljs.core.seq(arglist__9327);
return b__delegate(args__7202__auto__);
});
b.cljs$core$IFn$_invoke$arity$variadic = b__delegate;
return b;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.base = (function() { 
var base__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8268_9328 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8269_9329 = null;var count__8270_9330 = 0;var i__8271_9331 = 0;while(true){
if((i__8271_9331 < count__8270_9330))
{var arg__7204__auto___9332 = cljs.core._nth.call(null,chunk__8269_9329,i__8271_9331);a__7203__auto__.push(arg__7204__auto___9332);
{
var G__9333 = seq__8268_9328;
var G__9334 = chunk__8269_9329;
var G__9335 = count__8270_9330;
var G__9336 = (i__8271_9331 + 1);
seq__8268_9328 = G__9333;
chunk__8269_9329 = G__9334;
count__8270_9330 = G__9335;
i__8271_9331 = G__9336;
continue;
}
} else
{var temp__4092__auto___9337 = cljs.core.seq.call(null,seq__8268_9328);if(temp__4092__auto___9337)
{var seq__8268_9338__$1 = temp__4092__auto___9337;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8268_9338__$1))
{var c__5632__auto___9339 = cljs.core.chunk_first.call(null,seq__8268_9338__$1);{
var G__9340 = cljs.core.chunk_rest.call(null,seq__8268_9338__$1);
var G__9341 = c__5632__auto___9339;
var G__9342 = cljs.core.count.call(null,c__5632__auto___9339);
var G__9343 = 0;
seq__8268_9328 = G__9340;
chunk__8269_9329 = G__9341;
count__8270_9330 = G__9342;
i__8271_9331 = G__9343;
continue;
}
} else
{var arg__7204__auto___9344 = cljs.core.first.call(null,seq__8268_9338__$1);a__7203__auto__.push(arg__7204__auto___9344);
{
var G__9345 = cljs.core.next.call(null,seq__8268_9338__$1);
var G__9346 = null;
var G__9347 = 0;
var G__9348 = 0;
seq__8268_9328 = G__9345;
chunk__8269_9329 = G__9346;
count__8270_9330 = G__9347;
i__8271_9331 = G__9348;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.base.apply(null,a__7203__auto__);
};
var base = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return base__delegate.call(this,args__7202__auto__);};
base.cljs$lang$maxFixedArity = 0;
base.cljs$lang$applyTo = (function (arglist__9349){
var args__7202__auto__ = cljs.core.seq(arglist__9349);
return base__delegate(args__7202__auto__);
});
base.cljs$core$IFn$_invoke$arity$variadic = base__delegate;
return base;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.bdi = (function() { 
var bdi__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8276_9350 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8277_9351 = null;var count__8278_9352 = 0;var i__8279_9353 = 0;while(true){
if((i__8279_9353 < count__8278_9352))
{var arg__7204__auto___9354 = cljs.core._nth.call(null,chunk__8277_9351,i__8279_9353);a__7203__auto__.push(arg__7204__auto___9354);
{
var G__9355 = seq__8276_9350;
var G__9356 = chunk__8277_9351;
var G__9357 = count__8278_9352;
var G__9358 = (i__8279_9353 + 1);
seq__8276_9350 = G__9355;
chunk__8277_9351 = G__9356;
count__8278_9352 = G__9357;
i__8279_9353 = G__9358;
continue;
}
} else
{var temp__4092__auto___9359 = cljs.core.seq.call(null,seq__8276_9350);if(temp__4092__auto___9359)
{var seq__8276_9360__$1 = temp__4092__auto___9359;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8276_9360__$1))
{var c__5632__auto___9361 = cljs.core.chunk_first.call(null,seq__8276_9360__$1);{
var G__9362 = cljs.core.chunk_rest.call(null,seq__8276_9360__$1);
var G__9363 = c__5632__auto___9361;
var G__9364 = cljs.core.count.call(null,c__5632__auto___9361);
var G__9365 = 0;
seq__8276_9350 = G__9362;
chunk__8277_9351 = G__9363;
count__8278_9352 = G__9364;
i__8279_9353 = G__9365;
continue;
}
} else
{var arg__7204__auto___9366 = cljs.core.first.call(null,seq__8276_9360__$1);a__7203__auto__.push(arg__7204__auto___9366);
{
var G__9367 = cljs.core.next.call(null,seq__8276_9360__$1);
var G__9368 = null;
var G__9369 = 0;
var G__9370 = 0;
seq__8276_9350 = G__9367;
chunk__8277_9351 = G__9368;
count__8278_9352 = G__9369;
i__8279_9353 = G__9370;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.bdi.apply(null,a__7203__auto__);
};
var bdi = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return bdi__delegate.call(this,args__7202__auto__);};
bdi.cljs$lang$maxFixedArity = 0;
bdi.cljs$lang$applyTo = (function (arglist__9371){
var args__7202__auto__ = cljs.core.seq(arglist__9371);
return bdi__delegate(args__7202__auto__);
});
bdi.cljs$core$IFn$_invoke$arity$variadic = bdi__delegate;
return bdi;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.bdo = (function() { 
var bdo__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8284_9372 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8285_9373 = null;var count__8286_9374 = 0;var i__8287_9375 = 0;while(true){
if((i__8287_9375 < count__8286_9374))
{var arg__7204__auto___9376 = cljs.core._nth.call(null,chunk__8285_9373,i__8287_9375);a__7203__auto__.push(arg__7204__auto___9376);
{
var G__9377 = seq__8284_9372;
var G__9378 = chunk__8285_9373;
var G__9379 = count__8286_9374;
var G__9380 = (i__8287_9375 + 1);
seq__8284_9372 = G__9377;
chunk__8285_9373 = G__9378;
count__8286_9374 = G__9379;
i__8287_9375 = G__9380;
continue;
}
} else
{var temp__4092__auto___9381 = cljs.core.seq.call(null,seq__8284_9372);if(temp__4092__auto___9381)
{var seq__8284_9382__$1 = temp__4092__auto___9381;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8284_9382__$1))
{var c__5632__auto___9383 = cljs.core.chunk_first.call(null,seq__8284_9382__$1);{
var G__9384 = cljs.core.chunk_rest.call(null,seq__8284_9382__$1);
var G__9385 = c__5632__auto___9383;
var G__9386 = cljs.core.count.call(null,c__5632__auto___9383);
var G__9387 = 0;
seq__8284_9372 = G__9384;
chunk__8285_9373 = G__9385;
count__8286_9374 = G__9386;
i__8287_9375 = G__9387;
continue;
}
} else
{var arg__7204__auto___9388 = cljs.core.first.call(null,seq__8284_9382__$1);a__7203__auto__.push(arg__7204__auto___9388);
{
var G__9389 = cljs.core.next.call(null,seq__8284_9382__$1);
var G__9390 = null;
var G__9391 = 0;
var G__9392 = 0;
seq__8284_9372 = G__9389;
chunk__8285_9373 = G__9390;
count__8286_9374 = G__9391;
i__8287_9375 = G__9392;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.bdo.apply(null,a__7203__auto__);
};
var bdo = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return bdo__delegate.call(this,args__7202__auto__);};
bdo.cljs$lang$maxFixedArity = 0;
bdo.cljs$lang$applyTo = (function (arglist__9393){
var args__7202__auto__ = cljs.core.seq(arglist__9393);
return bdo__delegate(args__7202__auto__);
});
bdo.cljs$core$IFn$_invoke$arity$variadic = bdo__delegate;
return bdo;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.big = (function() { 
var big__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8292_9394 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8293_9395 = null;var count__8294_9396 = 0;var i__8295_9397 = 0;while(true){
if((i__8295_9397 < count__8294_9396))
{var arg__7204__auto___9398 = cljs.core._nth.call(null,chunk__8293_9395,i__8295_9397);a__7203__auto__.push(arg__7204__auto___9398);
{
var G__9399 = seq__8292_9394;
var G__9400 = chunk__8293_9395;
var G__9401 = count__8294_9396;
var G__9402 = (i__8295_9397 + 1);
seq__8292_9394 = G__9399;
chunk__8293_9395 = G__9400;
count__8294_9396 = G__9401;
i__8295_9397 = G__9402;
continue;
}
} else
{var temp__4092__auto___9403 = cljs.core.seq.call(null,seq__8292_9394);if(temp__4092__auto___9403)
{var seq__8292_9404__$1 = temp__4092__auto___9403;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8292_9404__$1))
{var c__5632__auto___9405 = cljs.core.chunk_first.call(null,seq__8292_9404__$1);{
var G__9406 = cljs.core.chunk_rest.call(null,seq__8292_9404__$1);
var G__9407 = c__5632__auto___9405;
var G__9408 = cljs.core.count.call(null,c__5632__auto___9405);
var G__9409 = 0;
seq__8292_9394 = G__9406;
chunk__8293_9395 = G__9407;
count__8294_9396 = G__9408;
i__8295_9397 = G__9409;
continue;
}
} else
{var arg__7204__auto___9410 = cljs.core.first.call(null,seq__8292_9404__$1);a__7203__auto__.push(arg__7204__auto___9410);
{
var G__9411 = cljs.core.next.call(null,seq__8292_9404__$1);
var G__9412 = null;
var G__9413 = 0;
var G__9414 = 0;
seq__8292_9394 = G__9411;
chunk__8293_9395 = G__9412;
count__8294_9396 = G__9413;
i__8295_9397 = G__9414;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.big.apply(null,a__7203__auto__);
};
var big = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return big__delegate.call(this,args__7202__auto__);};
big.cljs$lang$maxFixedArity = 0;
big.cljs$lang$applyTo = (function (arglist__9415){
var args__7202__auto__ = cljs.core.seq(arglist__9415);
return big__delegate(args__7202__auto__);
});
big.cljs$core$IFn$_invoke$arity$variadic = big__delegate;
return big;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.blockquote = (function() { 
var blockquote__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8300_9416 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8301_9417 = null;var count__8302_9418 = 0;var i__8303_9419 = 0;while(true){
if((i__8303_9419 < count__8302_9418))
{var arg__7204__auto___9420 = cljs.core._nth.call(null,chunk__8301_9417,i__8303_9419);a__7203__auto__.push(arg__7204__auto___9420);
{
var G__9421 = seq__8300_9416;
var G__9422 = chunk__8301_9417;
var G__9423 = count__8302_9418;
var G__9424 = (i__8303_9419 + 1);
seq__8300_9416 = G__9421;
chunk__8301_9417 = G__9422;
count__8302_9418 = G__9423;
i__8303_9419 = G__9424;
continue;
}
} else
{var temp__4092__auto___9425 = cljs.core.seq.call(null,seq__8300_9416);if(temp__4092__auto___9425)
{var seq__8300_9426__$1 = temp__4092__auto___9425;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8300_9426__$1))
{var c__5632__auto___9427 = cljs.core.chunk_first.call(null,seq__8300_9426__$1);{
var G__9428 = cljs.core.chunk_rest.call(null,seq__8300_9426__$1);
var G__9429 = c__5632__auto___9427;
var G__9430 = cljs.core.count.call(null,c__5632__auto___9427);
var G__9431 = 0;
seq__8300_9416 = G__9428;
chunk__8301_9417 = G__9429;
count__8302_9418 = G__9430;
i__8303_9419 = G__9431;
continue;
}
} else
{var arg__7204__auto___9432 = cljs.core.first.call(null,seq__8300_9426__$1);a__7203__auto__.push(arg__7204__auto___9432);
{
var G__9433 = cljs.core.next.call(null,seq__8300_9426__$1);
var G__9434 = null;
var G__9435 = 0;
var G__9436 = 0;
seq__8300_9416 = G__9433;
chunk__8301_9417 = G__9434;
count__8302_9418 = G__9435;
i__8303_9419 = G__9436;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.blockquote.apply(null,a__7203__auto__);
};
var blockquote = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return blockquote__delegate.call(this,args__7202__auto__);};
blockquote.cljs$lang$maxFixedArity = 0;
blockquote.cljs$lang$applyTo = (function (arglist__9437){
var args__7202__auto__ = cljs.core.seq(arglist__9437);
return blockquote__delegate(args__7202__auto__);
});
blockquote.cljs$core$IFn$_invoke$arity$variadic = blockquote__delegate;
return blockquote;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.body = (function() { 
var body__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8308_9438 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8309_9439 = null;var count__8310_9440 = 0;var i__8311_9441 = 0;while(true){
if((i__8311_9441 < count__8310_9440))
{var arg__7204__auto___9442 = cljs.core._nth.call(null,chunk__8309_9439,i__8311_9441);a__7203__auto__.push(arg__7204__auto___9442);
{
var G__9443 = seq__8308_9438;
var G__9444 = chunk__8309_9439;
var G__9445 = count__8310_9440;
var G__9446 = (i__8311_9441 + 1);
seq__8308_9438 = G__9443;
chunk__8309_9439 = G__9444;
count__8310_9440 = G__9445;
i__8311_9441 = G__9446;
continue;
}
} else
{var temp__4092__auto___9447 = cljs.core.seq.call(null,seq__8308_9438);if(temp__4092__auto___9447)
{var seq__8308_9448__$1 = temp__4092__auto___9447;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8308_9448__$1))
{var c__5632__auto___9449 = cljs.core.chunk_first.call(null,seq__8308_9448__$1);{
var G__9450 = cljs.core.chunk_rest.call(null,seq__8308_9448__$1);
var G__9451 = c__5632__auto___9449;
var G__9452 = cljs.core.count.call(null,c__5632__auto___9449);
var G__9453 = 0;
seq__8308_9438 = G__9450;
chunk__8309_9439 = G__9451;
count__8310_9440 = G__9452;
i__8311_9441 = G__9453;
continue;
}
} else
{var arg__7204__auto___9454 = cljs.core.first.call(null,seq__8308_9448__$1);a__7203__auto__.push(arg__7204__auto___9454);
{
var G__9455 = cljs.core.next.call(null,seq__8308_9448__$1);
var G__9456 = null;
var G__9457 = 0;
var G__9458 = 0;
seq__8308_9438 = G__9455;
chunk__8309_9439 = G__9456;
count__8310_9440 = G__9457;
i__8311_9441 = G__9458;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.body.apply(null,a__7203__auto__);
};
var body = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return body__delegate.call(this,args__7202__auto__);};
body.cljs$lang$maxFixedArity = 0;
body.cljs$lang$applyTo = (function (arglist__9459){
var args__7202__auto__ = cljs.core.seq(arglist__9459);
return body__delegate(args__7202__auto__);
});
body.cljs$core$IFn$_invoke$arity$variadic = body__delegate;
return body;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.br = (function() { 
var br__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8316_9460 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8317_9461 = null;var count__8318_9462 = 0;var i__8319_9463 = 0;while(true){
if((i__8319_9463 < count__8318_9462))
{var arg__7204__auto___9464 = cljs.core._nth.call(null,chunk__8317_9461,i__8319_9463);a__7203__auto__.push(arg__7204__auto___9464);
{
var G__9465 = seq__8316_9460;
var G__9466 = chunk__8317_9461;
var G__9467 = count__8318_9462;
var G__9468 = (i__8319_9463 + 1);
seq__8316_9460 = G__9465;
chunk__8317_9461 = G__9466;
count__8318_9462 = G__9467;
i__8319_9463 = G__9468;
continue;
}
} else
{var temp__4092__auto___9469 = cljs.core.seq.call(null,seq__8316_9460);if(temp__4092__auto___9469)
{var seq__8316_9470__$1 = temp__4092__auto___9469;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8316_9470__$1))
{var c__5632__auto___9471 = cljs.core.chunk_first.call(null,seq__8316_9470__$1);{
var G__9472 = cljs.core.chunk_rest.call(null,seq__8316_9470__$1);
var G__9473 = c__5632__auto___9471;
var G__9474 = cljs.core.count.call(null,c__5632__auto___9471);
var G__9475 = 0;
seq__8316_9460 = G__9472;
chunk__8317_9461 = G__9473;
count__8318_9462 = G__9474;
i__8319_9463 = G__9475;
continue;
}
} else
{var arg__7204__auto___9476 = cljs.core.first.call(null,seq__8316_9470__$1);a__7203__auto__.push(arg__7204__auto___9476);
{
var G__9477 = cljs.core.next.call(null,seq__8316_9470__$1);
var G__9478 = null;
var G__9479 = 0;
var G__9480 = 0;
seq__8316_9460 = G__9477;
chunk__8317_9461 = G__9478;
count__8318_9462 = G__9479;
i__8319_9463 = G__9480;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.br.apply(null,a__7203__auto__);
};
var br = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return br__delegate.call(this,args__7202__auto__);};
br.cljs$lang$maxFixedArity = 0;
br.cljs$lang$applyTo = (function (arglist__9481){
var args__7202__auto__ = cljs.core.seq(arglist__9481);
return br__delegate(args__7202__auto__);
});
br.cljs$core$IFn$_invoke$arity$variadic = br__delegate;
return br;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.button = (function() { 
var button__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8324_9482 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8325_9483 = null;var count__8326_9484 = 0;var i__8327_9485 = 0;while(true){
if((i__8327_9485 < count__8326_9484))
{var arg__7204__auto___9486 = cljs.core._nth.call(null,chunk__8325_9483,i__8327_9485);a__7203__auto__.push(arg__7204__auto___9486);
{
var G__9487 = seq__8324_9482;
var G__9488 = chunk__8325_9483;
var G__9489 = count__8326_9484;
var G__9490 = (i__8327_9485 + 1);
seq__8324_9482 = G__9487;
chunk__8325_9483 = G__9488;
count__8326_9484 = G__9489;
i__8327_9485 = G__9490;
continue;
}
} else
{var temp__4092__auto___9491 = cljs.core.seq.call(null,seq__8324_9482);if(temp__4092__auto___9491)
{var seq__8324_9492__$1 = temp__4092__auto___9491;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8324_9492__$1))
{var c__5632__auto___9493 = cljs.core.chunk_first.call(null,seq__8324_9492__$1);{
var G__9494 = cljs.core.chunk_rest.call(null,seq__8324_9492__$1);
var G__9495 = c__5632__auto___9493;
var G__9496 = cljs.core.count.call(null,c__5632__auto___9493);
var G__9497 = 0;
seq__8324_9482 = G__9494;
chunk__8325_9483 = G__9495;
count__8326_9484 = G__9496;
i__8327_9485 = G__9497;
continue;
}
} else
{var arg__7204__auto___9498 = cljs.core.first.call(null,seq__8324_9492__$1);a__7203__auto__.push(arg__7204__auto___9498);
{
var G__9499 = cljs.core.next.call(null,seq__8324_9492__$1);
var G__9500 = null;
var G__9501 = 0;
var G__9502 = 0;
seq__8324_9482 = G__9499;
chunk__8325_9483 = G__9500;
count__8326_9484 = G__9501;
i__8327_9485 = G__9502;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.button.apply(null,a__7203__auto__);
};
var button = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return button__delegate.call(this,args__7202__auto__);};
button.cljs$lang$maxFixedArity = 0;
button.cljs$lang$applyTo = (function (arglist__9503){
var args__7202__auto__ = cljs.core.seq(arglist__9503);
return button__delegate(args__7202__auto__);
});
button.cljs$core$IFn$_invoke$arity$variadic = button__delegate;
return button;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.canvas = (function() { 
var canvas__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8332_9504 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8333_9505 = null;var count__8334_9506 = 0;var i__8335_9507 = 0;while(true){
if((i__8335_9507 < count__8334_9506))
{var arg__7204__auto___9508 = cljs.core._nth.call(null,chunk__8333_9505,i__8335_9507);a__7203__auto__.push(arg__7204__auto___9508);
{
var G__9509 = seq__8332_9504;
var G__9510 = chunk__8333_9505;
var G__9511 = count__8334_9506;
var G__9512 = (i__8335_9507 + 1);
seq__8332_9504 = G__9509;
chunk__8333_9505 = G__9510;
count__8334_9506 = G__9511;
i__8335_9507 = G__9512;
continue;
}
} else
{var temp__4092__auto___9513 = cljs.core.seq.call(null,seq__8332_9504);if(temp__4092__auto___9513)
{var seq__8332_9514__$1 = temp__4092__auto___9513;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8332_9514__$1))
{var c__5632__auto___9515 = cljs.core.chunk_first.call(null,seq__8332_9514__$1);{
var G__9516 = cljs.core.chunk_rest.call(null,seq__8332_9514__$1);
var G__9517 = c__5632__auto___9515;
var G__9518 = cljs.core.count.call(null,c__5632__auto___9515);
var G__9519 = 0;
seq__8332_9504 = G__9516;
chunk__8333_9505 = G__9517;
count__8334_9506 = G__9518;
i__8335_9507 = G__9519;
continue;
}
} else
{var arg__7204__auto___9520 = cljs.core.first.call(null,seq__8332_9514__$1);a__7203__auto__.push(arg__7204__auto___9520);
{
var G__9521 = cljs.core.next.call(null,seq__8332_9514__$1);
var G__9522 = null;
var G__9523 = 0;
var G__9524 = 0;
seq__8332_9504 = G__9521;
chunk__8333_9505 = G__9522;
count__8334_9506 = G__9523;
i__8335_9507 = G__9524;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.canvas.apply(null,a__7203__auto__);
};
var canvas = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return canvas__delegate.call(this,args__7202__auto__);};
canvas.cljs$lang$maxFixedArity = 0;
canvas.cljs$lang$applyTo = (function (arglist__9525){
var args__7202__auto__ = cljs.core.seq(arglist__9525);
return canvas__delegate(args__7202__auto__);
});
canvas.cljs$core$IFn$_invoke$arity$variadic = canvas__delegate;
return canvas;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.caption = (function() { 
var caption__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8340_9526 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8341_9527 = null;var count__8342_9528 = 0;var i__8343_9529 = 0;while(true){
if((i__8343_9529 < count__8342_9528))
{var arg__7204__auto___9530 = cljs.core._nth.call(null,chunk__8341_9527,i__8343_9529);a__7203__auto__.push(arg__7204__auto___9530);
{
var G__9531 = seq__8340_9526;
var G__9532 = chunk__8341_9527;
var G__9533 = count__8342_9528;
var G__9534 = (i__8343_9529 + 1);
seq__8340_9526 = G__9531;
chunk__8341_9527 = G__9532;
count__8342_9528 = G__9533;
i__8343_9529 = G__9534;
continue;
}
} else
{var temp__4092__auto___9535 = cljs.core.seq.call(null,seq__8340_9526);if(temp__4092__auto___9535)
{var seq__8340_9536__$1 = temp__4092__auto___9535;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8340_9536__$1))
{var c__5632__auto___9537 = cljs.core.chunk_first.call(null,seq__8340_9536__$1);{
var G__9538 = cljs.core.chunk_rest.call(null,seq__8340_9536__$1);
var G__9539 = c__5632__auto___9537;
var G__9540 = cljs.core.count.call(null,c__5632__auto___9537);
var G__9541 = 0;
seq__8340_9526 = G__9538;
chunk__8341_9527 = G__9539;
count__8342_9528 = G__9540;
i__8343_9529 = G__9541;
continue;
}
} else
{var arg__7204__auto___9542 = cljs.core.first.call(null,seq__8340_9536__$1);a__7203__auto__.push(arg__7204__auto___9542);
{
var G__9543 = cljs.core.next.call(null,seq__8340_9536__$1);
var G__9544 = null;
var G__9545 = 0;
var G__9546 = 0;
seq__8340_9526 = G__9543;
chunk__8341_9527 = G__9544;
count__8342_9528 = G__9545;
i__8343_9529 = G__9546;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.caption.apply(null,a__7203__auto__);
};
var caption = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return caption__delegate.call(this,args__7202__auto__);};
caption.cljs$lang$maxFixedArity = 0;
caption.cljs$lang$applyTo = (function (arglist__9547){
var args__7202__auto__ = cljs.core.seq(arglist__9547);
return caption__delegate(args__7202__auto__);
});
caption.cljs$core$IFn$_invoke$arity$variadic = caption__delegate;
return caption;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.cite = (function() { 
var cite__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8348_9548 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8349_9549 = null;var count__8350_9550 = 0;var i__8351_9551 = 0;while(true){
if((i__8351_9551 < count__8350_9550))
{var arg__7204__auto___9552 = cljs.core._nth.call(null,chunk__8349_9549,i__8351_9551);a__7203__auto__.push(arg__7204__auto___9552);
{
var G__9553 = seq__8348_9548;
var G__9554 = chunk__8349_9549;
var G__9555 = count__8350_9550;
var G__9556 = (i__8351_9551 + 1);
seq__8348_9548 = G__9553;
chunk__8349_9549 = G__9554;
count__8350_9550 = G__9555;
i__8351_9551 = G__9556;
continue;
}
} else
{var temp__4092__auto___9557 = cljs.core.seq.call(null,seq__8348_9548);if(temp__4092__auto___9557)
{var seq__8348_9558__$1 = temp__4092__auto___9557;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8348_9558__$1))
{var c__5632__auto___9559 = cljs.core.chunk_first.call(null,seq__8348_9558__$1);{
var G__9560 = cljs.core.chunk_rest.call(null,seq__8348_9558__$1);
var G__9561 = c__5632__auto___9559;
var G__9562 = cljs.core.count.call(null,c__5632__auto___9559);
var G__9563 = 0;
seq__8348_9548 = G__9560;
chunk__8349_9549 = G__9561;
count__8350_9550 = G__9562;
i__8351_9551 = G__9563;
continue;
}
} else
{var arg__7204__auto___9564 = cljs.core.first.call(null,seq__8348_9558__$1);a__7203__auto__.push(arg__7204__auto___9564);
{
var G__9565 = cljs.core.next.call(null,seq__8348_9558__$1);
var G__9566 = null;
var G__9567 = 0;
var G__9568 = 0;
seq__8348_9548 = G__9565;
chunk__8349_9549 = G__9566;
count__8350_9550 = G__9567;
i__8351_9551 = G__9568;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.cite.apply(null,a__7203__auto__);
};
var cite = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return cite__delegate.call(this,args__7202__auto__);};
cite.cljs$lang$maxFixedArity = 0;
cite.cljs$lang$applyTo = (function (arglist__9569){
var args__7202__auto__ = cljs.core.seq(arglist__9569);
return cite__delegate(args__7202__auto__);
});
cite.cljs$core$IFn$_invoke$arity$variadic = cite__delegate;
return cite;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.code = (function() { 
var code__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8356_9570 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8357_9571 = null;var count__8358_9572 = 0;var i__8359_9573 = 0;while(true){
if((i__8359_9573 < count__8358_9572))
{var arg__7204__auto___9574 = cljs.core._nth.call(null,chunk__8357_9571,i__8359_9573);a__7203__auto__.push(arg__7204__auto___9574);
{
var G__9575 = seq__8356_9570;
var G__9576 = chunk__8357_9571;
var G__9577 = count__8358_9572;
var G__9578 = (i__8359_9573 + 1);
seq__8356_9570 = G__9575;
chunk__8357_9571 = G__9576;
count__8358_9572 = G__9577;
i__8359_9573 = G__9578;
continue;
}
} else
{var temp__4092__auto___9579 = cljs.core.seq.call(null,seq__8356_9570);if(temp__4092__auto___9579)
{var seq__8356_9580__$1 = temp__4092__auto___9579;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8356_9580__$1))
{var c__5632__auto___9581 = cljs.core.chunk_first.call(null,seq__8356_9580__$1);{
var G__9582 = cljs.core.chunk_rest.call(null,seq__8356_9580__$1);
var G__9583 = c__5632__auto___9581;
var G__9584 = cljs.core.count.call(null,c__5632__auto___9581);
var G__9585 = 0;
seq__8356_9570 = G__9582;
chunk__8357_9571 = G__9583;
count__8358_9572 = G__9584;
i__8359_9573 = G__9585;
continue;
}
} else
{var arg__7204__auto___9586 = cljs.core.first.call(null,seq__8356_9580__$1);a__7203__auto__.push(arg__7204__auto___9586);
{
var G__9587 = cljs.core.next.call(null,seq__8356_9580__$1);
var G__9588 = null;
var G__9589 = 0;
var G__9590 = 0;
seq__8356_9570 = G__9587;
chunk__8357_9571 = G__9588;
count__8358_9572 = G__9589;
i__8359_9573 = G__9590;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.code.apply(null,a__7203__auto__);
};
var code = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return code__delegate.call(this,args__7202__auto__);};
code.cljs$lang$maxFixedArity = 0;
code.cljs$lang$applyTo = (function (arglist__9591){
var args__7202__auto__ = cljs.core.seq(arglist__9591);
return code__delegate(args__7202__auto__);
});
code.cljs$core$IFn$_invoke$arity$variadic = code__delegate;
return code;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.col = (function() { 
var col__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8364_9592 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8365_9593 = null;var count__8366_9594 = 0;var i__8367_9595 = 0;while(true){
if((i__8367_9595 < count__8366_9594))
{var arg__7204__auto___9596 = cljs.core._nth.call(null,chunk__8365_9593,i__8367_9595);a__7203__auto__.push(arg__7204__auto___9596);
{
var G__9597 = seq__8364_9592;
var G__9598 = chunk__8365_9593;
var G__9599 = count__8366_9594;
var G__9600 = (i__8367_9595 + 1);
seq__8364_9592 = G__9597;
chunk__8365_9593 = G__9598;
count__8366_9594 = G__9599;
i__8367_9595 = G__9600;
continue;
}
} else
{var temp__4092__auto___9601 = cljs.core.seq.call(null,seq__8364_9592);if(temp__4092__auto___9601)
{var seq__8364_9602__$1 = temp__4092__auto___9601;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8364_9602__$1))
{var c__5632__auto___9603 = cljs.core.chunk_first.call(null,seq__8364_9602__$1);{
var G__9604 = cljs.core.chunk_rest.call(null,seq__8364_9602__$1);
var G__9605 = c__5632__auto___9603;
var G__9606 = cljs.core.count.call(null,c__5632__auto___9603);
var G__9607 = 0;
seq__8364_9592 = G__9604;
chunk__8365_9593 = G__9605;
count__8366_9594 = G__9606;
i__8367_9595 = G__9607;
continue;
}
} else
{var arg__7204__auto___9608 = cljs.core.first.call(null,seq__8364_9602__$1);a__7203__auto__.push(arg__7204__auto___9608);
{
var G__9609 = cljs.core.next.call(null,seq__8364_9602__$1);
var G__9610 = null;
var G__9611 = 0;
var G__9612 = 0;
seq__8364_9592 = G__9609;
chunk__8365_9593 = G__9610;
count__8366_9594 = G__9611;
i__8367_9595 = G__9612;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.col.apply(null,a__7203__auto__);
};
var col = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return col__delegate.call(this,args__7202__auto__);};
col.cljs$lang$maxFixedArity = 0;
col.cljs$lang$applyTo = (function (arglist__9613){
var args__7202__auto__ = cljs.core.seq(arglist__9613);
return col__delegate(args__7202__auto__);
});
col.cljs$core$IFn$_invoke$arity$variadic = col__delegate;
return col;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.colgroup = (function() { 
var colgroup__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8372_9614 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8373_9615 = null;var count__8374_9616 = 0;var i__8375_9617 = 0;while(true){
if((i__8375_9617 < count__8374_9616))
{var arg__7204__auto___9618 = cljs.core._nth.call(null,chunk__8373_9615,i__8375_9617);a__7203__auto__.push(arg__7204__auto___9618);
{
var G__9619 = seq__8372_9614;
var G__9620 = chunk__8373_9615;
var G__9621 = count__8374_9616;
var G__9622 = (i__8375_9617 + 1);
seq__8372_9614 = G__9619;
chunk__8373_9615 = G__9620;
count__8374_9616 = G__9621;
i__8375_9617 = G__9622;
continue;
}
} else
{var temp__4092__auto___9623 = cljs.core.seq.call(null,seq__8372_9614);if(temp__4092__auto___9623)
{var seq__8372_9624__$1 = temp__4092__auto___9623;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8372_9624__$1))
{var c__5632__auto___9625 = cljs.core.chunk_first.call(null,seq__8372_9624__$1);{
var G__9626 = cljs.core.chunk_rest.call(null,seq__8372_9624__$1);
var G__9627 = c__5632__auto___9625;
var G__9628 = cljs.core.count.call(null,c__5632__auto___9625);
var G__9629 = 0;
seq__8372_9614 = G__9626;
chunk__8373_9615 = G__9627;
count__8374_9616 = G__9628;
i__8375_9617 = G__9629;
continue;
}
} else
{var arg__7204__auto___9630 = cljs.core.first.call(null,seq__8372_9624__$1);a__7203__auto__.push(arg__7204__auto___9630);
{
var G__9631 = cljs.core.next.call(null,seq__8372_9624__$1);
var G__9632 = null;
var G__9633 = 0;
var G__9634 = 0;
seq__8372_9614 = G__9631;
chunk__8373_9615 = G__9632;
count__8374_9616 = G__9633;
i__8375_9617 = G__9634;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.colgroup.apply(null,a__7203__auto__);
};
var colgroup = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return colgroup__delegate.call(this,args__7202__auto__);};
colgroup.cljs$lang$maxFixedArity = 0;
colgroup.cljs$lang$applyTo = (function (arglist__9635){
var args__7202__auto__ = cljs.core.seq(arglist__9635);
return colgroup__delegate(args__7202__auto__);
});
colgroup.cljs$core$IFn$_invoke$arity$variadic = colgroup__delegate;
return colgroup;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.data = (function() { 
var data__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8380_9636 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8381_9637 = null;var count__8382_9638 = 0;var i__8383_9639 = 0;while(true){
if((i__8383_9639 < count__8382_9638))
{var arg__7204__auto___9640 = cljs.core._nth.call(null,chunk__8381_9637,i__8383_9639);a__7203__auto__.push(arg__7204__auto___9640);
{
var G__9641 = seq__8380_9636;
var G__9642 = chunk__8381_9637;
var G__9643 = count__8382_9638;
var G__9644 = (i__8383_9639 + 1);
seq__8380_9636 = G__9641;
chunk__8381_9637 = G__9642;
count__8382_9638 = G__9643;
i__8383_9639 = G__9644;
continue;
}
} else
{var temp__4092__auto___9645 = cljs.core.seq.call(null,seq__8380_9636);if(temp__4092__auto___9645)
{var seq__8380_9646__$1 = temp__4092__auto___9645;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8380_9646__$1))
{var c__5632__auto___9647 = cljs.core.chunk_first.call(null,seq__8380_9646__$1);{
var G__9648 = cljs.core.chunk_rest.call(null,seq__8380_9646__$1);
var G__9649 = c__5632__auto___9647;
var G__9650 = cljs.core.count.call(null,c__5632__auto___9647);
var G__9651 = 0;
seq__8380_9636 = G__9648;
chunk__8381_9637 = G__9649;
count__8382_9638 = G__9650;
i__8383_9639 = G__9651;
continue;
}
} else
{var arg__7204__auto___9652 = cljs.core.first.call(null,seq__8380_9646__$1);a__7203__auto__.push(arg__7204__auto___9652);
{
var G__9653 = cljs.core.next.call(null,seq__8380_9646__$1);
var G__9654 = null;
var G__9655 = 0;
var G__9656 = 0;
seq__8380_9636 = G__9653;
chunk__8381_9637 = G__9654;
count__8382_9638 = G__9655;
i__8383_9639 = G__9656;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.data.apply(null,a__7203__auto__);
};
var data = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return data__delegate.call(this,args__7202__auto__);};
data.cljs$lang$maxFixedArity = 0;
data.cljs$lang$applyTo = (function (arglist__9657){
var args__7202__auto__ = cljs.core.seq(arglist__9657);
return data__delegate(args__7202__auto__);
});
data.cljs$core$IFn$_invoke$arity$variadic = data__delegate;
return data;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.datalist = (function() { 
var datalist__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8388_9658 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8389_9659 = null;var count__8390_9660 = 0;var i__8391_9661 = 0;while(true){
if((i__8391_9661 < count__8390_9660))
{var arg__7204__auto___9662 = cljs.core._nth.call(null,chunk__8389_9659,i__8391_9661);a__7203__auto__.push(arg__7204__auto___9662);
{
var G__9663 = seq__8388_9658;
var G__9664 = chunk__8389_9659;
var G__9665 = count__8390_9660;
var G__9666 = (i__8391_9661 + 1);
seq__8388_9658 = G__9663;
chunk__8389_9659 = G__9664;
count__8390_9660 = G__9665;
i__8391_9661 = G__9666;
continue;
}
} else
{var temp__4092__auto___9667 = cljs.core.seq.call(null,seq__8388_9658);if(temp__4092__auto___9667)
{var seq__8388_9668__$1 = temp__4092__auto___9667;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8388_9668__$1))
{var c__5632__auto___9669 = cljs.core.chunk_first.call(null,seq__8388_9668__$1);{
var G__9670 = cljs.core.chunk_rest.call(null,seq__8388_9668__$1);
var G__9671 = c__5632__auto___9669;
var G__9672 = cljs.core.count.call(null,c__5632__auto___9669);
var G__9673 = 0;
seq__8388_9658 = G__9670;
chunk__8389_9659 = G__9671;
count__8390_9660 = G__9672;
i__8391_9661 = G__9673;
continue;
}
} else
{var arg__7204__auto___9674 = cljs.core.first.call(null,seq__8388_9668__$1);a__7203__auto__.push(arg__7204__auto___9674);
{
var G__9675 = cljs.core.next.call(null,seq__8388_9668__$1);
var G__9676 = null;
var G__9677 = 0;
var G__9678 = 0;
seq__8388_9658 = G__9675;
chunk__8389_9659 = G__9676;
count__8390_9660 = G__9677;
i__8391_9661 = G__9678;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.datalist.apply(null,a__7203__auto__);
};
var datalist = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return datalist__delegate.call(this,args__7202__auto__);};
datalist.cljs$lang$maxFixedArity = 0;
datalist.cljs$lang$applyTo = (function (arglist__9679){
var args__7202__auto__ = cljs.core.seq(arglist__9679);
return datalist__delegate(args__7202__auto__);
});
datalist.cljs$core$IFn$_invoke$arity$variadic = datalist__delegate;
return datalist;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.dd = (function() { 
var dd__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8396_9680 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8397_9681 = null;var count__8398_9682 = 0;var i__8399_9683 = 0;while(true){
if((i__8399_9683 < count__8398_9682))
{var arg__7204__auto___9684 = cljs.core._nth.call(null,chunk__8397_9681,i__8399_9683);a__7203__auto__.push(arg__7204__auto___9684);
{
var G__9685 = seq__8396_9680;
var G__9686 = chunk__8397_9681;
var G__9687 = count__8398_9682;
var G__9688 = (i__8399_9683 + 1);
seq__8396_9680 = G__9685;
chunk__8397_9681 = G__9686;
count__8398_9682 = G__9687;
i__8399_9683 = G__9688;
continue;
}
} else
{var temp__4092__auto___9689 = cljs.core.seq.call(null,seq__8396_9680);if(temp__4092__auto___9689)
{var seq__8396_9690__$1 = temp__4092__auto___9689;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8396_9690__$1))
{var c__5632__auto___9691 = cljs.core.chunk_first.call(null,seq__8396_9690__$1);{
var G__9692 = cljs.core.chunk_rest.call(null,seq__8396_9690__$1);
var G__9693 = c__5632__auto___9691;
var G__9694 = cljs.core.count.call(null,c__5632__auto___9691);
var G__9695 = 0;
seq__8396_9680 = G__9692;
chunk__8397_9681 = G__9693;
count__8398_9682 = G__9694;
i__8399_9683 = G__9695;
continue;
}
} else
{var arg__7204__auto___9696 = cljs.core.first.call(null,seq__8396_9690__$1);a__7203__auto__.push(arg__7204__auto___9696);
{
var G__9697 = cljs.core.next.call(null,seq__8396_9690__$1);
var G__9698 = null;
var G__9699 = 0;
var G__9700 = 0;
seq__8396_9680 = G__9697;
chunk__8397_9681 = G__9698;
count__8398_9682 = G__9699;
i__8399_9683 = G__9700;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.dd.apply(null,a__7203__auto__);
};
var dd = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return dd__delegate.call(this,args__7202__auto__);};
dd.cljs$lang$maxFixedArity = 0;
dd.cljs$lang$applyTo = (function (arglist__9701){
var args__7202__auto__ = cljs.core.seq(arglist__9701);
return dd__delegate(args__7202__auto__);
});
dd.cljs$core$IFn$_invoke$arity$variadic = dd__delegate;
return dd;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.del = (function() { 
var del__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8404_9702 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8405_9703 = null;var count__8406_9704 = 0;var i__8407_9705 = 0;while(true){
if((i__8407_9705 < count__8406_9704))
{var arg__7204__auto___9706 = cljs.core._nth.call(null,chunk__8405_9703,i__8407_9705);a__7203__auto__.push(arg__7204__auto___9706);
{
var G__9707 = seq__8404_9702;
var G__9708 = chunk__8405_9703;
var G__9709 = count__8406_9704;
var G__9710 = (i__8407_9705 + 1);
seq__8404_9702 = G__9707;
chunk__8405_9703 = G__9708;
count__8406_9704 = G__9709;
i__8407_9705 = G__9710;
continue;
}
} else
{var temp__4092__auto___9711 = cljs.core.seq.call(null,seq__8404_9702);if(temp__4092__auto___9711)
{var seq__8404_9712__$1 = temp__4092__auto___9711;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8404_9712__$1))
{var c__5632__auto___9713 = cljs.core.chunk_first.call(null,seq__8404_9712__$1);{
var G__9714 = cljs.core.chunk_rest.call(null,seq__8404_9712__$1);
var G__9715 = c__5632__auto___9713;
var G__9716 = cljs.core.count.call(null,c__5632__auto___9713);
var G__9717 = 0;
seq__8404_9702 = G__9714;
chunk__8405_9703 = G__9715;
count__8406_9704 = G__9716;
i__8407_9705 = G__9717;
continue;
}
} else
{var arg__7204__auto___9718 = cljs.core.first.call(null,seq__8404_9712__$1);a__7203__auto__.push(arg__7204__auto___9718);
{
var G__9719 = cljs.core.next.call(null,seq__8404_9712__$1);
var G__9720 = null;
var G__9721 = 0;
var G__9722 = 0;
seq__8404_9702 = G__9719;
chunk__8405_9703 = G__9720;
count__8406_9704 = G__9721;
i__8407_9705 = G__9722;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.del.apply(null,a__7203__auto__);
};
var del = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return del__delegate.call(this,args__7202__auto__);};
del.cljs$lang$maxFixedArity = 0;
del.cljs$lang$applyTo = (function (arglist__9723){
var args__7202__auto__ = cljs.core.seq(arglist__9723);
return del__delegate(args__7202__auto__);
});
del.cljs$core$IFn$_invoke$arity$variadic = del__delegate;
return del;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.details = (function() { 
var details__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8412_9724 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8413_9725 = null;var count__8414_9726 = 0;var i__8415_9727 = 0;while(true){
if((i__8415_9727 < count__8414_9726))
{var arg__7204__auto___9728 = cljs.core._nth.call(null,chunk__8413_9725,i__8415_9727);a__7203__auto__.push(arg__7204__auto___9728);
{
var G__9729 = seq__8412_9724;
var G__9730 = chunk__8413_9725;
var G__9731 = count__8414_9726;
var G__9732 = (i__8415_9727 + 1);
seq__8412_9724 = G__9729;
chunk__8413_9725 = G__9730;
count__8414_9726 = G__9731;
i__8415_9727 = G__9732;
continue;
}
} else
{var temp__4092__auto___9733 = cljs.core.seq.call(null,seq__8412_9724);if(temp__4092__auto___9733)
{var seq__8412_9734__$1 = temp__4092__auto___9733;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8412_9734__$1))
{var c__5632__auto___9735 = cljs.core.chunk_first.call(null,seq__8412_9734__$1);{
var G__9736 = cljs.core.chunk_rest.call(null,seq__8412_9734__$1);
var G__9737 = c__5632__auto___9735;
var G__9738 = cljs.core.count.call(null,c__5632__auto___9735);
var G__9739 = 0;
seq__8412_9724 = G__9736;
chunk__8413_9725 = G__9737;
count__8414_9726 = G__9738;
i__8415_9727 = G__9739;
continue;
}
} else
{var arg__7204__auto___9740 = cljs.core.first.call(null,seq__8412_9734__$1);a__7203__auto__.push(arg__7204__auto___9740);
{
var G__9741 = cljs.core.next.call(null,seq__8412_9734__$1);
var G__9742 = null;
var G__9743 = 0;
var G__9744 = 0;
seq__8412_9724 = G__9741;
chunk__8413_9725 = G__9742;
count__8414_9726 = G__9743;
i__8415_9727 = G__9744;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.details.apply(null,a__7203__auto__);
};
var details = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return details__delegate.call(this,args__7202__auto__);};
details.cljs$lang$maxFixedArity = 0;
details.cljs$lang$applyTo = (function (arglist__9745){
var args__7202__auto__ = cljs.core.seq(arglist__9745);
return details__delegate(args__7202__auto__);
});
details.cljs$core$IFn$_invoke$arity$variadic = details__delegate;
return details;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.dfn = (function() { 
var dfn__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8420_9746 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8421_9747 = null;var count__8422_9748 = 0;var i__8423_9749 = 0;while(true){
if((i__8423_9749 < count__8422_9748))
{var arg__7204__auto___9750 = cljs.core._nth.call(null,chunk__8421_9747,i__8423_9749);a__7203__auto__.push(arg__7204__auto___9750);
{
var G__9751 = seq__8420_9746;
var G__9752 = chunk__8421_9747;
var G__9753 = count__8422_9748;
var G__9754 = (i__8423_9749 + 1);
seq__8420_9746 = G__9751;
chunk__8421_9747 = G__9752;
count__8422_9748 = G__9753;
i__8423_9749 = G__9754;
continue;
}
} else
{var temp__4092__auto___9755 = cljs.core.seq.call(null,seq__8420_9746);if(temp__4092__auto___9755)
{var seq__8420_9756__$1 = temp__4092__auto___9755;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8420_9756__$1))
{var c__5632__auto___9757 = cljs.core.chunk_first.call(null,seq__8420_9756__$1);{
var G__9758 = cljs.core.chunk_rest.call(null,seq__8420_9756__$1);
var G__9759 = c__5632__auto___9757;
var G__9760 = cljs.core.count.call(null,c__5632__auto___9757);
var G__9761 = 0;
seq__8420_9746 = G__9758;
chunk__8421_9747 = G__9759;
count__8422_9748 = G__9760;
i__8423_9749 = G__9761;
continue;
}
} else
{var arg__7204__auto___9762 = cljs.core.first.call(null,seq__8420_9756__$1);a__7203__auto__.push(arg__7204__auto___9762);
{
var G__9763 = cljs.core.next.call(null,seq__8420_9756__$1);
var G__9764 = null;
var G__9765 = 0;
var G__9766 = 0;
seq__8420_9746 = G__9763;
chunk__8421_9747 = G__9764;
count__8422_9748 = G__9765;
i__8423_9749 = G__9766;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.dfn.apply(null,a__7203__auto__);
};
var dfn = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return dfn__delegate.call(this,args__7202__auto__);};
dfn.cljs$lang$maxFixedArity = 0;
dfn.cljs$lang$applyTo = (function (arglist__9767){
var args__7202__auto__ = cljs.core.seq(arglist__9767);
return dfn__delegate(args__7202__auto__);
});
dfn.cljs$core$IFn$_invoke$arity$variadic = dfn__delegate;
return dfn;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.div = (function() { 
var div__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8428_9768 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8429_9769 = null;var count__8430_9770 = 0;var i__8431_9771 = 0;while(true){
if((i__8431_9771 < count__8430_9770))
{var arg__7204__auto___9772 = cljs.core._nth.call(null,chunk__8429_9769,i__8431_9771);a__7203__auto__.push(arg__7204__auto___9772);
{
var G__9773 = seq__8428_9768;
var G__9774 = chunk__8429_9769;
var G__9775 = count__8430_9770;
var G__9776 = (i__8431_9771 + 1);
seq__8428_9768 = G__9773;
chunk__8429_9769 = G__9774;
count__8430_9770 = G__9775;
i__8431_9771 = G__9776;
continue;
}
} else
{var temp__4092__auto___9777 = cljs.core.seq.call(null,seq__8428_9768);if(temp__4092__auto___9777)
{var seq__8428_9778__$1 = temp__4092__auto___9777;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8428_9778__$1))
{var c__5632__auto___9779 = cljs.core.chunk_first.call(null,seq__8428_9778__$1);{
var G__9780 = cljs.core.chunk_rest.call(null,seq__8428_9778__$1);
var G__9781 = c__5632__auto___9779;
var G__9782 = cljs.core.count.call(null,c__5632__auto___9779);
var G__9783 = 0;
seq__8428_9768 = G__9780;
chunk__8429_9769 = G__9781;
count__8430_9770 = G__9782;
i__8431_9771 = G__9783;
continue;
}
} else
{var arg__7204__auto___9784 = cljs.core.first.call(null,seq__8428_9778__$1);a__7203__auto__.push(arg__7204__auto___9784);
{
var G__9785 = cljs.core.next.call(null,seq__8428_9778__$1);
var G__9786 = null;
var G__9787 = 0;
var G__9788 = 0;
seq__8428_9768 = G__9785;
chunk__8429_9769 = G__9786;
count__8430_9770 = G__9787;
i__8431_9771 = G__9788;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.div.apply(null,a__7203__auto__);
};
var div = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return div__delegate.call(this,args__7202__auto__);};
div.cljs$lang$maxFixedArity = 0;
div.cljs$lang$applyTo = (function (arglist__9789){
var args__7202__auto__ = cljs.core.seq(arglist__9789);
return div__delegate(args__7202__auto__);
});
div.cljs$core$IFn$_invoke$arity$variadic = div__delegate;
return div;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.dl = (function() { 
var dl__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8436_9790 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8437_9791 = null;var count__8438_9792 = 0;var i__8439_9793 = 0;while(true){
if((i__8439_9793 < count__8438_9792))
{var arg__7204__auto___9794 = cljs.core._nth.call(null,chunk__8437_9791,i__8439_9793);a__7203__auto__.push(arg__7204__auto___9794);
{
var G__9795 = seq__8436_9790;
var G__9796 = chunk__8437_9791;
var G__9797 = count__8438_9792;
var G__9798 = (i__8439_9793 + 1);
seq__8436_9790 = G__9795;
chunk__8437_9791 = G__9796;
count__8438_9792 = G__9797;
i__8439_9793 = G__9798;
continue;
}
} else
{var temp__4092__auto___9799 = cljs.core.seq.call(null,seq__8436_9790);if(temp__4092__auto___9799)
{var seq__8436_9800__$1 = temp__4092__auto___9799;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8436_9800__$1))
{var c__5632__auto___9801 = cljs.core.chunk_first.call(null,seq__8436_9800__$1);{
var G__9802 = cljs.core.chunk_rest.call(null,seq__8436_9800__$1);
var G__9803 = c__5632__auto___9801;
var G__9804 = cljs.core.count.call(null,c__5632__auto___9801);
var G__9805 = 0;
seq__8436_9790 = G__9802;
chunk__8437_9791 = G__9803;
count__8438_9792 = G__9804;
i__8439_9793 = G__9805;
continue;
}
} else
{var arg__7204__auto___9806 = cljs.core.first.call(null,seq__8436_9800__$1);a__7203__auto__.push(arg__7204__auto___9806);
{
var G__9807 = cljs.core.next.call(null,seq__8436_9800__$1);
var G__9808 = null;
var G__9809 = 0;
var G__9810 = 0;
seq__8436_9790 = G__9807;
chunk__8437_9791 = G__9808;
count__8438_9792 = G__9809;
i__8439_9793 = G__9810;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.dl.apply(null,a__7203__auto__);
};
var dl = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return dl__delegate.call(this,args__7202__auto__);};
dl.cljs$lang$maxFixedArity = 0;
dl.cljs$lang$applyTo = (function (arglist__9811){
var args__7202__auto__ = cljs.core.seq(arglist__9811);
return dl__delegate(args__7202__auto__);
});
dl.cljs$core$IFn$_invoke$arity$variadic = dl__delegate;
return dl;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.dt = (function() { 
var dt__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8444_9812 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8445_9813 = null;var count__8446_9814 = 0;var i__8447_9815 = 0;while(true){
if((i__8447_9815 < count__8446_9814))
{var arg__7204__auto___9816 = cljs.core._nth.call(null,chunk__8445_9813,i__8447_9815);a__7203__auto__.push(arg__7204__auto___9816);
{
var G__9817 = seq__8444_9812;
var G__9818 = chunk__8445_9813;
var G__9819 = count__8446_9814;
var G__9820 = (i__8447_9815 + 1);
seq__8444_9812 = G__9817;
chunk__8445_9813 = G__9818;
count__8446_9814 = G__9819;
i__8447_9815 = G__9820;
continue;
}
} else
{var temp__4092__auto___9821 = cljs.core.seq.call(null,seq__8444_9812);if(temp__4092__auto___9821)
{var seq__8444_9822__$1 = temp__4092__auto___9821;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8444_9822__$1))
{var c__5632__auto___9823 = cljs.core.chunk_first.call(null,seq__8444_9822__$1);{
var G__9824 = cljs.core.chunk_rest.call(null,seq__8444_9822__$1);
var G__9825 = c__5632__auto___9823;
var G__9826 = cljs.core.count.call(null,c__5632__auto___9823);
var G__9827 = 0;
seq__8444_9812 = G__9824;
chunk__8445_9813 = G__9825;
count__8446_9814 = G__9826;
i__8447_9815 = G__9827;
continue;
}
} else
{var arg__7204__auto___9828 = cljs.core.first.call(null,seq__8444_9822__$1);a__7203__auto__.push(arg__7204__auto___9828);
{
var G__9829 = cljs.core.next.call(null,seq__8444_9822__$1);
var G__9830 = null;
var G__9831 = 0;
var G__9832 = 0;
seq__8444_9812 = G__9829;
chunk__8445_9813 = G__9830;
count__8446_9814 = G__9831;
i__8447_9815 = G__9832;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.dt.apply(null,a__7203__auto__);
};
var dt = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return dt__delegate.call(this,args__7202__auto__);};
dt.cljs$lang$maxFixedArity = 0;
dt.cljs$lang$applyTo = (function (arglist__9833){
var args__7202__auto__ = cljs.core.seq(arglist__9833);
return dt__delegate(args__7202__auto__);
});
dt.cljs$core$IFn$_invoke$arity$variadic = dt__delegate;
return dt;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.em = (function() { 
var em__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8452_9834 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8453_9835 = null;var count__8454_9836 = 0;var i__8455_9837 = 0;while(true){
if((i__8455_9837 < count__8454_9836))
{var arg__7204__auto___9838 = cljs.core._nth.call(null,chunk__8453_9835,i__8455_9837);a__7203__auto__.push(arg__7204__auto___9838);
{
var G__9839 = seq__8452_9834;
var G__9840 = chunk__8453_9835;
var G__9841 = count__8454_9836;
var G__9842 = (i__8455_9837 + 1);
seq__8452_9834 = G__9839;
chunk__8453_9835 = G__9840;
count__8454_9836 = G__9841;
i__8455_9837 = G__9842;
continue;
}
} else
{var temp__4092__auto___9843 = cljs.core.seq.call(null,seq__8452_9834);if(temp__4092__auto___9843)
{var seq__8452_9844__$1 = temp__4092__auto___9843;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8452_9844__$1))
{var c__5632__auto___9845 = cljs.core.chunk_first.call(null,seq__8452_9844__$1);{
var G__9846 = cljs.core.chunk_rest.call(null,seq__8452_9844__$1);
var G__9847 = c__5632__auto___9845;
var G__9848 = cljs.core.count.call(null,c__5632__auto___9845);
var G__9849 = 0;
seq__8452_9834 = G__9846;
chunk__8453_9835 = G__9847;
count__8454_9836 = G__9848;
i__8455_9837 = G__9849;
continue;
}
} else
{var arg__7204__auto___9850 = cljs.core.first.call(null,seq__8452_9844__$1);a__7203__auto__.push(arg__7204__auto___9850);
{
var G__9851 = cljs.core.next.call(null,seq__8452_9844__$1);
var G__9852 = null;
var G__9853 = 0;
var G__9854 = 0;
seq__8452_9834 = G__9851;
chunk__8453_9835 = G__9852;
count__8454_9836 = G__9853;
i__8455_9837 = G__9854;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.em.apply(null,a__7203__auto__);
};
var em = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return em__delegate.call(this,args__7202__auto__);};
em.cljs$lang$maxFixedArity = 0;
em.cljs$lang$applyTo = (function (arglist__9855){
var args__7202__auto__ = cljs.core.seq(arglist__9855);
return em__delegate(args__7202__auto__);
});
em.cljs$core$IFn$_invoke$arity$variadic = em__delegate;
return em;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.embed = (function() { 
var embed__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8468_9856 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8469_9857 = null;var count__8470_9858 = 0;var i__8471_9859 = 0;while(true){
if((i__8471_9859 < count__8470_9858))
{var arg__7204__auto___9860 = cljs.core._nth.call(null,chunk__8469_9857,i__8471_9859);a__7203__auto__.push(arg__7204__auto___9860);
{
var G__9861 = seq__8468_9856;
var G__9862 = chunk__8469_9857;
var G__9863 = count__8470_9858;
var G__9864 = (i__8471_9859 + 1);
seq__8468_9856 = G__9861;
chunk__8469_9857 = G__9862;
count__8470_9858 = G__9863;
i__8471_9859 = G__9864;
continue;
}
} else
{var temp__4092__auto___9865 = cljs.core.seq.call(null,seq__8468_9856);if(temp__4092__auto___9865)
{var seq__8468_9866__$1 = temp__4092__auto___9865;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8468_9866__$1))
{var c__5632__auto___9867 = cljs.core.chunk_first.call(null,seq__8468_9866__$1);{
var G__9868 = cljs.core.chunk_rest.call(null,seq__8468_9866__$1);
var G__9869 = c__5632__auto___9867;
var G__9870 = cljs.core.count.call(null,c__5632__auto___9867);
var G__9871 = 0;
seq__8468_9856 = G__9868;
chunk__8469_9857 = G__9869;
count__8470_9858 = G__9870;
i__8471_9859 = G__9871;
continue;
}
} else
{var arg__7204__auto___9872 = cljs.core.first.call(null,seq__8468_9866__$1);a__7203__auto__.push(arg__7204__auto___9872);
{
var G__9873 = cljs.core.next.call(null,seq__8468_9866__$1);
var G__9874 = null;
var G__9875 = 0;
var G__9876 = 0;
seq__8468_9856 = G__9873;
chunk__8469_9857 = G__9874;
count__8470_9858 = G__9875;
i__8471_9859 = G__9876;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.embed.apply(null,a__7203__auto__);
};
var embed = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return embed__delegate.call(this,args__7202__auto__);};
embed.cljs$lang$maxFixedArity = 0;
embed.cljs$lang$applyTo = (function (arglist__9877){
var args__7202__auto__ = cljs.core.seq(arglist__9877);
return embed__delegate(args__7202__auto__);
});
embed.cljs$core$IFn$_invoke$arity$variadic = embed__delegate;
return embed;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.fieldset = (function() { 
var fieldset__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8476_9878 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8477_9879 = null;var count__8478_9880 = 0;var i__8479_9881 = 0;while(true){
if((i__8479_9881 < count__8478_9880))
{var arg__7204__auto___9882 = cljs.core._nth.call(null,chunk__8477_9879,i__8479_9881);a__7203__auto__.push(arg__7204__auto___9882);
{
var G__9883 = seq__8476_9878;
var G__9884 = chunk__8477_9879;
var G__9885 = count__8478_9880;
var G__9886 = (i__8479_9881 + 1);
seq__8476_9878 = G__9883;
chunk__8477_9879 = G__9884;
count__8478_9880 = G__9885;
i__8479_9881 = G__9886;
continue;
}
} else
{var temp__4092__auto___9887 = cljs.core.seq.call(null,seq__8476_9878);if(temp__4092__auto___9887)
{var seq__8476_9888__$1 = temp__4092__auto___9887;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8476_9888__$1))
{var c__5632__auto___9889 = cljs.core.chunk_first.call(null,seq__8476_9888__$1);{
var G__9890 = cljs.core.chunk_rest.call(null,seq__8476_9888__$1);
var G__9891 = c__5632__auto___9889;
var G__9892 = cljs.core.count.call(null,c__5632__auto___9889);
var G__9893 = 0;
seq__8476_9878 = G__9890;
chunk__8477_9879 = G__9891;
count__8478_9880 = G__9892;
i__8479_9881 = G__9893;
continue;
}
} else
{var arg__7204__auto___9894 = cljs.core.first.call(null,seq__8476_9888__$1);a__7203__auto__.push(arg__7204__auto___9894);
{
var G__9895 = cljs.core.next.call(null,seq__8476_9888__$1);
var G__9896 = null;
var G__9897 = 0;
var G__9898 = 0;
seq__8476_9878 = G__9895;
chunk__8477_9879 = G__9896;
count__8478_9880 = G__9897;
i__8479_9881 = G__9898;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.fieldset.apply(null,a__7203__auto__);
};
var fieldset = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return fieldset__delegate.call(this,args__7202__auto__);};
fieldset.cljs$lang$maxFixedArity = 0;
fieldset.cljs$lang$applyTo = (function (arglist__9899){
var args__7202__auto__ = cljs.core.seq(arglist__9899);
return fieldset__delegate(args__7202__auto__);
});
fieldset.cljs$core$IFn$_invoke$arity$variadic = fieldset__delegate;
return fieldset;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.figcaption = (function() { 
var figcaption__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8484_9900 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8485_9901 = null;var count__8486_9902 = 0;var i__8487_9903 = 0;while(true){
if((i__8487_9903 < count__8486_9902))
{var arg__7204__auto___9904 = cljs.core._nth.call(null,chunk__8485_9901,i__8487_9903);a__7203__auto__.push(arg__7204__auto___9904);
{
var G__9905 = seq__8484_9900;
var G__9906 = chunk__8485_9901;
var G__9907 = count__8486_9902;
var G__9908 = (i__8487_9903 + 1);
seq__8484_9900 = G__9905;
chunk__8485_9901 = G__9906;
count__8486_9902 = G__9907;
i__8487_9903 = G__9908;
continue;
}
} else
{var temp__4092__auto___9909 = cljs.core.seq.call(null,seq__8484_9900);if(temp__4092__auto___9909)
{var seq__8484_9910__$1 = temp__4092__auto___9909;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8484_9910__$1))
{var c__5632__auto___9911 = cljs.core.chunk_first.call(null,seq__8484_9910__$1);{
var G__9912 = cljs.core.chunk_rest.call(null,seq__8484_9910__$1);
var G__9913 = c__5632__auto___9911;
var G__9914 = cljs.core.count.call(null,c__5632__auto___9911);
var G__9915 = 0;
seq__8484_9900 = G__9912;
chunk__8485_9901 = G__9913;
count__8486_9902 = G__9914;
i__8487_9903 = G__9915;
continue;
}
} else
{var arg__7204__auto___9916 = cljs.core.first.call(null,seq__8484_9910__$1);a__7203__auto__.push(arg__7204__auto___9916);
{
var G__9917 = cljs.core.next.call(null,seq__8484_9910__$1);
var G__9918 = null;
var G__9919 = 0;
var G__9920 = 0;
seq__8484_9900 = G__9917;
chunk__8485_9901 = G__9918;
count__8486_9902 = G__9919;
i__8487_9903 = G__9920;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.figcaption.apply(null,a__7203__auto__);
};
var figcaption = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return figcaption__delegate.call(this,args__7202__auto__);};
figcaption.cljs$lang$maxFixedArity = 0;
figcaption.cljs$lang$applyTo = (function (arglist__9921){
var args__7202__auto__ = cljs.core.seq(arglist__9921);
return figcaption__delegate(args__7202__auto__);
});
figcaption.cljs$core$IFn$_invoke$arity$variadic = figcaption__delegate;
return figcaption;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.figure = (function() { 
var figure__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8492_9922 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8493_9923 = null;var count__8494_9924 = 0;var i__8495_9925 = 0;while(true){
if((i__8495_9925 < count__8494_9924))
{var arg__7204__auto___9926 = cljs.core._nth.call(null,chunk__8493_9923,i__8495_9925);a__7203__auto__.push(arg__7204__auto___9926);
{
var G__9927 = seq__8492_9922;
var G__9928 = chunk__8493_9923;
var G__9929 = count__8494_9924;
var G__9930 = (i__8495_9925 + 1);
seq__8492_9922 = G__9927;
chunk__8493_9923 = G__9928;
count__8494_9924 = G__9929;
i__8495_9925 = G__9930;
continue;
}
} else
{var temp__4092__auto___9931 = cljs.core.seq.call(null,seq__8492_9922);if(temp__4092__auto___9931)
{var seq__8492_9932__$1 = temp__4092__auto___9931;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8492_9932__$1))
{var c__5632__auto___9933 = cljs.core.chunk_first.call(null,seq__8492_9932__$1);{
var G__9934 = cljs.core.chunk_rest.call(null,seq__8492_9932__$1);
var G__9935 = c__5632__auto___9933;
var G__9936 = cljs.core.count.call(null,c__5632__auto___9933);
var G__9937 = 0;
seq__8492_9922 = G__9934;
chunk__8493_9923 = G__9935;
count__8494_9924 = G__9936;
i__8495_9925 = G__9937;
continue;
}
} else
{var arg__7204__auto___9938 = cljs.core.first.call(null,seq__8492_9932__$1);a__7203__auto__.push(arg__7204__auto___9938);
{
var G__9939 = cljs.core.next.call(null,seq__8492_9932__$1);
var G__9940 = null;
var G__9941 = 0;
var G__9942 = 0;
seq__8492_9922 = G__9939;
chunk__8493_9923 = G__9940;
count__8494_9924 = G__9941;
i__8495_9925 = G__9942;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.figure.apply(null,a__7203__auto__);
};
var figure = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return figure__delegate.call(this,args__7202__auto__);};
figure.cljs$lang$maxFixedArity = 0;
figure.cljs$lang$applyTo = (function (arglist__9943){
var args__7202__auto__ = cljs.core.seq(arglist__9943);
return figure__delegate(args__7202__auto__);
});
figure.cljs$core$IFn$_invoke$arity$variadic = figure__delegate;
return figure;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.footer = (function() { 
var footer__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8500_9944 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8501_9945 = null;var count__8502_9946 = 0;var i__8503_9947 = 0;while(true){
if((i__8503_9947 < count__8502_9946))
{var arg__7204__auto___9948 = cljs.core._nth.call(null,chunk__8501_9945,i__8503_9947);a__7203__auto__.push(arg__7204__auto___9948);
{
var G__9949 = seq__8500_9944;
var G__9950 = chunk__8501_9945;
var G__9951 = count__8502_9946;
var G__9952 = (i__8503_9947 + 1);
seq__8500_9944 = G__9949;
chunk__8501_9945 = G__9950;
count__8502_9946 = G__9951;
i__8503_9947 = G__9952;
continue;
}
} else
{var temp__4092__auto___9953 = cljs.core.seq.call(null,seq__8500_9944);if(temp__4092__auto___9953)
{var seq__8500_9954__$1 = temp__4092__auto___9953;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8500_9954__$1))
{var c__5632__auto___9955 = cljs.core.chunk_first.call(null,seq__8500_9954__$1);{
var G__9956 = cljs.core.chunk_rest.call(null,seq__8500_9954__$1);
var G__9957 = c__5632__auto___9955;
var G__9958 = cljs.core.count.call(null,c__5632__auto___9955);
var G__9959 = 0;
seq__8500_9944 = G__9956;
chunk__8501_9945 = G__9957;
count__8502_9946 = G__9958;
i__8503_9947 = G__9959;
continue;
}
} else
{var arg__7204__auto___9960 = cljs.core.first.call(null,seq__8500_9954__$1);a__7203__auto__.push(arg__7204__auto___9960);
{
var G__9961 = cljs.core.next.call(null,seq__8500_9954__$1);
var G__9962 = null;
var G__9963 = 0;
var G__9964 = 0;
seq__8500_9944 = G__9961;
chunk__8501_9945 = G__9962;
count__8502_9946 = G__9963;
i__8503_9947 = G__9964;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.footer.apply(null,a__7203__auto__);
};
var footer = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return footer__delegate.call(this,args__7202__auto__);};
footer.cljs$lang$maxFixedArity = 0;
footer.cljs$lang$applyTo = (function (arglist__9965){
var args__7202__auto__ = cljs.core.seq(arglist__9965);
return footer__delegate(args__7202__auto__);
});
footer.cljs$core$IFn$_invoke$arity$variadic = footer__delegate;
return footer;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.form = (function() { 
var form__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8508_9966 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8509_9967 = null;var count__8510_9968 = 0;var i__8511_9969 = 0;while(true){
if((i__8511_9969 < count__8510_9968))
{var arg__7204__auto___9970 = cljs.core._nth.call(null,chunk__8509_9967,i__8511_9969);a__7203__auto__.push(arg__7204__auto___9970);
{
var G__9971 = seq__8508_9966;
var G__9972 = chunk__8509_9967;
var G__9973 = count__8510_9968;
var G__9974 = (i__8511_9969 + 1);
seq__8508_9966 = G__9971;
chunk__8509_9967 = G__9972;
count__8510_9968 = G__9973;
i__8511_9969 = G__9974;
continue;
}
} else
{var temp__4092__auto___9975 = cljs.core.seq.call(null,seq__8508_9966);if(temp__4092__auto___9975)
{var seq__8508_9976__$1 = temp__4092__auto___9975;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8508_9976__$1))
{var c__5632__auto___9977 = cljs.core.chunk_first.call(null,seq__8508_9976__$1);{
var G__9978 = cljs.core.chunk_rest.call(null,seq__8508_9976__$1);
var G__9979 = c__5632__auto___9977;
var G__9980 = cljs.core.count.call(null,c__5632__auto___9977);
var G__9981 = 0;
seq__8508_9966 = G__9978;
chunk__8509_9967 = G__9979;
count__8510_9968 = G__9980;
i__8511_9969 = G__9981;
continue;
}
} else
{var arg__7204__auto___9982 = cljs.core.first.call(null,seq__8508_9976__$1);a__7203__auto__.push(arg__7204__auto___9982);
{
var G__9983 = cljs.core.next.call(null,seq__8508_9976__$1);
var G__9984 = null;
var G__9985 = 0;
var G__9986 = 0;
seq__8508_9966 = G__9983;
chunk__8509_9967 = G__9984;
count__8510_9968 = G__9985;
i__8511_9969 = G__9986;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.form.apply(null,a__7203__auto__);
};
var form = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return form__delegate.call(this,args__7202__auto__);};
form.cljs$lang$maxFixedArity = 0;
form.cljs$lang$applyTo = (function (arglist__9987){
var args__7202__auto__ = cljs.core.seq(arglist__9987);
return form__delegate(args__7202__auto__);
});
form.cljs$core$IFn$_invoke$arity$variadic = form__delegate;
return form;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h1 = (function() { 
var h1__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8516_9988 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8517_9989 = null;var count__8518_9990 = 0;var i__8519_9991 = 0;while(true){
if((i__8519_9991 < count__8518_9990))
{var arg__7204__auto___9992 = cljs.core._nth.call(null,chunk__8517_9989,i__8519_9991);a__7203__auto__.push(arg__7204__auto___9992);
{
var G__9993 = seq__8516_9988;
var G__9994 = chunk__8517_9989;
var G__9995 = count__8518_9990;
var G__9996 = (i__8519_9991 + 1);
seq__8516_9988 = G__9993;
chunk__8517_9989 = G__9994;
count__8518_9990 = G__9995;
i__8519_9991 = G__9996;
continue;
}
} else
{var temp__4092__auto___9997 = cljs.core.seq.call(null,seq__8516_9988);if(temp__4092__auto___9997)
{var seq__8516_9998__$1 = temp__4092__auto___9997;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8516_9998__$1))
{var c__5632__auto___9999 = cljs.core.chunk_first.call(null,seq__8516_9998__$1);{
var G__10000 = cljs.core.chunk_rest.call(null,seq__8516_9998__$1);
var G__10001 = c__5632__auto___9999;
var G__10002 = cljs.core.count.call(null,c__5632__auto___9999);
var G__10003 = 0;
seq__8516_9988 = G__10000;
chunk__8517_9989 = G__10001;
count__8518_9990 = G__10002;
i__8519_9991 = G__10003;
continue;
}
} else
{var arg__7204__auto___10004 = cljs.core.first.call(null,seq__8516_9998__$1);a__7203__auto__.push(arg__7204__auto___10004);
{
var G__10005 = cljs.core.next.call(null,seq__8516_9998__$1);
var G__10006 = null;
var G__10007 = 0;
var G__10008 = 0;
seq__8516_9988 = G__10005;
chunk__8517_9989 = G__10006;
count__8518_9990 = G__10007;
i__8519_9991 = G__10008;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h1.apply(null,a__7203__auto__);
};
var h1 = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h1__delegate.call(this,args__7202__auto__);};
h1.cljs$lang$maxFixedArity = 0;
h1.cljs$lang$applyTo = (function (arglist__10009){
var args__7202__auto__ = cljs.core.seq(arglist__10009);
return h1__delegate(args__7202__auto__);
});
h1.cljs$core$IFn$_invoke$arity$variadic = h1__delegate;
return h1;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h2 = (function() { 
var h2__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8524_10010 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8525_10011 = null;var count__8526_10012 = 0;var i__8527_10013 = 0;while(true){
if((i__8527_10013 < count__8526_10012))
{var arg__7204__auto___10014 = cljs.core._nth.call(null,chunk__8525_10011,i__8527_10013);a__7203__auto__.push(arg__7204__auto___10014);
{
var G__10015 = seq__8524_10010;
var G__10016 = chunk__8525_10011;
var G__10017 = count__8526_10012;
var G__10018 = (i__8527_10013 + 1);
seq__8524_10010 = G__10015;
chunk__8525_10011 = G__10016;
count__8526_10012 = G__10017;
i__8527_10013 = G__10018;
continue;
}
} else
{var temp__4092__auto___10019 = cljs.core.seq.call(null,seq__8524_10010);if(temp__4092__auto___10019)
{var seq__8524_10020__$1 = temp__4092__auto___10019;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8524_10020__$1))
{var c__5632__auto___10021 = cljs.core.chunk_first.call(null,seq__8524_10020__$1);{
var G__10022 = cljs.core.chunk_rest.call(null,seq__8524_10020__$1);
var G__10023 = c__5632__auto___10021;
var G__10024 = cljs.core.count.call(null,c__5632__auto___10021);
var G__10025 = 0;
seq__8524_10010 = G__10022;
chunk__8525_10011 = G__10023;
count__8526_10012 = G__10024;
i__8527_10013 = G__10025;
continue;
}
} else
{var arg__7204__auto___10026 = cljs.core.first.call(null,seq__8524_10020__$1);a__7203__auto__.push(arg__7204__auto___10026);
{
var G__10027 = cljs.core.next.call(null,seq__8524_10020__$1);
var G__10028 = null;
var G__10029 = 0;
var G__10030 = 0;
seq__8524_10010 = G__10027;
chunk__8525_10011 = G__10028;
count__8526_10012 = G__10029;
i__8527_10013 = G__10030;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h2.apply(null,a__7203__auto__);
};
var h2 = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h2__delegate.call(this,args__7202__auto__);};
h2.cljs$lang$maxFixedArity = 0;
h2.cljs$lang$applyTo = (function (arglist__10031){
var args__7202__auto__ = cljs.core.seq(arglist__10031);
return h2__delegate(args__7202__auto__);
});
h2.cljs$core$IFn$_invoke$arity$variadic = h2__delegate;
return h2;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h3 = (function() { 
var h3__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8532_10032 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8533_10033 = null;var count__8534_10034 = 0;var i__8535_10035 = 0;while(true){
if((i__8535_10035 < count__8534_10034))
{var arg__7204__auto___10036 = cljs.core._nth.call(null,chunk__8533_10033,i__8535_10035);a__7203__auto__.push(arg__7204__auto___10036);
{
var G__10037 = seq__8532_10032;
var G__10038 = chunk__8533_10033;
var G__10039 = count__8534_10034;
var G__10040 = (i__8535_10035 + 1);
seq__8532_10032 = G__10037;
chunk__8533_10033 = G__10038;
count__8534_10034 = G__10039;
i__8535_10035 = G__10040;
continue;
}
} else
{var temp__4092__auto___10041 = cljs.core.seq.call(null,seq__8532_10032);if(temp__4092__auto___10041)
{var seq__8532_10042__$1 = temp__4092__auto___10041;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8532_10042__$1))
{var c__5632__auto___10043 = cljs.core.chunk_first.call(null,seq__8532_10042__$1);{
var G__10044 = cljs.core.chunk_rest.call(null,seq__8532_10042__$1);
var G__10045 = c__5632__auto___10043;
var G__10046 = cljs.core.count.call(null,c__5632__auto___10043);
var G__10047 = 0;
seq__8532_10032 = G__10044;
chunk__8533_10033 = G__10045;
count__8534_10034 = G__10046;
i__8535_10035 = G__10047;
continue;
}
} else
{var arg__7204__auto___10048 = cljs.core.first.call(null,seq__8532_10042__$1);a__7203__auto__.push(arg__7204__auto___10048);
{
var G__10049 = cljs.core.next.call(null,seq__8532_10042__$1);
var G__10050 = null;
var G__10051 = 0;
var G__10052 = 0;
seq__8532_10032 = G__10049;
chunk__8533_10033 = G__10050;
count__8534_10034 = G__10051;
i__8535_10035 = G__10052;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h3.apply(null,a__7203__auto__);
};
var h3 = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h3__delegate.call(this,args__7202__auto__);};
h3.cljs$lang$maxFixedArity = 0;
h3.cljs$lang$applyTo = (function (arglist__10053){
var args__7202__auto__ = cljs.core.seq(arglist__10053);
return h3__delegate(args__7202__auto__);
});
h3.cljs$core$IFn$_invoke$arity$variadic = h3__delegate;
return h3;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h4 = (function() { 
var h4__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8540_10054 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8541_10055 = null;var count__8542_10056 = 0;var i__8543_10057 = 0;while(true){
if((i__8543_10057 < count__8542_10056))
{var arg__7204__auto___10058 = cljs.core._nth.call(null,chunk__8541_10055,i__8543_10057);a__7203__auto__.push(arg__7204__auto___10058);
{
var G__10059 = seq__8540_10054;
var G__10060 = chunk__8541_10055;
var G__10061 = count__8542_10056;
var G__10062 = (i__8543_10057 + 1);
seq__8540_10054 = G__10059;
chunk__8541_10055 = G__10060;
count__8542_10056 = G__10061;
i__8543_10057 = G__10062;
continue;
}
} else
{var temp__4092__auto___10063 = cljs.core.seq.call(null,seq__8540_10054);if(temp__4092__auto___10063)
{var seq__8540_10064__$1 = temp__4092__auto___10063;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8540_10064__$1))
{var c__5632__auto___10065 = cljs.core.chunk_first.call(null,seq__8540_10064__$1);{
var G__10066 = cljs.core.chunk_rest.call(null,seq__8540_10064__$1);
var G__10067 = c__5632__auto___10065;
var G__10068 = cljs.core.count.call(null,c__5632__auto___10065);
var G__10069 = 0;
seq__8540_10054 = G__10066;
chunk__8541_10055 = G__10067;
count__8542_10056 = G__10068;
i__8543_10057 = G__10069;
continue;
}
} else
{var arg__7204__auto___10070 = cljs.core.first.call(null,seq__8540_10064__$1);a__7203__auto__.push(arg__7204__auto___10070);
{
var G__10071 = cljs.core.next.call(null,seq__8540_10064__$1);
var G__10072 = null;
var G__10073 = 0;
var G__10074 = 0;
seq__8540_10054 = G__10071;
chunk__8541_10055 = G__10072;
count__8542_10056 = G__10073;
i__8543_10057 = G__10074;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h4.apply(null,a__7203__auto__);
};
var h4 = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h4__delegate.call(this,args__7202__auto__);};
h4.cljs$lang$maxFixedArity = 0;
h4.cljs$lang$applyTo = (function (arglist__10075){
var args__7202__auto__ = cljs.core.seq(arglist__10075);
return h4__delegate(args__7202__auto__);
});
h4.cljs$core$IFn$_invoke$arity$variadic = h4__delegate;
return h4;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h5 = (function() { 
var h5__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8548_10076 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8549_10077 = null;var count__8550_10078 = 0;var i__8551_10079 = 0;while(true){
if((i__8551_10079 < count__8550_10078))
{var arg__7204__auto___10080 = cljs.core._nth.call(null,chunk__8549_10077,i__8551_10079);a__7203__auto__.push(arg__7204__auto___10080);
{
var G__10081 = seq__8548_10076;
var G__10082 = chunk__8549_10077;
var G__10083 = count__8550_10078;
var G__10084 = (i__8551_10079 + 1);
seq__8548_10076 = G__10081;
chunk__8549_10077 = G__10082;
count__8550_10078 = G__10083;
i__8551_10079 = G__10084;
continue;
}
} else
{var temp__4092__auto___10085 = cljs.core.seq.call(null,seq__8548_10076);if(temp__4092__auto___10085)
{var seq__8548_10086__$1 = temp__4092__auto___10085;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8548_10086__$1))
{var c__5632__auto___10087 = cljs.core.chunk_first.call(null,seq__8548_10086__$1);{
var G__10088 = cljs.core.chunk_rest.call(null,seq__8548_10086__$1);
var G__10089 = c__5632__auto___10087;
var G__10090 = cljs.core.count.call(null,c__5632__auto___10087);
var G__10091 = 0;
seq__8548_10076 = G__10088;
chunk__8549_10077 = G__10089;
count__8550_10078 = G__10090;
i__8551_10079 = G__10091;
continue;
}
} else
{var arg__7204__auto___10092 = cljs.core.first.call(null,seq__8548_10086__$1);a__7203__auto__.push(arg__7204__auto___10092);
{
var G__10093 = cljs.core.next.call(null,seq__8548_10086__$1);
var G__10094 = null;
var G__10095 = 0;
var G__10096 = 0;
seq__8548_10076 = G__10093;
chunk__8549_10077 = G__10094;
count__8550_10078 = G__10095;
i__8551_10079 = G__10096;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h5.apply(null,a__7203__auto__);
};
var h5 = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h5__delegate.call(this,args__7202__auto__);};
h5.cljs$lang$maxFixedArity = 0;
h5.cljs$lang$applyTo = (function (arglist__10097){
var args__7202__auto__ = cljs.core.seq(arglist__10097);
return h5__delegate(args__7202__auto__);
});
h5.cljs$core$IFn$_invoke$arity$variadic = h5__delegate;
return h5;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h6 = (function() { 
var h6__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8556_10098 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8557_10099 = null;var count__8558_10100 = 0;var i__8559_10101 = 0;while(true){
if((i__8559_10101 < count__8558_10100))
{var arg__7204__auto___10102 = cljs.core._nth.call(null,chunk__8557_10099,i__8559_10101);a__7203__auto__.push(arg__7204__auto___10102);
{
var G__10103 = seq__8556_10098;
var G__10104 = chunk__8557_10099;
var G__10105 = count__8558_10100;
var G__10106 = (i__8559_10101 + 1);
seq__8556_10098 = G__10103;
chunk__8557_10099 = G__10104;
count__8558_10100 = G__10105;
i__8559_10101 = G__10106;
continue;
}
} else
{var temp__4092__auto___10107 = cljs.core.seq.call(null,seq__8556_10098);if(temp__4092__auto___10107)
{var seq__8556_10108__$1 = temp__4092__auto___10107;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8556_10108__$1))
{var c__5632__auto___10109 = cljs.core.chunk_first.call(null,seq__8556_10108__$1);{
var G__10110 = cljs.core.chunk_rest.call(null,seq__8556_10108__$1);
var G__10111 = c__5632__auto___10109;
var G__10112 = cljs.core.count.call(null,c__5632__auto___10109);
var G__10113 = 0;
seq__8556_10098 = G__10110;
chunk__8557_10099 = G__10111;
count__8558_10100 = G__10112;
i__8559_10101 = G__10113;
continue;
}
} else
{var arg__7204__auto___10114 = cljs.core.first.call(null,seq__8556_10108__$1);a__7203__auto__.push(arg__7204__auto___10114);
{
var G__10115 = cljs.core.next.call(null,seq__8556_10108__$1);
var G__10116 = null;
var G__10117 = 0;
var G__10118 = 0;
seq__8556_10098 = G__10115;
chunk__8557_10099 = G__10116;
count__8558_10100 = G__10117;
i__8559_10101 = G__10118;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h6.apply(null,a__7203__auto__);
};
var h6 = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h6__delegate.call(this,args__7202__auto__);};
h6.cljs$lang$maxFixedArity = 0;
h6.cljs$lang$applyTo = (function (arglist__10119){
var args__7202__auto__ = cljs.core.seq(arglist__10119);
return h6__delegate(args__7202__auto__);
});
h6.cljs$core$IFn$_invoke$arity$variadic = h6__delegate;
return h6;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.head = (function() { 
var head__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8564_10120 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8565_10121 = null;var count__8566_10122 = 0;var i__8567_10123 = 0;while(true){
if((i__8567_10123 < count__8566_10122))
{var arg__7204__auto___10124 = cljs.core._nth.call(null,chunk__8565_10121,i__8567_10123);a__7203__auto__.push(arg__7204__auto___10124);
{
var G__10125 = seq__8564_10120;
var G__10126 = chunk__8565_10121;
var G__10127 = count__8566_10122;
var G__10128 = (i__8567_10123 + 1);
seq__8564_10120 = G__10125;
chunk__8565_10121 = G__10126;
count__8566_10122 = G__10127;
i__8567_10123 = G__10128;
continue;
}
} else
{var temp__4092__auto___10129 = cljs.core.seq.call(null,seq__8564_10120);if(temp__4092__auto___10129)
{var seq__8564_10130__$1 = temp__4092__auto___10129;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8564_10130__$1))
{var c__5632__auto___10131 = cljs.core.chunk_first.call(null,seq__8564_10130__$1);{
var G__10132 = cljs.core.chunk_rest.call(null,seq__8564_10130__$1);
var G__10133 = c__5632__auto___10131;
var G__10134 = cljs.core.count.call(null,c__5632__auto___10131);
var G__10135 = 0;
seq__8564_10120 = G__10132;
chunk__8565_10121 = G__10133;
count__8566_10122 = G__10134;
i__8567_10123 = G__10135;
continue;
}
} else
{var arg__7204__auto___10136 = cljs.core.first.call(null,seq__8564_10130__$1);a__7203__auto__.push(arg__7204__auto___10136);
{
var G__10137 = cljs.core.next.call(null,seq__8564_10130__$1);
var G__10138 = null;
var G__10139 = 0;
var G__10140 = 0;
seq__8564_10120 = G__10137;
chunk__8565_10121 = G__10138;
count__8566_10122 = G__10139;
i__8567_10123 = G__10140;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.head.apply(null,a__7203__auto__);
};
var head = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return head__delegate.call(this,args__7202__auto__);};
head.cljs$lang$maxFixedArity = 0;
head.cljs$lang$applyTo = (function (arglist__10141){
var args__7202__auto__ = cljs.core.seq(arglist__10141);
return head__delegate(args__7202__auto__);
});
head.cljs$core$IFn$_invoke$arity$variadic = head__delegate;
return head;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.header = (function() { 
var header__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8572_10142 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8573_10143 = null;var count__8574_10144 = 0;var i__8575_10145 = 0;while(true){
if((i__8575_10145 < count__8574_10144))
{var arg__7204__auto___10146 = cljs.core._nth.call(null,chunk__8573_10143,i__8575_10145);a__7203__auto__.push(arg__7204__auto___10146);
{
var G__10147 = seq__8572_10142;
var G__10148 = chunk__8573_10143;
var G__10149 = count__8574_10144;
var G__10150 = (i__8575_10145 + 1);
seq__8572_10142 = G__10147;
chunk__8573_10143 = G__10148;
count__8574_10144 = G__10149;
i__8575_10145 = G__10150;
continue;
}
} else
{var temp__4092__auto___10151 = cljs.core.seq.call(null,seq__8572_10142);if(temp__4092__auto___10151)
{var seq__8572_10152__$1 = temp__4092__auto___10151;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8572_10152__$1))
{var c__5632__auto___10153 = cljs.core.chunk_first.call(null,seq__8572_10152__$1);{
var G__10154 = cljs.core.chunk_rest.call(null,seq__8572_10152__$1);
var G__10155 = c__5632__auto___10153;
var G__10156 = cljs.core.count.call(null,c__5632__auto___10153);
var G__10157 = 0;
seq__8572_10142 = G__10154;
chunk__8573_10143 = G__10155;
count__8574_10144 = G__10156;
i__8575_10145 = G__10157;
continue;
}
} else
{var arg__7204__auto___10158 = cljs.core.first.call(null,seq__8572_10152__$1);a__7203__auto__.push(arg__7204__auto___10158);
{
var G__10159 = cljs.core.next.call(null,seq__8572_10152__$1);
var G__10160 = null;
var G__10161 = 0;
var G__10162 = 0;
seq__8572_10142 = G__10159;
chunk__8573_10143 = G__10160;
count__8574_10144 = G__10161;
i__8575_10145 = G__10162;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.header.apply(null,a__7203__auto__);
};
var header = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return header__delegate.call(this,args__7202__auto__);};
header.cljs$lang$maxFixedArity = 0;
header.cljs$lang$applyTo = (function (arglist__10163){
var args__7202__auto__ = cljs.core.seq(arglist__10163);
return header__delegate(args__7202__auto__);
});
header.cljs$core$IFn$_invoke$arity$variadic = header__delegate;
return header;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.hr = (function() { 
var hr__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8580_10164 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8581_10165 = null;var count__8582_10166 = 0;var i__8583_10167 = 0;while(true){
if((i__8583_10167 < count__8582_10166))
{var arg__7204__auto___10168 = cljs.core._nth.call(null,chunk__8581_10165,i__8583_10167);a__7203__auto__.push(arg__7204__auto___10168);
{
var G__10169 = seq__8580_10164;
var G__10170 = chunk__8581_10165;
var G__10171 = count__8582_10166;
var G__10172 = (i__8583_10167 + 1);
seq__8580_10164 = G__10169;
chunk__8581_10165 = G__10170;
count__8582_10166 = G__10171;
i__8583_10167 = G__10172;
continue;
}
} else
{var temp__4092__auto___10173 = cljs.core.seq.call(null,seq__8580_10164);if(temp__4092__auto___10173)
{var seq__8580_10174__$1 = temp__4092__auto___10173;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8580_10174__$1))
{var c__5632__auto___10175 = cljs.core.chunk_first.call(null,seq__8580_10174__$1);{
var G__10176 = cljs.core.chunk_rest.call(null,seq__8580_10174__$1);
var G__10177 = c__5632__auto___10175;
var G__10178 = cljs.core.count.call(null,c__5632__auto___10175);
var G__10179 = 0;
seq__8580_10164 = G__10176;
chunk__8581_10165 = G__10177;
count__8582_10166 = G__10178;
i__8583_10167 = G__10179;
continue;
}
} else
{var arg__7204__auto___10180 = cljs.core.first.call(null,seq__8580_10174__$1);a__7203__auto__.push(arg__7204__auto___10180);
{
var G__10181 = cljs.core.next.call(null,seq__8580_10174__$1);
var G__10182 = null;
var G__10183 = 0;
var G__10184 = 0;
seq__8580_10164 = G__10181;
chunk__8581_10165 = G__10182;
count__8582_10166 = G__10183;
i__8583_10167 = G__10184;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.hr.apply(null,a__7203__auto__);
};
var hr = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return hr__delegate.call(this,args__7202__auto__);};
hr.cljs$lang$maxFixedArity = 0;
hr.cljs$lang$applyTo = (function (arglist__10185){
var args__7202__auto__ = cljs.core.seq(arglist__10185);
return hr__delegate(args__7202__auto__);
});
hr.cljs$core$IFn$_invoke$arity$variadic = hr__delegate;
return hr;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.html = (function() { 
var html__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8588_10186 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8589_10187 = null;var count__8590_10188 = 0;var i__8591_10189 = 0;while(true){
if((i__8591_10189 < count__8590_10188))
{var arg__7204__auto___10190 = cljs.core._nth.call(null,chunk__8589_10187,i__8591_10189);a__7203__auto__.push(arg__7204__auto___10190);
{
var G__10191 = seq__8588_10186;
var G__10192 = chunk__8589_10187;
var G__10193 = count__8590_10188;
var G__10194 = (i__8591_10189 + 1);
seq__8588_10186 = G__10191;
chunk__8589_10187 = G__10192;
count__8590_10188 = G__10193;
i__8591_10189 = G__10194;
continue;
}
} else
{var temp__4092__auto___10195 = cljs.core.seq.call(null,seq__8588_10186);if(temp__4092__auto___10195)
{var seq__8588_10196__$1 = temp__4092__auto___10195;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8588_10196__$1))
{var c__5632__auto___10197 = cljs.core.chunk_first.call(null,seq__8588_10196__$1);{
var G__10198 = cljs.core.chunk_rest.call(null,seq__8588_10196__$1);
var G__10199 = c__5632__auto___10197;
var G__10200 = cljs.core.count.call(null,c__5632__auto___10197);
var G__10201 = 0;
seq__8588_10186 = G__10198;
chunk__8589_10187 = G__10199;
count__8590_10188 = G__10200;
i__8591_10189 = G__10201;
continue;
}
} else
{var arg__7204__auto___10202 = cljs.core.first.call(null,seq__8588_10196__$1);a__7203__auto__.push(arg__7204__auto___10202);
{
var G__10203 = cljs.core.next.call(null,seq__8588_10196__$1);
var G__10204 = null;
var G__10205 = 0;
var G__10206 = 0;
seq__8588_10186 = G__10203;
chunk__8589_10187 = G__10204;
count__8590_10188 = G__10205;
i__8591_10189 = G__10206;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.html.apply(null,a__7203__auto__);
};
var html = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return html__delegate.call(this,args__7202__auto__);};
html.cljs$lang$maxFixedArity = 0;
html.cljs$lang$applyTo = (function (arglist__10207){
var args__7202__auto__ = cljs.core.seq(arglist__10207);
return html__delegate(args__7202__auto__);
});
html.cljs$core$IFn$_invoke$arity$variadic = html__delegate;
return html;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.i = (function() { 
var i__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8596_10208 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8597_10209 = null;var count__8598_10210 = 0;var i__8599_10211 = 0;while(true){
if((i__8599_10211 < count__8598_10210))
{var arg__7204__auto___10212 = cljs.core._nth.call(null,chunk__8597_10209,i__8599_10211);a__7203__auto__.push(arg__7204__auto___10212);
{
var G__10213 = seq__8596_10208;
var G__10214 = chunk__8597_10209;
var G__10215 = count__8598_10210;
var G__10216 = (i__8599_10211 + 1);
seq__8596_10208 = G__10213;
chunk__8597_10209 = G__10214;
count__8598_10210 = G__10215;
i__8599_10211 = G__10216;
continue;
}
} else
{var temp__4092__auto___10217 = cljs.core.seq.call(null,seq__8596_10208);if(temp__4092__auto___10217)
{var seq__8596_10218__$1 = temp__4092__auto___10217;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8596_10218__$1))
{var c__5632__auto___10219 = cljs.core.chunk_first.call(null,seq__8596_10218__$1);{
var G__10220 = cljs.core.chunk_rest.call(null,seq__8596_10218__$1);
var G__10221 = c__5632__auto___10219;
var G__10222 = cljs.core.count.call(null,c__5632__auto___10219);
var G__10223 = 0;
seq__8596_10208 = G__10220;
chunk__8597_10209 = G__10221;
count__8598_10210 = G__10222;
i__8599_10211 = G__10223;
continue;
}
} else
{var arg__7204__auto___10224 = cljs.core.first.call(null,seq__8596_10218__$1);a__7203__auto__.push(arg__7204__auto___10224);
{
var G__10225 = cljs.core.next.call(null,seq__8596_10218__$1);
var G__10226 = null;
var G__10227 = 0;
var G__10228 = 0;
seq__8596_10208 = G__10225;
chunk__8597_10209 = G__10226;
count__8598_10210 = G__10227;
i__8599_10211 = G__10228;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.i.apply(null,a__7203__auto__);
};
var i = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return i__delegate.call(this,args__7202__auto__);};
i.cljs$lang$maxFixedArity = 0;
i.cljs$lang$applyTo = (function (arglist__10229){
var args__7202__auto__ = cljs.core.seq(arglist__10229);
return i__delegate(args__7202__auto__);
});
i.cljs$core$IFn$_invoke$arity$variadic = i__delegate;
return i;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.iframe = (function() { 
var iframe__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8604_10230 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8605_10231 = null;var count__8606_10232 = 0;var i__8607_10233 = 0;while(true){
if((i__8607_10233 < count__8606_10232))
{var arg__7204__auto___10234 = cljs.core._nth.call(null,chunk__8605_10231,i__8607_10233);a__7203__auto__.push(arg__7204__auto___10234);
{
var G__10235 = seq__8604_10230;
var G__10236 = chunk__8605_10231;
var G__10237 = count__8606_10232;
var G__10238 = (i__8607_10233 + 1);
seq__8604_10230 = G__10235;
chunk__8605_10231 = G__10236;
count__8606_10232 = G__10237;
i__8607_10233 = G__10238;
continue;
}
} else
{var temp__4092__auto___10239 = cljs.core.seq.call(null,seq__8604_10230);if(temp__4092__auto___10239)
{var seq__8604_10240__$1 = temp__4092__auto___10239;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8604_10240__$1))
{var c__5632__auto___10241 = cljs.core.chunk_first.call(null,seq__8604_10240__$1);{
var G__10242 = cljs.core.chunk_rest.call(null,seq__8604_10240__$1);
var G__10243 = c__5632__auto___10241;
var G__10244 = cljs.core.count.call(null,c__5632__auto___10241);
var G__10245 = 0;
seq__8604_10230 = G__10242;
chunk__8605_10231 = G__10243;
count__8606_10232 = G__10244;
i__8607_10233 = G__10245;
continue;
}
} else
{var arg__7204__auto___10246 = cljs.core.first.call(null,seq__8604_10240__$1);a__7203__auto__.push(arg__7204__auto___10246);
{
var G__10247 = cljs.core.next.call(null,seq__8604_10240__$1);
var G__10248 = null;
var G__10249 = 0;
var G__10250 = 0;
seq__8604_10230 = G__10247;
chunk__8605_10231 = G__10248;
count__8606_10232 = G__10249;
i__8607_10233 = G__10250;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.iframe.apply(null,a__7203__auto__);
};
var iframe = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return iframe__delegate.call(this,args__7202__auto__);};
iframe.cljs$lang$maxFixedArity = 0;
iframe.cljs$lang$applyTo = (function (arglist__10251){
var args__7202__auto__ = cljs.core.seq(arglist__10251);
return iframe__delegate(args__7202__auto__);
});
iframe.cljs$core$IFn$_invoke$arity$variadic = iframe__delegate;
return iframe;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.img = (function() { 
var img__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8612_10252 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8613_10253 = null;var count__8614_10254 = 0;var i__8615_10255 = 0;while(true){
if((i__8615_10255 < count__8614_10254))
{var arg__7204__auto___10256 = cljs.core._nth.call(null,chunk__8613_10253,i__8615_10255);a__7203__auto__.push(arg__7204__auto___10256);
{
var G__10257 = seq__8612_10252;
var G__10258 = chunk__8613_10253;
var G__10259 = count__8614_10254;
var G__10260 = (i__8615_10255 + 1);
seq__8612_10252 = G__10257;
chunk__8613_10253 = G__10258;
count__8614_10254 = G__10259;
i__8615_10255 = G__10260;
continue;
}
} else
{var temp__4092__auto___10261 = cljs.core.seq.call(null,seq__8612_10252);if(temp__4092__auto___10261)
{var seq__8612_10262__$1 = temp__4092__auto___10261;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8612_10262__$1))
{var c__5632__auto___10263 = cljs.core.chunk_first.call(null,seq__8612_10262__$1);{
var G__10264 = cljs.core.chunk_rest.call(null,seq__8612_10262__$1);
var G__10265 = c__5632__auto___10263;
var G__10266 = cljs.core.count.call(null,c__5632__auto___10263);
var G__10267 = 0;
seq__8612_10252 = G__10264;
chunk__8613_10253 = G__10265;
count__8614_10254 = G__10266;
i__8615_10255 = G__10267;
continue;
}
} else
{var arg__7204__auto___10268 = cljs.core.first.call(null,seq__8612_10262__$1);a__7203__auto__.push(arg__7204__auto___10268);
{
var G__10269 = cljs.core.next.call(null,seq__8612_10262__$1);
var G__10270 = null;
var G__10271 = 0;
var G__10272 = 0;
seq__8612_10252 = G__10269;
chunk__8613_10253 = G__10270;
count__8614_10254 = G__10271;
i__8615_10255 = G__10272;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.img.apply(null,a__7203__auto__);
};
var img = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return img__delegate.call(this,args__7202__auto__);};
img.cljs$lang$maxFixedArity = 0;
img.cljs$lang$applyTo = (function (arglist__10273){
var args__7202__auto__ = cljs.core.seq(arglist__10273);
return img__delegate(args__7202__auto__);
});
img.cljs$core$IFn$_invoke$arity$variadic = img__delegate;
return img;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.input = (function() { 
var input__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8620_10274 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8621_10275 = null;var count__8622_10276 = 0;var i__8623_10277 = 0;while(true){
if((i__8623_10277 < count__8622_10276))
{var arg__7204__auto___10278 = cljs.core._nth.call(null,chunk__8621_10275,i__8623_10277);a__7203__auto__.push(arg__7204__auto___10278);
{
var G__10279 = seq__8620_10274;
var G__10280 = chunk__8621_10275;
var G__10281 = count__8622_10276;
var G__10282 = (i__8623_10277 + 1);
seq__8620_10274 = G__10279;
chunk__8621_10275 = G__10280;
count__8622_10276 = G__10281;
i__8623_10277 = G__10282;
continue;
}
} else
{var temp__4092__auto___10283 = cljs.core.seq.call(null,seq__8620_10274);if(temp__4092__auto___10283)
{var seq__8620_10284__$1 = temp__4092__auto___10283;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8620_10284__$1))
{var c__5632__auto___10285 = cljs.core.chunk_first.call(null,seq__8620_10284__$1);{
var G__10286 = cljs.core.chunk_rest.call(null,seq__8620_10284__$1);
var G__10287 = c__5632__auto___10285;
var G__10288 = cljs.core.count.call(null,c__5632__auto___10285);
var G__10289 = 0;
seq__8620_10274 = G__10286;
chunk__8621_10275 = G__10287;
count__8622_10276 = G__10288;
i__8623_10277 = G__10289;
continue;
}
} else
{var arg__7204__auto___10290 = cljs.core.first.call(null,seq__8620_10284__$1);a__7203__auto__.push(arg__7204__auto___10290);
{
var G__10291 = cljs.core.next.call(null,seq__8620_10284__$1);
var G__10292 = null;
var G__10293 = 0;
var G__10294 = 0;
seq__8620_10274 = G__10291;
chunk__8621_10275 = G__10292;
count__8622_10276 = G__10293;
i__8623_10277 = G__10294;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.input.apply(null,a__7203__auto__);
};
var input = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return input__delegate.call(this,args__7202__auto__);};
input.cljs$lang$maxFixedArity = 0;
input.cljs$lang$applyTo = (function (arglist__10295){
var args__7202__auto__ = cljs.core.seq(arglist__10295);
return input__delegate(args__7202__auto__);
});
input.cljs$core$IFn$_invoke$arity$variadic = input__delegate;
return input;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.ins = (function() { 
var ins__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8628_10296 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8629_10297 = null;var count__8630_10298 = 0;var i__8631_10299 = 0;while(true){
if((i__8631_10299 < count__8630_10298))
{var arg__7204__auto___10300 = cljs.core._nth.call(null,chunk__8629_10297,i__8631_10299);a__7203__auto__.push(arg__7204__auto___10300);
{
var G__10301 = seq__8628_10296;
var G__10302 = chunk__8629_10297;
var G__10303 = count__8630_10298;
var G__10304 = (i__8631_10299 + 1);
seq__8628_10296 = G__10301;
chunk__8629_10297 = G__10302;
count__8630_10298 = G__10303;
i__8631_10299 = G__10304;
continue;
}
} else
{var temp__4092__auto___10305 = cljs.core.seq.call(null,seq__8628_10296);if(temp__4092__auto___10305)
{var seq__8628_10306__$1 = temp__4092__auto___10305;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8628_10306__$1))
{var c__5632__auto___10307 = cljs.core.chunk_first.call(null,seq__8628_10306__$1);{
var G__10308 = cljs.core.chunk_rest.call(null,seq__8628_10306__$1);
var G__10309 = c__5632__auto___10307;
var G__10310 = cljs.core.count.call(null,c__5632__auto___10307);
var G__10311 = 0;
seq__8628_10296 = G__10308;
chunk__8629_10297 = G__10309;
count__8630_10298 = G__10310;
i__8631_10299 = G__10311;
continue;
}
} else
{var arg__7204__auto___10312 = cljs.core.first.call(null,seq__8628_10306__$1);a__7203__auto__.push(arg__7204__auto___10312);
{
var G__10313 = cljs.core.next.call(null,seq__8628_10306__$1);
var G__10314 = null;
var G__10315 = 0;
var G__10316 = 0;
seq__8628_10296 = G__10313;
chunk__8629_10297 = G__10314;
count__8630_10298 = G__10315;
i__8631_10299 = G__10316;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.ins.apply(null,a__7203__auto__);
};
var ins = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ins__delegate.call(this,args__7202__auto__);};
ins.cljs$lang$maxFixedArity = 0;
ins.cljs$lang$applyTo = (function (arglist__10317){
var args__7202__auto__ = cljs.core.seq(arglist__10317);
return ins__delegate(args__7202__auto__);
});
ins.cljs$core$IFn$_invoke$arity$variadic = ins__delegate;
return ins;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.kbd = (function() { 
var kbd__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8636_10318 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8637_10319 = null;var count__8638_10320 = 0;var i__8639_10321 = 0;while(true){
if((i__8639_10321 < count__8638_10320))
{var arg__7204__auto___10322 = cljs.core._nth.call(null,chunk__8637_10319,i__8639_10321);a__7203__auto__.push(arg__7204__auto___10322);
{
var G__10323 = seq__8636_10318;
var G__10324 = chunk__8637_10319;
var G__10325 = count__8638_10320;
var G__10326 = (i__8639_10321 + 1);
seq__8636_10318 = G__10323;
chunk__8637_10319 = G__10324;
count__8638_10320 = G__10325;
i__8639_10321 = G__10326;
continue;
}
} else
{var temp__4092__auto___10327 = cljs.core.seq.call(null,seq__8636_10318);if(temp__4092__auto___10327)
{var seq__8636_10328__$1 = temp__4092__auto___10327;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8636_10328__$1))
{var c__5632__auto___10329 = cljs.core.chunk_first.call(null,seq__8636_10328__$1);{
var G__10330 = cljs.core.chunk_rest.call(null,seq__8636_10328__$1);
var G__10331 = c__5632__auto___10329;
var G__10332 = cljs.core.count.call(null,c__5632__auto___10329);
var G__10333 = 0;
seq__8636_10318 = G__10330;
chunk__8637_10319 = G__10331;
count__8638_10320 = G__10332;
i__8639_10321 = G__10333;
continue;
}
} else
{var arg__7204__auto___10334 = cljs.core.first.call(null,seq__8636_10328__$1);a__7203__auto__.push(arg__7204__auto___10334);
{
var G__10335 = cljs.core.next.call(null,seq__8636_10328__$1);
var G__10336 = null;
var G__10337 = 0;
var G__10338 = 0;
seq__8636_10318 = G__10335;
chunk__8637_10319 = G__10336;
count__8638_10320 = G__10337;
i__8639_10321 = G__10338;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.kbd.apply(null,a__7203__auto__);
};
var kbd = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return kbd__delegate.call(this,args__7202__auto__);};
kbd.cljs$lang$maxFixedArity = 0;
kbd.cljs$lang$applyTo = (function (arglist__10339){
var args__7202__auto__ = cljs.core.seq(arglist__10339);
return kbd__delegate(args__7202__auto__);
});
kbd.cljs$core$IFn$_invoke$arity$variadic = kbd__delegate;
return kbd;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.keygen = (function() { 
var keygen__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8644_10340 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8645_10341 = null;var count__8646_10342 = 0;var i__8647_10343 = 0;while(true){
if((i__8647_10343 < count__8646_10342))
{var arg__7204__auto___10344 = cljs.core._nth.call(null,chunk__8645_10341,i__8647_10343);a__7203__auto__.push(arg__7204__auto___10344);
{
var G__10345 = seq__8644_10340;
var G__10346 = chunk__8645_10341;
var G__10347 = count__8646_10342;
var G__10348 = (i__8647_10343 + 1);
seq__8644_10340 = G__10345;
chunk__8645_10341 = G__10346;
count__8646_10342 = G__10347;
i__8647_10343 = G__10348;
continue;
}
} else
{var temp__4092__auto___10349 = cljs.core.seq.call(null,seq__8644_10340);if(temp__4092__auto___10349)
{var seq__8644_10350__$1 = temp__4092__auto___10349;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8644_10350__$1))
{var c__5632__auto___10351 = cljs.core.chunk_first.call(null,seq__8644_10350__$1);{
var G__10352 = cljs.core.chunk_rest.call(null,seq__8644_10350__$1);
var G__10353 = c__5632__auto___10351;
var G__10354 = cljs.core.count.call(null,c__5632__auto___10351);
var G__10355 = 0;
seq__8644_10340 = G__10352;
chunk__8645_10341 = G__10353;
count__8646_10342 = G__10354;
i__8647_10343 = G__10355;
continue;
}
} else
{var arg__7204__auto___10356 = cljs.core.first.call(null,seq__8644_10350__$1);a__7203__auto__.push(arg__7204__auto___10356);
{
var G__10357 = cljs.core.next.call(null,seq__8644_10350__$1);
var G__10358 = null;
var G__10359 = 0;
var G__10360 = 0;
seq__8644_10340 = G__10357;
chunk__8645_10341 = G__10358;
count__8646_10342 = G__10359;
i__8647_10343 = G__10360;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.keygen.apply(null,a__7203__auto__);
};
var keygen = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return keygen__delegate.call(this,args__7202__auto__);};
keygen.cljs$lang$maxFixedArity = 0;
keygen.cljs$lang$applyTo = (function (arglist__10361){
var args__7202__auto__ = cljs.core.seq(arglist__10361);
return keygen__delegate(args__7202__auto__);
});
keygen.cljs$core$IFn$_invoke$arity$variadic = keygen__delegate;
return keygen;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.label = (function() { 
var label__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8652_10362 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8653_10363 = null;var count__8654_10364 = 0;var i__8655_10365 = 0;while(true){
if((i__8655_10365 < count__8654_10364))
{var arg__7204__auto___10366 = cljs.core._nth.call(null,chunk__8653_10363,i__8655_10365);a__7203__auto__.push(arg__7204__auto___10366);
{
var G__10367 = seq__8652_10362;
var G__10368 = chunk__8653_10363;
var G__10369 = count__8654_10364;
var G__10370 = (i__8655_10365 + 1);
seq__8652_10362 = G__10367;
chunk__8653_10363 = G__10368;
count__8654_10364 = G__10369;
i__8655_10365 = G__10370;
continue;
}
} else
{var temp__4092__auto___10371 = cljs.core.seq.call(null,seq__8652_10362);if(temp__4092__auto___10371)
{var seq__8652_10372__$1 = temp__4092__auto___10371;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8652_10372__$1))
{var c__5632__auto___10373 = cljs.core.chunk_first.call(null,seq__8652_10372__$1);{
var G__10374 = cljs.core.chunk_rest.call(null,seq__8652_10372__$1);
var G__10375 = c__5632__auto___10373;
var G__10376 = cljs.core.count.call(null,c__5632__auto___10373);
var G__10377 = 0;
seq__8652_10362 = G__10374;
chunk__8653_10363 = G__10375;
count__8654_10364 = G__10376;
i__8655_10365 = G__10377;
continue;
}
} else
{var arg__7204__auto___10378 = cljs.core.first.call(null,seq__8652_10372__$1);a__7203__auto__.push(arg__7204__auto___10378);
{
var G__10379 = cljs.core.next.call(null,seq__8652_10372__$1);
var G__10380 = null;
var G__10381 = 0;
var G__10382 = 0;
seq__8652_10362 = G__10379;
chunk__8653_10363 = G__10380;
count__8654_10364 = G__10381;
i__8655_10365 = G__10382;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.label.apply(null,a__7203__auto__);
};
var label = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return label__delegate.call(this,args__7202__auto__);};
label.cljs$lang$maxFixedArity = 0;
label.cljs$lang$applyTo = (function (arglist__10383){
var args__7202__auto__ = cljs.core.seq(arglist__10383);
return label__delegate(args__7202__auto__);
});
label.cljs$core$IFn$_invoke$arity$variadic = label__delegate;
return label;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.legend = (function() { 
var legend__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8660_10384 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8661_10385 = null;var count__8662_10386 = 0;var i__8663_10387 = 0;while(true){
if((i__8663_10387 < count__8662_10386))
{var arg__7204__auto___10388 = cljs.core._nth.call(null,chunk__8661_10385,i__8663_10387);a__7203__auto__.push(arg__7204__auto___10388);
{
var G__10389 = seq__8660_10384;
var G__10390 = chunk__8661_10385;
var G__10391 = count__8662_10386;
var G__10392 = (i__8663_10387 + 1);
seq__8660_10384 = G__10389;
chunk__8661_10385 = G__10390;
count__8662_10386 = G__10391;
i__8663_10387 = G__10392;
continue;
}
} else
{var temp__4092__auto___10393 = cljs.core.seq.call(null,seq__8660_10384);if(temp__4092__auto___10393)
{var seq__8660_10394__$1 = temp__4092__auto___10393;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8660_10394__$1))
{var c__5632__auto___10395 = cljs.core.chunk_first.call(null,seq__8660_10394__$1);{
var G__10396 = cljs.core.chunk_rest.call(null,seq__8660_10394__$1);
var G__10397 = c__5632__auto___10395;
var G__10398 = cljs.core.count.call(null,c__5632__auto___10395);
var G__10399 = 0;
seq__8660_10384 = G__10396;
chunk__8661_10385 = G__10397;
count__8662_10386 = G__10398;
i__8663_10387 = G__10399;
continue;
}
} else
{var arg__7204__auto___10400 = cljs.core.first.call(null,seq__8660_10394__$1);a__7203__auto__.push(arg__7204__auto___10400);
{
var G__10401 = cljs.core.next.call(null,seq__8660_10394__$1);
var G__10402 = null;
var G__10403 = 0;
var G__10404 = 0;
seq__8660_10384 = G__10401;
chunk__8661_10385 = G__10402;
count__8662_10386 = G__10403;
i__8663_10387 = G__10404;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.legend.apply(null,a__7203__auto__);
};
var legend = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return legend__delegate.call(this,args__7202__auto__);};
legend.cljs$lang$maxFixedArity = 0;
legend.cljs$lang$applyTo = (function (arglist__10405){
var args__7202__auto__ = cljs.core.seq(arglist__10405);
return legend__delegate(args__7202__auto__);
});
legend.cljs$core$IFn$_invoke$arity$variadic = legend__delegate;
return legend;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.li = (function() { 
var li__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8668_10406 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8669_10407 = null;var count__8670_10408 = 0;var i__8671_10409 = 0;while(true){
if((i__8671_10409 < count__8670_10408))
{var arg__7204__auto___10410 = cljs.core._nth.call(null,chunk__8669_10407,i__8671_10409);a__7203__auto__.push(arg__7204__auto___10410);
{
var G__10411 = seq__8668_10406;
var G__10412 = chunk__8669_10407;
var G__10413 = count__8670_10408;
var G__10414 = (i__8671_10409 + 1);
seq__8668_10406 = G__10411;
chunk__8669_10407 = G__10412;
count__8670_10408 = G__10413;
i__8671_10409 = G__10414;
continue;
}
} else
{var temp__4092__auto___10415 = cljs.core.seq.call(null,seq__8668_10406);if(temp__4092__auto___10415)
{var seq__8668_10416__$1 = temp__4092__auto___10415;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8668_10416__$1))
{var c__5632__auto___10417 = cljs.core.chunk_first.call(null,seq__8668_10416__$1);{
var G__10418 = cljs.core.chunk_rest.call(null,seq__8668_10416__$1);
var G__10419 = c__5632__auto___10417;
var G__10420 = cljs.core.count.call(null,c__5632__auto___10417);
var G__10421 = 0;
seq__8668_10406 = G__10418;
chunk__8669_10407 = G__10419;
count__8670_10408 = G__10420;
i__8671_10409 = G__10421;
continue;
}
} else
{var arg__7204__auto___10422 = cljs.core.first.call(null,seq__8668_10416__$1);a__7203__auto__.push(arg__7204__auto___10422);
{
var G__10423 = cljs.core.next.call(null,seq__8668_10416__$1);
var G__10424 = null;
var G__10425 = 0;
var G__10426 = 0;
seq__8668_10406 = G__10423;
chunk__8669_10407 = G__10424;
count__8670_10408 = G__10425;
i__8671_10409 = G__10426;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.li.apply(null,a__7203__auto__);
};
var li = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return li__delegate.call(this,args__7202__auto__);};
li.cljs$lang$maxFixedArity = 0;
li.cljs$lang$applyTo = (function (arglist__10427){
var args__7202__auto__ = cljs.core.seq(arglist__10427);
return li__delegate(args__7202__auto__);
});
li.cljs$core$IFn$_invoke$arity$variadic = li__delegate;
return li;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.link = (function() { 
var link__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8676_10428 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8677_10429 = null;var count__8678_10430 = 0;var i__8679_10431 = 0;while(true){
if((i__8679_10431 < count__8678_10430))
{var arg__7204__auto___10432 = cljs.core._nth.call(null,chunk__8677_10429,i__8679_10431);a__7203__auto__.push(arg__7204__auto___10432);
{
var G__10433 = seq__8676_10428;
var G__10434 = chunk__8677_10429;
var G__10435 = count__8678_10430;
var G__10436 = (i__8679_10431 + 1);
seq__8676_10428 = G__10433;
chunk__8677_10429 = G__10434;
count__8678_10430 = G__10435;
i__8679_10431 = G__10436;
continue;
}
} else
{var temp__4092__auto___10437 = cljs.core.seq.call(null,seq__8676_10428);if(temp__4092__auto___10437)
{var seq__8676_10438__$1 = temp__4092__auto___10437;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8676_10438__$1))
{var c__5632__auto___10439 = cljs.core.chunk_first.call(null,seq__8676_10438__$1);{
var G__10440 = cljs.core.chunk_rest.call(null,seq__8676_10438__$1);
var G__10441 = c__5632__auto___10439;
var G__10442 = cljs.core.count.call(null,c__5632__auto___10439);
var G__10443 = 0;
seq__8676_10428 = G__10440;
chunk__8677_10429 = G__10441;
count__8678_10430 = G__10442;
i__8679_10431 = G__10443;
continue;
}
} else
{var arg__7204__auto___10444 = cljs.core.first.call(null,seq__8676_10438__$1);a__7203__auto__.push(arg__7204__auto___10444);
{
var G__10445 = cljs.core.next.call(null,seq__8676_10438__$1);
var G__10446 = null;
var G__10447 = 0;
var G__10448 = 0;
seq__8676_10428 = G__10445;
chunk__8677_10429 = G__10446;
count__8678_10430 = G__10447;
i__8679_10431 = G__10448;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.link.apply(null,a__7203__auto__);
};
var link = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return link__delegate.call(this,args__7202__auto__);};
link.cljs$lang$maxFixedArity = 0;
link.cljs$lang$applyTo = (function (arglist__10449){
var args__7202__auto__ = cljs.core.seq(arglist__10449);
return link__delegate(args__7202__auto__);
});
link.cljs$core$IFn$_invoke$arity$variadic = link__delegate;
return link;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.main = (function() { 
var main__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8684_10450 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8685_10451 = null;var count__8686_10452 = 0;var i__8687_10453 = 0;while(true){
if((i__8687_10453 < count__8686_10452))
{var arg__7204__auto___10454 = cljs.core._nth.call(null,chunk__8685_10451,i__8687_10453);a__7203__auto__.push(arg__7204__auto___10454);
{
var G__10455 = seq__8684_10450;
var G__10456 = chunk__8685_10451;
var G__10457 = count__8686_10452;
var G__10458 = (i__8687_10453 + 1);
seq__8684_10450 = G__10455;
chunk__8685_10451 = G__10456;
count__8686_10452 = G__10457;
i__8687_10453 = G__10458;
continue;
}
} else
{var temp__4092__auto___10459 = cljs.core.seq.call(null,seq__8684_10450);if(temp__4092__auto___10459)
{var seq__8684_10460__$1 = temp__4092__auto___10459;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8684_10460__$1))
{var c__5632__auto___10461 = cljs.core.chunk_first.call(null,seq__8684_10460__$1);{
var G__10462 = cljs.core.chunk_rest.call(null,seq__8684_10460__$1);
var G__10463 = c__5632__auto___10461;
var G__10464 = cljs.core.count.call(null,c__5632__auto___10461);
var G__10465 = 0;
seq__8684_10450 = G__10462;
chunk__8685_10451 = G__10463;
count__8686_10452 = G__10464;
i__8687_10453 = G__10465;
continue;
}
} else
{var arg__7204__auto___10466 = cljs.core.first.call(null,seq__8684_10460__$1);a__7203__auto__.push(arg__7204__auto___10466);
{
var G__10467 = cljs.core.next.call(null,seq__8684_10460__$1);
var G__10468 = null;
var G__10469 = 0;
var G__10470 = 0;
seq__8684_10450 = G__10467;
chunk__8685_10451 = G__10468;
count__8686_10452 = G__10469;
i__8687_10453 = G__10470;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.main.apply(null,a__7203__auto__);
};
var main = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return main__delegate.call(this,args__7202__auto__);};
main.cljs$lang$maxFixedArity = 0;
main.cljs$lang$applyTo = (function (arglist__10471){
var args__7202__auto__ = cljs.core.seq(arglist__10471);
return main__delegate(args__7202__auto__);
});
main.cljs$core$IFn$_invoke$arity$variadic = main__delegate;
return main;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.map = (function() { 
var map__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8692_10472 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8693_10473 = null;var count__8694_10474 = 0;var i__8695_10475 = 0;while(true){
if((i__8695_10475 < count__8694_10474))
{var arg__7204__auto___10476 = cljs.core._nth.call(null,chunk__8693_10473,i__8695_10475);a__7203__auto__.push(arg__7204__auto___10476);
{
var G__10477 = seq__8692_10472;
var G__10478 = chunk__8693_10473;
var G__10479 = count__8694_10474;
var G__10480 = (i__8695_10475 + 1);
seq__8692_10472 = G__10477;
chunk__8693_10473 = G__10478;
count__8694_10474 = G__10479;
i__8695_10475 = G__10480;
continue;
}
} else
{var temp__4092__auto___10481 = cljs.core.seq.call(null,seq__8692_10472);if(temp__4092__auto___10481)
{var seq__8692_10482__$1 = temp__4092__auto___10481;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8692_10482__$1))
{var c__5632__auto___10483 = cljs.core.chunk_first.call(null,seq__8692_10482__$1);{
var G__10484 = cljs.core.chunk_rest.call(null,seq__8692_10482__$1);
var G__10485 = c__5632__auto___10483;
var G__10486 = cljs.core.count.call(null,c__5632__auto___10483);
var G__10487 = 0;
seq__8692_10472 = G__10484;
chunk__8693_10473 = G__10485;
count__8694_10474 = G__10486;
i__8695_10475 = G__10487;
continue;
}
} else
{var arg__7204__auto___10488 = cljs.core.first.call(null,seq__8692_10482__$1);a__7203__auto__.push(arg__7204__auto___10488);
{
var G__10489 = cljs.core.next.call(null,seq__8692_10482__$1);
var G__10490 = null;
var G__10491 = 0;
var G__10492 = 0;
seq__8692_10472 = G__10489;
chunk__8693_10473 = G__10490;
count__8694_10474 = G__10491;
i__8695_10475 = G__10492;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.map.apply(null,a__7203__auto__);
};
var map = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return map__delegate.call(this,args__7202__auto__);};
map.cljs$lang$maxFixedArity = 0;
map.cljs$lang$applyTo = (function (arglist__10493){
var args__7202__auto__ = cljs.core.seq(arglist__10493);
return map__delegate(args__7202__auto__);
});
map.cljs$core$IFn$_invoke$arity$variadic = map__delegate;
return map;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.mark = (function() { 
var mark__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8700_10494 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8701_10495 = null;var count__8702_10496 = 0;var i__8703_10497 = 0;while(true){
if((i__8703_10497 < count__8702_10496))
{var arg__7204__auto___10498 = cljs.core._nth.call(null,chunk__8701_10495,i__8703_10497);a__7203__auto__.push(arg__7204__auto___10498);
{
var G__10499 = seq__8700_10494;
var G__10500 = chunk__8701_10495;
var G__10501 = count__8702_10496;
var G__10502 = (i__8703_10497 + 1);
seq__8700_10494 = G__10499;
chunk__8701_10495 = G__10500;
count__8702_10496 = G__10501;
i__8703_10497 = G__10502;
continue;
}
} else
{var temp__4092__auto___10503 = cljs.core.seq.call(null,seq__8700_10494);if(temp__4092__auto___10503)
{var seq__8700_10504__$1 = temp__4092__auto___10503;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8700_10504__$1))
{var c__5632__auto___10505 = cljs.core.chunk_first.call(null,seq__8700_10504__$1);{
var G__10506 = cljs.core.chunk_rest.call(null,seq__8700_10504__$1);
var G__10507 = c__5632__auto___10505;
var G__10508 = cljs.core.count.call(null,c__5632__auto___10505);
var G__10509 = 0;
seq__8700_10494 = G__10506;
chunk__8701_10495 = G__10507;
count__8702_10496 = G__10508;
i__8703_10497 = G__10509;
continue;
}
} else
{var arg__7204__auto___10510 = cljs.core.first.call(null,seq__8700_10504__$1);a__7203__auto__.push(arg__7204__auto___10510);
{
var G__10511 = cljs.core.next.call(null,seq__8700_10504__$1);
var G__10512 = null;
var G__10513 = 0;
var G__10514 = 0;
seq__8700_10494 = G__10511;
chunk__8701_10495 = G__10512;
count__8702_10496 = G__10513;
i__8703_10497 = G__10514;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.mark.apply(null,a__7203__auto__);
};
var mark = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return mark__delegate.call(this,args__7202__auto__);};
mark.cljs$lang$maxFixedArity = 0;
mark.cljs$lang$applyTo = (function (arglist__10515){
var args__7202__auto__ = cljs.core.seq(arglist__10515);
return mark__delegate(args__7202__auto__);
});
mark.cljs$core$IFn$_invoke$arity$variadic = mark__delegate;
return mark;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.menu = (function() { 
var menu__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8708_10516 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8709_10517 = null;var count__8710_10518 = 0;var i__8711_10519 = 0;while(true){
if((i__8711_10519 < count__8710_10518))
{var arg__7204__auto___10520 = cljs.core._nth.call(null,chunk__8709_10517,i__8711_10519);a__7203__auto__.push(arg__7204__auto___10520);
{
var G__10521 = seq__8708_10516;
var G__10522 = chunk__8709_10517;
var G__10523 = count__8710_10518;
var G__10524 = (i__8711_10519 + 1);
seq__8708_10516 = G__10521;
chunk__8709_10517 = G__10522;
count__8710_10518 = G__10523;
i__8711_10519 = G__10524;
continue;
}
} else
{var temp__4092__auto___10525 = cljs.core.seq.call(null,seq__8708_10516);if(temp__4092__auto___10525)
{var seq__8708_10526__$1 = temp__4092__auto___10525;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8708_10526__$1))
{var c__5632__auto___10527 = cljs.core.chunk_first.call(null,seq__8708_10526__$1);{
var G__10528 = cljs.core.chunk_rest.call(null,seq__8708_10526__$1);
var G__10529 = c__5632__auto___10527;
var G__10530 = cljs.core.count.call(null,c__5632__auto___10527);
var G__10531 = 0;
seq__8708_10516 = G__10528;
chunk__8709_10517 = G__10529;
count__8710_10518 = G__10530;
i__8711_10519 = G__10531;
continue;
}
} else
{var arg__7204__auto___10532 = cljs.core.first.call(null,seq__8708_10526__$1);a__7203__auto__.push(arg__7204__auto___10532);
{
var G__10533 = cljs.core.next.call(null,seq__8708_10526__$1);
var G__10534 = null;
var G__10535 = 0;
var G__10536 = 0;
seq__8708_10516 = G__10533;
chunk__8709_10517 = G__10534;
count__8710_10518 = G__10535;
i__8711_10519 = G__10536;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.menu.apply(null,a__7203__auto__);
};
var menu = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return menu__delegate.call(this,args__7202__auto__);};
menu.cljs$lang$maxFixedArity = 0;
menu.cljs$lang$applyTo = (function (arglist__10537){
var args__7202__auto__ = cljs.core.seq(arglist__10537);
return menu__delegate(args__7202__auto__);
});
menu.cljs$core$IFn$_invoke$arity$variadic = menu__delegate;
return menu;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.menuitem = (function() { 
var menuitem__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8716_10538 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8717_10539 = null;var count__8718_10540 = 0;var i__8719_10541 = 0;while(true){
if((i__8719_10541 < count__8718_10540))
{var arg__7204__auto___10542 = cljs.core._nth.call(null,chunk__8717_10539,i__8719_10541);a__7203__auto__.push(arg__7204__auto___10542);
{
var G__10543 = seq__8716_10538;
var G__10544 = chunk__8717_10539;
var G__10545 = count__8718_10540;
var G__10546 = (i__8719_10541 + 1);
seq__8716_10538 = G__10543;
chunk__8717_10539 = G__10544;
count__8718_10540 = G__10545;
i__8719_10541 = G__10546;
continue;
}
} else
{var temp__4092__auto___10547 = cljs.core.seq.call(null,seq__8716_10538);if(temp__4092__auto___10547)
{var seq__8716_10548__$1 = temp__4092__auto___10547;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8716_10548__$1))
{var c__5632__auto___10549 = cljs.core.chunk_first.call(null,seq__8716_10548__$1);{
var G__10550 = cljs.core.chunk_rest.call(null,seq__8716_10548__$1);
var G__10551 = c__5632__auto___10549;
var G__10552 = cljs.core.count.call(null,c__5632__auto___10549);
var G__10553 = 0;
seq__8716_10538 = G__10550;
chunk__8717_10539 = G__10551;
count__8718_10540 = G__10552;
i__8719_10541 = G__10553;
continue;
}
} else
{var arg__7204__auto___10554 = cljs.core.first.call(null,seq__8716_10548__$1);a__7203__auto__.push(arg__7204__auto___10554);
{
var G__10555 = cljs.core.next.call(null,seq__8716_10548__$1);
var G__10556 = null;
var G__10557 = 0;
var G__10558 = 0;
seq__8716_10538 = G__10555;
chunk__8717_10539 = G__10556;
count__8718_10540 = G__10557;
i__8719_10541 = G__10558;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.menuitem.apply(null,a__7203__auto__);
};
var menuitem = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return menuitem__delegate.call(this,args__7202__auto__);};
menuitem.cljs$lang$maxFixedArity = 0;
menuitem.cljs$lang$applyTo = (function (arglist__10559){
var args__7202__auto__ = cljs.core.seq(arglist__10559);
return menuitem__delegate(args__7202__auto__);
});
menuitem.cljs$core$IFn$_invoke$arity$variadic = menuitem__delegate;
return menuitem;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.meta = (function() { 
var meta__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8724_10560 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8725_10561 = null;var count__8726_10562 = 0;var i__8727_10563 = 0;while(true){
if((i__8727_10563 < count__8726_10562))
{var arg__7204__auto___10564 = cljs.core._nth.call(null,chunk__8725_10561,i__8727_10563);a__7203__auto__.push(arg__7204__auto___10564);
{
var G__10565 = seq__8724_10560;
var G__10566 = chunk__8725_10561;
var G__10567 = count__8726_10562;
var G__10568 = (i__8727_10563 + 1);
seq__8724_10560 = G__10565;
chunk__8725_10561 = G__10566;
count__8726_10562 = G__10567;
i__8727_10563 = G__10568;
continue;
}
} else
{var temp__4092__auto___10569 = cljs.core.seq.call(null,seq__8724_10560);if(temp__4092__auto___10569)
{var seq__8724_10570__$1 = temp__4092__auto___10569;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8724_10570__$1))
{var c__5632__auto___10571 = cljs.core.chunk_first.call(null,seq__8724_10570__$1);{
var G__10572 = cljs.core.chunk_rest.call(null,seq__8724_10570__$1);
var G__10573 = c__5632__auto___10571;
var G__10574 = cljs.core.count.call(null,c__5632__auto___10571);
var G__10575 = 0;
seq__8724_10560 = G__10572;
chunk__8725_10561 = G__10573;
count__8726_10562 = G__10574;
i__8727_10563 = G__10575;
continue;
}
} else
{var arg__7204__auto___10576 = cljs.core.first.call(null,seq__8724_10570__$1);a__7203__auto__.push(arg__7204__auto___10576);
{
var G__10577 = cljs.core.next.call(null,seq__8724_10570__$1);
var G__10578 = null;
var G__10579 = 0;
var G__10580 = 0;
seq__8724_10560 = G__10577;
chunk__8725_10561 = G__10578;
count__8726_10562 = G__10579;
i__8727_10563 = G__10580;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.meta.apply(null,a__7203__auto__);
};
var meta = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return meta__delegate.call(this,args__7202__auto__);};
meta.cljs$lang$maxFixedArity = 0;
meta.cljs$lang$applyTo = (function (arglist__10581){
var args__7202__auto__ = cljs.core.seq(arglist__10581);
return meta__delegate(args__7202__auto__);
});
meta.cljs$core$IFn$_invoke$arity$variadic = meta__delegate;
return meta;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.meter = (function() { 
var meter__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8732_10582 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8733_10583 = null;var count__8734_10584 = 0;var i__8735_10585 = 0;while(true){
if((i__8735_10585 < count__8734_10584))
{var arg__7204__auto___10586 = cljs.core._nth.call(null,chunk__8733_10583,i__8735_10585);a__7203__auto__.push(arg__7204__auto___10586);
{
var G__10587 = seq__8732_10582;
var G__10588 = chunk__8733_10583;
var G__10589 = count__8734_10584;
var G__10590 = (i__8735_10585 + 1);
seq__8732_10582 = G__10587;
chunk__8733_10583 = G__10588;
count__8734_10584 = G__10589;
i__8735_10585 = G__10590;
continue;
}
} else
{var temp__4092__auto___10591 = cljs.core.seq.call(null,seq__8732_10582);if(temp__4092__auto___10591)
{var seq__8732_10592__$1 = temp__4092__auto___10591;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8732_10592__$1))
{var c__5632__auto___10593 = cljs.core.chunk_first.call(null,seq__8732_10592__$1);{
var G__10594 = cljs.core.chunk_rest.call(null,seq__8732_10592__$1);
var G__10595 = c__5632__auto___10593;
var G__10596 = cljs.core.count.call(null,c__5632__auto___10593);
var G__10597 = 0;
seq__8732_10582 = G__10594;
chunk__8733_10583 = G__10595;
count__8734_10584 = G__10596;
i__8735_10585 = G__10597;
continue;
}
} else
{var arg__7204__auto___10598 = cljs.core.first.call(null,seq__8732_10592__$1);a__7203__auto__.push(arg__7204__auto___10598);
{
var G__10599 = cljs.core.next.call(null,seq__8732_10592__$1);
var G__10600 = null;
var G__10601 = 0;
var G__10602 = 0;
seq__8732_10582 = G__10599;
chunk__8733_10583 = G__10600;
count__8734_10584 = G__10601;
i__8735_10585 = G__10602;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.meter.apply(null,a__7203__auto__);
};
var meter = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return meter__delegate.call(this,args__7202__auto__);};
meter.cljs$lang$maxFixedArity = 0;
meter.cljs$lang$applyTo = (function (arglist__10603){
var args__7202__auto__ = cljs.core.seq(arglist__10603);
return meter__delegate(args__7202__auto__);
});
meter.cljs$core$IFn$_invoke$arity$variadic = meter__delegate;
return meter;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.nav = (function() { 
var nav__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8740_10604 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8741_10605 = null;var count__8742_10606 = 0;var i__8743_10607 = 0;while(true){
if((i__8743_10607 < count__8742_10606))
{var arg__7204__auto___10608 = cljs.core._nth.call(null,chunk__8741_10605,i__8743_10607);a__7203__auto__.push(arg__7204__auto___10608);
{
var G__10609 = seq__8740_10604;
var G__10610 = chunk__8741_10605;
var G__10611 = count__8742_10606;
var G__10612 = (i__8743_10607 + 1);
seq__8740_10604 = G__10609;
chunk__8741_10605 = G__10610;
count__8742_10606 = G__10611;
i__8743_10607 = G__10612;
continue;
}
} else
{var temp__4092__auto___10613 = cljs.core.seq.call(null,seq__8740_10604);if(temp__4092__auto___10613)
{var seq__8740_10614__$1 = temp__4092__auto___10613;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8740_10614__$1))
{var c__5632__auto___10615 = cljs.core.chunk_first.call(null,seq__8740_10614__$1);{
var G__10616 = cljs.core.chunk_rest.call(null,seq__8740_10614__$1);
var G__10617 = c__5632__auto___10615;
var G__10618 = cljs.core.count.call(null,c__5632__auto___10615);
var G__10619 = 0;
seq__8740_10604 = G__10616;
chunk__8741_10605 = G__10617;
count__8742_10606 = G__10618;
i__8743_10607 = G__10619;
continue;
}
} else
{var arg__7204__auto___10620 = cljs.core.first.call(null,seq__8740_10614__$1);a__7203__auto__.push(arg__7204__auto___10620);
{
var G__10621 = cljs.core.next.call(null,seq__8740_10614__$1);
var G__10622 = null;
var G__10623 = 0;
var G__10624 = 0;
seq__8740_10604 = G__10621;
chunk__8741_10605 = G__10622;
count__8742_10606 = G__10623;
i__8743_10607 = G__10624;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.nav.apply(null,a__7203__auto__);
};
var nav = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return nav__delegate.call(this,args__7202__auto__);};
nav.cljs$lang$maxFixedArity = 0;
nav.cljs$lang$applyTo = (function (arglist__10625){
var args__7202__auto__ = cljs.core.seq(arglist__10625);
return nav__delegate(args__7202__auto__);
});
nav.cljs$core$IFn$_invoke$arity$variadic = nav__delegate;
return nav;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.noscript = (function() { 
var noscript__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8748_10626 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8749_10627 = null;var count__8750_10628 = 0;var i__8751_10629 = 0;while(true){
if((i__8751_10629 < count__8750_10628))
{var arg__7204__auto___10630 = cljs.core._nth.call(null,chunk__8749_10627,i__8751_10629);a__7203__auto__.push(arg__7204__auto___10630);
{
var G__10631 = seq__8748_10626;
var G__10632 = chunk__8749_10627;
var G__10633 = count__8750_10628;
var G__10634 = (i__8751_10629 + 1);
seq__8748_10626 = G__10631;
chunk__8749_10627 = G__10632;
count__8750_10628 = G__10633;
i__8751_10629 = G__10634;
continue;
}
} else
{var temp__4092__auto___10635 = cljs.core.seq.call(null,seq__8748_10626);if(temp__4092__auto___10635)
{var seq__8748_10636__$1 = temp__4092__auto___10635;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8748_10636__$1))
{var c__5632__auto___10637 = cljs.core.chunk_first.call(null,seq__8748_10636__$1);{
var G__10638 = cljs.core.chunk_rest.call(null,seq__8748_10636__$1);
var G__10639 = c__5632__auto___10637;
var G__10640 = cljs.core.count.call(null,c__5632__auto___10637);
var G__10641 = 0;
seq__8748_10626 = G__10638;
chunk__8749_10627 = G__10639;
count__8750_10628 = G__10640;
i__8751_10629 = G__10641;
continue;
}
} else
{var arg__7204__auto___10642 = cljs.core.first.call(null,seq__8748_10636__$1);a__7203__auto__.push(arg__7204__auto___10642);
{
var G__10643 = cljs.core.next.call(null,seq__8748_10636__$1);
var G__10644 = null;
var G__10645 = 0;
var G__10646 = 0;
seq__8748_10626 = G__10643;
chunk__8749_10627 = G__10644;
count__8750_10628 = G__10645;
i__8751_10629 = G__10646;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.noscript.apply(null,a__7203__auto__);
};
var noscript = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return noscript__delegate.call(this,args__7202__auto__);};
noscript.cljs$lang$maxFixedArity = 0;
noscript.cljs$lang$applyTo = (function (arglist__10647){
var args__7202__auto__ = cljs.core.seq(arglist__10647);
return noscript__delegate(args__7202__auto__);
});
noscript.cljs$core$IFn$_invoke$arity$variadic = noscript__delegate;
return noscript;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.object = (function() { 
var object__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8756_10648 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8757_10649 = null;var count__8758_10650 = 0;var i__8759_10651 = 0;while(true){
if((i__8759_10651 < count__8758_10650))
{var arg__7204__auto___10652 = cljs.core._nth.call(null,chunk__8757_10649,i__8759_10651);a__7203__auto__.push(arg__7204__auto___10652);
{
var G__10653 = seq__8756_10648;
var G__10654 = chunk__8757_10649;
var G__10655 = count__8758_10650;
var G__10656 = (i__8759_10651 + 1);
seq__8756_10648 = G__10653;
chunk__8757_10649 = G__10654;
count__8758_10650 = G__10655;
i__8759_10651 = G__10656;
continue;
}
} else
{var temp__4092__auto___10657 = cljs.core.seq.call(null,seq__8756_10648);if(temp__4092__auto___10657)
{var seq__8756_10658__$1 = temp__4092__auto___10657;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8756_10658__$1))
{var c__5632__auto___10659 = cljs.core.chunk_first.call(null,seq__8756_10658__$1);{
var G__10660 = cljs.core.chunk_rest.call(null,seq__8756_10658__$1);
var G__10661 = c__5632__auto___10659;
var G__10662 = cljs.core.count.call(null,c__5632__auto___10659);
var G__10663 = 0;
seq__8756_10648 = G__10660;
chunk__8757_10649 = G__10661;
count__8758_10650 = G__10662;
i__8759_10651 = G__10663;
continue;
}
} else
{var arg__7204__auto___10664 = cljs.core.first.call(null,seq__8756_10658__$1);a__7203__auto__.push(arg__7204__auto___10664);
{
var G__10665 = cljs.core.next.call(null,seq__8756_10658__$1);
var G__10666 = null;
var G__10667 = 0;
var G__10668 = 0;
seq__8756_10648 = G__10665;
chunk__8757_10649 = G__10666;
count__8758_10650 = G__10667;
i__8759_10651 = G__10668;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.object.apply(null,a__7203__auto__);
};
var object = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return object__delegate.call(this,args__7202__auto__);};
object.cljs$lang$maxFixedArity = 0;
object.cljs$lang$applyTo = (function (arglist__10669){
var args__7202__auto__ = cljs.core.seq(arglist__10669);
return object__delegate(args__7202__auto__);
});
object.cljs$core$IFn$_invoke$arity$variadic = object__delegate;
return object;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.ol = (function() { 
var ol__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8764_10670 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8765_10671 = null;var count__8766_10672 = 0;var i__8767_10673 = 0;while(true){
if((i__8767_10673 < count__8766_10672))
{var arg__7204__auto___10674 = cljs.core._nth.call(null,chunk__8765_10671,i__8767_10673);a__7203__auto__.push(arg__7204__auto___10674);
{
var G__10675 = seq__8764_10670;
var G__10676 = chunk__8765_10671;
var G__10677 = count__8766_10672;
var G__10678 = (i__8767_10673 + 1);
seq__8764_10670 = G__10675;
chunk__8765_10671 = G__10676;
count__8766_10672 = G__10677;
i__8767_10673 = G__10678;
continue;
}
} else
{var temp__4092__auto___10679 = cljs.core.seq.call(null,seq__8764_10670);if(temp__4092__auto___10679)
{var seq__8764_10680__$1 = temp__4092__auto___10679;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8764_10680__$1))
{var c__5632__auto___10681 = cljs.core.chunk_first.call(null,seq__8764_10680__$1);{
var G__10682 = cljs.core.chunk_rest.call(null,seq__8764_10680__$1);
var G__10683 = c__5632__auto___10681;
var G__10684 = cljs.core.count.call(null,c__5632__auto___10681);
var G__10685 = 0;
seq__8764_10670 = G__10682;
chunk__8765_10671 = G__10683;
count__8766_10672 = G__10684;
i__8767_10673 = G__10685;
continue;
}
} else
{var arg__7204__auto___10686 = cljs.core.first.call(null,seq__8764_10680__$1);a__7203__auto__.push(arg__7204__auto___10686);
{
var G__10687 = cljs.core.next.call(null,seq__8764_10680__$1);
var G__10688 = null;
var G__10689 = 0;
var G__10690 = 0;
seq__8764_10670 = G__10687;
chunk__8765_10671 = G__10688;
count__8766_10672 = G__10689;
i__8767_10673 = G__10690;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.ol.apply(null,a__7203__auto__);
};
var ol = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ol__delegate.call(this,args__7202__auto__);};
ol.cljs$lang$maxFixedArity = 0;
ol.cljs$lang$applyTo = (function (arglist__10691){
var args__7202__auto__ = cljs.core.seq(arglist__10691);
return ol__delegate(args__7202__auto__);
});
ol.cljs$core$IFn$_invoke$arity$variadic = ol__delegate;
return ol;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.optgroup = (function() { 
var optgroup__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8772_10692 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8773_10693 = null;var count__8774_10694 = 0;var i__8775_10695 = 0;while(true){
if((i__8775_10695 < count__8774_10694))
{var arg__7204__auto___10696 = cljs.core._nth.call(null,chunk__8773_10693,i__8775_10695);a__7203__auto__.push(arg__7204__auto___10696);
{
var G__10697 = seq__8772_10692;
var G__10698 = chunk__8773_10693;
var G__10699 = count__8774_10694;
var G__10700 = (i__8775_10695 + 1);
seq__8772_10692 = G__10697;
chunk__8773_10693 = G__10698;
count__8774_10694 = G__10699;
i__8775_10695 = G__10700;
continue;
}
} else
{var temp__4092__auto___10701 = cljs.core.seq.call(null,seq__8772_10692);if(temp__4092__auto___10701)
{var seq__8772_10702__$1 = temp__4092__auto___10701;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8772_10702__$1))
{var c__5632__auto___10703 = cljs.core.chunk_first.call(null,seq__8772_10702__$1);{
var G__10704 = cljs.core.chunk_rest.call(null,seq__8772_10702__$1);
var G__10705 = c__5632__auto___10703;
var G__10706 = cljs.core.count.call(null,c__5632__auto___10703);
var G__10707 = 0;
seq__8772_10692 = G__10704;
chunk__8773_10693 = G__10705;
count__8774_10694 = G__10706;
i__8775_10695 = G__10707;
continue;
}
} else
{var arg__7204__auto___10708 = cljs.core.first.call(null,seq__8772_10702__$1);a__7203__auto__.push(arg__7204__auto___10708);
{
var G__10709 = cljs.core.next.call(null,seq__8772_10702__$1);
var G__10710 = null;
var G__10711 = 0;
var G__10712 = 0;
seq__8772_10692 = G__10709;
chunk__8773_10693 = G__10710;
count__8774_10694 = G__10711;
i__8775_10695 = G__10712;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.optgroup.apply(null,a__7203__auto__);
};
var optgroup = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return optgroup__delegate.call(this,args__7202__auto__);};
optgroup.cljs$lang$maxFixedArity = 0;
optgroup.cljs$lang$applyTo = (function (arglist__10713){
var args__7202__auto__ = cljs.core.seq(arglist__10713);
return optgroup__delegate(args__7202__auto__);
});
optgroup.cljs$core$IFn$_invoke$arity$variadic = optgroup__delegate;
return optgroup;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.option = (function() { 
var option__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8780_10714 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8781_10715 = null;var count__8782_10716 = 0;var i__8783_10717 = 0;while(true){
if((i__8783_10717 < count__8782_10716))
{var arg__7204__auto___10718 = cljs.core._nth.call(null,chunk__8781_10715,i__8783_10717);a__7203__auto__.push(arg__7204__auto___10718);
{
var G__10719 = seq__8780_10714;
var G__10720 = chunk__8781_10715;
var G__10721 = count__8782_10716;
var G__10722 = (i__8783_10717 + 1);
seq__8780_10714 = G__10719;
chunk__8781_10715 = G__10720;
count__8782_10716 = G__10721;
i__8783_10717 = G__10722;
continue;
}
} else
{var temp__4092__auto___10723 = cljs.core.seq.call(null,seq__8780_10714);if(temp__4092__auto___10723)
{var seq__8780_10724__$1 = temp__4092__auto___10723;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8780_10724__$1))
{var c__5632__auto___10725 = cljs.core.chunk_first.call(null,seq__8780_10724__$1);{
var G__10726 = cljs.core.chunk_rest.call(null,seq__8780_10724__$1);
var G__10727 = c__5632__auto___10725;
var G__10728 = cljs.core.count.call(null,c__5632__auto___10725);
var G__10729 = 0;
seq__8780_10714 = G__10726;
chunk__8781_10715 = G__10727;
count__8782_10716 = G__10728;
i__8783_10717 = G__10729;
continue;
}
} else
{var arg__7204__auto___10730 = cljs.core.first.call(null,seq__8780_10724__$1);a__7203__auto__.push(arg__7204__auto___10730);
{
var G__10731 = cljs.core.next.call(null,seq__8780_10724__$1);
var G__10732 = null;
var G__10733 = 0;
var G__10734 = 0;
seq__8780_10714 = G__10731;
chunk__8781_10715 = G__10732;
count__8782_10716 = G__10733;
i__8783_10717 = G__10734;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.option.apply(null,a__7203__auto__);
};
var option = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return option__delegate.call(this,args__7202__auto__);};
option.cljs$lang$maxFixedArity = 0;
option.cljs$lang$applyTo = (function (arglist__10735){
var args__7202__auto__ = cljs.core.seq(arglist__10735);
return option__delegate(args__7202__auto__);
});
option.cljs$core$IFn$_invoke$arity$variadic = option__delegate;
return option;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.output = (function() { 
var output__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8788_10736 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8789_10737 = null;var count__8790_10738 = 0;var i__8791_10739 = 0;while(true){
if((i__8791_10739 < count__8790_10738))
{var arg__7204__auto___10740 = cljs.core._nth.call(null,chunk__8789_10737,i__8791_10739);a__7203__auto__.push(arg__7204__auto___10740);
{
var G__10741 = seq__8788_10736;
var G__10742 = chunk__8789_10737;
var G__10743 = count__8790_10738;
var G__10744 = (i__8791_10739 + 1);
seq__8788_10736 = G__10741;
chunk__8789_10737 = G__10742;
count__8790_10738 = G__10743;
i__8791_10739 = G__10744;
continue;
}
} else
{var temp__4092__auto___10745 = cljs.core.seq.call(null,seq__8788_10736);if(temp__4092__auto___10745)
{var seq__8788_10746__$1 = temp__4092__auto___10745;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8788_10746__$1))
{var c__5632__auto___10747 = cljs.core.chunk_first.call(null,seq__8788_10746__$1);{
var G__10748 = cljs.core.chunk_rest.call(null,seq__8788_10746__$1);
var G__10749 = c__5632__auto___10747;
var G__10750 = cljs.core.count.call(null,c__5632__auto___10747);
var G__10751 = 0;
seq__8788_10736 = G__10748;
chunk__8789_10737 = G__10749;
count__8790_10738 = G__10750;
i__8791_10739 = G__10751;
continue;
}
} else
{var arg__7204__auto___10752 = cljs.core.first.call(null,seq__8788_10746__$1);a__7203__auto__.push(arg__7204__auto___10752);
{
var G__10753 = cljs.core.next.call(null,seq__8788_10746__$1);
var G__10754 = null;
var G__10755 = 0;
var G__10756 = 0;
seq__8788_10736 = G__10753;
chunk__8789_10737 = G__10754;
count__8790_10738 = G__10755;
i__8791_10739 = G__10756;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.output.apply(null,a__7203__auto__);
};
var output = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return output__delegate.call(this,args__7202__auto__);};
output.cljs$lang$maxFixedArity = 0;
output.cljs$lang$applyTo = (function (arglist__10757){
var args__7202__auto__ = cljs.core.seq(arglist__10757);
return output__delegate(args__7202__auto__);
});
output.cljs$core$IFn$_invoke$arity$variadic = output__delegate;
return output;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.p = (function() { 
var p__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8796_10758 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8797_10759 = null;var count__8798_10760 = 0;var i__8799_10761 = 0;while(true){
if((i__8799_10761 < count__8798_10760))
{var arg__7204__auto___10762 = cljs.core._nth.call(null,chunk__8797_10759,i__8799_10761);a__7203__auto__.push(arg__7204__auto___10762);
{
var G__10763 = seq__8796_10758;
var G__10764 = chunk__8797_10759;
var G__10765 = count__8798_10760;
var G__10766 = (i__8799_10761 + 1);
seq__8796_10758 = G__10763;
chunk__8797_10759 = G__10764;
count__8798_10760 = G__10765;
i__8799_10761 = G__10766;
continue;
}
} else
{var temp__4092__auto___10767 = cljs.core.seq.call(null,seq__8796_10758);if(temp__4092__auto___10767)
{var seq__8796_10768__$1 = temp__4092__auto___10767;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8796_10768__$1))
{var c__5632__auto___10769 = cljs.core.chunk_first.call(null,seq__8796_10768__$1);{
var G__10770 = cljs.core.chunk_rest.call(null,seq__8796_10768__$1);
var G__10771 = c__5632__auto___10769;
var G__10772 = cljs.core.count.call(null,c__5632__auto___10769);
var G__10773 = 0;
seq__8796_10758 = G__10770;
chunk__8797_10759 = G__10771;
count__8798_10760 = G__10772;
i__8799_10761 = G__10773;
continue;
}
} else
{var arg__7204__auto___10774 = cljs.core.first.call(null,seq__8796_10768__$1);a__7203__auto__.push(arg__7204__auto___10774);
{
var G__10775 = cljs.core.next.call(null,seq__8796_10768__$1);
var G__10776 = null;
var G__10777 = 0;
var G__10778 = 0;
seq__8796_10758 = G__10775;
chunk__8797_10759 = G__10776;
count__8798_10760 = G__10777;
i__8799_10761 = G__10778;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.p.apply(null,a__7203__auto__);
};
var p = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return p__delegate.call(this,args__7202__auto__);};
p.cljs$lang$maxFixedArity = 0;
p.cljs$lang$applyTo = (function (arglist__10779){
var args__7202__auto__ = cljs.core.seq(arglist__10779);
return p__delegate(args__7202__auto__);
});
p.cljs$core$IFn$_invoke$arity$variadic = p__delegate;
return p;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.param = (function() { 
var param__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8804_10780 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8805_10781 = null;var count__8806_10782 = 0;var i__8807_10783 = 0;while(true){
if((i__8807_10783 < count__8806_10782))
{var arg__7204__auto___10784 = cljs.core._nth.call(null,chunk__8805_10781,i__8807_10783);a__7203__auto__.push(arg__7204__auto___10784);
{
var G__10785 = seq__8804_10780;
var G__10786 = chunk__8805_10781;
var G__10787 = count__8806_10782;
var G__10788 = (i__8807_10783 + 1);
seq__8804_10780 = G__10785;
chunk__8805_10781 = G__10786;
count__8806_10782 = G__10787;
i__8807_10783 = G__10788;
continue;
}
} else
{var temp__4092__auto___10789 = cljs.core.seq.call(null,seq__8804_10780);if(temp__4092__auto___10789)
{var seq__8804_10790__$1 = temp__4092__auto___10789;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8804_10790__$1))
{var c__5632__auto___10791 = cljs.core.chunk_first.call(null,seq__8804_10790__$1);{
var G__10792 = cljs.core.chunk_rest.call(null,seq__8804_10790__$1);
var G__10793 = c__5632__auto___10791;
var G__10794 = cljs.core.count.call(null,c__5632__auto___10791);
var G__10795 = 0;
seq__8804_10780 = G__10792;
chunk__8805_10781 = G__10793;
count__8806_10782 = G__10794;
i__8807_10783 = G__10795;
continue;
}
} else
{var arg__7204__auto___10796 = cljs.core.first.call(null,seq__8804_10790__$1);a__7203__auto__.push(arg__7204__auto___10796);
{
var G__10797 = cljs.core.next.call(null,seq__8804_10790__$1);
var G__10798 = null;
var G__10799 = 0;
var G__10800 = 0;
seq__8804_10780 = G__10797;
chunk__8805_10781 = G__10798;
count__8806_10782 = G__10799;
i__8807_10783 = G__10800;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.param.apply(null,a__7203__auto__);
};
var param = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return param__delegate.call(this,args__7202__auto__);};
param.cljs$lang$maxFixedArity = 0;
param.cljs$lang$applyTo = (function (arglist__10801){
var args__7202__auto__ = cljs.core.seq(arglist__10801);
return param__delegate(args__7202__auto__);
});
param.cljs$core$IFn$_invoke$arity$variadic = param__delegate;
return param;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.pre = (function() { 
var pre__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8812_10802 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8813_10803 = null;var count__8814_10804 = 0;var i__8815_10805 = 0;while(true){
if((i__8815_10805 < count__8814_10804))
{var arg__7204__auto___10806 = cljs.core._nth.call(null,chunk__8813_10803,i__8815_10805);a__7203__auto__.push(arg__7204__auto___10806);
{
var G__10807 = seq__8812_10802;
var G__10808 = chunk__8813_10803;
var G__10809 = count__8814_10804;
var G__10810 = (i__8815_10805 + 1);
seq__8812_10802 = G__10807;
chunk__8813_10803 = G__10808;
count__8814_10804 = G__10809;
i__8815_10805 = G__10810;
continue;
}
} else
{var temp__4092__auto___10811 = cljs.core.seq.call(null,seq__8812_10802);if(temp__4092__auto___10811)
{var seq__8812_10812__$1 = temp__4092__auto___10811;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8812_10812__$1))
{var c__5632__auto___10813 = cljs.core.chunk_first.call(null,seq__8812_10812__$1);{
var G__10814 = cljs.core.chunk_rest.call(null,seq__8812_10812__$1);
var G__10815 = c__5632__auto___10813;
var G__10816 = cljs.core.count.call(null,c__5632__auto___10813);
var G__10817 = 0;
seq__8812_10802 = G__10814;
chunk__8813_10803 = G__10815;
count__8814_10804 = G__10816;
i__8815_10805 = G__10817;
continue;
}
} else
{var arg__7204__auto___10818 = cljs.core.first.call(null,seq__8812_10812__$1);a__7203__auto__.push(arg__7204__auto___10818);
{
var G__10819 = cljs.core.next.call(null,seq__8812_10812__$1);
var G__10820 = null;
var G__10821 = 0;
var G__10822 = 0;
seq__8812_10802 = G__10819;
chunk__8813_10803 = G__10820;
count__8814_10804 = G__10821;
i__8815_10805 = G__10822;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.pre.apply(null,a__7203__auto__);
};
var pre = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return pre__delegate.call(this,args__7202__auto__);};
pre.cljs$lang$maxFixedArity = 0;
pre.cljs$lang$applyTo = (function (arglist__10823){
var args__7202__auto__ = cljs.core.seq(arglist__10823);
return pre__delegate(args__7202__auto__);
});
pre.cljs$core$IFn$_invoke$arity$variadic = pre__delegate;
return pre;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.progress = (function() { 
var progress__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8820_10824 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8821_10825 = null;var count__8822_10826 = 0;var i__8823_10827 = 0;while(true){
if((i__8823_10827 < count__8822_10826))
{var arg__7204__auto___10828 = cljs.core._nth.call(null,chunk__8821_10825,i__8823_10827);a__7203__auto__.push(arg__7204__auto___10828);
{
var G__10829 = seq__8820_10824;
var G__10830 = chunk__8821_10825;
var G__10831 = count__8822_10826;
var G__10832 = (i__8823_10827 + 1);
seq__8820_10824 = G__10829;
chunk__8821_10825 = G__10830;
count__8822_10826 = G__10831;
i__8823_10827 = G__10832;
continue;
}
} else
{var temp__4092__auto___10833 = cljs.core.seq.call(null,seq__8820_10824);if(temp__4092__auto___10833)
{var seq__8820_10834__$1 = temp__4092__auto___10833;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8820_10834__$1))
{var c__5632__auto___10835 = cljs.core.chunk_first.call(null,seq__8820_10834__$1);{
var G__10836 = cljs.core.chunk_rest.call(null,seq__8820_10834__$1);
var G__10837 = c__5632__auto___10835;
var G__10838 = cljs.core.count.call(null,c__5632__auto___10835);
var G__10839 = 0;
seq__8820_10824 = G__10836;
chunk__8821_10825 = G__10837;
count__8822_10826 = G__10838;
i__8823_10827 = G__10839;
continue;
}
} else
{var arg__7204__auto___10840 = cljs.core.first.call(null,seq__8820_10834__$1);a__7203__auto__.push(arg__7204__auto___10840);
{
var G__10841 = cljs.core.next.call(null,seq__8820_10834__$1);
var G__10842 = null;
var G__10843 = 0;
var G__10844 = 0;
seq__8820_10824 = G__10841;
chunk__8821_10825 = G__10842;
count__8822_10826 = G__10843;
i__8823_10827 = G__10844;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.progress.apply(null,a__7203__auto__);
};
var progress = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return progress__delegate.call(this,args__7202__auto__);};
progress.cljs$lang$maxFixedArity = 0;
progress.cljs$lang$applyTo = (function (arglist__10845){
var args__7202__auto__ = cljs.core.seq(arglist__10845);
return progress__delegate(args__7202__auto__);
});
progress.cljs$core$IFn$_invoke$arity$variadic = progress__delegate;
return progress;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.q = (function() { 
var q__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8828_10846 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8829_10847 = null;var count__8830_10848 = 0;var i__8831_10849 = 0;while(true){
if((i__8831_10849 < count__8830_10848))
{var arg__7204__auto___10850 = cljs.core._nth.call(null,chunk__8829_10847,i__8831_10849);a__7203__auto__.push(arg__7204__auto___10850);
{
var G__10851 = seq__8828_10846;
var G__10852 = chunk__8829_10847;
var G__10853 = count__8830_10848;
var G__10854 = (i__8831_10849 + 1);
seq__8828_10846 = G__10851;
chunk__8829_10847 = G__10852;
count__8830_10848 = G__10853;
i__8831_10849 = G__10854;
continue;
}
} else
{var temp__4092__auto___10855 = cljs.core.seq.call(null,seq__8828_10846);if(temp__4092__auto___10855)
{var seq__8828_10856__$1 = temp__4092__auto___10855;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8828_10856__$1))
{var c__5632__auto___10857 = cljs.core.chunk_first.call(null,seq__8828_10856__$1);{
var G__10858 = cljs.core.chunk_rest.call(null,seq__8828_10856__$1);
var G__10859 = c__5632__auto___10857;
var G__10860 = cljs.core.count.call(null,c__5632__auto___10857);
var G__10861 = 0;
seq__8828_10846 = G__10858;
chunk__8829_10847 = G__10859;
count__8830_10848 = G__10860;
i__8831_10849 = G__10861;
continue;
}
} else
{var arg__7204__auto___10862 = cljs.core.first.call(null,seq__8828_10856__$1);a__7203__auto__.push(arg__7204__auto___10862);
{
var G__10863 = cljs.core.next.call(null,seq__8828_10856__$1);
var G__10864 = null;
var G__10865 = 0;
var G__10866 = 0;
seq__8828_10846 = G__10863;
chunk__8829_10847 = G__10864;
count__8830_10848 = G__10865;
i__8831_10849 = G__10866;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.q.apply(null,a__7203__auto__);
};
var q = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return q__delegate.call(this,args__7202__auto__);};
q.cljs$lang$maxFixedArity = 0;
q.cljs$lang$applyTo = (function (arglist__10867){
var args__7202__auto__ = cljs.core.seq(arglist__10867);
return q__delegate(args__7202__auto__);
});
q.cljs$core$IFn$_invoke$arity$variadic = q__delegate;
return q;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.rp = (function() { 
var rp__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8836_10868 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8837_10869 = null;var count__8838_10870 = 0;var i__8839_10871 = 0;while(true){
if((i__8839_10871 < count__8838_10870))
{var arg__7204__auto___10872 = cljs.core._nth.call(null,chunk__8837_10869,i__8839_10871);a__7203__auto__.push(arg__7204__auto___10872);
{
var G__10873 = seq__8836_10868;
var G__10874 = chunk__8837_10869;
var G__10875 = count__8838_10870;
var G__10876 = (i__8839_10871 + 1);
seq__8836_10868 = G__10873;
chunk__8837_10869 = G__10874;
count__8838_10870 = G__10875;
i__8839_10871 = G__10876;
continue;
}
} else
{var temp__4092__auto___10877 = cljs.core.seq.call(null,seq__8836_10868);if(temp__4092__auto___10877)
{var seq__8836_10878__$1 = temp__4092__auto___10877;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8836_10878__$1))
{var c__5632__auto___10879 = cljs.core.chunk_first.call(null,seq__8836_10878__$1);{
var G__10880 = cljs.core.chunk_rest.call(null,seq__8836_10878__$1);
var G__10881 = c__5632__auto___10879;
var G__10882 = cljs.core.count.call(null,c__5632__auto___10879);
var G__10883 = 0;
seq__8836_10868 = G__10880;
chunk__8837_10869 = G__10881;
count__8838_10870 = G__10882;
i__8839_10871 = G__10883;
continue;
}
} else
{var arg__7204__auto___10884 = cljs.core.first.call(null,seq__8836_10878__$1);a__7203__auto__.push(arg__7204__auto___10884);
{
var G__10885 = cljs.core.next.call(null,seq__8836_10878__$1);
var G__10886 = null;
var G__10887 = 0;
var G__10888 = 0;
seq__8836_10868 = G__10885;
chunk__8837_10869 = G__10886;
count__8838_10870 = G__10887;
i__8839_10871 = G__10888;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.rp.apply(null,a__7203__auto__);
};
var rp = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return rp__delegate.call(this,args__7202__auto__);};
rp.cljs$lang$maxFixedArity = 0;
rp.cljs$lang$applyTo = (function (arglist__10889){
var args__7202__auto__ = cljs.core.seq(arglist__10889);
return rp__delegate(args__7202__auto__);
});
rp.cljs$core$IFn$_invoke$arity$variadic = rp__delegate;
return rp;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.rt = (function() { 
var rt__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8844_10890 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8845_10891 = null;var count__8846_10892 = 0;var i__8847_10893 = 0;while(true){
if((i__8847_10893 < count__8846_10892))
{var arg__7204__auto___10894 = cljs.core._nth.call(null,chunk__8845_10891,i__8847_10893);a__7203__auto__.push(arg__7204__auto___10894);
{
var G__10895 = seq__8844_10890;
var G__10896 = chunk__8845_10891;
var G__10897 = count__8846_10892;
var G__10898 = (i__8847_10893 + 1);
seq__8844_10890 = G__10895;
chunk__8845_10891 = G__10896;
count__8846_10892 = G__10897;
i__8847_10893 = G__10898;
continue;
}
} else
{var temp__4092__auto___10899 = cljs.core.seq.call(null,seq__8844_10890);if(temp__4092__auto___10899)
{var seq__8844_10900__$1 = temp__4092__auto___10899;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8844_10900__$1))
{var c__5632__auto___10901 = cljs.core.chunk_first.call(null,seq__8844_10900__$1);{
var G__10902 = cljs.core.chunk_rest.call(null,seq__8844_10900__$1);
var G__10903 = c__5632__auto___10901;
var G__10904 = cljs.core.count.call(null,c__5632__auto___10901);
var G__10905 = 0;
seq__8844_10890 = G__10902;
chunk__8845_10891 = G__10903;
count__8846_10892 = G__10904;
i__8847_10893 = G__10905;
continue;
}
} else
{var arg__7204__auto___10906 = cljs.core.first.call(null,seq__8844_10900__$1);a__7203__auto__.push(arg__7204__auto___10906);
{
var G__10907 = cljs.core.next.call(null,seq__8844_10900__$1);
var G__10908 = null;
var G__10909 = 0;
var G__10910 = 0;
seq__8844_10890 = G__10907;
chunk__8845_10891 = G__10908;
count__8846_10892 = G__10909;
i__8847_10893 = G__10910;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.rt.apply(null,a__7203__auto__);
};
var rt = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return rt__delegate.call(this,args__7202__auto__);};
rt.cljs$lang$maxFixedArity = 0;
rt.cljs$lang$applyTo = (function (arglist__10911){
var args__7202__auto__ = cljs.core.seq(arglist__10911);
return rt__delegate(args__7202__auto__);
});
rt.cljs$core$IFn$_invoke$arity$variadic = rt__delegate;
return rt;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.ruby = (function() { 
var ruby__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8852_10912 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8853_10913 = null;var count__8854_10914 = 0;var i__8855_10915 = 0;while(true){
if((i__8855_10915 < count__8854_10914))
{var arg__7204__auto___10916 = cljs.core._nth.call(null,chunk__8853_10913,i__8855_10915);a__7203__auto__.push(arg__7204__auto___10916);
{
var G__10917 = seq__8852_10912;
var G__10918 = chunk__8853_10913;
var G__10919 = count__8854_10914;
var G__10920 = (i__8855_10915 + 1);
seq__8852_10912 = G__10917;
chunk__8853_10913 = G__10918;
count__8854_10914 = G__10919;
i__8855_10915 = G__10920;
continue;
}
} else
{var temp__4092__auto___10921 = cljs.core.seq.call(null,seq__8852_10912);if(temp__4092__auto___10921)
{var seq__8852_10922__$1 = temp__4092__auto___10921;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8852_10922__$1))
{var c__5632__auto___10923 = cljs.core.chunk_first.call(null,seq__8852_10922__$1);{
var G__10924 = cljs.core.chunk_rest.call(null,seq__8852_10922__$1);
var G__10925 = c__5632__auto___10923;
var G__10926 = cljs.core.count.call(null,c__5632__auto___10923);
var G__10927 = 0;
seq__8852_10912 = G__10924;
chunk__8853_10913 = G__10925;
count__8854_10914 = G__10926;
i__8855_10915 = G__10927;
continue;
}
} else
{var arg__7204__auto___10928 = cljs.core.first.call(null,seq__8852_10922__$1);a__7203__auto__.push(arg__7204__auto___10928);
{
var G__10929 = cljs.core.next.call(null,seq__8852_10922__$1);
var G__10930 = null;
var G__10931 = 0;
var G__10932 = 0;
seq__8852_10912 = G__10929;
chunk__8853_10913 = G__10930;
count__8854_10914 = G__10931;
i__8855_10915 = G__10932;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.ruby.apply(null,a__7203__auto__);
};
var ruby = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ruby__delegate.call(this,args__7202__auto__);};
ruby.cljs$lang$maxFixedArity = 0;
ruby.cljs$lang$applyTo = (function (arglist__10933){
var args__7202__auto__ = cljs.core.seq(arglist__10933);
return ruby__delegate(args__7202__auto__);
});
ruby.cljs$core$IFn$_invoke$arity$variadic = ruby__delegate;
return ruby;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.s = (function() { 
var s__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8860_10934 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8861_10935 = null;var count__8862_10936 = 0;var i__8863_10937 = 0;while(true){
if((i__8863_10937 < count__8862_10936))
{var arg__7204__auto___10938 = cljs.core._nth.call(null,chunk__8861_10935,i__8863_10937);a__7203__auto__.push(arg__7204__auto___10938);
{
var G__10939 = seq__8860_10934;
var G__10940 = chunk__8861_10935;
var G__10941 = count__8862_10936;
var G__10942 = (i__8863_10937 + 1);
seq__8860_10934 = G__10939;
chunk__8861_10935 = G__10940;
count__8862_10936 = G__10941;
i__8863_10937 = G__10942;
continue;
}
} else
{var temp__4092__auto___10943 = cljs.core.seq.call(null,seq__8860_10934);if(temp__4092__auto___10943)
{var seq__8860_10944__$1 = temp__4092__auto___10943;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8860_10944__$1))
{var c__5632__auto___10945 = cljs.core.chunk_first.call(null,seq__8860_10944__$1);{
var G__10946 = cljs.core.chunk_rest.call(null,seq__8860_10944__$1);
var G__10947 = c__5632__auto___10945;
var G__10948 = cljs.core.count.call(null,c__5632__auto___10945);
var G__10949 = 0;
seq__8860_10934 = G__10946;
chunk__8861_10935 = G__10947;
count__8862_10936 = G__10948;
i__8863_10937 = G__10949;
continue;
}
} else
{var arg__7204__auto___10950 = cljs.core.first.call(null,seq__8860_10944__$1);a__7203__auto__.push(arg__7204__auto___10950);
{
var G__10951 = cljs.core.next.call(null,seq__8860_10944__$1);
var G__10952 = null;
var G__10953 = 0;
var G__10954 = 0;
seq__8860_10934 = G__10951;
chunk__8861_10935 = G__10952;
count__8862_10936 = G__10953;
i__8863_10937 = G__10954;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.s.apply(null,a__7203__auto__);
};
var s = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return s__delegate.call(this,args__7202__auto__);};
s.cljs$lang$maxFixedArity = 0;
s.cljs$lang$applyTo = (function (arglist__10955){
var args__7202__auto__ = cljs.core.seq(arglist__10955);
return s__delegate(args__7202__auto__);
});
s.cljs$core$IFn$_invoke$arity$variadic = s__delegate;
return s;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.samp = (function() { 
var samp__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8868_10956 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8869_10957 = null;var count__8870_10958 = 0;var i__8871_10959 = 0;while(true){
if((i__8871_10959 < count__8870_10958))
{var arg__7204__auto___10960 = cljs.core._nth.call(null,chunk__8869_10957,i__8871_10959);a__7203__auto__.push(arg__7204__auto___10960);
{
var G__10961 = seq__8868_10956;
var G__10962 = chunk__8869_10957;
var G__10963 = count__8870_10958;
var G__10964 = (i__8871_10959 + 1);
seq__8868_10956 = G__10961;
chunk__8869_10957 = G__10962;
count__8870_10958 = G__10963;
i__8871_10959 = G__10964;
continue;
}
} else
{var temp__4092__auto___10965 = cljs.core.seq.call(null,seq__8868_10956);if(temp__4092__auto___10965)
{var seq__8868_10966__$1 = temp__4092__auto___10965;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8868_10966__$1))
{var c__5632__auto___10967 = cljs.core.chunk_first.call(null,seq__8868_10966__$1);{
var G__10968 = cljs.core.chunk_rest.call(null,seq__8868_10966__$1);
var G__10969 = c__5632__auto___10967;
var G__10970 = cljs.core.count.call(null,c__5632__auto___10967);
var G__10971 = 0;
seq__8868_10956 = G__10968;
chunk__8869_10957 = G__10969;
count__8870_10958 = G__10970;
i__8871_10959 = G__10971;
continue;
}
} else
{var arg__7204__auto___10972 = cljs.core.first.call(null,seq__8868_10966__$1);a__7203__auto__.push(arg__7204__auto___10972);
{
var G__10973 = cljs.core.next.call(null,seq__8868_10966__$1);
var G__10974 = null;
var G__10975 = 0;
var G__10976 = 0;
seq__8868_10956 = G__10973;
chunk__8869_10957 = G__10974;
count__8870_10958 = G__10975;
i__8871_10959 = G__10976;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.samp.apply(null,a__7203__auto__);
};
var samp = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return samp__delegate.call(this,args__7202__auto__);};
samp.cljs$lang$maxFixedArity = 0;
samp.cljs$lang$applyTo = (function (arglist__10977){
var args__7202__auto__ = cljs.core.seq(arglist__10977);
return samp__delegate(args__7202__auto__);
});
samp.cljs$core$IFn$_invoke$arity$variadic = samp__delegate;
return samp;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.script = (function() { 
var script__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8876_10978 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8877_10979 = null;var count__8878_10980 = 0;var i__8879_10981 = 0;while(true){
if((i__8879_10981 < count__8878_10980))
{var arg__7204__auto___10982 = cljs.core._nth.call(null,chunk__8877_10979,i__8879_10981);a__7203__auto__.push(arg__7204__auto___10982);
{
var G__10983 = seq__8876_10978;
var G__10984 = chunk__8877_10979;
var G__10985 = count__8878_10980;
var G__10986 = (i__8879_10981 + 1);
seq__8876_10978 = G__10983;
chunk__8877_10979 = G__10984;
count__8878_10980 = G__10985;
i__8879_10981 = G__10986;
continue;
}
} else
{var temp__4092__auto___10987 = cljs.core.seq.call(null,seq__8876_10978);if(temp__4092__auto___10987)
{var seq__8876_10988__$1 = temp__4092__auto___10987;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8876_10988__$1))
{var c__5632__auto___10989 = cljs.core.chunk_first.call(null,seq__8876_10988__$1);{
var G__10990 = cljs.core.chunk_rest.call(null,seq__8876_10988__$1);
var G__10991 = c__5632__auto___10989;
var G__10992 = cljs.core.count.call(null,c__5632__auto___10989);
var G__10993 = 0;
seq__8876_10978 = G__10990;
chunk__8877_10979 = G__10991;
count__8878_10980 = G__10992;
i__8879_10981 = G__10993;
continue;
}
} else
{var arg__7204__auto___10994 = cljs.core.first.call(null,seq__8876_10988__$1);a__7203__auto__.push(arg__7204__auto___10994);
{
var G__10995 = cljs.core.next.call(null,seq__8876_10988__$1);
var G__10996 = null;
var G__10997 = 0;
var G__10998 = 0;
seq__8876_10978 = G__10995;
chunk__8877_10979 = G__10996;
count__8878_10980 = G__10997;
i__8879_10981 = G__10998;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.script.apply(null,a__7203__auto__);
};
var script = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return script__delegate.call(this,args__7202__auto__);};
script.cljs$lang$maxFixedArity = 0;
script.cljs$lang$applyTo = (function (arglist__10999){
var args__7202__auto__ = cljs.core.seq(arglist__10999);
return script__delegate(args__7202__auto__);
});
script.cljs$core$IFn$_invoke$arity$variadic = script__delegate;
return script;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.section = (function() { 
var section__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8884_11000 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8885_11001 = null;var count__8886_11002 = 0;var i__8887_11003 = 0;while(true){
if((i__8887_11003 < count__8886_11002))
{var arg__7204__auto___11004 = cljs.core._nth.call(null,chunk__8885_11001,i__8887_11003);a__7203__auto__.push(arg__7204__auto___11004);
{
var G__11005 = seq__8884_11000;
var G__11006 = chunk__8885_11001;
var G__11007 = count__8886_11002;
var G__11008 = (i__8887_11003 + 1);
seq__8884_11000 = G__11005;
chunk__8885_11001 = G__11006;
count__8886_11002 = G__11007;
i__8887_11003 = G__11008;
continue;
}
} else
{var temp__4092__auto___11009 = cljs.core.seq.call(null,seq__8884_11000);if(temp__4092__auto___11009)
{var seq__8884_11010__$1 = temp__4092__auto___11009;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8884_11010__$1))
{var c__5632__auto___11011 = cljs.core.chunk_first.call(null,seq__8884_11010__$1);{
var G__11012 = cljs.core.chunk_rest.call(null,seq__8884_11010__$1);
var G__11013 = c__5632__auto___11011;
var G__11014 = cljs.core.count.call(null,c__5632__auto___11011);
var G__11015 = 0;
seq__8884_11000 = G__11012;
chunk__8885_11001 = G__11013;
count__8886_11002 = G__11014;
i__8887_11003 = G__11015;
continue;
}
} else
{var arg__7204__auto___11016 = cljs.core.first.call(null,seq__8884_11010__$1);a__7203__auto__.push(arg__7204__auto___11016);
{
var G__11017 = cljs.core.next.call(null,seq__8884_11010__$1);
var G__11018 = null;
var G__11019 = 0;
var G__11020 = 0;
seq__8884_11000 = G__11017;
chunk__8885_11001 = G__11018;
count__8886_11002 = G__11019;
i__8887_11003 = G__11020;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.section.apply(null,a__7203__auto__);
};
var section = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return section__delegate.call(this,args__7202__auto__);};
section.cljs$lang$maxFixedArity = 0;
section.cljs$lang$applyTo = (function (arglist__11021){
var args__7202__auto__ = cljs.core.seq(arglist__11021);
return section__delegate(args__7202__auto__);
});
section.cljs$core$IFn$_invoke$arity$variadic = section__delegate;
return section;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.select = (function() { 
var select__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8892_11022 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8893_11023 = null;var count__8894_11024 = 0;var i__8895_11025 = 0;while(true){
if((i__8895_11025 < count__8894_11024))
{var arg__7204__auto___11026 = cljs.core._nth.call(null,chunk__8893_11023,i__8895_11025);a__7203__auto__.push(arg__7204__auto___11026);
{
var G__11027 = seq__8892_11022;
var G__11028 = chunk__8893_11023;
var G__11029 = count__8894_11024;
var G__11030 = (i__8895_11025 + 1);
seq__8892_11022 = G__11027;
chunk__8893_11023 = G__11028;
count__8894_11024 = G__11029;
i__8895_11025 = G__11030;
continue;
}
} else
{var temp__4092__auto___11031 = cljs.core.seq.call(null,seq__8892_11022);if(temp__4092__auto___11031)
{var seq__8892_11032__$1 = temp__4092__auto___11031;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8892_11032__$1))
{var c__5632__auto___11033 = cljs.core.chunk_first.call(null,seq__8892_11032__$1);{
var G__11034 = cljs.core.chunk_rest.call(null,seq__8892_11032__$1);
var G__11035 = c__5632__auto___11033;
var G__11036 = cljs.core.count.call(null,c__5632__auto___11033);
var G__11037 = 0;
seq__8892_11022 = G__11034;
chunk__8893_11023 = G__11035;
count__8894_11024 = G__11036;
i__8895_11025 = G__11037;
continue;
}
} else
{var arg__7204__auto___11038 = cljs.core.first.call(null,seq__8892_11032__$1);a__7203__auto__.push(arg__7204__auto___11038);
{
var G__11039 = cljs.core.next.call(null,seq__8892_11032__$1);
var G__11040 = null;
var G__11041 = 0;
var G__11042 = 0;
seq__8892_11022 = G__11039;
chunk__8893_11023 = G__11040;
count__8894_11024 = G__11041;
i__8895_11025 = G__11042;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.select.apply(null,a__7203__auto__);
};
var select = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return select__delegate.call(this,args__7202__auto__);};
select.cljs$lang$maxFixedArity = 0;
select.cljs$lang$applyTo = (function (arglist__11043){
var args__7202__auto__ = cljs.core.seq(arglist__11043);
return select__delegate(args__7202__auto__);
});
select.cljs$core$IFn$_invoke$arity$variadic = select__delegate;
return select;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.small = (function() { 
var small__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8900_11044 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8901_11045 = null;var count__8902_11046 = 0;var i__8903_11047 = 0;while(true){
if((i__8903_11047 < count__8902_11046))
{var arg__7204__auto___11048 = cljs.core._nth.call(null,chunk__8901_11045,i__8903_11047);a__7203__auto__.push(arg__7204__auto___11048);
{
var G__11049 = seq__8900_11044;
var G__11050 = chunk__8901_11045;
var G__11051 = count__8902_11046;
var G__11052 = (i__8903_11047 + 1);
seq__8900_11044 = G__11049;
chunk__8901_11045 = G__11050;
count__8902_11046 = G__11051;
i__8903_11047 = G__11052;
continue;
}
} else
{var temp__4092__auto___11053 = cljs.core.seq.call(null,seq__8900_11044);if(temp__4092__auto___11053)
{var seq__8900_11054__$1 = temp__4092__auto___11053;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8900_11054__$1))
{var c__5632__auto___11055 = cljs.core.chunk_first.call(null,seq__8900_11054__$1);{
var G__11056 = cljs.core.chunk_rest.call(null,seq__8900_11054__$1);
var G__11057 = c__5632__auto___11055;
var G__11058 = cljs.core.count.call(null,c__5632__auto___11055);
var G__11059 = 0;
seq__8900_11044 = G__11056;
chunk__8901_11045 = G__11057;
count__8902_11046 = G__11058;
i__8903_11047 = G__11059;
continue;
}
} else
{var arg__7204__auto___11060 = cljs.core.first.call(null,seq__8900_11054__$1);a__7203__auto__.push(arg__7204__auto___11060);
{
var G__11061 = cljs.core.next.call(null,seq__8900_11054__$1);
var G__11062 = null;
var G__11063 = 0;
var G__11064 = 0;
seq__8900_11044 = G__11061;
chunk__8901_11045 = G__11062;
count__8902_11046 = G__11063;
i__8903_11047 = G__11064;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.small.apply(null,a__7203__auto__);
};
var small = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return small__delegate.call(this,args__7202__auto__);};
small.cljs$lang$maxFixedArity = 0;
small.cljs$lang$applyTo = (function (arglist__11065){
var args__7202__auto__ = cljs.core.seq(arglist__11065);
return small__delegate(args__7202__auto__);
});
small.cljs$core$IFn$_invoke$arity$variadic = small__delegate;
return small;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.source = (function() { 
var source__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8908_11066 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8909_11067 = null;var count__8910_11068 = 0;var i__8911_11069 = 0;while(true){
if((i__8911_11069 < count__8910_11068))
{var arg__7204__auto___11070 = cljs.core._nth.call(null,chunk__8909_11067,i__8911_11069);a__7203__auto__.push(arg__7204__auto___11070);
{
var G__11071 = seq__8908_11066;
var G__11072 = chunk__8909_11067;
var G__11073 = count__8910_11068;
var G__11074 = (i__8911_11069 + 1);
seq__8908_11066 = G__11071;
chunk__8909_11067 = G__11072;
count__8910_11068 = G__11073;
i__8911_11069 = G__11074;
continue;
}
} else
{var temp__4092__auto___11075 = cljs.core.seq.call(null,seq__8908_11066);if(temp__4092__auto___11075)
{var seq__8908_11076__$1 = temp__4092__auto___11075;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8908_11076__$1))
{var c__5632__auto___11077 = cljs.core.chunk_first.call(null,seq__8908_11076__$1);{
var G__11078 = cljs.core.chunk_rest.call(null,seq__8908_11076__$1);
var G__11079 = c__5632__auto___11077;
var G__11080 = cljs.core.count.call(null,c__5632__auto___11077);
var G__11081 = 0;
seq__8908_11066 = G__11078;
chunk__8909_11067 = G__11079;
count__8910_11068 = G__11080;
i__8911_11069 = G__11081;
continue;
}
} else
{var arg__7204__auto___11082 = cljs.core.first.call(null,seq__8908_11076__$1);a__7203__auto__.push(arg__7204__auto___11082);
{
var G__11083 = cljs.core.next.call(null,seq__8908_11076__$1);
var G__11084 = null;
var G__11085 = 0;
var G__11086 = 0;
seq__8908_11066 = G__11083;
chunk__8909_11067 = G__11084;
count__8910_11068 = G__11085;
i__8911_11069 = G__11086;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.source.apply(null,a__7203__auto__);
};
var source = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return source__delegate.call(this,args__7202__auto__);};
source.cljs$lang$maxFixedArity = 0;
source.cljs$lang$applyTo = (function (arglist__11087){
var args__7202__auto__ = cljs.core.seq(arglist__11087);
return source__delegate(args__7202__auto__);
});
source.cljs$core$IFn$_invoke$arity$variadic = source__delegate;
return source;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.span = (function() { 
var span__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8916_11088 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8917_11089 = null;var count__8918_11090 = 0;var i__8919_11091 = 0;while(true){
if((i__8919_11091 < count__8918_11090))
{var arg__7204__auto___11092 = cljs.core._nth.call(null,chunk__8917_11089,i__8919_11091);a__7203__auto__.push(arg__7204__auto___11092);
{
var G__11093 = seq__8916_11088;
var G__11094 = chunk__8917_11089;
var G__11095 = count__8918_11090;
var G__11096 = (i__8919_11091 + 1);
seq__8916_11088 = G__11093;
chunk__8917_11089 = G__11094;
count__8918_11090 = G__11095;
i__8919_11091 = G__11096;
continue;
}
} else
{var temp__4092__auto___11097 = cljs.core.seq.call(null,seq__8916_11088);if(temp__4092__auto___11097)
{var seq__8916_11098__$1 = temp__4092__auto___11097;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8916_11098__$1))
{var c__5632__auto___11099 = cljs.core.chunk_first.call(null,seq__8916_11098__$1);{
var G__11100 = cljs.core.chunk_rest.call(null,seq__8916_11098__$1);
var G__11101 = c__5632__auto___11099;
var G__11102 = cljs.core.count.call(null,c__5632__auto___11099);
var G__11103 = 0;
seq__8916_11088 = G__11100;
chunk__8917_11089 = G__11101;
count__8918_11090 = G__11102;
i__8919_11091 = G__11103;
continue;
}
} else
{var arg__7204__auto___11104 = cljs.core.first.call(null,seq__8916_11098__$1);a__7203__auto__.push(arg__7204__auto___11104);
{
var G__11105 = cljs.core.next.call(null,seq__8916_11098__$1);
var G__11106 = null;
var G__11107 = 0;
var G__11108 = 0;
seq__8916_11088 = G__11105;
chunk__8917_11089 = G__11106;
count__8918_11090 = G__11107;
i__8919_11091 = G__11108;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.span.apply(null,a__7203__auto__);
};
var span = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return span__delegate.call(this,args__7202__auto__);};
span.cljs$lang$maxFixedArity = 0;
span.cljs$lang$applyTo = (function (arglist__11109){
var args__7202__auto__ = cljs.core.seq(arglist__11109);
return span__delegate(args__7202__auto__);
});
span.cljs$core$IFn$_invoke$arity$variadic = span__delegate;
return span;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.strong = (function() { 
var strong__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8924_11110 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8925_11111 = null;var count__8926_11112 = 0;var i__8927_11113 = 0;while(true){
if((i__8927_11113 < count__8926_11112))
{var arg__7204__auto___11114 = cljs.core._nth.call(null,chunk__8925_11111,i__8927_11113);a__7203__auto__.push(arg__7204__auto___11114);
{
var G__11115 = seq__8924_11110;
var G__11116 = chunk__8925_11111;
var G__11117 = count__8926_11112;
var G__11118 = (i__8927_11113 + 1);
seq__8924_11110 = G__11115;
chunk__8925_11111 = G__11116;
count__8926_11112 = G__11117;
i__8927_11113 = G__11118;
continue;
}
} else
{var temp__4092__auto___11119 = cljs.core.seq.call(null,seq__8924_11110);if(temp__4092__auto___11119)
{var seq__8924_11120__$1 = temp__4092__auto___11119;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8924_11120__$1))
{var c__5632__auto___11121 = cljs.core.chunk_first.call(null,seq__8924_11120__$1);{
var G__11122 = cljs.core.chunk_rest.call(null,seq__8924_11120__$1);
var G__11123 = c__5632__auto___11121;
var G__11124 = cljs.core.count.call(null,c__5632__auto___11121);
var G__11125 = 0;
seq__8924_11110 = G__11122;
chunk__8925_11111 = G__11123;
count__8926_11112 = G__11124;
i__8927_11113 = G__11125;
continue;
}
} else
{var arg__7204__auto___11126 = cljs.core.first.call(null,seq__8924_11120__$1);a__7203__auto__.push(arg__7204__auto___11126);
{
var G__11127 = cljs.core.next.call(null,seq__8924_11120__$1);
var G__11128 = null;
var G__11129 = 0;
var G__11130 = 0;
seq__8924_11110 = G__11127;
chunk__8925_11111 = G__11128;
count__8926_11112 = G__11129;
i__8927_11113 = G__11130;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.strong.apply(null,a__7203__auto__);
};
var strong = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return strong__delegate.call(this,args__7202__auto__);};
strong.cljs$lang$maxFixedArity = 0;
strong.cljs$lang$applyTo = (function (arglist__11131){
var args__7202__auto__ = cljs.core.seq(arglist__11131);
return strong__delegate(args__7202__auto__);
});
strong.cljs$core$IFn$_invoke$arity$variadic = strong__delegate;
return strong;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.style = (function() { 
var style__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8932_11132 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8933_11133 = null;var count__8934_11134 = 0;var i__8935_11135 = 0;while(true){
if((i__8935_11135 < count__8934_11134))
{var arg__7204__auto___11136 = cljs.core._nth.call(null,chunk__8933_11133,i__8935_11135);a__7203__auto__.push(arg__7204__auto___11136);
{
var G__11137 = seq__8932_11132;
var G__11138 = chunk__8933_11133;
var G__11139 = count__8934_11134;
var G__11140 = (i__8935_11135 + 1);
seq__8932_11132 = G__11137;
chunk__8933_11133 = G__11138;
count__8934_11134 = G__11139;
i__8935_11135 = G__11140;
continue;
}
} else
{var temp__4092__auto___11141 = cljs.core.seq.call(null,seq__8932_11132);if(temp__4092__auto___11141)
{var seq__8932_11142__$1 = temp__4092__auto___11141;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8932_11142__$1))
{var c__5632__auto___11143 = cljs.core.chunk_first.call(null,seq__8932_11142__$1);{
var G__11144 = cljs.core.chunk_rest.call(null,seq__8932_11142__$1);
var G__11145 = c__5632__auto___11143;
var G__11146 = cljs.core.count.call(null,c__5632__auto___11143);
var G__11147 = 0;
seq__8932_11132 = G__11144;
chunk__8933_11133 = G__11145;
count__8934_11134 = G__11146;
i__8935_11135 = G__11147;
continue;
}
} else
{var arg__7204__auto___11148 = cljs.core.first.call(null,seq__8932_11142__$1);a__7203__auto__.push(arg__7204__auto___11148);
{
var G__11149 = cljs.core.next.call(null,seq__8932_11142__$1);
var G__11150 = null;
var G__11151 = 0;
var G__11152 = 0;
seq__8932_11132 = G__11149;
chunk__8933_11133 = G__11150;
count__8934_11134 = G__11151;
i__8935_11135 = G__11152;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.style.apply(null,a__7203__auto__);
};
var style = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return style__delegate.call(this,args__7202__auto__);};
style.cljs$lang$maxFixedArity = 0;
style.cljs$lang$applyTo = (function (arglist__11153){
var args__7202__auto__ = cljs.core.seq(arglist__11153);
return style__delegate(args__7202__auto__);
});
style.cljs$core$IFn$_invoke$arity$variadic = style__delegate;
return style;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.sub = (function() { 
var sub__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8940_11154 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8941_11155 = null;var count__8942_11156 = 0;var i__8943_11157 = 0;while(true){
if((i__8943_11157 < count__8942_11156))
{var arg__7204__auto___11158 = cljs.core._nth.call(null,chunk__8941_11155,i__8943_11157);a__7203__auto__.push(arg__7204__auto___11158);
{
var G__11159 = seq__8940_11154;
var G__11160 = chunk__8941_11155;
var G__11161 = count__8942_11156;
var G__11162 = (i__8943_11157 + 1);
seq__8940_11154 = G__11159;
chunk__8941_11155 = G__11160;
count__8942_11156 = G__11161;
i__8943_11157 = G__11162;
continue;
}
} else
{var temp__4092__auto___11163 = cljs.core.seq.call(null,seq__8940_11154);if(temp__4092__auto___11163)
{var seq__8940_11164__$1 = temp__4092__auto___11163;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8940_11164__$1))
{var c__5632__auto___11165 = cljs.core.chunk_first.call(null,seq__8940_11164__$1);{
var G__11166 = cljs.core.chunk_rest.call(null,seq__8940_11164__$1);
var G__11167 = c__5632__auto___11165;
var G__11168 = cljs.core.count.call(null,c__5632__auto___11165);
var G__11169 = 0;
seq__8940_11154 = G__11166;
chunk__8941_11155 = G__11167;
count__8942_11156 = G__11168;
i__8943_11157 = G__11169;
continue;
}
} else
{var arg__7204__auto___11170 = cljs.core.first.call(null,seq__8940_11164__$1);a__7203__auto__.push(arg__7204__auto___11170);
{
var G__11171 = cljs.core.next.call(null,seq__8940_11164__$1);
var G__11172 = null;
var G__11173 = 0;
var G__11174 = 0;
seq__8940_11154 = G__11171;
chunk__8941_11155 = G__11172;
count__8942_11156 = G__11173;
i__8943_11157 = G__11174;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.sub.apply(null,a__7203__auto__);
};
var sub = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return sub__delegate.call(this,args__7202__auto__);};
sub.cljs$lang$maxFixedArity = 0;
sub.cljs$lang$applyTo = (function (arglist__11175){
var args__7202__auto__ = cljs.core.seq(arglist__11175);
return sub__delegate(args__7202__auto__);
});
sub.cljs$core$IFn$_invoke$arity$variadic = sub__delegate;
return sub;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.summary = (function() { 
var summary__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8948_11176 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8949_11177 = null;var count__8950_11178 = 0;var i__8951_11179 = 0;while(true){
if((i__8951_11179 < count__8950_11178))
{var arg__7204__auto___11180 = cljs.core._nth.call(null,chunk__8949_11177,i__8951_11179);a__7203__auto__.push(arg__7204__auto___11180);
{
var G__11181 = seq__8948_11176;
var G__11182 = chunk__8949_11177;
var G__11183 = count__8950_11178;
var G__11184 = (i__8951_11179 + 1);
seq__8948_11176 = G__11181;
chunk__8949_11177 = G__11182;
count__8950_11178 = G__11183;
i__8951_11179 = G__11184;
continue;
}
} else
{var temp__4092__auto___11185 = cljs.core.seq.call(null,seq__8948_11176);if(temp__4092__auto___11185)
{var seq__8948_11186__$1 = temp__4092__auto___11185;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8948_11186__$1))
{var c__5632__auto___11187 = cljs.core.chunk_first.call(null,seq__8948_11186__$1);{
var G__11188 = cljs.core.chunk_rest.call(null,seq__8948_11186__$1);
var G__11189 = c__5632__auto___11187;
var G__11190 = cljs.core.count.call(null,c__5632__auto___11187);
var G__11191 = 0;
seq__8948_11176 = G__11188;
chunk__8949_11177 = G__11189;
count__8950_11178 = G__11190;
i__8951_11179 = G__11191;
continue;
}
} else
{var arg__7204__auto___11192 = cljs.core.first.call(null,seq__8948_11186__$1);a__7203__auto__.push(arg__7204__auto___11192);
{
var G__11193 = cljs.core.next.call(null,seq__8948_11186__$1);
var G__11194 = null;
var G__11195 = 0;
var G__11196 = 0;
seq__8948_11176 = G__11193;
chunk__8949_11177 = G__11194;
count__8950_11178 = G__11195;
i__8951_11179 = G__11196;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.summary.apply(null,a__7203__auto__);
};
var summary = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return summary__delegate.call(this,args__7202__auto__);};
summary.cljs$lang$maxFixedArity = 0;
summary.cljs$lang$applyTo = (function (arglist__11197){
var args__7202__auto__ = cljs.core.seq(arglist__11197);
return summary__delegate(args__7202__auto__);
});
summary.cljs$core$IFn$_invoke$arity$variadic = summary__delegate;
return summary;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.sup = (function() { 
var sup__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8956_11198 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8957_11199 = null;var count__8958_11200 = 0;var i__8959_11201 = 0;while(true){
if((i__8959_11201 < count__8958_11200))
{var arg__7204__auto___11202 = cljs.core._nth.call(null,chunk__8957_11199,i__8959_11201);a__7203__auto__.push(arg__7204__auto___11202);
{
var G__11203 = seq__8956_11198;
var G__11204 = chunk__8957_11199;
var G__11205 = count__8958_11200;
var G__11206 = (i__8959_11201 + 1);
seq__8956_11198 = G__11203;
chunk__8957_11199 = G__11204;
count__8958_11200 = G__11205;
i__8959_11201 = G__11206;
continue;
}
} else
{var temp__4092__auto___11207 = cljs.core.seq.call(null,seq__8956_11198);if(temp__4092__auto___11207)
{var seq__8956_11208__$1 = temp__4092__auto___11207;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8956_11208__$1))
{var c__5632__auto___11209 = cljs.core.chunk_first.call(null,seq__8956_11208__$1);{
var G__11210 = cljs.core.chunk_rest.call(null,seq__8956_11208__$1);
var G__11211 = c__5632__auto___11209;
var G__11212 = cljs.core.count.call(null,c__5632__auto___11209);
var G__11213 = 0;
seq__8956_11198 = G__11210;
chunk__8957_11199 = G__11211;
count__8958_11200 = G__11212;
i__8959_11201 = G__11213;
continue;
}
} else
{var arg__7204__auto___11214 = cljs.core.first.call(null,seq__8956_11208__$1);a__7203__auto__.push(arg__7204__auto___11214);
{
var G__11215 = cljs.core.next.call(null,seq__8956_11208__$1);
var G__11216 = null;
var G__11217 = 0;
var G__11218 = 0;
seq__8956_11198 = G__11215;
chunk__8957_11199 = G__11216;
count__8958_11200 = G__11217;
i__8959_11201 = G__11218;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.sup.apply(null,a__7203__auto__);
};
var sup = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return sup__delegate.call(this,args__7202__auto__);};
sup.cljs$lang$maxFixedArity = 0;
sup.cljs$lang$applyTo = (function (arglist__11219){
var args__7202__auto__ = cljs.core.seq(arglist__11219);
return sup__delegate(args__7202__auto__);
});
sup.cljs$core$IFn$_invoke$arity$variadic = sup__delegate;
return sup;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.table = (function() { 
var table__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8964_11220 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8965_11221 = null;var count__8966_11222 = 0;var i__8967_11223 = 0;while(true){
if((i__8967_11223 < count__8966_11222))
{var arg__7204__auto___11224 = cljs.core._nth.call(null,chunk__8965_11221,i__8967_11223);a__7203__auto__.push(arg__7204__auto___11224);
{
var G__11225 = seq__8964_11220;
var G__11226 = chunk__8965_11221;
var G__11227 = count__8966_11222;
var G__11228 = (i__8967_11223 + 1);
seq__8964_11220 = G__11225;
chunk__8965_11221 = G__11226;
count__8966_11222 = G__11227;
i__8967_11223 = G__11228;
continue;
}
} else
{var temp__4092__auto___11229 = cljs.core.seq.call(null,seq__8964_11220);if(temp__4092__auto___11229)
{var seq__8964_11230__$1 = temp__4092__auto___11229;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8964_11230__$1))
{var c__5632__auto___11231 = cljs.core.chunk_first.call(null,seq__8964_11230__$1);{
var G__11232 = cljs.core.chunk_rest.call(null,seq__8964_11230__$1);
var G__11233 = c__5632__auto___11231;
var G__11234 = cljs.core.count.call(null,c__5632__auto___11231);
var G__11235 = 0;
seq__8964_11220 = G__11232;
chunk__8965_11221 = G__11233;
count__8966_11222 = G__11234;
i__8967_11223 = G__11235;
continue;
}
} else
{var arg__7204__auto___11236 = cljs.core.first.call(null,seq__8964_11230__$1);a__7203__auto__.push(arg__7204__auto___11236);
{
var G__11237 = cljs.core.next.call(null,seq__8964_11230__$1);
var G__11238 = null;
var G__11239 = 0;
var G__11240 = 0;
seq__8964_11220 = G__11237;
chunk__8965_11221 = G__11238;
count__8966_11222 = G__11239;
i__8967_11223 = G__11240;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.table.apply(null,a__7203__auto__);
};
var table = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return table__delegate.call(this,args__7202__auto__);};
table.cljs$lang$maxFixedArity = 0;
table.cljs$lang$applyTo = (function (arglist__11241){
var args__7202__auto__ = cljs.core.seq(arglist__11241);
return table__delegate(args__7202__auto__);
});
table.cljs$core$IFn$_invoke$arity$variadic = table__delegate;
return table;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.tbody = (function() { 
var tbody__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8972_11242 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8973_11243 = null;var count__8974_11244 = 0;var i__8975_11245 = 0;while(true){
if((i__8975_11245 < count__8974_11244))
{var arg__7204__auto___11246 = cljs.core._nth.call(null,chunk__8973_11243,i__8975_11245);a__7203__auto__.push(arg__7204__auto___11246);
{
var G__11247 = seq__8972_11242;
var G__11248 = chunk__8973_11243;
var G__11249 = count__8974_11244;
var G__11250 = (i__8975_11245 + 1);
seq__8972_11242 = G__11247;
chunk__8973_11243 = G__11248;
count__8974_11244 = G__11249;
i__8975_11245 = G__11250;
continue;
}
} else
{var temp__4092__auto___11251 = cljs.core.seq.call(null,seq__8972_11242);if(temp__4092__auto___11251)
{var seq__8972_11252__$1 = temp__4092__auto___11251;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8972_11252__$1))
{var c__5632__auto___11253 = cljs.core.chunk_first.call(null,seq__8972_11252__$1);{
var G__11254 = cljs.core.chunk_rest.call(null,seq__8972_11252__$1);
var G__11255 = c__5632__auto___11253;
var G__11256 = cljs.core.count.call(null,c__5632__auto___11253);
var G__11257 = 0;
seq__8972_11242 = G__11254;
chunk__8973_11243 = G__11255;
count__8974_11244 = G__11256;
i__8975_11245 = G__11257;
continue;
}
} else
{var arg__7204__auto___11258 = cljs.core.first.call(null,seq__8972_11252__$1);a__7203__auto__.push(arg__7204__auto___11258);
{
var G__11259 = cljs.core.next.call(null,seq__8972_11252__$1);
var G__11260 = null;
var G__11261 = 0;
var G__11262 = 0;
seq__8972_11242 = G__11259;
chunk__8973_11243 = G__11260;
count__8974_11244 = G__11261;
i__8975_11245 = G__11262;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.tbody.apply(null,a__7203__auto__);
};
var tbody = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return tbody__delegate.call(this,args__7202__auto__);};
tbody.cljs$lang$maxFixedArity = 0;
tbody.cljs$lang$applyTo = (function (arglist__11263){
var args__7202__auto__ = cljs.core.seq(arglist__11263);
return tbody__delegate(args__7202__auto__);
});
tbody.cljs$core$IFn$_invoke$arity$variadic = tbody__delegate;
return tbody;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.td = (function() { 
var td__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8980_11264 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8981_11265 = null;var count__8982_11266 = 0;var i__8983_11267 = 0;while(true){
if((i__8983_11267 < count__8982_11266))
{var arg__7204__auto___11268 = cljs.core._nth.call(null,chunk__8981_11265,i__8983_11267);a__7203__auto__.push(arg__7204__auto___11268);
{
var G__11269 = seq__8980_11264;
var G__11270 = chunk__8981_11265;
var G__11271 = count__8982_11266;
var G__11272 = (i__8983_11267 + 1);
seq__8980_11264 = G__11269;
chunk__8981_11265 = G__11270;
count__8982_11266 = G__11271;
i__8983_11267 = G__11272;
continue;
}
} else
{var temp__4092__auto___11273 = cljs.core.seq.call(null,seq__8980_11264);if(temp__4092__auto___11273)
{var seq__8980_11274__$1 = temp__4092__auto___11273;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8980_11274__$1))
{var c__5632__auto___11275 = cljs.core.chunk_first.call(null,seq__8980_11274__$1);{
var G__11276 = cljs.core.chunk_rest.call(null,seq__8980_11274__$1);
var G__11277 = c__5632__auto___11275;
var G__11278 = cljs.core.count.call(null,c__5632__auto___11275);
var G__11279 = 0;
seq__8980_11264 = G__11276;
chunk__8981_11265 = G__11277;
count__8982_11266 = G__11278;
i__8983_11267 = G__11279;
continue;
}
} else
{var arg__7204__auto___11280 = cljs.core.first.call(null,seq__8980_11274__$1);a__7203__auto__.push(arg__7204__auto___11280);
{
var G__11281 = cljs.core.next.call(null,seq__8980_11274__$1);
var G__11282 = null;
var G__11283 = 0;
var G__11284 = 0;
seq__8980_11264 = G__11281;
chunk__8981_11265 = G__11282;
count__8982_11266 = G__11283;
i__8983_11267 = G__11284;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.td.apply(null,a__7203__auto__);
};
var td = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return td__delegate.call(this,args__7202__auto__);};
td.cljs$lang$maxFixedArity = 0;
td.cljs$lang$applyTo = (function (arglist__11285){
var args__7202__auto__ = cljs.core.seq(arglist__11285);
return td__delegate(args__7202__auto__);
});
td.cljs$core$IFn$_invoke$arity$variadic = td__delegate;
return td;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.textarea = (function() { 
var textarea__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8988_11286 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8989_11287 = null;var count__8990_11288 = 0;var i__8991_11289 = 0;while(true){
if((i__8991_11289 < count__8990_11288))
{var arg__7204__auto___11290 = cljs.core._nth.call(null,chunk__8989_11287,i__8991_11289);a__7203__auto__.push(arg__7204__auto___11290);
{
var G__11291 = seq__8988_11286;
var G__11292 = chunk__8989_11287;
var G__11293 = count__8990_11288;
var G__11294 = (i__8991_11289 + 1);
seq__8988_11286 = G__11291;
chunk__8989_11287 = G__11292;
count__8990_11288 = G__11293;
i__8991_11289 = G__11294;
continue;
}
} else
{var temp__4092__auto___11295 = cljs.core.seq.call(null,seq__8988_11286);if(temp__4092__auto___11295)
{var seq__8988_11296__$1 = temp__4092__auto___11295;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8988_11296__$1))
{var c__5632__auto___11297 = cljs.core.chunk_first.call(null,seq__8988_11296__$1);{
var G__11298 = cljs.core.chunk_rest.call(null,seq__8988_11296__$1);
var G__11299 = c__5632__auto___11297;
var G__11300 = cljs.core.count.call(null,c__5632__auto___11297);
var G__11301 = 0;
seq__8988_11286 = G__11298;
chunk__8989_11287 = G__11299;
count__8990_11288 = G__11300;
i__8991_11289 = G__11301;
continue;
}
} else
{var arg__7204__auto___11302 = cljs.core.first.call(null,seq__8988_11296__$1);a__7203__auto__.push(arg__7204__auto___11302);
{
var G__11303 = cljs.core.next.call(null,seq__8988_11296__$1);
var G__11304 = null;
var G__11305 = 0;
var G__11306 = 0;
seq__8988_11286 = G__11303;
chunk__8989_11287 = G__11304;
count__8990_11288 = G__11305;
i__8991_11289 = G__11306;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.textarea.apply(null,a__7203__auto__);
};
var textarea = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return textarea__delegate.call(this,args__7202__auto__);};
textarea.cljs$lang$maxFixedArity = 0;
textarea.cljs$lang$applyTo = (function (arglist__11307){
var args__7202__auto__ = cljs.core.seq(arglist__11307);
return textarea__delegate(args__7202__auto__);
});
textarea.cljs$core$IFn$_invoke$arity$variadic = textarea__delegate;
return textarea;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.tfoot = (function() { 
var tfoot__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8996_11308 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8997_11309 = null;var count__8998_11310 = 0;var i__8999_11311 = 0;while(true){
if((i__8999_11311 < count__8998_11310))
{var arg__7204__auto___11312 = cljs.core._nth.call(null,chunk__8997_11309,i__8999_11311);a__7203__auto__.push(arg__7204__auto___11312);
{
var G__11313 = seq__8996_11308;
var G__11314 = chunk__8997_11309;
var G__11315 = count__8998_11310;
var G__11316 = (i__8999_11311 + 1);
seq__8996_11308 = G__11313;
chunk__8997_11309 = G__11314;
count__8998_11310 = G__11315;
i__8999_11311 = G__11316;
continue;
}
} else
{var temp__4092__auto___11317 = cljs.core.seq.call(null,seq__8996_11308);if(temp__4092__auto___11317)
{var seq__8996_11318__$1 = temp__4092__auto___11317;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8996_11318__$1))
{var c__5632__auto___11319 = cljs.core.chunk_first.call(null,seq__8996_11318__$1);{
var G__11320 = cljs.core.chunk_rest.call(null,seq__8996_11318__$1);
var G__11321 = c__5632__auto___11319;
var G__11322 = cljs.core.count.call(null,c__5632__auto___11319);
var G__11323 = 0;
seq__8996_11308 = G__11320;
chunk__8997_11309 = G__11321;
count__8998_11310 = G__11322;
i__8999_11311 = G__11323;
continue;
}
} else
{var arg__7204__auto___11324 = cljs.core.first.call(null,seq__8996_11318__$1);a__7203__auto__.push(arg__7204__auto___11324);
{
var G__11325 = cljs.core.next.call(null,seq__8996_11318__$1);
var G__11326 = null;
var G__11327 = 0;
var G__11328 = 0;
seq__8996_11308 = G__11325;
chunk__8997_11309 = G__11326;
count__8998_11310 = G__11327;
i__8999_11311 = G__11328;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.tfoot.apply(null,a__7203__auto__);
};
var tfoot = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return tfoot__delegate.call(this,args__7202__auto__);};
tfoot.cljs$lang$maxFixedArity = 0;
tfoot.cljs$lang$applyTo = (function (arglist__11329){
var args__7202__auto__ = cljs.core.seq(arglist__11329);
return tfoot__delegate(args__7202__auto__);
});
tfoot.cljs$core$IFn$_invoke$arity$variadic = tfoot__delegate;
return tfoot;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.th = (function() { 
var th__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__9004_11330 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__9005_11331 = null;var count__9006_11332 = 0;var i__9007_11333 = 0;while(true){
if((i__9007_11333 < count__9006_11332))
{var arg__7204__auto___11334 = cljs.core._nth.call(null,chunk__9005_11331,i__9007_11333);a__7203__auto__.push(arg__7204__auto___11334);
{
var G__11335 = seq__9004_11330;
var G__11336 = chunk__9005_11331;
var G__11337 = count__9006_11332;
var G__11338 = (i__9007_11333 + 1);
seq__9004_11330 = G__11335;
chunk__9005_11331 = G__11336;
count__9006_11332 = G__11337;
i__9007_11333 = G__11338;
continue;
}
} else
{var temp__4092__auto___11339 = cljs.core.seq.call(null,seq__9004_11330);if(temp__4092__auto___11339)
{var seq__9004_11340__$1 = temp__4092__auto___11339;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9004_11340__$1))
{var c__5632__auto___11341 = cljs.core.chunk_first.call(null,seq__9004_11340__$1);{
var G__11342 = cljs.core.chunk_rest.call(null,seq__9004_11340__$1);
var G__11343 = c__5632__auto___11341;
var G__11344 = cljs.core.count.call(null,c__5632__auto___11341);
var G__11345 = 0;
seq__9004_11330 = G__11342;
chunk__9005_11331 = G__11343;
count__9006_11332 = G__11344;
i__9007_11333 = G__11345;
continue;
}
} else
{var arg__7204__auto___11346 = cljs.core.first.call(null,seq__9004_11340__$1);a__7203__auto__.push(arg__7204__auto___11346);
{
var G__11347 = cljs.core.next.call(null,seq__9004_11340__$1);
var G__11348 = null;
var G__11349 = 0;
var G__11350 = 0;
seq__9004_11330 = G__11347;
chunk__9005_11331 = G__11348;
count__9006_11332 = G__11349;
i__9007_11333 = G__11350;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.th.apply(null,a__7203__auto__);
};
var th = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return th__delegate.call(this,args__7202__auto__);};
th.cljs$lang$maxFixedArity = 0;
th.cljs$lang$applyTo = (function (arglist__11351){
var args__7202__auto__ = cljs.core.seq(arglist__11351);
return th__delegate(args__7202__auto__);
});
th.cljs$core$IFn$_invoke$arity$variadic = th__delegate;
return th;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.thead = (function() { 
var thead__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__9012_11352 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__9013_11353 = null;var count__9014_11354 = 0;var i__9015_11355 = 0;while(true){
if((i__9015_11355 < count__9014_11354))
{var arg__7204__auto___11356 = cljs.core._nth.call(null,chunk__9013_11353,i__9015_11355);a__7203__auto__.push(arg__7204__auto___11356);
{
var G__11357 = seq__9012_11352;
var G__11358 = chunk__9013_11353;
var G__11359 = count__9014_11354;
var G__11360 = (i__9015_11355 + 1);
seq__9012_11352 = G__11357;
chunk__9013_11353 = G__11358;
count__9014_11354 = G__11359;
i__9015_11355 = G__11360;
continue;
}
} else
{var temp__4092__auto___11361 = cljs.core.seq.call(null,seq__9012_11352);if(temp__4092__auto___11361)
{var seq__9012_11362__$1 = temp__4092__auto___11361;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9012_11362__$1))
{var c__5632__auto___11363 = cljs.core.chunk_first.call(null,seq__9012_11362__$1);{
var G__11364 = cljs.core.chunk_rest.call(null,seq__9012_11362__$1);
var G__11365 = c__5632__auto___11363;
var G__11366 = cljs.core.count.call(null,c__5632__auto___11363);
var G__11367 = 0;
seq__9012_11352 = G__11364;
chunk__9013_11353 = G__11365;
count__9014_11354 = G__11366;
i__9015_11355 = G__11367;
continue;
}
} else
{var arg__7204__auto___11368 = cljs.core.first.call(null,seq__9012_11362__$1);a__7203__auto__.push(arg__7204__auto___11368);
{
var G__11369 = cljs.core.next.call(null,seq__9012_11362__$1);
var G__11370 = null;
var G__11371 = 0;
var G__11372 = 0;
seq__9012_11352 = G__11369;
chunk__9013_11353 = G__11370;
count__9014_11354 = G__11371;
i__9015_11355 = G__11372;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.thead.apply(null,a__7203__auto__);
};
var thead = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return thead__delegate.call(this,args__7202__auto__);};
thead.cljs$lang$maxFixedArity = 0;
thead.cljs$lang$applyTo = (function (arglist__11373){
var args__7202__auto__ = cljs.core.seq(arglist__11373);
return thead__delegate(args__7202__auto__);
});
thead.cljs$core$IFn$_invoke$arity$variadic = thead__delegate;
return thead;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.time = (function() { 
var time__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__9020_11374 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__9021_11375 = null;var count__9022_11376 = 0;var i__9023_11377 = 0;while(true){
if((i__9023_11377 < count__9022_11376))
{var arg__7204__auto___11378 = cljs.core._nth.call(null,chunk__9021_11375,i__9023_11377);a__7203__auto__.push(arg__7204__auto___11378);
{
var G__11379 = seq__9020_11374;
var G__11380 = chunk__9021_11375;
var G__11381 = count__9022_11376;
var G__11382 = (i__9023_11377 + 1);
seq__9020_11374 = G__11379;
chunk__9021_11375 = G__11380;
count__9022_11376 = G__11381;
i__9023_11377 = G__11382;
continue;
}
} else
{var temp__4092__auto___11383 = cljs.core.seq.call(null,seq__9020_11374);if(temp__4092__auto___11383)
{var seq__9020_11384__$1 = temp__4092__auto___11383;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9020_11384__$1))
{var c__5632__auto___11385 = cljs.core.chunk_first.call(null,seq__9020_11384__$1);{
var G__11386 = cljs.core.chunk_rest.call(null,seq__9020_11384__$1);
var G__11387 = c__5632__auto___11385;
var G__11388 = cljs.core.count.call(null,c__5632__auto___11385);
var G__11389 = 0;
seq__9020_11374 = G__11386;
chunk__9021_11375 = G__11387;
count__9022_11376 = G__11388;
i__9023_11377 = G__11389;
continue;
}
} else
{var arg__7204__auto___11390 = cljs.core.first.call(null,seq__9020_11384__$1);a__7203__auto__.push(arg__7204__auto___11390);
{
var G__11391 = cljs.core.next.call(null,seq__9020_11384__$1);
var G__11392 = null;
var G__11393 = 0;
var G__11394 = 0;
seq__9020_11374 = G__11391;
chunk__9021_11375 = G__11392;
count__9022_11376 = G__11393;
i__9023_11377 = G__11394;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.time.apply(null,a__7203__auto__);
};
var time = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return time__delegate.call(this,args__7202__auto__);};
time.cljs$lang$maxFixedArity = 0;
time.cljs$lang$applyTo = (function (arglist__11395){
var args__7202__auto__ = cljs.core.seq(arglist__11395);
return time__delegate(args__7202__auto__);
});
time.cljs$core$IFn$_invoke$arity$variadic = time__delegate;
return time;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.title = (function() { 
var title__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__9028_11396 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__9029_11397 = null;var count__9030_11398 = 0;var i__9031_11399 = 0;while(true){
if((i__9031_11399 < count__9030_11398))
{var arg__7204__auto___11400 = cljs.core._nth.call(null,chunk__9029_11397,i__9031_11399);a__7203__auto__.push(arg__7204__auto___11400);
{
var G__11401 = seq__9028_11396;
var G__11402 = chunk__9029_11397;
var G__11403 = count__9030_11398;
var G__11404 = (i__9031_11399 + 1);
seq__9028_11396 = G__11401;
chunk__9029_11397 = G__11402;
count__9030_11398 = G__11403;
i__9031_11399 = G__11404;
continue;
}
} else
{var temp__4092__auto___11405 = cljs.core.seq.call(null,seq__9028_11396);if(temp__4092__auto___11405)
{var seq__9028_11406__$1 = temp__4092__auto___11405;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9028_11406__$1))
{var c__5632__auto___11407 = cljs.core.chunk_first.call(null,seq__9028_11406__$1);{
var G__11408 = cljs.core.chunk_rest.call(null,seq__9028_11406__$1);
var G__11409 = c__5632__auto___11407;
var G__11410 = cljs.core.count.call(null,c__5632__auto___11407);
var G__11411 = 0;
seq__9028_11396 = G__11408;
chunk__9029_11397 = G__11409;
count__9030_11398 = G__11410;
i__9031_11399 = G__11411;
continue;
}
} else
{var arg__7204__auto___11412 = cljs.core.first.call(null,seq__9028_11406__$1);a__7203__auto__.push(arg__7204__auto___11412);
{
var G__11413 = cljs.core.next.call(null,seq__9028_11406__$1);
var G__11414 = null;
var G__11415 = 0;
var G__11416 = 0;
seq__9028_11396 = G__11413;
chunk__9029_11397 = G__11414;
count__9030_11398 = G__11415;
i__9031_11399 = G__11416;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.title.apply(null,a__7203__auto__);
};
var title = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return title__delegate.call(this,args__7202__auto__);};
title.cljs$lang$maxFixedArity = 0;
title.cljs$lang$applyTo = (function (arglist__11417){
var args__7202__auto__ = cljs.core.seq(arglist__11417);
return title__delegate(args__7202__auto__);
});
title.cljs$core$IFn$_invoke$arity$variadic = title__delegate;
return title;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.tr = (function() { 
var tr__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__9036_11418 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__9037_11419 = null;var count__9038_11420 = 0;var i__9039_11421 = 0;while(true){
if((i__9039_11421 < count__9038_11420))
{var arg__7204__auto___11422 = cljs.core._nth.call(null,chunk__9037_11419,i__9039_11421);a__7203__auto__.push(arg__7204__auto___11422);
{
var G__11423 = seq__9036_11418;
var G__11424 = chunk__9037_11419;
var G__11425 = count__9038_11420;
var G__11426 = (i__9039_11421 + 1);
seq__9036_11418 = G__11423;
chunk__9037_11419 = G__11424;
count__9038_11420 = G__11425;
i__9039_11421 = G__11426;
continue;
}
} else
{var temp__4092__auto___11427 = cljs.core.seq.call(null,seq__9036_11418);if(temp__4092__auto___11427)
{var seq__9036_11428__$1 = temp__4092__auto___11427;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9036_11428__$1))
{var c__5632__auto___11429 = cljs.core.chunk_first.call(null,seq__9036_11428__$1);{
var G__11430 = cljs.core.chunk_rest.call(null,seq__9036_11428__$1);
var G__11431 = c__5632__auto___11429;
var G__11432 = cljs.core.count.call(null,c__5632__auto___11429);
var G__11433 = 0;
seq__9036_11418 = G__11430;
chunk__9037_11419 = G__11431;
count__9038_11420 = G__11432;
i__9039_11421 = G__11433;
continue;
}
} else
{var arg__7204__auto___11434 = cljs.core.first.call(null,seq__9036_11428__$1);a__7203__auto__.push(arg__7204__auto___11434);
{
var G__11435 = cljs.core.next.call(null,seq__9036_11428__$1);
var G__11436 = null;
var G__11437 = 0;
var G__11438 = 0;
seq__9036_11418 = G__11435;
chunk__9037_11419 = G__11436;
count__9038_11420 = G__11437;
i__9039_11421 = G__11438;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.tr.apply(null,a__7203__auto__);
};
var tr = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return tr__delegate.call(this,args__7202__auto__);};
tr.cljs$lang$maxFixedArity = 0;
tr.cljs$lang$applyTo = (function (arglist__11439){
var args__7202__auto__ = cljs.core.seq(arglist__11439);
return tr__delegate(args__7202__auto__);
});
tr.cljs$core$IFn$_invoke$arity$variadic = tr__delegate;
return tr;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.track = (function() { 
var track__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__9044_11440 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__9045_11441 = null;var count__9046_11442 = 0;var i__9047_11443 = 0;while(true){
if((i__9047_11443 < count__9046_11442))
{var arg__7204__auto___11444 = cljs.core._nth.call(null,chunk__9045_11441,i__9047_11443);a__7203__auto__.push(arg__7204__auto___11444);
{
var G__11445 = seq__9044_11440;
var G__11446 = chunk__9045_11441;
var G__11447 = count__9046_11442;
var G__11448 = (i__9047_11443 + 1);
seq__9044_11440 = G__11445;
chunk__9045_11441 = G__11446;
count__9046_11442 = G__11447;
i__9047_11443 = G__11448;
continue;
}
} else
{var temp__4092__auto___11449 = cljs.core.seq.call(null,seq__9044_11440);if(temp__4092__auto___11449)
{var seq__9044_11450__$1 = temp__4092__auto___11449;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9044_11450__$1))
{var c__5632__auto___11451 = cljs.core.chunk_first.call(null,seq__9044_11450__$1);{
var G__11452 = cljs.core.chunk_rest.call(null,seq__9044_11450__$1);
var G__11453 = c__5632__auto___11451;
var G__11454 = cljs.core.count.call(null,c__5632__auto___11451);
var G__11455 = 0;
seq__9044_11440 = G__11452;
chunk__9045_11441 = G__11453;
count__9046_11442 = G__11454;
i__9047_11443 = G__11455;
continue;
}
} else
{var arg__7204__auto___11456 = cljs.core.first.call(null,seq__9044_11450__$1);a__7203__auto__.push(arg__7204__auto___11456);
{
var G__11457 = cljs.core.next.call(null,seq__9044_11450__$1);
var G__11458 = null;
var G__11459 = 0;
var G__11460 = 0;
seq__9044_11440 = G__11457;
chunk__9045_11441 = G__11458;
count__9046_11442 = G__11459;
i__9047_11443 = G__11460;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.track.apply(null,a__7203__auto__);
};
var track = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return track__delegate.call(this,args__7202__auto__);};
track.cljs$lang$maxFixedArity = 0;
track.cljs$lang$applyTo = (function (arglist__11461){
var args__7202__auto__ = cljs.core.seq(arglist__11461);
return track__delegate(args__7202__auto__);
});
track.cljs$core$IFn$_invoke$arity$variadic = track__delegate;
return track;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.u = (function() { 
var u__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__9052_11462 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__9053_11463 = null;var count__9054_11464 = 0;var i__9055_11465 = 0;while(true){
if((i__9055_11465 < count__9054_11464))
{var arg__7204__auto___11466 = cljs.core._nth.call(null,chunk__9053_11463,i__9055_11465);a__7203__auto__.push(arg__7204__auto___11466);
{
var G__11467 = seq__9052_11462;
var G__11468 = chunk__9053_11463;
var G__11469 = count__9054_11464;
var G__11470 = (i__9055_11465 + 1);
seq__9052_11462 = G__11467;
chunk__9053_11463 = G__11468;
count__9054_11464 = G__11469;
i__9055_11465 = G__11470;
continue;
}
} else
{var temp__4092__auto___11471 = cljs.core.seq.call(null,seq__9052_11462);if(temp__4092__auto___11471)
{var seq__9052_11472__$1 = temp__4092__auto___11471;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9052_11472__$1))
{var c__5632__auto___11473 = cljs.core.chunk_first.call(null,seq__9052_11472__$1);{
var G__11474 = cljs.core.chunk_rest.call(null,seq__9052_11472__$1);
var G__11475 = c__5632__auto___11473;
var G__11476 = cljs.core.count.call(null,c__5632__auto___11473);
var G__11477 = 0;
seq__9052_11462 = G__11474;
chunk__9053_11463 = G__11475;
count__9054_11464 = G__11476;
i__9055_11465 = G__11477;
continue;
}
} else
{var arg__7204__auto___11478 = cljs.core.first.call(null,seq__9052_11472__$1);a__7203__auto__.push(arg__7204__auto___11478);
{
var G__11479 = cljs.core.next.call(null,seq__9052_11472__$1);
var G__11480 = null;
var G__11481 = 0;
var G__11482 = 0;
seq__9052_11462 = G__11479;
chunk__9053_11463 = G__11480;
count__9054_11464 = G__11481;
i__9055_11465 = G__11482;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.u.apply(null,a__7203__auto__);
};
var u = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return u__delegate.call(this,args__7202__auto__);};
u.cljs$lang$maxFixedArity = 0;
u.cljs$lang$applyTo = (function (arglist__11483){
var args__7202__auto__ = cljs.core.seq(arglist__11483);
return u__delegate(args__7202__auto__);
});
u.cljs$core$IFn$_invoke$arity$variadic = u__delegate;
return u;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.ul = (function() { 
var ul__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__9060_11484 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__9061_11485 = null;var count__9062_11486 = 0;var i__9063_11487 = 0;while(true){
if((i__9063_11487 < count__9062_11486))
{var arg__7204__auto___11488 = cljs.core._nth.call(null,chunk__9061_11485,i__9063_11487);a__7203__auto__.push(arg__7204__auto___11488);
{
var G__11489 = seq__9060_11484;
var G__11490 = chunk__9061_11485;
var G__11491 = count__9062_11486;
var G__11492 = (i__9063_11487 + 1);
seq__9060_11484 = G__11489;
chunk__9061_11485 = G__11490;
count__9062_11486 = G__11491;
i__9063_11487 = G__11492;
continue;
}
} else
{var temp__4092__auto___11493 = cljs.core.seq.call(null,seq__9060_11484);if(temp__4092__auto___11493)
{var seq__9060_11494__$1 = temp__4092__auto___11493;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9060_11494__$1))
{var c__5632__auto___11495 = cljs.core.chunk_first.call(null,seq__9060_11494__$1);{
var G__11496 = cljs.core.chunk_rest.call(null,seq__9060_11494__$1);
var G__11497 = c__5632__auto___11495;
var G__11498 = cljs.core.count.call(null,c__5632__auto___11495);
var G__11499 = 0;
seq__9060_11484 = G__11496;
chunk__9061_11485 = G__11497;
count__9062_11486 = G__11498;
i__9063_11487 = G__11499;
continue;
}
} else
{var arg__7204__auto___11500 = cljs.core.first.call(null,seq__9060_11494__$1);a__7203__auto__.push(arg__7204__auto___11500);
{
var G__11501 = cljs.core.next.call(null,seq__9060_11494__$1);
var G__11502 = null;
var G__11503 = 0;
var G__11504 = 0;
seq__9060_11484 = G__11501;
chunk__9061_11485 = G__11502;
count__9062_11486 = G__11503;
i__9063_11487 = G__11504;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.ul.apply(null,a__7203__auto__);
};
var ul = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ul__delegate.call(this,args__7202__auto__);};
ul.cljs$lang$maxFixedArity = 0;
ul.cljs$lang$applyTo = (function (arglist__11505){
var args__7202__auto__ = cljs.core.seq(arglist__11505);
return ul__delegate(args__7202__auto__);
});
ul.cljs$core$IFn$_invoke$arity$variadic = ul__delegate;
return ul;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.var$ = (function() { 
var var$__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__9068_11506 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__9069_11507 = null;var count__9070_11508 = 0;var i__9071_11509 = 0;while(true){
if((i__9071_11509 < count__9070_11508))
{var arg__7204__auto___11510 = cljs.core._nth.call(null,chunk__9069_11507,i__9071_11509);a__7203__auto__.push(arg__7204__auto___11510);
{
var G__11511 = seq__9068_11506;
var G__11512 = chunk__9069_11507;
var G__11513 = count__9070_11508;
var G__11514 = (i__9071_11509 + 1);
seq__9068_11506 = G__11511;
chunk__9069_11507 = G__11512;
count__9070_11508 = G__11513;
i__9071_11509 = G__11514;
continue;
}
} else
{var temp__4092__auto___11515 = cljs.core.seq.call(null,seq__9068_11506);if(temp__4092__auto___11515)
{var seq__9068_11516__$1 = temp__4092__auto___11515;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9068_11516__$1))
{var c__5632__auto___11517 = cljs.core.chunk_first.call(null,seq__9068_11516__$1);{
var G__11518 = cljs.core.chunk_rest.call(null,seq__9068_11516__$1);
var G__11519 = c__5632__auto___11517;
var G__11520 = cljs.core.count.call(null,c__5632__auto___11517);
var G__11521 = 0;
seq__9068_11506 = G__11518;
chunk__9069_11507 = G__11519;
count__9070_11508 = G__11520;
i__9071_11509 = G__11521;
continue;
}
} else
{var arg__7204__auto___11522 = cljs.core.first.call(null,seq__9068_11516__$1);a__7203__auto__.push(arg__7204__auto___11522);
{
var G__11523 = cljs.core.next.call(null,seq__9068_11516__$1);
var G__11524 = null;
var G__11525 = 0;
var G__11526 = 0;
seq__9068_11506 = G__11523;
chunk__9069_11507 = G__11524;
count__9070_11508 = G__11525;
i__9071_11509 = G__11526;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.var$.apply(null,a__7203__auto__);
};
var var$ = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return var$__delegate.call(this,args__7202__auto__);};
var$.cljs$lang$maxFixedArity = 0;
var$.cljs$lang$applyTo = (function (arglist__11527){
var args__7202__auto__ = cljs.core.seq(arglist__11527);
return var$__delegate(args__7202__auto__);
});
var$.cljs$core$IFn$_invoke$arity$variadic = var$__delegate;
return var$;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.video = (function() { 
var video__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__9076_11528 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__9077_11529 = null;var count__9078_11530 = 0;var i__9079_11531 = 0;while(true){
if((i__9079_11531 < count__9078_11530))
{var arg__7204__auto___11532 = cljs.core._nth.call(null,chunk__9077_11529,i__9079_11531);a__7203__auto__.push(arg__7204__auto___11532);
{
var G__11533 = seq__9076_11528;
var G__11534 = chunk__9077_11529;
var G__11535 = count__9078_11530;
var G__11536 = (i__9079_11531 + 1);
seq__9076_11528 = G__11533;
chunk__9077_11529 = G__11534;
count__9078_11530 = G__11535;
i__9079_11531 = G__11536;
continue;
}
} else
{var temp__4092__auto___11537 = cljs.core.seq.call(null,seq__9076_11528);if(temp__4092__auto___11537)
{var seq__9076_11538__$1 = temp__4092__auto___11537;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9076_11538__$1))
{var c__5632__auto___11539 = cljs.core.chunk_first.call(null,seq__9076_11538__$1);{
var G__11540 = cljs.core.chunk_rest.call(null,seq__9076_11538__$1);
var G__11541 = c__5632__auto___11539;
var G__11542 = cljs.core.count.call(null,c__5632__auto___11539);
var G__11543 = 0;
seq__9076_11528 = G__11540;
chunk__9077_11529 = G__11541;
count__9078_11530 = G__11542;
i__9079_11531 = G__11543;
continue;
}
} else
{var arg__7204__auto___11544 = cljs.core.first.call(null,seq__9076_11538__$1);a__7203__auto__.push(arg__7204__auto___11544);
{
var G__11545 = cljs.core.next.call(null,seq__9076_11538__$1);
var G__11546 = null;
var G__11547 = 0;
var G__11548 = 0;
seq__9076_11528 = G__11545;
chunk__9077_11529 = G__11546;
count__9078_11530 = G__11547;
i__9079_11531 = G__11548;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.video.apply(null,a__7203__auto__);
};
var video = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return video__delegate.call(this,args__7202__auto__);};
video.cljs$lang$maxFixedArity = 0;
video.cljs$lang$applyTo = (function (arglist__11549){
var args__7202__auto__ = cljs.core.seq(arglist__11549);
return video__delegate(args__7202__auto__);
});
video.cljs$core$IFn$_invoke$arity$variadic = video__delegate;
return video;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.wbr = (function() { 
var wbr__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__9084_11550 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__9085_11551 = null;var count__9086_11552 = 0;var i__9087_11553 = 0;while(true){
if((i__9087_11553 < count__9086_11552))
{var arg__7204__auto___11554 = cljs.core._nth.call(null,chunk__9085_11551,i__9087_11553);a__7203__auto__.push(arg__7204__auto___11554);
{
var G__11555 = seq__9084_11550;
var G__11556 = chunk__9085_11551;
var G__11557 = count__9086_11552;
var G__11558 = (i__9087_11553 + 1);
seq__9084_11550 = G__11555;
chunk__9085_11551 = G__11556;
count__9086_11552 = G__11557;
i__9087_11553 = G__11558;
continue;
}
} else
{var temp__4092__auto___11559 = cljs.core.seq.call(null,seq__9084_11550);if(temp__4092__auto___11559)
{var seq__9084_11560__$1 = temp__4092__auto___11559;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9084_11560__$1))
{var c__5632__auto___11561 = cljs.core.chunk_first.call(null,seq__9084_11560__$1);{
var G__11562 = cljs.core.chunk_rest.call(null,seq__9084_11560__$1);
var G__11563 = c__5632__auto___11561;
var G__11564 = cljs.core.count.call(null,c__5632__auto___11561);
var G__11565 = 0;
seq__9084_11550 = G__11562;
chunk__9085_11551 = G__11563;
count__9086_11552 = G__11564;
i__9087_11553 = G__11565;
continue;
}
} else
{var arg__7204__auto___11566 = cljs.core.first.call(null,seq__9084_11560__$1);a__7203__auto__.push(arg__7204__auto___11566);
{
var G__11567 = cljs.core.next.call(null,seq__9084_11560__$1);
var G__11568 = null;
var G__11569 = 0;
var G__11570 = 0;
seq__9084_11550 = G__11567;
chunk__9085_11551 = G__11568;
count__9086_11552 = G__11569;
i__9087_11553 = G__11570;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.wbr.apply(null,a__7203__auto__);
};
var wbr = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return wbr__delegate.call(this,args__7202__auto__);};
wbr.cljs$lang$maxFixedArity = 0;
wbr.cljs$lang$applyTo = (function (arglist__11571){
var args__7202__auto__ = cljs.core.seq(arglist__11571);
return wbr__delegate(args__7202__auto__);
});
wbr.cljs$core$IFn$_invoke$arity$variadic = wbr__delegate;
return wbr;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.circle = (function() { 
var circle__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__9092_11572 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__9093_11573 = null;var count__9094_11574 = 0;var i__9095_11575 = 0;while(true){
if((i__9095_11575 < count__9094_11574))
{var arg__7204__auto___11576 = cljs.core._nth.call(null,chunk__9093_11573,i__9095_11575);a__7203__auto__.push(arg__7204__auto___11576);
{
var G__11577 = seq__9092_11572;
var G__11578 = chunk__9093_11573;
var G__11579 = count__9094_11574;
var G__11580 = (i__9095_11575 + 1);
seq__9092_11572 = G__11577;
chunk__9093_11573 = G__11578;
count__9094_11574 = G__11579;
i__9095_11575 = G__11580;
continue;
}
} else
{var temp__4092__auto___11581 = cljs.core.seq.call(null,seq__9092_11572);if(temp__4092__auto___11581)
{var seq__9092_11582__$1 = temp__4092__auto___11581;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9092_11582__$1))
{var c__5632__auto___11583 = cljs.core.chunk_first.call(null,seq__9092_11582__$1);{
var G__11584 = cljs.core.chunk_rest.call(null,seq__9092_11582__$1);
var G__11585 = c__5632__auto___11583;
var G__11586 = cljs.core.count.call(null,c__5632__auto___11583);
var G__11587 = 0;
seq__9092_11572 = G__11584;
chunk__9093_11573 = G__11585;
count__9094_11574 = G__11586;
i__9095_11575 = G__11587;
continue;
}
} else
{var arg__7204__auto___11588 = cljs.core.first.call(null,seq__9092_11582__$1);a__7203__auto__.push(arg__7204__auto___11588);
{
var G__11589 = cljs.core.next.call(null,seq__9092_11582__$1);
var G__11590 = null;
var G__11591 = 0;
var G__11592 = 0;
seq__9092_11572 = G__11589;
chunk__9093_11573 = G__11590;
count__9094_11574 = G__11591;
i__9095_11575 = G__11592;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.circle.apply(null,a__7203__auto__);
};
var circle = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return circle__delegate.call(this,args__7202__auto__);};
circle.cljs$lang$maxFixedArity = 0;
circle.cljs$lang$applyTo = (function (arglist__11593){
var args__7202__auto__ = cljs.core.seq(arglist__11593);
return circle__delegate(args__7202__auto__);
});
circle.cljs$core$IFn$_invoke$arity$variadic = circle__delegate;
return circle;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.g = (function() { 
var g__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__9100_11594 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__9101_11595 = null;var count__9102_11596 = 0;var i__9103_11597 = 0;while(true){
if((i__9103_11597 < count__9102_11596))
{var arg__7204__auto___11598 = cljs.core._nth.call(null,chunk__9101_11595,i__9103_11597);a__7203__auto__.push(arg__7204__auto___11598);
{
var G__11599 = seq__9100_11594;
var G__11600 = chunk__9101_11595;
var G__11601 = count__9102_11596;
var G__11602 = (i__9103_11597 + 1);
seq__9100_11594 = G__11599;
chunk__9101_11595 = G__11600;
count__9102_11596 = G__11601;
i__9103_11597 = G__11602;
continue;
}
} else
{var temp__4092__auto___11603 = cljs.core.seq.call(null,seq__9100_11594);if(temp__4092__auto___11603)
{var seq__9100_11604__$1 = temp__4092__auto___11603;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9100_11604__$1))
{var c__5632__auto___11605 = cljs.core.chunk_first.call(null,seq__9100_11604__$1);{
var G__11606 = cljs.core.chunk_rest.call(null,seq__9100_11604__$1);
var G__11607 = c__5632__auto___11605;
var G__11608 = cljs.core.count.call(null,c__5632__auto___11605);
var G__11609 = 0;
seq__9100_11594 = G__11606;
chunk__9101_11595 = G__11607;
count__9102_11596 = G__11608;
i__9103_11597 = G__11609;
continue;
}
} else
{var arg__7204__auto___11610 = cljs.core.first.call(null,seq__9100_11604__$1);a__7203__auto__.push(arg__7204__auto___11610);
{
var G__11611 = cljs.core.next.call(null,seq__9100_11604__$1);
var G__11612 = null;
var G__11613 = 0;
var G__11614 = 0;
seq__9100_11594 = G__11611;
chunk__9101_11595 = G__11612;
count__9102_11596 = G__11613;
i__9103_11597 = G__11614;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.g.apply(null,a__7203__auto__);
};
var g = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return g__delegate.call(this,args__7202__auto__);};
g.cljs$lang$maxFixedArity = 0;
g.cljs$lang$applyTo = (function (arglist__11615){
var args__7202__auto__ = cljs.core.seq(arglist__11615);
return g__delegate(args__7202__auto__);
});
g.cljs$core$IFn$_invoke$arity$variadic = g__delegate;
return g;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.line = (function() { 
var line__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__9108_11616 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__9109_11617 = null;var count__9110_11618 = 0;var i__9111_11619 = 0;while(true){
if((i__9111_11619 < count__9110_11618))
{var arg__7204__auto___11620 = cljs.core._nth.call(null,chunk__9109_11617,i__9111_11619);a__7203__auto__.push(arg__7204__auto___11620);
{
var G__11621 = seq__9108_11616;
var G__11622 = chunk__9109_11617;
var G__11623 = count__9110_11618;
var G__11624 = (i__9111_11619 + 1);
seq__9108_11616 = G__11621;
chunk__9109_11617 = G__11622;
count__9110_11618 = G__11623;
i__9111_11619 = G__11624;
continue;
}
} else
{var temp__4092__auto___11625 = cljs.core.seq.call(null,seq__9108_11616);if(temp__4092__auto___11625)
{var seq__9108_11626__$1 = temp__4092__auto___11625;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9108_11626__$1))
{var c__5632__auto___11627 = cljs.core.chunk_first.call(null,seq__9108_11626__$1);{
var G__11628 = cljs.core.chunk_rest.call(null,seq__9108_11626__$1);
var G__11629 = c__5632__auto___11627;
var G__11630 = cljs.core.count.call(null,c__5632__auto___11627);
var G__11631 = 0;
seq__9108_11616 = G__11628;
chunk__9109_11617 = G__11629;
count__9110_11618 = G__11630;
i__9111_11619 = G__11631;
continue;
}
} else
{var arg__7204__auto___11632 = cljs.core.first.call(null,seq__9108_11626__$1);a__7203__auto__.push(arg__7204__auto___11632);
{
var G__11633 = cljs.core.next.call(null,seq__9108_11626__$1);
var G__11634 = null;
var G__11635 = 0;
var G__11636 = 0;
seq__9108_11616 = G__11633;
chunk__9109_11617 = G__11634;
count__9110_11618 = G__11635;
i__9111_11619 = G__11636;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.line.apply(null,a__7203__auto__);
};
var line = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return line__delegate.call(this,args__7202__auto__);};
line.cljs$lang$maxFixedArity = 0;
line.cljs$lang$applyTo = (function (arglist__11637){
var args__7202__auto__ = cljs.core.seq(arglist__11637);
return line__delegate(args__7202__auto__);
});
line.cljs$core$IFn$_invoke$arity$variadic = line__delegate;
return line;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.path = (function() { 
var path__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__9116_11638 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__9117_11639 = null;var count__9118_11640 = 0;var i__9119_11641 = 0;while(true){
if((i__9119_11641 < count__9118_11640))
{var arg__7204__auto___11642 = cljs.core._nth.call(null,chunk__9117_11639,i__9119_11641);a__7203__auto__.push(arg__7204__auto___11642);
{
var G__11643 = seq__9116_11638;
var G__11644 = chunk__9117_11639;
var G__11645 = count__9118_11640;
var G__11646 = (i__9119_11641 + 1);
seq__9116_11638 = G__11643;
chunk__9117_11639 = G__11644;
count__9118_11640 = G__11645;
i__9119_11641 = G__11646;
continue;
}
} else
{var temp__4092__auto___11647 = cljs.core.seq.call(null,seq__9116_11638);if(temp__4092__auto___11647)
{var seq__9116_11648__$1 = temp__4092__auto___11647;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9116_11648__$1))
{var c__5632__auto___11649 = cljs.core.chunk_first.call(null,seq__9116_11648__$1);{
var G__11650 = cljs.core.chunk_rest.call(null,seq__9116_11648__$1);
var G__11651 = c__5632__auto___11649;
var G__11652 = cljs.core.count.call(null,c__5632__auto___11649);
var G__11653 = 0;
seq__9116_11638 = G__11650;
chunk__9117_11639 = G__11651;
count__9118_11640 = G__11652;
i__9119_11641 = G__11653;
continue;
}
} else
{var arg__7204__auto___11654 = cljs.core.first.call(null,seq__9116_11648__$1);a__7203__auto__.push(arg__7204__auto___11654);
{
var G__11655 = cljs.core.next.call(null,seq__9116_11648__$1);
var G__11656 = null;
var G__11657 = 0;
var G__11658 = 0;
seq__9116_11638 = G__11655;
chunk__9117_11639 = G__11656;
count__9118_11640 = G__11657;
i__9119_11641 = G__11658;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.path.apply(null,a__7203__auto__);
};
var path = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return path__delegate.call(this,args__7202__auto__);};
path.cljs$lang$maxFixedArity = 0;
path.cljs$lang$applyTo = (function (arglist__11659){
var args__7202__auto__ = cljs.core.seq(arglist__11659);
return path__delegate(args__7202__auto__);
});
path.cljs$core$IFn$_invoke$arity$variadic = path__delegate;
return path;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.polygon = (function() { 
var polygon__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__9124_11660 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__9125_11661 = null;var count__9126_11662 = 0;var i__9127_11663 = 0;while(true){
if((i__9127_11663 < count__9126_11662))
{var arg__7204__auto___11664 = cljs.core._nth.call(null,chunk__9125_11661,i__9127_11663);a__7203__auto__.push(arg__7204__auto___11664);
{
var G__11665 = seq__9124_11660;
var G__11666 = chunk__9125_11661;
var G__11667 = count__9126_11662;
var G__11668 = (i__9127_11663 + 1);
seq__9124_11660 = G__11665;
chunk__9125_11661 = G__11666;
count__9126_11662 = G__11667;
i__9127_11663 = G__11668;
continue;
}
} else
{var temp__4092__auto___11669 = cljs.core.seq.call(null,seq__9124_11660);if(temp__4092__auto___11669)
{var seq__9124_11670__$1 = temp__4092__auto___11669;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9124_11670__$1))
{var c__5632__auto___11671 = cljs.core.chunk_first.call(null,seq__9124_11670__$1);{
var G__11672 = cljs.core.chunk_rest.call(null,seq__9124_11670__$1);
var G__11673 = c__5632__auto___11671;
var G__11674 = cljs.core.count.call(null,c__5632__auto___11671);
var G__11675 = 0;
seq__9124_11660 = G__11672;
chunk__9125_11661 = G__11673;
count__9126_11662 = G__11674;
i__9127_11663 = G__11675;
continue;
}
} else
{var arg__7204__auto___11676 = cljs.core.first.call(null,seq__9124_11670__$1);a__7203__auto__.push(arg__7204__auto___11676);
{
var G__11677 = cljs.core.next.call(null,seq__9124_11670__$1);
var G__11678 = null;
var G__11679 = 0;
var G__11680 = 0;
seq__9124_11660 = G__11677;
chunk__9125_11661 = G__11678;
count__9126_11662 = G__11679;
i__9127_11663 = G__11680;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.polygon.apply(null,a__7203__auto__);
};
var polygon = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return polygon__delegate.call(this,args__7202__auto__);};
polygon.cljs$lang$maxFixedArity = 0;
polygon.cljs$lang$applyTo = (function (arglist__11681){
var args__7202__auto__ = cljs.core.seq(arglist__11681);
return polygon__delegate(args__7202__auto__);
});
polygon.cljs$core$IFn$_invoke$arity$variadic = polygon__delegate;
return polygon;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.polyline = (function() { 
var polyline__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__9132_11682 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__9133_11683 = null;var count__9134_11684 = 0;var i__9135_11685 = 0;while(true){
if((i__9135_11685 < count__9134_11684))
{var arg__7204__auto___11686 = cljs.core._nth.call(null,chunk__9133_11683,i__9135_11685);a__7203__auto__.push(arg__7204__auto___11686);
{
var G__11687 = seq__9132_11682;
var G__11688 = chunk__9133_11683;
var G__11689 = count__9134_11684;
var G__11690 = (i__9135_11685 + 1);
seq__9132_11682 = G__11687;
chunk__9133_11683 = G__11688;
count__9134_11684 = G__11689;
i__9135_11685 = G__11690;
continue;
}
} else
{var temp__4092__auto___11691 = cljs.core.seq.call(null,seq__9132_11682);if(temp__4092__auto___11691)
{var seq__9132_11692__$1 = temp__4092__auto___11691;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9132_11692__$1))
{var c__5632__auto___11693 = cljs.core.chunk_first.call(null,seq__9132_11692__$1);{
var G__11694 = cljs.core.chunk_rest.call(null,seq__9132_11692__$1);
var G__11695 = c__5632__auto___11693;
var G__11696 = cljs.core.count.call(null,c__5632__auto___11693);
var G__11697 = 0;
seq__9132_11682 = G__11694;
chunk__9133_11683 = G__11695;
count__9134_11684 = G__11696;
i__9135_11685 = G__11697;
continue;
}
} else
{var arg__7204__auto___11698 = cljs.core.first.call(null,seq__9132_11692__$1);a__7203__auto__.push(arg__7204__auto___11698);
{
var G__11699 = cljs.core.next.call(null,seq__9132_11692__$1);
var G__11700 = null;
var G__11701 = 0;
var G__11702 = 0;
seq__9132_11682 = G__11699;
chunk__9133_11683 = G__11700;
count__9134_11684 = G__11701;
i__9135_11685 = G__11702;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.polyline.apply(null,a__7203__auto__);
};
var polyline = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return polyline__delegate.call(this,args__7202__auto__);};
polyline.cljs$lang$maxFixedArity = 0;
polyline.cljs$lang$applyTo = (function (arglist__11703){
var args__7202__auto__ = cljs.core.seq(arglist__11703);
return polyline__delegate(args__7202__auto__);
});
polyline.cljs$core$IFn$_invoke$arity$variadic = polyline__delegate;
return polyline;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.rect = (function() { 
var rect__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__9140_11704 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__9141_11705 = null;var count__9142_11706 = 0;var i__9143_11707 = 0;while(true){
if((i__9143_11707 < count__9142_11706))
{var arg__7204__auto___11708 = cljs.core._nth.call(null,chunk__9141_11705,i__9143_11707);a__7203__auto__.push(arg__7204__auto___11708);
{
var G__11709 = seq__9140_11704;
var G__11710 = chunk__9141_11705;
var G__11711 = count__9142_11706;
var G__11712 = (i__9143_11707 + 1);
seq__9140_11704 = G__11709;
chunk__9141_11705 = G__11710;
count__9142_11706 = G__11711;
i__9143_11707 = G__11712;
continue;
}
} else
{var temp__4092__auto___11713 = cljs.core.seq.call(null,seq__9140_11704);if(temp__4092__auto___11713)
{var seq__9140_11714__$1 = temp__4092__auto___11713;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9140_11714__$1))
{var c__5632__auto___11715 = cljs.core.chunk_first.call(null,seq__9140_11714__$1);{
var G__11716 = cljs.core.chunk_rest.call(null,seq__9140_11714__$1);
var G__11717 = c__5632__auto___11715;
var G__11718 = cljs.core.count.call(null,c__5632__auto___11715);
var G__11719 = 0;
seq__9140_11704 = G__11716;
chunk__9141_11705 = G__11717;
count__9142_11706 = G__11718;
i__9143_11707 = G__11719;
continue;
}
} else
{var arg__7204__auto___11720 = cljs.core.first.call(null,seq__9140_11714__$1);a__7203__auto__.push(arg__7204__auto___11720);
{
var G__11721 = cljs.core.next.call(null,seq__9140_11714__$1);
var G__11722 = null;
var G__11723 = 0;
var G__11724 = 0;
seq__9140_11704 = G__11721;
chunk__9141_11705 = G__11722;
count__9142_11706 = G__11723;
i__9143_11707 = G__11724;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.rect.apply(null,a__7203__auto__);
};
var rect = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return rect__delegate.call(this,args__7202__auto__);};
rect.cljs$lang$maxFixedArity = 0;
rect.cljs$lang$applyTo = (function (arglist__11725){
var args__7202__auto__ = cljs.core.seq(arglist__11725);
return rect__delegate(args__7202__auto__);
});
rect.cljs$core$IFn$_invoke$arity$variadic = rect__delegate;
return rect;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.svg = (function() { 
var svg__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__9148_11726 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__9149_11727 = null;var count__9150_11728 = 0;var i__9151_11729 = 0;while(true){
if((i__9151_11729 < count__9150_11728))
{var arg__7204__auto___11730 = cljs.core._nth.call(null,chunk__9149_11727,i__9151_11729);a__7203__auto__.push(arg__7204__auto___11730);
{
var G__11731 = seq__9148_11726;
var G__11732 = chunk__9149_11727;
var G__11733 = count__9150_11728;
var G__11734 = (i__9151_11729 + 1);
seq__9148_11726 = G__11731;
chunk__9149_11727 = G__11732;
count__9150_11728 = G__11733;
i__9151_11729 = G__11734;
continue;
}
} else
{var temp__4092__auto___11735 = cljs.core.seq.call(null,seq__9148_11726);if(temp__4092__auto___11735)
{var seq__9148_11736__$1 = temp__4092__auto___11735;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9148_11736__$1))
{var c__5632__auto___11737 = cljs.core.chunk_first.call(null,seq__9148_11736__$1);{
var G__11738 = cljs.core.chunk_rest.call(null,seq__9148_11736__$1);
var G__11739 = c__5632__auto___11737;
var G__11740 = cljs.core.count.call(null,c__5632__auto___11737);
var G__11741 = 0;
seq__9148_11726 = G__11738;
chunk__9149_11727 = G__11739;
count__9150_11728 = G__11740;
i__9151_11729 = G__11741;
continue;
}
} else
{var arg__7204__auto___11742 = cljs.core.first.call(null,seq__9148_11736__$1);a__7203__auto__.push(arg__7204__auto___11742);
{
var G__11743 = cljs.core.next.call(null,seq__9148_11736__$1);
var G__11744 = null;
var G__11745 = 0;
var G__11746 = 0;
seq__9148_11726 = G__11743;
chunk__9149_11727 = G__11744;
count__9150_11728 = G__11745;
i__9151_11729 = G__11746;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.svg.apply(null,a__7203__auto__);
};
var svg = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return svg__delegate.call(this,args__7202__auto__);};
svg.cljs$lang$maxFixedArity = 0;
svg.cljs$lang$applyTo = (function (arglist__11747){
var args__7202__auto__ = cljs.core.seq(arglist__11747);
return svg__delegate(args__7202__auto__);
});
svg.cljs$core$IFn$_invoke$arity$variadic = svg__delegate;
return svg;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.text = (function() { 
var text__delegate = function (args__7202__auto__){var a__7203__auto__ = [];a__7203__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7202__auto__)));
var seq__8460_11748 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7202__auto__));var chunk__8461_11749 = null;var count__8462_11750 = 0;var i__8463_11751 = 0;while(true){
if((i__8463_11751 < count__8462_11750))
{var arg__7204__auto___11752 = cljs.core._nth.call(null,chunk__8461_11749,i__8463_11751);a__7203__auto__.push(arg__7204__auto___11752);
{
var G__11753 = seq__8460_11748;
var G__11754 = chunk__8461_11749;
var G__11755 = count__8462_11750;
var G__11756 = (i__8463_11751 + 1);
seq__8460_11748 = G__11753;
chunk__8461_11749 = G__11754;
count__8462_11750 = G__11755;
i__8463_11751 = G__11756;
continue;
}
} else
{var temp__4092__auto___11757 = cljs.core.seq.call(null,seq__8460_11748);if(temp__4092__auto___11757)
{var seq__8460_11758__$1 = temp__4092__auto___11757;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8460_11758__$1))
{var c__5632__auto___11759 = cljs.core.chunk_first.call(null,seq__8460_11758__$1);{
var G__11760 = cljs.core.chunk_rest.call(null,seq__8460_11758__$1);
var G__11761 = c__5632__auto___11759;
var G__11762 = cljs.core.count.call(null,c__5632__auto___11759);
var G__11763 = 0;
seq__8460_11748 = G__11760;
chunk__8461_11749 = G__11761;
count__8462_11750 = G__11762;
i__8463_11751 = G__11763;
continue;
}
} else
{var arg__7204__auto___11764 = cljs.core.first.call(null,seq__8460_11758__$1);a__7203__auto__.push(arg__7204__auto___11764);
{
var G__11765 = cljs.core.next.call(null,seq__8460_11758__$1);
var G__11766 = null;
var G__11767 = 0;
var G__11768 = 0;
seq__8460_11748 = G__11765;
chunk__8461_11749 = G__11766;
count__8462_11750 = G__11767;
i__8463_11751 = G__11768;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.text.apply(null,a__7203__auto__);
};
var text = function (var_args){
var args__7202__auto__ = null;if (arguments.length > 0) {
  args__7202__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return text__delegate.call(this,args__7202__auto__);};
text.cljs$lang$maxFixedArity = 0;
text.cljs$lang$applyTo = (function (arglist__11769){
var args__7202__auto__ = cljs.core.seq(arglist__11769);
return text__delegate(args__7202__auto__);
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
lt.plugins.elm_light.autocompleter.handle_keypress = (function handle_keypress(p__8178,ev){var map__8181 = p__8178;var map__8181__$1 = ((cljs.core.seq_QMARK_.call(null,map__8181))?cljs.core.apply.call(null,cljs.core.hash_map,map__8181):map__8181);var props = map__8181__$1;var on_cancel = cljs.core.get.call(null,map__8181__$1,new cljs.core.Keyword(null,"on-cancel","on-cancel",600765850));var on_select = cljs.core.get.call(null,map__8181__$1,new cljs.core.Keyword(null,"on-select","on-select",1062468636));var on_down = cljs.core.get.call(null,map__8181__$1,new cljs.core.Keyword(null,"on-down","on-down",3936419650));var on_up = cljs.core.get.call(null,map__8181__$1,new cljs.core.Keyword(null,"on-up","on-up",1119739067));var kk = ev.which;var G__8182 = kk;if(cljs.core._EQ_.call(null,27,G__8182))
{ev.preventDefault();
ev.target.value = "";
return on_cancel.call(null);
} else
{if(cljs.core._EQ_.call(null,13,G__8182))
{ev.preventDefault();
var temp__4092__auto___8198 = lt.plugins.elm_light.autocompleter.find_active.call(null,new cljs.core.Keyword(null,"items","items",1114430258).cljs$core$IFn$_invoke$arity$1(props));if(cljs.core.truth_(temp__4092__auto___8198))
{var active_8199 = temp__4092__auto___8198;ev.target.value = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(active_8199);
} else
{}
return on_select.call(null);
} else
{if(cljs.core._EQ_.call(null,40,G__8182))
{ev.preventDefault();
return on_down.call(null);
} else
{if(cljs.core._EQ_.call(null,38,G__8182))
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
return (function (p1__8183_SHARP_){return "autocomplete-dropdown-item row".concat((cljs.core.truth_(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(p1__8183_SHARP_))?" autocomplete-active":""));
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
lt.plugins.elm_light.autocompleter.Adder = quiescent.component.call(null,(function (p__8184){var map__8185 = p__8184;var map__8185__$1 = ((cljs.core.seq_QMARK_.call(null,map__8185))?cljs.core.apply.call(null,cljs.core.hash_map,map__8185):map__8185);var props = map__8185__$1;var disabled = cljs.core.get.call(null,map__8185__$1,new cljs.core.Keyword(null,"disabled","disabled",1284845038));var on_add_package = cljs.core.get.call(null,map__8185__$1,new cljs.core.Keyword(null,"on-add-package","on-add-package",3601701790));return quiescent.dom.button.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",1004015509),"btn",new cljs.core.Keyword(null,"disabled","disabled",1284845038),disabled,new cljs.core.Keyword(null,"onClick","onClick",3956969051),((function (map__8185,map__8185__$1,props,disabled,on_add_package){
return (function (){return on_add_package.call(null);
});})(map__8185,map__8185__$1,props,disabled,on_add_package))
], null),"Add package");
}));
/**
* 
*/
lt.plugins.elm_light.autocompleter.Versions = quiescent.component.call(null,(function (props){return cljs.core.apply.call(null,quiescent.dom.select,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",1004015509),"versions",new cljs.core.Keyword(null,"value","value",1125876963),new cljs.core.Keyword(null,"version","version",1365512266).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"onChange","onChange",2050678241),(function (p1__8186_SHARP_){return new cljs.core.Keyword(null,"on-change-version","on-change-version",822058203).cljs$core$IFn$_invoke$arity$1(props).call(null,p1__8186_SHARP_.target.value);
})], null),cljs.core.map.call(null,(function (p1__8187_SHARP_){return quiescent.dom.option.call(null,cljs.core.PersistentArrayMap.EMPTY,p1__8187_SHARP_);
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
clojure.walk.keywordize_keys = (function keywordize_keys(m){var f = (function (p__19023){var vec__19024 = p__19023;var k = cljs.core.nth.call(null,vec__19024,0,null);var v = cljs.core.nth.call(null,vec__19024,1,null);if(typeof k === 'string')
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
clojure.walk.stringify_keys = (function stringify_keys(m){var f = (function (p__19027){var vec__19028 = p__19027;var k = cljs.core.nth.call(null,vec__19028,0,null);var v = cljs.core.nth.call(null,vec__19028,1,null);if((k instanceof cljs.core.Keyword))
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
lt.plugins.elm_light.graph.find_package_by_name = (function find_package_by_name(this$,name){return cljs.core.some.call(null,(function (p1__12069_SHARP_){if(cljs.core._EQ_.call(null,lt.plugins.elm_light.graph.lower.call(null,new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(p1__12069_SHARP_)),lt.plugins.elm_light.graph.lower.call(null,name)))
{return p1__12069_SHARP_;
} else
{return null;
}
}),new cljs.core.Keyword(null,"all-packages","all-packages",1123981067).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
});
lt.plugins.elm_light.graph.dependency_graph_ui = (function dependency_graph_ui(this$){var e__6289__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.graph","div.graph",2030351651),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dependency-graph","div.dependency-graph",3039800187),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg:svg","svg:svg",3472817088),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",1127031096),"650",new cljs.core.Keyword(null,"height","height",4087841945),"680"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg:g","svg:g",1123725379),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",2066570974),"translate(20,20)"], null)], null)], null)], null)], null));var seq__12076_12127 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__12077_12128 = null;var count__12078_12129 = 0;var i__12079_12130 = 0;while(true){
if((i__12079_12130 < count__12078_12129))
{var vec__12080_12131 = cljs.core._nth.call(null,chunk__12077_12128,i__12079_12130);var ev__6290__auto___12132 = cljs.core.nth.call(null,vec__12080_12131,0,null);var func__6291__auto___12133 = cljs.core.nth.call(null,vec__12080_12131,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___12132,func__6291__auto___12133);
{
var G__12134 = seq__12076_12127;
var G__12135 = chunk__12077_12128;
var G__12136 = count__12078_12129;
var G__12137 = (i__12079_12130 + 1);
seq__12076_12127 = G__12134;
chunk__12077_12128 = G__12135;
count__12078_12129 = G__12136;
i__12079_12130 = G__12137;
continue;
}
} else
{var temp__4092__auto___12138 = cljs.core.seq.call(null,seq__12076_12127);if(temp__4092__auto___12138)
{var seq__12076_12139__$1 = temp__4092__auto___12138;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12076_12139__$1))
{var c__5632__auto___12140 = cljs.core.chunk_first.call(null,seq__12076_12139__$1);{
var G__12141 = cljs.core.chunk_rest.call(null,seq__12076_12139__$1);
var G__12142 = c__5632__auto___12140;
var G__12143 = cljs.core.count.call(null,c__5632__auto___12140);
var G__12144 = 0;
seq__12076_12127 = G__12141;
chunk__12077_12128 = G__12142;
count__12078_12129 = G__12143;
i__12079_12130 = G__12144;
continue;
}
} else
{var vec__12081_12145 = cljs.core.first.call(null,seq__12076_12139__$1);var ev__6290__auto___12146 = cljs.core.nth.call(null,vec__12081_12145,0,null);var func__6291__auto___12147 = cljs.core.nth.call(null,vec__12081_12145,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___12146,func__6291__auto___12147);
{
var G__12148 = cljs.core.next.call(null,seq__12076_12139__$1);
var G__12149 = null;
var G__12150 = 0;
var G__12151 = 0;
seq__12076_12127 = G__12148;
chunk__12077_12128 = G__12149;
count__12078_12129 = G__12150;
i__12079_12130 = G__12151;
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
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.graph","dependency-graph","lt.plugins.elm-light.graph/dependency-graph",2371711049),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elm.graph.dependency","elm.graph.dependency",658564005)], null),new cljs.core.Keyword(null,"name","name",1017277949),"Dependency graph",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){lt.plugins.elm_light.utils.fetch_all_packages.call(null,(function (p1__12082_SHARP_){return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"all-packages","all-packages",1123981067),p1__12082_SHARP_], null));
}));
return lt.plugins.elm_light.graph.dependency_graph_ui.call(null,this$);
}));
lt.plugins.elm_light.graph.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___12152 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___12152))
{var ts_12153 = temp__4092__auto___12152;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_12153))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_12153);
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
lt.plugins.elm_light.graph.create_graph = (function create_graph(data){var g = (new lt.plugins.elm_light.graph.dagreD3.graphlib.Graph()).setGraph({});var seq__12091_12154 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"nodes","nodes",1118897699).cljs$core$IFn$_invoke$arity$1(data));var chunk__12092_12155 = null;var count__12093_12156 = 0;var i__12094_12157 = 0;while(true){
if((i__12094_12157 < count__12093_12156))
{var x_12158 = cljs.core._nth.call(null,chunk__12092_12155,i__12094_12157);g.setNode(lt.plugins.elm_light.graph.dep_id.call(null,x_12158),lt.plugins.elm_light.graph.node_label.call(null,x_12158));
{
var G__12159 = seq__12091_12154;
var G__12160 = chunk__12092_12155;
var G__12161 = count__12093_12156;
var G__12162 = (i__12094_12157 + 1);
seq__12091_12154 = G__12159;
chunk__12092_12155 = G__12160;
count__12093_12156 = G__12161;
i__12094_12157 = G__12162;
continue;
}
} else
{var temp__4092__auto___12163 = cljs.core.seq.call(null,seq__12091_12154);if(temp__4092__auto___12163)
{var seq__12091_12164__$1 = temp__4092__auto___12163;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12091_12164__$1))
{var c__5632__auto___12165 = cljs.core.chunk_first.call(null,seq__12091_12164__$1);{
var G__12166 = cljs.core.chunk_rest.call(null,seq__12091_12164__$1);
var G__12167 = c__5632__auto___12165;
var G__12168 = cljs.core.count.call(null,c__5632__auto___12165);
var G__12169 = 0;
seq__12091_12154 = G__12166;
chunk__12092_12155 = G__12167;
count__12093_12156 = G__12168;
i__12094_12157 = G__12169;
continue;
}
} else
{var x_12170 = cljs.core.first.call(null,seq__12091_12164__$1);g.setNode(lt.plugins.elm_light.graph.dep_id.call(null,x_12170),lt.plugins.elm_light.graph.node_label.call(null,x_12170));
{
var G__12171 = cljs.core.next.call(null,seq__12091_12164__$1);
var G__12172 = null;
var G__12173 = 0;
var G__12174 = 0;
seq__12091_12154 = G__12171;
chunk__12092_12155 = G__12172;
count__12093_12156 = G__12173;
i__12094_12157 = G__12174;
continue;
}
}
} else
{}
}
break;
}
var seq__12095_12175 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"edges","edges",1110261192).cljs$core$IFn$_invoke$arity$1(data));var chunk__12096_12176 = null;var count__12097_12177 = 0;var i__12098_12178 = 0;while(true){
if((i__12098_12178 < count__12097_12177))
{var x_12179 = cljs.core._nth.call(null,chunk__12096_12176,i__12098_12178);g.setEdge(new cljs.core.Keyword(null,"a","a",1013904339).cljs$core$IFn$_invoke$arity$1(x_12179),new cljs.core.Keyword(null,"b","b",1013904340).cljs$core$IFn$_invoke$arity$1(x_12179),{"style": (cljs.core.truth_(new cljs.core.Keyword(null,"transitive","transitive",3584713111).cljs$core$IFn$_invoke$arity$1(x_12179))?"stroke-dasharray: 5, 5;":null), "label": new cljs.core.Keyword(null,"label","label",1116631654).cljs$core$IFn$_invoke$arity$1(x_12179)});
{
var G__12180 = seq__12095_12175;
var G__12181 = chunk__12096_12176;
var G__12182 = count__12097_12177;
var G__12183 = (i__12098_12178 + 1);
seq__12095_12175 = G__12180;
chunk__12096_12176 = G__12181;
count__12097_12177 = G__12182;
i__12098_12178 = G__12183;
continue;
}
} else
{var temp__4092__auto___12184 = cljs.core.seq.call(null,seq__12095_12175);if(temp__4092__auto___12184)
{var seq__12095_12185__$1 = temp__4092__auto___12184;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12095_12185__$1))
{var c__5632__auto___12186 = cljs.core.chunk_first.call(null,seq__12095_12185__$1);{
var G__12187 = cljs.core.chunk_rest.call(null,seq__12095_12185__$1);
var G__12188 = c__5632__auto___12186;
var G__12189 = cljs.core.count.call(null,c__5632__auto___12186);
var G__12190 = 0;
seq__12095_12175 = G__12187;
chunk__12096_12176 = G__12188;
count__12097_12177 = G__12189;
i__12098_12178 = G__12190;
continue;
}
} else
{var x_12191 = cljs.core.first.call(null,seq__12095_12185__$1);g.setEdge(new cljs.core.Keyword(null,"a","a",1013904339).cljs$core$IFn$_invoke$arity$1(x_12191),new cljs.core.Keyword(null,"b","b",1013904340).cljs$core$IFn$_invoke$arity$1(x_12191),{"style": (cljs.core.truth_(new cljs.core.Keyword(null,"transitive","transitive",3584713111).cljs$core$IFn$_invoke$arity$1(x_12191))?"stroke-dasharray: 5, 5;":null), "label": new cljs.core.Keyword(null,"label","label",1116631654).cljs$core$IFn$_invoke$arity$1(x_12191)});
{
var G__12192 = cljs.core.next.call(null,seq__12095_12185__$1);
var G__12193 = null;
var G__12194 = 0;
var G__12195 = 0;
seq__12095_12175 = G__12192;
chunk__12096_12176 = G__12193;
count__12097_12177 = G__12194;
i__12098_12178 = G__12195;
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
}),cljs.core.map.call(null,(function (p__12103){var vec__12104 = p__12103;var k = cljs.core.nth.call(null,vec__12104,0,null);var v = cljs.core.nth.call(null,vec__12104,1,null);return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"package","package",4501809080),new cljs.core.Keyword(null,"range","range",1122184367),new cljs.core.Keyword(null,"version","version",1365512266)],[lt.plugins.elm_light.utils.nskw__GT_name.call(null,k),v,new cljs.core.Keyword(null,"version","version",1365512266).cljs$core$IFn$_invoke$arity$1(cljs.core.some.call(null,((function (vec__12104,k,v){
return (function (p1__12099_SHARP_){if(cljs.core._EQ_.call(null,lt.plugins.elm_light.utils.nskw__GT_name.call(null,k),new cljs.core.Keyword(null,"package","package",4501809080).cljs$core$IFn$_invoke$arity$1(p1__12099_SHARP_)))
{return p1__12099_SHARP_;
} else
{return null;
}
});})(vec__12104,k,v))
,new cljs.core.Keyword(null,"packages","packages",1764771935).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))))]);
}),new cljs.core.Keyword(null,"dependencies","dependencies",1517678747).cljs$core$IFn$_invoke$arity$1(pkg_json))));if(temp__4092__auto__)
{var edges = temp__4092__auto__;lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",1016980252),new cljs.core.Keyword(null,"edges","edges",1110261192)], null),((function (edges,temp__4092__auto__){
return (function (p1__12100_SHARP_){return cljs.core.concat.call(null,p1__12100_SHARP_,edges);
});})(edges,temp__4092__auto__))
);
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"elm.graph.render","elm.graph.render",2076182000));
} else
{return null;
}
});
lt.plugins.elm_light.graph.__BEH__on_get_transitives = (function __BEH__on_get_transitives(this$){var transitives = cljs.core.remove.call(null,new cljs.core.Keyword(null,"range","range",1122184367),new cljs.core.Keyword(null,"packages","packages",1764771935).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))));lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",1016980252),new cljs.core.Keyword(null,"nodes","nodes",1118897699)], null),((function (transitives){
return (function (p1__12105_SHARP_){return cljs.core.concat.call(null,p1__12105_SHARP_,transitives);
});})(transitives))
);
lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"elm.graph.render","elm.graph.render",2076182000));
var seq__12110 = cljs.core.seq.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"version","version",1365512266),new cljs.core.Keyword(null,"packages","packages",1764771935).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))));var chunk__12111 = null;var count__12112 = 0;var i__12113 = 0;while(true){
if((i__12113 < count__12112))
{var x = cljs.core._nth.call(null,chunk__12111,i__12113);lt.plugins.elm_light.graph.get_package_json.call(null,x,cljs.core.partial.call(null,lt.plugins.elm_light.graph.add_edges_for_dep,this$,x));
{
var G__12196 = seq__12110;
var G__12197 = chunk__12111;
var G__12198 = count__12112;
var G__12199 = (i__12113 + 1);
seq__12110 = G__12196;
chunk__12111 = G__12197;
count__12112 = G__12198;
i__12113 = G__12199;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12110);if(temp__4092__auto__)
{var seq__12110__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12110__$1))
{var c__5632__auto__ = cljs.core.chunk_first.call(null,seq__12110__$1);{
var G__12200 = cljs.core.chunk_rest.call(null,seq__12110__$1);
var G__12201 = c__5632__auto__;
var G__12202 = cljs.core.count.call(null,c__5632__auto__);
var G__12203 = 0;
seq__12110 = G__12200;
chunk__12111 = G__12201;
count__12112 = G__12202;
i__12113 = G__12203;
continue;
}
} else
{var x = cljs.core.first.call(null,seq__12110__$1);lt.plugins.elm_light.graph.get_package_json.call(null,x,cljs.core.partial.call(null,lt.plugins.elm_light.graph.add_edges_for_dep,this$,x));
{
var G__12204 = cljs.core.next.call(null,seq__12110__$1);
var G__12205 = null;
var G__12206 = 0;
var G__12207 = 0;
seq__12110 = G__12204;
chunk__12111 = G__12205;
count__12112 = G__12206;
i__12113 = G__12207;
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
lt.plugins.elm_light.graph.get_dependency_data = (function get_dependency_data(project_path){var pkgs = cljs.core.map.call(null,(function (p1__12115_SHARP_){return cljs.core.assoc.call(null,p1__12115_SHARP_,new cljs.core.Keyword(null,"summary","summary",3451231000),new cljs.core.Keyword(null,"summary","summary",3451231000).cljs$core$IFn$_invoke$arity$1(lt.plugins.elm_light.graph.find_package_by_name.call(null,lt.plugins.elm_light.graph.dependency_graph,new cljs.core.Keyword(null,"package","package",4501809080).cljs$core$IFn$_invoke$arity$1(p1__12115_SHARP_))));
}),cljs.core.map.call(null,(function (p1__12114_SHARP_){return clojure.set.rename_keys.call(null,p1__12114_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"exact","exact",1110851185),new cljs.core.Keyword(null,"version","version",1365512266)], null));
}),lt.plugins.elm_light.utils.get_project_deps.call(null,project_path)));var direct = cljs.core.filter.call(null,new cljs.core.Keyword(null,"range","range",1122184367),pkgs);var rootVersion = new cljs.core.Keyword(null,"version","version",1365512266).cljs$core$IFn$_invoke$arity$1(lt.plugins.elm_light.utils.parse_json_file.call(null,lt.objs.files.join.call(null,project_path,"elm-package.json")));var root = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"package","package",4501809080),lt.objs.files.basename.call(null,project_path),new cljs.core.Keyword(null,"version","version",1365512266),rootVersion,new cljs.core.Keyword(null,"shape","shape",1123304211),"ellipse"], null);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"packages","packages",1764771935),pkgs,new cljs.core.Keyword(null,"nodes","nodes",1118897699),cljs.core.conj.call(null,direct,root),new cljs.core.Keyword(null,"edges","edges",1110261192),cljs.core.map.call(null,((function (pkgs,direct,rootVersion,root){
return (function (p1__12116_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"label","label",1116631654)],[lt.plugins.elm_light.graph.dep_id.call(null,root),lt.plugins.elm_light.graph.dep_id.call(null,p1__12116_SHARP_),new cljs.core.Keyword(null,"range","range",1122184367).cljs$core$IFn$_invoke$arity$1(p1__12116_SHARP_)]);
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
return (function (p__18960){var vec__18961 = p__18960;var k = cljs.core.nth.call(null,vec__18961,0,null);var v = cljs.core.nth.call(null,vec__18961,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.elm_light.utils.nskw__GT_name.call(null,k),v], null);
});})(pkg_file))
,deps)),pkg);
});})(pkg_file))
)));
});
lt.plugins.elm_light.packages.project_wrapper = (function project_wrapper(this$){var e__6289__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.elm","div.elm",2686466363),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"project-packages-wrapper"], null),"Retrieving project package info..."], null)], null));var seq__18968_18993 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__18969_18994 = null;var count__18970_18995 = 0;var i__18971_18996 = 0;while(true){
if((i__18971_18996 < count__18970_18995))
{var vec__18972_18997 = cljs.core._nth.call(null,chunk__18969_18994,i__18971_18996);var ev__6290__auto___18998 = cljs.core.nth.call(null,vec__18972_18997,0,null);var func__6291__auto___18999 = cljs.core.nth.call(null,vec__18972_18997,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___18998,func__6291__auto___18999);
{
var G__19000 = seq__18968_18993;
var G__19001 = chunk__18969_18994;
var G__19002 = count__18970_18995;
var G__19003 = (i__18971_18996 + 1);
seq__18968_18993 = G__19000;
chunk__18969_18994 = G__19001;
count__18970_18995 = G__19002;
i__18971_18996 = G__19003;
continue;
}
} else
{var temp__4092__auto___19004 = cljs.core.seq.call(null,seq__18968_18993);if(temp__4092__auto___19004)
{var seq__18968_19005__$1 = temp__4092__auto___19004;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18968_19005__$1))
{var c__5632__auto___19006 = cljs.core.chunk_first.call(null,seq__18968_19005__$1);{
var G__19007 = cljs.core.chunk_rest.call(null,seq__18968_19005__$1);
var G__19008 = c__5632__auto___19006;
var G__19009 = cljs.core.count.call(null,c__5632__auto___19006);
var G__19010 = 0;
seq__18968_18993 = G__19007;
chunk__18969_18994 = G__19008;
count__18970_18995 = G__19009;
i__18971_18996 = G__19010;
continue;
}
} else
{var vec__18973_19011 = cljs.core.first.call(null,seq__18968_19005__$1);var ev__6290__auto___19012 = cljs.core.nth.call(null,vec__18973_19011,0,null);var func__6291__auto___19013 = cljs.core.nth.call(null,vec__18973_19011,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___19012,func__6291__auto___19013);
{
var G__19014 = cljs.core.next.call(null,seq__18968_19005__$1);
var G__19015 = null;
var G__19016 = 0;
var G__19017 = 0;
seq__18968_18993 = G__19014;
chunk__18969_18994 = G__19015;
count__18970_18995 = G__19016;
i__18971_18996 = G__19017;
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
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.packages","elm-packages","lt.plugins.elm-light.packages/elm-packages",4552372902),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elm.packages","elm.packages",3931311271),null], null), null),new cljs.core.Keyword(null,"label","label",1116631654),"Elm project packages",new cljs.core.Keyword(null,"name","name",1017277949),"Elm project packages",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){lt.plugins.elm_light.utils.fetch_all_packages.call(null,(function (p1__18974_SHARP_){return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"all-packages","all-packages",1123981067),p1__18974_SHARP_], null));
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
lt.plugins.elm_light.packages.idx_active = (function idx_active(items){return cljs.core.first.call(null,cljs.core.keep_indexed.call(null,(function (p1__18976_SHARP_,p2__18975_SHARP_){if(cljs.core.truth_(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(p2__18975_SHARP_)))
{return p1__18976_SHARP_;
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
lt.plugins.elm_light.packages.on_pkg_sel = (function on_pkg_sel(){var items_19018 = new cljs.core.Keyword(null,"ac-packages","ac-packages",1548109226).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.elm_light.packages.elm_packages));var temp__4090__auto___19019 = lt.plugins.elm_light.packages.idx_active.call(null,items_19018);if(cljs.core.truth_(temp__4090__auto___19019))
{var idx_19020 = temp__4090__auto___19019;lt.object.assoc_in_BANG_.call(null,lt.plugins.elm_light.packages.elm_packages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ac-versions","ac-versions",3107155800)], null),new cljs.core.Keyword(null,"versions","versions",3323818509).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,items_19018,idx_19020)));
lt.object.assoc_in_BANG_.call(null,lt.plugins.elm_light.packages.elm_packages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ac-version","ac-version",2051259807)], null),cljs.core.first.call(null,new cljs.core.Keyword(null,"versions","versions",3323818509).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,items_19018,idx_19020))));
lt.object.assoc_in_BANG_.call(null,lt.plugins.elm_light.packages.elm_packages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ac-package","ac-package",892589325)], null),new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,items_19018,idx_19020)));
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
return (function (p1__18977_SHARP_){if(cljs.core._EQ_.call(null,p1__18977_SHARP_,0))
{lt.objs.notifos.done_working.call(null);
} else
{lt.objs.notifos.set_msg_BANG_.call(null,"Error installing elm package",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),"error",new cljs.core.Keyword(null,"timeout","timeout",3994960083),5000], null));
}
lt.object.raise.call(null,lt.plugins.elm_light.packages.elm_packages,new cljs.core.Keyword(null,"elm.show.project.packages","elm.show.project.packages",3385102109),new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.elm_light.packages.elm_packages)));
return lt.object.raise.call(null,lt.plugins.elm_light.graph.dependency_graph,new cljs.core.Keyword(null,"elm.graph.show-dependencies","elm.graph.show-dependencies",3464547203),new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.elm_light.packages.elm_packages)),false);
});})(proc,args))
);
proc.stdout.on("data",((function (proc,args){
return (function (p1__18978_SHARP_){return lt.objs.notifos.msg_STAR_.call(null,[cljs.core.str("Package install: "),cljs.core.str(p1__18978_SHARP_)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"timeout","timeout",3994960083),5000], null));
});})(proc,args))
);
return proc.stderr.on("data",((function (proc,args){
return (function (p1__18979_SHARP_){return lt.objs.console.error.call(null,[cljs.core.str(p1__18979_SHARP_)].join(''));
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
lt.plugins.elm_light.packages.PackageRow = quiescent.component.call(null,(function (p__18980){var map__18981 = p__18980;var map__18981__$1 = ((cljs.core.seq_QMARK_.call(null,map__18981))?cljs.core.apply.call(null,cljs.core.hash_map,map__18981):map__18981);var on_browse = cljs.core.get.call(null,map__18981__$1,new cljs.core.Keyword(null,"on-browse","on-browse",587885994));var on_remove = cljs.core.get.call(null,map__18981__$1,new cljs.core.Keyword(null,"on-remove","on-remove",1033879460));var exact = cljs.core.get.call(null,map__18981__$1,new cljs.core.Keyword(null,"exact","exact",1110851185));var range = cljs.core.get.call(null,map__18981__$1,new cljs.core.Keyword(null,"range","range",1122184367));var package$ = cljs.core.get.call(null,map__18981__$1,new cljs.core.Keyword(null,"package","package",4501809080));return quiescent.dom.tr.call(null,cljs.core.PersistentArrayMap.EMPTY,quiescent.dom.td.call(null,cljs.core.PersistentArrayMap.EMPTY,(cljs.core.truth_((function (){var and__4872__auto__ = package$;if(cljs.core.truth_(and__4872__auto__))
{return exact;
} else
{return and__4872__auto__;
}
})())?quiescent.dom.span.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",1004015509),"link",new cljs.core.Keyword(null,"onClick","onClick",3956969051),((function (map__18981,map__18981__$1,on_browse,on_remove,exact,range,package$){
return (function (){return on_browse.call(null,package$,exact);
});})(map__18981,map__18981__$1,on_browse,on_remove,exact,range,package$))
], null),package$):package$)),quiescent.dom.td.call(null,cljs.core.PersistentArrayMap.EMPTY,range),quiescent.dom.td.call(null,cljs.core.PersistentArrayMap.EMPTY,exact),quiescent.dom.td.call(null,cljs.core.PersistentArrayMap.EMPTY,(cljs.core.truth_(range)?quiescent.dom.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",3956969051),((function (map__18981,map__18981__$1,on_browse,on_remove,exact,range,package$){
return (function (){return on_remove.call(null,package$);
});})(map__18981,map__18981__$1,on_browse,on_remove,exact,range,package$))
], null),"remove"):null)));
}));
/**
* 
*/
lt.plugins.elm_light.packages.PackageTable = quiescent.component.call(null,(function (props){return quiescent.dom.table.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",1004015509),"package-table"], null),quiescent.dom.thead.call(null,cljs.core.PersistentArrayMap.EMPTY,quiescent.dom.tr.call(null,cljs.core.PersistentArrayMap.EMPTY,quiescent.dom.th.call(null,cljs.core.PersistentArrayMap.EMPTY,"Package"),quiescent.dom.th.call(null,cljs.core.PersistentArrayMap.EMPTY,"Range"),quiescent.dom.th.call(null,cljs.core.PersistentArrayMap.EMPTY,"Exact"),quiescent.dom.th.call(null,cljs.core.PersistentArrayMap.EMPTY,""))),cljs.core.apply.call(null,quiescent.dom.tbody,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__18982_SHARP_){return lt.plugins.elm_light.packages.PackageRow.call(null,cljs.core.assoc.call(null,p1__18982_SHARP_,new cljs.core.Keyword(null,"on-remove","on-remove",1033879460),new cljs.core.Keyword(null,"on-remove","on-remove",1033879460).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"on-browse","on-browse",587885994),new cljs.core.Keyword(null,"on-browse","on-browse",587885994).cljs$core$IFn$_invoke$arity$1(props)));
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
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",1013907517),new cljs.core.Keyword(null,"args","args",1016906831).cljs$core$IFn$_invoke$arity$1(doc)], null):null)], null));var seq__18649_18681 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__18650_18682 = null;var count__18651_18683 = 0;var i__18652_18684 = 0;while(true){
if((i__18652_18684 < count__18651_18683))
{var vec__18653_18685 = cljs.core._nth.call(null,chunk__18650_18682,i__18652_18684);var ev__6290__auto___18686 = cljs.core.nth.call(null,vec__18653_18685,0,null);var func__6291__auto___18687 = cljs.core.nth.call(null,vec__18653_18685,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___18686,func__6291__auto___18687);
{
var G__18688 = seq__18649_18681;
var G__18689 = chunk__18650_18682;
var G__18690 = count__18651_18683;
var G__18691 = (i__18652_18684 + 1);
seq__18649_18681 = G__18688;
chunk__18650_18682 = G__18689;
count__18651_18683 = G__18690;
i__18652_18684 = G__18691;
continue;
}
} else
{var temp__4092__auto___18692 = cljs.core.seq.call(null,seq__18649_18681);if(temp__4092__auto___18692)
{var seq__18649_18693__$1 = temp__4092__auto___18692;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18649_18693__$1))
{var c__5632__auto___18694 = cljs.core.chunk_first.call(null,seq__18649_18693__$1);{
var G__18695 = cljs.core.chunk_rest.call(null,seq__18649_18693__$1);
var G__18696 = c__5632__auto___18694;
var G__18697 = cljs.core.count.call(null,c__5632__auto___18694);
var G__18698 = 0;
seq__18649_18681 = G__18695;
chunk__18650_18682 = G__18696;
count__18651_18683 = G__18697;
i__18652_18684 = G__18698;
continue;
}
} else
{var vec__18654_18699 = cljs.core.first.call(null,seq__18649_18693__$1);var ev__6290__auto___18700 = cljs.core.nth.call(null,vec__18654_18699,0,null);var func__6291__auto___18701 = cljs.core.nth.call(null,vec__18654_18699,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___18700,func__6291__auto___18701);
{
var G__18702 = cljs.core.next.call(null,seq__18649_18693__$1);
var G__18703 = null;
var G__18704 = 0;
var G__18705 = 0;
seq__18649_18681 = G__18702;
chunk__18650_18682 = G__18703;
count__18651_18683 = G__18704;
i__18652_18684 = G__18705;
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
lt.plugins.elm_light.inline_doc.highlight_code = (function highlight_code(container_elem){var seq__18659 = cljs.core.seq.call(null,lt.util.dom.$$.call(null,"pre > code",container_elem));var chunk__18660 = null;var count__18661 = 0;var i__18662 = 0;while(true){
if((i__18662 < count__18661))
{var code = cljs.core._nth.call(null,chunk__18660,i__18662);hljs.highlightBlock(code);
{
var G__18706 = seq__18659;
var G__18707 = chunk__18660;
var G__18708 = count__18661;
var G__18709 = (i__18662 + 1);
seq__18659 = G__18706;
chunk__18660 = G__18707;
count__18661 = G__18708;
i__18662 = G__18709;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__18659);if(temp__4092__auto__)
{var seq__18659__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18659__$1))
{var c__5632__auto__ = cljs.core.chunk_first.call(null,seq__18659__$1);{
var G__18710 = cljs.core.chunk_rest.call(null,seq__18659__$1);
var G__18711 = c__5632__auto__;
var G__18712 = cljs.core.count.call(null,c__5632__auto__);
var G__18713 = 0;
seq__18659 = G__18710;
chunk__18660 = G__18711;
count__18661 = G__18712;
i__18662 = G__18713;
continue;
}
} else
{var code = cljs.core.first.call(null,seq__18659__$1);hljs.highlightBlock(code);
{
var G__18714 = cljs.core.next.call(null,seq__18659__$1);
var G__18715 = null;
var G__18716 = 0;
var G__18717 = 0;
seq__18659 = G__18714;
chunk__18660 = G__18715;
count__18661 = G__18716;
i__18662 = G__18717;
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
lt.plugins.elm_light.inline_doc.add_click_handlers = (function add_click_handlers(elem){var seq__18667 = cljs.core.seq.call(null,lt.util.dom.$$.call(null,"a",elem));var chunk__18668 = null;var count__18669 = 0;var i__18670 = 0;while(true){
if((i__18670 < count__18669))
{var link = cljs.core._nth.call(null,chunk__18668,i__18670);lt.util.dom.on.call(null,link,"click",((function (seq__18667,chunk__18668,count__18669,i__18670,link){
return (function (){return lt.plugins.elm_light.inline_doc.handle_url_click.call(null,lt.util.dom.attr.call(null,link,new cljs.core.Keyword(null,"href","href",1017115293)));
});})(seq__18667,chunk__18668,count__18669,i__18670,link))
);
{
var G__18718 = seq__18667;
var G__18719 = chunk__18668;
var G__18720 = count__18669;
var G__18721 = (i__18670 + 1);
seq__18667 = G__18718;
chunk__18668 = G__18719;
count__18669 = G__18720;
i__18670 = G__18721;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__18667);if(temp__4092__auto__)
{var seq__18667__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18667__$1))
{var c__5632__auto__ = cljs.core.chunk_first.call(null,seq__18667__$1);{
var G__18722 = cljs.core.chunk_rest.call(null,seq__18667__$1);
var G__18723 = c__5632__auto__;
var G__18724 = cljs.core.count.call(null,c__5632__auto__);
var G__18725 = 0;
seq__18667 = G__18722;
chunk__18668 = G__18723;
count__18669 = G__18724;
i__18670 = G__18725;
continue;
}
} else
{var link = cljs.core.first.call(null,seq__18667__$1);lt.util.dom.on.call(null,link,"click",((function (seq__18667,chunk__18668,count__18669,i__18670,link,seq__18667__$1,temp__4092__auto__){
return (function (){return lt.plugins.elm_light.inline_doc.handle_url_click.call(null,lt.util.dom.attr.call(null,link,new cljs.core.Keyword(null,"href","href",1017115293)));
});})(seq__18667,chunk__18668,count__18669,i__18670,link,seq__18667__$1,temp__4092__auto__))
);
{
var G__18726 = cljs.core.next.call(null,seq__18667__$1);
var G__18727 = null;
var G__18728 = 0;
var G__18729 = 0;
seq__18667 = G__18726;
chunk__18668 = G__18727;
count__18669 = G__18728;
i__18670 = G__18729;
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
lt.plugins.elm_light.autocompleter.core.default_options = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"async","async",1107031534),true,new cljs.core.Keyword(null,"completeSingle","completeSingle",2100037203),false,new cljs.core.Keyword(null,"supportsSelection","supportsSelection",3475218138),true,new cljs.core.Keyword(null,"closeOnUnfocus","closeOnUnfocus",2215570266),true,new cljs.core.Keyword(null,"customKeys","customKeys",3726901367),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"Up","Up",1013906989),(function (p1__19057_SHARP_,p2__19056_SHARP_){return p2__19056_SHARP_.moveFocus.call(null,-1);
}),new cljs.core.Keyword(null,"Down","Down",1016040500),(function (p1__19059_SHARP_,p2__19058_SHARP_){return p2__19058_SHARP_.moveFocus.call(null,1);
}),new cljs.core.Keyword(null,"Enter","Enter",1081018922),(function (a,b){return b.pick();
}),new cljs.core.Keyword(null,"Tab","Tab",1013988071),(function (a,b){return b.pick();
}),new cljs.core.Keyword(null,"Esc","Esc",1013974215),(function (p1__19061_SHARP_,p2__19060_SHARP_){return p2__19060_SHARP_.close.call(null);
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
{return cljs.core.clj__GT_js.call(null,(function (p1__19063_SHARP_){var fst = cljs.core.first.call(null,new cljs.core.Keyword(null,"list","list",1017226256).cljs$core$IFn$_invoke$arity$1(p1__19063_SHARP_));return cljs.core.assoc.call(null,p1__19063_SHARP_,new cljs.core.Keyword(null,"from","from",1017056028),new cljs.core.Keyword(null,"from","from",1017056028).cljs$core$IFn$_invoke$arity$1(fst),new cljs.core.Keyword(null,"to","to",1013907949),new cljs.core.Keyword(null,"to","to",1013907949).cljs$core$IFn$_invoke$arity$1(fst));
}).call(null,cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"list","list",1017226256)],[cljs.core.take.call(null,25,cljs.core.filter.call(null,(function (p1__19062_SHARP_){return (new cljs.core.Keyword(null,"displayText","displayText",2728236161).cljs$core$IFn$_invoke$arity$1(p1__19062_SHARP_).length < 1000);
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
lt.plugins.elm_light.autocompleter.core.listen_for_hint_results = (function listen_for_hint_results(ed,channels,hinter_ch){var t = cljs.core.async.timeout.call(null,500);var c__13601__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13601__auto__,t){
return (function (){var f__13602__auto__ = (function (){var switch__13531__auto__ = ((function (c__13601__auto__,t){
return (function (state_19149){var state_val_19150 = (state_19149[1]);if((state_val_19150 === 1))
{var inst_19118 = cljs.core.conj.call(null,channels,t);var inst_19119 = cljs.core.PersistentVector.EMPTY;var inst_19120 = inst_19118;var state_19149__$1 = (function (){var statearr_19151 = state_19149;(statearr_19151[7] = inst_19120);
(statearr_19151[8] = inst_19119);
return statearr_19151;
})();var statearr_19152_19210 = state_19149__$1;(statearr_19152_19210[2] = null);
(statearr_19152_19210[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19150 === 2))
{var inst_19120 = (state_19149[7]);var inst_19122 = cljs.core.count.call(null,inst_19120);var inst_19123 = cljs.core._EQ_.call(null,1,inst_19122);var state_19149__$1 = state_19149;if(inst_19123)
{var statearr_19153_19211 = state_19149__$1;(statearr_19153_19211[1] = 4);
} else
{var statearr_19154_19212 = state_19149__$1;(statearr_19154_19212[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19150 === 3))
{var inst_19147 = (state_19149[2]);var state_19149__$1 = state_19149;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19149__$1,inst_19147);
} else
{if((state_val_19150 === 4))
{var inst_19119 = (state_19149[8]);var inst_19125 = cljs.core.async.put_BANG_.call(null,hinter_ch,inst_19119);var state_19149__$1 = state_19149;var statearr_19155_19213 = state_19149__$1;(statearr_19155_19213[2] = inst_19125);
(statearr_19155_19213[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19150 === 5))
{var inst_19120 = (state_19149[7]);var state_19149__$1 = state_19149;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_19149__$1,7,inst_19120);
} else
{if((state_val_19150 === 6))
{var inst_19145 = (state_19149[2]);var state_19149__$1 = state_19149;var statearr_19156_19214 = state_19149__$1;(statearr_19156_19214[2] = inst_19145);
(statearr_19156_19214[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19150 === 7))
{var inst_19131 = (state_19149[9]);var inst_19129 = (state_19149[2]);var inst_19130 = cljs.core.nth.call(null,inst_19129,0,null);var inst_19131__$1 = cljs.core.nth.call(null,inst_19129,1,null);var inst_19132 = (inst_19131__$1 === t);var state_19149__$1 = (function (){var statearr_19157 = state_19149;(statearr_19157[10] = inst_19130);
(statearr_19157[9] = inst_19131__$1);
return statearr_19157;
})();if(cljs.core.truth_(inst_19132))
{var statearr_19158_19215 = state_19149__$1;(statearr_19158_19215[1] = 8);
} else
{var statearr_19159_19216 = state_19149__$1;(statearr_19159_19216[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19150 === 8))
{var inst_19119 = (state_19149[8]);var inst_19134 = cljs.core.println.call(null,"WARNING: Timeout waiting for hinter provider channel results");var inst_19135 = cljs.core.async.put_BANG_.call(null,hinter_ch,inst_19119);var state_19149__$1 = (function (){var statearr_19160 = state_19149;(statearr_19160[11] = inst_19134);
return statearr_19160;
})();var statearr_19161_19217 = state_19149__$1;(statearr_19161_19217[2] = inst_19135);
(statearr_19161_19217[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19150 === 9))
{var inst_19120 = (state_19149[7]);var inst_19130 = (state_19149[10]);var inst_19131 = (state_19149[9]);var inst_19119 = (state_19149[8]);var inst_19137 = cljs.core.into.call(null,inst_19119,inst_19130);var inst_19138 = [inst_19131];var inst_19139 = cljs.core.PersistentHashSet.fromArray.call(null,inst_19138,true);var inst_19140 = cljs.core.remove.call(null,inst_19139,inst_19120);var inst_19119__$1 = inst_19137;var inst_19120__$1 = inst_19140;var state_19149__$1 = (function (){var statearr_19162 = state_19149;(statearr_19162[7] = inst_19120__$1);
(statearr_19162[8] = inst_19119__$1);
return statearr_19162;
})();var statearr_19163_19218 = state_19149__$1;(statearr_19163_19218[2] = null);
(statearr_19163_19218[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19150 === 10))
{var inst_19143 = (state_19149[2]);var state_19149__$1 = state_19149;var statearr_19164_19219 = state_19149__$1;(statearr_19164_19219[2] = inst_19143);
(statearr_19164_19219[1] = 6);
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
});})(c__13601__auto__,t))
;return ((function (switch__13531__auto__,c__13601__auto__,t){
return (function() {
var state_machine__13532__auto__ = null;
var state_machine__13532__auto____0 = (function (){var statearr_19168 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19168[0] = state_machine__13532__auto__);
(statearr_19168[1] = 1);
return statearr_19168;
});
var state_machine__13532__auto____1 = (function (state_19149){while(true){
var ret_value__13533__auto__ = (function (){try{while(true){
var result__13534__auto__ = switch__13531__auto__.call(null,state_19149);if(cljs.core.keyword_identical_QMARK_.call(null,result__13534__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13534__auto__;
}
break;
}
}catch (e19169){if((e19169 instanceof Object))
{var ex__13535__auto__ = e19169;var statearr_19170_19220 = state_19149;(statearr_19170_19220[5] = ex__13535__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19149);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19169;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13533__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19221 = state_19149;
state_19149 = G__19221;
continue;
}
} else
{return ret_value__13533__auto__;
}
break;
}
});
state_machine__13532__auto__ = function(state_19149){
switch(arguments.length){
case 0:
return state_machine__13532__auto____0.call(this);
case 1:
return state_machine__13532__auto____1.call(this,state_19149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13532__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13532__auto____0;
state_machine__13532__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13532__auto____1;
return state_machine__13532__auto__;
})()
;})(switch__13531__auto__,c__13601__auto__,t))
})();var state__13603__auto__ = (function (){var statearr_19171 = f__13602__auto__.call(null);(statearr_19171[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13601__auto__);
return statearr_19171;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13603__auto__);
});})(c__13601__auto__,t))
);
return c__13601__auto__;
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
return (function (_,cb){var c__13601__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13601__auto__,ch){
return (function (){var f__13602__auto__ = (function (){var switch__13531__auto__ = ((function (c__13601__auto__,ch){
return (function (state_19191){var state_val_19192 = (state_19191[1]);if((state_val_19192 === 2))
{var inst_19187 = (state_19191[2]);var inst_19188 = lt.plugins.elm_light.autocompleter.core.process_hint_results.call(null,inst_19187);var inst_19189 = cb.call(null,inst_19188);var state_19191__$1 = state_19191;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19191__$1,inst_19189);
} else
{if((state_val_19192 === 1))
{var state_19191__$1 = state_19191;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19191__$1,2,ch);
} else
{return null;
}
}
});})(c__13601__auto__,ch))
;return ((function (switch__13531__auto__,c__13601__auto__,ch){
return (function() {
var state_machine__13532__auto__ = null;
var state_machine__13532__auto____0 = (function (){var statearr_19196 = [null,null,null,null,null,null,null];(statearr_19196[0] = state_machine__13532__auto__);
(statearr_19196[1] = 1);
return statearr_19196;
});
var state_machine__13532__auto____1 = (function (state_19191){while(true){
var ret_value__13533__auto__ = (function (){try{while(true){
var result__13534__auto__ = switch__13531__auto__.call(null,state_19191);if(cljs.core.keyword_identical_QMARK_.call(null,result__13534__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13534__auto__;
}
break;
}
}catch (e19197){if((e19197 instanceof Object))
{var ex__13535__auto__ = e19197;var statearr_19198_19222 = state_19191;(statearr_19198_19222[5] = ex__13535__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19191);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19197;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13533__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19223 = state_19191;
state_19191 = G__19223;
continue;
}
} else
{return ret_value__13533__auto__;
}
break;
}
});
state_machine__13532__auto__ = function(state_19191){
switch(arguments.length){
case 0:
return state_machine__13532__auto____0.call(this);
case 1:
return state_machine__13532__auto____1.call(this,state_19191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13532__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13532__auto____0;
state_machine__13532__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13532__auto____1;
return state_machine__13532__auto__;
})()
;})(switch__13531__auto__,c__13601__auto__,ch))
})();var state__13603__auto__ = (function (){var statearr_19199 = f__13602__auto__.call(null);(statearr_19199[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13601__auto__);
return statearr_19199;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13603__auto__);
});})(c__13601__auto__,ch))
);
return c__13601__auto__;
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
var G__19039 = (line - 1);
line = G__19039;
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
var G__19040 = (line + 1);
line = G__19040;
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
var G__19041 = (line - 1);
line = G__19041;
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
var seq__11827_11853 = cljs.core.seq.call(null,lt.objs.editor.pool.containing_path.call(null,new cljs.core.Keyword(null,"dir","dir",1014003711).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client))));var chunk__11828_11854 = null;var count__11829_11855 = 0;var i__11830_11856 = 0;while(true){
if((i__11830_11856 < count__11829_11855))
{var ed_11857 = cljs.core._nth.call(null,chunk__11828_11854,i__11830_11856);lt.object.raise.call(null,ed_11857,new cljs.core.Keyword(null,"project-disconnected","project-disconnected",2085293025));
{
var G__11858 = seq__11827_11853;
var G__11859 = chunk__11828_11854;
var G__11860 = count__11829_11855;
var G__11861 = (i__11830_11856 + 1);
seq__11827_11853 = G__11858;
chunk__11828_11854 = G__11859;
count__11829_11855 = G__11860;
i__11830_11856 = G__11861;
continue;
}
} else
{var temp__4092__auto___11862 = cljs.core.seq.call(null,seq__11827_11853);if(temp__4092__auto___11862)
{var seq__11827_11863__$1 = temp__4092__auto___11862;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11827_11863__$1))
{var c__5632__auto___11864 = cljs.core.chunk_first.call(null,seq__11827_11863__$1);{
var G__11865 = cljs.core.chunk_rest.call(null,seq__11827_11863__$1);
var G__11866 = c__5632__auto___11864;
var G__11867 = cljs.core.count.call(null,c__5632__auto___11864);
var G__11868 = 0;
seq__11827_11853 = G__11865;
chunk__11828_11854 = G__11866;
count__11829_11855 = G__11867;
i__11830_11856 = G__11868;
continue;
}
} else
{var ed_11869 = cljs.core.first.call(null,seq__11827_11863__$1);lt.object.raise.call(null,ed_11869,new cljs.core.Keyword(null,"project-disconnected","project-disconnected",2085293025));
{
var G__11870 = cljs.core.next.call(null,seq__11827_11863__$1);
var G__11871 = null;
var G__11872 = 0;
var G__11873 = 0;
seq__11827_11853 = G__11870;
chunk__11828_11854 = G__11871;
count__11829_11855 = G__11872;
i__11830_11856 = G__11873;
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
var seq__11837 = cljs.core.seq.call(null,lt.objs.editor.pool.containing_path.call(null,new cljs.core.Keyword(null,"dir","dir",1014003711).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client))));var chunk__11838 = null;var count__11839 = 0;var i__11840 = 0;while(true){
if((i__11840 < count__11839))
{var ed = cljs.core._nth.call(null,chunk__11838,i__11840);lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"project-connected","project-connected",3474311367));
{
var G__11874 = seq__11837;
var G__11875 = chunk__11838;
var G__11876 = count__11839;
var G__11877 = (i__11840 + 1);
seq__11837 = G__11874;
chunk__11838 = G__11875;
count__11839 = G__11876;
i__11840 = G__11877;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__11837);if(temp__4092__auto__)
{var seq__11837__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11837__$1))
{var c__5632__auto__ = cljs.core.chunk_first.call(null,seq__11837__$1);{
var G__11878 = cljs.core.chunk_rest.call(null,seq__11837__$1);
var G__11879 = c__5632__auto__;
var G__11880 = cljs.core.count.call(null,c__5632__auto__);
var G__11881 = 0;
seq__11837 = G__11878;
chunk__11838 = G__11879;
count__11839 = G__11880;
i__11840 = G__11881;
continue;
}
} else
{var ed = cljs.core.first.call(null,seq__11837__$1);lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"project-connected","project-connected",3474311367));
{
var G__11882 = cljs.core.next.call(null,seq__11837__$1);
var G__11883 = null;
var G__11884 = 0;
var G__11885 = 0;
seq__11837 = G__11882;
chunk__11838 = G__11883;
count__11839 = G__11884;
i__11840 = G__11885;
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
{var map__11841 = cljs.core.last.call(null,msg);var map__11841__$1 = ((cljs.core.seq_QMARK_.call(null,map__11841))?cljs.core.apply.call(null,cljs.core.hash_map,map__11841):map__11841);var package$ = cljs.core.get.call(null,map__11841__$1,new cljs.core.Keyword(null,"package","package",4501809080));var error = cljs.core.get.call(null,map__11841__$1,new cljs.core.Keyword(null,"error","error",1110689146));var ast = cljs.core.get.call(null,map__11841__$1,new cljs.core.Keyword(null,"ast","ast",1014001140));var type = cljs.core.get.call(null,map__11841__$1,new cljs.core.Keyword(null,"type","type",1017479852));var file = cljs.core.get.call(null,map__11841__$1,new cljs.core.Keyword(null,"file","file",1017047278));var G__11842 = type;if(cljs.core._EQ_.call(null,"parsed",G__11842))
{return lt.plugins.elm_light.elm_ast.upsert_ast_BANG_.call(null,new cljs.core.Keyword(null,"dir","dir",1014003711).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file","file",1017047278),file,new cljs.core.Keyword(null,"ast","ast",1014001140),ast,new cljs.core.Keyword(null,"package","package",4501809080),package$], null));
} else
{if(cljs.core._EQ_.call(null,"parseError",G__11842))
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
return (function (p1__11843_SHARP_){return lt.plugins.elm_light.clients.on_elm_message.call(null,client,p1__11843_SHARP_);
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
lt.plugins.elm_light.clients.start_elm_client = (function start_elm_client(p__11844){var map__11846 = p__11844;var map__11846__$1 = ((cljs.core.seq_QMARK_.call(null,map__11846))?cljs.core.apply.call(null,cljs.core.hash_map,map__11846):map__11846);var props = map__11846__$1;var client = cljs.core.get.call(null,map__11846__$1,new cljs.core.Keyword(null,"client","client",3951159101));var proj_path = cljs.core.get.call(null,map__11846__$1,new cljs.core.Keyword(null,"proj-path","proj-path",4362692615));var path = cljs.core.get.call(null,map__11846__$1,new cljs.core.Keyword(null,"path","path",1017337751));lt.objs.notifos.working.call(null,"Connecting..");
return lt.plugins.elm_light.clients.claim_reactor_port.call(null,proj_path,((function (map__11846,map__11846__$1,props,client,proj_path,path){
return (function (_,port){var worker = lt.plugins.elm_light.clients.start_elm_worker.call(null,proj_path,port,client);lt.object.merge_BANG_.call(null,client,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1017277949),lt.objs.files.basename.call(null,proj_path),new cljs.core.Keyword(null,"dir","dir",1014003711),proj_path,new cljs.core.Keyword(null,"reactor-port","reactor-port",4649590590),port,new cljs.core.Keyword(null,"worker","worker",4526786288),worker,new cljs.core.Keyword(null,"commands","commands",4706336250),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"editor.elm.lint","editor.elm.lint",1086056222),null,new cljs.core.Keyword(null,"editor.elm.make","editor.elm.make",1086078217),null,new cljs.core.Keyword(null,"editor.elm.ast.passthrough","editor.elm.ast.passthrough",3082755153),null,new cljs.core.Keyword(null,"editor.eval.elm","editor.eval.elm",1083015975),null,new cljs.core.Keyword(null,"editor.elm.hint","editor.elm.hint",1085937058),null,new cljs.core.Keyword(null,"elm.repl.restart","elm.repl.restart",2931654218),null,new cljs.core.Keyword(null,"editor.elm.ast.parsetext","editor.elm.ast.parsetext",1992138717),null,new cljs.core.Keyword(null,"docs.elm.search","docs.elm.search",737241333),null,new cljs.core.Keyword(null,"editor.elm.doc","editor.elm.doc",1570413537),null,new cljs.core.Keyword(null,"editor.elm.gendoc","editor.elm.gendoc",1485628611),null,new cljs.core.Keyword(null,"elm.reload.ast","elm.reload.ast",3046520423),null], null), null)], null));
return lt.object.add_behavior_BANG_.call(null,client,new cljs.core.Keyword("lt.plugins.elm-light.clients","send!","lt.plugins.elm-light.clients/send!",867013595));
});})(map__11846,map__11846__$1,props,client,proj_path,path))
);
});
lt.plugins.elm_light.clients.try_connect = (function try_connect(p__11847){var map__11849 = p__11847;var map__11849__$1 = ((cljs.core.seq_QMARK_.call(null,map__11849))?cljs.core.apply.call(null,cljs.core.hash_map,map__11849):map__11849);var props = map__11849__$1;var info = cljs.core.get.call(null,map__11849__$1,new cljs.core.Keyword(null,"info","info",1017141280));var path = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(info);var proj_path = lt.plugins.elm_light.utils.project_path.call(null,path);var client = lt.objs.clients.client_BANG_.call(null,new cljs.core.Keyword(null,"elm-client","elm-client",1622336068));if(cljs.core.truth_(proj_path))
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
lt.plugins.elm_light.clients.__BEH__elm_doc_search_results = (function __BEH__elm_doc_search_results(_,p__11850){var vec__11852 = p__11850;var client_id = cljs.core.nth.call(null,vec__11852,0,null);var command = cljs.core.nth.call(null,vec__11852,1,null);var msg = cljs.core.nth.call(null,vec__11852,2,null);cljs.core.println.call(null,"Here !");
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
lt.plugins.elm_light.docpreview.preview_skeleton = (function preview_skeleton(this$){var e__6289__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"elm-doc-preview"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"Generating elm docs, please wait a little..."], null)], null));var seq__11892_11916 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__11893_11917 = null;var count__11894_11918 = 0;var i__11895_11919 = 0;while(true){
if((i__11895_11919 < count__11894_11918))
{var vec__11896_11920 = cljs.core._nth.call(null,chunk__11893_11917,i__11895_11919);var ev__6290__auto___11921 = cljs.core.nth.call(null,vec__11896_11920,0,null);var func__6291__auto___11922 = cljs.core.nth.call(null,vec__11896_11920,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___11921,func__6291__auto___11922);
{
var G__11923 = seq__11892_11916;
var G__11924 = chunk__11893_11917;
var G__11925 = count__11894_11918;
var G__11926 = (i__11895_11919 + 1);
seq__11892_11916 = G__11923;
chunk__11893_11917 = G__11924;
count__11894_11918 = G__11925;
i__11895_11919 = G__11926;
continue;
}
} else
{var temp__4092__auto___11927 = cljs.core.seq.call(null,seq__11892_11916);if(temp__4092__auto___11927)
{var seq__11892_11928__$1 = temp__4092__auto___11927;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11892_11928__$1))
{var c__5632__auto___11929 = cljs.core.chunk_first.call(null,seq__11892_11928__$1);{
var G__11930 = cljs.core.chunk_rest.call(null,seq__11892_11928__$1);
var G__11931 = c__5632__auto___11929;
var G__11932 = cljs.core.count.call(null,c__5632__auto___11929);
var G__11933 = 0;
seq__11892_11916 = G__11930;
chunk__11893_11917 = G__11931;
count__11894_11918 = G__11932;
i__11895_11919 = G__11933;
continue;
}
} else
{var vec__11897_11934 = cljs.core.first.call(null,seq__11892_11928__$1);var ev__6290__auto___11935 = cljs.core.nth.call(null,vec__11897_11934,0,null);var func__6291__auto___11936 = cljs.core.nth.call(null,vec__11897_11934,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___11935,func__6291__auto___11936);
{
var G__11937 = cljs.core.next.call(null,seq__11892_11928__$1);
var G__11938 = null;
var G__11939 = 0;
var G__11940 = 0;
seq__11892_11916 = G__11937;
chunk__11893_11917 = G__11938;
count__11894_11918 = G__11939;
i__11895_11919 = G__11940;
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
lt.plugins.elm_light.docpreview.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___11941 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___11941))
{var ts_11942 = temp__4092__auto___11941;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_11942))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_11942);
} else
{}
} else
{}
var temp__4092__auto___11943 = new cljs.core.Keyword(null,"owner-ed","owner-ed",2677003627).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___11943))
{var ed_11944 = temp__4092__auto___11943;lt.object.assoc_in_BANG_.call(null,ed_11944,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elmdoc","elmdoc",4008535620)], null),null);
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
return (function (){var seq__11902 = cljs.core.seq.call(null,lt.util.dom.$$.call(null,"pre code",lt.object.__GT_content.call(null,elmdoc)));var chunk__11903 = null;var count__11904 = 0;var i__11905 = 0;while(true){
if((i__11905 < count__11904))
{var block = cljs.core._nth.call(null,chunk__11903,i__11905);hljs.highlightBlock(block);
{
var G__11945 = seq__11902;
var G__11946 = chunk__11903;
var G__11947 = count__11904;
var G__11948 = (i__11905 + 1);
seq__11902 = G__11945;
chunk__11903 = G__11946;
count__11904 = G__11947;
i__11905 = G__11948;
continue;
}
} else
{var temp__4092__auto____$1 = cljs.core.seq.call(null,seq__11902);if(temp__4092__auto____$1)
{var seq__11902__$1 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11902__$1))
{var c__5632__auto__ = cljs.core.chunk_first.call(null,seq__11902__$1);{
var G__11949 = cljs.core.chunk_rest.call(null,seq__11902__$1);
var G__11950 = c__5632__auto__;
var G__11951 = cljs.core.count.call(null,c__5632__auto__);
var G__11952 = 0;
seq__11902 = G__11949;
chunk__11903 = G__11950;
count__11904 = G__11951;
i__11905 = G__11952;
continue;
}
} else
{var block = cljs.core.first.call(null,seq__11902__$1);hljs.highlightBlock(block);
{
var G__11953 = cljs.core.next.call(null,seq__11902__$1);
var G__11954 = null;
var G__11955 = 0;
var G__11956 = 0;
seq__11902 = G__11953;
chunk__11903 = G__11954;
count__11904 = G__11955;
i__11905 = G__11956;
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
lt.plugins.elm_light.modulebrowser.resolve_module_file = (function resolve_module_file(project_path,pck_json,package$,module,version){return cljs.core.some.call(null,(function (p1__18897_SHARP_){if(cljs.core.truth_(lt.objs.files.exists_QMARK_.call(null,p1__18897_SHARP_)))
{return p1__18897_SHARP_;
} else
{return null;
}
}),cljs.core.map.call(null,(function (p1__18896_SHARP_){return lt.objs.files.join.call(null,project_path,"elm-stuff/packages",package$,version,p1__18896_SHARP_,[cljs.core.str(clojure.string.replace.call(null,module,".",lt.objs.files.separator)),cljs.core.str(".elm")].join(''));
}),new cljs.core.Keyword(null,"source-directories","source-directories",4475397259).cljs$core$IFn$_invoke$arity$1(pck_json)));
});
lt.plugins.elm_light.modulebrowser.get_exposed_modules = (function get_exposed_modules(project_path,p__18898){var map__18900 = p__18898;var map__18900__$1 = ((cljs.core.seq_QMARK_.call(null,map__18900))?cljs.core.apply.call(null,cljs.core.hash_map,map__18900):map__18900);var exact = cljs.core.get.call(null,map__18900__$1,new cljs.core.Keyword(null,"exact","exact",1110851185));var package$ = cljs.core.get.call(null,map__18900__$1,new cljs.core.Keyword(null,"package","package",4501809080));var pck_json = lt.plugins.elm_light.utils.parse_json_file.call(null,lt.objs.files.join.call(null,project_path,"elm-stuff/packages",package$,exact,"elm-package.json"));return cljs.core.map.call(null,((function (pck_json,map__18900,map__18900__$1,exact,package$){
return (function (x){return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1017277949),x,new cljs.core.Keyword(null,"packageName","packageName",1922663267),package$,new cljs.core.Keyword(null,"version","version",1365512266),exact,new cljs.core.Keyword(null,"file","file",1017047278),lt.plugins.elm_light.modulebrowser.resolve_module_file.call(null,project_path,pck_json,package$,x,exact)], null);
});})(pck_json,map__18900,map__18900__$1,exact,package$))
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
return (function (p1__18901_SHARP_){return cljs.core._EQ_.call(null,lt.objs.files.ext.call(null,p1__18901_SHARP_),"elm");
});})(pck_json))
,lt.objs.files.ls.call(null,project_path)));
} else
{return cljs.core.map.call(null,((function (pck_json){
return (function (x){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),lt.plugins.elm_light.modulebrowser.deduce_module_name.call(null,lt.objs.files.join.call(null,project_path,dir),x),new cljs.core.Keyword(null,"file","file",1017047278),x], null);
});})(pck_json))
,lt.objs.files.filter_walk.call(null,((function (pck_json){
return (function (p1__18902_SHARP_){return cljs.core._EQ_.call(null,lt.objs.files.ext.call(null,p1__18902_SHARP_),"elm");
});})(pck_json))
,lt.objs.files.join.call(null,project_path,dir)));
}
});})(pck_json))
,new cljs.core.Keyword(null,"source-directories","source-directories",4475397259).cljs$core$IFn$_invoke$arity$1(pck_json))));
});
lt.plugins.elm_light.modulebrowser.get_all_modules = (function get_all_modules(project_path){return cljs.core.concat.call(null,lt.plugins.elm_light.modulebrowser.get_project_modules.call(null,project_path),lt.plugins.elm_light.modulebrowser.get_package_modules.call(null,project_path));
});
lt.plugins.elm_light.modulebrowser.wrapper = (function wrapper(this$){var e__6289__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"elm-module-browser"], null),"Retrieving modules..."], null));var seq__18909_18925 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__18910_18926 = null;var count__18911_18927 = 0;var i__18912_18928 = 0;while(true){
if((i__18912_18928 < count__18911_18927))
{var vec__18913_18929 = cljs.core._nth.call(null,chunk__18910_18926,i__18912_18928);var ev__6290__auto___18930 = cljs.core.nth.call(null,vec__18913_18929,0,null);var func__6291__auto___18931 = cljs.core.nth.call(null,vec__18913_18929,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___18930,func__6291__auto___18931);
{
var G__18932 = seq__18909_18925;
var G__18933 = chunk__18910_18926;
var G__18934 = count__18911_18927;
var G__18935 = (i__18912_18928 + 1);
seq__18909_18925 = G__18932;
chunk__18910_18926 = G__18933;
count__18911_18927 = G__18934;
i__18912_18928 = G__18935;
continue;
}
} else
{var temp__4092__auto___18936 = cljs.core.seq.call(null,seq__18909_18925);if(temp__4092__auto___18936)
{var seq__18909_18937__$1 = temp__4092__auto___18936;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18909_18937__$1))
{var c__5632__auto___18938 = cljs.core.chunk_first.call(null,seq__18909_18937__$1);{
var G__18939 = cljs.core.chunk_rest.call(null,seq__18909_18937__$1);
var G__18940 = c__5632__auto___18938;
var G__18941 = cljs.core.count.call(null,c__5632__auto___18938);
var G__18942 = 0;
seq__18909_18925 = G__18939;
chunk__18910_18926 = G__18940;
count__18911_18927 = G__18941;
i__18912_18928 = G__18942;
continue;
}
} else
{var vec__18914_18943 = cljs.core.first.call(null,seq__18909_18937__$1);var ev__6290__auto___18944 = cljs.core.nth.call(null,vec__18914_18943,0,null);var func__6291__auto___18945 = cljs.core.nth.call(null,vec__18914_18943,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___18944,func__6291__auto___18945);
{
var G__18946 = cljs.core.next.call(null,seq__18909_18937__$1);
var G__18947 = null;
var G__18948 = 0;
var G__18949 = 0;
seq__18909_18925 = G__18946;
chunk__18910_18926 = G__18947;
count__18911_18927 = G__18948;
i__18912_18928 = G__18949;
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
lt.plugins.elm_light.hinter.__GT_hints = (function __GT_hints(token,completions){return cljs.core.map.call(null,(function (p1__15905_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"text","text",1017460895),new cljs.core.Keyword(null,"displayText","displayText",2728236161),new cljs.core.Keyword(null,"render","render",4374279432),new cljs.core.Keyword(null,"from","from",1017056028),new cljs.core.Keyword(null,"to","to",1013907949)],[new cljs.core.Keyword(null,"completion","completion",4767668046).cljs$core$IFn$_invoke$arity$1(p1__15905_SHARP_),new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(p1__15905_SHARP_),(function (el,self,data){return lt.util.dom.html.call(null,el,wrapMatch(data.displayText,{"matched": new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(token)}));
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
lt.plugins.elm_light.linter.status_class = (function status_class(p__18730){var map__18732 = p__18730;var map__18732__$1 = ((cljs.core.seq_QMARK_.call(null,map__18732))?cljs.core.apply.call(null,cljs.core.hash_map,map__18732):map__18732);var warnings = cljs.core.get.call(null,map__18732__$1,new cljs.core.Keyword(null,"warnings","warnings",1511995337));var errors = cljs.core.get.call(null,map__18732__$1,new cljs.core.Keyword(null,"errors","errors",4014236381));if((errors > 0))
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
lt.plugins.elm_light.linter.status_text = (function status_text(p__18733){var map__18735 = p__18733;var map__18735__$1 = ((cljs.core.seq_QMARK_.call(null,map__18735))?cljs.core.apply.call(null,cljs.core.hash_map,map__18735):map__18735);var warnings = cljs.core.get.call(null,map__18735__$1,new cljs.core.Keyword(null,"warnings","warnings",1511995337));var errors = cljs.core.get.call(null,map__18735__$1,new cljs.core.Keyword(null,"errors","errors",4014236381));return [cljs.core.str("Lint status: "),cljs.core.str(errors),cljs.core.str("/"),cljs.core.str(warnings)].join('');
});
lt.plugins.elm_light.linter.__GT_status_ui = (function __GT_status_ui(p__18736){var map__18738 = p__18736;var map__18738__$1 = ((cljs.core.seq_QMARK_.call(null,map__18738))?cljs.core.apply.call(null,cljs.core.hash_map,map__18738):map__18738);var lint_summary = cljs.core.get.call(null,map__18738__$1,new cljs.core.Keyword(null,"lint-summary","lint-summary",2275048270));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("lint-status "),cljs.core.str(lt.plugins.elm_light.linter.status_class.call(null,lint_summary))].join('')], null),lt.plugins.elm_light.linter.status_text.call(null,lint_summary)], null);
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
return (function (p__18741){var vec__18742 = p__18741;var k = cljs.core.nth.call(null,vec__18742,0,null);var v = cljs.core.nth.call(null,vec__18742,1,null);return new cljs.core.PersistentArrayMap.fromArray([k,cljs.core.count.call(null,v)], true, false);
});})(results,temp__4090__auto__))
,cljs.core.group_by.call(null,new cljs.core.Keyword(null,"category","category",1064415344),cljs.core.map.call(null,new cljs.core.Keyword(null,"result","result",4374444943),cljs.core.vals.call(null,results)))));
} else
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",1110689146),0,new cljs.core.Keyword(null,"warning","warning",2138350350),0], null);
}
});
lt.plugins.elm_light.linter.update_status_for_editor = (function update_status_for_editor(ed){var map__18745 = lt.plugins.elm_light.linter.grouped_lint_count.call(null,ed);var map__18745__$1 = ((cljs.core.seq_QMARK_.call(null,map__18745))?cljs.core.apply.call(null,cljs.core.hash_map,map__18745):map__18745);var warning = cljs.core.get.call(null,map__18745__$1,new cljs.core.Keyword(null,"warning","warning",2138350350));var error = cljs.core.get.call(null,map__18745__$1,new cljs.core.Keyword(null,"error","error",1110689146));return lt.object.raise.call(null,lt.plugins.elm_light.linter.statusbar_lint_summary,new cljs.core.Keyword(null,"update!","update!",779473898),((function (map__18745,map__18745__$1,warning,error){
return (function (p1__18743_SHARP_){return cljs.core.assoc.call(null,p1__18743_SHARP_,new cljs.core.Keyword(null,"warnings","warnings",1511995337),(function (){var or__4884__auto__ = warning;if(cljs.core.truth_(or__4884__auto__))
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
});})(map__18745,map__18745__$1,warning,error))
);
});
lt.plugins.elm_light.linter.__BEH__update_linter_on_editor_change = (function __BEH__update_linter_on_editor_change(ed){return lt.plugins.elm_light.linter.update_status_for_editor.call(null,ed);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.linter","update-linter-on-editor-change","lt.plugins.elm-light.linter/update-linter-on-editor-change",2858337088),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.linter.__BEH__update_linter_on_editor_change,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"focus","focus",1111509066),null], null), null));
lt.plugins.elm_light.linter.remove_widget = (function remove_widget(ed,el){try{lt.util.dom.remove.call(null,el);
}catch (e18747){var e_18807 = e18747;}return lt.objs.editor.focus.call(null,ed);
});
lt.plugins.elm_light.linter.remove_res = (function remove_res(ed,res_id){var map__18749_18808 = cljs.core.get_in.call(null,cljs.core.deref.call(null,ed),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linter-results","linter-results",4482067083),res_id], null));var map__18749_18809__$1 = ((cljs.core.seq_QMARK_.call(null,map__18749_18808))?cljs.core.apply.call(null,cljs.core.hash_map,map__18749_18808):map__18749_18808);var dill_18810 = map__18749_18809__$1;var result_18811 = cljs.core.get.call(null,map__18749_18809__$1,new cljs.core.Keyword(null,"result","result",4374444943));var mark_18812 = cljs.core.get.call(null,map__18749_18809__$1,new cljs.core.Keyword(null,"mark","mark",1017248319));if(cljs.core.truth_(mark_18812))
{mark_18812.clear();
} else
{}
lt.object.update_BANG_.call(null,ed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linter-results","linter-results",4482067083)], null),cljs.core.dissoc,res_id);
return lt.objs.editor.focus.call(null,ed);
});
lt.plugins.elm_light.linter.current_range = (function current_range(ed,mark){var rng = mark.find();var from = rng.from;var to = rng.to;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1017056028),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",1013907415),from.ch,new cljs.core.Keyword(null,"line","line",1017226086),from.line], null),new cljs.core.Keyword(null,"to","to",1013907949),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",1013907415),to.ch,new cljs.core.Keyword(null,"line","line",1017226086),to.line], null)], null);
});
lt.plugins.elm_light.linter.execute_action = (function execute_action(ed,res_id,action_fn,res){var map__18751 = cljs.core.get_in.call(null,cljs.core.deref.call(null,ed),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linter-results","linter-results",4482067083),res_id], null));var map__18751__$1 = ((cljs.core.seq_QMARK_.call(null,map__18751))?cljs.core.apply.call(null,cljs.core.hash_map,map__18751):map__18751);var mark = cljs.core.get.call(null,map__18751__$1,new cljs.core.Keyword(null,"mark","mark",1017248319));action_fn.call(null,res,lt.plugins.elm_light.linter.current_range.call(null,ed,mark));
return lt.plugins.elm_light.linter.remove_res.call(null,ed,res_id);
});
lt.plugins.elm_light.linter.action_ui = (function action_ui(ed,action,res_id,res){var e__6289__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.button","span.button",4282180040),[cljs.core.str(new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(action))].join('')], null));var seq__18758_18813 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__6289__auto__){
return (function (){return lt.plugins.elm_light.linter.execute_action.call(null,ed,res_id,new cljs.core.Keyword(null,"action","action",3885920680).cljs$core$IFn$_invoke$arity$1(action),res);
});})(e__6289__auto__))
], null)));var chunk__18759_18814 = null;var count__18760_18815 = 0;var i__18761_18816 = 0;while(true){
if((i__18761_18816 < count__18760_18815))
{var vec__18762_18817 = cljs.core._nth.call(null,chunk__18759_18814,i__18761_18816);var ev__6290__auto___18818 = cljs.core.nth.call(null,vec__18762_18817,0,null);var func__6291__auto___18819 = cljs.core.nth.call(null,vec__18762_18817,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___18818,func__6291__auto___18819);
{
var G__18820 = seq__18758_18813;
var G__18821 = chunk__18759_18814;
var G__18822 = count__18760_18815;
var G__18823 = (i__18761_18816 + 1);
seq__18758_18813 = G__18820;
chunk__18759_18814 = G__18821;
count__18760_18815 = G__18822;
i__18761_18816 = G__18823;
continue;
}
} else
{var temp__4092__auto___18824 = cljs.core.seq.call(null,seq__18758_18813);if(temp__4092__auto___18824)
{var seq__18758_18825__$1 = temp__4092__auto___18824;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18758_18825__$1))
{var c__5632__auto___18826 = cljs.core.chunk_first.call(null,seq__18758_18825__$1);{
var G__18827 = cljs.core.chunk_rest.call(null,seq__18758_18825__$1);
var G__18828 = c__5632__auto___18826;
var G__18829 = cljs.core.count.call(null,c__5632__auto___18826);
var G__18830 = 0;
seq__18758_18813 = G__18827;
chunk__18759_18814 = G__18828;
count__18760_18815 = G__18829;
i__18761_18816 = G__18830;
continue;
}
} else
{var vec__18763_18831 = cljs.core.first.call(null,seq__18758_18825__$1);var ev__6290__auto___18832 = cljs.core.nth.call(null,vec__18763_18831,0,null);var func__6291__auto___18833 = cljs.core.nth.call(null,vec__18763_18831,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___18832,func__6291__auto___18833);
{
var G__18834 = cljs.core.next.call(null,seq__18758_18825__$1);
var G__18835 = null;
var G__18836 = 0;
var G__18837 = 0;
seq__18758_18813 = G__18834;
chunk__18759_18814 = G__18835;
count__18760_18815 = G__18836;
i__18761_18816 = G__18837;
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
lt.plugins.elm_light.linter.inline_ui = (function inline_ui(ed,res_id,p__18767){var map__18775 = p__18767;var map__18775__$1 = ((cljs.core.seq_QMARK_.call(null,map__18775))?cljs.core.apply.call(null,cljs.core.hash_map,map__18775):map__18775);var res = map__18775__$1;var actions = cljs.core.get.call(null,map__18775__$1,new cljs.core.Keyword(null,"actions","actions",4147068015));var category = cljs.core.get.call(null,map__18775__$1,new cljs.core.Keyword(null,"category","category",1064415344));var details = cljs.core.get.call(null,map__18775__$1,new cljs.core.Keyword(null,"details","details",2571625908));var title = cljs.core.get.call(null,map__18775__$1,new cljs.core.Keyword(null,"title","title",1124275658));var e__6289__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tabindex","tabindex",4410954191),-1,new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("linter-res "),cljs.core.str((function (){var or__4884__auto__ = cljs.core.name.call(null,category);if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return "error";
}
})())].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.title","p.title",3057381068),title], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.details","div.details",4139669847),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),details], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),cljs.core.map.call(null,((function (map__18775,map__18775__$1,res,actions,category,details,title){
return (function (p1__18764_SHARP_){return lt.plugins.elm_light.linter.action_ui.call(null,ed,p1__18764_SHARP_,res_id,res);
});})(map__18775,map__18775__$1,res,actions,category,details,title))
,actions)], null)], null)], null));var seq__18776_18838 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blur","blur",1016931289),((function (e__6289__auto__,map__18775,map__18775__$1,res,actions,category,details,title){
return (function (p1__18765_SHARP_){return lt.plugins.elm_light.linter.remove_widget.call(null,ed,p1__18765_SHARP_.target);
});})(e__6289__auto__,map__18775,map__18775__$1,res,actions,category,details,title))
,new cljs.core.Keyword(null,"keydown","keydown",4493897459),((function (e__6289__auto__,map__18775,map__18775__$1,res,actions,category,details,title){
return (function (p1__18766_SHARP_){var kc = p1__18766_SHARP_.keyCode;if(cljs.core._EQ_.call(null,kc,27))
{lt.plugins.elm_light.linter.remove_widget.call(null,ed,p1__18766_SHARP_.target);
} else
{}
if((cljs.core._EQ_.call(null,kc,13)) && (cljs.core.seq.call(null,actions)))
{p1__18766_SHARP_.preventDefault();
p1__18766_SHARP_.stopPropagation();
return lt.plugins.elm_light.linter.execute_action.call(null,ed,res_id,new cljs.core.Keyword(null,"action","action",3885920680).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,actions)),res);
} else
{return null;
}
});})(e__6289__auto__,map__18775,map__18775__$1,res,actions,category,details,title))
], null)));var chunk__18777_18839 = null;var count__18778_18840 = 0;var i__18779_18841 = 0;while(true){
if((i__18779_18841 < count__18778_18840))
{var vec__18780_18842 = cljs.core._nth.call(null,chunk__18777_18839,i__18779_18841);var ev__6290__auto___18843 = cljs.core.nth.call(null,vec__18780_18842,0,null);var func__6291__auto___18844 = cljs.core.nth.call(null,vec__18780_18842,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___18843,func__6291__auto___18844);
{
var G__18845 = seq__18776_18838;
var G__18846 = chunk__18777_18839;
var G__18847 = count__18778_18840;
var G__18848 = (i__18779_18841 + 1);
seq__18776_18838 = G__18845;
chunk__18777_18839 = G__18846;
count__18778_18840 = G__18847;
i__18779_18841 = G__18848;
continue;
}
} else
{var temp__4092__auto___18849 = cljs.core.seq.call(null,seq__18776_18838);if(temp__4092__auto___18849)
{var seq__18776_18850__$1 = temp__4092__auto___18849;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18776_18850__$1))
{var c__5632__auto___18851 = cljs.core.chunk_first.call(null,seq__18776_18850__$1);{
var G__18852 = cljs.core.chunk_rest.call(null,seq__18776_18850__$1);
var G__18853 = c__5632__auto___18851;
var G__18854 = cljs.core.count.call(null,c__5632__auto___18851);
var G__18855 = 0;
seq__18776_18838 = G__18852;
chunk__18777_18839 = G__18853;
count__18778_18840 = G__18854;
i__18779_18841 = G__18855;
continue;
}
} else
{var vec__18781_18856 = cljs.core.first.call(null,seq__18776_18850__$1);var ev__6290__auto___18857 = cljs.core.nth.call(null,vec__18781_18856,0,null);var func__6291__auto___18858 = cljs.core.nth.call(null,vec__18781_18856,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___18857,func__6291__auto___18858);
{
var G__18859 = cljs.core.next.call(null,seq__18776_18850__$1);
var G__18860 = null;
var G__18861 = 0;
var G__18862 = 0;
seq__18776_18838 = G__18859;
chunk__18777_18839 = G__18860;
count__18778_18840 = G__18861;
i__18779_18841 = G__18862;
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
lt.plugins.elm_light.linter.add_widget = (function add_widget(ed,res_id){var map__18783 = cljs.core.get_in.call(null,cljs.core.deref.call(null,ed),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linter-results","linter-results",4482067083),res_id], null));var map__18783__$1 = ((cljs.core.seq_QMARK_.call(null,map__18783))?cljs.core.apply.call(null,cljs.core.hash_map,map__18783):map__18783);var result = cljs.core.get.call(null,map__18783__$1,new cljs.core.Keyword(null,"result","result",4374444943));var mark = cljs.core.get.call(null,map__18783__$1,new cljs.core.Keyword(null,"mark","mark",1017248319));var ui = lt.plugins.elm_light.linter.inline_ui.call(null,ed,res_id,result);var from = mark.find().from;lt.objs.editor.__GT_cm_ed.call(null,ed).addWidget(from,ui,{"scrollIntoView": true});
return lt.util.dom.focus.call(null,ui);
});
lt.plugins.elm_light.linter.create_mark = (function create_mark(ed,p__18784){var map__18786 = p__18784;var map__18786__$1 = ((cljs.core.seq_QMARK_.call(null,map__18786))?cljs.core.apply.call(null,cljs.core.hash_map,map__18786):map__18786);var code_range = cljs.core.get.call(null,map__18786__$1,new cljs.core.Keyword(null,"code-range","code-range",3297446095));var category = cljs.core.get.call(null,map__18786__$1,new cljs.core.Keyword(null,"category","category",1064415344));var from = new cljs.core.Keyword(null,"from","from",1017056028).cljs$core$IFn$_invoke$arity$1(code_range);var to = ((!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"to","to",1013907949).cljs$core$IFn$_invoke$arity$1(code_range),from)))?new cljs.core.Keyword(null,"to","to",1013907949).cljs$core$IFn$_invoke$arity$1(code_range):cljs.core.assoc.call(null,from,new cljs.core.Keyword(null,"ch","ch",1013907415),(lt.objs.editor.line_length.call(null,ed,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(from)) - 1)));return lt.objs.editor.mark.call(null,ed,from,to,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",1004015509),[cljs.core.str("lint-"),cljs.core.str((function (){var or__4884__auto__ = cljs.core.name.call(null,category);if(cljs.core.truth_(or__4884__auto__))
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
lt.plugins.elm_light.linter.__BEH__clear_linter_results_BANG_ = (function __BEH__clear_linter_results_BANG_(ed){var seq__18793_18863 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"linter-results","linter-results",4482067083).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));var chunk__18794_18864 = null;var count__18795_18865 = 0;var i__18796_18866 = 0;while(true){
if((i__18796_18866 < count__18795_18865))
{var vec__18797_18867 = cljs.core._nth.call(null,chunk__18794_18864,i__18796_18866);var id_18868 = cljs.core.nth.call(null,vec__18797_18867,0,null);var res_18869 = cljs.core.nth.call(null,vec__18797_18867,1,null);var temp__4092__auto___18870 = new cljs.core.Keyword(null,"mark","mark",1017248319).cljs$core$IFn$_invoke$arity$1(res_18869);if(cljs.core.truth_(temp__4092__auto___18870))
{var m_18871 = temp__4092__auto___18870;m_18871.clear();
} else
{}
var temp__4092__auto___18872 = new cljs.core.Keyword(null,"widget","widget",4520824246).cljs$core$IFn$_invoke$arity$1(res_18869);if(cljs.core.truth_(temp__4092__auto___18872))
{var w_18873 = temp__4092__auto___18872;lt.util.dom.remove.call(null,w_18873);
} else
{}
{
var G__18874 = seq__18793_18863;
var G__18875 = chunk__18794_18864;
var G__18876 = count__18795_18865;
var G__18877 = (i__18796_18866 + 1);
seq__18793_18863 = G__18874;
chunk__18794_18864 = G__18875;
count__18795_18865 = G__18876;
i__18796_18866 = G__18877;
continue;
}
} else
{var temp__4092__auto___18878 = cljs.core.seq.call(null,seq__18793_18863);if(temp__4092__auto___18878)
{var seq__18793_18879__$1 = temp__4092__auto___18878;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18793_18879__$1))
{var c__5632__auto___18880 = cljs.core.chunk_first.call(null,seq__18793_18879__$1);{
var G__18881 = cljs.core.chunk_rest.call(null,seq__18793_18879__$1);
var G__18882 = c__5632__auto___18880;
var G__18883 = cljs.core.count.call(null,c__5632__auto___18880);
var G__18884 = 0;
seq__18793_18863 = G__18881;
chunk__18794_18864 = G__18882;
count__18795_18865 = G__18883;
i__18796_18866 = G__18884;
continue;
}
} else
{var vec__18798_18885 = cljs.core.first.call(null,seq__18793_18879__$1);var id_18886 = cljs.core.nth.call(null,vec__18798_18885,0,null);var res_18887 = cljs.core.nth.call(null,vec__18798_18885,1,null);var temp__4092__auto___18888__$1 = new cljs.core.Keyword(null,"mark","mark",1017248319).cljs$core$IFn$_invoke$arity$1(res_18887);if(cljs.core.truth_(temp__4092__auto___18888__$1))
{var m_18889 = temp__4092__auto___18888__$1;m_18889.clear();
} else
{}
var temp__4092__auto___18890__$1 = new cljs.core.Keyword(null,"widget","widget",4520824246).cljs$core$IFn$_invoke$arity$1(res_18887);if(cljs.core.truth_(temp__4092__auto___18890__$1))
{var w_18891 = temp__4092__auto___18890__$1;lt.util.dom.remove.call(null,w_18891);
} else
{}
{
var G__18892 = cljs.core.next.call(null,seq__18793_18879__$1);
var G__18893 = null;
var G__18894 = 0;
var G__18895 = 0;
seq__18793_18863 = G__18892;
chunk__18794_18864 = G__18893;
count__18795_18865 = G__18894;
i__18796_18866 = G__18895;
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
lt.plugins.elm_light.linter.find_current_lint_mark = (function find_current_lint_mark(ed){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__18799_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"linter","linter",4206213986),p1__18799_SHARP_.lttype);
}),lt.objs.editor.find_marks.call(null,ed,lt.objs.editor.__GT_cursor.call(null,ed))));
});
lt.plugins.elm_light.linter.get_widget_by_mark = (function get_widget_by_mark(ed,mark){return cljs.core.get_in.call(null,cljs.core.deref.call(null,ed),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linter-results","linter-results",4482067083),mark.ltlintid,new cljs.core.Keyword(null,"widget","widget",4520824246)], null));
});
lt.plugins.elm_light.linter.mark__GT_pos = (function mark__GT_pos(mark){var cm_pos = mark.find().from;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",1013907415),cm_pos.ch,new cljs.core.Keyword(null,"line","line",1017226086),cm_pos.line], null);
});
lt.plugins.elm_light.linter.get_all_lint_marks = (function get_all_lint_marks(ed){return cljs.core.sort_by.call(null,(function (p1__18801_SHARP_){return cljs.core.juxt.call(null,new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"ch","ch",1013907415)).call(null,lt.plugins.elm_light.linter.mark__GT_pos.call(null,p1__18801_SHARP_));
}),cljs.core.filter.call(null,(function (p1__18800_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"linter","linter",4206213986),p1__18800_SHARP_.lttype);
}),lt.objs.editor.__GT_cm_ed.call(null,ed).getAllMarks()));
});
lt.plugins.elm_light.linter.split_with_mark = (function split_with_mark(ed){var all_marks = lt.plugins.elm_light.linter.get_all_lint_marks.call(null,ed);var curr_mark = lt.plugins.elm_light.linter.find_current_lint_mark.call(null,ed);return cljs.core.split_with.call(null,((function (all_marks,curr_mark){
return (function (p1__18802_SHARP_){return !(cljs.core._EQ_.call(null,(cljs.core.truth_(curr_mark)?curr_mark.ltlintid:null),p1__18802_SHARP_.ltlintid));
});})(all_marks,curr_mark))
,all_marks);
});
lt.plugins.elm_light.linter.find_next_mark = (function find_next_mark(ed){var vec__18804 = lt.plugins.elm_light.linter.split_with_mark.call(null,ed);var ms1 = cljs.core.nth.call(null,vec__18804,0,null);var ms2 = cljs.core.nth.call(null,vec__18804,1,null);return cljs.core.first.call(null,cljs.core.into.call(null,cljs.core.vec.call(null,cljs.core.drop.call(null,1,ms2)),ms1));
});
lt.plugins.elm_light.linter.find_prev_mark = (function find_prev_mark(ed){var vec__18806 = lt.plugins.elm_light.linter.split_with_mark.call(null,ed);var ms1 = cljs.core.nth.call(null,vec__18806,0,null);var ms2 = cljs.core.nth.call(null,vec__18806,1,null);return cljs.core.first.call(null,cljs.core.into.call(null,cljs.core.reverse.call(null,cljs.core.drop.call(null,1,ms2)),ms1));
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
lt.plugins.elm_light.__GT_lt_range = (function __GT_lt_range(p__19224){var map__19226 = p__19224;var map__19226__$1 = ((cljs.core.seq_QMARK_.call(null,map__19226))?cljs.core.apply.call(null,cljs.core.hash_map,map__19226):map__19226);var end = cljs.core.get.call(null,map__19226__$1,new cljs.core.Keyword(null,"end","end",1014004813));var start = cljs.core.get.call(null,map__19226__$1,new cljs.core.Keyword(null,"start","start",1123661780));return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1017056028),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",1013907415),(new cljs.core.Keyword(null,"column","column",3954034376).cljs$core$IFn$_invoke$arity$1(start) - 1),new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(start) - 1)], null),new cljs.core.Keyword(null,"to","to",1013907949),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",1013907415),(new cljs.core.Keyword(null,"column","column",3954034376).cljs$core$IFn$_invoke$arity$1(end) - 1),new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(end) - 1)], null)], null);
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
lt.plugins.elm_light.linter_action = (function linter_action(ed,row){var G__19238 = new cljs.core.Keyword(null,"tag","tag",1014018828).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core._EQ_.call(null,"TYPE MISMATCH",G__19238))
{var ann = lt.plugins.elm_light.maybe_strip_hint.call(null,lt.plugins.elm_light.maybe_trim.call(null,cljs.core.second.call(null,cljs.core.re_find.call(null,/But I am inferring that the definition has this type:([\s\S]*$)/m,new cljs.core.Keyword(null,"details","details",2571625908).cljs$core$IFn$_invoke$arity$1(row)))));if(cljs.core.truth_((function (){var and__4872__auto__ = ann;if(cljs.core.truth_(and__4872__auto__))
{return cljs.core.not.call(null,lt.plugins.elm_light.str_contains_QMARK_.call(null,ann,"..."));
} else
{return and__4872__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",1017460895),"Fix annotation",new cljs.core.Keyword(null,"action","action",3885920680),((function (ann,G__19238){
return (function (_,p__19239){var map__19240 = p__19239;var map__19240__$1 = ((cljs.core.seq_QMARK_.call(null,map__19240))?cljs.core.apply.call(null,cljs.core.hash_map,map__19240):map__19240);var to = cljs.core.get.call(null,map__19240__$1,new cljs.core.Keyword(null,"to","to",1013907949));var from = cljs.core.get.call(null,map__19240__$1,new cljs.core.Keyword(null,"from","from",1017056028));return lt.objs.editor.replace.call(null,ed,from,to,ann);
});})(ann,G__19238))
], null)], null);
} else
{return cljs.core.PersistentVector.EMPTY;
}
} else
{if(cljs.core._EQ_.call(null,"NAMING ERROR",G__19238))
{var fixes = cljs.core.filter.call(null,cljs.core.seq,cljs.core.map.call(null,clojure.string.trim,clojure.string.split_lines.call(null,cljs.core.second.call(null,cljs.core.re_find.call(null,/Maybe you want one of the following\?(:?[\s\S]*$)/m,new cljs.core.Keyword(null,"details","details",2571625908).cljs$core$IFn$_invoke$arity$1(row))))));return cljs.core.map.call(null,((function (fixes,G__19238){
return (function (suggestion){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",1017460895),suggestion,new cljs.core.Keyword(null,"action","action",3885920680),((function (fixes,G__19238){
return (function (_,p__19241){var map__19242 = p__19241;var map__19242__$1 = ((cljs.core.seq_QMARK_.call(null,map__19242))?cljs.core.apply.call(null,cljs.core.hash_map,map__19242):map__19242);var to = cljs.core.get.call(null,map__19242__$1,new cljs.core.Keyword(null,"to","to",1013907949));var from = cljs.core.get.call(null,map__19242__$1,new cljs.core.Keyword(null,"from","from",1017056028));return lt.objs.editor.replace.call(null,ed,from,to,suggestion);
});})(fixes,G__19238))
], null);
});})(fixes,G__19238))
,fixes);
} else
{if(cljs.core._EQ_.call(null,"missing type annotation",G__19238))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",1017460895),"Add",new cljs.core.Keyword(null,"action","action",3885920680),((function (G__19238){
return (function (p__19243,p__19244){var map__19245 = p__19243;var map__19245__$1 = ((cljs.core.seq_QMARK_.call(null,map__19245))?cljs.core.apply.call(null,cljs.core.hash_map,map__19245):map__19245);var details = cljs.core.get.call(null,map__19245__$1,new cljs.core.Keyword(null,"details","details",2571625908));var map__19246 = p__19244;var map__19246__$1 = ((cljs.core.seq_QMARK_.call(null,map__19246))?cljs.core.apply.call(null,cljs.core.hash_map,map__19246):map__19246);var from = cljs.core.get.call(null,map__19246__$1,new cljs.core.Keyword(null,"from","from",1017056028));var ann = [cljs.core.str(clojure.string.trim.call(null,cljs.core.second.call(null,cljs.core.re_find.call(null,/I inferred the type annotation so you can copy it into your code:([\s\S]*$)/m,details)))),cljs.core.str("\n")].join('');return lt.objs.editor.replace.call(null,ed,from,ann);
});})(G__19238))
], null)], null);
} else
{if(cljs.core._EQ_.call(null,"unused import",G__19238))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",1017460895),"Remove",new cljs.core.Keyword(null,"action","action",3885920680),((function (G__19238){
return (function (_,p__19247){var map__19248 = p__19247;var map__19248__$1 = ((cljs.core.seq_QMARK_.call(null,map__19248))?cljs.core.apply.call(null,cljs.core.hash_map,map__19248):map__19248);var to = cljs.core.get.call(null,map__19248__$1,new cljs.core.Keyword(null,"to","to",1013907949));var from = cljs.core.get.call(null,map__19248__$1,new cljs.core.Keyword(null,"from","from",1017056028));lt.objs.editor.replace.call(null,ed,from,to,"");
return CodeMirror.commands.deleteLine(lt.objs.editor.__GT_cm_ed.call(null,ed));
});})(G__19238))
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
if(cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__19249_SHARP_){return cljs.core._EQ_.call(null,"error",new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(p1__19249_SHARP_));
}),res)))
{lt.objs.notifos.set_msg_BANG_.call(null,"Elm make returned errors; check you editor or the console for details",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
} else
{}
var seq__19256 = cljs.core.seq.call(null,res);var chunk__19257 = null;var count__19258 = 0;var i__19259 = 0;while(true){
if((i__19259 < count__19258))
{var map__19260 = cljs.core._nth.call(null,chunk__19257,i__19259);var map__19260__$1 = ((cljs.core.seq_QMARK_.call(null,map__19260))?cljs.core.apply.call(null,cljs.core.hash_map,map__19260):map__19260);var row = map__19260__$1;var tag = cljs.core.get.call(null,map__19260__$1,new cljs.core.Keyword(null,"tag","tag",1014018828));var subregion = cljs.core.get.call(null,map__19260__$1,new cljs.core.Keyword(null,"subregion","subregion",1501636774));var region = cljs.core.get.call(null,map__19260__$1,new cljs.core.Keyword(null,"region","region",4374076006));var details = cljs.core.get.call(null,map__19260__$1,new cljs.core.Keyword(null,"details","details",2571625908));var overview = cljs.core.get.call(null,map__19260__$1,new cljs.core.Keyword(null,"overview","overview",1544020203));var type = cljs.core.get.call(null,map__19260__$1,new cljs.core.Keyword(null,"type","type",1017479852));var file = cljs.core.get.call(null,map__19260__$1,new cljs.core.Keyword(null,"file","file",1017047278));var msg_19276 = [cljs.core.str(overview),cljs.core.str("\n"),cljs.core.str(lt.plugins.elm_light.colorize_msg.call(null,details))].join('');if(cljs.core.truth_((function (){var and__4872__auto__ = cljs.core._EQ_.call(null,path,file);if(and__4872__auto__)
{return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["error",null,"warning",null], null), null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [type], null));
} else
{return and__4872__auto__;
}
})()))
{lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"linter-result!","linter-result!",4482067001),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",1124275658),tag,new cljs.core.Keyword(null,"details","details",2571625908),msg_19276,new cljs.core.Keyword(null,"category","category",1064415344),cljs.core.keyword.call(null,type),new cljs.core.Keyword(null,"actions","actions",4147068015),lt.plugins.elm_light.linter_action.call(null,ed,row),new cljs.core.Keyword(null,"code-range","code-range",3297446095),lt.plugins.elm_light.__GT_lt_range.call(null,(function (){var or__4884__auto__ = subregion;if(cljs.core.truth_(or__4884__auto__))
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
var G__19277 = seq__19256;
var G__19278 = chunk__19257;
var G__19279 = count__19258;
var G__19280 = (i__19259 + 1);
seq__19256 = G__19277;
chunk__19257 = G__19278;
count__19258 = G__19279;
i__19259 = G__19280;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__19256);if(temp__4092__auto__)
{var seq__19256__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19256__$1))
{var c__5632__auto__ = cljs.core.chunk_first.call(null,seq__19256__$1);{
var G__19281 = cljs.core.chunk_rest.call(null,seq__19256__$1);
var G__19282 = c__5632__auto__;
var G__19283 = cljs.core.count.call(null,c__5632__auto__);
var G__19284 = 0;
seq__19256 = G__19281;
chunk__19257 = G__19282;
count__19258 = G__19283;
i__19259 = G__19284;
continue;
}
} else
{var map__19261 = cljs.core.first.call(null,seq__19256__$1);var map__19261__$1 = ((cljs.core.seq_QMARK_.call(null,map__19261))?cljs.core.apply.call(null,cljs.core.hash_map,map__19261):map__19261);var row = map__19261__$1;var tag = cljs.core.get.call(null,map__19261__$1,new cljs.core.Keyword(null,"tag","tag",1014018828));var subregion = cljs.core.get.call(null,map__19261__$1,new cljs.core.Keyword(null,"subregion","subregion",1501636774));var region = cljs.core.get.call(null,map__19261__$1,new cljs.core.Keyword(null,"region","region",4374076006));var details = cljs.core.get.call(null,map__19261__$1,new cljs.core.Keyword(null,"details","details",2571625908));var overview = cljs.core.get.call(null,map__19261__$1,new cljs.core.Keyword(null,"overview","overview",1544020203));var type = cljs.core.get.call(null,map__19261__$1,new cljs.core.Keyword(null,"type","type",1017479852));var file = cljs.core.get.call(null,map__19261__$1,new cljs.core.Keyword(null,"file","file",1017047278));var msg_19285 = [cljs.core.str(overview),cljs.core.str("\n"),cljs.core.str(lt.plugins.elm_light.colorize_msg.call(null,details))].join('');if(cljs.core.truth_((function (){var and__4872__auto__ = cljs.core._EQ_.call(null,path,file);if(and__4872__auto__)
{return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["error",null,"warning",null], null), null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [type], null));
} else
{return and__4872__auto__;
}
})()))
{lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"linter-result!","linter-result!",4482067001),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",1124275658),tag,new cljs.core.Keyword(null,"details","details",2571625908),msg_19285,new cljs.core.Keyword(null,"category","category",1064415344),cljs.core.keyword.call(null,type),new cljs.core.Keyword(null,"actions","actions",4147068015),lt.plugins.elm_light.linter_action.call(null,ed,row),new cljs.core.Keyword(null,"code-range","code-range",3297446095),lt.plugins.elm_light.__GT_lt_range.call(null,(function (){var or__4884__auto__ = subregion;if(cljs.core.truth_(or__4884__auto__))
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
var G__19286 = cljs.core.next.call(null,seq__19256__$1);
var G__19287 = null;
var G__19288 = 0;
var G__19289 = 0;
seq__19256 = G__19286;
chunk__19257 = G__19287;
count__19258 = G__19288;
i__19259 = G__19289;
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
lt.plugins.elm_light.__BEH__make_project = (function __BEH__make_project(ed){var info = new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed));var project_path = lt.plugins.elm_light.utils.project_path.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(info));var map__19263 = new cljs.core.Keyword(null,"make-info","make-info",2233727135).cljs$core$IFn$_invoke$arity$1(lt.plugins.elm_light.utils.parse_json_file.call(null,lt.objs.files.join.call(null,project_path,"elm-package.json")));var map__19263__$1 = ((cljs.core.seq_QMARK_.call(null,map__19263))?cljs.core.apply.call(null,cljs.core.hash_map,map__19263):map__19263);var out = cljs.core.get.call(null,map__19263__$1,new cljs.core.Keyword(null,"out","out",1014014656));var main = cljs.core.get.call(null,map__19263__$1,new cljs.core.Keyword(null,"main","main",1017248043));if(cljs.core.truth_((function (){var and__4872__auto__ = main;if(cljs.core.truth_(and__4872__auto__))
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
lt.plugins.elm_light.__BEH__elm_make_res = (function __BEH__elm_make_res(ed,p__19264){var map__19266 = p__19264;var map__19266__$1 = ((cljs.core.seq_QMARK_.call(null,map__19266))?cljs.core.apply.call(null,cljs.core.hash_map,map__19266):map__19266);var res = cljs.core.get.call(null,map__19266__$1,new cljs.core.Keyword(null,"res","res",1014017042));var outputFile = cljs.core.get.call(null,map__19266__$1,new cljs.core.Keyword(null,"outputFile","outputFile",4034596239));lt.objs.notifos.done_working.call(null,[cljs.core.str("Elm make compiled to: "),cljs.core.str(outputFile)].join(''));
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
lt.plugins.elm_light.__BEH__eval_BANG_ = (function __BEH__eval_BANG_(this$,event){var map__19268 = event;var map__19268__$1 = ((cljs.core.seq_QMARK_.call(null,map__19268))?cljs.core.apply.call(null,cljs.core.hash_map,map__19268):map__19268);var origin = cljs.core.get.call(null,map__19268__$1,new cljs.core.Keyword(null,"origin","origin",4300251800));var info = cljs.core.get.call(null,map__19268__$1,new cljs.core.Keyword(null,"info","info",1017141280));lt.objs.notifos.working.call(null,"Evaluating elm...");
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
lt.plugins.elm_light.__BEH__repl_restart_BANG_ = (function __BEH__repl_restart_BANG_(p__19269){var map__19271 = p__19269;var map__19271__$1 = ((cljs.core.seq_QMARK_.call(null,map__19271))?cljs.core.apply.call(null,cljs.core.hash_map,map__19271):map__19271);var ed = map__19271__$1;var info = cljs.core.get.call(null,map__19271__$1,new cljs.core.Keyword(null,"info","info",1017141280));var temp__4092__auto__ = new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));if(cljs.core.truth_(temp__4092__auto__))
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
var b_19290 = (function (){var or__4884__auto__ = cljs.core.first.call(null,lt.object.by_tag.call(null,new cljs.core.Keyword(null,"browser","browser",1164844698)));if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return lt.objs.browser.add.call(null);
}
})();var get_url_19291 = ((function (b_19290,path,client){
return (function (){return [cljs.core.str("http://localhost:"),cljs.core.str(new cljs.core.Keyword(null,"reactor-port","reactor-port",4649590590).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client))),cljs.core.str(path),cljs.core.str((cljs.core.truth_(debug_QMARK_)?"?debug":""))].join('');
});})(b_19290,path,client))
;if(cljs.core.truth_(new cljs.core.Keyword(null,"connected","connected",4729661051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client))))
{lt.object.raise.call(null,b_19290,new cljs.core.Keyword(null,"navigate!","navigate!",1766726722),get_url_19291.call(null));
} else
{lt.util.js.wait.call(null,100,((function (b_19290,get_url_19291,path,client){
return (function (){return lt.object.raise.call(null,b_19290,new cljs.core.Keyword(null,"navigate!","navigate!",1766726722),get_url_19291.call(null));
});})(b_19290,get_url_19291,path,client))
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
lt.plugins.elm_light.__BEH__elm_parse_editor_result = (function __BEH__elm_parse_editor_result(ed,res){var temp__4090__auto___19292 = new cljs.core.Keyword(null,"error","error",1110689146).cljs$core$IFn$_invoke$arity$1(res);if(cljs.core.truth_(temp__4090__auto___19292))
{var error_19293 = temp__4090__auto___19292;lt.object.update_BANG_.call(null,ed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast-status","ast-status",2421112079)], null),cljs.core.assoc,new cljs.core.Keyword(null,"status","status",4416389988),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"error","error",1110689146),error_19293);
} else
{var path_19294 = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));lt.object.update_BANG_.call(null,ed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast-status","ast-status",2421112079)], null),cljs.core.assoc,new cljs.core.Keyword(null,"status","status",4416389988),new cljs.core.Keyword(null,"ok","ok",1013907790),new cljs.core.Keyword(null,"error","error",1110689146),null);
lt.plugins.elm_light.elm_ast.upsert_ast_BANG_.call(null,lt.plugins.elm_light.utils.project_path.call(null,path_19294),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",1017047278),path_19294,new cljs.core.Keyword(null,"ast","ast",1014001140),new cljs.core.Keyword(null,"ast","ast",1014001140).cljs$core$IFn$_invoke$arity$1(res)], null));
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
{var map__19273 = lt.plugins.elm_light.elm_ast.__GT_range.call(null,new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(exposing));var map__19273__$1 = ((cljs.core.seq_QMARK_.call(null,map__19273))?cljs.core.apply.call(null,cljs.core.hash_map,map__19273):map__19273);var end = cljs.core.get.call(null,map__19273__$1,new cljs.core.Keyword(null,"end","end",1014004813));var start = cljs.core.get.call(null,map__19273__$1,new cljs.core.Keyword(null,"start","start",1123661780));var upd_exp = lt.plugins.elm_light.elm_ast.expose_decl.call(null,decl,exposing);var bm = lt.objs.editor.bookmark.call(null,ed,lt.objs.editor.__GT_cursor.call(null,ed));lt.objs.editor.replace.call(null,ed,start,end,lt.plugins.elm_light.elm_ast.print_exposing.call(null,upd_exp));
return lt.objs.editor.move_cursor.call(null,ed,lt.plugins.elm_light.cm_pos__GT_pos.call(null,bm.find()));
}
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light","elm-expose-top-level","lt.plugins.elm-light/elm-expose-top-level",2519767763),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.__BEH__elm_expose_top_level,new cljs.core.Keyword(null,"desc","desc",1016984067),"Behavior to expose top level Elm declaration",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elm.expose.top.level","elm.expose.top.level",3091507131),null], null), null));
lt.plugins.elm_light.__BEH__elm_unexpose_top_level = (function __BEH__elm_unexpose_top_level(ed){var path = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));var prj_path = lt.plugins.elm_light.utils.project_path.call(null,path);var module = lt.plugins.elm_light.elm_ast.get_module_ast.call(null,prj_path,path);var exposing = new cljs.core.Keyword(null,"exposing","exposing",3382854387).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"moduleDeclaration","moduleDeclaration",1240624864).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",1014001140).cljs$core$IFn$_invoke$arity$1(module)));var temp__4092__auto__ = lt.plugins.elm_light.elm_ast.find_top_level_declaration_by_pos.call(null,lt.objs.editor.__GT_cursor.call(null,ed),module);if(cljs.core.truth_(temp__4092__auto__))
{var decl = temp__4092__auto__;if((lt.plugins.elm_light.elm_ast.exposed_by_module_QMARK_.call(null,module,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(decl))) && (!(lt.plugins.elm_light.elm_ast.exposeAll_QMARK_.call(null,exposing))))
{var map__19275 = lt.plugins.elm_light.elm_ast.__GT_range.call(null,new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(exposing));var map__19275__$1 = ((cljs.core.seq_QMARK_.call(null,map__19275))?cljs.core.apply.call(null,cljs.core.hash_map,map__19275):map__19275);var end = cljs.core.get.call(null,map__19275__$1,new cljs.core.Keyword(null,"end","end",1014004813));var start = cljs.core.get.call(null,map__19275__$1,new cljs.core.Keyword(null,"start","start",1123661780));var upd_exp = lt.plugins.elm_light.elm_ast.unexpose_decl.call(null,decl,exposing);var bm = lt.objs.editor.bookmark.call(null,ed,lt.objs.editor.__GT_cursor.call(null,ed));lt.objs.editor.replace.call(null,ed,start,end,lt.plugins.elm_light.elm_ast.print_exposing.call(null,upd_exp));
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
}catch (e12026){var e = e12026;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,e.message], null);
}});
/**
* Format file or all elm files in dir using elm-format.
* If successful returns [true nil]
* If errors returns [false err]
*/
lt.plugins.elm_light.format.format_path = (function format_path(cwd,path){try{require("child_process").execSync([cljs.core.str("elm-format --yes "),cljs.core.str(path)].join(''),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cwd","cwd",1014003170),cwd,new cljs.core.Keyword(null,"stdio","stdio",1123664379),"pipe"], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);
}catch (e12028){var e = e12028;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,e.message], null);
}});
lt.plugins.elm_light.format.handle_format_error = (function handle_format_error(err){lt.objs.notifos.set_msg_BANG_.call(null,"Elm format reported errors. See console for details",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),"error",new cljs.core.Keyword(null,"timeout","timeout",3994960083),5000], null));
return lt.objs.console.error.call(null,err);
});
lt.plugins.elm_light.format.__BEH__elm_format = (function __BEH__elm_format(ed){var temp__4092__auto__ = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));if(cljs.core.truth_(temp__4092__auto__))
{var path = temp__4092__auto__;var pos = lt.objs.editor.__GT_cursor.call(null,ed);var vec__12030 = lt.plugins.elm_light.format.format_path.call(null,lt.plugins.elm_light.utils.project_path.call(null,path),path);var ok_QMARK_ = cljs.core.nth.call(null,vec__12030,0,null);var res = cljs.core.nth.call(null,vec__12030,1,null);if(cljs.core.truth_(ok_QMARK_))
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
{var map__12033 = temp__4092__auto__;var map__12033__$1 = ((cljs.core.seq_QMARK_.call(null,map__12033))?cljs.core.apply.call(null,cljs.core.hash_map,map__12033):map__12033);var to = cljs.core.get.call(null,map__12033__$1,new cljs.core.Keyword(null,"to","to",1013907949));var from = cljs.core.get.call(null,map__12033__$1,new cljs.core.Keyword(null,"from","from",1017056028));var vec__12034 = lt.plugins.elm_light.format.format_input.call(null,cwd,lt.objs.editor.range.call(null,ed,from,to));var ok_QMARK_ = cljs.core.nth.call(null,vec__12034,0,null);var res = cljs.core.nth.call(null,vec__12034,1,null);if(cljs.core.truth_(ok_QMARK_))
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
lt.plugins.elm_light.format.__BEH__elm_format_buffer = (function __BEH__elm_format_buffer(ed){var pos = lt.objs.editor.__GT_cursor.call(null,ed);var vec__12036 = lt.plugins.elm_light.format.format_input.call(null,lt.plugins.elm_light.utils.project_path.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)))),lt.objs.editor.__GT_val.call(null,ed));var ok_QMARK_ = cljs.core.nth.call(null,vec__12036,0,null);var res = cljs.core.nth.call(null,vec__12036,1,null);if(cljs.core.truth_(ok_QMARK_))
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