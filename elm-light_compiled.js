if(!lt.util.load.provided_QMARK_('cljs.core.async.impl.protocols')) {
goog.provide('cljs.core.async.impl.protocols');
goog.require('cljs.core');
cljs.core.async.impl.protocols.MAX_QUEUE_SIZE = 1024;
cljs.core.async.impl.protocols.ReadPort = (function (){var obj17992 = {};return obj17992;
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
cljs.core.async.impl.protocols.WritePort = (function (){var obj17994 = {};return obj17994;
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
cljs.core.async.impl.protocols.Channel = (function (){var obj17996 = {};return obj17996;
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
cljs.core.async.impl.protocols.Handler = (function (){var obj17998 = {};return obj17998;
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
cljs.core.async.impl.protocols.Buffer = (function (){var obj18000 = {};return obj18000;
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
cljs.core.async.impl.protocols.UnblockingBuffer = (function (){var obj18002 = {};return obj18002;
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
var G__17957 = (cnt + 1);
cnt = G__17957;
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
{var v_17958 = this$.pop();if(keep_QMARK_.call(null,v_17958))
{this$.unshift(v_17958);
} else
{}
{
var G__17959 = (x + 1);
x = G__17959;
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
var count_17988 = 0;while(true){
var m_17989 = cljs.core.async.impl.dispatch.tasks.pop();if((m_17989 == null))
{} else
{m_17989.call(null);
if((count_17988 < cljs.core.async.impl.dispatch.TASK_BATCH_SIZE))
{{
var G__17990 = (count_17988 + 1);
count_17988 = G__17990;
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
cljs.core.async.impl.channels.box = (function box(val){if(typeof cljs.core.async.impl.channels.t17963 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.impl.channels.t17963 = (function (val,box,meta17964){
this.val = val;
this.box = box;
this.meta17964 = meta17964;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
cljs.core.async.impl.channels.t17963.cljs$lang$type = true;
cljs.core.async.impl.channels.t17963.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t17963";
cljs.core.async.impl.channels.t17963.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async.impl.channels/t17963");
});
cljs.core.async.impl.channels.t17963.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.val;
});
cljs.core.async.impl.channels.t17963.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17965){var self__ = this;
var _17965__$1 = this;return self__.meta17964;
});
cljs.core.async.impl.channels.t17963.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17965,meta17964__$1){var self__ = this;
var _17965__$1 = this;return (new cljs.core.async.impl.channels.t17963(self__.val,self__.box,meta17964__$1));
});
cljs.core.async.impl.channels.__GT_t17963 = (function __GT_t17963(val__$1,box__$1,meta17964){return (new cljs.core.async.impl.channels.t17963(val__$1,box__$1,meta17964));
});
}
return (new cljs.core.async.impl.channels.t17963(val,box,null));
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
var taker_17976 = self__.takes.pop();if((taker_17976 == null))
{} else
{if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker_17976))
{var take_cb_17977 = cljs.core.async.impl.protocols.commit.call(null,taker_17976);cljs.core.async.impl.dispatch.run.call(null,((function (take_cb_17977,taker_17976,this$__$1){
return (function (){return take_cb_17977.call(null,null);
});})(take_cb_17977,taker_17976,this$__$1))
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
var G__18023 = (level + 1);
level = G__18023;
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
var skip_list_node__3 = (function (k,v,level){var arr = (new Array((level + 1)));var i_18024 = 0;while(true){
if((i_18024 < arr.length))
{(arr[i_18024] = null);
{
var G__18025 = (i_18024 + 1);
i_18024 = G__18025;
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
var G__18026 = x_SINGLEQUOTE_;
x__$1 = G__18026;
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
var G__18027 = x__$1;
var G__18028 = k;
var G__18029 = (level - 1);
var G__18030 = update;
x = G__18027;
k = G__18028;
level = G__18029;
update = G__18030;
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
{var i_18031 = (self__.level + 1);while(true){
if((i_18031 <= (new_level + 1)))
{(update[i_18031] = self__.header);
{
var G__18032 = (i_18031 + 1);
i_18031 = G__18032;
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
{var i_18033 = 0;while(true){
if((i_18033 <= self__.level))
{var links_18034 = (update[i_18033]).forward;if(((links_18034[i_18033]) === x__$1))
{(links_18034[i_18033] = (x__$1.forward[i_18033]));
{
var G__18035 = (i_18033 + 1);
i_18033 = G__18035;
continue;
}
} else
{{
var G__18036 = (i_18033 + 1);
i_18033 = G__18036;
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
var G__18037 = x_SINGLEQUOTE_;
x__$1 = G__18037;
continue;
}
}
}
break;
}
})();if(!((nx == null)))
{{
var G__18038 = nx;
var G__18039 = (level__$1 - 1);
x = G__18038;
level__$1 = G__18039;
continue;
}
} else
{{
var G__18040 = x;
var G__18041 = (level__$1 - 1);
x = G__18040;
level__$1 = G__18041;
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
var G__18042 = x_SINGLEQUOTE_;
x__$1 = G__18042;
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
var G__18043 = nx;
var G__18044 = (level__$1 - 1);
x = G__18043;
level__$1 = G__18044;
continue;
}
} else
{{
var G__18045 = x;
var G__18046 = (level__$1 - 1);
x = G__18045;
level__$1 = G__18046;
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
cljs.core.async.impl.ioc_helpers.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.impl.ioc_helpers.t17887 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t17887 = (function (f,fn_handler,meta17888){
this.f = f;
this.fn_handler = fn_handler;
this.meta17888 = meta17888;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.impl.ioc_helpers.t17887.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.t17887.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t17887";
cljs.core.async.impl.ioc_helpers.t17887.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async.impl.ioc-helpers/t17887");
});
cljs.core.async.impl.ioc_helpers.t17887.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.impl.ioc_helpers.t17887.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.impl.ioc_helpers.t17887.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.impl.ioc_helpers.t17887.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17889){var self__ = this;
var _17889__$1 = this;return self__.meta17888;
});
cljs.core.async.impl.ioc_helpers.t17887.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17889,meta17888__$1){var self__ = this;
var _17889__$1 = this;return (new cljs.core.async.impl.ioc_helpers.t17887(self__.f,self__.fn_handler,meta17888__$1));
});
cljs.core.async.impl.ioc_helpers.__GT_t17887 = (function __GT_t17887(f__$1,fn_handler__$1,meta17888){return (new cljs.core.async.impl.ioc_helpers.t17887(f__$1,fn_handler__$1,meta17888));
});
}
return (new cljs.core.async.impl.ioc_helpers.t17887(f,fn_handler,null));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function run_state_machine(state){return cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function run_state_machine_wrapped(state){try{return cljs.core.async.impl.ioc_helpers.run_state_machine.call(null,state);
}catch (e17891){if((e17891 instanceof Object))
{var ex = e17891;cljs.core.async.impl.protocols.close_BANG_.call(null,cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.USER_START_IDX));
throw ex;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17891;
} else
{return null;
}
}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function take_BANG_(state,blk,c){var temp__4090__auto__ = cljs.core.async.impl.protocols.take_BANG_.call(null,c,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (x){var statearr_17894_17937 = state;(statearr_17894_17937[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);
(statearr_17894_17937[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
})));if(cljs.core.truth_(temp__4090__auto__))
{var cb = temp__4090__auto__;var statearr_17895_17938 = state;(statearr_17895_17938[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
(statearr_17895_17938[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function put_BANG_(state,blk,c,val){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,c,val,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (){var statearr_17898_17939 = state;(statearr_17898_17939[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = null);
(statearr_17898_17939[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
})));if(cljs.core.truth_(temp__4090__auto__))
{var cb = temp__4090__auto__;var statearr_17899_17940 = state;(statearr_17899_17940[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
(statearr_17899_17940[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__17900){var map__17905 = p__17900;var map__17905__$1 = ((cljs.core.seq_QMARK_.call(null,map__17905))?cljs.core.apply.call(null,cljs.core.hash_map,map__17905):map__17905);var opts = map__17905__$1;var statearr_17906_17941 = state;(statearr_17906_17941[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4092__auto__ = cljs.core.async.do_alts.call(null,((function (map__17905,map__17905__$1,opts){
return (function (val){var statearr_17907_17942 = state;(statearr_17907_17942[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__17905,map__17905__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4092__auto__))
{var cb = temp__4092__auto__;var statearr_17908_17943 = state;(statearr_17908_17943[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__17900 = null;if (arguments.length > 3) {
  p__17900 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__17900);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__17944){
var state = cljs.core.first(arglist__17944);
arglist__17944 = cljs.core.next(arglist__17944);
var cont_block = cljs.core.first(arglist__17944);
arglist__17944 = cljs.core.next(arglist__17944);
var ports = cljs.core.first(arglist__17944);
var p__17900 = cljs.core.rest(arglist__17944);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__17900);
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
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5472__auto__,k17910,else__5473__auto__){var self__ = this;
var this__5472__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k17910,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893)))
{return self__.catch_block;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k17910,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687)))
{return self__.catch_exception;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k17910,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429)))
{return self__.finally_block;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k17910,new cljs.core.Keyword(null,"continue-block","continue-block",1486987097)))
{return self__.continue_block;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k17910,new cljs.core.Keyword(null,"prev","prev",1017353637)))
{return self__.prev;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k17910,else__5473__auto__);
} else
{return null;
}
}
}
}
}
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__17909){var self__ = this;
var this__5477__auto____$1 = this;var pred__17912 = cljs.core.keyword_identical_QMARK_;var expr__17913 = k__5478__auto__;if(cljs.core.truth_(pred__17912.call(null,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),expr__17913)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__17909,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__17912.call(null,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),expr__17913)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__17909,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__17912.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),expr__17913)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__17909,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__17912.call(null,new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),expr__17913)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__17909,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__17912.call(null,new cljs.core.Keyword(null,"prev","prev",1017353637),expr__17913)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__17909,self__.__meta,self__.__extmap,null));
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5478__auto__,G__17909),null));
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
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5469__auto__,G__17909){var self__ = this;
var this__5469__auto____$1 = this;return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__17909,self__.__extmap,self__.__hash));
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
cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function map__GT_ExceptionFrame(G__17911){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(new cljs.core.Keyword(null,"catch-block","catch-block",2343862893).cljs$core$IFn$_invoke$arity$1(G__17911),new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687).cljs$core$IFn$_invoke$arity$1(G__17911),new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(G__17911),new cljs.core.Keyword(null,"continue-block","continue-block",1486987097).cljs$core$IFn$_invoke$arity$1(G__17911),new cljs.core.Keyword(null,"prev","prev",1017353637).cljs$core$IFn$_invoke$arity$1(G__17911),null,cljs.core.dissoc.call(null,G__17911,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),new cljs.core.Keyword(null,"prev","prev",1017353637))));
});
cljs.core.async.impl.ioc_helpers.add_exception_frame = (function add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){var statearr_17916 = state;(statearr_17916[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame.call(null,catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES)));
return statearr_17916;
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
{var statearr_17922 = state;(statearr_17922[cljs.core.async.impl.ioc_helpers.STATE_IDX] = catch_block);
(statearr_17922[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = exception);
(statearr_17922[cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION] = null);
(statearr_17922[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),null,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),null));
return statearr_17922;
} else
{if(cljs.core.truth_((function (){var and__4872__auto__ = exception;if(cljs.core.truth_(and__4872__auto__))
{return (cljs.core.not.call(null,catch_block)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else
{return and__4872__auto__;
}
})()))
{var statearr_17923_17945 = state;(statearr_17923_17945[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = new cljs.core.Keyword(null,"prev","prev",1017353637).cljs$core$IFn$_invoke$arity$1(exception_frame));
{
var G__17946 = state;
state = G__17946;
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
{var statearr_17924 = state;(statearr_17924[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_17924[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),null));
return statearr_17924;
} else
{if(cljs.core.truth_((function (){var and__4872__auto__ = cljs.core.not.call(null,exception);if(and__4872__auto__)
{return new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__4872__auto__;
}
})()))
{var statearr_17925 = state;(statearr_17925[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_17925[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),null));
return statearr_17925;
} else
{if((cljs.core.not.call(null,exception)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame))))
{var statearr_17926 = state;(statearr_17926[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"continue-block","continue-block",1486987097).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_17926[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = new cljs.core.Keyword(null,"prev","prev",1017353637).cljs$core$IFn$_invoke$arity$1(exception_frame));
return statearr_17926;
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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t15323 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15323 = (function (f,fn_handler,meta15324){
this.f = f;
this.fn_handler = fn_handler;
this.meta15324 = meta15324;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15323.cljs$lang$type = true;
cljs.core.async.t15323.cljs$lang$ctorStr = "cljs.core.async/t15323";
cljs.core.async.t15323.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async/t15323");
});
cljs.core.async.t15323.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15323.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t15323.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t15323.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15325){var self__ = this;
var _15325__$1 = this;return self__.meta15324;
});
cljs.core.async.t15323.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15325,meta15324__$1){var self__ = this;
var _15325__$1 = this;return (new cljs.core.async.t15323(self__.f,self__.fn_handler,meta15324__$1));
});
cljs.core.async.__GT_t15323 = (function __GT_t15323(f__$1,fn_handler__$1,meta15324){return (new cljs.core.async.t15323(f__$1,fn_handler__$1,meta15324));
});
}
return (new cljs.core.async.t15323(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__15327 = buff;if(G__15327)
{var bit__5534__auto__ = null;if(cljs.core.truth_((function (){var or__4884__auto__ = bit__5534__auto__;if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return G__15327.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__15327.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15327);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15327);
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
{var val_17591 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_17591);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_17591,ret){
return (function (){return fn1.call(null,val_17591);
});})(val_17591,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__5732__auto___17592 = n;var x_17593 = 0;while(true){
if((x_17593 < n__5732__auto___17592))
{(a[x_17593] = 0);
{
var G__17594 = (x_17593 + 1);
x_17593 = G__17594;
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
var G__17595 = (i + 1);
i = G__17595;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t15331 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15331 = (function (flag,alt_flag,meta15332){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta15332 = meta15332;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15331.cljs$lang$type = true;
cljs.core.async.t15331.cljs$lang$ctorStr = "cljs.core.async/t15331";
cljs.core.async.t15331.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async/t15331");
});})(flag))
;
cljs.core.async.t15331.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15331.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t15331.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t15331.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_15333){var self__ = this;
var _15333__$1 = this;return self__.meta15332;
});})(flag))
;
cljs.core.async.t15331.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_15333,meta15332__$1){var self__ = this;
var _15333__$1 = this;return (new cljs.core.async.t15331(self__.flag,self__.alt_flag,meta15332__$1));
});})(flag))
;
cljs.core.async.__GT_t15331 = ((function (flag){
return (function __GT_t15331(flag__$1,alt_flag__$1,meta15332){return (new cljs.core.async.t15331(flag__$1,alt_flag__$1,meta15332));
});})(flag))
;
}
return (new cljs.core.async.t15331(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t15337 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15337 = (function (cb,flag,alt_handler,meta15338){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta15338 = meta15338;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15337.cljs$lang$type = true;
cljs.core.async.t15337.cljs$lang$ctorStr = "cljs.core.async/t15337";
cljs.core.async.t15337.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async/t15337");
});
cljs.core.async.t15337.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15337.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t15337.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t15337.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15339){var self__ = this;
var _15339__$1 = this;return self__.meta15338;
});
cljs.core.async.t15337.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15339,meta15338__$1){var self__ = this;
var _15339__$1 = this;return (new cljs.core.async.t15337(self__.cb,self__.flag,self__.alt_handler,meta15338__$1));
});
cljs.core.async.__GT_t15337 = (function __GT_t15337(cb__$1,flag__$1,alt_handler__$1,meta15338){return (new cljs.core.async.t15337(cb__$1,flag__$1,alt_handler__$1,meta15338));
});
}
return (new cljs.core.async.t15337(cb,flag,alt_handler,null));
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
return (function (p1__15340_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15340_SHARP_,port], null));
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
var G__17596 = (i + 1);
i = G__17596;
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
var alts_BANG___delegate = function (ports,p__15341){var map__15343 = p__15341;var map__15343__$1 = ((cljs.core.seq_QMARK_.call(null,map__15343))?cljs.core.apply.call(null,cljs.core.hash_map,map__15343):map__15343);var opts = map__15343__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__15341 = null;if (arguments.length > 1) {
  p__15341 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__15341);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__17597){
var ports = cljs.core.first(arglist__17597);
var p__15341 = cljs.core.rest(arglist__17597);
return alts_BANG___delegate(ports,p__15341);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t15351 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15351 = (function (ch,f,map_LT_,meta15352){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta15352 = meta15352;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15351.cljs$lang$type = true;
cljs.core.async.t15351.cljs$lang$ctorStr = "cljs.core.async/t15351";
cljs.core.async.t15351.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async/t15351");
});
cljs.core.async.t15351.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15351.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t15351.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15351.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t15354 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15354 = (function (fn1,_,meta15352,ch,f,map_LT_,meta15355){
this.fn1 = fn1;
this._ = _;
this.meta15352 = meta15352;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta15355 = meta15355;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15354.cljs$lang$type = true;
cljs.core.async.t15354.cljs$lang$ctorStr = "cljs.core.async/t15354";
cljs.core.async.t15354.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async/t15354");
});})(___$1))
;
cljs.core.async.t15354.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15354.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t15354.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t15354.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__15344_SHARP_){return f1.call(null,(((p1__15344_SHARP_ == null))?null:self__.f.call(null,p1__15344_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t15354.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_15356){var self__ = this;
var _15356__$1 = this;return self__.meta15355;
});})(___$1))
;
cljs.core.async.t15354.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_15356,meta15355__$1){var self__ = this;
var _15356__$1 = this;return (new cljs.core.async.t15354(self__.fn1,self__._,self__.meta15352,self__.ch,self__.f,self__.map_LT_,meta15355__$1));
});})(___$1))
;
cljs.core.async.__GT_t15354 = ((function (___$1){
return (function __GT_t15354(fn1__$1,___$2,meta15352__$1,ch__$2,f__$2,map_LT___$2,meta15355){return (new cljs.core.async.t15354(fn1__$1,___$2,meta15352__$1,ch__$2,f__$2,map_LT___$2,meta15355));
});})(___$1))
;
}
return (new cljs.core.async.t15354(fn1,___$1,self__.meta15352,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t15351.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15351.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15351.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15353){var self__ = this;
var _15353__$1 = this;return self__.meta15352;
});
cljs.core.async.t15351.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15353,meta15352__$1){var self__ = this;
var _15353__$1 = this;return (new cljs.core.async.t15351(self__.ch,self__.f,self__.map_LT_,meta15352__$1));
});
cljs.core.async.__GT_t15351 = (function __GT_t15351(ch__$1,f__$1,map_LT___$1,meta15352){return (new cljs.core.async.t15351(ch__$1,f__$1,map_LT___$1,meta15352));
});
}
return (new cljs.core.async.t15351(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t15360 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15360 = (function (ch,f,map_GT_,meta15361){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta15361 = meta15361;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15360.cljs$lang$type = true;
cljs.core.async.t15360.cljs$lang$ctorStr = "cljs.core.async/t15360";
cljs.core.async.t15360.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async/t15360");
});
cljs.core.async.t15360.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15360.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t15360.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15360.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t15360.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15360.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15360.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15362){var self__ = this;
var _15362__$1 = this;return self__.meta15361;
});
cljs.core.async.t15360.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15362,meta15361__$1){var self__ = this;
var _15362__$1 = this;return (new cljs.core.async.t15360(self__.ch,self__.f,self__.map_GT_,meta15361__$1));
});
cljs.core.async.__GT_t15360 = (function __GT_t15360(ch__$1,f__$1,map_GT___$1,meta15361){return (new cljs.core.async.t15360(ch__$1,f__$1,map_GT___$1,meta15361));
});
}
return (new cljs.core.async.t15360(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t15366 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15366 = (function (ch,p,filter_GT_,meta15367){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
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
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t15366.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15366.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t15366.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15366.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15366.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15368){var self__ = this;
var _15368__$1 = this;return self__.meta15367;
});
cljs.core.async.t15366.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15368,meta15367__$1){var self__ = this;
var _15368__$1 = this;return (new cljs.core.async.t15366(self__.ch,self__.p,self__.filter_GT_,meta15367__$1));
});
cljs.core.async.__GT_t15366 = (function __GT_t15366(ch__$1,p__$1,filter_GT___$1,meta15367){return (new cljs.core.async.t15366(ch__$1,p__$1,filter_GT___$1,meta15367));
});
}
return (new cljs.core.async.t15366(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12683__auto___17598 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__12683__auto___17598,out){
return (function (){var f__12684__auto__ = (function (){var switch__12613__auto__ = ((function (c__12683__auto___17598,out){
return (function (state_15430){var state_val_15431 = (state_15430[1]);if((state_val_15431 === 1))
{var state_15430__$1 = state_15430;var statearr_15432_17599 = state_15430__$1;(statearr_15432_17599[2] = null);
(statearr_15432_17599[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15431 === 2))
{var state_15430__$1 = state_15430;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15430__$1,4,ch);
} else
{if((state_val_15431 === 3))
{var inst_15428 = (state_15430[2]);var state_15430__$1 = state_15430;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15430__$1,inst_15428);
} else
{if((state_val_15431 === 4))
{var inst_15412 = (state_15430[7]);var inst_15412__$1 = (state_15430[2]);var inst_15413 = (inst_15412__$1 == null);var state_15430__$1 = (function (){var statearr_15433 = state_15430;(statearr_15433[7] = inst_15412__$1);
return statearr_15433;
})();if(cljs.core.truth_(inst_15413))
{var statearr_15434_17600 = state_15430__$1;(statearr_15434_17600[1] = 5);
} else
{var statearr_15435_17601 = state_15430__$1;(statearr_15435_17601[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15431 === 5))
{var inst_15415 = cljs.core.async.close_BANG_.call(null,out);var state_15430__$1 = state_15430;var statearr_15436_17602 = state_15430__$1;(statearr_15436_17602[2] = inst_15415);
(statearr_15436_17602[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15431 === 6))
{var inst_15412 = (state_15430[7]);var inst_15417 = p.call(null,inst_15412);var state_15430__$1 = state_15430;if(cljs.core.truth_(inst_15417))
{var statearr_15437_17603 = state_15430__$1;(statearr_15437_17603[1] = 8);
} else
{var statearr_15438_17604 = state_15430__$1;(statearr_15438_17604[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15431 === 7))
{var inst_15426 = (state_15430[2]);var state_15430__$1 = state_15430;var statearr_15439_17605 = state_15430__$1;(statearr_15439_17605[2] = inst_15426);
(statearr_15439_17605[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15431 === 8))
{var inst_15412 = (state_15430[7]);var state_15430__$1 = state_15430;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15430__$1,11,out,inst_15412);
} else
{if((state_val_15431 === 9))
{var state_15430__$1 = state_15430;var statearr_15440_17606 = state_15430__$1;(statearr_15440_17606[2] = null);
(statearr_15440_17606[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15431 === 10))
{var inst_15423 = (state_15430[2]);var state_15430__$1 = (function (){var statearr_15441 = state_15430;(statearr_15441[8] = inst_15423);
return statearr_15441;
})();var statearr_15442_17607 = state_15430__$1;(statearr_15442_17607[2] = null);
(statearr_15442_17607[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15431 === 11))
{var inst_15420 = (state_15430[2]);var state_15430__$1 = state_15430;var statearr_15443_17608 = state_15430__$1;(statearr_15443_17608[2] = inst_15420);
(statearr_15443_17608[1] = 10);
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
});})(c__12683__auto___17598,out))
;return ((function (switch__12613__auto__,c__12683__auto___17598,out){
return (function() {
var state_machine__12614__auto__ = null;
var state_machine__12614__auto____0 = (function (){var statearr_15447 = [null,null,null,null,null,null,null,null,null];(statearr_15447[0] = state_machine__12614__auto__);
(statearr_15447[1] = 1);
return statearr_15447;
});
var state_machine__12614__auto____1 = (function (state_15430){while(true){
var ret_value__12615__auto__ = (function (){try{while(true){
var result__12616__auto__ = switch__12613__auto__.call(null,state_15430);if(cljs.core.keyword_identical_QMARK_.call(null,result__12616__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12616__auto__;
}
break;
}
}catch (e15448){if((e15448 instanceof Object))
{var ex__12617__auto__ = e15448;var statearr_15449_17609 = state_15430;(statearr_15449_17609[5] = ex__12617__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15430);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15448;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12615__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17610 = state_15430;
state_15430 = G__17610;
continue;
}
} else
{return ret_value__12615__auto__;
}
break;
}
});
state_machine__12614__auto__ = function(state_15430){
switch(arguments.length){
case 0:
return state_machine__12614__auto____0.call(this);
case 1:
return state_machine__12614__auto____1.call(this,state_15430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12614__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12614__auto____0;
state_machine__12614__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12614__auto____1;
return state_machine__12614__auto__;
})()
;})(switch__12613__auto__,c__12683__auto___17598,out))
})();var state__12685__auto__ = (function (){var statearr_15450 = f__12684__auto__.call(null);(statearr_15450[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12683__auto___17598);
return statearr_15450;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12685__auto__);
});})(c__12683__auto___17598,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__12683__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__12683__auto__){
return (function (){var f__12684__auto__ = (function (){var switch__12613__auto__ = ((function (c__12683__auto__){
return (function (state_15602){var state_val_15603 = (state_15602[1]);if((state_val_15603 === 1))
{var state_15602__$1 = state_15602;var statearr_15604_17611 = state_15602__$1;(statearr_15604_17611[2] = null);
(statearr_15604_17611[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15603 === 2))
{var state_15602__$1 = state_15602;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15602__$1,4,in$);
} else
{if((state_val_15603 === 3))
{var inst_15600 = (state_15602[2]);var state_15602__$1 = state_15602;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15602__$1,inst_15600);
} else
{if((state_val_15603 === 4))
{var inst_15548 = (state_15602[7]);var inst_15548__$1 = (state_15602[2]);var inst_15549 = (inst_15548__$1 == null);var state_15602__$1 = (function (){var statearr_15605 = state_15602;(statearr_15605[7] = inst_15548__$1);
return statearr_15605;
})();if(cljs.core.truth_(inst_15549))
{var statearr_15606_17612 = state_15602__$1;(statearr_15606_17612[1] = 5);
} else
{var statearr_15607_17613 = state_15602__$1;(statearr_15607_17613[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15603 === 5))
{var inst_15551 = cljs.core.async.close_BANG_.call(null,out);var state_15602__$1 = state_15602;var statearr_15608_17614 = state_15602__$1;(statearr_15608_17614[2] = inst_15551);
(statearr_15608_17614[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15603 === 6))
{var inst_15548 = (state_15602[7]);var inst_15553 = f.call(null,inst_15548);var inst_15558 = cljs.core.seq.call(null,inst_15553);var inst_15559 = inst_15558;var inst_15560 = null;var inst_15561 = 0;var inst_15562 = 0;var state_15602__$1 = (function (){var statearr_15609 = state_15602;(statearr_15609[8] = inst_15559);
(statearr_15609[9] = inst_15562);
(statearr_15609[10] = inst_15561);
(statearr_15609[11] = inst_15560);
return statearr_15609;
})();var statearr_15610_17615 = state_15602__$1;(statearr_15610_17615[2] = null);
(statearr_15610_17615[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15603 === 7))
{var inst_15598 = (state_15602[2]);var state_15602__$1 = state_15602;var statearr_15611_17616 = state_15602__$1;(statearr_15611_17616[2] = inst_15598);
(statearr_15611_17616[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15603 === 8))
{var inst_15562 = (state_15602[9]);var inst_15561 = (state_15602[10]);var inst_15564 = (inst_15562 < inst_15561);var inst_15565 = inst_15564;var state_15602__$1 = state_15602;if(cljs.core.truth_(inst_15565))
{var statearr_15612_17617 = state_15602__$1;(statearr_15612_17617[1] = 10);
} else
{var statearr_15613_17618 = state_15602__$1;(statearr_15613_17618[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15603 === 9))
{var inst_15595 = (state_15602[2]);var state_15602__$1 = (function (){var statearr_15614 = state_15602;(statearr_15614[12] = inst_15595);
return statearr_15614;
})();var statearr_15615_17619 = state_15602__$1;(statearr_15615_17619[2] = null);
(statearr_15615_17619[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15603 === 10))
{var inst_15562 = (state_15602[9]);var inst_15560 = (state_15602[11]);var inst_15567 = cljs.core._nth.call(null,inst_15560,inst_15562);var state_15602__$1 = state_15602;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15602__$1,13,out,inst_15567);
} else
{if((state_val_15603 === 11))
{var inst_15573 = (state_15602[13]);var inst_15559 = (state_15602[8]);var inst_15573__$1 = cljs.core.seq.call(null,inst_15559);var state_15602__$1 = (function (){var statearr_15619 = state_15602;(statearr_15619[13] = inst_15573__$1);
return statearr_15619;
})();if(inst_15573__$1)
{var statearr_15620_17620 = state_15602__$1;(statearr_15620_17620[1] = 14);
} else
{var statearr_15621_17621 = state_15602__$1;(statearr_15621_17621[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15603 === 12))
{var inst_15593 = (state_15602[2]);var state_15602__$1 = state_15602;var statearr_15622_17622 = state_15602__$1;(statearr_15622_17622[2] = inst_15593);
(statearr_15622_17622[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15603 === 13))
{var inst_15559 = (state_15602[8]);var inst_15562 = (state_15602[9]);var inst_15561 = (state_15602[10]);var inst_15560 = (state_15602[11]);var inst_15569 = (state_15602[2]);var inst_15570 = (inst_15562 + 1);var tmp15616 = inst_15559;var tmp15617 = inst_15561;var tmp15618 = inst_15560;var inst_15559__$1 = tmp15616;var inst_15560__$1 = tmp15618;var inst_15561__$1 = tmp15617;var inst_15562__$1 = inst_15570;var state_15602__$1 = (function (){var statearr_15623 = state_15602;(statearr_15623[8] = inst_15559__$1);
(statearr_15623[14] = inst_15569);
(statearr_15623[9] = inst_15562__$1);
(statearr_15623[10] = inst_15561__$1);
(statearr_15623[11] = inst_15560__$1);
return statearr_15623;
})();var statearr_15624_17623 = state_15602__$1;(statearr_15624_17623[2] = null);
(statearr_15624_17623[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15603 === 14))
{var inst_15573 = (state_15602[13]);var inst_15575 = cljs.core.chunked_seq_QMARK_.call(null,inst_15573);var state_15602__$1 = state_15602;if(inst_15575)
{var statearr_15625_17624 = state_15602__$1;(statearr_15625_17624[1] = 17);
} else
{var statearr_15626_17625 = state_15602__$1;(statearr_15626_17625[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15603 === 15))
{var state_15602__$1 = state_15602;var statearr_15627_17626 = state_15602__$1;(statearr_15627_17626[2] = null);
(statearr_15627_17626[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15603 === 16))
{var inst_15591 = (state_15602[2]);var state_15602__$1 = state_15602;var statearr_15628_17627 = state_15602__$1;(statearr_15628_17627[2] = inst_15591);
(statearr_15628_17627[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15603 === 17))
{var inst_15573 = (state_15602[13]);var inst_15577 = cljs.core.chunk_first.call(null,inst_15573);var inst_15578 = cljs.core.chunk_rest.call(null,inst_15573);var inst_15579 = cljs.core.count.call(null,inst_15577);var inst_15559 = inst_15578;var inst_15560 = inst_15577;var inst_15561 = inst_15579;var inst_15562 = 0;var state_15602__$1 = (function (){var statearr_15629 = state_15602;(statearr_15629[8] = inst_15559);
(statearr_15629[9] = inst_15562);
(statearr_15629[10] = inst_15561);
(statearr_15629[11] = inst_15560);
return statearr_15629;
})();var statearr_15630_17628 = state_15602__$1;(statearr_15630_17628[2] = null);
(statearr_15630_17628[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15603 === 18))
{var inst_15573 = (state_15602[13]);var inst_15582 = cljs.core.first.call(null,inst_15573);var state_15602__$1 = state_15602;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15602__$1,20,out,inst_15582);
} else
{if((state_val_15603 === 19))
{var inst_15588 = (state_15602[2]);var state_15602__$1 = state_15602;var statearr_15631_17629 = state_15602__$1;(statearr_15631_17629[2] = inst_15588);
(statearr_15631_17629[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15603 === 20))
{var inst_15573 = (state_15602[13]);var inst_15584 = (state_15602[2]);var inst_15585 = cljs.core.next.call(null,inst_15573);var inst_15559 = inst_15585;var inst_15560 = null;var inst_15561 = 0;var inst_15562 = 0;var state_15602__$1 = (function (){var statearr_15632 = state_15602;(statearr_15632[15] = inst_15584);
(statearr_15632[8] = inst_15559);
(statearr_15632[9] = inst_15562);
(statearr_15632[10] = inst_15561);
(statearr_15632[11] = inst_15560);
return statearr_15632;
})();var statearr_15633_17630 = state_15602__$1;(statearr_15633_17630[2] = null);
(statearr_15633_17630[1] = 8);
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
});})(c__12683__auto__))
;return ((function (switch__12613__auto__,c__12683__auto__){
return (function() {
var state_machine__12614__auto__ = null;
var state_machine__12614__auto____0 = (function (){var statearr_15637 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15637[0] = state_machine__12614__auto__);
(statearr_15637[1] = 1);
return statearr_15637;
});
var state_machine__12614__auto____1 = (function (state_15602){while(true){
var ret_value__12615__auto__ = (function (){try{while(true){
var result__12616__auto__ = switch__12613__auto__.call(null,state_15602);if(cljs.core.keyword_identical_QMARK_.call(null,result__12616__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12616__auto__;
}
break;
}
}catch (e15638){if((e15638 instanceof Object))
{var ex__12617__auto__ = e15638;var statearr_15639_17631 = state_15602;(statearr_15639_17631[5] = ex__12617__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15602);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15638;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12615__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17632 = state_15602;
state_15602 = G__17632;
continue;
}
} else
{return ret_value__12615__auto__;
}
break;
}
});
state_machine__12614__auto__ = function(state_15602){
switch(arguments.length){
case 0:
return state_machine__12614__auto____0.call(this);
case 1:
return state_machine__12614__auto____1.call(this,state_15602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12614__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12614__auto____0;
state_machine__12614__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12614__auto____1;
return state_machine__12614__auto__;
})()
;})(switch__12613__auto__,c__12683__auto__))
})();var state__12685__auto__ = (function (){var statearr_15640 = f__12684__auto__.call(null);(statearr_15640[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12683__auto__);
return statearr_15640;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12685__auto__);
});})(c__12683__auto__))
);
return c__12683__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__12683__auto___17633 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__12683__auto___17633){
return (function (){var f__12684__auto__ = (function (){var switch__12613__auto__ = ((function (c__12683__auto___17633){
return (function (state_15700){var state_val_15701 = (state_15700[1]);if((state_val_15701 === 1))
{var state_15700__$1 = state_15700;var statearr_15702_17634 = state_15700__$1;(statearr_15702_17634[2] = null);
(statearr_15702_17634[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15701 === 2))
{var state_15700__$1 = state_15700;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15700__$1,4,from);
} else
{if((state_val_15701 === 3))
{var inst_15698 = (state_15700[2]);var state_15700__$1 = state_15700;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15700__$1,inst_15698);
} else
{if((state_val_15701 === 4))
{var inst_15683 = (state_15700[7]);var inst_15683__$1 = (state_15700[2]);var inst_15684 = (inst_15683__$1 == null);var state_15700__$1 = (function (){var statearr_15703 = state_15700;(statearr_15703[7] = inst_15683__$1);
return statearr_15703;
})();if(cljs.core.truth_(inst_15684))
{var statearr_15704_17635 = state_15700__$1;(statearr_15704_17635[1] = 5);
} else
{var statearr_15705_17636 = state_15700__$1;(statearr_15705_17636[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15701 === 5))
{var state_15700__$1 = state_15700;if(cljs.core.truth_(close_QMARK_))
{var statearr_15706_17637 = state_15700__$1;(statearr_15706_17637[1] = 8);
} else
{var statearr_15707_17638 = state_15700__$1;(statearr_15707_17638[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15701 === 6))
{var inst_15683 = (state_15700[7]);var state_15700__$1 = state_15700;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15700__$1,11,to,inst_15683);
} else
{if((state_val_15701 === 7))
{var inst_15696 = (state_15700[2]);var state_15700__$1 = state_15700;var statearr_15708_17639 = state_15700__$1;(statearr_15708_17639[2] = inst_15696);
(statearr_15708_17639[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15701 === 8))
{var inst_15687 = cljs.core.async.close_BANG_.call(null,to);var state_15700__$1 = state_15700;var statearr_15709_17640 = state_15700__$1;(statearr_15709_17640[2] = inst_15687);
(statearr_15709_17640[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15701 === 9))
{var state_15700__$1 = state_15700;var statearr_15710_17641 = state_15700__$1;(statearr_15710_17641[2] = null);
(statearr_15710_17641[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15701 === 10))
{var inst_15690 = (state_15700[2]);var state_15700__$1 = state_15700;var statearr_15711_17642 = state_15700__$1;(statearr_15711_17642[2] = inst_15690);
(statearr_15711_17642[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15701 === 11))
{var inst_15693 = (state_15700[2]);var state_15700__$1 = (function (){var statearr_15712 = state_15700;(statearr_15712[8] = inst_15693);
return statearr_15712;
})();var statearr_15713_17643 = state_15700__$1;(statearr_15713_17643[2] = null);
(statearr_15713_17643[1] = 2);
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
});})(c__12683__auto___17633))
;return ((function (switch__12613__auto__,c__12683__auto___17633){
return (function() {
var state_machine__12614__auto__ = null;
var state_machine__12614__auto____0 = (function (){var statearr_15717 = [null,null,null,null,null,null,null,null,null];(statearr_15717[0] = state_machine__12614__auto__);
(statearr_15717[1] = 1);
return statearr_15717;
});
var state_machine__12614__auto____1 = (function (state_15700){while(true){
var ret_value__12615__auto__ = (function (){try{while(true){
var result__12616__auto__ = switch__12613__auto__.call(null,state_15700);if(cljs.core.keyword_identical_QMARK_.call(null,result__12616__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12616__auto__;
}
break;
}
}catch (e15718){if((e15718 instanceof Object))
{var ex__12617__auto__ = e15718;var statearr_15719_17644 = state_15700;(statearr_15719_17644[5] = ex__12617__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15700);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15718;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12615__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17645 = state_15700;
state_15700 = G__17645;
continue;
}
} else
{return ret_value__12615__auto__;
}
break;
}
});
state_machine__12614__auto__ = function(state_15700){
switch(arguments.length){
case 0:
return state_machine__12614__auto____0.call(this);
case 1:
return state_machine__12614__auto____1.call(this,state_15700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12614__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12614__auto____0;
state_machine__12614__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12614__auto____1;
return state_machine__12614__auto__;
})()
;})(switch__12613__auto__,c__12683__auto___17633))
})();var state__12685__auto__ = (function (){var statearr_15720 = f__12684__auto__.call(null);(statearr_15720[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12683__auto___17633);
return statearr_15720;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12685__auto__);
});})(c__12683__auto___17633))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__12683__auto___17646 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__12683__auto___17646,tc,fc){
return (function (){var f__12684__auto__ = (function (){var switch__12613__auto__ = ((function (c__12683__auto___17646,tc,fc){
return (function (state_15785){var state_val_15786 = (state_15785[1]);if((state_val_15786 === 1))
{var state_15785__$1 = state_15785;var statearr_15787_17647 = state_15785__$1;(statearr_15787_17647[2] = null);
(statearr_15787_17647[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15786 === 2))
{var state_15785__$1 = state_15785;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15785__$1,4,ch);
} else
{if((state_val_15786 === 3))
{var inst_15783 = (state_15785[2]);var state_15785__$1 = state_15785;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15785__$1,inst_15783);
} else
{if((state_val_15786 === 4))
{var inst_15766 = (state_15785[7]);var inst_15766__$1 = (state_15785[2]);var inst_15767 = (inst_15766__$1 == null);var state_15785__$1 = (function (){var statearr_15788 = state_15785;(statearr_15788[7] = inst_15766__$1);
return statearr_15788;
})();if(cljs.core.truth_(inst_15767))
{var statearr_15789_17648 = state_15785__$1;(statearr_15789_17648[1] = 5);
} else
{var statearr_15790_17649 = state_15785__$1;(statearr_15790_17649[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15786 === 5))
{var inst_15769 = cljs.core.async.close_BANG_.call(null,tc);var inst_15770 = cljs.core.async.close_BANG_.call(null,fc);var state_15785__$1 = (function (){var statearr_15791 = state_15785;(statearr_15791[8] = inst_15769);
return statearr_15791;
})();var statearr_15792_17650 = state_15785__$1;(statearr_15792_17650[2] = inst_15770);
(statearr_15792_17650[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15786 === 6))
{var inst_15766 = (state_15785[7]);var inst_15772 = p.call(null,inst_15766);var state_15785__$1 = state_15785;if(cljs.core.truth_(inst_15772))
{var statearr_15793_17651 = state_15785__$1;(statearr_15793_17651[1] = 9);
} else
{var statearr_15794_17652 = state_15785__$1;(statearr_15794_17652[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15786 === 7))
{var inst_15781 = (state_15785[2]);var state_15785__$1 = state_15785;var statearr_15795_17653 = state_15785__$1;(statearr_15795_17653[2] = inst_15781);
(statearr_15795_17653[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15786 === 8))
{var inst_15778 = (state_15785[2]);var state_15785__$1 = (function (){var statearr_15796 = state_15785;(statearr_15796[9] = inst_15778);
return statearr_15796;
})();var statearr_15797_17654 = state_15785__$1;(statearr_15797_17654[2] = null);
(statearr_15797_17654[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15786 === 9))
{var state_15785__$1 = state_15785;var statearr_15798_17655 = state_15785__$1;(statearr_15798_17655[2] = tc);
(statearr_15798_17655[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15786 === 10))
{var state_15785__$1 = state_15785;var statearr_15799_17656 = state_15785__$1;(statearr_15799_17656[2] = fc);
(statearr_15799_17656[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15786 === 11))
{var inst_15766 = (state_15785[7]);var inst_15776 = (state_15785[2]);var state_15785__$1 = state_15785;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15785__$1,8,inst_15776,inst_15766);
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
});})(c__12683__auto___17646,tc,fc))
;return ((function (switch__12613__auto__,c__12683__auto___17646,tc,fc){
return (function() {
var state_machine__12614__auto__ = null;
var state_machine__12614__auto____0 = (function (){var statearr_15803 = [null,null,null,null,null,null,null,null,null,null];(statearr_15803[0] = state_machine__12614__auto__);
(statearr_15803[1] = 1);
return statearr_15803;
});
var state_machine__12614__auto____1 = (function (state_15785){while(true){
var ret_value__12615__auto__ = (function (){try{while(true){
var result__12616__auto__ = switch__12613__auto__.call(null,state_15785);if(cljs.core.keyword_identical_QMARK_.call(null,result__12616__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12616__auto__;
}
break;
}
}catch (e15804){if((e15804 instanceof Object))
{var ex__12617__auto__ = e15804;var statearr_15805_17657 = state_15785;(statearr_15805_17657[5] = ex__12617__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15785);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15804;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12615__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17658 = state_15785;
state_15785 = G__17658;
continue;
}
} else
{return ret_value__12615__auto__;
}
break;
}
});
state_machine__12614__auto__ = function(state_15785){
switch(arguments.length){
case 0:
return state_machine__12614__auto____0.call(this);
case 1:
return state_machine__12614__auto____1.call(this,state_15785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12614__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12614__auto____0;
state_machine__12614__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12614__auto____1;
return state_machine__12614__auto__;
})()
;})(switch__12613__auto__,c__12683__auto___17646,tc,fc))
})();var state__12685__auto__ = (function (){var statearr_15806 = f__12684__auto__.call(null);(statearr_15806[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12683__auto___17646);
return statearr_15806;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12685__auto__);
});})(c__12683__auto___17646,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__12683__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__12683__auto__){
return (function (){var f__12684__auto__ = (function (){var switch__12613__auto__ = ((function (c__12683__auto__){
return (function (state_15853){var state_val_15854 = (state_15853[1]);if((state_val_15854 === 7))
{var inst_15849 = (state_15853[2]);var state_15853__$1 = state_15853;var statearr_15855_17659 = state_15853__$1;(statearr_15855_17659[2] = inst_15849);
(statearr_15855_17659[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15854 === 6))
{var inst_15839 = (state_15853[7]);var inst_15842 = (state_15853[8]);var inst_15846 = f.call(null,inst_15839,inst_15842);var inst_15839__$1 = inst_15846;var state_15853__$1 = (function (){var statearr_15856 = state_15853;(statearr_15856[7] = inst_15839__$1);
return statearr_15856;
})();var statearr_15857_17660 = state_15853__$1;(statearr_15857_17660[2] = null);
(statearr_15857_17660[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15854 === 5))
{var inst_15839 = (state_15853[7]);var state_15853__$1 = state_15853;var statearr_15858_17661 = state_15853__$1;(statearr_15858_17661[2] = inst_15839);
(statearr_15858_17661[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15854 === 4))
{var inst_15842 = (state_15853[8]);var inst_15842__$1 = (state_15853[2]);var inst_15843 = (inst_15842__$1 == null);var state_15853__$1 = (function (){var statearr_15859 = state_15853;(statearr_15859[8] = inst_15842__$1);
return statearr_15859;
})();if(cljs.core.truth_(inst_15843))
{var statearr_15860_17662 = state_15853__$1;(statearr_15860_17662[1] = 5);
} else
{var statearr_15861_17663 = state_15853__$1;(statearr_15861_17663[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15854 === 3))
{var inst_15851 = (state_15853[2]);var state_15853__$1 = state_15853;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15853__$1,inst_15851);
} else
{if((state_val_15854 === 2))
{var state_15853__$1 = state_15853;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15853__$1,4,ch);
} else
{if((state_val_15854 === 1))
{var inst_15839 = init;var state_15853__$1 = (function (){var statearr_15862 = state_15853;(statearr_15862[7] = inst_15839);
return statearr_15862;
})();var statearr_15863_17664 = state_15853__$1;(statearr_15863_17664[2] = null);
(statearr_15863_17664[1] = 2);
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
});})(c__12683__auto__))
;return ((function (switch__12613__auto__,c__12683__auto__){
return (function() {
var state_machine__12614__auto__ = null;
var state_machine__12614__auto____0 = (function (){var statearr_15867 = [null,null,null,null,null,null,null,null,null];(statearr_15867[0] = state_machine__12614__auto__);
(statearr_15867[1] = 1);
return statearr_15867;
});
var state_machine__12614__auto____1 = (function (state_15853){while(true){
var ret_value__12615__auto__ = (function (){try{while(true){
var result__12616__auto__ = switch__12613__auto__.call(null,state_15853);if(cljs.core.keyword_identical_QMARK_.call(null,result__12616__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12616__auto__;
}
break;
}
}catch (e15868){if((e15868 instanceof Object))
{var ex__12617__auto__ = e15868;var statearr_15869_17665 = state_15853;(statearr_15869_17665[5] = ex__12617__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15853);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15868;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12615__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17666 = state_15853;
state_15853 = G__17666;
continue;
}
} else
{return ret_value__12615__auto__;
}
break;
}
});
state_machine__12614__auto__ = function(state_15853){
switch(arguments.length){
case 0:
return state_machine__12614__auto____0.call(this);
case 1:
return state_machine__12614__auto____1.call(this,state_15853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12614__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12614__auto____0;
state_machine__12614__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12614__auto____1;
return state_machine__12614__auto__;
})()
;})(switch__12613__auto__,c__12683__auto__))
})();var state__12685__auto__ = (function (){var statearr_15870 = f__12684__auto__.call(null);(statearr_15870[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12683__auto__);
return statearr_15870;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12685__auto__);
});})(c__12683__auto__))
);
return c__12683__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__12683__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__12683__auto__){
return (function (){var f__12684__auto__ = (function (){var switch__12613__auto__ = ((function (c__12683__auto__){
return (function (state_15932){var state_val_15933 = (state_15932[1]);if((state_val_15933 === 1))
{var inst_15912 = cljs.core.seq.call(null,coll);var inst_15913 = inst_15912;var state_15932__$1 = (function (){var statearr_15934 = state_15932;(statearr_15934[7] = inst_15913);
return statearr_15934;
})();var statearr_15935_17667 = state_15932__$1;(statearr_15935_17667[2] = null);
(statearr_15935_17667[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15933 === 2))
{var inst_15913 = (state_15932[7]);var state_15932__$1 = state_15932;if(cljs.core.truth_(inst_15913))
{var statearr_15936_17668 = state_15932__$1;(statearr_15936_17668[1] = 4);
} else
{var statearr_15937_17669 = state_15932__$1;(statearr_15937_17669[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15933 === 3))
{var inst_15930 = (state_15932[2]);var state_15932__$1 = state_15932;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15932__$1,inst_15930);
} else
{if((state_val_15933 === 4))
{var inst_15913 = (state_15932[7]);var inst_15916 = cljs.core.first.call(null,inst_15913);var state_15932__$1 = state_15932;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15932__$1,7,ch,inst_15916);
} else
{if((state_val_15933 === 5))
{var state_15932__$1 = state_15932;if(cljs.core.truth_(close_QMARK_))
{var statearr_15938_17670 = state_15932__$1;(statearr_15938_17670[1] = 8);
} else
{var statearr_15939_17671 = state_15932__$1;(statearr_15939_17671[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15933 === 6))
{var inst_15928 = (state_15932[2]);var state_15932__$1 = state_15932;var statearr_15940_17672 = state_15932__$1;(statearr_15940_17672[2] = inst_15928);
(statearr_15940_17672[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15933 === 7))
{var inst_15913 = (state_15932[7]);var inst_15918 = (state_15932[2]);var inst_15919 = cljs.core.next.call(null,inst_15913);var inst_15913__$1 = inst_15919;var state_15932__$1 = (function (){var statearr_15941 = state_15932;(statearr_15941[8] = inst_15918);
(statearr_15941[7] = inst_15913__$1);
return statearr_15941;
})();var statearr_15942_17673 = state_15932__$1;(statearr_15942_17673[2] = null);
(statearr_15942_17673[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15933 === 8))
{var inst_15923 = cljs.core.async.close_BANG_.call(null,ch);var state_15932__$1 = state_15932;var statearr_15943_17674 = state_15932__$1;(statearr_15943_17674[2] = inst_15923);
(statearr_15943_17674[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15933 === 9))
{var state_15932__$1 = state_15932;var statearr_15944_17675 = state_15932__$1;(statearr_15944_17675[2] = null);
(statearr_15944_17675[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15933 === 10))
{var inst_15926 = (state_15932[2]);var state_15932__$1 = state_15932;var statearr_15945_17676 = state_15932__$1;(statearr_15945_17676[2] = inst_15926);
(statearr_15945_17676[1] = 6);
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
});})(c__12683__auto__))
;return ((function (switch__12613__auto__,c__12683__auto__){
return (function() {
var state_machine__12614__auto__ = null;
var state_machine__12614__auto____0 = (function (){var statearr_15949 = [null,null,null,null,null,null,null,null,null];(statearr_15949[0] = state_machine__12614__auto__);
(statearr_15949[1] = 1);
return statearr_15949;
});
var state_machine__12614__auto____1 = (function (state_15932){while(true){
var ret_value__12615__auto__ = (function (){try{while(true){
var result__12616__auto__ = switch__12613__auto__.call(null,state_15932);if(cljs.core.keyword_identical_QMARK_.call(null,result__12616__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12616__auto__;
}
break;
}
}catch (e15950){if((e15950 instanceof Object))
{var ex__12617__auto__ = e15950;var statearr_15951_17677 = state_15932;(statearr_15951_17677[5] = ex__12617__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15932);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15950;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12615__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17678 = state_15932;
state_15932 = G__17678;
continue;
}
} else
{return ret_value__12615__auto__;
}
break;
}
});
state_machine__12614__auto__ = function(state_15932){
switch(arguments.length){
case 0:
return state_machine__12614__auto____0.call(this);
case 1:
return state_machine__12614__auto____1.call(this,state_15932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12614__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12614__auto____0;
state_machine__12614__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12614__auto____1;
return state_machine__12614__auto__;
})()
;})(switch__12613__auto__,c__12683__auto__))
})();var state__12685__auto__ = (function (){var statearr_15952 = f__12684__auto__.call(null);(statearr_15952[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12683__auto__);
return statearr_15952;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12685__auto__);
});})(c__12683__auto__))
);
return c__12683__auto__;
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
cljs.core.async.Mux = (function (){var obj15954 = {};return obj15954;
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
cljs.core.async.Mult = (function (){var obj15956 = {};return obj15956;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t16180 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16180 = (function (cs,ch,mult,meta16181){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta16181 = meta16181;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16180.cljs$lang$type = true;
cljs.core.async.t16180.cljs$lang$ctorStr = "cljs.core.async/t16180";
cljs.core.async.t16180.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async/t16180");
});})(cs))
;
cljs.core.async.t16180.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t16180.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t16180.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t16180.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t16180.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16180.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t16180.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16182){var self__ = this;
var _16182__$1 = this;return self__.meta16181;
});})(cs))
;
cljs.core.async.t16180.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16182,meta16181__$1){var self__ = this;
var _16182__$1 = this;return (new cljs.core.async.t16180(self__.cs,self__.ch,self__.mult,meta16181__$1));
});})(cs))
;
cljs.core.async.__GT_t16180 = ((function (cs){
return (function __GT_t16180(cs__$1,ch__$1,mult__$1,meta16181){return (new cljs.core.async.t16180(cs__$1,ch__$1,mult__$1,meta16181));
});})(cs))
;
}
return (new cljs.core.async.t16180(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__12683__auto___17679 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__12683__auto___17679,cs,m,dchan,dctr,done){
return (function (){var f__12684__auto__ = (function (){var switch__12613__auto__ = ((function (c__12683__auto___17679,cs,m,dchan,dctr,done){
return (function (state_16317){var state_val_16318 = (state_16317[1]);if((state_val_16318 === 32))
{var inst_16185 = (state_16317[7]);var inst_16261 = (state_16317[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16317,31,Object,null,30);var inst_16268 = cljs.core.async.put_BANG_.call(null,inst_16261,inst_16185,done);var state_16317__$1 = state_16317;var statearr_16319_17680 = state_16317__$1;(statearr_16319_17680[2] = inst_16268);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16317__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16318 === 1))
{var state_16317__$1 = state_16317;var statearr_16320_17681 = state_16317__$1;(statearr_16320_17681[2] = null);
(statearr_16320_17681[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16318 === 33))
{var inst_16274 = (state_16317[9]);var inst_16276 = cljs.core.chunked_seq_QMARK_.call(null,inst_16274);var state_16317__$1 = state_16317;if(inst_16276)
{var statearr_16321_17682 = state_16317__$1;(statearr_16321_17682[1] = 36);
} else
{var statearr_16322_17683 = state_16317__$1;(statearr_16322_17683[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16318 === 2))
{var state_16317__$1 = state_16317;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16317__$1,4,ch);
} else
{if((state_val_16318 === 34))
{var state_16317__$1 = state_16317;var statearr_16323_17684 = state_16317__$1;(statearr_16323_17684[2] = null);
(statearr_16323_17684[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16318 === 3))
{var inst_16315 = (state_16317[2]);var state_16317__$1 = state_16317;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16317__$1,inst_16315);
} else
{if((state_val_16318 === 35))
{var inst_16299 = (state_16317[2]);var state_16317__$1 = state_16317;var statearr_16324_17685 = state_16317__$1;(statearr_16324_17685[2] = inst_16299);
(statearr_16324_17685[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16318 === 4))
{var inst_16185 = (state_16317[7]);var inst_16185__$1 = (state_16317[2]);var inst_16186 = (inst_16185__$1 == null);var state_16317__$1 = (function (){var statearr_16325 = state_16317;(statearr_16325[7] = inst_16185__$1);
return statearr_16325;
})();if(cljs.core.truth_(inst_16186))
{var statearr_16326_17686 = state_16317__$1;(statearr_16326_17686[1] = 5);
} else
{var statearr_16327_17687 = state_16317__$1;(statearr_16327_17687[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16318 === 36))
{var inst_16274 = (state_16317[9]);var inst_16278 = cljs.core.chunk_first.call(null,inst_16274);var inst_16279 = cljs.core.chunk_rest.call(null,inst_16274);var inst_16280 = cljs.core.count.call(null,inst_16278);var inst_16253 = inst_16279;var inst_16254 = inst_16278;var inst_16255 = inst_16280;var inst_16256 = 0;var state_16317__$1 = (function (){var statearr_16328 = state_16317;(statearr_16328[10] = inst_16255);
(statearr_16328[11] = inst_16256);
(statearr_16328[12] = inst_16254);
(statearr_16328[13] = inst_16253);
return statearr_16328;
})();var statearr_16329_17688 = state_16317__$1;(statearr_16329_17688[2] = null);
(statearr_16329_17688[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16318 === 5))
{var inst_16192 = cljs.core.deref.call(null,cs);var inst_16193 = cljs.core.seq.call(null,inst_16192);var inst_16194 = inst_16193;var inst_16195 = null;var inst_16196 = 0;var inst_16197 = 0;var state_16317__$1 = (function (){var statearr_16330 = state_16317;(statearr_16330[14] = inst_16197);
(statearr_16330[15] = inst_16196);
(statearr_16330[16] = inst_16194);
(statearr_16330[17] = inst_16195);
return statearr_16330;
})();var statearr_16331_17689 = state_16317__$1;(statearr_16331_17689[2] = null);
(statearr_16331_17689[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16318 === 37))
{var inst_16274 = (state_16317[9]);var inst_16283 = cljs.core.first.call(null,inst_16274);var state_16317__$1 = (function (){var statearr_16332 = state_16317;(statearr_16332[18] = inst_16283);
return statearr_16332;
})();var statearr_16333_17690 = state_16317__$1;(statearr_16333_17690[2] = null);
(statearr_16333_17690[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16318 === 6))
{var inst_16245 = (state_16317[19]);var inst_16244 = cljs.core.deref.call(null,cs);var inst_16245__$1 = cljs.core.keys.call(null,inst_16244);var inst_16246 = cljs.core.count.call(null,inst_16245__$1);var inst_16247 = cljs.core.reset_BANG_.call(null,dctr,inst_16246);var inst_16252 = cljs.core.seq.call(null,inst_16245__$1);var inst_16253 = inst_16252;var inst_16254 = null;var inst_16255 = 0;var inst_16256 = 0;var state_16317__$1 = (function (){var statearr_16334 = state_16317;(statearr_16334[20] = inst_16247);
(statearr_16334[19] = inst_16245__$1);
(statearr_16334[10] = inst_16255);
(statearr_16334[11] = inst_16256);
(statearr_16334[12] = inst_16254);
(statearr_16334[13] = inst_16253);
return statearr_16334;
})();var statearr_16335_17691 = state_16317__$1;(statearr_16335_17691[2] = null);
(statearr_16335_17691[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16318 === 38))
{var inst_16296 = (state_16317[2]);var state_16317__$1 = state_16317;var statearr_16336_17692 = state_16317__$1;(statearr_16336_17692[2] = inst_16296);
(statearr_16336_17692[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16318 === 7))
{var inst_16313 = (state_16317[2]);var state_16317__$1 = state_16317;var statearr_16337_17693 = state_16317__$1;(statearr_16337_17693[2] = inst_16313);
(statearr_16337_17693[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16318 === 39))
{var inst_16274 = (state_16317[9]);var inst_16292 = (state_16317[2]);var inst_16293 = cljs.core.next.call(null,inst_16274);var inst_16253 = inst_16293;var inst_16254 = null;var inst_16255 = 0;var inst_16256 = 0;var state_16317__$1 = (function (){var statearr_16338 = state_16317;(statearr_16338[21] = inst_16292);
(statearr_16338[10] = inst_16255);
(statearr_16338[11] = inst_16256);
(statearr_16338[12] = inst_16254);
(statearr_16338[13] = inst_16253);
return statearr_16338;
})();var statearr_16339_17694 = state_16317__$1;(statearr_16339_17694[2] = null);
(statearr_16339_17694[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16318 === 8))
{var inst_16197 = (state_16317[14]);var inst_16196 = (state_16317[15]);var inst_16199 = (inst_16197 < inst_16196);var inst_16200 = inst_16199;var state_16317__$1 = state_16317;if(cljs.core.truth_(inst_16200))
{var statearr_16340_17695 = state_16317__$1;(statearr_16340_17695[1] = 10);
} else
{var statearr_16341_17696 = state_16317__$1;(statearr_16341_17696[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16318 === 40))
{var inst_16283 = (state_16317[18]);var inst_16284 = (state_16317[2]);var inst_16285 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_16286 = cljs.core.async.untap_STAR_.call(null,m,inst_16283);var state_16317__$1 = (function (){var statearr_16342 = state_16317;(statearr_16342[22] = inst_16285);
(statearr_16342[23] = inst_16284);
return statearr_16342;
})();var statearr_16343_17697 = state_16317__$1;(statearr_16343_17697[2] = inst_16286);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16317__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16318 === 9))
{var inst_16242 = (state_16317[2]);var state_16317__$1 = state_16317;var statearr_16344_17698 = state_16317__$1;(statearr_16344_17698[2] = inst_16242);
(statearr_16344_17698[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16318 === 41))
{var inst_16185 = (state_16317[7]);var inst_16283 = (state_16317[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16317,40,Object,null,39);var inst_16290 = cljs.core.async.put_BANG_.call(null,inst_16283,inst_16185,done);var state_16317__$1 = state_16317;var statearr_16345_17699 = state_16317__$1;(statearr_16345_17699[2] = inst_16290);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16317__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16318 === 10))
{var inst_16197 = (state_16317[14]);var inst_16195 = (state_16317[17]);var inst_16203 = cljs.core._nth.call(null,inst_16195,inst_16197);var inst_16204 = cljs.core.nth.call(null,inst_16203,0,null);var inst_16205 = cljs.core.nth.call(null,inst_16203,1,null);var state_16317__$1 = (function (){var statearr_16346 = state_16317;(statearr_16346[24] = inst_16204);
return statearr_16346;
})();if(cljs.core.truth_(inst_16205))
{var statearr_16347_17700 = state_16317__$1;(statearr_16347_17700[1] = 13);
} else
{var statearr_16348_17701 = state_16317__$1;(statearr_16348_17701[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16318 === 42))
{var state_16317__$1 = state_16317;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16317__$1,45,dchan);
} else
{if((state_val_16318 === 11))
{var inst_16194 = (state_16317[16]);var inst_16214 = (state_16317[25]);var inst_16214__$1 = cljs.core.seq.call(null,inst_16194);var state_16317__$1 = (function (){var statearr_16349 = state_16317;(statearr_16349[25] = inst_16214__$1);
return statearr_16349;
})();if(inst_16214__$1)
{var statearr_16350_17702 = state_16317__$1;(statearr_16350_17702[1] = 16);
} else
{var statearr_16351_17703 = state_16317__$1;(statearr_16351_17703[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16318 === 43))
{var state_16317__$1 = state_16317;var statearr_16352_17704 = state_16317__$1;(statearr_16352_17704[2] = null);
(statearr_16352_17704[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16318 === 12))
{var inst_16240 = (state_16317[2]);var state_16317__$1 = state_16317;var statearr_16353_17705 = state_16317__$1;(statearr_16353_17705[2] = inst_16240);
(statearr_16353_17705[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16318 === 44))
{var inst_16310 = (state_16317[2]);var state_16317__$1 = (function (){var statearr_16354 = state_16317;(statearr_16354[26] = inst_16310);
return statearr_16354;
})();var statearr_16355_17706 = state_16317__$1;(statearr_16355_17706[2] = null);
(statearr_16355_17706[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16318 === 13))
{var inst_16204 = (state_16317[24]);var inst_16207 = cljs.core.async.close_BANG_.call(null,inst_16204);var state_16317__$1 = state_16317;var statearr_16356_17707 = state_16317__$1;(statearr_16356_17707[2] = inst_16207);
(statearr_16356_17707[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16318 === 45))
{var inst_16307 = (state_16317[2]);var state_16317__$1 = state_16317;var statearr_16360_17708 = state_16317__$1;(statearr_16360_17708[2] = inst_16307);
(statearr_16360_17708[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16318 === 14))
{var state_16317__$1 = state_16317;var statearr_16361_17709 = state_16317__$1;(statearr_16361_17709[2] = null);
(statearr_16361_17709[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16318 === 15))
{var inst_16197 = (state_16317[14]);var inst_16196 = (state_16317[15]);var inst_16194 = (state_16317[16]);var inst_16195 = (state_16317[17]);var inst_16210 = (state_16317[2]);var inst_16211 = (inst_16197 + 1);var tmp16357 = inst_16196;var tmp16358 = inst_16194;var tmp16359 = inst_16195;var inst_16194__$1 = tmp16358;var inst_16195__$1 = tmp16359;var inst_16196__$1 = tmp16357;var inst_16197__$1 = inst_16211;var state_16317__$1 = (function (){var statearr_16362 = state_16317;(statearr_16362[14] = inst_16197__$1);
(statearr_16362[15] = inst_16196__$1);
(statearr_16362[16] = inst_16194__$1);
(statearr_16362[17] = inst_16195__$1);
(statearr_16362[27] = inst_16210);
return statearr_16362;
})();var statearr_16363_17710 = state_16317__$1;(statearr_16363_17710[2] = null);
(statearr_16363_17710[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16318 === 16))
{var inst_16214 = (state_16317[25]);var inst_16216 = cljs.core.chunked_seq_QMARK_.call(null,inst_16214);var state_16317__$1 = state_16317;if(inst_16216)
{var statearr_16364_17711 = state_16317__$1;(statearr_16364_17711[1] = 19);
} else
{var statearr_16365_17712 = state_16317__$1;(statearr_16365_17712[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16318 === 17))
{var state_16317__$1 = state_16317;var statearr_16366_17713 = state_16317__$1;(statearr_16366_17713[2] = null);
(statearr_16366_17713[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16318 === 18))
{var inst_16238 = (state_16317[2]);var state_16317__$1 = state_16317;var statearr_16367_17714 = state_16317__$1;(statearr_16367_17714[2] = inst_16238);
(statearr_16367_17714[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16318 === 19))
{var inst_16214 = (state_16317[25]);var inst_16218 = cljs.core.chunk_first.call(null,inst_16214);var inst_16219 = cljs.core.chunk_rest.call(null,inst_16214);var inst_16220 = cljs.core.count.call(null,inst_16218);var inst_16194 = inst_16219;var inst_16195 = inst_16218;var inst_16196 = inst_16220;var inst_16197 = 0;var state_16317__$1 = (function (){var statearr_16368 = state_16317;(statearr_16368[14] = inst_16197);
(statearr_16368[15] = inst_16196);
(statearr_16368[16] = inst_16194);
(statearr_16368[17] = inst_16195);
return statearr_16368;
})();var statearr_16369_17715 = state_16317__$1;(statearr_16369_17715[2] = null);
(statearr_16369_17715[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16318 === 20))
{var inst_16214 = (state_16317[25]);var inst_16224 = cljs.core.first.call(null,inst_16214);var inst_16225 = cljs.core.nth.call(null,inst_16224,0,null);var inst_16226 = cljs.core.nth.call(null,inst_16224,1,null);var state_16317__$1 = (function (){var statearr_16370 = state_16317;(statearr_16370[28] = inst_16225);
return statearr_16370;
})();if(cljs.core.truth_(inst_16226))
{var statearr_16371_17716 = state_16317__$1;(statearr_16371_17716[1] = 22);
} else
{var statearr_16372_17717 = state_16317__$1;(statearr_16372_17717[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16318 === 21))
{var inst_16235 = (state_16317[2]);var state_16317__$1 = state_16317;var statearr_16373_17718 = state_16317__$1;(statearr_16373_17718[2] = inst_16235);
(statearr_16373_17718[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16318 === 22))
{var inst_16225 = (state_16317[28]);var inst_16228 = cljs.core.async.close_BANG_.call(null,inst_16225);var state_16317__$1 = state_16317;var statearr_16374_17719 = state_16317__$1;(statearr_16374_17719[2] = inst_16228);
(statearr_16374_17719[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16318 === 23))
{var state_16317__$1 = state_16317;var statearr_16375_17720 = state_16317__$1;(statearr_16375_17720[2] = null);
(statearr_16375_17720[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16318 === 24))
{var inst_16214 = (state_16317[25]);var inst_16231 = (state_16317[2]);var inst_16232 = cljs.core.next.call(null,inst_16214);var inst_16194 = inst_16232;var inst_16195 = null;var inst_16196 = 0;var inst_16197 = 0;var state_16317__$1 = (function (){var statearr_16376 = state_16317;(statearr_16376[14] = inst_16197);
(statearr_16376[15] = inst_16196);
(statearr_16376[29] = inst_16231);
(statearr_16376[16] = inst_16194);
(statearr_16376[17] = inst_16195);
return statearr_16376;
})();var statearr_16377_17721 = state_16317__$1;(statearr_16377_17721[2] = null);
(statearr_16377_17721[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16318 === 25))
{var inst_16255 = (state_16317[10]);var inst_16256 = (state_16317[11]);var inst_16258 = (inst_16256 < inst_16255);var inst_16259 = inst_16258;var state_16317__$1 = state_16317;if(cljs.core.truth_(inst_16259))
{var statearr_16378_17722 = state_16317__$1;(statearr_16378_17722[1] = 27);
} else
{var statearr_16379_17723 = state_16317__$1;(statearr_16379_17723[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16318 === 26))
{var inst_16245 = (state_16317[19]);var inst_16303 = (state_16317[2]);var inst_16304 = cljs.core.seq.call(null,inst_16245);var state_16317__$1 = (function (){var statearr_16380 = state_16317;(statearr_16380[30] = inst_16303);
return statearr_16380;
})();if(inst_16304)
{var statearr_16381_17724 = state_16317__$1;(statearr_16381_17724[1] = 42);
} else
{var statearr_16382_17725 = state_16317__$1;(statearr_16382_17725[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16318 === 27))
{var inst_16256 = (state_16317[11]);var inst_16254 = (state_16317[12]);var inst_16261 = cljs.core._nth.call(null,inst_16254,inst_16256);var state_16317__$1 = (function (){var statearr_16383 = state_16317;(statearr_16383[8] = inst_16261);
return statearr_16383;
})();var statearr_16384_17726 = state_16317__$1;(statearr_16384_17726[2] = null);
(statearr_16384_17726[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16318 === 28))
{var inst_16274 = (state_16317[9]);var inst_16253 = (state_16317[13]);var inst_16274__$1 = cljs.core.seq.call(null,inst_16253);var state_16317__$1 = (function (){var statearr_16388 = state_16317;(statearr_16388[9] = inst_16274__$1);
return statearr_16388;
})();if(inst_16274__$1)
{var statearr_16389_17727 = state_16317__$1;(statearr_16389_17727[1] = 33);
} else
{var statearr_16390_17728 = state_16317__$1;(statearr_16390_17728[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16318 === 29))
{var inst_16301 = (state_16317[2]);var state_16317__$1 = state_16317;var statearr_16391_17729 = state_16317__$1;(statearr_16391_17729[2] = inst_16301);
(statearr_16391_17729[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16318 === 30))
{var inst_16255 = (state_16317[10]);var inst_16256 = (state_16317[11]);var inst_16254 = (state_16317[12]);var inst_16253 = (state_16317[13]);var inst_16270 = (state_16317[2]);var inst_16271 = (inst_16256 + 1);var tmp16385 = inst_16255;var tmp16386 = inst_16254;var tmp16387 = inst_16253;var inst_16253__$1 = tmp16387;var inst_16254__$1 = tmp16386;var inst_16255__$1 = tmp16385;var inst_16256__$1 = inst_16271;var state_16317__$1 = (function (){var statearr_16392 = state_16317;(statearr_16392[31] = inst_16270);
(statearr_16392[10] = inst_16255__$1);
(statearr_16392[11] = inst_16256__$1);
(statearr_16392[12] = inst_16254__$1);
(statearr_16392[13] = inst_16253__$1);
return statearr_16392;
})();var statearr_16393_17730 = state_16317__$1;(statearr_16393_17730[2] = null);
(statearr_16393_17730[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16318 === 31))
{var inst_16261 = (state_16317[8]);var inst_16262 = (state_16317[2]);var inst_16263 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_16264 = cljs.core.async.untap_STAR_.call(null,m,inst_16261);var state_16317__$1 = (function (){var statearr_16394 = state_16317;(statearr_16394[32] = inst_16263);
(statearr_16394[33] = inst_16262);
return statearr_16394;
})();var statearr_16395_17731 = state_16317__$1;(statearr_16395_17731[2] = inst_16264);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16317__$1);
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
});})(c__12683__auto___17679,cs,m,dchan,dctr,done))
;return ((function (switch__12613__auto__,c__12683__auto___17679,cs,m,dchan,dctr,done){
return (function() {
var state_machine__12614__auto__ = null;
var state_machine__12614__auto____0 = (function (){var statearr_16399 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16399[0] = state_machine__12614__auto__);
(statearr_16399[1] = 1);
return statearr_16399;
});
var state_machine__12614__auto____1 = (function (state_16317){while(true){
var ret_value__12615__auto__ = (function (){try{while(true){
var result__12616__auto__ = switch__12613__auto__.call(null,state_16317);if(cljs.core.keyword_identical_QMARK_.call(null,result__12616__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12616__auto__;
}
break;
}
}catch (e16400){if((e16400 instanceof Object))
{var ex__12617__auto__ = e16400;var statearr_16401_17732 = state_16317;(statearr_16401_17732[5] = ex__12617__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16317);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16400;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12615__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17733 = state_16317;
state_16317 = G__17733;
continue;
}
} else
{return ret_value__12615__auto__;
}
break;
}
});
state_machine__12614__auto__ = function(state_16317){
switch(arguments.length){
case 0:
return state_machine__12614__auto____0.call(this);
case 1:
return state_machine__12614__auto____1.call(this,state_16317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12614__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12614__auto____0;
state_machine__12614__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12614__auto____1;
return state_machine__12614__auto__;
})()
;})(switch__12613__auto__,c__12683__auto___17679,cs,m,dchan,dctr,done))
})();var state__12685__auto__ = (function (){var statearr_16402 = f__12684__auto__.call(null);(statearr_16402[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12683__auto___17679);
return statearr_16402;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12685__auto__);
});})(c__12683__auto___17679,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj16404 = {};return obj16404;
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
;var m = (function (){if(typeof cljs.core.async.t16514 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16514 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta16515){
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
this.meta16515 = meta16515;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16514.cljs$lang$type = true;
cljs.core.async.t16514.cljs$lang$ctorStr = "cljs.core.async/t16514";
cljs.core.async.t16514.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async/t16514");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16514.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t16514.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16514.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16514.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16514.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16514.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16514.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16514.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16514.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16516){var self__ = this;
var _16516__$1 = this;return self__.meta16515;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16514.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16516,meta16515__$1){var self__ = this;
var _16516__$1 = this;return (new cljs.core.async.t16514(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta16515__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t16514 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t16514(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta16515){return (new cljs.core.async.t16514(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta16515));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t16514(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__12683__auto___17734 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__12683__auto___17734,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__12684__auto__ = (function (){var switch__12613__auto__ = ((function (c__12683__auto___17734,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_16581){var state_val_16582 = (state_16581[1]);if((state_val_16582 === 1))
{var inst_16520 = (state_16581[7]);var inst_16520__$1 = calc_state.call(null);var inst_16521 = cljs.core.seq_QMARK_.call(null,inst_16520__$1);var state_16581__$1 = (function (){var statearr_16583 = state_16581;(statearr_16583[7] = inst_16520__$1);
return statearr_16583;
})();if(inst_16521)
{var statearr_16584_17735 = state_16581__$1;(statearr_16584_17735[1] = 2);
} else
{var statearr_16585_17736 = state_16581__$1;(statearr_16585_17736[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16582 === 2))
{var inst_16520 = (state_16581[7]);var inst_16523 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16520);var state_16581__$1 = state_16581;var statearr_16586_17737 = state_16581__$1;(statearr_16586_17737[2] = inst_16523);
(statearr_16586_17737[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16582 === 3))
{var inst_16520 = (state_16581[7]);var state_16581__$1 = state_16581;var statearr_16587_17738 = state_16581__$1;(statearr_16587_17738[2] = inst_16520);
(statearr_16587_17738[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16582 === 4))
{var inst_16520 = (state_16581[7]);var inst_16526 = (state_16581[2]);var inst_16527 = cljs.core.get.call(null,inst_16526,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_16528 = cljs.core.get.call(null,inst_16526,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_16529 = cljs.core.get.call(null,inst_16526,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_16530 = inst_16520;var state_16581__$1 = (function (){var statearr_16588 = state_16581;(statearr_16588[8] = inst_16527);
(statearr_16588[9] = inst_16528);
(statearr_16588[10] = inst_16529);
(statearr_16588[11] = inst_16530);
return statearr_16588;
})();var statearr_16589_17739 = state_16581__$1;(statearr_16589_17739[2] = null);
(statearr_16589_17739[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16582 === 5))
{var inst_16530 = (state_16581[11]);var inst_16533 = cljs.core.seq_QMARK_.call(null,inst_16530);var state_16581__$1 = state_16581;if(inst_16533)
{var statearr_16590_17740 = state_16581__$1;(statearr_16590_17740[1] = 7);
} else
{var statearr_16591_17741 = state_16581__$1;(statearr_16591_17741[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16582 === 6))
{var inst_16579 = (state_16581[2]);var state_16581__$1 = state_16581;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16581__$1,inst_16579);
} else
{if((state_val_16582 === 7))
{var inst_16530 = (state_16581[11]);var inst_16535 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16530);var state_16581__$1 = state_16581;var statearr_16592_17742 = state_16581__$1;(statearr_16592_17742[2] = inst_16535);
(statearr_16592_17742[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16582 === 8))
{var inst_16530 = (state_16581[11]);var state_16581__$1 = state_16581;var statearr_16593_17743 = state_16581__$1;(statearr_16593_17743[2] = inst_16530);
(statearr_16593_17743[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16582 === 9))
{var inst_16538 = (state_16581[12]);var inst_16538__$1 = (state_16581[2]);var inst_16539 = cljs.core.get.call(null,inst_16538__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_16540 = cljs.core.get.call(null,inst_16538__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_16541 = cljs.core.get.call(null,inst_16538__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_16581__$1 = (function (){var statearr_16594 = state_16581;(statearr_16594[13] = inst_16541);
(statearr_16594[14] = inst_16540);
(statearr_16594[12] = inst_16538__$1);
return statearr_16594;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_16581__$1,10,inst_16539);
} else
{if((state_val_16582 === 10))
{var inst_16546 = (state_16581[15]);var inst_16545 = (state_16581[16]);var inst_16544 = (state_16581[2]);var inst_16545__$1 = cljs.core.nth.call(null,inst_16544,0,null);var inst_16546__$1 = cljs.core.nth.call(null,inst_16544,1,null);var inst_16547 = (inst_16545__$1 == null);var inst_16548 = cljs.core._EQ_.call(null,inst_16546__$1,change);var inst_16549 = (inst_16547) || (inst_16548);var state_16581__$1 = (function (){var statearr_16595 = state_16581;(statearr_16595[15] = inst_16546__$1);
(statearr_16595[16] = inst_16545__$1);
return statearr_16595;
})();if(cljs.core.truth_(inst_16549))
{var statearr_16596_17744 = state_16581__$1;(statearr_16596_17744[1] = 11);
} else
{var statearr_16597_17745 = state_16581__$1;(statearr_16597_17745[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16582 === 11))
{var inst_16545 = (state_16581[16]);var inst_16551 = (inst_16545 == null);var state_16581__$1 = state_16581;if(cljs.core.truth_(inst_16551))
{var statearr_16598_17746 = state_16581__$1;(statearr_16598_17746[1] = 14);
} else
{var statearr_16599_17747 = state_16581__$1;(statearr_16599_17747[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16582 === 12))
{var inst_16541 = (state_16581[13]);var inst_16546 = (state_16581[15]);var inst_16560 = (state_16581[17]);var inst_16560__$1 = inst_16541.call(null,inst_16546);var state_16581__$1 = (function (){var statearr_16600 = state_16581;(statearr_16600[17] = inst_16560__$1);
return statearr_16600;
})();if(cljs.core.truth_(inst_16560__$1))
{var statearr_16601_17748 = state_16581__$1;(statearr_16601_17748[1] = 17);
} else
{var statearr_16602_17749 = state_16581__$1;(statearr_16602_17749[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16582 === 13))
{var inst_16577 = (state_16581[2]);var state_16581__$1 = state_16581;var statearr_16603_17750 = state_16581__$1;(statearr_16603_17750[2] = inst_16577);
(statearr_16603_17750[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16582 === 14))
{var inst_16546 = (state_16581[15]);var inst_16553 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_16546);var state_16581__$1 = state_16581;var statearr_16604_17751 = state_16581__$1;(statearr_16604_17751[2] = inst_16553);
(statearr_16604_17751[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16582 === 15))
{var state_16581__$1 = state_16581;var statearr_16605_17752 = state_16581__$1;(statearr_16605_17752[2] = null);
(statearr_16605_17752[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16582 === 16))
{var inst_16556 = (state_16581[2]);var inst_16557 = calc_state.call(null);var inst_16530 = inst_16557;var state_16581__$1 = (function (){var statearr_16606 = state_16581;(statearr_16606[18] = inst_16556);
(statearr_16606[11] = inst_16530);
return statearr_16606;
})();var statearr_16607_17753 = state_16581__$1;(statearr_16607_17753[2] = null);
(statearr_16607_17753[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16582 === 17))
{var inst_16560 = (state_16581[17]);var state_16581__$1 = state_16581;var statearr_16608_17754 = state_16581__$1;(statearr_16608_17754[2] = inst_16560);
(statearr_16608_17754[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16582 === 18))
{var inst_16541 = (state_16581[13]);var inst_16540 = (state_16581[14]);var inst_16546 = (state_16581[15]);var inst_16563 = cljs.core.empty_QMARK_.call(null,inst_16541);var inst_16564 = inst_16540.call(null,inst_16546);var inst_16565 = cljs.core.not.call(null,inst_16564);var inst_16566 = (inst_16563) && (inst_16565);var state_16581__$1 = state_16581;var statearr_16609_17755 = state_16581__$1;(statearr_16609_17755[2] = inst_16566);
(statearr_16609_17755[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16582 === 19))
{var inst_16568 = (state_16581[2]);var state_16581__$1 = state_16581;if(cljs.core.truth_(inst_16568))
{var statearr_16610_17756 = state_16581__$1;(statearr_16610_17756[1] = 20);
} else
{var statearr_16611_17757 = state_16581__$1;(statearr_16611_17757[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16582 === 20))
{var inst_16545 = (state_16581[16]);var state_16581__$1 = state_16581;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16581__$1,23,out,inst_16545);
} else
{if((state_val_16582 === 21))
{var state_16581__$1 = state_16581;var statearr_16612_17758 = state_16581__$1;(statearr_16612_17758[2] = null);
(statearr_16612_17758[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16582 === 22))
{var inst_16538 = (state_16581[12]);var inst_16574 = (state_16581[2]);var inst_16530 = inst_16538;var state_16581__$1 = (function (){var statearr_16613 = state_16581;(statearr_16613[11] = inst_16530);
(statearr_16613[19] = inst_16574);
return statearr_16613;
})();var statearr_16614_17759 = state_16581__$1;(statearr_16614_17759[2] = null);
(statearr_16614_17759[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16582 === 23))
{var inst_16571 = (state_16581[2]);var state_16581__$1 = state_16581;var statearr_16615_17760 = state_16581__$1;(statearr_16615_17760[2] = inst_16571);
(statearr_16615_17760[1] = 22);
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
});})(c__12683__auto___17734,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__12613__auto__,c__12683__auto___17734,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__12614__auto__ = null;
var state_machine__12614__auto____0 = (function (){var statearr_16619 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16619[0] = state_machine__12614__auto__);
(statearr_16619[1] = 1);
return statearr_16619;
});
var state_machine__12614__auto____1 = (function (state_16581){while(true){
var ret_value__12615__auto__ = (function (){try{while(true){
var result__12616__auto__ = switch__12613__auto__.call(null,state_16581);if(cljs.core.keyword_identical_QMARK_.call(null,result__12616__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12616__auto__;
}
break;
}
}catch (e16620){if((e16620 instanceof Object))
{var ex__12617__auto__ = e16620;var statearr_16621_17761 = state_16581;(statearr_16621_17761[5] = ex__12617__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16581);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16620;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12615__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17762 = state_16581;
state_16581 = G__17762;
continue;
}
} else
{return ret_value__12615__auto__;
}
break;
}
});
state_machine__12614__auto__ = function(state_16581){
switch(arguments.length){
case 0:
return state_machine__12614__auto____0.call(this);
case 1:
return state_machine__12614__auto____1.call(this,state_16581);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12614__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12614__auto____0;
state_machine__12614__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12614__auto____1;
return state_machine__12614__auto__;
})()
;})(switch__12613__auto__,c__12683__auto___17734,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__12685__auto__ = (function (){var statearr_16622 = f__12684__auto__.call(null);(statearr_16622[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12683__auto___17734);
return statearr_16622;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12685__auto__);
});})(c__12683__auto___17734,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj16624 = {};return obj16624;
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
return (function (p1__16625_SHARP_){if(cljs.core.truth_(p1__16625_SHARP_.call(null,topic)))
{return p1__16625_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__16625_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4884__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t16750 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16750 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta16751){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta16751 = meta16751;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16750.cljs$lang$type = true;
cljs.core.async.t16750.cljs$lang$ctorStr = "cljs.core.async/t16750";
cljs.core.async.t16750.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async/t16750");
});})(mults,ensure_mult))
;
cljs.core.async.t16750.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t16750.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t16750.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t16750.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t16750.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t16750.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16750.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t16750.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_16752){var self__ = this;
var _16752__$1 = this;return self__.meta16751;
});})(mults,ensure_mult))
;
cljs.core.async.t16750.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_16752,meta16751__$1){var self__ = this;
var _16752__$1 = this;return (new cljs.core.async.t16750(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta16751__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t16750 = ((function (mults,ensure_mult){
return (function __GT_t16750(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta16751){return (new cljs.core.async.t16750(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta16751));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t16750(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__12683__auto___17763 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__12683__auto___17763,mults,ensure_mult,p){
return (function (){var f__12684__auto__ = (function (){var switch__12613__auto__ = ((function (c__12683__auto___17763,mults,ensure_mult,p){
return (function (state_16826){var state_val_16827 = (state_16826[1]);if((state_val_16827 === 1))
{var state_16826__$1 = state_16826;var statearr_16828_17764 = state_16826__$1;(statearr_16828_17764[2] = null);
(statearr_16828_17764[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16827 === 2))
{var state_16826__$1 = state_16826;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16826__$1,4,ch);
} else
{if((state_val_16827 === 3))
{var inst_16824 = (state_16826[2]);var state_16826__$1 = state_16826;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16826__$1,inst_16824);
} else
{if((state_val_16827 === 4))
{var inst_16755 = (state_16826[7]);var inst_16755__$1 = (state_16826[2]);var inst_16756 = (inst_16755__$1 == null);var state_16826__$1 = (function (){var statearr_16829 = state_16826;(statearr_16829[7] = inst_16755__$1);
return statearr_16829;
})();if(cljs.core.truth_(inst_16756))
{var statearr_16830_17765 = state_16826__$1;(statearr_16830_17765[1] = 5);
} else
{var statearr_16831_17766 = state_16826__$1;(statearr_16831_17766[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16827 === 5))
{var inst_16762 = cljs.core.deref.call(null,mults);var inst_16763 = cljs.core.vals.call(null,inst_16762);var inst_16764 = cljs.core.seq.call(null,inst_16763);var inst_16765 = inst_16764;var inst_16766 = null;var inst_16767 = 0;var inst_16768 = 0;var state_16826__$1 = (function (){var statearr_16832 = state_16826;(statearr_16832[8] = inst_16768);
(statearr_16832[9] = inst_16767);
(statearr_16832[10] = inst_16766);
(statearr_16832[11] = inst_16765);
return statearr_16832;
})();var statearr_16833_17767 = state_16826__$1;(statearr_16833_17767[2] = null);
(statearr_16833_17767[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16827 === 6))
{var inst_16755 = (state_16826[7]);var inst_16803 = (state_16826[12]);var inst_16805 = (state_16826[13]);var inst_16803__$1 = topic_fn.call(null,inst_16755);var inst_16804 = cljs.core.deref.call(null,mults);var inst_16805__$1 = cljs.core.get.call(null,inst_16804,inst_16803__$1);var state_16826__$1 = (function (){var statearr_16834 = state_16826;(statearr_16834[12] = inst_16803__$1);
(statearr_16834[13] = inst_16805__$1);
return statearr_16834;
})();if(cljs.core.truth_(inst_16805__$1))
{var statearr_16835_17768 = state_16826__$1;(statearr_16835_17768[1] = 19);
} else
{var statearr_16836_17769 = state_16826__$1;(statearr_16836_17769[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16827 === 7))
{var inst_16822 = (state_16826[2]);var state_16826__$1 = state_16826;var statearr_16837_17770 = state_16826__$1;(statearr_16837_17770[2] = inst_16822);
(statearr_16837_17770[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16827 === 8))
{var inst_16768 = (state_16826[8]);var inst_16767 = (state_16826[9]);var inst_16770 = (inst_16768 < inst_16767);var inst_16771 = inst_16770;var state_16826__$1 = state_16826;if(cljs.core.truth_(inst_16771))
{var statearr_16841_17771 = state_16826__$1;(statearr_16841_17771[1] = 10);
} else
{var statearr_16842_17772 = state_16826__$1;(statearr_16842_17772[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16827 === 9))
{var inst_16801 = (state_16826[2]);var state_16826__$1 = state_16826;var statearr_16843_17773 = state_16826__$1;(statearr_16843_17773[2] = inst_16801);
(statearr_16843_17773[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16827 === 10))
{var inst_16768 = (state_16826[8]);var inst_16767 = (state_16826[9]);var inst_16766 = (state_16826[10]);var inst_16765 = (state_16826[11]);var inst_16773 = cljs.core._nth.call(null,inst_16766,inst_16768);var inst_16774 = cljs.core.async.muxch_STAR_.call(null,inst_16773);var inst_16775 = cljs.core.async.close_BANG_.call(null,inst_16774);var inst_16776 = (inst_16768 + 1);var tmp16838 = inst_16767;var tmp16839 = inst_16766;var tmp16840 = inst_16765;var inst_16765__$1 = tmp16840;var inst_16766__$1 = tmp16839;var inst_16767__$1 = tmp16838;var inst_16768__$1 = inst_16776;var state_16826__$1 = (function (){var statearr_16844 = state_16826;(statearr_16844[14] = inst_16775);
(statearr_16844[8] = inst_16768__$1);
(statearr_16844[9] = inst_16767__$1);
(statearr_16844[10] = inst_16766__$1);
(statearr_16844[11] = inst_16765__$1);
return statearr_16844;
})();var statearr_16845_17774 = state_16826__$1;(statearr_16845_17774[2] = null);
(statearr_16845_17774[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16827 === 11))
{var inst_16779 = (state_16826[15]);var inst_16765 = (state_16826[11]);var inst_16779__$1 = cljs.core.seq.call(null,inst_16765);var state_16826__$1 = (function (){var statearr_16846 = state_16826;(statearr_16846[15] = inst_16779__$1);
return statearr_16846;
})();if(inst_16779__$1)
{var statearr_16847_17775 = state_16826__$1;(statearr_16847_17775[1] = 13);
} else
{var statearr_16848_17776 = state_16826__$1;(statearr_16848_17776[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16827 === 12))
{var inst_16799 = (state_16826[2]);var state_16826__$1 = state_16826;var statearr_16849_17777 = state_16826__$1;(statearr_16849_17777[2] = inst_16799);
(statearr_16849_17777[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16827 === 13))
{var inst_16779 = (state_16826[15]);var inst_16781 = cljs.core.chunked_seq_QMARK_.call(null,inst_16779);var state_16826__$1 = state_16826;if(inst_16781)
{var statearr_16850_17778 = state_16826__$1;(statearr_16850_17778[1] = 16);
} else
{var statearr_16851_17779 = state_16826__$1;(statearr_16851_17779[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16827 === 14))
{var state_16826__$1 = state_16826;var statearr_16852_17780 = state_16826__$1;(statearr_16852_17780[2] = null);
(statearr_16852_17780[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16827 === 15))
{var inst_16797 = (state_16826[2]);var state_16826__$1 = state_16826;var statearr_16853_17781 = state_16826__$1;(statearr_16853_17781[2] = inst_16797);
(statearr_16853_17781[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16827 === 16))
{var inst_16779 = (state_16826[15]);var inst_16783 = cljs.core.chunk_first.call(null,inst_16779);var inst_16784 = cljs.core.chunk_rest.call(null,inst_16779);var inst_16785 = cljs.core.count.call(null,inst_16783);var inst_16765 = inst_16784;var inst_16766 = inst_16783;var inst_16767 = inst_16785;var inst_16768 = 0;var state_16826__$1 = (function (){var statearr_16854 = state_16826;(statearr_16854[8] = inst_16768);
(statearr_16854[9] = inst_16767);
(statearr_16854[10] = inst_16766);
(statearr_16854[11] = inst_16765);
return statearr_16854;
})();var statearr_16855_17782 = state_16826__$1;(statearr_16855_17782[2] = null);
(statearr_16855_17782[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16827 === 17))
{var inst_16779 = (state_16826[15]);var inst_16788 = cljs.core.first.call(null,inst_16779);var inst_16789 = cljs.core.async.muxch_STAR_.call(null,inst_16788);var inst_16790 = cljs.core.async.close_BANG_.call(null,inst_16789);var inst_16791 = cljs.core.next.call(null,inst_16779);var inst_16765 = inst_16791;var inst_16766 = null;var inst_16767 = 0;var inst_16768 = 0;var state_16826__$1 = (function (){var statearr_16856 = state_16826;(statearr_16856[16] = inst_16790);
(statearr_16856[8] = inst_16768);
(statearr_16856[9] = inst_16767);
(statearr_16856[10] = inst_16766);
(statearr_16856[11] = inst_16765);
return statearr_16856;
})();var statearr_16857_17783 = state_16826__$1;(statearr_16857_17783[2] = null);
(statearr_16857_17783[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16827 === 18))
{var inst_16794 = (state_16826[2]);var state_16826__$1 = state_16826;var statearr_16858_17784 = state_16826__$1;(statearr_16858_17784[2] = inst_16794);
(statearr_16858_17784[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16827 === 19))
{var state_16826__$1 = state_16826;var statearr_16859_17785 = state_16826__$1;(statearr_16859_17785[2] = null);
(statearr_16859_17785[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16827 === 20))
{var state_16826__$1 = state_16826;var statearr_16860_17786 = state_16826__$1;(statearr_16860_17786[2] = null);
(statearr_16860_17786[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16827 === 21))
{var inst_16819 = (state_16826[2]);var state_16826__$1 = (function (){var statearr_16861 = state_16826;(statearr_16861[17] = inst_16819);
return statearr_16861;
})();var statearr_16862_17787 = state_16826__$1;(statearr_16862_17787[2] = null);
(statearr_16862_17787[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16827 === 22))
{var inst_16816 = (state_16826[2]);var state_16826__$1 = state_16826;var statearr_16863_17788 = state_16826__$1;(statearr_16863_17788[2] = inst_16816);
(statearr_16863_17788[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16827 === 23))
{var inst_16803 = (state_16826[12]);var inst_16807 = (state_16826[2]);var inst_16808 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_16803);var state_16826__$1 = (function (){var statearr_16864 = state_16826;(statearr_16864[18] = inst_16807);
return statearr_16864;
})();var statearr_16865_17789 = state_16826__$1;(statearr_16865_17789[2] = inst_16808);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16826__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16827 === 24))
{var inst_16755 = (state_16826[7]);var inst_16805 = (state_16826[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16826,23,Object,null,22);var inst_16812 = cljs.core.async.muxch_STAR_.call(null,inst_16805);var state_16826__$1 = state_16826;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16826__$1,25,inst_16812,inst_16755);
} else
{if((state_val_16827 === 25))
{var inst_16814 = (state_16826[2]);var state_16826__$1 = state_16826;var statearr_16866_17790 = state_16826__$1;(statearr_16866_17790[2] = inst_16814);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16826__$1);
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
});})(c__12683__auto___17763,mults,ensure_mult,p))
;return ((function (switch__12613__auto__,c__12683__auto___17763,mults,ensure_mult,p){
return (function() {
var state_machine__12614__auto__ = null;
var state_machine__12614__auto____0 = (function (){var statearr_16870 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16870[0] = state_machine__12614__auto__);
(statearr_16870[1] = 1);
return statearr_16870;
});
var state_machine__12614__auto____1 = (function (state_16826){while(true){
var ret_value__12615__auto__ = (function (){try{while(true){
var result__12616__auto__ = switch__12613__auto__.call(null,state_16826);if(cljs.core.keyword_identical_QMARK_.call(null,result__12616__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12616__auto__;
}
break;
}
}catch (e16871){if((e16871 instanceof Object))
{var ex__12617__auto__ = e16871;var statearr_16872_17791 = state_16826;(statearr_16872_17791[5] = ex__12617__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16826);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16871;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12615__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17792 = state_16826;
state_16826 = G__17792;
continue;
}
} else
{return ret_value__12615__auto__;
}
break;
}
});
state_machine__12614__auto__ = function(state_16826){
switch(arguments.length){
case 0:
return state_machine__12614__auto____0.call(this);
case 1:
return state_machine__12614__auto____1.call(this,state_16826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12614__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12614__auto____0;
state_machine__12614__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12614__auto____1;
return state_machine__12614__auto__;
})()
;})(switch__12613__auto__,c__12683__auto___17763,mults,ensure_mult,p))
})();var state__12685__auto__ = (function (){var statearr_16873 = f__12684__auto__.call(null);(statearr_16873[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12683__auto___17763);
return statearr_16873;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12685__auto__);
});})(c__12683__auto___17763,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__12683__auto___17793 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__12683__auto___17793,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__12684__auto__ = (function (){var switch__12613__auto__ = ((function (c__12683__auto___17793,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_16980){var state_val_16981 = (state_16980[1]);if((state_val_16981 === 1))
{var state_16980__$1 = state_16980;var statearr_16982_17794 = state_16980__$1;(statearr_16982_17794[2] = null);
(statearr_16982_17794[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16981 === 2))
{var inst_16943 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_16944 = 0;var state_16980__$1 = (function (){var statearr_16983 = state_16980;(statearr_16983[7] = inst_16944);
(statearr_16983[8] = inst_16943);
return statearr_16983;
})();var statearr_16984_17795 = state_16980__$1;(statearr_16984_17795[2] = null);
(statearr_16984_17795[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16981 === 3))
{var inst_16978 = (state_16980[2]);var state_16980__$1 = state_16980;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16980__$1,inst_16978);
} else
{if((state_val_16981 === 4))
{var inst_16944 = (state_16980[7]);var inst_16946 = (inst_16944 < cnt);var state_16980__$1 = state_16980;if(cljs.core.truth_(inst_16946))
{var statearr_16985_17796 = state_16980__$1;(statearr_16985_17796[1] = 6);
} else
{var statearr_16986_17797 = state_16980__$1;(statearr_16986_17797[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16981 === 5))
{var inst_16964 = (state_16980[2]);var state_16980__$1 = (function (){var statearr_16987 = state_16980;(statearr_16987[9] = inst_16964);
return statearr_16987;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16980__$1,12,dchan);
} else
{if((state_val_16981 === 6))
{var state_16980__$1 = state_16980;var statearr_16988_17798 = state_16980__$1;(statearr_16988_17798[2] = null);
(statearr_16988_17798[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16981 === 7))
{var state_16980__$1 = state_16980;var statearr_16989_17799 = state_16980__$1;(statearr_16989_17799[2] = null);
(statearr_16989_17799[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16981 === 8))
{var inst_16962 = (state_16980[2]);var state_16980__$1 = state_16980;var statearr_16990_17800 = state_16980__$1;(statearr_16990_17800[2] = inst_16962);
(statearr_16990_17800[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16981 === 9))
{var inst_16944 = (state_16980[7]);var inst_16957 = (state_16980[2]);var inst_16958 = (inst_16944 + 1);var inst_16944__$1 = inst_16958;var state_16980__$1 = (function (){var statearr_16991 = state_16980;(statearr_16991[7] = inst_16944__$1);
(statearr_16991[10] = inst_16957);
return statearr_16991;
})();var statearr_16992_17801 = state_16980__$1;(statearr_16992_17801[2] = null);
(statearr_16992_17801[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16981 === 10))
{var inst_16948 = (state_16980[2]);var inst_16949 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_16980__$1 = (function (){var statearr_16993 = state_16980;(statearr_16993[11] = inst_16948);
return statearr_16993;
})();var statearr_16994_17802 = state_16980__$1;(statearr_16994_17802[2] = inst_16949);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16980__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16981 === 11))
{var inst_16944 = (state_16980[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16980,10,Object,null,9);var inst_16953 = chs__$1.call(null,inst_16944);var inst_16954 = done.call(null,inst_16944);var inst_16955 = cljs.core.async.take_BANG_.call(null,inst_16953,inst_16954);var state_16980__$1 = state_16980;var statearr_16995_17803 = state_16980__$1;(statearr_16995_17803[2] = inst_16955);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16980__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16981 === 12))
{var inst_16966 = (state_16980[12]);var inst_16966__$1 = (state_16980[2]);var inst_16967 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_16966__$1);var state_16980__$1 = (function (){var statearr_16996 = state_16980;(statearr_16996[12] = inst_16966__$1);
return statearr_16996;
})();if(cljs.core.truth_(inst_16967))
{var statearr_16997_17804 = state_16980__$1;(statearr_16997_17804[1] = 13);
} else
{var statearr_16998_17805 = state_16980__$1;(statearr_16998_17805[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16981 === 13))
{var inst_16969 = cljs.core.async.close_BANG_.call(null,out);var state_16980__$1 = state_16980;var statearr_16999_17806 = state_16980__$1;(statearr_16999_17806[2] = inst_16969);
(statearr_16999_17806[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16981 === 14))
{var inst_16966 = (state_16980[12]);var inst_16971 = cljs.core.apply.call(null,f,inst_16966);var state_16980__$1 = state_16980;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16980__$1,16,out,inst_16971);
} else
{if((state_val_16981 === 15))
{var inst_16976 = (state_16980[2]);var state_16980__$1 = state_16980;var statearr_17000_17807 = state_16980__$1;(statearr_17000_17807[2] = inst_16976);
(statearr_17000_17807[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16981 === 16))
{var inst_16973 = (state_16980[2]);var state_16980__$1 = (function (){var statearr_17001 = state_16980;(statearr_17001[13] = inst_16973);
return statearr_17001;
})();var statearr_17002_17808 = state_16980__$1;(statearr_17002_17808[2] = null);
(statearr_17002_17808[1] = 2);
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
});})(c__12683__auto___17793,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__12613__auto__,c__12683__auto___17793,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__12614__auto__ = null;
var state_machine__12614__auto____0 = (function (){var statearr_17006 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17006[0] = state_machine__12614__auto__);
(statearr_17006[1] = 1);
return statearr_17006;
});
var state_machine__12614__auto____1 = (function (state_16980){while(true){
var ret_value__12615__auto__ = (function (){try{while(true){
var result__12616__auto__ = switch__12613__auto__.call(null,state_16980);if(cljs.core.keyword_identical_QMARK_.call(null,result__12616__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12616__auto__;
}
break;
}
}catch (e17007){if((e17007 instanceof Object))
{var ex__12617__auto__ = e17007;var statearr_17008_17809 = state_16980;(statearr_17008_17809[5] = ex__12617__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16980);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17007;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12615__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17810 = state_16980;
state_16980 = G__17810;
continue;
}
} else
{return ret_value__12615__auto__;
}
break;
}
});
state_machine__12614__auto__ = function(state_16980){
switch(arguments.length){
case 0:
return state_machine__12614__auto____0.call(this);
case 1:
return state_machine__12614__auto____1.call(this,state_16980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12614__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12614__auto____0;
state_machine__12614__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12614__auto____1;
return state_machine__12614__auto__;
})()
;})(switch__12613__auto__,c__12683__auto___17793,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__12685__auto__ = (function (){var statearr_17009 = f__12684__auto__.call(null);(statearr_17009[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12683__auto___17793);
return statearr_17009;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12685__auto__);
});})(c__12683__auto___17793,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12683__auto___17811 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__12683__auto___17811,out){
return (function (){var f__12684__auto__ = (function (){var switch__12613__auto__ = ((function (c__12683__auto___17811,out){
return (function (state_17093){var state_val_17094 = (state_17093[1]);if((state_val_17094 === 1))
{var inst_17064 = cljs.core.vec.call(null,chs);var inst_17065 = inst_17064;var state_17093__$1 = (function (){var statearr_17095 = state_17093;(statearr_17095[7] = inst_17065);
return statearr_17095;
})();var statearr_17096_17812 = state_17093__$1;(statearr_17096_17812[2] = null);
(statearr_17096_17812[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17094 === 2))
{var inst_17065 = (state_17093[7]);var inst_17067 = cljs.core.count.call(null,inst_17065);var inst_17068 = (inst_17067 > 0);var state_17093__$1 = state_17093;if(cljs.core.truth_(inst_17068))
{var statearr_17097_17813 = state_17093__$1;(statearr_17097_17813[1] = 4);
} else
{var statearr_17098_17814 = state_17093__$1;(statearr_17098_17814[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17094 === 3))
{var inst_17091 = (state_17093[2]);var state_17093__$1 = state_17093;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17093__$1,inst_17091);
} else
{if((state_val_17094 === 4))
{var inst_17065 = (state_17093[7]);var state_17093__$1 = state_17093;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_17093__$1,7,inst_17065);
} else
{if((state_val_17094 === 5))
{var inst_17087 = cljs.core.async.close_BANG_.call(null,out);var state_17093__$1 = state_17093;var statearr_17099_17815 = state_17093__$1;(statearr_17099_17815[2] = inst_17087);
(statearr_17099_17815[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17094 === 6))
{var inst_17089 = (state_17093[2]);var state_17093__$1 = state_17093;var statearr_17100_17816 = state_17093__$1;(statearr_17100_17816[2] = inst_17089);
(statearr_17100_17816[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17094 === 7))
{var inst_17072 = (state_17093[8]);var inst_17073 = (state_17093[9]);var inst_17072__$1 = (state_17093[2]);var inst_17073__$1 = cljs.core.nth.call(null,inst_17072__$1,0,null);var inst_17074 = cljs.core.nth.call(null,inst_17072__$1,1,null);var inst_17075 = (inst_17073__$1 == null);var state_17093__$1 = (function (){var statearr_17101 = state_17093;(statearr_17101[8] = inst_17072__$1);
(statearr_17101[9] = inst_17073__$1);
(statearr_17101[10] = inst_17074);
return statearr_17101;
})();if(cljs.core.truth_(inst_17075))
{var statearr_17102_17817 = state_17093__$1;(statearr_17102_17817[1] = 8);
} else
{var statearr_17103_17818 = state_17093__$1;(statearr_17103_17818[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17094 === 8))
{var inst_17072 = (state_17093[8]);var inst_17073 = (state_17093[9]);var inst_17074 = (state_17093[10]);var inst_17065 = (state_17093[7]);var inst_17077 = (function (){var c = inst_17074;var v = inst_17073;var vec__17070 = inst_17072;var cs = inst_17065;return ((function (c,v,vec__17070,cs,inst_17072,inst_17073,inst_17074,inst_17065,state_val_17094,c__12683__auto___17811,out){
return (function (p1__17010_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__17010_SHARP_);
});
;})(c,v,vec__17070,cs,inst_17072,inst_17073,inst_17074,inst_17065,state_val_17094,c__12683__auto___17811,out))
})();var inst_17078 = cljs.core.filterv.call(null,inst_17077,inst_17065);var inst_17065__$1 = inst_17078;var state_17093__$1 = (function (){var statearr_17104 = state_17093;(statearr_17104[7] = inst_17065__$1);
return statearr_17104;
})();var statearr_17105_17819 = state_17093__$1;(statearr_17105_17819[2] = null);
(statearr_17105_17819[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17094 === 9))
{var inst_17073 = (state_17093[9]);var state_17093__$1 = state_17093;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17093__$1,11,out,inst_17073);
} else
{if((state_val_17094 === 10))
{var inst_17085 = (state_17093[2]);var state_17093__$1 = state_17093;var statearr_17107_17820 = state_17093__$1;(statearr_17107_17820[2] = inst_17085);
(statearr_17107_17820[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17094 === 11))
{var inst_17065 = (state_17093[7]);var inst_17082 = (state_17093[2]);var tmp17106 = inst_17065;var inst_17065__$1 = tmp17106;var state_17093__$1 = (function (){var statearr_17108 = state_17093;(statearr_17108[11] = inst_17082);
(statearr_17108[7] = inst_17065__$1);
return statearr_17108;
})();var statearr_17109_17821 = state_17093__$1;(statearr_17109_17821[2] = null);
(statearr_17109_17821[1] = 2);
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
});})(c__12683__auto___17811,out))
;return ((function (switch__12613__auto__,c__12683__auto___17811,out){
return (function() {
var state_machine__12614__auto__ = null;
var state_machine__12614__auto____0 = (function (){var statearr_17113 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17113[0] = state_machine__12614__auto__);
(statearr_17113[1] = 1);
return statearr_17113;
});
var state_machine__12614__auto____1 = (function (state_17093){while(true){
var ret_value__12615__auto__ = (function (){try{while(true){
var result__12616__auto__ = switch__12613__auto__.call(null,state_17093);if(cljs.core.keyword_identical_QMARK_.call(null,result__12616__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12616__auto__;
}
break;
}
}catch (e17114){if((e17114 instanceof Object))
{var ex__12617__auto__ = e17114;var statearr_17115_17822 = state_17093;(statearr_17115_17822[5] = ex__12617__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17093);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17114;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12615__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17823 = state_17093;
state_17093 = G__17823;
continue;
}
} else
{return ret_value__12615__auto__;
}
break;
}
});
state_machine__12614__auto__ = function(state_17093){
switch(arguments.length){
case 0:
return state_machine__12614__auto____0.call(this);
case 1:
return state_machine__12614__auto____1.call(this,state_17093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12614__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12614__auto____0;
state_machine__12614__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12614__auto____1;
return state_machine__12614__auto__;
})()
;})(switch__12613__auto__,c__12683__auto___17811,out))
})();var state__12685__auto__ = (function (){var statearr_17116 = f__12684__auto__.call(null);(statearr_17116[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12683__auto___17811);
return statearr_17116;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12685__auto__);
});})(c__12683__auto___17811,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12683__auto___17824 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__12683__auto___17824,out){
return (function (){var f__12684__auto__ = (function (){var switch__12613__auto__ = ((function (c__12683__auto___17824,out){
return (function (state_17186){var state_val_17187 = (state_17186[1]);if((state_val_17187 === 1))
{var inst_17163 = 0;var state_17186__$1 = (function (){var statearr_17188 = state_17186;(statearr_17188[7] = inst_17163);
return statearr_17188;
})();var statearr_17189_17825 = state_17186__$1;(statearr_17189_17825[2] = null);
(statearr_17189_17825[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17187 === 2))
{var inst_17163 = (state_17186[7]);var inst_17165 = (inst_17163 < n);var state_17186__$1 = state_17186;if(cljs.core.truth_(inst_17165))
{var statearr_17190_17826 = state_17186__$1;(statearr_17190_17826[1] = 4);
} else
{var statearr_17191_17827 = state_17186__$1;(statearr_17191_17827[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17187 === 3))
{var inst_17183 = (state_17186[2]);var inst_17184 = cljs.core.async.close_BANG_.call(null,out);var state_17186__$1 = (function (){var statearr_17192 = state_17186;(statearr_17192[8] = inst_17183);
return statearr_17192;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17186__$1,inst_17184);
} else
{if((state_val_17187 === 4))
{var state_17186__$1 = state_17186;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17186__$1,7,ch);
} else
{if((state_val_17187 === 5))
{var state_17186__$1 = state_17186;var statearr_17193_17828 = state_17186__$1;(statearr_17193_17828[2] = null);
(statearr_17193_17828[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17187 === 6))
{var inst_17181 = (state_17186[2]);var state_17186__$1 = state_17186;var statearr_17194_17829 = state_17186__$1;(statearr_17194_17829[2] = inst_17181);
(statearr_17194_17829[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17187 === 7))
{var inst_17168 = (state_17186[9]);var inst_17168__$1 = (state_17186[2]);var inst_17169 = (inst_17168__$1 == null);var inst_17170 = cljs.core.not.call(null,inst_17169);var state_17186__$1 = (function (){var statearr_17195 = state_17186;(statearr_17195[9] = inst_17168__$1);
return statearr_17195;
})();if(inst_17170)
{var statearr_17196_17830 = state_17186__$1;(statearr_17196_17830[1] = 8);
} else
{var statearr_17197_17831 = state_17186__$1;(statearr_17197_17831[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17187 === 8))
{var inst_17168 = (state_17186[9]);var state_17186__$1 = state_17186;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17186__$1,11,out,inst_17168);
} else
{if((state_val_17187 === 9))
{var state_17186__$1 = state_17186;var statearr_17198_17832 = state_17186__$1;(statearr_17198_17832[2] = null);
(statearr_17198_17832[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17187 === 10))
{var inst_17178 = (state_17186[2]);var state_17186__$1 = state_17186;var statearr_17199_17833 = state_17186__$1;(statearr_17199_17833[2] = inst_17178);
(statearr_17199_17833[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17187 === 11))
{var inst_17163 = (state_17186[7]);var inst_17173 = (state_17186[2]);var inst_17174 = (inst_17163 + 1);var inst_17163__$1 = inst_17174;var state_17186__$1 = (function (){var statearr_17200 = state_17186;(statearr_17200[10] = inst_17173);
(statearr_17200[7] = inst_17163__$1);
return statearr_17200;
})();var statearr_17201_17834 = state_17186__$1;(statearr_17201_17834[2] = null);
(statearr_17201_17834[1] = 2);
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
});})(c__12683__auto___17824,out))
;return ((function (switch__12613__auto__,c__12683__auto___17824,out){
return (function() {
var state_machine__12614__auto__ = null;
var state_machine__12614__auto____0 = (function (){var statearr_17205 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_17205[0] = state_machine__12614__auto__);
(statearr_17205[1] = 1);
return statearr_17205;
});
var state_machine__12614__auto____1 = (function (state_17186){while(true){
var ret_value__12615__auto__ = (function (){try{while(true){
var result__12616__auto__ = switch__12613__auto__.call(null,state_17186);if(cljs.core.keyword_identical_QMARK_.call(null,result__12616__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12616__auto__;
}
break;
}
}catch (e17206){if((e17206 instanceof Object))
{var ex__12617__auto__ = e17206;var statearr_17207_17835 = state_17186;(statearr_17207_17835[5] = ex__12617__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17186);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17206;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12615__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17836 = state_17186;
state_17186 = G__17836;
continue;
}
} else
{return ret_value__12615__auto__;
}
break;
}
});
state_machine__12614__auto__ = function(state_17186){
switch(arguments.length){
case 0:
return state_machine__12614__auto____0.call(this);
case 1:
return state_machine__12614__auto____1.call(this,state_17186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12614__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12614__auto____0;
state_machine__12614__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12614__auto____1;
return state_machine__12614__auto__;
})()
;})(switch__12613__auto__,c__12683__auto___17824,out))
})();var state__12685__auto__ = (function (){var statearr_17208 = f__12684__auto__.call(null);(statearr_17208[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12683__auto___17824);
return statearr_17208;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12685__auto__);
});})(c__12683__auto___17824,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12683__auto___17837 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__12683__auto___17837,out){
return (function (){var f__12684__auto__ = (function (){var switch__12613__auto__ = ((function (c__12683__auto___17837,out){
return (function (state_17280){var state_val_17281 = (state_17280[1]);if((state_val_17281 === 1))
{var inst_17257 = null;var state_17280__$1 = (function (){var statearr_17282 = state_17280;(statearr_17282[7] = inst_17257);
return statearr_17282;
})();var statearr_17283_17838 = state_17280__$1;(statearr_17283_17838[2] = null);
(statearr_17283_17838[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17281 === 2))
{var state_17280__$1 = state_17280;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17280__$1,4,ch);
} else
{if((state_val_17281 === 3))
{var inst_17277 = (state_17280[2]);var inst_17278 = cljs.core.async.close_BANG_.call(null,out);var state_17280__$1 = (function (){var statearr_17284 = state_17280;(statearr_17284[8] = inst_17277);
return statearr_17284;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17280__$1,inst_17278);
} else
{if((state_val_17281 === 4))
{var inst_17260 = (state_17280[9]);var inst_17260__$1 = (state_17280[2]);var inst_17261 = (inst_17260__$1 == null);var inst_17262 = cljs.core.not.call(null,inst_17261);var state_17280__$1 = (function (){var statearr_17285 = state_17280;(statearr_17285[9] = inst_17260__$1);
return statearr_17285;
})();if(inst_17262)
{var statearr_17286_17839 = state_17280__$1;(statearr_17286_17839[1] = 5);
} else
{var statearr_17287_17840 = state_17280__$1;(statearr_17287_17840[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17281 === 5))
{var inst_17260 = (state_17280[9]);var inst_17257 = (state_17280[7]);var inst_17264 = cljs.core._EQ_.call(null,inst_17260,inst_17257);var state_17280__$1 = state_17280;if(inst_17264)
{var statearr_17288_17841 = state_17280__$1;(statearr_17288_17841[1] = 8);
} else
{var statearr_17289_17842 = state_17280__$1;(statearr_17289_17842[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17281 === 6))
{var state_17280__$1 = state_17280;var statearr_17291_17843 = state_17280__$1;(statearr_17291_17843[2] = null);
(statearr_17291_17843[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17281 === 7))
{var inst_17275 = (state_17280[2]);var state_17280__$1 = state_17280;var statearr_17292_17844 = state_17280__$1;(statearr_17292_17844[2] = inst_17275);
(statearr_17292_17844[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17281 === 8))
{var inst_17257 = (state_17280[7]);var tmp17290 = inst_17257;var inst_17257__$1 = tmp17290;var state_17280__$1 = (function (){var statearr_17293 = state_17280;(statearr_17293[7] = inst_17257__$1);
return statearr_17293;
})();var statearr_17294_17845 = state_17280__$1;(statearr_17294_17845[2] = null);
(statearr_17294_17845[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17281 === 9))
{var inst_17260 = (state_17280[9]);var state_17280__$1 = state_17280;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17280__$1,11,out,inst_17260);
} else
{if((state_val_17281 === 10))
{var inst_17272 = (state_17280[2]);var state_17280__$1 = state_17280;var statearr_17295_17846 = state_17280__$1;(statearr_17295_17846[2] = inst_17272);
(statearr_17295_17846[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17281 === 11))
{var inst_17260 = (state_17280[9]);var inst_17269 = (state_17280[2]);var inst_17257 = inst_17260;var state_17280__$1 = (function (){var statearr_17296 = state_17280;(statearr_17296[7] = inst_17257);
(statearr_17296[10] = inst_17269);
return statearr_17296;
})();var statearr_17297_17847 = state_17280__$1;(statearr_17297_17847[2] = null);
(statearr_17297_17847[1] = 2);
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
});})(c__12683__auto___17837,out))
;return ((function (switch__12613__auto__,c__12683__auto___17837,out){
return (function() {
var state_machine__12614__auto__ = null;
var state_machine__12614__auto____0 = (function (){var statearr_17301 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_17301[0] = state_machine__12614__auto__);
(statearr_17301[1] = 1);
return statearr_17301;
});
var state_machine__12614__auto____1 = (function (state_17280){while(true){
var ret_value__12615__auto__ = (function (){try{while(true){
var result__12616__auto__ = switch__12613__auto__.call(null,state_17280);if(cljs.core.keyword_identical_QMARK_.call(null,result__12616__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12616__auto__;
}
break;
}
}catch (e17302){if((e17302 instanceof Object))
{var ex__12617__auto__ = e17302;var statearr_17303_17848 = state_17280;(statearr_17303_17848[5] = ex__12617__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17280);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17302;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12615__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17849 = state_17280;
state_17280 = G__17849;
continue;
}
} else
{return ret_value__12615__auto__;
}
break;
}
});
state_machine__12614__auto__ = function(state_17280){
switch(arguments.length){
case 0:
return state_machine__12614__auto____0.call(this);
case 1:
return state_machine__12614__auto____1.call(this,state_17280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12614__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12614__auto____0;
state_machine__12614__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12614__auto____1;
return state_machine__12614__auto__;
})()
;})(switch__12613__auto__,c__12683__auto___17837,out))
})();var state__12685__auto__ = (function (){var statearr_17304 = f__12684__auto__.call(null);(statearr_17304[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12683__auto___17837);
return statearr_17304;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12685__auto__);
});})(c__12683__auto___17837,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12683__auto___17850 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__12683__auto___17850,out){
return (function (){var f__12684__auto__ = (function (){var switch__12613__auto__ = ((function (c__12683__auto___17850,out){
return (function (state_17409){var state_val_17410 = (state_17409[1]);if((state_val_17410 === 1))
{var inst_17372 = (new Array(n));var inst_17373 = inst_17372;var inst_17374 = 0;var state_17409__$1 = (function (){var statearr_17411 = state_17409;(statearr_17411[7] = inst_17374);
(statearr_17411[8] = inst_17373);
return statearr_17411;
})();var statearr_17412_17851 = state_17409__$1;(statearr_17412_17851[2] = null);
(statearr_17412_17851[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17410 === 2))
{var state_17409__$1 = state_17409;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17409__$1,4,ch);
} else
{if((state_val_17410 === 3))
{var inst_17407 = (state_17409[2]);var state_17409__$1 = state_17409;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17409__$1,inst_17407);
} else
{if((state_val_17410 === 4))
{var inst_17377 = (state_17409[9]);var inst_17377__$1 = (state_17409[2]);var inst_17378 = (inst_17377__$1 == null);var inst_17379 = cljs.core.not.call(null,inst_17378);var state_17409__$1 = (function (){var statearr_17413 = state_17409;(statearr_17413[9] = inst_17377__$1);
return statearr_17413;
})();if(inst_17379)
{var statearr_17414_17852 = state_17409__$1;(statearr_17414_17852[1] = 5);
} else
{var statearr_17415_17853 = state_17409__$1;(statearr_17415_17853[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17410 === 5))
{var inst_17382 = (state_17409[10]);var inst_17377 = (state_17409[9]);var inst_17374 = (state_17409[7]);var inst_17373 = (state_17409[8]);var inst_17381 = (inst_17373[inst_17374] = inst_17377);var inst_17382__$1 = (inst_17374 + 1);var inst_17383 = (inst_17382__$1 < n);var state_17409__$1 = (function (){var statearr_17416 = state_17409;(statearr_17416[11] = inst_17381);
(statearr_17416[10] = inst_17382__$1);
return statearr_17416;
})();if(cljs.core.truth_(inst_17383))
{var statearr_17417_17854 = state_17409__$1;(statearr_17417_17854[1] = 8);
} else
{var statearr_17418_17855 = state_17409__$1;(statearr_17418_17855[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17410 === 6))
{var inst_17374 = (state_17409[7]);var inst_17395 = (inst_17374 > 0);var state_17409__$1 = state_17409;if(cljs.core.truth_(inst_17395))
{var statearr_17420_17856 = state_17409__$1;(statearr_17420_17856[1] = 12);
} else
{var statearr_17421_17857 = state_17409__$1;(statearr_17421_17857[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17410 === 7))
{var inst_17405 = (state_17409[2]);var state_17409__$1 = state_17409;var statearr_17422_17858 = state_17409__$1;(statearr_17422_17858[2] = inst_17405);
(statearr_17422_17858[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17410 === 8))
{var inst_17382 = (state_17409[10]);var inst_17373 = (state_17409[8]);var tmp17419 = inst_17373;var inst_17373__$1 = tmp17419;var inst_17374 = inst_17382;var state_17409__$1 = (function (){var statearr_17423 = state_17409;(statearr_17423[7] = inst_17374);
(statearr_17423[8] = inst_17373__$1);
return statearr_17423;
})();var statearr_17424_17859 = state_17409__$1;(statearr_17424_17859[2] = null);
(statearr_17424_17859[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17410 === 9))
{var inst_17373 = (state_17409[8]);var inst_17387 = cljs.core.vec.call(null,inst_17373);var state_17409__$1 = state_17409;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17409__$1,11,out,inst_17387);
} else
{if((state_val_17410 === 10))
{var inst_17393 = (state_17409[2]);var state_17409__$1 = state_17409;var statearr_17425_17860 = state_17409__$1;(statearr_17425_17860[2] = inst_17393);
(statearr_17425_17860[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17410 === 11))
{var inst_17389 = (state_17409[2]);var inst_17390 = (new Array(n));var inst_17373 = inst_17390;var inst_17374 = 0;var state_17409__$1 = (function (){var statearr_17426 = state_17409;(statearr_17426[7] = inst_17374);
(statearr_17426[8] = inst_17373);
(statearr_17426[12] = inst_17389);
return statearr_17426;
})();var statearr_17427_17861 = state_17409__$1;(statearr_17427_17861[2] = null);
(statearr_17427_17861[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17410 === 12))
{var inst_17373 = (state_17409[8]);var inst_17397 = cljs.core.vec.call(null,inst_17373);var state_17409__$1 = state_17409;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17409__$1,15,out,inst_17397);
} else
{if((state_val_17410 === 13))
{var state_17409__$1 = state_17409;var statearr_17428_17862 = state_17409__$1;(statearr_17428_17862[2] = null);
(statearr_17428_17862[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17410 === 14))
{var inst_17402 = (state_17409[2]);var inst_17403 = cljs.core.async.close_BANG_.call(null,out);var state_17409__$1 = (function (){var statearr_17429 = state_17409;(statearr_17429[13] = inst_17402);
return statearr_17429;
})();var statearr_17430_17863 = state_17409__$1;(statearr_17430_17863[2] = inst_17403);
(statearr_17430_17863[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17410 === 15))
{var inst_17399 = (state_17409[2]);var state_17409__$1 = state_17409;var statearr_17431_17864 = state_17409__$1;(statearr_17431_17864[2] = inst_17399);
(statearr_17431_17864[1] = 14);
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
});})(c__12683__auto___17850,out))
;return ((function (switch__12613__auto__,c__12683__auto___17850,out){
return (function() {
var state_machine__12614__auto__ = null;
var state_machine__12614__auto____0 = (function (){var statearr_17435 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17435[0] = state_machine__12614__auto__);
(statearr_17435[1] = 1);
return statearr_17435;
});
var state_machine__12614__auto____1 = (function (state_17409){while(true){
var ret_value__12615__auto__ = (function (){try{while(true){
var result__12616__auto__ = switch__12613__auto__.call(null,state_17409);if(cljs.core.keyword_identical_QMARK_.call(null,result__12616__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12616__auto__;
}
break;
}
}catch (e17436){if((e17436 instanceof Object))
{var ex__12617__auto__ = e17436;var statearr_17437_17865 = state_17409;(statearr_17437_17865[5] = ex__12617__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17409);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17436;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12615__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17866 = state_17409;
state_17409 = G__17866;
continue;
}
} else
{return ret_value__12615__auto__;
}
break;
}
});
state_machine__12614__auto__ = function(state_17409){
switch(arguments.length){
case 0:
return state_machine__12614__auto____0.call(this);
case 1:
return state_machine__12614__auto____1.call(this,state_17409);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12614__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12614__auto____0;
state_machine__12614__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12614__auto____1;
return state_machine__12614__auto__;
})()
;})(switch__12613__auto__,c__12683__auto___17850,out))
})();var state__12685__auto__ = (function (){var statearr_17438 = f__12684__auto__.call(null);(statearr_17438[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12683__auto___17850);
return statearr_17438;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12685__auto__);
});})(c__12683__auto___17850,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12683__auto___17867 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__12683__auto___17867,out){
return (function (){var f__12684__auto__ = (function (){var switch__12613__auto__ = ((function (c__12683__auto___17867,out){
return (function (state_17551){var state_val_17552 = (state_17551[1]);if((state_val_17552 === 1))
{var inst_17510 = [];var inst_17511 = inst_17510;var inst_17512 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_17551__$1 = (function (){var statearr_17553 = state_17551;(statearr_17553[7] = inst_17511);
(statearr_17553[8] = inst_17512);
return statearr_17553;
})();var statearr_17554_17868 = state_17551__$1;(statearr_17554_17868[2] = null);
(statearr_17554_17868[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17552 === 2))
{var state_17551__$1 = state_17551;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17551__$1,4,ch);
} else
{if((state_val_17552 === 3))
{var inst_17549 = (state_17551[2]);var state_17551__$1 = state_17551;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17551__$1,inst_17549);
} else
{if((state_val_17552 === 4))
{var inst_17515 = (state_17551[9]);var inst_17515__$1 = (state_17551[2]);var inst_17516 = (inst_17515__$1 == null);var inst_17517 = cljs.core.not.call(null,inst_17516);var state_17551__$1 = (function (){var statearr_17555 = state_17551;(statearr_17555[9] = inst_17515__$1);
return statearr_17555;
})();if(inst_17517)
{var statearr_17556_17869 = state_17551__$1;(statearr_17556_17869[1] = 5);
} else
{var statearr_17557_17870 = state_17551__$1;(statearr_17557_17870[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17552 === 5))
{var inst_17512 = (state_17551[8]);var inst_17519 = (state_17551[10]);var inst_17515 = (state_17551[9]);var inst_17519__$1 = f.call(null,inst_17515);var inst_17520 = cljs.core._EQ_.call(null,inst_17519__$1,inst_17512);var inst_17521 = cljs.core.keyword_identical_QMARK_.call(null,inst_17512,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_17522 = (inst_17520) || (inst_17521);var state_17551__$1 = (function (){var statearr_17558 = state_17551;(statearr_17558[10] = inst_17519__$1);
return statearr_17558;
})();if(cljs.core.truth_(inst_17522))
{var statearr_17559_17871 = state_17551__$1;(statearr_17559_17871[1] = 8);
} else
{var statearr_17560_17872 = state_17551__$1;(statearr_17560_17872[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17552 === 6))
{var inst_17511 = (state_17551[7]);var inst_17536 = inst_17511.length;var inst_17537 = (inst_17536 > 0);var state_17551__$1 = state_17551;if(cljs.core.truth_(inst_17537))
{var statearr_17562_17873 = state_17551__$1;(statearr_17562_17873[1] = 12);
} else
{var statearr_17563_17874 = state_17551__$1;(statearr_17563_17874[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17552 === 7))
{var inst_17547 = (state_17551[2]);var state_17551__$1 = state_17551;var statearr_17564_17875 = state_17551__$1;(statearr_17564_17875[2] = inst_17547);
(statearr_17564_17875[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17552 === 8))
{var inst_17511 = (state_17551[7]);var inst_17519 = (state_17551[10]);var inst_17515 = (state_17551[9]);var inst_17524 = inst_17511.push(inst_17515);var tmp17561 = inst_17511;var inst_17511__$1 = tmp17561;var inst_17512 = inst_17519;var state_17551__$1 = (function (){var statearr_17565 = state_17551;(statearr_17565[7] = inst_17511__$1);
(statearr_17565[8] = inst_17512);
(statearr_17565[11] = inst_17524);
return statearr_17565;
})();var statearr_17566_17876 = state_17551__$1;(statearr_17566_17876[2] = null);
(statearr_17566_17876[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17552 === 9))
{var inst_17511 = (state_17551[7]);var inst_17527 = cljs.core.vec.call(null,inst_17511);var state_17551__$1 = state_17551;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17551__$1,11,out,inst_17527);
} else
{if((state_val_17552 === 10))
{var inst_17534 = (state_17551[2]);var state_17551__$1 = state_17551;var statearr_17567_17877 = state_17551__$1;(statearr_17567_17877[2] = inst_17534);
(statearr_17567_17877[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17552 === 11))
{var inst_17519 = (state_17551[10]);var inst_17515 = (state_17551[9]);var inst_17529 = (state_17551[2]);var inst_17530 = [];var inst_17531 = inst_17530.push(inst_17515);var inst_17511 = inst_17530;var inst_17512 = inst_17519;var state_17551__$1 = (function (){var statearr_17568 = state_17551;(statearr_17568[7] = inst_17511);
(statearr_17568[8] = inst_17512);
(statearr_17568[12] = inst_17531);
(statearr_17568[13] = inst_17529);
return statearr_17568;
})();var statearr_17569_17878 = state_17551__$1;(statearr_17569_17878[2] = null);
(statearr_17569_17878[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17552 === 12))
{var inst_17511 = (state_17551[7]);var inst_17539 = cljs.core.vec.call(null,inst_17511);var state_17551__$1 = state_17551;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17551__$1,15,out,inst_17539);
} else
{if((state_val_17552 === 13))
{var state_17551__$1 = state_17551;var statearr_17570_17879 = state_17551__$1;(statearr_17570_17879[2] = null);
(statearr_17570_17879[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17552 === 14))
{var inst_17544 = (state_17551[2]);var inst_17545 = cljs.core.async.close_BANG_.call(null,out);var state_17551__$1 = (function (){var statearr_17571 = state_17551;(statearr_17571[14] = inst_17544);
return statearr_17571;
})();var statearr_17572_17880 = state_17551__$1;(statearr_17572_17880[2] = inst_17545);
(statearr_17572_17880[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17552 === 15))
{var inst_17541 = (state_17551[2]);var state_17551__$1 = state_17551;var statearr_17573_17881 = state_17551__$1;(statearr_17573_17881[2] = inst_17541);
(statearr_17573_17881[1] = 14);
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
});})(c__12683__auto___17867,out))
;return ((function (switch__12613__auto__,c__12683__auto___17867,out){
return (function() {
var state_machine__12614__auto__ = null;
var state_machine__12614__auto____0 = (function (){var statearr_17577 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17577[0] = state_machine__12614__auto__);
(statearr_17577[1] = 1);
return statearr_17577;
});
var state_machine__12614__auto____1 = (function (state_17551){while(true){
var ret_value__12615__auto__ = (function (){try{while(true){
var result__12616__auto__ = switch__12613__auto__.call(null,state_17551);if(cljs.core.keyword_identical_QMARK_.call(null,result__12616__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12616__auto__;
}
break;
}
}catch (e17578){if((e17578 instanceof Object))
{var ex__12617__auto__ = e17578;var statearr_17579_17882 = state_17551;(statearr_17579_17882[5] = ex__12617__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17551);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17578;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12615__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17883 = state_17551;
state_17551 = G__17883;
continue;
}
} else
{return ret_value__12615__auto__;
}
break;
}
});
state_machine__12614__auto__ = function(state_17551){
switch(arguments.length){
case 0:
return state_machine__12614__auto____0.call(this);
case 1:
return state_machine__12614__auto____1.call(this,state_17551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12614__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12614__auto____0;
state_machine__12614__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12614__auto____1;
return state_machine__12614__auto__;
})()
;})(switch__12613__auto__,c__12683__auto___17867,out))
})();var state__12685__auto__ = (function (){var statearr_17580 = f__12684__auto__.call(null);(statearr_17580[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12683__auto___17867);
return statearr_17580;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12685__auto__);
});})(c__12683__auto___17867,out))
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
{var o = (function (){var obj11109 = {};return obj11109;
})();var seq__11110_11123 = cljs.core.seq.call(null,obj);var chunk__11111_11124 = null;var count__11112_11125 = 0;var i__11113_11126 = 0;while(true){
if((i__11113_11126 < count__11112_11125))
{var vec__11114_11127 = cljs.core._nth.call(null,chunk__11111_11124,i__11113_11126);var k_11128 = cljs.core.nth.call(null,vec__11114_11127,0,null);var v_11129 = cljs.core.nth.call(null,vec__11114_11127,1,null);(o[cljs.core.name.call(null,k_11128)] = js_props.call(null,v_11129));
{
var G__11130 = seq__11110_11123;
var G__11131 = chunk__11111_11124;
var G__11132 = count__11112_11125;
var G__11133 = (i__11113_11126 + 1);
seq__11110_11123 = G__11130;
chunk__11111_11124 = G__11131;
count__11112_11125 = G__11132;
i__11113_11126 = G__11133;
continue;
}
} else
{var temp__4092__auto___11134 = cljs.core.seq.call(null,seq__11110_11123);if(temp__4092__auto___11134)
{var seq__11110_11135__$1 = temp__4092__auto___11134;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11110_11135__$1))
{var c__5632__auto___11136 = cljs.core.chunk_first.call(null,seq__11110_11135__$1);{
var G__11137 = cljs.core.chunk_rest.call(null,seq__11110_11135__$1);
var G__11138 = c__5632__auto___11136;
var G__11139 = cljs.core.count.call(null,c__5632__auto___11136);
var G__11140 = 0;
seq__11110_11123 = G__11137;
chunk__11111_11124 = G__11138;
count__11112_11125 = G__11139;
i__11113_11126 = G__11140;
continue;
}
} else
{var vec__11115_11141 = cljs.core.first.call(null,seq__11110_11135__$1);var k_11142 = cljs.core.nth.call(null,vec__11115_11141,0,null);var v_11143 = cljs.core.nth.call(null,vec__11115_11141,1,null);(o[cljs.core.name.call(null,k_11142)] = js_props.call(null,v_11143));
{
var G__11144 = cljs.core.next.call(null,seq__11110_11135__$1);
var G__11145 = null;
var G__11146 = 0;
var G__11147 = 0;
seq__11110_11123 = G__11144;
chunk__11111_11124 = G__11145;
count__11112_11125 = G__11146;
i__11113_11126 = G__11147;
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
quiescent.component = (function component(renderer){var react_component = React.createClass({"render": (function (){var this$ = this;var _STAR_component_STAR_11117 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return cljs.core.apply.call(null,renderer,(this$.props["value"]),(this$.props["statics"]));
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11117;
}}), "shouldComponentUpdate": (function (next_props,_){var this$ = this;return cljs.core.not_EQ_.call(null,(this$.props["value"]),(next_props["value"]));
})});return ((function (react_component){
return (function() { 
var G__11148__delegate = function (value,static_args){return react_component.call(null,{"statics": static_args, "value": value});
};
var G__11148 = function (value,var_args){
var static_args = null;if (arguments.length > 1) {
  static_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__11148__delegate.call(this,value,static_args);};
G__11148.cljs$lang$maxFixedArity = 1;
G__11148.cljs$lang$applyTo = (function (arglist__11149){
var value = cljs.core.first(arglist__11149);
var static_args = cljs.core.rest(arglist__11149);
return G__11148__delegate(value,static_args);
});
G__11148.cljs$core$IFn$_invoke$arity$variadic = G__11148__delegate;
return G__11148;
})()
;
;})(react_component))
});
/**
* Wrapper component used to mix-in lifecycle access
*/
quiescent.WrapperComponent = React.createClass({"componentWillUnmount": (function (){var this$ = this;var temp__4092__auto__ = (this$.props["onWillUnmount"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_11122 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null);
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11122;
}} else
{return null;
}
}), "componentWillUpdate": (function (_,___$1){var this$ = this;var temp__4092__auto__ = (this$.props["onWillUpdate"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_11121 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null);
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11121;
}} else
{return null;
}
}), "componentWillMount": (function (){var this$ = this;var temp__4092__auto__ = (this$.props["onWillMount"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_11120 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null);
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11120;
}} else
{return null;
}
}), "componentDidMount": (function (){var this$ = this;var temp__4092__auto__ = (this$.props["onMount"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_11119 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null,this$.getDOMNode());
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11119;
}} else
{return null;
}
}), "componentDidUpdate": (function (prev_props,prev_state){var this$ = this;var temp__4092__auto__ = (this$.props["onUpdate"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_11118 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null,this$.getDOMNode());
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11118;
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
var wrapper__delegate = function (child,kvs){var props = quiescent.js_props.call(null,cljs.core.apply.call(null,cljs.core.array_map,new cljs.core.Keyword(null,"wrappee","wrappee",2609412088),child,kvs));var temp__4092__auto___11150 = (child.props["key"]);if(cljs.core.truth_(temp__4092__auto___11150))
{var key_11151 = temp__4092__auto___11150;(props["key"] = key_11151);
} else
{}
return quiescent.WrapperComponent.call(null,props);
};
var wrapper = function (child,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrapper__delegate.call(this,child,kvs);};
wrapper.cljs$lang$maxFixedArity = 1;
wrapper.cljs$lang$applyTo = (function (arglist__11152){
var child = cljs.core.first(arglist__11152);
var kvs = cljs.core.rest(arglist__11152);
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
var a__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__7534_8482 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__7535_8483 = null;var count__7536_8484 = 0;var i__7537_8485 = 0;while(true){
if((i__7537_8485 < count__7536_8484))
{var arg__6534__auto___8486 = cljs.core._nth.call(null,chunk__7535_8483,i__7537_8485);a__6533__auto__.push(arg__6534__auto___8486);
{
var G__8487 = seq__7534_8482;
var G__8488 = chunk__7535_8483;
var G__8489 = count__7536_8484;
var G__8490 = (i__7537_8485 + 1);
seq__7534_8482 = G__8487;
chunk__7535_8483 = G__8488;
count__7536_8484 = G__8489;
i__7537_8485 = G__8490;
continue;
}
} else
{var temp__4092__auto___8491 = cljs.core.seq.call(null,seq__7534_8482);if(temp__4092__auto___8491)
{var seq__7534_8492__$1 = temp__4092__auto___8491;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7534_8492__$1))
{var c__5632__auto___8493 = cljs.core.chunk_first.call(null,seq__7534_8492__$1);{
var G__8494 = cljs.core.chunk_rest.call(null,seq__7534_8492__$1);
var G__8495 = c__5632__auto___8493;
var G__8496 = cljs.core.count.call(null,c__5632__auto___8493);
var G__8497 = 0;
seq__7534_8482 = G__8494;
chunk__7535_8483 = G__8495;
count__7536_8484 = G__8496;
i__7537_8485 = G__8497;
continue;
}
} else
{var arg__6534__auto___8498 = cljs.core.first.call(null,seq__7534_8492__$1);a__6533__auto__.push(arg__6534__auto___8498);
{
var G__8499 = cljs.core.next.call(null,seq__7534_8492__$1);
var G__8500 = null;
var G__8501 = 0;
var G__8502 = 0;
seq__7534_8482 = G__8499;
chunk__7535_8483 = G__8500;
count__7536_8484 = G__8501;
i__7537_8485 = G__8502;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.a.apply(null,a__6533__auto__);
};
var a = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return a__delegate.call(this,args__6532__auto__);};
a.cljs$lang$maxFixedArity = 0;
a.cljs$lang$applyTo = (function (arglist__8503){
var args__6532__auto__ = cljs.core.seq(arglist__8503);
return a__delegate(args__6532__auto__);
});
a.cljs$core$IFn$_invoke$arity$variadic = a__delegate;
return a;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.abbr = (function() { 
var abbr__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__7542_8504 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__7543_8505 = null;var count__7544_8506 = 0;var i__7545_8507 = 0;while(true){
if((i__7545_8507 < count__7544_8506))
{var arg__6534__auto___8508 = cljs.core._nth.call(null,chunk__7543_8505,i__7545_8507);a__6533__auto__.push(arg__6534__auto___8508);
{
var G__8509 = seq__7542_8504;
var G__8510 = chunk__7543_8505;
var G__8511 = count__7544_8506;
var G__8512 = (i__7545_8507 + 1);
seq__7542_8504 = G__8509;
chunk__7543_8505 = G__8510;
count__7544_8506 = G__8511;
i__7545_8507 = G__8512;
continue;
}
} else
{var temp__4092__auto___8513 = cljs.core.seq.call(null,seq__7542_8504);if(temp__4092__auto___8513)
{var seq__7542_8514__$1 = temp__4092__auto___8513;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7542_8514__$1))
{var c__5632__auto___8515 = cljs.core.chunk_first.call(null,seq__7542_8514__$1);{
var G__8516 = cljs.core.chunk_rest.call(null,seq__7542_8514__$1);
var G__8517 = c__5632__auto___8515;
var G__8518 = cljs.core.count.call(null,c__5632__auto___8515);
var G__8519 = 0;
seq__7542_8504 = G__8516;
chunk__7543_8505 = G__8517;
count__7544_8506 = G__8518;
i__7545_8507 = G__8519;
continue;
}
} else
{var arg__6534__auto___8520 = cljs.core.first.call(null,seq__7542_8514__$1);a__6533__auto__.push(arg__6534__auto___8520);
{
var G__8521 = cljs.core.next.call(null,seq__7542_8514__$1);
var G__8522 = null;
var G__8523 = 0;
var G__8524 = 0;
seq__7542_8504 = G__8521;
chunk__7543_8505 = G__8522;
count__7544_8506 = G__8523;
i__7545_8507 = G__8524;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.abbr.apply(null,a__6533__auto__);
};
var abbr = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return abbr__delegate.call(this,args__6532__auto__);};
abbr.cljs$lang$maxFixedArity = 0;
abbr.cljs$lang$applyTo = (function (arglist__8525){
var args__6532__auto__ = cljs.core.seq(arglist__8525);
return abbr__delegate(args__6532__auto__);
});
abbr.cljs$core$IFn$_invoke$arity$variadic = abbr__delegate;
return abbr;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.address = (function() { 
var address__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__7550_8526 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__7551_8527 = null;var count__7552_8528 = 0;var i__7553_8529 = 0;while(true){
if((i__7553_8529 < count__7552_8528))
{var arg__6534__auto___8530 = cljs.core._nth.call(null,chunk__7551_8527,i__7553_8529);a__6533__auto__.push(arg__6534__auto___8530);
{
var G__8531 = seq__7550_8526;
var G__8532 = chunk__7551_8527;
var G__8533 = count__7552_8528;
var G__8534 = (i__7553_8529 + 1);
seq__7550_8526 = G__8531;
chunk__7551_8527 = G__8532;
count__7552_8528 = G__8533;
i__7553_8529 = G__8534;
continue;
}
} else
{var temp__4092__auto___8535 = cljs.core.seq.call(null,seq__7550_8526);if(temp__4092__auto___8535)
{var seq__7550_8536__$1 = temp__4092__auto___8535;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7550_8536__$1))
{var c__5632__auto___8537 = cljs.core.chunk_first.call(null,seq__7550_8536__$1);{
var G__8538 = cljs.core.chunk_rest.call(null,seq__7550_8536__$1);
var G__8539 = c__5632__auto___8537;
var G__8540 = cljs.core.count.call(null,c__5632__auto___8537);
var G__8541 = 0;
seq__7550_8526 = G__8538;
chunk__7551_8527 = G__8539;
count__7552_8528 = G__8540;
i__7553_8529 = G__8541;
continue;
}
} else
{var arg__6534__auto___8542 = cljs.core.first.call(null,seq__7550_8536__$1);a__6533__auto__.push(arg__6534__auto___8542);
{
var G__8543 = cljs.core.next.call(null,seq__7550_8536__$1);
var G__8544 = null;
var G__8545 = 0;
var G__8546 = 0;
seq__7550_8526 = G__8543;
chunk__7551_8527 = G__8544;
count__7552_8528 = G__8545;
i__7553_8529 = G__8546;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.address.apply(null,a__6533__auto__);
};
var address = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return address__delegate.call(this,args__6532__auto__);};
address.cljs$lang$maxFixedArity = 0;
address.cljs$lang$applyTo = (function (arglist__8547){
var args__6532__auto__ = cljs.core.seq(arglist__8547);
return address__delegate(args__6532__auto__);
});
address.cljs$core$IFn$_invoke$arity$variadic = address__delegate;
return address;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.area = (function() { 
var area__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__7558_8548 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__7559_8549 = null;var count__7560_8550 = 0;var i__7561_8551 = 0;while(true){
if((i__7561_8551 < count__7560_8550))
{var arg__6534__auto___8552 = cljs.core._nth.call(null,chunk__7559_8549,i__7561_8551);a__6533__auto__.push(arg__6534__auto___8552);
{
var G__8553 = seq__7558_8548;
var G__8554 = chunk__7559_8549;
var G__8555 = count__7560_8550;
var G__8556 = (i__7561_8551 + 1);
seq__7558_8548 = G__8553;
chunk__7559_8549 = G__8554;
count__7560_8550 = G__8555;
i__7561_8551 = G__8556;
continue;
}
} else
{var temp__4092__auto___8557 = cljs.core.seq.call(null,seq__7558_8548);if(temp__4092__auto___8557)
{var seq__7558_8558__$1 = temp__4092__auto___8557;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7558_8558__$1))
{var c__5632__auto___8559 = cljs.core.chunk_first.call(null,seq__7558_8558__$1);{
var G__8560 = cljs.core.chunk_rest.call(null,seq__7558_8558__$1);
var G__8561 = c__5632__auto___8559;
var G__8562 = cljs.core.count.call(null,c__5632__auto___8559);
var G__8563 = 0;
seq__7558_8548 = G__8560;
chunk__7559_8549 = G__8561;
count__7560_8550 = G__8562;
i__7561_8551 = G__8563;
continue;
}
} else
{var arg__6534__auto___8564 = cljs.core.first.call(null,seq__7558_8558__$1);a__6533__auto__.push(arg__6534__auto___8564);
{
var G__8565 = cljs.core.next.call(null,seq__7558_8558__$1);
var G__8566 = null;
var G__8567 = 0;
var G__8568 = 0;
seq__7558_8548 = G__8565;
chunk__7559_8549 = G__8566;
count__7560_8550 = G__8567;
i__7561_8551 = G__8568;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.area.apply(null,a__6533__auto__);
};
var area = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return area__delegate.call(this,args__6532__auto__);};
area.cljs$lang$maxFixedArity = 0;
area.cljs$lang$applyTo = (function (arglist__8569){
var args__6532__auto__ = cljs.core.seq(arglist__8569);
return area__delegate(args__6532__auto__);
});
area.cljs$core$IFn$_invoke$arity$variadic = area__delegate;
return area;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.article = (function() { 
var article__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__7566_8570 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__7567_8571 = null;var count__7568_8572 = 0;var i__7569_8573 = 0;while(true){
if((i__7569_8573 < count__7568_8572))
{var arg__6534__auto___8574 = cljs.core._nth.call(null,chunk__7567_8571,i__7569_8573);a__6533__auto__.push(arg__6534__auto___8574);
{
var G__8575 = seq__7566_8570;
var G__8576 = chunk__7567_8571;
var G__8577 = count__7568_8572;
var G__8578 = (i__7569_8573 + 1);
seq__7566_8570 = G__8575;
chunk__7567_8571 = G__8576;
count__7568_8572 = G__8577;
i__7569_8573 = G__8578;
continue;
}
} else
{var temp__4092__auto___8579 = cljs.core.seq.call(null,seq__7566_8570);if(temp__4092__auto___8579)
{var seq__7566_8580__$1 = temp__4092__auto___8579;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7566_8580__$1))
{var c__5632__auto___8581 = cljs.core.chunk_first.call(null,seq__7566_8580__$1);{
var G__8582 = cljs.core.chunk_rest.call(null,seq__7566_8580__$1);
var G__8583 = c__5632__auto___8581;
var G__8584 = cljs.core.count.call(null,c__5632__auto___8581);
var G__8585 = 0;
seq__7566_8570 = G__8582;
chunk__7567_8571 = G__8583;
count__7568_8572 = G__8584;
i__7569_8573 = G__8585;
continue;
}
} else
{var arg__6534__auto___8586 = cljs.core.first.call(null,seq__7566_8580__$1);a__6533__auto__.push(arg__6534__auto___8586);
{
var G__8587 = cljs.core.next.call(null,seq__7566_8580__$1);
var G__8588 = null;
var G__8589 = 0;
var G__8590 = 0;
seq__7566_8570 = G__8587;
chunk__7567_8571 = G__8588;
count__7568_8572 = G__8589;
i__7569_8573 = G__8590;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.article.apply(null,a__6533__auto__);
};
var article = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return article__delegate.call(this,args__6532__auto__);};
article.cljs$lang$maxFixedArity = 0;
article.cljs$lang$applyTo = (function (arglist__8591){
var args__6532__auto__ = cljs.core.seq(arglist__8591);
return article__delegate(args__6532__auto__);
});
article.cljs$core$IFn$_invoke$arity$variadic = article__delegate;
return article;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.aside = (function() { 
var aside__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__7574_8592 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__7575_8593 = null;var count__7576_8594 = 0;var i__7577_8595 = 0;while(true){
if((i__7577_8595 < count__7576_8594))
{var arg__6534__auto___8596 = cljs.core._nth.call(null,chunk__7575_8593,i__7577_8595);a__6533__auto__.push(arg__6534__auto___8596);
{
var G__8597 = seq__7574_8592;
var G__8598 = chunk__7575_8593;
var G__8599 = count__7576_8594;
var G__8600 = (i__7577_8595 + 1);
seq__7574_8592 = G__8597;
chunk__7575_8593 = G__8598;
count__7576_8594 = G__8599;
i__7577_8595 = G__8600;
continue;
}
} else
{var temp__4092__auto___8601 = cljs.core.seq.call(null,seq__7574_8592);if(temp__4092__auto___8601)
{var seq__7574_8602__$1 = temp__4092__auto___8601;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7574_8602__$1))
{var c__5632__auto___8603 = cljs.core.chunk_first.call(null,seq__7574_8602__$1);{
var G__8604 = cljs.core.chunk_rest.call(null,seq__7574_8602__$1);
var G__8605 = c__5632__auto___8603;
var G__8606 = cljs.core.count.call(null,c__5632__auto___8603);
var G__8607 = 0;
seq__7574_8592 = G__8604;
chunk__7575_8593 = G__8605;
count__7576_8594 = G__8606;
i__7577_8595 = G__8607;
continue;
}
} else
{var arg__6534__auto___8608 = cljs.core.first.call(null,seq__7574_8602__$1);a__6533__auto__.push(arg__6534__auto___8608);
{
var G__8609 = cljs.core.next.call(null,seq__7574_8602__$1);
var G__8610 = null;
var G__8611 = 0;
var G__8612 = 0;
seq__7574_8592 = G__8609;
chunk__7575_8593 = G__8610;
count__7576_8594 = G__8611;
i__7577_8595 = G__8612;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.aside.apply(null,a__6533__auto__);
};
var aside = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return aside__delegate.call(this,args__6532__auto__);};
aside.cljs$lang$maxFixedArity = 0;
aside.cljs$lang$applyTo = (function (arglist__8613){
var args__6532__auto__ = cljs.core.seq(arglist__8613);
return aside__delegate(args__6532__auto__);
});
aside.cljs$core$IFn$_invoke$arity$variadic = aside__delegate;
return aside;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.audio = (function() { 
var audio__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__7582_8614 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__7583_8615 = null;var count__7584_8616 = 0;var i__7585_8617 = 0;while(true){
if((i__7585_8617 < count__7584_8616))
{var arg__6534__auto___8618 = cljs.core._nth.call(null,chunk__7583_8615,i__7585_8617);a__6533__auto__.push(arg__6534__auto___8618);
{
var G__8619 = seq__7582_8614;
var G__8620 = chunk__7583_8615;
var G__8621 = count__7584_8616;
var G__8622 = (i__7585_8617 + 1);
seq__7582_8614 = G__8619;
chunk__7583_8615 = G__8620;
count__7584_8616 = G__8621;
i__7585_8617 = G__8622;
continue;
}
} else
{var temp__4092__auto___8623 = cljs.core.seq.call(null,seq__7582_8614);if(temp__4092__auto___8623)
{var seq__7582_8624__$1 = temp__4092__auto___8623;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7582_8624__$1))
{var c__5632__auto___8625 = cljs.core.chunk_first.call(null,seq__7582_8624__$1);{
var G__8626 = cljs.core.chunk_rest.call(null,seq__7582_8624__$1);
var G__8627 = c__5632__auto___8625;
var G__8628 = cljs.core.count.call(null,c__5632__auto___8625);
var G__8629 = 0;
seq__7582_8614 = G__8626;
chunk__7583_8615 = G__8627;
count__7584_8616 = G__8628;
i__7585_8617 = G__8629;
continue;
}
} else
{var arg__6534__auto___8630 = cljs.core.first.call(null,seq__7582_8624__$1);a__6533__auto__.push(arg__6534__auto___8630);
{
var G__8631 = cljs.core.next.call(null,seq__7582_8624__$1);
var G__8632 = null;
var G__8633 = 0;
var G__8634 = 0;
seq__7582_8614 = G__8631;
chunk__7583_8615 = G__8632;
count__7584_8616 = G__8633;
i__7585_8617 = G__8634;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.audio.apply(null,a__6533__auto__);
};
var audio = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return audio__delegate.call(this,args__6532__auto__);};
audio.cljs$lang$maxFixedArity = 0;
audio.cljs$lang$applyTo = (function (arglist__8635){
var args__6532__auto__ = cljs.core.seq(arglist__8635);
return audio__delegate(args__6532__auto__);
});
audio.cljs$core$IFn$_invoke$arity$variadic = audio__delegate;
return audio;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.b = (function() { 
var b__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__7590_8636 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__7591_8637 = null;var count__7592_8638 = 0;var i__7593_8639 = 0;while(true){
if((i__7593_8639 < count__7592_8638))
{var arg__6534__auto___8640 = cljs.core._nth.call(null,chunk__7591_8637,i__7593_8639);a__6533__auto__.push(arg__6534__auto___8640);
{
var G__8641 = seq__7590_8636;
var G__8642 = chunk__7591_8637;
var G__8643 = count__7592_8638;
var G__8644 = (i__7593_8639 + 1);
seq__7590_8636 = G__8641;
chunk__7591_8637 = G__8642;
count__7592_8638 = G__8643;
i__7593_8639 = G__8644;
continue;
}
} else
{var temp__4092__auto___8645 = cljs.core.seq.call(null,seq__7590_8636);if(temp__4092__auto___8645)
{var seq__7590_8646__$1 = temp__4092__auto___8645;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7590_8646__$1))
{var c__5632__auto___8647 = cljs.core.chunk_first.call(null,seq__7590_8646__$1);{
var G__8648 = cljs.core.chunk_rest.call(null,seq__7590_8646__$1);
var G__8649 = c__5632__auto___8647;
var G__8650 = cljs.core.count.call(null,c__5632__auto___8647);
var G__8651 = 0;
seq__7590_8636 = G__8648;
chunk__7591_8637 = G__8649;
count__7592_8638 = G__8650;
i__7593_8639 = G__8651;
continue;
}
} else
{var arg__6534__auto___8652 = cljs.core.first.call(null,seq__7590_8646__$1);a__6533__auto__.push(arg__6534__auto___8652);
{
var G__8653 = cljs.core.next.call(null,seq__7590_8646__$1);
var G__8654 = null;
var G__8655 = 0;
var G__8656 = 0;
seq__7590_8636 = G__8653;
chunk__7591_8637 = G__8654;
count__7592_8638 = G__8655;
i__7593_8639 = G__8656;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.b.apply(null,a__6533__auto__);
};
var b = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return b__delegate.call(this,args__6532__auto__);};
b.cljs$lang$maxFixedArity = 0;
b.cljs$lang$applyTo = (function (arglist__8657){
var args__6532__auto__ = cljs.core.seq(arglist__8657);
return b__delegate(args__6532__auto__);
});
b.cljs$core$IFn$_invoke$arity$variadic = b__delegate;
return b;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.base = (function() { 
var base__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__7598_8658 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__7599_8659 = null;var count__7600_8660 = 0;var i__7601_8661 = 0;while(true){
if((i__7601_8661 < count__7600_8660))
{var arg__6534__auto___8662 = cljs.core._nth.call(null,chunk__7599_8659,i__7601_8661);a__6533__auto__.push(arg__6534__auto___8662);
{
var G__8663 = seq__7598_8658;
var G__8664 = chunk__7599_8659;
var G__8665 = count__7600_8660;
var G__8666 = (i__7601_8661 + 1);
seq__7598_8658 = G__8663;
chunk__7599_8659 = G__8664;
count__7600_8660 = G__8665;
i__7601_8661 = G__8666;
continue;
}
} else
{var temp__4092__auto___8667 = cljs.core.seq.call(null,seq__7598_8658);if(temp__4092__auto___8667)
{var seq__7598_8668__$1 = temp__4092__auto___8667;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7598_8668__$1))
{var c__5632__auto___8669 = cljs.core.chunk_first.call(null,seq__7598_8668__$1);{
var G__8670 = cljs.core.chunk_rest.call(null,seq__7598_8668__$1);
var G__8671 = c__5632__auto___8669;
var G__8672 = cljs.core.count.call(null,c__5632__auto___8669);
var G__8673 = 0;
seq__7598_8658 = G__8670;
chunk__7599_8659 = G__8671;
count__7600_8660 = G__8672;
i__7601_8661 = G__8673;
continue;
}
} else
{var arg__6534__auto___8674 = cljs.core.first.call(null,seq__7598_8668__$1);a__6533__auto__.push(arg__6534__auto___8674);
{
var G__8675 = cljs.core.next.call(null,seq__7598_8668__$1);
var G__8676 = null;
var G__8677 = 0;
var G__8678 = 0;
seq__7598_8658 = G__8675;
chunk__7599_8659 = G__8676;
count__7600_8660 = G__8677;
i__7601_8661 = G__8678;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.base.apply(null,a__6533__auto__);
};
var base = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return base__delegate.call(this,args__6532__auto__);};
base.cljs$lang$maxFixedArity = 0;
base.cljs$lang$applyTo = (function (arglist__8679){
var args__6532__auto__ = cljs.core.seq(arglist__8679);
return base__delegate(args__6532__auto__);
});
base.cljs$core$IFn$_invoke$arity$variadic = base__delegate;
return base;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.bdi = (function() { 
var bdi__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__7606_8680 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__7607_8681 = null;var count__7608_8682 = 0;var i__7609_8683 = 0;while(true){
if((i__7609_8683 < count__7608_8682))
{var arg__6534__auto___8684 = cljs.core._nth.call(null,chunk__7607_8681,i__7609_8683);a__6533__auto__.push(arg__6534__auto___8684);
{
var G__8685 = seq__7606_8680;
var G__8686 = chunk__7607_8681;
var G__8687 = count__7608_8682;
var G__8688 = (i__7609_8683 + 1);
seq__7606_8680 = G__8685;
chunk__7607_8681 = G__8686;
count__7608_8682 = G__8687;
i__7609_8683 = G__8688;
continue;
}
} else
{var temp__4092__auto___8689 = cljs.core.seq.call(null,seq__7606_8680);if(temp__4092__auto___8689)
{var seq__7606_8690__$1 = temp__4092__auto___8689;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7606_8690__$1))
{var c__5632__auto___8691 = cljs.core.chunk_first.call(null,seq__7606_8690__$1);{
var G__8692 = cljs.core.chunk_rest.call(null,seq__7606_8690__$1);
var G__8693 = c__5632__auto___8691;
var G__8694 = cljs.core.count.call(null,c__5632__auto___8691);
var G__8695 = 0;
seq__7606_8680 = G__8692;
chunk__7607_8681 = G__8693;
count__7608_8682 = G__8694;
i__7609_8683 = G__8695;
continue;
}
} else
{var arg__6534__auto___8696 = cljs.core.first.call(null,seq__7606_8690__$1);a__6533__auto__.push(arg__6534__auto___8696);
{
var G__8697 = cljs.core.next.call(null,seq__7606_8690__$1);
var G__8698 = null;
var G__8699 = 0;
var G__8700 = 0;
seq__7606_8680 = G__8697;
chunk__7607_8681 = G__8698;
count__7608_8682 = G__8699;
i__7609_8683 = G__8700;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.bdi.apply(null,a__6533__auto__);
};
var bdi = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return bdi__delegate.call(this,args__6532__auto__);};
bdi.cljs$lang$maxFixedArity = 0;
bdi.cljs$lang$applyTo = (function (arglist__8701){
var args__6532__auto__ = cljs.core.seq(arglist__8701);
return bdi__delegate(args__6532__auto__);
});
bdi.cljs$core$IFn$_invoke$arity$variadic = bdi__delegate;
return bdi;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.bdo = (function() { 
var bdo__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__7614_8702 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__7615_8703 = null;var count__7616_8704 = 0;var i__7617_8705 = 0;while(true){
if((i__7617_8705 < count__7616_8704))
{var arg__6534__auto___8706 = cljs.core._nth.call(null,chunk__7615_8703,i__7617_8705);a__6533__auto__.push(arg__6534__auto___8706);
{
var G__8707 = seq__7614_8702;
var G__8708 = chunk__7615_8703;
var G__8709 = count__7616_8704;
var G__8710 = (i__7617_8705 + 1);
seq__7614_8702 = G__8707;
chunk__7615_8703 = G__8708;
count__7616_8704 = G__8709;
i__7617_8705 = G__8710;
continue;
}
} else
{var temp__4092__auto___8711 = cljs.core.seq.call(null,seq__7614_8702);if(temp__4092__auto___8711)
{var seq__7614_8712__$1 = temp__4092__auto___8711;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7614_8712__$1))
{var c__5632__auto___8713 = cljs.core.chunk_first.call(null,seq__7614_8712__$1);{
var G__8714 = cljs.core.chunk_rest.call(null,seq__7614_8712__$1);
var G__8715 = c__5632__auto___8713;
var G__8716 = cljs.core.count.call(null,c__5632__auto___8713);
var G__8717 = 0;
seq__7614_8702 = G__8714;
chunk__7615_8703 = G__8715;
count__7616_8704 = G__8716;
i__7617_8705 = G__8717;
continue;
}
} else
{var arg__6534__auto___8718 = cljs.core.first.call(null,seq__7614_8712__$1);a__6533__auto__.push(arg__6534__auto___8718);
{
var G__8719 = cljs.core.next.call(null,seq__7614_8712__$1);
var G__8720 = null;
var G__8721 = 0;
var G__8722 = 0;
seq__7614_8702 = G__8719;
chunk__7615_8703 = G__8720;
count__7616_8704 = G__8721;
i__7617_8705 = G__8722;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.bdo.apply(null,a__6533__auto__);
};
var bdo = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return bdo__delegate.call(this,args__6532__auto__);};
bdo.cljs$lang$maxFixedArity = 0;
bdo.cljs$lang$applyTo = (function (arglist__8723){
var args__6532__auto__ = cljs.core.seq(arglist__8723);
return bdo__delegate(args__6532__auto__);
});
bdo.cljs$core$IFn$_invoke$arity$variadic = bdo__delegate;
return bdo;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.big = (function() { 
var big__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__7622_8724 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__7623_8725 = null;var count__7624_8726 = 0;var i__7625_8727 = 0;while(true){
if((i__7625_8727 < count__7624_8726))
{var arg__6534__auto___8728 = cljs.core._nth.call(null,chunk__7623_8725,i__7625_8727);a__6533__auto__.push(arg__6534__auto___8728);
{
var G__8729 = seq__7622_8724;
var G__8730 = chunk__7623_8725;
var G__8731 = count__7624_8726;
var G__8732 = (i__7625_8727 + 1);
seq__7622_8724 = G__8729;
chunk__7623_8725 = G__8730;
count__7624_8726 = G__8731;
i__7625_8727 = G__8732;
continue;
}
} else
{var temp__4092__auto___8733 = cljs.core.seq.call(null,seq__7622_8724);if(temp__4092__auto___8733)
{var seq__7622_8734__$1 = temp__4092__auto___8733;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7622_8734__$1))
{var c__5632__auto___8735 = cljs.core.chunk_first.call(null,seq__7622_8734__$1);{
var G__8736 = cljs.core.chunk_rest.call(null,seq__7622_8734__$1);
var G__8737 = c__5632__auto___8735;
var G__8738 = cljs.core.count.call(null,c__5632__auto___8735);
var G__8739 = 0;
seq__7622_8724 = G__8736;
chunk__7623_8725 = G__8737;
count__7624_8726 = G__8738;
i__7625_8727 = G__8739;
continue;
}
} else
{var arg__6534__auto___8740 = cljs.core.first.call(null,seq__7622_8734__$1);a__6533__auto__.push(arg__6534__auto___8740);
{
var G__8741 = cljs.core.next.call(null,seq__7622_8734__$1);
var G__8742 = null;
var G__8743 = 0;
var G__8744 = 0;
seq__7622_8724 = G__8741;
chunk__7623_8725 = G__8742;
count__7624_8726 = G__8743;
i__7625_8727 = G__8744;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.big.apply(null,a__6533__auto__);
};
var big = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return big__delegate.call(this,args__6532__auto__);};
big.cljs$lang$maxFixedArity = 0;
big.cljs$lang$applyTo = (function (arglist__8745){
var args__6532__auto__ = cljs.core.seq(arglist__8745);
return big__delegate(args__6532__auto__);
});
big.cljs$core$IFn$_invoke$arity$variadic = big__delegate;
return big;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.blockquote = (function() { 
var blockquote__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__7630_8746 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__7631_8747 = null;var count__7632_8748 = 0;var i__7633_8749 = 0;while(true){
if((i__7633_8749 < count__7632_8748))
{var arg__6534__auto___8750 = cljs.core._nth.call(null,chunk__7631_8747,i__7633_8749);a__6533__auto__.push(arg__6534__auto___8750);
{
var G__8751 = seq__7630_8746;
var G__8752 = chunk__7631_8747;
var G__8753 = count__7632_8748;
var G__8754 = (i__7633_8749 + 1);
seq__7630_8746 = G__8751;
chunk__7631_8747 = G__8752;
count__7632_8748 = G__8753;
i__7633_8749 = G__8754;
continue;
}
} else
{var temp__4092__auto___8755 = cljs.core.seq.call(null,seq__7630_8746);if(temp__4092__auto___8755)
{var seq__7630_8756__$1 = temp__4092__auto___8755;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7630_8756__$1))
{var c__5632__auto___8757 = cljs.core.chunk_first.call(null,seq__7630_8756__$1);{
var G__8758 = cljs.core.chunk_rest.call(null,seq__7630_8756__$1);
var G__8759 = c__5632__auto___8757;
var G__8760 = cljs.core.count.call(null,c__5632__auto___8757);
var G__8761 = 0;
seq__7630_8746 = G__8758;
chunk__7631_8747 = G__8759;
count__7632_8748 = G__8760;
i__7633_8749 = G__8761;
continue;
}
} else
{var arg__6534__auto___8762 = cljs.core.first.call(null,seq__7630_8756__$1);a__6533__auto__.push(arg__6534__auto___8762);
{
var G__8763 = cljs.core.next.call(null,seq__7630_8756__$1);
var G__8764 = null;
var G__8765 = 0;
var G__8766 = 0;
seq__7630_8746 = G__8763;
chunk__7631_8747 = G__8764;
count__7632_8748 = G__8765;
i__7633_8749 = G__8766;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.blockquote.apply(null,a__6533__auto__);
};
var blockquote = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return blockquote__delegate.call(this,args__6532__auto__);};
blockquote.cljs$lang$maxFixedArity = 0;
blockquote.cljs$lang$applyTo = (function (arglist__8767){
var args__6532__auto__ = cljs.core.seq(arglist__8767);
return blockquote__delegate(args__6532__auto__);
});
blockquote.cljs$core$IFn$_invoke$arity$variadic = blockquote__delegate;
return blockquote;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.body = (function() { 
var body__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__7638_8768 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__7639_8769 = null;var count__7640_8770 = 0;var i__7641_8771 = 0;while(true){
if((i__7641_8771 < count__7640_8770))
{var arg__6534__auto___8772 = cljs.core._nth.call(null,chunk__7639_8769,i__7641_8771);a__6533__auto__.push(arg__6534__auto___8772);
{
var G__8773 = seq__7638_8768;
var G__8774 = chunk__7639_8769;
var G__8775 = count__7640_8770;
var G__8776 = (i__7641_8771 + 1);
seq__7638_8768 = G__8773;
chunk__7639_8769 = G__8774;
count__7640_8770 = G__8775;
i__7641_8771 = G__8776;
continue;
}
} else
{var temp__4092__auto___8777 = cljs.core.seq.call(null,seq__7638_8768);if(temp__4092__auto___8777)
{var seq__7638_8778__$1 = temp__4092__auto___8777;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7638_8778__$1))
{var c__5632__auto___8779 = cljs.core.chunk_first.call(null,seq__7638_8778__$1);{
var G__8780 = cljs.core.chunk_rest.call(null,seq__7638_8778__$1);
var G__8781 = c__5632__auto___8779;
var G__8782 = cljs.core.count.call(null,c__5632__auto___8779);
var G__8783 = 0;
seq__7638_8768 = G__8780;
chunk__7639_8769 = G__8781;
count__7640_8770 = G__8782;
i__7641_8771 = G__8783;
continue;
}
} else
{var arg__6534__auto___8784 = cljs.core.first.call(null,seq__7638_8778__$1);a__6533__auto__.push(arg__6534__auto___8784);
{
var G__8785 = cljs.core.next.call(null,seq__7638_8778__$1);
var G__8786 = null;
var G__8787 = 0;
var G__8788 = 0;
seq__7638_8768 = G__8785;
chunk__7639_8769 = G__8786;
count__7640_8770 = G__8787;
i__7641_8771 = G__8788;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.body.apply(null,a__6533__auto__);
};
var body = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return body__delegate.call(this,args__6532__auto__);};
body.cljs$lang$maxFixedArity = 0;
body.cljs$lang$applyTo = (function (arglist__8789){
var args__6532__auto__ = cljs.core.seq(arglist__8789);
return body__delegate(args__6532__auto__);
});
body.cljs$core$IFn$_invoke$arity$variadic = body__delegate;
return body;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.br = (function() { 
var br__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__7646_8790 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__7647_8791 = null;var count__7648_8792 = 0;var i__7649_8793 = 0;while(true){
if((i__7649_8793 < count__7648_8792))
{var arg__6534__auto___8794 = cljs.core._nth.call(null,chunk__7647_8791,i__7649_8793);a__6533__auto__.push(arg__6534__auto___8794);
{
var G__8795 = seq__7646_8790;
var G__8796 = chunk__7647_8791;
var G__8797 = count__7648_8792;
var G__8798 = (i__7649_8793 + 1);
seq__7646_8790 = G__8795;
chunk__7647_8791 = G__8796;
count__7648_8792 = G__8797;
i__7649_8793 = G__8798;
continue;
}
} else
{var temp__4092__auto___8799 = cljs.core.seq.call(null,seq__7646_8790);if(temp__4092__auto___8799)
{var seq__7646_8800__$1 = temp__4092__auto___8799;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7646_8800__$1))
{var c__5632__auto___8801 = cljs.core.chunk_first.call(null,seq__7646_8800__$1);{
var G__8802 = cljs.core.chunk_rest.call(null,seq__7646_8800__$1);
var G__8803 = c__5632__auto___8801;
var G__8804 = cljs.core.count.call(null,c__5632__auto___8801);
var G__8805 = 0;
seq__7646_8790 = G__8802;
chunk__7647_8791 = G__8803;
count__7648_8792 = G__8804;
i__7649_8793 = G__8805;
continue;
}
} else
{var arg__6534__auto___8806 = cljs.core.first.call(null,seq__7646_8800__$1);a__6533__auto__.push(arg__6534__auto___8806);
{
var G__8807 = cljs.core.next.call(null,seq__7646_8800__$1);
var G__8808 = null;
var G__8809 = 0;
var G__8810 = 0;
seq__7646_8790 = G__8807;
chunk__7647_8791 = G__8808;
count__7648_8792 = G__8809;
i__7649_8793 = G__8810;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.br.apply(null,a__6533__auto__);
};
var br = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return br__delegate.call(this,args__6532__auto__);};
br.cljs$lang$maxFixedArity = 0;
br.cljs$lang$applyTo = (function (arglist__8811){
var args__6532__auto__ = cljs.core.seq(arglist__8811);
return br__delegate(args__6532__auto__);
});
br.cljs$core$IFn$_invoke$arity$variadic = br__delegate;
return br;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.button = (function() { 
var button__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__7654_8812 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__7655_8813 = null;var count__7656_8814 = 0;var i__7657_8815 = 0;while(true){
if((i__7657_8815 < count__7656_8814))
{var arg__6534__auto___8816 = cljs.core._nth.call(null,chunk__7655_8813,i__7657_8815);a__6533__auto__.push(arg__6534__auto___8816);
{
var G__8817 = seq__7654_8812;
var G__8818 = chunk__7655_8813;
var G__8819 = count__7656_8814;
var G__8820 = (i__7657_8815 + 1);
seq__7654_8812 = G__8817;
chunk__7655_8813 = G__8818;
count__7656_8814 = G__8819;
i__7657_8815 = G__8820;
continue;
}
} else
{var temp__4092__auto___8821 = cljs.core.seq.call(null,seq__7654_8812);if(temp__4092__auto___8821)
{var seq__7654_8822__$1 = temp__4092__auto___8821;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7654_8822__$1))
{var c__5632__auto___8823 = cljs.core.chunk_first.call(null,seq__7654_8822__$1);{
var G__8824 = cljs.core.chunk_rest.call(null,seq__7654_8822__$1);
var G__8825 = c__5632__auto___8823;
var G__8826 = cljs.core.count.call(null,c__5632__auto___8823);
var G__8827 = 0;
seq__7654_8812 = G__8824;
chunk__7655_8813 = G__8825;
count__7656_8814 = G__8826;
i__7657_8815 = G__8827;
continue;
}
} else
{var arg__6534__auto___8828 = cljs.core.first.call(null,seq__7654_8822__$1);a__6533__auto__.push(arg__6534__auto___8828);
{
var G__8829 = cljs.core.next.call(null,seq__7654_8822__$1);
var G__8830 = null;
var G__8831 = 0;
var G__8832 = 0;
seq__7654_8812 = G__8829;
chunk__7655_8813 = G__8830;
count__7656_8814 = G__8831;
i__7657_8815 = G__8832;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.button.apply(null,a__6533__auto__);
};
var button = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return button__delegate.call(this,args__6532__auto__);};
button.cljs$lang$maxFixedArity = 0;
button.cljs$lang$applyTo = (function (arglist__8833){
var args__6532__auto__ = cljs.core.seq(arglist__8833);
return button__delegate(args__6532__auto__);
});
button.cljs$core$IFn$_invoke$arity$variadic = button__delegate;
return button;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.canvas = (function() { 
var canvas__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__7662_8834 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__7663_8835 = null;var count__7664_8836 = 0;var i__7665_8837 = 0;while(true){
if((i__7665_8837 < count__7664_8836))
{var arg__6534__auto___8838 = cljs.core._nth.call(null,chunk__7663_8835,i__7665_8837);a__6533__auto__.push(arg__6534__auto___8838);
{
var G__8839 = seq__7662_8834;
var G__8840 = chunk__7663_8835;
var G__8841 = count__7664_8836;
var G__8842 = (i__7665_8837 + 1);
seq__7662_8834 = G__8839;
chunk__7663_8835 = G__8840;
count__7664_8836 = G__8841;
i__7665_8837 = G__8842;
continue;
}
} else
{var temp__4092__auto___8843 = cljs.core.seq.call(null,seq__7662_8834);if(temp__4092__auto___8843)
{var seq__7662_8844__$1 = temp__4092__auto___8843;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7662_8844__$1))
{var c__5632__auto___8845 = cljs.core.chunk_first.call(null,seq__7662_8844__$1);{
var G__8846 = cljs.core.chunk_rest.call(null,seq__7662_8844__$1);
var G__8847 = c__5632__auto___8845;
var G__8848 = cljs.core.count.call(null,c__5632__auto___8845);
var G__8849 = 0;
seq__7662_8834 = G__8846;
chunk__7663_8835 = G__8847;
count__7664_8836 = G__8848;
i__7665_8837 = G__8849;
continue;
}
} else
{var arg__6534__auto___8850 = cljs.core.first.call(null,seq__7662_8844__$1);a__6533__auto__.push(arg__6534__auto___8850);
{
var G__8851 = cljs.core.next.call(null,seq__7662_8844__$1);
var G__8852 = null;
var G__8853 = 0;
var G__8854 = 0;
seq__7662_8834 = G__8851;
chunk__7663_8835 = G__8852;
count__7664_8836 = G__8853;
i__7665_8837 = G__8854;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.canvas.apply(null,a__6533__auto__);
};
var canvas = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return canvas__delegate.call(this,args__6532__auto__);};
canvas.cljs$lang$maxFixedArity = 0;
canvas.cljs$lang$applyTo = (function (arglist__8855){
var args__6532__auto__ = cljs.core.seq(arglist__8855);
return canvas__delegate(args__6532__auto__);
});
canvas.cljs$core$IFn$_invoke$arity$variadic = canvas__delegate;
return canvas;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.caption = (function() { 
var caption__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__7670_8856 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__7671_8857 = null;var count__7672_8858 = 0;var i__7673_8859 = 0;while(true){
if((i__7673_8859 < count__7672_8858))
{var arg__6534__auto___8860 = cljs.core._nth.call(null,chunk__7671_8857,i__7673_8859);a__6533__auto__.push(arg__6534__auto___8860);
{
var G__8861 = seq__7670_8856;
var G__8862 = chunk__7671_8857;
var G__8863 = count__7672_8858;
var G__8864 = (i__7673_8859 + 1);
seq__7670_8856 = G__8861;
chunk__7671_8857 = G__8862;
count__7672_8858 = G__8863;
i__7673_8859 = G__8864;
continue;
}
} else
{var temp__4092__auto___8865 = cljs.core.seq.call(null,seq__7670_8856);if(temp__4092__auto___8865)
{var seq__7670_8866__$1 = temp__4092__auto___8865;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7670_8866__$1))
{var c__5632__auto___8867 = cljs.core.chunk_first.call(null,seq__7670_8866__$1);{
var G__8868 = cljs.core.chunk_rest.call(null,seq__7670_8866__$1);
var G__8869 = c__5632__auto___8867;
var G__8870 = cljs.core.count.call(null,c__5632__auto___8867);
var G__8871 = 0;
seq__7670_8856 = G__8868;
chunk__7671_8857 = G__8869;
count__7672_8858 = G__8870;
i__7673_8859 = G__8871;
continue;
}
} else
{var arg__6534__auto___8872 = cljs.core.first.call(null,seq__7670_8866__$1);a__6533__auto__.push(arg__6534__auto___8872);
{
var G__8873 = cljs.core.next.call(null,seq__7670_8866__$1);
var G__8874 = null;
var G__8875 = 0;
var G__8876 = 0;
seq__7670_8856 = G__8873;
chunk__7671_8857 = G__8874;
count__7672_8858 = G__8875;
i__7673_8859 = G__8876;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.caption.apply(null,a__6533__auto__);
};
var caption = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return caption__delegate.call(this,args__6532__auto__);};
caption.cljs$lang$maxFixedArity = 0;
caption.cljs$lang$applyTo = (function (arglist__8877){
var args__6532__auto__ = cljs.core.seq(arglist__8877);
return caption__delegate(args__6532__auto__);
});
caption.cljs$core$IFn$_invoke$arity$variadic = caption__delegate;
return caption;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.cite = (function() { 
var cite__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__7678_8878 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__7679_8879 = null;var count__7680_8880 = 0;var i__7681_8881 = 0;while(true){
if((i__7681_8881 < count__7680_8880))
{var arg__6534__auto___8882 = cljs.core._nth.call(null,chunk__7679_8879,i__7681_8881);a__6533__auto__.push(arg__6534__auto___8882);
{
var G__8883 = seq__7678_8878;
var G__8884 = chunk__7679_8879;
var G__8885 = count__7680_8880;
var G__8886 = (i__7681_8881 + 1);
seq__7678_8878 = G__8883;
chunk__7679_8879 = G__8884;
count__7680_8880 = G__8885;
i__7681_8881 = G__8886;
continue;
}
} else
{var temp__4092__auto___8887 = cljs.core.seq.call(null,seq__7678_8878);if(temp__4092__auto___8887)
{var seq__7678_8888__$1 = temp__4092__auto___8887;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7678_8888__$1))
{var c__5632__auto___8889 = cljs.core.chunk_first.call(null,seq__7678_8888__$1);{
var G__8890 = cljs.core.chunk_rest.call(null,seq__7678_8888__$1);
var G__8891 = c__5632__auto___8889;
var G__8892 = cljs.core.count.call(null,c__5632__auto___8889);
var G__8893 = 0;
seq__7678_8878 = G__8890;
chunk__7679_8879 = G__8891;
count__7680_8880 = G__8892;
i__7681_8881 = G__8893;
continue;
}
} else
{var arg__6534__auto___8894 = cljs.core.first.call(null,seq__7678_8888__$1);a__6533__auto__.push(arg__6534__auto___8894);
{
var G__8895 = cljs.core.next.call(null,seq__7678_8888__$1);
var G__8896 = null;
var G__8897 = 0;
var G__8898 = 0;
seq__7678_8878 = G__8895;
chunk__7679_8879 = G__8896;
count__7680_8880 = G__8897;
i__7681_8881 = G__8898;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.cite.apply(null,a__6533__auto__);
};
var cite = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return cite__delegate.call(this,args__6532__auto__);};
cite.cljs$lang$maxFixedArity = 0;
cite.cljs$lang$applyTo = (function (arglist__8899){
var args__6532__auto__ = cljs.core.seq(arglist__8899);
return cite__delegate(args__6532__auto__);
});
cite.cljs$core$IFn$_invoke$arity$variadic = cite__delegate;
return cite;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.code = (function() { 
var code__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__7686_8900 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__7687_8901 = null;var count__7688_8902 = 0;var i__7689_8903 = 0;while(true){
if((i__7689_8903 < count__7688_8902))
{var arg__6534__auto___8904 = cljs.core._nth.call(null,chunk__7687_8901,i__7689_8903);a__6533__auto__.push(arg__6534__auto___8904);
{
var G__8905 = seq__7686_8900;
var G__8906 = chunk__7687_8901;
var G__8907 = count__7688_8902;
var G__8908 = (i__7689_8903 + 1);
seq__7686_8900 = G__8905;
chunk__7687_8901 = G__8906;
count__7688_8902 = G__8907;
i__7689_8903 = G__8908;
continue;
}
} else
{var temp__4092__auto___8909 = cljs.core.seq.call(null,seq__7686_8900);if(temp__4092__auto___8909)
{var seq__7686_8910__$1 = temp__4092__auto___8909;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7686_8910__$1))
{var c__5632__auto___8911 = cljs.core.chunk_first.call(null,seq__7686_8910__$1);{
var G__8912 = cljs.core.chunk_rest.call(null,seq__7686_8910__$1);
var G__8913 = c__5632__auto___8911;
var G__8914 = cljs.core.count.call(null,c__5632__auto___8911);
var G__8915 = 0;
seq__7686_8900 = G__8912;
chunk__7687_8901 = G__8913;
count__7688_8902 = G__8914;
i__7689_8903 = G__8915;
continue;
}
} else
{var arg__6534__auto___8916 = cljs.core.first.call(null,seq__7686_8910__$1);a__6533__auto__.push(arg__6534__auto___8916);
{
var G__8917 = cljs.core.next.call(null,seq__7686_8910__$1);
var G__8918 = null;
var G__8919 = 0;
var G__8920 = 0;
seq__7686_8900 = G__8917;
chunk__7687_8901 = G__8918;
count__7688_8902 = G__8919;
i__7689_8903 = G__8920;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.code.apply(null,a__6533__auto__);
};
var code = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return code__delegate.call(this,args__6532__auto__);};
code.cljs$lang$maxFixedArity = 0;
code.cljs$lang$applyTo = (function (arglist__8921){
var args__6532__auto__ = cljs.core.seq(arglist__8921);
return code__delegate(args__6532__auto__);
});
code.cljs$core$IFn$_invoke$arity$variadic = code__delegate;
return code;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.col = (function() { 
var col__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__7694_8922 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__7695_8923 = null;var count__7696_8924 = 0;var i__7697_8925 = 0;while(true){
if((i__7697_8925 < count__7696_8924))
{var arg__6534__auto___8926 = cljs.core._nth.call(null,chunk__7695_8923,i__7697_8925);a__6533__auto__.push(arg__6534__auto___8926);
{
var G__8927 = seq__7694_8922;
var G__8928 = chunk__7695_8923;
var G__8929 = count__7696_8924;
var G__8930 = (i__7697_8925 + 1);
seq__7694_8922 = G__8927;
chunk__7695_8923 = G__8928;
count__7696_8924 = G__8929;
i__7697_8925 = G__8930;
continue;
}
} else
{var temp__4092__auto___8931 = cljs.core.seq.call(null,seq__7694_8922);if(temp__4092__auto___8931)
{var seq__7694_8932__$1 = temp__4092__auto___8931;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7694_8932__$1))
{var c__5632__auto___8933 = cljs.core.chunk_first.call(null,seq__7694_8932__$1);{
var G__8934 = cljs.core.chunk_rest.call(null,seq__7694_8932__$1);
var G__8935 = c__5632__auto___8933;
var G__8936 = cljs.core.count.call(null,c__5632__auto___8933);
var G__8937 = 0;
seq__7694_8922 = G__8934;
chunk__7695_8923 = G__8935;
count__7696_8924 = G__8936;
i__7697_8925 = G__8937;
continue;
}
} else
{var arg__6534__auto___8938 = cljs.core.first.call(null,seq__7694_8932__$1);a__6533__auto__.push(arg__6534__auto___8938);
{
var G__8939 = cljs.core.next.call(null,seq__7694_8932__$1);
var G__8940 = null;
var G__8941 = 0;
var G__8942 = 0;
seq__7694_8922 = G__8939;
chunk__7695_8923 = G__8940;
count__7696_8924 = G__8941;
i__7697_8925 = G__8942;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.col.apply(null,a__6533__auto__);
};
var col = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return col__delegate.call(this,args__6532__auto__);};
col.cljs$lang$maxFixedArity = 0;
col.cljs$lang$applyTo = (function (arglist__8943){
var args__6532__auto__ = cljs.core.seq(arglist__8943);
return col__delegate(args__6532__auto__);
});
col.cljs$core$IFn$_invoke$arity$variadic = col__delegate;
return col;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.colgroup = (function() { 
var colgroup__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__7702_8944 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__7703_8945 = null;var count__7704_8946 = 0;var i__7705_8947 = 0;while(true){
if((i__7705_8947 < count__7704_8946))
{var arg__6534__auto___8948 = cljs.core._nth.call(null,chunk__7703_8945,i__7705_8947);a__6533__auto__.push(arg__6534__auto___8948);
{
var G__8949 = seq__7702_8944;
var G__8950 = chunk__7703_8945;
var G__8951 = count__7704_8946;
var G__8952 = (i__7705_8947 + 1);
seq__7702_8944 = G__8949;
chunk__7703_8945 = G__8950;
count__7704_8946 = G__8951;
i__7705_8947 = G__8952;
continue;
}
} else
{var temp__4092__auto___8953 = cljs.core.seq.call(null,seq__7702_8944);if(temp__4092__auto___8953)
{var seq__7702_8954__$1 = temp__4092__auto___8953;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7702_8954__$1))
{var c__5632__auto___8955 = cljs.core.chunk_first.call(null,seq__7702_8954__$1);{
var G__8956 = cljs.core.chunk_rest.call(null,seq__7702_8954__$1);
var G__8957 = c__5632__auto___8955;
var G__8958 = cljs.core.count.call(null,c__5632__auto___8955);
var G__8959 = 0;
seq__7702_8944 = G__8956;
chunk__7703_8945 = G__8957;
count__7704_8946 = G__8958;
i__7705_8947 = G__8959;
continue;
}
} else
{var arg__6534__auto___8960 = cljs.core.first.call(null,seq__7702_8954__$1);a__6533__auto__.push(arg__6534__auto___8960);
{
var G__8961 = cljs.core.next.call(null,seq__7702_8954__$1);
var G__8962 = null;
var G__8963 = 0;
var G__8964 = 0;
seq__7702_8944 = G__8961;
chunk__7703_8945 = G__8962;
count__7704_8946 = G__8963;
i__7705_8947 = G__8964;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.colgroup.apply(null,a__6533__auto__);
};
var colgroup = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return colgroup__delegate.call(this,args__6532__auto__);};
colgroup.cljs$lang$maxFixedArity = 0;
colgroup.cljs$lang$applyTo = (function (arglist__8965){
var args__6532__auto__ = cljs.core.seq(arglist__8965);
return colgroup__delegate(args__6532__auto__);
});
colgroup.cljs$core$IFn$_invoke$arity$variadic = colgroup__delegate;
return colgroup;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.data = (function() { 
var data__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__7710_8966 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__7711_8967 = null;var count__7712_8968 = 0;var i__7713_8969 = 0;while(true){
if((i__7713_8969 < count__7712_8968))
{var arg__6534__auto___8970 = cljs.core._nth.call(null,chunk__7711_8967,i__7713_8969);a__6533__auto__.push(arg__6534__auto___8970);
{
var G__8971 = seq__7710_8966;
var G__8972 = chunk__7711_8967;
var G__8973 = count__7712_8968;
var G__8974 = (i__7713_8969 + 1);
seq__7710_8966 = G__8971;
chunk__7711_8967 = G__8972;
count__7712_8968 = G__8973;
i__7713_8969 = G__8974;
continue;
}
} else
{var temp__4092__auto___8975 = cljs.core.seq.call(null,seq__7710_8966);if(temp__4092__auto___8975)
{var seq__7710_8976__$1 = temp__4092__auto___8975;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7710_8976__$1))
{var c__5632__auto___8977 = cljs.core.chunk_first.call(null,seq__7710_8976__$1);{
var G__8978 = cljs.core.chunk_rest.call(null,seq__7710_8976__$1);
var G__8979 = c__5632__auto___8977;
var G__8980 = cljs.core.count.call(null,c__5632__auto___8977);
var G__8981 = 0;
seq__7710_8966 = G__8978;
chunk__7711_8967 = G__8979;
count__7712_8968 = G__8980;
i__7713_8969 = G__8981;
continue;
}
} else
{var arg__6534__auto___8982 = cljs.core.first.call(null,seq__7710_8976__$1);a__6533__auto__.push(arg__6534__auto___8982);
{
var G__8983 = cljs.core.next.call(null,seq__7710_8976__$1);
var G__8984 = null;
var G__8985 = 0;
var G__8986 = 0;
seq__7710_8966 = G__8983;
chunk__7711_8967 = G__8984;
count__7712_8968 = G__8985;
i__7713_8969 = G__8986;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.data.apply(null,a__6533__auto__);
};
var data = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return data__delegate.call(this,args__6532__auto__);};
data.cljs$lang$maxFixedArity = 0;
data.cljs$lang$applyTo = (function (arglist__8987){
var args__6532__auto__ = cljs.core.seq(arglist__8987);
return data__delegate(args__6532__auto__);
});
data.cljs$core$IFn$_invoke$arity$variadic = data__delegate;
return data;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.datalist = (function() { 
var datalist__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__7718_8988 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__7719_8989 = null;var count__7720_8990 = 0;var i__7721_8991 = 0;while(true){
if((i__7721_8991 < count__7720_8990))
{var arg__6534__auto___8992 = cljs.core._nth.call(null,chunk__7719_8989,i__7721_8991);a__6533__auto__.push(arg__6534__auto___8992);
{
var G__8993 = seq__7718_8988;
var G__8994 = chunk__7719_8989;
var G__8995 = count__7720_8990;
var G__8996 = (i__7721_8991 + 1);
seq__7718_8988 = G__8993;
chunk__7719_8989 = G__8994;
count__7720_8990 = G__8995;
i__7721_8991 = G__8996;
continue;
}
} else
{var temp__4092__auto___8997 = cljs.core.seq.call(null,seq__7718_8988);if(temp__4092__auto___8997)
{var seq__7718_8998__$1 = temp__4092__auto___8997;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7718_8998__$1))
{var c__5632__auto___8999 = cljs.core.chunk_first.call(null,seq__7718_8998__$1);{
var G__9000 = cljs.core.chunk_rest.call(null,seq__7718_8998__$1);
var G__9001 = c__5632__auto___8999;
var G__9002 = cljs.core.count.call(null,c__5632__auto___8999);
var G__9003 = 0;
seq__7718_8988 = G__9000;
chunk__7719_8989 = G__9001;
count__7720_8990 = G__9002;
i__7721_8991 = G__9003;
continue;
}
} else
{var arg__6534__auto___9004 = cljs.core.first.call(null,seq__7718_8998__$1);a__6533__auto__.push(arg__6534__auto___9004);
{
var G__9005 = cljs.core.next.call(null,seq__7718_8998__$1);
var G__9006 = null;
var G__9007 = 0;
var G__9008 = 0;
seq__7718_8988 = G__9005;
chunk__7719_8989 = G__9006;
count__7720_8990 = G__9007;
i__7721_8991 = G__9008;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.datalist.apply(null,a__6533__auto__);
};
var datalist = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return datalist__delegate.call(this,args__6532__auto__);};
datalist.cljs$lang$maxFixedArity = 0;
datalist.cljs$lang$applyTo = (function (arglist__9009){
var args__6532__auto__ = cljs.core.seq(arglist__9009);
return datalist__delegate(args__6532__auto__);
});
datalist.cljs$core$IFn$_invoke$arity$variadic = datalist__delegate;
return datalist;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.dd = (function() { 
var dd__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__7726_9010 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__7727_9011 = null;var count__7728_9012 = 0;var i__7729_9013 = 0;while(true){
if((i__7729_9013 < count__7728_9012))
{var arg__6534__auto___9014 = cljs.core._nth.call(null,chunk__7727_9011,i__7729_9013);a__6533__auto__.push(arg__6534__auto___9014);
{
var G__9015 = seq__7726_9010;
var G__9016 = chunk__7727_9011;
var G__9017 = count__7728_9012;
var G__9018 = (i__7729_9013 + 1);
seq__7726_9010 = G__9015;
chunk__7727_9011 = G__9016;
count__7728_9012 = G__9017;
i__7729_9013 = G__9018;
continue;
}
} else
{var temp__4092__auto___9019 = cljs.core.seq.call(null,seq__7726_9010);if(temp__4092__auto___9019)
{var seq__7726_9020__$1 = temp__4092__auto___9019;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7726_9020__$1))
{var c__5632__auto___9021 = cljs.core.chunk_first.call(null,seq__7726_9020__$1);{
var G__9022 = cljs.core.chunk_rest.call(null,seq__7726_9020__$1);
var G__9023 = c__5632__auto___9021;
var G__9024 = cljs.core.count.call(null,c__5632__auto___9021);
var G__9025 = 0;
seq__7726_9010 = G__9022;
chunk__7727_9011 = G__9023;
count__7728_9012 = G__9024;
i__7729_9013 = G__9025;
continue;
}
} else
{var arg__6534__auto___9026 = cljs.core.first.call(null,seq__7726_9020__$1);a__6533__auto__.push(arg__6534__auto___9026);
{
var G__9027 = cljs.core.next.call(null,seq__7726_9020__$1);
var G__9028 = null;
var G__9029 = 0;
var G__9030 = 0;
seq__7726_9010 = G__9027;
chunk__7727_9011 = G__9028;
count__7728_9012 = G__9029;
i__7729_9013 = G__9030;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.dd.apply(null,a__6533__auto__);
};
var dd = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return dd__delegate.call(this,args__6532__auto__);};
dd.cljs$lang$maxFixedArity = 0;
dd.cljs$lang$applyTo = (function (arglist__9031){
var args__6532__auto__ = cljs.core.seq(arglist__9031);
return dd__delegate(args__6532__auto__);
});
dd.cljs$core$IFn$_invoke$arity$variadic = dd__delegate;
return dd;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.del = (function() { 
var del__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__7734_9032 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__7735_9033 = null;var count__7736_9034 = 0;var i__7737_9035 = 0;while(true){
if((i__7737_9035 < count__7736_9034))
{var arg__6534__auto___9036 = cljs.core._nth.call(null,chunk__7735_9033,i__7737_9035);a__6533__auto__.push(arg__6534__auto___9036);
{
var G__9037 = seq__7734_9032;
var G__9038 = chunk__7735_9033;
var G__9039 = count__7736_9034;
var G__9040 = (i__7737_9035 + 1);
seq__7734_9032 = G__9037;
chunk__7735_9033 = G__9038;
count__7736_9034 = G__9039;
i__7737_9035 = G__9040;
continue;
}
} else
{var temp__4092__auto___9041 = cljs.core.seq.call(null,seq__7734_9032);if(temp__4092__auto___9041)
{var seq__7734_9042__$1 = temp__4092__auto___9041;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7734_9042__$1))
{var c__5632__auto___9043 = cljs.core.chunk_first.call(null,seq__7734_9042__$1);{
var G__9044 = cljs.core.chunk_rest.call(null,seq__7734_9042__$1);
var G__9045 = c__5632__auto___9043;
var G__9046 = cljs.core.count.call(null,c__5632__auto___9043);
var G__9047 = 0;
seq__7734_9032 = G__9044;
chunk__7735_9033 = G__9045;
count__7736_9034 = G__9046;
i__7737_9035 = G__9047;
continue;
}
} else
{var arg__6534__auto___9048 = cljs.core.first.call(null,seq__7734_9042__$1);a__6533__auto__.push(arg__6534__auto___9048);
{
var G__9049 = cljs.core.next.call(null,seq__7734_9042__$1);
var G__9050 = null;
var G__9051 = 0;
var G__9052 = 0;
seq__7734_9032 = G__9049;
chunk__7735_9033 = G__9050;
count__7736_9034 = G__9051;
i__7737_9035 = G__9052;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.del.apply(null,a__6533__auto__);
};
var del = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return del__delegate.call(this,args__6532__auto__);};
del.cljs$lang$maxFixedArity = 0;
del.cljs$lang$applyTo = (function (arglist__9053){
var args__6532__auto__ = cljs.core.seq(arglist__9053);
return del__delegate(args__6532__auto__);
});
del.cljs$core$IFn$_invoke$arity$variadic = del__delegate;
return del;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.details = (function() { 
var details__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__7742_9054 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__7743_9055 = null;var count__7744_9056 = 0;var i__7745_9057 = 0;while(true){
if((i__7745_9057 < count__7744_9056))
{var arg__6534__auto___9058 = cljs.core._nth.call(null,chunk__7743_9055,i__7745_9057);a__6533__auto__.push(arg__6534__auto___9058);
{
var G__9059 = seq__7742_9054;
var G__9060 = chunk__7743_9055;
var G__9061 = count__7744_9056;
var G__9062 = (i__7745_9057 + 1);
seq__7742_9054 = G__9059;
chunk__7743_9055 = G__9060;
count__7744_9056 = G__9061;
i__7745_9057 = G__9062;
continue;
}
} else
{var temp__4092__auto___9063 = cljs.core.seq.call(null,seq__7742_9054);if(temp__4092__auto___9063)
{var seq__7742_9064__$1 = temp__4092__auto___9063;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7742_9064__$1))
{var c__5632__auto___9065 = cljs.core.chunk_first.call(null,seq__7742_9064__$1);{
var G__9066 = cljs.core.chunk_rest.call(null,seq__7742_9064__$1);
var G__9067 = c__5632__auto___9065;
var G__9068 = cljs.core.count.call(null,c__5632__auto___9065);
var G__9069 = 0;
seq__7742_9054 = G__9066;
chunk__7743_9055 = G__9067;
count__7744_9056 = G__9068;
i__7745_9057 = G__9069;
continue;
}
} else
{var arg__6534__auto___9070 = cljs.core.first.call(null,seq__7742_9064__$1);a__6533__auto__.push(arg__6534__auto___9070);
{
var G__9071 = cljs.core.next.call(null,seq__7742_9064__$1);
var G__9072 = null;
var G__9073 = 0;
var G__9074 = 0;
seq__7742_9054 = G__9071;
chunk__7743_9055 = G__9072;
count__7744_9056 = G__9073;
i__7745_9057 = G__9074;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.details.apply(null,a__6533__auto__);
};
var details = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return details__delegate.call(this,args__6532__auto__);};
details.cljs$lang$maxFixedArity = 0;
details.cljs$lang$applyTo = (function (arglist__9075){
var args__6532__auto__ = cljs.core.seq(arglist__9075);
return details__delegate(args__6532__auto__);
});
details.cljs$core$IFn$_invoke$arity$variadic = details__delegate;
return details;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.dfn = (function() { 
var dfn__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__7750_9076 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__7751_9077 = null;var count__7752_9078 = 0;var i__7753_9079 = 0;while(true){
if((i__7753_9079 < count__7752_9078))
{var arg__6534__auto___9080 = cljs.core._nth.call(null,chunk__7751_9077,i__7753_9079);a__6533__auto__.push(arg__6534__auto___9080);
{
var G__9081 = seq__7750_9076;
var G__9082 = chunk__7751_9077;
var G__9083 = count__7752_9078;
var G__9084 = (i__7753_9079 + 1);
seq__7750_9076 = G__9081;
chunk__7751_9077 = G__9082;
count__7752_9078 = G__9083;
i__7753_9079 = G__9084;
continue;
}
} else
{var temp__4092__auto___9085 = cljs.core.seq.call(null,seq__7750_9076);if(temp__4092__auto___9085)
{var seq__7750_9086__$1 = temp__4092__auto___9085;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7750_9086__$1))
{var c__5632__auto___9087 = cljs.core.chunk_first.call(null,seq__7750_9086__$1);{
var G__9088 = cljs.core.chunk_rest.call(null,seq__7750_9086__$1);
var G__9089 = c__5632__auto___9087;
var G__9090 = cljs.core.count.call(null,c__5632__auto___9087);
var G__9091 = 0;
seq__7750_9076 = G__9088;
chunk__7751_9077 = G__9089;
count__7752_9078 = G__9090;
i__7753_9079 = G__9091;
continue;
}
} else
{var arg__6534__auto___9092 = cljs.core.first.call(null,seq__7750_9086__$1);a__6533__auto__.push(arg__6534__auto___9092);
{
var G__9093 = cljs.core.next.call(null,seq__7750_9086__$1);
var G__9094 = null;
var G__9095 = 0;
var G__9096 = 0;
seq__7750_9076 = G__9093;
chunk__7751_9077 = G__9094;
count__7752_9078 = G__9095;
i__7753_9079 = G__9096;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.dfn.apply(null,a__6533__auto__);
};
var dfn = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return dfn__delegate.call(this,args__6532__auto__);};
dfn.cljs$lang$maxFixedArity = 0;
dfn.cljs$lang$applyTo = (function (arglist__9097){
var args__6532__auto__ = cljs.core.seq(arglist__9097);
return dfn__delegate(args__6532__auto__);
});
dfn.cljs$core$IFn$_invoke$arity$variadic = dfn__delegate;
return dfn;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.div = (function() { 
var div__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__7758_9098 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__7759_9099 = null;var count__7760_9100 = 0;var i__7761_9101 = 0;while(true){
if((i__7761_9101 < count__7760_9100))
{var arg__6534__auto___9102 = cljs.core._nth.call(null,chunk__7759_9099,i__7761_9101);a__6533__auto__.push(arg__6534__auto___9102);
{
var G__9103 = seq__7758_9098;
var G__9104 = chunk__7759_9099;
var G__9105 = count__7760_9100;
var G__9106 = (i__7761_9101 + 1);
seq__7758_9098 = G__9103;
chunk__7759_9099 = G__9104;
count__7760_9100 = G__9105;
i__7761_9101 = G__9106;
continue;
}
} else
{var temp__4092__auto___9107 = cljs.core.seq.call(null,seq__7758_9098);if(temp__4092__auto___9107)
{var seq__7758_9108__$1 = temp__4092__auto___9107;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7758_9108__$1))
{var c__5632__auto___9109 = cljs.core.chunk_first.call(null,seq__7758_9108__$1);{
var G__9110 = cljs.core.chunk_rest.call(null,seq__7758_9108__$1);
var G__9111 = c__5632__auto___9109;
var G__9112 = cljs.core.count.call(null,c__5632__auto___9109);
var G__9113 = 0;
seq__7758_9098 = G__9110;
chunk__7759_9099 = G__9111;
count__7760_9100 = G__9112;
i__7761_9101 = G__9113;
continue;
}
} else
{var arg__6534__auto___9114 = cljs.core.first.call(null,seq__7758_9108__$1);a__6533__auto__.push(arg__6534__auto___9114);
{
var G__9115 = cljs.core.next.call(null,seq__7758_9108__$1);
var G__9116 = null;
var G__9117 = 0;
var G__9118 = 0;
seq__7758_9098 = G__9115;
chunk__7759_9099 = G__9116;
count__7760_9100 = G__9117;
i__7761_9101 = G__9118;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.div.apply(null,a__6533__auto__);
};
var div = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return div__delegate.call(this,args__6532__auto__);};
div.cljs$lang$maxFixedArity = 0;
div.cljs$lang$applyTo = (function (arglist__9119){
var args__6532__auto__ = cljs.core.seq(arglist__9119);
return div__delegate(args__6532__auto__);
});
div.cljs$core$IFn$_invoke$arity$variadic = div__delegate;
return div;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.dl = (function() { 
var dl__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__7766_9120 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__7767_9121 = null;var count__7768_9122 = 0;var i__7769_9123 = 0;while(true){
if((i__7769_9123 < count__7768_9122))
{var arg__6534__auto___9124 = cljs.core._nth.call(null,chunk__7767_9121,i__7769_9123);a__6533__auto__.push(arg__6534__auto___9124);
{
var G__9125 = seq__7766_9120;
var G__9126 = chunk__7767_9121;
var G__9127 = count__7768_9122;
var G__9128 = (i__7769_9123 + 1);
seq__7766_9120 = G__9125;
chunk__7767_9121 = G__9126;
count__7768_9122 = G__9127;
i__7769_9123 = G__9128;
continue;
}
} else
{var temp__4092__auto___9129 = cljs.core.seq.call(null,seq__7766_9120);if(temp__4092__auto___9129)
{var seq__7766_9130__$1 = temp__4092__auto___9129;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7766_9130__$1))
{var c__5632__auto___9131 = cljs.core.chunk_first.call(null,seq__7766_9130__$1);{
var G__9132 = cljs.core.chunk_rest.call(null,seq__7766_9130__$1);
var G__9133 = c__5632__auto___9131;
var G__9134 = cljs.core.count.call(null,c__5632__auto___9131);
var G__9135 = 0;
seq__7766_9120 = G__9132;
chunk__7767_9121 = G__9133;
count__7768_9122 = G__9134;
i__7769_9123 = G__9135;
continue;
}
} else
{var arg__6534__auto___9136 = cljs.core.first.call(null,seq__7766_9130__$1);a__6533__auto__.push(arg__6534__auto___9136);
{
var G__9137 = cljs.core.next.call(null,seq__7766_9130__$1);
var G__9138 = null;
var G__9139 = 0;
var G__9140 = 0;
seq__7766_9120 = G__9137;
chunk__7767_9121 = G__9138;
count__7768_9122 = G__9139;
i__7769_9123 = G__9140;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.dl.apply(null,a__6533__auto__);
};
var dl = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return dl__delegate.call(this,args__6532__auto__);};
dl.cljs$lang$maxFixedArity = 0;
dl.cljs$lang$applyTo = (function (arglist__9141){
var args__6532__auto__ = cljs.core.seq(arglist__9141);
return dl__delegate(args__6532__auto__);
});
dl.cljs$core$IFn$_invoke$arity$variadic = dl__delegate;
return dl;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.dt = (function() { 
var dt__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__7774_9142 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__7775_9143 = null;var count__7776_9144 = 0;var i__7777_9145 = 0;while(true){
if((i__7777_9145 < count__7776_9144))
{var arg__6534__auto___9146 = cljs.core._nth.call(null,chunk__7775_9143,i__7777_9145);a__6533__auto__.push(arg__6534__auto___9146);
{
var G__9147 = seq__7774_9142;
var G__9148 = chunk__7775_9143;
var G__9149 = count__7776_9144;
var G__9150 = (i__7777_9145 + 1);
seq__7774_9142 = G__9147;
chunk__7775_9143 = G__9148;
count__7776_9144 = G__9149;
i__7777_9145 = G__9150;
continue;
}
} else
{var temp__4092__auto___9151 = cljs.core.seq.call(null,seq__7774_9142);if(temp__4092__auto___9151)
{var seq__7774_9152__$1 = temp__4092__auto___9151;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7774_9152__$1))
{var c__5632__auto___9153 = cljs.core.chunk_first.call(null,seq__7774_9152__$1);{
var G__9154 = cljs.core.chunk_rest.call(null,seq__7774_9152__$1);
var G__9155 = c__5632__auto___9153;
var G__9156 = cljs.core.count.call(null,c__5632__auto___9153);
var G__9157 = 0;
seq__7774_9142 = G__9154;
chunk__7775_9143 = G__9155;
count__7776_9144 = G__9156;
i__7777_9145 = G__9157;
continue;
}
} else
{var arg__6534__auto___9158 = cljs.core.first.call(null,seq__7774_9152__$1);a__6533__auto__.push(arg__6534__auto___9158);
{
var G__9159 = cljs.core.next.call(null,seq__7774_9152__$1);
var G__9160 = null;
var G__9161 = 0;
var G__9162 = 0;
seq__7774_9142 = G__9159;
chunk__7775_9143 = G__9160;
count__7776_9144 = G__9161;
i__7777_9145 = G__9162;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.dt.apply(null,a__6533__auto__);
};
var dt = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return dt__delegate.call(this,args__6532__auto__);};
dt.cljs$lang$maxFixedArity = 0;
dt.cljs$lang$applyTo = (function (arglist__9163){
var args__6532__auto__ = cljs.core.seq(arglist__9163);
return dt__delegate(args__6532__auto__);
});
dt.cljs$core$IFn$_invoke$arity$variadic = dt__delegate;
return dt;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.em = (function() { 
var em__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__7782_9164 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__7783_9165 = null;var count__7784_9166 = 0;var i__7785_9167 = 0;while(true){
if((i__7785_9167 < count__7784_9166))
{var arg__6534__auto___9168 = cljs.core._nth.call(null,chunk__7783_9165,i__7785_9167);a__6533__auto__.push(arg__6534__auto___9168);
{
var G__9169 = seq__7782_9164;
var G__9170 = chunk__7783_9165;
var G__9171 = count__7784_9166;
var G__9172 = (i__7785_9167 + 1);
seq__7782_9164 = G__9169;
chunk__7783_9165 = G__9170;
count__7784_9166 = G__9171;
i__7785_9167 = G__9172;
continue;
}
} else
{var temp__4092__auto___9173 = cljs.core.seq.call(null,seq__7782_9164);if(temp__4092__auto___9173)
{var seq__7782_9174__$1 = temp__4092__auto___9173;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7782_9174__$1))
{var c__5632__auto___9175 = cljs.core.chunk_first.call(null,seq__7782_9174__$1);{
var G__9176 = cljs.core.chunk_rest.call(null,seq__7782_9174__$1);
var G__9177 = c__5632__auto___9175;
var G__9178 = cljs.core.count.call(null,c__5632__auto___9175);
var G__9179 = 0;
seq__7782_9164 = G__9176;
chunk__7783_9165 = G__9177;
count__7784_9166 = G__9178;
i__7785_9167 = G__9179;
continue;
}
} else
{var arg__6534__auto___9180 = cljs.core.first.call(null,seq__7782_9174__$1);a__6533__auto__.push(arg__6534__auto___9180);
{
var G__9181 = cljs.core.next.call(null,seq__7782_9174__$1);
var G__9182 = null;
var G__9183 = 0;
var G__9184 = 0;
seq__7782_9164 = G__9181;
chunk__7783_9165 = G__9182;
count__7784_9166 = G__9183;
i__7785_9167 = G__9184;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.em.apply(null,a__6533__auto__);
};
var em = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return em__delegate.call(this,args__6532__auto__);};
em.cljs$lang$maxFixedArity = 0;
em.cljs$lang$applyTo = (function (arglist__9185){
var args__6532__auto__ = cljs.core.seq(arglist__9185);
return em__delegate(args__6532__auto__);
});
em.cljs$core$IFn$_invoke$arity$variadic = em__delegate;
return em;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.embed = (function() { 
var embed__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__7798_9186 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__7799_9187 = null;var count__7800_9188 = 0;var i__7801_9189 = 0;while(true){
if((i__7801_9189 < count__7800_9188))
{var arg__6534__auto___9190 = cljs.core._nth.call(null,chunk__7799_9187,i__7801_9189);a__6533__auto__.push(arg__6534__auto___9190);
{
var G__9191 = seq__7798_9186;
var G__9192 = chunk__7799_9187;
var G__9193 = count__7800_9188;
var G__9194 = (i__7801_9189 + 1);
seq__7798_9186 = G__9191;
chunk__7799_9187 = G__9192;
count__7800_9188 = G__9193;
i__7801_9189 = G__9194;
continue;
}
} else
{var temp__4092__auto___9195 = cljs.core.seq.call(null,seq__7798_9186);if(temp__4092__auto___9195)
{var seq__7798_9196__$1 = temp__4092__auto___9195;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7798_9196__$1))
{var c__5632__auto___9197 = cljs.core.chunk_first.call(null,seq__7798_9196__$1);{
var G__9198 = cljs.core.chunk_rest.call(null,seq__7798_9196__$1);
var G__9199 = c__5632__auto___9197;
var G__9200 = cljs.core.count.call(null,c__5632__auto___9197);
var G__9201 = 0;
seq__7798_9186 = G__9198;
chunk__7799_9187 = G__9199;
count__7800_9188 = G__9200;
i__7801_9189 = G__9201;
continue;
}
} else
{var arg__6534__auto___9202 = cljs.core.first.call(null,seq__7798_9196__$1);a__6533__auto__.push(arg__6534__auto___9202);
{
var G__9203 = cljs.core.next.call(null,seq__7798_9196__$1);
var G__9204 = null;
var G__9205 = 0;
var G__9206 = 0;
seq__7798_9186 = G__9203;
chunk__7799_9187 = G__9204;
count__7800_9188 = G__9205;
i__7801_9189 = G__9206;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.embed.apply(null,a__6533__auto__);
};
var embed = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return embed__delegate.call(this,args__6532__auto__);};
embed.cljs$lang$maxFixedArity = 0;
embed.cljs$lang$applyTo = (function (arglist__9207){
var args__6532__auto__ = cljs.core.seq(arglist__9207);
return embed__delegate(args__6532__auto__);
});
embed.cljs$core$IFn$_invoke$arity$variadic = embed__delegate;
return embed;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.fieldset = (function() { 
var fieldset__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__7806_9208 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__7807_9209 = null;var count__7808_9210 = 0;var i__7809_9211 = 0;while(true){
if((i__7809_9211 < count__7808_9210))
{var arg__6534__auto___9212 = cljs.core._nth.call(null,chunk__7807_9209,i__7809_9211);a__6533__auto__.push(arg__6534__auto___9212);
{
var G__9213 = seq__7806_9208;
var G__9214 = chunk__7807_9209;
var G__9215 = count__7808_9210;
var G__9216 = (i__7809_9211 + 1);
seq__7806_9208 = G__9213;
chunk__7807_9209 = G__9214;
count__7808_9210 = G__9215;
i__7809_9211 = G__9216;
continue;
}
} else
{var temp__4092__auto___9217 = cljs.core.seq.call(null,seq__7806_9208);if(temp__4092__auto___9217)
{var seq__7806_9218__$1 = temp__4092__auto___9217;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7806_9218__$1))
{var c__5632__auto___9219 = cljs.core.chunk_first.call(null,seq__7806_9218__$1);{
var G__9220 = cljs.core.chunk_rest.call(null,seq__7806_9218__$1);
var G__9221 = c__5632__auto___9219;
var G__9222 = cljs.core.count.call(null,c__5632__auto___9219);
var G__9223 = 0;
seq__7806_9208 = G__9220;
chunk__7807_9209 = G__9221;
count__7808_9210 = G__9222;
i__7809_9211 = G__9223;
continue;
}
} else
{var arg__6534__auto___9224 = cljs.core.first.call(null,seq__7806_9218__$1);a__6533__auto__.push(arg__6534__auto___9224);
{
var G__9225 = cljs.core.next.call(null,seq__7806_9218__$1);
var G__9226 = null;
var G__9227 = 0;
var G__9228 = 0;
seq__7806_9208 = G__9225;
chunk__7807_9209 = G__9226;
count__7808_9210 = G__9227;
i__7809_9211 = G__9228;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.fieldset.apply(null,a__6533__auto__);
};
var fieldset = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return fieldset__delegate.call(this,args__6532__auto__);};
fieldset.cljs$lang$maxFixedArity = 0;
fieldset.cljs$lang$applyTo = (function (arglist__9229){
var args__6532__auto__ = cljs.core.seq(arglist__9229);
return fieldset__delegate(args__6532__auto__);
});
fieldset.cljs$core$IFn$_invoke$arity$variadic = fieldset__delegate;
return fieldset;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.figcaption = (function() { 
var figcaption__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__7814_9230 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__7815_9231 = null;var count__7816_9232 = 0;var i__7817_9233 = 0;while(true){
if((i__7817_9233 < count__7816_9232))
{var arg__6534__auto___9234 = cljs.core._nth.call(null,chunk__7815_9231,i__7817_9233);a__6533__auto__.push(arg__6534__auto___9234);
{
var G__9235 = seq__7814_9230;
var G__9236 = chunk__7815_9231;
var G__9237 = count__7816_9232;
var G__9238 = (i__7817_9233 + 1);
seq__7814_9230 = G__9235;
chunk__7815_9231 = G__9236;
count__7816_9232 = G__9237;
i__7817_9233 = G__9238;
continue;
}
} else
{var temp__4092__auto___9239 = cljs.core.seq.call(null,seq__7814_9230);if(temp__4092__auto___9239)
{var seq__7814_9240__$1 = temp__4092__auto___9239;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7814_9240__$1))
{var c__5632__auto___9241 = cljs.core.chunk_first.call(null,seq__7814_9240__$1);{
var G__9242 = cljs.core.chunk_rest.call(null,seq__7814_9240__$1);
var G__9243 = c__5632__auto___9241;
var G__9244 = cljs.core.count.call(null,c__5632__auto___9241);
var G__9245 = 0;
seq__7814_9230 = G__9242;
chunk__7815_9231 = G__9243;
count__7816_9232 = G__9244;
i__7817_9233 = G__9245;
continue;
}
} else
{var arg__6534__auto___9246 = cljs.core.first.call(null,seq__7814_9240__$1);a__6533__auto__.push(arg__6534__auto___9246);
{
var G__9247 = cljs.core.next.call(null,seq__7814_9240__$1);
var G__9248 = null;
var G__9249 = 0;
var G__9250 = 0;
seq__7814_9230 = G__9247;
chunk__7815_9231 = G__9248;
count__7816_9232 = G__9249;
i__7817_9233 = G__9250;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.figcaption.apply(null,a__6533__auto__);
};
var figcaption = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return figcaption__delegate.call(this,args__6532__auto__);};
figcaption.cljs$lang$maxFixedArity = 0;
figcaption.cljs$lang$applyTo = (function (arglist__9251){
var args__6532__auto__ = cljs.core.seq(arglist__9251);
return figcaption__delegate(args__6532__auto__);
});
figcaption.cljs$core$IFn$_invoke$arity$variadic = figcaption__delegate;
return figcaption;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.figure = (function() { 
var figure__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__7822_9252 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__7823_9253 = null;var count__7824_9254 = 0;var i__7825_9255 = 0;while(true){
if((i__7825_9255 < count__7824_9254))
{var arg__6534__auto___9256 = cljs.core._nth.call(null,chunk__7823_9253,i__7825_9255);a__6533__auto__.push(arg__6534__auto___9256);
{
var G__9257 = seq__7822_9252;
var G__9258 = chunk__7823_9253;
var G__9259 = count__7824_9254;
var G__9260 = (i__7825_9255 + 1);
seq__7822_9252 = G__9257;
chunk__7823_9253 = G__9258;
count__7824_9254 = G__9259;
i__7825_9255 = G__9260;
continue;
}
} else
{var temp__4092__auto___9261 = cljs.core.seq.call(null,seq__7822_9252);if(temp__4092__auto___9261)
{var seq__7822_9262__$1 = temp__4092__auto___9261;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7822_9262__$1))
{var c__5632__auto___9263 = cljs.core.chunk_first.call(null,seq__7822_9262__$1);{
var G__9264 = cljs.core.chunk_rest.call(null,seq__7822_9262__$1);
var G__9265 = c__5632__auto___9263;
var G__9266 = cljs.core.count.call(null,c__5632__auto___9263);
var G__9267 = 0;
seq__7822_9252 = G__9264;
chunk__7823_9253 = G__9265;
count__7824_9254 = G__9266;
i__7825_9255 = G__9267;
continue;
}
} else
{var arg__6534__auto___9268 = cljs.core.first.call(null,seq__7822_9262__$1);a__6533__auto__.push(arg__6534__auto___9268);
{
var G__9269 = cljs.core.next.call(null,seq__7822_9262__$1);
var G__9270 = null;
var G__9271 = 0;
var G__9272 = 0;
seq__7822_9252 = G__9269;
chunk__7823_9253 = G__9270;
count__7824_9254 = G__9271;
i__7825_9255 = G__9272;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.figure.apply(null,a__6533__auto__);
};
var figure = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return figure__delegate.call(this,args__6532__auto__);};
figure.cljs$lang$maxFixedArity = 0;
figure.cljs$lang$applyTo = (function (arglist__9273){
var args__6532__auto__ = cljs.core.seq(arglist__9273);
return figure__delegate(args__6532__auto__);
});
figure.cljs$core$IFn$_invoke$arity$variadic = figure__delegate;
return figure;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.footer = (function() { 
var footer__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__7830_9274 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__7831_9275 = null;var count__7832_9276 = 0;var i__7833_9277 = 0;while(true){
if((i__7833_9277 < count__7832_9276))
{var arg__6534__auto___9278 = cljs.core._nth.call(null,chunk__7831_9275,i__7833_9277);a__6533__auto__.push(arg__6534__auto___9278);
{
var G__9279 = seq__7830_9274;
var G__9280 = chunk__7831_9275;
var G__9281 = count__7832_9276;
var G__9282 = (i__7833_9277 + 1);
seq__7830_9274 = G__9279;
chunk__7831_9275 = G__9280;
count__7832_9276 = G__9281;
i__7833_9277 = G__9282;
continue;
}
} else
{var temp__4092__auto___9283 = cljs.core.seq.call(null,seq__7830_9274);if(temp__4092__auto___9283)
{var seq__7830_9284__$1 = temp__4092__auto___9283;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7830_9284__$1))
{var c__5632__auto___9285 = cljs.core.chunk_first.call(null,seq__7830_9284__$1);{
var G__9286 = cljs.core.chunk_rest.call(null,seq__7830_9284__$1);
var G__9287 = c__5632__auto___9285;
var G__9288 = cljs.core.count.call(null,c__5632__auto___9285);
var G__9289 = 0;
seq__7830_9274 = G__9286;
chunk__7831_9275 = G__9287;
count__7832_9276 = G__9288;
i__7833_9277 = G__9289;
continue;
}
} else
{var arg__6534__auto___9290 = cljs.core.first.call(null,seq__7830_9284__$1);a__6533__auto__.push(arg__6534__auto___9290);
{
var G__9291 = cljs.core.next.call(null,seq__7830_9284__$1);
var G__9292 = null;
var G__9293 = 0;
var G__9294 = 0;
seq__7830_9274 = G__9291;
chunk__7831_9275 = G__9292;
count__7832_9276 = G__9293;
i__7833_9277 = G__9294;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.footer.apply(null,a__6533__auto__);
};
var footer = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return footer__delegate.call(this,args__6532__auto__);};
footer.cljs$lang$maxFixedArity = 0;
footer.cljs$lang$applyTo = (function (arglist__9295){
var args__6532__auto__ = cljs.core.seq(arglist__9295);
return footer__delegate(args__6532__auto__);
});
footer.cljs$core$IFn$_invoke$arity$variadic = footer__delegate;
return footer;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.form = (function() { 
var form__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__7838_9296 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__7839_9297 = null;var count__7840_9298 = 0;var i__7841_9299 = 0;while(true){
if((i__7841_9299 < count__7840_9298))
{var arg__6534__auto___9300 = cljs.core._nth.call(null,chunk__7839_9297,i__7841_9299);a__6533__auto__.push(arg__6534__auto___9300);
{
var G__9301 = seq__7838_9296;
var G__9302 = chunk__7839_9297;
var G__9303 = count__7840_9298;
var G__9304 = (i__7841_9299 + 1);
seq__7838_9296 = G__9301;
chunk__7839_9297 = G__9302;
count__7840_9298 = G__9303;
i__7841_9299 = G__9304;
continue;
}
} else
{var temp__4092__auto___9305 = cljs.core.seq.call(null,seq__7838_9296);if(temp__4092__auto___9305)
{var seq__7838_9306__$1 = temp__4092__auto___9305;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7838_9306__$1))
{var c__5632__auto___9307 = cljs.core.chunk_first.call(null,seq__7838_9306__$1);{
var G__9308 = cljs.core.chunk_rest.call(null,seq__7838_9306__$1);
var G__9309 = c__5632__auto___9307;
var G__9310 = cljs.core.count.call(null,c__5632__auto___9307);
var G__9311 = 0;
seq__7838_9296 = G__9308;
chunk__7839_9297 = G__9309;
count__7840_9298 = G__9310;
i__7841_9299 = G__9311;
continue;
}
} else
{var arg__6534__auto___9312 = cljs.core.first.call(null,seq__7838_9306__$1);a__6533__auto__.push(arg__6534__auto___9312);
{
var G__9313 = cljs.core.next.call(null,seq__7838_9306__$1);
var G__9314 = null;
var G__9315 = 0;
var G__9316 = 0;
seq__7838_9296 = G__9313;
chunk__7839_9297 = G__9314;
count__7840_9298 = G__9315;
i__7841_9299 = G__9316;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.form.apply(null,a__6533__auto__);
};
var form = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return form__delegate.call(this,args__6532__auto__);};
form.cljs$lang$maxFixedArity = 0;
form.cljs$lang$applyTo = (function (arglist__9317){
var args__6532__auto__ = cljs.core.seq(arglist__9317);
return form__delegate(args__6532__auto__);
});
form.cljs$core$IFn$_invoke$arity$variadic = form__delegate;
return form;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h1 = (function() { 
var h1__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__7846_9318 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__7847_9319 = null;var count__7848_9320 = 0;var i__7849_9321 = 0;while(true){
if((i__7849_9321 < count__7848_9320))
{var arg__6534__auto___9322 = cljs.core._nth.call(null,chunk__7847_9319,i__7849_9321);a__6533__auto__.push(arg__6534__auto___9322);
{
var G__9323 = seq__7846_9318;
var G__9324 = chunk__7847_9319;
var G__9325 = count__7848_9320;
var G__9326 = (i__7849_9321 + 1);
seq__7846_9318 = G__9323;
chunk__7847_9319 = G__9324;
count__7848_9320 = G__9325;
i__7849_9321 = G__9326;
continue;
}
} else
{var temp__4092__auto___9327 = cljs.core.seq.call(null,seq__7846_9318);if(temp__4092__auto___9327)
{var seq__7846_9328__$1 = temp__4092__auto___9327;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7846_9328__$1))
{var c__5632__auto___9329 = cljs.core.chunk_first.call(null,seq__7846_9328__$1);{
var G__9330 = cljs.core.chunk_rest.call(null,seq__7846_9328__$1);
var G__9331 = c__5632__auto___9329;
var G__9332 = cljs.core.count.call(null,c__5632__auto___9329);
var G__9333 = 0;
seq__7846_9318 = G__9330;
chunk__7847_9319 = G__9331;
count__7848_9320 = G__9332;
i__7849_9321 = G__9333;
continue;
}
} else
{var arg__6534__auto___9334 = cljs.core.first.call(null,seq__7846_9328__$1);a__6533__auto__.push(arg__6534__auto___9334);
{
var G__9335 = cljs.core.next.call(null,seq__7846_9328__$1);
var G__9336 = null;
var G__9337 = 0;
var G__9338 = 0;
seq__7846_9318 = G__9335;
chunk__7847_9319 = G__9336;
count__7848_9320 = G__9337;
i__7849_9321 = G__9338;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h1.apply(null,a__6533__auto__);
};
var h1 = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h1__delegate.call(this,args__6532__auto__);};
h1.cljs$lang$maxFixedArity = 0;
h1.cljs$lang$applyTo = (function (arglist__9339){
var args__6532__auto__ = cljs.core.seq(arglist__9339);
return h1__delegate(args__6532__auto__);
});
h1.cljs$core$IFn$_invoke$arity$variadic = h1__delegate;
return h1;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h2 = (function() { 
var h2__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__7854_9340 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__7855_9341 = null;var count__7856_9342 = 0;var i__7857_9343 = 0;while(true){
if((i__7857_9343 < count__7856_9342))
{var arg__6534__auto___9344 = cljs.core._nth.call(null,chunk__7855_9341,i__7857_9343);a__6533__auto__.push(arg__6534__auto___9344);
{
var G__9345 = seq__7854_9340;
var G__9346 = chunk__7855_9341;
var G__9347 = count__7856_9342;
var G__9348 = (i__7857_9343 + 1);
seq__7854_9340 = G__9345;
chunk__7855_9341 = G__9346;
count__7856_9342 = G__9347;
i__7857_9343 = G__9348;
continue;
}
} else
{var temp__4092__auto___9349 = cljs.core.seq.call(null,seq__7854_9340);if(temp__4092__auto___9349)
{var seq__7854_9350__$1 = temp__4092__auto___9349;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7854_9350__$1))
{var c__5632__auto___9351 = cljs.core.chunk_first.call(null,seq__7854_9350__$1);{
var G__9352 = cljs.core.chunk_rest.call(null,seq__7854_9350__$1);
var G__9353 = c__5632__auto___9351;
var G__9354 = cljs.core.count.call(null,c__5632__auto___9351);
var G__9355 = 0;
seq__7854_9340 = G__9352;
chunk__7855_9341 = G__9353;
count__7856_9342 = G__9354;
i__7857_9343 = G__9355;
continue;
}
} else
{var arg__6534__auto___9356 = cljs.core.first.call(null,seq__7854_9350__$1);a__6533__auto__.push(arg__6534__auto___9356);
{
var G__9357 = cljs.core.next.call(null,seq__7854_9350__$1);
var G__9358 = null;
var G__9359 = 0;
var G__9360 = 0;
seq__7854_9340 = G__9357;
chunk__7855_9341 = G__9358;
count__7856_9342 = G__9359;
i__7857_9343 = G__9360;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h2.apply(null,a__6533__auto__);
};
var h2 = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h2__delegate.call(this,args__6532__auto__);};
h2.cljs$lang$maxFixedArity = 0;
h2.cljs$lang$applyTo = (function (arglist__9361){
var args__6532__auto__ = cljs.core.seq(arglist__9361);
return h2__delegate(args__6532__auto__);
});
h2.cljs$core$IFn$_invoke$arity$variadic = h2__delegate;
return h2;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h3 = (function() { 
var h3__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__7862_9362 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__7863_9363 = null;var count__7864_9364 = 0;var i__7865_9365 = 0;while(true){
if((i__7865_9365 < count__7864_9364))
{var arg__6534__auto___9366 = cljs.core._nth.call(null,chunk__7863_9363,i__7865_9365);a__6533__auto__.push(arg__6534__auto___9366);
{
var G__9367 = seq__7862_9362;
var G__9368 = chunk__7863_9363;
var G__9369 = count__7864_9364;
var G__9370 = (i__7865_9365 + 1);
seq__7862_9362 = G__9367;
chunk__7863_9363 = G__9368;
count__7864_9364 = G__9369;
i__7865_9365 = G__9370;
continue;
}
} else
{var temp__4092__auto___9371 = cljs.core.seq.call(null,seq__7862_9362);if(temp__4092__auto___9371)
{var seq__7862_9372__$1 = temp__4092__auto___9371;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7862_9372__$1))
{var c__5632__auto___9373 = cljs.core.chunk_first.call(null,seq__7862_9372__$1);{
var G__9374 = cljs.core.chunk_rest.call(null,seq__7862_9372__$1);
var G__9375 = c__5632__auto___9373;
var G__9376 = cljs.core.count.call(null,c__5632__auto___9373);
var G__9377 = 0;
seq__7862_9362 = G__9374;
chunk__7863_9363 = G__9375;
count__7864_9364 = G__9376;
i__7865_9365 = G__9377;
continue;
}
} else
{var arg__6534__auto___9378 = cljs.core.first.call(null,seq__7862_9372__$1);a__6533__auto__.push(arg__6534__auto___9378);
{
var G__9379 = cljs.core.next.call(null,seq__7862_9372__$1);
var G__9380 = null;
var G__9381 = 0;
var G__9382 = 0;
seq__7862_9362 = G__9379;
chunk__7863_9363 = G__9380;
count__7864_9364 = G__9381;
i__7865_9365 = G__9382;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h3.apply(null,a__6533__auto__);
};
var h3 = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h3__delegate.call(this,args__6532__auto__);};
h3.cljs$lang$maxFixedArity = 0;
h3.cljs$lang$applyTo = (function (arglist__9383){
var args__6532__auto__ = cljs.core.seq(arglist__9383);
return h3__delegate(args__6532__auto__);
});
h3.cljs$core$IFn$_invoke$arity$variadic = h3__delegate;
return h3;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h4 = (function() { 
var h4__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__7870_9384 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__7871_9385 = null;var count__7872_9386 = 0;var i__7873_9387 = 0;while(true){
if((i__7873_9387 < count__7872_9386))
{var arg__6534__auto___9388 = cljs.core._nth.call(null,chunk__7871_9385,i__7873_9387);a__6533__auto__.push(arg__6534__auto___9388);
{
var G__9389 = seq__7870_9384;
var G__9390 = chunk__7871_9385;
var G__9391 = count__7872_9386;
var G__9392 = (i__7873_9387 + 1);
seq__7870_9384 = G__9389;
chunk__7871_9385 = G__9390;
count__7872_9386 = G__9391;
i__7873_9387 = G__9392;
continue;
}
} else
{var temp__4092__auto___9393 = cljs.core.seq.call(null,seq__7870_9384);if(temp__4092__auto___9393)
{var seq__7870_9394__$1 = temp__4092__auto___9393;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7870_9394__$1))
{var c__5632__auto___9395 = cljs.core.chunk_first.call(null,seq__7870_9394__$1);{
var G__9396 = cljs.core.chunk_rest.call(null,seq__7870_9394__$1);
var G__9397 = c__5632__auto___9395;
var G__9398 = cljs.core.count.call(null,c__5632__auto___9395);
var G__9399 = 0;
seq__7870_9384 = G__9396;
chunk__7871_9385 = G__9397;
count__7872_9386 = G__9398;
i__7873_9387 = G__9399;
continue;
}
} else
{var arg__6534__auto___9400 = cljs.core.first.call(null,seq__7870_9394__$1);a__6533__auto__.push(arg__6534__auto___9400);
{
var G__9401 = cljs.core.next.call(null,seq__7870_9394__$1);
var G__9402 = null;
var G__9403 = 0;
var G__9404 = 0;
seq__7870_9384 = G__9401;
chunk__7871_9385 = G__9402;
count__7872_9386 = G__9403;
i__7873_9387 = G__9404;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h4.apply(null,a__6533__auto__);
};
var h4 = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h4__delegate.call(this,args__6532__auto__);};
h4.cljs$lang$maxFixedArity = 0;
h4.cljs$lang$applyTo = (function (arglist__9405){
var args__6532__auto__ = cljs.core.seq(arglist__9405);
return h4__delegate(args__6532__auto__);
});
h4.cljs$core$IFn$_invoke$arity$variadic = h4__delegate;
return h4;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h5 = (function() { 
var h5__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__7878_9406 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__7879_9407 = null;var count__7880_9408 = 0;var i__7881_9409 = 0;while(true){
if((i__7881_9409 < count__7880_9408))
{var arg__6534__auto___9410 = cljs.core._nth.call(null,chunk__7879_9407,i__7881_9409);a__6533__auto__.push(arg__6534__auto___9410);
{
var G__9411 = seq__7878_9406;
var G__9412 = chunk__7879_9407;
var G__9413 = count__7880_9408;
var G__9414 = (i__7881_9409 + 1);
seq__7878_9406 = G__9411;
chunk__7879_9407 = G__9412;
count__7880_9408 = G__9413;
i__7881_9409 = G__9414;
continue;
}
} else
{var temp__4092__auto___9415 = cljs.core.seq.call(null,seq__7878_9406);if(temp__4092__auto___9415)
{var seq__7878_9416__$1 = temp__4092__auto___9415;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7878_9416__$1))
{var c__5632__auto___9417 = cljs.core.chunk_first.call(null,seq__7878_9416__$1);{
var G__9418 = cljs.core.chunk_rest.call(null,seq__7878_9416__$1);
var G__9419 = c__5632__auto___9417;
var G__9420 = cljs.core.count.call(null,c__5632__auto___9417);
var G__9421 = 0;
seq__7878_9406 = G__9418;
chunk__7879_9407 = G__9419;
count__7880_9408 = G__9420;
i__7881_9409 = G__9421;
continue;
}
} else
{var arg__6534__auto___9422 = cljs.core.first.call(null,seq__7878_9416__$1);a__6533__auto__.push(arg__6534__auto___9422);
{
var G__9423 = cljs.core.next.call(null,seq__7878_9416__$1);
var G__9424 = null;
var G__9425 = 0;
var G__9426 = 0;
seq__7878_9406 = G__9423;
chunk__7879_9407 = G__9424;
count__7880_9408 = G__9425;
i__7881_9409 = G__9426;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h5.apply(null,a__6533__auto__);
};
var h5 = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h5__delegate.call(this,args__6532__auto__);};
h5.cljs$lang$maxFixedArity = 0;
h5.cljs$lang$applyTo = (function (arglist__9427){
var args__6532__auto__ = cljs.core.seq(arglist__9427);
return h5__delegate(args__6532__auto__);
});
h5.cljs$core$IFn$_invoke$arity$variadic = h5__delegate;
return h5;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h6 = (function() { 
var h6__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__7886_9428 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__7887_9429 = null;var count__7888_9430 = 0;var i__7889_9431 = 0;while(true){
if((i__7889_9431 < count__7888_9430))
{var arg__6534__auto___9432 = cljs.core._nth.call(null,chunk__7887_9429,i__7889_9431);a__6533__auto__.push(arg__6534__auto___9432);
{
var G__9433 = seq__7886_9428;
var G__9434 = chunk__7887_9429;
var G__9435 = count__7888_9430;
var G__9436 = (i__7889_9431 + 1);
seq__7886_9428 = G__9433;
chunk__7887_9429 = G__9434;
count__7888_9430 = G__9435;
i__7889_9431 = G__9436;
continue;
}
} else
{var temp__4092__auto___9437 = cljs.core.seq.call(null,seq__7886_9428);if(temp__4092__auto___9437)
{var seq__7886_9438__$1 = temp__4092__auto___9437;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7886_9438__$1))
{var c__5632__auto___9439 = cljs.core.chunk_first.call(null,seq__7886_9438__$1);{
var G__9440 = cljs.core.chunk_rest.call(null,seq__7886_9438__$1);
var G__9441 = c__5632__auto___9439;
var G__9442 = cljs.core.count.call(null,c__5632__auto___9439);
var G__9443 = 0;
seq__7886_9428 = G__9440;
chunk__7887_9429 = G__9441;
count__7888_9430 = G__9442;
i__7889_9431 = G__9443;
continue;
}
} else
{var arg__6534__auto___9444 = cljs.core.first.call(null,seq__7886_9438__$1);a__6533__auto__.push(arg__6534__auto___9444);
{
var G__9445 = cljs.core.next.call(null,seq__7886_9438__$1);
var G__9446 = null;
var G__9447 = 0;
var G__9448 = 0;
seq__7886_9428 = G__9445;
chunk__7887_9429 = G__9446;
count__7888_9430 = G__9447;
i__7889_9431 = G__9448;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h6.apply(null,a__6533__auto__);
};
var h6 = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h6__delegate.call(this,args__6532__auto__);};
h6.cljs$lang$maxFixedArity = 0;
h6.cljs$lang$applyTo = (function (arglist__9449){
var args__6532__auto__ = cljs.core.seq(arglist__9449);
return h6__delegate(args__6532__auto__);
});
h6.cljs$core$IFn$_invoke$arity$variadic = h6__delegate;
return h6;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.head = (function() { 
var head__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__7894_9450 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__7895_9451 = null;var count__7896_9452 = 0;var i__7897_9453 = 0;while(true){
if((i__7897_9453 < count__7896_9452))
{var arg__6534__auto___9454 = cljs.core._nth.call(null,chunk__7895_9451,i__7897_9453);a__6533__auto__.push(arg__6534__auto___9454);
{
var G__9455 = seq__7894_9450;
var G__9456 = chunk__7895_9451;
var G__9457 = count__7896_9452;
var G__9458 = (i__7897_9453 + 1);
seq__7894_9450 = G__9455;
chunk__7895_9451 = G__9456;
count__7896_9452 = G__9457;
i__7897_9453 = G__9458;
continue;
}
} else
{var temp__4092__auto___9459 = cljs.core.seq.call(null,seq__7894_9450);if(temp__4092__auto___9459)
{var seq__7894_9460__$1 = temp__4092__auto___9459;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7894_9460__$1))
{var c__5632__auto___9461 = cljs.core.chunk_first.call(null,seq__7894_9460__$1);{
var G__9462 = cljs.core.chunk_rest.call(null,seq__7894_9460__$1);
var G__9463 = c__5632__auto___9461;
var G__9464 = cljs.core.count.call(null,c__5632__auto___9461);
var G__9465 = 0;
seq__7894_9450 = G__9462;
chunk__7895_9451 = G__9463;
count__7896_9452 = G__9464;
i__7897_9453 = G__9465;
continue;
}
} else
{var arg__6534__auto___9466 = cljs.core.first.call(null,seq__7894_9460__$1);a__6533__auto__.push(arg__6534__auto___9466);
{
var G__9467 = cljs.core.next.call(null,seq__7894_9460__$1);
var G__9468 = null;
var G__9469 = 0;
var G__9470 = 0;
seq__7894_9450 = G__9467;
chunk__7895_9451 = G__9468;
count__7896_9452 = G__9469;
i__7897_9453 = G__9470;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.head.apply(null,a__6533__auto__);
};
var head = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return head__delegate.call(this,args__6532__auto__);};
head.cljs$lang$maxFixedArity = 0;
head.cljs$lang$applyTo = (function (arglist__9471){
var args__6532__auto__ = cljs.core.seq(arglist__9471);
return head__delegate(args__6532__auto__);
});
head.cljs$core$IFn$_invoke$arity$variadic = head__delegate;
return head;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.header = (function() { 
var header__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__7902_9472 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__7903_9473 = null;var count__7904_9474 = 0;var i__7905_9475 = 0;while(true){
if((i__7905_9475 < count__7904_9474))
{var arg__6534__auto___9476 = cljs.core._nth.call(null,chunk__7903_9473,i__7905_9475);a__6533__auto__.push(arg__6534__auto___9476);
{
var G__9477 = seq__7902_9472;
var G__9478 = chunk__7903_9473;
var G__9479 = count__7904_9474;
var G__9480 = (i__7905_9475 + 1);
seq__7902_9472 = G__9477;
chunk__7903_9473 = G__9478;
count__7904_9474 = G__9479;
i__7905_9475 = G__9480;
continue;
}
} else
{var temp__4092__auto___9481 = cljs.core.seq.call(null,seq__7902_9472);if(temp__4092__auto___9481)
{var seq__7902_9482__$1 = temp__4092__auto___9481;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7902_9482__$1))
{var c__5632__auto___9483 = cljs.core.chunk_first.call(null,seq__7902_9482__$1);{
var G__9484 = cljs.core.chunk_rest.call(null,seq__7902_9482__$1);
var G__9485 = c__5632__auto___9483;
var G__9486 = cljs.core.count.call(null,c__5632__auto___9483);
var G__9487 = 0;
seq__7902_9472 = G__9484;
chunk__7903_9473 = G__9485;
count__7904_9474 = G__9486;
i__7905_9475 = G__9487;
continue;
}
} else
{var arg__6534__auto___9488 = cljs.core.first.call(null,seq__7902_9482__$1);a__6533__auto__.push(arg__6534__auto___9488);
{
var G__9489 = cljs.core.next.call(null,seq__7902_9482__$1);
var G__9490 = null;
var G__9491 = 0;
var G__9492 = 0;
seq__7902_9472 = G__9489;
chunk__7903_9473 = G__9490;
count__7904_9474 = G__9491;
i__7905_9475 = G__9492;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.header.apply(null,a__6533__auto__);
};
var header = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return header__delegate.call(this,args__6532__auto__);};
header.cljs$lang$maxFixedArity = 0;
header.cljs$lang$applyTo = (function (arglist__9493){
var args__6532__auto__ = cljs.core.seq(arglist__9493);
return header__delegate(args__6532__auto__);
});
header.cljs$core$IFn$_invoke$arity$variadic = header__delegate;
return header;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.hr = (function() { 
var hr__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__7910_9494 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__7911_9495 = null;var count__7912_9496 = 0;var i__7913_9497 = 0;while(true){
if((i__7913_9497 < count__7912_9496))
{var arg__6534__auto___9498 = cljs.core._nth.call(null,chunk__7911_9495,i__7913_9497);a__6533__auto__.push(arg__6534__auto___9498);
{
var G__9499 = seq__7910_9494;
var G__9500 = chunk__7911_9495;
var G__9501 = count__7912_9496;
var G__9502 = (i__7913_9497 + 1);
seq__7910_9494 = G__9499;
chunk__7911_9495 = G__9500;
count__7912_9496 = G__9501;
i__7913_9497 = G__9502;
continue;
}
} else
{var temp__4092__auto___9503 = cljs.core.seq.call(null,seq__7910_9494);if(temp__4092__auto___9503)
{var seq__7910_9504__$1 = temp__4092__auto___9503;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7910_9504__$1))
{var c__5632__auto___9505 = cljs.core.chunk_first.call(null,seq__7910_9504__$1);{
var G__9506 = cljs.core.chunk_rest.call(null,seq__7910_9504__$1);
var G__9507 = c__5632__auto___9505;
var G__9508 = cljs.core.count.call(null,c__5632__auto___9505);
var G__9509 = 0;
seq__7910_9494 = G__9506;
chunk__7911_9495 = G__9507;
count__7912_9496 = G__9508;
i__7913_9497 = G__9509;
continue;
}
} else
{var arg__6534__auto___9510 = cljs.core.first.call(null,seq__7910_9504__$1);a__6533__auto__.push(arg__6534__auto___9510);
{
var G__9511 = cljs.core.next.call(null,seq__7910_9504__$1);
var G__9512 = null;
var G__9513 = 0;
var G__9514 = 0;
seq__7910_9494 = G__9511;
chunk__7911_9495 = G__9512;
count__7912_9496 = G__9513;
i__7913_9497 = G__9514;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.hr.apply(null,a__6533__auto__);
};
var hr = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return hr__delegate.call(this,args__6532__auto__);};
hr.cljs$lang$maxFixedArity = 0;
hr.cljs$lang$applyTo = (function (arglist__9515){
var args__6532__auto__ = cljs.core.seq(arglist__9515);
return hr__delegate(args__6532__auto__);
});
hr.cljs$core$IFn$_invoke$arity$variadic = hr__delegate;
return hr;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.html = (function() { 
var html__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__7918_9516 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__7919_9517 = null;var count__7920_9518 = 0;var i__7921_9519 = 0;while(true){
if((i__7921_9519 < count__7920_9518))
{var arg__6534__auto___9520 = cljs.core._nth.call(null,chunk__7919_9517,i__7921_9519);a__6533__auto__.push(arg__6534__auto___9520);
{
var G__9521 = seq__7918_9516;
var G__9522 = chunk__7919_9517;
var G__9523 = count__7920_9518;
var G__9524 = (i__7921_9519 + 1);
seq__7918_9516 = G__9521;
chunk__7919_9517 = G__9522;
count__7920_9518 = G__9523;
i__7921_9519 = G__9524;
continue;
}
} else
{var temp__4092__auto___9525 = cljs.core.seq.call(null,seq__7918_9516);if(temp__4092__auto___9525)
{var seq__7918_9526__$1 = temp__4092__auto___9525;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7918_9526__$1))
{var c__5632__auto___9527 = cljs.core.chunk_first.call(null,seq__7918_9526__$1);{
var G__9528 = cljs.core.chunk_rest.call(null,seq__7918_9526__$1);
var G__9529 = c__5632__auto___9527;
var G__9530 = cljs.core.count.call(null,c__5632__auto___9527);
var G__9531 = 0;
seq__7918_9516 = G__9528;
chunk__7919_9517 = G__9529;
count__7920_9518 = G__9530;
i__7921_9519 = G__9531;
continue;
}
} else
{var arg__6534__auto___9532 = cljs.core.first.call(null,seq__7918_9526__$1);a__6533__auto__.push(arg__6534__auto___9532);
{
var G__9533 = cljs.core.next.call(null,seq__7918_9526__$1);
var G__9534 = null;
var G__9535 = 0;
var G__9536 = 0;
seq__7918_9516 = G__9533;
chunk__7919_9517 = G__9534;
count__7920_9518 = G__9535;
i__7921_9519 = G__9536;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.html.apply(null,a__6533__auto__);
};
var html = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return html__delegate.call(this,args__6532__auto__);};
html.cljs$lang$maxFixedArity = 0;
html.cljs$lang$applyTo = (function (arglist__9537){
var args__6532__auto__ = cljs.core.seq(arglist__9537);
return html__delegate(args__6532__auto__);
});
html.cljs$core$IFn$_invoke$arity$variadic = html__delegate;
return html;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.i = (function() { 
var i__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__7926_9538 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__7927_9539 = null;var count__7928_9540 = 0;var i__7929_9541 = 0;while(true){
if((i__7929_9541 < count__7928_9540))
{var arg__6534__auto___9542 = cljs.core._nth.call(null,chunk__7927_9539,i__7929_9541);a__6533__auto__.push(arg__6534__auto___9542);
{
var G__9543 = seq__7926_9538;
var G__9544 = chunk__7927_9539;
var G__9545 = count__7928_9540;
var G__9546 = (i__7929_9541 + 1);
seq__7926_9538 = G__9543;
chunk__7927_9539 = G__9544;
count__7928_9540 = G__9545;
i__7929_9541 = G__9546;
continue;
}
} else
{var temp__4092__auto___9547 = cljs.core.seq.call(null,seq__7926_9538);if(temp__4092__auto___9547)
{var seq__7926_9548__$1 = temp__4092__auto___9547;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7926_9548__$1))
{var c__5632__auto___9549 = cljs.core.chunk_first.call(null,seq__7926_9548__$1);{
var G__9550 = cljs.core.chunk_rest.call(null,seq__7926_9548__$1);
var G__9551 = c__5632__auto___9549;
var G__9552 = cljs.core.count.call(null,c__5632__auto___9549);
var G__9553 = 0;
seq__7926_9538 = G__9550;
chunk__7927_9539 = G__9551;
count__7928_9540 = G__9552;
i__7929_9541 = G__9553;
continue;
}
} else
{var arg__6534__auto___9554 = cljs.core.first.call(null,seq__7926_9548__$1);a__6533__auto__.push(arg__6534__auto___9554);
{
var G__9555 = cljs.core.next.call(null,seq__7926_9548__$1);
var G__9556 = null;
var G__9557 = 0;
var G__9558 = 0;
seq__7926_9538 = G__9555;
chunk__7927_9539 = G__9556;
count__7928_9540 = G__9557;
i__7929_9541 = G__9558;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.i.apply(null,a__6533__auto__);
};
var i = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return i__delegate.call(this,args__6532__auto__);};
i.cljs$lang$maxFixedArity = 0;
i.cljs$lang$applyTo = (function (arglist__9559){
var args__6532__auto__ = cljs.core.seq(arglist__9559);
return i__delegate(args__6532__auto__);
});
i.cljs$core$IFn$_invoke$arity$variadic = i__delegate;
return i;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.iframe = (function() { 
var iframe__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__7934_9560 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__7935_9561 = null;var count__7936_9562 = 0;var i__7937_9563 = 0;while(true){
if((i__7937_9563 < count__7936_9562))
{var arg__6534__auto___9564 = cljs.core._nth.call(null,chunk__7935_9561,i__7937_9563);a__6533__auto__.push(arg__6534__auto___9564);
{
var G__9565 = seq__7934_9560;
var G__9566 = chunk__7935_9561;
var G__9567 = count__7936_9562;
var G__9568 = (i__7937_9563 + 1);
seq__7934_9560 = G__9565;
chunk__7935_9561 = G__9566;
count__7936_9562 = G__9567;
i__7937_9563 = G__9568;
continue;
}
} else
{var temp__4092__auto___9569 = cljs.core.seq.call(null,seq__7934_9560);if(temp__4092__auto___9569)
{var seq__7934_9570__$1 = temp__4092__auto___9569;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7934_9570__$1))
{var c__5632__auto___9571 = cljs.core.chunk_first.call(null,seq__7934_9570__$1);{
var G__9572 = cljs.core.chunk_rest.call(null,seq__7934_9570__$1);
var G__9573 = c__5632__auto___9571;
var G__9574 = cljs.core.count.call(null,c__5632__auto___9571);
var G__9575 = 0;
seq__7934_9560 = G__9572;
chunk__7935_9561 = G__9573;
count__7936_9562 = G__9574;
i__7937_9563 = G__9575;
continue;
}
} else
{var arg__6534__auto___9576 = cljs.core.first.call(null,seq__7934_9570__$1);a__6533__auto__.push(arg__6534__auto___9576);
{
var G__9577 = cljs.core.next.call(null,seq__7934_9570__$1);
var G__9578 = null;
var G__9579 = 0;
var G__9580 = 0;
seq__7934_9560 = G__9577;
chunk__7935_9561 = G__9578;
count__7936_9562 = G__9579;
i__7937_9563 = G__9580;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.iframe.apply(null,a__6533__auto__);
};
var iframe = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return iframe__delegate.call(this,args__6532__auto__);};
iframe.cljs$lang$maxFixedArity = 0;
iframe.cljs$lang$applyTo = (function (arglist__9581){
var args__6532__auto__ = cljs.core.seq(arglist__9581);
return iframe__delegate(args__6532__auto__);
});
iframe.cljs$core$IFn$_invoke$arity$variadic = iframe__delegate;
return iframe;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.img = (function() { 
var img__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__7942_9582 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__7943_9583 = null;var count__7944_9584 = 0;var i__7945_9585 = 0;while(true){
if((i__7945_9585 < count__7944_9584))
{var arg__6534__auto___9586 = cljs.core._nth.call(null,chunk__7943_9583,i__7945_9585);a__6533__auto__.push(arg__6534__auto___9586);
{
var G__9587 = seq__7942_9582;
var G__9588 = chunk__7943_9583;
var G__9589 = count__7944_9584;
var G__9590 = (i__7945_9585 + 1);
seq__7942_9582 = G__9587;
chunk__7943_9583 = G__9588;
count__7944_9584 = G__9589;
i__7945_9585 = G__9590;
continue;
}
} else
{var temp__4092__auto___9591 = cljs.core.seq.call(null,seq__7942_9582);if(temp__4092__auto___9591)
{var seq__7942_9592__$1 = temp__4092__auto___9591;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7942_9592__$1))
{var c__5632__auto___9593 = cljs.core.chunk_first.call(null,seq__7942_9592__$1);{
var G__9594 = cljs.core.chunk_rest.call(null,seq__7942_9592__$1);
var G__9595 = c__5632__auto___9593;
var G__9596 = cljs.core.count.call(null,c__5632__auto___9593);
var G__9597 = 0;
seq__7942_9582 = G__9594;
chunk__7943_9583 = G__9595;
count__7944_9584 = G__9596;
i__7945_9585 = G__9597;
continue;
}
} else
{var arg__6534__auto___9598 = cljs.core.first.call(null,seq__7942_9592__$1);a__6533__auto__.push(arg__6534__auto___9598);
{
var G__9599 = cljs.core.next.call(null,seq__7942_9592__$1);
var G__9600 = null;
var G__9601 = 0;
var G__9602 = 0;
seq__7942_9582 = G__9599;
chunk__7943_9583 = G__9600;
count__7944_9584 = G__9601;
i__7945_9585 = G__9602;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.img.apply(null,a__6533__auto__);
};
var img = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return img__delegate.call(this,args__6532__auto__);};
img.cljs$lang$maxFixedArity = 0;
img.cljs$lang$applyTo = (function (arglist__9603){
var args__6532__auto__ = cljs.core.seq(arglist__9603);
return img__delegate(args__6532__auto__);
});
img.cljs$core$IFn$_invoke$arity$variadic = img__delegate;
return img;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.input = (function() { 
var input__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__7950_9604 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__7951_9605 = null;var count__7952_9606 = 0;var i__7953_9607 = 0;while(true){
if((i__7953_9607 < count__7952_9606))
{var arg__6534__auto___9608 = cljs.core._nth.call(null,chunk__7951_9605,i__7953_9607);a__6533__auto__.push(arg__6534__auto___9608);
{
var G__9609 = seq__7950_9604;
var G__9610 = chunk__7951_9605;
var G__9611 = count__7952_9606;
var G__9612 = (i__7953_9607 + 1);
seq__7950_9604 = G__9609;
chunk__7951_9605 = G__9610;
count__7952_9606 = G__9611;
i__7953_9607 = G__9612;
continue;
}
} else
{var temp__4092__auto___9613 = cljs.core.seq.call(null,seq__7950_9604);if(temp__4092__auto___9613)
{var seq__7950_9614__$1 = temp__4092__auto___9613;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7950_9614__$1))
{var c__5632__auto___9615 = cljs.core.chunk_first.call(null,seq__7950_9614__$1);{
var G__9616 = cljs.core.chunk_rest.call(null,seq__7950_9614__$1);
var G__9617 = c__5632__auto___9615;
var G__9618 = cljs.core.count.call(null,c__5632__auto___9615);
var G__9619 = 0;
seq__7950_9604 = G__9616;
chunk__7951_9605 = G__9617;
count__7952_9606 = G__9618;
i__7953_9607 = G__9619;
continue;
}
} else
{var arg__6534__auto___9620 = cljs.core.first.call(null,seq__7950_9614__$1);a__6533__auto__.push(arg__6534__auto___9620);
{
var G__9621 = cljs.core.next.call(null,seq__7950_9614__$1);
var G__9622 = null;
var G__9623 = 0;
var G__9624 = 0;
seq__7950_9604 = G__9621;
chunk__7951_9605 = G__9622;
count__7952_9606 = G__9623;
i__7953_9607 = G__9624;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.input.apply(null,a__6533__auto__);
};
var input = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return input__delegate.call(this,args__6532__auto__);};
input.cljs$lang$maxFixedArity = 0;
input.cljs$lang$applyTo = (function (arglist__9625){
var args__6532__auto__ = cljs.core.seq(arglist__9625);
return input__delegate(args__6532__auto__);
});
input.cljs$core$IFn$_invoke$arity$variadic = input__delegate;
return input;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.ins = (function() { 
var ins__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__7958_9626 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__7959_9627 = null;var count__7960_9628 = 0;var i__7961_9629 = 0;while(true){
if((i__7961_9629 < count__7960_9628))
{var arg__6534__auto___9630 = cljs.core._nth.call(null,chunk__7959_9627,i__7961_9629);a__6533__auto__.push(arg__6534__auto___9630);
{
var G__9631 = seq__7958_9626;
var G__9632 = chunk__7959_9627;
var G__9633 = count__7960_9628;
var G__9634 = (i__7961_9629 + 1);
seq__7958_9626 = G__9631;
chunk__7959_9627 = G__9632;
count__7960_9628 = G__9633;
i__7961_9629 = G__9634;
continue;
}
} else
{var temp__4092__auto___9635 = cljs.core.seq.call(null,seq__7958_9626);if(temp__4092__auto___9635)
{var seq__7958_9636__$1 = temp__4092__auto___9635;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7958_9636__$1))
{var c__5632__auto___9637 = cljs.core.chunk_first.call(null,seq__7958_9636__$1);{
var G__9638 = cljs.core.chunk_rest.call(null,seq__7958_9636__$1);
var G__9639 = c__5632__auto___9637;
var G__9640 = cljs.core.count.call(null,c__5632__auto___9637);
var G__9641 = 0;
seq__7958_9626 = G__9638;
chunk__7959_9627 = G__9639;
count__7960_9628 = G__9640;
i__7961_9629 = G__9641;
continue;
}
} else
{var arg__6534__auto___9642 = cljs.core.first.call(null,seq__7958_9636__$1);a__6533__auto__.push(arg__6534__auto___9642);
{
var G__9643 = cljs.core.next.call(null,seq__7958_9636__$1);
var G__9644 = null;
var G__9645 = 0;
var G__9646 = 0;
seq__7958_9626 = G__9643;
chunk__7959_9627 = G__9644;
count__7960_9628 = G__9645;
i__7961_9629 = G__9646;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.ins.apply(null,a__6533__auto__);
};
var ins = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ins__delegate.call(this,args__6532__auto__);};
ins.cljs$lang$maxFixedArity = 0;
ins.cljs$lang$applyTo = (function (arglist__9647){
var args__6532__auto__ = cljs.core.seq(arglist__9647);
return ins__delegate(args__6532__auto__);
});
ins.cljs$core$IFn$_invoke$arity$variadic = ins__delegate;
return ins;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.kbd = (function() { 
var kbd__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__7966_9648 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__7967_9649 = null;var count__7968_9650 = 0;var i__7969_9651 = 0;while(true){
if((i__7969_9651 < count__7968_9650))
{var arg__6534__auto___9652 = cljs.core._nth.call(null,chunk__7967_9649,i__7969_9651);a__6533__auto__.push(arg__6534__auto___9652);
{
var G__9653 = seq__7966_9648;
var G__9654 = chunk__7967_9649;
var G__9655 = count__7968_9650;
var G__9656 = (i__7969_9651 + 1);
seq__7966_9648 = G__9653;
chunk__7967_9649 = G__9654;
count__7968_9650 = G__9655;
i__7969_9651 = G__9656;
continue;
}
} else
{var temp__4092__auto___9657 = cljs.core.seq.call(null,seq__7966_9648);if(temp__4092__auto___9657)
{var seq__7966_9658__$1 = temp__4092__auto___9657;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7966_9658__$1))
{var c__5632__auto___9659 = cljs.core.chunk_first.call(null,seq__7966_9658__$1);{
var G__9660 = cljs.core.chunk_rest.call(null,seq__7966_9658__$1);
var G__9661 = c__5632__auto___9659;
var G__9662 = cljs.core.count.call(null,c__5632__auto___9659);
var G__9663 = 0;
seq__7966_9648 = G__9660;
chunk__7967_9649 = G__9661;
count__7968_9650 = G__9662;
i__7969_9651 = G__9663;
continue;
}
} else
{var arg__6534__auto___9664 = cljs.core.first.call(null,seq__7966_9658__$1);a__6533__auto__.push(arg__6534__auto___9664);
{
var G__9665 = cljs.core.next.call(null,seq__7966_9658__$1);
var G__9666 = null;
var G__9667 = 0;
var G__9668 = 0;
seq__7966_9648 = G__9665;
chunk__7967_9649 = G__9666;
count__7968_9650 = G__9667;
i__7969_9651 = G__9668;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.kbd.apply(null,a__6533__auto__);
};
var kbd = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return kbd__delegate.call(this,args__6532__auto__);};
kbd.cljs$lang$maxFixedArity = 0;
kbd.cljs$lang$applyTo = (function (arglist__9669){
var args__6532__auto__ = cljs.core.seq(arglist__9669);
return kbd__delegate(args__6532__auto__);
});
kbd.cljs$core$IFn$_invoke$arity$variadic = kbd__delegate;
return kbd;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.keygen = (function() { 
var keygen__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__7974_9670 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__7975_9671 = null;var count__7976_9672 = 0;var i__7977_9673 = 0;while(true){
if((i__7977_9673 < count__7976_9672))
{var arg__6534__auto___9674 = cljs.core._nth.call(null,chunk__7975_9671,i__7977_9673);a__6533__auto__.push(arg__6534__auto___9674);
{
var G__9675 = seq__7974_9670;
var G__9676 = chunk__7975_9671;
var G__9677 = count__7976_9672;
var G__9678 = (i__7977_9673 + 1);
seq__7974_9670 = G__9675;
chunk__7975_9671 = G__9676;
count__7976_9672 = G__9677;
i__7977_9673 = G__9678;
continue;
}
} else
{var temp__4092__auto___9679 = cljs.core.seq.call(null,seq__7974_9670);if(temp__4092__auto___9679)
{var seq__7974_9680__$1 = temp__4092__auto___9679;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7974_9680__$1))
{var c__5632__auto___9681 = cljs.core.chunk_first.call(null,seq__7974_9680__$1);{
var G__9682 = cljs.core.chunk_rest.call(null,seq__7974_9680__$1);
var G__9683 = c__5632__auto___9681;
var G__9684 = cljs.core.count.call(null,c__5632__auto___9681);
var G__9685 = 0;
seq__7974_9670 = G__9682;
chunk__7975_9671 = G__9683;
count__7976_9672 = G__9684;
i__7977_9673 = G__9685;
continue;
}
} else
{var arg__6534__auto___9686 = cljs.core.first.call(null,seq__7974_9680__$1);a__6533__auto__.push(arg__6534__auto___9686);
{
var G__9687 = cljs.core.next.call(null,seq__7974_9680__$1);
var G__9688 = null;
var G__9689 = 0;
var G__9690 = 0;
seq__7974_9670 = G__9687;
chunk__7975_9671 = G__9688;
count__7976_9672 = G__9689;
i__7977_9673 = G__9690;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.keygen.apply(null,a__6533__auto__);
};
var keygen = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return keygen__delegate.call(this,args__6532__auto__);};
keygen.cljs$lang$maxFixedArity = 0;
keygen.cljs$lang$applyTo = (function (arglist__9691){
var args__6532__auto__ = cljs.core.seq(arglist__9691);
return keygen__delegate(args__6532__auto__);
});
keygen.cljs$core$IFn$_invoke$arity$variadic = keygen__delegate;
return keygen;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.label = (function() { 
var label__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__7982_9692 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__7983_9693 = null;var count__7984_9694 = 0;var i__7985_9695 = 0;while(true){
if((i__7985_9695 < count__7984_9694))
{var arg__6534__auto___9696 = cljs.core._nth.call(null,chunk__7983_9693,i__7985_9695);a__6533__auto__.push(arg__6534__auto___9696);
{
var G__9697 = seq__7982_9692;
var G__9698 = chunk__7983_9693;
var G__9699 = count__7984_9694;
var G__9700 = (i__7985_9695 + 1);
seq__7982_9692 = G__9697;
chunk__7983_9693 = G__9698;
count__7984_9694 = G__9699;
i__7985_9695 = G__9700;
continue;
}
} else
{var temp__4092__auto___9701 = cljs.core.seq.call(null,seq__7982_9692);if(temp__4092__auto___9701)
{var seq__7982_9702__$1 = temp__4092__auto___9701;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7982_9702__$1))
{var c__5632__auto___9703 = cljs.core.chunk_first.call(null,seq__7982_9702__$1);{
var G__9704 = cljs.core.chunk_rest.call(null,seq__7982_9702__$1);
var G__9705 = c__5632__auto___9703;
var G__9706 = cljs.core.count.call(null,c__5632__auto___9703);
var G__9707 = 0;
seq__7982_9692 = G__9704;
chunk__7983_9693 = G__9705;
count__7984_9694 = G__9706;
i__7985_9695 = G__9707;
continue;
}
} else
{var arg__6534__auto___9708 = cljs.core.first.call(null,seq__7982_9702__$1);a__6533__auto__.push(arg__6534__auto___9708);
{
var G__9709 = cljs.core.next.call(null,seq__7982_9702__$1);
var G__9710 = null;
var G__9711 = 0;
var G__9712 = 0;
seq__7982_9692 = G__9709;
chunk__7983_9693 = G__9710;
count__7984_9694 = G__9711;
i__7985_9695 = G__9712;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.label.apply(null,a__6533__auto__);
};
var label = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return label__delegate.call(this,args__6532__auto__);};
label.cljs$lang$maxFixedArity = 0;
label.cljs$lang$applyTo = (function (arglist__9713){
var args__6532__auto__ = cljs.core.seq(arglist__9713);
return label__delegate(args__6532__auto__);
});
label.cljs$core$IFn$_invoke$arity$variadic = label__delegate;
return label;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.legend = (function() { 
var legend__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__7990_9714 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__7991_9715 = null;var count__7992_9716 = 0;var i__7993_9717 = 0;while(true){
if((i__7993_9717 < count__7992_9716))
{var arg__6534__auto___9718 = cljs.core._nth.call(null,chunk__7991_9715,i__7993_9717);a__6533__auto__.push(arg__6534__auto___9718);
{
var G__9719 = seq__7990_9714;
var G__9720 = chunk__7991_9715;
var G__9721 = count__7992_9716;
var G__9722 = (i__7993_9717 + 1);
seq__7990_9714 = G__9719;
chunk__7991_9715 = G__9720;
count__7992_9716 = G__9721;
i__7993_9717 = G__9722;
continue;
}
} else
{var temp__4092__auto___9723 = cljs.core.seq.call(null,seq__7990_9714);if(temp__4092__auto___9723)
{var seq__7990_9724__$1 = temp__4092__auto___9723;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7990_9724__$1))
{var c__5632__auto___9725 = cljs.core.chunk_first.call(null,seq__7990_9724__$1);{
var G__9726 = cljs.core.chunk_rest.call(null,seq__7990_9724__$1);
var G__9727 = c__5632__auto___9725;
var G__9728 = cljs.core.count.call(null,c__5632__auto___9725);
var G__9729 = 0;
seq__7990_9714 = G__9726;
chunk__7991_9715 = G__9727;
count__7992_9716 = G__9728;
i__7993_9717 = G__9729;
continue;
}
} else
{var arg__6534__auto___9730 = cljs.core.first.call(null,seq__7990_9724__$1);a__6533__auto__.push(arg__6534__auto___9730);
{
var G__9731 = cljs.core.next.call(null,seq__7990_9724__$1);
var G__9732 = null;
var G__9733 = 0;
var G__9734 = 0;
seq__7990_9714 = G__9731;
chunk__7991_9715 = G__9732;
count__7992_9716 = G__9733;
i__7993_9717 = G__9734;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.legend.apply(null,a__6533__auto__);
};
var legend = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return legend__delegate.call(this,args__6532__auto__);};
legend.cljs$lang$maxFixedArity = 0;
legend.cljs$lang$applyTo = (function (arglist__9735){
var args__6532__auto__ = cljs.core.seq(arglist__9735);
return legend__delegate(args__6532__auto__);
});
legend.cljs$core$IFn$_invoke$arity$variadic = legend__delegate;
return legend;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.li = (function() { 
var li__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__7998_9736 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__7999_9737 = null;var count__8000_9738 = 0;var i__8001_9739 = 0;while(true){
if((i__8001_9739 < count__8000_9738))
{var arg__6534__auto___9740 = cljs.core._nth.call(null,chunk__7999_9737,i__8001_9739);a__6533__auto__.push(arg__6534__auto___9740);
{
var G__9741 = seq__7998_9736;
var G__9742 = chunk__7999_9737;
var G__9743 = count__8000_9738;
var G__9744 = (i__8001_9739 + 1);
seq__7998_9736 = G__9741;
chunk__7999_9737 = G__9742;
count__8000_9738 = G__9743;
i__8001_9739 = G__9744;
continue;
}
} else
{var temp__4092__auto___9745 = cljs.core.seq.call(null,seq__7998_9736);if(temp__4092__auto___9745)
{var seq__7998_9746__$1 = temp__4092__auto___9745;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7998_9746__$1))
{var c__5632__auto___9747 = cljs.core.chunk_first.call(null,seq__7998_9746__$1);{
var G__9748 = cljs.core.chunk_rest.call(null,seq__7998_9746__$1);
var G__9749 = c__5632__auto___9747;
var G__9750 = cljs.core.count.call(null,c__5632__auto___9747);
var G__9751 = 0;
seq__7998_9736 = G__9748;
chunk__7999_9737 = G__9749;
count__8000_9738 = G__9750;
i__8001_9739 = G__9751;
continue;
}
} else
{var arg__6534__auto___9752 = cljs.core.first.call(null,seq__7998_9746__$1);a__6533__auto__.push(arg__6534__auto___9752);
{
var G__9753 = cljs.core.next.call(null,seq__7998_9746__$1);
var G__9754 = null;
var G__9755 = 0;
var G__9756 = 0;
seq__7998_9736 = G__9753;
chunk__7999_9737 = G__9754;
count__8000_9738 = G__9755;
i__8001_9739 = G__9756;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.li.apply(null,a__6533__auto__);
};
var li = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return li__delegate.call(this,args__6532__auto__);};
li.cljs$lang$maxFixedArity = 0;
li.cljs$lang$applyTo = (function (arglist__9757){
var args__6532__auto__ = cljs.core.seq(arglist__9757);
return li__delegate(args__6532__auto__);
});
li.cljs$core$IFn$_invoke$arity$variadic = li__delegate;
return li;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.link = (function() { 
var link__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__8006_9758 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__8007_9759 = null;var count__8008_9760 = 0;var i__8009_9761 = 0;while(true){
if((i__8009_9761 < count__8008_9760))
{var arg__6534__auto___9762 = cljs.core._nth.call(null,chunk__8007_9759,i__8009_9761);a__6533__auto__.push(arg__6534__auto___9762);
{
var G__9763 = seq__8006_9758;
var G__9764 = chunk__8007_9759;
var G__9765 = count__8008_9760;
var G__9766 = (i__8009_9761 + 1);
seq__8006_9758 = G__9763;
chunk__8007_9759 = G__9764;
count__8008_9760 = G__9765;
i__8009_9761 = G__9766;
continue;
}
} else
{var temp__4092__auto___9767 = cljs.core.seq.call(null,seq__8006_9758);if(temp__4092__auto___9767)
{var seq__8006_9768__$1 = temp__4092__auto___9767;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8006_9768__$1))
{var c__5632__auto___9769 = cljs.core.chunk_first.call(null,seq__8006_9768__$1);{
var G__9770 = cljs.core.chunk_rest.call(null,seq__8006_9768__$1);
var G__9771 = c__5632__auto___9769;
var G__9772 = cljs.core.count.call(null,c__5632__auto___9769);
var G__9773 = 0;
seq__8006_9758 = G__9770;
chunk__8007_9759 = G__9771;
count__8008_9760 = G__9772;
i__8009_9761 = G__9773;
continue;
}
} else
{var arg__6534__auto___9774 = cljs.core.first.call(null,seq__8006_9768__$1);a__6533__auto__.push(arg__6534__auto___9774);
{
var G__9775 = cljs.core.next.call(null,seq__8006_9768__$1);
var G__9776 = null;
var G__9777 = 0;
var G__9778 = 0;
seq__8006_9758 = G__9775;
chunk__8007_9759 = G__9776;
count__8008_9760 = G__9777;
i__8009_9761 = G__9778;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.link.apply(null,a__6533__auto__);
};
var link = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return link__delegate.call(this,args__6532__auto__);};
link.cljs$lang$maxFixedArity = 0;
link.cljs$lang$applyTo = (function (arglist__9779){
var args__6532__auto__ = cljs.core.seq(arglist__9779);
return link__delegate(args__6532__auto__);
});
link.cljs$core$IFn$_invoke$arity$variadic = link__delegate;
return link;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.main = (function() { 
var main__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__8014_9780 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__8015_9781 = null;var count__8016_9782 = 0;var i__8017_9783 = 0;while(true){
if((i__8017_9783 < count__8016_9782))
{var arg__6534__auto___9784 = cljs.core._nth.call(null,chunk__8015_9781,i__8017_9783);a__6533__auto__.push(arg__6534__auto___9784);
{
var G__9785 = seq__8014_9780;
var G__9786 = chunk__8015_9781;
var G__9787 = count__8016_9782;
var G__9788 = (i__8017_9783 + 1);
seq__8014_9780 = G__9785;
chunk__8015_9781 = G__9786;
count__8016_9782 = G__9787;
i__8017_9783 = G__9788;
continue;
}
} else
{var temp__4092__auto___9789 = cljs.core.seq.call(null,seq__8014_9780);if(temp__4092__auto___9789)
{var seq__8014_9790__$1 = temp__4092__auto___9789;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8014_9790__$1))
{var c__5632__auto___9791 = cljs.core.chunk_first.call(null,seq__8014_9790__$1);{
var G__9792 = cljs.core.chunk_rest.call(null,seq__8014_9790__$1);
var G__9793 = c__5632__auto___9791;
var G__9794 = cljs.core.count.call(null,c__5632__auto___9791);
var G__9795 = 0;
seq__8014_9780 = G__9792;
chunk__8015_9781 = G__9793;
count__8016_9782 = G__9794;
i__8017_9783 = G__9795;
continue;
}
} else
{var arg__6534__auto___9796 = cljs.core.first.call(null,seq__8014_9790__$1);a__6533__auto__.push(arg__6534__auto___9796);
{
var G__9797 = cljs.core.next.call(null,seq__8014_9790__$1);
var G__9798 = null;
var G__9799 = 0;
var G__9800 = 0;
seq__8014_9780 = G__9797;
chunk__8015_9781 = G__9798;
count__8016_9782 = G__9799;
i__8017_9783 = G__9800;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.main.apply(null,a__6533__auto__);
};
var main = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return main__delegate.call(this,args__6532__auto__);};
main.cljs$lang$maxFixedArity = 0;
main.cljs$lang$applyTo = (function (arglist__9801){
var args__6532__auto__ = cljs.core.seq(arglist__9801);
return main__delegate(args__6532__auto__);
});
main.cljs$core$IFn$_invoke$arity$variadic = main__delegate;
return main;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.map = (function() { 
var map__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__8022_9802 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__8023_9803 = null;var count__8024_9804 = 0;var i__8025_9805 = 0;while(true){
if((i__8025_9805 < count__8024_9804))
{var arg__6534__auto___9806 = cljs.core._nth.call(null,chunk__8023_9803,i__8025_9805);a__6533__auto__.push(arg__6534__auto___9806);
{
var G__9807 = seq__8022_9802;
var G__9808 = chunk__8023_9803;
var G__9809 = count__8024_9804;
var G__9810 = (i__8025_9805 + 1);
seq__8022_9802 = G__9807;
chunk__8023_9803 = G__9808;
count__8024_9804 = G__9809;
i__8025_9805 = G__9810;
continue;
}
} else
{var temp__4092__auto___9811 = cljs.core.seq.call(null,seq__8022_9802);if(temp__4092__auto___9811)
{var seq__8022_9812__$1 = temp__4092__auto___9811;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8022_9812__$1))
{var c__5632__auto___9813 = cljs.core.chunk_first.call(null,seq__8022_9812__$1);{
var G__9814 = cljs.core.chunk_rest.call(null,seq__8022_9812__$1);
var G__9815 = c__5632__auto___9813;
var G__9816 = cljs.core.count.call(null,c__5632__auto___9813);
var G__9817 = 0;
seq__8022_9802 = G__9814;
chunk__8023_9803 = G__9815;
count__8024_9804 = G__9816;
i__8025_9805 = G__9817;
continue;
}
} else
{var arg__6534__auto___9818 = cljs.core.first.call(null,seq__8022_9812__$1);a__6533__auto__.push(arg__6534__auto___9818);
{
var G__9819 = cljs.core.next.call(null,seq__8022_9812__$1);
var G__9820 = null;
var G__9821 = 0;
var G__9822 = 0;
seq__8022_9802 = G__9819;
chunk__8023_9803 = G__9820;
count__8024_9804 = G__9821;
i__8025_9805 = G__9822;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.map.apply(null,a__6533__auto__);
};
var map = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return map__delegate.call(this,args__6532__auto__);};
map.cljs$lang$maxFixedArity = 0;
map.cljs$lang$applyTo = (function (arglist__9823){
var args__6532__auto__ = cljs.core.seq(arglist__9823);
return map__delegate(args__6532__auto__);
});
map.cljs$core$IFn$_invoke$arity$variadic = map__delegate;
return map;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.mark = (function() { 
var mark__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__8030_9824 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__8031_9825 = null;var count__8032_9826 = 0;var i__8033_9827 = 0;while(true){
if((i__8033_9827 < count__8032_9826))
{var arg__6534__auto___9828 = cljs.core._nth.call(null,chunk__8031_9825,i__8033_9827);a__6533__auto__.push(arg__6534__auto___9828);
{
var G__9829 = seq__8030_9824;
var G__9830 = chunk__8031_9825;
var G__9831 = count__8032_9826;
var G__9832 = (i__8033_9827 + 1);
seq__8030_9824 = G__9829;
chunk__8031_9825 = G__9830;
count__8032_9826 = G__9831;
i__8033_9827 = G__9832;
continue;
}
} else
{var temp__4092__auto___9833 = cljs.core.seq.call(null,seq__8030_9824);if(temp__4092__auto___9833)
{var seq__8030_9834__$1 = temp__4092__auto___9833;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8030_9834__$1))
{var c__5632__auto___9835 = cljs.core.chunk_first.call(null,seq__8030_9834__$1);{
var G__9836 = cljs.core.chunk_rest.call(null,seq__8030_9834__$1);
var G__9837 = c__5632__auto___9835;
var G__9838 = cljs.core.count.call(null,c__5632__auto___9835);
var G__9839 = 0;
seq__8030_9824 = G__9836;
chunk__8031_9825 = G__9837;
count__8032_9826 = G__9838;
i__8033_9827 = G__9839;
continue;
}
} else
{var arg__6534__auto___9840 = cljs.core.first.call(null,seq__8030_9834__$1);a__6533__auto__.push(arg__6534__auto___9840);
{
var G__9841 = cljs.core.next.call(null,seq__8030_9834__$1);
var G__9842 = null;
var G__9843 = 0;
var G__9844 = 0;
seq__8030_9824 = G__9841;
chunk__8031_9825 = G__9842;
count__8032_9826 = G__9843;
i__8033_9827 = G__9844;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.mark.apply(null,a__6533__auto__);
};
var mark = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return mark__delegate.call(this,args__6532__auto__);};
mark.cljs$lang$maxFixedArity = 0;
mark.cljs$lang$applyTo = (function (arglist__9845){
var args__6532__auto__ = cljs.core.seq(arglist__9845);
return mark__delegate(args__6532__auto__);
});
mark.cljs$core$IFn$_invoke$arity$variadic = mark__delegate;
return mark;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.menu = (function() { 
var menu__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__8038_9846 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__8039_9847 = null;var count__8040_9848 = 0;var i__8041_9849 = 0;while(true){
if((i__8041_9849 < count__8040_9848))
{var arg__6534__auto___9850 = cljs.core._nth.call(null,chunk__8039_9847,i__8041_9849);a__6533__auto__.push(arg__6534__auto___9850);
{
var G__9851 = seq__8038_9846;
var G__9852 = chunk__8039_9847;
var G__9853 = count__8040_9848;
var G__9854 = (i__8041_9849 + 1);
seq__8038_9846 = G__9851;
chunk__8039_9847 = G__9852;
count__8040_9848 = G__9853;
i__8041_9849 = G__9854;
continue;
}
} else
{var temp__4092__auto___9855 = cljs.core.seq.call(null,seq__8038_9846);if(temp__4092__auto___9855)
{var seq__8038_9856__$1 = temp__4092__auto___9855;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8038_9856__$1))
{var c__5632__auto___9857 = cljs.core.chunk_first.call(null,seq__8038_9856__$1);{
var G__9858 = cljs.core.chunk_rest.call(null,seq__8038_9856__$1);
var G__9859 = c__5632__auto___9857;
var G__9860 = cljs.core.count.call(null,c__5632__auto___9857);
var G__9861 = 0;
seq__8038_9846 = G__9858;
chunk__8039_9847 = G__9859;
count__8040_9848 = G__9860;
i__8041_9849 = G__9861;
continue;
}
} else
{var arg__6534__auto___9862 = cljs.core.first.call(null,seq__8038_9856__$1);a__6533__auto__.push(arg__6534__auto___9862);
{
var G__9863 = cljs.core.next.call(null,seq__8038_9856__$1);
var G__9864 = null;
var G__9865 = 0;
var G__9866 = 0;
seq__8038_9846 = G__9863;
chunk__8039_9847 = G__9864;
count__8040_9848 = G__9865;
i__8041_9849 = G__9866;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.menu.apply(null,a__6533__auto__);
};
var menu = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return menu__delegate.call(this,args__6532__auto__);};
menu.cljs$lang$maxFixedArity = 0;
menu.cljs$lang$applyTo = (function (arglist__9867){
var args__6532__auto__ = cljs.core.seq(arglist__9867);
return menu__delegate(args__6532__auto__);
});
menu.cljs$core$IFn$_invoke$arity$variadic = menu__delegate;
return menu;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.menuitem = (function() { 
var menuitem__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__8046_9868 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__8047_9869 = null;var count__8048_9870 = 0;var i__8049_9871 = 0;while(true){
if((i__8049_9871 < count__8048_9870))
{var arg__6534__auto___9872 = cljs.core._nth.call(null,chunk__8047_9869,i__8049_9871);a__6533__auto__.push(arg__6534__auto___9872);
{
var G__9873 = seq__8046_9868;
var G__9874 = chunk__8047_9869;
var G__9875 = count__8048_9870;
var G__9876 = (i__8049_9871 + 1);
seq__8046_9868 = G__9873;
chunk__8047_9869 = G__9874;
count__8048_9870 = G__9875;
i__8049_9871 = G__9876;
continue;
}
} else
{var temp__4092__auto___9877 = cljs.core.seq.call(null,seq__8046_9868);if(temp__4092__auto___9877)
{var seq__8046_9878__$1 = temp__4092__auto___9877;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8046_9878__$1))
{var c__5632__auto___9879 = cljs.core.chunk_first.call(null,seq__8046_9878__$1);{
var G__9880 = cljs.core.chunk_rest.call(null,seq__8046_9878__$1);
var G__9881 = c__5632__auto___9879;
var G__9882 = cljs.core.count.call(null,c__5632__auto___9879);
var G__9883 = 0;
seq__8046_9868 = G__9880;
chunk__8047_9869 = G__9881;
count__8048_9870 = G__9882;
i__8049_9871 = G__9883;
continue;
}
} else
{var arg__6534__auto___9884 = cljs.core.first.call(null,seq__8046_9878__$1);a__6533__auto__.push(arg__6534__auto___9884);
{
var G__9885 = cljs.core.next.call(null,seq__8046_9878__$1);
var G__9886 = null;
var G__9887 = 0;
var G__9888 = 0;
seq__8046_9868 = G__9885;
chunk__8047_9869 = G__9886;
count__8048_9870 = G__9887;
i__8049_9871 = G__9888;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.menuitem.apply(null,a__6533__auto__);
};
var menuitem = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return menuitem__delegate.call(this,args__6532__auto__);};
menuitem.cljs$lang$maxFixedArity = 0;
menuitem.cljs$lang$applyTo = (function (arglist__9889){
var args__6532__auto__ = cljs.core.seq(arglist__9889);
return menuitem__delegate(args__6532__auto__);
});
menuitem.cljs$core$IFn$_invoke$arity$variadic = menuitem__delegate;
return menuitem;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.meta = (function() { 
var meta__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__8054_9890 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__8055_9891 = null;var count__8056_9892 = 0;var i__8057_9893 = 0;while(true){
if((i__8057_9893 < count__8056_9892))
{var arg__6534__auto___9894 = cljs.core._nth.call(null,chunk__8055_9891,i__8057_9893);a__6533__auto__.push(arg__6534__auto___9894);
{
var G__9895 = seq__8054_9890;
var G__9896 = chunk__8055_9891;
var G__9897 = count__8056_9892;
var G__9898 = (i__8057_9893 + 1);
seq__8054_9890 = G__9895;
chunk__8055_9891 = G__9896;
count__8056_9892 = G__9897;
i__8057_9893 = G__9898;
continue;
}
} else
{var temp__4092__auto___9899 = cljs.core.seq.call(null,seq__8054_9890);if(temp__4092__auto___9899)
{var seq__8054_9900__$1 = temp__4092__auto___9899;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8054_9900__$1))
{var c__5632__auto___9901 = cljs.core.chunk_first.call(null,seq__8054_9900__$1);{
var G__9902 = cljs.core.chunk_rest.call(null,seq__8054_9900__$1);
var G__9903 = c__5632__auto___9901;
var G__9904 = cljs.core.count.call(null,c__5632__auto___9901);
var G__9905 = 0;
seq__8054_9890 = G__9902;
chunk__8055_9891 = G__9903;
count__8056_9892 = G__9904;
i__8057_9893 = G__9905;
continue;
}
} else
{var arg__6534__auto___9906 = cljs.core.first.call(null,seq__8054_9900__$1);a__6533__auto__.push(arg__6534__auto___9906);
{
var G__9907 = cljs.core.next.call(null,seq__8054_9900__$1);
var G__9908 = null;
var G__9909 = 0;
var G__9910 = 0;
seq__8054_9890 = G__9907;
chunk__8055_9891 = G__9908;
count__8056_9892 = G__9909;
i__8057_9893 = G__9910;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.meta.apply(null,a__6533__auto__);
};
var meta = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return meta__delegate.call(this,args__6532__auto__);};
meta.cljs$lang$maxFixedArity = 0;
meta.cljs$lang$applyTo = (function (arglist__9911){
var args__6532__auto__ = cljs.core.seq(arglist__9911);
return meta__delegate(args__6532__auto__);
});
meta.cljs$core$IFn$_invoke$arity$variadic = meta__delegate;
return meta;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.meter = (function() { 
var meter__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__8062_9912 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__8063_9913 = null;var count__8064_9914 = 0;var i__8065_9915 = 0;while(true){
if((i__8065_9915 < count__8064_9914))
{var arg__6534__auto___9916 = cljs.core._nth.call(null,chunk__8063_9913,i__8065_9915);a__6533__auto__.push(arg__6534__auto___9916);
{
var G__9917 = seq__8062_9912;
var G__9918 = chunk__8063_9913;
var G__9919 = count__8064_9914;
var G__9920 = (i__8065_9915 + 1);
seq__8062_9912 = G__9917;
chunk__8063_9913 = G__9918;
count__8064_9914 = G__9919;
i__8065_9915 = G__9920;
continue;
}
} else
{var temp__4092__auto___9921 = cljs.core.seq.call(null,seq__8062_9912);if(temp__4092__auto___9921)
{var seq__8062_9922__$1 = temp__4092__auto___9921;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8062_9922__$1))
{var c__5632__auto___9923 = cljs.core.chunk_first.call(null,seq__8062_9922__$1);{
var G__9924 = cljs.core.chunk_rest.call(null,seq__8062_9922__$1);
var G__9925 = c__5632__auto___9923;
var G__9926 = cljs.core.count.call(null,c__5632__auto___9923);
var G__9927 = 0;
seq__8062_9912 = G__9924;
chunk__8063_9913 = G__9925;
count__8064_9914 = G__9926;
i__8065_9915 = G__9927;
continue;
}
} else
{var arg__6534__auto___9928 = cljs.core.first.call(null,seq__8062_9922__$1);a__6533__auto__.push(arg__6534__auto___9928);
{
var G__9929 = cljs.core.next.call(null,seq__8062_9922__$1);
var G__9930 = null;
var G__9931 = 0;
var G__9932 = 0;
seq__8062_9912 = G__9929;
chunk__8063_9913 = G__9930;
count__8064_9914 = G__9931;
i__8065_9915 = G__9932;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.meter.apply(null,a__6533__auto__);
};
var meter = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return meter__delegate.call(this,args__6532__auto__);};
meter.cljs$lang$maxFixedArity = 0;
meter.cljs$lang$applyTo = (function (arglist__9933){
var args__6532__auto__ = cljs.core.seq(arglist__9933);
return meter__delegate(args__6532__auto__);
});
meter.cljs$core$IFn$_invoke$arity$variadic = meter__delegate;
return meter;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.nav = (function() { 
var nav__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__8070_9934 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__8071_9935 = null;var count__8072_9936 = 0;var i__8073_9937 = 0;while(true){
if((i__8073_9937 < count__8072_9936))
{var arg__6534__auto___9938 = cljs.core._nth.call(null,chunk__8071_9935,i__8073_9937);a__6533__auto__.push(arg__6534__auto___9938);
{
var G__9939 = seq__8070_9934;
var G__9940 = chunk__8071_9935;
var G__9941 = count__8072_9936;
var G__9942 = (i__8073_9937 + 1);
seq__8070_9934 = G__9939;
chunk__8071_9935 = G__9940;
count__8072_9936 = G__9941;
i__8073_9937 = G__9942;
continue;
}
} else
{var temp__4092__auto___9943 = cljs.core.seq.call(null,seq__8070_9934);if(temp__4092__auto___9943)
{var seq__8070_9944__$1 = temp__4092__auto___9943;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8070_9944__$1))
{var c__5632__auto___9945 = cljs.core.chunk_first.call(null,seq__8070_9944__$1);{
var G__9946 = cljs.core.chunk_rest.call(null,seq__8070_9944__$1);
var G__9947 = c__5632__auto___9945;
var G__9948 = cljs.core.count.call(null,c__5632__auto___9945);
var G__9949 = 0;
seq__8070_9934 = G__9946;
chunk__8071_9935 = G__9947;
count__8072_9936 = G__9948;
i__8073_9937 = G__9949;
continue;
}
} else
{var arg__6534__auto___9950 = cljs.core.first.call(null,seq__8070_9944__$1);a__6533__auto__.push(arg__6534__auto___9950);
{
var G__9951 = cljs.core.next.call(null,seq__8070_9944__$1);
var G__9952 = null;
var G__9953 = 0;
var G__9954 = 0;
seq__8070_9934 = G__9951;
chunk__8071_9935 = G__9952;
count__8072_9936 = G__9953;
i__8073_9937 = G__9954;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.nav.apply(null,a__6533__auto__);
};
var nav = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return nav__delegate.call(this,args__6532__auto__);};
nav.cljs$lang$maxFixedArity = 0;
nav.cljs$lang$applyTo = (function (arglist__9955){
var args__6532__auto__ = cljs.core.seq(arglist__9955);
return nav__delegate(args__6532__auto__);
});
nav.cljs$core$IFn$_invoke$arity$variadic = nav__delegate;
return nav;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.noscript = (function() { 
var noscript__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__8078_9956 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__8079_9957 = null;var count__8080_9958 = 0;var i__8081_9959 = 0;while(true){
if((i__8081_9959 < count__8080_9958))
{var arg__6534__auto___9960 = cljs.core._nth.call(null,chunk__8079_9957,i__8081_9959);a__6533__auto__.push(arg__6534__auto___9960);
{
var G__9961 = seq__8078_9956;
var G__9962 = chunk__8079_9957;
var G__9963 = count__8080_9958;
var G__9964 = (i__8081_9959 + 1);
seq__8078_9956 = G__9961;
chunk__8079_9957 = G__9962;
count__8080_9958 = G__9963;
i__8081_9959 = G__9964;
continue;
}
} else
{var temp__4092__auto___9965 = cljs.core.seq.call(null,seq__8078_9956);if(temp__4092__auto___9965)
{var seq__8078_9966__$1 = temp__4092__auto___9965;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8078_9966__$1))
{var c__5632__auto___9967 = cljs.core.chunk_first.call(null,seq__8078_9966__$1);{
var G__9968 = cljs.core.chunk_rest.call(null,seq__8078_9966__$1);
var G__9969 = c__5632__auto___9967;
var G__9970 = cljs.core.count.call(null,c__5632__auto___9967);
var G__9971 = 0;
seq__8078_9956 = G__9968;
chunk__8079_9957 = G__9969;
count__8080_9958 = G__9970;
i__8081_9959 = G__9971;
continue;
}
} else
{var arg__6534__auto___9972 = cljs.core.first.call(null,seq__8078_9966__$1);a__6533__auto__.push(arg__6534__auto___9972);
{
var G__9973 = cljs.core.next.call(null,seq__8078_9966__$1);
var G__9974 = null;
var G__9975 = 0;
var G__9976 = 0;
seq__8078_9956 = G__9973;
chunk__8079_9957 = G__9974;
count__8080_9958 = G__9975;
i__8081_9959 = G__9976;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.noscript.apply(null,a__6533__auto__);
};
var noscript = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return noscript__delegate.call(this,args__6532__auto__);};
noscript.cljs$lang$maxFixedArity = 0;
noscript.cljs$lang$applyTo = (function (arglist__9977){
var args__6532__auto__ = cljs.core.seq(arglist__9977);
return noscript__delegate(args__6532__auto__);
});
noscript.cljs$core$IFn$_invoke$arity$variadic = noscript__delegate;
return noscript;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.object = (function() { 
var object__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__8086_9978 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__8087_9979 = null;var count__8088_9980 = 0;var i__8089_9981 = 0;while(true){
if((i__8089_9981 < count__8088_9980))
{var arg__6534__auto___9982 = cljs.core._nth.call(null,chunk__8087_9979,i__8089_9981);a__6533__auto__.push(arg__6534__auto___9982);
{
var G__9983 = seq__8086_9978;
var G__9984 = chunk__8087_9979;
var G__9985 = count__8088_9980;
var G__9986 = (i__8089_9981 + 1);
seq__8086_9978 = G__9983;
chunk__8087_9979 = G__9984;
count__8088_9980 = G__9985;
i__8089_9981 = G__9986;
continue;
}
} else
{var temp__4092__auto___9987 = cljs.core.seq.call(null,seq__8086_9978);if(temp__4092__auto___9987)
{var seq__8086_9988__$1 = temp__4092__auto___9987;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8086_9988__$1))
{var c__5632__auto___9989 = cljs.core.chunk_first.call(null,seq__8086_9988__$1);{
var G__9990 = cljs.core.chunk_rest.call(null,seq__8086_9988__$1);
var G__9991 = c__5632__auto___9989;
var G__9992 = cljs.core.count.call(null,c__5632__auto___9989);
var G__9993 = 0;
seq__8086_9978 = G__9990;
chunk__8087_9979 = G__9991;
count__8088_9980 = G__9992;
i__8089_9981 = G__9993;
continue;
}
} else
{var arg__6534__auto___9994 = cljs.core.first.call(null,seq__8086_9988__$1);a__6533__auto__.push(arg__6534__auto___9994);
{
var G__9995 = cljs.core.next.call(null,seq__8086_9988__$1);
var G__9996 = null;
var G__9997 = 0;
var G__9998 = 0;
seq__8086_9978 = G__9995;
chunk__8087_9979 = G__9996;
count__8088_9980 = G__9997;
i__8089_9981 = G__9998;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.object.apply(null,a__6533__auto__);
};
var object = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return object__delegate.call(this,args__6532__auto__);};
object.cljs$lang$maxFixedArity = 0;
object.cljs$lang$applyTo = (function (arglist__9999){
var args__6532__auto__ = cljs.core.seq(arglist__9999);
return object__delegate(args__6532__auto__);
});
object.cljs$core$IFn$_invoke$arity$variadic = object__delegate;
return object;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.ol = (function() { 
var ol__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__8094_10000 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__8095_10001 = null;var count__8096_10002 = 0;var i__8097_10003 = 0;while(true){
if((i__8097_10003 < count__8096_10002))
{var arg__6534__auto___10004 = cljs.core._nth.call(null,chunk__8095_10001,i__8097_10003);a__6533__auto__.push(arg__6534__auto___10004);
{
var G__10005 = seq__8094_10000;
var G__10006 = chunk__8095_10001;
var G__10007 = count__8096_10002;
var G__10008 = (i__8097_10003 + 1);
seq__8094_10000 = G__10005;
chunk__8095_10001 = G__10006;
count__8096_10002 = G__10007;
i__8097_10003 = G__10008;
continue;
}
} else
{var temp__4092__auto___10009 = cljs.core.seq.call(null,seq__8094_10000);if(temp__4092__auto___10009)
{var seq__8094_10010__$1 = temp__4092__auto___10009;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8094_10010__$1))
{var c__5632__auto___10011 = cljs.core.chunk_first.call(null,seq__8094_10010__$1);{
var G__10012 = cljs.core.chunk_rest.call(null,seq__8094_10010__$1);
var G__10013 = c__5632__auto___10011;
var G__10014 = cljs.core.count.call(null,c__5632__auto___10011);
var G__10015 = 0;
seq__8094_10000 = G__10012;
chunk__8095_10001 = G__10013;
count__8096_10002 = G__10014;
i__8097_10003 = G__10015;
continue;
}
} else
{var arg__6534__auto___10016 = cljs.core.first.call(null,seq__8094_10010__$1);a__6533__auto__.push(arg__6534__auto___10016);
{
var G__10017 = cljs.core.next.call(null,seq__8094_10010__$1);
var G__10018 = null;
var G__10019 = 0;
var G__10020 = 0;
seq__8094_10000 = G__10017;
chunk__8095_10001 = G__10018;
count__8096_10002 = G__10019;
i__8097_10003 = G__10020;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.ol.apply(null,a__6533__auto__);
};
var ol = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ol__delegate.call(this,args__6532__auto__);};
ol.cljs$lang$maxFixedArity = 0;
ol.cljs$lang$applyTo = (function (arglist__10021){
var args__6532__auto__ = cljs.core.seq(arglist__10021);
return ol__delegate(args__6532__auto__);
});
ol.cljs$core$IFn$_invoke$arity$variadic = ol__delegate;
return ol;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.optgroup = (function() { 
var optgroup__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__8102_10022 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__8103_10023 = null;var count__8104_10024 = 0;var i__8105_10025 = 0;while(true){
if((i__8105_10025 < count__8104_10024))
{var arg__6534__auto___10026 = cljs.core._nth.call(null,chunk__8103_10023,i__8105_10025);a__6533__auto__.push(arg__6534__auto___10026);
{
var G__10027 = seq__8102_10022;
var G__10028 = chunk__8103_10023;
var G__10029 = count__8104_10024;
var G__10030 = (i__8105_10025 + 1);
seq__8102_10022 = G__10027;
chunk__8103_10023 = G__10028;
count__8104_10024 = G__10029;
i__8105_10025 = G__10030;
continue;
}
} else
{var temp__4092__auto___10031 = cljs.core.seq.call(null,seq__8102_10022);if(temp__4092__auto___10031)
{var seq__8102_10032__$1 = temp__4092__auto___10031;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8102_10032__$1))
{var c__5632__auto___10033 = cljs.core.chunk_first.call(null,seq__8102_10032__$1);{
var G__10034 = cljs.core.chunk_rest.call(null,seq__8102_10032__$1);
var G__10035 = c__5632__auto___10033;
var G__10036 = cljs.core.count.call(null,c__5632__auto___10033);
var G__10037 = 0;
seq__8102_10022 = G__10034;
chunk__8103_10023 = G__10035;
count__8104_10024 = G__10036;
i__8105_10025 = G__10037;
continue;
}
} else
{var arg__6534__auto___10038 = cljs.core.first.call(null,seq__8102_10032__$1);a__6533__auto__.push(arg__6534__auto___10038);
{
var G__10039 = cljs.core.next.call(null,seq__8102_10032__$1);
var G__10040 = null;
var G__10041 = 0;
var G__10042 = 0;
seq__8102_10022 = G__10039;
chunk__8103_10023 = G__10040;
count__8104_10024 = G__10041;
i__8105_10025 = G__10042;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.optgroup.apply(null,a__6533__auto__);
};
var optgroup = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return optgroup__delegate.call(this,args__6532__auto__);};
optgroup.cljs$lang$maxFixedArity = 0;
optgroup.cljs$lang$applyTo = (function (arglist__10043){
var args__6532__auto__ = cljs.core.seq(arglist__10043);
return optgroup__delegate(args__6532__auto__);
});
optgroup.cljs$core$IFn$_invoke$arity$variadic = optgroup__delegate;
return optgroup;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.option = (function() { 
var option__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__8110_10044 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__8111_10045 = null;var count__8112_10046 = 0;var i__8113_10047 = 0;while(true){
if((i__8113_10047 < count__8112_10046))
{var arg__6534__auto___10048 = cljs.core._nth.call(null,chunk__8111_10045,i__8113_10047);a__6533__auto__.push(arg__6534__auto___10048);
{
var G__10049 = seq__8110_10044;
var G__10050 = chunk__8111_10045;
var G__10051 = count__8112_10046;
var G__10052 = (i__8113_10047 + 1);
seq__8110_10044 = G__10049;
chunk__8111_10045 = G__10050;
count__8112_10046 = G__10051;
i__8113_10047 = G__10052;
continue;
}
} else
{var temp__4092__auto___10053 = cljs.core.seq.call(null,seq__8110_10044);if(temp__4092__auto___10053)
{var seq__8110_10054__$1 = temp__4092__auto___10053;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8110_10054__$1))
{var c__5632__auto___10055 = cljs.core.chunk_first.call(null,seq__8110_10054__$1);{
var G__10056 = cljs.core.chunk_rest.call(null,seq__8110_10054__$1);
var G__10057 = c__5632__auto___10055;
var G__10058 = cljs.core.count.call(null,c__5632__auto___10055);
var G__10059 = 0;
seq__8110_10044 = G__10056;
chunk__8111_10045 = G__10057;
count__8112_10046 = G__10058;
i__8113_10047 = G__10059;
continue;
}
} else
{var arg__6534__auto___10060 = cljs.core.first.call(null,seq__8110_10054__$1);a__6533__auto__.push(arg__6534__auto___10060);
{
var G__10061 = cljs.core.next.call(null,seq__8110_10054__$1);
var G__10062 = null;
var G__10063 = 0;
var G__10064 = 0;
seq__8110_10044 = G__10061;
chunk__8111_10045 = G__10062;
count__8112_10046 = G__10063;
i__8113_10047 = G__10064;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.option.apply(null,a__6533__auto__);
};
var option = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return option__delegate.call(this,args__6532__auto__);};
option.cljs$lang$maxFixedArity = 0;
option.cljs$lang$applyTo = (function (arglist__10065){
var args__6532__auto__ = cljs.core.seq(arglist__10065);
return option__delegate(args__6532__auto__);
});
option.cljs$core$IFn$_invoke$arity$variadic = option__delegate;
return option;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.output = (function() { 
var output__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__8118_10066 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__8119_10067 = null;var count__8120_10068 = 0;var i__8121_10069 = 0;while(true){
if((i__8121_10069 < count__8120_10068))
{var arg__6534__auto___10070 = cljs.core._nth.call(null,chunk__8119_10067,i__8121_10069);a__6533__auto__.push(arg__6534__auto___10070);
{
var G__10071 = seq__8118_10066;
var G__10072 = chunk__8119_10067;
var G__10073 = count__8120_10068;
var G__10074 = (i__8121_10069 + 1);
seq__8118_10066 = G__10071;
chunk__8119_10067 = G__10072;
count__8120_10068 = G__10073;
i__8121_10069 = G__10074;
continue;
}
} else
{var temp__4092__auto___10075 = cljs.core.seq.call(null,seq__8118_10066);if(temp__4092__auto___10075)
{var seq__8118_10076__$1 = temp__4092__auto___10075;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8118_10076__$1))
{var c__5632__auto___10077 = cljs.core.chunk_first.call(null,seq__8118_10076__$1);{
var G__10078 = cljs.core.chunk_rest.call(null,seq__8118_10076__$1);
var G__10079 = c__5632__auto___10077;
var G__10080 = cljs.core.count.call(null,c__5632__auto___10077);
var G__10081 = 0;
seq__8118_10066 = G__10078;
chunk__8119_10067 = G__10079;
count__8120_10068 = G__10080;
i__8121_10069 = G__10081;
continue;
}
} else
{var arg__6534__auto___10082 = cljs.core.first.call(null,seq__8118_10076__$1);a__6533__auto__.push(arg__6534__auto___10082);
{
var G__10083 = cljs.core.next.call(null,seq__8118_10076__$1);
var G__10084 = null;
var G__10085 = 0;
var G__10086 = 0;
seq__8118_10066 = G__10083;
chunk__8119_10067 = G__10084;
count__8120_10068 = G__10085;
i__8121_10069 = G__10086;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.output.apply(null,a__6533__auto__);
};
var output = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return output__delegate.call(this,args__6532__auto__);};
output.cljs$lang$maxFixedArity = 0;
output.cljs$lang$applyTo = (function (arglist__10087){
var args__6532__auto__ = cljs.core.seq(arglist__10087);
return output__delegate(args__6532__auto__);
});
output.cljs$core$IFn$_invoke$arity$variadic = output__delegate;
return output;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.p = (function() { 
var p__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__8126_10088 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__8127_10089 = null;var count__8128_10090 = 0;var i__8129_10091 = 0;while(true){
if((i__8129_10091 < count__8128_10090))
{var arg__6534__auto___10092 = cljs.core._nth.call(null,chunk__8127_10089,i__8129_10091);a__6533__auto__.push(arg__6534__auto___10092);
{
var G__10093 = seq__8126_10088;
var G__10094 = chunk__8127_10089;
var G__10095 = count__8128_10090;
var G__10096 = (i__8129_10091 + 1);
seq__8126_10088 = G__10093;
chunk__8127_10089 = G__10094;
count__8128_10090 = G__10095;
i__8129_10091 = G__10096;
continue;
}
} else
{var temp__4092__auto___10097 = cljs.core.seq.call(null,seq__8126_10088);if(temp__4092__auto___10097)
{var seq__8126_10098__$1 = temp__4092__auto___10097;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8126_10098__$1))
{var c__5632__auto___10099 = cljs.core.chunk_first.call(null,seq__8126_10098__$1);{
var G__10100 = cljs.core.chunk_rest.call(null,seq__8126_10098__$1);
var G__10101 = c__5632__auto___10099;
var G__10102 = cljs.core.count.call(null,c__5632__auto___10099);
var G__10103 = 0;
seq__8126_10088 = G__10100;
chunk__8127_10089 = G__10101;
count__8128_10090 = G__10102;
i__8129_10091 = G__10103;
continue;
}
} else
{var arg__6534__auto___10104 = cljs.core.first.call(null,seq__8126_10098__$1);a__6533__auto__.push(arg__6534__auto___10104);
{
var G__10105 = cljs.core.next.call(null,seq__8126_10098__$1);
var G__10106 = null;
var G__10107 = 0;
var G__10108 = 0;
seq__8126_10088 = G__10105;
chunk__8127_10089 = G__10106;
count__8128_10090 = G__10107;
i__8129_10091 = G__10108;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.p.apply(null,a__6533__auto__);
};
var p = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return p__delegate.call(this,args__6532__auto__);};
p.cljs$lang$maxFixedArity = 0;
p.cljs$lang$applyTo = (function (arglist__10109){
var args__6532__auto__ = cljs.core.seq(arglist__10109);
return p__delegate(args__6532__auto__);
});
p.cljs$core$IFn$_invoke$arity$variadic = p__delegate;
return p;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.param = (function() { 
var param__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__8134_10110 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__8135_10111 = null;var count__8136_10112 = 0;var i__8137_10113 = 0;while(true){
if((i__8137_10113 < count__8136_10112))
{var arg__6534__auto___10114 = cljs.core._nth.call(null,chunk__8135_10111,i__8137_10113);a__6533__auto__.push(arg__6534__auto___10114);
{
var G__10115 = seq__8134_10110;
var G__10116 = chunk__8135_10111;
var G__10117 = count__8136_10112;
var G__10118 = (i__8137_10113 + 1);
seq__8134_10110 = G__10115;
chunk__8135_10111 = G__10116;
count__8136_10112 = G__10117;
i__8137_10113 = G__10118;
continue;
}
} else
{var temp__4092__auto___10119 = cljs.core.seq.call(null,seq__8134_10110);if(temp__4092__auto___10119)
{var seq__8134_10120__$1 = temp__4092__auto___10119;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8134_10120__$1))
{var c__5632__auto___10121 = cljs.core.chunk_first.call(null,seq__8134_10120__$1);{
var G__10122 = cljs.core.chunk_rest.call(null,seq__8134_10120__$1);
var G__10123 = c__5632__auto___10121;
var G__10124 = cljs.core.count.call(null,c__5632__auto___10121);
var G__10125 = 0;
seq__8134_10110 = G__10122;
chunk__8135_10111 = G__10123;
count__8136_10112 = G__10124;
i__8137_10113 = G__10125;
continue;
}
} else
{var arg__6534__auto___10126 = cljs.core.first.call(null,seq__8134_10120__$1);a__6533__auto__.push(arg__6534__auto___10126);
{
var G__10127 = cljs.core.next.call(null,seq__8134_10120__$1);
var G__10128 = null;
var G__10129 = 0;
var G__10130 = 0;
seq__8134_10110 = G__10127;
chunk__8135_10111 = G__10128;
count__8136_10112 = G__10129;
i__8137_10113 = G__10130;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.param.apply(null,a__6533__auto__);
};
var param = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return param__delegate.call(this,args__6532__auto__);};
param.cljs$lang$maxFixedArity = 0;
param.cljs$lang$applyTo = (function (arglist__10131){
var args__6532__auto__ = cljs.core.seq(arglist__10131);
return param__delegate(args__6532__auto__);
});
param.cljs$core$IFn$_invoke$arity$variadic = param__delegate;
return param;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.pre = (function() { 
var pre__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__8142_10132 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__8143_10133 = null;var count__8144_10134 = 0;var i__8145_10135 = 0;while(true){
if((i__8145_10135 < count__8144_10134))
{var arg__6534__auto___10136 = cljs.core._nth.call(null,chunk__8143_10133,i__8145_10135);a__6533__auto__.push(arg__6534__auto___10136);
{
var G__10137 = seq__8142_10132;
var G__10138 = chunk__8143_10133;
var G__10139 = count__8144_10134;
var G__10140 = (i__8145_10135 + 1);
seq__8142_10132 = G__10137;
chunk__8143_10133 = G__10138;
count__8144_10134 = G__10139;
i__8145_10135 = G__10140;
continue;
}
} else
{var temp__4092__auto___10141 = cljs.core.seq.call(null,seq__8142_10132);if(temp__4092__auto___10141)
{var seq__8142_10142__$1 = temp__4092__auto___10141;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8142_10142__$1))
{var c__5632__auto___10143 = cljs.core.chunk_first.call(null,seq__8142_10142__$1);{
var G__10144 = cljs.core.chunk_rest.call(null,seq__8142_10142__$1);
var G__10145 = c__5632__auto___10143;
var G__10146 = cljs.core.count.call(null,c__5632__auto___10143);
var G__10147 = 0;
seq__8142_10132 = G__10144;
chunk__8143_10133 = G__10145;
count__8144_10134 = G__10146;
i__8145_10135 = G__10147;
continue;
}
} else
{var arg__6534__auto___10148 = cljs.core.first.call(null,seq__8142_10142__$1);a__6533__auto__.push(arg__6534__auto___10148);
{
var G__10149 = cljs.core.next.call(null,seq__8142_10142__$1);
var G__10150 = null;
var G__10151 = 0;
var G__10152 = 0;
seq__8142_10132 = G__10149;
chunk__8143_10133 = G__10150;
count__8144_10134 = G__10151;
i__8145_10135 = G__10152;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.pre.apply(null,a__6533__auto__);
};
var pre = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return pre__delegate.call(this,args__6532__auto__);};
pre.cljs$lang$maxFixedArity = 0;
pre.cljs$lang$applyTo = (function (arglist__10153){
var args__6532__auto__ = cljs.core.seq(arglist__10153);
return pre__delegate(args__6532__auto__);
});
pre.cljs$core$IFn$_invoke$arity$variadic = pre__delegate;
return pre;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.progress = (function() { 
var progress__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__8150_10154 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__8151_10155 = null;var count__8152_10156 = 0;var i__8153_10157 = 0;while(true){
if((i__8153_10157 < count__8152_10156))
{var arg__6534__auto___10158 = cljs.core._nth.call(null,chunk__8151_10155,i__8153_10157);a__6533__auto__.push(arg__6534__auto___10158);
{
var G__10159 = seq__8150_10154;
var G__10160 = chunk__8151_10155;
var G__10161 = count__8152_10156;
var G__10162 = (i__8153_10157 + 1);
seq__8150_10154 = G__10159;
chunk__8151_10155 = G__10160;
count__8152_10156 = G__10161;
i__8153_10157 = G__10162;
continue;
}
} else
{var temp__4092__auto___10163 = cljs.core.seq.call(null,seq__8150_10154);if(temp__4092__auto___10163)
{var seq__8150_10164__$1 = temp__4092__auto___10163;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8150_10164__$1))
{var c__5632__auto___10165 = cljs.core.chunk_first.call(null,seq__8150_10164__$1);{
var G__10166 = cljs.core.chunk_rest.call(null,seq__8150_10164__$1);
var G__10167 = c__5632__auto___10165;
var G__10168 = cljs.core.count.call(null,c__5632__auto___10165);
var G__10169 = 0;
seq__8150_10154 = G__10166;
chunk__8151_10155 = G__10167;
count__8152_10156 = G__10168;
i__8153_10157 = G__10169;
continue;
}
} else
{var arg__6534__auto___10170 = cljs.core.first.call(null,seq__8150_10164__$1);a__6533__auto__.push(arg__6534__auto___10170);
{
var G__10171 = cljs.core.next.call(null,seq__8150_10164__$1);
var G__10172 = null;
var G__10173 = 0;
var G__10174 = 0;
seq__8150_10154 = G__10171;
chunk__8151_10155 = G__10172;
count__8152_10156 = G__10173;
i__8153_10157 = G__10174;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.progress.apply(null,a__6533__auto__);
};
var progress = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return progress__delegate.call(this,args__6532__auto__);};
progress.cljs$lang$maxFixedArity = 0;
progress.cljs$lang$applyTo = (function (arglist__10175){
var args__6532__auto__ = cljs.core.seq(arglist__10175);
return progress__delegate(args__6532__auto__);
});
progress.cljs$core$IFn$_invoke$arity$variadic = progress__delegate;
return progress;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.q = (function() { 
var q__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__8158_10176 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__8159_10177 = null;var count__8160_10178 = 0;var i__8161_10179 = 0;while(true){
if((i__8161_10179 < count__8160_10178))
{var arg__6534__auto___10180 = cljs.core._nth.call(null,chunk__8159_10177,i__8161_10179);a__6533__auto__.push(arg__6534__auto___10180);
{
var G__10181 = seq__8158_10176;
var G__10182 = chunk__8159_10177;
var G__10183 = count__8160_10178;
var G__10184 = (i__8161_10179 + 1);
seq__8158_10176 = G__10181;
chunk__8159_10177 = G__10182;
count__8160_10178 = G__10183;
i__8161_10179 = G__10184;
continue;
}
} else
{var temp__4092__auto___10185 = cljs.core.seq.call(null,seq__8158_10176);if(temp__4092__auto___10185)
{var seq__8158_10186__$1 = temp__4092__auto___10185;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8158_10186__$1))
{var c__5632__auto___10187 = cljs.core.chunk_first.call(null,seq__8158_10186__$1);{
var G__10188 = cljs.core.chunk_rest.call(null,seq__8158_10186__$1);
var G__10189 = c__5632__auto___10187;
var G__10190 = cljs.core.count.call(null,c__5632__auto___10187);
var G__10191 = 0;
seq__8158_10176 = G__10188;
chunk__8159_10177 = G__10189;
count__8160_10178 = G__10190;
i__8161_10179 = G__10191;
continue;
}
} else
{var arg__6534__auto___10192 = cljs.core.first.call(null,seq__8158_10186__$1);a__6533__auto__.push(arg__6534__auto___10192);
{
var G__10193 = cljs.core.next.call(null,seq__8158_10186__$1);
var G__10194 = null;
var G__10195 = 0;
var G__10196 = 0;
seq__8158_10176 = G__10193;
chunk__8159_10177 = G__10194;
count__8160_10178 = G__10195;
i__8161_10179 = G__10196;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.q.apply(null,a__6533__auto__);
};
var q = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return q__delegate.call(this,args__6532__auto__);};
q.cljs$lang$maxFixedArity = 0;
q.cljs$lang$applyTo = (function (arglist__10197){
var args__6532__auto__ = cljs.core.seq(arglist__10197);
return q__delegate(args__6532__auto__);
});
q.cljs$core$IFn$_invoke$arity$variadic = q__delegate;
return q;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.rp = (function() { 
var rp__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__8166_10198 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__8167_10199 = null;var count__8168_10200 = 0;var i__8169_10201 = 0;while(true){
if((i__8169_10201 < count__8168_10200))
{var arg__6534__auto___10202 = cljs.core._nth.call(null,chunk__8167_10199,i__8169_10201);a__6533__auto__.push(arg__6534__auto___10202);
{
var G__10203 = seq__8166_10198;
var G__10204 = chunk__8167_10199;
var G__10205 = count__8168_10200;
var G__10206 = (i__8169_10201 + 1);
seq__8166_10198 = G__10203;
chunk__8167_10199 = G__10204;
count__8168_10200 = G__10205;
i__8169_10201 = G__10206;
continue;
}
} else
{var temp__4092__auto___10207 = cljs.core.seq.call(null,seq__8166_10198);if(temp__4092__auto___10207)
{var seq__8166_10208__$1 = temp__4092__auto___10207;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8166_10208__$1))
{var c__5632__auto___10209 = cljs.core.chunk_first.call(null,seq__8166_10208__$1);{
var G__10210 = cljs.core.chunk_rest.call(null,seq__8166_10208__$1);
var G__10211 = c__5632__auto___10209;
var G__10212 = cljs.core.count.call(null,c__5632__auto___10209);
var G__10213 = 0;
seq__8166_10198 = G__10210;
chunk__8167_10199 = G__10211;
count__8168_10200 = G__10212;
i__8169_10201 = G__10213;
continue;
}
} else
{var arg__6534__auto___10214 = cljs.core.first.call(null,seq__8166_10208__$1);a__6533__auto__.push(arg__6534__auto___10214);
{
var G__10215 = cljs.core.next.call(null,seq__8166_10208__$1);
var G__10216 = null;
var G__10217 = 0;
var G__10218 = 0;
seq__8166_10198 = G__10215;
chunk__8167_10199 = G__10216;
count__8168_10200 = G__10217;
i__8169_10201 = G__10218;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.rp.apply(null,a__6533__auto__);
};
var rp = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return rp__delegate.call(this,args__6532__auto__);};
rp.cljs$lang$maxFixedArity = 0;
rp.cljs$lang$applyTo = (function (arglist__10219){
var args__6532__auto__ = cljs.core.seq(arglist__10219);
return rp__delegate(args__6532__auto__);
});
rp.cljs$core$IFn$_invoke$arity$variadic = rp__delegate;
return rp;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.rt = (function() { 
var rt__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__8174_10220 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__8175_10221 = null;var count__8176_10222 = 0;var i__8177_10223 = 0;while(true){
if((i__8177_10223 < count__8176_10222))
{var arg__6534__auto___10224 = cljs.core._nth.call(null,chunk__8175_10221,i__8177_10223);a__6533__auto__.push(arg__6534__auto___10224);
{
var G__10225 = seq__8174_10220;
var G__10226 = chunk__8175_10221;
var G__10227 = count__8176_10222;
var G__10228 = (i__8177_10223 + 1);
seq__8174_10220 = G__10225;
chunk__8175_10221 = G__10226;
count__8176_10222 = G__10227;
i__8177_10223 = G__10228;
continue;
}
} else
{var temp__4092__auto___10229 = cljs.core.seq.call(null,seq__8174_10220);if(temp__4092__auto___10229)
{var seq__8174_10230__$1 = temp__4092__auto___10229;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8174_10230__$1))
{var c__5632__auto___10231 = cljs.core.chunk_first.call(null,seq__8174_10230__$1);{
var G__10232 = cljs.core.chunk_rest.call(null,seq__8174_10230__$1);
var G__10233 = c__5632__auto___10231;
var G__10234 = cljs.core.count.call(null,c__5632__auto___10231);
var G__10235 = 0;
seq__8174_10220 = G__10232;
chunk__8175_10221 = G__10233;
count__8176_10222 = G__10234;
i__8177_10223 = G__10235;
continue;
}
} else
{var arg__6534__auto___10236 = cljs.core.first.call(null,seq__8174_10230__$1);a__6533__auto__.push(arg__6534__auto___10236);
{
var G__10237 = cljs.core.next.call(null,seq__8174_10230__$1);
var G__10238 = null;
var G__10239 = 0;
var G__10240 = 0;
seq__8174_10220 = G__10237;
chunk__8175_10221 = G__10238;
count__8176_10222 = G__10239;
i__8177_10223 = G__10240;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.rt.apply(null,a__6533__auto__);
};
var rt = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return rt__delegate.call(this,args__6532__auto__);};
rt.cljs$lang$maxFixedArity = 0;
rt.cljs$lang$applyTo = (function (arglist__10241){
var args__6532__auto__ = cljs.core.seq(arglist__10241);
return rt__delegate(args__6532__auto__);
});
rt.cljs$core$IFn$_invoke$arity$variadic = rt__delegate;
return rt;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.ruby = (function() { 
var ruby__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__8182_10242 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__8183_10243 = null;var count__8184_10244 = 0;var i__8185_10245 = 0;while(true){
if((i__8185_10245 < count__8184_10244))
{var arg__6534__auto___10246 = cljs.core._nth.call(null,chunk__8183_10243,i__8185_10245);a__6533__auto__.push(arg__6534__auto___10246);
{
var G__10247 = seq__8182_10242;
var G__10248 = chunk__8183_10243;
var G__10249 = count__8184_10244;
var G__10250 = (i__8185_10245 + 1);
seq__8182_10242 = G__10247;
chunk__8183_10243 = G__10248;
count__8184_10244 = G__10249;
i__8185_10245 = G__10250;
continue;
}
} else
{var temp__4092__auto___10251 = cljs.core.seq.call(null,seq__8182_10242);if(temp__4092__auto___10251)
{var seq__8182_10252__$1 = temp__4092__auto___10251;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8182_10252__$1))
{var c__5632__auto___10253 = cljs.core.chunk_first.call(null,seq__8182_10252__$1);{
var G__10254 = cljs.core.chunk_rest.call(null,seq__8182_10252__$1);
var G__10255 = c__5632__auto___10253;
var G__10256 = cljs.core.count.call(null,c__5632__auto___10253);
var G__10257 = 0;
seq__8182_10242 = G__10254;
chunk__8183_10243 = G__10255;
count__8184_10244 = G__10256;
i__8185_10245 = G__10257;
continue;
}
} else
{var arg__6534__auto___10258 = cljs.core.first.call(null,seq__8182_10252__$1);a__6533__auto__.push(arg__6534__auto___10258);
{
var G__10259 = cljs.core.next.call(null,seq__8182_10252__$1);
var G__10260 = null;
var G__10261 = 0;
var G__10262 = 0;
seq__8182_10242 = G__10259;
chunk__8183_10243 = G__10260;
count__8184_10244 = G__10261;
i__8185_10245 = G__10262;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.ruby.apply(null,a__6533__auto__);
};
var ruby = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ruby__delegate.call(this,args__6532__auto__);};
ruby.cljs$lang$maxFixedArity = 0;
ruby.cljs$lang$applyTo = (function (arglist__10263){
var args__6532__auto__ = cljs.core.seq(arglist__10263);
return ruby__delegate(args__6532__auto__);
});
ruby.cljs$core$IFn$_invoke$arity$variadic = ruby__delegate;
return ruby;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.s = (function() { 
var s__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__8190_10264 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__8191_10265 = null;var count__8192_10266 = 0;var i__8193_10267 = 0;while(true){
if((i__8193_10267 < count__8192_10266))
{var arg__6534__auto___10268 = cljs.core._nth.call(null,chunk__8191_10265,i__8193_10267);a__6533__auto__.push(arg__6534__auto___10268);
{
var G__10269 = seq__8190_10264;
var G__10270 = chunk__8191_10265;
var G__10271 = count__8192_10266;
var G__10272 = (i__8193_10267 + 1);
seq__8190_10264 = G__10269;
chunk__8191_10265 = G__10270;
count__8192_10266 = G__10271;
i__8193_10267 = G__10272;
continue;
}
} else
{var temp__4092__auto___10273 = cljs.core.seq.call(null,seq__8190_10264);if(temp__4092__auto___10273)
{var seq__8190_10274__$1 = temp__4092__auto___10273;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8190_10274__$1))
{var c__5632__auto___10275 = cljs.core.chunk_first.call(null,seq__8190_10274__$1);{
var G__10276 = cljs.core.chunk_rest.call(null,seq__8190_10274__$1);
var G__10277 = c__5632__auto___10275;
var G__10278 = cljs.core.count.call(null,c__5632__auto___10275);
var G__10279 = 0;
seq__8190_10264 = G__10276;
chunk__8191_10265 = G__10277;
count__8192_10266 = G__10278;
i__8193_10267 = G__10279;
continue;
}
} else
{var arg__6534__auto___10280 = cljs.core.first.call(null,seq__8190_10274__$1);a__6533__auto__.push(arg__6534__auto___10280);
{
var G__10281 = cljs.core.next.call(null,seq__8190_10274__$1);
var G__10282 = null;
var G__10283 = 0;
var G__10284 = 0;
seq__8190_10264 = G__10281;
chunk__8191_10265 = G__10282;
count__8192_10266 = G__10283;
i__8193_10267 = G__10284;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.s.apply(null,a__6533__auto__);
};
var s = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return s__delegate.call(this,args__6532__auto__);};
s.cljs$lang$maxFixedArity = 0;
s.cljs$lang$applyTo = (function (arglist__10285){
var args__6532__auto__ = cljs.core.seq(arglist__10285);
return s__delegate(args__6532__auto__);
});
s.cljs$core$IFn$_invoke$arity$variadic = s__delegate;
return s;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.samp = (function() { 
var samp__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__8198_10286 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__8199_10287 = null;var count__8200_10288 = 0;var i__8201_10289 = 0;while(true){
if((i__8201_10289 < count__8200_10288))
{var arg__6534__auto___10290 = cljs.core._nth.call(null,chunk__8199_10287,i__8201_10289);a__6533__auto__.push(arg__6534__auto___10290);
{
var G__10291 = seq__8198_10286;
var G__10292 = chunk__8199_10287;
var G__10293 = count__8200_10288;
var G__10294 = (i__8201_10289 + 1);
seq__8198_10286 = G__10291;
chunk__8199_10287 = G__10292;
count__8200_10288 = G__10293;
i__8201_10289 = G__10294;
continue;
}
} else
{var temp__4092__auto___10295 = cljs.core.seq.call(null,seq__8198_10286);if(temp__4092__auto___10295)
{var seq__8198_10296__$1 = temp__4092__auto___10295;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8198_10296__$1))
{var c__5632__auto___10297 = cljs.core.chunk_first.call(null,seq__8198_10296__$1);{
var G__10298 = cljs.core.chunk_rest.call(null,seq__8198_10296__$1);
var G__10299 = c__5632__auto___10297;
var G__10300 = cljs.core.count.call(null,c__5632__auto___10297);
var G__10301 = 0;
seq__8198_10286 = G__10298;
chunk__8199_10287 = G__10299;
count__8200_10288 = G__10300;
i__8201_10289 = G__10301;
continue;
}
} else
{var arg__6534__auto___10302 = cljs.core.first.call(null,seq__8198_10296__$1);a__6533__auto__.push(arg__6534__auto___10302);
{
var G__10303 = cljs.core.next.call(null,seq__8198_10296__$1);
var G__10304 = null;
var G__10305 = 0;
var G__10306 = 0;
seq__8198_10286 = G__10303;
chunk__8199_10287 = G__10304;
count__8200_10288 = G__10305;
i__8201_10289 = G__10306;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.samp.apply(null,a__6533__auto__);
};
var samp = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return samp__delegate.call(this,args__6532__auto__);};
samp.cljs$lang$maxFixedArity = 0;
samp.cljs$lang$applyTo = (function (arglist__10307){
var args__6532__auto__ = cljs.core.seq(arglist__10307);
return samp__delegate(args__6532__auto__);
});
samp.cljs$core$IFn$_invoke$arity$variadic = samp__delegate;
return samp;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.script = (function() { 
var script__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__8206_10308 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__8207_10309 = null;var count__8208_10310 = 0;var i__8209_10311 = 0;while(true){
if((i__8209_10311 < count__8208_10310))
{var arg__6534__auto___10312 = cljs.core._nth.call(null,chunk__8207_10309,i__8209_10311);a__6533__auto__.push(arg__6534__auto___10312);
{
var G__10313 = seq__8206_10308;
var G__10314 = chunk__8207_10309;
var G__10315 = count__8208_10310;
var G__10316 = (i__8209_10311 + 1);
seq__8206_10308 = G__10313;
chunk__8207_10309 = G__10314;
count__8208_10310 = G__10315;
i__8209_10311 = G__10316;
continue;
}
} else
{var temp__4092__auto___10317 = cljs.core.seq.call(null,seq__8206_10308);if(temp__4092__auto___10317)
{var seq__8206_10318__$1 = temp__4092__auto___10317;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8206_10318__$1))
{var c__5632__auto___10319 = cljs.core.chunk_first.call(null,seq__8206_10318__$1);{
var G__10320 = cljs.core.chunk_rest.call(null,seq__8206_10318__$1);
var G__10321 = c__5632__auto___10319;
var G__10322 = cljs.core.count.call(null,c__5632__auto___10319);
var G__10323 = 0;
seq__8206_10308 = G__10320;
chunk__8207_10309 = G__10321;
count__8208_10310 = G__10322;
i__8209_10311 = G__10323;
continue;
}
} else
{var arg__6534__auto___10324 = cljs.core.first.call(null,seq__8206_10318__$1);a__6533__auto__.push(arg__6534__auto___10324);
{
var G__10325 = cljs.core.next.call(null,seq__8206_10318__$1);
var G__10326 = null;
var G__10327 = 0;
var G__10328 = 0;
seq__8206_10308 = G__10325;
chunk__8207_10309 = G__10326;
count__8208_10310 = G__10327;
i__8209_10311 = G__10328;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.script.apply(null,a__6533__auto__);
};
var script = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return script__delegate.call(this,args__6532__auto__);};
script.cljs$lang$maxFixedArity = 0;
script.cljs$lang$applyTo = (function (arglist__10329){
var args__6532__auto__ = cljs.core.seq(arglist__10329);
return script__delegate(args__6532__auto__);
});
script.cljs$core$IFn$_invoke$arity$variadic = script__delegate;
return script;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.section = (function() { 
var section__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__8214_10330 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__8215_10331 = null;var count__8216_10332 = 0;var i__8217_10333 = 0;while(true){
if((i__8217_10333 < count__8216_10332))
{var arg__6534__auto___10334 = cljs.core._nth.call(null,chunk__8215_10331,i__8217_10333);a__6533__auto__.push(arg__6534__auto___10334);
{
var G__10335 = seq__8214_10330;
var G__10336 = chunk__8215_10331;
var G__10337 = count__8216_10332;
var G__10338 = (i__8217_10333 + 1);
seq__8214_10330 = G__10335;
chunk__8215_10331 = G__10336;
count__8216_10332 = G__10337;
i__8217_10333 = G__10338;
continue;
}
} else
{var temp__4092__auto___10339 = cljs.core.seq.call(null,seq__8214_10330);if(temp__4092__auto___10339)
{var seq__8214_10340__$1 = temp__4092__auto___10339;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8214_10340__$1))
{var c__5632__auto___10341 = cljs.core.chunk_first.call(null,seq__8214_10340__$1);{
var G__10342 = cljs.core.chunk_rest.call(null,seq__8214_10340__$1);
var G__10343 = c__5632__auto___10341;
var G__10344 = cljs.core.count.call(null,c__5632__auto___10341);
var G__10345 = 0;
seq__8214_10330 = G__10342;
chunk__8215_10331 = G__10343;
count__8216_10332 = G__10344;
i__8217_10333 = G__10345;
continue;
}
} else
{var arg__6534__auto___10346 = cljs.core.first.call(null,seq__8214_10340__$1);a__6533__auto__.push(arg__6534__auto___10346);
{
var G__10347 = cljs.core.next.call(null,seq__8214_10340__$1);
var G__10348 = null;
var G__10349 = 0;
var G__10350 = 0;
seq__8214_10330 = G__10347;
chunk__8215_10331 = G__10348;
count__8216_10332 = G__10349;
i__8217_10333 = G__10350;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.section.apply(null,a__6533__auto__);
};
var section = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return section__delegate.call(this,args__6532__auto__);};
section.cljs$lang$maxFixedArity = 0;
section.cljs$lang$applyTo = (function (arglist__10351){
var args__6532__auto__ = cljs.core.seq(arglist__10351);
return section__delegate(args__6532__auto__);
});
section.cljs$core$IFn$_invoke$arity$variadic = section__delegate;
return section;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.select = (function() { 
var select__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__8222_10352 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__8223_10353 = null;var count__8224_10354 = 0;var i__8225_10355 = 0;while(true){
if((i__8225_10355 < count__8224_10354))
{var arg__6534__auto___10356 = cljs.core._nth.call(null,chunk__8223_10353,i__8225_10355);a__6533__auto__.push(arg__6534__auto___10356);
{
var G__10357 = seq__8222_10352;
var G__10358 = chunk__8223_10353;
var G__10359 = count__8224_10354;
var G__10360 = (i__8225_10355 + 1);
seq__8222_10352 = G__10357;
chunk__8223_10353 = G__10358;
count__8224_10354 = G__10359;
i__8225_10355 = G__10360;
continue;
}
} else
{var temp__4092__auto___10361 = cljs.core.seq.call(null,seq__8222_10352);if(temp__4092__auto___10361)
{var seq__8222_10362__$1 = temp__4092__auto___10361;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8222_10362__$1))
{var c__5632__auto___10363 = cljs.core.chunk_first.call(null,seq__8222_10362__$1);{
var G__10364 = cljs.core.chunk_rest.call(null,seq__8222_10362__$1);
var G__10365 = c__5632__auto___10363;
var G__10366 = cljs.core.count.call(null,c__5632__auto___10363);
var G__10367 = 0;
seq__8222_10352 = G__10364;
chunk__8223_10353 = G__10365;
count__8224_10354 = G__10366;
i__8225_10355 = G__10367;
continue;
}
} else
{var arg__6534__auto___10368 = cljs.core.first.call(null,seq__8222_10362__$1);a__6533__auto__.push(arg__6534__auto___10368);
{
var G__10369 = cljs.core.next.call(null,seq__8222_10362__$1);
var G__10370 = null;
var G__10371 = 0;
var G__10372 = 0;
seq__8222_10352 = G__10369;
chunk__8223_10353 = G__10370;
count__8224_10354 = G__10371;
i__8225_10355 = G__10372;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.select.apply(null,a__6533__auto__);
};
var select = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return select__delegate.call(this,args__6532__auto__);};
select.cljs$lang$maxFixedArity = 0;
select.cljs$lang$applyTo = (function (arglist__10373){
var args__6532__auto__ = cljs.core.seq(arglist__10373);
return select__delegate(args__6532__auto__);
});
select.cljs$core$IFn$_invoke$arity$variadic = select__delegate;
return select;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.small = (function() { 
var small__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__8230_10374 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__8231_10375 = null;var count__8232_10376 = 0;var i__8233_10377 = 0;while(true){
if((i__8233_10377 < count__8232_10376))
{var arg__6534__auto___10378 = cljs.core._nth.call(null,chunk__8231_10375,i__8233_10377);a__6533__auto__.push(arg__6534__auto___10378);
{
var G__10379 = seq__8230_10374;
var G__10380 = chunk__8231_10375;
var G__10381 = count__8232_10376;
var G__10382 = (i__8233_10377 + 1);
seq__8230_10374 = G__10379;
chunk__8231_10375 = G__10380;
count__8232_10376 = G__10381;
i__8233_10377 = G__10382;
continue;
}
} else
{var temp__4092__auto___10383 = cljs.core.seq.call(null,seq__8230_10374);if(temp__4092__auto___10383)
{var seq__8230_10384__$1 = temp__4092__auto___10383;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8230_10384__$1))
{var c__5632__auto___10385 = cljs.core.chunk_first.call(null,seq__8230_10384__$1);{
var G__10386 = cljs.core.chunk_rest.call(null,seq__8230_10384__$1);
var G__10387 = c__5632__auto___10385;
var G__10388 = cljs.core.count.call(null,c__5632__auto___10385);
var G__10389 = 0;
seq__8230_10374 = G__10386;
chunk__8231_10375 = G__10387;
count__8232_10376 = G__10388;
i__8233_10377 = G__10389;
continue;
}
} else
{var arg__6534__auto___10390 = cljs.core.first.call(null,seq__8230_10384__$1);a__6533__auto__.push(arg__6534__auto___10390);
{
var G__10391 = cljs.core.next.call(null,seq__8230_10384__$1);
var G__10392 = null;
var G__10393 = 0;
var G__10394 = 0;
seq__8230_10374 = G__10391;
chunk__8231_10375 = G__10392;
count__8232_10376 = G__10393;
i__8233_10377 = G__10394;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.small.apply(null,a__6533__auto__);
};
var small = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return small__delegate.call(this,args__6532__auto__);};
small.cljs$lang$maxFixedArity = 0;
small.cljs$lang$applyTo = (function (arglist__10395){
var args__6532__auto__ = cljs.core.seq(arglist__10395);
return small__delegate(args__6532__auto__);
});
small.cljs$core$IFn$_invoke$arity$variadic = small__delegate;
return small;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.source = (function() { 
var source__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__8238_10396 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__8239_10397 = null;var count__8240_10398 = 0;var i__8241_10399 = 0;while(true){
if((i__8241_10399 < count__8240_10398))
{var arg__6534__auto___10400 = cljs.core._nth.call(null,chunk__8239_10397,i__8241_10399);a__6533__auto__.push(arg__6534__auto___10400);
{
var G__10401 = seq__8238_10396;
var G__10402 = chunk__8239_10397;
var G__10403 = count__8240_10398;
var G__10404 = (i__8241_10399 + 1);
seq__8238_10396 = G__10401;
chunk__8239_10397 = G__10402;
count__8240_10398 = G__10403;
i__8241_10399 = G__10404;
continue;
}
} else
{var temp__4092__auto___10405 = cljs.core.seq.call(null,seq__8238_10396);if(temp__4092__auto___10405)
{var seq__8238_10406__$1 = temp__4092__auto___10405;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8238_10406__$1))
{var c__5632__auto___10407 = cljs.core.chunk_first.call(null,seq__8238_10406__$1);{
var G__10408 = cljs.core.chunk_rest.call(null,seq__8238_10406__$1);
var G__10409 = c__5632__auto___10407;
var G__10410 = cljs.core.count.call(null,c__5632__auto___10407);
var G__10411 = 0;
seq__8238_10396 = G__10408;
chunk__8239_10397 = G__10409;
count__8240_10398 = G__10410;
i__8241_10399 = G__10411;
continue;
}
} else
{var arg__6534__auto___10412 = cljs.core.first.call(null,seq__8238_10406__$1);a__6533__auto__.push(arg__6534__auto___10412);
{
var G__10413 = cljs.core.next.call(null,seq__8238_10406__$1);
var G__10414 = null;
var G__10415 = 0;
var G__10416 = 0;
seq__8238_10396 = G__10413;
chunk__8239_10397 = G__10414;
count__8240_10398 = G__10415;
i__8241_10399 = G__10416;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.source.apply(null,a__6533__auto__);
};
var source = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return source__delegate.call(this,args__6532__auto__);};
source.cljs$lang$maxFixedArity = 0;
source.cljs$lang$applyTo = (function (arglist__10417){
var args__6532__auto__ = cljs.core.seq(arglist__10417);
return source__delegate(args__6532__auto__);
});
source.cljs$core$IFn$_invoke$arity$variadic = source__delegate;
return source;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.span = (function() { 
var span__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__8246_10418 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__8247_10419 = null;var count__8248_10420 = 0;var i__8249_10421 = 0;while(true){
if((i__8249_10421 < count__8248_10420))
{var arg__6534__auto___10422 = cljs.core._nth.call(null,chunk__8247_10419,i__8249_10421);a__6533__auto__.push(arg__6534__auto___10422);
{
var G__10423 = seq__8246_10418;
var G__10424 = chunk__8247_10419;
var G__10425 = count__8248_10420;
var G__10426 = (i__8249_10421 + 1);
seq__8246_10418 = G__10423;
chunk__8247_10419 = G__10424;
count__8248_10420 = G__10425;
i__8249_10421 = G__10426;
continue;
}
} else
{var temp__4092__auto___10427 = cljs.core.seq.call(null,seq__8246_10418);if(temp__4092__auto___10427)
{var seq__8246_10428__$1 = temp__4092__auto___10427;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8246_10428__$1))
{var c__5632__auto___10429 = cljs.core.chunk_first.call(null,seq__8246_10428__$1);{
var G__10430 = cljs.core.chunk_rest.call(null,seq__8246_10428__$1);
var G__10431 = c__5632__auto___10429;
var G__10432 = cljs.core.count.call(null,c__5632__auto___10429);
var G__10433 = 0;
seq__8246_10418 = G__10430;
chunk__8247_10419 = G__10431;
count__8248_10420 = G__10432;
i__8249_10421 = G__10433;
continue;
}
} else
{var arg__6534__auto___10434 = cljs.core.first.call(null,seq__8246_10428__$1);a__6533__auto__.push(arg__6534__auto___10434);
{
var G__10435 = cljs.core.next.call(null,seq__8246_10428__$1);
var G__10436 = null;
var G__10437 = 0;
var G__10438 = 0;
seq__8246_10418 = G__10435;
chunk__8247_10419 = G__10436;
count__8248_10420 = G__10437;
i__8249_10421 = G__10438;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.span.apply(null,a__6533__auto__);
};
var span = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return span__delegate.call(this,args__6532__auto__);};
span.cljs$lang$maxFixedArity = 0;
span.cljs$lang$applyTo = (function (arglist__10439){
var args__6532__auto__ = cljs.core.seq(arglist__10439);
return span__delegate(args__6532__auto__);
});
span.cljs$core$IFn$_invoke$arity$variadic = span__delegate;
return span;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.strong = (function() { 
var strong__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__8254_10440 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__8255_10441 = null;var count__8256_10442 = 0;var i__8257_10443 = 0;while(true){
if((i__8257_10443 < count__8256_10442))
{var arg__6534__auto___10444 = cljs.core._nth.call(null,chunk__8255_10441,i__8257_10443);a__6533__auto__.push(arg__6534__auto___10444);
{
var G__10445 = seq__8254_10440;
var G__10446 = chunk__8255_10441;
var G__10447 = count__8256_10442;
var G__10448 = (i__8257_10443 + 1);
seq__8254_10440 = G__10445;
chunk__8255_10441 = G__10446;
count__8256_10442 = G__10447;
i__8257_10443 = G__10448;
continue;
}
} else
{var temp__4092__auto___10449 = cljs.core.seq.call(null,seq__8254_10440);if(temp__4092__auto___10449)
{var seq__8254_10450__$1 = temp__4092__auto___10449;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8254_10450__$1))
{var c__5632__auto___10451 = cljs.core.chunk_first.call(null,seq__8254_10450__$1);{
var G__10452 = cljs.core.chunk_rest.call(null,seq__8254_10450__$1);
var G__10453 = c__5632__auto___10451;
var G__10454 = cljs.core.count.call(null,c__5632__auto___10451);
var G__10455 = 0;
seq__8254_10440 = G__10452;
chunk__8255_10441 = G__10453;
count__8256_10442 = G__10454;
i__8257_10443 = G__10455;
continue;
}
} else
{var arg__6534__auto___10456 = cljs.core.first.call(null,seq__8254_10450__$1);a__6533__auto__.push(arg__6534__auto___10456);
{
var G__10457 = cljs.core.next.call(null,seq__8254_10450__$1);
var G__10458 = null;
var G__10459 = 0;
var G__10460 = 0;
seq__8254_10440 = G__10457;
chunk__8255_10441 = G__10458;
count__8256_10442 = G__10459;
i__8257_10443 = G__10460;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.strong.apply(null,a__6533__auto__);
};
var strong = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return strong__delegate.call(this,args__6532__auto__);};
strong.cljs$lang$maxFixedArity = 0;
strong.cljs$lang$applyTo = (function (arglist__10461){
var args__6532__auto__ = cljs.core.seq(arglist__10461);
return strong__delegate(args__6532__auto__);
});
strong.cljs$core$IFn$_invoke$arity$variadic = strong__delegate;
return strong;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.style = (function() { 
var style__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__8262_10462 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__8263_10463 = null;var count__8264_10464 = 0;var i__8265_10465 = 0;while(true){
if((i__8265_10465 < count__8264_10464))
{var arg__6534__auto___10466 = cljs.core._nth.call(null,chunk__8263_10463,i__8265_10465);a__6533__auto__.push(arg__6534__auto___10466);
{
var G__10467 = seq__8262_10462;
var G__10468 = chunk__8263_10463;
var G__10469 = count__8264_10464;
var G__10470 = (i__8265_10465 + 1);
seq__8262_10462 = G__10467;
chunk__8263_10463 = G__10468;
count__8264_10464 = G__10469;
i__8265_10465 = G__10470;
continue;
}
} else
{var temp__4092__auto___10471 = cljs.core.seq.call(null,seq__8262_10462);if(temp__4092__auto___10471)
{var seq__8262_10472__$1 = temp__4092__auto___10471;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8262_10472__$1))
{var c__5632__auto___10473 = cljs.core.chunk_first.call(null,seq__8262_10472__$1);{
var G__10474 = cljs.core.chunk_rest.call(null,seq__8262_10472__$1);
var G__10475 = c__5632__auto___10473;
var G__10476 = cljs.core.count.call(null,c__5632__auto___10473);
var G__10477 = 0;
seq__8262_10462 = G__10474;
chunk__8263_10463 = G__10475;
count__8264_10464 = G__10476;
i__8265_10465 = G__10477;
continue;
}
} else
{var arg__6534__auto___10478 = cljs.core.first.call(null,seq__8262_10472__$1);a__6533__auto__.push(arg__6534__auto___10478);
{
var G__10479 = cljs.core.next.call(null,seq__8262_10472__$1);
var G__10480 = null;
var G__10481 = 0;
var G__10482 = 0;
seq__8262_10462 = G__10479;
chunk__8263_10463 = G__10480;
count__8264_10464 = G__10481;
i__8265_10465 = G__10482;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.style.apply(null,a__6533__auto__);
};
var style = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return style__delegate.call(this,args__6532__auto__);};
style.cljs$lang$maxFixedArity = 0;
style.cljs$lang$applyTo = (function (arglist__10483){
var args__6532__auto__ = cljs.core.seq(arglist__10483);
return style__delegate(args__6532__auto__);
});
style.cljs$core$IFn$_invoke$arity$variadic = style__delegate;
return style;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.sub = (function() { 
var sub__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__8270_10484 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__8271_10485 = null;var count__8272_10486 = 0;var i__8273_10487 = 0;while(true){
if((i__8273_10487 < count__8272_10486))
{var arg__6534__auto___10488 = cljs.core._nth.call(null,chunk__8271_10485,i__8273_10487);a__6533__auto__.push(arg__6534__auto___10488);
{
var G__10489 = seq__8270_10484;
var G__10490 = chunk__8271_10485;
var G__10491 = count__8272_10486;
var G__10492 = (i__8273_10487 + 1);
seq__8270_10484 = G__10489;
chunk__8271_10485 = G__10490;
count__8272_10486 = G__10491;
i__8273_10487 = G__10492;
continue;
}
} else
{var temp__4092__auto___10493 = cljs.core.seq.call(null,seq__8270_10484);if(temp__4092__auto___10493)
{var seq__8270_10494__$1 = temp__4092__auto___10493;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8270_10494__$1))
{var c__5632__auto___10495 = cljs.core.chunk_first.call(null,seq__8270_10494__$1);{
var G__10496 = cljs.core.chunk_rest.call(null,seq__8270_10494__$1);
var G__10497 = c__5632__auto___10495;
var G__10498 = cljs.core.count.call(null,c__5632__auto___10495);
var G__10499 = 0;
seq__8270_10484 = G__10496;
chunk__8271_10485 = G__10497;
count__8272_10486 = G__10498;
i__8273_10487 = G__10499;
continue;
}
} else
{var arg__6534__auto___10500 = cljs.core.first.call(null,seq__8270_10494__$1);a__6533__auto__.push(arg__6534__auto___10500);
{
var G__10501 = cljs.core.next.call(null,seq__8270_10494__$1);
var G__10502 = null;
var G__10503 = 0;
var G__10504 = 0;
seq__8270_10484 = G__10501;
chunk__8271_10485 = G__10502;
count__8272_10486 = G__10503;
i__8273_10487 = G__10504;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.sub.apply(null,a__6533__auto__);
};
var sub = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return sub__delegate.call(this,args__6532__auto__);};
sub.cljs$lang$maxFixedArity = 0;
sub.cljs$lang$applyTo = (function (arglist__10505){
var args__6532__auto__ = cljs.core.seq(arglist__10505);
return sub__delegate(args__6532__auto__);
});
sub.cljs$core$IFn$_invoke$arity$variadic = sub__delegate;
return sub;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.summary = (function() { 
var summary__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__8278_10506 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__8279_10507 = null;var count__8280_10508 = 0;var i__8281_10509 = 0;while(true){
if((i__8281_10509 < count__8280_10508))
{var arg__6534__auto___10510 = cljs.core._nth.call(null,chunk__8279_10507,i__8281_10509);a__6533__auto__.push(arg__6534__auto___10510);
{
var G__10511 = seq__8278_10506;
var G__10512 = chunk__8279_10507;
var G__10513 = count__8280_10508;
var G__10514 = (i__8281_10509 + 1);
seq__8278_10506 = G__10511;
chunk__8279_10507 = G__10512;
count__8280_10508 = G__10513;
i__8281_10509 = G__10514;
continue;
}
} else
{var temp__4092__auto___10515 = cljs.core.seq.call(null,seq__8278_10506);if(temp__4092__auto___10515)
{var seq__8278_10516__$1 = temp__4092__auto___10515;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8278_10516__$1))
{var c__5632__auto___10517 = cljs.core.chunk_first.call(null,seq__8278_10516__$1);{
var G__10518 = cljs.core.chunk_rest.call(null,seq__8278_10516__$1);
var G__10519 = c__5632__auto___10517;
var G__10520 = cljs.core.count.call(null,c__5632__auto___10517);
var G__10521 = 0;
seq__8278_10506 = G__10518;
chunk__8279_10507 = G__10519;
count__8280_10508 = G__10520;
i__8281_10509 = G__10521;
continue;
}
} else
{var arg__6534__auto___10522 = cljs.core.first.call(null,seq__8278_10516__$1);a__6533__auto__.push(arg__6534__auto___10522);
{
var G__10523 = cljs.core.next.call(null,seq__8278_10516__$1);
var G__10524 = null;
var G__10525 = 0;
var G__10526 = 0;
seq__8278_10506 = G__10523;
chunk__8279_10507 = G__10524;
count__8280_10508 = G__10525;
i__8281_10509 = G__10526;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.summary.apply(null,a__6533__auto__);
};
var summary = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return summary__delegate.call(this,args__6532__auto__);};
summary.cljs$lang$maxFixedArity = 0;
summary.cljs$lang$applyTo = (function (arglist__10527){
var args__6532__auto__ = cljs.core.seq(arglist__10527);
return summary__delegate(args__6532__auto__);
});
summary.cljs$core$IFn$_invoke$arity$variadic = summary__delegate;
return summary;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.sup = (function() { 
var sup__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__8286_10528 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__8287_10529 = null;var count__8288_10530 = 0;var i__8289_10531 = 0;while(true){
if((i__8289_10531 < count__8288_10530))
{var arg__6534__auto___10532 = cljs.core._nth.call(null,chunk__8287_10529,i__8289_10531);a__6533__auto__.push(arg__6534__auto___10532);
{
var G__10533 = seq__8286_10528;
var G__10534 = chunk__8287_10529;
var G__10535 = count__8288_10530;
var G__10536 = (i__8289_10531 + 1);
seq__8286_10528 = G__10533;
chunk__8287_10529 = G__10534;
count__8288_10530 = G__10535;
i__8289_10531 = G__10536;
continue;
}
} else
{var temp__4092__auto___10537 = cljs.core.seq.call(null,seq__8286_10528);if(temp__4092__auto___10537)
{var seq__8286_10538__$1 = temp__4092__auto___10537;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8286_10538__$1))
{var c__5632__auto___10539 = cljs.core.chunk_first.call(null,seq__8286_10538__$1);{
var G__10540 = cljs.core.chunk_rest.call(null,seq__8286_10538__$1);
var G__10541 = c__5632__auto___10539;
var G__10542 = cljs.core.count.call(null,c__5632__auto___10539);
var G__10543 = 0;
seq__8286_10528 = G__10540;
chunk__8287_10529 = G__10541;
count__8288_10530 = G__10542;
i__8289_10531 = G__10543;
continue;
}
} else
{var arg__6534__auto___10544 = cljs.core.first.call(null,seq__8286_10538__$1);a__6533__auto__.push(arg__6534__auto___10544);
{
var G__10545 = cljs.core.next.call(null,seq__8286_10538__$1);
var G__10546 = null;
var G__10547 = 0;
var G__10548 = 0;
seq__8286_10528 = G__10545;
chunk__8287_10529 = G__10546;
count__8288_10530 = G__10547;
i__8289_10531 = G__10548;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.sup.apply(null,a__6533__auto__);
};
var sup = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return sup__delegate.call(this,args__6532__auto__);};
sup.cljs$lang$maxFixedArity = 0;
sup.cljs$lang$applyTo = (function (arglist__10549){
var args__6532__auto__ = cljs.core.seq(arglist__10549);
return sup__delegate(args__6532__auto__);
});
sup.cljs$core$IFn$_invoke$arity$variadic = sup__delegate;
return sup;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.table = (function() { 
var table__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__8294_10550 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__8295_10551 = null;var count__8296_10552 = 0;var i__8297_10553 = 0;while(true){
if((i__8297_10553 < count__8296_10552))
{var arg__6534__auto___10554 = cljs.core._nth.call(null,chunk__8295_10551,i__8297_10553);a__6533__auto__.push(arg__6534__auto___10554);
{
var G__10555 = seq__8294_10550;
var G__10556 = chunk__8295_10551;
var G__10557 = count__8296_10552;
var G__10558 = (i__8297_10553 + 1);
seq__8294_10550 = G__10555;
chunk__8295_10551 = G__10556;
count__8296_10552 = G__10557;
i__8297_10553 = G__10558;
continue;
}
} else
{var temp__4092__auto___10559 = cljs.core.seq.call(null,seq__8294_10550);if(temp__4092__auto___10559)
{var seq__8294_10560__$1 = temp__4092__auto___10559;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8294_10560__$1))
{var c__5632__auto___10561 = cljs.core.chunk_first.call(null,seq__8294_10560__$1);{
var G__10562 = cljs.core.chunk_rest.call(null,seq__8294_10560__$1);
var G__10563 = c__5632__auto___10561;
var G__10564 = cljs.core.count.call(null,c__5632__auto___10561);
var G__10565 = 0;
seq__8294_10550 = G__10562;
chunk__8295_10551 = G__10563;
count__8296_10552 = G__10564;
i__8297_10553 = G__10565;
continue;
}
} else
{var arg__6534__auto___10566 = cljs.core.first.call(null,seq__8294_10560__$1);a__6533__auto__.push(arg__6534__auto___10566);
{
var G__10567 = cljs.core.next.call(null,seq__8294_10560__$1);
var G__10568 = null;
var G__10569 = 0;
var G__10570 = 0;
seq__8294_10550 = G__10567;
chunk__8295_10551 = G__10568;
count__8296_10552 = G__10569;
i__8297_10553 = G__10570;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.table.apply(null,a__6533__auto__);
};
var table = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return table__delegate.call(this,args__6532__auto__);};
table.cljs$lang$maxFixedArity = 0;
table.cljs$lang$applyTo = (function (arglist__10571){
var args__6532__auto__ = cljs.core.seq(arglist__10571);
return table__delegate(args__6532__auto__);
});
table.cljs$core$IFn$_invoke$arity$variadic = table__delegate;
return table;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.tbody = (function() { 
var tbody__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__8302_10572 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__8303_10573 = null;var count__8304_10574 = 0;var i__8305_10575 = 0;while(true){
if((i__8305_10575 < count__8304_10574))
{var arg__6534__auto___10576 = cljs.core._nth.call(null,chunk__8303_10573,i__8305_10575);a__6533__auto__.push(arg__6534__auto___10576);
{
var G__10577 = seq__8302_10572;
var G__10578 = chunk__8303_10573;
var G__10579 = count__8304_10574;
var G__10580 = (i__8305_10575 + 1);
seq__8302_10572 = G__10577;
chunk__8303_10573 = G__10578;
count__8304_10574 = G__10579;
i__8305_10575 = G__10580;
continue;
}
} else
{var temp__4092__auto___10581 = cljs.core.seq.call(null,seq__8302_10572);if(temp__4092__auto___10581)
{var seq__8302_10582__$1 = temp__4092__auto___10581;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8302_10582__$1))
{var c__5632__auto___10583 = cljs.core.chunk_first.call(null,seq__8302_10582__$1);{
var G__10584 = cljs.core.chunk_rest.call(null,seq__8302_10582__$1);
var G__10585 = c__5632__auto___10583;
var G__10586 = cljs.core.count.call(null,c__5632__auto___10583);
var G__10587 = 0;
seq__8302_10572 = G__10584;
chunk__8303_10573 = G__10585;
count__8304_10574 = G__10586;
i__8305_10575 = G__10587;
continue;
}
} else
{var arg__6534__auto___10588 = cljs.core.first.call(null,seq__8302_10582__$1);a__6533__auto__.push(arg__6534__auto___10588);
{
var G__10589 = cljs.core.next.call(null,seq__8302_10582__$1);
var G__10590 = null;
var G__10591 = 0;
var G__10592 = 0;
seq__8302_10572 = G__10589;
chunk__8303_10573 = G__10590;
count__8304_10574 = G__10591;
i__8305_10575 = G__10592;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.tbody.apply(null,a__6533__auto__);
};
var tbody = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return tbody__delegate.call(this,args__6532__auto__);};
tbody.cljs$lang$maxFixedArity = 0;
tbody.cljs$lang$applyTo = (function (arglist__10593){
var args__6532__auto__ = cljs.core.seq(arglist__10593);
return tbody__delegate(args__6532__auto__);
});
tbody.cljs$core$IFn$_invoke$arity$variadic = tbody__delegate;
return tbody;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.td = (function() { 
var td__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__8310_10594 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__8311_10595 = null;var count__8312_10596 = 0;var i__8313_10597 = 0;while(true){
if((i__8313_10597 < count__8312_10596))
{var arg__6534__auto___10598 = cljs.core._nth.call(null,chunk__8311_10595,i__8313_10597);a__6533__auto__.push(arg__6534__auto___10598);
{
var G__10599 = seq__8310_10594;
var G__10600 = chunk__8311_10595;
var G__10601 = count__8312_10596;
var G__10602 = (i__8313_10597 + 1);
seq__8310_10594 = G__10599;
chunk__8311_10595 = G__10600;
count__8312_10596 = G__10601;
i__8313_10597 = G__10602;
continue;
}
} else
{var temp__4092__auto___10603 = cljs.core.seq.call(null,seq__8310_10594);if(temp__4092__auto___10603)
{var seq__8310_10604__$1 = temp__4092__auto___10603;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8310_10604__$1))
{var c__5632__auto___10605 = cljs.core.chunk_first.call(null,seq__8310_10604__$1);{
var G__10606 = cljs.core.chunk_rest.call(null,seq__8310_10604__$1);
var G__10607 = c__5632__auto___10605;
var G__10608 = cljs.core.count.call(null,c__5632__auto___10605);
var G__10609 = 0;
seq__8310_10594 = G__10606;
chunk__8311_10595 = G__10607;
count__8312_10596 = G__10608;
i__8313_10597 = G__10609;
continue;
}
} else
{var arg__6534__auto___10610 = cljs.core.first.call(null,seq__8310_10604__$1);a__6533__auto__.push(arg__6534__auto___10610);
{
var G__10611 = cljs.core.next.call(null,seq__8310_10604__$1);
var G__10612 = null;
var G__10613 = 0;
var G__10614 = 0;
seq__8310_10594 = G__10611;
chunk__8311_10595 = G__10612;
count__8312_10596 = G__10613;
i__8313_10597 = G__10614;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.td.apply(null,a__6533__auto__);
};
var td = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return td__delegate.call(this,args__6532__auto__);};
td.cljs$lang$maxFixedArity = 0;
td.cljs$lang$applyTo = (function (arglist__10615){
var args__6532__auto__ = cljs.core.seq(arglist__10615);
return td__delegate(args__6532__auto__);
});
td.cljs$core$IFn$_invoke$arity$variadic = td__delegate;
return td;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.textarea = (function() { 
var textarea__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__8318_10616 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__8319_10617 = null;var count__8320_10618 = 0;var i__8321_10619 = 0;while(true){
if((i__8321_10619 < count__8320_10618))
{var arg__6534__auto___10620 = cljs.core._nth.call(null,chunk__8319_10617,i__8321_10619);a__6533__auto__.push(arg__6534__auto___10620);
{
var G__10621 = seq__8318_10616;
var G__10622 = chunk__8319_10617;
var G__10623 = count__8320_10618;
var G__10624 = (i__8321_10619 + 1);
seq__8318_10616 = G__10621;
chunk__8319_10617 = G__10622;
count__8320_10618 = G__10623;
i__8321_10619 = G__10624;
continue;
}
} else
{var temp__4092__auto___10625 = cljs.core.seq.call(null,seq__8318_10616);if(temp__4092__auto___10625)
{var seq__8318_10626__$1 = temp__4092__auto___10625;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8318_10626__$1))
{var c__5632__auto___10627 = cljs.core.chunk_first.call(null,seq__8318_10626__$1);{
var G__10628 = cljs.core.chunk_rest.call(null,seq__8318_10626__$1);
var G__10629 = c__5632__auto___10627;
var G__10630 = cljs.core.count.call(null,c__5632__auto___10627);
var G__10631 = 0;
seq__8318_10616 = G__10628;
chunk__8319_10617 = G__10629;
count__8320_10618 = G__10630;
i__8321_10619 = G__10631;
continue;
}
} else
{var arg__6534__auto___10632 = cljs.core.first.call(null,seq__8318_10626__$1);a__6533__auto__.push(arg__6534__auto___10632);
{
var G__10633 = cljs.core.next.call(null,seq__8318_10626__$1);
var G__10634 = null;
var G__10635 = 0;
var G__10636 = 0;
seq__8318_10616 = G__10633;
chunk__8319_10617 = G__10634;
count__8320_10618 = G__10635;
i__8321_10619 = G__10636;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.textarea.apply(null,a__6533__auto__);
};
var textarea = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return textarea__delegate.call(this,args__6532__auto__);};
textarea.cljs$lang$maxFixedArity = 0;
textarea.cljs$lang$applyTo = (function (arglist__10637){
var args__6532__auto__ = cljs.core.seq(arglist__10637);
return textarea__delegate(args__6532__auto__);
});
textarea.cljs$core$IFn$_invoke$arity$variadic = textarea__delegate;
return textarea;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.tfoot = (function() { 
var tfoot__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__8326_10638 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__8327_10639 = null;var count__8328_10640 = 0;var i__8329_10641 = 0;while(true){
if((i__8329_10641 < count__8328_10640))
{var arg__6534__auto___10642 = cljs.core._nth.call(null,chunk__8327_10639,i__8329_10641);a__6533__auto__.push(arg__6534__auto___10642);
{
var G__10643 = seq__8326_10638;
var G__10644 = chunk__8327_10639;
var G__10645 = count__8328_10640;
var G__10646 = (i__8329_10641 + 1);
seq__8326_10638 = G__10643;
chunk__8327_10639 = G__10644;
count__8328_10640 = G__10645;
i__8329_10641 = G__10646;
continue;
}
} else
{var temp__4092__auto___10647 = cljs.core.seq.call(null,seq__8326_10638);if(temp__4092__auto___10647)
{var seq__8326_10648__$1 = temp__4092__auto___10647;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8326_10648__$1))
{var c__5632__auto___10649 = cljs.core.chunk_first.call(null,seq__8326_10648__$1);{
var G__10650 = cljs.core.chunk_rest.call(null,seq__8326_10648__$1);
var G__10651 = c__5632__auto___10649;
var G__10652 = cljs.core.count.call(null,c__5632__auto___10649);
var G__10653 = 0;
seq__8326_10638 = G__10650;
chunk__8327_10639 = G__10651;
count__8328_10640 = G__10652;
i__8329_10641 = G__10653;
continue;
}
} else
{var arg__6534__auto___10654 = cljs.core.first.call(null,seq__8326_10648__$1);a__6533__auto__.push(arg__6534__auto___10654);
{
var G__10655 = cljs.core.next.call(null,seq__8326_10648__$1);
var G__10656 = null;
var G__10657 = 0;
var G__10658 = 0;
seq__8326_10638 = G__10655;
chunk__8327_10639 = G__10656;
count__8328_10640 = G__10657;
i__8329_10641 = G__10658;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.tfoot.apply(null,a__6533__auto__);
};
var tfoot = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return tfoot__delegate.call(this,args__6532__auto__);};
tfoot.cljs$lang$maxFixedArity = 0;
tfoot.cljs$lang$applyTo = (function (arglist__10659){
var args__6532__auto__ = cljs.core.seq(arglist__10659);
return tfoot__delegate(args__6532__auto__);
});
tfoot.cljs$core$IFn$_invoke$arity$variadic = tfoot__delegate;
return tfoot;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.th = (function() { 
var th__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__8334_10660 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__8335_10661 = null;var count__8336_10662 = 0;var i__8337_10663 = 0;while(true){
if((i__8337_10663 < count__8336_10662))
{var arg__6534__auto___10664 = cljs.core._nth.call(null,chunk__8335_10661,i__8337_10663);a__6533__auto__.push(arg__6534__auto___10664);
{
var G__10665 = seq__8334_10660;
var G__10666 = chunk__8335_10661;
var G__10667 = count__8336_10662;
var G__10668 = (i__8337_10663 + 1);
seq__8334_10660 = G__10665;
chunk__8335_10661 = G__10666;
count__8336_10662 = G__10667;
i__8337_10663 = G__10668;
continue;
}
} else
{var temp__4092__auto___10669 = cljs.core.seq.call(null,seq__8334_10660);if(temp__4092__auto___10669)
{var seq__8334_10670__$1 = temp__4092__auto___10669;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8334_10670__$1))
{var c__5632__auto___10671 = cljs.core.chunk_first.call(null,seq__8334_10670__$1);{
var G__10672 = cljs.core.chunk_rest.call(null,seq__8334_10670__$1);
var G__10673 = c__5632__auto___10671;
var G__10674 = cljs.core.count.call(null,c__5632__auto___10671);
var G__10675 = 0;
seq__8334_10660 = G__10672;
chunk__8335_10661 = G__10673;
count__8336_10662 = G__10674;
i__8337_10663 = G__10675;
continue;
}
} else
{var arg__6534__auto___10676 = cljs.core.first.call(null,seq__8334_10670__$1);a__6533__auto__.push(arg__6534__auto___10676);
{
var G__10677 = cljs.core.next.call(null,seq__8334_10670__$1);
var G__10678 = null;
var G__10679 = 0;
var G__10680 = 0;
seq__8334_10660 = G__10677;
chunk__8335_10661 = G__10678;
count__8336_10662 = G__10679;
i__8337_10663 = G__10680;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.th.apply(null,a__6533__auto__);
};
var th = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return th__delegate.call(this,args__6532__auto__);};
th.cljs$lang$maxFixedArity = 0;
th.cljs$lang$applyTo = (function (arglist__10681){
var args__6532__auto__ = cljs.core.seq(arglist__10681);
return th__delegate(args__6532__auto__);
});
th.cljs$core$IFn$_invoke$arity$variadic = th__delegate;
return th;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.thead = (function() { 
var thead__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__8342_10682 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__8343_10683 = null;var count__8344_10684 = 0;var i__8345_10685 = 0;while(true){
if((i__8345_10685 < count__8344_10684))
{var arg__6534__auto___10686 = cljs.core._nth.call(null,chunk__8343_10683,i__8345_10685);a__6533__auto__.push(arg__6534__auto___10686);
{
var G__10687 = seq__8342_10682;
var G__10688 = chunk__8343_10683;
var G__10689 = count__8344_10684;
var G__10690 = (i__8345_10685 + 1);
seq__8342_10682 = G__10687;
chunk__8343_10683 = G__10688;
count__8344_10684 = G__10689;
i__8345_10685 = G__10690;
continue;
}
} else
{var temp__4092__auto___10691 = cljs.core.seq.call(null,seq__8342_10682);if(temp__4092__auto___10691)
{var seq__8342_10692__$1 = temp__4092__auto___10691;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8342_10692__$1))
{var c__5632__auto___10693 = cljs.core.chunk_first.call(null,seq__8342_10692__$1);{
var G__10694 = cljs.core.chunk_rest.call(null,seq__8342_10692__$1);
var G__10695 = c__5632__auto___10693;
var G__10696 = cljs.core.count.call(null,c__5632__auto___10693);
var G__10697 = 0;
seq__8342_10682 = G__10694;
chunk__8343_10683 = G__10695;
count__8344_10684 = G__10696;
i__8345_10685 = G__10697;
continue;
}
} else
{var arg__6534__auto___10698 = cljs.core.first.call(null,seq__8342_10692__$1);a__6533__auto__.push(arg__6534__auto___10698);
{
var G__10699 = cljs.core.next.call(null,seq__8342_10692__$1);
var G__10700 = null;
var G__10701 = 0;
var G__10702 = 0;
seq__8342_10682 = G__10699;
chunk__8343_10683 = G__10700;
count__8344_10684 = G__10701;
i__8345_10685 = G__10702;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.thead.apply(null,a__6533__auto__);
};
var thead = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return thead__delegate.call(this,args__6532__auto__);};
thead.cljs$lang$maxFixedArity = 0;
thead.cljs$lang$applyTo = (function (arglist__10703){
var args__6532__auto__ = cljs.core.seq(arglist__10703);
return thead__delegate(args__6532__auto__);
});
thead.cljs$core$IFn$_invoke$arity$variadic = thead__delegate;
return thead;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.time = (function() { 
var time__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__8350_10704 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__8351_10705 = null;var count__8352_10706 = 0;var i__8353_10707 = 0;while(true){
if((i__8353_10707 < count__8352_10706))
{var arg__6534__auto___10708 = cljs.core._nth.call(null,chunk__8351_10705,i__8353_10707);a__6533__auto__.push(arg__6534__auto___10708);
{
var G__10709 = seq__8350_10704;
var G__10710 = chunk__8351_10705;
var G__10711 = count__8352_10706;
var G__10712 = (i__8353_10707 + 1);
seq__8350_10704 = G__10709;
chunk__8351_10705 = G__10710;
count__8352_10706 = G__10711;
i__8353_10707 = G__10712;
continue;
}
} else
{var temp__4092__auto___10713 = cljs.core.seq.call(null,seq__8350_10704);if(temp__4092__auto___10713)
{var seq__8350_10714__$1 = temp__4092__auto___10713;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8350_10714__$1))
{var c__5632__auto___10715 = cljs.core.chunk_first.call(null,seq__8350_10714__$1);{
var G__10716 = cljs.core.chunk_rest.call(null,seq__8350_10714__$1);
var G__10717 = c__5632__auto___10715;
var G__10718 = cljs.core.count.call(null,c__5632__auto___10715);
var G__10719 = 0;
seq__8350_10704 = G__10716;
chunk__8351_10705 = G__10717;
count__8352_10706 = G__10718;
i__8353_10707 = G__10719;
continue;
}
} else
{var arg__6534__auto___10720 = cljs.core.first.call(null,seq__8350_10714__$1);a__6533__auto__.push(arg__6534__auto___10720);
{
var G__10721 = cljs.core.next.call(null,seq__8350_10714__$1);
var G__10722 = null;
var G__10723 = 0;
var G__10724 = 0;
seq__8350_10704 = G__10721;
chunk__8351_10705 = G__10722;
count__8352_10706 = G__10723;
i__8353_10707 = G__10724;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.time.apply(null,a__6533__auto__);
};
var time = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return time__delegate.call(this,args__6532__auto__);};
time.cljs$lang$maxFixedArity = 0;
time.cljs$lang$applyTo = (function (arglist__10725){
var args__6532__auto__ = cljs.core.seq(arglist__10725);
return time__delegate(args__6532__auto__);
});
time.cljs$core$IFn$_invoke$arity$variadic = time__delegate;
return time;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.title = (function() { 
var title__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__8358_10726 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__8359_10727 = null;var count__8360_10728 = 0;var i__8361_10729 = 0;while(true){
if((i__8361_10729 < count__8360_10728))
{var arg__6534__auto___10730 = cljs.core._nth.call(null,chunk__8359_10727,i__8361_10729);a__6533__auto__.push(arg__6534__auto___10730);
{
var G__10731 = seq__8358_10726;
var G__10732 = chunk__8359_10727;
var G__10733 = count__8360_10728;
var G__10734 = (i__8361_10729 + 1);
seq__8358_10726 = G__10731;
chunk__8359_10727 = G__10732;
count__8360_10728 = G__10733;
i__8361_10729 = G__10734;
continue;
}
} else
{var temp__4092__auto___10735 = cljs.core.seq.call(null,seq__8358_10726);if(temp__4092__auto___10735)
{var seq__8358_10736__$1 = temp__4092__auto___10735;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8358_10736__$1))
{var c__5632__auto___10737 = cljs.core.chunk_first.call(null,seq__8358_10736__$1);{
var G__10738 = cljs.core.chunk_rest.call(null,seq__8358_10736__$1);
var G__10739 = c__5632__auto___10737;
var G__10740 = cljs.core.count.call(null,c__5632__auto___10737);
var G__10741 = 0;
seq__8358_10726 = G__10738;
chunk__8359_10727 = G__10739;
count__8360_10728 = G__10740;
i__8361_10729 = G__10741;
continue;
}
} else
{var arg__6534__auto___10742 = cljs.core.first.call(null,seq__8358_10736__$1);a__6533__auto__.push(arg__6534__auto___10742);
{
var G__10743 = cljs.core.next.call(null,seq__8358_10736__$1);
var G__10744 = null;
var G__10745 = 0;
var G__10746 = 0;
seq__8358_10726 = G__10743;
chunk__8359_10727 = G__10744;
count__8360_10728 = G__10745;
i__8361_10729 = G__10746;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.title.apply(null,a__6533__auto__);
};
var title = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return title__delegate.call(this,args__6532__auto__);};
title.cljs$lang$maxFixedArity = 0;
title.cljs$lang$applyTo = (function (arglist__10747){
var args__6532__auto__ = cljs.core.seq(arglist__10747);
return title__delegate(args__6532__auto__);
});
title.cljs$core$IFn$_invoke$arity$variadic = title__delegate;
return title;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.tr = (function() { 
var tr__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__8366_10748 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__8367_10749 = null;var count__8368_10750 = 0;var i__8369_10751 = 0;while(true){
if((i__8369_10751 < count__8368_10750))
{var arg__6534__auto___10752 = cljs.core._nth.call(null,chunk__8367_10749,i__8369_10751);a__6533__auto__.push(arg__6534__auto___10752);
{
var G__10753 = seq__8366_10748;
var G__10754 = chunk__8367_10749;
var G__10755 = count__8368_10750;
var G__10756 = (i__8369_10751 + 1);
seq__8366_10748 = G__10753;
chunk__8367_10749 = G__10754;
count__8368_10750 = G__10755;
i__8369_10751 = G__10756;
continue;
}
} else
{var temp__4092__auto___10757 = cljs.core.seq.call(null,seq__8366_10748);if(temp__4092__auto___10757)
{var seq__8366_10758__$1 = temp__4092__auto___10757;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8366_10758__$1))
{var c__5632__auto___10759 = cljs.core.chunk_first.call(null,seq__8366_10758__$1);{
var G__10760 = cljs.core.chunk_rest.call(null,seq__8366_10758__$1);
var G__10761 = c__5632__auto___10759;
var G__10762 = cljs.core.count.call(null,c__5632__auto___10759);
var G__10763 = 0;
seq__8366_10748 = G__10760;
chunk__8367_10749 = G__10761;
count__8368_10750 = G__10762;
i__8369_10751 = G__10763;
continue;
}
} else
{var arg__6534__auto___10764 = cljs.core.first.call(null,seq__8366_10758__$1);a__6533__auto__.push(arg__6534__auto___10764);
{
var G__10765 = cljs.core.next.call(null,seq__8366_10758__$1);
var G__10766 = null;
var G__10767 = 0;
var G__10768 = 0;
seq__8366_10748 = G__10765;
chunk__8367_10749 = G__10766;
count__8368_10750 = G__10767;
i__8369_10751 = G__10768;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.tr.apply(null,a__6533__auto__);
};
var tr = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return tr__delegate.call(this,args__6532__auto__);};
tr.cljs$lang$maxFixedArity = 0;
tr.cljs$lang$applyTo = (function (arglist__10769){
var args__6532__auto__ = cljs.core.seq(arglist__10769);
return tr__delegate(args__6532__auto__);
});
tr.cljs$core$IFn$_invoke$arity$variadic = tr__delegate;
return tr;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.track = (function() { 
var track__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__8374_10770 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__8375_10771 = null;var count__8376_10772 = 0;var i__8377_10773 = 0;while(true){
if((i__8377_10773 < count__8376_10772))
{var arg__6534__auto___10774 = cljs.core._nth.call(null,chunk__8375_10771,i__8377_10773);a__6533__auto__.push(arg__6534__auto___10774);
{
var G__10775 = seq__8374_10770;
var G__10776 = chunk__8375_10771;
var G__10777 = count__8376_10772;
var G__10778 = (i__8377_10773 + 1);
seq__8374_10770 = G__10775;
chunk__8375_10771 = G__10776;
count__8376_10772 = G__10777;
i__8377_10773 = G__10778;
continue;
}
} else
{var temp__4092__auto___10779 = cljs.core.seq.call(null,seq__8374_10770);if(temp__4092__auto___10779)
{var seq__8374_10780__$1 = temp__4092__auto___10779;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8374_10780__$1))
{var c__5632__auto___10781 = cljs.core.chunk_first.call(null,seq__8374_10780__$1);{
var G__10782 = cljs.core.chunk_rest.call(null,seq__8374_10780__$1);
var G__10783 = c__5632__auto___10781;
var G__10784 = cljs.core.count.call(null,c__5632__auto___10781);
var G__10785 = 0;
seq__8374_10770 = G__10782;
chunk__8375_10771 = G__10783;
count__8376_10772 = G__10784;
i__8377_10773 = G__10785;
continue;
}
} else
{var arg__6534__auto___10786 = cljs.core.first.call(null,seq__8374_10780__$1);a__6533__auto__.push(arg__6534__auto___10786);
{
var G__10787 = cljs.core.next.call(null,seq__8374_10780__$1);
var G__10788 = null;
var G__10789 = 0;
var G__10790 = 0;
seq__8374_10770 = G__10787;
chunk__8375_10771 = G__10788;
count__8376_10772 = G__10789;
i__8377_10773 = G__10790;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.track.apply(null,a__6533__auto__);
};
var track = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return track__delegate.call(this,args__6532__auto__);};
track.cljs$lang$maxFixedArity = 0;
track.cljs$lang$applyTo = (function (arglist__10791){
var args__6532__auto__ = cljs.core.seq(arglist__10791);
return track__delegate(args__6532__auto__);
});
track.cljs$core$IFn$_invoke$arity$variadic = track__delegate;
return track;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.u = (function() { 
var u__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__8382_10792 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__8383_10793 = null;var count__8384_10794 = 0;var i__8385_10795 = 0;while(true){
if((i__8385_10795 < count__8384_10794))
{var arg__6534__auto___10796 = cljs.core._nth.call(null,chunk__8383_10793,i__8385_10795);a__6533__auto__.push(arg__6534__auto___10796);
{
var G__10797 = seq__8382_10792;
var G__10798 = chunk__8383_10793;
var G__10799 = count__8384_10794;
var G__10800 = (i__8385_10795 + 1);
seq__8382_10792 = G__10797;
chunk__8383_10793 = G__10798;
count__8384_10794 = G__10799;
i__8385_10795 = G__10800;
continue;
}
} else
{var temp__4092__auto___10801 = cljs.core.seq.call(null,seq__8382_10792);if(temp__4092__auto___10801)
{var seq__8382_10802__$1 = temp__4092__auto___10801;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8382_10802__$1))
{var c__5632__auto___10803 = cljs.core.chunk_first.call(null,seq__8382_10802__$1);{
var G__10804 = cljs.core.chunk_rest.call(null,seq__8382_10802__$1);
var G__10805 = c__5632__auto___10803;
var G__10806 = cljs.core.count.call(null,c__5632__auto___10803);
var G__10807 = 0;
seq__8382_10792 = G__10804;
chunk__8383_10793 = G__10805;
count__8384_10794 = G__10806;
i__8385_10795 = G__10807;
continue;
}
} else
{var arg__6534__auto___10808 = cljs.core.first.call(null,seq__8382_10802__$1);a__6533__auto__.push(arg__6534__auto___10808);
{
var G__10809 = cljs.core.next.call(null,seq__8382_10802__$1);
var G__10810 = null;
var G__10811 = 0;
var G__10812 = 0;
seq__8382_10792 = G__10809;
chunk__8383_10793 = G__10810;
count__8384_10794 = G__10811;
i__8385_10795 = G__10812;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.u.apply(null,a__6533__auto__);
};
var u = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return u__delegate.call(this,args__6532__auto__);};
u.cljs$lang$maxFixedArity = 0;
u.cljs$lang$applyTo = (function (arglist__10813){
var args__6532__auto__ = cljs.core.seq(arglist__10813);
return u__delegate(args__6532__auto__);
});
u.cljs$core$IFn$_invoke$arity$variadic = u__delegate;
return u;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.ul = (function() { 
var ul__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__8390_10814 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__8391_10815 = null;var count__8392_10816 = 0;var i__8393_10817 = 0;while(true){
if((i__8393_10817 < count__8392_10816))
{var arg__6534__auto___10818 = cljs.core._nth.call(null,chunk__8391_10815,i__8393_10817);a__6533__auto__.push(arg__6534__auto___10818);
{
var G__10819 = seq__8390_10814;
var G__10820 = chunk__8391_10815;
var G__10821 = count__8392_10816;
var G__10822 = (i__8393_10817 + 1);
seq__8390_10814 = G__10819;
chunk__8391_10815 = G__10820;
count__8392_10816 = G__10821;
i__8393_10817 = G__10822;
continue;
}
} else
{var temp__4092__auto___10823 = cljs.core.seq.call(null,seq__8390_10814);if(temp__4092__auto___10823)
{var seq__8390_10824__$1 = temp__4092__auto___10823;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8390_10824__$1))
{var c__5632__auto___10825 = cljs.core.chunk_first.call(null,seq__8390_10824__$1);{
var G__10826 = cljs.core.chunk_rest.call(null,seq__8390_10824__$1);
var G__10827 = c__5632__auto___10825;
var G__10828 = cljs.core.count.call(null,c__5632__auto___10825);
var G__10829 = 0;
seq__8390_10814 = G__10826;
chunk__8391_10815 = G__10827;
count__8392_10816 = G__10828;
i__8393_10817 = G__10829;
continue;
}
} else
{var arg__6534__auto___10830 = cljs.core.first.call(null,seq__8390_10824__$1);a__6533__auto__.push(arg__6534__auto___10830);
{
var G__10831 = cljs.core.next.call(null,seq__8390_10824__$1);
var G__10832 = null;
var G__10833 = 0;
var G__10834 = 0;
seq__8390_10814 = G__10831;
chunk__8391_10815 = G__10832;
count__8392_10816 = G__10833;
i__8393_10817 = G__10834;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.ul.apply(null,a__6533__auto__);
};
var ul = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ul__delegate.call(this,args__6532__auto__);};
ul.cljs$lang$maxFixedArity = 0;
ul.cljs$lang$applyTo = (function (arglist__10835){
var args__6532__auto__ = cljs.core.seq(arglist__10835);
return ul__delegate(args__6532__auto__);
});
ul.cljs$core$IFn$_invoke$arity$variadic = ul__delegate;
return ul;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.var$ = (function() { 
var var$__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__8398_10836 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__8399_10837 = null;var count__8400_10838 = 0;var i__8401_10839 = 0;while(true){
if((i__8401_10839 < count__8400_10838))
{var arg__6534__auto___10840 = cljs.core._nth.call(null,chunk__8399_10837,i__8401_10839);a__6533__auto__.push(arg__6534__auto___10840);
{
var G__10841 = seq__8398_10836;
var G__10842 = chunk__8399_10837;
var G__10843 = count__8400_10838;
var G__10844 = (i__8401_10839 + 1);
seq__8398_10836 = G__10841;
chunk__8399_10837 = G__10842;
count__8400_10838 = G__10843;
i__8401_10839 = G__10844;
continue;
}
} else
{var temp__4092__auto___10845 = cljs.core.seq.call(null,seq__8398_10836);if(temp__4092__auto___10845)
{var seq__8398_10846__$1 = temp__4092__auto___10845;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8398_10846__$1))
{var c__5632__auto___10847 = cljs.core.chunk_first.call(null,seq__8398_10846__$1);{
var G__10848 = cljs.core.chunk_rest.call(null,seq__8398_10846__$1);
var G__10849 = c__5632__auto___10847;
var G__10850 = cljs.core.count.call(null,c__5632__auto___10847);
var G__10851 = 0;
seq__8398_10836 = G__10848;
chunk__8399_10837 = G__10849;
count__8400_10838 = G__10850;
i__8401_10839 = G__10851;
continue;
}
} else
{var arg__6534__auto___10852 = cljs.core.first.call(null,seq__8398_10846__$1);a__6533__auto__.push(arg__6534__auto___10852);
{
var G__10853 = cljs.core.next.call(null,seq__8398_10846__$1);
var G__10854 = null;
var G__10855 = 0;
var G__10856 = 0;
seq__8398_10836 = G__10853;
chunk__8399_10837 = G__10854;
count__8400_10838 = G__10855;
i__8401_10839 = G__10856;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.var$.apply(null,a__6533__auto__);
};
var var$ = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return var$__delegate.call(this,args__6532__auto__);};
var$.cljs$lang$maxFixedArity = 0;
var$.cljs$lang$applyTo = (function (arglist__10857){
var args__6532__auto__ = cljs.core.seq(arglist__10857);
return var$__delegate(args__6532__auto__);
});
var$.cljs$core$IFn$_invoke$arity$variadic = var$__delegate;
return var$;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.video = (function() { 
var video__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__8406_10858 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__8407_10859 = null;var count__8408_10860 = 0;var i__8409_10861 = 0;while(true){
if((i__8409_10861 < count__8408_10860))
{var arg__6534__auto___10862 = cljs.core._nth.call(null,chunk__8407_10859,i__8409_10861);a__6533__auto__.push(arg__6534__auto___10862);
{
var G__10863 = seq__8406_10858;
var G__10864 = chunk__8407_10859;
var G__10865 = count__8408_10860;
var G__10866 = (i__8409_10861 + 1);
seq__8406_10858 = G__10863;
chunk__8407_10859 = G__10864;
count__8408_10860 = G__10865;
i__8409_10861 = G__10866;
continue;
}
} else
{var temp__4092__auto___10867 = cljs.core.seq.call(null,seq__8406_10858);if(temp__4092__auto___10867)
{var seq__8406_10868__$1 = temp__4092__auto___10867;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8406_10868__$1))
{var c__5632__auto___10869 = cljs.core.chunk_first.call(null,seq__8406_10868__$1);{
var G__10870 = cljs.core.chunk_rest.call(null,seq__8406_10868__$1);
var G__10871 = c__5632__auto___10869;
var G__10872 = cljs.core.count.call(null,c__5632__auto___10869);
var G__10873 = 0;
seq__8406_10858 = G__10870;
chunk__8407_10859 = G__10871;
count__8408_10860 = G__10872;
i__8409_10861 = G__10873;
continue;
}
} else
{var arg__6534__auto___10874 = cljs.core.first.call(null,seq__8406_10868__$1);a__6533__auto__.push(arg__6534__auto___10874);
{
var G__10875 = cljs.core.next.call(null,seq__8406_10868__$1);
var G__10876 = null;
var G__10877 = 0;
var G__10878 = 0;
seq__8406_10858 = G__10875;
chunk__8407_10859 = G__10876;
count__8408_10860 = G__10877;
i__8409_10861 = G__10878;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.video.apply(null,a__6533__auto__);
};
var video = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return video__delegate.call(this,args__6532__auto__);};
video.cljs$lang$maxFixedArity = 0;
video.cljs$lang$applyTo = (function (arglist__10879){
var args__6532__auto__ = cljs.core.seq(arglist__10879);
return video__delegate(args__6532__auto__);
});
video.cljs$core$IFn$_invoke$arity$variadic = video__delegate;
return video;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.wbr = (function() { 
var wbr__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__8414_10880 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__8415_10881 = null;var count__8416_10882 = 0;var i__8417_10883 = 0;while(true){
if((i__8417_10883 < count__8416_10882))
{var arg__6534__auto___10884 = cljs.core._nth.call(null,chunk__8415_10881,i__8417_10883);a__6533__auto__.push(arg__6534__auto___10884);
{
var G__10885 = seq__8414_10880;
var G__10886 = chunk__8415_10881;
var G__10887 = count__8416_10882;
var G__10888 = (i__8417_10883 + 1);
seq__8414_10880 = G__10885;
chunk__8415_10881 = G__10886;
count__8416_10882 = G__10887;
i__8417_10883 = G__10888;
continue;
}
} else
{var temp__4092__auto___10889 = cljs.core.seq.call(null,seq__8414_10880);if(temp__4092__auto___10889)
{var seq__8414_10890__$1 = temp__4092__auto___10889;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8414_10890__$1))
{var c__5632__auto___10891 = cljs.core.chunk_first.call(null,seq__8414_10890__$1);{
var G__10892 = cljs.core.chunk_rest.call(null,seq__8414_10890__$1);
var G__10893 = c__5632__auto___10891;
var G__10894 = cljs.core.count.call(null,c__5632__auto___10891);
var G__10895 = 0;
seq__8414_10880 = G__10892;
chunk__8415_10881 = G__10893;
count__8416_10882 = G__10894;
i__8417_10883 = G__10895;
continue;
}
} else
{var arg__6534__auto___10896 = cljs.core.first.call(null,seq__8414_10890__$1);a__6533__auto__.push(arg__6534__auto___10896);
{
var G__10897 = cljs.core.next.call(null,seq__8414_10890__$1);
var G__10898 = null;
var G__10899 = 0;
var G__10900 = 0;
seq__8414_10880 = G__10897;
chunk__8415_10881 = G__10898;
count__8416_10882 = G__10899;
i__8417_10883 = G__10900;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.wbr.apply(null,a__6533__auto__);
};
var wbr = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return wbr__delegate.call(this,args__6532__auto__);};
wbr.cljs$lang$maxFixedArity = 0;
wbr.cljs$lang$applyTo = (function (arglist__10901){
var args__6532__auto__ = cljs.core.seq(arglist__10901);
return wbr__delegate(args__6532__auto__);
});
wbr.cljs$core$IFn$_invoke$arity$variadic = wbr__delegate;
return wbr;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.circle = (function() { 
var circle__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__8422_10902 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__8423_10903 = null;var count__8424_10904 = 0;var i__8425_10905 = 0;while(true){
if((i__8425_10905 < count__8424_10904))
{var arg__6534__auto___10906 = cljs.core._nth.call(null,chunk__8423_10903,i__8425_10905);a__6533__auto__.push(arg__6534__auto___10906);
{
var G__10907 = seq__8422_10902;
var G__10908 = chunk__8423_10903;
var G__10909 = count__8424_10904;
var G__10910 = (i__8425_10905 + 1);
seq__8422_10902 = G__10907;
chunk__8423_10903 = G__10908;
count__8424_10904 = G__10909;
i__8425_10905 = G__10910;
continue;
}
} else
{var temp__4092__auto___10911 = cljs.core.seq.call(null,seq__8422_10902);if(temp__4092__auto___10911)
{var seq__8422_10912__$1 = temp__4092__auto___10911;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8422_10912__$1))
{var c__5632__auto___10913 = cljs.core.chunk_first.call(null,seq__8422_10912__$1);{
var G__10914 = cljs.core.chunk_rest.call(null,seq__8422_10912__$1);
var G__10915 = c__5632__auto___10913;
var G__10916 = cljs.core.count.call(null,c__5632__auto___10913);
var G__10917 = 0;
seq__8422_10902 = G__10914;
chunk__8423_10903 = G__10915;
count__8424_10904 = G__10916;
i__8425_10905 = G__10917;
continue;
}
} else
{var arg__6534__auto___10918 = cljs.core.first.call(null,seq__8422_10912__$1);a__6533__auto__.push(arg__6534__auto___10918);
{
var G__10919 = cljs.core.next.call(null,seq__8422_10912__$1);
var G__10920 = null;
var G__10921 = 0;
var G__10922 = 0;
seq__8422_10902 = G__10919;
chunk__8423_10903 = G__10920;
count__8424_10904 = G__10921;
i__8425_10905 = G__10922;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.circle.apply(null,a__6533__auto__);
};
var circle = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return circle__delegate.call(this,args__6532__auto__);};
circle.cljs$lang$maxFixedArity = 0;
circle.cljs$lang$applyTo = (function (arglist__10923){
var args__6532__auto__ = cljs.core.seq(arglist__10923);
return circle__delegate(args__6532__auto__);
});
circle.cljs$core$IFn$_invoke$arity$variadic = circle__delegate;
return circle;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.g = (function() { 
var g__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__8430_10924 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__8431_10925 = null;var count__8432_10926 = 0;var i__8433_10927 = 0;while(true){
if((i__8433_10927 < count__8432_10926))
{var arg__6534__auto___10928 = cljs.core._nth.call(null,chunk__8431_10925,i__8433_10927);a__6533__auto__.push(arg__6534__auto___10928);
{
var G__10929 = seq__8430_10924;
var G__10930 = chunk__8431_10925;
var G__10931 = count__8432_10926;
var G__10932 = (i__8433_10927 + 1);
seq__8430_10924 = G__10929;
chunk__8431_10925 = G__10930;
count__8432_10926 = G__10931;
i__8433_10927 = G__10932;
continue;
}
} else
{var temp__4092__auto___10933 = cljs.core.seq.call(null,seq__8430_10924);if(temp__4092__auto___10933)
{var seq__8430_10934__$1 = temp__4092__auto___10933;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8430_10934__$1))
{var c__5632__auto___10935 = cljs.core.chunk_first.call(null,seq__8430_10934__$1);{
var G__10936 = cljs.core.chunk_rest.call(null,seq__8430_10934__$1);
var G__10937 = c__5632__auto___10935;
var G__10938 = cljs.core.count.call(null,c__5632__auto___10935);
var G__10939 = 0;
seq__8430_10924 = G__10936;
chunk__8431_10925 = G__10937;
count__8432_10926 = G__10938;
i__8433_10927 = G__10939;
continue;
}
} else
{var arg__6534__auto___10940 = cljs.core.first.call(null,seq__8430_10934__$1);a__6533__auto__.push(arg__6534__auto___10940);
{
var G__10941 = cljs.core.next.call(null,seq__8430_10934__$1);
var G__10942 = null;
var G__10943 = 0;
var G__10944 = 0;
seq__8430_10924 = G__10941;
chunk__8431_10925 = G__10942;
count__8432_10926 = G__10943;
i__8433_10927 = G__10944;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.g.apply(null,a__6533__auto__);
};
var g = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return g__delegate.call(this,args__6532__auto__);};
g.cljs$lang$maxFixedArity = 0;
g.cljs$lang$applyTo = (function (arglist__10945){
var args__6532__auto__ = cljs.core.seq(arglist__10945);
return g__delegate(args__6532__auto__);
});
g.cljs$core$IFn$_invoke$arity$variadic = g__delegate;
return g;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.line = (function() { 
var line__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__8438_10946 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__8439_10947 = null;var count__8440_10948 = 0;var i__8441_10949 = 0;while(true){
if((i__8441_10949 < count__8440_10948))
{var arg__6534__auto___10950 = cljs.core._nth.call(null,chunk__8439_10947,i__8441_10949);a__6533__auto__.push(arg__6534__auto___10950);
{
var G__10951 = seq__8438_10946;
var G__10952 = chunk__8439_10947;
var G__10953 = count__8440_10948;
var G__10954 = (i__8441_10949 + 1);
seq__8438_10946 = G__10951;
chunk__8439_10947 = G__10952;
count__8440_10948 = G__10953;
i__8441_10949 = G__10954;
continue;
}
} else
{var temp__4092__auto___10955 = cljs.core.seq.call(null,seq__8438_10946);if(temp__4092__auto___10955)
{var seq__8438_10956__$1 = temp__4092__auto___10955;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8438_10956__$1))
{var c__5632__auto___10957 = cljs.core.chunk_first.call(null,seq__8438_10956__$1);{
var G__10958 = cljs.core.chunk_rest.call(null,seq__8438_10956__$1);
var G__10959 = c__5632__auto___10957;
var G__10960 = cljs.core.count.call(null,c__5632__auto___10957);
var G__10961 = 0;
seq__8438_10946 = G__10958;
chunk__8439_10947 = G__10959;
count__8440_10948 = G__10960;
i__8441_10949 = G__10961;
continue;
}
} else
{var arg__6534__auto___10962 = cljs.core.first.call(null,seq__8438_10956__$1);a__6533__auto__.push(arg__6534__auto___10962);
{
var G__10963 = cljs.core.next.call(null,seq__8438_10956__$1);
var G__10964 = null;
var G__10965 = 0;
var G__10966 = 0;
seq__8438_10946 = G__10963;
chunk__8439_10947 = G__10964;
count__8440_10948 = G__10965;
i__8441_10949 = G__10966;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.line.apply(null,a__6533__auto__);
};
var line = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return line__delegate.call(this,args__6532__auto__);};
line.cljs$lang$maxFixedArity = 0;
line.cljs$lang$applyTo = (function (arglist__10967){
var args__6532__auto__ = cljs.core.seq(arglist__10967);
return line__delegate(args__6532__auto__);
});
line.cljs$core$IFn$_invoke$arity$variadic = line__delegate;
return line;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.path = (function() { 
var path__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__8446_10968 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__8447_10969 = null;var count__8448_10970 = 0;var i__8449_10971 = 0;while(true){
if((i__8449_10971 < count__8448_10970))
{var arg__6534__auto___10972 = cljs.core._nth.call(null,chunk__8447_10969,i__8449_10971);a__6533__auto__.push(arg__6534__auto___10972);
{
var G__10973 = seq__8446_10968;
var G__10974 = chunk__8447_10969;
var G__10975 = count__8448_10970;
var G__10976 = (i__8449_10971 + 1);
seq__8446_10968 = G__10973;
chunk__8447_10969 = G__10974;
count__8448_10970 = G__10975;
i__8449_10971 = G__10976;
continue;
}
} else
{var temp__4092__auto___10977 = cljs.core.seq.call(null,seq__8446_10968);if(temp__4092__auto___10977)
{var seq__8446_10978__$1 = temp__4092__auto___10977;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8446_10978__$1))
{var c__5632__auto___10979 = cljs.core.chunk_first.call(null,seq__8446_10978__$1);{
var G__10980 = cljs.core.chunk_rest.call(null,seq__8446_10978__$1);
var G__10981 = c__5632__auto___10979;
var G__10982 = cljs.core.count.call(null,c__5632__auto___10979);
var G__10983 = 0;
seq__8446_10968 = G__10980;
chunk__8447_10969 = G__10981;
count__8448_10970 = G__10982;
i__8449_10971 = G__10983;
continue;
}
} else
{var arg__6534__auto___10984 = cljs.core.first.call(null,seq__8446_10978__$1);a__6533__auto__.push(arg__6534__auto___10984);
{
var G__10985 = cljs.core.next.call(null,seq__8446_10978__$1);
var G__10986 = null;
var G__10987 = 0;
var G__10988 = 0;
seq__8446_10968 = G__10985;
chunk__8447_10969 = G__10986;
count__8448_10970 = G__10987;
i__8449_10971 = G__10988;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.path.apply(null,a__6533__auto__);
};
var path = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return path__delegate.call(this,args__6532__auto__);};
path.cljs$lang$maxFixedArity = 0;
path.cljs$lang$applyTo = (function (arglist__10989){
var args__6532__auto__ = cljs.core.seq(arglist__10989);
return path__delegate(args__6532__auto__);
});
path.cljs$core$IFn$_invoke$arity$variadic = path__delegate;
return path;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.polygon = (function() { 
var polygon__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__8454_10990 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__8455_10991 = null;var count__8456_10992 = 0;var i__8457_10993 = 0;while(true){
if((i__8457_10993 < count__8456_10992))
{var arg__6534__auto___10994 = cljs.core._nth.call(null,chunk__8455_10991,i__8457_10993);a__6533__auto__.push(arg__6534__auto___10994);
{
var G__10995 = seq__8454_10990;
var G__10996 = chunk__8455_10991;
var G__10997 = count__8456_10992;
var G__10998 = (i__8457_10993 + 1);
seq__8454_10990 = G__10995;
chunk__8455_10991 = G__10996;
count__8456_10992 = G__10997;
i__8457_10993 = G__10998;
continue;
}
} else
{var temp__4092__auto___10999 = cljs.core.seq.call(null,seq__8454_10990);if(temp__4092__auto___10999)
{var seq__8454_11000__$1 = temp__4092__auto___10999;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8454_11000__$1))
{var c__5632__auto___11001 = cljs.core.chunk_first.call(null,seq__8454_11000__$1);{
var G__11002 = cljs.core.chunk_rest.call(null,seq__8454_11000__$1);
var G__11003 = c__5632__auto___11001;
var G__11004 = cljs.core.count.call(null,c__5632__auto___11001);
var G__11005 = 0;
seq__8454_10990 = G__11002;
chunk__8455_10991 = G__11003;
count__8456_10992 = G__11004;
i__8457_10993 = G__11005;
continue;
}
} else
{var arg__6534__auto___11006 = cljs.core.first.call(null,seq__8454_11000__$1);a__6533__auto__.push(arg__6534__auto___11006);
{
var G__11007 = cljs.core.next.call(null,seq__8454_11000__$1);
var G__11008 = null;
var G__11009 = 0;
var G__11010 = 0;
seq__8454_10990 = G__11007;
chunk__8455_10991 = G__11008;
count__8456_10992 = G__11009;
i__8457_10993 = G__11010;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.polygon.apply(null,a__6533__auto__);
};
var polygon = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return polygon__delegate.call(this,args__6532__auto__);};
polygon.cljs$lang$maxFixedArity = 0;
polygon.cljs$lang$applyTo = (function (arglist__11011){
var args__6532__auto__ = cljs.core.seq(arglist__11011);
return polygon__delegate(args__6532__auto__);
});
polygon.cljs$core$IFn$_invoke$arity$variadic = polygon__delegate;
return polygon;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.polyline = (function() { 
var polyline__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__8462_11012 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__8463_11013 = null;var count__8464_11014 = 0;var i__8465_11015 = 0;while(true){
if((i__8465_11015 < count__8464_11014))
{var arg__6534__auto___11016 = cljs.core._nth.call(null,chunk__8463_11013,i__8465_11015);a__6533__auto__.push(arg__6534__auto___11016);
{
var G__11017 = seq__8462_11012;
var G__11018 = chunk__8463_11013;
var G__11019 = count__8464_11014;
var G__11020 = (i__8465_11015 + 1);
seq__8462_11012 = G__11017;
chunk__8463_11013 = G__11018;
count__8464_11014 = G__11019;
i__8465_11015 = G__11020;
continue;
}
} else
{var temp__4092__auto___11021 = cljs.core.seq.call(null,seq__8462_11012);if(temp__4092__auto___11021)
{var seq__8462_11022__$1 = temp__4092__auto___11021;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8462_11022__$1))
{var c__5632__auto___11023 = cljs.core.chunk_first.call(null,seq__8462_11022__$1);{
var G__11024 = cljs.core.chunk_rest.call(null,seq__8462_11022__$1);
var G__11025 = c__5632__auto___11023;
var G__11026 = cljs.core.count.call(null,c__5632__auto___11023);
var G__11027 = 0;
seq__8462_11012 = G__11024;
chunk__8463_11013 = G__11025;
count__8464_11014 = G__11026;
i__8465_11015 = G__11027;
continue;
}
} else
{var arg__6534__auto___11028 = cljs.core.first.call(null,seq__8462_11022__$1);a__6533__auto__.push(arg__6534__auto___11028);
{
var G__11029 = cljs.core.next.call(null,seq__8462_11022__$1);
var G__11030 = null;
var G__11031 = 0;
var G__11032 = 0;
seq__8462_11012 = G__11029;
chunk__8463_11013 = G__11030;
count__8464_11014 = G__11031;
i__8465_11015 = G__11032;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.polyline.apply(null,a__6533__auto__);
};
var polyline = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return polyline__delegate.call(this,args__6532__auto__);};
polyline.cljs$lang$maxFixedArity = 0;
polyline.cljs$lang$applyTo = (function (arglist__11033){
var args__6532__auto__ = cljs.core.seq(arglist__11033);
return polyline__delegate(args__6532__auto__);
});
polyline.cljs$core$IFn$_invoke$arity$variadic = polyline__delegate;
return polyline;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.rect = (function() { 
var rect__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__8470_11034 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__8471_11035 = null;var count__8472_11036 = 0;var i__8473_11037 = 0;while(true){
if((i__8473_11037 < count__8472_11036))
{var arg__6534__auto___11038 = cljs.core._nth.call(null,chunk__8471_11035,i__8473_11037);a__6533__auto__.push(arg__6534__auto___11038);
{
var G__11039 = seq__8470_11034;
var G__11040 = chunk__8471_11035;
var G__11041 = count__8472_11036;
var G__11042 = (i__8473_11037 + 1);
seq__8470_11034 = G__11039;
chunk__8471_11035 = G__11040;
count__8472_11036 = G__11041;
i__8473_11037 = G__11042;
continue;
}
} else
{var temp__4092__auto___11043 = cljs.core.seq.call(null,seq__8470_11034);if(temp__4092__auto___11043)
{var seq__8470_11044__$1 = temp__4092__auto___11043;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8470_11044__$1))
{var c__5632__auto___11045 = cljs.core.chunk_first.call(null,seq__8470_11044__$1);{
var G__11046 = cljs.core.chunk_rest.call(null,seq__8470_11044__$1);
var G__11047 = c__5632__auto___11045;
var G__11048 = cljs.core.count.call(null,c__5632__auto___11045);
var G__11049 = 0;
seq__8470_11034 = G__11046;
chunk__8471_11035 = G__11047;
count__8472_11036 = G__11048;
i__8473_11037 = G__11049;
continue;
}
} else
{var arg__6534__auto___11050 = cljs.core.first.call(null,seq__8470_11044__$1);a__6533__auto__.push(arg__6534__auto___11050);
{
var G__11051 = cljs.core.next.call(null,seq__8470_11044__$1);
var G__11052 = null;
var G__11053 = 0;
var G__11054 = 0;
seq__8470_11034 = G__11051;
chunk__8471_11035 = G__11052;
count__8472_11036 = G__11053;
i__8473_11037 = G__11054;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.rect.apply(null,a__6533__auto__);
};
var rect = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return rect__delegate.call(this,args__6532__auto__);};
rect.cljs$lang$maxFixedArity = 0;
rect.cljs$lang$applyTo = (function (arglist__11055){
var args__6532__auto__ = cljs.core.seq(arglist__11055);
return rect__delegate(args__6532__auto__);
});
rect.cljs$core$IFn$_invoke$arity$variadic = rect__delegate;
return rect;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.svg = (function() { 
var svg__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__8478_11056 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__8479_11057 = null;var count__8480_11058 = 0;var i__8481_11059 = 0;while(true){
if((i__8481_11059 < count__8480_11058))
{var arg__6534__auto___11060 = cljs.core._nth.call(null,chunk__8479_11057,i__8481_11059);a__6533__auto__.push(arg__6534__auto___11060);
{
var G__11061 = seq__8478_11056;
var G__11062 = chunk__8479_11057;
var G__11063 = count__8480_11058;
var G__11064 = (i__8481_11059 + 1);
seq__8478_11056 = G__11061;
chunk__8479_11057 = G__11062;
count__8480_11058 = G__11063;
i__8481_11059 = G__11064;
continue;
}
} else
{var temp__4092__auto___11065 = cljs.core.seq.call(null,seq__8478_11056);if(temp__4092__auto___11065)
{var seq__8478_11066__$1 = temp__4092__auto___11065;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8478_11066__$1))
{var c__5632__auto___11067 = cljs.core.chunk_first.call(null,seq__8478_11066__$1);{
var G__11068 = cljs.core.chunk_rest.call(null,seq__8478_11066__$1);
var G__11069 = c__5632__auto___11067;
var G__11070 = cljs.core.count.call(null,c__5632__auto___11067);
var G__11071 = 0;
seq__8478_11056 = G__11068;
chunk__8479_11057 = G__11069;
count__8480_11058 = G__11070;
i__8481_11059 = G__11071;
continue;
}
} else
{var arg__6534__auto___11072 = cljs.core.first.call(null,seq__8478_11066__$1);a__6533__auto__.push(arg__6534__auto___11072);
{
var G__11073 = cljs.core.next.call(null,seq__8478_11066__$1);
var G__11074 = null;
var G__11075 = 0;
var G__11076 = 0;
seq__8478_11056 = G__11073;
chunk__8479_11057 = G__11074;
count__8480_11058 = G__11075;
i__8481_11059 = G__11076;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.svg.apply(null,a__6533__auto__);
};
var svg = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return svg__delegate.call(this,args__6532__auto__);};
svg.cljs$lang$maxFixedArity = 0;
svg.cljs$lang$applyTo = (function (arglist__11077){
var args__6532__auto__ = cljs.core.seq(arglist__11077);
return svg__delegate(args__6532__auto__);
});
svg.cljs$core$IFn$_invoke$arity$variadic = svg__delegate;
return svg;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.text = (function() { 
var text__delegate = function (args__6532__auto__){var a__6533__auto__ = [];a__6533__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6532__auto__)));
var seq__7790_11078 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6532__auto__));var chunk__7791_11079 = null;var count__7792_11080 = 0;var i__7793_11081 = 0;while(true){
if((i__7793_11081 < count__7792_11080))
{var arg__6534__auto___11082 = cljs.core._nth.call(null,chunk__7791_11079,i__7793_11081);a__6533__auto__.push(arg__6534__auto___11082);
{
var G__11083 = seq__7790_11078;
var G__11084 = chunk__7791_11079;
var G__11085 = count__7792_11080;
var G__11086 = (i__7793_11081 + 1);
seq__7790_11078 = G__11083;
chunk__7791_11079 = G__11084;
count__7792_11080 = G__11085;
i__7793_11081 = G__11086;
continue;
}
} else
{var temp__4092__auto___11087 = cljs.core.seq.call(null,seq__7790_11078);if(temp__4092__auto___11087)
{var seq__7790_11088__$1 = temp__4092__auto___11087;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7790_11088__$1))
{var c__5632__auto___11089 = cljs.core.chunk_first.call(null,seq__7790_11088__$1);{
var G__11090 = cljs.core.chunk_rest.call(null,seq__7790_11088__$1);
var G__11091 = c__5632__auto___11089;
var G__11092 = cljs.core.count.call(null,c__5632__auto___11089);
var G__11093 = 0;
seq__7790_11078 = G__11090;
chunk__7791_11079 = G__11091;
count__7792_11080 = G__11092;
i__7793_11081 = G__11093;
continue;
}
} else
{var arg__6534__auto___11094 = cljs.core.first.call(null,seq__7790_11088__$1);a__6533__auto__.push(arg__6534__auto___11094);
{
var G__11095 = cljs.core.next.call(null,seq__7790_11088__$1);
var G__11096 = null;
var G__11097 = 0;
var G__11098 = 0;
seq__7790_11078 = G__11095;
chunk__7791_11079 = G__11096;
count__7792_11080 = G__11097;
i__7793_11081 = G__11098;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.text.apply(null,a__6533__auto__);
};
var text = function (var_args){
var args__6532__auto__ = null;if (arguments.length > 0) {
  args__6532__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return text__delegate.call(this,args__6532__auto__);};
text.cljs$lang$maxFixedArity = 0;
text.cljs$lang$applyTo = (function (arglist__11099){
var args__6532__auto__ = cljs.core.seq(arglist__11099);
return text__delegate(args__6532__auto__);
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
lt.plugins.elm_light.autocompleter.handle_keypress = (function handle_keypress(p__7508,ev){var map__7511 = p__7508;var map__7511__$1 = ((cljs.core.seq_QMARK_.call(null,map__7511))?cljs.core.apply.call(null,cljs.core.hash_map,map__7511):map__7511);var props = map__7511__$1;var on_cancel = cljs.core.get.call(null,map__7511__$1,new cljs.core.Keyword(null,"on-cancel","on-cancel",600765850));var on_select = cljs.core.get.call(null,map__7511__$1,new cljs.core.Keyword(null,"on-select","on-select",1062468636));var on_down = cljs.core.get.call(null,map__7511__$1,new cljs.core.Keyword(null,"on-down","on-down",3936419650));var on_up = cljs.core.get.call(null,map__7511__$1,new cljs.core.Keyword(null,"on-up","on-up",1119739067));var kk = ev.which;var G__7512 = kk;if(cljs.core._EQ_.call(null,27,G__7512))
{ev.preventDefault();
ev.target.value = "";
return on_cancel.call(null);
} else
{if(cljs.core._EQ_.call(null,13,G__7512))
{ev.preventDefault();
var temp__4092__auto___7528 = lt.plugins.elm_light.autocompleter.find_active.call(null,new cljs.core.Keyword(null,"items","items",1114430258).cljs$core$IFn$_invoke$arity$1(props));if(cljs.core.truth_(temp__4092__auto___7528))
{var active_7529 = temp__4092__auto___7528;ev.target.value = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(active_7529);
} else
{}
return on_select.call(null);
} else
{if(cljs.core._EQ_.call(null,40,G__7512))
{ev.preventDefault();
return on_down.call(null);
} else
{if(cljs.core._EQ_.call(null,38,G__7512))
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
return (function (p1__7513_SHARP_){return "autocomplete-dropdown-item row".concat((cljs.core.truth_(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(p1__7513_SHARP_))?" autocomplete-active":""));
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
lt.plugins.elm_light.autocompleter.Adder = quiescent.component.call(null,(function (p__7514){var map__7515 = p__7514;var map__7515__$1 = ((cljs.core.seq_QMARK_.call(null,map__7515))?cljs.core.apply.call(null,cljs.core.hash_map,map__7515):map__7515);var props = map__7515__$1;var disabled = cljs.core.get.call(null,map__7515__$1,new cljs.core.Keyword(null,"disabled","disabled",1284845038));var on_add_package = cljs.core.get.call(null,map__7515__$1,new cljs.core.Keyword(null,"on-add-package","on-add-package",3601701790));return quiescent.dom.button.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",1004015509),"btn",new cljs.core.Keyword(null,"disabled","disabled",1284845038),disabled,new cljs.core.Keyword(null,"onClick","onClick",3956969051),((function (map__7515,map__7515__$1,props,disabled,on_add_package){
return (function (){return on_add_package.call(null);
});})(map__7515,map__7515__$1,props,disabled,on_add_package))
], null),"Add package");
}));
/**
* 
*/
lt.plugins.elm_light.autocompleter.Versions = quiescent.component.call(null,(function (props){return cljs.core.apply.call(null,quiescent.dom.select,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",1004015509),"versions",new cljs.core.Keyword(null,"value","value",1125876963),new cljs.core.Keyword(null,"version","version",1365512266).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"onChange","onChange",2050678241),(function (p1__7516_SHARP_){return new cljs.core.Keyword(null,"on-change-version","on-change-version",822058203).cljs$core$IFn$_invoke$arity$1(props).call(null,p1__7516_SHARP_.target.value);
})], null),cljs.core.map.call(null,(function (p1__7517_SHARP_){return quiescent.dom.option.call(null,cljs.core.PersistentArrayMap.EMPTY,p1__7517_SHARP_);
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
clojure.walk.keywordize_keys = (function keywordize_keys(m){var f = (function (p__18303){var vec__18304 = p__18303;var k = cljs.core.nth.call(null,vec__18304,0,null);var v = cljs.core.nth.call(null,vec__18304,1,null);if(typeof k === 'string')
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
clojure.walk.stringify_keys = (function stringify_keys(m){var f = (function (p__18307){var vec__18308 = p__18307;var k = cljs.core.nth.call(null,vec__18308,0,null);var v = cljs.core.nth.call(null,vec__18308,1,null);if((k instanceof cljs.core.Keyword))
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
lt.plugins.elm_light.utils.find_symbol = (function find_symbol(ed,pos){var curr_tok = lt.objs.editor.__GT_token.call(null,ed,pos);var G__18331 = new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(curr_tok);if(cljs.core._EQ_.call(null,"variable-3",G__18331))
{return [cljs.core.str(find_symbol.call(null,ed,cljs.core.assoc.call(null,pos,new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(curr_tok)))),cljs.core.str(new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(curr_tok))].join('');
} else
{if(cljs.core._EQ_.call(null,"variable-2",G__18331))
{return [cljs.core.str(find_symbol.call(null,ed,cljs.core.assoc.call(null,pos,new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(curr_tok)))),cljs.core.str(new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(curr_tok))].join('');
} else
{if(cljs.core._EQ_.call(null,"variable",G__18331))
{return [cljs.core.str(find_symbol.call(null,ed,cljs.core.assoc.call(null,pos,new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(curr_tok)))),cljs.core.str(new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(curr_tok))].join('');
} else
{if(cljs.core._EQ_.call(null,"qualifier",G__18331))
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
return (function (p__18338){var vec__18339 = p__18338;var _ = cljs.core.nth.call(null,vec__18339,0,null);var vs = cljs.core.nth.call(null,vec__18339,1,null);return cljs.core.apply.call(null,cljs.core.merge,vs);
});})(pkg_json,deps_json))
,cljs.core.group_by.call(null,new cljs.core.Keyword(null,"package","package",4501809080),cljs.core.concat.call(null,cljs.core.mapv.call(null,((function (pkg_json,deps_json){
return (function (p__18340){var vec__18341 = p__18340;var k = cljs.core.nth.call(null,vec__18341,0,null);var v = cljs.core.nth.call(null,vec__18341,1,null);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"package","package",4501809080),lt.plugins.elm_light.utils.nskw__GT_name.call(null,k),new cljs.core.Keyword(null,"exact","exact",1110851185),v], null);
});})(pkg_json,deps_json))
,lt.plugins.elm_light.utils.parse_json_file.call(null,deps_json)),cljs.core.mapv.call(null,((function (pkg_json,deps_json){
return (function (p__18342){var vec__18343 = p__18342;var k = cljs.core.nth.call(null,vec__18343,0,null);var v = cljs.core.nth.call(null,vec__18343,1,null);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"package","package",4501809080),lt.plugins.elm_light.utils.nskw__GT_name.call(null,k),new cljs.core.Keyword(null,"range","range",1122184367),v], null);
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
lt.plugins.elm_light.graph.find_package_by_name = (function find_package_by_name(this$,name){return cljs.core.some.call(null,(function (p1__11275_SHARP_){if(cljs.core._EQ_.call(null,lt.plugins.elm_light.graph.lower.call(null,new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(p1__11275_SHARP_)),lt.plugins.elm_light.graph.lower.call(null,name)))
{return p1__11275_SHARP_;
} else
{return null;
}
}),new cljs.core.Keyword(null,"all-packages","all-packages",1123981067).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
});
lt.plugins.elm_light.graph.dependency_graph_ui = (function dependency_graph_ui(this$){var e__6289__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.graph","div.graph",2030351651),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dependency-graph","div.dependency-graph",3039800187),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg:svg","svg:svg",3472817088),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",1127031096),"650",new cljs.core.Keyword(null,"height","height",4087841945),"680"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg:g","svg:g",1123725379),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",2066570974),"translate(20,20)"], null)], null)], null)], null)], null));var seq__11282_11333 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__11283_11334 = null;var count__11284_11335 = 0;var i__11285_11336 = 0;while(true){
if((i__11285_11336 < count__11284_11335))
{var vec__11286_11337 = cljs.core._nth.call(null,chunk__11283_11334,i__11285_11336);var ev__6290__auto___11338 = cljs.core.nth.call(null,vec__11286_11337,0,null);var func__6291__auto___11339 = cljs.core.nth.call(null,vec__11286_11337,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___11338,func__6291__auto___11339);
{
var G__11340 = seq__11282_11333;
var G__11341 = chunk__11283_11334;
var G__11342 = count__11284_11335;
var G__11343 = (i__11285_11336 + 1);
seq__11282_11333 = G__11340;
chunk__11283_11334 = G__11341;
count__11284_11335 = G__11342;
i__11285_11336 = G__11343;
continue;
}
} else
{var temp__4092__auto___11344 = cljs.core.seq.call(null,seq__11282_11333);if(temp__4092__auto___11344)
{var seq__11282_11345__$1 = temp__4092__auto___11344;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11282_11345__$1))
{var c__5632__auto___11346 = cljs.core.chunk_first.call(null,seq__11282_11345__$1);{
var G__11347 = cljs.core.chunk_rest.call(null,seq__11282_11345__$1);
var G__11348 = c__5632__auto___11346;
var G__11349 = cljs.core.count.call(null,c__5632__auto___11346);
var G__11350 = 0;
seq__11282_11333 = G__11347;
chunk__11283_11334 = G__11348;
count__11284_11335 = G__11349;
i__11285_11336 = G__11350;
continue;
}
} else
{var vec__11287_11351 = cljs.core.first.call(null,seq__11282_11345__$1);var ev__6290__auto___11352 = cljs.core.nth.call(null,vec__11287_11351,0,null);var func__6291__auto___11353 = cljs.core.nth.call(null,vec__11287_11351,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___11352,func__6291__auto___11353);
{
var G__11354 = cljs.core.next.call(null,seq__11282_11345__$1);
var G__11355 = null;
var G__11356 = 0;
var G__11357 = 0;
seq__11282_11333 = G__11354;
chunk__11283_11334 = G__11355;
count__11284_11335 = G__11356;
i__11285_11336 = G__11357;
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
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.graph","dependency-graph","lt.plugins.elm-light.graph/dependency-graph",2371711049),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elm.graph.dependency","elm.graph.dependency",658564005)], null),new cljs.core.Keyword(null,"name","name",1017277949),"Dependency graph",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){lt.plugins.elm_light.utils.fetch_all_packages.call(null,(function (p1__11288_SHARP_){return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"all-packages","all-packages",1123981067),p1__11288_SHARP_], null));
}));
return lt.plugins.elm_light.graph.dependency_graph_ui.call(null,this$);
}));
lt.plugins.elm_light.graph.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___11358 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___11358))
{var ts_11359 = temp__4092__auto___11358;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_11359))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_11359);
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
lt.plugins.elm_light.graph.create_graph = (function create_graph(data){var g = (new lt.plugins.elm_light.graph.dagreD3.graphlib.Graph()).setGraph({});var seq__11297_11360 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"nodes","nodes",1118897699).cljs$core$IFn$_invoke$arity$1(data));var chunk__11298_11361 = null;var count__11299_11362 = 0;var i__11300_11363 = 0;while(true){
if((i__11300_11363 < count__11299_11362))
{var x_11364 = cljs.core._nth.call(null,chunk__11298_11361,i__11300_11363);g.setNode(lt.plugins.elm_light.graph.dep_id.call(null,x_11364),lt.plugins.elm_light.graph.node_label.call(null,x_11364));
{
var G__11365 = seq__11297_11360;
var G__11366 = chunk__11298_11361;
var G__11367 = count__11299_11362;
var G__11368 = (i__11300_11363 + 1);
seq__11297_11360 = G__11365;
chunk__11298_11361 = G__11366;
count__11299_11362 = G__11367;
i__11300_11363 = G__11368;
continue;
}
} else
{var temp__4092__auto___11369 = cljs.core.seq.call(null,seq__11297_11360);if(temp__4092__auto___11369)
{var seq__11297_11370__$1 = temp__4092__auto___11369;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11297_11370__$1))
{var c__5632__auto___11371 = cljs.core.chunk_first.call(null,seq__11297_11370__$1);{
var G__11372 = cljs.core.chunk_rest.call(null,seq__11297_11370__$1);
var G__11373 = c__5632__auto___11371;
var G__11374 = cljs.core.count.call(null,c__5632__auto___11371);
var G__11375 = 0;
seq__11297_11360 = G__11372;
chunk__11298_11361 = G__11373;
count__11299_11362 = G__11374;
i__11300_11363 = G__11375;
continue;
}
} else
{var x_11376 = cljs.core.first.call(null,seq__11297_11370__$1);g.setNode(lt.plugins.elm_light.graph.dep_id.call(null,x_11376),lt.plugins.elm_light.graph.node_label.call(null,x_11376));
{
var G__11377 = cljs.core.next.call(null,seq__11297_11370__$1);
var G__11378 = null;
var G__11379 = 0;
var G__11380 = 0;
seq__11297_11360 = G__11377;
chunk__11298_11361 = G__11378;
count__11299_11362 = G__11379;
i__11300_11363 = G__11380;
continue;
}
}
} else
{}
}
break;
}
var seq__11301_11381 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"edges","edges",1110261192).cljs$core$IFn$_invoke$arity$1(data));var chunk__11302_11382 = null;var count__11303_11383 = 0;var i__11304_11384 = 0;while(true){
if((i__11304_11384 < count__11303_11383))
{var x_11385 = cljs.core._nth.call(null,chunk__11302_11382,i__11304_11384);g.setEdge(new cljs.core.Keyword(null,"a","a",1013904339).cljs$core$IFn$_invoke$arity$1(x_11385),new cljs.core.Keyword(null,"b","b",1013904340).cljs$core$IFn$_invoke$arity$1(x_11385),{"style": (cljs.core.truth_(new cljs.core.Keyword(null,"transitive","transitive",3584713111).cljs$core$IFn$_invoke$arity$1(x_11385))?"stroke-dasharray: 5, 5;":null), "label": new cljs.core.Keyword(null,"label","label",1116631654).cljs$core$IFn$_invoke$arity$1(x_11385)});
{
var G__11386 = seq__11301_11381;
var G__11387 = chunk__11302_11382;
var G__11388 = count__11303_11383;
var G__11389 = (i__11304_11384 + 1);
seq__11301_11381 = G__11386;
chunk__11302_11382 = G__11387;
count__11303_11383 = G__11388;
i__11304_11384 = G__11389;
continue;
}
} else
{var temp__4092__auto___11390 = cljs.core.seq.call(null,seq__11301_11381);if(temp__4092__auto___11390)
{var seq__11301_11391__$1 = temp__4092__auto___11390;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11301_11391__$1))
{var c__5632__auto___11392 = cljs.core.chunk_first.call(null,seq__11301_11391__$1);{
var G__11393 = cljs.core.chunk_rest.call(null,seq__11301_11391__$1);
var G__11394 = c__5632__auto___11392;
var G__11395 = cljs.core.count.call(null,c__5632__auto___11392);
var G__11396 = 0;
seq__11301_11381 = G__11393;
chunk__11302_11382 = G__11394;
count__11303_11383 = G__11395;
i__11304_11384 = G__11396;
continue;
}
} else
{var x_11397 = cljs.core.first.call(null,seq__11301_11391__$1);g.setEdge(new cljs.core.Keyword(null,"a","a",1013904339).cljs$core$IFn$_invoke$arity$1(x_11397),new cljs.core.Keyword(null,"b","b",1013904340).cljs$core$IFn$_invoke$arity$1(x_11397),{"style": (cljs.core.truth_(new cljs.core.Keyword(null,"transitive","transitive",3584713111).cljs$core$IFn$_invoke$arity$1(x_11397))?"stroke-dasharray: 5, 5;":null), "label": new cljs.core.Keyword(null,"label","label",1116631654).cljs$core$IFn$_invoke$arity$1(x_11397)});
{
var G__11398 = cljs.core.next.call(null,seq__11301_11391__$1);
var G__11399 = null;
var G__11400 = 0;
var G__11401 = 0;
seq__11301_11381 = G__11398;
chunk__11302_11382 = G__11399;
count__11303_11383 = G__11400;
i__11304_11384 = G__11401;
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
}),cljs.core.map.call(null,(function (p__11309){var vec__11310 = p__11309;var k = cljs.core.nth.call(null,vec__11310,0,null);var v = cljs.core.nth.call(null,vec__11310,1,null);return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"package","package",4501809080),new cljs.core.Keyword(null,"range","range",1122184367),new cljs.core.Keyword(null,"version","version",1365512266)],[lt.plugins.elm_light.utils.nskw__GT_name.call(null,k),v,new cljs.core.Keyword(null,"version","version",1365512266).cljs$core$IFn$_invoke$arity$1(cljs.core.some.call(null,((function (vec__11310,k,v){
return (function (p1__11305_SHARP_){if(cljs.core._EQ_.call(null,lt.plugins.elm_light.utils.nskw__GT_name.call(null,k),new cljs.core.Keyword(null,"package","package",4501809080).cljs$core$IFn$_invoke$arity$1(p1__11305_SHARP_)))
{return p1__11305_SHARP_;
} else
{return null;
}
});})(vec__11310,k,v))
,new cljs.core.Keyword(null,"packages","packages",1764771935).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))))]);
}),new cljs.core.Keyword(null,"dependencies","dependencies",1517678747).cljs$core$IFn$_invoke$arity$1(pkg_json))));if(temp__4092__auto__)
{var edges = temp__4092__auto__;lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",1016980252),new cljs.core.Keyword(null,"edges","edges",1110261192)], null),((function (edges,temp__4092__auto__){
return (function (p1__11306_SHARP_){return cljs.core.concat.call(null,p1__11306_SHARP_,edges);
});})(edges,temp__4092__auto__))
);
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"elm.graph.render","elm.graph.render",2076182000));
} else
{return null;
}
});
lt.plugins.elm_light.graph.__BEH__on_get_transitives = (function __BEH__on_get_transitives(this$){var transitives = cljs.core.remove.call(null,new cljs.core.Keyword(null,"range","range",1122184367),new cljs.core.Keyword(null,"packages","packages",1764771935).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))));lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",1016980252),new cljs.core.Keyword(null,"nodes","nodes",1118897699)], null),((function (transitives){
return (function (p1__11311_SHARP_){return cljs.core.concat.call(null,p1__11311_SHARP_,transitives);
});})(transitives))
);
lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"elm.graph.render","elm.graph.render",2076182000));
var seq__11316 = cljs.core.seq.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"version","version",1365512266),new cljs.core.Keyword(null,"packages","packages",1764771935).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))));var chunk__11317 = null;var count__11318 = 0;var i__11319 = 0;while(true){
if((i__11319 < count__11318))
{var x = cljs.core._nth.call(null,chunk__11317,i__11319);lt.plugins.elm_light.graph.get_package_json.call(null,x,cljs.core.partial.call(null,lt.plugins.elm_light.graph.add_edges_for_dep,this$,x));
{
var G__11402 = seq__11316;
var G__11403 = chunk__11317;
var G__11404 = count__11318;
var G__11405 = (i__11319 + 1);
seq__11316 = G__11402;
chunk__11317 = G__11403;
count__11318 = G__11404;
i__11319 = G__11405;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__11316);if(temp__4092__auto__)
{var seq__11316__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11316__$1))
{var c__5632__auto__ = cljs.core.chunk_first.call(null,seq__11316__$1);{
var G__11406 = cljs.core.chunk_rest.call(null,seq__11316__$1);
var G__11407 = c__5632__auto__;
var G__11408 = cljs.core.count.call(null,c__5632__auto__);
var G__11409 = 0;
seq__11316 = G__11406;
chunk__11317 = G__11407;
count__11318 = G__11408;
i__11319 = G__11409;
continue;
}
} else
{var x = cljs.core.first.call(null,seq__11316__$1);lt.plugins.elm_light.graph.get_package_json.call(null,x,cljs.core.partial.call(null,lt.plugins.elm_light.graph.add_edges_for_dep,this$,x));
{
var G__11410 = cljs.core.next.call(null,seq__11316__$1);
var G__11411 = null;
var G__11412 = 0;
var G__11413 = 0;
seq__11316 = G__11410;
chunk__11317 = G__11411;
count__11318 = G__11412;
i__11319 = G__11413;
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
lt.plugins.elm_light.graph.get_dependency_data = (function get_dependency_data(project_path){var pkgs = cljs.core.map.call(null,(function (p1__11321_SHARP_){return cljs.core.assoc.call(null,p1__11321_SHARP_,new cljs.core.Keyword(null,"summary","summary",3451231000),new cljs.core.Keyword(null,"summary","summary",3451231000).cljs$core$IFn$_invoke$arity$1(lt.plugins.elm_light.graph.find_package_by_name.call(null,lt.plugins.elm_light.graph.dependency_graph,new cljs.core.Keyword(null,"package","package",4501809080).cljs$core$IFn$_invoke$arity$1(p1__11321_SHARP_))));
}),cljs.core.map.call(null,(function (p1__11320_SHARP_){return clojure.set.rename_keys.call(null,p1__11320_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"exact","exact",1110851185),new cljs.core.Keyword(null,"version","version",1365512266)], null));
}),lt.plugins.elm_light.utils.get_project_deps.call(null,project_path)));var direct = cljs.core.filter.call(null,new cljs.core.Keyword(null,"range","range",1122184367),pkgs);var rootVersion = new cljs.core.Keyword(null,"version","version",1365512266).cljs$core$IFn$_invoke$arity$1(lt.plugins.elm_light.utils.parse_json_file.call(null,lt.objs.files.join.call(null,project_path,"elm-package.json")));var root = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"package","package",4501809080),lt.objs.files.basename.call(null,project_path),new cljs.core.Keyword(null,"version","version",1365512266),rootVersion,new cljs.core.Keyword(null,"shape","shape",1123304211),"ellipse"], null);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"packages","packages",1764771935),pkgs,new cljs.core.Keyword(null,"nodes","nodes",1118897699),cljs.core.conj.call(null,direct,root),new cljs.core.Keyword(null,"edges","edges",1110261192),cljs.core.map.call(null,((function (pkgs,direct,rootVersion,root){
return (function (p1__11322_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"label","label",1116631654)],[lt.plugins.elm_light.graph.dep_id.call(null,root),lt.plugins.elm_light.graph.dep_id.call(null,p1__11322_SHARP_),new cljs.core.Keyword(null,"range","range",1122184367).cljs$core$IFn$_invoke$arity$1(p1__11322_SHARP_)]);
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
return (function (p__18240){var vec__18241 = p__18240;var k = cljs.core.nth.call(null,vec__18241,0,null);var v = cljs.core.nth.call(null,vec__18241,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.elm_light.utils.nskw__GT_name.call(null,k),v], null);
});})(pkg_file))
,deps)),pkg);
});})(pkg_file))
)));
});
lt.plugins.elm_light.packages.project_wrapper = (function project_wrapper(this$){var e__6289__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.elm","div.elm",2686466363),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"project-packages-wrapper"], null),"Retrieving project package info..."], null)], null));var seq__18248_18273 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__18249_18274 = null;var count__18250_18275 = 0;var i__18251_18276 = 0;while(true){
if((i__18251_18276 < count__18250_18275))
{var vec__18252_18277 = cljs.core._nth.call(null,chunk__18249_18274,i__18251_18276);var ev__6290__auto___18278 = cljs.core.nth.call(null,vec__18252_18277,0,null);var func__6291__auto___18279 = cljs.core.nth.call(null,vec__18252_18277,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___18278,func__6291__auto___18279);
{
var G__18280 = seq__18248_18273;
var G__18281 = chunk__18249_18274;
var G__18282 = count__18250_18275;
var G__18283 = (i__18251_18276 + 1);
seq__18248_18273 = G__18280;
chunk__18249_18274 = G__18281;
count__18250_18275 = G__18282;
i__18251_18276 = G__18283;
continue;
}
} else
{var temp__4092__auto___18284 = cljs.core.seq.call(null,seq__18248_18273);if(temp__4092__auto___18284)
{var seq__18248_18285__$1 = temp__4092__auto___18284;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18248_18285__$1))
{var c__5632__auto___18286 = cljs.core.chunk_first.call(null,seq__18248_18285__$1);{
var G__18287 = cljs.core.chunk_rest.call(null,seq__18248_18285__$1);
var G__18288 = c__5632__auto___18286;
var G__18289 = cljs.core.count.call(null,c__5632__auto___18286);
var G__18290 = 0;
seq__18248_18273 = G__18287;
chunk__18249_18274 = G__18288;
count__18250_18275 = G__18289;
i__18251_18276 = G__18290;
continue;
}
} else
{var vec__18253_18291 = cljs.core.first.call(null,seq__18248_18285__$1);var ev__6290__auto___18292 = cljs.core.nth.call(null,vec__18253_18291,0,null);var func__6291__auto___18293 = cljs.core.nth.call(null,vec__18253_18291,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___18292,func__6291__auto___18293);
{
var G__18294 = cljs.core.next.call(null,seq__18248_18285__$1);
var G__18295 = null;
var G__18296 = 0;
var G__18297 = 0;
seq__18248_18273 = G__18294;
chunk__18249_18274 = G__18295;
count__18250_18275 = G__18296;
i__18251_18276 = G__18297;
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
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.packages","elm-packages","lt.plugins.elm-light.packages/elm-packages",4552372902),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elm.packages","elm.packages",3931311271),null], null), null),new cljs.core.Keyword(null,"label","label",1116631654),"Elm project packages",new cljs.core.Keyword(null,"name","name",1017277949),"Elm project packages",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){lt.plugins.elm_light.utils.fetch_all_packages.call(null,(function (p1__18254_SHARP_){return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"all-packages","all-packages",1123981067),p1__18254_SHARP_], null));
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
lt.plugins.elm_light.packages.idx_active = (function idx_active(items){return cljs.core.first.call(null,cljs.core.keep_indexed.call(null,(function (p1__18256_SHARP_,p2__18255_SHARP_){if(cljs.core.truth_(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(p2__18255_SHARP_)))
{return p1__18256_SHARP_;
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
lt.plugins.elm_light.packages.on_pkg_sel = (function on_pkg_sel(){var items_18298 = new cljs.core.Keyword(null,"ac-packages","ac-packages",1548109226).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.elm_light.packages.elm_packages));var temp__4090__auto___18299 = lt.plugins.elm_light.packages.idx_active.call(null,items_18298);if(cljs.core.truth_(temp__4090__auto___18299))
{var idx_18300 = temp__4090__auto___18299;lt.object.assoc_in_BANG_.call(null,lt.plugins.elm_light.packages.elm_packages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ac-versions","ac-versions",3107155800)], null),new cljs.core.Keyword(null,"versions","versions",3323818509).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,items_18298,idx_18300)));
lt.object.assoc_in_BANG_.call(null,lt.plugins.elm_light.packages.elm_packages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ac-version","ac-version",2051259807)], null),cljs.core.first.call(null,new cljs.core.Keyword(null,"versions","versions",3323818509).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,items_18298,idx_18300))));
lt.object.assoc_in_BANG_.call(null,lt.plugins.elm_light.packages.elm_packages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ac-package","ac-package",892589325)], null),new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,items_18298,idx_18300)));
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
return (function (p1__18257_SHARP_){if(cljs.core._EQ_.call(null,p1__18257_SHARP_,0))
{lt.objs.notifos.done_working.call(null);
} else
{lt.objs.notifos.set_msg_BANG_.call(null,"Error installing elm package",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),"error",new cljs.core.Keyword(null,"timeout","timeout",3994960083),5000], null));
}
lt.object.raise.call(null,lt.plugins.elm_light.packages.elm_packages,new cljs.core.Keyword(null,"elm.show.project.packages","elm.show.project.packages",3385102109),new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.elm_light.packages.elm_packages)));
return lt.object.raise.call(null,lt.plugins.elm_light.graph.dependency_graph,new cljs.core.Keyword(null,"elm.graph.show-dependencies","elm.graph.show-dependencies",3464547203),new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.elm_light.packages.elm_packages)),false);
});})(proc,args))
);
proc.stdout.on("data",((function (proc,args){
return (function (p1__18258_SHARP_){return lt.objs.notifos.msg_STAR_.call(null,[cljs.core.str("Package install: "),cljs.core.str(p1__18258_SHARP_)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"timeout","timeout",3994960083),5000], null));
});})(proc,args))
);
return proc.stderr.on("data",((function (proc,args){
return (function (p1__18259_SHARP_){return lt.objs.console.error.call(null,[cljs.core.str(p1__18259_SHARP_)].join(''));
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
lt.plugins.elm_light.packages.PackageRow = quiescent.component.call(null,(function (p__18260){var map__18261 = p__18260;var map__18261__$1 = ((cljs.core.seq_QMARK_.call(null,map__18261))?cljs.core.apply.call(null,cljs.core.hash_map,map__18261):map__18261);var on_browse = cljs.core.get.call(null,map__18261__$1,new cljs.core.Keyword(null,"on-browse","on-browse",587885994));var on_remove = cljs.core.get.call(null,map__18261__$1,new cljs.core.Keyword(null,"on-remove","on-remove",1033879460));var exact = cljs.core.get.call(null,map__18261__$1,new cljs.core.Keyword(null,"exact","exact",1110851185));var range = cljs.core.get.call(null,map__18261__$1,new cljs.core.Keyword(null,"range","range",1122184367));var package$ = cljs.core.get.call(null,map__18261__$1,new cljs.core.Keyword(null,"package","package",4501809080));return quiescent.dom.tr.call(null,cljs.core.PersistentArrayMap.EMPTY,quiescent.dom.td.call(null,cljs.core.PersistentArrayMap.EMPTY,(cljs.core.truth_((function (){var and__4872__auto__ = package$;if(cljs.core.truth_(and__4872__auto__))
{return exact;
} else
{return and__4872__auto__;
}
})())?quiescent.dom.span.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",1004015509),"link",new cljs.core.Keyword(null,"onClick","onClick",3956969051),((function (map__18261,map__18261__$1,on_browse,on_remove,exact,range,package$){
return (function (){return on_browse.call(null,package$,exact);
});})(map__18261,map__18261__$1,on_browse,on_remove,exact,range,package$))
], null),package$):package$)),quiescent.dom.td.call(null,cljs.core.PersistentArrayMap.EMPTY,range),quiescent.dom.td.call(null,cljs.core.PersistentArrayMap.EMPTY,exact),quiescent.dom.td.call(null,cljs.core.PersistentArrayMap.EMPTY,(cljs.core.truth_(range)?quiescent.dom.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",3956969051),((function (map__18261,map__18261__$1,on_browse,on_remove,exact,range,package$){
return (function (){return on_remove.call(null,package$);
});})(map__18261,map__18261__$1,on_browse,on_remove,exact,range,package$))
], null),"remove"):null)));
}));
/**
* 
*/
lt.plugins.elm_light.packages.PackageTable = quiescent.component.call(null,(function (props){return quiescent.dom.table.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",1004015509),"package-table"], null),quiescent.dom.thead.call(null,cljs.core.PersistentArrayMap.EMPTY,quiescent.dom.tr.call(null,cljs.core.PersistentArrayMap.EMPTY,quiescent.dom.th.call(null,cljs.core.PersistentArrayMap.EMPTY,"Package"),quiescent.dom.th.call(null,cljs.core.PersistentArrayMap.EMPTY,"Range"),quiescent.dom.th.call(null,cljs.core.PersistentArrayMap.EMPTY,"Exact"),quiescent.dom.th.call(null,cljs.core.PersistentArrayMap.EMPTY,""))),cljs.core.apply.call(null,quiescent.dom.tbody,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__18262_SHARP_){return lt.plugins.elm_light.packages.PackageRow.call(null,cljs.core.assoc.call(null,p1__18262_SHARP_,new cljs.core.Keyword(null,"on-remove","on-remove",1033879460),new cljs.core.Keyword(null,"on-remove","on-remove",1033879460).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"on-browse","on-browse",587885994),new cljs.core.Keyword(null,"on-browse","on-browse",587885994).cljs$core$IFn$_invoke$arity$1(props)));
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
lt.plugins.elm_light.autocompleter.core.default_options = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"async","async",1107031534),true,new cljs.core.Keyword(null,"completeSingle","completeSingle",2100037203),false,new cljs.core.Keyword(null,"supportsSelection","supportsSelection",3475218138),true,new cljs.core.Keyword(null,"closeOnUnfocus","closeOnUnfocus",2215570266),true,new cljs.core.Keyword(null,"customKeys","customKeys",3726901367),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"Up","Up",1013906989),(function (p1__18345_SHARP_,p2__18344_SHARP_){return p2__18344_SHARP_.moveFocus.call(null,-1);
}),new cljs.core.Keyword(null,"Down","Down",1016040500),(function (p1__18347_SHARP_,p2__18346_SHARP_){return p2__18346_SHARP_.moveFocus.call(null,1);
}),new cljs.core.Keyword(null,"Enter","Enter",1081018922),(function (a,b){return b.pick();
}),new cljs.core.Keyword(null,"Tab","Tab",1013988071),(function (a,b){return b.pick();
}),new cljs.core.Keyword(null,"Esc","Esc",1013974215),(function (p1__18349_SHARP_,p2__18348_SHARP_){return p2__18348_SHARP_.close.call(null);
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
{return cljs.core.clj__GT_js.call(null,(function (p1__18351_SHARP_){var fst = cljs.core.first.call(null,new cljs.core.Keyword(null,"list","list",1017226256).cljs$core$IFn$_invoke$arity$1(p1__18351_SHARP_));return cljs.core.assoc.call(null,p1__18351_SHARP_,new cljs.core.Keyword(null,"from","from",1017056028),new cljs.core.Keyword(null,"from","from",1017056028).cljs$core$IFn$_invoke$arity$1(fst),new cljs.core.Keyword(null,"to","to",1013907949),new cljs.core.Keyword(null,"to","to",1013907949).cljs$core$IFn$_invoke$arity$1(fst));
}).call(null,cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"list","list",1017226256)],[cljs.core.take.call(null,25,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"text","text",1017460895),lt.plugins.elm_light.autocompleter.core.distinct_completions.call(null,cljs.core.filter.call(null,(function (p1__18350_SHARP_){return (new cljs.core.Keyword(null,"displayText","displayText",2728236161).cljs$core$IFn$_invoke$arity$1(p1__18350_SHARP_).length < 1000);
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
lt.plugins.elm_light.autocompleter.core.listen_for_hint_results = (function listen_for_hint_results(ed,channels,hinter_ch){var t = cljs.core.async.timeout.call(null,500);var c__12683__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__12683__auto__,t){
return (function (){var f__12684__auto__ = (function (){var switch__12613__auto__ = ((function (c__12683__auto__,t){
return (function (state_18437){var state_val_18438 = (state_18437[1]);if((state_val_18438 === 1))
{var inst_18406 = cljs.core.conj.call(null,channels,t);var inst_18407 = cljs.core.PersistentVector.EMPTY;var inst_18408 = inst_18406;var state_18437__$1 = (function (){var statearr_18439 = state_18437;(statearr_18439[7] = inst_18408);
(statearr_18439[8] = inst_18407);
return statearr_18439;
})();var statearr_18440_18488 = state_18437__$1;(statearr_18440_18488[2] = null);
(statearr_18440_18488[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18438 === 2))
{var inst_18408 = (state_18437[7]);var inst_18410 = cljs.core.count.call(null,inst_18408);var inst_18411 = cljs.core._EQ_.call(null,1,inst_18410);var state_18437__$1 = state_18437;if(inst_18411)
{var statearr_18441_18489 = state_18437__$1;(statearr_18441_18489[1] = 4);
} else
{var statearr_18442_18490 = state_18437__$1;(statearr_18442_18490[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18438 === 3))
{var inst_18435 = (state_18437[2]);var state_18437__$1 = state_18437;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18437__$1,inst_18435);
} else
{if((state_val_18438 === 4))
{var inst_18407 = (state_18437[8]);var inst_18413 = cljs.core.async.put_BANG_.call(null,hinter_ch,inst_18407);var state_18437__$1 = state_18437;var statearr_18443_18491 = state_18437__$1;(statearr_18443_18491[2] = inst_18413);
(statearr_18443_18491[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18438 === 5))
{var inst_18408 = (state_18437[7]);var state_18437__$1 = state_18437;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_18437__$1,7,inst_18408);
} else
{if((state_val_18438 === 6))
{var inst_18433 = (state_18437[2]);var state_18437__$1 = state_18437;var statearr_18444_18492 = state_18437__$1;(statearr_18444_18492[2] = inst_18433);
(statearr_18444_18492[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18438 === 7))
{var inst_18419 = (state_18437[9]);var inst_18417 = (state_18437[2]);var inst_18418 = cljs.core.nth.call(null,inst_18417,0,null);var inst_18419__$1 = cljs.core.nth.call(null,inst_18417,1,null);var inst_18420 = (inst_18419__$1 === t);var state_18437__$1 = (function (){var statearr_18445 = state_18437;(statearr_18445[10] = inst_18418);
(statearr_18445[9] = inst_18419__$1);
return statearr_18445;
})();if(cljs.core.truth_(inst_18420))
{var statearr_18446_18493 = state_18437__$1;(statearr_18446_18493[1] = 8);
} else
{var statearr_18447_18494 = state_18437__$1;(statearr_18447_18494[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18438 === 8))
{var inst_18407 = (state_18437[8]);var inst_18422 = cljs.core.println.call(null,"WARNING: Timeout waiting for hinter provider channel results");var inst_18423 = cljs.core.async.put_BANG_.call(null,hinter_ch,inst_18407);var state_18437__$1 = (function (){var statearr_18448 = state_18437;(statearr_18448[11] = inst_18422);
return statearr_18448;
})();var statearr_18449_18495 = state_18437__$1;(statearr_18449_18495[2] = inst_18423);
(statearr_18449_18495[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18438 === 9))
{var inst_18408 = (state_18437[7]);var inst_18418 = (state_18437[10]);var inst_18407 = (state_18437[8]);var inst_18419 = (state_18437[9]);var inst_18425 = cljs.core.into.call(null,inst_18407,inst_18418);var inst_18426 = [inst_18419];var inst_18427 = cljs.core.PersistentHashSet.fromArray.call(null,inst_18426,true);var inst_18428 = cljs.core.remove.call(null,inst_18427,inst_18408);var inst_18407__$1 = inst_18425;var inst_18408__$1 = inst_18428;var state_18437__$1 = (function (){var statearr_18450 = state_18437;(statearr_18450[7] = inst_18408__$1);
(statearr_18450[8] = inst_18407__$1);
return statearr_18450;
})();var statearr_18451_18496 = state_18437__$1;(statearr_18451_18496[2] = null);
(statearr_18451_18496[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18438 === 10))
{var inst_18431 = (state_18437[2]);var state_18437__$1 = state_18437;var statearr_18452_18497 = state_18437__$1;(statearr_18452_18497[2] = inst_18431);
(statearr_18452_18497[1] = 6);
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
});})(c__12683__auto__,t))
;return ((function (switch__12613__auto__,c__12683__auto__,t){
return (function() {
var state_machine__12614__auto__ = null;
var state_machine__12614__auto____0 = (function (){var statearr_18456 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18456[0] = state_machine__12614__auto__);
(statearr_18456[1] = 1);
return statearr_18456;
});
var state_machine__12614__auto____1 = (function (state_18437){while(true){
var ret_value__12615__auto__ = (function (){try{while(true){
var result__12616__auto__ = switch__12613__auto__.call(null,state_18437);if(cljs.core.keyword_identical_QMARK_.call(null,result__12616__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12616__auto__;
}
break;
}
}catch (e18457){if((e18457 instanceof Object))
{var ex__12617__auto__ = e18457;var statearr_18458_18498 = state_18437;(statearr_18458_18498[5] = ex__12617__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18437);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18457;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12615__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18499 = state_18437;
state_18437 = G__18499;
continue;
}
} else
{return ret_value__12615__auto__;
}
break;
}
});
state_machine__12614__auto__ = function(state_18437){
switch(arguments.length){
case 0:
return state_machine__12614__auto____0.call(this);
case 1:
return state_machine__12614__auto____1.call(this,state_18437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12614__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12614__auto____0;
state_machine__12614__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12614__auto____1;
return state_machine__12614__auto__;
})()
;})(switch__12613__auto__,c__12683__auto__,t))
})();var state__12685__auto__ = (function (){var statearr_18459 = f__12684__auto__.call(null);(statearr_18459[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12683__auto__);
return statearr_18459;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12685__auto__);
});})(c__12683__auto__,t))
);
return c__12683__auto__;
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
return (function (_,cb){var c__12683__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__12683__auto__,ch){
return (function (){var f__12684__auto__ = (function (){var switch__12613__auto__ = ((function (c__12683__auto__,ch){
return (function (state_18479){var state_val_18480 = (state_18479[1]);if((state_val_18480 === 2))
{var inst_18475 = (state_18479[2]);var inst_18476 = lt.plugins.elm_light.autocompleter.core.process_hint_results.call(null,inst_18475);var inst_18477 = cb.call(null,inst_18476);var state_18479__$1 = state_18479;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18479__$1,inst_18477);
} else
{if((state_val_18480 === 1))
{var state_18479__$1 = state_18479;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18479__$1,2,ch);
} else
{return null;
}
}
});})(c__12683__auto__,ch))
;return ((function (switch__12613__auto__,c__12683__auto__,ch){
return (function() {
var state_machine__12614__auto__ = null;
var state_machine__12614__auto____0 = (function (){var statearr_18484 = [null,null,null,null,null,null,null];(statearr_18484[0] = state_machine__12614__auto__);
(statearr_18484[1] = 1);
return statearr_18484;
});
var state_machine__12614__auto____1 = (function (state_18479){while(true){
var ret_value__12615__auto__ = (function (){try{while(true){
var result__12616__auto__ = switch__12613__auto__.call(null,state_18479);if(cljs.core.keyword_identical_QMARK_.call(null,result__12616__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12616__auto__;
}
break;
}
}catch (e18485){if((e18485 instanceof Object))
{var ex__12617__auto__ = e18485;var statearr_18486_18500 = state_18479;(statearr_18486_18500[5] = ex__12617__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18479);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18485;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12615__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18501 = state_18479;
state_18479 = G__18501;
continue;
}
} else
{return ret_value__12615__auto__;
}
break;
}
});
state_machine__12614__auto__ = function(state_18479){
switch(arguments.length){
case 0:
return state_machine__12614__auto____0.call(this);
case 1:
return state_machine__12614__auto____1.call(this,state_18479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12614__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12614__auto____0;
state_machine__12614__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12614__auto____1;
return state_machine__12614__auto__;
})()
;})(switch__12613__auto__,c__12683__auto__,ch))
})();var state__12685__auto__ = (function (){var statearr_18487 = f__12684__auto__.call(null);(statearr_18487[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12683__auto__);
return statearr_18487;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12685__auto__);
});})(c__12683__auto__,ch))
);
return c__12683__auto__;
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
var G__18309 = (line - 1);
line = G__18309;
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
var G__18310 = (line + 1);
line = G__18310;
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
var G__18311 = (line - 1);
line = G__18311;
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
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.console');
goog.require('lt.objs.proc');
goog.require('lt.objs.console');
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
return (function (p1__11153_SHARP_){return lt.plugins.elm_light.clients.on_elm_message.call(null,client,p1__11153_SHARP_);
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
lt.plugins.elm_light.clients.start_elm_client = (function start_elm_client(p__11154){var map__11156 = p__11154;var map__11156__$1 = ((cljs.core.seq_QMARK_.call(null,map__11156))?cljs.core.apply.call(null,cljs.core.hash_map,map__11156):map__11156);var props = map__11156__$1;var client = cljs.core.get.call(null,map__11156__$1,new cljs.core.Keyword(null,"client","client",3951159101));var proj_path = cljs.core.get.call(null,map__11156__$1,new cljs.core.Keyword(null,"proj-path","proj-path",4362692615));var path = cljs.core.get.call(null,map__11156__$1,new cljs.core.Keyword(null,"path","path",1017337751));lt.objs.notifos.working.call(null,"Connecting..");
return lt.plugins.elm_light.clients.claim_reactor_port.call(null,proj_path,((function (map__11156,map__11156__$1,props,client,proj_path,path){
return (function (_,port){var worker = lt.plugins.elm_light.clients.start_elm_worker.call(null,proj_path,port,client);lt.object.merge_BANG_.call(null,client,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1017277949),lt.objs.files.basename.call(null,proj_path),new cljs.core.Keyword(null,"dir","dir",1014003711),proj_path,new cljs.core.Keyword(null,"reactor-port","reactor-port",4649590590),port,new cljs.core.Keyword(null,"worker","worker",4526786288),worker,new cljs.core.Keyword(null,"commands","commands",4706336250),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"editor.elm.lint","editor.elm.lint",1086056222),null,new cljs.core.Keyword(null,"editor.elm.make","editor.elm.make",1086078217),null,new cljs.core.Keyword(null,"editor.eval.elm","editor.eval.elm",1083015975),null,new cljs.core.Keyword(null,"editor.elm.hint","editor.elm.hint",1085937058),null,new cljs.core.Keyword(null,"elm.repl.restart","elm.repl.restart",2931654218),null,new cljs.core.Keyword(null,"docs.elm.search","docs.elm.search",737241333),null,new cljs.core.Keyword(null,"editor.elm.doc","editor.elm.doc",1570413537),null,new cljs.core.Keyword(null,"editor.elm.gendoc","editor.elm.gendoc",1485628611),null], null), null)], null));
return lt.object.add_behavior_BANG_.call(null,client,new cljs.core.Keyword("lt.plugins.elm-light.clients","send!","lt.plugins.elm-light.clients/send!",867013595));
});})(map__11156,map__11156__$1,props,client,proj_path,path))
);
});
lt.plugins.elm_light.clients.try_connect = (function try_connect(p__11157){var map__11159 = p__11157;var map__11159__$1 = ((cljs.core.seq_QMARK_.call(null,map__11159))?cljs.core.apply.call(null,cljs.core.hash_map,map__11159):map__11159);var props = map__11159__$1;var info = cljs.core.get.call(null,map__11159__$1,new cljs.core.Keyword(null,"info","info",1017141280));var path = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(info);var proj_path = lt.plugins.elm_light.utils.project_path.call(null,path);var client = lt.objs.clients.client_BANG_.call(null,new cljs.core.Keyword(null,"elm-client","elm-client",1622336068));if(cljs.core.truth_(proj_path))
{lt.plugins.elm_light.clients.start_elm_client.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",1017337751),path,new cljs.core.Keyword(null,"proj-path","proj-path",4362692615),proj_path,new cljs.core.Keyword(null,"client","client",3951159101),client], null));
} else
{lt.objs.notifos.done_working.call(null);
lt.objs.notifos.set_msg_BANG_.call(null,[cljs.core.str("Couldn't find a elm-package.json in any parent of path: "),cljs.core.str(path)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
lt.objs.clients.rem_BANG_.call(null,client);
}
return client;
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
lt.plugins.elm_light.docpreview.preview_skeleton = (function preview_skeleton(this$){var e__6289__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"elm-doc-preview"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"Generating elm docs, please wait a little..."], null)], null));var seq__11166_11190 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__11167_11191 = null;var count__11168_11192 = 0;var i__11169_11193 = 0;while(true){
if((i__11169_11193 < count__11168_11192))
{var vec__11170_11194 = cljs.core._nth.call(null,chunk__11167_11191,i__11169_11193);var ev__6290__auto___11195 = cljs.core.nth.call(null,vec__11170_11194,0,null);var func__6291__auto___11196 = cljs.core.nth.call(null,vec__11170_11194,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___11195,func__6291__auto___11196);
{
var G__11197 = seq__11166_11190;
var G__11198 = chunk__11167_11191;
var G__11199 = count__11168_11192;
var G__11200 = (i__11169_11193 + 1);
seq__11166_11190 = G__11197;
chunk__11167_11191 = G__11198;
count__11168_11192 = G__11199;
i__11169_11193 = G__11200;
continue;
}
} else
{var temp__4092__auto___11201 = cljs.core.seq.call(null,seq__11166_11190);if(temp__4092__auto___11201)
{var seq__11166_11202__$1 = temp__4092__auto___11201;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11166_11202__$1))
{var c__5632__auto___11203 = cljs.core.chunk_first.call(null,seq__11166_11202__$1);{
var G__11204 = cljs.core.chunk_rest.call(null,seq__11166_11202__$1);
var G__11205 = c__5632__auto___11203;
var G__11206 = cljs.core.count.call(null,c__5632__auto___11203);
var G__11207 = 0;
seq__11166_11190 = G__11204;
chunk__11167_11191 = G__11205;
count__11168_11192 = G__11206;
i__11169_11193 = G__11207;
continue;
}
} else
{var vec__11171_11208 = cljs.core.first.call(null,seq__11166_11202__$1);var ev__6290__auto___11209 = cljs.core.nth.call(null,vec__11171_11208,0,null);var func__6291__auto___11210 = cljs.core.nth.call(null,vec__11171_11208,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___11209,func__6291__auto___11210);
{
var G__11211 = cljs.core.next.call(null,seq__11166_11202__$1);
var G__11212 = null;
var G__11213 = 0;
var G__11214 = 0;
seq__11166_11190 = G__11211;
chunk__11167_11191 = G__11212;
count__11168_11192 = G__11213;
i__11169_11193 = G__11214;
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
lt.plugins.elm_light.docpreview.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___11215 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___11215))
{var ts_11216 = temp__4092__auto___11215;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_11216))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_11216);
} else
{}
} else
{}
var temp__4092__auto___11217 = new cljs.core.Keyword(null,"owner-ed","owner-ed",2677003627).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___11217))
{var ed_11218 = temp__4092__auto___11217;lt.object.assoc_in_BANG_.call(null,ed_11218,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elmdoc","elmdoc",4008535620)], null),null);
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
return (function (){var seq__11176 = cljs.core.seq.call(null,lt.util.dom.$$.call(null,"pre code",lt.object.__GT_content.call(null,elmdoc)));var chunk__11177 = null;var count__11178 = 0;var i__11179 = 0;while(true){
if((i__11179 < count__11178))
{var block = cljs.core._nth.call(null,chunk__11177,i__11179);hljs.highlightBlock(block);
{
var G__11219 = seq__11176;
var G__11220 = chunk__11177;
var G__11221 = count__11178;
var G__11222 = (i__11179 + 1);
seq__11176 = G__11219;
chunk__11177 = G__11220;
count__11178 = G__11221;
i__11179 = G__11222;
continue;
}
} else
{var temp__4092__auto____$1 = cljs.core.seq.call(null,seq__11176);if(temp__4092__auto____$1)
{var seq__11176__$1 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11176__$1))
{var c__5632__auto__ = cljs.core.chunk_first.call(null,seq__11176__$1);{
var G__11223 = cljs.core.chunk_rest.call(null,seq__11176__$1);
var G__11224 = c__5632__auto__;
var G__11225 = cljs.core.count.call(null,c__5632__auto__);
var G__11226 = 0;
seq__11176 = G__11223;
chunk__11177 = G__11224;
count__11178 = G__11225;
i__11179 = G__11226;
continue;
}
} else
{var block = cljs.core.first.call(null,seq__11176__$1);hljs.highlightBlock(block);
{
var G__11227 = cljs.core.next.call(null,seq__11176__$1);
var G__11228 = null;
var G__11229 = 0;
var G__11230 = 0;
seq__11176 = G__11227;
chunk__11177 = G__11228;
count__11178 = G__11229;
i__11179 = G__11230;
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
lt.plugins.elm_light.modulebrowser.resolve_module_file = (function resolve_module_file(project_path,pck_json,package$,module,version){return cljs.core.some.call(null,(function (p1__18177_SHARP_){if(cljs.core.truth_(lt.objs.files.exists_QMARK_.call(null,p1__18177_SHARP_)))
{return p1__18177_SHARP_;
} else
{return null;
}
}),cljs.core.map.call(null,(function (p1__18176_SHARP_){return lt.objs.files.join.call(null,project_path,"elm-stuff/packages",package$,version,p1__18176_SHARP_,[cljs.core.str(clojure.string.replace.call(null,module,".",lt.objs.files.separator)),cljs.core.str(".elm")].join(''));
}),new cljs.core.Keyword(null,"source-directories","source-directories",4475397259).cljs$core$IFn$_invoke$arity$1(pck_json)));
});
lt.plugins.elm_light.modulebrowser.get_exposed_modules = (function get_exposed_modules(project_path,p__18178){var map__18180 = p__18178;var map__18180__$1 = ((cljs.core.seq_QMARK_.call(null,map__18180))?cljs.core.apply.call(null,cljs.core.hash_map,map__18180):map__18180);var exact = cljs.core.get.call(null,map__18180__$1,new cljs.core.Keyword(null,"exact","exact",1110851185));var package$ = cljs.core.get.call(null,map__18180__$1,new cljs.core.Keyword(null,"package","package",4501809080));var pck_json = lt.plugins.elm_light.utils.parse_json_file.call(null,lt.objs.files.join.call(null,project_path,"elm-stuff/packages",package$,exact,"elm-package.json"));return cljs.core.map.call(null,((function (pck_json,map__18180,map__18180__$1,exact,package$){
return (function (x){return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1017277949),x,new cljs.core.Keyword(null,"packageName","packageName",1922663267),package$,new cljs.core.Keyword(null,"version","version",1365512266),exact,new cljs.core.Keyword(null,"file","file",1017047278),lt.plugins.elm_light.modulebrowser.resolve_module_file.call(null,project_path,pck_json,package$,x,exact)], null);
});})(pck_json,map__18180,map__18180__$1,exact,package$))
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
return (function (p1__18181_SHARP_){return cljs.core._EQ_.call(null,lt.objs.files.ext.call(null,p1__18181_SHARP_),"elm");
});})(pck_json))
,lt.objs.files.ls.call(null,project_path)));
} else
{return cljs.core.map.call(null,((function (pck_json){
return (function (x){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),lt.plugins.elm_light.modulebrowser.deduce_module_name.call(null,lt.objs.files.join.call(null,project_path,dir),x),new cljs.core.Keyword(null,"file","file",1017047278),x], null);
});})(pck_json))
,lt.objs.files.filter_walk.call(null,((function (pck_json){
return (function (p1__18182_SHARP_){return cljs.core._EQ_.call(null,lt.objs.files.ext.call(null,p1__18182_SHARP_),"elm");
});})(pck_json))
,lt.objs.files.join.call(null,project_path,dir)));
}
});})(pck_json))
,new cljs.core.Keyword(null,"source-directories","source-directories",4475397259).cljs$core$IFn$_invoke$arity$1(pck_json))));
});
lt.plugins.elm_light.modulebrowser.get_all_modules = (function get_all_modules(project_path){return cljs.core.concat.call(null,lt.plugins.elm_light.modulebrowser.get_project_modules.call(null,project_path),lt.plugins.elm_light.modulebrowser.get_package_modules.call(null,project_path));
});
lt.plugins.elm_light.modulebrowser.wrapper = (function wrapper(this$){var e__6289__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"elm-module-browser"], null),"Retrieving modules..."], null));var seq__18189_18205 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__18190_18206 = null;var count__18191_18207 = 0;var i__18192_18208 = 0;while(true){
if((i__18192_18208 < count__18191_18207))
{var vec__18193_18209 = cljs.core._nth.call(null,chunk__18190_18206,i__18192_18208);var ev__6290__auto___18210 = cljs.core.nth.call(null,vec__18193_18209,0,null);var func__6291__auto___18211 = cljs.core.nth.call(null,vec__18193_18209,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___18210,func__6291__auto___18211);
{
var G__18212 = seq__18189_18205;
var G__18213 = chunk__18190_18206;
var G__18214 = count__18191_18207;
var G__18215 = (i__18192_18208 + 1);
seq__18189_18205 = G__18212;
chunk__18190_18206 = G__18213;
count__18191_18207 = G__18214;
i__18192_18208 = G__18215;
continue;
}
} else
{var temp__4092__auto___18216 = cljs.core.seq.call(null,seq__18189_18205);if(temp__4092__auto___18216)
{var seq__18189_18217__$1 = temp__4092__auto___18216;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18189_18217__$1))
{var c__5632__auto___18218 = cljs.core.chunk_first.call(null,seq__18189_18217__$1);{
var G__18219 = cljs.core.chunk_rest.call(null,seq__18189_18217__$1);
var G__18220 = c__5632__auto___18218;
var G__18221 = cljs.core.count.call(null,c__5632__auto___18218);
var G__18222 = 0;
seq__18189_18205 = G__18219;
chunk__18190_18206 = G__18220;
count__18191_18207 = G__18221;
i__18192_18208 = G__18222;
continue;
}
} else
{var vec__18194_18223 = cljs.core.first.call(null,seq__18189_18217__$1);var ev__6290__auto___18224 = cljs.core.nth.call(null,vec__18194_18223,0,null);var func__6291__auto___18225 = cljs.core.nth.call(null,vec__18194_18223,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___18224,func__6291__auto___18225);
{
var G__18226 = cljs.core.next.call(null,seq__18189_18217__$1);
var G__18227 = null;
var G__18228 = 0;
var G__18229 = 0;
seq__18189_18205 = G__18226;
chunk__18190_18206 = G__18227;
count__18191_18207 = G__18228;
i__18192_18208 = G__18229;
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
lt.plugins.elm_light.hinter.__GT_hints = (function __GT_hints(token,completions){return cljs.core.map.call(null,(function (p1__15131_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"text","text",1017460895),new cljs.core.Keyword(null,"displayText","displayText",2728236161),new cljs.core.Keyword(null,"render","render",4374279432),new cljs.core.Keyword(null,"from","from",1017056028),new cljs.core.Keyword(null,"to","to",1013907949)],[new cljs.core.Keyword(null,"completion","completion",4767668046).cljs$core$IFn$_invoke$arity$1(p1__15131_SHARP_),new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(p1__15131_SHARP_),(function (el,self,data){return lt.util.dom.html.call(null,el,wrapMatch(data.displayText,{"matched": new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(token)}));
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(token)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"end","end",1014004813).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(token)], null)]);
}),completions);
});
lt.plugins.elm_light.hinter.__BEH__async_hint_results = (function __BEH__async_hint_results(ed,p__15132){var map__15134 = p__15132;var map__15134__$1 = ((cljs.core.seq_QMARK_.call(null,map__15134))?cljs.core.apply.call(null,cljs.core.hash_map,map__15134):map__15134);var completions = cljs.core.get.call(null,map__15134__$1,new cljs.core.Keyword(null,"completions","completions",1416465289));var token = cljs.core.get.call(null,map__15134__$1,new cljs.core.Keyword(null,"token","token",1124445547));var channel = cljs.core.get.call(null,map__15134__$1,new cljs.core.Keyword(null,"channel","channel",1752854645));var hints = lt.plugins.elm_light.hinter.__GT_hints.call(null,token,completions);var temp__4092__auto__ = lt.plugins.elm_light.hinter.get_ch.call(null,ed,channel);if(cljs.core.truth_(temp__4092__auto__))
{var ch = temp__4092__auto__;lt.object.assoc_in_BANG_.call(null,ed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elm-hint-cached-hints","elm-hint-cached-hints",1223515634)], null),hints);
lt.object.assoc_in_BANG_.call(null,ed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elm-hint-cached-token","elm-hint-cached-token",1234773279)], null),token);
cljs.core.async.put_BANG_.call(null,ch,hints);
return lt.plugins.elm_light.hinter.remove_ch.call(null,ed,channel);
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.hinter","async-hint-results","lt.plugins.elm-light.hinter/async-hint-results",2062832165),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.hinter.__BEH__async_hint_results,new cljs.core.Keyword(null,"desc","desc",1016984067),"Async dummy: Hint results",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.elm.hints.result","editor.elm.hints.result",2636151706),null], null), null));
lt.plugins.elm_light.hinter.maybe_cached_hints = (function maybe_cached_hints(token,cached_token,cached_hints){var starts_with = (function (p1__15135_SHARP_,p2__15136_SHARP_){var and__4872__auto__ = p1__15135_SHARP_;if(cljs.core.truth_(and__4872__auto__))
{var and__4872__auto____$1 = p2__15136_SHARP_;if(cljs.core.truth_(and__4872__auto____$1))
{return cljs.core._EQ_.call(null,0,p1__15135_SHARP_.indexOf(p2__15136_SHARP_));
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
return (function (p1__15139_SHARP_){return cljs.core.assoc.call(null,p1__15139_SHARP_,new cljs.core.Keyword(null,"render","render",4374279432),((function (starts_with){
return (function (el,self,data){return lt.util.dom.html.call(null,el,wrapMatch(data.displayText,{"matched": new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(token)}));
});})(starts_with))
);
});})(starts_with))
,cljs.core.map.call(null,((function (starts_with){
return (function (p1__15138_SHARP_){return cljs.core.assoc_in.call(null,p1__15138_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to","to",1013907949),new cljs.core.Keyword(null,"ch","ch",1013907415)], null),new cljs.core.Keyword(null,"end","end",1014004813).cljs$core$IFn$_invoke$arity$1(token));
});})(starts_with))
,cljs.core.filter.call(null,((function (starts_with){
return (function (p1__15137_SHARP_){return starts_with.call(null,new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(p1__15137_SHARP_),new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(token));
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
{var temp__4090__auto___15150 = lt.plugins.elm_light.hinter.maybe_cached_hints.call(null,token,cached_token,cached_hints);if(cljs.core.truth_(temp__4090__auto___15150))
{var hints_15151 = temp__4090__auto___15150;cljs.core.async.put_BANG_.call(null,ch,hints_15151);
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
goog.require('lt.plugins.auto_complete');
goog.require('lt.objs.notifos');
goog.require('lt.plugins.elm_light.clients');
goog.require('lt.objs.browser');
goog.require('lt.objs.notifos');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.files');
goog.require('lt.objs.sidebar.clients');
goog.require('lt.plugins.auto_complete');
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
lt.plugins.elm_light.__GT_lt_range = (function __GT_lt_range(p__6386){var map__6388 = p__6386;var map__6388__$1 = ((cljs.core.seq_QMARK_.call(null,map__6388))?cljs.core.apply.call(null,cljs.core.hash_map,map__6388):map__6388);var end = cljs.core.get.call(null,map__6388__$1,new cljs.core.Keyword(null,"end","end",1014004813));var start = cljs.core.get.call(null,map__6388__$1,new cljs.core.Keyword(null,"start","start",1123661780));return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1017056028),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",1013907415),(new cljs.core.Keyword(null,"column","column",3954034376).cljs$core$IFn$_invoke$arity$1(start) - 1),new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(start) - 1)], null),new cljs.core.Keyword(null,"to","to",1013907949),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",1013907415),(new cljs.core.Keyword(null,"column","column",3954034376).cljs$core$IFn$_invoke$arity$1(end) - 1),new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(end) - 1)], null)], null);
});
lt.plugins.elm_light.display_make_results = (function display_make_results(ed,res,path){lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"clear-linter-results!","clear-linter-results!",4528495642));
if(cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__6389_SHARP_){return cljs.core._EQ_.call(null,"error",new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(p1__6389_SHARP_));
}),res)))
{lt.objs.notifos.set_msg_BANG_.call(null,"Elm make returned errors; check you editor or the console for details",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
} else
{}
var seq__6398 = cljs.core.seq.call(null,res);var chunk__6399 = null;var count__6400 = 0;var i__6401 = 0;while(true){
if((i__6401 < count__6400))
{var map__6402 = cljs.core._nth.call(null,chunk__6399,i__6401);var map__6402__$1 = ((cljs.core.seq_QMARK_.call(null,map__6402))?cljs.core.apply.call(null,cljs.core.hash_map,map__6402):map__6402);var tag = cljs.core.get.call(null,map__6402__$1,new cljs.core.Keyword(null,"tag","tag",1014018828));var subregion = cljs.core.get.call(null,map__6402__$1,new cljs.core.Keyword(null,"subregion","subregion",1501636774));var region = cljs.core.get.call(null,map__6402__$1,new cljs.core.Keyword(null,"region","region",4374076006));var details = cljs.core.get.call(null,map__6402__$1,new cljs.core.Keyword(null,"details","details",2571625908));var overview = cljs.core.get.call(null,map__6402__$1,new cljs.core.Keyword(null,"overview","overview",1544020203));var type = cljs.core.get.call(null,map__6402__$1,new cljs.core.Keyword(null,"type","type",1017479852));var file = cljs.core.get.call(null,map__6402__$1,new cljs.core.Keyword(null,"file","file",1017047278));var map__6403_6421 = lt.plugins.elm_light.__GT_lt_range.call(null,region);var map__6403_6422__$1 = ((cljs.core.seq_QMARK_.call(null,map__6403_6421))?cljs.core.apply.call(null,cljs.core.hash_map,map__6403_6421):map__6403_6421);var to_6423 = cljs.core.get.call(null,map__6403_6422__$1,new cljs.core.Keyword(null,"to","to",1013907949));var from_6424 = cljs.core.get.call(null,map__6403_6422__$1,new cljs.core.Keyword(null,"from","from",1017056028));var msg_6425 = [cljs.core.str(overview),cljs.core.str("\n"),cljs.core.str(lt.plugins.elm_light.colorize_msg.call(null,details))].join('');if((cljs.core._EQ_.call(null,path,file)) && (cljs.core._EQ_.call(null,type,"warning")))
{lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"linter-result!","linter-result!",4482067001),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",1124275658),tag,new cljs.core.Keyword(null,"details","details",2571625908),msg_6425,new cljs.core.Keyword(null,"category","category",1064415344),new cljs.core.Keyword(null,"warning","warning",2138350350),new cljs.core.Keyword(null,"code-range","code-range",3297446095),lt.plugins.elm_light.__GT_lt_range.call(null,(function (){var or__4884__auto__ = subregion;if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return region;
}
})())], null));
} else
{if((cljs.core._EQ_.call(null,path,file)) && (cljs.core._EQ_.call(null,type,"error")))
{lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"linter-result!","linter-result!",4482067001),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"titshle","titshle",4001834783),tag,new cljs.core.Keyword(null,"details","details",2571625908),msg_6425,new cljs.core.Keyword(null,"category","category",1064415344),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"code-range","code-range",3297446095),lt.plugins.elm_light.__GT_lt_range.call(null,(function (){var or__4884__auto__ = subregion;if(cljs.core.truth_(or__4884__auto__))
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
}
{
var G__6426 = seq__6398;
var G__6427 = chunk__6399;
var G__6428 = count__6400;
var G__6429 = (i__6401 + 1);
seq__6398 = G__6426;
chunk__6399 = G__6427;
count__6400 = G__6428;
i__6401 = G__6429;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__6398);if(temp__4092__auto__)
{var seq__6398__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6398__$1))
{var c__5632__auto__ = cljs.core.chunk_first.call(null,seq__6398__$1);{
var G__6430 = cljs.core.chunk_rest.call(null,seq__6398__$1);
var G__6431 = c__5632__auto__;
var G__6432 = cljs.core.count.call(null,c__5632__auto__);
var G__6433 = 0;
seq__6398 = G__6430;
chunk__6399 = G__6431;
count__6400 = G__6432;
i__6401 = G__6433;
continue;
}
} else
{var map__6404 = cljs.core.first.call(null,seq__6398__$1);var map__6404__$1 = ((cljs.core.seq_QMARK_.call(null,map__6404))?cljs.core.apply.call(null,cljs.core.hash_map,map__6404):map__6404);var tag = cljs.core.get.call(null,map__6404__$1,new cljs.core.Keyword(null,"tag","tag",1014018828));var subregion = cljs.core.get.call(null,map__6404__$1,new cljs.core.Keyword(null,"subregion","subregion",1501636774));var region = cljs.core.get.call(null,map__6404__$1,new cljs.core.Keyword(null,"region","region",4374076006));var details = cljs.core.get.call(null,map__6404__$1,new cljs.core.Keyword(null,"details","details",2571625908));var overview = cljs.core.get.call(null,map__6404__$1,new cljs.core.Keyword(null,"overview","overview",1544020203));var type = cljs.core.get.call(null,map__6404__$1,new cljs.core.Keyword(null,"type","type",1017479852));var file = cljs.core.get.call(null,map__6404__$1,new cljs.core.Keyword(null,"file","file",1017047278));var map__6405_6434 = lt.plugins.elm_light.__GT_lt_range.call(null,region);var map__6405_6435__$1 = ((cljs.core.seq_QMARK_.call(null,map__6405_6434))?cljs.core.apply.call(null,cljs.core.hash_map,map__6405_6434):map__6405_6434);var to_6436 = cljs.core.get.call(null,map__6405_6435__$1,new cljs.core.Keyword(null,"to","to",1013907949));var from_6437 = cljs.core.get.call(null,map__6405_6435__$1,new cljs.core.Keyword(null,"from","from",1017056028));var msg_6438 = [cljs.core.str(overview),cljs.core.str("\n"),cljs.core.str(lt.plugins.elm_light.colorize_msg.call(null,details))].join('');if((cljs.core._EQ_.call(null,path,file)) && (cljs.core._EQ_.call(null,type,"warning")))
{lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"linter-result!","linter-result!",4482067001),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",1124275658),tag,new cljs.core.Keyword(null,"details","details",2571625908),msg_6438,new cljs.core.Keyword(null,"category","category",1064415344),new cljs.core.Keyword(null,"warning","warning",2138350350),new cljs.core.Keyword(null,"code-range","code-range",3297446095),lt.plugins.elm_light.__GT_lt_range.call(null,(function (){var or__4884__auto__ = subregion;if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return region;
}
})())], null));
} else
{if((cljs.core._EQ_.call(null,path,file)) && (cljs.core._EQ_.call(null,type,"error")))
{lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"linter-result!","linter-result!",4482067001),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"titshle","titshle",4001834783),tag,new cljs.core.Keyword(null,"details","details",2571625908),msg_6438,new cljs.core.Keyword(null,"category","category",1064415344),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"code-range","code-range",3297446095),lt.plugins.elm_light.__GT_lt_range.call(null,(function (){var or__4884__auto__ = subregion;if(cljs.core.truth_(or__4884__auto__))
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
}
{
var G__6439 = cljs.core.next.call(null,seq__6398__$1);
var G__6440 = null;
var G__6441 = 0;
var G__6442 = 0;
seq__6398 = G__6439;
chunk__6399 = G__6440;
count__6400 = G__6441;
i__6401 = G__6442;
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
lt.plugins.elm_light.__BEH__lint = (function __BEH__lint(ed){var info = new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed));var cl = lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor.elm.lint","editor.elm.lint",1086056222),new cljs.core.Keyword(null,"origin","origin",4300251800),ed,new cljs.core.Keyword(null,"info","info",1017141280),info,new cljs.core.Keyword(null,"create","create",3956577390),lt.plugins.elm_light.clients.try_connect], null));lt.objs.notifos.working.call(null,[cljs.core.str("Starting elm linting of: "),cljs.core.str(new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(info))].join(''));
return lt.objs.clients.send.call(null,cl,new cljs.core.Keyword(null,"editor.elm.lint","editor.elm.lint",1086056222),cljs.core.assoc.call(null,info,new cljs.core.Keyword(null,"project-path","project-path",1907176907),lt.plugins.elm_light.utils.project_path.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(info))),new cljs.core.Keyword(null,"only","only",1017320222),ed);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light","lint","lt.plugins.elm-light/lint",1497250906),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.__BEH__lint,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lint","lint",1017226101),null], null), null),new cljs.core.Keyword(null,"description","description",3584325486),"Lint (/make) a given elm file");
lt.plugins.elm_light.__BEH__elm_lint_res = (function __BEH__elm_lint_res(ed,res){var path = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));lt.objs.notifos.done_working.call(null,"Elm linted");
return lt.plugins.elm_light.display_make_results.call(null,ed,res,path);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light","elm-lint-res","lt.plugins.elm-light/elm-lint-res",2508500808),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.__BEH__elm_lint_res,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elm.lint.res","elm.lint.res",4381822959),null], null), null));
lt.plugins.elm_light.__BEH__make = (function __BEH__make(ed){var info = new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed));var cl = lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor.elm.make","editor.elm.make",1086078217),new cljs.core.Keyword(null,"origin","origin",4300251800),ed,new cljs.core.Keyword(null,"info","info",1017141280),info,new cljs.core.Keyword(null,"create","create",3956577390),lt.plugins.elm_light.clients.try_connect], null));lt.objs.notifos.working.call(null,[cljs.core.str("Starting elm make for: "),cljs.core.str(new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(info))].join(''));
return lt.objs.clients.send.call(null,cl,new cljs.core.Keyword(null,"editor.elm.make","editor.elm.make",1086078217),cljs.core.assoc.call(null,info,new cljs.core.Keyword(null,"project-path","project-path",1907176907),lt.plugins.elm_light.utils.project_path.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(info))),new cljs.core.Keyword(null,"only","only",1017320222),ed);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light","make","lt.plugins.elm-light/make",1497244279),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.__BEH__make,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elm.make","elm.make",1176641960),null], null), null),new cljs.core.Keyword(null,"description","description",3584325486),"Make (to js) a given elm file");
lt.plugins.elm_light.__BEH__elm_make_res = (function __BEH__elm_make_res(ed,res){var path = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));lt.objs.notifos.done_working.call(null,[cljs.core.str("Elm make completed for: "),cljs.core.str(path)].join(''));
return lt.plugins.elm_light.display_make_results.call(null,ed,res,path);
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
{return lt.objs.clients.send.call(null,lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),command,new cljs.core.Keyword(null,"info","info",1017141280),info,new cljs.core.Keyword(null,"origin","origin",4300251800),ed,new cljs.core.Keyword(null,"create","create",3956577390),lt.plugins.elm_light.clients.try_connect], null)),command,info,new cljs.core.Keyword(null,"only","only",1017320222),ed);
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
lt.plugins.elm_light.__BEH__eval_BANG_ = (function __BEH__eval_BANG_(this$,event){var map__6407 = event;var map__6407__$1 = ((cljs.core.seq_QMARK_.call(null,map__6407))?cljs.core.apply.call(null,cljs.core.hash_map,map__6407):map__6407);var origin = cljs.core.get.call(null,map__6407__$1,new cljs.core.Keyword(null,"origin","origin",4300251800));var info = cljs.core.get.call(null,map__6407__$1,new cljs.core.Keyword(null,"info","info",1017141280));lt.objs.notifos.working.call(null,"Evaluating elm...");
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
lt.plugins.elm_light.__BEH__repl_restart_BANG_ = (function __BEH__repl_restart_BANG_(p__6408){var map__6410 = p__6408;var map__6410__$1 = ((cljs.core.seq_QMARK_.call(null,map__6410))?cljs.core.apply.call(null,cljs.core.hash_map,map__6410):map__6410);var ed = map__6410__$1;var info = cljs.core.get.call(null,map__6410__$1,new cljs.core.Keyword(null,"info","info",1017141280));var temp__4092__auto__ = new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));if(cljs.core.truth_(temp__4092__auto__))
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
lt.plugins.elm_light.__BEH__elm_browse_BANG_ = (function __BEH__elm_browse_BANG_(ed,debug_QMARK_){var path = lt.plugins.elm_light.utils.reactor_path.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed))));var client = lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor.eval.elm","editor.eval.elm",1083015975),new cljs.core.Keyword(null,"origin","origin",4300251800),ed,new cljs.core.Keyword(null,"info","info",1017141280),new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)),new cljs.core.Keyword(null,"create","create",3956577390),lt.plugins.elm_light.clients.try_connect], null));if(cljs.core.truth_((function (){var and__4872__auto__ = client;if(cljs.core.truth_(and__4872__auto__))
{return path;
} else
{return and__4872__auto__;
}
})()))
{lt.objs.notifos.working.call(null,"Opening elm file in browser");
var b_6443 = (function (){var or__4884__auto__ = cljs.core.first.call(null,lt.object.by_tag.call(null,new cljs.core.Keyword(null,"browser","browser",1164844698)));if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return lt.objs.browser.add.call(null);
}
})();var get_url_6444 = ((function (b_6443,path,client){
return (function (){return [cljs.core.str("http://localhost:"),cljs.core.str(new cljs.core.Keyword(null,"reactor-port","reactor-port",4649590590).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client))),cljs.core.str(path),cljs.core.str((cljs.core.truth_(debug_QMARK_)?"?debug":""))].join('');
});})(b_6443,path,client))
;if(cljs.core.truth_(new cljs.core.Keyword(null,"connected","connected",4729661051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client))))
{lt.object.raise.call(null,b_6443,new cljs.core.Keyword(null,"navigate!","navigate!",1766726722),get_url_6444.call(null));
} else
{lt.util.js.wait.call(null,100,((function (b_6443,get_url_6444,path,client){
return (function (){return lt.object.raise.call(null,b_6443,new cljs.core.Keyword(null,"navigate!","navigate!",1766726722),get_url_6444.call(null));
});})(b_6443,get_url_6444,path,client))
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
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"lint","lint",1017226101));
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
lt.plugins.elm_light.__BEH__on_focus_repl_ed = (function __BEH__on_focus_repl_ed(this$){if(cljs.core.truth_(new cljs.core.Keyword(null,"main","main",1017248043).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))))
{return lt.object.raise.call(null,new cljs.core.Keyword(null,"main","main",1017248043).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.Keyword(null,"focus!","focus!",4039653819));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light","on-focus-repl-ed","lt.plugins.elm-light/on-focus-repl-ed",4065512195),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.__BEH__on_focus_repl_ed,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"focus!","focus!",4039653819),null], null), null));
lt.plugins.elm_light.__BEH__repl_destroy_on_close = (function __BEH__repl_destroy_on_close(this$){lt.object.raise.call(null,new cljs.core.Keyword(null,"main","main",1017248043).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.Keyword(null,"close","close",1108660586));
return lt.object.destroy_BANG_.call(null,this$);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light","repl-destroy-on-close","lt.plugins.elm-light/repl-destroy-on-close",4286823362),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.__BEH__repl_destroy_on_close,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));
lt.plugins.elm_light.__BEH__repl_close_parent = (function __BEH__repl_close_parent(this$){return lt.object.destroy_BANG_.call(null,new cljs.core.Keyword(null,"frame","frame",1111596255).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light","repl-close-parent","lt.plugins.elm-light/repl-close-parent",4488603816),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.__BEH__repl_close_parent,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"destroy","destroy",2571277164),null], null), null));
lt.plugins.elm_light.__BEH__on_show_repl_refresh_eds = (function __BEH__on_show_repl_refresh_eds(this$){if(cljs.core.truth_(new cljs.core.Keyword(null,"main","main",1017248043).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))))
{lt.object.raise.call(null,new cljs.core.Keyword(null,"main","main",1017248043).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.Keyword(null,"show","show",1017433711));
lt.object.raise.call(null,new cljs.core.Keyword(null,"main","main",1017248043).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.Keyword(null,"refresh!","refresh!",4597922840));
return lt.objs.editor.focus.call(null,new cljs.core.Keyword(null,"main","main",1017248043).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light","on-show-repl-refresh-eds","lt.plugins.elm-light/on-show-repl-refresh-eds",2748318879),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.__BEH__on_show_repl_refresh_eds,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"show","show",1017433711),null], null), null));
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light","elmrepl","lt.plugins.elm-light/elmrepl",3126445904),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elmrepl","elmrepl",3653571719),null], null), null),new cljs.core.Keyword(null,"name","name",1017277949),"elmrepl",new cljs.core.Keyword(null,"live","live",1017226334),true,new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){var main = lt.object.add_tags.call(null,lt.object.remove_tags.call(null,lt.objs.editor.pool.create.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mime","mime",1017255846),"text/x-elm",new cljs.core.Keyword(null,"content","content",1965434859),"",new cljs.core.Keyword(null,"ns","ns",1013907767),"user"], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor.elm","editor.elm",3751348247)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor.elm.repl","editor.elm.repl",1086231178),new cljs.core.Keyword(null,"editor.transient","editor.transient",3554141883)], null));lt.object.merge_BANG_.call(null,main,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"frame","frame",1111596255),this$], null));
lt.objs.editor.clear_history.call(null,main);
lt.object.merge_BANG_.call(null,main,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dirty","dirty",1109497668),false,new cljs.core.Keyword(null,"editor.generation","editor.generation",4482163627),lt.objs.editor.__GT_generation.call(null,main)], null));
lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"main","main",1017248043),main,new cljs.core.Keyword(null,"dirty","dirty",1109497668),false], null));
lt.objs.editor._PLUS_class.call(null,main,new cljs.core.Keyword(null,"main","main",1017248043));
lt.objs.editor.move_cursor.call(null,main,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),0,new cljs.core.Keyword(null,"ch","ch",1013907415),0], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.elmrepl","div.elmrepl",926648362),lt.object.__GT_content.call(null,main)], null);
}));
lt.plugins.elm_light.add_repl = (function add_repl(){var elmrepl = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.elm-light","elmrepl","lt.plugins.elm-light/elmrepl",3126445904));lt.objs.tabs.add_BANG_.call(null,elmrepl);
lt.objs.tabs.active_BANG_.call(null,elmrepl);
return elmrepl;
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"elmrepl","elmrepl",3653571719),new cljs.core.Keyword(null,"desc","desc",1016984067),"Elm repl: Open a elm repl",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.plugins.elm_light.add_repl.call(null);
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
lt.plugins.elm_light.linter.status_class = (function status_class(p__18047){var map__18049 = p__18047;var map__18049__$1 = ((cljs.core.seq_QMARK_.call(null,map__18049))?cljs.core.apply.call(null,cljs.core.hash_map,map__18049):map__18049);var warnings = cljs.core.get.call(null,map__18049__$1,new cljs.core.Keyword(null,"warnings","warnings",1511995337));var errors = cljs.core.get.call(null,map__18049__$1,new cljs.core.Keyword(null,"errors","errors",4014236381));if((errors > 0))
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
lt.plugins.elm_light.linter.status_text = (function status_text(p__18050){var map__18052 = p__18050;var map__18052__$1 = ((cljs.core.seq_QMARK_.call(null,map__18052))?cljs.core.apply.call(null,cljs.core.hash_map,map__18052):map__18052);var warnings = cljs.core.get.call(null,map__18052__$1,new cljs.core.Keyword(null,"warnings","warnings",1511995337));var errors = cljs.core.get.call(null,map__18052__$1,new cljs.core.Keyword(null,"errors","errors",4014236381));return [cljs.core.str("Lint status: "),cljs.core.str(errors),cljs.core.str("/"),cljs.core.str(warnings)].join('');
});
lt.plugins.elm_light.linter.__GT_status_ui = (function __GT_status_ui(p__18053){var map__18055 = p__18053;var map__18055__$1 = ((cljs.core.seq_QMARK_.call(null,map__18055))?cljs.core.apply.call(null,cljs.core.hash_map,map__18055):map__18055);var lint_summary = cljs.core.get.call(null,map__18055__$1,new cljs.core.Keyword(null,"lint-summary","lint-summary",2275048270));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("lint-status "),cljs.core.str(lt.plugins.elm_light.linter.status_class.call(null,lint_summary))].join('')], null),lt.plugins.elm_light.linter.status_text.call(null,lint_summary)], null);
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
return (function (p__18058){var vec__18059 = p__18058;var k = cljs.core.nth.call(null,vec__18059,0,null);var v = cljs.core.nth.call(null,vec__18059,1,null);return new cljs.core.PersistentArrayMap.fromArray([k,cljs.core.count.call(null,v)], true, false);
});})(results,temp__4090__auto__))
,cljs.core.group_by.call(null,new cljs.core.Keyword(null,"category","category",1064415344),cljs.core.map.call(null,new cljs.core.Keyword(null,"result","result",4374444943),cljs.core.vals.call(null,results)))));
} else
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",1110689146),0,new cljs.core.Keyword(null,"warning","warning",2138350350),0], null);
}
});
lt.plugins.elm_light.linter.update_status_for_editor = (function update_status_for_editor(ed){var map__18062 = lt.plugins.elm_light.linter.grouped_lint_count.call(null,ed);var map__18062__$1 = ((cljs.core.seq_QMARK_.call(null,map__18062))?cljs.core.apply.call(null,cljs.core.hash_map,map__18062):map__18062);var warning = cljs.core.get.call(null,map__18062__$1,new cljs.core.Keyword(null,"warning","warning",2138350350));var error = cljs.core.get.call(null,map__18062__$1,new cljs.core.Keyword(null,"error","error",1110689146));return lt.object.raise.call(null,lt.plugins.elm_light.linter.statusbar_lint_summary,new cljs.core.Keyword(null,"update!","update!",779473898),((function (map__18062,map__18062__$1,warning,error){
return (function (p1__18060_SHARP_){return cljs.core.assoc.call(null,p1__18060_SHARP_,new cljs.core.Keyword(null,"warnings","warnings",1511995337),(function (){var or__4884__auto__ = warning;if(cljs.core.truth_(or__4884__auto__))
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
});})(map__18062,map__18062__$1,warning,error))
);
});
lt.plugins.elm_light.linter.__BEH__update_linter_on_editor_change = (function __BEH__update_linter_on_editor_change(ed){return lt.plugins.elm_light.linter.update_status_for_editor.call(null,ed);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.linter","update-linter-on-editor-change","lt.plugins.elm-light.linter/update-linter-on-editor-change",2858337088),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.linter.__BEH__update_linter_on_editor_change,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"focus","focus",1111509066),null], null), null));
lt.plugins.elm_light.linter.remove_widget = (function remove_widget(ed,el){try{lt.util.dom.remove.call(null,el);
}catch (e18064){var e_18117 = e18064;}return lt.objs.editor.focus.call(null,ed);
});
lt.plugins.elm_light.linter.inline_ui = (function inline_ui(ed,p__18067){var map__18075 = p__18067;var map__18075__$1 = ((cljs.core.seq_QMARK_.call(null,map__18075))?cljs.core.apply.call(null,cljs.core.hash_map,map__18075):map__18075);var category = cljs.core.get.call(null,map__18075__$1,new cljs.core.Keyword(null,"category","category",1064415344));var details = cljs.core.get.call(null,map__18075__$1,new cljs.core.Keyword(null,"details","details",2571625908));var title = cljs.core.get.call(null,map__18075__$1,new cljs.core.Keyword(null,"title","title",1124275658));var e__6289__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tabindex","tabindex",4410954191),-1,new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("linter-res "),cljs.core.str((function (){var or__4884__auto__ = cljs.core.name.call(null,category);if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return "error";
}
})())].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.title","p.title",3057381068),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.details","div.details",4139669847),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),details], null)], null)], null));var seq__18076_18118 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blur","blur",1016931289),((function (e__6289__auto__,map__18075,map__18075__$1,category,details,title){
return (function (p1__18065_SHARP_){return lt.plugins.elm_light.linter.remove_widget.call(null,ed,p1__18065_SHARP_.target);
});})(e__6289__auto__,map__18075,map__18075__$1,category,details,title))
,new cljs.core.Keyword(null,"keydown","keydown",4493897459),((function (e__6289__auto__,map__18075,map__18075__$1,category,details,title){
return (function (p1__18066_SHARP_){var kc = p1__18066_SHARP_.keyCode;if(cljs.core._EQ_.call(null,kc,27))
{return lt.plugins.elm_light.linter.remove_widget.call(null,ed,p1__18066_SHARP_.target);
} else
{return null;
}
});})(e__6289__auto__,map__18075,map__18075__$1,category,details,title))
], null)));var chunk__18077_18119 = null;var count__18078_18120 = 0;var i__18079_18121 = 0;while(true){
if((i__18079_18121 < count__18078_18120))
{var vec__18080_18122 = cljs.core._nth.call(null,chunk__18077_18119,i__18079_18121);var ev__6290__auto___18123 = cljs.core.nth.call(null,vec__18080_18122,0,null);var func__6291__auto___18124 = cljs.core.nth.call(null,vec__18080_18122,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___18123,func__6291__auto___18124);
{
var G__18125 = seq__18076_18118;
var G__18126 = chunk__18077_18119;
var G__18127 = count__18078_18120;
var G__18128 = (i__18079_18121 + 1);
seq__18076_18118 = G__18125;
chunk__18077_18119 = G__18126;
count__18078_18120 = G__18127;
i__18079_18121 = G__18128;
continue;
}
} else
{var temp__4092__auto___18129 = cljs.core.seq.call(null,seq__18076_18118);if(temp__4092__auto___18129)
{var seq__18076_18130__$1 = temp__4092__auto___18129;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18076_18130__$1))
{var c__5632__auto___18131 = cljs.core.chunk_first.call(null,seq__18076_18130__$1);{
var G__18132 = cljs.core.chunk_rest.call(null,seq__18076_18130__$1);
var G__18133 = c__5632__auto___18131;
var G__18134 = cljs.core.count.call(null,c__5632__auto___18131);
var G__18135 = 0;
seq__18076_18118 = G__18132;
chunk__18077_18119 = G__18133;
count__18078_18120 = G__18134;
i__18079_18121 = G__18135;
continue;
}
} else
{var vec__18081_18136 = cljs.core.first.call(null,seq__18076_18130__$1);var ev__6290__auto___18137 = cljs.core.nth.call(null,vec__18081_18136,0,null);var func__6291__auto___18138 = cljs.core.nth.call(null,vec__18081_18136,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___18137,func__6291__auto___18138);
{
var G__18139 = cljs.core.next.call(null,seq__18076_18130__$1);
var G__18140 = null;
var G__18141 = 0;
var G__18142 = 0;
seq__18076_18118 = G__18139;
chunk__18077_18119 = G__18140;
count__18078_18120 = G__18141;
i__18079_18121 = G__18142;
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
lt.plugins.elm_light.linter.add_widget = (function add_widget(ed,res_id){var map__18083 = cljs.core.get_in.call(null,cljs.core.deref.call(null,ed),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linter-results","linter-results",4482067083),res_id], null));var map__18083__$1 = ((cljs.core.seq_QMARK_.call(null,map__18083))?cljs.core.apply.call(null,cljs.core.hash_map,map__18083):map__18083);var result = cljs.core.get.call(null,map__18083__$1,new cljs.core.Keyword(null,"result","result",4374444943));var mark = cljs.core.get.call(null,map__18083__$1,new cljs.core.Keyword(null,"mark","mark",1017248319));var ui = lt.plugins.elm_light.linter.inline_ui.call(null,ed,result);var from = mark.find().from;lt.objs.editor.__GT_cm_ed.call(null,ed).addWidget(from,ui,{"scrollIntoView": true});
return lt.util.dom.focus.call(null,ui);
});
lt.plugins.elm_light.linter.create_mark = (function create_mark(ed,p__18084){var map__18086 = p__18084;var map__18086__$1 = ((cljs.core.seq_QMARK_.call(null,map__18086))?cljs.core.apply.call(null,cljs.core.hash_map,map__18086):map__18086);var code_range = cljs.core.get.call(null,map__18086__$1,new cljs.core.Keyword(null,"code-range","code-range",3297446095));var category = cljs.core.get.call(null,map__18086__$1,new cljs.core.Keyword(null,"category","category",1064415344));var from = new cljs.core.Keyword(null,"from","from",1017056028).cljs$core$IFn$_invoke$arity$1(code_range);var to = ((!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"to","to",1013907949).cljs$core$IFn$_invoke$arity$1(code_range),from)))?new cljs.core.Keyword(null,"to","to",1013907949).cljs$core$IFn$_invoke$arity$1(code_range):cljs.core.assoc.call(null,from,new cljs.core.Keyword(null,"ch","ch",1013907415),(lt.objs.editor.line_length.call(null,ed,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(from)) - 1)));return lt.objs.editor.mark.call(null,ed,from,to,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",1004015509),[cljs.core.str("lint-"),cljs.core.str((function (){var or__4884__auto__ = cljs.core.name.call(null,category);if(cljs.core.truth_(or__4884__auto__))
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
lt.plugins.elm_light.linter.__BEH__clear_linter_results_BANG_ = (function __BEH__clear_linter_results_BANG_(ed){var seq__18093_18143 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"linter-results","linter-results",4482067083).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));var chunk__18094_18144 = null;var count__18095_18145 = 0;var i__18096_18146 = 0;while(true){
if((i__18096_18146 < count__18095_18145))
{var vec__18097_18147 = cljs.core._nth.call(null,chunk__18094_18144,i__18096_18146);var id_18148 = cljs.core.nth.call(null,vec__18097_18147,0,null);var res_18149 = cljs.core.nth.call(null,vec__18097_18147,1,null);var temp__4092__auto___18150 = new cljs.core.Keyword(null,"mark","mark",1017248319).cljs$core$IFn$_invoke$arity$1(res_18149);if(cljs.core.truth_(temp__4092__auto___18150))
{var m_18151 = temp__4092__auto___18150;m_18151.clear();
} else
{}
var temp__4092__auto___18152 = new cljs.core.Keyword(null,"widget","widget",4520824246).cljs$core$IFn$_invoke$arity$1(res_18149);if(cljs.core.truth_(temp__4092__auto___18152))
{var w_18153 = temp__4092__auto___18152;lt.util.dom.remove.call(null,w_18153);
} else
{}
{
var G__18154 = seq__18093_18143;
var G__18155 = chunk__18094_18144;
var G__18156 = count__18095_18145;
var G__18157 = (i__18096_18146 + 1);
seq__18093_18143 = G__18154;
chunk__18094_18144 = G__18155;
count__18095_18145 = G__18156;
i__18096_18146 = G__18157;
continue;
}
} else
{var temp__4092__auto___18158 = cljs.core.seq.call(null,seq__18093_18143);if(temp__4092__auto___18158)
{var seq__18093_18159__$1 = temp__4092__auto___18158;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18093_18159__$1))
{var c__5632__auto___18160 = cljs.core.chunk_first.call(null,seq__18093_18159__$1);{
var G__18161 = cljs.core.chunk_rest.call(null,seq__18093_18159__$1);
var G__18162 = c__5632__auto___18160;
var G__18163 = cljs.core.count.call(null,c__5632__auto___18160);
var G__18164 = 0;
seq__18093_18143 = G__18161;
chunk__18094_18144 = G__18162;
count__18095_18145 = G__18163;
i__18096_18146 = G__18164;
continue;
}
} else
{var vec__18098_18165 = cljs.core.first.call(null,seq__18093_18159__$1);var id_18166 = cljs.core.nth.call(null,vec__18098_18165,0,null);var res_18167 = cljs.core.nth.call(null,vec__18098_18165,1,null);var temp__4092__auto___18168__$1 = new cljs.core.Keyword(null,"mark","mark",1017248319).cljs$core$IFn$_invoke$arity$1(res_18167);if(cljs.core.truth_(temp__4092__auto___18168__$1))
{var m_18169 = temp__4092__auto___18168__$1;m_18169.clear();
} else
{}
var temp__4092__auto___18170__$1 = new cljs.core.Keyword(null,"widget","widget",4520824246).cljs$core$IFn$_invoke$arity$1(res_18167);if(cljs.core.truth_(temp__4092__auto___18170__$1))
{var w_18171 = temp__4092__auto___18170__$1;lt.util.dom.remove.call(null,w_18171);
} else
{}
{
var G__18172 = cljs.core.next.call(null,seq__18093_18159__$1);
var G__18173 = null;
var G__18174 = 0;
var G__18175 = 0;
seq__18093_18143 = G__18172;
chunk__18094_18144 = G__18173;
count__18095_18145 = G__18174;
i__18096_18146 = G__18175;
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
lt.plugins.elm_light.linter.find_current_lint_mark = (function find_current_lint_mark(ed){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__18099_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"linter","linter",4206213986),p1__18099_SHARP_.lttype);
}),lt.objs.editor.find_marks.call(null,ed,lt.objs.editor.__GT_cursor.call(null,ed))));
});
lt.plugins.elm_light.linter.get_widget_by_mark = (function get_widget_by_mark(ed,mark){return cljs.core.get_in.call(null,cljs.core.deref.call(null,ed),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linter-results","linter-results",4482067083),mark.ltlintid,new cljs.core.Keyword(null,"widget","widget",4520824246)], null));
});
lt.plugins.elm_light.linter.mark__GT_pos = (function mark__GT_pos(mark){var cm_pos = mark.find().from;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",1013907415),cm_pos.ch,new cljs.core.Keyword(null,"line","line",1017226086),cm_pos.line], null);
});
lt.plugins.elm_light.linter.get_all_lint_marks = (function get_all_lint_marks(ed){return cljs.core.sort_by.call(null,(function (p1__18101_SHARP_){return cljs.core.juxt.call(null,new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"ch","ch",1013907415)).call(null,lt.plugins.elm_light.linter.mark__GT_pos.call(null,p1__18101_SHARP_));
}),cljs.core.filter.call(null,(function (p1__18100_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"linter","linter",4206213986),p1__18100_SHARP_.lttype);
}),lt.objs.editor.__GT_cm_ed.call(null,ed).getAllMarks()));
});
lt.plugins.elm_light.linter.split_with_mark = (function split_with_mark(ed){var all_marks = lt.plugins.elm_light.linter.get_all_lint_marks.call(null,ed);var curr_mark = lt.plugins.elm_light.linter.find_current_lint_mark.call(null,ed);return cljs.core.split_with.call(null,((function (all_marks,curr_mark){
return (function (p1__18102_SHARP_){return !(cljs.core._EQ_.call(null,(cljs.core.truth_(curr_mark)?curr_mark.ltlintid:null),p1__18102_SHARP_.ltlintid));
});})(all_marks,curr_mark))
,all_marks);
});
lt.plugins.elm_light.linter.find_next_mark = (function find_next_mark(ed){var vec__18104 = lt.plugins.elm_light.linter.split_with_mark.call(null,ed);var ms1 = cljs.core.nth.call(null,vec__18104,0,null);var ms2 = cljs.core.nth.call(null,vec__18104,1,null);return cljs.core.first.call(null,cljs.core.into.call(null,cljs.core.vec.call(null,cljs.core.drop.call(null,1,ms2)),ms1));
});
lt.plugins.elm_light.linter.find_prev_mark = (function find_prev_mark(ed){var vec__18106 = lt.plugins.elm_light.linter.split_with_mark.call(null,ed);var ms1 = cljs.core.nth.call(null,vec__18106,0,null);var ms2 = cljs.core.nth.call(null,vec__18106,1,null);return cljs.core.first.call(null,cljs.core.into.call(null,cljs.core.reverse.call(null,cljs.core.drop.call(null,1,ms2)),ms1));
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
lt.plugins.elm_light.test.deps__GT_named = (function deps__GT_named(deps){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__18314){var vec__18315 = p__18314;var k = cljs.core.nth.call(null,vec__18315,0,null);var v = cljs.core.nth.call(null,vec__18315,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.elm_light.utils.nskw__GT_name.call(null,k),v], null);
}),deps));
});
lt.plugins.elm_light.test.__GT_test_config = (function __GT_test_config(project_cfg){return cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.assoc.call(null,cljs.core.update_in.call(null,project_cfg,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-directories","source-directories",4475397259)], null),lt.plugins.elm_light.test.__GT_test_src_dirs),new cljs.core.Keyword(null,"exposed-modules","exposed-modules",4185867084),cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependencies","dependencies",1517678747)], null),(function (p1__18316_SHARP_){return cljs.core.merge.call(null,p1__18316_SHARP_,lt.plugins.elm_light.test.default_test_deps);
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
return (function (p1__18317_SHARP_){return cljs.core.println.call(null,[cljs.core.str("Test package install: "),cljs.core.str(p1__18317_SHARP_)].join(''));
});})(args,proc))
);
proc.stderr.on("data",((function (args,proc){
return (function (p1__18318_SHARP_){return lt.objs.console.error.call(null,[cljs.core.str(p1__18318_SHARP_)].join(''));
});})(args,proc))
);
proc.on("exit",((function (args,proc){
return (function (p1__18319_SHARP_){if(cljs.core._EQ_.call(null,p1__18319_SHARP_,0))
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
}catch (e11232){var e = e11232;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,e.message], null);
}});
/**
* Format file or all elm files in dir using elm-format.
* If successful returns [true nil]
* If errors returns [false err]
*/
lt.plugins.elm_light.format.format_path = (function format_path(cwd,path){try{require("child_process").execSync([cljs.core.str("elm-format --yes "),cljs.core.str(path)].join(''),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cwd","cwd",1014003170),cwd,new cljs.core.Keyword(null,"stdio","stdio",1123664379),"pipe"], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);
}catch (e11234){var e = e11234;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,e.message], null);
}});
lt.plugins.elm_light.format.handle_format_error = (function handle_format_error(err){lt.objs.notifos.set_msg_BANG_.call(null,"Elm format reported errors. See console for details",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),"error",new cljs.core.Keyword(null,"timeout","timeout",3994960083),5000], null));
return lt.objs.console.error.call(null,err);
});
lt.plugins.elm_light.format.__BEH__elm_format = (function __BEH__elm_format(ed){var temp__4092__auto__ = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));if(cljs.core.truth_(temp__4092__auto__))
{var path = temp__4092__auto__;var pos = lt.objs.editor.__GT_cursor.call(null,ed);var vec__11236 = lt.plugins.elm_light.format.format_path.call(null,lt.plugins.elm_light.utils.project_path.call(null,path),path);var ok_QMARK_ = cljs.core.nth.call(null,vec__11236,0,null);var res = cljs.core.nth.call(null,vec__11236,1,null);if(cljs.core.truth_(ok_QMARK_))
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
{var map__11239 = temp__4092__auto__;var map__11239__$1 = ((cljs.core.seq_QMARK_.call(null,map__11239))?cljs.core.apply.call(null,cljs.core.hash_map,map__11239):map__11239);var to = cljs.core.get.call(null,map__11239__$1,new cljs.core.Keyword(null,"to","to",1013907949));var from = cljs.core.get.call(null,map__11239__$1,new cljs.core.Keyword(null,"from","from",1017056028));var vec__11240 = lt.plugins.elm_light.format.format_input.call(null,cwd,lt.objs.editor.range.call(null,ed,from,to));var ok_QMARK_ = cljs.core.nth.call(null,vec__11240,0,null);var res = cljs.core.nth.call(null,vec__11240,1,null);if(cljs.core.truth_(ok_QMARK_))
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
lt.plugins.elm_light.format.__BEH__elm_format_buffer = (function __BEH__elm_format_buffer(ed){var pos = lt.objs.editor.__GT_cursor.call(null,ed);var vec__11242 = lt.plugins.elm_light.format.format_input.call(null,lt.plugins.elm_light.utils.project_path.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)))),lt.objs.editor.__GT_val.call(null,ed));var ok_QMARK_ = cljs.core.nth.call(null,vec__11242,0,null);var res = cljs.core.nth.call(null,vec__11242,1,null);if(cljs.core.truth_(ok_QMARK_))
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

//# sourceMappingURL=elm-light_compiled.js.map