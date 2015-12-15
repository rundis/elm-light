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
{var o = (function (){var obj11089 = {};return obj11089;
})();var seq__11090_11103 = cljs.core.seq.call(null,obj);var chunk__11091_11104 = null;var count__11092_11105 = 0;var i__11093_11106 = 0;while(true){
if((i__11093_11106 < count__11092_11105))
{var vec__11094_11107 = cljs.core._nth.call(null,chunk__11091_11104,i__11093_11106);var k_11108 = cljs.core.nth.call(null,vec__11094_11107,0,null);var v_11109 = cljs.core.nth.call(null,vec__11094_11107,1,null);(o[cljs.core.name.call(null,k_11108)] = js_props.call(null,v_11109));
{
var G__11110 = seq__11090_11103;
var G__11111 = chunk__11091_11104;
var G__11112 = count__11092_11105;
var G__11113 = (i__11093_11106 + 1);
seq__11090_11103 = G__11110;
chunk__11091_11104 = G__11111;
count__11092_11105 = G__11112;
i__11093_11106 = G__11113;
continue;
}
} else
{var temp__4092__auto___11114 = cljs.core.seq.call(null,seq__11090_11103);if(temp__4092__auto___11114)
{var seq__11090_11115__$1 = temp__4092__auto___11114;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11090_11115__$1))
{var c__5632__auto___11116 = cljs.core.chunk_first.call(null,seq__11090_11115__$1);{
var G__11117 = cljs.core.chunk_rest.call(null,seq__11090_11115__$1);
var G__11118 = c__5632__auto___11116;
var G__11119 = cljs.core.count.call(null,c__5632__auto___11116);
var G__11120 = 0;
seq__11090_11103 = G__11117;
chunk__11091_11104 = G__11118;
count__11092_11105 = G__11119;
i__11093_11106 = G__11120;
continue;
}
} else
{var vec__11095_11121 = cljs.core.first.call(null,seq__11090_11115__$1);var k_11122 = cljs.core.nth.call(null,vec__11095_11121,0,null);var v_11123 = cljs.core.nth.call(null,vec__11095_11121,1,null);(o[cljs.core.name.call(null,k_11122)] = js_props.call(null,v_11123));
{
var G__11124 = cljs.core.next.call(null,seq__11090_11115__$1);
var G__11125 = null;
var G__11126 = 0;
var G__11127 = 0;
seq__11090_11103 = G__11124;
chunk__11091_11104 = G__11125;
count__11092_11105 = G__11126;
i__11093_11106 = G__11127;
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
quiescent.component = (function component(renderer){var react_component = React.createClass({"render": (function (){var this$ = this;var _STAR_component_STAR_11097 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return cljs.core.apply.call(null,renderer,(this$.props["value"]),(this$.props["statics"]));
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11097;
}}), "shouldComponentUpdate": (function (next_props,_){var this$ = this;return cljs.core.not_EQ_.call(null,(this$.props["value"]),(next_props["value"]));
})});return ((function (react_component){
return (function() { 
var G__11128__delegate = function (value,static_args){return react_component.call(null,{"statics": static_args, "value": value});
};
var G__11128 = function (value,var_args){
var static_args = null;if (arguments.length > 1) {
  static_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__11128__delegate.call(this,value,static_args);};
G__11128.cljs$lang$maxFixedArity = 1;
G__11128.cljs$lang$applyTo = (function (arglist__11129){
var value = cljs.core.first(arglist__11129);
var static_args = cljs.core.rest(arglist__11129);
return G__11128__delegate(value,static_args);
});
G__11128.cljs$core$IFn$_invoke$arity$variadic = G__11128__delegate;
return G__11128;
})()
;
;})(react_component))
});
/**
* Wrapper component used to mix-in lifecycle access
*/
quiescent.WrapperComponent = React.createClass({"componentWillUnmount": (function (){var this$ = this;var temp__4092__auto__ = (this$.props["onWillUnmount"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_11102 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null);
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11102;
}} else
{return null;
}
}), "componentWillUpdate": (function (_,___$1){var this$ = this;var temp__4092__auto__ = (this$.props["onWillUpdate"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_11101 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null);
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11101;
}} else
{return null;
}
}), "componentWillMount": (function (){var this$ = this;var temp__4092__auto__ = (this$.props["onWillMount"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_11100 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null);
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11100;
}} else
{return null;
}
}), "componentDidMount": (function (){var this$ = this;var temp__4092__auto__ = (this$.props["onMount"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_11099 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null,this$.getDOMNode());
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11099;
}} else
{return null;
}
}), "componentDidUpdate": (function (prev_props,prev_state){var this$ = this;var temp__4092__auto__ = (this$.props["onUpdate"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_11098 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null,this$.getDOMNode());
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11098;
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
var wrapper__delegate = function (child,kvs){var props = quiescent.js_props.call(null,cljs.core.apply.call(null,cljs.core.array_map,new cljs.core.Keyword(null,"wrappee","wrappee",2609412088),child,kvs));var temp__4092__auto___11130 = (child.props["key"]);if(cljs.core.truth_(temp__4092__auto___11130))
{var key_11131 = temp__4092__auto___11130;(props["key"] = key_11131);
} else
{}
return quiescent.WrapperComponent.call(null,props);
};
var wrapper = function (child,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrapper__delegate.call(this,child,kvs);};
wrapper.cljs$lang$maxFixedArity = 1;
wrapper.cljs$lang$applyTo = (function (arglist__11132){
var child = cljs.core.first(arglist__11132);
var kvs = cljs.core.rest(arglist__11132);
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
var a__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__7514_8462 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__7515_8463 = null;var count__7516_8464 = 0;var i__7517_8465 = 0;while(true){
if((i__7517_8465 < count__7516_8464))
{var arg__6514__auto___8466 = cljs.core._nth.call(null,chunk__7515_8463,i__7517_8465);a__6513__auto__.push(arg__6514__auto___8466);
{
var G__8467 = seq__7514_8462;
var G__8468 = chunk__7515_8463;
var G__8469 = count__7516_8464;
var G__8470 = (i__7517_8465 + 1);
seq__7514_8462 = G__8467;
chunk__7515_8463 = G__8468;
count__7516_8464 = G__8469;
i__7517_8465 = G__8470;
continue;
}
} else
{var temp__4092__auto___8471 = cljs.core.seq.call(null,seq__7514_8462);if(temp__4092__auto___8471)
{var seq__7514_8472__$1 = temp__4092__auto___8471;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7514_8472__$1))
{var c__5632__auto___8473 = cljs.core.chunk_first.call(null,seq__7514_8472__$1);{
var G__8474 = cljs.core.chunk_rest.call(null,seq__7514_8472__$1);
var G__8475 = c__5632__auto___8473;
var G__8476 = cljs.core.count.call(null,c__5632__auto___8473);
var G__8477 = 0;
seq__7514_8462 = G__8474;
chunk__7515_8463 = G__8475;
count__7516_8464 = G__8476;
i__7517_8465 = G__8477;
continue;
}
} else
{var arg__6514__auto___8478 = cljs.core.first.call(null,seq__7514_8472__$1);a__6513__auto__.push(arg__6514__auto___8478);
{
var G__8479 = cljs.core.next.call(null,seq__7514_8472__$1);
var G__8480 = null;
var G__8481 = 0;
var G__8482 = 0;
seq__7514_8462 = G__8479;
chunk__7515_8463 = G__8480;
count__7516_8464 = G__8481;
i__7517_8465 = G__8482;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.a.apply(null,a__6513__auto__);
};
var a = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return a__delegate.call(this,args__6512__auto__);};
a.cljs$lang$maxFixedArity = 0;
a.cljs$lang$applyTo = (function (arglist__8483){
var args__6512__auto__ = cljs.core.seq(arglist__8483);
return a__delegate(args__6512__auto__);
});
a.cljs$core$IFn$_invoke$arity$variadic = a__delegate;
return a;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.abbr = (function() { 
var abbr__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__7522_8484 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__7523_8485 = null;var count__7524_8486 = 0;var i__7525_8487 = 0;while(true){
if((i__7525_8487 < count__7524_8486))
{var arg__6514__auto___8488 = cljs.core._nth.call(null,chunk__7523_8485,i__7525_8487);a__6513__auto__.push(arg__6514__auto___8488);
{
var G__8489 = seq__7522_8484;
var G__8490 = chunk__7523_8485;
var G__8491 = count__7524_8486;
var G__8492 = (i__7525_8487 + 1);
seq__7522_8484 = G__8489;
chunk__7523_8485 = G__8490;
count__7524_8486 = G__8491;
i__7525_8487 = G__8492;
continue;
}
} else
{var temp__4092__auto___8493 = cljs.core.seq.call(null,seq__7522_8484);if(temp__4092__auto___8493)
{var seq__7522_8494__$1 = temp__4092__auto___8493;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7522_8494__$1))
{var c__5632__auto___8495 = cljs.core.chunk_first.call(null,seq__7522_8494__$1);{
var G__8496 = cljs.core.chunk_rest.call(null,seq__7522_8494__$1);
var G__8497 = c__5632__auto___8495;
var G__8498 = cljs.core.count.call(null,c__5632__auto___8495);
var G__8499 = 0;
seq__7522_8484 = G__8496;
chunk__7523_8485 = G__8497;
count__7524_8486 = G__8498;
i__7525_8487 = G__8499;
continue;
}
} else
{var arg__6514__auto___8500 = cljs.core.first.call(null,seq__7522_8494__$1);a__6513__auto__.push(arg__6514__auto___8500);
{
var G__8501 = cljs.core.next.call(null,seq__7522_8494__$1);
var G__8502 = null;
var G__8503 = 0;
var G__8504 = 0;
seq__7522_8484 = G__8501;
chunk__7523_8485 = G__8502;
count__7524_8486 = G__8503;
i__7525_8487 = G__8504;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.abbr.apply(null,a__6513__auto__);
};
var abbr = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return abbr__delegate.call(this,args__6512__auto__);};
abbr.cljs$lang$maxFixedArity = 0;
abbr.cljs$lang$applyTo = (function (arglist__8505){
var args__6512__auto__ = cljs.core.seq(arglist__8505);
return abbr__delegate(args__6512__auto__);
});
abbr.cljs$core$IFn$_invoke$arity$variadic = abbr__delegate;
return abbr;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.address = (function() { 
var address__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__7530_8506 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__7531_8507 = null;var count__7532_8508 = 0;var i__7533_8509 = 0;while(true){
if((i__7533_8509 < count__7532_8508))
{var arg__6514__auto___8510 = cljs.core._nth.call(null,chunk__7531_8507,i__7533_8509);a__6513__auto__.push(arg__6514__auto___8510);
{
var G__8511 = seq__7530_8506;
var G__8512 = chunk__7531_8507;
var G__8513 = count__7532_8508;
var G__8514 = (i__7533_8509 + 1);
seq__7530_8506 = G__8511;
chunk__7531_8507 = G__8512;
count__7532_8508 = G__8513;
i__7533_8509 = G__8514;
continue;
}
} else
{var temp__4092__auto___8515 = cljs.core.seq.call(null,seq__7530_8506);if(temp__4092__auto___8515)
{var seq__7530_8516__$1 = temp__4092__auto___8515;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7530_8516__$1))
{var c__5632__auto___8517 = cljs.core.chunk_first.call(null,seq__7530_8516__$1);{
var G__8518 = cljs.core.chunk_rest.call(null,seq__7530_8516__$1);
var G__8519 = c__5632__auto___8517;
var G__8520 = cljs.core.count.call(null,c__5632__auto___8517);
var G__8521 = 0;
seq__7530_8506 = G__8518;
chunk__7531_8507 = G__8519;
count__7532_8508 = G__8520;
i__7533_8509 = G__8521;
continue;
}
} else
{var arg__6514__auto___8522 = cljs.core.first.call(null,seq__7530_8516__$1);a__6513__auto__.push(arg__6514__auto___8522);
{
var G__8523 = cljs.core.next.call(null,seq__7530_8516__$1);
var G__8524 = null;
var G__8525 = 0;
var G__8526 = 0;
seq__7530_8506 = G__8523;
chunk__7531_8507 = G__8524;
count__7532_8508 = G__8525;
i__7533_8509 = G__8526;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.address.apply(null,a__6513__auto__);
};
var address = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return address__delegate.call(this,args__6512__auto__);};
address.cljs$lang$maxFixedArity = 0;
address.cljs$lang$applyTo = (function (arglist__8527){
var args__6512__auto__ = cljs.core.seq(arglist__8527);
return address__delegate(args__6512__auto__);
});
address.cljs$core$IFn$_invoke$arity$variadic = address__delegate;
return address;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.area = (function() { 
var area__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__7538_8528 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__7539_8529 = null;var count__7540_8530 = 0;var i__7541_8531 = 0;while(true){
if((i__7541_8531 < count__7540_8530))
{var arg__6514__auto___8532 = cljs.core._nth.call(null,chunk__7539_8529,i__7541_8531);a__6513__auto__.push(arg__6514__auto___8532);
{
var G__8533 = seq__7538_8528;
var G__8534 = chunk__7539_8529;
var G__8535 = count__7540_8530;
var G__8536 = (i__7541_8531 + 1);
seq__7538_8528 = G__8533;
chunk__7539_8529 = G__8534;
count__7540_8530 = G__8535;
i__7541_8531 = G__8536;
continue;
}
} else
{var temp__4092__auto___8537 = cljs.core.seq.call(null,seq__7538_8528);if(temp__4092__auto___8537)
{var seq__7538_8538__$1 = temp__4092__auto___8537;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7538_8538__$1))
{var c__5632__auto___8539 = cljs.core.chunk_first.call(null,seq__7538_8538__$1);{
var G__8540 = cljs.core.chunk_rest.call(null,seq__7538_8538__$1);
var G__8541 = c__5632__auto___8539;
var G__8542 = cljs.core.count.call(null,c__5632__auto___8539);
var G__8543 = 0;
seq__7538_8528 = G__8540;
chunk__7539_8529 = G__8541;
count__7540_8530 = G__8542;
i__7541_8531 = G__8543;
continue;
}
} else
{var arg__6514__auto___8544 = cljs.core.first.call(null,seq__7538_8538__$1);a__6513__auto__.push(arg__6514__auto___8544);
{
var G__8545 = cljs.core.next.call(null,seq__7538_8538__$1);
var G__8546 = null;
var G__8547 = 0;
var G__8548 = 0;
seq__7538_8528 = G__8545;
chunk__7539_8529 = G__8546;
count__7540_8530 = G__8547;
i__7541_8531 = G__8548;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.area.apply(null,a__6513__auto__);
};
var area = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return area__delegate.call(this,args__6512__auto__);};
area.cljs$lang$maxFixedArity = 0;
area.cljs$lang$applyTo = (function (arglist__8549){
var args__6512__auto__ = cljs.core.seq(arglist__8549);
return area__delegate(args__6512__auto__);
});
area.cljs$core$IFn$_invoke$arity$variadic = area__delegate;
return area;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.article = (function() { 
var article__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__7546_8550 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__7547_8551 = null;var count__7548_8552 = 0;var i__7549_8553 = 0;while(true){
if((i__7549_8553 < count__7548_8552))
{var arg__6514__auto___8554 = cljs.core._nth.call(null,chunk__7547_8551,i__7549_8553);a__6513__auto__.push(arg__6514__auto___8554);
{
var G__8555 = seq__7546_8550;
var G__8556 = chunk__7547_8551;
var G__8557 = count__7548_8552;
var G__8558 = (i__7549_8553 + 1);
seq__7546_8550 = G__8555;
chunk__7547_8551 = G__8556;
count__7548_8552 = G__8557;
i__7549_8553 = G__8558;
continue;
}
} else
{var temp__4092__auto___8559 = cljs.core.seq.call(null,seq__7546_8550);if(temp__4092__auto___8559)
{var seq__7546_8560__$1 = temp__4092__auto___8559;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7546_8560__$1))
{var c__5632__auto___8561 = cljs.core.chunk_first.call(null,seq__7546_8560__$1);{
var G__8562 = cljs.core.chunk_rest.call(null,seq__7546_8560__$1);
var G__8563 = c__5632__auto___8561;
var G__8564 = cljs.core.count.call(null,c__5632__auto___8561);
var G__8565 = 0;
seq__7546_8550 = G__8562;
chunk__7547_8551 = G__8563;
count__7548_8552 = G__8564;
i__7549_8553 = G__8565;
continue;
}
} else
{var arg__6514__auto___8566 = cljs.core.first.call(null,seq__7546_8560__$1);a__6513__auto__.push(arg__6514__auto___8566);
{
var G__8567 = cljs.core.next.call(null,seq__7546_8560__$1);
var G__8568 = null;
var G__8569 = 0;
var G__8570 = 0;
seq__7546_8550 = G__8567;
chunk__7547_8551 = G__8568;
count__7548_8552 = G__8569;
i__7549_8553 = G__8570;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.article.apply(null,a__6513__auto__);
};
var article = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return article__delegate.call(this,args__6512__auto__);};
article.cljs$lang$maxFixedArity = 0;
article.cljs$lang$applyTo = (function (arglist__8571){
var args__6512__auto__ = cljs.core.seq(arglist__8571);
return article__delegate(args__6512__auto__);
});
article.cljs$core$IFn$_invoke$arity$variadic = article__delegate;
return article;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.aside = (function() { 
var aside__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__7554_8572 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__7555_8573 = null;var count__7556_8574 = 0;var i__7557_8575 = 0;while(true){
if((i__7557_8575 < count__7556_8574))
{var arg__6514__auto___8576 = cljs.core._nth.call(null,chunk__7555_8573,i__7557_8575);a__6513__auto__.push(arg__6514__auto___8576);
{
var G__8577 = seq__7554_8572;
var G__8578 = chunk__7555_8573;
var G__8579 = count__7556_8574;
var G__8580 = (i__7557_8575 + 1);
seq__7554_8572 = G__8577;
chunk__7555_8573 = G__8578;
count__7556_8574 = G__8579;
i__7557_8575 = G__8580;
continue;
}
} else
{var temp__4092__auto___8581 = cljs.core.seq.call(null,seq__7554_8572);if(temp__4092__auto___8581)
{var seq__7554_8582__$1 = temp__4092__auto___8581;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7554_8582__$1))
{var c__5632__auto___8583 = cljs.core.chunk_first.call(null,seq__7554_8582__$1);{
var G__8584 = cljs.core.chunk_rest.call(null,seq__7554_8582__$1);
var G__8585 = c__5632__auto___8583;
var G__8586 = cljs.core.count.call(null,c__5632__auto___8583);
var G__8587 = 0;
seq__7554_8572 = G__8584;
chunk__7555_8573 = G__8585;
count__7556_8574 = G__8586;
i__7557_8575 = G__8587;
continue;
}
} else
{var arg__6514__auto___8588 = cljs.core.first.call(null,seq__7554_8582__$1);a__6513__auto__.push(arg__6514__auto___8588);
{
var G__8589 = cljs.core.next.call(null,seq__7554_8582__$1);
var G__8590 = null;
var G__8591 = 0;
var G__8592 = 0;
seq__7554_8572 = G__8589;
chunk__7555_8573 = G__8590;
count__7556_8574 = G__8591;
i__7557_8575 = G__8592;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.aside.apply(null,a__6513__auto__);
};
var aside = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return aside__delegate.call(this,args__6512__auto__);};
aside.cljs$lang$maxFixedArity = 0;
aside.cljs$lang$applyTo = (function (arglist__8593){
var args__6512__auto__ = cljs.core.seq(arglist__8593);
return aside__delegate(args__6512__auto__);
});
aside.cljs$core$IFn$_invoke$arity$variadic = aside__delegate;
return aside;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.audio = (function() { 
var audio__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__7562_8594 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__7563_8595 = null;var count__7564_8596 = 0;var i__7565_8597 = 0;while(true){
if((i__7565_8597 < count__7564_8596))
{var arg__6514__auto___8598 = cljs.core._nth.call(null,chunk__7563_8595,i__7565_8597);a__6513__auto__.push(arg__6514__auto___8598);
{
var G__8599 = seq__7562_8594;
var G__8600 = chunk__7563_8595;
var G__8601 = count__7564_8596;
var G__8602 = (i__7565_8597 + 1);
seq__7562_8594 = G__8599;
chunk__7563_8595 = G__8600;
count__7564_8596 = G__8601;
i__7565_8597 = G__8602;
continue;
}
} else
{var temp__4092__auto___8603 = cljs.core.seq.call(null,seq__7562_8594);if(temp__4092__auto___8603)
{var seq__7562_8604__$1 = temp__4092__auto___8603;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7562_8604__$1))
{var c__5632__auto___8605 = cljs.core.chunk_first.call(null,seq__7562_8604__$1);{
var G__8606 = cljs.core.chunk_rest.call(null,seq__7562_8604__$1);
var G__8607 = c__5632__auto___8605;
var G__8608 = cljs.core.count.call(null,c__5632__auto___8605);
var G__8609 = 0;
seq__7562_8594 = G__8606;
chunk__7563_8595 = G__8607;
count__7564_8596 = G__8608;
i__7565_8597 = G__8609;
continue;
}
} else
{var arg__6514__auto___8610 = cljs.core.first.call(null,seq__7562_8604__$1);a__6513__auto__.push(arg__6514__auto___8610);
{
var G__8611 = cljs.core.next.call(null,seq__7562_8604__$1);
var G__8612 = null;
var G__8613 = 0;
var G__8614 = 0;
seq__7562_8594 = G__8611;
chunk__7563_8595 = G__8612;
count__7564_8596 = G__8613;
i__7565_8597 = G__8614;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.audio.apply(null,a__6513__auto__);
};
var audio = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return audio__delegate.call(this,args__6512__auto__);};
audio.cljs$lang$maxFixedArity = 0;
audio.cljs$lang$applyTo = (function (arglist__8615){
var args__6512__auto__ = cljs.core.seq(arglist__8615);
return audio__delegate(args__6512__auto__);
});
audio.cljs$core$IFn$_invoke$arity$variadic = audio__delegate;
return audio;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.b = (function() { 
var b__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__7570_8616 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__7571_8617 = null;var count__7572_8618 = 0;var i__7573_8619 = 0;while(true){
if((i__7573_8619 < count__7572_8618))
{var arg__6514__auto___8620 = cljs.core._nth.call(null,chunk__7571_8617,i__7573_8619);a__6513__auto__.push(arg__6514__auto___8620);
{
var G__8621 = seq__7570_8616;
var G__8622 = chunk__7571_8617;
var G__8623 = count__7572_8618;
var G__8624 = (i__7573_8619 + 1);
seq__7570_8616 = G__8621;
chunk__7571_8617 = G__8622;
count__7572_8618 = G__8623;
i__7573_8619 = G__8624;
continue;
}
} else
{var temp__4092__auto___8625 = cljs.core.seq.call(null,seq__7570_8616);if(temp__4092__auto___8625)
{var seq__7570_8626__$1 = temp__4092__auto___8625;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7570_8626__$1))
{var c__5632__auto___8627 = cljs.core.chunk_first.call(null,seq__7570_8626__$1);{
var G__8628 = cljs.core.chunk_rest.call(null,seq__7570_8626__$1);
var G__8629 = c__5632__auto___8627;
var G__8630 = cljs.core.count.call(null,c__5632__auto___8627);
var G__8631 = 0;
seq__7570_8616 = G__8628;
chunk__7571_8617 = G__8629;
count__7572_8618 = G__8630;
i__7573_8619 = G__8631;
continue;
}
} else
{var arg__6514__auto___8632 = cljs.core.first.call(null,seq__7570_8626__$1);a__6513__auto__.push(arg__6514__auto___8632);
{
var G__8633 = cljs.core.next.call(null,seq__7570_8626__$1);
var G__8634 = null;
var G__8635 = 0;
var G__8636 = 0;
seq__7570_8616 = G__8633;
chunk__7571_8617 = G__8634;
count__7572_8618 = G__8635;
i__7573_8619 = G__8636;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.b.apply(null,a__6513__auto__);
};
var b = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return b__delegate.call(this,args__6512__auto__);};
b.cljs$lang$maxFixedArity = 0;
b.cljs$lang$applyTo = (function (arglist__8637){
var args__6512__auto__ = cljs.core.seq(arglist__8637);
return b__delegate(args__6512__auto__);
});
b.cljs$core$IFn$_invoke$arity$variadic = b__delegate;
return b;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.base = (function() { 
var base__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__7578_8638 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__7579_8639 = null;var count__7580_8640 = 0;var i__7581_8641 = 0;while(true){
if((i__7581_8641 < count__7580_8640))
{var arg__6514__auto___8642 = cljs.core._nth.call(null,chunk__7579_8639,i__7581_8641);a__6513__auto__.push(arg__6514__auto___8642);
{
var G__8643 = seq__7578_8638;
var G__8644 = chunk__7579_8639;
var G__8645 = count__7580_8640;
var G__8646 = (i__7581_8641 + 1);
seq__7578_8638 = G__8643;
chunk__7579_8639 = G__8644;
count__7580_8640 = G__8645;
i__7581_8641 = G__8646;
continue;
}
} else
{var temp__4092__auto___8647 = cljs.core.seq.call(null,seq__7578_8638);if(temp__4092__auto___8647)
{var seq__7578_8648__$1 = temp__4092__auto___8647;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7578_8648__$1))
{var c__5632__auto___8649 = cljs.core.chunk_first.call(null,seq__7578_8648__$1);{
var G__8650 = cljs.core.chunk_rest.call(null,seq__7578_8648__$1);
var G__8651 = c__5632__auto___8649;
var G__8652 = cljs.core.count.call(null,c__5632__auto___8649);
var G__8653 = 0;
seq__7578_8638 = G__8650;
chunk__7579_8639 = G__8651;
count__7580_8640 = G__8652;
i__7581_8641 = G__8653;
continue;
}
} else
{var arg__6514__auto___8654 = cljs.core.first.call(null,seq__7578_8648__$1);a__6513__auto__.push(arg__6514__auto___8654);
{
var G__8655 = cljs.core.next.call(null,seq__7578_8648__$1);
var G__8656 = null;
var G__8657 = 0;
var G__8658 = 0;
seq__7578_8638 = G__8655;
chunk__7579_8639 = G__8656;
count__7580_8640 = G__8657;
i__7581_8641 = G__8658;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.base.apply(null,a__6513__auto__);
};
var base = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return base__delegate.call(this,args__6512__auto__);};
base.cljs$lang$maxFixedArity = 0;
base.cljs$lang$applyTo = (function (arglist__8659){
var args__6512__auto__ = cljs.core.seq(arglist__8659);
return base__delegate(args__6512__auto__);
});
base.cljs$core$IFn$_invoke$arity$variadic = base__delegate;
return base;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.bdi = (function() { 
var bdi__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__7586_8660 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__7587_8661 = null;var count__7588_8662 = 0;var i__7589_8663 = 0;while(true){
if((i__7589_8663 < count__7588_8662))
{var arg__6514__auto___8664 = cljs.core._nth.call(null,chunk__7587_8661,i__7589_8663);a__6513__auto__.push(arg__6514__auto___8664);
{
var G__8665 = seq__7586_8660;
var G__8666 = chunk__7587_8661;
var G__8667 = count__7588_8662;
var G__8668 = (i__7589_8663 + 1);
seq__7586_8660 = G__8665;
chunk__7587_8661 = G__8666;
count__7588_8662 = G__8667;
i__7589_8663 = G__8668;
continue;
}
} else
{var temp__4092__auto___8669 = cljs.core.seq.call(null,seq__7586_8660);if(temp__4092__auto___8669)
{var seq__7586_8670__$1 = temp__4092__auto___8669;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7586_8670__$1))
{var c__5632__auto___8671 = cljs.core.chunk_first.call(null,seq__7586_8670__$1);{
var G__8672 = cljs.core.chunk_rest.call(null,seq__7586_8670__$1);
var G__8673 = c__5632__auto___8671;
var G__8674 = cljs.core.count.call(null,c__5632__auto___8671);
var G__8675 = 0;
seq__7586_8660 = G__8672;
chunk__7587_8661 = G__8673;
count__7588_8662 = G__8674;
i__7589_8663 = G__8675;
continue;
}
} else
{var arg__6514__auto___8676 = cljs.core.first.call(null,seq__7586_8670__$1);a__6513__auto__.push(arg__6514__auto___8676);
{
var G__8677 = cljs.core.next.call(null,seq__7586_8670__$1);
var G__8678 = null;
var G__8679 = 0;
var G__8680 = 0;
seq__7586_8660 = G__8677;
chunk__7587_8661 = G__8678;
count__7588_8662 = G__8679;
i__7589_8663 = G__8680;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.bdi.apply(null,a__6513__auto__);
};
var bdi = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return bdi__delegate.call(this,args__6512__auto__);};
bdi.cljs$lang$maxFixedArity = 0;
bdi.cljs$lang$applyTo = (function (arglist__8681){
var args__6512__auto__ = cljs.core.seq(arglist__8681);
return bdi__delegate(args__6512__auto__);
});
bdi.cljs$core$IFn$_invoke$arity$variadic = bdi__delegate;
return bdi;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.bdo = (function() { 
var bdo__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__7594_8682 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__7595_8683 = null;var count__7596_8684 = 0;var i__7597_8685 = 0;while(true){
if((i__7597_8685 < count__7596_8684))
{var arg__6514__auto___8686 = cljs.core._nth.call(null,chunk__7595_8683,i__7597_8685);a__6513__auto__.push(arg__6514__auto___8686);
{
var G__8687 = seq__7594_8682;
var G__8688 = chunk__7595_8683;
var G__8689 = count__7596_8684;
var G__8690 = (i__7597_8685 + 1);
seq__7594_8682 = G__8687;
chunk__7595_8683 = G__8688;
count__7596_8684 = G__8689;
i__7597_8685 = G__8690;
continue;
}
} else
{var temp__4092__auto___8691 = cljs.core.seq.call(null,seq__7594_8682);if(temp__4092__auto___8691)
{var seq__7594_8692__$1 = temp__4092__auto___8691;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7594_8692__$1))
{var c__5632__auto___8693 = cljs.core.chunk_first.call(null,seq__7594_8692__$1);{
var G__8694 = cljs.core.chunk_rest.call(null,seq__7594_8692__$1);
var G__8695 = c__5632__auto___8693;
var G__8696 = cljs.core.count.call(null,c__5632__auto___8693);
var G__8697 = 0;
seq__7594_8682 = G__8694;
chunk__7595_8683 = G__8695;
count__7596_8684 = G__8696;
i__7597_8685 = G__8697;
continue;
}
} else
{var arg__6514__auto___8698 = cljs.core.first.call(null,seq__7594_8692__$1);a__6513__auto__.push(arg__6514__auto___8698);
{
var G__8699 = cljs.core.next.call(null,seq__7594_8692__$1);
var G__8700 = null;
var G__8701 = 0;
var G__8702 = 0;
seq__7594_8682 = G__8699;
chunk__7595_8683 = G__8700;
count__7596_8684 = G__8701;
i__7597_8685 = G__8702;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.bdo.apply(null,a__6513__auto__);
};
var bdo = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return bdo__delegate.call(this,args__6512__auto__);};
bdo.cljs$lang$maxFixedArity = 0;
bdo.cljs$lang$applyTo = (function (arglist__8703){
var args__6512__auto__ = cljs.core.seq(arglist__8703);
return bdo__delegate(args__6512__auto__);
});
bdo.cljs$core$IFn$_invoke$arity$variadic = bdo__delegate;
return bdo;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.big = (function() { 
var big__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__7602_8704 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__7603_8705 = null;var count__7604_8706 = 0;var i__7605_8707 = 0;while(true){
if((i__7605_8707 < count__7604_8706))
{var arg__6514__auto___8708 = cljs.core._nth.call(null,chunk__7603_8705,i__7605_8707);a__6513__auto__.push(arg__6514__auto___8708);
{
var G__8709 = seq__7602_8704;
var G__8710 = chunk__7603_8705;
var G__8711 = count__7604_8706;
var G__8712 = (i__7605_8707 + 1);
seq__7602_8704 = G__8709;
chunk__7603_8705 = G__8710;
count__7604_8706 = G__8711;
i__7605_8707 = G__8712;
continue;
}
} else
{var temp__4092__auto___8713 = cljs.core.seq.call(null,seq__7602_8704);if(temp__4092__auto___8713)
{var seq__7602_8714__$1 = temp__4092__auto___8713;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7602_8714__$1))
{var c__5632__auto___8715 = cljs.core.chunk_first.call(null,seq__7602_8714__$1);{
var G__8716 = cljs.core.chunk_rest.call(null,seq__7602_8714__$1);
var G__8717 = c__5632__auto___8715;
var G__8718 = cljs.core.count.call(null,c__5632__auto___8715);
var G__8719 = 0;
seq__7602_8704 = G__8716;
chunk__7603_8705 = G__8717;
count__7604_8706 = G__8718;
i__7605_8707 = G__8719;
continue;
}
} else
{var arg__6514__auto___8720 = cljs.core.first.call(null,seq__7602_8714__$1);a__6513__auto__.push(arg__6514__auto___8720);
{
var G__8721 = cljs.core.next.call(null,seq__7602_8714__$1);
var G__8722 = null;
var G__8723 = 0;
var G__8724 = 0;
seq__7602_8704 = G__8721;
chunk__7603_8705 = G__8722;
count__7604_8706 = G__8723;
i__7605_8707 = G__8724;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.big.apply(null,a__6513__auto__);
};
var big = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return big__delegate.call(this,args__6512__auto__);};
big.cljs$lang$maxFixedArity = 0;
big.cljs$lang$applyTo = (function (arglist__8725){
var args__6512__auto__ = cljs.core.seq(arglist__8725);
return big__delegate(args__6512__auto__);
});
big.cljs$core$IFn$_invoke$arity$variadic = big__delegate;
return big;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.blockquote = (function() { 
var blockquote__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__7610_8726 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__7611_8727 = null;var count__7612_8728 = 0;var i__7613_8729 = 0;while(true){
if((i__7613_8729 < count__7612_8728))
{var arg__6514__auto___8730 = cljs.core._nth.call(null,chunk__7611_8727,i__7613_8729);a__6513__auto__.push(arg__6514__auto___8730);
{
var G__8731 = seq__7610_8726;
var G__8732 = chunk__7611_8727;
var G__8733 = count__7612_8728;
var G__8734 = (i__7613_8729 + 1);
seq__7610_8726 = G__8731;
chunk__7611_8727 = G__8732;
count__7612_8728 = G__8733;
i__7613_8729 = G__8734;
continue;
}
} else
{var temp__4092__auto___8735 = cljs.core.seq.call(null,seq__7610_8726);if(temp__4092__auto___8735)
{var seq__7610_8736__$1 = temp__4092__auto___8735;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7610_8736__$1))
{var c__5632__auto___8737 = cljs.core.chunk_first.call(null,seq__7610_8736__$1);{
var G__8738 = cljs.core.chunk_rest.call(null,seq__7610_8736__$1);
var G__8739 = c__5632__auto___8737;
var G__8740 = cljs.core.count.call(null,c__5632__auto___8737);
var G__8741 = 0;
seq__7610_8726 = G__8738;
chunk__7611_8727 = G__8739;
count__7612_8728 = G__8740;
i__7613_8729 = G__8741;
continue;
}
} else
{var arg__6514__auto___8742 = cljs.core.first.call(null,seq__7610_8736__$1);a__6513__auto__.push(arg__6514__auto___8742);
{
var G__8743 = cljs.core.next.call(null,seq__7610_8736__$1);
var G__8744 = null;
var G__8745 = 0;
var G__8746 = 0;
seq__7610_8726 = G__8743;
chunk__7611_8727 = G__8744;
count__7612_8728 = G__8745;
i__7613_8729 = G__8746;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.blockquote.apply(null,a__6513__auto__);
};
var blockquote = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return blockquote__delegate.call(this,args__6512__auto__);};
blockquote.cljs$lang$maxFixedArity = 0;
blockquote.cljs$lang$applyTo = (function (arglist__8747){
var args__6512__auto__ = cljs.core.seq(arglist__8747);
return blockquote__delegate(args__6512__auto__);
});
blockquote.cljs$core$IFn$_invoke$arity$variadic = blockquote__delegate;
return blockquote;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.body = (function() { 
var body__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__7618_8748 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__7619_8749 = null;var count__7620_8750 = 0;var i__7621_8751 = 0;while(true){
if((i__7621_8751 < count__7620_8750))
{var arg__6514__auto___8752 = cljs.core._nth.call(null,chunk__7619_8749,i__7621_8751);a__6513__auto__.push(arg__6514__auto___8752);
{
var G__8753 = seq__7618_8748;
var G__8754 = chunk__7619_8749;
var G__8755 = count__7620_8750;
var G__8756 = (i__7621_8751 + 1);
seq__7618_8748 = G__8753;
chunk__7619_8749 = G__8754;
count__7620_8750 = G__8755;
i__7621_8751 = G__8756;
continue;
}
} else
{var temp__4092__auto___8757 = cljs.core.seq.call(null,seq__7618_8748);if(temp__4092__auto___8757)
{var seq__7618_8758__$1 = temp__4092__auto___8757;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7618_8758__$1))
{var c__5632__auto___8759 = cljs.core.chunk_first.call(null,seq__7618_8758__$1);{
var G__8760 = cljs.core.chunk_rest.call(null,seq__7618_8758__$1);
var G__8761 = c__5632__auto___8759;
var G__8762 = cljs.core.count.call(null,c__5632__auto___8759);
var G__8763 = 0;
seq__7618_8748 = G__8760;
chunk__7619_8749 = G__8761;
count__7620_8750 = G__8762;
i__7621_8751 = G__8763;
continue;
}
} else
{var arg__6514__auto___8764 = cljs.core.first.call(null,seq__7618_8758__$1);a__6513__auto__.push(arg__6514__auto___8764);
{
var G__8765 = cljs.core.next.call(null,seq__7618_8758__$1);
var G__8766 = null;
var G__8767 = 0;
var G__8768 = 0;
seq__7618_8748 = G__8765;
chunk__7619_8749 = G__8766;
count__7620_8750 = G__8767;
i__7621_8751 = G__8768;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.body.apply(null,a__6513__auto__);
};
var body = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return body__delegate.call(this,args__6512__auto__);};
body.cljs$lang$maxFixedArity = 0;
body.cljs$lang$applyTo = (function (arglist__8769){
var args__6512__auto__ = cljs.core.seq(arglist__8769);
return body__delegate(args__6512__auto__);
});
body.cljs$core$IFn$_invoke$arity$variadic = body__delegate;
return body;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.br = (function() { 
var br__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__7626_8770 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__7627_8771 = null;var count__7628_8772 = 0;var i__7629_8773 = 0;while(true){
if((i__7629_8773 < count__7628_8772))
{var arg__6514__auto___8774 = cljs.core._nth.call(null,chunk__7627_8771,i__7629_8773);a__6513__auto__.push(arg__6514__auto___8774);
{
var G__8775 = seq__7626_8770;
var G__8776 = chunk__7627_8771;
var G__8777 = count__7628_8772;
var G__8778 = (i__7629_8773 + 1);
seq__7626_8770 = G__8775;
chunk__7627_8771 = G__8776;
count__7628_8772 = G__8777;
i__7629_8773 = G__8778;
continue;
}
} else
{var temp__4092__auto___8779 = cljs.core.seq.call(null,seq__7626_8770);if(temp__4092__auto___8779)
{var seq__7626_8780__$1 = temp__4092__auto___8779;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7626_8780__$1))
{var c__5632__auto___8781 = cljs.core.chunk_first.call(null,seq__7626_8780__$1);{
var G__8782 = cljs.core.chunk_rest.call(null,seq__7626_8780__$1);
var G__8783 = c__5632__auto___8781;
var G__8784 = cljs.core.count.call(null,c__5632__auto___8781);
var G__8785 = 0;
seq__7626_8770 = G__8782;
chunk__7627_8771 = G__8783;
count__7628_8772 = G__8784;
i__7629_8773 = G__8785;
continue;
}
} else
{var arg__6514__auto___8786 = cljs.core.first.call(null,seq__7626_8780__$1);a__6513__auto__.push(arg__6514__auto___8786);
{
var G__8787 = cljs.core.next.call(null,seq__7626_8780__$1);
var G__8788 = null;
var G__8789 = 0;
var G__8790 = 0;
seq__7626_8770 = G__8787;
chunk__7627_8771 = G__8788;
count__7628_8772 = G__8789;
i__7629_8773 = G__8790;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.br.apply(null,a__6513__auto__);
};
var br = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return br__delegate.call(this,args__6512__auto__);};
br.cljs$lang$maxFixedArity = 0;
br.cljs$lang$applyTo = (function (arglist__8791){
var args__6512__auto__ = cljs.core.seq(arglist__8791);
return br__delegate(args__6512__auto__);
});
br.cljs$core$IFn$_invoke$arity$variadic = br__delegate;
return br;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.button = (function() { 
var button__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__7634_8792 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__7635_8793 = null;var count__7636_8794 = 0;var i__7637_8795 = 0;while(true){
if((i__7637_8795 < count__7636_8794))
{var arg__6514__auto___8796 = cljs.core._nth.call(null,chunk__7635_8793,i__7637_8795);a__6513__auto__.push(arg__6514__auto___8796);
{
var G__8797 = seq__7634_8792;
var G__8798 = chunk__7635_8793;
var G__8799 = count__7636_8794;
var G__8800 = (i__7637_8795 + 1);
seq__7634_8792 = G__8797;
chunk__7635_8793 = G__8798;
count__7636_8794 = G__8799;
i__7637_8795 = G__8800;
continue;
}
} else
{var temp__4092__auto___8801 = cljs.core.seq.call(null,seq__7634_8792);if(temp__4092__auto___8801)
{var seq__7634_8802__$1 = temp__4092__auto___8801;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7634_8802__$1))
{var c__5632__auto___8803 = cljs.core.chunk_first.call(null,seq__7634_8802__$1);{
var G__8804 = cljs.core.chunk_rest.call(null,seq__7634_8802__$1);
var G__8805 = c__5632__auto___8803;
var G__8806 = cljs.core.count.call(null,c__5632__auto___8803);
var G__8807 = 0;
seq__7634_8792 = G__8804;
chunk__7635_8793 = G__8805;
count__7636_8794 = G__8806;
i__7637_8795 = G__8807;
continue;
}
} else
{var arg__6514__auto___8808 = cljs.core.first.call(null,seq__7634_8802__$1);a__6513__auto__.push(arg__6514__auto___8808);
{
var G__8809 = cljs.core.next.call(null,seq__7634_8802__$1);
var G__8810 = null;
var G__8811 = 0;
var G__8812 = 0;
seq__7634_8792 = G__8809;
chunk__7635_8793 = G__8810;
count__7636_8794 = G__8811;
i__7637_8795 = G__8812;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.button.apply(null,a__6513__auto__);
};
var button = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return button__delegate.call(this,args__6512__auto__);};
button.cljs$lang$maxFixedArity = 0;
button.cljs$lang$applyTo = (function (arglist__8813){
var args__6512__auto__ = cljs.core.seq(arglist__8813);
return button__delegate(args__6512__auto__);
});
button.cljs$core$IFn$_invoke$arity$variadic = button__delegate;
return button;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.canvas = (function() { 
var canvas__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__7642_8814 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__7643_8815 = null;var count__7644_8816 = 0;var i__7645_8817 = 0;while(true){
if((i__7645_8817 < count__7644_8816))
{var arg__6514__auto___8818 = cljs.core._nth.call(null,chunk__7643_8815,i__7645_8817);a__6513__auto__.push(arg__6514__auto___8818);
{
var G__8819 = seq__7642_8814;
var G__8820 = chunk__7643_8815;
var G__8821 = count__7644_8816;
var G__8822 = (i__7645_8817 + 1);
seq__7642_8814 = G__8819;
chunk__7643_8815 = G__8820;
count__7644_8816 = G__8821;
i__7645_8817 = G__8822;
continue;
}
} else
{var temp__4092__auto___8823 = cljs.core.seq.call(null,seq__7642_8814);if(temp__4092__auto___8823)
{var seq__7642_8824__$1 = temp__4092__auto___8823;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7642_8824__$1))
{var c__5632__auto___8825 = cljs.core.chunk_first.call(null,seq__7642_8824__$1);{
var G__8826 = cljs.core.chunk_rest.call(null,seq__7642_8824__$1);
var G__8827 = c__5632__auto___8825;
var G__8828 = cljs.core.count.call(null,c__5632__auto___8825);
var G__8829 = 0;
seq__7642_8814 = G__8826;
chunk__7643_8815 = G__8827;
count__7644_8816 = G__8828;
i__7645_8817 = G__8829;
continue;
}
} else
{var arg__6514__auto___8830 = cljs.core.first.call(null,seq__7642_8824__$1);a__6513__auto__.push(arg__6514__auto___8830);
{
var G__8831 = cljs.core.next.call(null,seq__7642_8824__$1);
var G__8832 = null;
var G__8833 = 0;
var G__8834 = 0;
seq__7642_8814 = G__8831;
chunk__7643_8815 = G__8832;
count__7644_8816 = G__8833;
i__7645_8817 = G__8834;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.canvas.apply(null,a__6513__auto__);
};
var canvas = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return canvas__delegate.call(this,args__6512__auto__);};
canvas.cljs$lang$maxFixedArity = 0;
canvas.cljs$lang$applyTo = (function (arglist__8835){
var args__6512__auto__ = cljs.core.seq(arglist__8835);
return canvas__delegate(args__6512__auto__);
});
canvas.cljs$core$IFn$_invoke$arity$variadic = canvas__delegate;
return canvas;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.caption = (function() { 
var caption__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__7650_8836 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__7651_8837 = null;var count__7652_8838 = 0;var i__7653_8839 = 0;while(true){
if((i__7653_8839 < count__7652_8838))
{var arg__6514__auto___8840 = cljs.core._nth.call(null,chunk__7651_8837,i__7653_8839);a__6513__auto__.push(arg__6514__auto___8840);
{
var G__8841 = seq__7650_8836;
var G__8842 = chunk__7651_8837;
var G__8843 = count__7652_8838;
var G__8844 = (i__7653_8839 + 1);
seq__7650_8836 = G__8841;
chunk__7651_8837 = G__8842;
count__7652_8838 = G__8843;
i__7653_8839 = G__8844;
continue;
}
} else
{var temp__4092__auto___8845 = cljs.core.seq.call(null,seq__7650_8836);if(temp__4092__auto___8845)
{var seq__7650_8846__$1 = temp__4092__auto___8845;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7650_8846__$1))
{var c__5632__auto___8847 = cljs.core.chunk_first.call(null,seq__7650_8846__$1);{
var G__8848 = cljs.core.chunk_rest.call(null,seq__7650_8846__$1);
var G__8849 = c__5632__auto___8847;
var G__8850 = cljs.core.count.call(null,c__5632__auto___8847);
var G__8851 = 0;
seq__7650_8836 = G__8848;
chunk__7651_8837 = G__8849;
count__7652_8838 = G__8850;
i__7653_8839 = G__8851;
continue;
}
} else
{var arg__6514__auto___8852 = cljs.core.first.call(null,seq__7650_8846__$1);a__6513__auto__.push(arg__6514__auto___8852);
{
var G__8853 = cljs.core.next.call(null,seq__7650_8846__$1);
var G__8854 = null;
var G__8855 = 0;
var G__8856 = 0;
seq__7650_8836 = G__8853;
chunk__7651_8837 = G__8854;
count__7652_8838 = G__8855;
i__7653_8839 = G__8856;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.caption.apply(null,a__6513__auto__);
};
var caption = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return caption__delegate.call(this,args__6512__auto__);};
caption.cljs$lang$maxFixedArity = 0;
caption.cljs$lang$applyTo = (function (arglist__8857){
var args__6512__auto__ = cljs.core.seq(arglist__8857);
return caption__delegate(args__6512__auto__);
});
caption.cljs$core$IFn$_invoke$arity$variadic = caption__delegate;
return caption;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.cite = (function() { 
var cite__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__7658_8858 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__7659_8859 = null;var count__7660_8860 = 0;var i__7661_8861 = 0;while(true){
if((i__7661_8861 < count__7660_8860))
{var arg__6514__auto___8862 = cljs.core._nth.call(null,chunk__7659_8859,i__7661_8861);a__6513__auto__.push(arg__6514__auto___8862);
{
var G__8863 = seq__7658_8858;
var G__8864 = chunk__7659_8859;
var G__8865 = count__7660_8860;
var G__8866 = (i__7661_8861 + 1);
seq__7658_8858 = G__8863;
chunk__7659_8859 = G__8864;
count__7660_8860 = G__8865;
i__7661_8861 = G__8866;
continue;
}
} else
{var temp__4092__auto___8867 = cljs.core.seq.call(null,seq__7658_8858);if(temp__4092__auto___8867)
{var seq__7658_8868__$1 = temp__4092__auto___8867;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7658_8868__$1))
{var c__5632__auto___8869 = cljs.core.chunk_first.call(null,seq__7658_8868__$1);{
var G__8870 = cljs.core.chunk_rest.call(null,seq__7658_8868__$1);
var G__8871 = c__5632__auto___8869;
var G__8872 = cljs.core.count.call(null,c__5632__auto___8869);
var G__8873 = 0;
seq__7658_8858 = G__8870;
chunk__7659_8859 = G__8871;
count__7660_8860 = G__8872;
i__7661_8861 = G__8873;
continue;
}
} else
{var arg__6514__auto___8874 = cljs.core.first.call(null,seq__7658_8868__$1);a__6513__auto__.push(arg__6514__auto___8874);
{
var G__8875 = cljs.core.next.call(null,seq__7658_8868__$1);
var G__8876 = null;
var G__8877 = 0;
var G__8878 = 0;
seq__7658_8858 = G__8875;
chunk__7659_8859 = G__8876;
count__7660_8860 = G__8877;
i__7661_8861 = G__8878;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.cite.apply(null,a__6513__auto__);
};
var cite = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return cite__delegate.call(this,args__6512__auto__);};
cite.cljs$lang$maxFixedArity = 0;
cite.cljs$lang$applyTo = (function (arglist__8879){
var args__6512__auto__ = cljs.core.seq(arglist__8879);
return cite__delegate(args__6512__auto__);
});
cite.cljs$core$IFn$_invoke$arity$variadic = cite__delegate;
return cite;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.code = (function() { 
var code__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__7666_8880 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__7667_8881 = null;var count__7668_8882 = 0;var i__7669_8883 = 0;while(true){
if((i__7669_8883 < count__7668_8882))
{var arg__6514__auto___8884 = cljs.core._nth.call(null,chunk__7667_8881,i__7669_8883);a__6513__auto__.push(arg__6514__auto___8884);
{
var G__8885 = seq__7666_8880;
var G__8886 = chunk__7667_8881;
var G__8887 = count__7668_8882;
var G__8888 = (i__7669_8883 + 1);
seq__7666_8880 = G__8885;
chunk__7667_8881 = G__8886;
count__7668_8882 = G__8887;
i__7669_8883 = G__8888;
continue;
}
} else
{var temp__4092__auto___8889 = cljs.core.seq.call(null,seq__7666_8880);if(temp__4092__auto___8889)
{var seq__7666_8890__$1 = temp__4092__auto___8889;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7666_8890__$1))
{var c__5632__auto___8891 = cljs.core.chunk_first.call(null,seq__7666_8890__$1);{
var G__8892 = cljs.core.chunk_rest.call(null,seq__7666_8890__$1);
var G__8893 = c__5632__auto___8891;
var G__8894 = cljs.core.count.call(null,c__5632__auto___8891);
var G__8895 = 0;
seq__7666_8880 = G__8892;
chunk__7667_8881 = G__8893;
count__7668_8882 = G__8894;
i__7669_8883 = G__8895;
continue;
}
} else
{var arg__6514__auto___8896 = cljs.core.first.call(null,seq__7666_8890__$1);a__6513__auto__.push(arg__6514__auto___8896);
{
var G__8897 = cljs.core.next.call(null,seq__7666_8890__$1);
var G__8898 = null;
var G__8899 = 0;
var G__8900 = 0;
seq__7666_8880 = G__8897;
chunk__7667_8881 = G__8898;
count__7668_8882 = G__8899;
i__7669_8883 = G__8900;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.code.apply(null,a__6513__auto__);
};
var code = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return code__delegate.call(this,args__6512__auto__);};
code.cljs$lang$maxFixedArity = 0;
code.cljs$lang$applyTo = (function (arglist__8901){
var args__6512__auto__ = cljs.core.seq(arglist__8901);
return code__delegate(args__6512__auto__);
});
code.cljs$core$IFn$_invoke$arity$variadic = code__delegate;
return code;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.col = (function() { 
var col__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__7674_8902 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__7675_8903 = null;var count__7676_8904 = 0;var i__7677_8905 = 0;while(true){
if((i__7677_8905 < count__7676_8904))
{var arg__6514__auto___8906 = cljs.core._nth.call(null,chunk__7675_8903,i__7677_8905);a__6513__auto__.push(arg__6514__auto___8906);
{
var G__8907 = seq__7674_8902;
var G__8908 = chunk__7675_8903;
var G__8909 = count__7676_8904;
var G__8910 = (i__7677_8905 + 1);
seq__7674_8902 = G__8907;
chunk__7675_8903 = G__8908;
count__7676_8904 = G__8909;
i__7677_8905 = G__8910;
continue;
}
} else
{var temp__4092__auto___8911 = cljs.core.seq.call(null,seq__7674_8902);if(temp__4092__auto___8911)
{var seq__7674_8912__$1 = temp__4092__auto___8911;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7674_8912__$1))
{var c__5632__auto___8913 = cljs.core.chunk_first.call(null,seq__7674_8912__$1);{
var G__8914 = cljs.core.chunk_rest.call(null,seq__7674_8912__$1);
var G__8915 = c__5632__auto___8913;
var G__8916 = cljs.core.count.call(null,c__5632__auto___8913);
var G__8917 = 0;
seq__7674_8902 = G__8914;
chunk__7675_8903 = G__8915;
count__7676_8904 = G__8916;
i__7677_8905 = G__8917;
continue;
}
} else
{var arg__6514__auto___8918 = cljs.core.first.call(null,seq__7674_8912__$1);a__6513__auto__.push(arg__6514__auto___8918);
{
var G__8919 = cljs.core.next.call(null,seq__7674_8912__$1);
var G__8920 = null;
var G__8921 = 0;
var G__8922 = 0;
seq__7674_8902 = G__8919;
chunk__7675_8903 = G__8920;
count__7676_8904 = G__8921;
i__7677_8905 = G__8922;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.col.apply(null,a__6513__auto__);
};
var col = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return col__delegate.call(this,args__6512__auto__);};
col.cljs$lang$maxFixedArity = 0;
col.cljs$lang$applyTo = (function (arglist__8923){
var args__6512__auto__ = cljs.core.seq(arglist__8923);
return col__delegate(args__6512__auto__);
});
col.cljs$core$IFn$_invoke$arity$variadic = col__delegate;
return col;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.colgroup = (function() { 
var colgroup__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__7682_8924 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__7683_8925 = null;var count__7684_8926 = 0;var i__7685_8927 = 0;while(true){
if((i__7685_8927 < count__7684_8926))
{var arg__6514__auto___8928 = cljs.core._nth.call(null,chunk__7683_8925,i__7685_8927);a__6513__auto__.push(arg__6514__auto___8928);
{
var G__8929 = seq__7682_8924;
var G__8930 = chunk__7683_8925;
var G__8931 = count__7684_8926;
var G__8932 = (i__7685_8927 + 1);
seq__7682_8924 = G__8929;
chunk__7683_8925 = G__8930;
count__7684_8926 = G__8931;
i__7685_8927 = G__8932;
continue;
}
} else
{var temp__4092__auto___8933 = cljs.core.seq.call(null,seq__7682_8924);if(temp__4092__auto___8933)
{var seq__7682_8934__$1 = temp__4092__auto___8933;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7682_8934__$1))
{var c__5632__auto___8935 = cljs.core.chunk_first.call(null,seq__7682_8934__$1);{
var G__8936 = cljs.core.chunk_rest.call(null,seq__7682_8934__$1);
var G__8937 = c__5632__auto___8935;
var G__8938 = cljs.core.count.call(null,c__5632__auto___8935);
var G__8939 = 0;
seq__7682_8924 = G__8936;
chunk__7683_8925 = G__8937;
count__7684_8926 = G__8938;
i__7685_8927 = G__8939;
continue;
}
} else
{var arg__6514__auto___8940 = cljs.core.first.call(null,seq__7682_8934__$1);a__6513__auto__.push(arg__6514__auto___8940);
{
var G__8941 = cljs.core.next.call(null,seq__7682_8934__$1);
var G__8942 = null;
var G__8943 = 0;
var G__8944 = 0;
seq__7682_8924 = G__8941;
chunk__7683_8925 = G__8942;
count__7684_8926 = G__8943;
i__7685_8927 = G__8944;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.colgroup.apply(null,a__6513__auto__);
};
var colgroup = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return colgroup__delegate.call(this,args__6512__auto__);};
colgroup.cljs$lang$maxFixedArity = 0;
colgroup.cljs$lang$applyTo = (function (arglist__8945){
var args__6512__auto__ = cljs.core.seq(arglist__8945);
return colgroup__delegate(args__6512__auto__);
});
colgroup.cljs$core$IFn$_invoke$arity$variadic = colgroup__delegate;
return colgroup;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.data = (function() { 
var data__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__7690_8946 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__7691_8947 = null;var count__7692_8948 = 0;var i__7693_8949 = 0;while(true){
if((i__7693_8949 < count__7692_8948))
{var arg__6514__auto___8950 = cljs.core._nth.call(null,chunk__7691_8947,i__7693_8949);a__6513__auto__.push(arg__6514__auto___8950);
{
var G__8951 = seq__7690_8946;
var G__8952 = chunk__7691_8947;
var G__8953 = count__7692_8948;
var G__8954 = (i__7693_8949 + 1);
seq__7690_8946 = G__8951;
chunk__7691_8947 = G__8952;
count__7692_8948 = G__8953;
i__7693_8949 = G__8954;
continue;
}
} else
{var temp__4092__auto___8955 = cljs.core.seq.call(null,seq__7690_8946);if(temp__4092__auto___8955)
{var seq__7690_8956__$1 = temp__4092__auto___8955;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7690_8956__$1))
{var c__5632__auto___8957 = cljs.core.chunk_first.call(null,seq__7690_8956__$1);{
var G__8958 = cljs.core.chunk_rest.call(null,seq__7690_8956__$1);
var G__8959 = c__5632__auto___8957;
var G__8960 = cljs.core.count.call(null,c__5632__auto___8957);
var G__8961 = 0;
seq__7690_8946 = G__8958;
chunk__7691_8947 = G__8959;
count__7692_8948 = G__8960;
i__7693_8949 = G__8961;
continue;
}
} else
{var arg__6514__auto___8962 = cljs.core.first.call(null,seq__7690_8956__$1);a__6513__auto__.push(arg__6514__auto___8962);
{
var G__8963 = cljs.core.next.call(null,seq__7690_8956__$1);
var G__8964 = null;
var G__8965 = 0;
var G__8966 = 0;
seq__7690_8946 = G__8963;
chunk__7691_8947 = G__8964;
count__7692_8948 = G__8965;
i__7693_8949 = G__8966;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.data.apply(null,a__6513__auto__);
};
var data = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return data__delegate.call(this,args__6512__auto__);};
data.cljs$lang$maxFixedArity = 0;
data.cljs$lang$applyTo = (function (arglist__8967){
var args__6512__auto__ = cljs.core.seq(arglist__8967);
return data__delegate(args__6512__auto__);
});
data.cljs$core$IFn$_invoke$arity$variadic = data__delegate;
return data;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.datalist = (function() { 
var datalist__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__7698_8968 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__7699_8969 = null;var count__7700_8970 = 0;var i__7701_8971 = 0;while(true){
if((i__7701_8971 < count__7700_8970))
{var arg__6514__auto___8972 = cljs.core._nth.call(null,chunk__7699_8969,i__7701_8971);a__6513__auto__.push(arg__6514__auto___8972);
{
var G__8973 = seq__7698_8968;
var G__8974 = chunk__7699_8969;
var G__8975 = count__7700_8970;
var G__8976 = (i__7701_8971 + 1);
seq__7698_8968 = G__8973;
chunk__7699_8969 = G__8974;
count__7700_8970 = G__8975;
i__7701_8971 = G__8976;
continue;
}
} else
{var temp__4092__auto___8977 = cljs.core.seq.call(null,seq__7698_8968);if(temp__4092__auto___8977)
{var seq__7698_8978__$1 = temp__4092__auto___8977;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7698_8978__$1))
{var c__5632__auto___8979 = cljs.core.chunk_first.call(null,seq__7698_8978__$1);{
var G__8980 = cljs.core.chunk_rest.call(null,seq__7698_8978__$1);
var G__8981 = c__5632__auto___8979;
var G__8982 = cljs.core.count.call(null,c__5632__auto___8979);
var G__8983 = 0;
seq__7698_8968 = G__8980;
chunk__7699_8969 = G__8981;
count__7700_8970 = G__8982;
i__7701_8971 = G__8983;
continue;
}
} else
{var arg__6514__auto___8984 = cljs.core.first.call(null,seq__7698_8978__$1);a__6513__auto__.push(arg__6514__auto___8984);
{
var G__8985 = cljs.core.next.call(null,seq__7698_8978__$1);
var G__8986 = null;
var G__8987 = 0;
var G__8988 = 0;
seq__7698_8968 = G__8985;
chunk__7699_8969 = G__8986;
count__7700_8970 = G__8987;
i__7701_8971 = G__8988;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.datalist.apply(null,a__6513__auto__);
};
var datalist = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return datalist__delegate.call(this,args__6512__auto__);};
datalist.cljs$lang$maxFixedArity = 0;
datalist.cljs$lang$applyTo = (function (arglist__8989){
var args__6512__auto__ = cljs.core.seq(arglist__8989);
return datalist__delegate(args__6512__auto__);
});
datalist.cljs$core$IFn$_invoke$arity$variadic = datalist__delegate;
return datalist;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.dd = (function() { 
var dd__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__7706_8990 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__7707_8991 = null;var count__7708_8992 = 0;var i__7709_8993 = 0;while(true){
if((i__7709_8993 < count__7708_8992))
{var arg__6514__auto___8994 = cljs.core._nth.call(null,chunk__7707_8991,i__7709_8993);a__6513__auto__.push(arg__6514__auto___8994);
{
var G__8995 = seq__7706_8990;
var G__8996 = chunk__7707_8991;
var G__8997 = count__7708_8992;
var G__8998 = (i__7709_8993 + 1);
seq__7706_8990 = G__8995;
chunk__7707_8991 = G__8996;
count__7708_8992 = G__8997;
i__7709_8993 = G__8998;
continue;
}
} else
{var temp__4092__auto___8999 = cljs.core.seq.call(null,seq__7706_8990);if(temp__4092__auto___8999)
{var seq__7706_9000__$1 = temp__4092__auto___8999;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7706_9000__$1))
{var c__5632__auto___9001 = cljs.core.chunk_first.call(null,seq__7706_9000__$1);{
var G__9002 = cljs.core.chunk_rest.call(null,seq__7706_9000__$1);
var G__9003 = c__5632__auto___9001;
var G__9004 = cljs.core.count.call(null,c__5632__auto___9001);
var G__9005 = 0;
seq__7706_8990 = G__9002;
chunk__7707_8991 = G__9003;
count__7708_8992 = G__9004;
i__7709_8993 = G__9005;
continue;
}
} else
{var arg__6514__auto___9006 = cljs.core.first.call(null,seq__7706_9000__$1);a__6513__auto__.push(arg__6514__auto___9006);
{
var G__9007 = cljs.core.next.call(null,seq__7706_9000__$1);
var G__9008 = null;
var G__9009 = 0;
var G__9010 = 0;
seq__7706_8990 = G__9007;
chunk__7707_8991 = G__9008;
count__7708_8992 = G__9009;
i__7709_8993 = G__9010;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.dd.apply(null,a__6513__auto__);
};
var dd = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return dd__delegate.call(this,args__6512__auto__);};
dd.cljs$lang$maxFixedArity = 0;
dd.cljs$lang$applyTo = (function (arglist__9011){
var args__6512__auto__ = cljs.core.seq(arglist__9011);
return dd__delegate(args__6512__auto__);
});
dd.cljs$core$IFn$_invoke$arity$variadic = dd__delegate;
return dd;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.del = (function() { 
var del__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__7714_9012 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__7715_9013 = null;var count__7716_9014 = 0;var i__7717_9015 = 0;while(true){
if((i__7717_9015 < count__7716_9014))
{var arg__6514__auto___9016 = cljs.core._nth.call(null,chunk__7715_9013,i__7717_9015);a__6513__auto__.push(arg__6514__auto___9016);
{
var G__9017 = seq__7714_9012;
var G__9018 = chunk__7715_9013;
var G__9019 = count__7716_9014;
var G__9020 = (i__7717_9015 + 1);
seq__7714_9012 = G__9017;
chunk__7715_9013 = G__9018;
count__7716_9014 = G__9019;
i__7717_9015 = G__9020;
continue;
}
} else
{var temp__4092__auto___9021 = cljs.core.seq.call(null,seq__7714_9012);if(temp__4092__auto___9021)
{var seq__7714_9022__$1 = temp__4092__auto___9021;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7714_9022__$1))
{var c__5632__auto___9023 = cljs.core.chunk_first.call(null,seq__7714_9022__$1);{
var G__9024 = cljs.core.chunk_rest.call(null,seq__7714_9022__$1);
var G__9025 = c__5632__auto___9023;
var G__9026 = cljs.core.count.call(null,c__5632__auto___9023);
var G__9027 = 0;
seq__7714_9012 = G__9024;
chunk__7715_9013 = G__9025;
count__7716_9014 = G__9026;
i__7717_9015 = G__9027;
continue;
}
} else
{var arg__6514__auto___9028 = cljs.core.first.call(null,seq__7714_9022__$1);a__6513__auto__.push(arg__6514__auto___9028);
{
var G__9029 = cljs.core.next.call(null,seq__7714_9022__$1);
var G__9030 = null;
var G__9031 = 0;
var G__9032 = 0;
seq__7714_9012 = G__9029;
chunk__7715_9013 = G__9030;
count__7716_9014 = G__9031;
i__7717_9015 = G__9032;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.del.apply(null,a__6513__auto__);
};
var del = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return del__delegate.call(this,args__6512__auto__);};
del.cljs$lang$maxFixedArity = 0;
del.cljs$lang$applyTo = (function (arglist__9033){
var args__6512__auto__ = cljs.core.seq(arglist__9033);
return del__delegate(args__6512__auto__);
});
del.cljs$core$IFn$_invoke$arity$variadic = del__delegate;
return del;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.details = (function() { 
var details__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__7722_9034 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__7723_9035 = null;var count__7724_9036 = 0;var i__7725_9037 = 0;while(true){
if((i__7725_9037 < count__7724_9036))
{var arg__6514__auto___9038 = cljs.core._nth.call(null,chunk__7723_9035,i__7725_9037);a__6513__auto__.push(arg__6514__auto___9038);
{
var G__9039 = seq__7722_9034;
var G__9040 = chunk__7723_9035;
var G__9041 = count__7724_9036;
var G__9042 = (i__7725_9037 + 1);
seq__7722_9034 = G__9039;
chunk__7723_9035 = G__9040;
count__7724_9036 = G__9041;
i__7725_9037 = G__9042;
continue;
}
} else
{var temp__4092__auto___9043 = cljs.core.seq.call(null,seq__7722_9034);if(temp__4092__auto___9043)
{var seq__7722_9044__$1 = temp__4092__auto___9043;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7722_9044__$1))
{var c__5632__auto___9045 = cljs.core.chunk_first.call(null,seq__7722_9044__$1);{
var G__9046 = cljs.core.chunk_rest.call(null,seq__7722_9044__$1);
var G__9047 = c__5632__auto___9045;
var G__9048 = cljs.core.count.call(null,c__5632__auto___9045);
var G__9049 = 0;
seq__7722_9034 = G__9046;
chunk__7723_9035 = G__9047;
count__7724_9036 = G__9048;
i__7725_9037 = G__9049;
continue;
}
} else
{var arg__6514__auto___9050 = cljs.core.first.call(null,seq__7722_9044__$1);a__6513__auto__.push(arg__6514__auto___9050);
{
var G__9051 = cljs.core.next.call(null,seq__7722_9044__$1);
var G__9052 = null;
var G__9053 = 0;
var G__9054 = 0;
seq__7722_9034 = G__9051;
chunk__7723_9035 = G__9052;
count__7724_9036 = G__9053;
i__7725_9037 = G__9054;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.details.apply(null,a__6513__auto__);
};
var details = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return details__delegate.call(this,args__6512__auto__);};
details.cljs$lang$maxFixedArity = 0;
details.cljs$lang$applyTo = (function (arglist__9055){
var args__6512__auto__ = cljs.core.seq(arglist__9055);
return details__delegate(args__6512__auto__);
});
details.cljs$core$IFn$_invoke$arity$variadic = details__delegate;
return details;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.dfn = (function() { 
var dfn__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__7730_9056 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__7731_9057 = null;var count__7732_9058 = 0;var i__7733_9059 = 0;while(true){
if((i__7733_9059 < count__7732_9058))
{var arg__6514__auto___9060 = cljs.core._nth.call(null,chunk__7731_9057,i__7733_9059);a__6513__auto__.push(arg__6514__auto___9060);
{
var G__9061 = seq__7730_9056;
var G__9062 = chunk__7731_9057;
var G__9063 = count__7732_9058;
var G__9064 = (i__7733_9059 + 1);
seq__7730_9056 = G__9061;
chunk__7731_9057 = G__9062;
count__7732_9058 = G__9063;
i__7733_9059 = G__9064;
continue;
}
} else
{var temp__4092__auto___9065 = cljs.core.seq.call(null,seq__7730_9056);if(temp__4092__auto___9065)
{var seq__7730_9066__$1 = temp__4092__auto___9065;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7730_9066__$1))
{var c__5632__auto___9067 = cljs.core.chunk_first.call(null,seq__7730_9066__$1);{
var G__9068 = cljs.core.chunk_rest.call(null,seq__7730_9066__$1);
var G__9069 = c__5632__auto___9067;
var G__9070 = cljs.core.count.call(null,c__5632__auto___9067);
var G__9071 = 0;
seq__7730_9056 = G__9068;
chunk__7731_9057 = G__9069;
count__7732_9058 = G__9070;
i__7733_9059 = G__9071;
continue;
}
} else
{var arg__6514__auto___9072 = cljs.core.first.call(null,seq__7730_9066__$1);a__6513__auto__.push(arg__6514__auto___9072);
{
var G__9073 = cljs.core.next.call(null,seq__7730_9066__$1);
var G__9074 = null;
var G__9075 = 0;
var G__9076 = 0;
seq__7730_9056 = G__9073;
chunk__7731_9057 = G__9074;
count__7732_9058 = G__9075;
i__7733_9059 = G__9076;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.dfn.apply(null,a__6513__auto__);
};
var dfn = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return dfn__delegate.call(this,args__6512__auto__);};
dfn.cljs$lang$maxFixedArity = 0;
dfn.cljs$lang$applyTo = (function (arglist__9077){
var args__6512__auto__ = cljs.core.seq(arglist__9077);
return dfn__delegate(args__6512__auto__);
});
dfn.cljs$core$IFn$_invoke$arity$variadic = dfn__delegate;
return dfn;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.div = (function() { 
var div__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__7738_9078 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__7739_9079 = null;var count__7740_9080 = 0;var i__7741_9081 = 0;while(true){
if((i__7741_9081 < count__7740_9080))
{var arg__6514__auto___9082 = cljs.core._nth.call(null,chunk__7739_9079,i__7741_9081);a__6513__auto__.push(arg__6514__auto___9082);
{
var G__9083 = seq__7738_9078;
var G__9084 = chunk__7739_9079;
var G__9085 = count__7740_9080;
var G__9086 = (i__7741_9081 + 1);
seq__7738_9078 = G__9083;
chunk__7739_9079 = G__9084;
count__7740_9080 = G__9085;
i__7741_9081 = G__9086;
continue;
}
} else
{var temp__4092__auto___9087 = cljs.core.seq.call(null,seq__7738_9078);if(temp__4092__auto___9087)
{var seq__7738_9088__$1 = temp__4092__auto___9087;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7738_9088__$1))
{var c__5632__auto___9089 = cljs.core.chunk_first.call(null,seq__7738_9088__$1);{
var G__9090 = cljs.core.chunk_rest.call(null,seq__7738_9088__$1);
var G__9091 = c__5632__auto___9089;
var G__9092 = cljs.core.count.call(null,c__5632__auto___9089);
var G__9093 = 0;
seq__7738_9078 = G__9090;
chunk__7739_9079 = G__9091;
count__7740_9080 = G__9092;
i__7741_9081 = G__9093;
continue;
}
} else
{var arg__6514__auto___9094 = cljs.core.first.call(null,seq__7738_9088__$1);a__6513__auto__.push(arg__6514__auto___9094);
{
var G__9095 = cljs.core.next.call(null,seq__7738_9088__$1);
var G__9096 = null;
var G__9097 = 0;
var G__9098 = 0;
seq__7738_9078 = G__9095;
chunk__7739_9079 = G__9096;
count__7740_9080 = G__9097;
i__7741_9081 = G__9098;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.div.apply(null,a__6513__auto__);
};
var div = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return div__delegate.call(this,args__6512__auto__);};
div.cljs$lang$maxFixedArity = 0;
div.cljs$lang$applyTo = (function (arglist__9099){
var args__6512__auto__ = cljs.core.seq(arglist__9099);
return div__delegate(args__6512__auto__);
});
div.cljs$core$IFn$_invoke$arity$variadic = div__delegate;
return div;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.dl = (function() { 
var dl__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__7746_9100 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__7747_9101 = null;var count__7748_9102 = 0;var i__7749_9103 = 0;while(true){
if((i__7749_9103 < count__7748_9102))
{var arg__6514__auto___9104 = cljs.core._nth.call(null,chunk__7747_9101,i__7749_9103);a__6513__auto__.push(arg__6514__auto___9104);
{
var G__9105 = seq__7746_9100;
var G__9106 = chunk__7747_9101;
var G__9107 = count__7748_9102;
var G__9108 = (i__7749_9103 + 1);
seq__7746_9100 = G__9105;
chunk__7747_9101 = G__9106;
count__7748_9102 = G__9107;
i__7749_9103 = G__9108;
continue;
}
} else
{var temp__4092__auto___9109 = cljs.core.seq.call(null,seq__7746_9100);if(temp__4092__auto___9109)
{var seq__7746_9110__$1 = temp__4092__auto___9109;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7746_9110__$1))
{var c__5632__auto___9111 = cljs.core.chunk_first.call(null,seq__7746_9110__$1);{
var G__9112 = cljs.core.chunk_rest.call(null,seq__7746_9110__$1);
var G__9113 = c__5632__auto___9111;
var G__9114 = cljs.core.count.call(null,c__5632__auto___9111);
var G__9115 = 0;
seq__7746_9100 = G__9112;
chunk__7747_9101 = G__9113;
count__7748_9102 = G__9114;
i__7749_9103 = G__9115;
continue;
}
} else
{var arg__6514__auto___9116 = cljs.core.first.call(null,seq__7746_9110__$1);a__6513__auto__.push(arg__6514__auto___9116);
{
var G__9117 = cljs.core.next.call(null,seq__7746_9110__$1);
var G__9118 = null;
var G__9119 = 0;
var G__9120 = 0;
seq__7746_9100 = G__9117;
chunk__7747_9101 = G__9118;
count__7748_9102 = G__9119;
i__7749_9103 = G__9120;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.dl.apply(null,a__6513__auto__);
};
var dl = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return dl__delegate.call(this,args__6512__auto__);};
dl.cljs$lang$maxFixedArity = 0;
dl.cljs$lang$applyTo = (function (arglist__9121){
var args__6512__auto__ = cljs.core.seq(arglist__9121);
return dl__delegate(args__6512__auto__);
});
dl.cljs$core$IFn$_invoke$arity$variadic = dl__delegate;
return dl;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.dt = (function() { 
var dt__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__7754_9122 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__7755_9123 = null;var count__7756_9124 = 0;var i__7757_9125 = 0;while(true){
if((i__7757_9125 < count__7756_9124))
{var arg__6514__auto___9126 = cljs.core._nth.call(null,chunk__7755_9123,i__7757_9125);a__6513__auto__.push(arg__6514__auto___9126);
{
var G__9127 = seq__7754_9122;
var G__9128 = chunk__7755_9123;
var G__9129 = count__7756_9124;
var G__9130 = (i__7757_9125 + 1);
seq__7754_9122 = G__9127;
chunk__7755_9123 = G__9128;
count__7756_9124 = G__9129;
i__7757_9125 = G__9130;
continue;
}
} else
{var temp__4092__auto___9131 = cljs.core.seq.call(null,seq__7754_9122);if(temp__4092__auto___9131)
{var seq__7754_9132__$1 = temp__4092__auto___9131;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7754_9132__$1))
{var c__5632__auto___9133 = cljs.core.chunk_first.call(null,seq__7754_9132__$1);{
var G__9134 = cljs.core.chunk_rest.call(null,seq__7754_9132__$1);
var G__9135 = c__5632__auto___9133;
var G__9136 = cljs.core.count.call(null,c__5632__auto___9133);
var G__9137 = 0;
seq__7754_9122 = G__9134;
chunk__7755_9123 = G__9135;
count__7756_9124 = G__9136;
i__7757_9125 = G__9137;
continue;
}
} else
{var arg__6514__auto___9138 = cljs.core.first.call(null,seq__7754_9132__$1);a__6513__auto__.push(arg__6514__auto___9138);
{
var G__9139 = cljs.core.next.call(null,seq__7754_9132__$1);
var G__9140 = null;
var G__9141 = 0;
var G__9142 = 0;
seq__7754_9122 = G__9139;
chunk__7755_9123 = G__9140;
count__7756_9124 = G__9141;
i__7757_9125 = G__9142;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.dt.apply(null,a__6513__auto__);
};
var dt = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return dt__delegate.call(this,args__6512__auto__);};
dt.cljs$lang$maxFixedArity = 0;
dt.cljs$lang$applyTo = (function (arglist__9143){
var args__6512__auto__ = cljs.core.seq(arglist__9143);
return dt__delegate(args__6512__auto__);
});
dt.cljs$core$IFn$_invoke$arity$variadic = dt__delegate;
return dt;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.em = (function() { 
var em__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__7762_9144 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__7763_9145 = null;var count__7764_9146 = 0;var i__7765_9147 = 0;while(true){
if((i__7765_9147 < count__7764_9146))
{var arg__6514__auto___9148 = cljs.core._nth.call(null,chunk__7763_9145,i__7765_9147);a__6513__auto__.push(arg__6514__auto___9148);
{
var G__9149 = seq__7762_9144;
var G__9150 = chunk__7763_9145;
var G__9151 = count__7764_9146;
var G__9152 = (i__7765_9147 + 1);
seq__7762_9144 = G__9149;
chunk__7763_9145 = G__9150;
count__7764_9146 = G__9151;
i__7765_9147 = G__9152;
continue;
}
} else
{var temp__4092__auto___9153 = cljs.core.seq.call(null,seq__7762_9144);if(temp__4092__auto___9153)
{var seq__7762_9154__$1 = temp__4092__auto___9153;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7762_9154__$1))
{var c__5632__auto___9155 = cljs.core.chunk_first.call(null,seq__7762_9154__$1);{
var G__9156 = cljs.core.chunk_rest.call(null,seq__7762_9154__$1);
var G__9157 = c__5632__auto___9155;
var G__9158 = cljs.core.count.call(null,c__5632__auto___9155);
var G__9159 = 0;
seq__7762_9144 = G__9156;
chunk__7763_9145 = G__9157;
count__7764_9146 = G__9158;
i__7765_9147 = G__9159;
continue;
}
} else
{var arg__6514__auto___9160 = cljs.core.first.call(null,seq__7762_9154__$1);a__6513__auto__.push(arg__6514__auto___9160);
{
var G__9161 = cljs.core.next.call(null,seq__7762_9154__$1);
var G__9162 = null;
var G__9163 = 0;
var G__9164 = 0;
seq__7762_9144 = G__9161;
chunk__7763_9145 = G__9162;
count__7764_9146 = G__9163;
i__7765_9147 = G__9164;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.em.apply(null,a__6513__auto__);
};
var em = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return em__delegate.call(this,args__6512__auto__);};
em.cljs$lang$maxFixedArity = 0;
em.cljs$lang$applyTo = (function (arglist__9165){
var args__6512__auto__ = cljs.core.seq(arglist__9165);
return em__delegate(args__6512__auto__);
});
em.cljs$core$IFn$_invoke$arity$variadic = em__delegate;
return em;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.embed = (function() { 
var embed__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__7778_9166 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__7779_9167 = null;var count__7780_9168 = 0;var i__7781_9169 = 0;while(true){
if((i__7781_9169 < count__7780_9168))
{var arg__6514__auto___9170 = cljs.core._nth.call(null,chunk__7779_9167,i__7781_9169);a__6513__auto__.push(arg__6514__auto___9170);
{
var G__9171 = seq__7778_9166;
var G__9172 = chunk__7779_9167;
var G__9173 = count__7780_9168;
var G__9174 = (i__7781_9169 + 1);
seq__7778_9166 = G__9171;
chunk__7779_9167 = G__9172;
count__7780_9168 = G__9173;
i__7781_9169 = G__9174;
continue;
}
} else
{var temp__4092__auto___9175 = cljs.core.seq.call(null,seq__7778_9166);if(temp__4092__auto___9175)
{var seq__7778_9176__$1 = temp__4092__auto___9175;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7778_9176__$1))
{var c__5632__auto___9177 = cljs.core.chunk_first.call(null,seq__7778_9176__$1);{
var G__9178 = cljs.core.chunk_rest.call(null,seq__7778_9176__$1);
var G__9179 = c__5632__auto___9177;
var G__9180 = cljs.core.count.call(null,c__5632__auto___9177);
var G__9181 = 0;
seq__7778_9166 = G__9178;
chunk__7779_9167 = G__9179;
count__7780_9168 = G__9180;
i__7781_9169 = G__9181;
continue;
}
} else
{var arg__6514__auto___9182 = cljs.core.first.call(null,seq__7778_9176__$1);a__6513__auto__.push(arg__6514__auto___9182);
{
var G__9183 = cljs.core.next.call(null,seq__7778_9176__$1);
var G__9184 = null;
var G__9185 = 0;
var G__9186 = 0;
seq__7778_9166 = G__9183;
chunk__7779_9167 = G__9184;
count__7780_9168 = G__9185;
i__7781_9169 = G__9186;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.embed.apply(null,a__6513__auto__);
};
var embed = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return embed__delegate.call(this,args__6512__auto__);};
embed.cljs$lang$maxFixedArity = 0;
embed.cljs$lang$applyTo = (function (arglist__9187){
var args__6512__auto__ = cljs.core.seq(arglist__9187);
return embed__delegate(args__6512__auto__);
});
embed.cljs$core$IFn$_invoke$arity$variadic = embed__delegate;
return embed;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.fieldset = (function() { 
var fieldset__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__7786_9188 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__7787_9189 = null;var count__7788_9190 = 0;var i__7789_9191 = 0;while(true){
if((i__7789_9191 < count__7788_9190))
{var arg__6514__auto___9192 = cljs.core._nth.call(null,chunk__7787_9189,i__7789_9191);a__6513__auto__.push(arg__6514__auto___9192);
{
var G__9193 = seq__7786_9188;
var G__9194 = chunk__7787_9189;
var G__9195 = count__7788_9190;
var G__9196 = (i__7789_9191 + 1);
seq__7786_9188 = G__9193;
chunk__7787_9189 = G__9194;
count__7788_9190 = G__9195;
i__7789_9191 = G__9196;
continue;
}
} else
{var temp__4092__auto___9197 = cljs.core.seq.call(null,seq__7786_9188);if(temp__4092__auto___9197)
{var seq__7786_9198__$1 = temp__4092__auto___9197;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7786_9198__$1))
{var c__5632__auto___9199 = cljs.core.chunk_first.call(null,seq__7786_9198__$1);{
var G__9200 = cljs.core.chunk_rest.call(null,seq__7786_9198__$1);
var G__9201 = c__5632__auto___9199;
var G__9202 = cljs.core.count.call(null,c__5632__auto___9199);
var G__9203 = 0;
seq__7786_9188 = G__9200;
chunk__7787_9189 = G__9201;
count__7788_9190 = G__9202;
i__7789_9191 = G__9203;
continue;
}
} else
{var arg__6514__auto___9204 = cljs.core.first.call(null,seq__7786_9198__$1);a__6513__auto__.push(arg__6514__auto___9204);
{
var G__9205 = cljs.core.next.call(null,seq__7786_9198__$1);
var G__9206 = null;
var G__9207 = 0;
var G__9208 = 0;
seq__7786_9188 = G__9205;
chunk__7787_9189 = G__9206;
count__7788_9190 = G__9207;
i__7789_9191 = G__9208;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.fieldset.apply(null,a__6513__auto__);
};
var fieldset = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return fieldset__delegate.call(this,args__6512__auto__);};
fieldset.cljs$lang$maxFixedArity = 0;
fieldset.cljs$lang$applyTo = (function (arglist__9209){
var args__6512__auto__ = cljs.core.seq(arglist__9209);
return fieldset__delegate(args__6512__auto__);
});
fieldset.cljs$core$IFn$_invoke$arity$variadic = fieldset__delegate;
return fieldset;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.figcaption = (function() { 
var figcaption__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__7794_9210 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__7795_9211 = null;var count__7796_9212 = 0;var i__7797_9213 = 0;while(true){
if((i__7797_9213 < count__7796_9212))
{var arg__6514__auto___9214 = cljs.core._nth.call(null,chunk__7795_9211,i__7797_9213);a__6513__auto__.push(arg__6514__auto___9214);
{
var G__9215 = seq__7794_9210;
var G__9216 = chunk__7795_9211;
var G__9217 = count__7796_9212;
var G__9218 = (i__7797_9213 + 1);
seq__7794_9210 = G__9215;
chunk__7795_9211 = G__9216;
count__7796_9212 = G__9217;
i__7797_9213 = G__9218;
continue;
}
} else
{var temp__4092__auto___9219 = cljs.core.seq.call(null,seq__7794_9210);if(temp__4092__auto___9219)
{var seq__7794_9220__$1 = temp__4092__auto___9219;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7794_9220__$1))
{var c__5632__auto___9221 = cljs.core.chunk_first.call(null,seq__7794_9220__$1);{
var G__9222 = cljs.core.chunk_rest.call(null,seq__7794_9220__$1);
var G__9223 = c__5632__auto___9221;
var G__9224 = cljs.core.count.call(null,c__5632__auto___9221);
var G__9225 = 0;
seq__7794_9210 = G__9222;
chunk__7795_9211 = G__9223;
count__7796_9212 = G__9224;
i__7797_9213 = G__9225;
continue;
}
} else
{var arg__6514__auto___9226 = cljs.core.first.call(null,seq__7794_9220__$1);a__6513__auto__.push(arg__6514__auto___9226);
{
var G__9227 = cljs.core.next.call(null,seq__7794_9220__$1);
var G__9228 = null;
var G__9229 = 0;
var G__9230 = 0;
seq__7794_9210 = G__9227;
chunk__7795_9211 = G__9228;
count__7796_9212 = G__9229;
i__7797_9213 = G__9230;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.figcaption.apply(null,a__6513__auto__);
};
var figcaption = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return figcaption__delegate.call(this,args__6512__auto__);};
figcaption.cljs$lang$maxFixedArity = 0;
figcaption.cljs$lang$applyTo = (function (arglist__9231){
var args__6512__auto__ = cljs.core.seq(arglist__9231);
return figcaption__delegate(args__6512__auto__);
});
figcaption.cljs$core$IFn$_invoke$arity$variadic = figcaption__delegate;
return figcaption;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.figure = (function() { 
var figure__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__7802_9232 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__7803_9233 = null;var count__7804_9234 = 0;var i__7805_9235 = 0;while(true){
if((i__7805_9235 < count__7804_9234))
{var arg__6514__auto___9236 = cljs.core._nth.call(null,chunk__7803_9233,i__7805_9235);a__6513__auto__.push(arg__6514__auto___9236);
{
var G__9237 = seq__7802_9232;
var G__9238 = chunk__7803_9233;
var G__9239 = count__7804_9234;
var G__9240 = (i__7805_9235 + 1);
seq__7802_9232 = G__9237;
chunk__7803_9233 = G__9238;
count__7804_9234 = G__9239;
i__7805_9235 = G__9240;
continue;
}
} else
{var temp__4092__auto___9241 = cljs.core.seq.call(null,seq__7802_9232);if(temp__4092__auto___9241)
{var seq__7802_9242__$1 = temp__4092__auto___9241;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7802_9242__$1))
{var c__5632__auto___9243 = cljs.core.chunk_first.call(null,seq__7802_9242__$1);{
var G__9244 = cljs.core.chunk_rest.call(null,seq__7802_9242__$1);
var G__9245 = c__5632__auto___9243;
var G__9246 = cljs.core.count.call(null,c__5632__auto___9243);
var G__9247 = 0;
seq__7802_9232 = G__9244;
chunk__7803_9233 = G__9245;
count__7804_9234 = G__9246;
i__7805_9235 = G__9247;
continue;
}
} else
{var arg__6514__auto___9248 = cljs.core.first.call(null,seq__7802_9242__$1);a__6513__auto__.push(arg__6514__auto___9248);
{
var G__9249 = cljs.core.next.call(null,seq__7802_9242__$1);
var G__9250 = null;
var G__9251 = 0;
var G__9252 = 0;
seq__7802_9232 = G__9249;
chunk__7803_9233 = G__9250;
count__7804_9234 = G__9251;
i__7805_9235 = G__9252;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.figure.apply(null,a__6513__auto__);
};
var figure = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return figure__delegate.call(this,args__6512__auto__);};
figure.cljs$lang$maxFixedArity = 0;
figure.cljs$lang$applyTo = (function (arglist__9253){
var args__6512__auto__ = cljs.core.seq(arglist__9253);
return figure__delegate(args__6512__auto__);
});
figure.cljs$core$IFn$_invoke$arity$variadic = figure__delegate;
return figure;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.footer = (function() { 
var footer__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__7810_9254 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__7811_9255 = null;var count__7812_9256 = 0;var i__7813_9257 = 0;while(true){
if((i__7813_9257 < count__7812_9256))
{var arg__6514__auto___9258 = cljs.core._nth.call(null,chunk__7811_9255,i__7813_9257);a__6513__auto__.push(arg__6514__auto___9258);
{
var G__9259 = seq__7810_9254;
var G__9260 = chunk__7811_9255;
var G__9261 = count__7812_9256;
var G__9262 = (i__7813_9257 + 1);
seq__7810_9254 = G__9259;
chunk__7811_9255 = G__9260;
count__7812_9256 = G__9261;
i__7813_9257 = G__9262;
continue;
}
} else
{var temp__4092__auto___9263 = cljs.core.seq.call(null,seq__7810_9254);if(temp__4092__auto___9263)
{var seq__7810_9264__$1 = temp__4092__auto___9263;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7810_9264__$1))
{var c__5632__auto___9265 = cljs.core.chunk_first.call(null,seq__7810_9264__$1);{
var G__9266 = cljs.core.chunk_rest.call(null,seq__7810_9264__$1);
var G__9267 = c__5632__auto___9265;
var G__9268 = cljs.core.count.call(null,c__5632__auto___9265);
var G__9269 = 0;
seq__7810_9254 = G__9266;
chunk__7811_9255 = G__9267;
count__7812_9256 = G__9268;
i__7813_9257 = G__9269;
continue;
}
} else
{var arg__6514__auto___9270 = cljs.core.first.call(null,seq__7810_9264__$1);a__6513__auto__.push(arg__6514__auto___9270);
{
var G__9271 = cljs.core.next.call(null,seq__7810_9264__$1);
var G__9272 = null;
var G__9273 = 0;
var G__9274 = 0;
seq__7810_9254 = G__9271;
chunk__7811_9255 = G__9272;
count__7812_9256 = G__9273;
i__7813_9257 = G__9274;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.footer.apply(null,a__6513__auto__);
};
var footer = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return footer__delegate.call(this,args__6512__auto__);};
footer.cljs$lang$maxFixedArity = 0;
footer.cljs$lang$applyTo = (function (arglist__9275){
var args__6512__auto__ = cljs.core.seq(arglist__9275);
return footer__delegate(args__6512__auto__);
});
footer.cljs$core$IFn$_invoke$arity$variadic = footer__delegate;
return footer;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.form = (function() { 
var form__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__7818_9276 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__7819_9277 = null;var count__7820_9278 = 0;var i__7821_9279 = 0;while(true){
if((i__7821_9279 < count__7820_9278))
{var arg__6514__auto___9280 = cljs.core._nth.call(null,chunk__7819_9277,i__7821_9279);a__6513__auto__.push(arg__6514__auto___9280);
{
var G__9281 = seq__7818_9276;
var G__9282 = chunk__7819_9277;
var G__9283 = count__7820_9278;
var G__9284 = (i__7821_9279 + 1);
seq__7818_9276 = G__9281;
chunk__7819_9277 = G__9282;
count__7820_9278 = G__9283;
i__7821_9279 = G__9284;
continue;
}
} else
{var temp__4092__auto___9285 = cljs.core.seq.call(null,seq__7818_9276);if(temp__4092__auto___9285)
{var seq__7818_9286__$1 = temp__4092__auto___9285;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7818_9286__$1))
{var c__5632__auto___9287 = cljs.core.chunk_first.call(null,seq__7818_9286__$1);{
var G__9288 = cljs.core.chunk_rest.call(null,seq__7818_9286__$1);
var G__9289 = c__5632__auto___9287;
var G__9290 = cljs.core.count.call(null,c__5632__auto___9287);
var G__9291 = 0;
seq__7818_9276 = G__9288;
chunk__7819_9277 = G__9289;
count__7820_9278 = G__9290;
i__7821_9279 = G__9291;
continue;
}
} else
{var arg__6514__auto___9292 = cljs.core.first.call(null,seq__7818_9286__$1);a__6513__auto__.push(arg__6514__auto___9292);
{
var G__9293 = cljs.core.next.call(null,seq__7818_9286__$1);
var G__9294 = null;
var G__9295 = 0;
var G__9296 = 0;
seq__7818_9276 = G__9293;
chunk__7819_9277 = G__9294;
count__7820_9278 = G__9295;
i__7821_9279 = G__9296;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.form.apply(null,a__6513__auto__);
};
var form = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return form__delegate.call(this,args__6512__auto__);};
form.cljs$lang$maxFixedArity = 0;
form.cljs$lang$applyTo = (function (arglist__9297){
var args__6512__auto__ = cljs.core.seq(arglist__9297);
return form__delegate(args__6512__auto__);
});
form.cljs$core$IFn$_invoke$arity$variadic = form__delegate;
return form;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h1 = (function() { 
var h1__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__7826_9298 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__7827_9299 = null;var count__7828_9300 = 0;var i__7829_9301 = 0;while(true){
if((i__7829_9301 < count__7828_9300))
{var arg__6514__auto___9302 = cljs.core._nth.call(null,chunk__7827_9299,i__7829_9301);a__6513__auto__.push(arg__6514__auto___9302);
{
var G__9303 = seq__7826_9298;
var G__9304 = chunk__7827_9299;
var G__9305 = count__7828_9300;
var G__9306 = (i__7829_9301 + 1);
seq__7826_9298 = G__9303;
chunk__7827_9299 = G__9304;
count__7828_9300 = G__9305;
i__7829_9301 = G__9306;
continue;
}
} else
{var temp__4092__auto___9307 = cljs.core.seq.call(null,seq__7826_9298);if(temp__4092__auto___9307)
{var seq__7826_9308__$1 = temp__4092__auto___9307;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7826_9308__$1))
{var c__5632__auto___9309 = cljs.core.chunk_first.call(null,seq__7826_9308__$1);{
var G__9310 = cljs.core.chunk_rest.call(null,seq__7826_9308__$1);
var G__9311 = c__5632__auto___9309;
var G__9312 = cljs.core.count.call(null,c__5632__auto___9309);
var G__9313 = 0;
seq__7826_9298 = G__9310;
chunk__7827_9299 = G__9311;
count__7828_9300 = G__9312;
i__7829_9301 = G__9313;
continue;
}
} else
{var arg__6514__auto___9314 = cljs.core.first.call(null,seq__7826_9308__$1);a__6513__auto__.push(arg__6514__auto___9314);
{
var G__9315 = cljs.core.next.call(null,seq__7826_9308__$1);
var G__9316 = null;
var G__9317 = 0;
var G__9318 = 0;
seq__7826_9298 = G__9315;
chunk__7827_9299 = G__9316;
count__7828_9300 = G__9317;
i__7829_9301 = G__9318;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h1.apply(null,a__6513__auto__);
};
var h1 = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h1__delegate.call(this,args__6512__auto__);};
h1.cljs$lang$maxFixedArity = 0;
h1.cljs$lang$applyTo = (function (arglist__9319){
var args__6512__auto__ = cljs.core.seq(arglist__9319);
return h1__delegate(args__6512__auto__);
});
h1.cljs$core$IFn$_invoke$arity$variadic = h1__delegate;
return h1;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h2 = (function() { 
var h2__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__7834_9320 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__7835_9321 = null;var count__7836_9322 = 0;var i__7837_9323 = 0;while(true){
if((i__7837_9323 < count__7836_9322))
{var arg__6514__auto___9324 = cljs.core._nth.call(null,chunk__7835_9321,i__7837_9323);a__6513__auto__.push(arg__6514__auto___9324);
{
var G__9325 = seq__7834_9320;
var G__9326 = chunk__7835_9321;
var G__9327 = count__7836_9322;
var G__9328 = (i__7837_9323 + 1);
seq__7834_9320 = G__9325;
chunk__7835_9321 = G__9326;
count__7836_9322 = G__9327;
i__7837_9323 = G__9328;
continue;
}
} else
{var temp__4092__auto___9329 = cljs.core.seq.call(null,seq__7834_9320);if(temp__4092__auto___9329)
{var seq__7834_9330__$1 = temp__4092__auto___9329;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7834_9330__$1))
{var c__5632__auto___9331 = cljs.core.chunk_first.call(null,seq__7834_9330__$1);{
var G__9332 = cljs.core.chunk_rest.call(null,seq__7834_9330__$1);
var G__9333 = c__5632__auto___9331;
var G__9334 = cljs.core.count.call(null,c__5632__auto___9331);
var G__9335 = 0;
seq__7834_9320 = G__9332;
chunk__7835_9321 = G__9333;
count__7836_9322 = G__9334;
i__7837_9323 = G__9335;
continue;
}
} else
{var arg__6514__auto___9336 = cljs.core.first.call(null,seq__7834_9330__$1);a__6513__auto__.push(arg__6514__auto___9336);
{
var G__9337 = cljs.core.next.call(null,seq__7834_9330__$1);
var G__9338 = null;
var G__9339 = 0;
var G__9340 = 0;
seq__7834_9320 = G__9337;
chunk__7835_9321 = G__9338;
count__7836_9322 = G__9339;
i__7837_9323 = G__9340;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h2.apply(null,a__6513__auto__);
};
var h2 = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h2__delegate.call(this,args__6512__auto__);};
h2.cljs$lang$maxFixedArity = 0;
h2.cljs$lang$applyTo = (function (arglist__9341){
var args__6512__auto__ = cljs.core.seq(arglist__9341);
return h2__delegate(args__6512__auto__);
});
h2.cljs$core$IFn$_invoke$arity$variadic = h2__delegate;
return h2;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h3 = (function() { 
var h3__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__7842_9342 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__7843_9343 = null;var count__7844_9344 = 0;var i__7845_9345 = 0;while(true){
if((i__7845_9345 < count__7844_9344))
{var arg__6514__auto___9346 = cljs.core._nth.call(null,chunk__7843_9343,i__7845_9345);a__6513__auto__.push(arg__6514__auto___9346);
{
var G__9347 = seq__7842_9342;
var G__9348 = chunk__7843_9343;
var G__9349 = count__7844_9344;
var G__9350 = (i__7845_9345 + 1);
seq__7842_9342 = G__9347;
chunk__7843_9343 = G__9348;
count__7844_9344 = G__9349;
i__7845_9345 = G__9350;
continue;
}
} else
{var temp__4092__auto___9351 = cljs.core.seq.call(null,seq__7842_9342);if(temp__4092__auto___9351)
{var seq__7842_9352__$1 = temp__4092__auto___9351;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7842_9352__$1))
{var c__5632__auto___9353 = cljs.core.chunk_first.call(null,seq__7842_9352__$1);{
var G__9354 = cljs.core.chunk_rest.call(null,seq__7842_9352__$1);
var G__9355 = c__5632__auto___9353;
var G__9356 = cljs.core.count.call(null,c__5632__auto___9353);
var G__9357 = 0;
seq__7842_9342 = G__9354;
chunk__7843_9343 = G__9355;
count__7844_9344 = G__9356;
i__7845_9345 = G__9357;
continue;
}
} else
{var arg__6514__auto___9358 = cljs.core.first.call(null,seq__7842_9352__$1);a__6513__auto__.push(arg__6514__auto___9358);
{
var G__9359 = cljs.core.next.call(null,seq__7842_9352__$1);
var G__9360 = null;
var G__9361 = 0;
var G__9362 = 0;
seq__7842_9342 = G__9359;
chunk__7843_9343 = G__9360;
count__7844_9344 = G__9361;
i__7845_9345 = G__9362;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h3.apply(null,a__6513__auto__);
};
var h3 = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h3__delegate.call(this,args__6512__auto__);};
h3.cljs$lang$maxFixedArity = 0;
h3.cljs$lang$applyTo = (function (arglist__9363){
var args__6512__auto__ = cljs.core.seq(arglist__9363);
return h3__delegate(args__6512__auto__);
});
h3.cljs$core$IFn$_invoke$arity$variadic = h3__delegate;
return h3;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h4 = (function() { 
var h4__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__7850_9364 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__7851_9365 = null;var count__7852_9366 = 0;var i__7853_9367 = 0;while(true){
if((i__7853_9367 < count__7852_9366))
{var arg__6514__auto___9368 = cljs.core._nth.call(null,chunk__7851_9365,i__7853_9367);a__6513__auto__.push(arg__6514__auto___9368);
{
var G__9369 = seq__7850_9364;
var G__9370 = chunk__7851_9365;
var G__9371 = count__7852_9366;
var G__9372 = (i__7853_9367 + 1);
seq__7850_9364 = G__9369;
chunk__7851_9365 = G__9370;
count__7852_9366 = G__9371;
i__7853_9367 = G__9372;
continue;
}
} else
{var temp__4092__auto___9373 = cljs.core.seq.call(null,seq__7850_9364);if(temp__4092__auto___9373)
{var seq__7850_9374__$1 = temp__4092__auto___9373;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7850_9374__$1))
{var c__5632__auto___9375 = cljs.core.chunk_first.call(null,seq__7850_9374__$1);{
var G__9376 = cljs.core.chunk_rest.call(null,seq__7850_9374__$1);
var G__9377 = c__5632__auto___9375;
var G__9378 = cljs.core.count.call(null,c__5632__auto___9375);
var G__9379 = 0;
seq__7850_9364 = G__9376;
chunk__7851_9365 = G__9377;
count__7852_9366 = G__9378;
i__7853_9367 = G__9379;
continue;
}
} else
{var arg__6514__auto___9380 = cljs.core.first.call(null,seq__7850_9374__$1);a__6513__auto__.push(arg__6514__auto___9380);
{
var G__9381 = cljs.core.next.call(null,seq__7850_9374__$1);
var G__9382 = null;
var G__9383 = 0;
var G__9384 = 0;
seq__7850_9364 = G__9381;
chunk__7851_9365 = G__9382;
count__7852_9366 = G__9383;
i__7853_9367 = G__9384;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h4.apply(null,a__6513__auto__);
};
var h4 = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h4__delegate.call(this,args__6512__auto__);};
h4.cljs$lang$maxFixedArity = 0;
h4.cljs$lang$applyTo = (function (arglist__9385){
var args__6512__auto__ = cljs.core.seq(arglist__9385);
return h4__delegate(args__6512__auto__);
});
h4.cljs$core$IFn$_invoke$arity$variadic = h4__delegate;
return h4;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h5 = (function() { 
var h5__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__7858_9386 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__7859_9387 = null;var count__7860_9388 = 0;var i__7861_9389 = 0;while(true){
if((i__7861_9389 < count__7860_9388))
{var arg__6514__auto___9390 = cljs.core._nth.call(null,chunk__7859_9387,i__7861_9389);a__6513__auto__.push(arg__6514__auto___9390);
{
var G__9391 = seq__7858_9386;
var G__9392 = chunk__7859_9387;
var G__9393 = count__7860_9388;
var G__9394 = (i__7861_9389 + 1);
seq__7858_9386 = G__9391;
chunk__7859_9387 = G__9392;
count__7860_9388 = G__9393;
i__7861_9389 = G__9394;
continue;
}
} else
{var temp__4092__auto___9395 = cljs.core.seq.call(null,seq__7858_9386);if(temp__4092__auto___9395)
{var seq__7858_9396__$1 = temp__4092__auto___9395;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7858_9396__$1))
{var c__5632__auto___9397 = cljs.core.chunk_first.call(null,seq__7858_9396__$1);{
var G__9398 = cljs.core.chunk_rest.call(null,seq__7858_9396__$1);
var G__9399 = c__5632__auto___9397;
var G__9400 = cljs.core.count.call(null,c__5632__auto___9397);
var G__9401 = 0;
seq__7858_9386 = G__9398;
chunk__7859_9387 = G__9399;
count__7860_9388 = G__9400;
i__7861_9389 = G__9401;
continue;
}
} else
{var arg__6514__auto___9402 = cljs.core.first.call(null,seq__7858_9396__$1);a__6513__auto__.push(arg__6514__auto___9402);
{
var G__9403 = cljs.core.next.call(null,seq__7858_9396__$1);
var G__9404 = null;
var G__9405 = 0;
var G__9406 = 0;
seq__7858_9386 = G__9403;
chunk__7859_9387 = G__9404;
count__7860_9388 = G__9405;
i__7861_9389 = G__9406;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h5.apply(null,a__6513__auto__);
};
var h5 = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h5__delegate.call(this,args__6512__auto__);};
h5.cljs$lang$maxFixedArity = 0;
h5.cljs$lang$applyTo = (function (arglist__9407){
var args__6512__auto__ = cljs.core.seq(arglist__9407);
return h5__delegate(args__6512__auto__);
});
h5.cljs$core$IFn$_invoke$arity$variadic = h5__delegate;
return h5;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h6 = (function() { 
var h6__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__7866_9408 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__7867_9409 = null;var count__7868_9410 = 0;var i__7869_9411 = 0;while(true){
if((i__7869_9411 < count__7868_9410))
{var arg__6514__auto___9412 = cljs.core._nth.call(null,chunk__7867_9409,i__7869_9411);a__6513__auto__.push(arg__6514__auto___9412);
{
var G__9413 = seq__7866_9408;
var G__9414 = chunk__7867_9409;
var G__9415 = count__7868_9410;
var G__9416 = (i__7869_9411 + 1);
seq__7866_9408 = G__9413;
chunk__7867_9409 = G__9414;
count__7868_9410 = G__9415;
i__7869_9411 = G__9416;
continue;
}
} else
{var temp__4092__auto___9417 = cljs.core.seq.call(null,seq__7866_9408);if(temp__4092__auto___9417)
{var seq__7866_9418__$1 = temp__4092__auto___9417;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7866_9418__$1))
{var c__5632__auto___9419 = cljs.core.chunk_first.call(null,seq__7866_9418__$1);{
var G__9420 = cljs.core.chunk_rest.call(null,seq__7866_9418__$1);
var G__9421 = c__5632__auto___9419;
var G__9422 = cljs.core.count.call(null,c__5632__auto___9419);
var G__9423 = 0;
seq__7866_9408 = G__9420;
chunk__7867_9409 = G__9421;
count__7868_9410 = G__9422;
i__7869_9411 = G__9423;
continue;
}
} else
{var arg__6514__auto___9424 = cljs.core.first.call(null,seq__7866_9418__$1);a__6513__auto__.push(arg__6514__auto___9424);
{
var G__9425 = cljs.core.next.call(null,seq__7866_9418__$1);
var G__9426 = null;
var G__9427 = 0;
var G__9428 = 0;
seq__7866_9408 = G__9425;
chunk__7867_9409 = G__9426;
count__7868_9410 = G__9427;
i__7869_9411 = G__9428;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h6.apply(null,a__6513__auto__);
};
var h6 = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h6__delegate.call(this,args__6512__auto__);};
h6.cljs$lang$maxFixedArity = 0;
h6.cljs$lang$applyTo = (function (arglist__9429){
var args__6512__auto__ = cljs.core.seq(arglist__9429);
return h6__delegate(args__6512__auto__);
});
h6.cljs$core$IFn$_invoke$arity$variadic = h6__delegate;
return h6;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.head = (function() { 
var head__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__7874_9430 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__7875_9431 = null;var count__7876_9432 = 0;var i__7877_9433 = 0;while(true){
if((i__7877_9433 < count__7876_9432))
{var arg__6514__auto___9434 = cljs.core._nth.call(null,chunk__7875_9431,i__7877_9433);a__6513__auto__.push(arg__6514__auto___9434);
{
var G__9435 = seq__7874_9430;
var G__9436 = chunk__7875_9431;
var G__9437 = count__7876_9432;
var G__9438 = (i__7877_9433 + 1);
seq__7874_9430 = G__9435;
chunk__7875_9431 = G__9436;
count__7876_9432 = G__9437;
i__7877_9433 = G__9438;
continue;
}
} else
{var temp__4092__auto___9439 = cljs.core.seq.call(null,seq__7874_9430);if(temp__4092__auto___9439)
{var seq__7874_9440__$1 = temp__4092__auto___9439;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7874_9440__$1))
{var c__5632__auto___9441 = cljs.core.chunk_first.call(null,seq__7874_9440__$1);{
var G__9442 = cljs.core.chunk_rest.call(null,seq__7874_9440__$1);
var G__9443 = c__5632__auto___9441;
var G__9444 = cljs.core.count.call(null,c__5632__auto___9441);
var G__9445 = 0;
seq__7874_9430 = G__9442;
chunk__7875_9431 = G__9443;
count__7876_9432 = G__9444;
i__7877_9433 = G__9445;
continue;
}
} else
{var arg__6514__auto___9446 = cljs.core.first.call(null,seq__7874_9440__$1);a__6513__auto__.push(arg__6514__auto___9446);
{
var G__9447 = cljs.core.next.call(null,seq__7874_9440__$1);
var G__9448 = null;
var G__9449 = 0;
var G__9450 = 0;
seq__7874_9430 = G__9447;
chunk__7875_9431 = G__9448;
count__7876_9432 = G__9449;
i__7877_9433 = G__9450;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.head.apply(null,a__6513__auto__);
};
var head = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return head__delegate.call(this,args__6512__auto__);};
head.cljs$lang$maxFixedArity = 0;
head.cljs$lang$applyTo = (function (arglist__9451){
var args__6512__auto__ = cljs.core.seq(arglist__9451);
return head__delegate(args__6512__auto__);
});
head.cljs$core$IFn$_invoke$arity$variadic = head__delegate;
return head;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.header = (function() { 
var header__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__7882_9452 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__7883_9453 = null;var count__7884_9454 = 0;var i__7885_9455 = 0;while(true){
if((i__7885_9455 < count__7884_9454))
{var arg__6514__auto___9456 = cljs.core._nth.call(null,chunk__7883_9453,i__7885_9455);a__6513__auto__.push(arg__6514__auto___9456);
{
var G__9457 = seq__7882_9452;
var G__9458 = chunk__7883_9453;
var G__9459 = count__7884_9454;
var G__9460 = (i__7885_9455 + 1);
seq__7882_9452 = G__9457;
chunk__7883_9453 = G__9458;
count__7884_9454 = G__9459;
i__7885_9455 = G__9460;
continue;
}
} else
{var temp__4092__auto___9461 = cljs.core.seq.call(null,seq__7882_9452);if(temp__4092__auto___9461)
{var seq__7882_9462__$1 = temp__4092__auto___9461;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7882_9462__$1))
{var c__5632__auto___9463 = cljs.core.chunk_first.call(null,seq__7882_9462__$1);{
var G__9464 = cljs.core.chunk_rest.call(null,seq__7882_9462__$1);
var G__9465 = c__5632__auto___9463;
var G__9466 = cljs.core.count.call(null,c__5632__auto___9463);
var G__9467 = 0;
seq__7882_9452 = G__9464;
chunk__7883_9453 = G__9465;
count__7884_9454 = G__9466;
i__7885_9455 = G__9467;
continue;
}
} else
{var arg__6514__auto___9468 = cljs.core.first.call(null,seq__7882_9462__$1);a__6513__auto__.push(arg__6514__auto___9468);
{
var G__9469 = cljs.core.next.call(null,seq__7882_9462__$1);
var G__9470 = null;
var G__9471 = 0;
var G__9472 = 0;
seq__7882_9452 = G__9469;
chunk__7883_9453 = G__9470;
count__7884_9454 = G__9471;
i__7885_9455 = G__9472;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.header.apply(null,a__6513__auto__);
};
var header = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return header__delegate.call(this,args__6512__auto__);};
header.cljs$lang$maxFixedArity = 0;
header.cljs$lang$applyTo = (function (arglist__9473){
var args__6512__auto__ = cljs.core.seq(arglist__9473);
return header__delegate(args__6512__auto__);
});
header.cljs$core$IFn$_invoke$arity$variadic = header__delegate;
return header;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.hr = (function() { 
var hr__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__7890_9474 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__7891_9475 = null;var count__7892_9476 = 0;var i__7893_9477 = 0;while(true){
if((i__7893_9477 < count__7892_9476))
{var arg__6514__auto___9478 = cljs.core._nth.call(null,chunk__7891_9475,i__7893_9477);a__6513__auto__.push(arg__6514__auto___9478);
{
var G__9479 = seq__7890_9474;
var G__9480 = chunk__7891_9475;
var G__9481 = count__7892_9476;
var G__9482 = (i__7893_9477 + 1);
seq__7890_9474 = G__9479;
chunk__7891_9475 = G__9480;
count__7892_9476 = G__9481;
i__7893_9477 = G__9482;
continue;
}
} else
{var temp__4092__auto___9483 = cljs.core.seq.call(null,seq__7890_9474);if(temp__4092__auto___9483)
{var seq__7890_9484__$1 = temp__4092__auto___9483;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7890_9484__$1))
{var c__5632__auto___9485 = cljs.core.chunk_first.call(null,seq__7890_9484__$1);{
var G__9486 = cljs.core.chunk_rest.call(null,seq__7890_9484__$1);
var G__9487 = c__5632__auto___9485;
var G__9488 = cljs.core.count.call(null,c__5632__auto___9485);
var G__9489 = 0;
seq__7890_9474 = G__9486;
chunk__7891_9475 = G__9487;
count__7892_9476 = G__9488;
i__7893_9477 = G__9489;
continue;
}
} else
{var arg__6514__auto___9490 = cljs.core.first.call(null,seq__7890_9484__$1);a__6513__auto__.push(arg__6514__auto___9490);
{
var G__9491 = cljs.core.next.call(null,seq__7890_9484__$1);
var G__9492 = null;
var G__9493 = 0;
var G__9494 = 0;
seq__7890_9474 = G__9491;
chunk__7891_9475 = G__9492;
count__7892_9476 = G__9493;
i__7893_9477 = G__9494;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.hr.apply(null,a__6513__auto__);
};
var hr = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return hr__delegate.call(this,args__6512__auto__);};
hr.cljs$lang$maxFixedArity = 0;
hr.cljs$lang$applyTo = (function (arglist__9495){
var args__6512__auto__ = cljs.core.seq(arglist__9495);
return hr__delegate(args__6512__auto__);
});
hr.cljs$core$IFn$_invoke$arity$variadic = hr__delegate;
return hr;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.html = (function() { 
var html__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__7898_9496 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__7899_9497 = null;var count__7900_9498 = 0;var i__7901_9499 = 0;while(true){
if((i__7901_9499 < count__7900_9498))
{var arg__6514__auto___9500 = cljs.core._nth.call(null,chunk__7899_9497,i__7901_9499);a__6513__auto__.push(arg__6514__auto___9500);
{
var G__9501 = seq__7898_9496;
var G__9502 = chunk__7899_9497;
var G__9503 = count__7900_9498;
var G__9504 = (i__7901_9499 + 1);
seq__7898_9496 = G__9501;
chunk__7899_9497 = G__9502;
count__7900_9498 = G__9503;
i__7901_9499 = G__9504;
continue;
}
} else
{var temp__4092__auto___9505 = cljs.core.seq.call(null,seq__7898_9496);if(temp__4092__auto___9505)
{var seq__7898_9506__$1 = temp__4092__auto___9505;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7898_9506__$1))
{var c__5632__auto___9507 = cljs.core.chunk_first.call(null,seq__7898_9506__$1);{
var G__9508 = cljs.core.chunk_rest.call(null,seq__7898_9506__$1);
var G__9509 = c__5632__auto___9507;
var G__9510 = cljs.core.count.call(null,c__5632__auto___9507);
var G__9511 = 0;
seq__7898_9496 = G__9508;
chunk__7899_9497 = G__9509;
count__7900_9498 = G__9510;
i__7901_9499 = G__9511;
continue;
}
} else
{var arg__6514__auto___9512 = cljs.core.first.call(null,seq__7898_9506__$1);a__6513__auto__.push(arg__6514__auto___9512);
{
var G__9513 = cljs.core.next.call(null,seq__7898_9506__$1);
var G__9514 = null;
var G__9515 = 0;
var G__9516 = 0;
seq__7898_9496 = G__9513;
chunk__7899_9497 = G__9514;
count__7900_9498 = G__9515;
i__7901_9499 = G__9516;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.html.apply(null,a__6513__auto__);
};
var html = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return html__delegate.call(this,args__6512__auto__);};
html.cljs$lang$maxFixedArity = 0;
html.cljs$lang$applyTo = (function (arglist__9517){
var args__6512__auto__ = cljs.core.seq(arglist__9517);
return html__delegate(args__6512__auto__);
});
html.cljs$core$IFn$_invoke$arity$variadic = html__delegate;
return html;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.i = (function() { 
var i__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__7906_9518 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__7907_9519 = null;var count__7908_9520 = 0;var i__7909_9521 = 0;while(true){
if((i__7909_9521 < count__7908_9520))
{var arg__6514__auto___9522 = cljs.core._nth.call(null,chunk__7907_9519,i__7909_9521);a__6513__auto__.push(arg__6514__auto___9522);
{
var G__9523 = seq__7906_9518;
var G__9524 = chunk__7907_9519;
var G__9525 = count__7908_9520;
var G__9526 = (i__7909_9521 + 1);
seq__7906_9518 = G__9523;
chunk__7907_9519 = G__9524;
count__7908_9520 = G__9525;
i__7909_9521 = G__9526;
continue;
}
} else
{var temp__4092__auto___9527 = cljs.core.seq.call(null,seq__7906_9518);if(temp__4092__auto___9527)
{var seq__7906_9528__$1 = temp__4092__auto___9527;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7906_9528__$1))
{var c__5632__auto___9529 = cljs.core.chunk_first.call(null,seq__7906_9528__$1);{
var G__9530 = cljs.core.chunk_rest.call(null,seq__7906_9528__$1);
var G__9531 = c__5632__auto___9529;
var G__9532 = cljs.core.count.call(null,c__5632__auto___9529);
var G__9533 = 0;
seq__7906_9518 = G__9530;
chunk__7907_9519 = G__9531;
count__7908_9520 = G__9532;
i__7909_9521 = G__9533;
continue;
}
} else
{var arg__6514__auto___9534 = cljs.core.first.call(null,seq__7906_9528__$1);a__6513__auto__.push(arg__6514__auto___9534);
{
var G__9535 = cljs.core.next.call(null,seq__7906_9528__$1);
var G__9536 = null;
var G__9537 = 0;
var G__9538 = 0;
seq__7906_9518 = G__9535;
chunk__7907_9519 = G__9536;
count__7908_9520 = G__9537;
i__7909_9521 = G__9538;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.i.apply(null,a__6513__auto__);
};
var i = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return i__delegate.call(this,args__6512__auto__);};
i.cljs$lang$maxFixedArity = 0;
i.cljs$lang$applyTo = (function (arglist__9539){
var args__6512__auto__ = cljs.core.seq(arglist__9539);
return i__delegate(args__6512__auto__);
});
i.cljs$core$IFn$_invoke$arity$variadic = i__delegate;
return i;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.iframe = (function() { 
var iframe__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__7914_9540 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__7915_9541 = null;var count__7916_9542 = 0;var i__7917_9543 = 0;while(true){
if((i__7917_9543 < count__7916_9542))
{var arg__6514__auto___9544 = cljs.core._nth.call(null,chunk__7915_9541,i__7917_9543);a__6513__auto__.push(arg__6514__auto___9544);
{
var G__9545 = seq__7914_9540;
var G__9546 = chunk__7915_9541;
var G__9547 = count__7916_9542;
var G__9548 = (i__7917_9543 + 1);
seq__7914_9540 = G__9545;
chunk__7915_9541 = G__9546;
count__7916_9542 = G__9547;
i__7917_9543 = G__9548;
continue;
}
} else
{var temp__4092__auto___9549 = cljs.core.seq.call(null,seq__7914_9540);if(temp__4092__auto___9549)
{var seq__7914_9550__$1 = temp__4092__auto___9549;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7914_9550__$1))
{var c__5632__auto___9551 = cljs.core.chunk_first.call(null,seq__7914_9550__$1);{
var G__9552 = cljs.core.chunk_rest.call(null,seq__7914_9550__$1);
var G__9553 = c__5632__auto___9551;
var G__9554 = cljs.core.count.call(null,c__5632__auto___9551);
var G__9555 = 0;
seq__7914_9540 = G__9552;
chunk__7915_9541 = G__9553;
count__7916_9542 = G__9554;
i__7917_9543 = G__9555;
continue;
}
} else
{var arg__6514__auto___9556 = cljs.core.first.call(null,seq__7914_9550__$1);a__6513__auto__.push(arg__6514__auto___9556);
{
var G__9557 = cljs.core.next.call(null,seq__7914_9550__$1);
var G__9558 = null;
var G__9559 = 0;
var G__9560 = 0;
seq__7914_9540 = G__9557;
chunk__7915_9541 = G__9558;
count__7916_9542 = G__9559;
i__7917_9543 = G__9560;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.iframe.apply(null,a__6513__auto__);
};
var iframe = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return iframe__delegate.call(this,args__6512__auto__);};
iframe.cljs$lang$maxFixedArity = 0;
iframe.cljs$lang$applyTo = (function (arglist__9561){
var args__6512__auto__ = cljs.core.seq(arglist__9561);
return iframe__delegate(args__6512__auto__);
});
iframe.cljs$core$IFn$_invoke$arity$variadic = iframe__delegate;
return iframe;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.img = (function() { 
var img__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__7922_9562 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__7923_9563 = null;var count__7924_9564 = 0;var i__7925_9565 = 0;while(true){
if((i__7925_9565 < count__7924_9564))
{var arg__6514__auto___9566 = cljs.core._nth.call(null,chunk__7923_9563,i__7925_9565);a__6513__auto__.push(arg__6514__auto___9566);
{
var G__9567 = seq__7922_9562;
var G__9568 = chunk__7923_9563;
var G__9569 = count__7924_9564;
var G__9570 = (i__7925_9565 + 1);
seq__7922_9562 = G__9567;
chunk__7923_9563 = G__9568;
count__7924_9564 = G__9569;
i__7925_9565 = G__9570;
continue;
}
} else
{var temp__4092__auto___9571 = cljs.core.seq.call(null,seq__7922_9562);if(temp__4092__auto___9571)
{var seq__7922_9572__$1 = temp__4092__auto___9571;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7922_9572__$1))
{var c__5632__auto___9573 = cljs.core.chunk_first.call(null,seq__7922_9572__$1);{
var G__9574 = cljs.core.chunk_rest.call(null,seq__7922_9572__$1);
var G__9575 = c__5632__auto___9573;
var G__9576 = cljs.core.count.call(null,c__5632__auto___9573);
var G__9577 = 0;
seq__7922_9562 = G__9574;
chunk__7923_9563 = G__9575;
count__7924_9564 = G__9576;
i__7925_9565 = G__9577;
continue;
}
} else
{var arg__6514__auto___9578 = cljs.core.first.call(null,seq__7922_9572__$1);a__6513__auto__.push(arg__6514__auto___9578);
{
var G__9579 = cljs.core.next.call(null,seq__7922_9572__$1);
var G__9580 = null;
var G__9581 = 0;
var G__9582 = 0;
seq__7922_9562 = G__9579;
chunk__7923_9563 = G__9580;
count__7924_9564 = G__9581;
i__7925_9565 = G__9582;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.img.apply(null,a__6513__auto__);
};
var img = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return img__delegate.call(this,args__6512__auto__);};
img.cljs$lang$maxFixedArity = 0;
img.cljs$lang$applyTo = (function (arglist__9583){
var args__6512__auto__ = cljs.core.seq(arglist__9583);
return img__delegate(args__6512__auto__);
});
img.cljs$core$IFn$_invoke$arity$variadic = img__delegate;
return img;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.input = (function() { 
var input__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__7930_9584 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__7931_9585 = null;var count__7932_9586 = 0;var i__7933_9587 = 0;while(true){
if((i__7933_9587 < count__7932_9586))
{var arg__6514__auto___9588 = cljs.core._nth.call(null,chunk__7931_9585,i__7933_9587);a__6513__auto__.push(arg__6514__auto___9588);
{
var G__9589 = seq__7930_9584;
var G__9590 = chunk__7931_9585;
var G__9591 = count__7932_9586;
var G__9592 = (i__7933_9587 + 1);
seq__7930_9584 = G__9589;
chunk__7931_9585 = G__9590;
count__7932_9586 = G__9591;
i__7933_9587 = G__9592;
continue;
}
} else
{var temp__4092__auto___9593 = cljs.core.seq.call(null,seq__7930_9584);if(temp__4092__auto___9593)
{var seq__7930_9594__$1 = temp__4092__auto___9593;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7930_9594__$1))
{var c__5632__auto___9595 = cljs.core.chunk_first.call(null,seq__7930_9594__$1);{
var G__9596 = cljs.core.chunk_rest.call(null,seq__7930_9594__$1);
var G__9597 = c__5632__auto___9595;
var G__9598 = cljs.core.count.call(null,c__5632__auto___9595);
var G__9599 = 0;
seq__7930_9584 = G__9596;
chunk__7931_9585 = G__9597;
count__7932_9586 = G__9598;
i__7933_9587 = G__9599;
continue;
}
} else
{var arg__6514__auto___9600 = cljs.core.first.call(null,seq__7930_9594__$1);a__6513__auto__.push(arg__6514__auto___9600);
{
var G__9601 = cljs.core.next.call(null,seq__7930_9594__$1);
var G__9602 = null;
var G__9603 = 0;
var G__9604 = 0;
seq__7930_9584 = G__9601;
chunk__7931_9585 = G__9602;
count__7932_9586 = G__9603;
i__7933_9587 = G__9604;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.input.apply(null,a__6513__auto__);
};
var input = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return input__delegate.call(this,args__6512__auto__);};
input.cljs$lang$maxFixedArity = 0;
input.cljs$lang$applyTo = (function (arglist__9605){
var args__6512__auto__ = cljs.core.seq(arglist__9605);
return input__delegate(args__6512__auto__);
});
input.cljs$core$IFn$_invoke$arity$variadic = input__delegate;
return input;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.ins = (function() { 
var ins__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__7938_9606 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__7939_9607 = null;var count__7940_9608 = 0;var i__7941_9609 = 0;while(true){
if((i__7941_9609 < count__7940_9608))
{var arg__6514__auto___9610 = cljs.core._nth.call(null,chunk__7939_9607,i__7941_9609);a__6513__auto__.push(arg__6514__auto___9610);
{
var G__9611 = seq__7938_9606;
var G__9612 = chunk__7939_9607;
var G__9613 = count__7940_9608;
var G__9614 = (i__7941_9609 + 1);
seq__7938_9606 = G__9611;
chunk__7939_9607 = G__9612;
count__7940_9608 = G__9613;
i__7941_9609 = G__9614;
continue;
}
} else
{var temp__4092__auto___9615 = cljs.core.seq.call(null,seq__7938_9606);if(temp__4092__auto___9615)
{var seq__7938_9616__$1 = temp__4092__auto___9615;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7938_9616__$1))
{var c__5632__auto___9617 = cljs.core.chunk_first.call(null,seq__7938_9616__$1);{
var G__9618 = cljs.core.chunk_rest.call(null,seq__7938_9616__$1);
var G__9619 = c__5632__auto___9617;
var G__9620 = cljs.core.count.call(null,c__5632__auto___9617);
var G__9621 = 0;
seq__7938_9606 = G__9618;
chunk__7939_9607 = G__9619;
count__7940_9608 = G__9620;
i__7941_9609 = G__9621;
continue;
}
} else
{var arg__6514__auto___9622 = cljs.core.first.call(null,seq__7938_9616__$1);a__6513__auto__.push(arg__6514__auto___9622);
{
var G__9623 = cljs.core.next.call(null,seq__7938_9616__$1);
var G__9624 = null;
var G__9625 = 0;
var G__9626 = 0;
seq__7938_9606 = G__9623;
chunk__7939_9607 = G__9624;
count__7940_9608 = G__9625;
i__7941_9609 = G__9626;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.ins.apply(null,a__6513__auto__);
};
var ins = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ins__delegate.call(this,args__6512__auto__);};
ins.cljs$lang$maxFixedArity = 0;
ins.cljs$lang$applyTo = (function (arglist__9627){
var args__6512__auto__ = cljs.core.seq(arglist__9627);
return ins__delegate(args__6512__auto__);
});
ins.cljs$core$IFn$_invoke$arity$variadic = ins__delegate;
return ins;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.kbd = (function() { 
var kbd__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__7946_9628 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__7947_9629 = null;var count__7948_9630 = 0;var i__7949_9631 = 0;while(true){
if((i__7949_9631 < count__7948_9630))
{var arg__6514__auto___9632 = cljs.core._nth.call(null,chunk__7947_9629,i__7949_9631);a__6513__auto__.push(arg__6514__auto___9632);
{
var G__9633 = seq__7946_9628;
var G__9634 = chunk__7947_9629;
var G__9635 = count__7948_9630;
var G__9636 = (i__7949_9631 + 1);
seq__7946_9628 = G__9633;
chunk__7947_9629 = G__9634;
count__7948_9630 = G__9635;
i__7949_9631 = G__9636;
continue;
}
} else
{var temp__4092__auto___9637 = cljs.core.seq.call(null,seq__7946_9628);if(temp__4092__auto___9637)
{var seq__7946_9638__$1 = temp__4092__auto___9637;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7946_9638__$1))
{var c__5632__auto___9639 = cljs.core.chunk_first.call(null,seq__7946_9638__$1);{
var G__9640 = cljs.core.chunk_rest.call(null,seq__7946_9638__$1);
var G__9641 = c__5632__auto___9639;
var G__9642 = cljs.core.count.call(null,c__5632__auto___9639);
var G__9643 = 0;
seq__7946_9628 = G__9640;
chunk__7947_9629 = G__9641;
count__7948_9630 = G__9642;
i__7949_9631 = G__9643;
continue;
}
} else
{var arg__6514__auto___9644 = cljs.core.first.call(null,seq__7946_9638__$1);a__6513__auto__.push(arg__6514__auto___9644);
{
var G__9645 = cljs.core.next.call(null,seq__7946_9638__$1);
var G__9646 = null;
var G__9647 = 0;
var G__9648 = 0;
seq__7946_9628 = G__9645;
chunk__7947_9629 = G__9646;
count__7948_9630 = G__9647;
i__7949_9631 = G__9648;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.kbd.apply(null,a__6513__auto__);
};
var kbd = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return kbd__delegate.call(this,args__6512__auto__);};
kbd.cljs$lang$maxFixedArity = 0;
kbd.cljs$lang$applyTo = (function (arglist__9649){
var args__6512__auto__ = cljs.core.seq(arglist__9649);
return kbd__delegate(args__6512__auto__);
});
kbd.cljs$core$IFn$_invoke$arity$variadic = kbd__delegate;
return kbd;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.keygen = (function() { 
var keygen__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__7954_9650 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__7955_9651 = null;var count__7956_9652 = 0;var i__7957_9653 = 0;while(true){
if((i__7957_9653 < count__7956_9652))
{var arg__6514__auto___9654 = cljs.core._nth.call(null,chunk__7955_9651,i__7957_9653);a__6513__auto__.push(arg__6514__auto___9654);
{
var G__9655 = seq__7954_9650;
var G__9656 = chunk__7955_9651;
var G__9657 = count__7956_9652;
var G__9658 = (i__7957_9653 + 1);
seq__7954_9650 = G__9655;
chunk__7955_9651 = G__9656;
count__7956_9652 = G__9657;
i__7957_9653 = G__9658;
continue;
}
} else
{var temp__4092__auto___9659 = cljs.core.seq.call(null,seq__7954_9650);if(temp__4092__auto___9659)
{var seq__7954_9660__$1 = temp__4092__auto___9659;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7954_9660__$1))
{var c__5632__auto___9661 = cljs.core.chunk_first.call(null,seq__7954_9660__$1);{
var G__9662 = cljs.core.chunk_rest.call(null,seq__7954_9660__$1);
var G__9663 = c__5632__auto___9661;
var G__9664 = cljs.core.count.call(null,c__5632__auto___9661);
var G__9665 = 0;
seq__7954_9650 = G__9662;
chunk__7955_9651 = G__9663;
count__7956_9652 = G__9664;
i__7957_9653 = G__9665;
continue;
}
} else
{var arg__6514__auto___9666 = cljs.core.first.call(null,seq__7954_9660__$1);a__6513__auto__.push(arg__6514__auto___9666);
{
var G__9667 = cljs.core.next.call(null,seq__7954_9660__$1);
var G__9668 = null;
var G__9669 = 0;
var G__9670 = 0;
seq__7954_9650 = G__9667;
chunk__7955_9651 = G__9668;
count__7956_9652 = G__9669;
i__7957_9653 = G__9670;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.keygen.apply(null,a__6513__auto__);
};
var keygen = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return keygen__delegate.call(this,args__6512__auto__);};
keygen.cljs$lang$maxFixedArity = 0;
keygen.cljs$lang$applyTo = (function (arglist__9671){
var args__6512__auto__ = cljs.core.seq(arglist__9671);
return keygen__delegate(args__6512__auto__);
});
keygen.cljs$core$IFn$_invoke$arity$variadic = keygen__delegate;
return keygen;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.label = (function() { 
var label__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__7962_9672 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__7963_9673 = null;var count__7964_9674 = 0;var i__7965_9675 = 0;while(true){
if((i__7965_9675 < count__7964_9674))
{var arg__6514__auto___9676 = cljs.core._nth.call(null,chunk__7963_9673,i__7965_9675);a__6513__auto__.push(arg__6514__auto___9676);
{
var G__9677 = seq__7962_9672;
var G__9678 = chunk__7963_9673;
var G__9679 = count__7964_9674;
var G__9680 = (i__7965_9675 + 1);
seq__7962_9672 = G__9677;
chunk__7963_9673 = G__9678;
count__7964_9674 = G__9679;
i__7965_9675 = G__9680;
continue;
}
} else
{var temp__4092__auto___9681 = cljs.core.seq.call(null,seq__7962_9672);if(temp__4092__auto___9681)
{var seq__7962_9682__$1 = temp__4092__auto___9681;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7962_9682__$1))
{var c__5632__auto___9683 = cljs.core.chunk_first.call(null,seq__7962_9682__$1);{
var G__9684 = cljs.core.chunk_rest.call(null,seq__7962_9682__$1);
var G__9685 = c__5632__auto___9683;
var G__9686 = cljs.core.count.call(null,c__5632__auto___9683);
var G__9687 = 0;
seq__7962_9672 = G__9684;
chunk__7963_9673 = G__9685;
count__7964_9674 = G__9686;
i__7965_9675 = G__9687;
continue;
}
} else
{var arg__6514__auto___9688 = cljs.core.first.call(null,seq__7962_9682__$1);a__6513__auto__.push(arg__6514__auto___9688);
{
var G__9689 = cljs.core.next.call(null,seq__7962_9682__$1);
var G__9690 = null;
var G__9691 = 0;
var G__9692 = 0;
seq__7962_9672 = G__9689;
chunk__7963_9673 = G__9690;
count__7964_9674 = G__9691;
i__7965_9675 = G__9692;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.label.apply(null,a__6513__auto__);
};
var label = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return label__delegate.call(this,args__6512__auto__);};
label.cljs$lang$maxFixedArity = 0;
label.cljs$lang$applyTo = (function (arglist__9693){
var args__6512__auto__ = cljs.core.seq(arglist__9693);
return label__delegate(args__6512__auto__);
});
label.cljs$core$IFn$_invoke$arity$variadic = label__delegate;
return label;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.legend = (function() { 
var legend__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__7970_9694 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__7971_9695 = null;var count__7972_9696 = 0;var i__7973_9697 = 0;while(true){
if((i__7973_9697 < count__7972_9696))
{var arg__6514__auto___9698 = cljs.core._nth.call(null,chunk__7971_9695,i__7973_9697);a__6513__auto__.push(arg__6514__auto___9698);
{
var G__9699 = seq__7970_9694;
var G__9700 = chunk__7971_9695;
var G__9701 = count__7972_9696;
var G__9702 = (i__7973_9697 + 1);
seq__7970_9694 = G__9699;
chunk__7971_9695 = G__9700;
count__7972_9696 = G__9701;
i__7973_9697 = G__9702;
continue;
}
} else
{var temp__4092__auto___9703 = cljs.core.seq.call(null,seq__7970_9694);if(temp__4092__auto___9703)
{var seq__7970_9704__$1 = temp__4092__auto___9703;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7970_9704__$1))
{var c__5632__auto___9705 = cljs.core.chunk_first.call(null,seq__7970_9704__$1);{
var G__9706 = cljs.core.chunk_rest.call(null,seq__7970_9704__$1);
var G__9707 = c__5632__auto___9705;
var G__9708 = cljs.core.count.call(null,c__5632__auto___9705);
var G__9709 = 0;
seq__7970_9694 = G__9706;
chunk__7971_9695 = G__9707;
count__7972_9696 = G__9708;
i__7973_9697 = G__9709;
continue;
}
} else
{var arg__6514__auto___9710 = cljs.core.first.call(null,seq__7970_9704__$1);a__6513__auto__.push(arg__6514__auto___9710);
{
var G__9711 = cljs.core.next.call(null,seq__7970_9704__$1);
var G__9712 = null;
var G__9713 = 0;
var G__9714 = 0;
seq__7970_9694 = G__9711;
chunk__7971_9695 = G__9712;
count__7972_9696 = G__9713;
i__7973_9697 = G__9714;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.legend.apply(null,a__6513__auto__);
};
var legend = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return legend__delegate.call(this,args__6512__auto__);};
legend.cljs$lang$maxFixedArity = 0;
legend.cljs$lang$applyTo = (function (arglist__9715){
var args__6512__auto__ = cljs.core.seq(arglist__9715);
return legend__delegate(args__6512__auto__);
});
legend.cljs$core$IFn$_invoke$arity$variadic = legend__delegate;
return legend;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.li = (function() { 
var li__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__7978_9716 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__7979_9717 = null;var count__7980_9718 = 0;var i__7981_9719 = 0;while(true){
if((i__7981_9719 < count__7980_9718))
{var arg__6514__auto___9720 = cljs.core._nth.call(null,chunk__7979_9717,i__7981_9719);a__6513__auto__.push(arg__6514__auto___9720);
{
var G__9721 = seq__7978_9716;
var G__9722 = chunk__7979_9717;
var G__9723 = count__7980_9718;
var G__9724 = (i__7981_9719 + 1);
seq__7978_9716 = G__9721;
chunk__7979_9717 = G__9722;
count__7980_9718 = G__9723;
i__7981_9719 = G__9724;
continue;
}
} else
{var temp__4092__auto___9725 = cljs.core.seq.call(null,seq__7978_9716);if(temp__4092__auto___9725)
{var seq__7978_9726__$1 = temp__4092__auto___9725;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7978_9726__$1))
{var c__5632__auto___9727 = cljs.core.chunk_first.call(null,seq__7978_9726__$1);{
var G__9728 = cljs.core.chunk_rest.call(null,seq__7978_9726__$1);
var G__9729 = c__5632__auto___9727;
var G__9730 = cljs.core.count.call(null,c__5632__auto___9727);
var G__9731 = 0;
seq__7978_9716 = G__9728;
chunk__7979_9717 = G__9729;
count__7980_9718 = G__9730;
i__7981_9719 = G__9731;
continue;
}
} else
{var arg__6514__auto___9732 = cljs.core.first.call(null,seq__7978_9726__$1);a__6513__auto__.push(arg__6514__auto___9732);
{
var G__9733 = cljs.core.next.call(null,seq__7978_9726__$1);
var G__9734 = null;
var G__9735 = 0;
var G__9736 = 0;
seq__7978_9716 = G__9733;
chunk__7979_9717 = G__9734;
count__7980_9718 = G__9735;
i__7981_9719 = G__9736;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.li.apply(null,a__6513__auto__);
};
var li = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return li__delegate.call(this,args__6512__auto__);};
li.cljs$lang$maxFixedArity = 0;
li.cljs$lang$applyTo = (function (arglist__9737){
var args__6512__auto__ = cljs.core.seq(arglist__9737);
return li__delegate(args__6512__auto__);
});
li.cljs$core$IFn$_invoke$arity$variadic = li__delegate;
return li;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.link = (function() { 
var link__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__7986_9738 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__7987_9739 = null;var count__7988_9740 = 0;var i__7989_9741 = 0;while(true){
if((i__7989_9741 < count__7988_9740))
{var arg__6514__auto___9742 = cljs.core._nth.call(null,chunk__7987_9739,i__7989_9741);a__6513__auto__.push(arg__6514__auto___9742);
{
var G__9743 = seq__7986_9738;
var G__9744 = chunk__7987_9739;
var G__9745 = count__7988_9740;
var G__9746 = (i__7989_9741 + 1);
seq__7986_9738 = G__9743;
chunk__7987_9739 = G__9744;
count__7988_9740 = G__9745;
i__7989_9741 = G__9746;
continue;
}
} else
{var temp__4092__auto___9747 = cljs.core.seq.call(null,seq__7986_9738);if(temp__4092__auto___9747)
{var seq__7986_9748__$1 = temp__4092__auto___9747;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7986_9748__$1))
{var c__5632__auto___9749 = cljs.core.chunk_first.call(null,seq__7986_9748__$1);{
var G__9750 = cljs.core.chunk_rest.call(null,seq__7986_9748__$1);
var G__9751 = c__5632__auto___9749;
var G__9752 = cljs.core.count.call(null,c__5632__auto___9749);
var G__9753 = 0;
seq__7986_9738 = G__9750;
chunk__7987_9739 = G__9751;
count__7988_9740 = G__9752;
i__7989_9741 = G__9753;
continue;
}
} else
{var arg__6514__auto___9754 = cljs.core.first.call(null,seq__7986_9748__$1);a__6513__auto__.push(arg__6514__auto___9754);
{
var G__9755 = cljs.core.next.call(null,seq__7986_9748__$1);
var G__9756 = null;
var G__9757 = 0;
var G__9758 = 0;
seq__7986_9738 = G__9755;
chunk__7987_9739 = G__9756;
count__7988_9740 = G__9757;
i__7989_9741 = G__9758;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.link.apply(null,a__6513__auto__);
};
var link = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return link__delegate.call(this,args__6512__auto__);};
link.cljs$lang$maxFixedArity = 0;
link.cljs$lang$applyTo = (function (arglist__9759){
var args__6512__auto__ = cljs.core.seq(arglist__9759);
return link__delegate(args__6512__auto__);
});
link.cljs$core$IFn$_invoke$arity$variadic = link__delegate;
return link;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.main = (function() { 
var main__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__7994_9760 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__7995_9761 = null;var count__7996_9762 = 0;var i__7997_9763 = 0;while(true){
if((i__7997_9763 < count__7996_9762))
{var arg__6514__auto___9764 = cljs.core._nth.call(null,chunk__7995_9761,i__7997_9763);a__6513__auto__.push(arg__6514__auto___9764);
{
var G__9765 = seq__7994_9760;
var G__9766 = chunk__7995_9761;
var G__9767 = count__7996_9762;
var G__9768 = (i__7997_9763 + 1);
seq__7994_9760 = G__9765;
chunk__7995_9761 = G__9766;
count__7996_9762 = G__9767;
i__7997_9763 = G__9768;
continue;
}
} else
{var temp__4092__auto___9769 = cljs.core.seq.call(null,seq__7994_9760);if(temp__4092__auto___9769)
{var seq__7994_9770__$1 = temp__4092__auto___9769;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7994_9770__$1))
{var c__5632__auto___9771 = cljs.core.chunk_first.call(null,seq__7994_9770__$1);{
var G__9772 = cljs.core.chunk_rest.call(null,seq__7994_9770__$1);
var G__9773 = c__5632__auto___9771;
var G__9774 = cljs.core.count.call(null,c__5632__auto___9771);
var G__9775 = 0;
seq__7994_9760 = G__9772;
chunk__7995_9761 = G__9773;
count__7996_9762 = G__9774;
i__7997_9763 = G__9775;
continue;
}
} else
{var arg__6514__auto___9776 = cljs.core.first.call(null,seq__7994_9770__$1);a__6513__auto__.push(arg__6514__auto___9776);
{
var G__9777 = cljs.core.next.call(null,seq__7994_9770__$1);
var G__9778 = null;
var G__9779 = 0;
var G__9780 = 0;
seq__7994_9760 = G__9777;
chunk__7995_9761 = G__9778;
count__7996_9762 = G__9779;
i__7997_9763 = G__9780;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.main.apply(null,a__6513__auto__);
};
var main = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return main__delegate.call(this,args__6512__auto__);};
main.cljs$lang$maxFixedArity = 0;
main.cljs$lang$applyTo = (function (arglist__9781){
var args__6512__auto__ = cljs.core.seq(arglist__9781);
return main__delegate(args__6512__auto__);
});
main.cljs$core$IFn$_invoke$arity$variadic = main__delegate;
return main;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.map = (function() { 
var map__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__8002_9782 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__8003_9783 = null;var count__8004_9784 = 0;var i__8005_9785 = 0;while(true){
if((i__8005_9785 < count__8004_9784))
{var arg__6514__auto___9786 = cljs.core._nth.call(null,chunk__8003_9783,i__8005_9785);a__6513__auto__.push(arg__6514__auto___9786);
{
var G__9787 = seq__8002_9782;
var G__9788 = chunk__8003_9783;
var G__9789 = count__8004_9784;
var G__9790 = (i__8005_9785 + 1);
seq__8002_9782 = G__9787;
chunk__8003_9783 = G__9788;
count__8004_9784 = G__9789;
i__8005_9785 = G__9790;
continue;
}
} else
{var temp__4092__auto___9791 = cljs.core.seq.call(null,seq__8002_9782);if(temp__4092__auto___9791)
{var seq__8002_9792__$1 = temp__4092__auto___9791;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8002_9792__$1))
{var c__5632__auto___9793 = cljs.core.chunk_first.call(null,seq__8002_9792__$1);{
var G__9794 = cljs.core.chunk_rest.call(null,seq__8002_9792__$1);
var G__9795 = c__5632__auto___9793;
var G__9796 = cljs.core.count.call(null,c__5632__auto___9793);
var G__9797 = 0;
seq__8002_9782 = G__9794;
chunk__8003_9783 = G__9795;
count__8004_9784 = G__9796;
i__8005_9785 = G__9797;
continue;
}
} else
{var arg__6514__auto___9798 = cljs.core.first.call(null,seq__8002_9792__$1);a__6513__auto__.push(arg__6514__auto___9798);
{
var G__9799 = cljs.core.next.call(null,seq__8002_9792__$1);
var G__9800 = null;
var G__9801 = 0;
var G__9802 = 0;
seq__8002_9782 = G__9799;
chunk__8003_9783 = G__9800;
count__8004_9784 = G__9801;
i__8005_9785 = G__9802;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.map.apply(null,a__6513__auto__);
};
var map = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return map__delegate.call(this,args__6512__auto__);};
map.cljs$lang$maxFixedArity = 0;
map.cljs$lang$applyTo = (function (arglist__9803){
var args__6512__auto__ = cljs.core.seq(arglist__9803);
return map__delegate(args__6512__auto__);
});
map.cljs$core$IFn$_invoke$arity$variadic = map__delegate;
return map;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.mark = (function() { 
var mark__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__8010_9804 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__8011_9805 = null;var count__8012_9806 = 0;var i__8013_9807 = 0;while(true){
if((i__8013_9807 < count__8012_9806))
{var arg__6514__auto___9808 = cljs.core._nth.call(null,chunk__8011_9805,i__8013_9807);a__6513__auto__.push(arg__6514__auto___9808);
{
var G__9809 = seq__8010_9804;
var G__9810 = chunk__8011_9805;
var G__9811 = count__8012_9806;
var G__9812 = (i__8013_9807 + 1);
seq__8010_9804 = G__9809;
chunk__8011_9805 = G__9810;
count__8012_9806 = G__9811;
i__8013_9807 = G__9812;
continue;
}
} else
{var temp__4092__auto___9813 = cljs.core.seq.call(null,seq__8010_9804);if(temp__4092__auto___9813)
{var seq__8010_9814__$1 = temp__4092__auto___9813;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8010_9814__$1))
{var c__5632__auto___9815 = cljs.core.chunk_first.call(null,seq__8010_9814__$1);{
var G__9816 = cljs.core.chunk_rest.call(null,seq__8010_9814__$1);
var G__9817 = c__5632__auto___9815;
var G__9818 = cljs.core.count.call(null,c__5632__auto___9815);
var G__9819 = 0;
seq__8010_9804 = G__9816;
chunk__8011_9805 = G__9817;
count__8012_9806 = G__9818;
i__8013_9807 = G__9819;
continue;
}
} else
{var arg__6514__auto___9820 = cljs.core.first.call(null,seq__8010_9814__$1);a__6513__auto__.push(arg__6514__auto___9820);
{
var G__9821 = cljs.core.next.call(null,seq__8010_9814__$1);
var G__9822 = null;
var G__9823 = 0;
var G__9824 = 0;
seq__8010_9804 = G__9821;
chunk__8011_9805 = G__9822;
count__8012_9806 = G__9823;
i__8013_9807 = G__9824;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.mark.apply(null,a__6513__auto__);
};
var mark = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return mark__delegate.call(this,args__6512__auto__);};
mark.cljs$lang$maxFixedArity = 0;
mark.cljs$lang$applyTo = (function (arglist__9825){
var args__6512__auto__ = cljs.core.seq(arglist__9825);
return mark__delegate(args__6512__auto__);
});
mark.cljs$core$IFn$_invoke$arity$variadic = mark__delegate;
return mark;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.menu = (function() { 
var menu__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__8018_9826 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__8019_9827 = null;var count__8020_9828 = 0;var i__8021_9829 = 0;while(true){
if((i__8021_9829 < count__8020_9828))
{var arg__6514__auto___9830 = cljs.core._nth.call(null,chunk__8019_9827,i__8021_9829);a__6513__auto__.push(arg__6514__auto___9830);
{
var G__9831 = seq__8018_9826;
var G__9832 = chunk__8019_9827;
var G__9833 = count__8020_9828;
var G__9834 = (i__8021_9829 + 1);
seq__8018_9826 = G__9831;
chunk__8019_9827 = G__9832;
count__8020_9828 = G__9833;
i__8021_9829 = G__9834;
continue;
}
} else
{var temp__4092__auto___9835 = cljs.core.seq.call(null,seq__8018_9826);if(temp__4092__auto___9835)
{var seq__8018_9836__$1 = temp__4092__auto___9835;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8018_9836__$1))
{var c__5632__auto___9837 = cljs.core.chunk_first.call(null,seq__8018_9836__$1);{
var G__9838 = cljs.core.chunk_rest.call(null,seq__8018_9836__$1);
var G__9839 = c__5632__auto___9837;
var G__9840 = cljs.core.count.call(null,c__5632__auto___9837);
var G__9841 = 0;
seq__8018_9826 = G__9838;
chunk__8019_9827 = G__9839;
count__8020_9828 = G__9840;
i__8021_9829 = G__9841;
continue;
}
} else
{var arg__6514__auto___9842 = cljs.core.first.call(null,seq__8018_9836__$1);a__6513__auto__.push(arg__6514__auto___9842);
{
var G__9843 = cljs.core.next.call(null,seq__8018_9836__$1);
var G__9844 = null;
var G__9845 = 0;
var G__9846 = 0;
seq__8018_9826 = G__9843;
chunk__8019_9827 = G__9844;
count__8020_9828 = G__9845;
i__8021_9829 = G__9846;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.menu.apply(null,a__6513__auto__);
};
var menu = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return menu__delegate.call(this,args__6512__auto__);};
menu.cljs$lang$maxFixedArity = 0;
menu.cljs$lang$applyTo = (function (arglist__9847){
var args__6512__auto__ = cljs.core.seq(arglist__9847);
return menu__delegate(args__6512__auto__);
});
menu.cljs$core$IFn$_invoke$arity$variadic = menu__delegate;
return menu;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.menuitem = (function() { 
var menuitem__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__8026_9848 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__8027_9849 = null;var count__8028_9850 = 0;var i__8029_9851 = 0;while(true){
if((i__8029_9851 < count__8028_9850))
{var arg__6514__auto___9852 = cljs.core._nth.call(null,chunk__8027_9849,i__8029_9851);a__6513__auto__.push(arg__6514__auto___9852);
{
var G__9853 = seq__8026_9848;
var G__9854 = chunk__8027_9849;
var G__9855 = count__8028_9850;
var G__9856 = (i__8029_9851 + 1);
seq__8026_9848 = G__9853;
chunk__8027_9849 = G__9854;
count__8028_9850 = G__9855;
i__8029_9851 = G__9856;
continue;
}
} else
{var temp__4092__auto___9857 = cljs.core.seq.call(null,seq__8026_9848);if(temp__4092__auto___9857)
{var seq__8026_9858__$1 = temp__4092__auto___9857;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8026_9858__$1))
{var c__5632__auto___9859 = cljs.core.chunk_first.call(null,seq__8026_9858__$1);{
var G__9860 = cljs.core.chunk_rest.call(null,seq__8026_9858__$1);
var G__9861 = c__5632__auto___9859;
var G__9862 = cljs.core.count.call(null,c__5632__auto___9859);
var G__9863 = 0;
seq__8026_9848 = G__9860;
chunk__8027_9849 = G__9861;
count__8028_9850 = G__9862;
i__8029_9851 = G__9863;
continue;
}
} else
{var arg__6514__auto___9864 = cljs.core.first.call(null,seq__8026_9858__$1);a__6513__auto__.push(arg__6514__auto___9864);
{
var G__9865 = cljs.core.next.call(null,seq__8026_9858__$1);
var G__9866 = null;
var G__9867 = 0;
var G__9868 = 0;
seq__8026_9848 = G__9865;
chunk__8027_9849 = G__9866;
count__8028_9850 = G__9867;
i__8029_9851 = G__9868;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.menuitem.apply(null,a__6513__auto__);
};
var menuitem = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return menuitem__delegate.call(this,args__6512__auto__);};
menuitem.cljs$lang$maxFixedArity = 0;
menuitem.cljs$lang$applyTo = (function (arglist__9869){
var args__6512__auto__ = cljs.core.seq(arglist__9869);
return menuitem__delegate(args__6512__auto__);
});
menuitem.cljs$core$IFn$_invoke$arity$variadic = menuitem__delegate;
return menuitem;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.meta = (function() { 
var meta__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__8034_9870 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__8035_9871 = null;var count__8036_9872 = 0;var i__8037_9873 = 0;while(true){
if((i__8037_9873 < count__8036_9872))
{var arg__6514__auto___9874 = cljs.core._nth.call(null,chunk__8035_9871,i__8037_9873);a__6513__auto__.push(arg__6514__auto___9874);
{
var G__9875 = seq__8034_9870;
var G__9876 = chunk__8035_9871;
var G__9877 = count__8036_9872;
var G__9878 = (i__8037_9873 + 1);
seq__8034_9870 = G__9875;
chunk__8035_9871 = G__9876;
count__8036_9872 = G__9877;
i__8037_9873 = G__9878;
continue;
}
} else
{var temp__4092__auto___9879 = cljs.core.seq.call(null,seq__8034_9870);if(temp__4092__auto___9879)
{var seq__8034_9880__$1 = temp__4092__auto___9879;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8034_9880__$1))
{var c__5632__auto___9881 = cljs.core.chunk_first.call(null,seq__8034_9880__$1);{
var G__9882 = cljs.core.chunk_rest.call(null,seq__8034_9880__$1);
var G__9883 = c__5632__auto___9881;
var G__9884 = cljs.core.count.call(null,c__5632__auto___9881);
var G__9885 = 0;
seq__8034_9870 = G__9882;
chunk__8035_9871 = G__9883;
count__8036_9872 = G__9884;
i__8037_9873 = G__9885;
continue;
}
} else
{var arg__6514__auto___9886 = cljs.core.first.call(null,seq__8034_9880__$1);a__6513__auto__.push(arg__6514__auto___9886);
{
var G__9887 = cljs.core.next.call(null,seq__8034_9880__$1);
var G__9888 = null;
var G__9889 = 0;
var G__9890 = 0;
seq__8034_9870 = G__9887;
chunk__8035_9871 = G__9888;
count__8036_9872 = G__9889;
i__8037_9873 = G__9890;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.meta.apply(null,a__6513__auto__);
};
var meta = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return meta__delegate.call(this,args__6512__auto__);};
meta.cljs$lang$maxFixedArity = 0;
meta.cljs$lang$applyTo = (function (arglist__9891){
var args__6512__auto__ = cljs.core.seq(arglist__9891);
return meta__delegate(args__6512__auto__);
});
meta.cljs$core$IFn$_invoke$arity$variadic = meta__delegate;
return meta;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.meter = (function() { 
var meter__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__8042_9892 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__8043_9893 = null;var count__8044_9894 = 0;var i__8045_9895 = 0;while(true){
if((i__8045_9895 < count__8044_9894))
{var arg__6514__auto___9896 = cljs.core._nth.call(null,chunk__8043_9893,i__8045_9895);a__6513__auto__.push(arg__6514__auto___9896);
{
var G__9897 = seq__8042_9892;
var G__9898 = chunk__8043_9893;
var G__9899 = count__8044_9894;
var G__9900 = (i__8045_9895 + 1);
seq__8042_9892 = G__9897;
chunk__8043_9893 = G__9898;
count__8044_9894 = G__9899;
i__8045_9895 = G__9900;
continue;
}
} else
{var temp__4092__auto___9901 = cljs.core.seq.call(null,seq__8042_9892);if(temp__4092__auto___9901)
{var seq__8042_9902__$1 = temp__4092__auto___9901;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8042_9902__$1))
{var c__5632__auto___9903 = cljs.core.chunk_first.call(null,seq__8042_9902__$1);{
var G__9904 = cljs.core.chunk_rest.call(null,seq__8042_9902__$1);
var G__9905 = c__5632__auto___9903;
var G__9906 = cljs.core.count.call(null,c__5632__auto___9903);
var G__9907 = 0;
seq__8042_9892 = G__9904;
chunk__8043_9893 = G__9905;
count__8044_9894 = G__9906;
i__8045_9895 = G__9907;
continue;
}
} else
{var arg__6514__auto___9908 = cljs.core.first.call(null,seq__8042_9902__$1);a__6513__auto__.push(arg__6514__auto___9908);
{
var G__9909 = cljs.core.next.call(null,seq__8042_9902__$1);
var G__9910 = null;
var G__9911 = 0;
var G__9912 = 0;
seq__8042_9892 = G__9909;
chunk__8043_9893 = G__9910;
count__8044_9894 = G__9911;
i__8045_9895 = G__9912;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.meter.apply(null,a__6513__auto__);
};
var meter = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return meter__delegate.call(this,args__6512__auto__);};
meter.cljs$lang$maxFixedArity = 0;
meter.cljs$lang$applyTo = (function (arglist__9913){
var args__6512__auto__ = cljs.core.seq(arglist__9913);
return meter__delegate(args__6512__auto__);
});
meter.cljs$core$IFn$_invoke$arity$variadic = meter__delegate;
return meter;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.nav = (function() { 
var nav__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__8050_9914 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__8051_9915 = null;var count__8052_9916 = 0;var i__8053_9917 = 0;while(true){
if((i__8053_9917 < count__8052_9916))
{var arg__6514__auto___9918 = cljs.core._nth.call(null,chunk__8051_9915,i__8053_9917);a__6513__auto__.push(arg__6514__auto___9918);
{
var G__9919 = seq__8050_9914;
var G__9920 = chunk__8051_9915;
var G__9921 = count__8052_9916;
var G__9922 = (i__8053_9917 + 1);
seq__8050_9914 = G__9919;
chunk__8051_9915 = G__9920;
count__8052_9916 = G__9921;
i__8053_9917 = G__9922;
continue;
}
} else
{var temp__4092__auto___9923 = cljs.core.seq.call(null,seq__8050_9914);if(temp__4092__auto___9923)
{var seq__8050_9924__$1 = temp__4092__auto___9923;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8050_9924__$1))
{var c__5632__auto___9925 = cljs.core.chunk_first.call(null,seq__8050_9924__$1);{
var G__9926 = cljs.core.chunk_rest.call(null,seq__8050_9924__$1);
var G__9927 = c__5632__auto___9925;
var G__9928 = cljs.core.count.call(null,c__5632__auto___9925);
var G__9929 = 0;
seq__8050_9914 = G__9926;
chunk__8051_9915 = G__9927;
count__8052_9916 = G__9928;
i__8053_9917 = G__9929;
continue;
}
} else
{var arg__6514__auto___9930 = cljs.core.first.call(null,seq__8050_9924__$1);a__6513__auto__.push(arg__6514__auto___9930);
{
var G__9931 = cljs.core.next.call(null,seq__8050_9924__$1);
var G__9932 = null;
var G__9933 = 0;
var G__9934 = 0;
seq__8050_9914 = G__9931;
chunk__8051_9915 = G__9932;
count__8052_9916 = G__9933;
i__8053_9917 = G__9934;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.nav.apply(null,a__6513__auto__);
};
var nav = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return nav__delegate.call(this,args__6512__auto__);};
nav.cljs$lang$maxFixedArity = 0;
nav.cljs$lang$applyTo = (function (arglist__9935){
var args__6512__auto__ = cljs.core.seq(arglist__9935);
return nav__delegate(args__6512__auto__);
});
nav.cljs$core$IFn$_invoke$arity$variadic = nav__delegate;
return nav;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.noscript = (function() { 
var noscript__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__8058_9936 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__8059_9937 = null;var count__8060_9938 = 0;var i__8061_9939 = 0;while(true){
if((i__8061_9939 < count__8060_9938))
{var arg__6514__auto___9940 = cljs.core._nth.call(null,chunk__8059_9937,i__8061_9939);a__6513__auto__.push(arg__6514__auto___9940);
{
var G__9941 = seq__8058_9936;
var G__9942 = chunk__8059_9937;
var G__9943 = count__8060_9938;
var G__9944 = (i__8061_9939 + 1);
seq__8058_9936 = G__9941;
chunk__8059_9937 = G__9942;
count__8060_9938 = G__9943;
i__8061_9939 = G__9944;
continue;
}
} else
{var temp__4092__auto___9945 = cljs.core.seq.call(null,seq__8058_9936);if(temp__4092__auto___9945)
{var seq__8058_9946__$1 = temp__4092__auto___9945;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8058_9946__$1))
{var c__5632__auto___9947 = cljs.core.chunk_first.call(null,seq__8058_9946__$1);{
var G__9948 = cljs.core.chunk_rest.call(null,seq__8058_9946__$1);
var G__9949 = c__5632__auto___9947;
var G__9950 = cljs.core.count.call(null,c__5632__auto___9947);
var G__9951 = 0;
seq__8058_9936 = G__9948;
chunk__8059_9937 = G__9949;
count__8060_9938 = G__9950;
i__8061_9939 = G__9951;
continue;
}
} else
{var arg__6514__auto___9952 = cljs.core.first.call(null,seq__8058_9946__$1);a__6513__auto__.push(arg__6514__auto___9952);
{
var G__9953 = cljs.core.next.call(null,seq__8058_9946__$1);
var G__9954 = null;
var G__9955 = 0;
var G__9956 = 0;
seq__8058_9936 = G__9953;
chunk__8059_9937 = G__9954;
count__8060_9938 = G__9955;
i__8061_9939 = G__9956;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.noscript.apply(null,a__6513__auto__);
};
var noscript = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return noscript__delegate.call(this,args__6512__auto__);};
noscript.cljs$lang$maxFixedArity = 0;
noscript.cljs$lang$applyTo = (function (arglist__9957){
var args__6512__auto__ = cljs.core.seq(arglist__9957);
return noscript__delegate(args__6512__auto__);
});
noscript.cljs$core$IFn$_invoke$arity$variadic = noscript__delegate;
return noscript;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.object = (function() { 
var object__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__8066_9958 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__8067_9959 = null;var count__8068_9960 = 0;var i__8069_9961 = 0;while(true){
if((i__8069_9961 < count__8068_9960))
{var arg__6514__auto___9962 = cljs.core._nth.call(null,chunk__8067_9959,i__8069_9961);a__6513__auto__.push(arg__6514__auto___9962);
{
var G__9963 = seq__8066_9958;
var G__9964 = chunk__8067_9959;
var G__9965 = count__8068_9960;
var G__9966 = (i__8069_9961 + 1);
seq__8066_9958 = G__9963;
chunk__8067_9959 = G__9964;
count__8068_9960 = G__9965;
i__8069_9961 = G__9966;
continue;
}
} else
{var temp__4092__auto___9967 = cljs.core.seq.call(null,seq__8066_9958);if(temp__4092__auto___9967)
{var seq__8066_9968__$1 = temp__4092__auto___9967;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8066_9968__$1))
{var c__5632__auto___9969 = cljs.core.chunk_first.call(null,seq__8066_9968__$1);{
var G__9970 = cljs.core.chunk_rest.call(null,seq__8066_9968__$1);
var G__9971 = c__5632__auto___9969;
var G__9972 = cljs.core.count.call(null,c__5632__auto___9969);
var G__9973 = 0;
seq__8066_9958 = G__9970;
chunk__8067_9959 = G__9971;
count__8068_9960 = G__9972;
i__8069_9961 = G__9973;
continue;
}
} else
{var arg__6514__auto___9974 = cljs.core.first.call(null,seq__8066_9968__$1);a__6513__auto__.push(arg__6514__auto___9974);
{
var G__9975 = cljs.core.next.call(null,seq__8066_9968__$1);
var G__9976 = null;
var G__9977 = 0;
var G__9978 = 0;
seq__8066_9958 = G__9975;
chunk__8067_9959 = G__9976;
count__8068_9960 = G__9977;
i__8069_9961 = G__9978;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.object.apply(null,a__6513__auto__);
};
var object = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return object__delegate.call(this,args__6512__auto__);};
object.cljs$lang$maxFixedArity = 0;
object.cljs$lang$applyTo = (function (arglist__9979){
var args__6512__auto__ = cljs.core.seq(arglist__9979);
return object__delegate(args__6512__auto__);
});
object.cljs$core$IFn$_invoke$arity$variadic = object__delegate;
return object;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.ol = (function() { 
var ol__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__8074_9980 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__8075_9981 = null;var count__8076_9982 = 0;var i__8077_9983 = 0;while(true){
if((i__8077_9983 < count__8076_9982))
{var arg__6514__auto___9984 = cljs.core._nth.call(null,chunk__8075_9981,i__8077_9983);a__6513__auto__.push(arg__6514__auto___9984);
{
var G__9985 = seq__8074_9980;
var G__9986 = chunk__8075_9981;
var G__9987 = count__8076_9982;
var G__9988 = (i__8077_9983 + 1);
seq__8074_9980 = G__9985;
chunk__8075_9981 = G__9986;
count__8076_9982 = G__9987;
i__8077_9983 = G__9988;
continue;
}
} else
{var temp__4092__auto___9989 = cljs.core.seq.call(null,seq__8074_9980);if(temp__4092__auto___9989)
{var seq__8074_9990__$1 = temp__4092__auto___9989;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8074_9990__$1))
{var c__5632__auto___9991 = cljs.core.chunk_first.call(null,seq__8074_9990__$1);{
var G__9992 = cljs.core.chunk_rest.call(null,seq__8074_9990__$1);
var G__9993 = c__5632__auto___9991;
var G__9994 = cljs.core.count.call(null,c__5632__auto___9991);
var G__9995 = 0;
seq__8074_9980 = G__9992;
chunk__8075_9981 = G__9993;
count__8076_9982 = G__9994;
i__8077_9983 = G__9995;
continue;
}
} else
{var arg__6514__auto___9996 = cljs.core.first.call(null,seq__8074_9990__$1);a__6513__auto__.push(arg__6514__auto___9996);
{
var G__9997 = cljs.core.next.call(null,seq__8074_9990__$1);
var G__9998 = null;
var G__9999 = 0;
var G__10000 = 0;
seq__8074_9980 = G__9997;
chunk__8075_9981 = G__9998;
count__8076_9982 = G__9999;
i__8077_9983 = G__10000;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.ol.apply(null,a__6513__auto__);
};
var ol = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ol__delegate.call(this,args__6512__auto__);};
ol.cljs$lang$maxFixedArity = 0;
ol.cljs$lang$applyTo = (function (arglist__10001){
var args__6512__auto__ = cljs.core.seq(arglist__10001);
return ol__delegate(args__6512__auto__);
});
ol.cljs$core$IFn$_invoke$arity$variadic = ol__delegate;
return ol;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.optgroup = (function() { 
var optgroup__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__8082_10002 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__8083_10003 = null;var count__8084_10004 = 0;var i__8085_10005 = 0;while(true){
if((i__8085_10005 < count__8084_10004))
{var arg__6514__auto___10006 = cljs.core._nth.call(null,chunk__8083_10003,i__8085_10005);a__6513__auto__.push(arg__6514__auto___10006);
{
var G__10007 = seq__8082_10002;
var G__10008 = chunk__8083_10003;
var G__10009 = count__8084_10004;
var G__10010 = (i__8085_10005 + 1);
seq__8082_10002 = G__10007;
chunk__8083_10003 = G__10008;
count__8084_10004 = G__10009;
i__8085_10005 = G__10010;
continue;
}
} else
{var temp__4092__auto___10011 = cljs.core.seq.call(null,seq__8082_10002);if(temp__4092__auto___10011)
{var seq__8082_10012__$1 = temp__4092__auto___10011;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8082_10012__$1))
{var c__5632__auto___10013 = cljs.core.chunk_first.call(null,seq__8082_10012__$1);{
var G__10014 = cljs.core.chunk_rest.call(null,seq__8082_10012__$1);
var G__10015 = c__5632__auto___10013;
var G__10016 = cljs.core.count.call(null,c__5632__auto___10013);
var G__10017 = 0;
seq__8082_10002 = G__10014;
chunk__8083_10003 = G__10015;
count__8084_10004 = G__10016;
i__8085_10005 = G__10017;
continue;
}
} else
{var arg__6514__auto___10018 = cljs.core.first.call(null,seq__8082_10012__$1);a__6513__auto__.push(arg__6514__auto___10018);
{
var G__10019 = cljs.core.next.call(null,seq__8082_10012__$1);
var G__10020 = null;
var G__10021 = 0;
var G__10022 = 0;
seq__8082_10002 = G__10019;
chunk__8083_10003 = G__10020;
count__8084_10004 = G__10021;
i__8085_10005 = G__10022;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.optgroup.apply(null,a__6513__auto__);
};
var optgroup = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return optgroup__delegate.call(this,args__6512__auto__);};
optgroup.cljs$lang$maxFixedArity = 0;
optgroup.cljs$lang$applyTo = (function (arglist__10023){
var args__6512__auto__ = cljs.core.seq(arglist__10023);
return optgroup__delegate(args__6512__auto__);
});
optgroup.cljs$core$IFn$_invoke$arity$variadic = optgroup__delegate;
return optgroup;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.option = (function() { 
var option__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__8090_10024 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__8091_10025 = null;var count__8092_10026 = 0;var i__8093_10027 = 0;while(true){
if((i__8093_10027 < count__8092_10026))
{var arg__6514__auto___10028 = cljs.core._nth.call(null,chunk__8091_10025,i__8093_10027);a__6513__auto__.push(arg__6514__auto___10028);
{
var G__10029 = seq__8090_10024;
var G__10030 = chunk__8091_10025;
var G__10031 = count__8092_10026;
var G__10032 = (i__8093_10027 + 1);
seq__8090_10024 = G__10029;
chunk__8091_10025 = G__10030;
count__8092_10026 = G__10031;
i__8093_10027 = G__10032;
continue;
}
} else
{var temp__4092__auto___10033 = cljs.core.seq.call(null,seq__8090_10024);if(temp__4092__auto___10033)
{var seq__8090_10034__$1 = temp__4092__auto___10033;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8090_10034__$1))
{var c__5632__auto___10035 = cljs.core.chunk_first.call(null,seq__8090_10034__$1);{
var G__10036 = cljs.core.chunk_rest.call(null,seq__8090_10034__$1);
var G__10037 = c__5632__auto___10035;
var G__10038 = cljs.core.count.call(null,c__5632__auto___10035);
var G__10039 = 0;
seq__8090_10024 = G__10036;
chunk__8091_10025 = G__10037;
count__8092_10026 = G__10038;
i__8093_10027 = G__10039;
continue;
}
} else
{var arg__6514__auto___10040 = cljs.core.first.call(null,seq__8090_10034__$1);a__6513__auto__.push(arg__6514__auto___10040);
{
var G__10041 = cljs.core.next.call(null,seq__8090_10034__$1);
var G__10042 = null;
var G__10043 = 0;
var G__10044 = 0;
seq__8090_10024 = G__10041;
chunk__8091_10025 = G__10042;
count__8092_10026 = G__10043;
i__8093_10027 = G__10044;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.option.apply(null,a__6513__auto__);
};
var option = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return option__delegate.call(this,args__6512__auto__);};
option.cljs$lang$maxFixedArity = 0;
option.cljs$lang$applyTo = (function (arglist__10045){
var args__6512__auto__ = cljs.core.seq(arglist__10045);
return option__delegate(args__6512__auto__);
});
option.cljs$core$IFn$_invoke$arity$variadic = option__delegate;
return option;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.output = (function() { 
var output__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__8098_10046 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__8099_10047 = null;var count__8100_10048 = 0;var i__8101_10049 = 0;while(true){
if((i__8101_10049 < count__8100_10048))
{var arg__6514__auto___10050 = cljs.core._nth.call(null,chunk__8099_10047,i__8101_10049);a__6513__auto__.push(arg__6514__auto___10050);
{
var G__10051 = seq__8098_10046;
var G__10052 = chunk__8099_10047;
var G__10053 = count__8100_10048;
var G__10054 = (i__8101_10049 + 1);
seq__8098_10046 = G__10051;
chunk__8099_10047 = G__10052;
count__8100_10048 = G__10053;
i__8101_10049 = G__10054;
continue;
}
} else
{var temp__4092__auto___10055 = cljs.core.seq.call(null,seq__8098_10046);if(temp__4092__auto___10055)
{var seq__8098_10056__$1 = temp__4092__auto___10055;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8098_10056__$1))
{var c__5632__auto___10057 = cljs.core.chunk_first.call(null,seq__8098_10056__$1);{
var G__10058 = cljs.core.chunk_rest.call(null,seq__8098_10056__$1);
var G__10059 = c__5632__auto___10057;
var G__10060 = cljs.core.count.call(null,c__5632__auto___10057);
var G__10061 = 0;
seq__8098_10046 = G__10058;
chunk__8099_10047 = G__10059;
count__8100_10048 = G__10060;
i__8101_10049 = G__10061;
continue;
}
} else
{var arg__6514__auto___10062 = cljs.core.first.call(null,seq__8098_10056__$1);a__6513__auto__.push(arg__6514__auto___10062);
{
var G__10063 = cljs.core.next.call(null,seq__8098_10056__$1);
var G__10064 = null;
var G__10065 = 0;
var G__10066 = 0;
seq__8098_10046 = G__10063;
chunk__8099_10047 = G__10064;
count__8100_10048 = G__10065;
i__8101_10049 = G__10066;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.output.apply(null,a__6513__auto__);
};
var output = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return output__delegate.call(this,args__6512__auto__);};
output.cljs$lang$maxFixedArity = 0;
output.cljs$lang$applyTo = (function (arglist__10067){
var args__6512__auto__ = cljs.core.seq(arglist__10067);
return output__delegate(args__6512__auto__);
});
output.cljs$core$IFn$_invoke$arity$variadic = output__delegate;
return output;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.p = (function() { 
var p__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__8106_10068 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__8107_10069 = null;var count__8108_10070 = 0;var i__8109_10071 = 0;while(true){
if((i__8109_10071 < count__8108_10070))
{var arg__6514__auto___10072 = cljs.core._nth.call(null,chunk__8107_10069,i__8109_10071);a__6513__auto__.push(arg__6514__auto___10072);
{
var G__10073 = seq__8106_10068;
var G__10074 = chunk__8107_10069;
var G__10075 = count__8108_10070;
var G__10076 = (i__8109_10071 + 1);
seq__8106_10068 = G__10073;
chunk__8107_10069 = G__10074;
count__8108_10070 = G__10075;
i__8109_10071 = G__10076;
continue;
}
} else
{var temp__4092__auto___10077 = cljs.core.seq.call(null,seq__8106_10068);if(temp__4092__auto___10077)
{var seq__8106_10078__$1 = temp__4092__auto___10077;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8106_10078__$1))
{var c__5632__auto___10079 = cljs.core.chunk_first.call(null,seq__8106_10078__$1);{
var G__10080 = cljs.core.chunk_rest.call(null,seq__8106_10078__$1);
var G__10081 = c__5632__auto___10079;
var G__10082 = cljs.core.count.call(null,c__5632__auto___10079);
var G__10083 = 0;
seq__8106_10068 = G__10080;
chunk__8107_10069 = G__10081;
count__8108_10070 = G__10082;
i__8109_10071 = G__10083;
continue;
}
} else
{var arg__6514__auto___10084 = cljs.core.first.call(null,seq__8106_10078__$1);a__6513__auto__.push(arg__6514__auto___10084);
{
var G__10085 = cljs.core.next.call(null,seq__8106_10078__$1);
var G__10086 = null;
var G__10087 = 0;
var G__10088 = 0;
seq__8106_10068 = G__10085;
chunk__8107_10069 = G__10086;
count__8108_10070 = G__10087;
i__8109_10071 = G__10088;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.p.apply(null,a__6513__auto__);
};
var p = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return p__delegate.call(this,args__6512__auto__);};
p.cljs$lang$maxFixedArity = 0;
p.cljs$lang$applyTo = (function (arglist__10089){
var args__6512__auto__ = cljs.core.seq(arglist__10089);
return p__delegate(args__6512__auto__);
});
p.cljs$core$IFn$_invoke$arity$variadic = p__delegate;
return p;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.param = (function() { 
var param__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__8114_10090 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__8115_10091 = null;var count__8116_10092 = 0;var i__8117_10093 = 0;while(true){
if((i__8117_10093 < count__8116_10092))
{var arg__6514__auto___10094 = cljs.core._nth.call(null,chunk__8115_10091,i__8117_10093);a__6513__auto__.push(arg__6514__auto___10094);
{
var G__10095 = seq__8114_10090;
var G__10096 = chunk__8115_10091;
var G__10097 = count__8116_10092;
var G__10098 = (i__8117_10093 + 1);
seq__8114_10090 = G__10095;
chunk__8115_10091 = G__10096;
count__8116_10092 = G__10097;
i__8117_10093 = G__10098;
continue;
}
} else
{var temp__4092__auto___10099 = cljs.core.seq.call(null,seq__8114_10090);if(temp__4092__auto___10099)
{var seq__8114_10100__$1 = temp__4092__auto___10099;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8114_10100__$1))
{var c__5632__auto___10101 = cljs.core.chunk_first.call(null,seq__8114_10100__$1);{
var G__10102 = cljs.core.chunk_rest.call(null,seq__8114_10100__$1);
var G__10103 = c__5632__auto___10101;
var G__10104 = cljs.core.count.call(null,c__5632__auto___10101);
var G__10105 = 0;
seq__8114_10090 = G__10102;
chunk__8115_10091 = G__10103;
count__8116_10092 = G__10104;
i__8117_10093 = G__10105;
continue;
}
} else
{var arg__6514__auto___10106 = cljs.core.first.call(null,seq__8114_10100__$1);a__6513__auto__.push(arg__6514__auto___10106);
{
var G__10107 = cljs.core.next.call(null,seq__8114_10100__$1);
var G__10108 = null;
var G__10109 = 0;
var G__10110 = 0;
seq__8114_10090 = G__10107;
chunk__8115_10091 = G__10108;
count__8116_10092 = G__10109;
i__8117_10093 = G__10110;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.param.apply(null,a__6513__auto__);
};
var param = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return param__delegate.call(this,args__6512__auto__);};
param.cljs$lang$maxFixedArity = 0;
param.cljs$lang$applyTo = (function (arglist__10111){
var args__6512__auto__ = cljs.core.seq(arglist__10111);
return param__delegate(args__6512__auto__);
});
param.cljs$core$IFn$_invoke$arity$variadic = param__delegate;
return param;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.pre = (function() { 
var pre__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__8122_10112 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__8123_10113 = null;var count__8124_10114 = 0;var i__8125_10115 = 0;while(true){
if((i__8125_10115 < count__8124_10114))
{var arg__6514__auto___10116 = cljs.core._nth.call(null,chunk__8123_10113,i__8125_10115);a__6513__auto__.push(arg__6514__auto___10116);
{
var G__10117 = seq__8122_10112;
var G__10118 = chunk__8123_10113;
var G__10119 = count__8124_10114;
var G__10120 = (i__8125_10115 + 1);
seq__8122_10112 = G__10117;
chunk__8123_10113 = G__10118;
count__8124_10114 = G__10119;
i__8125_10115 = G__10120;
continue;
}
} else
{var temp__4092__auto___10121 = cljs.core.seq.call(null,seq__8122_10112);if(temp__4092__auto___10121)
{var seq__8122_10122__$1 = temp__4092__auto___10121;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8122_10122__$1))
{var c__5632__auto___10123 = cljs.core.chunk_first.call(null,seq__8122_10122__$1);{
var G__10124 = cljs.core.chunk_rest.call(null,seq__8122_10122__$1);
var G__10125 = c__5632__auto___10123;
var G__10126 = cljs.core.count.call(null,c__5632__auto___10123);
var G__10127 = 0;
seq__8122_10112 = G__10124;
chunk__8123_10113 = G__10125;
count__8124_10114 = G__10126;
i__8125_10115 = G__10127;
continue;
}
} else
{var arg__6514__auto___10128 = cljs.core.first.call(null,seq__8122_10122__$1);a__6513__auto__.push(arg__6514__auto___10128);
{
var G__10129 = cljs.core.next.call(null,seq__8122_10122__$1);
var G__10130 = null;
var G__10131 = 0;
var G__10132 = 0;
seq__8122_10112 = G__10129;
chunk__8123_10113 = G__10130;
count__8124_10114 = G__10131;
i__8125_10115 = G__10132;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.pre.apply(null,a__6513__auto__);
};
var pre = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return pre__delegate.call(this,args__6512__auto__);};
pre.cljs$lang$maxFixedArity = 0;
pre.cljs$lang$applyTo = (function (arglist__10133){
var args__6512__auto__ = cljs.core.seq(arglist__10133);
return pre__delegate(args__6512__auto__);
});
pre.cljs$core$IFn$_invoke$arity$variadic = pre__delegate;
return pre;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.progress = (function() { 
var progress__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__8130_10134 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__8131_10135 = null;var count__8132_10136 = 0;var i__8133_10137 = 0;while(true){
if((i__8133_10137 < count__8132_10136))
{var arg__6514__auto___10138 = cljs.core._nth.call(null,chunk__8131_10135,i__8133_10137);a__6513__auto__.push(arg__6514__auto___10138);
{
var G__10139 = seq__8130_10134;
var G__10140 = chunk__8131_10135;
var G__10141 = count__8132_10136;
var G__10142 = (i__8133_10137 + 1);
seq__8130_10134 = G__10139;
chunk__8131_10135 = G__10140;
count__8132_10136 = G__10141;
i__8133_10137 = G__10142;
continue;
}
} else
{var temp__4092__auto___10143 = cljs.core.seq.call(null,seq__8130_10134);if(temp__4092__auto___10143)
{var seq__8130_10144__$1 = temp__4092__auto___10143;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8130_10144__$1))
{var c__5632__auto___10145 = cljs.core.chunk_first.call(null,seq__8130_10144__$1);{
var G__10146 = cljs.core.chunk_rest.call(null,seq__8130_10144__$1);
var G__10147 = c__5632__auto___10145;
var G__10148 = cljs.core.count.call(null,c__5632__auto___10145);
var G__10149 = 0;
seq__8130_10134 = G__10146;
chunk__8131_10135 = G__10147;
count__8132_10136 = G__10148;
i__8133_10137 = G__10149;
continue;
}
} else
{var arg__6514__auto___10150 = cljs.core.first.call(null,seq__8130_10144__$1);a__6513__auto__.push(arg__6514__auto___10150);
{
var G__10151 = cljs.core.next.call(null,seq__8130_10144__$1);
var G__10152 = null;
var G__10153 = 0;
var G__10154 = 0;
seq__8130_10134 = G__10151;
chunk__8131_10135 = G__10152;
count__8132_10136 = G__10153;
i__8133_10137 = G__10154;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.progress.apply(null,a__6513__auto__);
};
var progress = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return progress__delegate.call(this,args__6512__auto__);};
progress.cljs$lang$maxFixedArity = 0;
progress.cljs$lang$applyTo = (function (arglist__10155){
var args__6512__auto__ = cljs.core.seq(arglist__10155);
return progress__delegate(args__6512__auto__);
});
progress.cljs$core$IFn$_invoke$arity$variadic = progress__delegate;
return progress;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.q = (function() { 
var q__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__8138_10156 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__8139_10157 = null;var count__8140_10158 = 0;var i__8141_10159 = 0;while(true){
if((i__8141_10159 < count__8140_10158))
{var arg__6514__auto___10160 = cljs.core._nth.call(null,chunk__8139_10157,i__8141_10159);a__6513__auto__.push(arg__6514__auto___10160);
{
var G__10161 = seq__8138_10156;
var G__10162 = chunk__8139_10157;
var G__10163 = count__8140_10158;
var G__10164 = (i__8141_10159 + 1);
seq__8138_10156 = G__10161;
chunk__8139_10157 = G__10162;
count__8140_10158 = G__10163;
i__8141_10159 = G__10164;
continue;
}
} else
{var temp__4092__auto___10165 = cljs.core.seq.call(null,seq__8138_10156);if(temp__4092__auto___10165)
{var seq__8138_10166__$1 = temp__4092__auto___10165;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8138_10166__$1))
{var c__5632__auto___10167 = cljs.core.chunk_first.call(null,seq__8138_10166__$1);{
var G__10168 = cljs.core.chunk_rest.call(null,seq__8138_10166__$1);
var G__10169 = c__5632__auto___10167;
var G__10170 = cljs.core.count.call(null,c__5632__auto___10167);
var G__10171 = 0;
seq__8138_10156 = G__10168;
chunk__8139_10157 = G__10169;
count__8140_10158 = G__10170;
i__8141_10159 = G__10171;
continue;
}
} else
{var arg__6514__auto___10172 = cljs.core.first.call(null,seq__8138_10166__$1);a__6513__auto__.push(arg__6514__auto___10172);
{
var G__10173 = cljs.core.next.call(null,seq__8138_10166__$1);
var G__10174 = null;
var G__10175 = 0;
var G__10176 = 0;
seq__8138_10156 = G__10173;
chunk__8139_10157 = G__10174;
count__8140_10158 = G__10175;
i__8141_10159 = G__10176;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.q.apply(null,a__6513__auto__);
};
var q = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return q__delegate.call(this,args__6512__auto__);};
q.cljs$lang$maxFixedArity = 0;
q.cljs$lang$applyTo = (function (arglist__10177){
var args__6512__auto__ = cljs.core.seq(arglist__10177);
return q__delegate(args__6512__auto__);
});
q.cljs$core$IFn$_invoke$arity$variadic = q__delegate;
return q;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.rp = (function() { 
var rp__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__8146_10178 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__8147_10179 = null;var count__8148_10180 = 0;var i__8149_10181 = 0;while(true){
if((i__8149_10181 < count__8148_10180))
{var arg__6514__auto___10182 = cljs.core._nth.call(null,chunk__8147_10179,i__8149_10181);a__6513__auto__.push(arg__6514__auto___10182);
{
var G__10183 = seq__8146_10178;
var G__10184 = chunk__8147_10179;
var G__10185 = count__8148_10180;
var G__10186 = (i__8149_10181 + 1);
seq__8146_10178 = G__10183;
chunk__8147_10179 = G__10184;
count__8148_10180 = G__10185;
i__8149_10181 = G__10186;
continue;
}
} else
{var temp__4092__auto___10187 = cljs.core.seq.call(null,seq__8146_10178);if(temp__4092__auto___10187)
{var seq__8146_10188__$1 = temp__4092__auto___10187;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8146_10188__$1))
{var c__5632__auto___10189 = cljs.core.chunk_first.call(null,seq__8146_10188__$1);{
var G__10190 = cljs.core.chunk_rest.call(null,seq__8146_10188__$1);
var G__10191 = c__5632__auto___10189;
var G__10192 = cljs.core.count.call(null,c__5632__auto___10189);
var G__10193 = 0;
seq__8146_10178 = G__10190;
chunk__8147_10179 = G__10191;
count__8148_10180 = G__10192;
i__8149_10181 = G__10193;
continue;
}
} else
{var arg__6514__auto___10194 = cljs.core.first.call(null,seq__8146_10188__$1);a__6513__auto__.push(arg__6514__auto___10194);
{
var G__10195 = cljs.core.next.call(null,seq__8146_10188__$1);
var G__10196 = null;
var G__10197 = 0;
var G__10198 = 0;
seq__8146_10178 = G__10195;
chunk__8147_10179 = G__10196;
count__8148_10180 = G__10197;
i__8149_10181 = G__10198;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.rp.apply(null,a__6513__auto__);
};
var rp = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return rp__delegate.call(this,args__6512__auto__);};
rp.cljs$lang$maxFixedArity = 0;
rp.cljs$lang$applyTo = (function (arglist__10199){
var args__6512__auto__ = cljs.core.seq(arglist__10199);
return rp__delegate(args__6512__auto__);
});
rp.cljs$core$IFn$_invoke$arity$variadic = rp__delegate;
return rp;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.rt = (function() { 
var rt__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__8154_10200 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__8155_10201 = null;var count__8156_10202 = 0;var i__8157_10203 = 0;while(true){
if((i__8157_10203 < count__8156_10202))
{var arg__6514__auto___10204 = cljs.core._nth.call(null,chunk__8155_10201,i__8157_10203);a__6513__auto__.push(arg__6514__auto___10204);
{
var G__10205 = seq__8154_10200;
var G__10206 = chunk__8155_10201;
var G__10207 = count__8156_10202;
var G__10208 = (i__8157_10203 + 1);
seq__8154_10200 = G__10205;
chunk__8155_10201 = G__10206;
count__8156_10202 = G__10207;
i__8157_10203 = G__10208;
continue;
}
} else
{var temp__4092__auto___10209 = cljs.core.seq.call(null,seq__8154_10200);if(temp__4092__auto___10209)
{var seq__8154_10210__$1 = temp__4092__auto___10209;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8154_10210__$1))
{var c__5632__auto___10211 = cljs.core.chunk_first.call(null,seq__8154_10210__$1);{
var G__10212 = cljs.core.chunk_rest.call(null,seq__8154_10210__$1);
var G__10213 = c__5632__auto___10211;
var G__10214 = cljs.core.count.call(null,c__5632__auto___10211);
var G__10215 = 0;
seq__8154_10200 = G__10212;
chunk__8155_10201 = G__10213;
count__8156_10202 = G__10214;
i__8157_10203 = G__10215;
continue;
}
} else
{var arg__6514__auto___10216 = cljs.core.first.call(null,seq__8154_10210__$1);a__6513__auto__.push(arg__6514__auto___10216);
{
var G__10217 = cljs.core.next.call(null,seq__8154_10210__$1);
var G__10218 = null;
var G__10219 = 0;
var G__10220 = 0;
seq__8154_10200 = G__10217;
chunk__8155_10201 = G__10218;
count__8156_10202 = G__10219;
i__8157_10203 = G__10220;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.rt.apply(null,a__6513__auto__);
};
var rt = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return rt__delegate.call(this,args__6512__auto__);};
rt.cljs$lang$maxFixedArity = 0;
rt.cljs$lang$applyTo = (function (arglist__10221){
var args__6512__auto__ = cljs.core.seq(arglist__10221);
return rt__delegate(args__6512__auto__);
});
rt.cljs$core$IFn$_invoke$arity$variadic = rt__delegate;
return rt;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.ruby = (function() { 
var ruby__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__8162_10222 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__8163_10223 = null;var count__8164_10224 = 0;var i__8165_10225 = 0;while(true){
if((i__8165_10225 < count__8164_10224))
{var arg__6514__auto___10226 = cljs.core._nth.call(null,chunk__8163_10223,i__8165_10225);a__6513__auto__.push(arg__6514__auto___10226);
{
var G__10227 = seq__8162_10222;
var G__10228 = chunk__8163_10223;
var G__10229 = count__8164_10224;
var G__10230 = (i__8165_10225 + 1);
seq__8162_10222 = G__10227;
chunk__8163_10223 = G__10228;
count__8164_10224 = G__10229;
i__8165_10225 = G__10230;
continue;
}
} else
{var temp__4092__auto___10231 = cljs.core.seq.call(null,seq__8162_10222);if(temp__4092__auto___10231)
{var seq__8162_10232__$1 = temp__4092__auto___10231;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8162_10232__$1))
{var c__5632__auto___10233 = cljs.core.chunk_first.call(null,seq__8162_10232__$1);{
var G__10234 = cljs.core.chunk_rest.call(null,seq__8162_10232__$1);
var G__10235 = c__5632__auto___10233;
var G__10236 = cljs.core.count.call(null,c__5632__auto___10233);
var G__10237 = 0;
seq__8162_10222 = G__10234;
chunk__8163_10223 = G__10235;
count__8164_10224 = G__10236;
i__8165_10225 = G__10237;
continue;
}
} else
{var arg__6514__auto___10238 = cljs.core.first.call(null,seq__8162_10232__$1);a__6513__auto__.push(arg__6514__auto___10238);
{
var G__10239 = cljs.core.next.call(null,seq__8162_10232__$1);
var G__10240 = null;
var G__10241 = 0;
var G__10242 = 0;
seq__8162_10222 = G__10239;
chunk__8163_10223 = G__10240;
count__8164_10224 = G__10241;
i__8165_10225 = G__10242;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.ruby.apply(null,a__6513__auto__);
};
var ruby = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ruby__delegate.call(this,args__6512__auto__);};
ruby.cljs$lang$maxFixedArity = 0;
ruby.cljs$lang$applyTo = (function (arglist__10243){
var args__6512__auto__ = cljs.core.seq(arglist__10243);
return ruby__delegate(args__6512__auto__);
});
ruby.cljs$core$IFn$_invoke$arity$variadic = ruby__delegate;
return ruby;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.s = (function() { 
var s__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__8170_10244 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__8171_10245 = null;var count__8172_10246 = 0;var i__8173_10247 = 0;while(true){
if((i__8173_10247 < count__8172_10246))
{var arg__6514__auto___10248 = cljs.core._nth.call(null,chunk__8171_10245,i__8173_10247);a__6513__auto__.push(arg__6514__auto___10248);
{
var G__10249 = seq__8170_10244;
var G__10250 = chunk__8171_10245;
var G__10251 = count__8172_10246;
var G__10252 = (i__8173_10247 + 1);
seq__8170_10244 = G__10249;
chunk__8171_10245 = G__10250;
count__8172_10246 = G__10251;
i__8173_10247 = G__10252;
continue;
}
} else
{var temp__4092__auto___10253 = cljs.core.seq.call(null,seq__8170_10244);if(temp__4092__auto___10253)
{var seq__8170_10254__$1 = temp__4092__auto___10253;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8170_10254__$1))
{var c__5632__auto___10255 = cljs.core.chunk_first.call(null,seq__8170_10254__$1);{
var G__10256 = cljs.core.chunk_rest.call(null,seq__8170_10254__$1);
var G__10257 = c__5632__auto___10255;
var G__10258 = cljs.core.count.call(null,c__5632__auto___10255);
var G__10259 = 0;
seq__8170_10244 = G__10256;
chunk__8171_10245 = G__10257;
count__8172_10246 = G__10258;
i__8173_10247 = G__10259;
continue;
}
} else
{var arg__6514__auto___10260 = cljs.core.first.call(null,seq__8170_10254__$1);a__6513__auto__.push(arg__6514__auto___10260);
{
var G__10261 = cljs.core.next.call(null,seq__8170_10254__$1);
var G__10262 = null;
var G__10263 = 0;
var G__10264 = 0;
seq__8170_10244 = G__10261;
chunk__8171_10245 = G__10262;
count__8172_10246 = G__10263;
i__8173_10247 = G__10264;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.s.apply(null,a__6513__auto__);
};
var s = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return s__delegate.call(this,args__6512__auto__);};
s.cljs$lang$maxFixedArity = 0;
s.cljs$lang$applyTo = (function (arglist__10265){
var args__6512__auto__ = cljs.core.seq(arglist__10265);
return s__delegate(args__6512__auto__);
});
s.cljs$core$IFn$_invoke$arity$variadic = s__delegate;
return s;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.samp = (function() { 
var samp__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__8178_10266 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__8179_10267 = null;var count__8180_10268 = 0;var i__8181_10269 = 0;while(true){
if((i__8181_10269 < count__8180_10268))
{var arg__6514__auto___10270 = cljs.core._nth.call(null,chunk__8179_10267,i__8181_10269);a__6513__auto__.push(arg__6514__auto___10270);
{
var G__10271 = seq__8178_10266;
var G__10272 = chunk__8179_10267;
var G__10273 = count__8180_10268;
var G__10274 = (i__8181_10269 + 1);
seq__8178_10266 = G__10271;
chunk__8179_10267 = G__10272;
count__8180_10268 = G__10273;
i__8181_10269 = G__10274;
continue;
}
} else
{var temp__4092__auto___10275 = cljs.core.seq.call(null,seq__8178_10266);if(temp__4092__auto___10275)
{var seq__8178_10276__$1 = temp__4092__auto___10275;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8178_10276__$1))
{var c__5632__auto___10277 = cljs.core.chunk_first.call(null,seq__8178_10276__$1);{
var G__10278 = cljs.core.chunk_rest.call(null,seq__8178_10276__$1);
var G__10279 = c__5632__auto___10277;
var G__10280 = cljs.core.count.call(null,c__5632__auto___10277);
var G__10281 = 0;
seq__8178_10266 = G__10278;
chunk__8179_10267 = G__10279;
count__8180_10268 = G__10280;
i__8181_10269 = G__10281;
continue;
}
} else
{var arg__6514__auto___10282 = cljs.core.first.call(null,seq__8178_10276__$1);a__6513__auto__.push(arg__6514__auto___10282);
{
var G__10283 = cljs.core.next.call(null,seq__8178_10276__$1);
var G__10284 = null;
var G__10285 = 0;
var G__10286 = 0;
seq__8178_10266 = G__10283;
chunk__8179_10267 = G__10284;
count__8180_10268 = G__10285;
i__8181_10269 = G__10286;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.samp.apply(null,a__6513__auto__);
};
var samp = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return samp__delegate.call(this,args__6512__auto__);};
samp.cljs$lang$maxFixedArity = 0;
samp.cljs$lang$applyTo = (function (arglist__10287){
var args__6512__auto__ = cljs.core.seq(arglist__10287);
return samp__delegate(args__6512__auto__);
});
samp.cljs$core$IFn$_invoke$arity$variadic = samp__delegate;
return samp;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.script = (function() { 
var script__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__8186_10288 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__8187_10289 = null;var count__8188_10290 = 0;var i__8189_10291 = 0;while(true){
if((i__8189_10291 < count__8188_10290))
{var arg__6514__auto___10292 = cljs.core._nth.call(null,chunk__8187_10289,i__8189_10291);a__6513__auto__.push(arg__6514__auto___10292);
{
var G__10293 = seq__8186_10288;
var G__10294 = chunk__8187_10289;
var G__10295 = count__8188_10290;
var G__10296 = (i__8189_10291 + 1);
seq__8186_10288 = G__10293;
chunk__8187_10289 = G__10294;
count__8188_10290 = G__10295;
i__8189_10291 = G__10296;
continue;
}
} else
{var temp__4092__auto___10297 = cljs.core.seq.call(null,seq__8186_10288);if(temp__4092__auto___10297)
{var seq__8186_10298__$1 = temp__4092__auto___10297;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8186_10298__$1))
{var c__5632__auto___10299 = cljs.core.chunk_first.call(null,seq__8186_10298__$1);{
var G__10300 = cljs.core.chunk_rest.call(null,seq__8186_10298__$1);
var G__10301 = c__5632__auto___10299;
var G__10302 = cljs.core.count.call(null,c__5632__auto___10299);
var G__10303 = 0;
seq__8186_10288 = G__10300;
chunk__8187_10289 = G__10301;
count__8188_10290 = G__10302;
i__8189_10291 = G__10303;
continue;
}
} else
{var arg__6514__auto___10304 = cljs.core.first.call(null,seq__8186_10298__$1);a__6513__auto__.push(arg__6514__auto___10304);
{
var G__10305 = cljs.core.next.call(null,seq__8186_10298__$1);
var G__10306 = null;
var G__10307 = 0;
var G__10308 = 0;
seq__8186_10288 = G__10305;
chunk__8187_10289 = G__10306;
count__8188_10290 = G__10307;
i__8189_10291 = G__10308;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.script.apply(null,a__6513__auto__);
};
var script = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return script__delegate.call(this,args__6512__auto__);};
script.cljs$lang$maxFixedArity = 0;
script.cljs$lang$applyTo = (function (arglist__10309){
var args__6512__auto__ = cljs.core.seq(arglist__10309);
return script__delegate(args__6512__auto__);
});
script.cljs$core$IFn$_invoke$arity$variadic = script__delegate;
return script;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.section = (function() { 
var section__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__8194_10310 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__8195_10311 = null;var count__8196_10312 = 0;var i__8197_10313 = 0;while(true){
if((i__8197_10313 < count__8196_10312))
{var arg__6514__auto___10314 = cljs.core._nth.call(null,chunk__8195_10311,i__8197_10313);a__6513__auto__.push(arg__6514__auto___10314);
{
var G__10315 = seq__8194_10310;
var G__10316 = chunk__8195_10311;
var G__10317 = count__8196_10312;
var G__10318 = (i__8197_10313 + 1);
seq__8194_10310 = G__10315;
chunk__8195_10311 = G__10316;
count__8196_10312 = G__10317;
i__8197_10313 = G__10318;
continue;
}
} else
{var temp__4092__auto___10319 = cljs.core.seq.call(null,seq__8194_10310);if(temp__4092__auto___10319)
{var seq__8194_10320__$1 = temp__4092__auto___10319;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8194_10320__$1))
{var c__5632__auto___10321 = cljs.core.chunk_first.call(null,seq__8194_10320__$1);{
var G__10322 = cljs.core.chunk_rest.call(null,seq__8194_10320__$1);
var G__10323 = c__5632__auto___10321;
var G__10324 = cljs.core.count.call(null,c__5632__auto___10321);
var G__10325 = 0;
seq__8194_10310 = G__10322;
chunk__8195_10311 = G__10323;
count__8196_10312 = G__10324;
i__8197_10313 = G__10325;
continue;
}
} else
{var arg__6514__auto___10326 = cljs.core.first.call(null,seq__8194_10320__$1);a__6513__auto__.push(arg__6514__auto___10326);
{
var G__10327 = cljs.core.next.call(null,seq__8194_10320__$1);
var G__10328 = null;
var G__10329 = 0;
var G__10330 = 0;
seq__8194_10310 = G__10327;
chunk__8195_10311 = G__10328;
count__8196_10312 = G__10329;
i__8197_10313 = G__10330;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.section.apply(null,a__6513__auto__);
};
var section = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return section__delegate.call(this,args__6512__auto__);};
section.cljs$lang$maxFixedArity = 0;
section.cljs$lang$applyTo = (function (arglist__10331){
var args__6512__auto__ = cljs.core.seq(arglist__10331);
return section__delegate(args__6512__auto__);
});
section.cljs$core$IFn$_invoke$arity$variadic = section__delegate;
return section;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.select = (function() { 
var select__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__8202_10332 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__8203_10333 = null;var count__8204_10334 = 0;var i__8205_10335 = 0;while(true){
if((i__8205_10335 < count__8204_10334))
{var arg__6514__auto___10336 = cljs.core._nth.call(null,chunk__8203_10333,i__8205_10335);a__6513__auto__.push(arg__6514__auto___10336);
{
var G__10337 = seq__8202_10332;
var G__10338 = chunk__8203_10333;
var G__10339 = count__8204_10334;
var G__10340 = (i__8205_10335 + 1);
seq__8202_10332 = G__10337;
chunk__8203_10333 = G__10338;
count__8204_10334 = G__10339;
i__8205_10335 = G__10340;
continue;
}
} else
{var temp__4092__auto___10341 = cljs.core.seq.call(null,seq__8202_10332);if(temp__4092__auto___10341)
{var seq__8202_10342__$1 = temp__4092__auto___10341;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8202_10342__$1))
{var c__5632__auto___10343 = cljs.core.chunk_first.call(null,seq__8202_10342__$1);{
var G__10344 = cljs.core.chunk_rest.call(null,seq__8202_10342__$1);
var G__10345 = c__5632__auto___10343;
var G__10346 = cljs.core.count.call(null,c__5632__auto___10343);
var G__10347 = 0;
seq__8202_10332 = G__10344;
chunk__8203_10333 = G__10345;
count__8204_10334 = G__10346;
i__8205_10335 = G__10347;
continue;
}
} else
{var arg__6514__auto___10348 = cljs.core.first.call(null,seq__8202_10342__$1);a__6513__auto__.push(arg__6514__auto___10348);
{
var G__10349 = cljs.core.next.call(null,seq__8202_10342__$1);
var G__10350 = null;
var G__10351 = 0;
var G__10352 = 0;
seq__8202_10332 = G__10349;
chunk__8203_10333 = G__10350;
count__8204_10334 = G__10351;
i__8205_10335 = G__10352;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.select.apply(null,a__6513__auto__);
};
var select = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return select__delegate.call(this,args__6512__auto__);};
select.cljs$lang$maxFixedArity = 0;
select.cljs$lang$applyTo = (function (arglist__10353){
var args__6512__auto__ = cljs.core.seq(arglist__10353);
return select__delegate(args__6512__auto__);
});
select.cljs$core$IFn$_invoke$arity$variadic = select__delegate;
return select;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.small = (function() { 
var small__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__8210_10354 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__8211_10355 = null;var count__8212_10356 = 0;var i__8213_10357 = 0;while(true){
if((i__8213_10357 < count__8212_10356))
{var arg__6514__auto___10358 = cljs.core._nth.call(null,chunk__8211_10355,i__8213_10357);a__6513__auto__.push(arg__6514__auto___10358);
{
var G__10359 = seq__8210_10354;
var G__10360 = chunk__8211_10355;
var G__10361 = count__8212_10356;
var G__10362 = (i__8213_10357 + 1);
seq__8210_10354 = G__10359;
chunk__8211_10355 = G__10360;
count__8212_10356 = G__10361;
i__8213_10357 = G__10362;
continue;
}
} else
{var temp__4092__auto___10363 = cljs.core.seq.call(null,seq__8210_10354);if(temp__4092__auto___10363)
{var seq__8210_10364__$1 = temp__4092__auto___10363;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8210_10364__$1))
{var c__5632__auto___10365 = cljs.core.chunk_first.call(null,seq__8210_10364__$1);{
var G__10366 = cljs.core.chunk_rest.call(null,seq__8210_10364__$1);
var G__10367 = c__5632__auto___10365;
var G__10368 = cljs.core.count.call(null,c__5632__auto___10365);
var G__10369 = 0;
seq__8210_10354 = G__10366;
chunk__8211_10355 = G__10367;
count__8212_10356 = G__10368;
i__8213_10357 = G__10369;
continue;
}
} else
{var arg__6514__auto___10370 = cljs.core.first.call(null,seq__8210_10364__$1);a__6513__auto__.push(arg__6514__auto___10370);
{
var G__10371 = cljs.core.next.call(null,seq__8210_10364__$1);
var G__10372 = null;
var G__10373 = 0;
var G__10374 = 0;
seq__8210_10354 = G__10371;
chunk__8211_10355 = G__10372;
count__8212_10356 = G__10373;
i__8213_10357 = G__10374;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.small.apply(null,a__6513__auto__);
};
var small = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return small__delegate.call(this,args__6512__auto__);};
small.cljs$lang$maxFixedArity = 0;
small.cljs$lang$applyTo = (function (arglist__10375){
var args__6512__auto__ = cljs.core.seq(arglist__10375);
return small__delegate(args__6512__auto__);
});
small.cljs$core$IFn$_invoke$arity$variadic = small__delegate;
return small;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.source = (function() { 
var source__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__8218_10376 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__8219_10377 = null;var count__8220_10378 = 0;var i__8221_10379 = 0;while(true){
if((i__8221_10379 < count__8220_10378))
{var arg__6514__auto___10380 = cljs.core._nth.call(null,chunk__8219_10377,i__8221_10379);a__6513__auto__.push(arg__6514__auto___10380);
{
var G__10381 = seq__8218_10376;
var G__10382 = chunk__8219_10377;
var G__10383 = count__8220_10378;
var G__10384 = (i__8221_10379 + 1);
seq__8218_10376 = G__10381;
chunk__8219_10377 = G__10382;
count__8220_10378 = G__10383;
i__8221_10379 = G__10384;
continue;
}
} else
{var temp__4092__auto___10385 = cljs.core.seq.call(null,seq__8218_10376);if(temp__4092__auto___10385)
{var seq__8218_10386__$1 = temp__4092__auto___10385;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8218_10386__$1))
{var c__5632__auto___10387 = cljs.core.chunk_first.call(null,seq__8218_10386__$1);{
var G__10388 = cljs.core.chunk_rest.call(null,seq__8218_10386__$1);
var G__10389 = c__5632__auto___10387;
var G__10390 = cljs.core.count.call(null,c__5632__auto___10387);
var G__10391 = 0;
seq__8218_10376 = G__10388;
chunk__8219_10377 = G__10389;
count__8220_10378 = G__10390;
i__8221_10379 = G__10391;
continue;
}
} else
{var arg__6514__auto___10392 = cljs.core.first.call(null,seq__8218_10386__$1);a__6513__auto__.push(arg__6514__auto___10392);
{
var G__10393 = cljs.core.next.call(null,seq__8218_10386__$1);
var G__10394 = null;
var G__10395 = 0;
var G__10396 = 0;
seq__8218_10376 = G__10393;
chunk__8219_10377 = G__10394;
count__8220_10378 = G__10395;
i__8221_10379 = G__10396;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.source.apply(null,a__6513__auto__);
};
var source = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return source__delegate.call(this,args__6512__auto__);};
source.cljs$lang$maxFixedArity = 0;
source.cljs$lang$applyTo = (function (arglist__10397){
var args__6512__auto__ = cljs.core.seq(arglist__10397);
return source__delegate(args__6512__auto__);
});
source.cljs$core$IFn$_invoke$arity$variadic = source__delegate;
return source;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.span = (function() { 
var span__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__8226_10398 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__8227_10399 = null;var count__8228_10400 = 0;var i__8229_10401 = 0;while(true){
if((i__8229_10401 < count__8228_10400))
{var arg__6514__auto___10402 = cljs.core._nth.call(null,chunk__8227_10399,i__8229_10401);a__6513__auto__.push(arg__6514__auto___10402);
{
var G__10403 = seq__8226_10398;
var G__10404 = chunk__8227_10399;
var G__10405 = count__8228_10400;
var G__10406 = (i__8229_10401 + 1);
seq__8226_10398 = G__10403;
chunk__8227_10399 = G__10404;
count__8228_10400 = G__10405;
i__8229_10401 = G__10406;
continue;
}
} else
{var temp__4092__auto___10407 = cljs.core.seq.call(null,seq__8226_10398);if(temp__4092__auto___10407)
{var seq__8226_10408__$1 = temp__4092__auto___10407;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8226_10408__$1))
{var c__5632__auto___10409 = cljs.core.chunk_first.call(null,seq__8226_10408__$1);{
var G__10410 = cljs.core.chunk_rest.call(null,seq__8226_10408__$1);
var G__10411 = c__5632__auto___10409;
var G__10412 = cljs.core.count.call(null,c__5632__auto___10409);
var G__10413 = 0;
seq__8226_10398 = G__10410;
chunk__8227_10399 = G__10411;
count__8228_10400 = G__10412;
i__8229_10401 = G__10413;
continue;
}
} else
{var arg__6514__auto___10414 = cljs.core.first.call(null,seq__8226_10408__$1);a__6513__auto__.push(arg__6514__auto___10414);
{
var G__10415 = cljs.core.next.call(null,seq__8226_10408__$1);
var G__10416 = null;
var G__10417 = 0;
var G__10418 = 0;
seq__8226_10398 = G__10415;
chunk__8227_10399 = G__10416;
count__8228_10400 = G__10417;
i__8229_10401 = G__10418;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.span.apply(null,a__6513__auto__);
};
var span = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return span__delegate.call(this,args__6512__auto__);};
span.cljs$lang$maxFixedArity = 0;
span.cljs$lang$applyTo = (function (arglist__10419){
var args__6512__auto__ = cljs.core.seq(arglist__10419);
return span__delegate(args__6512__auto__);
});
span.cljs$core$IFn$_invoke$arity$variadic = span__delegate;
return span;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.strong = (function() { 
var strong__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__8234_10420 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__8235_10421 = null;var count__8236_10422 = 0;var i__8237_10423 = 0;while(true){
if((i__8237_10423 < count__8236_10422))
{var arg__6514__auto___10424 = cljs.core._nth.call(null,chunk__8235_10421,i__8237_10423);a__6513__auto__.push(arg__6514__auto___10424);
{
var G__10425 = seq__8234_10420;
var G__10426 = chunk__8235_10421;
var G__10427 = count__8236_10422;
var G__10428 = (i__8237_10423 + 1);
seq__8234_10420 = G__10425;
chunk__8235_10421 = G__10426;
count__8236_10422 = G__10427;
i__8237_10423 = G__10428;
continue;
}
} else
{var temp__4092__auto___10429 = cljs.core.seq.call(null,seq__8234_10420);if(temp__4092__auto___10429)
{var seq__8234_10430__$1 = temp__4092__auto___10429;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8234_10430__$1))
{var c__5632__auto___10431 = cljs.core.chunk_first.call(null,seq__8234_10430__$1);{
var G__10432 = cljs.core.chunk_rest.call(null,seq__8234_10430__$1);
var G__10433 = c__5632__auto___10431;
var G__10434 = cljs.core.count.call(null,c__5632__auto___10431);
var G__10435 = 0;
seq__8234_10420 = G__10432;
chunk__8235_10421 = G__10433;
count__8236_10422 = G__10434;
i__8237_10423 = G__10435;
continue;
}
} else
{var arg__6514__auto___10436 = cljs.core.first.call(null,seq__8234_10430__$1);a__6513__auto__.push(arg__6514__auto___10436);
{
var G__10437 = cljs.core.next.call(null,seq__8234_10430__$1);
var G__10438 = null;
var G__10439 = 0;
var G__10440 = 0;
seq__8234_10420 = G__10437;
chunk__8235_10421 = G__10438;
count__8236_10422 = G__10439;
i__8237_10423 = G__10440;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.strong.apply(null,a__6513__auto__);
};
var strong = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return strong__delegate.call(this,args__6512__auto__);};
strong.cljs$lang$maxFixedArity = 0;
strong.cljs$lang$applyTo = (function (arglist__10441){
var args__6512__auto__ = cljs.core.seq(arglist__10441);
return strong__delegate(args__6512__auto__);
});
strong.cljs$core$IFn$_invoke$arity$variadic = strong__delegate;
return strong;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.style = (function() { 
var style__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__8242_10442 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__8243_10443 = null;var count__8244_10444 = 0;var i__8245_10445 = 0;while(true){
if((i__8245_10445 < count__8244_10444))
{var arg__6514__auto___10446 = cljs.core._nth.call(null,chunk__8243_10443,i__8245_10445);a__6513__auto__.push(arg__6514__auto___10446);
{
var G__10447 = seq__8242_10442;
var G__10448 = chunk__8243_10443;
var G__10449 = count__8244_10444;
var G__10450 = (i__8245_10445 + 1);
seq__8242_10442 = G__10447;
chunk__8243_10443 = G__10448;
count__8244_10444 = G__10449;
i__8245_10445 = G__10450;
continue;
}
} else
{var temp__4092__auto___10451 = cljs.core.seq.call(null,seq__8242_10442);if(temp__4092__auto___10451)
{var seq__8242_10452__$1 = temp__4092__auto___10451;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8242_10452__$1))
{var c__5632__auto___10453 = cljs.core.chunk_first.call(null,seq__8242_10452__$1);{
var G__10454 = cljs.core.chunk_rest.call(null,seq__8242_10452__$1);
var G__10455 = c__5632__auto___10453;
var G__10456 = cljs.core.count.call(null,c__5632__auto___10453);
var G__10457 = 0;
seq__8242_10442 = G__10454;
chunk__8243_10443 = G__10455;
count__8244_10444 = G__10456;
i__8245_10445 = G__10457;
continue;
}
} else
{var arg__6514__auto___10458 = cljs.core.first.call(null,seq__8242_10452__$1);a__6513__auto__.push(arg__6514__auto___10458);
{
var G__10459 = cljs.core.next.call(null,seq__8242_10452__$1);
var G__10460 = null;
var G__10461 = 0;
var G__10462 = 0;
seq__8242_10442 = G__10459;
chunk__8243_10443 = G__10460;
count__8244_10444 = G__10461;
i__8245_10445 = G__10462;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.style.apply(null,a__6513__auto__);
};
var style = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return style__delegate.call(this,args__6512__auto__);};
style.cljs$lang$maxFixedArity = 0;
style.cljs$lang$applyTo = (function (arglist__10463){
var args__6512__auto__ = cljs.core.seq(arglist__10463);
return style__delegate(args__6512__auto__);
});
style.cljs$core$IFn$_invoke$arity$variadic = style__delegate;
return style;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.sub = (function() { 
var sub__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__8250_10464 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__8251_10465 = null;var count__8252_10466 = 0;var i__8253_10467 = 0;while(true){
if((i__8253_10467 < count__8252_10466))
{var arg__6514__auto___10468 = cljs.core._nth.call(null,chunk__8251_10465,i__8253_10467);a__6513__auto__.push(arg__6514__auto___10468);
{
var G__10469 = seq__8250_10464;
var G__10470 = chunk__8251_10465;
var G__10471 = count__8252_10466;
var G__10472 = (i__8253_10467 + 1);
seq__8250_10464 = G__10469;
chunk__8251_10465 = G__10470;
count__8252_10466 = G__10471;
i__8253_10467 = G__10472;
continue;
}
} else
{var temp__4092__auto___10473 = cljs.core.seq.call(null,seq__8250_10464);if(temp__4092__auto___10473)
{var seq__8250_10474__$1 = temp__4092__auto___10473;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8250_10474__$1))
{var c__5632__auto___10475 = cljs.core.chunk_first.call(null,seq__8250_10474__$1);{
var G__10476 = cljs.core.chunk_rest.call(null,seq__8250_10474__$1);
var G__10477 = c__5632__auto___10475;
var G__10478 = cljs.core.count.call(null,c__5632__auto___10475);
var G__10479 = 0;
seq__8250_10464 = G__10476;
chunk__8251_10465 = G__10477;
count__8252_10466 = G__10478;
i__8253_10467 = G__10479;
continue;
}
} else
{var arg__6514__auto___10480 = cljs.core.first.call(null,seq__8250_10474__$1);a__6513__auto__.push(arg__6514__auto___10480);
{
var G__10481 = cljs.core.next.call(null,seq__8250_10474__$1);
var G__10482 = null;
var G__10483 = 0;
var G__10484 = 0;
seq__8250_10464 = G__10481;
chunk__8251_10465 = G__10482;
count__8252_10466 = G__10483;
i__8253_10467 = G__10484;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.sub.apply(null,a__6513__auto__);
};
var sub = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return sub__delegate.call(this,args__6512__auto__);};
sub.cljs$lang$maxFixedArity = 0;
sub.cljs$lang$applyTo = (function (arglist__10485){
var args__6512__auto__ = cljs.core.seq(arglist__10485);
return sub__delegate(args__6512__auto__);
});
sub.cljs$core$IFn$_invoke$arity$variadic = sub__delegate;
return sub;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.summary = (function() { 
var summary__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__8258_10486 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__8259_10487 = null;var count__8260_10488 = 0;var i__8261_10489 = 0;while(true){
if((i__8261_10489 < count__8260_10488))
{var arg__6514__auto___10490 = cljs.core._nth.call(null,chunk__8259_10487,i__8261_10489);a__6513__auto__.push(arg__6514__auto___10490);
{
var G__10491 = seq__8258_10486;
var G__10492 = chunk__8259_10487;
var G__10493 = count__8260_10488;
var G__10494 = (i__8261_10489 + 1);
seq__8258_10486 = G__10491;
chunk__8259_10487 = G__10492;
count__8260_10488 = G__10493;
i__8261_10489 = G__10494;
continue;
}
} else
{var temp__4092__auto___10495 = cljs.core.seq.call(null,seq__8258_10486);if(temp__4092__auto___10495)
{var seq__8258_10496__$1 = temp__4092__auto___10495;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8258_10496__$1))
{var c__5632__auto___10497 = cljs.core.chunk_first.call(null,seq__8258_10496__$1);{
var G__10498 = cljs.core.chunk_rest.call(null,seq__8258_10496__$1);
var G__10499 = c__5632__auto___10497;
var G__10500 = cljs.core.count.call(null,c__5632__auto___10497);
var G__10501 = 0;
seq__8258_10486 = G__10498;
chunk__8259_10487 = G__10499;
count__8260_10488 = G__10500;
i__8261_10489 = G__10501;
continue;
}
} else
{var arg__6514__auto___10502 = cljs.core.first.call(null,seq__8258_10496__$1);a__6513__auto__.push(arg__6514__auto___10502);
{
var G__10503 = cljs.core.next.call(null,seq__8258_10496__$1);
var G__10504 = null;
var G__10505 = 0;
var G__10506 = 0;
seq__8258_10486 = G__10503;
chunk__8259_10487 = G__10504;
count__8260_10488 = G__10505;
i__8261_10489 = G__10506;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.summary.apply(null,a__6513__auto__);
};
var summary = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return summary__delegate.call(this,args__6512__auto__);};
summary.cljs$lang$maxFixedArity = 0;
summary.cljs$lang$applyTo = (function (arglist__10507){
var args__6512__auto__ = cljs.core.seq(arglist__10507);
return summary__delegate(args__6512__auto__);
});
summary.cljs$core$IFn$_invoke$arity$variadic = summary__delegate;
return summary;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.sup = (function() { 
var sup__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__8266_10508 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__8267_10509 = null;var count__8268_10510 = 0;var i__8269_10511 = 0;while(true){
if((i__8269_10511 < count__8268_10510))
{var arg__6514__auto___10512 = cljs.core._nth.call(null,chunk__8267_10509,i__8269_10511);a__6513__auto__.push(arg__6514__auto___10512);
{
var G__10513 = seq__8266_10508;
var G__10514 = chunk__8267_10509;
var G__10515 = count__8268_10510;
var G__10516 = (i__8269_10511 + 1);
seq__8266_10508 = G__10513;
chunk__8267_10509 = G__10514;
count__8268_10510 = G__10515;
i__8269_10511 = G__10516;
continue;
}
} else
{var temp__4092__auto___10517 = cljs.core.seq.call(null,seq__8266_10508);if(temp__4092__auto___10517)
{var seq__8266_10518__$1 = temp__4092__auto___10517;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8266_10518__$1))
{var c__5632__auto___10519 = cljs.core.chunk_first.call(null,seq__8266_10518__$1);{
var G__10520 = cljs.core.chunk_rest.call(null,seq__8266_10518__$1);
var G__10521 = c__5632__auto___10519;
var G__10522 = cljs.core.count.call(null,c__5632__auto___10519);
var G__10523 = 0;
seq__8266_10508 = G__10520;
chunk__8267_10509 = G__10521;
count__8268_10510 = G__10522;
i__8269_10511 = G__10523;
continue;
}
} else
{var arg__6514__auto___10524 = cljs.core.first.call(null,seq__8266_10518__$1);a__6513__auto__.push(arg__6514__auto___10524);
{
var G__10525 = cljs.core.next.call(null,seq__8266_10518__$1);
var G__10526 = null;
var G__10527 = 0;
var G__10528 = 0;
seq__8266_10508 = G__10525;
chunk__8267_10509 = G__10526;
count__8268_10510 = G__10527;
i__8269_10511 = G__10528;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.sup.apply(null,a__6513__auto__);
};
var sup = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return sup__delegate.call(this,args__6512__auto__);};
sup.cljs$lang$maxFixedArity = 0;
sup.cljs$lang$applyTo = (function (arglist__10529){
var args__6512__auto__ = cljs.core.seq(arglist__10529);
return sup__delegate(args__6512__auto__);
});
sup.cljs$core$IFn$_invoke$arity$variadic = sup__delegate;
return sup;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.table = (function() { 
var table__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__8274_10530 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__8275_10531 = null;var count__8276_10532 = 0;var i__8277_10533 = 0;while(true){
if((i__8277_10533 < count__8276_10532))
{var arg__6514__auto___10534 = cljs.core._nth.call(null,chunk__8275_10531,i__8277_10533);a__6513__auto__.push(arg__6514__auto___10534);
{
var G__10535 = seq__8274_10530;
var G__10536 = chunk__8275_10531;
var G__10537 = count__8276_10532;
var G__10538 = (i__8277_10533 + 1);
seq__8274_10530 = G__10535;
chunk__8275_10531 = G__10536;
count__8276_10532 = G__10537;
i__8277_10533 = G__10538;
continue;
}
} else
{var temp__4092__auto___10539 = cljs.core.seq.call(null,seq__8274_10530);if(temp__4092__auto___10539)
{var seq__8274_10540__$1 = temp__4092__auto___10539;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8274_10540__$1))
{var c__5632__auto___10541 = cljs.core.chunk_first.call(null,seq__8274_10540__$1);{
var G__10542 = cljs.core.chunk_rest.call(null,seq__8274_10540__$1);
var G__10543 = c__5632__auto___10541;
var G__10544 = cljs.core.count.call(null,c__5632__auto___10541);
var G__10545 = 0;
seq__8274_10530 = G__10542;
chunk__8275_10531 = G__10543;
count__8276_10532 = G__10544;
i__8277_10533 = G__10545;
continue;
}
} else
{var arg__6514__auto___10546 = cljs.core.first.call(null,seq__8274_10540__$1);a__6513__auto__.push(arg__6514__auto___10546);
{
var G__10547 = cljs.core.next.call(null,seq__8274_10540__$1);
var G__10548 = null;
var G__10549 = 0;
var G__10550 = 0;
seq__8274_10530 = G__10547;
chunk__8275_10531 = G__10548;
count__8276_10532 = G__10549;
i__8277_10533 = G__10550;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.table.apply(null,a__6513__auto__);
};
var table = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return table__delegate.call(this,args__6512__auto__);};
table.cljs$lang$maxFixedArity = 0;
table.cljs$lang$applyTo = (function (arglist__10551){
var args__6512__auto__ = cljs.core.seq(arglist__10551);
return table__delegate(args__6512__auto__);
});
table.cljs$core$IFn$_invoke$arity$variadic = table__delegate;
return table;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.tbody = (function() { 
var tbody__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__8282_10552 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__8283_10553 = null;var count__8284_10554 = 0;var i__8285_10555 = 0;while(true){
if((i__8285_10555 < count__8284_10554))
{var arg__6514__auto___10556 = cljs.core._nth.call(null,chunk__8283_10553,i__8285_10555);a__6513__auto__.push(arg__6514__auto___10556);
{
var G__10557 = seq__8282_10552;
var G__10558 = chunk__8283_10553;
var G__10559 = count__8284_10554;
var G__10560 = (i__8285_10555 + 1);
seq__8282_10552 = G__10557;
chunk__8283_10553 = G__10558;
count__8284_10554 = G__10559;
i__8285_10555 = G__10560;
continue;
}
} else
{var temp__4092__auto___10561 = cljs.core.seq.call(null,seq__8282_10552);if(temp__4092__auto___10561)
{var seq__8282_10562__$1 = temp__4092__auto___10561;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8282_10562__$1))
{var c__5632__auto___10563 = cljs.core.chunk_first.call(null,seq__8282_10562__$1);{
var G__10564 = cljs.core.chunk_rest.call(null,seq__8282_10562__$1);
var G__10565 = c__5632__auto___10563;
var G__10566 = cljs.core.count.call(null,c__5632__auto___10563);
var G__10567 = 0;
seq__8282_10552 = G__10564;
chunk__8283_10553 = G__10565;
count__8284_10554 = G__10566;
i__8285_10555 = G__10567;
continue;
}
} else
{var arg__6514__auto___10568 = cljs.core.first.call(null,seq__8282_10562__$1);a__6513__auto__.push(arg__6514__auto___10568);
{
var G__10569 = cljs.core.next.call(null,seq__8282_10562__$1);
var G__10570 = null;
var G__10571 = 0;
var G__10572 = 0;
seq__8282_10552 = G__10569;
chunk__8283_10553 = G__10570;
count__8284_10554 = G__10571;
i__8285_10555 = G__10572;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.tbody.apply(null,a__6513__auto__);
};
var tbody = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return tbody__delegate.call(this,args__6512__auto__);};
tbody.cljs$lang$maxFixedArity = 0;
tbody.cljs$lang$applyTo = (function (arglist__10573){
var args__6512__auto__ = cljs.core.seq(arglist__10573);
return tbody__delegate(args__6512__auto__);
});
tbody.cljs$core$IFn$_invoke$arity$variadic = tbody__delegate;
return tbody;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.td = (function() { 
var td__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__8290_10574 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__8291_10575 = null;var count__8292_10576 = 0;var i__8293_10577 = 0;while(true){
if((i__8293_10577 < count__8292_10576))
{var arg__6514__auto___10578 = cljs.core._nth.call(null,chunk__8291_10575,i__8293_10577);a__6513__auto__.push(arg__6514__auto___10578);
{
var G__10579 = seq__8290_10574;
var G__10580 = chunk__8291_10575;
var G__10581 = count__8292_10576;
var G__10582 = (i__8293_10577 + 1);
seq__8290_10574 = G__10579;
chunk__8291_10575 = G__10580;
count__8292_10576 = G__10581;
i__8293_10577 = G__10582;
continue;
}
} else
{var temp__4092__auto___10583 = cljs.core.seq.call(null,seq__8290_10574);if(temp__4092__auto___10583)
{var seq__8290_10584__$1 = temp__4092__auto___10583;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8290_10584__$1))
{var c__5632__auto___10585 = cljs.core.chunk_first.call(null,seq__8290_10584__$1);{
var G__10586 = cljs.core.chunk_rest.call(null,seq__8290_10584__$1);
var G__10587 = c__5632__auto___10585;
var G__10588 = cljs.core.count.call(null,c__5632__auto___10585);
var G__10589 = 0;
seq__8290_10574 = G__10586;
chunk__8291_10575 = G__10587;
count__8292_10576 = G__10588;
i__8293_10577 = G__10589;
continue;
}
} else
{var arg__6514__auto___10590 = cljs.core.first.call(null,seq__8290_10584__$1);a__6513__auto__.push(arg__6514__auto___10590);
{
var G__10591 = cljs.core.next.call(null,seq__8290_10584__$1);
var G__10592 = null;
var G__10593 = 0;
var G__10594 = 0;
seq__8290_10574 = G__10591;
chunk__8291_10575 = G__10592;
count__8292_10576 = G__10593;
i__8293_10577 = G__10594;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.td.apply(null,a__6513__auto__);
};
var td = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return td__delegate.call(this,args__6512__auto__);};
td.cljs$lang$maxFixedArity = 0;
td.cljs$lang$applyTo = (function (arglist__10595){
var args__6512__auto__ = cljs.core.seq(arglist__10595);
return td__delegate(args__6512__auto__);
});
td.cljs$core$IFn$_invoke$arity$variadic = td__delegate;
return td;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.textarea = (function() { 
var textarea__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__8298_10596 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__8299_10597 = null;var count__8300_10598 = 0;var i__8301_10599 = 0;while(true){
if((i__8301_10599 < count__8300_10598))
{var arg__6514__auto___10600 = cljs.core._nth.call(null,chunk__8299_10597,i__8301_10599);a__6513__auto__.push(arg__6514__auto___10600);
{
var G__10601 = seq__8298_10596;
var G__10602 = chunk__8299_10597;
var G__10603 = count__8300_10598;
var G__10604 = (i__8301_10599 + 1);
seq__8298_10596 = G__10601;
chunk__8299_10597 = G__10602;
count__8300_10598 = G__10603;
i__8301_10599 = G__10604;
continue;
}
} else
{var temp__4092__auto___10605 = cljs.core.seq.call(null,seq__8298_10596);if(temp__4092__auto___10605)
{var seq__8298_10606__$1 = temp__4092__auto___10605;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8298_10606__$1))
{var c__5632__auto___10607 = cljs.core.chunk_first.call(null,seq__8298_10606__$1);{
var G__10608 = cljs.core.chunk_rest.call(null,seq__8298_10606__$1);
var G__10609 = c__5632__auto___10607;
var G__10610 = cljs.core.count.call(null,c__5632__auto___10607);
var G__10611 = 0;
seq__8298_10596 = G__10608;
chunk__8299_10597 = G__10609;
count__8300_10598 = G__10610;
i__8301_10599 = G__10611;
continue;
}
} else
{var arg__6514__auto___10612 = cljs.core.first.call(null,seq__8298_10606__$1);a__6513__auto__.push(arg__6514__auto___10612);
{
var G__10613 = cljs.core.next.call(null,seq__8298_10606__$1);
var G__10614 = null;
var G__10615 = 0;
var G__10616 = 0;
seq__8298_10596 = G__10613;
chunk__8299_10597 = G__10614;
count__8300_10598 = G__10615;
i__8301_10599 = G__10616;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.textarea.apply(null,a__6513__auto__);
};
var textarea = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return textarea__delegate.call(this,args__6512__auto__);};
textarea.cljs$lang$maxFixedArity = 0;
textarea.cljs$lang$applyTo = (function (arglist__10617){
var args__6512__auto__ = cljs.core.seq(arglist__10617);
return textarea__delegate(args__6512__auto__);
});
textarea.cljs$core$IFn$_invoke$arity$variadic = textarea__delegate;
return textarea;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.tfoot = (function() { 
var tfoot__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__8306_10618 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__8307_10619 = null;var count__8308_10620 = 0;var i__8309_10621 = 0;while(true){
if((i__8309_10621 < count__8308_10620))
{var arg__6514__auto___10622 = cljs.core._nth.call(null,chunk__8307_10619,i__8309_10621);a__6513__auto__.push(arg__6514__auto___10622);
{
var G__10623 = seq__8306_10618;
var G__10624 = chunk__8307_10619;
var G__10625 = count__8308_10620;
var G__10626 = (i__8309_10621 + 1);
seq__8306_10618 = G__10623;
chunk__8307_10619 = G__10624;
count__8308_10620 = G__10625;
i__8309_10621 = G__10626;
continue;
}
} else
{var temp__4092__auto___10627 = cljs.core.seq.call(null,seq__8306_10618);if(temp__4092__auto___10627)
{var seq__8306_10628__$1 = temp__4092__auto___10627;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8306_10628__$1))
{var c__5632__auto___10629 = cljs.core.chunk_first.call(null,seq__8306_10628__$1);{
var G__10630 = cljs.core.chunk_rest.call(null,seq__8306_10628__$1);
var G__10631 = c__5632__auto___10629;
var G__10632 = cljs.core.count.call(null,c__5632__auto___10629);
var G__10633 = 0;
seq__8306_10618 = G__10630;
chunk__8307_10619 = G__10631;
count__8308_10620 = G__10632;
i__8309_10621 = G__10633;
continue;
}
} else
{var arg__6514__auto___10634 = cljs.core.first.call(null,seq__8306_10628__$1);a__6513__auto__.push(arg__6514__auto___10634);
{
var G__10635 = cljs.core.next.call(null,seq__8306_10628__$1);
var G__10636 = null;
var G__10637 = 0;
var G__10638 = 0;
seq__8306_10618 = G__10635;
chunk__8307_10619 = G__10636;
count__8308_10620 = G__10637;
i__8309_10621 = G__10638;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.tfoot.apply(null,a__6513__auto__);
};
var tfoot = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return tfoot__delegate.call(this,args__6512__auto__);};
tfoot.cljs$lang$maxFixedArity = 0;
tfoot.cljs$lang$applyTo = (function (arglist__10639){
var args__6512__auto__ = cljs.core.seq(arglist__10639);
return tfoot__delegate(args__6512__auto__);
});
tfoot.cljs$core$IFn$_invoke$arity$variadic = tfoot__delegate;
return tfoot;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.th = (function() { 
var th__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__8314_10640 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__8315_10641 = null;var count__8316_10642 = 0;var i__8317_10643 = 0;while(true){
if((i__8317_10643 < count__8316_10642))
{var arg__6514__auto___10644 = cljs.core._nth.call(null,chunk__8315_10641,i__8317_10643);a__6513__auto__.push(arg__6514__auto___10644);
{
var G__10645 = seq__8314_10640;
var G__10646 = chunk__8315_10641;
var G__10647 = count__8316_10642;
var G__10648 = (i__8317_10643 + 1);
seq__8314_10640 = G__10645;
chunk__8315_10641 = G__10646;
count__8316_10642 = G__10647;
i__8317_10643 = G__10648;
continue;
}
} else
{var temp__4092__auto___10649 = cljs.core.seq.call(null,seq__8314_10640);if(temp__4092__auto___10649)
{var seq__8314_10650__$1 = temp__4092__auto___10649;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8314_10650__$1))
{var c__5632__auto___10651 = cljs.core.chunk_first.call(null,seq__8314_10650__$1);{
var G__10652 = cljs.core.chunk_rest.call(null,seq__8314_10650__$1);
var G__10653 = c__5632__auto___10651;
var G__10654 = cljs.core.count.call(null,c__5632__auto___10651);
var G__10655 = 0;
seq__8314_10640 = G__10652;
chunk__8315_10641 = G__10653;
count__8316_10642 = G__10654;
i__8317_10643 = G__10655;
continue;
}
} else
{var arg__6514__auto___10656 = cljs.core.first.call(null,seq__8314_10650__$1);a__6513__auto__.push(arg__6514__auto___10656);
{
var G__10657 = cljs.core.next.call(null,seq__8314_10650__$1);
var G__10658 = null;
var G__10659 = 0;
var G__10660 = 0;
seq__8314_10640 = G__10657;
chunk__8315_10641 = G__10658;
count__8316_10642 = G__10659;
i__8317_10643 = G__10660;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.th.apply(null,a__6513__auto__);
};
var th = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return th__delegate.call(this,args__6512__auto__);};
th.cljs$lang$maxFixedArity = 0;
th.cljs$lang$applyTo = (function (arglist__10661){
var args__6512__auto__ = cljs.core.seq(arglist__10661);
return th__delegate(args__6512__auto__);
});
th.cljs$core$IFn$_invoke$arity$variadic = th__delegate;
return th;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.thead = (function() { 
var thead__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__8322_10662 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__8323_10663 = null;var count__8324_10664 = 0;var i__8325_10665 = 0;while(true){
if((i__8325_10665 < count__8324_10664))
{var arg__6514__auto___10666 = cljs.core._nth.call(null,chunk__8323_10663,i__8325_10665);a__6513__auto__.push(arg__6514__auto___10666);
{
var G__10667 = seq__8322_10662;
var G__10668 = chunk__8323_10663;
var G__10669 = count__8324_10664;
var G__10670 = (i__8325_10665 + 1);
seq__8322_10662 = G__10667;
chunk__8323_10663 = G__10668;
count__8324_10664 = G__10669;
i__8325_10665 = G__10670;
continue;
}
} else
{var temp__4092__auto___10671 = cljs.core.seq.call(null,seq__8322_10662);if(temp__4092__auto___10671)
{var seq__8322_10672__$1 = temp__4092__auto___10671;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8322_10672__$1))
{var c__5632__auto___10673 = cljs.core.chunk_first.call(null,seq__8322_10672__$1);{
var G__10674 = cljs.core.chunk_rest.call(null,seq__8322_10672__$1);
var G__10675 = c__5632__auto___10673;
var G__10676 = cljs.core.count.call(null,c__5632__auto___10673);
var G__10677 = 0;
seq__8322_10662 = G__10674;
chunk__8323_10663 = G__10675;
count__8324_10664 = G__10676;
i__8325_10665 = G__10677;
continue;
}
} else
{var arg__6514__auto___10678 = cljs.core.first.call(null,seq__8322_10672__$1);a__6513__auto__.push(arg__6514__auto___10678);
{
var G__10679 = cljs.core.next.call(null,seq__8322_10672__$1);
var G__10680 = null;
var G__10681 = 0;
var G__10682 = 0;
seq__8322_10662 = G__10679;
chunk__8323_10663 = G__10680;
count__8324_10664 = G__10681;
i__8325_10665 = G__10682;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.thead.apply(null,a__6513__auto__);
};
var thead = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return thead__delegate.call(this,args__6512__auto__);};
thead.cljs$lang$maxFixedArity = 0;
thead.cljs$lang$applyTo = (function (arglist__10683){
var args__6512__auto__ = cljs.core.seq(arglist__10683);
return thead__delegate(args__6512__auto__);
});
thead.cljs$core$IFn$_invoke$arity$variadic = thead__delegate;
return thead;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.time = (function() { 
var time__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__8330_10684 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__8331_10685 = null;var count__8332_10686 = 0;var i__8333_10687 = 0;while(true){
if((i__8333_10687 < count__8332_10686))
{var arg__6514__auto___10688 = cljs.core._nth.call(null,chunk__8331_10685,i__8333_10687);a__6513__auto__.push(arg__6514__auto___10688);
{
var G__10689 = seq__8330_10684;
var G__10690 = chunk__8331_10685;
var G__10691 = count__8332_10686;
var G__10692 = (i__8333_10687 + 1);
seq__8330_10684 = G__10689;
chunk__8331_10685 = G__10690;
count__8332_10686 = G__10691;
i__8333_10687 = G__10692;
continue;
}
} else
{var temp__4092__auto___10693 = cljs.core.seq.call(null,seq__8330_10684);if(temp__4092__auto___10693)
{var seq__8330_10694__$1 = temp__4092__auto___10693;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8330_10694__$1))
{var c__5632__auto___10695 = cljs.core.chunk_first.call(null,seq__8330_10694__$1);{
var G__10696 = cljs.core.chunk_rest.call(null,seq__8330_10694__$1);
var G__10697 = c__5632__auto___10695;
var G__10698 = cljs.core.count.call(null,c__5632__auto___10695);
var G__10699 = 0;
seq__8330_10684 = G__10696;
chunk__8331_10685 = G__10697;
count__8332_10686 = G__10698;
i__8333_10687 = G__10699;
continue;
}
} else
{var arg__6514__auto___10700 = cljs.core.first.call(null,seq__8330_10694__$1);a__6513__auto__.push(arg__6514__auto___10700);
{
var G__10701 = cljs.core.next.call(null,seq__8330_10694__$1);
var G__10702 = null;
var G__10703 = 0;
var G__10704 = 0;
seq__8330_10684 = G__10701;
chunk__8331_10685 = G__10702;
count__8332_10686 = G__10703;
i__8333_10687 = G__10704;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.time.apply(null,a__6513__auto__);
};
var time = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return time__delegate.call(this,args__6512__auto__);};
time.cljs$lang$maxFixedArity = 0;
time.cljs$lang$applyTo = (function (arglist__10705){
var args__6512__auto__ = cljs.core.seq(arglist__10705);
return time__delegate(args__6512__auto__);
});
time.cljs$core$IFn$_invoke$arity$variadic = time__delegate;
return time;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.title = (function() { 
var title__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__8338_10706 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__8339_10707 = null;var count__8340_10708 = 0;var i__8341_10709 = 0;while(true){
if((i__8341_10709 < count__8340_10708))
{var arg__6514__auto___10710 = cljs.core._nth.call(null,chunk__8339_10707,i__8341_10709);a__6513__auto__.push(arg__6514__auto___10710);
{
var G__10711 = seq__8338_10706;
var G__10712 = chunk__8339_10707;
var G__10713 = count__8340_10708;
var G__10714 = (i__8341_10709 + 1);
seq__8338_10706 = G__10711;
chunk__8339_10707 = G__10712;
count__8340_10708 = G__10713;
i__8341_10709 = G__10714;
continue;
}
} else
{var temp__4092__auto___10715 = cljs.core.seq.call(null,seq__8338_10706);if(temp__4092__auto___10715)
{var seq__8338_10716__$1 = temp__4092__auto___10715;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8338_10716__$1))
{var c__5632__auto___10717 = cljs.core.chunk_first.call(null,seq__8338_10716__$1);{
var G__10718 = cljs.core.chunk_rest.call(null,seq__8338_10716__$1);
var G__10719 = c__5632__auto___10717;
var G__10720 = cljs.core.count.call(null,c__5632__auto___10717);
var G__10721 = 0;
seq__8338_10706 = G__10718;
chunk__8339_10707 = G__10719;
count__8340_10708 = G__10720;
i__8341_10709 = G__10721;
continue;
}
} else
{var arg__6514__auto___10722 = cljs.core.first.call(null,seq__8338_10716__$1);a__6513__auto__.push(arg__6514__auto___10722);
{
var G__10723 = cljs.core.next.call(null,seq__8338_10716__$1);
var G__10724 = null;
var G__10725 = 0;
var G__10726 = 0;
seq__8338_10706 = G__10723;
chunk__8339_10707 = G__10724;
count__8340_10708 = G__10725;
i__8341_10709 = G__10726;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.title.apply(null,a__6513__auto__);
};
var title = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return title__delegate.call(this,args__6512__auto__);};
title.cljs$lang$maxFixedArity = 0;
title.cljs$lang$applyTo = (function (arglist__10727){
var args__6512__auto__ = cljs.core.seq(arglist__10727);
return title__delegate(args__6512__auto__);
});
title.cljs$core$IFn$_invoke$arity$variadic = title__delegate;
return title;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.tr = (function() { 
var tr__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__8346_10728 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__8347_10729 = null;var count__8348_10730 = 0;var i__8349_10731 = 0;while(true){
if((i__8349_10731 < count__8348_10730))
{var arg__6514__auto___10732 = cljs.core._nth.call(null,chunk__8347_10729,i__8349_10731);a__6513__auto__.push(arg__6514__auto___10732);
{
var G__10733 = seq__8346_10728;
var G__10734 = chunk__8347_10729;
var G__10735 = count__8348_10730;
var G__10736 = (i__8349_10731 + 1);
seq__8346_10728 = G__10733;
chunk__8347_10729 = G__10734;
count__8348_10730 = G__10735;
i__8349_10731 = G__10736;
continue;
}
} else
{var temp__4092__auto___10737 = cljs.core.seq.call(null,seq__8346_10728);if(temp__4092__auto___10737)
{var seq__8346_10738__$1 = temp__4092__auto___10737;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8346_10738__$1))
{var c__5632__auto___10739 = cljs.core.chunk_first.call(null,seq__8346_10738__$1);{
var G__10740 = cljs.core.chunk_rest.call(null,seq__8346_10738__$1);
var G__10741 = c__5632__auto___10739;
var G__10742 = cljs.core.count.call(null,c__5632__auto___10739);
var G__10743 = 0;
seq__8346_10728 = G__10740;
chunk__8347_10729 = G__10741;
count__8348_10730 = G__10742;
i__8349_10731 = G__10743;
continue;
}
} else
{var arg__6514__auto___10744 = cljs.core.first.call(null,seq__8346_10738__$1);a__6513__auto__.push(arg__6514__auto___10744);
{
var G__10745 = cljs.core.next.call(null,seq__8346_10738__$1);
var G__10746 = null;
var G__10747 = 0;
var G__10748 = 0;
seq__8346_10728 = G__10745;
chunk__8347_10729 = G__10746;
count__8348_10730 = G__10747;
i__8349_10731 = G__10748;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.tr.apply(null,a__6513__auto__);
};
var tr = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return tr__delegate.call(this,args__6512__auto__);};
tr.cljs$lang$maxFixedArity = 0;
tr.cljs$lang$applyTo = (function (arglist__10749){
var args__6512__auto__ = cljs.core.seq(arglist__10749);
return tr__delegate(args__6512__auto__);
});
tr.cljs$core$IFn$_invoke$arity$variadic = tr__delegate;
return tr;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.track = (function() { 
var track__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__8354_10750 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__8355_10751 = null;var count__8356_10752 = 0;var i__8357_10753 = 0;while(true){
if((i__8357_10753 < count__8356_10752))
{var arg__6514__auto___10754 = cljs.core._nth.call(null,chunk__8355_10751,i__8357_10753);a__6513__auto__.push(arg__6514__auto___10754);
{
var G__10755 = seq__8354_10750;
var G__10756 = chunk__8355_10751;
var G__10757 = count__8356_10752;
var G__10758 = (i__8357_10753 + 1);
seq__8354_10750 = G__10755;
chunk__8355_10751 = G__10756;
count__8356_10752 = G__10757;
i__8357_10753 = G__10758;
continue;
}
} else
{var temp__4092__auto___10759 = cljs.core.seq.call(null,seq__8354_10750);if(temp__4092__auto___10759)
{var seq__8354_10760__$1 = temp__4092__auto___10759;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8354_10760__$1))
{var c__5632__auto___10761 = cljs.core.chunk_first.call(null,seq__8354_10760__$1);{
var G__10762 = cljs.core.chunk_rest.call(null,seq__8354_10760__$1);
var G__10763 = c__5632__auto___10761;
var G__10764 = cljs.core.count.call(null,c__5632__auto___10761);
var G__10765 = 0;
seq__8354_10750 = G__10762;
chunk__8355_10751 = G__10763;
count__8356_10752 = G__10764;
i__8357_10753 = G__10765;
continue;
}
} else
{var arg__6514__auto___10766 = cljs.core.first.call(null,seq__8354_10760__$1);a__6513__auto__.push(arg__6514__auto___10766);
{
var G__10767 = cljs.core.next.call(null,seq__8354_10760__$1);
var G__10768 = null;
var G__10769 = 0;
var G__10770 = 0;
seq__8354_10750 = G__10767;
chunk__8355_10751 = G__10768;
count__8356_10752 = G__10769;
i__8357_10753 = G__10770;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.track.apply(null,a__6513__auto__);
};
var track = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return track__delegate.call(this,args__6512__auto__);};
track.cljs$lang$maxFixedArity = 0;
track.cljs$lang$applyTo = (function (arglist__10771){
var args__6512__auto__ = cljs.core.seq(arglist__10771);
return track__delegate(args__6512__auto__);
});
track.cljs$core$IFn$_invoke$arity$variadic = track__delegate;
return track;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.u = (function() { 
var u__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__8362_10772 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__8363_10773 = null;var count__8364_10774 = 0;var i__8365_10775 = 0;while(true){
if((i__8365_10775 < count__8364_10774))
{var arg__6514__auto___10776 = cljs.core._nth.call(null,chunk__8363_10773,i__8365_10775);a__6513__auto__.push(arg__6514__auto___10776);
{
var G__10777 = seq__8362_10772;
var G__10778 = chunk__8363_10773;
var G__10779 = count__8364_10774;
var G__10780 = (i__8365_10775 + 1);
seq__8362_10772 = G__10777;
chunk__8363_10773 = G__10778;
count__8364_10774 = G__10779;
i__8365_10775 = G__10780;
continue;
}
} else
{var temp__4092__auto___10781 = cljs.core.seq.call(null,seq__8362_10772);if(temp__4092__auto___10781)
{var seq__8362_10782__$1 = temp__4092__auto___10781;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8362_10782__$1))
{var c__5632__auto___10783 = cljs.core.chunk_first.call(null,seq__8362_10782__$1);{
var G__10784 = cljs.core.chunk_rest.call(null,seq__8362_10782__$1);
var G__10785 = c__5632__auto___10783;
var G__10786 = cljs.core.count.call(null,c__5632__auto___10783);
var G__10787 = 0;
seq__8362_10772 = G__10784;
chunk__8363_10773 = G__10785;
count__8364_10774 = G__10786;
i__8365_10775 = G__10787;
continue;
}
} else
{var arg__6514__auto___10788 = cljs.core.first.call(null,seq__8362_10782__$1);a__6513__auto__.push(arg__6514__auto___10788);
{
var G__10789 = cljs.core.next.call(null,seq__8362_10782__$1);
var G__10790 = null;
var G__10791 = 0;
var G__10792 = 0;
seq__8362_10772 = G__10789;
chunk__8363_10773 = G__10790;
count__8364_10774 = G__10791;
i__8365_10775 = G__10792;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.u.apply(null,a__6513__auto__);
};
var u = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return u__delegate.call(this,args__6512__auto__);};
u.cljs$lang$maxFixedArity = 0;
u.cljs$lang$applyTo = (function (arglist__10793){
var args__6512__auto__ = cljs.core.seq(arglist__10793);
return u__delegate(args__6512__auto__);
});
u.cljs$core$IFn$_invoke$arity$variadic = u__delegate;
return u;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.ul = (function() { 
var ul__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__8370_10794 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__8371_10795 = null;var count__8372_10796 = 0;var i__8373_10797 = 0;while(true){
if((i__8373_10797 < count__8372_10796))
{var arg__6514__auto___10798 = cljs.core._nth.call(null,chunk__8371_10795,i__8373_10797);a__6513__auto__.push(arg__6514__auto___10798);
{
var G__10799 = seq__8370_10794;
var G__10800 = chunk__8371_10795;
var G__10801 = count__8372_10796;
var G__10802 = (i__8373_10797 + 1);
seq__8370_10794 = G__10799;
chunk__8371_10795 = G__10800;
count__8372_10796 = G__10801;
i__8373_10797 = G__10802;
continue;
}
} else
{var temp__4092__auto___10803 = cljs.core.seq.call(null,seq__8370_10794);if(temp__4092__auto___10803)
{var seq__8370_10804__$1 = temp__4092__auto___10803;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8370_10804__$1))
{var c__5632__auto___10805 = cljs.core.chunk_first.call(null,seq__8370_10804__$1);{
var G__10806 = cljs.core.chunk_rest.call(null,seq__8370_10804__$1);
var G__10807 = c__5632__auto___10805;
var G__10808 = cljs.core.count.call(null,c__5632__auto___10805);
var G__10809 = 0;
seq__8370_10794 = G__10806;
chunk__8371_10795 = G__10807;
count__8372_10796 = G__10808;
i__8373_10797 = G__10809;
continue;
}
} else
{var arg__6514__auto___10810 = cljs.core.first.call(null,seq__8370_10804__$1);a__6513__auto__.push(arg__6514__auto___10810);
{
var G__10811 = cljs.core.next.call(null,seq__8370_10804__$1);
var G__10812 = null;
var G__10813 = 0;
var G__10814 = 0;
seq__8370_10794 = G__10811;
chunk__8371_10795 = G__10812;
count__8372_10796 = G__10813;
i__8373_10797 = G__10814;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.ul.apply(null,a__6513__auto__);
};
var ul = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ul__delegate.call(this,args__6512__auto__);};
ul.cljs$lang$maxFixedArity = 0;
ul.cljs$lang$applyTo = (function (arglist__10815){
var args__6512__auto__ = cljs.core.seq(arglist__10815);
return ul__delegate(args__6512__auto__);
});
ul.cljs$core$IFn$_invoke$arity$variadic = ul__delegate;
return ul;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.var$ = (function() { 
var var$__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__8378_10816 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__8379_10817 = null;var count__8380_10818 = 0;var i__8381_10819 = 0;while(true){
if((i__8381_10819 < count__8380_10818))
{var arg__6514__auto___10820 = cljs.core._nth.call(null,chunk__8379_10817,i__8381_10819);a__6513__auto__.push(arg__6514__auto___10820);
{
var G__10821 = seq__8378_10816;
var G__10822 = chunk__8379_10817;
var G__10823 = count__8380_10818;
var G__10824 = (i__8381_10819 + 1);
seq__8378_10816 = G__10821;
chunk__8379_10817 = G__10822;
count__8380_10818 = G__10823;
i__8381_10819 = G__10824;
continue;
}
} else
{var temp__4092__auto___10825 = cljs.core.seq.call(null,seq__8378_10816);if(temp__4092__auto___10825)
{var seq__8378_10826__$1 = temp__4092__auto___10825;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8378_10826__$1))
{var c__5632__auto___10827 = cljs.core.chunk_first.call(null,seq__8378_10826__$1);{
var G__10828 = cljs.core.chunk_rest.call(null,seq__8378_10826__$1);
var G__10829 = c__5632__auto___10827;
var G__10830 = cljs.core.count.call(null,c__5632__auto___10827);
var G__10831 = 0;
seq__8378_10816 = G__10828;
chunk__8379_10817 = G__10829;
count__8380_10818 = G__10830;
i__8381_10819 = G__10831;
continue;
}
} else
{var arg__6514__auto___10832 = cljs.core.first.call(null,seq__8378_10826__$1);a__6513__auto__.push(arg__6514__auto___10832);
{
var G__10833 = cljs.core.next.call(null,seq__8378_10826__$1);
var G__10834 = null;
var G__10835 = 0;
var G__10836 = 0;
seq__8378_10816 = G__10833;
chunk__8379_10817 = G__10834;
count__8380_10818 = G__10835;
i__8381_10819 = G__10836;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.var$.apply(null,a__6513__auto__);
};
var var$ = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return var$__delegate.call(this,args__6512__auto__);};
var$.cljs$lang$maxFixedArity = 0;
var$.cljs$lang$applyTo = (function (arglist__10837){
var args__6512__auto__ = cljs.core.seq(arglist__10837);
return var$__delegate(args__6512__auto__);
});
var$.cljs$core$IFn$_invoke$arity$variadic = var$__delegate;
return var$;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.video = (function() { 
var video__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__8386_10838 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__8387_10839 = null;var count__8388_10840 = 0;var i__8389_10841 = 0;while(true){
if((i__8389_10841 < count__8388_10840))
{var arg__6514__auto___10842 = cljs.core._nth.call(null,chunk__8387_10839,i__8389_10841);a__6513__auto__.push(arg__6514__auto___10842);
{
var G__10843 = seq__8386_10838;
var G__10844 = chunk__8387_10839;
var G__10845 = count__8388_10840;
var G__10846 = (i__8389_10841 + 1);
seq__8386_10838 = G__10843;
chunk__8387_10839 = G__10844;
count__8388_10840 = G__10845;
i__8389_10841 = G__10846;
continue;
}
} else
{var temp__4092__auto___10847 = cljs.core.seq.call(null,seq__8386_10838);if(temp__4092__auto___10847)
{var seq__8386_10848__$1 = temp__4092__auto___10847;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8386_10848__$1))
{var c__5632__auto___10849 = cljs.core.chunk_first.call(null,seq__8386_10848__$1);{
var G__10850 = cljs.core.chunk_rest.call(null,seq__8386_10848__$1);
var G__10851 = c__5632__auto___10849;
var G__10852 = cljs.core.count.call(null,c__5632__auto___10849);
var G__10853 = 0;
seq__8386_10838 = G__10850;
chunk__8387_10839 = G__10851;
count__8388_10840 = G__10852;
i__8389_10841 = G__10853;
continue;
}
} else
{var arg__6514__auto___10854 = cljs.core.first.call(null,seq__8386_10848__$1);a__6513__auto__.push(arg__6514__auto___10854);
{
var G__10855 = cljs.core.next.call(null,seq__8386_10848__$1);
var G__10856 = null;
var G__10857 = 0;
var G__10858 = 0;
seq__8386_10838 = G__10855;
chunk__8387_10839 = G__10856;
count__8388_10840 = G__10857;
i__8389_10841 = G__10858;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.video.apply(null,a__6513__auto__);
};
var video = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return video__delegate.call(this,args__6512__auto__);};
video.cljs$lang$maxFixedArity = 0;
video.cljs$lang$applyTo = (function (arglist__10859){
var args__6512__auto__ = cljs.core.seq(arglist__10859);
return video__delegate(args__6512__auto__);
});
video.cljs$core$IFn$_invoke$arity$variadic = video__delegate;
return video;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.wbr = (function() { 
var wbr__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__8394_10860 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__8395_10861 = null;var count__8396_10862 = 0;var i__8397_10863 = 0;while(true){
if((i__8397_10863 < count__8396_10862))
{var arg__6514__auto___10864 = cljs.core._nth.call(null,chunk__8395_10861,i__8397_10863);a__6513__auto__.push(arg__6514__auto___10864);
{
var G__10865 = seq__8394_10860;
var G__10866 = chunk__8395_10861;
var G__10867 = count__8396_10862;
var G__10868 = (i__8397_10863 + 1);
seq__8394_10860 = G__10865;
chunk__8395_10861 = G__10866;
count__8396_10862 = G__10867;
i__8397_10863 = G__10868;
continue;
}
} else
{var temp__4092__auto___10869 = cljs.core.seq.call(null,seq__8394_10860);if(temp__4092__auto___10869)
{var seq__8394_10870__$1 = temp__4092__auto___10869;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8394_10870__$1))
{var c__5632__auto___10871 = cljs.core.chunk_first.call(null,seq__8394_10870__$1);{
var G__10872 = cljs.core.chunk_rest.call(null,seq__8394_10870__$1);
var G__10873 = c__5632__auto___10871;
var G__10874 = cljs.core.count.call(null,c__5632__auto___10871);
var G__10875 = 0;
seq__8394_10860 = G__10872;
chunk__8395_10861 = G__10873;
count__8396_10862 = G__10874;
i__8397_10863 = G__10875;
continue;
}
} else
{var arg__6514__auto___10876 = cljs.core.first.call(null,seq__8394_10870__$1);a__6513__auto__.push(arg__6514__auto___10876);
{
var G__10877 = cljs.core.next.call(null,seq__8394_10870__$1);
var G__10878 = null;
var G__10879 = 0;
var G__10880 = 0;
seq__8394_10860 = G__10877;
chunk__8395_10861 = G__10878;
count__8396_10862 = G__10879;
i__8397_10863 = G__10880;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.wbr.apply(null,a__6513__auto__);
};
var wbr = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return wbr__delegate.call(this,args__6512__auto__);};
wbr.cljs$lang$maxFixedArity = 0;
wbr.cljs$lang$applyTo = (function (arglist__10881){
var args__6512__auto__ = cljs.core.seq(arglist__10881);
return wbr__delegate(args__6512__auto__);
});
wbr.cljs$core$IFn$_invoke$arity$variadic = wbr__delegate;
return wbr;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.circle = (function() { 
var circle__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__8402_10882 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__8403_10883 = null;var count__8404_10884 = 0;var i__8405_10885 = 0;while(true){
if((i__8405_10885 < count__8404_10884))
{var arg__6514__auto___10886 = cljs.core._nth.call(null,chunk__8403_10883,i__8405_10885);a__6513__auto__.push(arg__6514__auto___10886);
{
var G__10887 = seq__8402_10882;
var G__10888 = chunk__8403_10883;
var G__10889 = count__8404_10884;
var G__10890 = (i__8405_10885 + 1);
seq__8402_10882 = G__10887;
chunk__8403_10883 = G__10888;
count__8404_10884 = G__10889;
i__8405_10885 = G__10890;
continue;
}
} else
{var temp__4092__auto___10891 = cljs.core.seq.call(null,seq__8402_10882);if(temp__4092__auto___10891)
{var seq__8402_10892__$1 = temp__4092__auto___10891;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8402_10892__$1))
{var c__5632__auto___10893 = cljs.core.chunk_first.call(null,seq__8402_10892__$1);{
var G__10894 = cljs.core.chunk_rest.call(null,seq__8402_10892__$1);
var G__10895 = c__5632__auto___10893;
var G__10896 = cljs.core.count.call(null,c__5632__auto___10893);
var G__10897 = 0;
seq__8402_10882 = G__10894;
chunk__8403_10883 = G__10895;
count__8404_10884 = G__10896;
i__8405_10885 = G__10897;
continue;
}
} else
{var arg__6514__auto___10898 = cljs.core.first.call(null,seq__8402_10892__$1);a__6513__auto__.push(arg__6514__auto___10898);
{
var G__10899 = cljs.core.next.call(null,seq__8402_10892__$1);
var G__10900 = null;
var G__10901 = 0;
var G__10902 = 0;
seq__8402_10882 = G__10899;
chunk__8403_10883 = G__10900;
count__8404_10884 = G__10901;
i__8405_10885 = G__10902;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.circle.apply(null,a__6513__auto__);
};
var circle = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return circle__delegate.call(this,args__6512__auto__);};
circle.cljs$lang$maxFixedArity = 0;
circle.cljs$lang$applyTo = (function (arglist__10903){
var args__6512__auto__ = cljs.core.seq(arglist__10903);
return circle__delegate(args__6512__auto__);
});
circle.cljs$core$IFn$_invoke$arity$variadic = circle__delegate;
return circle;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.g = (function() { 
var g__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__8410_10904 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__8411_10905 = null;var count__8412_10906 = 0;var i__8413_10907 = 0;while(true){
if((i__8413_10907 < count__8412_10906))
{var arg__6514__auto___10908 = cljs.core._nth.call(null,chunk__8411_10905,i__8413_10907);a__6513__auto__.push(arg__6514__auto___10908);
{
var G__10909 = seq__8410_10904;
var G__10910 = chunk__8411_10905;
var G__10911 = count__8412_10906;
var G__10912 = (i__8413_10907 + 1);
seq__8410_10904 = G__10909;
chunk__8411_10905 = G__10910;
count__8412_10906 = G__10911;
i__8413_10907 = G__10912;
continue;
}
} else
{var temp__4092__auto___10913 = cljs.core.seq.call(null,seq__8410_10904);if(temp__4092__auto___10913)
{var seq__8410_10914__$1 = temp__4092__auto___10913;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8410_10914__$1))
{var c__5632__auto___10915 = cljs.core.chunk_first.call(null,seq__8410_10914__$1);{
var G__10916 = cljs.core.chunk_rest.call(null,seq__8410_10914__$1);
var G__10917 = c__5632__auto___10915;
var G__10918 = cljs.core.count.call(null,c__5632__auto___10915);
var G__10919 = 0;
seq__8410_10904 = G__10916;
chunk__8411_10905 = G__10917;
count__8412_10906 = G__10918;
i__8413_10907 = G__10919;
continue;
}
} else
{var arg__6514__auto___10920 = cljs.core.first.call(null,seq__8410_10914__$1);a__6513__auto__.push(arg__6514__auto___10920);
{
var G__10921 = cljs.core.next.call(null,seq__8410_10914__$1);
var G__10922 = null;
var G__10923 = 0;
var G__10924 = 0;
seq__8410_10904 = G__10921;
chunk__8411_10905 = G__10922;
count__8412_10906 = G__10923;
i__8413_10907 = G__10924;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.g.apply(null,a__6513__auto__);
};
var g = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return g__delegate.call(this,args__6512__auto__);};
g.cljs$lang$maxFixedArity = 0;
g.cljs$lang$applyTo = (function (arglist__10925){
var args__6512__auto__ = cljs.core.seq(arglist__10925);
return g__delegate(args__6512__auto__);
});
g.cljs$core$IFn$_invoke$arity$variadic = g__delegate;
return g;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.line = (function() { 
var line__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__8418_10926 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__8419_10927 = null;var count__8420_10928 = 0;var i__8421_10929 = 0;while(true){
if((i__8421_10929 < count__8420_10928))
{var arg__6514__auto___10930 = cljs.core._nth.call(null,chunk__8419_10927,i__8421_10929);a__6513__auto__.push(arg__6514__auto___10930);
{
var G__10931 = seq__8418_10926;
var G__10932 = chunk__8419_10927;
var G__10933 = count__8420_10928;
var G__10934 = (i__8421_10929 + 1);
seq__8418_10926 = G__10931;
chunk__8419_10927 = G__10932;
count__8420_10928 = G__10933;
i__8421_10929 = G__10934;
continue;
}
} else
{var temp__4092__auto___10935 = cljs.core.seq.call(null,seq__8418_10926);if(temp__4092__auto___10935)
{var seq__8418_10936__$1 = temp__4092__auto___10935;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8418_10936__$1))
{var c__5632__auto___10937 = cljs.core.chunk_first.call(null,seq__8418_10936__$1);{
var G__10938 = cljs.core.chunk_rest.call(null,seq__8418_10936__$1);
var G__10939 = c__5632__auto___10937;
var G__10940 = cljs.core.count.call(null,c__5632__auto___10937);
var G__10941 = 0;
seq__8418_10926 = G__10938;
chunk__8419_10927 = G__10939;
count__8420_10928 = G__10940;
i__8421_10929 = G__10941;
continue;
}
} else
{var arg__6514__auto___10942 = cljs.core.first.call(null,seq__8418_10936__$1);a__6513__auto__.push(arg__6514__auto___10942);
{
var G__10943 = cljs.core.next.call(null,seq__8418_10936__$1);
var G__10944 = null;
var G__10945 = 0;
var G__10946 = 0;
seq__8418_10926 = G__10943;
chunk__8419_10927 = G__10944;
count__8420_10928 = G__10945;
i__8421_10929 = G__10946;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.line.apply(null,a__6513__auto__);
};
var line = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return line__delegate.call(this,args__6512__auto__);};
line.cljs$lang$maxFixedArity = 0;
line.cljs$lang$applyTo = (function (arglist__10947){
var args__6512__auto__ = cljs.core.seq(arglist__10947);
return line__delegate(args__6512__auto__);
});
line.cljs$core$IFn$_invoke$arity$variadic = line__delegate;
return line;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.path = (function() { 
var path__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__8426_10948 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__8427_10949 = null;var count__8428_10950 = 0;var i__8429_10951 = 0;while(true){
if((i__8429_10951 < count__8428_10950))
{var arg__6514__auto___10952 = cljs.core._nth.call(null,chunk__8427_10949,i__8429_10951);a__6513__auto__.push(arg__6514__auto___10952);
{
var G__10953 = seq__8426_10948;
var G__10954 = chunk__8427_10949;
var G__10955 = count__8428_10950;
var G__10956 = (i__8429_10951 + 1);
seq__8426_10948 = G__10953;
chunk__8427_10949 = G__10954;
count__8428_10950 = G__10955;
i__8429_10951 = G__10956;
continue;
}
} else
{var temp__4092__auto___10957 = cljs.core.seq.call(null,seq__8426_10948);if(temp__4092__auto___10957)
{var seq__8426_10958__$1 = temp__4092__auto___10957;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8426_10958__$1))
{var c__5632__auto___10959 = cljs.core.chunk_first.call(null,seq__8426_10958__$1);{
var G__10960 = cljs.core.chunk_rest.call(null,seq__8426_10958__$1);
var G__10961 = c__5632__auto___10959;
var G__10962 = cljs.core.count.call(null,c__5632__auto___10959);
var G__10963 = 0;
seq__8426_10948 = G__10960;
chunk__8427_10949 = G__10961;
count__8428_10950 = G__10962;
i__8429_10951 = G__10963;
continue;
}
} else
{var arg__6514__auto___10964 = cljs.core.first.call(null,seq__8426_10958__$1);a__6513__auto__.push(arg__6514__auto___10964);
{
var G__10965 = cljs.core.next.call(null,seq__8426_10958__$1);
var G__10966 = null;
var G__10967 = 0;
var G__10968 = 0;
seq__8426_10948 = G__10965;
chunk__8427_10949 = G__10966;
count__8428_10950 = G__10967;
i__8429_10951 = G__10968;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.path.apply(null,a__6513__auto__);
};
var path = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return path__delegate.call(this,args__6512__auto__);};
path.cljs$lang$maxFixedArity = 0;
path.cljs$lang$applyTo = (function (arglist__10969){
var args__6512__auto__ = cljs.core.seq(arglist__10969);
return path__delegate(args__6512__auto__);
});
path.cljs$core$IFn$_invoke$arity$variadic = path__delegate;
return path;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.polygon = (function() { 
var polygon__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__8434_10970 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__8435_10971 = null;var count__8436_10972 = 0;var i__8437_10973 = 0;while(true){
if((i__8437_10973 < count__8436_10972))
{var arg__6514__auto___10974 = cljs.core._nth.call(null,chunk__8435_10971,i__8437_10973);a__6513__auto__.push(arg__6514__auto___10974);
{
var G__10975 = seq__8434_10970;
var G__10976 = chunk__8435_10971;
var G__10977 = count__8436_10972;
var G__10978 = (i__8437_10973 + 1);
seq__8434_10970 = G__10975;
chunk__8435_10971 = G__10976;
count__8436_10972 = G__10977;
i__8437_10973 = G__10978;
continue;
}
} else
{var temp__4092__auto___10979 = cljs.core.seq.call(null,seq__8434_10970);if(temp__4092__auto___10979)
{var seq__8434_10980__$1 = temp__4092__auto___10979;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8434_10980__$1))
{var c__5632__auto___10981 = cljs.core.chunk_first.call(null,seq__8434_10980__$1);{
var G__10982 = cljs.core.chunk_rest.call(null,seq__8434_10980__$1);
var G__10983 = c__5632__auto___10981;
var G__10984 = cljs.core.count.call(null,c__5632__auto___10981);
var G__10985 = 0;
seq__8434_10970 = G__10982;
chunk__8435_10971 = G__10983;
count__8436_10972 = G__10984;
i__8437_10973 = G__10985;
continue;
}
} else
{var arg__6514__auto___10986 = cljs.core.first.call(null,seq__8434_10980__$1);a__6513__auto__.push(arg__6514__auto___10986);
{
var G__10987 = cljs.core.next.call(null,seq__8434_10980__$1);
var G__10988 = null;
var G__10989 = 0;
var G__10990 = 0;
seq__8434_10970 = G__10987;
chunk__8435_10971 = G__10988;
count__8436_10972 = G__10989;
i__8437_10973 = G__10990;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.polygon.apply(null,a__6513__auto__);
};
var polygon = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return polygon__delegate.call(this,args__6512__auto__);};
polygon.cljs$lang$maxFixedArity = 0;
polygon.cljs$lang$applyTo = (function (arglist__10991){
var args__6512__auto__ = cljs.core.seq(arglist__10991);
return polygon__delegate(args__6512__auto__);
});
polygon.cljs$core$IFn$_invoke$arity$variadic = polygon__delegate;
return polygon;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.polyline = (function() { 
var polyline__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__8442_10992 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__8443_10993 = null;var count__8444_10994 = 0;var i__8445_10995 = 0;while(true){
if((i__8445_10995 < count__8444_10994))
{var arg__6514__auto___10996 = cljs.core._nth.call(null,chunk__8443_10993,i__8445_10995);a__6513__auto__.push(arg__6514__auto___10996);
{
var G__10997 = seq__8442_10992;
var G__10998 = chunk__8443_10993;
var G__10999 = count__8444_10994;
var G__11000 = (i__8445_10995 + 1);
seq__8442_10992 = G__10997;
chunk__8443_10993 = G__10998;
count__8444_10994 = G__10999;
i__8445_10995 = G__11000;
continue;
}
} else
{var temp__4092__auto___11001 = cljs.core.seq.call(null,seq__8442_10992);if(temp__4092__auto___11001)
{var seq__8442_11002__$1 = temp__4092__auto___11001;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8442_11002__$1))
{var c__5632__auto___11003 = cljs.core.chunk_first.call(null,seq__8442_11002__$1);{
var G__11004 = cljs.core.chunk_rest.call(null,seq__8442_11002__$1);
var G__11005 = c__5632__auto___11003;
var G__11006 = cljs.core.count.call(null,c__5632__auto___11003);
var G__11007 = 0;
seq__8442_10992 = G__11004;
chunk__8443_10993 = G__11005;
count__8444_10994 = G__11006;
i__8445_10995 = G__11007;
continue;
}
} else
{var arg__6514__auto___11008 = cljs.core.first.call(null,seq__8442_11002__$1);a__6513__auto__.push(arg__6514__auto___11008);
{
var G__11009 = cljs.core.next.call(null,seq__8442_11002__$1);
var G__11010 = null;
var G__11011 = 0;
var G__11012 = 0;
seq__8442_10992 = G__11009;
chunk__8443_10993 = G__11010;
count__8444_10994 = G__11011;
i__8445_10995 = G__11012;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.polyline.apply(null,a__6513__auto__);
};
var polyline = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return polyline__delegate.call(this,args__6512__auto__);};
polyline.cljs$lang$maxFixedArity = 0;
polyline.cljs$lang$applyTo = (function (arglist__11013){
var args__6512__auto__ = cljs.core.seq(arglist__11013);
return polyline__delegate(args__6512__auto__);
});
polyline.cljs$core$IFn$_invoke$arity$variadic = polyline__delegate;
return polyline;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.rect = (function() { 
var rect__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__8450_11014 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__8451_11015 = null;var count__8452_11016 = 0;var i__8453_11017 = 0;while(true){
if((i__8453_11017 < count__8452_11016))
{var arg__6514__auto___11018 = cljs.core._nth.call(null,chunk__8451_11015,i__8453_11017);a__6513__auto__.push(arg__6514__auto___11018);
{
var G__11019 = seq__8450_11014;
var G__11020 = chunk__8451_11015;
var G__11021 = count__8452_11016;
var G__11022 = (i__8453_11017 + 1);
seq__8450_11014 = G__11019;
chunk__8451_11015 = G__11020;
count__8452_11016 = G__11021;
i__8453_11017 = G__11022;
continue;
}
} else
{var temp__4092__auto___11023 = cljs.core.seq.call(null,seq__8450_11014);if(temp__4092__auto___11023)
{var seq__8450_11024__$1 = temp__4092__auto___11023;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8450_11024__$1))
{var c__5632__auto___11025 = cljs.core.chunk_first.call(null,seq__8450_11024__$1);{
var G__11026 = cljs.core.chunk_rest.call(null,seq__8450_11024__$1);
var G__11027 = c__5632__auto___11025;
var G__11028 = cljs.core.count.call(null,c__5632__auto___11025);
var G__11029 = 0;
seq__8450_11014 = G__11026;
chunk__8451_11015 = G__11027;
count__8452_11016 = G__11028;
i__8453_11017 = G__11029;
continue;
}
} else
{var arg__6514__auto___11030 = cljs.core.first.call(null,seq__8450_11024__$1);a__6513__auto__.push(arg__6514__auto___11030);
{
var G__11031 = cljs.core.next.call(null,seq__8450_11024__$1);
var G__11032 = null;
var G__11033 = 0;
var G__11034 = 0;
seq__8450_11014 = G__11031;
chunk__8451_11015 = G__11032;
count__8452_11016 = G__11033;
i__8453_11017 = G__11034;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.rect.apply(null,a__6513__auto__);
};
var rect = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return rect__delegate.call(this,args__6512__auto__);};
rect.cljs$lang$maxFixedArity = 0;
rect.cljs$lang$applyTo = (function (arglist__11035){
var args__6512__auto__ = cljs.core.seq(arglist__11035);
return rect__delegate(args__6512__auto__);
});
rect.cljs$core$IFn$_invoke$arity$variadic = rect__delegate;
return rect;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.svg = (function() { 
var svg__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__8458_11036 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__8459_11037 = null;var count__8460_11038 = 0;var i__8461_11039 = 0;while(true){
if((i__8461_11039 < count__8460_11038))
{var arg__6514__auto___11040 = cljs.core._nth.call(null,chunk__8459_11037,i__8461_11039);a__6513__auto__.push(arg__6514__auto___11040);
{
var G__11041 = seq__8458_11036;
var G__11042 = chunk__8459_11037;
var G__11043 = count__8460_11038;
var G__11044 = (i__8461_11039 + 1);
seq__8458_11036 = G__11041;
chunk__8459_11037 = G__11042;
count__8460_11038 = G__11043;
i__8461_11039 = G__11044;
continue;
}
} else
{var temp__4092__auto___11045 = cljs.core.seq.call(null,seq__8458_11036);if(temp__4092__auto___11045)
{var seq__8458_11046__$1 = temp__4092__auto___11045;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8458_11046__$1))
{var c__5632__auto___11047 = cljs.core.chunk_first.call(null,seq__8458_11046__$1);{
var G__11048 = cljs.core.chunk_rest.call(null,seq__8458_11046__$1);
var G__11049 = c__5632__auto___11047;
var G__11050 = cljs.core.count.call(null,c__5632__auto___11047);
var G__11051 = 0;
seq__8458_11036 = G__11048;
chunk__8459_11037 = G__11049;
count__8460_11038 = G__11050;
i__8461_11039 = G__11051;
continue;
}
} else
{var arg__6514__auto___11052 = cljs.core.first.call(null,seq__8458_11046__$1);a__6513__auto__.push(arg__6514__auto___11052);
{
var G__11053 = cljs.core.next.call(null,seq__8458_11046__$1);
var G__11054 = null;
var G__11055 = 0;
var G__11056 = 0;
seq__8458_11036 = G__11053;
chunk__8459_11037 = G__11054;
count__8460_11038 = G__11055;
i__8461_11039 = G__11056;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.svg.apply(null,a__6513__auto__);
};
var svg = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return svg__delegate.call(this,args__6512__auto__);};
svg.cljs$lang$maxFixedArity = 0;
svg.cljs$lang$applyTo = (function (arglist__11057){
var args__6512__auto__ = cljs.core.seq(arglist__11057);
return svg__delegate(args__6512__auto__);
});
svg.cljs$core$IFn$_invoke$arity$variadic = svg__delegate;
return svg;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.text = (function() { 
var text__delegate = function (args__6512__auto__){var a__6513__auto__ = [];a__6513__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6512__auto__)));
var seq__7770_11058 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6512__auto__));var chunk__7771_11059 = null;var count__7772_11060 = 0;var i__7773_11061 = 0;while(true){
if((i__7773_11061 < count__7772_11060))
{var arg__6514__auto___11062 = cljs.core._nth.call(null,chunk__7771_11059,i__7773_11061);a__6513__auto__.push(arg__6514__auto___11062);
{
var G__11063 = seq__7770_11058;
var G__11064 = chunk__7771_11059;
var G__11065 = count__7772_11060;
var G__11066 = (i__7773_11061 + 1);
seq__7770_11058 = G__11063;
chunk__7771_11059 = G__11064;
count__7772_11060 = G__11065;
i__7773_11061 = G__11066;
continue;
}
} else
{var temp__4092__auto___11067 = cljs.core.seq.call(null,seq__7770_11058);if(temp__4092__auto___11067)
{var seq__7770_11068__$1 = temp__4092__auto___11067;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7770_11068__$1))
{var c__5632__auto___11069 = cljs.core.chunk_first.call(null,seq__7770_11068__$1);{
var G__11070 = cljs.core.chunk_rest.call(null,seq__7770_11068__$1);
var G__11071 = c__5632__auto___11069;
var G__11072 = cljs.core.count.call(null,c__5632__auto___11069);
var G__11073 = 0;
seq__7770_11058 = G__11070;
chunk__7771_11059 = G__11071;
count__7772_11060 = G__11072;
i__7773_11061 = G__11073;
continue;
}
} else
{var arg__6514__auto___11074 = cljs.core.first.call(null,seq__7770_11068__$1);a__6513__auto__.push(arg__6514__auto___11074);
{
var G__11075 = cljs.core.next.call(null,seq__7770_11068__$1);
var G__11076 = null;
var G__11077 = 0;
var G__11078 = 0;
seq__7770_11058 = G__11075;
chunk__7771_11059 = G__11076;
count__7772_11060 = G__11077;
i__7773_11061 = G__11078;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.text.apply(null,a__6513__auto__);
};
var text = function (var_args){
var args__6512__auto__ = null;if (arguments.length > 0) {
  args__6512__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return text__delegate.call(this,args__6512__auto__);};
text.cljs$lang$maxFixedArity = 0;
text.cljs$lang$applyTo = (function (arglist__11079){
var args__6512__auto__ = cljs.core.seq(arglist__11079);
return text__delegate(args__6512__auto__);
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
lt.plugins.elm_light.autocompleter.handle_keypress = (function handle_keypress(p__7488,ev){var map__7491 = p__7488;var map__7491__$1 = ((cljs.core.seq_QMARK_.call(null,map__7491))?cljs.core.apply.call(null,cljs.core.hash_map,map__7491):map__7491);var props = map__7491__$1;var on_cancel = cljs.core.get.call(null,map__7491__$1,new cljs.core.Keyword(null,"on-cancel","on-cancel",600765850));var on_select = cljs.core.get.call(null,map__7491__$1,new cljs.core.Keyword(null,"on-select","on-select",1062468636));var on_down = cljs.core.get.call(null,map__7491__$1,new cljs.core.Keyword(null,"on-down","on-down",3936419650));var on_up = cljs.core.get.call(null,map__7491__$1,new cljs.core.Keyword(null,"on-up","on-up",1119739067));var kk = ev.which;var G__7492 = kk;if(cljs.core._EQ_.call(null,27,G__7492))
{ev.preventDefault();
ev.target.value = "";
return on_cancel.call(null);
} else
{if(cljs.core._EQ_.call(null,13,G__7492))
{ev.preventDefault();
var temp__4092__auto___7508 = lt.plugins.elm_light.autocompleter.find_active.call(null,new cljs.core.Keyword(null,"items","items",1114430258).cljs$core$IFn$_invoke$arity$1(props));if(cljs.core.truth_(temp__4092__auto___7508))
{var active_7509 = temp__4092__auto___7508;ev.target.value = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(active_7509);
} else
{}
return on_select.call(null);
} else
{if(cljs.core._EQ_.call(null,40,G__7492))
{ev.preventDefault();
return on_down.call(null);
} else
{if(cljs.core._EQ_.call(null,38,G__7492))
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
return (function (p1__7493_SHARP_){return "autocomplete-dropdown-item row".concat((cljs.core.truth_(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(p1__7493_SHARP_))?" autocomplete-active":""));
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
lt.plugins.elm_light.autocompleter.Adder = quiescent.component.call(null,(function (p__7494){var map__7495 = p__7494;var map__7495__$1 = ((cljs.core.seq_QMARK_.call(null,map__7495))?cljs.core.apply.call(null,cljs.core.hash_map,map__7495):map__7495);var props = map__7495__$1;var disabled = cljs.core.get.call(null,map__7495__$1,new cljs.core.Keyword(null,"disabled","disabled",1284845038));var on_add_package = cljs.core.get.call(null,map__7495__$1,new cljs.core.Keyword(null,"on-add-package","on-add-package",3601701790));return quiescent.dom.button.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",1004015509),"btn",new cljs.core.Keyword(null,"disabled","disabled",1284845038),disabled,new cljs.core.Keyword(null,"onClick","onClick",3956969051),((function (map__7495,map__7495__$1,props,disabled,on_add_package){
return (function (){return on_add_package.call(null);
});})(map__7495,map__7495__$1,props,disabled,on_add_package))
], null),"Add package");
}));
/**
* 
*/
lt.plugins.elm_light.autocompleter.Versions = quiescent.component.call(null,(function (props){return cljs.core.apply.call(null,quiescent.dom.select,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",1004015509),"versions",new cljs.core.Keyword(null,"value","value",1125876963),new cljs.core.Keyword(null,"version","version",1365512266).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"onChange","onChange",2050678241),(function (p1__7496_SHARP_){return new cljs.core.Keyword(null,"on-change-version","on-change-version",822058203).cljs$core$IFn$_invoke$arity$1(props).call(null,p1__7496_SHARP_.target.value);
})], null),cljs.core.map.call(null,(function (p1__7497_SHARP_){return quiescent.dom.option.call(null,cljs.core.PersistentArrayMap.EMPTY,p1__7497_SHARP_);
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
clojure.walk.keywordize_keys = (function keywordize_keys(m){var f = (function (p__11354){var vec__11355 = p__11354;var k = cljs.core.nth.call(null,vec__11355,0,null);var v = cljs.core.nth.call(null,vec__11355,1,null);if(typeof k === 'string')
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
clojure.walk.stringify_keys = (function stringify_keys(m){var f = (function (p__11358){var vec__11359 = p__11358;var k = cljs.core.nth.call(null,vec__11359,0,null);var v = cljs.core.nth.call(null,vec__11359,1,null);if((k instanceof cljs.core.Keyword))
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
goog.require('lt.objs.plugins');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor');
goog.require('lt.objs.files');
goog.require('lt.objs.files');
lt.plugins.elm_light.utils.elm_plugin_dir = lt.objs.plugins.find_plugin.call(null,"elm-light");
lt.plugins.elm_light.utils.str_contains = (function str_contains(s,v){return (s.indexOf(v) > -1);
});
lt.plugins.elm_light.utils.find_symbol = (function find_symbol(ed,pos){var curr_tok = lt.objs.editor.__GT_token.call(null,ed,pos);var G__11382 = new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(curr_tok);if(cljs.core._EQ_.call(null,"variable",G__11382))
{return [cljs.core.str(find_symbol.call(null,ed,cljs.core.assoc.call(null,pos,new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(curr_tok)))),cljs.core.str(new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(curr_tok))].join('');
} else
{if(cljs.core._EQ_.call(null,"qualifier",G__11382))
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
return (function (p__11279){var vec__11280 = p__11279;var k = cljs.core.nth.call(null,vec__11280,0,null);var v = cljs.core.nth.call(null,vec__11280,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.elm_light.utils.nskw__GT_name.call(null,k),v], null);
});})(pkg_file))
,deps)),pkg);
});})(pkg_file))
)));
});
lt.plugins.elm_light.packages.get_project_deps = (function get_project_deps(project_path){var pkg_json = lt.objs.files.join.call(null,project_path,"elm-package.json");var deps_json = lt.objs.files.join.call(null,project_path,"elm-stuff","exact-dependencies.json");return cljs.core.mapv.call(null,((function (pkg_json,deps_json){
return (function (p__11287){var vec__11288 = p__11287;var _ = cljs.core.nth.call(null,vec__11288,0,null);var vs = cljs.core.nth.call(null,vec__11288,1,null);return cljs.core.apply.call(null,cljs.core.merge,vs);
});})(pkg_json,deps_json))
,cljs.core.group_by.call(null,new cljs.core.Keyword(null,"package","package",4501809080),cljs.core.concat.call(null,cljs.core.mapv.call(null,((function (pkg_json,deps_json){
return (function (p__11289){var vec__11290 = p__11289;var k = cljs.core.nth.call(null,vec__11290,0,null);var v = cljs.core.nth.call(null,vec__11290,1,null);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"package","package",4501809080),lt.plugins.elm_light.utils.nskw__GT_name.call(null,k),new cljs.core.Keyword(null,"exact","exact",1110851185),v], null);
});})(pkg_json,deps_json))
,lt.plugins.elm_light.utils.parse_json_file.call(null,deps_json)),cljs.core.mapv.call(null,((function (pkg_json,deps_json){
return (function (p__11291){var vec__11292 = p__11291;var k = cljs.core.nth.call(null,vec__11292,0,null);var v = cljs.core.nth.call(null,vec__11292,1,null);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"package","package",4501809080),lt.plugins.elm_light.utils.nskw__GT_name.call(null,k),new cljs.core.Keyword(null,"range","range",1122184367),v], null);
});})(pkg_json,deps_json))
,new cljs.core.Keyword(null,"dependencies","dependencies",1517678747).cljs$core$IFn$_invoke$arity$1(lt.plugins.elm_light.utils.parse_json_file.call(null,pkg_json))))));
});
lt.plugins.elm_light.packages.project_wrapper = (function project_wrapper(this$){var e__6277__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.elm","div.elm",2686466363),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"project-packages-wrapper"], null),"Retrieving project package info..."], null)], null));var seq__11299_11324 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__11300_11325 = null;var count__11301_11326 = 0;var i__11302_11327 = 0;while(true){
if((i__11302_11327 < count__11301_11326))
{var vec__11303_11328 = cljs.core._nth.call(null,chunk__11300_11325,i__11302_11327);var ev__6278__auto___11329 = cljs.core.nth.call(null,vec__11303_11328,0,null);var func__6279__auto___11330 = cljs.core.nth.call(null,vec__11303_11328,1,null);lt.util.dom.on.call(null,e__6277__auto__,ev__6278__auto___11329,func__6279__auto___11330);
{
var G__11331 = seq__11299_11324;
var G__11332 = chunk__11300_11325;
var G__11333 = count__11301_11326;
var G__11334 = (i__11302_11327 + 1);
seq__11299_11324 = G__11331;
chunk__11300_11325 = G__11332;
count__11301_11326 = G__11333;
i__11302_11327 = G__11334;
continue;
}
} else
{var temp__4092__auto___11335 = cljs.core.seq.call(null,seq__11299_11324);if(temp__4092__auto___11335)
{var seq__11299_11336__$1 = temp__4092__auto___11335;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11299_11336__$1))
{var c__5632__auto___11337 = cljs.core.chunk_first.call(null,seq__11299_11336__$1);{
var G__11338 = cljs.core.chunk_rest.call(null,seq__11299_11336__$1);
var G__11339 = c__5632__auto___11337;
var G__11340 = cljs.core.count.call(null,c__5632__auto___11337);
var G__11341 = 0;
seq__11299_11324 = G__11338;
chunk__11300_11325 = G__11339;
count__11301_11326 = G__11340;
i__11302_11327 = G__11341;
continue;
}
} else
{var vec__11304_11342 = cljs.core.first.call(null,seq__11299_11336__$1);var ev__6278__auto___11343 = cljs.core.nth.call(null,vec__11304_11342,0,null);var func__6279__auto___11344 = cljs.core.nth.call(null,vec__11304_11342,1,null);lt.util.dom.on.call(null,e__6277__auto__,ev__6278__auto___11343,func__6279__auto___11344);
{
var G__11345 = cljs.core.next.call(null,seq__11299_11336__$1);
var G__11346 = null;
var G__11347 = 0;
var G__11348 = 0;
seq__11299_11324 = G__11345;
chunk__11300_11325 = G__11346;
count__11301_11326 = G__11347;
i__11302_11327 = G__11348;
continue;
}
}
} else
{}
}
break;
}
return e__6277__auto__;
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.packages","elm-packages","lt.plugins.elm-light.packages/elm-packages",4552372902),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elm.packages","elm.packages",3931311271),null], null), null),new cljs.core.Keyword(null,"label","label",1116631654),"Elm project packages",new cljs.core.Keyword(null,"name","name",1017277949),"Elm project packages",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){lt.plugins.elm_light.packages.fetch_packages.call(null,(function (p1__11305_SHARP_){return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"all-packages","all-packages",1123981067),p1__11305_SHARP_], null));
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
lt.plugins.elm_light.packages.idx_active = (function idx_active(items){return cljs.core.first.call(null,cljs.core.keep_indexed.call(null,(function (p1__11307_SHARP_,p2__11306_SHARP_){if(cljs.core.truth_(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(p2__11306_SHARP_)))
{return p1__11307_SHARP_;
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
lt.plugins.elm_light.packages.on_pkg_sel = (function on_pkg_sel(){var items_11349 = new cljs.core.Keyword(null,"ac-packages","ac-packages",1548109226).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.elm_light.packages.elm_packages));var temp__4090__auto___11350 = lt.plugins.elm_light.packages.idx_active.call(null,items_11349);if(cljs.core.truth_(temp__4090__auto___11350))
{var idx_11351 = temp__4090__auto___11350;lt.object.assoc_in_BANG_.call(null,lt.plugins.elm_light.packages.elm_packages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ac-versions","ac-versions",3107155800)], null),new cljs.core.Keyword(null,"versions","versions",3323818509).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,items_11349,idx_11351)));
lt.object.assoc_in_BANG_.call(null,lt.plugins.elm_light.packages.elm_packages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ac-version","ac-version",2051259807)], null),cljs.core.first.call(null,new cljs.core.Keyword(null,"versions","versions",3323818509).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,items_11349,idx_11351))));
lt.object.assoc_in_BANG_.call(null,lt.plugins.elm_light.packages.elm_packages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ac-package","ac-package",892589325)], null),new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,items_11349,idx_11351)));
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
return (function (p1__11308_SHARP_){if(cljs.core._EQ_.call(null,p1__11308_SHARP_,0))
{lt.objs.notifos.done_working.call(null);
} else
{lt.objs.notifos.set_msg_BANG_.call(null,"Error installing elm package",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),"error",new cljs.core.Keyword(null,"timeout","timeout",3994960083),5000], null));
}
return lt.object.raise.call(null,lt.plugins.elm_light.packages.elm_packages,new cljs.core.Keyword(null,"elm.show.project.packages","elm.show.project.packages",3385102109),new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.elm_light.packages.elm_packages)));
});})(proc,args))
);
proc.stdout.on("data",((function (proc,args){
return (function (p1__11309_SHARP_){return lt.objs.notifos.msg_STAR_.call(null,[cljs.core.str("Package install: "),cljs.core.str(p1__11309_SHARP_)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"timeout","timeout",3994960083),5000], null));
});})(proc,args))
);
return proc.stderr.on("data",((function (proc,args){
return (function (p1__11310_SHARP_){return lt.objs.console.error.call(null,[cljs.core.str(p1__11310_SHARP_)].join(''));
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
lt.plugins.elm_light.packages.PackageRow = quiescent.component.call(null,(function (p__11311){var map__11312 = p__11311;var map__11312__$1 = ((cljs.core.seq_QMARK_.call(null,map__11312))?cljs.core.apply.call(null,cljs.core.hash_map,map__11312):map__11312);var on_browse = cljs.core.get.call(null,map__11312__$1,new cljs.core.Keyword(null,"on-browse","on-browse",587885994));var on_remove = cljs.core.get.call(null,map__11312__$1,new cljs.core.Keyword(null,"on-remove","on-remove",1033879460));var exact = cljs.core.get.call(null,map__11312__$1,new cljs.core.Keyword(null,"exact","exact",1110851185));var range = cljs.core.get.call(null,map__11312__$1,new cljs.core.Keyword(null,"range","range",1122184367));var package$ = cljs.core.get.call(null,map__11312__$1,new cljs.core.Keyword(null,"package","package",4501809080));return quiescent.dom.tr.call(null,cljs.core.PersistentArrayMap.EMPTY,quiescent.dom.td.call(null,cljs.core.PersistentArrayMap.EMPTY,(cljs.core.truth_((function (){var and__4872__auto__ = package$;if(cljs.core.truth_(and__4872__auto__))
{return exact;
} else
{return and__4872__auto__;
}
})())?quiescent.dom.span.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",1004015509),"link",new cljs.core.Keyword(null,"onClick","onClick",3956969051),((function (map__11312,map__11312__$1,on_browse,on_remove,exact,range,package$){
return (function (){return on_browse.call(null,package$,exact);
});})(map__11312,map__11312__$1,on_browse,on_remove,exact,range,package$))
], null),package$):package$)),quiescent.dom.td.call(null,cljs.core.PersistentArrayMap.EMPTY,range),quiescent.dom.td.call(null,cljs.core.PersistentArrayMap.EMPTY,exact),quiescent.dom.td.call(null,cljs.core.PersistentArrayMap.EMPTY,(cljs.core.truth_(range)?quiescent.dom.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",3956969051),((function (map__11312,map__11312__$1,on_browse,on_remove,exact,range,package$){
return (function (){return on_remove.call(null,package$);
});})(map__11312,map__11312__$1,on_browse,on_remove,exact,range,package$))
], null),"remove"):null)));
}));
/**
* 
*/
lt.plugins.elm_light.packages.PackageTable = quiescent.component.call(null,(function (props){return quiescent.dom.table.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",1004015509),"package-table"], null),quiescent.dom.thead.call(null,cljs.core.PersistentArrayMap.EMPTY,quiescent.dom.tr.call(null,cljs.core.PersistentArrayMap.EMPTY,quiescent.dom.th.call(null,cljs.core.PersistentArrayMap.EMPTY,"Package"),quiescent.dom.th.call(null,cljs.core.PersistentArrayMap.EMPTY,"Range"),quiescent.dom.th.call(null,cljs.core.PersistentArrayMap.EMPTY,"Exact"),quiescent.dom.th.call(null,cljs.core.PersistentArrayMap.EMPTY,""))),cljs.core.apply.call(null,quiescent.dom.tbody,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__11313_SHARP_){return lt.plugins.elm_light.packages.PackageRow.call(null,cljs.core.assoc.call(null,p1__11313_SHARP_,new cljs.core.Keyword(null,"on-remove","on-remove",1033879460),new cljs.core.Keyword(null,"on-remove","on-remove",1033879460).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"on-browse","on-browse",587885994),new cljs.core.Keyword(null,"on-browse","on-browse",587885994).cljs$core$IFn$_invoke$arity$1(props)));
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
var G__11360 = (line - 1);
line = G__11360;
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
var G__11361 = (line + 1);
line = G__11361;
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
var G__11362 = (line - 1);
line = G__11362;
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
lt.plugins.elm_light.clients.harbor = require("harbor").call(null,3000,4000);
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
return (function (err){return cljs.core.println.call(null,[cljs.core.str("Error from runner: "),cljs.core.str(err)].join(''));
});})(worker))
);
worker.on("message",((function (worker){
return (function (p1__11133_SHARP_){return lt.plugins.elm_light.clients.on_elm_message.call(null,client,p1__11133_SHARP_);
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
lt.plugins.elm_light.clients.start_elm_client = (function start_elm_client(p__11134){var map__11136 = p__11134;var map__11136__$1 = ((cljs.core.seq_QMARK_.call(null,map__11136))?cljs.core.apply.call(null,cljs.core.hash_map,map__11136):map__11136);var props = map__11136__$1;var client = cljs.core.get.call(null,map__11136__$1,new cljs.core.Keyword(null,"client","client",3951159101));var proj_path = cljs.core.get.call(null,map__11136__$1,new cljs.core.Keyword(null,"proj-path","proj-path",4362692615));var path = cljs.core.get.call(null,map__11136__$1,new cljs.core.Keyword(null,"path","path",1017337751));lt.objs.notifos.working.call(null,"Connecting..");
return lt.plugins.elm_light.clients.claim_reactor_port.call(null,proj_path,((function (map__11136,map__11136__$1,props,client,proj_path,path){
return (function (_,port){var worker = lt.plugins.elm_light.clients.start_elm_worker.call(null,proj_path,port,client);lt.object.merge_BANG_.call(null,client,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1017277949),lt.objs.files.basename.call(null,proj_path),new cljs.core.Keyword(null,"dir","dir",1014003711),proj_path,new cljs.core.Keyword(null,"reactor-port","reactor-port",4649590590),port,new cljs.core.Keyword(null,"worker","worker",4526786288),worker,new cljs.core.Keyword(null,"commands","commands",4706336250),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"editor.elm.lint","editor.elm.lint",1086056222),null,new cljs.core.Keyword(null,"editor.elm.make","editor.elm.make",1086078217),null,new cljs.core.Keyword(null,"editor.eval.elm","editor.eval.elm",1083015975),null,new cljs.core.Keyword(null,"editor.elm.hint","editor.elm.hint",1085937058),null,new cljs.core.Keyword(null,"elm.repl.restart","elm.repl.restart",2931654218),null,new cljs.core.Keyword(null,"docs.elm.search","docs.elm.search",737241333),null,new cljs.core.Keyword(null,"editor.elm.doc","editor.elm.doc",1570413537),null], null), null)], null));
return lt.object.add_behavior_BANG_.call(null,client,new cljs.core.Keyword("lt.plugins.elm-light.clients","send!","lt.plugins.elm-light.clients/send!",867013595));
});})(map__11136,map__11136__$1,props,client,proj_path,path))
);
});
lt.plugins.elm_light.clients.try_connect = (function try_connect(p__11137){var map__11139 = p__11137;var map__11139__$1 = ((cljs.core.seq_QMARK_.call(null,map__11139))?cljs.core.apply.call(null,cljs.core.hash_map,map__11139):map__11139);var props = map__11139__$1;var info = cljs.core.get.call(null,map__11139__$1,new cljs.core.Keyword(null,"info","info",1017141280));var path = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(info);var proj_path = lt.plugins.elm_light.utils.project_path.call(null,path);var client = lt.objs.clients.client_BANG_.call(null,new cljs.core.Keyword(null,"elm-client","elm-client",1622336068));if(cljs.core.truth_(proj_path))
{lt.plugins.elm_light.clients.start_elm_client.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",1017337751),path,new cljs.core.Keyword(null,"proj-path","proj-path",4362692615),proj_path,new cljs.core.Keyword(null,"client","client",3951159101),client], null));
} else
{lt.objs.notifos.done_working.call(null);
lt.objs.notifos.set_msg_BANG_.call(null,[cljs.core.str("Couldn't find a elm-package.json in any parent of path: "),cljs.core.str(path)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
lt.objs.clients.rem_BANG_.call(null,client);
}
return client;
});
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
lt.plugins.elm_light.__GT_lt_range = (function __GT_lt_range(p__11383){var map__11385 = p__11383;var map__11385__$1 = ((cljs.core.seq_QMARK_.call(null,map__11385))?cljs.core.apply.call(null,cljs.core.hash_map,map__11385):map__11385);var end = cljs.core.get.call(null,map__11385__$1,new cljs.core.Keyword(null,"end","end",1014004813));var start = cljs.core.get.call(null,map__11385__$1,new cljs.core.Keyword(null,"start","start",1123661780));return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1017056028),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",1013907415),(new cljs.core.Keyword(null,"column","column",3954034376).cljs$core$IFn$_invoke$arity$1(start) - 1),new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(start) - 1)], null),new cljs.core.Keyword(null,"to","to",1013907949),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",1013907415),(new cljs.core.Keyword(null,"column","column",3954034376).cljs$core$IFn$_invoke$arity$1(end) - 1),new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(end) - 1)], null)], null);
});
lt.plugins.elm_light.display_make_results = (function display_make_results(ed,res,path){lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"clear-linter-results!","clear-linter-results!",4528495642));
if(cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__11386_SHARP_){return cljs.core._EQ_.call(null,"error",new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(p1__11386_SHARP_));
}),res)))
{lt.objs.notifos.set_msg_BANG_.call(null,"Elm make returned errors; check you editor or the console for details",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
} else
{}
var seq__11395 = cljs.core.seq.call(null,res);var chunk__11396 = null;var count__11397 = 0;var i__11398 = 0;while(true){
if((i__11398 < count__11397))
{var map__11399 = cljs.core._nth.call(null,chunk__11396,i__11398);var map__11399__$1 = ((cljs.core.seq_QMARK_.call(null,map__11399))?cljs.core.apply.call(null,cljs.core.hash_map,map__11399):map__11399);var tag = cljs.core.get.call(null,map__11399__$1,new cljs.core.Keyword(null,"tag","tag",1014018828));var subregion = cljs.core.get.call(null,map__11399__$1,new cljs.core.Keyword(null,"subregion","subregion",1501636774));var region = cljs.core.get.call(null,map__11399__$1,new cljs.core.Keyword(null,"region","region",4374076006));var details = cljs.core.get.call(null,map__11399__$1,new cljs.core.Keyword(null,"details","details",2571625908));var overview = cljs.core.get.call(null,map__11399__$1,new cljs.core.Keyword(null,"overview","overview",1544020203));var type = cljs.core.get.call(null,map__11399__$1,new cljs.core.Keyword(null,"type","type",1017479852));var file = cljs.core.get.call(null,map__11399__$1,new cljs.core.Keyword(null,"file","file",1017047278));var map__11400_11411 = lt.plugins.elm_light.__GT_lt_range.call(null,region);var map__11400_11412__$1 = ((cljs.core.seq_QMARK_.call(null,map__11400_11411))?cljs.core.apply.call(null,cljs.core.hash_map,map__11400_11411):map__11400_11411);var to_11413 = cljs.core.get.call(null,map__11400_11412__$1,new cljs.core.Keyword(null,"to","to",1013907949));var from_11414 = cljs.core.get.call(null,map__11400_11412__$1,new cljs.core.Keyword(null,"from","from",1017056028));var msg_11415 = [cljs.core.str(overview),cljs.core.str("\n"),cljs.core.str(lt.plugins.elm_light.colorize_msg.call(null,details))].join('');if((cljs.core._EQ_.call(null,path,file)) && (cljs.core._EQ_.call(null,type,"warning")))
{lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"linter-result!","linter-result!",4482067001),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",1124275658),tag,new cljs.core.Keyword(null,"details","details",2571625908),msg_11415,new cljs.core.Keyword(null,"category","category",1064415344),new cljs.core.Keyword(null,"warning","warning",2138350350),new cljs.core.Keyword(null,"code-range","code-range",3297446095),lt.plugins.elm_light.__GT_lt_range.call(null,(function (){var or__4884__auto__ = subregion;if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return region;
}
})())], null));
} else
{if((cljs.core._EQ_.call(null,path,file)) && (cljs.core._EQ_.call(null,type,"error")))
{lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"linter-result!","linter-result!",4482067001),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"titshle","titshle",4001834783),tag,new cljs.core.Keyword(null,"details","details",2571625908),msg_11415,new cljs.core.Keyword(null,"category","category",1064415344),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"code-range","code-range",3297446095),lt.plugins.elm_light.__GT_lt_range.call(null,(function (){var or__4884__auto__ = subregion;if(cljs.core.truth_(or__4884__auto__))
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
var G__11416 = seq__11395;
var G__11417 = chunk__11396;
var G__11418 = count__11397;
var G__11419 = (i__11398 + 1);
seq__11395 = G__11416;
chunk__11396 = G__11417;
count__11397 = G__11418;
i__11398 = G__11419;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__11395);if(temp__4092__auto__)
{var seq__11395__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11395__$1))
{var c__5632__auto__ = cljs.core.chunk_first.call(null,seq__11395__$1);{
var G__11420 = cljs.core.chunk_rest.call(null,seq__11395__$1);
var G__11421 = c__5632__auto__;
var G__11422 = cljs.core.count.call(null,c__5632__auto__);
var G__11423 = 0;
seq__11395 = G__11420;
chunk__11396 = G__11421;
count__11397 = G__11422;
i__11398 = G__11423;
continue;
}
} else
{var map__11401 = cljs.core.first.call(null,seq__11395__$1);var map__11401__$1 = ((cljs.core.seq_QMARK_.call(null,map__11401))?cljs.core.apply.call(null,cljs.core.hash_map,map__11401):map__11401);var tag = cljs.core.get.call(null,map__11401__$1,new cljs.core.Keyword(null,"tag","tag",1014018828));var subregion = cljs.core.get.call(null,map__11401__$1,new cljs.core.Keyword(null,"subregion","subregion",1501636774));var region = cljs.core.get.call(null,map__11401__$1,new cljs.core.Keyword(null,"region","region",4374076006));var details = cljs.core.get.call(null,map__11401__$1,new cljs.core.Keyword(null,"details","details",2571625908));var overview = cljs.core.get.call(null,map__11401__$1,new cljs.core.Keyword(null,"overview","overview",1544020203));var type = cljs.core.get.call(null,map__11401__$1,new cljs.core.Keyword(null,"type","type",1017479852));var file = cljs.core.get.call(null,map__11401__$1,new cljs.core.Keyword(null,"file","file",1017047278));var map__11402_11424 = lt.plugins.elm_light.__GT_lt_range.call(null,region);var map__11402_11425__$1 = ((cljs.core.seq_QMARK_.call(null,map__11402_11424))?cljs.core.apply.call(null,cljs.core.hash_map,map__11402_11424):map__11402_11424);var to_11426 = cljs.core.get.call(null,map__11402_11425__$1,new cljs.core.Keyword(null,"to","to",1013907949));var from_11427 = cljs.core.get.call(null,map__11402_11425__$1,new cljs.core.Keyword(null,"from","from",1017056028));var msg_11428 = [cljs.core.str(overview),cljs.core.str("\n"),cljs.core.str(lt.plugins.elm_light.colorize_msg.call(null,details))].join('');if((cljs.core._EQ_.call(null,path,file)) && (cljs.core._EQ_.call(null,type,"warning")))
{lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"linter-result!","linter-result!",4482067001),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",1124275658),tag,new cljs.core.Keyword(null,"details","details",2571625908),msg_11428,new cljs.core.Keyword(null,"category","category",1064415344),new cljs.core.Keyword(null,"warning","warning",2138350350),new cljs.core.Keyword(null,"code-range","code-range",3297446095),lt.plugins.elm_light.__GT_lt_range.call(null,(function (){var or__4884__auto__ = subregion;if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return region;
}
})())], null));
} else
{if((cljs.core._EQ_.call(null,path,file)) && (cljs.core._EQ_.call(null,type,"error")))
{lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"linter-result!","linter-result!",4482067001),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"titshle","titshle",4001834783),tag,new cljs.core.Keyword(null,"details","details",2571625908),msg_11428,new cljs.core.Keyword(null,"category","category",1064415344),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"code-range","code-range",3297446095),lt.plugins.elm_light.__GT_lt_range.call(null,(function (){var or__4884__auto__ = subregion;if(cljs.core.truth_(or__4884__auto__))
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
var G__11429 = cljs.core.next.call(null,seq__11395__$1);
var G__11430 = null;
var G__11431 = 0;
var G__11432 = 0;
seq__11395 = G__11429;
chunk__11396 = G__11430;
count__11397 = G__11431;
i__11398 = G__11432;
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
lt.plugins.elm_light.__BEH__trigger_update_hints = (function __BEH__trigger_update_hints(ed,res){var temp__4092__auto__ = new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));if(cljs.core.truth_(temp__4092__auto__))
{var default_client = temp__4092__auto__;if(cljs.core.truth_(cljs.core.deref.call(null,default_client)))
{var info = new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed));var command = new cljs.core.Keyword(null,"editor.elm.hint","editor.elm.hint",1085937058);var token = new cljs.core.Keyword("lt.plugins.elm-light","token","lt.plugins.elm-light/token",1134194276).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed));return lt.objs.clients.send.call(null,lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),command,new cljs.core.Keyword(null,"info","info",1017141280),info,new cljs.core.Keyword(null,"origin","origin",4300251800),ed,new cljs.core.Keyword(null,"create","create",3956577390),lt.plugins.elm_light.clients.try_connect], null)),command,cljs.core.assoc.call(null,info,new cljs.core.Keyword(null,"token","token",1124445547),token),new cljs.core.Keyword(null,"only","only",1017320222),ed);
} else
{return null;
}
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light","trigger-update-hints","lt.plugins.elm-light/trigger-update-hints",4259532200),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.__BEH__trigger_update_hints,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.elm.hints.update!","editor.elm.hints.update!",2726958399),null], null), null),new cljs.core.Keyword(null,"debounce","debounce",1556599227),100);
lt.plugins.elm_light.create_hints = (function create_hints(completions){return cljs.core.map.call(null,(function (p1__11403_SHARP_){return {"text": new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(p1__11403_SHARP_), "completion": new cljs.core.Keyword(null,"completion","completion",4767668046).cljs$core$IFn$_invoke$arity$1(p1__11403_SHARP_)};
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
lt.plugins.elm_light.__BEH__eval_BANG_ = (function __BEH__eval_BANG_(this$,event){var map__11405 = event;var map__11405__$1 = ((cljs.core.seq_QMARK_.call(null,map__11405))?cljs.core.apply.call(null,cljs.core.hash_map,map__11405):map__11405);var origin = cljs.core.get.call(null,map__11405__$1,new cljs.core.Keyword(null,"origin","origin",4300251800));var info = cljs.core.get.call(null,map__11405__$1,new cljs.core.Keyword(null,"info","info",1017141280));lt.objs.notifos.working.call(null,"Evaluating elm...");
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
lt.plugins.elm_light.__BEH__repl_restart_BANG_ = (function __BEH__repl_restart_BANG_(p__11406){var map__11408 = p__11406;var map__11408__$1 = ((cljs.core.seq_QMARK_.call(null,map__11408))?cljs.core.apply.call(null,cljs.core.hash_map,map__11408):map__11408);var ed = map__11408__$1;var info = cljs.core.get.call(null,map__11408__$1,new cljs.core.Keyword(null,"info","info",1017141280));var temp__4092__auto__ = new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));if(cljs.core.truth_(temp__4092__auto__))
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
var b_11433 = (function (){var or__4884__auto__ = cljs.core.first.call(null,lt.object.by_tag.call(null,new cljs.core.Keyword(null,"browser","browser",1164844698)));if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return lt.objs.browser.add.call(null);
}
})();var get_url_11434 = ((function (b_11433,path,client){
return (function (){return [cljs.core.str("http://localhost:"),cljs.core.str(new cljs.core.Keyword(null,"reactor-port","reactor-port",4649590590).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client))),cljs.core.str(path),cljs.core.str((cljs.core.truth_(debug_QMARK_)?"?debug":""))].join('');
});})(b_11433,path,client))
;if(cljs.core.truth_(new cljs.core.Keyword(null,"connected","connected",4729661051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client))))
{lt.object.raise.call(null,b_11433,new cljs.core.Keyword(null,"navigate!","navigate!",1766726722),get_url_11434.call(null));
} else
{lt.util.js.wait.call(null,100,((function (b_11433,get_url_11434,path,client){
return (function (){return lt.object.raise.call(null,b_11433,new cljs.core.Keyword(null,"navigate!","navigate!",1766726722),get_url_11434.call(null));
});})(b_11433,get_url_11434,path,client))
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
lt.plugins.elm_light.__BEH__elm_format = (function __BEH__elm_format(ed){var temp__4092__auto__ = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));if(cljs.core.truth_(temp__4092__auto__))
{var path = temp__4092__auto__;var pos = lt.objs.editor.__GT_cursor.call(null,ed);var cmd = [cljs.core.str("elm-format --yes "),cljs.core.str(path)].join('');try{require("child_process").execSync(cmd,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cwd","cwd",1014003170),lt.plugins.elm_light.utils.project_path.call(null,path),new cljs.core.Keyword(null,"stdio","stdio",1123664379),"pipe"], null)));
}catch (e11410){var e_11435 = e11410;lt.objs.notifos.set_msg_BANG_.call(null,"Elm format reported errors. See console for details",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),"error",new cljs.core.Keyword(null,"timeout","timeout",3994960083),5000], null));
lt.objs.console.error.call(null,e_11435.message);
}lt.objs.editor.pool.reload.call(null,ed);
return lt.objs.editor.move_cursor.call(null,ed,pos);
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light","elm-format","lt.plugins.elm-light/elm-format",513554791),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.__BEH__elm_format,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elm.format","elm.format",2598773169),null], null), null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"elm-format","elm-format",1711269488),new cljs.core.Keyword(null,"desc","desc",1016984067),"Elm: Format file",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"elm.format","elm.format",2598773169));
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
lt.plugins.elm_light.linter.status_class = (function status_class(p__11140){var map__11142 = p__11140;var map__11142__$1 = ((cljs.core.seq_QMARK_.call(null,map__11142))?cljs.core.apply.call(null,cljs.core.hash_map,map__11142):map__11142);var warnings = cljs.core.get.call(null,map__11142__$1,new cljs.core.Keyword(null,"warnings","warnings",1511995337));var errors = cljs.core.get.call(null,map__11142__$1,new cljs.core.Keyword(null,"errors","errors",4014236381));if((errors > 0))
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
lt.plugins.elm_light.linter.status_text = (function status_text(p__11143){var map__11145 = p__11143;var map__11145__$1 = ((cljs.core.seq_QMARK_.call(null,map__11145))?cljs.core.apply.call(null,cljs.core.hash_map,map__11145):map__11145);var warnings = cljs.core.get.call(null,map__11145__$1,new cljs.core.Keyword(null,"warnings","warnings",1511995337));var errors = cljs.core.get.call(null,map__11145__$1,new cljs.core.Keyword(null,"errors","errors",4014236381));return [cljs.core.str("Lint status: "),cljs.core.str(errors),cljs.core.str("/"),cljs.core.str(warnings)].join('');
});
lt.plugins.elm_light.linter.__GT_status_ui = (function __GT_status_ui(p__11146){var map__11148 = p__11146;var map__11148__$1 = ((cljs.core.seq_QMARK_.call(null,map__11148))?cljs.core.apply.call(null,cljs.core.hash_map,map__11148):map__11148);var lint_summary = cljs.core.get.call(null,map__11148__$1,new cljs.core.Keyword(null,"lint-summary","lint-summary",2275048270));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("lint-status "),cljs.core.str(lt.plugins.elm_light.linter.status_class.call(null,lint_summary))].join('')], null),lt.plugins.elm_light.linter.status_text.call(null,lint_summary)], null);
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
return (function (p__11151){var vec__11152 = p__11151;var k = cljs.core.nth.call(null,vec__11152,0,null);var v = cljs.core.nth.call(null,vec__11152,1,null);return new cljs.core.PersistentArrayMap.fromArray([k,cljs.core.count.call(null,v)], true, false);
});})(results,temp__4090__auto__))
,cljs.core.group_by.call(null,new cljs.core.Keyword(null,"category","category",1064415344),cljs.core.map.call(null,new cljs.core.Keyword(null,"result","result",4374444943),cljs.core.vals.call(null,results)))));
} else
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",1110689146),0,new cljs.core.Keyword(null,"warning","warning",2138350350),0], null);
}
});
lt.plugins.elm_light.linter.update_status_for_editor = (function update_status_for_editor(ed){var map__11155 = lt.plugins.elm_light.linter.grouped_lint_count.call(null,ed);var map__11155__$1 = ((cljs.core.seq_QMARK_.call(null,map__11155))?cljs.core.apply.call(null,cljs.core.hash_map,map__11155):map__11155);var warning = cljs.core.get.call(null,map__11155__$1,new cljs.core.Keyword(null,"warning","warning",2138350350));var error = cljs.core.get.call(null,map__11155__$1,new cljs.core.Keyword(null,"error","error",1110689146));return lt.object.raise.call(null,lt.plugins.elm_light.linter.statusbar_lint_summary,new cljs.core.Keyword(null,"update!","update!",779473898),((function (map__11155,map__11155__$1,warning,error){
return (function (p1__11153_SHARP_){return cljs.core.assoc.call(null,p1__11153_SHARP_,new cljs.core.Keyword(null,"warnings","warnings",1511995337),(function (){var or__4884__auto__ = warning;if(cljs.core.truth_(or__4884__auto__))
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
});})(map__11155,map__11155__$1,warning,error))
);
});
lt.plugins.elm_light.linter.__BEH__update_linter_on_editor_change = (function __BEH__update_linter_on_editor_change(ed){return lt.plugins.elm_light.linter.update_status_for_editor.call(null,ed);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.linter","update-linter-on-editor-change","lt.plugins.elm-light.linter/update-linter-on-editor-change",2858337088),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.linter.__BEH__update_linter_on_editor_change,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"focus","focus",1111509066),null], null), null));
lt.plugins.elm_light.linter.remove_widget = (function remove_widget(ed,el){try{lt.util.dom.remove.call(null,el);
}catch (e11157){var e_11210 = e11157;}return lt.objs.editor.focus.call(null,ed);
});
lt.plugins.elm_light.linter.inline_ui = (function inline_ui(ed,p__11160){var map__11168 = p__11160;var map__11168__$1 = ((cljs.core.seq_QMARK_.call(null,map__11168))?cljs.core.apply.call(null,cljs.core.hash_map,map__11168):map__11168);var category = cljs.core.get.call(null,map__11168__$1,new cljs.core.Keyword(null,"category","category",1064415344));var details = cljs.core.get.call(null,map__11168__$1,new cljs.core.Keyword(null,"details","details",2571625908));var title = cljs.core.get.call(null,map__11168__$1,new cljs.core.Keyword(null,"title","title",1124275658));var e__6277__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tabindex","tabindex",4410954191),-1,new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("linter-res "),cljs.core.str((function (){var or__4884__auto__ = cljs.core.name.call(null,category);if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return "error";
}
})())].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.title","p.title",3057381068),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.details","div.details",4139669847),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),details], null)], null)], null));var seq__11169_11211 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blur","blur",1016931289),((function (e__6277__auto__,map__11168,map__11168__$1,category,details,title){
return (function (p1__11158_SHARP_){return lt.plugins.elm_light.linter.remove_widget.call(null,ed,p1__11158_SHARP_.target);
});})(e__6277__auto__,map__11168,map__11168__$1,category,details,title))
,new cljs.core.Keyword(null,"keydown","keydown",4493897459),((function (e__6277__auto__,map__11168,map__11168__$1,category,details,title){
return (function (p1__11159_SHARP_){var kc = p1__11159_SHARP_.keyCode;if(cljs.core._EQ_.call(null,kc,27))
{return lt.plugins.elm_light.linter.remove_widget.call(null,ed,p1__11159_SHARP_.target);
} else
{return null;
}
});})(e__6277__auto__,map__11168,map__11168__$1,category,details,title))
], null)));var chunk__11170_11212 = null;var count__11171_11213 = 0;var i__11172_11214 = 0;while(true){
if((i__11172_11214 < count__11171_11213))
{var vec__11173_11215 = cljs.core._nth.call(null,chunk__11170_11212,i__11172_11214);var ev__6278__auto___11216 = cljs.core.nth.call(null,vec__11173_11215,0,null);var func__6279__auto___11217 = cljs.core.nth.call(null,vec__11173_11215,1,null);lt.util.dom.on.call(null,e__6277__auto__,ev__6278__auto___11216,func__6279__auto___11217);
{
var G__11218 = seq__11169_11211;
var G__11219 = chunk__11170_11212;
var G__11220 = count__11171_11213;
var G__11221 = (i__11172_11214 + 1);
seq__11169_11211 = G__11218;
chunk__11170_11212 = G__11219;
count__11171_11213 = G__11220;
i__11172_11214 = G__11221;
continue;
}
} else
{var temp__4092__auto___11222 = cljs.core.seq.call(null,seq__11169_11211);if(temp__4092__auto___11222)
{var seq__11169_11223__$1 = temp__4092__auto___11222;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11169_11223__$1))
{var c__5632__auto___11224 = cljs.core.chunk_first.call(null,seq__11169_11223__$1);{
var G__11225 = cljs.core.chunk_rest.call(null,seq__11169_11223__$1);
var G__11226 = c__5632__auto___11224;
var G__11227 = cljs.core.count.call(null,c__5632__auto___11224);
var G__11228 = 0;
seq__11169_11211 = G__11225;
chunk__11170_11212 = G__11226;
count__11171_11213 = G__11227;
i__11172_11214 = G__11228;
continue;
}
} else
{var vec__11174_11229 = cljs.core.first.call(null,seq__11169_11223__$1);var ev__6278__auto___11230 = cljs.core.nth.call(null,vec__11174_11229,0,null);var func__6279__auto___11231 = cljs.core.nth.call(null,vec__11174_11229,1,null);lt.util.dom.on.call(null,e__6277__auto__,ev__6278__auto___11230,func__6279__auto___11231);
{
var G__11232 = cljs.core.next.call(null,seq__11169_11223__$1);
var G__11233 = null;
var G__11234 = 0;
var G__11235 = 0;
seq__11169_11211 = G__11232;
chunk__11170_11212 = G__11233;
count__11171_11213 = G__11234;
i__11172_11214 = G__11235;
continue;
}
}
} else
{}
}
break;
}
return e__6277__auto__;
});
lt.plugins.elm_light.linter.add_widget = (function add_widget(ed,res_id){var map__11176 = cljs.core.get_in.call(null,cljs.core.deref.call(null,ed),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linter-results","linter-results",4482067083),res_id], null));var map__11176__$1 = ((cljs.core.seq_QMARK_.call(null,map__11176))?cljs.core.apply.call(null,cljs.core.hash_map,map__11176):map__11176);var result = cljs.core.get.call(null,map__11176__$1,new cljs.core.Keyword(null,"result","result",4374444943));var mark = cljs.core.get.call(null,map__11176__$1,new cljs.core.Keyword(null,"mark","mark",1017248319));var ui = lt.plugins.elm_light.linter.inline_ui.call(null,ed,result);lt.objs.editor.__GT_cm_ed.call(null,ed).addWidget(mark.find().from,ui,{"scrollIntoView": true});
return lt.util.dom.focus.call(null,ui);
});
lt.plugins.elm_light.linter.create_mark = (function create_mark(ed,p__11177){var map__11179 = p__11177;var map__11179__$1 = ((cljs.core.seq_QMARK_.call(null,map__11179))?cljs.core.apply.call(null,cljs.core.hash_map,map__11179):map__11179);var code_range = cljs.core.get.call(null,map__11179__$1,new cljs.core.Keyword(null,"code-range","code-range",3297446095));var category = cljs.core.get.call(null,map__11179__$1,new cljs.core.Keyword(null,"category","category",1064415344));var from = new cljs.core.Keyword(null,"from","from",1017056028).cljs$core$IFn$_invoke$arity$1(code_range);var to = ((!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"to","to",1013907949).cljs$core$IFn$_invoke$arity$1(code_range),from)))?new cljs.core.Keyword(null,"to","to",1013907949).cljs$core$IFn$_invoke$arity$1(code_range):cljs.core.assoc.call(null,from,new cljs.core.Keyword(null,"ch","ch",1013907415),(lt.objs.editor.line_length.call(null,ed,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(from)) - 1)));return lt.objs.editor.mark.call(null,ed,from,to,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",1004015509),[cljs.core.str("lint-"),cljs.core.str((function (){var or__4884__auto__ = cljs.core.name.call(null,category);if(cljs.core.truth_(or__4884__auto__))
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
lt.plugins.elm_light.linter.__BEH__clear_linter_results_BANG_ = (function __BEH__clear_linter_results_BANG_(ed){var seq__11186_11236 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"linter-results","linter-results",4482067083).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));var chunk__11187_11237 = null;var count__11188_11238 = 0;var i__11189_11239 = 0;while(true){
if((i__11189_11239 < count__11188_11238))
{var vec__11190_11240 = cljs.core._nth.call(null,chunk__11187_11237,i__11189_11239);var id_11241 = cljs.core.nth.call(null,vec__11190_11240,0,null);var res_11242 = cljs.core.nth.call(null,vec__11190_11240,1,null);var temp__4092__auto___11243 = new cljs.core.Keyword(null,"mark","mark",1017248319).cljs$core$IFn$_invoke$arity$1(res_11242);if(cljs.core.truth_(temp__4092__auto___11243))
{var m_11244 = temp__4092__auto___11243;m_11244.clear();
} else
{}
var temp__4092__auto___11245 = new cljs.core.Keyword(null,"widget","widget",4520824246).cljs$core$IFn$_invoke$arity$1(res_11242);if(cljs.core.truth_(temp__4092__auto___11245))
{var w_11246 = temp__4092__auto___11245;lt.util.dom.remove.call(null,w_11246);
} else
{}
{
var G__11247 = seq__11186_11236;
var G__11248 = chunk__11187_11237;
var G__11249 = count__11188_11238;
var G__11250 = (i__11189_11239 + 1);
seq__11186_11236 = G__11247;
chunk__11187_11237 = G__11248;
count__11188_11238 = G__11249;
i__11189_11239 = G__11250;
continue;
}
} else
{var temp__4092__auto___11251 = cljs.core.seq.call(null,seq__11186_11236);if(temp__4092__auto___11251)
{var seq__11186_11252__$1 = temp__4092__auto___11251;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11186_11252__$1))
{var c__5632__auto___11253 = cljs.core.chunk_first.call(null,seq__11186_11252__$1);{
var G__11254 = cljs.core.chunk_rest.call(null,seq__11186_11252__$1);
var G__11255 = c__5632__auto___11253;
var G__11256 = cljs.core.count.call(null,c__5632__auto___11253);
var G__11257 = 0;
seq__11186_11236 = G__11254;
chunk__11187_11237 = G__11255;
count__11188_11238 = G__11256;
i__11189_11239 = G__11257;
continue;
}
} else
{var vec__11191_11258 = cljs.core.first.call(null,seq__11186_11252__$1);var id_11259 = cljs.core.nth.call(null,vec__11191_11258,0,null);var res_11260 = cljs.core.nth.call(null,vec__11191_11258,1,null);var temp__4092__auto___11261__$1 = new cljs.core.Keyword(null,"mark","mark",1017248319).cljs$core$IFn$_invoke$arity$1(res_11260);if(cljs.core.truth_(temp__4092__auto___11261__$1))
{var m_11262 = temp__4092__auto___11261__$1;m_11262.clear();
} else
{}
var temp__4092__auto___11263__$1 = new cljs.core.Keyword(null,"widget","widget",4520824246).cljs$core$IFn$_invoke$arity$1(res_11260);if(cljs.core.truth_(temp__4092__auto___11263__$1))
{var w_11264 = temp__4092__auto___11263__$1;lt.util.dom.remove.call(null,w_11264);
} else
{}
{
var G__11265 = cljs.core.next.call(null,seq__11186_11252__$1);
var G__11266 = null;
var G__11267 = 0;
var G__11268 = 0;
seq__11186_11236 = G__11265;
chunk__11187_11237 = G__11266;
count__11188_11238 = G__11267;
i__11189_11239 = G__11268;
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
lt.plugins.elm_light.linter.find_current_lint_mark = (function find_current_lint_mark(ed){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__11192_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"linter","linter",4206213986),p1__11192_SHARP_.lttype);
}),lt.objs.editor.find_marks.call(null,ed,lt.objs.editor.__GT_cursor.call(null,ed))));
});
lt.plugins.elm_light.linter.get_widget_by_mark = (function get_widget_by_mark(ed,mark){return cljs.core.get_in.call(null,cljs.core.deref.call(null,ed),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linter-results","linter-results",4482067083),mark.ltlintid,new cljs.core.Keyword(null,"widget","widget",4520824246)], null));
});
lt.plugins.elm_light.linter.mark__GT_pos = (function mark__GT_pos(mark){var cm_pos = mark.find().from;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",1013907415),cm_pos.ch,new cljs.core.Keyword(null,"line","line",1017226086),cm_pos.line], null);
});
lt.plugins.elm_light.linter.get_all_lint_marks = (function get_all_lint_marks(ed){return cljs.core.sort_by.call(null,(function (p1__11194_SHARP_){return cljs.core.juxt.call(null,new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"ch","ch",1013907415)).call(null,lt.plugins.elm_light.linter.mark__GT_pos.call(null,p1__11194_SHARP_));
}),cljs.core.filter.call(null,(function (p1__11193_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"linter","linter",4206213986),p1__11193_SHARP_.lttype);
}),lt.objs.editor.__GT_cm_ed.call(null,ed).getAllMarks()));
});
lt.plugins.elm_light.linter.split_with_mark = (function split_with_mark(ed){var all_marks = lt.plugins.elm_light.linter.get_all_lint_marks.call(null,ed);var curr_mark = lt.plugins.elm_light.linter.find_current_lint_mark.call(null,ed);return cljs.core.split_with.call(null,((function (all_marks,curr_mark){
return (function (p1__11195_SHARP_){return !(cljs.core._EQ_.call(null,(cljs.core.truth_(curr_mark)?curr_mark.ltlintid:null),p1__11195_SHARP_.ltlintid));
});})(all_marks,curr_mark))
,all_marks);
});
lt.plugins.elm_light.linter.find_next_mark = (function find_next_mark(ed){var vec__11197 = lt.plugins.elm_light.linter.split_with_mark.call(null,ed);var ms1 = cljs.core.nth.call(null,vec__11197,0,null);var ms2 = cljs.core.nth.call(null,vec__11197,1,null);return cljs.core.first.call(null,cljs.core.into.call(null,cljs.core.vec.call(null,cljs.core.drop.call(null,1,ms2)),ms1));
});
lt.plugins.elm_light.linter.find_prev_mark = (function find_prev_mark(ed){var vec__11199 = lt.plugins.elm_light.linter.split_with_mark.call(null,ed);var ms1 = cljs.core.nth.call(null,vec__11199,0,null);var ms2 = cljs.core.nth.call(null,vec__11199,1,null);return cljs.core.first.call(null,cljs.core.into.call(null,cljs.core.reverse.call(null,cljs.core.drop.call(null,1,ms2)),ms1));
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
lt.plugins.elm_light.test.deps__GT_named = (function deps__GT_named(deps){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__11365){var vec__11366 = p__11365;var k = cljs.core.nth.call(null,vec__11366,0,null);var v = cljs.core.nth.call(null,vec__11366,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.elm_light.utils.nskw__GT_name.call(null,k),v], null);
}),deps));
});
lt.plugins.elm_light.test.__GT_test_config = (function __GT_test_config(project_cfg){return cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.assoc.call(null,cljs.core.update_in.call(null,project_cfg,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-directories","source-directories",4475397259)], null),lt.plugins.elm_light.test.__GT_test_src_dirs),new cljs.core.Keyword(null,"exposed-modules","exposed-modules",4185867084),cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependencies","dependencies",1517678747)], null),(function (p1__11367_SHARP_){return cljs.core.merge.call(null,p1__11367_SHARP_,lt.plugins.elm_light.test.default_test_deps);
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
return (function (p1__11368_SHARP_){return cljs.core.println.call(null,[cljs.core.str("Test package install: "),cljs.core.str(p1__11368_SHARP_)].join(''));
});})(args,proc))
);
proc.stderr.on("data",((function (args,proc){
return (function (p1__11369_SHARP_){return lt.objs.console.error.call(null,[cljs.core.str(p1__11369_SHARP_)].join(''));
});})(args,proc))
);
proc.on("exit",((function (args,proc){
return (function (p1__11370_SHARP_){if(cljs.core._EQ_.call(null,p1__11370_SHARP_,0))
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

//# sourceMappingURL=elm-light_compiled.js.map