if(!lt.util.load.provided_QMARK_('lt.plugins.elm-light')) {
goog.provide('lt.plugins.elm_light');
goog.require('cljs.core');
goog.require('lt.objs.plugins');
goog.require('lt.objs.files');
goog.require('lt.objs.popup');
goog.require('lt.objs.dialogs');
goog.require('lt.objs.popup');
goog.require('lt.plugins.auto_complete');
goog.require('lt.objs.notifos');
goog.require('lt.objs.proc');
goog.require('lt.objs.notifos');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.files');
goog.require('lt.objs.clients.tcp');
goog.require('lt.objs.sidebar.clients');
goog.require('lt.objs.plugins');
goog.require('lt.plugins.auto_complete');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('lt.objs.clients.tcp');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.dialogs');
goog.require('lt.objs.console');
goog.require('lt.objs.proc');
goog.require('lt.objs.editor');
goog.require('lt.objs.console');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.sidebar.clients');
goog.require('lt.objs.command');
lt.plugins.elm_light.elm_plugin_dir = lt.objs.plugins.find_plugin.call(null,"elm-light");
lt.plugins.elm_light.elm_cilent_path = lt.objs.files.join.call(null,lt.plugins.elm_light.elm_plugin_dir,"node","elm-client.js");
lt.plugins.elm_light.symbol_token_QMARK_ = (function symbol_token_QMARK_(s){return cljs.core.re_seq.call(null,/[\w\$_\-\.\*\+\\/\?\><!]/,s);
});
lt.plugins.elm_light.find_symbol_at_cursor = (function find_symbol_at_cursor(ed){var loc = lt.objs.editor.__GT_cursor.call(null,ed);var token_left = lt.objs.editor.__GT_token.call(null,ed,loc);var token_right = lt.objs.editor.__GT_token.call(null,ed,cljs.core.update_in.call(null,loc,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ch","ch",1013907415)], null),cljs.core.inc));var or__4884__auto__ = (cljs.core.truth_(lt.plugins.elm_light.symbol_token_QMARK_.call(null,new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(token_right)))?cljs.core.assoc.call(null,token_right,new cljs.core.Keyword(null,"loc","loc",1014011570),loc):null);if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{if(cljs.core.truth_(lt.plugins.elm_light.symbol_token_QMARK_.call(null,new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(token_left))))
{return cljs.core.assoc.call(null,token_left,new cljs.core.Keyword(null,"loc","loc",1014011570),loc);
} else
{return null;
}
}
});
lt.plugins.elm_light.project_path = (function project_path(path){if(cljs.core.truth_(lt.objs.files.dir_QMARK_.call(null,path)))
{return path;
} else
{var temp__4090__auto__ = lt.objs.files.walk_up_find.call(null,path,"elm-package.json");if(cljs.core.truth_(temp__4090__auto__))
{var pkg_json = temp__4090__auto__;return lt.objs.files.parent.call(null,pkg_json);
} else
{return lt.objs.files.parent.call(null,path);
}
}
});
lt.plugins.elm_light.__BEH__on_out = (function __BEH__on_out(this$,data){var out = data.toString();if((out.indexOf("Connected") > -1))
{lt.objs.notifos.done_working.call(null);
return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"connected","connected",4729661051),true], null));
} else
{return cljs.core.println.call(null,out);
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light","on-out","lt.plugins.elm-light/on-out",4371628293),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.__BEH__on_out,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.out","proc.out",4302083112),null], null), null));
lt.plugins.elm_light.__BEH__on_error = (function __BEH__on_error(this$,data){var out = data.toString();if((new cljs.core.Keyword(null,"buffer","buffer",3930752946).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)).indexOf("Connected") > -1))
{return null;
} else
{cljs.core.println.call(null,out);
return lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buffer","buffer",3930752946)], null),cljs.core.str,data);
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light","on-error","lt.plugins.elm-light/on-error",824317635),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.__BEH__on_error,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.error","proc.error",4143512802),null], null), null));
lt.plugins.elm_light.__BEH__on_exit = (function __BEH__on_exit(this$,data){if(cljs.core.truth_(new cljs.core.Keyword(null,"connected","connected",4729661051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))))
{} else
{lt.objs.notifos.done_working.call(null);
lt.objs.clients.rem_BANG_.call(null,new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
}
lt.objs.proc.kill_all.call(null,new cljs.core.Keyword(null,"procs","procs",1120844623).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
return lt.object.destroy_BANG_.call(null,this$);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light","on-exit","lt.plugins.elm-light/on-exit",2872985361),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.__BEH__on_exit,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.exit","proc.exit",4162906152),null], null), null));
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light","connecting-notifier","lt.plugins.elm-light/connecting-notifier",885283650),new cljs.core.Keyword(null,"triggers","triggers",2516997421),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.elm-light","on-exit","lt.plugins.elm-light/on-exit",2872985361),new cljs.core.Keyword("lt.plugins.elm-light","on-error","lt.plugins.elm-light/on-error",824317635),new cljs.core.Keyword("lt.plugins.elm-light","on-out","lt.plugins.elm-light/on-out",4371628293)], null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,client){lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",3951159101),client,new cljs.core.Keyword(null,"buffer","buffer",3930752946),""], null));
return null;
}));
lt.plugins.elm_light.escape_spaces = (function escape_spaces(s){if(cljs.core._EQ_.call(null,lt.objs.files.separator,"\\"))
{return [cljs.core.str("\""),cljs.core.str(s),cljs.core.str("\"")].join('');
} else
{return s;
}
});
lt.plugins.elm_light.bash_escape_spaces = (function bash_escape_spaces(s){if(cljs.core.truth_(s))
{return clojure.string.replace.call(null,s," ","\\ ");
} else
{return null;
}
});
lt.plugins.elm_light.start_elm_client = (function start_elm_client(p__9144){var map__9146 = p__9144;var map__9146__$1 = ((cljs.core.seq_QMARK_.call(null,map__9146))?cljs.core.apply.call(null,cljs.core.hash_map,map__9146):map__9146);var props = map__9146__$1;var client = cljs.core.get.call(null,map__9146__$1,new cljs.core.Keyword(null,"client","client",3951159101));var path = cljs.core.get.call(null,map__9146__$1,new cljs.core.Keyword(null,"path","path",1017337751));var obj = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.elm-light","connecting-notifier","lt.plugins.elm-light/connecting-notifier",885283650),client);var client_id = lt.objs.clients.__GT_id.call(null,client);lt.objs.notifos.working.call(null,"Connecting..");
return lt.objs.proc.exec.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"command","command",1964298941),process.execPath,new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.elm_light.elm_cilent_path,lt.objs.clients.tcp.port,client_id,lt.plugins.elm_light.bash_escape_spaces.call(null,lt.plugins.elm_light.project_path.call(null,path))], null),new cljs.core.Keyword(null,"cwd","cwd",1014003170),lt.plugins.elm_light.elm_plugin_dir,new cljs.core.Keyword(null,"env","env",1014004831),new cljs.core.PersistentArrayMap(null, 1, ["ATOM_SHELL_INTERNAL_RUN_AS_NODE",1], null),new cljs.core.Keyword(null,"obj","obj",1014014057),obj], null));
});
lt.plugins.elm_light.try_connect = (function try_connect(p__9147){var map__9149 = p__9147;var map__9149__$1 = ((cljs.core.seq_QMARK_.call(null,map__9149))?cljs.core.apply.call(null,cljs.core.hash_map,map__9149):map__9149);var props = map__9149__$1;var info = cljs.core.get.call(null,map__9149__$1,new cljs.core.Keyword(null,"info","info",1017141280));var path = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(info);var client = lt.objs.clients.client_BANG_.call(null,new cljs.core.Keyword(null,"elm.client","elm.client",2509839749));lt.plugins.elm_light.start_elm_client.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",1017337751),path,new cljs.core.Keyword(null,"client","client",3951159101),client], null));
return client;
});
lt.plugins.elm_light.__BEH__lint = (function __BEH__lint(ed){var info = new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed));var cl = lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor.elm.lint","editor.elm.lint",1086056222),new cljs.core.Keyword(null,"origin","origin",4300251800),ed,new cljs.core.Keyword(null,"info","info",1017141280),info,new cljs.core.Keyword(null,"create","create",3956577390),lt.plugins.elm_light.try_connect], null));lt.objs.notifos.working.call(null,[cljs.core.str("Starting elm linting of: "),cljs.core.str(new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(info))].join(''));
return lt.objs.clients.send.call(null,cl,new cljs.core.Keyword(null,"editor.elm.lint","editor.elm.lint",1086056222),cljs.core.assoc.call(null,info,new cljs.core.Keyword(null,"project-path","project-path",1907176907),lt.plugins.elm_light.project_path.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(info))),new cljs.core.Keyword(null,"only","only",1017320222),ed);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light","lint","lt.plugins.elm-light/lint",1497250906),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.__BEH__lint,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lint","lint",1017226101),null], null), null),new cljs.core.Keyword(null,"description","description",3584325486),"Lint (/make) a given elm file");
lt.plugins.elm_light.__BEH__elm_lint_res = (function __BEH__elm_lint_res(ed,res){var path = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));lt.objs.notifos.done_working.call(null,"Elm linted");
var seq__9160_9169 = cljs.core.seq.call(null,cljs.core.filter.call(null,((function (path){
return (function (p1__9150_SHARP_){return (cljs.core._EQ_.call(null,path,new cljs.core.Keyword(null,"file","file",1017047278).cljs$core$IFn$_invoke$arity$1(p1__9150_SHARP_))) && (cljs.core._EQ_.call(null,"warning",new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(p1__9150_SHARP_)));
});})(path))
,res));var chunk__9161_9170 = null;var count__9162_9171 = 0;var i__9163_9172 = 0;while(true){
if((i__9163_9172 < count__9162_9171))
{var l_9173 = cljs.core._nth.call(null,chunk__9161_9170,i__9163_9172);lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.result","editor.result",4030217008),[cljs.core.str(new cljs.core.Keyword(null,"overview","overview",1544020203).cljs$core$IFn$_invoke$arity$1(l_9173)),cljs.core.str("\n"),cljs.core.str(new cljs.core.Keyword(null,"details","details",2571625908).cljs$core$IFn$_invoke$arity$1(l_9173))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"region","region",4374076006).cljs$core$IFn$_invoke$arity$1(l_9173))) - 1)], null));
{
var G__9174 = seq__9160_9169;
var G__9175 = chunk__9161_9170;
var G__9176 = count__9162_9171;
var G__9177 = (i__9163_9172 + 1);
seq__9160_9169 = G__9174;
chunk__9161_9170 = G__9175;
count__9162_9171 = G__9176;
i__9163_9172 = G__9177;
continue;
}
} else
{var temp__4092__auto___9178 = cljs.core.seq.call(null,seq__9160_9169);if(temp__4092__auto___9178)
{var seq__9160_9179__$1 = temp__4092__auto___9178;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9160_9179__$1))
{var c__5632__auto___9180 = cljs.core.chunk_first.call(null,seq__9160_9179__$1);{
var G__9181 = cljs.core.chunk_rest.call(null,seq__9160_9179__$1);
var G__9182 = c__5632__auto___9180;
var G__9183 = cljs.core.count.call(null,c__5632__auto___9180);
var G__9184 = 0;
seq__9160_9169 = G__9181;
chunk__9161_9170 = G__9182;
count__9162_9171 = G__9183;
i__9163_9172 = G__9184;
continue;
}
} else
{var l_9185 = cljs.core.first.call(null,seq__9160_9179__$1);lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.result","editor.result",4030217008),[cljs.core.str(new cljs.core.Keyword(null,"overview","overview",1544020203).cljs$core$IFn$_invoke$arity$1(l_9185)),cljs.core.str("\n"),cljs.core.str(new cljs.core.Keyword(null,"details","details",2571625908).cljs$core$IFn$_invoke$arity$1(l_9185))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"region","region",4374076006).cljs$core$IFn$_invoke$arity$1(l_9185))) - 1)], null));
{
var G__9186 = cljs.core.next.call(null,seq__9160_9179__$1);
var G__9187 = null;
var G__9188 = 0;
var G__9189 = 0;
seq__9160_9169 = G__9186;
chunk__9161_9170 = G__9187;
count__9162_9171 = G__9188;
i__9163_9172 = G__9189;
continue;
}
}
} else
{}
}
break;
}
var seq__9164 = cljs.core.seq.call(null,cljs.core.filter.call(null,((function (path){
return (function (p1__9151_SHARP_){return cljs.core._EQ_.call(null,"error",new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(p1__9151_SHARP_));
});})(path))
,res));var chunk__9165 = null;var count__9166 = 0;var i__9167 = 0;while(true){
if((i__9167 < count__9166))
{var l = cljs.core._nth.call(null,chunk__9165,i__9167);if(cljs.core._EQ_.call(null,path,new cljs.core.Keyword(null,"file","file",1017047278).cljs$core$IFn$_invoke$arity$1(l)))
{lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.exception","editor.exception",3983021184),[cljs.core.str(new cljs.core.Keyword(null,"overview","overview",1544020203).cljs$core$IFn$_invoke$arity$1(l)),cljs.core.str("\n"),cljs.core.str(new cljs.core.Keyword(null,"details","details",2571625908).cljs$core$IFn$_invoke$arity$1(l))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"region","region",4374076006).cljs$core$IFn$_invoke$arity$1(l))) - 1)], null));
} else
{var out_9190 = new cljs.core.Keyword(null,"overview","overview",1544020203).cljs$core$IFn$_invoke$arity$1(l);lt.objs.console.verbatim.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),out_9190], null)),": "),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em.line","em.line",3623844076),"[Elm error]"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em.file","em.file",3623665268),new cljs.core.Keyword(null,"file","file",1017047278).cljs$core$IFn$_invoke$arity$1(l)], null)),"error");
}
{
var G__9191 = seq__9164;
var G__9192 = chunk__9165;
var G__9193 = count__9166;
var G__9194 = (i__9167 + 1);
seq__9164 = G__9191;
chunk__9165 = G__9192;
count__9166 = G__9193;
i__9167 = G__9194;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__9164);if(temp__4092__auto__)
{var seq__9164__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9164__$1))
{var c__5632__auto__ = cljs.core.chunk_first.call(null,seq__9164__$1);{
var G__9195 = cljs.core.chunk_rest.call(null,seq__9164__$1);
var G__9196 = c__5632__auto__;
var G__9197 = cljs.core.count.call(null,c__5632__auto__);
var G__9198 = 0;
seq__9164 = G__9195;
chunk__9165 = G__9196;
count__9166 = G__9197;
i__9167 = G__9198;
continue;
}
} else
{var l = cljs.core.first.call(null,seq__9164__$1);if(cljs.core._EQ_.call(null,path,new cljs.core.Keyword(null,"file","file",1017047278).cljs$core$IFn$_invoke$arity$1(l)))
{lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.exception","editor.exception",3983021184),[cljs.core.str(new cljs.core.Keyword(null,"overview","overview",1544020203).cljs$core$IFn$_invoke$arity$1(l)),cljs.core.str("\n"),cljs.core.str(new cljs.core.Keyword(null,"details","details",2571625908).cljs$core$IFn$_invoke$arity$1(l))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"region","region",4374076006).cljs$core$IFn$_invoke$arity$1(l))) - 1)], null));
} else
{var out_9199 = new cljs.core.Keyword(null,"overview","overview",1544020203).cljs$core$IFn$_invoke$arity$1(l);lt.objs.console.verbatim.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),out_9199], null)),": "),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em.line","em.line",3623844076),"[Elm error]"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em.file","em.file",3623665268),new cljs.core.Keyword(null,"file","file",1017047278).cljs$core$IFn$_invoke$arity$1(l)], null)),"error");
}
{
var G__9200 = cljs.core.next.call(null,seq__9164__$1);
var G__9201 = null;
var G__9202 = 0;
var G__9203 = 0;
seq__9164 = G__9200;
chunk__9165 = G__9201;
count__9166 = G__9202;
i__9167 = G__9203;
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
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light","elm-lint-res","lt.plugins.elm-light/elm-lint-res",2508500808),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.__BEH__elm_lint_res,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elm.lint.res","elm.lint.res",4381822959),null], null), null));
lt.plugins.elm_light.__BEH__trigger_update_hints = (function __BEH__trigger_update_hints(ed,res){var temp__4092__auto__ = new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));if(cljs.core.truth_(temp__4092__auto__))
{var default_client = temp__4092__auto__;if(cljs.core.truth_(cljs.core.deref.call(null,default_client)))
{var info = new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed));var command = new cljs.core.Keyword(null,"editor.elm.hint","editor.elm.hint",1085937058);var token = new cljs.core.Keyword("lt.plugins.elm-light","token","lt.plugins.elm-light/token",1134194276).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed));return lt.objs.clients.send.call(null,lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),command,new cljs.core.Keyword(null,"info","info",1017141280),info,new cljs.core.Keyword(null,"origin","origin",4300251800),ed,new cljs.core.Keyword(null,"create","create",3956577390),lt.plugins.elm_light.try_connect], null)),command,cljs.core.assoc.call(null,info,new cljs.core.Keyword(null,"token","token",1124445547),token),new cljs.core.Keyword(null,"only","only",1017320222),ed);
} else
{return null;
}
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light","trigger-update-hints","lt.plugins.elm-light/trigger-update-hints",4259532200),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.__BEH__trigger_update_hints,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.elm.hints.update!","editor.elm.hints.update!",2726958399),null], null), null),new cljs.core.Keyword(null,"debounce","debounce",1556599227),100);
lt.plugins.elm_light.create_hints = (function create_hints(completions){return cljs.core.map.call(null,(function (p1__9168_SHARP_){return {"text": new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(p1__9168_SHARP_), "completion": new cljs.core.Keyword(null,"completion","completion",4767668046).cljs$core$IFn$_invoke$arity$1(p1__9168_SHARP_)};
}),completions);
});
lt.plugins.elm_light.__BEH__finish_update_hints = (function __BEH__finish_update_hints(ed,res){if(cljs.core.truth_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null)))
{lt.object.merge_BANG_.call(null,ed,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.elm-light","hints","lt.plugins.elm-light/hints",1123432849),lt.plugins.elm_light.create_hints.call(null,res)], null));
lt.object.raise.call(null,lt.plugins.auto_complete.hinter,new cljs.core.Keyword(null,"refresh!","refresh!",4597922840));
} else
{}
return lt.objs.notifos.done_working.call(null);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light","finish-update-hints","lt.plugins.elm-light/finish-update-hints",2276477083),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.__BEH__finish_update_hints,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.elm.hints.result","editor.elm.hints.result",2636151706),null], null), null));
lt.plugins.elm_light.__BEH__use_local_hints = (function __BEH__use_local_hints(ed,hints,token){if(cljs.core.not_EQ_.call(null,token,new cljs.core.Keyword("lt.plugins.elm-light","token","lt.plugins.elm-light/token",1134194276).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed))))
{lt.object.merge_BANG_.call(null,ed,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.elm-light","token","lt.plugins.elm-light/token",1134194276),token], null));
lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.elm.hints.update!","editor.elm.hints.update!",2726958399));
} else
{}
var temp__4090__auto__ = new cljs.core.Keyword("lt.plugins.elm-light","hints","lt.plugins.elm-light/hints",1123432849).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed));if(cljs.core.truth_(temp__4090__auto__))
{var elm_hints = temp__4090__auto__;return cljs.core.concat.call(null,elm_hints,hints);
} else
{return hints;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light","use-local-hints","lt.plugins.elm-light/use-local-hints",1271577785),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.__BEH__use_local_hints,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hints+","hints+",4091697745),null], null), null));
lt.plugins.elm_light.__BEH__connect = (function __BEH__connect(this$,path){return lt.plugins.elm_light.try_connect.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"info","info",1017141280),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",1017337751),path], null)], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light","connect","lt.plugins.elm-light/connect",2444734323),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.__BEH__connect,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"connect","connect",1965255772),null], null), null));
lt.plugins.elm_light.__BEH__elm_doc_search = (function __BEH__elm_doc_search(this$,cur){cljs.core.println.call(null,"in types+");
return cljs.core.conj.call(null,cur,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1116631654),"elm",new cljs.core.Keyword(null,"trigger","trigger",4248979754),new cljs.core.Keyword(null,"docs.elm.search","docs.elm.search",737241333),new cljs.core.Keyword(null,"file-types","file-types",1727875162),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["elm",null], null), null)], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light","elm-doc-search","lt.plugins.elm-light/elm-doc-search",546131961),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.__BEH__elm_doc_search,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"types+","types+",4450069060),null], null), null));
lt.plugins.elm_light.__BEH__elm_doc = (function __BEH__elm_doc(ed){var token = lt.plugins.elm_light.find_symbol_at_cursor.call(null,ed);var command = new cljs.core.Keyword(null,"editor.elm.doc","editor.elm.doc",1570413537);var info = cljs.core.assoc.call(null,cljs.core.deref.call(null,ed).call(null,new cljs.core.Keyword(null,"info","info",1017141280)),new cljs.core.Keyword(null,"loc","loc",1014011570),new cljs.core.Keyword(null,"loc","loc",1014011570).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"sym","sym",1014018617),new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(token));if(cljs.core.truth_(token))
{return lt.objs.clients.send.call(null,lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),command,new cljs.core.Keyword(null,"info","info",1017141280),info,new cljs.core.Keyword(null,"origin","origin",4300251800),ed,new cljs.core.Keyword(null,"create","create",3956577390),lt.plugins.elm_light.try_connect], null)),command,info,new cljs.core.Keyword(null,"only","only",1017320222),ed);
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light","elm-doc","lt.plugins.elm-light/elm-doc",3124390860),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.__BEH__elm_doc,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.doc","editor.doc",3751347369),null], null), null));
lt.plugins.elm_light.__BEH__print_elm_doc = (function __BEH__print_elm_doc(ed,result){lt.objs.notifos.done_working.call(null);
if(cljs.core.not.call(null,result))
{return lt.objs.notifos.set_msg_BANG_.call(null,"No docs found.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
} else
{return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.doc.show!","editor.doc.show!",1417900223),result);
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light","print-elm-doc","lt.plugins.elm-light/print-elm-doc",4221800172),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.__BEH__print_elm_doc,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.elm.doc.result","editor.elm.doc.result",2661625326),null], null), null));
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light","elm-lang","lt.plugins.elm-light/elm-lang",1051216304),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elm.lang","elm.lang",1176612264),null], null), null));
lt.plugins.elm_light.elm = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.elm-light","elm-lang","lt.plugins.elm-light/elm-lang",1051216304));
lt.objs.sidebar.clients.add_connector.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),"Elm",new cljs.core.Keyword(null,"desc","desc",1016984067),"Select a directory to serve as the root of your elm project.",new cljs.core.Keyword(null,"connect","connect",1965255772),(function (){return lt.objs.dialogs.dir.call(null,lt.plugins.elm_light.elm,new cljs.core.Keyword(null,"connect","connect",1965255772));
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"elm.lint","elm.lint",1176619965),new cljs.core.Keyword(null,"desc","desc",1016984067),"Elm: Lint selected file",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"lint","lint",1017226101));
} else
{return null;
}
})], null));
}

//# sourceMappingURL=elm-light_compiled.js.map