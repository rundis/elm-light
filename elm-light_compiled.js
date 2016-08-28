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
lt.plugins.elm_light.elm_ast.start_with_QMARK_ = (function start_with_QMARK_(the_str,fragment){if(cljs.core.truth_((function (){var and__4873__auto__ = the_str;if(cljs.core.truth_(and__4873__auto__))
{return fragment;
} else
{return and__4873__auto__;
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
lt.plugins.elm_light.elm_ast.upsert_ast_BANG_ = (function upsert_ast_BANG_(project,file_ast){var prj_idx = lt.plugins.elm_light.elm_ast.idx_of.call(null,(function (p1__21324_SHARP_){return cljs.core._EQ_.call(null,project,new cljs.core.Keyword(null,"project","project",704593547).cljs$core$IFn$_invoke$arity$1(p1__21324_SHARP_));
}),cljs.core.deref.call(null,lt.plugins.elm_light.elm_ast.project_asts));if(cljs.core.truth_(prj_idx))
{return cljs.core.swap_BANG_.call(null,lt.plugins.elm_light.elm_ast.project_asts,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prj_idx,new cljs.core.Keyword(null,"file-asts","file-asts",3945857876)], null),((function (prj_idx){
return (function (file_asts){return cljs.core.conj.call(null,cljs.core.filterv.call(null,((function (prj_idx){
return (function (p1__21325_SHARP_){return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"file","file",1017047278).cljs$core$IFn$_invoke$arity$1(file_ast),new cljs.core.Keyword(null,"file","file",1017047278).cljs$core$IFn$_invoke$arity$1(p1__21325_SHARP_));
});})(prj_idx))
,file_asts),file_ast);
});})(prj_idx))
);
} else
{return cljs.core.swap_BANG_.call(null,lt.plugins.elm_light.elm_ast.project_asts,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"project","project",704593547),project,new cljs.core.Keyword(null,"file-asts","file-asts",3945857876),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_ast], null)], null));
}
});
lt.plugins.elm_light.elm_ast.delete_ast_BANG_ = (function delete_ast_BANG_(project,file){var temp__4092__auto__ = lt.plugins.elm_light.elm_ast.idx_of.call(null,(function (p1__21326_SHARP_){return cljs.core._EQ_.call(null,project,new cljs.core.Keyword(null,"project","project",704593547).cljs$core$IFn$_invoke$arity$1(p1__21326_SHARP_));
}),cljs.core.deref.call(null,lt.plugins.elm_light.elm_ast.project_asts));if(cljs.core.truth_(temp__4092__auto__))
{var prj_idx = temp__4092__auto__;return cljs.core.swap_BANG_.call(null,lt.plugins.elm_light.elm_ast.project_asts,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prj_idx,new cljs.core.Keyword(null,"file-asts","file-asts",3945857876)], null),((function (prj_idx,temp__4092__auto__){
return (function (file_asts){return cljs.core.filterv.call(null,((function (prj_idx,temp__4092__auto__){
return (function (p1__21327_SHARP_){return cljs.core.not_EQ_.call(null,file,new cljs.core.Keyword(null,"file","file",1017047278).cljs$core$IFn$_invoke$arity$1(p1__21327_SHARP_));
});})(prj_idx,temp__4092__auto__))
,file_asts);
});})(prj_idx,temp__4092__auto__))
);
} else
{return null;
}
});
lt.plugins.elm_light.elm_ast.delete_package_asts_BANG_ = (function delete_package_asts_BANG_(project){var temp__4092__auto__ = lt.plugins.elm_light.elm_ast.idx_of.call(null,(function (p1__21328_SHARP_){return cljs.core._EQ_.call(null,project,new cljs.core.Keyword(null,"project","project",704593547).cljs$core$IFn$_invoke$arity$1(p1__21328_SHARP_));
}),cljs.core.deref.call(null,lt.plugins.elm_light.elm_ast.project_asts));if(cljs.core.truth_(temp__4092__auto__))
{var prj_idx = temp__4092__auto__;return cljs.core.swap_BANG_.call(null,lt.plugins.elm_light.elm_ast.project_asts,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prj_idx,new cljs.core.Keyword(null,"file-asts","file-asts",3945857876)], null),((function (prj_idx,temp__4092__auto__){
return (function (file_asts){return cljs.core.vec.call(null,cljs.core.remove.call(null,new cljs.core.Keyword(null,"package","package",4501809080),file_asts));
});})(prj_idx,temp__4092__auto__))
);
} else
{return null;
}
});
lt.plugins.elm_light.elm_ast.delete_project_ast_BANG_ = (function delete_project_ast_BANG_(project){return cljs.core.swap_BANG_.call(null,lt.plugins.elm_light.elm_ast.project_asts,(function (prjs){return cljs.core.filterv.call(null,(function (p1__21329_SHARP_){return cljs.core.not_EQ_.call(null,project,new cljs.core.Keyword(null,"project","project",704593547).cljs$core$IFn$_invoke$arity$1(p1__21329_SHARP_));
}),prjs);
}));
});
lt.plugins.elm_light.elm_ast.reset_asts_BANG_ = (function reset_asts_BANG_(){return cljs.core.reset_BANG_.call(null,lt.plugins.elm_light.elm_ast.project_asts,cljs.core.PersistentVector.EMPTY);
});
lt.plugins.elm_light.elm_ast.get_project = (function get_project(project){return cljs.core.first.call(null,cljs.core.filterv.call(null,(function (p1__21330_SHARP_){return cljs.core._EQ_.call(null,project,new cljs.core.Keyword(null,"project","project",704593547).cljs$core$IFn$_invoke$arity$1(p1__21330_SHARP_));
}),cljs.core.deref.call(null,lt.plugins.elm_light.elm_ast.project_asts)));
});
lt.plugins.elm_light.elm_ast.get_module_ast = (function get_module_ast(project,module_file){var temp__4092__auto__ = lt.plugins.elm_light.elm_ast.get_project.call(null,project);if(cljs.core.truth_(temp__4092__auto__))
{var prj = temp__4092__auto__;return cljs.core.first.call(null,cljs.core.filterv.call(null,((function (prj,temp__4092__auto__){
return (function (p1__21331_SHARP_){return cljs.core._EQ_.call(null,module_file,new cljs.core.Keyword(null,"file","file",1017047278).cljs$core$IFn$_invoke$arity$1(p1__21331_SHARP_));
});})(prj,temp__4092__auto__))
,new cljs.core.Keyword(null,"file-asts","file-asts",3945857876).cljs$core$IFn$_invoke$arity$1(prj)));
} else
{return null;
}
});
lt.plugins.elm_light.elm_ast.get_module_by_name = (function get_module_by_name(project,module_name){var temp__4092__auto__ = lt.plugins.elm_light.elm_ast.get_project.call(null,project);if(cljs.core.truth_(temp__4092__auto__))
{var prj = temp__4092__auto__;return cljs.core.first.call(null,cljs.core.filterv.call(null,((function (prj,temp__4092__auto__){
return (function (p1__21332_SHARP_){return cljs.core._EQ_.call(null,module_name,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"moduleDeclaration","moduleDeclaration",1240624864).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",1014001140).cljs$core$IFn$_invoke$arity$1(p1__21332_SHARP_))));
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
lt.plugins.elm_light.elm_ast.exposed_by_module_QMARK_ = (function exposed_by_module_QMARK_(module,candidate){var exposing = new cljs.core.Keyword(null,"exposing","exposing",3382854387).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"moduleDeclaration","moduleDeclaration",1240624864).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",1014001140).cljs$core$IFn$_invoke$arity$1(module)));if(lt.plugins.elm_light.elm_ast.exposeAll_QMARK_.call(null,exposing))
{return true;
} else
{return cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,lt.plugins.elm_light.elm_ast.extract_exports.call(null,exposing)),candidate);
}
});
lt.plugins.elm_light.elm_ast.enrich_module_declarations = (function enrich_module_declarations(module){return cljs.core.map.call(null,(function (p1__21333_SHARP_){return cljs.core.assoc.call(null,p1__21333_SHARP_,new cljs.core.Keyword(null,"exposed?","exposed?",3382850193),lt.plugins.elm_light.elm_ast.exposed_by_module_QMARK_.call(null,module,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p1__21333_SHARP_)),new cljs.core.Keyword(null,"file","file",1017047278),new cljs.core.Keyword(null,"file","file",1017047278).cljs$core$IFn$_invoke$arity$1(module),new cljs.core.Keyword(null,"module-name","module-name",4067691710),new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"moduleDeclaration","moduleDeclaration",1240624864).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",1014001140).cljs$core$IFn$_invoke$arity$1(module))),new cljs.core.Keyword(null,"package","package",4501809080),new cljs.core.Keyword(null,"package","package",4501809080).cljs$core$IFn$_invoke$arity$1(module));
}),new cljs.core.Keyword(null,"declarations","declarations",2554736043).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",1014001140).cljs$core$IFn$_invoke$arity$1(module)));
});
lt.plugins.elm_light.elm_ast.get_exposed_declarations = (function get_exposed_declarations(module){return cljs.core.filter.call(null,new cljs.core.Keyword(null,"exposed?","exposed?",3382850193),lt.plugins.elm_light.elm_ast.enrich_module_declarations.call(null,module));
});
lt.plugins.elm_light.elm_ast.get_import_candidate_tokens = (function get_import_candidate_tokens(import_def,exposed_declaration){return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(import_def)),cljs.core.str("."),cljs.core.str(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(exposed_declaration))].join(''),(function (){var temp__4092__auto__ = new cljs.core.Keyword(null,"alias","alias",1106807234).cljs$core$IFn$_invoke$arity$1(import_def);if(cljs.core.truth_(temp__4092__auto__))
{var alias = temp__4092__auto__;return [cljs.core.str(alias),cljs.core.str("."),cljs.core.str(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(exposed_declaration))].join('');
} else
{return null;
}
})(),(((lt.plugins.elm_light.elm_ast.exposeAll_QMARK_.call(null,new cljs.core.Keyword(null,"exposing","exposing",3382854387).cljs$core$IFn$_invoke$arity$1(import_def))) || (cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__21334_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(exposed_declaration),new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p1__21334_SHARP_));
}),new cljs.core.Keyword(null,"exposing","exposing",3382854387).cljs$core$IFn$_invoke$arity$1(import_def)))))?new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(exposed_declaration):null)], null)));
});
lt.plugins.elm_light.elm_ast.get_external_candidates = (function get_external_candidates(module,modules){var imports = new cljs.core.Keyword(null,"imports","imports",2939942112).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",1014001140).cljs$core$IFn$_invoke$arity$1(module));var imported_mod_names = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,new cljs.core.Keyword(null,"value","value",1125876963),imports));var external_exposed = cljs.core.mapcat.call(null,((function (imports,imported_mod_names){
return (function (p1__21336_SHARP_){return lt.plugins.elm_light.elm_ast.get_exposed_declarations.call(null,p1__21336_SHARP_);
});})(imports,imported_mod_names))
,cljs.core.filter.call(null,((function (imports,imported_mod_names){
return (function (p1__21335_SHARP_){return (cljs.core.not_EQ_.call(null,lt.plugins.elm_light.elm_ast.get_module_name.call(null,module),lt.plugins.elm_light.elm_ast.get_module_name.call(null,p1__21335_SHARP_))) && (cljs.core.contains_QMARK_.call(null,imported_mod_names,lt.plugins.elm_light.elm_ast.get_module_name.call(null,p1__21335_SHARP_)));
});})(imports,imported_mod_names))
,modules));return cljs.core.mapcat.call(null,((function (imports,imported_mod_names,external_exposed){
return (function (imp){return cljs.core.map.call(null,((function (imports,imported_mod_names,external_exposed){
return (function (p1__21338_SHARP_){return cljs.core.assoc.call(null,p1__21338_SHARP_,new cljs.core.Keyword(null,"candidate-tokens","candidate-tokens",3775833238),lt.plugins.elm_light.elm_ast.get_import_candidate_tokens.call(null,imp,p1__21338_SHARP_));
});})(imports,imported_mod_names,external_exposed))
,cljs.core.filter.call(null,((function (imports,imported_mod_names,external_exposed){
return (function (p1__21337_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(imp),new cljs.core.Keyword(null,"module-name","module-name",4067691710).cljs$core$IFn$_invoke$arity$1(p1__21337_SHARP_));
});})(imports,imported_mod_names,external_exposed))
,external_exposed));
});})(imports,imported_mod_names,external_exposed))
,imports);
});
/**
* Get candidates for Elm default imports as per
* https://github.com/elm-lang/core
*/
lt.plugins.elm_light.elm_ast.get_default_candidates = (function get_default_candidates(modules){return cljs.core.concat.call(null,cljs.core.map.call(null,(function (p1__21340_SHARP_){return cljs.core.assoc.call(null,p1__21340_SHARP_,new cljs.core.Keyword(null,"candidate-tokens","candidate-tokens",3775833238),cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p1__21340_SHARP_)], true));
}),cljs.core.mapcat.call(null,lt.plugins.elm_light.elm_ast.get_exposed_declarations,cljs.core.filterv.call(null,(function (p1__21339_SHARP_){return cljs.core._EQ_.call(null,"Basics",new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"moduleDeclaration","moduleDeclaration",1240624864).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",1014001140).cljs$core$IFn$_invoke$arity$1(p1__21339_SHARP_))));
}),modules))),cljs.core.map.call(null,(function (p1__21342_SHARP_){return cljs.core.assoc.call(null,p1__21342_SHARP_,new cljs.core.Keyword(null,"candidate-tokens","candidate-tokens",3775833238),cljs.core.PersistentHashSet.fromArray([[cljs.core.str("Debug."),cljs.core.str(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p1__21342_SHARP_))].join('')], true));
}),cljs.core.mapcat.call(null,lt.plugins.elm_light.elm_ast.get_exposed_declarations,cljs.core.filterv.call(null,(function (p1__21341_SHARP_){return cljs.core._EQ_.call(null,"Debug",new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"moduleDeclaration","moduleDeclaration",1240624864).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",1014001140).cljs$core$IFn$_invoke$arity$1(p1__21341_SHARP_))));
}),modules))),cljs.core.map.call(null,(function (p1__21344_SHARP_){return cljs.core.assoc.call(null,p1__21344_SHARP_,new cljs.core.Keyword(null,"candidate-tokens","candidate-tokens",3775833238),cljs.core.PersistentHashSet.fromArray([[cljs.core.str("Maybe."),cljs.core.str(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p1__21344_SHARP_))].join('')], true));
}),cljs.core.mapcat.call(null,lt.plugins.elm_light.elm_ast.get_exposed_declarations,cljs.core.filterv.call(null,(function (p1__21343_SHARP_){return cljs.core._EQ_.call(null,"Maybe",new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"moduleDeclaration","moduleDeclaration",1240624864).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",1014001140).cljs$core$IFn$_invoke$arity$1(p1__21343_SHARP_))));
}),modules))),cljs.core.map.call(null,(function (p1__21346_SHARP_){return cljs.core.assoc.call(null,p1__21346_SHARP_,new cljs.core.Keyword(null,"candidate-tokens","candidate-tokens",3775833238),cljs.core.PersistentHashSet.fromArray([[cljs.core.str("Result."),cljs.core.str(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p1__21346_SHARP_))].join('')], true));
}),cljs.core.mapcat.call(null,lt.plugins.elm_light.elm_ast.get_exposed_declarations,cljs.core.filterv.call(null,(function (p1__21345_SHARP_){return cljs.core._EQ_.call(null,"Result",new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"moduleDeclaration","moduleDeclaration",1240624864).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",1014001140).cljs$core$IFn$_invoke$arity$1(p1__21345_SHARP_))));
}),modules))),cljs.core.map.call(null,(function (p1__21348_SHARP_){return cljs.core.assoc.call(null,p1__21348_SHARP_,new cljs.core.Keyword(null,"candidate-tokens","candidate-tokens",3775833238),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p1__21348_SHARP_),"Program"))?new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["Program",null], null), null):cljs.core.PersistentHashSet.fromArray([[cljs.core.str("Platform."),cljs.core.str(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p1__21348_SHARP_))].join('')], true)));
}),cljs.core.mapcat.call(null,lt.plugins.elm_light.elm_ast.get_exposed_declarations,cljs.core.filterv.call(null,(function (p1__21347_SHARP_){return cljs.core._EQ_.call(null,"Platform",new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"moduleDeclaration","moduleDeclaration",1240624864).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",1014001140).cljs$core$IFn$_invoke$arity$1(p1__21347_SHARP_))));
}),modules))),cljs.core.map.call(null,(function (p1__21350_SHARP_){return cljs.core.assoc.call(null,p1__21350_SHARP_,new cljs.core.Keyword(null,"candidate-tokens","candidate-tokens",3775833238),(function (){var G__21356 = new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p1__21350_SHARP_);if(cljs.core._EQ_.call(null,"!",G__21356))
{return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["!",null], null), null);
} else
{if(cljs.core._EQ_.call(null,"Cmd",G__21356))
{return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["Cmd",null], null), null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.PersistentHashSet.fromArray([[cljs.core.str("Platform.Cmd"),cljs.core.str(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p1__21350_SHARP_))].join('')], true);
} else
{return null;
}
}
}
})());
}),cljs.core.mapcat.call(null,lt.plugins.elm_light.elm_ast.get_exposed_declarations,cljs.core.filterv.call(null,(function (p1__21349_SHARP_){return cljs.core._EQ_.call(null,"Platform.Cmd",new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"moduleDeclaration","moduleDeclaration",1240624864).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",1014001140).cljs$core$IFn$_invoke$arity$1(p1__21349_SHARP_))));
}),modules))),cljs.core.map.call(null,(function (p1__21352_SHARP_){return cljs.core.assoc.call(null,p1__21352_SHARP_,new cljs.core.Keyword(null,"candidate-tokens","candidate-tokens",3775833238),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p1__21352_SHARP_),"Sub"))?new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["Sub",null], null), null):cljs.core.PersistentHashSet.fromArray([[cljs.core.str("Platform.Sub."),cljs.core.str(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p1__21352_SHARP_))].join('')], true)));
}),cljs.core.mapcat.call(null,lt.plugins.elm_light.elm_ast.get_exposed_declarations,cljs.core.filterv.call(null,(function (p1__21351_SHARP_){return cljs.core._EQ_.call(null,"Platform.Sub",new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"moduleDeclaration","moduleDeclaration",1240624864).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",1014001140).cljs$core$IFn$_invoke$arity$1(p1__21351_SHARP_))));
}),modules))),cljs.core.map.call(null,(function (p1__21354_SHARP_){return cljs.core.assoc.call(null,p1__21354_SHARP_,new cljs.core.Keyword(null,"candidate-tokens","candidate-tokens",3775833238),((cljs.core._EQ_.call(null,"::",new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p1__21354_SHARP_)))?new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["::",null], null), null):cljs.core.PersistentHashSet.fromArray([[cljs.core.str("List."),cljs.core.str(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p1__21354_SHARP_))].join('')], true)));
}),cljs.core.mapcat.call(null,lt.plugins.elm_light.elm_ast.get_exposed_declarations,cljs.core.filterv.call(null,(function (p1__21353_SHARP_){return cljs.core._EQ_.call(null,"List",new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"moduleDeclaration","moduleDeclaration",1240624864).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",1014001140).cljs$core$IFn$_invoke$arity$1(p1__21353_SHARP_))));
}),modules))));
});
lt.plugins.elm_light.elm_ast.get_current_module_candidates = (function get_current_module_candidates(module){return cljs.core.map.call(null,(function (p1__21357_SHARP_){return cljs.core.assoc.call(null,p1__21357_SHARP_,new cljs.core.Keyword(null,"candidate-tokens","candidate-tokens",3775833238),cljs.core.PersistentHashSet.fromArray([[cljs.core.str(lt.plugins.elm_light.elm_ast.get_module_name.call(null,module)),cljs.core.str("."),cljs.core.str(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p1__21357_SHARP_))].join(''),new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p1__21357_SHARP_)], true));
}),lt.plugins.elm_light.elm_ast.enrich_module_declarations.call(null,module));
});
lt.plugins.elm_light.elm_ast.get_jump_to_candidates = (function get_jump_to_candidates(module,modules){return cljs.core.concat.call(null,lt.plugins.elm_light.elm_ast.get_current_module_candidates.call(null,module),lt.plugins.elm_light.elm_ast.get_external_candidates.call(null,module,modules),lt.plugins.elm_light.elm_ast.get_default_candidates.call(null,modules));
});
lt.plugins.elm_light.elm_ast.get_candidate_by_token = (function get_candidate_by_token(token,module,modules){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__21358_SHARP_){return cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"candidate-tokens","candidate-tokens",3775833238).cljs$core$IFn$_invoke$arity$1(p1__21358_SHARP_),token);
}),lt.plugins.elm_light.elm_ast.get_jump_to_candidates.call(null,module,modules)));
});
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
lt.plugins.elm_light.elm_ast.get_hints = (function get_hints(p__21360,module_file,project_dir){var map__21362 = p__21360;var map__21362__$1 = ((cljs.core.seq_QMARK_.call(null,map__21362))?cljs.core.apply.call(null,cljs.core.hash_map,map__21362):map__21362);var token = cljs.core.get.call(null,map__21362__$1,new cljs.core.Keyword(null,"token","token",1124445547));var temp__4092__auto__ = lt.plugins.elm_light.elm_ast.get_module_ast.call(null,project_dir,module_file);if(cljs.core.truth_(temp__4092__auto__))
{var module = temp__4092__auto__;return cljs.core.sort_by.call(null,cljs.core.juxt.call(null,((function (module,temp__4092__auto__,map__21362,map__21362__$1,token){
return (function (x){return new cljs.core.Keyword(null,"completion","completion",4767668046).cljs$core$IFn$_invoke$arity$1(x).lastIndexOf(".");
});})(module,temp__4092__auto__,map__21362,map__21362__$1,token))
,new cljs.core.Keyword(null,"completion","completion",4767668046)),cljs.core.filter.call(null,((function (module,temp__4092__auto__,map__21362,map__21362__$1,token){
return (function (p1__21359_SHARP_){return cljs.core._EQ_.call(null,0,new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(p1__21359_SHARP_).indexOf(token));
});})(module,temp__4092__auto__,map__21362,map__21362__$1,token))
,cljs.core.mapcat.call(null,cljs.core.partial.call(null,lt.plugins.elm_light.elm_ast.to_hint,lt.plugins.elm_light.elm_ast.get_module_name.call(null,module)),lt.plugins.elm_light.elm_ast.get_jump_to_candidates.call(null,module,new cljs.core.Keyword(null,"file-asts","file-asts",3945857876).cljs$core$IFn$_invoke$arity$1(lt.plugins.elm_light.elm_ast.get_project.call(null,project_dir))))));
} else
{return null;
}
});
lt.plugins.elm_light.elm_ast.search_docs = (function search_docs(sym,project_dir){var qualified_name = (function (p1__21363_SHARP_){return [cljs.core.str(new cljs.core.Keyword(null,"module-name","module-name",4067691710).cljs$core$IFn$_invoke$arity$1(p1__21363_SHARP_)),cljs.core.str("."),cljs.core.str(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p1__21363_SHARP_))].join('');
});var temp__4092__auto__ = lt.plugins.elm_light.elm_ast.get_project.call(null,project_dir);if(cljs.core.truth_(temp__4092__auto__))
{var prj = temp__4092__auto__;return cljs.core.sort_by.call(null,cljs.core.juxt.call(null,new cljs.core.Keyword(null,"value","value",1125876963),new cljs.core.Keyword(null,"module-name","module-name",4067691710)),cljs.core.map.call(null,((function (prj,temp__4092__auto__,qualified_name){
return (function (decl){return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(decl),new cljs.core.Keyword(null,"ns","ns",1013907767),new cljs.core.Keyword(null,"module-name","module-name",4067691710).cljs$core$IFn$_invoke$arity$1(decl),new cljs.core.Keyword(null,"args","args",1016906831),(function (){var or__4885__auto__ = new cljs.core.Keyword(null,"signatureRaw","signatureRaw",3837738946).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"annotation","annotation",3753828001).cljs$core$IFn$_invoke$arity$1(decl));if(cljs.core.truth_(or__4885__auto__))
{return or__4885__auto__;
} else
{return new cljs.core.Keyword(null,"signatureRaw","signatureRaw",3837738946).cljs$core$IFn$_invoke$arity$1(decl);
}
})(),new cljs.core.Keyword(null,"doc","doc",1014003882),new cljs.core.Keyword(null,"doc","doc",1014003882).cljs$core$IFn$_invoke$arity$1(decl),new cljs.core.Keyword(null,"value","value",1125876963),new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(decl),new cljs.core.Keyword(null,"module-name","module-name",4067691710),new cljs.core.Keyword(null,"module-name","module-name",4067691710).cljs$core$IFn$_invoke$arity$1(decl)], null);
});})(prj,temp__4092__auto__,qualified_name))
,cljs.core.filter.call(null,((function (prj,temp__4092__auto__,qualified_name){
return (function (decl){var or__4885__auto__ = lt.plugins.elm_light.elm_ast.start_with_QMARK_.call(null,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(decl),sym);if(cljs.core.truth_(or__4885__auto__))
{return or__4885__auto__;
} else
{return lt.plugins.elm_light.elm_ast.start_with_QMARK_.call(null,qualified_name.call(null,decl),sym);
}
});})(prj,temp__4092__auto__,qualified_name))
,cljs.core.mapcat.call(null,lt.plugins.elm_light.elm_ast.get_exposed_declarations,new cljs.core.Keyword(null,"file-asts","file-asts",3945857876).cljs$core$IFn$_invoke$arity$1(prj)))));
} else
{return null;
}
});
lt.plugins.elm_light.elm_ast.status_class = (function status_class(p__21364){var map__21367 = p__21364;var map__21367__$1 = ((cljs.core.seq_QMARK_.call(null,map__21367))?cljs.core.apply.call(null,cljs.core.hash_map,map__21367):map__21367);var status = cljs.core.get.call(null,map__21367__$1,new cljs.core.Keyword(null,"status","status",4416389988));var G__21368 = status;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",1013907790),G__21368))
{return "ok";
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",1110689146),G__21368))
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
lt.plugins.elm_light.elm_ast.status_text = (function status_text(p__21369){var map__21372 = p__21369;var map__21372__$1 = ((cljs.core.seq_QMARK_.call(null,map__21372))?cljs.core.apply.call(null,cljs.core.hash_map,map__21372):map__21372);var error = cljs.core.get.call(null,map__21372__$1,new cljs.core.Keyword(null,"error","error",1110689146));var status = cljs.core.get.call(null,map__21372__$1,new cljs.core.Keyword(null,"status","status",4416389988));return [cljs.core.str("AST: "),cljs.core.str((function (){var G__21373 = status;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",1110689146),G__21373))
{return "Error";
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",1013907790),G__21373))
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
lt.plugins.elm_light.elm_ast.__GT_status_ui = (function __GT_status_ui(p__21374){var map__21376 = p__21374;var map__21376__$1 = ((cljs.core.seq_QMARK_.call(null,map__21376))?cljs.core.apply.call(null,cljs.core.hash_map,map__21376):map__21376);var ast_summary = cljs.core.get.call(null,map__21376__$1,new cljs.core.Keyword(null,"ast-summary","ast-summary",1727157965));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("ast-status "),cljs.core.str(lt.plugins.elm_light.elm_ast.status_class.call(null,ast_summary))].join('')], null),lt.plugins.elm_light.elm_ast.status_text.call(null,ast_summary)], null);
});
lt.plugins.elm_light.elm_ast.__BEH__update_ast_status = (function __BEH__update_ast_status(this$,f){return lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast-summary","ast-summary",1727157965)], null),f);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.elm-ast","update-ast-status","lt.plugins.elm-light.elm-ast/update-ast-status",2519133077),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.elm_ast.__BEH__update_ast_status,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"update!","update!",779473898),null], null), null));
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.elm-ast","statusbar.ast-status","lt.plugins.elm-light.elm-ast/statusbar.ast-status",1374391534),new cljs.core.Keyword(null,"triggers","triggers",2516997421),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.elm-light.elm-ast","update-ast-status","lt.plugins.elm-light.elm-ast/update-ast-status",2519133077),null], null), null),new cljs.core.Keyword(null,"ast-summary","ast-summary",1727157965),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",4416389988),""], null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return lt.objs.statusbar.statusbar_item.call(null,crate.binding.bound.call(null,this$,lt.plugins.elm_light.elm_ast.__GT_status_ui),"");
}));
lt.plugins.elm_light.elm_ast.statusbar_ast_summary = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.elm-light.elm-ast","statusbar.ast-status","lt.plugins.elm-light.elm-ast/statusbar.ast-status",1374391534));
lt.objs.statusbar.add_statusbar_item.call(null,lt.plugins.elm_light.elm_ast.statusbar_ast_summary);
lt.plugins.elm_light.elm_ast.update_status_for_editor = (function update_status_for_editor(ed){var map__21379 = new cljs.core.Keyword(null,"ast-status","ast-status",2421112079).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed));var map__21379__$1 = ((cljs.core.seq_QMARK_.call(null,map__21379))?cljs.core.apply.call(null,cljs.core.hash_map,map__21379):map__21379);var error = cljs.core.get.call(null,map__21379__$1,new cljs.core.Keyword(null,"error","error",1110689146));var status = cljs.core.get.call(null,map__21379__$1,new cljs.core.Keyword(null,"status","status",4416389988));return lt.object.raise.call(null,lt.plugins.elm_light.elm_ast.statusbar_ast_summary,new cljs.core.Keyword(null,"update!","update!",779473898),((function (map__21379,map__21379__$1,error,status){
return (function (p1__21377_SHARP_){return cljs.core.assoc.call(null,p1__21377_SHARP_,new cljs.core.Keyword(null,"status","status",4416389988),status,new cljs.core.Keyword(null,"error","error",1110689146),error);
});})(map__21379,map__21379__$1,error,status))
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
if(!lt.util.load.provided_QMARK_('lt.plugins.elm-light.gutter')) {
goog.provide('lt.plugins.elm_light.gutter');
goog.require('cljs.core');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.plugins.elm_light.elm_ast');
goog.require('lt.plugins.elm_light.elm_ast');
lt.plugins.elm_light.gutter.gutter_marker_exposed = (function gutter_marker_exposed(){var e__6292__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.elm-gutter-marker","div.elm-gutter-marker",2892074906),"E"], null));var seq__12139_12153 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__12140_12154 = null;var count__12141_12155 = 0;var i__12142_12156 = 0;while(true){
if((i__12142_12156 < count__12141_12155))
{var vec__12143_12157 = cljs.core._nth.call(null,chunk__12140_12154,i__12142_12156);var ev__6293__auto___12158 = cljs.core.nth.call(null,vec__12143_12157,0,null);var func__6294__auto___12159 = cljs.core.nth.call(null,vec__12143_12157,1,null);lt.util.dom.on.call(null,e__6292__auto__,ev__6293__auto___12158,func__6294__auto___12159);
{
var G__12160 = seq__12139_12153;
var G__12161 = chunk__12140_12154;
var G__12162 = count__12141_12155;
var G__12163 = (i__12142_12156 + 1);
seq__12139_12153 = G__12160;
chunk__12140_12154 = G__12161;
count__12141_12155 = G__12162;
i__12142_12156 = G__12163;
continue;
}
} else
{var temp__4092__auto___12164 = cljs.core.seq.call(null,seq__12139_12153);if(temp__4092__auto___12164)
{var seq__12139_12165__$1 = temp__4092__auto___12164;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12139_12165__$1))
{var c__5633__auto___12166 = cljs.core.chunk_first.call(null,seq__12139_12165__$1);{
var G__12167 = cljs.core.chunk_rest.call(null,seq__12139_12165__$1);
var G__12168 = c__5633__auto___12166;
var G__12169 = cljs.core.count.call(null,c__5633__auto___12166);
var G__12170 = 0;
seq__12139_12153 = G__12167;
chunk__12140_12154 = G__12168;
count__12141_12155 = G__12169;
i__12142_12156 = G__12170;
continue;
}
} else
{var vec__12144_12171 = cljs.core.first.call(null,seq__12139_12165__$1);var ev__6293__auto___12172 = cljs.core.nth.call(null,vec__12144_12171,0,null);var func__6294__auto___12173 = cljs.core.nth.call(null,vec__12144_12171,1,null);lt.util.dom.on.call(null,e__6292__auto__,ev__6293__auto___12172,func__6294__auto___12173);
{
var G__12174 = cljs.core.next.call(null,seq__12139_12165__$1);
var G__12175 = null;
var G__12176 = 0;
var G__12177 = 0;
seq__12139_12153 = G__12174;
chunk__12140_12154 = G__12175;
count__12141_12155 = G__12176;
i__12142_12156 = G__12177;
continue;
}
}
} else
{}
}
break;
}
return e__6292__auto__;
});
lt.plugins.elm_light.gutter.__BEH__elm_gutter_exposeds = (function __BEH__elm_gutter_exposeds(this$,exposeds){return lt.objs.editor.operation.call(null,lt.objs.editor.__GT_cm_ed.call(null,this$),(function (){lt.objs.editor.add_gutter.call(null,this$,"elm-gutter",8);
lt.objs.editor.__GT_cm_ed.call(null,this$).clearGutter("elm-gutter");
var seq__12149 = cljs.core.seq.call(null,exposeds);var chunk__12150 = null;var count__12151 = 0;var i__12152 = 0;while(true){
if((i__12152 < count__12151))
{var exposed = cljs.core._nth.call(null,chunk__12150,i__12152);lt.objs.editor.__GT_cm_ed.call(null,this$).setGutterMarker(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(exposed),"elm-gutter",lt.plugins.elm_light.gutter.gutter_marker_exposed.call(null));
{
var G__12178 = seq__12149;
var G__12179 = chunk__12150;
var G__12180 = count__12151;
var G__12181 = (i__12152 + 1);
seq__12149 = G__12178;
chunk__12150 = G__12179;
count__12151 = G__12180;
i__12152 = G__12181;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12149);if(temp__4092__auto__)
{var seq__12149__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12149__$1))
{var c__5633__auto__ = cljs.core.chunk_first.call(null,seq__12149__$1);{
var G__12182 = cljs.core.chunk_rest.call(null,seq__12149__$1);
var G__12183 = c__5633__auto__;
var G__12184 = cljs.core.count.call(null,c__5633__auto__);
var G__12185 = 0;
seq__12149 = G__12182;
chunk__12150 = G__12183;
count__12151 = G__12184;
i__12152 = G__12185;
continue;
}
} else
{var exposed = cljs.core.first.call(null,seq__12149__$1);lt.objs.editor.__GT_cm_ed.call(null,this$).setGutterMarker(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(exposed),"elm-gutter",lt.plugins.elm_light.gutter.gutter_marker_exposed.call(null));
{
var G__12186 = cljs.core.next.call(null,seq__12149__$1);
var G__12187 = null;
var G__12188 = 0;
var G__12189 = 0;
seq__12149 = G__12186;
chunk__12150 = G__12187;
count__12151 = G__12188;
i__12152 = G__12189;
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
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.gutter","elm-gutter-exposeds","lt.plugins.elm-light.gutter/elm-gutter-exposeds",2318158517),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.gutter.__BEH__elm_gutter_exposeds,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elm-gutter-refresh","elm-gutter-refresh",1766622114),null], null), null));
}
if(!lt.util.load.provided_QMARK_('cljs.core.async.impl.protocols')) {
goog.provide('cljs.core.async.impl.protocols');
goog.require('cljs.core');
cljs.core.async.impl.protocols.MAX_QUEUE_SIZE = 1024;
cljs.core.async.impl.protocols.ReadPort = (function (){var obj18446 = {};return obj18446;
})();
cljs.core.async.impl.protocols.take_BANG_ = (function take_BANG_(port,fn1_handler){if((function (){var and__4873__auto__ = port;if(and__4873__auto__)
{return port.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2;
} else
{return and__4873__auto__;
}
})())
{return port.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(port,fn1_handler);
} else
{var x__5512__auto__ = (((port == null))?null:port);return (function (){var or__4885__auto__ = (cljs.core.async.impl.protocols.take_BANG_[goog.typeOf(x__5512__auto__)]);if(or__4885__auto__)
{return or__4885__auto__;
} else
{var or__4885__auto____$1 = (cljs.core.async.impl.protocols.take_BANG_["_"]);if(or__4885__auto____$1)
{return or__4885__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ReadPort.take!",port);
}
}
})().call(null,port,fn1_handler);
}
});
cljs.core.async.impl.protocols.WritePort = (function (){var obj18448 = {};return obj18448;
})();
cljs.core.async.impl.protocols.put_BANG_ = (function put_BANG_(port,val,fn0_handler){if((function (){var and__4873__auto__ = port;if(and__4873__auto__)
{return port.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3;
} else
{return and__4873__auto__;
}
})())
{return port.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(port,val,fn0_handler);
} else
{var x__5512__auto__ = (((port == null))?null:port);return (function (){var or__4885__auto__ = (cljs.core.async.impl.protocols.put_BANG_[goog.typeOf(x__5512__auto__)]);if(or__4885__auto__)
{return or__4885__auto__;
} else
{var or__4885__auto____$1 = (cljs.core.async.impl.protocols.put_BANG_["_"]);if(or__4885__auto____$1)
{return or__4885__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"WritePort.put!",port);
}
}
})().call(null,port,val,fn0_handler);
}
});
cljs.core.async.impl.protocols.Channel = (function (){var obj18450 = {};return obj18450;
})();
cljs.core.async.impl.protocols.close_BANG_ = (function close_BANG_(chan){if((function (){var and__4873__auto__ = chan;if(and__4873__auto__)
{return chan.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1;
} else
{return and__4873__auto__;
}
})())
{return chan.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(chan);
} else
{var x__5512__auto__ = (((chan == null))?null:chan);return (function (){var or__4885__auto__ = (cljs.core.async.impl.protocols.close_BANG_[goog.typeOf(x__5512__auto__)]);if(or__4885__auto__)
{return or__4885__auto__;
} else
{var or__4885__auto____$1 = (cljs.core.async.impl.protocols.close_BANG_["_"]);if(or__4885__auto____$1)
{return or__4885__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Channel.close!",chan);
}
}
})().call(null,chan);
}
});
cljs.core.async.impl.protocols.Handler = (function (){var obj18452 = {};return obj18452;
})();
cljs.core.async.impl.protocols.active_QMARK_ = (function active_QMARK_(h){if((function (){var and__4873__auto__ = h;if(and__4873__auto__)
{return h.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1;
} else
{return and__4873__auto__;
}
})())
{return h.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(h);
} else
{var x__5512__auto__ = (((h == null))?null:h);return (function (){var or__4885__auto__ = (cljs.core.async.impl.protocols.active_QMARK_[goog.typeOf(x__5512__auto__)]);if(or__4885__auto__)
{return or__4885__auto__;
} else
{var or__4885__auto____$1 = (cljs.core.async.impl.protocols.active_QMARK_["_"]);if(or__4885__auto____$1)
{return or__4885__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Handler.active?",h);
}
}
})().call(null,h);
}
});
cljs.core.async.impl.protocols.commit = (function commit(h){if((function (){var and__4873__auto__ = h;if(and__4873__auto__)
{return h.cljs$core$async$impl$protocols$Handler$commit$arity$1;
} else
{return and__4873__auto__;
}
})())
{return h.cljs$core$async$impl$protocols$Handler$commit$arity$1(h);
} else
{var x__5512__auto__ = (((h == null))?null:h);return (function (){var or__4885__auto__ = (cljs.core.async.impl.protocols.commit[goog.typeOf(x__5512__auto__)]);if(or__4885__auto__)
{return or__4885__auto__;
} else
{var or__4885__auto____$1 = (cljs.core.async.impl.protocols.commit["_"]);if(or__4885__auto____$1)
{return or__4885__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Handler.commit",h);
}
}
})().call(null,h);
}
});
cljs.core.async.impl.protocols.Buffer = (function (){var obj18454 = {};return obj18454;
})();
cljs.core.async.impl.protocols.full_QMARK_ = (function full_QMARK_(b){if((function (){var and__4873__auto__ = b;if(and__4873__auto__)
{return b.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1;
} else
{return and__4873__auto__;
}
})())
{return b.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(b);
} else
{var x__5512__auto__ = (((b == null))?null:b);return (function (){var or__4885__auto__ = (cljs.core.async.impl.protocols.full_QMARK_[goog.typeOf(x__5512__auto__)]);if(or__4885__auto__)
{return or__4885__auto__;
} else
{var or__4885__auto____$1 = (cljs.core.async.impl.protocols.full_QMARK_["_"]);if(or__4885__auto____$1)
{return or__4885__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Buffer.full?",b);
}
}
})().call(null,b);
}
});
cljs.core.async.impl.protocols.remove_BANG_ = (function remove_BANG_(b){if((function (){var and__4873__auto__ = b;if(and__4873__auto__)
{return b.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1;
} else
{return and__4873__auto__;
}
})())
{return b.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(b);
} else
{var x__5512__auto__ = (((b == null))?null:b);return (function (){var or__4885__auto__ = (cljs.core.async.impl.protocols.remove_BANG_[goog.typeOf(x__5512__auto__)]);if(or__4885__auto__)
{return or__4885__auto__;
} else
{var or__4885__auto____$1 = (cljs.core.async.impl.protocols.remove_BANG_["_"]);if(or__4885__auto____$1)
{return or__4885__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Buffer.remove!",b);
}
}
})().call(null,b);
}
});
cljs.core.async.impl.protocols.add_BANG_ = (function add_BANG_(b,itm){if((function (){var and__4873__auto__ = b;if(and__4873__auto__)
{return b.cljs$core$async$impl$protocols$Buffer$add_BANG_$arity$2;
} else
{return and__4873__auto__;
}
})())
{return b.cljs$core$async$impl$protocols$Buffer$add_BANG_$arity$2(b,itm);
} else
{var x__5512__auto__ = (((b == null))?null:b);return (function (){var or__4885__auto__ = (cljs.core.async.impl.protocols.add_BANG_[goog.typeOf(x__5512__auto__)]);if(or__4885__auto__)
{return or__4885__auto__;
} else
{var or__4885__auto____$1 = (cljs.core.async.impl.protocols.add_BANG_["_"]);if(or__4885__auto____$1)
{return or__4885__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Buffer.add!",b);
}
}
})().call(null,b,itm);
}
});
cljs.core.async.impl.protocols.UnblockingBuffer = (function (){var obj18456 = {};return obj18456;
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
var G__18411 = (cnt + 1);
cnt = G__18411;
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
cljs.core.async.impl.buffers.RingBuffer.cljs$lang$ctorPrWriter = (function (this__5452__auto__,writer__5453__auto__,opt__5454__auto__){return cljs.core._write.call(null,writer__5453__auto__,"cljs.core.async.impl.buffers/RingBuffer");
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
var this$ = this;var n__5733__auto__ = self__.length;var x = 0;while(true){
if((x < n__5733__auto__))
{var v_18412 = this$.pop();if(keep_QMARK_.call(null,v_18412))
{this$.unshift(v_18412);
} else
{}
{
var G__18413 = (x + 1);
x = G__18413;
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
cljs.core.async.impl.buffers.FixedBuffer.cljs$lang$ctorPrWriter = (function (this__5452__auto__,writer__5453__auto__,opt__5454__auto__){return cljs.core._write.call(null,writer__5453__auto__,"cljs.core.async.impl.buffers/FixedBuffer");
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
cljs.core.async.impl.buffers.DroppingBuffer.cljs$lang$ctorPrWriter = (function (this__5452__auto__,writer__5453__auto__,opt__5454__auto__){return cljs.core._write.call(null,writer__5453__auto__,"cljs.core.async.impl.buffers/DroppingBuffer");
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
cljs.core.async.impl.buffers.SlidingBuffer.cljs$lang$ctorPrWriter = (function (this__5452__auto__,writer__5453__auto__,opt__5454__auto__){return cljs.core._write.call(null,writer__5453__auto__,"cljs.core.async.impl.buffers/SlidingBuffer");
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
var count_18442 = 0;while(true){
var m_18443 = cljs.core.async.impl.dispatch.tasks.pop();if((m_18443 == null))
{} else
{m_18443.call(null);
if((count_18442 < cljs.core.async.impl.dispatch.TASK_BATCH_SIZE))
{{
var G__18444 = (count_18442 + 1);
count_18442 = G__18444;
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
cljs.core.async.impl.dispatch.queue_dispatcher = (function queue_dispatcher(){if(cljs.core.truth_((function (){var and__4873__auto__ = cljs.core.async.impl.dispatch.queued_QMARK_;if(and__4873__auto__)
{return cljs.core.async.impl.dispatch.running_QMARK_;
} else
{return and__4873__auto__;
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
cljs.core.async.impl.channels.box = (function box(val){if(typeof cljs.core.async.impl.channels.t18417 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.impl.channels.t18417 = (function (val,box,meta18418){
this.val = val;
this.box = box;
this.meta18418 = meta18418;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
cljs.core.async.impl.channels.t18417.cljs$lang$type = true;
cljs.core.async.impl.channels.t18417.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t18417";
cljs.core.async.impl.channels.t18417.cljs$lang$ctorPrWriter = (function (this__5452__auto__,writer__5453__auto__,opt__5454__auto__){return cljs.core._write.call(null,writer__5453__auto__,"cljs.core.async.impl.channels/t18417");
});
cljs.core.async.impl.channels.t18417.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.val;
});
cljs.core.async.impl.channels.t18417.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18419){var self__ = this;
var _18419__$1 = this;return self__.meta18418;
});
cljs.core.async.impl.channels.t18417.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18419,meta18418__$1){var self__ = this;
var _18419__$1 = this;return (new cljs.core.async.impl.channels.t18417(self__.val,self__.box,meta18418__$1));
});
cljs.core.async.impl.channels.__GT_t18417 = (function __GT_t18417(val__$1,box__$1,meta18418){return (new cljs.core.async.impl.channels.t18417(val__$1,box__$1,meta18418));
});
}
return (new cljs.core.async.impl.channels.t18417(val,box,null));
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
cljs.core.async.impl.channels.PutBox.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opts__5457__auto__){return cljs.core._write.call(null,writer__5456__auto__,"cljs.core.async.impl.channels/PutBox");
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
cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorPrWriter = (function (this__5452__auto__,writer__5453__auto__,opt__5454__auto__){return cljs.core._write.call(null,writer__5453__auto__,"cljs.core.async.impl.channels/ManyToManyChannel");
});
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(self__.closed)
{return null;
} else
{self__.closed = true;
while(true){
var taker_18430 = self__.takes.pop();if((taker_18430 == null))
{} else
{if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker_18430))
{var take_cb_18431 = cljs.core.async.impl.protocols.commit.call(null,taker_18430);cljs.core.async.impl.dispatch.run.call(null,((function (take_cb_18431,taker_18430,this$__$1){
return (function (){return take_cb_18431.call(null,null);
});})(take_cb_18431,taker_18430,this$__$1))
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
var G__18477 = (level + 1);
level = G__18477;
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
cljs.core.async.impl.timers.SkipListNode.cljs$lang$ctorPrWriter = (function (this__5452__auto__,writer__5453__auto__,opt__5454__auto__){return cljs.core._write.call(null,writer__5453__auto__,"cljs.core.async.impl.timers/SkipListNode");
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
var skip_list_node__3 = (function (k,v,level){var arr = (new Array((level + 1)));var i_18478 = 0;while(true){
if((i_18478 < arr.length))
{(arr[i_18478] = null);
{
var G__18479 = (i_18478 + 1);
i_18478 = G__18479;
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
var G__18480 = x_SINGLEQUOTE_;
x__$1 = G__18480;
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
var G__18481 = x__$1;
var G__18482 = k;
var G__18483 = (level - 1);
var G__18484 = update;
x = G__18481;
k = G__18482;
level = G__18483;
update = G__18484;
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
cljs.core.async.impl.timers.SkipList.cljs$lang$ctorPrWriter = (function (this__5452__auto__,writer__5453__auto__,opt__5454__auto__){return cljs.core._write.call(null,writer__5453__auto__,"cljs.core.async.impl.timers/SkipList");
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
{var i_18485 = (self__.level + 1);while(true){
if((i_18485 <= (new_level + 1)))
{(update[i_18485] = self__.header);
{
var G__18486 = (i_18485 + 1);
i_18485 = G__18486;
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
{var i_18487 = 0;while(true){
if((i_18487 <= self__.level))
{var links_18488 = (update[i_18487]).forward;if(((links_18488[i_18487]) === x__$1))
{(links_18488[i_18487] = (x__$1.forward[i_18487]));
{
var G__18489 = (i_18487 + 1);
i_18487 = G__18489;
continue;
}
} else
{{
var G__18490 = (i_18487 + 1);
i_18487 = G__18490;
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
var G__18491 = x_SINGLEQUOTE_;
x__$1 = G__18491;
continue;
}
}
}
break;
}
})();if(!((nx == null)))
{{
var G__18492 = nx;
var G__18493 = (level__$1 - 1);
x = G__18492;
level__$1 = G__18493;
continue;
}
} else
{{
var G__18494 = x;
var G__18495 = (level__$1 - 1);
x = G__18494;
level__$1 = G__18495;
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
var G__18496 = x_SINGLEQUOTE_;
x__$1 = G__18496;
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
var G__18497 = nx;
var G__18498 = (level__$1 - 1);
x = G__18497;
level__$1 = G__18498;
continue;
}
} else
{{
var G__18499 = x;
var G__18500 = (level__$1 - 1);
x = G__18499;
level__$1 = G__18500;
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
cljs.core.async.impl.timers.timeout = (function timeout(msecs){var timeout__$1 = ((new Date()).valueOf() + msecs);var me = cljs.core.async.impl.timers.timeouts_map.ceilingEntry(timeout__$1);var or__4885__auto__ = (cljs.core.truth_((function (){var and__4873__auto__ = me;if(cljs.core.truth_(and__4873__auto__))
{return (me.key < (timeout__$1 + cljs.core.async.impl.timers.TIMEOUT_RESOLUTION_MS));
} else
{return and__4873__auto__;
}
})())?me.val:null);if(cljs.core.truth_(or__4885__auto__))
{return or__4885__auto__;
} else
{var timeout_channel = cljs.core.async.impl.channels.chan.call(null,null);cljs.core.async.impl.timers.timeouts_map.put(timeout__$1,timeout_channel);
cljs.core.async.impl.dispatch.queue_delay.call(null,((function (timeout_channel,or__4885__auto__,timeout__$1,me){
return (function (){cljs.core.async.impl.timers.timeouts_map.remove(timeout__$1);
return cljs.core.async.impl.protocols.close_BANG_.call(null,timeout_channel);
});})(timeout_channel,or__4885__auto__,timeout__$1,me))
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
cljs.core.async.impl.ioc_helpers.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.impl.ioc_helpers.t18341 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t18341 = (function (f,fn_handler,meta18342){
this.f = f;
this.fn_handler = fn_handler;
this.meta18342 = meta18342;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.impl.ioc_helpers.t18341.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.t18341.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t18341";
cljs.core.async.impl.ioc_helpers.t18341.cljs$lang$ctorPrWriter = (function (this__5452__auto__,writer__5453__auto__,opt__5454__auto__){return cljs.core._write.call(null,writer__5453__auto__,"cljs.core.async.impl.ioc-helpers/t18341");
});
cljs.core.async.impl.ioc_helpers.t18341.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.impl.ioc_helpers.t18341.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.impl.ioc_helpers.t18341.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.impl.ioc_helpers.t18341.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18343){var self__ = this;
var _18343__$1 = this;return self__.meta18342;
});
cljs.core.async.impl.ioc_helpers.t18341.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18343,meta18342__$1){var self__ = this;
var _18343__$1 = this;return (new cljs.core.async.impl.ioc_helpers.t18341(self__.f,self__.fn_handler,meta18342__$1));
});
cljs.core.async.impl.ioc_helpers.__GT_t18341 = (function __GT_t18341(f__$1,fn_handler__$1,meta18342){return (new cljs.core.async.impl.ioc_helpers.t18341(f__$1,fn_handler__$1,meta18342));
});
}
return (new cljs.core.async.impl.ioc_helpers.t18341(f,fn_handler,null));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function run_state_machine(state){return cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function run_state_machine_wrapped(state){try{return cljs.core.async.impl.ioc_helpers.run_state_machine.call(null,state);
}catch (e18345){if((e18345 instanceof Object))
{var ex = e18345;cljs.core.async.impl.protocols.close_BANG_.call(null,cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.USER_START_IDX));
throw ex;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18345;
} else
{return null;
}
}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function take_BANG_(state,blk,c){var temp__4090__auto__ = cljs.core.async.impl.protocols.take_BANG_.call(null,c,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (x){var statearr_18348_18391 = state;(statearr_18348_18391[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);
(statearr_18348_18391[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
})));if(cljs.core.truth_(temp__4090__auto__))
{var cb = temp__4090__auto__;var statearr_18349_18392 = state;(statearr_18349_18392[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
(statearr_18349_18392[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function put_BANG_(state,blk,c,val){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,c,val,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (){var statearr_18352_18393 = state;(statearr_18352_18393[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = null);
(statearr_18352_18393[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
})));if(cljs.core.truth_(temp__4090__auto__))
{var cb = temp__4090__auto__;var statearr_18353_18394 = state;(statearr_18353_18394[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
(statearr_18353_18394[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__18354){var map__18359 = p__18354;var map__18359__$1 = ((cljs.core.seq_QMARK_.call(null,map__18359))?cljs.core.apply.call(null,cljs.core.hash_map,map__18359):map__18359);var opts = map__18359__$1;var statearr_18360_18395 = state;(statearr_18360_18395[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4092__auto__ = cljs.core.async.do_alts.call(null,((function (map__18359,map__18359__$1,opts){
return (function (val){var statearr_18361_18396 = state;(statearr_18361_18396[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__18359,map__18359__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4092__auto__))
{var cb = temp__4092__auto__;var statearr_18362_18397 = state;(statearr_18362_18397[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__18354 = null;if (arguments.length > 3) {
  p__18354 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__18354);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__18398){
var state = cljs.core.first(arglist__18398);
arglist__18398 = cljs.core.next(arglist__18398);
var cont_block = cljs.core.first(arglist__18398);
arglist__18398 = cljs.core.next(arglist__18398);
var ports = cljs.core.first(arglist__18398);
var p__18354 = cljs.core.rest(arglist__18398);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__18354);
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
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5466__auto__){var self__ = this;
var this__5466__auto____$1 = this;var h__5296__auto__ = self__.__hash;if(!((h__5296__auto__ == null)))
{return h__5296__auto__;
} else
{var h__5296__auto____$1 = cljs.core.hash_imap.call(null,this__5466__auto____$1);self__.__hash = h__5296__auto____$1;
return h__5296__auto____$1;
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5471__auto__,k__5472__auto__){var self__ = this;
var this__5471__auto____$1 = this;return cljs.core._lookup.call(null,this__5471__auto____$1,k__5472__auto__,null);
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5473__auto__,k18364,else__5474__auto__){var self__ = this;
var this__5473__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k18364,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893)))
{return self__.catch_block;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k18364,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687)))
{return self__.catch_exception;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k18364,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429)))
{return self__.finally_block;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k18364,new cljs.core.Keyword(null,"continue-block","continue-block",1486987097)))
{return self__.continue_block;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k18364,new cljs.core.Keyword(null,"prev","prev",1017353637)))
{return self__.prev;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k18364,else__5474__auto__);
} else
{return null;
}
}
}
}
}
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5478__auto__,k__5479__auto__,G__18363){var self__ = this;
var this__5478__auto____$1 = this;var pred__18366 = cljs.core.keyword_identical_QMARK_;var expr__18367 = k__5479__auto__;if(cljs.core.truth_(pred__18366.call(null,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),expr__18367)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__18363,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__18366.call(null,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),expr__18367)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__18363,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__18366.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),expr__18367)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__18363,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__18366.call(null,new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),expr__18367)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__18363,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__18366.call(null,new cljs.core.Keyword(null,"prev","prev",1017353637),expr__18367)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__18363,self__.__meta,self__.__extmap,null));
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5479__auto__,G__18363),null));
}
}
}
}
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5485__auto__,writer__5486__auto__,opts__5487__auto__){var self__ = this;
var this__5485__auto____$1 = this;var pr_pair__5488__auto__ = ((function (this__5485__auto____$1){
return (function (keyval__5489__auto__){return cljs.core.pr_sequential_writer.call(null,writer__5486__auto__,cljs.core.pr_writer,""," ","",opts__5487__auto__,keyval__5489__auto__);
});})(this__5485__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__5486__auto__,pr_pair__5488__auto__,"#cljs.core.async.impl.ioc-helpers.ExceptionFrame{",", ","}",opts__5487__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prev","prev",1017353637),self__.prev],null))], null),self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5476__auto__,entry__5477__auto__){var self__ = this;
var this__5476__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__5477__auto__))
{return cljs.core._assoc.call(null,this__5476__auto____$1,cljs.core._nth.call(null,entry__5477__auto__,0),cljs.core._nth.call(null,entry__5477__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__5476__auto____$1,entry__5477__auto__);
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5483__auto__){var self__ = this;
var this__5483__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prev","prev",1017353637),self__.prev],null))], null),self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5475__auto__){var self__ = this;
var this__5475__auto____$1 = this;return (5 + cljs.core.count.call(null,self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5467__auto__,other__5468__auto__){var self__ = this;
var this__5467__auto____$1 = this;if(cljs.core.truth_((function (){var and__4873__auto__ = other__5468__auto__;if(cljs.core.truth_(and__4873__auto__))
{return ((this__5467__auto____$1.constructor === other__5468__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__5467__auto____$1,other__5468__auto__));
} else
{return and__4873__auto__;
}
})()))
{return true;
} else
{return false;
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5470__auto__,G__18363){var self__ = this;
var this__5470__auto____$1 = this;return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__18363,self__.__extmap,self__.__hash));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5465__auto__){var self__ = this;
var this__5465__auto____$1 = this;return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,self__.__hash));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5469__auto__){var self__ = this;
var this__5469__auto____$1 = this;return self__.__meta;
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5480__auto__,k__5481__auto__){var self__ = this;
var this__5480__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),null,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),null,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),null,new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),null,new cljs.core.Keyword(null,"prev","prev",1017353637),null], null), null),k__5481__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5480__auto____$1),self__.__meta),k__5481__auto__);
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5481__auto__)),null));
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrSeq = (function (this__5505__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrWriter = (function (this__5505__auto__,writer__5506__auto__){return cljs.core._write.call(null,writer__5506__auto__,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});
cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame = (function __GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev));
});
cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function map__GT_ExceptionFrame(G__18365){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(new cljs.core.Keyword(null,"catch-block","catch-block",2343862893).cljs$core$IFn$_invoke$arity$1(G__18365),new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687).cljs$core$IFn$_invoke$arity$1(G__18365),new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(G__18365),new cljs.core.Keyword(null,"continue-block","continue-block",1486987097).cljs$core$IFn$_invoke$arity$1(G__18365),new cljs.core.Keyword(null,"prev","prev",1017353637).cljs$core$IFn$_invoke$arity$1(G__18365),null,cljs.core.dissoc.call(null,G__18365,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),new cljs.core.Keyword(null,"prev","prev",1017353637))));
});
cljs.core.async.impl.ioc_helpers.add_exception_frame = (function add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){var statearr_18370 = state;(statearr_18370[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame.call(null,catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES)));
return statearr_18370;
});
cljs.core.async.impl.ioc_helpers.process_exception = (function process_exception(state){while(true){
var exception_frame = cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES);var catch_block = new cljs.core.Keyword(null,"catch-block","catch-block",2343862893).cljs$core$IFn$_invoke$arity$1(exception_frame);var catch_exception = new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687).cljs$core$IFn$_invoke$arity$1(exception_frame);var exception = cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION);if(cljs.core.truth_((function (){var and__4873__auto__ = exception;if(cljs.core.truth_(and__4873__auto__))
{return cljs.core.not.call(null,exception_frame);
} else
{return and__4873__auto__;
}
})()))
{throw exception;
} else
{if(cljs.core.truth_((function (){var and__4873__auto__ = exception;if(cljs.core.truth_(and__4873__auto__))
{var and__4873__auto____$1 = catch_block;if(cljs.core.truth_(and__4873__auto____$1))
{return (exception instanceof catch_exception);
} else
{return and__4873__auto____$1;
}
} else
{return and__4873__auto__;
}
})()))
{var statearr_18376 = state;(statearr_18376[cljs.core.async.impl.ioc_helpers.STATE_IDX] = catch_block);
(statearr_18376[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = exception);
(statearr_18376[cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION] = null);
(statearr_18376[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),null,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),null));
return statearr_18376;
} else
{if(cljs.core.truth_((function (){var and__4873__auto__ = exception;if(cljs.core.truth_(and__4873__auto__))
{return (cljs.core.not.call(null,catch_block)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else
{return and__4873__auto__;
}
})()))
{var statearr_18377_18399 = state;(statearr_18377_18399[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = new cljs.core.Keyword(null,"prev","prev",1017353637).cljs$core$IFn$_invoke$arity$1(exception_frame));
{
var G__18400 = state;
state = G__18400;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__4873__auto__ = exception;if(cljs.core.truth_(and__4873__auto__))
{var and__4873__auto____$1 = cljs.core.not.call(null,catch_block);if(and__4873__auto____$1)
{return new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__4873__auto____$1;
}
} else
{return and__4873__auto__;
}
})()))
{var statearr_18378 = state;(statearr_18378[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_18378[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),null));
return statearr_18378;
} else
{if(cljs.core.truth_((function (){var and__4873__auto__ = cljs.core.not.call(null,exception);if(and__4873__auto__)
{return new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__4873__auto__;
}
})()))
{var statearr_18379 = state;(statearr_18379[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_18379[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),null));
return statearr_18379;
} else
{if((cljs.core.not.call(null,exception)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame))))
{var statearr_18380 = state;(statearr_18380[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"continue-block","continue-block",1486987097).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_18380[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = new cljs.core.Keyword(null,"prev","prev",1017353637).cljs$core$IFn$_invoke$arity$1(exception_frame));
return statearr_18380;
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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t15777 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15777 = (function (f,fn_handler,meta15778){
this.f = f;
this.fn_handler = fn_handler;
this.meta15778 = meta15778;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15777.cljs$lang$type = true;
cljs.core.async.t15777.cljs$lang$ctorStr = "cljs.core.async/t15777";
cljs.core.async.t15777.cljs$lang$ctorPrWriter = (function (this__5452__auto__,writer__5453__auto__,opt__5454__auto__){return cljs.core._write.call(null,writer__5453__auto__,"cljs.core.async/t15777");
});
cljs.core.async.t15777.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15777.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t15777.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t15777.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15779){var self__ = this;
var _15779__$1 = this;return self__.meta15778;
});
cljs.core.async.t15777.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15779,meta15778__$1){var self__ = this;
var _15779__$1 = this;return (new cljs.core.async.t15777(self__.f,self__.fn_handler,meta15778__$1));
});
cljs.core.async.__GT_t15777 = (function __GT_t15777(f__$1,fn_handler__$1,meta15778){return (new cljs.core.async.t15777(f__$1,fn_handler__$1,meta15778));
});
}
return (new cljs.core.async.t15777(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__15781 = buff;if(G__15781)
{var bit__5535__auto__ = null;if(cljs.core.truth_((function (){var or__4885__auto__ = bit__5535__auto__;if(cljs.core.truth_(or__4885__auto__))
{return or__4885__auto__;
} else
{return G__15781.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__15781.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15781);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15781);
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
{var val_18045 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_18045);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_18045,ret){
return (function (){return fn1.call(null,val_18045);
});})(val_18045,ret))
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__4873__auto__ = ret;if(cljs.core.truth_(and__4873__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__4873__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__5733__auto___18046 = n;var x_18047 = 0;while(true){
if((x_18047 < n__5733__auto___18046))
{(a[x_18047] = 0);
{
var G__18048 = (x_18047 + 1);
x_18047 = G__18048;
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
var G__18049 = (i + 1);
i = G__18049;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t15785 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15785 = (function (flag,alt_flag,meta15786){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta15786 = meta15786;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15785.cljs$lang$type = true;
cljs.core.async.t15785.cljs$lang$ctorStr = "cljs.core.async/t15785";
cljs.core.async.t15785.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5452__auto__,writer__5453__auto__,opt__5454__auto__){return cljs.core._write.call(null,writer__5453__auto__,"cljs.core.async/t15785");
});})(flag))
;
cljs.core.async.t15785.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15785.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t15785.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t15785.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_15787){var self__ = this;
var _15787__$1 = this;return self__.meta15786;
});})(flag))
;
cljs.core.async.t15785.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_15787,meta15786__$1){var self__ = this;
var _15787__$1 = this;return (new cljs.core.async.t15785(self__.flag,self__.alt_flag,meta15786__$1));
});})(flag))
;
cljs.core.async.__GT_t15785 = ((function (flag){
return (function __GT_t15785(flag__$1,alt_flag__$1,meta15786){return (new cljs.core.async.t15785(flag__$1,alt_flag__$1,meta15786));
});})(flag))
;
}
return (new cljs.core.async.t15785(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t15791 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15791 = (function (cb,flag,alt_handler,meta15792){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta15792 = meta15792;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15791.cljs$lang$type = true;
cljs.core.async.t15791.cljs$lang$ctorStr = "cljs.core.async/t15791";
cljs.core.async.t15791.cljs$lang$ctorPrWriter = (function (this__5452__auto__,writer__5453__auto__,opt__5454__auto__){return cljs.core._write.call(null,writer__5453__auto__,"cljs.core.async/t15791");
});
cljs.core.async.t15791.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15791.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t15791.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t15791.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15793){var self__ = this;
var _15793__$1 = this;return self__.meta15792;
});
cljs.core.async.t15791.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15793,meta15792__$1){var self__ = this;
var _15793__$1 = this;return (new cljs.core.async.t15791(self__.cb,self__.flag,self__.alt_handler,meta15792__$1));
});
cljs.core.async.__GT_t15791 = (function __GT_t15791(cb__$1,flag__$1,alt_handler__$1,meta15792){return (new cljs.core.async.t15791(cb__$1,flag__$1,alt_handler__$1,meta15792));
});
}
return (new cljs.core.async.t15791(cb,flag,alt_handler,null));
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
return (function (p1__15794_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15794_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4885__auto__ = wport;if(cljs.core.truth_(or__4885__auto__))
{return or__4885__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__18050 = (i + 1);
i = G__18050;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__4885__auto__ = ret;if(cljs.core.truth_(or__4885__auto__))
{return or__4885__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__4873__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__4873__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__4873__auto__;
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
var alts_BANG___delegate = function (ports,p__15795){var map__15797 = p__15795;var map__15797__$1 = ((cljs.core.seq_QMARK_.call(null,map__15797))?cljs.core.apply.call(null,cljs.core.hash_map,map__15797):map__15797);var opts = map__15797__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__15795 = null;if (arguments.length > 1) {
  p__15795 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__15795);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__18051){
var ports = cljs.core.first(arglist__18051);
var p__15795 = cljs.core.rest(arglist__18051);
return alts_BANG___delegate(ports,p__15795);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t15805 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15805 = (function (ch,f,map_LT_,meta15806){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta15806 = meta15806;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15805.cljs$lang$type = true;
cljs.core.async.t15805.cljs$lang$ctorStr = "cljs.core.async/t15805";
cljs.core.async.t15805.cljs$lang$ctorPrWriter = (function (this__5452__auto__,writer__5453__auto__,opt__5454__auto__){return cljs.core._write.call(null,writer__5453__auto__,"cljs.core.async/t15805");
});
cljs.core.async.t15805.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15805.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t15805.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15805.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t15808 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15808 = (function (fn1,_,meta15806,ch,f,map_LT_,meta15809){
this.fn1 = fn1;
this._ = _;
this.meta15806 = meta15806;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta15809 = meta15809;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15808.cljs$lang$type = true;
cljs.core.async.t15808.cljs$lang$ctorStr = "cljs.core.async/t15808";
cljs.core.async.t15808.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5452__auto__,writer__5453__auto__,opt__5454__auto__){return cljs.core._write.call(null,writer__5453__auto__,"cljs.core.async/t15808");
});})(___$1))
;
cljs.core.async.t15808.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15808.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t15808.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t15808.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__15798_SHARP_){return f1.call(null,(((p1__15798_SHARP_ == null))?null:self__.f.call(null,p1__15798_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t15808.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_15810){var self__ = this;
var _15810__$1 = this;return self__.meta15809;
});})(___$1))
;
cljs.core.async.t15808.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_15810,meta15809__$1){var self__ = this;
var _15810__$1 = this;return (new cljs.core.async.t15808(self__.fn1,self__._,self__.meta15806,self__.ch,self__.f,self__.map_LT_,meta15809__$1));
});})(___$1))
;
cljs.core.async.__GT_t15808 = ((function (___$1){
return (function __GT_t15808(fn1__$1,___$2,meta15806__$1,ch__$2,f__$2,map_LT___$2,meta15809){return (new cljs.core.async.t15808(fn1__$1,___$2,meta15806__$1,ch__$2,f__$2,map_LT___$2,meta15809));
});})(___$1))
;
}
return (new cljs.core.async.t15808(fn1,___$1,self__.meta15806,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__4873__auto__ = ret;if(cljs.core.truth_(and__4873__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__4873__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t15805.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15805.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15805.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15807){var self__ = this;
var _15807__$1 = this;return self__.meta15806;
});
cljs.core.async.t15805.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15807,meta15806__$1){var self__ = this;
var _15807__$1 = this;return (new cljs.core.async.t15805(self__.ch,self__.f,self__.map_LT_,meta15806__$1));
});
cljs.core.async.__GT_t15805 = (function __GT_t15805(ch__$1,f__$1,map_LT___$1,meta15806){return (new cljs.core.async.t15805(ch__$1,f__$1,map_LT___$1,meta15806));
});
}
return (new cljs.core.async.t15805(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t15814 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15814 = (function (ch,f,map_GT_,meta15815){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta15815 = meta15815;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15814.cljs$lang$type = true;
cljs.core.async.t15814.cljs$lang$ctorStr = "cljs.core.async/t15814";
cljs.core.async.t15814.cljs$lang$ctorPrWriter = (function (this__5452__auto__,writer__5453__auto__,opt__5454__auto__){return cljs.core._write.call(null,writer__5453__auto__,"cljs.core.async/t15814");
});
cljs.core.async.t15814.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15814.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t15814.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15814.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t15814.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15814.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15814.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15816){var self__ = this;
var _15816__$1 = this;return self__.meta15815;
});
cljs.core.async.t15814.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15816,meta15815__$1){var self__ = this;
var _15816__$1 = this;return (new cljs.core.async.t15814(self__.ch,self__.f,self__.map_GT_,meta15815__$1));
});
cljs.core.async.__GT_t15814 = (function __GT_t15814(ch__$1,f__$1,map_GT___$1,meta15815){return (new cljs.core.async.t15814(ch__$1,f__$1,map_GT___$1,meta15815));
});
}
return (new cljs.core.async.t15814(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t15820 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15820 = (function (ch,p,filter_GT_,meta15821){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta15821 = meta15821;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15820.cljs$lang$type = true;
cljs.core.async.t15820.cljs$lang$ctorStr = "cljs.core.async/t15820";
cljs.core.async.t15820.cljs$lang$ctorPrWriter = (function (this__5452__auto__,writer__5453__auto__,opt__5454__auto__){return cljs.core._write.call(null,writer__5453__auto__,"cljs.core.async/t15820");
});
cljs.core.async.t15820.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15820.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t15820.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15820.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t15820.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15820.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15820.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15822){var self__ = this;
var _15822__$1 = this;return self__.meta15821;
});
cljs.core.async.t15820.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15822,meta15821__$1){var self__ = this;
var _15822__$1 = this;return (new cljs.core.async.t15820(self__.ch,self__.p,self__.filter_GT_,meta15821__$1));
});
cljs.core.async.__GT_t15820 = (function __GT_t15820(ch__$1,p__$1,filter_GT___$1,meta15821){return (new cljs.core.async.t15820(ch__$1,p__$1,filter_GT___$1,meta15821));
});
}
return (new cljs.core.async.t15820(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13459__auto___18052 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13459__auto___18052,out){
return (function (){var f__13460__auto__ = (function (){var switch__13389__auto__ = ((function (c__13459__auto___18052,out){
return (function (state_15884){var state_val_15885 = (state_15884[1]);if((state_val_15885 === 1))
{var state_15884__$1 = state_15884;var statearr_15886_18053 = state_15884__$1;(statearr_15886_18053[2] = null);
(statearr_15886_18053[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15885 === 2))
{var state_15884__$1 = state_15884;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15884__$1,4,ch);
} else
{if((state_val_15885 === 3))
{var inst_15882 = (state_15884[2]);var state_15884__$1 = state_15884;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15884__$1,inst_15882);
} else
{if((state_val_15885 === 4))
{var inst_15866 = (state_15884[7]);var inst_15866__$1 = (state_15884[2]);var inst_15867 = (inst_15866__$1 == null);var state_15884__$1 = (function (){var statearr_15887 = state_15884;(statearr_15887[7] = inst_15866__$1);
return statearr_15887;
})();if(cljs.core.truth_(inst_15867))
{var statearr_15888_18054 = state_15884__$1;(statearr_15888_18054[1] = 5);
} else
{var statearr_15889_18055 = state_15884__$1;(statearr_15889_18055[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15885 === 5))
{var inst_15869 = cljs.core.async.close_BANG_.call(null,out);var state_15884__$1 = state_15884;var statearr_15890_18056 = state_15884__$1;(statearr_15890_18056[2] = inst_15869);
(statearr_15890_18056[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15885 === 6))
{var inst_15866 = (state_15884[7]);var inst_15871 = p.call(null,inst_15866);var state_15884__$1 = state_15884;if(cljs.core.truth_(inst_15871))
{var statearr_15891_18057 = state_15884__$1;(statearr_15891_18057[1] = 8);
} else
{var statearr_15892_18058 = state_15884__$1;(statearr_15892_18058[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15885 === 7))
{var inst_15880 = (state_15884[2]);var state_15884__$1 = state_15884;var statearr_15893_18059 = state_15884__$1;(statearr_15893_18059[2] = inst_15880);
(statearr_15893_18059[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15885 === 8))
{var inst_15866 = (state_15884[7]);var state_15884__$1 = state_15884;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15884__$1,11,out,inst_15866);
} else
{if((state_val_15885 === 9))
{var state_15884__$1 = state_15884;var statearr_15894_18060 = state_15884__$1;(statearr_15894_18060[2] = null);
(statearr_15894_18060[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15885 === 10))
{var inst_15877 = (state_15884[2]);var state_15884__$1 = (function (){var statearr_15895 = state_15884;(statearr_15895[8] = inst_15877);
return statearr_15895;
})();var statearr_15896_18061 = state_15884__$1;(statearr_15896_18061[2] = null);
(statearr_15896_18061[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15885 === 11))
{var inst_15874 = (state_15884[2]);var state_15884__$1 = state_15884;var statearr_15897_18062 = state_15884__$1;(statearr_15897_18062[2] = inst_15874);
(statearr_15897_18062[1] = 10);
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
});})(c__13459__auto___18052,out))
;return ((function (switch__13389__auto__,c__13459__auto___18052,out){
return (function() {
var state_machine__13390__auto__ = null;
var state_machine__13390__auto____0 = (function (){var statearr_15901 = [null,null,null,null,null,null,null,null,null];(statearr_15901[0] = state_machine__13390__auto__);
(statearr_15901[1] = 1);
return statearr_15901;
});
var state_machine__13390__auto____1 = (function (state_15884){while(true){
var ret_value__13391__auto__ = (function (){try{while(true){
var result__13392__auto__ = switch__13389__auto__.call(null,state_15884);if(cljs.core.keyword_identical_QMARK_.call(null,result__13392__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13392__auto__;
}
break;
}
}catch (e15902){if((e15902 instanceof Object))
{var ex__13393__auto__ = e15902;var statearr_15903_18063 = state_15884;(statearr_15903_18063[5] = ex__13393__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15884);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15902;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13391__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18064 = state_15884;
state_15884 = G__18064;
continue;
}
} else
{return ret_value__13391__auto__;
}
break;
}
});
state_machine__13390__auto__ = function(state_15884){
switch(arguments.length){
case 0:
return state_machine__13390__auto____0.call(this);
case 1:
return state_machine__13390__auto____1.call(this,state_15884);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13390__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13390__auto____0;
state_machine__13390__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13390__auto____1;
return state_machine__13390__auto__;
})()
;})(switch__13389__auto__,c__13459__auto___18052,out))
})();var state__13461__auto__ = (function (){var statearr_15904 = f__13460__auto__.call(null);(statearr_15904[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13459__auto___18052);
return statearr_15904;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13461__auto__);
});})(c__13459__auto___18052,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__13459__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13459__auto__){
return (function (){var f__13460__auto__ = (function (){var switch__13389__auto__ = ((function (c__13459__auto__){
return (function (state_16056){var state_val_16057 = (state_16056[1]);if((state_val_16057 === 1))
{var state_16056__$1 = state_16056;var statearr_16058_18065 = state_16056__$1;(statearr_16058_18065[2] = null);
(statearr_16058_18065[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16057 === 2))
{var state_16056__$1 = state_16056;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16056__$1,4,in$);
} else
{if((state_val_16057 === 3))
{var inst_16054 = (state_16056[2]);var state_16056__$1 = state_16056;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16056__$1,inst_16054);
} else
{if((state_val_16057 === 4))
{var inst_16002 = (state_16056[7]);var inst_16002__$1 = (state_16056[2]);var inst_16003 = (inst_16002__$1 == null);var state_16056__$1 = (function (){var statearr_16059 = state_16056;(statearr_16059[7] = inst_16002__$1);
return statearr_16059;
})();if(cljs.core.truth_(inst_16003))
{var statearr_16060_18066 = state_16056__$1;(statearr_16060_18066[1] = 5);
} else
{var statearr_16061_18067 = state_16056__$1;(statearr_16061_18067[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16057 === 5))
{var inst_16005 = cljs.core.async.close_BANG_.call(null,out);var state_16056__$1 = state_16056;var statearr_16062_18068 = state_16056__$1;(statearr_16062_18068[2] = inst_16005);
(statearr_16062_18068[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16057 === 6))
{var inst_16002 = (state_16056[7]);var inst_16007 = f.call(null,inst_16002);var inst_16012 = cljs.core.seq.call(null,inst_16007);var inst_16013 = inst_16012;var inst_16014 = null;var inst_16015 = 0;var inst_16016 = 0;var state_16056__$1 = (function (){var statearr_16063 = state_16056;(statearr_16063[8] = inst_16015);
(statearr_16063[9] = inst_16016);
(statearr_16063[10] = inst_16013);
(statearr_16063[11] = inst_16014);
return statearr_16063;
})();var statearr_16064_18069 = state_16056__$1;(statearr_16064_18069[2] = null);
(statearr_16064_18069[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16057 === 7))
{var inst_16052 = (state_16056[2]);var state_16056__$1 = state_16056;var statearr_16065_18070 = state_16056__$1;(statearr_16065_18070[2] = inst_16052);
(statearr_16065_18070[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16057 === 8))
{var inst_16015 = (state_16056[8]);var inst_16016 = (state_16056[9]);var inst_16018 = (inst_16016 < inst_16015);var inst_16019 = inst_16018;var state_16056__$1 = state_16056;if(cljs.core.truth_(inst_16019))
{var statearr_16066_18071 = state_16056__$1;(statearr_16066_18071[1] = 10);
} else
{var statearr_16067_18072 = state_16056__$1;(statearr_16067_18072[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16057 === 9))
{var inst_16049 = (state_16056[2]);var state_16056__$1 = (function (){var statearr_16068 = state_16056;(statearr_16068[12] = inst_16049);
return statearr_16068;
})();var statearr_16069_18073 = state_16056__$1;(statearr_16069_18073[2] = null);
(statearr_16069_18073[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16057 === 10))
{var inst_16016 = (state_16056[9]);var inst_16014 = (state_16056[11]);var inst_16021 = cljs.core._nth.call(null,inst_16014,inst_16016);var state_16056__$1 = state_16056;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16056__$1,13,out,inst_16021);
} else
{if((state_val_16057 === 11))
{var inst_16027 = (state_16056[13]);var inst_16013 = (state_16056[10]);var inst_16027__$1 = cljs.core.seq.call(null,inst_16013);var state_16056__$1 = (function (){var statearr_16073 = state_16056;(statearr_16073[13] = inst_16027__$1);
return statearr_16073;
})();if(inst_16027__$1)
{var statearr_16074_18074 = state_16056__$1;(statearr_16074_18074[1] = 14);
} else
{var statearr_16075_18075 = state_16056__$1;(statearr_16075_18075[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16057 === 12))
{var inst_16047 = (state_16056[2]);var state_16056__$1 = state_16056;var statearr_16076_18076 = state_16056__$1;(statearr_16076_18076[2] = inst_16047);
(statearr_16076_18076[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16057 === 13))
{var inst_16015 = (state_16056[8]);var inst_16016 = (state_16056[9]);var inst_16013 = (state_16056[10]);var inst_16014 = (state_16056[11]);var inst_16023 = (state_16056[2]);var inst_16024 = (inst_16016 + 1);var tmp16070 = inst_16015;var tmp16071 = inst_16013;var tmp16072 = inst_16014;var inst_16013__$1 = tmp16071;var inst_16014__$1 = tmp16072;var inst_16015__$1 = tmp16070;var inst_16016__$1 = inst_16024;var state_16056__$1 = (function (){var statearr_16077 = state_16056;(statearr_16077[14] = inst_16023);
(statearr_16077[8] = inst_16015__$1);
(statearr_16077[9] = inst_16016__$1);
(statearr_16077[10] = inst_16013__$1);
(statearr_16077[11] = inst_16014__$1);
return statearr_16077;
})();var statearr_16078_18077 = state_16056__$1;(statearr_16078_18077[2] = null);
(statearr_16078_18077[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16057 === 14))
{var inst_16027 = (state_16056[13]);var inst_16029 = cljs.core.chunked_seq_QMARK_.call(null,inst_16027);var state_16056__$1 = state_16056;if(inst_16029)
{var statearr_16079_18078 = state_16056__$1;(statearr_16079_18078[1] = 17);
} else
{var statearr_16080_18079 = state_16056__$1;(statearr_16080_18079[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16057 === 15))
{var state_16056__$1 = state_16056;var statearr_16081_18080 = state_16056__$1;(statearr_16081_18080[2] = null);
(statearr_16081_18080[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16057 === 16))
{var inst_16045 = (state_16056[2]);var state_16056__$1 = state_16056;var statearr_16082_18081 = state_16056__$1;(statearr_16082_18081[2] = inst_16045);
(statearr_16082_18081[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16057 === 17))
{var inst_16027 = (state_16056[13]);var inst_16031 = cljs.core.chunk_first.call(null,inst_16027);var inst_16032 = cljs.core.chunk_rest.call(null,inst_16027);var inst_16033 = cljs.core.count.call(null,inst_16031);var inst_16013 = inst_16032;var inst_16014 = inst_16031;var inst_16015 = inst_16033;var inst_16016 = 0;var state_16056__$1 = (function (){var statearr_16083 = state_16056;(statearr_16083[8] = inst_16015);
(statearr_16083[9] = inst_16016);
(statearr_16083[10] = inst_16013);
(statearr_16083[11] = inst_16014);
return statearr_16083;
})();var statearr_16084_18082 = state_16056__$1;(statearr_16084_18082[2] = null);
(statearr_16084_18082[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16057 === 18))
{var inst_16027 = (state_16056[13]);var inst_16036 = cljs.core.first.call(null,inst_16027);var state_16056__$1 = state_16056;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16056__$1,20,out,inst_16036);
} else
{if((state_val_16057 === 19))
{var inst_16042 = (state_16056[2]);var state_16056__$1 = state_16056;var statearr_16085_18083 = state_16056__$1;(statearr_16085_18083[2] = inst_16042);
(statearr_16085_18083[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16057 === 20))
{var inst_16027 = (state_16056[13]);var inst_16038 = (state_16056[2]);var inst_16039 = cljs.core.next.call(null,inst_16027);var inst_16013 = inst_16039;var inst_16014 = null;var inst_16015 = 0;var inst_16016 = 0;var state_16056__$1 = (function (){var statearr_16086 = state_16056;(statearr_16086[15] = inst_16038);
(statearr_16086[8] = inst_16015);
(statearr_16086[9] = inst_16016);
(statearr_16086[10] = inst_16013);
(statearr_16086[11] = inst_16014);
return statearr_16086;
})();var statearr_16087_18084 = state_16056__$1;(statearr_16087_18084[2] = null);
(statearr_16087_18084[1] = 8);
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
});})(c__13459__auto__))
;return ((function (switch__13389__auto__,c__13459__auto__){
return (function() {
var state_machine__13390__auto__ = null;
var state_machine__13390__auto____0 = (function (){var statearr_16091 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16091[0] = state_machine__13390__auto__);
(statearr_16091[1] = 1);
return statearr_16091;
});
var state_machine__13390__auto____1 = (function (state_16056){while(true){
var ret_value__13391__auto__ = (function (){try{while(true){
var result__13392__auto__ = switch__13389__auto__.call(null,state_16056);if(cljs.core.keyword_identical_QMARK_.call(null,result__13392__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13392__auto__;
}
break;
}
}catch (e16092){if((e16092 instanceof Object))
{var ex__13393__auto__ = e16092;var statearr_16093_18085 = state_16056;(statearr_16093_18085[5] = ex__13393__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16056);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16092;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13391__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18086 = state_16056;
state_16056 = G__18086;
continue;
}
} else
{return ret_value__13391__auto__;
}
break;
}
});
state_machine__13390__auto__ = function(state_16056){
switch(arguments.length){
case 0:
return state_machine__13390__auto____0.call(this);
case 1:
return state_machine__13390__auto____1.call(this,state_16056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13390__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13390__auto____0;
state_machine__13390__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13390__auto____1;
return state_machine__13390__auto__;
})()
;})(switch__13389__auto__,c__13459__auto__))
})();var state__13461__auto__ = (function (){var statearr_16094 = f__13460__auto__.call(null);(statearr_16094[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13459__auto__);
return statearr_16094;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13461__auto__);
});})(c__13459__auto__))
);
return c__13459__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__13459__auto___18087 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13459__auto___18087){
return (function (){var f__13460__auto__ = (function (){var switch__13389__auto__ = ((function (c__13459__auto___18087){
return (function (state_16154){var state_val_16155 = (state_16154[1]);if((state_val_16155 === 1))
{var state_16154__$1 = state_16154;var statearr_16156_18088 = state_16154__$1;(statearr_16156_18088[2] = null);
(statearr_16156_18088[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16155 === 2))
{var state_16154__$1 = state_16154;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16154__$1,4,from);
} else
{if((state_val_16155 === 3))
{var inst_16152 = (state_16154[2]);var state_16154__$1 = state_16154;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16154__$1,inst_16152);
} else
{if((state_val_16155 === 4))
{var inst_16137 = (state_16154[7]);var inst_16137__$1 = (state_16154[2]);var inst_16138 = (inst_16137__$1 == null);var state_16154__$1 = (function (){var statearr_16157 = state_16154;(statearr_16157[7] = inst_16137__$1);
return statearr_16157;
})();if(cljs.core.truth_(inst_16138))
{var statearr_16158_18089 = state_16154__$1;(statearr_16158_18089[1] = 5);
} else
{var statearr_16159_18090 = state_16154__$1;(statearr_16159_18090[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16155 === 5))
{var state_16154__$1 = state_16154;if(cljs.core.truth_(close_QMARK_))
{var statearr_16160_18091 = state_16154__$1;(statearr_16160_18091[1] = 8);
} else
{var statearr_16161_18092 = state_16154__$1;(statearr_16161_18092[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16155 === 6))
{var inst_16137 = (state_16154[7]);var state_16154__$1 = state_16154;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16154__$1,11,to,inst_16137);
} else
{if((state_val_16155 === 7))
{var inst_16150 = (state_16154[2]);var state_16154__$1 = state_16154;var statearr_16162_18093 = state_16154__$1;(statearr_16162_18093[2] = inst_16150);
(statearr_16162_18093[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16155 === 8))
{var inst_16141 = cljs.core.async.close_BANG_.call(null,to);var state_16154__$1 = state_16154;var statearr_16163_18094 = state_16154__$1;(statearr_16163_18094[2] = inst_16141);
(statearr_16163_18094[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16155 === 9))
{var state_16154__$1 = state_16154;var statearr_16164_18095 = state_16154__$1;(statearr_16164_18095[2] = null);
(statearr_16164_18095[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16155 === 10))
{var inst_16144 = (state_16154[2]);var state_16154__$1 = state_16154;var statearr_16165_18096 = state_16154__$1;(statearr_16165_18096[2] = inst_16144);
(statearr_16165_18096[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16155 === 11))
{var inst_16147 = (state_16154[2]);var state_16154__$1 = (function (){var statearr_16166 = state_16154;(statearr_16166[8] = inst_16147);
return statearr_16166;
})();var statearr_16167_18097 = state_16154__$1;(statearr_16167_18097[2] = null);
(statearr_16167_18097[1] = 2);
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
});})(c__13459__auto___18087))
;return ((function (switch__13389__auto__,c__13459__auto___18087){
return (function() {
var state_machine__13390__auto__ = null;
var state_machine__13390__auto____0 = (function (){var statearr_16171 = [null,null,null,null,null,null,null,null,null];(statearr_16171[0] = state_machine__13390__auto__);
(statearr_16171[1] = 1);
return statearr_16171;
});
var state_machine__13390__auto____1 = (function (state_16154){while(true){
var ret_value__13391__auto__ = (function (){try{while(true){
var result__13392__auto__ = switch__13389__auto__.call(null,state_16154);if(cljs.core.keyword_identical_QMARK_.call(null,result__13392__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13392__auto__;
}
break;
}
}catch (e16172){if((e16172 instanceof Object))
{var ex__13393__auto__ = e16172;var statearr_16173_18098 = state_16154;(statearr_16173_18098[5] = ex__13393__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16154);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16172;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13391__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18099 = state_16154;
state_16154 = G__18099;
continue;
}
} else
{return ret_value__13391__auto__;
}
break;
}
});
state_machine__13390__auto__ = function(state_16154){
switch(arguments.length){
case 0:
return state_machine__13390__auto____0.call(this);
case 1:
return state_machine__13390__auto____1.call(this,state_16154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13390__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13390__auto____0;
state_machine__13390__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13390__auto____1;
return state_machine__13390__auto__;
})()
;})(switch__13389__auto__,c__13459__auto___18087))
})();var state__13461__auto__ = (function (){var statearr_16174 = f__13460__auto__.call(null);(statearr_16174[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13459__auto___18087);
return statearr_16174;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13461__auto__);
});})(c__13459__auto___18087))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__13459__auto___18100 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13459__auto___18100,tc,fc){
return (function (){var f__13460__auto__ = (function (){var switch__13389__auto__ = ((function (c__13459__auto___18100,tc,fc){
return (function (state_16239){var state_val_16240 = (state_16239[1]);if((state_val_16240 === 1))
{var state_16239__$1 = state_16239;var statearr_16241_18101 = state_16239__$1;(statearr_16241_18101[2] = null);
(statearr_16241_18101[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16240 === 2))
{var state_16239__$1 = state_16239;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16239__$1,4,ch);
} else
{if((state_val_16240 === 3))
{var inst_16237 = (state_16239[2]);var state_16239__$1 = state_16239;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16239__$1,inst_16237);
} else
{if((state_val_16240 === 4))
{var inst_16220 = (state_16239[7]);var inst_16220__$1 = (state_16239[2]);var inst_16221 = (inst_16220__$1 == null);var state_16239__$1 = (function (){var statearr_16242 = state_16239;(statearr_16242[7] = inst_16220__$1);
return statearr_16242;
})();if(cljs.core.truth_(inst_16221))
{var statearr_16243_18102 = state_16239__$1;(statearr_16243_18102[1] = 5);
} else
{var statearr_16244_18103 = state_16239__$1;(statearr_16244_18103[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16240 === 5))
{var inst_16223 = cljs.core.async.close_BANG_.call(null,tc);var inst_16224 = cljs.core.async.close_BANG_.call(null,fc);var state_16239__$1 = (function (){var statearr_16245 = state_16239;(statearr_16245[8] = inst_16223);
return statearr_16245;
})();var statearr_16246_18104 = state_16239__$1;(statearr_16246_18104[2] = inst_16224);
(statearr_16246_18104[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16240 === 6))
{var inst_16220 = (state_16239[7]);var inst_16226 = p.call(null,inst_16220);var state_16239__$1 = state_16239;if(cljs.core.truth_(inst_16226))
{var statearr_16247_18105 = state_16239__$1;(statearr_16247_18105[1] = 9);
} else
{var statearr_16248_18106 = state_16239__$1;(statearr_16248_18106[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16240 === 7))
{var inst_16235 = (state_16239[2]);var state_16239__$1 = state_16239;var statearr_16249_18107 = state_16239__$1;(statearr_16249_18107[2] = inst_16235);
(statearr_16249_18107[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16240 === 8))
{var inst_16232 = (state_16239[2]);var state_16239__$1 = (function (){var statearr_16250 = state_16239;(statearr_16250[9] = inst_16232);
return statearr_16250;
})();var statearr_16251_18108 = state_16239__$1;(statearr_16251_18108[2] = null);
(statearr_16251_18108[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16240 === 9))
{var state_16239__$1 = state_16239;var statearr_16252_18109 = state_16239__$1;(statearr_16252_18109[2] = tc);
(statearr_16252_18109[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16240 === 10))
{var state_16239__$1 = state_16239;var statearr_16253_18110 = state_16239__$1;(statearr_16253_18110[2] = fc);
(statearr_16253_18110[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16240 === 11))
{var inst_16220 = (state_16239[7]);var inst_16230 = (state_16239[2]);var state_16239__$1 = state_16239;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16239__$1,8,inst_16230,inst_16220);
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
});})(c__13459__auto___18100,tc,fc))
;return ((function (switch__13389__auto__,c__13459__auto___18100,tc,fc){
return (function() {
var state_machine__13390__auto__ = null;
var state_machine__13390__auto____0 = (function (){var statearr_16257 = [null,null,null,null,null,null,null,null,null,null];(statearr_16257[0] = state_machine__13390__auto__);
(statearr_16257[1] = 1);
return statearr_16257;
});
var state_machine__13390__auto____1 = (function (state_16239){while(true){
var ret_value__13391__auto__ = (function (){try{while(true){
var result__13392__auto__ = switch__13389__auto__.call(null,state_16239);if(cljs.core.keyword_identical_QMARK_.call(null,result__13392__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13392__auto__;
}
break;
}
}catch (e16258){if((e16258 instanceof Object))
{var ex__13393__auto__ = e16258;var statearr_16259_18111 = state_16239;(statearr_16259_18111[5] = ex__13393__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16239);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16258;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13391__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18112 = state_16239;
state_16239 = G__18112;
continue;
}
} else
{return ret_value__13391__auto__;
}
break;
}
});
state_machine__13390__auto__ = function(state_16239){
switch(arguments.length){
case 0:
return state_machine__13390__auto____0.call(this);
case 1:
return state_machine__13390__auto____1.call(this,state_16239);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13390__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13390__auto____0;
state_machine__13390__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13390__auto____1;
return state_machine__13390__auto__;
})()
;})(switch__13389__auto__,c__13459__auto___18100,tc,fc))
})();var state__13461__auto__ = (function (){var statearr_16260 = f__13460__auto__.call(null);(statearr_16260[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13459__auto___18100);
return statearr_16260;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13461__auto__);
});})(c__13459__auto___18100,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__13459__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13459__auto__){
return (function (){var f__13460__auto__ = (function (){var switch__13389__auto__ = ((function (c__13459__auto__){
return (function (state_16307){var state_val_16308 = (state_16307[1]);if((state_val_16308 === 7))
{var inst_16303 = (state_16307[2]);var state_16307__$1 = state_16307;var statearr_16309_18113 = state_16307__$1;(statearr_16309_18113[2] = inst_16303);
(statearr_16309_18113[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16308 === 6))
{var inst_16293 = (state_16307[7]);var inst_16296 = (state_16307[8]);var inst_16300 = f.call(null,inst_16293,inst_16296);var inst_16293__$1 = inst_16300;var state_16307__$1 = (function (){var statearr_16310 = state_16307;(statearr_16310[7] = inst_16293__$1);
return statearr_16310;
})();var statearr_16311_18114 = state_16307__$1;(statearr_16311_18114[2] = null);
(statearr_16311_18114[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16308 === 5))
{var inst_16293 = (state_16307[7]);var state_16307__$1 = state_16307;var statearr_16312_18115 = state_16307__$1;(statearr_16312_18115[2] = inst_16293);
(statearr_16312_18115[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16308 === 4))
{var inst_16296 = (state_16307[8]);var inst_16296__$1 = (state_16307[2]);var inst_16297 = (inst_16296__$1 == null);var state_16307__$1 = (function (){var statearr_16313 = state_16307;(statearr_16313[8] = inst_16296__$1);
return statearr_16313;
})();if(cljs.core.truth_(inst_16297))
{var statearr_16314_18116 = state_16307__$1;(statearr_16314_18116[1] = 5);
} else
{var statearr_16315_18117 = state_16307__$1;(statearr_16315_18117[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16308 === 3))
{var inst_16305 = (state_16307[2]);var state_16307__$1 = state_16307;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16307__$1,inst_16305);
} else
{if((state_val_16308 === 2))
{var state_16307__$1 = state_16307;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16307__$1,4,ch);
} else
{if((state_val_16308 === 1))
{var inst_16293 = init;var state_16307__$1 = (function (){var statearr_16316 = state_16307;(statearr_16316[7] = inst_16293);
return statearr_16316;
})();var statearr_16317_18118 = state_16307__$1;(statearr_16317_18118[2] = null);
(statearr_16317_18118[1] = 2);
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
});})(c__13459__auto__))
;return ((function (switch__13389__auto__,c__13459__auto__){
return (function() {
var state_machine__13390__auto__ = null;
var state_machine__13390__auto____0 = (function (){var statearr_16321 = [null,null,null,null,null,null,null,null,null];(statearr_16321[0] = state_machine__13390__auto__);
(statearr_16321[1] = 1);
return statearr_16321;
});
var state_machine__13390__auto____1 = (function (state_16307){while(true){
var ret_value__13391__auto__ = (function (){try{while(true){
var result__13392__auto__ = switch__13389__auto__.call(null,state_16307);if(cljs.core.keyword_identical_QMARK_.call(null,result__13392__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13392__auto__;
}
break;
}
}catch (e16322){if((e16322 instanceof Object))
{var ex__13393__auto__ = e16322;var statearr_16323_18119 = state_16307;(statearr_16323_18119[5] = ex__13393__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16307);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16322;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13391__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18120 = state_16307;
state_16307 = G__18120;
continue;
}
} else
{return ret_value__13391__auto__;
}
break;
}
});
state_machine__13390__auto__ = function(state_16307){
switch(arguments.length){
case 0:
return state_machine__13390__auto____0.call(this);
case 1:
return state_machine__13390__auto____1.call(this,state_16307);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13390__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13390__auto____0;
state_machine__13390__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13390__auto____1;
return state_machine__13390__auto__;
})()
;})(switch__13389__auto__,c__13459__auto__))
})();var state__13461__auto__ = (function (){var statearr_16324 = f__13460__auto__.call(null);(statearr_16324[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13459__auto__);
return statearr_16324;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13461__auto__);
});})(c__13459__auto__))
);
return c__13459__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__13459__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13459__auto__){
return (function (){var f__13460__auto__ = (function (){var switch__13389__auto__ = ((function (c__13459__auto__){
return (function (state_16386){var state_val_16387 = (state_16386[1]);if((state_val_16387 === 1))
{var inst_16366 = cljs.core.seq.call(null,coll);var inst_16367 = inst_16366;var state_16386__$1 = (function (){var statearr_16388 = state_16386;(statearr_16388[7] = inst_16367);
return statearr_16388;
})();var statearr_16389_18121 = state_16386__$1;(statearr_16389_18121[2] = null);
(statearr_16389_18121[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16387 === 2))
{var inst_16367 = (state_16386[7]);var state_16386__$1 = state_16386;if(cljs.core.truth_(inst_16367))
{var statearr_16390_18122 = state_16386__$1;(statearr_16390_18122[1] = 4);
} else
{var statearr_16391_18123 = state_16386__$1;(statearr_16391_18123[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16387 === 3))
{var inst_16384 = (state_16386[2]);var state_16386__$1 = state_16386;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16386__$1,inst_16384);
} else
{if((state_val_16387 === 4))
{var inst_16367 = (state_16386[7]);var inst_16370 = cljs.core.first.call(null,inst_16367);var state_16386__$1 = state_16386;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16386__$1,7,ch,inst_16370);
} else
{if((state_val_16387 === 5))
{var state_16386__$1 = state_16386;if(cljs.core.truth_(close_QMARK_))
{var statearr_16392_18124 = state_16386__$1;(statearr_16392_18124[1] = 8);
} else
{var statearr_16393_18125 = state_16386__$1;(statearr_16393_18125[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16387 === 6))
{var inst_16382 = (state_16386[2]);var state_16386__$1 = state_16386;var statearr_16394_18126 = state_16386__$1;(statearr_16394_18126[2] = inst_16382);
(statearr_16394_18126[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16387 === 7))
{var inst_16367 = (state_16386[7]);var inst_16372 = (state_16386[2]);var inst_16373 = cljs.core.next.call(null,inst_16367);var inst_16367__$1 = inst_16373;var state_16386__$1 = (function (){var statearr_16395 = state_16386;(statearr_16395[7] = inst_16367__$1);
(statearr_16395[8] = inst_16372);
return statearr_16395;
})();var statearr_16396_18127 = state_16386__$1;(statearr_16396_18127[2] = null);
(statearr_16396_18127[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16387 === 8))
{var inst_16377 = cljs.core.async.close_BANG_.call(null,ch);var state_16386__$1 = state_16386;var statearr_16397_18128 = state_16386__$1;(statearr_16397_18128[2] = inst_16377);
(statearr_16397_18128[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16387 === 9))
{var state_16386__$1 = state_16386;var statearr_16398_18129 = state_16386__$1;(statearr_16398_18129[2] = null);
(statearr_16398_18129[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16387 === 10))
{var inst_16380 = (state_16386[2]);var state_16386__$1 = state_16386;var statearr_16399_18130 = state_16386__$1;(statearr_16399_18130[2] = inst_16380);
(statearr_16399_18130[1] = 6);
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
});})(c__13459__auto__))
;return ((function (switch__13389__auto__,c__13459__auto__){
return (function() {
var state_machine__13390__auto__ = null;
var state_machine__13390__auto____0 = (function (){var statearr_16403 = [null,null,null,null,null,null,null,null,null];(statearr_16403[0] = state_machine__13390__auto__);
(statearr_16403[1] = 1);
return statearr_16403;
});
var state_machine__13390__auto____1 = (function (state_16386){while(true){
var ret_value__13391__auto__ = (function (){try{while(true){
var result__13392__auto__ = switch__13389__auto__.call(null,state_16386);if(cljs.core.keyword_identical_QMARK_.call(null,result__13392__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13392__auto__;
}
break;
}
}catch (e16404){if((e16404 instanceof Object))
{var ex__13393__auto__ = e16404;var statearr_16405_18131 = state_16386;(statearr_16405_18131[5] = ex__13393__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16386);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16404;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13391__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18132 = state_16386;
state_16386 = G__18132;
continue;
}
} else
{return ret_value__13391__auto__;
}
break;
}
});
state_machine__13390__auto__ = function(state_16386){
switch(arguments.length){
case 0:
return state_machine__13390__auto____0.call(this);
case 1:
return state_machine__13390__auto____1.call(this,state_16386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13390__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13390__auto____0;
state_machine__13390__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13390__auto____1;
return state_machine__13390__auto__;
})()
;})(switch__13389__auto__,c__13459__auto__))
})();var state__13461__auto__ = (function (){var statearr_16406 = f__13460__auto__.call(null);(statearr_16406[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13459__auto__);
return statearr_16406;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13461__auto__);
});})(c__13459__auto__))
);
return c__13459__auto__;
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
cljs.core.async.Mux = (function (){var obj16408 = {};return obj16408;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__4873__auto__ = _;if(and__4873__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__4873__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__5512__auto__ = (((_ == null))?null:_);return (function (){var or__4885__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5512__auto__)]);if(or__4885__auto__)
{return or__4885__auto__;
} else
{var or__4885__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__4885__auto____$1)
{return or__4885__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj16410 = {};return obj16410;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__4873__auto__ = m;if(and__4873__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__4873__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__5512__auto__ = (((m == null))?null:m);return (function (){var or__4885__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5512__auto__)]);if(or__4885__auto__)
{return or__4885__auto__;
} else
{var or__4885__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__4885__auto____$1)
{return or__4885__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__4873__auto__ = m;if(and__4873__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__4873__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__5512__auto__ = (((m == null))?null:m);return (function (){var or__4885__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5512__auto__)]);if(or__4885__auto__)
{return or__4885__auto__;
} else
{var or__4885__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__4885__auto____$1)
{return or__4885__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__4873__auto__ = m;if(and__4873__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__4873__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__5512__auto__ = (((m == null))?null:m);return (function (){var or__4885__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5512__auto__)]);if(or__4885__auto__)
{return or__4885__auto__;
} else
{var or__4885__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__4885__auto____$1)
{return or__4885__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t16634 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16634 = (function (cs,ch,mult,meta16635){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta16635 = meta16635;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16634.cljs$lang$type = true;
cljs.core.async.t16634.cljs$lang$ctorStr = "cljs.core.async/t16634";
cljs.core.async.t16634.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5452__auto__,writer__5453__auto__,opt__5454__auto__){return cljs.core._write.call(null,writer__5453__auto__,"cljs.core.async/t16634");
});})(cs))
;
cljs.core.async.t16634.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t16634.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t16634.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t16634.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t16634.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16634.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t16634.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16636){var self__ = this;
var _16636__$1 = this;return self__.meta16635;
});})(cs))
;
cljs.core.async.t16634.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16636,meta16635__$1){var self__ = this;
var _16636__$1 = this;return (new cljs.core.async.t16634(self__.cs,self__.ch,self__.mult,meta16635__$1));
});})(cs))
;
cljs.core.async.__GT_t16634 = ((function (cs){
return (function __GT_t16634(cs__$1,ch__$1,mult__$1,meta16635){return (new cljs.core.async.t16634(cs__$1,ch__$1,mult__$1,meta16635));
});})(cs))
;
}
return (new cljs.core.async.t16634(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__13459__auto___18133 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13459__auto___18133,cs,m,dchan,dctr,done){
return (function (){var f__13460__auto__ = (function (){var switch__13389__auto__ = ((function (c__13459__auto___18133,cs,m,dchan,dctr,done){
return (function (state_16771){var state_val_16772 = (state_16771[1]);if((state_val_16772 === 32))
{var inst_16715 = (state_16771[7]);var inst_16639 = (state_16771[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16771,31,Object,null,30);var inst_16722 = cljs.core.async.put_BANG_.call(null,inst_16715,inst_16639,done);var state_16771__$1 = state_16771;var statearr_16773_18134 = state_16771__$1;(statearr_16773_18134[2] = inst_16722);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16771__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16772 === 1))
{var state_16771__$1 = state_16771;var statearr_16774_18135 = state_16771__$1;(statearr_16774_18135[2] = null);
(statearr_16774_18135[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16772 === 33))
{var inst_16728 = (state_16771[9]);var inst_16730 = cljs.core.chunked_seq_QMARK_.call(null,inst_16728);var state_16771__$1 = state_16771;if(inst_16730)
{var statearr_16775_18136 = state_16771__$1;(statearr_16775_18136[1] = 36);
} else
{var statearr_16776_18137 = state_16771__$1;(statearr_16776_18137[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16772 === 2))
{var state_16771__$1 = state_16771;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16771__$1,4,ch);
} else
{if((state_val_16772 === 34))
{var state_16771__$1 = state_16771;var statearr_16777_18138 = state_16771__$1;(statearr_16777_18138[2] = null);
(statearr_16777_18138[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16772 === 3))
{var inst_16769 = (state_16771[2]);var state_16771__$1 = state_16771;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16771__$1,inst_16769);
} else
{if((state_val_16772 === 35))
{var inst_16753 = (state_16771[2]);var state_16771__$1 = state_16771;var statearr_16778_18139 = state_16771__$1;(statearr_16778_18139[2] = inst_16753);
(statearr_16778_18139[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16772 === 4))
{var inst_16639 = (state_16771[8]);var inst_16639__$1 = (state_16771[2]);var inst_16640 = (inst_16639__$1 == null);var state_16771__$1 = (function (){var statearr_16779 = state_16771;(statearr_16779[8] = inst_16639__$1);
return statearr_16779;
})();if(cljs.core.truth_(inst_16640))
{var statearr_16780_18140 = state_16771__$1;(statearr_16780_18140[1] = 5);
} else
{var statearr_16781_18141 = state_16771__$1;(statearr_16781_18141[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16772 === 36))
{var inst_16728 = (state_16771[9]);var inst_16732 = cljs.core.chunk_first.call(null,inst_16728);var inst_16733 = cljs.core.chunk_rest.call(null,inst_16728);var inst_16734 = cljs.core.count.call(null,inst_16732);var inst_16707 = inst_16733;var inst_16708 = inst_16732;var inst_16709 = inst_16734;var inst_16710 = 0;var state_16771__$1 = (function (){var statearr_16782 = state_16771;(statearr_16782[10] = inst_16710);
(statearr_16782[11] = inst_16708);
(statearr_16782[12] = inst_16707);
(statearr_16782[13] = inst_16709);
return statearr_16782;
})();var statearr_16783_18142 = state_16771__$1;(statearr_16783_18142[2] = null);
(statearr_16783_18142[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16772 === 5))
{var inst_16646 = cljs.core.deref.call(null,cs);var inst_16647 = cljs.core.seq.call(null,inst_16646);var inst_16648 = inst_16647;var inst_16649 = null;var inst_16650 = 0;var inst_16651 = 0;var state_16771__$1 = (function (){var statearr_16784 = state_16771;(statearr_16784[14] = inst_16648);
(statearr_16784[15] = inst_16649);
(statearr_16784[16] = inst_16651);
(statearr_16784[17] = inst_16650);
return statearr_16784;
})();var statearr_16785_18143 = state_16771__$1;(statearr_16785_18143[2] = null);
(statearr_16785_18143[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16772 === 37))
{var inst_16728 = (state_16771[9]);var inst_16737 = cljs.core.first.call(null,inst_16728);var state_16771__$1 = (function (){var statearr_16786 = state_16771;(statearr_16786[18] = inst_16737);
return statearr_16786;
})();var statearr_16787_18144 = state_16771__$1;(statearr_16787_18144[2] = null);
(statearr_16787_18144[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16772 === 6))
{var inst_16699 = (state_16771[19]);var inst_16698 = cljs.core.deref.call(null,cs);var inst_16699__$1 = cljs.core.keys.call(null,inst_16698);var inst_16700 = cljs.core.count.call(null,inst_16699__$1);var inst_16701 = cljs.core.reset_BANG_.call(null,dctr,inst_16700);var inst_16706 = cljs.core.seq.call(null,inst_16699__$1);var inst_16707 = inst_16706;var inst_16708 = null;var inst_16709 = 0;var inst_16710 = 0;var state_16771__$1 = (function (){var statearr_16788 = state_16771;(statearr_16788[10] = inst_16710);
(statearr_16788[20] = inst_16701);
(statearr_16788[19] = inst_16699__$1);
(statearr_16788[11] = inst_16708);
(statearr_16788[12] = inst_16707);
(statearr_16788[13] = inst_16709);
return statearr_16788;
})();var statearr_16789_18145 = state_16771__$1;(statearr_16789_18145[2] = null);
(statearr_16789_18145[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16772 === 38))
{var inst_16750 = (state_16771[2]);var state_16771__$1 = state_16771;var statearr_16790_18146 = state_16771__$1;(statearr_16790_18146[2] = inst_16750);
(statearr_16790_18146[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16772 === 7))
{var inst_16767 = (state_16771[2]);var state_16771__$1 = state_16771;var statearr_16791_18147 = state_16771__$1;(statearr_16791_18147[2] = inst_16767);
(statearr_16791_18147[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16772 === 39))
{var inst_16728 = (state_16771[9]);var inst_16746 = (state_16771[2]);var inst_16747 = cljs.core.next.call(null,inst_16728);var inst_16707 = inst_16747;var inst_16708 = null;var inst_16709 = 0;var inst_16710 = 0;var state_16771__$1 = (function (){var statearr_16792 = state_16771;(statearr_16792[10] = inst_16710);
(statearr_16792[21] = inst_16746);
(statearr_16792[11] = inst_16708);
(statearr_16792[12] = inst_16707);
(statearr_16792[13] = inst_16709);
return statearr_16792;
})();var statearr_16793_18148 = state_16771__$1;(statearr_16793_18148[2] = null);
(statearr_16793_18148[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16772 === 8))
{var inst_16651 = (state_16771[16]);var inst_16650 = (state_16771[17]);var inst_16653 = (inst_16651 < inst_16650);var inst_16654 = inst_16653;var state_16771__$1 = state_16771;if(cljs.core.truth_(inst_16654))
{var statearr_16794_18149 = state_16771__$1;(statearr_16794_18149[1] = 10);
} else
{var statearr_16795_18150 = state_16771__$1;(statearr_16795_18150[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16772 === 40))
{var inst_16737 = (state_16771[18]);var inst_16738 = (state_16771[2]);var inst_16739 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_16740 = cljs.core.async.untap_STAR_.call(null,m,inst_16737);var state_16771__$1 = (function (){var statearr_16796 = state_16771;(statearr_16796[22] = inst_16738);
(statearr_16796[23] = inst_16739);
return statearr_16796;
})();var statearr_16797_18151 = state_16771__$1;(statearr_16797_18151[2] = inst_16740);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16771__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16772 === 9))
{var inst_16696 = (state_16771[2]);var state_16771__$1 = state_16771;var statearr_16798_18152 = state_16771__$1;(statearr_16798_18152[2] = inst_16696);
(statearr_16798_18152[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16772 === 41))
{var inst_16737 = (state_16771[18]);var inst_16639 = (state_16771[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16771,40,Object,null,39);var inst_16744 = cljs.core.async.put_BANG_.call(null,inst_16737,inst_16639,done);var state_16771__$1 = state_16771;var statearr_16799_18153 = state_16771__$1;(statearr_16799_18153[2] = inst_16744);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16771__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16772 === 10))
{var inst_16649 = (state_16771[15]);var inst_16651 = (state_16771[16]);var inst_16657 = cljs.core._nth.call(null,inst_16649,inst_16651);var inst_16658 = cljs.core.nth.call(null,inst_16657,0,null);var inst_16659 = cljs.core.nth.call(null,inst_16657,1,null);var state_16771__$1 = (function (){var statearr_16800 = state_16771;(statearr_16800[24] = inst_16658);
return statearr_16800;
})();if(cljs.core.truth_(inst_16659))
{var statearr_16801_18154 = state_16771__$1;(statearr_16801_18154[1] = 13);
} else
{var statearr_16802_18155 = state_16771__$1;(statearr_16802_18155[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16772 === 42))
{var state_16771__$1 = state_16771;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16771__$1,45,dchan);
} else
{if((state_val_16772 === 11))
{var inst_16668 = (state_16771[25]);var inst_16648 = (state_16771[14]);var inst_16668__$1 = cljs.core.seq.call(null,inst_16648);var state_16771__$1 = (function (){var statearr_16803 = state_16771;(statearr_16803[25] = inst_16668__$1);
return statearr_16803;
})();if(inst_16668__$1)
{var statearr_16804_18156 = state_16771__$1;(statearr_16804_18156[1] = 16);
} else
{var statearr_16805_18157 = state_16771__$1;(statearr_16805_18157[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16772 === 43))
{var state_16771__$1 = state_16771;var statearr_16806_18158 = state_16771__$1;(statearr_16806_18158[2] = null);
(statearr_16806_18158[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16772 === 12))
{var inst_16694 = (state_16771[2]);var state_16771__$1 = state_16771;var statearr_16807_18159 = state_16771__$1;(statearr_16807_18159[2] = inst_16694);
(statearr_16807_18159[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16772 === 44))
{var inst_16764 = (state_16771[2]);var state_16771__$1 = (function (){var statearr_16808 = state_16771;(statearr_16808[26] = inst_16764);
return statearr_16808;
})();var statearr_16809_18160 = state_16771__$1;(statearr_16809_18160[2] = null);
(statearr_16809_18160[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16772 === 13))
{var inst_16658 = (state_16771[24]);var inst_16661 = cljs.core.async.close_BANG_.call(null,inst_16658);var state_16771__$1 = state_16771;var statearr_16810_18161 = state_16771__$1;(statearr_16810_18161[2] = inst_16661);
(statearr_16810_18161[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16772 === 45))
{var inst_16761 = (state_16771[2]);var state_16771__$1 = state_16771;var statearr_16814_18162 = state_16771__$1;(statearr_16814_18162[2] = inst_16761);
(statearr_16814_18162[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16772 === 14))
{var state_16771__$1 = state_16771;var statearr_16815_18163 = state_16771__$1;(statearr_16815_18163[2] = null);
(statearr_16815_18163[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16772 === 15))
{var inst_16648 = (state_16771[14]);var inst_16649 = (state_16771[15]);var inst_16651 = (state_16771[16]);var inst_16650 = (state_16771[17]);var inst_16664 = (state_16771[2]);var inst_16665 = (inst_16651 + 1);var tmp16811 = inst_16648;var tmp16812 = inst_16649;var tmp16813 = inst_16650;var inst_16648__$1 = tmp16811;var inst_16649__$1 = tmp16812;var inst_16650__$1 = tmp16813;var inst_16651__$1 = inst_16665;var state_16771__$1 = (function (){var statearr_16816 = state_16771;(statearr_16816[27] = inst_16664);
(statearr_16816[14] = inst_16648__$1);
(statearr_16816[15] = inst_16649__$1);
(statearr_16816[16] = inst_16651__$1);
(statearr_16816[17] = inst_16650__$1);
return statearr_16816;
})();var statearr_16817_18164 = state_16771__$1;(statearr_16817_18164[2] = null);
(statearr_16817_18164[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16772 === 16))
{var inst_16668 = (state_16771[25]);var inst_16670 = cljs.core.chunked_seq_QMARK_.call(null,inst_16668);var state_16771__$1 = state_16771;if(inst_16670)
{var statearr_16818_18165 = state_16771__$1;(statearr_16818_18165[1] = 19);
} else
{var statearr_16819_18166 = state_16771__$1;(statearr_16819_18166[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16772 === 17))
{var state_16771__$1 = state_16771;var statearr_16820_18167 = state_16771__$1;(statearr_16820_18167[2] = null);
(statearr_16820_18167[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16772 === 18))
{var inst_16692 = (state_16771[2]);var state_16771__$1 = state_16771;var statearr_16821_18168 = state_16771__$1;(statearr_16821_18168[2] = inst_16692);
(statearr_16821_18168[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16772 === 19))
{var inst_16668 = (state_16771[25]);var inst_16672 = cljs.core.chunk_first.call(null,inst_16668);var inst_16673 = cljs.core.chunk_rest.call(null,inst_16668);var inst_16674 = cljs.core.count.call(null,inst_16672);var inst_16648 = inst_16673;var inst_16649 = inst_16672;var inst_16650 = inst_16674;var inst_16651 = 0;var state_16771__$1 = (function (){var statearr_16822 = state_16771;(statearr_16822[14] = inst_16648);
(statearr_16822[15] = inst_16649);
(statearr_16822[16] = inst_16651);
(statearr_16822[17] = inst_16650);
return statearr_16822;
})();var statearr_16823_18169 = state_16771__$1;(statearr_16823_18169[2] = null);
(statearr_16823_18169[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16772 === 20))
{var inst_16668 = (state_16771[25]);var inst_16678 = cljs.core.first.call(null,inst_16668);var inst_16679 = cljs.core.nth.call(null,inst_16678,0,null);var inst_16680 = cljs.core.nth.call(null,inst_16678,1,null);var state_16771__$1 = (function (){var statearr_16824 = state_16771;(statearr_16824[28] = inst_16679);
return statearr_16824;
})();if(cljs.core.truth_(inst_16680))
{var statearr_16825_18170 = state_16771__$1;(statearr_16825_18170[1] = 22);
} else
{var statearr_16826_18171 = state_16771__$1;(statearr_16826_18171[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16772 === 21))
{var inst_16689 = (state_16771[2]);var state_16771__$1 = state_16771;var statearr_16827_18172 = state_16771__$1;(statearr_16827_18172[2] = inst_16689);
(statearr_16827_18172[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16772 === 22))
{var inst_16679 = (state_16771[28]);var inst_16682 = cljs.core.async.close_BANG_.call(null,inst_16679);var state_16771__$1 = state_16771;var statearr_16828_18173 = state_16771__$1;(statearr_16828_18173[2] = inst_16682);
(statearr_16828_18173[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16772 === 23))
{var state_16771__$1 = state_16771;var statearr_16829_18174 = state_16771__$1;(statearr_16829_18174[2] = null);
(statearr_16829_18174[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16772 === 24))
{var inst_16668 = (state_16771[25]);var inst_16685 = (state_16771[2]);var inst_16686 = cljs.core.next.call(null,inst_16668);var inst_16648 = inst_16686;var inst_16649 = null;var inst_16650 = 0;var inst_16651 = 0;var state_16771__$1 = (function (){var statearr_16830 = state_16771;(statearr_16830[29] = inst_16685);
(statearr_16830[14] = inst_16648);
(statearr_16830[15] = inst_16649);
(statearr_16830[16] = inst_16651);
(statearr_16830[17] = inst_16650);
return statearr_16830;
})();var statearr_16831_18175 = state_16771__$1;(statearr_16831_18175[2] = null);
(statearr_16831_18175[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16772 === 25))
{var inst_16710 = (state_16771[10]);var inst_16709 = (state_16771[13]);var inst_16712 = (inst_16710 < inst_16709);var inst_16713 = inst_16712;var state_16771__$1 = state_16771;if(cljs.core.truth_(inst_16713))
{var statearr_16832_18176 = state_16771__$1;(statearr_16832_18176[1] = 27);
} else
{var statearr_16833_18177 = state_16771__$1;(statearr_16833_18177[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16772 === 26))
{var inst_16699 = (state_16771[19]);var inst_16757 = (state_16771[2]);var inst_16758 = cljs.core.seq.call(null,inst_16699);var state_16771__$1 = (function (){var statearr_16834 = state_16771;(statearr_16834[30] = inst_16757);
return statearr_16834;
})();if(inst_16758)
{var statearr_16835_18178 = state_16771__$1;(statearr_16835_18178[1] = 42);
} else
{var statearr_16836_18179 = state_16771__$1;(statearr_16836_18179[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16772 === 27))
{var inst_16710 = (state_16771[10]);var inst_16708 = (state_16771[11]);var inst_16715 = cljs.core._nth.call(null,inst_16708,inst_16710);var state_16771__$1 = (function (){var statearr_16837 = state_16771;(statearr_16837[7] = inst_16715);
return statearr_16837;
})();var statearr_16838_18180 = state_16771__$1;(statearr_16838_18180[2] = null);
(statearr_16838_18180[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16772 === 28))
{var inst_16728 = (state_16771[9]);var inst_16707 = (state_16771[12]);var inst_16728__$1 = cljs.core.seq.call(null,inst_16707);var state_16771__$1 = (function (){var statearr_16842 = state_16771;(statearr_16842[9] = inst_16728__$1);
return statearr_16842;
})();if(inst_16728__$1)
{var statearr_16843_18181 = state_16771__$1;(statearr_16843_18181[1] = 33);
} else
{var statearr_16844_18182 = state_16771__$1;(statearr_16844_18182[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16772 === 29))
{var inst_16755 = (state_16771[2]);var state_16771__$1 = state_16771;var statearr_16845_18183 = state_16771__$1;(statearr_16845_18183[2] = inst_16755);
(statearr_16845_18183[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16772 === 30))
{var inst_16710 = (state_16771[10]);var inst_16708 = (state_16771[11]);var inst_16707 = (state_16771[12]);var inst_16709 = (state_16771[13]);var inst_16724 = (state_16771[2]);var inst_16725 = (inst_16710 + 1);var tmp16839 = inst_16708;var tmp16840 = inst_16707;var tmp16841 = inst_16709;var inst_16707__$1 = tmp16840;var inst_16708__$1 = tmp16839;var inst_16709__$1 = tmp16841;var inst_16710__$1 = inst_16725;var state_16771__$1 = (function (){var statearr_16846 = state_16771;(statearr_16846[10] = inst_16710__$1);
(statearr_16846[11] = inst_16708__$1);
(statearr_16846[12] = inst_16707__$1);
(statearr_16846[13] = inst_16709__$1);
(statearr_16846[31] = inst_16724);
return statearr_16846;
})();var statearr_16847_18184 = state_16771__$1;(statearr_16847_18184[2] = null);
(statearr_16847_18184[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16772 === 31))
{var inst_16715 = (state_16771[7]);var inst_16716 = (state_16771[2]);var inst_16717 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_16718 = cljs.core.async.untap_STAR_.call(null,m,inst_16715);var state_16771__$1 = (function (){var statearr_16848 = state_16771;(statearr_16848[32] = inst_16716);
(statearr_16848[33] = inst_16717);
return statearr_16848;
})();var statearr_16849_18185 = state_16771__$1;(statearr_16849_18185[2] = inst_16718);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16771__$1);
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
});})(c__13459__auto___18133,cs,m,dchan,dctr,done))
;return ((function (switch__13389__auto__,c__13459__auto___18133,cs,m,dchan,dctr,done){
return (function() {
var state_machine__13390__auto__ = null;
var state_machine__13390__auto____0 = (function (){var statearr_16853 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16853[0] = state_machine__13390__auto__);
(statearr_16853[1] = 1);
return statearr_16853;
});
var state_machine__13390__auto____1 = (function (state_16771){while(true){
var ret_value__13391__auto__ = (function (){try{while(true){
var result__13392__auto__ = switch__13389__auto__.call(null,state_16771);if(cljs.core.keyword_identical_QMARK_.call(null,result__13392__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13392__auto__;
}
break;
}
}catch (e16854){if((e16854 instanceof Object))
{var ex__13393__auto__ = e16854;var statearr_16855_18186 = state_16771;(statearr_16855_18186[5] = ex__13393__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16771);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16854;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13391__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18187 = state_16771;
state_16771 = G__18187;
continue;
}
} else
{return ret_value__13391__auto__;
}
break;
}
});
state_machine__13390__auto__ = function(state_16771){
switch(arguments.length){
case 0:
return state_machine__13390__auto____0.call(this);
case 1:
return state_machine__13390__auto____1.call(this,state_16771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13390__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13390__auto____0;
state_machine__13390__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13390__auto____1;
return state_machine__13390__auto__;
})()
;})(switch__13389__auto__,c__13459__auto___18133,cs,m,dchan,dctr,done))
})();var state__13461__auto__ = (function (){var statearr_16856 = f__13460__auto__.call(null);(statearr_16856[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13459__auto___18133);
return statearr_16856;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13461__auto__);
});})(c__13459__auto___18133,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj16858 = {};return obj16858;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__4873__auto__ = m;if(and__4873__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__4873__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__5512__auto__ = (((m == null))?null:m);return (function (){var or__4885__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5512__auto__)]);if(or__4885__auto__)
{return or__4885__auto__;
} else
{var or__4885__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__4885__auto____$1)
{return or__4885__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__4873__auto__ = m;if(and__4873__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__4873__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__5512__auto__ = (((m == null))?null:m);return (function (){var or__4885__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5512__auto__)]);if(or__4885__auto__)
{return or__4885__auto__;
} else
{var or__4885__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__4885__auto____$1)
{return or__4885__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__4873__auto__ = m;if(and__4873__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__4873__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__5512__auto__ = (((m == null))?null:m);return (function (){var or__4885__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5512__auto__)]);if(or__4885__auto__)
{return or__4885__auto__;
} else
{var or__4885__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__4885__auto____$1)
{return or__4885__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__4873__auto__ = m;if(and__4873__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__4873__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__5512__auto__ = (((m == null))?null:m);return (function (){var or__4885__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5512__auto__)]);if(or__4885__auto__)
{return or__4885__auto__;
} else
{var or__4885__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__4885__auto____$1)
{return or__4885__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__4873__auto__ = m;if(and__4873__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__4873__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__5512__auto__ = (((m == null))?null:m);return (function (){var or__4885__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5512__auto__)]);if(or__4885__auto__)
{return or__4885__auto__;
} else
{var or__4885__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__4885__auto____$1)
{return or__4885__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t16968 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16968 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta16969){
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
this.meta16969 = meta16969;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16968.cljs$lang$type = true;
cljs.core.async.t16968.cljs$lang$ctorStr = "cljs.core.async/t16968";
cljs.core.async.t16968.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5452__auto__,writer__5453__auto__,opt__5454__auto__){return cljs.core._write.call(null,writer__5453__auto__,"cljs.core.async/t16968");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16968.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t16968.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16968.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16968.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16968.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16968.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16968.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16968.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16968.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16970){var self__ = this;
var _16970__$1 = this;return self__.meta16969;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16968.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16970,meta16969__$1){var self__ = this;
var _16970__$1 = this;return (new cljs.core.async.t16968(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta16969__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t16968 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t16968(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta16969){return (new cljs.core.async.t16968(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta16969));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t16968(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__13459__auto___18188 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13459__auto___18188,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__13460__auto__ = (function (){var switch__13389__auto__ = ((function (c__13459__auto___18188,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_17035){var state_val_17036 = (state_17035[1]);if((state_val_17036 === 1))
{var inst_16974 = (state_17035[7]);var inst_16974__$1 = calc_state.call(null);var inst_16975 = cljs.core.seq_QMARK_.call(null,inst_16974__$1);var state_17035__$1 = (function (){var statearr_17037 = state_17035;(statearr_17037[7] = inst_16974__$1);
return statearr_17037;
})();if(inst_16975)
{var statearr_17038_18189 = state_17035__$1;(statearr_17038_18189[1] = 2);
} else
{var statearr_17039_18190 = state_17035__$1;(statearr_17039_18190[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17036 === 2))
{var inst_16974 = (state_17035[7]);var inst_16977 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16974);var state_17035__$1 = state_17035;var statearr_17040_18191 = state_17035__$1;(statearr_17040_18191[2] = inst_16977);
(statearr_17040_18191[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17036 === 3))
{var inst_16974 = (state_17035[7]);var state_17035__$1 = state_17035;var statearr_17041_18192 = state_17035__$1;(statearr_17041_18192[2] = inst_16974);
(statearr_17041_18192[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17036 === 4))
{var inst_16974 = (state_17035[7]);var inst_16980 = (state_17035[2]);var inst_16981 = cljs.core.get.call(null,inst_16980,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_16982 = cljs.core.get.call(null,inst_16980,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_16983 = cljs.core.get.call(null,inst_16980,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_16984 = inst_16974;var state_17035__$1 = (function (){var statearr_17042 = state_17035;(statearr_17042[8] = inst_16983);
(statearr_17042[9] = inst_16984);
(statearr_17042[10] = inst_16981);
(statearr_17042[11] = inst_16982);
return statearr_17042;
})();var statearr_17043_18193 = state_17035__$1;(statearr_17043_18193[2] = null);
(statearr_17043_18193[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17036 === 5))
{var inst_16984 = (state_17035[9]);var inst_16987 = cljs.core.seq_QMARK_.call(null,inst_16984);var state_17035__$1 = state_17035;if(inst_16987)
{var statearr_17044_18194 = state_17035__$1;(statearr_17044_18194[1] = 7);
} else
{var statearr_17045_18195 = state_17035__$1;(statearr_17045_18195[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17036 === 6))
{var inst_17033 = (state_17035[2]);var state_17035__$1 = state_17035;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17035__$1,inst_17033);
} else
{if((state_val_17036 === 7))
{var inst_16984 = (state_17035[9]);var inst_16989 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16984);var state_17035__$1 = state_17035;var statearr_17046_18196 = state_17035__$1;(statearr_17046_18196[2] = inst_16989);
(statearr_17046_18196[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17036 === 8))
{var inst_16984 = (state_17035[9]);var state_17035__$1 = state_17035;var statearr_17047_18197 = state_17035__$1;(statearr_17047_18197[2] = inst_16984);
(statearr_17047_18197[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17036 === 9))
{var inst_16992 = (state_17035[12]);var inst_16992__$1 = (state_17035[2]);var inst_16993 = cljs.core.get.call(null,inst_16992__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_16994 = cljs.core.get.call(null,inst_16992__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_16995 = cljs.core.get.call(null,inst_16992__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_17035__$1 = (function (){var statearr_17048 = state_17035;(statearr_17048[13] = inst_16994);
(statearr_17048[14] = inst_16995);
(statearr_17048[12] = inst_16992__$1);
return statearr_17048;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_17035__$1,10,inst_16993);
} else
{if((state_val_17036 === 10))
{var inst_16999 = (state_17035[15]);var inst_17000 = (state_17035[16]);var inst_16998 = (state_17035[2]);var inst_16999__$1 = cljs.core.nth.call(null,inst_16998,0,null);var inst_17000__$1 = cljs.core.nth.call(null,inst_16998,1,null);var inst_17001 = (inst_16999__$1 == null);var inst_17002 = cljs.core._EQ_.call(null,inst_17000__$1,change);var inst_17003 = (inst_17001) || (inst_17002);var state_17035__$1 = (function (){var statearr_17049 = state_17035;(statearr_17049[15] = inst_16999__$1);
(statearr_17049[16] = inst_17000__$1);
return statearr_17049;
})();if(cljs.core.truth_(inst_17003))
{var statearr_17050_18198 = state_17035__$1;(statearr_17050_18198[1] = 11);
} else
{var statearr_17051_18199 = state_17035__$1;(statearr_17051_18199[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17036 === 11))
{var inst_16999 = (state_17035[15]);var inst_17005 = (inst_16999 == null);var state_17035__$1 = state_17035;if(cljs.core.truth_(inst_17005))
{var statearr_17052_18200 = state_17035__$1;(statearr_17052_18200[1] = 14);
} else
{var statearr_17053_18201 = state_17035__$1;(statearr_17053_18201[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17036 === 12))
{var inst_16995 = (state_17035[14]);var inst_17000 = (state_17035[16]);var inst_17014 = (state_17035[17]);var inst_17014__$1 = inst_16995.call(null,inst_17000);var state_17035__$1 = (function (){var statearr_17054 = state_17035;(statearr_17054[17] = inst_17014__$1);
return statearr_17054;
})();if(cljs.core.truth_(inst_17014__$1))
{var statearr_17055_18202 = state_17035__$1;(statearr_17055_18202[1] = 17);
} else
{var statearr_17056_18203 = state_17035__$1;(statearr_17056_18203[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17036 === 13))
{var inst_17031 = (state_17035[2]);var state_17035__$1 = state_17035;var statearr_17057_18204 = state_17035__$1;(statearr_17057_18204[2] = inst_17031);
(statearr_17057_18204[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17036 === 14))
{var inst_17000 = (state_17035[16]);var inst_17007 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_17000);var state_17035__$1 = state_17035;var statearr_17058_18205 = state_17035__$1;(statearr_17058_18205[2] = inst_17007);
(statearr_17058_18205[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17036 === 15))
{var state_17035__$1 = state_17035;var statearr_17059_18206 = state_17035__$1;(statearr_17059_18206[2] = null);
(statearr_17059_18206[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17036 === 16))
{var inst_17010 = (state_17035[2]);var inst_17011 = calc_state.call(null);var inst_16984 = inst_17011;var state_17035__$1 = (function (){var statearr_17060 = state_17035;(statearr_17060[9] = inst_16984);
(statearr_17060[18] = inst_17010);
return statearr_17060;
})();var statearr_17061_18207 = state_17035__$1;(statearr_17061_18207[2] = null);
(statearr_17061_18207[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17036 === 17))
{var inst_17014 = (state_17035[17]);var state_17035__$1 = state_17035;var statearr_17062_18208 = state_17035__$1;(statearr_17062_18208[2] = inst_17014);
(statearr_17062_18208[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17036 === 18))
{var inst_16994 = (state_17035[13]);var inst_16995 = (state_17035[14]);var inst_17000 = (state_17035[16]);var inst_17017 = cljs.core.empty_QMARK_.call(null,inst_16995);var inst_17018 = inst_16994.call(null,inst_17000);var inst_17019 = cljs.core.not.call(null,inst_17018);var inst_17020 = (inst_17017) && (inst_17019);var state_17035__$1 = state_17035;var statearr_17063_18209 = state_17035__$1;(statearr_17063_18209[2] = inst_17020);
(statearr_17063_18209[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17036 === 19))
{var inst_17022 = (state_17035[2]);var state_17035__$1 = state_17035;if(cljs.core.truth_(inst_17022))
{var statearr_17064_18210 = state_17035__$1;(statearr_17064_18210[1] = 20);
} else
{var statearr_17065_18211 = state_17035__$1;(statearr_17065_18211[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17036 === 20))
{var inst_16999 = (state_17035[15]);var state_17035__$1 = state_17035;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17035__$1,23,out,inst_16999);
} else
{if((state_val_17036 === 21))
{var state_17035__$1 = state_17035;var statearr_17066_18212 = state_17035__$1;(statearr_17066_18212[2] = null);
(statearr_17066_18212[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17036 === 22))
{var inst_16992 = (state_17035[12]);var inst_17028 = (state_17035[2]);var inst_16984 = inst_16992;var state_17035__$1 = (function (){var statearr_17067 = state_17035;(statearr_17067[9] = inst_16984);
(statearr_17067[19] = inst_17028);
return statearr_17067;
})();var statearr_17068_18213 = state_17035__$1;(statearr_17068_18213[2] = null);
(statearr_17068_18213[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17036 === 23))
{var inst_17025 = (state_17035[2]);var state_17035__$1 = state_17035;var statearr_17069_18214 = state_17035__$1;(statearr_17069_18214[2] = inst_17025);
(statearr_17069_18214[1] = 22);
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
});})(c__13459__auto___18188,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__13389__auto__,c__13459__auto___18188,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__13390__auto__ = null;
var state_machine__13390__auto____0 = (function (){var statearr_17073 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17073[0] = state_machine__13390__auto__);
(statearr_17073[1] = 1);
return statearr_17073;
});
var state_machine__13390__auto____1 = (function (state_17035){while(true){
var ret_value__13391__auto__ = (function (){try{while(true){
var result__13392__auto__ = switch__13389__auto__.call(null,state_17035);if(cljs.core.keyword_identical_QMARK_.call(null,result__13392__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13392__auto__;
}
break;
}
}catch (e17074){if((e17074 instanceof Object))
{var ex__13393__auto__ = e17074;var statearr_17075_18215 = state_17035;(statearr_17075_18215[5] = ex__13393__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17035);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17074;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13391__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18216 = state_17035;
state_17035 = G__18216;
continue;
}
} else
{return ret_value__13391__auto__;
}
break;
}
});
state_machine__13390__auto__ = function(state_17035){
switch(arguments.length){
case 0:
return state_machine__13390__auto____0.call(this);
case 1:
return state_machine__13390__auto____1.call(this,state_17035);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13390__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13390__auto____0;
state_machine__13390__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13390__auto____1;
return state_machine__13390__auto__;
})()
;})(switch__13389__auto__,c__13459__auto___18188,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__13461__auto__ = (function (){var statearr_17076 = f__13460__auto__.call(null);(statearr_17076[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13459__auto___18188);
return statearr_17076;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13461__auto__);
});})(c__13459__auto___18188,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj17078 = {};return obj17078;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__4873__auto__ = p;if(and__4873__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__4873__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__5512__auto__ = (((p == null))?null:p);return (function (){var or__4885__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5512__auto__)]);if(or__4885__auto__)
{return or__4885__auto__;
} else
{var or__4885__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__4885__auto____$1)
{return or__4885__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__4873__auto__ = p;if(and__4873__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__4873__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__5512__auto__ = (((p == null))?null:p);return (function (){var or__4885__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5512__auto__)]);if(or__4885__auto__)
{return or__4885__auto__;
} else
{var or__4885__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__4885__auto____$1)
{return or__4885__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__4873__auto__ = p;if(and__4873__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__4873__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__5512__auto__ = (((p == null))?null:p);return (function (){var or__4885__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5512__auto__)]);if(or__4885__auto__)
{return or__4885__auto__;
} else
{var or__4885__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__4885__auto____$1)
{return or__4885__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__4873__auto__ = p;if(and__4873__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__4873__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__5512__auto__ = (((p == null))?null:p);return (function (){var or__4885__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5512__auto__)]);if(or__4885__auto__)
{return or__4885__auto__;
} else
{var or__4885__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__4885__auto____$1)
{return or__4885__auto____$1;
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
return (function (topic){var or__4885__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__4885__auto__))
{return or__4885__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4885__auto__,mults){
return (function (p1__17079_SHARP_){if(cljs.core.truth_(p1__17079_SHARP_.call(null,topic)))
{return p1__17079_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__17079_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4885__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t17204 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17204 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta17205){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta17205 = meta17205;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17204.cljs$lang$type = true;
cljs.core.async.t17204.cljs$lang$ctorStr = "cljs.core.async/t17204";
cljs.core.async.t17204.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5452__auto__,writer__5453__auto__,opt__5454__auto__){return cljs.core._write.call(null,writer__5453__auto__,"cljs.core.async/t17204");
});})(mults,ensure_mult))
;
cljs.core.async.t17204.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t17204.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t17204.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t17204.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t17204.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t17204.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t17204.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t17204.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_17206){var self__ = this;
var _17206__$1 = this;return self__.meta17205;
});})(mults,ensure_mult))
;
cljs.core.async.t17204.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_17206,meta17205__$1){var self__ = this;
var _17206__$1 = this;return (new cljs.core.async.t17204(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta17205__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t17204 = ((function (mults,ensure_mult){
return (function __GT_t17204(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta17205){return (new cljs.core.async.t17204(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta17205));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t17204(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__13459__auto___18217 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13459__auto___18217,mults,ensure_mult,p){
return (function (){var f__13460__auto__ = (function (){var switch__13389__auto__ = ((function (c__13459__auto___18217,mults,ensure_mult,p){
return (function (state_17280){var state_val_17281 = (state_17280[1]);if((state_val_17281 === 1))
{var state_17280__$1 = state_17280;var statearr_17282_18218 = state_17280__$1;(statearr_17282_18218[2] = null);
(statearr_17282_18218[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17281 === 2))
{var state_17280__$1 = state_17280;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17280__$1,4,ch);
} else
{if((state_val_17281 === 3))
{var inst_17278 = (state_17280[2]);var state_17280__$1 = state_17280;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17280__$1,inst_17278);
} else
{if((state_val_17281 === 4))
{var inst_17209 = (state_17280[7]);var inst_17209__$1 = (state_17280[2]);var inst_17210 = (inst_17209__$1 == null);var state_17280__$1 = (function (){var statearr_17283 = state_17280;(statearr_17283[7] = inst_17209__$1);
return statearr_17283;
})();if(cljs.core.truth_(inst_17210))
{var statearr_17284_18219 = state_17280__$1;(statearr_17284_18219[1] = 5);
} else
{var statearr_17285_18220 = state_17280__$1;(statearr_17285_18220[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17281 === 5))
{var inst_17216 = cljs.core.deref.call(null,mults);var inst_17217 = cljs.core.vals.call(null,inst_17216);var inst_17218 = cljs.core.seq.call(null,inst_17217);var inst_17219 = inst_17218;var inst_17220 = null;var inst_17221 = 0;var inst_17222 = 0;var state_17280__$1 = (function (){var statearr_17286 = state_17280;(statearr_17286[8] = inst_17219);
(statearr_17286[9] = inst_17220);
(statearr_17286[10] = inst_17222);
(statearr_17286[11] = inst_17221);
return statearr_17286;
})();var statearr_17287_18221 = state_17280__$1;(statearr_17287_18221[2] = null);
(statearr_17287_18221[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17281 === 6))
{var inst_17259 = (state_17280[12]);var inst_17257 = (state_17280[13]);var inst_17209 = (state_17280[7]);var inst_17257__$1 = topic_fn.call(null,inst_17209);var inst_17258 = cljs.core.deref.call(null,mults);var inst_17259__$1 = cljs.core.get.call(null,inst_17258,inst_17257__$1);var state_17280__$1 = (function (){var statearr_17288 = state_17280;(statearr_17288[12] = inst_17259__$1);
(statearr_17288[13] = inst_17257__$1);
return statearr_17288;
})();if(cljs.core.truth_(inst_17259__$1))
{var statearr_17289_18222 = state_17280__$1;(statearr_17289_18222[1] = 19);
} else
{var statearr_17290_18223 = state_17280__$1;(statearr_17290_18223[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17281 === 7))
{var inst_17276 = (state_17280[2]);var state_17280__$1 = state_17280;var statearr_17291_18224 = state_17280__$1;(statearr_17291_18224[2] = inst_17276);
(statearr_17291_18224[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17281 === 8))
{var inst_17222 = (state_17280[10]);var inst_17221 = (state_17280[11]);var inst_17224 = (inst_17222 < inst_17221);var inst_17225 = inst_17224;var state_17280__$1 = state_17280;if(cljs.core.truth_(inst_17225))
{var statearr_17295_18225 = state_17280__$1;(statearr_17295_18225[1] = 10);
} else
{var statearr_17296_18226 = state_17280__$1;(statearr_17296_18226[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17281 === 9))
{var inst_17255 = (state_17280[2]);var state_17280__$1 = state_17280;var statearr_17297_18227 = state_17280__$1;(statearr_17297_18227[2] = inst_17255);
(statearr_17297_18227[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17281 === 10))
{var inst_17219 = (state_17280[8]);var inst_17220 = (state_17280[9]);var inst_17222 = (state_17280[10]);var inst_17221 = (state_17280[11]);var inst_17227 = cljs.core._nth.call(null,inst_17220,inst_17222);var inst_17228 = cljs.core.async.muxch_STAR_.call(null,inst_17227);var inst_17229 = cljs.core.async.close_BANG_.call(null,inst_17228);var inst_17230 = (inst_17222 + 1);var tmp17292 = inst_17219;var tmp17293 = inst_17220;var tmp17294 = inst_17221;var inst_17219__$1 = tmp17292;var inst_17220__$1 = tmp17293;var inst_17221__$1 = tmp17294;var inst_17222__$1 = inst_17230;var state_17280__$1 = (function (){var statearr_17298 = state_17280;(statearr_17298[14] = inst_17229);
(statearr_17298[8] = inst_17219__$1);
(statearr_17298[9] = inst_17220__$1);
(statearr_17298[10] = inst_17222__$1);
(statearr_17298[11] = inst_17221__$1);
return statearr_17298;
})();var statearr_17299_18228 = state_17280__$1;(statearr_17299_18228[2] = null);
(statearr_17299_18228[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17281 === 11))
{var inst_17233 = (state_17280[15]);var inst_17219 = (state_17280[8]);var inst_17233__$1 = cljs.core.seq.call(null,inst_17219);var state_17280__$1 = (function (){var statearr_17300 = state_17280;(statearr_17300[15] = inst_17233__$1);
return statearr_17300;
})();if(inst_17233__$1)
{var statearr_17301_18229 = state_17280__$1;(statearr_17301_18229[1] = 13);
} else
{var statearr_17302_18230 = state_17280__$1;(statearr_17302_18230[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17281 === 12))
{var inst_17253 = (state_17280[2]);var state_17280__$1 = state_17280;var statearr_17303_18231 = state_17280__$1;(statearr_17303_18231[2] = inst_17253);
(statearr_17303_18231[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17281 === 13))
{var inst_17233 = (state_17280[15]);var inst_17235 = cljs.core.chunked_seq_QMARK_.call(null,inst_17233);var state_17280__$1 = state_17280;if(inst_17235)
{var statearr_17304_18232 = state_17280__$1;(statearr_17304_18232[1] = 16);
} else
{var statearr_17305_18233 = state_17280__$1;(statearr_17305_18233[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17281 === 14))
{var state_17280__$1 = state_17280;var statearr_17306_18234 = state_17280__$1;(statearr_17306_18234[2] = null);
(statearr_17306_18234[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17281 === 15))
{var inst_17251 = (state_17280[2]);var state_17280__$1 = state_17280;var statearr_17307_18235 = state_17280__$1;(statearr_17307_18235[2] = inst_17251);
(statearr_17307_18235[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17281 === 16))
{var inst_17233 = (state_17280[15]);var inst_17237 = cljs.core.chunk_first.call(null,inst_17233);var inst_17238 = cljs.core.chunk_rest.call(null,inst_17233);var inst_17239 = cljs.core.count.call(null,inst_17237);var inst_17219 = inst_17238;var inst_17220 = inst_17237;var inst_17221 = inst_17239;var inst_17222 = 0;var state_17280__$1 = (function (){var statearr_17308 = state_17280;(statearr_17308[8] = inst_17219);
(statearr_17308[9] = inst_17220);
(statearr_17308[10] = inst_17222);
(statearr_17308[11] = inst_17221);
return statearr_17308;
})();var statearr_17309_18236 = state_17280__$1;(statearr_17309_18236[2] = null);
(statearr_17309_18236[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17281 === 17))
{var inst_17233 = (state_17280[15]);var inst_17242 = cljs.core.first.call(null,inst_17233);var inst_17243 = cljs.core.async.muxch_STAR_.call(null,inst_17242);var inst_17244 = cljs.core.async.close_BANG_.call(null,inst_17243);var inst_17245 = cljs.core.next.call(null,inst_17233);var inst_17219 = inst_17245;var inst_17220 = null;var inst_17221 = 0;var inst_17222 = 0;var state_17280__$1 = (function (){var statearr_17310 = state_17280;(statearr_17310[16] = inst_17244);
(statearr_17310[8] = inst_17219);
(statearr_17310[9] = inst_17220);
(statearr_17310[10] = inst_17222);
(statearr_17310[11] = inst_17221);
return statearr_17310;
})();var statearr_17311_18237 = state_17280__$1;(statearr_17311_18237[2] = null);
(statearr_17311_18237[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17281 === 18))
{var inst_17248 = (state_17280[2]);var state_17280__$1 = state_17280;var statearr_17312_18238 = state_17280__$1;(statearr_17312_18238[2] = inst_17248);
(statearr_17312_18238[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17281 === 19))
{var state_17280__$1 = state_17280;var statearr_17313_18239 = state_17280__$1;(statearr_17313_18239[2] = null);
(statearr_17313_18239[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17281 === 20))
{var state_17280__$1 = state_17280;var statearr_17314_18240 = state_17280__$1;(statearr_17314_18240[2] = null);
(statearr_17314_18240[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17281 === 21))
{var inst_17273 = (state_17280[2]);var state_17280__$1 = (function (){var statearr_17315 = state_17280;(statearr_17315[17] = inst_17273);
return statearr_17315;
})();var statearr_17316_18241 = state_17280__$1;(statearr_17316_18241[2] = null);
(statearr_17316_18241[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17281 === 22))
{var inst_17270 = (state_17280[2]);var state_17280__$1 = state_17280;var statearr_17317_18242 = state_17280__$1;(statearr_17317_18242[2] = inst_17270);
(statearr_17317_18242[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17281 === 23))
{var inst_17257 = (state_17280[13]);var inst_17261 = (state_17280[2]);var inst_17262 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_17257);var state_17280__$1 = (function (){var statearr_17318 = state_17280;(statearr_17318[18] = inst_17261);
return statearr_17318;
})();var statearr_17319_18243 = state_17280__$1;(statearr_17319_18243[2] = inst_17262);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17280__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17281 === 24))
{var inst_17259 = (state_17280[12]);var inst_17209 = (state_17280[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17280,23,Object,null,22);var inst_17266 = cljs.core.async.muxch_STAR_.call(null,inst_17259);var state_17280__$1 = state_17280;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17280__$1,25,inst_17266,inst_17209);
} else
{if((state_val_17281 === 25))
{var inst_17268 = (state_17280[2]);var state_17280__$1 = state_17280;var statearr_17320_18244 = state_17280__$1;(statearr_17320_18244[2] = inst_17268);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17280__$1);
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
});})(c__13459__auto___18217,mults,ensure_mult,p))
;return ((function (switch__13389__auto__,c__13459__auto___18217,mults,ensure_mult,p){
return (function() {
var state_machine__13390__auto__ = null;
var state_machine__13390__auto____0 = (function (){var statearr_17324 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17324[0] = state_machine__13390__auto__);
(statearr_17324[1] = 1);
return statearr_17324;
});
var state_machine__13390__auto____1 = (function (state_17280){while(true){
var ret_value__13391__auto__ = (function (){try{while(true){
var result__13392__auto__ = switch__13389__auto__.call(null,state_17280);if(cljs.core.keyword_identical_QMARK_.call(null,result__13392__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13392__auto__;
}
break;
}
}catch (e17325){if((e17325 instanceof Object))
{var ex__13393__auto__ = e17325;var statearr_17326_18245 = state_17280;(statearr_17326_18245[5] = ex__13393__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17280);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17325;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13391__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18246 = state_17280;
state_17280 = G__18246;
continue;
}
} else
{return ret_value__13391__auto__;
}
break;
}
});
state_machine__13390__auto__ = function(state_17280){
switch(arguments.length){
case 0:
return state_machine__13390__auto____0.call(this);
case 1:
return state_machine__13390__auto____1.call(this,state_17280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13390__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13390__auto____0;
state_machine__13390__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13390__auto____1;
return state_machine__13390__auto__;
})()
;})(switch__13389__auto__,c__13459__auto___18217,mults,ensure_mult,p))
})();var state__13461__auto__ = (function (){var statearr_17327 = f__13460__auto__.call(null);(statearr_17327[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13459__auto___18217);
return statearr_17327;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13461__auto__);
});})(c__13459__auto___18217,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__13459__auto___18247 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13459__auto___18247,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__13460__auto__ = (function (){var switch__13389__auto__ = ((function (c__13459__auto___18247,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_17434){var state_val_17435 = (state_17434[1]);if((state_val_17435 === 1))
{var state_17434__$1 = state_17434;var statearr_17436_18248 = state_17434__$1;(statearr_17436_18248[2] = null);
(statearr_17436_18248[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17435 === 2))
{var inst_17397 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_17398 = 0;var state_17434__$1 = (function (){var statearr_17437 = state_17434;(statearr_17437[7] = inst_17398);
(statearr_17437[8] = inst_17397);
return statearr_17437;
})();var statearr_17438_18249 = state_17434__$1;(statearr_17438_18249[2] = null);
(statearr_17438_18249[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17435 === 3))
{var inst_17432 = (state_17434[2]);var state_17434__$1 = state_17434;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17434__$1,inst_17432);
} else
{if((state_val_17435 === 4))
{var inst_17398 = (state_17434[7]);var inst_17400 = (inst_17398 < cnt);var state_17434__$1 = state_17434;if(cljs.core.truth_(inst_17400))
{var statearr_17439_18250 = state_17434__$1;(statearr_17439_18250[1] = 6);
} else
{var statearr_17440_18251 = state_17434__$1;(statearr_17440_18251[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17435 === 5))
{var inst_17418 = (state_17434[2]);var state_17434__$1 = (function (){var statearr_17441 = state_17434;(statearr_17441[9] = inst_17418);
return statearr_17441;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17434__$1,12,dchan);
} else
{if((state_val_17435 === 6))
{var state_17434__$1 = state_17434;var statearr_17442_18252 = state_17434__$1;(statearr_17442_18252[2] = null);
(statearr_17442_18252[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17435 === 7))
{var state_17434__$1 = state_17434;var statearr_17443_18253 = state_17434__$1;(statearr_17443_18253[2] = null);
(statearr_17443_18253[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17435 === 8))
{var inst_17416 = (state_17434[2]);var state_17434__$1 = state_17434;var statearr_17444_18254 = state_17434__$1;(statearr_17444_18254[2] = inst_17416);
(statearr_17444_18254[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17435 === 9))
{var inst_17398 = (state_17434[7]);var inst_17411 = (state_17434[2]);var inst_17412 = (inst_17398 + 1);var inst_17398__$1 = inst_17412;var state_17434__$1 = (function (){var statearr_17445 = state_17434;(statearr_17445[7] = inst_17398__$1);
(statearr_17445[10] = inst_17411);
return statearr_17445;
})();var statearr_17446_18255 = state_17434__$1;(statearr_17446_18255[2] = null);
(statearr_17446_18255[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17435 === 10))
{var inst_17402 = (state_17434[2]);var inst_17403 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_17434__$1 = (function (){var statearr_17447 = state_17434;(statearr_17447[11] = inst_17402);
return statearr_17447;
})();var statearr_17448_18256 = state_17434__$1;(statearr_17448_18256[2] = inst_17403);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17434__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17435 === 11))
{var inst_17398 = (state_17434[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17434,10,Object,null,9);var inst_17407 = chs__$1.call(null,inst_17398);var inst_17408 = done.call(null,inst_17398);var inst_17409 = cljs.core.async.take_BANG_.call(null,inst_17407,inst_17408);var state_17434__$1 = state_17434;var statearr_17449_18257 = state_17434__$1;(statearr_17449_18257[2] = inst_17409);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17434__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17435 === 12))
{var inst_17420 = (state_17434[12]);var inst_17420__$1 = (state_17434[2]);var inst_17421 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_17420__$1);var state_17434__$1 = (function (){var statearr_17450 = state_17434;(statearr_17450[12] = inst_17420__$1);
return statearr_17450;
})();if(cljs.core.truth_(inst_17421))
{var statearr_17451_18258 = state_17434__$1;(statearr_17451_18258[1] = 13);
} else
{var statearr_17452_18259 = state_17434__$1;(statearr_17452_18259[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17435 === 13))
{var inst_17423 = cljs.core.async.close_BANG_.call(null,out);var state_17434__$1 = state_17434;var statearr_17453_18260 = state_17434__$1;(statearr_17453_18260[2] = inst_17423);
(statearr_17453_18260[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17435 === 14))
{var inst_17420 = (state_17434[12]);var inst_17425 = cljs.core.apply.call(null,f,inst_17420);var state_17434__$1 = state_17434;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17434__$1,16,out,inst_17425);
} else
{if((state_val_17435 === 15))
{var inst_17430 = (state_17434[2]);var state_17434__$1 = state_17434;var statearr_17454_18261 = state_17434__$1;(statearr_17454_18261[2] = inst_17430);
(statearr_17454_18261[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17435 === 16))
{var inst_17427 = (state_17434[2]);var state_17434__$1 = (function (){var statearr_17455 = state_17434;(statearr_17455[13] = inst_17427);
return statearr_17455;
})();var statearr_17456_18262 = state_17434__$1;(statearr_17456_18262[2] = null);
(statearr_17456_18262[1] = 2);
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
});})(c__13459__auto___18247,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__13389__auto__,c__13459__auto___18247,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__13390__auto__ = null;
var state_machine__13390__auto____0 = (function (){var statearr_17460 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17460[0] = state_machine__13390__auto__);
(statearr_17460[1] = 1);
return statearr_17460;
});
var state_machine__13390__auto____1 = (function (state_17434){while(true){
var ret_value__13391__auto__ = (function (){try{while(true){
var result__13392__auto__ = switch__13389__auto__.call(null,state_17434);if(cljs.core.keyword_identical_QMARK_.call(null,result__13392__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13392__auto__;
}
break;
}
}catch (e17461){if((e17461 instanceof Object))
{var ex__13393__auto__ = e17461;var statearr_17462_18263 = state_17434;(statearr_17462_18263[5] = ex__13393__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17434);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17461;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13391__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18264 = state_17434;
state_17434 = G__18264;
continue;
}
} else
{return ret_value__13391__auto__;
}
break;
}
});
state_machine__13390__auto__ = function(state_17434){
switch(arguments.length){
case 0:
return state_machine__13390__auto____0.call(this);
case 1:
return state_machine__13390__auto____1.call(this,state_17434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13390__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13390__auto____0;
state_machine__13390__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13390__auto____1;
return state_machine__13390__auto__;
})()
;})(switch__13389__auto__,c__13459__auto___18247,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__13461__auto__ = (function (){var statearr_17463 = f__13460__auto__.call(null);(statearr_17463[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13459__auto___18247);
return statearr_17463;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13461__auto__);
});})(c__13459__auto___18247,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13459__auto___18265 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13459__auto___18265,out){
return (function (){var f__13460__auto__ = (function (){var switch__13389__auto__ = ((function (c__13459__auto___18265,out){
return (function (state_17547){var state_val_17548 = (state_17547[1]);if((state_val_17548 === 1))
{var inst_17518 = cljs.core.vec.call(null,chs);var inst_17519 = inst_17518;var state_17547__$1 = (function (){var statearr_17549 = state_17547;(statearr_17549[7] = inst_17519);
return statearr_17549;
})();var statearr_17550_18266 = state_17547__$1;(statearr_17550_18266[2] = null);
(statearr_17550_18266[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17548 === 2))
{var inst_17519 = (state_17547[7]);var inst_17521 = cljs.core.count.call(null,inst_17519);var inst_17522 = (inst_17521 > 0);var state_17547__$1 = state_17547;if(cljs.core.truth_(inst_17522))
{var statearr_17551_18267 = state_17547__$1;(statearr_17551_18267[1] = 4);
} else
{var statearr_17552_18268 = state_17547__$1;(statearr_17552_18268[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17548 === 3))
{var inst_17545 = (state_17547[2]);var state_17547__$1 = state_17547;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17547__$1,inst_17545);
} else
{if((state_val_17548 === 4))
{var inst_17519 = (state_17547[7]);var state_17547__$1 = state_17547;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_17547__$1,7,inst_17519);
} else
{if((state_val_17548 === 5))
{var inst_17541 = cljs.core.async.close_BANG_.call(null,out);var state_17547__$1 = state_17547;var statearr_17553_18269 = state_17547__$1;(statearr_17553_18269[2] = inst_17541);
(statearr_17553_18269[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17548 === 6))
{var inst_17543 = (state_17547[2]);var state_17547__$1 = state_17547;var statearr_17554_18270 = state_17547__$1;(statearr_17554_18270[2] = inst_17543);
(statearr_17554_18270[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17548 === 7))
{var inst_17527 = (state_17547[8]);var inst_17526 = (state_17547[9]);var inst_17526__$1 = (state_17547[2]);var inst_17527__$1 = cljs.core.nth.call(null,inst_17526__$1,0,null);var inst_17528 = cljs.core.nth.call(null,inst_17526__$1,1,null);var inst_17529 = (inst_17527__$1 == null);var state_17547__$1 = (function (){var statearr_17555 = state_17547;(statearr_17555[8] = inst_17527__$1);
(statearr_17555[9] = inst_17526__$1);
(statearr_17555[10] = inst_17528);
return statearr_17555;
})();if(cljs.core.truth_(inst_17529))
{var statearr_17556_18271 = state_17547__$1;(statearr_17556_18271[1] = 8);
} else
{var statearr_17557_18272 = state_17547__$1;(statearr_17557_18272[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17548 === 8))
{var inst_17527 = (state_17547[8]);var inst_17526 = (state_17547[9]);var inst_17519 = (state_17547[7]);var inst_17528 = (state_17547[10]);var inst_17531 = (function (){var c = inst_17528;var v = inst_17527;var vec__17524 = inst_17526;var cs = inst_17519;return ((function (c,v,vec__17524,cs,inst_17527,inst_17526,inst_17519,inst_17528,state_val_17548,c__13459__auto___18265,out){
return (function (p1__17464_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__17464_SHARP_);
});
;})(c,v,vec__17524,cs,inst_17527,inst_17526,inst_17519,inst_17528,state_val_17548,c__13459__auto___18265,out))
})();var inst_17532 = cljs.core.filterv.call(null,inst_17531,inst_17519);var inst_17519__$1 = inst_17532;var state_17547__$1 = (function (){var statearr_17558 = state_17547;(statearr_17558[7] = inst_17519__$1);
return statearr_17558;
})();var statearr_17559_18273 = state_17547__$1;(statearr_17559_18273[2] = null);
(statearr_17559_18273[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17548 === 9))
{var inst_17527 = (state_17547[8]);var state_17547__$1 = state_17547;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17547__$1,11,out,inst_17527);
} else
{if((state_val_17548 === 10))
{var inst_17539 = (state_17547[2]);var state_17547__$1 = state_17547;var statearr_17561_18274 = state_17547__$1;(statearr_17561_18274[2] = inst_17539);
(statearr_17561_18274[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17548 === 11))
{var inst_17519 = (state_17547[7]);var inst_17536 = (state_17547[2]);var tmp17560 = inst_17519;var inst_17519__$1 = tmp17560;var state_17547__$1 = (function (){var statearr_17562 = state_17547;(statearr_17562[7] = inst_17519__$1);
(statearr_17562[11] = inst_17536);
return statearr_17562;
})();var statearr_17563_18275 = state_17547__$1;(statearr_17563_18275[2] = null);
(statearr_17563_18275[1] = 2);
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
});})(c__13459__auto___18265,out))
;return ((function (switch__13389__auto__,c__13459__auto___18265,out){
return (function() {
var state_machine__13390__auto__ = null;
var state_machine__13390__auto____0 = (function (){var statearr_17567 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17567[0] = state_machine__13390__auto__);
(statearr_17567[1] = 1);
return statearr_17567;
});
var state_machine__13390__auto____1 = (function (state_17547){while(true){
var ret_value__13391__auto__ = (function (){try{while(true){
var result__13392__auto__ = switch__13389__auto__.call(null,state_17547);if(cljs.core.keyword_identical_QMARK_.call(null,result__13392__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13392__auto__;
}
break;
}
}catch (e17568){if((e17568 instanceof Object))
{var ex__13393__auto__ = e17568;var statearr_17569_18276 = state_17547;(statearr_17569_18276[5] = ex__13393__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17547);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17568;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13391__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18277 = state_17547;
state_17547 = G__18277;
continue;
}
} else
{return ret_value__13391__auto__;
}
break;
}
});
state_machine__13390__auto__ = function(state_17547){
switch(arguments.length){
case 0:
return state_machine__13390__auto____0.call(this);
case 1:
return state_machine__13390__auto____1.call(this,state_17547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13390__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13390__auto____0;
state_machine__13390__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13390__auto____1;
return state_machine__13390__auto__;
})()
;})(switch__13389__auto__,c__13459__auto___18265,out))
})();var state__13461__auto__ = (function (){var statearr_17570 = f__13460__auto__.call(null);(statearr_17570[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13459__auto___18265);
return statearr_17570;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13461__auto__);
});})(c__13459__auto___18265,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13459__auto___18278 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13459__auto___18278,out){
return (function (){var f__13460__auto__ = (function (){var switch__13389__auto__ = ((function (c__13459__auto___18278,out){
return (function (state_17640){var state_val_17641 = (state_17640[1]);if((state_val_17641 === 1))
{var inst_17617 = 0;var state_17640__$1 = (function (){var statearr_17642 = state_17640;(statearr_17642[7] = inst_17617);
return statearr_17642;
})();var statearr_17643_18279 = state_17640__$1;(statearr_17643_18279[2] = null);
(statearr_17643_18279[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17641 === 2))
{var inst_17617 = (state_17640[7]);var inst_17619 = (inst_17617 < n);var state_17640__$1 = state_17640;if(cljs.core.truth_(inst_17619))
{var statearr_17644_18280 = state_17640__$1;(statearr_17644_18280[1] = 4);
} else
{var statearr_17645_18281 = state_17640__$1;(statearr_17645_18281[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17641 === 3))
{var inst_17637 = (state_17640[2]);var inst_17638 = cljs.core.async.close_BANG_.call(null,out);var state_17640__$1 = (function (){var statearr_17646 = state_17640;(statearr_17646[8] = inst_17637);
return statearr_17646;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17640__$1,inst_17638);
} else
{if((state_val_17641 === 4))
{var state_17640__$1 = state_17640;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17640__$1,7,ch);
} else
{if((state_val_17641 === 5))
{var state_17640__$1 = state_17640;var statearr_17647_18282 = state_17640__$1;(statearr_17647_18282[2] = null);
(statearr_17647_18282[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17641 === 6))
{var inst_17635 = (state_17640[2]);var state_17640__$1 = state_17640;var statearr_17648_18283 = state_17640__$1;(statearr_17648_18283[2] = inst_17635);
(statearr_17648_18283[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17641 === 7))
{var inst_17622 = (state_17640[9]);var inst_17622__$1 = (state_17640[2]);var inst_17623 = (inst_17622__$1 == null);var inst_17624 = cljs.core.not.call(null,inst_17623);var state_17640__$1 = (function (){var statearr_17649 = state_17640;(statearr_17649[9] = inst_17622__$1);
return statearr_17649;
})();if(inst_17624)
{var statearr_17650_18284 = state_17640__$1;(statearr_17650_18284[1] = 8);
} else
{var statearr_17651_18285 = state_17640__$1;(statearr_17651_18285[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17641 === 8))
{var inst_17622 = (state_17640[9]);var state_17640__$1 = state_17640;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17640__$1,11,out,inst_17622);
} else
{if((state_val_17641 === 9))
{var state_17640__$1 = state_17640;var statearr_17652_18286 = state_17640__$1;(statearr_17652_18286[2] = null);
(statearr_17652_18286[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17641 === 10))
{var inst_17632 = (state_17640[2]);var state_17640__$1 = state_17640;var statearr_17653_18287 = state_17640__$1;(statearr_17653_18287[2] = inst_17632);
(statearr_17653_18287[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17641 === 11))
{var inst_17617 = (state_17640[7]);var inst_17627 = (state_17640[2]);var inst_17628 = (inst_17617 + 1);var inst_17617__$1 = inst_17628;var state_17640__$1 = (function (){var statearr_17654 = state_17640;(statearr_17654[10] = inst_17627);
(statearr_17654[7] = inst_17617__$1);
return statearr_17654;
})();var statearr_17655_18288 = state_17640__$1;(statearr_17655_18288[2] = null);
(statearr_17655_18288[1] = 2);
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
});})(c__13459__auto___18278,out))
;return ((function (switch__13389__auto__,c__13459__auto___18278,out){
return (function() {
var state_machine__13390__auto__ = null;
var state_machine__13390__auto____0 = (function (){var statearr_17659 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_17659[0] = state_machine__13390__auto__);
(statearr_17659[1] = 1);
return statearr_17659;
});
var state_machine__13390__auto____1 = (function (state_17640){while(true){
var ret_value__13391__auto__ = (function (){try{while(true){
var result__13392__auto__ = switch__13389__auto__.call(null,state_17640);if(cljs.core.keyword_identical_QMARK_.call(null,result__13392__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13392__auto__;
}
break;
}
}catch (e17660){if((e17660 instanceof Object))
{var ex__13393__auto__ = e17660;var statearr_17661_18289 = state_17640;(statearr_17661_18289[5] = ex__13393__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17640);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17660;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13391__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18290 = state_17640;
state_17640 = G__18290;
continue;
}
} else
{return ret_value__13391__auto__;
}
break;
}
});
state_machine__13390__auto__ = function(state_17640){
switch(arguments.length){
case 0:
return state_machine__13390__auto____0.call(this);
case 1:
return state_machine__13390__auto____1.call(this,state_17640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13390__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13390__auto____0;
state_machine__13390__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13390__auto____1;
return state_machine__13390__auto__;
})()
;})(switch__13389__auto__,c__13459__auto___18278,out))
})();var state__13461__auto__ = (function (){var statearr_17662 = f__13460__auto__.call(null);(statearr_17662[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13459__auto___18278);
return statearr_17662;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13461__auto__);
});})(c__13459__auto___18278,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13459__auto___18291 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13459__auto___18291,out){
return (function (){var f__13460__auto__ = (function (){var switch__13389__auto__ = ((function (c__13459__auto___18291,out){
return (function (state_17734){var state_val_17735 = (state_17734[1]);if((state_val_17735 === 1))
{var inst_17711 = null;var state_17734__$1 = (function (){var statearr_17736 = state_17734;(statearr_17736[7] = inst_17711);
return statearr_17736;
})();var statearr_17737_18292 = state_17734__$1;(statearr_17737_18292[2] = null);
(statearr_17737_18292[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17735 === 2))
{var state_17734__$1 = state_17734;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17734__$1,4,ch);
} else
{if((state_val_17735 === 3))
{var inst_17731 = (state_17734[2]);var inst_17732 = cljs.core.async.close_BANG_.call(null,out);var state_17734__$1 = (function (){var statearr_17738 = state_17734;(statearr_17738[8] = inst_17731);
return statearr_17738;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17734__$1,inst_17732);
} else
{if((state_val_17735 === 4))
{var inst_17714 = (state_17734[9]);var inst_17714__$1 = (state_17734[2]);var inst_17715 = (inst_17714__$1 == null);var inst_17716 = cljs.core.not.call(null,inst_17715);var state_17734__$1 = (function (){var statearr_17739 = state_17734;(statearr_17739[9] = inst_17714__$1);
return statearr_17739;
})();if(inst_17716)
{var statearr_17740_18293 = state_17734__$1;(statearr_17740_18293[1] = 5);
} else
{var statearr_17741_18294 = state_17734__$1;(statearr_17741_18294[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17735 === 5))
{var inst_17714 = (state_17734[9]);var inst_17711 = (state_17734[7]);var inst_17718 = cljs.core._EQ_.call(null,inst_17714,inst_17711);var state_17734__$1 = state_17734;if(inst_17718)
{var statearr_17742_18295 = state_17734__$1;(statearr_17742_18295[1] = 8);
} else
{var statearr_17743_18296 = state_17734__$1;(statearr_17743_18296[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17735 === 6))
{var state_17734__$1 = state_17734;var statearr_17745_18297 = state_17734__$1;(statearr_17745_18297[2] = null);
(statearr_17745_18297[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17735 === 7))
{var inst_17729 = (state_17734[2]);var state_17734__$1 = state_17734;var statearr_17746_18298 = state_17734__$1;(statearr_17746_18298[2] = inst_17729);
(statearr_17746_18298[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17735 === 8))
{var inst_17711 = (state_17734[7]);var tmp17744 = inst_17711;var inst_17711__$1 = tmp17744;var state_17734__$1 = (function (){var statearr_17747 = state_17734;(statearr_17747[7] = inst_17711__$1);
return statearr_17747;
})();var statearr_17748_18299 = state_17734__$1;(statearr_17748_18299[2] = null);
(statearr_17748_18299[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17735 === 9))
{var inst_17714 = (state_17734[9]);var state_17734__$1 = state_17734;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17734__$1,11,out,inst_17714);
} else
{if((state_val_17735 === 10))
{var inst_17726 = (state_17734[2]);var state_17734__$1 = state_17734;var statearr_17749_18300 = state_17734__$1;(statearr_17749_18300[2] = inst_17726);
(statearr_17749_18300[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17735 === 11))
{var inst_17714 = (state_17734[9]);var inst_17723 = (state_17734[2]);var inst_17711 = inst_17714;var state_17734__$1 = (function (){var statearr_17750 = state_17734;(statearr_17750[10] = inst_17723);
(statearr_17750[7] = inst_17711);
return statearr_17750;
})();var statearr_17751_18301 = state_17734__$1;(statearr_17751_18301[2] = null);
(statearr_17751_18301[1] = 2);
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
});})(c__13459__auto___18291,out))
;return ((function (switch__13389__auto__,c__13459__auto___18291,out){
return (function() {
var state_machine__13390__auto__ = null;
var state_machine__13390__auto____0 = (function (){var statearr_17755 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_17755[0] = state_machine__13390__auto__);
(statearr_17755[1] = 1);
return statearr_17755;
});
var state_machine__13390__auto____1 = (function (state_17734){while(true){
var ret_value__13391__auto__ = (function (){try{while(true){
var result__13392__auto__ = switch__13389__auto__.call(null,state_17734);if(cljs.core.keyword_identical_QMARK_.call(null,result__13392__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13392__auto__;
}
break;
}
}catch (e17756){if((e17756 instanceof Object))
{var ex__13393__auto__ = e17756;var statearr_17757_18302 = state_17734;(statearr_17757_18302[5] = ex__13393__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17734);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17756;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13391__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18303 = state_17734;
state_17734 = G__18303;
continue;
}
} else
{return ret_value__13391__auto__;
}
break;
}
});
state_machine__13390__auto__ = function(state_17734){
switch(arguments.length){
case 0:
return state_machine__13390__auto____0.call(this);
case 1:
return state_machine__13390__auto____1.call(this,state_17734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13390__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13390__auto____0;
state_machine__13390__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13390__auto____1;
return state_machine__13390__auto__;
})()
;})(switch__13389__auto__,c__13459__auto___18291,out))
})();var state__13461__auto__ = (function (){var statearr_17758 = f__13460__auto__.call(null);(statearr_17758[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13459__auto___18291);
return statearr_17758;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13461__auto__);
});})(c__13459__auto___18291,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13459__auto___18304 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13459__auto___18304,out){
return (function (){var f__13460__auto__ = (function (){var switch__13389__auto__ = ((function (c__13459__auto___18304,out){
return (function (state_17863){var state_val_17864 = (state_17863[1]);if((state_val_17864 === 1))
{var inst_17826 = (new Array(n));var inst_17827 = inst_17826;var inst_17828 = 0;var state_17863__$1 = (function (){var statearr_17865 = state_17863;(statearr_17865[7] = inst_17827);
(statearr_17865[8] = inst_17828);
return statearr_17865;
})();var statearr_17866_18305 = state_17863__$1;(statearr_17866_18305[2] = null);
(statearr_17866_18305[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17864 === 2))
{var state_17863__$1 = state_17863;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17863__$1,4,ch);
} else
{if((state_val_17864 === 3))
{var inst_17861 = (state_17863[2]);var state_17863__$1 = state_17863;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17863__$1,inst_17861);
} else
{if((state_val_17864 === 4))
{var inst_17831 = (state_17863[9]);var inst_17831__$1 = (state_17863[2]);var inst_17832 = (inst_17831__$1 == null);var inst_17833 = cljs.core.not.call(null,inst_17832);var state_17863__$1 = (function (){var statearr_17867 = state_17863;(statearr_17867[9] = inst_17831__$1);
return statearr_17867;
})();if(inst_17833)
{var statearr_17868_18306 = state_17863__$1;(statearr_17868_18306[1] = 5);
} else
{var statearr_17869_18307 = state_17863__$1;(statearr_17869_18307[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17864 === 5))
{var inst_17831 = (state_17863[9]);var inst_17836 = (state_17863[10]);var inst_17827 = (state_17863[7]);var inst_17828 = (state_17863[8]);var inst_17835 = (inst_17827[inst_17828] = inst_17831);var inst_17836__$1 = (inst_17828 + 1);var inst_17837 = (inst_17836__$1 < n);var state_17863__$1 = (function (){var statearr_17870 = state_17863;(statearr_17870[10] = inst_17836__$1);
(statearr_17870[11] = inst_17835);
return statearr_17870;
})();if(cljs.core.truth_(inst_17837))
{var statearr_17871_18308 = state_17863__$1;(statearr_17871_18308[1] = 8);
} else
{var statearr_17872_18309 = state_17863__$1;(statearr_17872_18309[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17864 === 6))
{var inst_17828 = (state_17863[8]);var inst_17849 = (inst_17828 > 0);var state_17863__$1 = state_17863;if(cljs.core.truth_(inst_17849))
{var statearr_17874_18310 = state_17863__$1;(statearr_17874_18310[1] = 12);
} else
{var statearr_17875_18311 = state_17863__$1;(statearr_17875_18311[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17864 === 7))
{var inst_17859 = (state_17863[2]);var state_17863__$1 = state_17863;var statearr_17876_18312 = state_17863__$1;(statearr_17876_18312[2] = inst_17859);
(statearr_17876_18312[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17864 === 8))
{var inst_17836 = (state_17863[10]);var inst_17827 = (state_17863[7]);var tmp17873 = inst_17827;var inst_17827__$1 = tmp17873;var inst_17828 = inst_17836;var state_17863__$1 = (function (){var statearr_17877 = state_17863;(statearr_17877[7] = inst_17827__$1);
(statearr_17877[8] = inst_17828);
return statearr_17877;
})();var statearr_17878_18313 = state_17863__$1;(statearr_17878_18313[2] = null);
(statearr_17878_18313[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17864 === 9))
{var inst_17827 = (state_17863[7]);var inst_17841 = cljs.core.vec.call(null,inst_17827);var state_17863__$1 = state_17863;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17863__$1,11,out,inst_17841);
} else
{if((state_val_17864 === 10))
{var inst_17847 = (state_17863[2]);var state_17863__$1 = state_17863;var statearr_17879_18314 = state_17863__$1;(statearr_17879_18314[2] = inst_17847);
(statearr_17879_18314[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17864 === 11))
{var inst_17843 = (state_17863[2]);var inst_17844 = (new Array(n));var inst_17827 = inst_17844;var inst_17828 = 0;var state_17863__$1 = (function (){var statearr_17880 = state_17863;(statearr_17880[12] = inst_17843);
(statearr_17880[7] = inst_17827);
(statearr_17880[8] = inst_17828);
return statearr_17880;
})();var statearr_17881_18315 = state_17863__$1;(statearr_17881_18315[2] = null);
(statearr_17881_18315[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17864 === 12))
{var inst_17827 = (state_17863[7]);var inst_17851 = cljs.core.vec.call(null,inst_17827);var state_17863__$1 = state_17863;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17863__$1,15,out,inst_17851);
} else
{if((state_val_17864 === 13))
{var state_17863__$1 = state_17863;var statearr_17882_18316 = state_17863__$1;(statearr_17882_18316[2] = null);
(statearr_17882_18316[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17864 === 14))
{var inst_17856 = (state_17863[2]);var inst_17857 = cljs.core.async.close_BANG_.call(null,out);var state_17863__$1 = (function (){var statearr_17883 = state_17863;(statearr_17883[13] = inst_17856);
return statearr_17883;
})();var statearr_17884_18317 = state_17863__$1;(statearr_17884_18317[2] = inst_17857);
(statearr_17884_18317[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17864 === 15))
{var inst_17853 = (state_17863[2]);var state_17863__$1 = state_17863;var statearr_17885_18318 = state_17863__$1;(statearr_17885_18318[2] = inst_17853);
(statearr_17885_18318[1] = 14);
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
});})(c__13459__auto___18304,out))
;return ((function (switch__13389__auto__,c__13459__auto___18304,out){
return (function() {
var state_machine__13390__auto__ = null;
var state_machine__13390__auto____0 = (function (){var statearr_17889 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17889[0] = state_machine__13390__auto__);
(statearr_17889[1] = 1);
return statearr_17889;
});
var state_machine__13390__auto____1 = (function (state_17863){while(true){
var ret_value__13391__auto__ = (function (){try{while(true){
var result__13392__auto__ = switch__13389__auto__.call(null,state_17863);if(cljs.core.keyword_identical_QMARK_.call(null,result__13392__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13392__auto__;
}
break;
}
}catch (e17890){if((e17890 instanceof Object))
{var ex__13393__auto__ = e17890;var statearr_17891_18319 = state_17863;(statearr_17891_18319[5] = ex__13393__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17863);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17890;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13391__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18320 = state_17863;
state_17863 = G__18320;
continue;
}
} else
{return ret_value__13391__auto__;
}
break;
}
});
state_machine__13390__auto__ = function(state_17863){
switch(arguments.length){
case 0:
return state_machine__13390__auto____0.call(this);
case 1:
return state_machine__13390__auto____1.call(this,state_17863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13390__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13390__auto____0;
state_machine__13390__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13390__auto____1;
return state_machine__13390__auto__;
})()
;})(switch__13389__auto__,c__13459__auto___18304,out))
})();var state__13461__auto__ = (function (){var statearr_17892 = f__13460__auto__.call(null);(statearr_17892[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13459__auto___18304);
return statearr_17892;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13461__auto__);
});})(c__13459__auto___18304,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13459__auto___18321 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13459__auto___18321,out){
return (function (){var f__13460__auto__ = (function (){var switch__13389__auto__ = ((function (c__13459__auto___18321,out){
return (function (state_18005){var state_val_18006 = (state_18005[1]);if((state_val_18006 === 1))
{var inst_17964 = [];var inst_17965 = inst_17964;var inst_17966 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_18005__$1 = (function (){var statearr_18007 = state_18005;(statearr_18007[7] = inst_17966);
(statearr_18007[8] = inst_17965);
return statearr_18007;
})();var statearr_18008_18322 = state_18005__$1;(statearr_18008_18322[2] = null);
(statearr_18008_18322[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18006 === 2))
{var state_18005__$1 = state_18005;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18005__$1,4,ch);
} else
{if((state_val_18006 === 3))
{var inst_18003 = (state_18005[2]);var state_18005__$1 = state_18005;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18005__$1,inst_18003);
} else
{if((state_val_18006 === 4))
{var inst_17969 = (state_18005[9]);var inst_17969__$1 = (state_18005[2]);var inst_17970 = (inst_17969__$1 == null);var inst_17971 = cljs.core.not.call(null,inst_17970);var state_18005__$1 = (function (){var statearr_18009 = state_18005;(statearr_18009[9] = inst_17969__$1);
return statearr_18009;
})();if(inst_17971)
{var statearr_18010_18323 = state_18005__$1;(statearr_18010_18323[1] = 5);
} else
{var statearr_18011_18324 = state_18005__$1;(statearr_18011_18324[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18006 === 5))
{var inst_17966 = (state_18005[7]);var inst_17973 = (state_18005[10]);var inst_17969 = (state_18005[9]);var inst_17973__$1 = f.call(null,inst_17969);var inst_17974 = cljs.core._EQ_.call(null,inst_17973__$1,inst_17966);var inst_17975 = cljs.core.keyword_identical_QMARK_.call(null,inst_17966,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_17976 = (inst_17974) || (inst_17975);var state_18005__$1 = (function (){var statearr_18012 = state_18005;(statearr_18012[10] = inst_17973__$1);
return statearr_18012;
})();if(cljs.core.truth_(inst_17976))
{var statearr_18013_18325 = state_18005__$1;(statearr_18013_18325[1] = 8);
} else
{var statearr_18014_18326 = state_18005__$1;(statearr_18014_18326[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18006 === 6))
{var inst_17965 = (state_18005[8]);var inst_17990 = inst_17965.length;var inst_17991 = (inst_17990 > 0);var state_18005__$1 = state_18005;if(cljs.core.truth_(inst_17991))
{var statearr_18016_18327 = state_18005__$1;(statearr_18016_18327[1] = 12);
} else
{var statearr_18017_18328 = state_18005__$1;(statearr_18017_18328[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18006 === 7))
{var inst_18001 = (state_18005[2]);var state_18005__$1 = state_18005;var statearr_18018_18329 = state_18005__$1;(statearr_18018_18329[2] = inst_18001);
(statearr_18018_18329[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18006 === 8))
{var inst_17965 = (state_18005[8]);var inst_17973 = (state_18005[10]);var inst_17969 = (state_18005[9]);var inst_17978 = inst_17965.push(inst_17969);var tmp18015 = inst_17965;var inst_17965__$1 = tmp18015;var inst_17966 = inst_17973;var state_18005__$1 = (function (){var statearr_18019 = state_18005;(statearr_18019[7] = inst_17966);
(statearr_18019[8] = inst_17965__$1);
(statearr_18019[11] = inst_17978);
return statearr_18019;
})();var statearr_18020_18330 = state_18005__$1;(statearr_18020_18330[2] = null);
(statearr_18020_18330[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18006 === 9))
{var inst_17965 = (state_18005[8]);var inst_17981 = cljs.core.vec.call(null,inst_17965);var state_18005__$1 = state_18005;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18005__$1,11,out,inst_17981);
} else
{if((state_val_18006 === 10))
{var inst_17988 = (state_18005[2]);var state_18005__$1 = state_18005;var statearr_18021_18331 = state_18005__$1;(statearr_18021_18331[2] = inst_17988);
(statearr_18021_18331[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18006 === 11))
{var inst_17973 = (state_18005[10]);var inst_17969 = (state_18005[9]);var inst_17983 = (state_18005[2]);var inst_17984 = [];var inst_17985 = inst_17984.push(inst_17969);var inst_17965 = inst_17984;var inst_17966 = inst_17973;var state_18005__$1 = (function (){var statearr_18022 = state_18005;(statearr_18022[7] = inst_17966);
(statearr_18022[8] = inst_17965);
(statearr_18022[12] = inst_17985);
(statearr_18022[13] = inst_17983);
return statearr_18022;
})();var statearr_18023_18332 = state_18005__$1;(statearr_18023_18332[2] = null);
(statearr_18023_18332[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18006 === 12))
{var inst_17965 = (state_18005[8]);var inst_17993 = cljs.core.vec.call(null,inst_17965);var state_18005__$1 = state_18005;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18005__$1,15,out,inst_17993);
} else
{if((state_val_18006 === 13))
{var state_18005__$1 = state_18005;var statearr_18024_18333 = state_18005__$1;(statearr_18024_18333[2] = null);
(statearr_18024_18333[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18006 === 14))
{var inst_17998 = (state_18005[2]);var inst_17999 = cljs.core.async.close_BANG_.call(null,out);var state_18005__$1 = (function (){var statearr_18025 = state_18005;(statearr_18025[14] = inst_17998);
return statearr_18025;
})();var statearr_18026_18334 = state_18005__$1;(statearr_18026_18334[2] = inst_17999);
(statearr_18026_18334[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18006 === 15))
{var inst_17995 = (state_18005[2]);var state_18005__$1 = state_18005;var statearr_18027_18335 = state_18005__$1;(statearr_18027_18335[2] = inst_17995);
(statearr_18027_18335[1] = 14);
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
});})(c__13459__auto___18321,out))
;return ((function (switch__13389__auto__,c__13459__auto___18321,out){
return (function() {
var state_machine__13390__auto__ = null;
var state_machine__13390__auto____0 = (function (){var statearr_18031 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18031[0] = state_machine__13390__auto__);
(statearr_18031[1] = 1);
return statearr_18031;
});
var state_machine__13390__auto____1 = (function (state_18005){while(true){
var ret_value__13391__auto__ = (function (){try{while(true){
var result__13392__auto__ = switch__13389__auto__.call(null,state_18005);if(cljs.core.keyword_identical_QMARK_.call(null,result__13392__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13392__auto__;
}
break;
}
}catch (e18032){if((e18032 instanceof Object))
{var ex__13393__auto__ = e18032;var statearr_18033_18336 = state_18005;(statearr_18033_18336[5] = ex__13393__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18005);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18032;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13391__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18337 = state_18005;
state_18005 = G__18337;
continue;
}
} else
{return ret_value__13391__auto__;
}
break;
}
});
state_machine__13390__auto__ = function(state_18005){
switch(arguments.length){
case 0:
return state_machine__13390__auto____0.call(this);
case 1:
return state_machine__13390__auto____1.call(this,state_18005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13390__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13390__auto____0;
state_machine__13390__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13390__auto____1;
return state_machine__13390__auto__;
})()
;})(switch__13389__auto__,c__13459__auto___18321,out))
})();var state__13461__auto__ = (function (){var statearr_18034 = f__13460__auto__.call(null);(statearr_18034[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13459__auto___18321);
return statearr_18034;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13461__auto__);
});})(c__13459__auto___18321,out))
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
{var o = (function (){var obj11720 = {};return obj11720;
})();var seq__11721_11734 = cljs.core.seq.call(null,obj);var chunk__11722_11735 = null;var count__11723_11736 = 0;var i__11724_11737 = 0;while(true){
if((i__11724_11737 < count__11723_11736))
{var vec__11725_11738 = cljs.core._nth.call(null,chunk__11722_11735,i__11724_11737);var k_11739 = cljs.core.nth.call(null,vec__11725_11738,0,null);var v_11740 = cljs.core.nth.call(null,vec__11725_11738,1,null);(o[cljs.core.name.call(null,k_11739)] = js_props.call(null,v_11740));
{
var G__11741 = seq__11721_11734;
var G__11742 = chunk__11722_11735;
var G__11743 = count__11723_11736;
var G__11744 = (i__11724_11737 + 1);
seq__11721_11734 = G__11741;
chunk__11722_11735 = G__11742;
count__11723_11736 = G__11743;
i__11724_11737 = G__11744;
continue;
}
} else
{var temp__4092__auto___11745 = cljs.core.seq.call(null,seq__11721_11734);if(temp__4092__auto___11745)
{var seq__11721_11746__$1 = temp__4092__auto___11745;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11721_11746__$1))
{var c__5633__auto___11747 = cljs.core.chunk_first.call(null,seq__11721_11746__$1);{
var G__11748 = cljs.core.chunk_rest.call(null,seq__11721_11746__$1);
var G__11749 = c__5633__auto___11747;
var G__11750 = cljs.core.count.call(null,c__5633__auto___11747);
var G__11751 = 0;
seq__11721_11734 = G__11748;
chunk__11722_11735 = G__11749;
count__11723_11736 = G__11750;
i__11724_11737 = G__11751;
continue;
}
} else
{var vec__11726_11752 = cljs.core.first.call(null,seq__11721_11746__$1);var k_11753 = cljs.core.nth.call(null,vec__11726_11752,0,null);var v_11754 = cljs.core.nth.call(null,vec__11726_11752,1,null);(o[cljs.core.name.call(null,k_11753)] = js_props.call(null,v_11754));
{
var G__11755 = cljs.core.next.call(null,seq__11721_11746__$1);
var G__11756 = null;
var G__11757 = 0;
var G__11758 = 0;
seq__11721_11734 = G__11755;
chunk__11722_11735 = G__11756;
count__11723_11736 = G__11757;
i__11724_11737 = G__11758;
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
quiescent.component = (function component(renderer){var react_component = React.createClass({"render": (function (){var this$ = this;var _STAR_component_STAR_11728 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return cljs.core.apply.call(null,renderer,(this$.props["value"]),(this$.props["statics"]));
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11728;
}}), "shouldComponentUpdate": (function (next_props,_){var this$ = this;return cljs.core.not_EQ_.call(null,(this$.props["value"]),(next_props["value"]));
})});return ((function (react_component){
return (function() { 
var G__11759__delegate = function (value,static_args){return react_component.call(null,{"statics": static_args, "value": value});
};
var G__11759 = function (value,var_args){
var static_args = null;if (arguments.length > 1) {
  static_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__11759__delegate.call(this,value,static_args);};
G__11759.cljs$lang$maxFixedArity = 1;
G__11759.cljs$lang$applyTo = (function (arglist__11760){
var value = cljs.core.first(arglist__11760);
var static_args = cljs.core.rest(arglist__11760);
return G__11759__delegate(value,static_args);
});
G__11759.cljs$core$IFn$_invoke$arity$variadic = G__11759__delegate;
return G__11759;
})()
;
;})(react_component))
});
/**
* Wrapper component used to mix-in lifecycle access
*/
quiescent.WrapperComponent = React.createClass({"componentWillUnmount": (function (){var this$ = this;var temp__4092__auto__ = (this$.props["onWillUnmount"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_11733 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null);
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11733;
}} else
{return null;
}
}), "componentWillUpdate": (function (_,___$1){var this$ = this;var temp__4092__auto__ = (this$.props["onWillUpdate"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_11732 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null);
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11732;
}} else
{return null;
}
}), "componentWillMount": (function (){var this$ = this;var temp__4092__auto__ = (this$.props["onWillMount"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_11731 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null);
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11731;
}} else
{return null;
}
}), "componentDidMount": (function (){var this$ = this;var temp__4092__auto__ = (this$.props["onMount"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_11730 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null,this$.getDOMNode());
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11730;
}} else
{return null;
}
}), "componentDidUpdate": (function (prev_props,prev_state){var this$ = this;var temp__4092__auto__ = (this$.props["onUpdate"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_11729 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null,this$.getDOMNode());
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11729;
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
var wrapper__delegate = function (child,kvs){var props = quiescent.js_props.call(null,cljs.core.apply.call(null,cljs.core.array_map,new cljs.core.Keyword(null,"wrappee","wrappee",2609412088),child,kvs));var temp__4092__auto___11761 = (child.props["key"]);if(cljs.core.truth_(temp__4092__auto___11761))
{var key_11762 = temp__4092__auto___11761;(props["key"] = key_11762);
} else
{}
return quiescent.WrapperComponent.call(null,props);
};
var wrapper = function (child,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrapper__delegate.call(this,child,kvs);};
wrapper.cljs$lang$maxFixedArity = 1;
wrapper.cljs$lang$applyTo = (function (arglist__11763){
var child = cljs.core.first(arglist__11763);
var kvs = cljs.core.rest(arglist__11763);
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
var a__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8145_9093 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8146_9094 = null;var count__8147_9095 = 0;var i__8148_9096 = 0;while(true){
if((i__8148_9096 < count__8147_9095))
{var arg__7145__auto___9097 = cljs.core._nth.call(null,chunk__8146_9094,i__8148_9096);a__7144__auto__.push(arg__7145__auto___9097);
{
var G__9098 = seq__8145_9093;
var G__9099 = chunk__8146_9094;
var G__9100 = count__8147_9095;
var G__9101 = (i__8148_9096 + 1);
seq__8145_9093 = G__9098;
chunk__8146_9094 = G__9099;
count__8147_9095 = G__9100;
i__8148_9096 = G__9101;
continue;
}
} else
{var temp__4092__auto___9102 = cljs.core.seq.call(null,seq__8145_9093);if(temp__4092__auto___9102)
{var seq__8145_9103__$1 = temp__4092__auto___9102;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8145_9103__$1))
{var c__5633__auto___9104 = cljs.core.chunk_first.call(null,seq__8145_9103__$1);{
var G__9105 = cljs.core.chunk_rest.call(null,seq__8145_9103__$1);
var G__9106 = c__5633__auto___9104;
var G__9107 = cljs.core.count.call(null,c__5633__auto___9104);
var G__9108 = 0;
seq__8145_9093 = G__9105;
chunk__8146_9094 = G__9106;
count__8147_9095 = G__9107;
i__8148_9096 = G__9108;
continue;
}
} else
{var arg__7145__auto___9109 = cljs.core.first.call(null,seq__8145_9103__$1);a__7144__auto__.push(arg__7145__auto___9109);
{
var G__9110 = cljs.core.next.call(null,seq__8145_9103__$1);
var G__9111 = null;
var G__9112 = 0;
var G__9113 = 0;
seq__8145_9093 = G__9110;
chunk__8146_9094 = G__9111;
count__8147_9095 = G__9112;
i__8148_9096 = G__9113;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.a.apply(null,a__7144__auto__);
};
var a = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return a__delegate.call(this,args__7143__auto__);};
a.cljs$lang$maxFixedArity = 0;
a.cljs$lang$applyTo = (function (arglist__9114){
var args__7143__auto__ = cljs.core.seq(arglist__9114);
return a__delegate(args__7143__auto__);
});
a.cljs$core$IFn$_invoke$arity$variadic = a__delegate;
return a;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.abbr = (function() { 
var abbr__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8153_9115 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8154_9116 = null;var count__8155_9117 = 0;var i__8156_9118 = 0;while(true){
if((i__8156_9118 < count__8155_9117))
{var arg__7145__auto___9119 = cljs.core._nth.call(null,chunk__8154_9116,i__8156_9118);a__7144__auto__.push(arg__7145__auto___9119);
{
var G__9120 = seq__8153_9115;
var G__9121 = chunk__8154_9116;
var G__9122 = count__8155_9117;
var G__9123 = (i__8156_9118 + 1);
seq__8153_9115 = G__9120;
chunk__8154_9116 = G__9121;
count__8155_9117 = G__9122;
i__8156_9118 = G__9123;
continue;
}
} else
{var temp__4092__auto___9124 = cljs.core.seq.call(null,seq__8153_9115);if(temp__4092__auto___9124)
{var seq__8153_9125__$1 = temp__4092__auto___9124;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8153_9125__$1))
{var c__5633__auto___9126 = cljs.core.chunk_first.call(null,seq__8153_9125__$1);{
var G__9127 = cljs.core.chunk_rest.call(null,seq__8153_9125__$1);
var G__9128 = c__5633__auto___9126;
var G__9129 = cljs.core.count.call(null,c__5633__auto___9126);
var G__9130 = 0;
seq__8153_9115 = G__9127;
chunk__8154_9116 = G__9128;
count__8155_9117 = G__9129;
i__8156_9118 = G__9130;
continue;
}
} else
{var arg__7145__auto___9131 = cljs.core.first.call(null,seq__8153_9125__$1);a__7144__auto__.push(arg__7145__auto___9131);
{
var G__9132 = cljs.core.next.call(null,seq__8153_9125__$1);
var G__9133 = null;
var G__9134 = 0;
var G__9135 = 0;
seq__8153_9115 = G__9132;
chunk__8154_9116 = G__9133;
count__8155_9117 = G__9134;
i__8156_9118 = G__9135;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.abbr.apply(null,a__7144__auto__);
};
var abbr = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return abbr__delegate.call(this,args__7143__auto__);};
abbr.cljs$lang$maxFixedArity = 0;
abbr.cljs$lang$applyTo = (function (arglist__9136){
var args__7143__auto__ = cljs.core.seq(arglist__9136);
return abbr__delegate(args__7143__auto__);
});
abbr.cljs$core$IFn$_invoke$arity$variadic = abbr__delegate;
return abbr;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.address = (function() { 
var address__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8161_9137 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8162_9138 = null;var count__8163_9139 = 0;var i__8164_9140 = 0;while(true){
if((i__8164_9140 < count__8163_9139))
{var arg__7145__auto___9141 = cljs.core._nth.call(null,chunk__8162_9138,i__8164_9140);a__7144__auto__.push(arg__7145__auto___9141);
{
var G__9142 = seq__8161_9137;
var G__9143 = chunk__8162_9138;
var G__9144 = count__8163_9139;
var G__9145 = (i__8164_9140 + 1);
seq__8161_9137 = G__9142;
chunk__8162_9138 = G__9143;
count__8163_9139 = G__9144;
i__8164_9140 = G__9145;
continue;
}
} else
{var temp__4092__auto___9146 = cljs.core.seq.call(null,seq__8161_9137);if(temp__4092__auto___9146)
{var seq__8161_9147__$1 = temp__4092__auto___9146;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8161_9147__$1))
{var c__5633__auto___9148 = cljs.core.chunk_first.call(null,seq__8161_9147__$1);{
var G__9149 = cljs.core.chunk_rest.call(null,seq__8161_9147__$1);
var G__9150 = c__5633__auto___9148;
var G__9151 = cljs.core.count.call(null,c__5633__auto___9148);
var G__9152 = 0;
seq__8161_9137 = G__9149;
chunk__8162_9138 = G__9150;
count__8163_9139 = G__9151;
i__8164_9140 = G__9152;
continue;
}
} else
{var arg__7145__auto___9153 = cljs.core.first.call(null,seq__8161_9147__$1);a__7144__auto__.push(arg__7145__auto___9153);
{
var G__9154 = cljs.core.next.call(null,seq__8161_9147__$1);
var G__9155 = null;
var G__9156 = 0;
var G__9157 = 0;
seq__8161_9137 = G__9154;
chunk__8162_9138 = G__9155;
count__8163_9139 = G__9156;
i__8164_9140 = G__9157;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.address.apply(null,a__7144__auto__);
};
var address = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return address__delegate.call(this,args__7143__auto__);};
address.cljs$lang$maxFixedArity = 0;
address.cljs$lang$applyTo = (function (arglist__9158){
var args__7143__auto__ = cljs.core.seq(arglist__9158);
return address__delegate(args__7143__auto__);
});
address.cljs$core$IFn$_invoke$arity$variadic = address__delegate;
return address;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.area = (function() { 
var area__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8169_9159 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8170_9160 = null;var count__8171_9161 = 0;var i__8172_9162 = 0;while(true){
if((i__8172_9162 < count__8171_9161))
{var arg__7145__auto___9163 = cljs.core._nth.call(null,chunk__8170_9160,i__8172_9162);a__7144__auto__.push(arg__7145__auto___9163);
{
var G__9164 = seq__8169_9159;
var G__9165 = chunk__8170_9160;
var G__9166 = count__8171_9161;
var G__9167 = (i__8172_9162 + 1);
seq__8169_9159 = G__9164;
chunk__8170_9160 = G__9165;
count__8171_9161 = G__9166;
i__8172_9162 = G__9167;
continue;
}
} else
{var temp__4092__auto___9168 = cljs.core.seq.call(null,seq__8169_9159);if(temp__4092__auto___9168)
{var seq__8169_9169__$1 = temp__4092__auto___9168;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8169_9169__$1))
{var c__5633__auto___9170 = cljs.core.chunk_first.call(null,seq__8169_9169__$1);{
var G__9171 = cljs.core.chunk_rest.call(null,seq__8169_9169__$1);
var G__9172 = c__5633__auto___9170;
var G__9173 = cljs.core.count.call(null,c__5633__auto___9170);
var G__9174 = 0;
seq__8169_9159 = G__9171;
chunk__8170_9160 = G__9172;
count__8171_9161 = G__9173;
i__8172_9162 = G__9174;
continue;
}
} else
{var arg__7145__auto___9175 = cljs.core.first.call(null,seq__8169_9169__$1);a__7144__auto__.push(arg__7145__auto___9175);
{
var G__9176 = cljs.core.next.call(null,seq__8169_9169__$1);
var G__9177 = null;
var G__9178 = 0;
var G__9179 = 0;
seq__8169_9159 = G__9176;
chunk__8170_9160 = G__9177;
count__8171_9161 = G__9178;
i__8172_9162 = G__9179;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.area.apply(null,a__7144__auto__);
};
var area = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return area__delegate.call(this,args__7143__auto__);};
area.cljs$lang$maxFixedArity = 0;
area.cljs$lang$applyTo = (function (arglist__9180){
var args__7143__auto__ = cljs.core.seq(arglist__9180);
return area__delegate(args__7143__auto__);
});
area.cljs$core$IFn$_invoke$arity$variadic = area__delegate;
return area;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.article = (function() { 
var article__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8177_9181 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8178_9182 = null;var count__8179_9183 = 0;var i__8180_9184 = 0;while(true){
if((i__8180_9184 < count__8179_9183))
{var arg__7145__auto___9185 = cljs.core._nth.call(null,chunk__8178_9182,i__8180_9184);a__7144__auto__.push(arg__7145__auto___9185);
{
var G__9186 = seq__8177_9181;
var G__9187 = chunk__8178_9182;
var G__9188 = count__8179_9183;
var G__9189 = (i__8180_9184 + 1);
seq__8177_9181 = G__9186;
chunk__8178_9182 = G__9187;
count__8179_9183 = G__9188;
i__8180_9184 = G__9189;
continue;
}
} else
{var temp__4092__auto___9190 = cljs.core.seq.call(null,seq__8177_9181);if(temp__4092__auto___9190)
{var seq__8177_9191__$1 = temp__4092__auto___9190;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8177_9191__$1))
{var c__5633__auto___9192 = cljs.core.chunk_first.call(null,seq__8177_9191__$1);{
var G__9193 = cljs.core.chunk_rest.call(null,seq__8177_9191__$1);
var G__9194 = c__5633__auto___9192;
var G__9195 = cljs.core.count.call(null,c__5633__auto___9192);
var G__9196 = 0;
seq__8177_9181 = G__9193;
chunk__8178_9182 = G__9194;
count__8179_9183 = G__9195;
i__8180_9184 = G__9196;
continue;
}
} else
{var arg__7145__auto___9197 = cljs.core.first.call(null,seq__8177_9191__$1);a__7144__auto__.push(arg__7145__auto___9197);
{
var G__9198 = cljs.core.next.call(null,seq__8177_9191__$1);
var G__9199 = null;
var G__9200 = 0;
var G__9201 = 0;
seq__8177_9181 = G__9198;
chunk__8178_9182 = G__9199;
count__8179_9183 = G__9200;
i__8180_9184 = G__9201;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.article.apply(null,a__7144__auto__);
};
var article = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return article__delegate.call(this,args__7143__auto__);};
article.cljs$lang$maxFixedArity = 0;
article.cljs$lang$applyTo = (function (arglist__9202){
var args__7143__auto__ = cljs.core.seq(arglist__9202);
return article__delegate(args__7143__auto__);
});
article.cljs$core$IFn$_invoke$arity$variadic = article__delegate;
return article;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.aside = (function() { 
var aside__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8185_9203 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8186_9204 = null;var count__8187_9205 = 0;var i__8188_9206 = 0;while(true){
if((i__8188_9206 < count__8187_9205))
{var arg__7145__auto___9207 = cljs.core._nth.call(null,chunk__8186_9204,i__8188_9206);a__7144__auto__.push(arg__7145__auto___9207);
{
var G__9208 = seq__8185_9203;
var G__9209 = chunk__8186_9204;
var G__9210 = count__8187_9205;
var G__9211 = (i__8188_9206 + 1);
seq__8185_9203 = G__9208;
chunk__8186_9204 = G__9209;
count__8187_9205 = G__9210;
i__8188_9206 = G__9211;
continue;
}
} else
{var temp__4092__auto___9212 = cljs.core.seq.call(null,seq__8185_9203);if(temp__4092__auto___9212)
{var seq__8185_9213__$1 = temp__4092__auto___9212;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8185_9213__$1))
{var c__5633__auto___9214 = cljs.core.chunk_first.call(null,seq__8185_9213__$1);{
var G__9215 = cljs.core.chunk_rest.call(null,seq__8185_9213__$1);
var G__9216 = c__5633__auto___9214;
var G__9217 = cljs.core.count.call(null,c__5633__auto___9214);
var G__9218 = 0;
seq__8185_9203 = G__9215;
chunk__8186_9204 = G__9216;
count__8187_9205 = G__9217;
i__8188_9206 = G__9218;
continue;
}
} else
{var arg__7145__auto___9219 = cljs.core.first.call(null,seq__8185_9213__$1);a__7144__auto__.push(arg__7145__auto___9219);
{
var G__9220 = cljs.core.next.call(null,seq__8185_9213__$1);
var G__9221 = null;
var G__9222 = 0;
var G__9223 = 0;
seq__8185_9203 = G__9220;
chunk__8186_9204 = G__9221;
count__8187_9205 = G__9222;
i__8188_9206 = G__9223;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.aside.apply(null,a__7144__auto__);
};
var aside = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return aside__delegate.call(this,args__7143__auto__);};
aside.cljs$lang$maxFixedArity = 0;
aside.cljs$lang$applyTo = (function (arglist__9224){
var args__7143__auto__ = cljs.core.seq(arglist__9224);
return aside__delegate(args__7143__auto__);
});
aside.cljs$core$IFn$_invoke$arity$variadic = aside__delegate;
return aside;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.audio = (function() { 
var audio__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8193_9225 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8194_9226 = null;var count__8195_9227 = 0;var i__8196_9228 = 0;while(true){
if((i__8196_9228 < count__8195_9227))
{var arg__7145__auto___9229 = cljs.core._nth.call(null,chunk__8194_9226,i__8196_9228);a__7144__auto__.push(arg__7145__auto___9229);
{
var G__9230 = seq__8193_9225;
var G__9231 = chunk__8194_9226;
var G__9232 = count__8195_9227;
var G__9233 = (i__8196_9228 + 1);
seq__8193_9225 = G__9230;
chunk__8194_9226 = G__9231;
count__8195_9227 = G__9232;
i__8196_9228 = G__9233;
continue;
}
} else
{var temp__4092__auto___9234 = cljs.core.seq.call(null,seq__8193_9225);if(temp__4092__auto___9234)
{var seq__8193_9235__$1 = temp__4092__auto___9234;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8193_9235__$1))
{var c__5633__auto___9236 = cljs.core.chunk_first.call(null,seq__8193_9235__$1);{
var G__9237 = cljs.core.chunk_rest.call(null,seq__8193_9235__$1);
var G__9238 = c__5633__auto___9236;
var G__9239 = cljs.core.count.call(null,c__5633__auto___9236);
var G__9240 = 0;
seq__8193_9225 = G__9237;
chunk__8194_9226 = G__9238;
count__8195_9227 = G__9239;
i__8196_9228 = G__9240;
continue;
}
} else
{var arg__7145__auto___9241 = cljs.core.first.call(null,seq__8193_9235__$1);a__7144__auto__.push(arg__7145__auto___9241);
{
var G__9242 = cljs.core.next.call(null,seq__8193_9235__$1);
var G__9243 = null;
var G__9244 = 0;
var G__9245 = 0;
seq__8193_9225 = G__9242;
chunk__8194_9226 = G__9243;
count__8195_9227 = G__9244;
i__8196_9228 = G__9245;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.audio.apply(null,a__7144__auto__);
};
var audio = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return audio__delegate.call(this,args__7143__auto__);};
audio.cljs$lang$maxFixedArity = 0;
audio.cljs$lang$applyTo = (function (arglist__9246){
var args__7143__auto__ = cljs.core.seq(arglist__9246);
return audio__delegate(args__7143__auto__);
});
audio.cljs$core$IFn$_invoke$arity$variadic = audio__delegate;
return audio;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.b = (function() { 
var b__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8201_9247 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8202_9248 = null;var count__8203_9249 = 0;var i__8204_9250 = 0;while(true){
if((i__8204_9250 < count__8203_9249))
{var arg__7145__auto___9251 = cljs.core._nth.call(null,chunk__8202_9248,i__8204_9250);a__7144__auto__.push(arg__7145__auto___9251);
{
var G__9252 = seq__8201_9247;
var G__9253 = chunk__8202_9248;
var G__9254 = count__8203_9249;
var G__9255 = (i__8204_9250 + 1);
seq__8201_9247 = G__9252;
chunk__8202_9248 = G__9253;
count__8203_9249 = G__9254;
i__8204_9250 = G__9255;
continue;
}
} else
{var temp__4092__auto___9256 = cljs.core.seq.call(null,seq__8201_9247);if(temp__4092__auto___9256)
{var seq__8201_9257__$1 = temp__4092__auto___9256;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8201_9257__$1))
{var c__5633__auto___9258 = cljs.core.chunk_first.call(null,seq__8201_9257__$1);{
var G__9259 = cljs.core.chunk_rest.call(null,seq__8201_9257__$1);
var G__9260 = c__5633__auto___9258;
var G__9261 = cljs.core.count.call(null,c__5633__auto___9258);
var G__9262 = 0;
seq__8201_9247 = G__9259;
chunk__8202_9248 = G__9260;
count__8203_9249 = G__9261;
i__8204_9250 = G__9262;
continue;
}
} else
{var arg__7145__auto___9263 = cljs.core.first.call(null,seq__8201_9257__$1);a__7144__auto__.push(arg__7145__auto___9263);
{
var G__9264 = cljs.core.next.call(null,seq__8201_9257__$1);
var G__9265 = null;
var G__9266 = 0;
var G__9267 = 0;
seq__8201_9247 = G__9264;
chunk__8202_9248 = G__9265;
count__8203_9249 = G__9266;
i__8204_9250 = G__9267;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.b.apply(null,a__7144__auto__);
};
var b = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return b__delegate.call(this,args__7143__auto__);};
b.cljs$lang$maxFixedArity = 0;
b.cljs$lang$applyTo = (function (arglist__9268){
var args__7143__auto__ = cljs.core.seq(arglist__9268);
return b__delegate(args__7143__auto__);
});
b.cljs$core$IFn$_invoke$arity$variadic = b__delegate;
return b;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.base = (function() { 
var base__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8209_9269 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8210_9270 = null;var count__8211_9271 = 0;var i__8212_9272 = 0;while(true){
if((i__8212_9272 < count__8211_9271))
{var arg__7145__auto___9273 = cljs.core._nth.call(null,chunk__8210_9270,i__8212_9272);a__7144__auto__.push(arg__7145__auto___9273);
{
var G__9274 = seq__8209_9269;
var G__9275 = chunk__8210_9270;
var G__9276 = count__8211_9271;
var G__9277 = (i__8212_9272 + 1);
seq__8209_9269 = G__9274;
chunk__8210_9270 = G__9275;
count__8211_9271 = G__9276;
i__8212_9272 = G__9277;
continue;
}
} else
{var temp__4092__auto___9278 = cljs.core.seq.call(null,seq__8209_9269);if(temp__4092__auto___9278)
{var seq__8209_9279__$1 = temp__4092__auto___9278;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8209_9279__$1))
{var c__5633__auto___9280 = cljs.core.chunk_first.call(null,seq__8209_9279__$1);{
var G__9281 = cljs.core.chunk_rest.call(null,seq__8209_9279__$1);
var G__9282 = c__5633__auto___9280;
var G__9283 = cljs.core.count.call(null,c__5633__auto___9280);
var G__9284 = 0;
seq__8209_9269 = G__9281;
chunk__8210_9270 = G__9282;
count__8211_9271 = G__9283;
i__8212_9272 = G__9284;
continue;
}
} else
{var arg__7145__auto___9285 = cljs.core.first.call(null,seq__8209_9279__$1);a__7144__auto__.push(arg__7145__auto___9285);
{
var G__9286 = cljs.core.next.call(null,seq__8209_9279__$1);
var G__9287 = null;
var G__9288 = 0;
var G__9289 = 0;
seq__8209_9269 = G__9286;
chunk__8210_9270 = G__9287;
count__8211_9271 = G__9288;
i__8212_9272 = G__9289;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.base.apply(null,a__7144__auto__);
};
var base = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return base__delegate.call(this,args__7143__auto__);};
base.cljs$lang$maxFixedArity = 0;
base.cljs$lang$applyTo = (function (arglist__9290){
var args__7143__auto__ = cljs.core.seq(arglist__9290);
return base__delegate(args__7143__auto__);
});
base.cljs$core$IFn$_invoke$arity$variadic = base__delegate;
return base;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.bdi = (function() { 
var bdi__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8217_9291 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8218_9292 = null;var count__8219_9293 = 0;var i__8220_9294 = 0;while(true){
if((i__8220_9294 < count__8219_9293))
{var arg__7145__auto___9295 = cljs.core._nth.call(null,chunk__8218_9292,i__8220_9294);a__7144__auto__.push(arg__7145__auto___9295);
{
var G__9296 = seq__8217_9291;
var G__9297 = chunk__8218_9292;
var G__9298 = count__8219_9293;
var G__9299 = (i__8220_9294 + 1);
seq__8217_9291 = G__9296;
chunk__8218_9292 = G__9297;
count__8219_9293 = G__9298;
i__8220_9294 = G__9299;
continue;
}
} else
{var temp__4092__auto___9300 = cljs.core.seq.call(null,seq__8217_9291);if(temp__4092__auto___9300)
{var seq__8217_9301__$1 = temp__4092__auto___9300;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8217_9301__$1))
{var c__5633__auto___9302 = cljs.core.chunk_first.call(null,seq__8217_9301__$1);{
var G__9303 = cljs.core.chunk_rest.call(null,seq__8217_9301__$1);
var G__9304 = c__5633__auto___9302;
var G__9305 = cljs.core.count.call(null,c__5633__auto___9302);
var G__9306 = 0;
seq__8217_9291 = G__9303;
chunk__8218_9292 = G__9304;
count__8219_9293 = G__9305;
i__8220_9294 = G__9306;
continue;
}
} else
{var arg__7145__auto___9307 = cljs.core.first.call(null,seq__8217_9301__$1);a__7144__auto__.push(arg__7145__auto___9307);
{
var G__9308 = cljs.core.next.call(null,seq__8217_9301__$1);
var G__9309 = null;
var G__9310 = 0;
var G__9311 = 0;
seq__8217_9291 = G__9308;
chunk__8218_9292 = G__9309;
count__8219_9293 = G__9310;
i__8220_9294 = G__9311;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.bdi.apply(null,a__7144__auto__);
};
var bdi = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return bdi__delegate.call(this,args__7143__auto__);};
bdi.cljs$lang$maxFixedArity = 0;
bdi.cljs$lang$applyTo = (function (arglist__9312){
var args__7143__auto__ = cljs.core.seq(arglist__9312);
return bdi__delegate(args__7143__auto__);
});
bdi.cljs$core$IFn$_invoke$arity$variadic = bdi__delegate;
return bdi;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.bdo = (function() { 
var bdo__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8225_9313 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8226_9314 = null;var count__8227_9315 = 0;var i__8228_9316 = 0;while(true){
if((i__8228_9316 < count__8227_9315))
{var arg__7145__auto___9317 = cljs.core._nth.call(null,chunk__8226_9314,i__8228_9316);a__7144__auto__.push(arg__7145__auto___9317);
{
var G__9318 = seq__8225_9313;
var G__9319 = chunk__8226_9314;
var G__9320 = count__8227_9315;
var G__9321 = (i__8228_9316 + 1);
seq__8225_9313 = G__9318;
chunk__8226_9314 = G__9319;
count__8227_9315 = G__9320;
i__8228_9316 = G__9321;
continue;
}
} else
{var temp__4092__auto___9322 = cljs.core.seq.call(null,seq__8225_9313);if(temp__4092__auto___9322)
{var seq__8225_9323__$1 = temp__4092__auto___9322;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8225_9323__$1))
{var c__5633__auto___9324 = cljs.core.chunk_first.call(null,seq__8225_9323__$1);{
var G__9325 = cljs.core.chunk_rest.call(null,seq__8225_9323__$1);
var G__9326 = c__5633__auto___9324;
var G__9327 = cljs.core.count.call(null,c__5633__auto___9324);
var G__9328 = 0;
seq__8225_9313 = G__9325;
chunk__8226_9314 = G__9326;
count__8227_9315 = G__9327;
i__8228_9316 = G__9328;
continue;
}
} else
{var arg__7145__auto___9329 = cljs.core.first.call(null,seq__8225_9323__$1);a__7144__auto__.push(arg__7145__auto___9329);
{
var G__9330 = cljs.core.next.call(null,seq__8225_9323__$1);
var G__9331 = null;
var G__9332 = 0;
var G__9333 = 0;
seq__8225_9313 = G__9330;
chunk__8226_9314 = G__9331;
count__8227_9315 = G__9332;
i__8228_9316 = G__9333;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.bdo.apply(null,a__7144__auto__);
};
var bdo = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return bdo__delegate.call(this,args__7143__auto__);};
bdo.cljs$lang$maxFixedArity = 0;
bdo.cljs$lang$applyTo = (function (arglist__9334){
var args__7143__auto__ = cljs.core.seq(arglist__9334);
return bdo__delegate(args__7143__auto__);
});
bdo.cljs$core$IFn$_invoke$arity$variadic = bdo__delegate;
return bdo;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.big = (function() { 
var big__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8233_9335 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8234_9336 = null;var count__8235_9337 = 0;var i__8236_9338 = 0;while(true){
if((i__8236_9338 < count__8235_9337))
{var arg__7145__auto___9339 = cljs.core._nth.call(null,chunk__8234_9336,i__8236_9338);a__7144__auto__.push(arg__7145__auto___9339);
{
var G__9340 = seq__8233_9335;
var G__9341 = chunk__8234_9336;
var G__9342 = count__8235_9337;
var G__9343 = (i__8236_9338 + 1);
seq__8233_9335 = G__9340;
chunk__8234_9336 = G__9341;
count__8235_9337 = G__9342;
i__8236_9338 = G__9343;
continue;
}
} else
{var temp__4092__auto___9344 = cljs.core.seq.call(null,seq__8233_9335);if(temp__4092__auto___9344)
{var seq__8233_9345__$1 = temp__4092__auto___9344;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8233_9345__$1))
{var c__5633__auto___9346 = cljs.core.chunk_first.call(null,seq__8233_9345__$1);{
var G__9347 = cljs.core.chunk_rest.call(null,seq__8233_9345__$1);
var G__9348 = c__5633__auto___9346;
var G__9349 = cljs.core.count.call(null,c__5633__auto___9346);
var G__9350 = 0;
seq__8233_9335 = G__9347;
chunk__8234_9336 = G__9348;
count__8235_9337 = G__9349;
i__8236_9338 = G__9350;
continue;
}
} else
{var arg__7145__auto___9351 = cljs.core.first.call(null,seq__8233_9345__$1);a__7144__auto__.push(arg__7145__auto___9351);
{
var G__9352 = cljs.core.next.call(null,seq__8233_9345__$1);
var G__9353 = null;
var G__9354 = 0;
var G__9355 = 0;
seq__8233_9335 = G__9352;
chunk__8234_9336 = G__9353;
count__8235_9337 = G__9354;
i__8236_9338 = G__9355;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.big.apply(null,a__7144__auto__);
};
var big = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return big__delegate.call(this,args__7143__auto__);};
big.cljs$lang$maxFixedArity = 0;
big.cljs$lang$applyTo = (function (arglist__9356){
var args__7143__auto__ = cljs.core.seq(arglist__9356);
return big__delegate(args__7143__auto__);
});
big.cljs$core$IFn$_invoke$arity$variadic = big__delegate;
return big;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.blockquote = (function() { 
var blockquote__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8241_9357 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8242_9358 = null;var count__8243_9359 = 0;var i__8244_9360 = 0;while(true){
if((i__8244_9360 < count__8243_9359))
{var arg__7145__auto___9361 = cljs.core._nth.call(null,chunk__8242_9358,i__8244_9360);a__7144__auto__.push(arg__7145__auto___9361);
{
var G__9362 = seq__8241_9357;
var G__9363 = chunk__8242_9358;
var G__9364 = count__8243_9359;
var G__9365 = (i__8244_9360 + 1);
seq__8241_9357 = G__9362;
chunk__8242_9358 = G__9363;
count__8243_9359 = G__9364;
i__8244_9360 = G__9365;
continue;
}
} else
{var temp__4092__auto___9366 = cljs.core.seq.call(null,seq__8241_9357);if(temp__4092__auto___9366)
{var seq__8241_9367__$1 = temp__4092__auto___9366;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8241_9367__$1))
{var c__5633__auto___9368 = cljs.core.chunk_first.call(null,seq__8241_9367__$1);{
var G__9369 = cljs.core.chunk_rest.call(null,seq__8241_9367__$1);
var G__9370 = c__5633__auto___9368;
var G__9371 = cljs.core.count.call(null,c__5633__auto___9368);
var G__9372 = 0;
seq__8241_9357 = G__9369;
chunk__8242_9358 = G__9370;
count__8243_9359 = G__9371;
i__8244_9360 = G__9372;
continue;
}
} else
{var arg__7145__auto___9373 = cljs.core.first.call(null,seq__8241_9367__$1);a__7144__auto__.push(arg__7145__auto___9373);
{
var G__9374 = cljs.core.next.call(null,seq__8241_9367__$1);
var G__9375 = null;
var G__9376 = 0;
var G__9377 = 0;
seq__8241_9357 = G__9374;
chunk__8242_9358 = G__9375;
count__8243_9359 = G__9376;
i__8244_9360 = G__9377;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.blockquote.apply(null,a__7144__auto__);
};
var blockquote = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return blockquote__delegate.call(this,args__7143__auto__);};
blockquote.cljs$lang$maxFixedArity = 0;
blockquote.cljs$lang$applyTo = (function (arglist__9378){
var args__7143__auto__ = cljs.core.seq(arglist__9378);
return blockquote__delegate(args__7143__auto__);
});
blockquote.cljs$core$IFn$_invoke$arity$variadic = blockquote__delegate;
return blockquote;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.body = (function() { 
var body__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8249_9379 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8250_9380 = null;var count__8251_9381 = 0;var i__8252_9382 = 0;while(true){
if((i__8252_9382 < count__8251_9381))
{var arg__7145__auto___9383 = cljs.core._nth.call(null,chunk__8250_9380,i__8252_9382);a__7144__auto__.push(arg__7145__auto___9383);
{
var G__9384 = seq__8249_9379;
var G__9385 = chunk__8250_9380;
var G__9386 = count__8251_9381;
var G__9387 = (i__8252_9382 + 1);
seq__8249_9379 = G__9384;
chunk__8250_9380 = G__9385;
count__8251_9381 = G__9386;
i__8252_9382 = G__9387;
continue;
}
} else
{var temp__4092__auto___9388 = cljs.core.seq.call(null,seq__8249_9379);if(temp__4092__auto___9388)
{var seq__8249_9389__$1 = temp__4092__auto___9388;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8249_9389__$1))
{var c__5633__auto___9390 = cljs.core.chunk_first.call(null,seq__8249_9389__$1);{
var G__9391 = cljs.core.chunk_rest.call(null,seq__8249_9389__$1);
var G__9392 = c__5633__auto___9390;
var G__9393 = cljs.core.count.call(null,c__5633__auto___9390);
var G__9394 = 0;
seq__8249_9379 = G__9391;
chunk__8250_9380 = G__9392;
count__8251_9381 = G__9393;
i__8252_9382 = G__9394;
continue;
}
} else
{var arg__7145__auto___9395 = cljs.core.first.call(null,seq__8249_9389__$1);a__7144__auto__.push(arg__7145__auto___9395);
{
var G__9396 = cljs.core.next.call(null,seq__8249_9389__$1);
var G__9397 = null;
var G__9398 = 0;
var G__9399 = 0;
seq__8249_9379 = G__9396;
chunk__8250_9380 = G__9397;
count__8251_9381 = G__9398;
i__8252_9382 = G__9399;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.body.apply(null,a__7144__auto__);
};
var body = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return body__delegate.call(this,args__7143__auto__);};
body.cljs$lang$maxFixedArity = 0;
body.cljs$lang$applyTo = (function (arglist__9400){
var args__7143__auto__ = cljs.core.seq(arglist__9400);
return body__delegate(args__7143__auto__);
});
body.cljs$core$IFn$_invoke$arity$variadic = body__delegate;
return body;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.br = (function() { 
var br__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8257_9401 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8258_9402 = null;var count__8259_9403 = 0;var i__8260_9404 = 0;while(true){
if((i__8260_9404 < count__8259_9403))
{var arg__7145__auto___9405 = cljs.core._nth.call(null,chunk__8258_9402,i__8260_9404);a__7144__auto__.push(arg__7145__auto___9405);
{
var G__9406 = seq__8257_9401;
var G__9407 = chunk__8258_9402;
var G__9408 = count__8259_9403;
var G__9409 = (i__8260_9404 + 1);
seq__8257_9401 = G__9406;
chunk__8258_9402 = G__9407;
count__8259_9403 = G__9408;
i__8260_9404 = G__9409;
continue;
}
} else
{var temp__4092__auto___9410 = cljs.core.seq.call(null,seq__8257_9401);if(temp__4092__auto___9410)
{var seq__8257_9411__$1 = temp__4092__auto___9410;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8257_9411__$1))
{var c__5633__auto___9412 = cljs.core.chunk_first.call(null,seq__8257_9411__$1);{
var G__9413 = cljs.core.chunk_rest.call(null,seq__8257_9411__$1);
var G__9414 = c__5633__auto___9412;
var G__9415 = cljs.core.count.call(null,c__5633__auto___9412);
var G__9416 = 0;
seq__8257_9401 = G__9413;
chunk__8258_9402 = G__9414;
count__8259_9403 = G__9415;
i__8260_9404 = G__9416;
continue;
}
} else
{var arg__7145__auto___9417 = cljs.core.first.call(null,seq__8257_9411__$1);a__7144__auto__.push(arg__7145__auto___9417);
{
var G__9418 = cljs.core.next.call(null,seq__8257_9411__$1);
var G__9419 = null;
var G__9420 = 0;
var G__9421 = 0;
seq__8257_9401 = G__9418;
chunk__8258_9402 = G__9419;
count__8259_9403 = G__9420;
i__8260_9404 = G__9421;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.br.apply(null,a__7144__auto__);
};
var br = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return br__delegate.call(this,args__7143__auto__);};
br.cljs$lang$maxFixedArity = 0;
br.cljs$lang$applyTo = (function (arglist__9422){
var args__7143__auto__ = cljs.core.seq(arglist__9422);
return br__delegate(args__7143__auto__);
});
br.cljs$core$IFn$_invoke$arity$variadic = br__delegate;
return br;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.button = (function() { 
var button__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8265_9423 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8266_9424 = null;var count__8267_9425 = 0;var i__8268_9426 = 0;while(true){
if((i__8268_9426 < count__8267_9425))
{var arg__7145__auto___9427 = cljs.core._nth.call(null,chunk__8266_9424,i__8268_9426);a__7144__auto__.push(arg__7145__auto___9427);
{
var G__9428 = seq__8265_9423;
var G__9429 = chunk__8266_9424;
var G__9430 = count__8267_9425;
var G__9431 = (i__8268_9426 + 1);
seq__8265_9423 = G__9428;
chunk__8266_9424 = G__9429;
count__8267_9425 = G__9430;
i__8268_9426 = G__9431;
continue;
}
} else
{var temp__4092__auto___9432 = cljs.core.seq.call(null,seq__8265_9423);if(temp__4092__auto___9432)
{var seq__8265_9433__$1 = temp__4092__auto___9432;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8265_9433__$1))
{var c__5633__auto___9434 = cljs.core.chunk_first.call(null,seq__8265_9433__$1);{
var G__9435 = cljs.core.chunk_rest.call(null,seq__8265_9433__$1);
var G__9436 = c__5633__auto___9434;
var G__9437 = cljs.core.count.call(null,c__5633__auto___9434);
var G__9438 = 0;
seq__8265_9423 = G__9435;
chunk__8266_9424 = G__9436;
count__8267_9425 = G__9437;
i__8268_9426 = G__9438;
continue;
}
} else
{var arg__7145__auto___9439 = cljs.core.first.call(null,seq__8265_9433__$1);a__7144__auto__.push(arg__7145__auto___9439);
{
var G__9440 = cljs.core.next.call(null,seq__8265_9433__$1);
var G__9441 = null;
var G__9442 = 0;
var G__9443 = 0;
seq__8265_9423 = G__9440;
chunk__8266_9424 = G__9441;
count__8267_9425 = G__9442;
i__8268_9426 = G__9443;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.button.apply(null,a__7144__auto__);
};
var button = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return button__delegate.call(this,args__7143__auto__);};
button.cljs$lang$maxFixedArity = 0;
button.cljs$lang$applyTo = (function (arglist__9444){
var args__7143__auto__ = cljs.core.seq(arglist__9444);
return button__delegate(args__7143__auto__);
});
button.cljs$core$IFn$_invoke$arity$variadic = button__delegate;
return button;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.canvas = (function() { 
var canvas__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8273_9445 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8274_9446 = null;var count__8275_9447 = 0;var i__8276_9448 = 0;while(true){
if((i__8276_9448 < count__8275_9447))
{var arg__7145__auto___9449 = cljs.core._nth.call(null,chunk__8274_9446,i__8276_9448);a__7144__auto__.push(arg__7145__auto___9449);
{
var G__9450 = seq__8273_9445;
var G__9451 = chunk__8274_9446;
var G__9452 = count__8275_9447;
var G__9453 = (i__8276_9448 + 1);
seq__8273_9445 = G__9450;
chunk__8274_9446 = G__9451;
count__8275_9447 = G__9452;
i__8276_9448 = G__9453;
continue;
}
} else
{var temp__4092__auto___9454 = cljs.core.seq.call(null,seq__8273_9445);if(temp__4092__auto___9454)
{var seq__8273_9455__$1 = temp__4092__auto___9454;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8273_9455__$1))
{var c__5633__auto___9456 = cljs.core.chunk_first.call(null,seq__8273_9455__$1);{
var G__9457 = cljs.core.chunk_rest.call(null,seq__8273_9455__$1);
var G__9458 = c__5633__auto___9456;
var G__9459 = cljs.core.count.call(null,c__5633__auto___9456);
var G__9460 = 0;
seq__8273_9445 = G__9457;
chunk__8274_9446 = G__9458;
count__8275_9447 = G__9459;
i__8276_9448 = G__9460;
continue;
}
} else
{var arg__7145__auto___9461 = cljs.core.first.call(null,seq__8273_9455__$1);a__7144__auto__.push(arg__7145__auto___9461);
{
var G__9462 = cljs.core.next.call(null,seq__8273_9455__$1);
var G__9463 = null;
var G__9464 = 0;
var G__9465 = 0;
seq__8273_9445 = G__9462;
chunk__8274_9446 = G__9463;
count__8275_9447 = G__9464;
i__8276_9448 = G__9465;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.canvas.apply(null,a__7144__auto__);
};
var canvas = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return canvas__delegate.call(this,args__7143__auto__);};
canvas.cljs$lang$maxFixedArity = 0;
canvas.cljs$lang$applyTo = (function (arglist__9466){
var args__7143__auto__ = cljs.core.seq(arglist__9466);
return canvas__delegate(args__7143__auto__);
});
canvas.cljs$core$IFn$_invoke$arity$variadic = canvas__delegate;
return canvas;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.caption = (function() { 
var caption__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8281_9467 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8282_9468 = null;var count__8283_9469 = 0;var i__8284_9470 = 0;while(true){
if((i__8284_9470 < count__8283_9469))
{var arg__7145__auto___9471 = cljs.core._nth.call(null,chunk__8282_9468,i__8284_9470);a__7144__auto__.push(arg__7145__auto___9471);
{
var G__9472 = seq__8281_9467;
var G__9473 = chunk__8282_9468;
var G__9474 = count__8283_9469;
var G__9475 = (i__8284_9470 + 1);
seq__8281_9467 = G__9472;
chunk__8282_9468 = G__9473;
count__8283_9469 = G__9474;
i__8284_9470 = G__9475;
continue;
}
} else
{var temp__4092__auto___9476 = cljs.core.seq.call(null,seq__8281_9467);if(temp__4092__auto___9476)
{var seq__8281_9477__$1 = temp__4092__auto___9476;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8281_9477__$1))
{var c__5633__auto___9478 = cljs.core.chunk_first.call(null,seq__8281_9477__$1);{
var G__9479 = cljs.core.chunk_rest.call(null,seq__8281_9477__$1);
var G__9480 = c__5633__auto___9478;
var G__9481 = cljs.core.count.call(null,c__5633__auto___9478);
var G__9482 = 0;
seq__8281_9467 = G__9479;
chunk__8282_9468 = G__9480;
count__8283_9469 = G__9481;
i__8284_9470 = G__9482;
continue;
}
} else
{var arg__7145__auto___9483 = cljs.core.first.call(null,seq__8281_9477__$1);a__7144__auto__.push(arg__7145__auto___9483);
{
var G__9484 = cljs.core.next.call(null,seq__8281_9477__$1);
var G__9485 = null;
var G__9486 = 0;
var G__9487 = 0;
seq__8281_9467 = G__9484;
chunk__8282_9468 = G__9485;
count__8283_9469 = G__9486;
i__8284_9470 = G__9487;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.caption.apply(null,a__7144__auto__);
};
var caption = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return caption__delegate.call(this,args__7143__auto__);};
caption.cljs$lang$maxFixedArity = 0;
caption.cljs$lang$applyTo = (function (arglist__9488){
var args__7143__auto__ = cljs.core.seq(arglist__9488);
return caption__delegate(args__7143__auto__);
});
caption.cljs$core$IFn$_invoke$arity$variadic = caption__delegate;
return caption;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.cite = (function() { 
var cite__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8289_9489 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8290_9490 = null;var count__8291_9491 = 0;var i__8292_9492 = 0;while(true){
if((i__8292_9492 < count__8291_9491))
{var arg__7145__auto___9493 = cljs.core._nth.call(null,chunk__8290_9490,i__8292_9492);a__7144__auto__.push(arg__7145__auto___9493);
{
var G__9494 = seq__8289_9489;
var G__9495 = chunk__8290_9490;
var G__9496 = count__8291_9491;
var G__9497 = (i__8292_9492 + 1);
seq__8289_9489 = G__9494;
chunk__8290_9490 = G__9495;
count__8291_9491 = G__9496;
i__8292_9492 = G__9497;
continue;
}
} else
{var temp__4092__auto___9498 = cljs.core.seq.call(null,seq__8289_9489);if(temp__4092__auto___9498)
{var seq__8289_9499__$1 = temp__4092__auto___9498;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8289_9499__$1))
{var c__5633__auto___9500 = cljs.core.chunk_first.call(null,seq__8289_9499__$1);{
var G__9501 = cljs.core.chunk_rest.call(null,seq__8289_9499__$1);
var G__9502 = c__5633__auto___9500;
var G__9503 = cljs.core.count.call(null,c__5633__auto___9500);
var G__9504 = 0;
seq__8289_9489 = G__9501;
chunk__8290_9490 = G__9502;
count__8291_9491 = G__9503;
i__8292_9492 = G__9504;
continue;
}
} else
{var arg__7145__auto___9505 = cljs.core.first.call(null,seq__8289_9499__$1);a__7144__auto__.push(arg__7145__auto___9505);
{
var G__9506 = cljs.core.next.call(null,seq__8289_9499__$1);
var G__9507 = null;
var G__9508 = 0;
var G__9509 = 0;
seq__8289_9489 = G__9506;
chunk__8290_9490 = G__9507;
count__8291_9491 = G__9508;
i__8292_9492 = G__9509;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.cite.apply(null,a__7144__auto__);
};
var cite = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return cite__delegate.call(this,args__7143__auto__);};
cite.cljs$lang$maxFixedArity = 0;
cite.cljs$lang$applyTo = (function (arglist__9510){
var args__7143__auto__ = cljs.core.seq(arglist__9510);
return cite__delegate(args__7143__auto__);
});
cite.cljs$core$IFn$_invoke$arity$variadic = cite__delegate;
return cite;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.code = (function() { 
var code__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8297_9511 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8298_9512 = null;var count__8299_9513 = 0;var i__8300_9514 = 0;while(true){
if((i__8300_9514 < count__8299_9513))
{var arg__7145__auto___9515 = cljs.core._nth.call(null,chunk__8298_9512,i__8300_9514);a__7144__auto__.push(arg__7145__auto___9515);
{
var G__9516 = seq__8297_9511;
var G__9517 = chunk__8298_9512;
var G__9518 = count__8299_9513;
var G__9519 = (i__8300_9514 + 1);
seq__8297_9511 = G__9516;
chunk__8298_9512 = G__9517;
count__8299_9513 = G__9518;
i__8300_9514 = G__9519;
continue;
}
} else
{var temp__4092__auto___9520 = cljs.core.seq.call(null,seq__8297_9511);if(temp__4092__auto___9520)
{var seq__8297_9521__$1 = temp__4092__auto___9520;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8297_9521__$1))
{var c__5633__auto___9522 = cljs.core.chunk_first.call(null,seq__8297_9521__$1);{
var G__9523 = cljs.core.chunk_rest.call(null,seq__8297_9521__$1);
var G__9524 = c__5633__auto___9522;
var G__9525 = cljs.core.count.call(null,c__5633__auto___9522);
var G__9526 = 0;
seq__8297_9511 = G__9523;
chunk__8298_9512 = G__9524;
count__8299_9513 = G__9525;
i__8300_9514 = G__9526;
continue;
}
} else
{var arg__7145__auto___9527 = cljs.core.first.call(null,seq__8297_9521__$1);a__7144__auto__.push(arg__7145__auto___9527);
{
var G__9528 = cljs.core.next.call(null,seq__8297_9521__$1);
var G__9529 = null;
var G__9530 = 0;
var G__9531 = 0;
seq__8297_9511 = G__9528;
chunk__8298_9512 = G__9529;
count__8299_9513 = G__9530;
i__8300_9514 = G__9531;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.code.apply(null,a__7144__auto__);
};
var code = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return code__delegate.call(this,args__7143__auto__);};
code.cljs$lang$maxFixedArity = 0;
code.cljs$lang$applyTo = (function (arglist__9532){
var args__7143__auto__ = cljs.core.seq(arglist__9532);
return code__delegate(args__7143__auto__);
});
code.cljs$core$IFn$_invoke$arity$variadic = code__delegate;
return code;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.col = (function() { 
var col__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8305_9533 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8306_9534 = null;var count__8307_9535 = 0;var i__8308_9536 = 0;while(true){
if((i__8308_9536 < count__8307_9535))
{var arg__7145__auto___9537 = cljs.core._nth.call(null,chunk__8306_9534,i__8308_9536);a__7144__auto__.push(arg__7145__auto___9537);
{
var G__9538 = seq__8305_9533;
var G__9539 = chunk__8306_9534;
var G__9540 = count__8307_9535;
var G__9541 = (i__8308_9536 + 1);
seq__8305_9533 = G__9538;
chunk__8306_9534 = G__9539;
count__8307_9535 = G__9540;
i__8308_9536 = G__9541;
continue;
}
} else
{var temp__4092__auto___9542 = cljs.core.seq.call(null,seq__8305_9533);if(temp__4092__auto___9542)
{var seq__8305_9543__$1 = temp__4092__auto___9542;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8305_9543__$1))
{var c__5633__auto___9544 = cljs.core.chunk_first.call(null,seq__8305_9543__$1);{
var G__9545 = cljs.core.chunk_rest.call(null,seq__8305_9543__$1);
var G__9546 = c__5633__auto___9544;
var G__9547 = cljs.core.count.call(null,c__5633__auto___9544);
var G__9548 = 0;
seq__8305_9533 = G__9545;
chunk__8306_9534 = G__9546;
count__8307_9535 = G__9547;
i__8308_9536 = G__9548;
continue;
}
} else
{var arg__7145__auto___9549 = cljs.core.first.call(null,seq__8305_9543__$1);a__7144__auto__.push(arg__7145__auto___9549);
{
var G__9550 = cljs.core.next.call(null,seq__8305_9543__$1);
var G__9551 = null;
var G__9552 = 0;
var G__9553 = 0;
seq__8305_9533 = G__9550;
chunk__8306_9534 = G__9551;
count__8307_9535 = G__9552;
i__8308_9536 = G__9553;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.col.apply(null,a__7144__auto__);
};
var col = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return col__delegate.call(this,args__7143__auto__);};
col.cljs$lang$maxFixedArity = 0;
col.cljs$lang$applyTo = (function (arglist__9554){
var args__7143__auto__ = cljs.core.seq(arglist__9554);
return col__delegate(args__7143__auto__);
});
col.cljs$core$IFn$_invoke$arity$variadic = col__delegate;
return col;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.colgroup = (function() { 
var colgroup__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8313_9555 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8314_9556 = null;var count__8315_9557 = 0;var i__8316_9558 = 0;while(true){
if((i__8316_9558 < count__8315_9557))
{var arg__7145__auto___9559 = cljs.core._nth.call(null,chunk__8314_9556,i__8316_9558);a__7144__auto__.push(arg__7145__auto___9559);
{
var G__9560 = seq__8313_9555;
var G__9561 = chunk__8314_9556;
var G__9562 = count__8315_9557;
var G__9563 = (i__8316_9558 + 1);
seq__8313_9555 = G__9560;
chunk__8314_9556 = G__9561;
count__8315_9557 = G__9562;
i__8316_9558 = G__9563;
continue;
}
} else
{var temp__4092__auto___9564 = cljs.core.seq.call(null,seq__8313_9555);if(temp__4092__auto___9564)
{var seq__8313_9565__$1 = temp__4092__auto___9564;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8313_9565__$1))
{var c__5633__auto___9566 = cljs.core.chunk_first.call(null,seq__8313_9565__$1);{
var G__9567 = cljs.core.chunk_rest.call(null,seq__8313_9565__$1);
var G__9568 = c__5633__auto___9566;
var G__9569 = cljs.core.count.call(null,c__5633__auto___9566);
var G__9570 = 0;
seq__8313_9555 = G__9567;
chunk__8314_9556 = G__9568;
count__8315_9557 = G__9569;
i__8316_9558 = G__9570;
continue;
}
} else
{var arg__7145__auto___9571 = cljs.core.first.call(null,seq__8313_9565__$1);a__7144__auto__.push(arg__7145__auto___9571);
{
var G__9572 = cljs.core.next.call(null,seq__8313_9565__$1);
var G__9573 = null;
var G__9574 = 0;
var G__9575 = 0;
seq__8313_9555 = G__9572;
chunk__8314_9556 = G__9573;
count__8315_9557 = G__9574;
i__8316_9558 = G__9575;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.colgroup.apply(null,a__7144__auto__);
};
var colgroup = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return colgroup__delegate.call(this,args__7143__auto__);};
colgroup.cljs$lang$maxFixedArity = 0;
colgroup.cljs$lang$applyTo = (function (arglist__9576){
var args__7143__auto__ = cljs.core.seq(arglist__9576);
return colgroup__delegate(args__7143__auto__);
});
colgroup.cljs$core$IFn$_invoke$arity$variadic = colgroup__delegate;
return colgroup;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.data = (function() { 
var data__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8321_9577 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8322_9578 = null;var count__8323_9579 = 0;var i__8324_9580 = 0;while(true){
if((i__8324_9580 < count__8323_9579))
{var arg__7145__auto___9581 = cljs.core._nth.call(null,chunk__8322_9578,i__8324_9580);a__7144__auto__.push(arg__7145__auto___9581);
{
var G__9582 = seq__8321_9577;
var G__9583 = chunk__8322_9578;
var G__9584 = count__8323_9579;
var G__9585 = (i__8324_9580 + 1);
seq__8321_9577 = G__9582;
chunk__8322_9578 = G__9583;
count__8323_9579 = G__9584;
i__8324_9580 = G__9585;
continue;
}
} else
{var temp__4092__auto___9586 = cljs.core.seq.call(null,seq__8321_9577);if(temp__4092__auto___9586)
{var seq__8321_9587__$1 = temp__4092__auto___9586;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8321_9587__$1))
{var c__5633__auto___9588 = cljs.core.chunk_first.call(null,seq__8321_9587__$1);{
var G__9589 = cljs.core.chunk_rest.call(null,seq__8321_9587__$1);
var G__9590 = c__5633__auto___9588;
var G__9591 = cljs.core.count.call(null,c__5633__auto___9588);
var G__9592 = 0;
seq__8321_9577 = G__9589;
chunk__8322_9578 = G__9590;
count__8323_9579 = G__9591;
i__8324_9580 = G__9592;
continue;
}
} else
{var arg__7145__auto___9593 = cljs.core.first.call(null,seq__8321_9587__$1);a__7144__auto__.push(arg__7145__auto___9593);
{
var G__9594 = cljs.core.next.call(null,seq__8321_9587__$1);
var G__9595 = null;
var G__9596 = 0;
var G__9597 = 0;
seq__8321_9577 = G__9594;
chunk__8322_9578 = G__9595;
count__8323_9579 = G__9596;
i__8324_9580 = G__9597;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.data.apply(null,a__7144__auto__);
};
var data = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return data__delegate.call(this,args__7143__auto__);};
data.cljs$lang$maxFixedArity = 0;
data.cljs$lang$applyTo = (function (arglist__9598){
var args__7143__auto__ = cljs.core.seq(arglist__9598);
return data__delegate(args__7143__auto__);
});
data.cljs$core$IFn$_invoke$arity$variadic = data__delegate;
return data;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.datalist = (function() { 
var datalist__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8329_9599 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8330_9600 = null;var count__8331_9601 = 0;var i__8332_9602 = 0;while(true){
if((i__8332_9602 < count__8331_9601))
{var arg__7145__auto___9603 = cljs.core._nth.call(null,chunk__8330_9600,i__8332_9602);a__7144__auto__.push(arg__7145__auto___9603);
{
var G__9604 = seq__8329_9599;
var G__9605 = chunk__8330_9600;
var G__9606 = count__8331_9601;
var G__9607 = (i__8332_9602 + 1);
seq__8329_9599 = G__9604;
chunk__8330_9600 = G__9605;
count__8331_9601 = G__9606;
i__8332_9602 = G__9607;
continue;
}
} else
{var temp__4092__auto___9608 = cljs.core.seq.call(null,seq__8329_9599);if(temp__4092__auto___9608)
{var seq__8329_9609__$1 = temp__4092__auto___9608;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8329_9609__$1))
{var c__5633__auto___9610 = cljs.core.chunk_first.call(null,seq__8329_9609__$1);{
var G__9611 = cljs.core.chunk_rest.call(null,seq__8329_9609__$1);
var G__9612 = c__5633__auto___9610;
var G__9613 = cljs.core.count.call(null,c__5633__auto___9610);
var G__9614 = 0;
seq__8329_9599 = G__9611;
chunk__8330_9600 = G__9612;
count__8331_9601 = G__9613;
i__8332_9602 = G__9614;
continue;
}
} else
{var arg__7145__auto___9615 = cljs.core.first.call(null,seq__8329_9609__$1);a__7144__auto__.push(arg__7145__auto___9615);
{
var G__9616 = cljs.core.next.call(null,seq__8329_9609__$1);
var G__9617 = null;
var G__9618 = 0;
var G__9619 = 0;
seq__8329_9599 = G__9616;
chunk__8330_9600 = G__9617;
count__8331_9601 = G__9618;
i__8332_9602 = G__9619;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.datalist.apply(null,a__7144__auto__);
};
var datalist = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return datalist__delegate.call(this,args__7143__auto__);};
datalist.cljs$lang$maxFixedArity = 0;
datalist.cljs$lang$applyTo = (function (arglist__9620){
var args__7143__auto__ = cljs.core.seq(arglist__9620);
return datalist__delegate(args__7143__auto__);
});
datalist.cljs$core$IFn$_invoke$arity$variadic = datalist__delegate;
return datalist;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.dd = (function() { 
var dd__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8337_9621 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8338_9622 = null;var count__8339_9623 = 0;var i__8340_9624 = 0;while(true){
if((i__8340_9624 < count__8339_9623))
{var arg__7145__auto___9625 = cljs.core._nth.call(null,chunk__8338_9622,i__8340_9624);a__7144__auto__.push(arg__7145__auto___9625);
{
var G__9626 = seq__8337_9621;
var G__9627 = chunk__8338_9622;
var G__9628 = count__8339_9623;
var G__9629 = (i__8340_9624 + 1);
seq__8337_9621 = G__9626;
chunk__8338_9622 = G__9627;
count__8339_9623 = G__9628;
i__8340_9624 = G__9629;
continue;
}
} else
{var temp__4092__auto___9630 = cljs.core.seq.call(null,seq__8337_9621);if(temp__4092__auto___9630)
{var seq__8337_9631__$1 = temp__4092__auto___9630;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8337_9631__$1))
{var c__5633__auto___9632 = cljs.core.chunk_first.call(null,seq__8337_9631__$1);{
var G__9633 = cljs.core.chunk_rest.call(null,seq__8337_9631__$1);
var G__9634 = c__5633__auto___9632;
var G__9635 = cljs.core.count.call(null,c__5633__auto___9632);
var G__9636 = 0;
seq__8337_9621 = G__9633;
chunk__8338_9622 = G__9634;
count__8339_9623 = G__9635;
i__8340_9624 = G__9636;
continue;
}
} else
{var arg__7145__auto___9637 = cljs.core.first.call(null,seq__8337_9631__$1);a__7144__auto__.push(arg__7145__auto___9637);
{
var G__9638 = cljs.core.next.call(null,seq__8337_9631__$1);
var G__9639 = null;
var G__9640 = 0;
var G__9641 = 0;
seq__8337_9621 = G__9638;
chunk__8338_9622 = G__9639;
count__8339_9623 = G__9640;
i__8340_9624 = G__9641;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.dd.apply(null,a__7144__auto__);
};
var dd = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return dd__delegate.call(this,args__7143__auto__);};
dd.cljs$lang$maxFixedArity = 0;
dd.cljs$lang$applyTo = (function (arglist__9642){
var args__7143__auto__ = cljs.core.seq(arglist__9642);
return dd__delegate(args__7143__auto__);
});
dd.cljs$core$IFn$_invoke$arity$variadic = dd__delegate;
return dd;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.del = (function() { 
var del__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8345_9643 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8346_9644 = null;var count__8347_9645 = 0;var i__8348_9646 = 0;while(true){
if((i__8348_9646 < count__8347_9645))
{var arg__7145__auto___9647 = cljs.core._nth.call(null,chunk__8346_9644,i__8348_9646);a__7144__auto__.push(arg__7145__auto___9647);
{
var G__9648 = seq__8345_9643;
var G__9649 = chunk__8346_9644;
var G__9650 = count__8347_9645;
var G__9651 = (i__8348_9646 + 1);
seq__8345_9643 = G__9648;
chunk__8346_9644 = G__9649;
count__8347_9645 = G__9650;
i__8348_9646 = G__9651;
continue;
}
} else
{var temp__4092__auto___9652 = cljs.core.seq.call(null,seq__8345_9643);if(temp__4092__auto___9652)
{var seq__8345_9653__$1 = temp__4092__auto___9652;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8345_9653__$1))
{var c__5633__auto___9654 = cljs.core.chunk_first.call(null,seq__8345_9653__$1);{
var G__9655 = cljs.core.chunk_rest.call(null,seq__8345_9653__$1);
var G__9656 = c__5633__auto___9654;
var G__9657 = cljs.core.count.call(null,c__5633__auto___9654);
var G__9658 = 0;
seq__8345_9643 = G__9655;
chunk__8346_9644 = G__9656;
count__8347_9645 = G__9657;
i__8348_9646 = G__9658;
continue;
}
} else
{var arg__7145__auto___9659 = cljs.core.first.call(null,seq__8345_9653__$1);a__7144__auto__.push(arg__7145__auto___9659);
{
var G__9660 = cljs.core.next.call(null,seq__8345_9653__$1);
var G__9661 = null;
var G__9662 = 0;
var G__9663 = 0;
seq__8345_9643 = G__9660;
chunk__8346_9644 = G__9661;
count__8347_9645 = G__9662;
i__8348_9646 = G__9663;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.del.apply(null,a__7144__auto__);
};
var del = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return del__delegate.call(this,args__7143__auto__);};
del.cljs$lang$maxFixedArity = 0;
del.cljs$lang$applyTo = (function (arglist__9664){
var args__7143__auto__ = cljs.core.seq(arglist__9664);
return del__delegate(args__7143__auto__);
});
del.cljs$core$IFn$_invoke$arity$variadic = del__delegate;
return del;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.details = (function() { 
var details__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8353_9665 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8354_9666 = null;var count__8355_9667 = 0;var i__8356_9668 = 0;while(true){
if((i__8356_9668 < count__8355_9667))
{var arg__7145__auto___9669 = cljs.core._nth.call(null,chunk__8354_9666,i__8356_9668);a__7144__auto__.push(arg__7145__auto___9669);
{
var G__9670 = seq__8353_9665;
var G__9671 = chunk__8354_9666;
var G__9672 = count__8355_9667;
var G__9673 = (i__8356_9668 + 1);
seq__8353_9665 = G__9670;
chunk__8354_9666 = G__9671;
count__8355_9667 = G__9672;
i__8356_9668 = G__9673;
continue;
}
} else
{var temp__4092__auto___9674 = cljs.core.seq.call(null,seq__8353_9665);if(temp__4092__auto___9674)
{var seq__8353_9675__$1 = temp__4092__auto___9674;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8353_9675__$1))
{var c__5633__auto___9676 = cljs.core.chunk_first.call(null,seq__8353_9675__$1);{
var G__9677 = cljs.core.chunk_rest.call(null,seq__8353_9675__$1);
var G__9678 = c__5633__auto___9676;
var G__9679 = cljs.core.count.call(null,c__5633__auto___9676);
var G__9680 = 0;
seq__8353_9665 = G__9677;
chunk__8354_9666 = G__9678;
count__8355_9667 = G__9679;
i__8356_9668 = G__9680;
continue;
}
} else
{var arg__7145__auto___9681 = cljs.core.first.call(null,seq__8353_9675__$1);a__7144__auto__.push(arg__7145__auto___9681);
{
var G__9682 = cljs.core.next.call(null,seq__8353_9675__$1);
var G__9683 = null;
var G__9684 = 0;
var G__9685 = 0;
seq__8353_9665 = G__9682;
chunk__8354_9666 = G__9683;
count__8355_9667 = G__9684;
i__8356_9668 = G__9685;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.details.apply(null,a__7144__auto__);
};
var details = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return details__delegate.call(this,args__7143__auto__);};
details.cljs$lang$maxFixedArity = 0;
details.cljs$lang$applyTo = (function (arglist__9686){
var args__7143__auto__ = cljs.core.seq(arglist__9686);
return details__delegate(args__7143__auto__);
});
details.cljs$core$IFn$_invoke$arity$variadic = details__delegate;
return details;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.dfn = (function() { 
var dfn__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8361_9687 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8362_9688 = null;var count__8363_9689 = 0;var i__8364_9690 = 0;while(true){
if((i__8364_9690 < count__8363_9689))
{var arg__7145__auto___9691 = cljs.core._nth.call(null,chunk__8362_9688,i__8364_9690);a__7144__auto__.push(arg__7145__auto___9691);
{
var G__9692 = seq__8361_9687;
var G__9693 = chunk__8362_9688;
var G__9694 = count__8363_9689;
var G__9695 = (i__8364_9690 + 1);
seq__8361_9687 = G__9692;
chunk__8362_9688 = G__9693;
count__8363_9689 = G__9694;
i__8364_9690 = G__9695;
continue;
}
} else
{var temp__4092__auto___9696 = cljs.core.seq.call(null,seq__8361_9687);if(temp__4092__auto___9696)
{var seq__8361_9697__$1 = temp__4092__auto___9696;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8361_9697__$1))
{var c__5633__auto___9698 = cljs.core.chunk_first.call(null,seq__8361_9697__$1);{
var G__9699 = cljs.core.chunk_rest.call(null,seq__8361_9697__$1);
var G__9700 = c__5633__auto___9698;
var G__9701 = cljs.core.count.call(null,c__5633__auto___9698);
var G__9702 = 0;
seq__8361_9687 = G__9699;
chunk__8362_9688 = G__9700;
count__8363_9689 = G__9701;
i__8364_9690 = G__9702;
continue;
}
} else
{var arg__7145__auto___9703 = cljs.core.first.call(null,seq__8361_9697__$1);a__7144__auto__.push(arg__7145__auto___9703);
{
var G__9704 = cljs.core.next.call(null,seq__8361_9697__$1);
var G__9705 = null;
var G__9706 = 0;
var G__9707 = 0;
seq__8361_9687 = G__9704;
chunk__8362_9688 = G__9705;
count__8363_9689 = G__9706;
i__8364_9690 = G__9707;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.dfn.apply(null,a__7144__auto__);
};
var dfn = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return dfn__delegate.call(this,args__7143__auto__);};
dfn.cljs$lang$maxFixedArity = 0;
dfn.cljs$lang$applyTo = (function (arglist__9708){
var args__7143__auto__ = cljs.core.seq(arglist__9708);
return dfn__delegate(args__7143__auto__);
});
dfn.cljs$core$IFn$_invoke$arity$variadic = dfn__delegate;
return dfn;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.div = (function() { 
var div__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8369_9709 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8370_9710 = null;var count__8371_9711 = 0;var i__8372_9712 = 0;while(true){
if((i__8372_9712 < count__8371_9711))
{var arg__7145__auto___9713 = cljs.core._nth.call(null,chunk__8370_9710,i__8372_9712);a__7144__auto__.push(arg__7145__auto___9713);
{
var G__9714 = seq__8369_9709;
var G__9715 = chunk__8370_9710;
var G__9716 = count__8371_9711;
var G__9717 = (i__8372_9712 + 1);
seq__8369_9709 = G__9714;
chunk__8370_9710 = G__9715;
count__8371_9711 = G__9716;
i__8372_9712 = G__9717;
continue;
}
} else
{var temp__4092__auto___9718 = cljs.core.seq.call(null,seq__8369_9709);if(temp__4092__auto___9718)
{var seq__8369_9719__$1 = temp__4092__auto___9718;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8369_9719__$1))
{var c__5633__auto___9720 = cljs.core.chunk_first.call(null,seq__8369_9719__$1);{
var G__9721 = cljs.core.chunk_rest.call(null,seq__8369_9719__$1);
var G__9722 = c__5633__auto___9720;
var G__9723 = cljs.core.count.call(null,c__5633__auto___9720);
var G__9724 = 0;
seq__8369_9709 = G__9721;
chunk__8370_9710 = G__9722;
count__8371_9711 = G__9723;
i__8372_9712 = G__9724;
continue;
}
} else
{var arg__7145__auto___9725 = cljs.core.first.call(null,seq__8369_9719__$1);a__7144__auto__.push(arg__7145__auto___9725);
{
var G__9726 = cljs.core.next.call(null,seq__8369_9719__$1);
var G__9727 = null;
var G__9728 = 0;
var G__9729 = 0;
seq__8369_9709 = G__9726;
chunk__8370_9710 = G__9727;
count__8371_9711 = G__9728;
i__8372_9712 = G__9729;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.div.apply(null,a__7144__auto__);
};
var div = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return div__delegate.call(this,args__7143__auto__);};
div.cljs$lang$maxFixedArity = 0;
div.cljs$lang$applyTo = (function (arglist__9730){
var args__7143__auto__ = cljs.core.seq(arglist__9730);
return div__delegate(args__7143__auto__);
});
div.cljs$core$IFn$_invoke$arity$variadic = div__delegate;
return div;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.dl = (function() { 
var dl__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8377_9731 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8378_9732 = null;var count__8379_9733 = 0;var i__8380_9734 = 0;while(true){
if((i__8380_9734 < count__8379_9733))
{var arg__7145__auto___9735 = cljs.core._nth.call(null,chunk__8378_9732,i__8380_9734);a__7144__auto__.push(arg__7145__auto___9735);
{
var G__9736 = seq__8377_9731;
var G__9737 = chunk__8378_9732;
var G__9738 = count__8379_9733;
var G__9739 = (i__8380_9734 + 1);
seq__8377_9731 = G__9736;
chunk__8378_9732 = G__9737;
count__8379_9733 = G__9738;
i__8380_9734 = G__9739;
continue;
}
} else
{var temp__4092__auto___9740 = cljs.core.seq.call(null,seq__8377_9731);if(temp__4092__auto___9740)
{var seq__8377_9741__$1 = temp__4092__auto___9740;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8377_9741__$1))
{var c__5633__auto___9742 = cljs.core.chunk_first.call(null,seq__8377_9741__$1);{
var G__9743 = cljs.core.chunk_rest.call(null,seq__8377_9741__$1);
var G__9744 = c__5633__auto___9742;
var G__9745 = cljs.core.count.call(null,c__5633__auto___9742);
var G__9746 = 0;
seq__8377_9731 = G__9743;
chunk__8378_9732 = G__9744;
count__8379_9733 = G__9745;
i__8380_9734 = G__9746;
continue;
}
} else
{var arg__7145__auto___9747 = cljs.core.first.call(null,seq__8377_9741__$1);a__7144__auto__.push(arg__7145__auto___9747);
{
var G__9748 = cljs.core.next.call(null,seq__8377_9741__$1);
var G__9749 = null;
var G__9750 = 0;
var G__9751 = 0;
seq__8377_9731 = G__9748;
chunk__8378_9732 = G__9749;
count__8379_9733 = G__9750;
i__8380_9734 = G__9751;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.dl.apply(null,a__7144__auto__);
};
var dl = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return dl__delegate.call(this,args__7143__auto__);};
dl.cljs$lang$maxFixedArity = 0;
dl.cljs$lang$applyTo = (function (arglist__9752){
var args__7143__auto__ = cljs.core.seq(arglist__9752);
return dl__delegate(args__7143__auto__);
});
dl.cljs$core$IFn$_invoke$arity$variadic = dl__delegate;
return dl;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.dt = (function() { 
var dt__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8385_9753 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8386_9754 = null;var count__8387_9755 = 0;var i__8388_9756 = 0;while(true){
if((i__8388_9756 < count__8387_9755))
{var arg__7145__auto___9757 = cljs.core._nth.call(null,chunk__8386_9754,i__8388_9756);a__7144__auto__.push(arg__7145__auto___9757);
{
var G__9758 = seq__8385_9753;
var G__9759 = chunk__8386_9754;
var G__9760 = count__8387_9755;
var G__9761 = (i__8388_9756 + 1);
seq__8385_9753 = G__9758;
chunk__8386_9754 = G__9759;
count__8387_9755 = G__9760;
i__8388_9756 = G__9761;
continue;
}
} else
{var temp__4092__auto___9762 = cljs.core.seq.call(null,seq__8385_9753);if(temp__4092__auto___9762)
{var seq__8385_9763__$1 = temp__4092__auto___9762;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8385_9763__$1))
{var c__5633__auto___9764 = cljs.core.chunk_first.call(null,seq__8385_9763__$1);{
var G__9765 = cljs.core.chunk_rest.call(null,seq__8385_9763__$1);
var G__9766 = c__5633__auto___9764;
var G__9767 = cljs.core.count.call(null,c__5633__auto___9764);
var G__9768 = 0;
seq__8385_9753 = G__9765;
chunk__8386_9754 = G__9766;
count__8387_9755 = G__9767;
i__8388_9756 = G__9768;
continue;
}
} else
{var arg__7145__auto___9769 = cljs.core.first.call(null,seq__8385_9763__$1);a__7144__auto__.push(arg__7145__auto___9769);
{
var G__9770 = cljs.core.next.call(null,seq__8385_9763__$1);
var G__9771 = null;
var G__9772 = 0;
var G__9773 = 0;
seq__8385_9753 = G__9770;
chunk__8386_9754 = G__9771;
count__8387_9755 = G__9772;
i__8388_9756 = G__9773;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.dt.apply(null,a__7144__auto__);
};
var dt = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return dt__delegate.call(this,args__7143__auto__);};
dt.cljs$lang$maxFixedArity = 0;
dt.cljs$lang$applyTo = (function (arglist__9774){
var args__7143__auto__ = cljs.core.seq(arglist__9774);
return dt__delegate(args__7143__auto__);
});
dt.cljs$core$IFn$_invoke$arity$variadic = dt__delegate;
return dt;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.em = (function() { 
var em__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8393_9775 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8394_9776 = null;var count__8395_9777 = 0;var i__8396_9778 = 0;while(true){
if((i__8396_9778 < count__8395_9777))
{var arg__7145__auto___9779 = cljs.core._nth.call(null,chunk__8394_9776,i__8396_9778);a__7144__auto__.push(arg__7145__auto___9779);
{
var G__9780 = seq__8393_9775;
var G__9781 = chunk__8394_9776;
var G__9782 = count__8395_9777;
var G__9783 = (i__8396_9778 + 1);
seq__8393_9775 = G__9780;
chunk__8394_9776 = G__9781;
count__8395_9777 = G__9782;
i__8396_9778 = G__9783;
continue;
}
} else
{var temp__4092__auto___9784 = cljs.core.seq.call(null,seq__8393_9775);if(temp__4092__auto___9784)
{var seq__8393_9785__$1 = temp__4092__auto___9784;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8393_9785__$1))
{var c__5633__auto___9786 = cljs.core.chunk_first.call(null,seq__8393_9785__$1);{
var G__9787 = cljs.core.chunk_rest.call(null,seq__8393_9785__$1);
var G__9788 = c__5633__auto___9786;
var G__9789 = cljs.core.count.call(null,c__5633__auto___9786);
var G__9790 = 0;
seq__8393_9775 = G__9787;
chunk__8394_9776 = G__9788;
count__8395_9777 = G__9789;
i__8396_9778 = G__9790;
continue;
}
} else
{var arg__7145__auto___9791 = cljs.core.first.call(null,seq__8393_9785__$1);a__7144__auto__.push(arg__7145__auto___9791);
{
var G__9792 = cljs.core.next.call(null,seq__8393_9785__$1);
var G__9793 = null;
var G__9794 = 0;
var G__9795 = 0;
seq__8393_9775 = G__9792;
chunk__8394_9776 = G__9793;
count__8395_9777 = G__9794;
i__8396_9778 = G__9795;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.em.apply(null,a__7144__auto__);
};
var em = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return em__delegate.call(this,args__7143__auto__);};
em.cljs$lang$maxFixedArity = 0;
em.cljs$lang$applyTo = (function (arglist__9796){
var args__7143__auto__ = cljs.core.seq(arglist__9796);
return em__delegate(args__7143__auto__);
});
em.cljs$core$IFn$_invoke$arity$variadic = em__delegate;
return em;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.embed = (function() { 
var embed__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8409_9797 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8410_9798 = null;var count__8411_9799 = 0;var i__8412_9800 = 0;while(true){
if((i__8412_9800 < count__8411_9799))
{var arg__7145__auto___9801 = cljs.core._nth.call(null,chunk__8410_9798,i__8412_9800);a__7144__auto__.push(arg__7145__auto___9801);
{
var G__9802 = seq__8409_9797;
var G__9803 = chunk__8410_9798;
var G__9804 = count__8411_9799;
var G__9805 = (i__8412_9800 + 1);
seq__8409_9797 = G__9802;
chunk__8410_9798 = G__9803;
count__8411_9799 = G__9804;
i__8412_9800 = G__9805;
continue;
}
} else
{var temp__4092__auto___9806 = cljs.core.seq.call(null,seq__8409_9797);if(temp__4092__auto___9806)
{var seq__8409_9807__$1 = temp__4092__auto___9806;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8409_9807__$1))
{var c__5633__auto___9808 = cljs.core.chunk_first.call(null,seq__8409_9807__$1);{
var G__9809 = cljs.core.chunk_rest.call(null,seq__8409_9807__$1);
var G__9810 = c__5633__auto___9808;
var G__9811 = cljs.core.count.call(null,c__5633__auto___9808);
var G__9812 = 0;
seq__8409_9797 = G__9809;
chunk__8410_9798 = G__9810;
count__8411_9799 = G__9811;
i__8412_9800 = G__9812;
continue;
}
} else
{var arg__7145__auto___9813 = cljs.core.first.call(null,seq__8409_9807__$1);a__7144__auto__.push(arg__7145__auto___9813);
{
var G__9814 = cljs.core.next.call(null,seq__8409_9807__$1);
var G__9815 = null;
var G__9816 = 0;
var G__9817 = 0;
seq__8409_9797 = G__9814;
chunk__8410_9798 = G__9815;
count__8411_9799 = G__9816;
i__8412_9800 = G__9817;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.embed.apply(null,a__7144__auto__);
};
var embed = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return embed__delegate.call(this,args__7143__auto__);};
embed.cljs$lang$maxFixedArity = 0;
embed.cljs$lang$applyTo = (function (arglist__9818){
var args__7143__auto__ = cljs.core.seq(arglist__9818);
return embed__delegate(args__7143__auto__);
});
embed.cljs$core$IFn$_invoke$arity$variadic = embed__delegate;
return embed;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.fieldset = (function() { 
var fieldset__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8417_9819 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8418_9820 = null;var count__8419_9821 = 0;var i__8420_9822 = 0;while(true){
if((i__8420_9822 < count__8419_9821))
{var arg__7145__auto___9823 = cljs.core._nth.call(null,chunk__8418_9820,i__8420_9822);a__7144__auto__.push(arg__7145__auto___9823);
{
var G__9824 = seq__8417_9819;
var G__9825 = chunk__8418_9820;
var G__9826 = count__8419_9821;
var G__9827 = (i__8420_9822 + 1);
seq__8417_9819 = G__9824;
chunk__8418_9820 = G__9825;
count__8419_9821 = G__9826;
i__8420_9822 = G__9827;
continue;
}
} else
{var temp__4092__auto___9828 = cljs.core.seq.call(null,seq__8417_9819);if(temp__4092__auto___9828)
{var seq__8417_9829__$1 = temp__4092__auto___9828;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8417_9829__$1))
{var c__5633__auto___9830 = cljs.core.chunk_first.call(null,seq__8417_9829__$1);{
var G__9831 = cljs.core.chunk_rest.call(null,seq__8417_9829__$1);
var G__9832 = c__5633__auto___9830;
var G__9833 = cljs.core.count.call(null,c__5633__auto___9830);
var G__9834 = 0;
seq__8417_9819 = G__9831;
chunk__8418_9820 = G__9832;
count__8419_9821 = G__9833;
i__8420_9822 = G__9834;
continue;
}
} else
{var arg__7145__auto___9835 = cljs.core.first.call(null,seq__8417_9829__$1);a__7144__auto__.push(arg__7145__auto___9835);
{
var G__9836 = cljs.core.next.call(null,seq__8417_9829__$1);
var G__9837 = null;
var G__9838 = 0;
var G__9839 = 0;
seq__8417_9819 = G__9836;
chunk__8418_9820 = G__9837;
count__8419_9821 = G__9838;
i__8420_9822 = G__9839;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.fieldset.apply(null,a__7144__auto__);
};
var fieldset = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return fieldset__delegate.call(this,args__7143__auto__);};
fieldset.cljs$lang$maxFixedArity = 0;
fieldset.cljs$lang$applyTo = (function (arglist__9840){
var args__7143__auto__ = cljs.core.seq(arglist__9840);
return fieldset__delegate(args__7143__auto__);
});
fieldset.cljs$core$IFn$_invoke$arity$variadic = fieldset__delegate;
return fieldset;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.figcaption = (function() { 
var figcaption__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8425_9841 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8426_9842 = null;var count__8427_9843 = 0;var i__8428_9844 = 0;while(true){
if((i__8428_9844 < count__8427_9843))
{var arg__7145__auto___9845 = cljs.core._nth.call(null,chunk__8426_9842,i__8428_9844);a__7144__auto__.push(arg__7145__auto___9845);
{
var G__9846 = seq__8425_9841;
var G__9847 = chunk__8426_9842;
var G__9848 = count__8427_9843;
var G__9849 = (i__8428_9844 + 1);
seq__8425_9841 = G__9846;
chunk__8426_9842 = G__9847;
count__8427_9843 = G__9848;
i__8428_9844 = G__9849;
continue;
}
} else
{var temp__4092__auto___9850 = cljs.core.seq.call(null,seq__8425_9841);if(temp__4092__auto___9850)
{var seq__8425_9851__$1 = temp__4092__auto___9850;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8425_9851__$1))
{var c__5633__auto___9852 = cljs.core.chunk_first.call(null,seq__8425_9851__$1);{
var G__9853 = cljs.core.chunk_rest.call(null,seq__8425_9851__$1);
var G__9854 = c__5633__auto___9852;
var G__9855 = cljs.core.count.call(null,c__5633__auto___9852);
var G__9856 = 0;
seq__8425_9841 = G__9853;
chunk__8426_9842 = G__9854;
count__8427_9843 = G__9855;
i__8428_9844 = G__9856;
continue;
}
} else
{var arg__7145__auto___9857 = cljs.core.first.call(null,seq__8425_9851__$1);a__7144__auto__.push(arg__7145__auto___9857);
{
var G__9858 = cljs.core.next.call(null,seq__8425_9851__$1);
var G__9859 = null;
var G__9860 = 0;
var G__9861 = 0;
seq__8425_9841 = G__9858;
chunk__8426_9842 = G__9859;
count__8427_9843 = G__9860;
i__8428_9844 = G__9861;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.figcaption.apply(null,a__7144__auto__);
};
var figcaption = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return figcaption__delegate.call(this,args__7143__auto__);};
figcaption.cljs$lang$maxFixedArity = 0;
figcaption.cljs$lang$applyTo = (function (arglist__9862){
var args__7143__auto__ = cljs.core.seq(arglist__9862);
return figcaption__delegate(args__7143__auto__);
});
figcaption.cljs$core$IFn$_invoke$arity$variadic = figcaption__delegate;
return figcaption;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.figure = (function() { 
var figure__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8433_9863 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8434_9864 = null;var count__8435_9865 = 0;var i__8436_9866 = 0;while(true){
if((i__8436_9866 < count__8435_9865))
{var arg__7145__auto___9867 = cljs.core._nth.call(null,chunk__8434_9864,i__8436_9866);a__7144__auto__.push(arg__7145__auto___9867);
{
var G__9868 = seq__8433_9863;
var G__9869 = chunk__8434_9864;
var G__9870 = count__8435_9865;
var G__9871 = (i__8436_9866 + 1);
seq__8433_9863 = G__9868;
chunk__8434_9864 = G__9869;
count__8435_9865 = G__9870;
i__8436_9866 = G__9871;
continue;
}
} else
{var temp__4092__auto___9872 = cljs.core.seq.call(null,seq__8433_9863);if(temp__4092__auto___9872)
{var seq__8433_9873__$1 = temp__4092__auto___9872;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8433_9873__$1))
{var c__5633__auto___9874 = cljs.core.chunk_first.call(null,seq__8433_9873__$1);{
var G__9875 = cljs.core.chunk_rest.call(null,seq__8433_9873__$1);
var G__9876 = c__5633__auto___9874;
var G__9877 = cljs.core.count.call(null,c__5633__auto___9874);
var G__9878 = 0;
seq__8433_9863 = G__9875;
chunk__8434_9864 = G__9876;
count__8435_9865 = G__9877;
i__8436_9866 = G__9878;
continue;
}
} else
{var arg__7145__auto___9879 = cljs.core.first.call(null,seq__8433_9873__$1);a__7144__auto__.push(arg__7145__auto___9879);
{
var G__9880 = cljs.core.next.call(null,seq__8433_9873__$1);
var G__9881 = null;
var G__9882 = 0;
var G__9883 = 0;
seq__8433_9863 = G__9880;
chunk__8434_9864 = G__9881;
count__8435_9865 = G__9882;
i__8436_9866 = G__9883;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.figure.apply(null,a__7144__auto__);
};
var figure = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return figure__delegate.call(this,args__7143__auto__);};
figure.cljs$lang$maxFixedArity = 0;
figure.cljs$lang$applyTo = (function (arglist__9884){
var args__7143__auto__ = cljs.core.seq(arglist__9884);
return figure__delegate(args__7143__auto__);
});
figure.cljs$core$IFn$_invoke$arity$variadic = figure__delegate;
return figure;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.footer = (function() { 
var footer__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8441_9885 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8442_9886 = null;var count__8443_9887 = 0;var i__8444_9888 = 0;while(true){
if((i__8444_9888 < count__8443_9887))
{var arg__7145__auto___9889 = cljs.core._nth.call(null,chunk__8442_9886,i__8444_9888);a__7144__auto__.push(arg__7145__auto___9889);
{
var G__9890 = seq__8441_9885;
var G__9891 = chunk__8442_9886;
var G__9892 = count__8443_9887;
var G__9893 = (i__8444_9888 + 1);
seq__8441_9885 = G__9890;
chunk__8442_9886 = G__9891;
count__8443_9887 = G__9892;
i__8444_9888 = G__9893;
continue;
}
} else
{var temp__4092__auto___9894 = cljs.core.seq.call(null,seq__8441_9885);if(temp__4092__auto___9894)
{var seq__8441_9895__$1 = temp__4092__auto___9894;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8441_9895__$1))
{var c__5633__auto___9896 = cljs.core.chunk_first.call(null,seq__8441_9895__$1);{
var G__9897 = cljs.core.chunk_rest.call(null,seq__8441_9895__$1);
var G__9898 = c__5633__auto___9896;
var G__9899 = cljs.core.count.call(null,c__5633__auto___9896);
var G__9900 = 0;
seq__8441_9885 = G__9897;
chunk__8442_9886 = G__9898;
count__8443_9887 = G__9899;
i__8444_9888 = G__9900;
continue;
}
} else
{var arg__7145__auto___9901 = cljs.core.first.call(null,seq__8441_9895__$1);a__7144__auto__.push(arg__7145__auto___9901);
{
var G__9902 = cljs.core.next.call(null,seq__8441_9895__$1);
var G__9903 = null;
var G__9904 = 0;
var G__9905 = 0;
seq__8441_9885 = G__9902;
chunk__8442_9886 = G__9903;
count__8443_9887 = G__9904;
i__8444_9888 = G__9905;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.footer.apply(null,a__7144__auto__);
};
var footer = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return footer__delegate.call(this,args__7143__auto__);};
footer.cljs$lang$maxFixedArity = 0;
footer.cljs$lang$applyTo = (function (arglist__9906){
var args__7143__auto__ = cljs.core.seq(arglist__9906);
return footer__delegate(args__7143__auto__);
});
footer.cljs$core$IFn$_invoke$arity$variadic = footer__delegate;
return footer;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.form = (function() { 
var form__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8449_9907 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8450_9908 = null;var count__8451_9909 = 0;var i__8452_9910 = 0;while(true){
if((i__8452_9910 < count__8451_9909))
{var arg__7145__auto___9911 = cljs.core._nth.call(null,chunk__8450_9908,i__8452_9910);a__7144__auto__.push(arg__7145__auto___9911);
{
var G__9912 = seq__8449_9907;
var G__9913 = chunk__8450_9908;
var G__9914 = count__8451_9909;
var G__9915 = (i__8452_9910 + 1);
seq__8449_9907 = G__9912;
chunk__8450_9908 = G__9913;
count__8451_9909 = G__9914;
i__8452_9910 = G__9915;
continue;
}
} else
{var temp__4092__auto___9916 = cljs.core.seq.call(null,seq__8449_9907);if(temp__4092__auto___9916)
{var seq__8449_9917__$1 = temp__4092__auto___9916;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8449_9917__$1))
{var c__5633__auto___9918 = cljs.core.chunk_first.call(null,seq__8449_9917__$1);{
var G__9919 = cljs.core.chunk_rest.call(null,seq__8449_9917__$1);
var G__9920 = c__5633__auto___9918;
var G__9921 = cljs.core.count.call(null,c__5633__auto___9918);
var G__9922 = 0;
seq__8449_9907 = G__9919;
chunk__8450_9908 = G__9920;
count__8451_9909 = G__9921;
i__8452_9910 = G__9922;
continue;
}
} else
{var arg__7145__auto___9923 = cljs.core.first.call(null,seq__8449_9917__$1);a__7144__auto__.push(arg__7145__auto___9923);
{
var G__9924 = cljs.core.next.call(null,seq__8449_9917__$1);
var G__9925 = null;
var G__9926 = 0;
var G__9927 = 0;
seq__8449_9907 = G__9924;
chunk__8450_9908 = G__9925;
count__8451_9909 = G__9926;
i__8452_9910 = G__9927;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.form.apply(null,a__7144__auto__);
};
var form = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return form__delegate.call(this,args__7143__auto__);};
form.cljs$lang$maxFixedArity = 0;
form.cljs$lang$applyTo = (function (arglist__9928){
var args__7143__auto__ = cljs.core.seq(arglist__9928);
return form__delegate(args__7143__auto__);
});
form.cljs$core$IFn$_invoke$arity$variadic = form__delegate;
return form;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h1 = (function() { 
var h1__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8457_9929 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8458_9930 = null;var count__8459_9931 = 0;var i__8460_9932 = 0;while(true){
if((i__8460_9932 < count__8459_9931))
{var arg__7145__auto___9933 = cljs.core._nth.call(null,chunk__8458_9930,i__8460_9932);a__7144__auto__.push(arg__7145__auto___9933);
{
var G__9934 = seq__8457_9929;
var G__9935 = chunk__8458_9930;
var G__9936 = count__8459_9931;
var G__9937 = (i__8460_9932 + 1);
seq__8457_9929 = G__9934;
chunk__8458_9930 = G__9935;
count__8459_9931 = G__9936;
i__8460_9932 = G__9937;
continue;
}
} else
{var temp__4092__auto___9938 = cljs.core.seq.call(null,seq__8457_9929);if(temp__4092__auto___9938)
{var seq__8457_9939__$1 = temp__4092__auto___9938;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8457_9939__$1))
{var c__5633__auto___9940 = cljs.core.chunk_first.call(null,seq__8457_9939__$1);{
var G__9941 = cljs.core.chunk_rest.call(null,seq__8457_9939__$1);
var G__9942 = c__5633__auto___9940;
var G__9943 = cljs.core.count.call(null,c__5633__auto___9940);
var G__9944 = 0;
seq__8457_9929 = G__9941;
chunk__8458_9930 = G__9942;
count__8459_9931 = G__9943;
i__8460_9932 = G__9944;
continue;
}
} else
{var arg__7145__auto___9945 = cljs.core.first.call(null,seq__8457_9939__$1);a__7144__auto__.push(arg__7145__auto___9945);
{
var G__9946 = cljs.core.next.call(null,seq__8457_9939__$1);
var G__9947 = null;
var G__9948 = 0;
var G__9949 = 0;
seq__8457_9929 = G__9946;
chunk__8458_9930 = G__9947;
count__8459_9931 = G__9948;
i__8460_9932 = G__9949;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h1.apply(null,a__7144__auto__);
};
var h1 = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h1__delegate.call(this,args__7143__auto__);};
h1.cljs$lang$maxFixedArity = 0;
h1.cljs$lang$applyTo = (function (arglist__9950){
var args__7143__auto__ = cljs.core.seq(arglist__9950);
return h1__delegate(args__7143__auto__);
});
h1.cljs$core$IFn$_invoke$arity$variadic = h1__delegate;
return h1;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h2 = (function() { 
var h2__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8465_9951 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8466_9952 = null;var count__8467_9953 = 0;var i__8468_9954 = 0;while(true){
if((i__8468_9954 < count__8467_9953))
{var arg__7145__auto___9955 = cljs.core._nth.call(null,chunk__8466_9952,i__8468_9954);a__7144__auto__.push(arg__7145__auto___9955);
{
var G__9956 = seq__8465_9951;
var G__9957 = chunk__8466_9952;
var G__9958 = count__8467_9953;
var G__9959 = (i__8468_9954 + 1);
seq__8465_9951 = G__9956;
chunk__8466_9952 = G__9957;
count__8467_9953 = G__9958;
i__8468_9954 = G__9959;
continue;
}
} else
{var temp__4092__auto___9960 = cljs.core.seq.call(null,seq__8465_9951);if(temp__4092__auto___9960)
{var seq__8465_9961__$1 = temp__4092__auto___9960;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8465_9961__$1))
{var c__5633__auto___9962 = cljs.core.chunk_first.call(null,seq__8465_9961__$1);{
var G__9963 = cljs.core.chunk_rest.call(null,seq__8465_9961__$1);
var G__9964 = c__5633__auto___9962;
var G__9965 = cljs.core.count.call(null,c__5633__auto___9962);
var G__9966 = 0;
seq__8465_9951 = G__9963;
chunk__8466_9952 = G__9964;
count__8467_9953 = G__9965;
i__8468_9954 = G__9966;
continue;
}
} else
{var arg__7145__auto___9967 = cljs.core.first.call(null,seq__8465_9961__$1);a__7144__auto__.push(arg__7145__auto___9967);
{
var G__9968 = cljs.core.next.call(null,seq__8465_9961__$1);
var G__9969 = null;
var G__9970 = 0;
var G__9971 = 0;
seq__8465_9951 = G__9968;
chunk__8466_9952 = G__9969;
count__8467_9953 = G__9970;
i__8468_9954 = G__9971;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h2.apply(null,a__7144__auto__);
};
var h2 = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h2__delegate.call(this,args__7143__auto__);};
h2.cljs$lang$maxFixedArity = 0;
h2.cljs$lang$applyTo = (function (arglist__9972){
var args__7143__auto__ = cljs.core.seq(arglist__9972);
return h2__delegate(args__7143__auto__);
});
h2.cljs$core$IFn$_invoke$arity$variadic = h2__delegate;
return h2;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h3 = (function() { 
var h3__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8473_9973 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8474_9974 = null;var count__8475_9975 = 0;var i__8476_9976 = 0;while(true){
if((i__8476_9976 < count__8475_9975))
{var arg__7145__auto___9977 = cljs.core._nth.call(null,chunk__8474_9974,i__8476_9976);a__7144__auto__.push(arg__7145__auto___9977);
{
var G__9978 = seq__8473_9973;
var G__9979 = chunk__8474_9974;
var G__9980 = count__8475_9975;
var G__9981 = (i__8476_9976 + 1);
seq__8473_9973 = G__9978;
chunk__8474_9974 = G__9979;
count__8475_9975 = G__9980;
i__8476_9976 = G__9981;
continue;
}
} else
{var temp__4092__auto___9982 = cljs.core.seq.call(null,seq__8473_9973);if(temp__4092__auto___9982)
{var seq__8473_9983__$1 = temp__4092__auto___9982;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8473_9983__$1))
{var c__5633__auto___9984 = cljs.core.chunk_first.call(null,seq__8473_9983__$1);{
var G__9985 = cljs.core.chunk_rest.call(null,seq__8473_9983__$1);
var G__9986 = c__5633__auto___9984;
var G__9987 = cljs.core.count.call(null,c__5633__auto___9984);
var G__9988 = 0;
seq__8473_9973 = G__9985;
chunk__8474_9974 = G__9986;
count__8475_9975 = G__9987;
i__8476_9976 = G__9988;
continue;
}
} else
{var arg__7145__auto___9989 = cljs.core.first.call(null,seq__8473_9983__$1);a__7144__auto__.push(arg__7145__auto___9989);
{
var G__9990 = cljs.core.next.call(null,seq__8473_9983__$1);
var G__9991 = null;
var G__9992 = 0;
var G__9993 = 0;
seq__8473_9973 = G__9990;
chunk__8474_9974 = G__9991;
count__8475_9975 = G__9992;
i__8476_9976 = G__9993;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h3.apply(null,a__7144__auto__);
};
var h3 = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h3__delegate.call(this,args__7143__auto__);};
h3.cljs$lang$maxFixedArity = 0;
h3.cljs$lang$applyTo = (function (arglist__9994){
var args__7143__auto__ = cljs.core.seq(arglist__9994);
return h3__delegate(args__7143__auto__);
});
h3.cljs$core$IFn$_invoke$arity$variadic = h3__delegate;
return h3;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h4 = (function() { 
var h4__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8481_9995 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8482_9996 = null;var count__8483_9997 = 0;var i__8484_9998 = 0;while(true){
if((i__8484_9998 < count__8483_9997))
{var arg__7145__auto___9999 = cljs.core._nth.call(null,chunk__8482_9996,i__8484_9998);a__7144__auto__.push(arg__7145__auto___9999);
{
var G__10000 = seq__8481_9995;
var G__10001 = chunk__8482_9996;
var G__10002 = count__8483_9997;
var G__10003 = (i__8484_9998 + 1);
seq__8481_9995 = G__10000;
chunk__8482_9996 = G__10001;
count__8483_9997 = G__10002;
i__8484_9998 = G__10003;
continue;
}
} else
{var temp__4092__auto___10004 = cljs.core.seq.call(null,seq__8481_9995);if(temp__4092__auto___10004)
{var seq__8481_10005__$1 = temp__4092__auto___10004;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8481_10005__$1))
{var c__5633__auto___10006 = cljs.core.chunk_first.call(null,seq__8481_10005__$1);{
var G__10007 = cljs.core.chunk_rest.call(null,seq__8481_10005__$1);
var G__10008 = c__5633__auto___10006;
var G__10009 = cljs.core.count.call(null,c__5633__auto___10006);
var G__10010 = 0;
seq__8481_9995 = G__10007;
chunk__8482_9996 = G__10008;
count__8483_9997 = G__10009;
i__8484_9998 = G__10010;
continue;
}
} else
{var arg__7145__auto___10011 = cljs.core.first.call(null,seq__8481_10005__$1);a__7144__auto__.push(arg__7145__auto___10011);
{
var G__10012 = cljs.core.next.call(null,seq__8481_10005__$1);
var G__10013 = null;
var G__10014 = 0;
var G__10015 = 0;
seq__8481_9995 = G__10012;
chunk__8482_9996 = G__10013;
count__8483_9997 = G__10014;
i__8484_9998 = G__10015;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h4.apply(null,a__7144__auto__);
};
var h4 = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h4__delegate.call(this,args__7143__auto__);};
h4.cljs$lang$maxFixedArity = 0;
h4.cljs$lang$applyTo = (function (arglist__10016){
var args__7143__auto__ = cljs.core.seq(arglist__10016);
return h4__delegate(args__7143__auto__);
});
h4.cljs$core$IFn$_invoke$arity$variadic = h4__delegate;
return h4;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h5 = (function() { 
var h5__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8489_10017 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8490_10018 = null;var count__8491_10019 = 0;var i__8492_10020 = 0;while(true){
if((i__8492_10020 < count__8491_10019))
{var arg__7145__auto___10021 = cljs.core._nth.call(null,chunk__8490_10018,i__8492_10020);a__7144__auto__.push(arg__7145__auto___10021);
{
var G__10022 = seq__8489_10017;
var G__10023 = chunk__8490_10018;
var G__10024 = count__8491_10019;
var G__10025 = (i__8492_10020 + 1);
seq__8489_10017 = G__10022;
chunk__8490_10018 = G__10023;
count__8491_10019 = G__10024;
i__8492_10020 = G__10025;
continue;
}
} else
{var temp__4092__auto___10026 = cljs.core.seq.call(null,seq__8489_10017);if(temp__4092__auto___10026)
{var seq__8489_10027__$1 = temp__4092__auto___10026;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8489_10027__$1))
{var c__5633__auto___10028 = cljs.core.chunk_first.call(null,seq__8489_10027__$1);{
var G__10029 = cljs.core.chunk_rest.call(null,seq__8489_10027__$1);
var G__10030 = c__5633__auto___10028;
var G__10031 = cljs.core.count.call(null,c__5633__auto___10028);
var G__10032 = 0;
seq__8489_10017 = G__10029;
chunk__8490_10018 = G__10030;
count__8491_10019 = G__10031;
i__8492_10020 = G__10032;
continue;
}
} else
{var arg__7145__auto___10033 = cljs.core.first.call(null,seq__8489_10027__$1);a__7144__auto__.push(arg__7145__auto___10033);
{
var G__10034 = cljs.core.next.call(null,seq__8489_10027__$1);
var G__10035 = null;
var G__10036 = 0;
var G__10037 = 0;
seq__8489_10017 = G__10034;
chunk__8490_10018 = G__10035;
count__8491_10019 = G__10036;
i__8492_10020 = G__10037;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h5.apply(null,a__7144__auto__);
};
var h5 = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h5__delegate.call(this,args__7143__auto__);};
h5.cljs$lang$maxFixedArity = 0;
h5.cljs$lang$applyTo = (function (arglist__10038){
var args__7143__auto__ = cljs.core.seq(arglist__10038);
return h5__delegate(args__7143__auto__);
});
h5.cljs$core$IFn$_invoke$arity$variadic = h5__delegate;
return h5;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h6 = (function() { 
var h6__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8497_10039 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8498_10040 = null;var count__8499_10041 = 0;var i__8500_10042 = 0;while(true){
if((i__8500_10042 < count__8499_10041))
{var arg__7145__auto___10043 = cljs.core._nth.call(null,chunk__8498_10040,i__8500_10042);a__7144__auto__.push(arg__7145__auto___10043);
{
var G__10044 = seq__8497_10039;
var G__10045 = chunk__8498_10040;
var G__10046 = count__8499_10041;
var G__10047 = (i__8500_10042 + 1);
seq__8497_10039 = G__10044;
chunk__8498_10040 = G__10045;
count__8499_10041 = G__10046;
i__8500_10042 = G__10047;
continue;
}
} else
{var temp__4092__auto___10048 = cljs.core.seq.call(null,seq__8497_10039);if(temp__4092__auto___10048)
{var seq__8497_10049__$1 = temp__4092__auto___10048;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8497_10049__$1))
{var c__5633__auto___10050 = cljs.core.chunk_first.call(null,seq__8497_10049__$1);{
var G__10051 = cljs.core.chunk_rest.call(null,seq__8497_10049__$1);
var G__10052 = c__5633__auto___10050;
var G__10053 = cljs.core.count.call(null,c__5633__auto___10050);
var G__10054 = 0;
seq__8497_10039 = G__10051;
chunk__8498_10040 = G__10052;
count__8499_10041 = G__10053;
i__8500_10042 = G__10054;
continue;
}
} else
{var arg__7145__auto___10055 = cljs.core.first.call(null,seq__8497_10049__$1);a__7144__auto__.push(arg__7145__auto___10055);
{
var G__10056 = cljs.core.next.call(null,seq__8497_10049__$1);
var G__10057 = null;
var G__10058 = 0;
var G__10059 = 0;
seq__8497_10039 = G__10056;
chunk__8498_10040 = G__10057;
count__8499_10041 = G__10058;
i__8500_10042 = G__10059;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h6.apply(null,a__7144__auto__);
};
var h6 = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h6__delegate.call(this,args__7143__auto__);};
h6.cljs$lang$maxFixedArity = 0;
h6.cljs$lang$applyTo = (function (arglist__10060){
var args__7143__auto__ = cljs.core.seq(arglist__10060);
return h6__delegate(args__7143__auto__);
});
h6.cljs$core$IFn$_invoke$arity$variadic = h6__delegate;
return h6;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.head = (function() { 
var head__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8505_10061 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8506_10062 = null;var count__8507_10063 = 0;var i__8508_10064 = 0;while(true){
if((i__8508_10064 < count__8507_10063))
{var arg__7145__auto___10065 = cljs.core._nth.call(null,chunk__8506_10062,i__8508_10064);a__7144__auto__.push(arg__7145__auto___10065);
{
var G__10066 = seq__8505_10061;
var G__10067 = chunk__8506_10062;
var G__10068 = count__8507_10063;
var G__10069 = (i__8508_10064 + 1);
seq__8505_10061 = G__10066;
chunk__8506_10062 = G__10067;
count__8507_10063 = G__10068;
i__8508_10064 = G__10069;
continue;
}
} else
{var temp__4092__auto___10070 = cljs.core.seq.call(null,seq__8505_10061);if(temp__4092__auto___10070)
{var seq__8505_10071__$1 = temp__4092__auto___10070;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8505_10071__$1))
{var c__5633__auto___10072 = cljs.core.chunk_first.call(null,seq__8505_10071__$1);{
var G__10073 = cljs.core.chunk_rest.call(null,seq__8505_10071__$1);
var G__10074 = c__5633__auto___10072;
var G__10075 = cljs.core.count.call(null,c__5633__auto___10072);
var G__10076 = 0;
seq__8505_10061 = G__10073;
chunk__8506_10062 = G__10074;
count__8507_10063 = G__10075;
i__8508_10064 = G__10076;
continue;
}
} else
{var arg__7145__auto___10077 = cljs.core.first.call(null,seq__8505_10071__$1);a__7144__auto__.push(arg__7145__auto___10077);
{
var G__10078 = cljs.core.next.call(null,seq__8505_10071__$1);
var G__10079 = null;
var G__10080 = 0;
var G__10081 = 0;
seq__8505_10061 = G__10078;
chunk__8506_10062 = G__10079;
count__8507_10063 = G__10080;
i__8508_10064 = G__10081;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.head.apply(null,a__7144__auto__);
};
var head = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return head__delegate.call(this,args__7143__auto__);};
head.cljs$lang$maxFixedArity = 0;
head.cljs$lang$applyTo = (function (arglist__10082){
var args__7143__auto__ = cljs.core.seq(arglist__10082);
return head__delegate(args__7143__auto__);
});
head.cljs$core$IFn$_invoke$arity$variadic = head__delegate;
return head;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.header = (function() { 
var header__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8513_10083 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8514_10084 = null;var count__8515_10085 = 0;var i__8516_10086 = 0;while(true){
if((i__8516_10086 < count__8515_10085))
{var arg__7145__auto___10087 = cljs.core._nth.call(null,chunk__8514_10084,i__8516_10086);a__7144__auto__.push(arg__7145__auto___10087);
{
var G__10088 = seq__8513_10083;
var G__10089 = chunk__8514_10084;
var G__10090 = count__8515_10085;
var G__10091 = (i__8516_10086 + 1);
seq__8513_10083 = G__10088;
chunk__8514_10084 = G__10089;
count__8515_10085 = G__10090;
i__8516_10086 = G__10091;
continue;
}
} else
{var temp__4092__auto___10092 = cljs.core.seq.call(null,seq__8513_10083);if(temp__4092__auto___10092)
{var seq__8513_10093__$1 = temp__4092__auto___10092;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8513_10093__$1))
{var c__5633__auto___10094 = cljs.core.chunk_first.call(null,seq__8513_10093__$1);{
var G__10095 = cljs.core.chunk_rest.call(null,seq__8513_10093__$1);
var G__10096 = c__5633__auto___10094;
var G__10097 = cljs.core.count.call(null,c__5633__auto___10094);
var G__10098 = 0;
seq__8513_10083 = G__10095;
chunk__8514_10084 = G__10096;
count__8515_10085 = G__10097;
i__8516_10086 = G__10098;
continue;
}
} else
{var arg__7145__auto___10099 = cljs.core.first.call(null,seq__8513_10093__$1);a__7144__auto__.push(arg__7145__auto___10099);
{
var G__10100 = cljs.core.next.call(null,seq__8513_10093__$1);
var G__10101 = null;
var G__10102 = 0;
var G__10103 = 0;
seq__8513_10083 = G__10100;
chunk__8514_10084 = G__10101;
count__8515_10085 = G__10102;
i__8516_10086 = G__10103;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.header.apply(null,a__7144__auto__);
};
var header = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return header__delegate.call(this,args__7143__auto__);};
header.cljs$lang$maxFixedArity = 0;
header.cljs$lang$applyTo = (function (arglist__10104){
var args__7143__auto__ = cljs.core.seq(arglist__10104);
return header__delegate(args__7143__auto__);
});
header.cljs$core$IFn$_invoke$arity$variadic = header__delegate;
return header;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.hr = (function() { 
var hr__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8521_10105 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8522_10106 = null;var count__8523_10107 = 0;var i__8524_10108 = 0;while(true){
if((i__8524_10108 < count__8523_10107))
{var arg__7145__auto___10109 = cljs.core._nth.call(null,chunk__8522_10106,i__8524_10108);a__7144__auto__.push(arg__7145__auto___10109);
{
var G__10110 = seq__8521_10105;
var G__10111 = chunk__8522_10106;
var G__10112 = count__8523_10107;
var G__10113 = (i__8524_10108 + 1);
seq__8521_10105 = G__10110;
chunk__8522_10106 = G__10111;
count__8523_10107 = G__10112;
i__8524_10108 = G__10113;
continue;
}
} else
{var temp__4092__auto___10114 = cljs.core.seq.call(null,seq__8521_10105);if(temp__4092__auto___10114)
{var seq__8521_10115__$1 = temp__4092__auto___10114;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8521_10115__$1))
{var c__5633__auto___10116 = cljs.core.chunk_first.call(null,seq__8521_10115__$1);{
var G__10117 = cljs.core.chunk_rest.call(null,seq__8521_10115__$1);
var G__10118 = c__5633__auto___10116;
var G__10119 = cljs.core.count.call(null,c__5633__auto___10116);
var G__10120 = 0;
seq__8521_10105 = G__10117;
chunk__8522_10106 = G__10118;
count__8523_10107 = G__10119;
i__8524_10108 = G__10120;
continue;
}
} else
{var arg__7145__auto___10121 = cljs.core.first.call(null,seq__8521_10115__$1);a__7144__auto__.push(arg__7145__auto___10121);
{
var G__10122 = cljs.core.next.call(null,seq__8521_10115__$1);
var G__10123 = null;
var G__10124 = 0;
var G__10125 = 0;
seq__8521_10105 = G__10122;
chunk__8522_10106 = G__10123;
count__8523_10107 = G__10124;
i__8524_10108 = G__10125;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.hr.apply(null,a__7144__auto__);
};
var hr = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return hr__delegate.call(this,args__7143__auto__);};
hr.cljs$lang$maxFixedArity = 0;
hr.cljs$lang$applyTo = (function (arglist__10126){
var args__7143__auto__ = cljs.core.seq(arglist__10126);
return hr__delegate(args__7143__auto__);
});
hr.cljs$core$IFn$_invoke$arity$variadic = hr__delegate;
return hr;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.html = (function() { 
var html__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8529_10127 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8530_10128 = null;var count__8531_10129 = 0;var i__8532_10130 = 0;while(true){
if((i__8532_10130 < count__8531_10129))
{var arg__7145__auto___10131 = cljs.core._nth.call(null,chunk__8530_10128,i__8532_10130);a__7144__auto__.push(arg__7145__auto___10131);
{
var G__10132 = seq__8529_10127;
var G__10133 = chunk__8530_10128;
var G__10134 = count__8531_10129;
var G__10135 = (i__8532_10130 + 1);
seq__8529_10127 = G__10132;
chunk__8530_10128 = G__10133;
count__8531_10129 = G__10134;
i__8532_10130 = G__10135;
continue;
}
} else
{var temp__4092__auto___10136 = cljs.core.seq.call(null,seq__8529_10127);if(temp__4092__auto___10136)
{var seq__8529_10137__$1 = temp__4092__auto___10136;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8529_10137__$1))
{var c__5633__auto___10138 = cljs.core.chunk_first.call(null,seq__8529_10137__$1);{
var G__10139 = cljs.core.chunk_rest.call(null,seq__8529_10137__$1);
var G__10140 = c__5633__auto___10138;
var G__10141 = cljs.core.count.call(null,c__5633__auto___10138);
var G__10142 = 0;
seq__8529_10127 = G__10139;
chunk__8530_10128 = G__10140;
count__8531_10129 = G__10141;
i__8532_10130 = G__10142;
continue;
}
} else
{var arg__7145__auto___10143 = cljs.core.first.call(null,seq__8529_10137__$1);a__7144__auto__.push(arg__7145__auto___10143);
{
var G__10144 = cljs.core.next.call(null,seq__8529_10137__$1);
var G__10145 = null;
var G__10146 = 0;
var G__10147 = 0;
seq__8529_10127 = G__10144;
chunk__8530_10128 = G__10145;
count__8531_10129 = G__10146;
i__8532_10130 = G__10147;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.html.apply(null,a__7144__auto__);
};
var html = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return html__delegate.call(this,args__7143__auto__);};
html.cljs$lang$maxFixedArity = 0;
html.cljs$lang$applyTo = (function (arglist__10148){
var args__7143__auto__ = cljs.core.seq(arglist__10148);
return html__delegate(args__7143__auto__);
});
html.cljs$core$IFn$_invoke$arity$variadic = html__delegate;
return html;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.i = (function() { 
var i__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8537_10149 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8538_10150 = null;var count__8539_10151 = 0;var i__8540_10152 = 0;while(true){
if((i__8540_10152 < count__8539_10151))
{var arg__7145__auto___10153 = cljs.core._nth.call(null,chunk__8538_10150,i__8540_10152);a__7144__auto__.push(arg__7145__auto___10153);
{
var G__10154 = seq__8537_10149;
var G__10155 = chunk__8538_10150;
var G__10156 = count__8539_10151;
var G__10157 = (i__8540_10152 + 1);
seq__8537_10149 = G__10154;
chunk__8538_10150 = G__10155;
count__8539_10151 = G__10156;
i__8540_10152 = G__10157;
continue;
}
} else
{var temp__4092__auto___10158 = cljs.core.seq.call(null,seq__8537_10149);if(temp__4092__auto___10158)
{var seq__8537_10159__$1 = temp__4092__auto___10158;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8537_10159__$1))
{var c__5633__auto___10160 = cljs.core.chunk_first.call(null,seq__8537_10159__$1);{
var G__10161 = cljs.core.chunk_rest.call(null,seq__8537_10159__$1);
var G__10162 = c__5633__auto___10160;
var G__10163 = cljs.core.count.call(null,c__5633__auto___10160);
var G__10164 = 0;
seq__8537_10149 = G__10161;
chunk__8538_10150 = G__10162;
count__8539_10151 = G__10163;
i__8540_10152 = G__10164;
continue;
}
} else
{var arg__7145__auto___10165 = cljs.core.first.call(null,seq__8537_10159__$1);a__7144__auto__.push(arg__7145__auto___10165);
{
var G__10166 = cljs.core.next.call(null,seq__8537_10159__$1);
var G__10167 = null;
var G__10168 = 0;
var G__10169 = 0;
seq__8537_10149 = G__10166;
chunk__8538_10150 = G__10167;
count__8539_10151 = G__10168;
i__8540_10152 = G__10169;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.i.apply(null,a__7144__auto__);
};
var i = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return i__delegate.call(this,args__7143__auto__);};
i.cljs$lang$maxFixedArity = 0;
i.cljs$lang$applyTo = (function (arglist__10170){
var args__7143__auto__ = cljs.core.seq(arglist__10170);
return i__delegate(args__7143__auto__);
});
i.cljs$core$IFn$_invoke$arity$variadic = i__delegate;
return i;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.iframe = (function() { 
var iframe__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8545_10171 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8546_10172 = null;var count__8547_10173 = 0;var i__8548_10174 = 0;while(true){
if((i__8548_10174 < count__8547_10173))
{var arg__7145__auto___10175 = cljs.core._nth.call(null,chunk__8546_10172,i__8548_10174);a__7144__auto__.push(arg__7145__auto___10175);
{
var G__10176 = seq__8545_10171;
var G__10177 = chunk__8546_10172;
var G__10178 = count__8547_10173;
var G__10179 = (i__8548_10174 + 1);
seq__8545_10171 = G__10176;
chunk__8546_10172 = G__10177;
count__8547_10173 = G__10178;
i__8548_10174 = G__10179;
continue;
}
} else
{var temp__4092__auto___10180 = cljs.core.seq.call(null,seq__8545_10171);if(temp__4092__auto___10180)
{var seq__8545_10181__$1 = temp__4092__auto___10180;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8545_10181__$1))
{var c__5633__auto___10182 = cljs.core.chunk_first.call(null,seq__8545_10181__$1);{
var G__10183 = cljs.core.chunk_rest.call(null,seq__8545_10181__$1);
var G__10184 = c__5633__auto___10182;
var G__10185 = cljs.core.count.call(null,c__5633__auto___10182);
var G__10186 = 0;
seq__8545_10171 = G__10183;
chunk__8546_10172 = G__10184;
count__8547_10173 = G__10185;
i__8548_10174 = G__10186;
continue;
}
} else
{var arg__7145__auto___10187 = cljs.core.first.call(null,seq__8545_10181__$1);a__7144__auto__.push(arg__7145__auto___10187);
{
var G__10188 = cljs.core.next.call(null,seq__8545_10181__$1);
var G__10189 = null;
var G__10190 = 0;
var G__10191 = 0;
seq__8545_10171 = G__10188;
chunk__8546_10172 = G__10189;
count__8547_10173 = G__10190;
i__8548_10174 = G__10191;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.iframe.apply(null,a__7144__auto__);
};
var iframe = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return iframe__delegate.call(this,args__7143__auto__);};
iframe.cljs$lang$maxFixedArity = 0;
iframe.cljs$lang$applyTo = (function (arglist__10192){
var args__7143__auto__ = cljs.core.seq(arglist__10192);
return iframe__delegate(args__7143__auto__);
});
iframe.cljs$core$IFn$_invoke$arity$variadic = iframe__delegate;
return iframe;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.img = (function() { 
var img__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8553_10193 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8554_10194 = null;var count__8555_10195 = 0;var i__8556_10196 = 0;while(true){
if((i__8556_10196 < count__8555_10195))
{var arg__7145__auto___10197 = cljs.core._nth.call(null,chunk__8554_10194,i__8556_10196);a__7144__auto__.push(arg__7145__auto___10197);
{
var G__10198 = seq__8553_10193;
var G__10199 = chunk__8554_10194;
var G__10200 = count__8555_10195;
var G__10201 = (i__8556_10196 + 1);
seq__8553_10193 = G__10198;
chunk__8554_10194 = G__10199;
count__8555_10195 = G__10200;
i__8556_10196 = G__10201;
continue;
}
} else
{var temp__4092__auto___10202 = cljs.core.seq.call(null,seq__8553_10193);if(temp__4092__auto___10202)
{var seq__8553_10203__$1 = temp__4092__auto___10202;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8553_10203__$1))
{var c__5633__auto___10204 = cljs.core.chunk_first.call(null,seq__8553_10203__$1);{
var G__10205 = cljs.core.chunk_rest.call(null,seq__8553_10203__$1);
var G__10206 = c__5633__auto___10204;
var G__10207 = cljs.core.count.call(null,c__5633__auto___10204);
var G__10208 = 0;
seq__8553_10193 = G__10205;
chunk__8554_10194 = G__10206;
count__8555_10195 = G__10207;
i__8556_10196 = G__10208;
continue;
}
} else
{var arg__7145__auto___10209 = cljs.core.first.call(null,seq__8553_10203__$1);a__7144__auto__.push(arg__7145__auto___10209);
{
var G__10210 = cljs.core.next.call(null,seq__8553_10203__$1);
var G__10211 = null;
var G__10212 = 0;
var G__10213 = 0;
seq__8553_10193 = G__10210;
chunk__8554_10194 = G__10211;
count__8555_10195 = G__10212;
i__8556_10196 = G__10213;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.img.apply(null,a__7144__auto__);
};
var img = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return img__delegate.call(this,args__7143__auto__);};
img.cljs$lang$maxFixedArity = 0;
img.cljs$lang$applyTo = (function (arglist__10214){
var args__7143__auto__ = cljs.core.seq(arglist__10214);
return img__delegate(args__7143__auto__);
});
img.cljs$core$IFn$_invoke$arity$variadic = img__delegate;
return img;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.input = (function() { 
var input__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8561_10215 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8562_10216 = null;var count__8563_10217 = 0;var i__8564_10218 = 0;while(true){
if((i__8564_10218 < count__8563_10217))
{var arg__7145__auto___10219 = cljs.core._nth.call(null,chunk__8562_10216,i__8564_10218);a__7144__auto__.push(arg__7145__auto___10219);
{
var G__10220 = seq__8561_10215;
var G__10221 = chunk__8562_10216;
var G__10222 = count__8563_10217;
var G__10223 = (i__8564_10218 + 1);
seq__8561_10215 = G__10220;
chunk__8562_10216 = G__10221;
count__8563_10217 = G__10222;
i__8564_10218 = G__10223;
continue;
}
} else
{var temp__4092__auto___10224 = cljs.core.seq.call(null,seq__8561_10215);if(temp__4092__auto___10224)
{var seq__8561_10225__$1 = temp__4092__auto___10224;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8561_10225__$1))
{var c__5633__auto___10226 = cljs.core.chunk_first.call(null,seq__8561_10225__$1);{
var G__10227 = cljs.core.chunk_rest.call(null,seq__8561_10225__$1);
var G__10228 = c__5633__auto___10226;
var G__10229 = cljs.core.count.call(null,c__5633__auto___10226);
var G__10230 = 0;
seq__8561_10215 = G__10227;
chunk__8562_10216 = G__10228;
count__8563_10217 = G__10229;
i__8564_10218 = G__10230;
continue;
}
} else
{var arg__7145__auto___10231 = cljs.core.first.call(null,seq__8561_10225__$1);a__7144__auto__.push(arg__7145__auto___10231);
{
var G__10232 = cljs.core.next.call(null,seq__8561_10225__$1);
var G__10233 = null;
var G__10234 = 0;
var G__10235 = 0;
seq__8561_10215 = G__10232;
chunk__8562_10216 = G__10233;
count__8563_10217 = G__10234;
i__8564_10218 = G__10235;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.input.apply(null,a__7144__auto__);
};
var input = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return input__delegate.call(this,args__7143__auto__);};
input.cljs$lang$maxFixedArity = 0;
input.cljs$lang$applyTo = (function (arglist__10236){
var args__7143__auto__ = cljs.core.seq(arglist__10236);
return input__delegate(args__7143__auto__);
});
input.cljs$core$IFn$_invoke$arity$variadic = input__delegate;
return input;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.ins = (function() { 
var ins__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8569_10237 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8570_10238 = null;var count__8571_10239 = 0;var i__8572_10240 = 0;while(true){
if((i__8572_10240 < count__8571_10239))
{var arg__7145__auto___10241 = cljs.core._nth.call(null,chunk__8570_10238,i__8572_10240);a__7144__auto__.push(arg__7145__auto___10241);
{
var G__10242 = seq__8569_10237;
var G__10243 = chunk__8570_10238;
var G__10244 = count__8571_10239;
var G__10245 = (i__8572_10240 + 1);
seq__8569_10237 = G__10242;
chunk__8570_10238 = G__10243;
count__8571_10239 = G__10244;
i__8572_10240 = G__10245;
continue;
}
} else
{var temp__4092__auto___10246 = cljs.core.seq.call(null,seq__8569_10237);if(temp__4092__auto___10246)
{var seq__8569_10247__$1 = temp__4092__auto___10246;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8569_10247__$1))
{var c__5633__auto___10248 = cljs.core.chunk_first.call(null,seq__8569_10247__$1);{
var G__10249 = cljs.core.chunk_rest.call(null,seq__8569_10247__$1);
var G__10250 = c__5633__auto___10248;
var G__10251 = cljs.core.count.call(null,c__5633__auto___10248);
var G__10252 = 0;
seq__8569_10237 = G__10249;
chunk__8570_10238 = G__10250;
count__8571_10239 = G__10251;
i__8572_10240 = G__10252;
continue;
}
} else
{var arg__7145__auto___10253 = cljs.core.first.call(null,seq__8569_10247__$1);a__7144__auto__.push(arg__7145__auto___10253);
{
var G__10254 = cljs.core.next.call(null,seq__8569_10247__$1);
var G__10255 = null;
var G__10256 = 0;
var G__10257 = 0;
seq__8569_10237 = G__10254;
chunk__8570_10238 = G__10255;
count__8571_10239 = G__10256;
i__8572_10240 = G__10257;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.ins.apply(null,a__7144__auto__);
};
var ins = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ins__delegate.call(this,args__7143__auto__);};
ins.cljs$lang$maxFixedArity = 0;
ins.cljs$lang$applyTo = (function (arglist__10258){
var args__7143__auto__ = cljs.core.seq(arglist__10258);
return ins__delegate(args__7143__auto__);
});
ins.cljs$core$IFn$_invoke$arity$variadic = ins__delegate;
return ins;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.kbd = (function() { 
var kbd__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8577_10259 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8578_10260 = null;var count__8579_10261 = 0;var i__8580_10262 = 0;while(true){
if((i__8580_10262 < count__8579_10261))
{var arg__7145__auto___10263 = cljs.core._nth.call(null,chunk__8578_10260,i__8580_10262);a__7144__auto__.push(arg__7145__auto___10263);
{
var G__10264 = seq__8577_10259;
var G__10265 = chunk__8578_10260;
var G__10266 = count__8579_10261;
var G__10267 = (i__8580_10262 + 1);
seq__8577_10259 = G__10264;
chunk__8578_10260 = G__10265;
count__8579_10261 = G__10266;
i__8580_10262 = G__10267;
continue;
}
} else
{var temp__4092__auto___10268 = cljs.core.seq.call(null,seq__8577_10259);if(temp__4092__auto___10268)
{var seq__8577_10269__$1 = temp__4092__auto___10268;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8577_10269__$1))
{var c__5633__auto___10270 = cljs.core.chunk_first.call(null,seq__8577_10269__$1);{
var G__10271 = cljs.core.chunk_rest.call(null,seq__8577_10269__$1);
var G__10272 = c__5633__auto___10270;
var G__10273 = cljs.core.count.call(null,c__5633__auto___10270);
var G__10274 = 0;
seq__8577_10259 = G__10271;
chunk__8578_10260 = G__10272;
count__8579_10261 = G__10273;
i__8580_10262 = G__10274;
continue;
}
} else
{var arg__7145__auto___10275 = cljs.core.first.call(null,seq__8577_10269__$1);a__7144__auto__.push(arg__7145__auto___10275);
{
var G__10276 = cljs.core.next.call(null,seq__8577_10269__$1);
var G__10277 = null;
var G__10278 = 0;
var G__10279 = 0;
seq__8577_10259 = G__10276;
chunk__8578_10260 = G__10277;
count__8579_10261 = G__10278;
i__8580_10262 = G__10279;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.kbd.apply(null,a__7144__auto__);
};
var kbd = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return kbd__delegate.call(this,args__7143__auto__);};
kbd.cljs$lang$maxFixedArity = 0;
kbd.cljs$lang$applyTo = (function (arglist__10280){
var args__7143__auto__ = cljs.core.seq(arglist__10280);
return kbd__delegate(args__7143__auto__);
});
kbd.cljs$core$IFn$_invoke$arity$variadic = kbd__delegate;
return kbd;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.keygen = (function() { 
var keygen__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8585_10281 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8586_10282 = null;var count__8587_10283 = 0;var i__8588_10284 = 0;while(true){
if((i__8588_10284 < count__8587_10283))
{var arg__7145__auto___10285 = cljs.core._nth.call(null,chunk__8586_10282,i__8588_10284);a__7144__auto__.push(arg__7145__auto___10285);
{
var G__10286 = seq__8585_10281;
var G__10287 = chunk__8586_10282;
var G__10288 = count__8587_10283;
var G__10289 = (i__8588_10284 + 1);
seq__8585_10281 = G__10286;
chunk__8586_10282 = G__10287;
count__8587_10283 = G__10288;
i__8588_10284 = G__10289;
continue;
}
} else
{var temp__4092__auto___10290 = cljs.core.seq.call(null,seq__8585_10281);if(temp__4092__auto___10290)
{var seq__8585_10291__$1 = temp__4092__auto___10290;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8585_10291__$1))
{var c__5633__auto___10292 = cljs.core.chunk_first.call(null,seq__8585_10291__$1);{
var G__10293 = cljs.core.chunk_rest.call(null,seq__8585_10291__$1);
var G__10294 = c__5633__auto___10292;
var G__10295 = cljs.core.count.call(null,c__5633__auto___10292);
var G__10296 = 0;
seq__8585_10281 = G__10293;
chunk__8586_10282 = G__10294;
count__8587_10283 = G__10295;
i__8588_10284 = G__10296;
continue;
}
} else
{var arg__7145__auto___10297 = cljs.core.first.call(null,seq__8585_10291__$1);a__7144__auto__.push(arg__7145__auto___10297);
{
var G__10298 = cljs.core.next.call(null,seq__8585_10291__$1);
var G__10299 = null;
var G__10300 = 0;
var G__10301 = 0;
seq__8585_10281 = G__10298;
chunk__8586_10282 = G__10299;
count__8587_10283 = G__10300;
i__8588_10284 = G__10301;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.keygen.apply(null,a__7144__auto__);
};
var keygen = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return keygen__delegate.call(this,args__7143__auto__);};
keygen.cljs$lang$maxFixedArity = 0;
keygen.cljs$lang$applyTo = (function (arglist__10302){
var args__7143__auto__ = cljs.core.seq(arglist__10302);
return keygen__delegate(args__7143__auto__);
});
keygen.cljs$core$IFn$_invoke$arity$variadic = keygen__delegate;
return keygen;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.label = (function() { 
var label__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8593_10303 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8594_10304 = null;var count__8595_10305 = 0;var i__8596_10306 = 0;while(true){
if((i__8596_10306 < count__8595_10305))
{var arg__7145__auto___10307 = cljs.core._nth.call(null,chunk__8594_10304,i__8596_10306);a__7144__auto__.push(arg__7145__auto___10307);
{
var G__10308 = seq__8593_10303;
var G__10309 = chunk__8594_10304;
var G__10310 = count__8595_10305;
var G__10311 = (i__8596_10306 + 1);
seq__8593_10303 = G__10308;
chunk__8594_10304 = G__10309;
count__8595_10305 = G__10310;
i__8596_10306 = G__10311;
continue;
}
} else
{var temp__4092__auto___10312 = cljs.core.seq.call(null,seq__8593_10303);if(temp__4092__auto___10312)
{var seq__8593_10313__$1 = temp__4092__auto___10312;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8593_10313__$1))
{var c__5633__auto___10314 = cljs.core.chunk_first.call(null,seq__8593_10313__$1);{
var G__10315 = cljs.core.chunk_rest.call(null,seq__8593_10313__$1);
var G__10316 = c__5633__auto___10314;
var G__10317 = cljs.core.count.call(null,c__5633__auto___10314);
var G__10318 = 0;
seq__8593_10303 = G__10315;
chunk__8594_10304 = G__10316;
count__8595_10305 = G__10317;
i__8596_10306 = G__10318;
continue;
}
} else
{var arg__7145__auto___10319 = cljs.core.first.call(null,seq__8593_10313__$1);a__7144__auto__.push(arg__7145__auto___10319);
{
var G__10320 = cljs.core.next.call(null,seq__8593_10313__$1);
var G__10321 = null;
var G__10322 = 0;
var G__10323 = 0;
seq__8593_10303 = G__10320;
chunk__8594_10304 = G__10321;
count__8595_10305 = G__10322;
i__8596_10306 = G__10323;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.label.apply(null,a__7144__auto__);
};
var label = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return label__delegate.call(this,args__7143__auto__);};
label.cljs$lang$maxFixedArity = 0;
label.cljs$lang$applyTo = (function (arglist__10324){
var args__7143__auto__ = cljs.core.seq(arglist__10324);
return label__delegate(args__7143__auto__);
});
label.cljs$core$IFn$_invoke$arity$variadic = label__delegate;
return label;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.legend = (function() { 
var legend__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8601_10325 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8602_10326 = null;var count__8603_10327 = 0;var i__8604_10328 = 0;while(true){
if((i__8604_10328 < count__8603_10327))
{var arg__7145__auto___10329 = cljs.core._nth.call(null,chunk__8602_10326,i__8604_10328);a__7144__auto__.push(arg__7145__auto___10329);
{
var G__10330 = seq__8601_10325;
var G__10331 = chunk__8602_10326;
var G__10332 = count__8603_10327;
var G__10333 = (i__8604_10328 + 1);
seq__8601_10325 = G__10330;
chunk__8602_10326 = G__10331;
count__8603_10327 = G__10332;
i__8604_10328 = G__10333;
continue;
}
} else
{var temp__4092__auto___10334 = cljs.core.seq.call(null,seq__8601_10325);if(temp__4092__auto___10334)
{var seq__8601_10335__$1 = temp__4092__auto___10334;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8601_10335__$1))
{var c__5633__auto___10336 = cljs.core.chunk_first.call(null,seq__8601_10335__$1);{
var G__10337 = cljs.core.chunk_rest.call(null,seq__8601_10335__$1);
var G__10338 = c__5633__auto___10336;
var G__10339 = cljs.core.count.call(null,c__5633__auto___10336);
var G__10340 = 0;
seq__8601_10325 = G__10337;
chunk__8602_10326 = G__10338;
count__8603_10327 = G__10339;
i__8604_10328 = G__10340;
continue;
}
} else
{var arg__7145__auto___10341 = cljs.core.first.call(null,seq__8601_10335__$1);a__7144__auto__.push(arg__7145__auto___10341);
{
var G__10342 = cljs.core.next.call(null,seq__8601_10335__$1);
var G__10343 = null;
var G__10344 = 0;
var G__10345 = 0;
seq__8601_10325 = G__10342;
chunk__8602_10326 = G__10343;
count__8603_10327 = G__10344;
i__8604_10328 = G__10345;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.legend.apply(null,a__7144__auto__);
};
var legend = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return legend__delegate.call(this,args__7143__auto__);};
legend.cljs$lang$maxFixedArity = 0;
legend.cljs$lang$applyTo = (function (arglist__10346){
var args__7143__auto__ = cljs.core.seq(arglist__10346);
return legend__delegate(args__7143__auto__);
});
legend.cljs$core$IFn$_invoke$arity$variadic = legend__delegate;
return legend;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.li = (function() { 
var li__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8609_10347 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8610_10348 = null;var count__8611_10349 = 0;var i__8612_10350 = 0;while(true){
if((i__8612_10350 < count__8611_10349))
{var arg__7145__auto___10351 = cljs.core._nth.call(null,chunk__8610_10348,i__8612_10350);a__7144__auto__.push(arg__7145__auto___10351);
{
var G__10352 = seq__8609_10347;
var G__10353 = chunk__8610_10348;
var G__10354 = count__8611_10349;
var G__10355 = (i__8612_10350 + 1);
seq__8609_10347 = G__10352;
chunk__8610_10348 = G__10353;
count__8611_10349 = G__10354;
i__8612_10350 = G__10355;
continue;
}
} else
{var temp__4092__auto___10356 = cljs.core.seq.call(null,seq__8609_10347);if(temp__4092__auto___10356)
{var seq__8609_10357__$1 = temp__4092__auto___10356;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8609_10357__$1))
{var c__5633__auto___10358 = cljs.core.chunk_first.call(null,seq__8609_10357__$1);{
var G__10359 = cljs.core.chunk_rest.call(null,seq__8609_10357__$1);
var G__10360 = c__5633__auto___10358;
var G__10361 = cljs.core.count.call(null,c__5633__auto___10358);
var G__10362 = 0;
seq__8609_10347 = G__10359;
chunk__8610_10348 = G__10360;
count__8611_10349 = G__10361;
i__8612_10350 = G__10362;
continue;
}
} else
{var arg__7145__auto___10363 = cljs.core.first.call(null,seq__8609_10357__$1);a__7144__auto__.push(arg__7145__auto___10363);
{
var G__10364 = cljs.core.next.call(null,seq__8609_10357__$1);
var G__10365 = null;
var G__10366 = 0;
var G__10367 = 0;
seq__8609_10347 = G__10364;
chunk__8610_10348 = G__10365;
count__8611_10349 = G__10366;
i__8612_10350 = G__10367;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.li.apply(null,a__7144__auto__);
};
var li = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return li__delegate.call(this,args__7143__auto__);};
li.cljs$lang$maxFixedArity = 0;
li.cljs$lang$applyTo = (function (arglist__10368){
var args__7143__auto__ = cljs.core.seq(arglist__10368);
return li__delegate(args__7143__auto__);
});
li.cljs$core$IFn$_invoke$arity$variadic = li__delegate;
return li;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.link = (function() { 
var link__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8617_10369 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8618_10370 = null;var count__8619_10371 = 0;var i__8620_10372 = 0;while(true){
if((i__8620_10372 < count__8619_10371))
{var arg__7145__auto___10373 = cljs.core._nth.call(null,chunk__8618_10370,i__8620_10372);a__7144__auto__.push(arg__7145__auto___10373);
{
var G__10374 = seq__8617_10369;
var G__10375 = chunk__8618_10370;
var G__10376 = count__8619_10371;
var G__10377 = (i__8620_10372 + 1);
seq__8617_10369 = G__10374;
chunk__8618_10370 = G__10375;
count__8619_10371 = G__10376;
i__8620_10372 = G__10377;
continue;
}
} else
{var temp__4092__auto___10378 = cljs.core.seq.call(null,seq__8617_10369);if(temp__4092__auto___10378)
{var seq__8617_10379__$1 = temp__4092__auto___10378;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8617_10379__$1))
{var c__5633__auto___10380 = cljs.core.chunk_first.call(null,seq__8617_10379__$1);{
var G__10381 = cljs.core.chunk_rest.call(null,seq__8617_10379__$1);
var G__10382 = c__5633__auto___10380;
var G__10383 = cljs.core.count.call(null,c__5633__auto___10380);
var G__10384 = 0;
seq__8617_10369 = G__10381;
chunk__8618_10370 = G__10382;
count__8619_10371 = G__10383;
i__8620_10372 = G__10384;
continue;
}
} else
{var arg__7145__auto___10385 = cljs.core.first.call(null,seq__8617_10379__$1);a__7144__auto__.push(arg__7145__auto___10385);
{
var G__10386 = cljs.core.next.call(null,seq__8617_10379__$1);
var G__10387 = null;
var G__10388 = 0;
var G__10389 = 0;
seq__8617_10369 = G__10386;
chunk__8618_10370 = G__10387;
count__8619_10371 = G__10388;
i__8620_10372 = G__10389;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.link.apply(null,a__7144__auto__);
};
var link = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return link__delegate.call(this,args__7143__auto__);};
link.cljs$lang$maxFixedArity = 0;
link.cljs$lang$applyTo = (function (arglist__10390){
var args__7143__auto__ = cljs.core.seq(arglist__10390);
return link__delegate(args__7143__auto__);
});
link.cljs$core$IFn$_invoke$arity$variadic = link__delegate;
return link;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.main = (function() { 
var main__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8625_10391 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8626_10392 = null;var count__8627_10393 = 0;var i__8628_10394 = 0;while(true){
if((i__8628_10394 < count__8627_10393))
{var arg__7145__auto___10395 = cljs.core._nth.call(null,chunk__8626_10392,i__8628_10394);a__7144__auto__.push(arg__7145__auto___10395);
{
var G__10396 = seq__8625_10391;
var G__10397 = chunk__8626_10392;
var G__10398 = count__8627_10393;
var G__10399 = (i__8628_10394 + 1);
seq__8625_10391 = G__10396;
chunk__8626_10392 = G__10397;
count__8627_10393 = G__10398;
i__8628_10394 = G__10399;
continue;
}
} else
{var temp__4092__auto___10400 = cljs.core.seq.call(null,seq__8625_10391);if(temp__4092__auto___10400)
{var seq__8625_10401__$1 = temp__4092__auto___10400;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8625_10401__$1))
{var c__5633__auto___10402 = cljs.core.chunk_first.call(null,seq__8625_10401__$1);{
var G__10403 = cljs.core.chunk_rest.call(null,seq__8625_10401__$1);
var G__10404 = c__5633__auto___10402;
var G__10405 = cljs.core.count.call(null,c__5633__auto___10402);
var G__10406 = 0;
seq__8625_10391 = G__10403;
chunk__8626_10392 = G__10404;
count__8627_10393 = G__10405;
i__8628_10394 = G__10406;
continue;
}
} else
{var arg__7145__auto___10407 = cljs.core.first.call(null,seq__8625_10401__$1);a__7144__auto__.push(arg__7145__auto___10407);
{
var G__10408 = cljs.core.next.call(null,seq__8625_10401__$1);
var G__10409 = null;
var G__10410 = 0;
var G__10411 = 0;
seq__8625_10391 = G__10408;
chunk__8626_10392 = G__10409;
count__8627_10393 = G__10410;
i__8628_10394 = G__10411;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.main.apply(null,a__7144__auto__);
};
var main = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return main__delegate.call(this,args__7143__auto__);};
main.cljs$lang$maxFixedArity = 0;
main.cljs$lang$applyTo = (function (arglist__10412){
var args__7143__auto__ = cljs.core.seq(arglist__10412);
return main__delegate(args__7143__auto__);
});
main.cljs$core$IFn$_invoke$arity$variadic = main__delegate;
return main;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.map = (function() { 
var map__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8633_10413 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8634_10414 = null;var count__8635_10415 = 0;var i__8636_10416 = 0;while(true){
if((i__8636_10416 < count__8635_10415))
{var arg__7145__auto___10417 = cljs.core._nth.call(null,chunk__8634_10414,i__8636_10416);a__7144__auto__.push(arg__7145__auto___10417);
{
var G__10418 = seq__8633_10413;
var G__10419 = chunk__8634_10414;
var G__10420 = count__8635_10415;
var G__10421 = (i__8636_10416 + 1);
seq__8633_10413 = G__10418;
chunk__8634_10414 = G__10419;
count__8635_10415 = G__10420;
i__8636_10416 = G__10421;
continue;
}
} else
{var temp__4092__auto___10422 = cljs.core.seq.call(null,seq__8633_10413);if(temp__4092__auto___10422)
{var seq__8633_10423__$1 = temp__4092__auto___10422;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8633_10423__$1))
{var c__5633__auto___10424 = cljs.core.chunk_first.call(null,seq__8633_10423__$1);{
var G__10425 = cljs.core.chunk_rest.call(null,seq__8633_10423__$1);
var G__10426 = c__5633__auto___10424;
var G__10427 = cljs.core.count.call(null,c__5633__auto___10424);
var G__10428 = 0;
seq__8633_10413 = G__10425;
chunk__8634_10414 = G__10426;
count__8635_10415 = G__10427;
i__8636_10416 = G__10428;
continue;
}
} else
{var arg__7145__auto___10429 = cljs.core.first.call(null,seq__8633_10423__$1);a__7144__auto__.push(arg__7145__auto___10429);
{
var G__10430 = cljs.core.next.call(null,seq__8633_10423__$1);
var G__10431 = null;
var G__10432 = 0;
var G__10433 = 0;
seq__8633_10413 = G__10430;
chunk__8634_10414 = G__10431;
count__8635_10415 = G__10432;
i__8636_10416 = G__10433;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.map.apply(null,a__7144__auto__);
};
var map = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return map__delegate.call(this,args__7143__auto__);};
map.cljs$lang$maxFixedArity = 0;
map.cljs$lang$applyTo = (function (arglist__10434){
var args__7143__auto__ = cljs.core.seq(arglist__10434);
return map__delegate(args__7143__auto__);
});
map.cljs$core$IFn$_invoke$arity$variadic = map__delegate;
return map;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.mark = (function() { 
var mark__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8641_10435 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8642_10436 = null;var count__8643_10437 = 0;var i__8644_10438 = 0;while(true){
if((i__8644_10438 < count__8643_10437))
{var arg__7145__auto___10439 = cljs.core._nth.call(null,chunk__8642_10436,i__8644_10438);a__7144__auto__.push(arg__7145__auto___10439);
{
var G__10440 = seq__8641_10435;
var G__10441 = chunk__8642_10436;
var G__10442 = count__8643_10437;
var G__10443 = (i__8644_10438 + 1);
seq__8641_10435 = G__10440;
chunk__8642_10436 = G__10441;
count__8643_10437 = G__10442;
i__8644_10438 = G__10443;
continue;
}
} else
{var temp__4092__auto___10444 = cljs.core.seq.call(null,seq__8641_10435);if(temp__4092__auto___10444)
{var seq__8641_10445__$1 = temp__4092__auto___10444;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8641_10445__$1))
{var c__5633__auto___10446 = cljs.core.chunk_first.call(null,seq__8641_10445__$1);{
var G__10447 = cljs.core.chunk_rest.call(null,seq__8641_10445__$1);
var G__10448 = c__5633__auto___10446;
var G__10449 = cljs.core.count.call(null,c__5633__auto___10446);
var G__10450 = 0;
seq__8641_10435 = G__10447;
chunk__8642_10436 = G__10448;
count__8643_10437 = G__10449;
i__8644_10438 = G__10450;
continue;
}
} else
{var arg__7145__auto___10451 = cljs.core.first.call(null,seq__8641_10445__$1);a__7144__auto__.push(arg__7145__auto___10451);
{
var G__10452 = cljs.core.next.call(null,seq__8641_10445__$1);
var G__10453 = null;
var G__10454 = 0;
var G__10455 = 0;
seq__8641_10435 = G__10452;
chunk__8642_10436 = G__10453;
count__8643_10437 = G__10454;
i__8644_10438 = G__10455;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.mark.apply(null,a__7144__auto__);
};
var mark = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return mark__delegate.call(this,args__7143__auto__);};
mark.cljs$lang$maxFixedArity = 0;
mark.cljs$lang$applyTo = (function (arglist__10456){
var args__7143__auto__ = cljs.core.seq(arglist__10456);
return mark__delegate(args__7143__auto__);
});
mark.cljs$core$IFn$_invoke$arity$variadic = mark__delegate;
return mark;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.menu = (function() { 
var menu__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8649_10457 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8650_10458 = null;var count__8651_10459 = 0;var i__8652_10460 = 0;while(true){
if((i__8652_10460 < count__8651_10459))
{var arg__7145__auto___10461 = cljs.core._nth.call(null,chunk__8650_10458,i__8652_10460);a__7144__auto__.push(arg__7145__auto___10461);
{
var G__10462 = seq__8649_10457;
var G__10463 = chunk__8650_10458;
var G__10464 = count__8651_10459;
var G__10465 = (i__8652_10460 + 1);
seq__8649_10457 = G__10462;
chunk__8650_10458 = G__10463;
count__8651_10459 = G__10464;
i__8652_10460 = G__10465;
continue;
}
} else
{var temp__4092__auto___10466 = cljs.core.seq.call(null,seq__8649_10457);if(temp__4092__auto___10466)
{var seq__8649_10467__$1 = temp__4092__auto___10466;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8649_10467__$1))
{var c__5633__auto___10468 = cljs.core.chunk_first.call(null,seq__8649_10467__$1);{
var G__10469 = cljs.core.chunk_rest.call(null,seq__8649_10467__$1);
var G__10470 = c__5633__auto___10468;
var G__10471 = cljs.core.count.call(null,c__5633__auto___10468);
var G__10472 = 0;
seq__8649_10457 = G__10469;
chunk__8650_10458 = G__10470;
count__8651_10459 = G__10471;
i__8652_10460 = G__10472;
continue;
}
} else
{var arg__7145__auto___10473 = cljs.core.first.call(null,seq__8649_10467__$1);a__7144__auto__.push(arg__7145__auto___10473);
{
var G__10474 = cljs.core.next.call(null,seq__8649_10467__$1);
var G__10475 = null;
var G__10476 = 0;
var G__10477 = 0;
seq__8649_10457 = G__10474;
chunk__8650_10458 = G__10475;
count__8651_10459 = G__10476;
i__8652_10460 = G__10477;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.menu.apply(null,a__7144__auto__);
};
var menu = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return menu__delegate.call(this,args__7143__auto__);};
menu.cljs$lang$maxFixedArity = 0;
menu.cljs$lang$applyTo = (function (arglist__10478){
var args__7143__auto__ = cljs.core.seq(arglist__10478);
return menu__delegate(args__7143__auto__);
});
menu.cljs$core$IFn$_invoke$arity$variadic = menu__delegate;
return menu;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.menuitem = (function() { 
var menuitem__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8657_10479 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8658_10480 = null;var count__8659_10481 = 0;var i__8660_10482 = 0;while(true){
if((i__8660_10482 < count__8659_10481))
{var arg__7145__auto___10483 = cljs.core._nth.call(null,chunk__8658_10480,i__8660_10482);a__7144__auto__.push(arg__7145__auto___10483);
{
var G__10484 = seq__8657_10479;
var G__10485 = chunk__8658_10480;
var G__10486 = count__8659_10481;
var G__10487 = (i__8660_10482 + 1);
seq__8657_10479 = G__10484;
chunk__8658_10480 = G__10485;
count__8659_10481 = G__10486;
i__8660_10482 = G__10487;
continue;
}
} else
{var temp__4092__auto___10488 = cljs.core.seq.call(null,seq__8657_10479);if(temp__4092__auto___10488)
{var seq__8657_10489__$1 = temp__4092__auto___10488;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8657_10489__$1))
{var c__5633__auto___10490 = cljs.core.chunk_first.call(null,seq__8657_10489__$1);{
var G__10491 = cljs.core.chunk_rest.call(null,seq__8657_10489__$1);
var G__10492 = c__5633__auto___10490;
var G__10493 = cljs.core.count.call(null,c__5633__auto___10490);
var G__10494 = 0;
seq__8657_10479 = G__10491;
chunk__8658_10480 = G__10492;
count__8659_10481 = G__10493;
i__8660_10482 = G__10494;
continue;
}
} else
{var arg__7145__auto___10495 = cljs.core.first.call(null,seq__8657_10489__$1);a__7144__auto__.push(arg__7145__auto___10495);
{
var G__10496 = cljs.core.next.call(null,seq__8657_10489__$1);
var G__10497 = null;
var G__10498 = 0;
var G__10499 = 0;
seq__8657_10479 = G__10496;
chunk__8658_10480 = G__10497;
count__8659_10481 = G__10498;
i__8660_10482 = G__10499;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.menuitem.apply(null,a__7144__auto__);
};
var menuitem = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return menuitem__delegate.call(this,args__7143__auto__);};
menuitem.cljs$lang$maxFixedArity = 0;
menuitem.cljs$lang$applyTo = (function (arglist__10500){
var args__7143__auto__ = cljs.core.seq(arglist__10500);
return menuitem__delegate(args__7143__auto__);
});
menuitem.cljs$core$IFn$_invoke$arity$variadic = menuitem__delegate;
return menuitem;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.meta = (function() { 
var meta__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8665_10501 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8666_10502 = null;var count__8667_10503 = 0;var i__8668_10504 = 0;while(true){
if((i__8668_10504 < count__8667_10503))
{var arg__7145__auto___10505 = cljs.core._nth.call(null,chunk__8666_10502,i__8668_10504);a__7144__auto__.push(arg__7145__auto___10505);
{
var G__10506 = seq__8665_10501;
var G__10507 = chunk__8666_10502;
var G__10508 = count__8667_10503;
var G__10509 = (i__8668_10504 + 1);
seq__8665_10501 = G__10506;
chunk__8666_10502 = G__10507;
count__8667_10503 = G__10508;
i__8668_10504 = G__10509;
continue;
}
} else
{var temp__4092__auto___10510 = cljs.core.seq.call(null,seq__8665_10501);if(temp__4092__auto___10510)
{var seq__8665_10511__$1 = temp__4092__auto___10510;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8665_10511__$1))
{var c__5633__auto___10512 = cljs.core.chunk_first.call(null,seq__8665_10511__$1);{
var G__10513 = cljs.core.chunk_rest.call(null,seq__8665_10511__$1);
var G__10514 = c__5633__auto___10512;
var G__10515 = cljs.core.count.call(null,c__5633__auto___10512);
var G__10516 = 0;
seq__8665_10501 = G__10513;
chunk__8666_10502 = G__10514;
count__8667_10503 = G__10515;
i__8668_10504 = G__10516;
continue;
}
} else
{var arg__7145__auto___10517 = cljs.core.first.call(null,seq__8665_10511__$1);a__7144__auto__.push(arg__7145__auto___10517);
{
var G__10518 = cljs.core.next.call(null,seq__8665_10511__$1);
var G__10519 = null;
var G__10520 = 0;
var G__10521 = 0;
seq__8665_10501 = G__10518;
chunk__8666_10502 = G__10519;
count__8667_10503 = G__10520;
i__8668_10504 = G__10521;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.meta.apply(null,a__7144__auto__);
};
var meta = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return meta__delegate.call(this,args__7143__auto__);};
meta.cljs$lang$maxFixedArity = 0;
meta.cljs$lang$applyTo = (function (arglist__10522){
var args__7143__auto__ = cljs.core.seq(arglist__10522);
return meta__delegate(args__7143__auto__);
});
meta.cljs$core$IFn$_invoke$arity$variadic = meta__delegate;
return meta;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.meter = (function() { 
var meter__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8673_10523 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8674_10524 = null;var count__8675_10525 = 0;var i__8676_10526 = 0;while(true){
if((i__8676_10526 < count__8675_10525))
{var arg__7145__auto___10527 = cljs.core._nth.call(null,chunk__8674_10524,i__8676_10526);a__7144__auto__.push(arg__7145__auto___10527);
{
var G__10528 = seq__8673_10523;
var G__10529 = chunk__8674_10524;
var G__10530 = count__8675_10525;
var G__10531 = (i__8676_10526 + 1);
seq__8673_10523 = G__10528;
chunk__8674_10524 = G__10529;
count__8675_10525 = G__10530;
i__8676_10526 = G__10531;
continue;
}
} else
{var temp__4092__auto___10532 = cljs.core.seq.call(null,seq__8673_10523);if(temp__4092__auto___10532)
{var seq__8673_10533__$1 = temp__4092__auto___10532;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8673_10533__$1))
{var c__5633__auto___10534 = cljs.core.chunk_first.call(null,seq__8673_10533__$1);{
var G__10535 = cljs.core.chunk_rest.call(null,seq__8673_10533__$1);
var G__10536 = c__5633__auto___10534;
var G__10537 = cljs.core.count.call(null,c__5633__auto___10534);
var G__10538 = 0;
seq__8673_10523 = G__10535;
chunk__8674_10524 = G__10536;
count__8675_10525 = G__10537;
i__8676_10526 = G__10538;
continue;
}
} else
{var arg__7145__auto___10539 = cljs.core.first.call(null,seq__8673_10533__$1);a__7144__auto__.push(arg__7145__auto___10539);
{
var G__10540 = cljs.core.next.call(null,seq__8673_10533__$1);
var G__10541 = null;
var G__10542 = 0;
var G__10543 = 0;
seq__8673_10523 = G__10540;
chunk__8674_10524 = G__10541;
count__8675_10525 = G__10542;
i__8676_10526 = G__10543;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.meter.apply(null,a__7144__auto__);
};
var meter = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return meter__delegate.call(this,args__7143__auto__);};
meter.cljs$lang$maxFixedArity = 0;
meter.cljs$lang$applyTo = (function (arglist__10544){
var args__7143__auto__ = cljs.core.seq(arglist__10544);
return meter__delegate(args__7143__auto__);
});
meter.cljs$core$IFn$_invoke$arity$variadic = meter__delegate;
return meter;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.nav = (function() { 
var nav__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8681_10545 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8682_10546 = null;var count__8683_10547 = 0;var i__8684_10548 = 0;while(true){
if((i__8684_10548 < count__8683_10547))
{var arg__7145__auto___10549 = cljs.core._nth.call(null,chunk__8682_10546,i__8684_10548);a__7144__auto__.push(arg__7145__auto___10549);
{
var G__10550 = seq__8681_10545;
var G__10551 = chunk__8682_10546;
var G__10552 = count__8683_10547;
var G__10553 = (i__8684_10548 + 1);
seq__8681_10545 = G__10550;
chunk__8682_10546 = G__10551;
count__8683_10547 = G__10552;
i__8684_10548 = G__10553;
continue;
}
} else
{var temp__4092__auto___10554 = cljs.core.seq.call(null,seq__8681_10545);if(temp__4092__auto___10554)
{var seq__8681_10555__$1 = temp__4092__auto___10554;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8681_10555__$1))
{var c__5633__auto___10556 = cljs.core.chunk_first.call(null,seq__8681_10555__$1);{
var G__10557 = cljs.core.chunk_rest.call(null,seq__8681_10555__$1);
var G__10558 = c__5633__auto___10556;
var G__10559 = cljs.core.count.call(null,c__5633__auto___10556);
var G__10560 = 0;
seq__8681_10545 = G__10557;
chunk__8682_10546 = G__10558;
count__8683_10547 = G__10559;
i__8684_10548 = G__10560;
continue;
}
} else
{var arg__7145__auto___10561 = cljs.core.first.call(null,seq__8681_10555__$1);a__7144__auto__.push(arg__7145__auto___10561);
{
var G__10562 = cljs.core.next.call(null,seq__8681_10555__$1);
var G__10563 = null;
var G__10564 = 0;
var G__10565 = 0;
seq__8681_10545 = G__10562;
chunk__8682_10546 = G__10563;
count__8683_10547 = G__10564;
i__8684_10548 = G__10565;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.nav.apply(null,a__7144__auto__);
};
var nav = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return nav__delegate.call(this,args__7143__auto__);};
nav.cljs$lang$maxFixedArity = 0;
nav.cljs$lang$applyTo = (function (arglist__10566){
var args__7143__auto__ = cljs.core.seq(arglist__10566);
return nav__delegate(args__7143__auto__);
});
nav.cljs$core$IFn$_invoke$arity$variadic = nav__delegate;
return nav;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.noscript = (function() { 
var noscript__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8689_10567 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8690_10568 = null;var count__8691_10569 = 0;var i__8692_10570 = 0;while(true){
if((i__8692_10570 < count__8691_10569))
{var arg__7145__auto___10571 = cljs.core._nth.call(null,chunk__8690_10568,i__8692_10570);a__7144__auto__.push(arg__7145__auto___10571);
{
var G__10572 = seq__8689_10567;
var G__10573 = chunk__8690_10568;
var G__10574 = count__8691_10569;
var G__10575 = (i__8692_10570 + 1);
seq__8689_10567 = G__10572;
chunk__8690_10568 = G__10573;
count__8691_10569 = G__10574;
i__8692_10570 = G__10575;
continue;
}
} else
{var temp__4092__auto___10576 = cljs.core.seq.call(null,seq__8689_10567);if(temp__4092__auto___10576)
{var seq__8689_10577__$1 = temp__4092__auto___10576;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8689_10577__$1))
{var c__5633__auto___10578 = cljs.core.chunk_first.call(null,seq__8689_10577__$1);{
var G__10579 = cljs.core.chunk_rest.call(null,seq__8689_10577__$1);
var G__10580 = c__5633__auto___10578;
var G__10581 = cljs.core.count.call(null,c__5633__auto___10578);
var G__10582 = 0;
seq__8689_10567 = G__10579;
chunk__8690_10568 = G__10580;
count__8691_10569 = G__10581;
i__8692_10570 = G__10582;
continue;
}
} else
{var arg__7145__auto___10583 = cljs.core.first.call(null,seq__8689_10577__$1);a__7144__auto__.push(arg__7145__auto___10583);
{
var G__10584 = cljs.core.next.call(null,seq__8689_10577__$1);
var G__10585 = null;
var G__10586 = 0;
var G__10587 = 0;
seq__8689_10567 = G__10584;
chunk__8690_10568 = G__10585;
count__8691_10569 = G__10586;
i__8692_10570 = G__10587;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.noscript.apply(null,a__7144__auto__);
};
var noscript = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return noscript__delegate.call(this,args__7143__auto__);};
noscript.cljs$lang$maxFixedArity = 0;
noscript.cljs$lang$applyTo = (function (arglist__10588){
var args__7143__auto__ = cljs.core.seq(arglist__10588);
return noscript__delegate(args__7143__auto__);
});
noscript.cljs$core$IFn$_invoke$arity$variadic = noscript__delegate;
return noscript;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.object = (function() { 
var object__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8697_10589 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8698_10590 = null;var count__8699_10591 = 0;var i__8700_10592 = 0;while(true){
if((i__8700_10592 < count__8699_10591))
{var arg__7145__auto___10593 = cljs.core._nth.call(null,chunk__8698_10590,i__8700_10592);a__7144__auto__.push(arg__7145__auto___10593);
{
var G__10594 = seq__8697_10589;
var G__10595 = chunk__8698_10590;
var G__10596 = count__8699_10591;
var G__10597 = (i__8700_10592 + 1);
seq__8697_10589 = G__10594;
chunk__8698_10590 = G__10595;
count__8699_10591 = G__10596;
i__8700_10592 = G__10597;
continue;
}
} else
{var temp__4092__auto___10598 = cljs.core.seq.call(null,seq__8697_10589);if(temp__4092__auto___10598)
{var seq__8697_10599__$1 = temp__4092__auto___10598;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8697_10599__$1))
{var c__5633__auto___10600 = cljs.core.chunk_first.call(null,seq__8697_10599__$1);{
var G__10601 = cljs.core.chunk_rest.call(null,seq__8697_10599__$1);
var G__10602 = c__5633__auto___10600;
var G__10603 = cljs.core.count.call(null,c__5633__auto___10600);
var G__10604 = 0;
seq__8697_10589 = G__10601;
chunk__8698_10590 = G__10602;
count__8699_10591 = G__10603;
i__8700_10592 = G__10604;
continue;
}
} else
{var arg__7145__auto___10605 = cljs.core.first.call(null,seq__8697_10599__$1);a__7144__auto__.push(arg__7145__auto___10605);
{
var G__10606 = cljs.core.next.call(null,seq__8697_10599__$1);
var G__10607 = null;
var G__10608 = 0;
var G__10609 = 0;
seq__8697_10589 = G__10606;
chunk__8698_10590 = G__10607;
count__8699_10591 = G__10608;
i__8700_10592 = G__10609;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.object.apply(null,a__7144__auto__);
};
var object = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return object__delegate.call(this,args__7143__auto__);};
object.cljs$lang$maxFixedArity = 0;
object.cljs$lang$applyTo = (function (arglist__10610){
var args__7143__auto__ = cljs.core.seq(arglist__10610);
return object__delegate(args__7143__auto__);
});
object.cljs$core$IFn$_invoke$arity$variadic = object__delegate;
return object;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.ol = (function() { 
var ol__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8705_10611 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8706_10612 = null;var count__8707_10613 = 0;var i__8708_10614 = 0;while(true){
if((i__8708_10614 < count__8707_10613))
{var arg__7145__auto___10615 = cljs.core._nth.call(null,chunk__8706_10612,i__8708_10614);a__7144__auto__.push(arg__7145__auto___10615);
{
var G__10616 = seq__8705_10611;
var G__10617 = chunk__8706_10612;
var G__10618 = count__8707_10613;
var G__10619 = (i__8708_10614 + 1);
seq__8705_10611 = G__10616;
chunk__8706_10612 = G__10617;
count__8707_10613 = G__10618;
i__8708_10614 = G__10619;
continue;
}
} else
{var temp__4092__auto___10620 = cljs.core.seq.call(null,seq__8705_10611);if(temp__4092__auto___10620)
{var seq__8705_10621__$1 = temp__4092__auto___10620;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8705_10621__$1))
{var c__5633__auto___10622 = cljs.core.chunk_first.call(null,seq__8705_10621__$1);{
var G__10623 = cljs.core.chunk_rest.call(null,seq__8705_10621__$1);
var G__10624 = c__5633__auto___10622;
var G__10625 = cljs.core.count.call(null,c__5633__auto___10622);
var G__10626 = 0;
seq__8705_10611 = G__10623;
chunk__8706_10612 = G__10624;
count__8707_10613 = G__10625;
i__8708_10614 = G__10626;
continue;
}
} else
{var arg__7145__auto___10627 = cljs.core.first.call(null,seq__8705_10621__$1);a__7144__auto__.push(arg__7145__auto___10627);
{
var G__10628 = cljs.core.next.call(null,seq__8705_10621__$1);
var G__10629 = null;
var G__10630 = 0;
var G__10631 = 0;
seq__8705_10611 = G__10628;
chunk__8706_10612 = G__10629;
count__8707_10613 = G__10630;
i__8708_10614 = G__10631;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.ol.apply(null,a__7144__auto__);
};
var ol = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ol__delegate.call(this,args__7143__auto__);};
ol.cljs$lang$maxFixedArity = 0;
ol.cljs$lang$applyTo = (function (arglist__10632){
var args__7143__auto__ = cljs.core.seq(arglist__10632);
return ol__delegate(args__7143__auto__);
});
ol.cljs$core$IFn$_invoke$arity$variadic = ol__delegate;
return ol;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.optgroup = (function() { 
var optgroup__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8713_10633 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8714_10634 = null;var count__8715_10635 = 0;var i__8716_10636 = 0;while(true){
if((i__8716_10636 < count__8715_10635))
{var arg__7145__auto___10637 = cljs.core._nth.call(null,chunk__8714_10634,i__8716_10636);a__7144__auto__.push(arg__7145__auto___10637);
{
var G__10638 = seq__8713_10633;
var G__10639 = chunk__8714_10634;
var G__10640 = count__8715_10635;
var G__10641 = (i__8716_10636 + 1);
seq__8713_10633 = G__10638;
chunk__8714_10634 = G__10639;
count__8715_10635 = G__10640;
i__8716_10636 = G__10641;
continue;
}
} else
{var temp__4092__auto___10642 = cljs.core.seq.call(null,seq__8713_10633);if(temp__4092__auto___10642)
{var seq__8713_10643__$1 = temp__4092__auto___10642;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8713_10643__$1))
{var c__5633__auto___10644 = cljs.core.chunk_first.call(null,seq__8713_10643__$1);{
var G__10645 = cljs.core.chunk_rest.call(null,seq__8713_10643__$1);
var G__10646 = c__5633__auto___10644;
var G__10647 = cljs.core.count.call(null,c__5633__auto___10644);
var G__10648 = 0;
seq__8713_10633 = G__10645;
chunk__8714_10634 = G__10646;
count__8715_10635 = G__10647;
i__8716_10636 = G__10648;
continue;
}
} else
{var arg__7145__auto___10649 = cljs.core.first.call(null,seq__8713_10643__$1);a__7144__auto__.push(arg__7145__auto___10649);
{
var G__10650 = cljs.core.next.call(null,seq__8713_10643__$1);
var G__10651 = null;
var G__10652 = 0;
var G__10653 = 0;
seq__8713_10633 = G__10650;
chunk__8714_10634 = G__10651;
count__8715_10635 = G__10652;
i__8716_10636 = G__10653;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.optgroup.apply(null,a__7144__auto__);
};
var optgroup = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return optgroup__delegate.call(this,args__7143__auto__);};
optgroup.cljs$lang$maxFixedArity = 0;
optgroup.cljs$lang$applyTo = (function (arglist__10654){
var args__7143__auto__ = cljs.core.seq(arglist__10654);
return optgroup__delegate(args__7143__auto__);
});
optgroup.cljs$core$IFn$_invoke$arity$variadic = optgroup__delegate;
return optgroup;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.option = (function() { 
var option__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8721_10655 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8722_10656 = null;var count__8723_10657 = 0;var i__8724_10658 = 0;while(true){
if((i__8724_10658 < count__8723_10657))
{var arg__7145__auto___10659 = cljs.core._nth.call(null,chunk__8722_10656,i__8724_10658);a__7144__auto__.push(arg__7145__auto___10659);
{
var G__10660 = seq__8721_10655;
var G__10661 = chunk__8722_10656;
var G__10662 = count__8723_10657;
var G__10663 = (i__8724_10658 + 1);
seq__8721_10655 = G__10660;
chunk__8722_10656 = G__10661;
count__8723_10657 = G__10662;
i__8724_10658 = G__10663;
continue;
}
} else
{var temp__4092__auto___10664 = cljs.core.seq.call(null,seq__8721_10655);if(temp__4092__auto___10664)
{var seq__8721_10665__$1 = temp__4092__auto___10664;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8721_10665__$1))
{var c__5633__auto___10666 = cljs.core.chunk_first.call(null,seq__8721_10665__$1);{
var G__10667 = cljs.core.chunk_rest.call(null,seq__8721_10665__$1);
var G__10668 = c__5633__auto___10666;
var G__10669 = cljs.core.count.call(null,c__5633__auto___10666);
var G__10670 = 0;
seq__8721_10655 = G__10667;
chunk__8722_10656 = G__10668;
count__8723_10657 = G__10669;
i__8724_10658 = G__10670;
continue;
}
} else
{var arg__7145__auto___10671 = cljs.core.first.call(null,seq__8721_10665__$1);a__7144__auto__.push(arg__7145__auto___10671);
{
var G__10672 = cljs.core.next.call(null,seq__8721_10665__$1);
var G__10673 = null;
var G__10674 = 0;
var G__10675 = 0;
seq__8721_10655 = G__10672;
chunk__8722_10656 = G__10673;
count__8723_10657 = G__10674;
i__8724_10658 = G__10675;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.option.apply(null,a__7144__auto__);
};
var option = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return option__delegate.call(this,args__7143__auto__);};
option.cljs$lang$maxFixedArity = 0;
option.cljs$lang$applyTo = (function (arglist__10676){
var args__7143__auto__ = cljs.core.seq(arglist__10676);
return option__delegate(args__7143__auto__);
});
option.cljs$core$IFn$_invoke$arity$variadic = option__delegate;
return option;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.output = (function() { 
var output__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8729_10677 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8730_10678 = null;var count__8731_10679 = 0;var i__8732_10680 = 0;while(true){
if((i__8732_10680 < count__8731_10679))
{var arg__7145__auto___10681 = cljs.core._nth.call(null,chunk__8730_10678,i__8732_10680);a__7144__auto__.push(arg__7145__auto___10681);
{
var G__10682 = seq__8729_10677;
var G__10683 = chunk__8730_10678;
var G__10684 = count__8731_10679;
var G__10685 = (i__8732_10680 + 1);
seq__8729_10677 = G__10682;
chunk__8730_10678 = G__10683;
count__8731_10679 = G__10684;
i__8732_10680 = G__10685;
continue;
}
} else
{var temp__4092__auto___10686 = cljs.core.seq.call(null,seq__8729_10677);if(temp__4092__auto___10686)
{var seq__8729_10687__$1 = temp__4092__auto___10686;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8729_10687__$1))
{var c__5633__auto___10688 = cljs.core.chunk_first.call(null,seq__8729_10687__$1);{
var G__10689 = cljs.core.chunk_rest.call(null,seq__8729_10687__$1);
var G__10690 = c__5633__auto___10688;
var G__10691 = cljs.core.count.call(null,c__5633__auto___10688);
var G__10692 = 0;
seq__8729_10677 = G__10689;
chunk__8730_10678 = G__10690;
count__8731_10679 = G__10691;
i__8732_10680 = G__10692;
continue;
}
} else
{var arg__7145__auto___10693 = cljs.core.first.call(null,seq__8729_10687__$1);a__7144__auto__.push(arg__7145__auto___10693);
{
var G__10694 = cljs.core.next.call(null,seq__8729_10687__$1);
var G__10695 = null;
var G__10696 = 0;
var G__10697 = 0;
seq__8729_10677 = G__10694;
chunk__8730_10678 = G__10695;
count__8731_10679 = G__10696;
i__8732_10680 = G__10697;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.output.apply(null,a__7144__auto__);
};
var output = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return output__delegate.call(this,args__7143__auto__);};
output.cljs$lang$maxFixedArity = 0;
output.cljs$lang$applyTo = (function (arglist__10698){
var args__7143__auto__ = cljs.core.seq(arglist__10698);
return output__delegate(args__7143__auto__);
});
output.cljs$core$IFn$_invoke$arity$variadic = output__delegate;
return output;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.p = (function() { 
var p__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8737_10699 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8738_10700 = null;var count__8739_10701 = 0;var i__8740_10702 = 0;while(true){
if((i__8740_10702 < count__8739_10701))
{var arg__7145__auto___10703 = cljs.core._nth.call(null,chunk__8738_10700,i__8740_10702);a__7144__auto__.push(arg__7145__auto___10703);
{
var G__10704 = seq__8737_10699;
var G__10705 = chunk__8738_10700;
var G__10706 = count__8739_10701;
var G__10707 = (i__8740_10702 + 1);
seq__8737_10699 = G__10704;
chunk__8738_10700 = G__10705;
count__8739_10701 = G__10706;
i__8740_10702 = G__10707;
continue;
}
} else
{var temp__4092__auto___10708 = cljs.core.seq.call(null,seq__8737_10699);if(temp__4092__auto___10708)
{var seq__8737_10709__$1 = temp__4092__auto___10708;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8737_10709__$1))
{var c__5633__auto___10710 = cljs.core.chunk_first.call(null,seq__8737_10709__$1);{
var G__10711 = cljs.core.chunk_rest.call(null,seq__8737_10709__$1);
var G__10712 = c__5633__auto___10710;
var G__10713 = cljs.core.count.call(null,c__5633__auto___10710);
var G__10714 = 0;
seq__8737_10699 = G__10711;
chunk__8738_10700 = G__10712;
count__8739_10701 = G__10713;
i__8740_10702 = G__10714;
continue;
}
} else
{var arg__7145__auto___10715 = cljs.core.first.call(null,seq__8737_10709__$1);a__7144__auto__.push(arg__7145__auto___10715);
{
var G__10716 = cljs.core.next.call(null,seq__8737_10709__$1);
var G__10717 = null;
var G__10718 = 0;
var G__10719 = 0;
seq__8737_10699 = G__10716;
chunk__8738_10700 = G__10717;
count__8739_10701 = G__10718;
i__8740_10702 = G__10719;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.p.apply(null,a__7144__auto__);
};
var p = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return p__delegate.call(this,args__7143__auto__);};
p.cljs$lang$maxFixedArity = 0;
p.cljs$lang$applyTo = (function (arglist__10720){
var args__7143__auto__ = cljs.core.seq(arglist__10720);
return p__delegate(args__7143__auto__);
});
p.cljs$core$IFn$_invoke$arity$variadic = p__delegate;
return p;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.param = (function() { 
var param__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8745_10721 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8746_10722 = null;var count__8747_10723 = 0;var i__8748_10724 = 0;while(true){
if((i__8748_10724 < count__8747_10723))
{var arg__7145__auto___10725 = cljs.core._nth.call(null,chunk__8746_10722,i__8748_10724);a__7144__auto__.push(arg__7145__auto___10725);
{
var G__10726 = seq__8745_10721;
var G__10727 = chunk__8746_10722;
var G__10728 = count__8747_10723;
var G__10729 = (i__8748_10724 + 1);
seq__8745_10721 = G__10726;
chunk__8746_10722 = G__10727;
count__8747_10723 = G__10728;
i__8748_10724 = G__10729;
continue;
}
} else
{var temp__4092__auto___10730 = cljs.core.seq.call(null,seq__8745_10721);if(temp__4092__auto___10730)
{var seq__8745_10731__$1 = temp__4092__auto___10730;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8745_10731__$1))
{var c__5633__auto___10732 = cljs.core.chunk_first.call(null,seq__8745_10731__$1);{
var G__10733 = cljs.core.chunk_rest.call(null,seq__8745_10731__$1);
var G__10734 = c__5633__auto___10732;
var G__10735 = cljs.core.count.call(null,c__5633__auto___10732);
var G__10736 = 0;
seq__8745_10721 = G__10733;
chunk__8746_10722 = G__10734;
count__8747_10723 = G__10735;
i__8748_10724 = G__10736;
continue;
}
} else
{var arg__7145__auto___10737 = cljs.core.first.call(null,seq__8745_10731__$1);a__7144__auto__.push(arg__7145__auto___10737);
{
var G__10738 = cljs.core.next.call(null,seq__8745_10731__$1);
var G__10739 = null;
var G__10740 = 0;
var G__10741 = 0;
seq__8745_10721 = G__10738;
chunk__8746_10722 = G__10739;
count__8747_10723 = G__10740;
i__8748_10724 = G__10741;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.param.apply(null,a__7144__auto__);
};
var param = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return param__delegate.call(this,args__7143__auto__);};
param.cljs$lang$maxFixedArity = 0;
param.cljs$lang$applyTo = (function (arglist__10742){
var args__7143__auto__ = cljs.core.seq(arglist__10742);
return param__delegate(args__7143__auto__);
});
param.cljs$core$IFn$_invoke$arity$variadic = param__delegate;
return param;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.pre = (function() { 
var pre__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8753_10743 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8754_10744 = null;var count__8755_10745 = 0;var i__8756_10746 = 0;while(true){
if((i__8756_10746 < count__8755_10745))
{var arg__7145__auto___10747 = cljs.core._nth.call(null,chunk__8754_10744,i__8756_10746);a__7144__auto__.push(arg__7145__auto___10747);
{
var G__10748 = seq__8753_10743;
var G__10749 = chunk__8754_10744;
var G__10750 = count__8755_10745;
var G__10751 = (i__8756_10746 + 1);
seq__8753_10743 = G__10748;
chunk__8754_10744 = G__10749;
count__8755_10745 = G__10750;
i__8756_10746 = G__10751;
continue;
}
} else
{var temp__4092__auto___10752 = cljs.core.seq.call(null,seq__8753_10743);if(temp__4092__auto___10752)
{var seq__8753_10753__$1 = temp__4092__auto___10752;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8753_10753__$1))
{var c__5633__auto___10754 = cljs.core.chunk_first.call(null,seq__8753_10753__$1);{
var G__10755 = cljs.core.chunk_rest.call(null,seq__8753_10753__$1);
var G__10756 = c__5633__auto___10754;
var G__10757 = cljs.core.count.call(null,c__5633__auto___10754);
var G__10758 = 0;
seq__8753_10743 = G__10755;
chunk__8754_10744 = G__10756;
count__8755_10745 = G__10757;
i__8756_10746 = G__10758;
continue;
}
} else
{var arg__7145__auto___10759 = cljs.core.first.call(null,seq__8753_10753__$1);a__7144__auto__.push(arg__7145__auto___10759);
{
var G__10760 = cljs.core.next.call(null,seq__8753_10753__$1);
var G__10761 = null;
var G__10762 = 0;
var G__10763 = 0;
seq__8753_10743 = G__10760;
chunk__8754_10744 = G__10761;
count__8755_10745 = G__10762;
i__8756_10746 = G__10763;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.pre.apply(null,a__7144__auto__);
};
var pre = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return pre__delegate.call(this,args__7143__auto__);};
pre.cljs$lang$maxFixedArity = 0;
pre.cljs$lang$applyTo = (function (arglist__10764){
var args__7143__auto__ = cljs.core.seq(arglist__10764);
return pre__delegate(args__7143__auto__);
});
pre.cljs$core$IFn$_invoke$arity$variadic = pre__delegate;
return pre;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.progress = (function() { 
var progress__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8761_10765 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8762_10766 = null;var count__8763_10767 = 0;var i__8764_10768 = 0;while(true){
if((i__8764_10768 < count__8763_10767))
{var arg__7145__auto___10769 = cljs.core._nth.call(null,chunk__8762_10766,i__8764_10768);a__7144__auto__.push(arg__7145__auto___10769);
{
var G__10770 = seq__8761_10765;
var G__10771 = chunk__8762_10766;
var G__10772 = count__8763_10767;
var G__10773 = (i__8764_10768 + 1);
seq__8761_10765 = G__10770;
chunk__8762_10766 = G__10771;
count__8763_10767 = G__10772;
i__8764_10768 = G__10773;
continue;
}
} else
{var temp__4092__auto___10774 = cljs.core.seq.call(null,seq__8761_10765);if(temp__4092__auto___10774)
{var seq__8761_10775__$1 = temp__4092__auto___10774;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8761_10775__$1))
{var c__5633__auto___10776 = cljs.core.chunk_first.call(null,seq__8761_10775__$1);{
var G__10777 = cljs.core.chunk_rest.call(null,seq__8761_10775__$1);
var G__10778 = c__5633__auto___10776;
var G__10779 = cljs.core.count.call(null,c__5633__auto___10776);
var G__10780 = 0;
seq__8761_10765 = G__10777;
chunk__8762_10766 = G__10778;
count__8763_10767 = G__10779;
i__8764_10768 = G__10780;
continue;
}
} else
{var arg__7145__auto___10781 = cljs.core.first.call(null,seq__8761_10775__$1);a__7144__auto__.push(arg__7145__auto___10781);
{
var G__10782 = cljs.core.next.call(null,seq__8761_10775__$1);
var G__10783 = null;
var G__10784 = 0;
var G__10785 = 0;
seq__8761_10765 = G__10782;
chunk__8762_10766 = G__10783;
count__8763_10767 = G__10784;
i__8764_10768 = G__10785;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.progress.apply(null,a__7144__auto__);
};
var progress = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return progress__delegate.call(this,args__7143__auto__);};
progress.cljs$lang$maxFixedArity = 0;
progress.cljs$lang$applyTo = (function (arglist__10786){
var args__7143__auto__ = cljs.core.seq(arglist__10786);
return progress__delegate(args__7143__auto__);
});
progress.cljs$core$IFn$_invoke$arity$variadic = progress__delegate;
return progress;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.q = (function() { 
var q__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8769_10787 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8770_10788 = null;var count__8771_10789 = 0;var i__8772_10790 = 0;while(true){
if((i__8772_10790 < count__8771_10789))
{var arg__7145__auto___10791 = cljs.core._nth.call(null,chunk__8770_10788,i__8772_10790);a__7144__auto__.push(arg__7145__auto___10791);
{
var G__10792 = seq__8769_10787;
var G__10793 = chunk__8770_10788;
var G__10794 = count__8771_10789;
var G__10795 = (i__8772_10790 + 1);
seq__8769_10787 = G__10792;
chunk__8770_10788 = G__10793;
count__8771_10789 = G__10794;
i__8772_10790 = G__10795;
continue;
}
} else
{var temp__4092__auto___10796 = cljs.core.seq.call(null,seq__8769_10787);if(temp__4092__auto___10796)
{var seq__8769_10797__$1 = temp__4092__auto___10796;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8769_10797__$1))
{var c__5633__auto___10798 = cljs.core.chunk_first.call(null,seq__8769_10797__$1);{
var G__10799 = cljs.core.chunk_rest.call(null,seq__8769_10797__$1);
var G__10800 = c__5633__auto___10798;
var G__10801 = cljs.core.count.call(null,c__5633__auto___10798);
var G__10802 = 0;
seq__8769_10787 = G__10799;
chunk__8770_10788 = G__10800;
count__8771_10789 = G__10801;
i__8772_10790 = G__10802;
continue;
}
} else
{var arg__7145__auto___10803 = cljs.core.first.call(null,seq__8769_10797__$1);a__7144__auto__.push(arg__7145__auto___10803);
{
var G__10804 = cljs.core.next.call(null,seq__8769_10797__$1);
var G__10805 = null;
var G__10806 = 0;
var G__10807 = 0;
seq__8769_10787 = G__10804;
chunk__8770_10788 = G__10805;
count__8771_10789 = G__10806;
i__8772_10790 = G__10807;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.q.apply(null,a__7144__auto__);
};
var q = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return q__delegate.call(this,args__7143__auto__);};
q.cljs$lang$maxFixedArity = 0;
q.cljs$lang$applyTo = (function (arglist__10808){
var args__7143__auto__ = cljs.core.seq(arglist__10808);
return q__delegate(args__7143__auto__);
});
q.cljs$core$IFn$_invoke$arity$variadic = q__delegate;
return q;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.rp = (function() { 
var rp__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8777_10809 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8778_10810 = null;var count__8779_10811 = 0;var i__8780_10812 = 0;while(true){
if((i__8780_10812 < count__8779_10811))
{var arg__7145__auto___10813 = cljs.core._nth.call(null,chunk__8778_10810,i__8780_10812);a__7144__auto__.push(arg__7145__auto___10813);
{
var G__10814 = seq__8777_10809;
var G__10815 = chunk__8778_10810;
var G__10816 = count__8779_10811;
var G__10817 = (i__8780_10812 + 1);
seq__8777_10809 = G__10814;
chunk__8778_10810 = G__10815;
count__8779_10811 = G__10816;
i__8780_10812 = G__10817;
continue;
}
} else
{var temp__4092__auto___10818 = cljs.core.seq.call(null,seq__8777_10809);if(temp__4092__auto___10818)
{var seq__8777_10819__$1 = temp__4092__auto___10818;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8777_10819__$1))
{var c__5633__auto___10820 = cljs.core.chunk_first.call(null,seq__8777_10819__$1);{
var G__10821 = cljs.core.chunk_rest.call(null,seq__8777_10819__$1);
var G__10822 = c__5633__auto___10820;
var G__10823 = cljs.core.count.call(null,c__5633__auto___10820);
var G__10824 = 0;
seq__8777_10809 = G__10821;
chunk__8778_10810 = G__10822;
count__8779_10811 = G__10823;
i__8780_10812 = G__10824;
continue;
}
} else
{var arg__7145__auto___10825 = cljs.core.first.call(null,seq__8777_10819__$1);a__7144__auto__.push(arg__7145__auto___10825);
{
var G__10826 = cljs.core.next.call(null,seq__8777_10819__$1);
var G__10827 = null;
var G__10828 = 0;
var G__10829 = 0;
seq__8777_10809 = G__10826;
chunk__8778_10810 = G__10827;
count__8779_10811 = G__10828;
i__8780_10812 = G__10829;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.rp.apply(null,a__7144__auto__);
};
var rp = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return rp__delegate.call(this,args__7143__auto__);};
rp.cljs$lang$maxFixedArity = 0;
rp.cljs$lang$applyTo = (function (arglist__10830){
var args__7143__auto__ = cljs.core.seq(arglist__10830);
return rp__delegate(args__7143__auto__);
});
rp.cljs$core$IFn$_invoke$arity$variadic = rp__delegate;
return rp;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.rt = (function() { 
var rt__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8785_10831 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8786_10832 = null;var count__8787_10833 = 0;var i__8788_10834 = 0;while(true){
if((i__8788_10834 < count__8787_10833))
{var arg__7145__auto___10835 = cljs.core._nth.call(null,chunk__8786_10832,i__8788_10834);a__7144__auto__.push(arg__7145__auto___10835);
{
var G__10836 = seq__8785_10831;
var G__10837 = chunk__8786_10832;
var G__10838 = count__8787_10833;
var G__10839 = (i__8788_10834 + 1);
seq__8785_10831 = G__10836;
chunk__8786_10832 = G__10837;
count__8787_10833 = G__10838;
i__8788_10834 = G__10839;
continue;
}
} else
{var temp__4092__auto___10840 = cljs.core.seq.call(null,seq__8785_10831);if(temp__4092__auto___10840)
{var seq__8785_10841__$1 = temp__4092__auto___10840;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8785_10841__$1))
{var c__5633__auto___10842 = cljs.core.chunk_first.call(null,seq__8785_10841__$1);{
var G__10843 = cljs.core.chunk_rest.call(null,seq__8785_10841__$1);
var G__10844 = c__5633__auto___10842;
var G__10845 = cljs.core.count.call(null,c__5633__auto___10842);
var G__10846 = 0;
seq__8785_10831 = G__10843;
chunk__8786_10832 = G__10844;
count__8787_10833 = G__10845;
i__8788_10834 = G__10846;
continue;
}
} else
{var arg__7145__auto___10847 = cljs.core.first.call(null,seq__8785_10841__$1);a__7144__auto__.push(arg__7145__auto___10847);
{
var G__10848 = cljs.core.next.call(null,seq__8785_10841__$1);
var G__10849 = null;
var G__10850 = 0;
var G__10851 = 0;
seq__8785_10831 = G__10848;
chunk__8786_10832 = G__10849;
count__8787_10833 = G__10850;
i__8788_10834 = G__10851;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.rt.apply(null,a__7144__auto__);
};
var rt = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return rt__delegate.call(this,args__7143__auto__);};
rt.cljs$lang$maxFixedArity = 0;
rt.cljs$lang$applyTo = (function (arglist__10852){
var args__7143__auto__ = cljs.core.seq(arglist__10852);
return rt__delegate(args__7143__auto__);
});
rt.cljs$core$IFn$_invoke$arity$variadic = rt__delegate;
return rt;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.ruby = (function() { 
var ruby__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8793_10853 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8794_10854 = null;var count__8795_10855 = 0;var i__8796_10856 = 0;while(true){
if((i__8796_10856 < count__8795_10855))
{var arg__7145__auto___10857 = cljs.core._nth.call(null,chunk__8794_10854,i__8796_10856);a__7144__auto__.push(arg__7145__auto___10857);
{
var G__10858 = seq__8793_10853;
var G__10859 = chunk__8794_10854;
var G__10860 = count__8795_10855;
var G__10861 = (i__8796_10856 + 1);
seq__8793_10853 = G__10858;
chunk__8794_10854 = G__10859;
count__8795_10855 = G__10860;
i__8796_10856 = G__10861;
continue;
}
} else
{var temp__4092__auto___10862 = cljs.core.seq.call(null,seq__8793_10853);if(temp__4092__auto___10862)
{var seq__8793_10863__$1 = temp__4092__auto___10862;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8793_10863__$1))
{var c__5633__auto___10864 = cljs.core.chunk_first.call(null,seq__8793_10863__$1);{
var G__10865 = cljs.core.chunk_rest.call(null,seq__8793_10863__$1);
var G__10866 = c__5633__auto___10864;
var G__10867 = cljs.core.count.call(null,c__5633__auto___10864);
var G__10868 = 0;
seq__8793_10853 = G__10865;
chunk__8794_10854 = G__10866;
count__8795_10855 = G__10867;
i__8796_10856 = G__10868;
continue;
}
} else
{var arg__7145__auto___10869 = cljs.core.first.call(null,seq__8793_10863__$1);a__7144__auto__.push(arg__7145__auto___10869);
{
var G__10870 = cljs.core.next.call(null,seq__8793_10863__$1);
var G__10871 = null;
var G__10872 = 0;
var G__10873 = 0;
seq__8793_10853 = G__10870;
chunk__8794_10854 = G__10871;
count__8795_10855 = G__10872;
i__8796_10856 = G__10873;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.ruby.apply(null,a__7144__auto__);
};
var ruby = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ruby__delegate.call(this,args__7143__auto__);};
ruby.cljs$lang$maxFixedArity = 0;
ruby.cljs$lang$applyTo = (function (arglist__10874){
var args__7143__auto__ = cljs.core.seq(arglist__10874);
return ruby__delegate(args__7143__auto__);
});
ruby.cljs$core$IFn$_invoke$arity$variadic = ruby__delegate;
return ruby;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.s = (function() { 
var s__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8801_10875 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8802_10876 = null;var count__8803_10877 = 0;var i__8804_10878 = 0;while(true){
if((i__8804_10878 < count__8803_10877))
{var arg__7145__auto___10879 = cljs.core._nth.call(null,chunk__8802_10876,i__8804_10878);a__7144__auto__.push(arg__7145__auto___10879);
{
var G__10880 = seq__8801_10875;
var G__10881 = chunk__8802_10876;
var G__10882 = count__8803_10877;
var G__10883 = (i__8804_10878 + 1);
seq__8801_10875 = G__10880;
chunk__8802_10876 = G__10881;
count__8803_10877 = G__10882;
i__8804_10878 = G__10883;
continue;
}
} else
{var temp__4092__auto___10884 = cljs.core.seq.call(null,seq__8801_10875);if(temp__4092__auto___10884)
{var seq__8801_10885__$1 = temp__4092__auto___10884;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8801_10885__$1))
{var c__5633__auto___10886 = cljs.core.chunk_first.call(null,seq__8801_10885__$1);{
var G__10887 = cljs.core.chunk_rest.call(null,seq__8801_10885__$1);
var G__10888 = c__5633__auto___10886;
var G__10889 = cljs.core.count.call(null,c__5633__auto___10886);
var G__10890 = 0;
seq__8801_10875 = G__10887;
chunk__8802_10876 = G__10888;
count__8803_10877 = G__10889;
i__8804_10878 = G__10890;
continue;
}
} else
{var arg__7145__auto___10891 = cljs.core.first.call(null,seq__8801_10885__$1);a__7144__auto__.push(arg__7145__auto___10891);
{
var G__10892 = cljs.core.next.call(null,seq__8801_10885__$1);
var G__10893 = null;
var G__10894 = 0;
var G__10895 = 0;
seq__8801_10875 = G__10892;
chunk__8802_10876 = G__10893;
count__8803_10877 = G__10894;
i__8804_10878 = G__10895;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.s.apply(null,a__7144__auto__);
};
var s = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return s__delegate.call(this,args__7143__auto__);};
s.cljs$lang$maxFixedArity = 0;
s.cljs$lang$applyTo = (function (arglist__10896){
var args__7143__auto__ = cljs.core.seq(arglist__10896);
return s__delegate(args__7143__auto__);
});
s.cljs$core$IFn$_invoke$arity$variadic = s__delegate;
return s;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.samp = (function() { 
var samp__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8809_10897 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8810_10898 = null;var count__8811_10899 = 0;var i__8812_10900 = 0;while(true){
if((i__8812_10900 < count__8811_10899))
{var arg__7145__auto___10901 = cljs.core._nth.call(null,chunk__8810_10898,i__8812_10900);a__7144__auto__.push(arg__7145__auto___10901);
{
var G__10902 = seq__8809_10897;
var G__10903 = chunk__8810_10898;
var G__10904 = count__8811_10899;
var G__10905 = (i__8812_10900 + 1);
seq__8809_10897 = G__10902;
chunk__8810_10898 = G__10903;
count__8811_10899 = G__10904;
i__8812_10900 = G__10905;
continue;
}
} else
{var temp__4092__auto___10906 = cljs.core.seq.call(null,seq__8809_10897);if(temp__4092__auto___10906)
{var seq__8809_10907__$1 = temp__4092__auto___10906;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8809_10907__$1))
{var c__5633__auto___10908 = cljs.core.chunk_first.call(null,seq__8809_10907__$1);{
var G__10909 = cljs.core.chunk_rest.call(null,seq__8809_10907__$1);
var G__10910 = c__5633__auto___10908;
var G__10911 = cljs.core.count.call(null,c__5633__auto___10908);
var G__10912 = 0;
seq__8809_10897 = G__10909;
chunk__8810_10898 = G__10910;
count__8811_10899 = G__10911;
i__8812_10900 = G__10912;
continue;
}
} else
{var arg__7145__auto___10913 = cljs.core.first.call(null,seq__8809_10907__$1);a__7144__auto__.push(arg__7145__auto___10913);
{
var G__10914 = cljs.core.next.call(null,seq__8809_10907__$1);
var G__10915 = null;
var G__10916 = 0;
var G__10917 = 0;
seq__8809_10897 = G__10914;
chunk__8810_10898 = G__10915;
count__8811_10899 = G__10916;
i__8812_10900 = G__10917;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.samp.apply(null,a__7144__auto__);
};
var samp = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return samp__delegate.call(this,args__7143__auto__);};
samp.cljs$lang$maxFixedArity = 0;
samp.cljs$lang$applyTo = (function (arglist__10918){
var args__7143__auto__ = cljs.core.seq(arglist__10918);
return samp__delegate(args__7143__auto__);
});
samp.cljs$core$IFn$_invoke$arity$variadic = samp__delegate;
return samp;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.script = (function() { 
var script__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8817_10919 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8818_10920 = null;var count__8819_10921 = 0;var i__8820_10922 = 0;while(true){
if((i__8820_10922 < count__8819_10921))
{var arg__7145__auto___10923 = cljs.core._nth.call(null,chunk__8818_10920,i__8820_10922);a__7144__auto__.push(arg__7145__auto___10923);
{
var G__10924 = seq__8817_10919;
var G__10925 = chunk__8818_10920;
var G__10926 = count__8819_10921;
var G__10927 = (i__8820_10922 + 1);
seq__8817_10919 = G__10924;
chunk__8818_10920 = G__10925;
count__8819_10921 = G__10926;
i__8820_10922 = G__10927;
continue;
}
} else
{var temp__4092__auto___10928 = cljs.core.seq.call(null,seq__8817_10919);if(temp__4092__auto___10928)
{var seq__8817_10929__$1 = temp__4092__auto___10928;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8817_10929__$1))
{var c__5633__auto___10930 = cljs.core.chunk_first.call(null,seq__8817_10929__$1);{
var G__10931 = cljs.core.chunk_rest.call(null,seq__8817_10929__$1);
var G__10932 = c__5633__auto___10930;
var G__10933 = cljs.core.count.call(null,c__5633__auto___10930);
var G__10934 = 0;
seq__8817_10919 = G__10931;
chunk__8818_10920 = G__10932;
count__8819_10921 = G__10933;
i__8820_10922 = G__10934;
continue;
}
} else
{var arg__7145__auto___10935 = cljs.core.first.call(null,seq__8817_10929__$1);a__7144__auto__.push(arg__7145__auto___10935);
{
var G__10936 = cljs.core.next.call(null,seq__8817_10929__$1);
var G__10937 = null;
var G__10938 = 0;
var G__10939 = 0;
seq__8817_10919 = G__10936;
chunk__8818_10920 = G__10937;
count__8819_10921 = G__10938;
i__8820_10922 = G__10939;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.script.apply(null,a__7144__auto__);
};
var script = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return script__delegate.call(this,args__7143__auto__);};
script.cljs$lang$maxFixedArity = 0;
script.cljs$lang$applyTo = (function (arglist__10940){
var args__7143__auto__ = cljs.core.seq(arglist__10940);
return script__delegate(args__7143__auto__);
});
script.cljs$core$IFn$_invoke$arity$variadic = script__delegate;
return script;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.section = (function() { 
var section__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8825_10941 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8826_10942 = null;var count__8827_10943 = 0;var i__8828_10944 = 0;while(true){
if((i__8828_10944 < count__8827_10943))
{var arg__7145__auto___10945 = cljs.core._nth.call(null,chunk__8826_10942,i__8828_10944);a__7144__auto__.push(arg__7145__auto___10945);
{
var G__10946 = seq__8825_10941;
var G__10947 = chunk__8826_10942;
var G__10948 = count__8827_10943;
var G__10949 = (i__8828_10944 + 1);
seq__8825_10941 = G__10946;
chunk__8826_10942 = G__10947;
count__8827_10943 = G__10948;
i__8828_10944 = G__10949;
continue;
}
} else
{var temp__4092__auto___10950 = cljs.core.seq.call(null,seq__8825_10941);if(temp__4092__auto___10950)
{var seq__8825_10951__$1 = temp__4092__auto___10950;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8825_10951__$1))
{var c__5633__auto___10952 = cljs.core.chunk_first.call(null,seq__8825_10951__$1);{
var G__10953 = cljs.core.chunk_rest.call(null,seq__8825_10951__$1);
var G__10954 = c__5633__auto___10952;
var G__10955 = cljs.core.count.call(null,c__5633__auto___10952);
var G__10956 = 0;
seq__8825_10941 = G__10953;
chunk__8826_10942 = G__10954;
count__8827_10943 = G__10955;
i__8828_10944 = G__10956;
continue;
}
} else
{var arg__7145__auto___10957 = cljs.core.first.call(null,seq__8825_10951__$1);a__7144__auto__.push(arg__7145__auto___10957);
{
var G__10958 = cljs.core.next.call(null,seq__8825_10951__$1);
var G__10959 = null;
var G__10960 = 0;
var G__10961 = 0;
seq__8825_10941 = G__10958;
chunk__8826_10942 = G__10959;
count__8827_10943 = G__10960;
i__8828_10944 = G__10961;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.section.apply(null,a__7144__auto__);
};
var section = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return section__delegate.call(this,args__7143__auto__);};
section.cljs$lang$maxFixedArity = 0;
section.cljs$lang$applyTo = (function (arglist__10962){
var args__7143__auto__ = cljs.core.seq(arglist__10962);
return section__delegate(args__7143__auto__);
});
section.cljs$core$IFn$_invoke$arity$variadic = section__delegate;
return section;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.select = (function() { 
var select__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8833_10963 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8834_10964 = null;var count__8835_10965 = 0;var i__8836_10966 = 0;while(true){
if((i__8836_10966 < count__8835_10965))
{var arg__7145__auto___10967 = cljs.core._nth.call(null,chunk__8834_10964,i__8836_10966);a__7144__auto__.push(arg__7145__auto___10967);
{
var G__10968 = seq__8833_10963;
var G__10969 = chunk__8834_10964;
var G__10970 = count__8835_10965;
var G__10971 = (i__8836_10966 + 1);
seq__8833_10963 = G__10968;
chunk__8834_10964 = G__10969;
count__8835_10965 = G__10970;
i__8836_10966 = G__10971;
continue;
}
} else
{var temp__4092__auto___10972 = cljs.core.seq.call(null,seq__8833_10963);if(temp__4092__auto___10972)
{var seq__8833_10973__$1 = temp__4092__auto___10972;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8833_10973__$1))
{var c__5633__auto___10974 = cljs.core.chunk_first.call(null,seq__8833_10973__$1);{
var G__10975 = cljs.core.chunk_rest.call(null,seq__8833_10973__$1);
var G__10976 = c__5633__auto___10974;
var G__10977 = cljs.core.count.call(null,c__5633__auto___10974);
var G__10978 = 0;
seq__8833_10963 = G__10975;
chunk__8834_10964 = G__10976;
count__8835_10965 = G__10977;
i__8836_10966 = G__10978;
continue;
}
} else
{var arg__7145__auto___10979 = cljs.core.first.call(null,seq__8833_10973__$1);a__7144__auto__.push(arg__7145__auto___10979);
{
var G__10980 = cljs.core.next.call(null,seq__8833_10973__$1);
var G__10981 = null;
var G__10982 = 0;
var G__10983 = 0;
seq__8833_10963 = G__10980;
chunk__8834_10964 = G__10981;
count__8835_10965 = G__10982;
i__8836_10966 = G__10983;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.select.apply(null,a__7144__auto__);
};
var select = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return select__delegate.call(this,args__7143__auto__);};
select.cljs$lang$maxFixedArity = 0;
select.cljs$lang$applyTo = (function (arglist__10984){
var args__7143__auto__ = cljs.core.seq(arglist__10984);
return select__delegate(args__7143__auto__);
});
select.cljs$core$IFn$_invoke$arity$variadic = select__delegate;
return select;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.small = (function() { 
var small__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8841_10985 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8842_10986 = null;var count__8843_10987 = 0;var i__8844_10988 = 0;while(true){
if((i__8844_10988 < count__8843_10987))
{var arg__7145__auto___10989 = cljs.core._nth.call(null,chunk__8842_10986,i__8844_10988);a__7144__auto__.push(arg__7145__auto___10989);
{
var G__10990 = seq__8841_10985;
var G__10991 = chunk__8842_10986;
var G__10992 = count__8843_10987;
var G__10993 = (i__8844_10988 + 1);
seq__8841_10985 = G__10990;
chunk__8842_10986 = G__10991;
count__8843_10987 = G__10992;
i__8844_10988 = G__10993;
continue;
}
} else
{var temp__4092__auto___10994 = cljs.core.seq.call(null,seq__8841_10985);if(temp__4092__auto___10994)
{var seq__8841_10995__$1 = temp__4092__auto___10994;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8841_10995__$1))
{var c__5633__auto___10996 = cljs.core.chunk_first.call(null,seq__8841_10995__$1);{
var G__10997 = cljs.core.chunk_rest.call(null,seq__8841_10995__$1);
var G__10998 = c__5633__auto___10996;
var G__10999 = cljs.core.count.call(null,c__5633__auto___10996);
var G__11000 = 0;
seq__8841_10985 = G__10997;
chunk__8842_10986 = G__10998;
count__8843_10987 = G__10999;
i__8844_10988 = G__11000;
continue;
}
} else
{var arg__7145__auto___11001 = cljs.core.first.call(null,seq__8841_10995__$1);a__7144__auto__.push(arg__7145__auto___11001);
{
var G__11002 = cljs.core.next.call(null,seq__8841_10995__$1);
var G__11003 = null;
var G__11004 = 0;
var G__11005 = 0;
seq__8841_10985 = G__11002;
chunk__8842_10986 = G__11003;
count__8843_10987 = G__11004;
i__8844_10988 = G__11005;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.small.apply(null,a__7144__auto__);
};
var small = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return small__delegate.call(this,args__7143__auto__);};
small.cljs$lang$maxFixedArity = 0;
small.cljs$lang$applyTo = (function (arglist__11006){
var args__7143__auto__ = cljs.core.seq(arglist__11006);
return small__delegate(args__7143__auto__);
});
small.cljs$core$IFn$_invoke$arity$variadic = small__delegate;
return small;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.source = (function() { 
var source__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8849_11007 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8850_11008 = null;var count__8851_11009 = 0;var i__8852_11010 = 0;while(true){
if((i__8852_11010 < count__8851_11009))
{var arg__7145__auto___11011 = cljs.core._nth.call(null,chunk__8850_11008,i__8852_11010);a__7144__auto__.push(arg__7145__auto___11011);
{
var G__11012 = seq__8849_11007;
var G__11013 = chunk__8850_11008;
var G__11014 = count__8851_11009;
var G__11015 = (i__8852_11010 + 1);
seq__8849_11007 = G__11012;
chunk__8850_11008 = G__11013;
count__8851_11009 = G__11014;
i__8852_11010 = G__11015;
continue;
}
} else
{var temp__4092__auto___11016 = cljs.core.seq.call(null,seq__8849_11007);if(temp__4092__auto___11016)
{var seq__8849_11017__$1 = temp__4092__auto___11016;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8849_11017__$1))
{var c__5633__auto___11018 = cljs.core.chunk_first.call(null,seq__8849_11017__$1);{
var G__11019 = cljs.core.chunk_rest.call(null,seq__8849_11017__$1);
var G__11020 = c__5633__auto___11018;
var G__11021 = cljs.core.count.call(null,c__5633__auto___11018);
var G__11022 = 0;
seq__8849_11007 = G__11019;
chunk__8850_11008 = G__11020;
count__8851_11009 = G__11021;
i__8852_11010 = G__11022;
continue;
}
} else
{var arg__7145__auto___11023 = cljs.core.first.call(null,seq__8849_11017__$1);a__7144__auto__.push(arg__7145__auto___11023);
{
var G__11024 = cljs.core.next.call(null,seq__8849_11017__$1);
var G__11025 = null;
var G__11026 = 0;
var G__11027 = 0;
seq__8849_11007 = G__11024;
chunk__8850_11008 = G__11025;
count__8851_11009 = G__11026;
i__8852_11010 = G__11027;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.source.apply(null,a__7144__auto__);
};
var source = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return source__delegate.call(this,args__7143__auto__);};
source.cljs$lang$maxFixedArity = 0;
source.cljs$lang$applyTo = (function (arglist__11028){
var args__7143__auto__ = cljs.core.seq(arglist__11028);
return source__delegate(args__7143__auto__);
});
source.cljs$core$IFn$_invoke$arity$variadic = source__delegate;
return source;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.span = (function() { 
var span__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8857_11029 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8858_11030 = null;var count__8859_11031 = 0;var i__8860_11032 = 0;while(true){
if((i__8860_11032 < count__8859_11031))
{var arg__7145__auto___11033 = cljs.core._nth.call(null,chunk__8858_11030,i__8860_11032);a__7144__auto__.push(arg__7145__auto___11033);
{
var G__11034 = seq__8857_11029;
var G__11035 = chunk__8858_11030;
var G__11036 = count__8859_11031;
var G__11037 = (i__8860_11032 + 1);
seq__8857_11029 = G__11034;
chunk__8858_11030 = G__11035;
count__8859_11031 = G__11036;
i__8860_11032 = G__11037;
continue;
}
} else
{var temp__4092__auto___11038 = cljs.core.seq.call(null,seq__8857_11029);if(temp__4092__auto___11038)
{var seq__8857_11039__$1 = temp__4092__auto___11038;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8857_11039__$1))
{var c__5633__auto___11040 = cljs.core.chunk_first.call(null,seq__8857_11039__$1);{
var G__11041 = cljs.core.chunk_rest.call(null,seq__8857_11039__$1);
var G__11042 = c__5633__auto___11040;
var G__11043 = cljs.core.count.call(null,c__5633__auto___11040);
var G__11044 = 0;
seq__8857_11029 = G__11041;
chunk__8858_11030 = G__11042;
count__8859_11031 = G__11043;
i__8860_11032 = G__11044;
continue;
}
} else
{var arg__7145__auto___11045 = cljs.core.first.call(null,seq__8857_11039__$1);a__7144__auto__.push(arg__7145__auto___11045);
{
var G__11046 = cljs.core.next.call(null,seq__8857_11039__$1);
var G__11047 = null;
var G__11048 = 0;
var G__11049 = 0;
seq__8857_11029 = G__11046;
chunk__8858_11030 = G__11047;
count__8859_11031 = G__11048;
i__8860_11032 = G__11049;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.span.apply(null,a__7144__auto__);
};
var span = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return span__delegate.call(this,args__7143__auto__);};
span.cljs$lang$maxFixedArity = 0;
span.cljs$lang$applyTo = (function (arglist__11050){
var args__7143__auto__ = cljs.core.seq(arglist__11050);
return span__delegate(args__7143__auto__);
});
span.cljs$core$IFn$_invoke$arity$variadic = span__delegate;
return span;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.strong = (function() { 
var strong__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8865_11051 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8866_11052 = null;var count__8867_11053 = 0;var i__8868_11054 = 0;while(true){
if((i__8868_11054 < count__8867_11053))
{var arg__7145__auto___11055 = cljs.core._nth.call(null,chunk__8866_11052,i__8868_11054);a__7144__auto__.push(arg__7145__auto___11055);
{
var G__11056 = seq__8865_11051;
var G__11057 = chunk__8866_11052;
var G__11058 = count__8867_11053;
var G__11059 = (i__8868_11054 + 1);
seq__8865_11051 = G__11056;
chunk__8866_11052 = G__11057;
count__8867_11053 = G__11058;
i__8868_11054 = G__11059;
continue;
}
} else
{var temp__4092__auto___11060 = cljs.core.seq.call(null,seq__8865_11051);if(temp__4092__auto___11060)
{var seq__8865_11061__$1 = temp__4092__auto___11060;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8865_11061__$1))
{var c__5633__auto___11062 = cljs.core.chunk_first.call(null,seq__8865_11061__$1);{
var G__11063 = cljs.core.chunk_rest.call(null,seq__8865_11061__$1);
var G__11064 = c__5633__auto___11062;
var G__11065 = cljs.core.count.call(null,c__5633__auto___11062);
var G__11066 = 0;
seq__8865_11051 = G__11063;
chunk__8866_11052 = G__11064;
count__8867_11053 = G__11065;
i__8868_11054 = G__11066;
continue;
}
} else
{var arg__7145__auto___11067 = cljs.core.first.call(null,seq__8865_11061__$1);a__7144__auto__.push(arg__7145__auto___11067);
{
var G__11068 = cljs.core.next.call(null,seq__8865_11061__$1);
var G__11069 = null;
var G__11070 = 0;
var G__11071 = 0;
seq__8865_11051 = G__11068;
chunk__8866_11052 = G__11069;
count__8867_11053 = G__11070;
i__8868_11054 = G__11071;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.strong.apply(null,a__7144__auto__);
};
var strong = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return strong__delegate.call(this,args__7143__auto__);};
strong.cljs$lang$maxFixedArity = 0;
strong.cljs$lang$applyTo = (function (arglist__11072){
var args__7143__auto__ = cljs.core.seq(arglist__11072);
return strong__delegate(args__7143__auto__);
});
strong.cljs$core$IFn$_invoke$arity$variadic = strong__delegate;
return strong;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.style = (function() { 
var style__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8873_11073 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8874_11074 = null;var count__8875_11075 = 0;var i__8876_11076 = 0;while(true){
if((i__8876_11076 < count__8875_11075))
{var arg__7145__auto___11077 = cljs.core._nth.call(null,chunk__8874_11074,i__8876_11076);a__7144__auto__.push(arg__7145__auto___11077);
{
var G__11078 = seq__8873_11073;
var G__11079 = chunk__8874_11074;
var G__11080 = count__8875_11075;
var G__11081 = (i__8876_11076 + 1);
seq__8873_11073 = G__11078;
chunk__8874_11074 = G__11079;
count__8875_11075 = G__11080;
i__8876_11076 = G__11081;
continue;
}
} else
{var temp__4092__auto___11082 = cljs.core.seq.call(null,seq__8873_11073);if(temp__4092__auto___11082)
{var seq__8873_11083__$1 = temp__4092__auto___11082;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8873_11083__$1))
{var c__5633__auto___11084 = cljs.core.chunk_first.call(null,seq__8873_11083__$1);{
var G__11085 = cljs.core.chunk_rest.call(null,seq__8873_11083__$1);
var G__11086 = c__5633__auto___11084;
var G__11087 = cljs.core.count.call(null,c__5633__auto___11084);
var G__11088 = 0;
seq__8873_11073 = G__11085;
chunk__8874_11074 = G__11086;
count__8875_11075 = G__11087;
i__8876_11076 = G__11088;
continue;
}
} else
{var arg__7145__auto___11089 = cljs.core.first.call(null,seq__8873_11083__$1);a__7144__auto__.push(arg__7145__auto___11089);
{
var G__11090 = cljs.core.next.call(null,seq__8873_11083__$1);
var G__11091 = null;
var G__11092 = 0;
var G__11093 = 0;
seq__8873_11073 = G__11090;
chunk__8874_11074 = G__11091;
count__8875_11075 = G__11092;
i__8876_11076 = G__11093;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.style.apply(null,a__7144__auto__);
};
var style = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return style__delegate.call(this,args__7143__auto__);};
style.cljs$lang$maxFixedArity = 0;
style.cljs$lang$applyTo = (function (arglist__11094){
var args__7143__auto__ = cljs.core.seq(arglist__11094);
return style__delegate(args__7143__auto__);
});
style.cljs$core$IFn$_invoke$arity$variadic = style__delegate;
return style;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.sub = (function() { 
var sub__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8881_11095 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8882_11096 = null;var count__8883_11097 = 0;var i__8884_11098 = 0;while(true){
if((i__8884_11098 < count__8883_11097))
{var arg__7145__auto___11099 = cljs.core._nth.call(null,chunk__8882_11096,i__8884_11098);a__7144__auto__.push(arg__7145__auto___11099);
{
var G__11100 = seq__8881_11095;
var G__11101 = chunk__8882_11096;
var G__11102 = count__8883_11097;
var G__11103 = (i__8884_11098 + 1);
seq__8881_11095 = G__11100;
chunk__8882_11096 = G__11101;
count__8883_11097 = G__11102;
i__8884_11098 = G__11103;
continue;
}
} else
{var temp__4092__auto___11104 = cljs.core.seq.call(null,seq__8881_11095);if(temp__4092__auto___11104)
{var seq__8881_11105__$1 = temp__4092__auto___11104;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8881_11105__$1))
{var c__5633__auto___11106 = cljs.core.chunk_first.call(null,seq__8881_11105__$1);{
var G__11107 = cljs.core.chunk_rest.call(null,seq__8881_11105__$1);
var G__11108 = c__5633__auto___11106;
var G__11109 = cljs.core.count.call(null,c__5633__auto___11106);
var G__11110 = 0;
seq__8881_11095 = G__11107;
chunk__8882_11096 = G__11108;
count__8883_11097 = G__11109;
i__8884_11098 = G__11110;
continue;
}
} else
{var arg__7145__auto___11111 = cljs.core.first.call(null,seq__8881_11105__$1);a__7144__auto__.push(arg__7145__auto___11111);
{
var G__11112 = cljs.core.next.call(null,seq__8881_11105__$1);
var G__11113 = null;
var G__11114 = 0;
var G__11115 = 0;
seq__8881_11095 = G__11112;
chunk__8882_11096 = G__11113;
count__8883_11097 = G__11114;
i__8884_11098 = G__11115;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.sub.apply(null,a__7144__auto__);
};
var sub = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return sub__delegate.call(this,args__7143__auto__);};
sub.cljs$lang$maxFixedArity = 0;
sub.cljs$lang$applyTo = (function (arglist__11116){
var args__7143__auto__ = cljs.core.seq(arglist__11116);
return sub__delegate(args__7143__auto__);
});
sub.cljs$core$IFn$_invoke$arity$variadic = sub__delegate;
return sub;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.summary = (function() { 
var summary__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8889_11117 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8890_11118 = null;var count__8891_11119 = 0;var i__8892_11120 = 0;while(true){
if((i__8892_11120 < count__8891_11119))
{var arg__7145__auto___11121 = cljs.core._nth.call(null,chunk__8890_11118,i__8892_11120);a__7144__auto__.push(arg__7145__auto___11121);
{
var G__11122 = seq__8889_11117;
var G__11123 = chunk__8890_11118;
var G__11124 = count__8891_11119;
var G__11125 = (i__8892_11120 + 1);
seq__8889_11117 = G__11122;
chunk__8890_11118 = G__11123;
count__8891_11119 = G__11124;
i__8892_11120 = G__11125;
continue;
}
} else
{var temp__4092__auto___11126 = cljs.core.seq.call(null,seq__8889_11117);if(temp__4092__auto___11126)
{var seq__8889_11127__$1 = temp__4092__auto___11126;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8889_11127__$1))
{var c__5633__auto___11128 = cljs.core.chunk_first.call(null,seq__8889_11127__$1);{
var G__11129 = cljs.core.chunk_rest.call(null,seq__8889_11127__$1);
var G__11130 = c__5633__auto___11128;
var G__11131 = cljs.core.count.call(null,c__5633__auto___11128);
var G__11132 = 0;
seq__8889_11117 = G__11129;
chunk__8890_11118 = G__11130;
count__8891_11119 = G__11131;
i__8892_11120 = G__11132;
continue;
}
} else
{var arg__7145__auto___11133 = cljs.core.first.call(null,seq__8889_11127__$1);a__7144__auto__.push(arg__7145__auto___11133);
{
var G__11134 = cljs.core.next.call(null,seq__8889_11127__$1);
var G__11135 = null;
var G__11136 = 0;
var G__11137 = 0;
seq__8889_11117 = G__11134;
chunk__8890_11118 = G__11135;
count__8891_11119 = G__11136;
i__8892_11120 = G__11137;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.summary.apply(null,a__7144__auto__);
};
var summary = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return summary__delegate.call(this,args__7143__auto__);};
summary.cljs$lang$maxFixedArity = 0;
summary.cljs$lang$applyTo = (function (arglist__11138){
var args__7143__auto__ = cljs.core.seq(arglist__11138);
return summary__delegate(args__7143__auto__);
});
summary.cljs$core$IFn$_invoke$arity$variadic = summary__delegate;
return summary;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.sup = (function() { 
var sup__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8897_11139 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8898_11140 = null;var count__8899_11141 = 0;var i__8900_11142 = 0;while(true){
if((i__8900_11142 < count__8899_11141))
{var arg__7145__auto___11143 = cljs.core._nth.call(null,chunk__8898_11140,i__8900_11142);a__7144__auto__.push(arg__7145__auto___11143);
{
var G__11144 = seq__8897_11139;
var G__11145 = chunk__8898_11140;
var G__11146 = count__8899_11141;
var G__11147 = (i__8900_11142 + 1);
seq__8897_11139 = G__11144;
chunk__8898_11140 = G__11145;
count__8899_11141 = G__11146;
i__8900_11142 = G__11147;
continue;
}
} else
{var temp__4092__auto___11148 = cljs.core.seq.call(null,seq__8897_11139);if(temp__4092__auto___11148)
{var seq__8897_11149__$1 = temp__4092__auto___11148;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8897_11149__$1))
{var c__5633__auto___11150 = cljs.core.chunk_first.call(null,seq__8897_11149__$1);{
var G__11151 = cljs.core.chunk_rest.call(null,seq__8897_11149__$1);
var G__11152 = c__5633__auto___11150;
var G__11153 = cljs.core.count.call(null,c__5633__auto___11150);
var G__11154 = 0;
seq__8897_11139 = G__11151;
chunk__8898_11140 = G__11152;
count__8899_11141 = G__11153;
i__8900_11142 = G__11154;
continue;
}
} else
{var arg__7145__auto___11155 = cljs.core.first.call(null,seq__8897_11149__$1);a__7144__auto__.push(arg__7145__auto___11155);
{
var G__11156 = cljs.core.next.call(null,seq__8897_11149__$1);
var G__11157 = null;
var G__11158 = 0;
var G__11159 = 0;
seq__8897_11139 = G__11156;
chunk__8898_11140 = G__11157;
count__8899_11141 = G__11158;
i__8900_11142 = G__11159;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.sup.apply(null,a__7144__auto__);
};
var sup = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return sup__delegate.call(this,args__7143__auto__);};
sup.cljs$lang$maxFixedArity = 0;
sup.cljs$lang$applyTo = (function (arglist__11160){
var args__7143__auto__ = cljs.core.seq(arglist__11160);
return sup__delegate(args__7143__auto__);
});
sup.cljs$core$IFn$_invoke$arity$variadic = sup__delegate;
return sup;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.table = (function() { 
var table__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8905_11161 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8906_11162 = null;var count__8907_11163 = 0;var i__8908_11164 = 0;while(true){
if((i__8908_11164 < count__8907_11163))
{var arg__7145__auto___11165 = cljs.core._nth.call(null,chunk__8906_11162,i__8908_11164);a__7144__auto__.push(arg__7145__auto___11165);
{
var G__11166 = seq__8905_11161;
var G__11167 = chunk__8906_11162;
var G__11168 = count__8907_11163;
var G__11169 = (i__8908_11164 + 1);
seq__8905_11161 = G__11166;
chunk__8906_11162 = G__11167;
count__8907_11163 = G__11168;
i__8908_11164 = G__11169;
continue;
}
} else
{var temp__4092__auto___11170 = cljs.core.seq.call(null,seq__8905_11161);if(temp__4092__auto___11170)
{var seq__8905_11171__$1 = temp__4092__auto___11170;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8905_11171__$1))
{var c__5633__auto___11172 = cljs.core.chunk_first.call(null,seq__8905_11171__$1);{
var G__11173 = cljs.core.chunk_rest.call(null,seq__8905_11171__$1);
var G__11174 = c__5633__auto___11172;
var G__11175 = cljs.core.count.call(null,c__5633__auto___11172);
var G__11176 = 0;
seq__8905_11161 = G__11173;
chunk__8906_11162 = G__11174;
count__8907_11163 = G__11175;
i__8908_11164 = G__11176;
continue;
}
} else
{var arg__7145__auto___11177 = cljs.core.first.call(null,seq__8905_11171__$1);a__7144__auto__.push(arg__7145__auto___11177);
{
var G__11178 = cljs.core.next.call(null,seq__8905_11171__$1);
var G__11179 = null;
var G__11180 = 0;
var G__11181 = 0;
seq__8905_11161 = G__11178;
chunk__8906_11162 = G__11179;
count__8907_11163 = G__11180;
i__8908_11164 = G__11181;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.table.apply(null,a__7144__auto__);
};
var table = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return table__delegate.call(this,args__7143__auto__);};
table.cljs$lang$maxFixedArity = 0;
table.cljs$lang$applyTo = (function (arglist__11182){
var args__7143__auto__ = cljs.core.seq(arglist__11182);
return table__delegate(args__7143__auto__);
});
table.cljs$core$IFn$_invoke$arity$variadic = table__delegate;
return table;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.tbody = (function() { 
var tbody__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8913_11183 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8914_11184 = null;var count__8915_11185 = 0;var i__8916_11186 = 0;while(true){
if((i__8916_11186 < count__8915_11185))
{var arg__7145__auto___11187 = cljs.core._nth.call(null,chunk__8914_11184,i__8916_11186);a__7144__auto__.push(arg__7145__auto___11187);
{
var G__11188 = seq__8913_11183;
var G__11189 = chunk__8914_11184;
var G__11190 = count__8915_11185;
var G__11191 = (i__8916_11186 + 1);
seq__8913_11183 = G__11188;
chunk__8914_11184 = G__11189;
count__8915_11185 = G__11190;
i__8916_11186 = G__11191;
continue;
}
} else
{var temp__4092__auto___11192 = cljs.core.seq.call(null,seq__8913_11183);if(temp__4092__auto___11192)
{var seq__8913_11193__$1 = temp__4092__auto___11192;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8913_11193__$1))
{var c__5633__auto___11194 = cljs.core.chunk_first.call(null,seq__8913_11193__$1);{
var G__11195 = cljs.core.chunk_rest.call(null,seq__8913_11193__$1);
var G__11196 = c__5633__auto___11194;
var G__11197 = cljs.core.count.call(null,c__5633__auto___11194);
var G__11198 = 0;
seq__8913_11183 = G__11195;
chunk__8914_11184 = G__11196;
count__8915_11185 = G__11197;
i__8916_11186 = G__11198;
continue;
}
} else
{var arg__7145__auto___11199 = cljs.core.first.call(null,seq__8913_11193__$1);a__7144__auto__.push(arg__7145__auto___11199);
{
var G__11200 = cljs.core.next.call(null,seq__8913_11193__$1);
var G__11201 = null;
var G__11202 = 0;
var G__11203 = 0;
seq__8913_11183 = G__11200;
chunk__8914_11184 = G__11201;
count__8915_11185 = G__11202;
i__8916_11186 = G__11203;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.tbody.apply(null,a__7144__auto__);
};
var tbody = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return tbody__delegate.call(this,args__7143__auto__);};
tbody.cljs$lang$maxFixedArity = 0;
tbody.cljs$lang$applyTo = (function (arglist__11204){
var args__7143__auto__ = cljs.core.seq(arglist__11204);
return tbody__delegate(args__7143__auto__);
});
tbody.cljs$core$IFn$_invoke$arity$variadic = tbody__delegate;
return tbody;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.td = (function() { 
var td__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8921_11205 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8922_11206 = null;var count__8923_11207 = 0;var i__8924_11208 = 0;while(true){
if((i__8924_11208 < count__8923_11207))
{var arg__7145__auto___11209 = cljs.core._nth.call(null,chunk__8922_11206,i__8924_11208);a__7144__auto__.push(arg__7145__auto___11209);
{
var G__11210 = seq__8921_11205;
var G__11211 = chunk__8922_11206;
var G__11212 = count__8923_11207;
var G__11213 = (i__8924_11208 + 1);
seq__8921_11205 = G__11210;
chunk__8922_11206 = G__11211;
count__8923_11207 = G__11212;
i__8924_11208 = G__11213;
continue;
}
} else
{var temp__4092__auto___11214 = cljs.core.seq.call(null,seq__8921_11205);if(temp__4092__auto___11214)
{var seq__8921_11215__$1 = temp__4092__auto___11214;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8921_11215__$1))
{var c__5633__auto___11216 = cljs.core.chunk_first.call(null,seq__8921_11215__$1);{
var G__11217 = cljs.core.chunk_rest.call(null,seq__8921_11215__$1);
var G__11218 = c__5633__auto___11216;
var G__11219 = cljs.core.count.call(null,c__5633__auto___11216);
var G__11220 = 0;
seq__8921_11205 = G__11217;
chunk__8922_11206 = G__11218;
count__8923_11207 = G__11219;
i__8924_11208 = G__11220;
continue;
}
} else
{var arg__7145__auto___11221 = cljs.core.first.call(null,seq__8921_11215__$1);a__7144__auto__.push(arg__7145__auto___11221);
{
var G__11222 = cljs.core.next.call(null,seq__8921_11215__$1);
var G__11223 = null;
var G__11224 = 0;
var G__11225 = 0;
seq__8921_11205 = G__11222;
chunk__8922_11206 = G__11223;
count__8923_11207 = G__11224;
i__8924_11208 = G__11225;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.td.apply(null,a__7144__auto__);
};
var td = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return td__delegate.call(this,args__7143__auto__);};
td.cljs$lang$maxFixedArity = 0;
td.cljs$lang$applyTo = (function (arglist__11226){
var args__7143__auto__ = cljs.core.seq(arglist__11226);
return td__delegate(args__7143__auto__);
});
td.cljs$core$IFn$_invoke$arity$variadic = td__delegate;
return td;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.textarea = (function() { 
var textarea__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8929_11227 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8930_11228 = null;var count__8931_11229 = 0;var i__8932_11230 = 0;while(true){
if((i__8932_11230 < count__8931_11229))
{var arg__7145__auto___11231 = cljs.core._nth.call(null,chunk__8930_11228,i__8932_11230);a__7144__auto__.push(arg__7145__auto___11231);
{
var G__11232 = seq__8929_11227;
var G__11233 = chunk__8930_11228;
var G__11234 = count__8931_11229;
var G__11235 = (i__8932_11230 + 1);
seq__8929_11227 = G__11232;
chunk__8930_11228 = G__11233;
count__8931_11229 = G__11234;
i__8932_11230 = G__11235;
continue;
}
} else
{var temp__4092__auto___11236 = cljs.core.seq.call(null,seq__8929_11227);if(temp__4092__auto___11236)
{var seq__8929_11237__$1 = temp__4092__auto___11236;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8929_11237__$1))
{var c__5633__auto___11238 = cljs.core.chunk_first.call(null,seq__8929_11237__$1);{
var G__11239 = cljs.core.chunk_rest.call(null,seq__8929_11237__$1);
var G__11240 = c__5633__auto___11238;
var G__11241 = cljs.core.count.call(null,c__5633__auto___11238);
var G__11242 = 0;
seq__8929_11227 = G__11239;
chunk__8930_11228 = G__11240;
count__8931_11229 = G__11241;
i__8932_11230 = G__11242;
continue;
}
} else
{var arg__7145__auto___11243 = cljs.core.first.call(null,seq__8929_11237__$1);a__7144__auto__.push(arg__7145__auto___11243);
{
var G__11244 = cljs.core.next.call(null,seq__8929_11237__$1);
var G__11245 = null;
var G__11246 = 0;
var G__11247 = 0;
seq__8929_11227 = G__11244;
chunk__8930_11228 = G__11245;
count__8931_11229 = G__11246;
i__8932_11230 = G__11247;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.textarea.apply(null,a__7144__auto__);
};
var textarea = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return textarea__delegate.call(this,args__7143__auto__);};
textarea.cljs$lang$maxFixedArity = 0;
textarea.cljs$lang$applyTo = (function (arglist__11248){
var args__7143__auto__ = cljs.core.seq(arglist__11248);
return textarea__delegate(args__7143__auto__);
});
textarea.cljs$core$IFn$_invoke$arity$variadic = textarea__delegate;
return textarea;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.tfoot = (function() { 
var tfoot__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8937_11249 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8938_11250 = null;var count__8939_11251 = 0;var i__8940_11252 = 0;while(true){
if((i__8940_11252 < count__8939_11251))
{var arg__7145__auto___11253 = cljs.core._nth.call(null,chunk__8938_11250,i__8940_11252);a__7144__auto__.push(arg__7145__auto___11253);
{
var G__11254 = seq__8937_11249;
var G__11255 = chunk__8938_11250;
var G__11256 = count__8939_11251;
var G__11257 = (i__8940_11252 + 1);
seq__8937_11249 = G__11254;
chunk__8938_11250 = G__11255;
count__8939_11251 = G__11256;
i__8940_11252 = G__11257;
continue;
}
} else
{var temp__4092__auto___11258 = cljs.core.seq.call(null,seq__8937_11249);if(temp__4092__auto___11258)
{var seq__8937_11259__$1 = temp__4092__auto___11258;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8937_11259__$1))
{var c__5633__auto___11260 = cljs.core.chunk_first.call(null,seq__8937_11259__$1);{
var G__11261 = cljs.core.chunk_rest.call(null,seq__8937_11259__$1);
var G__11262 = c__5633__auto___11260;
var G__11263 = cljs.core.count.call(null,c__5633__auto___11260);
var G__11264 = 0;
seq__8937_11249 = G__11261;
chunk__8938_11250 = G__11262;
count__8939_11251 = G__11263;
i__8940_11252 = G__11264;
continue;
}
} else
{var arg__7145__auto___11265 = cljs.core.first.call(null,seq__8937_11259__$1);a__7144__auto__.push(arg__7145__auto___11265);
{
var G__11266 = cljs.core.next.call(null,seq__8937_11259__$1);
var G__11267 = null;
var G__11268 = 0;
var G__11269 = 0;
seq__8937_11249 = G__11266;
chunk__8938_11250 = G__11267;
count__8939_11251 = G__11268;
i__8940_11252 = G__11269;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.tfoot.apply(null,a__7144__auto__);
};
var tfoot = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return tfoot__delegate.call(this,args__7143__auto__);};
tfoot.cljs$lang$maxFixedArity = 0;
tfoot.cljs$lang$applyTo = (function (arglist__11270){
var args__7143__auto__ = cljs.core.seq(arglist__11270);
return tfoot__delegate(args__7143__auto__);
});
tfoot.cljs$core$IFn$_invoke$arity$variadic = tfoot__delegate;
return tfoot;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.th = (function() { 
var th__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8945_11271 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8946_11272 = null;var count__8947_11273 = 0;var i__8948_11274 = 0;while(true){
if((i__8948_11274 < count__8947_11273))
{var arg__7145__auto___11275 = cljs.core._nth.call(null,chunk__8946_11272,i__8948_11274);a__7144__auto__.push(arg__7145__auto___11275);
{
var G__11276 = seq__8945_11271;
var G__11277 = chunk__8946_11272;
var G__11278 = count__8947_11273;
var G__11279 = (i__8948_11274 + 1);
seq__8945_11271 = G__11276;
chunk__8946_11272 = G__11277;
count__8947_11273 = G__11278;
i__8948_11274 = G__11279;
continue;
}
} else
{var temp__4092__auto___11280 = cljs.core.seq.call(null,seq__8945_11271);if(temp__4092__auto___11280)
{var seq__8945_11281__$1 = temp__4092__auto___11280;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8945_11281__$1))
{var c__5633__auto___11282 = cljs.core.chunk_first.call(null,seq__8945_11281__$1);{
var G__11283 = cljs.core.chunk_rest.call(null,seq__8945_11281__$1);
var G__11284 = c__5633__auto___11282;
var G__11285 = cljs.core.count.call(null,c__5633__auto___11282);
var G__11286 = 0;
seq__8945_11271 = G__11283;
chunk__8946_11272 = G__11284;
count__8947_11273 = G__11285;
i__8948_11274 = G__11286;
continue;
}
} else
{var arg__7145__auto___11287 = cljs.core.first.call(null,seq__8945_11281__$1);a__7144__auto__.push(arg__7145__auto___11287);
{
var G__11288 = cljs.core.next.call(null,seq__8945_11281__$1);
var G__11289 = null;
var G__11290 = 0;
var G__11291 = 0;
seq__8945_11271 = G__11288;
chunk__8946_11272 = G__11289;
count__8947_11273 = G__11290;
i__8948_11274 = G__11291;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.th.apply(null,a__7144__auto__);
};
var th = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return th__delegate.call(this,args__7143__auto__);};
th.cljs$lang$maxFixedArity = 0;
th.cljs$lang$applyTo = (function (arglist__11292){
var args__7143__auto__ = cljs.core.seq(arglist__11292);
return th__delegate(args__7143__auto__);
});
th.cljs$core$IFn$_invoke$arity$variadic = th__delegate;
return th;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.thead = (function() { 
var thead__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8953_11293 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8954_11294 = null;var count__8955_11295 = 0;var i__8956_11296 = 0;while(true){
if((i__8956_11296 < count__8955_11295))
{var arg__7145__auto___11297 = cljs.core._nth.call(null,chunk__8954_11294,i__8956_11296);a__7144__auto__.push(arg__7145__auto___11297);
{
var G__11298 = seq__8953_11293;
var G__11299 = chunk__8954_11294;
var G__11300 = count__8955_11295;
var G__11301 = (i__8956_11296 + 1);
seq__8953_11293 = G__11298;
chunk__8954_11294 = G__11299;
count__8955_11295 = G__11300;
i__8956_11296 = G__11301;
continue;
}
} else
{var temp__4092__auto___11302 = cljs.core.seq.call(null,seq__8953_11293);if(temp__4092__auto___11302)
{var seq__8953_11303__$1 = temp__4092__auto___11302;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8953_11303__$1))
{var c__5633__auto___11304 = cljs.core.chunk_first.call(null,seq__8953_11303__$1);{
var G__11305 = cljs.core.chunk_rest.call(null,seq__8953_11303__$1);
var G__11306 = c__5633__auto___11304;
var G__11307 = cljs.core.count.call(null,c__5633__auto___11304);
var G__11308 = 0;
seq__8953_11293 = G__11305;
chunk__8954_11294 = G__11306;
count__8955_11295 = G__11307;
i__8956_11296 = G__11308;
continue;
}
} else
{var arg__7145__auto___11309 = cljs.core.first.call(null,seq__8953_11303__$1);a__7144__auto__.push(arg__7145__auto___11309);
{
var G__11310 = cljs.core.next.call(null,seq__8953_11303__$1);
var G__11311 = null;
var G__11312 = 0;
var G__11313 = 0;
seq__8953_11293 = G__11310;
chunk__8954_11294 = G__11311;
count__8955_11295 = G__11312;
i__8956_11296 = G__11313;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.thead.apply(null,a__7144__auto__);
};
var thead = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return thead__delegate.call(this,args__7143__auto__);};
thead.cljs$lang$maxFixedArity = 0;
thead.cljs$lang$applyTo = (function (arglist__11314){
var args__7143__auto__ = cljs.core.seq(arglist__11314);
return thead__delegate(args__7143__auto__);
});
thead.cljs$core$IFn$_invoke$arity$variadic = thead__delegate;
return thead;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.time = (function() { 
var time__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8961_11315 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8962_11316 = null;var count__8963_11317 = 0;var i__8964_11318 = 0;while(true){
if((i__8964_11318 < count__8963_11317))
{var arg__7145__auto___11319 = cljs.core._nth.call(null,chunk__8962_11316,i__8964_11318);a__7144__auto__.push(arg__7145__auto___11319);
{
var G__11320 = seq__8961_11315;
var G__11321 = chunk__8962_11316;
var G__11322 = count__8963_11317;
var G__11323 = (i__8964_11318 + 1);
seq__8961_11315 = G__11320;
chunk__8962_11316 = G__11321;
count__8963_11317 = G__11322;
i__8964_11318 = G__11323;
continue;
}
} else
{var temp__4092__auto___11324 = cljs.core.seq.call(null,seq__8961_11315);if(temp__4092__auto___11324)
{var seq__8961_11325__$1 = temp__4092__auto___11324;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8961_11325__$1))
{var c__5633__auto___11326 = cljs.core.chunk_first.call(null,seq__8961_11325__$1);{
var G__11327 = cljs.core.chunk_rest.call(null,seq__8961_11325__$1);
var G__11328 = c__5633__auto___11326;
var G__11329 = cljs.core.count.call(null,c__5633__auto___11326);
var G__11330 = 0;
seq__8961_11315 = G__11327;
chunk__8962_11316 = G__11328;
count__8963_11317 = G__11329;
i__8964_11318 = G__11330;
continue;
}
} else
{var arg__7145__auto___11331 = cljs.core.first.call(null,seq__8961_11325__$1);a__7144__auto__.push(arg__7145__auto___11331);
{
var G__11332 = cljs.core.next.call(null,seq__8961_11325__$1);
var G__11333 = null;
var G__11334 = 0;
var G__11335 = 0;
seq__8961_11315 = G__11332;
chunk__8962_11316 = G__11333;
count__8963_11317 = G__11334;
i__8964_11318 = G__11335;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.time.apply(null,a__7144__auto__);
};
var time = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return time__delegate.call(this,args__7143__auto__);};
time.cljs$lang$maxFixedArity = 0;
time.cljs$lang$applyTo = (function (arglist__11336){
var args__7143__auto__ = cljs.core.seq(arglist__11336);
return time__delegate(args__7143__auto__);
});
time.cljs$core$IFn$_invoke$arity$variadic = time__delegate;
return time;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.title = (function() { 
var title__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8969_11337 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8970_11338 = null;var count__8971_11339 = 0;var i__8972_11340 = 0;while(true){
if((i__8972_11340 < count__8971_11339))
{var arg__7145__auto___11341 = cljs.core._nth.call(null,chunk__8970_11338,i__8972_11340);a__7144__auto__.push(arg__7145__auto___11341);
{
var G__11342 = seq__8969_11337;
var G__11343 = chunk__8970_11338;
var G__11344 = count__8971_11339;
var G__11345 = (i__8972_11340 + 1);
seq__8969_11337 = G__11342;
chunk__8970_11338 = G__11343;
count__8971_11339 = G__11344;
i__8972_11340 = G__11345;
continue;
}
} else
{var temp__4092__auto___11346 = cljs.core.seq.call(null,seq__8969_11337);if(temp__4092__auto___11346)
{var seq__8969_11347__$1 = temp__4092__auto___11346;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8969_11347__$1))
{var c__5633__auto___11348 = cljs.core.chunk_first.call(null,seq__8969_11347__$1);{
var G__11349 = cljs.core.chunk_rest.call(null,seq__8969_11347__$1);
var G__11350 = c__5633__auto___11348;
var G__11351 = cljs.core.count.call(null,c__5633__auto___11348);
var G__11352 = 0;
seq__8969_11337 = G__11349;
chunk__8970_11338 = G__11350;
count__8971_11339 = G__11351;
i__8972_11340 = G__11352;
continue;
}
} else
{var arg__7145__auto___11353 = cljs.core.first.call(null,seq__8969_11347__$1);a__7144__auto__.push(arg__7145__auto___11353);
{
var G__11354 = cljs.core.next.call(null,seq__8969_11347__$1);
var G__11355 = null;
var G__11356 = 0;
var G__11357 = 0;
seq__8969_11337 = G__11354;
chunk__8970_11338 = G__11355;
count__8971_11339 = G__11356;
i__8972_11340 = G__11357;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.title.apply(null,a__7144__auto__);
};
var title = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return title__delegate.call(this,args__7143__auto__);};
title.cljs$lang$maxFixedArity = 0;
title.cljs$lang$applyTo = (function (arglist__11358){
var args__7143__auto__ = cljs.core.seq(arglist__11358);
return title__delegate(args__7143__auto__);
});
title.cljs$core$IFn$_invoke$arity$variadic = title__delegate;
return title;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.tr = (function() { 
var tr__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8977_11359 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8978_11360 = null;var count__8979_11361 = 0;var i__8980_11362 = 0;while(true){
if((i__8980_11362 < count__8979_11361))
{var arg__7145__auto___11363 = cljs.core._nth.call(null,chunk__8978_11360,i__8980_11362);a__7144__auto__.push(arg__7145__auto___11363);
{
var G__11364 = seq__8977_11359;
var G__11365 = chunk__8978_11360;
var G__11366 = count__8979_11361;
var G__11367 = (i__8980_11362 + 1);
seq__8977_11359 = G__11364;
chunk__8978_11360 = G__11365;
count__8979_11361 = G__11366;
i__8980_11362 = G__11367;
continue;
}
} else
{var temp__4092__auto___11368 = cljs.core.seq.call(null,seq__8977_11359);if(temp__4092__auto___11368)
{var seq__8977_11369__$1 = temp__4092__auto___11368;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8977_11369__$1))
{var c__5633__auto___11370 = cljs.core.chunk_first.call(null,seq__8977_11369__$1);{
var G__11371 = cljs.core.chunk_rest.call(null,seq__8977_11369__$1);
var G__11372 = c__5633__auto___11370;
var G__11373 = cljs.core.count.call(null,c__5633__auto___11370);
var G__11374 = 0;
seq__8977_11359 = G__11371;
chunk__8978_11360 = G__11372;
count__8979_11361 = G__11373;
i__8980_11362 = G__11374;
continue;
}
} else
{var arg__7145__auto___11375 = cljs.core.first.call(null,seq__8977_11369__$1);a__7144__auto__.push(arg__7145__auto___11375);
{
var G__11376 = cljs.core.next.call(null,seq__8977_11369__$1);
var G__11377 = null;
var G__11378 = 0;
var G__11379 = 0;
seq__8977_11359 = G__11376;
chunk__8978_11360 = G__11377;
count__8979_11361 = G__11378;
i__8980_11362 = G__11379;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.tr.apply(null,a__7144__auto__);
};
var tr = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return tr__delegate.call(this,args__7143__auto__);};
tr.cljs$lang$maxFixedArity = 0;
tr.cljs$lang$applyTo = (function (arglist__11380){
var args__7143__auto__ = cljs.core.seq(arglist__11380);
return tr__delegate(args__7143__auto__);
});
tr.cljs$core$IFn$_invoke$arity$variadic = tr__delegate;
return tr;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.track = (function() { 
var track__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8985_11381 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8986_11382 = null;var count__8987_11383 = 0;var i__8988_11384 = 0;while(true){
if((i__8988_11384 < count__8987_11383))
{var arg__7145__auto___11385 = cljs.core._nth.call(null,chunk__8986_11382,i__8988_11384);a__7144__auto__.push(arg__7145__auto___11385);
{
var G__11386 = seq__8985_11381;
var G__11387 = chunk__8986_11382;
var G__11388 = count__8987_11383;
var G__11389 = (i__8988_11384 + 1);
seq__8985_11381 = G__11386;
chunk__8986_11382 = G__11387;
count__8987_11383 = G__11388;
i__8988_11384 = G__11389;
continue;
}
} else
{var temp__4092__auto___11390 = cljs.core.seq.call(null,seq__8985_11381);if(temp__4092__auto___11390)
{var seq__8985_11391__$1 = temp__4092__auto___11390;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8985_11391__$1))
{var c__5633__auto___11392 = cljs.core.chunk_first.call(null,seq__8985_11391__$1);{
var G__11393 = cljs.core.chunk_rest.call(null,seq__8985_11391__$1);
var G__11394 = c__5633__auto___11392;
var G__11395 = cljs.core.count.call(null,c__5633__auto___11392);
var G__11396 = 0;
seq__8985_11381 = G__11393;
chunk__8986_11382 = G__11394;
count__8987_11383 = G__11395;
i__8988_11384 = G__11396;
continue;
}
} else
{var arg__7145__auto___11397 = cljs.core.first.call(null,seq__8985_11391__$1);a__7144__auto__.push(arg__7145__auto___11397);
{
var G__11398 = cljs.core.next.call(null,seq__8985_11391__$1);
var G__11399 = null;
var G__11400 = 0;
var G__11401 = 0;
seq__8985_11381 = G__11398;
chunk__8986_11382 = G__11399;
count__8987_11383 = G__11400;
i__8988_11384 = G__11401;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.track.apply(null,a__7144__auto__);
};
var track = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return track__delegate.call(this,args__7143__auto__);};
track.cljs$lang$maxFixedArity = 0;
track.cljs$lang$applyTo = (function (arglist__11402){
var args__7143__auto__ = cljs.core.seq(arglist__11402);
return track__delegate(args__7143__auto__);
});
track.cljs$core$IFn$_invoke$arity$variadic = track__delegate;
return track;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.u = (function() { 
var u__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8993_11403 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8994_11404 = null;var count__8995_11405 = 0;var i__8996_11406 = 0;while(true){
if((i__8996_11406 < count__8995_11405))
{var arg__7145__auto___11407 = cljs.core._nth.call(null,chunk__8994_11404,i__8996_11406);a__7144__auto__.push(arg__7145__auto___11407);
{
var G__11408 = seq__8993_11403;
var G__11409 = chunk__8994_11404;
var G__11410 = count__8995_11405;
var G__11411 = (i__8996_11406 + 1);
seq__8993_11403 = G__11408;
chunk__8994_11404 = G__11409;
count__8995_11405 = G__11410;
i__8996_11406 = G__11411;
continue;
}
} else
{var temp__4092__auto___11412 = cljs.core.seq.call(null,seq__8993_11403);if(temp__4092__auto___11412)
{var seq__8993_11413__$1 = temp__4092__auto___11412;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8993_11413__$1))
{var c__5633__auto___11414 = cljs.core.chunk_first.call(null,seq__8993_11413__$1);{
var G__11415 = cljs.core.chunk_rest.call(null,seq__8993_11413__$1);
var G__11416 = c__5633__auto___11414;
var G__11417 = cljs.core.count.call(null,c__5633__auto___11414);
var G__11418 = 0;
seq__8993_11403 = G__11415;
chunk__8994_11404 = G__11416;
count__8995_11405 = G__11417;
i__8996_11406 = G__11418;
continue;
}
} else
{var arg__7145__auto___11419 = cljs.core.first.call(null,seq__8993_11413__$1);a__7144__auto__.push(arg__7145__auto___11419);
{
var G__11420 = cljs.core.next.call(null,seq__8993_11413__$1);
var G__11421 = null;
var G__11422 = 0;
var G__11423 = 0;
seq__8993_11403 = G__11420;
chunk__8994_11404 = G__11421;
count__8995_11405 = G__11422;
i__8996_11406 = G__11423;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.u.apply(null,a__7144__auto__);
};
var u = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return u__delegate.call(this,args__7143__auto__);};
u.cljs$lang$maxFixedArity = 0;
u.cljs$lang$applyTo = (function (arglist__11424){
var args__7143__auto__ = cljs.core.seq(arglist__11424);
return u__delegate(args__7143__auto__);
});
u.cljs$core$IFn$_invoke$arity$variadic = u__delegate;
return u;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.ul = (function() { 
var ul__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__9001_11425 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__9002_11426 = null;var count__9003_11427 = 0;var i__9004_11428 = 0;while(true){
if((i__9004_11428 < count__9003_11427))
{var arg__7145__auto___11429 = cljs.core._nth.call(null,chunk__9002_11426,i__9004_11428);a__7144__auto__.push(arg__7145__auto___11429);
{
var G__11430 = seq__9001_11425;
var G__11431 = chunk__9002_11426;
var G__11432 = count__9003_11427;
var G__11433 = (i__9004_11428 + 1);
seq__9001_11425 = G__11430;
chunk__9002_11426 = G__11431;
count__9003_11427 = G__11432;
i__9004_11428 = G__11433;
continue;
}
} else
{var temp__4092__auto___11434 = cljs.core.seq.call(null,seq__9001_11425);if(temp__4092__auto___11434)
{var seq__9001_11435__$1 = temp__4092__auto___11434;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9001_11435__$1))
{var c__5633__auto___11436 = cljs.core.chunk_first.call(null,seq__9001_11435__$1);{
var G__11437 = cljs.core.chunk_rest.call(null,seq__9001_11435__$1);
var G__11438 = c__5633__auto___11436;
var G__11439 = cljs.core.count.call(null,c__5633__auto___11436);
var G__11440 = 0;
seq__9001_11425 = G__11437;
chunk__9002_11426 = G__11438;
count__9003_11427 = G__11439;
i__9004_11428 = G__11440;
continue;
}
} else
{var arg__7145__auto___11441 = cljs.core.first.call(null,seq__9001_11435__$1);a__7144__auto__.push(arg__7145__auto___11441);
{
var G__11442 = cljs.core.next.call(null,seq__9001_11435__$1);
var G__11443 = null;
var G__11444 = 0;
var G__11445 = 0;
seq__9001_11425 = G__11442;
chunk__9002_11426 = G__11443;
count__9003_11427 = G__11444;
i__9004_11428 = G__11445;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.ul.apply(null,a__7144__auto__);
};
var ul = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ul__delegate.call(this,args__7143__auto__);};
ul.cljs$lang$maxFixedArity = 0;
ul.cljs$lang$applyTo = (function (arglist__11446){
var args__7143__auto__ = cljs.core.seq(arglist__11446);
return ul__delegate(args__7143__auto__);
});
ul.cljs$core$IFn$_invoke$arity$variadic = ul__delegate;
return ul;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.var$ = (function() { 
var var$__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__9009_11447 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__9010_11448 = null;var count__9011_11449 = 0;var i__9012_11450 = 0;while(true){
if((i__9012_11450 < count__9011_11449))
{var arg__7145__auto___11451 = cljs.core._nth.call(null,chunk__9010_11448,i__9012_11450);a__7144__auto__.push(arg__7145__auto___11451);
{
var G__11452 = seq__9009_11447;
var G__11453 = chunk__9010_11448;
var G__11454 = count__9011_11449;
var G__11455 = (i__9012_11450 + 1);
seq__9009_11447 = G__11452;
chunk__9010_11448 = G__11453;
count__9011_11449 = G__11454;
i__9012_11450 = G__11455;
continue;
}
} else
{var temp__4092__auto___11456 = cljs.core.seq.call(null,seq__9009_11447);if(temp__4092__auto___11456)
{var seq__9009_11457__$1 = temp__4092__auto___11456;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9009_11457__$1))
{var c__5633__auto___11458 = cljs.core.chunk_first.call(null,seq__9009_11457__$1);{
var G__11459 = cljs.core.chunk_rest.call(null,seq__9009_11457__$1);
var G__11460 = c__5633__auto___11458;
var G__11461 = cljs.core.count.call(null,c__5633__auto___11458);
var G__11462 = 0;
seq__9009_11447 = G__11459;
chunk__9010_11448 = G__11460;
count__9011_11449 = G__11461;
i__9012_11450 = G__11462;
continue;
}
} else
{var arg__7145__auto___11463 = cljs.core.first.call(null,seq__9009_11457__$1);a__7144__auto__.push(arg__7145__auto___11463);
{
var G__11464 = cljs.core.next.call(null,seq__9009_11457__$1);
var G__11465 = null;
var G__11466 = 0;
var G__11467 = 0;
seq__9009_11447 = G__11464;
chunk__9010_11448 = G__11465;
count__9011_11449 = G__11466;
i__9012_11450 = G__11467;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.var$.apply(null,a__7144__auto__);
};
var var$ = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return var$__delegate.call(this,args__7143__auto__);};
var$.cljs$lang$maxFixedArity = 0;
var$.cljs$lang$applyTo = (function (arglist__11468){
var args__7143__auto__ = cljs.core.seq(arglist__11468);
return var$__delegate(args__7143__auto__);
});
var$.cljs$core$IFn$_invoke$arity$variadic = var$__delegate;
return var$;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.video = (function() { 
var video__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__9017_11469 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__9018_11470 = null;var count__9019_11471 = 0;var i__9020_11472 = 0;while(true){
if((i__9020_11472 < count__9019_11471))
{var arg__7145__auto___11473 = cljs.core._nth.call(null,chunk__9018_11470,i__9020_11472);a__7144__auto__.push(arg__7145__auto___11473);
{
var G__11474 = seq__9017_11469;
var G__11475 = chunk__9018_11470;
var G__11476 = count__9019_11471;
var G__11477 = (i__9020_11472 + 1);
seq__9017_11469 = G__11474;
chunk__9018_11470 = G__11475;
count__9019_11471 = G__11476;
i__9020_11472 = G__11477;
continue;
}
} else
{var temp__4092__auto___11478 = cljs.core.seq.call(null,seq__9017_11469);if(temp__4092__auto___11478)
{var seq__9017_11479__$1 = temp__4092__auto___11478;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9017_11479__$1))
{var c__5633__auto___11480 = cljs.core.chunk_first.call(null,seq__9017_11479__$1);{
var G__11481 = cljs.core.chunk_rest.call(null,seq__9017_11479__$1);
var G__11482 = c__5633__auto___11480;
var G__11483 = cljs.core.count.call(null,c__5633__auto___11480);
var G__11484 = 0;
seq__9017_11469 = G__11481;
chunk__9018_11470 = G__11482;
count__9019_11471 = G__11483;
i__9020_11472 = G__11484;
continue;
}
} else
{var arg__7145__auto___11485 = cljs.core.first.call(null,seq__9017_11479__$1);a__7144__auto__.push(arg__7145__auto___11485);
{
var G__11486 = cljs.core.next.call(null,seq__9017_11479__$1);
var G__11487 = null;
var G__11488 = 0;
var G__11489 = 0;
seq__9017_11469 = G__11486;
chunk__9018_11470 = G__11487;
count__9019_11471 = G__11488;
i__9020_11472 = G__11489;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.video.apply(null,a__7144__auto__);
};
var video = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return video__delegate.call(this,args__7143__auto__);};
video.cljs$lang$maxFixedArity = 0;
video.cljs$lang$applyTo = (function (arglist__11490){
var args__7143__auto__ = cljs.core.seq(arglist__11490);
return video__delegate(args__7143__auto__);
});
video.cljs$core$IFn$_invoke$arity$variadic = video__delegate;
return video;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.wbr = (function() { 
var wbr__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__9025_11491 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__9026_11492 = null;var count__9027_11493 = 0;var i__9028_11494 = 0;while(true){
if((i__9028_11494 < count__9027_11493))
{var arg__7145__auto___11495 = cljs.core._nth.call(null,chunk__9026_11492,i__9028_11494);a__7144__auto__.push(arg__7145__auto___11495);
{
var G__11496 = seq__9025_11491;
var G__11497 = chunk__9026_11492;
var G__11498 = count__9027_11493;
var G__11499 = (i__9028_11494 + 1);
seq__9025_11491 = G__11496;
chunk__9026_11492 = G__11497;
count__9027_11493 = G__11498;
i__9028_11494 = G__11499;
continue;
}
} else
{var temp__4092__auto___11500 = cljs.core.seq.call(null,seq__9025_11491);if(temp__4092__auto___11500)
{var seq__9025_11501__$1 = temp__4092__auto___11500;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9025_11501__$1))
{var c__5633__auto___11502 = cljs.core.chunk_first.call(null,seq__9025_11501__$1);{
var G__11503 = cljs.core.chunk_rest.call(null,seq__9025_11501__$1);
var G__11504 = c__5633__auto___11502;
var G__11505 = cljs.core.count.call(null,c__5633__auto___11502);
var G__11506 = 0;
seq__9025_11491 = G__11503;
chunk__9026_11492 = G__11504;
count__9027_11493 = G__11505;
i__9028_11494 = G__11506;
continue;
}
} else
{var arg__7145__auto___11507 = cljs.core.first.call(null,seq__9025_11501__$1);a__7144__auto__.push(arg__7145__auto___11507);
{
var G__11508 = cljs.core.next.call(null,seq__9025_11501__$1);
var G__11509 = null;
var G__11510 = 0;
var G__11511 = 0;
seq__9025_11491 = G__11508;
chunk__9026_11492 = G__11509;
count__9027_11493 = G__11510;
i__9028_11494 = G__11511;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.wbr.apply(null,a__7144__auto__);
};
var wbr = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return wbr__delegate.call(this,args__7143__auto__);};
wbr.cljs$lang$maxFixedArity = 0;
wbr.cljs$lang$applyTo = (function (arglist__11512){
var args__7143__auto__ = cljs.core.seq(arglist__11512);
return wbr__delegate(args__7143__auto__);
});
wbr.cljs$core$IFn$_invoke$arity$variadic = wbr__delegate;
return wbr;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.circle = (function() { 
var circle__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__9033_11513 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__9034_11514 = null;var count__9035_11515 = 0;var i__9036_11516 = 0;while(true){
if((i__9036_11516 < count__9035_11515))
{var arg__7145__auto___11517 = cljs.core._nth.call(null,chunk__9034_11514,i__9036_11516);a__7144__auto__.push(arg__7145__auto___11517);
{
var G__11518 = seq__9033_11513;
var G__11519 = chunk__9034_11514;
var G__11520 = count__9035_11515;
var G__11521 = (i__9036_11516 + 1);
seq__9033_11513 = G__11518;
chunk__9034_11514 = G__11519;
count__9035_11515 = G__11520;
i__9036_11516 = G__11521;
continue;
}
} else
{var temp__4092__auto___11522 = cljs.core.seq.call(null,seq__9033_11513);if(temp__4092__auto___11522)
{var seq__9033_11523__$1 = temp__4092__auto___11522;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9033_11523__$1))
{var c__5633__auto___11524 = cljs.core.chunk_first.call(null,seq__9033_11523__$1);{
var G__11525 = cljs.core.chunk_rest.call(null,seq__9033_11523__$1);
var G__11526 = c__5633__auto___11524;
var G__11527 = cljs.core.count.call(null,c__5633__auto___11524);
var G__11528 = 0;
seq__9033_11513 = G__11525;
chunk__9034_11514 = G__11526;
count__9035_11515 = G__11527;
i__9036_11516 = G__11528;
continue;
}
} else
{var arg__7145__auto___11529 = cljs.core.first.call(null,seq__9033_11523__$1);a__7144__auto__.push(arg__7145__auto___11529);
{
var G__11530 = cljs.core.next.call(null,seq__9033_11523__$1);
var G__11531 = null;
var G__11532 = 0;
var G__11533 = 0;
seq__9033_11513 = G__11530;
chunk__9034_11514 = G__11531;
count__9035_11515 = G__11532;
i__9036_11516 = G__11533;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.circle.apply(null,a__7144__auto__);
};
var circle = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return circle__delegate.call(this,args__7143__auto__);};
circle.cljs$lang$maxFixedArity = 0;
circle.cljs$lang$applyTo = (function (arglist__11534){
var args__7143__auto__ = cljs.core.seq(arglist__11534);
return circle__delegate(args__7143__auto__);
});
circle.cljs$core$IFn$_invoke$arity$variadic = circle__delegate;
return circle;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.g = (function() { 
var g__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__9041_11535 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__9042_11536 = null;var count__9043_11537 = 0;var i__9044_11538 = 0;while(true){
if((i__9044_11538 < count__9043_11537))
{var arg__7145__auto___11539 = cljs.core._nth.call(null,chunk__9042_11536,i__9044_11538);a__7144__auto__.push(arg__7145__auto___11539);
{
var G__11540 = seq__9041_11535;
var G__11541 = chunk__9042_11536;
var G__11542 = count__9043_11537;
var G__11543 = (i__9044_11538 + 1);
seq__9041_11535 = G__11540;
chunk__9042_11536 = G__11541;
count__9043_11537 = G__11542;
i__9044_11538 = G__11543;
continue;
}
} else
{var temp__4092__auto___11544 = cljs.core.seq.call(null,seq__9041_11535);if(temp__4092__auto___11544)
{var seq__9041_11545__$1 = temp__4092__auto___11544;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9041_11545__$1))
{var c__5633__auto___11546 = cljs.core.chunk_first.call(null,seq__9041_11545__$1);{
var G__11547 = cljs.core.chunk_rest.call(null,seq__9041_11545__$1);
var G__11548 = c__5633__auto___11546;
var G__11549 = cljs.core.count.call(null,c__5633__auto___11546);
var G__11550 = 0;
seq__9041_11535 = G__11547;
chunk__9042_11536 = G__11548;
count__9043_11537 = G__11549;
i__9044_11538 = G__11550;
continue;
}
} else
{var arg__7145__auto___11551 = cljs.core.first.call(null,seq__9041_11545__$1);a__7144__auto__.push(arg__7145__auto___11551);
{
var G__11552 = cljs.core.next.call(null,seq__9041_11545__$1);
var G__11553 = null;
var G__11554 = 0;
var G__11555 = 0;
seq__9041_11535 = G__11552;
chunk__9042_11536 = G__11553;
count__9043_11537 = G__11554;
i__9044_11538 = G__11555;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.g.apply(null,a__7144__auto__);
};
var g = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return g__delegate.call(this,args__7143__auto__);};
g.cljs$lang$maxFixedArity = 0;
g.cljs$lang$applyTo = (function (arglist__11556){
var args__7143__auto__ = cljs.core.seq(arglist__11556);
return g__delegate(args__7143__auto__);
});
g.cljs$core$IFn$_invoke$arity$variadic = g__delegate;
return g;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.line = (function() { 
var line__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__9049_11557 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__9050_11558 = null;var count__9051_11559 = 0;var i__9052_11560 = 0;while(true){
if((i__9052_11560 < count__9051_11559))
{var arg__7145__auto___11561 = cljs.core._nth.call(null,chunk__9050_11558,i__9052_11560);a__7144__auto__.push(arg__7145__auto___11561);
{
var G__11562 = seq__9049_11557;
var G__11563 = chunk__9050_11558;
var G__11564 = count__9051_11559;
var G__11565 = (i__9052_11560 + 1);
seq__9049_11557 = G__11562;
chunk__9050_11558 = G__11563;
count__9051_11559 = G__11564;
i__9052_11560 = G__11565;
continue;
}
} else
{var temp__4092__auto___11566 = cljs.core.seq.call(null,seq__9049_11557);if(temp__4092__auto___11566)
{var seq__9049_11567__$1 = temp__4092__auto___11566;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9049_11567__$1))
{var c__5633__auto___11568 = cljs.core.chunk_first.call(null,seq__9049_11567__$1);{
var G__11569 = cljs.core.chunk_rest.call(null,seq__9049_11567__$1);
var G__11570 = c__5633__auto___11568;
var G__11571 = cljs.core.count.call(null,c__5633__auto___11568);
var G__11572 = 0;
seq__9049_11557 = G__11569;
chunk__9050_11558 = G__11570;
count__9051_11559 = G__11571;
i__9052_11560 = G__11572;
continue;
}
} else
{var arg__7145__auto___11573 = cljs.core.first.call(null,seq__9049_11567__$1);a__7144__auto__.push(arg__7145__auto___11573);
{
var G__11574 = cljs.core.next.call(null,seq__9049_11567__$1);
var G__11575 = null;
var G__11576 = 0;
var G__11577 = 0;
seq__9049_11557 = G__11574;
chunk__9050_11558 = G__11575;
count__9051_11559 = G__11576;
i__9052_11560 = G__11577;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.line.apply(null,a__7144__auto__);
};
var line = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return line__delegate.call(this,args__7143__auto__);};
line.cljs$lang$maxFixedArity = 0;
line.cljs$lang$applyTo = (function (arglist__11578){
var args__7143__auto__ = cljs.core.seq(arglist__11578);
return line__delegate(args__7143__auto__);
});
line.cljs$core$IFn$_invoke$arity$variadic = line__delegate;
return line;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.path = (function() { 
var path__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__9057_11579 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__9058_11580 = null;var count__9059_11581 = 0;var i__9060_11582 = 0;while(true){
if((i__9060_11582 < count__9059_11581))
{var arg__7145__auto___11583 = cljs.core._nth.call(null,chunk__9058_11580,i__9060_11582);a__7144__auto__.push(arg__7145__auto___11583);
{
var G__11584 = seq__9057_11579;
var G__11585 = chunk__9058_11580;
var G__11586 = count__9059_11581;
var G__11587 = (i__9060_11582 + 1);
seq__9057_11579 = G__11584;
chunk__9058_11580 = G__11585;
count__9059_11581 = G__11586;
i__9060_11582 = G__11587;
continue;
}
} else
{var temp__4092__auto___11588 = cljs.core.seq.call(null,seq__9057_11579);if(temp__4092__auto___11588)
{var seq__9057_11589__$1 = temp__4092__auto___11588;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9057_11589__$1))
{var c__5633__auto___11590 = cljs.core.chunk_first.call(null,seq__9057_11589__$1);{
var G__11591 = cljs.core.chunk_rest.call(null,seq__9057_11589__$1);
var G__11592 = c__5633__auto___11590;
var G__11593 = cljs.core.count.call(null,c__5633__auto___11590);
var G__11594 = 0;
seq__9057_11579 = G__11591;
chunk__9058_11580 = G__11592;
count__9059_11581 = G__11593;
i__9060_11582 = G__11594;
continue;
}
} else
{var arg__7145__auto___11595 = cljs.core.first.call(null,seq__9057_11589__$1);a__7144__auto__.push(arg__7145__auto___11595);
{
var G__11596 = cljs.core.next.call(null,seq__9057_11589__$1);
var G__11597 = null;
var G__11598 = 0;
var G__11599 = 0;
seq__9057_11579 = G__11596;
chunk__9058_11580 = G__11597;
count__9059_11581 = G__11598;
i__9060_11582 = G__11599;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.path.apply(null,a__7144__auto__);
};
var path = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return path__delegate.call(this,args__7143__auto__);};
path.cljs$lang$maxFixedArity = 0;
path.cljs$lang$applyTo = (function (arglist__11600){
var args__7143__auto__ = cljs.core.seq(arglist__11600);
return path__delegate(args__7143__auto__);
});
path.cljs$core$IFn$_invoke$arity$variadic = path__delegate;
return path;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.polygon = (function() { 
var polygon__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__9065_11601 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__9066_11602 = null;var count__9067_11603 = 0;var i__9068_11604 = 0;while(true){
if((i__9068_11604 < count__9067_11603))
{var arg__7145__auto___11605 = cljs.core._nth.call(null,chunk__9066_11602,i__9068_11604);a__7144__auto__.push(arg__7145__auto___11605);
{
var G__11606 = seq__9065_11601;
var G__11607 = chunk__9066_11602;
var G__11608 = count__9067_11603;
var G__11609 = (i__9068_11604 + 1);
seq__9065_11601 = G__11606;
chunk__9066_11602 = G__11607;
count__9067_11603 = G__11608;
i__9068_11604 = G__11609;
continue;
}
} else
{var temp__4092__auto___11610 = cljs.core.seq.call(null,seq__9065_11601);if(temp__4092__auto___11610)
{var seq__9065_11611__$1 = temp__4092__auto___11610;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9065_11611__$1))
{var c__5633__auto___11612 = cljs.core.chunk_first.call(null,seq__9065_11611__$1);{
var G__11613 = cljs.core.chunk_rest.call(null,seq__9065_11611__$1);
var G__11614 = c__5633__auto___11612;
var G__11615 = cljs.core.count.call(null,c__5633__auto___11612);
var G__11616 = 0;
seq__9065_11601 = G__11613;
chunk__9066_11602 = G__11614;
count__9067_11603 = G__11615;
i__9068_11604 = G__11616;
continue;
}
} else
{var arg__7145__auto___11617 = cljs.core.first.call(null,seq__9065_11611__$1);a__7144__auto__.push(arg__7145__auto___11617);
{
var G__11618 = cljs.core.next.call(null,seq__9065_11611__$1);
var G__11619 = null;
var G__11620 = 0;
var G__11621 = 0;
seq__9065_11601 = G__11618;
chunk__9066_11602 = G__11619;
count__9067_11603 = G__11620;
i__9068_11604 = G__11621;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.polygon.apply(null,a__7144__auto__);
};
var polygon = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return polygon__delegate.call(this,args__7143__auto__);};
polygon.cljs$lang$maxFixedArity = 0;
polygon.cljs$lang$applyTo = (function (arglist__11622){
var args__7143__auto__ = cljs.core.seq(arglist__11622);
return polygon__delegate(args__7143__auto__);
});
polygon.cljs$core$IFn$_invoke$arity$variadic = polygon__delegate;
return polygon;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.polyline = (function() { 
var polyline__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__9073_11623 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__9074_11624 = null;var count__9075_11625 = 0;var i__9076_11626 = 0;while(true){
if((i__9076_11626 < count__9075_11625))
{var arg__7145__auto___11627 = cljs.core._nth.call(null,chunk__9074_11624,i__9076_11626);a__7144__auto__.push(arg__7145__auto___11627);
{
var G__11628 = seq__9073_11623;
var G__11629 = chunk__9074_11624;
var G__11630 = count__9075_11625;
var G__11631 = (i__9076_11626 + 1);
seq__9073_11623 = G__11628;
chunk__9074_11624 = G__11629;
count__9075_11625 = G__11630;
i__9076_11626 = G__11631;
continue;
}
} else
{var temp__4092__auto___11632 = cljs.core.seq.call(null,seq__9073_11623);if(temp__4092__auto___11632)
{var seq__9073_11633__$1 = temp__4092__auto___11632;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9073_11633__$1))
{var c__5633__auto___11634 = cljs.core.chunk_first.call(null,seq__9073_11633__$1);{
var G__11635 = cljs.core.chunk_rest.call(null,seq__9073_11633__$1);
var G__11636 = c__5633__auto___11634;
var G__11637 = cljs.core.count.call(null,c__5633__auto___11634);
var G__11638 = 0;
seq__9073_11623 = G__11635;
chunk__9074_11624 = G__11636;
count__9075_11625 = G__11637;
i__9076_11626 = G__11638;
continue;
}
} else
{var arg__7145__auto___11639 = cljs.core.first.call(null,seq__9073_11633__$1);a__7144__auto__.push(arg__7145__auto___11639);
{
var G__11640 = cljs.core.next.call(null,seq__9073_11633__$1);
var G__11641 = null;
var G__11642 = 0;
var G__11643 = 0;
seq__9073_11623 = G__11640;
chunk__9074_11624 = G__11641;
count__9075_11625 = G__11642;
i__9076_11626 = G__11643;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.polyline.apply(null,a__7144__auto__);
};
var polyline = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return polyline__delegate.call(this,args__7143__auto__);};
polyline.cljs$lang$maxFixedArity = 0;
polyline.cljs$lang$applyTo = (function (arglist__11644){
var args__7143__auto__ = cljs.core.seq(arglist__11644);
return polyline__delegate(args__7143__auto__);
});
polyline.cljs$core$IFn$_invoke$arity$variadic = polyline__delegate;
return polyline;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.rect = (function() { 
var rect__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__9081_11645 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__9082_11646 = null;var count__9083_11647 = 0;var i__9084_11648 = 0;while(true){
if((i__9084_11648 < count__9083_11647))
{var arg__7145__auto___11649 = cljs.core._nth.call(null,chunk__9082_11646,i__9084_11648);a__7144__auto__.push(arg__7145__auto___11649);
{
var G__11650 = seq__9081_11645;
var G__11651 = chunk__9082_11646;
var G__11652 = count__9083_11647;
var G__11653 = (i__9084_11648 + 1);
seq__9081_11645 = G__11650;
chunk__9082_11646 = G__11651;
count__9083_11647 = G__11652;
i__9084_11648 = G__11653;
continue;
}
} else
{var temp__4092__auto___11654 = cljs.core.seq.call(null,seq__9081_11645);if(temp__4092__auto___11654)
{var seq__9081_11655__$1 = temp__4092__auto___11654;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9081_11655__$1))
{var c__5633__auto___11656 = cljs.core.chunk_first.call(null,seq__9081_11655__$1);{
var G__11657 = cljs.core.chunk_rest.call(null,seq__9081_11655__$1);
var G__11658 = c__5633__auto___11656;
var G__11659 = cljs.core.count.call(null,c__5633__auto___11656);
var G__11660 = 0;
seq__9081_11645 = G__11657;
chunk__9082_11646 = G__11658;
count__9083_11647 = G__11659;
i__9084_11648 = G__11660;
continue;
}
} else
{var arg__7145__auto___11661 = cljs.core.first.call(null,seq__9081_11655__$1);a__7144__auto__.push(arg__7145__auto___11661);
{
var G__11662 = cljs.core.next.call(null,seq__9081_11655__$1);
var G__11663 = null;
var G__11664 = 0;
var G__11665 = 0;
seq__9081_11645 = G__11662;
chunk__9082_11646 = G__11663;
count__9083_11647 = G__11664;
i__9084_11648 = G__11665;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.rect.apply(null,a__7144__auto__);
};
var rect = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return rect__delegate.call(this,args__7143__auto__);};
rect.cljs$lang$maxFixedArity = 0;
rect.cljs$lang$applyTo = (function (arglist__11666){
var args__7143__auto__ = cljs.core.seq(arglist__11666);
return rect__delegate(args__7143__auto__);
});
rect.cljs$core$IFn$_invoke$arity$variadic = rect__delegate;
return rect;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.svg = (function() { 
var svg__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__9089_11667 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__9090_11668 = null;var count__9091_11669 = 0;var i__9092_11670 = 0;while(true){
if((i__9092_11670 < count__9091_11669))
{var arg__7145__auto___11671 = cljs.core._nth.call(null,chunk__9090_11668,i__9092_11670);a__7144__auto__.push(arg__7145__auto___11671);
{
var G__11672 = seq__9089_11667;
var G__11673 = chunk__9090_11668;
var G__11674 = count__9091_11669;
var G__11675 = (i__9092_11670 + 1);
seq__9089_11667 = G__11672;
chunk__9090_11668 = G__11673;
count__9091_11669 = G__11674;
i__9092_11670 = G__11675;
continue;
}
} else
{var temp__4092__auto___11676 = cljs.core.seq.call(null,seq__9089_11667);if(temp__4092__auto___11676)
{var seq__9089_11677__$1 = temp__4092__auto___11676;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9089_11677__$1))
{var c__5633__auto___11678 = cljs.core.chunk_first.call(null,seq__9089_11677__$1);{
var G__11679 = cljs.core.chunk_rest.call(null,seq__9089_11677__$1);
var G__11680 = c__5633__auto___11678;
var G__11681 = cljs.core.count.call(null,c__5633__auto___11678);
var G__11682 = 0;
seq__9089_11667 = G__11679;
chunk__9090_11668 = G__11680;
count__9091_11669 = G__11681;
i__9092_11670 = G__11682;
continue;
}
} else
{var arg__7145__auto___11683 = cljs.core.first.call(null,seq__9089_11677__$1);a__7144__auto__.push(arg__7145__auto___11683);
{
var G__11684 = cljs.core.next.call(null,seq__9089_11677__$1);
var G__11685 = null;
var G__11686 = 0;
var G__11687 = 0;
seq__9089_11667 = G__11684;
chunk__9090_11668 = G__11685;
count__9091_11669 = G__11686;
i__9092_11670 = G__11687;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.svg.apply(null,a__7144__auto__);
};
var svg = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return svg__delegate.call(this,args__7143__auto__);};
svg.cljs$lang$maxFixedArity = 0;
svg.cljs$lang$applyTo = (function (arglist__11688){
var args__7143__auto__ = cljs.core.seq(arglist__11688);
return svg__delegate(args__7143__auto__);
});
svg.cljs$core$IFn$_invoke$arity$variadic = svg__delegate;
return svg;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.text = (function() { 
var text__delegate = function (args__7143__auto__){var a__7144__auto__ = [];a__7144__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__7143__auto__)));
var seq__8401_11689 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__7143__auto__));var chunk__8402_11690 = null;var count__8403_11691 = 0;var i__8404_11692 = 0;while(true){
if((i__8404_11692 < count__8403_11691))
{var arg__7145__auto___11693 = cljs.core._nth.call(null,chunk__8402_11690,i__8404_11692);a__7144__auto__.push(arg__7145__auto___11693);
{
var G__11694 = seq__8401_11689;
var G__11695 = chunk__8402_11690;
var G__11696 = count__8403_11691;
var G__11697 = (i__8404_11692 + 1);
seq__8401_11689 = G__11694;
chunk__8402_11690 = G__11695;
count__8403_11691 = G__11696;
i__8404_11692 = G__11697;
continue;
}
} else
{var temp__4092__auto___11698 = cljs.core.seq.call(null,seq__8401_11689);if(temp__4092__auto___11698)
{var seq__8401_11699__$1 = temp__4092__auto___11698;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8401_11699__$1))
{var c__5633__auto___11700 = cljs.core.chunk_first.call(null,seq__8401_11699__$1);{
var G__11701 = cljs.core.chunk_rest.call(null,seq__8401_11699__$1);
var G__11702 = c__5633__auto___11700;
var G__11703 = cljs.core.count.call(null,c__5633__auto___11700);
var G__11704 = 0;
seq__8401_11689 = G__11701;
chunk__8402_11690 = G__11702;
count__8403_11691 = G__11703;
i__8404_11692 = G__11704;
continue;
}
} else
{var arg__7145__auto___11705 = cljs.core.first.call(null,seq__8401_11699__$1);a__7144__auto__.push(arg__7145__auto___11705);
{
var G__11706 = cljs.core.next.call(null,seq__8401_11699__$1);
var G__11707 = null;
var G__11708 = 0;
var G__11709 = 0;
seq__8401_11689 = G__11706;
chunk__8402_11690 = G__11707;
count__8403_11691 = G__11708;
i__8404_11692 = G__11709;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.text.apply(null,a__7144__auto__);
};
var text = function (var_args){
var args__7143__auto__ = null;if (arguments.length > 0) {
  args__7143__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return text__delegate.call(this,args__7143__auto__);};
text.cljs$lang$maxFixedArity = 0;
text.cljs$lang$applyTo = (function (arglist__11710){
var args__7143__auto__ = cljs.core.seq(arglist__11710);
return text__delegate(args__7143__auto__);
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
lt.plugins.elm_light.autocompleter.handle_keypress = (function handle_keypress(p__8119,ev){var map__8122 = p__8119;var map__8122__$1 = ((cljs.core.seq_QMARK_.call(null,map__8122))?cljs.core.apply.call(null,cljs.core.hash_map,map__8122):map__8122);var props = map__8122__$1;var on_cancel = cljs.core.get.call(null,map__8122__$1,new cljs.core.Keyword(null,"on-cancel","on-cancel",600765850));var on_select = cljs.core.get.call(null,map__8122__$1,new cljs.core.Keyword(null,"on-select","on-select",1062468636));var on_down = cljs.core.get.call(null,map__8122__$1,new cljs.core.Keyword(null,"on-down","on-down",3936419650));var on_up = cljs.core.get.call(null,map__8122__$1,new cljs.core.Keyword(null,"on-up","on-up",1119739067));var kk = ev.which;var G__8123 = kk;if(cljs.core._EQ_.call(null,27,G__8123))
{ev.preventDefault();
ev.target.value = "";
return on_cancel.call(null);
} else
{if(cljs.core._EQ_.call(null,13,G__8123))
{ev.preventDefault();
var temp__4092__auto___8139 = lt.plugins.elm_light.autocompleter.find_active.call(null,new cljs.core.Keyword(null,"items","items",1114430258).cljs$core$IFn$_invoke$arity$1(props));if(cljs.core.truth_(temp__4092__auto___8139))
{var active_8140 = temp__4092__auto___8139;ev.target.value = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(active_8140);
} else
{}
return on_select.call(null);
} else
{if(cljs.core._EQ_.call(null,40,G__8123))
{ev.preventDefault();
return on_down.call(null);
} else
{if(cljs.core._EQ_.call(null,38,G__8123))
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
return (function (p1__8124_SHARP_){return "autocomplete-dropdown-item row".concat((cljs.core.truth_(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(p1__8124_SHARP_))?" autocomplete-active":""));
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
lt.plugins.elm_light.autocompleter.Adder = quiescent.component.call(null,(function (p__8125){var map__8126 = p__8125;var map__8126__$1 = ((cljs.core.seq_QMARK_.call(null,map__8126))?cljs.core.apply.call(null,cljs.core.hash_map,map__8126):map__8126);var props = map__8126__$1;var disabled = cljs.core.get.call(null,map__8126__$1,new cljs.core.Keyword(null,"disabled","disabled",1284845038));var on_add_package = cljs.core.get.call(null,map__8126__$1,new cljs.core.Keyword(null,"on-add-package","on-add-package",3601701790));return quiescent.dom.button.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",1004015509),"btn",new cljs.core.Keyword(null,"disabled","disabled",1284845038),disabled,new cljs.core.Keyword(null,"onClick","onClick",3956969051),((function (map__8126,map__8126__$1,props,disabled,on_add_package){
return (function (){return on_add_package.call(null);
});})(map__8126,map__8126__$1,props,disabled,on_add_package))
], null),"Add package");
}));
/**
* 
*/
lt.plugins.elm_light.autocompleter.Versions = quiescent.component.call(null,(function (props){return cljs.core.apply.call(null,quiescent.dom.select,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",1004015509),"versions",new cljs.core.Keyword(null,"value","value",1125876963),new cljs.core.Keyword(null,"version","version",1365512266).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"onChange","onChange",2050678241),(function (p1__8127_SHARP_){return new cljs.core.Keyword(null,"on-change-version","on-change-version",822058203).cljs$core$IFn$_invoke$arity$1(props).call(null,p1__8127_SHARP_.target.value);
})], null),cljs.core.map.call(null,(function (p1__8128_SHARP_){return quiescent.dom.option.call(null,cljs.core.PersistentArrayMap.EMPTY,p1__8128_SHARP_);
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
clojure.walk.keywordize_keys = (function keywordize_keys(m){var f = (function (p__18881){var vec__18882 = p__18881;var k = cljs.core.nth.call(null,vec__18882,0,null);var v = cljs.core.nth.call(null,vec__18882,1,null);if(typeof k === 'string')
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
clojure.walk.stringify_keys = (function stringify_keys(m){var f = (function (p__18885){var vec__18886 = p__18885;var k = cljs.core.nth.call(null,vec__18886,0,null);var v = cljs.core.nth.call(null,vec__18886,1,null);if((k instanceof cljs.core.Keyword))
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
lt.plugins.elm_light.utils.find_symbol = (function find_symbol(ed,pos){var curr_tok = lt.objs.editor.__GT_token.call(null,ed,pos);var G__18919 = new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(curr_tok);if(cljs.core._EQ_.call(null,"builtin",G__18919))
{return [cljs.core.str(find_symbol.call(null,ed,cljs.core.assoc.call(null,pos,new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(curr_tok)))),cljs.core.str(new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(curr_tok))].join('');
} else
{if(cljs.core._EQ_.call(null,"variable-3",G__18919))
{return [cljs.core.str(find_symbol.call(null,ed,cljs.core.assoc.call(null,pos,new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(curr_tok)))),cljs.core.str(new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(curr_tok))].join('');
} else
{if(cljs.core._EQ_.call(null,"variable-2",G__18919))
{return [cljs.core.str(find_symbol.call(null,ed,cljs.core.assoc.call(null,pos,new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(curr_tok)))),cljs.core.str(new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(curr_tok))].join('');
} else
{if(cljs.core._EQ_.call(null,"variable",G__18919))
{return [cljs.core.str(find_symbol.call(null,ed,cljs.core.assoc.call(null,pos,new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(curr_tok)))),cljs.core.str(new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(curr_tok))].join('');
} else
{if(cljs.core._EQ_.call(null,"qualifier",G__18919))
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
return (function (p__18926){var vec__18927 = p__18926;var _ = cljs.core.nth.call(null,vec__18927,0,null);var vs = cljs.core.nth.call(null,vec__18927,1,null);return cljs.core.apply.call(null,cljs.core.merge,vs);
});})(pkg_json,deps_json))
,cljs.core.group_by.call(null,new cljs.core.Keyword(null,"package","package",4501809080),cljs.core.concat.call(null,cljs.core.mapv.call(null,((function (pkg_json,deps_json){
return (function (p__18928){var vec__18929 = p__18928;var k = cljs.core.nth.call(null,vec__18929,0,null);var v = cljs.core.nth.call(null,vec__18929,1,null);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"package","package",4501809080),lt.plugins.elm_light.utils.nskw__GT_name.call(null,k),new cljs.core.Keyword(null,"exact","exact",1110851185),v], null);
});})(pkg_json,deps_json))
,lt.plugins.elm_light.utils.parse_json_file.call(null,deps_json)),cljs.core.mapv.call(null,((function (pkg_json,deps_json){
return (function (p__18930){var vec__18931 = p__18930;var k = cljs.core.nth.call(null,vec__18931,0,null);var v = cljs.core.nth.call(null,vec__18931,1,null);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"package","package",4501809080),lt.plugins.elm_light.utils.nskw__GT_name.call(null,k),new cljs.core.Keyword(null,"range","range",1122184367),v], null);
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
lt.plugins.elm_light.graph.find_package_by_name = (function find_package_by_name(this$,name){return cljs.core.some.call(null,(function (p1__11994_SHARP_){if(cljs.core._EQ_.call(null,lt.plugins.elm_light.graph.lower.call(null,new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(p1__11994_SHARP_)),lt.plugins.elm_light.graph.lower.call(null,name)))
{return p1__11994_SHARP_;
} else
{return null;
}
}),new cljs.core.Keyword(null,"all-packages","all-packages",1123981067).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
});
lt.plugins.elm_light.graph.dependency_graph_ui = (function dependency_graph_ui(this$){var e__6292__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.graph","div.graph",2030351651),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dependency-graph","div.dependency-graph",3039800187),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg:svg","svg:svg",3472817088),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",1127031096),"650",new cljs.core.Keyword(null,"height","height",4087841945),"680"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg:g","svg:g",1123725379),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",2066570974),"translate(20,20)"], null)], null)], null)], null)], null));var seq__12001_12052 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__12002_12053 = null;var count__12003_12054 = 0;var i__12004_12055 = 0;while(true){
if((i__12004_12055 < count__12003_12054))
{var vec__12005_12056 = cljs.core._nth.call(null,chunk__12002_12053,i__12004_12055);var ev__6293__auto___12057 = cljs.core.nth.call(null,vec__12005_12056,0,null);var func__6294__auto___12058 = cljs.core.nth.call(null,vec__12005_12056,1,null);lt.util.dom.on.call(null,e__6292__auto__,ev__6293__auto___12057,func__6294__auto___12058);
{
var G__12059 = seq__12001_12052;
var G__12060 = chunk__12002_12053;
var G__12061 = count__12003_12054;
var G__12062 = (i__12004_12055 + 1);
seq__12001_12052 = G__12059;
chunk__12002_12053 = G__12060;
count__12003_12054 = G__12061;
i__12004_12055 = G__12062;
continue;
}
} else
{var temp__4092__auto___12063 = cljs.core.seq.call(null,seq__12001_12052);if(temp__4092__auto___12063)
{var seq__12001_12064__$1 = temp__4092__auto___12063;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12001_12064__$1))
{var c__5633__auto___12065 = cljs.core.chunk_first.call(null,seq__12001_12064__$1);{
var G__12066 = cljs.core.chunk_rest.call(null,seq__12001_12064__$1);
var G__12067 = c__5633__auto___12065;
var G__12068 = cljs.core.count.call(null,c__5633__auto___12065);
var G__12069 = 0;
seq__12001_12052 = G__12066;
chunk__12002_12053 = G__12067;
count__12003_12054 = G__12068;
i__12004_12055 = G__12069;
continue;
}
} else
{var vec__12006_12070 = cljs.core.first.call(null,seq__12001_12064__$1);var ev__6293__auto___12071 = cljs.core.nth.call(null,vec__12006_12070,0,null);var func__6294__auto___12072 = cljs.core.nth.call(null,vec__12006_12070,1,null);lt.util.dom.on.call(null,e__6292__auto__,ev__6293__auto___12071,func__6294__auto___12072);
{
var G__12073 = cljs.core.next.call(null,seq__12001_12064__$1);
var G__12074 = null;
var G__12075 = 0;
var G__12076 = 0;
seq__12001_12052 = G__12073;
chunk__12002_12053 = G__12074;
count__12003_12054 = G__12075;
i__12004_12055 = G__12076;
continue;
}
}
} else
{}
}
break;
}
return e__6292__auto__;
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.graph","dependency-graph","lt.plugins.elm-light.graph/dependency-graph",2371711049),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elm.graph.dependency","elm.graph.dependency",658564005)], null),new cljs.core.Keyword(null,"name","name",1017277949),"Dependency graph",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){lt.plugins.elm_light.utils.fetch_all_packages.call(null,(function (p1__12007_SHARP_){return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"all-packages","all-packages",1123981067),p1__12007_SHARP_], null));
}));
return lt.plugins.elm_light.graph.dependency_graph_ui.call(null,this$);
}));
lt.plugins.elm_light.graph.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___12077 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___12077))
{var ts_12078 = temp__4092__auto___12077;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_12078))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_12078);
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
lt.plugins.elm_light.graph.node_label = (function node_label(x){return {"label": [cljs.core.str("<div class='graph-label"),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"version","version",1365512266).cljs$core$IFn$_invoke$arity$1(x))?"'":" error'")),cljs.core.str(" title='"),cljs.core.str((function (){var or__4885__auto__ = new cljs.core.Keyword(null,"summary","summary",3451231000).cljs$core$IFn$_invoke$arity$1(x);if(cljs.core.truth_(or__4885__auto__))
{return or__4885__auto__;
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
lt.plugins.elm_light.graph.create_graph = (function create_graph(data){var g = (new lt.plugins.elm_light.graph.dagreD3.graphlib.Graph()).setGraph({});var seq__12016_12079 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"nodes","nodes",1118897699).cljs$core$IFn$_invoke$arity$1(data));var chunk__12017_12080 = null;var count__12018_12081 = 0;var i__12019_12082 = 0;while(true){
if((i__12019_12082 < count__12018_12081))
{var x_12083 = cljs.core._nth.call(null,chunk__12017_12080,i__12019_12082);g.setNode(lt.plugins.elm_light.graph.dep_id.call(null,x_12083),lt.plugins.elm_light.graph.node_label.call(null,x_12083));
{
var G__12084 = seq__12016_12079;
var G__12085 = chunk__12017_12080;
var G__12086 = count__12018_12081;
var G__12087 = (i__12019_12082 + 1);
seq__12016_12079 = G__12084;
chunk__12017_12080 = G__12085;
count__12018_12081 = G__12086;
i__12019_12082 = G__12087;
continue;
}
} else
{var temp__4092__auto___12088 = cljs.core.seq.call(null,seq__12016_12079);if(temp__4092__auto___12088)
{var seq__12016_12089__$1 = temp__4092__auto___12088;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12016_12089__$1))
{var c__5633__auto___12090 = cljs.core.chunk_first.call(null,seq__12016_12089__$1);{
var G__12091 = cljs.core.chunk_rest.call(null,seq__12016_12089__$1);
var G__12092 = c__5633__auto___12090;
var G__12093 = cljs.core.count.call(null,c__5633__auto___12090);
var G__12094 = 0;
seq__12016_12079 = G__12091;
chunk__12017_12080 = G__12092;
count__12018_12081 = G__12093;
i__12019_12082 = G__12094;
continue;
}
} else
{var x_12095 = cljs.core.first.call(null,seq__12016_12089__$1);g.setNode(lt.plugins.elm_light.graph.dep_id.call(null,x_12095),lt.plugins.elm_light.graph.node_label.call(null,x_12095));
{
var G__12096 = cljs.core.next.call(null,seq__12016_12089__$1);
var G__12097 = null;
var G__12098 = 0;
var G__12099 = 0;
seq__12016_12079 = G__12096;
chunk__12017_12080 = G__12097;
count__12018_12081 = G__12098;
i__12019_12082 = G__12099;
continue;
}
}
} else
{}
}
break;
}
var seq__12020_12100 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"edges","edges",1110261192).cljs$core$IFn$_invoke$arity$1(data));var chunk__12021_12101 = null;var count__12022_12102 = 0;var i__12023_12103 = 0;while(true){
if((i__12023_12103 < count__12022_12102))
{var x_12104 = cljs.core._nth.call(null,chunk__12021_12101,i__12023_12103);g.setEdge(new cljs.core.Keyword(null,"a","a",1013904339).cljs$core$IFn$_invoke$arity$1(x_12104),new cljs.core.Keyword(null,"b","b",1013904340).cljs$core$IFn$_invoke$arity$1(x_12104),{"style": (cljs.core.truth_(new cljs.core.Keyword(null,"transitive","transitive",3584713111).cljs$core$IFn$_invoke$arity$1(x_12104))?"stroke-dasharray: 5, 5;":null), "label": new cljs.core.Keyword(null,"label","label",1116631654).cljs$core$IFn$_invoke$arity$1(x_12104)});
{
var G__12105 = seq__12020_12100;
var G__12106 = chunk__12021_12101;
var G__12107 = count__12022_12102;
var G__12108 = (i__12023_12103 + 1);
seq__12020_12100 = G__12105;
chunk__12021_12101 = G__12106;
count__12022_12102 = G__12107;
i__12023_12103 = G__12108;
continue;
}
} else
{var temp__4092__auto___12109 = cljs.core.seq.call(null,seq__12020_12100);if(temp__4092__auto___12109)
{var seq__12020_12110__$1 = temp__4092__auto___12109;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12020_12110__$1))
{var c__5633__auto___12111 = cljs.core.chunk_first.call(null,seq__12020_12110__$1);{
var G__12112 = cljs.core.chunk_rest.call(null,seq__12020_12110__$1);
var G__12113 = c__5633__auto___12111;
var G__12114 = cljs.core.count.call(null,c__5633__auto___12111);
var G__12115 = 0;
seq__12020_12100 = G__12112;
chunk__12021_12101 = G__12113;
count__12022_12102 = G__12114;
i__12023_12103 = G__12115;
continue;
}
} else
{var x_12116 = cljs.core.first.call(null,seq__12020_12110__$1);g.setEdge(new cljs.core.Keyword(null,"a","a",1013904339).cljs$core$IFn$_invoke$arity$1(x_12116),new cljs.core.Keyword(null,"b","b",1013904340).cljs$core$IFn$_invoke$arity$1(x_12116),{"style": (cljs.core.truth_(new cljs.core.Keyword(null,"transitive","transitive",3584713111).cljs$core$IFn$_invoke$arity$1(x_12116))?"stroke-dasharray: 5, 5;":null), "label": new cljs.core.Keyword(null,"label","label",1116631654).cljs$core$IFn$_invoke$arity$1(x_12116)});
{
var G__12117 = cljs.core.next.call(null,seq__12020_12110__$1);
var G__12118 = null;
var G__12119 = 0;
var G__12120 = 0;
seq__12020_12100 = G__12117;
chunk__12021_12101 = G__12118;
count__12022_12102 = G__12119;
i__12023_12103 = G__12120;
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
}),cljs.core.map.call(null,(function (p__12028){var vec__12029 = p__12028;var k = cljs.core.nth.call(null,vec__12029,0,null);var v = cljs.core.nth.call(null,vec__12029,1,null);return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"package","package",4501809080),new cljs.core.Keyword(null,"range","range",1122184367),new cljs.core.Keyword(null,"version","version",1365512266)],[lt.plugins.elm_light.utils.nskw__GT_name.call(null,k),v,new cljs.core.Keyword(null,"version","version",1365512266).cljs$core$IFn$_invoke$arity$1(cljs.core.some.call(null,((function (vec__12029,k,v){
return (function (p1__12024_SHARP_){if(cljs.core._EQ_.call(null,lt.plugins.elm_light.utils.nskw__GT_name.call(null,k),new cljs.core.Keyword(null,"package","package",4501809080).cljs$core$IFn$_invoke$arity$1(p1__12024_SHARP_)))
{return p1__12024_SHARP_;
} else
{return null;
}
});})(vec__12029,k,v))
,new cljs.core.Keyword(null,"packages","packages",1764771935).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))))]);
}),new cljs.core.Keyword(null,"dependencies","dependencies",1517678747).cljs$core$IFn$_invoke$arity$1(pkg_json))));if(temp__4092__auto__)
{var edges = temp__4092__auto__;lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",1016980252),new cljs.core.Keyword(null,"edges","edges",1110261192)], null),((function (edges,temp__4092__auto__){
return (function (p1__12025_SHARP_){return cljs.core.concat.call(null,p1__12025_SHARP_,edges);
});})(edges,temp__4092__auto__))
);
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"elm.graph.render","elm.graph.render",2076182000));
} else
{return null;
}
});
lt.plugins.elm_light.graph.__BEH__on_get_transitives = (function __BEH__on_get_transitives(this$){var transitives = cljs.core.remove.call(null,new cljs.core.Keyword(null,"range","range",1122184367),new cljs.core.Keyword(null,"packages","packages",1764771935).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))));lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",1016980252),new cljs.core.Keyword(null,"nodes","nodes",1118897699)], null),((function (transitives){
return (function (p1__12030_SHARP_){return cljs.core.concat.call(null,p1__12030_SHARP_,transitives);
});})(transitives))
);
lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"elm.graph.render","elm.graph.render",2076182000));
var seq__12035 = cljs.core.seq.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"version","version",1365512266),new cljs.core.Keyword(null,"packages","packages",1764771935).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))));var chunk__12036 = null;var count__12037 = 0;var i__12038 = 0;while(true){
if((i__12038 < count__12037))
{var x = cljs.core._nth.call(null,chunk__12036,i__12038);lt.plugins.elm_light.graph.get_package_json.call(null,x,cljs.core.partial.call(null,lt.plugins.elm_light.graph.add_edges_for_dep,this$,x));
{
var G__12121 = seq__12035;
var G__12122 = chunk__12036;
var G__12123 = count__12037;
var G__12124 = (i__12038 + 1);
seq__12035 = G__12121;
chunk__12036 = G__12122;
count__12037 = G__12123;
i__12038 = G__12124;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12035);if(temp__4092__auto__)
{var seq__12035__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12035__$1))
{var c__5633__auto__ = cljs.core.chunk_first.call(null,seq__12035__$1);{
var G__12125 = cljs.core.chunk_rest.call(null,seq__12035__$1);
var G__12126 = c__5633__auto__;
var G__12127 = cljs.core.count.call(null,c__5633__auto__);
var G__12128 = 0;
seq__12035 = G__12125;
chunk__12036 = G__12126;
count__12037 = G__12127;
i__12038 = G__12128;
continue;
}
} else
{var x = cljs.core.first.call(null,seq__12035__$1);lt.plugins.elm_light.graph.get_package_json.call(null,x,cljs.core.partial.call(null,lt.plugins.elm_light.graph.add_edges_for_dep,this$,x));
{
var G__12129 = cljs.core.next.call(null,seq__12035__$1);
var G__12130 = null;
var G__12131 = 0;
var G__12132 = 0;
seq__12035 = G__12129;
chunk__12036 = G__12130;
count__12037 = G__12131;
i__12038 = G__12132;
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
lt.plugins.elm_light.graph.get_dependency_data = (function get_dependency_data(project_path){var pkgs = cljs.core.map.call(null,(function (p1__12040_SHARP_){return cljs.core.assoc.call(null,p1__12040_SHARP_,new cljs.core.Keyword(null,"summary","summary",3451231000),new cljs.core.Keyword(null,"summary","summary",3451231000).cljs$core$IFn$_invoke$arity$1(lt.plugins.elm_light.graph.find_package_by_name.call(null,lt.plugins.elm_light.graph.dependency_graph,new cljs.core.Keyword(null,"package","package",4501809080).cljs$core$IFn$_invoke$arity$1(p1__12040_SHARP_))));
}),cljs.core.map.call(null,(function (p1__12039_SHARP_){return clojure.set.rename_keys.call(null,p1__12039_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"exact","exact",1110851185),new cljs.core.Keyword(null,"version","version",1365512266)], null));
}),lt.plugins.elm_light.utils.get_project_deps.call(null,project_path)));var direct = cljs.core.filter.call(null,new cljs.core.Keyword(null,"range","range",1122184367),pkgs);var rootVersion = new cljs.core.Keyword(null,"version","version",1365512266).cljs$core$IFn$_invoke$arity$1(lt.plugins.elm_light.utils.parse_json_file.call(null,lt.objs.files.join.call(null,project_path,"elm-package.json")));var root = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"package","package",4501809080),lt.objs.files.basename.call(null,project_path),new cljs.core.Keyword(null,"version","version",1365512266),rootVersion,new cljs.core.Keyword(null,"shape","shape",1123304211),"ellipse"], null);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"packages","packages",1764771935),pkgs,new cljs.core.Keyword(null,"nodes","nodes",1118897699),cljs.core.conj.call(null,direct,root),new cljs.core.Keyword(null,"edges","edges",1110261192),cljs.core.map.call(null,((function (pkgs,direct,rootVersion,root){
return (function (p1__12041_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"label","label",1116631654)],[lt.plugins.elm_light.graph.dep_id.call(null,root),lt.plugins.elm_light.graph.dep_id.call(null,p1__12041_SHARP_),new cljs.core.Keyword(null,"range","range",1122184367).cljs$core$IFn$_invoke$arity$1(p1__12041_SHARP_)]);
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
return (function (p__18818){var vec__18819 = p__18818;var k = cljs.core.nth.call(null,vec__18819,0,null);var v = cljs.core.nth.call(null,vec__18819,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.elm_light.utils.nskw__GT_name.call(null,k),v], null);
});})(pkg_file))
,deps)),pkg);
});})(pkg_file))
)));
});
lt.plugins.elm_light.packages.project_wrapper = (function project_wrapper(this$){var e__6292__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.elm","div.elm",2686466363),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"project-packages-wrapper"], null),"Retrieving project package info..."], null)], null));var seq__18826_18851 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__18827_18852 = null;var count__18828_18853 = 0;var i__18829_18854 = 0;while(true){
if((i__18829_18854 < count__18828_18853))
{var vec__18830_18855 = cljs.core._nth.call(null,chunk__18827_18852,i__18829_18854);var ev__6293__auto___18856 = cljs.core.nth.call(null,vec__18830_18855,0,null);var func__6294__auto___18857 = cljs.core.nth.call(null,vec__18830_18855,1,null);lt.util.dom.on.call(null,e__6292__auto__,ev__6293__auto___18856,func__6294__auto___18857);
{
var G__18858 = seq__18826_18851;
var G__18859 = chunk__18827_18852;
var G__18860 = count__18828_18853;
var G__18861 = (i__18829_18854 + 1);
seq__18826_18851 = G__18858;
chunk__18827_18852 = G__18859;
count__18828_18853 = G__18860;
i__18829_18854 = G__18861;
continue;
}
} else
{var temp__4092__auto___18862 = cljs.core.seq.call(null,seq__18826_18851);if(temp__4092__auto___18862)
{var seq__18826_18863__$1 = temp__4092__auto___18862;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18826_18863__$1))
{var c__5633__auto___18864 = cljs.core.chunk_first.call(null,seq__18826_18863__$1);{
var G__18865 = cljs.core.chunk_rest.call(null,seq__18826_18863__$1);
var G__18866 = c__5633__auto___18864;
var G__18867 = cljs.core.count.call(null,c__5633__auto___18864);
var G__18868 = 0;
seq__18826_18851 = G__18865;
chunk__18827_18852 = G__18866;
count__18828_18853 = G__18867;
i__18829_18854 = G__18868;
continue;
}
} else
{var vec__18831_18869 = cljs.core.first.call(null,seq__18826_18863__$1);var ev__6293__auto___18870 = cljs.core.nth.call(null,vec__18831_18869,0,null);var func__6294__auto___18871 = cljs.core.nth.call(null,vec__18831_18869,1,null);lt.util.dom.on.call(null,e__6292__auto__,ev__6293__auto___18870,func__6294__auto___18871);
{
var G__18872 = cljs.core.next.call(null,seq__18826_18863__$1);
var G__18873 = null;
var G__18874 = 0;
var G__18875 = 0;
seq__18826_18851 = G__18872;
chunk__18827_18852 = G__18873;
count__18828_18853 = G__18874;
i__18829_18854 = G__18875;
continue;
}
}
} else
{}
}
break;
}
return e__6292__auto__;
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.packages","elm-packages","lt.plugins.elm-light.packages/elm-packages",4552372902),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elm.packages","elm.packages",3931311271),null], null), null),new cljs.core.Keyword(null,"label","label",1116631654),"Elm project packages",new cljs.core.Keyword(null,"name","name",1017277949),"Elm project packages",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){lt.plugins.elm_light.utils.fetch_all_packages.call(null,(function (p1__18832_SHARP_){return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"all-packages","all-packages",1123981067),p1__18832_SHARP_], null));
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
lt.plugins.elm_light.packages.idx_active = (function idx_active(items){return cljs.core.first.call(null,cljs.core.keep_indexed.call(null,(function (p1__18834_SHARP_,p2__18833_SHARP_){if(cljs.core.truth_(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(p2__18833_SHARP_)))
{return p1__18834_SHARP_;
} else
{return null;
}
}),items));
});
lt.plugins.elm_light.packages.move_down = (function move_down(items){if(cljs.core.empty_QMARK_.call(null,items))
{return null;
} else
{return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,items,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.elm_light.packages.idx_active.call(null,items),new cljs.core.Keyword(null,"active","active",3885920888)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__5199__auto__ = (cljs.core.count.call(null,items) - 1);var y__5200__auto__ = (lt.plugins.elm_light.packages.idx_active.call(null,items) + 1);return ((x__5199__auto__ < y__5200__auto__) ? x__5199__auto__ : y__5200__auto__);
})(),new cljs.core.Keyword(null,"active","active",3885920888)], null),true);
}
});
lt.plugins.elm_light.packages.move_up = (function move_up(items){if(cljs.core.empty_QMARK_.call(null,items))
{return null;
} else
{return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,items,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.elm_light.packages.idx_active.call(null,items),new cljs.core.Keyword(null,"active","active",3885920888)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__5192__auto__ = 0;var y__5193__auto__ = (lt.plugins.elm_light.packages.idx_active.call(null,items) - 1);return ((x__5192__auto__ > y__5193__auto__) ? x__5192__auto__ : y__5193__auto__);
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
lt.plugins.elm_light.packages.on_pkg_sel = (function on_pkg_sel(){var items_18876 = new cljs.core.Keyword(null,"ac-packages","ac-packages",1548109226).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.elm_light.packages.elm_packages));var temp__4090__auto___18877 = lt.plugins.elm_light.packages.idx_active.call(null,items_18876);if(cljs.core.truth_(temp__4090__auto___18877))
{var idx_18878 = temp__4090__auto___18877;lt.object.assoc_in_BANG_.call(null,lt.plugins.elm_light.packages.elm_packages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ac-versions","ac-versions",3107155800)], null),new cljs.core.Keyword(null,"versions","versions",3323818509).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,items_18876,idx_18878)));
lt.object.assoc_in_BANG_.call(null,lt.plugins.elm_light.packages.elm_packages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ac-version","ac-version",2051259807)], null),cljs.core.first.call(null,new cljs.core.Keyword(null,"versions","versions",3323818509).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,items_18876,idx_18878))));
lt.object.assoc_in_BANG_.call(null,lt.plugins.elm_light.packages.elm_packages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ac-package","ac-package",892589325)], null),new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,items_18876,idx_18878)));
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
return (function (p1__18835_SHARP_){if(cljs.core._EQ_.call(null,p1__18835_SHARP_,0))
{lt.objs.notifos.done_working.call(null);
} else
{lt.objs.notifos.set_msg_BANG_.call(null,"Error installing elm package",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),"error",new cljs.core.Keyword(null,"timeout","timeout",3994960083),5000], null));
}
lt.object.raise.call(null,lt.plugins.elm_light.packages.elm_packages,new cljs.core.Keyword(null,"elm.show.project.packages","elm.show.project.packages",3385102109),new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.elm_light.packages.elm_packages)));
return lt.object.raise.call(null,lt.plugins.elm_light.graph.dependency_graph,new cljs.core.Keyword(null,"elm.graph.show-dependencies","elm.graph.show-dependencies",3464547203),new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.elm_light.packages.elm_packages)),false);
});})(proc,args))
);
proc.stdout.on("data",((function (proc,args){
return (function (p1__18836_SHARP_){return lt.objs.notifos.msg_STAR_.call(null,[cljs.core.str("Package install: "),cljs.core.str(p1__18836_SHARP_)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"timeout","timeout",3994960083),5000], null));
});})(proc,args))
);
return proc.stderr.on("data",((function (proc,args){
return (function (p1__18837_SHARP_){return lt.objs.console.error.call(null,[cljs.core.str(p1__18837_SHARP_)].join(''));
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
lt.plugins.elm_light.packages.on_pkg_browse = (function on_pkg_browse(pkg,version){var url = [cljs.core.str("http://package.elm-lang.org/packages/"),cljs.core.str(pkg),cljs.core.str("/"),cljs.core.str(version)].join('');var b = (function (){var or__4885__auto__ = cljs.core.first.call(null,lt.object.by_tag.call(null,new cljs.core.Keyword(null,"browser","browser",1164844698)));if(cljs.core.truth_(or__4885__auto__))
{return or__4885__auto__;
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
lt.plugins.elm_light.packages.PackageRow = quiescent.component.call(null,(function (p__18838){var map__18839 = p__18838;var map__18839__$1 = ((cljs.core.seq_QMARK_.call(null,map__18839))?cljs.core.apply.call(null,cljs.core.hash_map,map__18839):map__18839);var on_browse = cljs.core.get.call(null,map__18839__$1,new cljs.core.Keyword(null,"on-browse","on-browse",587885994));var on_remove = cljs.core.get.call(null,map__18839__$1,new cljs.core.Keyword(null,"on-remove","on-remove",1033879460));var exact = cljs.core.get.call(null,map__18839__$1,new cljs.core.Keyword(null,"exact","exact",1110851185));var range = cljs.core.get.call(null,map__18839__$1,new cljs.core.Keyword(null,"range","range",1122184367));var package$ = cljs.core.get.call(null,map__18839__$1,new cljs.core.Keyword(null,"package","package",4501809080));return quiescent.dom.tr.call(null,cljs.core.PersistentArrayMap.EMPTY,quiescent.dom.td.call(null,cljs.core.PersistentArrayMap.EMPTY,(cljs.core.truth_((function (){var and__4873__auto__ = package$;if(cljs.core.truth_(and__4873__auto__))
{return exact;
} else
{return and__4873__auto__;
}
})())?quiescent.dom.span.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",1004015509),"link",new cljs.core.Keyword(null,"onClick","onClick",3956969051),((function (map__18839,map__18839__$1,on_browse,on_remove,exact,range,package$){
return (function (){return on_browse.call(null,package$,exact);
});})(map__18839,map__18839__$1,on_browse,on_remove,exact,range,package$))
], null),package$):package$)),quiescent.dom.td.call(null,cljs.core.PersistentArrayMap.EMPTY,range),quiescent.dom.td.call(null,cljs.core.PersistentArrayMap.EMPTY,exact),quiescent.dom.td.call(null,cljs.core.PersistentArrayMap.EMPTY,(cljs.core.truth_(range)?quiescent.dom.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",3956969051),((function (map__18839,map__18839__$1,on_browse,on_remove,exact,range,package$){
return (function (){return on_remove.call(null,package$);
});})(map__18839,map__18839__$1,on_browse,on_remove,exact,range,package$))
], null),"remove"):null)));
}));
/**
* 
*/
lt.plugins.elm_light.packages.PackageTable = quiescent.component.call(null,(function (props){return quiescent.dom.table.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",1004015509),"package-table"], null),quiescent.dom.thead.call(null,cljs.core.PersistentArrayMap.EMPTY,quiescent.dom.tr.call(null,cljs.core.PersistentArrayMap.EMPTY,quiescent.dom.th.call(null,cljs.core.PersistentArrayMap.EMPTY,"Package"),quiescent.dom.th.call(null,cljs.core.PersistentArrayMap.EMPTY,"Range"),quiescent.dom.th.call(null,cljs.core.PersistentArrayMap.EMPTY,"Exact"),quiescent.dom.th.call(null,cljs.core.PersistentArrayMap.EMPTY,""))),cljs.core.apply.call(null,quiescent.dom.tbody,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__18840_SHARP_){return lt.plugins.elm_light.packages.PackageRow.call(null,cljs.core.assoc.call(null,p1__18840_SHARP_,new cljs.core.Keyword(null,"on-remove","on-remove",1033879460),new cljs.core.Keyword(null,"on-remove","on-remove",1033879460).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"on-browse","on-browse",587885994),new cljs.core.Keyword(null,"on-browse","on-browse",587885994).cljs$core$IFn$_invoke$arity$1(props)));
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
lt.plugins.elm_light.inline_doc.doc_ui_header = (function doc_ui_header(doc){var e__6292__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.inline-doc","div.inline-doc",3323486451),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(doc)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",1013907516),new cljs.core.Keyword(null,"ns","ns",1013907767).cljs$core$IFn$_invoke$arity$1(doc)], null),(cljs.core.truth_((function (){var and__4873__auto__ = new cljs.core.Keyword(null,"args","args",1016906831).cljs$core$IFn$_invoke$arity$1(doc);if(cljs.core.truth_(and__4873__auto__))
{return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"args","args",1016906831).cljs$core$IFn$_invoke$arity$1(doc),"nil");
} else
{return and__4873__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",1013907517),new cljs.core.Keyword(null,"args","args",1016906831).cljs$core$IFn$_invoke$arity$1(doc)], null):null)], null));var seq__18507_18539 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__18508_18540 = null;var count__18509_18541 = 0;var i__18510_18542 = 0;while(true){
if((i__18510_18542 < count__18509_18541))
{var vec__18511_18543 = cljs.core._nth.call(null,chunk__18508_18540,i__18510_18542);var ev__6293__auto___18544 = cljs.core.nth.call(null,vec__18511_18543,0,null);var func__6294__auto___18545 = cljs.core.nth.call(null,vec__18511_18543,1,null);lt.util.dom.on.call(null,e__6292__auto__,ev__6293__auto___18544,func__6294__auto___18545);
{
var G__18546 = seq__18507_18539;
var G__18547 = chunk__18508_18540;
var G__18548 = count__18509_18541;
var G__18549 = (i__18510_18542 + 1);
seq__18507_18539 = G__18546;
chunk__18508_18540 = G__18547;
count__18509_18541 = G__18548;
i__18510_18542 = G__18549;
continue;
}
} else
{var temp__4092__auto___18550 = cljs.core.seq.call(null,seq__18507_18539);if(temp__4092__auto___18550)
{var seq__18507_18551__$1 = temp__4092__auto___18550;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18507_18551__$1))
{var c__5633__auto___18552 = cljs.core.chunk_first.call(null,seq__18507_18551__$1);{
var G__18553 = cljs.core.chunk_rest.call(null,seq__18507_18551__$1);
var G__18554 = c__5633__auto___18552;
var G__18555 = cljs.core.count.call(null,c__5633__auto___18552);
var G__18556 = 0;
seq__18507_18539 = G__18553;
chunk__18508_18540 = G__18554;
count__18509_18541 = G__18555;
i__18510_18542 = G__18556;
continue;
}
} else
{var vec__18512_18557 = cljs.core.first.call(null,seq__18507_18551__$1);var ev__6293__auto___18558 = cljs.core.nth.call(null,vec__18512_18557,0,null);var func__6294__auto___18559 = cljs.core.nth.call(null,vec__18512_18557,1,null);lt.util.dom.on.call(null,e__6292__auto__,ev__6293__auto___18558,func__6294__auto___18559);
{
var G__18560 = cljs.core.next.call(null,seq__18507_18551__$1);
var G__18561 = null;
var G__18562 = 0;
var G__18563 = 0;
seq__18507_18539 = G__18560;
chunk__18508_18540 = G__18561;
count__18509_18541 = G__18562;
i__18510_18542 = G__18563;
continue;
}
}
} else
{}
}
break;
}
return e__6292__auto__;
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
lt.plugins.elm_light.inline_doc.highlight_code = (function highlight_code(container_elem){var seq__18517 = cljs.core.seq.call(null,lt.util.dom.$$.call(null,"pre > code",container_elem));var chunk__18518 = null;var count__18519 = 0;var i__18520 = 0;while(true){
if((i__18520 < count__18519))
{var code = cljs.core._nth.call(null,chunk__18518,i__18520);hljs.highlightBlock(code);
{
var G__18564 = seq__18517;
var G__18565 = chunk__18518;
var G__18566 = count__18519;
var G__18567 = (i__18520 + 1);
seq__18517 = G__18564;
chunk__18518 = G__18565;
count__18519 = G__18566;
i__18520 = G__18567;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__18517);if(temp__4092__auto__)
{var seq__18517__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18517__$1))
{var c__5633__auto__ = cljs.core.chunk_first.call(null,seq__18517__$1);{
var G__18568 = cljs.core.chunk_rest.call(null,seq__18517__$1);
var G__18569 = c__5633__auto__;
var G__18570 = cljs.core.count.call(null,c__5633__auto__);
var G__18571 = 0;
seq__18517 = G__18568;
chunk__18518 = G__18569;
count__18519 = G__18570;
i__18520 = G__18571;
continue;
}
} else
{var code = cljs.core.first.call(null,seq__18517__$1);hljs.highlightBlock(code);
{
var G__18572 = cljs.core.next.call(null,seq__18517__$1);
var G__18573 = null;
var G__18574 = 0;
var G__18575 = 0;
seq__18517 = G__18572;
chunk__18518 = G__18573;
count__18519 = G__18574;
i__18520 = G__18575;
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
lt.plugins.elm_light.inline_doc.handle_url_click = (function handle_url_click(url){var b = (function (){var or__4885__auto__ = cljs.core.first.call(null,lt.object.by_tag.call(null,new cljs.core.Keyword(null,"browser","browser",1164844698)));if(cljs.core.truth_(or__4885__auto__))
{return or__4885__auto__;
} else
{return lt.objs.browser.add.call(null);
}
})();return lt.object.raise.call(null,b,new cljs.core.Keyword(null,"navigate!","navigate!",1766726722),url);
});
lt.plugins.elm_light.inline_doc.add_click_handlers = (function add_click_handlers(elem){var seq__18525 = cljs.core.seq.call(null,lt.util.dom.$$.call(null,"a",elem));var chunk__18526 = null;var count__18527 = 0;var i__18528 = 0;while(true){
if((i__18528 < count__18527))
{var link = cljs.core._nth.call(null,chunk__18526,i__18528);lt.util.dom.on.call(null,link,"click",((function (seq__18525,chunk__18526,count__18527,i__18528,link){
return (function (){return lt.plugins.elm_light.inline_doc.handle_url_click.call(null,lt.util.dom.attr.call(null,link,new cljs.core.Keyword(null,"href","href",1017115293)));
});})(seq__18525,chunk__18526,count__18527,i__18528,link))
);
{
var G__18576 = seq__18525;
var G__18577 = chunk__18526;
var G__18578 = count__18527;
var G__18579 = (i__18528 + 1);
seq__18525 = G__18576;
chunk__18526 = G__18577;
count__18527 = G__18578;
i__18528 = G__18579;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__18525);if(temp__4092__auto__)
{var seq__18525__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18525__$1))
{var c__5633__auto__ = cljs.core.chunk_first.call(null,seq__18525__$1);{
var G__18580 = cljs.core.chunk_rest.call(null,seq__18525__$1);
var G__18581 = c__5633__auto__;
var G__18582 = cljs.core.count.call(null,c__5633__auto__);
var G__18583 = 0;
seq__18525 = G__18580;
chunk__18526 = G__18581;
count__18527 = G__18582;
i__18528 = G__18583;
continue;
}
} else
{var link = cljs.core.first.call(null,seq__18525__$1);lt.util.dom.on.call(null,link,"click",((function (seq__18525,chunk__18526,count__18527,i__18528,link,seq__18525__$1,temp__4092__auto__){
return (function (){return lt.plugins.elm_light.inline_doc.handle_url_click.call(null,lt.util.dom.attr.call(null,link,new cljs.core.Keyword(null,"href","href",1017115293)));
});})(seq__18525,chunk__18526,count__18527,i__18528,link,seq__18525__$1,temp__4092__auto__))
);
{
var G__18584 = cljs.core.next.call(null,seq__18525__$1);
var G__18585 = null;
var G__18586 = 0;
var G__18587 = 0;
seq__18525 = G__18584;
chunk__18526 = G__18585;
count__18527 = G__18586;
i__18528 = G__18587;
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
lt.plugins.elm_light.autocompleter.core.default_options = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"async","async",1107031534),true,new cljs.core.Keyword(null,"completeSingle","completeSingle",2100037203),false,new cljs.core.Keyword(null,"supportsSelection","supportsSelection",3475218138),true,new cljs.core.Keyword(null,"closeOnUnfocus","closeOnUnfocus",2215570266),true,new cljs.core.Keyword(null,"customKeys","customKeys",3726901367),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"Up","Up",1013906989),(function (p1__18933_SHARP_,p2__18932_SHARP_){return p2__18932_SHARP_.moveFocus.call(null,-1);
}),new cljs.core.Keyword(null,"Down","Down",1016040500),(function (p1__18935_SHARP_,p2__18934_SHARP_){return p2__18934_SHARP_.moveFocus.call(null,1);
}),new cljs.core.Keyword(null,"Enter","Enter",1081018922),(function (a,b){return b.pick();
}),new cljs.core.Keyword(null,"Tab","Tab",1013988071),(function (a,b){return b.pick();
}),new cljs.core.Keyword(null,"Esc","Esc",1013974215),(function (p1__18937_SHARP_,p2__18936_SHARP_){return p2__18936_SHARP_.close.call(null);
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
{return cljs.core.clj__GT_js.call(null,(function (p1__18939_SHARP_){var fst = cljs.core.first.call(null,new cljs.core.Keyword(null,"list","list",1017226256).cljs$core$IFn$_invoke$arity$1(p1__18939_SHARP_));return cljs.core.assoc.call(null,p1__18939_SHARP_,new cljs.core.Keyword(null,"from","from",1017056028),new cljs.core.Keyword(null,"from","from",1017056028).cljs$core$IFn$_invoke$arity$1(fst),new cljs.core.Keyword(null,"to","to",1013907949),new cljs.core.Keyword(null,"to","to",1013907949).cljs$core$IFn$_invoke$arity$1(fst));
}).call(null,cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"list","list",1017226256)],[cljs.core.take.call(null,25,cljs.core.filter.call(null,(function (p1__18938_SHARP_){return (new cljs.core.Keyword(null,"displayText","displayText",2728236161).cljs$core$IFn$_invoke$arity$1(p1__18938_SHARP_).length < 1000);
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
lt.plugins.elm_light.autocompleter.core.listen_for_hint_results = (function listen_for_hint_results(ed,channels,hinter_ch){var t = cljs.core.async.timeout.call(null,500);var c__13459__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13459__auto__,t){
return (function (){var f__13460__auto__ = (function (){var switch__13389__auto__ = ((function (c__13459__auto__,t){
return (function (state_19025){var state_val_19026 = (state_19025[1]);if((state_val_19026 === 1))
{var inst_18994 = cljs.core.conj.call(null,channels,t);var inst_18995 = cljs.core.PersistentVector.EMPTY;var inst_18996 = inst_18994;var state_19025__$1 = (function (){var statearr_19027 = state_19025;(statearr_19027[7] = inst_18996);
(statearr_19027[8] = inst_18995);
return statearr_19027;
})();var statearr_19028_19086 = state_19025__$1;(statearr_19028_19086[2] = null);
(statearr_19028_19086[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19026 === 2))
{var inst_18996 = (state_19025[7]);var inst_18998 = cljs.core.count.call(null,inst_18996);var inst_18999 = cljs.core._EQ_.call(null,1,inst_18998);var state_19025__$1 = state_19025;if(inst_18999)
{var statearr_19029_19087 = state_19025__$1;(statearr_19029_19087[1] = 4);
} else
{var statearr_19030_19088 = state_19025__$1;(statearr_19030_19088[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19026 === 3))
{var inst_19023 = (state_19025[2]);var state_19025__$1 = state_19025;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19025__$1,inst_19023);
} else
{if((state_val_19026 === 4))
{var inst_18995 = (state_19025[8]);var inst_19001 = cljs.core.async.put_BANG_.call(null,hinter_ch,inst_18995);var state_19025__$1 = state_19025;var statearr_19031_19089 = state_19025__$1;(statearr_19031_19089[2] = inst_19001);
(statearr_19031_19089[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19026 === 5))
{var inst_18996 = (state_19025[7]);var state_19025__$1 = state_19025;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_19025__$1,7,inst_18996);
} else
{if((state_val_19026 === 6))
{var inst_19021 = (state_19025[2]);var state_19025__$1 = state_19025;var statearr_19032_19090 = state_19025__$1;(statearr_19032_19090[2] = inst_19021);
(statearr_19032_19090[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19026 === 7))
{var inst_19007 = (state_19025[9]);var inst_19005 = (state_19025[2]);var inst_19006 = cljs.core.nth.call(null,inst_19005,0,null);var inst_19007__$1 = cljs.core.nth.call(null,inst_19005,1,null);var inst_19008 = (inst_19007__$1 === t);var state_19025__$1 = (function (){var statearr_19033 = state_19025;(statearr_19033[9] = inst_19007__$1);
(statearr_19033[10] = inst_19006);
return statearr_19033;
})();if(cljs.core.truth_(inst_19008))
{var statearr_19034_19091 = state_19025__$1;(statearr_19034_19091[1] = 8);
} else
{var statearr_19035_19092 = state_19025__$1;(statearr_19035_19092[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19026 === 8))
{var inst_18995 = (state_19025[8]);var inst_19010 = cljs.core.println.call(null,"WARNING: Timeout waiting for hinter provider channel results");var inst_19011 = cljs.core.async.put_BANG_.call(null,hinter_ch,inst_18995);var state_19025__$1 = (function (){var statearr_19036 = state_19025;(statearr_19036[11] = inst_19010);
return statearr_19036;
})();var statearr_19037_19093 = state_19025__$1;(statearr_19037_19093[2] = inst_19011);
(statearr_19037_19093[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19026 === 9))
{var inst_18996 = (state_19025[7]);var inst_19007 = (state_19025[9]);var inst_18995 = (state_19025[8]);var inst_19006 = (state_19025[10]);var inst_19013 = cljs.core.into.call(null,inst_18995,inst_19006);var inst_19014 = [inst_19007];var inst_19015 = cljs.core.PersistentHashSet.fromArray.call(null,inst_19014,true);var inst_19016 = cljs.core.remove.call(null,inst_19015,inst_18996);var inst_18995__$1 = inst_19013;var inst_18996__$1 = inst_19016;var state_19025__$1 = (function (){var statearr_19038 = state_19025;(statearr_19038[7] = inst_18996__$1);
(statearr_19038[8] = inst_18995__$1);
return statearr_19038;
})();var statearr_19039_19094 = state_19025__$1;(statearr_19039_19094[2] = null);
(statearr_19039_19094[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19026 === 10))
{var inst_19019 = (state_19025[2]);var state_19025__$1 = state_19025;var statearr_19040_19095 = state_19025__$1;(statearr_19040_19095[2] = inst_19019);
(statearr_19040_19095[1] = 6);
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
});})(c__13459__auto__,t))
;return ((function (switch__13389__auto__,c__13459__auto__,t){
return (function() {
var state_machine__13390__auto__ = null;
var state_machine__13390__auto____0 = (function (){var statearr_19044 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19044[0] = state_machine__13390__auto__);
(statearr_19044[1] = 1);
return statearr_19044;
});
var state_machine__13390__auto____1 = (function (state_19025){while(true){
var ret_value__13391__auto__ = (function (){try{while(true){
var result__13392__auto__ = switch__13389__auto__.call(null,state_19025);if(cljs.core.keyword_identical_QMARK_.call(null,result__13392__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13392__auto__;
}
break;
}
}catch (e19045){if((e19045 instanceof Object))
{var ex__13393__auto__ = e19045;var statearr_19046_19096 = state_19025;(statearr_19046_19096[5] = ex__13393__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19025);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19045;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13391__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19097 = state_19025;
state_19025 = G__19097;
continue;
}
} else
{return ret_value__13391__auto__;
}
break;
}
});
state_machine__13390__auto__ = function(state_19025){
switch(arguments.length){
case 0:
return state_machine__13390__auto____0.call(this);
case 1:
return state_machine__13390__auto____1.call(this,state_19025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13390__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13390__auto____0;
state_machine__13390__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13390__auto____1;
return state_machine__13390__auto__;
})()
;})(switch__13389__auto__,c__13459__auto__,t))
})();var state__13461__auto__ = (function (){var statearr_19047 = f__13460__auto__.call(null);(statearr_19047[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13459__auto__);
return statearr_19047;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13461__auto__);
});})(c__13459__auto__,t))
);
return c__13459__auto__;
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
return (function (_,cb){var c__13459__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13459__auto__,ch){
return (function (){var f__13460__auto__ = (function (){var switch__13389__auto__ = ((function (c__13459__auto__,ch){
return (function (state_19067){var state_val_19068 = (state_19067[1]);if((state_val_19068 === 2))
{var inst_19063 = (state_19067[2]);var inst_19064 = lt.plugins.elm_light.autocompleter.core.process_hint_results.call(null,inst_19063);var inst_19065 = cb.call(null,inst_19064);var state_19067__$1 = state_19067;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19067__$1,inst_19065);
} else
{if((state_val_19068 === 1))
{var state_19067__$1 = state_19067;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19067__$1,2,ch);
} else
{return null;
}
}
});})(c__13459__auto__,ch))
;return ((function (switch__13389__auto__,c__13459__auto__,ch){
return (function() {
var state_machine__13390__auto__ = null;
var state_machine__13390__auto____0 = (function (){var statearr_19072 = [null,null,null,null,null,null,null];(statearr_19072[0] = state_machine__13390__auto__);
(statearr_19072[1] = 1);
return statearr_19072;
});
var state_machine__13390__auto____1 = (function (state_19067){while(true){
var ret_value__13391__auto__ = (function (){try{while(true){
var result__13392__auto__ = switch__13389__auto__.call(null,state_19067);if(cljs.core.keyword_identical_QMARK_.call(null,result__13392__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13392__auto__;
}
break;
}
}catch (e19073){if((e19073 instanceof Object))
{var ex__13393__auto__ = e19073;var statearr_19074_19098 = state_19067;(statearr_19074_19098[5] = ex__13393__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19067);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19073;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13391__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19099 = state_19067;
state_19067 = G__19099;
continue;
}
} else
{return ret_value__13391__auto__;
}
break;
}
});
state_machine__13390__auto__ = function(state_19067){
switch(arguments.length){
case 0:
return state_machine__13390__auto____0.call(this);
case 1:
return state_machine__13390__auto____1.call(this,state_19067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13390__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13390__auto____0;
state_machine__13390__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13390__auto____1;
return state_machine__13390__auto__;
})()
;})(switch__13389__auto__,c__13459__auto__,ch))
})();var state__13461__auto__ = (function (){var statearr_19075 = f__13460__auto__.call(null);(statearr_19075[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13459__auto__);
return statearr_19075;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13461__auto__);
});})(c__13459__auto__,ch))
);
return c__13459__auto__;
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
var G__18897 = (line - 1);
line = G__18897;
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
var G__18898 = (line + 1);
line = G__18898;
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
var G__18899 = (line - 1);
line = G__18899;
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
var seq__20745_20768 = cljs.core.seq.call(null,lt.objs.editor.pool.containing_path.call(null,new cljs.core.Keyword(null,"dir","dir",1014003711).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client))));var chunk__20746_20769 = null;var count__20747_20770 = 0;var i__20748_20771 = 0;while(true){
if((i__20748_20771 < count__20747_20770))
{var ed_20772 = cljs.core._nth.call(null,chunk__20746_20769,i__20748_20771);lt.object.raise.call(null,ed_20772,new cljs.core.Keyword(null,"project-disconnected","project-disconnected",2085293025));
{
var G__20773 = seq__20745_20768;
var G__20774 = chunk__20746_20769;
var G__20775 = count__20747_20770;
var G__20776 = (i__20748_20771 + 1);
seq__20745_20768 = G__20773;
chunk__20746_20769 = G__20774;
count__20747_20770 = G__20775;
i__20748_20771 = G__20776;
continue;
}
} else
{var temp__4092__auto___20777 = cljs.core.seq.call(null,seq__20745_20768);if(temp__4092__auto___20777)
{var seq__20745_20778__$1 = temp__4092__auto___20777;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20745_20778__$1))
{var c__5633__auto___20779 = cljs.core.chunk_first.call(null,seq__20745_20778__$1);{
var G__20780 = cljs.core.chunk_rest.call(null,seq__20745_20778__$1);
var G__20781 = c__5633__auto___20779;
var G__20782 = cljs.core.count.call(null,c__5633__auto___20779);
var G__20783 = 0;
seq__20745_20768 = G__20780;
chunk__20746_20769 = G__20781;
count__20747_20770 = G__20782;
i__20748_20771 = G__20783;
continue;
}
} else
{var ed_20784 = cljs.core.first.call(null,seq__20745_20778__$1);lt.object.raise.call(null,ed_20784,new cljs.core.Keyword(null,"project-disconnected","project-disconnected",2085293025));
{
var G__20785 = cljs.core.next.call(null,seq__20745_20778__$1);
var G__20786 = null;
var G__20787 = 0;
var G__20788 = 0;
seq__20745_20768 = G__20785;
chunk__20746_20769 = G__20786;
count__20747_20770 = G__20787;
i__20748_20771 = G__20788;
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
var seq__20755 = cljs.core.seq.call(null,lt.objs.editor.pool.containing_path.call(null,new cljs.core.Keyword(null,"dir","dir",1014003711).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client))));var chunk__20756 = null;var count__20757 = 0;var i__20758 = 0;while(true){
if((i__20758 < count__20757))
{var ed = cljs.core._nth.call(null,chunk__20756,i__20758);lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"project-connected","project-connected",3474311367));
{
var G__20789 = seq__20755;
var G__20790 = chunk__20756;
var G__20791 = count__20757;
var G__20792 = (i__20758 + 1);
seq__20755 = G__20789;
chunk__20756 = G__20790;
count__20757 = G__20791;
i__20758 = G__20792;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__20755);if(temp__4092__auto__)
{var seq__20755__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20755__$1))
{var c__5633__auto__ = cljs.core.chunk_first.call(null,seq__20755__$1);{
var G__20793 = cljs.core.chunk_rest.call(null,seq__20755__$1);
var G__20794 = c__5633__auto__;
var G__20795 = cljs.core.count.call(null,c__5633__auto__);
var G__20796 = 0;
seq__20755 = G__20793;
chunk__20756 = G__20794;
count__20757 = G__20795;
i__20758 = G__20796;
continue;
}
} else
{var ed = cljs.core.first.call(null,seq__20755__$1);lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"project-connected","project-connected",3474311367));
{
var G__20797 = cljs.core.next.call(null,seq__20755__$1);
var G__20798 = null;
var G__20799 = 0;
var G__20800 = 0;
seq__20755 = G__20797;
chunk__20756 = G__20798;
count__20757 = G__20799;
i__20758 = G__20800;
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
{var map__20759 = cljs.core.last.call(null,msg);var map__20759__$1 = ((cljs.core.seq_QMARK_.call(null,map__20759))?cljs.core.apply.call(null,cljs.core.hash_map,map__20759):map__20759);var package$ = cljs.core.get.call(null,map__20759__$1,new cljs.core.Keyword(null,"package","package",4501809080));var error = cljs.core.get.call(null,map__20759__$1,new cljs.core.Keyword(null,"error","error",1110689146));var ast = cljs.core.get.call(null,map__20759__$1,new cljs.core.Keyword(null,"ast","ast",1014001140));var type = cljs.core.get.call(null,map__20759__$1,new cljs.core.Keyword(null,"type","type",1017479852));var file = cljs.core.get.call(null,map__20759__$1,new cljs.core.Keyword(null,"file","file",1017047278));var G__20760 = type;if(cljs.core._EQ_.call(null,"parsed",G__20760))
{return lt.plugins.elm_light.elm_ast.upsert_ast_BANG_.call(null,new cljs.core.Keyword(null,"dir","dir",1014003711).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file","file",1017047278),file,new cljs.core.Keyword(null,"ast","ast",1014001140),ast,new cljs.core.Keyword(null,"package","package",4501809080),package$], null));
} else
{if(cljs.core._EQ_.call(null,"parseError",G__20760))
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
return (function (p1__20761_SHARP_){return lt.plugins.elm_light.clients.on_elm_message.call(null,client,p1__20761_SHARP_);
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
lt.plugins.elm_light.clients.start_elm_client = (function start_elm_client(p__20762){var map__20764 = p__20762;var map__20764__$1 = ((cljs.core.seq_QMARK_.call(null,map__20764))?cljs.core.apply.call(null,cljs.core.hash_map,map__20764):map__20764);var props = map__20764__$1;var client = cljs.core.get.call(null,map__20764__$1,new cljs.core.Keyword(null,"client","client",3951159101));var proj_path = cljs.core.get.call(null,map__20764__$1,new cljs.core.Keyword(null,"proj-path","proj-path",4362692615));var path = cljs.core.get.call(null,map__20764__$1,new cljs.core.Keyword(null,"path","path",1017337751));lt.objs.notifos.working.call(null,"Connecting..");
return lt.plugins.elm_light.clients.claim_reactor_port.call(null,proj_path,((function (map__20764,map__20764__$1,props,client,proj_path,path){
return (function (_,port){var worker = lt.plugins.elm_light.clients.start_elm_worker.call(null,proj_path,port,client);lt.object.merge_BANG_.call(null,client,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1017277949),lt.objs.files.basename.call(null,proj_path),new cljs.core.Keyword(null,"dir","dir",1014003711),proj_path,new cljs.core.Keyword(null,"reactor-port","reactor-port",4649590590),port,new cljs.core.Keyword(null,"worker","worker",4526786288),worker,new cljs.core.Keyword(null,"commands","commands",4706336250),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"editor.elm.lint","editor.elm.lint",1086056222),null,new cljs.core.Keyword(null,"editor.elm.make","editor.elm.make",1086078217),null,new cljs.core.Keyword(null,"editor.elm.ast.passthrough","editor.elm.ast.passthrough",3082755153),null,new cljs.core.Keyword(null,"editor.eval.elm","editor.eval.elm",1083015975),null,new cljs.core.Keyword(null,"editor.elm.hint","editor.elm.hint",1085937058),null,new cljs.core.Keyword(null,"elm.repl.restart","elm.repl.restart",2931654218),null,new cljs.core.Keyword(null,"editor.elm.ast.parsetext","editor.elm.ast.parsetext",1992138717),null,new cljs.core.Keyword(null,"docs.elm.search","docs.elm.search",737241333),null,new cljs.core.Keyword(null,"editor.elm.doc","editor.elm.doc",1570413537),null,new cljs.core.Keyword(null,"editor.elm.gendoc","editor.elm.gendoc",1485628611),null,new cljs.core.Keyword(null,"elm.reload.ast","elm.reload.ast",3046520423),null], null), null)], null));
return lt.object.add_behavior_BANG_.call(null,client,new cljs.core.Keyword("lt.plugins.elm-light.clients","send!","lt.plugins.elm-light.clients/send!",867013595));
});})(map__20764,map__20764__$1,props,client,proj_path,path))
);
});
lt.plugins.elm_light.clients.try_connect = (function try_connect(p__20765){var map__20767 = p__20765;var map__20767__$1 = ((cljs.core.seq_QMARK_.call(null,map__20767))?cljs.core.apply.call(null,cljs.core.hash_map,map__20767):map__20767);var props = map__20767__$1;var info = cljs.core.get.call(null,map__20767__$1,new cljs.core.Keyword(null,"info","info",1017141280));var path = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(info);var proj_path = lt.plugins.elm_light.utils.project_path.call(null,path);var client = lt.objs.clients.client_BANG_.call(null,new cljs.core.Keyword(null,"elm-client","elm-client",1622336068));if(cljs.core.truth_(proj_path))
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
lt.plugins.elm_light.docpreview.preview_skeleton = (function preview_skeleton(this$){var e__6292__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"elm-doc-preview"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"Generating elm docs, please wait a little..."], null)], null));var seq__11830_11854 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__11831_11855 = null;var count__11832_11856 = 0;var i__11833_11857 = 0;while(true){
if((i__11833_11857 < count__11832_11856))
{var vec__11834_11858 = cljs.core._nth.call(null,chunk__11831_11855,i__11833_11857);var ev__6293__auto___11859 = cljs.core.nth.call(null,vec__11834_11858,0,null);var func__6294__auto___11860 = cljs.core.nth.call(null,vec__11834_11858,1,null);lt.util.dom.on.call(null,e__6292__auto__,ev__6293__auto___11859,func__6294__auto___11860);
{
var G__11861 = seq__11830_11854;
var G__11862 = chunk__11831_11855;
var G__11863 = count__11832_11856;
var G__11864 = (i__11833_11857 + 1);
seq__11830_11854 = G__11861;
chunk__11831_11855 = G__11862;
count__11832_11856 = G__11863;
i__11833_11857 = G__11864;
continue;
}
} else
{var temp__4092__auto___11865 = cljs.core.seq.call(null,seq__11830_11854);if(temp__4092__auto___11865)
{var seq__11830_11866__$1 = temp__4092__auto___11865;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11830_11866__$1))
{var c__5633__auto___11867 = cljs.core.chunk_first.call(null,seq__11830_11866__$1);{
var G__11868 = cljs.core.chunk_rest.call(null,seq__11830_11866__$1);
var G__11869 = c__5633__auto___11867;
var G__11870 = cljs.core.count.call(null,c__5633__auto___11867);
var G__11871 = 0;
seq__11830_11854 = G__11868;
chunk__11831_11855 = G__11869;
count__11832_11856 = G__11870;
i__11833_11857 = G__11871;
continue;
}
} else
{var vec__11835_11872 = cljs.core.first.call(null,seq__11830_11866__$1);var ev__6293__auto___11873 = cljs.core.nth.call(null,vec__11835_11872,0,null);var func__6294__auto___11874 = cljs.core.nth.call(null,vec__11835_11872,1,null);lt.util.dom.on.call(null,e__6292__auto__,ev__6293__auto___11873,func__6294__auto___11874);
{
var G__11875 = cljs.core.next.call(null,seq__11830_11866__$1);
var G__11876 = null;
var G__11877 = 0;
var G__11878 = 0;
seq__11830_11854 = G__11875;
chunk__11831_11855 = G__11876;
count__11832_11856 = G__11877;
i__11833_11857 = G__11878;
continue;
}
}
} else
{}
}
break;
}
return e__6292__auto__;
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.docpreview","elmdoc","lt.plugins.elm-light.docpreview/elmdoc",1597859033),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elmdoc","elmdoc",4008535620)], null),new cljs.core.Keyword(null,"name","name",1017277949),"elmdoc",new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.elm-light.docpreview","on-close-destroy","lt.plugins.elm-light.docpreview/on-close-destroy",906178052)], null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,filename){lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1017277949)], null),cljs.core.constantly.call(null,[cljs.core.str(filename),cljs.core.str(" - Live")].join('')));
return lt.plugins.elm_light.docpreview.preview_skeleton.call(null,this$);
}));
lt.plugins.elm_light.docpreview.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___11879 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___11879))
{var ts_11880 = temp__4092__auto___11879;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_11880))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_11880);
} else
{}
} else
{}
var temp__4092__auto___11881 = new cljs.core.Keyword(null,"owner-ed","owner-ed",2677003627).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___11881))
{var ed_11882 = temp__4092__auto___11881;lt.object.assoc_in_BANG_.call(null,ed_11882,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elmdoc","elmdoc",4008535620)], null),null);
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
return (function (){var seq__11840 = cljs.core.seq.call(null,lt.util.dom.$$.call(null,"pre code",lt.object.__GT_content.call(null,elmdoc)));var chunk__11841 = null;var count__11842 = 0;var i__11843 = 0;while(true){
if((i__11843 < count__11842))
{var block = cljs.core._nth.call(null,chunk__11841,i__11843);hljs.highlightBlock(block);
{
var G__11883 = seq__11840;
var G__11884 = chunk__11841;
var G__11885 = count__11842;
var G__11886 = (i__11843 + 1);
seq__11840 = G__11883;
chunk__11841 = G__11884;
count__11842 = G__11885;
i__11843 = G__11886;
continue;
}
} else
{var temp__4092__auto____$1 = cljs.core.seq.call(null,seq__11840);if(temp__4092__auto____$1)
{var seq__11840__$1 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11840__$1))
{var c__5633__auto__ = cljs.core.chunk_first.call(null,seq__11840__$1);{
var G__11887 = cljs.core.chunk_rest.call(null,seq__11840__$1);
var G__11888 = c__5633__auto__;
var G__11889 = cljs.core.count.call(null,c__5633__auto__);
var G__11890 = 0;
seq__11840 = G__11887;
chunk__11841 = G__11888;
count__11842 = G__11889;
i__11843 = G__11890;
continue;
}
} else
{var block = cljs.core.first.call(null,seq__11840__$1);hljs.highlightBlock(block);
{
var G__11891 = cljs.core.next.call(null,seq__11840__$1);
var G__11892 = null;
var G__11893 = 0;
var G__11894 = 0;
seq__11840 = G__11891;
chunk__11841 = G__11892;
count__11842 = G__11893;
i__11843 = G__11894;
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
lt.plugins.elm_light.docpreview.__BEH__elm_docpreview = (function __BEH__elm_docpreview(ed){var path = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));var elmdoc_obj = (function (){var or__4885__auto__ = new cljs.core.Keyword(null,"elmdoc","elmdoc",4008535620).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed));if(cljs.core.truth_(or__4885__auto__))
{return or__4885__auto__;
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
lt.plugins.elm_light.modulebrowser.resolve_module_file = (function resolve_module_file(project_path,pck_json,package$,module,version){return cljs.core.some.call(null,(function (p1__18755_SHARP_){if(cljs.core.truth_(lt.objs.files.exists_QMARK_.call(null,p1__18755_SHARP_)))
{return p1__18755_SHARP_;
} else
{return null;
}
}),cljs.core.map.call(null,(function (p1__18754_SHARP_){return lt.objs.files.join.call(null,project_path,"elm-stuff/packages",package$,version,p1__18754_SHARP_,[cljs.core.str(clojure.string.replace.call(null,module,".",lt.objs.files.separator)),cljs.core.str(".elm")].join(''));
}),new cljs.core.Keyword(null,"source-directories","source-directories",4475397259).cljs$core$IFn$_invoke$arity$1(pck_json)));
});
lt.plugins.elm_light.modulebrowser.get_exposed_modules = (function get_exposed_modules(project_path,p__18756){var map__18758 = p__18756;var map__18758__$1 = ((cljs.core.seq_QMARK_.call(null,map__18758))?cljs.core.apply.call(null,cljs.core.hash_map,map__18758):map__18758);var exact = cljs.core.get.call(null,map__18758__$1,new cljs.core.Keyword(null,"exact","exact",1110851185));var package$ = cljs.core.get.call(null,map__18758__$1,new cljs.core.Keyword(null,"package","package",4501809080));var pck_json = lt.plugins.elm_light.utils.parse_json_file.call(null,lt.objs.files.join.call(null,project_path,"elm-stuff/packages",package$,exact,"elm-package.json"));return cljs.core.map.call(null,((function (pck_json,map__18758,map__18758__$1,exact,package$){
return (function (x){return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1017277949),x,new cljs.core.Keyword(null,"packageName","packageName",1922663267),package$,new cljs.core.Keyword(null,"version","version",1365512266),exact,new cljs.core.Keyword(null,"file","file",1017047278),lt.plugins.elm_light.modulebrowser.resolve_module_file.call(null,project_path,pck_json,package$,x,exact)], null);
});})(pck_json,map__18758,map__18758__$1,exact,package$))
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
return (function (p1__18759_SHARP_){return cljs.core._EQ_.call(null,lt.objs.files.ext.call(null,p1__18759_SHARP_),"elm");
});})(pck_json))
,lt.objs.files.ls.call(null,project_path)));
} else
{return cljs.core.map.call(null,((function (pck_json){
return (function (x){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),lt.plugins.elm_light.modulebrowser.deduce_module_name.call(null,lt.objs.files.join.call(null,project_path,dir),x),new cljs.core.Keyword(null,"file","file",1017047278),x], null);
});})(pck_json))
,lt.objs.files.filter_walk.call(null,((function (pck_json){
return (function (p1__18760_SHARP_){return cljs.core._EQ_.call(null,lt.objs.files.ext.call(null,p1__18760_SHARP_),"elm");
});})(pck_json))
,lt.objs.files.join.call(null,project_path,dir)));
}
});})(pck_json))
,new cljs.core.Keyword(null,"source-directories","source-directories",4475397259).cljs$core$IFn$_invoke$arity$1(pck_json))));
});
lt.plugins.elm_light.modulebrowser.get_all_modules = (function get_all_modules(project_path){return cljs.core.concat.call(null,lt.plugins.elm_light.modulebrowser.get_project_modules.call(null,project_path),lt.plugins.elm_light.modulebrowser.get_package_modules.call(null,project_path));
});
lt.plugins.elm_light.modulebrowser.wrapper = (function wrapper(this$){var e__6292__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"elm-module-browser"], null),"Retrieving modules..."], null));var seq__18767_18783 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__18768_18784 = null;var count__18769_18785 = 0;var i__18770_18786 = 0;while(true){
if((i__18770_18786 < count__18769_18785))
{var vec__18771_18787 = cljs.core._nth.call(null,chunk__18768_18784,i__18770_18786);var ev__6293__auto___18788 = cljs.core.nth.call(null,vec__18771_18787,0,null);var func__6294__auto___18789 = cljs.core.nth.call(null,vec__18771_18787,1,null);lt.util.dom.on.call(null,e__6292__auto__,ev__6293__auto___18788,func__6294__auto___18789);
{
var G__18790 = seq__18767_18783;
var G__18791 = chunk__18768_18784;
var G__18792 = count__18769_18785;
var G__18793 = (i__18770_18786 + 1);
seq__18767_18783 = G__18790;
chunk__18768_18784 = G__18791;
count__18769_18785 = G__18792;
i__18770_18786 = G__18793;
continue;
}
} else
{var temp__4092__auto___18794 = cljs.core.seq.call(null,seq__18767_18783);if(temp__4092__auto___18794)
{var seq__18767_18795__$1 = temp__4092__auto___18794;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18767_18795__$1))
{var c__5633__auto___18796 = cljs.core.chunk_first.call(null,seq__18767_18795__$1);{
var G__18797 = cljs.core.chunk_rest.call(null,seq__18767_18795__$1);
var G__18798 = c__5633__auto___18796;
var G__18799 = cljs.core.count.call(null,c__5633__auto___18796);
var G__18800 = 0;
seq__18767_18783 = G__18797;
chunk__18768_18784 = G__18798;
count__18769_18785 = G__18799;
i__18770_18786 = G__18800;
continue;
}
} else
{var vec__18772_18801 = cljs.core.first.call(null,seq__18767_18795__$1);var ev__6293__auto___18802 = cljs.core.nth.call(null,vec__18772_18801,0,null);var func__6294__auto___18803 = cljs.core.nth.call(null,vec__18772_18801,1,null);lt.util.dom.on.call(null,e__6292__auto__,ev__6293__auto___18802,func__6294__auto___18803);
{
var G__18804 = cljs.core.next.call(null,seq__18767_18795__$1);
var G__18805 = null;
var G__18806 = 0;
var G__18807 = 0;
seq__18767_18783 = G__18804;
chunk__18768_18784 = G__18805;
count__18769_18785 = G__18806;
i__18770_18786 = G__18807;
continue;
}
}
} else
{}
}
break;
}
return e__6292__auto__;
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
lt.plugins.elm_light.hinter.get_token = (function get_token(ed){var pos = lt.objs.editor.__GT_cursor.call(null,ed);var sym = lt.plugins.elm_light.utils.find_symbol.call(null,ed,pos);if(cljs.core.truth_((function (){var and__4873__auto__ = sym;if(cljs.core.truth_(and__4873__auto__))
{return cljs.core.seq.call(null,sym);
} else
{return and__4873__auto__;
}
})()))
{return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"string","string",4416885635),sym,new cljs.core.Keyword(null,"start","start",1123661780),(new cljs.core.Keyword(null,"ch","ch",1013907415).cljs$core$IFn$_invoke$arity$1(pos) - cljs.core.count.call(null,sym)),new cljs.core.Keyword(null,"end","end",1014004813),new cljs.core.Keyword(null,"ch","ch",1013907415).cljs$core$IFn$_invoke$arity$1(pos),new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(pos)], null);
} else
{return null;
}
});
lt.plugins.elm_light.hinter.__GT_hints = (function __GT_hints(token,completions){return cljs.core.map.call(null,(function (p1__15763_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"text","text",1017460895),new cljs.core.Keyword(null,"displayText","displayText",2728236161),new cljs.core.Keyword(null,"render","render",4374279432),new cljs.core.Keyword(null,"from","from",1017056028),new cljs.core.Keyword(null,"to","to",1013907949)],[new cljs.core.Keyword(null,"completion","completion",4767668046).cljs$core$IFn$_invoke$arity$1(p1__15763_SHARP_),new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(p1__15763_SHARP_),(function (el,self,data){return lt.util.dom.html.call(null,el,wrapMatch(data.displayText,{"matched": new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(token)}));
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
lt.plugins.elm_light.hinter.__BEH__elm_hints = (function __BEH__elm_hints(ed,channels){var token = lt.plugins.elm_light.hinter.get_token.call(null,ed);var ch = cljs.core.async.chan.call(null);var path = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));if(cljs.core.truth_((function (){var and__4873__auto__ = token;if(cljs.core.truth_(and__4873__auto__))
{return lt.plugins.elm_light.hinter.connected_QMARK_.call(null,ed);
} else
{return and__4873__auto__;
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
lt.plugins.elm_light.linter.status_class = (function status_class(p__18588){var map__18590 = p__18588;var map__18590__$1 = ((cljs.core.seq_QMARK_.call(null,map__18590))?cljs.core.apply.call(null,cljs.core.hash_map,map__18590):map__18590);var warnings = cljs.core.get.call(null,map__18590__$1,new cljs.core.Keyword(null,"warnings","warnings",1511995337));var errors = cljs.core.get.call(null,map__18590__$1,new cljs.core.Keyword(null,"errors","errors",4014236381));if((errors > 0))
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
lt.plugins.elm_light.linter.status_text = (function status_text(p__18591){var map__18593 = p__18591;var map__18593__$1 = ((cljs.core.seq_QMARK_.call(null,map__18593))?cljs.core.apply.call(null,cljs.core.hash_map,map__18593):map__18593);var warnings = cljs.core.get.call(null,map__18593__$1,new cljs.core.Keyword(null,"warnings","warnings",1511995337));var errors = cljs.core.get.call(null,map__18593__$1,new cljs.core.Keyword(null,"errors","errors",4014236381));return [cljs.core.str("Lint status: "),cljs.core.str(errors),cljs.core.str("/"),cljs.core.str(warnings)].join('');
});
lt.plugins.elm_light.linter.__GT_status_ui = (function __GT_status_ui(p__18594){var map__18596 = p__18594;var map__18596__$1 = ((cljs.core.seq_QMARK_.call(null,map__18596))?cljs.core.apply.call(null,cljs.core.hash_map,map__18596):map__18596);var lint_summary = cljs.core.get.call(null,map__18596__$1,new cljs.core.Keyword(null,"lint-summary","lint-summary",2275048270));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("lint-status "),cljs.core.str(lt.plugins.elm_light.linter.status_class.call(null,lint_summary))].join('')], null),lt.plugins.elm_light.linter.status_text.call(null,lint_summary)], null);
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
return (function (p__18599){var vec__18600 = p__18599;var k = cljs.core.nth.call(null,vec__18600,0,null);var v = cljs.core.nth.call(null,vec__18600,1,null);return new cljs.core.PersistentArrayMap.fromArray([k,cljs.core.count.call(null,v)], true, false);
});})(results,temp__4090__auto__))
,cljs.core.group_by.call(null,new cljs.core.Keyword(null,"category","category",1064415344),cljs.core.map.call(null,new cljs.core.Keyword(null,"result","result",4374444943),cljs.core.vals.call(null,results)))));
} else
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",1110689146),0,new cljs.core.Keyword(null,"warning","warning",2138350350),0], null);
}
});
lt.plugins.elm_light.linter.update_status_for_editor = (function update_status_for_editor(ed){var map__18603 = lt.plugins.elm_light.linter.grouped_lint_count.call(null,ed);var map__18603__$1 = ((cljs.core.seq_QMARK_.call(null,map__18603))?cljs.core.apply.call(null,cljs.core.hash_map,map__18603):map__18603);var warning = cljs.core.get.call(null,map__18603__$1,new cljs.core.Keyword(null,"warning","warning",2138350350));var error = cljs.core.get.call(null,map__18603__$1,new cljs.core.Keyword(null,"error","error",1110689146));return lt.object.raise.call(null,lt.plugins.elm_light.linter.statusbar_lint_summary,new cljs.core.Keyword(null,"update!","update!",779473898),((function (map__18603,map__18603__$1,warning,error){
return (function (p1__18601_SHARP_){return cljs.core.assoc.call(null,p1__18601_SHARP_,new cljs.core.Keyword(null,"warnings","warnings",1511995337),(function (){var or__4885__auto__ = warning;if(cljs.core.truth_(or__4885__auto__))
{return or__4885__auto__;
} else
{return 0;
}
})(),new cljs.core.Keyword(null,"errors","errors",4014236381),(function (){var or__4885__auto__ = error;if(cljs.core.truth_(or__4885__auto__))
{return or__4885__auto__;
} else
{return 0;
}
})());
});})(map__18603,map__18603__$1,warning,error))
);
});
lt.plugins.elm_light.linter.__BEH__update_linter_on_editor_change = (function __BEH__update_linter_on_editor_change(ed){return lt.plugins.elm_light.linter.update_status_for_editor.call(null,ed);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.linter","update-linter-on-editor-change","lt.plugins.elm-light.linter/update-linter-on-editor-change",2858337088),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.linter.__BEH__update_linter_on_editor_change,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"focus","focus",1111509066),null], null), null));
lt.plugins.elm_light.linter.remove_widget = (function remove_widget(ed,el){try{lt.util.dom.remove.call(null,el);
}catch (e18605){var e_18665 = e18605;}return lt.objs.editor.focus.call(null,ed);
});
lt.plugins.elm_light.linter.remove_res = (function remove_res(ed,res_id){var map__18607_18666 = cljs.core.get_in.call(null,cljs.core.deref.call(null,ed),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linter-results","linter-results",4482067083),res_id], null));var map__18607_18667__$1 = ((cljs.core.seq_QMARK_.call(null,map__18607_18666))?cljs.core.apply.call(null,cljs.core.hash_map,map__18607_18666):map__18607_18666);var dill_18668 = map__18607_18667__$1;var result_18669 = cljs.core.get.call(null,map__18607_18667__$1,new cljs.core.Keyword(null,"result","result",4374444943));var mark_18670 = cljs.core.get.call(null,map__18607_18667__$1,new cljs.core.Keyword(null,"mark","mark",1017248319));if(cljs.core.truth_(mark_18670))
{mark_18670.clear();
} else
{}
lt.object.update_BANG_.call(null,ed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linter-results","linter-results",4482067083)], null),cljs.core.dissoc,res_id);
return lt.objs.editor.focus.call(null,ed);
});
lt.plugins.elm_light.linter.current_range = (function current_range(ed,mark){var rng = mark.find();var from = rng.from;var to = rng.to;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1017056028),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",1013907415),from.ch,new cljs.core.Keyword(null,"line","line",1017226086),from.line], null),new cljs.core.Keyword(null,"to","to",1013907949),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",1013907415),to.ch,new cljs.core.Keyword(null,"line","line",1017226086),to.line], null)], null);
});
lt.plugins.elm_light.linter.execute_action = (function execute_action(ed,res_id,action_fn,res){var map__18609 = cljs.core.get_in.call(null,cljs.core.deref.call(null,ed),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linter-results","linter-results",4482067083),res_id], null));var map__18609__$1 = ((cljs.core.seq_QMARK_.call(null,map__18609))?cljs.core.apply.call(null,cljs.core.hash_map,map__18609):map__18609);var mark = cljs.core.get.call(null,map__18609__$1,new cljs.core.Keyword(null,"mark","mark",1017248319));action_fn.call(null,res,lt.plugins.elm_light.linter.current_range.call(null,ed,mark));
return lt.plugins.elm_light.linter.remove_res.call(null,ed,res_id);
});
lt.plugins.elm_light.linter.action_ui = (function action_ui(ed,action,res_id,res){var e__6292__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.button","span.button",4282180040),[cljs.core.str(new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(action))].join('')], null));var seq__18616_18671 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__6292__auto__){
return (function (){return lt.plugins.elm_light.linter.execute_action.call(null,ed,res_id,new cljs.core.Keyword(null,"action","action",3885920680).cljs$core$IFn$_invoke$arity$1(action),res);
});})(e__6292__auto__))
], null)));var chunk__18617_18672 = null;var count__18618_18673 = 0;var i__18619_18674 = 0;while(true){
if((i__18619_18674 < count__18618_18673))
{var vec__18620_18675 = cljs.core._nth.call(null,chunk__18617_18672,i__18619_18674);var ev__6293__auto___18676 = cljs.core.nth.call(null,vec__18620_18675,0,null);var func__6294__auto___18677 = cljs.core.nth.call(null,vec__18620_18675,1,null);lt.util.dom.on.call(null,e__6292__auto__,ev__6293__auto___18676,func__6294__auto___18677);
{
var G__18678 = seq__18616_18671;
var G__18679 = chunk__18617_18672;
var G__18680 = count__18618_18673;
var G__18681 = (i__18619_18674 + 1);
seq__18616_18671 = G__18678;
chunk__18617_18672 = G__18679;
count__18618_18673 = G__18680;
i__18619_18674 = G__18681;
continue;
}
} else
{var temp__4092__auto___18682 = cljs.core.seq.call(null,seq__18616_18671);if(temp__4092__auto___18682)
{var seq__18616_18683__$1 = temp__4092__auto___18682;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18616_18683__$1))
{var c__5633__auto___18684 = cljs.core.chunk_first.call(null,seq__18616_18683__$1);{
var G__18685 = cljs.core.chunk_rest.call(null,seq__18616_18683__$1);
var G__18686 = c__5633__auto___18684;
var G__18687 = cljs.core.count.call(null,c__5633__auto___18684);
var G__18688 = 0;
seq__18616_18671 = G__18685;
chunk__18617_18672 = G__18686;
count__18618_18673 = G__18687;
i__18619_18674 = G__18688;
continue;
}
} else
{var vec__18621_18689 = cljs.core.first.call(null,seq__18616_18683__$1);var ev__6293__auto___18690 = cljs.core.nth.call(null,vec__18621_18689,0,null);var func__6294__auto___18691 = cljs.core.nth.call(null,vec__18621_18689,1,null);lt.util.dom.on.call(null,e__6292__auto__,ev__6293__auto___18690,func__6294__auto___18691);
{
var G__18692 = cljs.core.next.call(null,seq__18616_18683__$1);
var G__18693 = null;
var G__18694 = 0;
var G__18695 = 0;
seq__18616_18671 = G__18692;
chunk__18617_18672 = G__18693;
count__18618_18673 = G__18694;
i__18619_18674 = G__18695;
continue;
}
}
} else
{}
}
break;
}
return e__6292__auto__;
});
lt.plugins.elm_light.linter.inline_ui = (function inline_ui(ed,res_id,p__18625){var map__18633 = p__18625;var map__18633__$1 = ((cljs.core.seq_QMARK_.call(null,map__18633))?cljs.core.apply.call(null,cljs.core.hash_map,map__18633):map__18633);var res = map__18633__$1;var actions = cljs.core.get.call(null,map__18633__$1,new cljs.core.Keyword(null,"actions","actions",4147068015));var category = cljs.core.get.call(null,map__18633__$1,new cljs.core.Keyword(null,"category","category",1064415344));var details = cljs.core.get.call(null,map__18633__$1,new cljs.core.Keyword(null,"details","details",2571625908));var title = cljs.core.get.call(null,map__18633__$1,new cljs.core.Keyword(null,"title","title",1124275658));var e__6292__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tabindex","tabindex",4410954191),-1,new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("linter-res "),cljs.core.str((function (){var or__4885__auto__ = cljs.core.name.call(null,category);if(cljs.core.truth_(or__4885__auto__))
{return or__4885__auto__;
} else
{return "error";
}
})())].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.title","p.title",3057381068),title], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.details","div.details",4139669847),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),details], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),cljs.core.map.call(null,((function (map__18633,map__18633__$1,res,actions,category,details,title){
return (function (p1__18622_SHARP_){return lt.plugins.elm_light.linter.action_ui.call(null,ed,p1__18622_SHARP_,res_id,res);
});})(map__18633,map__18633__$1,res,actions,category,details,title))
,actions)], null)], null)], null));var seq__18634_18696 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blur","blur",1016931289),((function (e__6292__auto__,map__18633,map__18633__$1,res,actions,category,details,title){
return (function (p1__18623_SHARP_){return lt.plugins.elm_light.linter.remove_widget.call(null,ed,p1__18623_SHARP_.target);
});})(e__6292__auto__,map__18633,map__18633__$1,res,actions,category,details,title))
,new cljs.core.Keyword(null,"keydown","keydown",4493897459),((function (e__6292__auto__,map__18633,map__18633__$1,res,actions,category,details,title){
return (function (p1__18624_SHARP_){var kc = p1__18624_SHARP_.keyCode;if(cljs.core._EQ_.call(null,kc,27))
{lt.plugins.elm_light.linter.remove_widget.call(null,ed,p1__18624_SHARP_.target);
} else
{}
if((cljs.core._EQ_.call(null,kc,13)) && (cljs.core.seq.call(null,actions)))
{p1__18624_SHARP_.preventDefault();
p1__18624_SHARP_.stopPropagation();
return lt.plugins.elm_light.linter.execute_action.call(null,ed,res_id,new cljs.core.Keyword(null,"action","action",3885920680).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,actions)),res);
} else
{return null;
}
});})(e__6292__auto__,map__18633,map__18633__$1,res,actions,category,details,title))
], null)));var chunk__18635_18697 = null;var count__18636_18698 = 0;var i__18637_18699 = 0;while(true){
if((i__18637_18699 < count__18636_18698))
{var vec__18638_18700 = cljs.core._nth.call(null,chunk__18635_18697,i__18637_18699);var ev__6293__auto___18701 = cljs.core.nth.call(null,vec__18638_18700,0,null);var func__6294__auto___18702 = cljs.core.nth.call(null,vec__18638_18700,1,null);lt.util.dom.on.call(null,e__6292__auto__,ev__6293__auto___18701,func__6294__auto___18702);
{
var G__18703 = seq__18634_18696;
var G__18704 = chunk__18635_18697;
var G__18705 = count__18636_18698;
var G__18706 = (i__18637_18699 + 1);
seq__18634_18696 = G__18703;
chunk__18635_18697 = G__18704;
count__18636_18698 = G__18705;
i__18637_18699 = G__18706;
continue;
}
} else
{var temp__4092__auto___18707 = cljs.core.seq.call(null,seq__18634_18696);if(temp__4092__auto___18707)
{var seq__18634_18708__$1 = temp__4092__auto___18707;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18634_18708__$1))
{var c__5633__auto___18709 = cljs.core.chunk_first.call(null,seq__18634_18708__$1);{
var G__18710 = cljs.core.chunk_rest.call(null,seq__18634_18708__$1);
var G__18711 = c__5633__auto___18709;
var G__18712 = cljs.core.count.call(null,c__5633__auto___18709);
var G__18713 = 0;
seq__18634_18696 = G__18710;
chunk__18635_18697 = G__18711;
count__18636_18698 = G__18712;
i__18637_18699 = G__18713;
continue;
}
} else
{var vec__18639_18714 = cljs.core.first.call(null,seq__18634_18708__$1);var ev__6293__auto___18715 = cljs.core.nth.call(null,vec__18639_18714,0,null);var func__6294__auto___18716 = cljs.core.nth.call(null,vec__18639_18714,1,null);lt.util.dom.on.call(null,e__6292__auto__,ev__6293__auto___18715,func__6294__auto___18716);
{
var G__18717 = cljs.core.next.call(null,seq__18634_18708__$1);
var G__18718 = null;
var G__18719 = 0;
var G__18720 = 0;
seq__18634_18696 = G__18717;
chunk__18635_18697 = G__18718;
count__18636_18698 = G__18719;
i__18637_18699 = G__18720;
continue;
}
}
} else
{}
}
break;
}
return e__6292__auto__;
});
lt.plugins.elm_light.linter.add_widget = (function add_widget(ed,res_id){var map__18641 = cljs.core.get_in.call(null,cljs.core.deref.call(null,ed),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linter-results","linter-results",4482067083),res_id], null));var map__18641__$1 = ((cljs.core.seq_QMARK_.call(null,map__18641))?cljs.core.apply.call(null,cljs.core.hash_map,map__18641):map__18641);var result = cljs.core.get.call(null,map__18641__$1,new cljs.core.Keyword(null,"result","result",4374444943));var mark = cljs.core.get.call(null,map__18641__$1,new cljs.core.Keyword(null,"mark","mark",1017248319));var ui = lt.plugins.elm_light.linter.inline_ui.call(null,ed,res_id,result);var from = mark.find().from;lt.objs.editor.__GT_cm_ed.call(null,ed).addWidget(from,ui,{"scrollIntoView": true});
return lt.util.dom.focus.call(null,ui);
});
lt.plugins.elm_light.linter.create_mark = (function create_mark(ed,p__18642){var map__18644 = p__18642;var map__18644__$1 = ((cljs.core.seq_QMARK_.call(null,map__18644))?cljs.core.apply.call(null,cljs.core.hash_map,map__18644):map__18644);var code_range = cljs.core.get.call(null,map__18644__$1,new cljs.core.Keyword(null,"code-range","code-range",3297446095));var category = cljs.core.get.call(null,map__18644__$1,new cljs.core.Keyword(null,"category","category",1064415344));var from = new cljs.core.Keyword(null,"from","from",1017056028).cljs$core$IFn$_invoke$arity$1(code_range);var to = ((!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"to","to",1013907949).cljs$core$IFn$_invoke$arity$1(code_range),from)))?new cljs.core.Keyword(null,"to","to",1013907949).cljs$core$IFn$_invoke$arity$1(code_range):cljs.core.assoc.call(null,from,new cljs.core.Keyword(null,"ch","ch",1013907415),(lt.objs.editor.line_length.call(null,ed,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(from)) - 1)));return lt.objs.editor.mark.call(null,ed,from,to,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",1004015509),[cljs.core.str("lint-"),cljs.core.str((function (){var or__4885__auto__ = cljs.core.name.call(null,category);if(cljs.core.truth_(or__4885__auto__))
{return or__4885__auto__;
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
lt.plugins.elm_light.linter.__BEH__clear_linter_results_BANG_ = (function __BEH__clear_linter_results_BANG_(ed){var seq__18651_18721 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"linter-results","linter-results",4482067083).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));var chunk__18652_18722 = null;var count__18653_18723 = 0;var i__18654_18724 = 0;while(true){
if((i__18654_18724 < count__18653_18723))
{var vec__18655_18725 = cljs.core._nth.call(null,chunk__18652_18722,i__18654_18724);var id_18726 = cljs.core.nth.call(null,vec__18655_18725,0,null);var res_18727 = cljs.core.nth.call(null,vec__18655_18725,1,null);var temp__4092__auto___18728 = new cljs.core.Keyword(null,"mark","mark",1017248319).cljs$core$IFn$_invoke$arity$1(res_18727);if(cljs.core.truth_(temp__4092__auto___18728))
{var m_18729 = temp__4092__auto___18728;m_18729.clear();
} else
{}
var temp__4092__auto___18730 = new cljs.core.Keyword(null,"widget","widget",4520824246).cljs$core$IFn$_invoke$arity$1(res_18727);if(cljs.core.truth_(temp__4092__auto___18730))
{var w_18731 = temp__4092__auto___18730;lt.util.dom.remove.call(null,w_18731);
} else
{}
{
var G__18732 = seq__18651_18721;
var G__18733 = chunk__18652_18722;
var G__18734 = count__18653_18723;
var G__18735 = (i__18654_18724 + 1);
seq__18651_18721 = G__18732;
chunk__18652_18722 = G__18733;
count__18653_18723 = G__18734;
i__18654_18724 = G__18735;
continue;
}
} else
{var temp__4092__auto___18736 = cljs.core.seq.call(null,seq__18651_18721);if(temp__4092__auto___18736)
{var seq__18651_18737__$1 = temp__4092__auto___18736;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18651_18737__$1))
{var c__5633__auto___18738 = cljs.core.chunk_first.call(null,seq__18651_18737__$1);{
var G__18739 = cljs.core.chunk_rest.call(null,seq__18651_18737__$1);
var G__18740 = c__5633__auto___18738;
var G__18741 = cljs.core.count.call(null,c__5633__auto___18738);
var G__18742 = 0;
seq__18651_18721 = G__18739;
chunk__18652_18722 = G__18740;
count__18653_18723 = G__18741;
i__18654_18724 = G__18742;
continue;
}
} else
{var vec__18656_18743 = cljs.core.first.call(null,seq__18651_18737__$1);var id_18744 = cljs.core.nth.call(null,vec__18656_18743,0,null);var res_18745 = cljs.core.nth.call(null,vec__18656_18743,1,null);var temp__4092__auto___18746__$1 = new cljs.core.Keyword(null,"mark","mark",1017248319).cljs$core$IFn$_invoke$arity$1(res_18745);if(cljs.core.truth_(temp__4092__auto___18746__$1))
{var m_18747 = temp__4092__auto___18746__$1;m_18747.clear();
} else
{}
var temp__4092__auto___18748__$1 = new cljs.core.Keyword(null,"widget","widget",4520824246).cljs$core$IFn$_invoke$arity$1(res_18745);if(cljs.core.truth_(temp__4092__auto___18748__$1))
{var w_18749 = temp__4092__auto___18748__$1;lt.util.dom.remove.call(null,w_18749);
} else
{}
{
var G__18750 = cljs.core.next.call(null,seq__18651_18737__$1);
var G__18751 = null;
var G__18752 = 0;
var G__18753 = 0;
seq__18651_18721 = G__18750;
chunk__18652_18722 = G__18751;
count__18653_18723 = G__18752;
i__18654_18724 = G__18753;
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
lt.plugins.elm_light.linter.find_current_lint_mark = (function find_current_lint_mark(ed){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__18657_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"linter","linter",4206213986),p1__18657_SHARP_.lttype);
}),lt.objs.editor.find_marks.call(null,ed,lt.objs.editor.__GT_cursor.call(null,ed))));
});
lt.plugins.elm_light.linter.get_widget_by_mark = (function get_widget_by_mark(ed,mark){return cljs.core.get_in.call(null,cljs.core.deref.call(null,ed),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linter-results","linter-results",4482067083),mark.ltlintid,new cljs.core.Keyword(null,"widget","widget",4520824246)], null));
});
lt.plugins.elm_light.linter.mark__GT_pos = (function mark__GT_pos(mark){var cm_pos = mark.find().from;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",1013907415),cm_pos.ch,new cljs.core.Keyword(null,"line","line",1017226086),cm_pos.line], null);
});
lt.plugins.elm_light.linter.get_all_lint_marks = (function get_all_lint_marks(ed){return cljs.core.sort_by.call(null,(function (p1__18659_SHARP_){return cljs.core.juxt.call(null,new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"ch","ch",1013907415)).call(null,lt.plugins.elm_light.linter.mark__GT_pos.call(null,p1__18659_SHARP_));
}),cljs.core.filter.call(null,(function (p1__18658_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"linter","linter",4206213986),p1__18658_SHARP_.lttype);
}),lt.objs.editor.__GT_cm_ed.call(null,ed).getAllMarks()));
});
lt.plugins.elm_light.linter.split_with_mark = (function split_with_mark(ed){var all_marks = lt.plugins.elm_light.linter.get_all_lint_marks.call(null,ed);var curr_mark = lt.plugins.elm_light.linter.find_current_lint_mark.call(null,ed);return cljs.core.split_with.call(null,((function (all_marks,curr_mark){
return (function (p1__18660_SHARP_){return !(cljs.core._EQ_.call(null,(cljs.core.truth_(curr_mark)?curr_mark.ltlintid:null),p1__18660_SHARP_.ltlintid));
});})(all_marks,curr_mark))
,all_marks);
});
lt.plugins.elm_light.linter.find_next_mark = (function find_next_mark(ed){var vec__18662 = lt.plugins.elm_light.linter.split_with_mark.call(null,ed);var ms1 = cljs.core.nth.call(null,vec__18662,0,null);var ms2 = cljs.core.nth.call(null,vec__18662,1,null);return cljs.core.first.call(null,cljs.core.into.call(null,cljs.core.vec.call(null,cljs.core.drop.call(null,1,ms2)),ms1));
});
lt.plugins.elm_light.linter.find_prev_mark = (function find_prev_mark(ed){var vec__18664 = lt.plugins.elm_light.linter.split_with_mark.call(null,ed);var ms1 = cljs.core.nth.call(null,vec__18664,0,null);var ms2 = cljs.core.nth.call(null,vec__18664,1,null);return cljs.core.first.call(null,cljs.core.into.call(null,cljs.core.reverse.call(null,cljs.core.drop.call(null,1,ms2)),ms1));
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
lt.plugins.elm_light.__GT_lt_range = (function __GT_lt_range(p__20801){var map__20803 = p__20801;var map__20803__$1 = ((cljs.core.seq_QMARK_.call(null,map__20803))?cljs.core.apply.call(null,cljs.core.hash_map,map__20803):map__20803);var end = cljs.core.get.call(null,map__20803__$1,new cljs.core.Keyword(null,"end","end",1014004813));var start = cljs.core.get.call(null,map__20803__$1,new cljs.core.Keyword(null,"start","start",1123661780));return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1017056028),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",1013907415),(new cljs.core.Keyword(null,"column","column",3954034376).cljs$core$IFn$_invoke$arity$1(start) - 1),new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(start) - 1)], null),new cljs.core.Keyword(null,"to","to",1013907949),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",1013907415),(new cljs.core.Keyword(null,"column","column",3954034376).cljs$core$IFn$_invoke$arity$1(end) - 1),new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(end) - 1)], null)], null);
});
lt.plugins.elm_light.maybe_trim = (function maybe_trim(ss){if(cljs.core.truth_(ss))
{return clojure.string.trim.call(null,ss);
} else
{return null;
}
});
lt.plugins.elm_light.str_contains_QMARK_ = (function str_contains_QMARK_(source,target){if(cljs.core.truth_((function (){var and__4873__auto__ = source;if(cljs.core.truth_(and__4873__auto__))
{return target;
} else
{return and__4873__auto__;
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
lt.plugins.elm_light.linter_action = (function linter_action(ed,row){var G__20815 = new cljs.core.Keyword(null,"tag","tag",1014018828).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core._EQ_.call(null,"TYPE MISMATCH",G__20815))
{var ann = lt.plugins.elm_light.maybe_strip_hint.call(null,lt.plugins.elm_light.maybe_trim.call(null,cljs.core.second.call(null,cljs.core.re_find.call(null,/But I am inferring that the definition has this type:([\s\S]*$)/m,new cljs.core.Keyword(null,"details","details",2571625908).cljs$core$IFn$_invoke$arity$1(row)))));if(cljs.core.truth_((function (){var and__4873__auto__ = ann;if(cljs.core.truth_(and__4873__auto__))
{return cljs.core.not.call(null,lt.plugins.elm_light.str_contains_QMARK_.call(null,ann,"..."));
} else
{return and__4873__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",1017460895),"Fix annotation",new cljs.core.Keyword(null,"action","action",3885920680),((function (ann,G__20815){
return (function (_,p__20816){var map__20817 = p__20816;var map__20817__$1 = ((cljs.core.seq_QMARK_.call(null,map__20817))?cljs.core.apply.call(null,cljs.core.hash_map,map__20817):map__20817);var to = cljs.core.get.call(null,map__20817__$1,new cljs.core.Keyword(null,"to","to",1013907949));var from = cljs.core.get.call(null,map__20817__$1,new cljs.core.Keyword(null,"from","from",1017056028));return lt.objs.editor.replace.call(null,ed,from,to,ann);
});})(ann,G__20815))
], null)], null);
} else
{return cljs.core.PersistentVector.EMPTY;
}
} else
{if(cljs.core._EQ_.call(null,"NAMING ERROR",G__20815))
{var fixes = cljs.core.filter.call(null,cljs.core.seq,cljs.core.map.call(null,clojure.string.trim,clojure.string.split_lines.call(null,cljs.core.second.call(null,cljs.core.re_find.call(null,/Maybe you want one of the following\?(:?[\s\S]*$)/m,new cljs.core.Keyword(null,"details","details",2571625908).cljs$core$IFn$_invoke$arity$1(row))))));return cljs.core.map.call(null,((function (fixes,G__20815){
return (function (suggestion){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",1017460895),suggestion,new cljs.core.Keyword(null,"action","action",3885920680),((function (fixes,G__20815){
return (function (_,p__20818){var map__20819 = p__20818;var map__20819__$1 = ((cljs.core.seq_QMARK_.call(null,map__20819))?cljs.core.apply.call(null,cljs.core.hash_map,map__20819):map__20819);var to = cljs.core.get.call(null,map__20819__$1,new cljs.core.Keyword(null,"to","to",1013907949));var from = cljs.core.get.call(null,map__20819__$1,new cljs.core.Keyword(null,"from","from",1017056028));return lt.objs.editor.replace.call(null,ed,from,to,suggestion);
});})(fixes,G__20815))
], null);
});})(fixes,G__20815))
,fixes);
} else
{if(cljs.core._EQ_.call(null,"missing type annotation",G__20815))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",1017460895),"Add",new cljs.core.Keyword(null,"action","action",3885920680),((function (G__20815){
return (function (p__20820,p__20821){var map__20822 = p__20820;var map__20822__$1 = ((cljs.core.seq_QMARK_.call(null,map__20822))?cljs.core.apply.call(null,cljs.core.hash_map,map__20822):map__20822);var details = cljs.core.get.call(null,map__20822__$1,new cljs.core.Keyword(null,"details","details",2571625908));var map__20823 = p__20821;var map__20823__$1 = ((cljs.core.seq_QMARK_.call(null,map__20823))?cljs.core.apply.call(null,cljs.core.hash_map,map__20823):map__20823);var from = cljs.core.get.call(null,map__20823__$1,new cljs.core.Keyword(null,"from","from",1017056028));var ann = [cljs.core.str(clojure.string.trim.call(null,cljs.core.second.call(null,cljs.core.re_find.call(null,/I inferred the type annotation so you can copy it into your code:([\s\S]*$)/m,details)))),cljs.core.str("\n")].join('');return lt.objs.editor.replace.call(null,ed,from,ann);
});})(G__20815))
], null)], null);
} else
{if(cljs.core._EQ_.call(null,"unused import",G__20815))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",1017460895),"Remove",new cljs.core.Keyword(null,"action","action",3885920680),((function (G__20815){
return (function (_,p__20824){var map__20825 = p__20824;var map__20825__$1 = ((cljs.core.seq_QMARK_.call(null,map__20825))?cljs.core.apply.call(null,cljs.core.hash_map,map__20825):map__20825);var to = cljs.core.get.call(null,map__20825__$1,new cljs.core.Keyword(null,"to","to",1013907949));var from = cljs.core.get.call(null,map__20825__$1,new cljs.core.Keyword(null,"from","from",1017056028));lt.objs.editor.replace.call(null,ed,from,to,"");
return CodeMirror.commands.deleteLine(lt.objs.editor.__GT_cm_ed.call(null,ed));
});})(G__20815))
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
if(cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__20826_SHARP_){return cljs.core._EQ_.call(null,"error",new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(p1__20826_SHARP_));
}),res)))
{lt.objs.notifos.set_msg_BANG_.call(null,"Elm make returned errors; check you editor or the console for details",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
} else
{}
var seq__20833 = cljs.core.seq.call(null,res);var chunk__20834 = null;var count__20835 = 0;var i__20836 = 0;while(true){
if((i__20836 < count__20835))
{var map__20837 = cljs.core._nth.call(null,chunk__20834,i__20836);var map__20837__$1 = ((cljs.core.seq_QMARK_.call(null,map__20837))?cljs.core.apply.call(null,cljs.core.hash_map,map__20837):map__20837);var row = map__20837__$1;var tag = cljs.core.get.call(null,map__20837__$1,new cljs.core.Keyword(null,"tag","tag",1014018828));var subregion = cljs.core.get.call(null,map__20837__$1,new cljs.core.Keyword(null,"subregion","subregion",1501636774));var region = cljs.core.get.call(null,map__20837__$1,new cljs.core.Keyword(null,"region","region",4374076006));var details = cljs.core.get.call(null,map__20837__$1,new cljs.core.Keyword(null,"details","details",2571625908));var overview = cljs.core.get.call(null,map__20837__$1,new cljs.core.Keyword(null,"overview","overview",1544020203));var type = cljs.core.get.call(null,map__20837__$1,new cljs.core.Keyword(null,"type","type",1017479852));var file = cljs.core.get.call(null,map__20837__$1,new cljs.core.Keyword(null,"file","file",1017047278));var msg_20852 = [cljs.core.str(overview),cljs.core.str("\n"),cljs.core.str(lt.plugins.elm_light.colorize_msg.call(null,details))].join('');if(cljs.core.truth_((function (){var and__4873__auto__ = cljs.core._EQ_.call(null,path,file);if(and__4873__auto__)
{return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["error",null,"warning",null], null), null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [type], null));
} else
{return and__4873__auto__;
}
})()))
{lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"linter-result!","linter-result!",4482067001),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",1124275658),tag,new cljs.core.Keyword(null,"details","details",2571625908),msg_20852,new cljs.core.Keyword(null,"category","category",1064415344),cljs.core.keyword.call(null,type),new cljs.core.Keyword(null,"actions","actions",4147068015),lt.plugins.elm_light.linter_action.call(null,ed,row),new cljs.core.Keyword(null,"code-range","code-range",3297446095),lt.plugins.elm_light.__GT_lt_range.call(null,(function (){var or__4885__auto__ = subregion;if(cljs.core.truth_(or__4885__auto__))
{return or__4885__auto__;
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
var G__20853 = seq__20833;
var G__20854 = chunk__20834;
var G__20855 = count__20835;
var G__20856 = (i__20836 + 1);
seq__20833 = G__20853;
chunk__20834 = G__20854;
count__20835 = G__20855;
i__20836 = G__20856;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__20833);if(temp__4092__auto__)
{var seq__20833__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20833__$1))
{var c__5633__auto__ = cljs.core.chunk_first.call(null,seq__20833__$1);{
var G__20857 = cljs.core.chunk_rest.call(null,seq__20833__$1);
var G__20858 = c__5633__auto__;
var G__20859 = cljs.core.count.call(null,c__5633__auto__);
var G__20860 = 0;
seq__20833 = G__20857;
chunk__20834 = G__20858;
count__20835 = G__20859;
i__20836 = G__20860;
continue;
}
} else
{var map__20838 = cljs.core.first.call(null,seq__20833__$1);var map__20838__$1 = ((cljs.core.seq_QMARK_.call(null,map__20838))?cljs.core.apply.call(null,cljs.core.hash_map,map__20838):map__20838);var row = map__20838__$1;var tag = cljs.core.get.call(null,map__20838__$1,new cljs.core.Keyword(null,"tag","tag",1014018828));var subregion = cljs.core.get.call(null,map__20838__$1,new cljs.core.Keyword(null,"subregion","subregion",1501636774));var region = cljs.core.get.call(null,map__20838__$1,new cljs.core.Keyword(null,"region","region",4374076006));var details = cljs.core.get.call(null,map__20838__$1,new cljs.core.Keyword(null,"details","details",2571625908));var overview = cljs.core.get.call(null,map__20838__$1,new cljs.core.Keyword(null,"overview","overview",1544020203));var type = cljs.core.get.call(null,map__20838__$1,new cljs.core.Keyword(null,"type","type",1017479852));var file = cljs.core.get.call(null,map__20838__$1,new cljs.core.Keyword(null,"file","file",1017047278));var msg_20861 = [cljs.core.str(overview),cljs.core.str("\n"),cljs.core.str(lt.plugins.elm_light.colorize_msg.call(null,details))].join('');if(cljs.core.truth_((function (){var and__4873__auto__ = cljs.core._EQ_.call(null,path,file);if(and__4873__auto__)
{return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["error",null,"warning",null], null), null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [type], null));
} else
{return and__4873__auto__;
}
})()))
{lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"linter-result!","linter-result!",4482067001),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",1124275658),tag,new cljs.core.Keyword(null,"details","details",2571625908),msg_20861,new cljs.core.Keyword(null,"category","category",1064415344),cljs.core.keyword.call(null,type),new cljs.core.Keyword(null,"actions","actions",4147068015),lt.plugins.elm_light.linter_action.call(null,ed,row),new cljs.core.Keyword(null,"code-range","code-range",3297446095),lt.plugins.elm_light.__GT_lt_range.call(null,(function (){var or__4885__auto__ = subregion;if(cljs.core.truth_(or__4885__auto__))
{return or__4885__auto__;
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
var G__20862 = cljs.core.next.call(null,seq__20833__$1);
var G__20863 = null;
var G__20864 = 0;
var G__20865 = 0;
seq__20833 = G__20862;
chunk__20834 = G__20863;
count__20835 = G__20864;
i__20836 = G__20865;
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
lt.plugins.elm_light.__BEH__make_project = (function __BEH__make_project(ed){var info = new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed));var project_path = lt.plugins.elm_light.utils.project_path.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(info));var map__20840 = new cljs.core.Keyword(null,"make-info","make-info",2233727135).cljs$core$IFn$_invoke$arity$1(lt.plugins.elm_light.utils.parse_json_file.call(null,lt.objs.files.join.call(null,project_path,"elm-package.json")));var map__20840__$1 = ((cljs.core.seq_QMARK_.call(null,map__20840))?cljs.core.apply.call(null,cljs.core.hash_map,map__20840):map__20840);var out = cljs.core.get.call(null,map__20840__$1,new cljs.core.Keyword(null,"out","out",1014014656));var main = cljs.core.get.call(null,map__20840__$1,new cljs.core.Keyword(null,"main","main",1017248043));if(cljs.core.truth_((function (){var and__4873__auto__ = main;if(cljs.core.truth_(and__4873__auto__))
{return out;
} else
{return and__4873__auto__;
}
})()))
{lt.objs.notifos.working.call(null,[cljs.core.str("Starting elm make for project: "),cljs.core.str(project_path)].join(''));
return lt.objs.clients.send.call(null,lt.plugins.elm_light.clients.get_eval_client.call(null,ed,new cljs.core.Keyword(null,"editor.elm.make","editor.elm.make",1086078217)),new cljs.core.Keyword(null,"editor.elm.make","editor.elm.make",1086078217),cljs.core.assoc.call(null,info,new cljs.core.Keyword(null,"project-path","project-path",1907176907),project_path,new cljs.core.Keyword(null,"path","path",1017337751),lt.objs.files.join.call(null,project_path,main),new cljs.core.Keyword(null,"outputFile","outputFile",4034596239),lt.objs.files.join.call(null,project_path,out)),new cljs.core.Keyword(null,"only","only",1017320222),ed);
} else
{return lt.plugins.elm_light.missing_make_info_popup.call(null);
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light","make-project","lt.plugins.elm-light/make-project",3492644131),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.__BEH__make_project,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elm.make-project","elm.make-project",2779298292),null], null), null),new cljs.core.Keyword(null,"description","description",3584325486),"Make Elm Project");
lt.plugins.elm_light.__BEH__elm_make_res = (function __BEH__elm_make_res(ed,p__20841){var map__20843 = p__20841;var map__20843__$1 = ((cljs.core.seq_QMARK_.call(null,map__20843))?cljs.core.apply.call(null,cljs.core.hash_map,map__20843):map__20843);var res = cljs.core.get.call(null,map__20843__$1,new cljs.core.Keyword(null,"res","res",1014017042));var outputFile = cljs.core.get.call(null,map__20843__$1,new cljs.core.Keyword(null,"outputFile","outputFile",4034596239));lt.objs.notifos.done_working.call(null,[cljs.core.str("Elm make compiled to: "),cljs.core.str(outputFile)].join(''));
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
lt.plugins.elm_light.__BEH__eval_BANG_ = (function __BEH__eval_BANG_(this$,event){var map__20845 = event;var map__20845__$1 = ((cljs.core.seq_QMARK_.call(null,map__20845))?cljs.core.apply.call(null,cljs.core.hash_map,map__20845):map__20845);var origin = cljs.core.get.call(null,map__20845__$1,new cljs.core.Keyword(null,"origin","origin",4300251800));var info = cljs.core.get.call(null,map__20845__$1,new cljs.core.Keyword(null,"info","info",1017141280));lt.objs.notifos.working.call(null,"Evaluating elm...");
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
lt.plugins.elm_light.__BEH__repl_restart_BANG_ = (function __BEH__repl_restart_BANG_(p__20846){var map__20848 = p__20846;var map__20848__$1 = ((cljs.core.seq_QMARK_.call(null,map__20848))?cljs.core.apply.call(null,cljs.core.hash_map,map__20848):map__20848);var ed = map__20848__$1;var info = cljs.core.get.call(null,map__20848__$1,new cljs.core.Keyword(null,"info","info",1017141280));var temp__4092__auto__ = new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));if(cljs.core.truth_(temp__4092__auto__))
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
lt.plugins.elm_light.__BEH__elm_browse_BANG_ = (function __BEH__elm_browse_BANG_(ed,debug_QMARK_){var path = lt.plugins.elm_light.utils.reactor_path.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed))));var client = lt.plugins.elm_light.clients.get_eval_client.call(null,ed,new cljs.core.Keyword(null,"editor.eval.elm","editor.eval.elm",1083015975));if(cljs.core.truth_((function (){var and__4873__auto__ = client;if(cljs.core.truth_(and__4873__auto__))
{return path;
} else
{return and__4873__auto__;
}
})()))
{lt.objs.notifos.working.call(null,"Opening elm file in browser");
var b_20866 = (function (){var or__4885__auto__ = cljs.core.first.call(null,lt.object.by_tag.call(null,new cljs.core.Keyword(null,"browser","browser",1164844698)));if(cljs.core.truth_(or__4885__auto__))
{return or__4885__auto__;
} else
{return lt.objs.browser.add.call(null);
}
})();var get_url_20867 = ((function (b_20866,path,client){
return (function (){return [cljs.core.str("http://localhost:"),cljs.core.str(new cljs.core.Keyword(null,"reactor-port","reactor-port",4649590590).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client))),cljs.core.str(path),cljs.core.str((cljs.core.truth_(debug_QMARK_)?"?debug":""))].join('');
});})(b_20866,path,client))
;if(cljs.core.truth_(new cljs.core.Keyword(null,"connected","connected",4729661051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client))))
{lt.object.raise.call(null,b_20866,new cljs.core.Keyword(null,"navigate!","navigate!",1766726722),get_url_20867.call(null));
} else
{lt.util.js.wait.call(null,100,((function (b_20866,get_url_20867,path,client){
return (function (){return lt.object.raise.call(null,b_20866,new cljs.core.Keyword(null,"navigate!","navigate!",1766726722),get_url_20867.call(null));
});})(b_20866,get_url_20867,path,client))
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
lt.plugins.elm_light.__BEH__elm_doc_search_results = (function __BEH__elm_doc_search_results(_,p__20849){var vec__20851 = p__20849;var client_id = cljs.core.nth.call(null,vec__20851,0,null);var command = cljs.core.nth.call(null,vec__20851,1,null);var msg = cljs.core.nth.call(null,vec__20851,2,null);return lt.object.raise.call(null,lt.objs.clients.clients,new cljs.core.Keyword(null,"message","message",1968829305),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [client_id,command,lt.plugins.elm_light.elm_ast.search_docs.call(null,new cljs.core.Keyword(null,"search","search",4402534682).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"project-dir","project-dir",4367844171).cljs$core$IFn$_invoke$arity$1(msg))], null));
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
})())].join(''),new cljs.core.Keyword(null,"args","args",1016906831),(function (){var or__4885__auto__ = new cljs.core.Keyword(null,"signatureRaw","signatureRaw",3837738946).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"annotation","annotation",3753828001).cljs$core$IFn$_invoke$arity$1(target));if(cljs.core.truth_(or__4885__auto__))
{return or__4885__auto__;
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
{var client = lt.plugins.elm_light.clients.get_eval_client_if_connected.call(null,ed,new cljs.core.Keyword(null,"editor.elm.ast.parsetext","editor.elm.ast.parsetext",1992138717));var path = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));if(cljs.core.truth_((function (){var and__4873__auto__ = client;if(cljs.core.truth_(and__4873__auto__))
{return (cljs.core._EQ_.call(null,lt.objs.editor.pool.last_active.call(null),ed)) && (!(lt.plugins.elm_light.utils.str_contains.call(null,path,"elm-stuff")));
} else
{return and__4873__auto__;
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
return lt.plugins.elm_light.elm_ast.update_status_for_editor.call(null,ed);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light","elm-editor-disconnected","lt.plugins.elm-light/elm-editor-disconnected",3526187369),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.__BEH__elm_editor_disconnected,new cljs.core.Keyword(null,"desc","desc",1016984067),"Clean up state when project connection for an editor has been disconnected",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"project-disconnected","project-disconnected",2085293025),null], null), null));
lt.plugins.elm_light.__BEH__elm_parse_editor_result = (function __BEH__elm_parse_editor_result(ed,res){var temp__4090__auto___20868 = new cljs.core.Keyword(null,"error","error",1110689146).cljs$core$IFn$_invoke$arity$1(res);if(cljs.core.truth_(temp__4090__auto___20868))
{var error_20869 = temp__4090__auto___20868;lt.object.update_BANG_.call(null,ed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast-status","ast-status",2421112079)], null),cljs.core.assoc,new cljs.core.Keyword(null,"status","status",4416389988),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"error","error",1110689146),error_20869);
} else
{var path_20870 = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));lt.object.update_BANG_.call(null,ed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast-status","ast-status",2421112079)], null),cljs.core.assoc,new cljs.core.Keyword(null,"status","status",4416389988),new cljs.core.Keyword(null,"ok","ok",1013907790),new cljs.core.Keyword(null,"error","error",1110689146),null);
lt.plugins.elm_light.elm_ast.upsert_ast_BANG_.call(null,lt.plugins.elm_light.utils.project_path.call(null,path_20870),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",1017047278),path_20870,new cljs.core.Keyword(null,"ast","ast",1014001140),new cljs.core.Keyword(null,"ast","ast",1014001140).cljs$core$IFn$_invoke$arity$1(res)], null));
}
return lt.plugins.elm_light.elm_ast.update_status_for_editor.call(null,ed);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light","elm-parse-editor-result","lt.plugins.elm-light/elm-parse-editor-result",3556794401),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.__BEH__elm_parse_editor_result,new cljs.core.Keyword(null,"desc","desc",1016984067),"Handle parse results for a parsed editors content",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.elm.ast.parsetext.result","editor.elm.ast.parsetext.result",1834022514),null], null), null));
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
lt.plugins.elm_light.test.deps__GT_named = (function deps__GT_named(deps){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__18902){var vec__18903 = p__18902;var k = cljs.core.nth.call(null,vec__18903,0,null);var v = cljs.core.nth.call(null,vec__18903,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.elm_light.utils.nskw__GT_name.call(null,k),v], null);
}),deps));
});
lt.plugins.elm_light.test.__GT_test_config = (function __GT_test_config(project_cfg){return cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.assoc.call(null,cljs.core.update_in.call(null,project_cfg,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-directories","source-directories",4475397259)], null),lt.plugins.elm_light.test.__GT_test_src_dirs),new cljs.core.Keyword(null,"exposed-modules","exposed-modules",4185867084),cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependencies","dependencies",1517678747)], null),(function (p1__18904_SHARP_){return cljs.core.merge.call(null,p1__18904_SHARP_,lt.plugins.elm_light.test.default_test_deps);
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
return (function (p1__18905_SHARP_){return cljs.core.println.call(null,[cljs.core.str("Test package install: "),cljs.core.str(p1__18905_SHARP_)].join(''));
});})(args,proc))
);
proc.stderr.on("data",((function (args,proc){
return (function (p1__18906_SHARP_){return lt.objs.console.error.call(null,[cljs.core.str(p1__18906_SHARP_)].join(''));
});})(args,proc))
);
proc.on("exit",((function (args,proc){
return (function (p1__18907_SHARP_){if(cljs.core._EQ_.call(null,p1__18907_SHARP_,0))
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
}catch (e11951){var e = e11951;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,e.message], null);
}});
/**
* Format file or all elm files in dir using elm-format.
* If successful returns [true nil]
* If errors returns [false err]
*/
lt.plugins.elm_light.format.format_path = (function format_path(cwd,path){try{require("child_process").execSync([cljs.core.str("elm-format --yes "),cljs.core.str(path)].join(''),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cwd","cwd",1014003170),cwd,new cljs.core.Keyword(null,"stdio","stdio",1123664379),"pipe"], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);
}catch (e11953){var e = e11953;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,e.message], null);
}});
lt.plugins.elm_light.format.handle_format_error = (function handle_format_error(err){lt.objs.notifos.set_msg_BANG_.call(null,"Elm format reported errors. See console for details",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),"error",new cljs.core.Keyword(null,"timeout","timeout",3994960083),5000], null));
return lt.objs.console.error.call(null,err);
});
lt.plugins.elm_light.format.__BEH__elm_format = (function __BEH__elm_format(ed){var temp__4092__auto__ = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));if(cljs.core.truth_(temp__4092__auto__))
{var path = temp__4092__auto__;var pos = lt.objs.editor.__GT_cursor.call(null,ed);var vec__11955 = lt.plugins.elm_light.format.format_path.call(null,lt.plugins.elm_light.utils.project_path.call(null,path),path);var ok_QMARK_ = cljs.core.nth.call(null,vec__11955,0,null);var res = cljs.core.nth.call(null,vec__11955,1,null);if(cljs.core.truth_(ok_QMARK_))
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
{var map__11958 = temp__4092__auto__;var map__11958__$1 = ((cljs.core.seq_QMARK_.call(null,map__11958))?cljs.core.apply.call(null,cljs.core.hash_map,map__11958):map__11958);var to = cljs.core.get.call(null,map__11958__$1,new cljs.core.Keyword(null,"to","to",1013907949));var from = cljs.core.get.call(null,map__11958__$1,new cljs.core.Keyword(null,"from","from",1017056028));var vec__11959 = lt.plugins.elm_light.format.format_input.call(null,cwd,lt.objs.editor.range.call(null,ed,from,to));var ok_QMARK_ = cljs.core.nth.call(null,vec__11959,0,null);var res = cljs.core.nth.call(null,vec__11959,1,null);if(cljs.core.truth_(ok_QMARK_))
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
lt.plugins.elm_light.format.__BEH__elm_format_buffer = (function __BEH__elm_format_buffer(ed){var pos = lt.objs.editor.__GT_cursor.call(null,ed);var vec__11961 = lt.plugins.elm_light.format.format_input.call(null,lt.plugins.elm_light.utils.project_path.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)))),lt.objs.editor.__GT_val.call(null,ed));var ok_QMARK_ = cljs.core.nth.call(null,vec__11961,0,null);var res = cljs.core.nth.call(null,vec__11961,1,null);if(cljs.core.truth_(ok_QMARK_))
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