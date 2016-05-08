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
cljs.core.async.impl.protocols.ReadPort = (function (){var obj18007 = {};return obj18007;
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
cljs.core.async.impl.protocols.WritePort = (function (){var obj18009 = {};return obj18009;
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
cljs.core.async.impl.protocols.Channel = (function (){var obj18011 = {};return obj18011;
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
cljs.core.async.impl.protocols.Handler = (function (){var obj18013 = {};return obj18013;
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
cljs.core.async.impl.protocols.Buffer = (function (){var obj18015 = {};return obj18015;
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
cljs.core.async.impl.protocols.UnblockingBuffer = (function (){var obj18017 = {};return obj18017;
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
var G__17972 = (cnt + 1);
cnt = G__17972;
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
{var v_17973 = this$.pop();if(keep_QMARK_.call(null,v_17973))
{this$.unshift(v_17973);
} else
{}
{
var G__17974 = (x + 1);
x = G__17974;
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
var count_18003 = 0;while(true){
var m_18004 = cljs.core.async.impl.dispatch.tasks.pop();if((m_18004 == null))
{} else
{m_18004.call(null);
if((count_18003 < cljs.core.async.impl.dispatch.TASK_BATCH_SIZE))
{{
var G__18005 = (count_18003 + 1);
count_18003 = G__18005;
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
cljs.core.async.impl.channels.box = (function box(val){if(typeof cljs.core.async.impl.channels.t17978 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.impl.channels.t17978 = (function (val,box,meta17979){
this.val = val;
this.box = box;
this.meta17979 = meta17979;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
cljs.core.async.impl.channels.t17978.cljs$lang$type = true;
cljs.core.async.impl.channels.t17978.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t17978";
cljs.core.async.impl.channels.t17978.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async.impl.channels/t17978");
});
cljs.core.async.impl.channels.t17978.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.val;
});
cljs.core.async.impl.channels.t17978.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17980){var self__ = this;
var _17980__$1 = this;return self__.meta17979;
});
cljs.core.async.impl.channels.t17978.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17980,meta17979__$1){var self__ = this;
var _17980__$1 = this;return (new cljs.core.async.impl.channels.t17978(self__.val,self__.box,meta17979__$1));
});
cljs.core.async.impl.channels.__GT_t17978 = (function __GT_t17978(val__$1,box__$1,meta17979){return (new cljs.core.async.impl.channels.t17978(val__$1,box__$1,meta17979));
});
}
return (new cljs.core.async.impl.channels.t17978(val,box,null));
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
var taker_17991 = self__.takes.pop();if((taker_17991 == null))
{} else
{if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker_17991))
{var take_cb_17992 = cljs.core.async.impl.protocols.commit.call(null,taker_17991);cljs.core.async.impl.dispatch.run.call(null,((function (take_cb_17992,taker_17991,this$__$1){
return (function (){return take_cb_17992.call(null,null);
});})(take_cb_17992,taker_17991,this$__$1))
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
var G__18038 = (level + 1);
level = G__18038;
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
var skip_list_node__3 = (function (k,v,level){var arr = (new Array((level + 1)));var i_18039 = 0;while(true){
if((i_18039 < arr.length))
{(arr[i_18039] = null);
{
var G__18040 = (i_18039 + 1);
i_18039 = G__18040;
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
var G__18041 = x_SINGLEQUOTE_;
x__$1 = G__18041;
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
var G__18042 = x__$1;
var G__18043 = k;
var G__18044 = (level - 1);
var G__18045 = update;
x = G__18042;
k = G__18043;
level = G__18044;
update = G__18045;
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
{var i_18046 = (self__.level + 1);while(true){
if((i_18046 <= (new_level + 1)))
{(update[i_18046] = self__.header);
{
var G__18047 = (i_18046 + 1);
i_18046 = G__18047;
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
{var i_18048 = 0;while(true){
if((i_18048 <= self__.level))
{var links_18049 = (update[i_18048]).forward;if(((links_18049[i_18048]) === x__$1))
{(links_18049[i_18048] = (x__$1.forward[i_18048]));
{
var G__18050 = (i_18048 + 1);
i_18048 = G__18050;
continue;
}
} else
{{
var G__18051 = (i_18048 + 1);
i_18048 = G__18051;
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
var G__18052 = x_SINGLEQUOTE_;
x__$1 = G__18052;
continue;
}
}
}
break;
}
})();if(!((nx == null)))
{{
var G__18053 = nx;
var G__18054 = (level__$1 - 1);
x = G__18053;
level__$1 = G__18054;
continue;
}
} else
{{
var G__18055 = x;
var G__18056 = (level__$1 - 1);
x = G__18055;
level__$1 = G__18056;
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
var G__18057 = x_SINGLEQUOTE_;
x__$1 = G__18057;
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
var G__18058 = nx;
var G__18059 = (level__$1 - 1);
x = G__18058;
level__$1 = G__18059;
continue;
}
} else
{{
var G__18060 = x;
var G__18061 = (level__$1 - 1);
x = G__18060;
level__$1 = G__18061;
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
cljs.core.async.impl.ioc_helpers.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.impl.ioc_helpers.t17902 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t17902 = (function (f,fn_handler,meta17903){
this.f = f;
this.fn_handler = fn_handler;
this.meta17903 = meta17903;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.impl.ioc_helpers.t17902.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.t17902.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t17902";
cljs.core.async.impl.ioc_helpers.t17902.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async.impl.ioc-helpers/t17902");
});
cljs.core.async.impl.ioc_helpers.t17902.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.impl.ioc_helpers.t17902.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.impl.ioc_helpers.t17902.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.impl.ioc_helpers.t17902.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17904){var self__ = this;
var _17904__$1 = this;return self__.meta17903;
});
cljs.core.async.impl.ioc_helpers.t17902.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17904,meta17903__$1){var self__ = this;
var _17904__$1 = this;return (new cljs.core.async.impl.ioc_helpers.t17902(self__.f,self__.fn_handler,meta17903__$1));
});
cljs.core.async.impl.ioc_helpers.__GT_t17902 = (function __GT_t17902(f__$1,fn_handler__$1,meta17903){return (new cljs.core.async.impl.ioc_helpers.t17902(f__$1,fn_handler__$1,meta17903));
});
}
return (new cljs.core.async.impl.ioc_helpers.t17902(f,fn_handler,null));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function run_state_machine(state){return cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function run_state_machine_wrapped(state){try{return cljs.core.async.impl.ioc_helpers.run_state_machine.call(null,state);
}catch (e17906){if((e17906 instanceof Object))
{var ex = e17906;cljs.core.async.impl.protocols.close_BANG_.call(null,cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.USER_START_IDX));
throw ex;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17906;
} else
{return null;
}
}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function take_BANG_(state,blk,c){var temp__4090__auto__ = cljs.core.async.impl.protocols.take_BANG_.call(null,c,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (x){var statearr_17909_17952 = state;(statearr_17909_17952[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);
(statearr_17909_17952[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
})));if(cljs.core.truth_(temp__4090__auto__))
{var cb = temp__4090__auto__;var statearr_17910_17953 = state;(statearr_17910_17953[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
(statearr_17910_17953[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function put_BANG_(state,blk,c,val){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,c,val,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (){var statearr_17913_17954 = state;(statearr_17913_17954[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = null);
(statearr_17913_17954[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
})));if(cljs.core.truth_(temp__4090__auto__))
{var cb = temp__4090__auto__;var statearr_17914_17955 = state;(statearr_17914_17955[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
(statearr_17914_17955[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__17915){var map__17920 = p__17915;var map__17920__$1 = ((cljs.core.seq_QMARK_.call(null,map__17920))?cljs.core.apply.call(null,cljs.core.hash_map,map__17920):map__17920);var opts = map__17920__$1;var statearr_17921_17956 = state;(statearr_17921_17956[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4092__auto__ = cljs.core.async.do_alts.call(null,((function (map__17920,map__17920__$1,opts){
return (function (val){var statearr_17922_17957 = state;(statearr_17922_17957[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__17920,map__17920__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4092__auto__))
{var cb = temp__4092__auto__;var statearr_17923_17958 = state;(statearr_17923_17958[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__17915 = null;if (arguments.length > 3) {
  p__17915 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__17915);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__17959){
var state = cljs.core.first(arglist__17959);
arglist__17959 = cljs.core.next(arglist__17959);
var cont_block = cljs.core.first(arglist__17959);
arglist__17959 = cljs.core.next(arglist__17959);
var ports = cljs.core.first(arglist__17959);
var p__17915 = cljs.core.rest(arglist__17959);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__17915);
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
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5472__auto__,k17925,else__5473__auto__){var self__ = this;
var this__5472__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k17925,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893)))
{return self__.catch_block;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k17925,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687)))
{return self__.catch_exception;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k17925,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429)))
{return self__.finally_block;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k17925,new cljs.core.Keyword(null,"continue-block","continue-block",1486987097)))
{return self__.continue_block;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k17925,new cljs.core.Keyword(null,"prev","prev",1017353637)))
{return self__.prev;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k17925,else__5473__auto__);
} else
{return null;
}
}
}
}
}
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__17924){var self__ = this;
var this__5477__auto____$1 = this;var pred__17927 = cljs.core.keyword_identical_QMARK_;var expr__17928 = k__5478__auto__;if(cljs.core.truth_(pred__17927.call(null,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),expr__17928)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__17924,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__17927.call(null,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),expr__17928)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__17924,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__17927.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),expr__17928)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__17924,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__17927.call(null,new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),expr__17928)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__17924,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__17927.call(null,new cljs.core.Keyword(null,"prev","prev",1017353637),expr__17928)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__17924,self__.__meta,self__.__extmap,null));
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5478__auto__,G__17924),null));
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
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5469__auto__,G__17924){var self__ = this;
var this__5469__auto____$1 = this;return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__17924,self__.__extmap,self__.__hash));
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
cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function map__GT_ExceptionFrame(G__17926){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(new cljs.core.Keyword(null,"catch-block","catch-block",2343862893).cljs$core$IFn$_invoke$arity$1(G__17926),new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687).cljs$core$IFn$_invoke$arity$1(G__17926),new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(G__17926),new cljs.core.Keyword(null,"continue-block","continue-block",1486987097).cljs$core$IFn$_invoke$arity$1(G__17926),new cljs.core.Keyword(null,"prev","prev",1017353637).cljs$core$IFn$_invoke$arity$1(G__17926),null,cljs.core.dissoc.call(null,G__17926,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),new cljs.core.Keyword(null,"prev","prev",1017353637))));
});
cljs.core.async.impl.ioc_helpers.add_exception_frame = (function add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){var statearr_17931 = state;(statearr_17931[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame.call(null,catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES)));
return statearr_17931;
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
{var statearr_17937 = state;(statearr_17937[cljs.core.async.impl.ioc_helpers.STATE_IDX] = catch_block);
(statearr_17937[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = exception);
(statearr_17937[cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION] = null);
(statearr_17937[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),null,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),null));
return statearr_17937;
} else
{if(cljs.core.truth_((function (){var and__4872__auto__ = exception;if(cljs.core.truth_(and__4872__auto__))
{return (cljs.core.not.call(null,catch_block)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else
{return and__4872__auto__;
}
})()))
{var statearr_17938_17960 = state;(statearr_17938_17960[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = new cljs.core.Keyword(null,"prev","prev",1017353637).cljs$core$IFn$_invoke$arity$1(exception_frame));
{
var G__17961 = state;
state = G__17961;
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
{var statearr_17939 = state;(statearr_17939[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_17939[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),null));
return statearr_17939;
} else
{if(cljs.core.truth_((function (){var and__4872__auto__ = cljs.core.not.call(null,exception);if(and__4872__auto__)
{return new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__4872__auto__;
}
})()))
{var statearr_17940 = state;(statearr_17940[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_17940[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),null));
return statearr_17940;
} else
{if((cljs.core.not.call(null,exception)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame))))
{var statearr_17941 = state;(statearr_17941[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"continue-block","continue-block",1486987097).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_17941[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = new cljs.core.Keyword(null,"prev","prev",1017353637).cljs$core$IFn$_invoke$arity$1(exception_frame));
return statearr_17941;
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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t15338 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15338 = (function (f,fn_handler,meta15339){
this.f = f;
this.fn_handler = fn_handler;
this.meta15339 = meta15339;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15338.cljs$lang$type = true;
cljs.core.async.t15338.cljs$lang$ctorStr = "cljs.core.async/t15338";
cljs.core.async.t15338.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async/t15338");
});
cljs.core.async.t15338.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15338.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t15338.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t15338.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15340){var self__ = this;
var _15340__$1 = this;return self__.meta15339;
});
cljs.core.async.t15338.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15340,meta15339__$1){var self__ = this;
var _15340__$1 = this;return (new cljs.core.async.t15338(self__.f,self__.fn_handler,meta15339__$1));
});
cljs.core.async.__GT_t15338 = (function __GT_t15338(f__$1,fn_handler__$1,meta15339){return (new cljs.core.async.t15338(f__$1,fn_handler__$1,meta15339));
});
}
return (new cljs.core.async.t15338(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__15342 = buff;if(G__15342)
{var bit__5534__auto__ = null;if(cljs.core.truth_((function (){var or__4884__auto__ = bit__5534__auto__;if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return G__15342.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__15342.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15342);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15342);
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
{var val_17606 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_17606);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_17606,ret){
return (function (){return fn1.call(null,val_17606);
});})(val_17606,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__5732__auto___17607 = n;var x_17608 = 0;while(true){
if((x_17608 < n__5732__auto___17607))
{(a[x_17608] = 0);
{
var G__17609 = (x_17608 + 1);
x_17608 = G__17609;
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
var G__17610 = (i + 1);
i = G__17610;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t15346 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15346 = (function (flag,alt_flag,meta15347){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta15347 = meta15347;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15346.cljs$lang$type = true;
cljs.core.async.t15346.cljs$lang$ctorStr = "cljs.core.async/t15346";
cljs.core.async.t15346.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async/t15346");
});})(flag))
;
cljs.core.async.t15346.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15346.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t15346.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t15346.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_15348){var self__ = this;
var _15348__$1 = this;return self__.meta15347;
});})(flag))
;
cljs.core.async.t15346.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_15348,meta15347__$1){var self__ = this;
var _15348__$1 = this;return (new cljs.core.async.t15346(self__.flag,self__.alt_flag,meta15347__$1));
});})(flag))
;
cljs.core.async.__GT_t15346 = ((function (flag){
return (function __GT_t15346(flag__$1,alt_flag__$1,meta15347){return (new cljs.core.async.t15346(flag__$1,alt_flag__$1,meta15347));
});})(flag))
;
}
return (new cljs.core.async.t15346(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t15352 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15352 = (function (cb,flag,alt_handler,meta15353){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta15353 = meta15353;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15352.cljs$lang$type = true;
cljs.core.async.t15352.cljs$lang$ctorStr = "cljs.core.async/t15352";
cljs.core.async.t15352.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async/t15352");
});
cljs.core.async.t15352.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15352.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t15352.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t15352.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15354){var self__ = this;
var _15354__$1 = this;return self__.meta15353;
});
cljs.core.async.t15352.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15354,meta15353__$1){var self__ = this;
var _15354__$1 = this;return (new cljs.core.async.t15352(self__.cb,self__.flag,self__.alt_handler,meta15353__$1));
});
cljs.core.async.__GT_t15352 = (function __GT_t15352(cb__$1,flag__$1,alt_handler__$1,meta15353){return (new cljs.core.async.t15352(cb__$1,flag__$1,alt_handler__$1,meta15353));
});
}
return (new cljs.core.async.t15352(cb,flag,alt_handler,null));
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
return (function (p1__15355_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15355_SHARP_,port], null));
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
var G__17611 = (i + 1);
i = G__17611;
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
var alts_BANG___delegate = function (ports,p__15356){var map__15358 = p__15356;var map__15358__$1 = ((cljs.core.seq_QMARK_.call(null,map__15358))?cljs.core.apply.call(null,cljs.core.hash_map,map__15358):map__15358);var opts = map__15358__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__15356 = null;if (arguments.length > 1) {
  p__15356 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__15356);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__17612){
var ports = cljs.core.first(arglist__17612);
var p__15356 = cljs.core.rest(arglist__17612);
return alts_BANG___delegate(ports,p__15356);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t15366 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15366 = (function (ch,f,map_LT_,meta15367){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta15367 = meta15367;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15366.cljs$lang$type = true;
cljs.core.async.t15366.cljs$lang$ctorStr = "cljs.core.async/t15366";
cljs.core.async.t15366.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async/t15366");
});
cljs.core.async.t15366.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15366.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t15366.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15366.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t15369 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15369 = (function (fn1,_,meta15367,ch,f,map_LT_,meta15370){
this.fn1 = fn1;
this._ = _;
this.meta15367 = meta15367;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta15370 = meta15370;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15369.cljs$lang$type = true;
cljs.core.async.t15369.cljs$lang$ctorStr = "cljs.core.async/t15369";
cljs.core.async.t15369.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async/t15369");
});})(___$1))
;
cljs.core.async.t15369.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15369.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t15369.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t15369.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__15359_SHARP_){return f1.call(null,(((p1__15359_SHARP_ == null))?null:self__.f.call(null,p1__15359_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t15369.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_15371){var self__ = this;
var _15371__$1 = this;return self__.meta15370;
});})(___$1))
;
cljs.core.async.t15369.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_15371,meta15370__$1){var self__ = this;
var _15371__$1 = this;return (new cljs.core.async.t15369(self__.fn1,self__._,self__.meta15367,self__.ch,self__.f,self__.map_LT_,meta15370__$1));
});})(___$1))
;
cljs.core.async.__GT_t15369 = ((function (___$1){
return (function __GT_t15369(fn1__$1,___$2,meta15367__$1,ch__$2,f__$2,map_LT___$2,meta15370){return (new cljs.core.async.t15369(fn1__$1,___$2,meta15367__$1,ch__$2,f__$2,map_LT___$2,meta15370));
});})(___$1))
;
}
return (new cljs.core.async.t15369(fn1,___$1,self__.meta15367,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t15366.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15366.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15366.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15368){var self__ = this;
var _15368__$1 = this;return self__.meta15367;
});
cljs.core.async.t15366.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15368,meta15367__$1){var self__ = this;
var _15368__$1 = this;return (new cljs.core.async.t15366(self__.ch,self__.f,self__.map_LT_,meta15367__$1));
});
cljs.core.async.__GT_t15366 = (function __GT_t15366(ch__$1,f__$1,map_LT___$1,meta15367){return (new cljs.core.async.t15366(ch__$1,f__$1,map_LT___$1,meta15367));
});
}
return (new cljs.core.async.t15366(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t15375 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15375 = (function (ch,f,map_GT_,meta15376){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta15376 = meta15376;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15375.cljs$lang$type = true;
cljs.core.async.t15375.cljs$lang$ctorStr = "cljs.core.async/t15375";
cljs.core.async.t15375.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async/t15375");
});
cljs.core.async.t15375.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15375.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t15375.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15375.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t15375.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15375.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15375.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15377){var self__ = this;
var _15377__$1 = this;return self__.meta15376;
});
cljs.core.async.t15375.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15377,meta15376__$1){var self__ = this;
var _15377__$1 = this;return (new cljs.core.async.t15375(self__.ch,self__.f,self__.map_GT_,meta15376__$1));
});
cljs.core.async.__GT_t15375 = (function __GT_t15375(ch__$1,f__$1,map_GT___$1,meta15376){return (new cljs.core.async.t15375(ch__$1,f__$1,map_GT___$1,meta15376));
});
}
return (new cljs.core.async.t15375(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t15381 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15381 = (function (ch,p,filter_GT_,meta15382){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta15382 = meta15382;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15381.cljs$lang$type = true;
cljs.core.async.t15381.cljs$lang$ctorStr = "cljs.core.async/t15381";
cljs.core.async.t15381.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async/t15381");
});
cljs.core.async.t15381.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15381.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t15381.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15381.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t15381.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15381.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15381.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15383){var self__ = this;
var _15383__$1 = this;return self__.meta15382;
});
cljs.core.async.t15381.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15383,meta15382__$1){var self__ = this;
var _15383__$1 = this;return (new cljs.core.async.t15381(self__.ch,self__.p,self__.filter_GT_,meta15382__$1));
});
cljs.core.async.__GT_t15381 = (function __GT_t15381(ch__$1,p__$1,filter_GT___$1,meta15382){return (new cljs.core.async.t15381(ch__$1,p__$1,filter_GT___$1,meta15382));
});
}
return (new cljs.core.async.t15381(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12698__auto___17613 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__12698__auto___17613,out){
return (function (){var f__12699__auto__ = (function (){var switch__12628__auto__ = ((function (c__12698__auto___17613,out){
return (function (state_15445){var state_val_15446 = (state_15445[1]);if((state_val_15446 === 1))
{var state_15445__$1 = state_15445;var statearr_15447_17614 = state_15445__$1;(statearr_15447_17614[2] = null);
(statearr_15447_17614[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15446 === 2))
{var state_15445__$1 = state_15445;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15445__$1,4,ch);
} else
{if((state_val_15446 === 3))
{var inst_15443 = (state_15445[2]);var state_15445__$1 = state_15445;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15445__$1,inst_15443);
} else
{if((state_val_15446 === 4))
{var inst_15427 = (state_15445[7]);var inst_15427__$1 = (state_15445[2]);var inst_15428 = (inst_15427__$1 == null);var state_15445__$1 = (function (){var statearr_15448 = state_15445;(statearr_15448[7] = inst_15427__$1);
return statearr_15448;
})();if(cljs.core.truth_(inst_15428))
{var statearr_15449_17615 = state_15445__$1;(statearr_15449_17615[1] = 5);
} else
{var statearr_15450_17616 = state_15445__$1;(statearr_15450_17616[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15446 === 5))
{var inst_15430 = cljs.core.async.close_BANG_.call(null,out);var state_15445__$1 = state_15445;var statearr_15451_17617 = state_15445__$1;(statearr_15451_17617[2] = inst_15430);
(statearr_15451_17617[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15446 === 6))
{var inst_15427 = (state_15445[7]);var inst_15432 = p.call(null,inst_15427);var state_15445__$1 = state_15445;if(cljs.core.truth_(inst_15432))
{var statearr_15452_17618 = state_15445__$1;(statearr_15452_17618[1] = 8);
} else
{var statearr_15453_17619 = state_15445__$1;(statearr_15453_17619[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15446 === 7))
{var inst_15441 = (state_15445[2]);var state_15445__$1 = state_15445;var statearr_15454_17620 = state_15445__$1;(statearr_15454_17620[2] = inst_15441);
(statearr_15454_17620[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15446 === 8))
{var inst_15427 = (state_15445[7]);var state_15445__$1 = state_15445;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15445__$1,11,out,inst_15427);
} else
{if((state_val_15446 === 9))
{var state_15445__$1 = state_15445;var statearr_15455_17621 = state_15445__$1;(statearr_15455_17621[2] = null);
(statearr_15455_17621[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15446 === 10))
{var inst_15438 = (state_15445[2]);var state_15445__$1 = (function (){var statearr_15456 = state_15445;(statearr_15456[8] = inst_15438);
return statearr_15456;
})();var statearr_15457_17622 = state_15445__$1;(statearr_15457_17622[2] = null);
(statearr_15457_17622[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15446 === 11))
{var inst_15435 = (state_15445[2]);var state_15445__$1 = state_15445;var statearr_15458_17623 = state_15445__$1;(statearr_15458_17623[2] = inst_15435);
(statearr_15458_17623[1] = 10);
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
});})(c__12698__auto___17613,out))
;return ((function (switch__12628__auto__,c__12698__auto___17613,out){
return (function() {
var state_machine__12629__auto__ = null;
var state_machine__12629__auto____0 = (function (){var statearr_15462 = [null,null,null,null,null,null,null,null,null];(statearr_15462[0] = state_machine__12629__auto__);
(statearr_15462[1] = 1);
return statearr_15462;
});
var state_machine__12629__auto____1 = (function (state_15445){while(true){
var ret_value__12630__auto__ = (function (){try{while(true){
var result__12631__auto__ = switch__12628__auto__.call(null,state_15445);if(cljs.core.keyword_identical_QMARK_.call(null,result__12631__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12631__auto__;
}
break;
}
}catch (e15463){if((e15463 instanceof Object))
{var ex__12632__auto__ = e15463;var statearr_15464_17624 = state_15445;(statearr_15464_17624[5] = ex__12632__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15445);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15463;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12630__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17625 = state_15445;
state_15445 = G__17625;
continue;
}
} else
{return ret_value__12630__auto__;
}
break;
}
});
state_machine__12629__auto__ = function(state_15445){
switch(arguments.length){
case 0:
return state_machine__12629__auto____0.call(this);
case 1:
return state_machine__12629__auto____1.call(this,state_15445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12629__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12629__auto____0;
state_machine__12629__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12629__auto____1;
return state_machine__12629__auto__;
})()
;})(switch__12628__auto__,c__12698__auto___17613,out))
})();var state__12700__auto__ = (function (){var statearr_15465 = f__12699__auto__.call(null);(statearr_15465[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12698__auto___17613);
return statearr_15465;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12700__auto__);
});})(c__12698__auto___17613,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__12698__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__12698__auto__){
return (function (){var f__12699__auto__ = (function (){var switch__12628__auto__ = ((function (c__12698__auto__){
return (function (state_15617){var state_val_15618 = (state_15617[1]);if((state_val_15618 === 1))
{var state_15617__$1 = state_15617;var statearr_15619_17626 = state_15617__$1;(statearr_15619_17626[2] = null);
(statearr_15619_17626[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15618 === 2))
{var state_15617__$1 = state_15617;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15617__$1,4,in$);
} else
{if((state_val_15618 === 3))
{var inst_15615 = (state_15617[2]);var state_15617__$1 = state_15617;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15617__$1,inst_15615);
} else
{if((state_val_15618 === 4))
{var inst_15563 = (state_15617[7]);var inst_15563__$1 = (state_15617[2]);var inst_15564 = (inst_15563__$1 == null);var state_15617__$1 = (function (){var statearr_15620 = state_15617;(statearr_15620[7] = inst_15563__$1);
return statearr_15620;
})();if(cljs.core.truth_(inst_15564))
{var statearr_15621_17627 = state_15617__$1;(statearr_15621_17627[1] = 5);
} else
{var statearr_15622_17628 = state_15617__$1;(statearr_15622_17628[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15618 === 5))
{var inst_15566 = cljs.core.async.close_BANG_.call(null,out);var state_15617__$1 = state_15617;var statearr_15623_17629 = state_15617__$1;(statearr_15623_17629[2] = inst_15566);
(statearr_15623_17629[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15618 === 6))
{var inst_15563 = (state_15617[7]);var inst_15568 = f.call(null,inst_15563);var inst_15573 = cljs.core.seq.call(null,inst_15568);var inst_15574 = inst_15573;var inst_15575 = null;var inst_15576 = 0;var inst_15577 = 0;var state_15617__$1 = (function (){var statearr_15624 = state_15617;(statearr_15624[8] = inst_15575);
(statearr_15624[9] = inst_15576);
(statearr_15624[10] = inst_15574);
(statearr_15624[11] = inst_15577);
return statearr_15624;
})();var statearr_15625_17630 = state_15617__$1;(statearr_15625_17630[2] = null);
(statearr_15625_17630[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15618 === 7))
{var inst_15613 = (state_15617[2]);var state_15617__$1 = state_15617;var statearr_15626_17631 = state_15617__$1;(statearr_15626_17631[2] = inst_15613);
(statearr_15626_17631[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15618 === 8))
{var inst_15576 = (state_15617[9]);var inst_15577 = (state_15617[11]);var inst_15579 = (inst_15577 < inst_15576);var inst_15580 = inst_15579;var state_15617__$1 = state_15617;if(cljs.core.truth_(inst_15580))
{var statearr_15627_17632 = state_15617__$1;(statearr_15627_17632[1] = 10);
} else
{var statearr_15628_17633 = state_15617__$1;(statearr_15628_17633[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15618 === 9))
{var inst_15610 = (state_15617[2]);var state_15617__$1 = (function (){var statearr_15629 = state_15617;(statearr_15629[12] = inst_15610);
return statearr_15629;
})();var statearr_15630_17634 = state_15617__$1;(statearr_15630_17634[2] = null);
(statearr_15630_17634[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15618 === 10))
{var inst_15575 = (state_15617[8]);var inst_15577 = (state_15617[11]);var inst_15582 = cljs.core._nth.call(null,inst_15575,inst_15577);var state_15617__$1 = state_15617;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15617__$1,13,out,inst_15582);
} else
{if((state_val_15618 === 11))
{var inst_15574 = (state_15617[10]);var inst_15588 = (state_15617[13]);var inst_15588__$1 = cljs.core.seq.call(null,inst_15574);var state_15617__$1 = (function (){var statearr_15634 = state_15617;(statearr_15634[13] = inst_15588__$1);
return statearr_15634;
})();if(inst_15588__$1)
{var statearr_15635_17635 = state_15617__$1;(statearr_15635_17635[1] = 14);
} else
{var statearr_15636_17636 = state_15617__$1;(statearr_15636_17636[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15618 === 12))
{var inst_15608 = (state_15617[2]);var state_15617__$1 = state_15617;var statearr_15637_17637 = state_15617__$1;(statearr_15637_17637[2] = inst_15608);
(statearr_15637_17637[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15618 === 13))
{var inst_15575 = (state_15617[8]);var inst_15576 = (state_15617[9]);var inst_15574 = (state_15617[10]);var inst_15577 = (state_15617[11]);var inst_15584 = (state_15617[2]);var inst_15585 = (inst_15577 + 1);var tmp15631 = inst_15575;var tmp15632 = inst_15576;var tmp15633 = inst_15574;var inst_15574__$1 = tmp15633;var inst_15575__$1 = tmp15631;var inst_15576__$1 = tmp15632;var inst_15577__$1 = inst_15585;var state_15617__$1 = (function (){var statearr_15638 = state_15617;(statearr_15638[8] = inst_15575__$1);
(statearr_15638[9] = inst_15576__$1);
(statearr_15638[10] = inst_15574__$1);
(statearr_15638[14] = inst_15584);
(statearr_15638[11] = inst_15577__$1);
return statearr_15638;
})();var statearr_15639_17638 = state_15617__$1;(statearr_15639_17638[2] = null);
(statearr_15639_17638[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15618 === 14))
{var inst_15588 = (state_15617[13]);var inst_15590 = cljs.core.chunked_seq_QMARK_.call(null,inst_15588);var state_15617__$1 = state_15617;if(inst_15590)
{var statearr_15640_17639 = state_15617__$1;(statearr_15640_17639[1] = 17);
} else
{var statearr_15641_17640 = state_15617__$1;(statearr_15641_17640[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15618 === 15))
{var state_15617__$1 = state_15617;var statearr_15642_17641 = state_15617__$1;(statearr_15642_17641[2] = null);
(statearr_15642_17641[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15618 === 16))
{var inst_15606 = (state_15617[2]);var state_15617__$1 = state_15617;var statearr_15643_17642 = state_15617__$1;(statearr_15643_17642[2] = inst_15606);
(statearr_15643_17642[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15618 === 17))
{var inst_15588 = (state_15617[13]);var inst_15592 = cljs.core.chunk_first.call(null,inst_15588);var inst_15593 = cljs.core.chunk_rest.call(null,inst_15588);var inst_15594 = cljs.core.count.call(null,inst_15592);var inst_15574 = inst_15593;var inst_15575 = inst_15592;var inst_15576 = inst_15594;var inst_15577 = 0;var state_15617__$1 = (function (){var statearr_15644 = state_15617;(statearr_15644[8] = inst_15575);
(statearr_15644[9] = inst_15576);
(statearr_15644[10] = inst_15574);
(statearr_15644[11] = inst_15577);
return statearr_15644;
})();var statearr_15645_17643 = state_15617__$1;(statearr_15645_17643[2] = null);
(statearr_15645_17643[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15618 === 18))
{var inst_15588 = (state_15617[13]);var inst_15597 = cljs.core.first.call(null,inst_15588);var state_15617__$1 = state_15617;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15617__$1,20,out,inst_15597);
} else
{if((state_val_15618 === 19))
{var inst_15603 = (state_15617[2]);var state_15617__$1 = state_15617;var statearr_15646_17644 = state_15617__$1;(statearr_15646_17644[2] = inst_15603);
(statearr_15646_17644[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15618 === 20))
{var inst_15588 = (state_15617[13]);var inst_15599 = (state_15617[2]);var inst_15600 = cljs.core.next.call(null,inst_15588);var inst_15574 = inst_15600;var inst_15575 = null;var inst_15576 = 0;var inst_15577 = 0;var state_15617__$1 = (function (){var statearr_15647 = state_15617;(statearr_15647[8] = inst_15575);
(statearr_15647[9] = inst_15576);
(statearr_15647[10] = inst_15574);
(statearr_15647[11] = inst_15577);
(statearr_15647[15] = inst_15599);
return statearr_15647;
})();var statearr_15648_17645 = state_15617__$1;(statearr_15648_17645[2] = null);
(statearr_15648_17645[1] = 8);
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
});})(c__12698__auto__))
;return ((function (switch__12628__auto__,c__12698__auto__){
return (function() {
var state_machine__12629__auto__ = null;
var state_machine__12629__auto____0 = (function (){var statearr_15652 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15652[0] = state_machine__12629__auto__);
(statearr_15652[1] = 1);
return statearr_15652;
});
var state_machine__12629__auto____1 = (function (state_15617){while(true){
var ret_value__12630__auto__ = (function (){try{while(true){
var result__12631__auto__ = switch__12628__auto__.call(null,state_15617);if(cljs.core.keyword_identical_QMARK_.call(null,result__12631__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12631__auto__;
}
break;
}
}catch (e15653){if((e15653 instanceof Object))
{var ex__12632__auto__ = e15653;var statearr_15654_17646 = state_15617;(statearr_15654_17646[5] = ex__12632__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15617);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15653;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12630__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17647 = state_15617;
state_15617 = G__17647;
continue;
}
} else
{return ret_value__12630__auto__;
}
break;
}
});
state_machine__12629__auto__ = function(state_15617){
switch(arguments.length){
case 0:
return state_machine__12629__auto____0.call(this);
case 1:
return state_machine__12629__auto____1.call(this,state_15617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12629__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12629__auto____0;
state_machine__12629__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12629__auto____1;
return state_machine__12629__auto__;
})()
;})(switch__12628__auto__,c__12698__auto__))
})();var state__12700__auto__ = (function (){var statearr_15655 = f__12699__auto__.call(null);(statearr_15655[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12698__auto__);
return statearr_15655;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12700__auto__);
});})(c__12698__auto__))
);
return c__12698__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__12698__auto___17648 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__12698__auto___17648){
return (function (){var f__12699__auto__ = (function (){var switch__12628__auto__ = ((function (c__12698__auto___17648){
return (function (state_15715){var state_val_15716 = (state_15715[1]);if((state_val_15716 === 1))
{var state_15715__$1 = state_15715;var statearr_15717_17649 = state_15715__$1;(statearr_15717_17649[2] = null);
(statearr_15717_17649[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15716 === 2))
{var state_15715__$1 = state_15715;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15715__$1,4,from);
} else
{if((state_val_15716 === 3))
{var inst_15713 = (state_15715[2]);var state_15715__$1 = state_15715;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15715__$1,inst_15713);
} else
{if((state_val_15716 === 4))
{var inst_15698 = (state_15715[7]);var inst_15698__$1 = (state_15715[2]);var inst_15699 = (inst_15698__$1 == null);var state_15715__$1 = (function (){var statearr_15718 = state_15715;(statearr_15718[7] = inst_15698__$1);
return statearr_15718;
})();if(cljs.core.truth_(inst_15699))
{var statearr_15719_17650 = state_15715__$1;(statearr_15719_17650[1] = 5);
} else
{var statearr_15720_17651 = state_15715__$1;(statearr_15720_17651[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15716 === 5))
{var state_15715__$1 = state_15715;if(cljs.core.truth_(close_QMARK_))
{var statearr_15721_17652 = state_15715__$1;(statearr_15721_17652[1] = 8);
} else
{var statearr_15722_17653 = state_15715__$1;(statearr_15722_17653[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15716 === 6))
{var inst_15698 = (state_15715[7]);var state_15715__$1 = state_15715;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15715__$1,11,to,inst_15698);
} else
{if((state_val_15716 === 7))
{var inst_15711 = (state_15715[2]);var state_15715__$1 = state_15715;var statearr_15723_17654 = state_15715__$1;(statearr_15723_17654[2] = inst_15711);
(statearr_15723_17654[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15716 === 8))
{var inst_15702 = cljs.core.async.close_BANG_.call(null,to);var state_15715__$1 = state_15715;var statearr_15724_17655 = state_15715__$1;(statearr_15724_17655[2] = inst_15702);
(statearr_15724_17655[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15716 === 9))
{var state_15715__$1 = state_15715;var statearr_15725_17656 = state_15715__$1;(statearr_15725_17656[2] = null);
(statearr_15725_17656[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15716 === 10))
{var inst_15705 = (state_15715[2]);var state_15715__$1 = state_15715;var statearr_15726_17657 = state_15715__$1;(statearr_15726_17657[2] = inst_15705);
(statearr_15726_17657[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15716 === 11))
{var inst_15708 = (state_15715[2]);var state_15715__$1 = (function (){var statearr_15727 = state_15715;(statearr_15727[8] = inst_15708);
return statearr_15727;
})();var statearr_15728_17658 = state_15715__$1;(statearr_15728_17658[2] = null);
(statearr_15728_17658[1] = 2);
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
});})(c__12698__auto___17648))
;return ((function (switch__12628__auto__,c__12698__auto___17648){
return (function() {
var state_machine__12629__auto__ = null;
var state_machine__12629__auto____0 = (function (){var statearr_15732 = [null,null,null,null,null,null,null,null,null];(statearr_15732[0] = state_machine__12629__auto__);
(statearr_15732[1] = 1);
return statearr_15732;
});
var state_machine__12629__auto____1 = (function (state_15715){while(true){
var ret_value__12630__auto__ = (function (){try{while(true){
var result__12631__auto__ = switch__12628__auto__.call(null,state_15715);if(cljs.core.keyword_identical_QMARK_.call(null,result__12631__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12631__auto__;
}
break;
}
}catch (e15733){if((e15733 instanceof Object))
{var ex__12632__auto__ = e15733;var statearr_15734_17659 = state_15715;(statearr_15734_17659[5] = ex__12632__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15715);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15733;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12630__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17660 = state_15715;
state_15715 = G__17660;
continue;
}
} else
{return ret_value__12630__auto__;
}
break;
}
});
state_machine__12629__auto__ = function(state_15715){
switch(arguments.length){
case 0:
return state_machine__12629__auto____0.call(this);
case 1:
return state_machine__12629__auto____1.call(this,state_15715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12629__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12629__auto____0;
state_machine__12629__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12629__auto____1;
return state_machine__12629__auto__;
})()
;})(switch__12628__auto__,c__12698__auto___17648))
})();var state__12700__auto__ = (function (){var statearr_15735 = f__12699__auto__.call(null);(statearr_15735[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12698__auto___17648);
return statearr_15735;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12700__auto__);
});})(c__12698__auto___17648))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__12698__auto___17661 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__12698__auto___17661,tc,fc){
return (function (){var f__12699__auto__ = (function (){var switch__12628__auto__ = ((function (c__12698__auto___17661,tc,fc){
return (function (state_15800){var state_val_15801 = (state_15800[1]);if((state_val_15801 === 1))
{var state_15800__$1 = state_15800;var statearr_15802_17662 = state_15800__$1;(statearr_15802_17662[2] = null);
(statearr_15802_17662[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15801 === 2))
{var state_15800__$1 = state_15800;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15800__$1,4,ch);
} else
{if((state_val_15801 === 3))
{var inst_15798 = (state_15800[2]);var state_15800__$1 = state_15800;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15800__$1,inst_15798);
} else
{if((state_val_15801 === 4))
{var inst_15781 = (state_15800[7]);var inst_15781__$1 = (state_15800[2]);var inst_15782 = (inst_15781__$1 == null);var state_15800__$1 = (function (){var statearr_15803 = state_15800;(statearr_15803[7] = inst_15781__$1);
return statearr_15803;
})();if(cljs.core.truth_(inst_15782))
{var statearr_15804_17663 = state_15800__$1;(statearr_15804_17663[1] = 5);
} else
{var statearr_15805_17664 = state_15800__$1;(statearr_15805_17664[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15801 === 5))
{var inst_15784 = cljs.core.async.close_BANG_.call(null,tc);var inst_15785 = cljs.core.async.close_BANG_.call(null,fc);var state_15800__$1 = (function (){var statearr_15806 = state_15800;(statearr_15806[8] = inst_15784);
return statearr_15806;
})();var statearr_15807_17665 = state_15800__$1;(statearr_15807_17665[2] = inst_15785);
(statearr_15807_17665[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15801 === 6))
{var inst_15781 = (state_15800[7]);var inst_15787 = p.call(null,inst_15781);var state_15800__$1 = state_15800;if(cljs.core.truth_(inst_15787))
{var statearr_15808_17666 = state_15800__$1;(statearr_15808_17666[1] = 9);
} else
{var statearr_15809_17667 = state_15800__$1;(statearr_15809_17667[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15801 === 7))
{var inst_15796 = (state_15800[2]);var state_15800__$1 = state_15800;var statearr_15810_17668 = state_15800__$1;(statearr_15810_17668[2] = inst_15796);
(statearr_15810_17668[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15801 === 8))
{var inst_15793 = (state_15800[2]);var state_15800__$1 = (function (){var statearr_15811 = state_15800;(statearr_15811[9] = inst_15793);
return statearr_15811;
})();var statearr_15812_17669 = state_15800__$1;(statearr_15812_17669[2] = null);
(statearr_15812_17669[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15801 === 9))
{var state_15800__$1 = state_15800;var statearr_15813_17670 = state_15800__$1;(statearr_15813_17670[2] = tc);
(statearr_15813_17670[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15801 === 10))
{var state_15800__$1 = state_15800;var statearr_15814_17671 = state_15800__$1;(statearr_15814_17671[2] = fc);
(statearr_15814_17671[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15801 === 11))
{var inst_15781 = (state_15800[7]);var inst_15791 = (state_15800[2]);var state_15800__$1 = state_15800;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15800__$1,8,inst_15791,inst_15781);
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
});})(c__12698__auto___17661,tc,fc))
;return ((function (switch__12628__auto__,c__12698__auto___17661,tc,fc){
return (function() {
var state_machine__12629__auto__ = null;
var state_machine__12629__auto____0 = (function (){var statearr_15818 = [null,null,null,null,null,null,null,null,null,null];(statearr_15818[0] = state_machine__12629__auto__);
(statearr_15818[1] = 1);
return statearr_15818;
});
var state_machine__12629__auto____1 = (function (state_15800){while(true){
var ret_value__12630__auto__ = (function (){try{while(true){
var result__12631__auto__ = switch__12628__auto__.call(null,state_15800);if(cljs.core.keyword_identical_QMARK_.call(null,result__12631__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12631__auto__;
}
break;
}
}catch (e15819){if((e15819 instanceof Object))
{var ex__12632__auto__ = e15819;var statearr_15820_17672 = state_15800;(statearr_15820_17672[5] = ex__12632__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15800);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15819;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12630__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17673 = state_15800;
state_15800 = G__17673;
continue;
}
} else
{return ret_value__12630__auto__;
}
break;
}
});
state_machine__12629__auto__ = function(state_15800){
switch(arguments.length){
case 0:
return state_machine__12629__auto____0.call(this);
case 1:
return state_machine__12629__auto____1.call(this,state_15800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12629__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12629__auto____0;
state_machine__12629__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12629__auto____1;
return state_machine__12629__auto__;
})()
;})(switch__12628__auto__,c__12698__auto___17661,tc,fc))
})();var state__12700__auto__ = (function (){var statearr_15821 = f__12699__auto__.call(null);(statearr_15821[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12698__auto___17661);
return statearr_15821;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12700__auto__);
});})(c__12698__auto___17661,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__12698__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__12698__auto__){
return (function (){var f__12699__auto__ = (function (){var switch__12628__auto__ = ((function (c__12698__auto__){
return (function (state_15868){var state_val_15869 = (state_15868[1]);if((state_val_15869 === 7))
{var inst_15864 = (state_15868[2]);var state_15868__$1 = state_15868;var statearr_15870_17674 = state_15868__$1;(statearr_15870_17674[2] = inst_15864);
(statearr_15870_17674[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15869 === 6))
{var inst_15857 = (state_15868[7]);var inst_15854 = (state_15868[8]);var inst_15861 = f.call(null,inst_15854,inst_15857);var inst_15854__$1 = inst_15861;var state_15868__$1 = (function (){var statearr_15871 = state_15868;(statearr_15871[8] = inst_15854__$1);
return statearr_15871;
})();var statearr_15872_17675 = state_15868__$1;(statearr_15872_17675[2] = null);
(statearr_15872_17675[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15869 === 5))
{var inst_15854 = (state_15868[8]);var state_15868__$1 = state_15868;var statearr_15873_17676 = state_15868__$1;(statearr_15873_17676[2] = inst_15854);
(statearr_15873_17676[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15869 === 4))
{var inst_15857 = (state_15868[7]);var inst_15857__$1 = (state_15868[2]);var inst_15858 = (inst_15857__$1 == null);var state_15868__$1 = (function (){var statearr_15874 = state_15868;(statearr_15874[7] = inst_15857__$1);
return statearr_15874;
})();if(cljs.core.truth_(inst_15858))
{var statearr_15875_17677 = state_15868__$1;(statearr_15875_17677[1] = 5);
} else
{var statearr_15876_17678 = state_15868__$1;(statearr_15876_17678[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15869 === 3))
{var inst_15866 = (state_15868[2]);var state_15868__$1 = state_15868;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15868__$1,inst_15866);
} else
{if((state_val_15869 === 2))
{var state_15868__$1 = state_15868;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15868__$1,4,ch);
} else
{if((state_val_15869 === 1))
{var inst_15854 = init;var state_15868__$1 = (function (){var statearr_15877 = state_15868;(statearr_15877[8] = inst_15854);
return statearr_15877;
})();var statearr_15878_17679 = state_15868__$1;(statearr_15878_17679[2] = null);
(statearr_15878_17679[1] = 2);
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
});})(c__12698__auto__))
;return ((function (switch__12628__auto__,c__12698__auto__){
return (function() {
var state_machine__12629__auto__ = null;
var state_machine__12629__auto____0 = (function (){var statearr_15882 = [null,null,null,null,null,null,null,null,null];(statearr_15882[0] = state_machine__12629__auto__);
(statearr_15882[1] = 1);
return statearr_15882;
});
var state_machine__12629__auto____1 = (function (state_15868){while(true){
var ret_value__12630__auto__ = (function (){try{while(true){
var result__12631__auto__ = switch__12628__auto__.call(null,state_15868);if(cljs.core.keyword_identical_QMARK_.call(null,result__12631__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12631__auto__;
}
break;
}
}catch (e15883){if((e15883 instanceof Object))
{var ex__12632__auto__ = e15883;var statearr_15884_17680 = state_15868;(statearr_15884_17680[5] = ex__12632__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15868);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15883;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12630__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17681 = state_15868;
state_15868 = G__17681;
continue;
}
} else
{return ret_value__12630__auto__;
}
break;
}
});
state_machine__12629__auto__ = function(state_15868){
switch(arguments.length){
case 0:
return state_machine__12629__auto____0.call(this);
case 1:
return state_machine__12629__auto____1.call(this,state_15868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12629__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12629__auto____0;
state_machine__12629__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12629__auto____1;
return state_machine__12629__auto__;
})()
;})(switch__12628__auto__,c__12698__auto__))
})();var state__12700__auto__ = (function (){var statearr_15885 = f__12699__auto__.call(null);(statearr_15885[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12698__auto__);
return statearr_15885;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12700__auto__);
});})(c__12698__auto__))
);
return c__12698__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__12698__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__12698__auto__){
return (function (){var f__12699__auto__ = (function (){var switch__12628__auto__ = ((function (c__12698__auto__){
return (function (state_15947){var state_val_15948 = (state_15947[1]);if((state_val_15948 === 1))
{var inst_15927 = cljs.core.seq.call(null,coll);var inst_15928 = inst_15927;var state_15947__$1 = (function (){var statearr_15949 = state_15947;(statearr_15949[7] = inst_15928);
return statearr_15949;
})();var statearr_15950_17682 = state_15947__$1;(statearr_15950_17682[2] = null);
(statearr_15950_17682[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15948 === 2))
{var inst_15928 = (state_15947[7]);var state_15947__$1 = state_15947;if(cljs.core.truth_(inst_15928))
{var statearr_15951_17683 = state_15947__$1;(statearr_15951_17683[1] = 4);
} else
{var statearr_15952_17684 = state_15947__$1;(statearr_15952_17684[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15948 === 3))
{var inst_15945 = (state_15947[2]);var state_15947__$1 = state_15947;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15947__$1,inst_15945);
} else
{if((state_val_15948 === 4))
{var inst_15928 = (state_15947[7]);var inst_15931 = cljs.core.first.call(null,inst_15928);var state_15947__$1 = state_15947;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15947__$1,7,ch,inst_15931);
} else
{if((state_val_15948 === 5))
{var state_15947__$1 = state_15947;if(cljs.core.truth_(close_QMARK_))
{var statearr_15953_17685 = state_15947__$1;(statearr_15953_17685[1] = 8);
} else
{var statearr_15954_17686 = state_15947__$1;(statearr_15954_17686[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15948 === 6))
{var inst_15943 = (state_15947[2]);var state_15947__$1 = state_15947;var statearr_15955_17687 = state_15947__$1;(statearr_15955_17687[2] = inst_15943);
(statearr_15955_17687[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15948 === 7))
{var inst_15928 = (state_15947[7]);var inst_15933 = (state_15947[2]);var inst_15934 = cljs.core.next.call(null,inst_15928);var inst_15928__$1 = inst_15934;var state_15947__$1 = (function (){var statearr_15956 = state_15947;(statearr_15956[8] = inst_15933);
(statearr_15956[7] = inst_15928__$1);
return statearr_15956;
})();var statearr_15957_17688 = state_15947__$1;(statearr_15957_17688[2] = null);
(statearr_15957_17688[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15948 === 8))
{var inst_15938 = cljs.core.async.close_BANG_.call(null,ch);var state_15947__$1 = state_15947;var statearr_15958_17689 = state_15947__$1;(statearr_15958_17689[2] = inst_15938);
(statearr_15958_17689[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15948 === 9))
{var state_15947__$1 = state_15947;var statearr_15959_17690 = state_15947__$1;(statearr_15959_17690[2] = null);
(statearr_15959_17690[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15948 === 10))
{var inst_15941 = (state_15947[2]);var state_15947__$1 = state_15947;var statearr_15960_17691 = state_15947__$1;(statearr_15960_17691[2] = inst_15941);
(statearr_15960_17691[1] = 6);
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
});})(c__12698__auto__))
;return ((function (switch__12628__auto__,c__12698__auto__){
return (function() {
var state_machine__12629__auto__ = null;
var state_machine__12629__auto____0 = (function (){var statearr_15964 = [null,null,null,null,null,null,null,null,null];(statearr_15964[0] = state_machine__12629__auto__);
(statearr_15964[1] = 1);
return statearr_15964;
});
var state_machine__12629__auto____1 = (function (state_15947){while(true){
var ret_value__12630__auto__ = (function (){try{while(true){
var result__12631__auto__ = switch__12628__auto__.call(null,state_15947);if(cljs.core.keyword_identical_QMARK_.call(null,result__12631__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12631__auto__;
}
break;
}
}catch (e15965){if((e15965 instanceof Object))
{var ex__12632__auto__ = e15965;var statearr_15966_17692 = state_15947;(statearr_15966_17692[5] = ex__12632__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15947);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15965;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12630__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17693 = state_15947;
state_15947 = G__17693;
continue;
}
} else
{return ret_value__12630__auto__;
}
break;
}
});
state_machine__12629__auto__ = function(state_15947){
switch(arguments.length){
case 0:
return state_machine__12629__auto____0.call(this);
case 1:
return state_machine__12629__auto____1.call(this,state_15947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12629__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12629__auto____0;
state_machine__12629__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12629__auto____1;
return state_machine__12629__auto__;
})()
;})(switch__12628__auto__,c__12698__auto__))
})();var state__12700__auto__ = (function (){var statearr_15967 = f__12699__auto__.call(null);(statearr_15967[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12698__auto__);
return statearr_15967;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12700__auto__);
});})(c__12698__auto__))
);
return c__12698__auto__;
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
cljs.core.async.Mux = (function (){var obj15969 = {};return obj15969;
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
cljs.core.async.Mult = (function (){var obj15971 = {};return obj15971;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t16195 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16195 = (function (cs,ch,mult,meta16196){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta16196 = meta16196;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16195.cljs$lang$type = true;
cljs.core.async.t16195.cljs$lang$ctorStr = "cljs.core.async/t16195";
cljs.core.async.t16195.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async/t16195");
});})(cs))
;
cljs.core.async.t16195.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t16195.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t16195.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t16195.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t16195.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16195.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t16195.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16197){var self__ = this;
var _16197__$1 = this;return self__.meta16196;
});})(cs))
;
cljs.core.async.t16195.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16197,meta16196__$1){var self__ = this;
var _16197__$1 = this;return (new cljs.core.async.t16195(self__.cs,self__.ch,self__.mult,meta16196__$1));
});})(cs))
;
cljs.core.async.__GT_t16195 = ((function (cs){
return (function __GT_t16195(cs__$1,ch__$1,mult__$1,meta16196){return (new cljs.core.async.t16195(cs__$1,ch__$1,mult__$1,meta16196));
});})(cs))
;
}
return (new cljs.core.async.t16195(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__12698__auto___17694 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__12698__auto___17694,cs,m,dchan,dctr,done){
return (function (){var f__12699__auto__ = (function (){var switch__12628__auto__ = ((function (c__12698__auto___17694,cs,m,dchan,dctr,done){
return (function (state_16332){var state_val_16333 = (state_16332[1]);if((state_val_16333 === 32))
{var inst_16276 = (state_16332[7]);var inst_16200 = (state_16332[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16332,31,Object,null,30);var inst_16283 = cljs.core.async.put_BANG_.call(null,inst_16276,inst_16200,done);var state_16332__$1 = state_16332;var statearr_16334_17695 = state_16332__$1;(statearr_16334_17695[2] = inst_16283);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16332__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16333 === 1))
{var state_16332__$1 = state_16332;var statearr_16335_17696 = state_16332__$1;(statearr_16335_17696[2] = null);
(statearr_16335_17696[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16333 === 33))
{var inst_16289 = (state_16332[9]);var inst_16291 = cljs.core.chunked_seq_QMARK_.call(null,inst_16289);var state_16332__$1 = state_16332;if(inst_16291)
{var statearr_16336_17697 = state_16332__$1;(statearr_16336_17697[1] = 36);
} else
{var statearr_16337_17698 = state_16332__$1;(statearr_16337_17698[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16333 === 2))
{var state_16332__$1 = state_16332;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16332__$1,4,ch);
} else
{if((state_val_16333 === 34))
{var state_16332__$1 = state_16332;var statearr_16338_17699 = state_16332__$1;(statearr_16338_17699[2] = null);
(statearr_16338_17699[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16333 === 3))
{var inst_16330 = (state_16332[2]);var state_16332__$1 = state_16332;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16332__$1,inst_16330);
} else
{if((state_val_16333 === 35))
{var inst_16314 = (state_16332[2]);var state_16332__$1 = state_16332;var statearr_16339_17700 = state_16332__$1;(statearr_16339_17700[2] = inst_16314);
(statearr_16339_17700[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16333 === 4))
{var inst_16200 = (state_16332[8]);var inst_16200__$1 = (state_16332[2]);var inst_16201 = (inst_16200__$1 == null);var state_16332__$1 = (function (){var statearr_16340 = state_16332;(statearr_16340[8] = inst_16200__$1);
return statearr_16340;
})();if(cljs.core.truth_(inst_16201))
{var statearr_16341_17701 = state_16332__$1;(statearr_16341_17701[1] = 5);
} else
{var statearr_16342_17702 = state_16332__$1;(statearr_16342_17702[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16333 === 36))
{var inst_16289 = (state_16332[9]);var inst_16293 = cljs.core.chunk_first.call(null,inst_16289);var inst_16294 = cljs.core.chunk_rest.call(null,inst_16289);var inst_16295 = cljs.core.count.call(null,inst_16293);var inst_16268 = inst_16294;var inst_16269 = inst_16293;var inst_16270 = inst_16295;var inst_16271 = 0;var state_16332__$1 = (function (){var statearr_16343 = state_16332;(statearr_16343[10] = inst_16268);
(statearr_16343[11] = inst_16269);
(statearr_16343[12] = inst_16270);
(statearr_16343[13] = inst_16271);
return statearr_16343;
})();var statearr_16344_17703 = state_16332__$1;(statearr_16344_17703[2] = null);
(statearr_16344_17703[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16333 === 5))
{var inst_16207 = cljs.core.deref.call(null,cs);var inst_16208 = cljs.core.seq.call(null,inst_16207);var inst_16209 = inst_16208;var inst_16210 = null;var inst_16211 = 0;var inst_16212 = 0;var state_16332__$1 = (function (){var statearr_16345 = state_16332;(statearr_16345[14] = inst_16209);
(statearr_16345[15] = inst_16211);
(statearr_16345[16] = inst_16212);
(statearr_16345[17] = inst_16210);
return statearr_16345;
})();var statearr_16346_17704 = state_16332__$1;(statearr_16346_17704[2] = null);
(statearr_16346_17704[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16333 === 37))
{var inst_16289 = (state_16332[9]);var inst_16298 = cljs.core.first.call(null,inst_16289);var state_16332__$1 = (function (){var statearr_16347 = state_16332;(statearr_16347[18] = inst_16298);
return statearr_16347;
})();var statearr_16348_17705 = state_16332__$1;(statearr_16348_17705[2] = null);
(statearr_16348_17705[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16333 === 6))
{var inst_16260 = (state_16332[19]);var inst_16259 = cljs.core.deref.call(null,cs);var inst_16260__$1 = cljs.core.keys.call(null,inst_16259);var inst_16261 = cljs.core.count.call(null,inst_16260__$1);var inst_16262 = cljs.core.reset_BANG_.call(null,dctr,inst_16261);var inst_16267 = cljs.core.seq.call(null,inst_16260__$1);var inst_16268 = inst_16267;var inst_16269 = null;var inst_16270 = 0;var inst_16271 = 0;var state_16332__$1 = (function (){var statearr_16349 = state_16332;(statearr_16349[10] = inst_16268);
(statearr_16349[11] = inst_16269);
(statearr_16349[20] = inst_16262);
(statearr_16349[12] = inst_16270);
(statearr_16349[13] = inst_16271);
(statearr_16349[19] = inst_16260__$1);
return statearr_16349;
})();var statearr_16350_17706 = state_16332__$1;(statearr_16350_17706[2] = null);
(statearr_16350_17706[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16333 === 38))
{var inst_16311 = (state_16332[2]);var state_16332__$1 = state_16332;var statearr_16351_17707 = state_16332__$1;(statearr_16351_17707[2] = inst_16311);
(statearr_16351_17707[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16333 === 7))
{var inst_16328 = (state_16332[2]);var state_16332__$1 = state_16332;var statearr_16352_17708 = state_16332__$1;(statearr_16352_17708[2] = inst_16328);
(statearr_16352_17708[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16333 === 39))
{var inst_16289 = (state_16332[9]);var inst_16307 = (state_16332[2]);var inst_16308 = cljs.core.next.call(null,inst_16289);var inst_16268 = inst_16308;var inst_16269 = null;var inst_16270 = 0;var inst_16271 = 0;var state_16332__$1 = (function (){var statearr_16353 = state_16332;(statearr_16353[10] = inst_16268);
(statearr_16353[11] = inst_16269);
(statearr_16353[21] = inst_16307);
(statearr_16353[12] = inst_16270);
(statearr_16353[13] = inst_16271);
return statearr_16353;
})();var statearr_16354_17709 = state_16332__$1;(statearr_16354_17709[2] = null);
(statearr_16354_17709[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16333 === 8))
{var inst_16211 = (state_16332[15]);var inst_16212 = (state_16332[16]);var inst_16214 = (inst_16212 < inst_16211);var inst_16215 = inst_16214;var state_16332__$1 = state_16332;if(cljs.core.truth_(inst_16215))
{var statearr_16355_17710 = state_16332__$1;(statearr_16355_17710[1] = 10);
} else
{var statearr_16356_17711 = state_16332__$1;(statearr_16356_17711[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16333 === 40))
{var inst_16298 = (state_16332[18]);var inst_16299 = (state_16332[2]);var inst_16300 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_16301 = cljs.core.async.untap_STAR_.call(null,m,inst_16298);var state_16332__$1 = (function (){var statearr_16357 = state_16332;(statearr_16357[22] = inst_16300);
(statearr_16357[23] = inst_16299);
return statearr_16357;
})();var statearr_16358_17712 = state_16332__$1;(statearr_16358_17712[2] = inst_16301);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16332__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16333 === 9))
{var inst_16257 = (state_16332[2]);var state_16332__$1 = state_16332;var statearr_16359_17713 = state_16332__$1;(statearr_16359_17713[2] = inst_16257);
(statearr_16359_17713[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16333 === 41))
{var inst_16200 = (state_16332[8]);var inst_16298 = (state_16332[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16332,40,Object,null,39);var inst_16305 = cljs.core.async.put_BANG_.call(null,inst_16298,inst_16200,done);var state_16332__$1 = state_16332;var statearr_16360_17714 = state_16332__$1;(statearr_16360_17714[2] = inst_16305);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16332__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16333 === 10))
{var inst_16212 = (state_16332[16]);var inst_16210 = (state_16332[17]);var inst_16218 = cljs.core._nth.call(null,inst_16210,inst_16212);var inst_16219 = cljs.core.nth.call(null,inst_16218,0,null);var inst_16220 = cljs.core.nth.call(null,inst_16218,1,null);var state_16332__$1 = (function (){var statearr_16361 = state_16332;(statearr_16361[24] = inst_16219);
return statearr_16361;
})();if(cljs.core.truth_(inst_16220))
{var statearr_16362_17715 = state_16332__$1;(statearr_16362_17715[1] = 13);
} else
{var statearr_16363_17716 = state_16332__$1;(statearr_16363_17716[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16333 === 42))
{var state_16332__$1 = state_16332;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16332__$1,45,dchan);
} else
{if((state_val_16333 === 11))
{var inst_16229 = (state_16332[25]);var inst_16209 = (state_16332[14]);var inst_16229__$1 = cljs.core.seq.call(null,inst_16209);var state_16332__$1 = (function (){var statearr_16364 = state_16332;(statearr_16364[25] = inst_16229__$1);
return statearr_16364;
})();if(inst_16229__$1)
{var statearr_16365_17717 = state_16332__$1;(statearr_16365_17717[1] = 16);
} else
{var statearr_16366_17718 = state_16332__$1;(statearr_16366_17718[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16333 === 43))
{var state_16332__$1 = state_16332;var statearr_16367_17719 = state_16332__$1;(statearr_16367_17719[2] = null);
(statearr_16367_17719[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16333 === 12))
{var inst_16255 = (state_16332[2]);var state_16332__$1 = state_16332;var statearr_16368_17720 = state_16332__$1;(statearr_16368_17720[2] = inst_16255);
(statearr_16368_17720[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16333 === 44))
{var inst_16325 = (state_16332[2]);var state_16332__$1 = (function (){var statearr_16369 = state_16332;(statearr_16369[26] = inst_16325);
return statearr_16369;
})();var statearr_16370_17721 = state_16332__$1;(statearr_16370_17721[2] = null);
(statearr_16370_17721[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16333 === 13))
{var inst_16219 = (state_16332[24]);var inst_16222 = cljs.core.async.close_BANG_.call(null,inst_16219);var state_16332__$1 = state_16332;var statearr_16371_17722 = state_16332__$1;(statearr_16371_17722[2] = inst_16222);
(statearr_16371_17722[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16333 === 45))
{var inst_16322 = (state_16332[2]);var state_16332__$1 = state_16332;var statearr_16375_17723 = state_16332__$1;(statearr_16375_17723[2] = inst_16322);
(statearr_16375_17723[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16333 === 14))
{var state_16332__$1 = state_16332;var statearr_16376_17724 = state_16332__$1;(statearr_16376_17724[2] = null);
(statearr_16376_17724[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16333 === 15))
{var inst_16209 = (state_16332[14]);var inst_16211 = (state_16332[15]);var inst_16212 = (state_16332[16]);var inst_16210 = (state_16332[17]);var inst_16225 = (state_16332[2]);var inst_16226 = (inst_16212 + 1);var tmp16372 = inst_16209;var tmp16373 = inst_16211;var tmp16374 = inst_16210;var inst_16209__$1 = tmp16372;var inst_16210__$1 = tmp16374;var inst_16211__$1 = tmp16373;var inst_16212__$1 = inst_16226;var state_16332__$1 = (function (){var statearr_16377 = state_16332;(statearr_16377[27] = inst_16225);
(statearr_16377[14] = inst_16209__$1);
(statearr_16377[15] = inst_16211__$1);
(statearr_16377[16] = inst_16212__$1);
(statearr_16377[17] = inst_16210__$1);
return statearr_16377;
})();var statearr_16378_17725 = state_16332__$1;(statearr_16378_17725[2] = null);
(statearr_16378_17725[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16333 === 16))
{var inst_16229 = (state_16332[25]);var inst_16231 = cljs.core.chunked_seq_QMARK_.call(null,inst_16229);var state_16332__$1 = state_16332;if(inst_16231)
{var statearr_16379_17726 = state_16332__$1;(statearr_16379_17726[1] = 19);
} else
{var statearr_16380_17727 = state_16332__$1;(statearr_16380_17727[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16333 === 17))
{var state_16332__$1 = state_16332;var statearr_16381_17728 = state_16332__$1;(statearr_16381_17728[2] = null);
(statearr_16381_17728[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16333 === 18))
{var inst_16253 = (state_16332[2]);var state_16332__$1 = state_16332;var statearr_16382_17729 = state_16332__$1;(statearr_16382_17729[2] = inst_16253);
(statearr_16382_17729[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16333 === 19))
{var inst_16229 = (state_16332[25]);var inst_16233 = cljs.core.chunk_first.call(null,inst_16229);var inst_16234 = cljs.core.chunk_rest.call(null,inst_16229);var inst_16235 = cljs.core.count.call(null,inst_16233);var inst_16209 = inst_16234;var inst_16210 = inst_16233;var inst_16211 = inst_16235;var inst_16212 = 0;var state_16332__$1 = (function (){var statearr_16383 = state_16332;(statearr_16383[14] = inst_16209);
(statearr_16383[15] = inst_16211);
(statearr_16383[16] = inst_16212);
(statearr_16383[17] = inst_16210);
return statearr_16383;
})();var statearr_16384_17730 = state_16332__$1;(statearr_16384_17730[2] = null);
(statearr_16384_17730[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16333 === 20))
{var inst_16229 = (state_16332[25]);var inst_16239 = cljs.core.first.call(null,inst_16229);var inst_16240 = cljs.core.nth.call(null,inst_16239,0,null);var inst_16241 = cljs.core.nth.call(null,inst_16239,1,null);var state_16332__$1 = (function (){var statearr_16385 = state_16332;(statearr_16385[28] = inst_16240);
return statearr_16385;
})();if(cljs.core.truth_(inst_16241))
{var statearr_16386_17731 = state_16332__$1;(statearr_16386_17731[1] = 22);
} else
{var statearr_16387_17732 = state_16332__$1;(statearr_16387_17732[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16333 === 21))
{var inst_16250 = (state_16332[2]);var state_16332__$1 = state_16332;var statearr_16388_17733 = state_16332__$1;(statearr_16388_17733[2] = inst_16250);
(statearr_16388_17733[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16333 === 22))
{var inst_16240 = (state_16332[28]);var inst_16243 = cljs.core.async.close_BANG_.call(null,inst_16240);var state_16332__$1 = state_16332;var statearr_16389_17734 = state_16332__$1;(statearr_16389_17734[2] = inst_16243);
(statearr_16389_17734[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16333 === 23))
{var state_16332__$1 = state_16332;var statearr_16390_17735 = state_16332__$1;(statearr_16390_17735[2] = null);
(statearr_16390_17735[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16333 === 24))
{var inst_16229 = (state_16332[25]);var inst_16246 = (state_16332[2]);var inst_16247 = cljs.core.next.call(null,inst_16229);var inst_16209 = inst_16247;var inst_16210 = null;var inst_16211 = 0;var inst_16212 = 0;var state_16332__$1 = (function (){var statearr_16391 = state_16332;(statearr_16391[29] = inst_16246);
(statearr_16391[14] = inst_16209);
(statearr_16391[15] = inst_16211);
(statearr_16391[16] = inst_16212);
(statearr_16391[17] = inst_16210);
return statearr_16391;
})();var statearr_16392_17736 = state_16332__$1;(statearr_16392_17736[2] = null);
(statearr_16392_17736[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16333 === 25))
{var inst_16270 = (state_16332[12]);var inst_16271 = (state_16332[13]);var inst_16273 = (inst_16271 < inst_16270);var inst_16274 = inst_16273;var state_16332__$1 = state_16332;if(cljs.core.truth_(inst_16274))
{var statearr_16393_17737 = state_16332__$1;(statearr_16393_17737[1] = 27);
} else
{var statearr_16394_17738 = state_16332__$1;(statearr_16394_17738[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16333 === 26))
{var inst_16260 = (state_16332[19]);var inst_16318 = (state_16332[2]);var inst_16319 = cljs.core.seq.call(null,inst_16260);var state_16332__$1 = (function (){var statearr_16395 = state_16332;(statearr_16395[30] = inst_16318);
return statearr_16395;
})();if(inst_16319)
{var statearr_16396_17739 = state_16332__$1;(statearr_16396_17739[1] = 42);
} else
{var statearr_16397_17740 = state_16332__$1;(statearr_16397_17740[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16333 === 27))
{var inst_16269 = (state_16332[11]);var inst_16271 = (state_16332[13]);var inst_16276 = cljs.core._nth.call(null,inst_16269,inst_16271);var state_16332__$1 = (function (){var statearr_16398 = state_16332;(statearr_16398[7] = inst_16276);
return statearr_16398;
})();var statearr_16399_17741 = state_16332__$1;(statearr_16399_17741[2] = null);
(statearr_16399_17741[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16333 === 28))
{var inst_16268 = (state_16332[10]);var inst_16289 = (state_16332[9]);var inst_16289__$1 = cljs.core.seq.call(null,inst_16268);var state_16332__$1 = (function (){var statearr_16403 = state_16332;(statearr_16403[9] = inst_16289__$1);
return statearr_16403;
})();if(inst_16289__$1)
{var statearr_16404_17742 = state_16332__$1;(statearr_16404_17742[1] = 33);
} else
{var statearr_16405_17743 = state_16332__$1;(statearr_16405_17743[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16333 === 29))
{var inst_16316 = (state_16332[2]);var state_16332__$1 = state_16332;var statearr_16406_17744 = state_16332__$1;(statearr_16406_17744[2] = inst_16316);
(statearr_16406_17744[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16333 === 30))
{var inst_16268 = (state_16332[10]);var inst_16269 = (state_16332[11]);var inst_16270 = (state_16332[12]);var inst_16271 = (state_16332[13]);var inst_16285 = (state_16332[2]);var inst_16286 = (inst_16271 + 1);var tmp16400 = inst_16268;var tmp16401 = inst_16269;var tmp16402 = inst_16270;var inst_16268__$1 = tmp16400;var inst_16269__$1 = tmp16401;var inst_16270__$1 = tmp16402;var inst_16271__$1 = inst_16286;var state_16332__$1 = (function (){var statearr_16407 = state_16332;(statearr_16407[10] = inst_16268__$1);
(statearr_16407[11] = inst_16269__$1);
(statearr_16407[12] = inst_16270__$1);
(statearr_16407[13] = inst_16271__$1);
(statearr_16407[31] = inst_16285);
return statearr_16407;
})();var statearr_16408_17745 = state_16332__$1;(statearr_16408_17745[2] = null);
(statearr_16408_17745[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16333 === 31))
{var inst_16276 = (state_16332[7]);var inst_16277 = (state_16332[2]);var inst_16278 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_16279 = cljs.core.async.untap_STAR_.call(null,m,inst_16276);var state_16332__$1 = (function (){var statearr_16409 = state_16332;(statearr_16409[32] = inst_16277);
(statearr_16409[33] = inst_16278);
return statearr_16409;
})();var statearr_16410_17746 = state_16332__$1;(statearr_16410_17746[2] = inst_16279);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16332__$1);
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
});})(c__12698__auto___17694,cs,m,dchan,dctr,done))
;return ((function (switch__12628__auto__,c__12698__auto___17694,cs,m,dchan,dctr,done){
return (function() {
var state_machine__12629__auto__ = null;
var state_machine__12629__auto____0 = (function (){var statearr_16414 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16414[0] = state_machine__12629__auto__);
(statearr_16414[1] = 1);
return statearr_16414;
});
var state_machine__12629__auto____1 = (function (state_16332){while(true){
var ret_value__12630__auto__ = (function (){try{while(true){
var result__12631__auto__ = switch__12628__auto__.call(null,state_16332);if(cljs.core.keyword_identical_QMARK_.call(null,result__12631__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12631__auto__;
}
break;
}
}catch (e16415){if((e16415 instanceof Object))
{var ex__12632__auto__ = e16415;var statearr_16416_17747 = state_16332;(statearr_16416_17747[5] = ex__12632__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16332);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16415;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12630__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17748 = state_16332;
state_16332 = G__17748;
continue;
}
} else
{return ret_value__12630__auto__;
}
break;
}
});
state_machine__12629__auto__ = function(state_16332){
switch(arguments.length){
case 0:
return state_machine__12629__auto____0.call(this);
case 1:
return state_machine__12629__auto____1.call(this,state_16332);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12629__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12629__auto____0;
state_machine__12629__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12629__auto____1;
return state_machine__12629__auto__;
})()
;})(switch__12628__auto__,c__12698__auto___17694,cs,m,dchan,dctr,done))
})();var state__12700__auto__ = (function (){var statearr_16417 = f__12699__auto__.call(null);(statearr_16417[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12698__auto___17694);
return statearr_16417;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12700__auto__);
});})(c__12698__auto___17694,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj16419 = {};return obj16419;
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
;var m = (function (){if(typeof cljs.core.async.t16529 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16529 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta16530){
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
this.meta16530 = meta16530;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16529.cljs$lang$type = true;
cljs.core.async.t16529.cljs$lang$ctorStr = "cljs.core.async/t16529";
cljs.core.async.t16529.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async/t16529");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16529.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t16529.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16529.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16529.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16529.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16529.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16529.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16529.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16529.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16531){var self__ = this;
var _16531__$1 = this;return self__.meta16530;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16529.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16531,meta16530__$1){var self__ = this;
var _16531__$1 = this;return (new cljs.core.async.t16529(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta16530__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t16529 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t16529(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta16530){return (new cljs.core.async.t16529(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta16530));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t16529(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__12698__auto___17749 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__12698__auto___17749,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__12699__auto__ = (function (){var switch__12628__auto__ = ((function (c__12698__auto___17749,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_16596){var state_val_16597 = (state_16596[1]);if((state_val_16597 === 1))
{var inst_16535 = (state_16596[7]);var inst_16535__$1 = calc_state.call(null);var inst_16536 = cljs.core.seq_QMARK_.call(null,inst_16535__$1);var state_16596__$1 = (function (){var statearr_16598 = state_16596;(statearr_16598[7] = inst_16535__$1);
return statearr_16598;
})();if(inst_16536)
{var statearr_16599_17750 = state_16596__$1;(statearr_16599_17750[1] = 2);
} else
{var statearr_16600_17751 = state_16596__$1;(statearr_16600_17751[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16597 === 2))
{var inst_16535 = (state_16596[7]);var inst_16538 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16535);var state_16596__$1 = state_16596;var statearr_16601_17752 = state_16596__$1;(statearr_16601_17752[2] = inst_16538);
(statearr_16601_17752[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16597 === 3))
{var inst_16535 = (state_16596[7]);var state_16596__$1 = state_16596;var statearr_16602_17753 = state_16596__$1;(statearr_16602_17753[2] = inst_16535);
(statearr_16602_17753[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16597 === 4))
{var inst_16535 = (state_16596[7]);var inst_16541 = (state_16596[2]);var inst_16542 = cljs.core.get.call(null,inst_16541,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_16543 = cljs.core.get.call(null,inst_16541,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_16544 = cljs.core.get.call(null,inst_16541,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_16545 = inst_16535;var state_16596__$1 = (function (){var statearr_16603 = state_16596;(statearr_16603[8] = inst_16543);
(statearr_16603[9] = inst_16544);
(statearr_16603[10] = inst_16542);
(statearr_16603[11] = inst_16545);
return statearr_16603;
})();var statearr_16604_17754 = state_16596__$1;(statearr_16604_17754[2] = null);
(statearr_16604_17754[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16597 === 5))
{var inst_16545 = (state_16596[11]);var inst_16548 = cljs.core.seq_QMARK_.call(null,inst_16545);var state_16596__$1 = state_16596;if(inst_16548)
{var statearr_16605_17755 = state_16596__$1;(statearr_16605_17755[1] = 7);
} else
{var statearr_16606_17756 = state_16596__$1;(statearr_16606_17756[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16597 === 6))
{var inst_16594 = (state_16596[2]);var state_16596__$1 = state_16596;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16596__$1,inst_16594);
} else
{if((state_val_16597 === 7))
{var inst_16545 = (state_16596[11]);var inst_16550 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16545);var state_16596__$1 = state_16596;var statearr_16607_17757 = state_16596__$1;(statearr_16607_17757[2] = inst_16550);
(statearr_16607_17757[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16597 === 8))
{var inst_16545 = (state_16596[11]);var state_16596__$1 = state_16596;var statearr_16608_17758 = state_16596__$1;(statearr_16608_17758[2] = inst_16545);
(statearr_16608_17758[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16597 === 9))
{var inst_16553 = (state_16596[12]);var inst_16553__$1 = (state_16596[2]);var inst_16554 = cljs.core.get.call(null,inst_16553__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_16555 = cljs.core.get.call(null,inst_16553__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_16556 = cljs.core.get.call(null,inst_16553__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_16596__$1 = (function (){var statearr_16609 = state_16596;(statearr_16609[13] = inst_16556);
(statearr_16609[14] = inst_16555);
(statearr_16609[12] = inst_16553__$1);
return statearr_16609;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_16596__$1,10,inst_16554);
} else
{if((state_val_16597 === 10))
{var inst_16560 = (state_16596[15]);var inst_16561 = (state_16596[16]);var inst_16559 = (state_16596[2]);var inst_16560__$1 = cljs.core.nth.call(null,inst_16559,0,null);var inst_16561__$1 = cljs.core.nth.call(null,inst_16559,1,null);var inst_16562 = (inst_16560__$1 == null);var inst_16563 = cljs.core._EQ_.call(null,inst_16561__$1,change);var inst_16564 = (inst_16562) || (inst_16563);var state_16596__$1 = (function (){var statearr_16610 = state_16596;(statearr_16610[15] = inst_16560__$1);
(statearr_16610[16] = inst_16561__$1);
return statearr_16610;
})();if(cljs.core.truth_(inst_16564))
{var statearr_16611_17759 = state_16596__$1;(statearr_16611_17759[1] = 11);
} else
{var statearr_16612_17760 = state_16596__$1;(statearr_16612_17760[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16597 === 11))
{var inst_16560 = (state_16596[15]);var inst_16566 = (inst_16560 == null);var state_16596__$1 = state_16596;if(cljs.core.truth_(inst_16566))
{var statearr_16613_17761 = state_16596__$1;(statearr_16613_17761[1] = 14);
} else
{var statearr_16614_17762 = state_16596__$1;(statearr_16614_17762[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16597 === 12))
{var inst_16556 = (state_16596[13]);var inst_16561 = (state_16596[16]);var inst_16575 = (state_16596[17]);var inst_16575__$1 = inst_16556.call(null,inst_16561);var state_16596__$1 = (function (){var statearr_16615 = state_16596;(statearr_16615[17] = inst_16575__$1);
return statearr_16615;
})();if(cljs.core.truth_(inst_16575__$1))
{var statearr_16616_17763 = state_16596__$1;(statearr_16616_17763[1] = 17);
} else
{var statearr_16617_17764 = state_16596__$1;(statearr_16617_17764[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16597 === 13))
{var inst_16592 = (state_16596[2]);var state_16596__$1 = state_16596;var statearr_16618_17765 = state_16596__$1;(statearr_16618_17765[2] = inst_16592);
(statearr_16618_17765[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16597 === 14))
{var inst_16561 = (state_16596[16]);var inst_16568 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_16561);var state_16596__$1 = state_16596;var statearr_16619_17766 = state_16596__$1;(statearr_16619_17766[2] = inst_16568);
(statearr_16619_17766[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16597 === 15))
{var state_16596__$1 = state_16596;var statearr_16620_17767 = state_16596__$1;(statearr_16620_17767[2] = null);
(statearr_16620_17767[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16597 === 16))
{var inst_16571 = (state_16596[2]);var inst_16572 = calc_state.call(null);var inst_16545 = inst_16572;var state_16596__$1 = (function (){var statearr_16621 = state_16596;(statearr_16621[11] = inst_16545);
(statearr_16621[18] = inst_16571);
return statearr_16621;
})();var statearr_16622_17768 = state_16596__$1;(statearr_16622_17768[2] = null);
(statearr_16622_17768[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16597 === 17))
{var inst_16575 = (state_16596[17]);var state_16596__$1 = state_16596;var statearr_16623_17769 = state_16596__$1;(statearr_16623_17769[2] = inst_16575);
(statearr_16623_17769[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16597 === 18))
{var inst_16556 = (state_16596[13]);var inst_16555 = (state_16596[14]);var inst_16561 = (state_16596[16]);var inst_16578 = cljs.core.empty_QMARK_.call(null,inst_16556);var inst_16579 = inst_16555.call(null,inst_16561);var inst_16580 = cljs.core.not.call(null,inst_16579);var inst_16581 = (inst_16578) && (inst_16580);var state_16596__$1 = state_16596;var statearr_16624_17770 = state_16596__$1;(statearr_16624_17770[2] = inst_16581);
(statearr_16624_17770[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16597 === 19))
{var inst_16583 = (state_16596[2]);var state_16596__$1 = state_16596;if(cljs.core.truth_(inst_16583))
{var statearr_16625_17771 = state_16596__$1;(statearr_16625_17771[1] = 20);
} else
{var statearr_16626_17772 = state_16596__$1;(statearr_16626_17772[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16597 === 20))
{var inst_16560 = (state_16596[15]);var state_16596__$1 = state_16596;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16596__$1,23,out,inst_16560);
} else
{if((state_val_16597 === 21))
{var state_16596__$1 = state_16596;var statearr_16627_17773 = state_16596__$1;(statearr_16627_17773[2] = null);
(statearr_16627_17773[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16597 === 22))
{var inst_16553 = (state_16596[12]);var inst_16589 = (state_16596[2]);var inst_16545 = inst_16553;var state_16596__$1 = (function (){var statearr_16628 = state_16596;(statearr_16628[11] = inst_16545);
(statearr_16628[19] = inst_16589);
return statearr_16628;
})();var statearr_16629_17774 = state_16596__$1;(statearr_16629_17774[2] = null);
(statearr_16629_17774[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16597 === 23))
{var inst_16586 = (state_16596[2]);var state_16596__$1 = state_16596;var statearr_16630_17775 = state_16596__$1;(statearr_16630_17775[2] = inst_16586);
(statearr_16630_17775[1] = 22);
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
});})(c__12698__auto___17749,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__12628__auto__,c__12698__auto___17749,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__12629__auto__ = null;
var state_machine__12629__auto____0 = (function (){var statearr_16634 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16634[0] = state_machine__12629__auto__);
(statearr_16634[1] = 1);
return statearr_16634;
});
var state_machine__12629__auto____1 = (function (state_16596){while(true){
var ret_value__12630__auto__ = (function (){try{while(true){
var result__12631__auto__ = switch__12628__auto__.call(null,state_16596);if(cljs.core.keyword_identical_QMARK_.call(null,result__12631__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12631__auto__;
}
break;
}
}catch (e16635){if((e16635 instanceof Object))
{var ex__12632__auto__ = e16635;var statearr_16636_17776 = state_16596;(statearr_16636_17776[5] = ex__12632__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16596);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16635;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12630__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17777 = state_16596;
state_16596 = G__17777;
continue;
}
} else
{return ret_value__12630__auto__;
}
break;
}
});
state_machine__12629__auto__ = function(state_16596){
switch(arguments.length){
case 0:
return state_machine__12629__auto____0.call(this);
case 1:
return state_machine__12629__auto____1.call(this,state_16596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12629__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12629__auto____0;
state_machine__12629__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12629__auto____1;
return state_machine__12629__auto__;
})()
;})(switch__12628__auto__,c__12698__auto___17749,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__12700__auto__ = (function (){var statearr_16637 = f__12699__auto__.call(null);(statearr_16637[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12698__auto___17749);
return statearr_16637;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12700__auto__);
});})(c__12698__auto___17749,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj16639 = {};return obj16639;
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
return (function (p1__16640_SHARP_){if(cljs.core.truth_(p1__16640_SHARP_.call(null,topic)))
{return p1__16640_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__16640_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4884__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t16765 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16765 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta16766){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta16766 = meta16766;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16765.cljs$lang$type = true;
cljs.core.async.t16765.cljs$lang$ctorStr = "cljs.core.async/t16765";
cljs.core.async.t16765.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async/t16765");
});})(mults,ensure_mult))
;
cljs.core.async.t16765.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t16765.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t16765.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t16765.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t16765.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t16765.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16765.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t16765.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_16767){var self__ = this;
var _16767__$1 = this;return self__.meta16766;
});})(mults,ensure_mult))
;
cljs.core.async.t16765.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_16767,meta16766__$1){var self__ = this;
var _16767__$1 = this;return (new cljs.core.async.t16765(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta16766__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t16765 = ((function (mults,ensure_mult){
return (function __GT_t16765(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta16766){return (new cljs.core.async.t16765(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta16766));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t16765(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__12698__auto___17778 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__12698__auto___17778,mults,ensure_mult,p){
return (function (){var f__12699__auto__ = (function (){var switch__12628__auto__ = ((function (c__12698__auto___17778,mults,ensure_mult,p){
return (function (state_16841){var state_val_16842 = (state_16841[1]);if((state_val_16842 === 1))
{var state_16841__$1 = state_16841;var statearr_16843_17779 = state_16841__$1;(statearr_16843_17779[2] = null);
(statearr_16843_17779[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16842 === 2))
{var state_16841__$1 = state_16841;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16841__$1,4,ch);
} else
{if((state_val_16842 === 3))
{var inst_16839 = (state_16841[2]);var state_16841__$1 = state_16841;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16841__$1,inst_16839);
} else
{if((state_val_16842 === 4))
{var inst_16770 = (state_16841[7]);var inst_16770__$1 = (state_16841[2]);var inst_16771 = (inst_16770__$1 == null);var state_16841__$1 = (function (){var statearr_16844 = state_16841;(statearr_16844[7] = inst_16770__$1);
return statearr_16844;
})();if(cljs.core.truth_(inst_16771))
{var statearr_16845_17780 = state_16841__$1;(statearr_16845_17780[1] = 5);
} else
{var statearr_16846_17781 = state_16841__$1;(statearr_16846_17781[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16842 === 5))
{var inst_16777 = cljs.core.deref.call(null,mults);var inst_16778 = cljs.core.vals.call(null,inst_16777);var inst_16779 = cljs.core.seq.call(null,inst_16778);var inst_16780 = inst_16779;var inst_16781 = null;var inst_16782 = 0;var inst_16783 = 0;var state_16841__$1 = (function (){var statearr_16847 = state_16841;(statearr_16847[8] = inst_16783);
(statearr_16847[9] = inst_16780);
(statearr_16847[10] = inst_16782);
(statearr_16847[11] = inst_16781);
return statearr_16847;
})();var statearr_16848_17782 = state_16841__$1;(statearr_16848_17782[2] = null);
(statearr_16848_17782[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16842 === 6))
{var inst_16820 = (state_16841[12]);var inst_16818 = (state_16841[13]);var inst_16770 = (state_16841[7]);var inst_16818__$1 = topic_fn.call(null,inst_16770);var inst_16819 = cljs.core.deref.call(null,mults);var inst_16820__$1 = cljs.core.get.call(null,inst_16819,inst_16818__$1);var state_16841__$1 = (function (){var statearr_16849 = state_16841;(statearr_16849[12] = inst_16820__$1);
(statearr_16849[13] = inst_16818__$1);
return statearr_16849;
})();if(cljs.core.truth_(inst_16820__$1))
{var statearr_16850_17783 = state_16841__$1;(statearr_16850_17783[1] = 19);
} else
{var statearr_16851_17784 = state_16841__$1;(statearr_16851_17784[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16842 === 7))
{var inst_16837 = (state_16841[2]);var state_16841__$1 = state_16841;var statearr_16852_17785 = state_16841__$1;(statearr_16852_17785[2] = inst_16837);
(statearr_16852_17785[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16842 === 8))
{var inst_16783 = (state_16841[8]);var inst_16782 = (state_16841[10]);var inst_16785 = (inst_16783 < inst_16782);var inst_16786 = inst_16785;var state_16841__$1 = state_16841;if(cljs.core.truth_(inst_16786))
{var statearr_16856_17786 = state_16841__$1;(statearr_16856_17786[1] = 10);
} else
{var statearr_16857_17787 = state_16841__$1;(statearr_16857_17787[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16842 === 9))
{var inst_16816 = (state_16841[2]);var state_16841__$1 = state_16841;var statearr_16858_17788 = state_16841__$1;(statearr_16858_17788[2] = inst_16816);
(statearr_16858_17788[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16842 === 10))
{var inst_16783 = (state_16841[8]);var inst_16780 = (state_16841[9]);var inst_16782 = (state_16841[10]);var inst_16781 = (state_16841[11]);var inst_16788 = cljs.core._nth.call(null,inst_16781,inst_16783);var inst_16789 = cljs.core.async.muxch_STAR_.call(null,inst_16788);var inst_16790 = cljs.core.async.close_BANG_.call(null,inst_16789);var inst_16791 = (inst_16783 + 1);var tmp16853 = inst_16780;var tmp16854 = inst_16782;var tmp16855 = inst_16781;var inst_16780__$1 = tmp16853;var inst_16781__$1 = tmp16855;var inst_16782__$1 = tmp16854;var inst_16783__$1 = inst_16791;var state_16841__$1 = (function (){var statearr_16859 = state_16841;(statearr_16859[8] = inst_16783__$1);
(statearr_16859[9] = inst_16780__$1);
(statearr_16859[10] = inst_16782__$1);
(statearr_16859[11] = inst_16781__$1);
(statearr_16859[14] = inst_16790);
return statearr_16859;
})();var statearr_16860_17789 = state_16841__$1;(statearr_16860_17789[2] = null);
(statearr_16860_17789[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16842 === 11))
{var inst_16780 = (state_16841[9]);var inst_16794 = (state_16841[15]);var inst_16794__$1 = cljs.core.seq.call(null,inst_16780);var state_16841__$1 = (function (){var statearr_16861 = state_16841;(statearr_16861[15] = inst_16794__$1);
return statearr_16861;
})();if(inst_16794__$1)
{var statearr_16862_17790 = state_16841__$1;(statearr_16862_17790[1] = 13);
} else
{var statearr_16863_17791 = state_16841__$1;(statearr_16863_17791[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16842 === 12))
{var inst_16814 = (state_16841[2]);var state_16841__$1 = state_16841;var statearr_16864_17792 = state_16841__$1;(statearr_16864_17792[2] = inst_16814);
(statearr_16864_17792[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16842 === 13))
{var inst_16794 = (state_16841[15]);var inst_16796 = cljs.core.chunked_seq_QMARK_.call(null,inst_16794);var state_16841__$1 = state_16841;if(inst_16796)
{var statearr_16865_17793 = state_16841__$1;(statearr_16865_17793[1] = 16);
} else
{var statearr_16866_17794 = state_16841__$1;(statearr_16866_17794[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16842 === 14))
{var state_16841__$1 = state_16841;var statearr_16867_17795 = state_16841__$1;(statearr_16867_17795[2] = null);
(statearr_16867_17795[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16842 === 15))
{var inst_16812 = (state_16841[2]);var state_16841__$1 = state_16841;var statearr_16868_17796 = state_16841__$1;(statearr_16868_17796[2] = inst_16812);
(statearr_16868_17796[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16842 === 16))
{var inst_16794 = (state_16841[15]);var inst_16798 = cljs.core.chunk_first.call(null,inst_16794);var inst_16799 = cljs.core.chunk_rest.call(null,inst_16794);var inst_16800 = cljs.core.count.call(null,inst_16798);var inst_16780 = inst_16799;var inst_16781 = inst_16798;var inst_16782 = inst_16800;var inst_16783 = 0;var state_16841__$1 = (function (){var statearr_16869 = state_16841;(statearr_16869[8] = inst_16783);
(statearr_16869[9] = inst_16780);
(statearr_16869[10] = inst_16782);
(statearr_16869[11] = inst_16781);
return statearr_16869;
})();var statearr_16870_17797 = state_16841__$1;(statearr_16870_17797[2] = null);
(statearr_16870_17797[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16842 === 17))
{var inst_16794 = (state_16841[15]);var inst_16803 = cljs.core.first.call(null,inst_16794);var inst_16804 = cljs.core.async.muxch_STAR_.call(null,inst_16803);var inst_16805 = cljs.core.async.close_BANG_.call(null,inst_16804);var inst_16806 = cljs.core.next.call(null,inst_16794);var inst_16780 = inst_16806;var inst_16781 = null;var inst_16782 = 0;var inst_16783 = 0;var state_16841__$1 = (function (){var statearr_16871 = state_16841;(statearr_16871[8] = inst_16783);
(statearr_16871[9] = inst_16780);
(statearr_16871[10] = inst_16782);
(statearr_16871[11] = inst_16781);
(statearr_16871[16] = inst_16805);
return statearr_16871;
})();var statearr_16872_17798 = state_16841__$1;(statearr_16872_17798[2] = null);
(statearr_16872_17798[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16842 === 18))
{var inst_16809 = (state_16841[2]);var state_16841__$1 = state_16841;var statearr_16873_17799 = state_16841__$1;(statearr_16873_17799[2] = inst_16809);
(statearr_16873_17799[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16842 === 19))
{var state_16841__$1 = state_16841;var statearr_16874_17800 = state_16841__$1;(statearr_16874_17800[2] = null);
(statearr_16874_17800[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16842 === 20))
{var state_16841__$1 = state_16841;var statearr_16875_17801 = state_16841__$1;(statearr_16875_17801[2] = null);
(statearr_16875_17801[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16842 === 21))
{var inst_16834 = (state_16841[2]);var state_16841__$1 = (function (){var statearr_16876 = state_16841;(statearr_16876[17] = inst_16834);
return statearr_16876;
})();var statearr_16877_17802 = state_16841__$1;(statearr_16877_17802[2] = null);
(statearr_16877_17802[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16842 === 22))
{var inst_16831 = (state_16841[2]);var state_16841__$1 = state_16841;var statearr_16878_17803 = state_16841__$1;(statearr_16878_17803[2] = inst_16831);
(statearr_16878_17803[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16842 === 23))
{var inst_16818 = (state_16841[13]);var inst_16822 = (state_16841[2]);var inst_16823 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_16818);var state_16841__$1 = (function (){var statearr_16879 = state_16841;(statearr_16879[18] = inst_16822);
return statearr_16879;
})();var statearr_16880_17804 = state_16841__$1;(statearr_16880_17804[2] = inst_16823);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16841__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16842 === 24))
{var inst_16820 = (state_16841[12]);var inst_16770 = (state_16841[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16841,23,Object,null,22);var inst_16827 = cljs.core.async.muxch_STAR_.call(null,inst_16820);var state_16841__$1 = state_16841;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16841__$1,25,inst_16827,inst_16770);
} else
{if((state_val_16842 === 25))
{var inst_16829 = (state_16841[2]);var state_16841__$1 = state_16841;var statearr_16881_17805 = state_16841__$1;(statearr_16881_17805[2] = inst_16829);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16841__$1);
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
});})(c__12698__auto___17778,mults,ensure_mult,p))
;return ((function (switch__12628__auto__,c__12698__auto___17778,mults,ensure_mult,p){
return (function() {
var state_machine__12629__auto__ = null;
var state_machine__12629__auto____0 = (function (){var statearr_16885 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16885[0] = state_machine__12629__auto__);
(statearr_16885[1] = 1);
return statearr_16885;
});
var state_machine__12629__auto____1 = (function (state_16841){while(true){
var ret_value__12630__auto__ = (function (){try{while(true){
var result__12631__auto__ = switch__12628__auto__.call(null,state_16841);if(cljs.core.keyword_identical_QMARK_.call(null,result__12631__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12631__auto__;
}
break;
}
}catch (e16886){if((e16886 instanceof Object))
{var ex__12632__auto__ = e16886;var statearr_16887_17806 = state_16841;(statearr_16887_17806[5] = ex__12632__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16841);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16886;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12630__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17807 = state_16841;
state_16841 = G__17807;
continue;
}
} else
{return ret_value__12630__auto__;
}
break;
}
});
state_machine__12629__auto__ = function(state_16841){
switch(arguments.length){
case 0:
return state_machine__12629__auto____0.call(this);
case 1:
return state_machine__12629__auto____1.call(this,state_16841);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12629__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12629__auto____0;
state_machine__12629__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12629__auto____1;
return state_machine__12629__auto__;
})()
;})(switch__12628__auto__,c__12698__auto___17778,mults,ensure_mult,p))
})();var state__12700__auto__ = (function (){var statearr_16888 = f__12699__auto__.call(null);(statearr_16888[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12698__auto___17778);
return statearr_16888;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12700__auto__);
});})(c__12698__auto___17778,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__12698__auto___17808 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__12698__auto___17808,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__12699__auto__ = (function (){var switch__12628__auto__ = ((function (c__12698__auto___17808,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_16995){var state_val_16996 = (state_16995[1]);if((state_val_16996 === 1))
{var state_16995__$1 = state_16995;var statearr_16997_17809 = state_16995__$1;(statearr_16997_17809[2] = null);
(statearr_16997_17809[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16996 === 2))
{var inst_16958 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_16959 = 0;var state_16995__$1 = (function (){var statearr_16998 = state_16995;(statearr_16998[7] = inst_16958);
(statearr_16998[8] = inst_16959);
return statearr_16998;
})();var statearr_16999_17810 = state_16995__$1;(statearr_16999_17810[2] = null);
(statearr_16999_17810[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16996 === 3))
{var inst_16993 = (state_16995[2]);var state_16995__$1 = state_16995;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16995__$1,inst_16993);
} else
{if((state_val_16996 === 4))
{var inst_16959 = (state_16995[8]);var inst_16961 = (inst_16959 < cnt);var state_16995__$1 = state_16995;if(cljs.core.truth_(inst_16961))
{var statearr_17000_17811 = state_16995__$1;(statearr_17000_17811[1] = 6);
} else
{var statearr_17001_17812 = state_16995__$1;(statearr_17001_17812[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16996 === 5))
{var inst_16979 = (state_16995[2]);var state_16995__$1 = (function (){var statearr_17002 = state_16995;(statearr_17002[9] = inst_16979);
return statearr_17002;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16995__$1,12,dchan);
} else
{if((state_val_16996 === 6))
{var state_16995__$1 = state_16995;var statearr_17003_17813 = state_16995__$1;(statearr_17003_17813[2] = null);
(statearr_17003_17813[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16996 === 7))
{var state_16995__$1 = state_16995;var statearr_17004_17814 = state_16995__$1;(statearr_17004_17814[2] = null);
(statearr_17004_17814[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16996 === 8))
{var inst_16977 = (state_16995[2]);var state_16995__$1 = state_16995;var statearr_17005_17815 = state_16995__$1;(statearr_17005_17815[2] = inst_16977);
(statearr_17005_17815[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16996 === 9))
{var inst_16959 = (state_16995[8]);var inst_16972 = (state_16995[2]);var inst_16973 = (inst_16959 + 1);var inst_16959__$1 = inst_16973;var state_16995__$1 = (function (){var statearr_17006 = state_16995;(statearr_17006[10] = inst_16972);
(statearr_17006[8] = inst_16959__$1);
return statearr_17006;
})();var statearr_17007_17816 = state_16995__$1;(statearr_17007_17816[2] = null);
(statearr_17007_17816[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16996 === 10))
{var inst_16963 = (state_16995[2]);var inst_16964 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_16995__$1 = (function (){var statearr_17008 = state_16995;(statearr_17008[11] = inst_16963);
return statearr_17008;
})();var statearr_17009_17817 = state_16995__$1;(statearr_17009_17817[2] = inst_16964);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16995__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16996 === 11))
{var inst_16959 = (state_16995[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16995,10,Object,null,9);var inst_16968 = chs__$1.call(null,inst_16959);var inst_16969 = done.call(null,inst_16959);var inst_16970 = cljs.core.async.take_BANG_.call(null,inst_16968,inst_16969);var state_16995__$1 = state_16995;var statearr_17010_17818 = state_16995__$1;(statearr_17010_17818[2] = inst_16970);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16995__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16996 === 12))
{var inst_16981 = (state_16995[12]);var inst_16981__$1 = (state_16995[2]);var inst_16982 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_16981__$1);var state_16995__$1 = (function (){var statearr_17011 = state_16995;(statearr_17011[12] = inst_16981__$1);
return statearr_17011;
})();if(cljs.core.truth_(inst_16982))
{var statearr_17012_17819 = state_16995__$1;(statearr_17012_17819[1] = 13);
} else
{var statearr_17013_17820 = state_16995__$1;(statearr_17013_17820[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16996 === 13))
{var inst_16984 = cljs.core.async.close_BANG_.call(null,out);var state_16995__$1 = state_16995;var statearr_17014_17821 = state_16995__$1;(statearr_17014_17821[2] = inst_16984);
(statearr_17014_17821[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16996 === 14))
{var inst_16981 = (state_16995[12]);var inst_16986 = cljs.core.apply.call(null,f,inst_16981);var state_16995__$1 = state_16995;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16995__$1,16,out,inst_16986);
} else
{if((state_val_16996 === 15))
{var inst_16991 = (state_16995[2]);var state_16995__$1 = state_16995;var statearr_17015_17822 = state_16995__$1;(statearr_17015_17822[2] = inst_16991);
(statearr_17015_17822[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16996 === 16))
{var inst_16988 = (state_16995[2]);var state_16995__$1 = (function (){var statearr_17016 = state_16995;(statearr_17016[13] = inst_16988);
return statearr_17016;
})();var statearr_17017_17823 = state_16995__$1;(statearr_17017_17823[2] = null);
(statearr_17017_17823[1] = 2);
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
});})(c__12698__auto___17808,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__12628__auto__,c__12698__auto___17808,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__12629__auto__ = null;
var state_machine__12629__auto____0 = (function (){var statearr_17021 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17021[0] = state_machine__12629__auto__);
(statearr_17021[1] = 1);
return statearr_17021;
});
var state_machine__12629__auto____1 = (function (state_16995){while(true){
var ret_value__12630__auto__ = (function (){try{while(true){
var result__12631__auto__ = switch__12628__auto__.call(null,state_16995);if(cljs.core.keyword_identical_QMARK_.call(null,result__12631__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12631__auto__;
}
break;
}
}catch (e17022){if((e17022 instanceof Object))
{var ex__12632__auto__ = e17022;var statearr_17023_17824 = state_16995;(statearr_17023_17824[5] = ex__12632__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16995);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17022;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12630__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17825 = state_16995;
state_16995 = G__17825;
continue;
}
} else
{return ret_value__12630__auto__;
}
break;
}
});
state_machine__12629__auto__ = function(state_16995){
switch(arguments.length){
case 0:
return state_machine__12629__auto____0.call(this);
case 1:
return state_machine__12629__auto____1.call(this,state_16995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12629__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12629__auto____0;
state_machine__12629__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12629__auto____1;
return state_machine__12629__auto__;
})()
;})(switch__12628__auto__,c__12698__auto___17808,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__12700__auto__ = (function (){var statearr_17024 = f__12699__auto__.call(null);(statearr_17024[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12698__auto___17808);
return statearr_17024;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12700__auto__);
});})(c__12698__auto___17808,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12698__auto___17826 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__12698__auto___17826,out){
return (function (){var f__12699__auto__ = (function (){var switch__12628__auto__ = ((function (c__12698__auto___17826,out){
return (function (state_17108){var state_val_17109 = (state_17108[1]);if((state_val_17109 === 1))
{var inst_17079 = cljs.core.vec.call(null,chs);var inst_17080 = inst_17079;var state_17108__$1 = (function (){var statearr_17110 = state_17108;(statearr_17110[7] = inst_17080);
return statearr_17110;
})();var statearr_17111_17827 = state_17108__$1;(statearr_17111_17827[2] = null);
(statearr_17111_17827[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17109 === 2))
{var inst_17080 = (state_17108[7]);var inst_17082 = cljs.core.count.call(null,inst_17080);var inst_17083 = (inst_17082 > 0);var state_17108__$1 = state_17108;if(cljs.core.truth_(inst_17083))
{var statearr_17112_17828 = state_17108__$1;(statearr_17112_17828[1] = 4);
} else
{var statearr_17113_17829 = state_17108__$1;(statearr_17113_17829[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17109 === 3))
{var inst_17106 = (state_17108[2]);var state_17108__$1 = state_17108;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17108__$1,inst_17106);
} else
{if((state_val_17109 === 4))
{var inst_17080 = (state_17108[7]);var state_17108__$1 = state_17108;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_17108__$1,7,inst_17080);
} else
{if((state_val_17109 === 5))
{var inst_17102 = cljs.core.async.close_BANG_.call(null,out);var state_17108__$1 = state_17108;var statearr_17114_17830 = state_17108__$1;(statearr_17114_17830[2] = inst_17102);
(statearr_17114_17830[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17109 === 6))
{var inst_17104 = (state_17108[2]);var state_17108__$1 = state_17108;var statearr_17115_17831 = state_17108__$1;(statearr_17115_17831[2] = inst_17104);
(statearr_17115_17831[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17109 === 7))
{var inst_17088 = (state_17108[8]);var inst_17087 = (state_17108[9]);var inst_17087__$1 = (state_17108[2]);var inst_17088__$1 = cljs.core.nth.call(null,inst_17087__$1,0,null);var inst_17089 = cljs.core.nth.call(null,inst_17087__$1,1,null);var inst_17090 = (inst_17088__$1 == null);var state_17108__$1 = (function (){var statearr_17116 = state_17108;(statearr_17116[8] = inst_17088__$1);
(statearr_17116[9] = inst_17087__$1);
(statearr_17116[10] = inst_17089);
return statearr_17116;
})();if(cljs.core.truth_(inst_17090))
{var statearr_17117_17832 = state_17108__$1;(statearr_17117_17832[1] = 8);
} else
{var statearr_17118_17833 = state_17108__$1;(statearr_17118_17833[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17109 === 8))
{var inst_17088 = (state_17108[8]);var inst_17087 = (state_17108[9]);var inst_17089 = (state_17108[10]);var inst_17080 = (state_17108[7]);var inst_17092 = (function (){var c = inst_17089;var v = inst_17088;var vec__17085 = inst_17087;var cs = inst_17080;return ((function (c,v,vec__17085,cs,inst_17088,inst_17087,inst_17089,inst_17080,state_val_17109,c__12698__auto___17826,out){
return (function (p1__17025_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__17025_SHARP_);
});
;})(c,v,vec__17085,cs,inst_17088,inst_17087,inst_17089,inst_17080,state_val_17109,c__12698__auto___17826,out))
})();var inst_17093 = cljs.core.filterv.call(null,inst_17092,inst_17080);var inst_17080__$1 = inst_17093;var state_17108__$1 = (function (){var statearr_17119 = state_17108;(statearr_17119[7] = inst_17080__$1);
return statearr_17119;
})();var statearr_17120_17834 = state_17108__$1;(statearr_17120_17834[2] = null);
(statearr_17120_17834[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17109 === 9))
{var inst_17088 = (state_17108[8]);var state_17108__$1 = state_17108;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17108__$1,11,out,inst_17088);
} else
{if((state_val_17109 === 10))
{var inst_17100 = (state_17108[2]);var state_17108__$1 = state_17108;var statearr_17122_17835 = state_17108__$1;(statearr_17122_17835[2] = inst_17100);
(statearr_17122_17835[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17109 === 11))
{var inst_17080 = (state_17108[7]);var inst_17097 = (state_17108[2]);var tmp17121 = inst_17080;var inst_17080__$1 = tmp17121;var state_17108__$1 = (function (){var statearr_17123 = state_17108;(statearr_17123[11] = inst_17097);
(statearr_17123[7] = inst_17080__$1);
return statearr_17123;
})();var statearr_17124_17836 = state_17108__$1;(statearr_17124_17836[2] = null);
(statearr_17124_17836[1] = 2);
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
});})(c__12698__auto___17826,out))
;return ((function (switch__12628__auto__,c__12698__auto___17826,out){
return (function() {
var state_machine__12629__auto__ = null;
var state_machine__12629__auto____0 = (function (){var statearr_17128 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17128[0] = state_machine__12629__auto__);
(statearr_17128[1] = 1);
return statearr_17128;
});
var state_machine__12629__auto____1 = (function (state_17108){while(true){
var ret_value__12630__auto__ = (function (){try{while(true){
var result__12631__auto__ = switch__12628__auto__.call(null,state_17108);if(cljs.core.keyword_identical_QMARK_.call(null,result__12631__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12631__auto__;
}
break;
}
}catch (e17129){if((e17129 instanceof Object))
{var ex__12632__auto__ = e17129;var statearr_17130_17837 = state_17108;(statearr_17130_17837[5] = ex__12632__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17108);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17129;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12630__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17838 = state_17108;
state_17108 = G__17838;
continue;
}
} else
{return ret_value__12630__auto__;
}
break;
}
});
state_machine__12629__auto__ = function(state_17108){
switch(arguments.length){
case 0:
return state_machine__12629__auto____0.call(this);
case 1:
return state_machine__12629__auto____1.call(this,state_17108);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12629__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12629__auto____0;
state_machine__12629__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12629__auto____1;
return state_machine__12629__auto__;
})()
;})(switch__12628__auto__,c__12698__auto___17826,out))
})();var state__12700__auto__ = (function (){var statearr_17131 = f__12699__auto__.call(null);(statearr_17131[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12698__auto___17826);
return statearr_17131;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12700__auto__);
});})(c__12698__auto___17826,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12698__auto___17839 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__12698__auto___17839,out){
return (function (){var f__12699__auto__ = (function (){var switch__12628__auto__ = ((function (c__12698__auto___17839,out){
return (function (state_17201){var state_val_17202 = (state_17201[1]);if((state_val_17202 === 1))
{var inst_17178 = 0;var state_17201__$1 = (function (){var statearr_17203 = state_17201;(statearr_17203[7] = inst_17178);
return statearr_17203;
})();var statearr_17204_17840 = state_17201__$1;(statearr_17204_17840[2] = null);
(statearr_17204_17840[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17202 === 2))
{var inst_17178 = (state_17201[7]);var inst_17180 = (inst_17178 < n);var state_17201__$1 = state_17201;if(cljs.core.truth_(inst_17180))
{var statearr_17205_17841 = state_17201__$1;(statearr_17205_17841[1] = 4);
} else
{var statearr_17206_17842 = state_17201__$1;(statearr_17206_17842[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17202 === 3))
{var inst_17198 = (state_17201[2]);var inst_17199 = cljs.core.async.close_BANG_.call(null,out);var state_17201__$1 = (function (){var statearr_17207 = state_17201;(statearr_17207[8] = inst_17198);
return statearr_17207;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17201__$1,inst_17199);
} else
{if((state_val_17202 === 4))
{var state_17201__$1 = state_17201;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17201__$1,7,ch);
} else
{if((state_val_17202 === 5))
{var state_17201__$1 = state_17201;var statearr_17208_17843 = state_17201__$1;(statearr_17208_17843[2] = null);
(statearr_17208_17843[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17202 === 6))
{var inst_17196 = (state_17201[2]);var state_17201__$1 = state_17201;var statearr_17209_17844 = state_17201__$1;(statearr_17209_17844[2] = inst_17196);
(statearr_17209_17844[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17202 === 7))
{var inst_17183 = (state_17201[9]);var inst_17183__$1 = (state_17201[2]);var inst_17184 = (inst_17183__$1 == null);var inst_17185 = cljs.core.not.call(null,inst_17184);var state_17201__$1 = (function (){var statearr_17210 = state_17201;(statearr_17210[9] = inst_17183__$1);
return statearr_17210;
})();if(inst_17185)
{var statearr_17211_17845 = state_17201__$1;(statearr_17211_17845[1] = 8);
} else
{var statearr_17212_17846 = state_17201__$1;(statearr_17212_17846[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17202 === 8))
{var inst_17183 = (state_17201[9]);var state_17201__$1 = state_17201;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17201__$1,11,out,inst_17183);
} else
{if((state_val_17202 === 9))
{var state_17201__$1 = state_17201;var statearr_17213_17847 = state_17201__$1;(statearr_17213_17847[2] = null);
(statearr_17213_17847[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17202 === 10))
{var inst_17193 = (state_17201[2]);var state_17201__$1 = state_17201;var statearr_17214_17848 = state_17201__$1;(statearr_17214_17848[2] = inst_17193);
(statearr_17214_17848[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17202 === 11))
{var inst_17178 = (state_17201[7]);var inst_17188 = (state_17201[2]);var inst_17189 = (inst_17178 + 1);var inst_17178__$1 = inst_17189;var state_17201__$1 = (function (){var statearr_17215 = state_17201;(statearr_17215[7] = inst_17178__$1);
(statearr_17215[10] = inst_17188);
return statearr_17215;
})();var statearr_17216_17849 = state_17201__$1;(statearr_17216_17849[2] = null);
(statearr_17216_17849[1] = 2);
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
});})(c__12698__auto___17839,out))
;return ((function (switch__12628__auto__,c__12698__auto___17839,out){
return (function() {
var state_machine__12629__auto__ = null;
var state_machine__12629__auto____0 = (function (){var statearr_17220 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_17220[0] = state_machine__12629__auto__);
(statearr_17220[1] = 1);
return statearr_17220;
});
var state_machine__12629__auto____1 = (function (state_17201){while(true){
var ret_value__12630__auto__ = (function (){try{while(true){
var result__12631__auto__ = switch__12628__auto__.call(null,state_17201);if(cljs.core.keyword_identical_QMARK_.call(null,result__12631__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12631__auto__;
}
break;
}
}catch (e17221){if((e17221 instanceof Object))
{var ex__12632__auto__ = e17221;var statearr_17222_17850 = state_17201;(statearr_17222_17850[5] = ex__12632__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17201);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17221;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12630__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17851 = state_17201;
state_17201 = G__17851;
continue;
}
} else
{return ret_value__12630__auto__;
}
break;
}
});
state_machine__12629__auto__ = function(state_17201){
switch(arguments.length){
case 0:
return state_machine__12629__auto____0.call(this);
case 1:
return state_machine__12629__auto____1.call(this,state_17201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12629__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12629__auto____0;
state_machine__12629__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12629__auto____1;
return state_machine__12629__auto__;
})()
;})(switch__12628__auto__,c__12698__auto___17839,out))
})();var state__12700__auto__ = (function (){var statearr_17223 = f__12699__auto__.call(null);(statearr_17223[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12698__auto___17839);
return statearr_17223;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12700__auto__);
});})(c__12698__auto___17839,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12698__auto___17852 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__12698__auto___17852,out){
return (function (){var f__12699__auto__ = (function (){var switch__12628__auto__ = ((function (c__12698__auto___17852,out){
return (function (state_17295){var state_val_17296 = (state_17295[1]);if((state_val_17296 === 1))
{var inst_17272 = null;var state_17295__$1 = (function (){var statearr_17297 = state_17295;(statearr_17297[7] = inst_17272);
return statearr_17297;
})();var statearr_17298_17853 = state_17295__$1;(statearr_17298_17853[2] = null);
(statearr_17298_17853[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17296 === 2))
{var state_17295__$1 = state_17295;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17295__$1,4,ch);
} else
{if((state_val_17296 === 3))
{var inst_17292 = (state_17295[2]);var inst_17293 = cljs.core.async.close_BANG_.call(null,out);var state_17295__$1 = (function (){var statearr_17299 = state_17295;(statearr_17299[8] = inst_17292);
return statearr_17299;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17295__$1,inst_17293);
} else
{if((state_val_17296 === 4))
{var inst_17275 = (state_17295[9]);var inst_17275__$1 = (state_17295[2]);var inst_17276 = (inst_17275__$1 == null);var inst_17277 = cljs.core.not.call(null,inst_17276);var state_17295__$1 = (function (){var statearr_17300 = state_17295;(statearr_17300[9] = inst_17275__$1);
return statearr_17300;
})();if(inst_17277)
{var statearr_17301_17854 = state_17295__$1;(statearr_17301_17854[1] = 5);
} else
{var statearr_17302_17855 = state_17295__$1;(statearr_17302_17855[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17296 === 5))
{var inst_17275 = (state_17295[9]);var inst_17272 = (state_17295[7]);var inst_17279 = cljs.core._EQ_.call(null,inst_17275,inst_17272);var state_17295__$1 = state_17295;if(inst_17279)
{var statearr_17303_17856 = state_17295__$1;(statearr_17303_17856[1] = 8);
} else
{var statearr_17304_17857 = state_17295__$1;(statearr_17304_17857[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17296 === 6))
{var state_17295__$1 = state_17295;var statearr_17306_17858 = state_17295__$1;(statearr_17306_17858[2] = null);
(statearr_17306_17858[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17296 === 7))
{var inst_17290 = (state_17295[2]);var state_17295__$1 = state_17295;var statearr_17307_17859 = state_17295__$1;(statearr_17307_17859[2] = inst_17290);
(statearr_17307_17859[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17296 === 8))
{var inst_17272 = (state_17295[7]);var tmp17305 = inst_17272;var inst_17272__$1 = tmp17305;var state_17295__$1 = (function (){var statearr_17308 = state_17295;(statearr_17308[7] = inst_17272__$1);
return statearr_17308;
})();var statearr_17309_17860 = state_17295__$1;(statearr_17309_17860[2] = null);
(statearr_17309_17860[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17296 === 9))
{var inst_17275 = (state_17295[9]);var state_17295__$1 = state_17295;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17295__$1,11,out,inst_17275);
} else
{if((state_val_17296 === 10))
{var inst_17287 = (state_17295[2]);var state_17295__$1 = state_17295;var statearr_17310_17861 = state_17295__$1;(statearr_17310_17861[2] = inst_17287);
(statearr_17310_17861[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17296 === 11))
{var inst_17275 = (state_17295[9]);var inst_17284 = (state_17295[2]);var inst_17272 = inst_17275;var state_17295__$1 = (function (){var statearr_17311 = state_17295;(statearr_17311[10] = inst_17284);
(statearr_17311[7] = inst_17272);
return statearr_17311;
})();var statearr_17312_17862 = state_17295__$1;(statearr_17312_17862[2] = null);
(statearr_17312_17862[1] = 2);
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
});})(c__12698__auto___17852,out))
;return ((function (switch__12628__auto__,c__12698__auto___17852,out){
return (function() {
var state_machine__12629__auto__ = null;
var state_machine__12629__auto____0 = (function (){var statearr_17316 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_17316[0] = state_machine__12629__auto__);
(statearr_17316[1] = 1);
return statearr_17316;
});
var state_machine__12629__auto____1 = (function (state_17295){while(true){
var ret_value__12630__auto__ = (function (){try{while(true){
var result__12631__auto__ = switch__12628__auto__.call(null,state_17295);if(cljs.core.keyword_identical_QMARK_.call(null,result__12631__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12631__auto__;
}
break;
}
}catch (e17317){if((e17317 instanceof Object))
{var ex__12632__auto__ = e17317;var statearr_17318_17863 = state_17295;(statearr_17318_17863[5] = ex__12632__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17295);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17317;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12630__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17864 = state_17295;
state_17295 = G__17864;
continue;
}
} else
{return ret_value__12630__auto__;
}
break;
}
});
state_machine__12629__auto__ = function(state_17295){
switch(arguments.length){
case 0:
return state_machine__12629__auto____0.call(this);
case 1:
return state_machine__12629__auto____1.call(this,state_17295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12629__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12629__auto____0;
state_machine__12629__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12629__auto____1;
return state_machine__12629__auto__;
})()
;})(switch__12628__auto__,c__12698__auto___17852,out))
})();var state__12700__auto__ = (function (){var statearr_17319 = f__12699__auto__.call(null);(statearr_17319[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12698__auto___17852);
return statearr_17319;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12700__auto__);
});})(c__12698__auto___17852,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12698__auto___17865 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__12698__auto___17865,out){
return (function (){var f__12699__auto__ = (function (){var switch__12628__auto__ = ((function (c__12698__auto___17865,out){
return (function (state_17424){var state_val_17425 = (state_17424[1]);if((state_val_17425 === 1))
{var inst_17387 = (new Array(n));var inst_17388 = inst_17387;var inst_17389 = 0;var state_17424__$1 = (function (){var statearr_17426 = state_17424;(statearr_17426[7] = inst_17388);
(statearr_17426[8] = inst_17389);
return statearr_17426;
})();var statearr_17427_17866 = state_17424__$1;(statearr_17427_17866[2] = null);
(statearr_17427_17866[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17425 === 2))
{var state_17424__$1 = state_17424;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17424__$1,4,ch);
} else
{if((state_val_17425 === 3))
{var inst_17422 = (state_17424[2]);var state_17424__$1 = state_17424;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17424__$1,inst_17422);
} else
{if((state_val_17425 === 4))
{var inst_17392 = (state_17424[9]);var inst_17392__$1 = (state_17424[2]);var inst_17393 = (inst_17392__$1 == null);var inst_17394 = cljs.core.not.call(null,inst_17393);var state_17424__$1 = (function (){var statearr_17428 = state_17424;(statearr_17428[9] = inst_17392__$1);
return statearr_17428;
})();if(inst_17394)
{var statearr_17429_17867 = state_17424__$1;(statearr_17429_17867[1] = 5);
} else
{var statearr_17430_17868 = state_17424__$1;(statearr_17430_17868[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17425 === 5))
{var inst_17397 = (state_17424[10]);var inst_17392 = (state_17424[9]);var inst_17388 = (state_17424[7]);var inst_17389 = (state_17424[8]);var inst_17396 = (inst_17388[inst_17389] = inst_17392);var inst_17397__$1 = (inst_17389 + 1);var inst_17398 = (inst_17397__$1 < n);var state_17424__$1 = (function (){var statearr_17431 = state_17424;(statearr_17431[11] = inst_17396);
(statearr_17431[10] = inst_17397__$1);
return statearr_17431;
})();if(cljs.core.truth_(inst_17398))
{var statearr_17432_17869 = state_17424__$1;(statearr_17432_17869[1] = 8);
} else
{var statearr_17433_17870 = state_17424__$1;(statearr_17433_17870[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17425 === 6))
{var inst_17389 = (state_17424[8]);var inst_17410 = (inst_17389 > 0);var state_17424__$1 = state_17424;if(cljs.core.truth_(inst_17410))
{var statearr_17435_17871 = state_17424__$1;(statearr_17435_17871[1] = 12);
} else
{var statearr_17436_17872 = state_17424__$1;(statearr_17436_17872[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17425 === 7))
{var inst_17420 = (state_17424[2]);var state_17424__$1 = state_17424;var statearr_17437_17873 = state_17424__$1;(statearr_17437_17873[2] = inst_17420);
(statearr_17437_17873[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17425 === 8))
{var inst_17397 = (state_17424[10]);var inst_17388 = (state_17424[7]);var tmp17434 = inst_17388;var inst_17388__$1 = tmp17434;var inst_17389 = inst_17397;var state_17424__$1 = (function (){var statearr_17438 = state_17424;(statearr_17438[7] = inst_17388__$1);
(statearr_17438[8] = inst_17389);
return statearr_17438;
})();var statearr_17439_17874 = state_17424__$1;(statearr_17439_17874[2] = null);
(statearr_17439_17874[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17425 === 9))
{var inst_17388 = (state_17424[7]);var inst_17402 = cljs.core.vec.call(null,inst_17388);var state_17424__$1 = state_17424;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17424__$1,11,out,inst_17402);
} else
{if((state_val_17425 === 10))
{var inst_17408 = (state_17424[2]);var state_17424__$1 = state_17424;var statearr_17440_17875 = state_17424__$1;(statearr_17440_17875[2] = inst_17408);
(statearr_17440_17875[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17425 === 11))
{var inst_17404 = (state_17424[2]);var inst_17405 = (new Array(n));var inst_17388 = inst_17405;var inst_17389 = 0;var state_17424__$1 = (function (){var statearr_17441 = state_17424;(statearr_17441[12] = inst_17404);
(statearr_17441[7] = inst_17388);
(statearr_17441[8] = inst_17389);
return statearr_17441;
})();var statearr_17442_17876 = state_17424__$1;(statearr_17442_17876[2] = null);
(statearr_17442_17876[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17425 === 12))
{var inst_17388 = (state_17424[7]);var inst_17412 = cljs.core.vec.call(null,inst_17388);var state_17424__$1 = state_17424;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17424__$1,15,out,inst_17412);
} else
{if((state_val_17425 === 13))
{var state_17424__$1 = state_17424;var statearr_17443_17877 = state_17424__$1;(statearr_17443_17877[2] = null);
(statearr_17443_17877[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17425 === 14))
{var inst_17417 = (state_17424[2]);var inst_17418 = cljs.core.async.close_BANG_.call(null,out);var state_17424__$1 = (function (){var statearr_17444 = state_17424;(statearr_17444[13] = inst_17417);
return statearr_17444;
})();var statearr_17445_17878 = state_17424__$1;(statearr_17445_17878[2] = inst_17418);
(statearr_17445_17878[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17425 === 15))
{var inst_17414 = (state_17424[2]);var state_17424__$1 = state_17424;var statearr_17446_17879 = state_17424__$1;(statearr_17446_17879[2] = inst_17414);
(statearr_17446_17879[1] = 14);
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
});})(c__12698__auto___17865,out))
;return ((function (switch__12628__auto__,c__12698__auto___17865,out){
return (function() {
var state_machine__12629__auto__ = null;
var state_machine__12629__auto____0 = (function (){var statearr_17450 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17450[0] = state_machine__12629__auto__);
(statearr_17450[1] = 1);
return statearr_17450;
});
var state_machine__12629__auto____1 = (function (state_17424){while(true){
var ret_value__12630__auto__ = (function (){try{while(true){
var result__12631__auto__ = switch__12628__auto__.call(null,state_17424);if(cljs.core.keyword_identical_QMARK_.call(null,result__12631__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12631__auto__;
}
break;
}
}catch (e17451){if((e17451 instanceof Object))
{var ex__12632__auto__ = e17451;var statearr_17452_17880 = state_17424;(statearr_17452_17880[5] = ex__12632__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17424);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17451;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12630__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17881 = state_17424;
state_17424 = G__17881;
continue;
}
} else
{return ret_value__12630__auto__;
}
break;
}
});
state_machine__12629__auto__ = function(state_17424){
switch(arguments.length){
case 0:
return state_machine__12629__auto____0.call(this);
case 1:
return state_machine__12629__auto____1.call(this,state_17424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12629__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12629__auto____0;
state_machine__12629__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12629__auto____1;
return state_machine__12629__auto__;
})()
;})(switch__12628__auto__,c__12698__auto___17865,out))
})();var state__12700__auto__ = (function (){var statearr_17453 = f__12699__auto__.call(null);(statearr_17453[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12698__auto___17865);
return statearr_17453;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12700__auto__);
});})(c__12698__auto___17865,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12698__auto___17882 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__12698__auto___17882,out){
return (function (){var f__12699__auto__ = (function (){var switch__12628__auto__ = ((function (c__12698__auto___17882,out){
return (function (state_17566){var state_val_17567 = (state_17566[1]);if((state_val_17567 === 1))
{var inst_17525 = [];var inst_17526 = inst_17525;var inst_17527 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_17566__$1 = (function (){var statearr_17568 = state_17566;(statearr_17568[7] = inst_17527);
(statearr_17568[8] = inst_17526);
return statearr_17568;
})();var statearr_17569_17883 = state_17566__$1;(statearr_17569_17883[2] = null);
(statearr_17569_17883[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17567 === 2))
{var state_17566__$1 = state_17566;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17566__$1,4,ch);
} else
{if((state_val_17567 === 3))
{var inst_17564 = (state_17566[2]);var state_17566__$1 = state_17566;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17566__$1,inst_17564);
} else
{if((state_val_17567 === 4))
{var inst_17530 = (state_17566[9]);var inst_17530__$1 = (state_17566[2]);var inst_17531 = (inst_17530__$1 == null);var inst_17532 = cljs.core.not.call(null,inst_17531);var state_17566__$1 = (function (){var statearr_17570 = state_17566;(statearr_17570[9] = inst_17530__$1);
return statearr_17570;
})();if(inst_17532)
{var statearr_17571_17884 = state_17566__$1;(statearr_17571_17884[1] = 5);
} else
{var statearr_17572_17885 = state_17566__$1;(statearr_17572_17885[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17567 === 5))
{var inst_17527 = (state_17566[7]);var inst_17534 = (state_17566[10]);var inst_17530 = (state_17566[9]);var inst_17534__$1 = f.call(null,inst_17530);var inst_17535 = cljs.core._EQ_.call(null,inst_17534__$1,inst_17527);var inst_17536 = cljs.core.keyword_identical_QMARK_.call(null,inst_17527,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_17537 = (inst_17535) || (inst_17536);var state_17566__$1 = (function (){var statearr_17573 = state_17566;(statearr_17573[10] = inst_17534__$1);
return statearr_17573;
})();if(cljs.core.truth_(inst_17537))
{var statearr_17574_17886 = state_17566__$1;(statearr_17574_17886[1] = 8);
} else
{var statearr_17575_17887 = state_17566__$1;(statearr_17575_17887[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17567 === 6))
{var inst_17526 = (state_17566[8]);var inst_17551 = inst_17526.length;var inst_17552 = (inst_17551 > 0);var state_17566__$1 = state_17566;if(cljs.core.truth_(inst_17552))
{var statearr_17577_17888 = state_17566__$1;(statearr_17577_17888[1] = 12);
} else
{var statearr_17578_17889 = state_17566__$1;(statearr_17578_17889[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17567 === 7))
{var inst_17562 = (state_17566[2]);var state_17566__$1 = state_17566;var statearr_17579_17890 = state_17566__$1;(statearr_17579_17890[2] = inst_17562);
(statearr_17579_17890[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17567 === 8))
{var inst_17526 = (state_17566[8]);var inst_17534 = (state_17566[10]);var inst_17530 = (state_17566[9]);var inst_17539 = inst_17526.push(inst_17530);var tmp17576 = inst_17526;var inst_17526__$1 = tmp17576;var inst_17527 = inst_17534;var state_17566__$1 = (function (){var statearr_17580 = state_17566;(statearr_17580[7] = inst_17527);
(statearr_17580[8] = inst_17526__$1);
(statearr_17580[11] = inst_17539);
return statearr_17580;
})();var statearr_17581_17891 = state_17566__$1;(statearr_17581_17891[2] = null);
(statearr_17581_17891[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17567 === 9))
{var inst_17526 = (state_17566[8]);var inst_17542 = cljs.core.vec.call(null,inst_17526);var state_17566__$1 = state_17566;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17566__$1,11,out,inst_17542);
} else
{if((state_val_17567 === 10))
{var inst_17549 = (state_17566[2]);var state_17566__$1 = state_17566;var statearr_17582_17892 = state_17566__$1;(statearr_17582_17892[2] = inst_17549);
(statearr_17582_17892[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17567 === 11))
{var inst_17534 = (state_17566[10]);var inst_17530 = (state_17566[9]);var inst_17544 = (state_17566[2]);var inst_17545 = [];var inst_17546 = inst_17545.push(inst_17530);var inst_17526 = inst_17545;var inst_17527 = inst_17534;var state_17566__$1 = (function (){var statearr_17583 = state_17566;(statearr_17583[7] = inst_17527);
(statearr_17583[8] = inst_17526);
(statearr_17583[12] = inst_17546);
(statearr_17583[13] = inst_17544);
return statearr_17583;
})();var statearr_17584_17893 = state_17566__$1;(statearr_17584_17893[2] = null);
(statearr_17584_17893[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17567 === 12))
{var inst_17526 = (state_17566[8]);var inst_17554 = cljs.core.vec.call(null,inst_17526);var state_17566__$1 = state_17566;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17566__$1,15,out,inst_17554);
} else
{if((state_val_17567 === 13))
{var state_17566__$1 = state_17566;var statearr_17585_17894 = state_17566__$1;(statearr_17585_17894[2] = null);
(statearr_17585_17894[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17567 === 14))
{var inst_17559 = (state_17566[2]);var inst_17560 = cljs.core.async.close_BANG_.call(null,out);var state_17566__$1 = (function (){var statearr_17586 = state_17566;(statearr_17586[14] = inst_17559);
return statearr_17586;
})();var statearr_17587_17895 = state_17566__$1;(statearr_17587_17895[2] = inst_17560);
(statearr_17587_17895[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17567 === 15))
{var inst_17556 = (state_17566[2]);var state_17566__$1 = state_17566;var statearr_17588_17896 = state_17566__$1;(statearr_17588_17896[2] = inst_17556);
(statearr_17588_17896[1] = 14);
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
});})(c__12698__auto___17882,out))
;return ((function (switch__12628__auto__,c__12698__auto___17882,out){
return (function() {
var state_machine__12629__auto__ = null;
var state_machine__12629__auto____0 = (function (){var statearr_17592 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17592[0] = state_machine__12629__auto__);
(statearr_17592[1] = 1);
return statearr_17592;
});
var state_machine__12629__auto____1 = (function (state_17566){while(true){
var ret_value__12630__auto__ = (function (){try{while(true){
var result__12631__auto__ = switch__12628__auto__.call(null,state_17566);if(cljs.core.keyword_identical_QMARK_.call(null,result__12631__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12631__auto__;
}
break;
}
}catch (e17593){if((e17593 instanceof Object))
{var ex__12632__auto__ = e17593;var statearr_17594_17897 = state_17566;(statearr_17594_17897[5] = ex__12632__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17566);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17593;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12630__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17898 = state_17566;
state_17566 = G__17898;
continue;
}
} else
{return ret_value__12630__auto__;
}
break;
}
});
state_machine__12629__auto__ = function(state_17566){
switch(arguments.length){
case 0:
return state_machine__12629__auto____0.call(this);
case 1:
return state_machine__12629__auto____1.call(this,state_17566);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12629__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12629__auto____0;
state_machine__12629__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12629__auto____1;
return state_machine__12629__auto__;
})()
;})(switch__12628__auto__,c__12698__auto___17882,out))
})();var state__12700__auto__ = (function (){var statearr_17595 = f__12699__auto__.call(null);(statearr_17595[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12698__auto___17882);
return statearr_17595;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12700__auto__);
});})(c__12698__auto___17882,out))
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
{var o = (function (){var obj11124 = {};return obj11124;
})();var seq__11125_11138 = cljs.core.seq.call(null,obj);var chunk__11126_11139 = null;var count__11127_11140 = 0;var i__11128_11141 = 0;while(true){
if((i__11128_11141 < count__11127_11140))
{var vec__11129_11142 = cljs.core._nth.call(null,chunk__11126_11139,i__11128_11141);var k_11143 = cljs.core.nth.call(null,vec__11129_11142,0,null);var v_11144 = cljs.core.nth.call(null,vec__11129_11142,1,null);(o[cljs.core.name.call(null,k_11143)] = js_props.call(null,v_11144));
{
var G__11145 = seq__11125_11138;
var G__11146 = chunk__11126_11139;
var G__11147 = count__11127_11140;
var G__11148 = (i__11128_11141 + 1);
seq__11125_11138 = G__11145;
chunk__11126_11139 = G__11146;
count__11127_11140 = G__11147;
i__11128_11141 = G__11148;
continue;
}
} else
{var temp__4092__auto___11149 = cljs.core.seq.call(null,seq__11125_11138);if(temp__4092__auto___11149)
{var seq__11125_11150__$1 = temp__4092__auto___11149;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11125_11150__$1))
{var c__5632__auto___11151 = cljs.core.chunk_first.call(null,seq__11125_11150__$1);{
var G__11152 = cljs.core.chunk_rest.call(null,seq__11125_11150__$1);
var G__11153 = c__5632__auto___11151;
var G__11154 = cljs.core.count.call(null,c__5632__auto___11151);
var G__11155 = 0;
seq__11125_11138 = G__11152;
chunk__11126_11139 = G__11153;
count__11127_11140 = G__11154;
i__11128_11141 = G__11155;
continue;
}
} else
{var vec__11130_11156 = cljs.core.first.call(null,seq__11125_11150__$1);var k_11157 = cljs.core.nth.call(null,vec__11130_11156,0,null);var v_11158 = cljs.core.nth.call(null,vec__11130_11156,1,null);(o[cljs.core.name.call(null,k_11157)] = js_props.call(null,v_11158));
{
var G__11159 = cljs.core.next.call(null,seq__11125_11150__$1);
var G__11160 = null;
var G__11161 = 0;
var G__11162 = 0;
seq__11125_11138 = G__11159;
chunk__11126_11139 = G__11160;
count__11127_11140 = G__11161;
i__11128_11141 = G__11162;
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
quiescent.component = (function component(renderer){var react_component = React.createClass({"render": (function (){var this$ = this;var _STAR_component_STAR_11132 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return cljs.core.apply.call(null,renderer,(this$.props["value"]),(this$.props["statics"]));
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11132;
}}), "shouldComponentUpdate": (function (next_props,_){var this$ = this;return cljs.core.not_EQ_.call(null,(this$.props["value"]),(next_props["value"]));
})});return ((function (react_component){
return (function() { 
var G__11163__delegate = function (value,static_args){return react_component.call(null,{"statics": static_args, "value": value});
};
var G__11163 = function (value,var_args){
var static_args = null;if (arguments.length > 1) {
  static_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__11163__delegate.call(this,value,static_args);};
G__11163.cljs$lang$maxFixedArity = 1;
G__11163.cljs$lang$applyTo = (function (arglist__11164){
var value = cljs.core.first(arglist__11164);
var static_args = cljs.core.rest(arglist__11164);
return G__11163__delegate(value,static_args);
});
G__11163.cljs$core$IFn$_invoke$arity$variadic = G__11163__delegate;
return G__11163;
})()
;
;})(react_component))
});
/**
* Wrapper component used to mix-in lifecycle access
*/
quiescent.WrapperComponent = React.createClass({"componentWillUnmount": (function (){var this$ = this;var temp__4092__auto__ = (this$.props["onWillUnmount"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_11137 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null);
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11137;
}} else
{return null;
}
}), "componentWillUpdate": (function (_,___$1){var this$ = this;var temp__4092__auto__ = (this$.props["onWillUpdate"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_11136 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null);
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11136;
}} else
{return null;
}
}), "componentWillMount": (function (){var this$ = this;var temp__4092__auto__ = (this$.props["onWillMount"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_11135 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null);
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11135;
}} else
{return null;
}
}), "componentDidMount": (function (){var this$ = this;var temp__4092__auto__ = (this$.props["onMount"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_11134 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null,this$.getDOMNode());
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11134;
}} else
{return null;
}
}), "componentDidUpdate": (function (prev_props,prev_state){var this$ = this;var temp__4092__auto__ = (this$.props["onUpdate"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_11133 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null,this$.getDOMNode());
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11133;
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
var wrapper__delegate = function (child,kvs){var props = quiescent.js_props.call(null,cljs.core.apply.call(null,cljs.core.array_map,new cljs.core.Keyword(null,"wrappee","wrappee",2609412088),child,kvs));var temp__4092__auto___11165 = (child.props["key"]);if(cljs.core.truth_(temp__4092__auto___11165))
{var key_11166 = temp__4092__auto___11165;(props["key"] = key_11166);
} else
{}
return quiescent.WrapperComponent.call(null,props);
};
var wrapper = function (child,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrapper__delegate.call(this,child,kvs);};
wrapper.cljs$lang$maxFixedArity = 1;
wrapper.cljs$lang$applyTo = (function (arglist__11167){
var child = cljs.core.first(arglist__11167);
var kvs = cljs.core.rest(arglist__11167);
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
var a__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__7549_8497 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__7550_8498 = null;var count__7551_8499 = 0;var i__7552_8500 = 0;while(true){
if((i__7552_8500 < count__7551_8499))
{var arg__6549__auto___8501 = cljs.core._nth.call(null,chunk__7550_8498,i__7552_8500);a__6548__auto__.push(arg__6549__auto___8501);
{
var G__8502 = seq__7549_8497;
var G__8503 = chunk__7550_8498;
var G__8504 = count__7551_8499;
var G__8505 = (i__7552_8500 + 1);
seq__7549_8497 = G__8502;
chunk__7550_8498 = G__8503;
count__7551_8499 = G__8504;
i__7552_8500 = G__8505;
continue;
}
} else
{var temp__4092__auto___8506 = cljs.core.seq.call(null,seq__7549_8497);if(temp__4092__auto___8506)
{var seq__7549_8507__$1 = temp__4092__auto___8506;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7549_8507__$1))
{var c__5632__auto___8508 = cljs.core.chunk_first.call(null,seq__7549_8507__$1);{
var G__8509 = cljs.core.chunk_rest.call(null,seq__7549_8507__$1);
var G__8510 = c__5632__auto___8508;
var G__8511 = cljs.core.count.call(null,c__5632__auto___8508);
var G__8512 = 0;
seq__7549_8497 = G__8509;
chunk__7550_8498 = G__8510;
count__7551_8499 = G__8511;
i__7552_8500 = G__8512;
continue;
}
} else
{var arg__6549__auto___8513 = cljs.core.first.call(null,seq__7549_8507__$1);a__6548__auto__.push(arg__6549__auto___8513);
{
var G__8514 = cljs.core.next.call(null,seq__7549_8507__$1);
var G__8515 = null;
var G__8516 = 0;
var G__8517 = 0;
seq__7549_8497 = G__8514;
chunk__7550_8498 = G__8515;
count__7551_8499 = G__8516;
i__7552_8500 = G__8517;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.a.apply(null,a__6548__auto__);
};
var a = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return a__delegate.call(this,args__6547__auto__);};
a.cljs$lang$maxFixedArity = 0;
a.cljs$lang$applyTo = (function (arglist__8518){
var args__6547__auto__ = cljs.core.seq(arglist__8518);
return a__delegate(args__6547__auto__);
});
a.cljs$core$IFn$_invoke$arity$variadic = a__delegate;
return a;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.abbr = (function() { 
var abbr__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__7557_8519 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__7558_8520 = null;var count__7559_8521 = 0;var i__7560_8522 = 0;while(true){
if((i__7560_8522 < count__7559_8521))
{var arg__6549__auto___8523 = cljs.core._nth.call(null,chunk__7558_8520,i__7560_8522);a__6548__auto__.push(arg__6549__auto___8523);
{
var G__8524 = seq__7557_8519;
var G__8525 = chunk__7558_8520;
var G__8526 = count__7559_8521;
var G__8527 = (i__7560_8522 + 1);
seq__7557_8519 = G__8524;
chunk__7558_8520 = G__8525;
count__7559_8521 = G__8526;
i__7560_8522 = G__8527;
continue;
}
} else
{var temp__4092__auto___8528 = cljs.core.seq.call(null,seq__7557_8519);if(temp__4092__auto___8528)
{var seq__7557_8529__$1 = temp__4092__auto___8528;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7557_8529__$1))
{var c__5632__auto___8530 = cljs.core.chunk_first.call(null,seq__7557_8529__$1);{
var G__8531 = cljs.core.chunk_rest.call(null,seq__7557_8529__$1);
var G__8532 = c__5632__auto___8530;
var G__8533 = cljs.core.count.call(null,c__5632__auto___8530);
var G__8534 = 0;
seq__7557_8519 = G__8531;
chunk__7558_8520 = G__8532;
count__7559_8521 = G__8533;
i__7560_8522 = G__8534;
continue;
}
} else
{var arg__6549__auto___8535 = cljs.core.first.call(null,seq__7557_8529__$1);a__6548__auto__.push(arg__6549__auto___8535);
{
var G__8536 = cljs.core.next.call(null,seq__7557_8529__$1);
var G__8537 = null;
var G__8538 = 0;
var G__8539 = 0;
seq__7557_8519 = G__8536;
chunk__7558_8520 = G__8537;
count__7559_8521 = G__8538;
i__7560_8522 = G__8539;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.abbr.apply(null,a__6548__auto__);
};
var abbr = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return abbr__delegate.call(this,args__6547__auto__);};
abbr.cljs$lang$maxFixedArity = 0;
abbr.cljs$lang$applyTo = (function (arglist__8540){
var args__6547__auto__ = cljs.core.seq(arglist__8540);
return abbr__delegate(args__6547__auto__);
});
abbr.cljs$core$IFn$_invoke$arity$variadic = abbr__delegate;
return abbr;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.address = (function() { 
var address__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__7565_8541 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__7566_8542 = null;var count__7567_8543 = 0;var i__7568_8544 = 0;while(true){
if((i__7568_8544 < count__7567_8543))
{var arg__6549__auto___8545 = cljs.core._nth.call(null,chunk__7566_8542,i__7568_8544);a__6548__auto__.push(arg__6549__auto___8545);
{
var G__8546 = seq__7565_8541;
var G__8547 = chunk__7566_8542;
var G__8548 = count__7567_8543;
var G__8549 = (i__7568_8544 + 1);
seq__7565_8541 = G__8546;
chunk__7566_8542 = G__8547;
count__7567_8543 = G__8548;
i__7568_8544 = G__8549;
continue;
}
} else
{var temp__4092__auto___8550 = cljs.core.seq.call(null,seq__7565_8541);if(temp__4092__auto___8550)
{var seq__7565_8551__$1 = temp__4092__auto___8550;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7565_8551__$1))
{var c__5632__auto___8552 = cljs.core.chunk_first.call(null,seq__7565_8551__$1);{
var G__8553 = cljs.core.chunk_rest.call(null,seq__7565_8551__$1);
var G__8554 = c__5632__auto___8552;
var G__8555 = cljs.core.count.call(null,c__5632__auto___8552);
var G__8556 = 0;
seq__7565_8541 = G__8553;
chunk__7566_8542 = G__8554;
count__7567_8543 = G__8555;
i__7568_8544 = G__8556;
continue;
}
} else
{var arg__6549__auto___8557 = cljs.core.first.call(null,seq__7565_8551__$1);a__6548__auto__.push(arg__6549__auto___8557);
{
var G__8558 = cljs.core.next.call(null,seq__7565_8551__$1);
var G__8559 = null;
var G__8560 = 0;
var G__8561 = 0;
seq__7565_8541 = G__8558;
chunk__7566_8542 = G__8559;
count__7567_8543 = G__8560;
i__7568_8544 = G__8561;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.address.apply(null,a__6548__auto__);
};
var address = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return address__delegate.call(this,args__6547__auto__);};
address.cljs$lang$maxFixedArity = 0;
address.cljs$lang$applyTo = (function (arglist__8562){
var args__6547__auto__ = cljs.core.seq(arglist__8562);
return address__delegate(args__6547__auto__);
});
address.cljs$core$IFn$_invoke$arity$variadic = address__delegate;
return address;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.area = (function() { 
var area__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__7573_8563 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__7574_8564 = null;var count__7575_8565 = 0;var i__7576_8566 = 0;while(true){
if((i__7576_8566 < count__7575_8565))
{var arg__6549__auto___8567 = cljs.core._nth.call(null,chunk__7574_8564,i__7576_8566);a__6548__auto__.push(arg__6549__auto___8567);
{
var G__8568 = seq__7573_8563;
var G__8569 = chunk__7574_8564;
var G__8570 = count__7575_8565;
var G__8571 = (i__7576_8566 + 1);
seq__7573_8563 = G__8568;
chunk__7574_8564 = G__8569;
count__7575_8565 = G__8570;
i__7576_8566 = G__8571;
continue;
}
} else
{var temp__4092__auto___8572 = cljs.core.seq.call(null,seq__7573_8563);if(temp__4092__auto___8572)
{var seq__7573_8573__$1 = temp__4092__auto___8572;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7573_8573__$1))
{var c__5632__auto___8574 = cljs.core.chunk_first.call(null,seq__7573_8573__$1);{
var G__8575 = cljs.core.chunk_rest.call(null,seq__7573_8573__$1);
var G__8576 = c__5632__auto___8574;
var G__8577 = cljs.core.count.call(null,c__5632__auto___8574);
var G__8578 = 0;
seq__7573_8563 = G__8575;
chunk__7574_8564 = G__8576;
count__7575_8565 = G__8577;
i__7576_8566 = G__8578;
continue;
}
} else
{var arg__6549__auto___8579 = cljs.core.first.call(null,seq__7573_8573__$1);a__6548__auto__.push(arg__6549__auto___8579);
{
var G__8580 = cljs.core.next.call(null,seq__7573_8573__$1);
var G__8581 = null;
var G__8582 = 0;
var G__8583 = 0;
seq__7573_8563 = G__8580;
chunk__7574_8564 = G__8581;
count__7575_8565 = G__8582;
i__7576_8566 = G__8583;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.area.apply(null,a__6548__auto__);
};
var area = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return area__delegate.call(this,args__6547__auto__);};
area.cljs$lang$maxFixedArity = 0;
area.cljs$lang$applyTo = (function (arglist__8584){
var args__6547__auto__ = cljs.core.seq(arglist__8584);
return area__delegate(args__6547__auto__);
});
area.cljs$core$IFn$_invoke$arity$variadic = area__delegate;
return area;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.article = (function() { 
var article__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__7581_8585 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__7582_8586 = null;var count__7583_8587 = 0;var i__7584_8588 = 0;while(true){
if((i__7584_8588 < count__7583_8587))
{var arg__6549__auto___8589 = cljs.core._nth.call(null,chunk__7582_8586,i__7584_8588);a__6548__auto__.push(arg__6549__auto___8589);
{
var G__8590 = seq__7581_8585;
var G__8591 = chunk__7582_8586;
var G__8592 = count__7583_8587;
var G__8593 = (i__7584_8588 + 1);
seq__7581_8585 = G__8590;
chunk__7582_8586 = G__8591;
count__7583_8587 = G__8592;
i__7584_8588 = G__8593;
continue;
}
} else
{var temp__4092__auto___8594 = cljs.core.seq.call(null,seq__7581_8585);if(temp__4092__auto___8594)
{var seq__7581_8595__$1 = temp__4092__auto___8594;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7581_8595__$1))
{var c__5632__auto___8596 = cljs.core.chunk_first.call(null,seq__7581_8595__$1);{
var G__8597 = cljs.core.chunk_rest.call(null,seq__7581_8595__$1);
var G__8598 = c__5632__auto___8596;
var G__8599 = cljs.core.count.call(null,c__5632__auto___8596);
var G__8600 = 0;
seq__7581_8585 = G__8597;
chunk__7582_8586 = G__8598;
count__7583_8587 = G__8599;
i__7584_8588 = G__8600;
continue;
}
} else
{var arg__6549__auto___8601 = cljs.core.first.call(null,seq__7581_8595__$1);a__6548__auto__.push(arg__6549__auto___8601);
{
var G__8602 = cljs.core.next.call(null,seq__7581_8595__$1);
var G__8603 = null;
var G__8604 = 0;
var G__8605 = 0;
seq__7581_8585 = G__8602;
chunk__7582_8586 = G__8603;
count__7583_8587 = G__8604;
i__7584_8588 = G__8605;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.article.apply(null,a__6548__auto__);
};
var article = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return article__delegate.call(this,args__6547__auto__);};
article.cljs$lang$maxFixedArity = 0;
article.cljs$lang$applyTo = (function (arglist__8606){
var args__6547__auto__ = cljs.core.seq(arglist__8606);
return article__delegate(args__6547__auto__);
});
article.cljs$core$IFn$_invoke$arity$variadic = article__delegate;
return article;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.aside = (function() { 
var aside__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__7589_8607 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__7590_8608 = null;var count__7591_8609 = 0;var i__7592_8610 = 0;while(true){
if((i__7592_8610 < count__7591_8609))
{var arg__6549__auto___8611 = cljs.core._nth.call(null,chunk__7590_8608,i__7592_8610);a__6548__auto__.push(arg__6549__auto___8611);
{
var G__8612 = seq__7589_8607;
var G__8613 = chunk__7590_8608;
var G__8614 = count__7591_8609;
var G__8615 = (i__7592_8610 + 1);
seq__7589_8607 = G__8612;
chunk__7590_8608 = G__8613;
count__7591_8609 = G__8614;
i__7592_8610 = G__8615;
continue;
}
} else
{var temp__4092__auto___8616 = cljs.core.seq.call(null,seq__7589_8607);if(temp__4092__auto___8616)
{var seq__7589_8617__$1 = temp__4092__auto___8616;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7589_8617__$1))
{var c__5632__auto___8618 = cljs.core.chunk_first.call(null,seq__7589_8617__$1);{
var G__8619 = cljs.core.chunk_rest.call(null,seq__7589_8617__$1);
var G__8620 = c__5632__auto___8618;
var G__8621 = cljs.core.count.call(null,c__5632__auto___8618);
var G__8622 = 0;
seq__7589_8607 = G__8619;
chunk__7590_8608 = G__8620;
count__7591_8609 = G__8621;
i__7592_8610 = G__8622;
continue;
}
} else
{var arg__6549__auto___8623 = cljs.core.first.call(null,seq__7589_8617__$1);a__6548__auto__.push(arg__6549__auto___8623);
{
var G__8624 = cljs.core.next.call(null,seq__7589_8617__$1);
var G__8625 = null;
var G__8626 = 0;
var G__8627 = 0;
seq__7589_8607 = G__8624;
chunk__7590_8608 = G__8625;
count__7591_8609 = G__8626;
i__7592_8610 = G__8627;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.aside.apply(null,a__6548__auto__);
};
var aside = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return aside__delegate.call(this,args__6547__auto__);};
aside.cljs$lang$maxFixedArity = 0;
aside.cljs$lang$applyTo = (function (arglist__8628){
var args__6547__auto__ = cljs.core.seq(arglist__8628);
return aside__delegate(args__6547__auto__);
});
aside.cljs$core$IFn$_invoke$arity$variadic = aside__delegate;
return aside;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.audio = (function() { 
var audio__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__7597_8629 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__7598_8630 = null;var count__7599_8631 = 0;var i__7600_8632 = 0;while(true){
if((i__7600_8632 < count__7599_8631))
{var arg__6549__auto___8633 = cljs.core._nth.call(null,chunk__7598_8630,i__7600_8632);a__6548__auto__.push(arg__6549__auto___8633);
{
var G__8634 = seq__7597_8629;
var G__8635 = chunk__7598_8630;
var G__8636 = count__7599_8631;
var G__8637 = (i__7600_8632 + 1);
seq__7597_8629 = G__8634;
chunk__7598_8630 = G__8635;
count__7599_8631 = G__8636;
i__7600_8632 = G__8637;
continue;
}
} else
{var temp__4092__auto___8638 = cljs.core.seq.call(null,seq__7597_8629);if(temp__4092__auto___8638)
{var seq__7597_8639__$1 = temp__4092__auto___8638;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7597_8639__$1))
{var c__5632__auto___8640 = cljs.core.chunk_first.call(null,seq__7597_8639__$1);{
var G__8641 = cljs.core.chunk_rest.call(null,seq__7597_8639__$1);
var G__8642 = c__5632__auto___8640;
var G__8643 = cljs.core.count.call(null,c__5632__auto___8640);
var G__8644 = 0;
seq__7597_8629 = G__8641;
chunk__7598_8630 = G__8642;
count__7599_8631 = G__8643;
i__7600_8632 = G__8644;
continue;
}
} else
{var arg__6549__auto___8645 = cljs.core.first.call(null,seq__7597_8639__$1);a__6548__auto__.push(arg__6549__auto___8645);
{
var G__8646 = cljs.core.next.call(null,seq__7597_8639__$1);
var G__8647 = null;
var G__8648 = 0;
var G__8649 = 0;
seq__7597_8629 = G__8646;
chunk__7598_8630 = G__8647;
count__7599_8631 = G__8648;
i__7600_8632 = G__8649;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.audio.apply(null,a__6548__auto__);
};
var audio = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return audio__delegate.call(this,args__6547__auto__);};
audio.cljs$lang$maxFixedArity = 0;
audio.cljs$lang$applyTo = (function (arglist__8650){
var args__6547__auto__ = cljs.core.seq(arglist__8650);
return audio__delegate(args__6547__auto__);
});
audio.cljs$core$IFn$_invoke$arity$variadic = audio__delegate;
return audio;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.b = (function() { 
var b__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__7605_8651 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__7606_8652 = null;var count__7607_8653 = 0;var i__7608_8654 = 0;while(true){
if((i__7608_8654 < count__7607_8653))
{var arg__6549__auto___8655 = cljs.core._nth.call(null,chunk__7606_8652,i__7608_8654);a__6548__auto__.push(arg__6549__auto___8655);
{
var G__8656 = seq__7605_8651;
var G__8657 = chunk__7606_8652;
var G__8658 = count__7607_8653;
var G__8659 = (i__7608_8654 + 1);
seq__7605_8651 = G__8656;
chunk__7606_8652 = G__8657;
count__7607_8653 = G__8658;
i__7608_8654 = G__8659;
continue;
}
} else
{var temp__4092__auto___8660 = cljs.core.seq.call(null,seq__7605_8651);if(temp__4092__auto___8660)
{var seq__7605_8661__$1 = temp__4092__auto___8660;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7605_8661__$1))
{var c__5632__auto___8662 = cljs.core.chunk_first.call(null,seq__7605_8661__$1);{
var G__8663 = cljs.core.chunk_rest.call(null,seq__7605_8661__$1);
var G__8664 = c__5632__auto___8662;
var G__8665 = cljs.core.count.call(null,c__5632__auto___8662);
var G__8666 = 0;
seq__7605_8651 = G__8663;
chunk__7606_8652 = G__8664;
count__7607_8653 = G__8665;
i__7608_8654 = G__8666;
continue;
}
} else
{var arg__6549__auto___8667 = cljs.core.first.call(null,seq__7605_8661__$1);a__6548__auto__.push(arg__6549__auto___8667);
{
var G__8668 = cljs.core.next.call(null,seq__7605_8661__$1);
var G__8669 = null;
var G__8670 = 0;
var G__8671 = 0;
seq__7605_8651 = G__8668;
chunk__7606_8652 = G__8669;
count__7607_8653 = G__8670;
i__7608_8654 = G__8671;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.b.apply(null,a__6548__auto__);
};
var b = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return b__delegate.call(this,args__6547__auto__);};
b.cljs$lang$maxFixedArity = 0;
b.cljs$lang$applyTo = (function (arglist__8672){
var args__6547__auto__ = cljs.core.seq(arglist__8672);
return b__delegate(args__6547__auto__);
});
b.cljs$core$IFn$_invoke$arity$variadic = b__delegate;
return b;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.base = (function() { 
var base__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__7613_8673 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__7614_8674 = null;var count__7615_8675 = 0;var i__7616_8676 = 0;while(true){
if((i__7616_8676 < count__7615_8675))
{var arg__6549__auto___8677 = cljs.core._nth.call(null,chunk__7614_8674,i__7616_8676);a__6548__auto__.push(arg__6549__auto___8677);
{
var G__8678 = seq__7613_8673;
var G__8679 = chunk__7614_8674;
var G__8680 = count__7615_8675;
var G__8681 = (i__7616_8676 + 1);
seq__7613_8673 = G__8678;
chunk__7614_8674 = G__8679;
count__7615_8675 = G__8680;
i__7616_8676 = G__8681;
continue;
}
} else
{var temp__4092__auto___8682 = cljs.core.seq.call(null,seq__7613_8673);if(temp__4092__auto___8682)
{var seq__7613_8683__$1 = temp__4092__auto___8682;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7613_8683__$1))
{var c__5632__auto___8684 = cljs.core.chunk_first.call(null,seq__7613_8683__$1);{
var G__8685 = cljs.core.chunk_rest.call(null,seq__7613_8683__$1);
var G__8686 = c__5632__auto___8684;
var G__8687 = cljs.core.count.call(null,c__5632__auto___8684);
var G__8688 = 0;
seq__7613_8673 = G__8685;
chunk__7614_8674 = G__8686;
count__7615_8675 = G__8687;
i__7616_8676 = G__8688;
continue;
}
} else
{var arg__6549__auto___8689 = cljs.core.first.call(null,seq__7613_8683__$1);a__6548__auto__.push(arg__6549__auto___8689);
{
var G__8690 = cljs.core.next.call(null,seq__7613_8683__$1);
var G__8691 = null;
var G__8692 = 0;
var G__8693 = 0;
seq__7613_8673 = G__8690;
chunk__7614_8674 = G__8691;
count__7615_8675 = G__8692;
i__7616_8676 = G__8693;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.base.apply(null,a__6548__auto__);
};
var base = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return base__delegate.call(this,args__6547__auto__);};
base.cljs$lang$maxFixedArity = 0;
base.cljs$lang$applyTo = (function (arglist__8694){
var args__6547__auto__ = cljs.core.seq(arglist__8694);
return base__delegate(args__6547__auto__);
});
base.cljs$core$IFn$_invoke$arity$variadic = base__delegate;
return base;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.bdi = (function() { 
var bdi__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__7621_8695 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__7622_8696 = null;var count__7623_8697 = 0;var i__7624_8698 = 0;while(true){
if((i__7624_8698 < count__7623_8697))
{var arg__6549__auto___8699 = cljs.core._nth.call(null,chunk__7622_8696,i__7624_8698);a__6548__auto__.push(arg__6549__auto___8699);
{
var G__8700 = seq__7621_8695;
var G__8701 = chunk__7622_8696;
var G__8702 = count__7623_8697;
var G__8703 = (i__7624_8698 + 1);
seq__7621_8695 = G__8700;
chunk__7622_8696 = G__8701;
count__7623_8697 = G__8702;
i__7624_8698 = G__8703;
continue;
}
} else
{var temp__4092__auto___8704 = cljs.core.seq.call(null,seq__7621_8695);if(temp__4092__auto___8704)
{var seq__7621_8705__$1 = temp__4092__auto___8704;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7621_8705__$1))
{var c__5632__auto___8706 = cljs.core.chunk_first.call(null,seq__7621_8705__$1);{
var G__8707 = cljs.core.chunk_rest.call(null,seq__7621_8705__$1);
var G__8708 = c__5632__auto___8706;
var G__8709 = cljs.core.count.call(null,c__5632__auto___8706);
var G__8710 = 0;
seq__7621_8695 = G__8707;
chunk__7622_8696 = G__8708;
count__7623_8697 = G__8709;
i__7624_8698 = G__8710;
continue;
}
} else
{var arg__6549__auto___8711 = cljs.core.first.call(null,seq__7621_8705__$1);a__6548__auto__.push(arg__6549__auto___8711);
{
var G__8712 = cljs.core.next.call(null,seq__7621_8705__$1);
var G__8713 = null;
var G__8714 = 0;
var G__8715 = 0;
seq__7621_8695 = G__8712;
chunk__7622_8696 = G__8713;
count__7623_8697 = G__8714;
i__7624_8698 = G__8715;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.bdi.apply(null,a__6548__auto__);
};
var bdi = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return bdi__delegate.call(this,args__6547__auto__);};
bdi.cljs$lang$maxFixedArity = 0;
bdi.cljs$lang$applyTo = (function (arglist__8716){
var args__6547__auto__ = cljs.core.seq(arglist__8716);
return bdi__delegate(args__6547__auto__);
});
bdi.cljs$core$IFn$_invoke$arity$variadic = bdi__delegate;
return bdi;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.bdo = (function() { 
var bdo__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__7629_8717 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__7630_8718 = null;var count__7631_8719 = 0;var i__7632_8720 = 0;while(true){
if((i__7632_8720 < count__7631_8719))
{var arg__6549__auto___8721 = cljs.core._nth.call(null,chunk__7630_8718,i__7632_8720);a__6548__auto__.push(arg__6549__auto___8721);
{
var G__8722 = seq__7629_8717;
var G__8723 = chunk__7630_8718;
var G__8724 = count__7631_8719;
var G__8725 = (i__7632_8720 + 1);
seq__7629_8717 = G__8722;
chunk__7630_8718 = G__8723;
count__7631_8719 = G__8724;
i__7632_8720 = G__8725;
continue;
}
} else
{var temp__4092__auto___8726 = cljs.core.seq.call(null,seq__7629_8717);if(temp__4092__auto___8726)
{var seq__7629_8727__$1 = temp__4092__auto___8726;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7629_8727__$1))
{var c__5632__auto___8728 = cljs.core.chunk_first.call(null,seq__7629_8727__$1);{
var G__8729 = cljs.core.chunk_rest.call(null,seq__7629_8727__$1);
var G__8730 = c__5632__auto___8728;
var G__8731 = cljs.core.count.call(null,c__5632__auto___8728);
var G__8732 = 0;
seq__7629_8717 = G__8729;
chunk__7630_8718 = G__8730;
count__7631_8719 = G__8731;
i__7632_8720 = G__8732;
continue;
}
} else
{var arg__6549__auto___8733 = cljs.core.first.call(null,seq__7629_8727__$1);a__6548__auto__.push(arg__6549__auto___8733);
{
var G__8734 = cljs.core.next.call(null,seq__7629_8727__$1);
var G__8735 = null;
var G__8736 = 0;
var G__8737 = 0;
seq__7629_8717 = G__8734;
chunk__7630_8718 = G__8735;
count__7631_8719 = G__8736;
i__7632_8720 = G__8737;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.bdo.apply(null,a__6548__auto__);
};
var bdo = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return bdo__delegate.call(this,args__6547__auto__);};
bdo.cljs$lang$maxFixedArity = 0;
bdo.cljs$lang$applyTo = (function (arglist__8738){
var args__6547__auto__ = cljs.core.seq(arglist__8738);
return bdo__delegate(args__6547__auto__);
});
bdo.cljs$core$IFn$_invoke$arity$variadic = bdo__delegate;
return bdo;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.big = (function() { 
var big__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__7637_8739 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__7638_8740 = null;var count__7639_8741 = 0;var i__7640_8742 = 0;while(true){
if((i__7640_8742 < count__7639_8741))
{var arg__6549__auto___8743 = cljs.core._nth.call(null,chunk__7638_8740,i__7640_8742);a__6548__auto__.push(arg__6549__auto___8743);
{
var G__8744 = seq__7637_8739;
var G__8745 = chunk__7638_8740;
var G__8746 = count__7639_8741;
var G__8747 = (i__7640_8742 + 1);
seq__7637_8739 = G__8744;
chunk__7638_8740 = G__8745;
count__7639_8741 = G__8746;
i__7640_8742 = G__8747;
continue;
}
} else
{var temp__4092__auto___8748 = cljs.core.seq.call(null,seq__7637_8739);if(temp__4092__auto___8748)
{var seq__7637_8749__$1 = temp__4092__auto___8748;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7637_8749__$1))
{var c__5632__auto___8750 = cljs.core.chunk_first.call(null,seq__7637_8749__$1);{
var G__8751 = cljs.core.chunk_rest.call(null,seq__7637_8749__$1);
var G__8752 = c__5632__auto___8750;
var G__8753 = cljs.core.count.call(null,c__5632__auto___8750);
var G__8754 = 0;
seq__7637_8739 = G__8751;
chunk__7638_8740 = G__8752;
count__7639_8741 = G__8753;
i__7640_8742 = G__8754;
continue;
}
} else
{var arg__6549__auto___8755 = cljs.core.first.call(null,seq__7637_8749__$1);a__6548__auto__.push(arg__6549__auto___8755);
{
var G__8756 = cljs.core.next.call(null,seq__7637_8749__$1);
var G__8757 = null;
var G__8758 = 0;
var G__8759 = 0;
seq__7637_8739 = G__8756;
chunk__7638_8740 = G__8757;
count__7639_8741 = G__8758;
i__7640_8742 = G__8759;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.big.apply(null,a__6548__auto__);
};
var big = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return big__delegate.call(this,args__6547__auto__);};
big.cljs$lang$maxFixedArity = 0;
big.cljs$lang$applyTo = (function (arglist__8760){
var args__6547__auto__ = cljs.core.seq(arglist__8760);
return big__delegate(args__6547__auto__);
});
big.cljs$core$IFn$_invoke$arity$variadic = big__delegate;
return big;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.blockquote = (function() { 
var blockquote__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__7645_8761 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__7646_8762 = null;var count__7647_8763 = 0;var i__7648_8764 = 0;while(true){
if((i__7648_8764 < count__7647_8763))
{var arg__6549__auto___8765 = cljs.core._nth.call(null,chunk__7646_8762,i__7648_8764);a__6548__auto__.push(arg__6549__auto___8765);
{
var G__8766 = seq__7645_8761;
var G__8767 = chunk__7646_8762;
var G__8768 = count__7647_8763;
var G__8769 = (i__7648_8764 + 1);
seq__7645_8761 = G__8766;
chunk__7646_8762 = G__8767;
count__7647_8763 = G__8768;
i__7648_8764 = G__8769;
continue;
}
} else
{var temp__4092__auto___8770 = cljs.core.seq.call(null,seq__7645_8761);if(temp__4092__auto___8770)
{var seq__7645_8771__$1 = temp__4092__auto___8770;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7645_8771__$1))
{var c__5632__auto___8772 = cljs.core.chunk_first.call(null,seq__7645_8771__$1);{
var G__8773 = cljs.core.chunk_rest.call(null,seq__7645_8771__$1);
var G__8774 = c__5632__auto___8772;
var G__8775 = cljs.core.count.call(null,c__5632__auto___8772);
var G__8776 = 0;
seq__7645_8761 = G__8773;
chunk__7646_8762 = G__8774;
count__7647_8763 = G__8775;
i__7648_8764 = G__8776;
continue;
}
} else
{var arg__6549__auto___8777 = cljs.core.first.call(null,seq__7645_8771__$1);a__6548__auto__.push(arg__6549__auto___8777);
{
var G__8778 = cljs.core.next.call(null,seq__7645_8771__$1);
var G__8779 = null;
var G__8780 = 0;
var G__8781 = 0;
seq__7645_8761 = G__8778;
chunk__7646_8762 = G__8779;
count__7647_8763 = G__8780;
i__7648_8764 = G__8781;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.blockquote.apply(null,a__6548__auto__);
};
var blockquote = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return blockquote__delegate.call(this,args__6547__auto__);};
blockquote.cljs$lang$maxFixedArity = 0;
blockquote.cljs$lang$applyTo = (function (arglist__8782){
var args__6547__auto__ = cljs.core.seq(arglist__8782);
return blockquote__delegate(args__6547__auto__);
});
blockquote.cljs$core$IFn$_invoke$arity$variadic = blockquote__delegate;
return blockquote;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.body = (function() { 
var body__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__7653_8783 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__7654_8784 = null;var count__7655_8785 = 0;var i__7656_8786 = 0;while(true){
if((i__7656_8786 < count__7655_8785))
{var arg__6549__auto___8787 = cljs.core._nth.call(null,chunk__7654_8784,i__7656_8786);a__6548__auto__.push(arg__6549__auto___8787);
{
var G__8788 = seq__7653_8783;
var G__8789 = chunk__7654_8784;
var G__8790 = count__7655_8785;
var G__8791 = (i__7656_8786 + 1);
seq__7653_8783 = G__8788;
chunk__7654_8784 = G__8789;
count__7655_8785 = G__8790;
i__7656_8786 = G__8791;
continue;
}
} else
{var temp__4092__auto___8792 = cljs.core.seq.call(null,seq__7653_8783);if(temp__4092__auto___8792)
{var seq__7653_8793__$1 = temp__4092__auto___8792;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7653_8793__$1))
{var c__5632__auto___8794 = cljs.core.chunk_first.call(null,seq__7653_8793__$1);{
var G__8795 = cljs.core.chunk_rest.call(null,seq__7653_8793__$1);
var G__8796 = c__5632__auto___8794;
var G__8797 = cljs.core.count.call(null,c__5632__auto___8794);
var G__8798 = 0;
seq__7653_8783 = G__8795;
chunk__7654_8784 = G__8796;
count__7655_8785 = G__8797;
i__7656_8786 = G__8798;
continue;
}
} else
{var arg__6549__auto___8799 = cljs.core.first.call(null,seq__7653_8793__$1);a__6548__auto__.push(arg__6549__auto___8799);
{
var G__8800 = cljs.core.next.call(null,seq__7653_8793__$1);
var G__8801 = null;
var G__8802 = 0;
var G__8803 = 0;
seq__7653_8783 = G__8800;
chunk__7654_8784 = G__8801;
count__7655_8785 = G__8802;
i__7656_8786 = G__8803;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.body.apply(null,a__6548__auto__);
};
var body = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return body__delegate.call(this,args__6547__auto__);};
body.cljs$lang$maxFixedArity = 0;
body.cljs$lang$applyTo = (function (arglist__8804){
var args__6547__auto__ = cljs.core.seq(arglist__8804);
return body__delegate(args__6547__auto__);
});
body.cljs$core$IFn$_invoke$arity$variadic = body__delegate;
return body;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.br = (function() { 
var br__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__7661_8805 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__7662_8806 = null;var count__7663_8807 = 0;var i__7664_8808 = 0;while(true){
if((i__7664_8808 < count__7663_8807))
{var arg__6549__auto___8809 = cljs.core._nth.call(null,chunk__7662_8806,i__7664_8808);a__6548__auto__.push(arg__6549__auto___8809);
{
var G__8810 = seq__7661_8805;
var G__8811 = chunk__7662_8806;
var G__8812 = count__7663_8807;
var G__8813 = (i__7664_8808 + 1);
seq__7661_8805 = G__8810;
chunk__7662_8806 = G__8811;
count__7663_8807 = G__8812;
i__7664_8808 = G__8813;
continue;
}
} else
{var temp__4092__auto___8814 = cljs.core.seq.call(null,seq__7661_8805);if(temp__4092__auto___8814)
{var seq__7661_8815__$1 = temp__4092__auto___8814;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7661_8815__$1))
{var c__5632__auto___8816 = cljs.core.chunk_first.call(null,seq__7661_8815__$1);{
var G__8817 = cljs.core.chunk_rest.call(null,seq__7661_8815__$1);
var G__8818 = c__5632__auto___8816;
var G__8819 = cljs.core.count.call(null,c__5632__auto___8816);
var G__8820 = 0;
seq__7661_8805 = G__8817;
chunk__7662_8806 = G__8818;
count__7663_8807 = G__8819;
i__7664_8808 = G__8820;
continue;
}
} else
{var arg__6549__auto___8821 = cljs.core.first.call(null,seq__7661_8815__$1);a__6548__auto__.push(arg__6549__auto___8821);
{
var G__8822 = cljs.core.next.call(null,seq__7661_8815__$1);
var G__8823 = null;
var G__8824 = 0;
var G__8825 = 0;
seq__7661_8805 = G__8822;
chunk__7662_8806 = G__8823;
count__7663_8807 = G__8824;
i__7664_8808 = G__8825;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.br.apply(null,a__6548__auto__);
};
var br = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return br__delegate.call(this,args__6547__auto__);};
br.cljs$lang$maxFixedArity = 0;
br.cljs$lang$applyTo = (function (arglist__8826){
var args__6547__auto__ = cljs.core.seq(arglist__8826);
return br__delegate(args__6547__auto__);
});
br.cljs$core$IFn$_invoke$arity$variadic = br__delegate;
return br;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.button = (function() { 
var button__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__7669_8827 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__7670_8828 = null;var count__7671_8829 = 0;var i__7672_8830 = 0;while(true){
if((i__7672_8830 < count__7671_8829))
{var arg__6549__auto___8831 = cljs.core._nth.call(null,chunk__7670_8828,i__7672_8830);a__6548__auto__.push(arg__6549__auto___8831);
{
var G__8832 = seq__7669_8827;
var G__8833 = chunk__7670_8828;
var G__8834 = count__7671_8829;
var G__8835 = (i__7672_8830 + 1);
seq__7669_8827 = G__8832;
chunk__7670_8828 = G__8833;
count__7671_8829 = G__8834;
i__7672_8830 = G__8835;
continue;
}
} else
{var temp__4092__auto___8836 = cljs.core.seq.call(null,seq__7669_8827);if(temp__4092__auto___8836)
{var seq__7669_8837__$1 = temp__4092__auto___8836;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7669_8837__$1))
{var c__5632__auto___8838 = cljs.core.chunk_first.call(null,seq__7669_8837__$1);{
var G__8839 = cljs.core.chunk_rest.call(null,seq__7669_8837__$1);
var G__8840 = c__5632__auto___8838;
var G__8841 = cljs.core.count.call(null,c__5632__auto___8838);
var G__8842 = 0;
seq__7669_8827 = G__8839;
chunk__7670_8828 = G__8840;
count__7671_8829 = G__8841;
i__7672_8830 = G__8842;
continue;
}
} else
{var arg__6549__auto___8843 = cljs.core.first.call(null,seq__7669_8837__$1);a__6548__auto__.push(arg__6549__auto___8843);
{
var G__8844 = cljs.core.next.call(null,seq__7669_8837__$1);
var G__8845 = null;
var G__8846 = 0;
var G__8847 = 0;
seq__7669_8827 = G__8844;
chunk__7670_8828 = G__8845;
count__7671_8829 = G__8846;
i__7672_8830 = G__8847;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.button.apply(null,a__6548__auto__);
};
var button = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return button__delegate.call(this,args__6547__auto__);};
button.cljs$lang$maxFixedArity = 0;
button.cljs$lang$applyTo = (function (arglist__8848){
var args__6547__auto__ = cljs.core.seq(arglist__8848);
return button__delegate(args__6547__auto__);
});
button.cljs$core$IFn$_invoke$arity$variadic = button__delegate;
return button;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.canvas = (function() { 
var canvas__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__7677_8849 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__7678_8850 = null;var count__7679_8851 = 0;var i__7680_8852 = 0;while(true){
if((i__7680_8852 < count__7679_8851))
{var arg__6549__auto___8853 = cljs.core._nth.call(null,chunk__7678_8850,i__7680_8852);a__6548__auto__.push(arg__6549__auto___8853);
{
var G__8854 = seq__7677_8849;
var G__8855 = chunk__7678_8850;
var G__8856 = count__7679_8851;
var G__8857 = (i__7680_8852 + 1);
seq__7677_8849 = G__8854;
chunk__7678_8850 = G__8855;
count__7679_8851 = G__8856;
i__7680_8852 = G__8857;
continue;
}
} else
{var temp__4092__auto___8858 = cljs.core.seq.call(null,seq__7677_8849);if(temp__4092__auto___8858)
{var seq__7677_8859__$1 = temp__4092__auto___8858;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7677_8859__$1))
{var c__5632__auto___8860 = cljs.core.chunk_first.call(null,seq__7677_8859__$1);{
var G__8861 = cljs.core.chunk_rest.call(null,seq__7677_8859__$1);
var G__8862 = c__5632__auto___8860;
var G__8863 = cljs.core.count.call(null,c__5632__auto___8860);
var G__8864 = 0;
seq__7677_8849 = G__8861;
chunk__7678_8850 = G__8862;
count__7679_8851 = G__8863;
i__7680_8852 = G__8864;
continue;
}
} else
{var arg__6549__auto___8865 = cljs.core.first.call(null,seq__7677_8859__$1);a__6548__auto__.push(arg__6549__auto___8865);
{
var G__8866 = cljs.core.next.call(null,seq__7677_8859__$1);
var G__8867 = null;
var G__8868 = 0;
var G__8869 = 0;
seq__7677_8849 = G__8866;
chunk__7678_8850 = G__8867;
count__7679_8851 = G__8868;
i__7680_8852 = G__8869;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.canvas.apply(null,a__6548__auto__);
};
var canvas = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return canvas__delegate.call(this,args__6547__auto__);};
canvas.cljs$lang$maxFixedArity = 0;
canvas.cljs$lang$applyTo = (function (arglist__8870){
var args__6547__auto__ = cljs.core.seq(arglist__8870);
return canvas__delegate(args__6547__auto__);
});
canvas.cljs$core$IFn$_invoke$arity$variadic = canvas__delegate;
return canvas;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.caption = (function() { 
var caption__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__7685_8871 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__7686_8872 = null;var count__7687_8873 = 0;var i__7688_8874 = 0;while(true){
if((i__7688_8874 < count__7687_8873))
{var arg__6549__auto___8875 = cljs.core._nth.call(null,chunk__7686_8872,i__7688_8874);a__6548__auto__.push(arg__6549__auto___8875);
{
var G__8876 = seq__7685_8871;
var G__8877 = chunk__7686_8872;
var G__8878 = count__7687_8873;
var G__8879 = (i__7688_8874 + 1);
seq__7685_8871 = G__8876;
chunk__7686_8872 = G__8877;
count__7687_8873 = G__8878;
i__7688_8874 = G__8879;
continue;
}
} else
{var temp__4092__auto___8880 = cljs.core.seq.call(null,seq__7685_8871);if(temp__4092__auto___8880)
{var seq__7685_8881__$1 = temp__4092__auto___8880;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7685_8881__$1))
{var c__5632__auto___8882 = cljs.core.chunk_first.call(null,seq__7685_8881__$1);{
var G__8883 = cljs.core.chunk_rest.call(null,seq__7685_8881__$1);
var G__8884 = c__5632__auto___8882;
var G__8885 = cljs.core.count.call(null,c__5632__auto___8882);
var G__8886 = 0;
seq__7685_8871 = G__8883;
chunk__7686_8872 = G__8884;
count__7687_8873 = G__8885;
i__7688_8874 = G__8886;
continue;
}
} else
{var arg__6549__auto___8887 = cljs.core.first.call(null,seq__7685_8881__$1);a__6548__auto__.push(arg__6549__auto___8887);
{
var G__8888 = cljs.core.next.call(null,seq__7685_8881__$1);
var G__8889 = null;
var G__8890 = 0;
var G__8891 = 0;
seq__7685_8871 = G__8888;
chunk__7686_8872 = G__8889;
count__7687_8873 = G__8890;
i__7688_8874 = G__8891;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.caption.apply(null,a__6548__auto__);
};
var caption = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return caption__delegate.call(this,args__6547__auto__);};
caption.cljs$lang$maxFixedArity = 0;
caption.cljs$lang$applyTo = (function (arglist__8892){
var args__6547__auto__ = cljs.core.seq(arglist__8892);
return caption__delegate(args__6547__auto__);
});
caption.cljs$core$IFn$_invoke$arity$variadic = caption__delegate;
return caption;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.cite = (function() { 
var cite__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__7693_8893 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__7694_8894 = null;var count__7695_8895 = 0;var i__7696_8896 = 0;while(true){
if((i__7696_8896 < count__7695_8895))
{var arg__6549__auto___8897 = cljs.core._nth.call(null,chunk__7694_8894,i__7696_8896);a__6548__auto__.push(arg__6549__auto___8897);
{
var G__8898 = seq__7693_8893;
var G__8899 = chunk__7694_8894;
var G__8900 = count__7695_8895;
var G__8901 = (i__7696_8896 + 1);
seq__7693_8893 = G__8898;
chunk__7694_8894 = G__8899;
count__7695_8895 = G__8900;
i__7696_8896 = G__8901;
continue;
}
} else
{var temp__4092__auto___8902 = cljs.core.seq.call(null,seq__7693_8893);if(temp__4092__auto___8902)
{var seq__7693_8903__$1 = temp__4092__auto___8902;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7693_8903__$1))
{var c__5632__auto___8904 = cljs.core.chunk_first.call(null,seq__7693_8903__$1);{
var G__8905 = cljs.core.chunk_rest.call(null,seq__7693_8903__$1);
var G__8906 = c__5632__auto___8904;
var G__8907 = cljs.core.count.call(null,c__5632__auto___8904);
var G__8908 = 0;
seq__7693_8893 = G__8905;
chunk__7694_8894 = G__8906;
count__7695_8895 = G__8907;
i__7696_8896 = G__8908;
continue;
}
} else
{var arg__6549__auto___8909 = cljs.core.first.call(null,seq__7693_8903__$1);a__6548__auto__.push(arg__6549__auto___8909);
{
var G__8910 = cljs.core.next.call(null,seq__7693_8903__$1);
var G__8911 = null;
var G__8912 = 0;
var G__8913 = 0;
seq__7693_8893 = G__8910;
chunk__7694_8894 = G__8911;
count__7695_8895 = G__8912;
i__7696_8896 = G__8913;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.cite.apply(null,a__6548__auto__);
};
var cite = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return cite__delegate.call(this,args__6547__auto__);};
cite.cljs$lang$maxFixedArity = 0;
cite.cljs$lang$applyTo = (function (arglist__8914){
var args__6547__auto__ = cljs.core.seq(arglist__8914);
return cite__delegate(args__6547__auto__);
});
cite.cljs$core$IFn$_invoke$arity$variadic = cite__delegate;
return cite;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.code = (function() { 
var code__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__7701_8915 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__7702_8916 = null;var count__7703_8917 = 0;var i__7704_8918 = 0;while(true){
if((i__7704_8918 < count__7703_8917))
{var arg__6549__auto___8919 = cljs.core._nth.call(null,chunk__7702_8916,i__7704_8918);a__6548__auto__.push(arg__6549__auto___8919);
{
var G__8920 = seq__7701_8915;
var G__8921 = chunk__7702_8916;
var G__8922 = count__7703_8917;
var G__8923 = (i__7704_8918 + 1);
seq__7701_8915 = G__8920;
chunk__7702_8916 = G__8921;
count__7703_8917 = G__8922;
i__7704_8918 = G__8923;
continue;
}
} else
{var temp__4092__auto___8924 = cljs.core.seq.call(null,seq__7701_8915);if(temp__4092__auto___8924)
{var seq__7701_8925__$1 = temp__4092__auto___8924;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7701_8925__$1))
{var c__5632__auto___8926 = cljs.core.chunk_first.call(null,seq__7701_8925__$1);{
var G__8927 = cljs.core.chunk_rest.call(null,seq__7701_8925__$1);
var G__8928 = c__5632__auto___8926;
var G__8929 = cljs.core.count.call(null,c__5632__auto___8926);
var G__8930 = 0;
seq__7701_8915 = G__8927;
chunk__7702_8916 = G__8928;
count__7703_8917 = G__8929;
i__7704_8918 = G__8930;
continue;
}
} else
{var arg__6549__auto___8931 = cljs.core.first.call(null,seq__7701_8925__$1);a__6548__auto__.push(arg__6549__auto___8931);
{
var G__8932 = cljs.core.next.call(null,seq__7701_8925__$1);
var G__8933 = null;
var G__8934 = 0;
var G__8935 = 0;
seq__7701_8915 = G__8932;
chunk__7702_8916 = G__8933;
count__7703_8917 = G__8934;
i__7704_8918 = G__8935;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.code.apply(null,a__6548__auto__);
};
var code = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return code__delegate.call(this,args__6547__auto__);};
code.cljs$lang$maxFixedArity = 0;
code.cljs$lang$applyTo = (function (arglist__8936){
var args__6547__auto__ = cljs.core.seq(arglist__8936);
return code__delegate(args__6547__auto__);
});
code.cljs$core$IFn$_invoke$arity$variadic = code__delegate;
return code;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.col = (function() { 
var col__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__7709_8937 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__7710_8938 = null;var count__7711_8939 = 0;var i__7712_8940 = 0;while(true){
if((i__7712_8940 < count__7711_8939))
{var arg__6549__auto___8941 = cljs.core._nth.call(null,chunk__7710_8938,i__7712_8940);a__6548__auto__.push(arg__6549__auto___8941);
{
var G__8942 = seq__7709_8937;
var G__8943 = chunk__7710_8938;
var G__8944 = count__7711_8939;
var G__8945 = (i__7712_8940 + 1);
seq__7709_8937 = G__8942;
chunk__7710_8938 = G__8943;
count__7711_8939 = G__8944;
i__7712_8940 = G__8945;
continue;
}
} else
{var temp__4092__auto___8946 = cljs.core.seq.call(null,seq__7709_8937);if(temp__4092__auto___8946)
{var seq__7709_8947__$1 = temp__4092__auto___8946;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7709_8947__$1))
{var c__5632__auto___8948 = cljs.core.chunk_first.call(null,seq__7709_8947__$1);{
var G__8949 = cljs.core.chunk_rest.call(null,seq__7709_8947__$1);
var G__8950 = c__5632__auto___8948;
var G__8951 = cljs.core.count.call(null,c__5632__auto___8948);
var G__8952 = 0;
seq__7709_8937 = G__8949;
chunk__7710_8938 = G__8950;
count__7711_8939 = G__8951;
i__7712_8940 = G__8952;
continue;
}
} else
{var arg__6549__auto___8953 = cljs.core.first.call(null,seq__7709_8947__$1);a__6548__auto__.push(arg__6549__auto___8953);
{
var G__8954 = cljs.core.next.call(null,seq__7709_8947__$1);
var G__8955 = null;
var G__8956 = 0;
var G__8957 = 0;
seq__7709_8937 = G__8954;
chunk__7710_8938 = G__8955;
count__7711_8939 = G__8956;
i__7712_8940 = G__8957;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.col.apply(null,a__6548__auto__);
};
var col = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return col__delegate.call(this,args__6547__auto__);};
col.cljs$lang$maxFixedArity = 0;
col.cljs$lang$applyTo = (function (arglist__8958){
var args__6547__auto__ = cljs.core.seq(arglist__8958);
return col__delegate(args__6547__auto__);
});
col.cljs$core$IFn$_invoke$arity$variadic = col__delegate;
return col;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.colgroup = (function() { 
var colgroup__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__7717_8959 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__7718_8960 = null;var count__7719_8961 = 0;var i__7720_8962 = 0;while(true){
if((i__7720_8962 < count__7719_8961))
{var arg__6549__auto___8963 = cljs.core._nth.call(null,chunk__7718_8960,i__7720_8962);a__6548__auto__.push(arg__6549__auto___8963);
{
var G__8964 = seq__7717_8959;
var G__8965 = chunk__7718_8960;
var G__8966 = count__7719_8961;
var G__8967 = (i__7720_8962 + 1);
seq__7717_8959 = G__8964;
chunk__7718_8960 = G__8965;
count__7719_8961 = G__8966;
i__7720_8962 = G__8967;
continue;
}
} else
{var temp__4092__auto___8968 = cljs.core.seq.call(null,seq__7717_8959);if(temp__4092__auto___8968)
{var seq__7717_8969__$1 = temp__4092__auto___8968;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7717_8969__$1))
{var c__5632__auto___8970 = cljs.core.chunk_first.call(null,seq__7717_8969__$1);{
var G__8971 = cljs.core.chunk_rest.call(null,seq__7717_8969__$1);
var G__8972 = c__5632__auto___8970;
var G__8973 = cljs.core.count.call(null,c__5632__auto___8970);
var G__8974 = 0;
seq__7717_8959 = G__8971;
chunk__7718_8960 = G__8972;
count__7719_8961 = G__8973;
i__7720_8962 = G__8974;
continue;
}
} else
{var arg__6549__auto___8975 = cljs.core.first.call(null,seq__7717_8969__$1);a__6548__auto__.push(arg__6549__auto___8975);
{
var G__8976 = cljs.core.next.call(null,seq__7717_8969__$1);
var G__8977 = null;
var G__8978 = 0;
var G__8979 = 0;
seq__7717_8959 = G__8976;
chunk__7718_8960 = G__8977;
count__7719_8961 = G__8978;
i__7720_8962 = G__8979;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.colgroup.apply(null,a__6548__auto__);
};
var colgroup = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return colgroup__delegate.call(this,args__6547__auto__);};
colgroup.cljs$lang$maxFixedArity = 0;
colgroup.cljs$lang$applyTo = (function (arglist__8980){
var args__6547__auto__ = cljs.core.seq(arglist__8980);
return colgroup__delegate(args__6547__auto__);
});
colgroup.cljs$core$IFn$_invoke$arity$variadic = colgroup__delegate;
return colgroup;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.data = (function() { 
var data__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__7725_8981 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__7726_8982 = null;var count__7727_8983 = 0;var i__7728_8984 = 0;while(true){
if((i__7728_8984 < count__7727_8983))
{var arg__6549__auto___8985 = cljs.core._nth.call(null,chunk__7726_8982,i__7728_8984);a__6548__auto__.push(arg__6549__auto___8985);
{
var G__8986 = seq__7725_8981;
var G__8987 = chunk__7726_8982;
var G__8988 = count__7727_8983;
var G__8989 = (i__7728_8984 + 1);
seq__7725_8981 = G__8986;
chunk__7726_8982 = G__8987;
count__7727_8983 = G__8988;
i__7728_8984 = G__8989;
continue;
}
} else
{var temp__4092__auto___8990 = cljs.core.seq.call(null,seq__7725_8981);if(temp__4092__auto___8990)
{var seq__7725_8991__$1 = temp__4092__auto___8990;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7725_8991__$1))
{var c__5632__auto___8992 = cljs.core.chunk_first.call(null,seq__7725_8991__$1);{
var G__8993 = cljs.core.chunk_rest.call(null,seq__7725_8991__$1);
var G__8994 = c__5632__auto___8992;
var G__8995 = cljs.core.count.call(null,c__5632__auto___8992);
var G__8996 = 0;
seq__7725_8981 = G__8993;
chunk__7726_8982 = G__8994;
count__7727_8983 = G__8995;
i__7728_8984 = G__8996;
continue;
}
} else
{var arg__6549__auto___8997 = cljs.core.first.call(null,seq__7725_8991__$1);a__6548__auto__.push(arg__6549__auto___8997);
{
var G__8998 = cljs.core.next.call(null,seq__7725_8991__$1);
var G__8999 = null;
var G__9000 = 0;
var G__9001 = 0;
seq__7725_8981 = G__8998;
chunk__7726_8982 = G__8999;
count__7727_8983 = G__9000;
i__7728_8984 = G__9001;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.data.apply(null,a__6548__auto__);
};
var data = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return data__delegate.call(this,args__6547__auto__);};
data.cljs$lang$maxFixedArity = 0;
data.cljs$lang$applyTo = (function (arglist__9002){
var args__6547__auto__ = cljs.core.seq(arglist__9002);
return data__delegate(args__6547__auto__);
});
data.cljs$core$IFn$_invoke$arity$variadic = data__delegate;
return data;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.datalist = (function() { 
var datalist__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__7733_9003 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__7734_9004 = null;var count__7735_9005 = 0;var i__7736_9006 = 0;while(true){
if((i__7736_9006 < count__7735_9005))
{var arg__6549__auto___9007 = cljs.core._nth.call(null,chunk__7734_9004,i__7736_9006);a__6548__auto__.push(arg__6549__auto___9007);
{
var G__9008 = seq__7733_9003;
var G__9009 = chunk__7734_9004;
var G__9010 = count__7735_9005;
var G__9011 = (i__7736_9006 + 1);
seq__7733_9003 = G__9008;
chunk__7734_9004 = G__9009;
count__7735_9005 = G__9010;
i__7736_9006 = G__9011;
continue;
}
} else
{var temp__4092__auto___9012 = cljs.core.seq.call(null,seq__7733_9003);if(temp__4092__auto___9012)
{var seq__7733_9013__$1 = temp__4092__auto___9012;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7733_9013__$1))
{var c__5632__auto___9014 = cljs.core.chunk_first.call(null,seq__7733_9013__$1);{
var G__9015 = cljs.core.chunk_rest.call(null,seq__7733_9013__$1);
var G__9016 = c__5632__auto___9014;
var G__9017 = cljs.core.count.call(null,c__5632__auto___9014);
var G__9018 = 0;
seq__7733_9003 = G__9015;
chunk__7734_9004 = G__9016;
count__7735_9005 = G__9017;
i__7736_9006 = G__9018;
continue;
}
} else
{var arg__6549__auto___9019 = cljs.core.first.call(null,seq__7733_9013__$1);a__6548__auto__.push(arg__6549__auto___9019);
{
var G__9020 = cljs.core.next.call(null,seq__7733_9013__$1);
var G__9021 = null;
var G__9022 = 0;
var G__9023 = 0;
seq__7733_9003 = G__9020;
chunk__7734_9004 = G__9021;
count__7735_9005 = G__9022;
i__7736_9006 = G__9023;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.datalist.apply(null,a__6548__auto__);
};
var datalist = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return datalist__delegate.call(this,args__6547__auto__);};
datalist.cljs$lang$maxFixedArity = 0;
datalist.cljs$lang$applyTo = (function (arglist__9024){
var args__6547__auto__ = cljs.core.seq(arglist__9024);
return datalist__delegate(args__6547__auto__);
});
datalist.cljs$core$IFn$_invoke$arity$variadic = datalist__delegate;
return datalist;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.dd = (function() { 
var dd__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__7741_9025 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__7742_9026 = null;var count__7743_9027 = 0;var i__7744_9028 = 0;while(true){
if((i__7744_9028 < count__7743_9027))
{var arg__6549__auto___9029 = cljs.core._nth.call(null,chunk__7742_9026,i__7744_9028);a__6548__auto__.push(arg__6549__auto___9029);
{
var G__9030 = seq__7741_9025;
var G__9031 = chunk__7742_9026;
var G__9032 = count__7743_9027;
var G__9033 = (i__7744_9028 + 1);
seq__7741_9025 = G__9030;
chunk__7742_9026 = G__9031;
count__7743_9027 = G__9032;
i__7744_9028 = G__9033;
continue;
}
} else
{var temp__4092__auto___9034 = cljs.core.seq.call(null,seq__7741_9025);if(temp__4092__auto___9034)
{var seq__7741_9035__$1 = temp__4092__auto___9034;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7741_9035__$1))
{var c__5632__auto___9036 = cljs.core.chunk_first.call(null,seq__7741_9035__$1);{
var G__9037 = cljs.core.chunk_rest.call(null,seq__7741_9035__$1);
var G__9038 = c__5632__auto___9036;
var G__9039 = cljs.core.count.call(null,c__5632__auto___9036);
var G__9040 = 0;
seq__7741_9025 = G__9037;
chunk__7742_9026 = G__9038;
count__7743_9027 = G__9039;
i__7744_9028 = G__9040;
continue;
}
} else
{var arg__6549__auto___9041 = cljs.core.first.call(null,seq__7741_9035__$1);a__6548__auto__.push(arg__6549__auto___9041);
{
var G__9042 = cljs.core.next.call(null,seq__7741_9035__$1);
var G__9043 = null;
var G__9044 = 0;
var G__9045 = 0;
seq__7741_9025 = G__9042;
chunk__7742_9026 = G__9043;
count__7743_9027 = G__9044;
i__7744_9028 = G__9045;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.dd.apply(null,a__6548__auto__);
};
var dd = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return dd__delegate.call(this,args__6547__auto__);};
dd.cljs$lang$maxFixedArity = 0;
dd.cljs$lang$applyTo = (function (arglist__9046){
var args__6547__auto__ = cljs.core.seq(arglist__9046);
return dd__delegate(args__6547__auto__);
});
dd.cljs$core$IFn$_invoke$arity$variadic = dd__delegate;
return dd;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.del = (function() { 
var del__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__7749_9047 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__7750_9048 = null;var count__7751_9049 = 0;var i__7752_9050 = 0;while(true){
if((i__7752_9050 < count__7751_9049))
{var arg__6549__auto___9051 = cljs.core._nth.call(null,chunk__7750_9048,i__7752_9050);a__6548__auto__.push(arg__6549__auto___9051);
{
var G__9052 = seq__7749_9047;
var G__9053 = chunk__7750_9048;
var G__9054 = count__7751_9049;
var G__9055 = (i__7752_9050 + 1);
seq__7749_9047 = G__9052;
chunk__7750_9048 = G__9053;
count__7751_9049 = G__9054;
i__7752_9050 = G__9055;
continue;
}
} else
{var temp__4092__auto___9056 = cljs.core.seq.call(null,seq__7749_9047);if(temp__4092__auto___9056)
{var seq__7749_9057__$1 = temp__4092__auto___9056;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7749_9057__$1))
{var c__5632__auto___9058 = cljs.core.chunk_first.call(null,seq__7749_9057__$1);{
var G__9059 = cljs.core.chunk_rest.call(null,seq__7749_9057__$1);
var G__9060 = c__5632__auto___9058;
var G__9061 = cljs.core.count.call(null,c__5632__auto___9058);
var G__9062 = 0;
seq__7749_9047 = G__9059;
chunk__7750_9048 = G__9060;
count__7751_9049 = G__9061;
i__7752_9050 = G__9062;
continue;
}
} else
{var arg__6549__auto___9063 = cljs.core.first.call(null,seq__7749_9057__$1);a__6548__auto__.push(arg__6549__auto___9063);
{
var G__9064 = cljs.core.next.call(null,seq__7749_9057__$1);
var G__9065 = null;
var G__9066 = 0;
var G__9067 = 0;
seq__7749_9047 = G__9064;
chunk__7750_9048 = G__9065;
count__7751_9049 = G__9066;
i__7752_9050 = G__9067;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.del.apply(null,a__6548__auto__);
};
var del = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return del__delegate.call(this,args__6547__auto__);};
del.cljs$lang$maxFixedArity = 0;
del.cljs$lang$applyTo = (function (arglist__9068){
var args__6547__auto__ = cljs.core.seq(arglist__9068);
return del__delegate(args__6547__auto__);
});
del.cljs$core$IFn$_invoke$arity$variadic = del__delegate;
return del;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.details = (function() { 
var details__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__7757_9069 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__7758_9070 = null;var count__7759_9071 = 0;var i__7760_9072 = 0;while(true){
if((i__7760_9072 < count__7759_9071))
{var arg__6549__auto___9073 = cljs.core._nth.call(null,chunk__7758_9070,i__7760_9072);a__6548__auto__.push(arg__6549__auto___9073);
{
var G__9074 = seq__7757_9069;
var G__9075 = chunk__7758_9070;
var G__9076 = count__7759_9071;
var G__9077 = (i__7760_9072 + 1);
seq__7757_9069 = G__9074;
chunk__7758_9070 = G__9075;
count__7759_9071 = G__9076;
i__7760_9072 = G__9077;
continue;
}
} else
{var temp__4092__auto___9078 = cljs.core.seq.call(null,seq__7757_9069);if(temp__4092__auto___9078)
{var seq__7757_9079__$1 = temp__4092__auto___9078;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7757_9079__$1))
{var c__5632__auto___9080 = cljs.core.chunk_first.call(null,seq__7757_9079__$1);{
var G__9081 = cljs.core.chunk_rest.call(null,seq__7757_9079__$1);
var G__9082 = c__5632__auto___9080;
var G__9083 = cljs.core.count.call(null,c__5632__auto___9080);
var G__9084 = 0;
seq__7757_9069 = G__9081;
chunk__7758_9070 = G__9082;
count__7759_9071 = G__9083;
i__7760_9072 = G__9084;
continue;
}
} else
{var arg__6549__auto___9085 = cljs.core.first.call(null,seq__7757_9079__$1);a__6548__auto__.push(arg__6549__auto___9085);
{
var G__9086 = cljs.core.next.call(null,seq__7757_9079__$1);
var G__9087 = null;
var G__9088 = 0;
var G__9089 = 0;
seq__7757_9069 = G__9086;
chunk__7758_9070 = G__9087;
count__7759_9071 = G__9088;
i__7760_9072 = G__9089;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.details.apply(null,a__6548__auto__);
};
var details = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return details__delegate.call(this,args__6547__auto__);};
details.cljs$lang$maxFixedArity = 0;
details.cljs$lang$applyTo = (function (arglist__9090){
var args__6547__auto__ = cljs.core.seq(arglist__9090);
return details__delegate(args__6547__auto__);
});
details.cljs$core$IFn$_invoke$arity$variadic = details__delegate;
return details;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.dfn = (function() { 
var dfn__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__7765_9091 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__7766_9092 = null;var count__7767_9093 = 0;var i__7768_9094 = 0;while(true){
if((i__7768_9094 < count__7767_9093))
{var arg__6549__auto___9095 = cljs.core._nth.call(null,chunk__7766_9092,i__7768_9094);a__6548__auto__.push(arg__6549__auto___9095);
{
var G__9096 = seq__7765_9091;
var G__9097 = chunk__7766_9092;
var G__9098 = count__7767_9093;
var G__9099 = (i__7768_9094 + 1);
seq__7765_9091 = G__9096;
chunk__7766_9092 = G__9097;
count__7767_9093 = G__9098;
i__7768_9094 = G__9099;
continue;
}
} else
{var temp__4092__auto___9100 = cljs.core.seq.call(null,seq__7765_9091);if(temp__4092__auto___9100)
{var seq__7765_9101__$1 = temp__4092__auto___9100;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7765_9101__$1))
{var c__5632__auto___9102 = cljs.core.chunk_first.call(null,seq__7765_9101__$1);{
var G__9103 = cljs.core.chunk_rest.call(null,seq__7765_9101__$1);
var G__9104 = c__5632__auto___9102;
var G__9105 = cljs.core.count.call(null,c__5632__auto___9102);
var G__9106 = 0;
seq__7765_9091 = G__9103;
chunk__7766_9092 = G__9104;
count__7767_9093 = G__9105;
i__7768_9094 = G__9106;
continue;
}
} else
{var arg__6549__auto___9107 = cljs.core.first.call(null,seq__7765_9101__$1);a__6548__auto__.push(arg__6549__auto___9107);
{
var G__9108 = cljs.core.next.call(null,seq__7765_9101__$1);
var G__9109 = null;
var G__9110 = 0;
var G__9111 = 0;
seq__7765_9091 = G__9108;
chunk__7766_9092 = G__9109;
count__7767_9093 = G__9110;
i__7768_9094 = G__9111;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.dfn.apply(null,a__6548__auto__);
};
var dfn = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return dfn__delegate.call(this,args__6547__auto__);};
dfn.cljs$lang$maxFixedArity = 0;
dfn.cljs$lang$applyTo = (function (arglist__9112){
var args__6547__auto__ = cljs.core.seq(arglist__9112);
return dfn__delegate(args__6547__auto__);
});
dfn.cljs$core$IFn$_invoke$arity$variadic = dfn__delegate;
return dfn;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.div = (function() { 
var div__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__7773_9113 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__7774_9114 = null;var count__7775_9115 = 0;var i__7776_9116 = 0;while(true){
if((i__7776_9116 < count__7775_9115))
{var arg__6549__auto___9117 = cljs.core._nth.call(null,chunk__7774_9114,i__7776_9116);a__6548__auto__.push(arg__6549__auto___9117);
{
var G__9118 = seq__7773_9113;
var G__9119 = chunk__7774_9114;
var G__9120 = count__7775_9115;
var G__9121 = (i__7776_9116 + 1);
seq__7773_9113 = G__9118;
chunk__7774_9114 = G__9119;
count__7775_9115 = G__9120;
i__7776_9116 = G__9121;
continue;
}
} else
{var temp__4092__auto___9122 = cljs.core.seq.call(null,seq__7773_9113);if(temp__4092__auto___9122)
{var seq__7773_9123__$1 = temp__4092__auto___9122;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7773_9123__$1))
{var c__5632__auto___9124 = cljs.core.chunk_first.call(null,seq__7773_9123__$1);{
var G__9125 = cljs.core.chunk_rest.call(null,seq__7773_9123__$1);
var G__9126 = c__5632__auto___9124;
var G__9127 = cljs.core.count.call(null,c__5632__auto___9124);
var G__9128 = 0;
seq__7773_9113 = G__9125;
chunk__7774_9114 = G__9126;
count__7775_9115 = G__9127;
i__7776_9116 = G__9128;
continue;
}
} else
{var arg__6549__auto___9129 = cljs.core.first.call(null,seq__7773_9123__$1);a__6548__auto__.push(arg__6549__auto___9129);
{
var G__9130 = cljs.core.next.call(null,seq__7773_9123__$1);
var G__9131 = null;
var G__9132 = 0;
var G__9133 = 0;
seq__7773_9113 = G__9130;
chunk__7774_9114 = G__9131;
count__7775_9115 = G__9132;
i__7776_9116 = G__9133;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.div.apply(null,a__6548__auto__);
};
var div = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return div__delegate.call(this,args__6547__auto__);};
div.cljs$lang$maxFixedArity = 0;
div.cljs$lang$applyTo = (function (arglist__9134){
var args__6547__auto__ = cljs.core.seq(arglist__9134);
return div__delegate(args__6547__auto__);
});
div.cljs$core$IFn$_invoke$arity$variadic = div__delegate;
return div;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.dl = (function() { 
var dl__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__7781_9135 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__7782_9136 = null;var count__7783_9137 = 0;var i__7784_9138 = 0;while(true){
if((i__7784_9138 < count__7783_9137))
{var arg__6549__auto___9139 = cljs.core._nth.call(null,chunk__7782_9136,i__7784_9138);a__6548__auto__.push(arg__6549__auto___9139);
{
var G__9140 = seq__7781_9135;
var G__9141 = chunk__7782_9136;
var G__9142 = count__7783_9137;
var G__9143 = (i__7784_9138 + 1);
seq__7781_9135 = G__9140;
chunk__7782_9136 = G__9141;
count__7783_9137 = G__9142;
i__7784_9138 = G__9143;
continue;
}
} else
{var temp__4092__auto___9144 = cljs.core.seq.call(null,seq__7781_9135);if(temp__4092__auto___9144)
{var seq__7781_9145__$1 = temp__4092__auto___9144;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7781_9145__$1))
{var c__5632__auto___9146 = cljs.core.chunk_first.call(null,seq__7781_9145__$1);{
var G__9147 = cljs.core.chunk_rest.call(null,seq__7781_9145__$1);
var G__9148 = c__5632__auto___9146;
var G__9149 = cljs.core.count.call(null,c__5632__auto___9146);
var G__9150 = 0;
seq__7781_9135 = G__9147;
chunk__7782_9136 = G__9148;
count__7783_9137 = G__9149;
i__7784_9138 = G__9150;
continue;
}
} else
{var arg__6549__auto___9151 = cljs.core.first.call(null,seq__7781_9145__$1);a__6548__auto__.push(arg__6549__auto___9151);
{
var G__9152 = cljs.core.next.call(null,seq__7781_9145__$1);
var G__9153 = null;
var G__9154 = 0;
var G__9155 = 0;
seq__7781_9135 = G__9152;
chunk__7782_9136 = G__9153;
count__7783_9137 = G__9154;
i__7784_9138 = G__9155;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.dl.apply(null,a__6548__auto__);
};
var dl = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return dl__delegate.call(this,args__6547__auto__);};
dl.cljs$lang$maxFixedArity = 0;
dl.cljs$lang$applyTo = (function (arglist__9156){
var args__6547__auto__ = cljs.core.seq(arglist__9156);
return dl__delegate(args__6547__auto__);
});
dl.cljs$core$IFn$_invoke$arity$variadic = dl__delegate;
return dl;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.dt = (function() { 
var dt__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__7789_9157 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__7790_9158 = null;var count__7791_9159 = 0;var i__7792_9160 = 0;while(true){
if((i__7792_9160 < count__7791_9159))
{var arg__6549__auto___9161 = cljs.core._nth.call(null,chunk__7790_9158,i__7792_9160);a__6548__auto__.push(arg__6549__auto___9161);
{
var G__9162 = seq__7789_9157;
var G__9163 = chunk__7790_9158;
var G__9164 = count__7791_9159;
var G__9165 = (i__7792_9160 + 1);
seq__7789_9157 = G__9162;
chunk__7790_9158 = G__9163;
count__7791_9159 = G__9164;
i__7792_9160 = G__9165;
continue;
}
} else
{var temp__4092__auto___9166 = cljs.core.seq.call(null,seq__7789_9157);if(temp__4092__auto___9166)
{var seq__7789_9167__$1 = temp__4092__auto___9166;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7789_9167__$1))
{var c__5632__auto___9168 = cljs.core.chunk_first.call(null,seq__7789_9167__$1);{
var G__9169 = cljs.core.chunk_rest.call(null,seq__7789_9167__$1);
var G__9170 = c__5632__auto___9168;
var G__9171 = cljs.core.count.call(null,c__5632__auto___9168);
var G__9172 = 0;
seq__7789_9157 = G__9169;
chunk__7790_9158 = G__9170;
count__7791_9159 = G__9171;
i__7792_9160 = G__9172;
continue;
}
} else
{var arg__6549__auto___9173 = cljs.core.first.call(null,seq__7789_9167__$1);a__6548__auto__.push(arg__6549__auto___9173);
{
var G__9174 = cljs.core.next.call(null,seq__7789_9167__$1);
var G__9175 = null;
var G__9176 = 0;
var G__9177 = 0;
seq__7789_9157 = G__9174;
chunk__7790_9158 = G__9175;
count__7791_9159 = G__9176;
i__7792_9160 = G__9177;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.dt.apply(null,a__6548__auto__);
};
var dt = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return dt__delegate.call(this,args__6547__auto__);};
dt.cljs$lang$maxFixedArity = 0;
dt.cljs$lang$applyTo = (function (arglist__9178){
var args__6547__auto__ = cljs.core.seq(arglist__9178);
return dt__delegate(args__6547__auto__);
});
dt.cljs$core$IFn$_invoke$arity$variadic = dt__delegate;
return dt;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.em = (function() { 
var em__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__7797_9179 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__7798_9180 = null;var count__7799_9181 = 0;var i__7800_9182 = 0;while(true){
if((i__7800_9182 < count__7799_9181))
{var arg__6549__auto___9183 = cljs.core._nth.call(null,chunk__7798_9180,i__7800_9182);a__6548__auto__.push(arg__6549__auto___9183);
{
var G__9184 = seq__7797_9179;
var G__9185 = chunk__7798_9180;
var G__9186 = count__7799_9181;
var G__9187 = (i__7800_9182 + 1);
seq__7797_9179 = G__9184;
chunk__7798_9180 = G__9185;
count__7799_9181 = G__9186;
i__7800_9182 = G__9187;
continue;
}
} else
{var temp__4092__auto___9188 = cljs.core.seq.call(null,seq__7797_9179);if(temp__4092__auto___9188)
{var seq__7797_9189__$1 = temp__4092__auto___9188;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7797_9189__$1))
{var c__5632__auto___9190 = cljs.core.chunk_first.call(null,seq__7797_9189__$1);{
var G__9191 = cljs.core.chunk_rest.call(null,seq__7797_9189__$1);
var G__9192 = c__5632__auto___9190;
var G__9193 = cljs.core.count.call(null,c__5632__auto___9190);
var G__9194 = 0;
seq__7797_9179 = G__9191;
chunk__7798_9180 = G__9192;
count__7799_9181 = G__9193;
i__7800_9182 = G__9194;
continue;
}
} else
{var arg__6549__auto___9195 = cljs.core.first.call(null,seq__7797_9189__$1);a__6548__auto__.push(arg__6549__auto___9195);
{
var G__9196 = cljs.core.next.call(null,seq__7797_9189__$1);
var G__9197 = null;
var G__9198 = 0;
var G__9199 = 0;
seq__7797_9179 = G__9196;
chunk__7798_9180 = G__9197;
count__7799_9181 = G__9198;
i__7800_9182 = G__9199;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.em.apply(null,a__6548__auto__);
};
var em = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return em__delegate.call(this,args__6547__auto__);};
em.cljs$lang$maxFixedArity = 0;
em.cljs$lang$applyTo = (function (arglist__9200){
var args__6547__auto__ = cljs.core.seq(arglist__9200);
return em__delegate(args__6547__auto__);
});
em.cljs$core$IFn$_invoke$arity$variadic = em__delegate;
return em;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.embed = (function() { 
var embed__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__7813_9201 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__7814_9202 = null;var count__7815_9203 = 0;var i__7816_9204 = 0;while(true){
if((i__7816_9204 < count__7815_9203))
{var arg__6549__auto___9205 = cljs.core._nth.call(null,chunk__7814_9202,i__7816_9204);a__6548__auto__.push(arg__6549__auto___9205);
{
var G__9206 = seq__7813_9201;
var G__9207 = chunk__7814_9202;
var G__9208 = count__7815_9203;
var G__9209 = (i__7816_9204 + 1);
seq__7813_9201 = G__9206;
chunk__7814_9202 = G__9207;
count__7815_9203 = G__9208;
i__7816_9204 = G__9209;
continue;
}
} else
{var temp__4092__auto___9210 = cljs.core.seq.call(null,seq__7813_9201);if(temp__4092__auto___9210)
{var seq__7813_9211__$1 = temp__4092__auto___9210;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7813_9211__$1))
{var c__5632__auto___9212 = cljs.core.chunk_first.call(null,seq__7813_9211__$1);{
var G__9213 = cljs.core.chunk_rest.call(null,seq__7813_9211__$1);
var G__9214 = c__5632__auto___9212;
var G__9215 = cljs.core.count.call(null,c__5632__auto___9212);
var G__9216 = 0;
seq__7813_9201 = G__9213;
chunk__7814_9202 = G__9214;
count__7815_9203 = G__9215;
i__7816_9204 = G__9216;
continue;
}
} else
{var arg__6549__auto___9217 = cljs.core.first.call(null,seq__7813_9211__$1);a__6548__auto__.push(arg__6549__auto___9217);
{
var G__9218 = cljs.core.next.call(null,seq__7813_9211__$1);
var G__9219 = null;
var G__9220 = 0;
var G__9221 = 0;
seq__7813_9201 = G__9218;
chunk__7814_9202 = G__9219;
count__7815_9203 = G__9220;
i__7816_9204 = G__9221;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.embed.apply(null,a__6548__auto__);
};
var embed = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return embed__delegate.call(this,args__6547__auto__);};
embed.cljs$lang$maxFixedArity = 0;
embed.cljs$lang$applyTo = (function (arglist__9222){
var args__6547__auto__ = cljs.core.seq(arglist__9222);
return embed__delegate(args__6547__auto__);
});
embed.cljs$core$IFn$_invoke$arity$variadic = embed__delegate;
return embed;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.fieldset = (function() { 
var fieldset__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__7821_9223 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__7822_9224 = null;var count__7823_9225 = 0;var i__7824_9226 = 0;while(true){
if((i__7824_9226 < count__7823_9225))
{var arg__6549__auto___9227 = cljs.core._nth.call(null,chunk__7822_9224,i__7824_9226);a__6548__auto__.push(arg__6549__auto___9227);
{
var G__9228 = seq__7821_9223;
var G__9229 = chunk__7822_9224;
var G__9230 = count__7823_9225;
var G__9231 = (i__7824_9226 + 1);
seq__7821_9223 = G__9228;
chunk__7822_9224 = G__9229;
count__7823_9225 = G__9230;
i__7824_9226 = G__9231;
continue;
}
} else
{var temp__4092__auto___9232 = cljs.core.seq.call(null,seq__7821_9223);if(temp__4092__auto___9232)
{var seq__7821_9233__$1 = temp__4092__auto___9232;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7821_9233__$1))
{var c__5632__auto___9234 = cljs.core.chunk_first.call(null,seq__7821_9233__$1);{
var G__9235 = cljs.core.chunk_rest.call(null,seq__7821_9233__$1);
var G__9236 = c__5632__auto___9234;
var G__9237 = cljs.core.count.call(null,c__5632__auto___9234);
var G__9238 = 0;
seq__7821_9223 = G__9235;
chunk__7822_9224 = G__9236;
count__7823_9225 = G__9237;
i__7824_9226 = G__9238;
continue;
}
} else
{var arg__6549__auto___9239 = cljs.core.first.call(null,seq__7821_9233__$1);a__6548__auto__.push(arg__6549__auto___9239);
{
var G__9240 = cljs.core.next.call(null,seq__7821_9233__$1);
var G__9241 = null;
var G__9242 = 0;
var G__9243 = 0;
seq__7821_9223 = G__9240;
chunk__7822_9224 = G__9241;
count__7823_9225 = G__9242;
i__7824_9226 = G__9243;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.fieldset.apply(null,a__6548__auto__);
};
var fieldset = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return fieldset__delegate.call(this,args__6547__auto__);};
fieldset.cljs$lang$maxFixedArity = 0;
fieldset.cljs$lang$applyTo = (function (arglist__9244){
var args__6547__auto__ = cljs.core.seq(arglist__9244);
return fieldset__delegate(args__6547__auto__);
});
fieldset.cljs$core$IFn$_invoke$arity$variadic = fieldset__delegate;
return fieldset;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.figcaption = (function() { 
var figcaption__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__7829_9245 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__7830_9246 = null;var count__7831_9247 = 0;var i__7832_9248 = 0;while(true){
if((i__7832_9248 < count__7831_9247))
{var arg__6549__auto___9249 = cljs.core._nth.call(null,chunk__7830_9246,i__7832_9248);a__6548__auto__.push(arg__6549__auto___9249);
{
var G__9250 = seq__7829_9245;
var G__9251 = chunk__7830_9246;
var G__9252 = count__7831_9247;
var G__9253 = (i__7832_9248 + 1);
seq__7829_9245 = G__9250;
chunk__7830_9246 = G__9251;
count__7831_9247 = G__9252;
i__7832_9248 = G__9253;
continue;
}
} else
{var temp__4092__auto___9254 = cljs.core.seq.call(null,seq__7829_9245);if(temp__4092__auto___9254)
{var seq__7829_9255__$1 = temp__4092__auto___9254;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7829_9255__$1))
{var c__5632__auto___9256 = cljs.core.chunk_first.call(null,seq__7829_9255__$1);{
var G__9257 = cljs.core.chunk_rest.call(null,seq__7829_9255__$1);
var G__9258 = c__5632__auto___9256;
var G__9259 = cljs.core.count.call(null,c__5632__auto___9256);
var G__9260 = 0;
seq__7829_9245 = G__9257;
chunk__7830_9246 = G__9258;
count__7831_9247 = G__9259;
i__7832_9248 = G__9260;
continue;
}
} else
{var arg__6549__auto___9261 = cljs.core.first.call(null,seq__7829_9255__$1);a__6548__auto__.push(arg__6549__auto___9261);
{
var G__9262 = cljs.core.next.call(null,seq__7829_9255__$1);
var G__9263 = null;
var G__9264 = 0;
var G__9265 = 0;
seq__7829_9245 = G__9262;
chunk__7830_9246 = G__9263;
count__7831_9247 = G__9264;
i__7832_9248 = G__9265;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.figcaption.apply(null,a__6548__auto__);
};
var figcaption = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return figcaption__delegate.call(this,args__6547__auto__);};
figcaption.cljs$lang$maxFixedArity = 0;
figcaption.cljs$lang$applyTo = (function (arglist__9266){
var args__6547__auto__ = cljs.core.seq(arglist__9266);
return figcaption__delegate(args__6547__auto__);
});
figcaption.cljs$core$IFn$_invoke$arity$variadic = figcaption__delegate;
return figcaption;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.figure = (function() { 
var figure__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__7837_9267 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__7838_9268 = null;var count__7839_9269 = 0;var i__7840_9270 = 0;while(true){
if((i__7840_9270 < count__7839_9269))
{var arg__6549__auto___9271 = cljs.core._nth.call(null,chunk__7838_9268,i__7840_9270);a__6548__auto__.push(arg__6549__auto___9271);
{
var G__9272 = seq__7837_9267;
var G__9273 = chunk__7838_9268;
var G__9274 = count__7839_9269;
var G__9275 = (i__7840_9270 + 1);
seq__7837_9267 = G__9272;
chunk__7838_9268 = G__9273;
count__7839_9269 = G__9274;
i__7840_9270 = G__9275;
continue;
}
} else
{var temp__4092__auto___9276 = cljs.core.seq.call(null,seq__7837_9267);if(temp__4092__auto___9276)
{var seq__7837_9277__$1 = temp__4092__auto___9276;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7837_9277__$1))
{var c__5632__auto___9278 = cljs.core.chunk_first.call(null,seq__7837_9277__$1);{
var G__9279 = cljs.core.chunk_rest.call(null,seq__7837_9277__$1);
var G__9280 = c__5632__auto___9278;
var G__9281 = cljs.core.count.call(null,c__5632__auto___9278);
var G__9282 = 0;
seq__7837_9267 = G__9279;
chunk__7838_9268 = G__9280;
count__7839_9269 = G__9281;
i__7840_9270 = G__9282;
continue;
}
} else
{var arg__6549__auto___9283 = cljs.core.first.call(null,seq__7837_9277__$1);a__6548__auto__.push(arg__6549__auto___9283);
{
var G__9284 = cljs.core.next.call(null,seq__7837_9277__$1);
var G__9285 = null;
var G__9286 = 0;
var G__9287 = 0;
seq__7837_9267 = G__9284;
chunk__7838_9268 = G__9285;
count__7839_9269 = G__9286;
i__7840_9270 = G__9287;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.figure.apply(null,a__6548__auto__);
};
var figure = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return figure__delegate.call(this,args__6547__auto__);};
figure.cljs$lang$maxFixedArity = 0;
figure.cljs$lang$applyTo = (function (arglist__9288){
var args__6547__auto__ = cljs.core.seq(arglist__9288);
return figure__delegate(args__6547__auto__);
});
figure.cljs$core$IFn$_invoke$arity$variadic = figure__delegate;
return figure;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.footer = (function() { 
var footer__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__7845_9289 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__7846_9290 = null;var count__7847_9291 = 0;var i__7848_9292 = 0;while(true){
if((i__7848_9292 < count__7847_9291))
{var arg__6549__auto___9293 = cljs.core._nth.call(null,chunk__7846_9290,i__7848_9292);a__6548__auto__.push(arg__6549__auto___9293);
{
var G__9294 = seq__7845_9289;
var G__9295 = chunk__7846_9290;
var G__9296 = count__7847_9291;
var G__9297 = (i__7848_9292 + 1);
seq__7845_9289 = G__9294;
chunk__7846_9290 = G__9295;
count__7847_9291 = G__9296;
i__7848_9292 = G__9297;
continue;
}
} else
{var temp__4092__auto___9298 = cljs.core.seq.call(null,seq__7845_9289);if(temp__4092__auto___9298)
{var seq__7845_9299__$1 = temp__4092__auto___9298;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7845_9299__$1))
{var c__5632__auto___9300 = cljs.core.chunk_first.call(null,seq__7845_9299__$1);{
var G__9301 = cljs.core.chunk_rest.call(null,seq__7845_9299__$1);
var G__9302 = c__5632__auto___9300;
var G__9303 = cljs.core.count.call(null,c__5632__auto___9300);
var G__9304 = 0;
seq__7845_9289 = G__9301;
chunk__7846_9290 = G__9302;
count__7847_9291 = G__9303;
i__7848_9292 = G__9304;
continue;
}
} else
{var arg__6549__auto___9305 = cljs.core.first.call(null,seq__7845_9299__$1);a__6548__auto__.push(arg__6549__auto___9305);
{
var G__9306 = cljs.core.next.call(null,seq__7845_9299__$1);
var G__9307 = null;
var G__9308 = 0;
var G__9309 = 0;
seq__7845_9289 = G__9306;
chunk__7846_9290 = G__9307;
count__7847_9291 = G__9308;
i__7848_9292 = G__9309;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.footer.apply(null,a__6548__auto__);
};
var footer = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return footer__delegate.call(this,args__6547__auto__);};
footer.cljs$lang$maxFixedArity = 0;
footer.cljs$lang$applyTo = (function (arglist__9310){
var args__6547__auto__ = cljs.core.seq(arglist__9310);
return footer__delegate(args__6547__auto__);
});
footer.cljs$core$IFn$_invoke$arity$variadic = footer__delegate;
return footer;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.form = (function() { 
var form__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__7853_9311 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__7854_9312 = null;var count__7855_9313 = 0;var i__7856_9314 = 0;while(true){
if((i__7856_9314 < count__7855_9313))
{var arg__6549__auto___9315 = cljs.core._nth.call(null,chunk__7854_9312,i__7856_9314);a__6548__auto__.push(arg__6549__auto___9315);
{
var G__9316 = seq__7853_9311;
var G__9317 = chunk__7854_9312;
var G__9318 = count__7855_9313;
var G__9319 = (i__7856_9314 + 1);
seq__7853_9311 = G__9316;
chunk__7854_9312 = G__9317;
count__7855_9313 = G__9318;
i__7856_9314 = G__9319;
continue;
}
} else
{var temp__4092__auto___9320 = cljs.core.seq.call(null,seq__7853_9311);if(temp__4092__auto___9320)
{var seq__7853_9321__$1 = temp__4092__auto___9320;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7853_9321__$1))
{var c__5632__auto___9322 = cljs.core.chunk_first.call(null,seq__7853_9321__$1);{
var G__9323 = cljs.core.chunk_rest.call(null,seq__7853_9321__$1);
var G__9324 = c__5632__auto___9322;
var G__9325 = cljs.core.count.call(null,c__5632__auto___9322);
var G__9326 = 0;
seq__7853_9311 = G__9323;
chunk__7854_9312 = G__9324;
count__7855_9313 = G__9325;
i__7856_9314 = G__9326;
continue;
}
} else
{var arg__6549__auto___9327 = cljs.core.first.call(null,seq__7853_9321__$1);a__6548__auto__.push(arg__6549__auto___9327);
{
var G__9328 = cljs.core.next.call(null,seq__7853_9321__$1);
var G__9329 = null;
var G__9330 = 0;
var G__9331 = 0;
seq__7853_9311 = G__9328;
chunk__7854_9312 = G__9329;
count__7855_9313 = G__9330;
i__7856_9314 = G__9331;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.form.apply(null,a__6548__auto__);
};
var form = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return form__delegate.call(this,args__6547__auto__);};
form.cljs$lang$maxFixedArity = 0;
form.cljs$lang$applyTo = (function (arglist__9332){
var args__6547__auto__ = cljs.core.seq(arglist__9332);
return form__delegate(args__6547__auto__);
});
form.cljs$core$IFn$_invoke$arity$variadic = form__delegate;
return form;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h1 = (function() { 
var h1__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__7861_9333 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__7862_9334 = null;var count__7863_9335 = 0;var i__7864_9336 = 0;while(true){
if((i__7864_9336 < count__7863_9335))
{var arg__6549__auto___9337 = cljs.core._nth.call(null,chunk__7862_9334,i__7864_9336);a__6548__auto__.push(arg__6549__auto___9337);
{
var G__9338 = seq__7861_9333;
var G__9339 = chunk__7862_9334;
var G__9340 = count__7863_9335;
var G__9341 = (i__7864_9336 + 1);
seq__7861_9333 = G__9338;
chunk__7862_9334 = G__9339;
count__7863_9335 = G__9340;
i__7864_9336 = G__9341;
continue;
}
} else
{var temp__4092__auto___9342 = cljs.core.seq.call(null,seq__7861_9333);if(temp__4092__auto___9342)
{var seq__7861_9343__$1 = temp__4092__auto___9342;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7861_9343__$1))
{var c__5632__auto___9344 = cljs.core.chunk_first.call(null,seq__7861_9343__$1);{
var G__9345 = cljs.core.chunk_rest.call(null,seq__7861_9343__$1);
var G__9346 = c__5632__auto___9344;
var G__9347 = cljs.core.count.call(null,c__5632__auto___9344);
var G__9348 = 0;
seq__7861_9333 = G__9345;
chunk__7862_9334 = G__9346;
count__7863_9335 = G__9347;
i__7864_9336 = G__9348;
continue;
}
} else
{var arg__6549__auto___9349 = cljs.core.first.call(null,seq__7861_9343__$1);a__6548__auto__.push(arg__6549__auto___9349);
{
var G__9350 = cljs.core.next.call(null,seq__7861_9343__$1);
var G__9351 = null;
var G__9352 = 0;
var G__9353 = 0;
seq__7861_9333 = G__9350;
chunk__7862_9334 = G__9351;
count__7863_9335 = G__9352;
i__7864_9336 = G__9353;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h1.apply(null,a__6548__auto__);
};
var h1 = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h1__delegate.call(this,args__6547__auto__);};
h1.cljs$lang$maxFixedArity = 0;
h1.cljs$lang$applyTo = (function (arglist__9354){
var args__6547__auto__ = cljs.core.seq(arglist__9354);
return h1__delegate(args__6547__auto__);
});
h1.cljs$core$IFn$_invoke$arity$variadic = h1__delegate;
return h1;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h2 = (function() { 
var h2__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__7869_9355 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__7870_9356 = null;var count__7871_9357 = 0;var i__7872_9358 = 0;while(true){
if((i__7872_9358 < count__7871_9357))
{var arg__6549__auto___9359 = cljs.core._nth.call(null,chunk__7870_9356,i__7872_9358);a__6548__auto__.push(arg__6549__auto___9359);
{
var G__9360 = seq__7869_9355;
var G__9361 = chunk__7870_9356;
var G__9362 = count__7871_9357;
var G__9363 = (i__7872_9358 + 1);
seq__7869_9355 = G__9360;
chunk__7870_9356 = G__9361;
count__7871_9357 = G__9362;
i__7872_9358 = G__9363;
continue;
}
} else
{var temp__4092__auto___9364 = cljs.core.seq.call(null,seq__7869_9355);if(temp__4092__auto___9364)
{var seq__7869_9365__$1 = temp__4092__auto___9364;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7869_9365__$1))
{var c__5632__auto___9366 = cljs.core.chunk_first.call(null,seq__7869_9365__$1);{
var G__9367 = cljs.core.chunk_rest.call(null,seq__7869_9365__$1);
var G__9368 = c__5632__auto___9366;
var G__9369 = cljs.core.count.call(null,c__5632__auto___9366);
var G__9370 = 0;
seq__7869_9355 = G__9367;
chunk__7870_9356 = G__9368;
count__7871_9357 = G__9369;
i__7872_9358 = G__9370;
continue;
}
} else
{var arg__6549__auto___9371 = cljs.core.first.call(null,seq__7869_9365__$1);a__6548__auto__.push(arg__6549__auto___9371);
{
var G__9372 = cljs.core.next.call(null,seq__7869_9365__$1);
var G__9373 = null;
var G__9374 = 0;
var G__9375 = 0;
seq__7869_9355 = G__9372;
chunk__7870_9356 = G__9373;
count__7871_9357 = G__9374;
i__7872_9358 = G__9375;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h2.apply(null,a__6548__auto__);
};
var h2 = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h2__delegate.call(this,args__6547__auto__);};
h2.cljs$lang$maxFixedArity = 0;
h2.cljs$lang$applyTo = (function (arglist__9376){
var args__6547__auto__ = cljs.core.seq(arglist__9376);
return h2__delegate(args__6547__auto__);
});
h2.cljs$core$IFn$_invoke$arity$variadic = h2__delegate;
return h2;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h3 = (function() { 
var h3__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__7877_9377 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__7878_9378 = null;var count__7879_9379 = 0;var i__7880_9380 = 0;while(true){
if((i__7880_9380 < count__7879_9379))
{var arg__6549__auto___9381 = cljs.core._nth.call(null,chunk__7878_9378,i__7880_9380);a__6548__auto__.push(arg__6549__auto___9381);
{
var G__9382 = seq__7877_9377;
var G__9383 = chunk__7878_9378;
var G__9384 = count__7879_9379;
var G__9385 = (i__7880_9380 + 1);
seq__7877_9377 = G__9382;
chunk__7878_9378 = G__9383;
count__7879_9379 = G__9384;
i__7880_9380 = G__9385;
continue;
}
} else
{var temp__4092__auto___9386 = cljs.core.seq.call(null,seq__7877_9377);if(temp__4092__auto___9386)
{var seq__7877_9387__$1 = temp__4092__auto___9386;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7877_9387__$1))
{var c__5632__auto___9388 = cljs.core.chunk_first.call(null,seq__7877_9387__$1);{
var G__9389 = cljs.core.chunk_rest.call(null,seq__7877_9387__$1);
var G__9390 = c__5632__auto___9388;
var G__9391 = cljs.core.count.call(null,c__5632__auto___9388);
var G__9392 = 0;
seq__7877_9377 = G__9389;
chunk__7878_9378 = G__9390;
count__7879_9379 = G__9391;
i__7880_9380 = G__9392;
continue;
}
} else
{var arg__6549__auto___9393 = cljs.core.first.call(null,seq__7877_9387__$1);a__6548__auto__.push(arg__6549__auto___9393);
{
var G__9394 = cljs.core.next.call(null,seq__7877_9387__$1);
var G__9395 = null;
var G__9396 = 0;
var G__9397 = 0;
seq__7877_9377 = G__9394;
chunk__7878_9378 = G__9395;
count__7879_9379 = G__9396;
i__7880_9380 = G__9397;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h3.apply(null,a__6548__auto__);
};
var h3 = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h3__delegate.call(this,args__6547__auto__);};
h3.cljs$lang$maxFixedArity = 0;
h3.cljs$lang$applyTo = (function (arglist__9398){
var args__6547__auto__ = cljs.core.seq(arglist__9398);
return h3__delegate(args__6547__auto__);
});
h3.cljs$core$IFn$_invoke$arity$variadic = h3__delegate;
return h3;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h4 = (function() { 
var h4__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__7885_9399 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__7886_9400 = null;var count__7887_9401 = 0;var i__7888_9402 = 0;while(true){
if((i__7888_9402 < count__7887_9401))
{var arg__6549__auto___9403 = cljs.core._nth.call(null,chunk__7886_9400,i__7888_9402);a__6548__auto__.push(arg__6549__auto___9403);
{
var G__9404 = seq__7885_9399;
var G__9405 = chunk__7886_9400;
var G__9406 = count__7887_9401;
var G__9407 = (i__7888_9402 + 1);
seq__7885_9399 = G__9404;
chunk__7886_9400 = G__9405;
count__7887_9401 = G__9406;
i__7888_9402 = G__9407;
continue;
}
} else
{var temp__4092__auto___9408 = cljs.core.seq.call(null,seq__7885_9399);if(temp__4092__auto___9408)
{var seq__7885_9409__$1 = temp__4092__auto___9408;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7885_9409__$1))
{var c__5632__auto___9410 = cljs.core.chunk_first.call(null,seq__7885_9409__$1);{
var G__9411 = cljs.core.chunk_rest.call(null,seq__7885_9409__$1);
var G__9412 = c__5632__auto___9410;
var G__9413 = cljs.core.count.call(null,c__5632__auto___9410);
var G__9414 = 0;
seq__7885_9399 = G__9411;
chunk__7886_9400 = G__9412;
count__7887_9401 = G__9413;
i__7888_9402 = G__9414;
continue;
}
} else
{var arg__6549__auto___9415 = cljs.core.first.call(null,seq__7885_9409__$1);a__6548__auto__.push(arg__6549__auto___9415);
{
var G__9416 = cljs.core.next.call(null,seq__7885_9409__$1);
var G__9417 = null;
var G__9418 = 0;
var G__9419 = 0;
seq__7885_9399 = G__9416;
chunk__7886_9400 = G__9417;
count__7887_9401 = G__9418;
i__7888_9402 = G__9419;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h4.apply(null,a__6548__auto__);
};
var h4 = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h4__delegate.call(this,args__6547__auto__);};
h4.cljs$lang$maxFixedArity = 0;
h4.cljs$lang$applyTo = (function (arglist__9420){
var args__6547__auto__ = cljs.core.seq(arglist__9420);
return h4__delegate(args__6547__auto__);
});
h4.cljs$core$IFn$_invoke$arity$variadic = h4__delegate;
return h4;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h5 = (function() { 
var h5__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__7893_9421 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__7894_9422 = null;var count__7895_9423 = 0;var i__7896_9424 = 0;while(true){
if((i__7896_9424 < count__7895_9423))
{var arg__6549__auto___9425 = cljs.core._nth.call(null,chunk__7894_9422,i__7896_9424);a__6548__auto__.push(arg__6549__auto___9425);
{
var G__9426 = seq__7893_9421;
var G__9427 = chunk__7894_9422;
var G__9428 = count__7895_9423;
var G__9429 = (i__7896_9424 + 1);
seq__7893_9421 = G__9426;
chunk__7894_9422 = G__9427;
count__7895_9423 = G__9428;
i__7896_9424 = G__9429;
continue;
}
} else
{var temp__4092__auto___9430 = cljs.core.seq.call(null,seq__7893_9421);if(temp__4092__auto___9430)
{var seq__7893_9431__$1 = temp__4092__auto___9430;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7893_9431__$1))
{var c__5632__auto___9432 = cljs.core.chunk_first.call(null,seq__7893_9431__$1);{
var G__9433 = cljs.core.chunk_rest.call(null,seq__7893_9431__$1);
var G__9434 = c__5632__auto___9432;
var G__9435 = cljs.core.count.call(null,c__5632__auto___9432);
var G__9436 = 0;
seq__7893_9421 = G__9433;
chunk__7894_9422 = G__9434;
count__7895_9423 = G__9435;
i__7896_9424 = G__9436;
continue;
}
} else
{var arg__6549__auto___9437 = cljs.core.first.call(null,seq__7893_9431__$1);a__6548__auto__.push(arg__6549__auto___9437);
{
var G__9438 = cljs.core.next.call(null,seq__7893_9431__$1);
var G__9439 = null;
var G__9440 = 0;
var G__9441 = 0;
seq__7893_9421 = G__9438;
chunk__7894_9422 = G__9439;
count__7895_9423 = G__9440;
i__7896_9424 = G__9441;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h5.apply(null,a__6548__auto__);
};
var h5 = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h5__delegate.call(this,args__6547__auto__);};
h5.cljs$lang$maxFixedArity = 0;
h5.cljs$lang$applyTo = (function (arglist__9442){
var args__6547__auto__ = cljs.core.seq(arglist__9442);
return h5__delegate(args__6547__auto__);
});
h5.cljs$core$IFn$_invoke$arity$variadic = h5__delegate;
return h5;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h6 = (function() { 
var h6__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__7901_9443 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__7902_9444 = null;var count__7903_9445 = 0;var i__7904_9446 = 0;while(true){
if((i__7904_9446 < count__7903_9445))
{var arg__6549__auto___9447 = cljs.core._nth.call(null,chunk__7902_9444,i__7904_9446);a__6548__auto__.push(arg__6549__auto___9447);
{
var G__9448 = seq__7901_9443;
var G__9449 = chunk__7902_9444;
var G__9450 = count__7903_9445;
var G__9451 = (i__7904_9446 + 1);
seq__7901_9443 = G__9448;
chunk__7902_9444 = G__9449;
count__7903_9445 = G__9450;
i__7904_9446 = G__9451;
continue;
}
} else
{var temp__4092__auto___9452 = cljs.core.seq.call(null,seq__7901_9443);if(temp__4092__auto___9452)
{var seq__7901_9453__$1 = temp__4092__auto___9452;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7901_9453__$1))
{var c__5632__auto___9454 = cljs.core.chunk_first.call(null,seq__7901_9453__$1);{
var G__9455 = cljs.core.chunk_rest.call(null,seq__7901_9453__$1);
var G__9456 = c__5632__auto___9454;
var G__9457 = cljs.core.count.call(null,c__5632__auto___9454);
var G__9458 = 0;
seq__7901_9443 = G__9455;
chunk__7902_9444 = G__9456;
count__7903_9445 = G__9457;
i__7904_9446 = G__9458;
continue;
}
} else
{var arg__6549__auto___9459 = cljs.core.first.call(null,seq__7901_9453__$1);a__6548__auto__.push(arg__6549__auto___9459);
{
var G__9460 = cljs.core.next.call(null,seq__7901_9453__$1);
var G__9461 = null;
var G__9462 = 0;
var G__9463 = 0;
seq__7901_9443 = G__9460;
chunk__7902_9444 = G__9461;
count__7903_9445 = G__9462;
i__7904_9446 = G__9463;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h6.apply(null,a__6548__auto__);
};
var h6 = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h6__delegate.call(this,args__6547__auto__);};
h6.cljs$lang$maxFixedArity = 0;
h6.cljs$lang$applyTo = (function (arglist__9464){
var args__6547__auto__ = cljs.core.seq(arglist__9464);
return h6__delegate(args__6547__auto__);
});
h6.cljs$core$IFn$_invoke$arity$variadic = h6__delegate;
return h6;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.head = (function() { 
var head__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__7909_9465 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__7910_9466 = null;var count__7911_9467 = 0;var i__7912_9468 = 0;while(true){
if((i__7912_9468 < count__7911_9467))
{var arg__6549__auto___9469 = cljs.core._nth.call(null,chunk__7910_9466,i__7912_9468);a__6548__auto__.push(arg__6549__auto___9469);
{
var G__9470 = seq__7909_9465;
var G__9471 = chunk__7910_9466;
var G__9472 = count__7911_9467;
var G__9473 = (i__7912_9468 + 1);
seq__7909_9465 = G__9470;
chunk__7910_9466 = G__9471;
count__7911_9467 = G__9472;
i__7912_9468 = G__9473;
continue;
}
} else
{var temp__4092__auto___9474 = cljs.core.seq.call(null,seq__7909_9465);if(temp__4092__auto___9474)
{var seq__7909_9475__$1 = temp__4092__auto___9474;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7909_9475__$1))
{var c__5632__auto___9476 = cljs.core.chunk_first.call(null,seq__7909_9475__$1);{
var G__9477 = cljs.core.chunk_rest.call(null,seq__7909_9475__$1);
var G__9478 = c__5632__auto___9476;
var G__9479 = cljs.core.count.call(null,c__5632__auto___9476);
var G__9480 = 0;
seq__7909_9465 = G__9477;
chunk__7910_9466 = G__9478;
count__7911_9467 = G__9479;
i__7912_9468 = G__9480;
continue;
}
} else
{var arg__6549__auto___9481 = cljs.core.first.call(null,seq__7909_9475__$1);a__6548__auto__.push(arg__6549__auto___9481);
{
var G__9482 = cljs.core.next.call(null,seq__7909_9475__$1);
var G__9483 = null;
var G__9484 = 0;
var G__9485 = 0;
seq__7909_9465 = G__9482;
chunk__7910_9466 = G__9483;
count__7911_9467 = G__9484;
i__7912_9468 = G__9485;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.head.apply(null,a__6548__auto__);
};
var head = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return head__delegate.call(this,args__6547__auto__);};
head.cljs$lang$maxFixedArity = 0;
head.cljs$lang$applyTo = (function (arglist__9486){
var args__6547__auto__ = cljs.core.seq(arglist__9486);
return head__delegate(args__6547__auto__);
});
head.cljs$core$IFn$_invoke$arity$variadic = head__delegate;
return head;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.header = (function() { 
var header__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__7917_9487 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__7918_9488 = null;var count__7919_9489 = 0;var i__7920_9490 = 0;while(true){
if((i__7920_9490 < count__7919_9489))
{var arg__6549__auto___9491 = cljs.core._nth.call(null,chunk__7918_9488,i__7920_9490);a__6548__auto__.push(arg__6549__auto___9491);
{
var G__9492 = seq__7917_9487;
var G__9493 = chunk__7918_9488;
var G__9494 = count__7919_9489;
var G__9495 = (i__7920_9490 + 1);
seq__7917_9487 = G__9492;
chunk__7918_9488 = G__9493;
count__7919_9489 = G__9494;
i__7920_9490 = G__9495;
continue;
}
} else
{var temp__4092__auto___9496 = cljs.core.seq.call(null,seq__7917_9487);if(temp__4092__auto___9496)
{var seq__7917_9497__$1 = temp__4092__auto___9496;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7917_9497__$1))
{var c__5632__auto___9498 = cljs.core.chunk_first.call(null,seq__7917_9497__$1);{
var G__9499 = cljs.core.chunk_rest.call(null,seq__7917_9497__$1);
var G__9500 = c__5632__auto___9498;
var G__9501 = cljs.core.count.call(null,c__5632__auto___9498);
var G__9502 = 0;
seq__7917_9487 = G__9499;
chunk__7918_9488 = G__9500;
count__7919_9489 = G__9501;
i__7920_9490 = G__9502;
continue;
}
} else
{var arg__6549__auto___9503 = cljs.core.first.call(null,seq__7917_9497__$1);a__6548__auto__.push(arg__6549__auto___9503);
{
var G__9504 = cljs.core.next.call(null,seq__7917_9497__$1);
var G__9505 = null;
var G__9506 = 0;
var G__9507 = 0;
seq__7917_9487 = G__9504;
chunk__7918_9488 = G__9505;
count__7919_9489 = G__9506;
i__7920_9490 = G__9507;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.header.apply(null,a__6548__auto__);
};
var header = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return header__delegate.call(this,args__6547__auto__);};
header.cljs$lang$maxFixedArity = 0;
header.cljs$lang$applyTo = (function (arglist__9508){
var args__6547__auto__ = cljs.core.seq(arglist__9508);
return header__delegate(args__6547__auto__);
});
header.cljs$core$IFn$_invoke$arity$variadic = header__delegate;
return header;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.hr = (function() { 
var hr__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__7925_9509 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__7926_9510 = null;var count__7927_9511 = 0;var i__7928_9512 = 0;while(true){
if((i__7928_9512 < count__7927_9511))
{var arg__6549__auto___9513 = cljs.core._nth.call(null,chunk__7926_9510,i__7928_9512);a__6548__auto__.push(arg__6549__auto___9513);
{
var G__9514 = seq__7925_9509;
var G__9515 = chunk__7926_9510;
var G__9516 = count__7927_9511;
var G__9517 = (i__7928_9512 + 1);
seq__7925_9509 = G__9514;
chunk__7926_9510 = G__9515;
count__7927_9511 = G__9516;
i__7928_9512 = G__9517;
continue;
}
} else
{var temp__4092__auto___9518 = cljs.core.seq.call(null,seq__7925_9509);if(temp__4092__auto___9518)
{var seq__7925_9519__$1 = temp__4092__auto___9518;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7925_9519__$1))
{var c__5632__auto___9520 = cljs.core.chunk_first.call(null,seq__7925_9519__$1);{
var G__9521 = cljs.core.chunk_rest.call(null,seq__7925_9519__$1);
var G__9522 = c__5632__auto___9520;
var G__9523 = cljs.core.count.call(null,c__5632__auto___9520);
var G__9524 = 0;
seq__7925_9509 = G__9521;
chunk__7926_9510 = G__9522;
count__7927_9511 = G__9523;
i__7928_9512 = G__9524;
continue;
}
} else
{var arg__6549__auto___9525 = cljs.core.first.call(null,seq__7925_9519__$1);a__6548__auto__.push(arg__6549__auto___9525);
{
var G__9526 = cljs.core.next.call(null,seq__7925_9519__$1);
var G__9527 = null;
var G__9528 = 0;
var G__9529 = 0;
seq__7925_9509 = G__9526;
chunk__7926_9510 = G__9527;
count__7927_9511 = G__9528;
i__7928_9512 = G__9529;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.hr.apply(null,a__6548__auto__);
};
var hr = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return hr__delegate.call(this,args__6547__auto__);};
hr.cljs$lang$maxFixedArity = 0;
hr.cljs$lang$applyTo = (function (arglist__9530){
var args__6547__auto__ = cljs.core.seq(arglist__9530);
return hr__delegate(args__6547__auto__);
});
hr.cljs$core$IFn$_invoke$arity$variadic = hr__delegate;
return hr;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.html = (function() { 
var html__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__7933_9531 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__7934_9532 = null;var count__7935_9533 = 0;var i__7936_9534 = 0;while(true){
if((i__7936_9534 < count__7935_9533))
{var arg__6549__auto___9535 = cljs.core._nth.call(null,chunk__7934_9532,i__7936_9534);a__6548__auto__.push(arg__6549__auto___9535);
{
var G__9536 = seq__7933_9531;
var G__9537 = chunk__7934_9532;
var G__9538 = count__7935_9533;
var G__9539 = (i__7936_9534 + 1);
seq__7933_9531 = G__9536;
chunk__7934_9532 = G__9537;
count__7935_9533 = G__9538;
i__7936_9534 = G__9539;
continue;
}
} else
{var temp__4092__auto___9540 = cljs.core.seq.call(null,seq__7933_9531);if(temp__4092__auto___9540)
{var seq__7933_9541__$1 = temp__4092__auto___9540;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7933_9541__$1))
{var c__5632__auto___9542 = cljs.core.chunk_first.call(null,seq__7933_9541__$1);{
var G__9543 = cljs.core.chunk_rest.call(null,seq__7933_9541__$1);
var G__9544 = c__5632__auto___9542;
var G__9545 = cljs.core.count.call(null,c__5632__auto___9542);
var G__9546 = 0;
seq__7933_9531 = G__9543;
chunk__7934_9532 = G__9544;
count__7935_9533 = G__9545;
i__7936_9534 = G__9546;
continue;
}
} else
{var arg__6549__auto___9547 = cljs.core.first.call(null,seq__7933_9541__$1);a__6548__auto__.push(arg__6549__auto___9547);
{
var G__9548 = cljs.core.next.call(null,seq__7933_9541__$1);
var G__9549 = null;
var G__9550 = 0;
var G__9551 = 0;
seq__7933_9531 = G__9548;
chunk__7934_9532 = G__9549;
count__7935_9533 = G__9550;
i__7936_9534 = G__9551;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.html.apply(null,a__6548__auto__);
};
var html = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return html__delegate.call(this,args__6547__auto__);};
html.cljs$lang$maxFixedArity = 0;
html.cljs$lang$applyTo = (function (arglist__9552){
var args__6547__auto__ = cljs.core.seq(arglist__9552);
return html__delegate(args__6547__auto__);
});
html.cljs$core$IFn$_invoke$arity$variadic = html__delegate;
return html;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.i = (function() { 
var i__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__7941_9553 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__7942_9554 = null;var count__7943_9555 = 0;var i__7944_9556 = 0;while(true){
if((i__7944_9556 < count__7943_9555))
{var arg__6549__auto___9557 = cljs.core._nth.call(null,chunk__7942_9554,i__7944_9556);a__6548__auto__.push(arg__6549__auto___9557);
{
var G__9558 = seq__7941_9553;
var G__9559 = chunk__7942_9554;
var G__9560 = count__7943_9555;
var G__9561 = (i__7944_9556 + 1);
seq__7941_9553 = G__9558;
chunk__7942_9554 = G__9559;
count__7943_9555 = G__9560;
i__7944_9556 = G__9561;
continue;
}
} else
{var temp__4092__auto___9562 = cljs.core.seq.call(null,seq__7941_9553);if(temp__4092__auto___9562)
{var seq__7941_9563__$1 = temp__4092__auto___9562;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7941_9563__$1))
{var c__5632__auto___9564 = cljs.core.chunk_first.call(null,seq__7941_9563__$1);{
var G__9565 = cljs.core.chunk_rest.call(null,seq__7941_9563__$1);
var G__9566 = c__5632__auto___9564;
var G__9567 = cljs.core.count.call(null,c__5632__auto___9564);
var G__9568 = 0;
seq__7941_9553 = G__9565;
chunk__7942_9554 = G__9566;
count__7943_9555 = G__9567;
i__7944_9556 = G__9568;
continue;
}
} else
{var arg__6549__auto___9569 = cljs.core.first.call(null,seq__7941_9563__$1);a__6548__auto__.push(arg__6549__auto___9569);
{
var G__9570 = cljs.core.next.call(null,seq__7941_9563__$1);
var G__9571 = null;
var G__9572 = 0;
var G__9573 = 0;
seq__7941_9553 = G__9570;
chunk__7942_9554 = G__9571;
count__7943_9555 = G__9572;
i__7944_9556 = G__9573;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.i.apply(null,a__6548__auto__);
};
var i = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return i__delegate.call(this,args__6547__auto__);};
i.cljs$lang$maxFixedArity = 0;
i.cljs$lang$applyTo = (function (arglist__9574){
var args__6547__auto__ = cljs.core.seq(arglist__9574);
return i__delegate(args__6547__auto__);
});
i.cljs$core$IFn$_invoke$arity$variadic = i__delegate;
return i;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.iframe = (function() { 
var iframe__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__7949_9575 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__7950_9576 = null;var count__7951_9577 = 0;var i__7952_9578 = 0;while(true){
if((i__7952_9578 < count__7951_9577))
{var arg__6549__auto___9579 = cljs.core._nth.call(null,chunk__7950_9576,i__7952_9578);a__6548__auto__.push(arg__6549__auto___9579);
{
var G__9580 = seq__7949_9575;
var G__9581 = chunk__7950_9576;
var G__9582 = count__7951_9577;
var G__9583 = (i__7952_9578 + 1);
seq__7949_9575 = G__9580;
chunk__7950_9576 = G__9581;
count__7951_9577 = G__9582;
i__7952_9578 = G__9583;
continue;
}
} else
{var temp__4092__auto___9584 = cljs.core.seq.call(null,seq__7949_9575);if(temp__4092__auto___9584)
{var seq__7949_9585__$1 = temp__4092__auto___9584;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7949_9585__$1))
{var c__5632__auto___9586 = cljs.core.chunk_first.call(null,seq__7949_9585__$1);{
var G__9587 = cljs.core.chunk_rest.call(null,seq__7949_9585__$1);
var G__9588 = c__5632__auto___9586;
var G__9589 = cljs.core.count.call(null,c__5632__auto___9586);
var G__9590 = 0;
seq__7949_9575 = G__9587;
chunk__7950_9576 = G__9588;
count__7951_9577 = G__9589;
i__7952_9578 = G__9590;
continue;
}
} else
{var arg__6549__auto___9591 = cljs.core.first.call(null,seq__7949_9585__$1);a__6548__auto__.push(arg__6549__auto___9591);
{
var G__9592 = cljs.core.next.call(null,seq__7949_9585__$1);
var G__9593 = null;
var G__9594 = 0;
var G__9595 = 0;
seq__7949_9575 = G__9592;
chunk__7950_9576 = G__9593;
count__7951_9577 = G__9594;
i__7952_9578 = G__9595;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.iframe.apply(null,a__6548__auto__);
};
var iframe = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return iframe__delegate.call(this,args__6547__auto__);};
iframe.cljs$lang$maxFixedArity = 0;
iframe.cljs$lang$applyTo = (function (arglist__9596){
var args__6547__auto__ = cljs.core.seq(arglist__9596);
return iframe__delegate(args__6547__auto__);
});
iframe.cljs$core$IFn$_invoke$arity$variadic = iframe__delegate;
return iframe;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.img = (function() { 
var img__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__7957_9597 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__7958_9598 = null;var count__7959_9599 = 0;var i__7960_9600 = 0;while(true){
if((i__7960_9600 < count__7959_9599))
{var arg__6549__auto___9601 = cljs.core._nth.call(null,chunk__7958_9598,i__7960_9600);a__6548__auto__.push(arg__6549__auto___9601);
{
var G__9602 = seq__7957_9597;
var G__9603 = chunk__7958_9598;
var G__9604 = count__7959_9599;
var G__9605 = (i__7960_9600 + 1);
seq__7957_9597 = G__9602;
chunk__7958_9598 = G__9603;
count__7959_9599 = G__9604;
i__7960_9600 = G__9605;
continue;
}
} else
{var temp__4092__auto___9606 = cljs.core.seq.call(null,seq__7957_9597);if(temp__4092__auto___9606)
{var seq__7957_9607__$1 = temp__4092__auto___9606;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7957_9607__$1))
{var c__5632__auto___9608 = cljs.core.chunk_first.call(null,seq__7957_9607__$1);{
var G__9609 = cljs.core.chunk_rest.call(null,seq__7957_9607__$1);
var G__9610 = c__5632__auto___9608;
var G__9611 = cljs.core.count.call(null,c__5632__auto___9608);
var G__9612 = 0;
seq__7957_9597 = G__9609;
chunk__7958_9598 = G__9610;
count__7959_9599 = G__9611;
i__7960_9600 = G__9612;
continue;
}
} else
{var arg__6549__auto___9613 = cljs.core.first.call(null,seq__7957_9607__$1);a__6548__auto__.push(arg__6549__auto___9613);
{
var G__9614 = cljs.core.next.call(null,seq__7957_9607__$1);
var G__9615 = null;
var G__9616 = 0;
var G__9617 = 0;
seq__7957_9597 = G__9614;
chunk__7958_9598 = G__9615;
count__7959_9599 = G__9616;
i__7960_9600 = G__9617;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.img.apply(null,a__6548__auto__);
};
var img = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return img__delegate.call(this,args__6547__auto__);};
img.cljs$lang$maxFixedArity = 0;
img.cljs$lang$applyTo = (function (arglist__9618){
var args__6547__auto__ = cljs.core.seq(arglist__9618);
return img__delegate(args__6547__auto__);
});
img.cljs$core$IFn$_invoke$arity$variadic = img__delegate;
return img;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.input = (function() { 
var input__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__7965_9619 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__7966_9620 = null;var count__7967_9621 = 0;var i__7968_9622 = 0;while(true){
if((i__7968_9622 < count__7967_9621))
{var arg__6549__auto___9623 = cljs.core._nth.call(null,chunk__7966_9620,i__7968_9622);a__6548__auto__.push(arg__6549__auto___9623);
{
var G__9624 = seq__7965_9619;
var G__9625 = chunk__7966_9620;
var G__9626 = count__7967_9621;
var G__9627 = (i__7968_9622 + 1);
seq__7965_9619 = G__9624;
chunk__7966_9620 = G__9625;
count__7967_9621 = G__9626;
i__7968_9622 = G__9627;
continue;
}
} else
{var temp__4092__auto___9628 = cljs.core.seq.call(null,seq__7965_9619);if(temp__4092__auto___9628)
{var seq__7965_9629__$1 = temp__4092__auto___9628;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7965_9629__$1))
{var c__5632__auto___9630 = cljs.core.chunk_first.call(null,seq__7965_9629__$1);{
var G__9631 = cljs.core.chunk_rest.call(null,seq__7965_9629__$1);
var G__9632 = c__5632__auto___9630;
var G__9633 = cljs.core.count.call(null,c__5632__auto___9630);
var G__9634 = 0;
seq__7965_9619 = G__9631;
chunk__7966_9620 = G__9632;
count__7967_9621 = G__9633;
i__7968_9622 = G__9634;
continue;
}
} else
{var arg__6549__auto___9635 = cljs.core.first.call(null,seq__7965_9629__$1);a__6548__auto__.push(arg__6549__auto___9635);
{
var G__9636 = cljs.core.next.call(null,seq__7965_9629__$1);
var G__9637 = null;
var G__9638 = 0;
var G__9639 = 0;
seq__7965_9619 = G__9636;
chunk__7966_9620 = G__9637;
count__7967_9621 = G__9638;
i__7968_9622 = G__9639;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.input.apply(null,a__6548__auto__);
};
var input = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return input__delegate.call(this,args__6547__auto__);};
input.cljs$lang$maxFixedArity = 0;
input.cljs$lang$applyTo = (function (arglist__9640){
var args__6547__auto__ = cljs.core.seq(arglist__9640);
return input__delegate(args__6547__auto__);
});
input.cljs$core$IFn$_invoke$arity$variadic = input__delegate;
return input;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.ins = (function() { 
var ins__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__7973_9641 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__7974_9642 = null;var count__7975_9643 = 0;var i__7976_9644 = 0;while(true){
if((i__7976_9644 < count__7975_9643))
{var arg__6549__auto___9645 = cljs.core._nth.call(null,chunk__7974_9642,i__7976_9644);a__6548__auto__.push(arg__6549__auto___9645);
{
var G__9646 = seq__7973_9641;
var G__9647 = chunk__7974_9642;
var G__9648 = count__7975_9643;
var G__9649 = (i__7976_9644 + 1);
seq__7973_9641 = G__9646;
chunk__7974_9642 = G__9647;
count__7975_9643 = G__9648;
i__7976_9644 = G__9649;
continue;
}
} else
{var temp__4092__auto___9650 = cljs.core.seq.call(null,seq__7973_9641);if(temp__4092__auto___9650)
{var seq__7973_9651__$1 = temp__4092__auto___9650;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7973_9651__$1))
{var c__5632__auto___9652 = cljs.core.chunk_first.call(null,seq__7973_9651__$1);{
var G__9653 = cljs.core.chunk_rest.call(null,seq__7973_9651__$1);
var G__9654 = c__5632__auto___9652;
var G__9655 = cljs.core.count.call(null,c__5632__auto___9652);
var G__9656 = 0;
seq__7973_9641 = G__9653;
chunk__7974_9642 = G__9654;
count__7975_9643 = G__9655;
i__7976_9644 = G__9656;
continue;
}
} else
{var arg__6549__auto___9657 = cljs.core.first.call(null,seq__7973_9651__$1);a__6548__auto__.push(arg__6549__auto___9657);
{
var G__9658 = cljs.core.next.call(null,seq__7973_9651__$1);
var G__9659 = null;
var G__9660 = 0;
var G__9661 = 0;
seq__7973_9641 = G__9658;
chunk__7974_9642 = G__9659;
count__7975_9643 = G__9660;
i__7976_9644 = G__9661;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.ins.apply(null,a__6548__auto__);
};
var ins = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ins__delegate.call(this,args__6547__auto__);};
ins.cljs$lang$maxFixedArity = 0;
ins.cljs$lang$applyTo = (function (arglist__9662){
var args__6547__auto__ = cljs.core.seq(arglist__9662);
return ins__delegate(args__6547__auto__);
});
ins.cljs$core$IFn$_invoke$arity$variadic = ins__delegate;
return ins;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.kbd = (function() { 
var kbd__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__7981_9663 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__7982_9664 = null;var count__7983_9665 = 0;var i__7984_9666 = 0;while(true){
if((i__7984_9666 < count__7983_9665))
{var arg__6549__auto___9667 = cljs.core._nth.call(null,chunk__7982_9664,i__7984_9666);a__6548__auto__.push(arg__6549__auto___9667);
{
var G__9668 = seq__7981_9663;
var G__9669 = chunk__7982_9664;
var G__9670 = count__7983_9665;
var G__9671 = (i__7984_9666 + 1);
seq__7981_9663 = G__9668;
chunk__7982_9664 = G__9669;
count__7983_9665 = G__9670;
i__7984_9666 = G__9671;
continue;
}
} else
{var temp__4092__auto___9672 = cljs.core.seq.call(null,seq__7981_9663);if(temp__4092__auto___9672)
{var seq__7981_9673__$1 = temp__4092__auto___9672;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7981_9673__$1))
{var c__5632__auto___9674 = cljs.core.chunk_first.call(null,seq__7981_9673__$1);{
var G__9675 = cljs.core.chunk_rest.call(null,seq__7981_9673__$1);
var G__9676 = c__5632__auto___9674;
var G__9677 = cljs.core.count.call(null,c__5632__auto___9674);
var G__9678 = 0;
seq__7981_9663 = G__9675;
chunk__7982_9664 = G__9676;
count__7983_9665 = G__9677;
i__7984_9666 = G__9678;
continue;
}
} else
{var arg__6549__auto___9679 = cljs.core.first.call(null,seq__7981_9673__$1);a__6548__auto__.push(arg__6549__auto___9679);
{
var G__9680 = cljs.core.next.call(null,seq__7981_9673__$1);
var G__9681 = null;
var G__9682 = 0;
var G__9683 = 0;
seq__7981_9663 = G__9680;
chunk__7982_9664 = G__9681;
count__7983_9665 = G__9682;
i__7984_9666 = G__9683;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.kbd.apply(null,a__6548__auto__);
};
var kbd = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return kbd__delegate.call(this,args__6547__auto__);};
kbd.cljs$lang$maxFixedArity = 0;
kbd.cljs$lang$applyTo = (function (arglist__9684){
var args__6547__auto__ = cljs.core.seq(arglist__9684);
return kbd__delegate(args__6547__auto__);
});
kbd.cljs$core$IFn$_invoke$arity$variadic = kbd__delegate;
return kbd;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.keygen = (function() { 
var keygen__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__7989_9685 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__7990_9686 = null;var count__7991_9687 = 0;var i__7992_9688 = 0;while(true){
if((i__7992_9688 < count__7991_9687))
{var arg__6549__auto___9689 = cljs.core._nth.call(null,chunk__7990_9686,i__7992_9688);a__6548__auto__.push(arg__6549__auto___9689);
{
var G__9690 = seq__7989_9685;
var G__9691 = chunk__7990_9686;
var G__9692 = count__7991_9687;
var G__9693 = (i__7992_9688 + 1);
seq__7989_9685 = G__9690;
chunk__7990_9686 = G__9691;
count__7991_9687 = G__9692;
i__7992_9688 = G__9693;
continue;
}
} else
{var temp__4092__auto___9694 = cljs.core.seq.call(null,seq__7989_9685);if(temp__4092__auto___9694)
{var seq__7989_9695__$1 = temp__4092__auto___9694;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7989_9695__$1))
{var c__5632__auto___9696 = cljs.core.chunk_first.call(null,seq__7989_9695__$1);{
var G__9697 = cljs.core.chunk_rest.call(null,seq__7989_9695__$1);
var G__9698 = c__5632__auto___9696;
var G__9699 = cljs.core.count.call(null,c__5632__auto___9696);
var G__9700 = 0;
seq__7989_9685 = G__9697;
chunk__7990_9686 = G__9698;
count__7991_9687 = G__9699;
i__7992_9688 = G__9700;
continue;
}
} else
{var arg__6549__auto___9701 = cljs.core.first.call(null,seq__7989_9695__$1);a__6548__auto__.push(arg__6549__auto___9701);
{
var G__9702 = cljs.core.next.call(null,seq__7989_9695__$1);
var G__9703 = null;
var G__9704 = 0;
var G__9705 = 0;
seq__7989_9685 = G__9702;
chunk__7990_9686 = G__9703;
count__7991_9687 = G__9704;
i__7992_9688 = G__9705;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.keygen.apply(null,a__6548__auto__);
};
var keygen = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return keygen__delegate.call(this,args__6547__auto__);};
keygen.cljs$lang$maxFixedArity = 0;
keygen.cljs$lang$applyTo = (function (arglist__9706){
var args__6547__auto__ = cljs.core.seq(arglist__9706);
return keygen__delegate(args__6547__auto__);
});
keygen.cljs$core$IFn$_invoke$arity$variadic = keygen__delegate;
return keygen;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.label = (function() { 
var label__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__7997_9707 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__7998_9708 = null;var count__7999_9709 = 0;var i__8000_9710 = 0;while(true){
if((i__8000_9710 < count__7999_9709))
{var arg__6549__auto___9711 = cljs.core._nth.call(null,chunk__7998_9708,i__8000_9710);a__6548__auto__.push(arg__6549__auto___9711);
{
var G__9712 = seq__7997_9707;
var G__9713 = chunk__7998_9708;
var G__9714 = count__7999_9709;
var G__9715 = (i__8000_9710 + 1);
seq__7997_9707 = G__9712;
chunk__7998_9708 = G__9713;
count__7999_9709 = G__9714;
i__8000_9710 = G__9715;
continue;
}
} else
{var temp__4092__auto___9716 = cljs.core.seq.call(null,seq__7997_9707);if(temp__4092__auto___9716)
{var seq__7997_9717__$1 = temp__4092__auto___9716;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7997_9717__$1))
{var c__5632__auto___9718 = cljs.core.chunk_first.call(null,seq__7997_9717__$1);{
var G__9719 = cljs.core.chunk_rest.call(null,seq__7997_9717__$1);
var G__9720 = c__5632__auto___9718;
var G__9721 = cljs.core.count.call(null,c__5632__auto___9718);
var G__9722 = 0;
seq__7997_9707 = G__9719;
chunk__7998_9708 = G__9720;
count__7999_9709 = G__9721;
i__8000_9710 = G__9722;
continue;
}
} else
{var arg__6549__auto___9723 = cljs.core.first.call(null,seq__7997_9717__$1);a__6548__auto__.push(arg__6549__auto___9723);
{
var G__9724 = cljs.core.next.call(null,seq__7997_9717__$1);
var G__9725 = null;
var G__9726 = 0;
var G__9727 = 0;
seq__7997_9707 = G__9724;
chunk__7998_9708 = G__9725;
count__7999_9709 = G__9726;
i__8000_9710 = G__9727;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.label.apply(null,a__6548__auto__);
};
var label = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return label__delegate.call(this,args__6547__auto__);};
label.cljs$lang$maxFixedArity = 0;
label.cljs$lang$applyTo = (function (arglist__9728){
var args__6547__auto__ = cljs.core.seq(arglist__9728);
return label__delegate(args__6547__auto__);
});
label.cljs$core$IFn$_invoke$arity$variadic = label__delegate;
return label;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.legend = (function() { 
var legend__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__8005_9729 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__8006_9730 = null;var count__8007_9731 = 0;var i__8008_9732 = 0;while(true){
if((i__8008_9732 < count__8007_9731))
{var arg__6549__auto___9733 = cljs.core._nth.call(null,chunk__8006_9730,i__8008_9732);a__6548__auto__.push(arg__6549__auto___9733);
{
var G__9734 = seq__8005_9729;
var G__9735 = chunk__8006_9730;
var G__9736 = count__8007_9731;
var G__9737 = (i__8008_9732 + 1);
seq__8005_9729 = G__9734;
chunk__8006_9730 = G__9735;
count__8007_9731 = G__9736;
i__8008_9732 = G__9737;
continue;
}
} else
{var temp__4092__auto___9738 = cljs.core.seq.call(null,seq__8005_9729);if(temp__4092__auto___9738)
{var seq__8005_9739__$1 = temp__4092__auto___9738;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8005_9739__$1))
{var c__5632__auto___9740 = cljs.core.chunk_first.call(null,seq__8005_9739__$1);{
var G__9741 = cljs.core.chunk_rest.call(null,seq__8005_9739__$1);
var G__9742 = c__5632__auto___9740;
var G__9743 = cljs.core.count.call(null,c__5632__auto___9740);
var G__9744 = 0;
seq__8005_9729 = G__9741;
chunk__8006_9730 = G__9742;
count__8007_9731 = G__9743;
i__8008_9732 = G__9744;
continue;
}
} else
{var arg__6549__auto___9745 = cljs.core.first.call(null,seq__8005_9739__$1);a__6548__auto__.push(arg__6549__auto___9745);
{
var G__9746 = cljs.core.next.call(null,seq__8005_9739__$1);
var G__9747 = null;
var G__9748 = 0;
var G__9749 = 0;
seq__8005_9729 = G__9746;
chunk__8006_9730 = G__9747;
count__8007_9731 = G__9748;
i__8008_9732 = G__9749;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.legend.apply(null,a__6548__auto__);
};
var legend = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return legend__delegate.call(this,args__6547__auto__);};
legend.cljs$lang$maxFixedArity = 0;
legend.cljs$lang$applyTo = (function (arglist__9750){
var args__6547__auto__ = cljs.core.seq(arglist__9750);
return legend__delegate(args__6547__auto__);
});
legend.cljs$core$IFn$_invoke$arity$variadic = legend__delegate;
return legend;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.li = (function() { 
var li__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__8013_9751 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__8014_9752 = null;var count__8015_9753 = 0;var i__8016_9754 = 0;while(true){
if((i__8016_9754 < count__8015_9753))
{var arg__6549__auto___9755 = cljs.core._nth.call(null,chunk__8014_9752,i__8016_9754);a__6548__auto__.push(arg__6549__auto___9755);
{
var G__9756 = seq__8013_9751;
var G__9757 = chunk__8014_9752;
var G__9758 = count__8015_9753;
var G__9759 = (i__8016_9754 + 1);
seq__8013_9751 = G__9756;
chunk__8014_9752 = G__9757;
count__8015_9753 = G__9758;
i__8016_9754 = G__9759;
continue;
}
} else
{var temp__4092__auto___9760 = cljs.core.seq.call(null,seq__8013_9751);if(temp__4092__auto___9760)
{var seq__8013_9761__$1 = temp__4092__auto___9760;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8013_9761__$1))
{var c__5632__auto___9762 = cljs.core.chunk_first.call(null,seq__8013_9761__$1);{
var G__9763 = cljs.core.chunk_rest.call(null,seq__8013_9761__$1);
var G__9764 = c__5632__auto___9762;
var G__9765 = cljs.core.count.call(null,c__5632__auto___9762);
var G__9766 = 0;
seq__8013_9751 = G__9763;
chunk__8014_9752 = G__9764;
count__8015_9753 = G__9765;
i__8016_9754 = G__9766;
continue;
}
} else
{var arg__6549__auto___9767 = cljs.core.first.call(null,seq__8013_9761__$1);a__6548__auto__.push(arg__6549__auto___9767);
{
var G__9768 = cljs.core.next.call(null,seq__8013_9761__$1);
var G__9769 = null;
var G__9770 = 0;
var G__9771 = 0;
seq__8013_9751 = G__9768;
chunk__8014_9752 = G__9769;
count__8015_9753 = G__9770;
i__8016_9754 = G__9771;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.li.apply(null,a__6548__auto__);
};
var li = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return li__delegate.call(this,args__6547__auto__);};
li.cljs$lang$maxFixedArity = 0;
li.cljs$lang$applyTo = (function (arglist__9772){
var args__6547__auto__ = cljs.core.seq(arglist__9772);
return li__delegate(args__6547__auto__);
});
li.cljs$core$IFn$_invoke$arity$variadic = li__delegate;
return li;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.link = (function() { 
var link__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__8021_9773 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__8022_9774 = null;var count__8023_9775 = 0;var i__8024_9776 = 0;while(true){
if((i__8024_9776 < count__8023_9775))
{var arg__6549__auto___9777 = cljs.core._nth.call(null,chunk__8022_9774,i__8024_9776);a__6548__auto__.push(arg__6549__auto___9777);
{
var G__9778 = seq__8021_9773;
var G__9779 = chunk__8022_9774;
var G__9780 = count__8023_9775;
var G__9781 = (i__8024_9776 + 1);
seq__8021_9773 = G__9778;
chunk__8022_9774 = G__9779;
count__8023_9775 = G__9780;
i__8024_9776 = G__9781;
continue;
}
} else
{var temp__4092__auto___9782 = cljs.core.seq.call(null,seq__8021_9773);if(temp__4092__auto___9782)
{var seq__8021_9783__$1 = temp__4092__auto___9782;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8021_9783__$1))
{var c__5632__auto___9784 = cljs.core.chunk_first.call(null,seq__8021_9783__$1);{
var G__9785 = cljs.core.chunk_rest.call(null,seq__8021_9783__$1);
var G__9786 = c__5632__auto___9784;
var G__9787 = cljs.core.count.call(null,c__5632__auto___9784);
var G__9788 = 0;
seq__8021_9773 = G__9785;
chunk__8022_9774 = G__9786;
count__8023_9775 = G__9787;
i__8024_9776 = G__9788;
continue;
}
} else
{var arg__6549__auto___9789 = cljs.core.first.call(null,seq__8021_9783__$1);a__6548__auto__.push(arg__6549__auto___9789);
{
var G__9790 = cljs.core.next.call(null,seq__8021_9783__$1);
var G__9791 = null;
var G__9792 = 0;
var G__9793 = 0;
seq__8021_9773 = G__9790;
chunk__8022_9774 = G__9791;
count__8023_9775 = G__9792;
i__8024_9776 = G__9793;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.link.apply(null,a__6548__auto__);
};
var link = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return link__delegate.call(this,args__6547__auto__);};
link.cljs$lang$maxFixedArity = 0;
link.cljs$lang$applyTo = (function (arglist__9794){
var args__6547__auto__ = cljs.core.seq(arglist__9794);
return link__delegate(args__6547__auto__);
});
link.cljs$core$IFn$_invoke$arity$variadic = link__delegate;
return link;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.main = (function() { 
var main__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__8029_9795 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__8030_9796 = null;var count__8031_9797 = 0;var i__8032_9798 = 0;while(true){
if((i__8032_9798 < count__8031_9797))
{var arg__6549__auto___9799 = cljs.core._nth.call(null,chunk__8030_9796,i__8032_9798);a__6548__auto__.push(arg__6549__auto___9799);
{
var G__9800 = seq__8029_9795;
var G__9801 = chunk__8030_9796;
var G__9802 = count__8031_9797;
var G__9803 = (i__8032_9798 + 1);
seq__8029_9795 = G__9800;
chunk__8030_9796 = G__9801;
count__8031_9797 = G__9802;
i__8032_9798 = G__9803;
continue;
}
} else
{var temp__4092__auto___9804 = cljs.core.seq.call(null,seq__8029_9795);if(temp__4092__auto___9804)
{var seq__8029_9805__$1 = temp__4092__auto___9804;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8029_9805__$1))
{var c__5632__auto___9806 = cljs.core.chunk_first.call(null,seq__8029_9805__$1);{
var G__9807 = cljs.core.chunk_rest.call(null,seq__8029_9805__$1);
var G__9808 = c__5632__auto___9806;
var G__9809 = cljs.core.count.call(null,c__5632__auto___9806);
var G__9810 = 0;
seq__8029_9795 = G__9807;
chunk__8030_9796 = G__9808;
count__8031_9797 = G__9809;
i__8032_9798 = G__9810;
continue;
}
} else
{var arg__6549__auto___9811 = cljs.core.first.call(null,seq__8029_9805__$1);a__6548__auto__.push(arg__6549__auto___9811);
{
var G__9812 = cljs.core.next.call(null,seq__8029_9805__$1);
var G__9813 = null;
var G__9814 = 0;
var G__9815 = 0;
seq__8029_9795 = G__9812;
chunk__8030_9796 = G__9813;
count__8031_9797 = G__9814;
i__8032_9798 = G__9815;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.main.apply(null,a__6548__auto__);
};
var main = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return main__delegate.call(this,args__6547__auto__);};
main.cljs$lang$maxFixedArity = 0;
main.cljs$lang$applyTo = (function (arglist__9816){
var args__6547__auto__ = cljs.core.seq(arglist__9816);
return main__delegate(args__6547__auto__);
});
main.cljs$core$IFn$_invoke$arity$variadic = main__delegate;
return main;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.map = (function() { 
var map__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__8037_9817 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__8038_9818 = null;var count__8039_9819 = 0;var i__8040_9820 = 0;while(true){
if((i__8040_9820 < count__8039_9819))
{var arg__6549__auto___9821 = cljs.core._nth.call(null,chunk__8038_9818,i__8040_9820);a__6548__auto__.push(arg__6549__auto___9821);
{
var G__9822 = seq__8037_9817;
var G__9823 = chunk__8038_9818;
var G__9824 = count__8039_9819;
var G__9825 = (i__8040_9820 + 1);
seq__8037_9817 = G__9822;
chunk__8038_9818 = G__9823;
count__8039_9819 = G__9824;
i__8040_9820 = G__9825;
continue;
}
} else
{var temp__4092__auto___9826 = cljs.core.seq.call(null,seq__8037_9817);if(temp__4092__auto___9826)
{var seq__8037_9827__$1 = temp__4092__auto___9826;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8037_9827__$1))
{var c__5632__auto___9828 = cljs.core.chunk_first.call(null,seq__8037_9827__$1);{
var G__9829 = cljs.core.chunk_rest.call(null,seq__8037_9827__$1);
var G__9830 = c__5632__auto___9828;
var G__9831 = cljs.core.count.call(null,c__5632__auto___9828);
var G__9832 = 0;
seq__8037_9817 = G__9829;
chunk__8038_9818 = G__9830;
count__8039_9819 = G__9831;
i__8040_9820 = G__9832;
continue;
}
} else
{var arg__6549__auto___9833 = cljs.core.first.call(null,seq__8037_9827__$1);a__6548__auto__.push(arg__6549__auto___9833);
{
var G__9834 = cljs.core.next.call(null,seq__8037_9827__$1);
var G__9835 = null;
var G__9836 = 0;
var G__9837 = 0;
seq__8037_9817 = G__9834;
chunk__8038_9818 = G__9835;
count__8039_9819 = G__9836;
i__8040_9820 = G__9837;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.map.apply(null,a__6548__auto__);
};
var map = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return map__delegate.call(this,args__6547__auto__);};
map.cljs$lang$maxFixedArity = 0;
map.cljs$lang$applyTo = (function (arglist__9838){
var args__6547__auto__ = cljs.core.seq(arglist__9838);
return map__delegate(args__6547__auto__);
});
map.cljs$core$IFn$_invoke$arity$variadic = map__delegate;
return map;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.mark = (function() { 
var mark__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__8045_9839 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__8046_9840 = null;var count__8047_9841 = 0;var i__8048_9842 = 0;while(true){
if((i__8048_9842 < count__8047_9841))
{var arg__6549__auto___9843 = cljs.core._nth.call(null,chunk__8046_9840,i__8048_9842);a__6548__auto__.push(arg__6549__auto___9843);
{
var G__9844 = seq__8045_9839;
var G__9845 = chunk__8046_9840;
var G__9846 = count__8047_9841;
var G__9847 = (i__8048_9842 + 1);
seq__8045_9839 = G__9844;
chunk__8046_9840 = G__9845;
count__8047_9841 = G__9846;
i__8048_9842 = G__9847;
continue;
}
} else
{var temp__4092__auto___9848 = cljs.core.seq.call(null,seq__8045_9839);if(temp__4092__auto___9848)
{var seq__8045_9849__$1 = temp__4092__auto___9848;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8045_9849__$1))
{var c__5632__auto___9850 = cljs.core.chunk_first.call(null,seq__8045_9849__$1);{
var G__9851 = cljs.core.chunk_rest.call(null,seq__8045_9849__$1);
var G__9852 = c__5632__auto___9850;
var G__9853 = cljs.core.count.call(null,c__5632__auto___9850);
var G__9854 = 0;
seq__8045_9839 = G__9851;
chunk__8046_9840 = G__9852;
count__8047_9841 = G__9853;
i__8048_9842 = G__9854;
continue;
}
} else
{var arg__6549__auto___9855 = cljs.core.first.call(null,seq__8045_9849__$1);a__6548__auto__.push(arg__6549__auto___9855);
{
var G__9856 = cljs.core.next.call(null,seq__8045_9849__$1);
var G__9857 = null;
var G__9858 = 0;
var G__9859 = 0;
seq__8045_9839 = G__9856;
chunk__8046_9840 = G__9857;
count__8047_9841 = G__9858;
i__8048_9842 = G__9859;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.mark.apply(null,a__6548__auto__);
};
var mark = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return mark__delegate.call(this,args__6547__auto__);};
mark.cljs$lang$maxFixedArity = 0;
mark.cljs$lang$applyTo = (function (arglist__9860){
var args__6547__auto__ = cljs.core.seq(arglist__9860);
return mark__delegate(args__6547__auto__);
});
mark.cljs$core$IFn$_invoke$arity$variadic = mark__delegate;
return mark;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.menu = (function() { 
var menu__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__8053_9861 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__8054_9862 = null;var count__8055_9863 = 0;var i__8056_9864 = 0;while(true){
if((i__8056_9864 < count__8055_9863))
{var arg__6549__auto___9865 = cljs.core._nth.call(null,chunk__8054_9862,i__8056_9864);a__6548__auto__.push(arg__6549__auto___9865);
{
var G__9866 = seq__8053_9861;
var G__9867 = chunk__8054_9862;
var G__9868 = count__8055_9863;
var G__9869 = (i__8056_9864 + 1);
seq__8053_9861 = G__9866;
chunk__8054_9862 = G__9867;
count__8055_9863 = G__9868;
i__8056_9864 = G__9869;
continue;
}
} else
{var temp__4092__auto___9870 = cljs.core.seq.call(null,seq__8053_9861);if(temp__4092__auto___9870)
{var seq__8053_9871__$1 = temp__4092__auto___9870;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8053_9871__$1))
{var c__5632__auto___9872 = cljs.core.chunk_first.call(null,seq__8053_9871__$1);{
var G__9873 = cljs.core.chunk_rest.call(null,seq__8053_9871__$1);
var G__9874 = c__5632__auto___9872;
var G__9875 = cljs.core.count.call(null,c__5632__auto___9872);
var G__9876 = 0;
seq__8053_9861 = G__9873;
chunk__8054_9862 = G__9874;
count__8055_9863 = G__9875;
i__8056_9864 = G__9876;
continue;
}
} else
{var arg__6549__auto___9877 = cljs.core.first.call(null,seq__8053_9871__$1);a__6548__auto__.push(arg__6549__auto___9877);
{
var G__9878 = cljs.core.next.call(null,seq__8053_9871__$1);
var G__9879 = null;
var G__9880 = 0;
var G__9881 = 0;
seq__8053_9861 = G__9878;
chunk__8054_9862 = G__9879;
count__8055_9863 = G__9880;
i__8056_9864 = G__9881;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.menu.apply(null,a__6548__auto__);
};
var menu = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return menu__delegate.call(this,args__6547__auto__);};
menu.cljs$lang$maxFixedArity = 0;
menu.cljs$lang$applyTo = (function (arglist__9882){
var args__6547__auto__ = cljs.core.seq(arglist__9882);
return menu__delegate(args__6547__auto__);
});
menu.cljs$core$IFn$_invoke$arity$variadic = menu__delegate;
return menu;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.menuitem = (function() { 
var menuitem__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__8061_9883 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__8062_9884 = null;var count__8063_9885 = 0;var i__8064_9886 = 0;while(true){
if((i__8064_9886 < count__8063_9885))
{var arg__6549__auto___9887 = cljs.core._nth.call(null,chunk__8062_9884,i__8064_9886);a__6548__auto__.push(arg__6549__auto___9887);
{
var G__9888 = seq__8061_9883;
var G__9889 = chunk__8062_9884;
var G__9890 = count__8063_9885;
var G__9891 = (i__8064_9886 + 1);
seq__8061_9883 = G__9888;
chunk__8062_9884 = G__9889;
count__8063_9885 = G__9890;
i__8064_9886 = G__9891;
continue;
}
} else
{var temp__4092__auto___9892 = cljs.core.seq.call(null,seq__8061_9883);if(temp__4092__auto___9892)
{var seq__8061_9893__$1 = temp__4092__auto___9892;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8061_9893__$1))
{var c__5632__auto___9894 = cljs.core.chunk_first.call(null,seq__8061_9893__$1);{
var G__9895 = cljs.core.chunk_rest.call(null,seq__8061_9893__$1);
var G__9896 = c__5632__auto___9894;
var G__9897 = cljs.core.count.call(null,c__5632__auto___9894);
var G__9898 = 0;
seq__8061_9883 = G__9895;
chunk__8062_9884 = G__9896;
count__8063_9885 = G__9897;
i__8064_9886 = G__9898;
continue;
}
} else
{var arg__6549__auto___9899 = cljs.core.first.call(null,seq__8061_9893__$1);a__6548__auto__.push(arg__6549__auto___9899);
{
var G__9900 = cljs.core.next.call(null,seq__8061_9893__$1);
var G__9901 = null;
var G__9902 = 0;
var G__9903 = 0;
seq__8061_9883 = G__9900;
chunk__8062_9884 = G__9901;
count__8063_9885 = G__9902;
i__8064_9886 = G__9903;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.menuitem.apply(null,a__6548__auto__);
};
var menuitem = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return menuitem__delegate.call(this,args__6547__auto__);};
menuitem.cljs$lang$maxFixedArity = 0;
menuitem.cljs$lang$applyTo = (function (arglist__9904){
var args__6547__auto__ = cljs.core.seq(arglist__9904);
return menuitem__delegate(args__6547__auto__);
});
menuitem.cljs$core$IFn$_invoke$arity$variadic = menuitem__delegate;
return menuitem;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.meta = (function() { 
var meta__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__8069_9905 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__8070_9906 = null;var count__8071_9907 = 0;var i__8072_9908 = 0;while(true){
if((i__8072_9908 < count__8071_9907))
{var arg__6549__auto___9909 = cljs.core._nth.call(null,chunk__8070_9906,i__8072_9908);a__6548__auto__.push(arg__6549__auto___9909);
{
var G__9910 = seq__8069_9905;
var G__9911 = chunk__8070_9906;
var G__9912 = count__8071_9907;
var G__9913 = (i__8072_9908 + 1);
seq__8069_9905 = G__9910;
chunk__8070_9906 = G__9911;
count__8071_9907 = G__9912;
i__8072_9908 = G__9913;
continue;
}
} else
{var temp__4092__auto___9914 = cljs.core.seq.call(null,seq__8069_9905);if(temp__4092__auto___9914)
{var seq__8069_9915__$1 = temp__4092__auto___9914;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8069_9915__$1))
{var c__5632__auto___9916 = cljs.core.chunk_first.call(null,seq__8069_9915__$1);{
var G__9917 = cljs.core.chunk_rest.call(null,seq__8069_9915__$1);
var G__9918 = c__5632__auto___9916;
var G__9919 = cljs.core.count.call(null,c__5632__auto___9916);
var G__9920 = 0;
seq__8069_9905 = G__9917;
chunk__8070_9906 = G__9918;
count__8071_9907 = G__9919;
i__8072_9908 = G__9920;
continue;
}
} else
{var arg__6549__auto___9921 = cljs.core.first.call(null,seq__8069_9915__$1);a__6548__auto__.push(arg__6549__auto___9921);
{
var G__9922 = cljs.core.next.call(null,seq__8069_9915__$1);
var G__9923 = null;
var G__9924 = 0;
var G__9925 = 0;
seq__8069_9905 = G__9922;
chunk__8070_9906 = G__9923;
count__8071_9907 = G__9924;
i__8072_9908 = G__9925;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.meta.apply(null,a__6548__auto__);
};
var meta = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return meta__delegate.call(this,args__6547__auto__);};
meta.cljs$lang$maxFixedArity = 0;
meta.cljs$lang$applyTo = (function (arglist__9926){
var args__6547__auto__ = cljs.core.seq(arglist__9926);
return meta__delegate(args__6547__auto__);
});
meta.cljs$core$IFn$_invoke$arity$variadic = meta__delegate;
return meta;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.meter = (function() { 
var meter__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__8077_9927 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__8078_9928 = null;var count__8079_9929 = 0;var i__8080_9930 = 0;while(true){
if((i__8080_9930 < count__8079_9929))
{var arg__6549__auto___9931 = cljs.core._nth.call(null,chunk__8078_9928,i__8080_9930);a__6548__auto__.push(arg__6549__auto___9931);
{
var G__9932 = seq__8077_9927;
var G__9933 = chunk__8078_9928;
var G__9934 = count__8079_9929;
var G__9935 = (i__8080_9930 + 1);
seq__8077_9927 = G__9932;
chunk__8078_9928 = G__9933;
count__8079_9929 = G__9934;
i__8080_9930 = G__9935;
continue;
}
} else
{var temp__4092__auto___9936 = cljs.core.seq.call(null,seq__8077_9927);if(temp__4092__auto___9936)
{var seq__8077_9937__$1 = temp__4092__auto___9936;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8077_9937__$1))
{var c__5632__auto___9938 = cljs.core.chunk_first.call(null,seq__8077_9937__$1);{
var G__9939 = cljs.core.chunk_rest.call(null,seq__8077_9937__$1);
var G__9940 = c__5632__auto___9938;
var G__9941 = cljs.core.count.call(null,c__5632__auto___9938);
var G__9942 = 0;
seq__8077_9927 = G__9939;
chunk__8078_9928 = G__9940;
count__8079_9929 = G__9941;
i__8080_9930 = G__9942;
continue;
}
} else
{var arg__6549__auto___9943 = cljs.core.first.call(null,seq__8077_9937__$1);a__6548__auto__.push(arg__6549__auto___9943);
{
var G__9944 = cljs.core.next.call(null,seq__8077_9937__$1);
var G__9945 = null;
var G__9946 = 0;
var G__9947 = 0;
seq__8077_9927 = G__9944;
chunk__8078_9928 = G__9945;
count__8079_9929 = G__9946;
i__8080_9930 = G__9947;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.meter.apply(null,a__6548__auto__);
};
var meter = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return meter__delegate.call(this,args__6547__auto__);};
meter.cljs$lang$maxFixedArity = 0;
meter.cljs$lang$applyTo = (function (arglist__9948){
var args__6547__auto__ = cljs.core.seq(arglist__9948);
return meter__delegate(args__6547__auto__);
});
meter.cljs$core$IFn$_invoke$arity$variadic = meter__delegate;
return meter;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.nav = (function() { 
var nav__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__8085_9949 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__8086_9950 = null;var count__8087_9951 = 0;var i__8088_9952 = 0;while(true){
if((i__8088_9952 < count__8087_9951))
{var arg__6549__auto___9953 = cljs.core._nth.call(null,chunk__8086_9950,i__8088_9952);a__6548__auto__.push(arg__6549__auto___9953);
{
var G__9954 = seq__8085_9949;
var G__9955 = chunk__8086_9950;
var G__9956 = count__8087_9951;
var G__9957 = (i__8088_9952 + 1);
seq__8085_9949 = G__9954;
chunk__8086_9950 = G__9955;
count__8087_9951 = G__9956;
i__8088_9952 = G__9957;
continue;
}
} else
{var temp__4092__auto___9958 = cljs.core.seq.call(null,seq__8085_9949);if(temp__4092__auto___9958)
{var seq__8085_9959__$1 = temp__4092__auto___9958;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8085_9959__$1))
{var c__5632__auto___9960 = cljs.core.chunk_first.call(null,seq__8085_9959__$1);{
var G__9961 = cljs.core.chunk_rest.call(null,seq__8085_9959__$1);
var G__9962 = c__5632__auto___9960;
var G__9963 = cljs.core.count.call(null,c__5632__auto___9960);
var G__9964 = 0;
seq__8085_9949 = G__9961;
chunk__8086_9950 = G__9962;
count__8087_9951 = G__9963;
i__8088_9952 = G__9964;
continue;
}
} else
{var arg__6549__auto___9965 = cljs.core.first.call(null,seq__8085_9959__$1);a__6548__auto__.push(arg__6549__auto___9965);
{
var G__9966 = cljs.core.next.call(null,seq__8085_9959__$1);
var G__9967 = null;
var G__9968 = 0;
var G__9969 = 0;
seq__8085_9949 = G__9966;
chunk__8086_9950 = G__9967;
count__8087_9951 = G__9968;
i__8088_9952 = G__9969;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.nav.apply(null,a__6548__auto__);
};
var nav = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return nav__delegate.call(this,args__6547__auto__);};
nav.cljs$lang$maxFixedArity = 0;
nav.cljs$lang$applyTo = (function (arglist__9970){
var args__6547__auto__ = cljs.core.seq(arglist__9970);
return nav__delegate(args__6547__auto__);
});
nav.cljs$core$IFn$_invoke$arity$variadic = nav__delegate;
return nav;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.noscript = (function() { 
var noscript__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__8093_9971 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__8094_9972 = null;var count__8095_9973 = 0;var i__8096_9974 = 0;while(true){
if((i__8096_9974 < count__8095_9973))
{var arg__6549__auto___9975 = cljs.core._nth.call(null,chunk__8094_9972,i__8096_9974);a__6548__auto__.push(arg__6549__auto___9975);
{
var G__9976 = seq__8093_9971;
var G__9977 = chunk__8094_9972;
var G__9978 = count__8095_9973;
var G__9979 = (i__8096_9974 + 1);
seq__8093_9971 = G__9976;
chunk__8094_9972 = G__9977;
count__8095_9973 = G__9978;
i__8096_9974 = G__9979;
continue;
}
} else
{var temp__4092__auto___9980 = cljs.core.seq.call(null,seq__8093_9971);if(temp__4092__auto___9980)
{var seq__8093_9981__$1 = temp__4092__auto___9980;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8093_9981__$1))
{var c__5632__auto___9982 = cljs.core.chunk_first.call(null,seq__8093_9981__$1);{
var G__9983 = cljs.core.chunk_rest.call(null,seq__8093_9981__$1);
var G__9984 = c__5632__auto___9982;
var G__9985 = cljs.core.count.call(null,c__5632__auto___9982);
var G__9986 = 0;
seq__8093_9971 = G__9983;
chunk__8094_9972 = G__9984;
count__8095_9973 = G__9985;
i__8096_9974 = G__9986;
continue;
}
} else
{var arg__6549__auto___9987 = cljs.core.first.call(null,seq__8093_9981__$1);a__6548__auto__.push(arg__6549__auto___9987);
{
var G__9988 = cljs.core.next.call(null,seq__8093_9981__$1);
var G__9989 = null;
var G__9990 = 0;
var G__9991 = 0;
seq__8093_9971 = G__9988;
chunk__8094_9972 = G__9989;
count__8095_9973 = G__9990;
i__8096_9974 = G__9991;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.noscript.apply(null,a__6548__auto__);
};
var noscript = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return noscript__delegate.call(this,args__6547__auto__);};
noscript.cljs$lang$maxFixedArity = 0;
noscript.cljs$lang$applyTo = (function (arglist__9992){
var args__6547__auto__ = cljs.core.seq(arglist__9992);
return noscript__delegate(args__6547__auto__);
});
noscript.cljs$core$IFn$_invoke$arity$variadic = noscript__delegate;
return noscript;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.object = (function() { 
var object__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__8101_9993 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__8102_9994 = null;var count__8103_9995 = 0;var i__8104_9996 = 0;while(true){
if((i__8104_9996 < count__8103_9995))
{var arg__6549__auto___9997 = cljs.core._nth.call(null,chunk__8102_9994,i__8104_9996);a__6548__auto__.push(arg__6549__auto___9997);
{
var G__9998 = seq__8101_9993;
var G__9999 = chunk__8102_9994;
var G__10000 = count__8103_9995;
var G__10001 = (i__8104_9996 + 1);
seq__8101_9993 = G__9998;
chunk__8102_9994 = G__9999;
count__8103_9995 = G__10000;
i__8104_9996 = G__10001;
continue;
}
} else
{var temp__4092__auto___10002 = cljs.core.seq.call(null,seq__8101_9993);if(temp__4092__auto___10002)
{var seq__8101_10003__$1 = temp__4092__auto___10002;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8101_10003__$1))
{var c__5632__auto___10004 = cljs.core.chunk_first.call(null,seq__8101_10003__$1);{
var G__10005 = cljs.core.chunk_rest.call(null,seq__8101_10003__$1);
var G__10006 = c__5632__auto___10004;
var G__10007 = cljs.core.count.call(null,c__5632__auto___10004);
var G__10008 = 0;
seq__8101_9993 = G__10005;
chunk__8102_9994 = G__10006;
count__8103_9995 = G__10007;
i__8104_9996 = G__10008;
continue;
}
} else
{var arg__6549__auto___10009 = cljs.core.first.call(null,seq__8101_10003__$1);a__6548__auto__.push(arg__6549__auto___10009);
{
var G__10010 = cljs.core.next.call(null,seq__8101_10003__$1);
var G__10011 = null;
var G__10012 = 0;
var G__10013 = 0;
seq__8101_9993 = G__10010;
chunk__8102_9994 = G__10011;
count__8103_9995 = G__10012;
i__8104_9996 = G__10013;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.object.apply(null,a__6548__auto__);
};
var object = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return object__delegate.call(this,args__6547__auto__);};
object.cljs$lang$maxFixedArity = 0;
object.cljs$lang$applyTo = (function (arglist__10014){
var args__6547__auto__ = cljs.core.seq(arglist__10014);
return object__delegate(args__6547__auto__);
});
object.cljs$core$IFn$_invoke$arity$variadic = object__delegate;
return object;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.ol = (function() { 
var ol__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__8109_10015 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__8110_10016 = null;var count__8111_10017 = 0;var i__8112_10018 = 0;while(true){
if((i__8112_10018 < count__8111_10017))
{var arg__6549__auto___10019 = cljs.core._nth.call(null,chunk__8110_10016,i__8112_10018);a__6548__auto__.push(arg__6549__auto___10019);
{
var G__10020 = seq__8109_10015;
var G__10021 = chunk__8110_10016;
var G__10022 = count__8111_10017;
var G__10023 = (i__8112_10018 + 1);
seq__8109_10015 = G__10020;
chunk__8110_10016 = G__10021;
count__8111_10017 = G__10022;
i__8112_10018 = G__10023;
continue;
}
} else
{var temp__4092__auto___10024 = cljs.core.seq.call(null,seq__8109_10015);if(temp__4092__auto___10024)
{var seq__8109_10025__$1 = temp__4092__auto___10024;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8109_10025__$1))
{var c__5632__auto___10026 = cljs.core.chunk_first.call(null,seq__8109_10025__$1);{
var G__10027 = cljs.core.chunk_rest.call(null,seq__8109_10025__$1);
var G__10028 = c__5632__auto___10026;
var G__10029 = cljs.core.count.call(null,c__5632__auto___10026);
var G__10030 = 0;
seq__8109_10015 = G__10027;
chunk__8110_10016 = G__10028;
count__8111_10017 = G__10029;
i__8112_10018 = G__10030;
continue;
}
} else
{var arg__6549__auto___10031 = cljs.core.first.call(null,seq__8109_10025__$1);a__6548__auto__.push(arg__6549__auto___10031);
{
var G__10032 = cljs.core.next.call(null,seq__8109_10025__$1);
var G__10033 = null;
var G__10034 = 0;
var G__10035 = 0;
seq__8109_10015 = G__10032;
chunk__8110_10016 = G__10033;
count__8111_10017 = G__10034;
i__8112_10018 = G__10035;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.ol.apply(null,a__6548__auto__);
};
var ol = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ol__delegate.call(this,args__6547__auto__);};
ol.cljs$lang$maxFixedArity = 0;
ol.cljs$lang$applyTo = (function (arglist__10036){
var args__6547__auto__ = cljs.core.seq(arglist__10036);
return ol__delegate(args__6547__auto__);
});
ol.cljs$core$IFn$_invoke$arity$variadic = ol__delegate;
return ol;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.optgroup = (function() { 
var optgroup__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__8117_10037 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__8118_10038 = null;var count__8119_10039 = 0;var i__8120_10040 = 0;while(true){
if((i__8120_10040 < count__8119_10039))
{var arg__6549__auto___10041 = cljs.core._nth.call(null,chunk__8118_10038,i__8120_10040);a__6548__auto__.push(arg__6549__auto___10041);
{
var G__10042 = seq__8117_10037;
var G__10043 = chunk__8118_10038;
var G__10044 = count__8119_10039;
var G__10045 = (i__8120_10040 + 1);
seq__8117_10037 = G__10042;
chunk__8118_10038 = G__10043;
count__8119_10039 = G__10044;
i__8120_10040 = G__10045;
continue;
}
} else
{var temp__4092__auto___10046 = cljs.core.seq.call(null,seq__8117_10037);if(temp__4092__auto___10046)
{var seq__8117_10047__$1 = temp__4092__auto___10046;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8117_10047__$1))
{var c__5632__auto___10048 = cljs.core.chunk_first.call(null,seq__8117_10047__$1);{
var G__10049 = cljs.core.chunk_rest.call(null,seq__8117_10047__$1);
var G__10050 = c__5632__auto___10048;
var G__10051 = cljs.core.count.call(null,c__5632__auto___10048);
var G__10052 = 0;
seq__8117_10037 = G__10049;
chunk__8118_10038 = G__10050;
count__8119_10039 = G__10051;
i__8120_10040 = G__10052;
continue;
}
} else
{var arg__6549__auto___10053 = cljs.core.first.call(null,seq__8117_10047__$1);a__6548__auto__.push(arg__6549__auto___10053);
{
var G__10054 = cljs.core.next.call(null,seq__8117_10047__$1);
var G__10055 = null;
var G__10056 = 0;
var G__10057 = 0;
seq__8117_10037 = G__10054;
chunk__8118_10038 = G__10055;
count__8119_10039 = G__10056;
i__8120_10040 = G__10057;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.optgroup.apply(null,a__6548__auto__);
};
var optgroup = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return optgroup__delegate.call(this,args__6547__auto__);};
optgroup.cljs$lang$maxFixedArity = 0;
optgroup.cljs$lang$applyTo = (function (arglist__10058){
var args__6547__auto__ = cljs.core.seq(arglist__10058);
return optgroup__delegate(args__6547__auto__);
});
optgroup.cljs$core$IFn$_invoke$arity$variadic = optgroup__delegate;
return optgroup;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.option = (function() { 
var option__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__8125_10059 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__8126_10060 = null;var count__8127_10061 = 0;var i__8128_10062 = 0;while(true){
if((i__8128_10062 < count__8127_10061))
{var arg__6549__auto___10063 = cljs.core._nth.call(null,chunk__8126_10060,i__8128_10062);a__6548__auto__.push(arg__6549__auto___10063);
{
var G__10064 = seq__8125_10059;
var G__10065 = chunk__8126_10060;
var G__10066 = count__8127_10061;
var G__10067 = (i__8128_10062 + 1);
seq__8125_10059 = G__10064;
chunk__8126_10060 = G__10065;
count__8127_10061 = G__10066;
i__8128_10062 = G__10067;
continue;
}
} else
{var temp__4092__auto___10068 = cljs.core.seq.call(null,seq__8125_10059);if(temp__4092__auto___10068)
{var seq__8125_10069__$1 = temp__4092__auto___10068;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8125_10069__$1))
{var c__5632__auto___10070 = cljs.core.chunk_first.call(null,seq__8125_10069__$1);{
var G__10071 = cljs.core.chunk_rest.call(null,seq__8125_10069__$1);
var G__10072 = c__5632__auto___10070;
var G__10073 = cljs.core.count.call(null,c__5632__auto___10070);
var G__10074 = 0;
seq__8125_10059 = G__10071;
chunk__8126_10060 = G__10072;
count__8127_10061 = G__10073;
i__8128_10062 = G__10074;
continue;
}
} else
{var arg__6549__auto___10075 = cljs.core.first.call(null,seq__8125_10069__$1);a__6548__auto__.push(arg__6549__auto___10075);
{
var G__10076 = cljs.core.next.call(null,seq__8125_10069__$1);
var G__10077 = null;
var G__10078 = 0;
var G__10079 = 0;
seq__8125_10059 = G__10076;
chunk__8126_10060 = G__10077;
count__8127_10061 = G__10078;
i__8128_10062 = G__10079;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.option.apply(null,a__6548__auto__);
};
var option = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return option__delegate.call(this,args__6547__auto__);};
option.cljs$lang$maxFixedArity = 0;
option.cljs$lang$applyTo = (function (arglist__10080){
var args__6547__auto__ = cljs.core.seq(arglist__10080);
return option__delegate(args__6547__auto__);
});
option.cljs$core$IFn$_invoke$arity$variadic = option__delegate;
return option;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.output = (function() { 
var output__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__8133_10081 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__8134_10082 = null;var count__8135_10083 = 0;var i__8136_10084 = 0;while(true){
if((i__8136_10084 < count__8135_10083))
{var arg__6549__auto___10085 = cljs.core._nth.call(null,chunk__8134_10082,i__8136_10084);a__6548__auto__.push(arg__6549__auto___10085);
{
var G__10086 = seq__8133_10081;
var G__10087 = chunk__8134_10082;
var G__10088 = count__8135_10083;
var G__10089 = (i__8136_10084 + 1);
seq__8133_10081 = G__10086;
chunk__8134_10082 = G__10087;
count__8135_10083 = G__10088;
i__8136_10084 = G__10089;
continue;
}
} else
{var temp__4092__auto___10090 = cljs.core.seq.call(null,seq__8133_10081);if(temp__4092__auto___10090)
{var seq__8133_10091__$1 = temp__4092__auto___10090;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8133_10091__$1))
{var c__5632__auto___10092 = cljs.core.chunk_first.call(null,seq__8133_10091__$1);{
var G__10093 = cljs.core.chunk_rest.call(null,seq__8133_10091__$1);
var G__10094 = c__5632__auto___10092;
var G__10095 = cljs.core.count.call(null,c__5632__auto___10092);
var G__10096 = 0;
seq__8133_10081 = G__10093;
chunk__8134_10082 = G__10094;
count__8135_10083 = G__10095;
i__8136_10084 = G__10096;
continue;
}
} else
{var arg__6549__auto___10097 = cljs.core.first.call(null,seq__8133_10091__$1);a__6548__auto__.push(arg__6549__auto___10097);
{
var G__10098 = cljs.core.next.call(null,seq__8133_10091__$1);
var G__10099 = null;
var G__10100 = 0;
var G__10101 = 0;
seq__8133_10081 = G__10098;
chunk__8134_10082 = G__10099;
count__8135_10083 = G__10100;
i__8136_10084 = G__10101;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.output.apply(null,a__6548__auto__);
};
var output = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return output__delegate.call(this,args__6547__auto__);};
output.cljs$lang$maxFixedArity = 0;
output.cljs$lang$applyTo = (function (arglist__10102){
var args__6547__auto__ = cljs.core.seq(arglist__10102);
return output__delegate(args__6547__auto__);
});
output.cljs$core$IFn$_invoke$arity$variadic = output__delegate;
return output;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.p = (function() { 
var p__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__8141_10103 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__8142_10104 = null;var count__8143_10105 = 0;var i__8144_10106 = 0;while(true){
if((i__8144_10106 < count__8143_10105))
{var arg__6549__auto___10107 = cljs.core._nth.call(null,chunk__8142_10104,i__8144_10106);a__6548__auto__.push(arg__6549__auto___10107);
{
var G__10108 = seq__8141_10103;
var G__10109 = chunk__8142_10104;
var G__10110 = count__8143_10105;
var G__10111 = (i__8144_10106 + 1);
seq__8141_10103 = G__10108;
chunk__8142_10104 = G__10109;
count__8143_10105 = G__10110;
i__8144_10106 = G__10111;
continue;
}
} else
{var temp__4092__auto___10112 = cljs.core.seq.call(null,seq__8141_10103);if(temp__4092__auto___10112)
{var seq__8141_10113__$1 = temp__4092__auto___10112;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8141_10113__$1))
{var c__5632__auto___10114 = cljs.core.chunk_first.call(null,seq__8141_10113__$1);{
var G__10115 = cljs.core.chunk_rest.call(null,seq__8141_10113__$1);
var G__10116 = c__5632__auto___10114;
var G__10117 = cljs.core.count.call(null,c__5632__auto___10114);
var G__10118 = 0;
seq__8141_10103 = G__10115;
chunk__8142_10104 = G__10116;
count__8143_10105 = G__10117;
i__8144_10106 = G__10118;
continue;
}
} else
{var arg__6549__auto___10119 = cljs.core.first.call(null,seq__8141_10113__$1);a__6548__auto__.push(arg__6549__auto___10119);
{
var G__10120 = cljs.core.next.call(null,seq__8141_10113__$1);
var G__10121 = null;
var G__10122 = 0;
var G__10123 = 0;
seq__8141_10103 = G__10120;
chunk__8142_10104 = G__10121;
count__8143_10105 = G__10122;
i__8144_10106 = G__10123;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.p.apply(null,a__6548__auto__);
};
var p = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return p__delegate.call(this,args__6547__auto__);};
p.cljs$lang$maxFixedArity = 0;
p.cljs$lang$applyTo = (function (arglist__10124){
var args__6547__auto__ = cljs.core.seq(arglist__10124);
return p__delegate(args__6547__auto__);
});
p.cljs$core$IFn$_invoke$arity$variadic = p__delegate;
return p;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.param = (function() { 
var param__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__8149_10125 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__8150_10126 = null;var count__8151_10127 = 0;var i__8152_10128 = 0;while(true){
if((i__8152_10128 < count__8151_10127))
{var arg__6549__auto___10129 = cljs.core._nth.call(null,chunk__8150_10126,i__8152_10128);a__6548__auto__.push(arg__6549__auto___10129);
{
var G__10130 = seq__8149_10125;
var G__10131 = chunk__8150_10126;
var G__10132 = count__8151_10127;
var G__10133 = (i__8152_10128 + 1);
seq__8149_10125 = G__10130;
chunk__8150_10126 = G__10131;
count__8151_10127 = G__10132;
i__8152_10128 = G__10133;
continue;
}
} else
{var temp__4092__auto___10134 = cljs.core.seq.call(null,seq__8149_10125);if(temp__4092__auto___10134)
{var seq__8149_10135__$1 = temp__4092__auto___10134;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8149_10135__$1))
{var c__5632__auto___10136 = cljs.core.chunk_first.call(null,seq__8149_10135__$1);{
var G__10137 = cljs.core.chunk_rest.call(null,seq__8149_10135__$1);
var G__10138 = c__5632__auto___10136;
var G__10139 = cljs.core.count.call(null,c__5632__auto___10136);
var G__10140 = 0;
seq__8149_10125 = G__10137;
chunk__8150_10126 = G__10138;
count__8151_10127 = G__10139;
i__8152_10128 = G__10140;
continue;
}
} else
{var arg__6549__auto___10141 = cljs.core.first.call(null,seq__8149_10135__$1);a__6548__auto__.push(arg__6549__auto___10141);
{
var G__10142 = cljs.core.next.call(null,seq__8149_10135__$1);
var G__10143 = null;
var G__10144 = 0;
var G__10145 = 0;
seq__8149_10125 = G__10142;
chunk__8150_10126 = G__10143;
count__8151_10127 = G__10144;
i__8152_10128 = G__10145;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.param.apply(null,a__6548__auto__);
};
var param = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return param__delegate.call(this,args__6547__auto__);};
param.cljs$lang$maxFixedArity = 0;
param.cljs$lang$applyTo = (function (arglist__10146){
var args__6547__auto__ = cljs.core.seq(arglist__10146);
return param__delegate(args__6547__auto__);
});
param.cljs$core$IFn$_invoke$arity$variadic = param__delegate;
return param;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.pre = (function() { 
var pre__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__8157_10147 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__8158_10148 = null;var count__8159_10149 = 0;var i__8160_10150 = 0;while(true){
if((i__8160_10150 < count__8159_10149))
{var arg__6549__auto___10151 = cljs.core._nth.call(null,chunk__8158_10148,i__8160_10150);a__6548__auto__.push(arg__6549__auto___10151);
{
var G__10152 = seq__8157_10147;
var G__10153 = chunk__8158_10148;
var G__10154 = count__8159_10149;
var G__10155 = (i__8160_10150 + 1);
seq__8157_10147 = G__10152;
chunk__8158_10148 = G__10153;
count__8159_10149 = G__10154;
i__8160_10150 = G__10155;
continue;
}
} else
{var temp__4092__auto___10156 = cljs.core.seq.call(null,seq__8157_10147);if(temp__4092__auto___10156)
{var seq__8157_10157__$1 = temp__4092__auto___10156;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8157_10157__$1))
{var c__5632__auto___10158 = cljs.core.chunk_first.call(null,seq__8157_10157__$1);{
var G__10159 = cljs.core.chunk_rest.call(null,seq__8157_10157__$1);
var G__10160 = c__5632__auto___10158;
var G__10161 = cljs.core.count.call(null,c__5632__auto___10158);
var G__10162 = 0;
seq__8157_10147 = G__10159;
chunk__8158_10148 = G__10160;
count__8159_10149 = G__10161;
i__8160_10150 = G__10162;
continue;
}
} else
{var arg__6549__auto___10163 = cljs.core.first.call(null,seq__8157_10157__$1);a__6548__auto__.push(arg__6549__auto___10163);
{
var G__10164 = cljs.core.next.call(null,seq__8157_10157__$1);
var G__10165 = null;
var G__10166 = 0;
var G__10167 = 0;
seq__8157_10147 = G__10164;
chunk__8158_10148 = G__10165;
count__8159_10149 = G__10166;
i__8160_10150 = G__10167;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.pre.apply(null,a__6548__auto__);
};
var pre = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return pre__delegate.call(this,args__6547__auto__);};
pre.cljs$lang$maxFixedArity = 0;
pre.cljs$lang$applyTo = (function (arglist__10168){
var args__6547__auto__ = cljs.core.seq(arglist__10168);
return pre__delegate(args__6547__auto__);
});
pre.cljs$core$IFn$_invoke$arity$variadic = pre__delegate;
return pre;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.progress = (function() { 
var progress__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__8165_10169 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__8166_10170 = null;var count__8167_10171 = 0;var i__8168_10172 = 0;while(true){
if((i__8168_10172 < count__8167_10171))
{var arg__6549__auto___10173 = cljs.core._nth.call(null,chunk__8166_10170,i__8168_10172);a__6548__auto__.push(arg__6549__auto___10173);
{
var G__10174 = seq__8165_10169;
var G__10175 = chunk__8166_10170;
var G__10176 = count__8167_10171;
var G__10177 = (i__8168_10172 + 1);
seq__8165_10169 = G__10174;
chunk__8166_10170 = G__10175;
count__8167_10171 = G__10176;
i__8168_10172 = G__10177;
continue;
}
} else
{var temp__4092__auto___10178 = cljs.core.seq.call(null,seq__8165_10169);if(temp__4092__auto___10178)
{var seq__8165_10179__$1 = temp__4092__auto___10178;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8165_10179__$1))
{var c__5632__auto___10180 = cljs.core.chunk_first.call(null,seq__8165_10179__$1);{
var G__10181 = cljs.core.chunk_rest.call(null,seq__8165_10179__$1);
var G__10182 = c__5632__auto___10180;
var G__10183 = cljs.core.count.call(null,c__5632__auto___10180);
var G__10184 = 0;
seq__8165_10169 = G__10181;
chunk__8166_10170 = G__10182;
count__8167_10171 = G__10183;
i__8168_10172 = G__10184;
continue;
}
} else
{var arg__6549__auto___10185 = cljs.core.first.call(null,seq__8165_10179__$1);a__6548__auto__.push(arg__6549__auto___10185);
{
var G__10186 = cljs.core.next.call(null,seq__8165_10179__$1);
var G__10187 = null;
var G__10188 = 0;
var G__10189 = 0;
seq__8165_10169 = G__10186;
chunk__8166_10170 = G__10187;
count__8167_10171 = G__10188;
i__8168_10172 = G__10189;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.progress.apply(null,a__6548__auto__);
};
var progress = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return progress__delegate.call(this,args__6547__auto__);};
progress.cljs$lang$maxFixedArity = 0;
progress.cljs$lang$applyTo = (function (arglist__10190){
var args__6547__auto__ = cljs.core.seq(arglist__10190);
return progress__delegate(args__6547__auto__);
});
progress.cljs$core$IFn$_invoke$arity$variadic = progress__delegate;
return progress;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.q = (function() { 
var q__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__8173_10191 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__8174_10192 = null;var count__8175_10193 = 0;var i__8176_10194 = 0;while(true){
if((i__8176_10194 < count__8175_10193))
{var arg__6549__auto___10195 = cljs.core._nth.call(null,chunk__8174_10192,i__8176_10194);a__6548__auto__.push(arg__6549__auto___10195);
{
var G__10196 = seq__8173_10191;
var G__10197 = chunk__8174_10192;
var G__10198 = count__8175_10193;
var G__10199 = (i__8176_10194 + 1);
seq__8173_10191 = G__10196;
chunk__8174_10192 = G__10197;
count__8175_10193 = G__10198;
i__8176_10194 = G__10199;
continue;
}
} else
{var temp__4092__auto___10200 = cljs.core.seq.call(null,seq__8173_10191);if(temp__4092__auto___10200)
{var seq__8173_10201__$1 = temp__4092__auto___10200;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8173_10201__$1))
{var c__5632__auto___10202 = cljs.core.chunk_first.call(null,seq__8173_10201__$1);{
var G__10203 = cljs.core.chunk_rest.call(null,seq__8173_10201__$1);
var G__10204 = c__5632__auto___10202;
var G__10205 = cljs.core.count.call(null,c__5632__auto___10202);
var G__10206 = 0;
seq__8173_10191 = G__10203;
chunk__8174_10192 = G__10204;
count__8175_10193 = G__10205;
i__8176_10194 = G__10206;
continue;
}
} else
{var arg__6549__auto___10207 = cljs.core.first.call(null,seq__8173_10201__$1);a__6548__auto__.push(arg__6549__auto___10207);
{
var G__10208 = cljs.core.next.call(null,seq__8173_10201__$1);
var G__10209 = null;
var G__10210 = 0;
var G__10211 = 0;
seq__8173_10191 = G__10208;
chunk__8174_10192 = G__10209;
count__8175_10193 = G__10210;
i__8176_10194 = G__10211;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.q.apply(null,a__6548__auto__);
};
var q = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return q__delegate.call(this,args__6547__auto__);};
q.cljs$lang$maxFixedArity = 0;
q.cljs$lang$applyTo = (function (arglist__10212){
var args__6547__auto__ = cljs.core.seq(arglist__10212);
return q__delegate(args__6547__auto__);
});
q.cljs$core$IFn$_invoke$arity$variadic = q__delegate;
return q;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.rp = (function() { 
var rp__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__8181_10213 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__8182_10214 = null;var count__8183_10215 = 0;var i__8184_10216 = 0;while(true){
if((i__8184_10216 < count__8183_10215))
{var arg__6549__auto___10217 = cljs.core._nth.call(null,chunk__8182_10214,i__8184_10216);a__6548__auto__.push(arg__6549__auto___10217);
{
var G__10218 = seq__8181_10213;
var G__10219 = chunk__8182_10214;
var G__10220 = count__8183_10215;
var G__10221 = (i__8184_10216 + 1);
seq__8181_10213 = G__10218;
chunk__8182_10214 = G__10219;
count__8183_10215 = G__10220;
i__8184_10216 = G__10221;
continue;
}
} else
{var temp__4092__auto___10222 = cljs.core.seq.call(null,seq__8181_10213);if(temp__4092__auto___10222)
{var seq__8181_10223__$1 = temp__4092__auto___10222;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8181_10223__$1))
{var c__5632__auto___10224 = cljs.core.chunk_first.call(null,seq__8181_10223__$1);{
var G__10225 = cljs.core.chunk_rest.call(null,seq__8181_10223__$1);
var G__10226 = c__5632__auto___10224;
var G__10227 = cljs.core.count.call(null,c__5632__auto___10224);
var G__10228 = 0;
seq__8181_10213 = G__10225;
chunk__8182_10214 = G__10226;
count__8183_10215 = G__10227;
i__8184_10216 = G__10228;
continue;
}
} else
{var arg__6549__auto___10229 = cljs.core.first.call(null,seq__8181_10223__$1);a__6548__auto__.push(arg__6549__auto___10229);
{
var G__10230 = cljs.core.next.call(null,seq__8181_10223__$1);
var G__10231 = null;
var G__10232 = 0;
var G__10233 = 0;
seq__8181_10213 = G__10230;
chunk__8182_10214 = G__10231;
count__8183_10215 = G__10232;
i__8184_10216 = G__10233;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.rp.apply(null,a__6548__auto__);
};
var rp = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return rp__delegate.call(this,args__6547__auto__);};
rp.cljs$lang$maxFixedArity = 0;
rp.cljs$lang$applyTo = (function (arglist__10234){
var args__6547__auto__ = cljs.core.seq(arglist__10234);
return rp__delegate(args__6547__auto__);
});
rp.cljs$core$IFn$_invoke$arity$variadic = rp__delegate;
return rp;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.rt = (function() { 
var rt__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__8189_10235 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__8190_10236 = null;var count__8191_10237 = 0;var i__8192_10238 = 0;while(true){
if((i__8192_10238 < count__8191_10237))
{var arg__6549__auto___10239 = cljs.core._nth.call(null,chunk__8190_10236,i__8192_10238);a__6548__auto__.push(arg__6549__auto___10239);
{
var G__10240 = seq__8189_10235;
var G__10241 = chunk__8190_10236;
var G__10242 = count__8191_10237;
var G__10243 = (i__8192_10238 + 1);
seq__8189_10235 = G__10240;
chunk__8190_10236 = G__10241;
count__8191_10237 = G__10242;
i__8192_10238 = G__10243;
continue;
}
} else
{var temp__4092__auto___10244 = cljs.core.seq.call(null,seq__8189_10235);if(temp__4092__auto___10244)
{var seq__8189_10245__$1 = temp__4092__auto___10244;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8189_10245__$1))
{var c__5632__auto___10246 = cljs.core.chunk_first.call(null,seq__8189_10245__$1);{
var G__10247 = cljs.core.chunk_rest.call(null,seq__8189_10245__$1);
var G__10248 = c__5632__auto___10246;
var G__10249 = cljs.core.count.call(null,c__5632__auto___10246);
var G__10250 = 0;
seq__8189_10235 = G__10247;
chunk__8190_10236 = G__10248;
count__8191_10237 = G__10249;
i__8192_10238 = G__10250;
continue;
}
} else
{var arg__6549__auto___10251 = cljs.core.first.call(null,seq__8189_10245__$1);a__6548__auto__.push(arg__6549__auto___10251);
{
var G__10252 = cljs.core.next.call(null,seq__8189_10245__$1);
var G__10253 = null;
var G__10254 = 0;
var G__10255 = 0;
seq__8189_10235 = G__10252;
chunk__8190_10236 = G__10253;
count__8191_10237 = G__10254;
i__8192_10238 = G__10255;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.rt.apply(null,a__6548__auto__);
};
var rt = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return rt__delegate.call(this,args__6547__auto__);};
rt.cljs$lang$maxFixedArity = 0;
rt.cljs$lang$applyTo = (function (arglist__10256){
var args__6547__auto__ = cljs.core.seq(arglist__10256);
return rt__delegate(args__6547__auto__);
});
rt.cljs$core$IFn$_invoke$arity$variadic = rt__delegate;
return rt;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.ruby = (function() { 
var ruby__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__8197_10257 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__8198_10258 = null;var count__8199_10259 = 0;var i__8200_10260 = 0;while(true){
if((i__8200_10260 < count__8199_10259))
{var arg__6549__auto___10261 = cljs.core._nth.call(null,chunk__8198_10258,i__8200_10260);a__6548__auto__.push(arg__6549__auto___10261);
{
var G__10262 = seq__8197_10257;
var G__10263 = chunk__8198_10258;
var G__10264 = count__8199_10259;
var G__10265 = (i__8200_10260 + 1);
seq__8197_10257 = G__10262;
chunk__8198_10258 = G__10263;
count__8199_10259 = G__10264;
i__8200_10260 = G__10265;
continue;
}
} else
{var temp__4092__auto___10266 = cljs.core.seq.call(null,seq__8197_10257);if(temp__4092__auto___10266)
{var seq__8197_10267__$1 = temp__4092__auto___10266;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8197_10267__$1))
{var c__5632__auto___10268 = cljs.core.chunk_first.call(null,seq__8197_10267__$1);{
var G__10269 = cljs.core.chunk_rest.call(null,seq__8197_10267__$1);
var G__10270 = c__5632__auto___10268;
var G__10271 = cljs.core.count.call(null,c__5632__auto___10268);
var G__10272 = 0;
seq__8197_10257 = G__10269;
chunk__8198_10258 = G__10270;
count__8199_10259 = G__10271;
i__8200_10260 = G__10272;
continue;
}
} else
{var arg__6549__auto___10273 = cljs.core.first.call(null,seq__8197_10267__$1);a__6548__auto__.push(arg__6549__auto___10273);
{
var G__10274 = cljs.core.next.call(null,seq__8197_10267__$1);
var G__10275 = null;
var G__10276 = 0;
var G__10277 = 0;
seq__8197_10257 = G__10274;
chunk__8198_10258 = G__10275;
count__8199_10259 = G__10276;
i__8200_10260 = G__10277;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.ruby.apply(null,a__6548__auto__);
};
var ruby = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ruby__delegate.call(this,args__6547__auto__);};
ruby.cljs$lang$maxFixedArity = 0;
ruby.cljs$lang$applyTo = (function (arglist__10278){
var args__6547__auto__ = cljs.core.seq(arglist__10278);
return ruby__delegate(args__6547__auto__);
});
ruby.cljs$core$IFn$_invoke$arity$variadic = ruby__delegate;
return ruby;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.s = (function() { 
var s__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__8205_10279 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__8206_10280 = null;var count__8207_10281 = 0;var i__8208_10282 = 0;while(true){
if((i__8208_10282 < count__8207_10281))
{var arg__6549__auto___10283 = cljs.core._nth.call(null,chunk__8206_10280,i__8208_10282);a__6548__auto__.push(arg__6549__auto___10283);
{
var G__10284 = seq__8205_10279;
var G__10285 = chunk__8206_10280;
var G__10286 = count__8207_10281;
var G__10287 = (i__8208_10282 + 1);
seq__8205_10279 = G__10284;
chunk__8206_10280 = G__10285;
count__8207_10281 = G__10286;
i__8208_10282 = G__10287;
continue;
}
} else
{var temp__4092__auto___10288 = cljs.core.seq.call(null,seq__8205_10279);if(temp__4092__auto___10288)
{var seq__8205_10289__$1 = temp__4092__auto___10288;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8205_10289__$1))
{var c__5632__auto___10290 = cljs.core.chunk_first.call(null,seq__8205_10289__$1);{
var G__10291 = cljs.core.chunk_rest.call(null,seq__8205_10289__$1);
var G__10292 = c__5632__auto___10290;
var G__10293 = cljs.core.count.call(null,c__5632__auto___10290);
var G__10294 = 0;
seq__8205_10279 = G__10291;
chunk__8206_10280 = G__10292;
count__8207_10281 = G__10293;
i__8208_10282 = G__10294;
continue;
}
} else
{var arg__6549__auto___10295 = cljs.core.first.call(null,seq__8205_10289__$1);a__6548__auto__.push(arg__6549__auto___10295);
{
var G__10296 = cljs.core.next.call(null,seq__8205_10289__$1);
var G__10297 = null;
var G__10298 = 0;
var G__10299 = 0;
seq__8205_10279 = G__10296;
chunk__8206_10280 = G__10297;
count__8207_10281 = G__10298;
i__8208_10282 = G__10299;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.s.apply(null,a__6548__auto__);
};
var s = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return s__delegate.call(this,args__6547__auto__);};
s.cljs$lang$maxFixedArity = 0;
s.cljs$lang$applyTo = (function (arglist__10300){
var args__6547__auto__ = cljs.core.seq(arglist__10300);
return s__delegate(args__6547__auto__);
});
s.cljs$core$IFn$_invoke$arity$variadic = s__delegate;
return s;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.samp = (function() { 
var samp__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__8213_10301 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__8214_10302 = null;var count__8215_10303 = 0;var i__8216_10304 = 0;while(true){
if((i__8216_10304 < count__8215_10303))
{var arg__6549__auto___10305 = cljs.core._nth.call(null,chunk__8214_10302,i__8216_10304);a__6548__auto__.push(arg__6549__auto___10305);
{
var G__10306 = seq__8213_10301;
var G__10307 = chunk__8214_10302;
var G__10308 = count__8215_10303;
var G__10309 = (i__8216_10304 + 1);
seq__8213_10301 = G__10306;
chunk__8214_10302 = G__10307;
count__8215_10303 = G__10308;
i__8216_10304 = G__10309;
continue;
}
} else
{var temp__4092__auto___10310 = cljs.core.seq.call(null,seq__8213_10301);if(temp__4092__auto___10310)
{var seq__8213_10311__$1 = temp__4092__auto___10310;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8213_10311__$1))
{var c__5632__auto___10312 = cljs.core.chunk_first.call(null,seq__8213_10311__$1);{
var G__10313 = cljs.core.chunk_rest.call(null,seq__8213_10311__$1);
var G__10314 = c__5632__auto___10312;
var G__10315 = cljs.core.count.call(null,c__5632__auto___10312);
var G__10316 = 0;
seq__8213_10301 = G__10313;
chunk__8214_10302 = G__10314;
count__8215_10303 = G__10315;
i__8216_10304 = G__10316;
continue;
}
} else
{var arg__6549__auto___10317 = cljs.core.first.call(null,seq__8213_10311__$1);a__6548__auto__.push(arg__6549__auto___10317);
{
var G__10318 = cljs.core.next.call(null,seq__8213_10311__$1);
var G__10319 = null;
var G__10320 = 0;
var G__10321 = 0;
seq__8213_10301 = G__10318;
chunk__8214_10302 = G__10319;
count__8215_10303 = G__10320;
i__8216_10304 = G__10321;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.samp.apply(null,a__6548__auto__);
};
var samp = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return samp__delegate.call(this,args__6547__auto__);};
samp.cljs$lang$maxFixedArity = 0;
samp.cljs$lang$applyTo = (function (arglist__10322){
var args__6547__auto__ = cljs.core.seq(arglist__10322);
return samp__delegate(args__6547__auto__);
});
samp.cljs$core$IFn$_invoke$arity$variadic = samp__delegate;
return samp;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.script = (function() { 
var script__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__8221_10323 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__8222_10324 = null;var count__8223_10325 = 0;var i__8224_10326 = 0;while(true){
if((i__8224_10326 < count__8223_10325))
{var arg__6549__auto___10327 = cljs.core._nth.call(null,chunk__8222_10324,i__8224_10326);a__6548__auto__.push(arg__6549__auto___10327);
{
var G__10328 = seq__8221_10323;
var G__10329 = chunk__8222_10324;
var G__10330 = count__8223_10325;
var G__10331 = (i__8224_10326 + 1);
seq__8221_10323 = G__10328;
chunk__8222_10324 = G__10329;
count__8223_10325 = G__10330;
i__8224_10326 = G__10331;
continue;
}
} else
{var temp__4092__auto___10332 = cljs.core.seq.call(null,seq__8221_10323);if(temp__4092__auto___10332)
{var seq__8221_10333__$1 = temp__4092__auto___10332;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8221_10333__$1))
{var c__5632__auto___10334 = cljs.core.chunk_first.call(null,seq__8221_10333__$1);{
var G__10335 = cljs.core.chunk_rest.call(null,seq__8221_10333__$1);
var G__10336 = c__5632__auto___10334;
var G__10337 = cljs.core.count.call(null,c__5632__auto___10334);
var G__10338 = 0;
seq__8221_10323 = G__10335;
chunk__8222_10324 = G__10336;
count__8223_10325 = G__10337;
i__8224_10326 = G__10338;
continue;
}
} else
{var arg__6549__auto___10339 = cljs.core.first.call(null,seq__8221_10333__$1);a__6548__auto__.push(arg__6549__auto___10339);
{
var G__10340 = cljs.core.next.call(null,seq__8221_10333__$1);
var G__10341 = null;
var G__10342 = 0;
var G__10343 = 0;
seq__8221_10323 = G__10340;
chunk__8222_10324 = G__10341;
count__8223_10325 = G__10342;
i__8224_10326 = G__10343;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.script.apply(null,a__6548__auto__);
};
var script = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return script__delegate.call(this,args__6547__auto__);};
script.cljs$lang$maxFixedArity = 0;
script.cljs$lang$applyTo = (function (arglist__10344){
var args__6547__auto__ = cljs.core.seq(arglist__10344);
return script__delegate(args__6547__auto__);
});
script.cljs$core$IFn$_invoke$arity$variadic = script__delegate;
return script;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.section = (function() { 
var section__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__8229_10345 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__8230_10346 = null;var count__8231_10347 = 0;var i__8232_10348 = 0;while(true){
if((i__8232_10348 < count__8231_10347))
{var arg__6549__auto___10349 = cljs.core._nth.call(null,chunk__8230_10346,i__8232_10348);a__6548__auto__.push(arg__6549__auto___10349);
{
var G__10350 = seq__8229_10345;
var G__10351 = chunk__8230_10346;
var G__10352 = count__8231_10347;
var G__10353 = (i__8232_10348 + 1);
seq__8229_10345 = G__10350;
chunk__8230_10346 = G__10351;
count__8231_10347 = G__10352;
i__8232_10348 = G__10353;
continue;
}
} else
{var temp__4092__auto___10354 = cljs.core.seq.call(null,seq__8229_10345);if(temp__4092__auto___10354)
{var seq__8229_10355__$1 = temp__4092__auto___10354;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8229_10355__$1))
{var c__5632__auto___10356 = cljs.core.chunk_first.call(null,seq__8229_10355__$1);{
var G__10357 = cljs.core.chunk_rest.call(null,seq__8229_10355__$1);
var G__10358 = c__5632__auto___10356;
var G__10359 = cljs.core.count.call(null,c__5632__auto___10356);
var G__10360 = 0;
seq__8229_10345 = G__10357;
chunk__8230_10346 = G__10358;
count__8231_10347 = G__10359;
i__8232_10348 = G__10360;
continue;
}
} else
{var arg__6549__auto___10361 = cljs.core.first.call(null,seq__8229_10355__$1);a__6548__auto__.push(arg__6549__auto___10361);
{
var G__10362 = cljs.core.next.call(null,seq__8229_10355__$1);
var G__10363 = null;
var G__10364 = 0;
var G__10365 = 0;
seq__8229_10345 = G__10362;
chunk__8230_10346 = G__10363;
count__8231_10347 = G__10364;
i__8232_10348 = G__10365;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.section.apply(null,a__6548__auto__);
};
var section = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return section__delegate.call(this,args__6547__auto__);};
section.cljs$lang$maxFixedArity = 0;
section.cljs$lang$applyTo = (function (arglist__10366){
var args__6547__auto__ = cljs.core.seq(arglist__10366);
return section__delegate(args__6547__auto__);
});
section.cljs$core$IFn$_invoke$arity$variadic = section__delegate;
return section;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.select = (function() { 
var select__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__8237_10367 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__8238_10368 = null;var count__8239_10369 = 0;var i__8240_10370 = 0;while(true){
if((i__8240_10370 < count__8239_10369))
{var arg__6549__auto___10371 = cljs.core._nth.call(null,chunk__8238_10368,i__8240_10370);a__6548__auto__.push(arg__6549__auto___10371);
{
var G__10372 = seq__8237_10367;
var G__10373 = chunk__8238_10368;
var G__10374 = count__8239_10369;
var G__10375 = (i__8240_10370 + 1);
seq__8237_10367 = G__10372;
chunk__8238_10368 = G__10373;
count__8239_10369 = G__10374;
i__8240_10370 = G__10375;
continue;
}
} else
{var temp__4092__auto___10376 = cljs.core.seq.call(null,seq__8237_10367);if(temp__4092__auto___10376)
{var seq__8237_10377__$1 = temp__4092__auto___10376;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8237_10377__$1))
{var c__5632__auto___10378 = cljs.core.chunk_first.call(null,seq__8237_10377__$1);{
var G__10379 = cljs.core.chunk_rest.call(null,seq__8237_10377__$1);
var G__10380 = c__5632__auto___10378;
var G__10381 = cljs.core.count.call(null,c__5632__auto___10378);
var G__10382 = 0;
seq__8237_10367 = G__10379;
chunk__8238_10368 = G__10380;
count__8239_10369 = G__10381;
i__8240_10370 = G__10382;
continue;
}
} else
{var arg__6549__auto___10383 = cljs.core.first.call(null,seq__8237_10377__$1);a__6548__auto__.push(arg__6549__auto___10383);
{
var G__10384 = cljs.core.next.call(null,seq__8237_10377__$1);
var G__10385 = null;
var G__10386 = 0;
var G__10387 = 0;
seq__8237_10367 = G__10384;
chunk__8238_10368 = G__10385;
count__8239_10369 = G__10386;
i__8240_10370 = G__10387;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.select.apply(null,a__6548__auto__);
};
var select = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return select__delegate.call(this,args__6547__auto__);};
select.cljs$lang$maxFixedArity = 0;
select.cljs$lang$applyTo = (function (arglist__10388){
var args__6547__auto__ = cljs.core.seq(arglist__10388);
return select__delegate(args__6547__auto__);
});
select.cljs$core$IFn$_invoke$arity$variadic = select__delegate;
return select;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.small = (function() { 
var small__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__8245_10389 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__8246_10390 = null;var count__8247_10391 = 0;var i__8248_10392 = 0;while(true){
if((i__8248_10392 < count__8247_10391))
{var arg__6549__auto___10393 = cljs.core._nth.call(null,chunk__8246_10390,i__8248_10392);a__6548__auto__.push(arg__6549__auto___10393);
{
var G__10394 = seq__8245_10389;
var G__10395 = chunk__8246_10390;
var G__10396 = count__8247_10391;
var G__10397 = (i__8248_10392 + 1);
seq__8245_10389 = G__10394;
chunk__8246_10390 = G__10395;
count__8247_10391 = G__10396;
i__8248_10392 = G__10397;
continue;
}
} else
{var temp__4092__auto___10398 = cljs.core.seq.call(null,seq__8245_10389);if(temp__4092__auto___10398)
{var seq__8245_10399__$1 = temp__4092__auto___10398;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8245_10399__$1))
{var c__5632__auto___10400 = cljs.core.chunk_first.call(null,seq__8245_10399__$1);{
var G__10401 = cljs.core.chunk_rest.call(null,seq__8245_10399__$1);
var G__10402 = c__5632__auto___10400;
var G__10403 = cljs.core.count.call(null,c__5632__auto___10400);
var G__10404 = 0;
seq__8245_10389 = G__10401;
chunk__8246_10390 = G__10402;
count__8247_10391 = G__10403;
i__8248_10392 = G__10404;
continue;
}
} else
{var arg__6549__auto___10405 = cljs.core.first.call(null,seq__8245_10399__$1);a__6548__auto__.push(arg__6549__auto___10405);
{
var G__10406 = cljs.core.next.call(null,seq__8245_10399__$1);
var G__10407 = null;
var G__10408 = 0;
var G__10409 = 0;
seq__8245_10389 = G__10406;
chunk__8246_10390 = G__10407;
count__8247_10391 = G__10408;
i__8248_10392 = G__10409;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.small.apply(null,a__6548__auto__);
};
var small = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return small__delegate.call(this,args__6547__auto__);};
small.cljs$lang$maxFixedArity = 0;
small.cljs$lang$applyTo = (function (arglist__10410){
var args__6547__auto__ = cljs.core.seq(arglist__10410);
return small__delegate(args__6547__auto__);
});
small.cljs$core$IFn$_invoke$arity$variadic = small__delegate;
return small;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.source = (function() { 
var source__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__8253_10411 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__8254_10412 = null;var count__8255_10413 = 0;var i__8256_10414 = 0;while(true){
if((i__8256_10414 < count__8255_10413))
{var arg__6549__auto___10415 = cljs.core._nth.call(null,chunk__8254_10412,i__8256_10414);a__6548__auto__.push(arg__6549__auto___10415);
{
var G__10416 = seq__8253_10411;
var G__10417 = chunk__8254_10412;
var G__10418 = count__8255_10413;
var G__10419 = (i__8256_10414 + 1);
seq__8253_10411 = G__10416;
chunk__8254_10412 = G__10417;
count__8255_10413 = G__10418;
i__8256_10414 = G__10419;
continue;
}
} else
{var temp__4092__auto___10420 = cljs.core.seq.call(null,seq__8253_10411);if(temp__4092__auto___10420)
{var seq__8253_10421__$1 = temp__4092__auto___10420;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8253_10421__$1))
{var c__5632__auto___10422 = cljs.core.chunk_first.call(null,seq__8253_10421__$1);{
var G__10423 = cljs.core.chunk_rest.call(null,seq__8253_10421__$1);
var G__10424 = c__5632__auto___10422;
var G__10425 = cljs.core.count.call(null,c__5632__auto___10422);
var G__10426 = 0;
seq__8253_10411 = G__10423;
chunk__8254_10412 = G__10424;
count__8255_10413 = G__10425;
i__8256_10414 = G__10426;
continue;
}
} else
{var arg__6549__auto___10427 = cljs.core.first.call(null,seq__8253_10421__$1);a__6548__auto__.push(arg__6549__auto___10427);
{
var G__10428 = cljs.core.next.call(null,seq__8253_10421__$1);
var G__10429 = null;
var G__10430 = 0;
var G__10431 = 0;
seq__8253_10411 = G__10428;
chunk__8254_10412 = G__10429;
count__8255_10413 = G__10430;
i__8256_10414 = G__10431;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.source.apply(null,a__6548__auto__);
};
var source = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return source__delegate.call(this,args__6547__auto__);};
source.cljs$lang$maxFixedArity = 0;
source.cljs$lang$applyTo = (function (arglist__10432){
var args__6547__auto__ = cljs.core.seq(arglist__10432);
return source__delegate(args__6547__auto__);
});
source.cljs$core$IFn$_invoke$arity$variadic = source__delegate;
return source;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.span = (function() { 
var span__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__8261_10433 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__8262_10434 = null;var count__8263_10435 = 0;var i__8264_10436 = 0;while(true){
if((i__8264_10436 < count__8263_10435))
{var arg__6549__auto___10437 = cljs.core._nth.call(null,chunk__8262_10434,i__8264_10436);a__6548__auto__.push(arg__6549__auto___10437);
{
var G__10438 = seq__8261_10433;
var G__10439 = chunk__8262_10434;
var G__10440 = count__8263_10435;
var G__10441 = (i__8264_10436 + 1);
seq__8261_10433 = G__10438;
chunk__8262_10434 = G__10439;
count__8263_10435 = G__10440;
i__8264_10436 = G__10441;
continue;
}
} else
{var temp__4092__auto___10442 = cljs.core.seq.call(null,seq__8261_10433);if(temp__4092__auto___10442)
{var seq__8261_10443__$1 = temp__4092__auto___10442;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8261_10443__$1))
{var c__5632__auto___10444 = cljs.core.chunk_first.call(null,seq__8261_10443__$1);{
var G__10445 = cljs.core.chunk_rest.call(null,seq__8261_10443__$1);
var G__10446 = c__5632__auto___10444;
var G__10447 = cljs.core.count.call(null,c__5632__auto___10444);
var G__10448 = 0;
seq__8261_10433 = G__10445;
chunk__8262_10434 = G__10446;
count__8263_10435 = G__10447;
i__8264_10436 = G__10448;
continue;
}
} else
{var arg__6549__auto___10449 = cljs.core.first.call(null,seq__8261_10443__$1);a__6548__auto__.push(arg__6549__auto___10449);
{
var G__10450 = cljs.core.next.call(null,seq__8261_10443__$1);
var G__10451 = null;
var G__10452 = 0;
var G__10453 = 0;
seq__8261_10433 = G__10450;
chunk__8262_10434 = G__10451;
count__8263_10435 = G__10452;
i__8264_10436 = G__10453;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.span.apply(null,a__6548__auto__);
};
var span = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return span__delegate.call(this,args__6547__auto__);};
span.cljs$lang$maxFixedArity = 0;
span.cljs$lang$applyTo = (function (arglist__10454){
var args__6547__auto__ = cljs.core.seq(arglist__10454);
return span__delegate(args__6547__auto__);
});
span.cljs$core$IFn$_invoke$arity$variadic = span__delegate;
return span;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.strong = (function() { 
var strong__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__8269_10455 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__8270_10456 = null;var count__8271_10457 = 0;var i__8272_10458 = 0;while(true){
if((i__8272_10458 < count__8271_10457))
{var arg__6549__auto___10459 = cljs.core._nth.call(null,chunk__8270_10456,i__8272_10458);a__6548__auto__.push(arg__6549__auto___10459);
{
var G__10460 = seq__8269_10455;
var G__10461 = chunk__8270_10456;
var G__10462 = count__8271_10457;
var G__10463 = (i__8272_10458 + 1);
seq__8269_10455 = G__10460;
chunk__8270_10456 = G__10461;
count__8271_10457 = G__10462;
i__8272_10458 = G__10463;
continue;
}
} else
{var temp__4092__auto___10464 = cljs.core.seq.call(null,seq__8269_10455);if(temp__4092__auto___10464)
{var seq__8269_10465__$1 = temp__4092__auto___10464;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8269_10465__$1))
{var c__5632__auto___10466 = cljs.core.chunk_first.call(null,seq__8269_10465__$1);{
var G__10467 = cljs.core.chunk_rest.call(null,seq__8269_10465__$1);
var G__10468 = c__5632__auto___10466;
var G__10469 = cljs.core.count.call(null,c__5632__auto___10466);
var G__10470 = 0;
seq__8269_10455 = G__10467;
chunk__8270_10456 = G__10468;
count__8271_10457 = G__10469;
i__8272_10458 = G__10470;
continue;
}
} else
{var arg__6549__auto___10471 = cljs.core.first.call(null,seq__8269_10465__$1);a__6548__auto__.push(arg__6549__auto___10471);
{
var G__10472 = cljs.core.next.call(null,seq__8269_10465__$1);
var G__10473 = null;
var G__10474 = 0;
var G__10475 = 0;
seq__8269_10455 = G__10472;
chunk__8270_10456 = G__10473;
count__8271_10457 = G__10474;
i__8272_10458 = G__10475;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.strong.apply(null,a__6548__auto__);
};
var strong = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return strong__delegate.call(this,args__6547__auto__);};
strong.cljs$lang$maxFixedArity = 0;
strong.cljs$lang$applyTo = (function (arglist__10476){
var args__6547__auto__ = cljs.core.seq(arglist__10476);
return strong__delegate(args__6547__auto__);
});
strong.cljs$core$IFn$_invoke$arity$variadic = strong__delegate;
return strong;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.style = (function() { 
var style__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__8277_10477 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__8278_10478 = null;var count__8279_10479 = 0;var i__8280_10480 = 0;while(true){
if((i__8280_10480 < count__8279_10479))
{var arg__6549__auto___10481 = cljs.core._nth.call(null,chunk__8278_10478,i__8280_10480);a__6548__auto__.push(arg__6549__auto___10481);
{
var G__10482 = seq__8277_10477;
var G__10483 = chunk__8278_10478;
var G__10484 = count__8279_10479;
var G__10485 = (i__8280_10480 + 1);
seq__8277_10477 = G__10482;
chunk__8278_10478 = G__10483;
count__8279_10479 = G__10484;
i__8280_10480 = G__10485;
continue;
}
} else
{var temp__4092__auto___10486 = cljs.core.seq.call(null,seq__8277_10477);if(temp__4092__auto___10486)
{var seq__8277_10487__$1 = temp__4092__auto___10486;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8277_10487__$1))
{var c__5632__auto___10488 = cljs.core.chunk_first.call(null,seq__8277_10487__$1);{
var G__10489 = cljs.core.chunk_rest.call(null,seq__8277_10487__$1);
var G__10490 = c__5632__auto___10488;
var G__10491 = cljs.core.count.call(null,c__5632__auto___10488);
var G__10492 = 0;
seq__8277_10477 = G__10489;
chunk__8278_10478 = G__10490;
count__8279_10479 = G__10491;
i__8280_10480 = G__10492;
continue;
}
} else
{var arg__6549__auto___10493 = cljs.core.first.call(null,seq__8277_10487__$1);a__6548__auto__.push(arg__6549__auto___10493);
{
var G__10494 = cljs.core.next.call(null,seq__8277_10487__$1);
var G__10495 = null;
var G__10496 = 0;
var G__10497 = 0;
seq__8277_10477 = G__10494;
chunk__8278_10478 = G__10495;
count__8279_10479 = G__10496;
i__8280_10480 = G__10497;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.style.apply(null,a__6548__auto__);
};
var style = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return style__delegate.call(this,args__6547__auto__);};
style.cljs$lang$maxFixedArity = 0;
style.cljs$lang$applyTo = (function (arglist__10498){
var args__6547__auto__ = cljs.core.seq(arglist__10498);
return style__delegate(args__6547__auto__);
});
style.cljs$core$IFn$_invoke$arity$variadic = style__delegate;
return style;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.sub = (function() { 
var sub__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__8285_10499 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__8286_10500 = null;var count__8287_10501 = 0;var i__8288_10502 = 0;while(true){
if((i__8288_10502 < count__8287_10501))
{var arg__6549__auto___10503 = cljs.core._nth.call(null,chunk__8286_10500,i__8288_10502);a__6548__auto__.push(arg__6549__auto___10503);
{
var G__10504 = seq__8285_10499;
var G__10505 = chunk__8286_10500;
var G__10506 = count__8287_10501;
var G__10507 = (i__8288_10502 + 1);
seq__8285_10499 = G__10504;
chunk__8286_10500 = G__10505;
count__8287_10501 = G__10506;
i__8288_10502 = G__10507;
continue;
}
} else
{var temp__4092__auto___10508 = cljs.core.seq.call(null,seq__8285_10499);if(temp__4092__auto___10508)
{var seq__8285_10509__$1 = temp__4092__auto___10508;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8285_10509__$1))
{var c__5632__auto___10510 = cljs.core.chunk_first.call(null,seq__8285_10509__$1);{
var G__10511 = cljs.core.chunk_rest.call(null,seq__8285_10509__$1);
var G__10512 = c__5632__auto___10510;
var G__10513 = cljs.core.count.call(null,c__5632__auto___10510);
var G__10514 = 0;
seq__8285_10499 = G__10511;
chunk__8286_10500 = G__10512;
count__8287_10501 = G__10513;
i__8288_10502 = G__10514;
continue;
}
} else
{var arg__6549__auto___10515 = cljs.core.first.call(null,seq__8285_10509__$1);a__6548__auto__.push(arg__6549__auto___10515);
{
var G__10516 = cljs.core.next.call(null,seq__8285_10509__$1);
var G__10517 = null;
var G__10518 = 0;
var G__10519 = 0;
seq__8285_10499 = G__10516;
chunk__8286_10500 = G__10517;
count__8287_10501 = G__10518;
i__8288_10502 = G__10519;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.sub.apply(null,a__6548__auto__);
};
var sub = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return sub__delegate.call(this,args__6547__auto__);};
sub.cljs$lang$maxFixedArity = 0;
sub.cljs$lang$applyTo = (function (arglist__10520){
var args__6547__auto__ = cljs.core.seq(arglist__10520);
return sub__delegate(args__6547__auto__);
});
sub.cljs$core$IFn$_invoke$arity$variadic = sub__delegate;
return sub;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.summary = (function() { 
var summary__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__8293_10521 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__8294_10522 = null;var count__8295_10523 = 0;var i__8296_10524 = 0;while(true){
if((i__8296_10524 < count__8295_10523))
{var arg__6549__auto___10525 = cljs.core._nth.call(null,chunk__8294_10522,i__8296_10524);a__6548__auto__.push(arg__6549__auto___10525);
{
var G__10526 = seq__8293_10521;
var G__10527 = chunk__8294_10522;
var G__10528 = count__8295_10523;
var G__10529 = (i__8296_10524 + 1);
seq__8293_10521 = G__10526;
chunk__8294_10522 = G__10527;
count__8295_10523 = G__10528;
i__8296_10524 = G__10529;
continue;
}
} else
{var temp__4092__auto___10530 = cljs.core.seq.call(null,seq__8293_10521);if(temp__4092__auto___10530)
{var seq__8293_10531__$1 = temp__4092__auto___10530;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8293_10531__$1))
{var c__5632__auto___10532 = cljs.core.chunk_first.call(null,seq__8293_10531__$1);{
var G__10533 = cljs.core.chunk_rest.call(null,seq__8293_10531__$1);
var G__10534 = c__5632__auto___10532;
var G__10535 = cljs.core.count.call(null,c__5632__auto___10532);
var G__10536 = 0;
seq__8293_10521 = G__10533;
chunk__8294_10522 = G__10534;
count__8295_10523 = G__10535;
i__8296_10524 = G__10536;
continue;
}
} else
{var arg__6549__auto___10537 = cljs.core.first.call(null,seq__8293_10531__$1);a__6548__auto__.push(arg__6549__auto___10537);
{
var G__10538 = cljs.core.next.call(null,seq__8293_10531__$1);
var G__10539 = null;
var G__10540 = 0;
var G__10541 = 0;
seq__8293_10521 = G__10538;
chunk__8294_10522 = G__10539;
count__8295_10523 = G__10540;
i__8296_10524 = G__10541;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.summary.apply(null,a__6548__auto__);
};
var summary = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return summary__delegate.call(this,args__6547__auto__);};
summary.cljs$lang$maxFixedArity = 0;
summary.cljs$lang$applyTo = (function (arglist__10542){
var args__6547__auto__ = cljs.core.seq(arglist__10542);
return summary__delegate(args__6547__auto__);
});
summary.cljs$core$IFn$_invoke$arity$variadic = summary__delegate;
return summary;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.sup = (function() { 
var sup__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__8301_10543 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__8302_10544 = null;var count__8303_10545 = 0;var i__8304_10546 = 0;while(true){
if((i__8304_10546 < count__8303_10545))
{var arg__6549__auto___10547 = cljs.core._nth.call(null,chunk__8302_10544,i__8304_10546);a__6548__auto__.push(arg__6549__auto___10547);
{
var G__10548 = seq__8301_10543;
var G__10549 = chunk__8302_10544;
var G__10550 = count__8303_10545;
var G__10551 = (i__8304_10546 + 1);
seq__8301_10543 = G__10548;
chunk__8302_10544 = G__10549;
count__8303_10545 = G__10550;
i__8304_10546 = G__10551;
continue;
}
} else
{var temp__4092__auto___10552 = cljs.core.seq.call(null,seq__8301_10543);if(temp__4092__auto___10552)
{var seq__8301_10553__$1 = temp__4092__auto___10552;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8301_10553__$1))
{var c__5632__auto___10554 = cljs.core.chunk_first.call(null,seq__8301_10553__$1);{
var G__10555 = cljs.core.chunk_rest.call(null,seq__8301_10553__$1);
var G__10556 = c__5632__auto___10554;
var G__10557 = cljs.core.count.call(null,c__5632__auto___10554);
var G__10558 = 0;
seq__8301_10543 = G__10555;
chunk__8302_10544 = G__10556;
count__8303_10545 = G__10557;
i__8304_10546 = G__10558;
continue;
}
} else
{var arg__6549__auto___10559 = cljs.core.first.call(null,seq__8301_10553__$1);a__6548__auto__.push(arg__6549__auto___10559);
{
var G__10560 = cljs.core.next.call(null,seq__8301_10553__$1);
var G__10561 = null;
var G__10562 = 0;
var G__10563 = 0;
seq__8301_10543 = G__10560;
chunk__8302_10544 = G__10561;
count__8303_10545 = G__10562;
i__8304_10546 = G__10563;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.sup.apply(null,a__6548__auto__);
};
var sup = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return sup__delegate.call(this,args__6547__auto__);};
sup.cljs$lang$maxFixedArity = 0;
sup.cljs$lang$applyTo = (function (arglist__10564){
var args__6547__auto__ = cljs.core.seq(arglist__10564);
return sup__delegate(args__6547__auto__);
});
sup.cljs$core$IFn$_invoke$arity$variadic = sup__delegate;
return sup;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.table = (function() { 
var table__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__8309_10565 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__8310_10566 = null;var count__8311_10567 = 0;var i__8312_10568 = 0;while(true){
if((i__8312_10568 < count__8311_10567))
{var arg__6549__auto___10569 = cljs.core._nth.call(null,chunk__8310_10566,i__8312_10568);a__6548__auto__.push(arg__6549__auto___10569);
{
var G__10570 = seq__8309_10565;
var G__10571 = chunk__8310_10566;
var G__10572 = count__8311_10567;
var G__10573 = (i__8312_10568 + 1);
seq__8309_10565 = G__10570;
chunk__8310_10566 = G__10571;
count__8311_10567 = G__10572;
i__8312_10568 = G__10573;
continue;
}
} else
{var temp__4092__auto___10574 = cljs.core.seq.call(null,seq__8309_10565);if(temp__4092__auto___10574)
{var seq__8309_10575__$1 = temp__4092__auto___10574;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8309_10575__$1))
{var c__5632__auto___10576 = cljs.core.chunk_first.call(null,seq__8309_10575__$1);{
var G__10577 = cljs.core.chunk_rest.call(null,seq__8309_10575__$1);
var G__10578 = c__5632__auto___10576;
var G__10579 = cljs.core.count.call(null,c__5632__auto___10576);
var G__10580 = 0;
seq__8309_10565 = G__10577;
chunk__8310_10566 = G__10578;
count__8311_10567 = G__10579;
i__8312_10568 = G__10580;
continue;
}
} else
{var arg__6549__auto___10581 = cljs.core.first.call(null,seq__8309_10575__$1);a__6548__auto__.push(arg__6549__auto___10581);
{
var G__10582 = cljs.core.next.call(null,seq__8309_10575__$1);
var G__10583 = null;
var G__10584 = 0;
var G__10585 = 0;
seq__8309_10565 = G__10582;
chunk__8310_10566 = G__10583;
count__8311_10567 = G__10584;
i__8312_10568 = G__10585;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.table.apply(null,a__6548__auto__);
};
var table = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return table__delegate.call(this,args__6547__auto__);};
table.cljs$lang$maxFixedArity = 0;
table.cljs$lang$applyTo = (function (arglist__10586){
var args__6547__auto__ = cljs.core.seq(arglist__10586);
return table__delegate(args__6547__auto__);
});
table.cljs$core$IFn$_invoke$arity$variadic = table__delegate;
return table;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.tbody = (function() { 
var tbody__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__8317_10587 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__8318_10588 = null;var count__8319_10589 = 0;var i__8320_10590 = 0;while(true){
if((i__8320_10590 < count__8319_10589))
{var arg__6549__auto___10591 = cljs.core._nth.call(null,chunk__8318_10588,i__8320_10590);a__6548__auto__.push(arg__6549__auto___10591);
{
var G__10592 = seq__8317_10587;
var G__10593 = chunk__8318_10588;
var G__10594 = count__8319_10589;
var G__10595 = (i__8320_10590 + 1);
seq__8317_10587 = G__10592;
chunk__8318_10588 = G__10593;
count__8319_10589 = G__10594;
i__8320_10590 = G__10595;
continue;
}
} else
{var temp__4092__auto___10596 = cljs.core.seq.call(null,seq__8317_10587);if(temp__4092__auto___10596)
{var seq__8317_10597__$1 = temp__4092__auto___10596;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8317_10597__$1))
{var c__5632__auto___10598 = cljs.core.chunk_first.call(null,seq__8317_10597__$1);{
var G__10599 = cljs.core.chunk_rest.call(null,seq__8317_10597__$1);
var G__10600 = c__5632__auto___10598;
var G__10601 = cljs.core.count.call(null,c__5632__auto___10598);
var G__10602 = 0;
seq__8317_10587 = G__10599;
chunk__8318_10588 = G__10600;
count__8319_10589 = G__10601;
i__8320_10590 = G__10602;
continue;
}
} else
{var arg__6549__auto___10603 = cljs.core.first.call(null,seq__8317_10597__$1);a__6548__auto__.push(arg__6549__auto___10603);
{
var G__10604 = cljs.core.next.call(null,seq__8317_10597__$1);
var G__10605 = null;
var G__10606 = 0;
var G__10607 = 0;
seq__8317_10587 = G__10604;
chunk__8318_10588 = G__10605;
count__8319_10589 = G__10606;
i__8320_10590 = G__10607;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.tbody.apply(null,a__6548__auto__);
};
var tbody = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return tbody__delegate.call(this,args__6547__auto__);};
tbody.cljs$lang$maxFixedArity = 0;
tbody.cljs$lang$applyTo = (function (arglist__10608){
var args__6547__auto__ = cljs.core.seq(arglist__10608);
return tbody__delegate(args__6547__auto__);
});
tbody.cljs$core$IFn$_invoke$arity$variadic = tbody__delegate;
return tbody;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.td = (function() { 
var td__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__8325_10609 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__8326_10610 = null;var count__8327_10611 = 0;var i__8328_10612 = 0;while(true){
if((i__8328_10612 < count__8327_10611))
{var arg__6549__auto___10613 = cljs.core._nth.call(null,chunk__8326_10610,i__8328_10612);a__6548__auto__.push(arg__6549__auto___10613);
{
var G__10614 = seq__8325_10609;
var G__10615 = chunk__8326_10610;
var G__10616 = count__8327_10611;
var G__10617 = (i__8328_10612 + 1);
seq__8325_10609 = G__10614;
chunk__8326_10610 = G__10615;
count__8327_10611 = G__10616;
i__8328_10612 = G__10617;
continue;
}
} else
{var temp__4092__auto___10618 = cljs.core.seq.call(null,seq__8325_10609);if(temp__4092__auto___10618)
{var seq__8325_10619__$1 = temp__4092__auto___10618;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8325_10619__$1))
{var c__5632__auto___10620 = cljs.core.chunk_first.call(null,seq__8325_10619__$1);{
var G__10621 = cljs.core.chunk_rest.call(null,seq__8325_10619__$1);
var G__10622 = c__5632__auto___10620;
var G__10623 = cljs.core.count.call(null,c__5632__auto___10620);
var G__10624 = 0;
seq__8325_10609 = G__10621;
chunk__8326_10610 = G__10622;
count__8327_10611 = G__10623;
i__8328_10612 = G__10624;
continue;
}
} else
{var arg__6549__auto___10625 = cljs.core.first.call(null,seq__8325_10619__$1);a__6548__auto__.push(arg__6549__auto___10625);
{
var G__10626 = cljs.core.next.call(null,seq__8325_10619__$1);
var G__10627 = null;
var G__10628 = 0;
var G__10629 = 0;
seq__8325_10609 = G__10626;
chunk__8326_10610 = G__10627;
count__8327_10611 = G__10628;
i__8328_10612 = G__10629;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.td.apply(null,a__6548__auto__);
};
var td = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return td__delegate.call(this,args__6547__auto__);};
td.cljs$lang$maxFixedArity = 0;
td.cljs$lang$applyTo = (function (arglist__10630){
var args__6547__auto__ = cljs.core.seq(arglist__10630);
return td__delegate(args__6547__auto__);
});
td.cljs$core$IFn$_invoke$arity$variadic = td__delegate;
return td;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.textarea = (function() { 
var textarea__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__8333_10631 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__8334_10632 = null;var count__8335_10633 = 0;var i__8336_10634 = 0;while(true){
if((i__8336_10634 < count__8335_10633))
{var arg__6549__auto___10635 = cljs.core._nth.call(null,chunk__8334_10632,i__8336_10634);a__6548__auto__.push(arg__6549__auto___10635);
{
var G__10636 = seq__8333_10631;
var G__10637 = chunk__8334_10632;
var G__10638 = count__8335_10633;
var G__10639 = (i__8336_10634 + 1);
seq__8333_10631 = G__10636;
chunk__8334_10632 = G__10637;
count__8335_10633 = G__10638;
i__8336_10634 = G__10639;
continue;
}
} else
{var temp__4092__auto___10640 = cljs.core.seq.call(null,seq__8333_10631);if(temp__4092__auto___10640)
{var seq__8333_10641__$1 = temp__4092__auto___10640;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8333_10641__$1))
{var c__5632__auto___10642 = cljs.core.chunk_first.call(null,seq__8333_10641__$1);{
var G__10643 = cljs.core.chunk_rest.call(null,seq__8333_10641__$1);
var G__10644 = c__5632__auto___10642;
var G__10645 = cljs.core.count.call(null,c__5632__auto___10642);
var G__10646 = 0;
seq__8333_10631 = G__10643;
chunk__8334_10632 = G__10644;
count__8335_10633 = G__10645;
i__8336_10634 = G__10646;
continue;
}
} else
{var arg__6549__auto___10647 = cljs.core.first.call(null,seq__8333_10641__$1);a__6548__auto__.push(arg__6549__auto___10647);
{
var G__10648 = cljs.core.next.call(null,seq__8333_10641__$1);
var G__10649 = null;
var G__10650 = 0;
var G__10651 = 0;
seq__8333_10631 = G__10648;
chunk__8334_10632 = G__10649;
count__8335_10633 = G__10650;
i__8336_10634 = G__10651;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.textarea.apply(null,a__6548__auto__);
};
var textarea = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return textarea__delegate.call(this,args__6547__auto__);};
textarea.cljs$lang$maxFixedArity = 0;
textarea.cljs$lang$applyTo = (function (arglist__10652){
var args__6547__auto__ = cljs.core.seq(arglist__10652);
return textarea__delegate(args__6547__auto__);
});
textarea.cljs$core$IFn$_invoke$arity$variadic = textarea__delegate;
return textarea;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.tfoot = (function() { 
var tfoot__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__8341_10653 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__8342_10654 = null;var count__8343_10655 = 0;var i__8344_10656 = 0;while(true){
if((i__8344_10656 < count__8343_10655))
{var arg__6549__auto___10657 = cljs.core._nth.call(null,chunk__8342_10654,i__8344_10656);a__6548__auto__.push(arg__6549__auto___10657);
{
var G__10658 = seq__8341_10653;
var G__10659 = chunk__8342_10654;
var G__10660 = count__8343_10655;
var G__10661 = (i__8344_10656 + 1);
seq__8341_10653 = G__10658;
chunk__8342_10654 = G__10659;
count__8343_10655 = G__10660;
i__8344_10656 = G__10661;
continue;
}
} else
{var temp__4092__auto___10662 = cljs.core.seq.call(null,seq__8341_10653);if(temp__4092__auto___10662)
{var seq__8341_10663__$1 = temp__4092__auto___10662;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8341_10663__$1))
{var c__5632__auto___10664 = cljs.core.chunk_first.call(null,seq__8341_10663__$1);{
var G__10665 = cljs.core.chunk_rest.call(null,seq__8341_10663__$1);
var G__10666 = c__5632__auto___10664;
var G__10667 = cljs.core.count.call(null,c__5632__auto___10664);
var G__10668 = 0;
seq__8341_10653 = G__10665;
chunk__8342_10654 = G__10666;
count__8343_10655 = G__10667;
i__8344_10656 = G__10668;
continue;
}
} else
{var arg__6549__auto___10669 = cljs.core.first.call(null,seq__8341_10663__$1);a__6548__auto__.push(arg__6549__auto___10669);
{
var G__10670 = cljs.core.next.call(null,seq__8341_10663__$1);
var G__10671 = null;
var G__10672 = 0;
var G__10673 = 0;
seq__8341_10653 = G__10670;
chunk__8342_10654 = G__10671;
count__8343_10655 = G__10672;
i__8344_10656 = G__10673;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.tfoot.apply(null,a__6548__auto__);
};
var tfoot = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return tfoot__delegate.call(this,args__6547__auto__);};
tfoot.cljs$lang$maxFixedArity = 0;
tfoot.cljs$lang$applyTo = (function (arglist__10674){
var args__6547__auto__ = cljs.core.seq(arglist__10674);
return tfoot__delegate(args__6547__auto__);
});
tfoot.cljs$core$IFn$_invoke$arity$variadic = tfoot__delegate;
return tfoot;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.th = (function() { 
var th__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__8349_10675 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__8350_10676 = null;var count__8351_10677 = 0;var i__8352_10678 = 0;while(true){
if((i__8352_10678 < count__8351_10677))
{var arg__6549__auto___10679 = cljs.core._nth.call(null,chunk__8350_10676,i__8352_10678);a__6548__auto__.push(arg__6549__auto___10679);
{
var G__10680 = seq__8349_10675;
var G__10681 = chunk__8350_10676;
var G__10682 = count__8351_10677;
var G__10683 = (i__8352_10678 + 1);
seq__8349_10675 = G__10680;
chunk__8350_10676 = G__10681;
count__8351_10677 = G__10682;
i__8352_10678 = G__10683;
continue;
}
} else
{var temp__4092__auto___10684 = cljs.core.seq.call(null,seq__8349_10675);if(temp__4092__auto___10684)
{var seq__8349_10685__$1 = temp__4092__auto___10684;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8349_10685__$1))
{var c__5632__auto___10686 = cljs.core.chunk_first.call(null,seq__8349_10685__$1);{
var G__10687 = cljs.core.chunk_rest.call(null,seq__8349_10685__$1);
var G__10688 = c__5632__auto___10686;
var G__10689 = cljs.core.count.call(null,c__5632__auto___10686);
var G__10690 = 0;
seq__8349_10675 = G__10687;
chunk__8350_10676 = G__10688;
count__8351_10677 = G__10689;
i__8352_10678 = G__10690;
continue;
}
} else
{var arg__6549__auto___10691 = cljs.core.first.call(null,seq__8349_10685__$1);a__6548__auto__.push(arg__6549__auto___10691);
{
var G__10692 = cljs.core.next.call(null,seq__8349_10685__$1);
var G__10693 = null;
var G__10694 = 0;
var G__10695 = 0;
seq__8349_10675 = G__10692;
chunk__8350_10676 = G__10693;
count__8351_10677 = G__10694;
i__8352_10678 = G__10695;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.th.apply(null,a__6548__auto__);
};
var th = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return th__delegate.call(this,args__6547__auto__);};
th.cljs$lang$maxFixedArity = 0;
th.cljs$lang$applyTo = (function (arglist__10696){
var args__6547__auto__ = cljs.core.seq(arglist__10696);
return th__delegate(args__6547__auto__);
});
th.cljs$core$IFn$_invoke$arity$variadic = th__delegate;
return th;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.thead = (function() { 
var thead__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__8357_10697 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__8358_10698 = null;var count__8359_10699 = 0;var i__8360_10700 = 0;while(true){
if((i__8360_10700 < count__8359_10699))
{var arg__6549__auto___10701 = cljs.core._nth.call(null,chunk__8358_10698,i__8360_10700);a__6548__auto__.push(arg__6549__auto___10701);
{
var G__10702 = seq__8357_10697;
var G__10703 = chunk__8358_10698;
var G__10704 = count__8359_10699;
var G__10705 = (i__8360_10700 + 1);
seq__8357_10697 = G__10702;
chunk__8358_10698 = G__10703;
count__8359_10699 = G__10704;
i__8360_10700 = G__10705;
continue;
}
} else
{var temp__4092__auto___10706 = cljs.core.seq.call(null,seq__8357_10697);if(temp__4092__auto___10706)
{var seq__8357_10707__$1 = temp__4092__auto___10706;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8357_10707__$1))
{var c__5632__auto___10708 = cljs.core.chunk_first.call(null,seq__8357_10707__$1);{
var G__10709 = cljs.core.chunk_rest.call(null,seq__8357_10707__$1);
var G__10710 = c__5632__auto___10708;
var G__10711 = cljs.core.count.call(null,c__5632__auto___10708);
var G__10712 = 0;
seq__8357_10697 = G__10709;
chunk__8358_10698 = G__10710;
count__8359_10699 = G__10711;
i__8360_10700 = G__10712;
continue;
}
} else
{var arg__6549__auto___10713 = cljs.core.first.call(null,seq__8357_10707__$1);a__6548__auto__.push(arg__6549__auto___10713);
{
var G__10714 = cljs.core.next.call(null,seq__8357_10707__$1);
var G__10715 = null;
var G__10716 = 0;
var G__10717 = 0;
seq__8357_10697 = G__10714;
chunk__8358_10698 = G__10715;
count__8359_10699 = G__10716;
i__8360_10700 = G__10717;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.thead.apply(null,a__6548__auto__);
};
var thead = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return thead__delegate.call(this,args__6547__auto__);};
thead.cljs$lang$maxFixedArity = 0;
thead.cljs$lang$applyTo = (function (arglist__10718){
var args__6547__auto__ = cljs.core.seq(arglist__10718);
return thead__delegate(args__6547__auto__);
});
thead.cljs$core$IFn$_invoke$arity$variadic = thead__delegate;
return thead;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.time = (function() { 
var time__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__8365_10719 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__8366_10720 = null;var count__8367_10721 = 0;var i__8368_10722 = 0;while(true){
if((i__8368_10722 < count__8367_10721))
{var arg__6549__auto___10723 = cljs.core._nth.call(null,chunk__8366_10720,i__8368_10722);a__6548__auto__.push(arg__6549__auto___10723);
{
var G__10724 = seq__8365_10719;
var G__10725 = chunk__8366_10720;
var G__10726 = count__8367_10721;
var G__10727 = (i__8368_10722 + 1);
seq__8365_10719 = G__10724;
chunk__8366_10720 = G__10725;
count__8367_10721 = G__10726;
i__8368_10722 = G__10727;
continue;
}
} else
{var temp__4092__auto___10728 = cljs.core.seq.call(null,seq__8365_10719);if(temp__4092__auto___10728)
{var seq__8365_10729__$1 = temp__4092__auto___10728;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8365_10729__$1))
{var c__5632__auto___10730 = cljs.core.chunk_first.call(null,seq__8365_10729__$1);{
var G__10731 = cljs.core.chunk_rest.call(null,seq__8365_10729__$1);
var G__10732 = c__5632__auto___10730;
var G__10733 = cljs.core.count.call(null,c__5632__auto___10730);
var G__10734 = 0;
seq__8365_10719 = G__10731;
chunk__8366_10720 = G__10732;
count__8367_10721 = G__10733;
i__8368_10722 = G__10734;
continue;
}
} else
{var arg__6549__auto___10735 = cljs.core.first.call(null,seq__8365_10729__$1);a__6548__auto__.push(arg__6549__auto___10735);
{
var G__10736 = cljs.core.next.call(null,seq__8365_10729__$1);
var G__10737 = null;
var G__10738 = 0;
var G__10739 = 0;
seq__8365_10719 = G__10736;
chunk__8366_10720 = G__10737;
count__8367_10721 = G__10738;
i__8368_10722 = G__10739;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.time.apply(null,a__6548__auto__);
};
var time = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return time__delegate.call(this,args__6547__auto__);};
time.cljs$lang$maxFixedArity = 0;
time.cljs$lang$applyTo = (function (arglist__10740){
var args__6547__auto__ = cljs.core.seq(arglist__10740);
return time__delegate(args__6547__auto__);
});
time.cljs$core$IFn$_invoke$arity$variadic = time__delegate;
return time;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.title = (function() { 
var title__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__8373_10741 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__8374_10742 = null;var count__8375_10743 = 0;var i__8376_10744 = 0;while(true){
if((i__8376_10744 < count__8375_10743))
{var arg__6549__auto___10745 = cljs.core._nth.call(null,chunk__8374_10742,i__8376_10744);a__6548__auto__.push(arg__6549__auto___10745);
{
var G__10746 = seq__8373_10741;
var G__10747 = chunk__8374_10742;
var G__10748 = count__8375_10743;
var G__10749 = (i__8376_10744 + 1);
seq__8373_10741 = G__10746;
chunk__8374_10742 = G__10747;
count__8375_10743 = G__10748;
i__8376_10744 = G__10749;
continue;
}
} else
{var temp__4092__auto___10750 = cljs.core.seq.call(null,seq__8373_10741);if(temp__4092__auto___10750)
{var seq__8373_10751__$1 = temp__4092__auto___10750;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8373_10751__$1))
{var c__5632__auto___10752 = cljs.core.chunk_first.call(null,seq__8373_10751__$1);{
var G__10753 = cljs.core.chunk_rest.call(null,seq__8373_10751__$1);
var G__10754 = c__5632__auto___10752;
var G__10755 = cljs.core.count.call(null,c__5632__auto___10752);
var G__10756 = 0;
seq__8373_10741 = G__10753;
chunk__8374_10742 = G__10754;
count__8375_10743 = G__10755;
i__8376_10744 = G__10756;
continue;
}
} else
{var arg__6549__auto___10757 = cljs.core.first.call(null,seq__8373_10751__$1);a__6548__auto__.push(arg__6549__auto___10757);
{
var G__10758 = cljs.core.next.call(null,seq__8373_10751__$1);
var G__10759 = null;
var G__10760 = 0;
var G__10761 = 0;
seq__8373_10741 = G__10758;
chunk__8374_10742 = G__10759;
count__8375_10743 = G__10760;
i__8376_10744 = G__10761;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.title.apply(null,a__6548__auto__);
};
var title = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return title__delegate.call(this,args__6547__auto__);};
title.cljs$lang$maxFixedArity = 0;
title.cljs$lang$applyTo = (function (arglist__10762){
var args__6547__auto__ = cljs.core.seq(arglist__10762);
return title__delegate(args__6547__auto__);
});
title.cljs$core$IFn$_invoke$arity$variadic = title__delegate;
return title;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.tr = (function() { 
var tr__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__8381_10763 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__8382_10764 = null;var count__8383_10765 = 0;var i__8384_10766 = 0;while(true){
if((i__8384_10766 < count__8383_10765))
{var arg__6549__auto___10767 = cljs.core._nth.call(null,chunk__8382_10764,i__8384_10766);a__6548__auto__.push(arg__6549__auto___10767);
{
var G__10768 = seq__8381_10763;
var G__10769 = chunk__8382_10764;
var G__10770 = count__8383_10765;
var G__10771 = (i__8384_10766 + 1);
seq__8381_10763 = G__10768;
chunk__8382_10764 = G__10769;
count__8383_10765 = G__10770;
i__8384_10766 = G__10771;
continue;
}
} else
{var temp__4092__auto___10772 = cljs.core.seq.call(null,seq__8381_10763);if(temp__4092__auto___10772)
{var seq__8381_10773__$1 = temp__4092__auto___10772;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8381_10773__$1))
{var c__5632__auto___10774 = cljs.core.chunk_first.call(null,seq__8381_10773__$1);{
var G__10775 = cljs.core.chunk_rest.call(null,seq__8381_10773__$1);
var G__10776 = c__5632__auto___10774;
var G__10777 = cljs.core.count.call(null,c__5632__auto___10774);
var G__10778 = 0;
seq__8381_10763 = G__10775;
chunk__8382_10764 = G__10776;
count__8383_10765 = G__10777;
i__8384_10766 = G__10778;
continue;
}
} else
{var arg__6549__auto___10779 = cljs.core.first.call(null,seq__8381_10773__$1);a__6548__auto__.push(arg__6549__auto___10779);
{
var G__10780 = cljs.core.next.call(null,seq__8381_10773__$1);
var G__10781 = null;
var G__10782 = 0;
var G__10783 = 0;
seq__8381_10763 = G__10780;
chunk__8382_10764 = G__10781;
count__8383_10765 = G__10782;
i__8384_10766 = G__10783;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.tr.apply(null,a__6548__auto__);
};
var tr = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return tr__delegate.call(this,args__6547__auto__);};
tr.cljs$lang$maxFixedArity = 0;
tr.cljs$lang$applyTo = (function (arglist__10784){
var args__6547__auto__ = cljs.core.seq(arglist__10784);
return tr__delegate(args__6547__auto__);
});
tr.cljs$core$IFn$_invoke$arity$variadic = tr__delegate;
return tr;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.track = (function() { 
var track__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__8389_10785 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__8390_10786 = null;var count__8391_10787 = 0;var i__8392_10788 = 0;while(true){
if((i__8392_10788 < count__8391_10787))
{var arg__6549__auto___10789 = cljs.core._nth.call(null,chunk__8390_10786,i__8392_10788);a__6548__auto__.push(arg__6549__auto___10789);
{
var G__10790 = seq__8389_10785;
var G__10791 = chunk__8390_10786;
var G__10792 = count__8391_10787;
var G__10793 = (i__8392_10788 + 1);
seq__8389_10785 = G__10790;
chunk__8390_10786 = G__10791;
count__8391_10787 = G__10792;
i__8392_10788 = G__10793;
continue;
}
} else
{var temp__4092__auto___10794 = cljs.core.seq.call(null,seq__8389_10785);if(temp__4092__auto___10794)
{var seq__8389_10795__$1 = temp__4092__auto___10794;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8389_10795__$1))
{var c__5632__auto___10796 = cljs.core.chunk_first.call(null,seq__8389_10795__$1);{
var G__10797 = cljs.core.chunk_rest.call(null,seq__8389_10795__$1);
var G__10798 = c__5632__auto___10796;
var G__10799 = cljs.core.count.call(null,c__5632__auto___10796);
var G__10800 = 0;
seq__8389_10785 = G__10797;
chunk__8390_10786 = G__10798;
count__8391_10787 = G__10799;
i__8392_10788 = G__10800;
continue;
}
} else
{var arg__6549__auto___10801 = cljs.core.first.call(null,seq__8389_10795__$1);a__6548__auto__.push(arg__6549__auto___10801);
{
var G__10802 = cljs.core.next.call(null,seq__8389_10795__$1);
var G__10803 = null;
var G__10804 = 0;
var G__10805 = 0;
seq__8389_10785 = G__10802;
chunk__8390_10786 = G__10803;
count__8391_10787 = G__10804;
i__8392_10788 = G__10805;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.track.apply(null,a__6548__auto__);
};
var track = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return track__delegate.call(this,args__6547__auto__);};
track.cljs$lang$maxFixedArity = 0;
track.cljs$lang$applyTo = (function (arglist__10806){
var args__6547__auto__ = cljs.core.seq(arglist__10806);
return track__delegate(args__6547__auto__);
});
track.cljs$core$IFn$_invoke$arity$variadic = track__delegate;
return track;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.u = (function() { 
var u__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__8397_10807 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__8398_10808 = null;var count__8399_10809 = 0;var i__8400_10810 = 0;while(true){
if((i__8400_10810 < count__8399_10809))
{var arg__6549__auto___10811 = cljs.core._nth.call(null,chunk__8398_10808,i__8400_10810);a__6548__auto__.push(arg__6549__auto___10811);
{
var G__10812 = seq__8397_10807;
var G__10813 = chunk__8398_10808;
var G__10814 = count__8399_10809;
var G__10815 = (i__8400_10810 + 1);
seq__8397_10807 = G__10812;
chunk__8398_10808 = G__10813;
count__8399_10809 = G__10814;
i__8400_10810 = G__10815;
continue;
}
} else
{var temp__4092__auto___10816 = cljs.core.seq.call(null,seq__8397_10807);if(temp__4092__auto___10816)
{var seq__8397_10817__$1 = temp__4092__auto___10816;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8397_10817__$1))
{var c__5632__auto___10818 = cljs.core.chunk_first.call(null,seq__8397_10817__$1);{
var G__10819 = cljs.core.chunk_rest.call(null,seq__8397_10817__$1);
var G__10820 = c__5632__auto___10818;
var G__10821 = cljs.core.count.call(null,c__5632__auto___10818);
var G__10822 = 0;
seq__8397_10807 = G__10819;
chunk__8398_10808 = G__10820;
count__8399_10809 = G__10821;
i__8400_10810 = G__10822;
continue;
}
} else
{var arg__6549__auto___10823 = cljs.core.first.call(null,seq__8397_10817__$1);a__6548__auto__.push(arg__6549__auto___10823);
{
var G__10824 = cljs.core.next.call(null,seq__8397_10817__$1);
var G__10825 = null;
var G__10826 = 0;
var G__10827 = 0;
seq__8397_10807 = G__10824;
chunk__8398_10808 = G__10825;
count__8399_10809 = G__10826;
i__8400_10810 = G__10827;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.u.apply(null,a__6548__auto__);
};
var u = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return u__delegate.call(this,args__6547__auto__);};
u.cljs$lang$maxFixedArity = 0;
u.cljs$lang$applyTo = (function (arglist__10828){
var args__6547__auto__ = cljs.core.seq(arglist__10828);
return u__delegate(args__6547__auto__);
});
u.cljs$core$IFn$_invoke$arity$variadic = u__delegate;
return u;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.ul = (function() { 
var ul__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__8405_10829 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__8406_10830 = null;var count__8407_10831 = 0;var i__8408_10832 = 0;while(true){
if((i__8408_10832 < count__8407_10831))
{var arg__6549__auto___10833 = cljs.core._nth.call(null,chunk__8406_10830,i__8408_10832);a__6548__auto__.push(arg__6549__auto___10833);
{
var G__10834 = seq__8405_10829;
var G__10835 = chunk__8406_10830;
var G__10836 = count__8407_10831;
var G__10837 = (i__8408_10832 + 1);
seq__8405_10829 = G__10834;
chunk__8406_10830 = G__10835;
count__8407_10831 = G__10836;
i__8408_10832 = G__10837;
continue;
}
} else
{var temp__4092__auto___10838 = cljs.core.seq.call(null,seq__8405_10829);if(temp__4092__auto___10838)
{var seq__8405_10839__$1 = temp__4092__auto___10838;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8405_10839__$1))
{var c__5632__auto___10840 = cljs.core.chunk_first.call(null,seq__8405_10839__$1);{
var G__10841 = cljs.core.chunk_rest.call(null,seq__8405_10839__$1);
var G__10842 = c__5632__auto___10840;
var G__10843 = cljs.core.count.call(null,c__5632__auto___10840);
var G__10844 = 0;
seq__8405_10829 = G__10841;
chunk__8406_10830 = G__10842;
count__8407_10831 = G__10843;
i__8408_10832 = G__10844;
continue;
}
} else
{var arg__6549__auto___10845 = cljs.core.first.call(null,seq__8405_10839__$1);a__6548__auto__.push(arg__6549__auto___10845);
{
var G__10846 = cljs.core.next.call(null,seq__8405_10839__$1);
var G__10847 = null;
var G__10848 = 0;
var G__10849 = 0;
seq__8405_10829 = G__10846;
chunk__8406_10830 = G__10847;
count__8407_10831 = G__10848;
i__8408_10832 = G__10849;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.ul.apply(null,a__6548__auto__);
};
var ul = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ul__delegate.call(this,args__6547__auto__);};
ul.cljs$lang$maxFixedArity = 0;
ul.cljs$lang$applyTo = (function (arglist__10850){
var args__6547__auto__ = cljs.core.seq(arglist__10850);
return ul__delegate(args__6547__auto__);
});
ul.cljs$core$IFn$_invoke$arity$variadic = ul__delegate;
return ul;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.var$ = (function() { 
var var$__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__8413_10851 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__8414_10852 = null;var count__8415_10853 = 0;var i__8416_10854 = 0;while(true){
if((i__8416_10854 < count__8415_10853))
{var arg__6549__auto___10855 = cljs.core._nth.call(null,chunk__8414_10852,i__8416_10854);a__6548__auto__.push(arg__6549__auto___10855);
{
var G__10856 = seq__8413_10851;
var G__10857 = chunk__8414_10852;
var G__10858 = count__8415_10853;
var G__10859 = (i__8416_10854 + 1);
seq__8413_10851 = G__10856;
chunk__8414_10852 = G__10857;
count__8415_10853 = G__10858;
i__8416_10854 = G__10859;
continue;
}
} else
{var temp__4092__auto___10860 = cljs.core.seq.call(null,seq__8413_10851);if(temp__4092__auto___10860)
{var seq__8413_10861__$1 = temp__4092__auto___10860;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8413_10861__$1))
{var c__5632__auto___10862 = cljs.core.chunk_first.call(null,seq__8413_10861__$1);{
var G__10863 = cljs.core.chunk_rest.call(null,seq__8413_10861__$1);
var G__10864 = c__5632__auto___10862;
var G__10865 = cljs.core.count.call(null,c__5632__auto___10862);
var G__10866 = 0;
seq__8413_10851 = G__10863;
chunk__8414_10852 = G__10864;
count__8415_10853 = G__10865;
i__8416_10854 = G__10866;
continue;
}
} else
{var arg__6549__auto___10867 = cljs.core.first.call(null,seq__8413_10861__$1);a__6548__auto__.push(arg__6549__auto___10867);
{
var G__10868 = cljs.core.next.call(null,seq__8413_10861__$1);
var G__10869 = null;
var G__10870 = 0;
var G__10871 = 0;
seq__8413_10851 = G__10868;
chunk__8414_10852 = G__10869;
count__8415_10853 = G__10870;
i__8416_10854 = G__10871;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.var$.apply(null,a__6548__auto__);
};
var var$ = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return var$__delegate.call(this,args__6547__auto__);};
var$.cljs$lang$maxFixedArity = 0;
var$.cljs$lang$applyTo = (function (arglist__10872){
var args__6547__auto__ = cljs.core.seq(arglist__10872);
return var$__delegate(args__6547__auto__);
});
var$.cljs$core$IFn$_invoke$arity$variadic = var$__delegate;
return var$;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.video = (function() { 
var video__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__8421_10873 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__8422_10874 = null;var count__8423_10875 = 0;var i__8424_10876 = 0;while(true){
if((i__8424_10876 < count__8423_10875))
{var arg__6549__auto___10877 = cljs.core._nth.call(null,chunk__8422_10874,i__8424_10876);a__6548__auto__.push(arg__6549__auto___10877);
{
var G__10878 = seq__8421_10873;
var G__10879 = chunk__8422_10874;
var G__10880 = count__8423_10875;
var G__10881 = (i__8424_10876 + 1);
seq__8421_10873 = G__10878;
chunk__8422_10874 = G__10879;
count__8423_10875 = G__10880;
i__8424_10876 = G__10881;
continue;
}
} else
{var temp__4092__auto___10882 = cljs.core.seq.call(null,seq__8421_10873);if(temp__4092__auto___10882)
{var seq__8421_10883__$1 = temp__4092__auto___10882;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8421_10883__$1))
{var c__5632__auto___10884 = cljs.core.chunk_first.call(null,seq__8421_10883__$1);{
var G__10885 = cljs.core.chunk_rest.call(null,seq__8421_10883__$1);
var G__10886 = c__5632__auto___10884;
var G__10887 = cljs.core.count.call(null,c__5632__auto___10884);
var G__10888 = 0;
seq__8421_10873 = G__10885;
chunk__8422_10874 = G__10886;
count__8423_10875 = G__10887;
i__8424_10876 = G__10888;
continue;
}
} else
{var arg__6549__auto___10889 = cljs.core.first.call(null,seq__8421_10883__$1);a__6548__auto__.push(arg__6549__auto___10889);
{
var G__10890 = cljs.core.next.call(null,seq__8421_10883__$1);
var G__10891 = null;
var G__10892 = 0;
var G__10893 = 0;
seq__8421_10873 = G__10890;
chunk__8422_10874 = G__10891;
count__8423_10875 = G__10892;
i__8424_10876 = G__10893;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.video.apply(null,a__6548__auto__);
};
var video = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return video__delegate.call(this,args__6547__auto__);};
video.cljs$lang$maxFixedArity = 0;
video.cljs$lang$applyTo = (function (arglist__10894){
var args__6547__auto__ = cljs.core.seq(arglist__10894);
return video__delegate(args__6547__auto__);
});
video.cljs$core$IFn$_invoke$arity$variadic = video__delegate;
return video;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.wbr = (function() { 
var wbr__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__8429_10895 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__8430_10896 = null;var count__8431_10897 = 0;var i__8432_10898 = 0;while(true){
if((i__8432_10898 < count__8431_10897))
{var arg__6549__auto___10899 = cljs.core._nth.call(null,chunk__8430_10896,i__8432_10898);a__6548__auto__.push(arg__6549__auto___10899);
{
var G__10900 = seq__8429_10895;
var G__10901 = chunk__8430_10896;
var G__10902 = count__8431_10897;
var G__10903 = (i__8432_10898 + 1);
seq__8429_10895 = G__10900;
chunk__8430_10896 = G__10901;
count__8431_10897 = G__10902;
i__8432_10898 = G__10903;
continue;
}
} else
{var temp__4092__auto___10904 = cljs.core.seq.call(null,seq__8429_10895);if(temp__4092__auto___10904)
{var seq__8429_10905__$1 = temp__4092__auto___10904;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8429_10905__$1))
{var c__5632__auto___10906 = cljs.core.chunk_first.call(null,seq__8429_10905__$1);{
var G__10907 = cljs.core.chunk_rest.call(null,seq__8429_10905__$1);
var G__10908 = c__5632__auto___10906;
var G__10909 = cljs.core.count.call(null,c__5632__auto___10906);
var G__10910 = 0;
seq__8429_10895 = G__10907;
chunk__8430_10896 = G__10908;
count__8431_10897 = G__10909;
i__8432_10898 = G__10910;
continue;
}
} else
{var arg__6549__auto___10911 = cljs.core.first.call(null,seq__8429_10905__$1);a__6548__auto__.push(arg__6549__auto___10911);
{
var G__10912 = cljs.core.next.call(null,seq__8429_10905__$1);
var G__10913 = null;
var G__10914 = 0;
var G__10915 = 0;
seq__8429_10895 = G__10912;
chunk__8430_10896 = G__10913;
count__8431_10897 = G__10914;
i__8432_10898 = G__10915;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.wbr.apply(null,a__6548__auto__);
};
var wbr = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return wbr__delegate.call(this,args__6547__auto__);};
wbr.cljs$lang$maxFixedArity = 0;
wbr.cljs$lang$applyTo = (function (arglist__10916){
var args__6547__auto__ = cljs.core.seq(arglist__10916);
return wbr__delegate(args__6547__auto__);
});
wbr.cljs$core$IFn$_invoke$arity$variadic = wbr__delegate;
return wbr;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.circle = (function() { 
var circle__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__8437_10917 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__8438_10918 = null;var count__8439_10919 = 0;var i__8440_10920 = 0;while(true){
if((i__8440_10920 < count__8439_10919))
{var arg__6549__auto___10921 = cljs.core._nth.call(null,chunk__8438_10918,i__8440_10920);a__6548__auto__.push(arg__6549__auto___10921);
{
var G__10922 = seq__8437_10917;
var G__10923 = chunk__8438_10918;
var G__10924 = count__8439_10919;
var G__10925 = (i__8440_10920 + 1);
seq__8437_10917 = G__10922;
chunk__8438_10918 = G__10923;
count__8439_10919 = G__10924;
i__8440_10920 = G__10925;
continue;
}
} else
{var temp__4092__auto___10926 = cljs.core.seq.call(null,seq__8437_10917);if(temp__4092__auto___10926)
{var seq__8437_10927__$1 = temp__4092__auto___10926;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8437_10927__$1))
{var c__5632__auto___10928 = cljs.core.chunk_first.call(null,seq__8437_10927__$1);{
var G__10929 = cljs.core.chunk_rest.call(null,seq__8437_10927__$1);
var G__10930 = c__5632__auto___10928;
var G__10931 = cljs.core.count.call(null,c__5632__auto___10928);
var G__10932 = 0;
seq__8437_10917 = G__10929;
chunk__8438_10918 = G__10930;
count__8439_10919 = G__10931;
i__8440_10920 = G__10932;
continue;
}
} else
{var arg__6549__auto___10933 = cljs.core.first.call(null,seq__8437_10927__$1);a__6548__auto__.push(arg__6549__auto___10933);
{
var G__10934 = cljs.core.next.call(null,seq__8437_10927__$1);
var G__10935 = null;
var G__10936 = 0;
var G__10937 = 0;
seq__8437_10917 = G__10934;
chunk__8438_10918 = G__10935;
count__8439_10919 = G__10936;
i__8440_10920 = G__10937;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.circle.apply(null,a__6548__auto__);
};
var circle = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return circle__delegate.call(this,args__6547__auto__);};
circle.cljs$lang$maxFixedArity = 0;
circle.cljs$lang$applyTo = (function (arglist__10938){
var args__6547__auto__ = cljs.core.seq(arglist__10938);
return circle__delegate(args__6547__auto__);
});
circle.cljs$core$IFn$_invoke$arity$variadic = circle__delegate;
return circle;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.g = (function() { 
var g__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__8445_10939 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__8446_10940 = null;var count__8447_10941 = 0;var i__8448_10942 = 0;while(true){
if((i__8448_10942 < count__8447_10941))
{var arg__6549__auto___10943 = cljs.core._nth.call(null,chunk__8446_10940,i__8448_10942);a__6548__auto__.push(arg__6549__auto___10943);
{
var G__10944 = seq__8445_10939;
var G__10945 = chunk__8446_10940;
var G__10946 = count__8447_10941;
var G__10947 = (i__8448_10942 + 1);
seq__8445_10939 = G__10944;
chunk__8446_10940 = G__10945;
count__8447_10941 = G__10946;
i__8448_10942 = G__10947;
continue;
}
} else
{var temp__4092__auto___10948 = cljs.core.seq.call(null,seq__8445_10939);if(temp__4092__auto___10948)
{var seq__8445_10949__$1 = temp__4092__auto___10948;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8445_10949__$1))
{var c__5632__auto___10950 = cljs.core.chunk_first.call(null,seq__8445_10949__$1);{
var G__10951 = cljs.core.chunk_rest.call(null,seq__8445_10949__$1);
var G__10952 = c__5632__auto___10950;
var G__10953 = cljs.core.count.call(null,c__5632__auto___10950);
var G__10954 = 0;
seq__8445_10939 = G__10951;
chunk__8446_10940 = G__10952;
count__8447_10941 = G__10953;
i__8448_10942 = G__10954;
continue;
}
} else
{var arg__6549__auto___10955 = cljs.core.first.call(null,seq__8445_10949__$1);a__6548__auto__.push(arg__6549__auto___10955);
{
var G__10956 = cljs.core.next.call(null,seq__8445_10949__$1);
var G__10957 = null;
var G__10958 = 0;
var G__10959 = 0;
seq__8445_10939 = G__10956;
chunk__8446_10940 = G__10957;
count__8447_10941 = G__10958;
i__8448_10942 = G__10959;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.g.apply(null,a__6548__auto__);
};
var g = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return g__delegate.call(this,args__6547__auto__);};
g.cljs$lang$maxFixedArity = 0;
g.cljs$lang$applyTo = (function (arglist__10960){
var args__6547__auto__ = cljs.core.seq(arglist__10960);
return g__delegate(args__6547__auto__);
});
g.cljs$core$IFn$_invoke$arity$variadic = g__delegate;
return g;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.line = (function() { 
var line__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__8453_10961 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__8454_10962 = null;var count__8455_10963 = 0;var i__8456_10964 = 0;while(true){
if((i__8456_10964 < count__8455_10963))
{var arg__6549__auto___10965 = cljs.core._nth.call(null,chunk__8454_10962,i__8456_10964);a__6548__auto__.push(arg__6549__auto___10965);
{
var G__10966 = seq__8453_10961;
var G__10967 = chunk__8454_10962;
var G__10968 = count__8455_10963;
var G__10969 = (i__8456_10964 + 1);
seq__8453_10961 = G__10966;
chunk__8454_10962 = G__10967;
count__8455_10963 = G__10968;
i__8456_10964 = G__10969;
continue;
}
} else
{var temp__4092__auto___10970 = cljs.core.seq.call(null,seq__8453_10961);if(temp__4092__auto___10970)
{var seq__8453_10971__$1 = temp__4092__auto___10970;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8453_10971__$1))
{var c__5632__auto___10972 = cljs.core.chunk_first.call(null,seq__8453_10971__$1);{
var G__10973 = cljs.core.chunk_rest.call(null,seq__8453_10971__$1);
var G__10974 = c__5632__auto___10972;
var G__10975 = cljs.core.count.call(null,c__5632__auto___10972);
var G__10976 = 0;
seq__8453_10961 = G__10973;
chunk__8454_10962 = G__10974;
count__8455_10963 = G__10975;
i__8456_10964 = G__10976;
continue;
}
} else
{var arg__6549__auto___10977 = cljs.core.first.call(null,seq__8453_10971__$1);a__6548__auto__.push(arg__6549__auto___10977);
{
var G__10978 = cljs.core.next.call(null,seq__8453_10971__$1);
var G__10979 = null;
var G__10980 = 0;
var G__10981 = 0;
seq__8453_10961 = G__10978;
chunk__8454_10962 = G__10979;
count__8455_10963 = G__10980;
i__8456_10964 = G__10981;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.line.apply(null,a__6548__auto__);
};
var line = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return line__delegate.call(this,args__6547__auto__);};
line.cljs$lang$maxFixedArity = 0;
line.cljs$lang$applyTo = (function (arglist__10982){
var args__6547__auto__ = cljs.core.seq(arglist__10982);
return line__delegate(args__6547__auto__);
});
line.cljs$core$IFn$_invoke$arity$variadic = line__delegate;
return line;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.path = (function() { 
var path__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__8461_10983 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__8462_10984 = null;var count__8463_10985 = 0;var i__8464_10986 = 0;while(true){
if((i__8464_10986 < count__8463_10985))
{var arg__6549__auto___10987 = cljs.core._nth.call(null,chunk__8462_10984,i__8464_10986);a__6548__auto__.push(arg__6549__auto___10987);
{
var G__10988 = seq__8461_10983;
var G__10989 = chunk__8462_10984;
var G__10990 = count__8463_10985;
var G__10991 = (i__8464_10986 + 1);
seq__8461_10983 = G__10988;
chunk__8462_10984 = G__10989;
count__8463_10985 = G__10990;
i__8464_10986 = G__10991;
continue;
}
} else
{var temp__4092__auto___10992 = cljs.core.seq.call(null,seq__8461_10983);if(temp__4092__auto___10992)
{var seq__8461_10993__$1 = temp__4092__auto___10992;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8461_10993__$1))
{var c__5632__auto___10994 = cljs.core.chunk_first.call(null,seq__8461_10993__$1);{
var G__10995 = cljs.core.chunk_rest.call(null,seq__8461_10993__$1);
var G__10996 = c__5632__auto___10994;
var G__10997 = cljs.core.count.call(null,c__5632__auto___10994);
var G__10998 = 0;
seq__8461_10983 = G__10995;
chunk__8462_10984 = G__10996;
count__8463_10985 = G__10997;
i__8464_10986 = G__10998;
continue;
}
} else
{var arg__6549__auto___10999 = cljs.core.first.call(null,seq__8461_10993__$1);a__6548__auto__.push(arg__6549__auto___10999);
{
var G__11000 = cljs.core.next.call(null,seq__8461_10993__$1);
var G__11001 = null;
var G__11002 = 0;
var G__11003 = 0;
seq__8461_10983 = G__11000;
chunk__8462_10984 = G__11001;
count__8463_10985 = G__11002;
i__8464_10986 = G__11003;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.path.apply(null,a__6548__auto__);
};
var path = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return path__delegate.call(this,args__6547__auto__);};
path.cljs$lang$maxFixedArity = 0;
path.cljs$lang$applyTo = (function (arglist__11004){
var args__6547__auto__ = cljs.core.seq(arglist__11004);
return path__delegate(args__6547__auto__);
});
path.cljs$core$IFn$_invoke$arity$variadic = path__delegate;
return path;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.polygon = (function() { 
var polygon__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__8469_11005 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__8470_11006 = null;var count__8471_11007 = 0;var i__8472_11008 = 0;while(true){
if((i__8472_11008 < count__8471_11007))
{var arg__6549__auto___11009 = cljs.core._nth.call(null,chunk__8470_11006,i__8472_11008);a__6548__auto__.push(arg__6549__auto___11009);
{
var G__11010 = seq__8469_11005;
var G__11011 = chunk__8470_11006;
var G__11012 = count__8471_11007;
var G__11013 = (i__8472_11008 + 1);
seq__8469_11005 = G__11010;
chunk__8470_11006 = G__11011;
count__8471_11007 = G__11012;
i__8472_11008 = G__11013;
continue;
}
} else
{var temp__4092__auto___11014 = cljs.core.seq.call(null,seq__8469_11005);if(temp__4092__auto___11014)
{var seq__8469_11015__$1 = temp__4092__auto___11014;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8469_11015__$1))
{var c__5632__auto___11016 = cljs.core.chunk_first.call(null,seq__8469_11015__$1);{
var G__11017 = cljs.core.chunk_rest.call(null,seq__8469_11015__$1);
var G__11018 = c__5632__auto___11016;
var G__11019 = cljs.core.count.call(null,c__5632__auto___11016);
var G__11020 = 0;
seq__8469_11005 = G__11017;
chunk__8470_11006 = G__11018;
count__8471_11007 = G__11019;
i__8472_11008 = G__11020;
continue;
}
} else
{var arg__6549__auto___11021 = cljs.core.first.call(null,seq__8469_11015__$1);a__6548__auto__.push(arg__6549__auto___11021);
{
var G__11022 = cljs.core.next.call(null,seq__8469_11015__$1);
var G__11023 = null;
var G__11024 = 0;
var G__11025 = 0;
seq__8469_11005 = G__11022;
chunk__8470_11006 = G__11023;
count__8471_11007 = G__11024;
i__8472_11008 = G__11025;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.polygon.apply(null,a__6548__auto__);
};
var polygon = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return polygon__delegate.call(this,args__6547__auto__);};
polygon.cljs$lang$maxFixedArity = 0;
polygon.cljs$lang$applyTo = (function (arglist__11026){
var args__6547__auto__ = cljs.core.seq(arglist__11026);
return polygon__delegate(args__6547__auto__);
});
polygon.cljs$core$IFn$_invoke$arity$variadic = polygon__delegate;
return polygon;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.polyline = (function() { 
var polyline__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__8477_11027 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__8478_11028 = null;var count__8479_11029 = 0;var i__8480_11030 = 0;while(true){
if((i__8480_11030 < count__8479_11029))
{var arg__6549__auto___11031 = cljs.core._nth.call(null,chunk__8478_11028,i__8480_11030);a__6548__auto__.push(arg__6549__auto___11031);
{
var G__11032 = seq__8477_11027;
var G__11033 = chunk__8478_11028;
var G__11034 = count__8479_11029;
var G__11035 = (i__8480_11030 + 1);
seq__8477_11027 = G__11032;
chunk__8478_11028 = G__11033;
count__8479_11029 = G__11034;
i__8480_11030 = G__11035;
continue;
}
} else
{var temp__4092__auto___11036 = cljs.core.seq.call(null,seq__8477_11027);if(temp__4092__auto___11036)
{var seq__8477_11037__$1 = temp__4092__auto___11036;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8477_11037__$1))
{var c__5632__auto___11038 = cljs.core.chunk_first.call(null,seq__8477_11037__$1);{
var G__11039 = cljs.core.chunk_rest.call(null,seq__8477_11037__$1);
var G__11040 = c__5632__auto___11038;
var G__11041 = cljs.core.count.call(null,c__5632__auto___11038);
var G__11042 = 0;
seq__8477_11027 = G__11039;
chunk__8478_11028 = G__11040;
count__8479_11029 = G__11041;
i__8480_11030 = G__11042;
continue;
}
} else
{var arg__6549__auto___11043 = cljs.core.first.call(null,seq__8477_11037__$1);a__6548__auto__.push(arg__6549__auto___11043);
{
var G__11044 = cljs.core.next.call(null,seq__8477_11037__$1);
var G__11045 = null;
var G__11046 = 0;
var G__11047 = 0;
seq__8477_11027 = G__11044;
chunk__8478_11028 = G__11045;
count__8479_11029 = G__11046;
i__8480_11030 = G__11047;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.polyline.apply(null,a__6548__auto__);
};
var polyline = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return polyline__delegate.call(this,args__6547__auto__);};
polyline.cljs$lang$maxFixedArity = 0;
polyline.cljs$lang$applyTo = (function (arglist__11048){
var args__6547__auto__ = cljs.core.seq(arglist__11048);
return polyline__delegate(args__6547__auto__);
});
polyline.cljs$core$IFn$_invoke$arity$variadic = polyline__delegate;
return polyline;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.rect = (function() { 
var rect__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__8485_11049 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__8486_11050 = null;var count__8487_11051 = 0;var i__8488_11052 = 0;while(true){
if((i__8488_11052 < count__8487_11051))
{var arg__6549__auto___11053 = cljs.core._nth.call(null,chunk__8486_11050,i__8488_11052);a__6548__auto__.push(arg__6549__auto___11053);
{
var G__11054 = seq__8485_11049;
var G__11055 = chunk__8486_11050;
var G__11056 = count__8487_11051;
var G__11057 = (i__8488_11052 + 1);
seq__8485_11049 = G__11054;
chunk__8486_11050 = G__11055;
count__8487_11051 = G__11056;
i__8488_11052 = G__11057;
continue;
}
} else
{var temp__4092__auto___11058 = cljs.core.seq.call(null,seq__8485_11049);if(temp__4092__auto___11058)
{var seq__8485_11059__$1 = temp__4092__auto___11058;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8485_11059__$1))
{var c__5632__auto___11060 = cljs.core.chunk_first.call(null,seq__8485_11059__$1);{
var G__11061 = cljs.core.chunk_rest.call(null,seq__8485_11059__$1);
var G__11062 = c__5632__auto___11060;
var G__11063 = cljs.core.count.call(null,c__5632__auto___11060);
var G__11064 = 0;
seq__8485_11049 = G__11061;
chunk__8486_11050 = G__11062;
count__8487_11051 = G__11063;
i__8488_11052 = G__11064;
continue;
}
} else
{var arg__6549__auto___11065 = cljs.core.first.call(null,seq__8485_11059__$1);a__6548__auto__.push(arg__6549__auto___11065);
{
var G__11066 = cljs.core.next.call(null,seq__8485_11059__$1);
var G__11067 = null;
var G__11068 = 0;
var G__11069 = 0;
seq__8485_11049 = G__11066;
chunk__8486_11050 = G__11067;
count__8487_11051 = G__11068;
i__8488_11052 = G__11069;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.rect.apply(null,a__6548__auto__);
};
var rect = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return rect__delegate.call(this,args__6547__auto__);};
rect.cljs$lang$maxFixedArity = 0;
rect.cljs$lang$applyTo = (function (arglist__11070){
var args__6547__auto__ = cljs.core.seq(arglist__11070);
return rect__delegate(args__6547__auto__);
});
rect.cljs$core$IFn$_invoke$arity$variadic = rect__delegate;
return rect;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.svg = (function() { 
var svg__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__8493_11071 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__8494_11072 = null;var count__8495_11073 = 0;var i__8496_11074 = 0;while(true){
if((i__8496_11074 < count__8495_11073))
{var arg__6549__auto___11075 = cljs.core._nth.call(null,chunk__8494_11072,i__8496_11074);a__6548__auto__.push(arg__6549__auto___11075);
{
var G__11076 = seq__8493_11071;
var G__11077 = chunk__8494_11072;
var G__11078 = count__8495_11073;
var G__11079 = (i__8496_11074 + 1);
seq__8493_11071 = G__11076;
chunk__8494_11072 = G__11077;
count__8495_11073 = G__11078;
i__8496_11074 = G__11079;
continue;
}
} else
{var temp__4092__auto___11080 = cljs.core.seq.call(null,seq__8493_11071);if(temp__4092__auto___11080)
{var seq__8493_11081__$1 = temp__4092__auto___11080;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8493_11081__$1))
{var c__5632__auto___11082 = cljs.core.chunk_first.call(null,seq__8493_11081__$1);{
var G__11083 = cljs.core.chunk_rest.call(null,seq__8493_11081__$1);
var G__11084 = c__5632__auto___11082;
var G__11085 = cljs.core.count.call(null,c__5632__auto___11082);
var G__11086 = 0;
seq__8493_11071 = G__11083;
chunk__8494_11072 = G__11084;
count__8495_11073 = G__11085;
i__8496_11074 = G__11086;
continue;
}
} else
{var arg__6549__auto___11087 = cljs.core.first.call(null,seq__8493_11081__$1);a__6548__auto__.push(arg__6549__auto___11087);
{
var G__11088 = cljs.core.next.call(null,seq__8493_11081__$1);
var G__11089 = null;
var G__11090 = 0;
var G__11091 = 0;
seq__8493_11071 = G__11088;
chunk__8494_11072 = G__11089;
count__8495_11073 = G__11090;
i__8496_11074 = G__11091;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.svg.apply(null,a__6548__auto__);
};
var svg = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return svg__delegate.call(this,args__6547__auto__);};
svg.cljs$lang$maxFixedArity = 0;
svg.cljs$lang$applyTo = (function (arglist__11092){
var args__6547__auto__ = cljs.core.seq(arglist__11092);
return svg__delegate(args__6547__auto__);
});
svg.cljs$core$IFn$_invoke$arity$variadic = svg__delegate;
return svg;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.text = (function() { 
var text__delegate = function (args__6547__auto__){var a__6548__auto__ = [];a__6548__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6547__auto__)));
var seq__7805_11093 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6547__auto__));var chunk__7806_11094 = null;var count__7807_11095 = 0;var i__7808_11096 = 0;while(true){
if((i__7808_11096 < count__7807_11095))
{var arg__6549__auto___11097 = cljs.core._nth.call(null,chunk__7806_11094,i__7808_11096);a__6548__auto__.push(arg__6549__auto___11097);
{
var G__11098 = seq__7805_11093;
var G__11099 = chunk__7806_11094;
var G__11100 = count__7807_11095;
var G__11101 = (i__7808_11096 + 1);
seq__7805_11093 = G__11098;
chunk__7806_11094 = G__11099;
count__7807_11095 = G__11100;
i__7808_11096 = G__11101;
continue;
}
} else
{var temp__4092__auto___11102 = cljs.core.seq.call(null,seq__7805_11093);if(temp__4092__auto___11102)
{var seq__7805_11103__$1 = temp__4092__auto___11102;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7805_11103__$1))
{var c__5632__auto___11104 = cljs.core.chunk_first.call(null,seq__7805_11103__$1);{
var G__11105 = cljs.core.chunk_rest.call(null,seq__7805_11103__$1);
var G__11106 = c__5632__auto___11104;
var G__11107 = cljs.core.count.call(null,c__5632__auto___11104);
var G__11108 = 0;
seq__7805_11093 = G__11105;
chunk__7806_11094 = G__11106;
count__7807_11095 = G__11107;
i__7808_11096 = G__11108;
continue;
}
} else
{var arg__6549__auto___11109 = cljs.core.first.call(null,seq__7805_11103__$1);a__6548__auto__.push(arg__6549__auto___11109);
{
var G__11110 = cljs.core.next.call(null,seq__7805_11103__$1);
var G__11111 = null;
var G__11112 = 0;
var G__11113 = 0;
seq__7805_11093 = G__11110;
chunk__7806_11094 = G__11111;
count__7807_11095 = G__11112;
i__7808_11096 = G__11113;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.text.apply(null,a__6548__auto__);
};
var text = function (var_args){
var args__6547__auto__ = null;if (arguments.length > 0) {
  args__6547__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return text__delegate.call(this,args__6547__auto__);};
text.cljs$lang$maxFixedArity = 0;
text.cljs$lang$applyTo = (function (arglist__11114){
var args__6547__auto__ = cljs.core.seq(arglist__11114);
return text__delegate(args__6547__auto__);
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
lt.plugins.elm_light.autocompleter.handle_keypress = (function handle_keypress(p__7523,ev){var map__7526 = p__7523;var map__7526__$1 = ((cljs.core.seq_QMARK_.call(null,map__7526))?cljs.core.apply.call(null,cljs.core.hash_map,map__7526):map__7526);var props = map__7526__$1;var on_cancel = cljs.core.get.call(null,map__7526__$1,new cljs.core.Keyword(null,"on-cancel","on-cancel",600765850));var on_select = cljs.core.get.call(null,map__7526__$1,new cljs.core.Keyword(null,"on-select","on-select",1062468636));var on_down = cljs.core.get.call(null,map__7526__$1,new cljs.core.Keyword(null,"on-down","on-down",3936419650));var on_up = cljs.core.get.call(null,map__7526__$1,new cljs.core.Keyword(null,"on-up","on-up",1119739067));var kk = ev.which;var G__7527 = kk;if(cljs.core._EQ_.call(null,27,G__7527))
{ev.preventDefault();
ev.target.value = "";
return on_cancel.call(null);
} else
{if(cljs.core._EQ_.call(null,13,G__7527))
{ev.preventDefault();
var temp__4092__auto___7543 = lt.plugins.elm_light.autocompleter.find_active.call(null,new cljs.core.Keyword(null,"items","items",1114430258).cljs$core$IFn$_invoke$arity$1(props));if(cljs.core.truth_(temp__4092__auto___7543))
{var active_7544 = temp__4092__auto___7543;ev.target.value = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(active_7544);
} else
{}
return on_select.call(null);
} else
{if(cljs.core._EQ_.call(null,40,G__7527))
{ev.preventDefault();
return on_down.call(null);
} else
{if(cljs.core._EQ_.call(null,38,G__7527))
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
return (function (p1__7528_SHARP_){return "autocomplete-dropdown-item row".concat((cljs.core.truth_(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(p1__7528_SHARP_))?" autocomplete-active":""));
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
lt.plugins.elm_light.autocompleter.Adder = quiescent.component.call(null,(function (p__7529){var map__7530 = p__7529;var map__7530__$1 = ((cljs.core.seq_QMARK_.call(null,map__7530))?cljs.core.apply.call(null,cljs.core.hash_map,map__7530):map__7530);var props = map__7530__$1;var disabled = cljs.core.get.call(null,map__7530__$1,new cljs.core.Keyword(null,"disabled","disabled",1284845038));var on_add_package = cljs.core.get.call(null,map__7530__$1,new cljs.core.Keyword(null,"on-add-package","on-add-package",3601701790));return quiescent.dom.button.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",1004015509),"btn",new cljs.core.Keyword(null,"disabled","disabled",1284845038),disabled,new cljs.core.Keyword(null,"onClick","onClick",3956969051),((function (map__7530,map__7530__$1,props,disabled,on_add_package){
return (function (){return on_add_package.call(null);
});})(map__7530,map__7530__$1,props,disabled,on_add_package))
], null),"Add package");
}));
/**
* 
*/
lt.plugins.elm_light.autocompleter.Versions = quiescent.component.call(null,(function (props){return cljs.core.apply.call(null,quiescent.dom.select,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",1004015509),"versions",new cljs.core.Keyword(null,"value","value",1125876963),new cljs.core.Keyword(null,"version","version",1365512266).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"onChange","onChange",2050678241),(function (p1__7531_SHARP_){return new cljs.core.Keyword(null,"on-change-version","on-change-version",822058203).cljs$core$IFn$_invoke$arity$1(props).call(null,p1__7531_SHARP_.target.value);
})], null),cljs.core.map.call(null,(function (p1__7532_SHARP_){return quiescent.dom.option.call(null,cljs.core.PersistentArrayMap.EMPTY,p1__7532_SHARP_);
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
clojure.walk.keywordize_keys = (function keywordize_keys(m){var f = (function (p__18365){var vec__18366 = p__18365;var k = cljs.core.nth.call(null,vec__18366,0,null);var v = cljs.core.nth.call(null,vec__18366,1,null);if(typeof k === 'string')
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
clojure.walk.stringify_keys = (function stringify_keys(m){var f = (function (p__18369){var vec__18370 = p__18369;var k = cljs.core.nth.call(null,vec__18370,0,null);var v = cljs.core.nth.call(null,vec__18370,1,null);if((k instanceof cljs.core.Keyword))
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
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.files');
goog.require('lt.objs.plugins');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor.pool');
goog.require('fetch.core');
goog.require('fetch.core');
lt.plugins.elm_light.utils.elm_plugin_dir = lt.objs.plugins.find_plugin.call(null,"elm-light");
lt.plugins.elm_light.utils.str_contains = (function str_contains(s,v){return (s.indexOf(v) > -1);
});
lt.plugins.elm_light.utils.find_symbol = (function find_symbol(ed,pos){var curr_tok = lt.objs.editor.__GT_token.call(null,ed,pos);var G__18403 = new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(curr_tok);if(cljs.core._EQ_.call(null,"variable-3",G__18403))
{return [cljs.core.str(find_symbol.call(null,ed,cljs.core.assoc.call(null,pos,new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(curr_tok)))),cljs.core.str(new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(curr_tok))].join('');
} else
{if(cljs.core._EQ_.call(null,"variable-2",G__18403))
{return [cljs.core.str(find_symbol.call(null,ed,cljs.core.assoc.call(null,pos,new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(curr_tok)))),cljs.core.str(new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(curr_tok))].join('');
} else
{if(cljs.core._EQ_.call(null,"variable",G__18403))
{return [cljs.core.str(find_symbol.call(null,ed,cljs.core.assoc.call(null,pos,new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(curr_tok)))),cljs.core.str(new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(curr_tok))].join('');
} else
{if(cljs.core._EQ_.call(null,"qualifier",G__18403))
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
return (function (p__18410){var vec__18411 = p__18410;var _ = cljs.core.nth.call(null,vec__18411,0,null);var vs = cljs.core.nth.call(null,vec__18411,1,null);return cljs.core.apply.call(null,cljs.core.merge,vs);
});})(pkg_json,deps_json))
,cljs.core.group_by.call(null,new cljs.core.Keyword(null,"package","package",4501809080),cljs.core.concat.call(null,cljs.core.mapv.call(null,((function (pkg_json,deps_json){
return (function (p__18412){var vec__18413 = p__18412;var k = cljs.core.nth.call(null,vec__18413,0,null);var v = cljs.core.nth.call(null,vec__18413,1,null);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"package","package",4501809080),lt.plugins.elm_light.utils.nskw__GT_name.call(null,k),new cljs.core.Keyword(null,"exact","exact",1110851185),v], null);
});})(pkg_json,deps_json))
,lt.plugins.elm_light.utils.parse_json_file.call(null,deps_json)),cljs.core.mapv.call(null,((function (pkg_json,deps_json){
return (function (p__18414){var vec__18415 = p__18414;var k = cljs.core.nth.call(null,vec__18415,0,null);var v = cljs.core.nth.call(null,vec__18415,1,null);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"package","package",4501809080),lt.plugins.elm_light.utils.nskw__GT_name.call(null,k),new cljs.core.Keyword(null,"range","range",1122184367),v], null);
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
lt.plugins.elm_light.graph.find_package_by_name = (function find_package_by_name(this$,name){return cljs.core.some.call(null,(function (p1__11290_SHARP_){if(cljs.core._EQ_.call(null,lt.plugins.elm_light.graph.lower.call(null,new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(p1__11290_SHARP_)),lt.plugins.elm_light.graph.lower.call(null,name)))
{return p1__11290_SHARP_;
} else
{return null;
}
}),new cljs.core.Keyword(null,"all-packages","all-packages",1123981067).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
});
lt.plugins.elm_light.graph.dependency_graph_ui = (function dependency_graph_ui(this$){var e__6289__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.graph","div.graph",2030351651),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dependency-graph","div.dependency-graph",3039800187),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg:svg","svg:svg",3472817088),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",1127031096),"650",new cljs.core.Keyword(null,"height","height",4087841945),"680"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg:g","svg:g",1123725379),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",2066570974),"translate(20,20)"], null)], null)], null)], null)], null));var seq__11297_11348 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__11298_11349 = null;var count__11299_11350 = 0;var i__11300_11351 = 0;while(true){
if((i__11300_11351 < count__11299_11350))
{var vec__11301_11352 = cljs.core._nth.call(null,chunk__11298_11349,i__11300_11351);var ev__6290__auto___11353 = cljs.core.nth.call(null,vec__11301_11352,0,null);var func__6291__auto___11354 = cljs.core.nth.call(null,vec__11301_11352,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___11353,func__6291__auto___11354);
{
var G__11355 = seq__11297_11348;
var G__11356 = chunk__11298_11349;
var G__11357 = count__11299_11350;
var G__11358 = (i__11300_11351 + 1);
seq__11297_11348 = G__11355;
chunk__11298_11349 = G__11356;
count__11299_11350 = G__11357;
i__11300_11351 = G__11358;
continue;
}
} else
{var temp__4092__auto___11359 = cljs.core.seq.call(null,seq__11297_11348);if(temp__4092__auto___11359)
{var seq__11297_11360__$1 = temp__4092__auto___11359;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11297_11360__$1))
{var c__5632__auto___11361 = cljs.core.chunk_first.call(null,seq__11297_11360__$1);{
var G__11362 = cljs.core.chunk_rest.call(null,seq__11297_11360__$1);
var G__11363 = c__5632__auto___11361;
var G__11364 = cljs.core.count.call(null,c__5632__auto___11361);
var G__11365 = 0;
seq__11297_11348 = G__11362;
chunk__11298_11349 = G__11363;
count__11299_11350 = G__11364;
i__11300_11351 = G__11365;
continue;
}
} else
{var vec__11302_11366 = cljs.core.first.call(null,seq__11297_11360__$1);var ev__6290__auto___11367 = cljs.core.nth.call(null,vec__11302_11366,0,null);var func__6291__auto___11368 = cljs.core.nth.call(null,vec__11302_11366,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___11367,func__6291__auto___11368);
{
var G__11369 = cljs.core.next.call(null,seq__11297_11360__$1);
var G__11370 = null;
var G__11371 = 0;
var G__11372 = 0;
seq__11297_11348 = G__11369;
chunk__11298_11349 = G__11370;
count__11299_11350 = G__11371;
i__11300_11351 = G__11372;
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
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.graph","dependency-graph","lt.plugins.elm-light.graph/dependency-graph",2371711049),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elm.graph.dependency","elm.graph.dependency",658564005)], null),new cljs.core.Keyword(null,"name","name",1017277949),"Dependency graph",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){lt.plugins.elm_light.utils.fetch_all_packages.call(null,(function (p1__11303_SHARP_){return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"all-packages","all-packages",1123981067),p1__11303_SHARP_], null));
}));
return lt.plugins.elm_light.graph.dependency_graph_ui.call(null,this$);
}));
lt.plugins.elm_light.graph.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___11373 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___11373))
{var ts_11374 = temp__4092__auto___11373;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_11374))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_11374);
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
lt.plugins.elm_light.graph.create_graph = (function create_graph(data){var g = (new lt.plugins.elm_light.graph.dagreD3.graphlib.Graph()).setGraph({});var seq__11312_11375 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"nodes","nodes",1118897699).cljs$core$IFn$_invoke$arity$1(data));var chunk__11313_11376 = null;var count__11314_11377 = 0;var i__11315_11378 = 0;while(true){
if((i__11315_11378 < count__11314_11377))
{var x_11379 = cljs.core._nth.call(null,chunk__11313_11376,i__11315_11378);g.setNode(lt.plugins.elm_light.graph.dep_id.call(null,x_11379),lt.plugins.elm_light.graph.node_label.call(null,x_11379));
{
var G__11380 = seq__11312_11375;
var G__11381 = chunk__11313_11376;
var G__11382 = count__11314_11377;
var G__11383 = (i__11315_11378 + 1);
seq__11312_11375 = G__11380;
chunk__11313_11376 = G__11381;
count__11314_11377 = G__11382;
i__11315_11378 = G__11383;
continue;
}
} else
{var temp__4092__auto___11384 = cljs.core.seq.call(null,seq__11312_11375);if(temp__4092__auto___11384)
{var seq__11312_11385__$1 = temp__4092__auto___11384;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11312_11385__$1))
{var c__5632__auto___11386 = cljs.core.chunk_first.call(null,seq__11312_11385__$1);{
var G__11387 = cljs.core.chunk_rest.call(null,seq__11312_11385__$1);
var G__11388 = c__5632__auto___11386;
var G__11389 = cljs.core.count.call(null,c__5632__auto___11386);
var G__11390 = 0;
seq__11312_11375 = G__11387;
chunk__11313_11376 = G__11388;
count__11314_11377 = G__11389;
i__11315_11378 = G__11390;
continue;
}
} else
{var x_11391 = cljs.core.first.call(null,seq__11312_11385__$1);g.setNode(lt.plugins.elm_light.graph.dep_id.call(null,x_11391),lt.plugins.elm_light.graph.node_label.call(null,x_11391));
{
var G__11392 = cljs.core.next.call(null,seq__11312_11385__$1);
var G__11393 = null;
var G__11394 = 0;
var G__11395 = 0;
seq__11312_11375 = G__11392;
chunk__11313_11376 = G__11393;
count__11314_11377 = G__11394;
i__11315_11378 = G__11395;
continue;
}
}
} else
{}
}
break;
}
var seq__11316_11396 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"edges","edges",1110261192).cljs$core$IFn$_invoke$arity$1(data));var chunk__11317_11397 = null;var count__11318_11398 = 0;var i__11319_11399 = 0;while(true){
if((i__11319_11399 < count__11318_11398))
{var x_11400 = cljs.core._nth.call(null,chunk__11317_11397,i__11319_11399);g.setEdge(new cljs.core.Keyword(null,"a","a",1013904339).cljs$core$IFn$_invoke$arity$1(x_11400),new cljs.core.Keyword(null,"b","b",1013904340).cljs$core$IFn$_invoke$arity$1(x_11400),{"style": (cljs.core.truth_(new cljs.core.Keyword(null,"transitive","transitive",3584713111).cljs$core$IFn$_invoke$arity$1(x_11400))?"stroke-dasharray: 5, 5;":null), "label": new cljs.core.Keyword(null,"label","label",1116631654).cljs$core$IFn$_invoke$arity$1(x_11400)});
{
var G__11401 = seq__11316_11396;
var G__11402 = chunk__11317_11397;
var G__11403 = count__11318_11398;
var G__11404 = (i__11319_11399 + 1);
seq__11316_11396 = G__11401;
chunk__11317_11397 = G__11402;
count__11318_11398 = G__11403;
i__11319_11399 = G__11404;
continue;
}
} else
{var temp__4092__auto___11405 = cljs.core.seq.call(null,seq__11316_11396);if(temp__4092__auto___11405)
{var seq__11316_11406__$1 = temp__4092__auto___11405;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11316_11406__$1))
{var c__5632__auto___11407 = cljs.core.chunk_first.call(null,seq__11316_11406__$1);{
var G__11408 = cljs.core.chunk_rest.call(null,seq__11316_11406__$1);
var G__11409 = c__5632__auto___11407;
var G__11410 = cljs.core.count.call(null,c__5632__auto___11407);
var G__11411 = 0;
seq__11316_11396 = G__11408;
chunk__11317_11397 = G__11409;
count__11318_11398 = G__11410;
i__11319_11399 = G__11411;
continue;
}
} else
{var x_11412 = cljs.core.first.call(null,seq__11316_11406__$1);g.setEdge(new cljs.core.Keyword(null,"a","a",1013904339).cljs$core$IFn$_invoke$arity$1(x_11412),new cljs.core.Keyword(null,"b","b",1013904340).cljs$core$IFn$_invoke$arity$1(x_11412),{"style": (cljs.core.truth_(new cljs.core.Keyword(null,"transitive","transitive",3584713111).cljs$core$IFn$_invoke$arity$1(x_11412))?"stroke-dasharray: 5, 5;":null), "label": new cljs.core.Keyword(null,"label","label",1116631654).cljs$core$IFn$_invoke$arity$1(x_11412)});
{
var G__11413 = cljs.core.next.call(null,seq__11316_11406__$1);
var G__11414 = null;
var G__11415 = 0;
var G__11416 = 0;
seq__11316_11396 = G__11413;
chunk__11317_11397 = G__11414;
count__11318_11398 = G__11415;
i__11319_11399 = G__11416;
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
}),cljs.core.map.call(null,(function (p__11324){var vec__11325 = p__11324;var k = cljs.core.nth.call(null,vec__11325,0,null);var v = cljs.core.nth.call(null,vec__11325,1,null);return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"package","package",4501809080),new cljs.core.Keyword(null,"range","range",1122184367),new cljs.core.Keyword(null,"version","version",1365512266)],[lt.plugins.elm_light.utils.nskw__GT_name.call(null,k),v,new cljs.core.Keyword(null,"version","version",1365512266).cljs$core$IFn$_invoke$arity$1(cljs.core.some.call(null,((function (vec__11325,k,v){
return (function (p1__11320_SHARP_){if(cljs.core._EQ_.call(null,lt.plugins.elm_light.utils.nskw__GT_name.call(null,k),new cljs.core.Keyword(null,"package","package",4501809080).cljs$core$IFn$_invoke$arity$1(p1__11320_SHARP_)))
{return p1__11320_SHARP_;
} else
{return null;
}
});})(vec__11325,k,v))
,new cljs.core.Keyword(null,"packages","packages",1764771935).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))))]);
}),new cljs.core.Keyword(null,"dependencies","dependencies",1517678747).cljs$core$IFn$_invoke$arity$1(pkg_json))));if(temp__4092__auto__)
{var edges = temp__4092__auto__;lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",1016980252),new cljs.core.Keyword(null,"edges","edges",1110261192)], null),((function (edges,temp__4092__auto__){
return (function (p1__11321_SHARP_){return cljs.core.concat.call(null,p1__11321_SHARP_,edges);
});})(edges,temp__4092__auto__))
);
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"elm.graph.render","elm.graph.render",2076182000));
} else
{return null;
}
});
lt.plugins.elm_light.graph.__BEH__on_get_transitives = (function __BEH__on_get_transitives(this$){var transitives = cljs.core.remove.call(null,new cljs.core.Keyword(null,"range","range",1122184367),new cljs.core.Keyword(null,"packages","packages",1764771935).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))));lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",1016980252),new cljs.core.Keyword(null,"nodes","nodes",1118897699)], null),((function (transitives){
return (function (p1__11326_SHARP_){return cljs.core.concat.call(null,p1__11326_SHARP_,transitives);
});})(transitives))
);
lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"elm.graph.render","elm.graph.render",2076182000));
var seq__11331 = cljs.core.seq.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"version","version",1365512266),new cljs.core.Keyword(null,"packages","packages",1764771935).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))));var chunk__11332 = null;var count__11333 = 0;var i__11334 = 0;while(true){
if((i__11334 < count__11333))
{var x = cljs.core._nth.call(null,chunk__11332,i__11334);lt.plugins.elm_light.graph.get_package_json.call(null,x,cljs.core.partial.call(null,lt.plugins.elm_light.graph.add_edges_for_dep,this$,x));
{
var G__11417 = seq__11331;
var G__11418 = chunk__11332;
var G__11419 = count__11333;
var G__11420 = (i__11334 + 1);
seq__11331 = G__11417;
chunk__11332 = G__11418;
count__11333 = G__11419;
i__11334 = G__11420;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__11331);if(temp__4092__auto__)
{var seq__11331__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11331__$1))
{var c__5632__auto__ = cljs.core.chunk_first.call(null,seq__11331__$1);{
var G__11421 = cljs.core.chunk_rest.call(null,seq__11331__$1);
var G__11422 = c__5632__auto__;
var G__11423 = cljs.core.count.call(null,c__5632__auto__);
var G__11424 = 0;
seq__11331 = G__11421;
chunk__11332 = G__11422;
count__11333 = G__11423;
i__11334 = G__11424;
continue;
}
} else
{var x = cljs.core.first.call(null,seq__11331__$1);lt.plugins.elm_light.graph.get_package_json.call(null,x,cljs.core.partial.call(null,lt.plugins.elm_light.graph.add_edges_for_dep,this$,x));
{
var G__11425 = cljs.core.next.call(null,seq__11331__$1);
var G__11426 = null;
var G__11427 = 0;
var G__11428 = 0;
seq__11331 = G__11425;
chunk__11332 = G__11426;
count__11333 = G__11427;
i__11334 = G__11428;
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
lt.plugins.elm_light.graph.get_dependency_data = (function get_dependency_data(project_path){var pkgs = cljs.core.map.call(null,(function (p1__11336_SHARP_){return cljs.core.assoc.call(null,p1__11336_SHARP_,new cljs.core.Keyword(null,"summary","summary",3451231000),new cljs.core.Keyword(null,"summary","summary",3451231000).cljs$core$IFn$_invoke$arity$1(lt.plugins.elm_light.graph.find_package_by_name.call(null,lt.plugins.elm_light.graph.dependency_graph,new cljs.core.Keyword(null,"package","package",4501809080).cljs$core$IFn$_invoke$arity$1(p1__11336_SHARP_))));
}),cljs.core.map.call(null,(function (p1__11335_SHARP_){return clojure.set.rename_keys.call(null,p1__11335_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"exact","exact",1110851185),new cljs.core.Keyword(null,"version","version",1365512266)], null));
}),lt.plugins.elm_light.utils.get_project_deps.call(null,project_path)));var direct = cljs.core.filter.call(null,new cljs.core.Keyword(null,"range","range",1122184367),pkgs);var rootVersion = new cljs.core.Keyword(null,"version","version",1365512266).cljs$core$IFn$_invoke$arity$1(lt.plugins.elm_light.utils.parse_json_file.call(null,lt.objs.files.join.call(null,project_path,"elm-package.json")));var root = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"package","package",4501809080),lt.objs.files.basename.call(null,project_path),new cljs.core.Keyword(null,"version","version",1365512266),rootVersion,new cljs.core.Keyword(null,"shape","shape",1123304211),"ellipse"], null);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"packages","packages",1764771935),pkgs,new cljs.core.Keyword(null,"nodes","nodes",1118897699),cljs.core.conj.call(null,direct,root),new cljs.core.Keyword(null,"edges","edges",1110261192),cljs.core.map.call(null,((function (pkgs,direct,rootVersion,root){
return (function (p1__11337_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"label","label",1116631654)],[lt.plugins.elm_light.graph.dep_id.call(null,root),lt.plugins.elm_light.graph.dep_id.call(null,p1__11337_SHARP_),new cljs.core.Keyword(null,"range","range",1122184367).cljs$core$IFn$_invoke$arity$1(p1__11337_SHARP_)]);
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
return (function (p__18302){var vec__18303 = p__18302;var k = cljs.core.nth.call(null,vec__18303,0,null);var v = cljs.core.nth.call(null,vec__18303,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.elm_light.utils.nskw__GT_name.call(null,k),v], null);
});})(pkg_file))
,deps)),pkg);
});})(pkg_file))
)));
});
lt.plugins.elm_light.packages.project_wrapper = (function project_wrapper(this$){var e__6289__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.elm","div.elm",2686466363),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"project-packages-wrapper"], null),"Retrieving project package info..."], null)], null));var seq__18310_18335 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__18311_18336 = null;var count__18312_18337 = 0;var i__18313_18338 = 0;while(true){
if((i__18313_18338 < count__18312_18337))
{var vec__18314_18339 = cljs.core._nth.call(null,chunk__18311_18336,i__18313_18338);var ev__6290__auto___18340 = cljs.core.nth.call(null,vec__18314_18339,0,null);var func__6291__auto___18341 = cljs.core.nth.call(null,vec__18314_18339,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___18340,func__6291__auto___18341);
{
var G__18342 = seq__18310_18335;
var G__18343 = chunk__18311_18336;
var G__18344 = count__18312_18337;
var G__18345 = (i__18313_18338 + 1);
seq__18310_18335 = G__18342;
chunk__18311_18336 = G__18343;
count__18312_18337 = G__18344;
i__18313_18338 = G__18345;
continue;
}
} else
{var temp__4092__auto___18346 = cljs.core.seq.call(null,seq__18310_18335);if(temp__4092__auto___18346)
{var seq__18310_18347__$1 = temp__4092__auto___18346;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18310_18347__$1))
{var c__5632__auto___18348 = cljs.core.chunk_first.call(null,seq__18310_18347__$1);{
var G__18349 = cljs.core.chunk_rest.call(null,seq__18310_18347__$1);
var G__18350 = c__5632__auto___18348;
var G__18351 = cljs.core.count.call(null,c__5632__auto___18348);
var G__18352 = 0;
seq__18310_18335 = G__18349;
chunk__18311_18336 = G__18350;
count__18312_18337 = G__18351;
i__18313_18338 = G__18352;
continue;
}
} else
{var vec__18315_18353 = cljs.core.first.call(null,seq__18310_18347__$1);var ev__6290__auto___18354 = cljs.core.nth.call(null,vec__18315_18353,0,null);var func__6291__auto___18355 = cljs.core.nth.call(null,vec__18315_18353,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___18354,func__6291__auto___18355);
{
var G__18356 = cljs.core.next.call(null,seq__18310_18347__$1);
var G__18357 = null;
var G__18358 = 0;
var G__18359 = 0;
seq__18310_18335 = G__18356;
chunk__18311_18336 = G__18357;
count__18312_18337 = G__18358;
i__18313_18338 = G__18359;
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
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.packages","elm-packages","lt.plugins.elm-light.packages/elm-packages",4552372902),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elm.packages","elm.packages",3931311271),null], null), null),new cljs.core.Keyword(null,"label","label",1116631654),"Elm project packages",new cljs.core.Keyword(null,"name","name",1017277949),"Elm project packages",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){lt.plugins.elm_light.utils.fetch_all_packages.call(null,(function (p1__18316_SHARP_){return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"all-packages","all-packages",1123981067),p1__18316_SHARP_], null));
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
lt.plugins.elm_light.packages.idx_active = (function idx_active(items){return cljs.core.first.call(null,cljs.core.keep_indexed.call(null,(function (p1__18318_SHARP_,p2__18317_SHARP_){if(cljs.core.truth_(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(p2__18317_SHARP_)))
{return p1__18318_SHARP_;
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
lt.plugins.elm_light.packages.on_pkg_sel = (function on_pkg_sel(){var items_18360 = new cljs.core.Keyword(null,"ac-packages","ac-packages",1548109226).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.elm_light.packages.elm_packages));var temp__4090__auto___18361 = lt.plugins.elm_light.packages.idx_active.call(null,items_18360);if(cljs.core.truth_(temp__4090__auto___18361))
{var idx_18362 = temp__4090__auto___18361;lt.object.assoc_in_BANG_.call(null,lt.plugins.elm_light.packages.elm_packages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ac-versions","ac-versions",3107155800)], null),new cljs.core.Keyword(null,"versions","versions",3323818509).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,items_18360,idx_18362)));
lt.object.assoc_in_BANG_.call(null,lt.plugins.elm_light.packages.elm_packages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ac-version","ac-version",2051259807)], null),cljs.core.first.call(null,new cljs.core.Keyword(null,"versions","versions",3323818509).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,items_18360,idx_18362))));
lt.object.assoc_in_BANG_.call(null,lt.plugins.elm_light.packages.elm_packages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ac-package","ac-package",892589325)], null),new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,items_18360,idx_18362)));
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
return (function (p1__18319_SHARP_){if(cljs.core._EQ_.call(null,p1__18319_SHARP_,0))
{lt.objs.notifos.done_working.call(null);
} else
{lt.objs.notifos.set_msg_BANG_.call(null,"Error installing elm package",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),"error",new cljs.core.Keyword(null,"timeout","timeout",3994960083),5000], null));
}
lt.object.raise.call(null,lt.plugins.elm_light.packages.elm_packages,new cljs.core.Keyword(null,"elm.show.project.packages","elm.show.project.packages",3385102109),new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.elm_light.packages.elm_packages)));
return lt.object.raise.call(null,lt.plugins.elm_light.graph.dependency_graph,new cljs.core.Keyword(null,"elm.graph.show-dependencies","elm.graph.show-dependencies",3464547203),new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.elm_light.packages.elm_packages)),false);
});})(proc,args))
);
proc.stdout.on("data",((function (proc,args){
return (function (p1__18320_SHARP_){return lt.objs.notifos.msg_STAR_.call(null,[cljs.core.str("Package install: "),cljs.core.str(p1__18320_SHARP_)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"timeout","timeout",3994960083),5000], null));
});})(proc,args))
);
return proc.stderr.on("data",((function (proc,args){
return (function (p1__18321_SHARP_){return lt.objs.console.error.call(null,[cljs.core.str(p1__18321_SHARP_)].join(''));
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
lt.plugins.elm_light.packages.PackageRow = quiescent.component.call(null,(function (p__18322){var map__18323 = p__18322;var map__18323__$1 = ((cljs.core.seq_QMARK_.call(null,map__18323))?cljs.core.apply.call(null,cljs.core.hash_map,map__18323):map__18323);var on_browse = cljs.core.get.call(null,map__18323__$1,new cljs.core.Keyword(null,"on-browse","on-browse",587885994));var on_remove = cljs.core.get.call(null,map__18323__$1,new cljs.core.Keyword(null,"on-remove","on-remove",1033879460));var exact = cljs.core.get.call(null,map__18323__$1,new cljs.core.Keyword(null,"exact","exact",1110851185));var range = cljs.core.get.call(null,map__18323__$1,new cljs.core.Keyword(null,"range","range",1122184367));var package$ = cljs.core.get.call(null,map__18323__$1,new cljs.core.Keyword(null,"package","package",4501809080));return quiescent.dom.tr.call(null,cljs.core.PersistentArrayMap.EMPTY,quiescent.dom.td.call(null,cljs.core.PersistentArrayMap.EMPTY,(cljs.core.truth_((function (){var and__4872__auto__ = package$;if(cljs.core.truth_(and__4872__auto__))
{return exact;
} else
{return and__4872__auto__;
}
})())?quiescent.dom.span.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",1004015509),"link",new cljs.core.Keyword(null,"onClick","onClick",3956969051),((function (map__18323,map__18323__$1,on_browse,on_remove,exact,range,package$){
return (function (){return on_browse.call(null,package$,exact);
});})(map__18323,map__18323__$1,on_browse,on_remove,exact,range,package$))
], null),package$):package$)),quiescent.dom.td.call(null,cljs.core.PersistentArrayMap.EMPTY,range),quiescent.dom.td.call(null,cljs.core.PersistentArrayMap.EMPTY,exact),quiescent.dom.td.call(null,cljs.core.PersistentArrayMap.EMPTY,(cljs.core.truth_(range)?quiescent.dom.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",3956969051),((function (map__18323,map__18323__$1,on_browse,on_remove,exact,range,package$){
return (function (){return on_remove.call(null,package$);
});})(map__18323,map__18323__$1,on_browse,on_remove,exact,range,package$))
], null),"remove"):null)));
}));
/**
* 
*/
lt.plugins.elm_light.packages.PackageTable = quiescent.component.call(null,(function (props){return quiescent.dom.table.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",1004015509),"package-table"], null),quiescent.dom.thead.call(null,cljs.core.PersistentArrayMap.EMPTY,quiescent.dom.tr.call(null,cljs.core.PersistentArrayMap.EMPTY,quiescent.dom.th.call(null,cljs.core.PersistentArrayMap.EMPTY,"Package"),quiescent.dom.th.call(null,cljs.core.PersistentArrayMap.EMPTY,"Range"),quiescent.dom.th.call(null,cljs.core.PersistentArrayMap.EMPTY,"Exact"),quiescent.dom.th.call(null,cljs.core.PersistentArrayMap.EMPTY,""))),cljs.core.apply.call(null,quiescent.dom.tbody,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__18324_SHARP_){return lt.plugins.elm_light.packages.PackageRow.call(null,cljs.core.assoc.call(null,p1__18324_SHARP_,new cljs.core.Keyword(null,"on-remove","on-remove",1033879460),new cljs.core.Keyword(null,"on-remove","on-remove",1033879460).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"on-browse","on-browse",587885994),new cljs.core.Keyword(null,"on-browse","on-browse",587885994).cljs$core$IFn$_invoke$arity$1(props)));
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
lt.plugins.elm_light.autocompleter.core.default_options = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"async","async",1107031534),true,new cljs.core.Keyword(null,"completeSingle","completeSingle",2100037203),false,new cljs.core.Keyword(null,"supportsSelection","supportsSelection",3475218138),true,new cljs.core.Keyword(null,"closeOnUnfocus","closeOnUnfocus",2215570266),true,new cljs.core.Keyword(null,"customKeys","customKeys",3726901367),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"Up","Up",1013906989),(function (p1__18417_SHARP_,p2__18416_SHARP_){return p2__18416_SHARP_.moveFocus.call(null,-1);
}),new cljs.core.Keyword(null,"Down","Down",1016040500),(function (p1__18419_SHARP_,p2__18418_SHARP_){return p2__18418_SHARP_.moveFocus.call(null,1);
}),new cljs.core.Keyword(null,"Enter","Enter",1081018922),(function (a,b){return b.pick();
}),new cljs.core.Keyword(null,"Tab","Tab",1013988071),(function (a,b){return b.pick();
}),new cljs.core.Keyword(null,"Esc","Esc",1013974215),(function (p1__18421_SHARP_,p2__18420_SHARP_){return p2__18420_SHARP_.close.call(null);
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
{return cljs.core.clj__GT_js.call(null,(function (p1__18423_SHARP_){var fst = cljs.core.first.call(null,new cljs.core.Keyword(null,"list","list",1017226256).cljs$core$IFn$_invoke$arity$1(p1__18423_SHARP_));return cljs.core.assoc.call(null,p1__18423_SHARP_,new cljs.core.Keyword(null,"from","from",1017056028),new cljs.core.Keyword(null,"from","from",1017056028).cljs$core$IFn$_invoke$arity$1(fst),new cljs.core.Keyword(null,"to","to",1013907949),new cljs.core.Keyword(null,"to","to",1013907949).cljs$core$IFn$_invoke$arity$1(fst));
}).call(null,cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"list","list",1017226256)],[cljs.core.take.call(null,25,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"text","text",1017460895),lt.plugins.elm_light.autocompleter.core.distinct_completions.call(null,cljs.core.filter.call(null,(function (p1__18422_SHARP_){return (new cljs.core.Keyword(null,"displayText","displayText",2728236161).cljs$core$IFn$_invoke$arity$1(p1__18422_SHARP_).length < 1000);
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
lt.plugins.elm_light.autocompleter.core.listen_for_hint_results = (function listen_for_hint_results(ed,channels,hinter_ch){var t = cljs.core.async.timeout.call(null,500);var c__12698__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__12698__auto__,t){
return (function (){var f__12699__auto__ = (function (){var switch__12628__auto__ = ((function (c__12698__auto__,t){
return (function (state_18509){var state_val_18510 = (state_18509[1]);if((state_val_18510 === 1))
{var inst_18478 = cljs.core.conj.call(null,channels,t);var inst_18479 = cljs.core.PersistentVector.EMPTY;var inst_18480 = inst_18478;var state_18509__$1 = (function (){var statearr_18511 = state_18509;(statearr_18511[7] = inst_18480);
(statearr_18511[8] = inst_18479);
return statearr_18511;
})();var statearr_18512_18560 = state_18509__$1;(statearr_18512_18560[2] = null);
(statearr_18512_18560[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18510 === 2))
{var inst_18480 = (state_18509[7]);var inst_18482 = cljs.core.count.call(null,inst_18480);var inst_18483 = cljs.core._EQ_.call(null,1,inst_18482);var state_18509__$1 = state_18509;if(inst_18483)
{var statearr_18513_18561 = state_18509__$1;(statearr_18513_18561[1] = 4);
} else
{var statearr_18514_18562 = state_18509__$1;(statearr_18514_18562[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18510 === 3))
{var inst_18507 = (state_18509[2]);var state_18509__$1 = state_18509;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18509__$1,inst_18507);
} else
{if((state_val_18510 === 4))
{var inst_18479 = (state_18509[8]);var inst_18485 = cljs.core.async.put_BANG_.call(null,hinter_ch,inst_18479);var state_18509__$1 = state_18509;var statearr_18515_18563 = state_18509__$1;(statearr_18515_18563[2] = inst_18485);
(statearr_18515_18563[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18510 === 5))
{var inst_18480 = (state_18509[7]);var state_18509__$1 = state_18509;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_18509__$1,7,inst_18480);
} else
{if((state_val_18510 === 6))
{var inst_18505 = (state_18509[2]);var state_18509__$1 = state_18509;var statearr_18516_18564 = state_18509__$1;(statearr_18516_18564[2] = inst_18505);
(statearr_18516_18564[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18510 === 7))
{var inst_18491 = (state_18509[9]);var inst_18489 = (state_18509[2]);var inst_18490 = cljs.core.nth.call(null,inst_18489,0,null);var inst_18491__$1 = cljs.core.nth.call(null,inst_18489,1,null);var inst_18492 = (inst_18491__$1 === t);var state_18509__$1 = (function (){var statearr_18517 = state_18509;(statearr_18517[9] = inst_18491__$1);
(statearr_18517[10] = inst_18490);
return statearr_18517;
})();if(cljs.core.truth_(inst_18492))
{var statearr_18518_18565 = state_18509__$1;(statearr_18518_18565[1] = 8);
} else
{var statearr_18519_18566 = state_18509__$1;(statearr_18519_18566[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18510 === 8))
{var inst_18479 = (state_18509[8]);var inst_18494 = cljs.core.println.call(null,"WARNING: Timeout waiting for hinter provider channel results");var inst_18495 = cljs.core.async.put_BANG_.call(null,hinter_ch,inst_18479);var state_18509__$1 = (function (){var statearr_18520 = state_18509;(statearr_18520[11] = inst_18494);
return statearr_18520;
})();var statearr_18521_18567 = state_18509__$1;(statearr_18521_18567[2] = inst_18495);
(statearr_18521_18567[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18510 === 9))
{var inst_18491 = (state_18509[9]);var inst_18490 = (state_18509[10]);var inst_18480 = (state_18509[7]);var inst_18479 = (state_18509[8]);var inst_18497 = cljs.core.into.call(null,inst_18479,inst_18490);var inst_18498 = [inst_18491];var inst_18499 = cljs.core.PersistentHashSet.fromArray.call(null,inst_18498,true);var inst_18500 = cljs.core.remove.call(null,inst_18499,inst_18480);var inst_18479__$1 = inst_18497;var inst_18480__$1 = inst_18500;var state_18509__$1 = (function (){var statearr_18522 = state_18509;(statearr_18522[7] = inst_18480__$1);
(statearr_18522[8] = inst_18479__$1);
return statearr_18522;
})();var statearr_18523_18568 = state_18509__$1;(statearr_18523_18568[2] = null);
(statearr_18523_18568[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18510 === 10))
{var inst_18503 = (state_18509[2]);var state_18509__$1 = state_18509;var statearr_18524_18569 = state_18509__$1;(statearr_18524_18569[2] = inst_18503);
(statearr_18524_18569[1] = 6);
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
});})(c__12698__auto__,t))
;return ((function (switch__12628__auto__,c__12698__auto__,t){
return (function() {
var state_machine__12629__auto__ = null;
var state_machine__12629__auto____0 = (function (){var statearr_18528 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18528[0] = state_machine__12629__auto__);
(statearr_18528[1] = 1);
return statearr_18528;
});
var state_machine__12629__auto____1 = (function (state_18509){while(true){
var ret_value__12630__auto__ = (function (){try{while(true){
var result__12631__auto__ = switch__12628__auto__.call(null,state_18509);if(cljs.core.keyword_identical_QMARK_.call(null,result__12631__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12631__auto__;
}
break;
}
}catch (e18529){if((e18529 instanceof Object))
{var ex__12632__auto__ = e18529;var statearr_18530_18570 = state_18509;(statearr_18530_18570[5] = ex__12632__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18509);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18529;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12630__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18571 = state_18509;
state_18509 = G__18571;
continue;
}
} else
{return ret_value__12630__auto__;
}
break;
}
});
state_machine__12629__auto__ = function(state_18509){
switch(arguments.length){
case 0:
return state_machine__12629__auto____0.call(this);
case 1:
return state_machine__12629__auto____1.call(this,state_18509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12629__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12629__auto____0;
state_machine__12629__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12629__auto____1;
return state_machine__12629__auto__;
})()
;})(switch__12628__auto__,c__12698__auto__,t))
})();var state__12700__auto__ = (function (){var statearr_18531 = f__12699__auto__.call(null);(statearr_18531[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12698__auto__);
return statearr_18531;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12700__auto__);
});})(c__12698__auto__,t))
);
return c__12698__auto__;
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
return (function (_,cb){var c__12698__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__12698__auto__,ch){
return (function (){var f__12699__auto__ = (function (){var switch__12628__auto__ = ((function (c__12698__auto__,ch){
return (function (state_18551){var state_val_18552 = (state_18551[1]);if((state_val_18552 === 2))
{var inst_18547 = (state_18551[2]);var inst_18548 = lt.plugins.elm_light.autocompleter.core.process_hint_results.call(null,inst_18547);var inst_18549 = cb.call(null,inst_18548);var state_18551__$1 = state_18551;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18551__$1,inst_18549);
} else
{if((state_val_18552 === 1))
{var state_18551__$1 = state_18551;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18551__$1,2,ch);
} else
{return null;
}
}
});})(c__12698__auto__,ch))
;return ((function (switch__12628__auto__,c__12698__auto__,ch){
return (function() {
var state_machine__12629__auto__ = null;
var state_machine__12629__auto____0 = (function (){var statearr_18556 = [null,null,null,null,null,null,null];(statearr_18556[0] = state_machine__12629__auto__);
(statearr_18556[1] = 1);
return statearr_18556;
});
var state_machine__12629__auto____1 = (function (state_18551){while(true){
var ret_value__12630__auto__ = (function (){try{while(true){
var result__12631__auto__ = switch__12628__auto__.call(null,state_18551);if(cljs.core.keyword_identical_QMARK_.call(null,result__12631__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12631__auto__;
}
break;
}
}catch (e18557){if((e18557 instanceof Object))
{var ex__12632__auto__ = e18557;var statearr_18558_18572 = state_18551;(statearr_18558_18572[5] = ex__12632__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18551);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18557;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12630__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18573 = state_18551;
state_18551 = G__18573;
continue;
}
} else
{return ret_value__12630__auto__;
}
break;
}
});
state_machine__12629__auto__ = function(state_18551){
switch(arguments.length){
case 0:
return state_machine__12629__auto____0.call(this);
case 1:
return state_machine__12629__auto____1.call(this,state_18551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12629__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12629__auto____0;
state_machine__12629__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12629__auto____1;
return state_machine__12629__auto__;
})()
;})(switch__12628__auto__,c__12698__auto__,ch))
})();var state__12700__auto__ = (function (){var statearr_18559 = f__12699__auto__.call(null);(statearr_18559[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12698__auto__);
return statearr_18559;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12700__auto__);
});})(c__12698__auto__,ch))
);
return c__12698__auto__;
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
var G__18381 = (line - 1);
line = G__18381;
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
var G__18382 = (line + 1);
line = G__18382;
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
var G__18383 = (line - 1);
line = G__18383;
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
goog.require('lt.objs.files');
goog.require('lt.objs.eval');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.console');
goog.require('lt.objs.proc');
goog.require('lt.objs.console');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
lt.plugins.elm_light.clients.cp = require("child_process");
lt.plugins.elm_light.clients.os = require("os");
lt.plugins.elm_light.clients.elm_client_path = lt.objs.files.join.call(null,lt.plugins.elm_light.utils.elm_plugin_dir,"node/elm-client.js");
lt.plugins.elm_light.clients.elm_node_path = lt.objs.files.join.call(null,lt.plugins.elm_light.utils.elm_plugin_dir,"node_modules");
lt.plugins.elm_light.clients.harbor = require(lt.objs.files.join.call(null,lt.plugins.elm_light.clients.elm_node_path,"harbor")).call(null,3000,4000);
lt.plugins.elm_light.clients.claim_reactor_port = (function claim_reactor_port(path,cb){return lt.plugins.elm_light.clients.harbor.claim(path,cb);
});
lt.plugins.elm_light.clients.release_reactor_port = (function release_reactor_port(path){return lt.plugins.elm_light.clients.harbor.release(path);
});
lt.plugins.elm_light.clients.on_exit = (function on_exit(client){lt.objs.clients.rem_BANG_.call(null,client);
return lt.plugins.elm_light.clients.release_reactor_port.call(null,new cljs.core.Keyword(null,"dir","dir",1014003711).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client)));
});
lt.plugins.elm_light.clients.on_elm_message = (function on_elm_message(client,data){var msg = cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);if(cljs.core._EQ_.call(null,cljs.core.second.call(null,msg),"elm.client.connected"))
{lt.object.raise.call(null,client,new cljs.core.Keyword(null,"connect","connect",1965255772));
return lt.object.raise.call(null,lt.objs.clients.clients,new cljs.core.Keyword(null,"connect","connect",1965255772),client);
} else
{return lt.object.raise.call(null,lt.objs.clients.clients,new cljs.core.Keyword(null,"message","message",1968829305),msg);
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
return (function (p1__11168_SHARP_){return lt.plugins.elm_light.clients.on_elm_message.call(null,client,p1__11168_SHARP_);
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
lt.plugins.elm_light.clients.start_elm_client = (function start_elm_client(p__11169){var map__11171 = p__11169;var map__11171__$1 = ((cljs.core.seq_QMARK_.call(null,map__11171))?cljs.core.apply.call(null,cljs.core.hash_map,map__11171):map__11171);var props = map__11171__$1;var client = cljs.core.get.call(null,map__11171__$1,new cljs.core.Keyword(null,"client","client",3951159101));var proj_path = cljs.core.get.call(null,map__11171__$1,new cljs.core.Keyword(null,"proj-path","proj-path",4362692615));var path = cljs.core.get.call(null,map__11171__$1,new cljs.core.Keyword(null,"path","path",1017337751));lt.objs.notifos.working.call(null,"Connecting..");
return lt.plugins.elm_light.clients.claim_reactor_port.call(null,proj_path,((function (map__11171,map__11171__$1,props,client,proj_path,path){
return (function (_,port){var worker = lt.plugins.elm_light.clients.start_elm_worker.call(null,proj_path,port,client);lt.object.merge_BANG_.call(null,client,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1017277949),lt.objs.files.basename.call(null,proj_path),new cljs.core.Keyword(null,"dir","dir",1014003711),proj_path,new cljs.core.Keyword(null,"reactor-port","reactor-port",4649590590),port,new cljs.core.Keyword(null,"worker","worker",4526786288),worker,new cljs.core.Keyword(null,"commands","commands",4706336250),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"editor.elm.lint","editor.elm.lint",1086056222),null,new cljs.core.Keyword(null,"editor.elm.make","editor.elm.make",1086078217),null,new cljs.core.Keyword(null,"editor.eval.elm","editor.eval.elm",1083015975),null,new cljs.core.Keyword(null,"editor.elm.hint","editor.elm.hint",1085937058),null,new cljs.core.Keyword(null,"elm.repl.restart","elm.repl.restart",2931654218),null,new cljs.core.Keyword(null,"docs.elm.search","docs.elm.search",737241333),null,new cljs.core.Keyword(null,"editor.elm.doc","editor.elm.doc",1570413537),null,new cljs.core.Keyword(null,"editor.elm.gendoc","editor.elm.gendoc",1485628611),null], null), null)], null));
return lt.object.add_behavior_BANG_.call(null,client,new cljs.core.Keyword("lt.plugins.elm-light.clients","send!","lt.plugins.elm-light.clients/send!",867013595));
});})(map__11171,map__11171__$1,props,client,proj_path,path))
);
});
lt.plugins.elm_light.clients.try_connect = (function try_connect(p__11172){var map__11174 = p__11172;var map__11174__$1 = ((cljs.core.seq_QMARK_.call(null,map__11174))?cljs.core.apply.call(null,cljs.core.hash_map,map__11174):map__11174);var props = map__11174__$1;var info = cljs.core.get.call(null,map__11174__$1,new cljs.core.Keyword(null,"info","info",1017141280));var path = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(info);var proj_path = lt.plugins.elm_light.utils.project_path.call(null,path);var client = lt.objs.clients.client_BANG_.call(null,new cljs.core.Keyword(null,"elm-client","elm-client",1622336068));if(cljs.core.truth_(proj_path))
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
*/
lt.plugins.elm_light.clients.get_eval_client = (function get_eval_client(ed,cmd){return lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),cmd,new cljs.core.Keyword(null,"origin","origin",4300251800),ed,new cljs.core.Keyword(null,"info","info",1017141280),new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)),new cljs.core.Keyword(null,"create","create",3956577390),lt.plugins.elm_light.clients.try_connect], null));
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
lt.plugins.elm_light.docpreview.preview_skeleton = (function preview_skeleton(this$){var e__6289__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"elm-doc-preview"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"Generating elm docs, please wait a little..."], null)], null));var seq__11181_11205 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__11182_11206 = null;var count__11183_11207 = 0;var i__11184_11208 = 0;while(true){
if((i__11184_11208 < count__11183_11207))
{var vec__11185_11209 = cljs.core._nth.call(null,chunk__11182_11206,i__11184_11208);var ev__6290__auto___11210 = cljs.core.nth.call(null,vec__11185_11209,0,null);var func__6291__auto___11211 = cljs.core.nth.call(null,vec__11185_11209,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___11210,func__6291__auto___11211);
{
var G__11212 = seq__11181_11205;
var G__11213 = chunk__11182_11206;
var G__11214 = count__11183_11207;
var G__11215 = (i__11184_11208 + 1);
seq__11181_11205 = G__11212;
chunk__11182_11206 = G__11213;
count__11183_11207 = G__11214;
i__11184_11208 = G__11215;
continue;
}
} else
{var temp__4092__auto___11216 = cljs.core.seq.call(null,seq__11181_11205);if(temp__4092__auto___11216)
{var seq__11181_11217__$1 = temp__4092__auto___11216;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11181_11217__$1))
{var c__5632__auto___11218 = cljs.core.chunk_first.call(null,seq__11181_11217__$1);{
var G__11219 = cljs.core.chunk_rest.call(null,seq__11181_11217__$1);
var G__11220 = c__5632__auto___11218;
var G__11221 = cljs.core.count.call(null,c__5632__auto___11218);
var G__11222 = 0;
seq__11181_11205 = G__11219;
chunk__11182_11206 = G__11220;
count__11183_11207 = G__11221;
i__11184_11208 = G__11222;
continue;
}
} else
{var vec__11186_11223 = cljs.core.first.call(null,seq__11181_11217__$1);var ev__6290__auto___11224 = cljs.core.nth.call(null,vec__11186_11223,0,null);var func__6291__auto___11225 = cljs.core.nth.call(null,vec__11186_11223,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___11224,func__6291__auto___11225);
{
var G__11226 = cljs.core.next.call(null,seq__11181_11217__$1);
var G__11227 = null;
var G__11228 = 0;
var G__11229 = 0;
seq__11181_11205 = G__11226;
chunk__11182_11206 = G__11227;
count__11183_11207 = G__11228;
i__11184_11208 = G__11229;
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
lt.plugins.elm_light.docpreview.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___11230 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___11230))
{var ts_11231 = temp__4092__auto___11230;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_11231))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_11231);
} else
{}
} else
{}
var temp__4092__auto___11232 = new cljs.core.Keyword(null,"owner-ed","owner-ed",2677003627).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___11232))
{var ed_11233 = temp__4092__auto___11232;lt.object.assoc_in_BANG_.call(null,ed_11233,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elmdoc","elmdoc",4008535620)], null),null);
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
return (function (){var seq__11191 = cljs.core.seq.call(null,lt.util.dom.$$.call(null,"pre code",lt.object.__GT_content.call(null,elmdoc)));var chunk__11192 = null;var count__11193 = 0;var i__11194 = 0;while(true){
if((i__11194 < count__11193))
{var block = cljs.core._nth.call(null,chunk__11192,i__11194);hljs.highlightBlock(block);
{
var G__11234 = seq__11191;
var G__11235 = chunk__11192;
var G__11236 = count__11193;
var G__11237 = (i__11194 + 1);
seq__11191 = G__11234;
chunk__11192 = G__11235;
count__11193 = G__11236;
i__11194 = G__11237;
continue;
}
} else
{var temp__4092__auto____$1 = cljs.core.seq.call(null,seq__11191);if(temp__4092__auto____$1)
{var seq__11191__$1 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11191__$1))
{var c__5632__auto__ = cljs.core.chunk_first.call(null,seq__11191__$1);{
var G__11238 = cljs.core.chunk_rest.call(null,seq__11191__$1);
var G__11239 = c__5632__auto__;
var G__11240 = cljs.core.count.call(null,c__5632__auto__);
var G__11241 = 0;
seq__11191 = G__11238;
chunk__11192 = G__11239;
count__11193 = G__11240;
i__11194 = G__11241;
continue;
}
} else
{var block = cljs.core.first.call(null,seq__11191__$1);hljs.highlightBlock(block);
{
var G__11242 = cljs.core.next.call(null,seq__11191__$1);
var G__11243 = null;
var G__11244 = 0;
var G__11245 = 0;
seq__11191 = G__11242;
chunk__11192 = G__11243;
count__11193 = G__11244;
i__11194 = G__11245;
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
lt.plugins.elm_light.modulebrowser.resolve_module_file = (function resolve_module_file(project_path,pck_json,package$,module,version){return cljs.core.some.call(null,(function (p1__18239_SHARP_){if(cljs.core.truth_(lt.objs.files.exists_QMARK_.call(null,p1__18239_SHARP_)))
{return p1__18239_SHARP_;
} else
{return null;
}
}),cljs.core.map.call(null,(function (p1__18238_SHARP_){return lt.objs.files.join.call(null,project_path,"elm-stuff/packages",package$,version,p1__18238_SHARP_,[cljs.core.str(clojure.string.replace.call(null,module,".",lt.objs.files.separator)),cljs.core.str(".elm")].join(''));
}),new cljs.core.Keyword(null,"source-directories","source-directories",4475397259).cljs$core$IFn$_invoke$arity$1(pck_json)));
});
lt.plugins.elm_light.modulebrowser.get_exposed_modules = (function get_exposed_modules(project_path,p__18240){var map__18242 = p__18240;var map__18242__$1 = ((cljs.core.seq_QMARK_.call(null,map__18242))?cljs.core.apply.call(null,cljs.core.hash_map,map__18242):map__18242);var exact = cljs.core.get.call(null,map__18242__$1,new cljs.core.Keyword(null,"exact","exact",1110851185));var package$ = cljs.core.get.call(null,map__18242__$1,new cljs.core.Keyword(null,"package","package",4501809080));var pck_json = lt.plugins.elm_light.utils.parse_json_file.call(null,lt.objs.files.join.call(null,project_path,"elm-stuff/packages",package$,exact,"elm-package.json"));return cljs.core.map.call(null,((function (pck_json,map__18242,map__18242__$1,exact,package$){
return (function (x){return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1017277949),x,new cljs.core.Keyword(null,"packageName","packageName",1922663267),package$,new cljs.core.Keyword(null,"version","version",1365512266),exact,new cljs.core.Keyword(null,"file","file",1017047278),lt.plugins.elm_light.modulebrowser.resolve_module_file.call(null,project_path,pck_json,package$,x,exact)], null);
});})(pck_json,map__18242,map__18242__$1,exact,package$))
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
return (function (p1__18243_SHARP_){return cljs.core._EQ_.call(null,lt.objs.files.ext.call(null,p1__18243_SHARP_),"elm");
});})(pck_json))
,lt.objs.files.ls.call(null,project_path)));
} else
{return cljs.core.map.call(null,((function (pck_json){
return (function (x){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),lt.plugins.elm_light.modulebrowser.deduce_module_name.call(null,lt.objs.files.join.call(null,project_path,dir),x),new cljs.core.Keyword(null,"file","file",1017047278),x], null);
});})(pck_json))
,lt.objs.files.filter_walk.call(null,((function (pck_json){
return (function (p1__18244_SHARP_){return cljs.core._EQ_.call(null,lt.objs.files.ext.call(null,p1__18244_SHARP_),"elm");
});})(pck_json))
,lt.objs.files.join.call(null,project_path,dir)));
}
});})(pck_json))
,new cljs.core.Keyword(null,"source-directories","source-directories",4475397259).cljs$core$IFn$_invoke$arity$1(pck_json))));
});
lt.plugins.elm_light.modulebrowser.get_all_modules = (function get_all_modules(project_path){return cljs.core.concat.call(null,lt.plugins.elm_light.modulebrowser.get_project_modules.call(null,project_path),lt.plugins.elm_light.modulebrowser.get_package_modules.call(null,project_path));
});
lt.plugins.elm_light.modulebrowser.wrapper = (function wrapper(this$){var e__6289__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"elm-module-browser"], null),"Retrieving modules..."], null));var seq__18251_18267 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__18252_18268 = null;var count__18253_18269 = 0;var i__18254_18270 = 0;while(true){
if((i__18254_18270 < count__18253_18269))
{var vec__18255_18271 = cljs.core._nth.call(null,chunk__18252_18268,i__18254_18270);var ev__6290__auto___18272 = cljs.core.nth.call(null,vec__18255_18271,0,null);var func__6291__auto___18273 = cljs.core.nth.call(null,vec__18255_18271,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___18272,func__6291__auto___18273);
{
var G__18274 = seq__18251_18267;
var G__18275 = chunk__18252_18268;
var G__18276 = count__18253_18269;
var G__18277 = (i__18254_18270 + 1);
seq__18251_18267 = G__18274;
chunk__18252_18268 = G__18275;
count__18253_18269 = G__18276;
i__18254_18270 = G__18277;
continue;
}
} else
{var temp__4092__auto___18278 = cljs.core.seq.call(null,seq__18251_18267);if(temp__4092__auto___18278)
{var seq__18251_18279__$1 = temp__4092__auto___18278;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18251_18279__$1))
{var c__5632__auto___18280 = cljs.core.chunk_first.call(null,seq__18251_18279__$1);{
var G__18281 = cljs.core.chunk_rest.call(null,seq__18251_18279__$1);
var G__18282 = c__5632__auto___18280;
var G__18283 = cljs.core.count.call(null,c__5632__auto___18280);
var G__18284 = 0;
seq__18251_18267 = G__18281;
chunk__18252_18268 = G__18282;
count__18253_18269 = G__18283;
i__18254_18270 = G__18284;
continue;
}
} else
{var vec__18256_18285 = cljs.core.first.call(null,seq__18251_18279__$1);var ev__6290__auto___18286 = cljs.core.nth.call(null,vec__18256_18285,0,null);var func__6291__auto___18287 = cljs.core.nth.call(null,vec__18256_18285,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___18286,func__6291__auto___18287);
{
var G__18288 = cljs.core.next.call(null,seq__18251_18279__$1);
var G__18289 = null;
var G__18290 = 0;
var G__18291 = 0;
seq__18251_18267 = G__18288;
chunk__18252_18268 = G__18289;
count__18253_18269 = G__18290;
i__18254_18270 = G__18291;
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
lt.plugins.elm_light.hinter.__GT_hints = (function __GT_hints(token,completions){return cljs.core.map.call(null,(function (p1__15146_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"text","text",1017460895),new cljs.core.Keyword(null,"displayText","displayText",2728236161),new cljs.core.Keyword(null,"render","render",4374279432),new cljs.core.Keyword(null,"from","from",1017056028),new cljs.core.Keyword(null,"to","to",1013907949)],[new cljs.core.Keyword(null,"completion","completion",4767668046).cljs$core$IFn$_invoke$arity$1(p1__15146_SHARP_),new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(p1__15146_SHARP_),(function (el,self,data){return lt.util.dom.html.call(null,el,wrapMatch(data.displayText,{"matched": new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(token)}));
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(token)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"end","end",1014004813).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(token)], null)]);
}),completions);
});
lt.plugins.elm_light.hinter.__BEH__async_hint_results = (function __BEH__async_hint_results(ed,p__15147){var map__15149 = p__15147;var map__15149__$1 = ((cljs.core.seq_QMARK_.call(null,map__15149))?cljs.core.apply.call(null,cljs.core.hash_map,map__15149):map__15149);var completions = cljs.core.get.call(null,map__15149__$1,new cljs.core.Keyword(null,"completions","completions",1416465289));var token = cljs.core.get.call(null,map__15149__$1,new cljs.core.Keyword(null,"token","token",1124445547));var channel = cljs.core.get.call(null,map__15149__$1,new cljs.core.Keyword(null,"channel","channel",1752854645));var hints = lt.plugins.elm_light.hinter.__GT_hints.call(null,token,completions);var temp__4092__auto__ = lt.plugins.elm_light.hinter.get_ch.call(null,ed,channel);if(cljs.core.truth_(temp__4092__auto__))
{var ch = temp__4092__auto__;lt.object.assoc_in_BANG_.call(null,ed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elm-hint-cached-hints","elm-hint-cached-hints",1223515634)], null),hints);
lt.object.assoc_in_BANG_.call(null,ed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elm-hint-cached-token","elm-hint-cached-token",1234773279)], null),token);
cljs.core.async.put_BANG_.call(null,ch,hints);
return lt.plugins.elm_light.hinter.remove_ch.call(null,ed,channel);
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.hinter","async-hint-results","lt.plugins.elm-light.hinter/async-hint-results",2062832165),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.hinter.__BEH__async_hint_results,new cljs.core.Keyword(null,"desc","desc",1016984067),"Async dummy: Hint results",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.elm.hints.result","editor.elm.hints.result",2636151706),null], null), null));
lt.plugins.elm_light.hinter.maybe_cached_hints = (function maybe_cached_hints(token,cached_token,cached_hints){var starts_with = (function (p1__15150_SHARP_,p2__15151_SHARP_){var and__4872__auto__ = p1__15150_SHARP_;if(cljs.core.truth_(and__4872__auto__))
{var and__4872__auto____$1 = p2__15151_SHARP_;if(cljs.core.truth_(and__4872__auto____$1))
{return cljs.core._EQ_.call(null,0,p1__15150_SHARP_.indexOf(p2__15151_SHARP_));
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
return (function (p1__15154_SHARP_){return cljs.core.assoc.call(null,p1__15154_SHARP_,new cljs.core.Keyword(null,"render","render",4374279432),((function (starts_with){
return (function (el,self,data){return lt.util.dom.html.call(null,el,wrapMatch(data.displayText,{"matched": new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(token)}));
});})(starts_with))
);
});})(starts_with))
,cljs.core.map.call(null,((function (starts_with){
return (function (p1__15153_SHARP_){return cljs.core.assoc_in.call(null,p1__15153_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to","to",1013907949),new cljs.core.Keyword(null,"ch","ch",1013907415)], null),new cljs.core.Keyword(null,"end","end",1014004813).cljs$core$IFn$_invoke$arity$1(token));
});})(starts_with))
,cljs.core.filter.call(null,((function (starts_with){
return (function (p1__15152_SHARP_){return starts_with.call(null,new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(p1__15152_SHARP_),new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(token));
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
{var temp__4090__auto___15165 = lt.plugins.elm_light.hinter.maybe_cached_hints.call(null,token,cached_token,cached_hints);if(cljs.core.truth_(temp__4090__auto___15165))
{var hints_15166 = temp__4090__auto___15165;cljs.core.async.put_BANG_.call(null,ch,hints_15166);
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
if(!lt.util.load.provided_QMARK_('lt.plugins.elm-light')) {
goog.provide('lt.plugins.elm_light');
goog.require('cljs.core');
goog.require('lt.plugins.elm_light.clients');
goog.require('lt.plugins.elm_light.utils');
goog.require('lt.objs.files');
goog.require('lt.util.js');
goog.require('lt.objs.tabs');
goog.require('clojure.string');
goog.require('lt.plugins.elm_light.utils');
goog.require('lt.objs.popup');
goog.require('lt.objs.dialogs');
goog.require('lt.objs.popup');
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
lt.plugins.elm_light.__GT_lt_range = (function __GT_lt_range(p__18574){var map__18576 = p__18574;var map__18576__$1 = ((cljs.core.seq_QMARK_.call(null,map__18576))?cljs.core.apply.call(null,cljs.core.hash_map,map__18576):map__18576);var end = cljs.core.get.call(null,map__18576__$1,new cljs.core.Keyword(null,"end","end",1014004813));var start = cljs.core.get.call(null,map__18576__$1,new cljs.core.Keyword(null,"start","start",1123661780));return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1017056028),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",1013907415),(new cljs.core.Keyword(null,"column","column",3954034376).cljs$core$IFn$_invoke$arity$1(start) - 1),new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(start) - 1)], null),new cljs.core.Keyword(null,"to","to",1013907949),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",1013907415),(new cljs.core.Keyword(null,"column","column",3954034376).cljs$core$IFn$_invoke$arity$1(end) - 1),new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(end) - 1)], null)], null);
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
lt.plugins.elm_light.linter_action = (function linter_action(ed,row){var G__18588 = new cljs.core.Keyword(null,"tag","tag",1014018828).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core._EQ_.call(null,"TYPE MISMATCH",G__18588))
{var ann = lt.plugins.elm_light.maybe_strip_hint.call(null,lt.plugins.elm_light.maybe_trim.call(null,cljs.core.second.call(null,cljs.core.re_find.call(null,/But I am inferring that the definition has this type:([\s\S]*$)/m,new cljs.core.Keyword(null,"details","details",2571625908).cljs$core$IFn$_invoke$arity$1(row)))));if(cljs.core.truth_((function (){var and__4872__auto__ = ann;if(cljs.core.truth_(and__4872__auto__))
{return cljs.core.not.call(null,lt.plugins.elm_light.str_contains_QMARK_.call(null,ann,"..."));
} else
{return and__4872__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",1017460895),"Fix annotation",new cljs.core.Keyword(null,"action","action",3885920680),((function (ann,G__18588){
return (function (_,p__18589){var map__18590 = p__18589;var map__18590__$1 = ((cljs.core.seq_QMARK_.call(null,map__18590))?cljs.core.apply.call(null,cljs.core.hash_map,map__18590):map__18590);var to = cljs.core.get.call(null,map__18590__$1,new cljs.core.Keyword(null,"to","to",1013907949));var from = cljs.core.get.call(null,map__18590__$1,new cljs.core.Keyword(null,"from","from",1017056028));return lt.objs.editor.replace.call(null,ed,from,to,ann);
});})(ann,G__18588))
], null)], null);
} else
{return cljs.core.PersistentVector.EMPTY;
}
} else
{if(cljs.core._EQ_.call(null,"NAMING ERROR",G__18588))
{var fixes = cljs.core.filter.call(null,cljs.core.seq,cljs.core.map.call(null,clojure.string.trim,clojure.string.split_lines.call(null,cljs.core.second.call(null,cljs.core.re_find.call(null,/Maybe you want one of the following\?(:?[\s\S]*$)/m,new cljs.core.Keyword(null,"details","details",2571625908).cljs$core$IFn$_invoke$arity$1(row))))));return cljs.core.map.call(null,((function (fixes,G__18588){
return (function (suggestion){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",1017460895),suggestion,new cljs.core.Keyword(null,"action","action",3885920680),((function (fixes,G__18588){
return (function (_,p__18591){var map__18592 = p__18591;var map__18592__$1 = ((cljs.core.seq_QMARK_.call(null,map__18592))?cljs.core.apply.call(null,cljs.core.hash_map,map__18592):map__18592);var to = cljs.core.get.call(null,map__18592__$1,new cljs.core.Keyword(null,"to","to",1013907949));var from = cljs.core.get.call(null,map__18592__$1,new cljs.core.Keyword(null,"from","from",1017056028));return lt.objs.editor.replace.call(null,ed,from,to,suggestion);
});})(fixes,G__18588))
], null);
});})(fixes,G__18588))
,fixes);
} else
{if(cljs.core._EQ_.call(null,"missing type annotation",G__18588))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",1017460895),"Add",new cljs.core.Keyword(null,"action","action",3885920680),((function (G__18588){
return (function (p__18593,p__18594){var map__18595 = p__18593;var map__18595__$1 = ((cljs.core.seq_QMARK_.call(null,map__18595))?cljs.core.apply.call(null,cljs.core.hash_map,map__18595):map__18595);var details = cljs.core.get.call(null,map__18595__$1,new cljs.core.Keyword(null,"details","details",2571625908));var map__18596 = p__18594;var map__18596__$1 = ((cljs.core.seq_QMARK_.call(null,map__18596))?cljs.core.apply.call(null,cljs.core.hash_map,map__18596):map__18596);var from = cljs.core.get.call(null,map__18596__$1,new cljs.core.Keyword(null,"from","from",1017056028));var ann = [cljs.core.str(clojure.string.trim.call(null,cljs.core.second.call(null,cljs.core.re_find.call(null,/I inferred the type annotation so you can copy it into your code:([\s\S]*$)/m,details)))),cljs.core.str("\n")].join('');return lt.objs.editor.replace.call(null,ed,from,ann);
});})(G__18588))
], null)], null);
} else
{if(cljs.core._EQ_.call(null,"unused import",G__18588))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",1017460895),"Remove",new cljs.core.Keyword(null,"action","action",3885920680),((function (G__18588){
return (function (_,p__18597){var map__18598 = p__18597;var map__18598__$1 = ((cljs.core.seq_QMARK_.call(null,map__18598))?cljs.core.apply.call(null,cljs.core.hash_map,map__18598):map__18598);var to = cljs.core.get.call(null,map__18598__$1,new cljs.core.Keyword(null,"to","to",1013907949));var from = cljs.core.get.call(null,map__18598__$1,new cljs.core.Keyword(null,"from","from",1017056028));lt.objs.editor.replace.call(null,ed,from,to,"");
return CodeMirror.commands.deleteLine(lt.objs.editor.__GT_cm_ed.call(null,ed));
});})(G__18588))
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
if(cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__18599_SHARP_){return cljs.core._EQ_.call(null,"error",new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(p1__18599_SHARP_));
}),res)))
{lt.objs.notifos.set_msg_BANG_.call(null,"Elm make returned errors; check you editor or the console for details",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
} else
{}
var seq__18606 = cljs.core.seq.call(null,res);var chunk__18607 = null;var count__18608 = 0;var i__18609 = 0;while(true){
if((i__18609 < count__18608))
{var map__18610 = cljs.core._nth.call(null,chunk__18607,i__18609);var map__18610__$1 = ((cljs.core.seq_QMARK_.call(null,map__18610))?cljs.core.apply.call(null,cljs.core.hash_map,map__18610):map__18610);var row = map__18610__$1;var tag = cljs.core.get.call(null,map__18610__$1,new cljs.core.Keyword(null,"tag","tag",1014018828));var subregion = cljs.core.get.call(null,map__18610__$1,new cljs.core.Keyword(null,"subregion","subregion",1501636774));var region = cljs.core.get.call(null,map__18610__$1,new cljs.core.Keyword(null,"region","region",4374076006));var details = cljs.core.get.call(null,map__18610__$1,new cljs.core.Keyword(null,"details","details",2571625908));var overview = cljs.core.get.call(null,map__18610__$1,new cljs.core.Keyword(null,"overview","overview",1544020203));var type = cljs.core.get.call(null,map__18610__$1,new cljs.core.Keyword(null,"type","type",1017479852));var file = cljs.core.get.call(null,map__18610__$1,new cljs.core.Keyword(null,"file","file",1017047278));var msg_18622 = [cljs.core.str(overview),cljs.core.str("\n"),cljs.core.str(lt.plugins.elm_light.colorize_msg.call(null,details))].join('');if(cljs.core.truth_((function (){var and__4872__auto__ = cljs.core._EQ_.call(null,path,file);if(and__4872__auto__)
{return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["error",null,"warning",null], null), null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [type], null));
} else
{return and__4872__auto__;
}
})()))
{lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"linter-result!","linter-result!",4482067001),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",1124275658),tag,new cljs.core.Keyword(null,"details","details",2571625908),msg_18622,new cljs.core.Keyword(null,"category","category",1064415344),cljs.core.keyword.call(null,type),new cljs.core.Keyword(null,"actions","actions",4147068015),lt.plugins.elm_light.linter_action.call(null,ed,row),new cljs.core.Keyword(null,"code-range","code-range",3297446095),lt.plugins.elm_light.__GT_lt_range.call(null,(function (){var or__4884__auto__ = subregion;if(cljs.core.truth_(or__4884__auto__))
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
var G__18623 = seq__18606;
var G__18624 = chunk__18607;
var G__18625 = count__18608;
var G__18626 = (i__18609 + 1);
seq__18606 = G__18623;
chunk__18607 = G__18624;
count__18608 = G__18625;
i__18609 = G__18626;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__18606);if(temp__4092__auto__)
{var seq__18606__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18606__$1))
{var c__5632__auto__ = cljs.core.chunk_first.call(null,seq__18606__$1);{
var G__18627 = cljs.core.chunk_rest.call(null,seq__18606__$1);
var G__18628 = c__5632__auto__;
var G__18629 = cljs.core.count.call(null,c__5632__auto__);
var G__18630 = 0;
seq__18606 = G__18627;
chunk__18607 = G__18628;
count__18608 = G__18629;
i__18609 = G__18630;
continue;
}
} else
{var map__18611 = cljs.core.first.call(null,seq__18606__$1);var map__18611__$1 = ((cljs.core.seq_QMARK_.call(null,map__18611))?cljs.core.apply.call(null,cljs.core.hash_map,map__18611):map__18611);var row = map__18611__$1;var tag = cljs.core.get.call(null,map__18611__$1,new cljs.core.Keyword(null,"tag","tag",1014018828));var subregion = cljs.core.get.call(null,map__18611__$1,new cljs.core.Keyword(null,"subregion","subregion",1501636774));var region = cljs.core.get.call(null,map__18611__$1,new cljs.core.Keyword(null,"region","region",4374076006));var details = cljs.core.get.call(null,map__18611__$1,new cljs.core.Keyword(null,"details","details",2571625908));var overview = cljs.core.get.call(null,map__18611__$1,new cljs.core.Keyword(null,"overview","overview",1544020203));var type = cljs.core.get.call(null,map__18611__$1,new cljs.core.Keyword(null,"type","type",1017479852));var file = cljs.core.get.call(null,map__18611__$1,new cljs.core.Keyword(null,"file","file",1017047278));var msg_18631 = [cljs.core.str(overview),cljs.core.str("\n"),cljs.core.str(lt.plugins.elm_light.colorize_msg.call(null,details))].join('');if(cljs.core.truth_((function (){var and__4872__auto__ = cljs.core._EQ_.call(null,path,file);if(and__4872__auto__)
{return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["error",null,"warning",null], null), null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [type], null));
} else
{return and__4872__auto__;
}
})()))
{lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"linter-result!","linter-result!",4482067001),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",1124275658),tag,new cljs.core.Keyword(null,"details","details",2571625908),msg_18631,new cljs.core.Keyword(null,"category","category",1064415344),cljs.core.keyword.call(null,type),new cljs.core.Keyword(null,"actions","actions",4147068015),lt.plugins.elm_light.linter_action.call(null,ed,row),new cljs.core.Keyword(null,"code-range","code-range",3297446095),lt.plugins.elm_light.__GT_lt_range.call(null,(function (){var or__4884__auto__ = subregion;if(cljs.core.truth_(or__4884__auto__))
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
var G__18632 = cljs.core.next.call(null,seq__18606__$1);
var G__18633 = null;
var G__18634 = 0;
var G__18635 = 0;
seq__18606 = G__18632;
chunk__18607 = G__18633;
count__18608 = G__18634;
i__18609 = G__18635;
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
lt.plugins.elm_light.__BEH__make_project = (function __BEH__make_project(ed){var info = new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed));var project_path = lt.plugins.elm_light.utils.project_path.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(info));var map__18613 = new cljs.core.Keyword(null,"make-info","make-info",2233727135).cljs$core$IFn$_invoke$arity$1(lt.plugins.elm_light.utils.parse_json_file.call(null,lt.objs.files.join.call(null,project_path,"elm-package.json")));var map__18613__$1 = ((cljs.core.seq_QMARK_.call(null,map__18613))?cljs.core.apply.call(null,cljs.core.hash_map,map__18613):map__18613);var out = cljs.core.get.call(null,map__18613__$1,new cljs.core.Keyword(null,"out","out",1014014656));var main = cljs.core.get.call(null,map__18613__$1,new cljs.core.Keyword(null,"main","main",1017248043));if(cljs.core.truth_((function (){var and__4872__auto__ = main;if(cljs.core.truth_(and__4872__auto__))
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
lt.plugins.elm_light.__BEH__elm_make_res = (function __BEH__elm_make_res(ed,p__18614){var map__18616 = p__18614;var map__18616__$1 = ((cljs.core.seq_QMARK_.call(null,map__18616))?cljs.core.apply.call(null,cljs.core.hash_map,map__18616):map__18616);var res = cljs.core.get.call(null,map__18616__$1,new cljs.core.Keyword(null,"res","res",1014017042));var outputFile = cljs.core.get.call(null,map__18616__$1,new cljs.core.Keyword(null,"outputFile","outputFile",4034596239));lt.objs.notifos.done_working.call(null,[cljs.core.str("Elm make compiled to: "),cljs.core.str(outputFile)].join(''));
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
lt.plugins.elm_light.__BEH__elm_doc = (function __BEH__elm_doc(ed){var pos = lt.objs.editor.__GT_cursor.call(null,ed);var token = lt.plugins.elm_light.utils.find_symbol.call(null,ed,pos);var command = new cljs.core.Keyword(null,"editor.elm.doc","editor.elm.doc",1570413537);var info = cljs.core.assoc.call(null,cljs.core.deref.call(null,ed).call(null,new cljs.core.Keyword(null,"info","info",1017141280)),new cljs.core.Keyword(null,"loc","loc",1014011570),pos,new cljs.core.Keyword(null,"sym","sym",1014018617),token);if(cljs.core.truth_(token))
{return lt.objs.clients.send.call(null,lt.plugins.elm_light.clients.get_eval_client.call(null,ed,command),command,info,new cljs.core.Keyword(null,"only","only",1017320222),ed);
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
lt.plugins.elm_light.__BEH__on_eval__DOT__one = (function __BEH__on_eval__DOT__one(ed){var pos = lt.objs.editor.__GT_cursor.call(null,ed);var info = cljs.core.conj.call(null,new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)),(cljs.core.truth_(lt.objs.editor.selection_QMARK_.call(null,ed))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"code","code",1016963423),lt.objs.editor.selection.call(null,ed),new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",1123661780),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(lt.objs.editor.__GT_cursor.call(null,ed,"start")),new cljs.core.Keyword(null,"end","end",1014004813),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(lt.objs.editor.__GT_cursor.call(null,ed,"end"))], null)], null):(function (){var temp__4090__auto__ = lt.plugins.elm_light.selection.get_top_level_expr.call(null,ed,pos);if(cljs.core.truth_(temp__4090__auto__))
{var rng = temp__4090__auto__;return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",1014015430),pos,new cljs.core.Keyword(null,"code","code",1016963423),lt.objs.editor.range.call(null,ed,new cljs.core.Keyword(null,"from","from",1017056028).cljs$core$IFn$_invoke$arity$1(rng),new cljs.core.Keyword(null,"to","to",1013907949).cljs$core$IFn$_invoke$arity$1(rng)),new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",1123661780),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"from","from",1017056028).cljs$core$IFn$_invoke$arity$1(rng)),new cljs.core.Keyword(null,"end","end",1014004813),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"end","end",1014004813).cljs$core$IFn$_invoke$arity$1(rng))], null)], null);
} else
{return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",1014015430),pos,new cljs.core.Keyword(null,"code","code",1016963423),lt.objs.editor.line.call(null,ed,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(pos)),new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",1123661780),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(pos),new cljs.core.Keyword(null,"end","end",1014004813),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(pos)], null)], null);
}
})()));return lt.object.raise.call(null,lt.plugins.elm_light.elm,new cljs.core.Keyword(null,"eval!","eval!",1110791799),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"origin","origin",4300251800),ed,new cljs.core.Keyword(null,"info","info",1017141280),info], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light","on-eval.one","lt.plugins.elm-light/on-eval.one",3108499739),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.__BEH__on_eval__DOT__one,new cljs.core.Keyword(null,"desc","desc",1016984067),"Elm repl: Eval current selection",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval.one","eval.one",1173589382),null], null), null));
lt.plugins.elm_light.__BEH__eval_BANG_ = (function __BEH__eval_BANG_(this$,event){var map__18618 = event;var map__18618__$1 = ((cljs.core.seq_QMARK_.call(null,map__18618))?cljs.core.apply.call(null,cljs.core.hash_map,map__18618):map__18618);var origin = cljs.core.get.call(null,map__18618__$1,new cljs.core.Keyword(null,"origin","origin",4300251800));var info = cljs.core.get.call(null,map__18618__$1,new cljs.core.Keyword(null,"info","info",1017141280));lt.objs.notifos.working.call(null,"Evaluating elm...");
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
lt.plugins.elm_light.__BEH__repl_restart_BANG_ = (function __BEH__repl_restart_BANG_(p__18619){var map__18621 = p__18619;var map__18621__$1 = ((cljs.core.seq_QMARK_.call(null,map__18621))?cljs.core.apply.call(null,cljs.core.hash_map,map__18621):map__18621);var ed = map__18621__$1;var info = cljs.core.get.call(null,map__18621__$1,new cljs.core.Keyword(null,"info","info",1017141280));var temp__4092__auto__ = new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));if(cljs.core.truth_(temp__4092__auto__))
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
var b_18636 = (function (){var or__4884__auto__ = cljs.core.first.call(null,lt.object.by_tag.call(null,new cljs.core.Keyword(null,"browser","browser",1164844698)));if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return lt.objs.browser.add.call(null);
}
})();var get_url_18637 = ((function (b_18636,path,client){
return (function (){return [cljs.core.str("http://localhost:"),cljs.core.str(new cljs.core.Keyword(null,"reactor-port","reactor-port",4649590590).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client))),cljs.core.str(path),cljs.core.str((cljs.core.truth_(debug_QMARK_)?"?debug":""))].join('');
});})(b_18636,path,client))
;if(cljs.core.truth_(new cljs.core.Keyword(null,"connected","connected",4729661051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client))))
{lt.object.raise.call(null,b_18636,new cljs.core.Keyword(null,"navigate!","navigate!",1766726722),get_url_18637.call(null));
} else
{lt.util.js.wait.call(null,100,((function (b_18636,get_url_18637,path,client){
return (function (){return lt.object.raise.call(null,b_18636,new cljs.core.Keyword(null,"navigate!","navigate!",1766726722),get_url_18637.call(null));
});})(b_18636,get_url_18637,path,client))
);
}
return lt.objs.notifos.done_working.call(null);
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light","elm-browse!","lt.plugins.elm-light/elm-browse!",2398181301),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.__BEH__elm_browse_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elm.browse","elm.browse",2486947908),null], null), null));
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light","elm-lang","lt.plugins.elm-light/elm-lang",1051216304),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elm.lang","elm.lang",1176612264),null], null), null));
lt.plugins.elm_light.elm = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.elm-light","elm-lang","lt.plugins.elm-light/elm-lang",1051216304));
lt.objs.sidebar.clients.add_connector.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),"Elm",new cljs.core.Keyword(null,"desc","desc",1016984067),"Select a directory to serve as the root of your elm project.",new cljs.core.Keyword(null,"connect","connect",1965255772),(function (){return lt.objs.dialogs.dir.call(null,lt.plugins.elm_light.elm,new cljs.core.Keyword(null,"connect","connect",1965255772));
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
lt.plugins.elm_light.linter.status_class = (function status_class(p__18062){var map__18064 = p__18062;var map__18064__$1 = ((cljs.core.seq_QMARK_.call(null,map__18064))?cljs.core.apply.call(null,cljs.core.hash_map,map__18064):map__18064);var warnings = cljs.core.get.call(null,map__18064__$1,new cljs.core.Keyword(null,"warnings","warnings",1511995337));var errors = cljs.core.get.call(null,map__18064__$1,new cljs.core.Keyword(null,"errors","errors",4014236381));if((errors > 0))
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
lt.plugins.elm_light.linter.status_text = (function status_text(p__18065){var map__18067 = p__18065;var map__18067__$1 = ((cljs.core.seq_QMARK_.call(null,map__18067))?cljs.core.apply.call(null,cljs.core.hash_map,map__18067):map__18067);var warnings = cljs.core.get.call(null,map__18067__$1,new cljs.core.Keyword(null,"warnings","warnings",1511995337));var errors = cljs.core.get.call(null,map__18067__$1,new cljs.core.Keyword(null,"errors","errors",4014236381));return [cljs.core.str("Lint status: "),cljs.core.str(errors),cljs.core.str("/"),cljs.core.str(warnings)].join('');
});
lt.plugins.elm_light.linter.__GT_status_ui = (function __GT_status_ui(p__18068){var map__18070 = p__18068;var map__18070__$1 = ((cljs.core.seq_QMARK_.call(null,map__18070))?cljs.core.apply.call(null,cljs.core.hash_map,map__18070):map__18070);var lint_summary = cljs.core.get.call(null,map__18070__$1,new cljs.core.Keyword(null,"lint-summary","lint-summary",2275048270));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("lint-status "),cljs.core.str(lt.plugins.elm_light.linter.status_class.call(null,lint_summary))].join('')], null),lt.plugins.elm_light.linter.status_text.call(null,lint_summary)], null);
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
return (function (p__18073){var vec__18074 = p__18073;var k = cljs.core.nth.call(null,vec__18074,0,null);var v = cljs.core.nth.call(null,vec__18074,1,null);return new cljs.core.PersistentArrayMap.fromArray([k,cljs.core.count.call(null,v)], true, false);
});})(results,temp__4090__auto__))
,cljs.core.group_by.call(null,new cljs.core.Keyword(null,"category","category",1064415344),cljs.core.map.call(null,new cljs.core.Keyword(null,"result","result",4374444943),cljs.core.vals.call(null,results)))));
} else
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",1110689146),0,new cljs.core.Keyword(null,"warning","warning",2138350350),0], null);
}
});
lt.plugins.elm_light.linter.update_status_for_editor = (function update_status_for_editor(ed){var map__18077 = lt.plugins.elm_light.linter.grouped_lint_count.call(null,ed);var map__18077__$1 = ((cljs.core.seq_QMARK_.call(null,map__18077))?cljs.core.apply.call(null,cljs.core.hash_map,map__18077):map__18077);var warning = cljs.core.get.call(null,map__18077__$1,new cljs.core.Keyword(null,"warning","warning",2138350350));var error = cljs.core.get.call(null,map__18077__$1,new cljs.core.Keyword(null,"error","error",1110689146));return lt.object.raise.call(null,lt.plugins.elm_light.linter.statusbar_lint_summary,new cljs.core.Keyword(null,"update!","update!",779473898),((function (map__18077,map__18077__$1,warning,error){
return (function (p1__18075_SHARP_){return cljs.core.assoc.call(null,p1__18075_SHARP_,new cljs.core.Keyword(null,"warnings","warnings",1511995337),(function (){var or__4884__auto__ = warning;if(cljs.core.truth_(or__4884__auto__))
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
});})(map__18077,map__18077__$1,warning,error))
);
});
lt.plugins.elm_light.linter.__BEH__update_linter_on_editor_change = (function __BEH__update_linter_on_editor_change(ed){return lt.plugins.elm_light.linter.update_status_for_editor.call(null,ed);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.linter","update-linter-on-editor-change","lt.plugins.elm-light.linter/update-linter-on-editor-change",2858337088),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.linter.__BEH__update_linter_on_editor_change,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"focus","focus",1111509066),null], null), null));
lt.plugins.elm_light.linter.remove_widget = (function remove_widget(ed,el){try{lt.util.dom.remove.call(null,el);
}catch (e18079){var e_18149 = e18079;}return lt.objs.editor.focus.call(null,ed);
});
lt.plugins.elm_light.linter.remove_res = (function remove_res(ed,res_id){var map__18081_18150 = cljs.core.get_in.call(null,cljs.core.deref.call(null,ed),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linter-results","linter-results",4482067083),res_id], null));var map__18081_18151__$1 = ((cljs.core.seq_QMARK_.call(null,map__18081_18150))?cljs.core.apply.call(null,cljs.core.hash_map,map__18081_18150):map__18081_18150);var dill_18152 = map__18081_18151__$1;var result_18153 = cljs.core.get.call(null,map__18081_18151__$1,new cljs.core.Keyword(null,"result","result",4374444943));var mark_18154 = cljs.core.get.call(null,map__18081_18151__$1,new cljs.core.Keyword(null,"mark","mark",1017248319));if(cljs.core.truth_(mark_18154))
{mark_18154.clear();
} else
{}
lt.object.update_BANG_.call(null,ed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linter-results","linter-results",4482067083)], null),cljs.core.dissoc,res_id);
return lt.objs.editor.focus.call(null,ed);
});
lt.plugins.elm_light.linter.current_range = (function current_range(ed,mark){var rng = mark.find();var from = rng.from;var to = rng.to;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1017056028),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",1013907415),from.ch,new cljs.core.Keyword(null,"line","line",1017226086),from.line], null),new cljs.core.Keyword(null,"to","to",1013907949),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",1013907415),to.ch,new cljs.core.Keyword(null,"line","line",1017226086),to.line], null)], null);
});
lt.plugins.elm_light.linter.execute_action = (function execute_action(ed,res_id,action_fn,res){var map__18083 = cljs.core.get_in.call(null,cljs.core.deref.call(null,ed),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linter-results","linter-results",4482067083),res_id], null));var map__18083__$1 = ((cljs.core.seq_QMARK_.call(null,map__18083))?cljs.core.apply.call(null,cljs.core.hash_map,map__18083):map__18083);var mark = cljs.core.get.call(null,map__18083__$1,new cljs.core.Keyword(null,"mark","mark",1017248319));action_fn.call(null,res,lt.plugins.elm_light.linter.current_range.call(null,ed,mark));
return lt.plugins.elm_light.linter.remove_res.call(null,ed,res_id);
});
lt.plugins.elm_light.linter.action_ui = (function action_ui(ed,action,res_id,res){var e__6289__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.button","span.button",4282180040),[cljs.core.str(new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(action))].join('')], null));var seq__18090_18155 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__6289__auto__){
return (function (){return lt.plugins.elm_light.linter.execute_action.call(null,ed,res_id,new cljs.core.Keyword(null,"action","action",3885920680).cljs$core$IFn$_invoke$arity$1(action),res);
});})(e__6289__auto__))
], null)));var chunk__18091_18156 = null;var count__18092_18157 = 0;var i__18093_18158 = 0;while(true){
if((i__18093_18158 < count__18092_18157))
{var vec__18094_18159 = cljs.core._nth.call(null,chunk__18091_18156,i__18093_18158);var ev__6290__auto___18160 = cljs.core.nth.call(null,vec__18094_18159,0,null);var func__6291__auto___18161 = cljs.core.nth.call(null,vec__18094_18159,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___18160,func__6291__auto___18161);
{
var G__18162 = seq__18090_18155;
var G__18163 = chunk__18091_18156;
var G__18164 = count__18092_18157;
var G__18165 = (i__18093_18158 + 1);
seq__18090_18155 = G__18162;
chunk__18091_18156 = G__18163;
count__18092_18157 = G__18164;
i__18093_18158 = G__18165;
continue;
}
} else
{var temp__4092__auto___18166 = cljs.core.seq.call(null,seq__18090_18155);if(temp__4092__auto___18166)
{var seq__18090_18167__$1 = temp__4092__auto___18166;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18090_18167__$1))
{var c__5632__auto___18168 = cljs.core.chunk_first.call(null,seq__18090_18167__$1);{
var G__18169 = cljs.core.chunk_rest.call(null,seq__18090_18167__$1);
var G__18170 = c__5632__auto___18168;
var G__18171 = cljs.core.count.call(null,c__5632__auto___18168);
var G__18172 = 0;
seq__18090_18155 = G__18169;
chunk__18091_18156 = G__18170;
count__18092_18157 = G__18171;
i__18093_18158 = G__18172;
continue;
}
} else
{var vec__18095_18173 = cljs.core.first.call(null,seq__18090_18167__$1);var ev__6290__auto___18174 = cljs.core.nth.call(null,vec__18095_18173,0,null);var func__6291__auto___18175 = cljs.core.nth.call(null,vec__18095_18173,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___18174,func__6291__auto___18175);
{
var G__18176 = cljs.core.next.call(null,seq__18090_18167__$1);
var G__18177 = null;
var G__18178 = 0;
var G__18179 = 0;
seq__18090_18155 = G__18176;
chunk__18091_18156 = G__18177;
count__18092_18157 = G__18178;
i__18093_18158 = G__18179;
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
lt.plugins.elm_light.linter.inline_ui = (function inline_ui(ed,res_id,p__18099){var map__18107 = p__18099;var map__18107__$1 = ((cljs.core.seq_QMARK_.call(null,map__18107))?cljs.core.apply.call(null,cljs.core.hash_map,map__18107):map__18107);var res = map__18107__$1;var actions = cljs.core.get.call(null,map__18107__$1,new cljs.core.Keyword(null,"actions","actions",4147068015));var category = cljs.core.get.call(null,map__18107__$1,new cljs.core.Keyword(null,"category","category",1064415344));var details = cljs.core.get.call(null,map__18107__$1,new cljs.core.Keyword(null,"details","details",2571625908));var title = cljs.core.get.call(null,map__18107__$1,new cljs.core.Keyword(null,"title","title",1124275658));var e__6289__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tabindex","tabindex",4410954191),-1,new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("linter-res "),cljs.core.str((function (){var or__4884__auto__ = cljs.core.name.call(null,category);if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return "error";
}
})())].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.title","p.title",3057381068),title], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.details","div.details",4139669847),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),details], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),cljs.core.map.call(null,((function (map__18107,map__18107__$1,res,actions,category,details,title){
return (function (p1__18096_SHARP_){return lt.plugins.elm_light.linter.action_ui.call(null,ed,p1__18096_SHARP_,res_id,res);
});})(map__18107,map__18107__$1,res,actions,category,details,title))
,actions)], null)], null)], null));var seq__18108_18180 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blur","blur",1016931289),((function (e__6289__auto__,map__18107,map__18107__$1,res,actions,category,details,title){
return (function (p1__18097_SHARP_){return lt.plugins.elm_light.linter.remove_widget.call(null,ed,p1__18097_SHARP_.target);
});})(e__6289__auto__,map__18107,map__18107__$1,res,actions,category,details,title))
,new cljs.core.Keyword(null,"keydown","keydown",4493897459),((function (e__6289__auto__,map__18107,map__18107__$1,res,actions,category,details,title){
return (function (p1__18098_SHARP_){var kc = p1__18098_SHARP_.keyCode;if(cljs.core._EQ_.call(null,kc,27))
{lt.plugins.elm_light.linter.remove_widget.call(null,ed,p1__18098_SHARP_.target);
} else
{}
if((cljs.core._EQ_.call(null,kc,13)) && (cljs.core.seq.call(null,actions)))
{p1__18098_SHARP_.preventDefault();
p1__18098_SHARP_.stopPropagation();
return lt.plugins.elm_light.linter.execute_action.call(null,ed,res_id,new cljs.core.Keyword(null,"action","action",3885920680).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,actions)),res);
} else
{return null;
}
});})(e__6289__auto__,map__18107,map__18107__$1,res,actions,category,details,title))
], null)));var chunk__18109_18181 = null;var count__18110_18182 = 0;var i__18111_18183 = 0;while(true){
if((i__18111_18183 < count__18110_18182))
{var vec__18112_18184 = cljs.core._nth.call(null,chunk__18109_18181,i__18111_18183);var ev__6290__auto___18185 = cljs.core.nth.call(null,vec__18112_18184,0,null);var func__6291__auto___18186 = cljs.core.nth.call(null,vec__18112_18184,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___18185,func__6291__auto___18186);
{
var G__18187 = seq__18108_18180;
var G__18188 = chunk__18109_18181;
var G__18189 = count__18110_18182;
var G__18190 = (i__18111_18183 + 1);
seq__18108_18180 = G__18187;
chunk__18109_18181 = G__18188;
count__18110_18182 = G__18189;
i__18111_18183 = G__18190;
continue;
}
} else
{var temp__4092__auto___18191 = cljs.core.seq.call(null,seq__18108_18180);if(temp__4092__auto___18191)
{var seq__18108_18192__$1 = temp__4092__auto___18191;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18108_18192__$1))
{var c__5632__auto___18193 = cljs.core.chunk_first.call(null,seq__18108_18192__$1);{
var G__18194 = cljs.core.chunk_rest.call(null,seq__18108_18192__$1);
var G__18195 = c__5632__auto___18193;
var G__18196 = cljs.core.count.call(null,c__5632__auto___18193);
var G__18197 = 0;
seq__18108_18180 = G__18194;
chunk__18109_18181 = G__18195;
count__18110_18182 = G__18196;
i__18111_18183 = G__18197;
continue;
}
} else
{var vec__18113_18198 = cljs.core.first.call(null,seq__18108_18192__$1);var ev__6290__auto___18199 = cljs.core.nth.call(null,vec__18113_18198,0,null);var func__6291__auto___18200 = cljs.core.nth.call(null,vec__18113_18198,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___18199,func__6291__auto___18200);
{
var G__18201 = cljs.core.next.call(null,seq__18108_18192__$1);
var G__18202 = null;
var G__18203 = 0;
var G__18204 = 0;
seq__18108_18180 = G__18201;
chunk__18109_18181 = G__18202;
count__18110_18182 = G__18203;
i__18111_18183 = G__18204;
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
lt.plugins.elm_light.linter.add_widget = (function add_widget(ed,res_id){var map__18115 = cljs.core.get_in.call(null,cljs.core.deref.call(null,ed),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linter-results","linter-results",4482067083),res_id], null));var map__18115__$1 = ((cljs.core.seq_QMARK_.call(null,map__18115))?cljs.core.apply.call(null,cljs.core.hash_map,map__18115):map__18115);var result = cljs.core.get.call(null,map__18115__$1,new cljs.core.Keyword(null,"result","result",4374444943));var mark = cljs.core.get.call(null,map__18115__$1,new cljs.core.Keyword(null,"mark","mark",1017248319));var ui = lt.plugins.elm_light.linter.inline_ui.call(null,ed,res_id,result);var from = mark.find().from;lt.objs.editor.__GT_cm_ed.call(null,ed).addWidget(from,ui,{"scrollIntoView": true});
return lt.util.dom.focus.call(null,ui);
});
lt.plugins.elm_light.linter.create_mark = (function create_mark(ed,p__18116){var map__18118 = p__18116;var map__18118__$1 = ((cljs.core.seq_QMARK_.call(null,map__18118))?cljs.core.apply.call(null,cljs.core.hash_map,map__18118):map__18118);var code_range = cljs.core.get.call(null,map__18118__$1,new cljs.core.Keyword(null,"code-range","code-range",3297446095));var category = cljs.core.get.call(null,map__18118__$1,new cljs.core.Keyword(null,"category","category",1064415344));var from = new cljs.core.Keyword(null,"from","from",1017056028).cljs$core$IFn$_invoke$arity$1(code_range);var to = ((!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"to","to",1013907949).cljs$core$IFn$_invoke$arity$1(code_range),from)))?new cljs.core.Keyword(null,"to","to",1013907949).cljs$core$IFn$_invoke$arity$1(code_range):cljs.core.assoc.call(null,from,new cljs.core.Keyword(null,"ch","ch",1013907415),(lt.objs.editor.line_length.call(null,ed,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(from)) - 1)));return lt.objs.editor.mark.call(null,ed,from,to,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",1004015509),[cljs.core.str("lint-"),cljs.core.str((function (){var or__4884__auto__ = cljs.core.name.call(null,category);if(cljs.core.truth_(or__4884__auto__))
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
lt.plugins.elm_light.linter.__BEH__clear_linter_results_BANG_ = (function __BEH__clear_linter_results_BANG_(ed){var seq__18125_18205 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"linter-results","linter-results",4482067083).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));var chunk__18126_18206 = null;var count__18127_18207 = 0;var i__18128_18208 = 0;while(true){
if((i__18128_18208 < count__18127_18207))
{var vec__18129_18209 = cljs.core._nth.call(null,chunk__18126_18206,i__18128_18208);var id_18210 = cljs.core.nth.call(null,vec__18129_18209,0,null);var res_18211 = cljs.core.nth.call(null,vec__18129_18209,1,null);var temp__4092__auto___18212 = new cljs.core.Keyword(null,"mark","mark",1017248319).cljs$core$IFn$_invoke$arity$1(res_18211);if(cljs.core.truth_(temp__4092__auto___18212))
{var m_18213 = temp__4092__auto___18212;m_18213.clear();
} else
{}
var temp__4092__auto___18214 = new cljs.core.Keyword(null,"widget","widget",4520824246).cljs$core$IFn$_invoke$arity$1(res_18211);if(cljs.core.truth_(temp__4092__auto___18214))
{var w_18215 = temp__4092__auto___18214;lt.util.dom.remove.call(null,w_18215);
} else
{}
{
var G__18216 = seq__18125_18205;
var G__18217 = chunk__18126_18206;
var G__18218 = count__18127_18207;
var G__18219 = (i__18128_18208 + 1);
seq__18125_18205 = G__18216;
chunk__18126_18206 = G__18217;
count__18127_18207 = G__18218;
i__18128_18208 = G__18219;
continue;
}
} else
{var temp__4092__auto___18220 = cljs.core.seq.call(null,seq__18125_18205);if(temp__4092__auto___18220)
{var seq__18125_18221__$1 = temp__4092__auto___18220;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18125_18221__$1))
{var c__5632__auto___18222 = cljs.core.chunk_first.call(null,seq__18125_18221__$1);{
var G__18223 = cljs.core.chunk_rest.call(null,seq__18125_18221__$1);
var G__18224 = c__5632__auto___18222;
var G__18225 = cljs.core.count.call(null,c__5632__auto___18222);
var G__18226 = 0;
seq__18125_18205 = G__18223;
chunk__18126_18206 = G__18224;
count__18127_18207 = G__18225;
i__18128_18208 = G__18226;
continue;
}
} else
{var vec__18130_18227 = cljs.core.first.call(null,seq__18125_18221__$1);var id_18228 = cljs.core.nth.call(null,vec__18130_18227,0,null);var res_18229 = cljs.core.nth.call(null,vec__18130_18227,1,null);var temp__4092__auto___18230__$1 = new cljs.core.Keyword(null,"mark","mark",1017248319).cljs$core$IFn$_invoke$arity$1(res_18229);if(cljs.core.truth_(temp__4092__auto___18230__$1))
{var m_18231 = temp__4092__auto___18230__$1;m_18231.clear();
} else
{}
var temp__4092__auto___18232__$1 = new cljs.core.Keyword(null,"widget","widget",4520824246).cljs$core$IFn$_invoke$arity$1(res_18229);if(cljs.core.truth_(temp__4092__auto___18232__$1))
{var w_18233 = temp__4092__auto___18232__$1;lt.util.dom.remove.call(null,w_18233);
} else
{}
{
var G__18234 = cljs.core.next.call(null,seq__18125_18221__$1);
var G__18235 = null;
var G__18236 = 0;
var G__18237 = 0;
seq__18125_18205 = G__18234;
chunk__18126_18206 = G__18235;
count__18127_18207 = G__18236;
i__18128_18208 = G__18237;
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
lt.plugins.elm_light.linter.find_current_lint_mark = (function find_current_lint_mark(ed){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__18131_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"linter","linter",4206213986),p1__18131_SHARP_.lttype);
}),lt.objs.editor.find_marks.call(null,ed,lt.objs.editor.__GT_cursor.call(null,ed))));
});
lt.plugins.elm_light.linter.get_widget_by_mark = (function get_widget_by_mark(ed,mark){return cljs.core.get_in.call(null,cljs.core.deref.call(null,ed),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linter-results","linter-results",4482067083),mark.ltlintid,new cljs.core.Keyword(null,"widget","widget",4520824246)], null));
});
lt.plugins.elm_light.linter.mark__GT_pos = (function mark__GT_pos(mark){var cm_pos = mark.find().from;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",1013907415),cm_pos.ch,new cljs.core.Keyword(null,"line","line",1017226086),cm_pos.line], null);
});
lt.plugins.elm_light.linter.get_all_lint_marks = (function get_all_lint_marks(ed){return cljs.core.sort_by.call(null,(function (p1__18133_SHARP_){return cljs.core.juxt.call(null,new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"ch","ch",1013907415)).call(null,lt.plugins.elm_light.linter.mark__GT_pos.call(null,p1__18133_SHARP_));
}),cljs.core.filter.call(null,(function (p1__18132_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"linter","linter",4206213986),p1__18132_SHARP_.lttype);
}),lt.objs.editor.__GT_cm_ed.call(null,ed).getAllMarks()));
});
lt.plugins.elm_light.linter.split_with_mark = (function split_with_mark(ed){var all_marks = lt.plugins.elm_light.linter.get_all_lint_marks.call(null,ed);var curr_mark = lt.plugins.elm_light.linter.find_current_lint_mark.call(null,ed);return cljs.core.split_with.call(null,((function (all_marks,curr_mark){
return (function (p1__18134_SHARP_){return !(cljs.core._EQ_.call(null,(cljs.core.truth_(curr_mark)?curr_mark.ltlintid:null),p1__18134_SHARP_.ltlintid));
});})(all_marks,curr_mark))
,all_marks);
});
lt.plugins.elm_light.linter.find_next_mark = (function find_next_mark(ed){var vec__18136 = lt.plugins.elm_light.linter.split_with_mark.call(null,ed);var ms1 = cljs.core.nth.call(null,vec__18136,0,null);var ms2 = cljs.core.nth.call(null,vec__18136,1,null);return cljs.core.first.call(null,cljs.core.into.call(null,cljs.core.vec.call(null,cljs.core.drop.call(null,1,ms2)),ms1));
});
lt.plugins.elm_light.linter.find_prev_mark = (function find_prev_mark(ed){var vec__18138 = lt.plugins.elm_light.linter.split_with_mark.call(null,ed);var ms1 = cljs.core.nth.call(null,vec__18138,0,null);var ms2 = cljs.core.nth.call(null,vec__18138,1,null);return cljs.core.first.call(null,cljs.core.into.call(null,cljs.core.reverse.call(null,cljs.core.drop.call(null,1,ms2)),ms1));
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
lt.plugins.elm_light.test.deps__GT_named = (function deps__GT_named(deps){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__18386){var vec__18387 = p__18386;var k = cljs.core.nth.call(null,vec__18387,0,null);var v = cljs.core.nth.call(null,vec__18387,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.elm_light.utils.nskw__GT_name.call(null,k),v], null);
}),deps));
});
lt.plugins.elm_light.test.__GT_test_config = (function __GT_test_config(project_cfg){return cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.assoc.call(null,cljs.core.update_in.call(null,project_cfg,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-directories","source-directories",4475397259)], null),lt.plugins.elm_light.test.__GT_test_src_dirs),new cljs.core.Keyword(null,"exposed-modules","exposed-modules",4185867084),cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependencies","dependencies",1517678747)], null),(function (p1__18388_SHARP_){return cljs.core.merge.call(null,p1__18388_SHARP_,lt.plugins.elm_light.test.default_test_deps);
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
return (function (p1__18389_SHARP_){return cljs.core.println.call(null,[cljs.core.str("Test package install: "),cljs.core.str(p1__18389_SHARP_)].join(''));
});})(args,proc))
);
proc.stderr.on("data",((function (args,proc){
return (function (p1__18390_SHARP_){return lt.objs.console.error.call(null,[cljs.core.str(p1__18390_SHARP_)].join(''));
});})(args,proc))
);
proc.on("exit",((function (args,proc){
return (function (p1__18391_SHARP_){if(cljs.core._EQ_.call(null,p1__18391_SHARP_,0))
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
}catch (e11247){var e = e11247;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,e.message], null);
}});
/**
* Format file or all elm files in dir using elm-format.
* If successful returns [true nil]
* If errors returns [false err]
*/
lt.plugins.elm_light.format.format_path = (function format_path(cwd,path){try{require("child_process").execSync([cljs.core.str("elm-format --yes "),cljs.core.str(path)].join(''),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cwd","cwd",1014003170),cwd,new cljs.core.Keyword(null,"stdio","stdio",1123664379),"pipe"], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);
}catch (e11249){var e = e11249;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,e.message], null);
}});
lt.plugins.elm_light.format.handle_format_error = (function handle_format_error(err){lt.objs.notifos.set_msg_BANG_.call(null,"Elm format reported errors. See console for details",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),"error",new cljs.core.Keyword(null,"timeout","timeout",3994960083),5000], null));
return lt.objs.console.error.call(null,err);
});
lt.plugins.elm_light.format.__BEH__elm_format = (function __BEH__elm_format(ed){var temp__4092__auto__ = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));if(cljs.core.truth_(temp__4092__auto__))
{var path = temp__4092__auto__;var pos = lt.objs.editor.__GT_cursor.call(null,ed);var vec__11251 = lt.plugins.elm_light.format.format_path.call(null,lt.plugins.elm_light.utils.project_path.call(null,path),path);var ok_QMARK_ = cljs.core.nth.call(null,vec__11251,0,null);var res = cljs.core.nth.call(null,vec__11251,1,null);if(cljs.core.truth_(ok_QMARK_))
{lt.objs.editor.pool.reload.call(null,ed);
} else
{lt.plugins.elm_light.format.handle_format_error.call(null,res);
}
return lt.objs.editor.move_cursor.call(null,ed,pos);
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.format","elm-format","lt.plugins.elm-light.format/elm-format",4432445084),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.format.__BEH__elm_format,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elm.format","elm.format",2598773169),null], null), null));
lt.plugins.elm_light.format.strip_module = (function strip_module(expr){return clojure.string.join.call(null,"\n",cljs.core.drop.call(null,3,clojure.string.split_lines.call(null,expr)));
});
lt.plugins.elm_light.format.__BEH__elm_format_expression = (function __BEH__elm_format_expression(ed){var pos = lt.objs.editor.__GT_cursor.call(null,ed);var cwd = lt.plugins.elm_light.utils.project_path.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed))));var temp__4092__auto__ = lt.plugins.elm_light.selection.get_top_level_expr.call(null,ed,pos);if(cljs.core.truth_(temp__4092__auto__))
{var map__11254 = temp__4092__auto__;var map__11254__$1 = ((cljs.core.seq_QMARK_.call(null,map__11254))?cljs.core.apply.call(null,cljs.core.hash_map,map__11254):map__11254);var to = cljs.core.get.call(null,map__11254__$1,new cljs.core.Keyword(null,"to","to",1013907949));var from = cljs.core.get.call(null,map__11254__$1,new cljs.core.Keyword(null,"from","from",1017056028));var vec__11255 = lt.plugins.elm_light.format.format_input.call(null,cwd,lt.objs.editor.range.call(null,ed,from,to));var ok_QMARK_ = cljs.core.nth.call(null,vec__11255,0,null);var res = cljs.core.nth.call(null,vec__11255,1,null);if(cljs.core.truth_(ok_QMARK_))
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
lt.plugins.elm_light.format.__BEH__elm_format_buffer = (function __BEH__elm_format_buffer(ed){var pos = lt.objs.editor.__GT_cursor.call(null,ed);var vec__11257 = lt.plugins.elm_light.format.format_input.call(null,lt.plugins.elm_light.utils.project_path.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)))),lt.objs.editor.__GT_val.call(null,ed));var ok_QMARK_ = cljs.core.nth.call(null,vec__11257,0,null);var res = cljs.core.nth.call(null,vec__11257,1,null);if(cljs.core.truth_(ok_QMARK_))
{lt.objs.editor.set_val.call(null,ed,res);
} else
{lt.plugins.elm_light.format.handle_format_error.call(null,res);
}
return lt.objs.editor.move_cursor.call(null,ed,pos);
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