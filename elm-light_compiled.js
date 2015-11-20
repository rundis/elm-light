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
{var o = (function (){var obj11083 = {};return obj11083;
})();var seq__11084_11097 = cljs.core.seq.call(null,obj);var chunk__11085_11098 = null;var count__11086_11099 = 0;var i__11087_11100 = 0;while(true){
if((i__11087_11100 < count__11086_11099))
{var vec__11088_11101 = cljs.core._nth.call(null,chunk__11085_11098,i__11087_11100);var k_11102 = cljs.core.nth.call(null,vec__11088_11101,0,null);var v_11103 = cljs.core.nth.call(null,vec__11088_11101,1,null);(o[cljs.core.name.call(null,k_11102)] = js_props.call(null,v_11103));
{
var G__11104 = seq__11084_11097;
var G__11105 = chunk__11085_11098;
var G__11106 = count__11086_11099;
var G__11107 = (i__11087_11100 + 1);
seq__11084_11097 = G__11104;
chunk__11085_11098 = G__11105;
count__11086_11099 = G__11106;
i__11087_11100 = G__11107;
continue;
}
} else
{var temp__4092__auto___11108 = cljs.core.seq.call(null,seq__11084_11097);if(temp__4092__auto___11108)
{var seq__11084_11109__$1 = temp__4092__auto___11108;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11084_11109__$1))
{var c__5632__auto___11110 = cljs.core.chunk_first.call(null,seq__11084_11109__$1);{
var G__11111 = cljs.core.chunk_rest.call(null,seq__11084_11109__$1);
var G__11112 = c__5632__auto___11110;
var G__11113 = cljs.core.count.call(null,c__5632__auto___11110);
var G__11114 = 0;
seq__11084_11097 = G__11111;
chunk__11085_11098 = G__11112;
count__11086_11099 = G__11113;
i__11087_11100 = G__11114;
continue;
}
} else
{var vec__11089_11115 = cljs.core.first.call(null,seq__11084_11109__$1);var k_11116 = cljs.core.nth.call(null,vec__11089_11115,0,null);var v_11117 = cljs.core.nth.call(null,vec__11089_11115,1,null);(o[cljs.core.name.call(null,k_11116)] = js_props.call(null,v_11117));
{
var G__11118 = cljs.core.next.call(null,seq__11084_11109__$1);
var G__11119 = null;
var G__11120 = 0;
var G__11121 = 0;
seq__11084_11097 = G__11118;
chunk__11085_11098 = G__11119;
count__11086_11099 = G__11120;
i__11087_11100 = G__11121;
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
quiescent.component = (function component(renderer){var react_component = React.createClass({"render": (function (){var this$ = this;var _STAR_component_STAR_11091 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return cljs.core.apply.call(null,renderer,(this$.props["value"]),(this$.props["statics"]));
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11091;
}}), "shouldComponentUpdate": (function (next_props,_){var this$ = this;return cljs.core.not_EQ_.call(null,(this$.props["value"]),(next_props["value"]));
})});return ((function (react_component){
return (function() { 
var G__11122__delegate = function (value,static_args){return react_component.call(null,{"statics": static_args, "value": value});
};
var G__11122 = function (value,var_args){
var static_args = null;if (arguments.length > 1) {
  static_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__11122__delegate.call(this,value,static_args);};
G__11122.cljs$lang$maxFixedArity = 1;
G__11122.cljs$lang$applyTo = (function (arglist__11123){
var value = cljs.core.first(arglist__11123);
var static_args = cljs.core.rest(arglist__11123);
return G__11122__delegate(value,static_args);
});
G__11122.cljs$core$IFn$_invoke$arity$variadic = G__11122__delegate;
return G__11122;
})()
;
;})(react_component))
});
/**
* Wrapper component used to mix-in lifecycle access
*/
quiescent.WrapperComponent = React.createClass({"componentWillUnmount": (function (){var this$ = this;var temp__4092__auto__ = (this$.props["onWillUnmount"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_11096 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null);
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11096;
}} else
{return null;
}
}), "componentWillUpdate": (function (_,___$1){var this$ = this;var temp__4092__auto__ = (this$.props["onWillUpdate"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_11095 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null);
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11095;
}} else
{return null;
}
}), "componentWillMount": (function (){var this$ = this;var temp__4092__auto__ = (this$.props["onWillMount"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_11094 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null);
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11094;
}} else
{return null;
}
}), "componentDidMount": (function (){var this$ = this;var temp__4092__auto__ = (this$.props["onMount"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_11093 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null,this$.getDOMNode());
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11093;
}} else
{return null;
}
}), "componentDidUpdate": (function (prev_props,prev_state){var this$ = this;var temp__4092__auto__ = (this$.props["onUpdate"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_11092 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null,this$.getDOMNode());
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11092;
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
var wrapper__delegate = function (child,kvs){var props = quiescent.js_props.call(null,cljs.core.apply.call(null,cljs.core.array_map,new cljs.core.Keyword(null,"wrappee","wrappee",2609412088),child,kvs));var temp__4092__auto___11124 = (child.props["key"]);if(cljs.core.truth_(temp__4092__auto___11124))
{var key_11125 = temp__4092__auto___11124;(props["key"] = key_11125);
} else
{}
return quiescent.WrapperComponent.call(null,props);
};
var wrapper = function (child,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrapper__delegate.call(this,child,kvs);};
wrapper.cljs$lang$maxFixedArity = 1;
wrapper.cljs$lang$applyTo = (function (arglist__11126){
var child = cljs.core.first(arglist__11126);
var kvs = cljs.core.rest(arglist__11126);
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
var a__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__7508_8456 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__7509_8457 = null;var count__7510_8458 = 0;var i__7511_8459 = 0;while(true){
if((i__7511_8459 < count__7510_8458))
{var arg__6508__auto___8460 = cljs.core._nth.call(null,chunk__7509_8457,i__7511_8459);a__6507__auto__.push(arg__6508__auto___8460);
{
var G__8461 = seq__7508_8456;
var G__8462 = chunk__7509_8457;
var G__8463 = count__7510_8458;
var G__8464 = (i__7511_8459 + 1);
seq__7508_8456 = G__8461;
chunk__7509_8457 = G__8462;
count__7510_8458 = G__8463;
i__7511_8459 = G__8464;
continue;
}
} else
{var temp__4092__auto___8465 = cljs.core.seq.call(null,seq__7508_8456);if(temp__4092__auto___8465)
{var seq__7508_8466__$1 = temp__4092__auto___8465;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7508_8466__$1))
{var c__5632__auto___8467 = cljs.core.chunk_first.call(null,seq__7508_8466__$1);{
var G__8468 = cljs.core.chunk_rest.call(null,seq__7508_8466__$1);
var G__8469 = c__5632__auto___8467;
var G__8470 = cljs.core.count.call(null,c__5632__auto___8467);
var G__8471 = 0;
seq__7508_8456 = G__8468;
chunk__7509_8457 = G__8469;
count__7510_8458 = G__8470;
i__7511_8459 = G__8471;
continue;
}
} else
{var arg__6508__auto___8472 = cljs.core.first.call(null,seq__7508_8466__$1);a__6507__auto__.push(arg__6508__auto___8472);
{
var G__8473 = cljs.core.next.call(null,seq__7508_8466__$1);
var G__8474 = null;
var G__8475 = 0;
var G__8476 = 0;
seq__7508_8456 = G__8473;
chunk__7509_8457 = G__8474;
count__7510_8458 = G__8475;
i__7511_8459 = G__8476;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.a.apply(null,a__6507__auto__);
};
var a = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return a__delegate.call(this,args__6506__auto__);};
a.cljs$lang$maxFixedArity = 0;
a.cljs$lang$applyTo = (function (arglist__8477){
var args__6506__auto__ = cljs.core.seq(arglist__8477);
return a__delegate(args__6506__auto__);
});
a.cljs$core$IFn$_invoke$arity$variadic = a__delegate;
return a;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.abbr = (function() { 
var abbr__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__7516_8478 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__7517_8479 = null;var count__7518_8480 = 0;var i__7519_8481 = 0;while(true){
if((i__7519_8481 < count__7518_8480))
{var arg__6508__auto___8482 = cljs.core._nth.call(null,chunk__7517_8479,i__7519_8481);a__6507__auto__.push(arg__6508__auto___8482);
{
var G__8483 = seq__7516_8478;
var G__8484 = chunk__7517_8479;
var G__8485 = count__7518_8480;
var G__8486 = (i__7519_8481 + 1);
seq__7516_8478 = G__8483;
chunk__7517_8479 = G__8484;
count__7518_8480 = G__8485;
i__7519_8481 = G__8486;
continue;
}
} else
{var temp__4092__auto___8487 = cljs.core.seq.call(null,seq__7516_8478);if(temp__4092__auto___8487)
{var seq__7516_8488__$1 = temp__4092__auto___8487;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7516_8488__$1))
{var c__5632__auto___8489 = cljs.core.chunk_first.call(null,seq__7516_8488__$1);{
var G__8490 = cljs.core.chunk_rest.call(null,seq__7516_8488__$1);
var G__8491 = c__5632__auto___8489;
var G__8492 = cljs.core.count.call(null,c__5632__auto___8489);
var G__8493 = 0;
seq__7516_8478 = G__8490;
chunk__7517_8479 = G__8491;
count__7518_8480 = G__8492;
i__7519_8481 = G__8493;
continue;
}
} else
{var arg__6508__auto___8494 = cljs.core.first.call(null,seq__7516_8488__$1);a__6507__auto__.push(arg__6508__auto___8494);
{
var G__8495 = cljs.core.next.call(null,seq__7516_8488__$1);
var G__8496 = null;
var G__8497 = 0;
var G__8498 = 0;
seq__7516_8478 = G__8495;
chunk__7517_8479 = G__8496;
count__7518_8480 = G__8497;
i__7519_8481 = G__8498;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.abbr.apply(null,a__6507__auto__);
};
var abbr = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return abbr__delegate.call(this,args__6506__auto__);};
abbr.cljs$lang$maxFixedArity = 0;
abbr.cljs$lang$applyTo = (function (arglist__8499){
var args__6506__auto__ = cljs.core.seq(arglist__8499);
return abbr__delegate(args__6506__auto__);
});
abbr.cljs$core$IFn$_invoke$arity$variadic = abbr__delegate;
return abbr;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.address = (function() { 
var address__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__7524_8500 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__7525_8501 = null;var count__7526_8502 = 0;var i__7527_8503 = 0;while(true){
if((i__7527_8503 < count__7526_8502))
{var arg__6508__auto___8504 = cljs.core._nth.call(null,chunk__7525_8501,i__7527_8503);a__6507__auto__.push(arg__6508__auto___8504);
{
var G__8505 = seq__7524_8500;
var G__8506 = chunk__7525_8501;
var G__8507 = count__7526_8502;
var G__8508 = (i__7527_8503 + 1);
seq__7524_8500 = G__8505;
chunk__7525_8501 = G__8506;
count__7526_8502 = G__8507;
i__7527_8503 = G__8508;
continue;
}
} else
{var temp__4092__auto___8509 = cljs.core.seq.call(null,seq__7524_8500);if(temp__4092__auto___8509)
{var seq__7524_8510__$1 = temp__4092__auto___8509;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7524_8510__$1))
{var c__5632__auto___8511 = cljs.core.chunk_first.call(null,seq__7524_8510__$1);{
var G__8512 = cljs.core.chunk_rest.call(null,seq__7524_8510__$1);
var G__8513 = c__5632__auto___8511;
var G__8514 = cljs.core.count.call(null,c__5632__auto___8511);
var G__8515 = 0;
seq__7524_8500 = G__8512;
chunk__7525_8501 = G__8513;
count__7526_8502 = G__8514;
i__7527_8503 = G__8515;
continue;
}
} else
{var arg__6508__auto___8516 = cljs.core.first.call(null,seq__7524_8510__$1);a__6507__auto__.push(arg__6508__auto___8516);
{
var G__8517 = cljs.core.next.call(null,seq__7524_8510__$1);
var G__8518 = null;
var G__8519 = 0;
var G__8520 = 0;
seq__7524_8500 = G__8517;
chunk__7525_8501 = G__8518;
count__7526_8502 = G__8519;
i__7527_8503 = G__8520;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.address.apply(null,a__6507__auto__);
};
var address = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return address__delegate.call(this,args__6506__auto__);};
address.cljs$lang$maxFixedArity = 0;
address.cljs$lang$applyTo = (function (arglist__8521){
var args__6506__auto__ = cljs.core.seq(arglist__8521);
return address__delegate(args__6506__auto__);
});
address.cljs$core$IFn$_invoke$arity$variadic = address__delegate;
return address;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.area = (function() { 
var area__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__7532_8522 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__7533_8523 = null;var count__7534_8524 = 0;var i__7535_8525 = 0;while(true){
if((i__7535_8525 < count__7534_8524))
{var arg__6508__auto___8526 = cljs.core._nth.call(null,chunk__7533_8523,i__7535_8525);a__6507__auto__.push(arg__6508__auto___8526);
{
var G__8527 = seq__7532_8522;
var G__8528 = chunk__7533_8523;
var G__8529 = count__7534_8524;
var G__8530 = (i__7535_8525 + 1);
seq__7532_8522 = G__8527;
chunk__7533_8523 = G__8528;
count__7534_8524 = G__8529;
i__7535_8525 = G__8530;
continue;
}
} else
{var temp__4092__auto___8531 = cljs.core.seq.call(null,seq__7532_8522);if(temp__4092__auto___8531)
{var seq__7532_8532__$1 = temp__4092__auto___8531;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7532_8532__$1))
{var c__5632__auto___8533 = cljs.core.chunk_first.call(null,seq__7532_8532__$1);{
var G__8534 = cljs.core.chunk_rest.call(null,seq__7532_8532__$1);
var G__8535 = c__5632__auto___8533;
var G__8536 = cljs.core.count.call(null,c__5632__auto___8533);
var G__8537 = 0;
seq__7532_8522 = G__8534;
chunk__7533_8523 = G__8535;
count__7534_8524 = G__8536;
i__7535_8525 = G__8537;
continue;
}
} else
{var arg__6508__auto___8538 = cljs.core.first.call(null,seq__7532_8532__$1);a__6507__auto__.push(arg__6508__auto___8538);
{
var G__8539 = cljs.core.next.call(null,seq__7532_8532__$1);
var G__8540 = null;
var G__8541 = 0;
var G__8542 = 0;
seq__7532_8522 = G__8539;
chunk__7533_8523 = G__8540;
count__7534_8524 = G__8541;
i__7535_8525 = G__8542;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.area.apply(null,a__6507__auto__);
};
var area = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return area__delegate.call(this,args__6506__auto__);};
area.cljs$lang$maxFixedArity = 0;
area.cljs$lang$applyTo = (function (arglist__8543){
var args__6506__auto__ = cljs.core.seq(arglist__8543);
return area__delegate(args__6506__auto__);
});
area.cljs$core$IFn$_invoke$arity$variadic = area__delegate;
return area;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.article = (function() { 
var article__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__7540_8544 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__7541_8545 = null;var count__7542_8546 = 0;var i__7543_8547 = 0;while(true){
if((i__7543_8547 < count__7542_8546))
{var arg__6508__auto___8548 = cljs.core._nth.call(null,chunk__7541_8545,i__7543_8547);a__6507__auto__.push(arg__6508__auto___8548);
{
var G__8549 = seq__7540_8544;
var G__8550 = chunk__7541_8545;
var G__8551 = count__7542_8546;
var G__8552 = (i__7543_8547 + 1);
seq__7540_8544 = G__8549;
chunk__7541_8545 = G__8550;
count__7542_8546 = G__8551;
i__7543_8547 = G__8552;
continue;
}
} else
{var temp__4092__auto___8553 = cljs.core.seq.call(null,seq__7540_8544);if(temp__4092__auto___8553)
{var seq__7540_8554__$1 = temp__4092__auto___8553;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7540_8554__$1))
{var c__5632__auto___8555 = cljs.core.chunk_first.call(null,seq__7540_8554__$1);{
var G__8556 = cljs.core.chunk_rest.call(null,seq__7540_8554__$1);
var G__8557 = c__5632__auto___8555;
var G__8558 = cljs.core.count.call(null,c__5632__auto___8555);
var G__8559 = 0;
seq__7540_8544 = G__8556;
chunk__7541_8545 = G__8557;
count__7542_8546 = G__8558;
i__7543_8547 = G__8559;
continue;
}
} else
{var arg__6508__auto___8560 = cljs.core.first.call(null,seq__7540_8554__$1);a__6507__auto__.push(arg__6508__auto___8560);
{
var G__8561 = cljs.core.next.call(null,seq__7540_8554__$1);
var G__8562 = null;
var G__8563 = 0;
var G__8564 = 0;
seq__7540_8544 = G__8561;
chunk__7541_8545 = G__8562;
count__7542_8546 = G__8563;
i__7543_8547 = G__8564;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.article.apply(null,a__6507__auto__);
};
var article = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return article__delegate.call(this,args__6506__auto__);};
article.cljs$lang$maxFixedArity = 0;
article.cljs$lang$applyTo = (function (arglist__8565){
var args__6506__auto__ = cljs.core.seq(arglist__8565);
return article__delegate(args__6506__auto__);
});
article.cljs$core$IFn$_invoke$arity$variadic = article__delegate;
return article;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.aside = (function() { 
var aside__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__7548_8566 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__7549_8567 = null;var count__7550_8568 = 0;var i__7551_8569 = 0;while(true){
if((i__7551_8569 < count__7550_8568))
{var arg__6508__auto___8570 = cljs.core._nth.call(null,chunk__7549_8567,i__7551_8569);a__6507__auto__.push(arg__6508__auto___8570);
{
var G__8571 = seq__7548_8566;
var G__8572 = chunk__7549_8567;
var G__8573 = count__7550_8568;
var G__8574 = (i__7551_8569 + 1);
seq__7548_8566 = G__8571;
chunk__7549_8567 = G__8572;
count__7550_8568 = G__8573;
i__7551_8569 = G__8574;
continue;
}
} else
{var temp__4092__auto___8575 = cljs.core.seq.call(null,seq__7548_8566);if(temp__4092__auto___8575)
{var seq__7548_8576__$1 = temp__4092__auto___8575;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7548_8576__$1))
{var c__5632__auto___8577 = cljs.core.chunk_first.call(null,seq__7548_8576__$1);{
var G__8578 = cljs.core.chunk_rest.call(null,seq__7548_8576__$1);
var G__8579 = c__5632__auto___8577;
var G__8580 = cljs.core.count.call(null,c__5632__auto___8577);
var G__8581 = 0;
seq__7548_8566 = G__8578;
chunk__7549_8567 = G__8579;
count__7550_8568 = G__8580;
i__7551_8569 = G__8581;
continue;
}
} else
{var arg__6508__auto___8582 = cljs.core.first.call(null,seq__7548_8576__$1);a__6507__auto__.push(arg__6508__auto___8582);
{
var G__8583 = cljs.core.next.call(null,seq__7548_8576__$1);
var G__8584 = null;
var G__8585 = 0;
var G__8586 = 0;
seq__7548_8566 = G__8583;
chunk__7549_8567 = G__8584;
count__7550_8568 = G__8585;
i__7551_8569 = G__8586;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.aside.apply(null,a__6507__auto__);
};
var aside = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return aside__delegate.call(this,args__6506__auto__);};
aside.cljs$lang$maxFixedArity = 0;
aside.cljs$lang$applyTo = (function (arglist__8587){
var args__6506__auto__ = cljs.core.seq(arglist__8587);
return aside__delegate(args__6506__auto__);
});
aside.cljs$core$IFn$_invoke$arity$variadic = aside__delegate;
return aside;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.audio = (function() { 
var audio__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__7556_8588 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__7557_8589 = null;var count__7558_8590 = 0;var i__7559_8591 = 0;while(true){
if((i__7559_8591 < count__7558_8590))
{var arg__6508__auto___8592 = cljs.core._nth.call(null,chunk__7557_8589,i__7559_8591);a__6507__auto__.push(arg__6508__auto___8592);
{
var G__8593 = seq__7556_8588;
var G__8594 = chunk__7557_8589;
var G__8595 = count__7558_8590;
var G__8596 = (i__7559_8591 + 1);
seq__7556_8588 = G__8593;
chunk__7557_8589 = G__8594;
count__7558_8590 = G__8595;
i__7559_8591 = G__8596;
continue;
}
} else
{var temp__4092__auto___8597 = cljs.core.seq.call(null,seq__7556_8588);if(temp__4092__auto___8597)
{var seq__7556_8598__$1 = temp__4092__auto___8597;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7556_8598__$1))
{var c__5632__auto___8599 = cljs.core.chunk_first.call(null,seq__7556_8598__$1);{
var G__8600 = cljs.core.chunk_rest.call(null,seq__7556_8598__$1);
var G__8601 = c__5632__auto___8599;
var G__8602 = cljs.core.count.call(null,c__5632__auto___8599);
var G__8603 = 0;
seq__7556_8588 = G__8600;
chunk__7557_8589 = G__8601;
count__7558_8590 = G__8602;
i__7559_8591 = G__8603;
continue;
}
} else
{var arg__6508__auto___8604 = cljs.core.first.call(null,seq__7556_8598__$1);a__6507__auto__.push(arg__6508__auto___8604);
{
var G__8605 = cljs.core.next.call(null,seq__7556_8598__$1);
var G__8606 = null;
var G__8607 = 0;
var G__8608 = 0;
seq__7556_8588 = G__8605;
chunk__7557_8589 = G__8606;
count__7558_8590 = G__8607;
i__7559_8591 = G__8608;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.audio.apply(null,a__6507__auto__);
};
var audio = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return audio__delegate.call(this,args__6506__auto__);};
audio.cljs$lang$maxFixedArity = 0;
audio.cljs$lang$applyTo = (function (arglist__8609){
var args__6506__auto__ = cljs.core.seq(arglist__8609);
return audio__delegate(args__6506__auto__);
});
audio.cljs$core$IFn$_invoke$arity$variadic = audio__delegate;
return audio;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.b = (function() { 
var b__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__7564_8610 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__7565_8611 = null;var count__7566_8612 = 0;var i__7567_8613 = 0;while(true){
if((i__7567_8613 < count__7566_8612))
{var arg__6508__auto___8614 = cljs.core._nth.call(null,chunk__7565_8611,i__7567_8613);a__6507__auto__.push(arg__6508__auto___8614);
{
var G__8615 = seq__7564_8610;
var G__8616 = chunk__7565_8611;
var G__8617 = count__7566_8612;
var G__8618 = (i__7567_8613 + 1);
seq__7564_8610 = G__8615;
chunk__7565_8611 = G__8616;
count__7566_8612 = G__8617;
i__7567_8613 = G__8618;
continue;
}
} else
{var temp__4092__auto___8619 = cljs.core.seq.call(null,seq__7564_8610);if(temp__4092__auto___8619)
{var seq__7564_8620__$1 = temp__4092__auto___8619;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7564_8620__$1))
{var c__5632__auto___8621 = cljs.core.chunk_first.call(null,seq__7564_8620__$1);{
var G__8622 = cljs.core.chunk_rest.call(null,seq__7564_8620__$1);
var G__8623 = c__5632__auto___8621;
var G__8624 = cljs.core.count.call(null,c__5632__auto___8621);
var G__8625 = 0;
seq__7564_8610 = G__8622;
chunk__7565_8611 = G__8623;
count__7566_8612 = G__8624;
i__7567_8613 = G__8625;
continue;
}
} else
{var arg__6508__auto___8626 = cljs.core.first.call(null,seq__7564_8620__$1);a__6507__auto__.push(arg__6508__auto___8626);
{
var G__8627 = cljs.core.next.call(null,seq__7564_8620__$1);
var G__8628 = null;
var G__8629 = 0;
var G__8630 = 0;
seq__7564_8610 = G__8627;
chunk__7565_8611 = G__8628;
count__7566_8612 = G__8629;
i__7567_8613 = G__8630;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.b.apply(null,a__6507__auto__);
};
var b = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return b__delegate.call(this,args__6506__auto__);};
b.cljs$lang$maxFixedArity = 0;
b.cljs$lang$applyTo = (function (arglist__8631){
var args__6506__auto__ = cljs.core.seq(arglist__8631);
return b__delegate(args__6506__auto__);
});
b.cljs$core$IFn$_invoke$arity$variadic = b__delegate;
return b;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.base = (function() { 
var base__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__7572_8632 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__7573_8633 = null;var count__7574_8634 = 0;var i__7575_8635 = 0;while(true){
if((i__7575_8635 < count__7574_8634))
{var arg__6508__auto___8636 = cljs.core._nth.call(null,chunk__7573_8633,i__7575_8635);a__6507__auto__.push(arg__6508__auto___8636);
{
var G__8637 = seq__7572_8632;
var G__8638 = chunk__7573_8633;
var G__8639 = count__7574_8634;
var G__8640 = (i__7575_8635 + 1);
seq__7572_8632 = G__8637;
chunk__7573_8633 = G__8638;
count__7574_8634 = G__8639;
i__7575_8635 = G__8640;
continue;
}
} else
{var temp__4092__auto___8641 = cljs.core.seq.call(null,seq__7572_8632);if(temp__4092__auto___8641)
{var seq__7572_8642__$1 = temp__4092__auto___8641;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7572_8642__$1))
{var c__5632__auto___8643 = cljs.core.chunk_first.call(null,seq__7572_8642__$1);{
var G__8644 = cljs.core.chunk_rest.call(null,seq__7572_8642__$1);
var G__8645 = c__5632__auto___8643;
var G__8646 = cljs.core.count.call(null,c__5632__auto___8643);
var G__8647 = 0;
seq__7572_8632 = G__8644;
chunk__7573_8633 = G__8645;
count__7574_8634 = G__8646;
i__7575_8635 = G__8647;
continue;
}
} else
{var arg__6508__auto___8648 = cljs.core.first.call(null,seq__7572_8642__$1);a__6507__auto__.push(arg__6508__auto___8648);
{
var G__8649 = cljs.core.next.call(null,seq__7572_8642__$1);
var G__8650 = null;
var G__8651 = 0;
var G__8652 = 0;
seq__7572_8632 = G__8649;
chunk__7573_8633 = G__8650;
count__7574_8634 = G__8651;
i__7575_8635 = G__8652;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.base.apply(null,a__6507__auto__);
};
var base = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return base__delegate.call(this,args__6506__auto__);};
base.cljs$lang$maxFixedArity = 0;
base.cljs$lang$applyTo = (function (arglist__8653){
var args__6506__auto__ = cljs.core.seq(arglist__8653);
return base__delegate(args__6506__auto__);
});
base.cljs$core$IFn$_invoke$arity$variadic = base__delegate;
return base;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.bdi = (function() { 
var bdi__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__7580_8654 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__7581_8655 = null;var count__7582_8656 = 0;var i__7583_8657 = 0;while(true){
if((i__7583_8657 < count__7582_8656))
{var arg__6508__auto___8658 = cljs.core._nth.call(null,chunk__7581_8655,i__7583_8657);a__6507__auto__.push(arg__6508__auto___8658);
{
var G__8659 = seq__7580_8654;
var G__8660 = chunk__7581_8655;
var G__8661 = count__7582_8656;
var G__8662 = (i__7583_8657 + 1);
seq__7580_8654 = G__8659;
chunk__7581_8655 = G__8660;
count__7582_8656 = G__8661;
i__7583_8657 = G__8662;
continue;
}
} else
{var temp__4092__auto___8663 = cljs.core.seq.call(null,seq__7580_8654);if(temp__4092__auto___8663)
{var seq__7580_8664__$1 = temp__4092__auto___8663;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7580_8664__$1))
{var c__5632__auto___8665 = cljs.core.chunk_first.call(null,seq__7580_8664__$1);{
var G__8666 = cljs.core.chunk_rest.call(null,seq__7580_8664__$1);
var G__8667 = c__5632__auto___8665;
var G__8668 = cljs.core.count.call(null,c__5632__auto___8665);
var G__8669 = 0;
seq__7580_8654 = G__8666;
chunk__7581_8655 = G__8667;
count__7582_8656 = G__8668;
i__7583_8657 = G__8669;
continue;
}
} else
{var arg__6508__auto___8670 = cljs.core.first.call(null,seq__7580_8664__$1);a__6507__auto__.push(arg__6508__auto___8670);
{
var G__8671 = cljs.core.next.call(null,seq__7580_8664__$1);
var G__8672 = null;
var G__8673 = 0;
var G__8674 = 0;
seq__7580_8654 = G__8671;
chunk__7581_8655 = G__8672;
count__7582_8656 = G__8673;
i__7583_8657 = G__8674;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.bdi.apply(null,a__6507__auto__);
};
var bdi = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return bdi__delegate.call(this,args__6506__auto__);};
bdi.cljs$lang$maxFixedArity = 0;
bdi.cljs$lang$applyTo = (function (arglist__8675){
var args__6506__auto__ = cljs.core.seq(arglist__8675);
return bdi__delegate(args__6506__auto__);
});
bdi.cljs$core$IFn$_invoke$arity$variadic = bdi__delegate;
return bdi;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.bdo = (function() { 
var bdo__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__7588_8676 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__7589_8677 = null;var count__7590_8678 = 0;var i__7591_8679 = 0;while(true){
if((i__7591_8679 < count__7590_8678))
{var arg__6508__auto___8680 = cljs.core._nth.call(null,chunk__7589_8677,i__7591_8679);a__6507__auto__.push(arg__6508__auto___8680);
{
var G__8681 = seq__7588_8676;
var G__8682 = chunk__7589_8677;
var G__8683 = count__7590_8678;
var G__8684 = (i__7591_8679 + 1);
seq__7588_8676 = G__8681;
chunk__7589_8677 = G__8682;
count__7590_8678 = G__8683;
i__7591_8679 = G__8684;
continue;
}
} else
{var temp__4092__auto___8685 = cljs.core.seq.call(null,seq__7588_8676);if(temp__4092__auto___8685)
{var seq__7588_8686__$1 = temp__4092__auto___8685;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7588_8686__$1))
{var c__5632__auto___8687 = cljs.core.chunk_first.call(null,seq__7588_8686__$1);{
var G__8688 = cljs.core.chunk_rest.call(null,seq__7588_8686__$1);
var G__8689 = c__5632__auto___8687;
var G__8690 = cljs.core.count.call(null,c__5632__auto___8687);
var G__8691 = 0;
seq__7588_8676 = G__8688;
chunk__7589_8677 = G__8689;
count__7590_8678 = G__8690;
i__7591_8679 = G__8691;
continue;
}
} else
{var arg__6508__auto___8692 = cljs.core.first.call(null,seq__7588_8686__$1);a__6507__auto__.push(arg__6508__auto___8692);
{
var G__8693 = cljs.core.next.call(null,seq__7588_8686__$1);
var G__8694 = null;
var G__8695 = 0;
var G__8696 = 0;
seq__7588_8676 = G__8693;
chunk__7589_8677 = G__8694;
count__7590_8678 = G__8695;
i__7591_8679 = G__8696;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.bdo.apply(null,a__6507__auto__);
};
var bdo = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return bdo__delegate.call(this,args__6506__auto__);};
bdo.cljs$lang$maxFixedArity = 0;
bdo.cljs$lang$applyTo = (function (arglist__8697){
var args__6506__auto__ = cljs.core.seq(arglist__8697);
return bdo__delegate(args__6506__auto__);
});
bdo.cljs$core$IFn$_invoke$arity$variadic = bdo__delegate;
return bdo;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.big = (function() { 
var big__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__7596_8698 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__7597_8699 = null;var count__7598_8700 = 0;var i__7599_8701 = 0;while(true){
if((i__7599_8701 < count__7598_8700))
{var arg__6508__auto___8702 = cljs.core._nth.call(null,chunk__7597_8699,i__7599_8701);a__6507__auto__.push(arg__6508__auto___8702);
{
var G__8703 = seq__7596_8698;
var G__8704 = chunk__7597_8699;
var G__8705 = count__7598_8700;
var G__8706 = (i__7599_8701 + 1);
seq__7596_8698 = G__8703;
chunk__7597_8699 = G__8704;
count__7598_8700 = G__8705;
i__7599_8701 = G__8706;
continue;
}
} else
{var temp__4092__auto___8707 = cljs.core.seq.call(null,seq__7596_8698);if(temp__4092__auto___8707)
{var seq__7596_8708__$1 = temp__4092__auto___8707;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7596_8708__$1))
{var c__5632__auto___8709 = cljs.core.chunk_first.call(null,seq__7596_8708__$1);{
var G__8710 = cljs.core.chunk_rest.call(null,seq__7596_8708__$1);
var G__8711 = c__5632__auto___8709;
var G__8712 = cljs.core.count.call(null,c__5632__auto___8709);
var G__8713 = 0;
seq__7596_8698 = G__8710;
chunk__7597_8699 = G__8711;
count__7598_8700 = G__8712;
i__7599_8701 = G__8713;
continue;
}
} else
{var arg__6508__auto___8714 = cljs.core.first.call(null,seq__7596_8708__$1);a__6507__auto__.push(arg__6508__auto___8714);
{
var G__8715 = cljs.core.next.call(null,seq__7596_8708__$1);
var G__8716 = null;
var G__8717 = 0;
var G__8718 = 0;
seq__7596_8698 = G__8715;
chunk__7597_8699 = G__8716;
count__7598_8700 = G__8717;
i__7599_8701 = G__8718;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.big.apply(null,a__6507__auto__);
};
var big = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return big__delegate.call(this,args__6506__auto__);};
big.cljs$lang$maxFixedArity = 0;
big.cljs$lang$applyTo = (function (arglist__8719){
var args__6506__auto__ = cljs.core.seq(arglist__8719);
return big__delegate(args__6506__auto__);
});
big.cljs$core$IFn$_invoke$arity$variadic = big__delegate;
return big;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.blockquote = (function() { 
var blockquote__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__7604_8720 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__7605_8721 = null;var count__7606_8722 = 0;var i__7607_8723 = 0;while(true){
if((i__7607_8723 < count__7606_8722))
{var arg__6508__auto___8724 = cljs.core._nth.call(null,chunk__7605_8721,i__7607_8723);a__6507__auto__.push(arg__6508__auto___8724);
{
var G__8725 = seq__7604_8720;
var G__8726 = chunk__7605_8721;
var G__8727 = count__7606_8722;
var G__8728 = (i__7607_8723 + 1);
seq__7604_8720 = G__8725;
chunk__7605_8721 = G__8726;
count__7606_8722 = G__8727;
i__7607_8723 = G__8728;
continue;
}
} else
{var temp__4092__auto___8729 = cljs.core.seq.call(null,seq__7604_8720);if(temp__4092__auto___8729)
{var seq__7604_8730__$1 = temp__4092__auto___8729;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7604_8730__$1))
{var c__5632__auto___8731 = cljs.core.chunk_first.call(null,seq__7604_8730__$1);{
var G__8732 = cljs.core.chunk_rest.call(null,seq__7604_8730__$1);
var G__8733 = c__5632__auto___8731;
var G__8734 = cljs.core.count.call(null,c__5632__auto___8731);
var G__8735 = 0;
seq__7604_8720 = G__8732;
chunk__7605_8721 = G__8733;
count__7606_8722 = G__8734;
i__7607_8723 = G__8735;
continue;
}
} else
{var arg__6508__auto___8736 = cljs.core.first.call(null,seq__7604_8730__$1);a__6507__auto__.push(arg__6508__auto___8736);
{
var G__8737 = cljs.core.next.call(null,seq__7604_8730__$1);
var G__8738 = null;
var G__8739 = 0;
var G__8740 = 0;
seq__7604_8720 = G__8737;
chunk__7605_8721 = G__8738;
count__7606_8722 = G__8739;
i__7607_8723 = G__8740;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.blockquote.apply(null,a__6507__auto__);
};
var blockquote = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return blockquote__delegate.call(this,args__6506__auto__);};
blockquote.cljs$lang$maxFixedArity = 0;
blockquote.cljs$lang$applyTo = (function (arglist__8741){
var args__6506__auto__ = cljs.core.seq(arglist__8741);
return blockquote__delegate(args__6506__auto__);
});
blockquote.cljs$core$IFn$_invoke$arity$variadic = blockquote__delegate;
return blockquote;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.body = (function() { 
var body__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__7612_8742 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__7613_8743 = null;var count__7614_8744 = 0;var i__7615_8745 = 0;while(true){
if((i__7615_8745 < count__7614_8744))
{var arg__6508__auto___8746 = cljs.core._nth.call(null,chunk__7613_8743,i__7615_8745);a__6507__auto__.push(arg__6508__auto___8746);
{
var G__8747 = seq__7612_8742;
var G__8748 = chunk__7613_8743;
var G__8749 = count__7614_8744;
var G__8750 = (i__7615_8745 + 1);
seq__7612_8742 = G__8747;
chunk__7613_8743 = G__8748;
count__7614_8744 = G__8749;
i__7615_8745 = G__8750;
continue;
}
} else
{var temp__4092__auto___8751 = cljs.core.seq.call(null,seq__7612_8742);if(temp__4092__auto___8751)
{var seq__7612_8752__$1 = temp__4092__auto___8751;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7612_8752__$1))
{var c__5632__auto___8753 = cljs.core.chunk_first.call(null,seq__7612_8752__$1);{
var G__8754 = cljs.core.chunk_rest.call(null,seq__7612_8752__$1);
var G__8755 = c__5632__auto___8753;
var G__8756 = cljs.core.count.call(null,c__5632__auto___8753);
var G__8757 = 0;
seq__7612_8742 = G__8754;
chunk__7613_8743 = G__8755;
count__7614_8744 = G__8756;
i__7615_8745 = G__8757;
continue;
}
} else
{var arg__6508__auto___8758 = cljs.core.first.call(null,seq__7612_8752__$1);a__6507__auto__.push(arg__6508__auto___8758);
{
var G__8759 = cljs.core.next.call(null,seq__7612_8752__$1);
var G__8760 = null;
var G__8761 = 0;
var G__8762 = 0;
seq__7612_8742 = G__8759;
chunk__7613_8743 = G__8760;
count__7614_8744 = G__8761;
i__7615_8745 = G__8762;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.body.apply(null,a__6507__auto__);
};
var body = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return body__delegate.call(this,args__6506__auto__);};
body.cljs$lang$maxFixedArity = 0;
body.cljs$lang$applyTo = (function (arglist__8763){
var args__6506__auto__ = cljs.core.seq(arglist__8763);
return body__delegate(args__6506__auto__);
});
body.cljs$core$IFn$_invoke$arity$variadic = body__delegate;
return body;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.br = (function() { 
var br__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__7620_8764 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__7621_8765 = null;var count__7622_8766 = 0;var i__7623_8767 = 0;while(true){
if((i__7623_8767 < count__7622_8766))
{var arg__6508__auto___8768 = cljs.core._nth.call(null,chunk__7621_8765,i__7623_8767);a__6507__auto__.push(arg__6508__auto___8768);
{
var G__8769 = seq__7620_8764;
var G__8770 = chunk__7621_8765;
var G__8771 = count__7622_8766;
var G__8772 = (i__7623_8767 + 1);
seq__7620_8764 = G__8769;
chunk__7621_8765 = G__8770;
count__7622_8766 = G__8771;
i__7623_8767 = G__8772;
continue;
}
} else
{var temp__4092__auto___8773 = cljs.core.seq.call(null,seq__7620_8764);if(temp__4092__auto___8773)
{var seq__7620_8774__$1 = temp__4092__auto___8773;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7620_8774__$1))
{var c__5632__auto___8775 = cljs.core.chunk_first.call(null,seq__7620_8774__$1);{
var G__8776 = cljs.core.chunk_rest.call(null,seq__7620_8774__$1);
var G__8777 = c__5632__auto___8775;
var G__8778 = cljs.core.count.call(null,c__5632__auto___8775);
var G__8779 = 0;
seq__7620_8764 = G__8776;
chunk__7621_8765 = G__8777;
count__7622_8766 = G__8778;
i__7623_8767 = G__8779;
continue;
}
} else
{var arg__6508__auto___8780 = cljs.core.first.call(null,seq__7620_8774__$1);a__6507__auto__.push(arg__6508__auto___8780);
{
var G__8781 = cljs.core.next.call(null,seq__7620_8774__$1);
var G__8782 = null;
var G__8783 = 0;
var G__8784 = 0;
seq__7620_8764 = G__8781;
chunk__7621_8765 = G__8782;
count__7622_8766 = G__8783;
i__7623_8767 = G__8784;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.br.apply(null,a__6507__auto__);
};
var br = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return br__delegate.call(this,args__6506__auto__);};
br.cljs$lang$maxFixedArity = 0;
br.cljs$lang$applyTo = (function (arglist__8785){
var args__6506__auto__ = cljs.core.seq(arglist__8785);
return br__delegate(args__6506__auto__);
});
br.cljs$core$IFn$_invoke$arity$variadic = br__delegate;
return br;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.button = (function() { 
var button__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__7628_8786 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__7629_8787 = null;var count__7630_8788 = 0;var i__7631_8789 = 0;while(true){
if((i__7631_8789 < count__7630_8788))
{var arg__6508__auto___8790 = cljs.core._nth.call(null,chunk__7629_8787,i__7631_8789);a__6507__auto__.push(arg__6508__auto___8790);
{
var G__8791 = seq__7628_8786;
var G__8792 = chunk__7629_8787;
var G__8793 = count__7630_8788;
var G__8794 = (i__7631_8789 + 1);
seq__7628_8786 = G__8791;
chunk__7629_8787 = G__8792;
count__7630_8788 = G__8793;
i__7631_8789 = G__8794;
continue;
}
} else
{var temp__4092__auto___8795 = cljs.core.seq.call(null,seq__7628_8786);if(temp__4092__auto___8795)
{var seq__7628_8796__$1 = temp__4092__auto___8795;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7628_8796__$1))
{var c__5632__auto___8797 = cljs.core.chunk_first.call(null,seq__7628_8796__$1);{
var G__8798 = cljs.core.chunk_rest.call(null,seq__7628_8796__$1);
var G__8799 = c__5632__auto___8797;
var G__8800 = cljs.core.count.call(null,c__5632__auto___8797);
var G__8801 = 0;
seq__7628_8786 = G__8798;
chunk__7629_8787 = G__8799;
count__7630_8788 = G__8800;
i__7631_8789 = G__8801;
continue;
}
} else
{var arg__6508__auto___8802 = cljs.core.first.call(null,seq__7628_8796__$1);a__6507__auto__.push(arg__6508__auto___8802);
{
var G__8803 = cljs.core.next.call(null,seq__7628_8796__$1);
var G__8804 = null;
var G__8805 = 0;
var G__8806 = 0;
seq__7628_8786 = G__8803;
chunk__7629_8787 = G__8804;
count__7630_8788 = G__8805;
i__7631_8789 = G__8806;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.button.apply(null,a__6507__auto__);
};
var button = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return button__delegate.call(this,args__6506__auto__);};
button.cljs$lang$maxFixedArity = 0;
button.cljs$lang$applyTo = (function (arglist__8807){
var args__6506__auto__ = cljs.core.seq(arglist__8807);
return button__delegate(args__6506__auto__);
});
button.cljs$core$IFn$_invoke$arity$variadic = button__delegate;
return button;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.canvas = (function() { 
var canvas__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__7636_8808 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__7637_8809 = null;var count__7638_8810 = 0;var i__7639_8811 = 0;while(true){
if((i__7639_8811 < count__7638_8810))
{var arg__6508__auto___8812 = cljs.core._nth.call(null,chunk__7637_8809,i__7639_8811);a__6507__auto__.push(arg__6508__auto___8812);
{
var G__8813 = seq__7636_8808;
var G__8814 = chunk__7637_8809;
var G__8815 = count__7638_8810;
var G__8816 = (i__7639_8811 + 1);
seq__7636_8808 = G__8813;
chunk__7637_8809 = G__8814;
count__7638_8810 = G__8815;
i__7639_8811 = G__8816;
continue;
}
} else
{var temp__4092__auto___8817 = cljs.core.seq.call(null,seq__7636_8808);if(temp__4092__auto___8817)
{var seq__7636_8818__$1 = temp__4092__auto___8817;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7636_8818__$1))
{var c__5632__auto___8819 = cljs.core.chunk_first.call(null,seq__7636_8818__$1);{
var G__8820 = cljs.core.chunk_rest.call(null,seq__7636_8818__$1);
var G__8821 = c__5632__auto___8819;
var G__8822 = cljs.core.count.call(null,c__5632__auto___8819);
var G__8823 = 0;
seq__7636_8808 = G__8820;
chunk__7637_8809 = G__8821;
count__7638_8810 = G__8822;
i__7639_8811 = G__8823;
continue;
}
} else
{var arg__6508__auto___8824 = cljs.core.first.call(null,seq__7636_8818__$1);a__6507__auto__.push(arg__6508__auto___8824);
{
var G__8825 = cljs.core.next.call(null,seq__7636_8818__$1);
var G__8826 = null;
var G__8827 = 0;
var G__8828 = 0;
seq__7636_8808 = G__8825;
chunk__7637_8809 = G__8826;
count__7638_8810 = G__8827;
i__7639_8811 = G__8828;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.canvas.apply(null,a__6507__auto__);
};
var canvas = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return canvas__delegate.call(this,args__6506__auto__);};
canvas.cljs$lang$maxFixedArity = 0;
canvas.cljs$lang$applyTo = (function (arglist__8829){
var args__6506__auto__ = cljs.core.seq(arglist__8829);
return canvas__delegate(args__6506__auto__);
});
canvas.cljs$core$IFn$_invoke$arity$variadic = canvas__delegate;
return canvas;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.caption = (function() { 
var caption__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__7644_8830 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__7645_8831 = null;var count__7646_8832 = 0;var i__7647_8833 = 0;while(true){
if((i__7647_8833 < count__7646_8832))
{var arg__6508__auto___8834 = cljs.core._nth.call(null,chunk__7645_8831,i__7647_8833);a__6507__auto__.push(arg__6508__auto___8834);
{
var G__8835 = seq__7644_8830;
var G__8836 = chunk__7645_8831;
var G__8837 = count__7646_8832;
var G__8838 = (i__7647_8833 + 1);
seq__7644_8830 = G__8835;
chunk__7645_8831 = G__8836;
count__7646_8832 = G__8837;
i__7647_8833 = G__8838;
continue;
}
} else
{var temp__4092__auto___8839 = cljs.core.seq.call(null,seq__7644_8830);if(temp__4092__auto___8839)
{var seq__7644_8840__$1 = temp__4092__auto___8839;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7644_8840__$1))
{var c__5632__auto___8841 = cljs.core.chunk_first.call(null,seq__7644_8840__$1);{
var G__8842 = cljs.core.chunk_rest.call(null,seq__7644_8840__$1);
var G__8843 = c__5632__auto___8841;
var G__8844 = cljs.core.count.call(null,c__5632__auto___8841);
var G__8845 = 0;
seq__7644_8830 = G__8842;
chunk__7645_8831 = G__8843;
count__7646_8832 = G__8844;
i__7647_8833 = G__8845;
continue;
}
} else
{var arg__6508__auto___8846 = cljs.core.first.call(null,seq__7644_8840__$1);a__6507__auto__.push(arg__6508__auto___8846);
{
var G__8847 = cljs.core.next.call(null,seq__7644_8840__$1);
var G__8848 = null;
var G__8849 = 0;
var G__8850 = 0;
seq__7644_8830 = G__8847;
chunk__7645_8831 = G__8848;
count__7646_8832 = G__8849;
i__7647_8833 = G__8850;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.caption.apply(null,a__6507__auto__);
};
var caption = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return caption__delegate.call(this,args__6506__auto__);};
caption.cljs$lang$maxFixedArity = 0;
caption.cljs$lang$applyTo = (function (arglist__8851){
var args__6506__auto__ = cljs.core.seq(arglist__8851);
return caption__delegate(args__6506__auto__);
});
caption.cljs$core$IFn$_invoke$arity$variadic = caption__delegate;
return caption;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.cite = (function() { 
var cite__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__7652_8852 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__7653_8853 = null;var count__7654_8854 = 0;var i__7655_8855 = 0;while(true){
if((i__7655_8855 < count__7654_8854))
{var arg__6508__auto___8856 = cljs.core._nth.call(null,chunk__7653_8853,i__7655_8855);a__6507__auto__.push(arg__6508__auto___8856);
{
var G__8857 = seq__7652_8852;
var G__8858 = chunk__7653_8853;
var G__8859 = count__7654_8854;
var G__8860 = (i__7655_8855 + 1);
seq__7652_8852 = G__8857;
chunk__7653_8853 = G__8858;
count__7654_8854 = G__8859;
i__7655_8855 = G__8860;
continue;
}
} else
{var temp__4092__auto___8861 = cljs.core.seq.call(null,seq__7652_8852);if(temp__4092__auto___8861)
{var seq__7652_8862__$1 = temp__4092__auto___8861;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7652_8862__$1))
{var c__5632__auto___8863 = cljs.core.chunk_first.call(null,seq__7652_8862__$1);{
var G__8864 = cljs.core.chunk_rest.call(null,seq__7652_8862__$1);
var G__8865 = c__5632__auto___8863;
var G__8866 = cljs.core.count.call(null,c__5632__auto___8863);
var G__8867 = 0;
seq__7652_8852 = G__8864;
chunk__7653_8853 = G__8865;
count__7654_8854 = G__8866;
i__7655_8855 = G__8867;
continue;
}
} else
{var arg__6508__auto___8868 = cljs.core.first.call(null,seq__7652_8862__$1);a__6507__auto__.push(arg__6508__auto___8868);
{
var G__8869 = cljs.core.next.call(null,seq__7652_8862__$1);
var G__8870 = null;
var G__8871 = 0;
var G__8872 = 0;
seq__7652_8852 = G__8869;
chunk__7653_8853 = G__8870;
count__7654_8854 = G__8871;
i__7655_8855 = G__8872;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.cite.apply(null,a__6507__auto__);
};
var cite = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return cite__delegate.call(this,args__6506__auto__);};
cite.cljs$lang$maxFixedArity = 0;
cite.cljs$lang$applyTo = (function (arglist__8873){
var args__6506__auto__ = cljs.core.seq(arglist__8873);
return cite__delegate(args__6506__auto__);
});
cite.cljs$core$IFn$_invoke$arity$variadic = cite__delegate;
return cite;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.code = (function() { 
var code__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__7660_8874 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__7661_8875 = null;var count__7662_8876 = 0;var i__7663_8877 = 0;while(true){
if((i__7663_8877 < count__7662_8876))
{var arg__6508__auto___8878 = cljs.core._nth.call(null,chunk__7661_8875,i__7663_8877);a__6507__auto__.push(arg__6508__auto___8878);
{
var G__8879 = seq__7660_8874;
var G__8880 = chunk__7661_8875;
var G__8881 = count__7662_8876;
var G__8882 = (i__7663_8877 + 1);
seq__7660_8874 = G__8879;
chunk__7661_8875 = G__8880;
count__7662_8876 = G__8881;
i__7663_8877 = G__8882;
continue;
}
} else
{var temp__4092__auto___8883 = cljs.core.seq.call(null,seq__7660_8874);if(temp__4092__auto___8883)
{var seq__7660_8884__$1 = temp__4092__auto___8883;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7660_8884__$1))
{var c__5632__auto___8885 = cljs.core.chunk_first.call(null,seq__7660_8884__$1);{
var G__8886 = cljs.core.chunk_rest.call(null,seq__7660_8884__$1);
var G__8887 = c__5632__auto___8885;
var G__8888 = cljs.core.count.call(null,c__5632__auto___8885);
var G__8889 = 0;
seq__7660_8874 = G__8886;
chunk__7661_8875 = G__8887;
count__7662_8876 = G__8888;
i__7663_8877 = G__8889;
continue;
}
} else
{var arg__6508__auto___8890 = cljs.core.first.call(null,seq__7660_8884__$1);a__6507__auto__.push(arg__6508__auto___8890);
{
var G__8891 = cljs.core.next.call(null,seq__7660_8884__$1);
var G__8892 = null;
var G__8893 = 0;
var G__8894 = 0;
seq__7660_8874 = G__8891;
chunk__7661_8875 = G__8892;
count__7662_8876 = G__8893;
i__7663_8877 = G__8894;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.code.apply(null,a__6507__auto__);
};
var code = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return code__delegate.call(this,args__6506__auto__);};
code.cljs$lang$maxFixedArity = 0;
code.cljs$lang$applyTo = (function (arglist__8895){
var args__6506__auto__ = cljs.core.seq(arglist__8895);
return code__delegate(args__6506__auto__);
});
code.cljs$core$IFn$_invoke$arity$variadic = code__delegate;
return code;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.col = (function() { 
var col__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__7668_8896 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__7669_8897 = null;var count__7670_8898 = 0;var i__7671_8899 = 0;while(true){
if((i__7671_8899 < count__7670_8898))
{var arg__6508__auto___8900 = cljs.core._nth.call(null,chunk__7669_8897,i__7671_8899);a__6507__auto__.push(arg__6508__auto___8900);
{
var G__8901 = seq__7668_8896;
var G__8902 = chunk__7669_8897;
var G__8903 = count__7670_8898;
var G__8904 = (i__7671_8899 + 1);
seq__7668_8896 = G__8901;
chunk__7669_8897 = G__8902;
count__7670_8898 = G__8903;
i__7671_8899 = G__8904;
continue;
}
} else
{var temp__4092__auto___8905 = cljs.core.seq.call(null,seq__7668_8896);if(temp__4092__auto___8905)
{var seq__7668_8906__$1 = temp__4092__auto___8905;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7668_8906__$1))
{var c__5632__auto___8907 = cljs.core.chunk_first.call(null,seq__7668_8906__$1);{
var G__8908 = cljs.core.chunk_rest.call(null,seq__7668_8906__$1);
var G__8909 = c__5632__auto___8907;
var G__8910 = cljs.core.count.call(null,c__5632__auto___8907);
var G__8911 = 0;
seq__7668_8896 = G__8908;
chunk__7669_8897 = G__8909;
count__7670_8898 = G__8910;
i__7671_8899 = G__8911;
continue;
}
} else
{var arg__6508__auto___8912 = cljs.core.first.call(null,seq__7668_8906__$1);a__6507__auto__.push(arg__6508__auto___8912);
{
var G__8913 = cljs.core.next.call(null,seq__7668_8906__$1);
var G__8914 = null;
var G__8915 = 0;
var G__8916 = 0;
seq__7668_8896 = G__8913;
chunk__7669_8897 = G__8914;
count__7670_8898 = G__8915;
i__7671_8899 = G__8916;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.col.apply(null,a__6507__auto__);
};
var col = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return col__delegate.call(this,args__6506__auto__);};
col.cljs$lang$maxFixedArity = 0;
col.cljs$lang$applyTo = (function (arglist__8917){
var args__6506__auto__ = cljs.core.seq(arglist__8917);
return col__delegate(args__6506__auto__);
});
col.cljs$core$IFn$_invoke$arity$variadic = col__delegate;
return col;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.colgroup = (function() { 
var colgroup__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__7676_8918 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__7677_8919 = null;var count__7678_8920 = 0;var i__7679_8921 = 0;while(true){
if((i__7679_8921 < count__7678_8920))
{var arg__6508__auto___8922 = cljs.core._nth.call(null,chunk__7677_8919,i__7679_8921);a__6507__auto__.push(arg__6508__auto___8922);
{
var G__8923 = seq__7676_8918;
var G__8924 = chunk__7677_8919;
var G__8925 = count__7678_8920;
var G__8926 = (i__7679_8921 + 1);
seq__7676_8918 = G__8923;
chunk__7677_8919 = G__8924;
count__7678_8920 = G__8925;
i__7679_8921 = G__8926;
continue;
}
} else
{var temp__4092__auto___8927 = cljs.core.seq.call(null,seq__7676_8918);if(temp__4092__auto___8927)
{var seq__7676_8928__$1 = temp__4092__auto___8927;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7676_8928__$1))
{var c__5632__auto___8929 = cljs.core.chunk_first.call(null,seq__7676_8928__$1);{
var G__8930 = cljs.core.chunk_rest.call(null,seq__7676_8928__$1);
var G__8931 = c__5632__auto___8929;
var G__8932 = cljs.core.count.call(null,c__5632__auto___8929);
var G__8933 = 0;
seq__7676_8918 = G__8930;
chunk__7677_8919 = G__8931;
count__7678_8920 = G__8932;
i__7679_8921 = G__8933;
continue;
}
} else
{var arg__6508__auto___8934 = cljs.core.first.call(null,seq__7676_8928__$1);a__6507__auto__.push(arg__6508__auto___8934);
{
var G__8935 = cljs.core.next.call(null,seq__7676_8928__$1);
var G__8936 = null;
var G__8937 = 0;
var G__8938 = 0;
seq__7676_8918 = G__8935;
chunk__7677_8919 = G__8936;
count__7678_8920 = G__8937;
i__7679_8921 = G__8938;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.colgroup.apply(null,a__6507__auto__);
};
var colgroup = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return colgroup__delegate.call(this,args__6506__auto__);};
colgroup.cljs$lang$maxFixedArity = 0;
colgroup.cljs$lang$applyTo = (function (arglist__8939){
var args__6506__auto__ = cljs.core.seq(arglist__8939);
return colgroup__delegate(args__6506__auto__);
});
colgroup.cljs$core$IFn$_invoke$arity$variadic = colgroup__delegate;
return colgroup;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.data = (function() { 
var data__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__7684_8940 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__7685_8941 = null;var count__7686_8942 = 0;var i__7687_8943 = 0;while(true){
if((i__7687_8943 < count__7686_8942))
{var arg__6508__auto___8944 = cljs.core._nth.call(null,chunk__7685_8941,i__7687_8943);a__6507__auto__.push(arg__6508__auto___8944);
{
var G__8945 = seq__7684_8940;
var G__8946 = chunk__7685_8941;
var G__8947 = count__7686_8942;
var G__8948 = (i__7687_8943 + 1);
seq__7684_8940 = G__8945;
chunk__7685_8941 = G__8946;
count__7686_8942 = G__8947;
i__7687_8943 = G__8948;
continue;
}
} else
{var temp__4092__auto___8949 = cljs.core.seq.call(null,seq__7684_8940);if(temp__4092__auto___8949)
{var seq__7684_8950__$1 = temp__4092__auto___8949;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7684_8950__$1))
{var c__5632__auto___8951 = cljs.core.chunk_first.call(null,seq__7684_8950__$1);{
var G__8952 = cljs.core.chunk_rest.call(null,seq__7684_8950__$1);
var G__8953 = c__5632__auto___8951;
var G__8954 = cljs.core.count.call(null,c__5632__auto___8951);
var G__8955 = 0;
seq__7684_8940 = G__8952;
chunk__7685_8941 = G__8953;
count__7686_8942 = G__8954;
i__7687_8943 = G__8955;
continue;
}
} else
{var arg__6508__auto___8956 = cljs.core.first.call(null,seq__7684_8950__$1);a__6507__auto__.push(arg__6508__auto___8956);
{
var G__8957 = cljs.core.next.call(null,seq__7684_8950__$1);
var G__8958 = null;
var G__8959 = 0;
var G__8960 = 0;
seq__7684_8940 = G__8957;
chunk__7685_8941 = G__8958;
count__7686_8942 = G__8959;
i__7687_8943 = G__8960;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.data.apply(null,a__6507__auto__);
};
var data = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return data__delegate.call(this,args__6506__auto__);};
data.cljs$lang$maxFixedArity = 0;
data.cljs$lang$applyTo = (function (arglist__8961){
var args__6506__auto__ = cljs.core.seq(arglist__8961);
return data__delegate(args__6506__auto__);
});
data.cljs$core$IFn$_invoke$arity$variadic = data__delegate;
return data;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.datalist = (function() { 
var datalist__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__7692_8962 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__7693_8963 = null;var count__7694_8964 = 0;var i__7695_8965 = 0;while(true){
if((i__7695_8965 < count__7694_8964))
{var arg__6508__auto___8966 = cljs.core._nth.call(null,chunk__7693_8963,i__7695_8965);a__6507__auto__.push(arg__6508__auto___8966);
{
var G__8967 = seq__7692_8962;
var G__8968 = chunk__7693_8963;
var G__8969 = count__7694_8964;
var G__8970 = (i__7695_8965 + 1);
seq__7692_8962 = G__8967;
chunk__7693_8963 = G__8968;
count__7694_8964 = G__8969;
i__7695_8965 = G__8970;
continue;
}
} else
{var temp__4092__auto___8971 = cljs.core.seq.call(null,seq__7692_8962);if(temp__4092__auto___8971)
{var seq__7692_8972__$1 = temp__4092__auto___8971;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7692_8972__$1))
{var c__5632__auto___8973 = cljs.core.chunk_first.call(null,seq__7692_8972__$1);{
var G__8974 = cljs.core.chunk_rest.call(null,seq__7692_8972__$1);
var G__8975 = c__5632__auto___8973;
var G__8976 = cljs.core.count.call(null,c__5632__auto___8973);
var G__8977 = 0;
seq__7692_8962 = G__8974;
chunk__7693_8963 = G__8975;
count__7694_8964 = G__8976;
i__7695_8965 = G__8977;
continue;
}
} else
{var arg__6508__auto___8978 = cljs.core.first.call(null,seq__7692_8972__$1);a__6507__auto__.push(arg__6508__auto___8978);
{
var G__8979 = cljs.core.next.call(null,seq__7692_8972__$1);
var G__8980 = null;
var G__8981 = 0;
var G__8982 = 0;
seq__7692_8962 = G__8979;
chunk__7693_8963 = G__8980;
count__7694_8964 = G__8981;
i__7695_8965 = G__8982;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.datalist.apply(null,a__6507__auto__);
};
var datalist = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return datalist__delegate.call(this,args__6506__auto__);};
datalist.cljs$lang$maxFixedArity = 0;
datalist.cljs$lang$applyTo = (function (arglist__8983){
var args__6506__auto__ = cljs.core.seq(arglist__8983);
return datalist__delegate(args__6506__auto__);
});
datalist.cljs$core$IFn$_invoke$arity$variadic = datalist__delegate;
return datalist;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.dd = (function() { 
var dd__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__7700_8984 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__7701_8985 = null;var count__7702_8986 = 0;var i__7703_8987 = 0;while(true){
if((i__7703_8987 < count__7702_8986))
{var arg__6508__auto___8988 = cljs.core._nth.call(null,chunk__7701_8985,i__7703_8987);a__6507__auto__.push(arg__6508__auto___8988);
{
var G__8989 = seq__7700_8984;
var G__8990 = chunk__7701_8985;
var G__8991 = count__7702_8986;
var G__8992 = (i__7703_8987 + 1);
seq__7700_8984 = G__8989;
chunk__7701_8985 = G__8990;
count__7702_8986 = G__8991;
i__7703_8987 = G__8992;
continue;
}
} else
{var temp__4092__auto___8993 = cljs.core.seq.call(null,seq__7700_8984);if(temp__4092__auto___8993)
{var seq__7700_8994__$1 = temp__4092__auto___8993;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7700_8994__$1))
{var c__5632__auto___8995 = cljs.core.chunk_first.call(null,seq__7700_8994__$1);{
var G__8996 = cljs.core.chunk_rest.call(null,seq__7700_8994__$1);
var G__8997 = c__5632__auto___8995;
var G__8998 = cljs.core.count.call(null,c__5632__auto___8995);
var G__8999 = 0;
seq__7700_8984 = G__8996;
chunk__7701_8985 = G__8997;
count__7702_8986 = G__8998;
i__7703_8987 = G__8999;
continue;
}
} else
{var arg__6508__auto___9000 = cljs.core.first.call(null,seq__7700_8994__$1);a__6507__auto__.push(arg__6508__auto___9000);
{
var G__9001 = cljs.core.next.call(null,seq__7700_8994__$1);
var G__9002 = null;
var G__9003 = 0;
var G__9004 = 0;
seq__7700_8984 = G__9001;
chunk__7701_8985 = G__9002;
count__7702_8986 = G__9003;
i__7703_8987 = G__9004;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.dd.apply(null,a__6507__auto__);
};
var dd = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return dd__delegate.call(this,args__6506__auto__);};
dd.cljs$lang$maxFixedArity = 0;
dd.cljs$lang$applyTo = (function (arglist__9005){
var args__6506__auto__ = cljs.core.seq(arglist__9005);
return dd__delegate(args__6506__auto__);
});
dd.cljs$core$IFn$_invoke$arity$variadic = dd__delegate;
return dd;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.del = (function() { 
var del__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__7708_9006 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__7709_9007 = null;var count__7710_9008 = 0;var i__7711_9009 = 0;while(true){
if((i__7711_9009 < count__7710_9008))
{var arg__6508__auto___9010 = cljs.core._nth.call(null,chunk__7709_9007,i__7711_9009);a__6507__auto__.push(arg__6508__auto___9010);
{
var G__9011 = seq__7708_9006;
var G__9012 = chunk__7709_9007;
var G__9013 = count__7710_9008;
var G__9014 = (i__7711_9009 + 1);
seq__7708_9006 = G__9011;
chunk__7709_9007 = G__9012;
count__7710_9008 = G__9013;
i__7711_9009 = G__9014;
continue;
}
} else
{var temp__4092__auto___9015 = cljs.core.seq.call(null,seq__7708_9006);if(temp__4092__auto___9015)
{var seq__7708_9016__$1 = temp__4092__auto___9015;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7708_9016__$1))
{var c__5632__auto___9017 = cljs.core.chunk_first.call(null,seq__7708_9016__$1);{
var G__9018 = cljs.core.chunk_rest.call(null,seq__7708_9016__$1);
var G__9019 = c__5632__auto___9017;
var G__9020 = cljs.core.count.call(null,c__5632__auto___9017);
var G__9021 = 0;
seq__7708_9006 = G__9018;
chunk__7709_9007 = G__9019;
count__7710_9008 = G__9020;
i__7711_9009 = G__9021;
continue;
}
} else
{var arg__6508__auto___9022 = cljs.core.first.call(null,seq__7708_9016__$1);a__6507__auto__.push(arg__6508__auto___9022);
{
var G__9023 = cljs.core.next.call(null,seq__7708_9016__$1);
var G__9024 = null;
var G__9025 = 0;
var G__9026 = 0;
seq__7708_9006 = G__9023;
chunk__7709_9007 = G__9024;
count__7710_9008 = G__9025;
i__7711_9009 = G__9026;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.del.apply(null,a__6507__auto__);
};
var del = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return del__delegate.call(this,args__6506__auto__);};
del.cljs$lang$maxFixedArity = 0;
del.cljs$lang$applyTo = (function (arglist__9027){
var args__6506__auto__ = cljs.core.seq(arglist__9027);
return del__delegate(args__6506__auto__);
});
del.cljs$core$IFn$_invoke$arity$variadic = del__delegate;
return del;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.details = (function() { 
var details__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__7716_9028 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__7717_9029 = null;var count__7718_9030 = 0;var i__7719_9031 = 0;while(true){
if((i__7719_9031 < count__7718_9030))
{var arg__6508__auto___9032 = cljs.core._nth.call(null,chunk__7717_9029,i__7719_9031);a__6507__auto__.push(arg__6508__auto___9032);
{
var G__9033 = seq__7716_9028;
var G__9034 = chunk__7717_9029;
var G__9035 = count__7718_9030;
var G__9036 = (i__7719_9031 + 1);
seq__7716_9028 = G__9033;
chunk__7717_9029 = G__9034;
count__7718_9030 = G__9035;
i__7719_9031 = G__9036;
continue;
}
} else
{var temp__4092__auto___9037 = cljs.core.seq.call(null,seq__7716_9028);if(temp__4092__auto___9037)
{var seq__7716_9038__$1 = temp__4092__auto___9037;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7716_9038__$1))
{var c__5632__auto___9039 = cljs.core.chunk_first.call(null,seq__7716_9038__$1);{
var G__9040 = cljs.core.chunk_rest.call(null,seq__7716_9038__$1);
var G__9041 = c__5632__auto___9039;
var G__9042 = cljs.core.count.call(null,c__5632__auto___9039);
var G__9043 = 0;
seq__7716_9028 = G__9040;
chunk__7717_9029 = G__9041;
count__7718_9030 = G__9042;
i__7719_9031 = G__9043;
continue;
}
} else
{var arg__6508__auto___9044 = cljs.core.first.call(null,seq__7716_9038__$1);a__6507__auto__.push(arg__6508__auto___9044);
{
var G__9045 = cljs.core.next.call(null,seq__7716_9038__$1);
var G__9046 = null;
var G__9047 = 0;
var G__9048 = 0;
seq__7716_9028 = G__9045;
chunk__7717_9029 = G__9046;
count__7718_9030 = G__9047;
i__7719_9031 = G__9048;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.details.apply(null,a__6507__auto__);
};
var details = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return details__delegate.call(this,args__6506__auto__);};
details.cljs$lang$maxFixedArity = 0;
details.cljs$lang$applyTo = (function (arglist__9049){
var args__6506__auto__ = cljs.core.seq(arglist__9049);
return details__delegate(args__6506__auto__);
});
details.cljs$core$IFn$_invoke$arity$variadic = details__delegate;
return details;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.dfn = (function() { 
var dfn__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__7724_9050 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__7725_9051 = null;var count__7726_9052 = 0;var i__7727_9053 = 0;while(true){
if((i__7727_9053 < count__7726_9052))
{var arg__6508__auto___9054 = cljs.core._nth.call(null,chunk__7725_9051,i__7727_9053);a__6507__auto__.push(arg__6508__auto___9054);
{
var G__9055 = seq__7724_9050;
var G__9056 = chunk__7725_9051;
var G__9057 = count__7726_9052;
var G__9058 = (i__7727_9053 + 1);
seq__7724_9050 = G__9055;
chunk__7725_9051 = G__9056;
count__7726_9052 = G__9057;
i__7727_9053 = G__9058;
continue;
}
} else
{var temp__4092__auto___9059 = cljs.core.seq.call(null,seq__7724_9050);if(temp__4092__auto___9059)
{var seq__7724_9060__$1 = temp__4092__auto___9059;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7724_9060__$1))
{var c__5632__auto___9061 = cljs.core.chunk_first.call(null,seq__7724_9060__$1);{
var G__9062 = cljs.core.chunk_rest.call(null,seq__7724_9060__$1);
var G__9063 = c__5632__auto___9061;
var G__9064 = cljs.core.count.call(null,c__5632__auto___9061);
var G__9065 = 0;
seq__7724_9050 = G__9062;
chunk__7725_9051 = G__9063;
count__7726_9052 = G__9064;
i__7727_9053 = G__9065;
continue;
}
} else
{var arg__6508__auto___9066 = cljs.core.first.call(null,seq__7724_9060__$1);a__6507__auto__.push(arg__6508__auto___9066);
{
var G__9067 = cljs.core.next.call(null,seq__7724_9060__$1);
var G__9068 = null;
var G__9069 = 0;
var G__9070 = 0;
seq__7724_9050 = G__9067;
chunk__7725_9051 = G__9068;
count__7726_9052 = G__9069;
i__7727_9053 = G__9070;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.dfn.apply(null,a__6507__auto__);
};
var dfn = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return dfn__delegate.call(this,args__6506__auto__);};
dfn.cljs$lang$maxFixedArity = 0;
dfn.cljs$lang$applyTo = (function (arglist__9071){
var args__6506__auto__ = cljs.core.seq(arglist__9071);
return dfn__delegate(args__6506__auto__);
});
dfn.cljs$core$IFn$_invoke$arity$variadic = dfn__delegate;
return dfn;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.div = (function() { 
var div__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__7732_9072 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__7733_9073 = null;var count__7734_9074 = 0;var i__7735_9075 = 0;while(true){
if((i__7735_9075 < count__7734_9074))
{var arg__6508__auto___9076 = cljs.core._nth.call(null,chunk__7733_9073,i__7735_9075);a__6507__auto__.push(arg__6508__auto___9076);
{
var G__9077 = seq__7732_9072;
var G__9078 = chunk__7733_9073;
var G__9079 = count__7734_9074;
var G__9080 = (i__7735_9075 + 1);
seq__7732_9072 = G__9077;
chunk__7733_9073 = G__9078;
count__7734_9074 = G__9079;
i__7735_9075 = G__9080;
continue;
}
} else
{var temp__4092__auto___9081 = cljs.core.seq.call(null,seq__7732_9072);if(temp__4092__auto___9081)
{var seq__7732_9082__$1 = temp__4092__auto___9081;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7732_9082__$1))
{var c__5632__auto___9083 = cljs.core.chunk_first.call(null,seq__7732_9082__$1);{
var G__9084 = cljs.core.chunk_rest.call(null,seq__7732_9082__$1);
var G__9085 = c__5632__auto___9083;
var G__9086 = cljs.core.count.call(null,c__5632__auto___9083);
var G__9087 = 0;
seq__7732_9072 = G__9084;
chunk__7733_9073 = G__9085;
count__7734_9074 = G__9086;
i__7735_9075 = G__9087;
continue;
}
} else
{var arg__6508__auto___9088 = cljs.core.first.call(null,seq__7732_9082__$1);a__6507__auto__.push(arg__6508__auto___9088);
{
var G__9089 = cljs.core.next.call(null,seq__7732_9082__$1);
var G__9090 = null;
var G__9091 = 0;
var G__9092 = 0;
seq__7732_9072 = G__9089;
chunk__7733_9073 = G__9090;
count__7734_9074 = G__9091;
i__7735_9075 = G__9092;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.div.apply(null,a__6507__auto__);
};
var div = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return div__delegate.call(this,args__6506__auto__);};
div.cljs$lang$maxFixedArity = 0;
div.cljs$lang$applyTo = (function (arglist__9093){
var args__6506__auto__ = cljs.core.seq(arglist__9093);
return div__delegate(args__6506__auto__);
});
div.cljs$core$IFn$_invoke$arity$variadic = div__delegate;
return div;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.dl = (function() { 
var dl__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__7740_9094 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__7741_9095 = null;var count__7742_9096 = 0;var i__7743_9097 = 0;while(true){
if((i__7743_9097 < count__7742_9096))
{var arg__6508__auto___9098 = cljs.core._nth.call(null,chunk__7741_9095,i__7743_9097);a__6507__auto__.push(arg__6508__auto___9098);
{
var G__9099 = seq__7740_9094;
var G__9100 = chunk__7741_9095;
var G__9101 = count__7742_9096;
var G__9102 = (i__7743_9097 + 1);
seq__7740_9094 = G__9099;
chunk__7741_9095 = G__9100;
count__7742_9096 = G__9101;
i__7743_9097 = G__9102;
continue;
}
} else
{var temp__4092__auto___9103 = cljs.core.seq.call(null,seq__7740_9094);if(temp__4092__auto___9103)
{var seq__7740_9104__$1 = temp__4092__auto___9103;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7740_9104__$1))
{var c__5632__auto___9105 = cljs.core.chunk_first.call(null,seq__7740_9104__$1);{
var G__9106 = cljs.core.chunk_rest.call(null,seq__7740_9104__$1);
var G__9107 = c__5632__auto___9105;
var G__9108 = cljs.core.count.call(null,c__5632__auto___9105);
var G__9109 = 0;
seq__7740_9094 = G__9106;
chunk__7741_9095 = G__9107;
count__7742_9096 = G__9108;
i__7743_9097 = G__9109;
continue;
}
} else
{var arg__6508__auto___9110 = cljs.core.first.call(null,seq__7740_9104__$1);a__6507__auto__.push(arg__6508__auto___9110);
{
var G__9111 = cljs.core.next.call(null,seq__7740_9104__$1);
var G__9112 = null;
var G__9113 = 0;
var G__9114 = 0;
seq__7740_9094 = G__9111;
chunk__7741_9095 = G__9112;
count__7742_9096 = G__9113;
i__7743_9097 = G__9114;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.dl.apply(null,a__6507__auto__);
};
var dl = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return dl__delegate.call(this,args__6506__auto__);};
dl.cljs$lang$maxFixedArity = 0;
dl.cljs$lang$applyTo = (function (arglist__9115){
var args__6506__auto__ = cljs.core.seq(arglist__9115);
return dl__delegate(args__6506__auto__);
});
dl.cljs$core$IFn$_invoke$arity$variadic = dl__delegate;
return dl;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.dt = (function() { 
var dt__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__7748_9116 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__7749_9117 = null;var count__7750_9118 = 0;var i__7751_9119 = 0;while(true){
if((i__7751_9119 < count__7750_9118))
{var arg__6508__auto___9120 = cljs.core._nth.call(null,chunk__7749_9117,i__7751_9119);a__6507__auto__.push(arg__6508__auto___9120);
{
var G__9121 = seq__7748_9116;
var G__9122 = chunk__7749_9117;
var G__9123 = count__7750_9118;
var G__9124 = (i__7751_9119 + 1);
seq__7748_9116 = G__9121;
chunk__7749_9117 = G__9122;
count__7750_9118 = G__9123;
i__7751_9119 = G__9124;
continue;
}
} else
{var temp__4092__auto___9125 = cljs.core.seq.call(null,seq__7748_9116);if(temp__4092__auto___9125)
{var seq__7748_9126__$1 = temp__4092__auto___9125;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7748_9126__$1))
{var c__5632__auto___9127 = cljs.core.chunk_first.call(null,seq__7748_9126__$1);{
var G__9128 = cljs.core.chunk_rest.call(null,seq__7748_9126__$1);
var G__9129 = c__5632__auto___9127;
var G__9130 = cljs.core.count.call(null,c__5632__auto___9127);
var G__9131 = 0;
seq__7748_9116 = G__9128;
chunk__7749_9117 = G__9129;
count__7750_9118 = G__9130;
i__7751_9119 = G__9131;
continue;
}
} else
{var arg__6508__auto___9132 = cljs.core.first.call(null,seq__7748_9126__$1);a__6507__auto__.push(arg__6508__auto___9132);
{
var G__9133 = cljs.core.next.call(null,seq__7748_9126__$1);
var G__9134 = null;
var G__9135 = 0;
var G__9136 = 0;
seq__7748_9116 = G__9133;
chunk__7749_9117 = G__9134;
count__7750_9118 = G__9135;
i__7751_9119 = G__9136;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.dt.apply(null,a__6507__auto__);
};
var dt = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return dt__delegate.call(this,args__6506__auto__);};
dt.cljs$lang$maxFixedArity = 0;
dt.cljs$lang$applyTo = (function (arglist__9137){
var args__6506__auto__ = cljs.core.seq(arglist__9137);
return dt__delegate(args__6506__auto__);
});
dt.cljs$core$IFn$_invoke$arity$variadic = dt__delegate;
return dt;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.em = (function() { 
var em__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__7756_9138 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__7757_9139 = null;var count__7758_9140 = 0;var i__7759_9141 = 0;while(true){
if((i__7759_9141 < count__7758_9140))
{var arg__6508__auto___9142 = cljs.core._nth.call(null,chunk__7757_9139,i__7759_9141);a__6507__auto__.push(arg__6508__auto___9142);
{
var G__9143 = seq__7756_9138;
var G__9144 = chunk__7757_9139;
var G__9145 = count__7758_9140;
var G__9146 = (i__7759_9141 + 1);
seq__7756_9138 = G__9143;
chunk__7757_9139 = G__9144;
count__7758_9140 = G__9145;
i__7759_9141 = G__9146;
continue;
}
} else
{var temp__4092__auto___9147 = cljs.core.seq.call(null,seq__7756_9138);if(temp__4092__auto___9147)
{var seq__7756_9148__$1 = temp__4092__auto___9147;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7756_9148__$1))
{var c__5632__auto___9149 = cljs.core.chunk_first.call(null,seq__7756_9148__$1);{
var G__9150 = cljs.core.chunk_rest.call(null,seq__7756_9148__$1);
var G__9151 = c__5632__auto___9149;
var G__9152 = cljs.core.count.call(null,c__5632__auto___9149);
var G__9153 = 0;
seq__7756_9138 = G__9150;
chunk__7757_9139 = G__9151;
count__7758_9140 = G__9152;
i__7759_9141 = G__9153;
continue;
}
} else
{var arg__6508__auto___9154 = cljs.core.first.call(null,seq__7756_9148__$1);a__6507__auto__.push(arg__6508__auto___9154);
{
var G__9155 = cljs.core.next.call(null,seq__7756_9148__$1);
var G__9156 = null;
var G__9157 = 0;
var G__9158 = 0;
seq__7756_9138 = G__9155;
chunk__7757_9139 = G__9156;
count__7758_9140 = G__9157;
i__7759_9141 = G__9158;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.em.apply(null,a__6507__auto__);
};
var em = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return em__delegate.call(this,args__6506__auto__);};
em.cljs$lang$maxFixedArity = 0;
em.cljs$lang$applyTo = (function (arglist__9159){
var args__6506__auto__ = cljs.core.seq(arglist__9159);
return em__delegate(args__6506__auto__);
});
em.cljs$core$IFn$_invoke$arity$variadic = em__delegate;
return em;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.embed = (function() { 
var embed__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__7772_9160 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__7773_9161 = null;var count__7774_9162 = 0;var i__7775_9163 = 0;while(true){
if((i__7775_9163 < count__7774_9162))
{var arg__6508__auto___9164 = cljs.core._nth.call(null,chunk__7773_9161,i__7775_9163);a__6507__auto__.push(arg__6508__auto___9164);
{
var G__9165 = seq__7772_9160;
var G__9166 = chunk__7773_9161;
var G__9167 = count__7774_9162;
var G__9168 = (i__7775_9163 + 1);
seq__7772_9160 = G__9165;
chunk__7773_9161 = G__9166;
count__7774_9162 = G__9167;
i__7775_9163 = G__9168;
continue;
}
} else
{var temp__4092__auto___9169 = cljs.core.seq.call(null,seq__7772_9160);if(temp__4092__auto___9169)
{var seq__7772_9170__$1 = temp__4092__auto___9169;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7772_9170__$1))
{var c__5632__auto___9171 = cljs.core.chunk_first.call(null,seq__7772_9170__$1);{
var G__9172 = cljs.core.chunk_rest.call(null,seq__7772_9170__$1);
var G__9173 = c__5632__auto___9171;
var G__9174 = cljs.core.count.call(null,c__5632__auto___9171);
var G__9175 = 0;
seq__7772_9160 = G__9172;
chunk__7773_9161 = G__9173;
count__7774_9162 = G__9174;
i__7775_9163 = G__9175;
continue;
}
} else
{var arg__6508__auto___9176 = cljs.core.first.call(null,seq__7772_9170__$1);a__6507__auto__.push(arg__6508__auto___9176);
{
var G__9177 = cljs.core.next.call(null,seq__7772_9170__$1);
var G__9178 = null;
var G__9179 = 0;
var G__9180 = 0;
seq__7772_9160 = G__9177;
chunk__7773_9161 = G__9178;
count__7774_9162 = G__9179;
i__7775_9163 = G__9180;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.embed.apply(null,a__6507__auto__);
};
var embed = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return embed__delegate.call(this,args__6506__auto__);};
embed.cljs$lang$maxFixedArity = 0;
embed.cljs$lang$applyTo = (function (arglist__9181){
var args__6506__auto__ = cljs.core.seq(arglist__9181);
return embed__delegate(args__6506__auto__);
});
embed.cljs$core$IFn$_invoke$arity$variadic = embed__delegate;
return embed;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.fieldset = (function() { 
var fieldset__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__7780_9182 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__7781_9183 = null;var count__7782_9184 = 0;var i__7783_9185 = 0;while(true){
if((i__7783_9185 < count__7782_9184))
{var arg__6508__auto___9186 = cljs.core._nth.call(null,chunk__7781_9183,i__7783_9185);a__6507__auto__.push(arg__6508__auto___9186);
{
var G__9187 = seq__7780_9182;
var G__9188 = chunk__7781_9183;
var G__9189 = count__7782_9184;
var G__9190 = (i__7783_9185 + 1);
seq__7780_9182 = G__9187;
chunk__7781_9183 = G__9188;
count__7782_9184 = G__9189;
i__7783_9185 = G__9190;
continue;
}
} else
{var temp__4092__auto___9191 = cljs.core.seq.call(null,seq__7780_9182);if(temp__4092__auto___9191)
{var seq__7780_9192__$1 = temp__4092__auto___9191;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7780_9192__$1))
{var c__5632__auto___9193 = cljs.core.chunk_first.call(null,seq__7780_9192__$1);{
var G__9194 = cljs.core.chunk_rest.call(null,seq__7780_9192__$1);
var G__9195 = c__5632__auto___9193;
var G__9196 = cljs.core.count.call(null,c__5632__auto___9193);
var G__9197 = 0;
seq__7780_9182 = G__9194;
chunk__7781_9183 = G__9195;
count__7782_9184 = G__9196;
i__7783_9185 = G__9197;
continue;
}
} else
{var arg__6508__auto___9198 = cljs.core.first.call(null,seq__7780_9192__$1);a__6507__auto__.push(arg__6508__auto___9198);
{
var G__9199 = cljs.core.next.call(null,seq__7780_9192__$1);
var G__9200 = null;
var G__9201 = 0;
var G__9202 = 0;
seq__7780_9182 = G__9199;
chunk__7781_9183 = G__9200;
count__7782_9184 = G__9201;
i__7783_9185 = G__9202;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.fieldset.apply(null,a__6507__auto__);
};
var fieldset = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return fieldset__delegate.call(this,args__6506__auto__);};
fieldset.cljs$lang$maxFixedArity = 0;
fieldset.cljs$lang$applyTo = (function (arglist__9203){
var args__6506__auto__ = cljs.core.seq(arglist__9203);
return fieldset__delegate(args__6506__auto__);
});
fieldset.cljs$core$IFn$_invoke$arity$variadic = fieldset__delegate;
return fieldset;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.figcaption = (function() { 
var figcaption__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__7788_9204 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__7789_9205 = null;var count__7790_9206 = 0;var i__7791_9207 = 0;while(true){
if((i__7791_9207 < count__7790_9206))
{var arg__6508__auto___9208 = cljs.core._nth.call(null,chunk__7789_9205,i__7791_9207);a__6507__auto__.push(arg__6508__auto___9208);
{
var G__9209 = seq__7788_9204;
var G__9210 = chunk__7789_9205;
var G__9211 = count__7790_9206;
var G__9212 = (i__7791_9207 + 1);
seq__7788_9204 = G__9209;
chunk__7789_9205 = G__9210;
count__7790_9206 = G__9211;
i__7791_9207 = G__9212;
continue;
}
} else
{var temp__4092__auto___9213 = cljs.core.seq.call(null,seq__7788_9204);if(temp__4092__auto___9213)
{var seq__7788_9214__$1 = temp__4092__auto___9213;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7788_9214__$1))
{var c__5632__auto___9215 = cljs.core.chunk_first.call(null,seq__7788_9214__$1);{
var G__9216 = cljs.core.chunk_rest.call(null,seq__7788_9214__$1);
var G__9217 = c__5632__auto___9215;
var G__9218 = cljs.core.count.call(null,c__5632__auto___9215);
var G__9219 = 0;
seq__7788_9204 = G__9216;
chunk__7789_9205 = G__9217;
count__7790_9206 = G__9218;
i__7791_9207 = G__9219;
continue;
}
} else
{var arg__6508__auto___9220 = cljs.core.first.call(null,seq__7788_9214__$1);a__6507__auto__.push(arg__6508__auto___9220);
{
var G__9221 = cljs.core.next.call(null,seq__7788_9214__$1);
var G__9222 = null;
var G__9223 = 0;
var G__9224 = 0;
seq__7788_9204 = G__9221;
chunk__7789_9205 = G__9222;
count__7790_9206 = G__9223;
i__7791_9207 = G__9224;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.figcaption.apply(null,a__6507__auto__);
};
var figcaption = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return figcaption__delegate.call(this,args__6506__auto__);};
figcaption.cljs$lang$maxFixedArity = 0;
figcaption.cljs$lang$applyTo = (function (arglist__9225){
var args__6506__auto__ = cljs.core.seq(arglist__9225);
return figcaption__delegate(args__6506__auto__);
});
figcaption.cljs$core$IFn$_invoke$arity$variadic = figcaption__delegate;
return figcaption;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.figure = (function() { 
var figure__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__7796_9226 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__7797_9227 = null;var count__7798_9228 = 0;var i__7799_9229 = 0;while(true){
if((i__7799_9229 < count__7798_9228))
{var arg__6508__auto___9230 = cljs.core._nth.call(null,chunk__7797_9227,i__7799_9229);a__6507__auto__.push(arg__6508__auto___9230);
{
var G__9231 = seq__7796_9226;
var G__9232 = chunk__7797_9227;
var G__9233 = count__7798_9228;
var G__9234 = (i__7799_9229 + 1);
seq__7796_9226 = G__9231;
chunk__7797_9227 = G__9232;
count__7798_9228 = G__9233;
i__7799_9229 = G__9234;
continue;
}
} else
{var temp__4092__auto___9235 = cljs.core.seq.call(null,seq__7796_9226);if(temp__4092__auto___9235)
{var seq__7796_9236__$1 = temp__4092__auto___9235;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7796_9236__$1))
{var c__5632__auto___9237 = cljs.core.chunk_first.call(null,seq__7796_9236__$1);{
var G__9238 = cljs.core.chunk_rest.call(null,seq__7796_9236__$1);
var G__9239 = c__5632__auto___9237;
var G__9240 = cljs.core.count.call(null,c__5632__auto___9237);
var G__9241 = 0;
seq__7796_9226 = G__9238;
chunk__7797_9227 = G__9239;
count__7798_9228 = G__9240;
i__7799_9229 = G__9241;
continue;
}
} else
{var arg__6508__auto___9242 = cljs.core.first.call(null,seq__7796_9236__$1);a__6507__auto__.push(arg__6508__auto___9242);
{
var G__9243 = cljs.core.next.call(null,seq__7796_9236__$1);
var G__9244 = null;
var G__9245 = 0;
var G__9246 = 0;
seq__7796_9226 = G__9243;
chunk__7797_9227 = G__9244;
count__7798_9228 = G__9245;
i__7799_9229 = G__9246;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.figure.apply(null,a__6507__auto__);
};
var figure = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return figure__delegate.call(this,args__6506__auto__);};
figure.cljs$lang$maxFixedArity = 0;
figure.cljs$lang$applyTo = (function (arglist__9247){
var args__6506__auto__ = cljs.core.seq(arglist__9247);
return figure__delegate(args__6506__auto__);
});
figure.cljs$core$IFn$_invoke$arity$variadic = figure__delegate;
return figure;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.footer = (function() { 
var footer__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__7804_9248 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__7805_9249 = null;var count__7806_9250 = 0;var i__7807_9251 = 0;while(true){
if((i__7807_9251 < count__7806_9250))
{var arg__6508__auto___9252 = cljs.core._nth.call(null,chunk__7805_9249,i__7807_9251);a__6507__auto__.push(arg__6508__auto___9252);
{
var G__9253 = seq__7804_9248;
var G__9254 = chunk__7805_9249;
var G__9255 = count__7806_9250;
var G__9256 = (i__7807_9251 + 1);
seq__7804_9248 = G__9253;
chunk__7805_9249 = G__9254;
count__7806_9250 = G__9255;
i__7807_9251 = G__9256;
continue;
}
} else
{var temp__4092__auto___9257 = cljs.core.seq.call(null,seq__7804_9248);if(temp__4092__auto___9257)
{var seq__7804_9258__$1 = temp__4092__auto___9257;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7804_9258__$1))
{var c__5632__auto___9259 = cljs.core.chunk_first.call(null,seq__7804_9258__$1);{
var G__9260 = cljs.core.chunk_rest.call(null,seq__7804_9258__$1);
var G__9261 = c__5632__auto___9259;
var G__9262 = cljs.core.count.call(null,c__5632__auto___9259);
var G__9263 = 0;
seq__7804_9248 = G__9260;
chunk__7805_9249 = G__9261;
count__7806_9250 = G__9262;
i__7807_9251 = G__9263;
continue;
}
} else
{var arg__6508__auto___9264 = cljs.core.first.call(null,seq__7804_9258__$1);a__6507__auto__.push(arg__6508__auto___9264);
{
var G__9265 = cljs.core.next.call(null,seq__7804_9258__$1);
var G__9266 = null;
var G__9267 = 0;
var G__9268 = 0;
seq__7804_9248 = G__9265;
chunk__7805_9249 = G__9266;
count__7806_9250 = G__9267;
i__7807_9251 = G__9268;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.footer.apply(null,a__6507__auto__);
};
var footer = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return footer__delegate.call(this,args__6506__auto__);};
footer.cljs$lang$maxFixedArity = 0;
footer.cljs$lang$applyTo = (function (arglist__9269){
var args__6506__auto__ = cljs.core.seq(arglist__9269);
return footer__delegate(args__6506__auto__);
});
footer.cljs$core$IFn$_invoke$arity$variadic = footer__delegate;
return footer;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.form = (function() { 
var form__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__7812_9270 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__7813_9271 = null;var count__7814_9272 = 0;var i__7815_9273 = 0;while(true){
if((i__7815_9273 < count__7814_9272))
{var arg__6508__auto___9274 = cljs.core._nth.call(null,chunk__7813_9271,i__7815_9273);a__6507__auto__.push(arg__6508__auto___9274);
{
var G__9275 = seq__7812_9270;
var G__9276 = chunk__7813_9271;
var G__9277 = count__7814_9272;
var G__9278 = (i__7815_9273 + 1);
seq__7812_9270 = G__9275;
chunk__7813_9271 = G__9276;
count__7814_9272 = G__9277;
i__7815_9273 = G__9278;
continue;
}
} else
{var temp__4092__auto___9279 = cljs.core.seq.call(null,seq__7812_9270);if(temp__4092__auto___9279)
{var seq__7812_9280__$1 = temp__4092__auto___9279;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7812_9280__$1))
{var c__5632__auto___9281 = cljs.core.chunk_first.call(null,seq__7812_9280__$1);{
var G__9282 = cljs.core.chunk_rest.call(null,seq__7812_9280__$1);
var G__9283 = c__5632__auto___9281;
var G__9284 = cljs.core.count.call(null,c__5632__auto___9281);
var G__9285 = 0;
seq__7812_9270 = G__9282;
chunk__7813_9271 = G__9283;
count__7814_9272 = G__9284;
i__7815_9273 = G__9285;
continue;
}
} else
{var arg__6508__auto___9286 = cljs.core.first.call(null,seq__7812_9280__$1);a__6507__auto__.push(arg__6508__auto___9286);
{
var G__9287 = cljs.core.next.call(null,seq__7812_9280__$1);
var G__9288 = null;
var G__9289 = 0;
var G__9290 = 0;
seq__7812_9270 = G__9287;
chunk__7813_9271 = G__9288;
count__7814_9272 = G__9289;
i__7815_9273 = G__9290;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.form.apply(null,a__6507__auto__);
};
var form = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return form__delegate.call(this,args__6506__auto__);};
form.cljs$lang$maxFixedArity = 0;
form.cljs$lang$applyTo = (function (arglist__9291){
var args__6506__auto__ = cljs.core.seq(arglist__9291);
return form__delegate(args__6506__auto__);
});
form.cljs$core$IFn$_invoke$arity$variadic = form__delegate;
return form;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h1 = (function() { 
var h1__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__7820_9292 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__7821_9293 = null;var count__7822_9294 = 0;var i__7823_9295 = 0;while(true){
if((i__7823_9295 < count__7822_9294))
{var arg__6508__auto___9296 = cljs.core._nth.call(null,chunk__7821_9293,i__7823_9295);a__6507__auto__.push(arg__6508__auto___9296);
{
var G__9297 = seq__7820_9292;
var G__9298 = chunk__7821_9293;
var G__9299 = count__7822_9294;
var G__9300 = (i__7823_9295 + 1);
seq__7820_9292 = G__9297;
chunk__7821_9293 = G__9298;
count__7822_9294 = G__9299;
i__7823_9295 = G__9300;
continue;
}
} else
{var temp__4092__auto___9301 = cljs.core.seq.call(null,seq__7820_9292);if(temp__4092__auto___9301)
{var seq__7820_9302__$1 = temp__4092__auto___9301;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7820_9302__$1))
{var c__5632__auto___9303 = cljs.core.chunk_first.call(null,seq__7820_9302__$1);{
var G__9304 = cljs.core.chunk_rest.call(null,seq__7820_9302__$1);
var G__9305 = c__5632__auto___9303;
var G__9306 = cljs.core.count.call(null,c__5632__auto___9303);
var G__9307 = 0;
seq__7820_9292 = G__9304;
chunk__7821_9293 = G__9305;
count__7822_9294 = G__9306;
i__7823_9295 = G__9307;
continue;
}
} else
{var arg__6508__auto___9308 = cljs.core.first.call(null,seq__7820_9302__$1);a__6507__auto__.push(arg__6508__auto___9308);
{
var G__9309 = cljs.core.next.call(null,seq__7820_9302__$1);
var G__9310 = null;
var G__9311 = 0;
var G__9312 = 0;
seq__7820_9292 = G__9309;
chunk__7821_9293 = G__9310;
count__7822_9294 = G__9311;
i__7823_9295 = G__9312;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h1.apply(null,a__6507__auto__);
};
var h1 = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h1__delegate.call(this,args__6506__auto__);};
h1.cljs$lang$maxFixedArity = 0;
h1.cljs$lang$applyTo = (function (arglist__9313){
var args__6506__auto__ = cljs.core.seq(arglist__9313);
return h1__delegate(args__6506__auto__);
});
h1.cljs$core$IFn$_invoke$arity$variadic = h1__delegate;
return h1;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h2 = (function() { 
var h2__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__7828_9314 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__7829_9315 = null;var count__7830_9316 = 0;var i__7831_9317 = 0;while(true){
if((i__7831_9317 < count__7830_9316))
{var arg__6508__auto___9318 = cljs.core._nth.call(null,chunk__7829_9315,i__7831_9317);a__6507__auto__.push(arg__6508__auto___9318);
{
var G__9319 = seq__7828_9314;
var G__9320 = chunk__7829_9315;
var G__9321 = count__7830_9316;
var G__9322 = (i__7831_9317 + 1);
seq__7828_9314 = G__9319;
chunk__7829_9315 = G__9320;
count__7830_9316 = G__9321;
i__7831_9317 = G__9322;
continue;
}
} else
{var temp__4092__auto___9323 = cljs.core.seq.call(null,seq__7828_9314);if(temp__4092__auto___9323)
{var seq__7828_9324__$1 = temp__4092__auto___9323;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7828_9324__$1))
{var c__5632__auto___9325 = cljs.core.chunk_first.call(null,seq__7828_9324__$1);{
var G__9326 = cljs.core.chunk_rest.call(null,seq__7828_9324__$1);
var G__9327 = c__5632__auto___9325;
var G__9328 = cljs.core.count.call(null,c__5632__auto___9325);
var G__9329 = 0;
seq__7828_9314 = G__9326;
chunk__7829_9315 = G__9327;
count__7830_9316 = G__9328;
i__7831_9317 = G__9329;
continue;
}
} else
{var arg__6508__auto___9330 = cljs.core.first.call(null,seq__7828_9324__$1);a__6507__auto__.push(arg__6508__auto___9330);
{
var G__9331 = cljs.core.next.call(null,seq__7828_9324__$1);
var G__9332 = null;
var G__9333 = 0;
var G__9334 = 0;
seq__7828_9314 = G__9331;
chunk__7829_9315 = G__9332;
count__7830_9316 = G__9333;
i__7831_9317 = G__9334;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h2.apply(null,a__6507__auto__);
};
var h2 = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h2__delegate.call(this,args__6506__auto__);};
h2.cljs$lang$maxFixedArity = 0;
h2.cljs$lang$applyTo = (function (arglist__9335){
var args__6506__auto__ = cljs.core.seq(arglist__9335);
return h2__delegate(args__6506__auto__);
});
h2.cljs$core$IFn$_invoke$arity$variadic = h2__delegate;
return h2;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h3 = (function() { 
var h3__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__7836_9336 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__7837_9337 = null;var count__7838_9338 = 0;var i__7839_9339 = 0;while(true){
if((i__7839_9339 < count__7838_9338))
{var arg__6508__auto___9340 = cljs.core._nth.call(null,chunk__7837_9337,i__7839_9339);a__6507__auto__.push(arg__6508__auto___9340);
{
var G__9341 = seq__7836_9336;
var G__9342 = chunk__7837_9337;
var G__9343 = count__7838_9338;
var G__9344 = (i__7839_9339 + 1);
seq__7836_9336 = G__9341;
chunk__7837_9337 = G__9342;
count__7838_9338 = G__9343;
i__7839_9339 = G__9344;
continue;
}
} else
{var temp__4092__auto___9345 = cljs.core.seq.call(null,seq__7836_9336);if(temp__4092__auto___9345)
{var seq__7836_9346__$1 = temp__4092__auto___9345;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7836_9346__$1))
{var c__5632__auto___9347 = cljs.core.chunk_first.call(null,seq__7836_9346__$1);{
var G__9348 = cljs.core.chunk_rest.call(null,seq__7836_9346__$1);
var G__9349 = c__5632__auto___9347;
var G__9350 = cljs.core.count.call(null,c__5632__auto___9347);
var G__9351 = 0;
seq__7836_9336 = G__9348;
chunk__7837_9337 = G__9349;
count__7838_9338 = G__9350;
i__7839_9339 = G__9351;
continue;
}
} else
{var arg__6508__auto___9352 = cljs.core.first.call(null,seq__7836_9346__$1);a__6507__auto__.push(arg__6508__auto___9352);
{
var G__9353 = cljs.core.next.call(null,seq__7836_9346__$1);
var G__9354 = null;
var G__9355 = 0;
var G__9356 = 0;
seq__7836_9336 = G__9353;
chunk__7837_9337 = G__9354;
count__7838_9338 = G__9355;
i__7839_9339 = G__9356;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h3.apply(null,a__6507__auto__);
};
var h3 = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h3__delegate.call(this,args__6506__auto__);};
h3.cljs$lang$maxFixedArity = 0;
h3.cljs$lang$applyTo = (function (arglist__9357){
var args__6506__auto__ = cljs.core.seq(arglist__9357);
return h3__delegate(args__6506__auto__);
});
h3.cljs$core$IFn$_invoke$arity$variadic = h3__delegate;
return h3;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h4 = (function() { 
var h4__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__7844_9358 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__7845_9359 = null;var count__7846_9360 = 0;var i__7847_9361 = 0;while(true){
if((i__7847_9361 < count__7846_9360))
{var arg__6508__auto___9362 = cljs.core._nth.call(null,chunk__7845_9359,i__7847_9361);a__6507__auto__.push(arg__6508__auto___9362);
{
var G__9363 = seq__7844_9358;
var G__9364 = chunk__7845_9359;
var G__9365 = count__7846_9360;
var G__9366 = (i__7847_9361 + 1);
seq__7844_9358 = G__9363;
chunk__7845_9359 = G__9364;
count__7846_9360 = G__9365;
i__7847_9361 = G__9366;
continue;
}
} else
{var temp__4092__auto___9367 = cljs.core.seq.call(null,seq__7844_9358);if(temp__4092__auto___9367)
{var seq__7844_9368__$1 = temp__4092__auto___9367;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7844_9368__$1))
{var c__5632__auto___9369 = cljs.core.chunk_first.call(null,seq__7844_9368__$1);{
var G__9370 = cljs.core.chunk_rest.call(null,seq__7844_9368__$1);
var G__9371 = c__5632__auto___9369;
var G__9372 = cljs.core.count.call(null,c__5632__auto___9369);
var G__9373 = 0;
seq__7844_9358 = G__9370;
chunk__7845_9359 = G__9371;
count__7846_9360 = G__9372;
i__7847_9361 = G__9373;
continue;
}
} else
{var arg__6508__auto___9374 = cljs.core.first.call(null,seq__7844_9368__$1);a__6507__auto__.push(arg__6508__auto___9374);
{
var G__9375 = cljs.core.next.call(null,seq__7844_9368__$1);
var G__9376 = null;
var G__9377 = 0;
var G__9378 = 0;
seq__7844_9358 = G__9375;
chunk__7845_9359 = G__9376;
count__7846_9360 = G__9377;
i__7847_9361 = G__9378;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h4.apply(null,a__6507__auto__);
};
var h4 = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h4__delegate.call(this,args__6506__auto__);};
h4.cljs$lang$maxFixedArity = 0;
h4.cljs$lang$applyTo = (function (arglist__9379){
var args__6506__auto__ = cljs.core.seq(arglist__9379);
return h4__delegate(args__6506__auto__);
});
h4.cljs$core$IFn$_invoke$arity$variadic = h4__delegate;
return h4;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h5 = (function() { 
var h5__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__7852_9380 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__7853_9381 = null;var count__7854_9382 = 0;var i__7855_9383 = 0;while(true){
if((i__7855_9383 < count__7854_9382))
{var arg__6508__auto___9384 = cljs.core._nth.call(null,chunk__7853_9381,i__7855_9383);a__6507__auto__.push(arg__6508__auto___9384);
{
var G__9385 = seq__7852_9380;
var G__9386 = chunk__7853_9381;
var G__9387 = count__7854_9382;
var G__9388 = (i__7855_9383 + 1);
seq__7852_9380 = G__9385;
chunk__7853_9381 = G__9386;
count__7854_9382 = G__9387;
i__7855_9383 = G__9388;
continue;
}
} else
{var temp__4092__auto___9389 = cljs.core.seq.call(null,seq__7852_9380);if(temp__4092__auto___9389)
{var seq__7852_9390__$1 = temp__4092__auto___9389;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7852_9390__$1))
{var c__5632__auto___9391 = cljs.core.chunk_first.call(null,seq__7852_9390__$1);{
var G__9392 = cljs.core.chunk_rest.call(null,seq__7852_9390__$1);
var G__9393 = c__5632__auto___9391;
var G__9394 = cljs.core.count.call(null,c__5632__auto___9391);
var G__9395 = 0;
seq__7852_9380 = G__9392;
chunk__7853_9381 = G__9393;
count__7854_9382 = G__9394;
i__7855_9383 = G__9395;
continue;
}
} else
{var arg__6508__auto___9396 = cljs.core.first.call(null,seq__7852_9390__$1);a__6507__auto__.push(arg__6508__auto___9396);
{
var G__9397 = cljs.core.next.call(null,seq__7852_9390__$1);
var G__9398 = null;
var G__9399 = 0;
var G__9400 = 0;
seq__7852_9380 = G__9397;
chunk__7853_9381 = G__9398;
count__7854_9382 = G__9399;
i__7855_9383 = G__9400;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h5.apply(null,a__6507__auto__);
};
var h5 = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h5__delegate.call(this,args__6506__auto__);};
h5.cljs$lang$maxFixedArity = 0;
h5.cljs$lang$applyTo = (function (arglist__9401){
var args__6506__auto__ = cljs.core.seq(arglist__9401);
return h5__delegate(args__6506__auto__);
});
h5.cljs$core$IFn$_invoke$arity$variadic = h5__delegate;
return h5;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h6 = (function() { 
var h6__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__7860_9402 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__7861_9403 = null;var count__7862_9404 = 0;var i__7863_9405 = 0;while(true){
if((i__7863_9405 < count__7862_9404))
{var arg__6508__auto___9406 = cljs.core._nth.call(null,chunk__7861_9403,i__7863_9405);a__6507__auto__.push(arg__6508__auto___9406);
{
var G__9407 = seq__7860_9402;
var G__9408 = chunk__7861_9403;
var G__9409 = count__7862_9404;
var G__9410 = (i__7863_9405 + 1);
seq__7860_9402 = G__9407;
chunk__7861_9403 = G__9408;
count__7862_9404 = G__9409;
i__7863_9405 = G__9410;
continue;
}
} else
{var temp__4092__auto___9411 = cljs.core.seq.call(null,seq__7860_9402);if(temp__4092__auto___9411)
{var seq__7860_9412__$1 = temp__4092__auto___9411;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7860_9412__$1))
{var c__5632__auto___9413 = cljs.core.chunk_first.call(null,seq__7860_9412__$1);{
var G__9414 = cljs.core.chunk_rest.call(null,seq__7860_9412__$1);
var G__9415 = c__5632__auto___9413;
var G__9416 = cljs.core.count.call(null,c__5632__auto___9413);
var G__9417 = 0;
seq__7860_9402 = G__9414;
chunk__7861_9403 = G__9415;
count__7862_9404 = G__9416;
i__7863_9405 = G__9417;
continue;
}
} else
{var arg__6508__auto___9418 = cljs.core.first.call(null,seq__7860_9412__$1);a__6507__auto__.push(arg__6508__auto___9418);
{
var G__9419 = cljs.core.next.call(null,seq__7860_9412__$1);
var G__9420 = null;
var G__9421 = 0;
var G__9422 = 0;
seq__7860_9402 = G__9419;
chunk__7861_9403 = G__9420;
count__7862_9404 = G__9421;
i__7863_9405 = G__9422;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h6.apply(null,a__6507__auto__);
};
var h6 = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h6__delegate.call(this,args__6506__auto__);};
h6.cljs$lang$maxFixedArity = 0;
h6.cljs$lang$applyTo = (function (arglist__9423){
var args__6506__auto__ = cljs.core.seq(arglist__9423);
return h6__delegate(args__6506__auto__);
});
h6.cljs$core$IFn$_invoke$arity$variadic = h6__delegate;
return h6;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.head = (function() { 
var head__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__7868_9424 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__7869_9425 = null;var count__7870_9426 = 0;var i__7871_9427 = 0;while(true){
if((i__7871_9427 < count__7870_9426))
{var arg__6508__auto___9428 = cljs.core._nth.call(null,chunk__7869_9425,i__7871_9427);a__6507__auto__.push(arg__6508__auto___9428);
{
var G__9429 = seq__7868_9424;
var G__9430 = chunk__7869_9425;
var G__9431 = count__7870_9426;
var G__9432 = (i__7871_9427 + 1);
seq__7868_9424 = G__9429;
chunk__7869_9425 = G__9430;
count__7870_9426 = G__9431;
i__7871_9427 = G__9432;
continue;
}
} else
{var temp__4092__auto___9433 = cljs.core.seq.call(null,seq__7868_9424);if(temp__4092__auto___9433)
{var seq__7868_9434__$1 = temp__4092__auto___9433;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7868_9434__$1))
{var c__5632__auto___9435 = cljs.core.chunk_first.call(null,seq__7868_9434__$1);{
var G__9436 = cljs.core.chunk_rest.call(null,seq__7868_9434__$1);
var G__9437 = c__5632__auto___9435;
var G__9438 = cljs.core.count.call(null,c__5632__auto___9435);
var G__9439 = 0;
seq__7868_9424 = G__9436;
chunk__7869_9425 = G__9437;
count__7870_9426 = G__9438;
i__7871_9427 = G__9439;
continue;
}
} else
{var arg__6508__auto___9440 = cljs.core.first.call(null,seq__7868_9434__$1);a__6507__auto__.push(arg__6508__auto___9440);
{
var G__9441 = cljs.core.next.call(null,seq__7868_9434__$1);
var G__9442 = null;
var G__9443 = 0;
var G__9444 = 0;
seq__7868_9424 = G__9441;
chunk__7869_9425 = G__9442;
count__7870_9426 = G__9443;
i__7871_9427 = G__9444;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.head.apply(null,a__6507__auto__);
};
var head = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return head__delegate.call(this,args__6506__auto__);};
head.cljs$lang$maxFixedArity = 0;
head.cljs$lang$applyTo = (function (arglist__9445){
var args__6506__auto__ = cljs.core.seq(arglist__9445);
return head__delegate(args__6506__auto__);
});
head.cljs$core$IFn$_invoke$arity$variadic = head__delegate;
return head;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.header = (function() { 
var header__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__7876_9446 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__7877_9447 = null;var count__7878_9448 = 0;var i__7879_9449 = 0;while(true){
if((i__7879_9449 < count__7878_9448))
{var arg__6508__auto___9450 = cljs.core._nth.call(null,chunk__7877_9447,i__7879_9449);a__6507__auto__.push(arg__6508__auto___9450);
{
var G__9451 = seq__7876_9446;
var G__9452 = chunk__7877_9447;
var G__9453 = count__7878_9448;
var G__9454 = (i__7879_9449 + 1);
seq__7876_9446 = G__9451;
chunk__7877_9447 = G__9452;
count__7878_9448 = G__9453;
i__7879_9449 = G__9454;
continue;
}
} else
{var temp__4092__auto___9455 = cljs.core.seq.call(null,seq__7876_9446);if(temp__4092__auto___9455)
{var seq__7876_9456__$1 = temp__4092__auto___9455;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7876_9456__$1))
{var c__5632__auto___9457 = cljs.core.chunk_first.call(null,seq__7876_9456__$1);{
var G__9458 = cljs.core.chunk_rest.call(null,seq__7876_9456__$1);
var G__9459 = c__5632__auto___9457;
var G__9460 = cljs.core.count.call(null,c__5632__auto___9457);
var G__9461 = 0;
seq__7876_9446 = G__9458;
chunk__7877_9447 = G__9459;
count__7878_9448 = G__9460;
i__7879_9449 = G__9461;
continue;
}
} else
{var arg__6508__auto___9462 = cljs.core.first.call(null,seq__7876_9456__$1);a__6507__auto__.push(arg__6508__auto___9462);
{
var G__9463 = cljs.core.next.call(null,seq__7876_9456__$1);
var G__9464 = null;
var G__9465 = 0;
var G__9466 = 0;
seq__7876_9446 = G__9463;
chunk__7877_9447 = G__9464;
count__7878_9448 = G__9465;
i__7879_9449 = G__9466;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.header.apply(null,a__6507__auto__);
};
var header = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return header__delegate.call(this,args__6506__auto__);};
header.cljs$lang$maxFixedArity = 0;
header.cljs$lang$applyTo = (function (arglist__9467){
var args__6506__auto__ = cljs.core.seq(arglist__9467);
return header__delegate(args__6506__auto__);
});
header.cljs$core$IFn$_invoke$arity$variadic = header__delegate;
return header;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.hr = (function() { 
var hr__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__7884_9468 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__7885_9469 = null;var count__7886_9470 = 0;var i__7887_9471 = 0;while(true){
if((i__7887_9471 < count__7886_9470))
{var arg__6508__auto___9472 = cljs.core._nth.call(null,chunk__7885_9469,i__7887_9471);a__6507__auto__.push(arg__6508__auto___9472);
{
var G__9473 = seq__7884_9468;
var G__9474 = chunk__7885_9469;
var G__9475 = count__7886_9470;
var G__9476 = (i__7887_9471 + 1);
seq__7884_9468 = G__9473;
chunk__7885_9469 = G__9474;
count__7886_9470 = G__9475;
i__7887_9471 = G__9476;
continue;
}
} else
{var temp__4092__auto___9477 = cljs.core.seq.call(null,seq__7884_9468);if(temp__4092__auto___9477)
{var seq__7884_9478__$1 = temp__4092__auto___9477;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7884_9478__$1))
{var c__5632__auto___9479 = cljs.core.chunk_first.call(null,seq__7884_9478__$1);{
var G__9480 = cljs.core.chunk_rest.call(null,seq__7884_9478__$1);
var G__9481 = c__5632__auto___9479;
var G__9482 = cljs.core.count.call(null,c__5632__auto___9479);
var G__9483 = 0;
seq__7884_9468 = G__9480;
chunk__7885_9469 = G__9481;
count__7886_9470 = G__9482;
i__7887_9471 = G__9483;
continue;
}
} else
{var arg__6508__auto___9484 = cljs.core.first.call(null,seq__7884_9478__$1);a__6507__auto__.push(arg__6508__auto___9484);
{
var G__9485 = cljs.core.next.call(null,seq__7884_9478__$1);
var G__9486 = null;
var G__9487 = 0;
var G__9488 = 0;
seq__7884_9468 = G__9485;
chunk__7885_9469 = G__9486;
count__7886_9470 = G__9487;
i__7887_9471 = G__9488;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.hr.apply(null,a__6507__auto__);
};
var hr = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return hr__delegate.call(this,args__6506__auto__);};
hr.cljs$lang$maxFixedArity = 0;
hr.cljs$lang$applyTo = (function (arglist__9489){
var args__6506__auto__ = cljs.core.seq(arglist__9489);
return hr__delegate(args__6506__auto__);
});
hr.cljs$core$IFn$_invoke$arity$variadic = hr__delegate;
return hr;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.html = (function() { 
var html__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__7892_9490 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__7893_9491 = null;var count__7894_9492 = 0;var i__7895_9493 = 0;while(true){
if((i__7895_9493 < count__7894_9492))
{var arg__6508__auto___9494 = cljs.core._nth.call(null,chunk__7893_9491,i__7895_9493);a__6507__auto__.push(arg__6508__auto___9494);
{
var G__9495 = seq__7892_9490;
var G__9496 = chunk__7893_9491;
var G__9497 = count__7894_9492;
var G__9498 = (i__7895_9493 + 1);
seq__7892_9490 = G__9495;
chunk__7893_9491 = G__9496;
count__7894_9492 = G__9497;
i__7895_9493 = G__9498;
continue;
}
} else
{var temp__4092__auto___9499 = cljs.core.seq.call(null,seq__7892_9490);if(temp__4092__auto___9499)
{var seq__7892_9500__$1 = temp__4092__auto___9499;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7892_9500__$1))
{var c__5632__auto___9501 = cljs.core.chunk_first.call(null,seq__7892_9500__$1);{
var G__9502 = cljs.core.chunk_rest.call(null,seq__7892_9500__$1);
var G__9503 = c__5632__auto___9501;
var G__9504 = cljs.core.count.call(null,c__5632__auto___9501);
var G__9505 = 0;
seq__7892_9490 = G__9502;
chunk__7893_9491 = G__9503;
count__7894_9492 = G__9504;
i__7895_9493 = G__9505;
continue;
}
} else
{var arg__6508__auto___9506 = cljs.core.first.call(null,seq__7892_9500__$1);a__6507__auto__.push(arg__6508__auto___9506);
{
var G__9507 = cljs.core.next.call(null,seq__7892_9500__$1);
var G__9508 = null;
var G__9509 = 0;
var G__9510 = 0;
seq__7892_9490 = G__9507;
chunk__7893_9491 = G__9508;
count__7894_9492 = G__9509;
i__7895_9493 = G__9510;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.html.apply(null,a__6507__auto__);
};
var html = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return html__delegate.call(this,args__6506__auto__);};
html.cljs$lang$maxFixedArity = 0;
html.cljs$lang$applyTo = (function (arglist__9511){
var args__6506__auto__ = cljs.core.seq(arglist__9511);
return html__delegate(args__6506__auto__);
});
html.cljs$core$IFn$_invoke$arity$variadic = html__delegate;
return html;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.i = (function() { 
var i__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__7900_9512 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__7901_9513 = null;var count__7902_9514 = 0;var i__7903_9515 = 0;while(true){
if((i__7903_9515 < count__7902_9514))
{var arg__6508__auto___9516 = cljs.core._nth.call(null,chunk__7901_9513,i__7903_9515);a__6507__auto__.push(arg__6508__auto___9516);
{
var G__9517 = seq__7900_9512;
var G__9518 = chunk__7901_9513;
var G__9519 = count__7902_9514;
var G__9520 = (i__7903_9515 + 1);
seq__7900_9512 = G__9517;
chunk__7901_9513 = G__9518;
count__7902_9514 = G__9519;
i__7903_9515 = G__9520;
continue;
}
} else
{var temp__4092__auto___9521 = cljs.core.seq.call(null,seq__7900_9512);if(temp__4092__auto___9521)
{var seq__7900_9522__$1 = temp__4092__auto___9521;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7900_9522__$1))
{var c__5632__auto___9523 = cljs.core.chunk_first.call(null,seq__7900_9522__$1);{
var G__9524 = cljs.core.chunk_rest.call(null,seq__7900_9522__$1);
var G__9525 = c__5632__auto___9523;
var G__9526 = cljs.core.count.call(null,c__5632__auto___9523);
var G__9527 = 0;
seq__7900_9512 = G__9524;
chunk__7901_9513 = G__9525;
count__7902_9514 = G__9526;
i__7903_9515 = G__9527;
continue;
}
} else
{var arg__6508__auto___9528 = cljs.core.first.call(null,seq__7900_9522__$1);a__6507__auto__.push(arg__6508__auto___9528);
{
var G__9529 = cljs.core.next.call(null,seq__7900_9522__$1);
var G__9530 = null;
var G__9531 = 0;
var G__9532 = 0;
seq__7900_9512 = G__9529;
chunk__7901_9513 = G__9530;
count__7902_9514 = G__9531;
i__7903_9515 = G__9532;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.i.apply(null,a__6507__auto__);
};
var i = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return i__delegate.call(this,args__6506__auto__);};
i.cljs$lang$maxFixedArity = 0;
i.cljs$lang$applyTo = (function (arglist__9533){
var args__6506__auto__ = cljs.core.seq(arglist__9533);
return i__delegate(args__6506__auto__);
});
i.cljs$core$IFn$_invoke$arity$variadic = i__delegate;
return i;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.iframe = (function() { 
var iframe__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__7908_9534 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__7909_9535 = null;var count__7910_9536 = 0;var i__7911_9537 = 0;while(true){
if((i__7911_9537 < count__7910_9536))
{var arg__6508__auto___9538 = cljs.core._nth.call(null,chunk__7909_9535,i__7911_9537);a__6507__auto__.push(arg__6508__auto___9538);
{
var G__9539 = seq__7908_9534;
var G__9540 = chunk__7909_9535;
var G__9541 = count__7910_9536;
var G__9542 = (i__7911_9537 + 1);
seq__7908_9534 = G__9539;
chunk__7909_9535 = G__9540;
count__7910_9536 = G__9541;
i__7911_9537 = G__9542;
continue;
}
} else
{var temp__4092__auto___9543 = cljs.core.seq.call(null,seq__7908_9534);if(temp__4092__auto___9543)
{var seq__7908_9544__$1 = temp__4092__auto___9543;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7908_9544__$1))
{var c__5632__auto___9545 = cljs.core.chunk_first.call(null,seq__7908_9544__$1);{
var G__9546 = cljs.core.chunk_rest.call(null,seq__7908_9544__$1);
var G__9547 = c__5632__auto___9545;
var G__9548 = cljs.core.count.call(null,c__5632__auto___9545);
var G__9549 = 0;
seq__7908_9534 = G__9546;
chunk__7909_9535 = G__9547;
count__7910_9536 = G__9548;
i__7911_9537 = G__9549;
continue;
}
} else
{var arg__6508__auto___9550 = cljs.core.first.call(null,seq__7908_9544__$1);a__6507__auto__.push(arg__6508__auto___9550);
{
var G__9551 = cljs.core.next.call(null,seq__7908_9544__$1);
var G__9552 = null;
var G__9553 = 0;
var G__9554 = 0;
seq__7908_9534 = G__9551;
chunk__7909_9535 = G__9552;
count__7910_9536 = G__9553;
i__7911_9537 = G__9554;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.iframe.apply(null,a__6507__auto__);
};
var iframe = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return iframe__delegate.call(this,args__6506__auto__);};
iframe.cljs$lang$maxFixedArity = 0;
iframe.cljs$lang$applyTo = (function (arglist__9555){
var args__6506__auto__ = cljs.core.seq(arglist__9555);
return iframe__delegate(args__6506__auto__);
});
iframe.cljs$core$IFn$_invoke$arity$variadic = iframe__delegate;
return iframe;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.img = (function() { 
var img__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__7916_9556 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__7917_9557 = null;var count__7918_9558 = 0;var i__7919_9559 = 0;while(true){
if((i__7919_9559 < count__7918_9558))
{var arg__6508__auto___9560 = cljs.core._nth.call(null,chunk__7917_9557,i__7919_9559);a__6507__auto__.push(arg__6508__auto___9560);
{
var G__9561 = seq__7916_9556;
var G__9562 = chunk__7917_9557;
var G__9563 = count__7918_9558;
var G__9564 = (i__7919_9559 + 1);
seq__7916_9556 = G__9561;
chunk__7917_9557 = G__9562;
count__7918_9558 = G__9563;
i__7919_9559 = G__9564;
continue;
}
} else
{var temp__4092__auto___9565 = cljs.core.seq.call(null,seq__7916_9556);if(temp__4092__auto___9565)
{var seq__7916_9566__$1 = temp__4092__auto___9565;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7916_9566__$1))
{var c__5632__auto___9567 = cljs.core.chunk_first.call(null,seq__7916_9566__$1);{
var G__9568 = cljs.core.chunk_rest.call(null,seq__7916_9566__$1);
var G__9569 = c__5632__auto___9567;
var G__9570 = cljs.core.count.call(null,c__5632__auto___9567);
var G__9571 = 0;
seq__7916_9556 = G__9568;
chunk__7917_9557 = G__9569;
count__7918_9558 = G__9570;
i__7919_9559 = G__9571;
continue;
}
} else
{var arg__6508__auto___9572 = cljs.core.first.call(null,seq__7916_9566__$1);a__6507__auto__.push(arg__6508__auto___9572);
{
var G__9573 = cljs.core.next.call(null,seq__7916_9566__$1);
var G__9574 = null;
var G__9575 = 0;
var G__9576 = 0;
seq__7916_9556 = G__9573;
chunk__7917_9557 = G__9574;
count__7918_9558 = G__9575;
i__7919_9559 = G__9576;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.img.apply(null,a__6507__auto__);
};
var img = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return img__delegate.call(this,args__6506__auto__);};
img.cljs$lang$maxFixedArity = 0;
img.cljs$lang$applyTo = (function (arglist__9577){
var args__6506__auto__ = cljs.core.seq(arglist__9577);
return img__delegate(args__6506__auto__);
});
img.cljs$core$IFn$_invoke$arity$variadic = img__delegate;
return img;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.input = (function() { 
var input__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__7924_9578 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__7925_9579 = null;var count__7926_9580 = 0;var i__7927_9581 = 0;while(true){
if((i__7927_9581 < count__7926_9580))
{var arg__6508__auto___9582 = cljs.core._nth.call(null,chunk__7925_9579,i__7927_9581);a__6507__auto__.push(arg__6508__auto___9582);
{
var G__9583 = seq__7924_9578;
var G__9584 = chunk__7925_9579;
var G__9585 = count__7926_9580;
var G__9586 = (i__7927_9581 + 1);
seq__7924_9578 = G__9583;
chunk__7925_9579 = G__9584;
count__7926_9580 = G__9585;
i__7927_9581 = G__9586;
continue;
}
} else
{var temp__4092__auto___9587 = cljs.core.seq.call(null,seq__7924_9578);if(temp__4092__auto___9587)
{var seq__7924_9588__$1 = temp__4092__auto___9587;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7924_9588__$1))
{var c__5632__auto___9589 = cljs.core.chunk_first.call(null,seq__7924_9588__$1);{
var G__9590 = cljs.core.chunk_rest.call(null,seq__7924_9588__$1);
var G__9591 = c__5632__auto___9589;
var G__9592 = cljs.core.count.call(null,c__5632__auto___9589);
var G__9593 = 0;
seq__7924_9578 = G__9590;
chunk__7925_9579 = G__9591;
count__7926_9580 = G__9592;
i__7927_9581 = G__9593;
continue;
}
} else
{var arg__6508__auto___9594 = cljs.core.first.call(null,seq__7924_9588__$1);a__6507__auto__.push(arg__6508__auto___9594);
{
var G__9595 = cljs.core.next.call(null,seq__7924_9588__$1);
var G__9596 = null;
var G__9597 = 0;
var G__9598 = 0;
seq__7924_9578 = G__9595;
chunk__7925_9579 = G__9596;
count__7926_9580 = G__9597;
i__7927_9581 = G__9598;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.input.apply(null,a__6507__auto__);
};
var input = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return input__delegate.call(this,args__6506__auto__);};
input.cljs$lang$maxFixedArity = 0;
input.cljs$lang$applyTo = (function (arglist__9599){
var args__6506__auto__ = cljs.core.seq(arglist__9599);
return input__delegate(args__6506__auto__);
});
input.cljs$core$IFn$_invoke$arity$variadic = input__delegate;
return input;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.ins = (function() { 
var ins__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__7932_9600 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__7933_9601 = null;var count__7934_9602 = 0;var i__7935_9603 = 0;while(true){
if((i__7935_9603 < count__7934_9602))
{var arg__6508__auto___9604 = cljs.core._nth.call(null,chunk__7933_9601,i__7935_9603);a__6507__auto__.push(arg__6508__auto___9604);
{
var G__9605 = seq__7932_9600;
var G__9606 = chunk__7933_9601;
var G__9607 = count__7934_9602;
var G__9608 = (i__7935_9603 + 1);
seq__7932_9600 = G__9605;
chunk__7933_9601 = G__9606;
count__7934_9602 = G__9607;
i__7935_9603 = G__9608;
continue;
}
} else
{var temp__4092__auto___9609 = cljs.core.seq.call(null,seq__7932_9600);if(temp__4092__auto___9609)
{var seq__7932_9610__$1 = temp__4092__auto___9609;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7932_9610__$1))
{var c__5632__auto___9611 = cljs.core.chunk_first.call(null,seq__7932_9610__$1);{
var G__9612 = cljs.core.chunk_rest.call(null,seq__7932_9610__$1);
var G__9613 = c__5632__auto___9611;
var G__9614 = cljs.core.count.call(null,c__5632__auto___9611);
var G__9615 = 0;
seq__7932_9600 = G__9612;
chunk__7933_9601 = G__9613;
count__7934_9602 = G__9614;
i__7935_9603 = G__9615;
continue;
}
} else
{var arg__6508__auto___9616 = cljs.core.first.call(null,seq__7932_9610__$1);a__6507__auto__.push(arg__6508__auto___9616);
{
var G__9617 = cljs.core.next.call(null,seq__7932_9610__$1);
var G__9618 = null;
var G__9619 = 0;
var G__9620 = 0;
seq__7932_9600 = G__9617;
chunk__7933_9601 = G__9618;
count__7934_9602 = G__9619;
i__7935_9603 = G__9620;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.ins.apply(null,a__6507__auto__);
};
var ins = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ins__delegate.call(this,args__6506__auto__);};
ins.cljs$lang$maxFixedArity = 0;
ins.cljs$lang$applyTo = (function (arglist__9621){
var args__6506__auto__ = cljs.core.seq(arglist__9621);
return ins__delegate(args__6506__auto__);
});
ins.cljs$core$IFn$_invoke$arity$variadic = ins__delegate;
return ins;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.kbd = (function() { 
var kbd__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__7940_9622 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__7941_9623 = null;var count__7942_9624 = 0;var i__7943_9625 = 0;while(true){
if((i__7943_9625 < count__7942_9624))
{var arg__6508__auto___9626 = cljs.core._nth.call(null,chunk__7941_9623,i__7943_9625);a__6507__auto__.push(arg__6508__auto___9626);
{
var G__9627 = seq__7940_9622;
var G__9628 = chunk__7941_9623;
var G__9629 = count__7942_9624;
var G__9630 = (i__7943_9625 + 1);
seq__7940_9622 = G__9627;
chunk__7941_9623 = G__9628;
count__7942_9624 = G__9629;
i__7943_9625 = G__9630;
continue;
}
} else
{var temp__4092__auto___9631 = cljs.core.seq.call(null,seq__7940_9622);if(temp__4092__auto___9631)
{var seq__7940_9632__$1 = temp__4092__auto___9631;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7940_9632__$1))
{var c__5632__auto___9633 = cljs.core.chunk_first.call(null,seq__7940_9632__$1);{
var G__9634 = cljs.core.chunk_rest.call(null,seq__7940_9632__$1);
var G__9635 = c__5632__auto___9633;
var G__9636 = cljs.core.count.call(null,c__5632__auto___9633);
var G__9637 = 0;
seq__7940_9622 = G__9634;
chunk__7941_9623 = G__9635;
count__7942_9624 = G__9636;
i__7943_9625 = G__9637;
continue;
}
} else
{var arg__6508__auto___9638 = cljs.core.first.call(null,seq__7940_9632__$1);a__6507__auto__.push(arg__6508__auto___9638);
{
var G__9639 = cljs.core.next.call(null,seq__7940_9632__$1);
var G__9640 = null;
var G__9641 = 0;
var G__9642 = 0;
seq__7940_9622 = G__9639;
chunk__7941_9623 = G__9640;
count__7942_9624 = G__9641;
i__7943_9625 = G__9642;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.kbd.apply(null,a__6507__auto__);
};
var kbd = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return kbd__delegate.call(this,args__6506__auto__);};
kbd.cljs$lang$maxFixedArity = 0;
kbd.cljs$lang$applyTo = (function (arglist__9643){
var args__6506__auto__ = cljs.core.seq(arglist__9643);
return kbd__delegate(args__6506__auto__);
});
kbd.cljs$core$IFn$_invoke$arity$variadic = kbd__delegate;
return kbd;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.keygen = (function() { 
var keygen__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__7948_9644 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__7949_9645 = null;var count__7950_9646 = 0;var i__7951_9647 = 0;while(true){
if((i__7951_9647 < count__7950_9646))
{var arg__6508__auto___9648 = cljs.core._nth.call(null,chunk__7949_9645,i__7951_9647);a__6507__auto__.push(arg__6508__auto___9648);
{
var G__9649 = seq__7948_9644;
var G__9650 = chunk__7949_9645;
var G__9651 = count__7950_9646;
var G__9652 = (i__7951_9647 + 1);
seq__7948_9644 = G__9649;
chunk__7949_9645 = G__9650;
count__7950_9646 = G__9651;
i__7951_9647 = G__9652;
continue;
}
} else
{var temp__4092__auto___9653 = cljs.core.seq.call(null,seq__7948_9644);if(temp__4092__auto___9653)
{var seq__7948_9654__$1 = temp__4092__auto___9653;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7948_9654__$1))
{var c__5632__auto___9655 = cljs.core.chunk_first.call(null,seq__7948_9654__$1);{
var G__9656 = cljs.core.chunk_rest.call(null,seq__7948_9654__$1);
var G__9657 = c__5632__auto___9655;
var G__9658 = cljs.core.count.call(null,c__5632__auto___9655);
var G__9659 = 0;
seq__7948_9644 = G__9656;
chunk__7949_9645 = G__9657;
count__7950_9646 = G__9658;
i__7951_9647 = G__9659;
continue;
}
} else
{var arg__6508__auto___9660 = cljs.core.first.call(null,seq__7948_9654__$1);a__6507__auto__.push(arg__6508__auto___9660);
{
var G__9661 = cljs.core.next.call(null,seq__7948_9654__$1);
var G__9662 = null;
var G__9663 = 0;
var G__9664 = 0;
seq__7948_9644 = G__9661;
chunk__7949_9645 = G__9662;
count__7950_9646 = G__9663;
i__7951_9647 = G__9664;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.keygen.apply(null,a__6507__auto__);
};
var keygen = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return keygen__delegate.call(this,args__6506__auto__);};
keygen.cljs$lang$maxFixedArity = 0;
keygen.cljs$lang$applyTo = (function (arglist__9665){
var args__6506__auto__ = cljs.core.seq(arglist__9665);
return keygen__delegate(args__6506__auto__);
});
keygen.cljs$core$IFn$_invoke$arity$variadic = keygen__delegate;
return keygen;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.label = (function() { 
var label__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__7956_9666 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__7957_9667 = null;var count__7958_9668 = 0;var i__7959_9669 = 0;while(true){
if((i__7959_9669 < count__7958_9668))
{var arg__6508__auto___9670 = cljs.core._nth.call(null,chunk__7957_9667,i__7959_9669);a__6507__auto__.push(arg__6508__auto___9670);
{
var G__9671 = seq__7956_9666;
var G__9672 = chunk__7957_9667;
var G__9673 = count__7958_9668;
var G__9674 = (i__7959_9669 + 1);
seq__7956_9666 = G__9671;
chunk__7957_9667 = G__9672;
count__7958_9668 = G__9673;
i__7959_9669 = G__9674;
continue;
}
} else
{var temp__4092__auto___9675 = cljs.core.seq.call(null,seq__7956_9666);if(temp__4092__auto___9675)
{var seq__7956_9676__$1 = temp__4092__auto___9675;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7956_9676__$1))
{var c__5632__auto___9677 = cljs.core.chunk_first.call(null,seq__7956_9676__$1);{
var G__9678 = cljs.core.chunk_rest.call(null,seq__7956_9676__$1);
var G__9679 = c__5632__auto___9677;
var G__9680 = cljs.core.count.call(null,c__5632__auto___9677);
var G__9681 = 0;
seq__7956_9666 = G__9678;
chunk__7957_9667 = G__9679;
count__7958_9668 = G__9680;
i__7959_9669 = G__9681;
continue;
}
} else
{var arg__6508__auto___9682 = cljs.core.first.call(null,seq__7956_9676__$1);a__6507__auto__.push(arg__6508__auto___9682);
{
var G__9683 = cljs.core.next.call(null,seq__7956_9676__$1);
var G__9684 = null;
var G__9685 = 0;
var G__9686 = 0;
seq__7956_9666 = G__9683;
chunk__7957_9667 = G__9684;
count__7958_9668 = G__9685;
i__7959_9669 = G__9686;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.label.apply(null,a__6507__auto__);
};
var label = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return label__delegate.call(this,args__6506__auto__);};
label.cljs$lang$maxFixedArity = 0;
label.cljs$lang$applyTo = (function (arglist__9687){
var args__6506__auto__ = cljs.core.seq(arglist__9687);
return label__delegate(args__6506__auto__);
});
label.cljs$core$IFn$_invoke$arity$variadic = label__delegate;
return label;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.legend = (function() { 
var legend__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__7964_9688 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__7965_9689 = null;var count__7966_9690 = 0;var i__7967_9691 = 0;while(true){
if((i__7967_9691 < count__7966_9690))
{var arg__6508__auto___9692 = cljs.core._nth.call(null,chunk__7965_9689,i__7967_9691);a__6507__auto__.push(arg__6508__auto___9692);
{
var G__9693 = seq__7964_9688;
var G__9694 = chunk__7965_9689;
var G__9695 = count__7966_9690;
var G__9696 = (i__7967_9691 + 1);
seq__7964_9688 = G__9693;
chunk__7965_9689 = G__9694;
count__7966_9690 = G__9695;
i__7967_9691 = G__9696;
continue;
}
} else
{var temp__4092__auto___9697 = cljs.core.seq.call(null,seq__7964_9688);if(temp__4092__auto___9697)
{var seq__7964_9698__$1 = temp__4092__auto___9697;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7964_9698__$1))
{var c__5632__auto___9699 = cljs.core.chunk_first.call(null,seq__7964_9698__$1);{
var G__9700 = cljs.core.chunk_rest.call(null,seq__7964_9698__$1);
var G__9701 = c__5632__auto___9699;
var G__9702 = cljs.core.count.call(null,c__5632__auto___9699);
var G__9703 = 0;
seq__7964_9688 = G__9700;
chunk__7965_9689 = G__9701;
count__7966_9690 = G__9702;
i__7967_9691 = G__9703;
continue;
}
} else
{var arg__6508__auto___9704 = cljs.core.first.call(null,seq__7964_9698__$1);a__6507__auto__.push(arg__6508__auto___9704);
{
var G__9705 = cljs.core.next.call(null,seq__7964_9698__$1);
var G__9706 = null;
var G__9707 = 0;
var G__9708 = 0;
seq__7964_9688 = G__9705;
chunk__7965_9689 = G__9706;
count__7966_9690 = G__9707;
i__7967_9691 = G__9708;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.legend.apply(null,a__6507__auto__);
};
var legend = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return legend__delegate.call(this,args__6506__auto__);};
legend.cljs$lang$maxFixedArity = 0;
legend.cljs$lang$applyTo = (function (arglist__9709){
var args__6506__auto__ = cljs.core.seq(arglist__9709);
return legend__delegate(args__6506__auto__);
});
legend.cljs$core$IFn$_invoke$arity$variadic = legend__delegate;
return legend;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.li = (function() { 
var li__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__7972_9710 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__7973_9711 = null;var count__7974_9712 = 0;var i__7975_9713 = 0;while(true){
if((i__7975_9713 < count__7974_9712))
{var arg__6508__auto___9714 = cljs.core._nth.call(null,chunk__7973_9711,i__7975_9713);a__6507__auto__.push(arg__6508__auto___9714);
{
var G__9715 = seq__7972_9710;
var G__9716 = chunk__7973_9711;
var G__9717 = count__7974_9712;
var G__9718 = (i__7975_9713 + 1);
seq__7972_9710 = G__9715;
chunk__7973_9711 = G__9716;
count__7974_9712 = G__9717;
i__7975_9713 = G__9718;
continue;
}
} else
{var temp__4092__auto___9719 = cljs.core.seq.call(null,seq__7972_9710);if(temp__4092__auto___9719)
{var seq__7972_9720__$1 = temp__4092__auto___9719;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7972_9720__$1))
{var c__5632__auto___9721 = cljs.core.chunk_first.call(null,seq__7972_9720__$1);{
var G__9722 = cljs.core.chunk_rest.call(null,seq__7972_9720__$1);
var G__9723 = c__5632__auto___9721;
var G__9724 = cljs.core.count.call(null,c__5632__auto___9721);
var G__9725 = 0;
seq__7972_9710 = G__9722;
chunk__7973_9711 = G__9723;
count__7974_9712 = G__9724;
i__7975_9713 = G__9725;
continue;
}
} else
{var arg__6508__auto___9726 = cljs.core.first.call(null,seq__7972_9720__$1);a__6507__auto__.push(arg__6508__auto___9726);
{
var G__9727 = cljs.core.next.call(null,seq__7972_9720__$1);
var G__9728 = null;
var G__9729 = 0;
var G__9730 = 0;
seq__7972_9710 = G__9727;
chunk__7973_9711 = G__9728;
count__7974_9712 = G__9729;
i__7975_9713 = G__9730;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.li.apply(null,a__6507__auto__);
};
var li = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return li__delegate.call(this,args__6506__auto__);};
li.cljs$lang$maxFixedArity = 0;
li.cljs$lang$applyTo = (function (arglist__9731){
var args__6506__auto__ = cljs.core.seq(arglist__9731);
return li__delegate(args__6506__auto__);
});
li.cljs$core$IFn$_invoke$arity$variadic = li__delegate;
return li;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.link = (function() { 
var link__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__7980_9732 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__7981_9733 = null;var count__7982_9734 = 0;var i__7983_9735 = 0;while(true){
if((i__7983_9735 < count__7982_9734))
{var arg__6508__auto___9736 = cljs.core._nth.call(null,chunk__7981_9733,i__7983_9735);a__6507__auto__.push(arg__6508__auto___9736);
{
var G__9737 = seq__7980_9732;
var G__9738 = chunk__7981_9733;
var G__9739 = count__7982_9734;
var G__9740 = (i__7983_9735 + 1);
seq__7980_9732 = G__9737;
chunk__7981_9733 = G__9738;
count__7982_9734 = G__9739;
i__7983_9735 = G__9740;
continue;
}
} else
{var temp__4092__auto___9741 = cljs.core.seq.call(null,seq__7980_9732);if(temp__4092__auto___9741)
{var seq__7980_9742__$1 = temp__4092__auto___9741;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7980_9742__$1))
{var c__5632__auto___9743 = cljs.core.chunk_first.call(null,seq__7980_9742__$1);{
var G__9744 = cljs.core.chunk_rest.call(null,seq__7980_9742__$1);
var G__9745 = c__5632__auto___9743;
var G__9746 = cljs.core.count.call(null,c__5632__auto___9743);
var G__9747 = 0;
seq__7980_9732 = G__9744;
chunk__7981_9733 = G__9745;
count__7982_9734 = G__9746;
i__7983_9735 = G__9747;
continue;
}
} else
{var arg__6508__auto___9748 = cljs.core.first.call(null,seq__7980_9742__$1);a__6507__auto__.push(arg__6508__auto___9748);
{
var G__9749 = cljs.core.next.call(null,seq__7980_9742__$1);
var G__9750 = null;
var G__9751 = 0;
var G__9752 = 0;
seq__7980_9732 = G__9749;
chunk__7981_9733 = G__9750;
count__7982_9734 = G__9751;
i__7983_9735 = G__9752;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.link.apply(null,a__6507__auto__);
};
var link = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return link__delegate.call(this,args__6506__auto__);};
link.cljs$lang$maxFixedArity = 0;
link.cljs$lang$applyTo = (function (arglist__9753){
var args__6506__auto__ = cljs.core.seq(arglist__9753);
return link__delegate(args__6506__auto__);
});
link.cljs$core$IFn$_invoke$arity$variadic = link__delegate;
return link;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.main = (function() { 
var main__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__7988_9754 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__7989_9755 = null;var count__7990_9756 = 0;var i__7991_9757 = 0;while(true){
if((i__7991_9757 < count__7990_9756))
{var arg__6508__auto___9758 = cljs.core._nth.call(null,chunk__7989_9755,i__7991_9757);a__6507__auto__.push(arg__6508__auto___9758);
{
var G__9759 = seq__7988_9754;
var G__9760 = chunk__7989_9755;
var G__9761 = count__7990_9756;
var G__9762 = (i__7991_9757 + 1);
seq__7988_9754 = G__9759;
chunk__7989_9755 = G__9760;
count__7990_9756 = G__9761;
i__7991_9757 = G__9762;
continue;
}
} else
{var temp__4092__auto___9763 = cljs.core.seq.call(null,seq__7988_9754);if(temp__4092__auto___9763)
{var seq__7988_9764__$1 = temp__4092__auto___9763;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7988_9764__$1))
{var c__5632__auto___9765 = cljs.core.chunk_first.call(null,seq__7988_9764__$1);{
var G__9766 = cljs.core.chunk_rest.call(null,seq__7988_9764__$1);
var G__9767 = c__5632__auto___9765;
var G__9768 = cljs.core.count.call(null,c__5632__auto___9765);
var G__9769 = 0;
seq__7988_9754 = G__9766;
chunk__7989_9755 = G__9767;
count__7990_9756 = G__9768;
i__7991_9757 = G__9769;
continue;
}
} else
{var arg__6508__auto___9770 = cljs.core.first.call(null,seq__7988_9764__$1);a__6507__auto__.push(arg__6508__auto___9770);
{
var G__9771 = cljs.core.next.call(null,seq__7988_9764__$1);
var G__9772 = null;
var G__9773 = 0;
var G__9774 = 0;
seq__7988_9754 = G__9771;
chunk__7989_9755 = G__9772;
count__7990_9756 = G__9773;
i__7991_9757 = G__9774;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.main.apply(null,a__6507__auto__);
};
var main = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return main__delegate.call(this,args__6506__auto__);};
main.cljs$lang$maxFixedArity = 0;
main.cljs$lang$applyTo = (function (arglist__9775){
var args__6506__auto__ = cljs.core.seq(arglist__9775);
return main__delegate(args__6506__auto__);
});
main.cljs$core$IFn$_invoke$arity$variadic = main__delegate;
return main;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.map = (function() { 
var map__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__7996_9776 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__7997_9777 = null;var count__7998_9778 = 0;var i__7999_9779 = 0;while(true){
if((i__7999_9779 < count__7998_9778))
{var arg__6508__auto___9780 = cljs.core._nth.call(null,chunk__7997_9777,i__7999_9779);a__6507__auto__.push(arg__6508__auto___9780);
{
var G__9781 = seq__7996_9776;
var G__9782 = chunk__7997_9777;
var G__9783 = count__7998_9778;
var G__9784 = (i__7999_9779 + 1);
seq__7996_9776 = G__9781;
chunk__7997_9777 = G__9782;
count__7998_9778 = G__9783;
i__7999_9779 = G__9784;
continue;
}
} else
{var temp__4092__auto___9785 = cljs.core.seq.call(null,seq__7996_9776);if(temp__4092__auto___9785)
{var seq__7996_9786__$1 = temp__4092__auto___9785;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7996_9786__$1))
{var c__5632__auto___9787 = cljs.core.chunk_first.call(null,seq__7996_9786__$1);{
var G__9788 = cljs.core.chunk_rest.call(null,seq__7996_9786__$1);
var G__9789 = c__5632__auto___9787;
var G__9790 = cljs.core.count.call(null,c__5632__auto___9787);
var G__9791 = 0;
seq__7996_9776 = G__9788;
chunk__7997_9777 = G__9789;
count__7998_9778 = G__9790;
i__7999_9779 = G__9791;
continue;
}
} else
{var arg__6508__auto___9792 = cljs.core.first.call(null,seq__7996_9786__$1);a__6507__auto__.push(arg__6508__auto___9792);
{
var G__9793 = cljs.core.next.call(null,seq__7996_9786__$1);
var G__9794 = null;
var G__9795 = 0;
var G__9796 = 0;
seq__7996_9776 = G__9793;
chunk__7997_9777 = G__9794;
count__7998_9778 = G__9795;
i__7999_9779 = G__9796;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.map.apply(null,a__6507__auto__);
};
var map = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return map__delegate.call(this,args__6506__auto__);};
map.cljs$lang$maxFixedArity = 0;
map.cljs$lang$applyTo = (function (arglist__9797){
var args__6506__auto__ = cljs.core.seq(arglist__9797);
return map__delegate(args__6506__auto__);
});
map.cljs$core$IFn$_invoke$arity$variadic = map__delegate;
return map;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.mark = (function() { 
var mark__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__8004_9798 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__8005_9799 = null;var count__8006_9800 = 0;var i__8007_9801 = 0;while(true){
if((i__8007_9801 < count__8006_9800))
{var arg__6508__auto___9802 = cljs.core._nth.call(null,chunk__8005_9799,i__8007_9801);a__6507__auto__.push(arg__6508__auto___9802);
{
var G__9803 = seq__8004_9798;
var G__9804 = chunk__8005_9799;
var G__9805 = count__8006_9800;
var G__9806 = (i__8007_9801 + 1);
seq__8004_9798 = G__9803;
chunk__8005_9799 = G__9804;
count__8006_9800 = G__9805;
i__8007_9801 = G__9806;
continue;
}
} else
{var temp__4092__auto___9807 = cljs.core.seq.call(null,seq__8004_9798);if(temp__4092__auto___9807)
{var seq__8004_9808__$1 = temp__4092__auto___9807;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8004_9808__$1))
{var c__5632__auto___9809 = cljs.core.chunk_first.call(null,seq__8004_9808__$1);{
var G__9810 = cljs.core.chunk_rest.call(null,seq__8004_9808__$1);
var G__9811 = c__5632__auto___9809;
var G__9812 = cljs.core.count.call(null,c__5632__auto___9809);
var G__9813 = 0;
seq__8004_9798 = G__9810;
chunk__8005_9799 = G__9811;
count__8006_9800 = G__9812;
i__8007_9801 = G__9813;
continue;
}
} else
{var arg__6508__auto___9814 = cljs.core.first.call(null,seq__8004_9808__$1);a__6507__auto__.push(arg__6508__auto___9814);
{
var G__9815 = cljs.core.next.call(null,seq__8004_9808__$1);
var G__9816 = null;
var G__9817 = 0;
var G__9818 = 0;
seq__8004_9798 = G__9815;
chunk__8005_9799 = G__9816;
count__8006_9800 = G__9817;
i__8007_9801 = G__9818;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.mark.apply(null,a__6507__auto__);
};
var mark = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return mark__delegate.call(this,args__6506__auto__);};
mark.cljs$lang$maxFixedArity = 0;
mark.cljs$lang$applyTo = (function (arglist__9819){
var args__6506__auto__ = cljs.core.seq(arglist__9819);
return mark__delegate(args__6506__auto__);
});
mark.cljs$core$IFn$_invoke$arity$variadic = mark__delegate;
return mark;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.menu = (function() { 
var menu__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__8012_9820 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__8013_9821 = null;var count__8014_9822 = 0;var i__8015_9823 = 0;while(true){
if((i__8015_9823 < count__8014_9822))
{var arg__6508__auto___9824 = cljs.core._nth.call(null,chunk__8013_9821,i__8015_9823);a__6507__auto__.push(arg__6508__auto___9824);
{
var G__9825 = seq__8012_9820;
var G__9826 = chunk__8013_9821;
var G__9827 = count__8014_9822;
var G__9828 = (i__8015_9823 + 1);
seq__8012_9820 = G__9825;
chunk__8013_9821 = G__9826;
count__8014_9822 = G__9827;
i__8015_9823 = G__9828;
continue;
}
} else
{var temp__4092__auto___9829 = cljs.core.seq.call(null,seq__8012_9820);if(temp__4092__auto___9829)
{var seq__8012_9830__$1 = temp__4092__auto___9829;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8012_9830__$1))
{var c__5632__auto___9831 = cljs.core.chunk_first.call(null,seq__8012_9830__$1);{
var G__9832 = cljs.core.chunk_rest.call(null,seq__8012_9830__$1);
var G__9833 = c__5632__auto___9831;
var G__9834 = cljs.core.count.call(null,c__5632__auto___9831);
var G__9835 = 0;
seq__8012_9820 = G__9832;
chunk__8013_9821 = G__9833;
count__8014_9822 = G__9834;
i__8015_9823 = G__9835;
continue;
}
} else
{var arg__6508__auto___9836 = cljs.core.first.call(null,seq__8012_9830__$1);a__6507__auto__.push(arg__6508__auto___9836);
{
var G__9837 = cljs.core.next.call(null,seq__8012_9830__$1);
var G__9838 = null;
var G__9839 = 0;
var G__9840 = 0;
seq__8012_9820 = G__9837;
chunk__8013_9821 = G__9838;
count__8014_9822 = G__9839;
i__8015_9823 = G__9840;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.menu.apply(null,a__6507__auto__);
};
var menu = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return menu__delegate.call(this,args__6506__auto__);};
menu.cljs$lang$maxFixedArity = 0;
menu.cljs$lang$applyTo = (function (arglist__9841){
var args__6506__auto__ = cljs.core.seq(arglist__9841);
return menu__delegate(args__6506__auto__);
});
menu.cljs$core$IFn$_invoke$arity$variadic = menu__delegate;
return menu;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.menuitem = (function() { 
var menuitem__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__8020_9842 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__8021_9843 = null;var count__8022_9844 = 0;var i__8023_9845 = 0;while(true){
if((i__8023_9845 < count__8022_9844))
{var arg__6508__auto___9846 = cljs.core._nth.call(null,chunk__8021_9843,i__8023_9845);a__6507__auto__.push(arg__6508__auto___9846);
{
var G__9847 = seq__8020_9842;
var G__9848 = chunk__8021_9843;
var G__9849 = count__8022_9844;
var G__9850 = (i__8023_9845 + 1);
seq__8020_9842 = G__9847;
chunk__8021_9843 = G__9848;
count__8022_9844 = G__9849;
i__8023_9845 = G__9850;
continue;
}
} else
{var temp__4092__auto___9851 = cljs.core.seq.call(null,seq__8020_9842);if(temp__4092__auto___9851)
{var seq__8020_9852__$1 = temp__4092__auto___9851;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8020_9852__$1))
{var c__5632__auto___9853 = cljs.core.chunk_first.call(null,seq__8020_9852__$1);{
var G__9854 = cljs.core.chunk_rest.call(null,seq__8020_9852__$1);
var G__9855 = c__5632__auto___9853;
var G__9856 = cljs.core.count.call(null,c__5632__auto___9853);
var G__9857 = 0;
seq__8020_9842 = G__9854;
chunk__8021_9843 = G__9855;
count__8022_9844 = G__9856;
i__8023_9845 = G__9857;
continue;
}
} else
{var arg__6508__auto___9858 = cljs.core.first.call(null,seq__8020_9852__$1);a__6507__auto__.push(arg__6508__auto___9858);
{
var G__9859 = cljs.core.next.call(null,seq__8020_9852__$1);
var G__9860 = null;
var G__9861 = 0;
var G__9862 = 0;
seq__8020_9842 = G__9859;
chunk__8021_9843 = G__9860;
count__8022_9844 = G__9861;
i__8023_9845 = G__9862;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.menuitem.apply(null,a__6507__auto__);
};
var menuitem = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return menuitem__delegate.call(this,args__6506__auto__);};
menuitem.cljs$lang$maxFixedArity = 0;
menuitem.cljs$lang$applyTo = (function (arglist__9863){
var args__6506__auto__ = cljs.core.seq(arglist__9863);
return menuitem__delegate(args__6506__auto__);
});
menuitem.cljs$core$IFn$_invoke$arity$variadic = menuitem__delegate;
return menuitem;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.meta = (function() { 
var meta__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__8028_9864 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__8029_9865 = null;var count__8030_9866 = 0;var i__8031_9867 = 0;while(true){
if((i__8031_9867 < count__8030_9866))
{var arg__6508__auto___9868 = cljs.core._nth.call(null,chunk__8029_9865,i__8031_9867);a__6507__auto__.push(arg__6508__auto___9868);
{
var G__9869 = seq__8028_9864;
var G__9870 = chunk__8029_9865;
var G__9871 = count__8030_9866;
var G__9872 = (i__8031_9867 + 1);
seq__8028_9864 = G__9869;
chunk__8029_9865 = G__9870;
count__8030_9866 = G__9871;
i__8031_9867 = G__9872;
continue;
}
} else
{var temp__4092__auto___9873 = cljs.core.seq.call(null,seq__8028_9864);if(temp__4092__auto___9873)
{var seq__8028_9874__$1 = temp__4092__auto___9873;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8028_9874__$1))
{var c__5632__auto___9875 = cljs.core.chunk_first.call(null,seq__8028_9874__$1);{
var G__9876 = cljs.core.chunk_rest.call(null,seq__8028_9874__$1);
var G__9877 = c__5632__auto___9875;
var G__9878 = cljs.core.count.call(null,c__5632__auto___9875);
var G__9879 = 0;
seq__8028_9864 = G__9876;
chunk__8029_9865 = G__9877;
count__8030_9866 = G__9878;
i__8031_9867 = G__9879;
continue;
}
} else
{var arg__6508__auto___9880 = cljs.core.first.call(null,seq__8028_9874__$1);a__6507__auto__.push(arg__6508__auto___9880);
{
var G__9881 = cljs.core.next.call(null,seq__8028_9874__$1);
var G__9882 = null;
var G__9883 = 0;
var G__9884 = 0;
seq__8028_9864 = G__9881;
chunk__8029_9865 = G__9882;
count__8030_9866 = G__9883;
i__8031_9867 = G__9884;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.meta.apply(null,a__6507__auto__);
};
var meta = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return meta__delegate.call(this,args__6506__auto__);};
meta.cljs$lang$maxFixedArity = 0;
meta.cljs$lang$applyTo = (function (arglist__9885){
var args__6506__auto__ = cljs.core.seq(arglist__9885);
return meta__delegate(args__6506__auto__);
});
meta.cljs$core$IFn$_invoke$arity$variadic = meta__delegate;
return meta;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.meter = (function() { 
var meter__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__8036_9886 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__8037_9887 = null;var count__8038_9888 = 0;var i__8039_9889 = 0;while(true){
if((i__8039_9889 < count__8038_9888))
{var arg__6508__auto___9890 = cljs.core._nth.call(null,chunk__8037_9887,i__8039_9889);a__6507__auto__.push(arg__6508__auto___9890);
{
var G__9891 = seq__8036_9886;
var G__9892 = chunk__8037_9887;
var G__9893 = count__8038_9888;
var G__9894 = (i__8039_9889 + 1);
seq__8036_9886 = G__9891;
chunk__8037_9887 = G__9892;
count__8038_9888 = G__9893;
i__8039_9889 = G__9894;
continue;
}
} else
{var temp__4092__auto___9895 = cljs.core.seq.call(null,seq__8036_9886);if(temp__4092__auto___9895)
{var seq__8036_9896__$1 = temp__4092__auto___9895;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8036_9896__$1))
{var c__5632__auto___9897 = cljs.core.chunk_first.call(null,seq__8036_9896__$1);{
var G__9898 = cljs.core.chunk_rest.call(null,seq__8036_9896__$1);
var G__9899 = c__5632__auto___9897;
var G__9900 = cljs.core.count.call(null,c__5632__auto___9897);
var G__9901 = 0;
seq__8036_9886 = G__9898;
chunk__8037_9887 = G__9899;
count__8038_9888 = G__9900;
i__8039_9889 = G__9901;
continue;
}
} else
{var arg__6508__auto___9902 = cljs.core.first.call(null,seq__8036_9896__$1);a__6507__auto__.push(arg__6508__auto___9902);
{
var G__9903 = cljs.core.next.call(null,seq__8036_9896__$1);
var G__9904 = null;
var G__9905 = 0;
var G__9906 = 0;
seq__8036_9886 = G__9903;
chunk__8037_9887 = G__9904;
count__8038_9888 = G__9905;
i__8039_9889 = G__9906;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.meter.apply(null,a__6507__auto__);
};
var meter = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return meter__delegate.call(this,args__6506__auto__);};
meter.cljs$lang$maxFixedArity = 0;
meter.cljs$lang$applyTo = (function (arglist__9907){
var args__6506__auto__ = cljs.core.seq(arglist__9907);
return meter__delegate(args__6506__auto__);
});
meter.cljs$core$IFn$_invoke$arity$variadic = meter__delegate;
return meter;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.nav = (function() { 
var nav__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__8044_9908 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__8045_9909 = null;var count__8046_9910 = 0;var i__8047_9911 = 0;while(true){
if((i__8047_9911 < count__8046_9910))
{var arg__6508__auto___9912 = cljs.core._nth.call(null,chunk__8045_9909,i__8047_9911);a__6507__auto__.push(arg__6508__auto___9912);
{
var G__9913 = seq__8044_9908;
var G__9914 = chunk__8045_9909;
var G__9915 = count__8046_9910;
var G__9916 = (i__8047_9911 + 1);
seq__8044_9908 = G__9913;
chunk__8045_9909 = G__9914;
count__8046_9910 = G__9915;
i__8047_9911 = G__9916;
continue;
}
} else
{var temp__4092__auto___9917 = cljs.core.seq.call(null,seq__8044_9908);if(temp__4092__auto___9917)
{var seq__8044_9918__$1 = temp__4092__auto___9917;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8044_9918__$1))
{var c__5632__auto___9919 = cljs.core.chunk_first.call(null,seq__8044_9918__$1);{
var G__9920 = cljs.core.chunk_rest.call(null,seq__8044_9918__$1);
var G__9921 = c__5632__auto___9919;
var G__9922 = cljs.core.count.call(null,c__5632__auto___9919);
var G__9923 = 0;
seq__8044_9908 = G__9920;
chunk__8045_9909 = G__9921;
count__8046_9910 = G__9922;
i__8047_9911 = G__9923;
continue;
}
} else
{var arg__6508__auto___9924 = cljs.core.first.call(null,seq__8044_9918__$1);a__6507__auto__.push(arg__6508__auto___9924);
{
var G__9925 = cljs.core.next.call(null,seq__8044_9918__$1);
var G__9926 = null;
var G__9927 = 0;
var G__9928 = 0;
seq__8044_9908 = G__9925;
chunk__8045_9909 = G__9926;
count__8046_9910 = G__9927;
i__8047_9911 = G__9928;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.nav.apply(null,a__6507__auto__);
};
var nav = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return nav__delegate.call(this,args__6506__auto__);};
nav.cljs$lang$maxFixedArity = 0;
nav.cljs$lang$applyTo = (function (arglist__9929){
var args__6506__auto__ = cljs.core.seq(arglist__9929);
return nav__delegate(args__6506__auto__);
});
nav.cljs$core$IFn$_invoke$arity$variadic = nav__delegate;
return nav;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.noscript = (function() { 
var noscript__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__8052_9930 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__8053_9931 = null;var count__8054_9932 = 0;var i__8055_9933 = 0;while(true){
if((i__8055_9933 < count__8054_9932))
{var arg__6508__auto___9934 = cljs.core._nth.call(null,chunk__8053_9931,i__8055_9933);a__6507__auto__.push(arg__6508__auto___9934);
{
var G__9935 = seq__8052_9930;
var G__9936 = chunk__8053_9931;
var G__9937 = count__8054_9932;
var G__9938 = (i__8055_9933 + 1);
seq__8052_9930 = G__9935;
chunk__8053_9931 = G__9936;
count__8054_9932 = G__9937;
i__8055_9933 = G__9938;
continue;
}
} else
{var temp__4092__auto___9939 = cljs.core.seq.call(null,seq__8052_9930);if(temp__4092__auto___9939)
{var seq__8052_9940__$1 = temp__4092__auto___9939;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8052_9940__$1))
{var c__5632__auto___9941 = cljs.core.chunk_first.call(null,seq__8052_9940__$1);{
var G__9942 = cljs.core.chunk_rest.call(null,seq__8052_9940__$1);
var G__9943 = c__5632__auto___9941;
var G__9944 = cljs.core.count.call(null,c__5632__auto___9941);
var G__9945 = 0;
seq__8052_9930 = G__9942;
chunk__8053_9931 = G__9943;
count__8054_9932 = G__9944;
i__8055_9933 = G__9945;
continue;
}
} else
{var arg__6508__auto___9946 = cljs.core.first.call(null,seq__8052_9940__$1);a__6507__auto__.push(arg__6508__auto___9946);
{
var G__9947 = cljs.core.next.call(null,seq__8052_9940__$1);
var G__9948 = null;
var G__9949 = 0;
var G__9950 = 0;
seq__8052_9930 = G__9947;
chunk__8053_9931 = G__9948;
count__8054_9932 = G__9949;
i__8055_9933 = G__9950;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.noscript.apply(null,a__6507__auto__);
};
var noscript = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return noscript__delegate.call(this,args__6506__auto__);};
noscript.cljs$lang$maxFixedArity = 0;
noscript.cljs$lang$applyTo = (function (arglist__9951){
var args__6506__auto__ = cljs.core.seq(arglist__9951);
return noscript__delegate(args__6506__auto__);
});
noscript.cljs$core$IFn$_invoke$arity$variadic = noscript__delegate;
return noscript;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.object = (function() { 
var object__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__8060_9952 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__8061_9953 = null;var count__8062_9954 = 0;var i__8063_9955 = 0;while(true){
if((i__8063_9955 < count__8062_9954))
{var arg__6508__auto___9956 = cljs.core._nth.call(null,chunk__8061_9953,i__8063_9955);a__6507__auto__.push(arg__6508__auto___9956);
{
var G__9957 = seq__8060_9952;
var G__9958 = chunk__8061_9953;
var G__9959 = count__8062_9954;
var G__9960 = (i__8063_9955 + 1);
seq__8060_9952 = G__9957;
chunk__8061_9953 = G__9958;
count__8062_9954 = G__9959;
i__8063_9955 = G__9960;
continue;
}
} else
{var temp__4092__auto___9961 = cljs.core.seq.call(null,seq__8060_9952);if(temp__4092__auto___9961)
{var seq__8060_9962__$1 = temp__4092__auto___9961;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8060_9962__$1))
{var c__5632__auto___9963 = cljs.core.chunk_first.call(null,seq__8060_9962__$1);{
var G__9964 = cljs.core.chunk_rest.call(null,seq__8060_9962__$1);
var G__9965 = c__5632__auto___9963;
var G__9966 = cljs.core.count.call(null,c__5632__auto___9963);
var G__9967 = 0;
seq__8060_9952 = G__9964;
chunk__8061_9953 = G__9965;
count__8062_9954 = G__9966;
i__8063_9955 = G__9967;
continue;
}
} else
{var arg__6508__auto___9968 = cljs.core.first.call(null,seq__8060_9962__$1);a__6507__auto__.push(arg__6508__auto___9968);
{
var G__9969 = cljs.core.next.call(null,seq__8060_9962__$1);
var G__9970 = null;
var G__9971 = 0;
var G__9972 = 0;
seq__8060_9952 = G__9969;
chunk__8061_9953 = G__9970;
count__8062_9954 = G__9971;
i__8063_9955 = G__9972;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.object.apply(null,a__6507__auto__);
};
var object = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return object__delegate.call(this,args__6506__auto__);};
object.cljs$lang$maxFixedArity = 0;
object.cljs$lang$applyTo = (function (arglist__9973){
var args__6506__auto__ = cljs.core.seq(arglist__9973);
return object__delegate(args__6506__auto__);
});
object.cljs$core$IFn$_invoke$arity$variadic = object__delegate;
return object;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.ol = (function() { 
var ol__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__8068_9974 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__8069_9975 = null;var count__8070_9976 = 0;var i__8071_9977 = 0;while(true){
if((i__8071_9977 < count__8070_9976))
{var arg__6508__auto___9978 = cljs.core._nth.call(null,chunk__8069_9975,i__8071_9977);a__6507__auto__.push(arg__6508__auto___9978);
{
var G__9979 = seq__8068_9974;
var G__9980 = chunk__8069_9975;
var G__9981 = count__8070_9976;
var G__9982 = (i__8071_9977 + 1);
seq__8068_9974 = G__9979;
chunk__8069_9975 = G__9980;
count__8070_9976 = G__9981;
i__8071_9977 = G__9982;
continue;
}
} else
{var temp__4092__auto___9983 = cljs.core.seq.call(null,seq__8068_9974);if(temp__4092__auto___9983)
{var seq__8068_9984__$1 = temp__4092__auto___9983;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8068_9984__$1))
{var c__5632__auto___9985 = cljs.core.chunk_first.call(null,seq__8068_9984__$1);{
var G__9986 = cljs.core.chunk_rest.call(null,seq__8068_9984__$1);
var G__9987 = c__5632__auto___9985;
var G__9988 = cljs.core.count.call(null,c__5632__auto___9985);
var G__9989 = 0;
seq__8068_9974 = G__9986;
chunk__8069_9975 = G__9987;
count__8070_9976 = G__9988;
i__8071_9977 = G__9989;
continue;
}
} else
{var arg__6508__auto___9990 = cljs.core.first.call(null,seq__8068_9984__$1);a__6507__auto__.push(arg__6508__auto___9990);
{
var G__9991 = cljs.core.next.call(null,seq__8068_9984__$1);
var G__9992 = null;
var G__9993 = 0;
var G__9994 = 0;
seq__8068_9974 = G__9991;
chunk__8069_9975 = G__9992;
count__8070_9976 = G__9993;
i__8071_9977 = G__9994;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.ol.apply(null,a__6507__auto__);
};
var ol = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ol__delegate.call(this,args__6506__auto__);};
ol.cljs$lang$maxFixedArity = 0;
ol.cljs$lang$applyTo = (function (arglist__9995){
var args__6506__auto__ = cljs.core.seq(arglist__9995);
return ol__delegate(args__6506__auto__);
});
ol.cljs$core$IFn$_invoke$arity$variadic = ol__delegate;
return ol;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.optgroup = (function() { 
var optgroup__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__8076_9996 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__8077_9997 = null;var count__8078_9998 = 0;var i__8079_9999 = 0;while(true){
if((i__8079_9999 < count__8078_9998))
{var arg__6508__auto___10000 = cljs.core._nth.call(null,chunk__8077_9997,i__8079_9999);a__6507__auto__.push(arg__6508__auto___10000);
{
var G__10001 = seq__8076_9996;
var G__10002 = chunk__8077_9997;
var G__10003 = count__8078_9998;
var G__10004 = (i__8079_9999 + 1);
seq__8076_9996 = G__10001;
chunk__8077_9997 = G__10002;
count__8078_9998 = G__10003;
i__8079_9999 = G__10004;
continue;
}
} else
{var temp__4092__auto___10005 = cljs.core.seq.call(null,seq__8076_9996);if(temp__4092__auto___10005)
{var seq__8076_10006__$1 = temp__4092__auto___10005;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8076_10006__$1))
{var c__5632__auto___10007 = cljs.core.chunk_first.call(null,seq__8076_10006__$1);{
var G__10008 = cljs.core.chunk_rest.call(null,seq__8076_10006__$1);
var G__10009 = c__5632__auto___10007;
var G__10010 = cljs.core.count.call(null,c__5632__auto___10007);
var G__10011 = 0;
seq__8076_9996 = G__10008;
chunk__8077_9997 = G__10009;
count__8078_9998 = G__10010;
i__8079_9999 = G__10011;
continue;
}
} else
{var arg__6508__auto___10012 = cljs.core.first.call(null,seq__8076_10006__$1);a__6507__auto__.push(arg__6508__auto___10012);
{
var G__10013 = cljs.core.next.call(null,seq__8076_10006__$1);
var G__10014 = null;
var G__10015 = 0;
var G__10016 = 0;
seq__8076_9996 = G__10013;
chunk__8077_9997 = G__10014;
count__8078_9998 = G__10015;
i__8079_9999 = G__10016;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.optgroup.apply(null,a__6507__auto__);
};
var optgroup = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return optgroup__delegate.call(this,args__6506__auto__);};
optgroup.cljs$lang$maxFixedArity = 0;
optgroup.cljs$lang$applyTo = (function (arglist__10017){
var args__6506__auto__ = cljs.core.seq(arglist__10017);
return optgroup__delegate(args__6506__auto__);
});
optgroup.cljs$core$IFn$_invoke$arity$variadic = optgroup__delegate;
return optgroup;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.option = (function() { 
var option__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__8084_10018 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__8085_10019 = null;var count__8086_10020 = 0;var i__8087_10021 = 0;while(true){
if((i__8087_10021 < count__8086_10020))
{var arg__6508__auto___10022 = cljs.core._nth.call(null,chunk__8085_10019,i__8087_10021);a__6507__auto__.push(arg__6508__auto___10022);
{
var G__10023 = seq__8084_10018;
var G__10024 = chunk__8085_10019;
var G__10025 = count__8086_10020;
var G__10026 = (i__8087_10021 + 1);
seq__8084_10018 = G__10023;
chunk__8085_10019 = G__10024;
count__8086_10020 = G__10025;
i__8087_10021 = G__10026;
continue;
}
} else
{var temp__4092__auto___10027 = cljs.core.seq.call(null,seq__8084_10018);if(temp__4092__auto___10027)
{var seq__8084_10028__$1 = temp__4092__auto___10027;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8084_10028__$1))
{var c__5632__auto___10029 = cljs.core.chunk_first.call(null,seq__8084_10028__$1);{
var G__10030 = cljs.core.chunk_rest.call(null,seq__8084_10028__$1);
var G__10031 = c__5632__auto___10029;
var G__10032 = cljs.core.count.call(null,c__5632__auto___10029);
var G__10033 = 0;
seq__8084_10018 = G__10030;
chunk__8085_10019 = G__10031;
count__8086_10020 = G__10032;
i__8087_10021 = G__10033;
continue;
}
} else
{var arg__6508__auto___10034 = cljs.core.first.call(null,seq__8084_10028__$1);a__6507__auto__.push(arg__6508__auto___10034);
{
var G__10035 = cljs.core.next.call(null,seq__8084_10028__$1);
var G__10036 = null;
var G__10037 = 0;
var G__10038 = 0;
seq__8084_10018 = G__10035;
chunk__8085_10019 = G__10036;
count__8086_10020 = G__10037;
i__8087_10021 = G__10038;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.option.apply(null,a__6507__auto__);
};
var option = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return option__delegate.call(this,args__6506__auto__);};
option.cljs$lang$maxFixedArity = 0;
option.cljs$lang$applyTo = (function (arglist__10039){
var args__6506__auto__ = cljs.core.seq(arglist__10039);
return option__delegate(args__6506__auto__);
});
option.cljs$core$IFn$_invoke$arity$variadic = option__delegate;
return option;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.output = (function() { 
var output__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__8092_10040 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__8093_10041 = null;var count__8094_10042 = 0;var i__8095_10043 = 0;while(true){
if((i__8095_10043 < count__8094_10042))
{var arg__6508__auto___10044 = cljs.core._nth.call(null,chunk__8093_10041,i__8095_10043);a__6507__auto__.push(arg__6508__auto___10044);
{
var G__10045 = seq__8092_10040;
var G__10046 = chunk__8093_10041;
var G__10047 = count__8094_10042;
var G__10048 = (i__8095_10043 + 1);
seq__8092_10040 = G__10045;
chunk__8093_10041 = G__10046;
count__8094_10042 = G__10047;
i__8095_10043 = G__10048;
continue;
}
} else
{var temp__4092__auto___10049 = cljs.core.seq.call(null,seq__8092_10040);if(temp__4092__auto___10049)
{var seq__8092_10050__$1 = temp__4092__auto___10049;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8092_10050__$1))
{var c__5632__auto___10051 = cljs.core.chunk_first.call(null,seq__8092_10050__$1);{
var G__10052 = cljs.core.chunk_rest.call(null,seq__8092_10050__$1);
var G__10053 = c__5632__auto___10051;
var G__10054 = cljs.core.count.call(null,c__5632__auto___10051);
var G__10055 = 0;
seq__8092_10040 = G__10052;
chunk__8093_10041 = G__10053;
count__8094_10042 = G__10054;
i__8095_10043 = G__10055;
continue;
}
} else
{var arg__6508__auto___10056 = cljs.core.first.call(null,seq__8092_10050__$1);a__6507__auto__.push(arg__6508__auto___10056);
{
var G__10057 = cljs.core.next.call(null,seq__8092_10050__$1);
var G__10058 = null;
var G__10059 = 0;
var G__10060 = 0;
seq__8092_10040 = G__10057;
chunk__8093_10041 = G__10058;
count__8094_10042 = G__10059;
i__8095_10043 = G__10060;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.output.apply(null,a__6507__auto__);
};
var output = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return output__delegate.call(this,args__6506__auto__);};
output.cljs$lang$maxFixedArity = 0;
output.cljs$lang$applyTo = (function (arglist__10061){
var args__6506__auto__ = cljs.core.seq(arglist__10061);
return output__delegate(args__6506__auto__);
});
output.cljs$core$IFn$_invoke$arity$variadic = output__delegate;
return output;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.p = (function() { 
var p__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__8100_10062 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__8101_10063 = null;var count__8102_10064 = 0;var i__8103_10065 = 0;while(true){
if((i__8103_10065 < count__8102_10064))
{var arg__6508__auto___10066 = cljs.core._nth.call(null,chunk__8101_10063,i__8103_10065);a__6507__auto__.push(arg__6508__auto___10066);
{
var G__10067 = seq__8100_10062;
var G__10068 = chunk__8101_10063;
var G__10069 = count__8102_10064;
var G__10070 = (i__8103_10065 + 1);
seq__8100_10062 = G__10067;
chunk__8101_10063 = G__10068;
count__8102_10064 = G__10069;
i__8103_10065 = G__10070;
continue;
}
} else
{var temp__4092__auto___10071 = cljs.core.seq.call(null,seq__8100_10062);if(temp__4092__auto___10071)
{var seq__8100_10072__$1 = temp__4092__auto___10071;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8100_10072__$1))
{var c__5632__auto___10073 = cljs.core.chunk_first.call(null,seq__8100_10072__$1);{
var G__10074 = cljs.core.chunk_rest.call(null,seq__8100_10072__$1);
var G__10075 = c__5632__auto___10073;
var G__10076 = cljs.core.count.call(null,c__5632__auto___10073);
var G__10077 = 0;
seq__8100_10062 = G__10074;
chunk__8101_10063 = G__10075;
count__8102_10064 = G__10076;
i__8103_10065 = G__10077;
continue;
}
} else
{var arg__6508__auto___10078 = cljs.core.first.call(null,seq__8100_10072__$1);a__6507__auto__.push(arg__6508__auto___10078);
{
var G__10079 = cljs.core.next.call(null,seq__8100_10072__$1);
var G__10080 = null;
var G__10081 = 0;
var G__10082 = 0;
seq__8100_10062 = G__10079;
chunk__8101_10063 = G__10080;
count__8102_10064 = G__10081;
i__8103_10065 = G__10082;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.p.apply(null,a__6507__auto__);
};
var p = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return p__delegate.call(this,args__6506__auto__);};
p.cljs$lang$maxFixedArity = 0;
p.cljs$lang$applyTo = (function (arglist__10083){
var args__6506__auto__ = cljs.core.seq(arglist__10083);
return p__delegate(args__6506__auto__);
});
p.cljs$core$IFn$_invoke$arity$variadic = p__delegate;
return p;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.param = (function() { 
var param__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__8108_10084 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__8109_10085 = null;var count__8110_10086 = 0;var i__8111_10087 = 0;while(true){
if((i__8111_10087 < count__8110_10086))
{var arg__6508__auto___10088 = cljs.core._nth.call(null,chunk__8109_10085,i__8111_10087);a__6507__auto__.push(arg__6508__auto___10088);
{
var G__10089 = seq__8108_10084;
var G__10090 = chunk__8109_10085;
var G__10091 = count__8110_10086;
var G__10092 = (i__8111_10087 + 1);
seq__8108_10084 = G__10089;
chunk__8109_10085 = G__10090;
count__8110_10086 = G__10091;
i__8111_10087 = G__10092;
continue;
}
} else
{var temp__4092__auto___10093 = cljs.core.seq.call(null,seq__8108_10084);if(temp__4092__auto___10093)
{var seq__8108_10094__$1 = temp__4092__auto___10093;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8108_10094__$1))
{var c__5632__auto___10095 = cljs.core.chunk_first.call(null,seq__8108_10094__$1);{
var G__10096 = cljs.core.chunk_rest.call(null,seq__8108_10094__$1);
var G__10097 = c__5632__auto___10095;
var G__10098 = cljs.core.count.call(null,c__5632__auto___10095);
var G__10099 = 0;
seq__8108_10084 = G__10096;
chunk__8109_10085 = G__10097;
count__8110_10086 = G__10098;
i__8111_10087 = G__10099;
continue;
}
} else
{var arg__6508__auto___10100 = cljs.core.first.call(null,seq__8108_10094__$1);a__6507__auto__.push(arg__6508__auto___10100);
{
var G__10101 = cljs.core.next.call(null,seq__8108_10094__$1);
var G__10102 = null;
var G__10103 = 0;
var G__10104 = 0;
seq__8108_10084 = G__10101;
chunk__8109_10085 = G__10102;
count__8110_10086 = G__10103;
i__8111_10087 = G__10104;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.param.apply(null,a__6507__auto__);
};
var param = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return param__delegate.call(this,args__6506__auto__);};
param.cljs$lang$maxFixedArity = 0;
param.cljs$lang$applyTo = (function (arglist__10105){
var args__6506__auto__ = cljs.core.seq(arglist__10105);
return param__delegate(args__6506__auto__);
});
param.cljs$core$IFn$_invoke$arity$variadic = param__delegate;
return param;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.pre = (function() { 
var pre__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__8116_10106 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__8117_10107 = null;var count__8118_10108 = 0;var i__8119_10109 = 0;while(true){
if((i__8119_10109 < count__8118_10108))
{var arg__6508__auto___10110 = cljs.core._nth.call(null,chunk__8117_10107,i__8119_10109);a__6507__auto__.push(arg__6508__auto___10110);
{
var G__10111 = seq__8116_10106;
var G__10112 = chunk__8117_10107;
var G__10113 = count__8118_10108;
var G__10114 = (i__8119_10109 + 1);
seq__8116_10106 = G__10111;
chunk__8117_10107 = G__10112;
count__8118_10108 = G__10113;
i__8119_10109 = G__10114;
continue;
}
} else
{var temp__4092__auto___10115 = cljs.core.seq.call(null,seq__8116_10106);if(temp__4092__auto___10115)
{var seq__8116_10116__$1 = temp__4092__auto___10115;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8116_10116__$1))
{var c__5632__auto___10117 = cljs.core.chunk_first.call(null,seq__8116_10116__$1);{
var G__10118 = cljs.core.chunk_rest.call(null,seq__8116_10116__$1);
var G__10119 = c__5632__auto___10117;
var G__10120 = cljs.core.count.call(null,c__5632__auto___10117);
var G__10121 = 0;
seq__8116_10106 = G__10118;
chunk__8117_10107 = G__10119;
count__8118_10108 = G__10120;
i__8119_10109 = G__10121;
continue;
}
} else
{var arg__6508__auto___10122 = cljs.core.first.call(null,seq__8116_10116__$1);a__6507__auto__.push(arg__6508__auto___10122);
{
var G__10123 = cljs.core.next.call(null,seq__8116_10116__$1);
var G__10124 = null;
var G__10125 = 0;
var G__10126 = 0;
seq__8116_10106 = G__10123;
chunk__8117_10107 = G__10124;
count__8118_10108 = G__10125;
i__8119_10109 = G__10126;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.pre.apply(null,a__6507__auto__);
};
var pre = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return pre__delegate.call(this,args__6506__auto__);};
pre.cljs$lang$maxFixedArity = 0;
pre.cljs$lang$applyTo = (function (arglist__10127){
var args__6506__auto__ = cljs.core.seq(arglist__10127);
return pre__delegate(args__6506__auto__);
});
pre.cljs$core$IFn$_invoke$arity$variadic = pre__delegate;
return pre;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.progress = (function() { 
var progress__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__8124_10128 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__8125_10129 = null;var count__8126_10130 = 0;var i__8127_10131 = 0;while(true){
if((i__8127_10131 < count__8126_10130))
{var arg__6508__auto___10132 = cljs.core._nth.call(null,chunk__8125_10129,i__8127_10131);a__6507__auto__.push(arg__6508__auto___10132);
{
var G__10133 = seq__8124_10128;
var G__10134 = chunk__8125_10129;
var G__10135 = count__8126_10130;
var G__10136 = (i__8127_10131 + 1);
seq__8124_10128 = G__10133;
chunk__8125_10129 = G__10134;
count__8126_10130 = G__10135;
i__8127_10131 = G__10136;
continue;
}
} else
{var temp__4092__auto___10137 = cljs.core.seq.call(null,seq__8124_10128);if(temp__4092__auto___10137)
{var seq__8124_10138__$1 = temp__4092__auto___10137;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8124_10138__$1))
{var c__5632__auto___10139 = cljs.core.chunk_first.call(null,seq__8124_10138__$1);{
var G__10140 = cljs.core.chunk_rest.call(null,seq__8124_10138__$1);
var G__10141 = c__5632__auto___10139;
var G__10142 = cljs.core.count.call(null,c__5632__auto___10139);
var G__10143 = 0;
seq__8124_10128 = G__10140;
chunk__8125_10129 = G__10141;
count__8126_10130 = G__10142;
i__8127_10131 = G__10143;
continue;
}
} else
{var arg__6508__auto___10144 = cljs.core.first.call(null,seq__8124_10138__$1);a__6507__auto__.push(arg__6508__auto___10144);
{
var G__10145 = cljs.core.next.call(null,seq__8124_10138__$1);
var G__10146 = null;
var G__10147 = 0;
var G__10148 = 0;
seq__8124_10128 = G__10145;
chunk__8125_10129 = G__10146;
count__8126_10130 = G__10147;
i__8127_10131 = G__10148;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.progress.apply(null,a__6507__auto__);
};
var progress = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return progress__delegate.call(this,args__6506__auto__);};
progress.cljs$lang$maxFixedArity = 0;
progress.cljs$lang$applyTo = (function (arglist__10149){
var args__6506__auto__ = cljs.core.seq(arglist__10149);
return progress__delegate(args__6506__auto__);
});
progress.cljs$core$IFn$_invoke$arity$variadic = progress__delegate;
return progress;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.q = (function() { 
var q__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__8132_10150 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__8133_10151 = null;var count__8134_10152 = 0;var i__8135_10153 = 0;while(true){
if((i__8135_10153 < count__8134_10152))
{var arg__6508__auto___10154 = cljs.core._nth.call(null,chunk__8133_10151,i__8135_10153);a__6507__auto__.push(arg__6508__auto___10154);
{
var G__10155 = seq__8132_10150;
var G__10156 = chunk__8133_10151;
var G__10157 = count__8134_10152;
var G__10158 = (i__8135_10153 + 1);
seq__8132_10150 = G__10155;
chunk__8133_10151 = G__10156;
count__8134_10152 = G__10157;
i__8135_10153 = G__10158;
continue;
}
} else
{var temp__4092__auto___10159 = cljs.core.seq.call(null,seq__8132_10150);if(temp__4092__auto___10159)
{var seq__8132_10160__$1 = temp__4092__auto___10159;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8132_10160__$1))
{var c__5632__auto___10161 = cljs.core.chunk_first.call(null,seq__8132_10160__$1);{
var G__10162 = cljs.core.chunk_rest.call(null,seq__8132_10160__$1);
var G__10163 = c__5632__auto___10161;
var G__10164 = cljs.core.count.call(null,c__5632__auto___10161);
var G__10165 = 0;
seq__8132_10150 = G__10162;
chunk__8133_10151 = G__10163;
count__8134_10152 = G__10164;
i__8135_10153 = G__10165;
continue;
}
} else
{var arg__6508__auto___10166 = cljs.core.first.call(null,seq__8132_10160__$1);a__6507__auto__.push(arg__6508__auto___10166);
{
var G__10167 = cljs.core.next.call(null,seq__8132_10160__$1);
var G__10168 = null;
var G__10169 = 0;
var G__10170 = 0;
seq__8132_10150 = G__10167;
chunk__8133_10151 = G__10168;
count__8134_10152 = G__10169;
i__8135_10153 = G__10170;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.q.apply(null,a__6507__auto__);
};
var q = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return q__delegate.call(this,args__6506__auto__);};
q.cljs$lang$maxFixedArity = 0;
q.cljs$lang$applyTo = (function (arglist__10171){
var args__6506__auto__ = cljs.core.seq(arglist__10171);
return q__delegate(args__6506__auto__);
});
q.cljs$core$IFn$_invoke$arity$variadic = q__delegate;
return q;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.rp = (function() { 
var rp__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__8140_10172 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__8141_10173 = null;var count__8142_10174 = 0;var i__8143_10175 = 0;while(true){
if((i__8143_10175 < count__8142_10174))
{var arg__6508__auto___10176 = cljs.core._nth.call(null,chunk__8141_10173,i__8143_10175);a__6507__auto__.push(arg__6508__auto___10176);
{
var G__10177 = seq__8140_10172;
var G__10178 = chunk__8141_10173;
var G__10179 = count__8142_10174;
var G__10180 = (i__8143_10175 + 1);
seq__8140_10172 = G__10177;
chunk__8141_10173 = G__10178;
count__8142_10174 = G__10179;
i__8143_10175 = G__10180;
continue;
}
} else
{var temp__4092__auto___10181 = cljs.core.seq.call(null,seq__8140_10172);if(temp__4092__auto___10181)
{var seq__8140_10182__$1 = temp__4092__auto___10181;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8140_10182__$1))
{var c__5632__auto___10183 = cljs.core.chunk_first.call(null,seq__8140_10182__$1);{
var G__10184 = cljs.core.chunk_rest.call(null,seq__8140_10182__$1);
var G__10185 = c__5632__auto___10183;
var G__10186 = cljs.core.count.call(null,c__5632__auto___10183);
var G__10187 = 0;
seq__8140_10172 = G__10184;
chunk__8141_10173 = G__10185;
count__8142_10174 = G__10186;
i__8143_10175 = G__10187;
continue;
}
} else
{var arg__6508__auto___10188 = cljs.core.first.call(null,seq__8140_10182__$1);a__6507__auto__.push(arg__6508__auto___10188);
{
var G__10189 = cljs.core.next.call(null,seq__8140_10182__$1);
var G__10190 = null;
var G__10191 = 0;
var G__10192 = 0;
seq__8140_10172 = G__10189;
chunk__8141_10173 = G__10190;
count__8142_10174 = G__10191;
i__8143_10175 = G__10192;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.rp.apply(null,a__6507__auto__);
};
var rp = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return rp__delegate.call(this,args__6506__auto__);};
rp.cljs$lang$maxFixedArity = 0;
rp.cljs$lang$applyTo = (function (arglist__10193){
var args__6506__auto__ = cljs.core.seq(arglist__10193);
return rp__delegate(args__6506__auto__);
});
rp.cljs$core$IFn$_invoke$arity$variadic = rp__delegate;
return rp;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.rt = (function() { 
var rt__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__8148_10194 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__8149_10195 = null;var count__8150_10196 = 0;var i__8151_10197 = 0;while(true){
if((i__8151_10197 < count__8150_10196))
{var arg__6508__auto___10198 = cljs.core._nth.call(null,chunk__8149_10195,i__8151_10197);a__6507__auto__.push(arg__6508__auto___10198);
{
var G__10199 = seq__8148_10194;
var G__10200 = chunk__8149_10195;
var G__10201 = count__8150_10196;
var G__10202 = (i__8151_10197 + 1);
seq__8148_10194 = G__10199;
chunk__8149_10195 = G__10200;
count__8150_10196 = G__10201;
i__8151_10197 = G__10202;
continue;
}
} else
{var temp__4092__auto___10203 = cljs.core.seq.call(null,seq__8148_10194);if(temp__4092__auto___10203)
{var seq__8148_10204__$1 = temp__4092__auto___10203;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8148_10204__$1))
{var c__5632__auto___10205 = cljs.core.chunk_first.call(null,seq__8148_10204__$1);{
var G__10206 = cljs.core.chunk_rest.call(null,seq__8148_10204__$1);
var G__10207 = c__5632__auto___10205;
var G__10208 = cljs.core.count.call(null,c__5632__auto___10205);
var G__10209 = 0;
seq__8148_10194 = G__10206;
chunk__8149_10195 = G__10207;
count__8150_10196 = G__10208;
i__8151_10197 = G__10209;
continue;
}
} else
{var arg__6508__auto___10210 = cljs.core.first.call(null,seq__8148_10204__$1);a__6507__auto__.push(arg__6508__auto___10210);
{
var G__10211 = cljs.core.next.call(null,seq__8148_10204__$1);
var G__10212 = null;
var G__10213 = 0;
var G__10214 = 0;
seq__8148_10194 = G__10211;
chunk__8149_10195 = G__10212;
count__8150_10196 = G__10213;
i__8151_10197 = G__10214;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.rt.apply(null,a__6507__auto__);
};
var rt = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return rt__delegate.call(this,args__6506__auto__);};
rt.cljs$lang$maxFixedArity = 0;
rt.cljs$lang$applyTo = (function (arglist__10215){
var args__6506__auto__ = cljs.core.seq(arglist__10215);
return rt__delegate(args__6506__auto__);
});
rt.cljs$core$IFn$_invoke$arity$variadic = rt__delegate;
return rt;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.ruby = (function() { 
var ruby__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__8156_10216 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__8157_10217 = null;var count__8158_10218 = 0;var i__8159_10219 = 0;while(true){
if((i__8159_10219 < count__8158_10218))
{var arg__6508__auto___10220 = cljs.core._nth.call(null,chunk__8157_10217,i__8159_10219);a__6507__auto__.push(arg__6508__auto___10220);
{
var G__10221 = seq__8156_10216;
var G__10222 = chunk__8157_10217;
var G__10223 = count__8158_10218;
var G__10224 = (i__8159_10219 + 1);
seq__8156_10216 = G__10221;
chunk__8157_10217 = G__10222;
count__8158_10218 = G__10223;
i__8159_10219 = G__10224;
continue;
}
} else
{var temp__4092__auto___10225 = cljs.core.seq.call(null,seq__8156_10216);if(temp__4092__auto___10225)
{var seq__8156_10226__$1 = temp__4092__auto___10225;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8156_10226__$1))
{var c__5632__auto___10227 = cljs.core.chunk_first.call(null,seq__8156_10226__$1);{
var G__10228 = cljs.core.chunk_rest.call(null,seq__8156_10226__$1);
var G__10229 = c__5632__auto___10227;
var G__10230 = cljs.core.count.call(null,c__5632__auto___10227);
var G__10231 = 0;
seq__8156_10216 = G__10228;
chunk__8157_10217 = G__10229;
count__8158_10218 = G__10230;
i__8159_10219 = G__10231;
continue;
}
} else
{var arg__6508__auto___10232 = cljs.core.first.call(null,seq__8156_10226__$1);a__6507__auto__.push(arg__6508__auto___10232);
{
var G__10233 = cljs.core.next.call(null,seq__8156_10226__$1);
var G__10234 = null;
var G__10235 = 0;
var G__10236 = 0;
seq__8156_10216 = G__10233;
chunk__8157_10217 = G__10234;
count__8158_10218 = G__10235;
i__8159_10219 = G__10236;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.ruby.apply(null,a__6507__auto__);
};
var ruby = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ruby__delegate.call(this,args__6506__auto__);};
ruby.cljs$lang$maxFixedArity = 0;
ruby.cljs$lang$applyTo = (function (arglist__10237){
var args__6506__auto__ = cljs.core.seq(arglist__10237);
return ruby__delegate(args__6506__auto__);
});
ruby.cljs$core$IFn$_invoke$arity$variadic = ruby__delegate;
return ruby;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.s = (function() { 
var s__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__8164_10238 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__8165_10239 = null;var count__8166_10240 = 0;var i__8167_10241 = 0;while(true){
if((i__8167_10241 < count__8166_10240))
{var arg__6508__auto___10242 = cljs.core._nth.call(null,chunk__8165_10239,i__8167_10241);a__6507__auto__.push(arg__6508__auto___10242);
{
var G__10243 = seq__8164_10238;
var G__10244 = chunk__8165_10239;
var G__10245 = count__8166_10240;
var G__10246 = (i__8167_10241 + 1);
seq__8164_10238 = G__10243;
chunk__8165_10239 = G__10244;
count__8166_10240 = G__10245;
i__8167_10241 = G__10246;
continue;
}
} else
{var temp__4092__auto___10247 = cljs.core.seq.call(null,seq__8164_10238);if(temp__4092__auto___10247)
{var seq__8164_10248__$1 = temp__4092__auto___10247;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8164_10248__$1))
{var c__5632__auto___10249 = cljs.core.chunk_first.call(null,seq__8164_10248__$1);{
var G__10250 = cljs.core.chunk_rest.call(null,seq__8164_10248__$1);
var G__10251 = c__5632__auto___10249;
var G__10252 = cljs.core.count.call(null,c__5632__auto___10249);
var G__10253 = 0;
seq__8164_10238 = G__10250;
chunk__8165_10239 = G__10251;
count__8166_10240 = G__10252;
i__8167_10241 = G__10253;
continue;
}
} else
{var arg__6508__auto___10254 = cljs.core.first.call(null,seq__8164_10248__$1);a__6507__auto__.push(arg__6508__auto___10254);
{
var G__10255 = cljs.core.next.call(null,seq__8164_10248__$1);
var G__10256 = null;
var G__10257 = 0;
var G__10258 = 0;
seq__8164_10238 = G__10255;
chunk__8165_10239 = G__10256;
count__8166_10240 = G__10257;
i__8167_10241 = G__10258;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.s.apply(null,a__6507__auto__);
};
var s = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return s__delegate.call(this,args__6506__auto__);};
s.cljs$lang$maxFixedArity = 0;
s.cljs$lang$applyTo = (function (arglist__10259){
var args__6506__auto__ = cljs.core.seq(arglist__10259);
return s__delegate(args__6506__auto__);
});
s.cljs$core$IFn$_invoke$arity$variadic = s__delegate;
return s;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.samp = (function() { 
var samp__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__8172_10260 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__8173_10261 = null;var count__8174_10262 = 0;var i__8175_10263 = 0;while(true){
if((i__8175_10263 < count__8174_10262))
{var arg__6508__auto___10264 = cljs.core._nth.call(null,chunk__8173_10261,i__8175_10263);a__6507__auto__.push(arg__6508__auto___10264);
{
var G__10265 = seq__8172_10260;
var G__10266 = chunk__8173_10261;
var G__10267 = count__8174_10262;
var G__10268 = (i__8175_10263 + 1);
seq__8172_10260 = G__10265;
chunk__8173_10261 = G__10266;
count__8174_10262 = G__10267;
i__8175_10263 = G__10268;
continue;
}
} else
{var temp__4092__auto___10269 = cljs.core.seq.call(null,seq__8172_10260);if(temp__4092__auto___10269)
{var seq__8172_10270__$1 = temp__4092__auto___10269;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8172_10270__$1))
{var c__5632__auto___10271 = cljs.core.chunk_first.call(null,seq__8172_10270__$1);{
var G__10272 = cljs.core.chunk_rest.call(null,seq__8172_10270__$1);
var G__10273 = c__5632__auto___10271;
var G__10274 = cljs.core.count.call(null,c__5632__auto___10271);
var G__10275 = 0;
seq__8172_10260 = G__10272;
chunk__8173_10261 = G__10273;
count__8174_10262 = G__10274;
i__8175_10263 = G__10275;
continue;
}
} else
{var arg__6508__auto___10276 = cljs.core.first.call(null,seq__8172_10270__$1);a__6507__auto__.push(arg__6508__auto___10276);
{
var G__10277 = cljs.core.next.call(null,seq__8172_10270__$1);
var G__10278 = null;
var G__10279 = 0;
var G__10280 = 0;
seq__8172_10260 = G__10277;
chunk__8173_10261 = G__10278;
count__8174_10262 = G__10279;
i__8175_10263 = G__10280;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.samp.apply(null,a__6507__auto__);
};
var samp = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return samp__delegate.call(this,args__6506__auto__);};
samp.cljs$lang$maxFixedArity = 0;
samp.cljs$lang$applyTo = (function (arglist__10281){
var args__6506__auto__ = cljs.core.seq(arglist__10281);
return samp__delegate(args__6506__auto__);
});
samp.cljs$core$IFn$_invoke$arity$variadic = samp__delegate;
return samp;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.script = (function() { 
var script__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__8180_10282 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__8181_10283 = null;var count__8182_10284 = 0;var i__8183_10285 = 0;while(true){
if((i__8183_10285 < count__8182_10284))
{var arg__6508__auto___10286 = cljs.core._nth.call(null,chunk__8181_10283,i__8183_10285);a__6507__auto__.push(arg__6508__auto___10286);
{
var G__10287 = seq__8180_10282;
var G__10288 = chunk__8181_10283;
var G__10289 = count__8182_10284;
var G__10290 = (i__8183_10285 + 1);
seq__8180_10282 = G__10287;
chunk__8181_10283 = G__10288;
count__8182_10284 = G__10289;
i__8183_10285 = G__10290;
continue;
}
} else
{var temp__4092__auto___10291 = cljs.core.seq.call(null,seq__8180_10282);if(temp__4092__auto___10291)
{var seq__8180_10292__$1 = temp__4092__auto___10291;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8180_10292__$1))
{var c__5632__auto___10293 = cljs.core.chunk_first.call(null,seq__8180_10292__$1);{
var G__10294 = cljs.core.chunk_rest.call(null,seq__8180_10292__$1);
var G__10295 = c__5632__auto___10293;
var G__10296 = cljs.core.count.call(null,c__5632__auto___10293);
var G__10297 = 0;
seq__8180_10282 = G__10294;
chunk__8181_10283 = G__10295;
count__8182_10284 = G__10296;
i__8183_10285 = G__10297;
continue;
}
} else
{var arg__6508__auto___10298 = cljs.core.first.call(null,seq__8180_10292__$1);a__6507__auto__.push(arg__6508__auto___10298);
{
var G__10299 = cljs.core.next.call(null,seq__8180_10292__$1);
var G__10300 = null;
var G__10301 = 0;
var G__10302 = 0;
seq__8180_10282 = G__10299;
chunk__8181_10283 = G__10300;
count__8182_10284 = G__10301;
i__8183_10285 = G__10302;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.script.apply(null,a__6507__auto__);
};
var script = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return script__delegate.call(this,args__6506__auto__);};
script.cljs$lang$maxFixedArity = 0;
script.cljs$lang$applyTo = (function (arglist__10303){
var args__6506__auto__ = cljs.core.seq(arglist__10303);
return script__delegate(args__6506__auto__);
});
script.cljs$core$IFn$_invoke$arity$variadic = script__delegate;
return script;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.section = (function() { 
var section__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__8188_10304 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__8189_10305 = null;var count__8190_10306 = 0;var i__8191_10307 = 0;while(true){
if((i__8191_10307 < count__8190_10306))
{var arg__6508__auto___10308 = cljs.core._nth.call(null,chunk__8189_10305,i__8191_10307);a__6507__auto__.push(arg__6508__auto___10308);
{
var G__10309 = seq__8188_10304;
var G__10310 = chunk__8189_10305;
var G__10311 = count__8190_10306;
var G__10312 = (i__8191_10307 + 1);
seq__8188_10304 = G__10309;
chunk__8189_10305 = G__10310;
count__8190_10306 = G__10311;
i__8191_10307 = G__10312;
continue;
}
} else
{var temp__4092__auto___10313 = cljs.core.seq.call(null,seq__8188_10304);if(temp__4092__auto___10313)
{var seq__8188_10314__$1 = temp__4092__auto___10313;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8188_10314__$1))
{var c__5632__auto___10315 = cljs.core.chunk_first.call(null,seq__8188_10314__$1);{
var G__10316 = cljs.core.chunk_rest.call(null,seq__8188_10314__$1);
var G__10317 = c__5632__auto___10315;
var G__10318 = cljs.core.count.call(null,c__5632__auto___10315);
var G__10319 = 0;
seq__8188_10304 = G__10316;
chunk__8189_10305 = G__10317;
count__8190_10306 = G__10318;
i__8191_10307 = G__10319;
continue;
}
} else
{var arg__6508__auto___10320 = cljs.core.first.call(null,seq__8188_10314__$1);a__6507__auto__.push(arg__6508__auto___10320);
{
var G__10321 = cljs.core.next.call(null,seq__8188_10314__$1);
var G__10322 = null;
var G__10323 = 0;
var G__10324 = 0;
seq__8188_10304 = G__10321;
chunk__8189_10305 = G__10322;
count__8190_10306 = G__10323;
i__8191_10307 = G__10324;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.section.apply(null,a__6507__auto__);
};
var section = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return section__delegate.call(this,args__6506__auto__);};
section.cljs$lang$maxFixedArity = 0;
section.cljs$lang$applyTo = (function (arglist__10325){
var args__6506__auto__ = cljs.core.seq(arglist__10325);
return section__delegate(args__6506__auto__);
});
section.cljs$core$IFn$_invoke$arity$variadic = section__delegate;
return section;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.select = (function() { 
var select__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__8196_10326 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__8197_10327 = null;var count__8198_10328 = 0;var i__8199_10329 = 0;while(true){
if((i__8199_10329 < count__8198_10328))
{var arg__6508__auto___10330 = cljs.core._nth.call(null,chunk__8197_10327,i__8199_10329);a__6507__auto__.push(arg__6508__auto___10330);
{
var G__10331 = seq__8196_10326;
var G__10332 = chunk__8197_10327;
var G__10333 = count__8198_10328;
var G__10334 = (i__8199_10329 + 1);
seq__8196_10326 = G__10331;
chunk__8197_10327 = G__10332;
count__8198_10328 = G__10333;
i__8199_10329 = G__10334;
continue;
}
} else
{var temp__4092__auto___10335 = cljs.core.seq.call(null,seq__8196_10326);if(temp__4092__auto___10335)
{var seq__8196_10336__$1 = temp__4092__auto___10335;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8196_10336__$1))
{var c__5632__auto___10337 = cljs.core.chunk_first.call(null,seq__8196_10336__$1);{
var G__10338 = cljs.core.chunk_rest.call(null,seq__8196_10336__$1);
var G__10339 = c__5632__auto___10337;
var G__10340 = cljs.core.count.call(null,c__5632__auto___10337);
var G__10341 = 0;
seq__8196_10326 = G__10338;
chunk__8197_10327 = G__10339;
count__8198_10328 = G__10340;
i__8199_10329 = G__10341;
continue;
}
} else
{var arg__6508__auto___10342 = cljs.core.first.call(null,seq__8196_10336__$1);a__6507__auto__.push(arg__6508__auto___10342);
{
var G__10343 = cljs.core.next.call(null,seq__8196_10336__$1);
var G__10344 = null;
var G__10345 = 0;
var G__10346 = 0;
seq__8196_10326 = G__10343;
chunk__8197_10327 = G__10344;
count__8198_10328 = G__10345;
i__8199_10329 = G__10346;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.select.apply(null,a__6507__auto__);
};
var select = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return select__delegate.call(this,args__6506__auto__);};
select.cljs$lang$maxFixedArity = 0;
select.cljs$lang$applyTo = (function (arglist__10347){
var args__6506__auto__ = cljs.core.seq(arglist__10347);
return select__delegate(args__6506__auto__);
});
select.cljs$core$IFn$_invoke$arity$variadic = select__delegate;
return select;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.small = (function() { 
var small__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__8204_10348 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__8205_10349 = null;var count__8206_10350 = 0;var i__8207_10351 = 0;while(true){
if((i__8207_10351 < count__8206_10350))
{var arg__6508__auto___10352 = cljs.core._nth.call(null,chunk__8205_10349,i__8207_10351);a__6507__auto__.push(arg__6508__auto___10352);
{
var G__10353 = seq__8204_10348;
var G__10354 = chunk__8205_10349;
var G__10355 = count__8206_10350;
var G__10356 = (i__8207_10351 + 1);
seq__8204_10348 = G__10353;
chunk__8205_10349 = G__10354;
count__8206_10350 = G__10355;
i__8207_10351 = G__10356;
continue;
}
} else
{var temp__4092__auto___10357 = cljs.core.seq.call(null,seq__8204_10348);if(temp__4092__auto___10357)
{var seq__8204_10358__$1 = temp__4092__auto___10357;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8204_10358__$1))
{var c__5632__auto___10359 = cljs.core.chunk_first.call(null,seq__8204_10358__$1);{
var G__10360 = cljs.core.chunk_rest.call(null,seq__8204_10358__$1);
var G__10361 = c__5632__auto___10359;
var G__10362 = cljs.core.count.call(null,c__5632__auto___10359);
var G__10363 = 0;
seq__8204_10348 = G__10360;
chunk__8205_10349 = G__10361;
count__8206_10350 = G__10362;
i__8207_10351 = G__10363;
continue;
}
} else
{var arg__6508__auto___10364 = cljs.core.first.call(null,seq__8204_10358__$1);a__6507__auto__.push(arg__6508__auto___10364);
{
var G__10365 = cljs.core.next.call(null,seq__8204_10358__$1);
var G__10366 = null;
var G__10367 = 0;
var G__10368 = 0;
seq__8204_10348 = G__10365;
chunk__8205_10349 = G__10366;
count__8206_10350 = G__10367;
i__8207_10351 = G__10368;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.small.apply(null,a__6507__auto__);
};
var small = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return small__delegate.call(this,args__6506__auto__);};
small.cljs$lang$maxFixedArity = 0;
small.cljs$lang$applyTo = (function (arglist__10369){
var args__6506__auto__ = cljs.core.seq(arglist__10369);
return small__delegate(args__6506__auto__);
});
small.cljs$core$IFn$_invoke$arity$variadic = small__delegate;
return small;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.source = (function() { 
var source__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__8212_10370 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__8213_10371 = null;var count__8214_10372 = 0;var i__8215_10373 = 0;while(true){
if((i__8215_10373 < count__8214_10372))
{var arg__6508__auto___10374 = cljs.core._nth.call(null,chunk__8213_10371,i__8215_10373);a__6507__auto__.push(arg__6508__auto___10374);
{
var G__10375 = seq__8212_10370;
var G__10376 = chunk__8213_10371;
var G__10377 = count__8214_10372;
var G__10378 = (i__8215_10373 + 1);
seq__8212_10370 = G__10375;
chunk__8213_10371 = G__10376;
count__8214_10372 = G__10377;
i__8215_10373 = G__10378;
continue;
}
} else
{var temp__4092__auto___10379 = cljs.core.seq.call(null,seq__8212_10370);if(temp__4092__auto___10379)
{var seq__8212_10380__$1 = temp__4092__auto___10379;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8212_10380__$1))
{var c__5632__auto___10381 = cljs.core.chunk_first.call(null,seq__8212_10380__$1);{
var G__10382 = cljs.core.chunk_rest.call(null,seq__8212_10380__$1);
var G__10383 = c__5632__auto___10381;
var G__10384 = cljs.core.count.call(null,c__5632__auto___10381);
var G__10385 = 0;
seq__8212_10370 = G__10382;
chunk__8213_10371 = G__10383;
count__8214_10372 = G__10384;
i__8215_10373 = G__10385;
continue;
}
} else
{var arg__6508__auto___10386 = cljs.core.first.call(null,seq__8212_10380__$1);a__6507__auto__.push(arg__6508__auto___10386);
{
var G__10387 = cljs.core.next.call(null,seq__8212_10380__$1);
var G__10388 = null;
var G__10389 = 0;
var G__10390 = 0;
seq__8212_10370 = G__10387;
chunk__8213_10371 = G__10388;
count__8214_10372 = G__10389;
i__8215_10373 = G__10390;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.source.apply(null,a__6507__auto__);
};
var source = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return source__delegate.call(this,args__6506__auto__);};
source.cljs$lang$maxFixedArity = 0;
source.cljs$lang$applyTo = (function (arglist__10391){
var args__6506__auto__ = cljs.core.seq(arglist__10391);
return source__delegate(args__6506__auto__);
});
source.cljs$core$IFn$_invoke$arity$variadic = source__delegate;
return source;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.span = (function() { 
var span__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__8220_10392 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__8221_10393 = null;var count__8222_10394 = 0;var i__8223_10395 = 0;while(true){
if((i__8223_10395 < count__8222_10394))
{var arg__6508__auto___10396 = cljs.core._nth.call(null,chunk__8221_10393,i__8223_10395);a__6507__auto__.push(arg__6508__auto___10396);
{
var G__10397 = seq__8220_10392;
var G__10398 = chunk__8221_10393;
var G__10399 = count__8222_10394;
var G__10400 = (i__8223_10395 + 1);
seq__8220_10392 = G__10397;
chunk__8221_10393 = G__10398;
count__8222_10394 = G__10399;
i__8223_10395 = G__10400;
continue;
}
} else
{var temp__4092__auto___10401 = cljs.core.seq.call(null,seq__8220_10392);if(temp__4092__auto___10401)
{var seq__8220_10402__$1 = temp__4092__auto___10401;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8220_10402__$1))
{var c__5632__auto___10403 = cljs.core.chunk_first.call(null,seq__8220_10402__$1);{
var G__10404 = cljs.core.chunk_rest.call(null,seq__8220_10402__$1);
var G__10405 = c__5632__auto___10403;
var G__10406 = cljs.core.count.call(null,c__5632__auto___10403);
var G__10407 = 0;
seq__8220_10392 = G__10404;
chunk__8221_10393 = G__10405;
count__8222_10394 = G__10406;
i__8223_10395 = G__10407;
continue;
}
} else
{var arg__6508__auto___10408 = cljs.core.first.call(null,seq__8220_10402__$1);a__6507__auto__.push(arg__6508__auto___10408);
{
var G__10409 = cljs.core.next.call(null,seq__8220_10402__$1);
var G__10410 = null;
var G__10411 = 0;
var G__10412 = 0;
seq__8220_10392 = G__10409;
chunk__8221_10393 = G__10410;
count__8222_10394 = G__10411;
i__8223_10395 = G__10412;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.span.apply(null,a__6507__auto__);
};
var span = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return span__delegate.call(this,args__6506__auto__);};
span.cljs$lang$maxFixedArity = 0;
span.cljs$lang$applyTo = (function (arglist__10413){
var args__6506__auto__ = cljs.core.seq(arglist__10413);
return span__delegate(args__6506__auto__);
});
span.cljs$core$IFn$_invoke$arity$variadic = span__delegate;
return span;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.strong = (function() { 
var strong__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__8228_10414 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__8229_10415 = null;var count__8230_10416 = 0;var i__8231_10417 = 0;while(true){
if((i__8231_10417 < count__8230_10416))
{var arg__6508__auto___10418 = cljs.core._nth.call(null,chunk__8229_10415,i__8231_10417);a__6507__auto__.push(arg__6508__auto___10418);
{
var G__10419 = seq__8228_10414;
var G__10420 = chunk__8229_10415;
var G__10421 = count__8230_10416;
var G__10422 = (i__8231_10417 + 1);
seq__8228_10414 = G__10419;
chunk__8229_10415 = G__10420;
count__8230_10416 = G__10421;
i__8231_10417 = G__10422;
continue;
}
} else
{var temp__4092__auto___10423 = cljs.core.seq.call(null,seq__8228_10414);if(temp__4092__auto___10423)
{var seq__8228_10424__$1 = temp__4092__auto___10423;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8228_10424__$1))
{var c__5632__auto___10425 = cljs.core.chunk_first.call(null,seq__8228_10424__$1);{
var G__10426 = cljs.core.chunk_rest.call(null,seq__8228_10424__$1);
var G__10427 = c__5632__auto___10425;
var G__10428 = cljs.core.count.call(null,c__5632__auto___10425);
var G__10429 = 0;
seq__8228_10414 = G__10426;
chunk__8229_10415 = G__10427;
count__8230_10416 = G__10428;
i__8231_10417 = G__10429;
continue;
}
} else
{var arg__6508__auto___10430 = cljs.core.first.call(null,seq__8228_10424__$1);a__6507__auto__.push(arg__6508__auto___10430);
{
var G__10431 = cljs.core.next.call(null,seq__8228_10424__$1);
var G__10432 = null;
var G__10433 = 0;
var G__10434 = 0;
seq__8228_10414 = G__10431;
chunk__8229_10415 = G__10432;
count__8230_10416 = G__10433;
i__8231_10417 = G__10434;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.strong.apply(null,a__6507__auto__);
};
var strong = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return strong__delegate.call(this,args__6506__auto__);};
strong.cljs$lang$maxFixedArity = 0;
strong.cljs$lang$applyTo = (function (arglist__10435){
var args__6506__auto__ = cljs.core.seq(arglist__10435);
return strong__delegate(args__6506__auto__);
});
strong.cljs$core$IFn$_invoke$arity$variadic = strong__delegate;
return strong;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.style = (function() { 
var style__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__8236_10436 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__8237_10437 = null;var count__8238_10438 = 0;var i__8239_10439 = 0;while(true){
if((i__8239_10439 < count__8238_10438))
{var arg__6508__auto___10440 = cljs.core._nth.call(null,chunk__8237_10437,i__8239_10439);a__6507__auto__.push(arg__6508__auto___10440);
{
var G__10441 = seq__8236_10436;
var G__10442 = chunk__8237_10437;
var G__10443 = count__8238_10438;
var G__10444 = (i__8239_10439 + 1);
seq__8236_10436 = G__10441;
chunk__8237_10437 = G__10442;
count__8238_10438 = G__10443;
i__8239_10439 = G__10444;
continue;
}
} else
{var temp__4092__auto___10445 = cljs.core.seq.call(null,seq__8236_10436);if(temp__4092__auto___10445)
{var seq__8236_10446__$1 = temp__4092__auto___10445;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8236_10446__$1))
{var c__5632__auto___10447 = cljs.core.chunk_first.call(null,seq__8236_10446__$1);{
var G__10448 = cljs.core.chunk_rest.call(null,seq__8236_10446__$1);
var G__10449 = c__5632__auto___10447;
var G__10450 = cljs.core.count.call(null,c__5632__auto___10447);
var G__10451 = 0;
seq__8236_10436 = G__10448;
chunk__8237_10437 = G__10449;
count__8238_10438 = G__10450;
i__8239_10439 = G__10451;
continue;
}
} else
{var arg__6508__auto___10452 = cljs.core.first.call(null,seq__8236_10446__$1);a__6507__auto__.push(arg__6508__auto___10452);
{
var G__10453 = cljs.core.next.call(null,seq__8236_10446__$1);
var G__10454 = null;
var G__10455 = 0;
var G__10456 = 0;
seq__8236_10436 = G__10453;
chunk__8237_10437 = G__10454;
count__8238_10438 = G__10455;
i__8239_10439 = G__10456;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.style.apply(null,a__6507__auto__);
};
var style = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return style__delegate.call(this,args__6506__auto__);};
style.cljs$lang$maxFixedArity = 0;
style.cljs$lang$applyTo = (function (arglist__10457){
var args__6506__auto__ = cljs.core.seq(arglist__10457);
return style__delegate(args__6506__auto__);
});
style.cljs$core$IFn$_invoke$arity$variadic = style__delegate;
return style;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.sub = (function() { 
var sub__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__8244_10458 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__8245_10459 = null;var count__8246_10460 = 0;var i__8247_10461 = 0;while(true){
if((i__8247_10461 < count__8246_10460))
{var arg__6508__auto___10462 = cljs.core._nth.call(null,chunk__8245_10459,i__8247_10461);a__6507__auto__.push(arg__6508__auto___10462);
{
var G__10463 = seq__8244_10458;
var G__10464 = chunk__8245_10459;
var G__10465 = count__8246_10460;
var G__10466 = (i__8247_10461 + 1);
seq__8244_10458 = G__10463;
chunk__8245_10459 = G__10464;
count__8246_10460 = G__10465;
i__8247_10461 = G__10466;
continue;
}
} else
{var temp__4092__auto___10467 = cljs.core.seq.call(null,seq__8244_10458);if(temp__4092__auto___10467)
{var seq__8244_10468__$1 = temp__4092__auto___10467;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8244_10468__$1))
{var c__5632__auto___10469 = cljs.core.chunk_first.call(null,seq__8244_10468__$1);{
var G__10470 = cljs.core.chunk_rest.call(null,seq__8244_10468__$1);
var G__10471 = c__5632__auto___10469;
var G__10472 = cljs.core.count.call(null,c__5632__auto___10469);
var G__10473 = 0;
seq__8244_10458 = G__10470;
chunk__8245_10459 = G__10471;
count__8246_10460 = G__10472;
i__8247_10461 = G__10473;
continue;
}
} else
{var arg__6508__auto___10474 = cljs.core.first.call(null,seq__8244_10468__$1);a__6507__auto__.push(arg__6508__auto___10474);
{
var G__10475 = cljs.core.next.call(null,seq__8244_10468__$1);
var G__10476 = null;
var G__10477 = 0;
var G__10478 = 0;
seq__8244_10458 = G__10475;
chunk__8245_10459 = G__10476;
count__8246_10460 = G__10477;
i__8247_10461 = G__10478;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.sub.apply(null,a__6507__auto__);
};
var sub = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return sub__delegate.call(this,args__6506__auto__);};
sub.cljs$lang$maxFixedArity = 0;
sub.cljs$lang$applyTo = (function (arglist__10479){
var args__6506__auto__ = cljs.core.seq(arglist__10479);
return sub__delegate(args__6506__auto__);
});
sub.cljs$core$IFn$_invoke$arity$variadic = sub__delegate;
return sub;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.summary = (function() { 
var summary__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__8252_10480 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__8253_10481 = null;var count__8254_10482 = 0;var i__8255_10483 = 0;while(true){
if((i__8255_10483 < count__8254_10482))
{var arg__6508__auto___10484 = cljs.core._nth.call(null,chunk__8253_10481,i__8255_10483);a__6507__auto__.push(arg__6508__auto___10484);
{
var G__10485 = seq__8252_10480;
var G__10486 = chunk__8253_10481;
var G__10487 = count__8254_10482;
var G__10488 = (i__8255_10483 + 1);
seq__8252_10480 = G__10485;
chunk__8253_10481 = G__10486;
count__8254_10482 = G__10487;
i__8255_10483 = G__10488;
continue;
}
} else
{var temp__4092__auto___10489 = cljs.core.seq.call(null,seq__8252_10480);if(temp__4092__auto___10489)
{var seq__8252_10490__$1 = temp__4092__auto___10489;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8252_10490__$1))
{var c__5632__auto___10491 = cljs.core.chunk_first.call(null,seq__8252_10490__$1);{
var G__10492 = cljs.core.chunk_rest.call(null,seq__8252_10490__$1);
var G__10493 = c__5632__auto___10491;
var G__10494 = cljs.core.count.call(null,c__5632__auto___10491);
var G__10495 = 0;
seq__8252_10480 = G__10492;
chunk__8253_10481 = G__10493;
count__8254_10482 = G__10494;
i__8255_10483 = G__10495;
continue;
}
} else
{var arg__6508__auto___10496 = cljs.core.first.call(null,seq__8252_10490__$1);a__6507__auto__.push(arg__6508__auto___10496);
{
var G__10497 = cljs.core.next.call(null,seq__8252_10490__$1);
var G__10498 = null;
var G__10499 = 0;
var G__10500 = 0;
seq__8252_10480 = G__10497;
chunk__8253_10481 = G__10498;
count__8254_10482 = G__10499;
i__8255_10483 = G__10500;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.summary.apply(null,a__6507__auto__);
};
var summary = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return summary__delegate.call(this,args__6506__auto__);};
summary.cljs$lang$maxFixedArity = 0;
summary.cljs$lang$applyTo = (function (arglist__10501){
var args__6506__auto__ = cljs.core.seq(arglist__10501);
return summary__delegate(args__6506__auto__);
});
summary.cljs$core$IFn$_invoke$arity$variadic = summary__delegate;
return summary;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.sup = (function() { 
var sup__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__8260_10502 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__8261_10503 = null;var count__8262_10504 = 0;var i__8263_10505 = 0;while(true){
if((i__8263_10505 < count__8262_10504))
{var arg__6508__auto___10506 = cljs.core._nth.call(null,chunk__8261_10503,i__8263_10505);a__6507__auto__.push(arg__6508__auto___10506);
{
var G__10507 = seq__8260_10502;
var G__10508 = chunk__8261_10503;
var G__10509 = count__8262_10504;
var G__10510 = (i__8263_10505 + 1);
seq__8260_10502 = G__10507;
chunk__8261_10503 = G__10508;
count__8262_10504 = G__10509;
i__8263_10505 = G__10510;
continue;
}
} else
{var temp__4092__auto___10511 = cljs.core.seq.call(null,seq__8260_10502);if(temp__4092__auto___10511)
{var seq__8260_10512__$1 = temp__4092__auto___10511;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8260_10512__$1))
{var c__5632__auto___10513 = cljs.core.chunk_first.call(null,seq__8260_10512__$1);{
var G__10514 = cljs.core.chunk_rest.call(null,seq__8260_10512__$1);
var G__10515 = c__5632__auto___10513;
var G__10516 = cljs.core.count.call(null,c__5632__auto___10513);
var G__10517 = 0;
seq__8260_10502 = G__10514;
chunk__8261_10503 = G__10515;
count__8262_10504 = G__10516;
i__8263_10505 = G__10517;
continue;
}
} else
{var arg__6508__auto___10518 = cljs.core.first.call(null,seq__8260_10512__$1);a__6507__auto__.push(arg__6508__auto___10518);
{
var G__10519 = cljs.core.next.call(null,seq__8260_10512__$1);
var G__10520 = null;
var G__10521 = 0;
var G__10522 = 0;
seq__8260_10502 = G__10519;
chunk__8261_10503 = G__10520;
count__8262_10504 = G__10521;
i__8263_10505 = G__10522;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.sup.apply(null,a__6507__auto__);
};
var sup = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return sup__delegate.call(this,args__6506__auto__);};
sup.cljs$lang$maxFixedArity = 0;
sup.cljs$lang$applyTo = (function (arglist__10523){
var args__6506__auto__ = cljs.core.seq(arglist__10523);
return sup__delegate(args__6506__auto__);
});
sup.cljs$core$IFn$_invoke$arity$variadic = sup__delegate;
return sup;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.table = (function() { 
var table__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__8268_10524 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__8269_10525 = null;var count__8270_10526 = 0;var i__8271_10527 = 0;while(true){
if((i__8271_10527 < count__8270_10526))
{var arg__6508__auto___10528 = cljs.core._nth.call(null,chunk__8269_10525,i__8271_10527);a__6507__auto__.push(arg__6508__auto___10528);
{
var G__10529 = seq__8268_10524;
var G__10530 = chunk__8269_10525;
var G__10531 = count__8270_10526;
var G__10532 = (i__8271_10527 + 1);
seq__8268_10524 = G__10529;
chunk__8269_10525 = G__10530;
count__8270_10526 = G__10531;
i__8271_10527 = G__10532;
continue;
}
} else
{var temp__4092__auto___10533 = cljs.core.seq.call(null,seq__8268_10524);if(temp__4092__auto___10533)
{var seq__8268_10534__$1 = temp__4092__auto___10533;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8268_10534__$1))
{var c__5632__auto___10535 = cljs.core.chunk_first.call(null,seq__8268_10534__$1);{
var G__10536 = cljs.core.chunk_rest.call(null,seq__8268_10534__$1);
var G__10537 = c__5632__auto___10535;
var G__10538 = cljs.core.count.call(null,c__5632__auto___10535);
var G__10539 = 0;
seq__8268_10524 = G__10536;
chunk__8269_10525 = G__10537;
count__8270_10526 = G__10538;
i__8271_10527 = G__10539;
continue;
}
} else
{var arg__6508__auto___10540 = cljs.core.first.call(null,seq__8268_10534__$1);a__6507__auto__.push(arg__6508__auto___10540);
{
var G__10541 = cljs.core.next.call(null,seq__8268_10534__$1);
var G__10542 = null;
var G__10543 = 0;
var G__10544 = 0;
seq__8268_10524 = G__10541;
chunk__8269_10525 = G__10542;
count__8270_10526 = G__10543;
i__8271_10527 = G__10544;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.table.apply(null,a__6507__auto__);
};
var table = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return table__delegate.call(this,args__6506__auto__);};
table.cljs$lang$maxFixedArity = 0;
table.cljs$lang$applyTo = (function (arglist__10545){
var args__6506__auto__ = cljs.core.seq(arglist__10545);
return table__delegate(args__6506__auto__);
});
table.cljs$core$IFn$_invoke$arity$variadic = table__delegate;
return table;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.tbody = (function() { 
var tbody__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__8276_10546 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__8277_10547 = null;var count__8278_10548 = 0;var i__8279_10549 = 0;while(true){
if((i__8279_10549 < count__8278_10548))
{var arg__6508__auto___10550 = cljs.core._nth.call(null,chunk__8277_10547,i__8279_10549);a__6507__auto__.push(arg__6508__auto___10550);
{
var G__10551 = seq__8276_10546;
var G__10552 = chunk__8277_10547;
var G__10553 = count__8278_10548;
var G__10554 = (i__8279_10549 + 1);
seq__8276_10546 = G__10551;
chunk__8277_10547 = G__10552;
count__8278_10548 = G__10553;
i__8279_10549 = G__10554;
continue;
}
} else
{var temp__4092__auto___10555 = cljs.core.seq.call(null,seq__8276_10546);if(temp__4092__auto___10555)
{var seq__8276_10556__$1 = temp__4092__auto___10555;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8276_10556__$1))
{var c__5632__auto___10557 = cljs.core.chunk_first.call(null,seq__8276_10556__$1);{
var G__10558 = cljs.core.chunk_rest.call(null,seq__8276_10556__$1);
var G__10559 = c__5632__auto___10557;
var G__10560 = cljs.core.count.call(null,c__5632__auto___10557);
var G__10561 = 0;
seq__8276_10546 = G__10558;
chunk__8277_10547 = G__10559;
count__8278_10548 = G__10560;
i__8279_10549 = G__10561;
continue;
}
} else
{var arg__6508__auto___10562 = cljs.core.first.call(null,seq__8276_10556__$1);a__6507__auto__.push(arg__6508__auto___10562);
{
var G__10563 = cljs.core.next.call(null,seq__8276_10556__$1);
var G__10564 = null;
var G__10565 = 0;
var G__10566 = 0;
seq__8276_10546 = G__10563;
chunk__8277_10547 = G__10564;
count__8278_10548 = G__10565;
i__8279_10549 = G__10566;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.tbody.apply(null,a__6507__auto__);
};
var tbody = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return tbody__delegate.call(this,args__6506__auto__);};
tbody.cljs$lang$maxFixedArity = 0;
tbody.cljs$lang$applyTo = (function (arglist__10567){
var args__6506__auto__ = cljs.core.seq(arglist__10567);
return tbody__delegate(args__6506__auto__);
});
tbody.cljs$core$IFn$_invoke$arity$variadic = tbody__delegate;
return tbody;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.td = (function() { 
var td__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__8284_10568 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__8285_10569 = null;var count__8286_10570 = 0;var i__8287_10571 = 0;while(true){
if((i__8287_10571 < count__8286_10570))
{var arg__6508__auto___10572 = cljs.core._nth.call(null,chunk__8285_10569,i__8287_10571);a__6507__auto__.push(arg__6508__auto___10572);
{
var G__10573 = seq__8284_10568;
var G__10574 = chunk__8285_10569;
var G__10575 = count__8286_10570;
var G__10576 = (i__8287_10571 + 1);
seq__8284_10568 = G__10573;
chunk__8285_10569 = G__10574;
count__8286_10570 = G__10575;
i__8287_10571 = G__10576;
continue;
}
} else
{var temp__4092__auto___10577 = cljs.core.seq.call(null,seq__8284_10568);if(temp__4092__auto___10577)
{var seq__8284_10578__$1 = temp__4092__auto___10577;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8284_10578__$1))
{var c__5632__auto___10579 = cljs.core.chunk_first.call(null,seq__8284_10578__$1);{
var G__10580 = cljs.core.chunk_rest.call(null,seq__8284_10578__$1);
var G__10581 = c__5632__auto___10579;
var G__10582 = cljs.core.count.call(null,c__5632__auto___10579);
var G__10583 = 0;
seq__8284_10568 = G__10580;
chunk__8285_10569 = G__10581;
count__8286_10570 = G__10582;
i__8287_10571 = G__10583;
continue;
}
} else
{var arg__6508__auto___10584 = cljs.core.first.call(null,seq__8284_10578__$1);a__6507__auto__.push(arg__6508__auto___10584);
{
var G__10585 = cljs.core.next.call(null,seq__8284_10578__$1);
var G__10586 = null;
var G__10587 = 0;
var G__10588 = 0;
seq__8284_10568 = G__10585;
chunk__8285_10569 = G__10586;
count__8286_10570 = G__10587;
i__8287_10571 = G__10588;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.td.apply(null,a__6507__auto__);
};
var td = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return td__delegate.call(this,args__6506__auto__);};
td.cljs$lang$maxFixedArity = 0;
td.cljs$lang$applyTo = (function (arglist__10589){
var args__6506__auto__ = cljs.core.seq(arglist__10589);
return td__delegate(args__6506__auto__);
});
td.cljs$core$IFn$_invoke$arity$variadic = td__delegate;
return td;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.textarea = (function() { 
var textarea__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__8292_10590 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__8293_10591 = null;var count__8294_10592 = 0;var i__8295_10593 = 0;while(true){
if((i__8295_10593 < count__8294_10592))
{var arg__6508__auto___10594 = cljs.core._nth.call(null,chunk__8293_10591,i__8295_10593);a__6507__auto__.push(arg__6508__auto___10594);
{
var G__10595 = seq__8292_10590;
var G__10596 = chunk__8293_10591;
var G__10597 = count__8294_10592;
var G__10598 = (i__8295_10593 + 1);
seq__8292_10590 = G__10595;
chunk__8293_10591 = G__10596;
count__8294_10592 = G__10597;
i__8295_10593 = G__10598;
continue;
}
} else
{var temp__4092__auto___10599 = cljs.core.seq.call(null,seq__8292_10590);if(temp__4092__auto___10599)
{var seq__8292_10600__$1 = temp__4092__auto___10599;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8292_10600__$1))
{var c__5632__auto___10601 = cljs.core.chunk_first.call(null,seq__8292_10600__$1);{
var G__10602 = cljs.core.chunk_rest.call(null,seq__8292_10600__$1);
var G__10603 = c__5632__auto___10601;
var G__10604 = cljs.core.count.call(null,c__5632__auto___10601);
var G__10605 = 0;
seq__8292_10590 = G__10602;
chunk__8293_10591 = G__10603;
count__8294_10592 = G__10604;
i__8295_10593 = G__10605;
continue;
}
} else
{var arg__6508__auto___10606 = cljs.core.first.call(null,seq__8292_10600__$1);a__6507__auto__.push(arg__6508__auto___10606);
{
var G__10607 = cljs.core.next.call(null,seq__8292_10600__$1);
var G__10608 = null;
var G__10609 = 0;
var G__10610 = 0;
seq__8292_10590 = G__10607;
chunk__8293_10591 = G__10608;
count__8294_10592 = G__10609;
i__8295_10593 = G__10610;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.textarea.apply(null,a__6507__auto__);
};
var textarea = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return textarea__delegate.call(this,args__6506__auto__);};
textarea.cljs$lang$maxFixedArity = 0;
textarea.cljs$lang$applyTo = (function (arglist__10611){
var args__6506__auto__ = cljs.core.seq(arglist__10611);
return textarea__delegate(args__6506__auto__);
});
textarea.cljs$core$IFn$_invoke$arity$variadic = textarea__delegate;
return textarea;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.tfoot = (function() { 
var tfoot__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__8300_10612 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__8301_10613 = null;var count__8302_10614 = 0;var i__8303_10615 = 0;while(true){
if((i__8303_10615 < count__8302_10614))
{var arg__6508__auto___10616 = cljs.core._nth.call(null,chunk__8301_10613,i__8303_10615);a__6507__auto__.push(arg__6508__auto___10616);
{
var G__10617 = seq__8300_10612;
var G__10618 = chunk__8301_10613;
var G__10619 = count__8302_10614;
var G__10620 = (i__8303_10615 + 1);
seq__8300_10612 = G__10617;
chunk__8301_10613 = G__10618;
count__8302_10614 = G__10619;
i__8303_10615 = G__10620;
continue;
}
} else
{var temp__4092__auto___10621 = cljs.core.seq.call(null,seq__8300_10612);if(temp__4092__auto___10621)
{var seq__8300_10622__$1 = temp__4092__auto___10621;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8300_10622__$1))
{var c__5632__auto___10623 = cljs.core.chunk_first.call(null,seq__8300_10622__$1);{
var G__10624 = cljs.core.chunk_rest.call(null,seq__8300_10622__$1);
var G__10625 = c__5632__auto___10623;
var G__10626 = cljs.core.count.call(null,c__5632__auto___10623);
var G__10627 = 0;
seq__8300_10612 = G__10624;
chunk__8301_10613 = G__10625;
count__8302_10614 = G__10626;
i__8303_10615 = G__10627;
continue;
}
} else
{var arg__6508__auto___10628 = cljs.core.first.call(null,seq__8300_10622__$1);a__6507__auto__.push(arg__6508__auto___10628);
{
var G__10629 = cljs.core.next.call(null,seq__8300_10622__$1);
var G__10630 = null;
var G__10631 = 0;
var G__10632 = 0;
seq__8300_10612 = G__10629;
chunk__8301_10613 = G__10630;
count__8302_10614 = G__10631;
i__8303_10615 = G__10632;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.tfoot.apply(null,a__6507__auto__);
};
var tfoot = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return tfoot__delegate.call(this,args__6506__auto__);};
tfoot.cljs$lang$maxFixedArity = 0;
tfoot.cljs$lang$applyTo = (function (arglist__10633){
var args__6506__auto__ = cljs.core.seq(arglist__10633);
return tfoot__delegate(args__6506__auto__);
});
tfoot.cljs$core$IFn$_invoke$arity$variadic = tfoot__delegate;
return tfoot;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.th = (function() { 
var th__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__8308_10634 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__8309_10635 = null;var count__8310_10636 = 0;var i__8311_10637 = 0;while(true){
if((i__8311_10637 < count__8310_10636))
{var arg__6508__auto___10638 = cljs.core._nth.call(null,chunk__8309_10635,i__8311_10637);a__6507__auto__.push(arg__6508__auto___10638);
{
var G__10639 = seq__8308_10634;
var G__10640 = chunk__8309_10635;
var G__10641 = count__8310_10636;
var G__10642 = (i__8311_10637 + 1);
seq__8308_10634 = G__10639;
chunk__8309_10635 = G__10640;
count__8310_10636 = G__10641;
i__8311_10637 = G__10642;
continue;
}
} else
{var temp__4092__auto___10643 = cljs.core.seq.call(null,seq__8308_10634);if(temp__4092__auto___10643)
{var seq__8308_10644__$1 = temp__4092__auto___10643;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8308_10644__$1))
{var c__5632__auto___10645 = cljs.core.chunk_first.call(null,seq__8308_10644__$1);{
var G__10646 = cljs.core.chunk_rest.call(null,seq__8308_10644__$1);
var G__10647 = c__5632__auto___10645;
var G__10648 = cljs.core.count.call(null,c__5632__auto___10645);
var G__10649 = 0;
seq__8308_10634 = G__10646;
chunk__8309_10635 = G__10647;
count__8310_10636 = G__10648;
i__8311_10637 = G__10649;
continue;
}
} else
{var arg__6508__auto___10650 = cljs.core.first.call(null,seq__8308_10644__$1);a__6507__auto__.push(arg__6508__auto___10650);
{
var G__10651 = cljs.core.next.call(null,seq__8308_10644__$1);
var G__10652 = null;
var G__10653 = 0;
var G__10654 = 0;
seq__8308_10634 = G__10651;
chunk__8309_10635 = G__10652;
count__8310_10636 = G__10653;
i__8311_10637 = G__10654;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.th.apply(null,a__6507__auto__);
};
var th = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return th__delegate.call(this,args__6506__auto__);};
th.cljs$lang$maxFixedArity = 0;
th.cljs$lang$applyTo = (function (arglist__10655){
var args__6506__auto__ = cljs.core.seq(arglist__10655);
return th__delegate(args__6506__auto__);
});
th.cljs$core$IFn$_invoke$arity$variadic = th__delegate;
return th;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.thead = (function() { 
var thead__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__8316_10656 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__8317_10657 = null;var count__8318_10658 = 0;var i__8319_10659 = 0;while(true){
if((i__8319_10659 < count__8318_10658))
{var arg__6508__auto___10660 = cljs.core._nth.call(null,chunk__8317_10657,i__8319_10659);a__6507__auto__.push(arg__6508__auto___10660);
{
var G__10661 = seq__8316_10656;
var G__10662 = chunk__8317_10657;
var G__10663 = count__8318_10658;
var G__10664 = (i__8319_10659 + 1);
seq__8316_10656 = G__10661;
chunk__8317_10657 = G__10662;
count__8318_10658 = G__10663;
i__8319_10659 = G__10664;
continue;
}
} else
{var temp__4092__auto___10665 = cljs.core.seq.call(null,seq__8316_10656);if(temp__4092__auto___10665)
{var seq__8316_10666__$1 = temp__4092__auto___10665;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8316_10666__$1))
{var c__5632__auto___10667 = cljs.core.chunk_first.call(null,seq__8316_10666__$1);{
var G__10668 = cljs.core.chunk_rest.call(null,seq__8316_10666__$1);
var G__10669 = c__5632__auto___10667;
var G__10670 = cljs.core.count.call(null,c__5632__auto___10667);
var G__10671 = 0;
seq__8316_10656 = G__10668;
chunk__8317_10657 = G__10669;
count__8318_10658 = G__10670;
i__8319_10659 = G__10671;
continue;
}
} else
{var arg__6508__auto___10672 = cljs.core.first.call(null,seq__8316_10666__$1);a__6507__auto__.push(arg__6508__auto___10672);
{
var G__10673 = cljs.core.next.call(null,seq__8316_10666__$1);
var G__10674 = null;
var G__10675 = 0;
var G__10676 = 0;
seq__8316_10656 = G__10673;
chunk__8317_10657 = G__10674;
count__8318_10658 = G__10675;
i__8319_10659 = G__10676;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.thead.apply(null,a__6507__auto__);
};
var thead = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return thead__delegate.call(this,args__6506__auto__);};
thead.cljs$lang$maxFixedArity = 0;
thead.cljs$lang$applyTo = (function (arglist__10677){
var args__6506__auto__ = cljs.core.seq(arglist__10677);
return thead__delegate(args__6506__auto__);
});
thead.cljs$core$IFn$_invoke$arity$variadic = thead__delegate;
return thead;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.time = (function() { 
var time__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__8324_10678 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__8325_10679 = null;var count__8326_10680 = 0;var i__8327_10681 = 0;while(true){
if((i__8327_10681 < count__8326_10680))
{var arg__6508__auto___10682 = cljs.core._nth.call(null,chunk__8325_10679,i__8327_10681);a__6507__auto__.push(arg__6508__auto___10682);
{
var G__10683 = seq__8324_10678;
var G__10684 = chunk__8325_10679;
var G__10685 = count__8326_10680;
var G__10686 = (i__8327_10681 + 1);
seq__8324_10678 = G__10683;
chunk__8325_10679 = G__10684;
count__8326_10680 = G__10685;
i__8327_10681 = G__10686;
continue;
}
} else
{var temp__4092__auto___10687 = cljs.core.seq.call(null,seq__8324_10678);if(temp__4092__auto___10687)
{var seq__8324_10688__$1 = temp__4092__auto___10687;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8324_10688__$1))
{var c__5632__auto___10689 = cljs.core.chunk_first.call(null,seq__8324_10688__$1);{
var G__10690 = cljs.core.chunk_rest.call(null,seq__8324_10688__$1);
var G__10691 = c__5632__auto___10689;
var G__10692 = cljs.core.count.call(null,c__5632__auto___10689);
var G__10693 = 0;
seq__8324_10678 = G__10690;
chunk__8325_10679 = G__10691;
count__8326_10680 = G__10692;
i__8327_10681 = G__10693;
continue;
}
} else
{var arg__6508__auto___10694 = cljs.core.first.call(null,seq__8324_10688__$1);a__6507__auto__.push(arg__6508__auto___10694);
{
var G__10695 = cljs.core.next.call(null,seq__8324_10688__$1);
var G__10696 = null;
var G__10697 = 0;
var G__10698 = 0;
seq__8324_10678 = G__10695;
chunk__8325_10679 = G__10696;
count__8326_10680 = G__10697;
i__8327_10681 = G__10698;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.time.apply(null,a__6507__auto__);
};
var time = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return time__delegate.call(this,args__6506__auto__);};
time.cljs$lang$maxFixedArity = 0;
time.cljs$lang$applyTo = (function (arglist__10699){
var args__6506__auto__ = cljs.core.seq(arglist__10699);
return time__delegate(args__6506__auto__);
});
time.cljs$core$IFn$_invoke$arity$variadic = time__delegate;
return time;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.title = (function() { 
var title__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__8332_10700 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__8333_10701 = null;var count__8334_10702 = 0;var i__8335_10703 = 0;while(true){
if((i__8335_10703 < count__8334_10702))
{var arg__6508__auto___10704 = cljs.core._nth.call(null,chunk__8333_10701,i__8335_10703);a__6507__auto__.push(arg__6508__auto___10704);
{
var G__10705 = seq__8332_10700;
var G__10706 = chunk__8333_10701;
var G__10707 = count__8334_10702;
var G__10708 = (i__8335_10703 + 1);
seq__8332_10700 = G__10705;
chunk__8333_10701 = G__10706;
count__8334_10702 = G__10707;
i__8335_10703 = G__10708;
continue;
}
} else
{var temp__4092__auto___10709 = cljs.core.seq.call(null,seq__8332_10700);if(temp__4092__auto___10709)
{var seq__8332_10710__$1 = temp__4092__auto___10709;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8332_10710__$1))
{var c__5632__auto___10711 = cljs.core.chunk_first.call(null,seq__8332_10710__$1);{
var G__10712 = cljs.core.chunk_rest.call(null,seq__8332_10710__$1);
var G__10713 = c__5632__auto___10711;
var G__10714 = cljs.core.count.call(null,c__5632__auto___10711);
var G__10715 = 0;
seq__8332_10700 = G__10712;
chunk__8333_10701 = G__10713;
count__8334_10702 = G__10714;
i__8335_10703 = G__10715;
continue;
}
} else
{var arg__6508__auto___10716 = cljs.core.first.call(null,seq__8332_10710__$1);a__6507__auto__.push(arg__6508__auto___10716);
{
var G__10717 = cljs.core.next.call(null,seq__8332_10710__$1);
var G__10718 = null;
var G__10719 = 0;
var G__10720 = 0;
seq__8332_10700 = G__10717;
chunk__8333_10701 = G__10718;
count__8334_10702 = G__10719;
i__8335_10703 = G__10720;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.title.apply(null,a__6507__auto__);
};
var title = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return title__delegate.call(this,args__6506__auto__);};
title.cljs$lang$maxFixedArity = 0;
title.cljs$lang$applyTo = (function (arglist__10721){
var args__6506__auto__ = cljs.core.seq(arglist__10721);
return title__delegate(args__6506__auto__);
});
title.cljs$core$IFn$_invoke$arity$variadic = title__delegate;
return title;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.tr = (function() { 
var tr__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__8340_10722 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__8341_10723 = null;var count__8342_10724 = 0;var i__8343_10725 = 0;while(true){
if((i__8343_10725 < count__8342_10724))
{var arg__6508__auto___10726 = cljs.core._nth.call(null,chunk__8341_10723,i__8343_10725);a__6507__auto__.push(arg__6508__auto___10726);
{
var G__10727 = seq__8340_10722;
var G__10728 = chunk__8341_10723;
var G__10729 = count__8342_10724;
var G__10730 = (i__8343_10725 + 1);
seq__8340_10722 = G__10727;
chunk__8341_10723 = G__10728;
count__8342_10724 = G__10729;
i__8343_10725 = G__10730;
continue;
}
} else
{var temp__4092__auto___10731 = cljs.core.seq.call(null,seq__8340_10722);if(temp__4092__auto___10731)
{var seq__8340_10732__$1 = temp__4092__auto___10731;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8340_10732__$1))
{var c__5632__auto___10733 = cljs.core.chunk_first.call(null,seq__8340_10732__$1);{
var G__10734 = cljs.core.chunk_rest.call(null,seq__8340_10732__$1);
var G__10735 = c__5632__auto___10733;
var G__10736 = cljs.core.count.call(null,c__5632__auto___10733);
var G__10737 = 0;
seq__8340_10722 = G__10734;
chunk__8341_10723 = G__10735;
count__8342_10724 = G__10736;
i__8343_10725 = G__10737;
continue;
}
} else
{var arg__6508__auto___10738 = cljs.core.first.call(null,seq__8340_10732__$1);a__6507__auto__.push(arg__6508__auto___10738);
{
var G__10739 = cljs.core.next.call(null,seq__8340_10732__$1);
var G__10740 = null;
var G__10741 = 0;
var G__10742 = 0;
seq__8340_10722 = G__10739;
chunk__8341_10723 = G__10740;
count__8342_10724 = G__10741;
i__8343_10725 = G__10742;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.tr.apply(null,a__6507__auto__);
};
var tr = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return tr__delegate.call(this,args__6506__auto__);};
tr.cljs$lang$maxFixedArity = 0;
tr.cljs$lang$applyTo = (function (arglist__10743){
var args__6506__auto__ = cljs.core.seq(arglist__10743);
return tr__delegate(args__6506__auto__);
});
tr.cljs$core$IFn$_invoke$arity$variadic = tr__delegate;
return tr;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.track = (function() { 
var track__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__8348_10744 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__8349_10745 = null;var count__8350_10746 = 0;var i__8351_10747 = 0;while(true){
if((i__8351_10747 < count__8350_10746))
{var arg__6508__auto___10748 = cljs.core._nth.call(null,chunk__8349_10745,i__8351_10747);a__6507__auto__.push(arg__6508__auto___10748);
{
var G__10749 = seq__8348_10744;
var G__10750 = chunk__8349_10745;
var G__10751 = count__8350_10746;
var G__10752 = (i__8351_10747 + 1);
seq__8348_10744 = G__10749;
chunk__8349_10745 = G__10750;
count__8350_10746 = G__10751;
i__8351_10747 = G__10752;
continue;
}
} else
{var temp__4092__auto___10753 = cljs.core.seq.call(null,seq__8348_10744);if(temp__4092__auto___10753)
{var seq__8348_10754__$1 = temp__4092__auto___10753;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8348_10754__$1))
{var c__5632__auto___10755 = cljs.core.chunk_first.call(null,seq__8348_10754__$1);{
var G__10756 = cljs.core.chunk_rest.call(null,seq__8348_10754__$1);
var G__10757 = c__5632__auto___10755;
var G__10758 = cljs.core.count.call(null,c__5632__auto___10755);
var G__10759 = 0;
seq__8348_10744 = G__10756;
chunk__8349_10745 = G__10757;
count__8350_10746 = G__10758;
i__8351_10747 = G__10759;
continue;
}
} else
{var arg__6508__auto___10760 = cljs.core.first.call(null,seq__8348_10754__$1);a__6507__auto__.push(arg__6508__auto___10760);
{
var G__10761 = cljs.core.next.call(null,seq__8348_10754__$1);
var G__10762 = null;
var G__10763 = 0;
var G__10764 = 0;
seq__8348_10744 = G__10761;
chunk__8349_10745 = G__10762;
count__8350_10746 = G__10763;
i__8351_10747 = G__10764;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.track.apply(null,a__6507__auto__);
};
var track = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return track__delegate.call(this,args__6506__auto__);};
track.cljs$lang$maxFixedArity = 0;
track.cljs$lang$applyTo = (function (arglist__10765){
var args__6506__auto__ = cljs.core.seq(arglist__10765);
return track__delegate(args__6506__auto__);
});
track.cljs$core$IFn$_invoke$arity$variadic = track__delegate;
return track;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.u = (function() { 
var u__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__8356_10766 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__8357_10767 = null;var count__8358_10768 = 0;var i__8359_10769 = 0;while(true){
if((i__8359_10769 < count__8358_10768))
{var arg__6508__auto___10770 = cljs.core._nth.call(null,chunk__8357_10767,i__8359_10769);a__6507__auto__.push(arg__6508__auto___10770);
{
var G__10771 = seq__8356_10766;
var G__10772 = chunk__8357_10767;
var G__10773 = count__8358_10768;
var G__10774 = (i__8359_10769 + 1);
seq__8356_10766 = G__10771;
chunk__8357_10767 = G__10772;
count__8358_10768 = G__10773;
i__8359_10769 = G__10774;
continue;
}
} else
{var temp__4092__auto___10775 = cljs.core.seq.call(null,seq__8356_10766);if(temp__4092__auto___10775)
{var seq__8356_10776__$1 = temp__4092__auto___10775;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8356_10776__$1))
{var c__5632__auto___10777 = cljs.core.chunk_first.call(null,seq__8356_10776__$1);{
var G__10778 = cljs.core.chunk_rest.call(null,seq__8356_10776__$1);
var G__10779 = c__5632__auto___10777;
var G__10780 = cljs.core.count.call(null,c__5632__auto___10777);
var G__10781 = 0;
seq__8356_10766 = G__10778;
chunk__8357_10767 = G__10779;
count__8358_10768 = G__10780;
i__8359_10769 = G__10781;
continue;
}
} else
{var arg__6508__auto___10782 = cljs.core.first.call(null,seq__8356_10776__$1);a__6507__auto__.push(arg__6508__auto___10782);
{
var G__10783 = cljs.core.next.call(null,seq__8356_10776__$1);
var G__10784 = null;
var G__10785 = 0;
var G__10786 = 0;
seq__8356_10766 = G__10783;
chunk__8357_10767 = G__10784;
count__8358_10768 = G__10785;
i__8359_10769 = G__10786;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.u.apply(null,a__6507__auto__);
};
var u = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return u__delegate.call(this,args__6506__auto__);};
u.cljs$lang$maxFixedArity = 0;
u.cljs$lang$applyTo = (function (arglist__10787){
var args__6506__auto__ = cljs.core.seq(arglist__10787);
return u__delegate(args__6506__auto__);
});
u.cljs$core$IFn$_invoke$arity$variadic = u__delegate;
return u;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.ul = (function() { 
var ul__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__8364_10788 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__8365_10789 = null;var count__8366_10790 = 0;var i__8367_10791 = 0;while(true){
if((i__8367_10791 < count__8366_10790))
{var arg__6508__auto___10792 = cljs.core._nth.call(null,chunk__8365_10789,i__8367_10791);a__6507__auto__.push(arg__6508__auto___10792);
{
var G__10793 = seq__8364_10788;
var G__10794 = chunk__8365_10789;
var G__10795 = count__8366_10790;
var G__10796 = (i__8367_10791 + 1);
seq__8364_10788 = G__10793;
chunk__8365_10789 = G__10794;
count__8366_10790 = G__10795;
i__8367_10791 = G__10796;
continue;
}
} else
{var temp__4092__auto___10797 = cljs.core.seq.call(null,seq__8364_10788);if(temp__4092__auto___10797)
{var seq__8364_10798__$1 = temp__4092__auto___10797;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8364_10798__$1))
{var c__5632__auto___10799 = cljs.core.chunk_first.call(null,seq__8364_10798__$1);{
var G__10800 = cljs.core.chunk_rest.call(null,seq__8364_10798__$1);
var G__10801 = c__5632__auto___10799;
var G__10802 = cljs.core.count.call(null,c__5632__auto___10799);
var G__10803 = 0;
seq__8364_10788 = G__10800;
chunk__8365_10789 = G__10801;
count__8366_10790 = G__10802;
i__8367_10791 = G__10803;
continue;
}
} else
{var arg__6508__auto___10804 = cljs.core.first.call(null,seq__8364_10798__$1);a__6507__auto__.push(arg__6508__auto___10804);
{
var G__10805 = cljs.core.next.call(null,seq__8364_10798__$1);
var G__10806 = null;
var G__10807 = 0;
var G__10808 = 0;
seq__8364_10788 = G__10805;
chunk__8365_10789 = G__10806;
count__8366_10790 = G__10807;
i__8367_10791 = G__10808;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.ul.apply(null,a__6507__auto__);
};
var ul = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ul__delegate.call(this,args__6506__auto__);};
ul.cljs$lang$maxFixedArity = 0;
ul.cljs$lang$applyTo = (function (arglist__10809){
var args__6506__auto__ = cljs.core.seq(arglist__10809);
return ul__delegate(args__6506__auto__);
});
ul.cljs$core$IFn$_invoke$arity$variadic = ul__delegate;
return ul;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.var$ = (function() { 
var var$__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__8372_10810 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__8373_10811 = null;var count__8374_10812 = 0;var i__8375_10813 = 0;while(true){
if((i__8375_10813 < count__8374_10812))
{var arg__6508__auto___10814 = cljs.core._nth.call(null,chunk__8373_10811,i__8375_10813);a__6507__auto__.push(arg__6508__auto___10814);
{
var G__10815 = seq__8372_10810;
var G__10816 = chunk__8373_10811;
var G__10817 = count__8374_10812;
var G__10818 = (i__8375_10813 + 1);
seq__8372_10810 = G__10815;
chunk__8373_10811 = G__10816;
count__8374_10812 = G__10817;
i__8375_10813 = G__10818;
continue;
}
} else
{var temp__4092__auto___10819 = cljs.core.seq.call(null,seq__8372_10810);if(temp__4092__auto___10819)
{var seq__8372_10820__$1 = temp__4092__auto___10819;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8372_10820__$1))
{var c__5632__auto___10821 = cljs.core.chunk_first.call(null,seq__8372_10820__$1);{
var G__10822 = cljs.core.chunk_rest.call(null,seq__8372_10820__$1);
var G__10823 = c__5632__auto___10821;
var G__10824 = cljs.core.count.call(null,c__5632__auto___10821);
var G__10825 = 0;
seq__8372_10810 = G__10822;
chunk__8373_10811 = G__10823;
count__8374_10812 = G__10824;
i__8375_10813 = G__10825;
continue;
}
} else
{var arg__6508__auto___10826 = cljs.core.first.call(null,seq__8372_10820__$1);a__6507__auto__.push(arg__6508__auto___10826);
{
var G__10827 = cljs.core.next.call(null,seq__8372_10820__$1);
var G__10828 = null;
var G__10829 = 0;
var G__10830 = 0;
seq__8372_10810 = G__10827;
chunk__8373_10811 = G__10828;
count__8374_10812 = G__10829;
i__8375_10813 = G__10830;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.var$.apply(null,a__6507__auto__);
};
var var$ = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return var$__delegate.call(this,args__6506__auto__);};
var$.cljs$lang$maxFixedArity = 0;
var$.cljs$lang$applyTo = (function (arglist__10831){
var args__6506__auto__ = cljs.core.seq(arglist__10831);
return var$__delegate(args__6506__auto__);
});
var$.cljs$core$IFn$_invoke$arity$variadic = var$__delegate;
return var$;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.video = (function() { 
var video__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__8380_10832 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__8381_10833 = null;var count__8382_10834 = 0;var i__8383_10835 = 0;while(true){
if((i__8383_10835 < count__8382_10834))
{var arg__6508__auto___10836 = cljs.core._nth.call(null,chunk__8381_10833,i__8383_10835);a__6507__auto__.push(arg__6508__auto___10836);
{
var G__10837 = seq__8380_10832;
var G__10838 = chunk__8381_10833;
var G__10839 = count__8382_10834;
var G__10840 = (i__8383_10835 + 1);
seq__8380_10832 = G__10837;
chunk__8381_10833 = G__10838;
count__8382_10834 = G__10839;
i__8383_10835 = G__10840;
continue;
}
} else
{var temp__4092__auto___10841 = cljs.core.seq.call(null,seq__8380_10832);if(temp__4092__auto___10841)
{var seq__8380_10842__$1 = temp__4092__auto___10841;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8380_10842__$1))
{var c__5632__auto___10843 = cljs.core.chunk_first.call(null,seq__8380_10842__$1);{
var G__10844 = cljs.core.chunk_rest.call(null,seq__8380_10842__$1);
var G__10845 = c__5632__auto___10843;
var G__10846 = cljs.core.count.call(null,c__5632__auto___10843);
var G__10847 = 0;
seq__8380_10832 = G__10844;
chunk__8381_10833 = G__10845;
count__8382_10834 = G__10846;
i__8383_10835 = G__10847;
continue;
}
} else
{var arg__6508__auto___10848 = cljs.core.first.call(null,seq__8380_10842__$1);a__6507__auto__.push(arg__6508__auto___10848);
{
var G__10849 = cljs.core.next.call(null,seq__8380_10842__$1);
var G__10850 = null;
var G__10851 = 0;
var G__10852 = 0;
seq__8380_10832 = G__10849;
chunk__8381_10833 = G__10850;
count__8382_10834 = G__10851;
i__8383_10835 = G__10852;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.video.apply(null,a__6507__auto__);
};
var video = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return video__delegate.call(this,args__6506__auto__);};
video.cljs$lang$maxFixedArity = 0;
video.cljs$lang$applyTo = (function (arglist__10853){
var args__6506__auto__ = cljs.core.seq(arglist__10853);
return video__delegate(args__6506__auto__);
});
video.cljs$core$IFn$_invoke$arity$variadic = video__delegate;
return video;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.wbr = (function() { 
var wbr__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__8388_10854 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__8389_10855 = null;var count__8390_10856 = 0;var i__8391_10857 = 0;while(true){
if((i__8391_10857 < count__8390_10856))
{var arg__6508__auto___10858 = cljs.core._nth.call(null,chunk__8389_10855,i__8391_10857);a__6507__auto__.push(arg__6508__auto___10858);
{
var G__10859 = seq__8388_10854;
var G__10860 = chunk__8389_10855;
var G__10861 = count__8390_10856;
var G__10862 = (i__8391_10857 + 1);
seq__8388_10854 = G__10859;
chunk__8389_10855 = G__10860;
count__8390_10856 = G__10861;
i__8391_10857 = G__10862;
continue;
}
} else
{var temp__4092__auto___10863 = cljs.core.seq.call(null,seq__8388_10854);if(temp__4092__auto___10863)
{var seq__8388_10864__$1 = temp__4092__auto___10863;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8388_10864__$1))
{var c__5632__auto___10865 = cljs.core.chunk_first.call(null,seq__8388_10864__$1);{
var G__10866 = cljs.core.chunk_rest.call(null,seq__8388_10864__$1);
var G__10867 = c__5632__auto___10865;
var G__10868 = cljs.core.count.call(null,c__5632__auto___10865);
var G__10869 = 0;
seq__8388_10854 = G__10866;
chunk__8389_10855 = G__10867;
count__8390_10856 = G__10868;
i__8391_10857 = G__10869;
continue;
}
} else
{var arg__6508__auto___10870 = cljs.core.first.call(null,seq__8388_10864__$1);a__6507__auto__.push(arg__6508__auto___10870);
{
var G__10871 = cljs.core.next.call(null,seq__8388_10864__$1);
var G__10872 = null;
var G__10873 = 0;
var G__10874 = 0;
seq__8388_10854 = G__10871;
chunk__8389_10855 = G__10872;
count__8390_10856 = G__10873;
i__8391_10857 = G__10874;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.wbr.apply(null,a__6507__auto__);
};
var wbr = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return wbr__delegate.call(this,args__6506__auto__);};
wbr.cljs$lang$maxFixedArity = 0;
wbr.cljs$lang$applyTo = (function (arglist__10875){
var args__6506__auto__ = cljs.core.seq(arglist__10875);
return wbr__delegate(args__6506__auto__);
});
wbr.cljs$core$IFn$_invoke$arity$variadic = wbr__delegate;
return wbr;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.circle = (function() { 
var circle__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__8396_10876 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__8397_10877 = null;var count__8398_10878 = 0;var i__8399_10879 = 0;while(true){
if((i__8399_10879 < count__8398_10878))
{var arg__6508__auto___10880 = cljs.core._nth.call(null,chunk__8397_10877,i__8399_10879);a__6507__auto__.push(arg__6508__auto___10880);
{
var G__10881 = seq__8396_10876;
var G__10882 = chunk__8397_10877;
var G__10883 = count__8398_10878;
var G__10884 = (i__8399_10879 + 1);
seq__8396_10876 = G__10881;
chunk__8397_10877 = G__10882;
count__8398_10878 = G__10883;
i__8399_10879 = G__10884;
continue;
}
} else
{var temp__4092__auto___10885 = cljs.core.seq.call(null,seq__8396_10876);if(temp__4092__auto___10885)
{var seq__8396_10886__$1 = temp__4092__auto___10885;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8396_10886__$1))
{var c__5632__auto___10887 = cljs.core.chunk_first.call(null,seq__8396_10886__$1);{
var G__10888 = cljs.core.chunk_rest.call(null,seq__8396_10886__$1);
var G__10889 = c__5632__auto___10887;
var G__10890 = cljs.core.count.call(null,c__5632__auto___10887);
var G__10891 = 0;
seq__8396_10876 = G__10888;
chunk__8397_10877 = G__10889;
count__8398_10878 = G__10890;
i__8399_10879 = G__10891;
continue;
}
} else
{var arg__6508__auto___10892 = cljs.core.first.call(null,seq__8396_10886__$1);a__6507__auto__.push(arg__6508__auto___10892);
{
var G__10893 = cljs.core.next.call(null,seq__8396_10886__$1);
var G__10894 = null;
var G__10895 = 0;
var G__10896 = 0;
seq__8396_10876 = G__10893;
chunk__8397_10877 = G__10894;
count__8398_10878 = G__10895;
i__8399_10879 = G__10896;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.circle.apply(null,a__6507__auto__);
};
var circle = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return circle__delegate.call(this,args__6506__auto__);};
circle.cljs$lang$maxFixedArity = 0;
circle.cljs$lang$applyTo = (function (arglist__10897){
var args__6506__auto__ = cljs.core.seq(arglist__10897);
return circle__delegate(args__6506__auto__);
});
circle.cljs$core$IFn$_invoke$arity$variadic = circle__delegate;
return circle;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.g = (function() { 
var g__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__8404_10898 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__8405_10899 = null;var count__8406_10900 = 0;var i__8407_10901 = 0;while(true){
if((i__8407_10901 < count__8406_10900))
{var arg__6508__auto___10902 = cljs.core._nth.call(null,chunk__8405_10899,i__8407_10901);a__6507__auto__.push(arg__6508__auto___10902);
{
var G__10903 = seq__8404_10898;
var G__10904 = chunk__8405_10899;
var G__10905 = count__8406_10900;
var G__10906 = (i__8407_10901 + 1);
seq__8404_10898 = G__10903;
chunk__8405_10899 = G__10904;
count__8406_10900 = G__10905;
i__8407_10901 = G__10906;
continue;
}
} else
{var temp__4092__auto___10907 = cljs.core.seq.call(null,seq__8404_10898);if(temp__4092__auto___10907)
{var seq__8404_10908__$1 = temp__4092__auto___10907;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8404_10908__$1))
{var c__5632__auto___10909 = cljs.core.chunk_first.call(null,seq__8404_10908__$1);{
var G__10910 = cljs.core.chunk_rest.call(null,seq__8404_10908__$1);
var G__10911 = c__5632__auto___10909;
var G__10912 = cljs.core.count.call(null,c__5632__auto___10909);
var G__10913 = 0;
seq__8404_10898 = G__10910;
chunk__8405_10899 = G__10911;
count__8406_10900 = G__10912;
i__8407_10901 = G__10913;
continue;
}
} else
{var arg__6508__auto___10914 = cljs.core.first.call(null,seq__8404_10908__$1);a__6507__auto__.push(arg__6508__auto___10914);
{
var G__10915 = cljs.core.next.call(null,seq__8404_10908__$1);
var G__10916 = null;
var G__10917 = 0;
var G__10918 = 0;
seq__8404_10898 = G__10915;
chunk__8405_10899 = G__10916;
count__8406_10900 = G__10917;
i__8407_10901 = G__10918;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.g.apply(null,a__6507__auto__);
};
var g = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return g__delegate.call(this,args__6506__auto__);};
g.cljs$lang$maxFixedArity = 0;
g.cljs$lang$applyTo = (function (arglist__10919){
var args__6506__auto__ = cljs.core.seq(arglist__10919);
return g__delegate(args__6506__auto__);
});
g.cljs$core$IFn$_invoke$arity$variadic = g__delegate;
return g;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.line = (function() { 
var line__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__8412_10920 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__8413_10921 = null;var count__8414_10922 = 0;var i__8415_10923 = 0;while(true){
if((i__8415_10923 < count__8414_10922))
{var arg__6508__auto___10924 = cljs.core._nth.call(null,chunk__8413_10921,i__8415_10923);a__6507__auto__.push(arg__6508__auto___10924);
{
var G__10925 = seq__8412_10920;
var G__10926 = chunk__8413_10921;
var G__10927 = count__8414_10922;
var G__10928 = (i__8415_10923 + 1);
seq__8412_10920 = G__10925;
chunk__8413_10921 = G__10926;
count__8414_10922 = G__10927;
i__8415_10923 = G__10928;
continue;
}
} else
{var temp__4092__auto___10929 = cljs.core.seq.call(null,seq__8412_10920);if(temp__4092__auto___10929)
{var seq__8412_10930__$1 = temp__4092__auto___10929;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8412_10930__$1))
{var c__5632__auto___10931 = cljs.core.chunk_first.call(null,seq__8412_10930__$1);{
var G__10932 = cljs.core.chunk_rest.call(null,seq__8412_10930__$1);
var G__10933 = c__5632__auto___10931;
var G__10934 = cljs.core.count.call(null,c__5632__auto___10931);
var G__10935 = 0;
seq__8412_10920 = G__10932;
chunk__8413_10921 = G__10933;
count__8414_10922 = G__10934;
i__8415_10923 = G__10935;
continue;
}
} else
{var arg__6508__auto___10936 = cljs.core.first.call(null,seq__8412_10930__$1);a__6507__auto__.push(arg__6508__auto___10936);
{
var G__10937 = cljs.core.next.call(null,seq__8412_10930__$1);
var G__10938 = null;
var G__10939 = 0;
var G__10940 = 0;
seq__8412_10920 = G__10937;
chunk__8413_10921 = G__10938;
count__8414_10922 = G__10939;
i__8415_10923 = G__10940;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.line.apply(null,a__6507__auto__);
};
var line = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return line__delegate.call(this,args__6506__auto__);};
line.cljs$lang$maxFixedArity = 0;
line.cljs$lang$applyTo = (function (arglist__10941){
var args__6506__auto__ = cljs.core.seq(arglist__10941);
return line__delegate(args__6506__auto__);
});
line.cljs$core$IFn$_invoke$arity$variadic = line__delegate;
return line;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.path = (function() { 
var path__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__8420_10942 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__8421_10943 = null;var count__8422_10944 = 0;var i__8423_10945 = 0;while(true){
if((i__8423_10945 < count__8422_10944))
{var arg__6508__auto___10946 = cljs.core._nth.call(null,chunk__8421_10943,i__8423_10945);a__6507__auto__.push(arg__6508__auto___10946);
{
var G__10947 = seq__8420_10942;
var G__10948 = chunk__8421_10943;
var G__10949 = count__8422_10944;
var G__10950 = (i__8423_10945 + 1);
seq__8420_10942 = G__10947;
chunk__8421_10943 = G__10948;
count__8422_10944 = G__10949;
i__8423_10945 = G__10950;
continue;
}
} else
{var temp__4092__auto___10951 = cljs.core.seq.call(null,seq__8420_10942);if(temp__4092__auto___10951)
{var seq__8420_10952__$1 = temp__4092__auto___10951;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8420_10952__$1))
{var c__5632__auto___10953 = cljs.core.chunk_first.call(null,seq__8420_10952__$1);{
var G__10954 = cljs.core.chunk_rest.call(null,seq__8420_10952__$1);
var G__10955 = c__5632__auto___10953;
var G__10956 = cljs.core.count.call(null,c__5632__auto___10953);
var G__10957 = 0;
seq__8420_10942 = G__10954;
chunk__8421_10943 = G__10955;
count__8422_10944 = G__10956;
i__8423_10945 = G__10957;
continue;
}
} else
{var arg__6508__auto___10958 = cljs.core.first.call(null,seq__8420_10952__$1);a__6507__auto__.push(arg__6508__auto___10958);
{
var G__10959 = cljs.core.next.call(null,seq__8420_10952__$1);
var G__10960 = null;
var G__10961 = 0;
var G__10962 = 0;
seq__8420_10942 = G__10959;
chunk__8421_10943 = G__10960;
count__8422_10944 = G__10961;
i__8423_10945 = G__10962;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.path.apply(null,a__6507__auto__);
};
var path = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return path__delegate.call(this,args__6506__auto__);};
path.cljs$lang$maxFixedArity = 0;
path.cljs$lang$applyTo = (function (arglist__10963){
var args__6506__auto__ = cljs.core.seq(arglist__10963);
return path__delegate(args__6506__auto__);
});
path.cljs$core$IFn$_invoke$arity$variadic = path__delegate;
return path;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.polygon = (function() { 
var polygon__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__8428_10964 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__8429_10965 = null;var count__8430_10966 = 0;var i__8431_10967 = 0;while(true){
if((i__8431_10967 < count__8430_10966))
{var arg__6508__auto___10968 = cljs.core._nth.call(null,chunk__8429_10965,i__8431_10967);a__6507__auto__.push(arg__6508__auto___10968);
{
var G__10969 = seq__8428_10964;
var G__10970 = chunk__8429_10965;
var G__10971 = count__8430_10966;
var G__10972 = (i__8431_10967 + 1);
seq__8428_10964 = G__10969;
chunk__8429_10965 = G__10970;
count__8430_10966 = G__10971;
i__8431_10967 = G__10972;
continue;
}
} else
{var temp__4092__auto___10973 = cljs.core.seq.call(null,seq__8428_10964);if(temp__4092__auto___10973)
{var seq__8428_10974__$1 = temp__4092__auto___10973;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8428_10974__$1))
{var c__5632__auto___10975 = cljs.core.chunk_first.call(null,seq__8428_10974__$1);{
var G__10976 = cljs.core.chunk_rest.call(null,seq__8428_10974__$1);
var G__10977 = c__5632__auto___10975;
var G__10978 = cljs.core.count.call(null,c__5632__auto___10975);
var G__10979 = 0;
seq__8428_10964 = G__10976;
chunk__8429_10965 = G__10977;
count__8430_10966 = G__10978;
i__8431_10967 = G__10979;
continue;
}
} else
{var arg__6508__auto___10980 = cljs.core.first.call(null,seq__8428_10974__$1);a__6507__auto__.push(arg__6508__auto___10980);
{
var G__10981 = cljs.core.next.call(null,seq__8428_10974__$1);
var G__10982 = null;
var G__10983 = 0;
var G__10984 = 0;
seq__8428_10964 = G__10981;
chunk__8429_10965 = G__10982;
count__8430_10966 = G__10983;
i__8431_10967 = G__10984;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.polygon.apply(null,a__6507__auto__);
};
var polygon = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return polygon__delegate.call(this,args__6506__auto__);};
polygon.cljs$lang$maxFixedArity = 0;
polygon.cljs$lang$applyTo = (function (arglist__10985){
var args__6506__auto__ = cljs.core.seq(arglist__10985);
return polygon__delegate(args__6506__auto__);
});
polygon.cljs$core$IFn$_invoke$arity$variadic = polygon__delegate;
return polygon;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.polyline = (function() { 
var polyline__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__8436_10986 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__8437_10987 = null;var count__8438_10988 = 0;var i__8439_10989 = 0;while(true){
if((i__8439_10989 < count__8438_10988))
{var arg__6508__auto___10990 = cljs.core._nth.call(null,chunk__8437_10987,i__8439_10989);a__6507__auto__.push(arg__6508__auto___10990);
{
var G__10991 = seq__8436_10986;
var G__10992 = chunk__8437_10987;
var G__10993 = count__8438_10988;
var G__10994 = (i__8439_10989 + 1);
seq__8436_10986 = G__10991;
chunk__8437_10987 = G__10992;
count__8438_10988 = G__10993;
i__8439_10989 = G__10994;
continue;
}
} else
{var temp__4092__auto___10995 = cljs.core.seq.call(null,seq__8436_10986);if(temp__4092__auto___10995)
{var seq__8436_10996__$1 = temp__4092__auto___10995;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8436_10996__$1))
{var c__5632__auto___10997 = cljs.core.chunk_first.call(null,seq__8436_10996__$1);{
var G__10998 = cljs.core.chunk_rest.call(null,seq__8436_10996__$1);
var G__10999 = c__5632__auto___10997;
var G__11000 = cljs.core.count.call(null,c__5632__auto___10997);
var G__11001 = 0;
seq__8436_10986 = G__10998;
chunk__8437_10987 = G__10999;
count__8438_10988 = G__11000;
i__8439_10989 = G__11001;
continue;
}
} else
{var arg__6508__auto___11002 = cljs.core.first.call(null,seq__8436_10996__$1);a__6507__auto__.push(arg__6508__auto___11002);
{
var G__11003 = cljs.core.next.call(null,seq__8436_10996__$1);
var G__11004 = null;
var G__11005 = 0;
var G__11006 = 0;
seq__8436_10986 = G__11003;
chunk__8437_10987 = G__11004;
count__8438_10988 = G__11005;
i__8439_10989 = G__11006;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.polyline.apply(null,a__6507__auto__);
};
var polyline = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return polyline__delegate.call(this,args__6506__auto__);};
polyline.cljs$lang$maxFixedArity = 0;
polyline.cljs$lang$applyTo = (function (arglist__11007){
var args__6506__auto__ = cljs.core.seq(arglist__11007);
return polyline__delegate(args__6506__auto__);
});
polyline.cljs$core$IFn$_invoke$arity$variadic = polyline__delegate;
return polyline;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.rect = (function() { 
var rect__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__8444_11008 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__8445_11009 = null;var count__8446_11010 = 0;var i__8447_11011 = 0;while(true){
if((i__8447_11011 < count__8446_11010))
{var arg__6508__auto___11012 = cljs.core._nth.call(null,chunk__8445_11009,i__8447_11011);a__6507__auto__.push(arg__6508__auto___11012);
{
var G__11013 = seq__8444_11008;
var G__11014 = chunk__8445_11009;
var G__11015 = count__8446_11010;
var G__11016 = (i__8447_11011 + 1);
seq__8444_11008 = G__11013;
chunk__8445_11009 = G__11014;
count__8446_11010 = G__11015;
i__8447_11011 = G__11016;
continue;
}
} else
{var temp__4092__auto___11017 = cljs.core.seq.call(null,seq__8444_11008);if(temp__4092__auto___11017)
{var seq__8444_11018__$1 = temp__4092__auto___11017;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8444_11018__$1))
{var c__5632__auto___11019 = cljs.core.chunk_first.call(null,seq__8444_11018__$1);{
var G__11020 = cljs.core.chunk_rest.call(null,seq__8444_11018__$1);
var G__11021 = c__5632__auto___11019;
var G__11022 = cljs.core.count.call(null,c__5632__auto___11019);
var G__11023 = 0;
seq__8444_11008 = G__11020;
chunk__8445_11009 = G__11021;
count__8446_11010 = G__11022;
i__8447_11011 = G__11023;
continue;
}
} else
{var arg__6508__auto___11024 = cljs.core.first.call(null,seq__8444_11018__$1);a__6507__auto__.push(arg__6508__auto___11024);
{
var G__11025 = cljs.core.next.call(null,seq__8444_11018__$1);
var G__11026 = null;
var G__11027 = 0;
var G__11028 = 0;
seq__8444_11008 = G__11025;
chunk__8445_11009 = G__11026;
count__8446_11010 = G__11027;
i__8447_11011 = G__11028;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.rect.apply(null,a__6507__auto__);
};
var rect = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return rect__delegate.call(this,args__6506__auto__);};
rect.cljs$lang$maxFixedArity = 0;
rect.cljs$lang$applyTo = (function (arglist__11029){
var args__6506__auto__ = cljs.core.seq(arglist__11029);
return rect__delegate(args__6506__auto__);
});
rect.cljs$core$IFn$_invoke$arity$variadic = rect__delegate;
return rect;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.svg = (function() { 
var svg__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__8452_11030 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__8453_11031 = null;var count__8454_11032 = 0;var i__8455_11033 = 0;while(true){
if((i__8455_11033 < count__8454_11032))
{var arg__6508__auto___11034 = cljs.core._nth.call(null,chunk__8453_11031,i__8455_11033);a__6507__auto__.push(arg__6508__auto___11034);
{
var G__11035 = seq__8452_11030;
var G__11036 = chunk__8453_11031;
var G__11037 = count__8454_11032;
var G__11038 = (i__8455_11033 + 1);
seq__8452_11030 = G__11035;
chunk__8453_11031 = G__11036;
count__8454_11032 = G__11037;
i__8455_11033 = G__11038;
continue;
}
} else
{var temp__4092__auto___11039 = cljs.core.seq.call(null,seq__8452_11030);if(temp__4092__auto___11039)
{var seq__8452_11040__$1 = temp__4092__auto___11039;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8452_11040__$1))
{var c__5632__auto___11041 = cljs.core.chunk_first.call(null,seq__8452_11040__$1);{
var G__11042 = cljs.core.chunk_rest.call(null,seq__8452_11040__$1);
var G__11043 = c__5632__auto___11041;
var G__11044 = cljs.core.count.call(null,c__5632__auto___11041);
var G__11045 = 0;
seq__8452_11030 = G__11042;
chunk__8453_11031 = G__11043;
count__8454_11032 = G__11044;
i__8455_11033 = G__11045;
continue;
}
} else
{var arg__6508__auto___11046 = cljs.core.first.call(null,seq__8452_11040__$1);a__6507__auto__.push(arg__6508__auto___11046);
{
var G__11047 = cljs.core.next.call(null,seq__8452_11040__$1);
var G__11048 = null;
var G__11049 = 0;
var G__11050 = 0;
seq__8452_11030 = G__11047;
chunk__8453_11031 = G__11048;
count__8454_11032 = G__11049;
i__8455_11033 = G__11050;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.svg.apply(null,a__6507__auto__);
};
var svg = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return svg__delegate.call(this,args__6506__auto__);};
svg.cljs$lang$maxFixedArity = 0;
svg.cljs$lang$applyTo = (function (arglist__11051){
var args__6506__auto__ = cljs.core.seq(arglist__11051);
return svg__delegate(args__6506__auto__);
});
svg.cljs$core$IFn$_invoke$arity$variadic = svg__delegate;
return svg;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.text = (function() { 
var text__delegate = function (args__6506__auto__){var a__6507__auto__ = [];a__6507__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6506__auto__)));
var seq__7764_11052 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6506__auto__));var chunk__7765_11053 = null;var count__7766_11054 = 0;var i__7767_11055 = 0;while(true){
if((i__7767_11055 < count__7766_11054))
{var arg__6508__auto___11056 = cljs.core._nth.call(null,chunk__7765_11053,i__7767_11055);a__6507__auto__.push(arg__6508__auto___11056);
{
var G__11057 = seq__7764_11052;
var G__11058 = chunk__7765_11053;
var G__11059 = count__7766_11054;
var G__11060 = (i__7767_11055 + 1);
seq__7764_11052 = G__11057;
chunk__7765_11053 = G__11058;
count__7766_11054 = G__11059;
i__7767_11055 = G__11060;
continue;
}
} else
{var temp__4092__auto___11061 = cljs.core.seq.call(null,seq__7764_11052);if(temp__4092__auto___11061)
{var seq__7764_11062__$1 = temp__4092__auto___11061;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7764_11062__$1))
{var c__5632__auto___11063 = cljs.core.chunk_first.call(null,seq__7764_11062__$1);{
var G__11064 = cljs.core.chunk_rest.call(null,seq__7764_11062__$1);
var G__11065 = c__5632__auto___11063;
var G__11066 = cljs.core.count.call(null,c__5632__auto___11063);
var G__11067 = 0;
seq__7764_11052 = G__11064;
chunk__7765_11053 = G__11065;
count__7766_11054 = G__11066;
i__7767_11055 = G__11067;
continue;
}
} else
{var arg__6508__auto___11068 = cljs.core.first.call(null,seq__7764_11062__$1);a__6507__auto__.push(arg__6508__auto___11068);
{
var G__11069 = cljs.core.next.call(null,seq__7764_11062__$1);
var G__11070 = null;
var G__11071 = 0;
var G__11072 = 0;
seq__7764_11052 = G__11069;
chunk__7765_11053 = G__11070;
count__7766_11054 = G__11071;
i__7767_11055 = G__11072;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.text.apply(null,a__6507__auto__);
};
var text = function (var_args){
var args__6506__auto__ = null;if (arguments.length > 0) {
  args__6506__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return text__delegate.call(this,args__6506__auto__);};
text.cljs$lang$maxFixedArity = 0;
text.cljs$lang$applyTo = (function (arglist__11073){
var args__6506__auto__ = cljs.core.seq(arglist__11073);
return text__delegate(args__6506__auto__);
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
lt.plugins.elm_light.autocompleter.handle_keypress = (function handle_keypress(p__7482,ev){var map__7485 = p__7482;var map__7485__$1 = ((cljs.core.seq_QMARK_.call(null,map__7485))?cljs.core.apply.call(null,cljs.core.hash_map,map__7485):map__7485);var props = map__7485__$1;var on_cancel = cljs.core.get.call(null,map__7485__$1,new cljs.core.Keyword(null,"on-cancel","on-cancel",600765850));var on_select = cljs.core.get.call(null,map__7485__$1,new cljs.core.Keyword(null,"on-select","on-select",1062468636));var on_down = cljs.core.get.call(null,map__7485__$1,new cljs.core.Keyword(null,"on-down","on-down",3936419650));var on_up = cljs.core.get.call(null,map__7485__$1,new cljs.core.Keyword(null,"on-up","on-up",1119739067));var kk = ev.which;var G__7486 = kk;if(cljs.core._EQ_.call(null,27,G__7486))
{ev.preventDefault();
ev.target.value = "";
return on_cancel.call(null);
} else
{if(cljs.core._EQ_.call(null,13,G__7486))
{ev.preventDefault();
var temp__4092__auto___7502 = lt.plugins.elm_light.autocompleter.find_active.call(null,new cljs.core.Keyword(null,"items","items",1114430258).cljs$core$IFn$_invoke$arity$1(props));if(cljs.core.truth_(temp__4092__auto___7502))
{var active_7503 = temp__4092__auto___7502;ev.target.value = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(active_7503);
} else
{}
return on_select.call(null);
} else
{if(cljs.core._EQ_.call(null,40,G__7486))
{ev.preventDefault();
return on_down.call(null);
} else
{if(cljs.core._EQ_.call(null,38,G__7486))
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
return (function (p1__7487_SHARP_){return "autocomplete-dropdown-item row".concat((cljs.core.truth_(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(p1__7487_SHARP_))?" autocomplete-active":""));
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
lt.plugins.elm_light.autocompleter.Adder = quiescent.component.call(null,(function (p__7488){var map__7489 = p__7488;var map__7489__$1 = ((cljs.core.seq_QMARK_.call(null,map__7489))?cljs.core.apply.call(null,cljs.core.hash_map,map__7489):map__7489);var props = map__7489__$1;var disabled = cljs.core.get.call(null,map__7489__$1,new cljs.core.Keyword(null,"disabled","disabled",1284845038));var on_add_package = cljs.core.get.call(null,map__7489__$1,new cljs.core.Keyword(null,"on-add-package","on-add-package",3601701790));return quiescent.dom.button.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",1004015509),"btn",new cljs.core.Keyword(null,"disabled","disabled",1284845038),disabled,new cljs.core.Keyword(null,"onClick","onClick",3956969051),((function (map__7489,map__7489__$1,props,disabled,on_add_package){
return (function (){return on_add_package.call(null);
});})(map__7489,map__7489__$1,props,disabled,on_add_package))
], null),"Add package");
}));
/**
* 
*/
lt.plugins.elm_light.autocompleter.Versions = quiescent.component.call(null,(function (props){return cljs.core.apply.call(null,quiescent.dom.select,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",1004015509),"versions",new cljs.core.Keyword(null,"value","value",1125876963),new cljs.core.Keyword(null,"version","version",1365512266).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"onChange","onChange",2050678241),(function (p1__7490_SHARP_){return new cljs.core.Keyword(null,"on-change-version","on-change-version",822058203).cljs$core$IFn$_invoke$arity$1(props).call(null,p1__7490_SHARP_.target.value);
})], null),cljs.core.map.call(null,(function (p1__7491_SHARP_){return quiescent.dom.option.call(null,cljs.core.PersistentArrayMap.EMPTY,p1__7491_SHARP_);
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
clojure.walk.keywordize_keys = (function keywordize_keys(m){var f = (function (p__11212){var vec__11213 = p__11212;var k = cljs.core.nth.call(null,vec__11213,0,null);var v = cljs.core.nth.call(null,vec__11213,1,null);if(typeof k === 'string')
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
clojure.walk.stringify_keys = (function stringify_keys(m){var f = (function (p__11216){var vec__11217 = p__11216;var k = cljs.core.nth.call(null,vec__11217,0,null);var v = cljs.core.nth.call(null,vec__11217,1,null);if((k instanceof cljs.core.Keyword))
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
goog.require('lt.objs.editor');
goog.require('lt.objs.editor');
goog.require('lt.objs.files');
goog.require('lt.objs.files');
lt.plugins.elm_light.utils.find_symbol = (function find_symbol(ed,pos){var curr_tok = lt.objs.editor.__GT_token.call(null,ed,pos);var G__11222 = new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(curr_tok);if(cljs.core._EQ_.call(null,"variable",G__11222))
{return [cljs.core.str(find_symbol.call(null,ed,cljs.core.assoc.call(null,pos,new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(curr_tok)))),cljs.core.str(new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(curr_tok))].join('');
} else
{if(cljs.core._EQ_.call(null,"qualifier",G__11222))
{return [cljs.core.str(find_symbol.call(null,ed,cljs.core.assoc.call(null,pos,new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(curr_tok)))),cljs.core.str(new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(curr_tok))].join('');
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return "";
} else
{return null;
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
}
if(!lt.util.load.provided_QMARK_('lt.plugins.elm-light.packages')) {
goog.provide('lt.plugins.elm_light.packages');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('lt.objs.files');
goog.require('lt.plugins.elm_light.autocompleter');
goog.require('lt.plugins.elm_light.utils');
goog.require('lt.util.dom');
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
goog.require('fetch.core');
goog.require('fetch.core');
lt.plugins.elm_light.packages.fetch_packages = (function fetch_packages(callback){return fetch.core.xhr.call(null,[cljs.core.str("http://package.elm-lang.org/all-packages?date="),cljs.core.str((new Date()).getTime())].join(''),cljs.core.PersistentArrayMap.EMPTY,(function (data){var pkgs = cljs.core.js__GT_clj.call(null,JSON.parse(data),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);return callback.call(null,pkgs);
}));
});
lt.plugins.elm_light.packages.remove_pkg = (function remove_pkg(path,pkg){var pkg_file = lt.objs.files.join.call(null,path,"elm-package.json");return cljs.core.partial.call(null,lt.objs.files.save,pkg_file).call(null,lt.plugins.elm_light.utils.pretty_json.call(null,cljs.core.update_in.call(null,lt.plugins.elm_light.utils.parse_json_file.call(null,pkg_file),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependencies","dependencies",1517678747)], null),((function (pkg_file){
return (function (deps){return cljs.core.dissoc.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (pkg_file){
return (function (p__11137){var vec__11138 = p__11137;var k = cljs.core.nth.call(null,vec__11138,0,null);var v = cljs.core.nth.call(null,vec__11138,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.elm_light.utils.nskw__GT_name.call(null,k),v], null);
});})(pkg_file))
,deps)),pkg);
});})(pkg_file))
)));
});
lt.plugins.elm_light.packages.get_project_deps = (function get_project_deps(project_path){var pkg_json = lt.objs.files.join.call(null,project_path,"elm-package.json");var deps_json = lt.objs.files.join.call(null,project_path,"elm-stuff","exact-dependencies.json");return cljs.core.mapv.call(null,((function (pkg_json,deps_json){
return (function (p__11145){var vec__11146 = p__11145;var _ = cljs.core.nth.call(null,vec__11146,0,null);var vs = cljs.core.nth.call(null,vec__11146,1,null);return cljs.core.apply.call(null,cljs.core.merge,vs);
});})(pkg_json,deps_json))
,cljs.core.group_by.call(null,new cljs.core.Keyword(null,"package","package",4501809080),cljs.core.concat.call(null,cljs.core.mapv.call(null,((function (pkg_json,deps_json){
return (function (p__11147){var vec__11148 = p__11147;var k = cljs.core.nth.call(null,vec__11148,0,null);var v = cljs.core.nth.call(null,vec__11148,1,null);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"package","package",4501809080),lt.plugins.elm_light.utils.nskw__GT_name.call(null,k),new cljs.core.Keyword(null,"exact","exact",1110851185),v], null);
});})(pkg_json,deps_json))
,lt.plugins.elm_light.utils.parse_json_file.call(null,deps_json)),cljs.core.mapv.call(null,((function (pkg_json,deps_json){
return (function (p__11149){var vec__11150 = p__11149;var k = cljs.core.nth.call(null,vec__11150,0,null);var v = cljs.core.nth.call(null,vec__11150,1,null);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"package","package",4501809080),lt.plugins.elm_light.utils.nskw__GT_name.call(null,k),new cljs.core.Keyword(null,"range","range",1122184367),v], null);
});})(pkg_json,deps_json))
,new cljs.core.Keyword(null,"dependencies","dependencies",1517678747).cljs$core$IFn$_invoke$arity$1(lt.plugins.elm_light.utils.parse_json_file.call(null,pkg_json))))));
});
lt.plugins.elm_light.packages.project_wrapper = (function project_wrapper(this$){var e__6283__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.elm","div.elm",2686466363),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"project-packages-wrapper"], null),"Retrieving project package info..."], null)], null));var seq__11157_11182 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__11158_11183 = null;var count__11159_11184 = 0;var i__11160_11185 = 0;while(true){
if((i__11160_11185 < count__11159_11184))
{var vec__11161_11186 = cljs.core._nth.call(null,chunk__11158_11183,i__11160_11185);var ev__6284__auto___11187 = cljs.core.nth.call(null,vec__11161_11186,0,null);var func__6285__auto___11188 = cljs.core.nth.call(null,vec__11161_11186,1,null);lt.util.dom.on.call(null,e__6283__auto__,ev__6284__auto___11187,func__6285__auto___11188);
{
var G__11189 = seq__11157_11182;
var G__11190 = chunk__11158_11183;
var G__11191 = count__11159_11184;
var G__11192 = (i__11160_11185 + 1);
seq__11157_11182 = G__11189;
chunk__11158_11183 = G__11190;
count__11159_11184 = G__11191;
i__11160_11185 = G__11192;
continue;
}
} else
{var temp__4092__auto___11193 = cljs.core.seq.call(null,seq__11157_11182);if(temp__4092__auto___11193)
{var seq__11157_11194__$1 = temp__4092__auto___11193;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11157_11194__$1))
{var c__5632__auto___11195 = cljs.core.chunk_first.call(null,seq__11157_11194__$1);{
var G__11196 = cljs.core.chunk_rest.call(null,seq__11157_11194__$1);
var G__11197 = c__5632__auto___11195;
var G__11198 = cljs.core.count.call(null,c__5632__auto___11195);
var G__11199 = 0;
seq__11157_11182 = G__11196;
chunk__11158_11183 = G__11197;
count__11159_11184 = G__11198;
i__11160_11185 = G__11199;
continue;
}
} else
{var vec__11162_11200 = cljs.core.first.call(null,seq__11157_11194__$1);var ev__6284__auto___11201 = cljs.core.nth.call(null,vec__11162_11200,0,null);var func__6285__auto___11202 = cljs.core.nth.call(null,vec__11162_11200,1,null);lt.util.dom.on.call(null,e__6283__auto__,ev__6284__auto___11201,func__6285__auto___11202);
{
var G__11203 = cljs.core.next.call(null,seq__11157_11194__$1);
var G__11204 = null;
var G__11205 = 0;
var G__11206 = 0;
seq__11157_11182 = G__11203;
chunk__11158_11183 = G__11204;
count__11159_11184 = G__11205;
i__11160_11185 = G__11206;
continue;
}
}
} else
{}
}
break;
}
return e__6283__auto__;
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.packages","elm-packages","lt.plugins.elm-light.packages/elm-packages",4552372902),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elm.packages","elm.packages",3931311271),null], null), null),new cljs.core.Keyword(null,"label","label",1116631654),"Elm project packages",new cljs.core.Keyword(null,"name","name",1017277949),"Elm project packages",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){lt.plugins.elm_light.packages.fetch_packages.call(null,(function (p1__11163_SHARP_){return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"all-packages","all-packages",1123981067),p1__11163_SHARP_], null));
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
lt.plugins.elm_light.packages.idx_active = (function idx_active(items){return cljs.core.first.call(null,cljs.core.keep_indexed.call(null,(function (p1__11165_SHARP_,p2__11164_SHARP_){if(cljs.core.truth_(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(p2__11164_SHARP_)))
{return p1__11165_SHARP_;
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
lt.plugins.elm_light.packages.on_pkg_sel = (function on_pkg_sel(){var items_11207 = new cljs.core.Keyword(null,"ac-packages","ac-packages",1548109226).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.elm_light.packages.elm_packages));var temp__4090__auto___11208 = lt.plugins.elm_light.packages.idx_active.call(null,items_11207);if(cljs.core.truth_(temp__4090__auto___11208))
{var idx_11209 = temp__4090__auto___11208;lt.object.assoc_in_BANG_.call(null,lt.plugins.elm_light.packages.elm_packages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ac-versions","ac-versions",3107155800)], null),new cljs.core.Keyword(null,"versions","versions",3323818509).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,items_11207,idx_11209)));
lt.object.assoc_in_BANG_.call(null,lt.plugins.elm_light.packages.elm_packages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ac-version","ac-version",2051259807)], null),cljs.core.first.call(null,new cljs.core.Keyword(null,"versions","versions",3323818509).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,items_11207,idx_11209))));
lt.object.assoc_in_BANG_.call(null,lt.plugins.elm_light.packages.elm_packages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ac-package","ac-package",892589325)], null),new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,items_11207,idx_11209)));
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
return (function (p1__11166_SHARP_){if(cljs.core._EQ_.call(null,p1__11166_SHARP_,0))
{lt.objs.notifos.done_working.call(null);
} else
{lt.objs.notifos.set_msg_BANG_.call(null,"Error installing elm package",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),"error",new cljs.core.Keyword(null,"timeout","timeout",3994960083),5000], null));
}
return lt.object.raise.call(null,lt.plugins.elm_light.packages.elm_packages,new cljs.core.Keyword(null,"elm.show.project.packages","elm.show.project.packages",3385102109),new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.elm_light.packages.elm_packages)));
});})(proc,args))
);
proc.stdout.on("data",((function (proc,args){
return (function (p1__11167_SHARP_){return lt.objs.notifos.msg_STAR_.call(null,[cljs.core.str("Package install: "),cljs.core.str(p1__11167_SHARP_)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"timeout","timeout",3994960083),5000], null));
});})(proc,args))
);
return proc.stderr.on("data",((function (proc,args){
return (function (p1__11168_SHARP_){return lt.objs.console.error.call(null,[cljs.core.str(p1__11168_SHARP_)].join(''));
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
/**
* 
*/
lt.plugins.elm_light.packages.AddPackageForm = quiescent.component.call(null,(function (props){return quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",1004015509),"add-package"], null),quiescent.dom.h3.call(null,cljs.core.PersistentArrayMap.EMPTY,"Add package:"),lt.plugins.elm_light.autocompleter.AutoComplete.call(null,new cljs.core.Keyword(null,"ac-props","ac-props",1626585975).cljs$core$IFn$_invoke$arity$1(props)));
}));
/**
* 
*/
lt.plugins.elm_light.packages.PackageRow = quiescent.component.call(null,(function (p__11169){var map__11170 = p__11169;var map__11170__$1 = ((cljs.core.seq_QMARK_.call(null,map__11170))?cljs.core.apply.call(null,cljs.core.hash_map,map__11170):map__11170);var on_browse = cljs.core.get.call(null,map__11170__$1,new cljs.core.Keyword(null,"on-browse","on-browse",587885994));var on_remove = cljs.core.get.call(null,map__11170__$1,new cljs.core.Keyword(null,"on-remove","on-remove",1033879460));var exact = cljs.core.get.call(null,map__11170__$1,new cljs.core.Keyword(null,"exact","exact",1110851185));var range = cljs.core.get.call(null,map__11170__$1,new cljs.core.Keyword(null,"range","range",1122184367));var package$ = cljs.core.get.call(null,map__11170__$1,new cljs.core.Keyword(null,"package","package",4501809080));return quiescent.dom.tr.call(null,cljs.core.PersistentArrayMap.EMPTY,quiescent.dom.td.call(null,cljs.core.PersistentArrayMap.EMPTY,(cljs.core.truth_((function (){var and__4872__auto__ = package$;if(cljs.core.truth_(and__4872__auto__))
{return exact;
} else
{return and__4872__auto__;
}
})())?quiescent.dom.span.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",1004015509),"link",new cljs.core.Keyword(null,"onClick","onClick",3956969051),((function (map__11170,map__11170__$1,on_browse,on_remove,exact,range,package$){
return (function (){return on_browse.call(null,package$,exact);
});})(map__11170,map__11170__$1,on_browse,on_remove,exact,range,package$))
], null),package$):package$)),quiescent.dom.td.call(null,cljs.core.PersistentArrayMap.EMPTY,range),quiescent.dom.td.call(null,cljs.core.PersistentArrayMap.EMPTY,exact),quiescent.dom.td.call(null,cljs.core.PersistentArrayMap.EMPTY,(cljs.core.truth_(range)?quiescent.dom.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",3956969051),((function (map__11170,map__11170__$1,on_browse,on_remove,exact,range,package$){
return (function (){return on_remove.call(null,package$);
});})(map__11170,map__11170__$1,on_browse,on_remove,exact,range,package$))
], null),"remove"):null)));
}));
/**
* 
*/
lt.plugins.elm_light.packages.PackageTable = quiescent.component.call(null,(function (props){return quiescent.dom.table.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",1004015509),"package-table"], null),quiescent.dom.thead.call(null,cljs.core.PersistentArrayMap.EMPTY,quiescent.dom.tr.call(null,cljs.core.PersistentArrayMap.EMPTY,quiescent.dom.th.call(null,cljs.core.PersistentArrayMap.EMPTY,"Package"),quiescent.dom.th.call(null,cljs.core.PersistentArrayMap.EMPTY,"Range"),quiescent.dom.th.call(null,cljs.core.PersistentArrayMap.EMPTY,"Exact"),quiescent.dom.th.call(null,cljs.core.PersistentArrayMap.EMPTY,""))),cljs.core.apply.call(null,quiescent.dom.tbody,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__11171_SHARP_){return lt.plugins.elm_light.packages.PackageRow.call(null,cljs.core.assoc.call(null,p1__11171_SHARP_,new cljs.core.Keyword(null,"on-remove","on-remove",1033879460),new cljs.core.Keyword(null,"on-remove","on-remove",1033879460).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"on-browse","on-browse",587885994),new cljs.core.Keyword(null,"on-browse","on-browse",587885994).cljs$core$IFn$_invoke$arity$1(props)));
}),new cljs.core.Keyword(null,"packages","packages",1764771935).cljs$core$IFn$_invoke$arity$1(props))));
}));
/**
* 
*/
lt.plugins.elm_light.packages.ProjectPackages = quiescent.component.call(null,(function (props){return quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",1004015509),"project-packages"], null),quiescent.dom.h1.call(null,cljs.core.PersistentArrayMap.EMPTY,[cljs.core.str(lt.objs.files.basename.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(props))),cljs.core.str(" - packages")].join('')),lt.plugins.elm_light.packages.PackageTable.call(null,props),quiescent.dom.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",3956969051),(function (){return new cljs.core.Keyword(null,"on-pkg-refresh","on-pkg-refresh",1806751838).cljs$core$IFn$_invoke$arity$1(props).call(null);
})], null),"Refresh packages"),lt.plugins.elm_light.packages.AddPackageForm.call(null,props));
}));
lt.plugins.elm_light.packages.render = (function render(props){return quiescent.render.call(null,lt.plugins.elm_light.packages.ProjectPackages.call(null,cljs.core.merge.call(null,props,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"path","path",1017337751),new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.elm_light.packages.elm_packages)),new cljs.core.Keyword(null,"packages","packages",1764771935),new cljs.core.Keyword(null,"packages","packages",1764771935).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.elm_light.packages.elm_packages)),new cljs.core.Keyword(null,"on-pkg-refresh","on-pkg-refresh",1806751838),lt.plugins.elm_light.packages.on_pkg_refresh,new cljs.core.Keyword(null,"on-remove","on-remove",1033879460),lt.plugins.elm_light.packages.on_remove_pkg,new cljs.core.Keyword(null,"on-browse","on-browse",587885994),lt.plugins.elm_light.packages.on_pkg_browse,new cljs.core.Keyword(null,"ac-props","ac-props",1626585975),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-add-package","on-add-package",3601701790),new cljs.core.Keyword(null,"on-select","on-select",1062468636),new cljs.core.Keyword(null,"items","items",1114430258),new cljs.core.Keyword(null,"on-cancel","on-cancel",600765850),new cljs.core.Keyword(null,"on-blur","on-blur",3936357127),new cljs.core.Keyword(null,"on-change","on-change",606853840),new cljs.core.Keyword(null,"version","version",1365512266),new cljs.core.Keyword(null,"on-change-version","on-change-version",822058203),new cljs.core.Keyword(null,"on-down","on-down",3936419650),new cljs.core.Keyword(null,"on-up","on-up",1119739067),new cljs.core.Keyword(null,"versions","versions",3323818509),new cljs.core.Keyword(null,"value","value",1125876963)],[lt.plugins.elm_light.packages.on_add_package,lt.plugins.elm_light.packages.on_pkg_sel,new cljs.core.Keyword(null,"ac-packages","ac-packages",1548109226).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.elm_light.packages.elm_packages)),lt.plugins.elm_light.packages.on_pkg_cancel,lt.plugins.elm_light.packages.on_pkg_blur,lt.plugins.elm_light.packages.on_pkg_change,new cljs.core.Keyword(null,"ac-version","ac-version",2051259807).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.elm_light.packages.elm_packages)),lt.plugins.elm_light.packages.on_change_version,lt.plugins.elm_light.packages.on_pkg_down,lt.plugins.elm_light.packages.on_pkg_up,new cljs.core.Keyword(null,"ac-versions","ac-versions",3107155800).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.elm_light.packages.elm_packages)),new cljs.core.Keyword(null,"ac-package","ac-package",892589325).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.elm_light.packages.elm_packages))]),new cljs.core.Keyword(null,"all-packages","all-packages",1123981067),new cljs.core.Keyword(null,"all-packages","all-packages",1123981067).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.elm_light.packages.elm_packages))], null))),document.getElementById("project-packages-wrapper"));
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
lt.object.assoc_in_BANG_.call(null,lt.plugins.elm_light.packages.elm_packages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"packages","packages",1764771935)], null),lt.plugins.elm_light.packages.get_project_deps.call(null,path));
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
var G__11218 = (line - 1);
line = G__11218;
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
var G__11219 = (line + 1);
line = G__11219;
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
var G__11220 = (line - 1);
line = G__11220;
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
if(!lt.util.load.provided_QMARK_('lt.plugins.elm-light')) {
goog.provide('lt.plugins.elm_light');
goog.require('cljs.core');
goog.require('lt.plugins.elm_light.utils');
goog.require('lt.objs.plugins');
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
goog.require('lt.objs.browser');
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
goog.require('clojure.string');
goog.require('lt.objs.browser');
goog.require('lt.plugins.elm_light.selection');
goog.require('lt.plugins.elm_light.selection');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.dialogs');
goog.require('lt.objs.console');
goog.require('lt.objs.proc');
goog.require('lt.objs.tabs');
goog.require('lt.objs.editor');
goog.require('lt.objs.console');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('lt.objs.editor.pool');
goog.require('lt.util.js');
goog.require('lt.objs.sidebar.clients');
goog.require('lt.objs.command');
lt.plugins.elm_light.elm_plugin_dir = lt.objs.plugins.find_plugin.call(null,"elm-light");
lt.plugins.elm_light.elm_cilent_path = lt.objs.files.join.call(null,lt.plugins.elm_light.elm_plugin_dir,"node","elm-client.js");
lt.plugins.elm_light.harbor = require("harbor").call(null,3000,4000);
lt.plugins.elm_light.claim_reactor_port = (function claim_reactor_port(path,cb){return lt.plugins.elm_light.harbor.claim(path,cb);
});
lt.plugins.elm_light.release_reactor_port = (function release_reactor_port(path){return lt.plugins.elm_light.harbor.release(path);
});
lt.plugins.elm_light.__BEH__on_out = (function __BEH__on_out(this$,data){var out = data.toString();if((out.indexOf("Connected") > -1))
{lt.objs.notifos.done_working.call(null);
return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"connected","connected",4729661051),true], null));
} else
{return cljs.core.println.call(null,out);
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light","on-out","lt.plugins.elm-light/on-out",4371628293),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.__BEH__on_out,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.out","proc.out",4302083112),null], null), null));
lt.plugins.elm_light.__BEH__on_error = (function __BEH__on_error(this$,data){var out = data.toString();if(cljs.core.not.call(null,new cljs.core.Keyword(null,"connected","connected",4729661051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))))
{return lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buffer","buffer",3930752946)], null),cljs.core.str,data);
} else
{return lt.objs.console.error.call(null,out);
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light","on-error","lt.plugins.elm-light/on-error",824317635),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.__BEH__on_error,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.error","proc.error",4143512802),null], null), null));
lt.plugins.elm_light.__BEH__on_exit = (function __BEH__on_exit(this$,data){if((cljs.core.not.call(null,new cljs.core.Keyword(null,"connected","connected",4729661051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))) && (cljs.core.seq.call(null,new cljs.core.Keyword(null,"buffer","buffer",3930752946).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))))
{lt.objs.notifos.done_working.call(null);
lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"We couldn't connect.",new cljs.core.Keyword(null,"body","body",1016933652),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),"Looks like there was an issue trying to connect\n                                              to the project. Here's what we got:",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),new cljs.core.Keyword(null,"buffer","buffer",3930752946).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))], null)], null),new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"close"], null)], null)], null));
lt.objs.clients.rem_BANG_.call(null,new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
} else
{}
var temp__4092__auto___11255 = new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___11255))
{var client_11256 = temp__4092__auto___11255;lt.plugins.elm_light.release_reactor_port.call(null,new cljs.core.Keyword(null,"dir","dir",1014003711).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client_11256)));
} else
{}
lt.objs.proc.kill_all.call(null,new cljs.core.Keyword(null,"procs","procs",1120844623).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
return lt.object.destroy_BANG_.call(null,this$);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light","on-exit","lt.plugins.elm-light/on-exit",2872985361),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.__BEH__on_exit,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.exit","proc.exit",4162906152),null], null), null));
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light","connecting-notifier","lt.plugins.elm-light/connecting-notifier",885283650),new cljs.core.Keyword(null,"triggers","triggers",2516997421),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.elm-light","on-exit","lt.plugins.elm-light/on-exit",2872985361),new cljs.core.Keyword("lt.plugins.elm-light","on-error","lt.plugins.elm-light/on-error",824317635),new cljs.core.Keyword("lt.plugins.elm-light","on-out","lt.plugins.elm-light/on-out",4371628293)], null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,client){lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",3951159101),client,new cljs.core.Keyword(null,"buffer","buffer",3930752946),""], null));
return null;
}));
lt.plugins.elm_light.bash_escape_spaces = (function bash_escape_spaces(s){if(cljs.core.truth_(s))
{return clojure.string.replace.call(null,s," ","\\ ");
} else
{return null;
}
});
lt.plugins.elm_light.start_elm_client = (function start_elm_client(p__11223){var map__11225 = p__11223;var map__11225__$1 = ((cljs.core.seq_QMARK_.call(null,map__11225))?cljs.core.apply.call(null,cljs.core.hash_map,map__11225):map__11225);var props = map__11225__$1;var client = cljs.core.get.call(null,map__11225__$1,new cljs.core.Keyword(null,"client","client",3951159101));var proj_path = cljs.core.get.call(null,map__11225__$1,new cljs.core.Keyword(null,"proj-path","proj-path",4362692615));var path = cljs.core.get.call(null,map__11225__$1,new cljs.core.Keyword(null,"path","path",1017337751));var obj = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.elm-light","connecting-notifier","lt.plugins.elm-light/connecting-notifier",885283650),client);var client_id = lt.objs.clients.__GT_id.call(null,client);lt.objs.notifos.working.call(null,"Connecting..");
return lt.plugins.elm_light.claim_reactor_port.call(null,proj_path,((function (obj,client_id,map__11225,map__11225__$1,props,client,proj_path,path){
return (function (err,port){lt.object.merge_BANG_.call(null,client,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dir","dir",1014003711),proj_path,new cljs.core.Keyword(null,"reactor-port","reactor-port",4649590590),port], null));
return lt.objs.proc.exec.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"command","command",1964298941),process.execPath,new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.elm_light.elm_cilent_path,lt.objs.clients.tcp.port,client_id,lt.plugins.elm_light.bash_escape_spaces.call(null,proj_path),port], null),new cljs.core.Keyword(null,"cwd","cwd",1014003170),lt.plugins.elm_light.elm_plugin_dir,new cljs.core.Keyword(null,"env","env",1014004831),new cljs.core.PersistentArrayMap(null, 1, ["ATOM_SHELL_INTERNAL_RUN_AS_NODE",1], null),new cljs.core.Keyword(null,"obj","obj",1014014057),obj], null));
});})(obj,client_id,map__11225,map__11225__$1,props,client,proj_path,path))
);
});
lt.plugins.elm_light.try_connect = (function try_connect(p__11226){var map__11228 = p__11226;var map__11228__$1 = ((cljs.core.seq_QMARK_.call(null,map__11228))?cljs.core.apply.call(null,cljs.core.hash_map,map__11228):map__11228);var props = map__11228__$1;var info = cljs.core.get.call(null,map__11228__$1,new cljs.core.Keyword(null,"info","info",1017141280));var path = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(info);var proj_path = lt.plugins.elm_light.utils.project_path.call(null,path);var client = lt.objs.clients.client_BANG_.call(null,new cljs.core.Keyword(null,"elm-client","elm-client",1622336068));if(cljs.core.truth_(proj_path))
{lt.plugins.elm_light.start_elm_client.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",1017337751),path,new cljs.core.Keyword(null,"proj-path","proj-path",4362692615),proj_path,new cljs.core.Keyword(null,"client","client",3951159101),client], null));
} else
{lt.objs.notifos.done_working.call(null);
lt.objs.notifos.set_msg_BANG_.call(null,[cljs.core.str("Couldn't find a elm-package.json in any parent of path: "),cljs.core.str(path)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
lt.objs.clients.rem_BANG_.call(null,client);
}
return client;
});
lt.plugins.elm_light.__BEH__elm_unsupported = (function __BEH__elm_unsupported(_,res){lt.objs.notifos.done_working.call(null);
return lt.objs.notifos.set_msg_BANG_.call(null,new cljs.core.Keyword(null,"err","err",1014004951).cljs$core$IFn$_invoke$arity$1(res),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light","elm-unsupported","lt.plugins.elm-light/elm-unsupported",2702653399),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.__BEH__elm_unsupported,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elm.unsupported","elm.unsupported",3962342495),null], null), null));
lt.plugins.elm_light.colorize_msg = (function colorize_msg(msg){return clojure.string.replace.call(null,clojure.string.replace.call(null,msg,/\[\d+m/,""),/\[0m/,"");
});
lt.plugins.elm_light.display_make_results = (function display_make_results(ed,res,path){if(cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__11229_SHARP_){return cljs.core._EQ_.call(null,"error",new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(p1__11229_SHARP_));
}),res)))
{lt.objs.notifos.set_msg_BANG_.call(null,"Elm make returned errors; check you editor or the console for details",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
} else
{}
var seq__11240_11257 = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__11230_SHARP_){return (cljs.core._EQ_.call(null,path,new cljs.core.Keyword(null,"file","file",1017047278).cljs$core$IFn$_invoke$arity$1(p1__11230_SHARP_))) && (cljs.core._EQ_.call(null,"warning",new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(p1__11230_SHARP_)));
}),res));var chunk__11241_11258 = null;var count__11242_11259 = 0;var i__11243_11260 = 0;while(true){
if((i__11243_11260 < count__11242_11259))
{var l_11261 = cljs.core._nth.call(null,chunk__11241_11258,i__11243_11260);lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.result","editor.result",4030217008),[cljs.core.str(new cljs.core.Keyword(null,"overview","overview",1544020203).cljs$core$IFn$_invoke$arity$1(l_11261)),cljs.core.str("\n"),cljs.core.str(lt.plugins.elm_light.colorize_msg.call(null,new cljs.core.Keyword(null,"details","details",2571625908).cljs$core$IFn$_invoke$arity$1(l_11261)))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"region","region",4374076006).cljs$core$IFn$_invoke$arity$1(l_11261))) - 1)], null));
{
var G__11262 = seq__11240_11257;
var G__11263 = chunk__11241_11258;
var G__11264 = count__11242_11259;
var G__11265 = (i__11243_11260 + 1);
seq__11240_11257 = G__11262;
chunk__11241_11258 = G__11263;
count__11242_11259 = G__11264;
i__11243_11260 = G__11265;
continue;
}
} else
{var temp__4092__auto___11266 = cljs.core.seq.call(null,seq__11240_11257);if(temp__4092__auto___11266)
{var seq__11240_11267__$1 = temp__4092__auto___11266;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11240_11267__$1))
{var c__5632__auto___11268 = cljs.core.chunk_first.call(null,seq__11240_11267__$1);{
var G__11269 = cljs.core.chunk_rest.call(null,seq__11240_11267__$1);
var G__11270 = c__5632__auto___11268;
var G__11271 = cljs.core.count.call(null,c__5632__auto___11268);
var G__11272 = 0;
seq__11240_11257 = G__11269;
chunk__11241_11258 = G__11270;
count__11242_11259 = G__11271;
i__11243_11260 = G__11272;
continue;
}
} else
{var l_11273 = cljs.core.first.call(null,seq__11240_11267__$1);lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.result","editor.result",4030217008),[cljs.core.str(new cljs.core.Keyword(null,"overview","overview",1544020203).cljs$core$IFn$_invoke$arity$1(l_11273)),cljs.core.str("\n"),cljs.core.str(lt.plugins.elm_light.colorize_msg.call(null,new cljs.core.Keyword(null,"details","details",2571625908).cljs$core$IFn$_invoke$arity$1(l_11273)))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"region","region",4374076006).cljs$core$IFn$_invoke$arity$1(l_11273))) - 1)], null));
{
var G__11274 = cljs.core.next.call(null,seq__11240_11267__$1);
var G__11275 = null;
var G__11276 = 0;
var G__11277 = 0;
seq__11240_11257 = G__11274;
chunk__11241_11258 = G__11275;
count__11242_11259 = G__11276;
i__11243_11260 = G__11277;
continue;
}
}
} else
{}
}
break;
}
var seq__11244 = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__11231_SHARP_){return cljs.core._EQ_.call(null,"error",new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(p1__11231_SHARP_));
}),res));var chunk__11245 = null;var count__11246 = 0;var i__11247 = 0;while(true){
if((i__11247 < count__11246))
{var l = cljs.core._nth.call(null,chunk__11245,i__11247);if(cljs.core._EQ_.call(null,path,new cljs.core.Keyword(null,"file","file",1017047278).cljs$core$IFn$_invoke$arity$1(l)))
{lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.exception","editor.exception",3983021184),[cljs.core.str(new cljs.core.Keyword(null,"overview","overview",1544020203).cljs$core$IFn$_invoke$arity$1(l)),cljs.core.str("\n"),cljs.core.str(lt.plugins.elm_light.colorize_msg.call(null,new cljs.core.Keyword(null,"details","details",2571625908).cljs$core$IFn$_invoke$arity$1(l)))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"region","region",4374076006).cljs$core$IFn$_invoke$arity$1(l))) - 1)], null));
} else
{var out_11278 = new cljs.core.Keyword(null,"overview","overview",1544020203).cljs$core$IFn$_invoke$arity$1(l);lt.objs.console.verbatim.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),out_11278], null)),": "),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em.line","em.line",3623844076),"[Elm error]"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em.file","em.file",3623665268),new cljs.core.Keyword(null,"file","file",1017047278).cljs$core$IFn$_invoke$arity$1(l)], null)),"error");
}
{
var G__11279 = seq__11244;
var G__11280 = chunk__11245;
var G__11281 = count__11246;
var G__11282 = (i__11247 + 1);
seq__11244 = G__11279;
chunk__11245 = G__11280;
count__11246 = G__11281;
i__11247 = G__11282;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__11244);if(temp__4092__auto__)
{var seq__11244__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11244__$1))
{var c__5632__auto__ = cljs.core.chunk_first.call(null,seq__11244__$1);{
var G__11283 = cljs.core.chunk_rest.call(null,seq__11244__$1);
var G__11284 = c__5632__auto__;
var G__11285 = cljs.core.count.call(null,c__5632__auto__);
var G__11286 = 0;
seq__11244 = G__11283;
chunk__11245 = G__11284;
count__11246 = G__11285;
i__11247 = G__11286;
continue;
}
} else
{var l = cljs.core.first.call(null,seq__11244__$1);if(cljs.core._EQ_.call(null,path,new cljs.core.Keyword(null,"file","file",1017047278).cljs$core$IFn$_invoke$arity$1(l)))
{lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.exception","editor.exception",3983021184),[cljs.core.str(new cljs.core.Keyword(null,"overview","overview",1544020203).cljs$core$IFn$_invoke$arity$1(l)),cljs.core.str("\n"),cljs.core.str(lt.plugins.elm_light.colorize_msg.call(null,new cljs.core.Keyword(null,"details","details",2571625908).cljs$core$IFn$_invoke$arity$1(l)))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"region","region",4374076006).cljs$core$IFn$_invoke$arity$1(l))) - 1)], null));
} else
{var out_11287 = new cljs.core.Keyword(null,"overview","overview",1544020203).cljs$core$IFn$_invoke$arity$1(l);lt.objs.console.verbatim.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),out_11287], null)),": "),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em.line","em.line",3623844076),"[Elm error]"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em.file","em.file",3623665268),new cljs.core.Keyword(null,"file","file",1017047278).cljs$core$IFn$_invoke$arity$1(l)], null)),"error");
}
{
var G__11288 = cljs.core.next.call(null,seq__11244__$1);
var G__11289 = null;
var G__11290 = 0;
var G__11291 = 0;
seq__11244 = G__11288;
chunk__11245 = G__11289;
count__11246 = G__11290;
i__11247 = G__11291;
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
lt.plugins.elm_light.__BEH__lint = (function __BEH__lint(ed){var info = new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed));var cl = lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor.elm.lint","editor.elm.lint",1086056222),new cljs.core.Keyword(null,"origin","origin",4300251800),ed,new cljs.core.Keyword(null,"info","info",1017141280),info,new cljs.core.Keyword(null,"create","create",3956577390),lt.plugins.elm_light.try_connect], null));lt.objs.notifos.working.call(null,[cljs.core.str("Starting elm linting of: "),cljs.core.str(new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(info))].join(''));
return lt.objs.clients.send.call(null,cl,new cljs.core.Keyword(null,"editor.elm.lint","editor.elm.lint",1086056222),cljs.core.assoc.call(null,info,new cljs.core.Keyword(null,"project-path","project-path",1907176907),lt.plugins.elm_light.utils.project_path.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(info))),new cljs.core.Keyword(null,"only","only",1017320222),ed);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light","lint","lt.plugins.elm-light/lint",1497250906),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.__BEH__lint,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lint","lint",1017226101),null], null), null),new cljs.core.Keyword(null,"description","description",3584325486),"Lint (/make) a given elm file");
lt.plugins.elm_light.__BEH__elm_lint_res = (function __BEH__elm_lint_res(ed,res){var path = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));lt.objs.notifos.done_working.call(null,"Elm linted");
return lt.plugins.elm_light.display_make_results.call(null,ed,res,path);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light","elm-lint-res","lt.plugins.elm-light/elm-lint-res",2508500808),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.__BEH__elm_lint_res,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elm.lint.res","elm.lint.res",4381822959),null], null), null));
lt.plugins.elm_light.__BEH__make = (function __BEH__make(ed){var info = new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed));var cl = lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor.elm.make","editor.elm.make",1086078217),new cljs.core.Keyword(null,"origin","origin",4300251800),ed,new cljs.core.Keyword(null,"info","info",1017141280),info,new cljs.core.Keyword(null,"create","create",3956577390),lt.plugins.elm_light.try_connect], null));lt.objs.notifos.working.call(null,[cljs.core.str("Starting elm make for: "),cljs.core.str(new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(info))].join(''));
return lt.objs.clients.send.call(null,cl,new cljs.core.Keyword(null,"editor.elm.make","editor.elm.make",1086078217),cljs.core.assoc.call(null,info,new cljs.core.Keyword(null,"project-path","project-path",1907176907),lt.plugins.elm_light.utils.project_path.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(info))),new cljs.core.Keyword(null,"only","only",1017320222),ed);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light","make","lt.plugins.elm-light/make",1497244279),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.__BEH__make,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elm.make","elm.make",1176641960),null], null), null),new cljs.core.Keyword(null,"description","description",3584325486),"Make (to js) a given elm file");
lt.plugins.elm_light.__BEH__elm_make_res = (function __BEH__elm_make_res(ed,res){var path = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));lt.objs.notifos.done_working.call(null,[cljs.core.str("Elm make completed for: "),cljs.core.str(path)].join(''));
return lt.plugins.elm_light.display_make_results.call(null,ed,res,path);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light","elm-make-res","lt.plugins.elm-light/elm-make-res",3896116701),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.__BEH__elm_make_res,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elm.make.res","elm.make.res",3219830874),null], null), null));
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
lt.plugins.elm_light.create_hints = (function create_hints(completions){return cljs.core.map.call(null,(function (p1__11248_SHARP_){return {"text": new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(p1__11248_SHARP_), "completion": new cljs.core.Keyword(null,"completion","completion",4767668046).cljs$core$IFn$_invoke$arity$1(p1__11248_SHARP_)};
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
lt.plugins.elm_light.__BEH__elm_doc_search = (function __BEH__elm_doc_search(this$,cur){return cljs.core.conj.call(null,cur,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1116631654),"elm",new cljs.core.Keyword(null,"trigger","trigger",4248979754),new cljs.core.Keyword(null,"docs.elm.search","docs.elm.search",737241333),new cljs.core.Keyword(null,"file-types","file-types",1727875162),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["elm",null], null), null)], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light","elm-doc-search","lt.plugins.elm-light/elm-doc-search",546131961),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.__BEH__elm_doc_search,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"types+","types+",4450069060),null], null), null));
lt.plugins.elm_light.__BEH__elm_doc = (function __BEH__elm_doc(ed){var pos = lt.objs.editor.__GT_cursor.call(null,ed);var token = lt.plugins.elm_light.utils.find_symbol.call(null,ed,pos);var command = new cljs.core.Keyword(null,"editor.elm.doc","editor.elm.doc",1570413537);var info = cljs.core.assoc.call(null,cljs.core.deref.call(null,ed).call(null,new cljs.core.Keyword(null,"info","info",1017141280)),new cljs.core.Keyword(null,"loc","loc",1014011570),pos,new cljs.core.Keyword(null,"sym","sym",1014018617),token);if(cljs.core.truth_(token))
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
lt.plugins.elm_light.__BEH__on_eval__DOT__one = (function __BEH__on_eval__DOT__one(ed){var pos = lt.objs.editor.__GT_cursor.call(null,ed);var info = cljs.core.conj.call(null,new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)),(cljs.core.truth_(lt.objs.editor.selection_QMARK_.call(null,ed))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"code","code",1016963423),lt.objs.editor.selection.call(null,ed),new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",1123661780),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(lt.objs.editor.__GT_cursor.call(null,ed,"start")),new cljs.core.Keyword(null,"end","end",1014004813),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(lt.objs.editor.__GT_cursor.call(null,ed,"end"))], null)], null):(function (){var temp__4090__auto__ = lt.plugins.elm_light.selection.get_top_level_expr.call(null,ed,pos);if(cljs.core.truth_(temp__4090__auto__))
{var rng = temp__4090__auto__;return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",1014015430),pos,new cljs.core.Keyword(null,"code","code",1016963423),lt.objs.editor.range.call(null,ed,new cljs.core.Keyword(null,"from","from",1017056028).cljs$core$IFn$_invoke$arity$1(rng),new cljs.core.Keyword(null,"to","to",1013907949).cljs$core$IFn$_invoke$arity$1(rng)),new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",1123661780),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"from","from",1017056028).cljs$core$IFn$_invoke$arity$1(rng)),new cljs.core.Keyword(null,"end","end",1014004813),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"end","end",1014004813).cljs$core$IFn$_invoke$arity$1(rng))], null)], null);
} else
{return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",1014015430),pos,new cljs.core.Keyword(null,"code","code",1016963423),lt.objs.editor.line.call(null,ed,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(pos)),new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",1123661780),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(pos),new cljs.core.Keyword(null,"end","end",1014004813),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(pos)], null)], null);
}
})()));return lt.object.raise.call(null,lt.plugins.elm_light.elm,new cljs.core.Keyword(null,"eval!","eval!",1110791799),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"origin","origin",4300251800),ed,new cljs.core.Keyword(null,"info","info",1017141280),info], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light","on-eval.one","lt.plugins.elm-light/on-eval.one",3108499739),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.__BEH__on_eval__DOT__one,new cljs.core.Keyword(null,"desc","desc",1016984067),"Elm repl: Eval current selection",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval.one","eval.one",1173589382),null], null), null));
lt.plugins.elm_light.__BEH__eval_BANG_ = (function __BEH__eval_BANG_(this$,event){var map__11250 = event;var map__11250__$1 = ((cljs.core.seq_QMARK_.call(null,map__11250))?cljs.core.apply.call(null,cljs.core.hash_map,map__11250):map__11250);var origin = cljs.core.get.call(null,map__11250__$1,new cljs.core.Keyword(null,"origin","origin",4300251800));var info = cljs.core.get.call(null,map__11250__$1,new cljs.core.Keyword(null,"info","info",1017141280));lt.objs.notifos.working.call(null,"Evaluating elm...");
return lt.objs.clients.send.call(null,lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor.eval.elm","editor.eval.elm",1083015975),new cljs.core.Keyword(null,"origin","origin",4300251800),origin,new cljs.core.Keyword(null,"info","info",1017141280),info,new cljs.core.Keyword(null,"create","create",3956577390),lt.plugins.elm_light.try_connect], null)),new cljs.core.Keyword(null,"editor.eval.elm","editor.eval.elm",1083015975),info,new cljs.core.Keyword(null,"only","only",1017320222),origin);
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
lt.plugins.elm_light.__BEH__repl_restart_BANG_ = (function __BEH__repl_restart_BANG_(p__11251){var map__11253 = p__11251;var map__11253__$1 = ((cljs.core.seq_QMARK_.call(null,map__11253))?cljs.core.apply.call(null,cljs.core.hash_map,map__11253):map__11253);var ed = map__11253__$1;var info = cljs.core.get.call(null,map__11253__$1,new cljs.core.Keyword(null,"info","info",1017141280));var temp__4092__auto__ = new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));if(cljs.core.truth_(temp__4092__auto__))
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
lt.plugins.elm_light.__BEH__elm_browse_BANG_ = (function __BEH__elm_browse_BANG_(ed,debug_QMARK_){var path = lt.plugins.elm_light.utils.reactor_path.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed))));var client = lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor.eval.elm","editor.eval.elm",1083015975),new cljs.core.Keyword(null,"origin","origin",4300251800),ed,new cljs.core.Keyword(null,"info","info",1017141280),new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)),new cljs.core.Keyword(null,"create","create",3956577390),lt.plugins.elm_light.try_connect], null));if(cljs.core.truth_((function (){var and__4872__auto__ = client;if(cljs.core.truth_(and__4872__auto__))
{return path;
} else
{return and__4872__auto__;
}
})()))
{lt.objs.notifos.working.call(null,"Opening elm file in browser");
var b_11292 = (function (){var or__4884__auto__ = cljs.core.first.call(null,lt.object.by_tag.call(null,new cljs.core.Keyword(null,"browser","browser",1164844698)));if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return lt.objs.browser.add.call(null);
}
})();var get_url_11293 = ((function (b_11292,path,client){
return (function (){return [cljs.core.str("http://localhost:"),cljs.core.str(new cljs.core.Keyword(null,"reactor-port","reactor-port",4649590590).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client))),cljs.core.str(path),cljs.core.str((cljs.core.truth_(debug_QMARK_)?"?debug":""))].join('');
});})(b_11292,path,client))
;if(cljs.core.truth_(new cljs.core.Keyword(null,"connected","connected",4729661051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client))))
{lt.object.raise.call(null,b_11292,new cljs.core.Keyword(null,"navigate!","navigate!",1766726722),get_url_11293.call(null));
} else
{lt.util.js.wait.call(null,100,((function (b_11292,get_url_11293,path,client){
return (function (){return lt.object.raise.call(null,b_11292,new cljs.core.Keyword(null,"navigate!","navigate!",1766726722),get_url_11293.call(null));
});})(b_11292,get_url_11293,path,client))
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),lt.object.__GT_content.call(null,main)], null);
}));
lt.plugins.elm_light.add_repl = (function add_repl(){var elmrepl = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.elm-light","elmrepl","lt.plugins.elm-light/elmrepl",3126445904));lt.objs.tabs.add_BANG_.call(null,elmrepl);
lt.objs.tabs.active_BANG_.call(null,elmrepl);
return elmrepl;
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"elmrepl","elmrepl",3653571719),new cljs.core.Keyword(null,"desc","desc",1016984067),"Elm repl: Open a elm repl",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.plugins.elm_light.add_repl.call(null);
})], null));
lt.plugins.elm_light.block_comment = (function block_comment(ed,from,to,opts){return lt.objs.editor.__GT_cm_ed.call(null,ed).blockComment(cljs.core.clj__GT_js.call(null,from),cljs.core.clj__GT_js.call(null,to),cljs.core.clj__GT_js.call(null,opts));
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"toggle-comment-selection-block-aware","toggle-comment-selection-block-aware",785248296),new cljs.core.Keyword(null,"desc","desc",1016984067),"Editor: Toggle comment line(s) block aware",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var cur = temp__4092__auto__;var cursor = lt.objs.editor.__GT_cursor.call(null,cur,"start");var vec__11254 = (cljs.core.truth_(lt.objs.editor.selection_QMARK_.call(null,cur))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cursor,lt.objs.editor.__GT_cursor.call(null,cur,"end")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cursor,cursor], null));var start = cljs.core.nth.call(null,vec__11254,0,null);var end = cljs.core.nth.call(null,vec__11254,1,null);if(cljs.core.truth_(lt.objs.editor.uncomment.call(null,cur,start,end)))
{return null;
} else
{if(!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(start),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(end))))
{return lt.plugins.elm_light.block_comment.call(null,cur,cursor,end,new cljs.core.Keyword("lt.plugins.elm-light","comment-options","lt.plugins.elm-light/comment-options",2036571701).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cur)));
} else
{return lt.objs.editor.line_comment.call(null,cur,cursor,lt.objs.editor.__GT_cursor.call(null,cur,"end"),new cljs.core.Keyword("lt.plugins.elm-light","comment-options","lt.plugins.elm-light/comment-options",2036571701).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cur)));
}
}
} else
{return null;
}
})], null));
}

//# sourceMappingURL=elm-light_compiled.js.map