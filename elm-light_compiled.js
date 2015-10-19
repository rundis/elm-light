if(!lt.util.load.provided_QMARK_('lt.plugins.elm-light')) {
goog.provide('lt.plugins.elm_light');
goog.require('cljs.core');
goog.require('lt.objs.plugins');
goog.require('lt.objs.files');
goog.require('lt.objs.popup');
goog.require('lt.objs.dialogs');
goog.require('lt.objs.popup');
goog.require('lt.objs.notifos');
goog.require('lt.objs.proc');
goog.require('lt.objs.notifos');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.files');
goog.require('lt.objs.clients.tcp');
goog.require('lt.objs.sidebar.clients');
goog.require('lt.objs.plugins');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('lt.objs.clients.tcp');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.dialogs');
goog.require('lt.objs.proc');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.sidebar.clients');
goog.require('lt.objs.command');
lt.plugins.elm_light.elm_plugin_dir = lt.objs.plugins.find_plugin.call(null,"elm-light");
lt.plugins.elm_light.elm_cilent_path = lt.objs.files.join.call(null,lt.plugins.elm_light.elm_plugin_dir,"node","elm-client.js");
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
{return cljs.core.println.call(null,"Elm client out: ",out);
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light","on-out","lt.plugins.elm-light/on-out",4371628293),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.__BEH__on_out,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.out","proc.out",4302083112),null], null), null));
lt.plugins.elm_light.__BEH__on_error = (function __BEH__on_error(this$,data){var out = data.toString();if((new cljs.core.Keyword(null,"buffer","buffer",3930752946).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)).indexOf("Connected") > -1))
{return null;
} else
{cljs.core.println.call(null,"Elm client err: ",out);
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
lt.plugins.elm_light.start_elm_client = (function start_elm_client(p__6615){var map__6617 = p__6615;var map__6617__$1 = ((cljs.core.seq_QMARK_.call(null,map__6617))?cljs.core.apply.call(null,cljs.core.hash_map,map__6617):map__6617);var props = map__6617__$1;var client = cljs.core.get.call(null,map__6617__$1,new cljs.core.Keyword(null,"client","client",3951159101));var path = cljs.core.get.call(null,map__6617__$1,new cljs.core.Keyword(null,"path","path",1017337751));var obj = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.elm-light","connecting-notifier","lt.plugins.elm-light/connecting-notifier",885283650),client);var client_id = lt.objs.clients.__GT_id.call(null,client);lt.objs.notifos.working.call(null,"Connecting..");
return lt.objs.proc.exec.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"command","command",1964298941),process.execPath,new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.elm_light.elm_cilent_path,lt.objs.clients.tcp.port,client_id,lt.plugins.elm_light.bash_escape_spaces.call(null,lt.plugins.elm_light.project_path.call(null,path))], null),new cljs.core.Keyword(null,"cwd","cwd",1014003170),lt.plugins.elm_light.elm_plugin_dir,new cljs.core.Keyword(null,"env","env",1014004831),new cljs.core.PersistentArrayMap(null, 1, ["ATOM_SHELL_INTERNAL_RUN_AS_NODE",1], null),new cljs.core.Keyword(null,"obj","obj",1014014057),obj], null));
});
lt.plugins.elm_light.try_connect = (function try_connect(p__6618){var map__6620 = p__6618;var map__6620__$1 = ((cljs.core.seq_QMARK_.call(null,map__6620))?cljs.core.apply.call(null,cljs.core.hash_map,map__6620):map__6620);var props = map__6620__$1;var info = cljs.core.get.call(null,map__6620__$1,new cljs.core.Keyword(null,"info","info",1017141280));var path = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(info);var client = lt.objs.clients.client_BANG_.call(null,new cljs.core.Keyword(null,"elm.client","elm.client",2509839749));lt.plugins.elm_light.start_elm_client.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",1017337751),path,new cljs.core.Keyword(null,"client","client",3951159101),client], null));
return client;
});
lt.plugins.elm_light.__BEH__lint = (function __BEH__lint(ed){var info = new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed));var cl = lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor.elm.lint","editor.elm.lint",1086056222),new cljs.core.Keyword(null,"origin","origin",4300251800),ed,new cljs.core.Keyword(null,"info","info",1017141280),info,new cljs.core.Keyword(null,"create","create",3956577390),lt.plugins.elm_light.try_connect], null));return lt.objs.clients.send.call(null,cl,new cljs.core.Keyword(null,"editor.elm.lint","editor.elm.lint",1086056222),cljs.core.assoc.call(null,info,new cljs.core.Keyword(null,"project-path","project-path",1907176907),lt.plugins.elm_light.project_path.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(info))),new cljs.core.Keyword(null,"only","only",1017320222),ed);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light","lint","lt.plugins.elm-light/lint",1497250906),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.__BEH__lint,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lint","lint",1017226101),null], null), null),new cljs.core.Keyword(null,"description","description",3584325486),"Lint (/make) a given elm file");
lt.plugins.elm_light.__BEH__elm_lint_res = (function __BEH__elm_lint_res(ed,res){lt.objs.notifos.done_working.call(null,"Elm linted");
var seq__6631_6643 = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__6621_SHARP_){return cljs.core._EQ_.call(null,"warning",new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(p1__6621_SHARP_));
}),res));var chunk__6632_6644 = null;var count__6633_6645 = 0;var i__6634_6646 = 0;while(true){
if((i__6634_6646 < count__6633_6645))
{var l_6647 = cljs.core._nth.call(null,chunk__6632_6644,i__6634_6646);lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.result","editor.result",4030217008),[cljs.core.str(new cljs.core.Keyword(null,"overview","overview",1544020203).cljs$core$IFn$_invoke$arity$1(l_6647)),cljs.core.str("\n"),cljs.core.str(new cljs.core.Keyword(null,"details","details",2571625908).cljs$core$IFn$_invoke$arity$1(l_6647))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"region","region",4374076006).cljs$core$IFn$_invoke$arity$1(l_6647))) - 1)], null));
{
var G__6648 = seq__6631_6643;
var G__6649 = chunk__6632_6644;
var G__6650 = count__6633_6645;
var G__6651 = (i__6634_6646 + 1);
seq__6631_6643 = G__6648;
chunk__6632_6644 = G__6649;
count__6633_6645 = G__6650;
i__6634_6646 = G__6651;
continue;
}
} else
{var temp__4092__auto___6652 = cljs.core.seq.call(null,seq__6631_6643);if(temp__4092__auto___6652)
{var seq__6631_6653__$1 = temp__4092__auto___6652;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6631_6653__$1))
{var c__5632__auto___6654 = cljs.core.chunk_first.call(null,seq__6631_6653__$1);{
var G__6655 = cljs.core.chunk_rest.call(null,seq__6631_6653__$1);
var G__6656 = c__5632__auto___6654;
var G__6657 = cljs.core.count.call(null,c__5632__auto___6654);
var G__6658 = 0;
seq__6631_6643 = G__6655;
chunk__6632_6644 = G__6656;
count__6633_6645 = G__6657;
i__6634_6646 = G__6658;
continue;
}
} else
{var l_6659 = cljs.core.first.call(null,seq__6631_6653__$1);lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.result","editor.result",4030217008),[cljs.core.str(new cljs.core.Keyword(null,"overview","overview",1544020203).cljs$core$IFn$_invoke$arity$1(l_6659)),cljs.core.str("\n"),cljs.core.str(new cljs.core.Keyword(null,"details","details",2571625908).cljs$core$IFn$_invoke$arity$1(l_6659))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"region","region",4374076006).cljs$core$IFn$_invoke$arity$1(l_6659))) - 1)], null));
{
var G__6660 = cljs.core.next.call(null,seq__6631_6653__$1);
var G__6661 = null;
var G__6662 = 0;
var G__6663 = 0;
seq__6631_6643 = G__6660;
chunk__6632_6644 = G__6661;
count__6633_6645 = G__6662;
i__6634_6646 = G__6663;
continue;
}
}
} else
{}
}
break;
}
var seq__6635 = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__6622_SHARP_){return cljs.core._EQ_.call(null,"error",new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(p1__6622_SHARP_));
}),res));var chunk__6636 = null;var count__6637 = 0;var i__6638 = 0;while(true){
if((i__6638 < count__6637))
{var l = cljs.core._nth.call(null,chunk__6636,i__6638);lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.exception","editor.exception",3983021184),[cljs.core.str(new cljs.core.Keyword(null,"overview","overview",1544020203).cljs$core$IFn$_invoke$arity$1(l)),cljs.core.str("\n"),cljs.core.str(new cljs.core.Keyword(null,"details","details",2571625908).cljs$core$IFn$_invoke$arity$1(l))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"region","region",4374076006).cljs$core$IFn$_invoke$arity$1(l))) - 1)], null));
{
var G__6664 = seq__6635;
var G__6665 = chunk__6636;
var G__6666 = count__6637;
var G__6667 = (i__6638 + 1);
seq__6635 = G__6664;
chunk__6636 = G__6665;
count__6637 = G__6666;
i__6638 = G__6667;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__6635);if(temp__4092__auto__)
{var seq__6635__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6635__$1))
{var c__5632__auto__ = cljs.core.chunk_first.call(null,seq__6635__$1);{
var G__6668 = cljs.core.chunk_rest.call(null,seq__6635__$1);
var G__6669 = c__5632__auto__;
var G__6670 = cljs.core.count.call(null,c__5632__auto__);
var G__6671 = 0;
seq__6635 = G__6668;
chunk__6636 = G__6669;
count__6637 = G__6670;
i__6638 = G__6671;
continue;
}
} else
{var l = cljs.core.first.call(null,seq__6635__$1);lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.exception","editor.exception",3983021184),[cljs.core.str(new cljs.core.Keyword(null,"overview","overview",1544020203).cljs$core$IFn$_invoke$arity$1(l)),cljs.core.str("\n"),cljs.core.str(new cljs.core.Keyword(null,"details","details",2571625908).cljs$core$IFn$_invoke$arity$1(l))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"region","region",4374076006).cljs$core$IFn$_invoke$arity$1(l))) - 1)], null));
{
var G__6672 = cljs.core.next.call(null,seq__6635__$1);
var G__6673 = null;
var G__6674 = 0;
var G__6675 = 0;
seq__6635 = G__6672;
chunk__6636 = G__6673;
count__6637 = G__6674;
i__6638 = G__6675;
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
lt.plugins.elm_light.__BEH__connect = (function __BEH__connect(this$,path){return lt.plugins.elm_light.try_connect.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"info","info",1017141280),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",1017337751),path], null)], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light","connect","lt.plugins.elm-light/connect",2444734323),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.__BEH__connect,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"connect","connect",1965255772),null], null), null));
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
var seq__6639_6676 = cljs.core.seq.call(null,lt.object.by_tag.call(null,new cljs.core.Keyword(null,"editor.elm","editor.elm",3751348247)));var chunk__6640_6677 = null;var count__6641_6678 = 0;var i__6642_6679 = 0;while(true){
if((i__6642_6679 < count__6641_6678))
{var ed_6680 = cljs.core._nth.call(null,chunk__6640_6677,i__6642_6679);cljs.core.println.call(null,lt.object.__GT_id.call(null,ed_6680));
cljs.core.println.call(null,new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed_6680)));
{
var G__6681 = seq__6639_6676;
var G__6682 = chunk__6640_6677;
var G__6683 = count__6641_6678;
var G__6684 = (i__6642_6679 + 1);
seq__6639_6676 = G__6681;
chunk__6640_6677 = G__6682;
count__6641_6678 = G__6683;
i__6642_6679 = G__6684;
continue;
}
} else
{var temp__4092__auto___6685 = cljs.core.seq.call(null,seq__6639_6676);if(temp__4092__auto___6685)
{var seq__6639_6686__$1 = temp__4092__auto___6685;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6639_6686__$1))
{var c__5632__auto___6687 = cljs.core.chunk_first.call(null,seq__6639_6686__$1);{
var G__6688 = cljs.core.chunk_rest.call(null,seq__6639_6686__$1);
var G__6689 = c__5632__auto___6687;
var G__6690 = cljs.core.count.call(null,c__5632__auto___6687);
var G__6691 = 0;
seq__6639_6676 = G__6688;
chunk__6640_6677 = G__6689;
count__6641_6678 = G__6690;
i__6642_6679 = G__6691;
continue;
}
} else
{var ed_6692 = cljs.core.first.call(null,seq__6639_6686__$1);cljs.core.println.call(null,lt.object.__GT_id.call(null,ed_6692));
cljs.core.println.call(null,new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed_6692)));
{
var G__6693 = cljs.core.next.call(null,seq__6639_6686__$1);
var G__6694 = null;
var G__6695 = 0;
var G__6696 = 0;
seq__6639_6676 = G__6693;
chunk__6640_6677 = G__6694;
count__6641_6678 = G__6695;
i__6642_6679 = G__6696;
continue;
}
}
} else
{}
}
break;
}
}

//# sourceMappingURL=elm-light_compiled.js.map