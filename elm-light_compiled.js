if(!lt.util.load.provided_QMARK_('lt.plugins.elm-light.elm-ast')) {
goog.provide('lt.plugins.elm_light.elm_ast');
goog.require('cljs.core');
goog.require('crate.binding');
goog.require('lt.objs.statusbar');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.statusbar');
goog.require('crate.binding');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.console');
goog.require('lt.objs.editor');
goog.require('lt.objs.console');
goog.require('lt.objs.editor.pool');
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
lt.plugins.elm_light.elm_ast.upsert_ast_BANG_ = (function upsert_ast_BANG_(project,file_ast){var prj_idx = lt.plugins.elm_light.elm_ast.idx_of.call(null,(function (p1__11805_SHARP_){return cljs.core._EQ_.call(null,project,new cljs.core.Keyword(null,"project","project",704593547).cljs$core$IFn$_invoke$arity$1(p1__11805_SHARP_));
}),cljs.core.deref.call(null,lt.plugins.elm_light.elm_ast.project_asts));if(cljs.core.truth_(prj_idx))
{return cljs.core.swap_BANG_.call(null,lt.plugins.elm_light.elm_ast.project_asts,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prj_idx,new cljs.core.Keyword(null,"file-asts","file-asts",3945857876)], null),((function (prj_idx){
return (function (file_asts){return cljs.core.conj.call(null,cljs.core.filterv.call(null,((function (prj_idx){
return (function (p1__11806_SHARP_){return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"file","file",1017047278).cljs$core$IFn$_invoke$arity$1(file_ast),new cljs.core.Keyword(null,"file","file",1017047278).cljs$core$IFn$_invoke$arity$1(p1__11806_SHARP_));
});})(prj_idx))
,file_asts),file_ast);
});})(prj_idx))
);
} else
{return cljs.core.swap_BANG_.call(null,lt.plugins.elm_light.elm_ast.project_asts,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"project","project",704593547),project,new cljs.core.Keyword(null,"file-asts","file-asts",3945857876),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_ast], null)], null));
}
});
lt.plugins.elm_light.elm_ast.delete_ast_BANG_ = (function delete_ast_BANG_(project,file){var temp__4092__auto__ = lt.plugins.elm_light.elm_ast.idx_of.call(null,(function (p1__11807_SHARP_){return cljs.core._EQ_.call(null,project,new cljs.core.Keyword(null,"project","project",704593547).cljs$core$IFn$_invoke$arity$1(p1__11807_SHARP_));
}),cljs.core.deref.call(null,lt.plugins.elm_light.elm_ast.project_asts));if(cljs.core.truth_(temp__4092__auto__))
{var prj_idx = temp__4092__auto__;return cljs.core.swap_BANG_.call(null,lt.plugins.elm_light.elm_ast.project_asts,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prj_idx,new cljs.core.Keyword(null,"file-asts","file-asts",3945857876)], null),((function (prj_idx,temp__4092__auto__){
return (function (file_asts){return cljs.core.filterv.call(null,((function (prj_idx,temp__4092__auto__){
return (function (p1__11808_SHARP_){return cljs.core.not_EQ_.call(null,file,new cljs.core.Keyword(null,"file","file",1017047278).cljs$core$IFn$_invoke$arity$1(p1__11808_SHARP_));
});})(prj_idx,temp__4092__auto__))
,file_asts);
});})(prj_idx,temp__4092__auto__))
);
} else
{return null;
}
});
lt.plugins.elm_light.elm_ast.delete_package_asts_BANG_ = (function delete_package_asts_BANG_(project){var temp__4092__auto__ = lt.plugins.elm_light.elm_ast.idx_of.call(null,(function (p1__11809_SHARP_){return cljs.core._EQ_.call(null,project,new cljs.core.Keyword(null,"project","project",704593547).cljs$core$IFn$_invoke$arity$1(p1__11809_SHARP_));
}),cljs.core.deref.call(null,lt.plugins.elm_light.elm_ast.project_asts));if(cljs.core.truth_(temp__4092__auto__))
{var prj_idx = temp__4092__auto__;return cljs.core.swap_BANG_.call(null,lt.plugins.elm_light.elm_ast.project_asts,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prj_idx,new cljs.core.Keyword(null,"file-asts","file-asts",3945857876)], null),((function (prj_idx,temp__4092__auto__){
return (function (file_asts){return cljs.core.vec.call(null,cljs.core.remove.call(null,new cljs.core.Keyword(null,"package","package",4501809080),file_asts));
});})(prj_idx,temp__4092__auto__))
);
} else
{return null;
}
});
lt.plugins.elm_light.elm_ast.delete_project_ast_BANG_ = (function delete_project_ast_BANG_(project){return cljs.core.swap_BANG_.call(null,lt.plugins.elm_light.elm_ast.project_asts,(function (prjs){return cljs.core.filterv.call(null,(function (p1__11810_SHARP_){return cljs.core.not_EQ_.call(null,project,new cljs.core.Keyword(null,"project","project",704593547).cljs$core$IFn$_invoke$arity$1(p1__11810_SHARP_));
}),prjs);
}));
});
lt.plugins.elm_light.elm_ast.reset_asts_BANG_ = (function reset_asts_BANG_(){return cljs.core.reset_BANG_.call(null,lt.plugins.elm_light.elm_ast.project_asts,cljs.core.PersistentVector.EMPTY);
});
lt.plugins.elm_light.elm_ast.get_project = (function get_project(project){return cljs.core.first.call(null,cljs.core.filterv.call(null,(function (p1__11811_SHARP_){return cljs.core._EQ_.call(null,project,new cljs.core.Keyword(null,"project","project",704593547).cljs$core$IFn$_invoke$arity$1(p1__11811_SHARP_));
}),cljs.core.deref.call(null,lt.plugins.elm_light.elm_ast.project_asts)));
});
lt.plugins.elm_light.elm_ast.get_module_ast = (function get_module_ast(project,module_file){var temp__4092__auto__ = lt.plugins.elm_light.elm_ast.get_project.call(null,project);if(cljs.core.truth_(temp__4092__auto__))
{var prj = temp__4092__auto__;return cljs.core.first.call(null,cljs.core.filterv.call(null,((function (prj,temp__4092__auto__){
return (function (p1__11812_SHARP_){return cljs.core._EQ_.call(null,module_file,new cljs.core.Keyword(null,"file","file",1017047278).cljs$core$IFn$_invoke$arity$1(p1__11812_SHARP_));
});})(prj,temp__4092__auto__))
,new cljs.core.Keyword(null,"file-asts","file-asts",3945857876).cljs$core$IFn$_invoke$arity$1(prj)));
} else
{return null;
}
});
lt.plugins.elm_light.elm_ast.get_module_by_name = (function get_module_by_name(project,module_name){var temp__4092__auto__ = lt.plugins.elm_light.elm_ast.get_project.call(null,project);if(cljs.core.truth_(temp__4092__auto__))
{var prj = temp__4092__auto__;return cljs.core.first.call(null,cljs.core.filterv.call(null,((function (prj,temp__4092__auto__){
return (function (p1__11813_SHARP_){return cljs.core._EQ_.call(null,module_name,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"moduleDeclaration","moduleDeclaration",1240624864).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",1014001140).cljs$core$IFn$_invoke$arity$1(p1__11813_SHARP_))));
});})(prj,temp__4092__auto__))
,new cljs.core.Keyword(null,"file-asts","file-asts",3945857876).cljs$core$IFn$_invoke$arity$1(prj)));
} else
{return null;
}
});
lt.plugins.elm_light.elm_ast.get_module_name = (function get_module_name(module){return new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"moduleDeclaration","moduleDeclaration",1240624864).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",1014001140).cljs$core$IFn$_invoke$arity$1(module)));
});
lt.plugins.elm_light.elm_ast.exposeAll_QMARK_ = (function exposeAll_QMARK_(exposing){return cljs.core._EQ_.call(null,"exposeAll",new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,exposing)));
});
lt.plugins.elm_light.elm_ast.extract_exports = (function extract_exports(exposing){return cljs.core.map.call(null,new cljs.core.Keyword(null,"value","value",1125876963),exposing);
});
lt.plugins.elm_light.elm_ast.exposed_by_module_QMARK_ = (function exposed_by_module_QMARK_(module,candidate){var exposing = new cljs.core.Keyword(null,"exposing","exposing",3382854387).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"moduleDeclaration","moduleDeclaration",1240624864).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",1014001140).cljs$core$IFn$_invoke$arity$1(module)));if(lt.plugins.elm_light.elm_ast.exposeAll_QMARK_.call(null,candidate))
{return true;
} else
{return cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,lt.plugins.elm_light.elm_ast.extract_exports.call(null,exposing)),candidate);
}
});
lt.plugins.elm_light.elm_ast.enrich_module_declarations = (function enrich_module_declarations(module){return cljs.core.map.call(null,(function (p1__11814_SHARP_){return cljs.core.assoc.call(null,p1__11814_SHARP_,new cljs.core.Keyword(null,"exposed?","exposed?",3382850193),lt.plugins.elm_light.elm_ast.exposed_by_module_QMARK_.call(null,module,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p1__11814_SHARP_)),new cljs.core.Keyword(null,"file","file",1017047278),new cljs.core.Keyword(null,"file","file",1017047278).cljs$core$IFn$_invoke$arity$1(module),new cljs.core.Keyword(null,"module-name","module-name",4067691710),new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"moduleDeclaration","moduleDeclaration",1240624864).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",1014001140).cljs$core$IFn$_invoke$arity$1(module))),new cljs.core.Keyword(null,"package","package",4501809080),new cljs.core.Keyword(null,"package","package",4501809080).cljs$core$IFn$_invoke$arity$1(module));
}),new cljs.core.Keyword(null,"declarations","declarations",2554736043).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",1014001140).cljs$core$IFn$_invoke$arity$1(module)));
});
lt.plugins.elm_light.elm_ast.get_exposed_declarations = (function get_exposed_declarations(module){return cljs.core.filter.call(null,new cljs.core.Keyword(null,"exposed?","exposed?",3382850193),lt.plugins.elm_light.elm_ast.enrich_module_declarations.call(null,module));
});
lt.plugins.elm_light.elm_ast.get_import_candidate_tokens = (function get_import_candidate_tokens(import_def,exposed_declaration){return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(import_def)),cljs.core.str("."),cljs.core.str(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(exposed_declaration))].join(''),(function (){var temp__4092__auto__ = new cljs.core.Keyword(null,"alias","alias",1106807234).cljs$core$IFn$_invoke$arity$1(import_def);if(cljs.core.truth_(temp__4092__auto__))
{var alias = temp__4092__auto__;return [cljs.core.str(alias),cljs.core.str("."),cljs.core.str(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(exposed_declaration))].join('');
} else
{return null;
}
})(),(((lt.plugins.elm_light.elm_ast.exposeAll_QMARK_.call(null,new cljs.core.Keyword(null,"exposing","exposing",3382854387).cljs$core$IFn$_invoke$arity$1(import_def))) || (cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__11815_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(exposed_declaration),new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p1__11815_SHARP_));
}),new cljs.core.Keyword(null,"exposing","exposing",3382854387).cljs$core$IFn$_invoke$arity$1(import_def)))))?new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(exposed_declaration):null)], null)));
});
lt.plugins.elm_light.elm_ast.get_external_candidates = (function get_external_candidates(module,modules){var imports = new cljs.core.Keyword(null,"imports","imports",2939942112).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",1014001140).cljs$core$IFn$_invoke$arity$1(module));var imported_mod_names = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,new cljs.core.Keyword(null,"value","value",1125876963),imports));var external_exposed = cljs.core.mapcat.call(null,((function (imports,imported_mod_names){
return (function (p1__11817_SHARP_){return lt.plugins.elm_light.elm_ast.get_exposed_declarations.call(null,p1__11817_SHARP_);
});})(imports,imported_mod_names))
,cljs.core.filter.call(null,((function (imports,imported_mod_names){
return (function (p1__11816_SHARP_){return (cljs.core.not_EQ_.call(null,lt.plugins.elm_light.elm_ast.get_module_name.call(null,module),lt.plugins.elm_light.elm_ast.get_module_name.call(null,p1__11816_SHARP_))) && (cljs.core.contains_QMARK_.call(null,imported_mod_names,lt.plugins.elm_light.elm_ast.get_module_name.call(null,p1__11816_SHARP_)));
});})(imports,imported_mod_names))
,modules));return cljs.core.mapcat.call(null,((function (imports,imported_mod_names,external_exposed){
return (function (imp){return cljs.core.map.call(null,((function (imports,imported_mod_names,external_exposed){
return (function (p1__11819_SHARP_){return cljs.core.assoc.call(null,p1__11819_SHARP_,new cljs.core.Keyword(null,"candidate-tokens","candidate-tokens",3775833238),lt.plugins.elm_light.elm_ast.get_import_candidate_tokens.call(null,imp,p1__11819_SHARP_));
});})(imports,imported_mod_names,external_exposed))
,cljs.core.filter.call(null,((function (imports,imported_mod_names,external_exposed){
return (function (p1__11818_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(imp),new cljs.core.Keyword(null,"module-name","module-name",4067691710).cljs$core$IFn$_invoke$arity$1(p1__11818_SHARP_));
});})(imports,imported_mod_names,external_exposed))
,external_exposed));
});})(imports,imported_mod_names,external_exposed))
,imports);
});
/**
* Get candidates for Elm default imports as per
* https://github.com/elm-lang/core
*/
lt.plugins.elm_light.elm_ast.get_default_candidates = (function get_default_candidates(modules){return cljs.core.concat.call(null,cljs.core.map.call(null,(function (p1__11821_SHARP_){return cljs.core.assoc.call(null,p1__11821_SHARP_,new cljs.core.Keyword(null,"candidate-tokens","candidate-tokens",3775833238),cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p1__11821_SHARP_)], true));
}),cljs.core.mapcat.call(null,lt.plugins.elm_light.elm_ast.get_exposed_declarations,cljs.core.filterv.call(null,(function (p1__11820_SHARP_){return cljs.core._EQ_.call(null,"Basics",new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"moduleDeclaration","moduleDeclaration",1240624864).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",1014001140).cljs$core$IFn$_invoke$arity$1(p1__11820_SHARP_))));
}),modules))),cljs.core.map.call(null,(function (p1__11823_SHARP_){return cljs.core.assoc.call(null,p1__11823_SHARP_,new cljs.core.Keyword(null,"candidate-tokens","candidate-tokens",3775833238),cljs.core.PersistentHashSet.fromArray([[cljs.core.str("Debug."),cljs.core.str(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p1__11823_SHARP_))].join('')], true));
}),cljs.core.mapcat.call(null,lt.plugins.elm_light.elm_ast.get_exposed_declarations,cljs.core.filterv.call(null,(function (p1__11822_SHARP_){return cljs.core._EQ_.call(null,"Debug",new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"moduleDeclaration","moduleDeclaration",1240624864).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",1014001140).cljs$core$IFn$_invoke$arity$1(p1__11822_SHARP_))));
}),modules))),cljs.core.map.call(null,(function (p1__11825_SHARP_){return cljs.core.assoc.call(null,p1__11825_SHARP_,new cljs.core.Keyword(null,"candidate-tokens","candidate-tokens",3775833238),cljs.core.PersistentHashSet.fromArray([[cljs.core.str("Maybe."),cljs.core.str(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p1__11825_SHARP_))].join('')], true));
}),cljs.core.mapcat.call(null,lt.plugins.elm_light.elm_ast.get_exposed_declarations,cljs.core.filterv.call(null,(function (p1__11824_SHARP_){return cljs.core._EQ_.call(null,"Maybe",new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"moduleDeclaration","moduleDeclaration",1240624864).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",1014001140).cljs$core$IFn$_invoke$arity$1(p1__11824_SHARP_))));
}),modules))),cljs.core.map.call(null,(function (p1__11827_SHARP_){return cljs.core.assoc.call(null,p1__11827_SHARP_,new cljs.core.Keyword(null,"candidate-tokens","candidate-tokens",3775833238),cljs.core.PersistentHashSet.fromArray([[cljs.core.str("Result."),cljs.core.str(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p1__11827_SHARP_))].join('')], true));
}),cljs.core.mapcat.call(null,lt.plugins.elm_light.elm_ast.get_exposed_declarations,cljs.core.filterv.call(null,(function (p1__11826_SHARP_){return cljs.core._EQ_.call(null,"Result",new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"moduleDeclaration","moduleDeclaration",1240624864).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",1014001140).cljs$core$IFn$_invoke$arity$1(p1__11826_SHARP_))));
}),modules))),cljs.core.map.call(null,(function (p1__11829_SHARP_){return cljs.core.assoc.call(null,p1__11829_SHARP_,new cljs.core.Keyword(null,"candidate-tokens","candidate-tokens",3775833238),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p1__11829_SHARP_),"Program"))?new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["Program",null], null), null):cljs.core.PersistentHashSet.fromArray([[cljs.core.str("Platform."),cljs.core.str(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p1__11829_SHARP_))].join('')], true)));
}),cljs.core.mapcat.call(null,lt.plugins.elm_light.elm_ast.get_exposed_declarations,cljs.core.filterv.call(null,(function (p1__11828_SHARP_){return cljs.core._EQ_.call(null,"Platform",new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"moduleDeclaration","moduleDeclaration",1240624864).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",1014001140).cljs$core$IFn$_invoke$arity$1(p1__11828_SHARP_))));
}),modules))),cljs.core.map.call(null,(function (p1__11831_SHARP_){return cljs.core.assoc.call(null,p1__11831_SHARP_,new cljs.core.Keyword(null,"candidate-tokens","candidate-tokens",3775833238),(function (){var G__11837 = new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p1__11831_SHARP_);if(cljs.core._EQ_.call(null,"!",G__11837))
{return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["!",null], null), null);
} else
{if(cljs.core._EQ_.call(null,"Cmd",G__11837))
{return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["Cmd",null], null), null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.PersistentHashSet.fromArray([[cljs.core.str("Platform.Cmd"),cljs.core.str(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p1__11831_SHARP_))].join('')], true);
} else
{return null;
}
}
}
})());
}),cljs.core.mapcat.call(null,lt.plugins.elm_light.elm_ast.get_exposed_declarations,cljs.core.filterv.call(null,(function (p1__11830_SHARP_){return cljs.core._EQ_.call(null,"Platform.Cmd",new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"moduleDeclaration","moduleDeclaration",1240624864).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",1014001140).cljs$core$IFn$_invoke$arity$1(p1__11830_SHARP_))));
}),modules))),cljs.core.map.call(null,(function (p1__11833_SHARP_){return cljs.core.assoc.call(null,p1__11833_SHARP_,new cljs.core.Keyword(null,"candidate-tokens","candidate-tokens",3775833238),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p1__11833_SHARP_),"Sub"))?new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["Sub",null], null), null):cljs.core.PersistentHashSet.fromArray([[cljs.core.str("Platform.Sub."),cljs.core.str(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p1__11833_SHARP_))].join('')], true)));
}),cljs.core.mapcat.call(null,lt.plugins.elm_light.elm_ast.get_exposed_declarations,cljs.core.filterv.call(null,(function (p1__11832_SHARP_){return cljs.core._EQ_.call(null,"Platform.Sub",new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"moduleDeclaration","moduleDeclaration",1240624864).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",1014001140).cljs$core$IFn$_invoke$arity$1(p1__11832_SHARP_))));
}),modules))),cljs.core.map.call(null,(function (p1__11835_SHARP_){return cljs.core.assoc.call(null,p1__11835_SHARP_,new cljs.core.Keyword(null,"candidate-tokens","candidate-tokens",3775833238),((cljs.core._EQ_.call(null,"::",new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p1__11835_SHARP_)))?new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["::",null], null), null):cljs.core.PersistentHashSet.fromArray([[cljs.core.str("List."),cljs.core.str(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p1__11835_SHARP_))].join('')], true)));
}),cljs.core.mapcat.call(null,lt.plugins.elm_light.elm_ast.get_exposed_declarations,cljs.core.filterv.call(null,(function (p1__11834_SHARP_){return cljs.core._EQ_.call(null,"List",new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"moduleDeclaration","moduleDeclaration",1240624864).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",1014001140).cljs$core$IFn$_invoke$arity$1(p1__11834_SHARP_))));
}),modules))));
});
lt.plugins.elm_light.elm_ast.get_current_module_candidates = (function get_current_module_candidates(module){return cljs.core.map.call(null,(function (p1__11838_SHARP_){return cljs.core.assoc.call(null,p1__11838_SHARP_,new cljs.core.Keyword(null,"candidate-tokens","candidate-tokens",3775833238),cljs.core.PersistentHashSet.fromArray([[cljs.core.str(lt.plugins.elm_light.elm_ast.get_module_name.call(null,module)),cljs.core.str("."),cljs.core.str(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p1__11838_SHARP_))].join(''),new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p1__11838_SHARP_)], true));
}),lt.plugins.elm_light.elm_ast.enrich_module_declarations.call(null,module));
});
lt.plugins.elm_light.elm_ast.get_jump_to_candidates = (function get_jump_to_candidates(module,modules){return cljs.core.concat.call(null,lt.plugins.elm_light.elm_ast.get_current_module_candidates.call(null,module),lt.plugins.elm_light.elm_ast.get_external_candidates.call(null,module,modules),lt.plugins.elm_light.elm_ast.get_default_candidates.call(null,modules));
});
lt.plugins.elm_light.elm_ast.get_candidate_by_token = (function get_candidate_by_token(token,module,modules){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__11839_SHARP_){return cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"candidate-tokens","candidate-tokens",3775833238).cljs$core$IFn$_invoke$arity$1(p1__11839_SHARP_),token);
}),lt.plugins.elm_light.elm_ast.get_jump_to_candidates.call(null,module,modules)));
});
lt.plugins.elm_light.elm_ast.get_jump_to_definition = (function get_jump_to_definition(token,module_file,project){var temp__4092__auto__ = lt.plugins.elm_light.elm_ast.get_module_ast.call(null,project,module_file);if(cljs.core.truth_(temp__4092__auto__))
{var module = temp__4092__auto__;return lt.plugins.elm_light.elm_ast.get_candidate_by_token.call(null,token,module,new cljs.core.Keyword(null,"file-asts","file-asts",3945857876).cljs$core$IFn$_invoke$arity$1(lt.plugins.elm_light.elm_ast.get_project.call(null,project)));
} else
{return null;
}
});
lt.plugins.elm_light.elm_ast.status_class = (function status_class(p__11840){var map__11843 = p__11840;var map__11843__$1 = ((cljs.core.seq_QMARK_.call(null,map__11843))?cljs.core.apply.call(null,cljs.core.hash_map,map__11843):map__11843);var status = cljs.core.get.call(null,map__11843__$1,new cljs.core.Keyword(null,"status","status",4416389988));var G__11844 = status;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",1013907790),G__11844))
{return "ok";
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",1110689146),G__11844))
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
lt.plugins.elm_light.elm_ast.status_text = (function status_text(p__11845){var map__11848 = p__11845;var map__11848__$1 = ((cljs.core.seq_QMARK_.call(null,map__11848))?cljs.core.apply.call(null,cljs.core.hash_map,map__11848):map__11848);var error = cljs.core.get.call(null,map__11848__$1,new cljs.core.Keyword(null,"error","error",1110689146));var status = cljs.core.get.call(null,map__11848__$1,new cljs.core.Keyword(null,"status","status",4416389988));return [cljs.core.str("AST: "),cljs.core.str((function (){var G__11849 = status;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",1110689146),G__11849))
{return "Error";
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",1013907790),G__11849))
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
lt.plugins.elm_light.elm_ast.__GT_status_ui = (function __GT_status_ui(p__11850){var map__11852 = p__11850;var map__11852__$1 = ((cljs.core.seq_QMARK_.call(null,map__11852))?cljs.core.apply.call(null,cljs.core.hash_map,map__11852):map__11852);var ast_summary = cljs.core.get.call(null,map__11852__$1,new cljs.core.Keyword(null,"ast-summary","ast-summary",1727157965));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("ast-status "),cljs.core.str(lt.plugins.elm_light.elm_ast.status_class.call(null,ast_summary))].join('')], null),lt.plugins.elm_light.elm_ast.status_text.call(null,ast_summary)], null);
});
lt.plugins.elm_light.elm_ast.__BEH__update_ast_status = (function __BEH__update_ast_status(this$,f){return lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast-summary","ast-summary",1727157965)], null),f);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.elm-ast","update-ast-status","lt.plugins.elm-light.elm-ast/update-ast-status",2519133077),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.elm_ast.__BEH__update_ast_status,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"update!","update!",779473898),null], null), null));
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.elm-ast","statusbar.ast-status","lt.plugins.elm-light.elm-ast/statusbar.ast-status",1374391534),new cljs.core.Keyword(null,"triggers","triggers",2516997421),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.elm-light.elm-ast","update-ast-status","lt.plugins.elm-light.elm-ast/update-ast-status",2519133077),null], null), null),new cljs.core.Keyword(null,"ast-summary","ast-summary",1727157965),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",4416389988),""], null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return lt.objs.statusbar.statusbar_item.call(null,crate.binding.bound.call(null,this$,lt.plugins.elm_light.elm_ast.__GT_status_ui),"");
}));
lt.plugins.elm_light.elm_ast.statusbar_ast_summary = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.elm-light.elm-ast","statusbar.ast-status","lt.plugins.elm-light.elm-ast/statusbar.ast-status",1374391534));
lt.objs.statusbar.add_statusbar_item.call(null,lt.plugins.elm_light.elm_ast.statusbar_ast_summary);
lt.plugins.elm_light.elm_ast.update_status_for_editor = (function update_status_for_editor(ed){var map__11855 = new cljs.core.Keyword(null,"ast-status","ast-status",2421112079).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed));var map__11855__$1 = ((cljs.core.seq_QMARK_.call(null,map__11855))?cljs.core.apply.call(null,cljs.core.hash_map,map__11855):map__11855);var error = cljs.core.get.call(null,map__11855__$1,new cljs.core.Keyword(null,"error","error",1110689146));var status = cljs.core.get.call(null,map__11855__$1,new cljs.core.Keyword(null,"status","status",4416389988));return lt.object.raise.call(null,lt.plugins.elm_light.elm_ast.statusbar_ast_summary,new cljs.core.Keyword(null,"update!","update!",779473898),((function (map__11855,map__11855__$1,error,status){
return (function (p1__11853_SHARP_){return cljs.core.assoc.call(null,p1__11853_SHARP_,new cljs.core.Keyword(null,"status","status",4416389988),status,new cljs.core.Keyword(null,"error","error",1110689146),error);
});})(map__11855,map__11855__$1,error,status))
);
});
lt.plugins.elm_light.elm_ast.__BEH__update_ast_status_on_editor_change = (function __BEH__update_ast_status_on_editor_change(ed){if(cljs.core.not.call(null,lt.object.has_tag_QMARK_.call(null,ed,new cljs.core.Keyword(null,"editor.elm","editor.elm",3751348247))))
{return lt.plugins.elm_light.elm_ast.update_status_for_editor.call(null,ed);
} else
{return null;
}
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
if(!lt.util.load.provided_QMARK_('cljs.core.async.impl.protocols')) {
goog.provide('cljs.core.async.impl.protocols');
goog.require('cljs.core');
cljs.core.async.impl.protocols.MAX_QUEUE_SIZE = 1024;
cljs.core.async.impl.protocols.ReadPort = (function (){var obj18617 = {};return obj18617;
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
cljs.core.async.impl.protocols.WritePort = (function (){var obj18619 = {};return obj18619;
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
cljs.core.async.impl.protocols.Channel = (function (){var obj18621 = {};return obj18621;
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
cljs.core.async.impl.protocols.Handler = (function (){var obj18623 = {};return obj18623;
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
cljs.core.async.impl.protocols.Buffer = (function (){var obj18625 = {};return obj18625;
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
cljs.core.async.impl.protocols.UnblockingBuffer = (function (){var obj18627 = {};return obj18627;
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
var G__18582 = (cnt + 1);
cnt = G__18582;
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
{var v_18583 = this$.pop();if(keep_QMARK_.call(null,v_18583))
{this$.unshift(v_18583);
} else
{}
{
var G__18584 = (x + 1);
x = G__18584;
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
var count_18613 = 0;while(true){
var m_18614 = cljs.core.async.impl.dispatch.tasks.pop();if((m_18614 == null))
{} else
{m_18614.call(null);
if((count_18613 < cljs.core.async.impl.dispatch.TASK_BATCH_SIZE))
{{
var G__18615 = (count_18613 + 1);
count_18613 = G__18615;
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
cljs.core.async.impl.channels.box = (function box(val){if(typeof cljs.core.async.impl.channels.t18588 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.impl.channels.t18588 = (function (val,box,meta18589){
this.val = val;
this.box = box;
this.meta18589 = meta18589;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
cljs.core.async.impl.channels.t18588.cljs$lang$type = true;
cljs.core.async.impl.channels.t18588.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t18588";
cljs.core.async.impl.channels.t18588.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async.impl.channels/t18588");
});
cljs.core.async.impl.channels.t18588.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.val;
});
cljs.core.async.impl.channels.t18588.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18590){var self__ = this;
var _18590__$1 = this;return self__.meta18589;
});
cljs.core.async.impl.channels.t18588.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18590,meta18589__$1){var self__ = this;
var _18590__$1 = this;return (new cljs.core.async.impl.channels.t18588(self__.val,self__.box,meta18589__$1));
});
cljs.core.async.impl.channels.__GT_t18588 = (function __GT_t18588(val__$1,box__$1,meta18589){return (new cljs.core.async.impl.channels.t18588(val__$1,box__$1,meta18589));
});
}
return (new cljs.core.async.impl.channels.t18588(val,box,null));
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
var taker_18601 = self__.takes.pop();if((taker_18601 == null))
{} else
{if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker_18601))
{var take_cb_18602 = cljs.core.async.impl.protocols.commit.call(null,taker_18601);cljs.core.async.impl.dispatch.run.call(null,((function (take_cb_18602,taker_18601,this$__$1){
return (function (){return take_cb_18602.call(null,null);
});})(take_cb_18602,taker_18601,this$__$1))
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
var G__18648 = (level + 1);
level = G__18648;
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
var skip_list_node__3 = (function (k,v,level){var arr = (new Array((level + 1)));var i_18649 = 0;while(true){
if((i_18649 < arr.length))
{(arr[i_18649] = null);
{
var G__18650 = (i_18649 + 1);
i_18649 = G__18650;
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
var G__18651 = x_SINGLEQUOTE_;
x__$1 = G__18651;
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
var G__18652 = x__$1;
var G__18653 = k;
var G__18654 = (level - 1);
var G__18655 = update;
x = G__18652;
k = G__18653;
level = G__18654;
update = G__18655;
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
{var i_18656 = (self__.level + 1);while(true){
if((i_18656 <= (new_level + 1)))
{(update[i_18656] = self__.header);
{
var G__18657 = (i_18656 + 1);
i_18656 = G__18657;
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
{var i_18658 = 0;while(true){
if((i_18658 <= self__.level))
{var links_18659 = (update[i_18658]).forward;if(((links_18659[i_18658]) === x__$1))
{(links_18659[i_18658] = (x__$1.forward[i_18658]));
{
var G__18660 = (i_18658 + 1);
i_18658 = G__18660;
continue;
}
} else
{{
var G__18661 = (i_18658 + 1);
i_18658 = G__18661;
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
var G__18662 = x_SINGLEQUOTE_;
x__$1 = G__18662;
continue;
}
}
}
break;
}
})();if(!((nx == null)))
{{
var G__18663 = nx;
var G__18664 = (level__$1 - 1);
x = G__18663;
level__$1 = G__18664;
continue;
}
} else
{{
var G__18665 = x;
var G__18666 = (level__$1 - 1);
x = G__18665;
level__$1 = G__18666;
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
var G__18667 = x_SINGLEQUOTE_;
x__$1 = G__18667;
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
var G__18668 = nx;
var G__18669 = (level__$1 - 1);
x = G__18668;
level__$1 = G__18669;
continue;
}
} else
{{
var G__18670 = x;
var G__18671 = (level__$1 - 1);
x = G__18670;
level__$1 = G__18671;
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
cljs.core.async.impl.ioc_helpers.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.impl.ioc_helpers.t18512 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t18512 = (function (f,fn_handler,meta18513){
this.f = f;
this.fn_handler = fn_handler;
this.meta18513 = meta18513;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.impl.ioc_helpers.t18512.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.t18512.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t18512";
cljs.core.async.impl.ioc_helpers.t18512.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async.impl.ioc-helpers/t18512");
});
cljs.core.async.impl.ioc_helpers.t18512.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.impl.ioc_helpers.t18512.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.impl.ioc_helpers.t18512.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.impl.ioc_helpers.t18512.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18514){var self__ = this;
var _18514__$1 = this;return self__.meta18513;
});
cljs.core.async.impl.ioc_helpers.t18512.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18514,meta18513__$1){var self__ = this;
var _18514__$1 = this;return (new cljs.core.async.impl.ioc_helpers.t18512(self__.f,self__.fn_handler,meta18513__$1));
});
cljs.core.async.impl.ioc_helpers.__GT_t18512 = (function __GT_t18512(f__$1,fn_handler__$1,meta18513){return (new cljs.core.async.impl.ioc_helpers.t18512(f__$1,fn_handler__$1,meta18513));
});
}
return (new cljs.core.async.impl.ioc_helpers.t18512(f,fn_handler,null));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function run_state_machine(state){return cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function run_state_machine_wrapped(state){try{return cljs.core.async.impl.ioc_helpers.run_state_machine.call(null,state);
}catch (e18516){if((e18516 instanceof Object))
{var ex = e18516;cljs.core.async.impl.protocols.close_BANG_.call(null,cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.USER_START_IDX));
throw ex;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18516;
} else
{return null;
}
}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function take_BANG_(state,blk,c){var temp__4090__auto__ = cljs.core.async.impl.protocols.take_BANG_.call(null,c,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (x){var statearr_18519_18562 = state;(statearr_18519_18562[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);
(statearr_18519_18562[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
})));if(cljs.core.truth_(temp__4090__auto__))
{var cb = temp__4090__auto__;var statearr_18520_18563 = state;(statearr_18520_18563[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
(statearr_18520_18563[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function put_BANG_(state,blk,c,val){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,c,val,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (){var statearr_18523_18564 = state;(statearr_18523_18564[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = null);
(statearr_18523_18564[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
})));if(cljs.core.truth_(temp__4090__auto__))
{var cb = temp__4090__auto__;var statearr_18524_18565 = state;(statearr_18524_18565[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
(statearr_18524_18565[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__18525){var map__18530 = p__18525;var map__18530__$1 = ((cljs.core.seq_QMARK_.call(null,map__18530))?cljs.core.apply.call(null,cljs.core.hash_map,map__18530):map__18530);var opts = map__18530__$1;var statearr_18531_18566 = state;(statearr_18531_18566[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4092__auto__ = cljs.core.async.do_alts.call(null,((function (map__18530,map__18530__$1,opts){
return (function (val){var statearr_18532_18567 = state;(statearr_18532_18567[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__18530,map__18530__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4092__auto__))
{var cb = temp__4092__auto__;var statearr_18533_18568 = state;(statearr_18533_18568[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__18525 = null;if (arguments.length > 3) {
  p__18525 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__18525);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__18569){
var state = cljs.core.first(arglist__18569);
arglist__18569 = cljs.core.next(arglist__18569);
var cont_block = cljs.core.first(arglist__18569);
arglist__18569 = cljs.core.next(arglist__18569);
var ports = cljs.core.first(arglist__18569);
var p__18525 = cljs.core.rest(arglist__18569);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__18525);
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
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5472__auto__,k18535,else__5473__auto__){var self__ = this;
var this__5472__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k18535,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893)))
{return self__.catch_block;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k18535,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687)))
{return self__.catch_exception;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k18535,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429)))
{return self__.finally_block;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k18535,new cljs.core.Keyword(null,"continue-block","continue-block",1486987097)))
{return self__.continue_block;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k18535,new cljs.core.Keyword(null,"prev","prev",1017353637)))
{return self__.prev;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k18535,else__5473__auto__);
} else
{return null;
}
}
}
}
}
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__18534){var self__ = this;
var this__5477__auto____$1 = this;var pred__18537 = cljs.core.keyword_identical_QMARK_;var expr__18538 = k__5478__auto__;if(cljs.core.truth_(pred__18537.call(null,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),expr__18538)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__18534,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__18537.call(null,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),expr__18538)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__18534,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__18537.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),expr__18538)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__18534,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__18537.call(null,new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),expr__18538)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__18534,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__18537.call(null,new cljs.core.Keyword(null,"prev","prev",1017353637),expr__18538)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__18534,self__.__meta,self__.__extmap,null));
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5478__auto__,G__18534),null));
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
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5469__auto__,G__18534){var self__ = this;
var this__5469__auto____$1 = this;return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__18534,self__.__extmap,self__.__hash));
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
cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function map__GT_ExceptionFrame(G__18536){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(new cljs.core.Keyword(null,"catch-block","catch-block",2343862893).cljs$core$IFn$_invoke$arity$1(G__18536),new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687).cljs$core$IFn$_invoke$arity$1(G__18536),new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(G__18536),new cljs.core.Keyword(null,"continue-block","continue-block",1486987097).cljs$core$IFn$_invoke$arity$1(G__18536),new cljs.core.Keyword(null,"prev","prev",1017353637).cljs$core$IFn$_invoke$arity$1(G__18536),null,cljs.core.dissoc.call(null,G__18536,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),new cljs.core.Keyword(null,"prev","prev",1017353637))));
});
cljs.core.async.impl.ioc_helpers.add_exception_frame = (function add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){var statearr_18541 = state;(statearr_18541[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame.call(null,catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES)));
return statearr_18541;
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
{var statearr_18547 = state;(statearr_18547[cljs.core.async.impl.ioc_helpers.STATE_IDX] = catch_block);
(statearr_18547[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = exception);
(statearr_18547[cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION] = null);
(statearr_18547[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),null,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),null));
return statearr_18547;
} else
{if(cljs.core.truth_((function (){var and__4872__auto__ = exception;if(cljs.core.truth_(and__4872__auto__))
{return (cljs.core.not.call(null,catch_block)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else
{return and__4872__auto__;
}
})()))
{var statearr_18548_18570 = state;(statearr_18548_18570[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = new cljs.core.Keyword(null,"prev","prev",1017353637).cljs$core$IFn$_invoke$arity$1(exception_frame));
{
var G__18571 = state;
state = G__18571;
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
{var statearr_18549 = state;(statearr_18549[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_18549[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),null));
return statearr_18549;
} else
{if(cljs.core.truth_((function (){var and__4872__auto__ = cljs.core.not.call(null,exception);if(and__4872__auto__)
{return new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__4872__auto__;
}
})()))
{var statearr_18550 = state;(statearr_18550[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_18550[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),null));
return statearr_18550;
} else
{if((cljs.core.not.call(null,exception)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame))))
{var statearr_18551 = state;(statearr_18551[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"continue-block","continue-block",1486987097).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_18551[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = new cljs.core.Keyword(null,"prev","prev",1017353637).cljs$core$IFn$_invoke$arity$1(exception_frame));
return statearr_18551;
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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t15948 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15948 = (function (f,fn_handler,meta15949){
this.f = f;
this.fn_handler = fn_handler;
this.meta15949 = meta15949;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15948.cljs$lang$type = true;
cljs.core.async.t15948.cljs$lang$ctorStr = "cljs.core.async/t15948";
cljs.core.async.t15948.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async/t15948");
});
cljs.core.async.t15948.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15948.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t15948.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t15948.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15950){var self__ = this;
var _15950__$1 = this;return self__.meta15949;
});
cljs.core.async.t15948.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15950,meta15949__$1){var self__ = this;
var _15950__$1 = this;return (new cljs.core.async.t15948(self__.f,self__.fn_handler,meta15949__$1));
});
cljs.core.async.__GT_t15948 = (function __GT_t15948(f__$1,fn_handler__$1,meta15949){return (new cljs.core.async.t15948(f__$1,fn_handler__$1,meta15949));
});
}
return (new cljs.core.async.t15948(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__15952 = buff;if(G__15952)
{var bit__5534__auto__ = null;if(cljs.core.truth_((function (){var or__4884__auto__ = bit__5534__auto__;if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return G__15952.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__15952.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15952);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15952);
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
{var val_18216 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_18216);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_18216,ret){
return (function (){return fn1.call(null,val_18216);
});})(val_18216,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__5732__auto___18217 = n;var x_18218 = 0;while(true){
if((x_18218 < n__5732__auto___18217))
{(a[x_18218] = 0);
{
var G__18219 = (x_18218 + 1);
x_18218 = G__18219;
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
var G__18220 = (i + 1);
i = G__18220;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t15956 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15956 = (function (flag,alt_flag,meta15957){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta15957 = meta15957;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15956.cljs$lang$type = true;
cljs.core.async.t15956.cljs$lang$ctorStr = "cljs.core.async/t15956";
cljs.core.async.t15956.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async/t15956");
});})(flag))
;
cljs.core.async.t15956.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15956.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t15956.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t15956.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_15958){var self__ = this;
var _15958__$1 = this;return self__.meta15957;
});})(flag))
;
cljs.core.async.t15956.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_15958,meta15957__$1){var self__ = this;
var _15958__$1 = this;return (new cljs.core.async.t15956(self__.flag,self__.alt_flag,meta15957__$1));
});})(flag))
;
cljs.core.async.__GT_t15956 = ((function (flag){
return (function __GT_t15956(flag__$1,alt_flag__$1,meta15957){return (new cljs.core.async.t15956(flag__$1,alt_flag__$1,meta15957));
});})(flag))
;
}
return (new cljs.core.async.t15956(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t15962 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15962 = (function (cb,flag,alt_handler,meta15963){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta15963 = meta15963;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15962.cljs$lang$type = true;
cljs.core.async.t15962.cljs$lang$ctorStr = "cljs.core.async/t15962";
cljs.core.async.t15962.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async/t15962");
});
cljs.core.async.t15962.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15962.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t15962.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t15962.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15964){var self__ = this;
var _15964__$1 = this;return self__.meta15963;
});
cljs.core.async.t15962.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15964,meta15963__$1){var self__ = this;
var _15964__$1 = this;return (new cljs.core.async.t15962(self__.cb,self__.flag,self__.alt_handler,meta15963__$1));
});
cljs.core.async.__GT_t15962 = (function __GT_t15962(cb__$1,flag__$1,alt_handler__$1,meta15963){return (new cljs.core.async.t15962(cb__$1,flag__$1,alt_handler__$1,meta15963));
});
}
return (new cljs.core.async.t15962(cb,flag,alt_handler,null));
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
return (function (p1__15965_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15965_SHARP_,port], null));
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
var G__18221 = (i + 1);
i = G__18221;
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
var alts_BANG___delegate = function (ports,p__15966){var map__15968 = p__15966;var map__15968__$1 = ((cljs.core.seq_QMARK_.call(null,map__15968))?cljs.core.apply.call(null,cljs.core.hash_map,map__15968):map__15968);var opts = map__15968__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__15966 = null;if (arguments.length > 1) {
  p__15966 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__15966);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__18222){
var ports = cljs.core.first(arglist__18222);
var p__15966 = cljs.core.rest(arglist__18222);
return alts_BANG___delegate(ports,p__15966);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t15976 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15976 = (function (ch,f,map_LT_,meta15977){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta15977 = meta15977;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15976.cljs$lang$type = true;
cljs.core.async.t15976.cljs$lang$ctorStr = "cljs.core.async/t15976";
cljs.core.async.t15976.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async/t15976");
});
cljs.core.async.t15976.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15976.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t15976.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15976.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t15979 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15979 = (function (fn1,_,meta15977,ch,f,map_LT_,meta15980){
this.fn1 = fn1;
this._ = _;
this.meta15977 = meta15977;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta15980 = meta15980;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15979.cljs$lang$type = true;
cljs.core.async.t15979.cljs$lang$ctorStr = "cljs.core.async/t15979";
cljs.core.async.t15979.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async/t15979");
});})(___$1))
;
cljs.core.async.t15979.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15979.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t15979.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t15979.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__15969_SHARP_){return f1.call(null,(((p1__15969_SHARP_ == null))?null:self__.f.call(null,p1__15969_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t15979.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_15981){var self__ = this;
var _15981__$1 = this;return self__.meta15980;
});})(___$1))
;
cljs.core.async.t15979.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_15981,meta15980__$1){var self__ = this;
var _15981__$1 = this;return (new cljs.core.async.t15979(self__.fn1,self__._,self__.meta15977,self__.ch,self__.f,self__.map_LT_,meta15980__$1));
});})(___$1))
;
cljs.core.async.__GT_t15979 = ((function (___$1){
return (function __GT_t15979(fn1__$1,___$2,meta15977__$1,ch__$2,f__$2,map_LT___$2,meta15980){return (new cljs.core.async.t15979(fn1__$1,___$2,meta15977__$1,ch__$2,f__$2,map_LT___$2,meta15980));
});})(___$1))
;
}
return (new cljs.core.async.t15979(fn1,___$1,self__.meta15977,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t15976.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15976.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15976.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15978){var self__ = this;
var _15978__$1 = this;return self__.meta15977;
});
cljs.core.async.t15976.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15978,meta15977__$1){var self__ = this;
var _15978__$1 = this;return (new cljs.core.async.t15976(self__.ch,self__.f,self__.map_LT_,meta15977__$1));
});
cljs.core.async.__GT_t15976 = (function __GT_t15976(ch__$1,f__$1,map_LT___$1,meta15977){return (new cljs.core.async.t15976(ch__$1,f__$1,map_LT___$1,meta15977));
});
}
return (new cljs.core.async.t15976(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t15985 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15985 = (function (ch,f,map_GT_,meta15986){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta15986 = meta15986;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15985.cljs$lang$type = true;
cljs.core.async.t15985.cljs$lang$ctorStr = "cljs.core.async/t15985";
cljs.core.async.t15985.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async/t15985");
});
cljs.core.async.t15985.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15985.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t15985.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15985.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t15985.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15985.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15985.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15987){var self__ = this;
var _15987__$1 = this;return self__.meta15986;
});
cljs.core.async.t15985.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15987,meta15986__$1){var self__ = this;
var _15987__$1 = this;return (new cljs.core.async.t15985(self__.ch,self__.f,self__.map_GT_,meta15986__$1));
});
cljs.core.async.__GT_t15985 = (function __GT_t15985(ch__$1,f__$1,map_GT___$1,meta15986){return (new cljs.core.async.t15985(ch__$1,f__$1,map_GT___$1,meta15986));
});
}
return (new cljs.core.async.t15985(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t15991 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15991 = (function (ch,p,filter_GT_,meta15992){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta15992 = meta15992;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15991.cljs$lang$type = true;
cljs.core.async.t15991.cljs$lang$ctorStr = "cljs.core.async/t15991";
cljs.core.async.t15991.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async/t15991");
});
cljs.core.async.t15991.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15991.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t15991.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15991.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t15991.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15991.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15991.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15993){var self__ = this;
var _15993__$1 = this;return self__.meta15992;
});
cljs.core.async.t15991.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15993,meta15992__$1){var self__ = this;
var _15993__$1 = this;return (new cljs.core.async.t15991(self__.ch,self__.p,self__.filter_GT_,meta15992__$1));
});
cljs.core.async.__GT_t15991 = (function __GT_t15991(ch__$1,p__$1,filter_GT___$1,meta15992){return (new cljs.core.async.t15991(ch__$1,p__$1,filter_GT___$1,meta15992));
});
}
return (new cljs.core.async.t15991(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13308__auto___18223 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13308__auto___18223,out){
return (function (){var f__13309__auto__ = (function (){var switch__13238__auto__ = ((function (c__13308__auto___18223,out){
return (function (state_16055){var state_val_16056 = (state_16055[1]);if((state_val_16056 === 1))
{var state_16055__$1 = state_16055;var statearr_16057_18224 = state_16055__$1;(statearr_16057_18224[2] = null);
(statearr_16057_18224[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16056 === 2))
{var state_16055__$1 = state_16055;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16055__$1,4,ch);
} else
{if((state_val_16056 === 3))
{var inst_16053 = (state_16055[2]);var state_16055__$1 = state_16055;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16055__$1,inst_16053);
} else
{if((state_val_16056 === 4))
{var inst_16037 = (state_16055[7]);var inst_16037__$1 = (state_16055[2]);var inst_16038 = (inst_16037__$1 == null);var state_16055__$1 = (function (){var statearr_16058 = state_16055;(statearr_16058[7] = inst_16037__$1);
return statearr_16058;
})();if(cljs.core.truth_(inst_16038))
{var statearr_16059_18225 = state_16055__$1;(statearr_16059_18225[1] = 5);
} else
{var statearr_16060_18226 = state_16055__$1;(statearr_16060_18226[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16056 === 5))
{var inst_16040 = cljs.core.async.close_BANG_.call(null,out);var state_16055__$1 = state_16055;var statearr_16061_18227 = state_16055__$1;(statearr_16061_18227[2] = inst_16040);
(statearr_16061_18227[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16056 === 6))
{var inst_16037 = (state_16055[7]);var inst_16042 = p.call(null,inst_16037);var state_16055__$1 = state_16055;if(cljs.core.truth_(inst_16042))
{var statearr_16062_18228 = state_16055__$1;(statearr_16062_18228[1] = 8);
} else
{var statearr_16063_18229 = state_16055__$1;(statearr_16063_18229[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16056 === 7))
{var inst_16051 = (state_16055[2]);var state_16055__$1 = state_16055;var statearr_16064_18230 = state_16055__$1;(statearr_16064_18230[2] = inst_16051);
(statearr_16064_18230[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16056 === 8))
{var inst_16037 = (state_16055[7]);var state_16055__$1 = state_16055;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16055__$1,11,out,inst_16037);
} else
{if((state_val_16056 === 9))
{var state_16055__$1 = state_16055;var statearr_16065_18231 = state_16055__$1;(statearr_16065_18231[2] = null);
(statearr_16065_18231[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16056 === 10))
{var inst_16048 = (state_16055[2]);var state_16055__$1 = (function (){var statearr_16066 = state_16055;(statearr_16066[8] = inst_16048);
return statearr_16066;
})();var statearr_16067_18232 = state_16055__$1;(statearr_16067_18232[2] = null);
(statearr_16067_18232[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16056 === 11))
{var inst_16045 = (state_16055[2]);var state_16055__$1 = state_16055;var statearr_16068_18233 = state_16055__$1;(statearr_16068_18233[2] = inst_16045);
(statearr_16068_18233[1] = 10);
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
});})(c__13308__auto___18223,out))
;return ((function (switch__13238__auto__,c__13308__auto___18223,out){
return (function() {
var state_machine__13239__auto__ = null;
var state_machine__13239__auto____0 = (function (){var statearr_16072 = [null,null,null,null,null,null,null,null,null];(statearr_16072[0] = state_machine__13239__auto__);
(statearr_16072[1] = 1);
return statearr_16072;
});
var state_machine__13239__auto____1 = (function (state_16055){while(true){
var ret_value__13240__auto__ = (function (){try{while(true){
var result__13241__auto__ = switch__13238__auto__.call(null,state_16055);if(cljs.core.keyword_identical_QMARK_.call(null,result__13241__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13241__auto__;
}
break;
}
}catch (e16073){if((e16073 instanceof Object))
{var ex__13242__auto__ = e16073;var statearr_16074_18234 = state_16055;(statearr_16074_18234[5] = ex__13242__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16055);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16073;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13240__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18235 = state_16055;
state_16055 = G__18235;
continue;
}
} else
{return ret_value__13240__auto__;
}
break;
}
});
state_machine__13239__auto__ = function(state_16055){
switch(arguments.length){
case 0:
return state_machine__13239__auto____0.call(this);
case 1:
return state_machine__13239__auto____1.call(this,state_16055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13239__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13239__auto____0;
state_machine__13239__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13239__auto____1;
return state_machine__13239__auto__;
})()
;})(switch__13238__auto__,c__13308__auto___18223,out))
})();var state__13310__auto__ = (function (){var statearr_16075 = f__13309__auto__.call(null);(statearr_16075[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13308__auto___18223);
return statearr_16075;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13310__auto__);
});})(c__13308__auto___18223,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__13308__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13308__auto__){
return (function (){var f__13309__auto__ = (function (){var switch__13238__auto__ = ((function (c__13308__auto__){
return (function (state_16227){var state_val_16228 = (state_16227[1]);if((state_val_16228 === 1))
{var state_16227__$1 = state_16227;var statearr_16229_18236 = state_16227__$1;(statearr_16229_18236[2] = null);
(statearr_16229_18236[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16228 === 2))
{var state_16227__$1 = state_16227;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16227__$1,4,in$);
} else
{if((state_val_16228 === 3))
{var inst_16225 = (state_16227[2]);var state_16227__$1 = state_16227;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16227__$1,inst_16225);
} else
{if((state_val_16228 === 4))
{var inst_16173 = (state_16227[7]);var inst_16173__$1 = (state_16227[2]);var inst_16174 = (inst_16173__$1 == null);var state_16227__$1 = (function (){var statearr_16230 = state_16227;(statearr_16230[7] = inst_16173__$1);
return statearr_16230;
})();if(cljs.core.truth_(inst_16174))
{var statearr_16231_18237 = state_16227__$1;(statearr_16231_18237[1] = 5);
} else
{var statearr_16232_18238 = state_16227__$1;(statearr_16232_18238[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16228 === 5))
{var inst_16176 = cljs.core.async.close_BANG_.call(null,out);var state_16227__$1 = state_16227;var statearr_16233_18239 = state_16227__$1;(statearr_16233_18239[2] = inst_16176);
(statearr_16233_18239[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16228 === 6))
{var inst_16173 = (state_16227[7]);var inst_16178 = f.call(null,inst_16173);var inst_16183 = cljs.core.seq.call(null,inst_16178);var inst_16184 = inst_16183;var inst_16185 = null;var inst_16186 = 0;var inst_16187 = 0;var state_16227__$1 = (function (){var statearr_16234 = state_16227;(statearr_16234[8] = inst_16186);
(statearr_16234[9] = inst_16185);
(statearr_16234[10] = inst_16187);
(statearr_16234[11] = inst_16184);
return statearr_16234;
})();var statearr_16235_18240 = state_16227__$1;(statearr_16235_18240[2] = null);
(statearr_16235_18240[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16228 === 7))
{var inst_16223 = (state_16227[2]);var state_16227__$1 = state_16227;var statearr_16236_18241 = state_16227__$1;(statearr_16236_18241[2] = inst_16223);
(statearr_16236_18241[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16228 === 8))
{var inst_16186 = (state_16227[8]);var inst_16187 = (state_16227[10]);var inst_16189 = (inst_16187 < inst_16186);var inst_16190 = inst_16189;var state_16227__$1 = state_16227;if(cljs.core.truth_(inst_16190))
{var statearr_16237_18242 = state_16227__$1;(statearr_16237_18242[1] = 10);
} else
{var statearr_16238_18243 = state_16227__$1;(statearr_16238_18243[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16228 === 9))
{var inst_16220 = (state_16227[2]);var state_16227__$1 = (function (){var statearr_16239 = state_16227;(statearr_16239[12] = inst_16220);
return statearr_16239;
})();var statearr_16240_18244 = state_16227__$1;(statearr_16240_18244[2] = null);
(statearr_16240_18244[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16228 === 10))
{var inst_16185 = (state_16227[9]);var inst_16187 = (state_16227[10]);var inst_16192 = cljs.core._nth.call(null,inst_16185,inst_16187);var state_16227__$1 = state_16227;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16227__$1,13,out,inst_16192);
} else
{if((state_val_16228 === 11))
{var inst_16198 = (state_16227[13]);var inst_16184 = (state_16227[11]);var inst_16198__$1 = cljs.core.seq.call(null,inst_16184);var state_16227__$1 = (function (){var statearr_16244 = state_16227;(statearr_16244[13] = inst_16198__$1);
return statearr_16244;
})();if(inst_16198__$1)
{var statearr_16245_18245 = state_16227__$1;(statearr_16245_18245[1] = 14);
} else
{var statearr_16246_18246 = state_16227__$1;(statearr_16246_18246[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16228 === 12))
{var inst_16218 = (state_16227[2]);var state_16227__$1 = state_16227;var statearr_16247_18247 = state_16227__$1;(statearr_16247_18247[2] = inst_16218);
(statearr_16247_18247[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16228 === 13))
{var inst_16186 = (state_16227[8]);var inst_16185 = (state_16227[9]);var inst_16187 = (state_16227[10]);var inst_16184 = (state_16227[11]);var inst_16194 = (state_16227[2]);var inst_16195 = (inst_16187 + 1);var tmp16241 = inst_16186;var tmp16242 = inst_16185;var tmp16243 = inst_16184;var inst_16184__$1 = tmp16243;var inst_16185__$1 = tmp16242;var inst_16186__$1 = tmp16241;var inst_16187__$1 = inst_16195;var state_16227__$1 = (function (){var statearr_16248 = state_16227;(statearr_16248[8] = inst_16186__$1);
(statearr_16248[9] = inst_16185__$1);
(statearr_16248[10] = inst_16187__$1);
(statearr_16248[14] = inst_16194);
(statearr_16248[11] = inst_16184__$1);
return statearr_16248;
})();var statearr_16249_18248 = state_16227__$1;(statearr_16249_18248[2] = null);
(statearr_16249_18248[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16228 === 14))
{var inst_16198 = (state_16227[13]);var inst_16200 = cljs.core.chunked_seq_QMARK_.call(null,inst_16198);var state_16227__$1 = state_16227;if(inst_16200)
{var statearr_16250_18249 = state_16227__$1;(statearr_16250_18249[1] = 17);
} else
{var statearr_16251_18250 = state_16227__$1;(statearr_16251_18250[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16228 === 15))
{var state_16227__$1 = state_16227;var statearr_16252_18251 = state_16227__$1;(statearr_16252_18251[2] = null);
(statearr_16252_18251[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16228 === 16))
{var inst_16216 = (state_16227[2]);var state_16227__$1 = state_16227;var statearr_16253_18252 = state_16227__$1;(statearr_16253_18252[2] = inst_16216);
(statearr_16253_18252[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16228 === 17))
{var inst_16198 = (state_16227[13]);var inst_16202 = cljs.core.chunk_first.call(null,inst_16198);var inst_16203 = cljs.core.chunk_rest.call(null,inst_16198);var inst_16204 = cljs.core.count.call(null,inst_16202);var inst_16184 = inst_16203;var inst_16185 = inst_16202;var inst_16186 = inst_16204;var inst_16187 = 0;var state_16227__$1 = (function (){var statearr_16254 = state_16227;(statearr_16254[8] = inst_16186);
(statearr_16254[9] = inst_16185);
(statearr_16254[10] = inst_16187);
(statearr_16254[11] = inst_16184);
return statearr_16254;
})();var statearr_16255_18253 = state_16227__$1;(statearr_16255_18253[2] = null);
(statearr_16255_18253[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16228 === 18))
{var inst_16198 = (state_16227[13]);var inst_16207 = cljs.core.first.call(null,inst_16198);var state_16227__$1 = state_16227;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16227__$1,20,out,inst_16207);
} else
{if((state_val_16228 === 19))
{var inst_16213 = (state_16227[2]);var state_16227__$1 = state_16227;var statearr_16256_18254 = state_16227__$1;(statearr_16256_18254[2] = inst_16213);
(statearr_16256_18254[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16228 === 20))
{var inst_16198 = (state_16227[13]);var inst_16209 = (state_16227[2]);var inst_16210 = cljs.core.next.call(null,inst_16198);var inst_16184 = inst_16210;var inst_16185 = null;var inst_16186 = 0;var inst_16187 = 0;var state_16227__$1 = (function (){var statearr_16257 = state_16227;(statearr_16257[8] = inst_16186);
(statearr_16257[9] = inst_16185);
(statearr_16257[10] = inst_16187);
(statearr_16257[15] = inst_16209);
(statearr_16257[11] = inst_16184);
return statearr_16257;
})();var statearr_16258_18255 = state_16227__$1;(statearr_16258_18255[2] = null);
(statearr_16258_18255[1] = 8);
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
});})(c__13308__auto__))
;return ((function (switch__13238__auto__,c__13308__auto__){
return (function() {
var state_machine__13239__auto__ = null;
var state_machine__13239__auto____0 = (function (){var statearr_16262 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16262[0] = state_machine__13239__auto__);
(statearr_16262[1] = 1);
return statearr_16262;
});
var state_machine__13239__auto____1 = (function (state_16227){while(true){
var ret_value__13240__auto__ = (function (){try{while(true){
var result__13241__auto__ = switch__13238__auto__.call(null,state_16227);if(cljs.core.keyword_identical_QMARK_.call(null,result__13241__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13241__auto__;
}
break;
}
}catch (e16263){if((e16263 instanceof Object))
{var ex__13242__auto__ = e16263;var statearr_16264_18256 = state_16227;(statearr_16264_18256[5] = ex__13242__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16227);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16263;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13240__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18257 = state_16227;
state_16227 = G__18257;
continue;
}
} else
{return ret_value__13240__auto__;
}
break;
}
});
state_machine__13239__auto__ = function(state_16227){
switch(arguments.length){
case 0:
return state_machine__13239__auto____0.call(this);
case 1:
return state_machine__13239__auto____1.call(this,state_16227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13239__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13239__auto____0;
state_machine__13239__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13239__auto____1;
return state_machine__13239__auto__;
})()
;})(switch__13238__auto__,c__13308__auto__))
})();var state__13310__auto__ = (function (){var statearr_16265 = f__13309__auto__.call(null);(statearr_16265[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13308__auto__);
return statearr_16265;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13310__auto__);
});})(c__13308__auto__))
);
return c__13308__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__13308__auto___18258 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13308__auto___18258){
return (function (){var f__13309__auto__ = (function (){var switch__13238__auto__ = ((function (c__13308__auto___18258){
return (function (state_16325){var state_val_16326 = (state_16325[1]);if((state_val_16326 === 1))
{var state_16325__$1 = state_16325;var statearr_16327_18259 = state_16325__$1;(statearr_16327_18259[2] = null);
(statearr_16327_18259[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16326 === 2))
{var state_16325__$1 = state_16325;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16325__$1,4,from);
} else
{if((state_val_16326 === 3))
{var inst_16323 = (state_16325[2]);var state_16325__$1 = state_16325;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16325__$1,inst_16323);
} else
{if((state_val_16326 === 4))
{var inst_16308 = (state_16325[7]);var inst_16308__$1 = (state_16325[2]);var inst_16309 = (inst_16308__$1 == null);var state_16325__$1 = (function (){var statearr_16328 = state_16325;(statearr_16328[7] = inst_16308__$1);
return statearr_16328;
})();if(cljs.core.truth_(inst_16309))
{var statearr_16329_18260 = state_16325__$1;(statearr_16329_18260[1] = 5);
} else
{var statearr_16330_18261 = state_16325__$1;(statearr_16330_18261[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16326 === 5))
{var state_16325__$1 = state_16325;if(cljs.core.truth_(close_QMARK_))
{var statearr_16331_18262 = state_16325__$1;(statearr_16331_18262[1] = 8);
} else
{var statearr_16332_18263 = state_16325__$1;(statearr_16332_18263[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16326 === 6))
{var inst_16308 = (state_16325[7]);var state_16325__$1 = state_16325;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16325__$1,11,to,inst_16308);
} else
{if((state_val_16326 === 7))
{var inst_16321 = (state_16325[2]);var state_16325__$1 = state_16325;var statearr_16333_18264 = state_16325__$1;(statearr_16333_18264[2] = inst_16321);
(statearr_16333_18264[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16326 === 8))
{var inst_16312 = cljs.core.async.close_BANG_.call(null,to);var state_16325__$1 = state_16325;var statearr_16334_18265 = state_16325__$1;(statearr_16334_18265[2] = inst_16312);
(statearr_16334_18265[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16326 === 9))
{var state_16325__$1 = state_16325;var statearr_16335_18266 = state_16325__$1;(statearr_16335_18266[2] = null);
(statearr_16335_18266[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16326 === 10))
{var inst_16315 = (state_16325[2]);var state_16325__$1 = state_16325;var statearr_16336_18267 = state_16325__$1;(statearr_16336_18267[2] = inst_16315);
(statearr_16336_18267[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16326 === 11))
{var inst_16318 = (state_16325[2]);var state_16325__$1 = (function (){var statearr_16337 = state_16325;(statearr_16337[8] = inst_16318);
return statearr_16337;
})();var statearr_16338_18268 = state_16325__$1;(statearr_16338_18268[2] = null);
(statearr_16338_18268[1] = 2);
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
});})(c__13308__auto___18258))
;return ((function (switch__13238__auto__,c__13308__auto___18258){
return (function() {
var state_machine__13239__auto__ = null;
var state_machine__13239__auto____0 = (function (){var statearr_16342 = [null,null,null,null,null,null,null,null,null];(statearr_16342[0] = state_machine__13239__auto__);
(statearr_16342[1] = 1);
return statearr_16342;
});
var state_machine__13239__auto____1 = (function (state_16325){while(true){
var ret_value__13240__auto__ = (function (){try{while(true){
var result__13241__auto__ = switch__13238__auto__.call(null,state_16325);if(cljs.core.keyword_identical_QMARK_.call(null,result__13241__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13241__auto__;
}
break;
}
}catch (e16343){if((e16343 instanceof Object))
{var ex__13242__auto__ = e16343;var statearr_16344_18269 = state_16325;(statearr_16344_18269[5] = ex__13242__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16325);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16343;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13240__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18270 = state_16325;
state_16325 = G__18270;
continue;
}
} else
{return ret_value__13240__auto__;
}
break;
}
});
state_machine__13239__auto__ = function(state_16325){
switch(arguments.length){
case 0:
return state_machine__13239__auto____0.call(this);
case 1:
return state_machine__13239__auto____1.call(this,state_16325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13239__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13239__auto____0;
state_machine__13239__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13239__auto____1;
return state_machine__13239__auto__;
})()
;})(switch__13238__auto__,c__13308__auto___18258))
})();var state__13310__auto__ = (function (){var statearr_16345 = f__13309__auto__.call(null);(statearr_16345[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13308__auto___18258);
return statearr_16345;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13310__auto__);
});})(c__13308__auto___18258))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__13308__auto___18271 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13308__auto___18271,tc,fc){
return (function (){var f__13309__auto__ = (function (){var switch__13238__auto__ = ((function (c__13308__auto___18271,tc,fc){
return (function (state_16410){var state_val_16411 = (state_16410[1]);if((state_val_16411 === 1))
{var state_16410__$1 = state_16410;var statearr_16412_18272 = state_16410__$1;(statearr_16412_18272[2] = null);
(statearr_16412_18272[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16411 === 2))
{var state_16410__$1 = state_16410;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16410__$1,4,ch);
} else
{if((state_val_16411 === 3))
{var inst_16408 = (state_16410[2]);var state_16410__$1 = state_16410;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16410__$1,inst_16408);
} else
{if((state_val_16411 === 4))
{var inst_16391 = (state_16410[7]);var inst_16391__$1 = (state_16410[2]);var inst_16392 = (inst_16391__$1 == null);var state_16410__$1 = (function (){var statearr_16413 = state_16410;(statearr_16413[7] = inst_16391__$1);
return statearr_16413;
})();if(cljs.core.truth_(inst_16392))
{var statearr_16414_18273 = state_16410__$1;(statearr_16414_18273[1] = 5);
} else
{var statearr_16415_18274 = state_16410__$1;(statearr_16415_18274[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16411 === 5))
{var inst_16394 = cljs.core.async.close_BANG_.call(null,tc);var inst_16395 = cljs.core.async.close_BANG_.call(null,fc);var state_16410__$1 = (function (){var statearr_16416 = state_16410;(statearr_16416[8] = inst_16394);
return statearr_16416;
})();var statearr_16417_18275 = state_16410__$1;(statearr_16417_18275[2] = inst_16395);
(statearr_16417_18275[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16411 === 6))
{var inst_16391 = (state_16410[7]);var inst_16397 = p.call(null,inst_16391);var state_16410__$1 = state_16410;if(cljs.core.truth_(inst_16397))
{var statearr_16418_18276 = state_16410__$1;(statearr_16418_18276[1] = 9);
} else
{var statearr_16419_18277 = state_16410__$1;(statearr_16419_18277[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16411 === 7))
{var inst_16406 = (state_16410[2]);var state_16410__$1 = state_16410;var statearr_16420_18278 = state_16410__$1;(statearr_16420_18278[2] = inst_16406);
(statearr_16420_18278[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16411 === 8))
{var inst_16403 = (state_16410[2]);var state_16410__$1 = (function (){var statearr_16421 = state_16410;(statearr_16421[9] = inst_16403);
return statearr_16421;
})();var statearr_16422_18279 = state_16410__$1;(statearr_16422_18279[2] = null);
(statearr_16422_18279[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16411 === 9))
{var state_16410__$1 = state_16410;var statearr_16423_18280 = state_16410__$1;(statearr_16423_18280[2] = tc);
(statearr_16423_18280[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16411 === 10))
{var state_16410__$1 = state_16410;var statearr_16424_18281 = state_16410__$1;(statearr_16424_18281[2] = fc);
(statearr_16424_18281[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16411 === 11))
{var inst_16391 = (state_16410[7]);var inst_16401 = (state_16410[2]);var state_16410__$1 = state_16410;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16410__$1,8,inst_16401,inst_16391);
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
});})(c__13308__auto___18271,tc,fc))
;return ((function (switch__13238__auto__,c__13308__auto___18271,tc,fc){
return (function() {
var state_machine__13239__auto__ = null;
var state_machine__13239__auto____0 = (function (){var statearr_16428 = [null,null,null,null,null,null,null,null,null,null];(statearr_16428[0] = state_machine__13239__auto__);
(statearr_16428[1] = 1);
return statearr_16428;
});
var state_machine__13239__auto____1 = (function (state_16410){while(true){
var ret_value__13240__auto__ = (function (){try{while(true){
var result__13241__auto__ = switch__13238__auto__.call(null,state_16410);if(cljs.core.keyword_identical_QMARK_.call(null,result__13241__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13241__auto__;
}
break;
}
}catch (e16429){if((e16429 instanceof Object))
{var ex__13242__auto__ = e16429;var statearr_16430_18282 = state_16410;(statearr_16430_18282[5] = ex__13242__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16410);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16429;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13240__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18283 = state_16410;
state_16410 = G__18283;
continue;
}
} else
{return ret_value__13240__auto__;
}
break;
}
});
state_machine__13239__auto__ = function(state_16410){
switch(arguments.length){
case 0:
return state_machine__13239__auto____0.call(this);
case 1:
return state_machine__13239__auto____1.call(this,state_16410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13239__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13239__auto____0;
state_machine__13239__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13239__auto____1;
return state_machine__13239__auto__;
})()
;})(switch__13238__auto__,c__13308__auto___18271,tc,fc))
})();var state__13310__auto__ = (function (){var statearr_16431 = f__13309__auto__.call(null);(statearr_16431[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13308__auto___18271);
return statearr_16431;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13310__auto__);
});})(c__13308__auto___18271,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__13308__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13308__auto__){
return (function (){var f__13309__auto__ = (function (){var switch__13238__auto__ = ((function (c__13308__auto__){
return (function (state_16478){var state_val_16479 = (state_16478[1]);if((state_val_16479 === 7))
{var inst_16474 = (state_16478[2]);var state_16478__$1 = state_16478;var statearr_16480_18284 = state_16478__$1;(statearr_16480_18284[2] = inst_16474);
(statearr_16480_18284[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16479 === 6))
{var inst_16467 = (state_16478[7]);var inst_16464 = (state_16478[8]);var inst_16471 = f.call(null,inst_16464,inst_16467);var inst_16464__$1 = inst_16471;var state_16478__$1 = (function (){var statearr_16481 = state_16478;(statearr_16481[8] = inst_16464__$1);
return statearr_16481;
})();var statearr_16482_18285 = state_16478__$1;(statearr_16482_18285[2] = null);
(statearr_16482_18285[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16479 === 5))
{var inst_16464 = (state_16478[8]);var state_16478__$1 = state_16478;var statearr_16483_18286 = state_16478__$1;(statearr_16483_18286[2] = inst_16464);
(statearr_16483_18286[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16479 === 4))
{var inst_16467 = (state_16478[7]);var inst_16467__$1 = (state_16478[2]);var inst_16468 = (inst_16467__$1 == null);var state_16478__$1 = (function (){var statearr_16484 = state_16478;(statearr_16484[7] = inst_16467__$1);
return statearr_16484;
})();if(cljs.core.truth_(inst_16468))
{var statearr_16485_18287 = state_16478__$1;(statearr_16485_18287[1] = 5);
} else
{var statearr_16486_18288 = state_16478__$1;(statearr_16486_18288[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16479 === 3))
{var inst_16476 = (state_16478[2]);var state_16478__$1 = state_16478;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16478__$1,inst_16476);
} else
{if((state_val_16479 === 2))
{var state_16478__$1 = state_16478;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16478__$1,4,ch);
} else
{if((state_val_16479 === 1))
{var inst_16464 = init;var state_16478__$1 = (function (){var statearr_16487 = state_16478;(statearr_16487[8] = inst_16464);
return statearr_16487;
})();var statearr_16488_18289 = state_16478__$1;(statearr_16488_18289[2] = null);
(statearr_16488_18289[1] = 2);
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
});})(c__13308__auto__))
;return ((function (switch__13238__auto__,c__13308__auto__){
return (function() {
var state_machine__13239__auto__ = null;
var state_machine__13239__auto____0 = (function (){var statearr_16492 = [null,null,null,null,null,null,null,null,null];(statearr_16492[0] = state_machine__13239__auto__);
(statearr_16492[1] = 1);
return statearr_16492;
});
var state_machine__13239__auto____1 = (function (state_16478){while(true){
var ret_value__13240__auto__ = (function (){try{while(true){
var result__13241__auto__ = switch__13238__auto__.call(null,state_16478);if(cljs.core.keyword_identical_QMARK_.call(null,result__13241__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13241__auto__;
}
break;
}
}catch (e16493){if((e16493 instanceof Object))
{var ex__13242__auto__ = e16493;var statearr_16494_18290 = state_16478;(statearr_16494_18290[5] = ex__13242__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16478);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16493;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13240__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18291 = state_16478;
state_16478 = G__18291;
continue;
}
} else
{return ret_value__13240__auto__;
}
break;
}
});
state_machine__13239__auto__ = function(state_16478){
switch(arguments.length){
case 0:
return state_machine__13239__auto____0.call(this);
case 1:
return state_machine__13239__auto____1.call(this,state_16478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13239__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13239__auto____0;
state_machine__13239__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13239__auto____1;
return state_machine__13239__auto__;
})()
;})(switch__13238__auto__,c__13308__auto__))
})();var state__13310__auto__ = (function (){var statearr_16495 = f__13309__auto__.call(null);(statearr_16495[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13308__auto__);
return statearr_16495;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13310__auto__);
});})(c__13308__auto__))
);
return c__13308__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__13308__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13308__auto__){
return (function (){var f__13309__auto__ = (function (){var switch__13238__auto__ = ((function (c__13308__auto__){
return (function (state_16557){var state_val_16558 = (state_16557[1]);if((state_val_16558 === 1))
{var inst_16537 = cljs.core.seq.call(null,coll);var inst_16538 = inst_16537;var state_16557__$1 = (function (){var statearr_16559 = state_16557;(statearr_16559[7] = inst_16538);
return statearr_16559;
})();var statearr_16560_18292 = state_16557__$1;(statearr_16560_18292[2] = null);
(statearr_16560_18292[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16558 === 2))
{var inst_16538 = (state_16557[7]);var state_16557__$1 = state_16557;if(cljs.core.truth_(inst_16538))
{var statearr_16561_18293 = state_16557__$1;(statearr_16561_18293[1] = 4);
} else
{var statearr_16562_18294 = state_16557__$1;(statearr_16562_18294[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16558 === 3))
{var inst_16555 = (state_16557[2]);var state_16557__$1 = state_16557;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16557__$1,inst_16555);
} else
{if((state_val_16558 === 4))
{var inst_16538 = (state_16557[7]);var inst_16541 = cljs.core.first.call(null,inst_16538);var state_16557__$1 = state_16557;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16557__$1,7,ch,inst_16541);
} else
{if((state_val_16558 === 5))
{var state_16557__$1 = state_16557;if(cljs.core.truth_(close_QMARK_))
{var statearr_16563_18295 = state_16557__$1;(statearr_16563_18295[1] = 8);
} else
{var statearr_16564_18296 = state_16557__$1;(statearr_16564_18296[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16558 === 6))
{var inst_16553 = (state_16557[2]);var state_16557__$1 = state_16557;var statearr_16565_18297 = state_16557__$1;(statearr_16565_18297[2] = inst_16553);
(statearr_16565_18297[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16558 === 7))
{var inst_16538 = (state_16557[7]);var inst_16543 = (state_16557[2]);var inst_16544 = cljs.core.next.call(null,inst_16538);var inst_16538__$1 = inst_16544;var state_16557__$1 = (function (){var statearr_16566 = state_16557;(statearr_16566[8] = inst_16543);
(statearr_16566[7] = inst_16538__$1);
return statearr_16566;
})();var statearr_16567_18298 = state_16557__$1;(statearr_16567_18298[2] = null);
(statearr_16567_18298[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16558 === 8))
{var inst_16548 = cljs.core.async.close_BANG_.call(null,ch);var state_16557__$1 = state_16557;var statearr_16568_18299 = state_16557__$1;(statearr_16568_18299[2] = inst_16548);
(statearr_16568_18299[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16558 === 9))
{var state_16557__$1 = state_16557;var statearr_16569_18300 = state_16557__$1;(statearr_16569_18300[2] = null);
(statearr_16569_18300[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16558 === 10))
{var inst_16551 = (state_16557[2]);var state_16557__$1 = state_16557;var statearr_16570_18301 = state_16557__$1;(statearr_16570_18301[2] = inst_16551);
(statearr_16570_18301[1] = 6);
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
});})(c__13308__auto__))
;return ((function (switch__13238__auto__,c__13308__auto__){
return (function() {
var state_machine__13239__auto__ = null;
var state_machine__13239__auto____0 = (function (){var statearr_16574 = [null,null,null,null,null,null,null,null,null];(statearr_16574[0] = state_machine__13239__auto__);
(statearr_16574[1] = 1);
return statearr_16574;
});
var state_machine__13239__auto____1 = (function (state_16557){while(true){
var ret_value__13240__auto__ = (function (){try{while(true){
var result__13241__auto__ = switch__13238__auto__.call(null,state_16557);if(cljs.core.keyword_identical_QMARK_.call(null,result__13241__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13241__auto__;
}
break;
}
}catch (e16575){if((e16575 instanceof Object))
{var ex__13242__auto__ = e16575;var statearr_16576_18302 = state_16557;(statearr_16576_18302[5] = ex__13242__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16557);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16575;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13240__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18303 = state_16557;
state_16557 = G__18303;
continue;
}
} else
{return ret_value__13240__auto__;
}
break;
}
});
state_machine__13239__auto__ = function(state_16557){
switch(arguments.length){
case 0:
return state_machine__13239__auto____0.call(this);
case 1:
return state_machine__13239__auto____1.call(this,state_16557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13239__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13239__auto____0;
state_machine__13239__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13239__auto____1;
return state_machine__13239__auto__;
})()
;})(switch__13238__auto__,c__13308__auto__))
})();var state__13310__auto__ = (function (){var statearr_16577 = f__13309__auto__.call(null);(statearr_16577[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13308__auto__);
return statearr_16577;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13310__auto__);
});})(c__13308__auto__))
);
return c__13308__auto__;
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
cljs.core.async.Mux = (function (){var obj16579 = {};return obj16579;
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
cljs.core.async.Mult = (function (){var obj16581 = {};return obj16581;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t16805 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16805 = (function (cs,ch,mult,meta16806){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta16806 = meta16806;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16805.cljs$lang$type = true;
cljs.core.async.t16805.cljs$lang$ctorStr = "cljs.core.async/t16805";
cljs.core.async.t16805.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async/t16805");
});})(cs))
;
cljs.core.async.t16805.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t16805.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t16805.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t16805.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t16805.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16805.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t16805.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16807){var self__ = this;
var _16807__$1 = this;return self__.meta16806;
});})(cs))
;
cljs.core.async.t16805.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16807,meta16806__$1){var self__ = this;
var _16807__$1 = this;return (new cljs.core.async.t16805(self__.cs,self__.ch,self__.mult,meta16806__$1));
});})(cs))
;
cljs.core.async.__GT_t16805 = ((function (cs){
return (function __GT_t16805(cs__$1,ch__$1,mult__$1,meta16806){return (new cljs.core.async.t16805(cs__$1,ch__$1,mult__$1,meta16806));
});})(cs))
;
}
return (new cljs.core.async.t16805(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__13308__auto___18304 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13308__auto___18304,cs,m,dchan,dctr,done){
return (function (){var f__13309__auto__ = (function (){var switch__13238__auto__ = ((function (c__13308__auto___18304,cs,m,dchan,dctr,done){
return (function (state_16942){var state_val_16943 = (state_16942[1]);if((state_val_16943 === 32))
{var inst_16810 = (state_16942[7]);var inst_16886 = (state_16942[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16942,31,Object,null,30);var inst_16893 = cljs.core.async.put_BANG_.call(null,inst_16886,inst_16810,done);var state_16942__$1 = state_16942;var statearr_16944_18305 = state_16942__$1;(statearr_16944_18305[2] = inst_16893);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16942__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16943 === 1))
{var state_16942__$1 = state_16942;var statearr_16945_18306 = state_16942__$1;(statearr_16945_18306[2] = null);
(statearr_16945_18306[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16943 === 33))
{var inst_16899 = (state_16942[9]);var inst_16901 = cljs.core.chunked_seq_QMARK_.call(null,inst_16899);var state_16942__$1 = state_16942;if(inst_16901)
{var statearr_16946_18307 = state_16942__$1;(statearr_16946_18307[1] = 36);
} else
{var statearr_16947_18308 = state_16942__$1;(statearr_16947_18308[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16943 === 2))
{var state_16942__$1 = state_16942;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16942__$1,4,ch);
} else
{if((state_val_16943 === 34))
{var state_16942__$1 = state_16942;var statearr_16948_18309 = state_16942__$1;(statearr_16948_18309[2] = null);
(statearr_16948_18309[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16943 === 3))
{var inst_16940 = (state_16942[2]);var state_16942__$1 = state_16942;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16942__$1,inst_16940);
} else
{if((state_val_16943 === 35))
{var inst_16924 = (state_16942[2]);var state_16942__$1 = state_16942;var statearr_16949_18310 = state_16942__$1;(statearr_16949_18310[2] = inst_16924);
(statearr_16949_18310[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16943 === 4))
{var inst_16810 = (state_16942[7]);var inst_16810__$1 = (state_16942[2]);var inst_16811 = (inst_16810__$1 == null);var state_16942__$1 = (function (){var statearr_16950 = state_16942;(statearr_16950[7] = inst_16810__$1);
return statearr_16950;
})();if(cljs.core.truth_(inst_16811))
{var statearr_16951_18311 = state_16942__$1;(statearr_16951_18311[1] = 5);
} else
{var statearr_16952_18312 = state_16942__$1;(statearr_16952_18312[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16943 === 36))
{var inst_16899 = (state_16942[9]);var inst_16903 = cljs.core.chunk_first.call(null,inst_16899);var inst_16904 = cljs.core.chunk_rest.call(null,inst_16899);var inst_16905 = cljs.core.count.call(null,inst_16903);var inst_16878 = inst_16904;var inst_16879 = inst_16903;var inst_16880 = inst_16905;var inst_16881 = 0;var state_16942__$1 = (function (){var statearr_16953 = state_16942;(statearr_16953[10] = inst_16878);
(statearr_16953[11] = inst_16881);
(statearr_16953[12] = inst_16880);
(statearr_16953[13] = inst_16879);
return statearr_16953;
})();var statearr_16954_18313 = state_16942__$1;(statearr_16954_18313[2] = null);
(statearr_16954_18313[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16943 === 5))
{var inst_16817 = cljs.core.deref.call(null,cs);var inst_16818 = cljs.core.seq.call(null,inst_16817);var inst_16819 = inst_16818;var inst_16820 = null;var inst_16821 = 0;var inst_16822 = 0;var state_16942__$1 = (function (){var statearr_16955 = state_16942;(statearr_16955[14] = inst_16822);
(statearr_16955[15] = inst_16821);
(statearr_16955[16] = inst_16820);
(statearr_16955[17] = inst_16819);
return statearr_16955;
})();var statearr_16956_18314 = state_16942__$1;(statearr_16956_18314[2] = null);
(statearr_16956_18314[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16943 === 37))
{var inst_16899 = (state_16942[9]);var inst_16908 = cljs.core.first.call(null,inst_16899);var state_16942__$1 = (function (){var statearr_16957 = state_16942;(statearr_16957[18] = inst_16908);
return statearr_16957;
})();var statearr_16958_18315 = state_16942__$1;(statearr_16958_18315[2] = null);
(statearr_16958_18315[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16943 === 6))
{var inst_16870 = (state_16942[19]);var inst_16869 = cljs.core.deref.call(null,cs);var inst_16870__$1 = cljs.core.keys.call(null,inst_16869);var inst_16871 = cljs.core.count.call(null,inst_16870__$1);var inst_16872 = cljs.core.reset_BANG_.call(null,dctr,inst_16871);var inst_16877 = cljs.core.seq.call(null,inst_16870__$1);var inst_16878 = inst_16877;var inst_16879 = null;var inst_16880 = 0;var inst_16881 = 0;var state_16942__$1 = (function (){var statearr_16959 = state_16942;(statearr_16959[10] = inst_16878);
(statearr_16959[20] = inst_16872);
(statearr_16959[19] = inst_16870__$1);
(statearr_16959[11] = inst_16881);
(statearr_16959[12] = inst_16880);
(statearr_16959[13] = inst_16879);
return statearr_16959;
})();var statearr_16960_18316 = state_16942__$1;(statearr_16960_18316[2] = null);
(statearr_16960_18316[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16943 === 38))
{var inst_16921 = (state_16942[2]);var state_16942__$1 = state_16942;var statearr_16961_18317 = state_16942__$1;(statearr_16961_18317[2] = inst_16921);
(statearr_16961_18317[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16943 === 7))
{var inst_16938 = (state_16942[2]);var state_16942__$1 = state_16942;var statearr_16962_18318 = state_16942__$1;(statearr_16962_18318[2] = inst_16938);
(statearr_16962_18318[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16943 === 39))
{var inst_16899 = (state_16942[9]);var inst_16917 = (state_16942[2]);var inst_16918 = cljs.core.next.call(null,inst_16899);var inst_16878 = inst_16918;var inst_16879 = null;var inst_16880 = 0;var inst_16881 = 0;var state_16942__$1 = (function (){var statearr_16963 = state_16942;(statearr_16963[21] = inst_16917);
(statearr_16963[10] = inst_16878);
(statearr_16963[11] = inst_16881);
(statearr_16963[12] = inst_16880);
(statearr_16963[13] = inst_16879);
return statearr_16963;
})();var statearr_16964_18319 = state_16942__$1;(statearr_16964_18319[2] = null);
(statearr_16964_18319[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16943 === 8))
{var inst_16822 = (state_16942[14]);var inst_16821 = (state_16942[15]);var inst_16824 = (inst_16822 < inst_16821);var inst_16825 = inst_16824;var state_16942__$1 = state_16942;if(cljs.core.truth_(inst_16825))
{var statearr_16965_18320 = state_16942__$1;(statearr_16965_18320[1] = 10);
} else
{var statearr_16966_18321 = state_16942__$1;(statearr_16966_18321[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16943 === 40))
{var inst_16908 = (state_16942[18]);var inst_16909 = (state_16942[2]);var inst_16910 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_16911 = cljs.core.async.untap_STAR_.call(null,m,inst_16908);var state_16942__$1 = (function (){var statearr_16967 = state_16942;(statearr_16967[22] = inst_16910);
(statearr_16967[23] = inst_16909);
return statearr_16967;
})();var statearr_16968_18322 = state_16942__$1;(statearr_16968_18322[2] = inst_16911);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16942__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16943 === 9))
{var inst_16867 = (state_16942[2]);var state_16942__$1 = state_16942;var statearr_16969_18323 = state_16942__$1;(statearr_16969_18323[2] = inst_16867);
(statearr_16969_18323[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16943 === 41))
{var inst_16810 = (state_16942[7]);var inst_16908 = (state_16942[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16942,40,Object,null,39);var inst_16915 = cljs.core.async.put_BANG_.call(null,inst_16908,inst_16810,done);var state_16942__$1 = state_16942;var statearr_16970_18324 = state_16942__$1;(statearr_16970_18324[2] = inst_16915);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16942__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16943 === 10))
{var inst_16822 = (state_16942[14]);var inst_16820 = (state_16942[16]);var inst_16828 = cljs.core._nth.call(null,inst_16820,inst_16822);var inst_16829 = cljs.core.nth.call(null,inst_16828,0,null);var inst_16830 = cljs.core.nth.call(null,inst_16828,1,null);var state_16942__$1 = (function (){var statearr_16971 = state_16942;(statearr_16971[24] = inst_16829);
return statearr_16971;
})();if(cljs.core.truth_(inst_16830))
{var statearr_16972_18325 = state_16942__$1;(statearr_16972_18325[1] = 13);
} else
{var statearr_16973_18326 = state_16942__$1;(statearr_16973_18326[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16943 === 42))
{var state_16942__$1 = state_16942;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16942__$1,45,dchan);
} else
{if((state_val_16943 === 11))
{var inst_16839 = (state_16942[25]);var inst_16819 = (state_16942[17]);var inst_16839__$1 = cljs.core.seq.call(null,inst_16819);var state_16942__$1 = (function (){var statearr_16974 = state_16942;(statearr_16974[25] = inst_16839__$1);
return statearr_16974;
})();if(inst_16839__$1)
{var statearr_16975_18327 = state_16942__$1;(statearr_16975_18327[1] = 16);
} else
{var statearr_16976_18328 = state_16942__$1;(statearr_16976_18328[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16943 === 43))
{var state_16942__$1 = state_16942;var statearr_16977_18329 = state_16942__$1;(statearr_16977_18329[2] = null);
(statearr_16977_18329[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16943 === 12))
{var inst_16865 = (state_16942[2]);var state_16942__$1 = state_16942;var statearr_16978_18330 = state_16942__$1;(statearr_16978_18330[2] = inst_16865);
(statearr_16978_18330[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16943 === 44))
{var inst_16935 = (state_16942[2]);var state_16942__$1 = (function (){var statearr_16979 = state_16942;(statearr_16979[26] = inst_16935);
return statearr_16979;
})();var statearr_16980_18331 = state_16942__$1;(statearr_16980_18331[2] = null);
(statearr_16980_18331[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16943 === 13))
{var inst_16829 = (state_16942[24]);var inst_16832 = cljs.core.async.close_BANG_.call(null,inst_16829);var state_16942__$1 = state_16942;var statearr_16981_18332 = state_16942__$1;(statearr_16981_18332[2] = inst_16832);
(statearr_16981_18332[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16943 === 45))
{var inst_16932 = (state_16942[2]);var state_16942__$1 = state_16942;var statearr_16985_18333 = state_16942__$1;(statearr_16985_18333[2] = inst_16932);
(statearr_16985_18333[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16943 === 14))
{var state_16942__$1 = state_16942;var statearr_16986_18334 = state_16942__$1;(statearr_16986_18334[2] = null);
(statearr_16986_18334[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16943 === 15))
{var inst_16822 = (state_16942[14]);var inst_16821 = (state_16942[15]);var inst_16820 = (state_16942[16]);var inst_16819 = (state_16942[17]);var inst_16835 = (state_16942[2]);var inst_16836 = (inst_16822 + 1);var tmp16982 = inst_16821;var tmp16983 = inst_16820;var tmp16984 = inst_16819;var inst_16819__$1 = tmp16984;var inst_16820__$1 = tmp16983;var inst_16821__$1 = tmp16982;var inst_16822__$1 = inst_16836;var state_16942__$1 = (function (){var statearr_16987 = state_16942;(statearr_16987[14] = inst_16822__$1);
(statearr_16987[15] = inst_16821__$1);
(statearr_16987[16] = inst_16820__$1);
(statearr_16987[17] = inst_16819__$1);
(statearr_16987[27] = inst_16835);
return statearr_16987;
})();var statearr_16988_18335 = state_16942__$1;(statearr_16988_18335[2] = null);
(statearr_16988_18335[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16943 === 16))
{var inst_16839 = (state_16942[25]);var inst_16841 = cljs.core.chunked_seq_QMARK_.call(null,inst_16839);var state_16942__$1 = state_16942;if(inst_16841)
{var statearr_16989_18336 = state_16942__$1;(statearr_16989_18336[1] = 19);
} else
{var statearr_16990_18337 = state_16942__$1;(statearr_16990_18337[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16943 === 17))
{var state_16942__$1 = state_16942;var statearr_16991_18338 = state_16942__$1;(statearr_16991_18338[2] = null);
(statearr_16991_18338[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16943 === 18))
{var inst_16863 = (state_16942[2]);var state_16942__$1 = state_16942;var statearr_16992_18339 = state_16942__$1;(statearr_16992_18339[2] = inst_16863);
(statearr_16992_18339[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16943 === 19))
{var inst_16839 = (state_16942[25]);var inst_16843 = cljs.core.chunk_first.call(null,inst_16839);var inst_16844 = cljs.core.chunk_rest.call(null,inst_16839);var inst_16845 = cljs.core.count.call(null,inst_16843);var inst_16819 = inst_16844;var inst_16820 = inst_16843;var inst_16821 = inst_16845;var inst_16822 = 0;var state_16942__$1 = (function (){var statearr_16993 = state_16942;(statearr_16993[14] = inst_16822);
(statearr_16993[15] = inst_16821);
(statearr_16993[16] = inst_16820);
(statearr_16993[17] = inst_16819);
return statearr_16993;
})();var statearr_16994_18340 = state_16942__$1;(statearr_16994_18340[2] = null);
(statearr_16994_18340[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16943 === 20))
{var inst_16839 = (state_16942[25]);var inst_16849 = cljs.core.first.call(null,inst_16839);var inst_16850 = cljs.core.nth.call(null,inst_16849,0,null);var inst_16851 = cljs.core.nth.call(null,inst_16849,1,null);var state_16942__$1 = (function (){var statearr_16995 = state_16942;(statearr_16995[28] = inst_16850);
return statearr_16995;
})();if(cljs.core.truth_(inst_16851))
{var statearr_16996_18341 = state_16942__$1;(statearr_16996_18341[1] = 22);
} else
{var statearr_16997_18342 = state_16942__$1;(statearr_16997_18342[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16943 === 21))
{var inst_16860 = (state_16942[2]);var state_16942__$1 = state_16942;var statearr_16998_18343 = state_16942__$1;(statearr_16998_18343[2] = inst_16860);
(statearr_16998_18343[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16943 === 22))
{var inst_16850 = (state_16942[28]);var inst_16853 = cljs.core.async.close_BANG_.call(null,inst_16850);var state_16942__$1 = state_16942;var statearr_16999_18344 = state_16942__$1;(statearr_16999_18344[2] = inst_16853);
(statearr_16999_18344[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16943 === 23))
{var state_16942__$1 = state_16942;var statearr_17000_18345 = state_16942__$1;(statearr_17000_18345[2] = null);
(statearr_17000_18345[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16943 === 24))
{var inst_16839 = (state_16942[25]);var inst_16856 = (state_16942[2]);var inst_16857 = cljs.core.next.call(null,inst_16839);var inst_16819 = inst_16857;var inst_16820 = null;var inst_16821 = 0;var inst_16822 = 0;var state_16942__$1 = (function (){var statearr_17001 = state_16942;(statearr_17001[14] = inst_16822);
(statearr_17001[15] = inst_16821);
(statearr_17001[16] = inst_16820);
(statearr_17001[17] = inst_16819);
(statearr_17001[29] = inst_16856);
return statearr_17001;
})();var statearr_17002_18346 = state_16942__$1;(statearr_17002_18346[2] = null);
(statearr_17002_18346[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16943 === 25))
{var inst_16881 = (state_16942[11]);var inst_16880 = (state_16942[12]);var inst_16883 = (inst_16881 < inst_16880);var inst_16884 = inst_16883;var state_16942__$1 = state_16942;if(cljs.core.truth_(inst_16884))
{var statearr_17003_18347 = state_16942__$1;(statearr_17003_18347[1] = 27);
} else
{var statearr_17004_18348 = state_16942__$1;(statearr_17004_18348[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16943 === 26))
{var inst_16870 = (state_16942[19]);var inst_16928 = (state_16942[2]);var inst_16929 = cljs.core.seq.call(null,inst_16870);var state_16942__$1 = (function (){var statearr_17005 = state_16942;(statearr_17005[30] = inst_16928);
return statearr_17005;
})();if(inst_16929)
{var statearr_17006_18349 = state_16942__$1;(statearr_17006_18349[1] = 42);
} else
{var statearr_17007_18350 = state_16942__$1;(statearr_17007_18350[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16943 === 27))
{var inst_16881 = (state_16942[11]);var inst_16879 = (state_16942[13]);var inst_16886 = cljs.core._nth.call(null,inst_16879,inst_16881);var state_16942__$1 = (function (){var statearr_17008 = state_16942;(statearr_17008[8] = inst_16886);
return statearr_17008;
})();var statearr_17009_18351 = state_16942__$1;(statearr_17009_18351[2] = null);
(statearr_17009_18351[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16943 === 28))
{var inst_16878 = (state_16942[10]);var inst_16899 = (state_16942[9]);var inst_16899__$1 = cljs.core.seq.call(null,inst_16878);var state_16942__$1 = (function (){var statearr_17013 = state_16942;(statearr_17013[9] = inst_16899__$1);
return statearr_17013;
})();if(inst_16899__$1)
{var statearr_17014_18352 = state_16942__$1;(statearr_17014_18352[1] = 33);
} else
{var statearr_17015_18353 = state_16942__$1;(statearr_17015_18353[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16943 === 29))
{var inst_16926 = (state_16942[2]);var state_16942__$1 = state_16942;var statearr_17016_18354 = state_16942__$1;(statearr_17016_18354[2] = inst_16926);
(statearr_17016_18354[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16943 === 30))
{var inst_16878 = (state_16942[10]);var inst_16881 = (state_16942[11]);var inst_16880 = (state_16942[12]);var inst_16879 = (state_16942[13]);var inst_16895 = (state_16942[2]);var inst_16896 = (inst_16881 + 1);var tmp17010 = inst_16878;var tmp17011 = inst_16880;var tmp17012 = inst_16879;var inst_16878__$1 = tmp17010;var inst_16879__$1 = tmp17012;var inst_16880__$1 = tmp17011;var inst_16881__$1 = inst_16896;var state_16942__$1 = (function (){var statearr_17017 = state_16942;(statearr_17017[10] = inst_16878__$1);
(statearr_17017[11] = inst_16881__$1);
(statearr_17017[12] = inst_16880__$1);
(statearr_17017[31] = inst_16895);
(statearr_17017[13] = inst_16879__$1);
return statearr_17017;
})();var statearr_17018_18355 = state_16942__$1;(statearr_17018_18355[2] = null);
(statearr_17018_18355[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16943 === 31))
{var inst_16886 = (state_16942[8]);var inst_16887 = (state_16942[2]);var inst_16888 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_16889 = cljs.core.async.untap_STAR_.call(null,m,inst_16886);var state_16942__$1 = (function (){var statearr_17019 = state_16942;(statearr_17019[32] = inst_16888);
(statearr_17019[33] = inst_16887);
return statearr_17019;
})();var statearr_17020_18356 = state_16942__$1;(statearr_17020_18356[2] = inst_16889);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16942__$1);
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
});})(c__13308__auto___18304,cs,m,dchan,dctr,done))
;return ((function (switch__13238__auto__,c__13308__auto___18304,cs,m,dchan,dctr,done){
return (function() {
var state_machine__13239__auto__ = null;
var state_machine__13239__auto____0 = (function (){var statearr_17024 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17024[0] = state_machine__13239__auto__);
(statearr_17024[1] = 1);
return statearr_17024;
});
var state_machine__13239__auto____1 = (function (state_16942){while(true){
var ret_value__13240__auto__ = (function (){try{while(true){
var result__13241__auto__ = switch__13238__auto__.call(null,state_16942);if(cljs.core.keyword_identical_QMARK_.call(null,result__13241__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13241__auto__;
}
break;
}
}catch (e17025){if((e17025 instanceof Object))
{var ex__13242__auto__ = e17025;var statearr_17026_18357 = state_16942;(statearr_17026_18357[5] = ex__13242__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16942);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17025;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13240__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18358 = state_16942;
state_16942 = G__18358;
continue;
}
} else
{return ret_value__13240__auto__;
}
break;
}
});
state_machine__13239__auto__ = function(state_16942){
switch(arguments.length){
case 0:
return state_machine__13239__auto____0.call(this);
case 1:
return state_machine__13239__auto____1.call(this,state_16942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13239__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13239__auto____0;
state_machine__13239__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13239__auto____1;
return state_machine__13239__auto__;
})()
;})(switch__13238__auto__,c__13308__auto___18304,cs,m,dchan,dctr,done))
})();var state__13310__auto__ = (function (){var statearr_17027 = f__13309__auto__.call(null);(statearr_17027[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13308__auto___18304);
return statearr_17027;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13310__auto__);
});})(c__13308__auto___18304,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj17029 = {};return obj17029;
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
;var m = (function (){if(typeof cljs.core.async.t17139 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17139 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta17140){
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
this.meta17140 = meta17140;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17139.cljs$lang$type = true;
cljs.core.async.t17139.cljs$lang$ctorStr = "cljs.core.async/t17139";
cljs.core.async.t17139.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async/t17139");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17139.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t17139.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17139.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17139.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17139.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17139.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17139.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t17139.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17139.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17141){var self__ = this;
var _17141__$1 = this;return self__.meta17140;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17139.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17141,meta17140__$1){var self__ = this;
var _17141__$1 = this;return (new cljs.core.async.t17139(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta17140__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t17139 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t17139(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta17140){return (new cljs.core.async.t17139(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta17140));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t17139(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__13308__auto___18359 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13308__auto___18359,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__13309__auto__ = (function (){var switch__13238__auto__ = ((function (c__13308__auto___18359,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_17206){var state_val_17207 = (state_17206[1]);if((state_val_17207 === 1))
{var inst_17145 = (state_17206[7]);var inst_17145__$1 = calc_state.call(null);var inst_17146 = cljs.core.seq_QMARK_.call(null,inst_17145__$1);var state_17206__$1 = (function (){var statearr_17208 = state_17206;(statearr_17208[7] = inst_17145__$1);
return statearr_17208;
})();if(inst_17146)
{var statearr_17209_18360 = state_17206__$1;(statearr_17209_18360[1] = 2);
} else
{var statearr_17210_18361 = state_17206__$1;(statearr_17210_18361[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17207 === 2))
{var inst_17145 = (state_17206[7]);var inst_17148 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17145);var state_17206__$1 = state_17206;var statearr_17211_18362 = state_17206__$1;(statearr_17211_18362[2] = inst_17148);
(statearr_17211_18362[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17207 === 3))
{var inst_17145 = (state_17206[7]);var state_17206__$1 = state_17206;var statearr_17212_18363 = state_17206__$1;(statearr_17212_18363[2] = inst_17145);
(statearr_17212_18363[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17207 === 4))
{var inst_17145 = (state_17206[7]);var inst_17151 = (state_17206[2]);var inst_17152 = cljs.core.get.call(null,inst_17151,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_17153 = cljs.core.get.call(null,inst_17151,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_17154 = cljs.core.get.call(null,inst_17151,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_17155 = inst_17145;var state_17206__$1 = (function (){var statearr_17213 = state_17206;(statearr_17213[8] = inst_17154);
(statearr_17213[9] = inst_17153);
(statearr_17213[10] = inst_17155);
(statearr_17213[11] = inst_17152);
return statearr_17213;
})();var statearr_17214_18364 = state_17206__$1;(statearr_17214_18364[2] = null);
(statearr_17214_18364[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17207 === 5))
{var inst_17155 = (state_17206[10]);var inst_17158 = cljs.core.seq_QMARK_.call(null,inst_17155);var state_17206__$1 = state_17206;if(inst_17158)
{var statearr_17215_18365 = state_17206__$1;(statearr_17215_18365[1] = 7);
} else
{var statearr_17216_18366 = state_17206__$1;(statearr_17216_18366[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17207 === 6))
{var inst_17204 = (state_17206[2]);var state_17206__$1 = state_17206;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17206__$1,inst_17204);
} else
{if((state_val_17207 === 7))
{var inst_17155 = (state_17206[10]);var inst_17160 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17155);var state_17206__$1 = state_17206;var statearr_17217_18367 = state_17206__$1;(statearr_17217_18367[2] = inst_17160);
(statearr_17217_18367[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17207 === 8))
{var inst_17155 = (state_17206[10]);var state_17206__$1 = state_17206;var statearr_17218_18368 = state_17206__$1;(statearr_17218_18368[2] = inst_17155);
(statearr_17218_18368[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17207 === 9))
{var inst_17163 = (state_17206[12]);var inst_17163__$1 = (state_17206[2]);var inst_17164 = cljs.core.get.call(null,inst_17163__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_17165 = cljs.core.get.call(null,inst_17163__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_17166 = cljs.core.get.call(null,inst_17163__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_17206__$1 = (function (){var statearr_17219 = state_17206;(statearr_17219[13] = inst_17165);
(statearr_17219[14] = inst_17166);
(statearr_17219[12] = inst_17163__$1);
return statearr_17219;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_17206__$1,10,inst_17164);
} else
{if((state_val_17207 === 10))
{var inst_17171 = (state_17206[15]);var inst_17170 = (state_17206[16]);var inst_17169 = (state_17206[2]);var inst_17170__$1 = cljs.core.nth.call(null,inst_17169,0,null);var inst_17171__$1 = cljs.core.nth.call(null,inst_17169,1,null);var inst_17172 = (inst_17170__$1 == null);var inst_17173 = cljs.core._EQ_.call(null,inst_17171__$1,change);var inst_17174 = (inst_17172) || (inst_17173);var state_17206__$1 = (function (){var statearr_17220 = state_17206;(statearr_17220[15] = inst_17171__$1);
(statearr_17220[16] = inst_17170__$1);
return statearr_17220;
})();if(cljs.core.truth_(inst_17174))
{var statearr_17221_18369 = state_17206__$1;(statearr_17221_18369[1] = 11);
} else
{var statearr_17222_18370 = state_17206__$1;(statearr_17222_18370[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17207 === 11))
{var inst_17170 = (state_17206[16]);var inst_17176 = (inst_17170 == null);var state_17206__$1 = state_17206;if(cljs.core.truth_(inst_17176))
{var statearr_17223_18371 = state_17206__$1;(statearr_17223_18371[1] = 14);
} else
{var statearr_17224_18372 = state_17206__$1;(statearr_17224_18372[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17207 === 12))
{var inst_17185 = (state_17206[17]);var inst_17171 = (state_17206[15]);var inst_17166 = (state_17206[14]);var inst_17185__$1 = inst_17166.call(null,inst_17171);var state_17206__$1 = (function (){var statearr_17225 = state_17206;(statearr_17225[17] = inst_17185__$1);
return statearr_17225;
})();if(cljs.core.truth_(inst_17185__$1))
{var statearr_17226_18373 = state_17206__$1;(statearr_17226_18373[1] = 17);
} else
{var statearr_17227_18374 = state_17206__$1;(statearr_17227_18374[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17207 === 13))
{var inst_17202 = (state_17206[2]);var state_17206__$1 = state_17206;var statearr_17228_18375 = state_17206__$1;(statearr_17228_18375[2] = inst_17202);
(statearr_17228_18375[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17207 === 14))
{var inst_17171 = (state_17206[15]);var inst_17178 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_17171);var state_17206__$1 = state_17206;var statearr_17229_18376 = state_17206__$1;(statearr_17229_18376[2] = inst_17178);
(statearr_17229_18376[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17207 === 15))
{var state_17206__$1 = state_17206;var statearr_17230_18377 = state_17206__$1;(statearr_17230_18377[2] = null);
(statearr_17230_18377[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17207 === 16))
{var inst_17181 = (state_17206[2]);var inst_17182 = calc_state.call(null);var inst_17155 = inst_17182;var state_17206__$1 = (function (){var statearr_17231 = state_17206;(statearr_17231[18] = inst_17181);
(statearr_17231[10] = inst_17155);
return statearr_17231;
})();var statearr_17232_18378 = state_17206__$1;(statearr_17232_18378[2] = null);
(statearr_17232_18378[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17207 === 17))
{var inst_17185 = (state_17206[17]);var state_17206__$1 = state_17206;var statearr_17233_18379 = state_17206__$1;(statearr_17233_18379[2] = inst_17185);
(statearr_17233_18379[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17207 === 18))
{var inst_17171 = (state_17206[15]);var inst_17165 = (state_17206[13]);var inst_17166 = (state_17206[14]);var inst_17188 = cljs.core.empty_QMARK_.call(null,inst_17166);var inst_17189 = inst_17165.call(null,inst_17171);var inst_17190 = cljs.core.not.call(null,inst_17189);var inst_17191 = (inst_17188) && (inst_17190);var state_17206__$1 = state_17206;var statearr_17234_18380 = state_17206__$1;(statearr_17234_18380[2] = inst_17191);
(statearr_17234_18380[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17207 === 19))
{var inst_17193 = (state_17206[2]);var state_17206__$1 = state_17206;if(cljs.core.truth_(inst_17193))
{var statearr_17235_18381 = state_17206__$1;(statearr_17235_18381[1] = 20);
} else
{var statearr_17236_18382 = state_17206__$1;(statearr_17236_18382[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17207 === 20))
{var inst_17170 = (state_17206[16]);var state_17206__$1 = state_17206;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17206__$1,23,out,inst_17170);
} else
{if((state_val_17207 === 21))
{var state_17206__$1 = state_17206;var statearr_17237_18383 = state_17206__$1;(statearr_17237_18383[2] = null);
(statearr_17237_18383[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17207 === 22))
{var inst_17163 = (state_17206[12]);var inst_17199 = (state_17206[2]);var inst_17155 = inst_17163;var state_17206__$1 = (function (){var statearr_17238 = state_17206;(statearr_17238[10] = inst_17155);
(statearr_17238[19] = inst_17199);
return statearr_17238;
})();var statearr_17239_18384 = state_17206__$1;(statearr_17239_18384[2] = null);
(statearr_17239_18384[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17207 === 23))
{var inst_17196 = (state_17206[2]);var state_17206__$1 = state_17206;var statearr_17240_18385 = state_17206__$1;(statearr_17240_18385[2] = inst_17196);
(statearr_17240_18385[1] = 22);
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
});})(c__13308__auto___18359,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__13238__auto__,c__13308__auto___18359,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__13239__auto__ = null;
var state_machine__13239__auto____0 = (function (){var statearr_17244 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17244[0] = state_machine__13239__auto__);
(statearr_17244[1] = 1);
return statearr_17244;
});
var state_machine__13239__auto____1 = (function (state_17206){while(true){
var ret_value__13240__auto__ = (function (){try{while(true){
var result__13241__auto__ = switch__13238__auto__.call(null,state_17206);if(cljs.core.keyword_identical_QMARK_.call(null,result__13241__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13241__auto__;
}
break;
}
}catch (e17245){if((e17245 instanceof Object))
{var ex__13242__auto__ = e17245;var statearr_17246_18386 = state_17206;(statearr_17246_18386[5] = ex__13242__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17206);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17245;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13240__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18387 = state_17206;
state_17206 = G__18387;
continue;
}
} else
{return ret_value__13240__auto__;
}
break;
}
});
state_machine__13239__auto__ = function(state_17206){
switch(arguments.length){
case 0:
return state_machine__13239__auto____0.call(this);
case 1:
return state_machine__13239__auto____1.call(this,state_17206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13239__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13239__auto____0;
state_machine__13239__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13239__auto____1;
return state_machine__13239__auto__;
})()
;})(switch__13238__auto__,c__13308__auto___18359,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__13310__auto__ = (function (){var statearr_17247 = f__13309__auto__.call(null);(statearr_17247[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13308__auto___18359);
return statearr_17247;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13310__auto__);
});})(c__13308__auto___18359,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj17249 = {};return obj17249;
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
return (function (p1__17250_SHARP_){if(cljs.core.truth_(p1__17250_SHARP_.call(null,topic)))
{return p1__17250_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__17250_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4884__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t17375 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17375 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta17376){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta17376 = meta17376;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17375.cljs$lang$type = true;
cljs.core.async.t17375.cljs$lang$ctorStr = "cljs.core.async/t17375";
cljs.core.async.t17375.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async/t17375");
});})(mults,ensure_mult))
;
cljs.core.async.t17375.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t17375.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t17375.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t17375.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t17375.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t17375.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t17375.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t17375.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_17377){var self__ = this;
var _17377__$1 = this;return self__.meta17376;
});})(mults,ensure_mult))
;
cljs.core.async.t17375.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_17377,meta17376__$1){var self__ = this;
var _17377__$1 = this;return (new cljs.core.async.t17375(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta17376__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t17375 = ((function (mults,ensure_mult){
return (function __GT_t17375(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta17376){return (new cljs.core.async.t17375(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta17376));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t17375(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__13308__auto___18388 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13308__auto___18388,mults,ensure_mult,p){
return (function (){var f__13309__auto__ = (function (){var switch__13238__auto__ = ((function (c__13308__auto___18388,mults,ensure_mult,p){
return (function (state_17451){var state_val_17452 = (state_17451[1]);if((state_val_17452 === 1))
{var state_17451__$1 = state_17451;var statearr_17453_18389 = state_17451__$1;(statearr_17453_18389[2] = null);
(statearr_17453_18389[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17452 === 2))
{var state_17451__$1 = state_17451;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17451__$1,4,ch);
} else
{if((state_val_17452 === 3))
{var inst_17449 = (state_17451[2]);var state_17451__$1 = state_17451;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17451__$1,inst_17449);
} else
{if((state_val_17452 === 4))
{var inst_17380 = (state_17451[7]);var inst_17380__$1 = (state_17451[2]);var inst_17381 = (inst_17380__$1 == null);var state_17451__$1 = (function (){var statearr_17454 = state_17451;(statearr_17454[7] = inst_17380__$1);
return statearr_17454;
})();if(cljs.core.truth_(inst_17381))
{var statearr_17455_18390 = state_17451__$1;(statearr_17455_18390[1] = 5);
} else
{var statearr_17456_18391 = state_17451__$1;(statearr_17456_18391[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17452 === 5))
{var inst_17387 = cljs.core.deref.call(null,mults);var inst_17388 = cljs.core.vals.call(null,inst_17387);var inst_17389 = cljs.core.seq.call(null,inst_17388);var inst_17390 = inst_17389;var inst_17391 = null;var inst_17392 = 0;var inst_17393 = 0;var state_17451__$1 = (function (){var statearr_17457 = state_17451;(statearr_17457[8] = inst_17390);
(statearr_17457[9] = inst_17391);
(statearr_17457[10] = inst_17392);
(statearr_17457[11] = inst_17393);
return statearr_17457;
})();var statearr_17458_18392 = state_17451__$1;(statearr_17458_18392[2] = null);
(statearr_17458_18392[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17452 === 6))
{var inst_17380 = (state_17451[7]);var inst_17430 = (state_17451[12]);var inst_17428 = (state_17451[13]);var inst_17428__$1 = topic_fn.call(null,inst_17380);var inst_17429 = cljs.core.deref.call(null,mults);var inst_17430__$1 = cljs.core.get.call(null,inst_17429,inst_17428__$1);var state_17451__$1 = (function (){var statearr_17459 = state_17451;(statearr_17459[12] = inst_17430__$1);
(statearr_17459[13] = inst_17428__$1);
return statearr_17459;
})();if(cljs.core.truth_(inst_17430__$1))
{var statearr_17460_18393 = state_17451__$1;(statearr_17460_18393[1] = 19);
} else
{var statearr_17461_18394 = state_17451__$1;(statearr_17461_18394[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17452 === 7))
{var inst_17447 = (state_17451[2]);var state_17451__$1 = state_17451;var statearr_17462_18395 = state_17451__$1;(statearr_17462_18395[2] = inst_17447);
(statearr_17462_18395[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17452 === 8))
{var inst_17392 = (state_17451[10]);var inst_17393 = (state_17451[11]);var inst_17395 = (inst_17393 < inst_17392);var inst_17396 = inst_17395;var state_17451__$1 = state_17451;if(cljs.core.truth_(inst_17396))
{var statearr_17466_18396 = state_17451__$1;(statearr_17466_18396[1] = 10);
} else
{var statearr_17467_18397 = state_17451__$1;(statearr_17467_18397[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17452 === 9))
{var inst_17426 = (state_17451[2]);var state_17451__$1 = state_17451;var statearr_17468_18398 = state_17451__$1;(statearr_17468_18398[2] = inst_17426);
(statearr_17468_18398[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17452 === 10))
{var inst_17390 = (state_17451[8]);var inst_17391 = (state_17451[9]);var inst_17392 = (state_17451[10]);var inst_17393 = (state_17451[11]);var inst_17398 = cljs.core._nth.call(null,inst_17391,inst_17393);var inst_17399 = cljs.core.async.muxch_STAR_.call(null,inst_17398);var inst_17400 = cljs.core.async.close_BANG_.call(null,inst_17399);var inst_17401 = (inst_17393 + 1);var tmp17463 = inst_17390;var tmp17464 = inst_17391;var tmp17465 = inst_17392;var inst_17390__$1 = tmp17463;var inst_17391__$1 = tmp17464;var inst_17392__$1 = tmp17465;var inst_17393__$1 = inst_17401;var state_17451__$1 = (function (){var statearr_17469 = state_17451;(statearr_17469[14] = inst_17400);
(statearr_17469[8] = inst_17390__$1);
(statearr_17469[9] = inst_17391__$1);
(statearr_17469[10] = inst_17392__$1);
(statearr_17469[11] = inst_17393__$1);
return statearr_17469;
})();var statearr_17470_18399 = state_17451__$1;(statearr_17470_18399[2] = null);
(statearr_17470_18399[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17452 === 11))
{var inst_17404 = (state_17451[15]);var inst_17390 = (state_17451[8]);var inst_17404__$1 = cljs.core.seq.call(null,inst_17390);var state_17451__$1 = (function (){var statearr_17471 = state_17451;(statearr_17471[15] = inst_17404__$1);
return statearr_17471;
})();if(inst_17404__$1)
{var statearr_17472_18400 = state_17451__$1;(statearr_17472_18400[1] = 13);
} else
{var statearr_17473_18401 = state_17451__$1;(statearr_17473_18401[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17452 === 12))
{var inst_17424 = (state_17451[2]);var state_17451__$1 = state_17451;var statearr_17474_18402 = state_17451__$1;(statearr_17474_18402[2] = inst_17424);
(statearr_17474_18402[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17452 === 13))
{var inst_17404 = (state_17451[15]);var inst_17406 = cljs.core.chunked_seq_QMARK_.call(null,inst_17404);var state_17451__$1 = state_17451;if(inst_17406)
{var statearr_17475_18403 = state_17451__$1;(statearr_17475_18403[1] = 16);
} else
{var statearr_17476_18404 = state_17451__$1;(statearr_17476_18404[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17452 === 14))
{var state_17451__$1 = state_17451;var statearr_17477_18405 = state_17451__$1;(statearr_17477_18405[2] = null);
(statearr_17477_18405[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17452 === 15))
{var inst_17422 = (state_17451[2]);var state_17451__$1 = state_17451;var statearr_17478_18406 = state_17451__$1;(statearr_17478_18406[2] = inst_17422);
(statearr_17478_18406[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17452 === 16))
{var inst_17404 = (state_17451[15]);var inst_17408 = cljs.core.chunk_first.call(null,inst_17404);var inst_17409 = cljs.core.chunk_rest.call(null,inst_17404);var inst_17410 = cljs.core.count.call(null,inst_17408);var inst_17390 = inst_17409;var inst_17391 = inst_17408;var inst_17392 = inst_17410;var inst_17393 = 0;var state_17451__$1 = (function (){var statearr_17479 = state_17451;(statearr_17479[8] = inst_17390);
(statearr_17479[9] = inst_17391);
(statearr_17479[10] = inst_17392);
(statearr_17479[11] = inst_17393);
return statearr_17479;
})();var statearr_17480_18407 = state_17451__$1;(statearr_17480_18407[2] = null);
(statearr_17480_18407[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17452 === 17))
{var inst_17404 = (state_17451[15]);var inst_17413 = cljs.core.first.call(null,inst_17404);var inst_17414 = cljs.core.async.muxch_STAR_.call(null,inst_17413);var inst_17415 = cljs.core.async.close_BANG_.call(null,inst_17414);var inst_17416 = cljs.core.next.call(null,inst_17404);var inst_17390 = inst_17416;var inst_17391 = null;var inst_17392 = 0;var inst_17393 = 0;var state_17451__$1 = (function (){var statearr_17481 = state_17451;(statearr_17481[8] = inst_17390);
(statearr_17481[9] = inst_17391);
(statearr_17481[10] = inst_17392);
(statearr_17481[11] = inst_17393);
(statearr_17481[16] = inst_17415);
return statearr_17481;
})();var statearr_17482_18408 = state_17451__$1;(statearr_17482_18408[2] = null);
(statearr_17482_18408[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17452 === 18))
{var inst_17419 = (state_17451[2]);var state_17451__$1 = state_17451;var statearr_17483_18409 = state_17451__$1;(statearr_17483_18409[2] = inst_17419);
(statearr_17483_18409[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17452 === 19))
{var state_17451__$1 = state_17451;var statearr_17484_18410 = state_17451__$1;(statearr_17484_18410[2] = null);
(statearr_17484_18410[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17452 === 20))
{var state_17451__$1 = state_17451;var statearr_17485_18411 = state_17451__$1;(statearr_17485_18411[2] = null);
(statearr_17485_18411[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17452 === 21))
{var inst_17444 = (state_17451[2]);var state_17451__$1 = (function (){var statearr_17486 = state_17451;(statearr_17486[17] = inst_17444);
return statearr_17486;
})();var statearr_17487_18412 = state_17451__$1;(statearr_17487_18412[2] = null);
(statearr_17487_18412[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17452 === 22))
{var inst_17441 = (state_17451[2]);var state_17451__$1 = state_17451;var statearr_17488_18413 = state_17451__$1;(statearr_17488_18413[2] = inst_17441);
(statearr_17488_18413[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17452 === 23))
{var inst_17428 = (state_17451[13]);var inst_17432 = (state_17451[2]);var inst_17433 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_17428);var state_17451__$1 = (function (){var statearr_17489 = state_17451;(statearr_17489[18] = inst_17432);
return statearr_17489;
})();var statearr_17490_18414 = state_17451__$1;(statearr_17490_18414[2] = inst_17433);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17451__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17452 === 24))
{var inst_17380 = (state_17451[7]);var inst_17430 = (state_17451[12]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17451,23,Object,null,22);var inst_17437 = cljs.core.async.muxch_STAR_.call(null,inst_17430);var state_17451__$1 = state_17451;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17451__$1,25,inst_17437,inst_17380);
} else
{if((state_val_17452 === 25))
{var inst_17439 = (state_17451[2]);var state_17451__$1 = state_17451;var statearr_17491_18415 = state_17451__$1;(statearr_17491_18415[2] = inst_17439);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17451__$1);
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
});})(c__13308__auto___18388,mults,ensure_mult,p))
;return ((function (switch__13238__auto__,c__13308__auto___18388,mults,ensure_mult,p){
return (function() {
var state_machine__13239__auto__ = null;
var state_machine__13239__auto____0 = (function (){var statearr_17495 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17495[0] = state_machine__13239__auto__);
(statearr_17495[1] = 1);
return statearr_17495;
});
var state_machine__13239__auto____1 = (function (state_17451){while(true){
var ret_value__13240__auto__ = (function (){try{while(true){
var result__13241__auto__ = switch__13238__auto__.call(null,state_17451);if(cljs.core.keyword_identical_QMARK_.call(null,result__13241__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13241__auto__;
}
break;
}
}catch (e17496){if((e17496 instanceof Object))
{var ex__13242__auto__ = e17496;var statearr_17497_18416 = state_17451;(statearr_17497_18416[5] = ex__13242__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17451);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17496;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13240__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18417 = state_17451;
state_17451 = G__18417;
continue;
}
} else
{return ret_value__13240__auto__;
}
break;
}
});
state_machine__13239__auto__ = function(state_17451){
switch(arguments.length){
case 0:
return state_machine__13239__auto____0.call(this);
case 1:
return state_machine__13239__auto____1.call(this,state_17451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13239__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13239__auto____0;
state_machine__13239__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13239__auto____1;
return state_machine__13239__auto__;
})()
;})(switch__13238__auto__,c__13308__auto___18388,mults,ensure_mult,p))
})();var state__13310__auto__ = (function (){var statearr_17498 = f__13309__auto__.call(null);(statearr_17498[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13308__auto___18388);
return statearr_17498;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13310__auto__);
});})(c__13308__auto___18388,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__13308__auto___18418 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13308__auto___18418,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__13309__auto__ = (function (){var switch__13238__auto__ = ((function (c__13308__auto___18418,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_17605){var state_val_17606 = (state_17605[1]);if((state_val_17606 === 1))
{var state_17605__$1 = state_17605;var statearr_17607_18419 = state_17605__$1;(statearr_17607_18419[2] = null);
(statearr_17607_18419[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17606 === 2))
{var inst_17568 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_17569 = 0;var state_17605__$1 = (function (){var statearr_17608 = state_17605;(statearr_17608[7] = inst_17569);
(statearr_17608[8] = inst_17568);
return statearr_17608;
})();var statearr_17609_18420 = state_17605__$1;(statearr_17609_18420[2] = null);
(statearr_17609_18420[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17606 === 3))
{var inst_17603 = (state_17605[2]);var state_17605__$1 = state_17605;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17605__$1,inst_17603);
} else
{if((state_val_17606 === 4))
{var inst_17569 = (state_17605[7]);var inst_17571 = (inst_17569 < cnt);var state_17605__$1 = state_17605;if(cljs.core.truth_(inst_17571))
{var statearr_17610_18421 = state_17605__$1;(statearr_17610_18421[1] = 6);
} else
{var statearr_17611_18422 = state_17605__$1;(statearr_17611_18422[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17606 === 5))
{var inst_17589 = (state_17605[2]);var state_17605__$1 = (function (){var statearr_17612 = state_17605;(statearr_17612[9] = inst_17589);
return statearr_17612;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17605__$1,12,dchan);
} else
{if((state_val_17606 === 6))
{var state_17605__$1 = state_17605;var statearr_17613_18423 = state_17605__$1;(statearr_17613_18423[2] = null);
(statearr_17613_18423[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17606 === 7))
{var state_17605__$1 = state_17605;var statearr_17614_18424 = state_17605__$1;(statearr_17614_18424[2] = null);
(statearr_17614_18424[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17606 === 8))
{var inst_17587 = (state_17605[2]);var state_17605__$1 = state_17605;var statearr_17615_18425 = state_17605__$1;(statearr_17615_18425[2] = inst_17587);
(statearr_17615_18425[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17606 === 9))
{var inst_17569 = (state_17605[7]);var inst_17582 = (state_17605[2]);var inst_17583 = (inst_17569 + 1);var inst_17569__$1 = inst_17583;var state_17605__$1 = (function (){var statearr_17616 = state_17605;(statearr_17616[7] = inst_17569__$1);
(statearr_17616[10] = inst_17582);
return statearr_17616;
})();var statearr_17617_18426 = state_17605__$1;(statearr_17617_18426[2] = null);
(statearr_17617_18426[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17606 === 10))
{var inst_17573 = (state_17605[2]);var inst_17574 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_17605__$1 = (function (){var statearr_17618 = state_17605;(statearr_17618[11] = inst_17573);
return statearr_17618;
})();var statearr_17619_18427 = state_17605__$1;(statearr_17619_18427[2] = inst_17574);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17605__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17606 === 11))
{var inst_17569 = (state_17605[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17605,10,Object,null,9);var inst_17578 = chs__$1.call(null,inst_17569);var inst_17579 = done.call(null,inst_17569);var inst_17580 = cljs.core.async.take_BANG_.call(null,inst_17578,inst_17579);var state_17605__$1 = state_17605;var statearr_17620_18428 = state_17605__$1;(statearr_17620_18428[2] = inst_17580);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17605__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17606 === 12))
{var inst_17591 = (state_17605[12]);var inst_17591__$1 = (state_17605[2]);var inst_17592 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_17591__$1);var state_17605__$1 = (function (){var statearr_17621 = state_17605;(statearr_17621[12] = inst_17591__$1);
return statearr_17621;
})();if(cljs.core.truth_(inst_17592))
{var statearr_17622_18429 = state_17605__$1;(statearr_17622_18429[1] = 13);
} else
{var statearr_17623_18430 = state_17605__$1;(statearr_17623_18430[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17606 === 13))
{var inst_17594 = cljs.core.async.close_BANG_.call(null,out);var state_17605__$1 = state_17605;var statearr_17624_18431 = state_17605__$1;(statearr_17624_18431[2] = inst_17594);
(statearr_17624_18431[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17606 === 14))
{var inst_17591 = (state_17605[12]);var inst_17596 = cljs.core.apply.call(null,f,inst_17591);var state_17605__$1 = state_17605;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17605__$1,16,out,inst_17596);
} else
{if((state_val_17606 === 15))
{var inst_17601 = (state_17605[2]);var state_17605__$1 = state_17605;var statearr_17625_18432 = state_17605__$1;(statearr_17625_18432[2] = inst_17601);
(statearr_17625_18432[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17606 === 16))
{var inst_17598 = (state_17605[2]);var state_17605__$1 = (function (){var statearr_17626 = state_17605;(statearr_17626[13] = inst_17598);
return statearr_17626;
})();var statearr_17627_18433 = state_17605__$1;(statearr_17627_18433[2] = null);
(statearr_17627_18433[1] = 2);
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
});})(c__13308__auto___18418,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__13238__auto__,c__13308__auto___18418,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__13239__auto__ = null;
var state_machine__13239__auto____0 = (function (){var statearr_17631 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17631[0] = state_machine__13239__auto__);
(statearr_17631[1] = 1);
return statearr_17631;
});
var state_machine__13239__auto____1 = (function (state_17605){while(true){
var ret_value__13240__auto__ = (function (){try{while(true){
var result__13241__auto__ = switch__13238__auto__.call(null,state_17605);if(cljs.core.keyword_identical_QMARK_.call(null,result__13241__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13241__auto__;
}
break;
}
}catch (e17632){if((e17632 instanceof Object))
{var ex__13242__auto__ = e17632;var statearr_17633_18434 = state_17605;(statearr_17633_18434[5] = ex__13242__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17605);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17632;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13240__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18435 = state_17605;
state_17605 = G__18435;
continue;
}
} else
{return ret_value__13240__auto__;
}
break;
}
});
state_machine__13239__auto__ = function(state_17605){
switch(arguments.length){
case 0:
return state_machine__13239__auto____0.call(this);
case 1:
return state_machine__13239__auto____1.call(this,state_17605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13239__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13239__auto____0;
state_machine__13239__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13239__auto____1;
return state_machine__13239__auto__;
})()
;})(switch__13238__auto__,c__13308__auto___18418,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__13310__auto__ = (function (){var statearr_17634 = f__13309__auto__.call(null);(statearr_17634[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13308__auto___18418);
return statearr_17634;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13310__auto__);
});})(c__13308__auto___18418,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13308__auto___18436 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13308__auto___18436,out){
return (function (){var f__13309__auto__ = (function (){var switch__13238__auto__ = ((function (c__13308__auto___18436,out){
return (function (state_17718){var state_val_17719 = (state_17718[1]);if((state_val_17719 === 1))
{var inst_17689 = cljs.core.vec.call(null,chs);var inst_17690 = inst_17689;var state_17718__$1 = (function (){var statearr_17720 = state_17718;(statearr_17720[7] = inst_17690);
return statearr_17720;
})();var statearr_17721_18437 = state_17718__$1;(statearr_17721_18437[2] = null);
(statearr_17721_18437[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17719 === 2))
{var inst_17690 = (state_17718[7]);var inst_17692 = cljs.core.count.call(null,inst_17690);var inst_17693 = (inst_17692 > 0);var state_17718__$1 = state_17718;if(cljs.core.truth_(inst_17693))
{var statearr_17722_18438 = state_17718__$1;(statearr_17722_18438[1] = 4);
} else
{var statearr_17723_18439 = state_17718__$1;(statearr_17723_18439[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17719 === 3))
{var inst_17716 = (state_17718[2]);var state_17718__$1 = state_17718;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17718__$1,inst_17716);
} else
{if((state_val_17719 === 4))
{var inst_17690 = (state_17718[7]);var state_17718__$1 = state_17718;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_17718__$1,7,inst_17690);
} else
{if((state_val_17719 === 5))
{var inst_17712 = cljs.core.async.close_BANG_.call(null,out);var state_17718__$1 = state_17718;var statearr_17724_18440 = state_17718__$1;(statearr_17724_18440[2] = inst_17712);
(statearr_17724_18440[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17719 === 6))
{var inst_17714 = (state_17718[2]);var state_17718__$1 = state_17718;var statearr_17725_18441 = state_17718__$1;(statearr_17725_18441[2] = inst_17714);
(statearr_17725_18441[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17719 === 7))
{var inst_17698 = (state_17718[8]);var inst_17697 = (state_17718[9]);var inst_17697__$1 = (state_17718[2]);var inst_17698__$1 = cljs.core.nth.call(null,inst_17697__$1,0,null);var inst_17699 = cljs.core.nth.call(null,inst_17697__$1,1,null);var inst_17700 = (inst_17698__$1 == null);var state_17718__$1 = (function (){var statearr_17726 = state_17718;(statearr_17726[8] = inst_17698__$1);
(statearr_17726[10] = inst_17699);
(statearr_17726[9] = inst_17697__$1);
return statearr_17726;
})();if(cljs.core.truth_(inst_17700))
{var statearr_17727_18442 = state_17718__$1;(statearr_17727_18442[1] = 8);
} else
{var statearr_17728_18443 = state_17718__$1;(statearr_17728_18443[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17719 === 8))
{var inst_17690 = (state_17718[7]);var inst_17698 = (state_17718[8]);var inst_17699 = (state_17718[10]);var inst_17697 = (state_17718[9]);var inst_17702 = (function (){var c = inst_17699;var v = inst_17698;var vec__17695 = inst_17697;var cs = inst_17690;return ((function (c,v,vec__17695,cs,inst_17690,inst_17698,inst_17699,inst_17697,state_val_17719,c__13308__auto___18436,out){
return (function (p1__17635_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__17635_SHARP_);
});
;})(c,v,vec__17695,cs,inst_17690,inst_17698,inst_17699,inst_17697,state_val_17719,c__13308__auto___18436,out))
})();var inst_17703 = cljs.core.filterv.call(null,inst_17702,inst_17690);var inst_17690__$1 = inst_17703;var state_17718__$1 = (function (){var statearr_17729 = state_17718;(statearr_17729[7] = inst_17690__$1);
return statearr_17729;
})();var statearr_17730_18444 = state_17718__$1;(statearr_17730_18444[2] = null);
(statearr_17730_18444[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17719 === 9))
{var inst_17698 = (state_17718[8]);var state_17718__$1 = state_17718;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17718__$1,11,out,inst_17698);
} else
{if((state_val_17719 === 10))
{var inst_17710 = (state_17718[2]);var state_17718__$1 = state_17718;var statearr_17732_18445 = state_17718__$1;(statearr_17732_18445[2] = inst_17710);
(statearr_17732_18445[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17719 === 11))
{var inst_17690 = (state_17718[7]);var inst_17707 = (state_17718[2]);var tmp17731 = inst_17690;var inst_17690__$1 = tmp17731;var state_17718__$1 = (function (){var statearr_17733 = state_17718;(statearr_17733[7] = inst_17690__$1);
(statearr_17733[11] = inst_17707);
return statearr_17733;
})();var statearr_17734_18446 = state_17718__$1;(statearr_17734_18446[2] = null);
(statearr_17734_18446[1] = 2);
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
});})(c__13308__auto___18436,out))
;return ((function (switch__13238__auto__,c__13308__auto___18436,out){
return (function() {
var state_machine__13239__auto__ = null;
var state_machine__13239__auto____0 = (function (){var statearr_17738 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17738[0] = state_machine__13239__auto__);
(statearr_17738[1] = 1);
return statearr_17738;
});
var state_machine__13239__auto____1 = (function (state_17718){while(true){
var ret_value__13240__auto__ = (function (){try{while(true){
var result__13241__auto__ = switch__13238__auto__.call(null,state_17718);if(cljs.core.keyword_identical_QMARK_.call(null,result__13241__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13241__auto__;
}
break;
}
}catch (e17739){if((e17739 instanceof Object))
{var ex__13242__auto__ = e17739;var statearr_17740_18447 = state_17718;(statearr_17740_18447[5] = ex__13242__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17718);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17739;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13240__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18448 = state_17718;
state_17718 = G__18448;
continue;
}
} else
{return ret_value__13240__auto__;
}
break;
}
});
state_machine__13239__auto__ = function(state_17718){
switch(arguments.length){
case 0:
return state_machine__13239__auto____0.call(this);
case 1:
return state_machine__13239__auto____1.call(this,state_17718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13239__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13239__auto____0;
state_machine__13239__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13239__auto____1;
return state_machine__13239__auto__;
})()
;})(switch__13238__auto__,c__13308__auto___18436,out))
})();var state__13310__auto__ = (function (){var statearr_17741 = f__13309__auto__.call(null);(statearr_17741[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13308__auto___18436);
return statearr_17741;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13310__auto__);
});})(c__13308__auto___18436,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13308__auto___18449 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13308__auto___18449,out){
return (function (){var f__13309__auto__ = (function (){var switch__13238__auto__ = ((function (c__13308__auto___18449,out){
return (function (state_17811){var state_val_17812 = (state_17811[1]);if((state_val_17812 === 1))
{var inst_17788 = 0;var state_17811__$1 = (function (){var statearr_17813 = state_17811;(statearr_17813[7] = inst_17788);
return statearr_17813;
})();var statearr_17814_18450 = state_17811__$1;(statearr_17814_18450[2] = null);
(statearr_17814_18450[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17812 === 2))
{var inst_17788 = (state_17811[7]);var inst_17790 = (inst_17788 < n);var state_17811__$1 = state_17811;if(cljs.core.truth_(inst_17790))
{var statearr_17815_18451 = state_17811__$1;(statearr_17815_18451[1] = 4);
} else
{var statearr_17816_18452 = state_17811__$1;(statearr_17816_18452[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17812 === 3))
{var inst_17808 = (state_17811[2]);var inst_17809 = cljs.core.async.close_BANG_.call(null,out);var state_17811__$1 = (function (){var statearr_17817 = state_17811;(statearr_17817[8] = inst_17808);
return statearr_17817;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17811__$1,inst_17809);
} else
{if((state_val_17812 === 4))
{var state_17811__$1 = state_17811;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17811__$1,7,ch);
} else
{if((state_val_17812 === 5))
{var state_17811__$1 = state_17811;var statearr_17818_18453 = state_17811__$1;(statearr_17818_18453[2] = null);
(statearr_17818_18453[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17812 === 6))
{var inst_17806 = (state_17811[2]);var state_17811__$1 = state_17811;var statearr_17819_18454 = state_17811__$1;(statearr_17819_18454[2] = inst_17806);
(statearr_17819_18454[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17812 === 7))
{var inst_17793 = (state_17811[9]);var inst_17793__$1 = (state_17811[2]);var inst_17794 = (inst_17793__$1 == null);var inst_17795 = cljs.core.not.call(null,inst_17794);var state_17811__$1 = (function (){var statearr_17820 = state_17811;(statearr_17820[9] = inst_17793__$1);
return statearr_17820;
})();if(inst_17795)
{var statearr_17821_18455 = state_17811__$1;(statearr_17821_18455[1] = 8);
} else
{var statearr_17822_18456 = state_17811__$1;(statearr_17822_18456[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17812 === 8))
{var inst_17793 = (state_17811[9]);var state_17811__$1 = state_17811;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17811__$1,11,out,inst_17793);
} else
{if((state_val_17812 === 9))
{var state_17811__$1 = state_17811;var statearr_17823_18457 = state_17811__$1;(statearr_17823_18457[2] = null);
(statearr_17823_18457[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17812 === 10))
{var inst_17803 = (state_17811[2]);var state_17811__$1 = state_17811;var statearr_17824_18458 = state_17811__$1;(statearr_17824_18458[2] = inst_17803);
(statearr_17824_18458[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17812 === 11))
{var inst_17788 = (state_17811[7]);var inst_17798 = (state_17811[2]);var inst_17799 = (inst_17788 + 1);var inst_17788__$1 = inst_17799;var state_17811__$1 = (function (){var statearr_17825 = state_17811;(statearr_17825[10] = inst_17798);
(statearr_17825[7] = inst_17788__$1);
return statearr_17825;
})();var statearr_17826_18459 = state_17811__$1;(statearr_17826_18459[2] = null);
(statearr_17826_18459[1] = 2);
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
});})(c__13308__auto___18449,out))
;return ((function (switch__13238__auto__,c__13308__auto___18449,out){
return (function() {
var state_machine__13239__auto__ = null;
var state_machine__13239__auto____0 = (function (){var statearr_17830 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_17830[0] = state_machine__13239__auto__);
(statearr_17830[1] = 1);
return statearr_17830;
});
var state_machine__13239__auto____1 = (function (state_17811){while(true){
var ret_value__13240__auto__ = (function (){try{while(true){
var result__13241__auto__ = switch__13238__auto__.call(null,state_17811);if(cljs.core.keyword_identical_QMARK_.call(null,result__13241__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13241__auto__;
}
break;
}
}catch (e17831){if((e17831 instanceof Object))
{var ex__13242__auto__ = e17831;var statearr_17832_18460 = state_17811;(statearr_17832_18460[5] = ex__13242__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17811);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17831;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13240__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18461 = state_17811;
state_17811 = G__18461;
continue;
}
} else
{return ret_value__13240__auto__;
}
break;
}
});
state_machine__13239__auto__ = function(state_17811){
switch(arguments.length){
case 0:
return state_machine__13239__auto____0.call(this);
case 1:
return state_machine__13239__auto____1.call(this,state_17811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13239__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13239__auto____0;
state_machine__13239__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13239__auto____1;
return state_machine__13239__auto__;
})()
;})(switch__13238__auto__,c__13308__auto___18449,out))
})();var state__13310__auto__ = (function (){var statearr_17833 = f__13309__auto__.call(null);(statearr_17833[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13308__auto___18449);
return statearr_17833;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13310__auto__);
});})(c__13308__auto___18449,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13308__auto___18462 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13308__auto___18462,out){
return (function (){var f__13309__auto__ = (function (){var switch__13238__auto__ = ((function (c__13308__auto___18462,out){
return (function (state_17905){var state_val_17906 = (state_17905[1]);if((state_val_17906 === 1))
{var inst_17882 = null;var state_17905__$1 = (function (){var statearr_17907 = state_17905;(statearr_17907[7] = inst_17882);
return statearr_17907;
})();var statearr_17908_18463 = state_17905__$1;(statearr_17908_18463[2] = null);
(statearr_17908_18463[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17906 === 2))
{var state_17905__$1 = state_17905;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17905__$1,4,ch);
} else
{if((state_val_17906 === 3))
{var inst_17902 = (state_17905[2]);var inst_17903 = cljs.core.async.close_BANG_.call(null,out);var state_17905__$1 = (function (){var statearr_17909 = state_17905;(statearr_17909[8] = inst_17902);
return statearr_17909;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17905__$1,inst_17903);
} else
{if((state_val_17906 === 4))
{var inst_17885 = (state_17905[9]);var inst_17885__$1 = (state_17905[2]);var inst_17886 = (inst_17885__$1 == null);var inst_17887 = cljs.core.not.call(null,inst_17886);var state_17905__$1 = (function (){var statearr_17910 = state_17905;(statearr_17910[9] = inst_17885__$1);
return statearr_17910;
})();if(inst_17887)
{var statearr_17911_18464 = state_17905__$1;(statearr_17911_18464[1] = 5);
} else
{var statearr_17912_18465 = state_17905__$1;(statearr_17912_18465[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17906 === 5))
{var inst_17885 = (state_17905[9]);var inst_17882 = (state_17905[7]);var inst_17889 = cljs.core._EQ_.call(null,inst_17885,inst_17882);var state_17905__$1 = state_17905;if(inst_17889)
{var statearr_17913_18466 = state_17905__$1;(statearr_17913_18466[1] = 8);
} else
{var statearr_17914_18467 = state_17905__$1;(statearr_17914_18467[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17906 === 6))
{var state_17905__$1 = state_17905;var statearr_17916_18468 = state_17905__$1;(statearr_17916_18468[2] = null);
(statearr_17916_18468[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17906 === 7))
{var inst_17900 = (state_17905[2]);var state_17905__$1 = state_17905;var statearr_17917_18469 = state_17905__$1;(statearr_17917_18469[2] = inst_17900);
(statearr_17917_18469[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17906 === 8))
{var inst_17882 = (state_17905[7]);var tmp17915 = inst_17882;var inst_17882__$1 = tmp17915;var state_17905__$1 = (function (){var statearr_17918 = state_17905;(statearr_17918[7] = inst_17882__$1);
return statearr_17918;
})();var statearr_17919_18470 = state_17905__$1;(statearr_17919_18470[2] = null);
(statearr_17919_18470[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17906 === 9))
{var inst_17885 = (state_17905[9]);var state_17905__$1 = state_17905;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17905__$1,11,out,inst_17885);
} else
{if((state_val_17906 === 10))
{var inst_17897 = (state_17905[2]);var state_17905__$1 = state_17905;var statearr_17920_18471 = state_17905__$1;(statearr_17920_18471[2] = inst_17897);
(statearr_17920_18471[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17906 === 11))
{var inst_17885 = (state_17905[9]);var inst_17894 = (state_17905[2]);var inst_17882 = inst_17885;var state_17905__$1 = (function (){var statearr_17921 = state_17905;(statearr_17921[7] = inst_17882);
(statearr_17921[10] = inst_17894);
return statearr_17921;
})();var statearr_17922_18472 = state_17905__$1;(statearr_17922_18472[2] = null);
(statearr_17922_18472[1] = 2);
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
});})(c__13308__auto___18462,out))
;return ((function (switch__13238__auto__,c__13308__auto___18462,out){
return (function() {
var state_machine__13239__auto__ = null;
var state_machine__13239__auto____0 = (function (){var statearr_17926 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_17926[0] = state_machine__13239__auto__);
(statearr_17926[1] = 1);
return statearr_17926;
});
var state_machine__13239__auto____1 = (function (state_17905){while(true){
var ret_value__13240__auto__ = (function (){try{while(true){
var result__13241__auto__ = switch__13238__auto__.call(null,state_17905);if(cljs.core.keyword_identical_QMARK_.call(null,result__13241__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13241__auto__;
}
break;
}
}catch (e17927){if((e17927 instanceof Object))
{var ex__13242__auto__ = e17927;var statearr_17928_18473 = state_17905;(statearr_17928_18473[5] = ex__13242__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17905);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17927;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13240__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18474 = state_17905;
state_17905 = G__18474;
continue;
}
} else
{return ret_value__13240__auto__;
}
break;
}
});
state_machine__13239__auto__ = function(state_17905){
switch(arguments.length){
case 0:
return state_machine__13239__auto____0.call(this);
case 1:
return state_machine__13239__auto____1.call(this,state_17905);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13239__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13239__auto____0;
state_machine__13239__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13239__auto____1;
return state_machine__13239__auto__;
})()
;})(switch__13238__auto__,c__13308__auto___18462,out))
})();var state__13310__auto__ = (function (){var statearr_17929 = f__13309__auto__.call(null);(statearr_17929[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13308__auto___18462);
return statearr_17929;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13310__auto__);
});})(c__13308__auto___18462,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13308__auto___18475 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13308__auto___18475,out){
return (function (){var f__13309__auto__ = (function (){var switch__13238__auto__ = ((function (c__13308__auto___18475,out){
return (function (state_18034){var state_val_18035 = (state_18034[1]);if((state_val_18035 === 1))
{var inst_17997 = (new Array(n));var inst_17998 = inst_17997;var inst_17999 = 0;var state_18034__$1 = (function (){var statearr_18036 = state_18034;(statearr_18036[7] = inst_17999);
(statearr_18036[8] = inst_17998);
return statearr_18036;
})();var statearr_18037_18476 = state_18034__$1;(statearr_18037_18476[2] = null);
(statearr_18037_18476[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18035 === 2))
{var state_18034__$1 = state_18034;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18034__$1,4,ch);
} else
{if((state_val_18035 === 3))
{var inst_18032 = (state_18034[2]);var state_18034__$1 = state_18034;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18034__$1,inst_18032);
} else
{if((state_val_18035 === 4))
{var inst_18002 = (state_18034[9]);var inst_18002__$1 = (state_18034[2]);var inst_18003 = (inst_18002__$1 == null);var inst_18004 = cljs.core.not.call(null,inst_18003);var state_18034__$1 = (function (){var statearr_18038 = state_18034;(statearr_18038[9] = inst_18002__$1);
return statearr_18038;
})();if(inst_18004)
{var statearr_18039_18477 = state_18034__$1;(statearr_18039_18477[1] = 5);
} else
{var statearr_18040_18478 = state_18034__$1;(statearr_18040_18478[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18035 === 5))
{var inst_18007 = (state_18034[10]);var inst_18002 = (state_18034[9]);var inst_17999 = (state_18034[7]);var inst_17998 = (state_18034[8]);var inst_18006 = (inst_17998[inst_17999] = inst_18002);var inst_18007__$1 = (inst_17999 + 1);var inst_18008 = (inst_18007__$1 < n);var state_18034__$1 = (function (){var statearr_18041 = state_18034;(statearr_18041[11] = inst_18006);
(statearr_18041[10] = inst_18007__$1);
return statearr_18041;
})();if(cljs.core.truth_(inst_18008))
{var statearr_18042_18479 = state_18034__$1;(statearr_18042_18479[1] = 8);
} else
{var statearr_18043_18480 = state_18034__$1;(statearr_18043_18480[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18035 === 6))
{var inst_17999 = (state_18034[7]);var inst_18020 = (inst_17999 > 0);var state_18034__$1 = state_18034;if(cljs.core.truth_(inst_18020))
{var statearr_18045_18481 = state_18034__$1;(statearr_18045_18481[1] = 12);
} else
{var statearr_18046_18482 = state_18034__$1;(statearr_18046_18482[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18035 === 7))
{var inst_18030 = (state_18034[2]);var state_18034__$1 = state_18034;var statearr_18047_18483 = state_18034__$1;(statearr_18047_18483[2] = inst_18030);
(statearr_18047_18483[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18035 === 8))
{var inst_18007 = (state_18034[10]);var inst_17998 = (state_18034[8]);var tmp18044 = inst_17998;var inst_17998__$1 = tmp18044;var inst_17999 = inst_18007;var state_18034__$1 = (function (){var statearr_18048 = state_18034;(statearr_18048[7] = inst_17999);
(statearr_18048[8] = inst_17998__$1);
return statearr_18048;
})();var statearr_18049_18484 = state_18034__$1;(statearr_18049_18484[2] = null);
(statearr_18049_18484[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18035 === 9))
{var inst_17998 = (state_18034[8]);var inst_18012 = cljs.core.vec.call(null,inst_17998);var state_18034__$1 = state_18034;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18034__$1,11,out,inst_18012);
} else
{if((state_val_18035 === 10))
{var inst_18018 = (state_18034[2]);var state_18034__$1 = state_18034;var statearr_18050_18485 = state_18034__$1;(statearr_18050_18485[2] = inst_18018);
(statearr_18050_18485[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18035 === 11))
{var inst_18014 = (state_18034[2]);var inst_18015 = (new Array(n));var inst_17998 = inst_18015;var inst_17999 = 0;var state_18034__$1 = (function (){var statearr_18051 = state_18034;(statearr_18051[7] = inst_17999);
(statearr_18051[12] = inst_18014);
(statearr_18051[8] = inst_17998);
return statearr_18051;
})();var statearr_18052_18486 = state_18034__$1;(statearr_18052_18486[2] = null);
(statearr_18052_18486[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18035 === 12))
{var inst_17998 = (state_18034[8]);var inst_18022 = cljs.core.vec.call(null,inst_17998);var state_18034__$1 = state_18034;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18034__$1,15,out,inst_18022);
} else
{if((state_val_18035 === 13))
{var state_18034__$1 = state_18034;var statearr_18053_18487 = state_18034__$1;(statearr_18053_18487[2] = null);
(statearr_18053_18487[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18035 === 14))
{var inst_18027 = (state_18034[2]);var inst_18028 = cljs.core.async.close_BANG_.call(null,out);var state_18034__$1 = (function (){var statearr_18054 = state_18034;(statearr_18054[13] = inst_18027);
return statearr_18054;
})();var statearr_18055_18488 = state_18034__$1;(statearr_18055_18488[2] = inst_18028);
(statearr_18055_18488[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18035 === 15))
{var inst_18024 = (state_18034[2]);var state_18034__$1 = state_18034;var statearr_18056_18489 = state_18034__$1;(statearr_18056_18489[2] = inst_18024);
(statearr_18056_18489[1] = 14);
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
});})(c__13308__auto___18475,out))
;return ((function (switch__13238__auto__,c__13308__auto___18475,out){
return (function() {
var state_machine__13239__auto__ = null;
var state_machine__13239__auto____0 = (function (){var statearr_18060 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18060[0] = state_machine__13239__auto__);
(statearr_18060[1] = 1);
return statearr_18060;
});
var state_machine__13239__auto____1 = (function (state_18034){while(true){
var ret_value__13240__auto__ = (function (){try{while(true){
var result__13241__auto__ = switch__13238__auto__.call(null,state_18034);if(cljs.core.keyword_identical_QMARK_.call(null,result__13241__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13241__auto__;
}
break;
}
}catch (e18061){if((e18061 instanceof Object))
{var ex__13242__auto__ = e18061;var statearr_18062_18490 = state_18034;(statearr_18062_18490[5] = ex__13242__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18034);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18061;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13240__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18491 = state_18034;
state_18034 = G__18491;
continue;
}
} else
{return ret_value__13240__auto__;
}
break;
}
});
state_machine__13239__auto__ = function(state_18034){
switch(arguments.length){
case 0:
return state_machine__13239__auto____0.call(this);
case 1:
return state_machine__13239__auto____1.call(this,state_18034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13239__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13239__auto____0;
state_machine__13239__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13239__auto____1;
return state_machine__13239__auto__;
})()
;})(switch__13238__auto__,c__13308__auto___18475,out))
})();var state__13310__auto__ = (function (){var statearr_18063 = f__13309__auto__.call(null);(statearr_18063[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13308__auto___18475);
return statearr_18063;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13310__auto__);
});})(c__13308__auto___18475,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13308__auto___18492 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13308__auto___18492,out){
return (function (){var f__13309__auto__ = (function (){var switch__13238__auto__ = ((function (c__13308__auto___18492,out){
return (function (state_18176){var state_val_18177 = (state_18176[1]);if((state_val_18177 === 1))
{var inst_18135 = [];var inst_18136 = inst_18135;var inst_18137 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_18176__$1 = (function (){var statearr_18178 = state_18176;(statearr_18178[7] = inst_18136);
(statearr_18178[8] = inst_18137);
return statearr_18178;
})();var statearr_18179_18493 = state_18176__$1;(statearr_18179_18493[2] = null);
(statearr_18179_18493[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18177 === 2))
{var state_18176__$1 = state_18176;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18176__$1,4,ch);
} else
{if((state_val_18177 === 3))
{var inst_18174 = (state_18176[2]);var state_18176__$1 = state_18176;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18176__$1,inst_18174);
} else
{if((state_val_18177 === 4))
{var inst_18140 = (state_18176[9]);var inst_18140__$1 = (state_18176[2]);var inst_18141 = (inst_18140__$1 == null);var inst_18142 = cljs.core.not.call(null,inst_18141);var state_18176__$1 = (function (){var statearr_18180 = state_18176;(statearr_18180[9] = inst_18140__$1);
return statearr_18180;
})();if(inst_18142)
{var statearr_18181_18494 = state_18176__$1;(statearr_18181_18494[1] = 5);
} else
{var statearr_18182_18495 = state_18176__$1;(statearr_18182_18495[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18177 === 5))
{var inst_18140 = (state_18176[9]);var inst_18137 = (state_18176[8]);var inst_18144 = (state_18176[10]);var inst_18144__$1 = f.call(null,inst_18140);var inst_18145 = cljs.core._EQ_.call(null,inst_18144__$1,inst_18137);var inst_18146 = cljs.core.keyword_identical_QMARK_.call(null,inst_18137,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_18147 = (inst_18145) || (inst_18146);var state_18176__$1 = (function (){var statearr_18183 = state_18176;(statearr_18183[10] = inst_18144__$1);
return statearr_18183;
})();if(cljs.core.truth_(inst_18147))
{var statearr_18184_18496 = state_18176__$1;(statearr_18184_18496[1] = 8);
} else
{var statearr_18185_18497 = state_18176__$1;(statearr_18185_18497[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18177 === 6))
{var inst_18136 = (state_18176[7]);var inst_18161 = inst_18136.length;var inst_18162 = (inst_18161 > 0);var state_18176__$1 = state_18176;if(cljs.core.truth_(inst_18162))
{var statearr_18187_18498 = state_18176__$1;(statearr_18187_18498[1] = 12);
} else
{var statearr_18188_18499 = state_18176__$1;(statearr_18188_18499[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18177 === 7))
{var inst_18172 = (state_18176[2]);var state_18176__$1 = state_18176;var statearr_18189_18500 = state_18176__$1;(statearr_18189_18500[2] = inst_18172);
(statearr_18189_18500[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18177 === 8))
{var inst_18140 = (state_18176[9]);var inst_18136 = (state_18176[7]);var inst_18144 = (state_18176[10]);var inst_18149 = inst_18136.push(inst_18140);var tmp18186 = inst_18136;var inst_18136__$1 = tmp18186;var inst_18137 = inst_18144;var state_18176__$1 = (function (){var statearr_18190 = state_18176;(statearr_18190[7] = inst_18136__$1);
(statearr_18190[8] = inst_18137);
(statearr_18190[11] = inst_18149);
return statearr_18190;
})();var statearr_18191_18501 = state_18176__$1;(statearr_18191_18501[2] = null);
(statearr_18191_18501[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18177 === 9))
{var inst_18136 = (state_18176[7]);var inst_18152 = cljs.core.vec.call(null,inst_18136);var state_18176__$1 = state_18176;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18176__$1,11,out,inst_18152);
} else
{if((state_val_18177 === 10))
{var inst_18159 = (state_18176[2]);var state_18176__$1 = state_18176;var statearr_18192_18502 = state_18176__$1;(statearr_18192_18502[2] = inst_18159);
(statearr_18192_18502[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18177 === 11))
{var inst_18140 = (state_18176[9]);var inst_18144 = (state_18176[10]);var inst_18154 = (state_18176[2]);var inst_18155 = [];var inst_18156 = inst_18155.push(inst_18140);var inst_18136 = inst_18155;var inst_18137 = inst_18144;var state_18176__$1 = (function (){var statearr_18193 = state_18176;(statearr_18193[7] = inst_18136);
(statearr_18193[8] = inst_18137);
(statearr_18193[12] = inst_18154);
(statearr_18193[13] = inst_18156);
return statearr_18193;
})();var statearr_18194_18503 = state_18176__$1;(statearr_18194_18503[2] = null);
(statearr_18194_18503[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18177 === 12))
{var inst_18136 = (state_18176[7]);var inst_18164 = cljs.core.vec.call(null,inst_18136);var state_18176__$1 = state_18176;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18176__$1,15,out,inst_18164);
} else
{if((state_val_18177 === 13))
{var state_18176__$1 = state_18176;var statearr_18195_18504 = state_18176__$1;(statearr_18195_18504[2] = null);
(statearr_18195_18504[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18177 === 14))
{var inst_18169 = (state_18176[2]);var inst_18170 = cljs.core.async.close_BANG_.call(null,out);var state_18176__$1 = (function (){var statearr_18196 = state_18176;(statearr_18196[14] = inst_18169);
return statearr_18196;
})();var statearr_18197_18505 = state_18176__$1;(statearr_18197_18505[2] = inst_18170);
(statearr_18197_18505[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18177 === 15))
{var inst_18166 = (state_18176[2]);var state_18176__$1 = state_18176;var statearr_18198_18506 = state_18176__$1;(statearr_18198_18506[2] = inst_18166);
(statearr_18198_18506[1] = 14);
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
});})(c__13308__auto___18492,out))
;return ((function (switch__13238__auto__,c__13308__auto___18492,out){
return (function() {
var state_machine__13239__auto__ = null;
var state_machine__13239__auto____0 = (function (){var statearr_18202 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18202[0] = state_machine__13239__auto__);
(statearr_18202[1] = 1);
return statearr_18202;
});
var state_machine__13239__auto____1 = (function (state_18176){while(true){
var ret_value__13240__auto__ = (function (){try{while(true){
var result__13241__auto__ = switch__13238__auto__.call(null,state_18176);if(cljs.core.keyword_identical_QMARK_.call(null,result__13241__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13241__auto__;
}
break;
}
}catch (e18203){if((e18203 instanceof Object))
{var ex__13242__auto__ = e18203;var statearr_18204_18507 = state_18176;(statearr_18204_18507[5] = ex__13242__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18176);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18203;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13240__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18508 = state_18176;
state_18176 = G__18508;
continue;
}
} else
{return ret_value__13240__auto__;
}
break;
}
});
state_machine__13239__auto__ = function(state_18176){
switch(arguments.length){
case 0:
return state_machine__13239__auto____0.call(this);
case 1:
return state_machine__13239__auto____1.call(this,state_18176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13239__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13239__auto____0;
state_machine__13239__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13239__auto____1;
return state_machine__13239__auto__;
})()
;})(switch__13238__auto__,c__13308__auto___18492,out))
})();var state__13310__auto__ = (function (){var statearr_18205 = f__13309__auto__.call(null);(statearr_18205[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13308__auto___18492);
return statearr_18205;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13310__auto__);
});})(c__13308__auto___18492,out))
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
{var o = (function (){var obj11630 = {};return obj11630;
})();var seq__11631_11644 = cljs.core.seq.call(null,obj);var chunk__11632_11645 = null;var count__11633_11646 = 0;var i__11634_11647 = 0;while(true){
if((i__11634_11647 < count__11633_11646))
{var vec__11635_11648 = cljs.core._nth.call(null,chunk__11632_11645,i__11634_11647);var k_11649 = cljs.core.nth.call(null,vec__11635_11648,0,null);var v_11650 = cljs.core.nth.call(null,vec__11635_11648,1,null);(o[cljs.core.name.call(null,k_11649)] = js_props.call(null,v_11650));
{
var G__11651 = seq__11631_11644;
var G__11652 = chunk__11632_11645;
var G__11653 = count__11633_11646;
var G__11654 = (i__11634_11647 + 1);
seq__11631_11644 = G__11651;
chunk__11632_11645 = G__11652;
count__11633_11646 = G__11653;
i__11634_11647 = G__11654;
continue;
}
} else
{var temp__4092__auto___11655 = cljs.core.seq.call(null,seq__11631_11644);if(temp__4092__auto___11655)
{var seq__11631_11656__$1 = temp__4092__auto___11655;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11631_11656__$1))
{var c__5632__auto___11657 = cljs.core.chunk_first.call(null,seq__11631_11656__$1);{
var G__11658 = cljs.core.chunk_rest.call(null,seq__11631_11656__$1);
var G__11659 = c__5632__auto___11657;
var G__11660 = cljs.core.count.call(null,c__5632__auto___11657);
var G__11661 = 0;
seq__11631_11644 = G__11658;
chunk__11632_11645 = G__11659;
count__11633_11646 = G__11660;
i__11634_11647 = G__11661;
continue;
}
} else
{var vec__11636_11662 = cljs.core.first.call(null,seq__11631_11656__$1);var k_11663 = cljs.core.nth.call(null,vec__11636_11662,0,null);var v_11664 = cljs.core.nth.call(null,vec__11636_11662,1,null);(o[cljs.core.name.call(null,k_11663)] = js_props.call(null,v_11664));
{
var G__11665 = cljs.core.next.call(null,seq__11631_11656__$1);
var G__11666 = null;
var G__11667 = 0;
var G__11668 = 0;
seq__11631_11644 = G__11665;
chunk__11632_11645 = G__11666;
count__11633_11646 = G__11667;
i__11634_11647 = G__11668;
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
quiescent.component = (function component(renderer){var react_component = React.createClass({"render": (function (){var this$ = this;var _STAR_component_STAR_11638 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return cljs.core.apply.call(null,renderer,(this$.props["value"]),(this$.props["statics"]));
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11638;
}}), "shouldComponentUpdate": (function (next_props,_){var this$ = this;return cljs.core.not_EQ_.call(null,(this$.props["value"]),(next_props["value"]));
})});return ((function (react_component){
return (function() { 
var G__11669__delegate = function (value,static_args){return react_component.call(null,{"statics": static_args, "value": value});
};
var G__11669 = function (value,var_args){
var static_args = null;if (arguments.length > 1) {
  static_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__11669__delegate.call(this,value,static_args);};
G__11669.cljs$lang$maxFixedArity = 1;
G__11669.cljs$lang$applyTo = (function (arglist__11670){
var value = cljs.core.first(arglist__11670);
var static_args = cljs.core.rest(arglist__11670);
return G__11669__delegate(value,static_args);
});
G__11669.cljs$core$IFn$_invoke$arity$variadic = G__11669__delegate;
return G__11669;
})()
;
;})(react_component))
});
/**
* Wrapper component used to mix-in lifecycle access
*/
quiescent.WrapperComponent = React.createClass({"componentWillUnmount": (function (){var this$ = this;var temp__4092__auto__ = (this$.props["onWillUnmount"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_11643 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null);
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11643;
}} else
{return null;
}
}), "componentWillUpdate": (function (_,___$1){var this$ = this;var temp__4092__auto__ = (this$.props["onWillUpdate"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_11642 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null);
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11642;
}} else
{return null;
}
}), "componentWillMount": (function (){var this$ = this;var temp__4092__auto__ = (this$.props["onWillMount"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_11641 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null);
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11641;
}} else
{return null;
}
}), "componentDidMount": (function (){var this$ = this;var temp__4092__auto__ = (this$.props["onMount"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_11640 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null,this$.getDOMNode());
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11640;
}} else
{return null;
}
}), "componentDidUpdate": (function (prev_props,prev_state){var this$ = this;var temp__4092__auto__ = (this$.props["onUpdate"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_11639 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null,this$.getDOMNode());
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11639;
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
var wrapper__delegate = function (child,kvs){var props = quiescent.js_props.call(null,cljs.core.apply.call(null,cljs.core.array_map,new cljs.core.Keyword(null,"wrappee","wrappee",2609412088),child,kvs));var temp__4092__auto___11671 = (child.props["key"]);if(cljs.core.truth_(temp__4092__auto___11671))
{var key_11672 = temp__4092__auto___11671;(props["key"] = key_11672);
} else
{}
return quiescent.WrapperComponent.call(null,props);
};
var wrapper = function (child,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrapper__delegate.call(this,child,kvs);};
wrapper.cljs$lang$maxFixedArity = 1;
wrapper.cljs$lang$applyTo = (function (arglist__11673){
var child = cljs.core.first(arglist__11673);
var kvs = cljs.core.rest(arglist__11673);
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
var a__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8055_9003 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8056_9004 = null;var count__8057_9005 = 0;var i__8058_9006 = 0;while(true){
if((i__8058_9006 < count__8057_9005))
{var arg__7055__auto___9007 = cljs.core._nth.call(null,chunk__8056_9004,i__8058_9006);a__7054__auto__.push(arg__7055__auto___9007);
{
var G__9008 = seq__8055_9003;
var G__9009 = chunk__8056_9004;
var G__9010 = count__8057_9005;
var G__9011 = (i__8058_9006 + 1);
seq__8055_9003 = G__9008;
chunk__8056_9004 = G__9009;
count__8057_9005 = G__9010;
i__8058_9006 = G__9011;
continue;
}
} else
{var temp__4092__auto___9012 = cljs.core.seq.call(null,seq__8055_9003);if(temp__4092__auto___9012)
{var seq__8055_9013__$1 = temp__4092__auto___9012;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8055_9013__$1))
{var c__5632__auto___9014 = cljs.core.chunk_first.call(null,seq__8055_9013__$1);{
var G__9015 = cljs.core.chunk_rest.call(null,seq__8055_9013__$1);
var G__9016 = c__5632__auto___9014;
var G__9017 = cljs.core.count.call(null,c__5632__auto___9014);
var G__9018 = 0;
seq__8055_9003 = G__9015;
chunk__8056_9004 = G__9016;
count__8057_9005 = G__9017;
i__8058_9006 = G__9018;
continue;
}
} else
{var arg__7055__auto___9019 = cljs.core.first.call(null,seq__8055_9013__$1);a__7054__auto__.push(arg__7055__auto___9019);
{
var G__9020 = cljs.core.next.call(null,seq__8055_9013__$1);
var G__9021 = null;
var G__9022 = 0;
var G__9023 = 0;
seq__8055_9003 = G__9020;
chunk__8056_9004 = G__9021;
count__8057_9005 = G__9022;
i__8058_9006 = G__9023;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.a.apply(null,a__7054__auto__);
};
var a = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return a__delegate.call(this,args__7053__auto__);};
a.cljs$lang$maxFixedArity = 0;
a.cljs$lang$applyTo = (function (arglist__9024){
var args__7053__auto__ = cljs.core.seq(arglist__9024);
return a__delegate(args__7053__auto__);
});
a.cljs$core$IFn$_invoke$arity$variadic = a__delegate;
return a;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.abbr = (function() { 
var abbr__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8063_9025 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8064_9026 = null;var count__8065_9027 = 0;var i__8066_9028 = 0;while(true){
if((i__8066_9028 < count__8065_9027))
{var arg__7055__auto___9029 = cljs.core._nth.call(null,chunk__8064_9026,i__8066_9028);a__7054__auto__.push(arg__7055__auto___9029);
{
var G__9030 = seq__8063_9025;
var G__9031 = chunk__8064_9026;
var G__9032 = count__8065_9027;
var G__9033 = (i__8066_9028 + 1);
seq__8063_9025 = G__9030;
chunk__8064_9026 = G__9031;
count__8065_9027 = G__9032;
i__8066_9028 = G__9033;
continue;
}
} else
{var temp__4092__auto___9034 = cljs.core.seq.call(null,seq__8063_9025);if(temp__4092__auto___9034)
{var seq__8063_9035__$1 = temp__4092__auto___9034;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8063_9035__$1))
{var c__5632__auto___9036 = cljs.core.chunk_first.call(null,seq__8063_9035__$1);{
var G__9037 = cljs.core.chunk_rest.call(null,seq__8063_9035__$1);
var G__9038 = c__5632__auto___9036;
var G__9039 = cljs.core.count.call(null,c__5632__auto___9036);
var G__9040 = 0;
seq__8063_9025 = G__9037;
chunk__8064_9026 = G__9038;
count__8065_9027 = G__9039;
i__8066_9028 = G__9040;
continue;
}
} else
{var arg__7055__auto___9041 = cljs.core.first.call(null,seq__8063_9035__$1);a__7054__auto__.push(arg__7055__auto___9041);
{
var G__9042 = cljs.core.next.call(null,seq__8063_9035__$1);
var G__9043 = null;
var G__9044 = 0;
var G__9045 = 0;
seq__8063_9025 = G__9042;
chunk__8064_9026 = G__9043;
count__8065_9027 = G__9044;
i__8066_9028 = G__9045;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.abbr.apply(null,a__7054__auto__);
};
var abbr = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return abbr__delegate.call(this,args__7053__auto__);};
abbr.cljs$lang$maxFixedArity = 0;
abbr.cljs$lang$applyTo = (function (arglist__9046){
var args__7053__auto__ = cljs.core.seq(arglist__9046);
return abbr__delegate(args__7053__auto__);
});
abbr.cljs$core$IFn$_invoke$arity$variadic = abbr__delegate;
return abbr;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.address = (function() { 
var address__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8071_9047 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8072_9048 = null;var count__8073_9049 = 0;var i__8074_9050 = 0;while(true){
if((i__8074_9050 < count__8073_9049))
{var arg__7055__auto___9051 = cljs.core._nth.call(null,chunk__8072_9048,i__8074_9050);a__7054__auto__.push(arg__7055__auto___9051);
{
var G__9052 = seq__8071_9047;
var G__9053 = chunk__8072_9048;
var G__9054 = count__8073_9049;
var G__9055 = (i__8074_9050 + 1);
seq__8071_9047 = G__9052;
chunk__8072_9048 = G__9053;
count__8073_9049 = G__9054;
i__8074_9050 = G__9055;
continue;
}
} else
{var temp__4092__auto___9056 = cljs.core.seq.call(null,seq__8071_9047);if(temp__4092__auto___9056)
{var seq__8071_9057__$1 = temp__4092__auto___9056;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8071_9057__$1))
{var c__5632__auto___9058 = cljs.core.chunk_first.call(null,seq__8071_9057__$1);{
var G__9059 = cljs.core.chunk_rest.call(null,seq__8071_9057__$1);
var G__9060 = c__5632__auto___9058;
var G__9061 = cljs.core.count.call(null,c__5632__auto___9058);
var G__9062 = 0;
seq__8071_9047 = G__9059;
chunk__8072_9048 = G__9060;
count__8073_9049 = G__9061;
i__8074_9050 = G__9062;
continue;
}
} else
{var arg__7055__auto___9063 = cljs.core.first.call(null,seq__8071_9057__$1);a__7054__auto__.push(arg__7055__auto___9063);
{
var G__9064 = cljs.core.next.call(null,seq__8071_9057__$1);
var G__9065 = null;
var G__9066 = 0;
var G__9067 = 0;
seq__8071_9047 = G__9064;
chunk__8072_9048 = G__9065;
count__8073_9049 = G__9066;
i__8074_9050 = G__9067;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.address.apply(null,a__7054__auto__);
};
var address = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return address__delegate.call(this,args__7053__auto__);};
address.cljs$lang$maxFixedArity = 0;
address.cljs$lang$applyTo = (function (arglist__9068){
var args__7053__auto__ = cljs.core.seq(arglist__9068);
return address__delegate(args__7053__auto__);
});
address.cljs$core$IFn$_invoke$arity$variadic = address__delegate;
return address;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.area = (function() { 
var area__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8079_9069 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8080_9070 = null;var count__8081_9071 = 0;var i__8082_9072 = 0;while(true){
if((i__8082_9072 < count__8081_9071))
{var arg__7055__auto___9073 = cljs.core._nth.call(null,chunk__8080_9070,i__8082_9072);a__7054__auto__.push(arg__7055__auto___9073);
{
var G__9074 = seq__8079_9069;
var G__9075 = chunk__8080_9070;
var G__9076 = count__8081_9071;
var G__9077 = (i__8082_9072 + 1);
seq__8079_9069 = G__9074;
chunk__8080_9070 = G__9075;
count__8081_9071 = G__9076;
i__8082_9072 = G__9077;
continue;
}
} else
{var temp__4092__auto___9078 = cljs.core.seq.call(null,seq__8079_9069);if(temp__4092__auto___9078)
{var seq__8079_9079__$1 = temp__4092__auto___9078;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8079_9079__$1))
{var c__5632__auto___9080 = cljs.core.chunk_first.call(null,seq__8079_9079__$1);{
var G__9081 = cljs.core.chunk_rest.call(null,seq__8079_9079__$1);
var G__9082 = c__5632__auto___9080;
var G__9083 = cljs.core.count.call(null,c__5632__auto___9080);
var G__9084 = 0;
seq__8079_9069 = G__9081;
chunk__8080_9070 = G__9082;
count__8081_9071 = G__9083;
i__8082_9072 = G__9084;
continue;
}
} else
{var arg__7055__auto___9085 = cljs.core.first.call(null,seq__8079_9079__$1);a__7054__auto__.push(arg__7055__auto___9085);
{
var G__9086 = cljs.core.next.call(null,seq__8079_9079__$1);
var G__9087 = null;
var G__9088 = 0;
var G__9089 = 0;
seq__8079_9069 = G__9086;
chunk__8080_9070 = G__9087;
count__8081_9071 = G__9088;
i__8082_9072 = G__9089;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.area.apply(null,a__7054__auto__);
};
var area = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return area__delegate.call(this,args__7053__auto__);};
area.cljs$lang$maxFixedArity = 0;
area.cljs$lang$applyTo = (function (arglist__9090){
var args__7053__auto__ = cljs.core.seq(arglist__9090);
return area__delegate(args__7053__auto__);
});
area.cljs$core$IFn$_invoke$arity$variadic = area__delegate;
return area;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.article = (function() { 
var article__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8087_9091 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8088_9092 = null;var count__8089_9093 = 0;var i__8090_9094 = 0;while(true){
if((i__8090_9094 < count__8089_9093))
{var arg__7055__auto___9095 = cljs.core._nth.call(null,chunk__8088_9092,i__8090_9094);a__7054__auto__.push(arg__7055__auto___9095);
{
var G__9096 = seq__8087_9091;
var G__9097 = chunk__8088_9092;
var G__9098 = count__8089_9093;
var G__9099 = (i__8090_9094 + 1);
seq__8087_9091 = G__9096;
chunk__8088_9092 = G__9097;
count__8089_9093 = G__9098;
i__8090_9094 = G__9099;
continue;
}
} else
{var temp__4092__auto___9100 = cljs.core.seq.call(null,seq__8087_9091);if(temp__4092__auto___9100)
{var seq__8087_9101__$1 = temp__4092__auto___9100;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8087_9101__$1))
{var c__5632__auto___9102 = cljs.core.chunk_first.call(null,seq__8087_9101__$1);{
var G__9103 = cljs.core.chunk_rest.call(null,seq__8087_9101__$1);
var G__9104 = c__5632__auto___9102;
var G__9105 = cljs.core.count.call(null,c__5632__auto___9102);
var G__9106 = 0;
seq__8087_9091 = G__9103;
chunk__8088_9092 = G__9104;
count__8089_9093 = G__9105;
i__8090_9094 = G__9106;
continue;
}
} else
{var arg__7055__auto___9107 = cljs.core.first.call(null,seq__8087_9101__$1);a__7054__auto__.push(arg__7055__auto___9107);
{
var G__9108 = cljs.core.next.call(null,seq__8087_9101__$1);
var G__9109 = null;
var G__9110 = 0;
var G__9111 = 0;
seq__8087_9091 = G__9108;
chunk__8088_9092 = G__9109;
count__8089_9093 = G__9110;
i__8090_9094 = G__9111;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.article.apply(null,a__7054__auto__);
};
var article = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return article__delegate.call(this,args__7053__auto__);};
article.cljs$lang$maxFixedArity = 0;
article.cljs$lang$applyTo = (function (arglist__9112){
var args__7053__auto__ = cljs.core.seq(arglist__9112);
return article__delegate(args__7053__auto__);
});
article.cljs$core$IFn$_invoke$arity$variadic = article__delegate;
return article;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.aside = (function() { 
var aside__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8095_9113 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8096_9114 = null;var count__8097_9115 = 0;var i__8098_9116 = 0;while(true){
if((i__8098_9116 < count__8097_9115))
{var arg__7055__auto___9117 = cljs.core._nth.call(null,chunk__8096_9114,i__8098_9116);a__7054__auto__.push(arg__7055__auto___9117);
{
var G__9118 = seq__8095_9113;
var G__9119 = chunk__8096_9114;
var G__9120 = count__8097_9115;
var G__9121 = (i__8098_9116 + 1);
seq__8095_9113 = G__9118;
chunk__8096_9114 = G__9119;
count__8097_9115 = G__9120;
i__8098_9116 = G__9121;
continue;
}
} else
{var temp__4092__auto___9122 = cljs.core.seq.call(null,seq__8095_9113);if(temp__4092__auto___9122)
{var seq__8095_9123__$1 = temp__4092__auto___9122;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8095_9123__$1))
{var c__5632__auto___9124 = cljs.core.chunk_first.call(null,seq__8095_9123__$1);{
var G__9125 = cljs.core.chunk_rest.call(null,seq__8095_9123__$1);
var G__9126 = c__5632__auto___9124;
var G__9127 = cljs.core.count.call(null,c__5632__auto___9124);
var G__9128 = 0;
seq__8095_9113 = G__9125;
chunk__8096_9114 = G__9126;
count__8097_9115 = G__9127;
i__8098_9116 = G__9128;
continue;
}
} else
{var arg__7055__auto___9129 = cljs.core.first.call(null,seq__8095_9123__$1);a__7054__auto__.push(arg__7055__auto___9129);
{
var G__9130 = cljs.core.next.call(null,seq__8095_9123__$1);
var G__9131 = null;
var G__9132 = 0;
var G__9133 = 0;
seq__8095_9113 = G__9130;
chunk__8096_9114 = G__9131;
count__8097_9115 = G__9132;
i__8098_9116 = G__9133;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.aside.apply(null,a__7054__auto__);
};
var aside = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return aside__delegate.call(this,args__7053__auto__);};
aside.cljs$lang$maxFixedArity = 0;
aside.cljs$lang$applyTo = (function (arglist__9134){
var args__7053__auto__ = cljs.core.seq(arglist__9134);
return aside__delegate(args__7053__auto__);
});
aside.cljs$core$IFn$_invoke$arity$variadic = aside__delegate;
return aside;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.audio = (function() { 
var audio__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8103_9135 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8104_9136 = null;var count__8105_9137 = 0;var i__8106_9138 = 0;while(true){
if((i__8106_9138 < count__8105_9137))
{var arg__7055__auto___9139 = cljs.core._nth.call(null,chunk__8104_9136,i__8106_9138);a__7054__auto__.push(arg__7055__auto___9139);
{
var G__9140 = seq__8103_9135;
var G__9141 = chunk__8104_9136;
var G__9142 = count__8105_9137;
var G__9143 = (i__8106_9138 + 1);
seq__8103_9135 = G__9140;
chunk__8104_9136 = G__9141;
count__8105_9137 = G__9142;
i__8106_9138 = G__9143;
continue;
}
} else
{var temp__4092__auto___9144 = cljs.core.seq.call(null,seq__8103_9135);if(temp__4092__auto___9144)
{var seq__8103_9145__$1 = temp__4092__auto___9144;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8103_9145__$1))
{var c__5632__auto___9146 = cljs.core.chunk_first.call(null,seq__8103_9145__$1);{
var G__9147 = cljs.core.chunk_rest.call(null,seq__8103_9145__$1);
var G__9148 = c__5632__auto___9146;
var G__9149 = cljs.core.count.call(null,c__5632__auto___9146);
var G__9150 = 0;
seq__8103_9135 = G__9147;
chunk__8104_9136 = G__9148;
count__8105_9137 = G__9149;
i__8106_9138 = G__9150;
continue;
}
} else
{var arg__7055__auto___9151 = cljs.core.first.call(null,seq__8103_9145__$1);a__7054__auto__.push(arg__7055__auto___9151);
{
var G__9152 = cljs.core.next.call(null,seq__8103_9145__$1);
var G__9153 = null;
var G__9154 = 0;
var G__9155 = 0;
seq__8103_9135 = G__9152;
chunk__8104_9136 = G__9153;
count__8105_9137 = G__9154;
i__8106_9138 = G__9155;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.audio.apply(null,a__7054__auto__);
};
var audio = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return audio__delegate.call(this,args__7053__auto__);};
audio.cljs$lang$maxFixedArity = 0;
audio.cljs$lang$applyTo = (function (arglist__9156){
var args__7053__auto__ = cljs.core.seq(arglist__9156);
return audio__delegate(args__7053__auto__);
});
audio.cljs$core$IFn$_invoke$arity$variadic = audio__delegate;
return audio;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.b = (function() { 
var b__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8111_9157 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8112_9158 = null;var count__8113_9159 = 0;var i__8114_9160 = 0;while(true){
if((i__8114_9160 < count__8113_9159))
{var arg__7055__auto___9161 = cljs.core._nth.call(null,chunk__8112_9158,i__8114_9160);a__7054__auto__.push(arg__7055__auto___9161);
{
var G__9162 = seq__8111_9157;
var G__9163 = chunk__8112_9158;
var G__9164 = count__8113_9159;
var G__9165 = (i__8114_9160 + 1);
seq__8111_9157 = G__9162;
chunk__8112_9158 = G__9163;
count__8113_9159 = G__9164;
i__8114_9160 = G__9165;
continue;
}
} else
{var temp__4092__auto___9166 = cljs.core.seq.call(null,seq__8111_9157);if(temp__4092__auto___9166)
{var seq__8111_9167__$1 = temp__4092__auto___9166;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8111_9167__$1))
{var c__5632__auto___9168 = cljs.core.chunk_first.call(null,seq__8111_9167__$1);{
var G__9169 = cljs.core.chunk_rest.call(null,seq__8111_9167__$1);
var G__9170 = c__5632__auto___9168;
var G__9171 = cljs.core.count.call(null,c__5632__auto___9168);
var G__9172 = 0;
seq__8111_9157 = G__9169;
chunk__8112_9158 = G__9170;
count__8113_9159 = G__9171;
i__8114_9160 = G__9172;
continue;
}
} else
{var arg__7055__auto___9173 = cljs.core.first.call(null,seq__8111_9167__$1);a__7054__auto__.push(arg__7055__auto___9173);
{
var G__9174 = cljs.core.next.call(null,seq__8111_9167__$1);
var G__9175 = null;
var G__9176 = 0;
var G__9177 = 0;
seq__8111_9157 = G__9174;
chunk__8112_9158 = G__9175;
count__8113_9159 = G__9176;
i__8114_9160 = G__9177;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.b.apply(null,a__7054__auto__);
};
var b = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return b__delegate.call(this,args__7053__auto__);};
b.cljs$lang$maxFixedArity = 0;
b.cljs$lang$applyTo = (function (arglist__9178){
var args__7053__auto__ = cljs.core.seq(arglist__9178);
return b__delegate(args__7053__auto__);
});
b.cljs$core$IFn$_invoke$arity$variadic = b__delegate;
return b;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.base = (function() { 
var base__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8119_9179 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8120_9180 = null;var count__8121_9181 = 0;var i__8122_9182 = 0;while(true){
if((i__8122_9182 < count__8121_9181))
{var arg__7055__auto___9183 = cljs.core._nth.call(null,chunk__8120_9180,i__8122_9182);a__7054__auto__.push(arg__7055__auto___9183);
{
var G__9184 = seq__8119_9179;
var G__9185 = chunk__8120_9180;
var G__9186 = count__8121_9181;
var G__9187 = (i__8122_9182 + 1);
seq__8119_9179 = G__9184;
chunk__8120_9180 = G__9185;
count__8121_9181 = G__9186;
i__8122_9182 = G__9187;
continue;
}
} else
{var temp__4092__auto___9188 = cljs.core.seq.call(null,seq__8119_9179);if(temp__4092__auto___9188)
{var seq__8119_9189__$1 = temp__4092__auto___9188;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8119_9189__$1))
{var c__5632__auto___9190 = cljs.core.chunk_first.call(null,seq__8119_9189__$1);{
var G__9191 = cljs.core.chunk_rest.call(null,seq__8119_9189__$1);
var G__9192 = c__5632__auto___9190;
var G__9193 = cljs.core.count.call(null,c__5632__auto___9190);
var G__9194 = 0;
seq__8119_9179 = G__9191;
chunk__8120_9180 = G__9192;
count__8121_9181 = G__9193;
i__8122_9182 = G__9194;
continue;
}
} else
{var arg__7055__auto___9195 = cljs.core.first.call(null,seq__8119_9189__$1);a__7054__auto__.push(arg__7055__auto___9195);
{
var G__9196 = cljs.core.next.call(null,seq__8119_9189__$1);
var G__9197 = null;
var G__9198 = 0;
var G__9199 = 0;
seq__8119_9179 = G__9196;
chunk__8120_9180 = G__9197;
count__8121_9181 = G__9198;
i__8122_9182 = G__9199;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.base.apply(null,a__7054__auto__);
};
var base = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return base__delegate.call(this,args__7053__auto__);};
base.cljs$lang$maxFixedArity = 0;
base.cljs$lang$applyTo = (function (arglist__9200){
var args__7053__auto__ = cljs.core.seq(arglist__9200);
return base__delegate(args__7053__auto__);
});
base.cljs$core$IFn$_invoke$arity$variadic = base__delegate;
return base;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.bdi = (function() { 
var bdi__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8127_9201 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8128_9202 = null;var count__8129_9203 = 0;var i__8130_9204 = 0;while(true){
if((i__8130_9204 < count__8129_9203))
{var arg__7055__auto___9205 = cljs.core._nth.call(null,chunk__8128_9202,i__8130_9204);a__7054__auto__.push(arg__7055__auto___9205);
{
var G__9206 = seq__8127_9201;
var G__9207 = chunk__8128_9202;
var G__9208 = count__8129_9203;
var G__9209 = (i__8130_9204 + 1);
seq__8127_9201 = G__9206;
chunk__8128_9202 = G__9207;
count__8129_9203 = G__9208;
i__8130_9204 = G__9209;
continue;
}
} else
{var temp__4092__auto___9210 = cljs.core.seq.call(null,seq__8127_9201);if(temp__4092__auto___9210)
{var seq__8127_9211__$1 = temp__4092__auto___9210;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8127_9211__$1))
{var c__5632__auto___9212 = cljs.core.chunk_first.call(null,seq__8127_9211__$1);{
var G__9213 = cljs.core.chunk_rest.call(null,seq__8127_9211__$1);
var G__9214 = c__5632__auto___9212;
var G__9215 = cljs.core.count.call(null,c__5632__auto___9212);
var G__9216 = 0;
seq__8127_9201 = G__9213;
chunk__8128_9202 = G__9214;
count__8129_9203 = G__9215;
i__8130_9204 = G__9216;
continue;
}
} else
{var arg__7055__auto___9217 = cljs.core.first.call(null,seq__8127_9211__$1);a__7054__auto__.push(arg__7055__auto___9217);
{
var G__9218 = cljs.core.next.call(null,seq__8127_9211__$1);
var G__9219 = null;
var G__9220 = 0;
var G__9221 = 0;
seq__8127_9201 = G__9218;
chunk__8128_9202 = G__9219;
count__8129_9203 = G__9220;
i__8130_9204 = G__9221;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.bdi.apply(null,a__7054__auto__);
};
var bdi = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return bdi__delegate.call(this,args__7053__auto__);};
bdi.cljs$lang$maxFixedArity = 0;
bdi.cljs$lang$applyTo = (function (arglist__9222){
var args__7053__auto__ = cljs.core.seq(arglist__9222);
return bdi__delegate(args__7053__auto__);
});
bdi.cljs$core$IFn$_invoke$arity$variadic = bdi__delegate;
return bdi;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.bdo = (function() { 
var bdo__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8135_9223 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8136_9224 = null;var count__8137_9225 = 0;var i__8138_9226 = 0;while(true){
if((i__8138_9226 < count__8137_9225))
{var arg__7055__auto___9227 = cljs.core._nth.call(null,chunk__8136_9224,i__8138_9226);a__7054__auto__.push(arg__7055__auto___9227);
{
var G__9228 = seq__8135_9223;
var G__9229 = chunk__8136_9224;
var G__9230 = count__8137_9225;
var G__9231 = (i__8138_9226 + 1);
seq__8135_9223 = G__9228;
chunk__8136_9224 = G__9229;
count__8137_9225 = G__9230;
i__8138_9226 = G__9231;
continue;
}
} else
{var temp__4092__auto___9232 = cljs.core.seq.call(null,seq__8135_9223);if(temp__4092__auto___9232)
{var seq__8135_9233__$1 = temp__4092__auto___9232;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8135_9233__$1))
{var c__5632__auto___9234 = cljs.core.chunk_first.call(null,seq__8135_9233__$1);{
var G__9235 = cljs.core.chunk_rest.call(null,seq__8135_9233__$1);
var G__9236 = c__5632__auto___9234;
var G__9237 = cljs.core.count.call(null,c__5632__auto___9234);
var G__9238 = 0;
seq__8135_9223 = G__9235;
chunk__8136_9224 = G__9236;
count__8137_9225 = G__9237;
i__8138_9226 = G__9238;
continue;
}
} else
{var arg__7055__auto___9239 = cljs.core.first.call(null,seq__8135_9233__$1);a__7054__auto__.push(arg__7055__auto___9239);
{
var G__9240 = cljs.core.next.call(null,seq__8135_9233__$1);
var G__9241 = null;
var G__9242 = 0;
var G__9243 = 0;
seq__8135_9223 = G__9240;
chunk__8136_9224 = G__9241;
count__8137_9225 = G__9242;
i__8138_9226 = G__9243;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.bdo.apply(null,a__7054__auto__);
};
var bdo = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return bdo__delegate.call(this,args__7053__auto__);};
bdo.cljs$lang$maxFixedArity = 0;
bdo.cljs$lang$applyTo = (function (arglist__9244){
var args__7053__auto__ = cljs.core.seq(arglist__9244);
return bdo__delegate(args__7053__auto__);
});
bdo.cljs$core$IFn$_invoke$arity$variadic = bdo__delegate;
return bdo;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.big = (function() { 
var big__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8143_9245 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8144_9246 = null;var count__8145_9247 = 0;var i__8146_9248 = 0;while(true){
if((i__8146_9248 < count__8145_9247))
{var arg__7055__auto___9249 = cljs.core._nth.call(null,chunk__8144_9246,i__8146_9248);a__7054__auto__.push(arg__7055__auto___9249);
{
var G__9250 = seq__8143_9245;
var G__9251 = chunk__8144_9246;
var G__9252 = count__8145_9247;
var G__9253 = (i__8146_9248 + 1);
seq__8143_9245 = G__9250;
chunk__8144_9246 = G__9251;
count__8145_9247 = G__9252;
i__8146_9248 = G__9253;
continue;
}
} else
{var temp__4092__auto___9254 = cljs.core.seq.call(null,seq__8143_9245);if(temp__4092__auto___9254)
{var seq__8143_9255__$1 = temp__4092__auto___9254;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8143_9255__$1))
{var c__5632__auto___9256 = cljs.core.chunk_first.call(null,seq__8143_9255__$1);{
var G__9257 = cljs.core.chunk_rest.call(null,seq__8143_9255__$1);
var G__9258 = c__5632__auto___9256;
var G__9259 = cljs.core.count.call(null,c__5632__auto___9256);
var G__9260 = 0;
seq__8143_9245 = G__9257;
chunk__8144_9246 = G__9258;
count__8145_9247 = G__9259;
i__8146_9248 = G__9260;
continue;
}
} else
{var arg__7055__auto___9261 = cljs.core.first.call(null,seq__8143_9255__$1);a__7054__auto__.push(arg__7055__auto___9261);
{
var G__9262 = cljs.core.next.call(null,seq__8143_9255__$1);
var G__9263 = null;
var G__9264 = 0;
var G__9265 = 0;
seq__8143_9245 = G__9262;
chunk__8144_9246 = G__9263;
count__8145_9247 = G__9264;
i__8146_9248 = G__9265;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.big.apply(null,a__7054__auto__);
};
var big = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return big__delegate.call(this,args__7053__auto__);};
big.cljs$lang$maxFixedArity = 0;
big.cljs$lang$applyTo = (function (arglist__9266){
var args__7053__auto__ = cljs.core.seq(arglist__9266);
return big__delegate(args__7053__auto__);
});
big.cljs$core$IFn$_invoke$arity$variadic = big__delegate;
return big;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.blockquote = (function() { 
var blockquote__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8151_9267 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8152_9268 = null;var count__8153_9269 = 0;var i__8154_9270 = 0;while(true){
if((i__8154_9270 < count__8153_9269))
{var arg__7055__auto___9271 = cljs.core._nth.call(null,chunk__8152_9268,i__8154_9270);a__7054__auto__.push(arg__7055__auto___9271);
{
var G__9272 = seq__8151_9267;
var G__9273 = chunk__8152_9268;
var G__9274 = count__8153_9269;
var G__9275 = (i__8154_9270 + 1);
seq__8151_9267 = G__9272;
chunk__8152_9268 = G__9273;
count__8153_9269 = G__9274;
i__8154_9270 = G__9275;
continue;
}
} else
{var temp__4092__auto___9276 = cljs.core.seq.call(null,seq__8151_9267);if(temp__4092__auto___9276)
{var seq__8151_9277__$1 = temp__4092__auto___9276;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8151_9277__$1))
{var c__5632__auto___9278 = cljs.core.chunk_first.call(null,seq__8151_9277__$1);{
var G__9279 = cljs.core.chunk_rest.call(null,seq__8151_9277__$1);
var G__9280 = c__5632__auto___9278;
var G__9281 = cljs.core.count.call(null,c__5632__auto___9278);
var G__9282 = 0;
seq__8151_9267 = G__9279;
chunk__8152_9268 = G__9280;
count__8153_9269 = G__9281;
i__8154_9270 = G__9282;
continue;
}
} else
{var arg__7055__auto___9283 = cljs.core.first.call(null,seq__8151_9277__$1);a__7054__auto__.push(arg__7055__auto___9283);
{
var G__9284 = cljs.core.next.call(null,seq__8151_9277__$1);
var G__9285 = null;
var G__9286 = 0;
var G__9287 = 0;
seq__8151_9267 = G__9284;
chunk__8152_9268 = G__9285;
count__8153_9269 = G__9286;
i__8154_9270 = G__9287;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.blockquote.apply(null,a__7054__auto__);
};
var blockquote = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return blockquote__delegate.call(this,args__7053__auto__);};
blockquote.cljs$lang$maxFixedArity = 0;
blockquote.cljs$lang$applyTo = (function (arglist__9288){
var args__7053__auto__ = cljs.core.seq(arglist__9288);
return blockquote__delegate(args__7053__auto__);
});
blockquote.cljs$core$IFn$_invoke$arity$variadic = blockquote__delegate;
return blockquote;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.body = (function() { 
var body__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8159_9289 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8160_9290 = null;var count__8161_9291 = 0;var i__8162_9292 = 0;while(true){
if((i__8162_9292 < count__8161_9291))
{var arg__7055__auto___9293 = cljs.core._nth.call(null,chunk__8160_9290,i__8162_9292);a__7054__auto__.push(arg__7055__auto___9293);
{
var G__9294 = seq__8159_9289;
var G__9295 = chunk__8160_9290;
var G__9296 = count__8161_9291;
var G__9297 = (i__8162_9292 + 1);
seq__8159_9289 = G__9294;
chunk__8160_9290 = G__9295;
count__8161_9291 = G__9296;
i__8162_9292 = G__9297;
continue;
}
} else
{var temp__4092__auto___9298 = cljs.core.seq.call(null,seq__8159_9289);if(temp__4092__auto___9298)
{var seq__8159_9299__$1 = temp__4092__auto___9298;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8159_9299__$1))
{var c__5632__auto___9300 = cljs.core.chunk_first.call(null,seq__8159_9299__$1);{
var G__9301 = cljs.core.chunk_rest.call(null,seq__8159_9299__$1);
var G__9302 = c__5632__auto___9300;
var G__9303 = cljs.core.count.call(null,c__5632__auto___9300);
var G__9304 = 0;
seq__8159_9289 = G__9301;
chunk__8160_9290 = G__9302;
count__8161_9291 = G__9303;
i__8162_9292 = G__9304;
continue;
}
} else
{var arg__7055__auto___9305 = cljs.core.first.call(null,seq__8159_9299__$1);a__7054__auto__.push(arg__7055__auto___9305);
{
var G__9306 = cljs.core.next.call(null,seq__8159_9299__$1);
var G__9307 = null;
var G__9308 = 0;
var G__9309 = 0;
seq__8159_9289 = G__9306;
chunk__8160_9290 = G__9307;
count__8161_9291 = G__9308;
i__8162_9292 = G__9309;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.body.apply(null,a__7054__auto__);
};
var body = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return body__delegate.call(this,args__7053__auto__);};
body.cljs$lang$maxFixedArity = 0;
body.cljs$lang$applyTo = (function (arglist__9310){
var args__7053__auto__ = cljs.core.seq(arglist__9310);
return body__delegate(args__7053__auto__);
});
body.cljs$core$IFn$_invoke$arity$variadic = body__delegate;
return body;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.br = (function() { 
var br__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8167_9311 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8168_9312 = null;var count__8169_9313 = 0;var i__8170_9314 = 0;while(true){
if((i__8170_9314 < count__8169_9313))
{var arg__7055__auto___9315 = cljs.core._nth.call(null,chunk__8168_9312,i__8170_9314);a__7054__auto__.push(arg__7055__auto___9315);
{
var G__9316 = seq__8167_9311;
var G__9317 = chunk__8168_9312;
var G__9318 = count__8169_9313;
var G__9319 = (i__8170_9314 + 1);
seq__8167_9311 = G__9316;
chunk__8168_9312 = G__9317;
count__8169_9313 = G__9318;
i__8170_9314 = G__9319;
continue;
}
} else
{var temp__4092__auto___9320 = cljs.core.seq.call(null,seq__8167_9311);if(temp__4092__auto___9320)
{var seq__8167_9321__$1 = temp__4092__auto___9320;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8167_9321__$1))
{var c__5632__auto___9322 = cljs.core.chunk_first.call(null,seq__8167_9321__$1);{
var G__9323 = cljs.core.chunk_rest.call(null,seq__8167_9321__$1);
var G__9324 = c__5632__auto___9322;
var G__9325 = cljs.core.count.call(null,c__5632__auto___9322);
var G__9326 = 0;
seq__8167_9311 = G__9323;
chunk__8168_9312 = G__9324;
count__8169_9313 = G__9325;
i__8170_9314 = G__9326;
continue;
}
} else
{var arg__7055__auto___9327 = cljs.core.first.call(null,seq__8167_9321__$1);a__7054__auto__.push(arg__7055__auto___9327);
{
var G__9328 = cljs.core.next.call(null,seq__8167_9321__$1);
var G__9329 = null;
var G__9330 = 0;
var G__9331 = 0;
seq__8167_9311 = G__9328;
chunk__8168_9312 = G__9329;
count__8169_9313 = G__9330;
i__8170_9314 = G__9331;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.br.apply(null,a__7054__auto__);
};
var br = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return br__delegate.call(this,args__7053__auto__);};
br.cljs$lang$maxFixedArity = 0;
br.cljs$lang$applyTo = (function (arglist__9332){
var args__7053__auto__ = cljs.core.seq(arglist__9332);
return br__delegate(args__7053__auto__);
});
br.cljs$core$IFn$_invoke$arity$variadic = br__delegate;
return br;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.button = (function() { 
var button__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8175_9333 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8176_9334 = null;var count__8177_9335 = 0;var i__8178_9336 = 0;while(true){
if((i__8178_9336 < count__8177_9335))
{var arg__7055__auto___9337 = cljs.core._nth.call(null,chunk__8176_9334,i__8178_9336);a__7054__auto__.push(arg__7055__auto___9337);
{
var G__9338 = seq__8175_9333;
var G__9339 = chunk__8176_9334;
var G__9340 = count__8177_9335;
var G__9341 = (i__8178_9336 + 1);
seq__8175_9333 = G__9338;
chunk__8176_9334 = G__9339;
count__8177_9335 = G__9340;
i__8178_9336 = G__9341;
continue;
}
} else
{var temp__4092__auto___9342 = cljs.core.seq.call(null,seq__8175_9333);if(temp__4092__auto___9342)
{var seq__8175_9343__$1 = temp__4092__auto___9342;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8175_9343__$1))
{var c__5632__auto___9344 = cljs.core.chunk_first.call(null,seq__8175_9343__$1);{
var G__9345 = cljs.core.chunk_rest.call(null,seq__8175_9343__$1);
var G__9346 = c__5632__auto___9344;
var G__9347 = cljs.core.count.call(null,c__5632__auto___9344);
var G__9348 = 0;
seq__8175_9333 = G__9345;
chunk__8176_9334 = G__9346;
count__8177_9335 = G__9347;
i__8178_9336 = G__9348;
continue;
}
} else
{var arg__7055__auto___9349 = cljs.core.first.call(null,seq__8175_9343__$1);a__7054__auto__.push(arg__7055__auto___9349);
{
var G__9350 = cljs.core.next.call(null,seq__8175_9343__$1);
var G__9351 = null;
var G__9352 = 0;
var G__9353 = 0;
seq__8175_9333 = G__9350;
chunk__8176_9334 = G__9351;
count__8177_9335 = G__9352;
i__8178_9336 = G__9353;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.button.apply(null,a__7054__auto__);
};
var button = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return button__delegate.call(this,args__7053__auto__);};
button.cljs$lang$maxFixedArity = 0;
button.cljs$lang$applyTo = (function (arglist__9354){
var args__7053__auto__ = cljs.core.seq(arglist__9354);
return button__delegate(args__7053__auto__);
});
button.cljs$core$IFn$_invoke$arity$variadic = button__delegate;
return button;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.canvas = (function() { 
var canvas__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8183_9355 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8184_9356 = null;var count__8185_9357 = 0;var i__8186_9358 = 0;while(true){
if((i__8186_9358 < count__8185_9357))
{var arg__7055__auto___9359 = cljs.core._nth.call(null,chunk__8184_9356,i__8186_9358);a__7054__auto__.push(arg__7055__auto___9359);
{
var G__9360 = seq__8183_9355;
var G__9361 = chunk__8184_9356;
var G__9362 = count__8185_9357;
var G__9363 = (i__8186_9358 + 1);
seq__8183_9355 = G__9360;
chunk__8184_9356 = G__9361;
count__8185_9357 = G__9362;
i__8186_9358 = G__9363;
continue;
}
} else
{var temp__4092__auto___9364 = cljs.core.seq.call(null,seq__8183_9355);if(temp__4092__auto___9364)
{var seq__8183_9365__$1 = temp__4092__auto___9364;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8183_9365__$1))
{var c__5632__auto___9366 = cljs.core.chunk_first.call(null,seq__8183_9365__$1);{
var G__9367 = cljs.core.chunk_rest.call(null,seq__8183_9365__$1);
var G__9368 = c__5632__auto___9366;
var G__9369 = cljs.core.count.call(null,c__5632__auto___9366);
var G__9370 = 0;
seq__8183_9355 = G__9367;
chunk__8184_9356 = G__9368;
count__8185_9357 = G__9369;
i__8186_9358 = G__9370;
continue;
}
} else
{var arg__7055__auto___9371 = cljs.core.first.call(null,seq__8183_9365__$1);a__7054__auto__.push(arg__7055__auto___9371);
{
var G__9372 = cljs.core.next.call(null,seq__8183_9365__$1);
var G__9373 = null;
var G__9374 = 0;
var G__9375 = 0;
seq__8183_9355 = G__9372;
chunk__8184_9356 = G__9373;
count__8185_9357 = G__9374;
i__8186_9358 = G__9375;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.canvas.apply(null,a__7054__auto__);
};
var canvas = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return canvas__delegate.call(this,args__7053__auto__);};
canvas.cljs$lang$maxFixedArity = 0;
canvas.cljs$lang$applyTo = (function (arglist__9376){
var args__7053__auto__ = cljs.core.seq(arglist__9376);
return canvas__delegate(args__7053__auto__);
});
canvas.cljs$core$IFn$_invoke$arity$variadic = canvas__delegate;
return canvas;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.caption = (function() { 
var caption__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8191_9377 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8192_9378 = null;var count__8193_9379 = 0;var i__8194_9380 = 0;while(true){
if((i__8194_9380 < count__8193_9379))
{var arg__7055__auto___9381 = cljs.core._nth.call(null,chunk__8192_9378,i__8194_9380);a__7054__auto__.push(arg__7055__auto___9381);
{
var G__9382 = seq__8191_9377;
var G__9383 = chunk__8192_9378;
var G__9384 = count__8193_9379;
var G__9385 = (i__8194_9380 + 1);
seq__8191_9377 = G__9382;
chunk__8192_9378 = G__9383;
count__8193_9379 = G__9384;
i__8194_9380 = G__9385;
continue;
}
} else
{var temp__4092__auto___9386 = cljs.core.seq.call(null,seq__8191_9377);if(temp__4092__auto___9386)
{var seq__8191_9387__$1 = temp__4092__auto___9386;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8191_9387__$1))
{var c__5632__auto___9388 = cljs.core.chunk_first.call(null,seq__8191_9387__$1);{
var G__9389 = cljs.core.chunk_rest.call(null,seq__8191_9387__$1);
var G__9390 = c__5632__auto___9388;
var G__9391 = cljs.core.count.call(null,c__5632__auto___9388);
var G__9392 = 0;
seq__8191_9377 = G__9389;
chunk__8192_9378 = G__9390;
count__8193_9379 = G__9391;
i__8194_9380 = G__9392;
continue;
}
} else
{var arg__7055__auto___9393 = cljs.core.first.call(null,seq__8191_9387__$1);a__7054__auto__.push(arg__7055__auto___9393);
{
var G__9394 = cljs.core.next.call(null,seq__8191_9387__$1);
var G__9395 = null;
var G__9396 = 0;
var G__9397 = 0;
seq__8191_9377 = G__9394;
chunk__8192_9378 = G__9395;
count__8193_9379 = G__9396;
i__8194_9380 = G__9397;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.caption.apply(null,a__7054__auto__);
};
var caption = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return caption__delegate.call(this,args__7053__auto__);};
caption.cljs$lang$maxFixedArity = 0;
caption.cljs$lang$applyTo = (function (arglist__9398){
var args__7053__auto__ = cljs.core.seq(arglist__9398);
return caption__delegate(args__7053__auto__);
});
caption.cljs$core$IFn$_invoke$arity$variadic = caption__delegate;
return caption;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.cite = (function() { 
var cite__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8199_9399 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8200_9400 = null;var count__8201_9401 = 0;var i__8202_9402 = 0;while(true){
if((i__8202_9402 < count__8201_9401))
{var arg__7055__auto___9403 = cljs.core._nth.call(null,chunk__8200_9400,i__8202_9402);a__7054__auto__.push(arg__7055__auto___9403);
{
var G__9404 = seq__8199_9399;
var G__9405 = chunk__8200_9400;
var G__9406 = count__8201_9401;
var G__9407 = (i__8202_9402 + 1);
seq__8199_9399 = G__9404;
chunk__8200_9400 = G__9405;
count__8201_9401 = G__9406;
i__8202_9402 = G__9407;
continue;
}
} else
{var temp__4092__auto___9408 = cljs.core.seq.call(null,seq__8199_9399);if(temp__4092__auto___9408)
{var seq__8199_9409__$1 = temp__4092__auto___9408;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8199_9409__$1))
{var c__5632__auto___9410 = cljs.core.chunk_first.call(null,seq__8199_9409__$1);{
var G__9411 = cljs.core.chunk_rest.call(null,seq__8199_9409__$1);
var G__9412 = c__5632__auto___9410;
var G__9413 = cljs.core.count.call(null,c__5632__auto___9410);
var G__9414 = 0;
seq__8199_9399 = G__9411;
chunk__8200_9400 = G__9412;
count__8201_9401 = G__9413;
i__8202_9402 = G__9414;
continue;
}
} else
{var arg__7055__auto___9415 = cljs.core.first.call(null,seq__8199_9409__$1);a__7054__auto__.push(arg__7055__auto___9415);
{
var G__9416 = cljs.core.next.call(null,seq__8199_9409__$1);
var G__9417 = null;
var G__9418 = 0;
var G__9419 = 0;
seq__8199_9399 = G__9416;
chunk__8200_9400 = G__9417;
count__8201_9401 = G__9418;
i__8202_9402 = G__9419;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.cite.apply(null,a__7054__auto__);
};
var cite = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return cite__delegate.call(this,args__7053__auto__);};
cite.cljs$lang$maxFixedArity = 0;
cite.cljs$lang$applyTo = (function (arglist__9420){
var args__7053__auto__ = cljs.core.seq(arglist__9420);
return cite__delegate(args__7053__auto__);
});
cite.cljs$core$IFn$_invoke$arity$variadic = cite__delegate;
return cite;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.code = (function() { 
var code__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8207_9421 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8208_9422 = null;var count__8209_9423 = 0;var i__8210_9424 = 0;while(true){
if((i__8210_9424 < count__8209_9423))
{var arg__7055__auto___9425 = cljs.core._nth.call(null,chunk__8208_9422,i__8210_9424);a__7054__auto__.push(arg__7055__auto___9425);
{
var G__9426 = seq__8207_9421;
var G__9427 = chunk__8208_9422;
var G__9428 = count__8209_9423;
var G__9429 = (i__8210_9424 + 1);
seq__8207_9421 = G__9426;
chunk__8208_9422 = G__9427;
count__8209_9423 = G__9428;
i__8210_9424 = G__9429;
continue;
}
} else
{var temp__4092__auto___9430 = cljs.core.seq.call(null,seq__8207_9421);if(temp__4092__auto___9430)
{var seq__8207_9431__$1 = temp__4092__auto___9430;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8207_9431__$1))
{var c__5632__auto___9432 = cljs.core.chunk_first.call(null,seq__8207_9431__$1);{
var G__9433 = cljs.core.chunk_rest.call(null,seq__8207_9431__$1);
var G__9434 = c__5632__auto___9432;
var G__9435 = cljs.core.count.call(null,c__5632__auto___9432);
var G__9436 = 0;
seq__8207_9421 = G__9433;
chunk__8208_9422 = G__9434;
count__8209_9423 = G__9435;
i__8210_9424 = G__9436;
continue;
}
} else
{var arg__7055__auto___9437 = cljs.core.first.call(null,seq__8207_9431__$1);a__7054__auto__.push(arg__7055__auto___9437);
{
var G__9438 = cljs.core.next.call(null,seq__8207_9431__$1);
var G__9439 = null;
var G__9440 = 0;
var G__9441 = 0;
seq__8207_9421 = G__9438;
chunk__8208_9422 = G__9439;
count__8209_9423 = G__9440;
i__8210_9424 = G__9441;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.code.apply(null,a__7054__auto__);
};
var code = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return code__delegate.call(this,args__7053__auto__);};
code.cljs$lang$maxFixedArity = 0;
code.cljs$lang$applyTo = (function (arglist__9442){
var args__7053__auto__ = cljs.core.seq(arglist__9442);
return code__delegate(args__7053__auto__);
});
code.cljs$core$IFn$_invoke$arity$variadic = code__delegate;
return code;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.col = (function() { 
var col__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8215_9443 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8216_9444 = null;var count__8217_9445 = 0;var i__8218_9446 = 0;while(true){
if((i__8218_9446 < count__8217_9445))
{var arg__7055__auto___9447 = cljs.core._nth.call(null,chunk__8216_9444,i__8218_9446);a__7054__auto__.push(arg__7055__auto___9447);
{
var G__9448 = seq__8215_9443;
var G__9449 = chunk__8216_9444;
var G__9450 = count__8217_9445;
var G__9451 = (i__8218_9446 + 1);
seq__8215_9443 = G__9448;
chunk__8216_9444 = G__9449;
count__8217_9445 = G__9450;
i__8218_9446 = G__9451;
continue;
}
} else
{var temp__4092__auto___9452 = cljs.core.seq.call(null,seq__8215_9443);if(temp__4092__auto___9452)
{var seq__8215_9453__$1 = temp__4092__auto___9452;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8215_9453__$1))
{var c__5632__auto___9454 = cljs.core.chunk_first.call(null,seq__8215_9453__$1);{
var G__9455 = cljs.core.chunk_rest.call(null,seq__8215_9453__$1);
var G__9456 = c__5632__auto___9454;
var G__9457 = cljs.core.count.call(null,c__5632__auto___9454);
var G__9458 = 0;
seq__8215_9443 = G__9455;
chunk__8216_9444 = G__9456;
count__8217_9445 = G__9457;
i__8218_9446 = G__9458;
continue;
}
} else
{var arg__7055__auto___9459 = cljs.core.first.call(null,seq__8215_9453__$1);a__7054__auto__.push(arg__7055__auto___9459);
{
var G__9460 = cljs.core.next.call(null,seq__8215_9453__$1);
var G__9461 = null;
var G__9462 = 0;
var G__9463 = 0;
seq__8215_9443 = G__9460;
chunk__8216_9444 = G__9461;
count__8217_9445 = G__9462;
i__8218_9446 = G__9463;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.col.apply(null,a__7054__auto__);
};
var col = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return col__delegate.call(this,args__7053__auto__);};
col.cljs$lang$maxFixedArity = 0;
col.cljs$lang$applyTo = (function (arglist__9464){
var args__7053__auto__ = cljs.core.seq(arglist__9464);
return col__delegate(args__7053__auto__);
});
col.cljs$core$IFn$_invoke$arity$variadic = col__delegate;
return col;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.colgroup = (function() { 
var colgroup__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8223_9465 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8224_9466 = null;var count__8225_9467 = 0;var i__8226_9468 = 0;while(true){
if((i__8226_9468 < count__8225_9467))
{var arg__7055__auto___9469 = cljs.core._nth.call(null,chunk__8224_9466,i__8226_9468);a__7054__auto__.push(arg__7055__auto___9469);
{
var G__9470 = seq__8223_9465;
var G__9471 = chunk__8224_9466;
var G__9472 = count__8225_9467;
var G__9473 = (i__8226_9468 + 1);
seq__8223_9465 = G__9470;
chunk__8224_9466 = G__9471;
count__8225_9467 = G__9472;
i__8226_9468 = G__9473;
continue;
}
} else
{var temp__4092__auto___9474 = cljs.core.seq.call(null,seq__8223_9465);if(temp__4092__auto___9474)
{var seq__8223_9475__$1 = temp__4092__auto___9474;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8223_9475__$1))
{var c__5632__auto___9476 = cljs.core.chunk_first.call(null,seq__8223_9475__$1);{
var G__9477 = cljs.core.chunk_rest.call(null,seq__8223_9475__$1);
var G__9478 = c__5632__auto___9476;
var G__9479 = cljs.core.count.call(null,c__5632__auto___9476);
var G__9480 = 0;
seq__8223_9465 = G__9477;
chunk__8224_9466 = G__9478;
count__8225_9467 = G__9479;
i__8226_9468 = G__9480;
continue;
}
} else
{var arg__7055__auto___9481 = cljs.core.first.call(null,seq__8223_9475__$1);a__7054__auto__.push(arg__7055__auto___9481);
{
var G__9482 = cljs.core.next.call(null,seq__8223_9475__$1);
var G__9483 = null;
var G__9484 = 0;
var G__9485 = 0;
seq__8223_9465 = G__9482;
chunk__8224_9466 = G__9483;
count__8225_9467 = G__9484;
i__8226_9468 = G__9485;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.colgroup.apply(null,a__7054__auto__);
};
var colgroup = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return colgroup__delegate.call(this,args__7053__auto__);};
colgroup.cljs$lang$maxFixedArity = 0;
colgroup.cljs$lang$applyTo = (function (arglist__9486){
var args__7053__auto__ = cljs.core.seq(arglist__9486);
return colgroup__delegate(args__7053__auto__);
});
colgroup.cljs$core$IFn$_invoke$arity$variadic = colgroup__delegate;
return colgroup;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.data = (function() { 
var data__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8231_9487 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8232_9488 = null;var count__8233_9489 = 0;var i__8234_9490 = 0;while(true){
if((i__8234_9490 < count__8233_9489))
{var arg__7055__auto___9491 = cljs.core._nth.call(null,chunk__8232_9488,i__8234_9490);a__7054__auto__.push(arg__7055__auto___9491);
{
var G__9492 = seq__8231_9487;
var G__9493 = chunk__8232_9488;
var G__9494 = count__8233_9489;
var G__9495 = (i__8234_9490 + 1);
seq__8231_9487 = G__9492;
chunk__8232_9488 = G__9493;
count__8233_9489 = G__9494;
i__8234_9490 = G__9495;
continue;
}
} else
{var temp__4092__auto___9496 = cljs.core.seq.call(null,seq__8231_9487);if(temp__4092__auto___9496)
{var seq__8231_9497__$1 = temp__4092__auto___9496;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8231_9497__$1))
{var c__5632__auto___9498 = cljs.core.chunk_first.call(null,seq__8231_9497__$1);{
var G__9499 = cljs.core.chunk_rest.call(null,seq__8231_9497__$1);
var G__9500 = c__5632__auto___9498;
var G__9501 = cljs.core.count.call(null,c__5632__auto___9498);
var G__9502 = 0;
seq__8231_9487 = G__9499;
chunk__8232_9488 = G__9500;
count__8233_9489 = G__9501;
i__8234_9490 = G__9502;
continue;
}
} else
{var arg__7055__auto___9503 = cljs.core.first.call(null,seq__8231_9497__$1);a__7054__auto__.push(arg__7055__auto___9503);
{
var G__9504 = cljs.core.next.call(null,seq__8231_9497__$1);
var G__9505 = null;
var G__9506 = 0;
var G__9507 = 0;
seq__8231_9487 = G__9504;
chunk__8232_9488 = G__9505;
count__8233_9489 = G__9506;
i__8234_9490 = G__9507;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.data.apply(null,a__7054__auto__);
};
var data = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return data__delegate.call(this,args__7053__auto__);};
data.cljs$lang$maxFixedArity = 0;
data.cljs$lang$applyTo = (function (arglist__9508){
var args__7053__auto__ = cljs.core.seq(arglist__9508);
return data__delegate(args__7053__auto__);
});
data.cljs$core$IFn$_invoke$arity$variadic = data__delegate;
return data;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.datalist = (function() { 
var datalist__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8239_9509 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8240_9510 = null;var count__8241_9511 = 0;var i__8242_9512 = 0;while(true){
if((i__8242_9512 < count__8241_9511))
{var arg__7055__auto___9513 = cljs.core._nth.call(null,chunk__8240_9510,i__8242_9512);a__7054__auto__.push(arg__7055__auto___9513);
{
var G__9514 = seq__8239_9509;
var G__9515 = chunk__8240_9510;
var G__9516 = count__8241_9511;
var G__9517 = (i__8242_9512 + 1);
seq__8239_9509 = G__9514;
chunk__8240_9510 = G__9515;
count__8241_9511 = G__9516;
i__8242_9512 = G__9517;
continue;
}
} else
{var temp__4092__auto___9518 = cljs.core.seq.call(null,seq__8239_9509);if(temp__4092__auto___9518)
{var seq__8239_9519__$1 = temp__4092__auto___9518;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8239_9519__$1))
{var c__5632__auto___9520 = cljs.core.chunk_first.call(null,seq__8239_9519__$1);{
var G__9521 = cljs.core.chunk_rest.call(null,seq__8239_9519__$1);
var G__9522 = c__5632__auto___9520;
var G__9523 = cljs.core.count.call(null,c__5632__auto___9520);
var G__9524 = 0;
seq__8239_9509 = G__9521;
chunk__8240_9510 = G__9522;
count__8241_9511 = G__9523;
i__8242_9512 = G__9524;
continue;
}
} else
{var arg__7055__auto___9525 = cljs.core.first.call(null,seq__8239_9519__$1);a__7054__auto__.push(arg__7055__auto___9525);
{
var G__9526 = cljs.core.next.call(null,seq__8239_9519__$1);
var G__9527 = null;
var G__9528 = 0;
var G__9529 = 0;
seq__8239_9509 = G__9526;
chunk__8240_9510 = G__9527;
count__8241_9511 = G__9528;
i__8242_9512 = G__9529;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.datalist.apply(null,a__7054__auto__);
};
var datalist = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return datalist__delegate.call(this,args__7053__auto__);};
datalist.cljs$lang$maxFixedArity = 0;
datalist.cljs$lang$applyTo = (function (arglist__9530){
var args__7053__auto__ = cljs.core.seq(arglist__9530);
return datalist__delegate(args__7053__auto__);
});
datalist.cljs$core$IFn$_invoke$arity$variadic = datalist__delegate;
return datalist;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.dd = (function() { 
var dd__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8247_9531 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8248_9532 = null;var count__8249_9533 = 0;var i__8250_9534 = 0;while(true){
if((i__8250_9534 < count__8249_9533))
{var arg__7055__auto___9535 = cljs.core._nth.call(null,chunk__8248_9532,i__8250_9534);a__7054__auto__.push(arg__7055__auto___9535);
{
var G__9536 = seq__8247_9531;
var G__9537 = chunk__8248_9532;
var G__9538 = count__8249_9533;
var G__9539 = (i__8250_9534 + 1);
seq__8247_9531 = G__9536;
chunk__8248_9532 = G__9537;
count__8249_9533 = G__9538;
i__8250_9534 = G__9539;
continue;
}
} else
{var temp__4092__auto___9540 = cljs.core.seq.call(null,seq__8247_9531);if(temp__4092__auto___9540)
{var seq__8247_9541__$1 = temp__4092__auto___9540;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8247_9541__$1))
{var c__5632__auto___9542 = cljs.core.chunk_first.call(null,seq__8247_9541__$1);{
var G__9543 = cljs.core.chunk_rest.call(null,seq__8247_9541__$1);
var G__9544 = c__5632__auto___9542;
var G__9545 = cljs.core.count.call(null,c__5632__auto___9542);
var G__9546 = 0;
seq__8247_9531 = G__9543;
chunk__8248_9532 = G__9544;
count__8249_9533 = G__9545;
i__8250_9534 = G__9546;
continue;
}
} else
{var arg__7055__auto___9547 = cljs.core.first.call(null,seq__8247_9541__$1);a__7054__auto__.push(arg__7055__auto___9547);
{
var G__9548 = cljs.core.next.call(null,seq__8247_9541__$1);
var G__9549 = null;
var G__9550 = 0;
var G__9551 = 0;
seq__8247_9531 = G__9548;
chunk__8248_9532 = G__9549;
count__8249_9533 = G__9550;
i__8250_9534 = G__9551;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.dd.apply(null,a__7054__auto__);
};
var dd = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return dd__delegate.call(this,args__7053__auto__);};
dd.cljs$lang$maxFixedArity = 0;
dd.cljs$lang$applyTo = (function (arglist__9552){
var args__7053__auto__ = cljs.core.seq(arglist__9552);
return dd__delegate(args__7053__auto__);
});
dd.cljs$core$IFn$_invoke$arity$variadic = dd__delegate;
return dd;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.del = (function() { 
var del__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8255_9553 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8256_9554 = null;var count__8257_9555 = 0;var i__8258_9556 = 0;while(true){
if((i__8258_9556 < count__8257_9555))
{var arg__7055__auto___9557 = cljs.core._nth.call(null,chunk__8256_9554,i__8258_9556);a__7054__auto__.push(arg__7055__auto___9557);
{
var G__9558 = seq__8255_9553;
var G__9559 = chunk__8256_9554;
var G__9560 = count__8257_9555;
var G__9561 = (i__8258_9556 + 1);
seq__8255_9553 = G__9558;
chunk__8256_9554 = G__9559;
count__8257_9555 = G__9560;
i__8258_9556 = G__9561;
continue;
}
} else
{var temp__4092__auto___9562 = cljs.core.seq.call(null,seq__8255_9553);if(temp__4092__auto___9562)
{var seq__8255_9563__$1 = temp__4092__auto___9562;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8255_9563__$1))
{var c__5632__auto___9564 = cljs.core.chunk_first.call(null,seq__8255_9563__$1);{
var G__9565 = cljs.core.chunk_rest.call(null,seq__8255_9563__$1);
var G__9566 = c__5632__auto___9564;
var G__9567 = cljs.core.count.call(null,c__5632__auto___9564);
var G__9568 = 0;
seq__8255_9553 = G__9565;
chunk__8256_9554 = G__9566;
count__8257_9555 = G__9567;
i__8258_9556 = G__9568;
continue;
}
} else
{var arg__7055__auto___9569 = cljs.core.first.call(null,seq__8255_9563__$1);a__7054__auto__.push(arg__7055__auto___9569);
{
var G__9570 = cljs.core.next.call(null,seq__8255_9563__$1);
var G__9571 = null;
var G__9572 = 0;
var G__9573 = 0;
seq__8255_9553 = G__9570;
chunk__8256_9554 = G__9571;
count__8257_9555 = G__9572;
i__8258_9556 = G__9573;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.del.apply(null,a__7054__auto__);
};
var del = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return del__delegate.call(this,args__7053__auto__);};
del.cljs$lang$maxFixedArity = 0;
del.cljs$lang$applyTo = (function (arglist__9574){
var args__7053__auto__ = cljs.core.seq(arglist__9574);
return del__delegate(args__7053__auto__);
});
del.cljs$core$IFn$_invoke$arity$variadic = del__delegate;
return del;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.details = (function() { 
var details__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8263_9575 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8264_9576 = null;var count__8265_9577 = 0;var i__8266_9578 = 0;while(true){
if((i__8266_9578 < count__8265_9577))
{var arg__7055__auto___9579 = cljs.core._nth.call(null,chunk__8264_9576,i__8266_9578);a__7054__auto__.push(arg__7055__auto___9579);
{
var G__9580 = seq__8263_9575;
var G__9581 = chunk__8264_9576;
var G__9582 = count__8265_9577;
var G__9583 = (i__8266_9578 + 1);
seq__8263_9575 = G__9580;
chunk__8264_9576 = G__9581;
count__8265_9577 = G__9582;
i__8266_9578 = G__9583;
continue;
}
} else
{var temp__4092__auto___9584 = cljs.core.seq.call(null,seq__8263_9575);if(temp__4092__auto___9584)
{var seq__8263_9585__$1 = temp__4092__auto___9584;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8263_9585__$1))
{var c__5632__auto___9586 = cljs.core.chunk_first.call(null,seq__8263_9585__$1);{
var G__9587 = cljs.core.chunk_rest.call(null,seq__8263_9585__$1);
var G__9588 = c__5632__auto___9586;
var G__9589 = cljs.core.count.call(null,c__5632__auto___9586);
var G__9590 = 0;
seq__8263_9575 = G__9587;
chunk__8264_9576 = G__9588;
count__8265_9577 = G__9589;
i__8266_9578 = G__9590;
continue;
}
} else
{var arg__7055__auto___9591 = cljs.core.first.call(null,seq__8263_9585__$1);a__7054__auto__.push(arg__7055__auto___9591);
{
var G__9592 = cljs.core.next.call(null,seq__8263_9585__$1);
var G__9593 = null;
var G__9594 = 0;
var G__9595 = 0;
seq__8263_9575 = G__9592;
chunk__8264_9576 = G__9593;
count__8265_9577 = G__9594;
i__8266_9578 = G__9595;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.details.apply(null,a__7054__auto__);
};
var details = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return details__delegate.call(this,args__7053__auto__);};
details.cljs$lang$maxFixedArity = 0;
details.cljs$lang$applyTo = (function (arglist__9596){
var args__7053__auto__ = cljs.core.seq(arglist__9596);
return details__delegate(args__7053__auto__);
});
details.cljs$core$IFn$_invoke$arity$variadic = details__delegate;
return details;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.dfn = (function() { 
var dfn__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8271_9597 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8272_9598 = null;var count__8273_9599 = 0;var i__8274_9600 = 0;while(true){
if((i__8274_9600 < count__8273_9599))
{var arg__7055__auto___9601 = cljs.core._nth.call(null,chunk__8272_9598,i__8274_9600);a__7054__auto__.push(arg__7055__auto___9601);
{
var G__9602 = seq__8271_9597;
var G__9603 = chunk__8272_9598;
var G__9604 = count__8273_9599;
var G__9605 = (i__8274_9600 + 1);
seq__8271_9597 = G__9602;
chunk__8272_9598 = G__9603;
count__8273_9599 = G__9604;
i__8274_9600 = G__9605;
continue;
}
} else
{var temp__4092__auto___9606 = cljs.core.seq.call(null,seq__8271_9597);if(temp__4092__auto___9606)
{var seq__8271_9607__$1 = temp__4092__auto___9606;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8271_9607__$1))
{var c__5632__auto___9608 = cljs.core.chunk_first.call(null,seq__8271_9607__$1);{
var G__9609 = cljs.core.chunk_rest.call(null,seq__8271_9607__$1);
var G__9610 = c__5632__auto___9608;
var G__9611 = cljs.core.count.call(null,c__5632__auto___9608);
var G__9612 = 0;
seq__8271_9597 = G__9609;
chunk__8272_9598 = G__9610;
count__8273_9599 = G__9611;
i__8274_9600 = G__9612;
continue;
}
} else
{var arg__7055__auto___9613 = cljs.core.first.call(null,seq__8271_9607__$1);a__7054__auto__.push(arg__7055__auto___9613);
{
var G__9614 = cljs.core.next.call(null,seq__8271_9607__$1);
var G__9615 = null;
var G__9616 = 0;
var G__9617 = 0;
seq__8271_9597 = G__9614;
chunk__8272_9598 = G__9615;
count__8273_9599 = G__9616;
i__8274_9600 = G__9617;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.dfn.apply(null,a__7054__auto__);
};
var dfn = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return dfn__delegate.call(this,args__7053__auto__);};
dfn.cljs$lang$maxFixedArity = 0;
dfn.cljs$lang$applyTo = (function (arglist__9618){
var args__7053__auto__ = cljs.core.seq(arglist__9618);
return dfn__delegate(args__7053__auto__);
});
dfn.cljs$core$IFn$_invoke$arity$variadic = dfn__delegate;
return dfn;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.div = (function() { 
var div__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8279_9619 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8280_9620 = null;var count__8281_9621 = 0;var i__8282_9622 = 0;while(true){
if((i__8282_9622 < count__8281_9621))
{var arg__7055__auto___9623 = cljs.core._nth.call(null,chunk__8280_9620,i__8282_9622);a__7054__auto__.push(arg__7055__auto___9623);
{
var G__9624 = seq__8279_9619;
var G__9625 = chunk__8280_9620;
var G__9626 = count__8281_9621;
var G__9627 = (i__8282_9622 + 1);
seq__8279_9619 = G__9624;
chunk__8280_9620 = G__9625;
count__8281_9621 = G__9626;
i__8282_9622 = G__9627;
continue;
}
} else
{var temp__4092__auto___9628 = cljs.core.seq.call(null,seq__8279_9619);if(temp__4092__auto___9628)
{var seq__8279_9629__$1 = temp__4092__auto___9628;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8279_9629__$1))
{var c__5632__auto___9630 = cljs.core.chunk_first.call(null,seq__8279_9629__$1);{
var G__9631 = cljs.core.chunk_rest.call(null,seq__8279_9629__$1);
var G__9632 = c__5632__auto___9630;
var G__9633 = cljs.core.count.call(null,c__5632__auto___9630);
var G__9634 = 0;
seq__8279_9619 = G__9631;
chunk__8280_9620 = G__9632;
count__8281_9621 = G__9633;
i__8282_9622 = G__9634;
continue;
}
} else
{var arg__7055__auto___9635 = cljs.core.first.call(null,seq__8279_9629__$1);a__7054__auto__.push(arg__7055__auto___9635);
{
var G__9636 = cljs.core.next.call(null,seq__8279_9629__$1);
var G__9637 = null;
var G__9638 = 0;
var G__9639 = 0;
seq__8279_9619 = G__9636;
chunk__8280_9620 = G__9637;
count__8281_9621 = G__9638;
i__8282_9622 = G__9639;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.div.apply(null,a__7054__auto__);
};
var div = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return div__delegate.call(this,args__7053__auto__);};
div.cljs$lang$maxFixedArity = 0;
div.cljs$lang$applyTo = (function (arglist__9640){
var args__7053__auto__ = cljs.core.seq(arglist__9640);
return div__delegate(args__7053__auto__);
});
div.cljs$core$IFn$_invoke$arity$variadic = div__delegate;
return div;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.dl = (function() { 
var dl__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8287_9641 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8288_9642 = null;var count__8289_9643 = 0;var i__8290_9644 = 0;while(true){
if((i__8290_9644 < count__8289_9643))
{var arg__7055__auto___9645 = cljs.core._nth.call(null,chunk__8288_9642,i__8290_9644);a__7054__auto__.push(arg__7055__auto___9645);
{
var G__9646 = seq__8287_9641;
var G__9647 = chunk__8288_9642;
var G__9648 = count__8289_9643;
var G__9649 = (i__8290_9644 + 1);
seq__8287_9641 = G__9646;
chunk__8288_9642 = G__9647;
count__8289_9643 = G__9648;
i__8290_9644 = G__9649;
continue;
}
} else
{var temp__4092__auto___9650 = cljs.core.seq.call(null,seq__8287_9641);if(temp__4092__auto___9650)
{var seq__8287_9651__$1 = temp__4092__auto___9650;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8287_9651__$1))
{var c__5632__auto___9652 = cljs.core.chunk_first.call(null,seq__8287_9651__$1);{
var G__9653 = cljs.core.chunk_rest.call(null,seq__8287_9651__$1);
var G__9654 = c__5632__auto___9652;
var G__9655 = cljs.core.count.call(null,c__5632__auto___9652);
var G__9656 = 0;
seq__8287_9641 = G__9653;
chunk__8288_9642 = G__9654;
count__8289_9643 = G__9655;
i__8290_9644 = G__9656;
continue;
}
} else
{var arg__7055__auto___9657 = cljs.core.first.call(null,seq__8287_9651__$1);a__7054__auto__.push(arg__7055__auto___9657);
{
var G__9658 = cljs.core.next.call(null,seq__8287_9651__$1);
var G__9659 = null;
var G__9660 = 0;
var G__9661 = 0;
seq__8287_9641 = G__9658;
chunk__8288_9642 = G__9659;
count__8289_9643 = G__9660;
i__8290_9644 = G__9661;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.dl.apply(null,a__7054__auto__);
};
var dl = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return dl__delegate.call(this,args__7053__auto__);};
dl.cljs$lang$maxFixedArity = 0;
dl.cljs$lang$applyTo = (function (arglist__9662){
var args__7053__auto__ = cljs.core.seq(arglist__9662);
return dl__delegate(args__7053__auto__);
});
dl.cljs$core$IFn$_invoke$arity$variadic = dl__delegate;
return dl;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.dt = (function() { 
var dt__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8295_9663 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8296_9664 = null;var count__8297_9665 = 0;var i__8298_9666 = 0;while(true){
if((i__8298_9666 < count__8297_9665))
{var arg__7055__auto___9667 = cljs.core._nth.call(null,chunk__8296_9664,i__8298_9666);a__7054__auto__.push(arg__7055__auto___9667);
{
var G__9668 = seq__8295_9663;
var G__9669 = chunk__8296_9664;
var G__9670 = count__8297_9665;
var G__9671 = (i__8298_9666 + 1);
seq__8295_9663 = G__9668;
chunk__8296_9664 = G__9669;
count__8297_9665 = G__9670;
i__8298_9666 = G__9671;
continue;
}
} else
{var temp__4092__auto___9672 = cljs.core.seq.call(null,seq__8295_9663);if(temp__4092__auto___9672)
{var seq__8295_9673__$1 = temp__4092__auto___9672;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8295_9673__$1))
{var c__5632__auto___9674 = cljs.core.chunk_first.call(null,seq__8295_9673__$1);{
var G__9675 = cljs.core.chunk_rest.call(null,seq__8295_9673__$1);
var G__9676 = c__5632__auto___9674;
var G__9677 = cljs.core.count.call(null,c__5632__auto___9674);
var G__9678 = 0;
seq__8295_9663 = G__9675;
chunk__8296_9664 = G__9676;
count__8297_9665 = G__9677;
i__8298_9666 = G__9678;
continue;
}
} else
{var arg__7055__auto___9679 = cljs.core.first.call(null,seq__8295_9673__$1);a__7054__auto__.push(arg__7055__auto___9679);
{
var G__9680 = cljs.core.next.call(null,seq__8295_9673__$1);
var G__9681 = null;
var G__9682 = 0;
var G__9683 = 0;
seq__8295_9663 = G__9680;
chunk__8296_9664 = G__9681;
count__8297_9665 = G__9682;
i__8298_9666 = G__9683;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.dt.apply(null,a__7054__auto__);
};
var dt = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return dt__delegate.call(this,args__7053__auto__);};
dt.cljs$lang$maxFixedArity = 0;
dt.cljs$lang$applyTo = (function (arglist__9684){
var args__7053__auto__ = cljs.core.seq(arglist__9684);
return dt__delegate(args__7053__auto__);
});
dt.cljs$core$IFn$_invoke$arity$variadic = dt__delegate;
return dt;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.em = (function() { 
var em__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8303_9685 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8304_9686 = null;var count__8305_9687 = 0;var i__8306_9688 = 0;while(true){
if((i__8306_9688 < count__8305_9687))
{var arg__7055__auto___9689 = cljs.core._nth.call(null,chunk__8304_9686,i__8306_9688);a__7054__auto__.push(arg__7055__auto___9689);
{
var G__9690 = seq__8303_9685;
var G__9691 = chunk__8304_9686;
var G__9692 = count__8305_9687;
var G__9693 = (i__8306_9688 + 1);
seq__8303_9685 = G__9690;
chunk__8304_9686 = G__9691;
count__8305_9687 = G__9692;
i__8306_9688 = G__9693;
continue;
}
} else
{var temp__4092__auto___9694 = cljs.core.seq.call(null,seq__8303_9685);if(temp__4092__auto___9694)
{var seq__8303_9695__$1 = temp__4092__auto___9694;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8303_9695__$1))
{var c__5632__auto___9696 = cljs.core.chunk_first.call(null,seq__8303_9695__$1);{
var G__9697 = cljs.core.chunk_rest.call(null,seq__8303_9695__$1);
var G__9698 = c__5632__auto___9696;
var G__9699 = cljs.core.count.call(null,c__5632__auto___9696);
var G__9700 = 0;
seq__8303_9685 = G__9697;
chunk__8304_9686 = G__9698;
count__8305_9687 = G__9699;
i__8306_9688 = G__9700;
continue;
}
} else
{var arg__7055__auto___9701 = cljs.core.first.call(null,seq__8303_9695__$1);a__7054__auto__.push(arg__7055__auto___9701);
{
var G__9702 = cljs.core.next.call(null,seq__8303_9695__$1);
var G__9703 = null;
var G__9704 = 0;
var G__9705 = 0;
seq__8303_9685 = G__9702;
chunk__8304_9686 = G__9703;
count__8305_9687 = G__9704;
i__8306_9688 = G__9705;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.em.apply(null,a__7054__auto__);
};
var em = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return em__delegate.call(this,args__7053__auto__);};
em.cljs$lang$maxFixedArity = 0;
em.cljs$lang$applyTo = (function (arglist__9706){
var args__7053__auto__ = cljs.core.seq(arglist__9706);
return em__delegate(args__7053__auto__);
});
em.cljs$core$IFn$_invoke$arity$variadic = em__delegate;
return em;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.embed = (function() { 
var embed__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8319_9707 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8320_9708 = null;var count__8321_9709 = 0;var i__8322_9710 = 0;while(true){
if((i__8322_9710 < count__8321_9709))
{var arg__7055__auto___9711 = cljs.core._nth.call(null,chunk__8320_9708,i__8322_9710);a__7054__auto__.push(arg__7055__auto___9711);
{
var G__9712 = seq__8319_9707;
var G__9713 = chunk__8320_9708;
var G__9714 = count__8321_9709;
var G__9715 = (i__8322_9710 + 1);
seq__8319_9707 = G__9712;
chunk__8320_9708 = G__9713;
count__8321_9709 = G__9714;
i__8322_9710 = G__9715;
continue;
}
} else
{var temp__4092__auto___9716 = cljs.core.seq.call(null,seq__8319_9707);if(temp__4092__auto___9716)
{var seq__8319_9717__$1 = temp__4092__auto___9716;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8319_9717__$1))
{var c__5632__auto___9718 = cljs.core.chunk_first.call(null,seq__8319_9717__$1);{
var G__9719 = cljs.core.chunk_rest.call(null,seq__8319_9717__$1);
var G__9720 = c__5632__auto___9718;
var G__9721 = cljs.core.count.call(null,c__5632__auto___9718);
var G__9722 = 0;
seq__8319_9707 = G__9719;
chunk__8320_9708 = G__9720;
count__8321_9709 = G__9721;
i__8322_9710 = G__9722;
continue;
}
} else
{var arg__7055__auto___9723 = cljs.core.first.call(null,seq__8319_9717__$1);a__7054__auto__.push(arg__7055__auto___9723);
{
var G__9724 = cljs.core.next.call(null,seq__8319_9717__$1);
var G__9725 = null;
var G__9726 = 0;
var G__9727 = 0;
seq__8319_9707 = G__9724;
chunk__8320_9708 = G__9725;
count__8321_9709 = G__9726;
i__8322_9710 = G__9727;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.embed.apply(null,a__7054__auto__);
};
var embed = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return embed__delegate.call(this,args__7053__auto__);};
embed.cljs$lang$maxFixedArity = 0;
embed.cljs$lang$applyTo = (function (arglist__9728){
var args__7053__auto__ = cljs.core.seq(arglist__9728);
return embed__delegate(args__7053__auto__);
});
embed.cljs$core$IFn$_invoke$arity$variadic = embed__delegate;
return embed;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.fieldset = (function() { 
var fieldset__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8327_9729 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8328_9730 = null;var count__8329_9731 = 0;var i__8330_9732 = 0;while(true){
if((i__8330_9732 < count__8329_9731))
{var arg__7055__auto___9733 = cljs.core._nth.call(null,chunk__8328_9730,i__8330_9732);a__7054__auto__.push(arg__7055__auto___9733);
{
var G__9734 = seq__8327_9729;
var G__9735 = chunk__8328_9730;
var G__9736 = count__8329_9731;
var G__9737 = (i__8330_9732 + 1);
seq__8327_9729 = G__9734;
chunk__8328_9730 = G__9735;
count__8329_9731 = G__9736;
i__8330_9732 = G__9737;
continue;
}
} else
{var temp__4092__auto___9738 = cljs.core.seq.call(null,seq__8327_9729);if(temp__4092__auto___9738)
{var seq__8327_9739__$1 = temp__4092__auto___9738;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8327_9739__$1))
{var c__5632__auto___9740 = cljs.core.chunk_first.call(null,seq__8327_9739__$1);{
var G__9741 = cljs.core.chunk_rest.call(null,seq__8327_9739__$1);
var G__9742 = c__5632__auto___9740;
var G__9743 = cljs.core.count.call(null,c__5632__auto___9740);
var G__9744 = 0;
seq__8327_9729 = G__9741;
chunk__8328_9730 = G__9742;
count__8329_9731 = G__9743;
i__8330_9732 = G__9744;
continue;
}
} else
{var arg__7055__auto___9745 = cljs.core.first.call(null,seq__8327_9739__$1);a__7054__auto__.push(arg__7055__auto___9745);
{
var G__9746 = cljs.core.next.call(null,seq__8327_9739__$1);
var G__9747 = null;
var G__9748 = 0;
var G__9749 = 0;
seq__8327_9729 = G__9746;
chunk__8328_9730 = G__9747;
count__8329_9731 = G__9748;
i__8330_9732 = G__9749;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.fieldset.apply(null,a__7054__auto__);
};
var fieldset = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return fieldset__delegate.call(this,args__7053__auto__);};
fieldset.cljs$lang$maxFixedArity = 0;
fieldset.cljs$lang$applyTo = (function (arglist__9750){
var args__7053__auto__ = cljs.core.seq(arglist__9750);
return fieldset__delegate(args__7053__auto__);
});
fieldset.cljs$core$IFn$_invoke$arity$variadic = fieldset__delegate;
return fieldset;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.figcaption = (function() { 
var figcaption__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8335_9751 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8336_9752 = null;var count__8337_9753 = 0;var i__8338_9754 = 0;while(true){
if((i__8338_9754 < count__8337_9753))
{var arg__7055__auto___9755 = cljs.core._nth.call(null,chunk__8336_9752,i__8338_9754);a__7054__auto__.push(arg__7055__auto___9755);
{
var G__9756 = seq__8335_9751;
var G__9757 = chunk__8336_9752;
var G__9758 = count__8337_9753;
var G__9759 = (i__8338_9754 + 1);
seq__8335_9751 = G__9756;
chunk__8336_9752 = G__9757;
count__8337_9753 = G__9758;
i__8338_9754 = G__9759;
continue;
}
} else
{var temp__4092__auto___9760 = cljs.core.seq.call(null,seq__8335_9751);if(temp__4092__auto___9760)
{var seq__8335_9761__$1 = temp__4092__auto___9760;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8335_9761__$1))
{var c__5632__auto___9762 = cljs.core.chunk_first.call(null,seq__8335_9761__$1);{
var G__9763 = cljs.core.chunk_rest.call(null,seq__8335_9761__$1);
var G__9764 = c__5632__auto___9762;
var G__9765 = cljs.core.count.call(null,c__5632__auto___9762);
var G__9766 = 0;
seq__8335_9751 = G__9763;
chunk__8336_9752 = G__9764;
count__8337_9753 = G__9765;
i__8338_9754 = G__9766;
continue;
}
} else
{var arg__7055__auto___9767 = cljs.core.first.call(null,seq__8335_9761__$1);a__7054__auto__.push(arg__7055__auto___9767);
{
var G__9768 = cljs.core.next.call(null,seq__8335_9761__$1);
var G__9769 = null;
var G__9770 = 0;
var G__9771 = 0;
seq__8335_9751 = G__9768;
chunk__8336_9752 = G__9769;
count__8337_9753 = G__9770;
i__8338_9754 = G__9771;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.figcaption.apply(null,a__7054__auto__);
};
var figcaption = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return figcaption__delegate.call(this,args__7053__auto__);};
figcaption.cljs$lang$maxFixedArity = 0;
figcaption.cljs$lang$applyTo = (function (arglist__9772){
var args__7053__auto__ = cljs.core.seq(arglist__9772);
return figcaption__delegate(args__7053__auto__);
});
figcaption.cljs$core$IFn$_invoke$arity$variadic = figcaption__delegate;
return figcaption;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.figure = (function() { 
var figure__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8343_9773 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8344_9774 = null;var count__8345_9775 = 0;var i__8346_9776 = 0;while(true){
if((i__8346_9776 < count__8345_9775))
{var arg__7055__auto___9777 = cljs.core._nth.call(null,chunk__8344_9774,i__8346_9776);a__7054__auto__.push(arg__7055__auto___9777);
{
var G__9778 = seq__8343_9773;
var G__9779 = chunk__8344_9774;
var G__9780 = count__8345_9775;
var G__9781 = (i__8346_9776 + 1);
seq__8343_9773 = G__9778;
chunk__8344_9774 = G__9779;
count__8345_9775 = G__9780;
i__8346_9776 = G__9781;
continue;
}
} else
{var temp__4092__auto___9782 = cljs.core.seq.call(null,seq__8343_9773);if(temp__4092__auto___9782)
{var seq__8343_9783__$1 = temp__4092__auto___9782;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8343_9783__$1))
{var c__5632__auto___9784 = cljs.core.chunk_first.call(null,seq__8343_9783__$1);{
var G__9785 = cljs.core.chunk_rest.call(null,seq__8343_9783__$1);
var G__9786 = c__5632__auto___9784;
var G__9787 = cljs.core.count.call(null,c__5632__auto___9784);
var G__9788 = 0;
seq__8343_9773 = G__9785;
chunk__8344_9774 = G__9786;
count__8345_9775 = G__9787;
i__8346_9776 = G__9788;
continue;
}
} else
{var arg__7055__auto___9789 = cljs.core.first.call(null,seq__8343_9783__$1);a__7054__auto__.push(arg__7055__auto___9789);
{
var G__9790 = cljs.core.next.call(null,seq__8343_9783__$1);
var G__9791 = null;
var G__9792 = 0;
var G__9793 = 0;
seq__8343_9773 = G__9790;
chunk__8344_9774 = G__9791;
count__8345_9775 = G__9792;
i__8346_9776 = G__9793;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.figure.apply(null,a__7054__auto__);
};
var figure = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return figure__delegate.call(this,args__7053__auto__);};
figure.cljs$lang$maxFixedArity = 0;
figure.cljs$lang$applyTo = (function (arglist__9794){
var args__7053__auto__ = cljs.core.seq(arglist__9794);
return figure__delegate(args__7053__auto__);
});
figure.cljs$core$IFn$_invoke$arity$variadic = figure__delegate;
return figure;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.footer = (function() { 
var footer__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8351_9795 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8352_9796 = null;var count__8353_9797 = 0;var i__8354_9798 = 0;while(true){
if((i__8354_9798 < count__8353_9797))
{var arg__7055__auto___9799 = cljs.core._nth.call(null,chunk__8352_9796,i__8354_9798);a__7054__auto__.push(arg__7055__auto___9799);
{
var G__9800 = seq__8351_9795;
var G__9801 = chunk__8352_9796;
var G__9802 = count__8353_9797;
var G__9803 = (i__8354_9798 + 1);
seq__8351_9795 = G__9800;
chunk__8352_9796 = G__9801;
count__8353_9797 = G__9802;
i__8354_9798 = G__9803;
continue;
}
} else
{var temp__4092__auto___9804 = cljs.core.seq.call(null,seq__8351_9795);if(temp__4092__auto___9804)
{var seq__8351_9805__$1 = temp__4092__auto___9804;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8351_9805__$1))
{var c__5632__auto___9806 = cljs.core.chunk_first.call(null,seq__8351_9805__$1);{
var G__9807 = cljs.core.chunk_rest.call(null,seq__8351_9805__$1);
var G__9808 = c__5632__auto___9806;
var G__9809 = cljs.core.count.call(null,c__5632__auto___9806);
var G__9810 = 0;
seq__8351_9795 = G__9807;
chunk__8352_9796 = G__9808;
count__8353_9797 = G__9809;
i__8354_9798 = G__9810;
continue;
}
} else
{var arg__7055__auto___9811 = cljs.core.first.call(null,seq__8351_9805__$1);a__7054__auto__.push(arg__7055__auto___9811);
{
var G__9812 = cljs.core.next.call(null,seq__8351_9805__$1);
var G__9813 = null;
var G__9814 = 0;
var G__9815 = 0;
seq__8351_9795 = G__9812;
chunk__8352_9796 = G__9813;
count__8353_9797 = G__9814;
i__8354_9798 = G__9815;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.footer.apply(null,a__7054__auto__);
};
var footer = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return footer__delegate.call(this,args__7053__auto__);};
footer.cljs$lang$maxFixedArity = 0;
footer.cljs$lang$applyTo = (function (arglist__9816){
var args__7053__auto__ = cljs.core.seq(arglist__9816);
return footer__delegate(args__7053__auto__);
});
footer.cljs$core$IFn$_invoke$arity$variadic = footer__delegate;
return footer;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.form = (function() { 
var form__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8359_9817 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8360_9818 = null;var count__8361_9819 = 0;var i__8362_9820 = 0;while(true){
if((i__8362_9820 < count__8361_9819))
{var arg__7055__auto___9821 = cljs.core._nth.call(null,chunk__8360_9818,i__8362_9820);a__7054__auto__.push(arg__7055__auto___9821);
{
var G__9822 = seq__8359_9817;
var G__9823 = chunk__8360_9818;
var G__9824 = count__8361_9819;
var G__9825 = (i__8362_9820 + 1);
seq__8359_9817 = G__9822;
chunk__8360_9818 = G__9823;
count__8361_9819 = G__9824;
i__8362_9820 = G__9825;
continue;
}
} else
{var temp__4092__auto___9826 = cljs.core.seq.call(null,seq__8359_9817);if(temp__4092__auto___9826)
{var seq__8359_9827__$1 = temp__4092__auto___9826;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8359_9827__$1))
{var c__5632__auto___9828 = cljs.core.chunk_first.call(null,seq__8359_9827__$1);{
var G__9829 = cljs.core.chunk_rest.call(null,seq__8359_9827__$1);
var G__9830 = c__5632__auto___9828;
var G__9831 = cljs.core.count.call(null,c__5632__auto___9828);
var G__9832 = 0;
seq__8359_9817 = G__9829;
chunk__8360_9818 = G__9830;
count__8361_9819 = G__9831;
i__8362_9820 = G__9832;
continue;
}
} else
{var arg__7055__auto___9833 = cljs.core.first.call(null,seq__8359_9827__$1);a__7054__auto__.push(arg__7055__auto___9833);
{
var G__9834 = cljs.core.next.call(null,seq__8359_9827__$1);
var G__9835 = null;
var G__9836 = 0;
var G__9837 = 0;
seq__8359_9817 = G__9834;
chunk__8360_9818 = G__9835;
count__8361_9819 = G__9836;
i__8362_9820 = G__9837;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.form.apply(null,a__7054__auto__);
};
var form = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return form__delegate.call(this,args__7053__auto__);};
form.cljs$lang$maxFixedArity = 0;
form.cljs$lang$applyTo = (function (arglist__9838){
var args__7053__auto__ = cljs.core.seq(arglist__9838);
return form__delegate(args__7053__auto__);
});
form.cljs$core$IFn$_invoke$arity$variadic = form__delegate;
return form;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h1 = (function() { 
var h1__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8367_9839 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8368_9840 = null;var count__8369_9841 = 0;var i__8370_9842 = 0;while(true){
if((i__8370_9842 < count__8369_9841))
{var arg__7055__auto___9843 = cljs.core._nth.call(null,chunk__8368_9840,i__8370_9842);a__7054__auto__.push(arg__7055__auto___9843);
{
var G__9844 = seq__8367_9839;
var G__9845 = chunk__8368_9840;
var G__9846 = count__8369_9841;
var G__9847 = (i__8370_9842 + 1);
seq__8367_9839 = G__9844;
chunk__8368_9840 = G__9845;
count__8369_9841 = G__9846;
i__8370_9842 = G__9847;
continue;
}
} else
{var temp__4092__auto___9848 = cljs.core.seq.call(null,seq__8367_9839);if(temp__4092__auto___9848)
{var seq__8367_9849__$1 = temp__4092__auto___9848;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8367_9849__$1))
{var c__5632__auto___9850 = cljs.core.chunk_first.call(null,seq__8367_9849__$1);{
var G__9851 = cljs.core.chunk_rest.call(null,seq__8367_9849__$1);
var G__9852 = c__5632__auto___9850;
var G__9853 = cljs.core.count.call(null,c__5632__auto___9850);
var G__9854 = 0;
seq__8367_9839 = G__9851;
chunk__8368_9840 = G__9852;
count__8369_9841 = G__9853;
i__8370_9842 = G__9854;
continue;
}
} else
{var arg__7055__auto___9855 = cljs.core.first.call(null,seq__8367_9849__$1);a__7054__auto__.push(arg__7055__auto___9855);
{
var G__9856 = cljs.core.next.call(null,seq__8367_9849__$1);
var G__9857 = null;
var G__9858 = 0;
var G__9859 = 0;
seq__8367_9839 = G__9856;
chunk__8368_9840 = G__9857;
count__8369_9841 = G__9858;
i__8370_9842 = G__9859;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h1.apply(null,a__7054__auto__);
};
var h1 = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h1__delegate.call(this,args__7053__auto__);};
h1.cljs$lang$maxFixedArity = 0;
h1.cljs$lang$applyTo = (function (arglist__9860){
var args__7053__auto__ = cljs.core.seq(arglist__9860);
return h1__delegate(args__7053__auto__);
});
h1.cljs$core$IFn$_invoke$arity$variadic = h1__delegate;
return h1;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h2 = (function() { 
var h2__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8375_9861 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8376_9862 = null;var count__8377_9863 = 0;var i__8378_9864 = 0;while(true){
if((i__8378_9864 < count__8377_9863))
{var arg__7055__auto___9865 = cljs.core._nth.call(null,chunk__8376_9862,i__8378_9864);a__7054__auto__.push(arg__7055__auto___9865);
{
var G__9866 = seq__8375_9861;
var G__9867 = chunk__8376_9862;
var G__9868 = count__8377_9863;
var G__9869 = (i__8378_9864 + 1);
seq__8375_9861 = G__9866;
chunk__8376_9862 = G__9867;
count__8377_9863 = G__9868;
i__8378_9864 = G__9869;
continue;
}
} else
{var temp__4092__auto___9870 = cljs.core.seq.call(null,seq__8375_9861);if(temp__4092__auto___9870)
{var seq__8375_9871__$1 = temp__4092__auto___9870;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8375_9871__$1))
{var c__5632__auto___9872 = cljs.core.chunk_first.call(null,seq__8375_9871__$1);{
var G__9873 = cljs.core.chunk_rest.call(null,seq__8375_9871__$1);
var G__9874 = c__5632__auto___9872;
var G__9875 = cljs.core.count.call(null,c__5632__auto___9872);
var G__9876 = 0;
seq__8375_9861 = G__9873;
chunk__8376_9862 = G__9874;
count__8377_9863 = G__9875;
i__8378_9864 = G__9876;
continue;
}
} else
{var arg__7055__auto___9877 = cljs.core.first.call(null,seq__8375_9871__$1);a__7054__auto__.push(arg__7055__auto___9877);
{
var G__9878 = cljs.core.next.call(null,seq__8375_9871__$1);
var G__9879 = null;
var G__9880 = 0;
var G__9881 = 0;
seq__8375_9861 = G__9878;
chunk__8376_9862 = G__9879;
count__8377_9863 = G__9880;
i__8378_9864 = G__9881;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h2.apply(null,a__7054__auto__);
};
var h2 = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h2__delegate.call(this,args__7053__auto__);};
h2.cljs$lang$maxFixedArity = 0;
h2.cljs$lang$applyTo = (function (arglist__9882){
var args__7053__auto__ = cljs.core.seq(arglist__9882);
return h2__delegate(args__7053__auto__);
});
h2.cljs$core$IFn$_invoke$arity$variadic = h2__delegate;
return h2;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h3 = (function() { 
var h3__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8383_9883 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8384_9884 = null;var count__8385_9885 = 0;var i__8386_9886 = 0;while(true){
if((i__8386_9886 < count__8385_9885))
{var arg__7055__auto___9887 = cljs.core._nth.call(null,chunk__8384_9884,i__8386_9886);a__7054__auto__.push(arg__7055__auto___9887);
{
var G__9888 = seq__8383_9883;
var G__9889 = chunk__8384_9884;
var G__9890 = count__8385_9885;
var G__9891 = (i__8386_9886 + 1);
seq__8383_9883 = G__9888;
chunk__8384_9884 = G__9889;
count__8385_9885 = G__9890;
i__8386_9886 = G__9891;
continue;
}
} else
{var temp__4092__auto___9892 = cljs.core.seq.call(null,seq__8383_9883);if(temp__4092__auto___9892)
{var seq__8383_9893__$1 = temp__4092__auto___9892;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8383_9893__$1))
{var c__5632__auto___9894 = cljs.core.chunk_first.call(null,seq__8383_9893__$1);{
var G__9895 = cljs.core.chunk_rest.call(null,seq__8383_9893__$1);
var G__9896 = c__5632__auto___9894;
var G__9897 = cljs.core.count.call(null,c__5632__auto___9894);
var G__9898 = 0;
seq__8383_9883 = G__9895;
chunk__8384_9884 = G__9896;
count__8385_9885 = G__9897;
i__8386_9886 = G__9898;
continue;
}
} else
{var arg__7055__auto___9899 = cljs.core.first.call(null,seq__8383_9893__$1);a__7054__auto__.push(arg__7055__auto___9899);
{
var G__9900 = cljs.core.next.call(null,seq__8383_9893__$1);
var G__9901 = null;
var G__9902 = 0;
var G__9903 = 0;
seq__8383_9883 = G__9900;
chunk__8384_9884 = G__9901;
count__8385_9885 = G__9902;
i__8386_9886 = G__9903;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h3.apply(null,a__7054__auto__);
};
var h3 = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h3__delegate.call(this,args__7053__auto__);};
h3.cljs$lang$maxFixedArity = 0;
h3.cljs$lang$applyTo = (function (arglist__9904){
var args__7053__auto__ = cljs.core.seq(arglist__9904);
return h3__delegate(args__7053__auto__);
});
h3.cljs$core$IFn$_invoke$arity$variadic = h3__delegate;
return h3;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h4 = (function() { 
var h4__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8391_9905 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8392_9906 = null;var count__8393_9907 = 0;var i__8394_9908 = 0;while(true){
if((i__8394_9908 < count__8393_9907))
{var arg__7055__auto___9909 = cljs.core._nth.call(null,chunk__8392_9906,i__8394_9908);a__7054__auto__.push(arg__7055__auto___9909);
{
var G__9910 = seq__8391_9905;
var G__9911 = chunk__8392_9906;
var G__9912 = count__8393_9907;
var G__9913 = (i__8394_9908 + 1);
seq__8391_9905 = G__9910;
chunk__8392_9906 = G__9911;
count__8393_9907 = G__9912;
i__8394_9908 = G__9913;
continue;
}
} else
{var temp__4092__auto___9914 = cljs.core.seq.call(null,seq__8391_9905);if(temp__4092__auto___9914)
{var seq__8391_9915__$1 = temp__4092__auto___9914;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8391_9915__$1))
{var c__5632__auto___9916 = cljs.core.chunk_first.call(null,seq__8391_9915__$1);{
var G__9917 = cljs.core.chunk_rest.call(null,seq__8391_9915__$1);
var G__9918 = c__5632__auto___9916;
var G__9919 = cljs.core.count.call(null,c__5632__auto___9916);
var G__9920 = 0;
seq__8391_9905 = G__9917;
chunk__8392_9906 = G__9918;
count__8393_9907 = G__9919;
i__8394_9908 = G__9920;
continue;
}
} else
{var arg__7055__auto___9921 = cljs.core.first.call(null,seq__8391_9915__$1);a__7054__auto__.push(arg__7055__auto___9921);
{
var G__9922 = cljs.core.next.call(null,seq__8391_9915__$1);
var G__9923 = null;
var G__9924 = 0;
var G__9925 = 0;
seq__8391_9905 = G__9922;
chunk__8392_9906 = G__9923;
count__8393_9907 = G__9924;
i__8394_9908 = G__9925;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h4.apply(null,a__7054__auto__);
};
var h4 = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h4__delegate.call(this,args__7053__auto__);};
h4.cljs$lang$maxFixedArity = 0;
h4.cljs$lang$applyTo = (function (arglist__9926){
var args__7053__auto__ = cljs.core.seq(arglist__9926);
return h4__delegate(args__7053__auto__);
});
h4.cljs$core$IFn$_invoke$arity$variadic = h4__delegate;
return h4;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h5 = (function() { 
var h5__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8399_9927 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8400_9928 = null;var count__8401_9929 = 0;var i__8402_9930 = 0;while(true){
if((i__8402_9930 < count__8401_9929))
{var arg__7055__auto___9931 = cljs.core._nth.call(null,chunk__8400_9928,i__8402_9930);a__7054__auto__.push(arg__7055__auto___9931);
{
var G__9932 = seq__8399_9927;
var G__9933 = chunk__8400_9928;
var G__9934 = count__8401_9929;
var G__9935 = (i__8402_9930 + 1);
seq__8399_9927 = G__9932;
chunk__8400_9928 = G__9933;
count__8401_9929 = G__9934;
i__8402_9930 = G__9935;
continue;
}
} else
{var temp__4092__auto___9936 = cljs.core.seq.call(null,seq__8399_9927);if(temp__4092__auto___9936)
{var seq__8399_9937__$1 = temp__4092__auto___9936;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8399_9937__$1))
{var c__5632__auto___9938 = cljs.core.chunk_first.call(null,seq__8399_9937__$1);{
var G__9939 = cljs.core.chunk_rest.call(null,seq__8399_9937__$1);
var G__9940 = c__5632__auto___9938;
var G__9941 = cljs.core.count.call(null,c__5632__auto___9938);
var G__9942 = 0;
seq__8399_9927 = G__9939;
chunk__8400_9928 = G__9940;
count__8401_9929 = G__9941;
i__8402_9930 = G__9942;
continue;
}
} else
{var arg__7055__auto___9943 = cljs.core.first.call(null,seq__8399_9937__$1);a__7054__auto__.push(arg__7055__auto___9943);
{
var G__9944 = cljs.core.next.call(null,seq__8399_9937__$1);
var G__9945 = null;
var G__9946 = 0;
var G__9947 = 0;
seq__8399_9927 = G__9944;
chunk__8400_9928 = G__9945;
count__8401_9929 = G__9946;
i__8402_9930 = G__9947;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h5.apply(null,a__7054__auto__);
};
var h5 = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h5__delegate.call(this,args__7053__auto__);};
h5.cljs$lang$maxFixedArity = 0;
h5.cljs$lang$applyTo = (function (arglist__9948){
var args__7053__auto__ = cljs.core.seq(arglist__9948);
return h5__delegate(args__7053__auto__);
});
h5.cljs$core$IFn$_invoke$arity$variadic = h5__delegate;
return h5;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h6 = (function() { 
var h6__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8407_9949 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8408_9950 = null;var count__8409_9951 = 0;var i__8410_9952 = 0;while(true){
if((i__8410_9952 < count__8409_9951))
{var arg__7055__auto___9953 = cljs.core._nth.call(null,chunk__8408_9950,i__8410_9952);a__7054__auto__.push(arg__7055__auto___9953);
{
var G__9954 = seq__8407_9949;
var G__9955 = chunk__8408_9950;
var G__9956 = count__8409_9951;
var G__9957 = (i__8410_9952 + 1);
seq__8407_9949 = G__9954;
chunk__8408_9950 = G__9955;
count__8409_9951 = G__9956;
i__8410_9952 = G__9957;
continue;
}
} else
{var temp__4092__auto___9958 = cljs.core.seq.call(null,seq__8407_9949);if(temp__4092__auto___9958)
{var seq__8407_9959__$1 = temp__4092__auto___9958;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8407_9959__$1))
{var c__5632__auto___9960 = cljs.core.chunk_first.call(null,seq__8407_9959__$1);{
var G__9961 = cljs.core.chunk_rest.call(null,seq__8407_9959__$1);
var G__9962 = c__5632__auto___9960;
var G__9963 = cljs.core.count.call(null,c__5632__auto___9960);
var G__9964 = 0;
seq__8407_9949 = G__9961;
chunk__8408_9950 = G__9962;
count__8409_9951 = G__9963;
i__8410_9952 = G__9964;
continue;
}
} else
{var arg__7055__auto___9965 = cljs.core.first.call(null,seq__8407_9959__$1);a__7054__auto__.push(arg__7055__auto___9965);
{
var G__9966 = cljs.core.next.call(null,seq__8407_9959__$1);
var G__9967 = null;
var G__9968 = 0;
var G__9969 = 0;
seq__8407_9949 = G__9966;
chunk__8408_9950 = G__9967;
count__8409_9951 = G__9968;
i__8410_9952 = G__9969;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h6.apply(null,a__7054__auto__);
};
var h6 = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h6__delegate.call(this,args__7053__auto__);};
h6.cljs$lang$maxFixedArity = 0;
h6.cljs$lang$applyTo = (function (arglist__9970){
var args__7053__auto__ = cljs.core.seq(arglist__9970);
return h6__delegate(args__7053__auto__);
});
h6.cljs$core$IFn$_invoke$arity$variadic = h6__delegate;
return h6;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.head = (function() { 
var head__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8415_9971 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8416_9972 = null;var count__8417_9973 = 0;var i__8418_9974 = 0;while(true){
if((i__8418_9974 < count__8417_9973))
{var arg__7055__auto___9975 = cljs.core._nth.call(null,chunk__8416_9972,i__8418_9974);a__7054__auto__.push(arg__7055__auto___9975);
{
var G__9976 = seq__8415_9971;
var G__9977 = chunk__8416_9972;
var G__9978 = count__8417_9973;
var G__9979 = (i__8418_9974 + 1);
seq__8415_9971 = G__9976;
chunk__8416_9972 = G__9977;
count__8417_9973 = G__9978;
i__8418_9974 = G__9979;
continue;
}
} else
{var temp__4092__auto___9980 = cljs.core.seq.call(null,seq__8415_9971);if(temp__4092__auto___9980)
{var seq__8415_9981__$1 = temp__4092__auto___9980;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8415_9981__$1))
{var c__5632__auto___9982 = cljs.core.chunk_first.call(null,seq__8415_9981__$1);{
var G__9983 = cljs.core.chunk_rest.call(null,seq__8415_9981__$1);
var G__9984 = c__5632__auto___9982;
var G__9985 = cljs.core.count.call(null,c__5632__auto___9982);
var G__9986 = 0;
seq__8415_9971 = G__9983;
chunk__8416_9972 = G__9984;
count__8417_9973 = G__9985;
i__8418_9974 = G__9986;
continue;
}
} else
{var arg__7055__auto___9987 = cljs.core.first.call(null,seq__8415_9981__$1);a__7054__auto__.push(arg__7055__auto___9987);
{
var G__9988 = cljs.core.next.call(null,seq__8415_9981__$1);
var G__9989 = null;
var G__9990 = 0;
var G__9991 = 0;
seq__8415_9971 = G__9988;
chunk__8416_9972 = G__9989;
count__8417_9973 = G__9990;
i__8418_9974 = G__9991;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.head.apply(null,a__7054__auto__);
};
var head = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return head__delegate.call(this,args__7053__auto__);};
head.cljs$lang$maxFixedArity = 0;
head.cljs$lang$applyTo = (function (arglist__9992){
var args__7053__auto__ = cljs.core.seq(arglist__9992);
return head__delegate(args__7053__auto__);
});
head.cljs$core$IFn$_invoke$arity$variadic = head__delegate;
return head;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.header = (function() { 
var header__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8423_9993 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8424_9994 = null;var count__8425_9995 = 0;var i__8426_9996 = 0;while(true){
if((i__8426_9996 < count__8425_9995))
{var arg__7055__auto___9997 = cljs.core._nth.call(null,chunk__8424_9994,i__8426_9996);a__7054__auto__.push(arg__7055__auto___9997);
{
var G__9998 = seq__8423_9993;
var G__9999 = chunk__8424_9994;
var G__10000 = count__8425_9995;
var G__10001 = (i__8426_9996 + 1);
seq__8423_9993 = G__9998;
chunk__8424_9994 = G__9999;
count__8425_9995 = G__10000;
i__8426_9996 = G__10001;
continue;
}
} else
{var temp__4092__auto___10002 = cljs.core.seq.call(null,seq__8423_9993);if(temp__4092__auto___10002)
{var seq__8423_10003__$1 = temp__4092__auto___10002;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8423_10003__$1))
{var c__5632__auto___10004 = cljs.core.chunk_first.call(null,seq__8423_10003__$1);{
var G__10005 = cljs.core.chunk_rest.call(null,seq__8423_10003__$1);
var G__10006 = c__5632__auto___10004;
var G__10007 = cljs.core.count.call(null,c__5632__auto___10004);
var G__10008 = 0;
seq__8423_9993 = G__10005;
chunk__8424_9994 = G__10006;
count__8425_9995 = G__10007;
i__8426_9996 = G__10008;
continue;
}
} else
{var arg__7055__auto___10009 = cljs.core.first.call(null,seq__8423_10003__$1);a__7054__auto__.push(arg__7055__auto___10009);
{
var G__10010 = cljs.core.next.call(null,seq__8423_10003__$1);
var G__10011 = null;
var G__10012 = 0;
var G__10013 = 0;
seq__8423_9993 = G__10010;
chunk__8424_9994 = G__10011;
count__8425_9995 = G__10012;
i__8426_9996 = G__10013;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.header.apply(null,a__7054__auto__);
};
var header = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return header__delegate.call(this,args__7053__auto__);};
header.cljs$lang$maxFixedArity = 0;
header.cljs$lang$applyTo = (function (arglist__10014){
var args__7053__auto__ = cljs.core.seq(arglist__10014);
return header__delegate(args__7053__auto__);
});
header.cljs$core$IFn$_invoke$arity$variadic = header__delegate;
return header;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.hr = (function() { 
var hr__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8431_10015 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8432_10016 = null;var count__8433_10017 = 0;var i__8434_10018 = 0;while(true){
if((i__8434_10018 < count__8433_10017))
{var arg__7055__auto___10019 = cljs.core._nth.call(null,chunk__8432_10016,i__8434_10018);a__7054__auto__.push(arg__7055__auto___10019);
{
var G__10020 = seq__8431_10015;
var G__10021 = chunk__8432_10016;
var G__10022 = count__8433_10017;
var G__10023 = (i__8434_10018 + 1);
seq__8431_10015 = G__10020;
chunk__8432_10016 = G__10021;
count__8433_10017 = G__10022;
i__8434_10018 = G__10023;
continue;
}
} else
{var temp__4092__auto___10024 = cljs.core.seq.call(null,seq__8431_10015);if(temp__4092__auto___10024)
{var seq__8431_10025__$1 = temp__4092__auto___10024;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8431_10025__$1))
{var c__5632__auto___10026 = cljs.core.chunk_first.call(null,seq__8431_10025__$1);{
var G__10027 = cljs.core.chunk_rest.call(null,seq__8431_10025__$1);
var G__10028 = c__5632__auto___10026;
var G__10029 = cljs.core.count.call(null,c__5632__auto___10026);
var G__10030 = 0;
seq__8431_10015 = G__10027;
chunk__8432_10016 = G__10028;
count__8433_10017 = G__10029;
i__8434_10018 = G__10030;
continue;
}
} else
{var arg__7055__auto___10031 = cljs.core.first.call(null,seq__8431_10025__$1);a__7054__auto__.push(arg__7055__auto___10031);
{
var G__10032 = cljs.core.next.call(null,seq__8431_10025__$1);
var G__10033 = null;
var G__10034 = 0;
var G__10035 = 0;
seq__8431_10015 = G__10032;
chunk__8432_10016 = G__10033;
count__8433_10017 = G__10034;
i__8434_10018 = G__10035;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.hr.apply(null,a__7054__auto__);
};
var hr = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return hr__delegate.call(this,args__7053__auto__);};
hr.cljs$lang$maxFixedArity = 0;
hr.cljs$lang$applyTo = (function (arglist__10036){
var args__7053__auto__ = cljs.core.seq(arglist__10036);
return hr__delegate(args__7053__auto__);
});
hr.cljs$core$IFn$_invoke$arity$variadic = hr__delegate;
return hr;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.html = (function() { 
var html__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8439_10037 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8440_10038 = null;var count__8441_10039 = 0;var i__8442_10040 = 0;while(true){
if((i__8442_10040 < count__8441_10039))
{var arg__7055__auto___10041 = cljs.core._nth.call(null,chunk__8440_10038,i__8442_10040);a__7054__auto__.push(arg__7055__auto___10041);
{
var G__10042 = seq__8439_10037;
var G__10043 = chunk__8440_10038;
var G__10044 = count__8441_10039;
var G__10045 = (i__8442_10040 + 1);
seq__8439_10037 = G__10042;
chunk__8440_10038 = G__10043;
count__8441_10039 = G__10044;
i__8442_10040 = G__10045;
continue;
}
} else
{var temp__4092__auto___10046 = cljs.core.seq.call(null,seq__8439_10037);if(temp__4092__auto___10046)
{var seq__8439_10047__$1 = temp__4092__auto___10046;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8439_10047__$1))
{var c__5632__auto___10048 = cljs.core.chunk_first.call(null,seq__8439_10047__$1);{
var G__10049 = cljs.core.chunk_rest.call(null,seq__8439_10047__$1);
var G__10050 = c__5632__auto___10048;
var G__10051 = cljs.core.count.call(null,c__5632__auto___10048);
var G__10052 = 0;
seq__8439_10037 = G__10049;
chunk__8440_10038 = G__10050;
count__8441_10039 = G__10051;
i__8442_10040 = G__10052;
continue;
}
} else
{var arg__7055__auto___10053 = cljs.core.first.call(null,seq__8439_10047__$1);a__7054__auto__.push(arg__7055__auto___10053);
{
var G__10054 = cljs.core.next.call(null,seq__8439_10047__$1);
var G__10055 = null;
var G__10056 = 0;
var G__10057 = 0;
seq__8439_10037 = G__10054;
chunk__8440_10038 = G__10055;
count__8441_10039 = G__10056;
i__8442_10040 = G__10057;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.html.apply(null,a__7054__auto__);
};
var html = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return html__delegate.call(this,args__7053__auto__);};
html.cljs$lang$maxFixedArity = 0;
html.cljs$lang$applyTo = (function (arglist__10058){
var args__7053__auto__ = cljs.core.seq(arglist__10058);
return html__delegate(args__7053__auto__);
});
html.cljs$core$IFn$_invoke$arity$variadic = html__delegate;
return html;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.i = (function() { 
var i__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8447_10059 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8448_10060 = null;var count__8449_10061 = 0;var i__8450_10062 = 0;while(true){
if((i__8450_10062 < count__8449_10061))
{var arg__7055__auto___10063 = cljs.core._nth.call(null,chunk__8448_10060,i__8450_10062);a__7054__auto__.push(arg__7055__auto___10063);
{
var G__10064 = seq__8447_10059;
var G__10065 = chunk__8448_10060;
var G__10066 = count__8449_10061;
var G__10067 = (i__8450_10062 + 1);
seq__8447_10059 = G__10064;
chunk__8448_10060 = G__10065;
count__8449_10061 = G__10066;
i__8450_10062 = G__10067;
continue;
}
} else
{var temp__4092__auto___10068 = cljs.core.seq.call(null,seq__8447_10059);if(temp__4092__auto___10068)
{var seq__8447_10069__$1 = temp__4092__auto___10068;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8447_10069__$1))
{var c__5632__auto___10070 = cljs.core.chunk_first.call(null,seq__8447_10069__$1);{
var G__10071 = cljs.core.chunk_rest.call(null,seq__8447_10069__$1);
var G__10072 = c__5632__auto___10070;
var G__10073 = cljs.core.count.call(null,c__5632__auto___10070);
var G__10074 = 0;
seq__8447_10059 = G__10071;
chunk__8448_10060 = G__10072;
count__8449_10061 = G__10073;
i__8450_10062 = G__10074;
continue;
}
} else
{var arg__7055__auto___10075 = cljs.core.first.call(null,seq__8447_10069__$1);a__7054__auto__.push(arg__7055__auto___10075);
{
var G__10076 = cljs.core.next.call(null,seq__8447_10069__$1);
var G__10077 = null;
var G__10078 = 0;
var G__10079 = 0;
seq__8447_10059 = G__10076;
chunk__8448_10060 = G__10077;
count__8449_10061 = G__10078;
i__8450_10062 = G__10079;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.i.apply(null,a__7054__auto__);
};
var i = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return i__delegate.call(this,args__7053__auto__);};
i.cljs$lang$maxFixedArity = 0;
i.cljs$lang$applyTo = (function (arglist__10080){
var args__7053__auto__ = cljs.core.seq(arglist__10080);
return i__delegate(args__7053__auto__);
});
i.cljs$core$IFn$_invoke$arity$variadic = i__delegate;
return i;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.iframe = (function() { 
var iframe__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8455_10081 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8456_10082 = null;var count__8457_10083 = 0;var i__8458_10084 = 0;while(true){
if((i__8458_10084 < count__8457_10083))
{var arg__7055__auto___10085 = cljs.core._nth.call(null,chunk__8456_10082,i__8458_10084);a__7054__auto__.push(arg__7055__auto___10085);
{
var G__10086 = seq__8455_10081;
var G__10087 = chunk__8456_10082;
var G__10088 = count__8457_10083;
var G__10089 = (i__8458_10084 + 1);
seq__8455_10081 = G__10086;
chunk__8456_10082 = G__10087;
count__8457_10083 = G__10088;
i__8458_10084 = G__10089;
continue;
}
} else
{var temp__4092__auto___10090 = cljs.core.seq.call(null,seq__8455_10081);if(temp__4092__auto___10090)
{var seq__8455_10091__$1 = temp__4092__auto___10090;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8455_10091__$1))
{var c__5632__auto___10092 = cljs.core.chunk_first.call(null,seq__8455_10091__$1);{
var G__10093 = cljs.core.chunk_rest.call(null,seq__8455_10091__$1);
var G__10094 = c__5632__auto___10092;
var G__10095 = cljs.core.count.call(null,c__5632__auto___10092);
var G__10096 = 0;
seq__8455_10081 = G__10093;
chunk__8456_10082 = G__10094;
count__8457_10083 = G__10095;
i__8458_10084 = G__10096;
continue;
}
} else
{var arg__7055__auto___10097 = cljs.core.first.call(null,seq__8455_10091__$1);a__7054__auto__.push(arg__7055__auto___10097);
{
var G__10098 = cljs.core.next.call(null,seq__8455_10091__$1);
var G__10099 = null;
var G__10100 = 0;
var G__10101 = 0;
seq__8455_10081 = G__10098;
chunk__8456_10082 = G__10099;
count__8457_10083 = G__10100;
i__8458_10084 = G__10101;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.iframe.apply(null,a__7054__auto__);
};
var iframe = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return iframe__delegate.call(this,args__7053__auto__);};
iframe.cljs$lang$maxFixedArity = 0;
iframe.cljs$lang$applyTo = (function (arglist__10102){
var args__7053__auto__ = cljs.core.seq(arglist__10102);
return iframe__delegate(args__7053__auto__);
});
iframe.cljs$core$IFn$_invoke$arity$variadic = iframe__delegate;
return iframe;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.img = (function() { 
var img__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8463_10103 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8464_10104 = null;var count__8465_10105 = 0;var i__8466_10106 = 0;while(true){
if((i__8466_10106 < count__8465_10105))
{var arg__7055__auto___10107 = cljs.core._nth.call(null,chunk__8464_10104,i__8466_10106);a__7054__auto__.push(arg__7055__auto___10107);
{
var G__10108 = seq__8463_10103;
var G__10109 = chunk__8464_10104;
var G__10110 = count__8465_10105;
var G__10111 = (i__8466_10106 + 1);
seq__8463_10103 = G__10108;
chunk__8464_10104 = G__10109;
count__8465_10105 = G__10110;
i__8466_10106 = G__10111;
continue;
}
} else
{var temp__4092__auto___10112 = cljs.core.seq.call(null,seq__8463_10103);if(temp__4092__auto___10112)
{var seq__8463_10113__$1 = temp__4092__auto___10112;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8463_10113__$1))
{var c__5632__auto___10114 = cljs.core.chunk_first.call(null,seq__8463_10113__$1);{
var G__10115 = cljs.core.chunk_rest.call(null,seq__8463_10113__$1);
var G__10116 = c__5632__auto___10114;
var G__10117 = cljs.core.count.call(null,c__5632__auto___10114);
var G__10118 = 0;
seq__8463_10103 = G__10115;
chunk__8464_10104 = G__10116;
count__8465_10105 = G__10117;
i__8466_10106 = G__10118;
continue;
}
} else
{var arg__7055__auto___10119 = cljs.core.first.call(null,seq__8463_10113__$1);a__7054__auto__.push(arg__7055__auto___10119);
{
var G__10120 = cljs.core.next.call(null,seq__8463_10113__$1);
var G__10121 = null;
var G__10122 = 0;
var G__10123 = 0;
seq__8463_10103 = G__10120;
chunk__8464_10104 = G__10121;
count__8465_10105 = G__10122;
i__8466_10106 = G__10123;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.img.apply(null,a__7054__auto__);
};
var img = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return img__delegate.call(this,args__7053__auto__);};
img.cljs$lang$maxFixedArity = 0;
img.cljs$lang$applyTo = (function (arglist__10124){
var args__7053__auto__ = cljs.core.seq(arglist__10124);
return img__delegate(args__7053__auto__);
});
img.cljs$core$IFn$_invoke$arity$variadic = img__delegate;
return img;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.input = (function() { 
var input__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8471_10125 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8472_10126 = null;var count__8473_10127 = 0;var i__8474_10128 = 0;while(true){
if((i__8474_10128 < count__8473_10127))
{var arg__7055__auto___10129 = cljs.core._nth.call(null,chunk__8472_10126,i__8474_10128);a__7054__auto__.push(arg__7055__auto___10129);
{
var G__10130 = seq__8471_10125;
var G__10131 = chunk__8472_10126;
var G__10132 = count__8473_10127;
var G__10133 = (i__8474_10128 + 1);
seq__8471_10125 = G__10130;
chunk__8472_10126 = G__10131;
count__8473_10127 = G__10132;
i__8474_10128 = G__10133;
continue;
}
} else
{var temp__4092__auto___10134 = cljs.core.seq.call(null,seq__8471_10125);if(temp__4092__auto___10134)
{var seq__8471_10135__$1 = temp__4092__auto___10134;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8471_10135__$1))
{var c__5632__auto___10136 = cljs.core.chunk_first.call(null,seq__8471_10135__$1);{
var G__10137 = cljs.core.chunk_rest.call(null,seq__8471_10135__$1);
var G__10138 = c__5632__auto___10136;
var G__10139 = cljs.core.count.call(null,c__5632__auto___10136);
var G__10140 = 0;
seq__8471_10125 = G__10137;
chunk__8472_10126 = G__10138;
count__8473_10127 = G__10139;
i__8474_10128 = G__10140;
continue;
}
} else
{var arg__7055__auto___10141 = cljs.core.first.call(null,seq__8471_10135__$1);a__7054__auto__.push(arg__7055__auto___10141);
{
var G__10142 = cljs.core.next.call(null,seq__8471_10135__$1);
var G__10143 = null;
var G__10144 = 0;
var G__10145 = 0;
seq__8471_10125 = G__10142;
chunk__8472_10126 = G__10143;
count__8473_10127 = G__10144;
i__8474_10128 = G__10145;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.input.apply(null,a__7054__auto__);
};
var input = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return input__delegate.call(this,args__7053__auto__);};
input.cljs$lang$maxFixedArity = 0;
input.cljs$lang$applyTo = (function (arglist__10146){
var args__7053__auto__ = cljs.core.seq(arglist__10146);
return input__delegate(args__7053__auto__);
});
input.cljs$core$IFn$_invoke$arity$variadic = input__delegate;
return input;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.ins = (function() { 
var ins__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8479_10147 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8480_10148 = null;var count__8481_10149 = 0;var i__8482_10150 = 0;while(true){
if((i__8482_10150 < count__8481_10149))
{var arg__7055__auto___10151 = cljs.core._nth.call(null,chunk__8480_10148,i__8482_10150);a__7054__auto__.push(arg__7055__auto___10151);
{
var G__10152 = seq__8479_10147;
var G__10153 = chunk__8480_10148;
var G__10154 = count__8481_10149;
var G__10155 = (i__8482_10150 + 1);
seq__8479_10147 = G__10152;
chunk__8480_10148 = G__10153;
count__8481_10149 = G__10154;
i__8482_10150 = G__10155;
continue;
}
} else
{var temp__4092__auto___10156 = cljs.core.seq.call(null,seq__8479_10147);if(temp__4092__auto___10156)
{var seq__8479_10157__$1 = temp__4092__auto___10156;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8479_10157__$1))
{var c__5632__auto___10158 = cljs.core.chunk_first.call(null,seq__8479_10157__$1);{
var G__10159 = cljs.core.chunk_rest.call(null,seq__8479_10157__$1);
var G__10160 = c__5632__auto___10158;
var G__10161 = cljs.core.count.call(null,c__5632__auto___10158);
var G__10162 = 0;
seq__8479_10147 = G__10159;
chunk__8480_10148 = G__10160;
count__8481_10149 = G__10161;
i__8482_10150 = G__10162;
continue;
}
} else
{var arg__7055__auto___10163 = cljs.core.first.call(null,seq__8479_10157__$1);a__7054__auto__.push(arg__7055__auto___10163);
{
var G__10164 = cljs.core.next.call(null,seq__8479_10157__$1);
var G__10165 = null;
var G__10166 = 0;
var G__10167 = 0;
seq__8479_10147 = G__10164;
chunk__8480_10148 = G__10165;
count__8481_10149 = G__10166;
i__8482_10150 = G__10167;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.ins.apply(null,a__7054__auto__);
};
var ins = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ins__delegate.call(this,args__7053__auto__);};
ins.cljs$lang$maxFixedArity = 0;
ins.cljs$lang$applyTo = (function (arglist__10168){
var args__7053__auto__ = cljs.core.seq(arglist__10168);
return ins__delegate(args__7053__auto__);
});
ins.cljs$core$IFn$_invoke$arity$variadic = ins__delegate;
return ins;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.kbd = (function() { 
var kbd__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8487_10169 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8488_10170 = null;var count__8489_10171 = 0;var i__8490_10172 = 0;while(true){
if((i__8490_10172 < count__8489_10171))
{var arg__7055__auto___10173 = cljs.core._nth.call(null,chunk__8488_10170,i__8490_10172);a__7054__auto__.push(arg__7055__auto___10173);
{
var G__10174 = seq__8487_10169;
var G__10175 = chunk__8488_10170;
var G__10176 = count__8489_10171;
var G__10177 = (i__8490_10172 + 1);
seq__8487_10169 = G__10174;
chunk__8488_10170 = G__10175;
count__8489_10171 = G__10176;
i__8490_10172 = G__10177;
continue;
}
} else
{var temp__4092__auto___10178 = cljs.core.seq.call(null,seq__8487_10169);if(temp__4092__auto___10178)
{var seq__8487_10179__$1 = temp__4092__auto___10178;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8487_10179__$1))
{var c__5632__auto___10180 = cljs.core.chunk_first.call(null,seq__8487_10179__$1);{
var G__10181 = cljs.core.chunk_rest.call(null,seq__8487_10179__$1);
var G__10182 = c__5632__auto___10180;
var G__10183 = cljs.core.count.call(null,c__5632__auto___10180);
var G__10184 = 0;
seq__8487_10169 = G__10181;
chunk__8488_10170 = G__10182;
count__8489_10171 = G__10183;
i__8490_10172 = G__10184;
continue;
}
} else
{var arg__7055__auto___10185 = cljs.core.first.call(null,seq__8487_10179__$1);a__7054__auto__.push(arg__7055__auto___10185);
{
var G__10186 = cljs.core.next.call(null,seq__8487_10179__$1);
var G__10187 = null;
var G__10188 = 0;
var G__10189 = 0;
seq__8487_10169 = G__10186;
chunk__8488_10170 = G__10187;
count__8489_10171 = G__10188;
i__8490_10172 = G__10189;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.kbd.apply(null,a__7054__auto__);
};
var kbd = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return kbd__delegate.call(this,args__7053__auto__);};
kbd.cljs$lang$maxFixedArity = 0;
kbd.cljs$lang$applyTo = (function (arglist__10190){
var args__7053__auto__ = cljs.core.seq(arglist__10190);
return kbd__delegate(args__7053__auto__);
});
kbd.cljs$core$IFn$_invoke$arity$variadic = kbd__delegate;
return kbd;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.keygen = (function() { 
var keygen__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8495_10191 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8496_10192 = null;var count__8497_10193 = 0;var i__8498_10194 = 0;while(true){
if((i__8498_10194 < count__8497_10193))
{var arg__7055__auto___10195 = cljs.core._nth.call(null,chunk__8496_10192,i__8498_10194);a__7054__auto__.push(arg__7055__auto___10195);
{
var G__10196 = seq__8495_10191;
var G__10197 = chunk__8496_10192;
var G__10198 = count__8497_10193;
var G__10199 = (i__8498_10194 + 1);
seq__8495_10191 = G__10196;
chunk__8496_10192 = G__10197;
count__8497_10193 = G__10198;
i__8498_10194 = G__10199;
continue;
}
} else
{var temp__4092__auto___10200 = cljs.core.seq.call(null,seq__8495_10191);if(temp__4092__auto___10200)
{var seq__8495_10201__$1 = temp__4092__auto___10200;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8495_10201__$1))
{var c__5632__auto___10202 = cljs.core.chunk_first.call(null,seq__8495_10201__$1);{
var G__10203 = cljs.core.chunk_rest.call(null,seq__8495_10201__$1);
var G__10204 = c__5632__auto___10202;
var G__10205 = cljs.core.count.call(null,c__5632__auto___10202);
var G__10206 = 0;
seq__8495_10191 = G__10203;
chunk__8496_10192 = G__10204;
count__8497_10193 = G__10205;
i__8498_10194 = G__10206;
continue;
}
} else
{var arg__7055__auto___10207 = cljs.core.first.call(null,seq__8495_10201__$1);a__7054__auto__.push(arg__7055__auto___10207);
{
var G__10208 = cljs.core.next.call(null,seq__8495_10201__$1);
var G__10209 = null;
var G__10210 = 0;
var G__10211 = 0;
seq__8495_10191 = G__10208;
chunk__8496_10192 = G__10209;
count__8497_10193 = G__10210;
i__8498_10194 = G__10211;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.keygen.apply(null,a__7054__auto__);
};
var keygen = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return keygen__delegate.call(this,args__7053__auto__);};
keygen.cljs$lang$maxFixedArity = 0;
keygen.cljs$lang$applyTo = (function (arglist__10212){
var args__7053__auto__ = cljs.core.seq(arglist__10212);
return keygen__delegate(args__7053__auto__);
});
keygen.cljs$core$IFn$_invoke$arity$variadic = keygen__delegate;
return keygen;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.label = (function() { 
var label__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8503_10213 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8504_10214 = null;var count__8505_10215 = 0;var i__8506_10216 = 0;while(true){
if((i__8506_10216 < count__8505_10215))
{var arg__7055__auto___10217 = cljs.core._nth.call(null,chunk__8504_10214,i__8506_10216);a__7054__auto__.push(arg__7055__auto___10217);
{
var G__10218 = seq__8503_10213;
var G__10219 = chunk__8504_10214;
var G__10220 = count__8505_10215;
var G__10221 = (i__8506_10216 + 1);
seq__8503_10213 = G__10218;
chunk__8504_10214 = G__10219;
count__8505_10215 = G__10220;
i__8506_10216 = G__10221;
continue;
}
} else
{var temp__4092__auto___10222 = cljs.core.seq.call(null,seq__8503_10213);if(temp__4092__auto___10222)
{var seq__8503_10223__$1 = temp__4092__auto___10222;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8503_10223__$1))
{var c__5632__auto___10224 = cljs.core.chunk_first.call(null,seq__8503_10223__$1);{
var G__10225 = cljs.core.chunk_rest.call(null,seq__8503_10223__$1);
var G__10226 = c__5632__auto___10224;
var G__10227 = cljs.core.count.call(null,c__5632__auto___10224);
var G__10228 = 0;
seq__8503_10213 = G__10225;
chunk__8504_10214 = G__10226;
count__8505_10215 = G__10227;
i__8506_10216 = G__10228;
continue;
}
} else
{var arg__7055__auto___10229 = cljs.core.first.call(null,seq__8503_10223__$1);a__7054__auto__.push(arg__7055__auto___10229);
{
var G__10230 = cljs.core.next.call(null,seq__8503_10223__$1);
var G__10231 = null;
var G__10232 = 0;
var G__10233 = 0;
seq__8503_10213 = G__10230;
chunk__8504_10214 = G__10231;
count__8505_10215 = G__10232;
i__8506_10216 = G__10233;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.label.apply(null,a__7054__auto__);
};
var label = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return label__delegate.call(this,args__7053__auto__);};
label.cljs$lang$maxFixedArity = 0;
label.cljs$lang$applyTo = (function (arglist__10234){
var args__7053__auto__ = cljs.core.seq(arglist__10234);
return label__delegate(args__7053__auto__);
});
label.cljs$core$IFn$_invoke$arity$variadic = label__delegate;
return label;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.legend = (function() { 
var legend__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8511_10235 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8512_10236 = null;var count__8513_10237 = 0;var i__8514_10238 = 0;while(true){
if((i__8514_10238 < count__8513_10237))
{var arg__7055__auto___10239 = cljs.core._nth.call(null,chunk__8512_10236,i__8514_10238);a__7054__auto__.push(arg__7055__auto___10239);
{
var G__10240 = seq__8511_10235;
var G__10241 = chunk__8512_10236;
var G__10242 = count__8513_10237;
var G__10243 = (i__8514_10238 + 1);
seq__8511_10235 = G__10240;
chunk__8512_10236 = G__10241;
count__8513_10237 = G__10242;
i__8514_10238 = G__10243;
continue;
}
} else
{var temp__4092__auto___10244 = cljs.core.seq.call(null,seq__8511_10235);if(temp__4092__auto___10244)
{var seq__8511_10245__$1 = temp__4092__auto___10244;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8511_10245__$1))
{var c__5632__auto___10246 = cljs.core.chunk_first.call(null,seq__8511_10245__$1);{
var G__10247 = cljs.core.chunk_rest.call(null,seq__8511_10245__$1);
var G__10248 = c__5632__auto___10246;
var G__10249 = cljs.core.count.call(null,c__5632__auto___10246);
var G__10250 = 0;
seq__8511_10235 = G__10247;
chunk__8512_10236 = G__10248;
count__8513_10237 = G__10249;
i__8514_10238 = G__10250;
continue;
}
} else
{var arg__7055__auto___10251 = cljs.core.first.call(null,seq__8511_10245__$1);a__7054__auto__.push(arg__7055__auto___10251);
{
var G__10252 = cljs.core.next.call(null,seq__8511_10245__$1);
var G__10253 = null;
var G__10254 = 0;
var G__10255 = 0;
seq__8511_10235 = G__10252;
chunk__8512_10236 = G__10253;
count__8513_10237 = G__10254;
i__8514_10238 = G__10255;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.legend.apply(null,a__7054__auto__);
};
var legend = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return legend__delegate.call(this,args__7053__auto__);};
legend.cljs$lang$maxFixedArity = 0;
legend.cljs$lang$applyTo = (function (arglist__10256){
var args__7053__auto__ = cljs.core.seq(arglist__10256);
return legend__delegate(args__7053__auto__);
});
legend.cljs$core$IFn$_invoke$arity$variadic = legend__delegate;
return legend;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.li = (function() { 
var li__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8519_10257 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8520_10258 = null;var count__8521_10259 = 0;var i__8522_10260 = 0;while(true){
if((i__8522_10260 < count__8521_10259))
{var arg__7055__auto___10261 = cljs.core._nth.call(null,chunk__8520_10258,i__8522_10260);a__7054__auto__.push(arg__7055__auto___10261);
{
var G__10262 = seq__8519_10257;
var G__10263 = chunk__8520_10258;
var G__10264 = count__8521_10259;
var G__10265 = (i__8522_10260 + 1);
seq__8519_10257 = G__10262;
chunk__8520_10258 = G__10263;
count__8521_10259 = G__10264;
i__8522_10260 = G__10265;
continue;
}
} else
{var temp__4092__auto___10266 = cljs.core.seq.call(null,seq__8519_10257);if(temp__4092__auto___10266)
{var seq__8519_10267__$1 = temp__4092__auto___10266;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8519_10267__$1))
{var c__5632__auto___10268 = cljs.core.chunk_first.call(null,seq__8519_10267__$1);{
var G__10269 = cljs.core.chunk_rest.call(null,seq__8519_10267__$1);
var G__10270 = c__5632__auto___10268;
var G__10271 = cljs.core.count.call(null,c__5632__auto___10268);
var G__10272 = 0;
seq__8519_10257 = G__10269;
chunk__8520_10258 = G__10270;
count__8521_10259 = G__10271;
i__8522_10260 = G__10272;
continue;
}
} else
{var arg__7055__auto___10273 = cljs.core.first.call(null,seq__8519_10267__$1);a__7054__auto__.push(arg__7055__auto___10273);
{
var G__10274 = cljs.core.next.call(null,seq__8519_10267__$1);
var G__10275 = null;
var G__10276 = 0;
var G__10277 = 0;
seq__8519_10257 = G__10274;
chunk__8520_10258 = G__10275;
count__8521_10259 = G__10276;
i__8522_10260 = G__10277;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.li.apply(null,a__7054__auto__);
};
var li = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return li__delegate.call(this,args__7053__auto__);};
li.cljs$lang$maxFixedArity = 0;
li.cljs$lang$applyTo = (function (arglist__10278){
var args__7053__auto__ = cljs.core.seq(arglist__10278);
return li__delegate(args__7053__auto__);
});
li.cljs$core$IFn$_invoke$arity$variadic = li__delegate;
return li;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.link = (function() { 
var link__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8527_10279 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8528_10280 = null;var count__8529_10281 = 0;var i__8530_10282 = 0;while(true){
if((i__8530_10282 < count__8529_10281))
{var arg__7055__auto___10283 = cljs.core._nth.call(null,chunk__8528_10280,i__8530_10282);a__7054__auto__.push(arg__7055__auto___10283);
{
var G__10284 = seq__8527_10279;
var G__10285 = chunk__8528_10280;
var G__10286 = count__8529_10281;
var G__10287 = (i__8530_10282 + 1);
seq__8527_10279 = G__10284;
chunk__8528_10280 = G__10285;
count__8529_10281 = G__10286;
i__8530_10282 = G__10287;
continue;
}
} else
{var temp__4092__auto___10288 = cljs.core.seq.call(null,seq__8527_10279);if(temp__4092__auto___10288)
{var seq__8527_10289__$1 = temp__4092__auto___10288;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8527_10289__$1))
{var c__5632__auto___10290 = cljs.core.chunk_first.call(null,seq__8527_10289__$1);{
var G__10291 = cljs.core.chunk_rest.call(null,seq__8527_10289__$1);
var G__10292 = c__5632__auto___10290;
var G__10293 = cljs.core.count.call(null,c__5632__auto___10290);
var G__10294 = 0;
seq__8527_10279 = G__10291;
chunk__8528_10280 = G__10292;
count__8529_10281 = G__10293;
i__8530_10282 = G__10294;
continue;
}
} else
{var arg__7055__auto___10295 = cljs.core.first.call(null,seq__8527_10289__$1);a__7054__auto__.push(arg__7055__auto___10295);
{
var G__10296 = cljs.core.next.call(null,seq__8527_10289__$1);
var G__10297 = null;
var G__10298 = 0;
var G__10299 = 0;
seq__8527_10279 = G__10296;
chunk__8528_10280 = G__10297;
count__8529_10281 = G__10298;
i__8530_10282 = G__10299;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.link.apply(null,a__7054__auto__);
};
var link = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return link__delegate.call(this,args__7053__auto__);};
link.cljs$lang$maxFixedArity = 0;
link.cljs$lang$applyTo = (function (arglist__10300){
var args__7053__auto__ = cljs.core.seq(arglist__10300);
return link__delegate(args__7053__auto__);
});
link.cljs$core$IFn$_invoke$arity$variadic = link__delegate;
return link;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.main = (function() { 
var main__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8535_10301 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8536_10302 = null;var count__8537_10303 = 0;var i__8538_10304 = 0;while(true){
if((i__8538_10304 < count__8537_10303))
{var arg__7055__auto___10305 = cljs.core._nth.call(null,chunk__8536_10302,i__8538_10304);a__7054__auto__.push(arg__7055__auto___10305);
{
var G__10306 = seq__8535_10301;
var G__10307 = chunk__8536_10302;
var G__10308 = count__8537_10303;
var G__10309 = (i__8538_10304 + 1);
seq__8535_10301 = G__10306;
chunk__8536_10302 = G__10307;
count__8537_10303 = G__10308;
i__8538_10304 = G__10309;
continue;
}
} else
{var temp__4092__auto___10310 = cljs.core.seq.call(null,seq__8535_10301);if(temp__4092__auto___10310)
{var seq__8535_10311__$1 = temp__4092__auto___10310;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8535_10311__$1))
{var c__5632__auto___10312 = cljs.core.chunk_first.call(null,seq__8535_10311__$1);{
var G__10313 = cljs.core.chunk_rest.call(null,seq__8535_10311__$1);
var G__10314 = c__5632__auto___10312;
var G__10315 = cljs.core.count.call(null,c__5632__auto___10312);
var G__10316 = 0;
seq__8535_10301 = G__10313;
chunk__8536_10302 = G__10314;
count__8537_10303 = G__10315;
i__8538_10304 = G__10316;
continue;
}
} else
{var arg__7055__auto___10317 = cljs.core.first.call(null,seq__8535_10311__$1);a__7054__auto__.push(arg__7055__auto___10317);
{
var G__10318 = cljs.core.next.call(null,seq__8535_10311__$1);
var G__10319 = null;
var G__10320 = 0;
var G__10321 = 0;
seq__8535_10301 = G__10318;
chunk__8536_10302 = G__10319;
count__8537_10303 = G__10320;
i__8538_10304 = G__10321;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.main.apply(null,a__7054__auto__);
};
var main = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return main__delegate.call(this,args__7053__auto__);};
main.cljs$lang$maxFixedArity = 0;
main.cljs$lang$applyTo = (function (arglist__10322){
var args__7053__auto__ = cljs.core.seq(arglist__10322);
return main__delegate(args__7053__auto__);
});
main.cljs$core$IFn$_invoke$arity$variadic = main__delegate;
return main;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.map = (function() { 
var map__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8543_10323 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8544_10324 = null;var count__8545_10325 = 0;var i__8546_10326 = 0;while(true){
if((i__8546_10326 < count__8545_10325))
{var arg__7055__auto___10327 = cljs.core._nth.call(null,chunk__8544_10324,i__8546_10326);a__7054__auto__.push(arg__7055__auto___10327);
{
var G__10328 = seq__8543_10323;
var G__10329 = chunk__8544_10324;
var G__10330 = count__8545_10325;
var G__10331 = (i__8546_10326 + 1);
seq__8543_10323 = G__10328;
chunk__8544_10324 = G__10329;
count__8545_10325 = G__10330;
i__8546_10326 = G__10331;
continue;
}
} else
{var temp__4092__auto___10332 = cljs.core.seq.call(null,seq__8543_10323);if(temp__4092__auto___10332)
{var seq__8543_10333__$1 = temp__4092__auto___10332;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8543_10333__$1))
{var c__5632__auto___10334 = cljs.core.chunk_first.call(null,seq__8543_10333__$1);{
var G__10335 = cljs.core.chunk_rest.call(null,seq__8543_10333__$1);
var G__10336 = c__5632__auto___10334;
var G__10337 = cljs.core.count.call(null,c__5632__auto___10334);
var G__10338 = 0;
seq__8543_10323 = G__10335;
chunk__8544_10324 = G__10336;
count__8545_10325 = G__10337;
i__8546_10326 = G__10338;
continue;
}
} else
{var arg__7055__auto___10339 = cljs.core.first.call(null,seq__8543_10333__$1);a__7054__auto__.push(arg__7055__auto___10339);
{
var G__10340 = cljs.core.next.call(null,seq__8543_10333__$1);
var G__10341 = null;
var G__10342 = 0;
var G__10343 = 0;
seq__8543_10323 = G__10340;
chunk__8544_10324 = G__10341;
count__8545_10325 = G__10342;
i__8546_10326 = G__10343;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.map.apply(null,a__7054__auto__);
};
var map = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return map__delegate.call(this,args__7053__auto__);};
map.cljs$lang$maxFixedArity = 0;
map.cljs$lang$applyTo = (function (arglist__10344){
var args__7053__auto__ = cljs.core.seq(arglist__10344);
return map__delegate(args__7053__auto__);
});
map.cljs$core$IFn$_invoke$arity$variadic = map__delegate;
return map;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.mark = (function() { 
var mark__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8551_10345 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8552_10346 = null;var count__8553_10347 = 0;var i__8554_10348 = 0;while(true){
if((i__8554_10348 < count__8553_10347))
{var arg__7055__auto___10349 = cljs.core._nth.call(null,chunk__8552_10346,i__8554_10348);a__7054__auto__.push(arg__7055__auto___10349);
{
var G__10350 = seq__8551_10345;
var G__10351 = chunk__8552_10346;
var G__10352 = count__8553_10347;
var G__10353 = (i__8554_10348 + 1);
seq__8551_10345 = G__10350;
chunk__8552_10346 = G__10351;
count__8553_10347 = G__10352;
i__8554_10348 = G__10353;
continue;
}
} else
{var temp__4092__auto___10354 = cljs.core.seq.call(null,seq__8551_10345);if(temp__4092__auto___10354)
{var seq__8551_10355__$1 = temp__4092__auto___10354;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8551_10355__$1))
{var c__5632__auto___10356 = cljs.core.chunk_first.call(null,seq__8551_10355__$1);{
var G__10357 = cljs.core.chunk_rest.call(null,seq__8551_10355__$1);
var G__10358 = c__5632__auto___10356;
var G__10359 = cljs.core.count.call(null,c__5632__auto___10356);
var G__10360 = 0;
seq__8551_10345 = G__10357;
chunk__8552_10346 = G__10358;
count__8553_10347 = G__10359;
i__8554_10348 = G__10360;
continue;
}
} else
{var arg__7055__auto___10361 = cljs.core.first.call(null,seq__8551_10355__$1);a__7054__auto__.push(arg__7055__auto___10361);
{
var G__10362 = cljs.core.next.call(null,seq__8551_10355__$1);
var G__10363 = null;
var G__10364 = 0;
var G__10365 = 0;
seq__8551_10345 = G__10362;
chunk__8552_10346 = G__10363;
count__8553_10347 = G__10364;
i__8554_10348 = G__10365;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.mark.apply(null,a__7054__auto__);
};
var mark = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return mark__delegate.call(this,args__7053__auto__);};
mark.cljs$lang$maxFixedArity = 0;
mark.cljs$lang$applyTo = (function (arglist__10366){
var args__7053__auto__ = cljs.core.seq(arglist__10366);
return mark__delegate(args__7053__auto__);
});
mark.cljs$core$IFn$_invoke$arity$variadic = mark__delegate;
return mark;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.menu = (function() { 
var menu__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8559_10367 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8560_10368 = null;var count__8561_10369 = 0;var i__8562_10370 = 0;while(true){
if((i__8562_10370 < count__8561_10369))
{var arg__7055__auto___10371 = cljs.core._nth.call(null,chunk__8560_10368,i__8562_10370);a__7054__auto__.push(arg__7055__auto___10371);
{
var G__10372 = seq__8559_10367;
var G__10373 = chunk__8560_10368;
var G__10374 = count__8561_10369;
var G__10375 = (i__8562_10370 + 1);
seq__8559_10367 = G__10372;
chunk__8560_10368 = G__10373;
count__8561_10369 = G__10374;
i__8562_10370 = G__10375;
continue;
}
} else
{var temp__4092__auto___10376 = cljs.core.seq.call(null,seq__8559_10367);if(temp__4092__auto___10376)
{var seq__8559_10377__$1 = temp__4092__auto___10376;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8559_10377__$1))
{var c__5632__auto___10378 = cljs.core.chunk_first.call(null,seq__8559_10377__$1);{
var G__10379 = cljs.core.chunk_rest.call(null,seq__8559_10377__$1);
var G__10380 = c__5632__auto___10378;
var G__10381 = cljs.core.count.call(null,c__5632__auto___10378);
var G__10382 = 0;
seq__8559_10367 = G__10379;
chunk__8560_10368 = G__10380;
count__8561_10369 = G__10381;
i__8562_10370 = G__10382;
continue;
}
} else
{var arg__7055__auto___10383 = cljs.core.first.call(null,seq__8559_10377__$1);a__7054__auto__.push(arg__7055__auto___10383);
{
var G__10384 = cljs.core.next.call(null,seq__8559_10377__$1);
var G__10385 = null;
var G__10386 = 0;
var G__10387 = 0;
seq__8559_10367 = G__10384;
chunk__8560_10368 = G__10385;
count__8561_10369 = G__10386;
i__8562_10370 = G__10387;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.menu.apply(null,a__7054__auto__);
};
var menu = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return menu__delegate.call(this,args__7053__auto__);};
menu.cljs$lang$maxFixedArity = 0;
menu.cljs$lang$applyTo = (function (arglist__10388){
var args__7053__auto__ = cljs.core.seq(arglist__10388);
return menu__delegate(args__7053__auto__);
});
menu.cljs$core$IFn$_invoke$arity$variadic = menu__delegate;
return menu;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.menuitem = (function() { 
var menuitem__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8567_10389 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8568_10390 = null;var count__8569_10391 = 0;var i__8570_10392 = 0;while(true){
if((i__8570_10392 < count__8569_10391))
{var arg__7055__auto___10393 = cljs.core._nth.call(null,chunk__8568_10390,i__8570_10392);a__7054__auto__.push(arg__7055__auto___10393);
{
var G__10394 = seq__8567_10389;
var G__10395 = chunk__8568_10390;
var G__10396 = count__8569_10391;
var G__10397 = (i__8570_10392 + 1);
seq__8567_10389 = G__10394;
chunk__8568_10390 = G__10395;
count__8569_10391 = G__10396;
i__8570_10392 = G__10397;
continue;
}
} else
{var temp__4092__auto___10398 = cljs.core.seq.call(null,seq__8567_10389);if(temp__4092__auto___10398)
{var seq__8567_10399__$1 = temp__4092__auto___10398;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8567_10399__$1))
{var c__5632__auto___10400 = cljs.core.chunk_first.call(null,seq__8567_10399__$1);{
var G__10401 = cljs.core.chunk_rest.call(null,seq__8567_10399__$1);
var G__10402 = c__5632__auto___10400;
var G__10403 = cljs.core.count.call(null,c__5632__auto___10400);
var G__10404 = 0;
seq__8567_10389 = G__10401;
chunk__8568_10390 = G__10402;
count__8569_10391 = G__10403;
i__8570_10392 = G__10404;
continue;
}
} else
{var arg__7055__auto___10405 = cljs.core.first.call(null,seq__8567_10399__$1);a__7054__auto__.push(arg__7055__auto___10405);
{
var G__10406 = cljs.core.next.call(null,seq__8567_10399__$1);
var G__10407 = null;
var G__10408 = 0;
var G__10409 = 0;
seq__8567_10389 = G__10406;
chunk__8568_10390 = G__10407;
count__8569_10391 = G__10408;
i__8570_10392 = G__10409;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.menuitem.apply(null,a__7054__auto__);
};
var menuitem = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return menuitem__delegate.call(this,args__7053__auto__);};
menuitem.cljs$lang$maxFixedArity = 0;
menuitem.cljs$lang$applyTo = (function (arglist__10410){
var args__7053__auto__ = cljs.core.seq(arglist__10410);
return menuitem__delegate(args__7053__auto__);
});
menuitem.cljs$core$IFn$_invoke$arity$variadic = menuitem__delegate;
return menuitem;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.meta = (function() { 
var meta__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8575_10411 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8576_10412 = null;var count__8577_10413 = 0;var i__8578_10414 = 0;while(true){
if((i__8578_10414 < count__8577_10413))
{var arg__7055__auto___10415 = cljs.core._nth.call(null,chunk__8576_10412,i__8578_10414);a__7054__auto__.push(arg__7055__auto___10415);
{
var G__10416 = seq__8575_10411;
var G__10417 = chunk__8576_10412;
var G__10418 = count__8577_10413;
var G__10419 = (i__8578_10414 + 1);
seq__8575_10411 = G__10416;
chunk__8576_10412 = G__10417;
count__8577_10413 = G__10418;
i__8578_10414 = G__10419;
continue;
}
} else
{var temp__4092__auto___10420 = cljs.core.seq.call(null,seq__8575_10411);if(temp__4092__auto___10420)
{var seq__8575_10421__$1 = temp__4092__auto___10420;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8575_10421__$1))
{var c__5632__auto___10422 = cljs.core.chunk_first.call(null,seq__8575_10421__$1);{
var G__10423 = cljs.core.chunk_rest.call(null,seq__8575_10421__$1);
var G__10424 = c__5632__auto___10422;
var G__10425 = cljs.core.count.call(null,c__5632__auto___10422);
var G__10426 = 0;
seq__8575_10411 = G__10423;
chunk__8576_10412 = G__10424;
count__8577_10413 = G__10425;
i__8578_10414 = G__10426;
continue;
}
} else
{var arg__7055__auto___10427 = cljs.core.first.call(null,seq__8575_10421__$1);a__7054__auto__.push(arg__7055__auto___10427);
{
var G__10428 = cljs.core.next.call(null,seq__8575_10421__$1);
var G__10429 = null;
var G__10430 = 0;
var G__10431 = 0;
seq__8575_10411 = G__10428;
chunk__8576_10412 = G__10429;
count__8577_10413 = G__10430;
i__8578_10414 = G__10431;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.meta.apply(null,a__7054__auto__);
};
var meta = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return meta__delegate.call(this,args__7053__auto__);};
meta.cljs$lang$maxFixedArity = 0;
meta.cljs$lang$applyTo = (function (arglist__10432){
var args__7053__auto__ = cljs.core.seq(arglist__10432);
return meta__delegate(args__7053__auto__);
});
meta.cljs$core$IFn$_invoke$arity$variadic = meta__delegate;
return meta;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.meter = (function() { 
var meter__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8583_10433 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8584_10434 = null;var count__8585_10435 = 0;var i__8586_10436 = 0;while(true){
if((i__8586_10436 < count__8585_10435))
{var arg__7055__auto___10437 = cljs.core._nth.call(null,chunk__8584_10434,i__8586_10436);a__7054__auto__.push(arg__7055__auto___10437);
{
var G__10438 = seq__8583_10433;
var G__10439 = chunk__8584_10434;
var G__10440 = count__8585_10435;
var G__10441 = (i__8586_10436 + 1);
seq__8583_10433 = G__10438;
chunk__8584_10434 = G__10439;
count__8585_10435 = G__10440;
i__8586_10436 = G__10441;
continue;
}
} else
{var temp__4092__auto___10442 = cljs.core.seq.call(null,seq__8583_10433);if(temp__4092__auto___10442)
{var seq__8583_10443__$1 = temp__4092__auto___10442;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8583_10443__$1))
{var c__5632__auto___10444 = cljs.core.chunk_first.call(null,seq__8583_10443__$1);{
var G__10445 = cljs.core.chunk_rest.call(null,seq__8583_10443__$1);
var G__10446 = c__5632__auto___10444;
var G__10447 = cljs.core.count.call(null,c__5632__auto___10444);
var G__10448 = 0;
seq__8583_10433 = G__10445;
chunk__8584_10434 = G__10446;
count__8585_10435 = G__10447;
i__8586_10436 = G__10448;
continue;
}
} else
{var arg__7055__auto___10449 = cljs.core.first.call(null,seq__8583_10443__$1);a__7054__auto__.push(arg__7055__auto___10449);
{
var G__10450 = cljs.core.next.call(null,seq__8583_10443__$1);
var G__10451 = null;
var G__10452 = 0;
var G__10453 = 0;
seq__8583_10433 = G__10450;
chunk__8584_10434 = G__10451;
count__8585_10435 = G__10452;
i__8586_10436 = G__10453;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.meter.apply(null,a__7054__auto__);
};
var meter = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return meter__delegate.call(this,args__7053__auto__);};
meter.cljs$lang$maxFixedArity = 0;
meter.cljs$lang$applyTo = (function (arglist__10454){
var args__7053__auto__ = cljs.core.seq(arglist__10454);
return meter__delegate(args__7053__auto__);
});
meter.cljs$core$IFn$_invoke$arity$variadic = meter__delegate;
return meter;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.nav = (function() { 
var nav__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8591_10455 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8592_10456 = null;var count__8593_10457 = 0;var i__8594_10458 = 0;while(true){
if((i__8594_10458 < count__8593_10457))
{var arg__7055__auto___10459 = cljs.core._nth.call(null,chunk__8592_10456,i__8594_10458);a__7054__auto__.push(arg__7055__auto___10459);
{
var G__10460 = seq__8591_10455;
var G__10461 = chunk__8592_10456;
var G__10462 = count__8593_10457;
var G__10463 = (i__8594_10458 + 1);
seq__8591_10455 = G__10460;
chunk__8592_10456 = G__10461;
count__8593_10457 = G__10462;
i__8594_10458 = G__10463;
continue;
}
} else
{var temp__4092__auto___10464 = cljs.core.seq.call(null,seq__8591_10455);if(temp__4092__auto___10464)
{var seq__8591_10465__$1 = temp__4092__auto___10464;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8591_10465__$1))
{var c__5632__auto___10466 = cljs.core.chunk_first.call(null,seq__8591_10465__$1);{
var G__10467 = cljs.core.chunk_rest.call(null,seq__8591_10465__$1);
var G__10468 = c__5632__auto___10466;
var G__10469 = cljs.core.count.call(null,c__5632__auto___10466);
var G__10470 = 0;
seq__8591_10455 = G__10467;
chunk__8592_10456 = G__10468;
count__8593_10457 = G__10469;
i__8594_10458 = G__10470;
continue;
}
} else
{var arg__7055__auto___10471 = cljs.core.first.call(null,seq__8591_10465__$1);a__7054__auto__.push(arg__7055__auto___10471);
{
var G__10472 = cljs.core.next.call(null,seq__8591_10465__$1);
var G__10473 = null;
var G__10474 = 0;
var G__10475 = 0;
seq__8591_10455 = G__10472;
chunk__8592_10456 = G__10473;
count__8593_10457 = G__10474;
i__8594_10458 = G__10475;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.nav.apply(null,a__7054__auto__);
};
var nav = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return nav__delegate.call(this,args__7053__auto__);};
nav.cljs$lang$maxFixedArity = 0;
nav.cljs$lang$applyTo = (function (arglist__10476){
var args__7053__auto__ = cljs.core.seq(arglist__10476);
return nav__delegate(args__7053__auto__);
});
nav.cljs$core$IFn$_invoke$arity$variadic = nav__delegate;
return nav;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.noscript = (function() { 
var noscript__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8599_10477 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8600_10478 = null;var count__8601_10479 = 0;var i__8602_10480 = 0;while(true){
if((i__8602_10480 < count__8601_10479))
{var arg__7055__auto___10481 = cljs.core._nth.call(null,chunk__8600_10478,i__8602_10480);a__7054__auto__.push(arg__7055__auto___10481);
{
var G__10482 = seq__8599_10477;
var G__10483 = chunk__8600_10478;
var G__10484 = count__8601_10479;
var G__10485 = (i__8602_10480 + 1);
seq__8599_10477 = G__10482;
chunk__8600_10478 = G__10483;
count__8601_10479 = G__10484;
i__8602_10480 = G__10485;
continue;
}
} else
{var temp__4092__auto___10486 = cljs.core.seq.call(null,seq__8599_10477);if(temp__4092__auto___10486)
{var seq__8599_10487__$1 = temp__4092__auto___10486;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8599_10487__$1))
{var c__5632__auto___10488 = cljs.core.chunk_first.call(null,seq__8599_10487__$1);{
var G__10489 = cljs.core.chunk_rest.call(null,seq__8599_10487__$1);
var G__10490 = c__5632__auto___10488;
var G__10491 = cljs.core.count.call(null,c__5632__auto___10488);
var G__10492 = 0;
seq__8599_10477 = G__10489;
chunk__8600_10478 = G__10490;
count__8601_10479 = G__10491;
i__8602_10480 = G__10492;
continue;
}
} else
{var arg__7055__auto___10493 = cljs.core.first.call(null,seq__8599_10487__$1);a__7054__auto__.push(arg__7055__auto___10493);
{
var G__10494 = cljs.core.next.call(null,seq__8599_10487__$1);
var G__10495 = null;
var G__10496 = 0;
var G__10497 = 0;
seq__8599_10477 = G__10494;
chunk__8600_10478 = G__10495;
count__8601_10479 = G__10496;
i__8602_10480 = G__10497;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.noscript.apply(null,a__7054__auto__);
};
var noscript = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return noscript__delegate.call(this,args__7053__auto__);};
noscript.cljs$lang$maxFixedArity = 0;
noscript.cljs$lang$applyTo = (function (arglist__10498){
var args__7053__auto__ = cljs.core.seq(arglist__10498);
return noscript__delegate(args__7053__auto__);
});
noscript.cljs$core$IFn$_invoke$arity$variadic = noscript__delegate;
return noscript;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.object = (function() { 
var object__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8607_10499 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8608_10500 = null;var count__8609_10501 = 0;var i__8610_10502 = 0;while(true){
if((i__8610_10502 < count__8609_10501))
{var arg__7055__auto___10503 = cljs.core._nth.call(null,chunk__8608_10500,i__8610_10502);a__7054__auto__.push(arg__7055__auto___10503);
{
var G__10504 = seq__8607_10499;
var G__10505 = chunk__8608_10500;
var G__10506 = count__8609_10501;
var G__10507 = (i__8610_10502 + 1);
seq__8607_10499 = G__10504;
chunk__8608_10500 = G__10505;
count__8609_10501 = G__10506;
i__8610_10502 = G__10507;
continue;
}
} else
{var temp__4092__auto___10508 = cljs.core.seq.call(null,seq__8607_10499);if(temp__4092__auto___10508)
{var seq__8607_10509__$1 = temp__4092__auto___10508;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8607_10509__$1))
{var c__5632__auto___10510 = cljs.core.chunk_first.call(null,seq__8607_10509__$1);{
var G__10511 = cljs.core.chunk_rest.call(null,seq__8607_10509__$1);
var G__10512 = c__5632__auto___10510;
var G__10513 = cljs.core.count.call(null,c__5632__auto___10510);
var G__10514 = 0;
seq__8607_10499 = G__10511;
chunk__8608_10500 = G__10512;
count__8609_10501 = G__10513;
i__8610_10502 = G__10514;
continue;
}
} else
{var arg__7055__auto___10515 = cljs.core.first.call(null,seq__8607_10509__$1);a__7054__auto__.push(arg__7055__auto___10515);
{
var G__10516 = cljs.core.next.call(null,seq__8607_10509__$1);
var G__10517 = null;
var G__10518 = 0;
var G__10519 = 0;
seq__8607_10499 = G__10516;
chunk__8608_10500 = G__10517;
count__8609_10501 = G__10518;
i__8610_10502 = G__10519;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.object.apply(null,a__7054__auto__);
};
var object = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return object__delegate.call(this,args__7053__auto__);};
object.cljs$lang$maxFixedArity = 0;
object.cljs$lang$applyTo = (function (arglist__10520){
var args__7053__auto__ = cljs.core.seq(arglist__10520);
return object__delegate(args__7053__auto__);
});
object.cljs$core$IFn$_invoke$arity$variadic = object__delegate;
return object;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.ol = (function() { 
var ol__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8615_10521 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8616_10522 = null;var count__8617_10523 = 0;var i__8618_10524 = 0;while(true){
if((i__8618_10524 < count__8617_10523))
{var arg__7055__auto___10525 = cljs.core._nth.call(null,chunk__8616_10522,i__8618_10524);a__7054__auto__.push(arg__7055__auto___10525);
{
var G__10526 = seq__8615_10521;
var G__10527 = chunk__8616_10522;
var G__10528 = count__8617_10523;
var G__10529 = (i__8618_10524 + 1);
seq__8615_10521 = G__10526;
chunk__8616_10522 = G__10527;
count__8617_10523 = G__10528;
i__8618_10524 = G__10529;
continue;
}
} else
{var temp__4092__auto___10530 = cljs.core.seq.call(null,seq__8615_10521);if(temp__4092__auto___10530)
{var seq__8615_10531__$1 = temp__4092__auto___10530;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8615_10531__$1))
{var c__5632__auto___10532 = cljs.core.chunk_first.call(null,seq__8615_10531__$1);{
var G__10533 = cljs.core.chunk_rest.call(null,seq__8615_10531__$1);
var G__10534 = c__5632__auto___10532;
var G__10535 = cljs.core.count.call(null,c__5632__auto___10532);
var G__10536 = 0;
seq__8615_10521 = G__10533;
chunk__8616_10522 = G__10534;
count__8617_10523 = G__10535;
i__8618_10524 = G__10536;
continue;
}
} else
{var arg__7055__auto___10537 = cljs.core.first.call(null,seq__8615_10531__$1);a__7054__auto__.push(arg__7055__auto___10537);
{
var G__10538 = cljs.core.next.call(null,seq__8615_10531__$1);
var G__10539 = null;
var G__10540 = 0;
var G__10541 = 0;
seq__8615_10521 = G__10538;
chunk__8616_10522 = G__10539;
count__8617_10523 = G__10540;
i__8618_10524 = G__10541;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.ol.apply(null,a__7054__auto__);
};
var ol = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ol__delegate.call(this,args__7053__auto__);};
ol.cljs$lang$maxFixedArity = 0;
ol.cljs$lang$applyTo = (function (arglist__10542){
var args__7053__auto__ = cljs.core.seq(arglist__10542);
return ol__delegate(args__7053__auto__);
});
ol.cljs$core$IFn$_invoke$arity$variadic = ol__delegate;
return ol;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.optgroup = (function() { 
var optgroup__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8623_10543 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8624_10544 = null;var count__8625_10545 = 0;var i__8626_10546 = 0;while(true){
if((i__8626_10546 < count__8625_10545))
{var arg__7055__auto___10547 = cljs.core._nth.call(null,chunk__8624_10544,i__8626_10546);a__7054__auto__.push(arg__7055__auto___10547);
{
var G__10548 = seq__8623_10543;
var G__10549 = chunk__8624_10544;
var G__10550 = count__8625_10545;
var G__10551 = (i__8626_10546 + 1);
seq__8623_10543 = G__10548;
chunk__8624_10544 = G__10549;
count__8625_10545 = G__10550;
i__8626_10546 = G__10551;
continue;
}
} else
{var temp__4092__auto___10552 = cljs.core.seq.call(null,seq__8623_10543);if(temp__4092__auto___10552)
{var seq__8623_10553__$1 = temp__4092__auto___10552;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8623_10553__$1))
{var c__5632__auto___10554 = cljs.core.chunk_first.call(null,seq__8623_10553__$1);{
var G__10555 = cljs.core.chunk_rest.call(null,seq__8623_10553__$1);
var G__10556 = c__5632__auto___10554;
var G__10557 = cljs.core.count.call(null,c__5632__auto___10554);
var G__10558 = 0;
seq__8623_10543 = G__10555;
chunk__8624_10544 = G__10556;
count__8625_10545 = G__10557;
i__8626_10546 = G__10558;
continue;
}
} else
{var arg__7055__auto___10559 = cljs.core.first.call(null,seq__8623_10553__$1);a__7054__auto__.push(arg__7055__auto___10559);
{
var G__10560 = cljs.core.next.call(null,seq__8623_10553__$1);
var G__10561 = null;
var G__10562 = 0;
var G__10563 = 0;
seq__8623_10543 = G__10560;
chunk__8624_10544 = G__10561;
count__8625_10545 = G__10562;
i__8626_10546 = G__10563;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.optgroup.apply(null,a__7054__auto__);
};
var optgroup = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return optgroup__delegate.call(this,args__7053__auto__);};
optgroup.cljs$lang$maxFixedArity = 0;
optgroup.cljs$lang$applyTo = (function (arglist__10564){
var args__7053__auto__ = cljs.core.seq(arglist__10564);
return optgroup__delegate(args__7053__auto__);
});
optgroup.cljs$core$IFn$_invoke$arity$variadic = optgroup__delegate;
return optgroup;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.option = (function() { 
var option__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8631_10565 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8632_10566 = null;var count__8633_10567 = 0;var i__8634_10568 = 0;while(true){
if((i__8634_10568 < count__8633_10567))
{var arg__7055__auto___10569 = cljs.core._nth.call(null,chunk__8632_10566,i__8634_10568);a__7054__auto__.push(arg__7055__auto___10569);
{
var G__10570 = seq__8631_10565;
var G__10571 = chunk__8632_10566;
var G__10572 = count__8633_10567;
var G__10573 = (i__8634_10568 + 1);
seq__8631_10565 = G__10570;
chunk__8632_10566 = G__10571;
count__8633_10567 = G__10572;
i__8634_10568 = G__10573;
continue;
}
} else
{var temp__4092__auto___10574 = cljs.core.seq.call(null,seq__8631_10565);if(temp__4092__auto___10574)
{var seq__8631_10575__$1 = temp__4092__auto___10574;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8631_10575__$1))
{var c__5632__auto___10576 = cljs.core.chunk_first.call(null,seq__8631_10575__$1);{
var G__10577 = cljs.core.chunk_rest.call(null,seq__8631_10575__$1);
var G__10578 = c__5632__auto___10576;
var G__10579 = cljs.core.count.call(null,c__5632__auto___10576);
var G__10580 = 0;
seq__8631_10565 = G__10577;
chunk__8632_10566 = G__10578;
count__8633_10567 = G__10579;
i__8634_10568 = G__10580;
continue;
}
} else
{var arg__7055__auto___10581 = cljs.core.first.call(null,seq__8631_10575__$1);a__7054__auto__.push(arg__7055__auto___10581);
{
var G__10582 = cljs.core.next.call(null,seq__8631_10575__$1);
var G__10583 = null;
var G__10584 = 0;
var G__10585 = 0;
seq__8631_10565 = G__10582;
chunk__8632_10566 = G__10583;
count__8633_10567 = G__10584;
i__8634_10568 = G__10585;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.option.apply(null,a__7054__auto__);
};
var option = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return option__delegate.call(this,args__7053__auto__);};
option.cljs$lang$maxFixedArity = 0;
option.cljs$lang$applyTo = (function (arglist__10586){
var args__7053__auto__ = cljs.core.seq(arglist__10586);
return option__delegate(args__7053__auto__);
});
option.cljs$core$IFn$_invoke$arity$variadic = option__delegate;
return option;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.output = (function() { 
var output__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8639_10587 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8640_10588 = null;var count__8641_10589 = 0;var i__8642_10590 = 0;while(true){
if((i__8642_10590 < count__8641_10589))
{var arg__7055__auto___10591 = cljs.core._nth.call(null,chunk__8640_10588,i__8642_10590);a__7054__auto__.push(arg__7055__auto___10591);
{
var G__10592 = seq__8639_10587;
var G__10593 = chunk__8640_10588;
var G__10594 = count__8641_10589;
var G__10595 = (i__8642_10590 + 1);
seq__8639_10587 = G__10592;
chunk__8640_10588 = G__10593;
count__8641_10589 = G__10594;
i__8642_10590 = G__10595;
continue;
}
} else
{var temp__4092__auto___10596 = cljs.core.seq.call(null,seq__8639_10587);if(temp__4092__auto___10596)
{var seq__8639_10597__$1 = temp__4092__auto___10596;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8639_10597__$1))
{var c__5632__auto___10598 = cljs.core.chunk_first.call(null,seq__8639_10597__$1);{
var G__10599 = cljs.core.chunk_rest.call(null,seq__8639_10597__$1);
var G__10600 = c__5632__auto___10598;
var G__10601 = cljs.core.count.call(null,c__5632__auto___10598);
var G__10602 = 0;
seq__8639_10587 = G__10599;
chunk__8640_10588 = G__10600;
count__8641_10589 = G__10601;
i__8642_10590 = G__10602;
continue;
}
} else
{var arg__7055__auto___10603 = cljs.core.first.call(null,seq__8639_10597__$1);a__7054__auto__.push(arg__7055__auto___10603);
{
var G__10604 = cljs.core.next.call(null,seq__8639_10597__$1);
var G__10605 = null;
var G__10606 = 0;
var G__10607 = 0;
seq__8639_10587 = G__10604;
chunk__8640_10588 = G__10605;
count__8641_10589 = G__10606;
i__8642_10590 = G__10607;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.output.apply(null,a__7054__auto__);
};
var output = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return output__delegate.call(this,args__7053__auto__);};
output.cljs$lang$maxFixedArity = 0;
output.cljs$lang$applyTo = (function (arglist__10608){
var args__7053__auto__ = cljs.core.seq(arglist__10608);
return output__delegate(args__7053__auto__);
});
output.cljs$core$IFn$_invoke$arity$variadic = output__delegate;
return output;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.p = (function() { 
var p__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8647_10609 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8648_10610 = null;var count__8649_10611 = 0;var i__8650_10612 = 0;while(true){
if((i__8650_10612 < count__8649_10611))
{var arg__7055__auto___10613 = cljs.core._nth.call(null,chunk__8648_10610,i__8650_10612);a__7054__auto__.push(arg__7055__auto___10613);
{
var G__10614 = seq__8647_10609;
var G__10615 = chunk__8648_10610;
var G__10616 = count__8649_10611;
var G__10617 = (i__8650_10612 + 1);
seq__8647_10609 = G__10614;
chunk__8648_10610 = G__10615;
count__8649_10611 = G__10616;
i__8650_10612 = G__10617;
continue;
}
} else
{var temp__4092__auto___10618 = cljs.core.seq.call(null,seq__8647_10609);if(temp__4092__auto___10618)
{var seq__8647_10619__$1 = temp__4092__auto___10618;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8647_10619__$1))
{var c__5632__auto___10620 = cljs.core.chunk_first.call(null,seq__8647_10619__$1);{
var G__10621 = cljs.core.chunk_rest.call(null,seq__8647_10619__$1);
var G__10622 = c__5632__auto___10620;
var G__10623 = cljs.core.count.call(null,c__5632__auto___10620);
var G__10624 = 0;
seq__8647_10609 = G__10621;
chunk__8648_10610 = G__10622;
count__8649_10611 = G__10623;
i__8650_10612 = G__10624;
continue;
}
} else
{var arg__7055__auto___10625 = cljs.core.first.call(null,seq__8647_10619__$1);a__7054__auto__.push(arg__7055__auto___10625);
{
var G__10626 = cljs.core.next.call(null,seq__8647_10619__$1);
var G__10627 = null;
var G__10628 = 0;
var G__10629 = 0;
seq__8647_10609 = G__10626;
chunk__8648_10610 = G__10627;
count__8649_10611 = G__10628;
i__8650_10612 = G__10629;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.p.apply(null,a__7054__auto__);
};
var p = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return p__delegate.call(this,args__7053__auto__);};
p.cljs$lang$maxFixedArity = 0;
p.cljs$lang$applyTo = (function (arglist__10630){
var args__7053__auto__ = cljs.core.seq(arglist__10630);
return p__delegate(args__7053__auto__);
});
p.cljs$core$IFn$_invoke$arity$variadic = p__delegate;
return p;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.param = (function() { 
var param__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8655_10631 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8656_10632 = null;var count__8657_10633 = 0;var i__8658_10634 = 0;while(true){
if((i__8658_10634 < count__8657_10633))
{var arg__7055__auto___10635 = cljs.core._nth.call(null,chunk__8656_10632,i__8658_10634);a__7054__auto__.push(arg__7055__auto___10635);
{
var G__10636 = seq__8655_10631;
var G__10637 = chunk__8656_10632;
var G__10638 = count__8657_10633;
var G__10639 = (i__8658_10634 + 1);
seq__8655_10631 = G__10636;
chunk__8656_10632 = G__10637;
count__8657_10633 = G__10638;
i__8658_10634 = G__10639;
continue;
}
} else
{var temp__4092__auto___10640 = cljs.core.seq.call(null,seq__8655_10631);if(temp__4092__auto___10640)
{var seq__8655_10641__$1 = temp__4092__auto___10640;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8655_10641__$1))
{var c__5632__auto___10642 = cljs.core.chunk_first.call(null,seq__8655_10641__$1);{
var G__10643 = cljs.core.chunk_rest.call(null,seq__8655_10641__$1);
var G__10644 = c__5632__auto___10642;
var G__10645 = cljs.core.count.call(null,c__5632__auto___10642);
var G__10646 = 0;
seq__8655_10631 = G__10643;
chunk__8656_10632 = G__10644;
count__8657_10633 = G__10645;
i__8658_10634 = G__10646;
continue;
}
} else
{var arg__7055__auto___10647 = cljs.core.first.call(null,seq__8655_10641__$1);a__7054__auto__.push(arg__7055__auto___10647);
{
var G__10648 = cljs.core.next.call(null,seq__8655_10641__$1);
var G__10649 = null;
var G__10650 = 0;
var G__10651 = 0;
seq__8655_10631 = G__10648;
chunk__8656_10632 = G__10649;
count__8657_10633 = G__10650;
i__8658_10634 = G__10651;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.param.apply(null,a__7054__auto__);
};
var param = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return param__delegate.call(this,args__7053__auto__);};
param.cljs$lang$maxFixedArity = 0;
param.cljs$lang$applyTo = (function (arglist__10652){
var args__7053__auto__ = cljs.core.seq(arglist__10652);
return param__delegate(args__7053__auto__);
});
param.cljs$core$IFn$_invoke$arity$variadic = param__delegate;
return param;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.pre = (function() { 
var pre__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8663_10653 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8664_10654 = null;var count__8665_10655 = 0;var i__8666_10656 = 0;while(true){
if((i__8666_10656 < count__8665_10655))
{var arg__7055__auto___10657 = cljs.core._nth.call(null,chunk__8664_10654,i__8666_10656);a__7054__auto__.push(arg__7055__auto___10657);
{
var G__10658 = seq__8663_10653;
var G__10659 = chunk__8664_10654;
var G__10660 = count__8665_10655;
var G__10661 = (i__8666_10656 + 1);
seq__8663_10653 = G__10658;
chunk__8664_10654 = G__10659;
count__8665_10655 = G__10660;
i__8666_10656 = G__10661;
continue;
}
} else
{var temp__4092__auto___10662 = cljs.core.seq.call(null,seq__8663_10653);if(temp__4092__auto___10662)
{var seq__8663_10663__$1 = temp__4092__auto___10662;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8663_10663__$1))
{var c__5632__auto___10664 = cljs.core.chunk_first.call(null,seq__8663_10663__$1);{
var G__10665 = cljs.core.chunk_rest.call(null,seq__8663_10663__$1);
var G__10666 = c__5632__auto___10664;
var G__10667 = cljs.core.count.call(null,c__5632__auto___10664);
var G__10668 = 0;
seq__8663_10653 = G__10665;
chunk__8664_10654 = G__10666;
count__8665_10655 = G__10667;
i__8666_10656 = G__10668;
continue;
}
} else
{var arg__7055__auto___10669 = cljs.core.first.call(null,seq__8663_10663__$1);a__7054__auto__.push(arg__7055__auto___10669);
{
var G__10670 = cljs.core.next.call(null,seq__8663_10663__$1);
var G__10671 = null;
var G__10672 = 0;
var G__10673 = 0;
seq__8663_10653 = G__10670;
chunk__8664_10654 = G__10671;
count__8665_10655 = G__10672;
i__8666_10656 = G__10673;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.pre.apply(null,a__7054__auto__);
};
var pre = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return pre__delegate.call(this,args__7053__auto__);};
pre.cljs$lang$maxFixedArity = 0;
pre.cljs$lang$applyTo = (function (arglist__10674){
var args__7053__auto__ = cljs.core.seq(arglist__10674);
return pre__delegate(args__7053__auto__);
});
pre.cljs$core$IFn$_invoke$arity$variadic = pre__delegate;
return pre;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.progress = (function() { 
var progress__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8671_10675 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8672_10676 = null;var count__8673_10677 = 0;var i__8674_10678 = 0;while(true){
if((i__8674_10678 < count__8673_10677))
{var arg__7055__auto___10679 = cljs.core._nth.call(null,chunk__8672_10676,i__8674_10678);a__7054__auto__.push(arg__7055__auto___10679);
{
var G__10680 = seq__8671_10675;
var G__10681 = chunk__8672_10676;
var G__10682 = count__8673_10677;
var G__10683 = (i__8674_10678 + 1);
seq__8671_10675 = G__10680;
chunk__8672_10676 = G__10681;
count__8673_10677 = G__10682;
i__8674_10678 = G__10683;
continue;
}
} else
{var temp__4092__auto___10684 = cljs.core.seq.call(null,seq__8671_10675);if(temp__4092__auto___10684)
{var seq__8671_10685__$1 = temp__4092__auto___10684;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8671_10685__$1))
{var c__5632__auto___10686 = cljs.core.chunk_first.call(null,seq__8671_10685__$1);{
var G__10687 = cljs.core.chunk_rest.call(null,seq__8671_10685__$1);
var G__10688 = c__5632__auto___10686;
var G__10689 = cljs.core.count.call(null,c__5632__auto___10686);
var G__10690 = 0;
seq__8671_10675 = G__10687;
chunk__8672_10676 = G__10688;
count__8673_10677 = G__10689;
i__8674_10678 = G__10690;
continue;
}
} else
{var arg__7055__auto___10691 = cljs.core.first.call(null,seq__8671_10685__$1);a__7054__auto__.push(arg__7055__auto___10691);
{
var G__10692 = cljs.core.next.call(null,seq__8671_10685__$1);
var G__10693 = null;
var G__10694 = 0;
var G__10695 = 0;
seq__8671_10675 = G__10692;
chunk__8672_10676 = G__10693;
count__8673_10677 = G__10694;
i__8674_10678 = G__10695;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.progress.apply(null,a__7054__auto__);
};
var progress = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return progress__delegate.call(this,args__7053__auto__);};
progress.cljs$lang$maxFixedArity = 0;
progress.cljs$lang$applyTo = (function (arglist__10696){
var args__7053__auto__ = cljs.core.seq(arglist__10696);
return progress__delegate(args__7053__auto__);
});
progress.cljs$core$IFn$_invoke$arity$variadic = progress__delegate;
return progress;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.q = (function() { 
var q__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8679_10697 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8680_10698 = null;var count__8681_10699 = 0;var i__8682_10700 = 0;while(true){
if((i__8682_10700 < count__8681_10699))
{var arg__7055__auto___10701 = cljs.core._nth.call(null,chunk__8680_10698,i__8682_10700);a__7054__auto__.push(arg__7055__auto___10701);
{
var G__10702 = seq__8679_10697;
var G__10703 = chunk__8680_10698;
var G__10704 = count__8681_10699;
var G__10705 = (i__8682_10700 + 1);
seq__8679_10697 = G__10702;
chunk__8680_10698 = G__10703;
count__8681_10699 = G__10704;
i__8682_10700 = G__10705;
continue;
}
} else
{var temp__4092__auto___10706 = cljs.core.seq.call(null,seq__8679_10697);if(temp__4092__auto___10706)
{var seq__8679_10707__$1 = temp__4092__auto___10706;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8679_10707__$1))
{var c__5632__auto___10708 = cljs.core.chunk_first.call(null,seq__8679_10707__$1);{
var G__10709 = cljs.core.chunk_rest.call(null,seq__8679_10707__$1);
var G__10710 = c__5632__auto___10708;
var G__10711 = cljs.core.count.call(null,c__5632__auto___10708);
var G__10712 = 0;
seq__8679_10697 = G__10709;
chunk__8680_10698 = G__10710;
count__8681_10699 = G__10711;
i__8682_10700 = G__10712;
continue;
}
} else
{var arg__7055__auto___10713 = cljs.core.first.call(null,seq__8679_10707__$1);a__7054__auto__.push(arg__7055__auto___10713);
{
var G__10714 = cljs.core.next.call(null,seq__8679_10707__$1);
var G__10715 = null;
var G__10716 = 0;
var G__10717 = 0;
seq__8679_10697 = G__10714;
chunk__8680_10698 = G__10715;
count__8681_10699 = G__10716;
i__8682_10700 = G__10717;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.q.apply(null,a__7054__auto__);
};
var q = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return q__delegate.call(this,args__7053__auto__);};
q.cljs$lang$maxFixedArity = 0;
q.cljs$lang$applyTo = (function (arglist__10718){
var args__7053__auto__ = cljs.core.seq(arglist__10718);
return q__delegate(args__7053__auto__);
});
q.cljs$core$IFn$_invoke$arity$variadic = q__delegate;
return q;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.rp = (function() { 
var rp__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8687_10719 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8688_10720 = null;var count__8689_10721 = 0;var i__8690_10722 = 0;while(true){
if((i__8690_10722 < count__8689_10721))
{var arg__7055__auto___10723 = cljs.core._nth.call(null,chunk__8688_10720,i__8690_10722);a__7054__auto__.push(arg__7055__auto___10723);
{
var G__10724 = seq__8687_10719;
var G__10725 = chunk__8688_10720;
var G__10726 = count__8689_10721;
var G__10727 = (i__8690_10722 + 1);
seq__8687_10719 = G__10724;
chunk__8688_10720 = G__10725;
count__8689_10721 = G__10726;
i__8690_10722 = G__10727;
continue;
}
} else
{var temp__4092__auto___10728 = cljs.core.seq.call(null,seq__8687_10719);if(temp__4092__auto___10728)
{var seq__8687_10729__$1 = temp__4092__auto___10728;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8687_10729__$1))
{var c__5632__auto___10730 = cljs.core.chunk_first.call(null,seq__8687_10729__$1);{
var G__10731 = cljs.core.chunk_rest.call(null,seq__8687_10729__$1);
var G__10732 = c__5632__auto___10730;
var G__10733 = cljs.core.count.call(null,c__5632__auto___10730);
var G__10734 = 0;
seq__8687_10719 = G__10731;
chunk__8688_10720 = G__10732;
count__8689_10721 = G__10733;
i__8690_10722 = G__10734;
continue;
}
} else
{var arg__7055__auto___10735 = cljs.core.first.call(null,seq__8687_10729__$1);a__7054__auto__.push(arg__7055__auto___10735);
{
var G__10736 = cljs.core.next.call(null,seq__8687_10729__$1);
var G__10737 = null;
var G__10738 = 0;
var G__10739 = 0;
seq__8687_10719 = G__10736;
chunk__8688_10720 = G__10737;
count__8689_10721 = G__10738;
i__8690_10722 = G__10739;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.rp.apply(null,a__7054__auto__);
};
var rp = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return rp__delegate.call(this,args__7053__auto__);};
rp.cljs$lang$maxFixedArity = 0;
rp.cljs$lang$applyTo = (function (arglist__10740){
var args__7053__auto__ = cljs.core.seq(arglist__10740);
return rp__delegate(args__7053__auto__);
});
rp.cljs$core$IFn$_invoke$arity$variadic = rp__delegate;
return rp;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.rt = (function() { 
var rt__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8695_10741 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8696_10742 = null;var count__8697_10743 = 0;var i__8698_10744 = 0;while(true){
if((i__8698_10744 < count__8697_10743))
{var arg__7055__auto___10745 = cljs.core._nth.call(null,chunk__8696_10742,i__8698_10744);a__7054__auto__.push(arg__7055__auto___10745);
{
var G__10746 = seq__8695_10741;
var G__10747 = chunk__8696_10742;
var G__10748 = count__8697_10743;
var G__10749 = (i__8698_10744 + 1);
seq__8695_10741 = G__10746;
chunk__8696_10742 = G__10747;
count__8697_10743 = G__10748;
i__8698_10744 = G__10749;
continue;
}
} else
{var temp__4092__auto___10750 = cljs.core.seq.call(null,seq__8695_10741);if(temp__4092__auto___10750)
{var seq__8695_10751__$1 = temp__4092__auto___10750;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8695_10751__$1))
{var c__5632__auto___10752 = cljs.core.chunk_first.call(null,seq__8695_10751__$1);{
var G__10753 = cljs.core.chunk_rest.call(null,seq__8695_10751__$1);
var G__10754 = c__5632__auto___10752;
var G__10755 = cljs.core.count.call(null,c__5632__auto___10752);
var G__10756 = 0;
seq__8695_10741 = G__10753;
chunk__8696_10742 = G__10754;
count__8697_10743 = G__10755;
i__8698_10744 = G__10756;
continue;
}
} else
{var arg__7055__auto___10757 = cljs.core.first.call(null,seq__8695_10751__$1);a__7054__auto__.push(arg__7055__auto___10757);
{
var G__10758 = cljs.core.next.call(null,seq__8695_10751__$1);
var G__10759 = null;
var G__10760 = 0;
var G__10761 = 0;
seq__8695_10741 = G__10758;
chunk__8696_10742 = G__10759;
count__8697_10743 = G__10760;
i__8698_10744 = G__10761;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.rt.apply(null,a__7054__auto__);
};
var rt = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return rt__delegate.call(this,args__7053__auto__);};
rt.cljs$lang$maxFixedArity = 0;
rt.cljs$lang$applyTo = (function (arglist__10762){
var args__7053__auto__ = cljs.core.seq(arglist__10762);
return rt__delegate(args__7053__auto__);
});
rt.cljs$core$IFn$_invoke$arity$variadic = rt__delegate;
return rt;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.ruby = (function() { 
var ruby__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8703_10763 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8704_10764 = null;var count__8705_10765 = 0;var i__8706_10766 = 0;while(true){
if((i__8706_10766 < count__8705_10765))
{var arg__7055__auto___10767 = cljs.core._nth.call(null,chunk__8704_10764,i__8706_10766);a__7054__auto__.push(arg__7055__auto___10767);
{
var G__10768 = seq__8703_10763;
var G__10769 = chunk__8704_10764;
var G__10770 = count__8705_10765;
var G__10771 = (i__8706_10766 + 1);
seq__8703_10763 = G__10768;
chunk__8704_10764 = G__10769;
count__8705_10765 = G__10770;
i__8706_10766 = G__10771;
continue;
}
} else
{var temp__4092__auto___10772 = cljs.core.seq.call(null,seq__8703_10763);if(temp__4092__auto___10772)
{var seq__8703_10773__$1 = temp__4092__auto___10772;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8703_10773__$1))
{var c__5632__auto___10774 = cljs.core.chunk_first.call(null,seq__8703_10773__$1);{
var G__10775 = cljs.core.chunk_rest.call(null,seq__8703_10773__$1);
var G__10776 = c__5632__auto___10774;
var G__10777 = cljs.core.count.call(null,c__5632__auto___10774);
var G__10778 = 0;
seq__8703_10763 = G__10775;
chunk__8704_10764 = G__10776;
count__8705_10765 = G__10777;
i__8706_10766 = G__10778;
continue;
}
} else
{var arg__7055__auto___10779 = cljs.core.first.call(null,seq__8703_10773__$1);a__7054__auto__.push(arg__7055__auto___10779);
{
var G__10780 = cljs.core.next.call(null,seq__8703_10773__$1);
var G__10781 = null;
var G__10782 = 0;
var G__10783 = 0;
seq__8703_10763 = G__10780;
chunk__8704_10764 = G__10781;
count__8705_10765 = G__10782;
i__8706_10766 = G__10783;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.ruby.apply(null,a__7054__auto__);
};
var ruby = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ruby__delegate.call(this,args__7053__auto__);};
ruby.cljs$lang$maxFixedArity = 0;
ruby.cljs$lang$applyTo = (function (arglist__10784){
var args__7053__auto__ = cljs.core.seq(arglist__10784);
return ruby__delegate(args__7053__auto__);
});
ruby.cljs$core$IFn$_invoke$arity$variadic = ruby__delegate;
return ruby;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.s = (function() { 
var s__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8711_10785 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8712_10786 = null;var count__8713_10787 = 0;var i__8714_10788 = 0;while(true){
if((i__8714_10788 < count__8713_10787))
{var arg__7055__auto___10789 = cljs.core._nth.call(null,chunk__8712_10786,i__8714_10788);a__7054__auto__.push(arg__7055__auto___10789);
{
var G__10790 = seq__8711_10785;
var G__10791 = chunk__8712_10786;
var G__10792 = count__8713_10787;
var G__10793 = (i__8714_10788 + 1);
seq__8711_10785 = G__10790;
chunk__8712_10786 = G__10791;
count__8713_10787 = G__10792;
i__8714_10788 = G__10793;
continue;
}
} else
{var temp__4092__auto___10794 = cljs.core.seq.call(null,seq__8711_10785);if(temp__4092__auto___10794)
{var seq__8711_10795__$1 = temp__4092__auto___10794;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8711_10795__$1))
{var c__5632__auto___10796 = cljs.core.chunk_first.call(null,seq__8711_10795__$1);{
var G__10797 = cljs.core.chunk_rest.call(null,seq__8711_10795__$1);
var G__10798 = c__5632__auto___10796;
var G__10799 = cljs.core.count.call(null,c__5632__auto___10796);
var G__10800 = 0;
seq__8711_10785 = G__10797;
chunk__8712_10786 = G__10798;
count__8713_10787 = G__10799;
i__8714_10788 = G__10800;
continue;
}
} else
{var arg__7055__auto___10801 = cljs.core.first.call(null,seq__8711_10795__$1);a__7054__auto__.push(arg__7055__auto___10801);
{
var G__10802 = cljs.core.next.call(null,seq__8711_10795__$1);
var G__10803 = null;
var G__10804 = 0;
var G__10805 = 0;
seq__8711_10785 = G__10802;
chunk__8712_10786 = G__10803;
count__8713_10787 = G__10804;
i__8714_10788 = G__10805;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.s.apply(null,a__7054__auto__);
};
var s = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return s__delegate.call(this,args__7053__auto__);};
s.cljs$lang$maxFixedArity = 0;
s.cljs$lang$applyTo = (function (arglist__10806){
var args__7053__auto__ = cljs.core.seq(arglist__10806);
return s__delegate(args__7053__auto__);
});
s.cljs$core$IFn$_invoke$arity$variadic = s__delegate;
return s;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.samp = (function() { 
var samp__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8719_10807 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8720_10808 = null;var count__8721_10809 = 0;var i__8722_10810 = 0;while(true){
if((i__8722_10810 < count__8721_10809))
{var arg__7055__auto___10811 = cljs.core._nth.call(null,chunk__8720_10808,i__8722_10810);a__7054__auto__.push(arg__7055__auto___10811);
{
var G__10812 = seq__8719_10807;
var G__10813 = chunk__8720_10808;
var G__10814 = count__8721_10809;
var G__10815 = (i__8722_10810 + 1);
seq__8719_10807 = G__10812;
chunk__8720_10808 = G__10813;
count__8721_10809 = G__10814;
i__8722_10810 = G__10815;
continue;
}
} else
{var temp__4092__auto___10816 = cljs.core.seq.call(null,seq__8719_10807);if(temp__4092__auto___10816)
{var seq__8719_10817__$1 = temp__4092__auto___10816;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8719_10817__$1))
{var c__5632__auto___10818 = cljs.core.chunk_first.call(null,seq__8719_10817__$1);{
var G__10819 = cljs.core.chunk_rest.call(null,seq__8719_10817__$1);
var G__10820 = c__5632__auto___10818;
var G__10821 = cljs.core.count.call(null,c__5632__auto___10818);
var G__10822 = 0;
seq__8719_10807 = G__10819;
chunk__8720_10808 = G__10820;
count__8721_10809 = G__10821;
i__8722_10810 = G__10822;
continue;
}
} else
{var arg__7055__auto___10823 = cljs.core.first.call(null,seq__8719_10817__$1);a__7054__auto__.push(arg__7055__auto___10823);
{
var G__10824 = cljs.core.next.call(null,seq__8719_10817__$1);
var G__10825 = null;
var G__10826 = 0;
var G__10827 = 0;
seq__8719_10807 = G__10824;
chunk__8720_10808 = G__10825;
count__8721_10809 = G__10826;
i__8722_10810 = G__10827;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.samp.apply(null,a__7054__auto__);
};
var samp = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return samp__delegate.call(this,args__7053__auto__);};
samp.cljs$lang$maxFixedArity = 0;
samp.cljs$lang$applyTo = (function (arglist__10828){
var args__7053__auto__ = cljs.core.seq(arglist__10828);
return samp__delegate(args__7053__auto__);
});
samp.cljs$core$IFn$_invoke$arity$variadic = samp__delegate;
return samp;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.script = (function() { 
var script__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8727_10829 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8728_10830 = null;var count__8729_10831 = 0;var i__8730_10832 = 0;while(true){
if((i__8730_10832 < count__8729_10831))
{var arg__7055__auto___10833 = cljs.core._nth.call(null,chunk__8728_10830,i__8730_10832);a__7054__auto__.push(arg__7055__auto___10833);
{
var G__10834 = seq__8727_10829;
var G__10835 = chunk__8728_10830;
var G__10836 = count__8729_10831;
var G__10837 = (i__8730_10832 + 1);
seq__8727_10829 = G__10834;
chunk__8728_10830 = G__10835;
count__8729_10831 = G__10836;
i__8730_10832 = G__10837;
continue;
}
} else
{var temp__4092__auto___10838 = cljs.core.seq.call(null,seq__8727_10829);if(temp__4092__auto___10838)
{var seq__8727_10839__$1 = temp__4092__auto___10838;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8727_10839__$1))
{var c__5632__auto___10840 = cljs.core.chunk_first.call(null,seq__8727_10839__$1);{
var G__10841 = cljs.core.chunk_rest.call(null,seq__8727_10839__$1);
var G__10842 = c__5632__auto___10840;
var G__10843 = cljs.core.count.call(null,c__5632__auto___10840);
var G__10844 = 0;
seq__8727_10829 = G__10841;
chunk__8728_10830 = G__10842;
count__8729_10831 = G__10843;
i__8730_10832 = G__10844;
continue;
}
} else
{var arg__7055__auto___10845 = cljs.core.first.call(null,seq__8727_10839__$1);a__7054__auto__.push(arg__7055__auto___10845);
{
var G__10846 = cljs.core.next.call(null,seq__8727_10839__$1);
var G__10847 = null;
var G__10848 = 0;
var G__10849 = 0;
seq__8727_10829 = G__10846;
chunk__8728_10830 = G__10847;
count__8729_10831 = G__10848;
i__8730_10832 = G__10849;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.script.apply(null,a__7054__auto__);
};
var script = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return script__delegate.call(this,args__7053__auto__);};
script.cljs$lang$maxFixedArity = 0;
script.cljs$lang$applyTo = (function (arglist__10850){
var args__7053__auto__ = cljs.core.seq(arglist__10850);
return script__delegate(args__7053__auto__);
});
script.cljs$core$IFn$_invoke$arity$variadic = script__delegate;
return script;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.section = (function() { 
var section__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8735_10851 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8736_10852 = null;var count__8737_10853 = 0;var i__8738_10854 = 0;while(true){
if((i__8738_10854 < count__8737_10853))
{var arg__7055__auto___10855 = cljs.core._nth.call(null,chunk__8736_10852,i__8738_10854);a__7054__auto__.push(arg__7055__auto___10855);
{
var G__10856 = seq__8735_10851;
var G__10857 = chunk__8736_10852;
var G__10858 = count__8737_10853;
var G__10859 = (i__8738_10854 + 1);
seq__8735_10851 = G__10856;
chunk__8736_10852 = G__10857;
count__8737_10853 = G__10858;
i__8738_10854 = G__10859;
continue;
}
} else
{var temp__4092__auto___10860 = cljs.core.seq.call(null,seq__8735_10851);if(temp__4092__auto___10860)
{var seq__8735_10861__$1 = temp__4092__auto___10860;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8735_10861__$1))
{var c__5632__auto___10862 = cljs.core.chunk_first.call(null,seq__8735_10861__$1);{
var G__10863 = cljs.core.chunk_rest.call(null,seq__8735_10861__$1);
var G__10864 = c__5632__auto___10862;
var G__10865 = cljs.core.count.call(null,c__5632__auto___10862);
var G__10866 = 0;
seq__8735_10851 = G__10863;
chunk__8736_10852 = G__10864;
count__8737_10853 = G__10865;
i__8738_10854 = G__10866;
continue;
}
} else
{var arg__7055__auto___10867 = cljs.core.first.call(null,seq__8735_10861__$1);a__7054__auto__.push(arg__7055__auto___10867);
{
var G__10868 = cljs.core.next.call(null,seq__8735_10861__$1);
var G__10869 = null;
var G__10870 = 0;
var G__10871 = 0;
seq__8735_10851 = G__10868;
chunk__8736_10852 = G__10869;
count__8737_10853 = G__10870;
i__8738_10854 = G__10871;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.section.apply(null,a__7054__auto__);
};
var section = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return section__delegate.call(this,args__7053__auto__);};
section.cljs$lang$maxFixedArity = 0;
section.cljs$lang$applyTo = (function (arglist__10872){
var args__7053__auto__ = cljs.core.seq(arglist__10872);
return section__delegate(args__7053__auto__);
});
section.cljs$core$IFn$_invoke$arity$variadic = section__delegate;
return section;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.select = (function() { 
var select__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8743_10873 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8744_10874 = null;var count__8745_10875 = 0;var i__8746_10876 = 0;while(true){
if((i__8746_10876 < count__8745_10875))
{var arg__7055__auto___10877 = cljs.core._nth.call(null,chunk__8744_10874,i__8746_10876);a__7054__auto__.push(arg__7055__auto___10877);
{
var G__10878 = seq__8743_10873;
var G__10879 = chunk__8744_10874;
var G__10880 = count__8745_10875;
var G__10881 = (i__8746_10876 + 1);
seq__8743_10873 = G__10878;
chunk__8744_10874 = G__10879;
count__8745_10875 = G__10880;
i__8746_10876 = G__10881;
continue;
}
} else
{var temp__4092__auto___10882 = cljs.core.seq.call(null,seq__8743_10873);if(temp__4092__auto___10882)
{var seq__8743_10883__$1 = temp__4092__auto___10882;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8743_10883__$1))
{var c__5632__auto___10884 = cljs.core.chunk_first.call(null,seq__8743_10883__$1);{
var G__10885 = cljs.core.chunk_rest.call(null,seq__8743_10883__$1);
var G__10886 = c__5632__auto___10884;
var G__10887 = cljs.core.count.call(null,c__5632__auto___10884);
var G__10888 = 0;
seq__8743_10873 = G__10885;
chunk__8744_10874 = G__10886;
count__8745_10875 = G__10887;
i__8746_10876 = G__10888;
continue;
}
} else
{var arg__7055__auto___10889 = cljs.core.first.call(null,seq__8743_10883__$1);a__7054__auto__.push(arg__7055__auto___10889);
{
var G__10890 = cljs.core.next.call(null,seq__8743_10883__$1);
var G__10891 = null;
var G__10892 = 0;
var G__10893 = 0;
seq__8743_10873 = G__10890;
chunk__8744_10874 = G__10891;
count__8745_10875 = G__10892;
i__8746_10876 = G__10893;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.select.apply(null,a__7054__auto__);
};
var select = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return select__delegate.call(this,args__7053__auto__);};
select.cljs$lang$maxFixedArity = 0;
select.cljs$lang$applyTo = (function (arglist__10894){
var args__7053__auto__ = cljs.core.seq(arglist__10894);
return select__delegate(args__7053__auto__);
});
select.cljs$core$IFn$_invoke$arity$variadic = select__delegate;
return select;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.small = (function() { 
var small__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8751_10895 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8752_10896 = null;var count__8753_10897 = 0;var i__8754_10898 = 0;while(true){
if((i__8754_10898 < count__8753_10897))
{var arg__7055__auto___10899 = cljs.core._nth.call(null,chunk__8752_10896,i__8754_10898);a__7054__auto__.push(arg__7055__auto___10899);
{
var G__10900 = seq__8751_10895;
var G__10901 = chunk__8752_10896;
var G__10902 = count__8753_10897;
var G__10903 = (i__8754_10898 + 1);
seq__8751_10895 = G__10900;
chunk__8752_10896 = G__10901;
count__8753_10897 = G__10902;
i__8754_10898 = G__10903;
continue;
}
} else
{var temp__4092__auto___10904 = cljs.core.seq.call(null,seq__8751_10895);if(temp__4092__auto___10904)
{var seq__8751_10905__$1 = temp__4092__auto___10904;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8751_10905__$1))
{var c__5632__auto___10906 = cljs.core.chunk_first.call(null,seq__8751_10905__$1);{
var G__10907 = cljs.core.chunk_rest.call(null,seq__8751_10905__$1);
var G__10908 = c__5632__auto___10906;
var G__10909 = cljs.core.count.call(null,c__5632__auto___10906);
var G__10910 = 0;
seq__8751_10895 = G__10907;
chunk__8752_10896 = G__10908;
count__8753_10897 = G__10909;
i__8754_10898 = G__10910;
continue;
}
} else
{var arg__7055__auto___10911 = cljs.core.first.call(null,seq__8751_10905__$1);a__7054__auto__.push(arg__7055__auto___10911);
{
var G__10912 = cljs.core.next.call(null,seq__8751_10905__$1);
var G__10913 = null;
var G__10914 = 0;
var G__10915 = 0;
seq__8751_10895 = G__10912;
chunk__8752_10896 = G__10913;
count__8753_10897 = G__10914;
i__8754_10898 = G__10915;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.small.apply(null,a__7054__auto__);
};
var small = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return small__delegate.call(this,args__7053__auto__);};
small.cljs$lang$maxFixedArity = 0;
small.cljs$lang$applyTo = (function (arglist__10916){
var args__7053__auto__ = cljs.core.seq(arglist__10916);
return small__delegate(args__7053__auto__);
});
small.cljs$core$IFn$_invoke$arity$variadic = small__delegate;
return small;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.source = (function() { 
var source__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8759_10917 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8760_10918 = null;var count__8761_10919 = 0;var i__8762_10920 = 0;while(true){
if((i__8762_10920 < count__8761_10919))
{var arg__7055__auto___10921 = cljs.core._nth.call(null,chunk__8760_10918,i__8762_10920);a__7054__auto__.push(arg__7055__auto___10921);
{
var G__10922 = seq__8759_10917;
var G__10923 = chunk__8760_10918;
var G__10924 = count__8761_10919;
var G__10925 = (i__8762_10920 + 1);
seq__8759_10917 = G__10922;
chunk__8760_10918 = G__10923;
count__8761_10919 = G__10924;
i__8762_10920 = G__10925;
continue;
}
} else
{var temp__4092__auto___10926 = cljs.core.seq.call(null,seq__8759_10917);if(temp__4092__auto___10926)
{var seq__8759_10927__$1 = temp__4092__auto___10926;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8759_10927__$1))
{var c__5632__auto___10928 = cljs.core.chunk_first.call(null,seq__8759_10927__$1);{
var G__10929 = cljs.core.chunk_rest.call(null,seq__8759_10927__$1);
var G__10930 = c__5632__auto___10928;
var G__10931 = cljs.core.count.call(null,c__5632__auto___10928);
var G__10932 = 0;
seq__8759_10917 = G__10929;
chunk__8760_10918 = G__10930;
count__8761_10919 = G__10931;
i__8762_10920 = G__10932;
continue;
}
} else
{var arg__7055__auto___10933 = cljs.core.first.call(null,seq__8759_10927__$1);a__7054__auto__.push(arg__7055__auto___10933);
{
var G__10934 = cljs.core.next.call(null,seq__8759_10927__$1);
var G__10935 = null;
var G__10936 = 0;
var G__10937 = 0;
seq__8759_10917 = G__10934;
chunk__8760_10918 = G__10935;
count__8761_10919 = G__10936;
i__8762_10920 = G__10937;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.source.apply(null,a__7054__auto__);
};
var source = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return source__delegate.call(this,args__7053__auto__);};
source.cljs$lang$maxFixedArity = 0;
source.cljs$lang$applyTo = (function (arglist__10938){
var args__7053__auto__ = cljs.core.seq(arglist__10938);
return source__delegate(args__7053__auto__);
});
source.cljs$core$IFn$_invoke$arity$variadic = source__delegate;
return source;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.span = (function() { 
var span__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8767_10939 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8768_10940 = null;var count__8769_10941 = 0;var i__8770_10942 = 0;while(true){
if((i__8770_10942 < count__8769_10941))
{var arg__7055__auto___10943 = cljs.core._nth.call(null,chunk__8768_10940,i__8770_10942);a__7054__auto__.push(arg__7055__auto___10943);
{
var G__10944 = seq__8767_10939;
var G__10945 = chunk__8768_10940;
var G__10946 = count__8769_10941;
var G__10947 = (i__8770_10942 + 1);
seq__8767_10939 = G__10944;
chunk__8768_10940 = G__10945;
count__8769_10941 = G__10946;
i__8770_10942 = G__10947;
continue;
}
} else
{var temp__4092__auto___10948 = cljs.core.seq.call(null,seq__8767_10939);if(temp__4092__auto___10948)
{var seq__8767_10949__$1 = temp__4092__auto___10948;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8767_10949__$1))
{var c__5632__auto___10950 = cljs.core.chunk_first.call(null,seq__8767_10949__$1);{
var G__10951 = cljs.core.chunk_rest.call(null,seq__8767_10949__$1);
var G__10952 = c__5632__auto___10950;
var G__10953 = cljs.core.count.call(null,c__5632__auto___10950);
var G__10954 = 0;
seq__8767_10939 = G__10951;
chunk__8768_10940 = G__10952;
count__8769_10941 = G__10953;
i__8770_10942 = G__10954;
continue;
}
} else
{var arg__7055__auto___10955 = cljs.core.first.call(null,seq__8767_10949__$1);a__7054__auto__.push(arg__7055__auto___10955);
{
var G__10956 = cljs.core.next.call(null,seq__8767_10949__$1);
var G__10957 = null;
var G__10958 = 0;
var G__10959 = 0;
seq__8767_10939 = G__10956;
chunk__8768_10940 = G__10957;
count__8769_10941 = G__10958;
i__8770_10942 = G__10959;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.span.apply(null,a__7054__auto__);
};
var span = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return span__delegate.call(this,args__7053__auto__);};
span.cljs$lang$maxFixedArity = 0;
span.cljs$lang$applyTo = (function (arglist__10960){
var args__7053__auto__ = cljs.core.seq(arglist__10960);
return span__delegate(args__7053__auto__);
});
span.cljs$core$IFn$_invoke$arity$variadic = span__delegate;
return span;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.strong = (function() { 
var strong__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8775_10961 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8776_10962 = null;var count__8777_10963 = 0;var i__8778_10964 = 0;while(true){
if((i__8778_10964 < count__8777_10963))
{var arg__7055__auto___10965 = cljs.core._nth.call(null,chunk__8776_10962,i__8778_10964);a__7054__auto__.push(arg__7055__auto___10965);
{
var G__10966 = seq__8775_10961;
var G__10967 = chunk__8776_10962;
var G__10968 = count__8777_10963;
var G__10969 = (i__8778_10964 + 1);
seq__8775_10961 = G__10966;
chunk__8776_10962 = G__10967;
count__8777_10963 = G__10968;
i__8778_10964 = G__10969;
continue;
}
} else
{var temp__4092__auto___10970 = cljs.core.seq.call(null,seq__8775_10961);if(temp__4092__auto___10970)
{var seq__8775_10971__$1 = temp__4092__auto___10970;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8775_10971__$1))
{var c__5632__auto___10972 = cljs.core.chunk_first.call(null,seq__8775_10971__$1);{
var G__10973 = cljs.core.chunk_rest.call(null,seq__8775_10971__$1);
var G__10974 = c__5632__auto___10972;
var G__10975 = cljs.core.count.call(null,c__5632__auto___10972);
var G__10976 = 0;
seq__8775_10961 = G__10973;
chunk__8776_10962 = G__10974;
count__8777_10963 = G__10975;
i__8778_10964 = G__10976;
continue;
}
} else
{var arg__7055__auto___10977 = cljs.core.first.call(null,seq__8775_10971__$1);a__7054__auto__.push(arg__7055__auto___10977);
{
var G__10978 = cljs.core.next.call(null,seq__8775_10971__$1);
var G__10979 = null;
var G__10980 = 0;
var G__10981 = 0;
seq__8775_10961 = G__10978;
chunk__8776_10962 = G__10979;
count__8777_10963 = G__10980;
i__8778_10964 = G__10981;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.strong.apply(null,a__7054__auto__);
};
var strong = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return strong__delegate.call(this,args__7053__auto__);};
strong.cljs$lang$maxFixedArity = 0;
strong.cljs$lang$applyTo = (function (arglist__10982){
var args__7053__auto__ = cljs.core.seq(arglist__10982);
return strong__delegate(args__7053__auto__);
});
strong.cljs$core$IFn$_invoke$arity$variadic = strong__delegate;
return strong;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.style = (function() { 
var style__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8783_10983 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8784_10984 = null;var count__8785_10985 = 0;var i__8786_10986 = 0;while(true){
if((i__8786_10986 < count__8785_10985))
{var arg__7055__auto___10987 = cljs.core._nth.call(null,chunk__8784_10984,i__8786_10986);a__7054__auto__.push(arg__7055__auto___10987);
{
var G__10988 = seq__8783_10983;
var G__10989 = chunk__8784_10984;
var G__10990 = count__8785_10985;
var G__10991 = (i__8786_10986 + 1);
seq__8783_10983 = G__10988;
chunk__8784_10984 = G__10989;
count__8785_10985 = G__10990;
i__8786_10986 = G__10991;
continue;
}
} else
{var temp__4092__auto___10992 = cljs.core.seq.call(null,seq__8783_10983);if(temp__4092__auto___10992)
{var seq__8783_10993__$1 = temp__4092__auto___10992;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8783_10993__$1))
{var c__5632__auto___10994 = cljs.core.chunk_first.call(null,seq__8783_10993__$1);{
var G__10995 = cljs.core.chunk_rest.call(null,seq__8783_10993__$1);
var G__10996 = c__5632__auto___10994;
var G__10997 = cljs.core.count.call(null,c__5632__auto___10994);
var G__10998 = 0;
seq__8783_10983 = G__10995;
chunk__8784_10984 = G__10996;
count__8785_10985 = G__10997;
i__8786_10986 = G__10998;
continue;
}
} else
{var arg__7055__auto___10999 = cljs.core.first.call(null,seq__8783_10993__$1);a__7054__auto__.push(arg__7055__auto___10999);
{
var G__11000 = cljs.core.next.call(null,seq__8783_10993__$1);
var G__11001 = null;
var G__11002 = 0;
var G__11003 = 0;
seq__8783_10983 = G__11000;
chunk__8784_10984 = G__11001;
count__8785_10985 = G__11002;
i__8786_10986 = G__11003;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.style.apply(null,a__7054__auto__);
};
var style = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return style__delegate.call(this,args__7053__auto__);};
style.cljs$lang$maxFixedArity = 0;
style.cljs$lang$applyTo = (function (arglist__11004){
var args__7053__auto__ = cljs.core.seq(arglist__11004);
return style__delegate(args__7053__auto__);
});
style.cljs$core$IFn$_invoke$arity$variadic = style__delegate;
return style;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.sub = (function() { 
var sub__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8791_11005 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8792_11006 = null;var count__8793_11007 = 0;var i__8794_11008 = 0;while(true){
if((i__8794_11008 < count__8793_11007))
{var arg__7055__auto___11009 = cljs.core._nth.call(null,chunk__8792_11006,i__8794_11008);a__7054__auto__.push(arg__7055__auto___11009);
{
var G__11010 = seq__8791_11005;
var G__11011 = chunk__8792_11006;
var G__11012 = count__8793_11007;
var G__11013 = (i__8794_11008 + 1);
seq__8791_11005 = G__11010;
chunk__8792_11006 = G__11011;
count__8793_11007 = G__11012;
i__8794_11008 = G__11013;
continue;
}
} else
{var temp__4092__auto___11014 = cljs.core.seq.call(null,seq__8791_11005);if(temp__4092__auto___11014)
{var seq__8791_11015__$1 = temp__4092__auto___11014;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8791_11015__$1))
{var c__5632__auto___11016 = cljs.core.chunk_first.call(null,seq__8791_11015__$1);{
var G__11017 = cljs.core.chunk_rest.call(null,seq__8791_11015__$1);
var G__11018 = c__5632__auto___11016;
var G__11019 = cljs.core.count.call(null,c__5632__auto___11016);
var G__11020 = 0;
seq__8791_11005 = G__11017;
chunk__8792_11006 = G__11018;
count__8793_11007 = G__11019;
i__8794_11008 = G__11020;
continue;
}
} else
{var arg__7055__auto___11021 = cljs.core.first.call(null,seq__8791_11015__$1);a__7054__auto__.push(arg__7055__auto___11021);
{
var G__11022 = cljs.core.next.call(null,seq__8791_11015__$1);
var G__11023 = null;
var G__11024 = 0;
var G__11025 = 0;
seq__8791_11005 = G__11022;
chunk__8792_11006 = G__11023;
count__8793_11007 = G__11024;
i__8794_11008 = G__11025;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.sub.apply(null,a__7054__auto__);
};
var sub = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return sub__delegate.call(this,args__7053__auto__);};
sub.cljs$lang$maxFixedArity = 0;
sub.cljs$lang$applyTo = (function (arglist__11026){
var args__7053__auto__ = cljs.core.seq(arglist__11026);
return sub__delegate(args__7053__auto__);
});
sub.cljs$core$IFn$_invoke$arity$variadic = sub__delegate;
return sub;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.summary = (function() { 
var summary__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8799_11027 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8800_11028 = null;var count__8801_11029 = 0;var i__8802_11030 = 0;while(true){
if((i__8802_11030 < count__8801_11029))
{var arg__7055__auto___11031 = cljs.core._nth.call(null,chunk__8800_11028,i__8802_11030);a__7054__auto__.push(arg__7055__auto___11031);
{
var G__11032 = seq__8799_11027;
var G__11033 = chunk__8800_11028;
var G__11034 = count__8801_11029;
var G__11035 = (i__8802_11030 + 1);
seq__8799_11027 = G__11032;
chunk__8800_11028 = G__11033;
count__8801_11029 = G__11034;
i__8802_11030 = G__11035;
continue;
}
} else
{var temp__4092__auto___11036 = cljs.core.seq.call(null,seq__8799_11027);if(temp__4092__auto___11036)
{var seq__8799_11037__$1 = temp__4092__auto___11036;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8799_11037__$1))
{var c__5632__auto___11038 = cljs.core.chunk_first.call(null,seq__8799_11037__$1);{
var G__11039 = cljs.core.chunk_rest.call(null,seq__8799_11037__$1);
var G__11040 = c__5632__auto___11038;
var G__11041 = cljs.core.count.call(null,c__5632__auto___11038);
var G__11042 = 0;
seq__8799_11027 = G__11039;
chunk__8800_11028 = G__11040;
count__8801_11029 = G__11041;
i__8802_11030 = G__11042;
continue;
}
} else
{var arg__7055__auto___11043 = cljs.core.first.call(null,seq__8799_11037__$1);a__7054__auto__.push(arg__7055__auto___11043);
{
var G__11044 = cljs.core.next.call(null,seq__8799_11037__$1);
var G__11045 = null;
var G__11046 = 0;
var G__11047 = 0;
seq__8799_11027 = G__11044;
chunk__8800_11028 = G__11045;
count__8801_11029 = G__11046;
i__8802_11030 = G__11047;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.summary.apply(null,a__7054__auto__);
};
var summary = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return summary__delegate.call(this,args__7053__auto__);};
summary.cljs$lang$maxFixedArity = 0;
summary.cljs$lang$applyTo = (function (arglist__11048){
var args__7053__auto__ = cljs.core.seq(arglist__11048);
return summary__delegate(args__7053__auto__);
});
summary.cljs$core$IFn$_invoke$arity$variadic = summary__delegate;
return summary;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.sup = (function() { 
var sup__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8807_11049 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8808_11050 = null;var count__8809_11051 = 0;var i__8810_11052 = 0;while(true){
if((i__8810_11052 < count__8809_11051))
{var arg__7055__auto___11053 = cljs.core._nth.call(null,chunk__8808_11050,i__8810_11052);a__7054__auto__.push(arg__7055__auto___11053);
{
var G__11054 = seq__8807_11049;
var G__11055 = chunk__8808_11050;
var G__11056 = count__8809_11051;
var G__11057 = (i__8810_11052 + 1);
seq__8807_11049 = G__11054;
chunk__8808_11050 = G__11055;
count__8809_11051 = G__11056;
i__8810_11052 = G__11057;
continue;
}
} else
{var temp__4092__auto___11058 = cljs.core.seq.call(null,seq__8807_11049);if(temp__4092__auto___11058)
{var seq__8807_11059__$1 = temp__4092__auto___11058;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8807_11059__$1))
{var c__5632__auto___11060 = cljs.core.chunk_first.call(null,seq__8807_11059__$1);{
var G__11061 = cljs.core.chunk_rest.call(null,seq__8807_11059__$1);
var G__11062 = c__5632__auto___11060;
var G__11063 = cljs.core.count.call(null,c__5632__auto___11060);
var G__11064 = 0;
seq__8807_11049 = G__11061;
chunk__8808_11050 = G__11062;
count__8809_11051 = G__11063;
i__8810_11052 = G__11064;
continue;
}
} else
{var arg__7055__auto___11065 = cljs.core.first.call(null,seq__8807_11059__$1);a__7054__auto__.push(arg__7055__auto___11065);
{
var G__11066 = cljs.core.next.call(null,seq__8807_11059__$1);
var G__11067 = null;
var G__11068 = 0;
var G__11069 = 0;
seq__8807_11049 = G__11066;
chunk__8808_11050 = G__11067;
count__8809_11051 = G__11068;
i__8810_11052 = G__11069;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.sup.apply(null,a__7054__auto__);
};
var sup = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return sup__delegate.call(this,args__7053__auto__);};
sup.cljs$lang$maxFixedArity = 0;
sup.cljs$lang$applyTo = (function (arglist__11070){
var args__7053__auto__ = cljs.core.seq(arglist__11070);
return sup__delegate(args__7053__auto__);
});
sup.cljs$core$IFn$_invoke$arity$variadic = sup__delegate;
return sup;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.table = (function() { 
var table__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8815_11071 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8816_11072 = null;var count__8817_11073 = 0;var i__8818_11074 = 0;while(true){
if((i__8818_11074 < count__8817_11073))
{var arg__7055__auto___11075 = cljs.core._nth.call(null,chunk__8816_11072,i__8818_11074);a__7054__auto__.push(arg__7055__auto___11075);
{
var G__11076 = seq__8815_11071;
var G__11077 = chunk__8816_11072;
var G__11078 = count__8817_11073;
var G__11079 = (i__8818_11074 + 1);
seq__8815_11071 = G__11076;
chunk__8816_11072 = G__11077;
count__8817_11073 = G__11078;
i__8818_11074 = G__11079;
continue;
}
} else
{var temp__4092__auto___11080 = cljs.core.seq.call(null,seq__8815_11071);if(temp__4092__auto___11080)
{var seq__8815_11081__$1 = temp__4092__auto___11080;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8815_11081__$1))
{var c__5632__auto___11082 = cljs.core.chunk_first.call(null,seq__8815_11081__$1);{
var G__11083 = cljs.core.chunk_rest.call(null,seq__8815_11081__$1);
var G__11084 = c__5632__auto___11082;
var G__11085 = cljs.core.count.call(null,c__5632__auto___11082);
var G__11086 = 0;
seq__8815_11071 = G__11083;
chunk__8816_11072 = G__11084;
count__8817_11073 = G__11085;
i__8818_11074 = G__11086;
continue;
}
} else
{var arg__7055__auto___11087 = cljs.core.first.call(null,seq__8815_11081__$1);a__7054__auto__.push(arg__7055__auto___11087);
{
var G__11088 = cljs.core.next.call(null,seq__8815_11081__$1);
var G__11089 = null;
var G__11090 = 0;
var G__11091 = 0;
seq__8815_11071 = G__11088;
chunk__8816_11072 = G__11089;
count__8817_11073 = G__11090;
i__8818_11074 = G__11091;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.table.apply(null,a__7054__auto__);
};
var table = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return table__delegate.call(this,args__7053__auto__);};
table.cljs$lang$maxFixedArity = 0;
table.cljs$lang$applyTo = (function (arglist__11092){
var args__7053__auto__ = cljs.core.seq(arglist__11092);
return table__delegate(args__7053__auto__);
});
table.cljs$core$IFn$_invoke$arity$variadic = table__delegate;
return table;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.tbody = (function() { 
var tbody__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8823_11093 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8824_11094 = null;var count__8825_11095 = 0;var i__8826_11096 = 0;while(true){
if((i__8826_11096 < count__8825_11095))
{var arg__7055__auto___11097 = cljs.core._nth.call(null,chunk__8824_11094,i__8826_11096);a__7054__auto__.push(arg__7055__auto___11097);
{
var G__11098 = seq__8823_11093;
var G__11099 = chunk__8824_11094;
var G__11100 = count__8825_11095;
var G__11101 = (i__8826_11096 + 1);
seq__8823_11093 = G__11098;
chunk__8824_11094 = G__11099;
count__8825_11095 = G__11100;
i__8826_11096 = G__11101;
continue;
}
} else
{var temp__4092__auto___11102 = cljs.core.seq.call(null,seq__8823_11093);if(temp__4092__auto___11102)
{var seq__8823_11103__$1 = temp__4092__auto___11102;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8823_11103__$1))
{var c__5632__auto___11104 = cljs.core.chunk_first.call(null,seq__8823_11103__$1);{
var G__11105 = cljs.core.chunk_rest.call(null,seq__8823_11103__$1);
var G__11106 = c__5632__auto___11104;
var G__11107 = cljs.core.count.call(null,c__5632__auto___11104);
var G__11108 = 0;
seq__8823_11093 = G__11105;
chunk__8824_11094 = G__11106;
count__8825_11095 = G__11107;
i__8826_11096 = G__11108;
continue;
}
} else
{var arg__7055__auto___11109 = cljs.core.first.call(null,seq__8823_11103__$1);a__7054__auto__.push(arg__7055__auto___11109);
{
var G__11110 = cljs.core.next.call(null,seq__8823_11103__$1);
var G__11111 = null;
var G__11112 = 0;
var G__11113 = 0;
seq__8823_11093 = G__11110;
chunk__8824_11094 = G__11111;
count__8825_11095 = G__11112;
i__8826_11096 = G__11113;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.tbody.apply(null,a__7054__auto__);
};
var tbody = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return tbody__delegate.call(this,args__7053__auto__);};
tbody.cljs$lang$maxFixedArity = 0;
tbody.cljs$lang$applyTo = (function (arglist__11114){
var args__7053__auto__ = cljs.core.seq(arglist__11114);
return tbody__delegate(args__7053__auto__);
});
tbody.cljs$core$IFn$_invoke$arity$variadic = tbody__delegate;
return tbody;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.td = (function() { 
var td__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8831_11115 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8832_11116 = null;var count__8833_11117 = 0;var i__8834_11118 = 0;while(true){
if((i__8834_11118 < count__8833_11117))
{var arg__7055__auto___11119 = cljs.core._nth.call(null,chunk__8832_11116,i__8834_11118);a__7054__auto__.push(arg__7055__auto___11119);
{
var G__11120 = seq__8831_11115;
var G__11121 = chunk__8832_11116;
var G__11122 = count__8833_11117;
var G__11123 = (i__8834_11118 + 1);
seq__8831_11115 = G__11120;
chunk__8832_11116 = G__11121;
count__8833_11117 = G__11122;
i__8834_11118 = G__11123;
continue;
}
} else
{var temp__4092__auto___11124 = cljs.core.seq.call(null,seq__8831_11115);if(temp__4092__auto___11124)
{var seq__8831_11125__$1 = temp__4092__auto___11124;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8831_11125__$1))
{var c__5632__auto___11126 = cljs.core.chunk_first.call(null,seq__8831_11125__$1);{
var G__11127 = cljs.core.chunk_rest.call(null,seq__8831_11125__$1);
var G__11128 = c__5632__auto___11126;
var G__11129 = cljs.core.count.call(null,c__5632__auto___11126);
var G__11130 = 0;
seq__8831_11115 = G__11127;
chunk__8832_11116 = G__11128;
count__8833_11117 = G__11129;
i__8834_11118 = G__11130;
continue;
}
} else
{var arg__7055__auto___11131 = cljs.core.first.call(null,seq__8831_11125__$1);a__7054__auto__.push(arg__7055__auto___11131);
{
var G__11132 = cljs.core.next.call(null,seq__8831_11125__$1);
var G__11133 = null;
var G__11134 = 0;
var G__11135 = 0;
seq__8831_11115 = G__11132;
chunk__8832_11116 = G__11133;
count__8833_11117 = G__11134;
i__8834_11118 = G__11135;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.td.apply(null,a__7054__auto__);
};
var td = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return td__delegate.call(this,args__7053__auto__);};
td.cljs$lang$maxFixedArity = 0;
td.cljs$lang$applyTo = (function (arglist__11136){
var args__7053__auto__ = cljs.core.seq(arglist__11136);
return td__delegate(args__7053__auto__);
});
td.cljs$core$IFn$_invoke$arity$variadic = td__delegate;
return td;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.textarea = (function() { 
var textarea__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8839_11137 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8840_11138 = null;var count__8841_11139 = 0;var i__8842_11140 = 0;while(true){
if((i__8842_11140 < count__8841_11139))
{var arg__7055__auto___11141 = cljs.core._nth.call(null,chunk__8840_11138,i__8842_11140);a__7054__auto__.push(arg__7055__auto___11141);
{
var G__11142 = seq__8839_11137;
var G__11143 = chunk__8840_11138;
var G__11144 = count__8841_11139;
var G__11145 = (i__8842_11140 + 1);
seq__8839_11137 = G__11142;
chunk__8840_11138 = G__11143;
count__8841_11139 = G__11144;
i__8842_11140 = G__11145;
continue;
}
} else
{var temp__4092__auto___11146 = cljs.core.seq.call(null,seq__8839_11137);if(temp__4092__auto___11146)
{var seq__8839_11147__$1 = temp__4092__auto___11146;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8839_11147__$1))
{var c__5632__auto___11148 = cljs.core.chunk_first.call(null,seq__8839_11147__$1);{
var G__11149 = cljs.core.chunk_rest.call(null,seq__8839_11147__$1);
var G__11150 = c__5632__auto___11148;
var G__11151 = cljs.core.count.call(null,c__5632__auto___11148);
var G__11152 = 0;
seq__8839_11137 = G__11149;
chunk__8840_11138 = G__11150;
count__8841_11139 = G__11151;
i__8842_11140 = G__11152;
continue;
}
} else
{var arg__7055__auto___11153 = cljs.core.first.call(null,seq__8839_11147__$1);a__7054__auto__.push(arg__7055__auto___11153);
{
var G__11154 = cljs.core.next.call(null,seq__8839_11147__$1);
var G__11155 = null;
var G__11156 = 0;
var G__11157 = 0;
seq__8839_11137 = G__11154;
chunk__8840_11138 = G__11155;
count__8841_11139 = G__11156;
i__8842_11140 = G__11157;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.textarea.apply(null,a__7054__auto__);
};
var textarea = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return textarea__delegate.call(this,args__7053__auto__);};
textarea.cljs$lang$maxFixedArity = 0;
textarea.cljs$lang$applyTo = (function (arglist__11158){
var args__7053__auto__ = cljs.core.seq(arglist__11158);
return textarea__delegate(args__7053__auto__);
});
textarea.cljs$core$IFn$_invoke$arity$variadic = textarea__delegate;
return textarea;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.tfoot = (function() { 
var tfoot__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8847_11159 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8848_11160 = null;var count__8849_11161 = 0;var i__8850_11162 = 0;while(true){
if((i__8850_11162 < count__8849_11161))
{var arg__7055__auto___11163 = cljs.core._nth.call(null,chunk__8848_11160,i__8850_11162);a__7054__auto__.push(arg__7055__auto___11163);
{
var G__11164 = seq__8847_11159;
var G__11165 = chunk__8848_11160;
var G__11166 = count__8849_11161;
var G__11167 = (i__8850_11162 + 1);
seq__8847_11159 = G__11164;
chunk__8848_11160 = G__11165;
count__8849_11161 = G__11166;
i__8850_11162 = G__11167;
continue;
}
} else
{var temp__4092__auto___11168 = cljs.core.seq.call(null,seq__8847_11159);if(temp__4092__auto___11168)
{var seq__8847_11169__$1 = temp__4092__auto___11168;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8847_11169__$1))
{var c__5632__auto___11170 = cljs.core.chunk_first.call(null,seq__8847_11169__$1);{
var G__11171 = cljs.core.chunk_rest.call(null,seq__8847_11169__$1);
var G__11172 = c__5632__auto___11170;
var G__11173 = cljs.core.count.call(null,c__5632__auto___11170);
var G__11174 = 0;
seq__8847_11159 = G__11171;
chunk__8848_11160 = G__11172;
count__8849_11161 = G__11173;
i__8850_11162 = G__11174;
continue;
}
} else
{var arg__7055__auto___11175 = cljs.core.first.call(null,seq__8847_11169__$1);a__7054__auto__.push(arg__7055__auto___11175);
{
var G__11176 = cljs.core.next.call(null,seq__8847_11169__$1);
var G__11177 = null;
var G__11178 = 0;
var G__11179 = 0;
seq__8847_11159 = G__11176;
chunk__8848_11160 = G__11177;
count__8849_11161 = G__11178;
i__8850_11162 = G__11179;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.tfoot.apply(null,a__7054__auto__);
};
var tfoot = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return tfoot__delegate.call(this,args__7053__auto__);};
tfoot.cljs$lang$maxFixedArity = 0;
tfoot.cljs$lang$applyTo = (function (arglist__11180){
var args__7053__auto__ = cljs.core.seq(arglist__11180);
return tfoot__delegate(args__7053__auto__);
});
tfoot.cljs$core$IFn$_invoke$arity$variadic = tfoot__delegate;
return tfoot;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.th = (function() { 
var th__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8855_11181 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8856_11182 = null;var count__8857_11183 = 0;var i__8858_11184 = 0;while(true){
if((i__8858_11184 < count__8857_11183))
{var arg__7055__auto___11185 = cljs.core._nth.call(null,chunk__8856_11182,i__8858_11184);a__7054__auto__.push(arg__7055__auto___11185);
{
var G__11186 = seq__8855_11181;
var G__11187 = chunk__8856_11182;
var G__11188 = count__8857_11183;
var G__11189 = (i__8858_11184 + 1);
seq__8855_11181 = G__11186;
chunk__8856_11182 = G__11187;
count__8857_11183 = G__11188;
i__8858_11184 = G__11189;
continue;
}
} else
{var temp__4092__auto___11190 = cljs.core.seq.call(null,seq__8855_11181);if(temp__4092__auto___11190)
{var seq__8855_11191__$1 = temp__4092__auto___11190;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8855_11191__$1))
{var c__5632__auto___11192 = cljs.core.chunk_first.call(null,seq__8855_11191__$1);{
var G__11193 = cljs.core.chunk_rest.call(null,seq__8855_11191__$1);
var G__11194 = c__5632__auto___11192;
var G__11195 = cljs.core.count.call(null,c__5632__auto___11192);
var G__11196 = 0;
seq__8855_11181 = G__11193;
chunk__8856_11182 = G__11194;
count__8857_11183 = G__11195;
i__8858_11184 = G__11196;
continue;
}
} else
{var arg__7055__auto___11197 = cljs.core.first.call(null,seq__8855_11191__$1);a__7054__auto__.push(arg__7055__auto___11197);
{
var G__11198 = cljs.core.next.call(null,seq__8855_11191__$1);
var G__11199 = null;
var G__11200 = 0;
var G__11201 = 0;
seq__8855_11181 = G__11198;
chunk__8856_11182 = G__11199;
count__8857_11183 = G__11200;
i__8858_11184 = G__11201;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.th.apply(null,a__7054__auto__);
};
var th = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return th__delegate.call(this,args__7053__auto__);};
th.cljs$lang$maxFixedArity = 0;
th.cljs$lang$applyTo = (function (arglist__11202){
var args__7053__auto__ = cljs.core.seq(arglist__11202);
return th__delegate(args__7053__auto__);
});
th.cljs$core$IFn$_invoke$arity$variadic = th__delegate;
return th;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.thead = (function() { 
var thead__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8863_11203 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8864_11204 = null;var count__8865_11205 = 0;var i__8866_11206 = 0;while(true){
if((i__8866_11206 < count__8865_11205))
{var arg__7055__auto___11207 = cljs.core._nth.call(null,chunk__8864_11204,i__8866_11206);a__7054__auto__.push(arg__7055__auto___11207);
{
var G__11208 = seq__8863_11203;
var G__11209 = chunk__8864_11204;
var G__11210 = count__8865_11205;
var G__11211 = (i__8866_11206 + 1);
seq__8863_11203 = G__11208;
chunk__8864_11204 = G__11209;
count__8865_11205 = G__11210;
i__8866_11206 = G__11211;
continue;
}
} else
{var temp__4092__auto___11212 = cljs.core.seq.call(null,seq__8863_11203);if(temp__4092__auto___11212)
{var seq__8863_11213__$1 = temp__4092__auto___11212;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8863_11213__$1))
{var c__5632__auto___11214 = cljs.core.chunk_first.call(null,seq__8863_11213__$1);{
var G__11215 = cljs.core.chunk_rest.call(null,seq__8863_11213__$1);
var G__11216 = c__5632__auto___11214;
var G__11217 = cljs.core.count.call(null,c__5632__auto___11214);
var G__11218 = 0;
seq__8863_11203 = G__11215;
chunk__8864_11204 = G__11216;
count__8865_11205 = G__11217;
i__8866_11206 = G__11218;
continue;
}
} else
{var arg__7055__auto___11219 = cljs.core.first.call(null,seq__8863_11213__$1);a__7054__auto__.push(arg__7055__auto___11219);
{
var G__11220 = cljs.core.next.call(null,seq__8863_11213__$1);
var G__11221 = null;
var G__11222 = 0;
var G__11223 = 0;
seq__8863_11203 = G__11220;
chunk__8864_11204 = G__11221;
count__8865_11205 = G__11222;
i__8866_11206 = G__11223;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.thead.apply(null,a__7054__auto__);
};
var thead = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return thead__delegate.call(this,args__7053__auto__);};
thead.cljs$lang$maxFixedArity = 0;
thead.cljs$lang$applyTo = (function (arglist__11224){
var args__7053__auto__ = cljs.core.seq(arglist__11224);
return thead__delegate(args__7053__auto__);
});
thead.cljs$core$IFn$_invoke$arity$variadic = thead__delegate;
return thead;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.time = (function() { 
var time__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8871_11225 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8872_11226 = null;var count__8873_11227 = 0;var i__8874_11228 = 0;while(true){
if((i__8874_11228 < count__8873_11227))
{var arg__7055__auto___11229 = cljs.core._nth.call(null,chunk__8872_11226,i__8874_11228);a__7054__auto__.push(arg__7055__auto___11229);
{
var G__11230 = seq__8871_11225;
var G__11231 = chunk__8872_11226;
var G__11232 = count__8873_11227;
var G__11233 = (i__8874_11228 + 1);
seq__8871_11225 = G__11230;
chunk__8872_11226 = G__11231;
count__8873_11227 = G__11232;
i__8874_11228 = G__11233;
continue;
}
} else
{var temp__4092__auto___11234 = cljs.core.seq.call(null,seq__8871_11225);if(temp__4092__auto___11234)
{var seq__8871_11235__$1 = temp__4092__auto___11234;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8871_11235__$1))
{var c__5632__auto___11236 = cljs.core.chunk_first.call(null,seq__8871_11235__$1);{
var G__11237 = cljs.core.chunk_rest.call(null,seq__8871_11235__$1);
var G__11238 = c__5632__auto___11236;
var G__11239 = cljs.core.count.call(null,c__5632__auto___11236);
var G__11240 = 0;
seq__8871_11225 = G__11237;
chunk__8872_11226 = G__11238;
count__8873_11227 = G__11239;
i__8874_11228 = G__11240;
continue;
}
} else
{var arg__7055__auto___11241 = cljs.core.first.call(null,seq__8871_11235__$1);a__7054__auto__.push(arg__7055__auto___11241);
{
var G__11242 = cljs.core.next.call(null,seq__8871_11235__$1);
var G__11243 = null;
var G__11244 = 0;
var G__11245 = 0;
seq__8871_11225 = G__11242;
chunk__8872_11226 = G__11243;
count__8873_11227 = G__11244;
i__8874_11228 = G__11245;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.time.apply(null,a__7054__auto__);
};
var time = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return time__delegate.call(this,args__7053__auto__);};
time.cljs$lang$maxFixedArity = 0;
time.cljs$lang$applyTo = (function (arglist__11246){
var args__7053__auto__ = cljs.core.seq(arglist__11246);
return time__delegate(args__7053__auto__);
});
time.cljs$core$IFn$_invoke$arity$variadic = time__delegate;
return time;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.title = (function() { 
var title__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8879_11247 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8880_11248 = null;var count__8881_11249 = 0;var i__8882_11250 = 0;while(true){
if((i__8882_11250 < count__8881_11249))
{var arg__7055__auto___11251 = cljs.core._nth.call(null,chunk__8880_11248,i__8882_11250);a__7054__auto__.push(arg__7055__auto___11251);
{
var G__11252 = seq__8879_11247;
var G__11253 = chunk__8880_11248;
var G__11254 = count__8881_11249;
var G__11255 = (i__8882_11250 + 1);
seq__8879_11247 = G__11252;
chunk__8880_11248 = G__11253;
count__8881_11249 = G__11254;
i__8882_11250 = G__11255;
continue;
}
} else
{var temp__4092__auto___11256 = cljs.core.seq.call(null,seq__8879_11247);if(temp__4092__auto___11256)
{var seq__8879_11257__$1 = temp__4092__auto___11256;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8879_11257__$1))
{var c__5632__auto___11258 = cljs.core.chunk_first.call(null,seq__8879_11257__$1);{
var G__11259 = cljs.core.chunk_rest.call(null,seq__8879_11257__$1);
var G__11260 = c__5632__auto___11258;
var G__11261 = cljs.core.count.call(null,c__5632__auto___11258);
var G__11262 = 0;
seq__8879_11247 = G__11259;
chunk__8880_11248 = G__11260;
count__8881_11249 = G__11261;
i__8882_11250 = G__11262;
continue;
}
} else
{var arg__7055__auto___11263 = cljs.core.first.call(null,seq__8879_11257__$1);a__7054__auto__.push(arg__7055__auto___11263);
{
var G__11264 = cljs.core.next.call(null,seq__8879_11257__$1);
var G__11265 = null;
var G__11266 = 0;
var G__11267 = 0;
seq__8879_11247 = G__11264;
chunk__8880_11248 = G__11265;
count__8881_11249 = G__11266;
i__8882_11250 = G__11267;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.title.apply(null,a__7054__auto__);
};
var title = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return title__delegate.call(this,args__7053__auto__);};
title.cljs$lang$maxFixedArity = 0;
title.cljs$lang$applyTo = (function (arglist__11268){
var args__7053__auto__ = cljs.core.seq(arglist__11268);
return title__delegate(args__7053__auto__);
});
title.cljs$core$IFn$_invoke$arity$variadic = title__delegate;
return title;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.tr = (function() { 
var tr__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8887_11269 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8888_11270 = null;var count__8889_11271 = 0;var i__8890_11272 = 0;while(true){
if((i__8890_11272 < count__8889_11271))
{var arg__7055__auto___11273 = cljs.core._nth.call(null,chunk__8888_11270,i__8890_11272);a__7054__auto__.push(arg__7055__auto___11273);
{
var G__11274 = seq__8887_11269;
var G__11275 = chunk__8888_11270;
var G__11276 = count__8889_11271;
var G__11277 = (i__8890_11272 + 1);
seq__8887_11269 = G__11274;
chunk__8888_11270 = G__11275;
count__8889_11271 = G__11276;
i__8890_11272 = G__11277;
continue;
}
} else
{var temp__4092__auto___11278 = cljs.core.seq.call(null,seq__8887_11269);if(temp__4092__auto___11278)
{var seq__8887_11279__$1 = temp__4092__auto___11278;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8887_11279__$1))
{var c__5632__auto___11280 = cljs.core.chunk_first.call(null,seq__8887_11279__$1);{
var G__11281 = cljs.core.chunk_rest.call(null,seq__8887_11279__$1);
var G__11282 = c__5632__auto___11280;
var G__11283 = cljs.core.count.call(null,c__5632__auto___11280);
var G__11284 = 0;
seq__8887_11269 = G__11281;
chunk__8888_11270 = G__11282;
count__8889_11271 = G__11283;
i__8890_11272 = G__11284;
continue;
}
} else
{var arg__7055__auto___11285 = cljs.core.first.call(null,seq__8887_11279__$1);a__7054__auto__.push(arg__7055__auto___11285);
{
var G__11286 = cljs.core.next.call(null,seq__8887_11279__$1);
var G__11287 = null;
var G__11288 = 0;
var G__11289 = 0;
seq__8887_11269 = G__11286;
chunk__8888_11270 = G__11287;
count__8889_11271 = G__11288;
i__8890_11272 = G__11289;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.tr.apply(null,a__7054__auto__);
};
var tr = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return tr__delegate.call(this,args__7053__auto__);};
tr.cljs$lang$maxFixedArity = 0;
tr.cljs$lang$applyTo = (function (arglist__11290){
var args__7053__auto__ = cljs.core.seq(arglist__11290);
return tr__delegate(args__7053__auto__);
});
tr.cljs$core$IFn$_invoke$arity$variadic = tr__delegate;
return tr;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.track = (function() { 
var track__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8895_11291 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8896_11292 = null;var count__8897_11293 = 0;var i__8898_11294 = 0;while(true){
if((i__8898_11294 < count__8897_11293))
{var arg__7055__auto___11295 = cljs.core._nth.call(null,chunk__8896_11292,i__8898_11294);a__7054__auto__.push(arg__7055__auto___11295);
{
var G__11296 = seq__8895_11291;
var G__11297 = chunk__8896_11292;
var G__11298 = count__8897_11293;
var G__11299 = (i__8898_11294 + 1);
seq__8895_11291 = G__11296;
chunk__8896_11292 = G__11297;
count__8897_11293 = G__11298;
i__8898_11294 = G__11299;
continue;
}
} else
{var temp__4092__auto___11300 = cljs.core.seq.call(null,seq__8895_11291);if(temp__4092__auto___11300)
{var seq__8895_11301__$1 = temp__4092__auto___11300;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8895_11301__$1))
{var c__5632__auto___11302 = cljs.core.chunk_first.call(null,seq__8895_11301__$1);{
var G__11303 = cljs.core.chunk_rest.call(null,seq__8895_11301__$1);
var G__11304 = c__5632__auto___11302;
var G__11305 = cljs.core.count.call(null,c__5632__auto___11302);
var G__11306 = 0;
seq__8895_11291 = G__11303;
chunk__8896_11292 = G__11304;
count__8897_11293 = G__11305;
i__8898_11294 = G__11306;
continue;
}
} else
{var arg__7055__auto___11307 = cljs.core.first.call(null,seq__8895_11301__$1);a__7054__auto__.push(arg__7055__auto___11307);
{
var G__11308 = cljs.core.next.call(null,seq__8895_11301__$1);
var G__11309 = null;
var G__11310 = 0;
var G__11311 = 0;
seq__8895_11291 = G__11308;
chunk__8896_11292 = G__11309;
count__8897_11293 = G__11310;
i__8898_11294 = G__11311;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.track.apply(null,a__7054__auto__);
};
var track = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return track__delegate.call(this,args__7053__auto__);};
track.cljs$lang$maxFixedArity = 0;
track.cljs$lang$applyTo = (function (arglist__11312){
var args__7053__auto__ = cljs.core.seq(arglist__11312);
return track__delegate(args__7053__auto__);
});
track.cljs$core$IFn$_invoke$arity$variadic = track__delegate;
return track;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.u = (function() { 
var u__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8903_11313 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8904_11314 = null;var count__8905_11315 = 0;var i__8906_11316 = 0;while(true){
if((i__8906_11316 < count__8905_11315))
{var arg__7055__auto___11317 = cljs.core._nth.call(null,chunk__8904_11314,i__8906_11316);a__7054__auto__.push(arg__7055__auto___11317);
{
var G__11318 = seq__8903_11313;
var G__11319 = chunk__8904_11314;
var G__11320 = count__8905_11315;
var G__11321 = (i__8906_11316 + 1);
seq__8903_11313 = G__11318;
chunk__8904_11314 = G__11319;
count__8905_11315 = G__11320;
i__8906_11316 = G__11321;
continue;
}
} else
{var temp__4092__auto___11322 = cljs.core.seq.call(null,seq__8903_11313);if(temp__4092__auto___11322)
{var seq__8903_11323__$1 = temp__4092__auto___11322;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8903_11323__$1))
{var c__5632__auto___11324 = cljs.core.chunk_first.call(null,seq__8903_11323__$1);{
var G__11325 = cljs.core.chunk_rest.call(null,seq__8903_11323__$1);
var G__11326 = c__5632__auto___11324;
var G__11327 = cljs.core.count.call(null,c__5632__auto___11324);
var G__11328 = 0;
seq__8903_11313 = G__11325;
chunk__8904_11314 = G__11326;
count__8905_11315 = G__11327;
i__8906_11316 = G__11328;
continue;
}
} else
{var arg__7055__auto___11329 = cljs.core.first.call(null,seq__8903_11323__$1);a__7054__auto__.push(arg__7055__auto___11329);
{
var G__11330 = cljs.core.next.call(null,seq__8903_11323__$1);
var G__11331 = null;
var G__11332 = 0;
var G__11333 = 0;
seq__8903_11313 = G__11330;
chunk__8904_11314 = G__11331;
count__8905_11315 = G__11332;
i__8906_11316 = G__11333;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.u.apply(null,a__7054__auto__);
};
var u = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return u__delegate.call(this,args__7053__auto__);};
u.cljs$lang$maxFixedArity = 0;
u.cljs$lang$applyTo = (function (arglist__11334){
var args__7053__auto__ = cljs.core.seq(arglist__11334);
return u__delegate(args__7053__auto__);
});
u.cljs$core$IFn$_invoke$arity$variadic = u__delegate;
return u;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.ul = (function() { 
var ul__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8911_11335 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8912_11336 = null;var count__8913_11337 = 0;var i__8914_11338 = 0;while(true){
if((i__8914_11338 < count__8913_11337))
{var arg__7055__auto___11339 = cljs.core._nth.call(null,chunk__8912_11336,i__8914_11338);a__7054__auto__.push(arg__7055__auto___11339);
{
var G__11340 = seq__8911_11335;
var G__11341 = chunk__8912_11336;
var G__11342 = count__8913_11337;
var G__11343 = (i__8914_11338 + 1);
seq__8911_11335 = G__11340;
chunk__8912_11336 = G__11341;
count__8913_11337 = G__11342;
i__8914_11338 = G__11343;
continue;
}
} else
{var temp__4092__auto___11344 = cljs.core.seq.call(null,seq__8911_11335);if(temp__4092__auto___11344)
{var seq__8911_11345__$1 = temp__4092__auto___11344;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8911_11345__$1))
{var c__5632__auto___11346 = cljs.core.chunk_first.call(null,seq__8911_11345__$1);{
var G__11347 = cljs.core.chunk_rest.call(null,seq__8911_11345__$1);
var G__11348 = c__5632__auto___11346;
var G__11349 = cljs.core.count.call(null,c__5632__auto___11346);
var G__11350 = 0;
seq__8911_11335 = G__11347;
chunk__8912_11336 = G__11348;
count__8913_11337 = G__11349;
i__8914_11338 = G__11350;
continue;
}
} else
{var arg__7055__auto___11351 = cljs.core.first.call(null,seq__8911_11345__$1);a__7054__auto__.push(arg__7055__auto___11351);
{
var G__11352 = cljs.core.next.call(null,seq__8911_11345__$1);
var G__11353 = null;
var G__11354 = 0;
var G__11355 = 0;
seq__8911_11335 = G__11352;
chunk__8912_11336 = G__11353;
count__8913_11337 = G__11354;
i__8914_11338 = G__11355;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.ul.apply(null,a__7054__auto__);
};
var ul = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ul__delegate.call(this,args__7053__auto__);};
ul.cljs$lang$maxFixedArity = 0;
ul.cljs$lang$applyTo = (function (arglist__11356){
var args__7053__auto__ = cljs.core.seq(arglist__11356);
return ul__delegate(args__7053__auto__);
});
ul.cljs$core$IFn$_invoke$arity$variadic = ul__delegate;
return ul;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.var$ = (function() { 
var var$__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8919_11357 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8920_11358 = null;var count__8921_11359 = 0;var i__8922_11360 = 0;while(true){
if((i__8922_11360 < count__8921_11359))
{var arg__7055__auto___11361 = cljs.core._nth.call(null,chunk__8920_11358,i__8922_11360);a__7054__auto__.push(arg__7055__auto___11361);
{
var G__11362 = seq__8919_11357;
var G__11363 = chunk__8920_11358;
var G__11364 = count__8921_11359;
var G__11365 = (i__8922_11360 + 1);
seq__8919_11357 = G__11362;
chunk__8920_11358 = G__11363;
count__8921_11359 = G__11364;
i__8922_11360 = G__11365;
continue;
}
} else
{var temp__4092__auto___11366 = cljs.core.seq.call(null,seq__8919_11357);if(temp__4092__auto___11366)
{var seq__8919_11367__$1 = temp__4092__auto___11366;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8919_11367__$1))
{var c__5632__auto___11368 = cljs.core.chunk_first.call(null,seq__8919_11367__$1);{
var G__11369 = cljs.core.chunk_rest.call(null,seq__8919_11367__$1);
var G__11370 = c__5632__auto___11368;
var G__11371 = cljs.core.count.call(null,c__5632__auto___11368);
var G__11372 = 0;
seq__8919_11357 = G__11369;
chunk__8920_11358 = G__11370;
count__8921_11359 = G__11371;
i__8922_11360 = G__11372;
continue;
}
} else
{var arg__7055__auto___11373 = cljs.core.first.call(null,seq__8919_11367__$1);a__7054__auto__.push(arg__7055__auto___11373);
{
var G__11374 = cljs.core.next.call(null,seq__8919_11367__$1);
var G__11375 = null;
var G__11376 = 0;
var G__11377 = 0;
seq__8919_11357 = G__11374;
chunk__8920_11358 = G__11375;
count__8921_11359 = G__11376;
i__8922_11360 = G__11377;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.var$.apply(null,a__7054__auto__);
};
var var$ = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return var$__delegate.call(this,args__7053__auto__);};
var$.cljs$lang$maxFixedArity = 0;
var$.cljs$lang$applyTo = (function (arglist__11378){
var args__7053__auto__ = cljs.core.seq(arglist__11378);
return var$__delegate(args__7053__auto__);
});
var$.cljs$core$IFn$_invoke$arity$variadic = var$__delegate;
return var$;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.video = (function() { 
var video__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8927_11379 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8928_11380 = null;var count__8929_11381 = 0;var i__8930_11382 = 0;while(true){
if((i__8930_11382 < count__8929_11381))
{var arg__7055__auto___11383 = cljs.core._nth.call(null,chunk__8928_11380,i__8930_11382);a__7054__auto__.push(arg__7055__auto___11383);
{
var G__11384 = seq__8927_11379;
var G__11385 = chunk__8928_11380;
var G__11386 = count__8929_11381;
var G__11387 = (i__8930_11382 + 1);
seq__8927_11379 = G__11384;
chunk__8928_11380 = G__11385;
count__8929_11381 = G__11386;
i__8930_11382 = G__11387;
continue;
}
} else
{var temp__4092__auto___11388 = cljs.core.seq.call(null,seq__8927_11379);if(temp__4092__auto___11388)
{var seq__8927_11389__$1 = temp__4092__auto___11388;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8927_11389__$1))
{var c__5632__auto___11390 = cljs.core.chunk_first.call(null,seq__8927_11389__$1);{
var G__11391 = cljs.core.chunk_rest.call(null,seq__8927_11389__$1);
var G__11392 = c__5632__auto___11390;
var G__11393 = cljs.core.count.call(null,c__5632__auto___11390);
var G__11394 = 0;
seq__8927_11379 = G__11391;
chunk__8928_11380 = G__11392;
count__8929_11381 = G__11393;
i__8930_11382 = G__11394;
continue;
}
} else
{var arg__7055__auto___11395 = cljs.core.first.call(null,seq__8927_11389__$1);a__7054__auto__.push(arg__7055__auto___11395);
{
var G__11396 = cljs.core.next.call(null,seq__8927_11389__$1);
var G__11397 = null;
var G__11398 = 0;
var G__11399 = 0;
seq__8927_11379 = G__11396;
chunk__8928_11380 = G__11397;
count__8929_11381 = G__11398;
i__8930_11382 = G__11399;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.video.apply(null,a__7054__auto__);
};
var video = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return video__delegate.call(this,args__7053__auto__);};
video.cljs$lang$maxFixedArity = 0;
video.cljs$lang$applyTo = (function (arglist__11400){
var args__7053__auto__ = cljs.core.seq(arglist__11400);
return video__delegate(args__7053__auto__);
});
video.cljs$core$IFn$_invoke$arity$variadic = video__delegate;
return video;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.wbr = (function() { 
var wbr__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8935_11401 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8936_11402 = null;var count__8937_11403 = 0;var i__8938_11404 = 0;while(true){
if((i__8938_11404 < count__8937_11403))
{var arg__7055__auto___11405 = cljs.core._nth.call(null,chunk__8936_11402,i__8938_11404);a__7054__auto__.push(arg__7055__auto___11405);
{
var G__11406 = seq__8935_11401;
var G__11407 = chunk__8936_11402;
var G__11408 = count__8937_11403;
var G__11409 = (i__8938_11404 + 1);
seq__8935_11401 = G__11406;
chunk__8936_11402 = G__11407;
count__8937_11403 = G__11408;
i__8938_11404 = G__11409;
continue;
}
} else
{var temp__4092__auto___11410 = cljs.core.seq.call(null,seq__8935_11401);if(temp__4092__auto___11410)
{var seq__8935_11411__$1 = temp__4092__auto___11410;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8935_11411__$1))
{var c__5632__auto___11412 = cljs.core.chunk_first.call(null,seq__8935_11411__$1);{
var G__11413 = cljs.core.chunk_rest.call(null,seq__8935_11411__$1);
var G__11414 = c__5632__auto___11412;
var G__11415 = cljs.core.count.call(null,c__5632__auto___11412);
var G__11416 = 0;
seq__8935_11401 = G__11413;
chunk__8936_11402 = G__11414;
count__8937_11403 = G__11415;
i__8938_11404 = G__11416;
continue;
}
} else
{var arg__7055__auto___11417 = cljs.core.first.call(null,seq__8935_11411__$1);a__7054__auto__.push(arg__7055__auto___11417);
{
var G__11418 = cljs.core.next.call(null,seq__8935_11411__$1);
var G__11419 = null;
var G__11420 = 0;
var G__11421 = 0;
seq__8935_11401 = G__11418;
chunk__8936_11402 = G__11419;
count__8937_11403 = G__11420;
i__8938_11404 = G__11421;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.wbr.apply(null,a__7054__auto__);
};
var wbr = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return wbr__delegate.call(this,args__7053__auto__);};
wbr.cljs$lang$maxFixedArity = 0;
wbr.cljs$lang$applyTo = (function (arglist__11422){
var args__7053__auto__ = cljs.core.seq(arglist__11422);
return wbr__delegate(args__7053__auto__);
});
wbr.cljs$core$IFn$_invoke$arity$variadic = wbr__delegate;
return wbr;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.circle = (function() { 
var circle__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8943_11423 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8944_11424 = null;var count__8945_11425 = 0;var i__8946_11426 = 0;while(true){
if((i__8946_11426 < count__8945_11425))
{var arg__7055__auto___11427 = cljs.core._nth.call(null,chunk__8944_11424,i__8946_11426);a__7054__auto__.push(arg__7055__auto___11427);
{
var G__11428 = seq__8943_11423;
var G__11429 = chunk__8944_11424;
var G__11430 = count__8945_11425;
var G__11431 = (i__8946_11426 + 1);
seq__8943_11423 = G__11428;
chunk__8944_11424 = G__11429;
count__8945_11425 = G__11430;
i__8946_11426 = G__11431;
continue;
}
} else
{var temp__4092__auto___11432 = cljs.core.seq.call(null,seq__8943_11423);if(temp__4092__auto___11432)
{var seq__8943_11433__$1 = temp__4092__auto___11432;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8943_11433__$1))
{var c__5632__auto___11434 = cljs.core.chunk_first.call(null,seq__8943_11433__$1);{
var G__11435 = cljs.core.chunk_rest.call(null,seq__8943_11433__$1);
var G__11436 = c__5632__auto___11434;
var G__11437 = cljs.core.count.call(null,c__5632__auto___11434);
var G__11438 = 0;
seq__8943_11423 = G__11435;
chunk__8944_11424 = G__11436;
count__8945_11425 = G__11437;
i__8946_11426 = G__11438;
continue;
}
} else
{var arg__7055__auto___11439 = cljs.core.first.call(null,seq__8943_11433__$1);a__7054__auto__.push(arg__7055__auto___11439);
{
var G__11440 = cljs.core.next.call(null,seq__8943_11433__$1);
var G__11441 = null;
var G__11442 = 0;
var G__11443 = 0;
seq__8943_11423 = G__11440;
chunk__8944_11424 = G__11441;
count__8945_11425 = G__11442;
i__8946_11426 = G__11443;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.circle.apply(null,a__7054__auto__);
};
var circle = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return circle__delegate.call(this,args__7053__auto__);};
circle.cljs$lang$maxFixedArity = 0;
circle.cljs$lang$applyTo = (function (arglist__11444){
var args__7053__auto__ = cljs.core.seq(arglist__11444);
return circle__delegate(args__7053__auto__);
});
circle.cljs$core$IFn$_invoke$arity$variadic = circle__delegate;
return circle;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.g = (function() { 
var g__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8951_11445 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8952_11446 = null;var count__8953_11447 = 0;var i__8954_11448 = 0;while(true){
if((i__8954_11448 < count__8953_11447))
{var arg__7055__auto___11449 = cljs.core._nth.call(null,chunk__8952_11446,i__8954_11448);a__7054__auto__.push(arg__7055__auto___11449);
{
var G__11450 = seq__8951_11445;
var G__11451 = chunk__8952_11446;
var G__11452 = count__8953_11447;
var G__11453 = (i__8954_11448 + 1);
seq__8951_11445 = G__11450;
chunk__8952_11446 = G__11451;
count__8953_11447 = G__11452;
i__8954_11448 = G__11453;
continue;
}
} else
{var temp__4092__auto___11454 = cljs.core.seq.call(null,seq__8951_11445);if(temp__4092__auto___11454)
{var seq__8951_11455__$1 = temp__4092__auto___11454;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8951_11455__$1))
{var c__5632__auto___11456 = cljs.core.chunk_first.call(null,seq__8951_11455__$1);{
var G__11457 = cljs.core.chunk_rest.call(null,seq__8951_11455__$1);
var G__11458 = c__5632__auto___11456;
var G__11459 = cljs.core.count.call(null,c__5632__auto___11456);
var G__11460 = 0;
seq__8951_11445 = G__11457;
chunk__8952_11446 = G__11458;
count__8953_11447 = G__11459;
i__8954_11448 = G__11460;
continue;
}
} else
{var arg__7055__auto___11461 = cljs.core.first.call(null,seq__8951_11455__$1);a__7054__auto__.push(arg__7055__auto___11461);
{
var G__11462 = cljs.core.next.call(null,seq__8951_11455__$1);
var G__11463 = null;
var G__11464 = 0;
var G__11465 = 0;
seq__8951_11445 = G__11462;
chunk__8952_11446 = G__11463;
count__8953_11447 = G__11464;
i__8954_11448 = G__11465;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.g.apply(null,a__7054__auto__);
};
var g = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return g__delegate.call(this,args__7053__auto__);};
g.cljs$lang$maxFixedArity = 0;
g.cljs$lang$applyTo = (function (arglist__11466){
var args__7053__auto__ = cljs.core.seq(arglist__11466);
return g__delegate(args__7053__auto__);
});
g.cljs$core$IFn$_invoke$arity$variadic = g__delegate;
return g;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.line = (function() { 
var line__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8959_11467 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8960_11468 = null;var count__8961_11469 = 0;var i__8962_11470 = 0;while(true){
if((i__8962_11470 < count__8961_11469))
{var arg__7055__auto___11471 = cljs.core._nth.call(null,chunk__8960_11468,i__8962_11470);a__7054__auto__.push(arg__7055__auto___11471);
{
var G__11472 = seq__8959_11467;
var G__11473 = chunk__8960_11468;
var G__11474 = count__8961_11469;
var G__11475 = (i__8962_11470 + 1);
seq__8959_11467 = G__11472;
chunk__8960_11468 = G__11473;
count__8961_11469 = G__11474;
i__8962_11470 = G__11475;
continue;
}
} else
{var temp__4092__auto___11476 = cljs.core.seq.call(null,seq__8959_11467);if(temp__4092__auto___11476)
{var seq__8959_11477__$1 = temp__4092__auto___11476;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8959_11477__$1))
{var c__5632__auto___11478 = cljs.core.chunk_first.call(null,seq__8959_11477__$1);{
var G__11479 = cljs.core.chunk_rest.call(null,seq__8959_11477__$1);
var G__11480 = c__5632__auto___11478;
var G__11481 = cljs.core.count.call(null,c__5632__auto___11478);
var G__11482 = 0;
seq__8959_11467 = G__11479;
chunk__8960_11468 = G__11480;
count__8961_11469 = G__11481;
i__8962_11470 = G__11482;
continue;
}
} else
{var arg__7055__auto___11483 = cljs.core.first.call(null,seq__8959_11477__$1);a__7054__auto__.push(arg__7055__auto___11483);
{
var G__11484 = cljs.core.next.call(null,seq__8959_11477__$1);
var G__11485 = null;
var G__11486 = 0;
var G__11487 = 0;
seq__8959_11467 = G__11484;
chunk__8960_11468 = G__11485;
count__8961_11469 = G__11486;
i__8962_11470 = G__11487;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.line.apply(null,a__7054__auto__);
};
var line = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return line__delegate.call(this,args__7053__auto__);};
line.cljs$lang$maxFixedArity = 0;
line.cljs$lang$applyTo = (function (arglist__11488){
var args__7053__auto__ = cljs.core.seq(arglist__11488);
return line__delegate(args__7053__auto__);
});
line.cljs$core$IFn$_invoke$arity$variadic = line__delegate;
return line;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.path = (function() { 
var path__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8967_11489 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8968_11490 = null;var count__8969_11491 = 0;var i__8970_11492 = 0;while(true){
if((i__8970_11492 < count__8969_11491))
{var arg__7055__auto___11493 = cljs.core._nth.call(null,chunk__8968_11490,i__8970_11492);a__7054__auto__.push(arg__7055__auto___11493);
{
var G__11494 = seq__8967_11489;
var G__11495 = chunk__8968_11490;
var G__11496 = count__8969_11491;
var G__11497 = (i__8970_11492 + 1);
seq__8967_11489 = G__11494;
chunk__8968_11490 = G__11495;
count__8969_11491 = G__11496;
i__8970_11492 = G__11497;
continue;
}
} else
{var temp__4092__auto___11498 = cljs.core.seq.call(null,seq__8967_11489);if(temp__4092__auto___11498)
{var seq__8967_11499__$1 = temp__4092__auto___11498;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8967_11499__$1))
{var c__5632__auto___11500 = cljs.core.chunk_first.call(null,seq__8967_11499__$1);{
var G__11501 = cljs.core.chunk_rest.call(null,seq__8967_11499__$1);
var G__11502 = c__5632__auto___11500;
var G__11503 = cljs.core.count.call(null,c__5632__auto___11500);
var G__11504 = 0;
seq__8967_11489 = G__11501;
chunk__8968_11490 = G__11502;
count__8969_11491 = G__11503;
i__8970_11492 = G__11504;
continue;
}
} else
{var arg__7055__auto___11505 = cljs.core.first.call(null,seq__8967_11499__$1);a__7054__auto__.push(arg__7055__auto___11505);
{
var G__11506 = cljs.core.next.call(null,seq__8967_11499__$1);
var G__11507 = null;
var G__11508 = 0;
var G__11509 = 0;
seq__8967_11489 = G__11506;
chunk__8968_11490 = G__11507;
count__8969_11491 = G__11508;
i__8970_11492 = G__11509;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.path.apply(null,a__7054__auto__);
};
var path = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return path__delegate.call(this,args__7053__auto__);};
path.cljs$lang$maxFixedArity = 0;
path.cljs$lang$applyTo = (function (arglist__11510){
var args__7053__auto__ = cljs.core.seq(arglist__11510);
return path__delegate(args__7053__auto__);
});
path.cljs$core$IFn$_invoke$arity$variadic = path__delegate;
return path;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.polygon = (function() { 
var polygon__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8975_11511 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8976_11512 = null;var count__8977_11513 = 0;var i__8978_11514 = 0;while(true){
if((i__8978_11514 < count__8977_11513))
{var arg__7055__auto___11515 = cljs.core._nth.call(null,chunk__8976_11512,i__8978_11514);a__7054__auto__.push(arg__7055__auto___11515);
{
var G__11516 = seq__8975_11511;
var G__11517 = chunk__8976_11512;
var G__11518 = count__8977_11513;
var G__11519 = (i__8978_11514 + 1);
seq__8975_11511 = G__11516;
chunk__8976_11512 = G__11517;
count__8977_11513 = G__11518;
i__8978_11514 = G__11519;
continue;
}
} else
{var temp__4092__auto___11520 = cljs.core.seq.call(null,seq__8975_11511);if(temp__4092__auto___11520)
{var seq__8975_11521__$1 = temp__4092__auto___11520;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8975_11521__$1))
{var c__5632__auto___11522 = cljs.core.chunk_first.call(null,seq__8975_11521__$1);{
var G__11523 = cljs.core.chunk_rest.call(null,seq__8975_11521__$1);
var G__11524 = c__5632__auto___11522;
var G__11525 = cljs.core.count.call(null,c__5632__auto___11522);
var G__11526 = 0;
seq__8975_11511 = G__11523;
chunk__8976_11512 = G__11524;
count__8977_11513 = G__11525;
i__8978_11514 = G__11526;
continue;
}
} else
{var arg__7055__auto___11527 = cljs.core.first.call(null,seq__8975_11521__$1);a__7054__auto__.push(arg__7055__auto___11527);
{
var G__11528 = cljs.core.next.call(null,seq__8975_11521__$1);
var G__11529 = null;
var G__11530 = 0;
var G__11531 = 0;
seq__8975_11511 = G__11528;
chunk__8976_11512 = G__11529;
count__8977_11513 = G__11530;
i__8978_11514 = G__11531;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.polygon.apply(null,a__7054__auto__);
};
var polygon = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return polygon__delegate.call(this,args__7053__auto__);};
polygon.cljs$lang$maxFixedArity = 0;
polygon.cljs$lang$applyTo = (function (arglist__11532){
var args__7053__auto__ = cljs.core.seq(arglist__11532);
return polygon__delegate(args__7053__auto__);
});
polygon.cljs$core$IFn$_invoke$arity$variadic = polygon__delegate;
return polygon;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.polyline = (function() { 
var polyline__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8983_11533 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8984_11534 = null;var count__8985_11535 = 0;var i__8986_11536 = 0;while(true){
if((i__8986_11536 < count__8985_11535))
{var arg__7055__auto___11537 = cljs.core._nth.call(null,chunk__8984_11534,i__8986_11536);a__7054__auto__.push(arg__7055__auto___11537);
{
var G__11538 = seq__8983_11533;
var G__11539 = chunk__8984_11534;
var G__11540 = count__8985_11535;
var G__11541 = (i__8986_11536 + 1);
seq__8983_11533 = G__11538;
chunk__8984_11534 = G__11539;
count__8985_11535 = G__11540;
i__8986_11536 = G__11541;
continue;
}
} else
{var temp__4092__auto___11542 = cljs.core.seq.call(null,seq__8983_11533);if(temp__4092__auto___11542)
{var seq__8983_11543__$1 = temp__4092__auto___11542;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8983_11543__$1))
{var c__5632__auto___11544 = cljs.core.chunk_first.call(null,seq__8983_11543__$1);{
var G__11545 = cljs.core.chunk_rest.call(null,seq__8983_11543__$1);
var G__11546 = c__5632__auto___11544;
var G__11547 = cljs.core.count.call(null,c__5632__auto___11544);
var G__11548 = 0;
seq__8983_11533 = G__11545;
chunk__8984_11534 = G__11546;
count__8985_11535 = G__11547;
i__8986_11536 = G__11548;
continue;
}
} else
{var arg__7055__auto___11549 = cljs.core.first.call(null,seq__8983_11543__$1);a__7054__auto__.push(arg__7055__auto___11549);
{
var G__11550 = cljs.core.next.call(null,seq__8983_11543__$1);
var G__11551 = null;
var G__11552 = 0;
var G__11553 = 0;
seq__8983_11533 = G__11550;
chunk__8984_11534 = G__11551;
count__8985_11535 = G__11552;
i__8986_11536 = G__11553;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.polyline.apply(null,a__7054__auto__);
};
var polyline = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return polyline__delegate.call(this,args__7053__auto__);};
polyline.cljs$lang$maxFixedArity = 0;
polyline.cljs$lang$applyTo = (function (arglist__11554){
var args__7053__auto__ = cljs.core.seq(arglist__11554);
return polyline__delegate(args__7053__auto__);
});
polyline.cljs$core$IFn$_invoke$arity$variadic = polyline__delegate;
return polyline;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.rect = (function() { 
var rect__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8991_11555 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8992_11556 = null;var count__8993_11557 = 0;var i__8994_11558 = 0;while(true){
if((i__8994_11558 < count__8993_11557))
{var arg__7055__auto___11559 = cljs.core._nth.call(null,chunk__8992_11556,i__8994_11558);a__7054__auto__.push(arg__7055__auto___11559);
{
var G__11560 = seq__8991_11555;
var G__11561 = chunk__8992_11556;
var G__11562 = count__8993_11557;
var G__11563 = (i__8994_11558 + 1);
seq__8991_11555 = G__11560;
chunk__8992_11556 = G__11561;
count__8993_11557 = G__11562;
i__8994_11558 = G__11563;
continue;
}
} else
{var temp__4092__auto___11564 = cljs.core.seq.call(null,seq__8991_11555);if(temp__4092__auto___11564)
{var seq__8991_11565__$1 = temp__4092__auto___11564;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8991_11565__$1))
{var c__5632__auto___11566 = cljs.core.chunk_first.call(null,seq__8991_11565__$1);{
var G__11567 = cljs.core.chunk_rest.call(null,seq__8991_11565__$1);
var G__11568 = c__5632__auto___11566;
var G__11569 = cljs.core.count.call(null,c__5632__auto___11566);
var G__11570 = 0;
seq__8991_11555 = G__11567;
chunk__8992_11556 = G__11568;
count__8993_11557 = G__11569;
i__8994_11558 = G__11570;
continue;
}
} else
{var arg__7055__auto___11571 = cljs.core.first.call(null,seq__8991_11565__$1);a__7054__auto__.push(arg__7055__auto___11571);
{
var G__11572 = cljs.core.next.call(null,seq__8991_11565__$1);
var G__11573 = null;
var G__11574 = 0;
var G__11575 = 0;
seq__8991_11555 = G__11572;
chunk__8992_11556 = G__11573;
count__8993_11557 = G__11574;
i__8994_11558 = G__11575;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.rect.apply(null,a__7054__auto__);
};
var rect = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return rect__delegate.call(this,args__7053__auto__);};
rect.cljs$lang$maxFixedArity = 0;
rect.cljs$lang$applyTo = (function (arglist__11576){
var args__7053__auto__ = cljs.core.seq(arglist__11576);
return rect__delegate(args__7053__auto__);
});
rect.cljs$core$IFn$_invoke$arity$variadic = rect__delegate;
return rect;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.svg = (function() { 
var svg__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8999_11577 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__9000_11578 = null;var count__9001_11579 = 0;var i__9002_11580 = 0;while(true){
if((i__9002_11580 < count__9001_11579))
{var arg__7055__auto___11581 = cljs.core._nth.call(null,chunk__9000_11578,i__9002_11580);a__7054__auto__.push(arg__7055__auto___11581);
{
var G__11582 = seq__8999_11577;
var G__11583 = chunk__9000_11578;
var G__11584 = count__9001_11579;
var G__11585 = (i__9002_11580 + 1);
seq__8999_11577 = G__11582;
chunk__9000_11578 = G__11583;
count__9001_11579 = G__11584;
i__9002_11580 = G__11585;
continue;
}
} else
{var temp__4092__auto___11586 = cljs.core.seq.call(null,seq__8999_11577);if(temp__4092__auto___11586)
{var seq__8999_11587__$1 = temp__4092__auto___11586;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8999_11587__$1))
{var c__5632__auto___11588 = cljs.core.chunk_first.call(null,seq__8999_11587__$1);{
var G__11589 = cljs.core.chunk_rest.call(null,seq__8999_11587__$1);
var G__11590 = c__5632__auto___11588;
var G__11591 = cljs.core.count.call(null,c__5632__auto___11588);
var G__11592 = 0;
seq__8999_11577 = G__11589;
chunk__9000_11578 = G__11590;
count__9001_11579 = G__11591;
i__9002_11580 = G__11592;
continue;
}
} else
{var arg__7055__auto___11593 = cljs.core.first.call(null,seq__8999_11587__$1);a__7054__auto__.push(arg__7055__auto___11593);
{
var G__11594 = cljs.core.next.call(null,seq__8999_11587__$1);
var G__11595 = null;
var G__11596 = 0;
var G__11597 = 0;
seq__8999_11577 = G__11594;
chunk__9000_11578 = G__11595;
count__9001_11579 = G__11596;
i__9002_11580 = G__11597;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.svg.apply(null,a__7054__auto__);
};
var svg = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return svg__delegate.call(this,args__7053__auto__);};
svg.cljs$lang$maxFixedArity = 0;
svg.cljs$lang$applyTo = (function (arglist__11598){
var args__7053__auto__ = cljs.core.seq(arglist__11598);
return svg__delegate(args__7053__auto__);
});
svg.cljs$core$IFn$_invoke$arity$variadic = svg__delegate;
return svg;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.text = (function() { 
var text__delegate = function (args__7053__auto__){var a__7054__auto__ = [];a__7054__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7053__auto__)));
var seq__8311_11599 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7053__auto__));var chunk__8312_11600 = null;var count__8313_11601 = 0;var i__8314_11602 = 0;while(true){
if((i__8314_11602 < count__8313_11601))
{var arg__7055__auto___11603 = cljs.core._nth.call(null,chunk__8312_11600,i__8314_11602);a__7054__auto__.push(arg__7055__auto___11603);
{
var G__11604 = seq__8311_11599;
var G__11605 = chunk__8312_11600;
var G__11606 = count__8313_11601;
var G__11607 = (i__8314_11602 + 1);
seq__8311_11599 = G__11604;
chunk__8312_11600 = G__11605;
count__8313_11601 = G__11606;
i__8314_11602 = G__11607;
continue;
}
} else
{var temp__4092__auto___11608 = cljs.core.seq.call(null,seq__8311_11599);if(temp__4092__auto___11608)
{var seq__8311_11609__$1 = temp__4092__auto___11608;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8311_11609__$1))
{var c__5632__auto___11610 = cljs.core.chunk_first.call(null,seq__8311_11609__$1);{
var G__11611 = cljs.core.chunk_rest.call(null,seq__8311_11609__$1);
var G__11612 = c__5632__auto___11610;
var G__11613 = cljs.core.count.call(null,c__5632__auto___11610);
var G__11614 = 0;
seq__8311_11599 = G__11611;
chunk__8312_11600 = G__11612;
count__8313_11601 = G__11613;
i__8314_11602 = G__11614;
continue;
}
} else
{var arg__7055__auto___11615 = cljs.core.first.call(null,seq__8311_11609__$1);a__7054__auto__.push(arg__7055__auto___11615);
{
var G__11616 = cljs.core.next.call(null,seq__8311_11609__$1);
var G__11617 = null;
var G__11618 = 0;
var G__11619 = 0;
seq__8311_11599 = G__11616;
chunk__8312_11600 = G__11617;
count__8313_11601 = G__11618;
i__8314_11602 = G__11619;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.text.apply(null,a__7054__auto__);
};
var text = function (var_args){
var args__7053__auto__ = null;if (arguments.length > 0) {
  args__7053__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return text__delegate.call(this,args__7053__auto__);};
text.cljs$lang$maxFixedArity = 0;
text.cljs$lang$applyTo = (function (arglist__11620){
var args__7053__auto__ = cljs.core.seq(arglist__11620);
return text__delegate(args__7053__auto__);
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
lt.plugins.elm_light.autocompleter.handle_keypress = (function handle_keypress(p__8029,ev){var map__8032 = p__8029;var map__8032__$1 = ((cljs.core.seq_QMARK_.call(null,map__8032))?cljs.core.apply.call(null,cljs.core.hash_map,map__8032):map__8032);var props = map__8032__$1;var on_cancel = cljs.core.get.call(null,map__8032__$1,new cljs.core.Keyword(null,"on-cancel","on-cancel",600765850));var on_select = cljs.core.get.call(null,map__8032__$1,new cljs.core.Keyword(null,"on-select","on-select",1062468636));var on_down = cljs.core.get.call(null,map__8032__$1,new cljs.core.Keyword(null,"on-down","on-down",3936419650));var on_up = cljs.core.get.call(null,map__8032__$1,new cljs.core.Keyword(null,"on-up","on-up",1119739067));var kk = ev.which;var G__8033 = kk;if(cljs.core._EQ_.call(null,27,G__8033))
{ev.preventDefault();
ev.target.value = "";
return on_cancel.call(null);
} else
{if(cljs.core._EQ_.call(null,13,G__8033))
{ev.preventDefault();
var temp__4092__auto___8049 = lt.plugins.elm_light.autocompleter.find_active.call(null,new cljs.core.Keyword(null,"items","items",1114430258).cljs$core$IFn$_invoke$arity$1(props));if(cljs.core.truth_(temp__4092__auto___8049))
{var active_8050 = temp__4092__auto___8049;ev.target.value = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(active_8050);
} else
{}
return on_select.call(null);
} else
{if(cljs.core._EQ_.call(null,40,G__8033))
{ev.preventDefault();
return on_down.call(null);
} else
{if(cljs.core._EQ_.call(null,38,G__8033))
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
return (function (p1__8034_SHARP_){return "autocomplete-dropdown-item row".concat((cljs.core.truth_(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(p1__8034_SHARP_))?" autocomplete-active":""));
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
lt.plugins.elm_light.autocompleter.Adder = quiescent.component.call(null,(function (p__8035){var map__8036 = p__8035;var map__8036__$1 = ((cljs.core.seq_QMARK_.call(null,map__8036))?cljs.core.apply.call(null,cljs.core.hash_map,map__8036):map__8036);var props = map__8036__$1;var disabled = cljs.core.get.call(null,map__8036__$1,new cljs.core.Keyword(null,"disabled","disabled",1284845038));var on_add_package = cljs.core.get.call(null,map__8036__$1,new cljs.core.Keyword(null,"on-add-package","on-add-package",3601701790));return quiescent.dom.button.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",1004015509),"btn",new cljs.core.Keyword(null,"disabled","disabled",1284845038),disabled,new cljs.core.Keyword(null,"onClick","onClick",3956969051),((function (map__8036,map__8036__$1,props,disabled,on_add_package){
return (function (){return on_add_package.call(null);
});})(map__8036,map__8036__$1,props,disabled,on_add_package))
], null),"Add package");
}));
/**
* 
*/
lt.plugins.elm_light.autocompleter.Versions = quiescent.component.call(null,(function (props){return cljs.core.apply.call(null,quiescent.dom.select,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",1004015509),"versions",new cljs.core.Keyword(null,"value","value",1125876963),new cljs.core.Keyword(null,"version","version",1365512266).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"onChange","onChange",2050678241),(function (p1__8037_SHARP_){return new cljs.core.Keyword(null,"on-change-version","on-change-version",822058203).cljs$core$IFn$_invoke$arity$1(props).call(null,p1__8037_SHARP_.target.value);
})], null),cljs.core.map.call(null,(function (p1__8038_SHARP_){return quiescent.dom.option.call(null,cljs.core.PersistentArrayMap.EMPTY,p1__8038_SHARP_);
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
clojure.walk.keywordize_keys = (function keywordize_keys(m){var f = (function (p__19042){var vec__19043 = p__19042;var k = cljs.core.nth.call(null,vec__19043,0,null);var v = cljs.core.nth.call(null,vec__19043,1,null);if(typeof k === 'string')
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
clojure.walk.stringify_keys = (function stringify_keys(m){var f = (function (p__19046){var vec__19047 = p__19046;var k = cljs.core.nth.call(null,vec__19047,0,null);var v = cljs.core.nth.call(null,vec__19047,1,null);if((k instanceof cljs.core.Keyword))
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
lt.plugins.elm_light.utils.find_symbol = (function find_symbol(ed,pos){var curr_tok = lt.objs.editor.__GT_token.call(null,ed,pos);var G__19080 = new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(curr_tok);if(cljs.core._EQ_.call(null,"builtin",G__19080))
{return [cljs.core.str(find_symbol.call(null,ed,cljs.core.assoc.call(null,pos,new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(curr_tok)))),cljs.core.str(new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(curr_tok))].join('');
} else
{if(cljs.core._EQ_.call(null,"variable-3",G__19080))
{return [cljs.core.str(find_symbol.call(null,ed,cljs.core.assoc.call(null,pos,new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(curr_tok)))),cljs.core.str(new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(curr_tok))].join('');
} else
{if(cljs.core._EQ_.call(null,"variable-2",G__19080))
{return [cljs.core.str(find_symbol.call(null,ed,cljs.core.assoc.call(null,pos,new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(curr_tok)))),cljs.core.str(new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(curr_tok))].join('');
} else
{if(cljs.core._EQ_.call(null,"variable",G__19080))
{return [cljs.core.str(find_symbol.call(null,ed,cljs.core.assoc.call(null,pos,new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(curr_tok)))),cljs.core.str(new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(curr_tok))].join('');
} else
{if(cljs.core._EQ_.call(null,"qualifier",G__19080))
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
return (function (p__19087){var vec__19088 = p__19087;var _ = cljs.core.nth.call(null,vec__19088,0,null);var vs = cljs.core.nth.call(null,vec__19088,1,null);return cljs.core.apply.call(null,cljs.core.merge,vs);
});})(pkg_json,deps_json))
,cljs.core.group_by.call(null,new cljs.core.Keyword(null,"package","package",4501809080),cljs.core.concat.call(null,cljs.core.mapv.call(null,((function (pkg_json,deps_json){
return (function (p__19089){var vec__19090 = p__19089;var k = cljs.core.nth.call(null,vec__19090,0,null);var v = cljs.core.nth.call(null,vec__19090,1,null);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"package","package",4501809080),lt.plugins.elm_light.utils.nskw__GT_name.call(null,k),new cljs.core.Keyword(null,"exact","exact",1110851185),v], null);
});})(pkg_json,deps_json))
,lt.plugins.elm_light.utils.parse_json_file.call(null,deps_json)),cljs.core.mapv.call(null,((function (pkg_json,deps_json){
return (function (p__19091){var vec__19092 = p__19091;var k = cljs.core.nth.call(null,vec__19092,0,null);var v = cljs.core.nth.call(null,vec__19092,1,null);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"package","package",4501809080),lt.plugins.elm_light.utils.nskw__GT_name.call(null,k),new cljs.core.Keyword(null,"range","range",1122184367),v], null);
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
lt.plugins.elm_light.graph.find_package_by_name = (function find_package_by_name(this$,name){return cljs.core.some.call(null,(function (p1__11900_SHARP_){if(cljs.core._EQ_.call(null,lt.plugins.elm_light.graph.lower.call(null,new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(p1__11900_SHARP_)),lt.plugins.elm_light.graph.lower.call(null,name)))
{return p1__11900_SHARP_;
} else
{return null;
}
}),new cljs.core.Keyword(null,"all-packages","all-packages",1123981067).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
});
lt.plugins.elm_light.graph.dependency_graph_ui = (function dependency_graph_ui(this$){var e__6297__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.graph","div.graph",2030351651),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dependency-graph","div.dependency-graph",3039800187),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg:svg","svg:svg",3472817088),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",1127031096),"650",new cljs.core.Keyword(null,"height","height",4087841945),"680"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg:g","svg:g",1123725379),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",2066570974),"translate(20,20)"], null)], null)], null)], null)], null));var seq__11907_11958 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__11908_11959 = null;var count__11909_11960 = 0;var i__11910_11961 = 0;while(true){
if((i__11910_11961 < count__11909_11960))
{var vec__11911_11962 = cljs.core._nth.call(null,chunk__11908_11959,i__11910_11961);var ev__6298__auto___11963 = cljs.core.nth.call(null,vec__11911_11962,0,null);var func__6299__auto___11964 = cljs.core.nth.call(null,vec__11911_11962,1,null);lt.util.dom.on.call(null,e__6297__auto__,ev__6298__auto___11963,func__6299__auto___11964);
{
var G__11965 = seq__11907_11958;
var G__11966 = chunk__11908_11959;
var G__11967 = count__11909_11960;
var G__11968 = (i__11910_11961 + 1);
seq__11907_11958 = G__11965;
chunk__11908_11959 = G__11966;
count__11909_11960 = G__11967;
i__11910_11961 = G__11968;
continue;
}
} else
{var temp__4092__auto___11969 = cljs.core.seq.call(null,seq__11907_11958);if(temp__4092__auto___11969)
{var seq__11907_11970__$1 = temp__4092__auto___11969;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11907_11970__$1))
{var c__5632__auto___11971 = cljs.core.chunk_first.call(null,seq__11907_11970__$1);{
var G__11972 = cljs.core.chunk_rest.call(null,seq__11907_11970__$1);
var G__11973 = c__5632__auto___11971;
var G__11974 = cljs.core.count.call(null,c__5632__auto___11971);
var G__11975 = 0;
seq__11907_11958 = G__11972;
chunk__11908_11959 = G__11973;
count__11909_11960 = G__11974;
i__11910_11961 = G__11975;
continue;
}
} else
{var vec__11912_11976 = cljs.core.first.call(null,seq__11907_11970__$1);var ev__6298__auto___11977 = cljs.core.nth.call(null,vec__11912_11976,0,null);var func__6299__auto___11978 = cljs.core.nth.call(null,vec__11912_11976,1,null);lt.util.dom.on.call(null,e__6297__auto__,ev__6298__auto___11977,func__6299__auto___11978);
{
var G__11979 = cljs.core.next.call(null,seq__11907_11970__$1);
var G__11980 = null;
var G__11981 = 0;
var G__11982 = 0;
seq__11907_11958 = G__11979;
chunk__11908_11959 = G__11980;
count__11909_11960 = G__11981;
i__11910_11961 = G__11982;
continue;
}
}
} else
{}
}
break;
}
return e__6297__auto__;
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.graph","dependency-graph","lt.plugins.elm-light.graph/dependency-graph",2371711049),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elm.graph.dependency","elm.graph.dependency",658564005)], null),new cljs.core.Keyword(null,"name","name",1017277949),"Dependency graph",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){lt.plugins.elm_light.utils.fetch_all_packages.call(null,(function (p1__11913_SHARP_){return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"all-packages","all-packages",1123981067),p1__11913_SHARP_], null));
}));
return lt.plugins.elm_light.graph.dependency_graph_ui.call(null,this$);
}));
lt.plugins.elm_light.graph.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___11983 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___11983))
{var ts_11984 = temp__4092__auto___11983;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_11984))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_11984);
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
lt.plugins.elm_light.graph.create_graph = (function create_graph(data){var g = (new lt.plugins.elm_light.graph.dagreD3.graphlib.Graph()).setGraph({});var seq__11922_11985 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"nodes","nodes",1118897699).cljs$core$IFn$_invoke$arity$1(data));var chunk__11923_11986 = null;var count__11924_11987 = 0;var i__11925_11988 = 0;while(true){
if((i__11925_11988 < count__11924_11987))
{var x_11989 = cljs.core._nth.call(null,chunk__11923_11986,i__11925_11988);g.setNode(lt.plugins.elm_light.graph.dep_id.call(null,x_11989),lt.plugins.elm_light.graph.node_label.call(null,x_11989));
{
var G__11990 = seq__11922_11985;
var G__11991 = chunk__11923_11986;
var G__11992 = count__11924_11987;
var G__11993 = (i__11925_11988 + 1);
seq__11922_11985 = G__11990;
chunk__11923_11986 = G__11991;
count__11924_11987 = G__11992;
i__11925_11988 = G__11993;
continue;
}
} else
{var temp__4092__auto___11994 = cljs.core.seq.call(null,seq__11922_11985);if(temp__4092__auto___11994)
{var seq__11922_11995__$1 = temp__4092__auto___11994;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11922_11995__$1))
{var c__5632__auto___11996 = cljs.core.chunk_first.call(null,seq__11922_11995__$1);{
var G__11997 = cljs.core.chunk_rest.call(null,seq__11922_11995__$1);
var G__11998 = c__5632__auto___11996;
var G__11999 = cljs.core.count.call(null,c__5632__auto___11996);
var G__12000 = 0;
seq__11922_11985 = G__11997;
chunk__11923_11986 = G__11998;
count__11924_11987 = G__11999;
i__11925_11988 = G__12000;
continue;
}
} else
{var x_12001 = cljs.core.first.call(null,seq__11922_11995__$1);g.setNode(lt.plugins.elm_light.graph.dep_id.call(null,x_12001),lt.plugins.elm_light.graph.node_label.call(null,x_12001));
{
var G__12002 = cljs.core.next.call(null,seq__11922_11995__$1);
var G__12003 = null;
var G__12004 = 0;
var G__12005 = 0;
seq__11922_11985 = G__12002;
chunk__11923_11986 = G__12003;
count__11924_11987 = G__12004;
i__11925_11988 = G__12005;
continue;
}
}
} else
{}
}
break;
}
var seq__11926_12006 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"edges","edges",1110261192).cljs$core$IFn$_invoke$arity$1(data));var chunk__11927_12007 = null;var count__11928_12008 = 0;var i__11929_12009 = 0;while(true){
if((i__11929_12009 < count__11928_12008))
{var x_12010 = cljs.core._nth.call(null,chunk__11927_12007,i__11929_12009);g.setEdge(new cljs.core.Keyword(null,"a","a",1013904339).cljs$core$IFn$_invoke$arity$1(x_12010),new cljs.core.Keyword(null,"b","b",1013904340).cljs$core$IFn$_invoke$arity$1(x_12010),{"style": (cljs.core.truth_(new cljs.core.Keyword(null,"transitive","transitive",3584713111).cljs$core$IFn$_invoke$arity$1(x_12010))?"stroke-dasharray: 5, 5;":null), "label": new cljs.core.Keyword(null,"label","label",1116631654).cljs$core$IFn$_invoke$arity$1(x_12010)});
{
var G__12011 = seq__11926_12006;
var G__12012 = chunk__11927_12007;
var G__12013 = count__11928_12008;
var G__12014 = (i__11929_12009 + 1);
seq__11926_12006 = G__12011;
chunk__11927_12007 = G__12012;
count__11928_12008 = G__12013;
i__11929_12009 = G__12014;
continue;
}
} else
{var temp__4092__auto___12015 = cljs.core.seq.call(null,seq__11926_12006);if(temp__4092__auto___12015)
{var seq__11926_12016__$1 = temp__4092__auto___12015;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11926_12016__$1))
{var c__5632__auto___12017 = cljs.core.chunk_first.call(null,seq__11926_12016__$1);{
var G__12018 = cljs.core.chunk_rest.call(null,seq__11926_12016__$1);
var G__12019 = c__5632__auto___12017;
var G__12020 = cljs.core.count.call(null,c__5632__auto___12017);
var G__12021 = 0;
seq__11926_12006 = G__12018;
chunk__11927_12007 = G__12019;
count__11928_12008 = G__12020;
i__11929_12009 = G__12021;
continue;
}
} else
{var x_12022 = cljs.core.first.call(null,seq__11926_12016__$1);g.setEdge(new cljs.core.Keyword(null,"a","a",1013904339).cljs$core$IFn$_invoke$arity$1(x_12022),new cljs.core.Keyword(null,"b","b",1013904340).cljs$core$IFn$_invoke$arity$1(x_12022),{"style": (cljs.core.truth_(new cljs.core.Keyword(null,"transitive","transitive",3584713111).cljs$core$IFn$_invoke$arity$1(x_12022))?"stroke-dasharray: 5, 5;":null), "label": new cljs.core.Keyword(null,"label","label",1116631654).cljs$core$IFn$_invoke$arity$1(x_12022)});
{
var G__12023 = cljs.core.next.call(null,seq__11926_12016__$1);
var G__12024 = null;
var G__12025 = 0;
var G__12026 = 0;
seq__11926_12006 = G__12023;
chunk__11927_12007 = G__12024;
count__11928_12008 = G__12025;
i__11929_12009 = G__12026;
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
}),cljs.core.map.call(null,(function (p__11934){var vec__11935 = p__11934;var k = cljs.core.nth.call(null,vec__11935,0,null);var v = cljs.core.nth.call(null,vec__11935,1,null);return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"package","package",4501809080),new cljs.core.Keyword(null,"range","range",1122184367),new cljs.core.Keyword(null,"version","version",1365512266)],[lt.plugins.elm_light.utils.nskw__GT_name.call(null,k),v,new cljs.core.Keyword(null,"version","version",1365512266).cljs$core$IFn$_invoke$arity$1(cljs.core.some.call(null,((function (vec__11935,k,v){
return (function (p1__11930_SHARP_){if(cljs.core._EQ_.call(null,lt.plugins.elm_light.utils.nskw__GT_name.call(null,k),new cljs.core.Keyword(null,"package","package",4501809080).cljs$core$IFn$_invoke$arity$1(p1__11930_SHARP_)))
{return p1__11930_SHARP_;
} else
{return null;
}
});})(vec__11935,k,v))
,new cljs.core.Keyword(null,"packages","packages",1764771935).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))))]);
}),new cljs.core.Keyword(null,"dependencies","dependencies",1517678747).cljs$core$IFn$_invoke$arity$1(pkg_json))));if(temp__4092__auto__)
{var edges = temp__4092__auto__;lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",1016980252),new cljs.core.Keyword(null,"edges","edges",1110261192)], null),((function (edges,temp__4092__auto__){
return (function (p1__11931_SHARP_){return cljs.core.concat.call(null,p1__11931_SHARP_,edges);
});})(edges,temp__4092__auto__))
);
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"elm.graph.render","elm.graph.render",2076182000));
} else
{return null;
}
});
lt.plugins.elm_light.graph.__BEH__on_get_transitives = (function __BEH__on_get_transitives(this$){var transitives = cljs.core.remove.call(null,new cljs.core.Keyword(null,"range","range",1122184367),new cljs.core.Keyword(null,"packages","packages",1764771935).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))));lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",1016980252),new cljs.core.Keyword(null,"nodes","nodes",1118897699)], null),((function (transitives){
return (function (p1__11936_SHARP_){return cljs.core.concat.call(null,p1__11936_SHARP_,transitives);
});})(transitives))
);
lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"elm.graph.render","elm.graph.render",2076182000));
var seq__11941 = cljs.core.seq.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"version","version",1365512266),new cljs.core.Keyword(null,"packages","packages",1764771935).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))));var chunk__11942 = null;var count__11943 = 0;var i__11944 = 0;while(true){
if((i__11944 < count__11943))
{var x = cljs.core._nth.call(null,chunk__11942,i__11944);lt.plugins.elm_light.graph.get_package_json.call(null,x,cljs.core.partial.call(null,lt.plugins.elm_light.graph.add_edges_for_dep,this$,x));
{
var G__12027 = seq__11941;
var G__12028 = chunk__11942;
var G__12029 = count__11943;
var G__12030 = (i__11944 + 1);
seq__11941 = G__12027;
chunk__11942 = G__12028;
count__11943 = G__12029;
i__11944 = G__12030;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__11941);if(temp__4092__auto__)
{var seq__11941__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11941__$1))
{var c__5632__auto__ = cljs.core.chunk_first.call(null,seq__11941__$1);{
var G__12031 = cljs.core.chunk_rest.call(null,seq__11941__$1);
var G__12032 = c__5632__auto__;
var G__12033 = cljs.core.count.call(null,c__5632__auto__);
var G__12034 = 0;
seq__11941 = G__12031;
chunk__11942 = G__12032;
count__11943 = G__12033;
i__11944 = G__12034;
continue;
}
} else
{var x = cljs.core.first.call(null,seq__11941__$1);lt.plugins.elm_light.graph.get_package_json.call(null,x,cljs.core.partial.call(null,lt.plugins.elm_light.graph.add_edges_for_dep,this$,x));
{
var G__12035 = cljs.core.next.call(null,seq__11941__$1);
var G__12036 = null;
var G__12037 = 0;
var G__12038 = 0;
seq__11941 = G__12035;
chunk__11942 = G__12036;
count__11943 = G__12037;
i__11944 = G__12038;
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
lt.plugins.elm_light.graph.get_dependency_data = (function get_dependency_data(project_path){var pkgs = cljs.core.map.call(null,(function (p1__11946_SHARP_){return cljs.core.assoc.call(null,p1__11946_SHARP_,new cljs.core.Keyword(null,"summary","summary",3451231000),new cljs.core.Keyword(null,"summary","summary",3451231000).cljs$core$IFn$_invoke$arity$1(lt.plugins.elm_light.graph.find_package_by_name.call(null,lt.plugins.elm_light.graph.dependency_graph,new cljs.core.Keyword(null,"package","package",4501809080).cljs$core$IFn$_invoke$arity$1(p1__11946_SHARP_))));
}),cljs.core.map.call(null,(function (p1__11945_SHARP_){return clojure.set.rename_keys.call(null,p1__11945_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"exact","exact",1110851185),new cljs.core.Keyword(null,"version","version",1365512266)], null));
}),lt.plugins.elm_light.utils.get_project_deps.call(null,project_path)));var direct = cljs.core.filter.call(null,new cljs.core.Keyword(null,"range","range",1122184367),pkgs);var rootVersion = new cljs.core.Keyword(null,"version","version",1365512266).cljs$core$IFn$_invoke$arity$1(lt.plugins.elm_light.utils.parse_json_file.call(null,lt.objs.files.join.call(null,project_path,"elm-package.json")));var root = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"package","package",4501809080),lt.objs.files.basename.call(null,project_path),new cljs.core.Keyword(null,"version","version",1365512266),rootVersion,new cljs.core.Keyword(null,"shape","shape",1123304211),"ellipse"], null);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"packages","packages",1764771935),pkgs,new cljs.core.Keyword(null,"nodes","nodes",1118897699),cljs.core.conj.call(null,direct,root),new cljs.core.Keyword(null,"edges","edges",1110261192),cljs.core.map.call(null,((function (pkgs,direct,rootVersion,root){
return (function (p1__11947_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"label","label",1116631654)],[lt.plugins.elm_light.graph.dep_id.call(null,root),lt.plugins.elm_light.graph.dep_id.call(null,p1__11947_SHARP_),new cljs.core.Keyword(null,"range","range",1122184367).cljs$core$IFn$_invoke$arity$1(p1__11947_SHARP_)]);
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
return (function (p__18979){var vec__18980 = p__18979;var k = cljs.core.nth.call(null,vec__18980,0,null);var v = cljs.core.nth.call(null,vec__18980,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.elm_light.utils.nskw__GT_name.call(null,k),v], null);
});})(pkg_file))
,deps)),pkg);
});})(pkg_file))
)));
});
lt.plugins.elm_light.packages.project_wrapper = (function project_wrapper(this$){var e__6297__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.elm","div.elm",2686466363),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"project-packages-wrapper"], null),"Retrieving project package info..."], null)], null));var seq__18987_19012 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__18988_19013 = null;var count__18989_19014 = 0;var i__18990_19015 = 0;while(true){
if((i__18990_19015 < count__18989_19014))
{var vec__18991_19016 = cljs.core._nth.call(null,chunk__18988_19013,i__18990_19015);var ev__6298__auto___19017 = cljs.core.nth.call(null,vec__18991_19016,0,null);var func__6299__auto___19018 = cljs.core.nth.call(null,vec__18991_19016,1,null);lt.util.dom.on.call(null,e__6297__auto__,ev__6298__auto___19017,func__6299__auto___19018);
{
var G__19019 = seq__18987_19012;
var G__19020 = chunk__18988_19013;
var G__19021 = count__18989_19014;
var G__19022 = (i__18990_19015 + 1);
seq__18987_19012 = G__19019;
chunk__18988_19013 = G__19020;
count__18989_19014 = G__19021;
i__18990_19015 = G__19022;
continue;
}
} else
{var temp__4092__auto___19023 = cljs.core.seq.call(null,seq__18987_19012);if(temp__4092__auto___19023)
{var seq__18987_19024__$1 = temp__4092__auto___19023;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18987_19024__$1))
{var c__5632__auto___19025 = cljs.core.chunk_first.call(null,seq__18987_19024__$1);{
var G__19026 = cljs.core.chunk_rest.call(null,seq__18987_19024__$1);
var G__19027 = c__5632__auto___19025;
var G__19028 = cljs.core.count.call(null,c__5632__auto___19025);
var G__19029 = 0;
seq__18987_19012 = G__19026;
chunk__18988_19013 = G__19027;
count__18989_19014 = G__19028;
i__18990_19015 = G__19029;
continue;
}
} else
{var vec__18992_19030 = cljs.core.first.call(null,seq__18987_19024__$1);var ev__6298__auto___19031 = cljs.core.nth.call(null,vec__18992_19030,0,null);var func__6299__auto___19032 = cljs.core.nth.call(null,vec__18992_19030,1,null);lt.util.dom.on.call(null,e__6297__auto__,ev__6298__auto___19031,func__6299__auto___19032);
{
var G__19033 = cljs.core.next.call(null,seq__18987_19024__$1);
var G__19034 = null;
var G__19035 = 0;
var G__19036 = 0;
seq__18987_19012 = G__19033;
chunk__18988_19013 = G__19034;
count__18989_19014 = G__19035;
i__18990_19015 = G__19036;
continue;
}
}
} else
{}
}
break;
}
return e__6297__auto__;
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.packages","elm-packages","lt.plugins.elm-light.packages/elm-packages",4552372902),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elm.packages","elm.packages",3931311271),null], null), null),new cljs.core.Keyword(null,"label","label",1116631654),"Elm project packages",new cljs.core.Keyword(null,"name","name",1017277949),"Elm project packages",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){lt.plugins.elm_light.utils.fetch_all_packages.call(null,(function (p1__18993_SHARP_){return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"all-packages","all-packages",1123981067),p1__18993_SHARP_], null));
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
lt.plugins.elm_light.packages.idx_active = (function idx_active(items){return cljs.core.first.call(null,cljs.core.keep_indexed.call(null,(function (p1__18995_SHARP_,p2__18994_SHARP_){if(cljs.core.truth_(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(p2__18994_SHARP_)))
{return p1__18995_SHARP_;
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
lt.plugins.elm_light.packages.on_pkg_sel = (function on_pkg_sel(){var items_19037 = new cljs.core.Keyword(null,"ac-packages","ac-packages",1548109226).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.elm_light.packages.elm_packages));var temp__4090__auto___19038 = lt.plugins.elm_light.packages.idx_active.call(null,items_19037);if(cljs.core.truth_(temp__4090__auto___19038))
{var idx_19039 = temp__4090__auto___19038;lt.object.assoc_in_BANG_.call(null,lt.plugins.elm_light.packages.elm_packages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ac-versions","ac-versions",3107155800)], null),new cljs.core.Keyword(null,"versions","versions",3323818509).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,items_19037,idx_19039)));
lt.object.assoc_in_BANG_.call(null,lt.plugins.elm_light.packages.elm_packages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ac-version","ac-version",2051259807)], null),cljs.core.first.call(null,new cljs.core.Keyword(null,"versions","versions",3323818509).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,items_19037,idx_19039))));
lt.object.assoc_in_BANG_.call(null,lt.plugins.elm_light.packages.elm_packages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ac-package","ac-package",892589325)], null),new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,items_19037,idx_19039)));
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
return (function (p1__18996_SHARP_){if(cljs.core._EQ_.call(null,p1__18996_SHARP_,0))
{lt.objs.notifos.done_working.call(null);
} else
{lt.objs.notifos.set_msg_BANG_.call(null,"Error installing elm package",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),"error",new cljs.core.Keyword(null,"timeout","timeout",3994960083),5000], null));
}
lt.object.raise.call(null,lt.plugins.elm_light.packages.elm_packages,new cljs.core.Keyword(null,"elm.show.project.packages","elm.show.project.packages",3385102109),new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.elm_light.packages.elm_packages)));
return lt.object.raise.call(null,lt.plugins.elm_light.graph.dependency_graph,new cljs.core.Keyword(null,"elm.graph.show-dependencies","elm.graph.show-dependencies",3464547203),new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.elm_light.packages.elm_packages)),false);
});})(proc,args))
);
proc.stdout.on("data",((function (proc,args){
return (function (p1__18997_SHARP_){return lt.objs.notifos.msg_STAR_.call(null,[cljs.core.str("Package install: "),cljs.core.str(p1__18997_SHARP_)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"timeout","timeout",3994960083),5000], null));
});})(proc,args))
);
return proc.stderr.on("data",((function (proc,args){
return (function (p1__18998_SHARP_){return lt.objs.console.error.call(null,[cljs.core.str(p1__18998_SHARP_)].join(''));
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
lt.plugins.elm_light.packages.PackageRow = quiescent.component.call(null,(function (p__18999){var map__19000 = p__18999;var map__19000__$1 = ((cljs.core.seq_QMARK_.call(null,map__19000))?cljs.core.apply.call(null,cljs.core.hash_map,map__19000):map__19000);var on_browse = cljs.core.get.call(null,map__19000__$1,new cljs.core.Keyword(null,"on-browse","on-browse",587885994));var on_remove = cljs.core.get.call(null,map__19000__$1,new cljs.core.Keyword(null,"on-remove","on-remove",1033879460));var exact = cljs.core.get.call(null,map__19000__$1,new cljs.core.Keyword(null,"exact","exact",1110851185));var range = cljs.core.get.call(null,map__19000__$1,new cljs.core.Keyword(null,"range","range",1122184367));var package$ = cljs.core.get.call(null,map__19000__$1,new cljs.core.Keyword(null,"package","package",4501809080));return quiescent.dom.tr.call(null,cljs.core.PersistentArrayMap.EMPTY,quiescent.dom.td.call(null,cljs.core.PersistentArrayMap.EMPTY,(cljs.core.truth_((function (){var and__4872__auto__ = package$;if(cljs.core.truth_(and__4872__auto__))
{return exact;
} else
{return and__4872__auto__;
}
})())?quiescent.dom.span.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",1004015509),"link",new cljs.core.Keyword(null,"onClick","onClick",3956969051),((function (map__19000,map__19000__$1,on_browse,on_remove,exact,range,package$){
return (function (){return on_browse.call(null,package$,exact);
});})(map__19000,map__19000__$1,on_browse,on_remove,exact,range,package$))
], null),package$):package$)),quiescent.dom.td.call(null,cljs.core.PersistentArrayMap.EMPTY,range),quiescent.dom.td.call(null,cljs.core.PersistentArrayMap.EMPTY,exact),quiescent.dom.td.call(null,cljs.core.PersistentArrayMap.EMPTY,(cljs.core.truth_(range)?quiescent.dom.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",3956969051),((function (map__19000,map__19000__$1,on_browse,on_remove,exact,range,package$){
return (function (){return on_remove.call(null,package$);
});})(map__19000,map__19000__$1,on_browse,on_remove,exact,range,package$))
], null),"remove"):null)));
}));
/**
* 
*/
lt.plugins.elm_light.packages.PackageTable = quiescent.component.call(null,(function (props){return quiescent.dom.table.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",1004015509),"package-table"], null),quiescent.dom.thead.call(null,cljs.core.PersistentArrayMap.EMPTY,quiescent.dom.tr.call(null,cljs.core.PersistentArrayMap.EMPTY,quiescent.dom.th.call(null,cljs.core.PersistentArrayMap.EMPTY,"Package"),quiescent.dom.th.call(null,cljs.core.PersistentArrayMap.EMPTY,"Range"),quiescent.dom.th.call(null,cljs.core.PersistentArrayMap.EMPTY,"Exact"),quiescent.dom.th.call(null,cljs.core.PersistentArrayMap.EMPTY,""))),cljs.core.apply.call(null,quiescent.dom.tbody,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__19001_SHARP_){return lt.plugins.elm_light.packages.PackageRow.call(null,cljs.core.assoc.call(null,p1__19001_SHARP_,new cljs.core.Keyword(null,"on-remove","on-remove",1033879460),new cljs.core.Keyword(null,"on-remove","on-remove",1033879460).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"on-browse","on-browse",587885994),new cljs.core.Keyword(null,"on-browse","on-browse",587885994).cljs$core$IFn$_invoke$arity$1(props)));
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
lt.plugins.elm_light.inline_doc.doc_ui_header = (function doc_ui_header(doc){var e__6297__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.inline-doc","div.inline-doc",3323486451),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(doc)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",1013907516),new cljs.core.Keyword(null,"ns","ns",1013907767).cljs$core$IFn$_invoke$arity$1(doc)], null),(cljs.core.truth_((function (){var and__4872__auto__ = new cljs.core.Keyword(null,"args","args",1016906831).cljs$core$IFn$_invoke$arity$1(doc);if(cljs.core.truth_(and__4872__auto__))
{return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"args","args",1016906831).cljs$core$IFn$_invoke$arity$1(doc),"nil");
} else
{return and__4872__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",1013907517),new cljs.core.Keyword(null,"args","args",1016906831).cljs$core$IFn$_invoke$arity$1(doc)], null):null)], null));var seq__18678_18700 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__18679_18701 = null;var count__18680_18702 = 0;var i__18681_18703 = 0;while(true){
if((i__18681_18703 < count__18680_18702))
{var vec__18682_18704 = cljs.core._nth.call(null,chunk__18679_18701,i__18681_18703);var ev__6298__auto___18705 = cljs.core.nth.call(null,vec__18682_18704,0,null);var func__6299__auto___18706 = cljs.core.nth.call(null,vec__18682_18704,1,null);lt.util.dom.on.call(null,e__6297__auto__,ev__6298__auto___18705,func__6299__auto___18706);
{
var G__18707 = seq__18678_18700;
var G__18708 = chunk__18679_18701;
var G__18709 = count__18680_18702;
var G__18710 = (i__18681_18703 + 1);
seq__18678_18700 = G__18707;
chunk__18679_18701 = G__18708;
count__18680_18702 = G__18709;
i__18681_18703 = G__18710;
continue;
}
} else
{var temp__4092__auto___18711 = cljs.core.seq.call(null,seq__18678_18700);if(temp__4092__auto___18711)
{var seq__18678_18712__$1 = temp__4092__auto___18711;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18678_18712__$1))
{var c__5632__auto___18713 = cljs.core.chunk_first.call(null,seq__18678_18712__$1);{
var G__18714 = cljs.core.chunk_rest.call(null,seq__18678_18712__$1);
var G__18715 = c__5632__auto___18713;
var G__18716 = cljs.core.count.call(null,c__5632__auto___18713);
var G__18717 = 0;
seq__18678_18700 = G__18714;
chunk__18679_18701 = G__18715;
count__18680_18702 = G__18716;
i__18681_18703 = G__18717;
continue;
}
} else
{var vec__18683_18718 = cljs.core.first.call(null,seq__18678_18712__$1);var ev__6298__auto___18719 = cljs.core.nth.call(null,vec__18683_18718,0,null);var func__6299__auto___18720 = cljs.core.nth.call(null,vec__18683_18718,1,null);lt.util.dom.on.call(null,e__6297__auto__,ev__6298__auto___18719,func__6299__auto___18720);
{
var G__18721 = cljs.core.next.call(null,seq__18678_18712__$1);
var G__18722 = null;
var G__18723 = 0;
var G__18724 = 0;
seq__18678_18700 = G__18721;
chunk__18679_18701 = G__18722;
count__18680_18702 = G__18723;
i__18681_18703 = G__18724;
continue;
}
}
} else
{}
}
break;
}
return e__6297__auto__;
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
lt.plugins.elm_light.inline_doc.highlight_code = (function highlight_code(container_elem){var seq__18688 = cljs.core.seq.call(null,lt.util.dom.$$.call(null,"pre > code",container_elem));var chunk__18689 = null;var count__18690 = 0;var i__18691 = 0;while(true){
if((i__18691 < count__18690))
{var code = cljs.core._nth.call(null,chunk__18689,i__18691);hljs.highlightBlock(code);
{
var G__18725 = seq__18688;
var G__18726 = chunk__18689;
var G__18727 = count__18690;
var G__18728 = (i__18691 + 1);
seq__18688 = G__18725;
chunk__18689 = G__18726;
count__18690 = G__18727;
i__18691 = G__18728;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__18688);if(temp__4092__auto__)
{var seq__18688__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18688__$1))
{var c__5632__auto__ = cljs.core.chunk_first.call(null,seq__18688__$1);{
var G__18729 = cljs.core.chunk_rest.call(null,seq__18688__$1);
var G__18730 = c__5632__auto__;
var G__18731 = cljs.core.count.call(null,c__5632__auto__);
var G__18732 = 0;
seq__18688 = G__18729;
chunk__18689 = G__18730;
count__18690 = G__18731;
i__18691 = G__18732;
continue;
}
} else
{var code = cljs.core.first.call(null,seq__18688__$1);hljs.highlightBlock(code);
{
var G__18733 = cljs.core.next.call(null,seq__18688__$1);
var G__18734 = null;
var G__18735 = 0;
var G__18736 = 0;
seq__18688 = G__18733;
chunk__18689 = G__18734;
count__18690 = G__18735;
i__18691 = G__18736;
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
lt.plugins.elm_light.inline_doc.add_click_handlers = (function add_click_handlers(elem){var seq__18696 = cljs.core.seq.call(null,lt.util.dom.$$.call(null,"a",elem));var chunk__18697 = null;var count__18698 = 0;var i__18699 = 0;while(true){
if((i__18699 < count__18698))
{var link = cljs.core._nth.call(null,chunk__18697,i__18699);lt.util.dom.on.call(null,link,"click",((function (seq__18696,chunk__18697,count__18698,i__18699,link){
return (function (){return lt.plugins.elm_light.inline_doc.handle_url_click.call(null,lt.util.dom.attr.call(null,link,new cljs.core.Keyword(null,"href","href",1017115293)));
});})(seq__18696,chunk__18697,count__18698,i__18699,link))
);
{
var G__18737 = seq__18696;
var G__18738 = chunk__18697;
var G__18739 = count__18698;
var G__18740 = (i__18699 + 1);
seq__18696 = G__18737;
chunk__18697 = G__18738;
count__18698 = G__18739;
i__18699 = G__18740;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__18696);if(temp__4092__auto__)
{var seq__18696__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18696__$1))
{var c__5632__auto__ = cljs.core.chunk_first.call(null,seq__18696__$1);{
var G__18741 = cljs.core.chunk_rest.call(null,seq__18696__$1);
var G__18742 = c__5632__auto__;
var G__18743 = cljs.core.count.call(null,c__5632__auto__);
var G__18744 = 0;
seq__18696 = G__18741;
chunk__18697 = G__18742;
count__18698 = G__18743;
i__18699 = G__18744;
continue;
}
} else
{var link = cljs.core.first.call(null,seq__18696__$1);lt.util.dom.on.call(null,link,"click",((function (seq__18696,chunk__18697,count__18698,i__18699,link,seq__18696__$1,temp__4092__auto__){
return (function (){return lt.plugins.elm_light.inline_doc.handle_url_click.call(null,lt.util.dom.attr.call(null,link,new cljs.core.Keyword(null,"href","href",1017115293)));
});})(seq__18696,chunk__18697,count__18698,i__18699,link,seq__18696__$1,temp__4092__auto__))
);
{
var G__18745 = cljs.core.next.call(null,seq__18696__$1);
var G__18746 = null;
var G__18747 = 0;
var G__18748 = 0;
seq__18696 = G__18745;
chunk__18697 = G__18746;
count__18698 = G__18747;
i__18699 = G__18748;
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
lt.plugins.elm_light.autocompleter.core.default_options = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"async","async",1107031534),true,new cljs.core.Keyword(null,"completeSingle","completeSingle",2100037203),false,new cljs.core.Keyword(null,"supportsSelection","supportsSelection",3475218138),true,new cljs.core.Keyword(null,"closeOnUnfocus","closeOnUnfocus",2215570266),true,new cljs.core.Keyword(null,"customKeys","customKeys",3726901367),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"Up","Up",1013906989),(function (p1__19094_SHARP_,p2__19093_SHARP_){return p2__19093_SHARP_.moveFocus.call(null,-1);
}),new cljs.core.Keyword(null,"Down","Down",1016040500),(function (p1__19096_SHARP_,p2__19095_SHARP_){return p2__19095_SHARP_.moveFocus.call(null,1);
}),new cljs.core.Keyword(null,"Enter","Enter",1081018922),(function (a,b){return b.pick();
}),new cljs.core.Keyword(null,"Tab","Tab",1013988071),(function (a,b){return b.pick();
}),new cljs.core.Keyword(null,"Esc","Esc",1013974215),(function (p1__19098_SHARP_,p2__19097_SHARP_){return p2__19097_SHARP_.close.call(null);
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
{return cljs.core.clj__GT_js.call(null,(function (p1__19100_SHARP_){var fst = cljs.core.first.call(null,new cljs.core.Keyword(null,"list","list",1017226256).cljs$core$IFn$_invoke$arity$1(p1__19100_SHARP_));return cljs.core.assoc.call(null,p1__19100_SHARP_,new cljs.core.Keyword(null,"from","from",1017056028),new cljs.core.Keyword(null,"from","from",1017056028).cljs$core$IFn$_invoke$arity$1(fst),new cljs.core.Keyword(null,"to","to",1013907949),new cljs.core.Keyword(null,"to","to",1013907949).cljs$core$IFn$_invoke$arity$1(fst));
}).call(null,cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"list","list",1017226256)],[cljs.core.take.call(null,25,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"text","text",1017460895),lt.plugins.elm_light.autocompleter.core.distinct_completions.call(null,cljs.core.filter.call(null,(function (p1__19099_SHARP_){return (new cljs.core.Keyword(null,"displayText","displayText",2728236161).cljs$core$IFn$_invoke$arity$1(p1__19099_SHARP_).length < 1000);
}),hints))))])));
} else
{return null;
}
});
/**
* Listen for hint results from all given channels
* Will raise a behavior to show results when all channels have delivered a result
* or alternatively the specified timeout has elapsed
*/
lt.plugins.elm_light.autocompleter.core.listen_for_hint_results = (function listen_for_hint_results(ed,channels,hinter_ch){var t = cljs.core.async.timeout.call(null,500);var c__13308__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13308__auto__,t){
return (function (){var f__13309__auto__ = (function (){var switch__13238__auto__ = ((function (c__13308__auto__,t){
return (function (state_19186){var state_val_19187 = (state_19186[1]);if((state_val_19187 === 1))
{var inst_19155 = cljs.core.conj.call(null,channels,t);var inst_19156 = cljs.core.PersistentVector.EMPTY;var inst_19157 = inst_19155;var state_19186__$1 = (function (){var statearr_19188 = state_19186;(statearr_19188[7] = inst_19156);
(statearr_19188[8] = inst_19157);
return statearr_19188;
})();var statearr_19189_19237 = state_19186__$1;(statearr_19189_19237[2] = null);
(statearr_19189_19237[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19187 === 2))
{var inst_19157 = (state_19186[8]);var inst_19159 = cljs.core.count.call(null,inst_19157);var inst_19160 = cljs.core._EQ_.call(null,1,inst_19159);var state_19186__$1 = state_19186;if(inst_19160)
{var statearr_19190_19238 = state_19186__$1;(statearr_19190_19238[1] = 4);
} else
{var statearr_19191_19239 = state_19186__$1;(statearr_19191_19239[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19187 === 3))
{var inst_19184 = (state_19186[2]);var state_19186__$1 = state_19186;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19186__$1,inst_19184);
} else
{if((state_val_19187 === 4))
{var inst_19156 = (state_19186[7]);var inst_19162 = cljs.core.async.put_BANG_.call(null,hinter_ch,inst_19156);var state_19186__$1 = state_19186;var statearr_19192_19240 = state_19186__$1;(statearr_19192_19240[2] = inst_19162);
(statearr_19192_19240[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19187 === 5))
{var inst_19157 = (state_19186[8]);var state_19186__$1 = state_19186;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_19186__$1,7,inst_19157);
} else
{if((state_val_19187 === 6))
{var inst_19182 = (state_19186[2]);var state_19186__$1 = state_19186;var statearr_19193_19241 = state_19186__$1;(statearr_19193_19241[2] = inst_19182);
(statearr_19193_19241[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19187 === 7))
{var inst_19168 = (state_19186[9]);var inst_19166 = (state_19186[2]);var inst_19167 = cljs.core.nth.call(null,inst_19166,0,null);var inst_19168__$1 = cljs.core.nth.call(null,inst_19166,1,null);var inst_19169 = (inst_19168__$1 === t);var state_19186__$1 = (function (){var statearr_19194 = state_19186;(statearr_19194[10] = inst_19167);
(statearr_19194[9] = inst_19168__$1);
return statearr_19194;
})();if(cljs.core.truth_(inst_19169))
{var statearr_19195_19242 = state_19186__$1;(statearr_19195_19242[1] = 8);
} else
{var statearr_19196_19243 = state_19186__$1;(statearr_19196_19243[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19187 === 8))
{var inst_19156 = (state_19186[7]);var inst_19171 = cljs.core.println.call(null,"WARNING: Timeout waiting for hinter provider channel results");var inst_19172 = cljs.core.async.put_BANG_.call(null,hinter_ch,inst_19156);var state_19186__$1 = (function (){var statearr_19197 = state_19186;(statearr_19197[11] = inst_19171);
return statearr_19197;
})();var statearr_19198_19244 = state_19186__$1;(statearr_19198_19244[2] = inst_19172);
(statearr_19198_19244[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19187 === 9))
{var inst_19156 = (state_19186[7]);var inst_19157 = (state_19186[8]);var inst_19167 = (state_19186[10]);var inst_19168 = (state_19186[9]);var inst_19174 = cljs.core.into.call(null,inst_19156,inst_19167);var inst_19175 = [inst_19168];var inst_19176 = cljs.core.PersistentHashSet.fromArray.call(null,inst_19175,true);var inst_19177 = cljs.core.remove.call(null,inst_19176,inst_19157);var inst_19156__$1 = inst_19174;var inst_19157__$1 = inst_19177;var state_19186__$1 = (function (){var statearr_19199 = state_19186;(statearr_19199[7] = inst_19156__$1);
(statearr_19199[8] = inst_19157__$1);
return statearr_19199;
})();var statearr_19200_19245 = state_19186__$1;(statearr_19200_19245[2] = null);
(statearr_19200_19245[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19187 === 10))
{var inst_19180 = (state_19186[2]);var state_19186__$1 = state_19186;var statearr_19201_19246 = state_19186__$1;(statearr_19201_19246[2] = inst_19180);
(statearr_19201_19246[1] = 6);
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
});})(c__13308__auto__,t))
;return ((function (switch__13238__auto__,c__13308__auto__,t){
return (function() {
var state_machine__13239__auto__ = null;
var state_machine__13239__auto____0 = (function (){var statearr_19205 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19205[0] = state_machine__13239__auto__);
(statearr_19205[1] = 1);
return statearr_19205;
});
var state_machine__13239__auto____1 = (function (state_19186){while(true){
var ret_value__13240__auto__ = (function (){try{while(true){
var result__13241__auto__ = switch__13238__auto__.call(null,state_19186);if(cljs.core.keyword_identical_QMARK_.call(null,result__13241__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13241__auto__;
}
break;
}
}catch (e19206){if((e19206 instanceof Object))
{var ex__13242__auto__ = e19206;var statearr_19207_19247 = state_19186;(statearr_19207_19247[5] = ex__13242__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19186);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19206;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13240__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19248 = state_19186;
state_19186 = G__19248;
continue;
}
} else
{return ret_value__13240__auto__;
}
break;
}
});
state_machine__13239__auto__ = function(state_19186){
switch(arguments.length){
case 0:
return state_machine__13239__auto____0.call(this);
case 1:
return state_machine__13239__auto____1.call(this,state_19186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13239__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13239__auto____0;
state_machine__13239__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13239__auto____1;
return state_machine__13239__auto__;
})()
;})(switch__13238__auto__,c__13308__auto__,t))
})();var state__13310__auto__ = (function (){var statearr_19208 = f__13309__auto__.call(null);(statearr_19208[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13308__auto__);
return statearr_19208;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13310__auto__);
});})(c__13308__auto__,t))
);
return c__13308__auto__;
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
return (function (_,cb){var c__13308__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13308__auto__,ch){
return (function (){var f__13309__auto__ = (function (){var switch__13238__auto__ = ((function (c__13308__auto__,ch){
return (function (state_19228){var state_val_19229 = (state_19228[1]);if((state_val_19229 === 2))
{var inst_19224 = (state_19228[2]);var inst_19225 = lt.plugins.elm_light.autocompleter.core.process_hint_results.call(null,inst_19224);var inst_19226 = cb.call(null,inst_19225);var state_19228__$1 = state_19228;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19228__$1,inst_19226);
} else
{if((state_val_19229 === 1))
{var state_19228__$1 = state_19228;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19228__$1,2,ch);
} else
{return null;
}
}
});})(c__13308__auto__,ch))
;return ((function (switch__13238__auto__,c__13308__auto__,ch){
return (function() {
var state_machine__13239__auto__ = null;
var state_machine__13239__auto____0 = (function (){var statearr_19233 = [null,null,null,null,null,null,null];(statearr_19233[0] = state_machine__13239__auto__);
(statearr_19233[1] = 1);
return statearr_19233;
});
var state_machine__13239__auto____1 = (function (state_19228){while(true){
var ret_value__13240__auto__ = (function (){try{while(true){
var result__13241__auto__ = switch__13238__auto__.call(null,state_19228);if(cljs.core.keyword_identical_QMARK_.call(null,result__13241__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13241__auto__;
}
break;
}
}catch (e19234){if((e19234 instanceof Object))
{var ex__13242__auto__ = e19234;var statearr_19235_19249 = state_19228;(statearr_19235_19249[5] = ex__13242__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19228);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19234;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13240__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19250 = state_19228;
state_19228 = G__19250;
continue;
}
} else
{return ret_value__13240__auto__;
}
break;
}
});
state_machine__13239__auto__ = function(state_19228){
switch(arguments.length){
case 0:
return state_machine__13239__auto____0.call(this);
case 1:
return state_machine__13239__auto____1.call(this,state_19228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13239__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13239__auto____0;
state_machine__13239__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13239__auto____1;
return state_machine__13239__auto__;
})()
;})(switch__13238__auto__,c__13308__auto__,ch))
})();var state__13310__auto__ = (function (){var statearr_19236 = f__13309__auto__.call(null);(statearr_19236[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13308__auto__);
return statearr_19236;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13310__auto__);
});})(c__13308__auto__,ch))
);
return c__13308__auto__;
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
var G__19058 = (line - 1);
line = G__19058;
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
var G__19059 = (line + 1);
line = G__19059;
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
var G__19060 = (line - 1);
line = G__19060;
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
var seq__11678_11701 = cljs.core.seq.call(null,lt.objs.editor.pool.containing_path.call(null,new cljs.core.Keyword(null,"dir","dir",1014003711).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client))));var chunk__11679_11702 = null;var count__11680_11703 = 0;var i__11681_11704 = 0;while(true){
if((i__11681_11704 < count__11680_11703))
{var ed_11705 = cljs.core._nth.call(null,chunk__11679_11702,i__11681_11704);lt.object.raise.call(null,ed_11705,new cljs.core.Keyword(null,"project-disconnected","project-disconnected",2085293025));
{
var G__11706 = seq__11678_11701;
var G__11707 = chunk__11679_11702;
var G__11708 = count__11680_11703;
var G__11709 = (i__11681_11704 + 1);
seq__11678_11701 = G__11706;
chunk__11679_11702 = G__11707;
count__11680_11703 = G__11708;
i__11681_11704 = G__11709;
continue;
}
} else
{var temp__4092__auto___11710 = cljs.core.seq.call(null,seq__11678_11701);if(temp__4092__auto___11710)
{var seq__11678_11711__$1 = temp__4092__auto___11710;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11678_11711__$1))
{var c__5632__auto___11712 = cljs.core.chunk_first.call(null,seq__11678_11711__$1);{
var G__11713 = cljs.core.chunk_rest.call(null,seq__11678_11711__$1);
var G__11714 = c__5632__auto___11712;
var G__11715 = cljs.core.count.call(null,c__5632__auto___11712);
var G__11716 = 0;
seq__11678_11701 = G__11713;
chunk__11679_11702 = G__11714;
count__11680_11703 = G__11715;
i__11681_11704 = G__11716;
continue;
}
} else
{var ed_11717 = cljs.core.first.call(null,seq__11678_11711__$1);lt.object.raise.call(null,ed_11717,new cljs.core.Keyword(null,"project-disconnected","project-disconnected",2085293025));
{
var G__11718 = cljs.core.next.call(null,seq__11678_11711__$1);
var G__11719 = null;
var G__11720 = 0;
var G__11721 = 0;
seq__11678_11701 = G__11718;
chunk__11679_11702 = G__11719;
count__11680_11703 = G__11720;
i__11681_11704 = G__11721;
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
var seq__11688 = cljs.core.seq.call(null,lt.objs.editor.pool.containing_path.call(null,new cljs.core.Keyword(null,"dir","dir",1014003711).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client))));var chunk__11689 = null;var count__11690 = 0;var i__11691 = 0;while(true){
if((i__11691 < count__11690))
{var ed = cljs.core._nth.call(null,chunk__11689,i__11691);lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"project-connected","project-connected",3474311367));
{
var G__11722 = seq__11688;
var G__11723 = chunk__11689;
var G__11724 = count__11690;
var G__11725 = (i__11691 + 1);
seq__11688 = G__11722;
chunk__11689 = G__11723;
count__11690 = G__11724;
i__11691 = G__11725;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__11688);if(temp__4092__auto__)
{var seq__11688__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11688__$1))
{var c__5632__auto__ = cljs.core.chunk_first.call(null,seq__11688__$1);{
var G__11726 = cljs.core.chunk_rest.call(null,seq__11688__$1);
var G__11727 = c__5632__auto__;
var G__11728 = cljs.core.count.call(null,c__5632__auto__);
var G__11729 = 0;
seq__11688 = G__11726;
chunk__11689 = G__11727;
count__11690 = G__11728;
i__11691 = G__11729;
continue;
}
} else
{var ed = cljs.core.first.call(null,seq__11688__$1);lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"project-connected","project-connected",3474311367));
{
var G__11730 = cljs.core.next.call(null,seq__11688__$1);
var G__11731 = null;
var G__11732 = 0;
var G__11733 = 0;
seq__11688 = G__11730;
chunk__11689 = G__11731;
count__11690 = G__11732;
i__11691 = G__11733;
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
{var map__11692 = cljs.core.last.call(null,msg);var map__11692__$1 = ((cljs.core.seq_QMARK_.call(null,map__11692))?cljs.core.apply.call(null,cljs.core.hash_map,map__11692):map__11692);var package$ = cljs.core.get.call(null,map__11692__$1,new cljs.core.Keyword(null,"package","package",4501809080));var error = cljs.core.get.call(null,map__11692__$1,new cljs.core.Keyword(null,"error","error",1110689146));var ast = cljs.core.get.call(null,map__11692__$1,new cljs.core.Keyword(null,"ast","ast",1014001140));var type = cljs.core.get.call(null,map__11692__$1,new cljs.core.Keyword(null,"type","type",1017479852));var file = cljs.core.get.call(null,map__11692__$1,new cljs.core.Keyword(null,"file","file",1017047278));var G__11693 = type;if(cljs.core._EQ_.call(null,"parsed",G__11693))
{return lt.plugins.elm_light.elm_ast.upsert_ast_BANG_.call(null,new cljs.core.Keyword(null,"dir","dir",1014003711).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file","file",1017047278),file,new cljs.core.Keyword(null,"ast","ast",1014001140),ast,new cljs.core.Keyword(null,"package","package",4501809080),package$], null));
} else
{if(cljs.core._EQ_.call(null,"parseError",G__11693))
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
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return lt.object.raise.call(null,lt.objs.clients.clients,new cljs.core.Keyword(null,"message","message",1968829305),msg);
} else
{return null;
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
return (function (p1__11694_SHARP_){return lt.plugins.elm_light.clients.on_elm_message.call(null,client,p1__11694_SHARP_);
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
lt.plugins.elm_light.clients.start_elm_client = (function start_elm_client(p__11695){var map__11697 = p__11695;var map__11697__$1 = ((cljs.core.seq_QMARK_.call(null,map__11697))?cljs.core.apply.call(null,cljs.core.hash_map,map__11697):map__11697);var props = map__11697__$1;var client = cljs.core.get.call(null,map__11697__$1,new cljs.core.Keyword(null,"client","client",3951159101));var proj_path = cljs.core.get.call(null,map__11697__$1,new cljs.core.Keyword(null,"proj-path","proj-path",4362692615));var path = cljs.core.get.call(null,map__11697__$1,new cljs.core.Keyword(null,"path","path",1017337751));lt.objs.notifos.working.call(null,"Connecting..");
return lt.plugins.elm_light.clients.claim_reactor_port.call(null,proj_path,((function (map__11697,map__11697__$1,props,client,proj_path,path){
return (function (_,port){var worker = lt.plugins.elm_light.clients.start_elm_worker.call(null,proj_path,port,client);lt.object.merge_BANG_.call(null,client,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1017277949),lt.objs.files.basename.call(null,proj_path),new cljs.core.Keyword(null,"dir","dir",1014003711),proj_path,new cljs.core.Keyword(null,"reactor-port","reactor-port",4649590590),port,new cljs.core.Keyword(null,"worker","worker",4526786288),worker,new cljs.core.Keyword(null,"commands","commands",4706336250),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"editor.elm.lint","editor.elm.lint",1086056222),null,new cljs.core.Keyword(null,"editor.elm.make","editor.elm.make",1086078217),null,new cljs.core.Keyword(null,"editor.elm.ast.passthrough","editor.elm.ast.passthrough",3082755153),null,new cljs.core.Keyword(null,"editor.eval.elm","editor.eval.elm",1083015975),null,new cljs.core.Keyword(null,"editor.elm.hint","editor.elm.hint",1085937058),null,new cljs.core.Keyword(null,"elm.repl.restart","elm.repl.restart",2931654218),null,new cljs.core.Keyword(null,"editor.elm.ast.parsetext","editor.elm.ast.parsetext",1992138717),null,new cljs.core.Keyword(null,"docs.elm.search","docs.elm.search",737241333),null,new cljs.core.Keyword(null,"editor.elm.doc","editor.elm.doc",1570413537),null,new cljs.core.Keyword(null,"editor.elm.gendoc","editor.elm.gendoc",1485628611),null,new cljs.core.Keyword(null,"elm.reload.ast","elm.reload.ast",3046520423),null], null), null)], null));
return lt.object.add_behavior_BANG_.call(null,client,new cljs.core.Keyword("lt.plugins.elm-light.clients","send!","lt.plugins.elm-light.clients/send!",867013595));
});})(map__11697,map__11697__$1,props,client,proj_path,path))
);
});
lt.plugins.elm_light.clients.try_connect = (function try_connect(p__11698){var map__11700 = p__11698;var map__11700__$1 = ((cljs.core.seq_QMARK_.call(null,map__11700))?cljs.core.apply.call(null,cljs.core.hash_map,map__11700):map__11700);var props = map__11700__$1;var info = cljs.core.get.call(null,map__11700__$1,new cljs.core.Keyword(null,"info","info",1017141280));var path = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(info);var proj_path = lt.plugins.elm_light.utils.project_path.call(null,path);var client = lt.objs.clients.client_BANG_.call(null,new cljs.core.Keyword(null,"elm-client","elm-client",1622336068));if(cljs.core.truth_(proj_path))
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
lt.plugins.elm_light.docpreview.preview_skeleton = (function preview_skeleton(this$){var e__6297__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"elm-doc-preview"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"Generating elm docs, please wait a little..."], null)], null));var seq__11740_11764 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__11741_11765 = null;var count__11742_11766 = 0;var i__11743_11767 = 0;while(true){
if((i__11743_11767 < count__11742_11766))
{var vec__11744_11768 = cljs.core._nth.call(null,chunk__11741_11765,i__11743_11767);var ev__6298__auto___11769 = cljs.core.nth.call(null,vec__11744_11768,0,null);var func__6299__auto___11770 = cljs.core.nth.call(null,vec__11744_11768,1,null);lt.util.dom.on.call(null,e__6297__auto__,ev__6298__auto___11769,func__6299__auto___11770);
{
var G__11771 = seq__11740_11764;
var G__11772 = chunk__11741_11765;
var G__11773 = count__11742_11766;
var G__11774 = (i__11743_11767 + 1);
seq__11740_11764 = G__11771;
chunk__11741_11765 = G__11772;
count__11742_11766 = G__11773;
i__11743_11767 = G__11774;
continue;
}
} else
{var temp__4092__auto___11775 = cljs.core.seq.call(null,seq__11740_11764);if(temp__4092__auto___11775)
{var seq__11740_11776__$1 = temp__4092__auto___11775;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11740_11776__$1))
{var c__5632__auto___11777 = cljs.core.chunk_first.call(null,seq__11740_11776__$1);{
var G__11778 = cljs.core.chunk_rest.call(null,seq__11740_11776__$1);
var G__11779 = c__5632__auto___11777;
var G__11780 = cljs.core.count.call(null,c__5632__auto___11777);
var G__11781 = 0;
seq__11740_11764 = G__11778;
chunk__11741_11765 = G__11779;
count__11742_11766 = G__11780;
i__11743_11767 = G__11781;
continue;
}
} else
{var vec__11745_11782 = cljs.core.first.call(null,seq__11740_11776__$1);var ev__6298__auto___11783 = cljs.core.nth.call(null,vec__11745_11782,0,null);var func__6299__auto___11784 = cljs.core.nth.call(null,vec__11745_11782,1,null);lt.util.dom.on.call(null,e__6297__auto__,ev__6298__auto___11783,func__6299__auto___11784);
{
var G__11785 = cljs.core.next.call(null,seq__11740_11776__$1);
var G__11786 = null;
var G__11787 = 0;
var G__11788 = 0;
seq__11740_11764 = G__11785;
chunk__11741_11765 = G__11786;
count__11742_11766 = G__11787;
i__11743_11767 = G__11788;
continue;
}
}
} else
{}
}
break;
}
return e__6297__auto__;
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.docpreview","elmdoc","lt.plugins.elm-light.docpreview/elmdoc",1597859033),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elmdoc","elmdoc",4008535620)], null),new cljs.core.Keyword(null,"name","name",1017277949),"elmdoc",new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.elm-light.docpreview","on-close-destroy","lt.plugins.elm-light.docpreview/on-close-destroy",906178052)], null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,filename){lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1017277949)], null),cljs.core.constantly.call(null,[cljs.core.str(filename),cljs.core.str(" - Live")].join('')));
return lt.plugins.elm_light.docpreview.preview_skeleton.call(null,this$);
}));
lt.plugins.elm_light.docpreview.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___11789 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___11789))
{var ts_11790 = temp__4092__auto___11789;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_11790))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_11790);
} else
{}
} else
{}
var temp__4092__auto___11791 = new cljs.core.Keyword(null,"owner-ed","owner-ed",2677003627).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___11791))
{var ed_11792 = temp__4092__auto___11791;lt.object.assoc_in_BANG_.call(null,ed_11792,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elmdoc","elmdoc",4008535620)], null),null);
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
return (function (){var seq__11750 = cljs.core.seq.call(null,lt.util.dom.$$.call(null,"pre code",lt.object.__GT_content.call(null,elmdoc)));var chunk__11751 = null;var count__11752 = 0;var i__11753 = 0;while(true){
if((i__11753 < count__11752))
{var block = cljs.core._nth.call(null,chunk__11751,i__11753);hljs.highlightBlock(block);
{
var G__11793 = seq__11750;
var G__11794 = chunk__11751;
var G__11795 = count__11752;
var G__11796 = (i__11753 + 1);
seq__11750 = G__11793;
chunk__11751 = G__11794;
count__11752 = G__11795;
i__11753 = G__11796;
continue;
}
} else
{var temp__4092__auto____$1 = cljs.core.seq.call(null,seq__11750);if(temp__4092__auto____$1)
{var seq__11750__$1 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11750__$1))
{var c__5632__auto__ = cljs.core.chunk_first.call(null,seq__11750__$1);{
var G__11797 = cljs.core.chunk_rest.call(null,seq__11750__$1);
var G__11798 = c__5632__auto__;
var G__11799 = cljs.core.count.call(null,c__5632__auto__);
var G__11800 = 0;
seq__11750 = G__11797;
chunk__11751 = G__11798;
count__11752 = G__11799;
i__11753 = G__11800;
continue;
}
} else
{var block = cljs.core.first.call(null,seq__11750__$1);hljs.highlightBlock(block);
{
var G__11801 = cljs.core.next.call(null,seq__11750__$1);
var G__11802 = null;
var G__11803 = 0;
var G__11804 = 0;
seq__11750 = G__11801;
chunk__11751 = G__11802;
count__11752 = G__11803;
i__11753 = G__11804;
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
lt.plugins.elm_light.modulebrowser.resolve_module_file = (function resolve_module_file(project_path,pck_json,package$,module,version){return cljs.core.some.call(null,(function (p1__18916_SHARP_){if(cljs.core.truth_(lt.objs.files.exists_QMARK_.call(null,p1__18916_SHARP_)))
{return p1__18916_SHARP_;
} else
{return null;
}
}),cljs.core.map.call(null,(function (p1__18915_SHARP_){return lt.objs.files.join.call(null,project_path,"elm-stuff/packages",package$,version,p1__18915_SHARP_,[cljs.core.str(clojure.string.replace.call(null,module,".",lt.objs.files.separator)),cljs.core.str(".elm")].join(''));
}),new cljs.core.Keyword(null,"source-directories","source-directories",4475397259).cljs$core$IFn$_invoke$arity$1(pck_json)));
});
lt.plugins.elm_light.modulebrowser.get_exposed_modules = (function get_exposed_modules(project_path,p__18917){var map__18919 = p__18917;var map__18919__$1 = ((cljs.core.seq_QMARK_.call(null,map__18919))?cljs.core.apply.call(null,cljs.core.hash_map,map__18919):map__18919);var exact = cljs.core.get.call(null,map__18919__$1,new cljs.core.Keyword(null,"exact","exact",1110851185));var package$ = cljs.core.get.call(null,map__18919__$1,new cljs.core.Keyword(null,"package","package",4501809080));var pck_json = lt.plugins.elm_light.utils.parse_json_file.call(null,lt.objs.files.join.call(null,project_path,"elm-stuff/packages",package$,exact,"elm-package.json"));return cljs.core.map.call(null,((function (pck_json,map__18919,map__18919__$1,exact,package$){
return (function (x){return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1017277949),x,new cljs.core.Keyword(null,"packageName","packageName",1922663267),package$,new cljs.core.Keyword(null,"version","version",1365512266),exact,new cljs.core.Keyword(null,"file","file",1017047278),lt.plugins.elm_light.modulebrowser.resolve_module_file.call(null,project_path,pck_json,package$,x,exact)], null);
});})(pck_json,map__18919,map__18919__$1,exact,package$))
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
return (function (p1__18920_SHARP_){return cljs.core._EQ_.call(null,lt.objs.files.ext.call(null,p1__18920_SHARP_),"elm");
});})(pck_json))
,lt.objs.files.ls.call(null,project_path)));
} else
{return cljs.core.map.call(null,((function (pck_json){
return (function (x){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),lt.plugins.elm_light.modulebrowser.deduce_module_name.call(null,lt.objs.files.join.call(null,project_path,dir),x),new cljs.core.Keyword(null,"file","file",1017047278),x], null);
});})(pck_json))
,lt.objs.files.filter_walk.call(null,((function (pck_json){
return (function (p1__18921_SHARP_){return cljs.core._EQ_.call(null,lt.objs.files.ext.call(null,p1__18921_SHARP_),"elm");
});})(pck_json))
,lt.objs.files.join.call(null,project_path,dir)));
}
});})(pck_json))
,new cljs.core.Keyword(null,"source-directories","source-directories",4475397259).cljs$core$IFn$_invoke$arity$1(pck_json))));
});
lt.plugins.elm_light.modulebrowser.get_all_modules = (function get_all_modules(project_path){return cljs.core.concat.call(null,lt.plugins.elm_light.modulebrowser.get_project_modules.call(null,project_path),lt.plugins.elm_light.modulebrowser.get_package_modules.call(null,project_path));
});
lt.plugins.elm_light.modulebrowser.wrapper = (function wrapper(this$){var e__6297__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"elm-module-browser"], null),"Retrieving modules..."], null));var seq__18928_18944 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__18929_18945 = null;var count__18930_18946 = 0;var i__18931_18947 = 0;while(true){
if((i__18931_18947 < count__18930_18946))
{var vec__18932_18948 = cljs.core._nth.call(null,chunk__18929_18945,i__18931_18947);var ev__6298__auto___18949 = cljs.core.nth.call(null,vec__18932_18948,0,null);var func__6299__auto___18950 = cljs.core.nth.call(null,vec__18932_18948,1,null);lt.util.dom.on.call(null,e__6297__auto__,ev__6298__auto___18949,func__6299__auto___18950);
{
var G__18951 = seq__18928_18944;
var G__18952 = chunk__18929_18945;
var G__18953 = count__18930_18946;
var G__18954 = (i__18931_18947 + 1);
seq__18928_18944 = G__18951;
chunk__18929_18945 = G__18952;
count__18930_18946 = G__18953;
i__18931_18947 = G__18954;
continue;
}
} else
{var temp__4092__auto___18955 = cljs.core.seq.call(null,seq__18928_18944);if(temp__4092__auto___18955)
{var seq__18928_18956__$1 = temp__4092__auto___18955;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18928_18956__$1))
{var c__5632__auto___18957 = cljs.core.chunk_first.call(null,seq__18928_18956__$1);{
var G__18958 = cljs.core.chunk_rest.call(null,seq__18928_18956__$1);
var G__18959 = c__5632__auto___18957;
var G__18960 = cljs.core.count.call(null,c__5632__auto___18957);
var G__18961 = 0;
seq__18928_18944 = G__18958;
chunk__18929_18945 = G__18959;
count__18930_18946 = G__18960;
i__18931_18947 = G__18961;
continue;
}
} else
{var vec__18933_18962 = cljs.core.first.call(null,seq__18928_18956__$1);var ev__6298__auto___18963 = cljs.core.nth.call(null,vec__18933_18962,0,null);var func__6299__auto___18964 = cljs.core.nth.call(null,vec__18933_18962,1,null);lt.util.dom.on.call(null,e__6297__auto__,ev__6298__auto___18963,func__6299__auto___18964);
{
var G__18965 = cljs.core.next.call(null,seq__18928_18956__$1);
var G__18966 = null;
var G__18967 = 0;
var G__18968 = 0;
seq__18928_18944 = G__18965;
chunk__18929_18945 = G__18966;
count__18930_18946 = G__18967;
i__18931_18947 = G__18968;
continue;
}
}
} else
{}
}
break;
}
return e__6297__auto__;
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
goog.require('lt.plugins.elm_light.clients');
goog.require('lt.plugins.elm_light.utils');
goog.require('cljs.core.async');
goog.require('lt.util.js');
goog.require('lt.plugins.elm_light.autocompleter.core');
goog.require('lt.util.js');
goog.require('lt.util.dom');
goog.require('cljs.core.async');
goog.require('lt.plugins.elm_light.utils');
goog.require('lt.plugins.elm_light.clients');
goog.require('lt.util.dom');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.plugins.elm_light.autocompleter.core');
goog.require('lt.objs.editor');
goog.require('cljs.core.async');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
lt.plugins.elm_light.hinter.chan_id = (function chan_id(ch){return (lt.plugins.elm_light.autocompleter.core.curr_time.call(null) + cljs.core.hash.call(null,ch));
});
lt.plugins.elm_light.hinter.store_ch = (function store_ch(ed,ch){var chs = (function (){var or__4884__auto__ = new cljs.core.Keyword(null,"elm-hint-channels","elm-hint-channels",1299514081).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed));if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();var ch_id = lt.plugins.elm_light.hinter.chan_id.call(null,ch);lt.object.assoc_in_BANG_.call(null,ed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elm-hint-channels","elm-hint-channels",1299514081)], null),cljs.core.assoc.call(null,chs,ch_id,ch));
return ch_id;
});
lt.plugins.elm_light.hinter.get_ch = (function get_ch(ed,ch_id){return cljs.core.get_in.call(null,cljs.core.deref.call(null,ed),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elm-hint-channels","elm-hint-channels",1299514081),ch_id], null));
});
lt.plugins.elm_light.hinter.remove_ch = (function remove_ch(ed,ch_id){var chs = (function (){var or__4884__auto__ = new cljs.core.Keyword(null,"elm-hint-channels","elm-hint-channels",1299514081).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed));if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();return lt.object.assoc_in_BANG_.call(null,ed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elm-hint-channels","elm-hint-channels",1299514081)], null),cljs.core.dissoc.call(null,chs,ch_id));
});
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
lt.plugins.elm_light.hinter.__BEH__trigger_update_hints = (function __BEH__trigger_update_hints(ed,token,channel){var info = new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed));var command = new cljs.core.Keyword(null,"editor.elm.hint","editor.elm.hint",1085937058);return lt.objs.clients.send.call(null,lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),command,new cljs.core.Keyword(null,"info","info",1017141280),info,new cljs.core.Keyword(null,"origin","origin",4300251800),ed,new cljs.core.Keyword(null,"create","create",3956577390),lt.plugins.elm_light.clients.try_connect], null)),command,cljs.core.assoc.call(null,info,new cljs.core.Keyword(null,"token","token",1124445547),token,new cljs.core.Keyword(null,"channel","channel",1752854645),channel),new cljs.core.Keyword(null,"only","only",1017320222),ed);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.hinter","trigger-update-hints","lt.plugins.elm-light.hinter/trigger-update-hints",875710073),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.hinter.__BEH__trigger_update_hints,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.elm.hints.update!","editor.elm.hints.update!",2726958399),null], null), null));
lt.plugins.elm_light.hinter.__GT_hints = (function __GT_hints(token,completions){return cljs.core.map.call(null,(function (p1__15756_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"text","text",1017460895),new cljs.core.Keyword(null,"displayText","displayText",2728236161),new cljs.core.Keyword(null,"render","render",4374279432),new cljs.core.Keyword(null,"from","from",1017056028),new cljs.core.Keyword(null,"to","to",1013907949)],[new cljs.core.Keyword(null,"completion","completion",4767668046).cljs$core$IFn$_invoke$arity$1(p1__15756_SHARP_),new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(p1__15756_SHARP_),(function (el,self,data){return lt.util.dom.html.call(null,el,wrapMatch(data.displayText,{"matched": new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(token)}));
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(token)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"end","end",1014004813).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(token)], null)]);
}),completions);
});
lt.plugins.elm_light.hinter.__BEH__async_hint_results = (function __BEH__async_hint_results(ed,p__15757){var map__15759 = p__15757;var map__15759__$1 = ((cljs.core.seq_QMARK_.call(null,map__15759))?cljs.core.apply.call(null,cljs.core.hash_map,map__15759):map__15759);var completions = cljs.core.get.call(null,map__15759__$1,new cljs.core.Keyword(null,"completions","completions",1416465289));var token = cljs.core.get.call(null,map__15759__$1,new cljs.core.Keyword(null,"token","token",1124445547));var channel = cljs.core.get.call(null,map__15759__$1,new cljs.core.Keyword(null,"channel","channel",1752854645));var hints = lt.plugins.elm_light.hinter.__GT_hints.call(null,token,completions);var temp__4092__auto__ = lt.plugins.elm_light.hinter.get_ch.call(null,ed,channel);if(cljs.core.truth_(temp__4092__auto__))
{var ch = temp__4092__auto__;lt.object.assoc_in_BANG_.call(null,ed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elm-hint-cached-hints","elm-hint-cached-hints",1223515634)], null),hints);
lt.object.assoc_in_BANG_.call(null,ed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elm-hint-cached-token","elm-hint-cached-token",1234773279)], null),token);
cljs.core.async.put_BANG_.call(null,ch,hints);
return lt.plugins.elm_light.hinter.remove_ch.call(null,ed,channel);
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.hinter","async-hint-results","lt.plugins.elm-light.hinter/async-hint-results",2062832165),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.hinter.__BEH__async_hint_results,new cljs.core.Keyword(null,"desc","desc",1016984067),"Async dummy: Hint results",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.elm.hints.result","editor.elm.hints.result",2636151706),null], null), null));
lt.plugins.elm_light.hinter.maybe_cached_hints = (function maybe_cached_hints(token,cached_token,cached_hints){var starts_with = (function (p1__15760_SHARP_,p2__15761_SHARP_){var and__4872__auto__ = p1__15760_SHARP_;if(cljs.core.truth_(and__4872__auto__))
{var and__4872__auto____$1 = p2__15761_SHARP_;if(cljs.core.truth_(and__4872__auto____$1))
{return cljs.core._EQ_.call(null,0,p1__15760_SHARP_.indexOf(p2__15761_SHARP_));
} else
{return and__4872__auto____$1;
}
} else
{return and__4872__auto__;
}
});if(cljs.core.truth_((function (){var and__4872__auto__ = cached_token;if(cljs.core.truth_(and__4872__auto__))
{var and__4872__auto____$1 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(cached_token));if(and__4872__auto____$1)
{var and__4872__auto____$2 = cljs.core.seq.call(null,cached_hints);if(and__4872__auto____$2)
{var and__4872__auto____$3 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(cached_token));if(and__4872__auto____$3)
{var and__4872__auto____$4 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(cached_token));if(and__4872__auto____$4)
{return starts_with.call(null,new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(cached_token));
} else
{return and__4872__auto____$4;
}
} else
{return and__4872__auto____$3;
}
} else
{return and__4872__auto____$2;
}
} else
{return and__4872__auto____$1;
}
} else
{return and__4872__auto__;
}
})()))
{return cljs.core.map.call(null,((function (starts_with){
return (function (p1__15764_SHARP_){return cljs.core.assoc.call(null,p1__15764_SHARP_,new cljs.core.Keyword(null,"render","render",4374279432),((function (starts_with){
return (function (el,self,data){return lt.util.dom.html.call(null,el,wrapMatch(data.displayText,{"matched": new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(token)}));
});})(starts_with))
);
});})(starts_with))
,cljs.core.map.call(null,((function (starts_with){
return (function (p1__15763_SHARP_){return cljs.core.assoc_in.call(null,p1__15763_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to","to",1013907949),new cljs.core.Keyword(null,"ch","ch",1013907415)], null),new cljs.core.Keyword(null,"end","end",1014004813).cljs$core$IFn$_invoke$arity$1(token));
});})(starts_with))
,cljs.core.filter.call(null,((function (starts_with){
return (function (p1__15762_SHARP_){return starts_with.call(null,new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(p1__15762_SHARP_),new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(token));
});})(starts_with))
,cached_hints)));
} else
{return null;
}
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
lt.plugins.elm_light.hinter.__BEH__async_hints = (function __BEH__async_hints(ed,channels){var pos = lt.objs.editor.__GT_cursor.call(null,ed);var token = lt.plugins.elm_light.hinter.get_token.call(null,ed);var cached_token = new cljs.core.Keyword(null,"elm-hint-cached-token","elm-hint-cached-token",1234773279).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed));var cached_hints = new cljs.core.Keyword(null,"elm-hint-cached-hints","elm-hint-cached-hints",1223515634).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed));var ch = cljs.core.async.chan.call(null);if(cljs.core.truth_((function (){var and__4872__auto__ = token;if(cljs.core.truth_(and__4872__auto__))
{return lt.plugins.elm_light.hinter.connected_QMARK_.call(null,ed);
} else
{return and__4872__auto__;
}
})()))
{var temp__4090__auto___15775 = lt.plugins.elm_light.hinter.maybe_cached_hints.call(null,token,cached_token,cached_hints);if(cljs.core.truth_(temp__4090__auto___15775))
{var hints_15776 = temp__4090__auto___15775;cljs.core.async.put_BANG_.call(null,ch,hints_15776);
} else
{lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.elm.hints.update!","editor.elm.hints.update!",2726958399),token,lt.plugins.elm_light.hinter.store_ch.call(null,ed,ch));
}
return cljs.core.conj.call(null,channels,ch);
} else
{return channels;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.hinter","async-hints","lt.plugins.elm-light.hinter/async-hints",1279060987),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.hinter.__BEH__async_hints,new cljs.core.Keyword(null,"desc","desc",1016984067),"Autocompleter: Async dummy hints",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-hints","init-hints",4468593473),null], null), null));
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
lt.plugins.elm_light.linter.status_class = (function status_class(p__18749){var map__18751 = p__18749;var map__18751__$1 = ((cljs.core.seq_QMARK_.call(null,map__18751))?cljs.core.apply.call(null,cljs.core.hash_map,map__18751):map__18751);var warnings = cljs.core.get.call(null,map__18751__$1,new cljs.core.Keyword(null,"warnings","warnings",1511995337));var errors = cljs.core.get.call(null,map__18751__$1,new cljs.core.Keyword(null,"errors","errors",4014236381));if((errors > 0))
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
lt.plugins.elm_light.linter.status_text = (function status_text(p__18752){var map__18754 = p__18752;var map__18754__$1 = ((cljs.core.seq_QMARK_.call(null,map__18754))?cljs.core.apply.call(null,cljs.core.hash_map,map__18754):map__18754);var warnings = cljs.core.get.call(null,map__18754__$1,new cljs.core.Keyword(null,"warnings","warnings",1511995337));var errors = cljs.core.get.call(null,map__18754__$1,new cljs.core.Keyword(null,"errors","errors",4014236381));return [cljs.core.str("Lint status: "),cljs.core.str(errors),cljs.core.str("/"),cljs.core.str(warnings)].join('');
});
lt.plugins.elm_light.linter.__GT_status_ui = (function __GT_status_ui(p__18755){var map__18757 = p__18755;var map__18757__$1 = ((cljs.core.seq_QMARK_.call(null,map__18757))?cljs.core.apply.call(null,cljs.core.hash_map,map__18757):map__18757);var lint_summary = cljs.core.get.call(null,map__18757__$1,new cljs.core.Keyword(null,"lint-summary","lint-summary",2275048270));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("lint-status "),cljs.core.str(lt.plugins.elm_light.linter.status_class.call(null,lint_summary))].join('')], null),lt.plugins.elm_light.linter.status_text.call(null,lint_summary)], null);
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
return (function (p__18760){var vec__18761 = p__18760;var k = cljs.core.nth.call(null,vec__18761,0,null);var v = cljs.core.nth.call(null,vec__18761,1,null);return new cljs.core.PersistentArrayMap.fromArray([k,cljs.core.count.call(null,v)], true, false);
});})(results,temp__4090__auto__))
,cljs.core.group_by.call(null,new cljs.core.Keyword(null,"category","category",1064415344),cljs.core.map.call(null,new cljs.core.Keyword(null,"result","result",4374444943),cljs.core.vals.call(null,results)))));
} else
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",1110689146),0,new cljs.core.Keyword(null,"warning","warning",2138350350),0], null);
}
});
lt.plugins.elm_light.linter.update_status_for_editor = (function update_status_for_editor(ed){var map__18764 = lt.plugins.elm_light.linter.grouped_lint_count.call(null,ed);var map__18764__$1 = ((cljs.core.seq_QMARK_.call(null,map__18764))?cljs.core.apply.call(null,cljs.core.hash_map,map__18764):map__18764);var warning = cljs.core.get.call(null,map__18764__$1,new cljs.core.Keyword(null,"warning","warning",2138350350));var error = cljs.core.get.call(null,map__18764__$1,new cljs.core.Keyword(null,"error","error",1110689146));return lt.object.raise.call(null,lt.plugins.elm_light.linter.statusbar_lint_summary,new cljs.core.Keyword(null,"update!","update!",779473898),((function (map__18764,map__18764__$1,warning,error){
return (function (p1__18762_SHARP_){return cljs.core.assoc.call(null,p1__18762_SHARP_,new cljs.core.Keyword(null,"warnings","warnings",1511995337),(function (){var or__4884__auto__ = warning;if(cljs.core.truth_(or__4884__auto__))
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
});})(map__18764,map__18764__$1,warning,error))
);
});
lt.plugins.elm_light.linter.__BEH__update_linter_on_editor_change = (function __BEH__update_linter_on_editor_change(ed){return lt.plugins.elm_light.linter.update_status_for_editor.call(null,ed);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.linter","update-linter-on-editor-change","lt.plugins.elm-light.linter/update-linter-on-editor-change",2858337088),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.linter.__BEH__update_linter_on_editor_change,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"focus","focus",1111509066),null], null), null));
lt.plugins.elm_light.linter.remove_widget = (function remove_widget(ed,el){try{lt.util.dom.remove.call(null,el);
}catch (e18766){var e_18826 = e18766;}return lt.objs.editor.focus.call(null,ed);
});
lt.plugins.elm_light.linter.remove_res = (function remove_res(ed,res_id){var map__18768_18827 = cljs.core.get_in.call(null,cljs.core.deref.call(null,ed),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linter-results","linter-results",4482067083),res_id], null));var map__18768_18828__$1 = ((cljs.core.seq_QMARK_.call(null,map__18768_18827))?cljs.core.apply.call(null,cljs.core.hash_map,map__18768_18827):map__18768_18827);var dill_18829 = map__18768_18828__$1;var result_18830 = cljs.core.get.call(null,map__18768_18828__$1,new cljs.core.Keyword(null,"result","result",4374444943));var mark_18831 = cljs.core.get.call(null,map__18768_18828__$1,new cljs.core.Keyword(null,"mark","mark",1017248319));if(cljs.core.truth_(mark_18831))
{mark_18831.clear();
} else
{}
lt.object.update_BANG_.call(null,ed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linter-results","linter-results",4482067083)], null),cljs.core.dissoc,res_id);
return lt.objs.editor.focus.call(null,ed);
});
lt.plugins.elm_light.linter.current_range = (function current_range(ed,mark){var rng = mark.find();var from = rng.from;var to = rng.to;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1017056028),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",1013907415),from.ch,new cljs.core.Keyword(null,"line","line",1017226086),from.line], null),new cljs.core.Keyword(null,"to","to",1013907949),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",1013907415),to.ch,new cljs.core.Keyword(null,"line","line",1017226086),to.line], null)], null);
});
lt.plugins.elm_light.linter.execute_action = (function execute_action(ed,res_id,action_fn,res){var map__18770 = cljs.core.get_in.call(null,cljs.core.deref.call(null,ed),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linter-results","linter-results",4482067083),res_id], null));var map__18770__$1 = ((cljs.core.seq_QMARK_.call(null,map__18770))?cljs.core.apply.call(null,cljs.core.hash_map,map__18770):map__18770);var mark = cljs.core.get.call(null,map__18770__$1,new cljs.core.Keyword(null,"mark","mark",1017248319));action_fn.call(null,res,lt.plugins.elm_light.linter.current_range.call(null,ed,mark));
return lt.plugins.elm_light.linter.remove_res.call(null,ed,res_id);
});
lt.plugins.elm_light.linter.action_ui = (function action_ui(ed,action,res_id,res){var e__6297__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.button","span.button",4282180040),[cljs.core.str(new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(action))].join('')], null));var seq__18777_18832 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__6297__auto__){
return (function (){return lt.plugins.elm_light.linter.execute_action.call(null,ed,res_id,new cljs.core.Keyword(null,"action","action",3885920680).cljs$core$IFn$_invoke$arity$1(action),res);
});})(e__6297__auto__))
], null)));var chunk__18778_18833 = null;var count__18779_18834 = 0;var i__18780_18835 = 0;while(true){
if((i__18780_18835 < count__18779_18834))
{var vec__18781_18836 = cljs.core._nth.call(null,chunk__18778_18833,i__18780_18835);var ev__6298__auto___18837 = cljs.core.nth.call(null,vec__18781_18836,0,null);var func__6299__auto___18838 = cljs.core.nth.call(null,vec__18781_18836,1,null);lt.util.dom.on.call(null,e__6297__auto__,ev__6298__auto___18837,func__6299__auto___18838);
{
var G__18839 = seq__18777_18832;
var G__18840 = chunk__18778_18833;
var G__18841 = count__18779_18834;
var G__18842 = (i__18780_18835 + 1);
seq__18777_18832 = G__18839;
chunk__18778_18833 = G__18840;
count__18779_18834 = G__18841;
i__18780_18835 = G__18842;
continue;
}
} else
{var temp__4092__auto___18843 = cljs.core.seq.call(null,seq__18777_18832);if(temp__4092__auto___18843)
{var seq__18777_18844__$1 = temp__4092__auto___18843;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18777_18844__$1))
{var c__5632__auto___18845 = cljs.core.chunk_first.call(null,seq__18777_18844__$1);{
var G__18846 = cljs.core.chunk_rest.call(null,seq__18777_18844__$1);
var G__18847 = c__5632__auto___18845;
var G__18848 = cljs.core.count.call(null,c__5632__auto___18845);
var G__18849 = 0;
seq__18777_18832 = G__18846;
chunk__18778_18833 = G__18847;
count__18779_18834 = G__18848;
i__18780_18835 = G__18849;
continue;
}
} else
{var vec__18782_18850 = cljs.core.first.call(null,seq__18777_18844__$1);var ev__6298__auto___18851 = cljs.core.nth.call(null,vec__18782_18850,0,null);var func__6299__auto___18852 = cljs.core.nth.call(null,vec__18782_18850,1,null);lt.util.dom.on.call(null,e__6297__auto__,ev__6298__auto___18851,func__6299__auto___18852);
{
var G__18853 = cljs.core.next.call(null,seq__18777_18844__$1);
var G__18854 = null;
var G__18855 = 0;
var G__18856 = 0;
seq__18777_18832 = G__18853;
chunk__18778_18833 = G__18854;
count__18779_18834 = G__18855;
i__18780_18835 = G__18856;
continue;
}
}
} else
{}
}
break;
}
return e__6297__auto__;
});
lt.plugins.elm_light.linter.inline_ui = (function inline_ui(ed,res_id,p__18786){var map__18794 = p__18786;var map__18794__$1 = ((cljs.core.seq_QMARK_.call(null,map__18794))?cljs.core.apply.call(null,cljs.core.hash_map,map__18794):map__18794);var res = map__18794__$1;var actions = cljs.core.get.call(null,map__18794__$1,new cljs.core.Keyword(null,"actions","actions",4147068015));var category = cljs.core.get.call(null,map__18794__$1,new cljs.core.Keyword(null,"category","category",1064415344));var details = cljs.core.get.call(null,map__18794__$1,new cljs.core.Keyword(null,"details","details",2571625908));var title = cljs.core.get.call(null,map__18794__$1,new cljs.core.Keyword(null,"title","title",1124275658));var e__6297__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tabindex","tabindex",4410954191),-1,new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("linter-res "),cljs.core.str((function (){var or__4884__auto__ = cljs.core.name.call(null,category);if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return "error";
}
})())].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.title","p.title",3057381068),title], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.details","div.details",4139669847),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),details], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),cljs.core.map.call(null,((function (map__18794,map__18794__$1,res,actions,category,details,title){
return (function (p1__18783_SHARP_){return lt.plugins.elm_light.linter.action_ui.call(null,ed,p1__18783_SHARP_,res_id,res);
});})(map__18794,map__18794__$1,res,actions,category,details,title))
,actions)], null)], null)], null));var seq__18795_18857 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blur","blur",1016931289),((function (e__6297__auto__,map__18794,map__18794__$1,res,actions,category,details,title){
return (function (p1__18784_SHARP_){return lt.plugins.elm_light.linter.remove_widget.call(null,ed,p1__18784_SHARP_.target);
});})(e__6297__auto__,map__18794,map__18794__$1,res,actions,category,details,title))
,new cljs.core.Keyword(null,"keydown","keydown",4493897459),((function (e__6297__auto__,map__18794,map__18794__$1,res,actions,category,details,title){
return (function (p1__18785_SHARP_){var kc = p1__18785_SHARP_.keyCode;if(cljs.core._EQ_.call(null,kc,27))
{lt.plugins.elm_light.linter.remove_widget.call(null,ed,p1__18785_SHARP_.target);
} else
{}
if((cljs.core._EQ_.call(null,kc,13)) && (cljs.core.seq.call(null,actions)))
{p1__18785_SHARP_.preventDefault();
p1__18785_SHARP_.stopPropagation();
return lt.plugins.elm_light.linter.execute_action.call(null,ed,res_id,new cljs.core.Keyword(null,"action","action",3885920680).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,actions)),res);
} else
{return null;
}
});})(e__6297__auto__,map__18794,map__18794__$1,res,actions,category,details,title))
], null)));var chunk__18796_18858 = null;var count__18797_18859 = 0;var i__18798_18860 = 0;while(true){
if((i__18798_18860 < count__18797_18859))
{var vec__18799_18861 = cljs.core._nth.call(null,chunk__18796_18858,i__18798_18860);var ev__6298__auto___18862 = cljs.core.nth.call(null,vec__18799_18861,0,null);var func__6299__auto___18863 = cljs.core.nth.call(null,vec__18799_18861,1,null);lt.util.dom.on.call(null,e__6297__auto__,ev__6298__auto___18862,func__6299__auto___18863);
{
var G__18864 = seq__18795_18857;
var G__18865 = chunk__18796_18858;
var G__18866 = count__18797_18859;
var G__18867 = (i__18798_18860 + 1);
seq__18795_18857 = G__18864;
chunk__18796_18858 = G__18865;
count__18797_18859 = G__18866;
i__18798_18860 = G__18867;
continue;
}
} else
{var temp__4092__auto___18868 = cljs.core.seq.call(null,seq__18795_18857);if(temp__4092__auto___18868)
{var seq__18795_18869__$1 = temp__4092__auto___18868;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18795_18869__$1))
{var c__5632__auto___18870 = cljs.core.chunk_first.call(null,seq__18795_18869__$1);{
var G__18871 = cljs.core.chunk_rest.call(null,seq__18795_18869__$1);
var G__18872 = c__5632__auto___18870;
var G__18873 = cljs.core.count.call(null,c__5632__auto___18870);
var G__18874 = 0;
seq__18795_18857 = G__18871;
chunk__18796_18858 = G__18872;
count__18797_18859 = G__18873;
i__18798_18860 = G__18874;
continue;
}
} else
{var vec__18800_18875 = cljs.core.first.call(null,seq__18795_18869__$1);var ev__6298__auto___18876 = cljs.core.nth.call(null,vec__18800_18875,0,null);var func__6299__auto___18877 = cljs.core.nth.call(null,vec__18800_18875,1,null);lt.util.dom.on.call(null,e__6297__auto__,ev__6298__auto___18876,func__6299__auto___18877);
{
var G__18878 = cljs.core.next.call(null,seq__18795_18869__$1);
var G__18879 = null;
var G__18880 = 0;
var G__18881 = 0;
seq__18795_18857 = G__18878;
chunk__18796_18858 = G__18879;
count__18797_18859 = G__18880;
i__18798_18860 = G__18881;
continue;
}
}
} else
{}
}
break;
}
return e__6297__auto__;
});
lt.plugins.elm_light.linter.add_widget = (function add_widget(ed,res_id){var map__18802 = cljs.core.get_in.call(null,cljs.core.deref.call(null,ed),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linter-results","linter-results",4482067083),res_id], null));var map__18802__$1 = ((cljs.core.seq_QMARK_.call(null,map__18802))?cljs.core.apply.call(null,cljs.core.hash_map,map__18802):map__18802);var result = cljs.core.get.call(null,map__18802__$1,new cljs.core.Keyword(null,"result","result",4374444943));var mark = cljs.core.get.call(null,map__18802__$1,new cljs.core.Keyword(null,"mark","mark",1017248319));var ui = lt.plugins.elm_light.linter.inline_ui.call(null,ed,res_id,result);var from = mark.find().from;lt.objs.editor.__GT_cm_ed.call(null,ed).addWidget(from,ui,{"scrollIntoView": true});
return lt.util.dom.focus.call(null,ui);
});
lt.plugins.elm_light.linter.create_mark = (function create_mark(ed,p__18803){var map__18805 = p__18803;var map__18805__$1 = ((cljs.core.seq_QMARK_.call(null,map__18805))?cljs.core.apply.call(null,cljs.core.hash_map,map__18805):map__18805);var code_range = cljs.core.get.call(null,map__18805__$1,new cljs.core.Keyword(null,"code-range","code-range",3297446095));var category = cljs.core.get.call(null,map__18805__$1,new cljs.core.Keyword(null,"category","category",1064415344));var from = new cljs.core.Keyword(null,"from","from",1017056028).cljs$core$IFn$_invoke$arity$1(code_range);var to = ((!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"to","to",1013907949).cljs$core$IFn$_invoke$arity$1(code_range),from)))?new cljs.core.Keyword(null,"to","to",1013907949).cljs$core$IFn$_invoke$arity$1(code_range):cljs.core.assoc.call(null,from,new cljs.core.Keyword(null,"ch","ch",1013907415),(lt.objs.editor.line_length.call(null,ed,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(from)) - 1)));return lt.objs.editor.mark.call(null,ed,from,to,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",1004015509),[cljs.core.str("lint-"),cljs.core.str((function (){var or__4884__auto__ = cljs.core.name.call(null,category);if(cljs.core.truth_(or__4884__auto__))
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
lt.plugins.elm_light.linter.__BEH__clear_linter_results_BANG_ = (function __BEH__clear_linter_results_BANG_(ed){var seq__18812_18882 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"linter-results","linter-results",4482067083).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));var chunk__18813_18883 = null;var count__18814_18884 = 0;var i__18815_18885 = 0;while(true){
if((i__18815_18885 < count__18814_18884))
{var vec__18816_18886 = cljs.core._nth.call(null,chunk__18813_18883,i__18815_18885);var id_18887 = cljs.core.nth.call(null,vec__18816_18886,0,null);var res_18888 = cljs.core.nth.call(null,vec__18816_18886,1,null);var temp__4092__auto___18889 = new cljs.core.Keyword(null,"mark","mark",1017248319).cljs$core$IFn$_invoke$arity$1(res_18888);if(cljs.core.truth_(temp__4092__auto___18889))
{var m_18890 = temp__4092__auto___18889;m_18890.clear();
} else
{}
var temp__4092__auto___18891 = new cljs.core.Keyword(null,"widget","widget",4520824246).cljs$core$IFn$_invoke$arity$1(res_18888);if(cljs.core.truth_(temp__4092__auto___18891))
{var w_18892 = temp__4092__auto___18891;lt.util.dom.remove.call(null,w_18892);
} else
{}
{
var G__18893 = seq__18812_18882;
var G__18894 = chunk__18813_18883;
var G__18895 = count__18814_18884;
var G__18896 = (i__18815_18885 + 1);
seq__18812_18882 = G__18893;
chunk__18813_18883 = G__18894;
count__18814_18884 = G__18895;
i__18815_18885 = G__18896;
continue;
}
} else
{var temp__4092__auto___18897 = cljs.core.seq.call(null,seq__18812_18882);if(temp__4092__auto___18897)
{var seq__18812_18898__$1 = temp__4092__auto___18897;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18812_18898__$1))
{var c__5632__auto___18899 = cljs.core.chunk_first.call(null,seq__18812_18898__$1);{
var G__18900 = cljs.core.chunk_rest.call(null,seq__18812_18898__$1);
var G__18901 = c__5632__auto___18899;
var G__18902 = cljs.core.count.call(null,c__5632__auto___18899);
var G__18903 = 0;
seq__18812_18882 = G__18900;
chunk__18813_18883 = G__18901;
count__18814_18884 = G__18902;
i__18815_18885 = G__18903;
continue;
}
} else
{var vec__18817_18904 = cljs.core.first.call(null,seq__18812_18898__$1);var id_18905 = cljs.core.nth.call(null,vec__18817_18904,0,null);var res_18906 = cljs.core.nth.call(null,vec__18817_18904,1,null);var temp__4092__auto___18907__$1 = new cljs.core.Keyword(null,"mark","mark",1017248319).cljs$core$IFn$_invoke$arity$1(res_18906);if(cljs.core.truth_(temp__4092__auto___18907__$1))
{var m_18908 = temp__4092__auto___18907__$1;m_18908.clear();
} else
{}
var temp__4092__auto___18909__$1 = new cljs.core.Keyword(null,"widget","widget",4520824246).cljs$core$IFn$_invoke$arity$1(res_18906);if(cljs.core.truth_(temp__4092__auto___18909__$1))
{var w_18910 = temp__4092__auto___18909__$1;lt.util.dom.remove.call(null,w_18910);
} else
{}
{
var G__18911 = cljs.core.next.call(null,seq__18812_18898__$1);
var G__18912 = null;
var G__18913 = 0;
var G__18914 = 0;
seq__18812_18882 = G__18911;
chunk__18813_18883 = G__18912;
count__18814_18884 = G__18913;
i__18815_18885 = G__18914;
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
lt.plugins.elm_light.linter.find_current_lint_mark = (function find_current_lint_mark(ed){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__18818_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"linter","linter",4206213986),p1__18818_SHARP_.lttype);
}),lt.objs.editor.find_marks.call(null,ed,lt.objs.editor.__GT_cursor.call(null,ed))));
});
lt.plugins.elm_light.linter.get_widget_by_mark = (function get_widget_by_mark(ed,mark){return cljs.core.get_in.call(null,cljs.core.deref.call(null,ed),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linter-results","linter-results",4482067083),mark.ltlintid,new cljs.core.Keyword(null,"widget","widget",4520824246)], null));
});
lt.plugins.elm_light.linter.mark__GT_pos = (function mark__GT_pos(mark){var cm_pos = mark.find().from;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",1013907415),cm_pos.ch,new cljs.core.Keyword(null,"line","line",1017226086),cm_pos.line], null);
});
lt.plugins.elm_light.linter.get_all_lint_marks = (function get_all_lint_marks(ed){return cljs.core.sort_by.call(null,(function (p1__18820_SHARP_){return cljs.core.juxt.call(null,new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"ch","ch",1013907415)).call(null,lt.plugins.elm_light.linter.mark__GT_pos.call(null,p1__18820_SHARP_));
}),cljs.core.filter.call(null,(function (p1__18819_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"linter","linter",4206213986),p1__18819_SHARP_.lttype);
}),lt.objs.editor.__GT_cm_ed.call(null,ed).getAllMarks()));
});
lt.plugins.elm_light.linter.split_with_mark = (function split_with_mark(ed){var all_marks = lt.plugins.elm_light.linter.get_all_lint_marks.call(null,ed);var curr_mark = lt.plugins.elm_light.linter.find_current_lint_mark.call(null,ed);return cljs.core.split_with.call(null,((function (all_marks,curr_mark){
return (function (p1__18821_SHARP_){return !(cljs.core._EQ_.call(null,(cljs.core.truth_(curr_mark)?curr_mark.ltlintid:null),p1__18821_SHARP_.ltlintid));
});})(all_marks,curr_mark))
,all_marks);
});
lt.plugins.elm_light.linter.find_next_mark = (function find_next_mark(ed){var vec__18823 = lt.plugins.elm_light.linter.split_with_mark.call(null,ed);var ms1 = cljs.core.nth.call(null,vec__18823,0,null);var ms2 = cljs.core.nth.call(null,vec__18823,1,null);return cljs.core.first.call(null,cljs.core.into.call(null,cljs.core.vec.call(null,cljs.core.drop.call(null,1,ms2)),ms1));
});
lt.plugins.elm_light.linter.find_prev_mark = (function find_prev_mark(ed){var vec__18825 = lt.plugins.elm_light.linter.split_with_mark.call(null,ed);var ms1 = cljs.core.nth.call(null,vec__18825,0,null);var ms2 = cljs.core.nth.call(null,vec__18825,1,null);return cljs.core.first.call(null,cljs.core.into.call(null,cljs.core.reverse.call(null,cljs.core.drop.call(null,1,ms2)),ms1));
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
goog.require('lt.plugins.elm_light.clients');
goog.require('lt.plugins.elm_light.utils');
goog.require('lt.objs.files');
goog.require('lt.util.js');
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
lt.plugins.elm_light.__GT_lt_range = (function __GT_lt_range(p__19263){var map__19265 = p__19263;var map__19265__$1 = ((cljs.core.seq_QMARK_.call(null,map__19265))?cljs.core.apply.call(null,cljs.core.hash_map,map__19265):map__19265);var end = cljs.core.get.call(null,map__19265__$1,new cljs.core.Keyword(null,"end","end",1014004813));var start = cljs.core.get.call(null,map__19265__$1,new cljs.core.Keyword(null,"start","start",1123661780));return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1017056028),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",1013907415),(new cljs.core.Keyword(null,"column","column",3954034376).cljs$core$IFn$_invoke$arity$1(start) - 1),new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(start) - 1)], null),new cljs.core.Keyword(null,"to","to",1013907949),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",1013907415),(new cljs.core.Keyword(null,"column","column",3954034376).cljs$core$IFn$_invoke$arity$1(end) - 1),new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(end) - 1)], null)], null);
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
lt.plugins.elm_light.linter_action = (function linter_action(ed,row){var G__19277 = new cljs.core.Keyword(null,"tag","tag",1014018828).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core._EQ_.call(null,"TYPE MISMATCH",G__19277))
{var ann = lt.plugins.elm_light.maybe_strip_hint.call(null,lt.plugins.elm_light.maybe_trim.call(null,cljs.core.second.call(null,cljs.core.re_find.call(null,/But I am inferring that the definition has this type:([\s\S]*$)/m,new cljs.core.Keyword(null,"details","details",2571625908).cljs$core$IFn$_invoke$arity$1(row)))));if(cljs.core.truth_((function (){var and__4872__auto__ = ann;if(cljs.core.truth_(and__4872__auto__))
{return cljs.core.not.call(null,lt.plugins.elm_light.str_contains_QMARK_.call(null,ann,"..."));
} else
{return and__4872__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",1017460895),"Fix annotation",new cljs.core.Keyword(null,"action","action",3885920680),((function (ann,G__19277){
return (function (_,p__19278){var map__19279 = p__19278;var map__19279__$1 = ((cljs.core.seq_QMARK_.call(null,map__19279))?cljs.core.apply.call(null,cljs.core.hash_map,map__19279):map__19279);var to = cljs.core.get.call(null,map__19279__$1,new cljs.core.Keyword(null,"to","to",1013907949));var from = cljs.core.get.call(null,map__19279__$1,new cljs.core.Keyword(null,"from","from",1017056028));return lt.objs.editor.replace.call(null,ed,from,to,ann);
});})(ann,G__19277))
], null)], null);
} else
{return cljs.core.PersistentVector.EMPTY;
}
} else
{if(cljs.core._EQ_.call(null,"NAMING ERROR",G__19277))
{var fixes = cljs.core.filter.call(null,cljs.core.seq,cljs.core.map.call(null,clojure.string.trim,clojure.string.split_lines.call(null,cljs.core.second.call(null,cljs.core.re_find.call(null,/Maybe you want one of the following\?(:?[\s\S]*$)/m,new cljs.core.Keyword(null,"details","details",2571625908).cljs$core$IFn$_invoke$arity$1(row))))));return cljs.core.map.call(null,((function (fixes,G__19277){
return (function (suggestion){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",1017460895),suggestion,new cljs.core.Keyword(null,"action","action",3885920680),((function (fixes,G__19277){
return (function (_,p__19280){var map__19281 = p__19280;var map__19281__$1 = ((cljs.core.seq_QMARK_.call(null,map__19281))?cljs.core.apply.call(null,cljs.core.hash_map,map__19281):map__19281);var to = cljs.core.get.call(null,map__19281__$1,new cljs.core.Keyword(null,"to","to",1013907949));var from = cljs.core.get.call(null,map__19281__$1,new cljs.core.Keyword(null,"from","from",1017056028));return lt.objs.editor.replace.call(null,ed,from,to,suggestion);
});})(fixes,G__19277))
], null);
});})(fixes,G__19277))
,fixes);
} else
{if(cljs.core._EQ_.call(null,"missing type annotation",G__19277))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",1017460895),"Add",new cljs.core.Keyword(null,"action","action",3885920680),((function (G__19277){
return (function (p__19282,p__19283){var map__19284 = p__19282;var map__19284__$1 = ((cljs.core.seq_QMARK_.call(null,map__19284))?cljs.core.apply.call(null,cljs.core.hash_map,map__19284):map__19284);var details = cljs.core.get.call(null,map__19284__$1,new cljs.core.Keyword(null,"details","details",2571625908));var map__19285 = p__19283;var map__19285__$1 = ((cljs.core.seq_QMARK_.call(null,map__19285))?cljs.core.apply.call(null,cljs.core.hash_map,map__19285):map__19285);var from = cljs.core.get.call(null,map__19285__$1,new cljs.core.Keyword(null,"from","from",1017056028));var ann = [cljs.core.str(clojure.string.trim.call(null,cljs.core.second.call(null,cljs.core.re_find.call(null,/I inferred the type annotation so you can copy it into your code:([\s\S]*$)/m,details)))),cljs.core.str("\n")].join('');return lt.objs.editor.replace.call(null,ed,from,ann);
});})(G__19277))
], null)], null);
} else
{if(cljs.core._EQ_.call(null,"unused import",G__19277))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",1017460895),"Remove",new cljs.core.Keyword(null,"action","action",3885920680),((function (G__19277){
return (function (_,p__19286){var map__19287 = p__19286;var map__19287__$1 = ((cljs.core.seq_QMARK_.call(null,map__19287))?cljs.core.apply.call(null,cljs.core.hash_map,map__19287):map__19287);var to = cljs.core.get.call(null,map__19287__$1,new cljs.core.Keyword(null,"to","to",1013907949));var from = cljs.core.get.call(null,map__19287__$1,new cljs.core.Keyword(null,"from","from",1017056028));lt.objs.editor.replace.call(null,ed,from,to,"");
return CodeMirror.commands.deleteLine(lt.objs.editor.__GT_cm_ed.call(null,ed));
});})(G__19277))
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
if(cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__19288_SHARP_){return cljs.core._EQ_.call(null,"error",new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(p1__19288_SHARP_));
}),res)))
{lt.objs.notifos.set_msg_BANG_.call(null,"Elm make returned errors; check you editor or the console for details",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
} else
{}
var seq__19295 = cljs.core.seq.call(null,res);var chunk__19296 = null;var count__19297 = 0;var i__19298 = 0;while(true){
if((i__19298 < count__19297))
{var map__19299 = cljs.core._nth.call(null,chunk__19296,i__19298);var map__19299__$1 = ((cljs.core.seq_QMARK_.call(null,map__19299))?cljs.core.apply.call(null,cljs.core.hash_map,map__19299):map__19299);var row = map__19299__$1;var tag = cljs.core.get.call(null,map__19299__$1,new cljs.core.Keyword(null,"tag","tag",1014018828));var subregion = cljs.core.get.call(null,map__19299__$1,new cljs.core.Keyword(null,"subregion","subregion",1501636774));var region = cljs.core.get.call(null,map__19299__$1,new cljs.core.Keyword(null,"region","region",4374076006));var details = cljs.core.get.call(null,map__19299__$1,new cljs.core.Keyword(null,"details","details",2571625908));var overview = cljs.core.get.call(null,map__19299__$1,new cljs.core.Keyword(null,"overview","overview",1544020203));var type = cljs.core.get.call(null,map__19299__$1,new cljs.core.Keyword(null,"type","type",1017479852));var file = cljs.core.get.call(null,map__19299__$1,new cljs.core.Keyword(null,"file","file",1017047278));var msg_19311 = [cljs.core.str(overview),cljs.core.str("\n"),cljs.core.str(lt.plugins.elm_light.colorize_msg.call(null,details))].join('');if(cljs.core.truth_((function (){var and__4872__auto__ = cljs.core._EQ_.call(null,path,file);if(and__4872__auto__)
{return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["error",null,"warning",null], null), null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [type], null));
} else
{return and__4872__auto__;
}
})()))
{lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"linter-result!","linter-result!",4482067001),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",1124275658),tag,new cljs.core.Keyword(null,"details","details",2571625908),msg_19311,new cljs.core.Keyword(null,"category","category",1064415344),cljs.core.keyword.call(null,type),new cljs.core.Keyword(null,"actions","actions",4147068015),lt.plugins.elm_light.linter_action.call(null,ed,row),new cljs.core.Keyword(null,"code-range","code-range",3297446095),lt.plugins.elm_light.__GT_lt_range.call(null,(function (){var or__4884__auto__ = subregion;if(cljs.core.truth_(or__4884__auto__))
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
var G__19312 = seq__19295;
var G__19313 = chunk__19296;
var G__19314 = count__19297;
var G__19315 = (i__19298 + 1);
seq__19295 = G__19312;
chunk__19296 = G__19313;
count__19297 = G__19314;
i__19298 = G__19315;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__19295);if(temp__4092__auto__)
{var seq__19295__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19295__$1))
{var c__5632__auto__ = cljs.core.chunk_first.call(null,seq__19295__$1);{
var G__19316 = cljs.core.chunk_rest.call(null,seq__19295__$1);
var G__19317 = c__5632__auto__;
var G__19318 = cljs.core.count.call(null,c__5632__auto__);
var G__19319 = 0;
seq__19295 = G__19316;
chunk__19296 = G__19317;
count__19297 = G__19318;
i__19298 = G__19319;
continue;
}
} else
{var map__19300 = cljs.core.first.call(null,seq__19295__$1);var map__19300__$1 = ((cljs.core.seq_QMARK_.call(null,map__19300))?cljs.core.apply.call(null,cljs.core.hash_map,map__19300):map__19300);var row = map__19300__$1;var tag = cljs.core.get.call(null,map__19300__$1,new cljs.core.Keyword(null,"tag","tag",1014018828));var subregion = cljs.core.get.call(null,map__19300__$1,new cljs.core.Keyword(null,"subregion","subregion",1501636774));var region = cljs.core.get.call(null,map__19300__$1,new cljs.core.Keyword(null,"region","region",4374076006));var details = cljs.core.get.call(null,map__19300__$1,new cljs.core.Keyword(null,"details","details",2571625908));var overview = cljs.core.get.call(null,map__19300__$1,new cljs.core.Keyword(null,"overview","overview",1544020203));var type = cljs.core.get.call(null,map__19300__$1,new cljs.core.Keyword(null,"type","type",1017479852));var file = cljs.core.get.call(null,map__19300__$1,new cljs.core.Keyword(null,"file","file",1017047278));var msg_19320 = [cljs.core.str(overview),cljs.core.str("\n"),cljs.core.str(lt.plugins.elm_light.colorize_msg.call(null,details))].join('');if(cljs.core.truth_((function (){var and__4872__auto__ = cljs.core._EQ_.call(null,path,file);if(and__4872__auto__)
{return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["error",null,"warning",null], null), null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [type], null));
} else
{return and__4872__auto__;
}
})()))
{lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"linter-result!","linter-result!",4482067001),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",1124275658),tag,new cljs.core.Keyword(null,"details","details",2571625908),msg_19320,new cljs.core.Keyword(null,"category","category",1064415344),cljs.core.keyword.call(null,type),new cljs.core.Keyword(null,"actions","actions",4147068015),lt.plugins.elm_light.linter_action.call(null,ed,row),new cljs.core.Keyword(null,"code-range","code-range",3297446095),lt.plugins.elm_light.__GT_lt_range.call(null,(function (){var or__4884__auto__ = subregion;if(cljs.core.truth_(or__4884__auto__))
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
var G__19321 = cljs.core.next.call(null,seq__19295__$1);
var G__19322 = null;
var G__19323 = 0;
var G__19324 = 0;
seq__19295 = G__19321;
chunk__19296 = G__19322;
count__19297 = G__19323;
i__19298 = G__19324;
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
lt.plugins.elm_light.__BEH__make_project = (function __BEH__make_project(ed){var info = new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed));var project_path = lt.plugins.elm_light.utils.project_path.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(info));var map__19302 = new cljs.core.Keyword(null,"make-info","make-info",2233727135).cljs$core$IFn$_invoke$arity$1(lt.plugins.elm_light.utils.parse_json_file.call(null,lt.objs.files.join.call(null,project_path,"elm-package.json")));var map__19302__$1 = ((cljs.core.seq_QMARK_.call(null,map__19302))?cljs.core.apply.call(null,cljs.core.hash_map,map__19302):map__19302);var out = cljs.core.get.call(null,map__19302__$1,new cljs.core.Keyword(null,"out","out",1014014656));var main = cljs.core.get.call(null,map__19302__$1,new cljs.core.Keyword(null,"main","main",1017248043));if(cljs.core.truth_((function (){var and__4872__auto__ = main;if(cljs.core.truth_(and__4872__auto__))
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
lt.plugins.elm_light.__BEH__elm_make_res = (function __BEH__elm_make_res(ed,p__19303){var map__19305 = p__19303;var map__19305__$1 = ((cljs.core.seq_QMARK_.call(null,map__19305))?cljs.core.apply.call(null,cljs.core.hash_map,map__19305):map__19305);var res = cljs.core.get.call(null,map__19305__$1,new cljs.core.Keyword(null,"res","res",1014017042));var outputFile = cljs.core.get.call(null,map__19305__$1,new cljs.core.Keyword(null,"outputFile","outputFile",4034596239));lt.objs.notifos.done_working.call(null,[cljs.core.str("Elm make compiled to: "),cljs.core.str(outputFile)].join(''));
return lt.plugins.elm_light.display_make_results.call(null,ed,res,lt.plugins.elm_light.path);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light","elm-make-res","lt.plugins.elm-light/elm-make-res",3896116701),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.__BEH__elm_make_res,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elm.make.res","elm.make.res",3219830874),null], null), null));
lt.plugins.elm_light.__BEH__elm_make_err = (function __BEH__elm_make_err(ed,res){var path = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));lt.objs.notifos.done_working.call(null,"");
lt.objs.notifos.set_msg_BANG_.call(null,[cljs.core.str("Elm make error: "),cljs.core.str(res)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
return lt.objs.console.error.call(null,res);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light","elm-make-err","lt.plugins.elm-light/elm-make-err",3896146200),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.__BEH__elm_make_err,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elm.make.err","elm.make.err",3219818783),null], null), null));
lt.plugins.elm_light.__BEH__connect = (function __BEH__connect(this$,path){return lt.plugins.elm_light.clients.try_connect.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"info","info",1017141280),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",1017337751),path], null)], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light","connect","lt.plugins.elm-light/connect",2444734323),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.__BEH__connect,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"connect","connect",1965255772),null], null), null));
lt.plugins.elm_light.__BEH__elm_doc_search = (function __BEH__elm_doc_search(this$,cur){return cljs.core.conj.call(null,cur,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1116631654),"elm",new cljs.core.Keyword(null,"trigger","trigger",4248979754),new cljs.core.Keyword(null,"docs.elm.search","docs.elm.search",737241333),new cljs.core.Keyword(null,"file-types","file-types",1727875162),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["elm",null], null), null)], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light","elm-doc-search","lt.plugins.elm-light/elm-doc-search",546131961),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.__BEH__elm_doc_search,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"types+","types+",4450069060),null], null), null));
lt.plugins.elm_light.__BEH__on_eval__DOT__one = (function __BEH__on_eval__DOT__one(ed){var pos = lt.objs.editor.__GT_cursor.call(null,ed);var info = cljs.core.conj.call(null,new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)),(cljs.core.truth_(lt.objs.editor.selection_QMARK_.call(null,ed))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"code","code",1016963423),lt.objs.editor.selection.call(null,ed),new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",1123661780),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(lt.objs.editor.__GT_cursor.call(null,ed,"start")),new cljs.core.Keyword(null,"end","end",1014004813),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(lt.objs.editor.__GT_cursor.call(null,ed,"end"))], null)], null):(function (){var temp__4090__auto__ = lt.plugins.elm_light.selection.get_top_level_expr.call(null,ed,pos);if(cljs.core.truth_(temp__4090__auto__))
{var rng = temp__4090__auto__;return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",1014015430),pos,new cljs.core.Keyword(null,"code","code",1016963423),lt.objs.editor.range.call(null,ed,new cljs.core.Keyword(null,"from","from",1017056028).cljs$core$IFn$_invoke$arity$1(rng),new cljs.core.Keyword(null,"to","to",1013907949).cljs$core$IFn$_invoke$arity$1(rng)),new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",1123661780),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"from","from",1017056028).cljs$core$IFn$_invoke$arity$1(rng)),new cljs.core.Keyword(null,"end","end",1014004813),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"end","end",1014004813).cljs$core$IFn$_invoke$arity$1(rng))], null)], null);
} else
{return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",1014015430),pos,new cljs.core.Keyword(null,"code","code",1016963423),lt.objs.editor.line.call(null,ed,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(pos)),new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",1123661780),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(pos),new cljs.core.Keyword(null,"end","end",1014004813),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(pos)], null)], null);
}
})()));return lt.object.raise.call(null,lt.plugins.elm_light.elm,new cljs.core.Keyword(null,"eval!","eval!",1110791799),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"origin","origin",4300251800),ed,new cljs.core.Keyword(null,"info","info",1017141280),info], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light","on-eval.one","lt.plugins.elm-light/on-eval.one",3108499739),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.__BEH__on_eval__DOT__one,new cljs.core.Keyword(null,"desc","desc",1016984067),"Elm repl: Eval current selection",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval.one","eval.one",1173589382),null], null), null));
lt.plugins.elm_light.__BEH__eval_BANG_ = (function __BEH__eval_BANG_(this$,event){var map__19307 = event;var map__19307__$1 = ((cljs.core.seq_QMARK_.call(null,map__19307))?cljs.core.apply.call(null,cljs.core.hash_map,map__19307):map__19307);var origin = cljs.core.get.call(null,map__19307__$1,new cljs.core.Keyword(null,"origin","origin",4300251800));var info = cljs.core.get.call(null,map__19307__$1,new cljs.core.Keyword(null,"info","info",1017141280));lt.objs.notifos.working.call(null,"Evaluating elm...");
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
lt.plugins.elm_light.__BEH__repl_restart_BANG_ = (function __BEH__repl_restart_BANG_(p__19308){var map__19310 = p__19308;var map__19310__$1 = ((cljs.core.seq_QMARK_.call(null,map__19310))?cljs.core.apply.call(null,cljs.core.hash_map,map__19310):map__19310);var ed = map__19310__$1;var info = cljs.core.get.call(null,map__19310__$1,new cljs.core.Keyword(null,"info","info",1017141280));var temp__4092__auto__ = new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));if(cljs.core.truth_(temp__4092__auto__))
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
var b_19325 = (function (){var or__4884__auto__ = cljs.core.first.call(null,lt.object.by_tag.call(null,new cljs.core.Keyword(null,"browser","browser",1164844698)));if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return lt.objs.browser.add.call(null);
}
})();var get_url_19326 = ((function (b_19325,path,client){
return (function (){return [cljs.core.str("http://localhost:"),cljs.core.str(new cljs.core.Keyword(null,"reactor-port","reactor-port",4649590590).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client))),cljs.core.str(path),cljs.core.str((cljs.core.truth_(debug_QMARK_)?"?debug":""))].join('');
});})(b_19325,path,client))
;if(cljs.core.truth_(new cljs.core.Keyword(null,"connected","connected",4729661051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client))))
{lt.object.raise.call(null,b_19325,new cljs.core.Keyword(null,"navigate!","navigate!",1766726722),get_url_19326.call(null));
} else
{lt.util.js.wait.call(null,100,((function (b_19325,get_url_19326,path,client){
return (function (){return lt.object.raise.call(null,b_19325,new cljs.core.Keyword(null,"navigate!","navigate!",1766726722),get_url_19326.call(null));
});})(b_19325,get_url_19326,path,client))
);
}
return lt.objs.notifos.done_working.call(null);
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light","elm-browse!","lt.plugins.elm-light/elm-browse!",2398181301),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.__BEH__elm_browse_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elm.browse","elm.browse",2486947908),null], null), null));
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
lt.plugins.elm_light.__BEH__elm_parse_editor = (function __BEH__elm_parse_editor(ed){var temp__4090__auto__ = lt.plugins.elm_light.clients.get_eval_client_if_connected.call(null,ed,new cljs.core.Keyword(null,"editor.elm.ast.parsetext","editor.elm.ast.parsetext",1992138717));if(cljs.core.truth_(temp__4090__auto__))
{var client = temp__4090__auto__;if(cljs.core.truth_(client))
{cljs.core._EQ_.call(null,lt.objs.editor.pool.last_active.call(null),ed);
return lt.objs.clients.send.call(null,client,new cljs.core.Keyword(null,"editor.elm.ast.parsetext","editor.elm.ast.parsetext",1992138717),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"code","code",1016963423),lt.objs.editor.__GT_val.call(null,ed)], null),new cljs.core.Keyword(null,"only","only",1017320222),ed);
} else
{return null;
}
} else
{lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"clear-linter-results!","clear-linter-results!",4528495642));
lt.object.update_BANG_.call(null,ed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast-status","ast-status",2421112079)], null),cljs.core.assoc,new cljs.core.Keyword(null,"status","status",4416389988),null,new cljs.core.Keyword(null,"error","error",1110689146),null);
return lt.plugins.elm_light.elm_ast.update_status_for_editor.call(null,ed);
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light","elm-parse-editor","lt.plugins.elm-light/elm-parse-editor",583860183),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.__BEH__elm_parse_editor,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"change","change",3947235106),null,new cljs.core.Keyword(null,"focus","focus",1111509066),null,new cljs.core.Keyword(null,"project-disconnected","project-disconnected",2085293025),null,new cljs.core.Keyword(null,"project-connected","project-connected",3474311367),null], null), null),new cljs.core.Keyword(null,"debounce","debounce",1556599227),100);
lt.plugins.elm_light.__BEH__elm_parse_editor_result = (function __BEH__elm_parse_editor_result(ed,res){var temp__4090__auto___19327 = new cljs.core.Keyword(null,"error","error",1110689146).cljs$core$IFn$_invoke$arity$1(res);if(cljs.core.truth_(temp__4090__auto___19327))
{var error_19328 = temp__4090__auto___19327;lt.object.update_BANG_.call(null,ed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast-status","ast-status",2421112079)], null),cljs.core.assoc,new cljs.core.Keyword(null,"status","status",4416389988),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"error","error",1110689146),error_19328);
} else
{var path_19329 = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));lt.object.update_BANG_.call(null,ed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast-status","ast-status",2421112079)], null),cljs.core.assoc,new cljs.core.Keyword(null,"status","status",4416389988),new cljs.core.Keyword(null,"ok","ok",1013907790),new cljs.core.Keyword(null,"error","error",1110689146),null);
lt.plugins.elm_light.elm_ast.upsert_ast_BANG_.call(null,lt.plugins.elm_light.utils.project_path.call(null,path_19329),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",1017047278),path_19329,new cljs.core.Keyword(null,"ast","ast",1014001140),new cljs.core.Keyword(null,"ast","ast",1014001140).cljs$core$IFn$_invoke$arity$1(res)], null));
}
return lt.plugins.elm_light.elm_ast.update_status_for_editor.call(null,ed);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light","elm-parse-editor-result","lt.plugins.elm-light/elm-parse-editor-result",3556794401),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.__BEH__elm_parse_editor_result,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.elm.ast.parsetext.result","editor.elm.ast.parsetext.result",1834022514),null], null), null));
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light","elm-lang","lt.plugins.elm-light/elm-lang",1051216304),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elm.lang","elm.lang",1176612264),null], null), null));
lt.plugins.elm_light.elm = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.elm-light","elm-lang","lt.plugins.elm-light/elm-lang",1051216304));
lt.objs.sidebar.clients.add_connector.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),"Elm",new cljs.core.Keyword(null,"desc","desc",1016984067),"Select a directory to serve as the root of your elm project.",new cljs.core.Keyword(null,"connect","connect",1965255772),(function (){return lt.objs.dialogs.dir.call(null,lt.plugins.elm_light.elm,new cljs.core.Keyword(null,"connect","connect",1965255772));
})], null));
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
lt.plugins.elm_light.test.deps__GT_named = (function deps__GT_named(deps){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__19063){var vec__19064 = p__19063;var k = cljs.core.nth.call(null,vec__19064,0,null);var v = cljs.core.nth.call(null,vec__19064,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.elm_light.utils.nskw__GT_name.call(null,k),v], null);
}),deps));
});
lt.plugins.elm_light.test.__GT_test_config = (function __GT_test_config(project_cfg){return cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.assoc.call(null,cljs.core.update_in.call(null,project_cfg,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-directories","source-directories",4475397259)], null),lt.plugins.elm_light.test.__GT_test_src_dirs),new cljs.core.Keyword(null,"exposed-modules","exposed-modules",4185867084),cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependencies","dependencies",1517678747)], null),(function (p1__19065_SHARP_){return cljs.core.merge.call(null,p1__19065_SHARP_,lt.plugins.elm_light.test.default_test_deps);
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
return (function (p1__19066_SHARP_){return cljs.core.println.call(null,[cljs.core.str("Test package install: "),cljs.core.str(p1__19066_SHARP_)].join(''));
});})(args,proc))
);
proc.stderr.on("data",((function (args,proc){
return (function (p1__19067_SHARP_){return lt.objs.console.error.call(null,[cljs.core.str(p1__19067_SHARP_)].join(''));
});})(args,proc))
);
proc.on("exit",((function (args,proc){
return (function (p1__19068_SHARP_){if(cljs.core._EQ_.call(null,p1__19068_SHARP_,0))
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
}catch (e11857){var e = e11857;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,e.message], null);
}});
/**
* Format file or all elm files in dir using elm-format.
* If successful returns [true nil]
* If errors returns [false err]
*/
lt.plugins.elm_light.format.format_path = (function format_path(cwd,path){try{require("child_process").execSync([cljs.core.str("elm-format --yes "),cljs.core.str(path)].join(''),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cwd","cwd",1014003170),cwd,new cljs.core.Keyword(null,"stdio","stdio",1123664379),"pipe"], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);
}catch (e11859){var e = e11859;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,e.message], null);
}});
lt.plugins.elm_light.format.handle_format_error = (function handle_format_error(err){lt.objs.notifos.set_msg_BANG_.call(null,"Elm format reported errors. See console for details",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),"error",new cljs.core.Keyword(null,"timeout","timeout",3994960083),5000], null));
return lt.objs.console.error.call(null,err);
});
lt.plugins.elm_light.format.__BEH__elm_format = (function __BEH__elm_format(ed){var temp__4092__auto__ = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));if(cljs.core.truth_(temp__4092__auto__))
{var path = temp__4092__auto__;var pos = lt.objs.editor.__GT_cursor.call(null,ed);var vec__11861 = lt.plugins.elm_light.format.format_path.call(null,lt.plugins.elm_light.utils.project_path.call(null,path),path);var ok_QMARK_ = cljs.core.nth.call(null,vec__11861,0,null);var res = cljs.core.nth.call(null,vec__11861,1,null);if(cljs.core.truth_(ok_QMARK_))
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
{var map__11864 = temp__4092__auto__;var map__11864__$1 = ((cljs.core.seq_QMARK_.call(null,map__11864))?cljs.core.apply.call(null,cljs.core.hash_map,map__11864):map__11864);var to = cljs.core.get.call(null,map__11864__$1,new cljs.core.Keyword(null,"to","to",1013907949));var from = cljs.core.get.call(null,map__11864__$1,new cljs.core.Keyword(null,"from","from",1017056028));var vec__11865 = lt.plugins.elm_light.format.format_input.call(null,cwd,lt.objs.editor.range.call(null,ed,from,to));var ok_QMARK_ = cljs.core.nth.call(null,vec__11865,0,null);var res = cljs.core.nth.call(null,vec__11865,1,null);if(cljs.core.truth_(ok_QMARK_))
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
lt.plugins.elm_light.format.__BEH__elm_format_buffer = (function __BEH__elm_format_buffer(ed){var pos = lt.objs.editor.__GT_cursor.call(null,ed);var vec__11867 = lt.plugins.elm_light.format.format_input.call(null,lt.plugins.elm_light.utils.project_path.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)))),lt.objs.editor.__GT_val.call(null,ed));var ok_QMARK_ = cljs.core.nth.call(null,vec__11867,0,null);var res = cljs.core.nth.call(null,vec__11867,1,null);if(cljs.core.truth_(ok_QMARK_))
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