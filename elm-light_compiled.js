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
{var o = (function (){var obj11113 = {};return obj11113;
})();var seq__11114_11127 = cljs.core.seq.call(null,obj);var chunk__11115_11128 = null;var count__11116_11129 = 0;var i__11117_11130 = 0;while(true){
if((i__11117_11130 < count__11116_11129))
{var vec__11118_11131 = cljs.core._nth.call(null,chunk__11115_11128,i__11117_11130);var k_11132 = cljs.core.nth.call(null,vec__11118_11131,0,null);var v_11133 = cljs.core.nth.call(null,vec__11118_11131,1,null);(o[cljs.core.name.call(null,k_11132)] = js_props.call(null,v_11133));
{
var G__11134 = seq__11114_11127;
var G__11135 = chunk__11115_11128;
var G__11136 = count__11116_11129;
var G__11137 = (i__11117_11130 + 1);
seq__11114_11127 = G__11134;
chunk__11115_11128 = G__11135;
count__11116_11129 = G__11136;
i__11117_11130 = G__11137;
continue;
}
} else
{var temp__4092__auto___11138 = cljs.core.seq.call(null,seq__11114_11127);if(temp__4092__auto___11138)
{var seq__11114_11139__$1 = temp__4092__auto___11138;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11114_11139__$1))
{var c__5632__auto___11140 = cljs.core.chunk_first.call(null,seq__11114_11139__$1);{
var G__11141 = cljs.core.chunk_rest.call(null,seq__11114_11139__$1);
var G__11142 = c__5632__auto___11140;
var G__11143 = cljs.core.count.call(null,c__5632__auto___11140);
var G__11144 = 0;
seq__11114_11127 = G__11141;
chunk__11115_11128 = G__11142;
count__11116_11129 = G__11143;
i__11117_11130 = G__11144;
continue;
}
} else
{var vec__11119_11145 = cljs.core.first.call(null,seq__11114_11139__$1);var k_11146 = cljs.core.nth.call(null,vec__11119_11145,0,null);var v_11147 = cljs.core.nth.call(null,vec__11119_11145,1,null);(o[cljs.core.name.call(null,k_11146)] = js_props.call(null,v_11147));
{
var G__11148 = cljs.core.next.call(null,seq__11114_11139__$1);
var G__11149 = null;
var G__11150 = 0;
var G__11151 = 0;
seq__11114_11127 = G__11148;
chunk__11115_11128 = G__11149;
count__11116_11129 = G__11150;
i__11117_11130 = G__11151;
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
quiescent.component = (function component(renderer){var react_component = React.createClass({"render": (function (){var this$ = this;var _STAR_component_STAR_11121 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return cljs.core.apply.call(null,renderer,(this$.props["value"]),(this$.props["statics"]));
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11121;
}}), "shouldComponentUpdate": (function (next_props,_){var this$ = this;return cljs.core.not_EQ_.call(null,(this$.props["value"]),(next_props["value"]));
})});return ((function (react_component){
return (function() { 
var G__11152__delegate = function (value,static_args){return react_component.call(null,{"statics": static_args, "value": value});
};
var G__11152 = function (value,var_args){
var static_args = null;if (arguments.length > 1) {
  static_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__11152__delegate.call(this,value,static_args);};
G__11152.cljs$lang$maxFixedArity = 1;
G__11152.cljs$lang$applyTo = (function (arglist__11153){
var value = cljs.core.first(arglist__11153);
var static_args = cljs.core.rest(arglist__11153);
return G__11152__delegate(value,static_args);
});
G__11152.cljs$core$IFn$_invoke$arity$variadic = G__11152__delegate;
return G__11152;
})()
;
;})(react_component))
});
/**
* Wrapper component used to mix-in lifecycle access
*/
quiescent.WrapperComponent = React.createClass({"componentWillUnmount": (function (){var this$ = this;var temp__4092__auto__ = (this$.props["onWillUnmount"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_11126 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null);
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11126;
}} else
{return null;
}
}), "componentWillUpdate": (function (_,___$1){var this$ = this;var temp__4092__auto__ = (this$.props["onWillUpdate"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_11125 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null);
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11125;
}} else
{return null;
}
}), "componentWillMount": (function (){var this$ = this;var temp__4092__auto__ = (this$.props["onWillMount"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_11124 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null);
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11124;
}} else
{return null;
}
}), "componentDidMount": (function (){var this$ = this;var temp__4092__auto__ = (this$.props["onMount"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_11123 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null,this$.getDOMNode());
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11123;
}} else
{return null;
}
}), "componentDidUpdate": (function (prev_props,prev_state){var this$ = this;var temp__4092__auto__ = (this$.props["onUpdate"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_11122 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null,this$.getDOMNode());
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11122;
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
var wrapper__delegate = function (child,kvs){var props = quiescent.js_props.call(null,cljs.core.apply.call(null,cljs.core.array_map,new cljs.core.Keyword(null,"wrappee","wrappee",2609412088),child,kvs));var temp__4092__auto___11154 = (child.props["key"]);if(cljs.core.truth_(temp__4092__auto___11154))
{var key_11155 = temp__4092__auto___11154;(props["key"] = key_11155);
} else
{}
return quiescent.WrapperComponent.call(null,props);
};
var wrapper = function (child,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrapper__delegate.call(this,child,kvs);};
wrapper.cljs$lang$maxFixedArity = 1;
wrapper.cljs$lang$applyTo = (function (arglist__11156){
var child = cljs.core.first(arglist__11156);
var kvs = cljs.core.rest(arglist__11156);
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
var a__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__7538_8486 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__7539_8487 = null;var count__7540_8488 = 0;var i__7541_8489 = 0;while(true){
if((i__7541_8489 < count__7540_8488))
{var arg__6538__auto___8490 = cljs.core._nth.call(null,chunk__7539_8487,i__7541_8489);a__6537__auto__.push(arg__6538__auto___8490);
{
var G__8491 = seq__7538_8486;
var G__8492 = chunk__7539_8487;
var G__8493 = count__7540_8488;
var G__8494 = (i__7541_8489 + 1);
seq__7538_8486 = G__8491;
chunk__7539_8487 = G__8492;
count__7540_8488 = G__8493;
i__7541_8489 = G__8494;
continue;
}
} else
{var temp__4092__auto___8495 = cljs.core.seq.call(null,seq__7538_8486);if(temp__4092__auto___8495)
{var seq__7538_8496__$1 = temp__4092__auto___8495;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7538_8496__$1))
{var c__5632__auto___8497 = cljs.core.chunk_first.call(null,seq__7538_8496__$1);{
var G__8498 = cljs.core.chunk_rest.call(null,seq__7538_8496__$1);
var G__8499 = c__5632__auto___8497;
var G__8500 = cljs.core.count.call(null,c__5632__auto___8497);
var G__8501 = 0;
seq__7538_8486 = G__8498;
chunk__7539_8487 = G__8499;
count__7540_8488 = G__8500;
i__7541_8489 = G__8501;
continue;
}
} else
{var arg__6538__auto___8502 = cljs.core.first.call(null,seq__7538_8496__$1);a__6537__auto__.push(arg__6538__auto___8502);
{
var G__8503 = cljs.core.next.call(null,seq__7538_8496__$1);
var G__8504 = null;
var G__8505 = 0;
var G__8506 = 0;
seq__7538_8486 = G__8503;
chunk__7539_8487 = G__8504;
count__7540_8488 = G__8505;
i__7541_8489 = G__8506;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.a.apply(null,a__6537__auto__);
};
var a = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return a__delegate.call(this,args__6536__auto__);};
a.cljs$lang$maxFixedArity = 0;
a.cljs$lang$applyTo = (function (arglist__8507){
var args__6536__auto__ = cljs.core.seq(arglist__8507);
return a__delegate(args__6536__auto__);
});
a.cljs$core$IFn$_invoke$arity$variadic = a__delegate;
return a;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.abbr = (function() { 
var abbr__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__7546_8508 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__7547_8509 = null;var count__7548_8510 = 0;var i__7549_8511 = 0;while(true){
if((i__7549_8511 < count__7548_8510))
{var arg__6538__auto___8512 = cljs.core._nth.call(null,chunk__7547_8509,i__7549_8511);a__6537__auto__.push(arg__6538__auto___8512);
{
var G__8513 = seq__7546_8508;
var G__8514 = chunk__7547_8509;
var G__8515 = count__7548_8510;
var G__8516 = (i__7549_8511 + 1);
seq__7546_8508 = G__8513;
chunk__7547_8509 = G__8514;
count__7548_8510 = G__8515;
i__7549_8511 = G__8516;
continue;
}
} else
{var temp__4092__auto___8517 = cljs.core.seq.call(null,seq__7546_8508);if(temp__4092__auto___8517)
{var seq__7546_8518__$1 = temp__4092__auto___8517;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7546_8518__$1))
{var c__5632__auto___8519 = cljs.core.chunk_first.call(null,seq__7546_8518__$1);{
var G__8520 = cljs.core.chunk_rest.call(null,seq__7546_8518__$1);
var G__8521 = c__5632__auto___8519;
var G__8522 = cljs.core.count.call(null,c__5632__auto___8519);
var G__8523 = 0;
seq__7546_8508 = G__8520;
chunk__7547_8509 = G__8521;
count__7548_8510 = G__8522;
i__7549_8511 = G__8523;
continue;
}
} else
{var arg__6538__auto___8524 = cljs.core.first.call(null,seq__7546_8518__$1);a__6537__auto__.push(arg__6538__auto___8524);
{
var G__8525 = cljs.core.next.call(null,seq__7546_8518__$1);
var G__8526 = null;
var G__8527 = 0;
var G__8528 = 0;
seq__7546_8508 = G__8525;
chunk__7547_8509 = G__8526;
count__7548_8510 = G__8527;
i__7549_8511 = G__8528;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.abbr.apply(null,a__6537__auto__);
};
var abbr = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return abbr__delegate.call(this,args__6536__auto__);};
abbr.cljs$lang$maxFixedArity = 0;
abbr.cljs$lang$applyTo = (function (arglist__8529){
var args__6536__auto__ = cljs.core.seq(arglist__8529);
return abbr__delegate(args__6536__auto__);
});
abbr.cljs$core$IFn$_invoke$arity$variadic = abbr__delegate;
return abbr;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.address = (function() { 
var address__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__7554_8530 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__7555_8531 = null;var count__7556_8532 = 0;var i__7557_8533 = 0;while(true){
if((i__7557_8533 < count__7556_8532))
{var arg__6538__auto___8534 = cljs.core._nth.call(null,chunk__7555_8531,i__7557_8533);a__6537__auto__.push(arg__6538__auto___8534);
{
var G__8535 = seq__7554_8530;
var G__8536 = chunk__7555_8531;
var G__8537 = count__7556_8532;
var G__8538 = (i__7557_8533 + 1);
seq__7554_8530 = G__8535;
chunk__7555_8531 = G__8536;
count__7556_8532 = G__8537;
i__7557_8533 = G__8538;
continue;
}
} else
{var temp__4092__auto___8539 = cljs.core.seq.call(null,seq__7554_8530);if(temp__4092__auto___8539)
{var seq__7554_8540__$1 = temp__4092__auto___8539;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7554_8540__$1))
{var c__5632__auto___8541 = cljs.core.chunk_first.call(null,seq__7554_8540__$1);{
var G__8542 = cljs.core.chunk_rest.call(null,seq__7554_8540__$1);
var G__8543 = c__5632__auto___8541;
var G__8544 = cljs.core.count.call(null,c__5632__auto___8541);
var G__8545 = 0;
seq__7554_8530 = G__8542;
chunk__7555_8531 = G__8543;
count__7556_8532 = G__8544;
i__7557_8533 = G__8545;
continue;
}
} else
{var arg__6538__auto___8546 = cljs.core.first.call(null,seq__7554_8540__$1);a__6537__auto__.push(arg__6538__auto___8546);
{
var G__8547 = cljs.core.next.call(null,seq__7554_8540__$1);
var G__8548 = null;
var G__8549 = 0;
var G__8550 = 0;
seq__7554_8530 = G__8547;
chunk__7555_8531 = G__8548;
count__7556_8532 = G__8549;
i__7557_8533 = G__8550;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.address.apply(null,a__6537__auto__);
};
var address = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return address__delegate.call(this,args__6536__auto__);};
address.cljs$lang$maxFixedArity = 0;
address.cljs$lang$applyTo = (function (arglist__8551){
var args__6536__auto__ = cljs.core.seq(arglist__8551);
return address__delegate(args__6536__auto__);
});
address.cljs$core$IFn$_invoke$arity$variadic = address__delegate;
return address;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.area = (function() { 
var area__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__7562_8552 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__7563_8553 = null;var count__7564_8554 = 0;var i__7565_8555 = 0;while(true){
if((i__7565_8555 < count__7564_8554))
{var arg__6538__auto___8556 = cljs.core._nth.call(null,chunk__7563_8553,i__7565_8555);a__6537__auto__.push(arg__6538__auto___8556);
{
var G__8557 = seq__7562_8552;
var G__8558 = chunk__7563_8553;
var G__8559 = count__7564_8554;
var G__8560 = (i__7565_8555 + 1);
seq__7562_8552 = G__8557;
chunk__7563_8553 = G__8558;
count__7564_8554 = G__8559;
i__7565_8555 = G__8560;
continue;
}
} else
{var temp__4092__auto___8561 = cljs.core.seq.call(null,seq__7562_8552);if(temp__4092__auto___8561)
{var seq__7562_8562__$1 = temp__4092__auto___8561;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7562_8562__$1))
{var c__5632__auto___8563 = cljs.core.chunk_first.call(null,seq__7562_8562__$1);{
var G__8564 = cljs.core.chunk_rest.call(null,seq__7562_8562__$1);
var G__8565 = c__5632__auto___8563;
var G__8566 = cljs.core.count.call(null,c__5632__auto___8563);
var G__8567 = 0;
seq__7562_8552 = G__8564;
chunk__7563_8553 = G__8565;
count__7564_8554 = G__8566;
i__7565_8555 = G__8567;
continue;
}
} else
{var arg__6538__auto___8568 = cljs.core.first.call(null,seq__7562_8562__$1);a__6537__auto__.push(arg__6538__auto___8568);
{
var G__8569 = cljs.core.next.call(null,seq__7562_8562__$1);
var G__8570 = null;
var G__8571 = 0;
var G__8572 = 0;
seq__7562_8552 = G__8569;
chunk__7563_8553 = G__8570;
count__7564_8554 = G__8571;
i__7565_8555 = G__8572;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.area.apply(null,a__6537__auto__);
};
var area = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return area__delegate.call(this,args__6536__auto__);};
area.cljs$lang$maxFixedArity = 0;
area.cljs$lang$applyTo = (function (arglist__8573){
var args__6536__auto__ = cljs.core.seq(arglist__8573);
return area__delegate(args__6536__auto__);
});
area.cljs$core$IFn$_invoke$arity$variadic = area__delegate;
return area;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.article = (function() { 
var article__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__7570_8574 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__7571_8575 = null;var count__7572_8576 = 0;var i__7573_8577 = 0;while(true){
if((i__7573_8577 < count__7572_8576))
{var arg__6538__auto___8578 = cljs.core._nth.call(null,chunk__7571_8575,i__7573_8577);a__6537__auto__.push(arg__6538__auto___8578);
{
var G__8579 = seq__7570_8574;
var G__8580 = chunk__7571_8575;
var G__8581 = count__7572_8576;
var G__8582 = (i__7573_8577 + 1);
seq__7570_8574 = G__8579;
chunk__7571_8575 = G__8580;
count__7572_8576 = G__8581;
i__7573_8577 = G__8582;
continue;
}
} else
{var temp__4092__auto___8583 = cljs.core.seq.call(null,seq__7570_8574);if(temp__4092__auto___8583)
{var seq__7570_8584__$1 = temp__4092__auto___8583;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7570_8584__$1))
{var c__5632__auto___8585 = cljs.core.chunk_first.call(null,seq__7570_8584__$1);{
var G__8586 = cljs.core.chunk_rest.call(null,seq__7570_8584__$1);
var G__8587 = c__5632__auto___8585;
var G__8588 = cljs.core.count.call(null,c__5632__auto___8585);
var G__8589 = 0;
seq__7570_8574 = G__8586;
chunk__7571_8575 = G__8587;
count__7572_8576 = G__8588;
i__7573_8577 = G__8589;
continue;
}
} else
{var arg__6538__auto___8590 = cljs.core.first.call(null,seq__7570_8584__$1);a__6537__auto__.push(arg__6538__auto___8590);
{
var G__8591 = cljs.core.next.call(null,seq__7570_8584__$1);
var G__8592 = null;
var G__8593 = 0;
var G__8594 = 0;
seq__7570_8574 = G__8591;
chunk__7571_8575 = G__8592;
count__7572_8576 = G__8593;
i__7573_8577 = G__8594;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.article.apply(null,a__6537__auto__);
};
var article = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return article__delegate.call(this,args__6536__auto__);};
article.cljs$lang$maxFixedArity = 0;
article.cljs$lang$applyTo = (function (arglist__8595){
var args__6536__auto__ = cljs.core.seq(arglist__8595);
return article__delegate(args__6536__auto__);
});
article.cljs$core$IFn$_invoke$arity$variadic = article__delegate;
return article;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.aside = (function() { 
var aside__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__7578_8596 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__7579_8597 = null;var count__7580_8598 = 0;var i__7581_8599 = 0;while(true){
if((i__7581_8599 < count__7580_8598))
{var arg__6538__auto___8600 = cljs.core._nth.call(null,chunk__7579_8597,i__7581_8599);a__6537__auto__.push(arg__6538__auto___8600);
{
var G__8601 = seq__7578_8596;
var G__8602 = chunk__7579_8597;
var G__8603 = count__7580_8598;
var G__8604 = (i__7581_8599 + 1);
seq__7578_8596 = G__8601;
chunk__7579_8597 = G__8602;
count__7580_8598 = G__8603;
i__7581_8599 = G__8604;
continue;
}
} else
{var temp__4092__auto___8605 = cljs.core.seq.call(null,seq__7578_8596);if(temp__4092__auto___8605)
{var seq__7578_8606__$1 = temp__4092__auto___8605;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7578_8606__$1))
{var c__5632__auto___8607 = cljs.core.chunk_first.call(null,seq__7578_8606__$1);{
var G__8608 = cljs.core.chunk_rest.call(null,seq__7578_8606__$1);
var G__8609 = c__5632__auto___8607;
var G__8610 = cljs.core.count.call(null,c__5632__auto___8607);
var G__8611 = 0;
seq__7578_8596 = G__8608;
chunk__7579_8597 = G__8609;
count__7580_8598 = G__8610;
i__7581_8599 = G__8611;
continue;
}
} else
{var arg__6538__auto___8612 = cljs.core.first.call(null,seq__7578_8606__$1);a__6537__auto__.push(arg__6538__auto___8612);
{
var G__8613 = cljs.core.next.call(null,seq__7578_8606__$1);
var G__8614 = null;
var G__8615 = 0;
var G__8616 = 0;
seq__7578_8596 = G__8613;
chunk__7579_8597 = G__8614;
count__7580_8598 = G__8615;
i__7581_8599 = G__8616;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.aside.apply(null,a__6537__auto__);
};
var aside = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return aside__delegate.call(this,args__6536__auto__);};
aside.cljs$lang$maxFixedArity = 0;
aside.cljs$lang$applyTo = (function (arglist__8617){
var args__6536__auto__ = cljs.core.seq(arglist__8617);
return aside__delegate(args__6536__auto__);
});
aside.cljs$core$IFn$_invoke$arity$variadic = aside__delegate;
return aside;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.audio = (function() { 
var audio__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__7586_8618 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__7587_8619 = null;var count__7588_8620 = 0;var i__7589_8621 = 0;while(true){
if((i__7589_8621 < count__7588_8620))
{var arg__6538__auto___8622 = cljs.core._nth.call(null,chunk__7587_8619,i__7589_8621);a__6537__auto__.push(arg__6538__auto___8622);
{
var G__8623 = seq__7586_8618;
var G__8624 = chunk__7587_8619;
var G__8625 = count__7588_8620;
var G__8626 = (i__7589_8621 + 1);
seq__7586_8618 = G__8623;
chunk__7587_8619 = G__8624;
count__7588_8620 = G__8625;
i__7589_8621 = G__8626;
continue;
}
} else
{var temp__4092__auto___8627 = cljs.core.seq.call(null,seq__7586_8618);if(temp__4092__auto___8627)
{var seq__7586_8628__$1 = temp__4092__auto___8627;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7586_8628__$1))
{var c__5632__auto___8629 = cljs.core.chunk_first.call(null,seq__7586_8628__$1);{
var G__8630 = cljs.core.chunk_rest.call(null,seq__7586_8628__$1);
var G__8631 = c__5632__auto___8629;
var G__8632 = cljs.core.count.call(null,c__5632__auto___8629);
var G__8633 = 0;
seq__7586_8618 = G__8630;
chunk__7587_8619 = G__8631;
count__7588_8620 = G__8632;
i__7589_8621 = G__8633;
continue;
}
} else
{var arg__6538__auto___8634 = cljs.core.first.call(null,seq__7586_8628__$1);a__6537__auto__.push(arg__6538__auto___8634);
{
var G__8635 = cljs.core.next.call(null,seq__7586_8628__$1);
var G__8636 = null;
var G__8637 = 0;
var G__8638 = 0;
seq__7586_8618 = G__8635;
chunk__7587_8619 = G__8636;
count__7588_8620 = G__8637;
i__7589_8621 = G__8638;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.audio.apply(null,a__6537__auto__);
};
var audio = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return audio__delegate.call(this,args__6536__auto__);};
audio.cljs$lang$maxFixedArity = 0;
audio.cljs$lang$applyTo = (function (arglist__8639){
var args__6536__auto__ = cljs.core.seq(arglist__8639);
return audio__delegate(args__6536__auto__);
});
audio.cljs$core$IFn$_invoke$arity$variadic = audio__delegate;
return audio;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.b = (function() { 
var b__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__7594_8640 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__7595_8641 = null;var count__7596_8642 = 0;var i__7597_8643 = 0;while(true){
if((i__7597_8643 < count__7596_8642))
{var arg__6538__auto___8644 = cljs.core._nth.call(null,chunk__7595_8641,i__7597_8643);a__6537__auto__.push(arg__6538__auto___8644);
{
var G__8645 = seq__7594_8640;
var G__8646 = chunk__7595_8641;
var G__8647 = count__7596_8642;
var G__8648 = (i__7597_8643 + 1);
seq__7594_8640 = G__8645;
chunk__7595_8641 = G__8646;
count__7596_8642 = G__8647;
i__7597_8643 = G__8648;
continue;
}
} else
{var temp__4092__auto___8649 = cljs.core.seq.call(null,seq__7594_8640);if(temp__4092__auto___8649)
{var seq__7594_8650__$1 = temp__4092__auto___8649;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7594_8650__$1))
{var c__5632__auto___8651 = cljs.core.chunk_first.call(null,seq__7594_8650__$1);{
var G__8652 = cljs.core.chunk_rest.call(null,seq__7594_8650__$1);
var G__8653 = c__5632__auto___8651;
var G__8654 = cljs.core.count.call(null,c__5632__auto___8651);
var G__8655 = 0;
seq__7594_8640 = G__8652;
chunk__7595_8641 = G__8653;
count__7596_8642 = G__8654;
i__7597_8643 = G__8655;
continue;
}
} else
{var arg__6538__auto___8656 = cljs.core.first.call(null,seq__7594_8650__$1);a__6537__auto__.push(arg__6538__auto___8656);
{
var G__8657 = cljs.core.next.call(null,seq__7594_8650__$1);
var G__8658 = null;
var G__8659 = 0;
var G__8660 = 0;
seq__7594_8640 = G__8657;
chunk__7595_8641 = G__8658;
count__7596_8642 = G__8659;
i__7597_8643 = G__8660;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.b.apply(null,a__6537__auto__);
};
var b = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return b__delegate.call(this,args__6536__auto__);};
b.cljs$lang$maxFixedArity = 0;
b.cljs$lang$applyTo = (function (arglist__8661){
var args__6536__auto__ = cljs.core.seq(arglist__8661);
return b__delegate(args__6536__auto__);
});
b.cljs$core$IFn$_invoke$arity$variadic = b__delegate;
return b;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.base = (function() { 
var base__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__7602_8662 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__7603_8663 = null;var count__7604_8664 = 0;var i__7605_8665 = 0;while(true){
if((i__7605_8665 < count__7604_8664))
{var arg__6538__auto___8666 = cljs.core._nth.call(null,chunk__7603_8663,i__7605_8665);a__6537__auto__.push(arg__6538__auto___8666);
{
var G__8667 = seq__7602_8662;
var G__8668 = chunk__7603_8663;
var G__8669 = count__7604_8664;
var G__8670 = (i__7605_8665 + 1);
seq__7602_8662 = G__8667;
chunk__7603_8663 = G__8668;
count__7604_8664 = G__8669;
i__7605_8665 = G__8670;
continue;
}
} else
{var temp__4092__auto___8671 = cljs.core.seq.call(null,seq__7602_8662);if(temp__4092__auto___8671)
{var seq__7602_8672__$1 = temp__4092__auto___8671;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7602_8672__$1))
{var c__5632__auto___8673 = cljs.core.chunk_first.call(null,seq__7602_8672__$1);{
var G__8674 = cljs.core.chunk_rest.call(null,seq__7602_8672__$1);
var G__8675 = c__5632__auto___8673;
var G__8676 = cljs.core.count.call(null,c__5632__auto___8673);
var G__8677 = 0;
seq__7602_8662 = G__8674;
chunk__7603_8663 = G__8675;
count__7604_8664 = G__8676;
i__7605_8665 = G__8677;
continue;
}
} else
{var arg__6538__auto___8678 = cljs.core.first.call(null,seq__7602_8672__$1);a__6537__auto__.push(arg__6538__auto___8678);
{
var G__8679 = cljs.core.next.call(null,seq__7602_8672__$1);
var G__8680 = null;
var G__8681 = 0;
var G__8682 = 0;
seq__7602_8662 = G__8679;
chunk__7603_8663 = G__8680;
count__7604_8664 = G__8681;
i__7605_8665 = G__8682;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.base.apply(null,a__6537__auto__);
};
var base = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return base__delegate.call(this,args__6536__auto__);};
base.cljs$lang$maxFixedArity = 0;
base.cljs$lang$applyTo = (function (arglist__8683){
var args__6536__auto__ = cljs.core.seq(arglist__8683);
return base__delegate(args__6536__auto__);
});
base.cljs$core$IFn$_invoke$arity$variadic = base__delegate;
return base;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.bdi = (function() { 
var bdi__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__7610_8684 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__7611_8685 = null;var count__7612_8686 = 0;var i__7613_8687 = 0;while(true){
if((i__7613_8687 < count__7612_8686))
{var arg__6538__auto___8688 = cljs.core._nth.call(null,chunk__7611_8685,i__7613_8687);a__6537__auto__.push(arg__6538__auto___8688);
{
var G__8689 = seq__7610_8684;
var G__8690 = chunk__7611_8685;
var G__8691 = count__7612_8686;
var G__8692 = (i__7613_8687 + 1);
seq__7610_8684 = G__8689;
chunk__7611_8685 = G__8690;
count__7612_8686 = G__8691;
i__7613_8687 = G__8692;
continue;
}
} else
{var temp__4092__auto___8693 = cljs.core.seq.call(null,seq__7610_8684);if(temp__4092__auto___8693)
{var seq__7610_8694__$1 = temp__4092__auto___8693;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7610_8694__$1))
{var c__5632__auto___8695 = cljs.core.chunk_first.call(null,seq__7610_8694__$1);{
var G__8696 = cljs.core.chunk_rest.call(null,seq__7610_8694__$1);
var G__8697 = c__5632__auto___8695;
var G__8698 = cljs.core.count.call(null,c__5632__auto___8695);
var G__8699 = 0;
seq__7610_8684 = G__8696;
chunk__7611_8685 = G__8697;
count__7612_8686 = G__8698;
i__7613_8687 = G__8699;
continue;
}
} else
{var arg__6538__auto___8700 = cljs.core.first.call(null,seq__7610_8694__$1);a__6537__auto__.push(arg__6538__auto___8700);
{
var G__8701 = cljs.core.next.call(null,seq__7610_8694__$1);
var G__8702 = null;
var G__8703 = 0;
var G__8704 = 0;
seq__7610_8684 = G__8701;
chunk__7611_8685 = G__8702;
count__7612_8686 = G__8703;
i__7613_8687 = G__8704;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.bdi.apply(null,a__6537__auto__);
};
var bdi = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return bdi__delegate.call(this,args__6536__auto__);};
bdi.cljs$lang$maxFixedArity = 0;
bdi.cljs$lang$applyTo = (function (arglist__8705){
var args__6536__auto__ = cljs.core.seq(arglist__8705);
return bdi__delegate(args__6536__auto__);
});
bdi.cljs$core$IFn$_invoke$arity$variadic = bdi__delegate;
return bdi;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.bdo = (function() { 
var bdo__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__7618_8706 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__7619_8707 = null;var count__7620_8708 = 0;var i__7621_8709 = 0;while(true){
if((i__7621_8709 < count__7620_8708))
{var arg__6538__auto___8710 = cljs.core._nth.call(null,chunk__7619_8707,i__7621_8709);a__6537__auto__.push(arg__6538__auto___8710);
{
var G__8711 = seq__7618_8706;
var G__8712 = chunk__7619_8707;
var G__8713 = count__7620_8708;
var G__8714 = (i__7621_8709 + 1);
seq__7618_8706 = G__8711;
chunk__7619_8707 = G__8712;
count__7620_8708 = G__8713;
i__7621_8709 = G__8714;
continue;
}
} else
{var temp__4092__auto___8715 = cljs.core.seq.call(null,seq__7618_8706);if(temp__4092__auto___8715)
{var seq__7618_8716__$1 = temp__4092__auto___8715;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7618_8716__$1))
{var c__5632__auto___8717 = cljs.core.chunk_first.call(null,seq__7618_8716__$1);{
var G__8718 = cljs.core.chunk_rest.call(null,seq__7618_8716__$1);
var G__8719 = c__5632__auto___8717;
var G__8720 = cljs.core.count.call(null,c__5632__auto___8717);
var G__8721 = 0;
seq__7618_8706 = G__8718;
chunk__7619_8707 = G__8719;
count__7620_8708 = G__8720;
i__7621_8709 = G__8721;
continue;
}
} else
{var arg__6538__auto___8722 = cljs.core.first.call(null,seq__7618_8716__$1);a__6537__auto__.push(arg__6538__auto___8722);
{
var G__8723 = cljs.core.next.call(null,seq__7618_8716__$1);
var G__8724 = null;
var G__8725 = 0;
var G__8726 = 0;
seq__7618_8706 = G__8723;
chunk__7619_8707 = G__8724;
count__7620_8708 = G__8725;
i__7621_8709 = G__8726;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.bdo.apply(null,a__6537__auto__);
};
var bdo = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return bdo__delegate.call(this,args__6536__auto__);};
bdo.cljs$lang$maxFixedArity = 0;
bdo.cljs$lang$applyTo = (function (arglist__8727){
var args__6536__auto__ = cljs.core.seq(arglist__8727);
return bdo__delegate(args__6536__auto__);
});
bdo.cljs$core$IFn$_invoke$arity$variadic = bdo__delegate;
return bdo;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.big = (function() { 
var big__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__7626_8728 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__7627_8729 = null;var count__7628_8730 = 0;var i__7629_8731 = 0;while(true){
if((i__7629_8731 < count__7628_8730))
{var arg__6538__auto___8732 = cljs.core._nth.call(null,chunk__7627_8729,i__7629_8731);a__6537__auto__.push(arg__6538__auto___8732);
{
var G__8733 = seq__7626_8728;
var G__8734 = chunk__7627_8729;
var G__8735 = count__7628_8730;
var G__8736 = (i__7629_8731 + 1);
seq__7626_8728 = G__8733;
chunk__7627_8729 = G__8734;
count__7628_8730 = G__8735;
i__7629_8731 = G__8736;
continue;
}
} else
{var temp__4092__auto___8737 = cljs.core.seq.call(null,seq__7626_8728);if(temp__4092__auto___8737)
{var seq__7626_8738__$1 = temp__4092__auto___8737;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7626_8738__$1))
{var c__5632__auto___8739 = cljs.core.chunk_first.call(null,seq__7626_8738__$1);{
var G__8740 = cljs.core.chunk_rest.call(null,seq__7626_8738__$1);
var G__8741 = c__5632__auto___8739;
var G__8742 = cljs.core.count.call(null,c__5632__auto___8739);
var G__8743 = 0;
seq__7626_8728 = G__8740;
chunk__7627_8729 = G__8741;
count__7628_8730 = G__8742;
i__7629_8731 = G__8743;
continue;
}
} else
{var arg__6538__auto___8744 = cljs.core.first.call(null,seq__7626_8738__$1);a__6537__auto__.push(arg__6538__auto___8744);
{
var G__8745 = cljs.core.next.call(null,seq__7626_8738__$1);
var G__8746 = null;
var G__8747 = 0;
var G__8748 = 0;
seq__7626_8728 = G__8745;
chunk__7627_8729 = G__8746;
count__7628_8730 = G__8747;
i__7629_8731 = G__8748;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.big.apply(null,a__6537__auto__);
};
var big = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return big__delegate.call(this,args__6536__auto__);};
big.cljs$lang$maxFixedArity = 0;
big.cljs$lang$applyTo = (function (arglist__8749){
var args__6536__auto__ = cljs.core.seq(arglist__8749);
return big__delegate(args__6536__auto__);
});
big.cljs$core$IFn$_invoke$arity$variadic = big__delegate;
return big;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.blockquote = (function() { 
var blockquote__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__7634_8750 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__7635_8751 = null;var count__7636_8752 = 0;var i__7637_8753 = 0;while(true){
if((i__7637_8753 < count__7636_8752))
{var arg__6538__auto___8754 = cljs.core._nth.call(null,chunk__7635_8751,i__7637_8753);a__6537__auto__.push(arg__6538__auto___8754);
{
var G__8755 = seq__7634_8750;
var G__8756 = chunk__7635_8751;
var G__8757 = count__7636_8752;
var G__8758 = (i__7637_8753 + 1);
seq__7634_8750 = G__8755;
chunk__7635_8751 = G__8756;
count__7636_8752 = G__8757;
i__7637_8753 = G__8758;
continue;
}
} else
{var temp__4092__auto___8759 = cljs.core.seq.call(null,seq__7634_8750);if(temp__4092__auto___8759)
{var seq__7634_8760__$1 = temp__4092__auto___8759;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7634_8760__$1))
{var c__5632__auto___8761 = cljs.core.chunk_first.call(null,seq__7634_8760__$1);{
var G__8762 = cljs.core.chunk_rest.call(null,seq__7634_8760__$1);
var G__8763 = c__5632__auto___8761;
var G__8764 = cljs.core.count.call(null,c__5632__auto___8761);
var G__8765 = 0;
seq__7634_8750 = G__8762;
chunk__7635_8751 = G__8763;
count__7636_8752 = G__8764;
i__7637_8753 = G__8765;
continue;
}
} else
{var arg__6538__auto___8766 = cljs.core.first.call(null,seq__7634_8760__$1);a__6537__auto__.push(arg__6538__auto___8766);
{
var G__8767 = cljs.core.next.call(null,seq__7634_8760__$1);
var G__8768 = null;
var G__8769 = 0;
var G__8770 = 0;
seq__7634_8750 = G__8767;
chunk__7635_8751 = G__8768;
count__7636_8752 = G__8769;
i__7637_8753 = G__8770;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.blockquote.apply(null,a__6537__auto__);
};
var blockquote = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return blockquote__delegate.call(this,args__6536__auto__);};
blockquote.cljs$lang$maxFixedArity = 0;
blockquote.cljs$lang$applyTo = (function (arglist__8771){
var args__6536__auto__ = cljs.core.seq(arglist__8771);
return blockquote__delegate(args__6536__auto__);
});
blockquote.cljs$core$IFn$_invoke$arity$variadic = blockquote__delegate;
return blockquote;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.body = (function() { 
var body__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__7642_8772 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__7643_8773 = null;var count__7644_8774 = 0;var i__7645_8775 = 0;while(true){
if((i__7645_8775 < count__7644_8774))
{var arg__6538__auto___8776 = cljs.core._nth.call(null,chunk__7643_8773,i__7645_8775);a__6537__auto__.push(arg__6538__auto___8776);
{
var G__8777 = seq__7642_8772;
var G__8778 = chunk__7643_8773;
var G__8779 = count__7644_8774;
var G__8780 = (i__7645_8775 + 1);
seq__7642_8772 = G__8777;
chunk__7643_8773 = G__8778;
count__7644_8774 = G__8779;
i__7645_8775 = G__8780;
continue;
}
} else
{var temp__4092__auto___8781 = cljs.core.seq.call(null,seq__7642_8772);if(temp__4092__auto___8781)
{var seq__7642_8782__$1 = temp__4092__auto___8781;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7642_8782__$1))
{var c__5632__auto___8783 = cljs.core.chunk_first.call(null,seq__7642_8782__$1);{
var G__8784 = cljs.core.chunk_rest.call(null,seq__7642_8782__$1);
var G__8785 = c__5632__auto___8783;
var G__8786 = cljs.core.count.call(null,c__5632__auto___8783);
var G__8787 = 0;
seq__7642_8772 = G__8784;
chunk__7643_8773 = G__8785;
count__7644_8774 = G__8786;
i__7645_8775 = G__8787;
continue;
}
} else
{var arg__6538__auto___8788 = cljs.core.first.call(null,seq__7642_8782__$1);a__6537__auto__.push(arg__6538__auto___8788);
{
var G__8789 = cljs.core.next.call(null,seq__7642_8782__$1);
var G__8790 = null;
var G__8791 = 0;
var G__8792 = 0;
seq__7642_8772 = G__8789;
chunk__7643_8773 = G__8790;
count__7644_8774 = G__8791;
i__7645_8775 = G__8792;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.body.apply(null,a__6537__auto__);
};
var body = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return body__delegate.call(this,args__6536__auto__);};
body.cljs$lang$maxFixedArity = 0;
body.cljs$lang$applyTo = (function (arglist__8793){
var args__6536__auto__ = cljs.core.seq(arglist__8793);
return body__delegate(args__6536__auto__);
});
body.cljs$core$IFn$_invoke$arity$variadic = body__delegate;
return body;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.br = (function() { 
var br__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__7650_8794 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__7651_8795 = null;var count__7652_8796 = 0;var i__7653_8797 = 0;while(true){
if((i__7653_8797 < count__7652_8796))
{var arg__6538__auto___8798 = cljs.core._nth.call(null,chunk__7651_8795,i__7653_8797);a__6537__auto__.push(arg__6538__auto___8798);
{
var G__8799 = seq__7650_8794;
var G__8800 = chunk__7651_8795;
var G__8801 = count__7652_8796;
var G__8802 = (i__7653_8797 + 1);
seq__7650_8794 = G__8799;
chunk__7651_8795 = G__8800;
count__7652_8796 = G__8801;
i__7653_8797 = G__8802;
continue;
}
} else
{var temp__4092__auto___8803 = cljs.core.seq.call(null,seq__7650_8794);if(temp__4092__auto___8803)
{var seq__7650_8804__$1 = temp__4092__auto___8803;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7650_8804__$1))
{var c__5632__auto___8805 = cljs.core.chunk_first.call(null,seq__7650_8804__$1);{
var G__8806 = cljs.core.chunk_rest.call(null,seq__7650_8804__$1);
var G__8807 = c__5632__auto___8805;
var G__8808 = cljs.core.count.call(null,c__5632__auto___8805);
var G__8809 = 0;
seq__7650_8794 = G__8806;
chunk__7651_8795 = G__8807;
count__7652_8796 = G__8808;
i__7653_8797 = G__8809;
continue;
}
} else
{var arg__6538__auto___8810 = cljs.core.first.call(null,seq__7650_8804__$1);a__6537__auto__.push(arg__6538__auto___8810);
{
var G__8811 = cljs.core.next.call(null,seq__7650_8804__$1);
var G__8812 = null;
var G__8813 = 0;
var G__8814 = 0;
seq__7650_8794 = G__8811;
chunk__7651_8795 = G__8812;
count__7652_8796 = G__8813;
i__7653_8797 = G__8814;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.br.apply(null,a__6537__auto__);
};
var br = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return br__delegate.call(this,args__6536__auto__);};
br.cljs$lang$maxFixedArity = 0;
br.cljs$lang$applyTo = (function (arglist__8815){
var args__6536__auto__ = cljs.core.seq(arglist__8815);
return br__delegate(args__6536__auto__);
});
br.cljs$core$IFn$_invoke$arity$variadic = br__delegate;
return br;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.button = (function() { 
var button__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__7658_8816 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__7659_8817 = null;var count__7660_8818 = 0;var i__7661_8819 = 0;while(true){
if((i__7661_8819 < count__7660_8818))
{var arg__6538__auto___8820 = cljs.core._nth.call(null,chunk__7659_8817,i__7661_8819);a__6537__auto__.push(arg__6538__auto___8820);
{
var G__8821 = seq__7658_8816;
var G__8822 = chunk__7659_8817;
var G__8823 = count__7660_8818;
var G__8824 = (i__7661_8819 + 1);
seq__7658_8816 = G__8821;
chunk__7659_8817 = G__8822;
count__7660_8818 = G__8823;
i__7661_8819 = G__8824;
continue;
}
} else
{var temp__4092__auto___8825 = cljs.core.seq.call(null,seq__7658_8816);if(temp__4092__auto___8825)
{var seq__7658_8826__$1 = temp__4092__auto___8825;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7658_8826__$1))
{var c__5632__auto___8827 = cljs.core.chunk_first.call(null,seq__7658_8826__$1);{
var G__8828 = cljs.core.chunk_rest.call(null,seq__7658_8826__$1);
var G__8829 = c__5632__auto___8827;
var G__8830 = cljs.core.count.call(null,c__5632__auto___8827);
var G__8831 = 0;
seq__7658_8816 = G__8828;
chunk__7659_8817 = G__8829;
count__7660_8818 = G__8830;
i__7661_8819 = G__8831;
continue;
}
} else
{var arg__6538__auto___8832 = cljs.core.first.call(null,seq__7658_8826__$1);a__6537__auto__.push(arg__6538__auto___8832);
{
var G__8833 = cljs.core.next.call(null,seq__7658_8826__$1);
var G__8834 = null;
var G__8835 = 0;
var G__8836 = 0;
seq__7658_8816 = G__8833;
chunk__7659_8817 = G__8834;
count__7660_8818 = G__8835;
i__7661_8819 = G__8836;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.button.apply(null,a__6537__auto__);
};
var button = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return button__delegate.call(this,args__6536__auto__);};
button.cljs$lang$maxFixedArity = 0;
button.cljs$lang$applyTo = (function (arglist__8837){
var args__6536__auto__ = cljs.core.seq(arglist__8837);
return button__delegate(args__6536__auto__);
});
button.cljs$core$IFn$_invoke$arity$variadic = button__delegate;
return button;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.canvas = (function() { 
var canvas__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__7666_8838 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__7667_8839 = null;var count__7668_8840 = 0;var i__7669_8841 = 0;while(true){
if((i__7669_8841 < count__7668_8840))
{var arg__6538__auto___8842 = cljs.core._nth.call(null,chunk__7667_8839,i__7669_8841);a__6537__auto__.push(arg__6538__auto___8842);
{
var G__8843 = seq__7666_8838;
var G__8844 = chunk__7667_8839;
var G__8845 = count__7668_8840;
var G__8846 = (i__7669_8841 + 1);
seq__7666_8838 = G__8843;
chunk__7667_8839 = G__8844;
count__7668_8840 = G__8845;
i__7669_8841 = G__8846;
continue;
}
} else
{var temp__4092__auto___8847 = cljs.core.seq.call(null,seq__7666_8838);if(temp__4092__auto___8847)
{var seq__7666_8848__$1 = temp__4092__auto___8847;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7666_8848__$1))
{var c__5632__auto___8849 = cljs.core.chunk_first.call(null,seq__7666_8848__$1);{
var G__8850 = cljs.core.chunk_rest.call(null,seq__7666_8848__$1);
var G__8851 = c__5632__auto___8849;
var G__8852 = cljs.core.count.call(null,c__5632__auto___8849);
var G__8853 = 0;
seq__7666_8838 = G__8850;
chunk__7667_8839 = G__8851;
count__7668_8840 = G__8852;
i__7669_8841 = G__8853;
continue;
}
} else
{var arg__6538__auto___8854 = cljs.core.first.call(null,seq__7666_8848__$1);a__6537__auto__.push(arg__6538__auto___8854);
{
var G__8855 = cljs.core.next.call(null,seq__7666_8848__$1);
var G__8856 = null;
var G__8857 = 0;
var G__8858 = 0;
seq__7666_8838 = G__8855;
chunk__7667_8839 = G__8856;
count__7668_8840 = G__8857;
i__7669_8841 = G__8858;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.canvas.apply(null,a__6537__auto__);
};
var canvas = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return canvas__delegate.call(this,args__6536__auto__);};
canvas.cljs$lang$maxFixedArity = 0;
canvas.cljs$lang$applyTo = (function (arglist__8859){
var args__6536__auto__ = cljs.core.seq(arglist__8859);
return canvas__delegate(args__6536__auto__);
});
canvas.cljs$core$IFn$_invoke$arity$variadic = canvas__delegate;
return canvas;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.caption = (function() { 
var caption__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__7674_8860 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__7675_8861 = null;var count__7676_8862 = 0;var i__7677_8863 = 0;while(true){
if((i__7677_8863 < count__7676_8862))
{var arg__6538__auto___8864 = cljs.core._nth.call(null,chunk__7675_8861,i__7677_8863);a__6537__auto__.push(arg__6538__auto___8864);
{
var G__8865 = seq__7674_8860;
var G__8866 = chunk__7675_8861;
var G__8867 = count__7676_8862;
var G__8868 = (i__7677_8863 + 1);
seq__7674_8860 = G__8865;
chunk__7675_8861 = G__8866;
count__7676_8862 = G__8867;
i__7677_8863 = G__8868;
continue;
}
} else
{var temp__4092__auto___8869 = cljs.core.seq.call(null,seq__7674_8860);if(temp__4092__auto___8869)
{var seq__7674_8870__$1 = temp__4092__auto___8869;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7674_8870__$1))
{var c__5632__auto___8871 = cljs.core.chunk_first.call(null,seq__7674_8870__$1);{
var G__8872 = cljs.core.chunk_rest.call(null,seq__7674_8870__$1);
var G__8873 = c__5632__auto___8871;
var G__8874 = cljs.core.count.call(null,c__5632__auto___8871);
var G__8875 = 0;
seq__7674_8860 = G__8872;
chunk__7675_8861 = G__8873;
count__7676_8862 = G__8874;
i__7677_8863 = G__8875;
continue;
}
} else
{var arg__6538__auto___8876 = cljs.core.first.call(null,seq__7674_8870__$1);a__6537__auto__.push(arg__6538__auto___8876);
{
var G__8877 = cljs.core.next.call(null,seq__7674_8870__$1);
var G__8878 = null;
var G__8879 = 0;
var G__8880 = 0;
seq__7674_8860 = G__8877;
chunk__7675_8861 = G__8878;
count__7676_8862 = G__8879;
i__7677_8863 = G__8880;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.caption.apply(null,a__6537__auto__);
};
var caption = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return caption__delegate.call(this,args__6536__auto__);};
caption.cljs$lang$maxFixedArity = 0;
caption.cljs$lang$applyTo = (function (arglist__8881){
var args__6536__auto__ = cljs.core.seq(arglist__8881);
return caption__delegate(args__6536__auto__);
});
caption.cljs$core$IFn$_invoke$arity$variadic = caption__delegate;
return caption;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.cite = (function() { 
var cite__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__7682_8882 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__7683_8883 = null;var count__7684_8884 = 0;var i__7685_8885 = 0;while(true){
if((i__7685_8885 < count__7684_8884))
{var arg__6538__auto___8886 = cljs.core._nth.call(null,chunk__7683_8883,i__7685_8885);a__6537__auto__.push(arg__6538__auto___8886);
{
var G__8887 = seq__7682_8882;
var G__8888 = chunk__7683_8883;
var G__8889 = count__7684_8884;
var G__8890 = (i__7685_8885 + 1);
seq__7682_8882 = G__8887;
chunk__7683_8883 = G__8888;
count__7684_8884 = G__8889;
i__7685_8885 = G__8890;
continue;
}
} else
{var temp__4092__auto___8891 = cljs.core.seq.call(null,seq__7682_8882);if(temp__4092__auto___8891)
{var seq__7682_8892__$1 = temp__4092__auto___8891;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7682_8892__$1))
{var c__5632__auto___8893 = cljs.core.chunk_first.call(null,seq__7682_8892__$1);{
var G__8894 = cljs.core.chunk_rest.call(null,seq__7682_8892__$1);
var G__8895 = c__5632__auto___8893;
var G__8896 = cljs.core.count.call(null,c__5632__auto___8893);
var G__8897 = 0;
seq__7682_8882 = G__8894;
chunk__7683_8883 = G__8895;
count__7684_8884 = G__8896;
i__7685_8885 = G__8897;
continue;
}
} else
{var arg__6538__auto___8898 = cljs.core.first.call(null,seq__7682_8892__$1);a__6537__auto__.push(arg__6538__auto___8898);
{
var G__8899 = cljs.core.next.call(null,seq__7682_8892__$1);
var G__8900 = null;
var G__8901 = 0;
var G__8902 = 0;
seq__7682_8882 = G__8899;
chunk__7683_8883 = G__8900;
count__7684_8884 = G__8901;
i__7685_8885 = G__8902;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.cite.apply(null,a__6537__auto__);
};
var cite = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return cite__delegate.call(this,args__6536__auto__);};
cite.cljs$lang$maxFixedArity = 0;
cite.cljs$lang$applyTo = (function (arglist__8903){
var args__6536__auto__ = cljs.core.seq(arglist__8903);
return cite__delegate(args__6536__auto__);
});
cite.cljs$core$IFn$_invoke$arity$variadic = cite__delegate;
return cite;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.code = (function() { 
var code__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__7690_8904 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__7691_8905 = null;var count__7692_8906 = 0;var i__7693_8907 = 0;while(true){
if((i__7693_8907 < count__7692_8906))
{var arg__6538__auto___8908 = cljs.core._nth.call(null,chunk__7691_8905,i__7693_8907);a__6537__auto__.push(arg__6538__auto___8908);
{
var G__8909 = seq__7690_8904;
var G__8910 = chunk__7691_8905;
var G__8911 = count__7692_8906;
var G__8912 = (i__7693_8907 + 1);
seq__7690_8904 = G__8909;
chunk__7691_8905 = G__8910;
count__7692_8906 = G__8911;
i__7693_8907 = G__8912;
continue;
}
} else
{var temp__4092__auto___8913 = cljs.core.seq.call(null,seq__7690_8904);if(temp__4092__auto___8913)
{var seq__7690_8914__$1 = temp__4092__auto___8913;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7690_8914__$1))
{var c__5632__auto___8915 = cljs.core.chunk_first.call(null,seq__7690_8914__$1);{
var G__8916 = cljs.core.chunk_rest.call(null,seq__7690_8914__$1);
var G__8917 = c__5632__auto___8915;
var G__8918 = cljs.core.count.call(null,c__5632__auto___8915);
var G__8919 = 0;
seq__7690_8904 = G__8916;
chunk__7691_8905 = G__8917;
count__7692_8906 = G__8918;
i__7693_8907 = G__8919;
continue;
}
} else
{var arg__6538__auto___8920 = cljs.core.first.call(null,seq__7690_8914__$1);a__6537__auto__.push(arg__6538__auto___8920);
{
var G__8921 = cljs.core.next.call(null,seq__7690_8914__$1);
var G__8922 = null;
var G__8923 = 0;
var G__8924 = 0;
seq__7690_8904 = G__8921;
chunk__7691_8905 = G__8922;
count__7692_8906 = G__8923;
i__7693_8907 = G__8924;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.code.apply(null,a__6537__auto__);
};
var code = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return code__delegate.call(this,args__6536__auto__);};
code.cljs$lang$maxFixedArity = 0;
code.cljs$lang$applyTo = (function (arglist__8925){
var args__6536__auto__ = cljs.core.seq(arglist__8925);
return code__delegate(args__6536__auto__);
});
code.cljs$core$IFn$_invoke$arity$variadic = code__delegate;
return code;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.col = (function() { 
var col__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__7698_8926 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__7699_8927 = null;var count__7700_8928 = 0;var i__7701_8929 = 0;while(true){
if((i__7701_8929 < count__7700_8928))
{var arg__6538__auto___8930 = cljs.core._nth.call(null,chunk__7699_8927,i__7701_8929);a__6537__auto__.push(arg__6538__auto___8930);
{
var G__8931 = seq__7698_8926;
var G__8932 = chunk__7699_8927;
var G__8933 = count__7700_8928;
var G__8934 = (i__7701_8929 + 1);
seq__7698_8926 = G__8931;
chunk__7699_8927 = G__8932;
count__7700_8928 = G__8933;
i__7701_8929 = G__8934;
continue;
}
} else
{var temp__4092__auto___8935 = cljs.core.seq.call(null,seq__7698_8926);if(temp__4092__auto___8935)
{var seq__7698_8936__$1 = temp__4092__auto___8935;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7698_8936__$1))
{var c__5632__auto___8937 = cljs.core.chunk_first.call(null,seq__7698_8936__$1);{
var G__8938 = cljs.core.chunk_rest.call(null,seq__7698_8936__$1);
var G__8939 = c__5632__auto___8937;
var G__8940 = cljs.core.count.call(null,c__5632__auto___8937);
var G__8941 = 0;
seq__7698_8926 = G__8938;
chunk__7699_8927 = G__8939;
count__7700_8928 = G__8940;
i__7701_8929 = G__8941;
continue;
}
} else
{var arg__6538__auto___8942 = cljs.core.first.call(null,seq__7698_8936__$1);a__6537__auto__.push(arg__6538__auto___8942);
{
var G__8943 = cljs.core.next.call(null,seq__7698_8936__$1);
var G__8944 = null;
var G__8945 = 0;
var G__8946 = 0;
seq__7698_8926 = G__8943;
chunk__7699_8927 = G__8944;
count__7700_8928 = G__8945;
i__7701_8929 = G__8946;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.col.apply(null,a__6537__auto__);
};
var col = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return col__delegate.call(this,args__6536__auto__);};
col.cljs$lang$maxFixedArity = 0;
col.cljs$lang$applyTo = (function (arglist__8947){
var args__6536__auto__ = cljs.core.seq(arglist__8947);
return col__delegate(args__6536__auto__);
});
col.cljs$core$IFn$_invoke$arity$variadic = col__delegate;
return col;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.colgroup = (function() { 
var colgroup__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__7706_8948 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__7707_8949 = null;var count__7708_8950 = 0;var i__7709_8951 = 0;while(true){
if((i__7709_8951 < count__7708_8950))
{var arg__6538__auto___8952 = cljs.core._nth.call(null,chunk__7707_8949,i__7709_8951);a__6537__auto__.push(arg__6538__auto___8952);
{
var G__8953 = seq__7706_8948;
var G__8954 = chunk__7707_8949;
var G__8955 = count__7708_8950;
var G__8956 = (i__7709_8951 + 1);
seq__7706_8948 = G__8953;
chunk__7707_8949 = G__8954;
count__7708_8950 = G__8955;
i__7709_8951 = G__8956;
continue;
}
} else
{var temp__4092__auto___8957 = cljs.core.seq.call(null,seq__7706_8948);if(temp__4092__auto___8957)
{var seq__7706_8958__$1 = temp__4092__auto___8957;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7706_8958__$1))
{var c__5632__auto___8959 = cljs.core.chunk_first.call(null,seq__7706_8958__$1);{
var G__8960 = cljs.core.chunk_rest.call(null,seq__7706_8958__$1);
var G__8961 = c__5632__auto___8959;
var G__8962 = cljs.core.count.call(null,c__5632__auto___8959);
var G__8963 = 0;
seq__7706_8948 = G__8960;
chunk__7707_8949 = G__8961;
count__7708_8950 = G__8962;
i__7709_8951 = G__8963;
continue;
}
} else
{var arg__6538__auto___8964 = cljs.core.first.call(null,seq__7706_8958__$1);a__6537__auto__.push(arg__6538__auto___8964);
{
var G__8965 = cljs.core.next.call(null,seq__7706_8958__$1);
var G__8966 = null;
var G__8967 = 0;
var G__8968 = 0;
seq__7706_8948 = G__8965;
chunk__7707_8949 = G__8966;
count__7708_8950 = G__8967;
i__7709_8951 = G__8968;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.colgroup.apply(null,a__6537__auto__);
};
var colgroup = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return colgroup__delegate.call(this,args__6536__auto__);};
colgroup.cljs$lang$maxFixedArity = 0;
colgroup.cljs$lang$applyTo = (function (arglist__8969){
var args__6536__auto__ = cljs.core.seq(arglist__8969);
return colgroup__delegate(args__6536__auto__);
});
colgroup.cljs$core$IFn$_invoke$arity$variadic = colgroup__delegate;
return colgroup;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.data = (function() { 
var data__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__7714_8970 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__7715_8971 = null;var count__7716_8972 = 0;var i__7717_8973 = 0;while(true){
if((i__7717_8973 < count__7716_8972))
{var arg__6538__auto___8974 = cljs.core._nth.call(null,chunk__7715_8971,i__7717_8973);a__6537__auto__.push(arg__6538__auto___8974);
{
var G__8975 = seq__7714_8970;
var G__8976 = chunk__7715_8971;
var G__8977 = count__7716_8972;
var G__8978 = (i__7717_8973 + 1);
seq__7714_8970 = G__8975;
chunk__7715_8971 = G__8976;
count__7716_8972 = G__8977;
i__7717_8973 = G__8978;
continue;
}
} else
{var temp__4092__auto___8979 = cljs.core.seq.call(null,seq__7714_8970);if(temp__4092__auto___8979)
{var seq__7714_8980__$1 = temp__4092__auto___8979;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7714_8980__$1))
{var c__5632__auto___8981 = cljs.core.chunk_first.call(null,seq__7714_8980__$1);{
var G__8982 = cljs.core.chunk_rest.call(null,seq__7714_8980__$1);
var G__8983 = c__5632__auto___8981;
var G__8984 = cljs.core.count.call(null,c__5632__auto___8981);
var G__8985 = 0;
seq__7714_8970 = G__8982;
chunk__7715_8971 = G__8983;
count__7716_8972 = G__8984;
i__7717_8973 = G__8985;
continue;
}
} else
{var arg__6538__auto___8986 = cljs.core.first.call(null,seq__7714_8980__$1);a__6537__auto__.push(arg__6538__auto___8986);
{
var G__8987 = cljs.core.next.call(null,seq__7714_8980__$1);
var G__8988 = null;
var G__8989 = 0;
var G__8990 = 0;
seq__7714_8970 = G__8987;
chunk__7715_8971 = G__8988;
count__7716_8972 = G__8989;
i__7717_8973 = G__8990;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.data.apply(null,a__6537__auto__);
};
var data = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return data__delegate.call(this,args__6536__auto__);};
data.cljs$lang$maxFixedArity = 0;
data.cljs$lang$applyTo = (function (arglist__8991){
var args__6536__auto__ = cljs.core.seq(arglist__8991);
return data__delegate(args__6536__auto__);
});
data.cljs$core$IFn$_invoke$arity$variadic = data__delegate;
return data;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.datalist = (function() { 
var datalist__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__7722_8992 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__7723_8993 = null;var count__7724_8994 = 0;var i__7725_8995 = 0;while(true){
if((i__7725_8995 < count__7724_8994))
{var arg__6538__auto___8996 = cljs.core._nth.call(null,chunk__7723_8993,i__7725_8995);a__6537__auto__.push(arg__6538__auto___8996);
{
var G__8997 = seq__7722_8992;
var G__8998 = chunk__7723_8993;
var G__8999 = count__7724_8994;
var G__9000 = (i__7725_8995 + 1);
seq__7722_8992 = G__8997;
chunk__7723_8993 = G__8998;
count__7724_8994 = G__8999;
i__7725_8995 = G__9000;
continue;
}
} else
{var temp__4092__auto___9001 = cljs.core.seq.call(null,seq__7722_8992);if(temp__4092__auto___9001)
{var seq__7722_9002__$1 = temp__4092__auto___9001;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7722_9002__$1))
{var c__5632__auto___9003 = cljs.core.chunk_first.call(null,seq__7722_9002__$1);{
var G__9004 = cljs.core.chunk_rest.call(null,seq__7722_9002__$1);
var G__9005 = c__5632__auto___9003;
var G__9006 = cljs.core.count.call(null,c__5632__auto___9003);
var G__9007 = 0;
seq__7722_8992 = G__9004;
chunk__7723_8993 = G__9005;
count__7724_8994 = G__9006;
i__7725_8995 = G__9007;
continue;
}
} else
{var arg__6538__auto___9008 = cljs.core.first.call(null,seq__7722_9002__$1);a__6537__auto__.push(arg__6538__auto___9008);
{
var G__9009 = cljs.core.next.call(null,seq__7722_9002__$1);
var G__9010 = null;
var G__9011 = 0;
var G__9012 = 0;
seq__7722_8992 = G__9009;
chunk__7723_8993 = G__9010;
count__7724_8994 = G__9011;
i__7725_8995 = G__9012;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.datalist.apply(null,a__6537__auto__);
};
var datalist = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return datalist__delegate.call(this,args__6536__auto__);};
datalist.cljs$lang$maxFixedArity = 0;
datalist.cljs$lang$applyTo = (function (arglist__9013){
var args__6536__auto__ = cljs.core.seq(arglist__9013);
return datalist__delegate(args__6536__auto__);
});
datalist.cljs$core$IFn$_invoke$arity$variadic = datalist__delegate;
return datalist;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.dd = (function() { 
var dd__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__7730_9014 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__7731_9015 = null;var count__7732_9016 = 0;var i__7733_9017 = 0;while(true){
if((i__7733_9017 < count__7732_9016))
{var arg__6538__auto___9018 = cljs.core._nth.call(null,chunk__7731_9015,i__7733_9017);a__6537__auto__.push(arg__6538__auto___9018);
{
var G__9019 = seq__7730_9014;
var G__9020 = chunk__7731_9015;
var G__9021 = count__7732_9016;
var G__9022 = (i__7733_9017 + 1);
seq__7730_9014 = G__9019;
chunk__7731_9015 = G__9020;
count__7732_9016 = G__9021;
i__7733_9017 = G__9022;
continue;
}
} else
{var temp__4092__auto___9023 = cljs.core.seq.call(null,seq__7730_9014);if(temp__4092__auto___9023)
{var seq__7730_9024__$1 = temp__4092__auto___9023;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7730_9024__$1))
{var c__5632__auto___9025 = cljs.core.chunk_first.call(null,seq__7730_9024__$1);{
var G__9026 = cljs.core.chunk_rest.call(null,seq__7730_9024__$1);
var G__9027 = c__5632__auto___9025;
var G__9028 = cljs.core.count.call(null,c__5632__auto___9025);
var G__9029 = 0;
seq__7730_9014 = G__9026;
chunk__7731_9015 = G__9027;
count__7732_9016 = G__9028;
i__7733_9017 = G__9029;
continue;
}
} else
{var arg__6538__auto___9030 = cljs.core.first.call(null,seq__7730_9024__$1);a__6537__auto__.push(arg__6538__auto___9030);
{
var G__9031 = cljs.core.next.call(null,seq__7730_9024__$1);
var G__9032 = null;
var G__9033 = 0;
var G__9034 = 0;
seq__7730_9014 = G__9031;
chunk__7731_9015 = G__9032;
count__7732_9016 = G__9033;
i__7733_9017 = G__9034;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.dd.apply(null,a__6537__auto__);
};
var dd = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return dd__delegate.call(this,args__6536__auto__);};
dd.cljs$lang$maxFixedArity = 0;
dd.cljs$lang$applyTo = (function (arglist__9035){
var args__6536__auto__ = cljs.core.seq(arglist__9035);
return dd__delegate(args__6536__auto__);
});
dd.cljs$core$IFn$_invoke$arity$variadic = dd__delegate;
return dd;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.del = (function() { 
var del__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__7738_9036 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__7739_9037 = null;var count__7740_9038 = 0;var i__7741_9039 = 0;while(true){
if((i__7741_9039 < count__7740_9038))
{var arg__6538__auto___9040 = cljs.core._nth.call(null,chunk__7739_9037,i__7741_9039);a__6537__auto__.push(arg__6538__auto___9040);
{
var G__9041 = seq__7738_9036;
var G__9042 = chunk__7739_9037;
var G__9043 = count__7740_9038;
var G__9044 = (i__7741_9039 + 1);
seq__7738_9036 = G__9041;
chunk__7739_9037 = G__9042;
count__7740_9038 = G__9043;
i__7741_9039 = G__9044;
continue;
}
} else
{var temp__4092__auto___9045 = cljs.core.seq.call(null,seq__7738_9036);if(temp__4092__auto___9045)
{var seq__7738_9046__$1 = temp__4092__auto___9045;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7738_9046__$1))
{var c__5632__auto___9047 = cljs.core.chunk_first.call(null,seq__7738_9046__$1);{
var G__9048 = cljs.core.chunk_rest.call(null,seq__7738_9046__$1);
var G__9049 = c__5632__auto___9047;
var G__9050 = cljs.core.count.call(null,c__5632__auto___9047);
var G__9051 = 0;
seq__7738_9036 = G__9048;
chunk__7739_9037 = G__9049;
count__7740_9038 = G__9050;
i__7741_9039 = G__9051;
continue;
}
} else
{var arg__6538__auto___9052 = cljs.core.first.call(null,seq__7738_9046__$1);a__6537__auto__.push(arg__6538__auto___9052);
{
var G__9053 = cljs.core.next.call(null,seq__7738_9046__$1);
var G__9054 = null;
var G__9055 = 0;
var G__9056 = 0;
seq__7738_9036 = G__9053;
chunk__7739_9037 = G__9054;
count__7740_9038 = G__9055;
i__7741_9039 = G__9056;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.del.apply(null,a__6537__auto__);
};
var del = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return del__delegate.call(this,args__6536__auto__);};
del.cljs$lang$maxFixedArity = 0;
del.cljs$lang$applyTo = (function (arglist__9057){
var args__6536__auto__ = cljs.core.seq(arglist__9057);
return del__delegate(args__6536__auto__);
});
del.cljs$core$IFn$_invoke$arity$variadic = del__delegate;
return del;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.details = (function() { 
var details__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__7746_9058 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__7747_9059 = null;var count__7748_9060 = 0;var i__7749_9061 = 0;while(true){
if((i__7749_9061 < count__7748_9060))
{var arg__6538__auto___9062 = cljs.core._nth.call(null,chunk__7747_9059,i__7749_9061);a__6537__auto__.push(arg__6538__auto___9062);
{
var G__9063 = seq__7746_9058;
var G__9064 = chunk__7747_9059;
var G__9065 = count__7748_9060;
var G__9066 = (i__7749_9061 + 1);
seq__7746_9058 = G__9063;
chunk__7747_9059 = G__9064;
count__7748_9060 = G__9065;
i__7749_9061 = G__9066;
continue;
}
} else
{var temp__4092__auto___9067 = cljs.core.seq.call(null,seq__7746_9058);if(temp__4092__auto___9067)
{var seq__7746_9068__$1 = temp__4092__auto___9067;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7746_9068__$1))
{var c__5632__auto___9069 = cljs.core.chunk_first.call(null,seq__7746_9068__$1);{
var G__9070 = cljs.core.chunk_rest.call(null,seq__7746_9068__$1);
var G__9071 = c__5632__auto___9069;
var G__9072 = cljs.core.count.call(null,c__5632__auto___9069);
var G__9073 = 0;
seq__7746_9058 = G__9070;
chunk__7747_9059 = G__9071;
count__7748_9060 = G__9072;
i__7749_9061 = G__9073;
continue;
}
} else
{var arg__6538__auto___9074 = cljs.core.first.call(null,seq__7746_9068__$1);a__6537__auto__.push(arg__6538__auto___9074);
{
var G__9075 = cljs.core.next.call(null,seq__7746_9068__$1);
var G__9076 = null;
var G__9077 = 0;
var G__9078 = 0;
seq__7746_9058 = G__9075;
chunk__7747_9059 = G__9076;
count__7748_9060 = G__9077;
i__7749_9061 = G__9078;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.details.apply(null,a__6537__auto__);
};
var details = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return details__delegate.call(this,args__6536__auto__);};
details.cljs$lang$maxFixedArity = 0;
details.cljs$lang$applyTo = (function (arglist__9079){
var args__6536__auto__ = cljs.core.seq(arglist__9079);
return details__delegate(args__6536__auto__);
});
details.cljs$core$IFn$_invoke$arity$variadic = details__delegate;
return details;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.dfn = (function() { 
var dfn__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__7754_9080 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__7755_9081 = null;var count__7756_9082 = 0;var i__7757_9083 = 0;while(true){
if((i__7757_9083 < count__7756_9082))
{var arg__6538__auto___9084 = cljs.core._nth.call(null,chunk__7755_9081,i__7757_9083);a__6537__auto__.push(arg__6538__auto___9084);
{
var G__9085 = seq__7754_9080;
var G__9086 = chunk__7755_9081;
var G__9087 = count__7756_9082;
var G__9088 = (i__7757_9083 + 1);
seq__7754_9080 = G__9085;
chunk__7755_9081 = G__9086;
count__7756_9082 = G__9087;
i__7757_9083 = G__9088;
continue;
}
} else
{var temp__4092__auto___9089 = cljs.core.seq.call(null,seq__7754_9080);if(temp__4092__auto___9089)
{var seq__7754_9090__$1 = temp__4092__auto___9089;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7754_9090__$1))
{var c__5632__auto___9091 = cljs.core.chunk_first.call(null,seq__7754_9090__$1);{
var G__9092 = cljs.core.chunk_rest.call(null,seq__7754_9090__$1);
var G__9093 = c__5632__auto___9091;
var G__9094 = cljs.core.count.call(null,c__5632__auto___9091);
var G__9095 = 0;
seq__7754_9080 = G__9092;
chunk__7755_9081 = G__9093;
count__7756_9082 = G__9094;
i__7757_9083 = G__9095;
continue;
}
} else
{var arg__6538__auto___9096 = cljs.core.first.call(null,seq__7754_9090__$1);a__6537__auto__.push(arg__6538__auto___9096);
{
var G__9097 = cljs.core.next.call(null,seq__7754_9090__$1);
var G__9098 = null;
var G__9099 = 0;
var G__9100 = 0;
seq__7754_9080 = G__9097;
chunk__7755_9081 = G__9098;
count__7756_9082 = G__9099;
i__7757_9083 = G__9100;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.dfn.apply(null,a__6537__auto__);
};
var dfn = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return dfn__delegate.call(this,args__6536__auto__);};
dfn.cljs$lang$maxFixedArity = 0;
dfn.cljs$lang$applyTo = (function (arglist__9101){
var args__6536__auto__ = cljs.core.seq(arglist__9101);
return dfn__delegate(args__6536__auto__);
});
dfn.cljs$core$IFn$_invoke$arity$variadic = dfn__delegate;
return dfn;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.div = (function() { 
var div__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__7762_9102 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__7763_9103 = null;var count__7764_9104 = 0;var i__7765_9105 = 0;while(true){
if((i__7765_9105 < count__7764_9104))
{var arg__6538__auto___9106 = cljs.core._nth.call(null,chunk__7763_9103,i__7765_9105);a__6537__auto__.push(arg__6538__auto___9106);
{
var G__9107 = seq__7762_9102;
var G__9108 = chunk__7763_9103;
var G__9109 = count__7764_9104;
var G__9110 = (i__7765_9105 + 1);
seq__7762_9102 = G__9107;
chunk__7763_9103 = G__9108;
count__7764_9104 = G__9109;
i__7765_9105 = G__9110;
continue;
}
} else
{var temp__4092__auto___9111 = cljs.core.seq.call(null,seq__7762_9102);if(temp__4092__auto___9111)
{var seq__7762_9112__$1 = temp__4092__auto___9111;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7762_9112__$1))
{var c__5632__auto___9113 = cljs.core.chunk_first.call(null,seq__7762_9112__$1);{
var G__9114 = cljs.core.chunk_rest.call(null,seq__7762_9112__$1);
var G__9115 = c__5632__auto___9113;
var G__9116 = cljs.core.count.call(null,c__5632__auto___9113);
var G__9117 = 0;
seq__7762_9102 = G__9114;
chunk__7763_9103 = G__9115;
count__7764_9104 = G__9116;
i__7765_9105 = G__9117;
continue;
}
} else
{var arg__6538__auto___9118 = cljs.core.first.call(null,seq__7762_9112__$1);a__6537__auto__.push(arg__6538__auto___9118);
{
var G__9119 = cljs.core.next.call(null,seq__7762_9112__$1);
var G__9120 = null;
var G__9121 = 0;
var G__9122 = 0;
seq__7762_9102 = G__9119;
chunk__7763_9103 = G__9120;
count__7764_9104 = G__9121;
i__7765_9105 = G__9122;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.div.apply(null,a__6537__auto__);
};
var div = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return div__delegate.call(this,args__6536__auto__);};
div.cljs$lang$maxFixedArity = 0;
div.cljs$lang$applyTo = (function (arglist__9123){
var args__6536__auto__ = cljs.core.seq(arglist__9123);
return div__delegate(args__6536__auto__);
});
div.cljs$core$IFn$_invoke$arity$variadic = div__delegate;
return div;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.dl = (function() { 
var dl__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__7770_9124 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__7771_9125 = null;var count__7772_9126 = 0;var i__7773_9127 = 0;while(true){
if((i__7773_9127 < count__7772_9126))
{var arg__6538__auto___9128 = cljs.core._nth.call(null,chunk__7771_9125,i__7773_9127);a__6537__auto__.push(arg__6538__auto___9128);
{
var G__9129 = seq__7770_9124;
var G__9130 = chunk__7771_9125;
var G__9131 = count__7772_9126;
var G__9132 = (i__7773_9127 + 1);
seq__7770_9124 = G__9129;
chunk__7771_9125 = G__9130;
count__7772_9126 = G__9131;
i__7773_9127 = G__9132;
continue;
}
} else
{var temp__4092__auto___9133 = cljs.core.seq.call(null,seq__7770_9124);if(temp__4092__auto___9133)
{var seq__7770_9134__$1 = temp__4092__auto___9133;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7770_9134__$1))
{var c__5632__auto___9135 = cljs.core.chunk_first.call(null,seq__7770_9134__$1);{
var G__9136 = cljs.core.chunk_rest.call(null,seq__7770_9134__$1);
var G__9137 = c__5632__auto___9135;
var G__9138 = cljs.core.count.call(null,c__5632__auto___9135);
var G__9139 = 0;
seq__7770_9124 = G__9136;
chunk__7771_9125 = G__9137;
count__7772_9126 = G__9138;
i__7773_9127 = G__9139;
continue;
}
} else
{var arg__6538__auto___9140 = cljs.core.first.call(null,seq__7770_9134__$1);a__6537__auto__.push(arg__6538__auto___9140);
{
var G__9141 = cljs.core.next.call(null,seq__7770_9134__$1);
var G__9142 = null;
var G__9143 = 0;
var G__9144 = 0;
seq__7770_9124 = G__9141;
chunk__7771_9125 = G__9142;
count__7772_9126 = G__9143;
i__7773_9127 = G__9144;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.dl.apply(null,a__6537__auto__);
};
var dl = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return dl__delegate.call(this,args__6536__auto__);};
dl.cljs$lang$maxFixedArity = 0;
dl.cljs$lang$applyTo = (function (arglist__9145){
var args__6536__auto__ = cljs.core.seq(arglist__9145);
return dl__delegate(args__6536__auto__);
});
dl.cljs$core$IFn$_invoke$arity$variadic = dl__delegate;
return dl;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.dt = (function() { 
var dt__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__7778_9146 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__7779_9147 = null;var count__7780_9148 = 0;var i__7781_9149 = 0;while(true){
if((i__7781_9149 < count__7780_9148))
{var arg__6538__auto___9150 = cljs.core._nth.call(null,chunk__7779_9147,i__7781_9149);a__6537__auto__.push(arg__6538__auto___9150);
{
var G__9151 = seq__7778_9146;
var G__9152 = chunk__7779_9147;
var G__9153 = count__7780_9148;
var G__9154 = (i__7781_9149 + 1);
seq__7778_9146 = G__9151;
chunk__7779_9147 = G__9152;
count__7780_9148 = G__9153;
i__7781_9149 = G__9154;
continue;
}
} else
{var temp__4092__auto___9155 = cljs.core.seq.call(null,seq__7778_9146);if(temp__4092__auto___9155)
{var seq__7778_9156__$1 = temp__4092__auto___9155;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7778_9156__$1))
{var c__5632__auto___9157 = cljs.core.chunk_first.call(null,seq__7778_9156__$1);{
var G__9158 = cljs.core.chunk_rest.call(null,seq__7778_9156__$1);
var G__9159 = c__5632__auto___9157;
var G__9160 = cljs.core.count.call(null,c__5632__auto___9157);
var G__9161 = 0;
seq__7778_9146 = G__9158;
chunk__7779_9147 = G__9159;
count__7780_9148 = G__9160;
i__7781_9149 = G__9161;
continue;
}
} else
{var arg__6538__auto___9162 = cljs.core.first.call(null,seq__7778_9156__$1);a__6537__auto__.push(arg__6538__auto___9162);
{
var G__9163 = cljs.core.next.call(null,seq__7778_9156__$1);
var G__9164 = null;
var G__9165 = 0;
var G__9166 = 0;
seq__7778_9146 = G__9163;
chunk__7779_9147 = G__9164;
count__7780_9148 = G__9165;
i__7781_9149 = G__9166;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.dt.apply(null,a__6537__auto__);
};
var dt = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return dt__delegate.call(this,args__6536__auto__);};
dt.cljs$lang$maxFixedArity = 0;
dt.cljs$lang$applyTo = (function (arglist__9167){
var args__6536__auto__ = cljs.core.seq(arglist__9167);
return dt__delegate(args__6536__auto__);
});
dt.cljs$core$IFn$_invoke$arity$variadic = dt__delegate;
return dt;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.em = (function() { 
var em__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__7786_9168 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__7787_9169 = null;var count__7788_9170 = 0;var i__7789_9171 = 0;while(true){
if((i__7789_9171 < count__7788_9170))
{var arg__6538__auto___9172 = cljs.core._nth.call(null,chunk__7787_9169,i__7789_9171);a__6537__auto__.push(arg__6538__auto___9172);
{
var G__9173 = seq__7786_9168;
var G__9174 = chunk__7787_9169;
var G__9175 = count__7788_9170;
var G__9176 = (i__7789_9171 + 1);
seq__7786_9168 = G__9173;
chunk__7787_9169 = G__9174;
count__7788_9170 = G__9175;
i__7789_9171 = G__9176;
continue;
}
} else
{var temp__4092__auto___9177 = cljs.core.seq.call(null,seq__7786_9168);if(temp__4092__auto___9177)
{var seq__7786_9178__$1 = temp__4092__auto___9177;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7786_9178__$1))
{var c__5632__auto___9179 = cljs.core.chunk_first.call(null,seq__7786_9178__$1);{
var G__9180 = cljs.core.chunk_rest.call(null,seq__7786_9178__$1);
var G__9181 = c__5632__auto___9179;
var G__9182 = cljs.core.count.call(null,c__5632__auto___9179);
var G__9183 = 0;
seq__7786_9168 = G__9180;
chunk__7787_9169 = G__9181;
count__7788_9170 = G__9182;
i__7789_9171 = G__9183;
continue;
}
} else
{var arg__6538__auto___9184 = cljs.core.first.call(null,seq__7786_9178__$1);a__6537__auto__.push(arg__6538__auto___9184);
{
var G__9185 = cljs.core.next.call(null,seq__7786_9178__$1);
var G__9186 = null;
var G__9187 = 0;
var G__9188 = 0;
seq__7786_9168 = G__9185;
chunk__7787_9169 = G__9186;
count__7788_9170 = G__9187;
i__7789_9171 = G__9188;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.em.apply(null,a__6537__auto__);
};
var em = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return em__delegate.call(this,args__6536__auto__);};
em.cljs$lang$maxFixedArity = 0;
em.cljs$lang$applyTo = (function (arglist__9189){
var args__6536__auto__ = cljs.core.seq(arglist__9189);
return em__delegate(args__6536__auto__);
});
em.cljs$core$IFn$_invoke$arity$variadic = em__delegate;
return em;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.embed = (function() { 
var embed__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__7802_9190 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__7803_9191 = null;var count__7804_9192 = 0;var i__7805_9193 = 0;while(true){
if((i__7805_9193 < count__7804_9192))
{var arg__6538__auto___9194 = cljs.core._nth.call(null,chunk__7803_9191,i__7805_9193);a__6537__auto__.push(arg__6538__auto___9194);
{
var G__9195 = seq__7802_9190;
var G__9196 = chunk__7803_9191;
var G__9197 = count__7804_9192;
var G__9198 = (i__7805_9193 + 1);
seq__7802_9190 = G__9195;
chunk__7803_9191 = G__9196;
count__7804_9192 = G__9197;
i__7805_9193 = G__9198;
continue;
}
} else
{var temp__4092__auto___9199 = cljs.core.seq.call(null,seq__7802_9190);if(temp__4092__auto___9199)
{var seq__7802_9200__$1 = temp__4092__auto___9199;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7802_9200__$1))
{var c__5632__auto___9201 = cljs.core.chunk_first.call(null,seq__7802_9200__$1);{
var G__9202 = cljs.core.chunk_rest.call(null,seq__7802_9200__$1);
var G__9203 = c__5632__auto___9201;
var G__9204 = cljs.core.count.call(null,c__5632__auto___9201);
var G__9205 = 0;
seq__7802_9190 = G__9202;
chunk__7803_9191 = G__9203;
count__7804_9192 = G__9204;
i__7805_9193 = G__9205;
continue;
}
} else
{var arg__6538__auto___9206 = cljs.core.first.call(null,seq__7802_9200__$1);a__6537__auto__.push(arg__6538__auto___9206);
{
var G__9207 = cljs.core.next.call(null,seq__7802_9200__$1);
var G__9208 = null;
var G__9209 = 0;
var G__9210 = 0;
seq__7802_9190 = G__9207;
chunk__7803_9191 = G__9208;
count__7804_9192 = G__9209;
i__7805_9193 = G__9210;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.embed.apply(null,a__6537__auto__);
};
var embed = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return embed__delegate.call(this,args__6536__auto__);};
embed.cljs$lang$maxFixedArity = 0;
embed.cljs$lang$applyTo = (function (arglist__9211){
var args__6536__auto__ = cljs.core.seq(arglist__9211);
return embed__delegate(args__6536__auto__);
});
embed.cljs$core$IFn$_invoke$arity$variadic = embed__delegate;
return embed;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.fieldset = (function() { 
var fieldset__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__7810_9212 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__7811_9213 = null;var count__7812_9214 = 0;var i__7813_9215 = 0;while(true){
if((i__7813_9215 < count__7812_9214))
{var arg__6538__auto___9216 = cljs.core._nth.call(null,chunk__7811_9213,i__7813_9215);a__6537__auto__.push(arg__6538__auto___9216);
{
var G__9217 = seq__7810_9212;
var G__9218 = chunk__7811_9213;
var G__9219 = count__7812_9214;
var G__9220 = (i__7813_9215 + 1);
seq__7810_9212 = G__9217;
chunk__7811_9213 = G__9218;
count__7812_9214 = G__9219;
i__7813_9215 = G__9220;
continue;
}
} else
{var temp__4092__auto___9221 = cljs.core.seq.call(null,seq__7810_9212);if(temp__4092__auto___9221)
{var seq__7810_9222__$1 = temp__4092__auto___9221;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7810_9222__$1))
{var c__5632__auto___9223 = cljs.core.chunk_first.call(null,seq__7810_9222__$1);{
var G__9224 = cljs.core.chunk_rest.call(null,seq__7810_9222__$1);
var G__9225 = c__5632__auto___9223;
var G__9226 = cljs.core.count.call(null,c__5632__auto___9223);
var G__9227 = 0;
seq__7810_9212 = G__9224;
chunk__7811_9213 = G__9225;
count__7812_9214 = G__9226;
i__7813_9215 = G__9227;
continue;
}
} else
{var arg__6538__auto___9228 = cljs.core.first.call(null,seq__7810_9222__$1);a__6537__auto__.push(arg__6538__auto___9228);
{
var G__9229 = cljs.core.next.call(null,seq__7810_9222__$1);
var G__9230 = null;
var G__9231 = 0;
var G__9232 = 0;
seq__7810_9212 = G__9229;
chunk__7811_9213 = G__9230;
count__7812_9214 = G__9231;
i__7813_9215 = G__9232;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.fieldset.apply(null,a__6537__auto__);
};
var fieldset = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return fieldset__delegate.call(this,args__6536__auto__);};
fieldset.cljs$lang$maxFixedArity = 0;
fieldset.cljs$lang$applyTo = (function (arglist__9233){
var args__6536__auto__ = cljs.core.seq(arglist__9233);
return fieldset__delegate(args__6536__auto__);
});
fieldset.cljs$core$IFn$_invoke$arity$variadic = fieldset__delegate;
return fieldset;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.figcaption = (function() { 
var figcaption__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__7818_9234 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__7819_9235 = null;var count__7820_9236 = 0;var i__7821_9237 = 0;while(true){
if((i__7821_9237 < count__7820_9236))
{var arg__6538__auto___9238 = cljs.core._nth.call(null,chunk__7819_9235,i__7821_9237);a__6537__auto__.push(arg__6538__auto___9238);
{
var G__9239 = seq__7818_9234;
var G__9240 = chunk__7819_9235;
var G__9241 = count__7820_9236;
var G__9242 = (i__7821_9237 + 1);
seq__7818_9234 = G__9239;
chunk__7819_9235 = G__9240;
count__7820_9236 = G__9241;
i__7821_9237 = G__9242;
continue;
}
} else
{var temp__4092__auto___9243 = cljs.core.seq.call(null,seq__7818_9234);if(temp__4092__auto___9243)
{var seq__7818_9244__$1 = temp__4092__auto___9243;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7818_9244__$1))
{var c__5632__auto___9245 = cljs.core.chunk_first.call(null,seq__7818_9244__$1);{
var G__9246 = cljs.core.chunk_rest.call(null,seq__7818_9244__$1);
var G__9247 = c__5632__auto___9245;
var G__9248 = cljs.core.count.call(null,c__5632__auto___9245);
var G__9249 = 0;
seq__7818_9234 = G__9246;
chunk__7819_9235 = G__9247;
count__7820_9236 = G__9248;
i__7821_9237 = G__9249;
continue;
}
} else
{var arg__6538__auto___9250 = cljs.core.first.call(null,seq__7818_9244__$1);a__6537__auto__.push(arg__6538__auto___9250);
{
var G__9251 = cljs.core.next.call(null,seq__7818_9244__$1);
var G__9252 = null;
var G__9253 = 0;
var G__9254 = 0;
seq__7818_9234 = G__9251;
chunk__7819_9235 = G__9252;
count__7820_9236 = G__9253;
i__7821_9237 = G__9254;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.figcaption.apply(null,a__6537__auto__);
};
var figcaption = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return figcaption__delegate.call(this,args__6536__auto__);};
figcaption.cljs$lang$maxFixedArity = 0;
figcaption.cljs$lang$applyTo = (function (arglist__9255){
var args__6536__auto__ = cljs.core.seq(arglist__9255);
return figcaption__delegate(args__6536__auto__);
});
figcaption.cljs$core$IFn$_invoke$arity$variadic = figcaption__delegate;
return figcaption;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.figure = (function() { 
var figure__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__7826_9256 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__7827_9257 = null;var count__7828_9258 = 0;var i__7829_9259 = 0;while(true){
if((i__7829_9259 < count__7828_9258))
{var arg__6538__auto___9260 = cljs.core._nth.call(null,chunk__7827_9257,i__7829_9259);a__6537__auto__.push(arg__6538__auto___9260);
{
var G__9261 = seq__7826_9256;
var G__9262 = chunk__7827_9257;
var G__9263 = count__7828_9258;
var G__9264 = (i__7829_9259 + 1);
seq__7826_9256 = G__9261;
chunk__7827_9257 = G__9262;
count__7828_9258 = G__9263;
i__7829_9259 = G__9264;
continue;
}
} else
{var temp__4092__auto___9265 = cljs.core.seq.call(null,seq__7826_9256);if(temp__4092__auto___9265)
{var seq__7826_9266__$1 = temp__4092__auto___9265;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7826_9266__$1))
{var c__5632__auto___9267 = cljs.core.chunk_first.call(null,seq__7826_9266__$1);{
var G__9268 = cljs.core.chunk_rest.call(null,seq__7826_9266__$1);
var G__9269 = c__5632__auto___9267;
var G__9270 = cljs.core.count.call(null,c__5632__auto___9267);
var G__9271 = 0;
seq__7826_9256 = G__9268;
chunk__7827_9257 = G__9269;
count__7828_9258 = G__9270;
i__7829_9259 = G__9271;
continue;
}
} else
{var arg__6538__auto___9272 = cljs.core.first.call(null,seq__7826_9266__$1);a__6537__auto__.push(arg__6538__auto___9272);
{
var G__9273 = cljs.core.next.call(null,seq__7826_9266__$1);
var G__9274 = null;
var G__9275 = 0;
var G__9276 = 0;
seq__7826_9256 = G__9273;
chunk__7827_9257 = G__9274;
count__7828_9258 = G__9275;
i__7829_9259 = G__9276;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.figure.apply(null,a__6537__auto__);
};
var figure = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return figure__delegate.call(this,args__6536__auto__);};
figure.cljs$lang$maxFixedArity = 0;
figure.cljs$lang$applyTo = (function (arglist__9277){
var args__6536__auto__ = cljs.core.seq(arglist__9277);
return figure__delegate(args__6536__auto__);
});
figure.cljs$core$IFn$_invoke$arity$variadic = figure__delegate;
return figure;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.footer = (function() { 
var footer__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__7834_9278 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__7835_9279 = null;var count__7836_9280 = 0;var i__7837_9281 = 0;while(true){
if((i__7837_9281 < count__7836_9280))
{var arg__6538__auto___9282 = cljs.core._nth.call(null,chunk__7835_9279,i__7837_9281);a__6537__auto__.push(arg__6538__auto___9282);
{
var G__9283 = seq__7834_9278;
var G__9284 = chunk__7835_9279;
var G__9285 = count__7836_9280;
var G__9286 = (i__7837_9281 + 1);
seq__7834_9278 = G__9283;
chunk__7835_9279 = G__9284;
count__7836_9280 = G__9285;
i__7837_9281 = G__9286;
continue;
}
} else
{var temp__4092__auto___9287 = cljs.core.seq.call(null,seq__7834_9278);if(temp__4092__auto___9287)
{var seq__7834_9288__$1 = temp__4092__auto___9287;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7834_9288__$1))
{var c__5632__auto___9289 = cljs.core.chunk_first.call(null,seq__7834_9288__$1);{
var G__9290 = cljs.core.chunk_rest.call(null,seq__7834_9288__$1);
var G__9291 = c__5632__auto___9289;
var G__9292 = cljs.core.count.call(null,c__5632__auto___9289);
var G__9293 = 0;
seq__7834_9278 = G__9290;
chunk__7835_9279 = G__9291;
count__7836_9280 = G__9292;
i__7837_9281 = G__9293;
continue;
}
} else
{var arg__6538__auto___9294 = cljs.core.first.call(null,seq__7834_9288__$1);a__6537__auto__.push(arg__6538__auto___9294);
{
var G__9295 = cljs.core.next.call(null,seq__7834_9288__$1);
var G__9296 = null;
var G__9297 = 0;
var G__9298 = 0;
seq__7834_9278 = G__9295;
chunk__7835_9279 = G__9296;
count__7836_9280 = G__9297;
i__7837_9281 = G__9298;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.footer.apply(null,a__6537__auto__);
};
var footer = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return footer__delegate.call(this,args__6536__auto__);};
footer.cljs$lang$maxFixedArity = 0;
footer.cljs$lang$applyTo = (function (arglist__9299){
var args__6536__auto__ = cljs.core.seq(arglist__9299);
return footer__delegate(args__6536__auto__);
});
footer.cljs$core$IFn$_invoke$arity$variadic = footer__delegate;
return footer;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.form = (function() { 
var form__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__7842_9300 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__7843_9301 = null;var count__7844_9302 = 0;var i__7845_9303 = 0;while(true){
if((i__7845_9303 < count__7844_9302))
{var arg__6538__auto___9304 = cljs.core._nth.call(null,chunk__7843_9301,i__7845_9303);a__6537__auto__.push(arg__6538__auto___9304);
{
var G__9305 = seq__7842_9300;
var G__9306 = chunk__7843_9301;
var G__9307 = count__7844_9302;
var G__9308 = (i__7845_9303 + 1);
seq__7842_9300 = G__9305;
chunk__7843_9301 = G__9306;
count__7844_9302 = G__9307;
i__7845_9303 = G__9308;
continue;
}
} else
{var temp__4092__auto___9309 = cljs.core.seq.call(null,seq__7842_9300);if(temp__4092__auto___9309)
{var seq__7842_9310__$1 = temp__4092__auto___9309;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7842_9310__$1))
{var c__5632__auto___9311 = cljs.core.chunk_first.call(null,seq__7842_9310__$1);{
var G__9312 = cljs.core.chunk_rest.call(null,seq__7842_9310__$1);
var G__9313 = c__5632__auto___9311;
var G__9314 = cljs.core.count.call(null,c__5632__auto___9311);
var G__9315 = 0;
seq__7842_9300 = G__9312;
chunk__7843_9301 = G__9313;
count__7844_9302 = G__9314;
i__7845_9303 = G__9315;
continue;
}
} else
{var arg__6538__auto___9316 = cljs.core.first.call(null,seq__7842_9310__$1);a__6537__auto__.push(arg__6538__auto___9316);
{
var G__9317 = cljs.core.next.call(null,seq__7842_9310__$1);
var G__9318 = null;
var G__9319 = 0;
var G__9320 = 0;
seq__7842_9300 = G__9317;
chunk__7843_9301 = G__9318;
count__7844_9302 = G__9319;
i__7845_9303 = G__9320;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.form.apply(null,a__6537__auto__);
};
var form = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return form__delegate.call(this,args__6536__auto__);};
form.cljs$lang$maxFixedArity = 0;
form.cljs$lang$applyTo = (function (arglist__9321){
var args__6536__auto__ = cljs.core.seq(arglist__9321);
return form__delegate(args__6536__auto__);
});
form.cljs$core$IFn$_invoke$arity$variadic = form__delegate;
return form;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h1 = (function() { 
var h1__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__7850_9322 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__7851_9323 = null;var count__7852_9324 = 0;var i__7853_9325 = 0;while(true){
if((i__7853_9325 < count__7852_9324))
{var arg__6538__auto___9326 = cljs.core._nth.call(null,chunk__7851_9323,i__7853_9325);a__6537__auto__.push(arg__6538__auto___9326);
{
var G__9327 = seq__7850_9322;
var G__9328 = chunk__7851_9323;
var G__9329 = count__7852_9324;
var G__9330 = (i__7853_9325 + 1);
seq__7850_9322 = G__9327;
chunk__7851_9323 = G__9328;
count__7852_9324 = G__9329;
i__7853_9325 = G__9330;
continue;
}
} else
{var temp__4092__auto___9331 = cljs.core.seq.call(null,seq__7850_9322);if(temp__4092__auto___9331)
{var seq__7850_9332__$1 = temp__4092__auto___9331;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7850_9332__$1))
{var c__5632__auto___9333 = cljs.core.chunk_first.call(null,seq__7850_9332__$1);{
var G__9334 = cljs.core.chunk_rest.call(null,seq__7850_9332__$1);
var G__9335 = c__5632__auto___9333;
var G__9336 = cljs.core.count.call(null,c__5632__auto___9333);
var G__9337 = 0;
seq__7850_9322 = G__9334;
chunk__7851_9323 = G__9335;
count__7852_9324 = G__9336;
i__7853_9325 = G__9337;
continue;
}
} else
{var arg__6538__auto___9338 = cljs.core.first.call(null,seq__7850_9332__$1);a__6537__auto__.push(arg__6538__auto___9338);
{
var G__9339 = cljs.core.next.call(null,seq__7850_9332__$1);
var G__9340 = null;
var G__9341 = 0;
var G__9342 = 0;
seq__7850_9322 = G__9339;
chunk__7851_9323 = G__9340;
count__7852_9324 = G__9341;
i__7853_9325 = G__9342;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h1.apply(null,a__6537__auto__);
};
var h1 = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h1__delegate.call(this,args__6536__auto__);};
h1.cljs$lang$maxFixedArity = 0;
h1.cljs$lang$applyTo = (function (arglist__9343){
var args__6536__auto__ = cljs.core.seq(arglist__9343);
return h1__delegate(args__6536__auto__);
});
h1.cljs$core$IFn$_invoke$arity$variadic = h1__delegate;
return h1;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h2 = (function() { 
var h2__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__7858_9344 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__7859_9345 = null;var count__7860_9346 = 0;var i__7861_9347 = 0;while(true){
if((i__7861_9347 < count__7860_9346))
{var arg__6538__auto___9348 = cljs.core._nth.call(null,chunk__7859_9345,i__7861_9347);a__6537__auto__.push(arg__6538__auto___9348);
{
var G__9349 = seq__7858_9344;
var G__9350 = chunk__7859_9345;
var G__9351 = count__7860_9346;
var G__9352 = (i__7861_9347 + 1);
seq__7858_9344 = G__9349;
chunk__7859_9345 = G__9350;
count__7860_9346 = G__9351;
i__7861_9347 = G__9352;
continue;
}
} else
{var temp__4092__auto___9353 = cljs.core.seq.call(null,seq__7858_9344);if(temp__4092__auto___9353)
{var seq__7858_9354__$1 = temp__4092__auto___9353;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7858_9354__$1))
{var c__5632__auto___9355 = cljs.core.chunk_first.call(null,seq__7858_9354__$1);{
var G__9356 = cljs.core.chunk_rest.call(null,seq__7858_9354__$1);
var G__9357 = c__5632__auto___9355;
var G__9358 = cljs.core.count.call(null,c__5632__auto___9355);
var G__9359 = 0;
seq__7858_9344 = G__9356;
chunk__7859_9345 = G__9357;
count__7860_9346 = G__9358;
i__7861_9347 = G__9359;
continue;
}
} else
{var arg__6538__auto___9360 = cljs.core.first.call(null,seq__7858_9354__$1);a__6537__auto__.push(arg__6538__auto___9360);
{
var G__9361 = cljs.core.next.call(null,seq__7858_9354__$1);
var G__9362 = null;
var G__9363 = 0;
var G__9364 = 0;
seq__7858_9344 = G__9361;
chunk__7859_9345 = G__9362;
count__7860_9346 = G__9363;
i__7861_9347 = G__9364;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h2.apply(null,a__6537__auto__);
};
var h2 = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h2__delegate.call(this,args__6536__auto__);};
h2.cljs$lang$maxFixedArity = 0;
h2.cljs$lang$applyTo = (function (arglist__9365){
var args__6536__auto__ = cljs.core.seq(arglist__9365);
return h2__delegate(args__6536__auto__);
});
h2.cljs$core$IFn$_invoke$arity$variadic = h2__delegate;
return h2;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h3 = (function() { 
var h3__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__7866_9366 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__7867_9367 = null;var count__7868_9368 = 0;var i__7869_9369 = 0;while(true){
if((i__7869_9369 < count__7868_9368))
{var arg__6538__auto___9370 = cljs.core._nth.call(null,chunk__7867_9367,i__7869_9369);a__6537__auto__.push(arg__6538__auto___9370);
{
var G__9371 = seq__7866_9366;
var G__9372 = chunk__7867_9367;
var G__9373 = count__7868_9368;
var G__9374 = (i__7869_9369 + 1);
seq__7866_9366 = G__9371;
chunk__7867_9367 = G__9372;
count__7868_9368 = G__9373;
i__7869_9369 = G__9374;
continue;
}
} else
{var temp__4092__auto___9375 = cljs.core.seq.call(null,seq__7866_9366);if(temp__4092__auto___9375)
{var seq__7866_9376__$1 = temp__4092__auto___9375;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7866_9376__$1))
{var c__5632__auto___9377 = cljs.core.chunk_first.call(null,seq__7866_9376__$1);{
var G__9378 = cljs.core.chunk_rest.call(null,seq__7866_9376__$1);
var G__9379 = c__5632__auto___9377;
var G__9380 = cljs.core.count.call(null,c__5632__auto___9377);
var G__9381 = 0;
seq__7866_9366 = G__9378;
chunk__7867_9367 = G__9379;
count__7868_9368 = G__9380;
i__7869_9369 = G__9381;
continue;
}
} else
{var arg__6538__auto___9382 = cljs.core.first.call(null,seq__7866_9376__$1);a__6537__auto__.push(arg__6538__auto___9382);
{
var G__9383 = cljs.core.next.call(null,seq__7866_9376__$1);
var G__9384 = null;
var G__9385 = 0;
var G__9386 = 0;
seq__7866_9366 = G__9383;
chunk__7867_9367 = G__9384;
count__7868_9368 = G__9385;
i__7869_9369 = G__9386;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h3.apply(null,a__6537__auto__);
};
var h3 = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h3__delegate.call(this,args__6536__auto__);};
h3.cljs$lang$maxFixedArity = 0;
h3.cljs$lang$applyTo = (function (arglist__9387){
var args__6536__auto__ = cljs.core.seq(arglist__9387);
return h3__delegate(args__6536__auto__);
});
h3.cljs$core$IFn$_invoke$arity$variadic = h3__delegate;
return h3;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h4 = (function() { 
var h4__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__7874_9388 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__7875_9389 = null;var count__7876_9390 = 0;var i__7877_9391 = 0;while(true){
if((i__7877_9391 < count__7876_9390))
{var arg__6538__auto___9392 = cljs.core._nth.call(null,chunk__7875_9389,i__7877_9391);a__6537__auto__.push(arg__6538__auto___9392);
{
var G__9393 = seq__7874_9388;
var G__9394 = chunk__7875_9389;
var G__9395 = count__7876_9390;
var G__9396 = (i__7877_9391 + 1);
seq__7874_9388 = G__9393;
chunk__7875_9389 = G__9394;
count__7876_9390 = G__9395;
i__7877_9391 = G__9396;
continue;
}
} else
{var temp__4092__auto___9397 = cljs.core.seq.call(null,seq__7874_9388);if(temp__4092__auto___9397)
{var seq__7874_9398__$1 = temp__4092__auto___9397;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7874_9398__$1))
{var c__5632__auto___9399 = cljs.core.chunk_first.call(null,seq__7874_9398__$1);{
var G__9400 = cljs.core.chunk_rest.call(null,seq__7874_9398__$1);
var G__9401 = c__5632__auto___9399;
var G__9402 = cljs.core.count.call(null,c__5632__auto___9399);
var G__9403 = 0;
seq__7874_9388 = G__9400;
chunk__7875_9389 = G__9401;
count__7876_9390 = G__9402;
i__7877_9391 = G__9403;
continue;
}
} else
{var arg__6538__auto___9404 = cljs.core.first.call(null,seq__7874_9398__$1);a__6537__auto__.push(arg__6538__auto___9404);
{
var G__9405 = cljs.core.next.call(null,seq__7874_9398__$1);
var G__9406 = null;
var G__9407 = 0;
var G__9408 = 0;
seq__7874_9388 = G__9405;
chunk__7875_9389 = G__9406;
count__7876_9390 = G__9407;
i__7877_9391 = G__9408;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h4.apply(null,a__6537__auto__);
};
var h4 = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h4__delegate.call(this,args__6536__auto__);};
h4.cljs$lang$maxFixedArity = 0;
h4.cljs$lang$applyTo = (function (arglist__9409){
var args__6536__auto__ = cljs.core.seq(arglist__9409);
return h4__delegate(args__6536__auto__);
});
h4.cljs$core$IFn$_invoke$arity$variadic = h4__delegate;
return h4;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h5 = (function() { 
var h5__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__7882_9410 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__7883_9411 = null;var count__7884_9412 = 0;var i__7885_9413 = 0;while(true){
if((i__7885_9413 < count__7884_9412))
{var arg__6538__auto___9414 = cljs.core._nth.call(null,chunk__7883_9411,i__7885_9413);a__6537__auto__.push(arg__6538__auto___9414);
{
var G__9415 = seq__7882_9410;
var G__9416 = chunk__7883_9411;
var G__9417 = count__7884_9412;
var G__9418 = (i__7885_9413 + 1);
seq__7882_9410 = G__9415;
chunk__7883_9411 = G__9416;
count__7884_9412 = G__9417;
i__7885_9413 = G__9418;
continue;
}
} else
{var temp__4092__auto___9419 = cljs.core.seq.call(null,seq__7882_9410);if(temp__4092__auto___9419)
{var seq__7882_9420__$1 = temp__4092__auto___9419;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7882_9420__$1))
{var c__5632__auto___9421 = cljs.core.chunk_first.call(null,seq__7882_9420__$1);{
var G__9422 = cljs.core.chunk_rest.call(null,seq__7882_9420__$1);
var G__9423 = c__5632__auto___9421;
var G__9424 = cljs.core.count.call(null,c__5632__auto___9421);
var G__9425 = 0;
seq__7882_9410 = G__9422;
chunk__7883_9411 = G__9423;
count__7884_9412 = G__9424;
i__7885_9413 = G__9425;
continue;
}
} else
{var arg__6538__auto___9426 = cljs.core.first.call(null,seq__7882_9420__$1);a__6537__auto__.push(arg__6538__auto___9426);
{
var G__9427 = cljs.core.next.call(null,seq__7882_9420__$1);
var G__9428 = null;
var G__9429 = 0;
var G__9430 = 0;
seq__7882_9410 = G__9427;
chunk__7883_9411 = G__9428;
count__7884_9412 = G__9429;
i__7885_9413 = G__9430;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h5.apply(null,a__6537__auto__);
};
var h5 = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h5__delegate.call(this,args__6536__auto__);};
h5.cljs$lang$maxFixedArity = 0;
h5.cljs$lang$applyTo = (function (arglist__9431){
var args__6536__auto__ = cljs.core.seq(arglist__9431);
return h5__delegate(args__6536__auto__);
});
h5.cljs$core$IFn$_invoke$arity$variadic = h5__delegate;
return h5;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h6 = (function() { 
var h6__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__7890_9432 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__7891_9433 = null;var count__7892_9434 = 0;var i__7893_9435 = 0;while(true){
if((i__7893_9435 < count__7892_9434))
{var arg__6538__auto___9436 = cljs.core._nth.call(null,chunk__7891_9433,i__7893_9435);a__6537__auto__.push(arg__6538__auto___9436);
{
var G__9437 = seq__7890_9432;
var G__9438 = chunk__7891_9433;
var G__9439 = count__7892_9434;
var G__9440 = (i__7893_9435 + 1);
seq__7890_9432 = G__9437;
chunk__7891_9433 = G__9438;
count__7892_9434 = G__9439;
i__7893_9435 = G__9440;
continue;
}
} else
{var temp__4092__auto___9441 = cljs.core.seq.call(null,seq__7890_9432);if(temp__4092__auto___9441)
{var seq__7890_9442__$1 = temp__4092__auto___9441;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7890_9442__$1))
{var c__5632__auto___9443 = cljs.core.chunk_first.call(null,seq__7890_9442__$1);{
var G__9444 = cljs.core.chunk_rest.call(null,seq__7890_9442__$1);
var G__9445 = c__5632__auto___9443;
var G__9446 = cljs.core.count.call(null,c__5632__auto___9443);
var G__9447 = 0;
seq__7890_9432 = G__9444;
chunk__7891_9433 = G__9445;
count__7892_9434 = G__9446;
i__7893_9435 = G__9447;
continue;
}
} else
{var arg__6538__auto___9448 = cljs.core.first.call(null,seq__7890_9442__$1);a__6537__auto__.push(arg__6538__auto___9448);
{
var G__9449 = cljs.core.next.call(null,seq__7890_9442__$1);
var G__9450 = null;
var G__9451 = 0;
var G__9452 = 0;
seq__7890_9432 = G__9449;
chunk__7891_9433 = G__9450;
count__7892_9434 = G__9451;
i__7893_9435 = G__9452;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h6.apply(null,a__6537__auto__);
};
var h6 = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h6__delegate.call(this,args__6536__auto__);};
h6.cljs$lang$maxFixedArity = 0;
h6.cljs$lang$applyTo = (function (arglist__9453){
var args__6536__auto__ = cljs.core.seq(arglist__9453);
return h6__delegate(args__6536__auto__);
});
h6.cljs$core$IFn$_invoke$arity$variadic = h6__delegate;
return h6;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.head = (function() { 
var head__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__7898_9454 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__7899_9455 = null;var count__7900_9456 = 0;var i__7901_9457 = 0;while(true){
if((i__7901_9457 < count__7900_9456))
{var arg__6538__auto___9458 = cljs.core._nth.call(null,chunk__7899_9455,i__7901_9457);a__6537__auto__.push(arg__6538__auto___9458);
{
var G__9459 = seq__7898_9454;
var G__9460 = chunk__7899_9455;
var G__9461 = count__7900_9456;
var G__9462 = (i__7901_9457 + 1);
seq__7898_9454 = G__9459;
chunk__7899_9455 = G__9460;
count__7900_9456 = G__9461;
i__7901_9457 = G__9462;
continue;
}
} else
{var temp__4092__auto___9463 = cljs.core.seq.call(null,seq__7898_9454);if(temp__4092__auto___9463)
{var seq__7898_9464__$1 = temp__4092__auto___9463;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7898_9464__$1))
{var c__5632__auto___9465 = cljs.core.chunk_first.call(null,seq__7898_9464__$1);{
var G__9466 = cljs.core.chunk_rest.call(null,seq__7898_9464__$1);
var G__9467 = c__5632__auto___9465;
var G__9468 = cljs.core.count.call(null,c__5632__auto___9465);
var G__9469 = 0;
seq__7898_9454 = G__9466;
chunk__7899_9455 = G__9467;
count__7900_9456 = G__9468;
i__7901_9457 = G__9469;
continue;
}
} else
{var arg__6538__auto___9470 = cljs.core.first.call(null,seq__7898_9464__$1);a__6537__auto__.push(arg__6538__auto___9470);
{
var G__9471 = cljs.core.next.call(null,seq__7898_9464__$1);
var G__9472 = null;
var G__9473 = 0;
var G__9474 = 0;
seq__7898_9454 = G__9471;
chunk__7899_9455 = G__9472;
count__7900_9456 = G__9473;
i__7901_9457 = G__9474;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.head.apply(null,a__6537__auto__);
};
var head = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return head__delegate.call(this,args__6536__auto__);};
head.cljs$lang$maxFixedArity = 0;
head.cljs$lang$applyTo = (function (arglist__9475){
var args__6536__auto__ = cljs.core.seq(arglist__9475);
return head__delegate(args__6536__auto__);
});
head.cljs$core$IFn$_invoke$arity$variadic = head__delegate;
return head;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.header = (function() { 
var header__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__7906_9476 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__7907_9477 = null;var count__7908_9478 = 0;var i__7909_9479 = 0;while(true){
if((i__7909_9479 < count__7908_9478))
{var arg__6538__auto___9480 = cljs.core._nth.call(null,chunk__7907_9477,i__7909_9479);a__6537__auto__.push(arg__6538__auto___9480);
{
var G__9481 = seq__7906_9476;
var G__9482 = chunk__7907_9477;
var G__9483 = count__7908_9478;
var G__9484 = (i__7909_9479 + 1);
seq__7906_9476 = G__9481;
chunk__7907_9477 = G__9482;
count__7908_9478 = G__9483;
i__7909_9479 = G__9484;
continue;
}
} else
{var temp__4092__auto___9485 = cljs.core.seq.call(null,seq__7906_9476);if(temp__4092__auto___9485)
{var seq__7906_9486__$1 = temp__4092__auto___9485;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7906_9486__$1))
{var c__5632__auto___9487 = cljs.core.chunk_first.call(null,seq__7906_9486__$1);{
var G__9488 = cljs.core.chunk_rest.call(null,seq__7906_9486__$1);
var G__9489 = c__5632__auto___9487;
var G__9490 = cljs.core.count.call(null,c__5632__auto___9487);
var G__9491 = 0;
seq__7906_9476 = G__9488;
chunk__7907_9477 = G__9489;
count__7908_9478 = G__9490;
i__7909_9479 = G__9491;
continue;
}
} else
{var arg__6538__auto___9492 = cljs.core.first.call(null,seq__7906_9486__$1);a__6537__auto__.push(arg__6538__auto___9492);
{
var G__9493 = cljs.core.next.call(null,seq__7906_9486__$1);
var G__9494 = null;
var G__9495 = 0;
var G__9496 = 0;
seq__7906_9476 = G__9493;
chunk__7907_9477 = G__9494;
count__7908_9478 = G__9495;
i__7909_9479 = G__9496;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.header.apply(null,a__6537__auto__);
};
var header = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return header__delegate.call(this,args__6536__auto__);};
header.cljs$lang$maxFixedArity = 0;
header.cljs$lang$applyTo = (function (arglist__9497){
var args__6536__auto__ = cljs.core.seq(arglist__9497);
return header__delegate(args__6536__auto__);
});
header.cljs$core$IFn$_invoke$arity$variadic = header__delegate;
return header;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.hr = (function() { 
var hr__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__7914_9498 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__7915_9499 = null;var count__7916_9500 = 0;var i__7917_9501 = 0;while(true){
if((i__7917_9501 < count__7916_9500))
{var arg__6538__auto___9502 = cljs.core._nth.call(null,chunk__7915_9499,i__7917_9501);a__6537__auto__.push(arg__6538__auto___9502);
{
var G__9503 = seq__7914_9498;
var G__9504 = chunk__7915_9499;
var G__9505 = count__7916_9500;
var G__9506 = (i__7917_9501 + 1);
seq__7914_9498 = G__9503;
chunk__7915_9499 = G__9504;
count__7916_9500 = G__9505;
i__7917_9501 = G__9506;
continue;
}
} else
{var temp__4092__auto___9507 = cljs.core.seq.call(null,seq__7914_9498);if(temp__4092__auto___9507)
{var seq__7914_9508__$1 = temp__4092__auto___9507;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7914_9508__$1))
{var c__5632__auto___9509 = cljs.core.chunk_first.call(null,seq__7914_9508__$1);{
var G__9510 = cljs.core.chunk_rest.call(null,seq__7914_9508__$1);
var G__9511 = c__5632__auto___9509;
var G__9512 = cljs.core.count.call(null,c__5632__auto___9509);
var G__9513 = 0;
seq__7914_9498 = G__9510;
chunk__7915_9499 = G__9511;
count__7916_9500 = G__9512;
i__7917_9501 = G__9513;
continue;
}
} else
{var arg__6538__auto___9514 = cljs.core.first.call(null,seq__7914_9508__$1);a__6537__auto__.push(arg__6538__auto___9514);
{
var G__9515 = cljs.core.next.call(null,seq__7914_9508__$1);
var G__9516 = null;
var G__9517 = 0;
var G__9518 = 0;
seq__7914_9498 = G__9515;
chunk__7915_9499 = G__9516;
count__7916_9500 = G__9517;
i__7917_9501 = G__9518;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.hr.apply(null,a__6537__auto__);
};
var hr = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return hr__delegate.call(this,args__6536__auto__);};
hr.cljs$lang$maxFixedArity = 0;
hr.cljs$lang$applyTo = (function (arglist__9519){
var args__6536__auto__ = cljs.core.seq(arglist__9519);
return hr__delegate(args__6536__auto__);
});
hr.cljs$core$IFn$_invoke$arity$variadic = hr__delegate;
return hr;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.html = (function() { 
var html__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__7922_9520 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__7923_9521 = null;var count__7924_9522 = 0;var i__7925_9523 = 0;while(true){
if((i__7925_9523 < count__7924_9522))
{var arg__6538__auto___9524 = cljs.core._nth.call(null,chunk__7923_9521,i__7925_9523);a__6537__auto__.push(arg__6538__auto___9524);
{
var G__9525 = seq__7922_9520;
var G__9526 = chunk__7923_9521;
var G__9527 = count__7924_9522;
var G__9528 = (i__7925_9523 + 1);
seq__7922_9520 = G__9525;
chunk__7923_9521 = G__9526;
count__7924_9522 = G__9527;
i__7925_9523 = G__9528;
continue;
}
} else
{var temp__4092__auto___9529 = cljs.core.seq.call(null,seq__7922_9520);if(temp__4092__auto___9529)
{var seq__7922_9530__$1 = temp__4092__auto___9529;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7922_9530__$1))
{var c__5632__auto___9531 = cljs.core.chunk_first.call(null,seq__7922_9530__$1);{
var G__9532 = cljs.core.chunk_rest.call(null,seq__7922_9530__$1);
var G__9533 = c__5632__auto___9531;
var G__9534 = cljs.core.count.call(null,c__5632__auto___9531);
var G__9535 = 0;
seq__7922_9520 = G__9532;
chunk__7923_9521 = G__9533;
count__7924_9522 = G__9534;
i__7925_9523 = G__9535;
continue;
}
} else
{var arg__6538__auto___9536 = cljs.core.first.call(null,seq__7922_9530__$1);a__6537__auto__.push(arg__6538__auto___9536);
{
var G__9537 = cljs.core.next.call(null,seq__7922_9530__$1);
var G__9538 = null;
var G__9539 = 0;
var G__9540 = 0;
seq__7922_9520 = G__9537;
chunk__7923_9521 = G__9538;
count__7924_9522 = G__9539;
i__7925_9523 = G__9540;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.html.apply(null,a__6537__auto__);
};
var html = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return html__delegate.call(this,args__6536__auto__);};
html.cljs$lang$maxFixedArity = 0;
html.cljs$lang$applyTo = (function (arglist__9541){
var args__6536__auto__ = cljs.core.seq(arglist__9541);
return html__delegate(args__6536__auto__);
});
html.cljs$core$IFn$_invoke$arity$variadic = html__delegate;
return html;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.i = (function() { 
var i__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__7930_9542 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__7931_9543 = null;var count__7932_9544 = 0;var i__7933_9545 = 0;while(true){
if((i__7933_9545 < count__7932_9544))
{var arg__6538__auto___9546 = cljs.core._nth.call(null,chunk__7931_9543,i__7933_9545);a__6537__auto__.push(arg__6538__auto___9546);
{
var G__9547 = seq__7930_9542;
var G__9548 = chunk__7931_9543;
var G__9549 = count__7932_9544;
var G__9550 = (i__7933_9545 + 1);
seq__7930_9542 = G__9547;
chunk__7931_9543 = G__9548;
count__7932_9544 = G__9549;
i__7933_9545 = G__9550;
continue;
}
} else
{var temp__4092__auto___9551 = cljs.core.seq.call(null,seq__7930_9542);if(temp__4092__auto___9551)
{var seq__7930_9552__$1 = temp__4092__auto___9551;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7930_9552__$1))
{var c__5632__auto___9553 = cljs.core.chunk_first.call(null,seq__7930_9552__$1);{
var G__9554 = cljs.core.chunk_rest.call(null,seq__7930_9552__$1);
var G__9555 = c__5632__auto___9553;
var G__9556 = cljs.core.count.call(null,c__5632__auto___9553);
var G__9557 = 0;
seq__7930_9542 = G__9554;
chunk__7931_9543 = G__9555;
count__7932_9544 = G__9556;
i__7933_9545 = G__9557;
continue;
}
} else
{var arg__6538__auto___9558 = cljs.core.first.call(null,seq__7930_9552__$1);a__6537__auto__.push(arg__6538__auto___9558);
{
var G__9559 = cljs.core.next.call(null,seq__7930_9552__$1);
var G__9560 = null;
var G__9561 = 0;
var G__9562 = 0;
seq__7930_9542 = G__9559;
chunk__7931_9543 = G__9560;
count__7932_9544 = G__9561;
i__7933_9545 = G__9562;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.i.apply(null,a__6537__auto__);
};
var i = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return i__delegate.call(this,args__6536__auto__);};
i.cljs$lang$maxFixedArity = 0;
i.cljs$lang$applyTo = (function (arglist__9563){
var args__6536__auto__ = cljs.core.seq(arglist__9563);
return i__delegate(args__6536__auto__);
});
i.cljs$core$IFn$_invoke$arity$variadic = i__delegate;
return i;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.iframe = (function() { 
var iframe__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__7938_9564 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__7939_9565 = null;var count__7940_9566 = 0;var i__7941_9567 = 0;while(true){
if((i__7941_9567 < count__7940_9566))
{var arg__6538__auto___9568 = cljs.core._nth.call(null,chunk__7939_9565,i__7941_9567);a__6537__auto__.push(arg__6538__auto___9568);
{
var G__9569 = seq__7938_9564;
var G__9570 = chunk__7939_9565;
var G__9571 = count__7940_9566;
var G__9572 = (i__7941_9567 + 1);
seq__7938_9564 = G__9569;
chunk__7939_9565 = G__9570;
count__7940_9566 = G__9571;
i__7941_9567 = G__9572;
continue;
}
} else
{var temp__4092__auto___9573 = cljs.core.seq.call(null,seq__7938_9564);if(temp__4092__auto___9573)
{var seq__7938_9574__$1 = temp__4092__auto___9573;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7938_9574__$1))
{var c__5632__auto___9575 = cljs.core.chunk_first.call(null,seq__7938_9574__$1);{
var G__9576 = cljs.core.chunk_rest.call(null,seq__7938_9574__$1);
var G__9577 = c__5632__auto___9575;
var G__9578 = cljs.core.count.call(null,c__5632__auto___9575);
var G__9579 = 0;
seq__7938_9564 = G__9576;
chunk__7939_9565 = G__9577;
count__7940_9566 = G__9578;
i__7941_9567 = G__9579;
continue;
}
} else
{var arg__6538__auto___9580 = cljs.core.first.call(null,seq__7938_9574__$1);a__6537__auto__.push(arg__6538__auto___9580);
{
var G__9581 = cljs.core.next.call(null,seq__7938_9574__$1);
var G__9582 = null;
var G__9583 = 0;
var G__9584 = 0;
seq__7938_9564 = G__9581;
chunk__7939_9565 = G__9582;
count__7940_9566 = G__9583;
i__7941_9567 = G__9584;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.iframe.apply(null,a__6537__auto__);
};
var iframe = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return iframe__delegate.call(this,args__6536__auto__);};
iframe.cljs$lang$maxFixedArity = 0;
iframe.cljs$lang$applyTo = (function (arglist__9585){
var args__6536__auto__ = cljs.core.seq(arglist__9585);
return iframe__delegate(args__6536__auto__);
});
iframe.cljs$core$IFn$_invoke$arity$variadic = iframe__delegate;
return iframe;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.img = (function() { 
var img__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__7946_9586 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__7947_9587 = null;var count__7948_9588 = 0;var i__7949_9589 = 0;while(true){
if((i__7949_9589 < count__7948_9588))
{var arg__6538__auto___9590 = cljs.core._nth.call(null,chunk__7947_9587,i__7949_9589);a__6537__auto__.push(arg__6538__auto___9590);
{
var G__9591 = seq__7946_9586;
var G__9592 = chunk__7947_9587;
var G__9593 = count__7948_9588;
var G__9594 = (i__7949_9589 + 1);
seq__7946_9586 = G__9591;
chunk__7947_9587 = G__9592;
count__7948_9588 = G__9593;
i__7949_9589 = G__9594;
continue;
}
} else
{var temp__4092__auto___9595 = cljs.core.seq.call(null,seq__7946_9586);if(temp__4092__auto___9595)
{var seq__7946_9596__$1 = temp__4092__auto___9595;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7946_9596__$1))
{var c__5632__auto___9597 = cljs.core.chunk_first.call(null,seq__7946_9596__$1);{
var G__9598 = cljs.core.chunk_rest.call(null,seq__7946_9596__$1);
var G__9599 = c__5632__auto___9597;
var G__9600 = cljs.core.count.call(null,c__5632__auto___9597);
var G__9601 = 0;
seq__7946_9586 = G__9598;
chunk__7947_9587 = G__9599;
count__7948_9588 = G__9600;
i__7949_9589 = G__9601;
continue;
}
} else
{var arg__6538__auto___9602 = cljs.core.first.call(null,seq__7946_9596__$1);a__6537__auto__.push(arg__6538__auto___9602);
{
var G__9603 = cljs.core.next.call(null,seq__7946_9596__$1);
var G__9604 = null;
var G__9605 = 0;
var G__9606 = 0;
seq__7946_9586 = G__9603;
chunk__7947_9587 = G__9604;
count__7948_9588 = G__9605;
i__7949_9589 = G__9606;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.img.apply(null,a__6537__auto__);
};
var img = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return img__delegate.call(this,args__6536__auto__);};
img.cljs$lang$maxFixedArity = 0;
img.cljs$lang$applyTo = (function (arglist__9607){
var args__6536__auto__ = cljs.core.seq(arglist__9607);
return img__delegate(args__6536__auto__);
});
img.cljs$core$IFn$_invoke$arity$variadic = img__delegate;
return img;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.input = (function() { 
var input__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__7954_9608 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__7955_9609 = null;var count__7956_9610 = 0;var i__7957_9611 = 0;while(true){
if((i__7957_9611 < count__7956_9610))
{var arg__6538__auto___9612 = cljs.core._nth.call(null,chunk__7955_9609,i__7957_9611);a__6537__auto__.push(arg__6538__auto___9612);
{
var G__9613 = seq__7954_9608;
var G__9614 = chunk__7955_9609;
var G__9615 = count__7956_9610;
var G__9616 = (i__7957_9611 + 1);
seq__7954_9608 = G__9613;
chunk__7955_9609 = G__9614;
count__7956_9610 = G__9615;
i__7957_9611 = G__9616;
continue;
}
} else
{var temp__4092__auto___9617 = cljs.core.seq.call(null,seq__7954_9608);if(temp__4092__auto___9617)
{var seq__7954_9618__$1 = temp__4092__auto___9617;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7954_9618__$1))
{var c__5632__auto___9619 = cljs.core.chunk_first.call(null,seq__7954_9618__$1);{
var G__9620 = cljs.core.chunk_rest.call(null,seq__7954_9618__$1);
var G__9621 = c__5632__auto___9619;
var G__9622 = cljs.core.count.call(null,c__5632__auto___9619);
var G__9623 = 0;
seq__7954_9608 = G__9620;
chunk__7955_9609 = G__9621;
count__7956_9610 = G__9622;
i__7957_9611 = G__9623;
continue;
}
} else
{var arg__6538__auto___9624 = cljs.core.first.call(null,seq__7954_9618__$1);a__6537__auto__.push(arg__6538__auto___9624);
{
var G__9625 = cljs.core.next.call(null,seq__7954_9618__$1);
var G__9626 = null;
var G__9627 = 0;
var G__9628 = 0;
seq__7954_9608 = G__9625;
chunk__7955_9609 = G__9626;
count__7956_9610 = G__9627;
i__7957_9611 = G__9628;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.input.apply(null,a__6537__auto__);
};
var input = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return input__delegate.call(this,args__6536__auto__);};
input.cljs$lang$maxFixedArity = 0;
input.cljs$lang$applyTo = (function (arglist__9629){
var args__6536__auto__ = cljs.core.seq(arglist__9629);
return input__delegate(args__6536__auto__);
});
input.cljs$core$IFn$_invoke$arity$variadic = input__delegate;
return input;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.ins = (function() { 
var ins__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__7962_9630 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__7963_9631 = null;var count__7964_9632 = 0;var i__7965_9633 = 0;while(true){
if((i__7965_9633 < count__7964_9632))
{var arg__6538__auto___9634 = cljs.core._nth.call(null,chunk__7963_9631,i__7965_9633);a__6537__auto__.push(arg__6538__auto___9634);
{
var G__9635 = seq__7962_9630;
var G__9636 = chunk__7963_9631;
var G__9637 = count__7964_9632;
var G__9638 = (i__7965_9633 + 1);
seq__7962_9630 = G__9635;
chunk__7963_9631 = G__9636;
count__7964_9632 = G__9637;
i__7965_9633 = G__9638;
continue;
}
} else
{var temp__4092__auto___9639 = cljs.core.seq.call(null,seq__7962_9630);if(temp__4092__auto___9639)
{var seq__7962_9640__$1 = temp__4092__auto___9639;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7962_9640__$1))
{var c__5632__auto___9641 = cljs.core.chunk_first.call(null,seq__7962_9640__$1);{
var G__9642 = cljs.core.chunk_rest.call(null,seq__7962_9640__$1);
var G__9643 = c__5632__auto___9641;
var G__9644 = cljs.core.count.call(null,c__5632__auto___9641);
var G__9645 = 0;
seq__7962_9630 = G__9642;
chunk__7963_9631 = G__9643;
count__7964_9632 = G__9644;
i__7965_9633 = G__9645;
continue;
}
} else
{var arg__6538__auto___9646 = cljs.core.first.call(null,seq__7962_9640__$1);a__6537__auto__.push(arg__6538__auto___9646);
{
var G__9647 = cljs.core.next.call(null,seq__7962_9640__$1);
var G__9648 = null;
var G__9649 = 0;
var G__9650 = 0;
seq__7962_9630 = G__9647;
chunk__7963_9631 = G__9648;
count__7964_9632 = G__9649;
i__7965_9633 = G__9650;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.ins.apply(null,a__6537__auto__);
};
var ins = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ins__delegate.call(this,args__6536__auto__);};
ins.cljs$lang$maxFixedArity = 0;
ins.cljs$lang$applyTo = (function (arglist__9651){
var args__6536__auto__ = cljs.core.seq(arglist__9651);
return ins__delegate(args__6536__auto__);
});
ins.cljs$core$IFn$_invoke$arity$variadic = ins__delegate;
return ins;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.kbd = (function() { 
var kbd__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__7970_9652 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__7971_9653 = null;var count__7972_9654 = 0;var i__7973_9655 = 0;while(true){
if((i__7973_9655 < count__7972_9654))
{var arg__6538__auto___9656 = cljs.core._nth.call(null,chunk__7971_9653,i__7973_9655);a__6537__auto__.push(arg__6538__auto___9656);
{
var G__9657 = seq__7970_9652;
var G__9658 = chunk__7971_9653;
var G__9659 = count__7972_9654;
var G__9660 = (i__7973_9655 + 1);
seq__7970_9652 = G__9657;
chunk__7971_9653 = G__9658;
count__7972_9654 = G__9659;
i__7973_9655 = G__9660;
continue;
}
} else
{var temp__4092__auto___9661 = cljs.core.seq.call(null,seq__7970_9652);if(temp__4092__auto___9661)
{var seq__7970_9662__$1 = temp__4092__auto___9661;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7970_9662__$1))
{var c__5632__auto___9663 = cljs.core.chunk_first.call(null,seq__7970_9662__$1);{
var G__9664 = cljs.core.chunk_rest.call(null,seq__7970_9662__$1);
var G__9665 = c__5632__auto___9663;
var G__9666 = cljs.core.count.call(null,c__5632__auto___9663);
var G__9667 = 0;
seq__7970_9652 = G__9664;
chunk__7971_9653 = G__9665;
count__7972_9654 = G__9666;
i__7973_9655 = G__9667;
continue;
}
} else
{var arg__6538__auto___9668 = cljs.core.first.call(null,seq__7970_9662__$1);a__6537__auto__.push(arg__6538__auto___9668);
{
var G__9669 = cljs.core.next.call(null,seq__7970_9662__$1);
var G__9670 = null;
var G__9671 = 0;
var G__9672 = 0;
seq__7970_9652 = G__9669;
chunk__7971_9653 = G__9670;
count__7972_9654 = G__9671;
i__7973_9655 = G__9672;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.kbd.apply(null,a__6537__auto__);
};
var kbd = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return kbd__delegate.call(this,args__6536__auto__);};
kbd.cljs$lang$maxFixedArity = 0;
kbd.cljs$lang$applyTo = (function (arglist__9673){
var args__6536__auto__ = cljs.core.seq(arglist__9673);
return kbd__delegate(args__6536__auto__);
});
kbd.cljs$core$IFn$_invoke$arity$variadic = kbd__delegate;
return kbd;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.keygen = (function() { 
var keygen__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__7978_9674 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__7979_9675 = null;var count__7980_9676 = 0;var i__7981_9677 = 0;while(true){
if((i__7981_9677 < count__7980_9676))
{var arg__6538__auto___9678 = cljs.core._nth.call(null,chunk__7979_9675,i__7981_9677);a__6537__auto__.push(arg__6538__auto___9678);
{
var G__9679 = seq__7978_9674;
var G__9680 = chunk__7979_9675;
var G__9681 = count__7980_9676;
var G__9682 = (i__7981_9677 + 1);
seq__7978_9674 = G__9679;
chunk__7979_9675 = G__9680;
count__7980_9676 = G__9681;
i__7981_9677 = G__9682;
continue;
}
} else
{var temp__4092__auto___9683 = cljs.core.seq.call(null,seq__7978_9674);if(temp__4092__auto___9683)
{var seq__7978_9684__$1 = temp__4092__auto___9683;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7978_9684__$1))
{var c__5632__auto___9685 = cljs.core.chunk_first.call(null,seq__7978_9684__$1);{
var G__9686 = cljs.core.chunk_rest.call(null,seq__7978_9684__$1);
var G__9687 = c__5632__auto___9685;
var G__9688 = cljs.core.count.call(null,c__5632__auto___9685);
var G__9689 = 0;
seq__7978_9674 = G__9686;
chunk__7979_9675 = G__9687;
count__7980_9676 = G__9688;
i__7981_9677 = G__9689;
continue;
}
} else
{var arg__6538__auto___9690 = cljs.core.first.call(null,seq__7978_9684__$1);a__6537__auto__.push(arg__6538__auto___9690);
{
var G__9691 = cljs.core.next.call(null,seq__7978_9684__$1);
var G__9692 = null;
var G__9693 = 0;
var G__9694 = 0;
seq__7978_9674 = G__9691;
chunk__7979_9675 = G__9692;
count__7980_9676 = G__9693;
i__7981_9677 = G__9694;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.keygen.apply(null,a__6537__auto__);
};
var keygen = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return keygen__delegate.call(this,args__6536__auto__);};
keygen.cljs$lang$maxFixedArity = 0;
keygen.cljs$lang$applyTo = (function (arglist__9695){
var args__6536__auto__ = cljs.core.seq(arglist__9695);
return keygen__delegate(args__6536__auto__);
});
keygen.cljs$core$IFn$_invoke$arity$variadic = keygen__delegate;
return keygen;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.label = (function() { 
var label__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__7986_9696 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__7987_9697 = null;var count__7988_9698 = 0;var i__7989_9699 = 0;while(true){
if((i__7989_9699 < count__7988_9698))
{var arg__6538__auto___9700 = cljs.core._nth.call(null,chunk__7987_9697,i__7989_9699);a__6537__auto__.push(arg__6538__auto___9700);
{
var G__9701 = seq__7986_9696;
var G__9702 = chunk__7987_9697;
var G__9703 = count__7988_9698;
var G__9704 = (i__7989_9699 + 1);
seq__7986_9696 = G__9701;
chunk__7987_9697 = G__9702;
count__7988_9698 = G__9703;
i__7989_9699 = G__9704;
continue;
}
} else
{var temp__4092__auto___9705 = cljs.core.seq.call(null,seq__7986_9696);if(temp__4092__auto___9705)
{var seq__7986_9706__$1 = temp__4092__auto___9705;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7986_9706__$1))
{var c__5632__auto___9707 = cljs.core.chunk_first.call(null,seq__7986_9706__$1);{
var G__9708 = cljs.core.chunk_rest.call(null,seq__7986_9706__$1);
var G__9709 = c__5632__auto___9707;
var G__9710 = cljs.core.count.call(null,c__5632__auto___9707);
var G__9711 = 0;
seq__7986_9696 = G__9708;
chunk__7987_9697 = G__9709;
count__7988_9698 = G__9710;
i__7989_9699 = G__9711;
continue;
}
} else
{var arg__6538__auto___9712 = cljs.core.first.call(null,seq__7986_9706__$1);a__6537__auto__.push(arg__6538__auto___9712);
{
var G__9713 = cljs.core.next.call(null,seq__7986_9706__$1);
var G__9714 = null;
var G__9715 = 0;
var G__9716 = 0;
seq__7986_9696 = G__9713;
chunk__7987_9697 = G__9714;
count__7988_9698 = G__9715;
i__7989_9699 = G__9716;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.label.apply(null,a__6537__auto__);
};
var label = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return label__delegate.call(this,args__6536__auto__);};
label.cljs$lang$maxFixedArity = 0;
label.cljs$lang$applyTo = (function (arglist__9717){
var args__6536__auto__ = cljs.core.seq(arglist__9717);
return label__delegate(args__6536__auto__);
});
label.cljs$core$IFn$_invoke$arity$variadic = label__delegate;
return label;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.legend = (function() { 
var legend__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__7994_9718 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__7995_9719 = null;var count__7996_9720 = 0;var i__7997_9721 = 0;while(true){
if((i__7997_9721 < count__7996_9720))
{var arg__6538__auto___9722 = cljs.core._nth.call(null,chunk__7995_9719,i__7997_9721);a__6537__auto__.push(arg__6538__auto___9722);
{
var G__9723 = seq__7994_9718;
var G__9724 = chunk__7995_9719;
var G__9725 = count__7996_9720;
var G__9726 = (i__7997_9721 + 1);
seq__7994_9718 = G__9723;
chunk__7995_9719 = G__9724;
count__7996_9720 = G__9725;
i__7997_9721 = G__9726;
continue;
}
} else
{var temp__4092__auto___9727 = cljs.core.seq.call(null,seq__7994_9718);if(temp__4092__auto___9727)
{var seq__7994_9728__$1 = temp__4092__auto___9727;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7994_9728__$1))
{var c__5632__auto___9729 = cljs.core.chunk_first.call(null,seq__7994_9728__$1);{
var G__9730 = cljs.core.chunk_rest.call(null,seq__7994_9728__$1);
var G__9731 = c__5632__auto___9729;
var G__9732 = cljs.core.count.call(null,c__5632__auto___9729);
var G__9733 = 0;
seq__7994_9718 = G__9730;
chunk__7995_9719 = G__9731;
count__7996_9720 = G__9732;
i__7997_9721 = G__9733;
continue;
}
} else
{var arg__6538__auto___9734 = cljs.core.first.call(null,seq__7994_9728__$1);a__6537__auto__.push(arg__6538__auto___9734);
{
var G__9735 = cljs.core.next.call(null,seq__7994_9728__$1);
var G__9736 = null;
var G__9737 = 0;
var G__9738 = 0;
seq__7994_9718 = G__9735;
chunk__7995_9719 = G__9736;
count__7996_9720 = G__9737;
i__7997_9721 = G__9738;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.legend.apply(null,a__6537__auto__);
};
var legend = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return legend__delegate.call(this,args__6536__auto__);};
legend.cljs$lang$maxFixedArity = 0;
legend.cljs$lang$applyTo = (function (arglist__9739){
var args__6536__auto__ = cljs.core.seq(arglist__9739);
return legend__delegate(args__6536__auto__);
});
legend.cljs$core$IFn$_invoke$arity$variadic = legend__delegate;
return legend;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.li = (function() { 
var li__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__8002_9740 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__8003_9741 = null;var count__8004_9742 = 0;var i__8005_9743 = 0;while(true){
if((i__8005_9743 < count__8004_9742))
{var arg__6538__auto___9744 = cljs.core._nth.call(null,chunk__8003_9741,i__8005_9743);a__6537__auto__.push(arg__6538__auto___9744);
{
var G__9745 = seq__8002_9740;
var G__9746 = chunk__8003_9741;
var G__9747 = count__8004_9742;
var G__9748 = (i__8005_9743 + 1);
seq__8002_9740 = G__9745;
chunk__8003_9741 = G__9746;
count__8004_9742 = G__9747;
i__8005_9743 = G__9748;
continue;
}
} else
{var temp__4092__auto___9749 = cljs.core.seq.call(null,seq__8002_9740);if(temp__4092__auto___9749)
{var seq__8002_9750__$1 = temp__4092__auto___9749;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8002_9750__$1))
{var c__5632__auto___9751 = cljs.core.chunk_first.call(null,seq__8002_9750__$1);{
var G__9752 = cljs.core.chunk_rest.call(null,seq__8002_9750__$1);
var G__9753 = c__5632__auto___9751;
var G__9754 = cljs.core.count.call(null,c__5632__auto___9751);
var G__9755 = 0;
seq__8002_9740 = G__9752;
chunk__8003_9741 = G__9753;
count__8004_9742 = G__9754;
i__8005_9743 = G__9755;
continue;
}
} else
{var arg__6538__auto___9756 = cljs.core.first.call(null,seq__8002_9750__$1);a__6537__auto__.push(arg__6538__auto___9756);
{
var G__9757 = cljs.core.next.call(null,seq__8002_9750__$1);
var G__9758 = null;
var G__9759 = 0;
var G__9760 = 0;
seq__8002_9740 = G__9757;
chunk__8003_9741 = G__9758;
count__8004_9742 = G__9759;
i__8005_9743 = G__9760;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.li.apply(null,a__6537__auto__);
};
var li = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return li__delegate.call(this,args__6536__auto__);};
li.cljs$lang$maxFixedArity = 0;
li.cljs$lang$applyTo = (function (arglist__9761){
var args__6536__auto__ = cljs.core.seq(arglist__9761);
return li__delegate(args__6536__auto__);
});
li.cljs$core$IFn$_invoke$arity$variadic = li__delegate;
return li;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.link = (function() { 
var link__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__8010_9762 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__8011_9763 = null;var count__8012_9764 = 0;var i__8013_9765 = 0;while(true){
if((i__8013_9765 < count__8012_9764))
{var arg__6538__auto___9766 = cljs.core._nth.call(null,chunk__8011_9763,i__8013_9765);a__6537__auto__.push(arg__6538__auto___9766);
{
var G__9767 = seq__8010_9762;
var G__9768 = chunk__8011_9763;
var G__9769 = count__8012_9764;
var G__9770 = (i__8013_9765 + 1);
seq__8010_9762 = G__9767;
chunk__8011_9763 = G__9768;
count__8012_9764 = G__9769;
i__8013_9765 = G__9770;
continue;
}
} else
{var temp__4092__auto___9771 = cljs.core.seq.call(null,seq__8010_9762);if(temp__4092__auto___9771)
{var seq__8010_9772__$1 = temp__4092__auto___9771;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8010_9772__$1))
{var c__5632__auto___9773 = cljs.core.chunk_first.call(null,seq__8010_9772__$1);{
var G__9774 = cljs.core.chunk_rest.call(null,seq__8010_9772__$1);
var G__9775 = c__5632__auto___9773;
var G__9776 = cljs.core.count.call(null,c__5632__auto___9773);
var G__9777 = 0;
seq__8010_9762 = G__9774;
chunk__8011_9763 = G__9775;
count__8012_9764 = G__9776;
i__8013_9765 = G__9777;
continue;
}
} else
{var arg__6538__auto___9778 = cljs.core.first.call(null,seq__8010_9772__$1);a__6537__auto__.push(arg__6538__auto___9778);
{
var G__9779 = cljs.core.next.call(null,seq__8010_9772__$1);
var G__9780 = null;
var G__9781 = 0;
var G__9782 = 0;
seq__8010_9762 = G__9779;
chunk__8011_9763 = G__9780;
count__8012_9764 = G__9781;
i__8013_9765 = G__9782;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.link.apply(null,a__6537__auto__);
};
var link = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return link__delegate.call(this,args__6536__auto__);};
link.cljs$lang$maxFixedArity = 0;
link.cljs$lang$applyTo = (function (arglist__9783){
var args__6536__auto__ = cljs.core.seq(arglist__9783);
return link__delegate(args__6536__auto__);
});
link.cljs$core$IFn$_invoke$arity$variadic = link__delegate;
return link;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.main = (function() { 
var main__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__8018_9784 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__8019_9785 = null;var count__8020_9786 = 0;var i__8021_9787 = 0;while(true){
if((i__8021_9787 < count__8020_9786))
{var arg__6538__auto___9788 = cljs.core._nth.call(null,chunk__8019_9785,i__8021_9787);a__6537__auto__.push(arg__6538__auto___9788);
{
var G__9789 = seq__8018_9784;
var G__9790 = chunk__8019_9785;
var G__9791 = count__8020_9786;
var G__9792 = (i__8021_9787 + 1);
seq__8018_9784 = G__9789;
chunk__8019_9785 = G__9790;
count__8020_9786 = G__9791;
i__8021_9787 = G__9792;
continue;
}
} else
{var temp__4092__auto___9793 = cljs.core.seq.call(null,seq__8018_9784);if(temp__4092__auto___9793)
{var seq__8018_9794__$1 = temp__4092__auto___9793;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8018_9794__$1))
{var c__5632__auto___9795 = cljs.core.chunk_first.call(null,seq__8018_9794__$1);{
var G__9796 = cljs.core.chunk_rest.call(null,seq__8018_9794__$1);
var G__9797 = c__5632__auto___9795;
var G__9798 = cljs.core.count.call(null,c__5632__auto___9795);
var G__9799 = 0;
seq__8018_9784 = G__9796;
chunk__8019_9785 = G__9797;
count__8020_9786 = G__9798;
i__8021_9787 = G__9799;
continue;
}
} else
{var arg__6538__auto___9800 = cljs.core.first.call(null,seq__8018_9794__$1);a__6537__auto__.push(arg__6538__auto___9800);
{
var G__9801 = cljs.core.next.call(null,seq__8018_9794__$1);
var G__9802 = null;
var G__9803 = 0;
var G__9804 = 0;
seq__8018_9784 = G__9801;
chunk__8019_9785 = G__9802;
count__8020_9786 = G__9803;
i__8021_9787 = G__9804;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.main.apply(null,a__6537__auto__);
};
var main = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return main__delegate.call(this,args__6536__auto__);};
main.cljs$lang$maxFixedArity = 0;
main.cljs$lang$applyTo = (function (arglist__9805){
var args__6536__auto__ = cljs.core.seq(arglist__9805);
return main__delegate(args__6536__auto__);
});
main.cljs$core$IFn$_invoke$arity$variadic = main__delegate;
return main;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.map = (function() { 
var map__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__8026_9806 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__8027_9807 = null;var count__8028_9808 = 0;var i__8029_9809 = 0;while(true){
if((i__8029_9809 < count__8028_9808))
{var arg__6538__auto___9810 = cljs.core._nth.call(null,chunk__8027_9807,i__8029_9809);a__6537__auto__.push(arg__6538__auto___9810);
{
var G__9811 = seq__8026_9806;
var G__9812 = chunk__8027_9807;
var G__9813 = count__8028_9808;
var G__9814 = (i__8029_9809 + 1);
seq__8026_9806 = G__9811;
chunk__8027_9807 = G__9812;
count__8028_9808 = G__9813;
i__8029_9809 = G__9814;
continue;
}
} else
{var temp__4092__auto___9815 = cljs.core.seq.call(null,seq__8026_9806);if(temp__4092__auto___9815)
{var seq__8026_9816__$1 = temp__4092__auto___9815;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8026_9816__$1))
{var c__5632__auto___9817 = cljs.core.chunk_first.call(null,seq__8026_9816__$1);{
var G__9818 = cljs.core.chunk_rest.call(null,seq__8026_9816__$1);
var G__9819 = c__5632__auto___9817;
var G__9820 = cljs.core.count.call(null,c__5632__auto___9817);
var G__9821 = 0;
seq__8026_9806 = G__9818;
chunk__8027_9807 = G__9819;
count__8028_9808 = G__9820;
i__8029_9809 = G__9821;
continue;
}
} else
{var arg__6538__auto___9822 = cljs.core.first.call(null,seq__8026_9816__$1);a__6537__auto__.push(arg__6538__auto___9822);
{
var G__9823 = cljs.core.next.call(null,seq__8026_9816__$1);
var G__9824 = null;
var G__9825 = 0;
var G__9826 = 0;
seq__8026_9806 = G__9823;
chunk__8027_9807 = G__9824;
count__8028_9808 = G__9825;
i__8029_9809 = G__9826;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.map.apply(null,a__6537__auto__);
};
var map = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return map__delegate.call(this,args__6536__auto__);};
map.cljs$lang$maxFixedArity = 0;
map.cljs$lang$applyTo = (function (arglist__9827){
var args__6536__auto__ = cljs.core.seq(arglist__9827);
return map__delegate(args__6536__auto__);
});
map.cljs$core$IFn$_invoke$arity$variadic = map__delegate;
return map;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.mark = (function() { 
var mark__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__8034_9828 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__8035_9829 = null;var count__8036_9830 = 0;var i__8037_9831 = 0;while(true){
if((i__8037_9831 < count__8036_9830))
{var arg__6538__auto___9832 = cljs.core._nth.call(null,chunk__8035_9829,i__8037_9831);a__6537__auto__.push(arg__6538__auto___9832);
{
var G__9833 = seq__8034_9828;
var G__9834 = chunk__8035_9829;
var G__9835 = count__8036_9830;
var G__9836 = (i__8037_9831 + 1);
seq__8034_9828 = G__9833;
chunk__8035_9829 = G__9834;
count__8036_9830 = G__9835;
i__8037_9831 = G__9836;
continue;
}
} else
{var temp__4092__auto___9837 = cljs.core.seq.call(null,seq__8034_9828);if(temp__4092__auto___9837)
{var seq__8034_9838__$1 = temp__4092__auto___9837;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8034_9838__$1))
{var c__5632__auto___9839 = cljs.core.chunk_first.call(null,seq__8034_9838__$1);{
var G__9840 = cljs.core.chunk_rest.call(null,seq__8034_9838__$1);
var G__9841 = c__5632__auto___9839;
var G__9842 = cljs.core.count.call(null,c__5632__auto___9839);
var G__9843 = 0;
seq__8034_9828 = G__9840;
chunk__8035_9829 = G__9841;
count__8036_9830 = G__9842;
i__8037_9831 = G__9843;
continue;
}
} else
{var arg__6538__auto___9844 = cljs.core.first.call(null,seq__8034_9838__$1);a__6537__auto__.push(arg__6538__auto___9844);
{
var G__9845 = cljs.core.next.call(null,seq__8034_9838__$1);
var G__9846 = null;
var G__9847 = 0;
var G__9848 = 0;
seq__8034_9828 = G__9845;
chunk__8035_9829 = G__9846;
count__8036_9830 = G__9847;
i__8037_9831 = G__9848;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.mark.apply(null,a__6537__auto__);
};
var mark = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return mark__delegate.call(this,args__6536__auto__);};
mark.cljs$lang$maxFixedArity = 0;
mark.cljs$lang$applyTo = (function (arglist__9849){
var args__6536__auto__ = cljs.core.seq(arglist__9849);
return mark__delegate(args__6536__auto__);
});
mark.cljs$core$IFn$_invoke$arity$variadic = mark__delegate;
return mark;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.menu = (function() { 
var menu__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__8042_9850 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__8043_9851 = null;var count__8044_9852 = 0;var i__8045_9853 = 0;while(true){
if((i__8045_9853 < count__8044_9852))
{var arg__6538__auto___9854 = cljs.core._nth.call(null,chunk__8043_9851,i__8045_9853);a__6537__auto__.push(arg__6538__auto___9854);
{
var G__9855 = seq__8042_9850;
var G__9856 = chunk__8043_9851;
var G__9857 = count__8044_9852;
var G__9858 = (i__8045_9853 + 1);
seq__8042_9850 = G__9855;
chunk__8043_9851 = G__9856;
count__8044_9852 = G__9857;
i__8045_9853 = G__9858;
continue;
}
} else
{var temp__4092__auto___9859 = cljs.core.seq.call(null,seq__8042_9850);if(temp__4092__auto___9859)
{var seq__8042_9860__$1 = temp__4092__auto___9859;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8042_9860__$1))
{var c__5632__auto___9861 = cljs.core.chunk_first.call(null,seq__8042_9860__$1);{
var G__9862 = cljs.core.chunk_rest.call(null,seq__8042_9860__$1);
var G__9863 = c__5632__auto___9861;
var G__9864 = cljs.core.count.call(null,c__5632__auto___9861);
var G__9865 = 0;
seq__8042_9850 = G__9862;
chunk__8043_9851 = G__9863;
count__8044_9852 = G__9864;
i__8045_9853 = G__9865;
continue;
}
} else
{var arg__6538__auto___9866 = cljs.core.first.call(null,seq__8042_9860__$1);a__6537__auto__.push(arg__6538__auto___9866);
{
var G__9867 = cljs.core.next.call(null,seq__8042_9860__$1);
var G__9868 = null;
var G__9869 = 0;
var G__9870 = 0;
seq__8042_9850 = G__9867;
chunk__8043_9851 = G__9868;
count__8044_9852 = G__9869;
i__8045_9853 = G__9870;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.menu.apply(null,a__6537__auto__);
};
var menu = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return menu__delegate.call(this,args__6536__auto__);};
menu.cljs$lang$maxFixedArity = 0;
menu.cljs$lang$applyTo = (function (arglist__9871){
var args__6536__auto__ = cljs.core.seq(arglist__9871);
return menu__delegate(args__6536__auto__);
});
menu.cljs$core$IFn$_invoke$arity$variadic = menu__delegate;
return menu;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.menuitem = (function() { 
var menuitem__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__8050_9872 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__8051_9873 = null;var count__8052_9874 = 0;var i__8053_9875 = 0;while(true){
if((i__8053_9875 < count__8052_9874))
{var arg__6538__auto___9876 = cljs.core._nth.call(null,chunk__8051_9873,i__8053_9875);a__6537__auto__.push(arg__6538__auto___9876);
{
var G__9877 = seq__8050_9872;
var G__9878 = chunk__8051_9873;
var G__9879 = count__8052_9874;
var G__9880 = (i__8053_9875 + 1);
seq__8050_9872 = G__9877;
chunk__8051_9873 = G__9878;
count__8052_9874 = G__9879;
i__8053_9875 = G__9880;
continue;
}
} else
{var temp__4092__auto___9881 = cljs.core.seq.call(null,seq__8050_9872);if(temp__4092__auto___9881)
{var seq__8050_9882__$1 = temp__4092__auto___9881;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8050_9882__$1))
{var c__5632__auto___9883 = cljs.core.chunk_first.call(null,seq__8050_9882__$1);{
var G__9884 = cljs.core.chunk_rest.call(null,seq__8050_9882__$1);
var G__9885 = c__5632__auto___9883;
var G__9886 = cljs.core.count.call(null,c__5632__auto___9883);
var G__9887 = 0;
seq__8050_9872 = G__9884;
chunk__8051_9873 = G__9885;
count__8052_9874 = G__9886;
i__8053_9875 = G__9887;
continue;
}
} else
{var arg__6538__auto___9888 = cljs.core.first.call(null,seq__8050_9882__$1);a__6537__auto__.push(arg__6538__auto___9888);
{
var G__9889 = cljs.core.next.call(null,seq__8050_9882__$1);
var G__9890 = null;
var G__9891 = 0;
var G__9892 = 0;
seq__8050_9872 = G__9889;
chunk__8051_9873 = G__9890;
count__8052_9874 = G__9891;
i__8053_9875 = G__9892;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.menuitem.apply(null,a__6537__auto__);
};
var menuitem = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return menuitem__delegate.call(this,args__6536__auto__);};
menuitem.cljs$lang$maxFixedArity = 0;
menuitem.cljs$lang$applyTo = (function (arglist__9893){
var args__6536__auto__ = cljs.core.seq(arglist__9893);
return menuitem__delegate(args__6536__auto__);
});
menuitem.cljs$core$IFn$_invoke$arity$variadic = menuitem__delegate;
return menuitem;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.meta = (function() { 
var meta__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__8058_9894 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__8059_9895 = null;var count__8060_9896 = 0;var i__8061_9897 = 0;while(true){
if((i__8061_9897 < count__8060_9896))
{var arg__6538__auto___9898 = cljs.core._nth.call(null,chunk__8059_9895,i__8061_9897);a__6537__auto__.push(arg__6538__auto___9898);
{
var G__9899 = seq__8058_9894;
var G__9900 = chunk__8059_9895;
var G__9901 = count__8060_9896;
var G__9902 = (i__8061_9897 + 1);
seq__8058_9894 = G__9899;
chunk__8059_9895 = G__9900;
count__8060_9896 = G__9901;
i__8061_9897 = G__9902;
continue;
}
} else
{var temp__4092__auto___9903 = cljs.core.seq.call(null,seq__8058_9894);if(temp__4092__auto___9903)
{var seq__8058_9904__$1 = temp__4092__auto___9903;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8058_9904__$1))
{var c__5632__auto___9905 = cljs.core.chunk_first.call(null,seq__8058_9904__$1);{
var G__9906 = cljs.core.chunk_rest.call(null,seq__8058_9904__$1);
var G__9907 = c__5632__auto___9905;
var G__9908 = cljs.core.count.call(null,c__5632__auto___9905);
var G__9909 = 0;
seq__8058_9894 = G__9906;
chunk__8059_9895 = G__9907;
count__8060_9896 = G__9908;
i__8061_9897 = G__9909;
continue;
}
} else
{var arg__6538__auto___9910 = cljs.core.first.call(null,seq__8058_9904__$1);a__6537__auto__.push(arg__6538__auto___9910);
{
var G__9911 = cljs.core.next.call(null,seq__8058_9904__$1);
var G__9912 = null;
var G__9913 = 0;
var G__9914 = 0;
seq__8058_9894 = G__9911;
chunk__8059_9895 = G__9912;
count__8060_9896 = G__9913;
i__8061_9897 = G__9914;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.meta.apply(null,a__6537__auto__);
};
var meta = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return meta__delegate.call(this,args__6536__auto__);};
meta.cljs$lang$maxFixedArity = 0;
meta.cljs$lang$applyTo = (function (arglist__9915){
var args__6536__auto__ = cljs.core.seq(arglist__9915);
return meta__delegate(args__6536__auto__);
});
meta.cljs$core$IFn$_invoke$arity$variadic = meta__delegate;
return meta;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.meter = (function() { 
var meter__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__8066_9916 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__8067_9917 = null;var count__8068_9918 = 0;var i__8069_9919 = 0;while(true){
if((i__8069_9919 < count__8068_9918))
{var arg__6538__auto___9920 = cljs.core._nth.call(null,chunk__8067_9917,i__8069_9919);a__6537__auto__.push(arg__6538__auto___9920);
{
var G__9921 = seq__8066_9916;
var G__9922 = chunk__8067_9917;
var G__9923 = count__8068_9918;
var G__9924 = (i__8069_9919 + 1);
seq__8066_9916 = G__9921;
chunk__8067_9917 = G__9922;
count__8068_9918 = G__9923;
i__8069_9919 = G__9924;
continue;
}
} else
{var temp__4092__auto___9925 = cljs.core.seq.call(null,seq__8066_9916);if(temp__4092__auto___9925)
{var seq__8066_9926__$1 = temp__4092__auto___9925;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8066_9926__$1))
{var c__5632__auto___9927 = cljs.core.chunk_first.call(null,seq__8066_9926__$1);{
var G__9928 = cljs.core.chunk_rest.call(null,seq__8066_9926__$1);
var G__9929 = c__5632__auto___9927;
var G__9930 = cljs.core.count.call(null,c__5632__auto___9927);
var G__9931 = 0;
seq__8066_9916 = G__9928;
chunk__8067_9917 = G__9929;
count__8068_9918 = G__9930;
i__8069_9919 = G__9931;
continue;
}
} else
{var arg__6538__auto___9932 = cljs.core.first.call(null,seq__8066_9926__$1);a__6537__auto__.push(arg__6538__auto___9932);
{
var G__9933 = cljs.core.next.call(null,seq__8066_9926__$1);
var G__9934 = null;
var G__9935 = 0;
var G__9936 = 0;
seq__8066_9916 = G__9933;
chunk__8067_9917 = G__9934;
count__8068_9918 = G__9935;
i__8069_9919 = G__9936;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.meter.apply(null,a__6537__auto__);
};
var meter = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return meter__delegate.call(this,args__6536__auto__);};
meter.cljs$lang$maxFixedArity = 0;
meter.cljs$lang$applyTo = (function (arglist__9937){
var args__6536__auto__ = cljs.core.seq(arglist__9937);
return meter__delegate(args__6536__auto__);
});
meter.cljs$core$IFn$_invoke$arity$variadic = meter__delegate;
return meter;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.nav = (function() { 
var nav__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__8074_9938 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__8075_9939 = null;var count__8076_9940 = 0;var i__8077_9941 = 0;while(true){
if((i__8077_9941 < count__8076_9940))
{var arg__6538__auto___9942 = cljs.core._nth.call(null,chunk__8075_9939,i__8077_9941);a__6537__auto__.push(arg__6538__auto___9942);
{
var G__9943 = seq__8074_9938;
var G__9944 = chunk__8075_9939;
var G__9945 = count__8076_9940;
var G__9946 = (i__8077_9941 + 1);
seq__8074_9938 = G__9943;
chunk__8075_9939 = G__9944;
count__8076_9940 = G__9945;
i__8077_9941 = G__9946;
continue;
}
} else
{var temp__4092__auto___9947 = cljs.core.seq.call(null,seq__8074_9938);if(temp__4092__auto___9947)
{var seq__8074_9948__$1 = temp__4092__auto___9947;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8074_9948__$1))
{var c__5632__auto___9949 = cljs.core.chunk_first.call(null,seq__8074_9948__$1);{
var G__9950 = cljs.core.chunk_rest.call(null,seq__8074_9948__$1);
var G__9951 = c__5632__auto___9949;
var G__9952 = cljs.core.count.call(null,c__5632__auto___9949);
var G__9953 = 0;
seq__8074_9938 = G__9950;
chunk__8075_9939 = G__9951;
count__8076_9940 = G__9952;
i__8077_9941 = G__9953;
continue;
}
} else
{var arg__6538__auto___9954 = cljs.core.first.call(null,seq__8074_9948__$1);a__6537__auto__.push(arg__6538__auto___9954);
{
var G__9955 = cljs.core.next.call(null,seq__8074_9948__$1);
var G__9956 = null;
var G__9957 = 0;
var G__9958 = 0;
seq__8074_9938 = G__9955;
chunk__8075_9939 = G__9956;
count__8076_9940 = G__9957;
i__8077_9941 = G__9958;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.nav.apply(null,a__6537__auto__);
};
var nav = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return nav__delegate.call(this,args__6536__auto__);};
nav.cljs$lang$maxFixedArity = 0;
nav.cljs$lang$applyTo = (function (arglist__9959){
var args__6536__auto__ = cljs.core.seq(arglist__9959);
return nav__delegate(args__6536__auto__);
});
nav.cljs$core$IFn$_invoke$arity$variadic = nav__delegate;
return nav;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.noscript = (function() { 
var noscript__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__8082_9960 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__8083_9961 = null;var count__8084_9962 = 0;var i__8085_9963 = 0;while(true){
if((i__8085_9963 < count__8084_9962))
{var arg__6538__auto___9964 = cljs.core._nth.call(null,chunk__8083_9961,i__8085_9963);a__6537__auto__.push(arg__6538__auto___9964);
{
var G__9965 = seq__8082_9960;
var G__9966 = chunk__8083_9961;
var G__9967 = count__8084_9962;
var G__9968 = (i__8085_9963 + 1);
seq__8082_9960 = G__9965;
chunk__8083_9961 = G__9966;
count__8084_9962 = G__9967;
i__8085_9963 = G__9968;
continue;
}
} else
{var temp__4092__auto___9969 = cljs.core.seq.call(null,seq__8082_9960);if(temp__4092__auto___9969)
{var seq__8082_9970__$1 = temp__4092__auto___9969;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8082_9970__$1))
{var c__5632__auto___9971 = cljs.core.chunk_first.call(null,seq__8082_9970__$1);{
var G__9972 = cljs.core.chunk_rest.call(null,seq__8082_9970__$1);
var G__9973 = c__5632__auto___9971;
var G__9974 = cljs.core.count.call(null,c__5632__auto___9971);
var G__9975 = 0;
seq__8082_9960 = G__9972;
chunk__8083_9961 = G__9973;
count__8084_9962 = G__9974;
i__8085_9963 = G__9975;
continue;
}
} else
{var arg__6538__auto___9976 = cljs.core.first.call(null,seq__8082_9970__$1);a__6537__auto__.push(arg__6538__auto___9976);
{
var G__9977 = cljs.core.next.call(null,seq__8082_9970__$1);
var G__9978 = null;
var G__9979 = 0;
var G__9980 = 0;
seq__8082_9960 = G__9977;
chunk__8083_9961 = G__9978;
count__8084_9962 = G__9979;
i__8085_9963 = G__9980;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.noscript.apply(null,a__6537__auto__);
};
var noscript = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return noscript__delegate.call(this,args__6536__auto__);};
noscript.cljs$lang$maxFixedArity = 0;
noscript.cljs$lang$applyTo = (function (arglist__9981){
var args__6536__auto__ = cljs.core.seq(arglist__9981);
return noscript__delegate(args__6536__auto__);
});
noscript.cljs$core$IFn$_invoke$arity$variadic = noscript__delegate;
return noscript;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.object = (function() { 
var object__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__8090_9982 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__8091_9983 = null;var count__8092_9984 = 0;var i__8093_9985 = 0;while(true){
if((i__8093_9985 < count__8092_9984))
{var arg__6538__auto___9986 = cljs.core._nth.call(null,chunk__8091_9983,i__8093_9985);a__6537__auto__.push(arg__6538__auto___9986);
{
var G__9987 = seq__8090_9982;
var G__9988 = chunk__8091_9983;
var G__9989 = count__8092_9984;
var G__9990 = (i__8093_9985 + 1);
seq__8090_9982 = G__9987;
chunk__8091_9983 = G__9988;
count__8092_9984 = G__9989;
i__8093_9985 = G__9990;
continue;
}
} else
{var temp__4092__auto___9991 = cljs.core.seq.call(null,seq__8090_9982);if(temp__4092__auto___9991)
{var seq__8090_9992__$1 = temp__4092__auto___9991;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8090_9992__$1))
{var c__5632__auto___9993 = cljs.core.chunk_first.call(null,seq__8090_9992__$1);{
var G__9994 = cljs.core.chunk_rest.call(null,seq__8090_9992__$1);
var G__9995 = c__5632__auto___9993;
var G__9996 = cljs.core.count.call(null,c__5632__auto___9993);
var G__9997 = 0;
seq__8090_9982 = G__9994;
chunk__8091_9983 = G__9995;
count__8092_9984 = G__9996;
i__8093_9985 = G__9997;
continue;
}
} else
{var arg__6538__auto___9998 = cljs.core.first.call(null,seq__8090_9992__$1);a__6537__auto__.push(arg__6538__auto___9998);
{
var G__9999 = cljs.core.next.call(null,seq__8090_9992__$1);
var G__10000 = null;
var G__10001 = 0;
var G__10002 = 0;
seq__8090_9982 = G__9999;
chunk__8091_9983 = G__10000;
count__8092_9984 = G__10001;
i__8093_9985 = G__10002;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.object.apply(null,a__6537__auto__);
};
var object = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return object__delegate.call(this,args__6536__auto__);};
object.cljs$lang$maxFixedArity = 0;
object.cljs$lang$applyTo = (function (arglist__10003){
var args__6536__auto__ = cljs.core.seq(arglist__10003);
return object__delegate(args__6536__auto__);
});
object.cljs$core$IFn$_invoke$arity$variadic = object__delegate;
return object;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.ol = (function() { 
var ol__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__8098_10004 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__8099_10005 = null;var count__8100_10006 = 0;var i__8101_10007 = 0;while(true){
if((i__8101_10007 < count__8100_10006))
{var arg__6538__auto___10008 = cljs.core._nth.call(null,chunk__8099_10005,i__8101_10007);a__6537__auto__.push(arg__6538__auto___10008);
{
var G__10009 = seq__8098_10004;
var G__10010 = chunk__8099_10005;
var G__10011 = count__8100_10006;
var G__10012 = (i__8101_10007 + 1);
seq__8098_10004 = G__10009;
chunk__8099_10005 = G__10010;
count__8100_10006 = G__10011;
i__8101_10007 = G__10012;
continue;
}
} else
{var temp__4092__auto___10013 = cljs.core.seq.call(null,seq__8098_10004);if(temp__4092__auto___10013)
{var seq__8098_10014__$1 = temp__4092__auto___10013;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8098_10014__$1))
{var c__5632__auto___10015 = cljs.core.chunk_first.call(null,seq__8098_10014__$1);{
var G__10016 = cljs.core.chunk_rest.call(null,seq__8098_10014__$1);
var G__10017 = c__5632__auto___10015;
var G__10018 = cljs.core.count.call(null,c__5632__auto___10015);
var G__10019 = 0;
seq__8098_10004 = G__10016;
chunk__8099_10005 = G__10017;
count__8100_10006 = G__10018;
i__8101_10007 = G__10019;
continue;
}
} else
{var arg__6538__auto___10020 = cljs.core.first.call(null,seq__8098_10014__$1);a__6537__auto__.push(arg__6538__auto___10020);
{
var G__10021 = cljs.core.next.call(null,seq__8098_10014__$1);
var G__10022 = null;
var G__10023 = 0;
var G__10024 = 0;
seq__8098_10004 = G__10021;
chunk__8099_10005 = G__10022;
count__8100_10006 = G__10023;
i__8101_10007 = G__10024;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.ol.apply(null,a__6537__auto__);
};
var ol = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ol__delegate.call(this,args__6536__auto__);};
ol.cljs$lang$maxFixedArity = 0;
ol.cljs$lang$applyTo = (function (arglist__10025){
var args__6536__auto__ = cljs.core.seq(arglist__10025);
return ol__delegate(args__6536__auto__);
});
ol.cljs$core$IFn$_invoke$arity$variadic = ol__delegate;
return ol;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.optgroup = (function() { 
var optgroup__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__8106_10026 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__8107_10027 = null;var count__8108_10028 = 0;var i__8109_10029 = 0;while(true){
if((i__8109_10029 < count__8108_10028))
{var arg__6538__auto___10030 = cljs.core._nth.call(null,chunk__8107_10027,i__8109_10029);a__6537__auto__.push(arg__6538__auto___10030);
{
var G__10031 = seq__8106_10026;
var G__10032 = chunk__8107_10027;
var G__10033 = count__8108_10028;
var G__10034 = (i__8109_10029 + 1);
seq__8106_10026 = G__10031;
chunk__8107_10027 = G__10032;
count__8108_10028 = G__10033;
i__8109_10029 = G__10034;
continue;
}
} else
{var temp__4092__auto___10035 = cljs.core.seq.call(null,seq__8106_10026);if(temp__4092__auto___10035)
{var seq__8106_10036__$1 = temp__4092__auto___10035;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8106_10036__$1))
{var c__5632__auto___10037 = cljs.core.chunk_first.call(null,seq__8106_10036__$1);{
var G__10038 = cljs.core.chunk_rest.call(null,seq__8106_10036__$1);
var G__10039 = c__5632__auto___10037;
var G__10040 = cljs.core.count.call(null,c__5632__auto___10037);
var G__10041 = 0;
seq__8106_10026 = G__10038;
chunk__8107_10027 = G__10039;
count__8108_10028 = G__10040;
i__8109_10029 = G__10041;
continue;
}
} else
{var arg__6538__auto___10042 = cljs.core.first.call(null,seq__8106_10036__$1);a__6537__auto__.push(arg__6538__auto___10042);
{
var G__10043 = cljs.core.next.call(null,seq__8106_10036__$1);
var G__10044 = null;
var G__10045 = 0;
var G__10046 = 0;
seq__8106_10026 = G__10043;
chunk__8107_10027 = G__10044;
count__8108_10028 = G__10045;
i__8109_10029 = G__10046;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.optgroup.apply(null,a__6537__auto__);
};
var optgroup = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return optgroup__delegate.call(this,args__6536__auto__);};
optgroup.cljs$lang$maxFixedArity = 0;
optgroup.cljs$lang$applyTo = (function (arglist__10047){
var args__6536__auto__ = cljs.core.seq(arglist__10047);
return optgroup__delegate(args__6536__auto__);
});
optgroup.cljs$core$IFn$_invoke$arity$variadic = optgroup__delegate;
return optgroup;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.option = (function() { 
var option__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__8114_10048 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__8115_10049 = null;var count__8116_10050 = 0;var i__8117_10051 = 0;while(true){
if((i__8117_10051 < count__8116_10050))
{var arg__6538__auto___10052 = cljs.core._nth.call(null,chunk__8115_10049,i__8117_10051);a__6537__auto__.push(arg__6538__auto___10052);
{
var G__10053 = seq__8114_10048;
var G__10054 = chunk__8115_10049;
var G__10055 = count__8116_10050;
var G__10056 = (i__8117_10051 + 1);
seq__8114_10048 = G__10053;
chunk__8115_10049 = G__10054;
count__8116_10050 = G__10055;
i__8117_10051 = G__10056;
continue;
}
} else
{var temp__4092__auto___10057 = cljs.core.seq.call(null,seq__8114_10048);if(temp__4092__auto___10057)
{var seq__8114_10058__$1 = temp__4092__auto___10057;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8114_10058__$1))
{var c__5632__auto___10059 = cljs.core.chunk_first.call(null,seq__8114_10058__$1);{
var G__10060 = cljs.core.chunk_rest.call(null,seq__8114_10058__$1);
var G__10061 = c__5632__auto___10059;
var G__10062 = cljs.core.count.call(null,c__5632__auto___10059);
var G__10063 = 0;
seq__8114_10048 = G__10060;
chunk__8115_10049 = G__10061;
count__8116_10050 = G__10062;
i__8117_10051 = G__10063;
continue;
}
} else
{var arg__6538__auto___10064 = cljs.core.first.call(null,seq__8114_10058__$1);a__6537__auto__.push(arg__6538__auto___10064);
{
var G__10065 = cljs.core.next.call(null,seq__8114_10058__$1);
var G__10066 = null;
var G__10067 = 0;
var G__10068 = 0;
seq__8114_10048 = G__10065;
chunk__8115_10049 = G__10066;
count__8116_10050 = G__10067;
i__8117_10051 = G__10068;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.option.apply(null,a__6537__auto__);
};
var option = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return option__delegate.call(this,args__6536__auto__);};
option.cljs$lang$maxFixedArity = 0;
option.cljs$lang$applyTo = (function (arglist__10069){
var args__6536__auto__ = cljs.core.seq(arglist__10069);
return option__delegate(args__6536__auto__);
});
option.cljs$core$IFn$_invoke$arity$variadic = option__delegate;
return option;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.output = (function() { 
var output__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__8122_10070 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__8123_10071 = null;var count__8124_10072 = 0;var i__8125_10073 = 0;while(true){
if((i__8125_10073 < count__8124_10072))
{var arg__6538__auto___10074 = cljs.core._nth.call(null,chunk__8123_10071,i__8125_10073);a__6537__auto__.push(arg__6538__auto___10074);
{
var G__10075 = seq__8122_10070;
var G__10076 = chunk__8123_10071;
var G__10077 = count__8124_10072;
var G__10078 = (i__8125_10073 + 1);
seq__8122_10070 = G__10075;
chunk__8123_10071 = G__10076;
count__8124_10072 = G__10077;
i__8125_10073 = G__10078;
continue;
}
} else
{var temp__4092__auto___10079 = cljs.core.seq.call(null,seq__8122_10070);if(temp__4092__auto___10079)
{var seq__8122_10080__$1 = temp__4092__auto___10079;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8122_10080__$1))
{var c__5632__auto___10081 = cljs.core.chunk_first.call(null,seq__8122_10080__$1);{
var G__10082 = cljs.core.chunk_rest.call(null,seq__8122_10080__$1);
var G__10083 = c__5632__auto___10081;
var G__10084 = cljs.core.count.call(null,c__5632__auto___10081);
var G__10085 = 0;
seq__8122_10070 = G__10082;
chunk__8123_10071 = G__10083;
count__8124_10072 = G__10084;
i__8125_10073 = G__10085;
continue;
}
} else
{var arg__6538__auto___10086 = cljs.core.first.call(null,seq__8122_10080__$1);a__6537__auto__.push(arg__6538__auto___10086);
{
var G__10087 = cljs.core.next.call(null,seq__8122_10080__$1);
var G__10088 = null;
var G__10089 = 0;
var G__10090 = 0;
seq__8122_10070 = G__10087;
chunk__8123_10071 = G__10088;
count__8124_10072 = G__10089;
i__8125_10073 = G__10090;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.output.apply(null,a__6537__auto__);
};
var output = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return output__delegate.call(this,args__6536__auto__);};
output.cljs$lang$maxFixedArity = 0;
output.cljs$lang$applyTo = (function (arglist__10091){
var args__6536__auto__ = cljs.core.seq(arglist__10091);
return output__delegate(args__6536__auto__);
});
output.cljs$core$IFn$_invoke$arity$variadic = output__delegate;
return output;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.p = (function() { 
var p__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__8130_10092 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__8131_10093 = null;var count__8132_10094 = 0;var i__8133_10095 = 0;while(true){
if((i__8133_10095 < count__8132_10094))
{var arg__6538__auto___10096 = cljs.core._nth.call(null,chunk__8131_10093,i__8133_10095);a__6537__auto__.push(arg__6538__auto___10096);
{
var G__10097 = seq__8130_10092;
var G__10098 = chunk__8131_10093;
var G__10099 = count__8132_10094;
var G__10100 = (i__8133_10095 + 1);
seq__8130_10092 = G__10097;
chunk__8131_10093 = G__10098;
count__8132_10094 = G__10099;
i__8133_10095 = G__10100;
continue;
}
} else
{var temp__4092__auto___10101 = cljs.core.seq.call(null,seq__8130_10092);if(temp__4092__auto___10101)
{var seq__8130_10102__$1 = temp__4092__auto___10101;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8130_10102__$1))
{var c__5632__auto___10103 = cljs.core.chunk_first.call(null,seq__8130_10102__$1);{
var G__10104 = cljs.core.chunk_rest.call(null,seq__8130_10102__$1);
var G__10105 = c__5632__auto___10103;
var G__10106 = cljs.core.count.call(null,c__5632__auto___10103);
var G__10107 = 0;
seq__8130_10092 = G__10104;
chunk__8131_10093 = G__10105;
count__8132_10094 = G__10106;
i__8133_10095 = G__10107;
continue;
}
} else
{var arg__6538__auto___10108 = cljs.core.first.call(null,seq__8130_10102__$1);a__6537__auto__.push(arg__6538__auto___10108);
{
var G__10109 = cljs.core.next.call(null,seq__8130_10102__$1);
var G__10110 = null;
var G__10111 = 0;
var G__10112 = 0;
seq__8130_10092 = G__10109;
chunk__8131_10093 = G__10110;
count__8132_10094 = G__10111;
i__8133_10095 = G__10112;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.p.apply(null,a__6537__auto__);
};
var p = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return p__delegate.call(this,args__6536__auto__);};
p.cljs$lang$maxFixedArity = 0;
p.cljs$lang$applyTo = (function (arglist__10113){
var args__6536__auto__ = cljs.core.seq(arglist__10113);
return p__delegate(args__6536__auto__);
});
p.cljs$core$IFn$_invoke$arity$variadic = p__delegate;
return p;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.param = (function() { 
var param__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__8138_10114 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__8139_10115 = null;var count__8140_10116 = 0;var i__8141_10117 = 0;while(true){
if((i__8141_10117 < count__8140_10116))
{var arg__6538__auto___10118 = cljs.core._nth.call(null,chunk__8139_10115,i__8141_10117);a__6537__auto__.push(arg__6538__auto___10118);
{
var G__10119 = seq__8138_10114;
var G__10120 = chunk__8139_10115;
var G__10121 = count__8140_10116;
var G__10122 = (i__8141_10117 + 1);
seq__8138_10114 = G__10119;
chunk__8139_10115 = G__10120;
count__8140_10116 = G__10121;
i__8141_10117 = G__10122;
continue;
}
} else
{var temp__4092__auto___10123 = cljs.core.seq.call(null,seq__8138_10114);if(temp__4092__auto___10123)
{var seq__8138_10124__$1 = temp__4092__auto___10123;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8138_10124__$1))
{var c__5632__auto___10125 = cljs.core.chunk_first.call(null,seq__8138_10124__$1);{
var G__10126 = cljs.core.chunk_rest.call(null,seq__8138_10124__$1);
var G__10127 = c__5632__auto___10125;
var G__10128 = cljs.core.count.call(null,c__5632__auto___10125);
var G__10129 = 0;
seq__8138_10114 = G__10126;
chunk__8139_10115 = G__10127;
count__8140_10116 = G__10128;
i__8141_10117 = G__10129;
continue;
}
} else
{var arg__6538__auto___10130 = cljs.core.first.call(null,seq__8138_10124__$1);a__6537__auto__.push(arg__6538__auto___10130);
{
var G__10131 = cljs.core.next.call(null,seq__8138_10124__$1);
var G__10132 = null;
var G__10133 = 0;
var G__10134 = 0;
seq__8138_10114 = G__10131;
chunk__8139_10115 = G__10132;
count__8140_10116 = G__10133;
i__8141_10117 = G__10134;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.param.apply(null,a__6537__auto__);
};
var param = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return param__delegate.call(this,args__6536__auto__);};
param.cljs$lang$maxFixedArity = 0;
param.cljs$lang$applyTo = (function (arglist__10135){
var args__6536__auto__ = cljs.core.seq(arglist__10135);
return param__delegate(args__6536__auto__);
});
param.cljs$core$IFn$_invoke$arity$variadic = param__delegate;
return param;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.pre = (function() { 
var pre__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__8146_10136 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__8147_10137 = null;var count__8148_10138 = 0;var i__8149_10139 = 0;while(true){
if((i__8149_10139 < count__8148_10138))
{var arg__6538__auto___10140 = cljs.core._nth.call(null,chunk__8147_10137,i__8149_10139);a__6537__auto__.push(arg__6538__auto___10140);
{
var G__10141 = seq__8146_10136;
var G__10142 = chunk__8147_10137;
var G__10143 = count__8148_10138;
var G__10144 = (i__8149_10139 + 1);
seq__8146_10136 = G__10141;
chunk__8147_10137 = G__10142;
count__8148_10138 = G__10143;
i__8149_10139 = G__10144;
continue;
}
} else
{var temp__4092__auto___10145 = cljs.core.seq.call(null,seq__8146_10136);if(temp__4092__auto___10145)
{var seq__8146_10146__$1 = temp__4092__auto___10145;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8146_10146__$1))
{var c__5632__auto___10147 = cljs.core.chunk_first.call(null,seq__8146_10146__$1);{
var G__10148 = cljs.core.chunk_rest.call(null,seq__8146_10146__$1);
var G__10149 = c__5632__auto___10147;
var G__10150 = cljs.core.count.call(null,c__5632__auto___10147);
var G__10151 = 0;
seq__8146_10136 = G__10148;
chunk__8147_10137 = G__10149;
count__8148_10138 = G__10150;
i__8149_10139 = G__10151;
continue;
}
} else
{var arg__6538__auto___10152 = cljs.core.first.call(null,seq__8146_10146__$1);a__6537__auto__.push(arg__6538__auto___10152);
{
var G__10153 = cljs.core.next.call(null,seq__8146_10146__$1);
var G__10154 = null;
var G__10155 = 0;
var G__10156 = 0;
seq__8146_10136 = G__10153;
chunk__8147_10137 = G__10154;
count__8148_10138 = G__10155;
i__8149_10139 = G__10156;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.pre.apply(null,a__6537__auto__);
};
var pre = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return pre__delegate.call(this,args__6536__auto__);};
pre.cljs$lang$maxFixedArity = 0;
pre.cljs$lang$applyTo = (function (arglist__10157){
var args__6536__auto__ = cljs.core.seq(arglist__10157);
return pre__delegate(args__6536__auto__);
});
pre.cljs$core$IFn$_invoke$arity$variadic = pre__delegate;
return pre;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.progress = (function() { 
var progress__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__8154_10158 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__8155_10159 = null;var count__8156_10160 = 0;var i__8157_10161 = 0;while(true){
if((i__8157_10161 < count__8156_10160))
{var arg__6538__auto___10162 = cljs.core._nth.call(null,chunk__8155_10159,i__8157_10161);a__6537__auto__.push(arg__6538__auto___10162);
{
var G__10163 = seq__8154_10158;
var G__10164 = chunk__8155_10159;
var G__10165 = count__8156_10160;
var G__10166 = (i__8157_10161 + 1);
seq__8154_10158 = G__10163;
chunk__8155_10159 = G__10164;
count__8156_10160 = G__10165;
i__8157_10161 = G__10166;
continue;
}
} else
{var temp__4092__auto___10167 = cljs.core.seq.call(null,seq__8154_10158);if(temp__4092__auto___10167)
{var seq__8154_10168__$1 = temp__4092__auto___10167;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8154_10168__$1))
{var c__5632__auto___10169 = cljs.core.chunk_first.call(null,seq__8154_10168__$1);{
var G__10170 = cljs.core.chunk_rest.call(null,seq__8154_10168__$1);
var G__10171 = c__5632__auto___10169;
var G__10172 = cljs.core.count.call(null,c__5632__auto___10169);
var G__10173 = 0;
seq__8154_10158 = G__10170;
chunk__8155_10159 = G__10171;
count__8156_10160 = G__10172;
i__8157_10161 = G__10173;
continue;
}
} else
{var arg__6538__auto___10174 = cljs.core.first.call(null,seq__8154_10168__$1);a__6537__auto__.push(arg__6538__auto___10174);
{
var G__10175 = cljs.core.next.call(null,seq__8154_10168__$1);
var G__10176 = null;
var G__10177 = 0;
var G__10178 = 0;
seq__8154_10158 = G__10175;
chunk__8155_10159 = G__10176;
count__8156_10160 = G__10177;
i__8157_10161 = G__10178;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.progress.apply(null,a__6537__auto__);
};
var progress = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return progress__delegate.call(this,args__6536__auto__);};
progress.cljs$lang$maxFixedArity = 0;
progress.cljs$lang$applyTo = (function (arglist__10179){
var args__6536__auto__ = cljs.core.seq(arglist__10179);
return progress__delegate(args__6536__auto__);
});
progress.cljs$core$IFn$_invoke$arity$variadic = progress__delegate;
return progress;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.q = (function() { 
var q__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__8162_10180 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__8163_10181 = null;var count__8164_10182 = 0;var i__8165_10183 = 0;while(true){
if((i__8165_10183 < count__8164_10182))
{var arg__6538__auto___10184 = cljs.core._nth.call(null,chunk__8163_10181,i__8165_10183);a__6537__auto__.push(arg__6538__auto___10184);
{
var G__10185 = seq__8162_10180;
var G__10186 = chunk__8163_10181;
var G__10187 = count__8164_10182;
var G__10188 = (i__8165_10183 + 1);
seq__8162_10180 = G__10185;
chunk__8163_10181 = G__10186;
count__8164_10182 = G__10187;
i__8165_10183 = G__10188;
continue;
}
} else
{var temp__4092__auto___10189 = cljs.core.seq.call(null,seq__8162_10180);if(temp__4092__auto___10189)
{var seq__8162_10190__$1 = temp__4092__auto___10189;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8162_10190__$1))
{var c__5632__auto___10191 = cljs.core.chunk_first.call(null,seq__8162_10190__$1);{
var G__10192 = cljs.core.chunk_rest.call(null,seq__8162_10190__$1);
var G__10193 = c__5632__auto___10191;
var G__10194 = cljs.core.count.call(null,c__5632__auto___10191);
var G__10195 = 0;
seq__8162_10180 = G__10192;
chunk__8163_10181 = G__10193;
count__8164_10182 = G__10194;
i__8165_10183 = G__10195;
continue;
}
} else
{var arg__6538__auto___10196 = cljs.core.first.call(null,seq__8162_10190__$1);a__6537__auto__.push(arg__6538__auto___10196);
{
var G__10197 = cljs.core.next.call(null,seq__8162_10190__$1);
var G__10198 = null;
var G__10199 = 0;
var G__10200 = 0;
seq__8162_10180 = G__10197;
chunk__8163_10181 = G__10198;
count__8164_10182 = G__10199;
i__8165_10183 = G__10200;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.q.apply(null,a__6537__auto__);
};
var q = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return q__delegate.call(this,args__6536__auto__);};
q.cljs$lang$maxFixedArity = 0;
q.cljs$lang$applyTo = (function (arglist__10201){
var args__6536__auto__ = cljs.core.seq(arglist__10201);
return q__delegate(args__6536__auto__);
});
q.cljs$core$IFn$_invoke$arity$variadic = q__delegate;
return q;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.rp = (function() { 
var rp__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__8170_10202 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__8171_10203 = null;var count__8172_10204 = 0;var i__8173_10205 = 0;while(true){
if((i__8173_10205 < count__8172_10204))
{var arg__6538__auto___10206 = cljs.core._nth.call(null,chunk__8171_10203,i__8173_10205);a__6537__auto__.push(arg__6538__auto___10206);
{
var G__10207 = seq__8170_10202;
var G__10208 = chunk__8171_10203;
var G__10209 = count__8172_10204;
var G__10210 = (i__8173_10205 + 1);
seq__8170_10202 = G__10207;
chunk__8171_10203 = G__10208;
count__8172_10204 = G__10209;
i__8173_10205 = G__10210;
continue;
}
} else
{var temp__4092__auto___10211 = cljs.core.seq.call(null,seq__8170_10202);if(temp__4092__auto___10211)
{var seq__8170_10212__$1 = temp__4092__auto___10211;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8170_10212__$1))
{var c__5632__auto___10213 = cljs.core.chunk_first.call(null,seq__8170_10212__$1);{
var G__10214 = cljs.core.chunk_rest.call(null,seq__8170_10212__$1);
var G__10215 = c__5632__auto___10213;
var G__10216 = cljs.core.count.call(null,c__5632__auto___10213);
var G__10217 = 0;
seq__8170_10202 = G__10214;
chunk__8171_10203 = G__10215;
count__8172_10204 = G__10216;
i__8173_10205 = G__10217;
continue;
}
} else
{var arg__6538__auto___10218 = cljs.core.first.call(null,seq__8170_10212__$1);a__6537__auto__.push(arg__6538__auto___10218);
{
var G__10219 = cljs.core.next.call(null,seq__8170_10212__$1);
var G__10220 = null;
var G__10221 = 0;
var G__10222 = 0;
seq__8170_10202 = G__10219;
chunk__8171_10203 = G__10220;
count__8172_10204 = G__10221;
i__8173_10205 = G__10222;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.rp.apply(null,a__6537__auto__);
};
var rp = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return rp__delegate.call(this,args__6536__auto__);};
rp.cljs$lang$maxFixedArity = 0;
rp.cljs$lang$applyTo = (function (arglist__10223){
var args__6536__auto__ = cljs.core.seq(arglist__10223);
return rp__delegate(args__6536__auto__);
});
rp.cljs$core$IFn$_invoke$arity$variadic = rp__delegate;
return rp;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.rt = (function() { 
var rt__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__8178_10224 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__8179_10225 = null;var count__8180_10226 = 0;var i__8181_10227 = 0;while(true){
if((i__8181_10227 < count__8180_10226))
{var arg__6538__auto___10228 = cljs.core._nth.call(null,chunk__8179_10225,i__8181_10227);a__6537__auto__.push(arg__6538__auto___10228);
{
var G__10229 = seq__8178_10224;
var G__10230 = chunk__8179_10225;
var G__10231 = count__8180_10226;
var G__10232 = (i__8181_10227 + 1);
seq__8178_10224 = G__10229;
chunk__8179_10225 = G__10230;
count__8180_10226 = G__10231;
i__8181_10227 = G__10232;
continue;
}
} else
{var temp__4092__auto___10233 = cljs.core.seq.call(null,seq__8178_10224);if(temp__4092__auto___10233)
{var seq__8178_10234__$1 = temp__4092__auto___10233;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8178_10234__$1))
{var c__5632__auto___10235 = cljs.core.chunk_first.call(null,seq__8178_10234__$1);{
var G__10236 = cljs.core.chunk_rest.call(null,seq__8178_10234__$1);
var G__10237 = c__5632__auto___10235;
var G__10238 = cljs.core.count.call(null,c__5632__auto___10235);
var G__10239 = 0;
seq__8178_10224 = G__10236;
chunk__8179_10225 = G__10237;
count__8180_10226 = G__10238;
i__8181_10227 = G__10239;
continue;
}
} else
{var arg__6538__auto___10240 = cljs.core.first.call(null,seq__8178_10234__$1);a__6537__auto__.push(arg__6538__auto___10240);
{
var G__10241 = cljs.core.next.call(null,seq__8178_10234__$1);
var G__10242 = null;
var G__10243 = 0;
var G__10244 = 0;
seq__8178_10224 = G__10241;
chunk__8179_10225 = G__10242;
count__8180_10226 = G__10243;
i__8181_10227 = G__10244;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.rt.apply(null,a__6537__auto__);
};
var rt = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return rt__delegate.call(this,args__6536__auto__);};
rt.cljs$lang$maxFixedArity = 0;
rt.cljs$lang$applyTo = (function (arglist__10245){
var args__6536__auto__ = cljs.core.seq(arglist__10245);
return rt__delegate(args__6536__auto__);
});
rt.cljs$core$IFn$_invoke$arity$variadic = rt__delegate;
return rt;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.ruby = (function() { 
var ruby__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__8186_10246 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__8187_10247 = null;var count__8188_10248 = 0;var i__8189_10249 = 0;while(true){
if((i__8189_10249 < count__8188_10248))
{var arg__6538__auto___10250 = cljs.core._nth.call(null,chunk__8187_10247,i__8189_10249);a__6537__auto__.push(arg__6538__auto___10250);
{
var G__10251 = seq__8186_10246;
var G__10252 = chunk__8187_10247;
var G__10253 = count__8188_10248;
var G__10254 = (i__8189_10249 + 1);
seq__8186_10246 = G__10251;
chunk__8187_10247 = G__10252;
count__8188_10248 = G__10253;
i__8189_10249 = G__10254;
continue;
}
} else
{var temp__4092__auto___10255 = cljs.core.seq.call(null,seq__8186_10246);if(temp__4092__auto___10255)
{var seq__8186_10256__$1 = temp__4092__auto___10255;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8186_10256__$1))
{var c__5632__auto___10257 = cljs.core.chunk_first.call(null,seq__8186_10256__$1);{
var G__10258 = cljs.core.chunk_rest.call(null,seq__8186_10256__$1);
var G__10259 = c__5632__auto___10257;
var G__10260 = cljs.core.count.call(null,c__5632__auto___10257);
var G__10261 = 0;
seq__8186_10246 = G__10258;
chunk__8187_10247 = G__10259;
count__8188_10248 = G__10260;
i__8189_10249 = G__10261;
continue;
}
} else
{var arg__6538__auto___10262 = cljs.core.first.call(null,seq__8186_10256__$1);a__6537__auto__.push(arg__6538__auto___10262);
{
var G__10263 = cljs.core.next.call(null,seq__8186_10256__$1);
var G__10264 = null;
var G__10265 = 0;
var G__10266 = 0;
seq__8186_10246 = G__10263;
chunk__8187_10247 = G__10264;
count__8188_10248 = G__10265;
i__8189_10249 = G__10266;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.ruby.apply(null,a__6537__auto__);
};
var ruby = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ruby__delegate.call(this,args__6536__auto__);};
ruby.cljs$lang$maxFixedArity = 0;
ruby.cljs$lang$applyTo = (function (arglist__10267){
var args__6536__auto__ = cljs.core.seq(arglist__10267);
return ruby__delegate(args__6536__auto__);
});
ruby.cljs$core$IFn$_invoke$arity$variadic = ruby__delegate;
return ruby;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.s = (function() { 
var s__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__8194_10268 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__8195_10269 = null;var count__8196_10270 = 0;var i__8197_10271 = 0;while(true){
if((i__8197_10271 < count__8196_10270))
{var arg__6538__auto___10272 = cljs.core._nth.call(null,chunk__8195_10269,i__8197_10271);a__6537__auto__.push(arg__6538__auto___10272);
{
var G__10273 = seq__8194_10268;
var G__10274 = chunk__8195_10269;
var G__10275 = count__8196_10270;
var G__10276 = (i__8197_10271 + 1);
seq__8194_10268 = G__10273;
chunk__8195_10269 = G__10274;
count__8196_10270 = G__10275;
i__8197_10271 = G__10276;
continue;
}
} else
{var temp__4092__auto___10277 = cljs.core.seq.call(null,seq__8194_10268);if(temp__4092__auto___10277)
{var seq__8194_10278__$1 = temp__4092__auto___10277;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8194_10278__$1))
{var c__5632__auto___10279 = cljs.core.chunk_first.call(null,seq__8194_10278__$1);{
var G__10280 = cljs.core.chunk_rest.call(null,seq__8194_10278__$1);
var G__10281 = c__5632__auto___10279;
var G__10282 = cljs.core.count.call(null,c__5632__auto___10279);
var G__10283 = 0;
seq__8194_10268 = G__10280;
chunk__8195_10269 = G__10281;
count__8196_10270 = G__10282;
i__8197_10271 = G__10283;
continue;
}
} else
{var arg__6538__auto___10284 = cljs.core.first.call(null,seq__8194_10278__$1);a__6537__auto__.push(arg__6538__auto___10284);
{
var G__10285 = cljs.core.next.call(null,seq__8194_10278__$1);
var G__10286 = null;
var G__10287 = 0;
var G__10288 = 0;
seq__8194_10268 = G__10285;
chunk__8195_10269 = G__10286;
count__8196_10270 = G__10287;
i__8197_10271 = G__10288;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.s.apply(null,a__6537__auto__);
};
var s = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return s__delegate.call(this,args__6536__auto__);};
s.cljs$lang$maxFixedArity = 0;
s.cljs$lang$applyTo = (function (arglist__10289){
var args__6536__auto__ = cljs.core.seq(arglist__10289);
return s__delegate(args__6536__auto__);
});
s.cljs$core$IFn$_invoke$arity$variadic = s__delegate;
return s;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.samp = (function() { 
var samp__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__8202_10290 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__8203_10291 = null;var count__8204_10292 = 0;var i__8205_10293 = 0;while(true){
if((i__8205_10293 < count__8204_10292))
{var arg__6538__auto___10294 = cljs.core._nth.call(null,chunk__8203_10291,i__8205_10293);a__6537__auto__.push(arg__6538__auto___10294);
{
var G__10295 = seq__8202_10290;
var G__10296 = chunk__8203_10291;
var G__10297 = count__8204_10292;
var G__10298 = (i__8205_10293 + 1);
seq__8202_10290 = G__10295;
chunk__8203_10291 = G__10296;
count__8204_10292 = G__10297;
i__8205_10293 = G__10298;
continue;
}
} else
{var temp__4092__auto___10299 = cljs.core.seq.call(null,seq__8202_10290);if(temp__4092__auto___10299)
{var seq__8202_10300__$1 = temp__4092__auto___10299;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8202_10300__$1))
{var c__5632__auto___10301 = cljs.core.chunk_first.call(null,seq__8202_10300__$1);{
var G__10302 = cljs.core.chunk_rest.call(null,seq__8202_10300__$1);
var G__10303 = c__5632__auto___10301;
var G__10304 = cljs.core.count.call(null,c__5632__auto___10301);
var G__10305 = 0;
seq__8202_10290 = G__10302;
chunk__8203_10291 = G__10303;
count__8204_10292 = G__10304;
i__8205_10293 = G__10305;
continue;
}
} else
{var arg__6538__auto___10306 = cljs.core.first.call(null,seq__8202_10300__$1);a__6537__auto__.push(arg__6538__auto___10306);
{
var G__10307 = cljs.core.next.call(null,seq__8202_10300__$1);
var G__10308 = null;
var G__10309 = 0;
var G__10310 = 0;
seq__8202_10290 = G__10307;
chunk__8203_10291 = G__10308;
count__8204_10292 = G__10309;
i__8205_10293 = G__10310;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.samp.apply(null,a__6537__auto__);
};
var samp = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return samp__delegate.call(this,args__6536__auto__);};
samp.cljs$lang$maxFixedArity = 0;
samp.cljs$lang$applyTo = (function (arglist__10311){
var args__6536__auto__ = cljs.core.seq(arglist__10311);
return samp__delegate(args__6536__auto__);
});
samp.cljs$core$IFn$_invoke$arity$variadic = samp__delegate;
return samp;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.script = (function() { 
var script__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__8210_10312 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__8211_10313 = null;var count__8212_10314 = 0;var i__8213_10315 = 0;while(true){
if((i__8213_10315 < count__8212_10314))
{var arg__6538__auto___10316 = cljs.core._nth.call(null,chunk__8211_10313,i__8213_10315);a__6537__auto__.push(arg__6538__auto___10316);
{
var G__10317 = seq__8210_10312;
var G__10318 = chunk__8211_10313;
var G__10319 = count__8212_10314;
var G__10320 = (i__8213_10315 + 1);
seq__8210_10312 = G__10317;
chunk__8211_10313 = G__10318;
count__8212_10314 = G__10319;
i__8213_10315 = G__10320;
continue;
}
} else
{var temp__4092__auto___10321 = cljs.core.seq.call(null,seq__8210_10312);if(temp__4092__auto___10321)
{var seq__8210_10322__$1 = temp__4092__auto___10321;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8210_10322__$1))
{var c__5632__auto___10323 = cljs.core.chunk_first.call(null,seq__8210_10322__$1);{
var G__10324 = cljs.core.chunk_rest.call(null,seq__8210_10322__$1);
var G__10325 = c__5632__auto___10323;
var G__10326 = cljs.core.count.call(null,c__5632__auto___10323);
var G__10327 = 0;
seq__8210_10312 = G__10324;
chunk__8211_10313 = G__10325;
count__8212_10314 = G__10326;
i__8213_10315 = G__10327;
continue;
}
} else
{var arg__6538__auto___10328 = cljs.core.first.call(null,seq__8210_10322__$1);a__6537__auto__.push(arg__6538__auto___10328);
{
var G__10329 = cljs.core.next.call(null,seq__8210_10322__$1);
var G__10330 = null;
var G__10331 = 0;
var G__10332 = 0;
seq__8210_10312 = G__10329;
chunk__8211_10313 = G__10330;
count__8212_10314 = G__10331;
i__8213_10315 = G__10332;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.script.apply(null,a__6537__auto__);
};
var script = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return script__delegate.call(this,args__6536__auto__);};
script.cljs$lang$maxFixedArity = 0;
script.cljs$lang$applyTo = (function (arglist__10333){
var args__6536__auto__ = cljs.core.seq(arglist__10333);
return script__delegate(args__6536__auto__);
});
script.cljs$core$IFn$_invoke$arity$variadic = script__delegate;
return script;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.section = (function() { 
var section__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__8218_10334 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__8219_10335 = null;var count__8220_10336 = 0;var i__8221_10337 = 0;while(true){
if((i__8221_10337 < count__8220_10336))
{var arg__6538__auto___10338 = cljs.core._nth.call(null,chunk__8219_10335,i__8221_10337);a__6537__auto__.push(arg__6538__auto___10338);
{
var G__10339 = seq__8218_10334;
var G__10340 = chunk__8219_10335;
var G__10341 = count__8220_10336;
var G__10342 = (i__8221_10337 + 1);
seq__8218_10334 = G__10339;
chunk__8219_10335 = G__10340;
count__8220_10336 = G__10341;
i__8221_10337 = G__10342;
continue;
}
} else
{var temp__4092__auto___10343 = cljs.core.seq.call(null,seq__8218_10334);if(temp__4092__auto___10343)
{var seq__8218_10344__$1 = temp__4092__auto___10343;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8218_10344__$1))
{var c__5632__auto___10345 = cljs.core.chunk_first.call(null,seq__8218_10344__$1);{
var G__10346 = cljs.core.chunk_rest.call(null,seq__8218_10344__$1);
var G__10347 = c__5632__auto___10345;
var G__10348 = cljs.core.count.call(null,c__5632__auto___10345);
var G__10349 = 0;
seq__8218_10334 = G__10346;
chunk__8219_10335 = G__10347;
count__8220_10336 = G__10348;
i__8221_10337 = G__10349;
continue;
}
} else
{var arg__6538__auto___10350 = cljs.core.first.call(null,seq__8218_10344__$1);a__6537__auto__.push(arg__6538__auto___10350);
{
var G__10351 = cljs.core.next.call(null,seq__8218_10344__$1);
var G__10352 = null;
var G__10353 = 0;
var G__10354 = 0;
seq__8218_10334 = G__10351;
chunk__8219_10335 = G__10352;
count__8220_10336 = G__10353;
i__8221_10337 = G__10354;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.section.apply(null,a__6537__auto__);
};
var section = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return section__delegate.call(this,args__6536__auto__);};
section.cljs$lang$maxFixedArity = 0;
section.cljs$lang$applyTo = (function (arglist__10355){
var args__6536__auto__ = cljs.core.seq(arglist__10355);
return section__delegate(args__6536__auto__);
});
section.cljs$core$IFn$_invoke$arity$variadic = section__delegate;
return section;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.select = (function() { 
var select__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__8226_10356 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__8227_10357 = null;var count__8228_10358 = 0;var i__8229_10359 = 0;while(true){
if((i__8229_10359 < count__8228_10358))
{var arg__6538__auto___10360 = cljs.core._nth.call(null,chunk__8227_10357,i__8229_10359);a__6537__auto__.push(arg__6538__auto___10360);
{
var G__10361 = seq__8226_10356;
var G__10362 = chunk__8227_10357;
var G__10363 = count__8228_10358;
var G__10364 = (i__8229_10359 + 1);
seq__8226_10356 = G__10361;
chunk__8227_10357 = G__10362;
count__8228_10358 = G__10363;
i__8229_10359 = G__10364;
continue;
}
} else
{var temp__4092__auto___10365 = cljs.core.seq.call(null,seq__8226_10356);if(temp__4092__auto___10365)
{var seq__8226_10366__$1 = temp__4092__auto___10365;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8226_10366__$1))
{var c__5632__auto___10367 = cljs.core.chunk_first.call(null,seq__8226_10366__$1);{
var G__10368 = cljs.core.chunk_rest.call(null,seq__8226_10366__$1);
var G__10369 = c__5632__auto___10367;
var G__10370 = cljs.core.count.call(null,c__5632__auto___10367);
var G__10371 = 0;
seq__8226_10356 = G__10368;
chunk__8227_10357 = G__10369;
count__8228_10358 = G__10370;
i__8229_10359 = G__10371;
continue;
}
} else
{var arg__6538__auto___10372 = cljs.core.first.call(null,seq__8226_10366__$1);a__6537__auto__.push(arg__6538__auto___10372);
{
var G__10373 = cljs.core.next.call(null,seq__8226_10366__$1);
var G__10374 = null;
var G__10375 = 0;
var G__10376 = 0;
seq__8226_10356 = G__10373;
chunk__8227_10357 = G__10374;
count__8228_10358 = G__10375;
i__8229_10359 = G__10376;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.select.apply(null,a__6537__auto__);
};
var select = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return select__delegate.call(this,args__6536__auto__);};
select.cljs$lang$maxFixedArity = 0;
select.cljs$lang$applyTo = (function (arglist__10377){
var args__6536__auto__ = cljs.core.seq(arglist__10377);
return select__delegate(args__6536__auto__);
});
select.cljs$core$IFn$_invoke$arity$variadic = select__delegate;
return select;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.small = (function() { 
var small__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__8234_10378 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__8235_10379 = null;var count__8236_10380 = 0;var i__8237_10381 = 0;while(true){
if((i__8237_10381 < count__8236_10380))
{var arg__6538__auto___10382 = cljs.core._nth.call(null,chunk__8235_10379,i__8237_10381);a__6537__auto__.push(arg__6538__auto___10382);
{
var G__10383 = seq__8234_10378;
var G__10384 = chunk__8235_10379;
var G__10385 = count__8236_10380;
var G__10386 = (i__8237_10381 + 1);
seq__8234_10378 = G__10383;
chunk__8235_10379 = G__10384;
count__8236_10380 = G__10385;
i__8237_10381 = G__10386;
continue;
}
} else
{var temp__4092__auto___10387 = cljs.core.seq.call(null,seq__8234_10378);if(temp__4092__auto___10387)
{var seq__8234_10388__$1 = temp__4092__auto___10387;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8234_10388__$1))
{var c__5632__auto___10389 = cljs.core.chunk_first.call(null,seq__8234_10388__$1);{
var G__10390 = cljs.core.chunk_rest.call(null,seq__8234_10388__$1);
var G__10391 = c__5632__auto___10389;
var G__10392 = cljs.core.count.call(null,c__5632__auto___10389);
var G__10393 = 0;
seq__8234_10378 = G__10390;
chunk__8235_10379 = G__10391;
count__8236_10380 = G__10392;
i__8237_10381 = G__10393;
continue;
}
} else
{var arg__6538__auto___10394 = cljs.core.first.call(null,seq__8234_10388__$1);a__6537__auto__.push(arg__6538__auto___10394);
{
var G__10395 = cljs.core.next.call(null,seq__8234_10388__$1);
var G__10396 = null;
var G__10397 = 0;
var G__10398 = 0;
seq__8234_10378 = G__10395;
chunk__8235_10379 = G__10396;
count__8236_10380 = G__10397;
i__8237_10381 = G__10398;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.small.apply(null,a__6537__auto__);
};
var small = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return small__delegate.call(this,args__6536__auto__);};
small.cljs$lang$maxFixedArity = 0;
small.cljs$lang$applyTo = (function (arglist__10399){
var args__6536__auto__ = cljs.core.seq(arglist__10399);
return small__delegate(args__6536__auto__);
});
small.cljs$core$IFn$_invoke$arity$variadic = small__delegate;
return small;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.source = (function() { 
var source__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__8242_10400 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__8243_10401 = null;var count__8244_10402 = 0;var i__8245_10403 = 0;while(true){
if((i__8245_10403 < count__8244_10402))
{var arg__6538__auto___10404 = cljs.core._nth.call(null,chunk__8243_10401,i__8245_10403);a__6537__auto__.push(arg__6538__auto___10404);
{
var G__10405 = seq__8242_10400;
var G__10406 = chunk__8243_10401;
var G__10407 = count__8244_10402;
var G__10408 = (i__8245_10403 + 1);
seq__8242_10400 = G__10405;
chunk__8243_10401 = G__10406;
count__8244_10402 = G__10407;
i__8245_10403 = G__10408;
continue;
}
} else
{var temp__4092__auto___10409 = cljs.core.seq.call(null,seq__8242_10400);if(temp__4092__auto___10409)
{var seq__8242_10410__$1 = temp__4092__auto___10409;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8242_10410__$1))
{var c__5632__auto___10411 = cljs.core.chunk_first.call(null,seq__8242_10410__$1);{
var G__10412 = cljs.core.chunk_rest.call(null,seq__8242_10410__$1);
var G__10413 = c__5632__auto___10411;
var G__10414 = cljs.core.count.call(null,c__5632__auto___10411);
var G__10415 = 0;
seq__8242_10400 = G__10412;
chunk__8243_10401 = G__10413;
count__8244_10402 = G__10414;
i__8245_10403 = G__10415;
continue;
}
} else
{var arg__6538__auto___10416 = cljs.core.first.call(null,seq__8242_10410__$1);a__6537__auto__.push(arg__6538__auto___10416);
{
var G__10417 = cljs.core.next.call(null,seq__8242_10410__$1);
var G__10418 = null;
var G__10419 = 0;
var G__10420 = 0;
seq__8242_10400 = G__10417;
chunk__8243_10401 = G__10418;
count__8244_10402 = G__10419;
i__8245_10403 = G__10420;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.source.apply(null,a__6537__auto__);
};
var source = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return source__delegate.call(this,args__6536__auto__);};
source.cljs$lang$maxFixedArity = 0;
source.cljs$lang$applyTo = (function (arglist__10421){
var args__6536__auto__ = cljs.core.seq(arglist__10421);
return source__delegate(args__6536__auto__);
});
source.cljs$core$IFn$_invoke$arity$variadic = source__delegate;
return source;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.span = (function() { 
var span__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__8250_10422 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__8251_10423 = null;var count__8252_10424 = 0;var i__8253_10425 = 0;while(true){
if((i__8253_10425 < count__8252_10424))
{var arg__6538__auto___10426 = cljs.core._nth.call(null,chunk__8251_10423,i__8253_10425);a__6537__auto__.push(arg__6538__auto___10426);
{
var G__10427 = seq__8250_10422;
var G__10428 = chunk__8251_10423;
var G__10429 = count__8252_10424;
var G__10430 = (i__8253_10425 + 1);
seq__8250_10422 = G__10427;
chunk__8251_10423 = G__10428;
count__8252_10424 = G__10429;
i__8253_10425 = G__10430;
continue;
}
} else
{var temp__4092__auto___10431 = cljs.core.seq.call(null,seq__8250_10422);if(temp__4092__auto___10431)
{var seq__8250_10432__$1 = temp__4092__auto___10431;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8250_10432__$1))
{var c__5632__auto___10433 = cljs.core.chunk_first.call(null,seq__8250_10432__$1);{
var G__10434 = cljs.core.chunk_rest.call(null,seq__8250_10432__$1);
var G__10435 = c__5632__auto___10433;
var G__10436 = cljs.core.count.call(null,c__5632__auto___10433);
var G__10437 = 0;
seq__8250_10422 = G__10434;
chunk__8251_10423 = G__10435;
count__8252_10424 = G__10436;
i__8253_10425 = G__10437;
continue;
}
} else
{var arg__6538__auto___10438 = cljs.core.first.call(null,seq__8250_10432__$1);a__6537__auto__.push(arg__6538__auto___10438);
{
var G__10439 = cljs.core.next.call(null,seq__8250_10432__$1);
var G__10440 = null;
var G__10441 = 0;
var G__10442 = 0;
seq__8250_10422 = G__10439;
chunk__8251_10423 = G__10440;
count__8252_10424 = G__10441;
i__8253_10425 = G__10442;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.span.apply(null,a__6537__auto__);
};
var span = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return span__delegate.call(this,args__6536__auto__);};
span.cljs$lang$maxFixedArity = 0;
span.cljs$lang$applyTo = (function (arglist__10443){
var args__6536__auto__ = cljs.core.seq(arglist__10443);
return span__delegate(args__6536__auto__);
});
span.cljs$core$IFn$_invoke$arity$variadic = span__delegate;
return span;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.strong = (function() { 
var strong__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__8258_10444 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__8259_10445 = null;var count__8260_10446 = 0;var i__8261_10447 = 0;while(true){
if((i__8261_10447 < count__8260_10446))
{var arg__6538__auto___10448 = cljs.core._nth.call(null,chunk__8259_10445,i__8261_10447);a__6537__auto__.push(arg__6538__auto___10448);
{
var G__10449 = seq__8258_10444;
var G__10450 = chunk__8259_10445;
var G__10451 = count__8260_10446;
var G__10452 = (i__8261_10447 + 1);
seq__8258_10444 = G__10449;
chunk__8259_10445 = G__10450;
count__8260_10446 = G__10451;
i__8261_10447 = G__10452;
continue;
}
} else
{var temp__4092__auto___10453 = cljs.core.seq.call(null,seq__8258_10444);if(temp__4092__auto___10453)
{var seq__8258_10454__$1 = temp__4092__auto___10453;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8258_10454__$1))
{var c__5632__auto___10455 = cljs.core.chunk_first.call(null,seq__8258_10454__$1);{
var G__10456 = cljs.core.chunk_rest.call(null,seq__8258_10454__$1);
var G__10457 = c__5632__auto___10455;
var G__10458 = cljs.core.count.call(null,c__5632__auto___10455);
var G__10459 = 0;
seq__8258_10444 = G__10456;
chunk__8259_10445 = G__10457;
count__8260_10446 = G__10458;
i__8261_10447 = G__10459;
continue;
}
} else
{var arg__6538__auto___10460 = cljs.core.first.call(null,seq__8258_10454__$1);a__6537__auto__.push(arg__6538__auto___10460);
{
var G__10461 = cljs.core.next.call(null,seq__8258_10454__$1);
var G__10462 = null;
var G__10463 = 0;
var G__10464 = 0;
seq__8258_10444 = G__10461;
chunk__8259_10445 = G__10462;
count__8260_10446 = G__10463;
i__8261_10447 = G__10464;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.strong.apply(null,a__6537__auto__);
};
var strong = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return strong__delegate.call(this,args__6536__auto__);};
strong.cljs$lang$maxFixedArity = 0;
strong.cljs$lang$applyTo = (function (arglist__10465){
var args__6536__auto__ = cljs.core.seq(arglist__10465);
return strong__delegate(args__6536__auto__);
});
strong.cljs$core$IFn$_invoke$arity$variadic = strong__delegate;
return strong;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.style = (function() { 
var style__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__8266_10466 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__8267_10467 = null;var count__8268_10468 = 0;var i__8269_10469 = 0;while(true){
if((i__8269_10469 < count__8268_10468))
{var arg__6538__auto___10470 = cljs.core._nth.call(null,chunk__8267_10467,i__8269_10469);a__6537__auto__.push(arg__6538__auto___10470);
{
var G__10471 = seq__8266_10466;
var G__10472 = chunk__8267_10467;
var G__10473 = count__8268_10468;
var G__10474 = (i__8269_10469 + 1);
seq__8266_10466 = G__10471;
chunk__8267_10467 = G__10472;
count__8268_10468 = G__10473;
i__8269_10469 = G__10474;
continue;
}
} else
{var temp__4092__auto___10475 = cljs.core.seq.call(null,seq__8266_10466);if(temp__4092__auto___10475)
{var seq__8266_10476__$1 = temp__4092__auto___10475;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8266_10476__$1))
{var c__5632__auto___10477 = cljs.core.chunk_first.call(null,seq__8266_10476__$1);{
var G__10478 = cljs.core.chunk_rest.call(null,seq__8266_10476__$1);
var G__10479 = c__5632__auto___10477;
var G__10480 = cljs.core.count.call(null,c__5632__auto___10477);
var G__10481 = 0;
seq__8266_10466 = G__10478;
chunk__8267_10467 = G__10479;
count__8268_10468 = G__10480;
i__8269_10469 = G__10481;
continue;
}
} else
{var arg__6538__auto___10482 = cljs.core.first.call(null,seq__8266_10476__$1);a__6537__auto__.push(arg__6538__auto___10482);
{
var G__10483 = cljs.core.next.call(null,seq__8266_10476__$1);
var G__10484 = null;
var G__10485 = 0;
var G__10486 = 0;
seq__8266_10466 = G__10483;
chunk__8267_10467 = G__10484;
count__8268_10468 = G__10485;
i__8269_10469 = G__10486;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.style.apply(null,a__6537__auto__);
};
var style = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return style__delegate.call(this,args__6536__auto__);};
style.cljs$lang$maxFixedArity = 0;
style.cljs$lang$applyTo = (function (arglist__10487){
var args__6536__auto__ = cljs.core.seq(arglist__10487);
return style__delegate(args__6536__auto__);
});
style.cljs$core$IFn$_invoke$arity$variadic = style__delegate;
return style;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.sub = (function() { 
var sub__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__8274_10488 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__8275_10489 = null;var count__8276_10490 = 0;var i__8277_10491 = 0;while(true){
if((i__8277_10491 < count__8276_10490))
{var arg__6538__auto___10492 = cljs.core._nth.call(null,chunk__8275_10489,i__8277_10491);a__6537__auto__.push(arg__6538__auto___10492);
{
var G__10493 = seq__8274_10488;
var G__10494 = chunk__8275_10489;
var G__10495 = count__8276_10490;
var G__10496 = (i__8277_10491 + 1);
seq__8274_10488 = G__10493;
chunk__8275_10489 = G__10494;
count__8276_10490 = G__10495;
i__8277_10491 = G__10496;
continue;
}
} else
{var temp__4092__auto___10497 = cljs.core.seq.call(null,seq__8274_10488);if(temp__4092__auto___10497)
{var seq__8274_10498__$1 = temp__4092__auto___10497;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8274_10498__$1))
{var c__5632__auto___10499 = cljs.core.chunk_first.call(null,seq__8274_10498__$1);{
var G__10500 = cljs.core.chunk_rest.call(null,seq__8274_10498__$1);
var G__10501 = c__5632__auto___10499;
var G__10502 = cljs.core.count.call(null,c__5632__auto___10499);
var G__10503 = 0;
seq__8274_10488 = G__10500;
chunk__8275_10489 = G__10501;
count__8276_10490 = G__10502;
i__8277_10491 = G__10503;
continue;
}
} else
{var arg__6538__auto___10504 = cljs.core.first.call(null,seq__8274_10498__$1);a__6537__auto__.push(arg__6538__auto___10504);
{
var G__10505 = cljs.core.next.call(null,seq__8274_10498__$1);
var G__10506 = null;
var G__10507 = 0;
var G__10508 = 0;
seq__8274_10488 = G__10505;
chunk__8275_10489 = G__10506;
count__8276_10490 = G__10507;
i__8277_10491 = G__10508;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.sub.apply(null,a__6537__auto__);
};
var sub = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return sub__delegate.call(this,args__6536__auto__);};
sub.cljs$lang$maxFixedArity = 0;
sub.cljs$lang$applyTo = (function (arglist__10509){
var args__6536__auto__ = cljs.core.seq(arglist__10509);
return sub__delegate(args__6536__auto__);
});
sub.cljs$core$IFn$_invoke$arity$variadic = sub__delegate;
return sub;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.summary = (function() { 
var summary__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__8282_10510 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__8283_10511 = null;var count__8284_10512 = 0;var i__8285_10513 = 0;while(true){
if((i__8285_10513 < count__8284_10512))
{var arg__6538__auto___10514 = cljs.core._nth.call(null,chunk__8283_10511,i__8285_10513);a__6537__auto__.push(arg__6538__auto___10514);
{
var G__10515 = seq__8282_10510;
var G__10516 = chunk__8283_10511;
var G__10517 = count__8284_10512;
var G__10518 = (i__8285_10513 + 1);
seq__8282_10510 = G__10515;
chunk__8283_10511 = G__10516;
count__8284_10512 = G__10517;
i__8285_10513 = G__10518;
continue;
}
} else
{var temp__4092__auto___10519 = cljs.core.seq.call(null,seq__8282_10510);if(temp__4092__auto___10519)
{var seq__8282_10520__$1 = temp__4092__auto___10519;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8282_10520__$1))
{var c__5632__auto___10521 = cljs.core.chunk_first.call(null,seq__8282_10520__$1);{
var G__10522 = cljs.core.chunk_rest.call(null,seq__8282_10520__$1);
var G__10523 = c__5632__auto___10521;
var G__10524 = cljs.core.count.call(null,c__5632__auto___10521);
var G__10525 = 0;
seq__8282_10510 = G__10522;
chunk__8283_10511 = G__10523;
count__8284_10512 = G__10524;
i__8285_10513 = G__10525;
continue;
}
} else
{var arg__6538__auto___10526 = cljs.core.first.call(null,seq__8282_10520__$1);a__6537__auto__.push(arg__6538__auto___10526);
{
var G__10527 = cljs.core.next.call(null,seq__8282_10520__$1);
var G__10528 = null;
var G__10529 = 0;
var G__10530 = 0;
seq__8282_10510 = G__10527;
chunk__8283_10511 = G__10528;
count__8284_10512 = G__10529;
i__8285_10513 = G__10530;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.summary.apply(null,a__6537__auto__);
};
var summary = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return summary__delegate.call(this,args__6536__auto__);};
summary.cljs$lang$maxFixedArity = 0;
summary.cljs$lang$applyTo = (function (arglist__10531){
var args__6536__auto__ = cljs.core.seq(arglist__10531);
return summary__delegate(args__6536__auto__);
});
summary.cljs$core$IFn$_invoke$arity$variadic = summary__delegate;
return summary;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.sup = (function() { 
var sup__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__8290_10532 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__8291_10533 = null;var count__8292_10534 = 0;var i__8293_10535 = 0;while(true){
if((i__8293_10535 < count__8292_10534))
{var arg__6538__auto___10536 = cljs.core._nth.call(null,chunk__8291_10533,i__8293_10535);a__6537__auto__.push(arg__6538__auto___10536);
{
var G__10537 = seq__8290_10532;
var G__10538 = chunk__8291_10533;
var G__10539 = count__8292_10534;
var G__10540 = (i__8293_10535 + 1);
seq__8290_10532 = G__10537;
chunk__8291_10533 = G__10538;
count__8292_10534 = G__10539;
i__8293_10535 = G__10540;
continue;
}
} else
{var temp__4092__auto___10541 = cljs.core.seq.call(null,seq__8290_10532);if(temp__4092__auto___10541)
{var seq__8290_10542__$1 = temp__4092__auto___10541;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8290_10542__$1))
{var c__5632__auto___10543 = cljs.core.chunk_first.call(null,seq__8290_10542__$1);{
var G__10544 = cljs.core.chunk_rest.call(null,seq__8290_10542__$1);
var G__10545 = c__5632__auto___10543;
var G__10546 = cljs.core.count.call(null,c__5632__auto___10543);
var G__10547 = 0;
seq__8290_10532 = G__10544;
chunk__8291_10533 = G__10545;
count__8292_10534 = G__10546;
i__8293_10535 = G__10547;
continue;
}
} else
{var arg__6538__auto___10548 = cljs.core.first.call(null,seq__8290_10542__$1);a__6537__auto__.push(arg__6538__auto___10548);
{
var G__10549 = cljs.core.next.call(null,seq__8290_10542__$1);
var G__10550 = null;
var G__10551 = 0;
var G__10552 = 0;
seq__8290_10532 = G__10549;
chunk__8291_10533 = G__10550;
count__8292_10534 = G__10551;
i__8293_10535 = G__10552;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.sup.apply(null,a__6537__auto__);
};
var sup = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return sup__delegate.call(this,args__6536__auto__);};
sup.cljs$lang$maxFixedArity = 0;
sup.cljs$lang$applyTo = (function (arglist__10553){
var args__6536__auto__ = cljs.core.seq(arglist__10553);
return sup__delegate(args__6536__auto__);
});
sup.cljs$core$IFn$_invoke$arity$variadic = sup__delegate;
return sup;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.table = (function() { 
var table__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__8298_10554 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__8299_10555 = null;var count__8300_10556 = 0;var i__8301_10557 = 0;while(true){
if((i__8301_10557 < count__8300_10556))
{var arg__6538__auto___10558 = cljs.core._nth.call(null,chunk__8299_10555,i__8301_10557);a__6537__auto__.push(arg__6538__auto___10558);
{
var G__10559 = seq__8298_10554;
var G__10560 = chunk__8299_10555;
var G__10561 = count__8300_10556;
var G__10562 = (i__8301_10557 + 1);
seq__8298_10554 = G__10559;
chunk__8299_10555 = G__10560;
count__8300_10556 = G__10561;
i__8301_10557 = G__10562;
continue;
}
} else
{var temp__4092__auto___10563 = cljs.core.seq.call(null,seq__8298_10554);if(temp__4092__auto___10563)
{var seq__8298_10564__$1 = temp__4092__auto___10563;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8298_10564__$1))
{var c__5632__auto___10565 = cljs.core.chunk_first.call(null,seq__8298_10564__$1);{
var G__10566 = cljs.core.chunk_rest.call(null,seq__8298_10564__$1);
var G__10567 = c__5632__auto___10565;
var G__10568 = cljs.core.count.call(null,c__5632__auto___10565);
var G__10569 = 0;
seq__8298_10554 = G__10566;
chunk__8299_10555 = G__10567;
count__8300_10556 = G__10568;
i__8301_10557 = G__10569;
continue;
}
} else
{var arg__6538__auto___10570 = cljs.core.first.call(null,seq__8298_10564__$1);a__6537__auto__.push(arg__6538__auto___10570);
{
var G__10571 = cljs.core.next.call(null,seq__8298_10564__$1);
var G__10572 = null;
var G__10573 = 0;
var G__10574 = 0;
seq__8298_10554 = G__10571;
chunk__8299_10555 = G__10572;
count__8300_10556 = G__10573;
i__8301_10557 = G__10574;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.table.apply(null,a__6537__auto__);
};
var table = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return table__delegate.call(this,args__6536__auto__);};
table.cljs$lang$maxFixedArity = 0;
table.cljs$lang$applyTo = (function (arglist__10575){
var args__6536__auto__ = cljs.core.seq(arglist__10575);
return table__delegate(args__6536__auto__);
});
table.cljs$core$IFn$_invoke$arity$variadic = table__delegate;
return table;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.tbody = (function() { 
var tbody__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__8306_10576 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__8307_10577 = null;var count__8308_10578 = 0;var i__8309_10579 = 0;while(true){
if((i__8309_10579 < count__8308_10578))
{var arg__6538__auto___10580 = cljs.core._nth.call(null,chunk__8307_10577,i__8309_10579);a__6537__auto__.push(arg__6538__auto___10580);
{
var G__10581 = seq__8306_10576;
var G__10582 = chunk__8307_10577;
var G__10583 = count__8308_10578;
var G__10584 = (i__8309_10579 + 1);
seq__8306_10576 = G__10581;
chunk__8307_10577 = G__10582;
count__8308_10578 = G__10583;
i__8309_10579 = G__10584;
continue;
}
} else
{var temp__4092__auto___10585 = cljs.core.seq.call(null,seq__8306_10576);if(temp__4092__auto___10585)
{var seq__8306_10586__$1 = temp__4092__auto___10585;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8306_10586__$1))
{var c__5632__auto___10587 = cljs.core.chunk_first.call(null,seq__8306_10586__$1);{
var G__10588 = cljs.core.chunk_rest.call(null,seq__8306_10586__$1);
var G__10589 = c__5632__auto___10587;
var G__10590 = cljs.core.count.call(null,c__5632__auto___10587);
var G__10591 = 0;
seq__8306_10576 = G__10588;
chunk__8307_10577 = G__10589;
count__8308_10578 = G__10590;
i__8309_10579 = G__10591;
continue;
}
} else
{var arg__6538__auto___10592 = cljs.core.first.call(null,seq__8306_10586__$1);a__6537__auto__.push(arg__6538__auto___10592);
{
var G__10593 = cljs.core.next.call(null,seq__8306_10586__$1);
var G__10594 = null;
var G__10595 = 0;
var G__10596 = 0;
seq__8306_10576 = G__10593;
chunk__8307_10577 = G__10594;
count__8308_10578 = G__10595;
i__8309_10579 = G__10596;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.tbody.apply(null,a__6537__auto__);
};
var tbody = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return tbody__delegate.call(this,args__6536__auto__);};
tbody.cljs$lang$maxFixedArity = 0;
tbody.cljs$lang$applyTo = (function (arglist__10597){
var args__6536__auto__ = cljs.core.seq(arglist__10597);
return tbody__delegate(args__6536__auto__);
});
tbody.cljs$core$IFn$_invoke$arity$variadic = tbody__delegate;
return tbody;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.td = (function() { 
var td__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__8314_10598 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__8315_10599 = null;var count__8316_10600 = 0;var i__8317_10601 = 0;while(true){
if((i__8317_10601 < count__8316_10600))
{var arg__6538__auto___10602 = cljs.core._nth.call(null,chunk__8315_10599,i__8317_10601);a__6537__auto__.push(arg__6538__auto___10602);
{
var G__10603 = seq__8314_10598;
var G__10604 = chunk__8315_10599;
var G__10605 = count__8316_10600;
var G__10606 = (i__8317_10601 + 1);
seq__8314_10598 = G__10603;
chunk__8315_10599 = G__10604;
count__8316_10600 = G__10605;
i__8317_10601 = G__10606;
continue;
}
} else
{var temp__4092__auto___10607 = cljs.core.seq.call(null,seq__8314_10598);if(temp__4092__auto___10607)
{var seq__8314_10608__$1 = temp__4092__auto___10607;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8314_10608__$1))
{var c__5632__auto___10609 = cljs.core.chunk_first.call(null,seq__8314_10608__$1);{
var G__10610 = cljs.core.chunk_rest.call(null,seq__8314_10608__$1);
var G__10611 = c__5632__auto___10609;
var G__10612 = cljs.core.count.call(null,c__5632__auto___10609);
var G__10613 = 0;
seq__8314_10598 = G__10610;
chunk__8315_10599 = G__10611;
count__8316_10600 = G__10612;
i__8317_10601 = G__10613;
continue;
}
} else
{var arg__6538__auto___10614 = cljs.core.first.call(null,seq__8314_10608__$1);a__6537__auto__.push(arg__6538__auto___10614);
{
var G__10615 = cljs.core.next.call(null,seq__8314_10608__$1);
var G__10616 = null;
var G__10617 = 0;
var G__10618 = 0;
seq__8314_10598 = G__10615;
chunk__8315_10599 = G__10616;
count__8316_10600 = G__10617;
i__8317_10601 = G__10618;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.td.apply(null,a__6537__auto__);
};
var td = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return td__delegate.call(this,args__6536__auto__);};
td.cljs$lang$maxFixedArity = 0;
td.cljs$lang$applyTo = (function (arglist__10619){
var args__6536__auto__ = cljs.core.seq(arglist__10619);
return td__delegate(args__6536__auto__);
});
td.cljs$core$IFn$_invoke$arity$variadic = td__delegate;
return td;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.textarea = (function() { 
var textarea__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__8322_10620 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__8323_10621 = null;var count__8324_10622 = 0;var i__8325_10623 = 0;while(true){
if((i__8325_10623 < count__8324_10622))
{var arg__6538__auto___10624 = cljs.core._nth.call(null,chunk__8323_10621,i__8325_10623);a__6537__auto__.push(arg__6538__auto___10624);
{
var G__10625 = seq__8322_10620;
var G__10626 = chunk__8323_10621;
var G__10627 = count__8324_10622;
var G__10628 = (i__8325_10623 + 1);
seq__8322_10620 = G__10625;
chunk__8323_10621 = G__10626;
count__8324_10622 = G__10627;
i__8325_10623 = G__10628;
continue;
}
} else
{var temp__4092__auto___10629 = cljs.core.seq.call(null,seq__8322_10620);if(temp__4092__auto___10629)
{var seq__8322_10630__$1 = temp__4092__auto___10629;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8322_10630__$1))
{var c__5632__auto___10631 = cljs.core.chunk_first.call(null,seq__8322_10630__$1);{
var G__10632 = cljs.core.chunk_rest.call(null,seq__8322_10630__$1);
var G__10633 = c__5632__auto___10631;
var G__10634 = cljs.core.count.call(null,c__5632__auto___10631);
var G__10635 = 0;
seq__8322_10620 = G__10632;
chunk__8323_10621 = G__10633;
count__8324_10622 = G__10634;
i__8325_10623 = G__10635;
continue;
}
} else
{var arg__6538__auto___10636 = cljs.core.first.call(null,seq__8322_10630__$1);a__6537__auto__.push(arg__6538__auto___10636);
{
var G__10637 = cljs.core.next.call(null,seq__8322_10630__$1);
var G__10638 = null;
var G__10639 = 0;
var G__10640 = 0;
seq__8322_10620 = G__10637;
chunk__8323_10621 = G__10638;
count__8324_10622 = G__10639;
i__8325_10623 = G__10640;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.textarea.apply(null,a__6537__auto__);
};
var textarea = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return textarea__delegate.call(this,args__6536__auto__);};
textarea.cljs$lang$maxFixedArity = 0;
textarea.cljs$lang$applyTo = (function (arglist__10641){
var args__6536__auto__ = cljs.core.seq(arglist__10641);
return textarea__delegate(args__6536__auto__);
});
textarea.cljs$core$IFn$_invoke$arity$variadic = textarea__delegate;
return textarea;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.tfoot = (function() { 
var tfoot__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__8330_10642 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__8331_10643 = null;var count__8332_10644 = 0;var i__8333_10645 = 0;while(true){
if((i__8333_10645 < count__8332_10644))
{var arg__6538__auto___10646 = cljs.core._nth.call(null,chunk__8331_10643,i__8333_10645);a__6537__auto__.push(arg__6538__auto___10646);
{
var G__10647 = seq__8330_10642;
var G__10648 = chunk__8331_10643;
var G__10649 = count__8332_10644;
var G__10650 = (i__8333_10645 + 1);
seq__8330_10642 = G__10647;
chunk__8331_10643 = G__10648;
count__8332_10644 = G__10649;
i__8333_10645 = G__10650;
continue;
}
} else
{var temp__4092__auto___10651 = cljs.core.seq.call(null,seq__8330_10642);if(temp__4092__auto___10651)
{var seq__8330_10652__$1 = temp__4092__auto___10651;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8330_10652__$1))
{var c__5632__auto___10653 = cljs.core.chunk_first.call(null,seq__8330_10652__$1);{
var G__10654 = cljs.core.chunk_rest.call(null,seq__8330_10652__$1);
var G__10655 = c__5632__auto___10653;
var G__10656 = cljs.core.count.call(null,c__5632__auto___10653);
var G__10657 = 0;
seq__8330_10642 = G__10654;
chunk__8331_10643 = G__10655;
count__8332_10644 = G__10656;
i__8333_10645 = G__10657;
continue;
}
} else
{var arg__6538__auto___10658 = cljs.core.first.call(null,seq__8330_10652__$1);a__6537__auto__.push(arg__6538__auto___10658);
{
var G__10659 = cljs.core.next.call(null,seq__8330_10652__$1);
var G__10660 = null;
var G__10661 = 0;
var G__10662 = 0;
seq__8330_10642 = G__10659;
chunk__8331_10643 = G__10660;
count__8332_10644 = G__10661;
i__8333_10645 = G__10662;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.tfoot.apply(null,a__6537__auto__);
};
var tfoot = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return tfoot__delegate.call(this,args__6536__auto__);};
tfoot.cljs$lang$maxFixedArity = 0;
tfoot.cljs$lang$applyTo = (function (arglist__10663){
var args__6536__auto__ = cljs.core.seq(arglist__10663);
return tfoot__delegate(args__6536__auto__);
});
tfoot.cljs$core$IFn$_invoke$arity$variadic = tfoot__delegate;
return tfoot;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.th = (function() { 
var th__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__8338_10664 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__8339_10665 = null;var count__8340_10666 = 0;var i__8341_10667 = 0;while(true){
if((i__8341_10667 < count__8340_10666))
{var arg__6538__auto___10668 = cljs.core._nth.call(null,chunk__8339_10665,i__8341_10667);a__6537__auto__.push(arg__6538__auto___10668);
{
var G__10669 = seq__8338_10664;
var G__10670 = chunk__8339_10665;
var G__10671 = count__8340_10666;
var G__10672 = (i__8341_10667 + 1);
seq__8338_10664 = G__10669;
chunk__8339_10665 = G__10670;
count__8340_10666 = G__10671;
i__8341_10667 = G__10672;
continue;
}
} else
{var temp__4092__auto___10673 = cljs.core.seq.call(null,seq__8338_10664);if(temp__4092__auto___10673)
{var seq__8338_10674__$1 = temp__4092__auto___10673;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8338_10674__$1))
{var c__5632__auto___10675 = cljs.core.chunk_first.call(null,seq__8338_10674__$1);{
var G__10676 = cljs.core.chunk_rest.call(null,seq__8338_10674__$1);
var G__10677 = c__5632__auto___10675;
var G__10678 = cljs.core.count.call(null,c__5632__auto___10675);
var G__10679 = 0;
seq__8338_10664 = G__10676;
chunk__8339_10665 = G__10677;
count__8340_10666 = G__10678;
i__8341_10667 = G__10679;
continue;
}
} else
{var arg__6538__auto___10680 = cljs.core.first.call(null,seq__8338_10674__$1);a__6537__auto__.push(arg__6538__auto___10680);
{
var G__10681 = cljs.core.next.call(null,seq__8338_10674__$1);
var G__10682 = null;
var G__10683 = 0;
var G__10684 = 0;
seq__8338_10664 = G__10681;
chunk__8339_10665 = G__10682;
count__8340_10666 = G__10683;
i__8341_10667 = G__10684;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.th.apply(null,a__6537__auto__);
};
var th = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return th__delegate.call(this,args__6536__auto__);};
th.cljs$lang$maxFixedArity = 0;
th.cljs$lang$applyTo = (function (arglist__10685){
var args__6536__auto__ = cljs.core.seq(arglist__10685);
return th__delegate(args__6536__auto__);
});
th.cljs$core$IFn$_invoke$arity$variadic = th__delegate;
return th;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.thead = (function() { 
var thead__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__8346_10686 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__8347_10687 = null;var count__8348_10688 = 0;var i__8349_10689 = 0;while(true){
if((i__8349_10689 < count__8348_10688))
{var arg__6538__auto___10690 = cljs.core._nth.call(null,chunk__8347_10687,i__8349_10689);a__6537__auto__.push(arg__6538__auto___10690);
{
var G__10691 = seq__8346_10686;
var G__10692 = chunk__8347_10687;
var G__10693 = count__8348_10688;
var G__10694 = (i__8349_10689 + 1);
seq__8346_10686 = G__10691;
chunk__8347_10687 = G__10692;
count__8348_10688 = G__10693;
i__8349_10689 = G__10694;
continue;
}
} else
{var temp__4092__auto___10695 = cljs.core.seq.call(null,seq__8346_10686);if(temp__4092__auto___10695)
{var seq__8346_10696__$1 = temp__4092__auto___10695;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8346_10696__$1))
{var c__5632__auto___10697 = cljs.core.chunk_first.call(null,seq__8346_10696__$1);{
var G__10698 = cljs.core.chunk_rest.call(null,seq__8346_10696__$1);
var G__10699 = c__5632__auto___10697;
var G__10700 = cljs.core.count.call(null,c__5632__auto___10697);
var G__10701 = 0;
seq__8346_10686 = G__10698;
chunk__8347_10687 = G__10699;
count__8348_10688 = G__10700;
i__8349_10689 = G__10701;
continue;
}
} else
{var arg__6538__auto___10702 = cljs.core.first.call(null,seq__8346_10696__$1);a__6537__auto__.push(arg__6538__auto___10702);
{
var G__10703 = cljs.core.next.call(null,seq__8346_10696__$1);
var G__10704 = null;
var G__10705 = 0;
var G__10706 = 0;
seq__8346_10686 = G__10703;
chunk__8347_10687 = G__10704;
count__8348_10688 = G__10705;
i__8349_10689 = G__10706;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.thead.apply(null,a__6537__auto__);
};
var thead = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return thead__delegate.call(this,args__6536__auto__);};
thead.cljs$lang$maxFixedArity = 0;
thead.cljs$lang$applyTo = (function (arglist__10707){
var args__6536__auto__ = cljs.core.seq(arglist__10707);
return thead__delegate(args__6536__auto__);
});
thead.cljs$core$IFn$_invoke$arity$variadic = thead__delegate;
return thead;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.time = (function() { 
var time__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__8354_10708 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__8355_10709 = null;var count__8356_10710 = 0;var i__8357_10711 = 0;while(true){
if((i__8357_10711 < count__8356_10710))
{var arg__6538__auto___10712 = cljs.core._nth.call(null,chunk__8355_10709,i__8357_10711);a__6537__auto__.push(arg__6538__auto___10712);
{
var G__10713 = seq__8354_10708;
var G__10714 = chunk__8355_10709;
var G__10715 = count__8356_10710;
var G__10716 = (i__8357_10711 + 1);
seq__8354_10708 = G__10713;
chunk__8355_10709 = G__10714;
count__8356_10710 = G__10715;
i__8357_10711 = G__10716;
continue;
}
} else
{var temp__4092__auto___10717 = cljs.core.seq.call(null,seq__8354_10708);if(temp__4092__auto___10717)
{var seq__8354_10718__$1 = temp__4092__auto___10717;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8354_10718__$1))
{var c__5632__auto___10719 = cljs.core.chunk_first.call(null,seq__8354_10718__$1);{
var G__10720 = cljs.core.chunk_rest.call(null,seq__8354_10718__$1);
var G__10721 = c__5632__auto___10719;
var G__10722 = cljs.core.count.call(null,c__5632__auto___10719);
var G__10723 = 0;
seq__8354_10708 = G__10720;
chunk__8355_10709 = G__10721;
count__8356_10710 = G__10722;
i__8357_10711 = G__10723;
continue;
}
} else
{var arg__6538__auto___10724 = cljs.core.first.call(null,seq__8354_10718__$1);a__6537__auto__.push(arg__6538__auto___10724);
{
var G__10725 = cljs.core.next.call(null,seq__8354_10718__$1);
var G__10726 = null;
var G__10727 = 0;
var G__10728 = 0;
seq__8354_10708 = G__10725;
chunk__8355_10709 = G__10726;
count__8356_10710 = G__10727;
i__8357_10711 = G__10728;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.time.apply(null,a__6537__auto__);
};
var time = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return time__delegate.call(this,args__6536__auto__);};
time.cljs$lang$maxFixedArity = 0;
time.cljs$lang$applyTo = (function (arglist__10729){
var args__6536__auto__ = cljs.core.seq(arglist__10729);
return time__delegate(args__6536__auto__);
});
time.cljs$core$IFn$_invoke$arity$variadic = time__delegate;
return time;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.title = (function() { 
var title__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__8362_10730 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__8363_10731 = null;var count__8364_10732 = 0;var i__8365_10733 = 0;while(true){
if((i__8365_10733 < count__8364_10732))
{var arg__6538__auto___10734 = cljs.core._nth.call(null,chunk__8363_10731,i__8365_10733);a__6537__auto__.push(arg__6538__auto___10734);
{
var G__10735 = seq__8362_10730;
var G__10736 = chunk__8363_10731;
var G__10737 = count__8364_10732;
var G__10738 = (i__8365_10733 + 1);
seq__8362_10730 = G__10735;
chunk__8363_10731 = G__10736;
count__8364_10732 = G__10737;
i__8365_10733 = G__10738;
continue;
}
} else
{var temp__4092__auto___10739 = cljs.core.seq.call(null,seq__8362_10730);if(temp__4092__auto___10739)
{var seq__8362_10740__$1 = temp__4092__auto___10739;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8362_10740__$1))
{var c__5632__auto___10741 = cljs.core.chunk_first.call(null,seq__8362_10740__$1);{
var G__10742 = cljs.core.chunk_rest.call(null,seq__8362_10740__$1);
var G__10743 = c__5632__auto___10741;
var G__10744 = cljs.core.count.call(null,c__5632__auto___10741);
var G__10745 = 0;
seq__8362_10730 = G__10742;
chunk__8363_10731 = G__10743;
count__8364_10732 = G__10744;
i__8365_10733 = G__10745;
continue;
}
} else
{var arg__6538__auto___10746 = cljs.core.first.call(null,seq__8362_10740__$1);a__6537__auto__.push(arg__6538__auto___10746);
{
var G__10747 = cljs.core.next.call(null,seq__8362_10740__$1);
var G__10748 = null;
var G__10749 = 0;
var G__10750 = 0;
seq__8362_10730 = G__10747;
chunk__8363_10731 = G__10748;
count__8364_10732 = G__10749;
i__8365_10733 = G__10750;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.title.apply(null,a__6537__auto__);
};
var title = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return title__delegate.call(this,args__6536__auto__);};
title.cljs$lang$maxFixedArity = 0;
title.cljs$lang$applyTo = (function (arglist__10751){
var args__6536__auto__ = cljs.core.seq(arglist__10751);
return title__delegate(args__6536__auto__);
});
title.cljs$core$IFn$_invoke$arity$variadic = title__delegate;
return title;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.tr = (function() { 
var tr__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__8370_10752 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__8371_10753 = null;var count__8372_10754 = 0;var i__8373_10755 = 0;while(true){
if((i__8373_10755 < count__8372_10754))
{var arg__6538__auto___10756 = cljs.core._nth.call(null,chunk__8371_10753,i__8373_10755);a__6537__auto__.push(arg__6538__auto___10756);
{
var G__10757 = seq__8370_10752;
var G__10758 = chunk__8371_10753;
var G__10759 = count__8372_10754;
var G__10760 = (i__8373_10755 + 1);
seq__8370_10752 = G__10757;
chunk__8371_10753 = G__10758;
count__8372_10754 = G__10759;
i__8373_10755 = G__10760;
continue;
}
} else
{var temp__4092__auto___10761 = cljs.core.seq.call(null,seq__8370_10752);if(temp__4092__auto___10761)
{var seq__8370_10762__$1 = temp__4092__auto___10761;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8370_10762__$1))
{var c__5632__auto___10763 = cljs.core.chunk_first.call(null,seq__8370_10762__$1);{
var G__10764 = cljs.core.chunk_rest.call(null,seq__8370_10762__$1);
var G__10765 = c__5632__auto___10763;
var G__10766 = cljs.core.count.call(null,c__5632__auto___10763);
var G__10767 = 0;
seq__8370_10752 = G__10764;
chunk__8371_10753 = G__10765;
count__8372_10754 = G__10766;
i__8373_10755 = G__10767;
continue;
}
} else
{var arg__6538__auto___10768 = cljs.core.first.call(null,seq__8370_10762__$1);a__6537__auto__.push(arg__6538__auto___10768);
{
var G__10769 = cljs.core.next.call(null,seq__8370_10762__$1);
var G__10770 = null;
var G__10771 = 0;
var G__10772 = 0;
seq__8370_10752 = G__10769;
chunk__8371_10753 = G__10770;
count__8372_10754 = G__10771;
i__8373_10755 = G__10772;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.tr.apply(null,a__6537__auto__);
};
var tr = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return tr__delegate.call(this,args__6536__auto__);};
tr.cljs$lang$maxFixedArity = 0;
tr.cljs$lang$applyTo = (function (arglist__10773){
var args__6536__auto__ = cljs.core.seq(arglist__10773);
return tr__delegate(args__6536__auto__);
});
tr.cljs$core$IFn$_invoke$arity$variadic = tr__delegate;
return tr;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.track = (function() { 
var track__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__8378_10774 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__8379_10775 = null;var count__8380_10776 = 0;var i__8381_10777 = 0;while(true){
if((i__8381_10777 < count__8380_10776))
{var arg__6538__auto___10778 = cljs.core._nth.call(null,chunk__8379_10775,i__8381_10777);a__6537__auto__.push(arg__6538__auto___10778);
{
var G__10779 = seq__8378_10774;
var G__10780 = chunk__8379_10775;
var G__10781 = count__8380_10776;
var G__10782 = (i__8381_10777 + 1);
seq__8378_10774 = G__10779;
chunk__8379_10775 = G__10780;
count__8380_10776 = G__10781;
i__8381_10777 = G__10782;
continue;
}
} else
{var temp__4092__auto___10783 = cljs.core.seq.call(null,seq__8378_10774);if(temp__4092__auto___10783)
{var seq__8378_10784__$1 = temp__4092__auto___10783;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8378_10784__$1))
{var c__5632__auto___10785 = cljs.core.chunk_first.call(null,seq__8378_10784__$1);{
var G__10786 = cljs.core.chunk_rest.call(null,seq__8378_10784__$1);
var G__10787 = c__5632__auto___10785;
var G__10788 = cljs.core.count.call(null,c__5632__auto___10785);
var G__10789 = 0;
seq__8378_10774 = G__10786;
chunk__8379_10775 = G__10787;
count__8380_10776 = G__10788;
i__8381_10777 = G__10789;
continue;
}
} else
{var arg__6538__auto___10790 = cljs.core.first.call(null,seq__8378_10784__$1);a__6537__auto__.push(arg__6538__auto___10790);
{
var G__10791 = cljs.core.next.call(null,seq__8378_10784__$1);
var G__10792 = null;
var G__10793 = 0;
var G__10794 = 0;
seq__8378_10774 = G__10791;
chunk__8379_10775 = G__10792;
count__8380_10776 = G__10793;
i__8381_10777 = G__10794;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.track.apply(null,a__6537__auto__);
};
var track = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return track__delegate.call(this,args__6536__auto__);};
track.cljs$lang$maxFixedArity = 0;
track.cljs$lang$applyTo = (function (arglist__10795){
var args__6536__auto__ = cljs.core.seq(arglist__10795);
return track__delegate(args__6536__auto__);
});
track.cljs$core$IFn$_invoke$arity$variadic = track__delegate;
return track;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.u = (function() { 
var u__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__8386_10796 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__8387_10797 = null;var count__8388_10798 = 0;var i__8389_10799 = 0;while(true){
if((i__8389_10799 < count__8388_10798))
{var arg__6538__auto___10800 = cljs.core._nth.call(null,chunk__8387_10797,i__8389_10799);a__6537__auto__.push(arg__6538__auto___10800);
{
var G__10801 = seq__8386_10796;
var G__10802 = chunk__8387_10797;
var G__10803 = count__8388_10798;
var G__10804 = (i__8389_10799 + 1);
seq__8386_10796 = G__10801;
chunk__8387_10797 = G__10802;
count__8388_10798 = G__10803;
i__8389_10799 = G__10804;
continue;
}
} else
{var temp__4092__auto___10805 = cljs.core.seq.call(null,seq__8386_10796);if(temp__4092__auto___10805)
{var seq__8386_10806__$1 = temp__4092__auto___10805;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8386_10806__$1))
{var c__5632__auto___10807 = cljs.core.chunk_first.call(null,seq__8386_10806__$1);{
var G__10808 = cljs.core.chunk_rest.call(null,seq__8386_10806__$1);
var G__10809 = c__5632__auto___10807;
var G__10810 = cljs.core.count.call(null,c__5632__auto___10807);
var G__10811 = 0;
seq__8386_10796 = G__10808;
chunk__8387_10797 = G__10809;
count__8388_10798 = G__10810;
i__8389_10799 = G__10811;
continue;
}
} else
{var arg__6538__auto___10812 = cljs.core.first.call(null,seq__8386_10806__$1);a__6537__auto__.push(arg__6538__auto___10812);
{
var G__10813 = cljs.core.next.call(null,seq__8386_10806__$1);
var G__10814 = null;
var G__10815 = 0;
var G__10816 = 0;
seq__8386_10796 = G__10813;
chunk__8387_10797 = G__10814;
count__8388_10798 = G__10815;
i__8389_10799 = G__10816;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.u.apply(null,a__6537__auto__);
};
var u = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return u__delegate.call(this,args__6536__auto__);};
u.cljs$lang$maxFixedArity = 0;
u.cljs$lang$applyTo = (function (arglist__10817){
var args__6536__auto__ = cljs.core.seq(arglist__10817);
return u__delegate(args__6536__auto__);
});
u.cljs$core$IFn$_invoke$arity$variadic = u__delegate;
return u;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.ul = (function() { 
var ul__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__8394_10818 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__8395_10819 = null;var count__8396_10820 = 0;var i__8397_10821 = 0;while(true){
if((i__8397_10821 < count__8396_10820))
{var arg__6538__auto___10822 = cljs.core._nth.call(null,chunk__8395_10819,i__8397_10821);a__6537__auto__.push(arg__6538__auto___10822);
{
var G__10823 = seq__8394_10818;
var G__10824 = chunk__8395_10819;
var G__10825 = count__8396_10820;
var G__10826 = (i__8397_10821 + 1);
seq__8394_10818 = G__10823;
chunk__8395_10819 = G__10824;
count__8396_10820 = G__10825;
i__8397_10821 = G__10826;
continue;
}
} else
{var temp__4092__auto___10827 = cljs.core.seq.call(null,seq__8394_10818);if(temp__4092__auto___10827)
{var seq__8394_10828__$1 = temp__4092__auto___10827;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8394_10828__$1))
{var c__5632__auto___10829 = cljs.core.chunk_first.call(null,seq__8394_10828__$1);{
var G__10830 = cljs.core.chunk_rest.call(null,seq__8394_10828__$1);
var G__10831 = c__5632__auto___10829;
var G__10832 = cljs.core.count.call(null,c__5632__auto___10829);
var G__10833 = 0;
seq__8394_10818 = G__10830;
chunk__8395_10819 = G__10831;
count__8396_10820 = G__10832;
i__8397_10821 = G__10833;
continue;
}
} else
{var arg__6538__auto___10834 = cljs.core.first.call(null,seq__8394_10828__$1);a__6537__auto__.push(arg__6538__auto___10834);
{
var G__10835 = cljs.core.next.call(null,seq__8394_10828__$1);
var G__10836 = null;
var G__10837 = 0;
var G__10838 = 0;
seq__8394_10818 = G__10835;
chunk__8395_10819 = G__10836;
count__8396_10820 = G__10837;
i__8397_10821 = G__10838;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.ul.apply(null,a__6537__auto__);
};
var ul = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ul__delegate.call(this,args__6536__auto__);};
ul.cljs$lang$maxFixedArity = 0;
ul.cljs$lang$applyTo = (function (arglist__10839){
var args__6536__auto__ = cljs.core.seq(arglist__10839);
return ul__delegate(args__6536__auto__);
});
ul.cljs$core$IFn$_invoke$arity$variadic = ul__delegate;
return ul;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.var$ = (function() { 
var var$__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__8402_10840 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__8403_10841 = null;var count__8404_10842 = 0;var i__8405_10843 = 0;while(true){
if((i__8405_10843 < count__8404_10842))
{var arg__6538__auto___10844 = cljs.core._nth.call(null,chunk__8403_10841,i__8405_10843);a__6537__auto__.push(arg__6538__auto___10844);
{
var G__10845 = seq__8402_10840;
var G__10846 = chunk__8403_10841;
var G__10847 = count__8404_10842;
var G__10848 = (i__8405_10843 + 1);
seq__8402_10840 = G__10845;
chunk__8403_10841 = G__10846;
count__8404_10842 = G__10847;
i__8405_10843 = G__10848;
continue;
}
} else
{var temp__4092__auto___10849 = cljs.core.seq.call(null,seq__8402_10840);if(temp__4092__auto___10849)
{var seq__8402_10850__$1 = temp__4092__auto___10849;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8402_10850__$1))
{var c__5632__auto___10851 = cljs.core.chunk_first.call(null,seq__8402_10850__$1);{
var G__10852 = cljs.core.chunk_rest.call(null,seq__8402_10850__$1);
var G__10853 = c__5632__auto___10851;
var G__10854 = cljs.core.count.call(null,c__5632__auto___10851);
var G__10855 = 0;
seq__8402_10840 = G__10852;
chunk__8403_10841 = G__10853;
count__8404_10842 = G__10854;
i__8405_10843 = G__10855;
continue;
}
} else
{var arg__6538__auto___10856 = cljs.core.first.call(null,seq__8402_10850__$1);a__6537__auto__.push(arg__6538__auto___10856);
{
var G__10857 = cljs.core.next.call(null,seq__8402_10850__$1);
var G__10858 = null;
var G__10859 = 0;
var G__10860 = 0;
seq__8402_10840 = G__10857;
chunk__8403_10841 = G__10858;
count__8404_10842 = G__10859;
i__8405_10843 = G__10860;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.var$.apply(null,a__6537__auto__);
};
var var$ = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return var$__delegate.call(this,args__6536__auto__);};
var$.cljs$lang$maxFixedArity = 0;
var$.cljs$lang$applyTo = (function (arglist__10861){
var args__6536__auto__ = cljs.core.seq(arglist__10861);
return var$__delegate(args__6536__auto__);
});
var$.cljs$core$IFn$_invoke$arity$variadic = var$__delegate;
return var$;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.video = (function() { 
var video__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__8410_10862 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__8411_10863 = null;var count__8412_10864 = 0;var i__8413_10865 = 0;while(true){
if((i__8413_10865 < count__8412_10864))
{var arg__6538__auto___10866 = cljs.core._nth.call(null,chunk__8411_10863,i__8413_10865);a__6537__auto__.push(arg__6538__auto___10866);
{
var G__10867 = seq__8410_10862;
var G__10868 = chunk__8411_10863;
var G__10869 = count__8412_10864;
var G__10870 = (i__8413_10865 + 1);
seq__8410_10862 = G__10867;
chunk__8411_10863 = G__10868;
count__8412_10864 = G__10869;
i__8413_10865 = G__10870;
continue;
}
} else
{var temp__4092__auto___10871 = cljs.core.seq.call(null,seq__8410_10862);if(temp__4092__auto___10871)
{var seq__8410_10872__$1 = temp__4092__auto___10871;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8410_10872__$1))
{var c__5632__auto___10873 = cljs.core.chunk_first.call(null,seq__8410_10872__$1);{
var G__10874 = cljs.core.chunk_rest.call(null,seq__8410_10872__$1);
var G__10875 = c__5632__auto___10873;
var G__10876 = cljs.core.count.call(null,c__5632__auto___10873);
var G__10877 = 0;
seq__8410_10862 = G__10874;
chunk__8411_10863 = G__10875;
count__8412_10864 = G__10876;
i__8413_10865 = G__10877;
continue;
}
} else
{var arg__6538__auto___10878 = cljs.core.first.call(null,seq__8410_10872__$1);a__6537__auto__.push(arg__6538__auto___10878);
{
var G__10879 = cljs.core.next.call(null,seq__8410_10872__$1);
var G__10880 = null;
var G__10881 = 0;
var G__10882 = 0;
seq__8410_10862 = G__10879;
chunk__8411_10863 = G__10880;
count__8412_10864 = G__10881;
i__8413_10865 = G__10882;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.video.apply(null,a__6537__auto__);
};
var video = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return video__delegate.call(this,args__6536__auto__);};
video.cljs$lang$maxFixedArity = 0;
video.cljs$lang$applyTo = (function (arglist__10883){
var args__6536__auto__ = cljs.core.seq(arglist__10883);
return video__delegate(args__6536__auto__);
});
video.cljs$core$IFn$_invoke$arity$variadic = video__delegate;
return video;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.wbr = (function() { 
var wbr__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__8418_10884 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__8419_10885 = null;var count__8420_10886 = 0;var i__8421_10887 = 0;while(true){
if((i__8421_10887 < count__8420_10886))
{var arg__6538__auto___10888 = cljs.core._nth.call(null,chunk__8419_10885,i__8421_10887);a__6537__auto__.push(arg__6538__auto___10888);
{
var G__10889 = seq__8418_10884;
var G__10890 = chunk__8419_10885;
var G__10891 = count__8420_10886;
var G__10892 = (i__8421_10887 + 1);
seq__8418_10884 = G__10889;
chunk__8419_10885 = G__10890;
count__8420_10886 = G__10891;
i__8421_10887 = G__10892;
continue;
}
} else
{var temp__4092__auto___10893 = cljs.core.seq.call(null,seq__8418_10884);if(temp__4092__auto___10893)
{var seq__8418_10894__$1 = temp__4092__auto___10893;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8418_10894__$1))
{var c__5632__auto___10895 = cljs.core.chunk_first.call(null,seq__8418_10894__$1);{
var G__10896 = cljs.core.chunk_rest.call(null,seq__8418_10894__$1);
var G__10897 = c__5632__auto___10895;
var G__10898 = cljs.core.count.call(null,c__5632__auto___10895);
var G__10899 = 0;
seq__8418_10884 = G__10896;
chunk__8419_10885 = G__10897;
count__8420_10886 = G__10898;
i__8421_10887 = G__10899;
continue;
}
} else
{var arg__6538__auto___10900 = cljs.core.first.call(null,seq__8418_10894__$1);a__6537__auto__.push(arg__6538__auto___10900);
{
var G__10901 = cljs.core.next.call(null,seq__8418_10894__$1);
var G__10902 = null;
var G__10903 = 0;
var G__10904 = 0;
seq__8418_10884 = G__10901;
chunk__8419_10885 = G__10902;
count__8420_10886 = G__10903;
i__8421_10887 = G__10904;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.wbr.apply(null,a__6537__auto__);
};
var wbr = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return wbr__delegate.call(this,args__6536__auto__);};
wbr.cljs$lang$maxFixedArity = 0;
wbr.cljs$lang$applyTo = (function (arglist__10905){
var args__6536__auto__ = cljs.core.seq(arglist__10905);
return wbr__delegate(args__6536__auto__);
});
wbr.cljs$core$IFn$_invoke$arity$variadic = wbr__delegate;
return wbr;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.circle = (function() { 
var circle__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__8426_10906 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__8427_10907 = null;var count__8428_10908 = 0;var i__8429_10909 = 0;while(true){
if((i__8429_10909 < count__8428_10908))
{var arg__6538__auto___10910 = cljs.core._nth.call(null,chunk__8427_10907,i__8429_10909);a__6537__auto__.push(arg__6538__auto___10910);
{
var G__10911 = seq__8426_10906;
var G__10912 = chunk__8427_10907;
var G__10913 = count__8428_10908;
var G__10914 = (i__8429_10909 + 1);
seq__8426_10906 = G__10911;
chunk__8427_10907 = G__10912;
count__8428_10908 = G__10913;
i__8429_10909 = G__10914;
continue;
}
} else
{var temp__4092__auto___10915 = cljs.core.seq.call(null,seq__8426_10906);if(temp__4092__auto___10915)
{var seq__8426_10916__$1 = temp__4092__auto___10915;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8426_10916__$1))
{var c__5632__auto___10917 = cljs.core.chunk_first.call(null,seq__8426_10916__$1);{
var G__10918 = cljs.core.chunk_rest.call(null,seq__8426_10916__$1);
var G__10919 = c__5632__auto___10917;
var G__10920 = cljs.core.count.call(null,c__5632__auto___10917);
var G__10921 = 0;
seq__8426_10906 = G__10918;
chunk__8427_10907 = G__10919;
count__8428_10908 = G__10920;
i__8429_10909 = G__10921;
continue;
}
} else
{var arg__6538__auto___10922 = cljs.core.first.call(null,seq__8426_10916__$1);a__6537__auto__.push(arg__6538__auto___10922);
{
var G__10923 = cljs.core.next.call(null,seq__8426_10916__$1);
var G__10924 = null;
var G__10925 = 0;
var G__10926 = 0;
seq__8426_10906 = G__10923;
chunk__8427_10907 = G__10924;
count__8428_10908 = G__10925;
i__8429_10909 = G__10926;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.circle.apply(null,a__6537__auto__);
};
var circle = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return circle__delegate.call(this,args__6536__auto__);};
circle.cljs$lang$maxFixedArity = 0;
circle.cljs$lang$applyTo = (function (arglist__10927){
var args__6536__auto__ = cljs.core.seq(arglist__10927);
return circle__delegate(args__6536__auto__);
});
circle.cljs$core$IFn$_invoke$arity$variadic = circle__delegate;
return circle;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.g = (function() { 
var g__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__8434_10928 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__8435_10929 = null;var count__8436_10930 = 0;var i__8437_10931 = 0;while(true){
if((i__8437_10931 < count__8436_10930))
{var arg__6538__auto___10932 = cljs.core._nth.call(null,chunk__8435_10929,i__8437_10931);a__6537__auto__.push(arg__6538__auto___10932);
{
var G__10933 = seq__8434_10928;
var G__10934 = chunk__8435_10929;
var G__10935 = count__8436_10930;
var G__10936 = (i__8437_10931 + 1);
seq__8434_10928 = G__10933;
chunk__8435_10929 = G__10934;
count__8436_10930 = G__10935;
i__8437_10931 = G__10936;
continue;
}
} else
{var temp__4092__auto___10937 = cljs.core.seq.call(null,seq__8434_10928);if(temp__4092__auto___10937)
{var seq__8434_10938__$1 = temp__4092__auto___10937;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8434_10938__$1))
{var c__5632__auto___10939 = cljs.core.chunk_first.call(null,seq__8434_10938__$1);{
var G__10940 = cljs.core.chunk_rest.call(null,seq__8434_10938__$1);
var G__10941 = c__5632__auto___10939;
var G__10942 = cljs.core.count.call(null,c__5632__auto___10939);
var G__10943 = 0;
seq__8434_10928 = G__10940;
chunk__8435_10929 = G__10941;
count__8436_10930 = G__10942;
i__8437_10931 = G__10943;
continue;
}
} else
{var arg__6538__auto___10944 = cljs.core.first.call(null,seq__8434_10938__$1);a__6537__auto__.push(arg__6538__auto___10944);
{
var G__10945 = cljs.core.next.call(null,seq__8434_10938__$1);
var G__10946 = null;
var G__10947 = 0;
var G__10948 = 0;
seq__8434_10928 = G__10945;
chunk__8435_10929 = G__10946;
count__8436_10930 = G__10947;
i__8437_10931 = G__10948;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.g.apply(null,a__6537__auto__);
};
var g = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return g__delegate.call(this,args__6536__auto__);};
g.cljs$lang$maxFixedArity = 0;
g.cljs$lang$applyTo = (function (arglist__10949){
var args__6536__auto__ = cljs.core.seq(arglist__10949);
return g__delegate(args__6536__auto__);
});
g.cljs$core$IFn$_invoke$arity$variadic = g__delegate;
return g;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.line = (function() { 
var line__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__8442_10950 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__8443_10951 = null;var count__8444_10952 = 0;var i__8445_10953 = 0;while(true){
if((i__8445_10953 < count__8444_10952))
{var arg__6538__auto___10954 = cljs.core._nth.call(null,chunk__8443_10951,i__8445_10953);a__6537__auto__.push(arg__6538__auto___10954);
{
var G__10955 = seq__8442_10950;
var G__10956 = chunk__8443_10951;
var G__10957 = count__8444_10952;
var G__10958 = (i__8445_10953 + 1);
seq__8442_10950 = G__10955;
chunk__8443_10951 = G__10956;
count__8444_10952 = G__10957;
i__8445_10953 = G__10958;
continue;
}
} else
{var temp__4092__auto___10959 = cljs.core.seq.call(null,seq__8442_10950);if(temp__4092__auto___10959)
{var seq__8442_10960__$1 = temp__4092__auto___10959;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8442_10960__$1))
{var c__5632__auto___10961 = cljs.core.chunk_first.call(null,seq__8442_10960__$1);{
var G__10962 = cljs.core.chunk_rest.call(null,seq__8442_10960__$1);
var G__10963 = c__5632__auto___10961;
var G__10964 = cljs.core.count.call(null,c__5632__auto___10961);
var G__10965 = 0;
seq__8442_10950 = G__10962;
chunk__8443_10951 = G__10963;
count__8444_10952 = G__10964;
i__8445_10953 = G__10965;
continue;
}
} else
{var arg__6538__auto___10966 = cljs.core.first.call(null,seq__8442_10960__$1);a__6537__auto__.push(arg__6538__auto___10966);
{
var G__10967 = cljs.core.next.call(null,seq__8442_10960__$1);
var G__10968 = null;
var G__10969 = 0;
var G__10970 = 0;
seq__8442_10950 = G__10967;
chunk__8443_10951 = G__10968;
count__8444_10952 = G__10969;
i__8445_10953 = G__10970;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.line.apply(null,a__6537__auto__);
};
var line = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return line__delegate.call(this,args__6536__auto__);};
line.cljs$lang$maxFixedArity = 0;
line.cljs$lang$applyTo = (function (arglist__10971){
var args__6536__auto__ = cljs.core.seq(arglist__10971);
return line__delegate(args__6536__auto__);
});
line.cljs$core$IFn$_invoke$arity$variadic = line__delegate;
return line;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.path = (function() { 
var path__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__8450_10972 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__8451_10973 = null;var count__8452_10974 = 0;var i__8453_10975 = 0;while(true){
if((i__8453_10975 < count__8452_10974))
{var arg__6538__auto___10976 = cljs.core._nth.call(null,chunk__8451_10973,i__8453_10975);a__6537__auto__.push(arg__6538__auto___10976);
{
var G__10977 = seq__8450_10972;
var G__10978 = chunk__8451_10973;
var G__10979 = count__8452_10974;
var G__10980 = (i__8453_10975 + 1);
seq__8450_10972 = G__10977;
chunk__8451_10973 = G__10978;
count__8452_10974 = G__10979;
i__8453_10975 = G__10980;
continue;
}
} else
{var temp__4092__auto___10981 = cljs.core.seq.call(null,seq__8450_10972);if(temp__4092__auto___10981)
{var seq__8450_10982__$1 = temp__4092__auto___10981;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8450_10982__$1))
{var c__5632__auto___10983 = cljs.core.chunk_first.call(null,seq__8450_10982__$1);{
var G__10984 = cljs.core.chunk_rest.call(null,seq__8450_10982__$1);
var G__10985 = c__5632__auto___10983;
var G__10986 = cljs.core.count.call(null,c__5632__auto___10983);
var G__10987 = 0;
seq__8450_10972 = G__10984;
chunk__8451_10973 = G__10985;
count__8452_10974 = G__10986;
i__8453_10975 = G__10987;
continue;
}
} else
{var arg__6538__auto___10988 = cljs.core.first.call(null,seq__8450_10982__$1);a__6537__auto__.push(arg__6538__auto___10988);
{
var G__10989 = cljs.core.next.call(null,seq__8450_10982__$1);
var G__10990 = null;
var G__10991 = 0;
var G__10992 = 0;
seq__8450_10972 = G__10989;
chunk__8451_10973 = G__10990;
count__8452_10974 = G__10991;
i__8453_10975 = G__10992;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.path.apply(null,a__6537__auto__);
};
var path = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return path__delegate.call(this,args__6536__auto__);};
path.cljs$lang$maxFixedArity = 0;
path.cljs$lang$applyTo = (function (arglist__10993){
var args__6536__auto__ = cljs.core.seq(arglist__10993);
return path__delegate(args__6536__auto__);
});
path.cljs$core$IFn$_invoke$arity$variadic = path__delegate;
return path;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.polygon = (function() { 
var polygon__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__8458_10994 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__8459_10995 = null;var count__8460_10996 = 0;var i__8461_10997 = 0;while(true){
if((i__8461_10997 < count__8460_10996))
{var arg__6538__auto___10998 = cljs.core._nth.call(null,chunk__8459_10995,i__8461_10997);a__6537__auto__.push(arg__6538__auto___10998);
{
var G__10999 = seq__8458_10994;
var G__11000 = chunk__8459_10995;
var G__11001 = count__8460_10996;
var G__11002 = (i__8461_10997 + 1);
seq__8458_10994 = G__10999;
chunk__8459_10995 = G__11000;
count__8460_10996 = G__11001;
i__8461_10997 = G__11002;
continue;
}
} else
{var temp__4092__auto___11003 = cljs.core.seq.call(null,seq__8458_10994);if(temp__4092__auto___11003)
{var seq__8458_11004__$1 = temp__4092__auto___11003;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8458_11004__$1))
{var c__5632__auto___11005 = cljs.core.chunk_first.call(null,seq__8458_11004__$1);{
var G__11006 = cljs.core.chunk_rest.call(null,seq__8458_11004__$1);
var G__11007 = c__5632__auto___11005;
var G__11008 = cljs.core.count.call(null,c__5632__auto___11005);
var G__11009 = 0;
seq__8458_10994 = G__11006;
chunk__8459_10995 = G__11007;
count__8460_10996 = G__11008;
i__8461_10997 = G__11009;
continue;
}
} else
{var arg__6538__auto___11010 = cljs.core.first.call(null,seq__8458_11004__$1);a__6537__auto__.push(arg__6538__auto___11010);
{
var G__11011 = cljs.core.next.call(null,seq__8458_11004__$1);
var G__11012 = null;
var G__11013 = 0;
var G__11014 = 0;
seq__8458_10994 = G__11011;
chunk__8459_10995 = G__11012;
count__8460_10996 = G__11013;
i__8461_10997 = G__11014;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.polygon.apply(null,a__6537__auto__);
};
var polygon = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return polygon__delegate.call(this,args__6536__auto__);};
polygon.cljs$lang$maxFixedArity = 0;
polygon.cljs$lang$applyTo = (function (arglist__11015){
var args__6536__auto__ = cljs.core.seq(arglist__11015);
return polygon__delegate(args__6536__auto__);
});
polygon.cljs$core$IFn$_invoke$arity$variadic = polygon__delegate;
return polygon;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.polyline = (function() { 
var polyline__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__8466_11016 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__8467_11017 = null;var count__8468_11018 = 0;var i__8469_11019 = 0;while(true){
if((i__8469_11019 < count__8468_11018))
{var arg__6538__auto___11020 = cljs.core._nth.call(null,chunk__8467_11017,i__8469_11019);a__6537__auto__.push(arg__6538__auto___11020);
{
var G__11021 = seq__8466_11016;
var G__11022 = chunk__8467_11017;
var G__11023 = count__8468_11018;
var G__11024 = (i__8469_11019 + 1);
seq__8466_11016 = G__11021;
chunk__8467_11017 = G__11022;
count__8468_11018 = G__11023;
i__8469_11019 = G__11024;
continue;
}
} else
{var temp__4092__auto___11025 = cljs.core.seq.call(null,seq__8466_11016);if(temp__4092__auto___11025)
{var seq__8466_11026__$1 = temp__4092__auto___11025;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8466_11026__$1))
{var c__5632__auto___11027 = cljs.core.chunk_first.call(null,seq__8466_11026__$1);{
var G__11028 = cljs.core.chunk_rest.call(null,seq__8466_11026__$1);
var G__11029 = c__5632__auto___11027;
var G__11030 = cljs.core.count.call(null,c__5632__auto___11027);
var G__11031 = 0;
seq__8466_11016 = G__11028;
chunk__8467_11017 = G__11029;
count__8468_11018 = G__11030;
i__8469_11019 = G__11031;
continue;
}
} else
{var arg__6538__auto___11032 = cljs.core.first.call(null,seq__8466_11026__$1);a__6537__auto__.push(arg__6538__auto___11032);
{
var G__11033 = cljs.core.next.call(null,seq__8466_11026__$1);
var G__11034 = null;
var G__11035 = 0;
var G__11036 = 0;
seq__8466_11016 = G__11033;
chunk__8467_11017 = G__11034;
count__8468_11018 = G__11035;
i__8469_11019 = G__11036;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.polyline.apply(null,a__6537__auto__);
};
var polyline = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return polyline__delegate.call(this,args__6536__auto__);};
polyline.cljs$lang$maxFixedArity = 0;
polyline.cljs$lang$applyTo = (function (arglist__11037){
var args__6536__auto__ = cljs.core.seq(arglist__11037);
return polyline__delegate(args__6536__auto__);
});
polyline.cljs$core$IFn$_invoke$arity$variadic = polyline__delegate;
return polyline;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.rect = (function() { 
var rect__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__8474_11038 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__8475_11039 = null;var count__8476_11040 = 0;var i__8477_11041 = 0;while(true){
if((i__8477_11041 < count__8476_11040))
{var arg__6538__auto___11042 = cljs.core._nth.call(null,chunk__8475_11039,i__8477_11041);a__6537__auto__.push(arg__6538__auto___11042);
{
var G__11043 = seq__8474_11038;
var G__11044 = chunk__8475_11039;
var G__11045 = count__8476_11040;
var G__11046 = (i__8477_11041 + 1);
seq__8474_11038 = G__11043;
chunk__8475_11039 = G__11044;
count__8476_11040 = G__11045;
i__8477_11041 = G__11046;
continue;
}
} else
{var temp__4092__auto___11047 = cljs.core.seq.call(null,seq__8474_11038);if(temp__4092__auto___11047)
{var seq__8474_11048__$1 = temp__4092__auto___11047;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8474_11048__$1))
{var c__5632__auto___11049 = cljs.core.chunk_first.call(null,seq__8474_11048__$1);{
var G__11050 = cljs.core.chunk_rest.call(null,seq__8474_11048__$1);
var G__11051 = c__5632__auto___11049;
var G__11052 = cljs.core.count.call(null,c__5632__auto___11049);
var G__11053 = 0;
seq__8474_11038 = G__11050;
chunk__8475_11039 = G__11051;
count__8476_11040 = G__11052;
i__8477_11041 = G__11053;
continue;
}
} else
{var arg__6538__auto___11054 = cljs.core.first.call(null,seq__8474_11048__$1);a__6537__auto__.push(arg__6538__auto___11054);
{
var G__11055 = cljs.core.next.call(null,seq__8474_11048__$1);
var G__11056 = null;
var G__11057 = 0;
var G__11058 = 0;
seq__8474_11038 = G__11055;
chunk__8475_11039 = G__11056;
count__8476_11040 = G__11057;
i__8477_11041 = G__11058;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.rect.apply(null,a__6537__auto__);
};
var rect = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return rect__delegate.call(this,args__6536__auto__);};
rect.cljs$lang$maxFixedArity = 0;
rect.cljs$lang$applyTo = (function (arglist__11059){
var args__6536__auto__ = cljs.core.seq(arglist__11059);
return rect__delegate(args__6536__auto__);
});
rect.cljs$core$IFn$_invoke$arity$variadic = rect__delegate;
return rect;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.svg = (function() { 
var svg__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__8482_11060 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__8483_11061 = null;var count__8484_11062 = 0;var i__8485_11063 = 0;while(true){
if((i__8485_11063 < count__8484_11062))
{var arg__6538__auto___11064 = cljs.core._nth.call(null,chunk__8483_11061,i__8485_11063);a__6537__auto__.push(arg__6538__auto___11064);
{
var G__11065 = seq__8482_11060;
var G__11066 = chunk__8483_11061;
var G__11067 = count__8484_11062;
var G__11068 = (i__8485_11063 + 1);
seq__8482_11060 = G__11065;
chunk__8483_11061 = G__11066;
count__8484_11062 = G__11067;
i__8485_11063 = G__11068;
continue;
}
} else
{var temp__4092__auto___11069 = cljs.core.seq.call(null,seq__8482_11060);if(temp__4092__auto___11069)
{var seq__8482_11070__$1 = temp__4092__auto___11069;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8482_11070__$1))
{var c__5632__auto___11071 = cljs.core.chunk_first.call(null,seq__8482_11070__$1);{
var G__11072 = cljs.core.chunk_rest.call(null,seq__8482_11070__$1);
var G__11073 = c__5632__auto___11071;
var G__11074 = cljs.core.count.call(null,c__5632__auto___11071);
var G__11075 = 0;
seq__8482_11060 = G__11072;
chunk__8483_11061 = G__11073;
count__8484_11062 = G__11074;
i__8485_11063 = G__11075;
continue;
}
} else
{var arg__6538__auto___11076 = cljs.core.first.call(null,seq__8482_11070__$1);a__6537__auto__.push(arg__6538__auto___11076);
{
var G__11077 = cljs.core.next.call(null,seq__8482_11070__$1);
var G__11078 = null;
var G__11079 = 0;
var G__11080 = 0;
seq__8482_11060 = G__11077;
chunk__8483_11061 = G__11078;
count__8484_11062 = G__11079;
i__8485_11063 = G__11080;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.svg.apply(null,a__6537__auto__);
};
var svg = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return svg__delegate.call(this,args__6536__auto__);};
svg.cljs$lang$maxFixedArity = 0;
svg.cljs$lang$applyTo = (function (arglist__11081){
var args__6536__auto__ = cljs.core.seq(arglist__11081);
return svg__delegate(args__6536__auto__);
});
svg.cljs$core$IFn$_invoke$arity$variadic = svg__delegate;
return svg;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.text = (function() { 
var text__delegate = function (args__6536__auto__){var a__6537__auto__ = [];a__6537__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6536__auto__)));
var seq__7794_11082 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6536__auto__));var chunk__7795_11083 = null;var count__7796_11084 = 0;var i__7797_11085 = 0;while(true){
if((i__7797_11085 < count__7796_11084))
{var arg__6538__auto___11086 = cljs.core._nth.call(null,chunk__7795_11083,i__7797_11085);a__6537__auto__.push(arg__6538__auto___11086);
{
var G__11087 = seq__7794_11082;
var G__11088 = chunk__7795_11083;
var G__11089 = count__7796_11084;
var G__11090 = (i__7797_11085 + 1);
seq__7794_11082 = G__11087;
chunk__7795_11083 = G__11088;
count__7796_11084 = G__11089;
i__7797_11085 = G__11090;
continue;
}
} else
{var temp__4092__auto___11091 = cljs.core.seq.call(null,seq__7794_11082);if(temp__4092__auto___11091)
{var seq__7794_11092__$1 = temp__4092__auto___11091;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7794_11092__$1))
{var c__5632__auto___11093 = cljs.core.chunk_first.call(null,seq__7794_11092__$1);{
var G__11094 = cljs.core.chunk_rest.call(null,seq__7794_11092__$1);
var G__11095 = c__5632__auto___11093;
var G__11096 = cljs.core.count.call(null,c__5632__auto___11093);
var G__11097 = 0;
seq__7794_11082 = G__11094;
chunk__7795_11083 = G__11095;
count__7796_11084 = G__11096;
i__7797_11085 = G__11097;
continue;
}
} else
{var arg__6538__auto___11098 = cljs.core.first.call(null,seq__7794_11092__$1);a__6537__auto__.push(arg__6538__auto___11098);
{
var G__11099 = cljs.core.next.call(null,seq__7794_11092__$1);
var G__11100 = null;
var G__11101 = 0;
var G__11102 = 0;
seq__7794_11082 = G__11099;
chunk__7795_11083 = G__11100;
count__7796_11084 = G__11101;
i__7797_11085 = G__11102;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.text.apply(null,a__6537__auto__);
};
var text = function (var_args){
var args__6536__auto__ = null;if (arguments.length > 0) {
  args__6536__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return text__delegate.call(this,args__6536__auto__);};
text.cljs$lang$maxFixedArity = 0;
text.cljs$lang$applyTo = (function (arglist__11103){
var args__6536__auto__ = cljs.core.seq(arglist__11103);
return text__delegate(args__6536__auto__);
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
lt.plugins.elm_light.autocompleter.handle_keypress = (function handle_keypress(p__7512,ev){var map__7515 = p__7512;var map__7515__$1 = ((cljs.core.seq_QMARK_.call(null,map__7515))?cljs.core.apply.call(null,cljs.core.hash_map,map__7515):map__7515);var props = map__7515__$1;var on_cancel = cljs.core.get.call(null,map__7515__$1,new cljs.core.Keyword(null,"on-cancel","on-cancel",600765850));var on_select = cljs.core.get.call(null,map__7515__$1,new cljs.core.Keyword(null,"on-select","on-select",1062468636));var on_down = cljs.core.get.call(null,map__7515__$1,new cljs.core.Keyword(null,"on-down","on-down",3936419650));var on_up = cljs.core.get.call(null,map__7515__$1,new cljs.core.Keyword(null,"on-up","on-up",1119739067));var kk = ev.which;var G__7516 = kk;if(cljs.core._EQ_.call(null,27,G__7516))
{ev.preventDefault();
ev.target.value = "";
return on_cancel.call(null);
} else
{if(cljs.core._EQ_.call(null,13,G__7516))
{ev.preventDefault();
var temp__4092__auto___7532 = lt.plugins.elm_light.autocompleter.find_active.call(null,new cljs.core.Keyword(null,"items","items",1114430258).cljs$core$IFn$_invoke$arity$1(props));if(cljs.core.truth_(temp__4092__auto___7532))
{var active_7533 = temp__4092__auto___7532;ev.target.value = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(active_7533);
} else
{}
return on_select.call(null);
} else
{if(cljs.core._EQ_.call(null,40,G__7516))
{ev.preventDefault();
return on_down.call(null);
} else
{if(cljs.core._EQ_.call(null,38,G__7516))
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
return (function (p1__7517_SHARP_){return "autocomplete-dropdown-item row".concat((cljs.core.truth_(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(p1__7517_SHARP_))?" autocomplete-active":""));
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
lt.plugins.elm_light.autocompleter.Adder = quiescent.component.call(null,(function (p__7518){var map__7519 = p__7518;var map__7519__$1 = ((cljs.core.seq_QMARK_.call(null,map__7519))?cljs.core.apply.call(null,cljs.core.hash_map,map__7519):map__7519);var props = map__7519__$1;var disabled = cljs.core.get.call(null,map__7519__$1,new cljs.core.Keyword(null,"disabled","disabled",1284845038));var on_add_package = cljs.core.get.call(null,map__7519__$1,new cljs.core.Keyword(null,"on-add-package","on-add-package",3601701790));return quiescent.dom.button.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",1004015509),"btn",new cljs.core.Keyword(null,"disabled","disabled",1284845038),disabled,new cljs.core.Keyword(null,"onClick","onClick",3956969051),((function (map__7519,map__7519__$1,props,disabled,on_add_package){
return (function (){return on_add_package.call(null);
});})(map__7519,map__7519__$1,props,disabled,on_add_package))
], null),"Add package");
}));
/**
* 
*/
lt.plugins.elm_light.autocompleter.Versions = quiescent.component.call(null,(function (props){return cljs.core.apply.call(null,quiescent.dom.select,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",1004015509),"versions",new cljs.core.Keyword(null,"value","value",1125876963),new cljs.core.Keyword(null,"version","version",1365512266).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"onChange","onChange",2050678241),(function (p1__7520_SHARP_){return new cljs.core.Keyword(null,"on-change-version","on-change-version",822058203).cljs$core$IFn$_invoke$arity$1(props).call(null,p1__7520_SHARP_.target.value);
})], null),cljs.core.map.call(null,(function (p1__7521_SHARP_){return quiescent.dom.option.call(null,cljs.core.PersistentArrayMap.EMPTY,p1__7521_SHARP_);
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
clojure.walk.keywordize_keys = (function keywordize_keys(m){var f = (function (p__11527){var vec__11528 = p__11527;var k = cljs.core.nth.call(null,vec__11528,0,null);var v = cljs.core.nth.call(null,vec__11528,1,null);if(typeof k === 'string')
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
clojure.walk.stringify_keys = (function stringify_keys(m){var f = (function (p__11531){var vec__11532 = p__11531;var k = cljs.core.nth.call(null,vec__11532,0,null);var v = cljs.core.nth.call(null,vec__11532,1,null);if((k instanceof cljs.core.Keyword))
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
goog.require('fetch.core');
goog.require('fetch.core');
goog.require('lt.objs.plugins');
goog.require('lt.objs.plugins');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor');
goog.require('lt.objs.files');
goog.require('lt.objs.files');
lt.plugins.elm_light.utils.elm_plugin_dir = lt.objs.plugins.find_plugin.call(null,"elm-light");
lt.plugins.elm_light.utils.str_contains = (function str_contains(s,v){return (s.indexOf(v) > -1);
});
lt.plugins.elm_light.utils.find_symbol = (function find_symbol(ed,pos){var curr_tok = lt.objs.editor.__GT_token.call(null,ed,pos);var G__11555 = new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(curr_tok);if(cljs.core._EQ_.call(null,"variable",G__11555))
{return [cljs.core.str(find_symbol.call(null,ed,cljs.core.assoc.call(null,pos,new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(curr_tok)))),cljs.core.str(new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(curr_tok))].join('');
} else
{if(cljs.core._EQ_.call(null,"qualifier",G__11555))
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
lt.plugins.elm_light.utils.get_project_deps = (function get_project_deps(project_path){var pkg_json = lt.objs.files.join.call(null,project_path,"elm-package.json");var deps_json = lt.objs.files.join.call(null,project_path,"elm-stuff","exact-dependencies.json");return cljs.core.mapv.call(null,((function (pkg_json,deps_json){
return (function (p__11562){var vec__11563 = p__11562;var _ = cljs.core.nth.call(null,vec__11563,0,null);var vs = cljs.core.nth.call(null,vec__11563,1,null);return cljs.core.apply.call(null,cljs.core.merge,vs);
});})(pkg_json,deps_json))
,cljs.core.group_by.call(null,new cljs.core.Keyword(null,"package","package",4501809080),cljs.core.concat.call(null,cljs.core.mapv.call(null,((function (pkg_json,deps_json){
return (function (p__11564){var vec__11565 = p__11564;var k = cljs.core.nth.call(null,vec__11565,0,null);var v = cljs.core.nth.call(null,vec__11565,1,null);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"package","package",4501809080),lt.plugins.elm_light.utils.nskw__GT_name.call(null,k),new cljs.core.Keyword(null,"exact","exact",1110851185),v], null);
});})(pkg_json,deps_json))
,lt.plugins.elm_light.utils.parse_json_file.call(null,deps_json)),cljs.core.mapv.call(null,((function (pkg_json,deps_json){
return (function (p__11566){var vec__11567 = p__11566;var k = cljs.core.nth.call(null,vec__11567,0,null);var v = cljs.core.nth.call(null,vec__11567,1,null);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"package","package",4501809080),lt.plugins.elm_light.utils.nskw__GT_name.call(null,k),new cljs.core.Keyword(null,"range","range",1122184367),v], null);
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
lt.plugins.elm_light.graph.find_package_by_name = (function find_package_by_name(this$,name){return cljs.core.some.call(null,(function (p1__11186_SHARP_){if(cljs.core._EQ_.call(null,lt.plugins.elm_light.graph.lower.call(null,new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(p1__11186_SHARP_)),lt.plugins.elm_light.graph.lower.call(null,name)))
{return p1__11186_SHARP_;
} else
{return null;
}
}),new cljs.core.Keyword(null,"all-packages","all-packages",1123981067).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
});
lt.plugins.elm_light.graph.dependency_graph_ui = (function dependency_graph_ui(this$){var e__6289__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.graph","div.graph",2030351651),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dependency-graph","div.dependency-graph",3039800187),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg:svg","svg:svg",3472817088),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",1127031096),"650",new cljs.core.Keyword(null,"height","height",4087841945),"680"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg:g","svg:g",1123725379),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",2066570974),"translate(20,20)"], null)], null)], null)], null)], null));var seq__11193_11244 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__11194_11245 = null;var count__11195_11246 = 0;var i__11196_11247 = 0;while(true){
if((i__11196_11247 < count__11195_11246))
{var vec__11197_11248 = cljs.core._nth.call(null,chunk__11194_11245,i__11196_11247);var ev__6290__auto___11249 = cljs.core.nth.call(null,vec__11197_11248,0,null);var func__6291__auto___11250 = cljs.core.nth.call(null,vec__11197_11248,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___11249,func__6291__auto___11250);
{
var G__11251 = seq__11193_11244;
var G__11252 = chunk__11194_11245;
var G__11253 = count__11195_11246;
var G__11254 = (i__11196_11247 + 1);
seq__11193_11244 = G__11251;
chunk__11194_11245 = G__11252;
count__11195_11246 = G__11253;
i__11196_11247 = G__11254;
continue;
}
} else
{var temp__4092__auto___11255 = cljs.core.seq.call(null,seq__11193_11244);if(temp__4092__auto___11255)
{var seq__11193_11256__$1 = temp__4092__auto___11255;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11193_11256__$1))
{var c__5632__auto___11257 = cljs.core.chunk_first.call(null,seq__11193_11256__$1);{
var G__11258 = cljs.core.chunk_rest.call(null,seq__11193_11256__$1);
var G__11259 = c__5632__auto___11257;
var G__11260 = cljs.core.count.call(null,c__5632__auto___11257);
var G__11261 = 0;
seq__11193_11244 = G__11258;
chunk__11194_11245 = G__11259;
count__11195_11246 = G__11260;
i__11196_11247 = G__11261;
continue;
}
} else
{var vec__11198_11262 = cljs.core.first.call(null,seq__11193_11256__$1);var ev__6290__auto___11263 = cljs.core.nth.call(null,vec__11198_11262,0,null);var func__6291__auto___11264 = cljs.core.nth.call(null,vec__11198_11262,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___11263,func__6291__auto___11264);
{
var G__11265 = cljs.core.next.call(null,seq__11193_11256__$1);
var G__11266 = null;
var G__11267 = 0;
var G__11268 = 0;
seq__11193_11244 = G__11265;
chunk__11194_11245 = G__11266;
count__11195_11246 = G__11267;
i__11196_11247 = G__11268;
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
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.graph","dependency-graph","lt.plugins.elm-light.graph/dependency-graph",2371711049),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elm.graph.dependency","elm.graph.dependency",658564005)], null),new cljs.core.Keyword(null,"name","name",1017277949),"Dependency graph",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){lt.plugins.elm_light.utils.fetch_all_packages.call(null,(function (p1__11199_SHARP_){return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"all-packages","all-packages",1123981067),p1__11199_SHARP_], null));
}));
return lt.plugins.elm_light.graph.dependency_graph_ui.call(null,this$);
}));
lt.plugins.elm_light.graph.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___11269 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___11269))
{var ts_11270 = temp__4092__auto___11269;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_11270))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_11270);
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
lt.plugins.elm_light.graph.create_graph = (function create_graph(data){var g = (new lt.plugins.elm_light.graph.dagreD3.graphlib.Graph()).setGraph({});var seq__11208_11271 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"nodes","nodes",1118897699).cljs$core$IFn$_invoke$arity$1(data));var chunk__11209_11272 = null;var count__11210_11273 = 0;var i__11211_11274 = 0;while(true){
if((i__11211_11274 < count__11210_11273))
{var x_11275 = cljs.core._nth.call(null,chunk__11209_11272,i__11211_11274);g.setNode(lt.plugins.elm_light.graph.dep_id.call(null,x_11275),lt.plugins.elm_light.graph.node_label.call(null,x_11275));
{
var G__11276 = seq__11208_11271;
var G__11277 = chunk__11209_11272;
var G__11278 = count__11210_11273;
var G__11279 = (i__11211_11274 + 1);
seq__11208_11271 = G__11276;
chunk__11209_11272 = G__11277;
count__11210_11273 = G__11278;
i__11211_11274 = G__11279;
continue;
}
} else
{var temp__4092__auto___11280 = cljs.core.seq.call(null,seq__11208_11271);if(temp__4092__auto___11280)
{var seq__11208_11281__$1 = temp__4092__auto___11280;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11208_11281__$1))
{var c__5632__auto___11282 = cljs.core.chunk_first.call(null,seq__11208_11281__$1);{
var G__11283 = cljs.core.chunk_rest.call(null,seq__11208_11281__$1);
var G__11284 = c__5632__auto___11282;
var G__11285 = cljs.core.count.call(null,c__5632__auto___11282);
var G__11286 = 0;
seq__11208_11271 = G__11283;
chunk__11209_11272 = G__11284;
count__11210_11273 = G__11285;
i__11211_11274 = G__11286;
continue;
}
} else
{var x_11287 = cljs.core.first.call(null,seq__11208_11281__$1);g.setNode(lt.plugins.elm_light.graph.dep_id.call(null,x_11287),lt.plugins.elm_light.graph.node_label.call(null,x_11287));
{
var G__11288 = cljs.core.next.call(null,seq__11208_11281__$1);
var G__11289 = null;
var G__11290 = 0;
var G__11291 = 0;
seq__11208_11271 = G__11288;
chunk__11209_11272 = G__11289;
count__11210_11273 = G__11290;
i__11211_11274 = G__11291;
continue;
}
}
} else
{}
}
break;
}
var seq__11212_11292 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"edges","edges",1110261192).cljs$core$IFn$_invoke$arity$1(data));var chunk__11213_11293 = null;var count__11214_11294 = 0;var i__11215_11295 = 0;while(true){
if((i__11215_11295 < count__11214_11294))
{var x_11296 = cljs.core._nth.call(null,chunk__11213_11293,i__11215_11295);g.setEdge(new cljs.core.Keyword(null,"a","a",1013904339).cljs$core$IFn$_invoke$arity$1(x_11296),new cljs.core.Keyword(null,"b","b",1013904340).cljs$core$IFn$_invoke$arity$1(x_11296),{"style": (cljs.core.truth_(new cljs.core.Keyword(null,"transitive","transitive",3584713111).cljs$core$IFn$_invoke$arity$1(x_11296))?"stroke-dasharray: 5, 5;":null), "label": new cljs.core.Keyword(null,"label","label",1116631654).cljs$core$IFn$_invoke$arity$1(x_11296)});
{
var G__11297 = seq__11212_11292;
var G__11298 = chunk__11213_11293;
var G__11299 = count__11214_11294;
var G__11300 = (i__11215_11295 + 1);
seq__11212_11292 = G__11297;
chunk__11213_11293 = G__11298;
count__11214_11294 = G__11299;
i__11215_11295 = G__11300;
continue;
}
} else
{var temp__4092__auto___11301 = cljs.core.seq.call(null,seq__11212_11292);if(temp__4092__auto___11301)
{var seq__11212_11302__$1 = temp__4092__auto___11301;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11212_11302__$1))
{var c__5632__auto___11303 = cljs.core.chunk_first.call(null,seq__11212_11302__$1);{
var G__11304 = cljs.core.chunk_rest.call(null,seq__11212_11302__$1);
var G__11305 = c__5632__auto___11303;
var G__11306 = cljs.core.count.call(null,c__5632__auto___11303);
var G__11307 = 0;
seq__11212_11292 = G__11304;
chunk__11213_11293 = G__11305;
count__11214_11294 = G__11306;
i__11215_11295 = G__11307;
continue;
}
} else
{var x_11308 = cljs.core.first.call(null,seq__11212_11302__$1);g.setEdge(new cljs.core.Keyword(null,"a","a",1013904339).cljs$core$IFn$_invoke$arity$1(x_11308),new cljs.core.Keyword(null,"b","b",1013904340).cljs$core$IFn$_invoke$arity$1(x_11308),{"style": (cljs.core.truth_(new cljs.core.Keyword(null,"transitive","transitive",3584713111).cljs$core$IFn$_invoke$arity$1(x_11308))?"stroke-dasharray: 5, 5;":null), "label": new cljs.core.Keyword(null,"label","label",1116631654).cljs$core$IFn$_invoke$arity$1(x_11308)});
{
var G__11309 = cljs.core.next.call(null,seq__11212_11302__$1);
var G__11310 = null;
var G__11311 = 0;
var G__11312 = 0;
seq__11212_11292 = G__11309;
chunk__11213_11293 = G__11310;
count__11214_11294 = G__11311;
i__11215_11295 = G__11312;
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
}),cljs.core.map.call(null,(function (p__11220){var vec__11221 = p__11220;var k = cljs.core.nth.call(null,vec__11221,0,null);var v = cljs.core.nth.call(null,vec__11221,1,null);return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"package","package",4501809080),new cljs.core.Keyword(null,"range","range",1122184367),new cljs.core.Keyword(null,"version","version",1365512266)],[lt.plugins.elm_light.utils.nskw__GT_name.call(null,k),v,new cljs.core.Keyword(null,"version","version",1365512266).cljs$core$IFn$_invoke$arity$1(cljs.core.some.call(null,((function (vec__11221,k,v){
return (function (p1__11216_SHARP_){if(cljs.core._EQ_.call(null,lt.plugins.elm_light.utils.nskw__GT_name.call(null,k),new cljs.core.Keyword(null,"package","package",4501809080).cljs$core$IFn$_invoke$arity$1(p1__11216_SHARP_)))
{return p1__11216_SHARP_;
} else
{return null;
}
});})(vec__11221,k,v))
,new cljs.core.Keyword(null,"packages","packages",1764771935).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))))]);
}),new cljs.core.Keyword(null,"dependencies","dependencies",1517678747).cljs$core$IFn$_invoke$arity$1(pkg_json))));if(temp__4092__auto__)
{var edges = temp__4092__auto__;lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",1016980252),new cljs.core.Keyword(null,"edges","edges",1110261192)], null),((function (edges,temp__4092__auto__){
return (function (p1__11217_SHARP_){return cljs.core.concat.call(null,p1__11217_SHARP_,edges);
});})(edges,temp__4092__auto__))
);
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"elm.graph.render","elm.graph.render",2076182000));
} else
{return null;
}
});
lt.plugins.elm_light.graph.__BEH__on_get_transitives = (function __BEH__on_get_transitives(this$){var transitives = cljs.core.remove.call(null,new cljs.core.Keyword(null,"range","range",1122184367),new cljs.core.Keyword(null,"packages","packages",1764771935).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))));lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",1016980252),new cljs.core.Keyword(null,"nodes","nodes",1118897699)], null),((function (transitives){
return (function (p1__11222_SHARP_){return cljs.core.concat.call(null,p1__11222_SHARP_,transitives);
});})(transitives))
);
lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"elm.graph.render","elm.graph.render",2076182000));
var seq__11227 = cljs.core.seq.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"version","version",1365512266),new cljs.core.Keyword(null,"packages","packages",1764771935).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))));var chunk__11228 = null;var count__11229 = 0;var i__11230 = 0;while(true){
if((i__11230 < count__11229))
{var x = cljs.core._nth.call(null,chunk__11228,i__11230);lt.plugins.elm_light.graph.get_package_json.call(null,x,cljs.core.partial.call(null,lt.plugins.elm_light.graph.add_edges_for_dep,this$,x));
{
var G__11313 = seq__11227;
var G__11314 = chunk__11228;
var G__11315 = count__11229;
var G__11316 = (i__11230 + 1);
seq__11227 = G__11313;
chunk__11228 = G__11314;
count__11229 = G__11315;
i__11230 = G__11316;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__11227);if(temp__4092__auto__)
{var seq__11227__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11227__$1))
{var c__5632__auto__ = cljs.core.chunk_first.call(null,seq__11227__$1);{
var G__11317 = cljs.core.chunk_rest.call(null,seq__11227__$1);
var G__11318 = c__5632__auto__;
var G__11319 = cljs.core.count.call(null,c__5632__auto__);
var G__11320 = 0;
seq__11227 = G__11317;
chunk__11228 = G__11318;
count__11229 = G__11319;
i__11230 = G__11320;
continue;
}
} else
{var x = cljs.core.first.call(null,seq__11227__$1);lt.plugins.elm_light.graph.get_package_json.call(null,x,cljs.core.partial.call(null,lt.plugins.elm_light.graph.add_edges_for_dep,this$,x));
{
var G__11321 = cljs.core.next.call(null,seq__11227__$1);
var G__11322 = null;
var G__11323 = 0;
var G__11324 = 0;
seq__11227 = G__11321;
chunk__11228 = G__11322;
count__11229 = G__11323;
i__11230 = G__11324;
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
lt.plugins.elm_light.graph.get_dependency_data = (function get_dependency_data(project_path){var pkgs = cljs.core.map.call(null,(function (p1__11232_SHARP_){return cljs.core.assoc.call(null,p1__11232_SHARP_,new cljs.core.Keyword(null,"summary","summary",3451231000),new cljs.core.Keyword(null,"summary","summary",3451231000).cljs$core$IFn$_invoke$arity$1(lt.plugins.elm_light.graph.find_package_by_name.call(null,lt.plugins.elm_light.graph.dependency_graph,new cljs.core.Keyword(null,"package","package",4501809080).cljs$core$IFn$_invoke$arity$1(p1__11232_SHARP_))));
}),cljs.core.map.call(null,(function (p1__11231_SHARP_){return clojure.set.rename_keys.call(null,p1__11231_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"exact","exact",1110851185),new cljs.core.Keyword(null,"version","version",1365512266)], null));
}),lt.plugins.elm_light.utils.get_project_deps.call(null,project_path)));var direct = cljs.core.filter.call(null,new cljs.core.Keyword(null,"range","range",1122184367),pkgs);var rootVersion = new cljs.core.Keyword(null,"version","version",1365512266).cljs$core$IFn$_invoke$arity$1(lt.plugins.elm_light.utils.parse_json_file.call(null,lt.objs.files.join.call(null,project_path,"elm-package.json")));var root = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"package","package",4501809080),lt.objs.files.basename.call(null,project_path),new cljs.core.Keyword(null,"version","version",1365512266),rootVersion,new cljs.core.Keyword(null,"shape","shape",1123304211),"ellipse"], null);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"packages","packages",1764771935),pkgs,new cljs.core.Keyword(null,"nodes","nodes",1118897699),cljs.core.conj.call(null,direct,root),new cljs.core.Keyword(null,"edges","edges",1110261192),cljs.core.map.call(null,((function (pkgs,direct,rootVersion,root){
return (function (p1__11233_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"label","label",1116631654)],[lt.plugins.elm_light.graph.dep_id.call(null,root),lt.plugins.elm_light.graph.dep_id.call(null,p1__11233_SHARP_),new cljs.core.Keyword(null,"range","range",1122184367).cljs$core$IFn$_invoke$arity$1(p1__11233_SHARP_)]);
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
return (function (p__11464){var vec__11465 = p__11464;var k = cljs.core.nth.call(null,vec__11465,0,null);var v = cljs.core.nth.call(null,vec__11465,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.elm_light.utils.nskw__GT_name.call(null,k),v], null);
});})(pkg_file))
,deps)),pkg);
});})(pkg_file))
)));
});
lt.plugins.elm_light.packages.project_wrapper = (function project_wrapper(this$){var e__6289__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.elm","div.elm",2686466363),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"project-packages-wrapper"], null),"Retrieving project package info..."], null)], null));var seq__11472_11497 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__11473_11498 = null;var count__11474_11499 = 0;var i__11475_11500 = 0;while(true){
if((i__11475_11500 < count__11474_11499))
{var vec__11476_11501 = cljs.core._nth.call(null,chunk__11473_11498,i__11475_11500);var ev__6290__auto___11502 = cljs.core.nth.call(null,vec__11476_11501,0,null);var func__6291__auto___11503 = cljs.core.nth.call(null,vec__11476_11501,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___11502,func__6291__auto___11503);
{
var G__11504 = seq__11472_11497;
var G__11505 = chunk__11473_11498;
var G__11506 = count__11474_11499;
var G__11507 = (i__11475_11500 + 1);
seq__11472_11497 = G__11504;
chunk__11473_11498 = G__11505;
count__11474_11499 = G__11506;
i__11475_11500 = G__11507;
continue;
}
} else
{var temp__4092__auto___11508 = cljs.core.seq.call(null,seq__11472_11497);if(temp__4092__auto___11508)
{var seq__11472_11509__$1 = temp__4092__auto___11508;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11472_11509__$1))
{var c__5632__auto___11510 = cljs.core.chunk_first.call(null,seq__11472_11509__$1);{
var G__11511 = cljs.core.chunk_rest.call(null,seq__11472_11509__$1);
var G__11512 = c__5632__auto___11510;
var G__11513 = cljs.core.count.call(null,c__5632__auto___11510);
var G__11514 = 0;
seq__11472_11497 = G__11511;
chunk__11473_11498 = G__11512;
count__11474_11499 = G__11513;
i__11475_11500 = G__11514;
continue;
}
} else
{var vec__11477_11515 = cljs.core.first.call(null,seq__11472_11509__$1);var ev__6290__auto___11516 = cljs.core.nth.call(null,vec__11477_11515,0,null);var func__6291__auto___11517 = cljs.core.nth.call(null,vec__11477_11515,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___11516,func__6291__auto___11517);
{
var G__11518 = cljs.core.next.call(null,seq__11472_11509__$1);
var G__11519 = null;
var G__11520 = 0;
var G__11521 = 0;
seq__11472_11497 = G__11518;
chunk__11473_11498 = G__11519;
count__11474_11499 = G__11520;
i__11475_11500 = G__11521;
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
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.packages","elm-packages","lt.plugins.elm-light.packages/elm-packages",4552372902),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elm.packages","elm.packages",3931311271),null], null), null),new cljs.core.Keyword(null,"label","label",1116631654),"Elm project packages",new cljs.core.Keyword(null,"name","name",1017277949),"Elm project packages",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){lt.plugins.elm_light.utils.fetch_all_packages.call(null,(function (p1__11478_SHARP_){return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"all-packages","all-packages",1123981067),p1__11478_SHARP_], null));
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
lt.plugins.elm_light.packages.idx_active = (function idx_active(items){return cljs.core.first.call(null,cljs.core.keep_indexed.call(null,(function (p1__11480_SHARP_,p2__11479_SHARP_){if(cljs.core.truth_(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(p2__11479_SHARP_)))
{return p1__11480_SHARP_;
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
lt.plugins.elm_light.packages.on_pkg_sel = (function on_pkg_sel(){var items_11522 = new cljs.core.Keyword(null,"ac-packages","ac-packages",1548109226).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.elm_light.packages.elm_packages));var temp__4090__auto___11523 = lt.plugins.elm_light.packages.idx_active.call(null,items_11522);if(cljs.core.truth_(temp__4090__auto___11523))
{var idx_11524 = temp__4090__auto___11523;lt.object.assoc_in_BANG_.call(null,lt.plugins.elm_light.packages.elm_packages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ac-versions","ac-versions",3107155800)], null),new cljs.core.Keyword(null,"versions","versions",3323818509).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,items_11522,idx_11524)));
lt.object.assoc_in_BANG_.call(null,lt.plugins.elm_light.packages.elm_packages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ac-version","ac-version",2051259807)], null),cljs.core.first.call(null,new cljs.core.Keyword(null,"versions","versions",3323818509).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,items_11522,idx_11524))));
lt.object.assoc_in_BANG_.call(null,lt.plugins.elm_light.packages.elm_packages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ac-package","ac-package",892589325)], null),new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,items_11522,idx_11524)));
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
return (function (p1__11481_SHARP_){if(cljs.core._EQ_.call(null,p1__11481_SHARP_,0))
{lt.objs.notifos.done_working.call(null);
} else
{lt.objs.notifos.set_msg_BANG_.call(null,"Error installing elm package",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),"error",new cljs.core.Keyword(null,"timeout","timeout",3994960083),5000], null));
}
lt.object.raise.call(null,lt.plugins.elm_light.packages.elm_packages,new cljs.core.Keyword(null,"elm.show.project.packages","elm.show.project.packages",3385102109),new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.elm_light.packages.elm_packages)));
return lt.object.raise.call(null,lt.plugins.elm_light.graph.dependency_graph,new cljs.core.Keyword(null,"elm.graph.show-dependencies","elm.graph.show-dependencies",3464547203),new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.elm_light.packages.elm_packages)),false);
});})(proc,args))
);
proc.stdout.on("data",((function (proc,args){
return (function (p1__11482_SHARP_){return lt.objs.notifos.msg_STAR_.call(null,[cljs.core.str("Package install: "),cljs.core.str(p1__11482_SHARP_)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"timeout","timeout",3994960083),5000], null));
});})(proc,args))
);
return proc.stderr.on("data",((function (proc,args){
return (function (p1__11483_SHARP_){return lt.objs.console.error.call(null,[cljs.core.str(p1__11483_SHARP_)].join(''));
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
lt.plugins.elm_light.packages.PackageRow = quiescent.component.call(null,(function (p__11484){var map__11485 = p__11484;var map__11485__$1 = ((cljs.core.seq_QMARK_.call(null,map__11485))?cljs.core.apply.call(null,cljs.core.hash_map,map__11485):map__11485);var on_browse = cljs.core.get.call(null,map__11485__$1,new cljs.core.Keyword(null,"on-browse","on-browse",587885994));var on_remove = cljs.core.get.call(null,map__11485__$1,new cljs.core.Keyword(null,"on-remove","on-remove",1033879460));var exact = cljs.core.get.call(null,map__11485__$1,new cljs.core.Keyword(null,"exact","exact",1110851185));var range = cljs.core.get.call(null,map__11485__$1,new cljs.core.Keyword(null,"range","range",1122184367));var package$ = cljs.core.get.call(null,map__11485__$1,new cljs.core.Keyword(null,"package","package",4501809080));return quiescent.dom.tr.call(null,cljs.core.PersistentArrayMap.EMPTY,quiescent.dom.td.call(null,cljs.core.PersistentArrayMap.EMPTY,(cljs.core.truth_((function (){var and__4872__auto__ = package$;if(cljs.core.truth_(and__4872__auto__))
{return exact;
} else
{return and__4872__auto__;
}
})())?quiescent.dom.span.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",1004015509),"link",new cljs.core.Keyword(null,"onClick","onClick",3956969051),((function (map__11485,map__11485__$1,on_browse,on_remove,exact,range,package$){
return (function (){return on_browse.call(null,package$,exact);
});})(map__11485,map__11485__$1,on_browse,on_remove,exact,range,package$))
], null),package$):package$)),quiescent.dom.td.call(null,cljs.core.PersistentArrayMap.EMPTY,range),quiescent.dom.td.call(null,cljs.core.PersistentArrayMap.EMPTY,exact),quiescent.dom.td.call(null,cljs.core.PersistentArrayMap.EMPTY,(cljs.core.truth_(range)?quiescent.dom.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",3956969051),((function (map__11485,map__11485__$1,on_browse,on_remove,exact,range,package$){
return (function (){return on_remove.call(null,package$);
});})(map__11485,map__11485__$1,on_browse,on_remove,exact,range,package$))
], null),"remove"):null)));
}));
/**
* 
*/
lt.plugins.elm_light.packages.PackageTable = quiescent.component.call(null,(function (props){return quiescent.dom.table.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",1004015509),"package-table"], null),quiescent.dom.thead.call(null,cljs.core.PersistentArrayMap.EMPTY,quiescent.dom.tr.call(null,cljs.core.PersistentArrayMap.EMPTY,quiescent.dom.th.call(null,cljs.core.PersistentArrayMap.EMPTY,"Package"),quiescent.dom.th.call(null,cljs.core.PersistentArrayMap.EMPTY,"Range"),quiescent.dom.th.call(null,cljs.core.PersistentArrayMap.EMPTY,"Exact"),quiescent.dom.th.call(null,cljs.core.PersistentArrayMap.EMPTY,""))),cljs.core.apply.call(null,quiescent.dom.tbody,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__11486_SHARP_){return lt.plugins.elm_light.packages.PackageRow.call(null,cljs.core.assoc.call(null,p1__11486_SHARP_,new cljs.core.Keyword(null,"on-remove","on-remove",1033879460),new cljs.core.Keyword(null,"on-remove","on-remove",1033879460).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"on-browse","on-browse",587885994),new cljs.core.Keyword(null,"on-browse","on-browse",587885994).cljs$core$IFn$_invoke$arity$1(props)));
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
var G__11533 = (line - 1);
line = G__11533;
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
var G__11534 = (line + 1);
line = G__11534;
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
var G__11535 = (line - 1);
line = G__11535;
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
return (function (p1__11157_SHARP_){return lt.plugins.elm_light.clients.on_elm_message.call(null,client,p1__11157_SHARP_);
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
lt.plugins.elm_light.clients.start_elm_client = (function start_elm_client(p__11158){var map__11160 = p__11158;var map__11160__$1 = ((cljs.core.seq_QMARK_.call(null,map__11160))?cljs.core.apply.call(null,cljs.core.hash_map,map__11160):map__11160);var props = map__11160__$1;var client = cljs.core.get.call(null,map__11160__$1,new cljs.core.Keyword(null,"client","client",3951159101));var proj_path = cljs.core.get.call(null,map__11160__$1,new cljs.core.Keyword(null,"proj-path","proj-path",4362692615));var path = cljs.core.get.call(null,map__11160__$1,new cljs.core.Keyword(null,"path","path",1017337751));lt.objs.notifos.working.call(null,"Connecting..");
return lt.plugins.elm_light.clients.claim_reactor_port.call(null,proj_path,((function (map__11160,map__11160__$1,props,client,proj_path,path){
return (function (_,port){var worker = lt.plugins.elm_light.clients.start_elm_worker.call(null,proj_path,port,client);lt.object.merge_BANG_.call(null,client,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1017277949),lt.objs.files.basename.call(null,proj_path),new cljs.core.Keyword(null,"dir","dir",1014003711),proj_path,new cljs.core.Keyword(null,"reactor-port","reactor-port",4649590590),port,new cljs.core.Keyword(null,"worker","worker",4526786288),worker,new cljs.core.Keyword(null,"commands","commands",4706336250),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"editor.elm.lint","editor.elm.lint",1086056222),null,new cljs.core.Keyword(null,"editor.elm.make","editor.elm.make",1086078217),null,new cljs.core.Keyword(null,"editor.eval.elm","editor.eval.elm",1083015975),null,new cljs.core.Keyword(null,"editor.elm.hint","editor.elm.hint",1085937058),null,new cljs.core.Keyword(null,"elm.repl.restart","elm.repl.restart",2931654218),null,new cljs.core.Keyword(null,"docs.elm.search","docs.elm.search",737241333),null,new cljs.core.Keyword(null,"editor.elm.doc","editor.elm.doc",1570413537),null], null), null)], null));
return lt.object.add_behavior_BANG_.call(null,client,new cljs.core.Keyword("lt.plugins.elm-light.clients","send!","lt.plugins.elm-light.clients/send!",867013595));
});})(map__11160,map__11160__$1,props,client,proj_path,path))
);
});
lt.plugins.elm_light.clients.try_connect = (function try_connect(p__11161){var map__11163 = p__11161;var map__11163__$1 = ((cljs.core.seq_QMARK_.call(null,map__11163))?cljs.core.apply.call(null,cljs.core.hash_map,map__11163):map__11163);var props = map__11163__$1;var info = cljs.core.get.call(null,map__11163__$1,new cljs.core.Keyword(null,"info","info",1017141280));var path = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(info);var proj_path = lt.plugins.elm_light.utils.project_path.call(null,path);var client = lt.objs.clients.client_BANG_.call(null,new cljs.core.Keyword(null,"elm-client","elm-client",1622336068));if(cljs.core.truth_(proj_path))
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
{var map__6402 = cljs.core._nth.call(null,chunk__6399,i__6401);var map__6402__$1 = ((cljs.core.seq_QMARK_.call(null,map__6402))?cljs.core.apply.call(null,cljs.core.hash_map,map__6402):map__6402);var tag = cljs.core.get.call(null,map__6402__$1,new cljs.core.Keyword(null,"tag","tag",1014018828));var subregion = cljs.core.get.call(null,map__6402__$1,new cljs.core.Keyword(null,"subregion","subregion",1501636774));var region = cljs.core.get.call(null,map__6402__$1,new cljs.core.Keyword(null,"region","region",4374076006));var details = cljs.core.get.call(null,map__6402__$1,new cljs.core.Keyword(null,"details","details",2571625908));var overview = cljs.core.get.call(null,map__6402__$1,new cljs.core.Keyword(null,"overview","overview",1544020203));var type = cljs.core.get.call(null,map__6402__$1,new cljs.core.Keyword(null,"type","type",1017479852));var file = cljs.core.get.call(null,map__6402__$1,new cljs.core.Keyword(null,"file","file",1017047278));var map__6403_6424 = lt.plugins.elm_light.__GT_lt_range.call(null,region);var map__6403_6425__$1 = ((cljs.core.seq_QMARK_.call(null,map__6403_6424))?cljs.core.apply.call(null,cljs.core.hash_map,map__6403_6424):map__6403_6424);var to_6426 = cljs.core.get.call(null,map__6403_6425__$1,new cljs.core.Keyword(null,"to","to",1013907949));var from_6427 = cljs.core.get.call(null,map__6403_6425__$1,new cljs.core.Keyword(null,"from","from",1017056028));var msg_6428 = [cljs.core.str(overview),cljs.core.str("\n"),cljs.core.str(lt.plugins.elm_light.colorize_msg.call(null,details))].join('');if((cljs.core._EQ_.call(null,path,file)) && (cljs.core._EQ_.call(null,type,"warning")))
{lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"linter-result!","linter-result!",4482067001),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",1124275658),tag,new cljs.core.Keyword(null,"details","details",2571625908),msg_6428,new cljs.core.Keyword(null,"category","category",1064415344),new cljs.core.Keyword(null,"warning","warning",2138350350),new cljs.core.Keyword(null,"code-range","code-range",3297446095),lt.plugins.elm_light.__GT_lt_range.call(null,(function (){var or__4884__auto__ = subregion;if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return region;
}
})())], null));
} else
{if((cljs.core._EQ_.call(null,path,file)) && (cljs.core._EQ_.call(null,type,"error")))
{lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"linter-result!","linter-result!",4482067001),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"titshle","titshle",4001834783),tag,new cljs.core.Keyword(null,"details","details",2571625908),msg_6428,new cljs.core.Keyword(null,"category","category",1064415344),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"code-range","code-range",3297446095),lt.plugins.elm_light.__GT_lt_range.call(null,(function (){var or__4884__auto__ = subregion;if(cljs.core.truth_(or__4884__auto__))
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
var G__6429 = seq__6398;
var G__6430 = chunk__6399;
var G__6431 = count__6400;
var G__6432 = (i__6401 + 1);
seq__6398 = G__6429;
chunk__6399 = G__6430;
count__6400 = G__6431;
i__6401 = G__6432;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__6398);if(temp__4092__auto__)
{var seq__6398__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6398__$1))
{var c__5632__auto__ = cljs.core.chunk_first.call(null,seq__6398__$1);{
var G__6433 = cljs.core.chunk_rest.call(null,seq__6398__$1);
var G__6434 = c__5632__auto__;
var G__6435 = cljs.core.count.call(null,c__5632__auto__);
var G__6436 = 0;
seq__6398 = G__6433;
chunk__6399 = G__6434;
count__6400 = G__6435;
i__6401 = G__6436;
continue;
}
} else
{var map__6404 = cljs.core.first.call(null,seq__6398__$1);var map__6404__$1 = ((cljs.core.seq_QMARK_.call(null,map__6404))?cljs.core.apply.call(null,cljs.core.hash_map,map__6404):map__6404);var tag = cljs.core.get.call(null,map__6404__$1,new cljs.core.Keyword(null,"tag","tag",1014018828));var subregion = cljs.core.get.call(null,map__6404__$1,new cljs.core.Keyword(null,"subregion","subregion",1501636774));var region = cljs.core.get.call(null,map__6404__$1,new cljs.core.Keyword(null,"region","region",4374076006));var details = cljs.core.get.call(null,map__6404__$1,new cljs.core.Keyword(null,"details","details",2571625908));var overview = cljs.core.get.call(null,map__6404__$1,new cljs.core.Keyword(null,"overview","overview",1544020203));var type = cljs.core.get.call(null,map__6404__$1,new cljs.core.Keyword(null,"type","type",1017479852));var file = cljs.core.get.call(null,map__6404__$1,new cljs.core.Keyword(null,"file","file",1017047278));var map__6405_6437 = lt.plugins.elm_light.__GT_lt_range.call(null,region);var map__6405_6438__$1 = ((cljs.core.seq_QMARK_.call(null,map__6405_6437))?cljs.core.apply.call(null,cljs.core.hash_map,map__6405_6437):map__6405_6437);var to_6439 = cljs.core.get.call(null,map__6405_6438__$1,new cljs.core.Keyword(null,"to","to",1013907949));var from_6440 = cljs.core.get.call(null,map__6405_6438__$1,new cljs.core.Keyword(null,"from","from",1017056028));var msg_6441 = [cljs.core.str(overview),cljs.core.str("\n"),cljs.core.str(lt.plugins.elm_light.colorize_msg.call(null,details))].join('');if((cljs.core._EQ_.call(null,path,file)) && (cljs.core._EQ_.call(null,type,"warning")))
{lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"linter-result!","linter-result!",4482067001),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",1124275658),tag,new cljs.core.Keyword(null,"details","details",2571625908),msg_6441,new cljs.core.Keyword(null,"category","category",1064415344),new cljs.core.Keyword(null,"warning","warning",2138350350),new cljs.core.Keyword(null,"code-range","code-range",3297446095),lt.plugins.elm_light.__GT_lt_range.call(null,(function (){var or__4884__auto__ = subregion;if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return region;
}
})())], null));
} else
{if((cljs.core._EQ_.call(null,path,file)) && (cljs.core._EQ_.call(null,type,"error")))
{lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"linter-result!","linter-result!",4482067001),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"titshle","titshle",4001834783),tag,new cljs.core.Keyword(null,"details","details",2571625908),msg_6441,new cljs.core.Keyword(null,"category","category",1064415344),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"code-range","code-range",3297446095),lt.plugins.elm_light.__GT_lt_range.call(null,(function (){var or__4884__auto__ = subregion;if(cljs.core.truth_(or__4884__auto__))
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
var G__6442 = cljs.core.next.call(null,seq__6398__$1);
var G__6443 = null;
var G__6444 = 0;
var G__6445 = 0;
seq__6398 = G__6442;
chunk__6399 = G__6443;
count__6400 = G__6444;
i__6401 = G__6445;
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
lt.plugins.elm_light.create_hints = (function create_hints(completions){return cljs.core.map.call(null,(function (p1__6406_SHARP_){return {"text": new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(p1__6406_SHARP_), "completion": new cljs.core.Keyword(null,"completion","completion",4767668046).cljs$core$IFn$_invoke$arity$1(p1__6406_SHARP_)};
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
lt.plugins.elm_light.__BEH__eval_BANG_ = (function __BEH__eval_BANG_(this$,event){var map__6408 = event;var map__6408__$1 = ((cljs.core.seq_QMARK_.call(null,map__6408))?cljs.core.apply.call(null,cljs.core.hash_map,map__6408):map__6408);var origin = cljs.core.get.call(null,map__6408__$1,new cljs.core.Keyword(null,"origin","origin",4300251800));var info = cljs.core.get.call(null,map__6408__$1,new cljs.core.Keyword(null,"info","info",1017141280));lt.objs.notifos.working.call(null,"Evaluating elm...");
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
lt.plugins.elm_light.__BEH__repl_restart_BANG_ = (function __BEH__repl_restart_BANG_(p__6409){var map__6411 = p__6409;var map__6411__$1 = ((cljs.core.seq_QMARK_.call(null,map__6411))?cljs.core.apply.call(null,cljs.core.hash_map,map__6411):map__6411);var ed = map__6411__$1;var info = cljs.core.get.call(null,map__6411__$1,new cljs.core.Keyword(null,"info","info",1017141280));var temp__4092__auto__ = new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));if(cljs.core.truth_(temp__4092__auto__))
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
var b_6446 = (function (){var or__4884__auto__ = cljs.core.first.call(null,lt.object.by_tag.call(null,new cljs.core.Keyword(null,"browser","browser",1164844698)));if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return lt.objs.browser.add.call(null);
}
})();var get_url_6447 = ((function (b_6446,path,client){
return (function (){return [cljs.core.str("http://localhost:"),cljs.core.str(new cljs.core.Keyword(null,"reactor-port","reactor-port",4649590590).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client))),cljs.core.str(path),cljs.core.str((cljs.core.truth_(debug_QMARK_)?"?debug":""))].join('');
});})(b_6446,path,client))
;if(cljs.core.truth_(new cljs.core.Keyword(null,"connected","connected",4729661051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client))))
{lt.object.raise.call(null,b_6446,new cljs.core.Keyword(null,"navigate!","navigate!",1766726722),get_url_6447.call(null));
} else
{lt.util.js.wait.call(null,100,((function (b_6446,get_url_6447,path,client){
return (function (){return lt.object.raise.call(null,b_6446,new cljs.core.Keyword(null,"navigate!","navigate!",1766726722),get_url_6447.call(null));
});})(b_6446,get_url_6447,path,client))
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
}catch (e6413){var e_6448 = e6413;lt.objs.notifos.set_msg_BANG_.call(null,"Elm format reported errors. See console for details",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),"error",new cljs.core.Keyword(null,"timeout","timeout",3994960083),5000], null));
lt.objs.console.error.call(null,e_6448.message);
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
lt.plugins.elm_light.linter.status_class = (function status_class(p__11325){var map__11327 = p__11325;var map__11327__$1 = ((cljs.core.seq_QMARK_.call(null,map__11327))?cljs.core.apply.call(null,cljs.core.hash_map,map__11327):map__11327);var warnings = cljs.core.get.call(null,map__11327__$1,new cljs.core.Keyword(null,"warnings","warnings",1511995337));var errors = cljs.core.get.call(null,map__11327__$1,new cljs.core.Keyword(null,"errors","errors",4014236381));if((errors > 0))
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
lt.plugins.elm_light.linter.status_text = (function status_text(p__11328){var map__11330 = p__11328;var map__11330__$1 = ((cljs.core.seq_QMARK_.call(null,map__11330))?cljs.core.apply.call(null,cljs.core.hash_map,map__11330):map__11330);var warnings = cljs.core.get.call(null,map__11330__$1,new cljs.core.Keyword(null,"warnings","warnings",1511995337));var errors = cljs.core.get.call(null,map__11330__$1,new cljs.core.Keyword(null,"errors","errors",4014236381));return [cljs.core.str("Lint status: "),cljs.core.str(errors),cljs.core.str("/"),cljs.core.str(warnings)].join('');
});
lt.plugins.elm_light.linter.__GT_status_ui = (function __GT_status_ui(p__11331){var map__11333 = p__11331;var map__11333__$1 = ((cljs.core.seq_QMARK_.call(null,map__11333))?cljs.core.apply.call(null,cljs.core.hash_map,map__11333):map__11333);var lint_summary = cljs.core.get.call(null,map__11333__$1,new cljs.core.Keyword(null,"lint-summary","lint-summary",2275048270));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("lint-status "),cljs.core.str(lt.plugins.elm_light.linter.status_class.call(null,lint_summary))].join('')], null),lt.plugins.elm_light.linter.status_text.call(null,lint_summary)], null);
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
return (function (p__11336){var vec__11337 = p__11336;var k = cljs.core.nth.call(null,vec__11337,0,null);var v = cljs.core.nth.call(null,vec__11337,1,null);return new cljs.core.PersistentArrayMap.fromArray([k,cljs.core.count.call(null,v)], true, false);
});})(results,temp__4090__auto__))
,cljs.core.group_by.call(null,new cljs.core.Keyword(null,"category","category",1064415344),cljs.core.map.call(null,new cljs.core.Keyword(null,"result","result",4374444943),cljs.core.vals.call(null,results)))));
} else
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",1110689146),0,new cljs.core.Keyword(null,"warning","warning",2138350350),0], null);
}
});
lt.plugins.elm_light.linter.update_status_for_editor = (function update_status_for_editor(ed){var map__11340 = lt.plugins.elm_light.linter.grouped_lint_count.call(null,ed);var map__11340__$1 = ((cljs.core.seq_QMARK_.call(null,map__11340))?cljs.core.apply.call(null,cljs.core.hash_map,map__11340):map__11340);var warning = cljs.core.get.call(null,map__11340__$1,new cljs.core.Keyword(null,"warning","warning",2138350350));var error = cljs.core.get.call(null,map__11340__$1,new cljs.core.Keyword(null,"error","error",1110689146));return lt.object.raise.call(null,lt.plugins.elm_light.linter.statusbar_lint_summary,new cljs.core.Keyword(null,"update!","update!",779473898),((function (map__11340,map__11340__$1,warning,error){
return (function (p1__11338_SHARP_){return cljs.core.assoc.call(null,p1__11338_SHARP_,new cljs.core.Keyword(null,"warnings","warnings",1511995337),(function (){var or__4884__auto__ = warning;if(cljs.core.truth_(or__4884__auto__))
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
});})(map__11340,map__11340__$1,warning,error))
);
});
lt.plugins.elm_light.linter.__BEH__update_linter_on_editor_change = (function __BEH__update_linter_on_editor_change(ed){return lt.plugins.elm_light.linter.update_status_for_editor.call(null,ed);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.linter","update-linter-on-editor-change","lt.plugins.elm-light.linter/update-linter-on-editor-change",2858337088),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.linter.__BEH__update_linter_on_editor_change,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"focus","focus",1111509066),null], null), null));
lt.plugins.elm_light.linter.remove_widget = (function remove_widget(ed,el){try{lt.util.dom.remove.call(null,el);
}catch (e11342){var e_11395 = e11342;}return lt.objs.editor.focus.call(null,ed);
});
lt.plugins.elm_light.linter.inline_ui = (function inline_ui(ed,p__11345){var map__11353 = p__11345;var map__11353__$1 = ((cljs.core.seq_QMARK_.call(null,map__11353))?cljs.core.apply.call(null,cljs.core.hash_map,map__11353):map__11353);var category = cljs.core.get.call(null,map__11353__$1,new cljs.core.Keyword(null,"category","category",1064415344));var details = cljs.core.get.call(null,map__11353__$1,new cljs.core.Keyword(null,"details","details",2571625908));var title = cljs.core.get.call(null,map__11353__$1,new cljs.core.Keyword(null,"title","title",1124275658));var e__6289__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tabindex","tabindex",4410954191),-1,new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("linter-res "),cljs.core.str((function (){var or__4884__auto__ = cljs.core.name.call(null,category);if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return "error";
}
})())].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.title","p.title",3057381068),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.details","div.details",4139669847),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),details], null)], null)], null));var seq__11354_11396 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blur","blur",1016931289),((function (e__6289__auto__,map__11353,map__11353__$1,category,details,title){
return (function (p1__11343_SHARP_){return lt.plugins.elm_light.linter.remove_widget.call(null,ed,p1__11343_SHARP_.target);
});})(e__6289__auto__,map__11353,map__11353__$1,category,details,title))
,new cljs.core.Keyword(null,"keydown","keydown",4493897459),((function (e__6289__auto__,map__11353,map__11353__$1,category,details,title){
return (function (p1__11344_SHARP_){var kc = p1__11344_SHARP_.keyCode;if(cljs.core._EQ_.call(null,kc,27))
{return lt.plugins.elm_light.linter.remove_widget.call(null,ed,p1__11344_SHARP_.target);
} else
{return null;
}
});})(e__6289__auto__,map__11353,map__11353__$1,category,details,title))
], null)));var chunk__11355_11397 = null;var count__11356_11398 = 0;var i__11357_11399 = 0;while(true){
if((i__11357_11399 < count__11356_11398))
{var vec__11358_11400 = cljs.core._nth.call(null,chunk__11355_11397,i__11357_11399);var ev__6290__auto___11401 = cljs.core.nth.call(null,vec__11358_11400,0,null);var func__6291__auto___11402 = cljs.core.nth.call(null,vec__11358_11400,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___11401,func__6291__auto___11402);
{
var G__11403 = seq__11354_11396;
var G__11404 = chunk__11355_11397;
var G__11405 = count__11356_11398;
var G__11406 = (i__11357_11399 + 1);
seq__11354_11396 = G__11403;
chunk__11355_11397 = G__11404;
count__11356_11398 = G__11405;
i__11357_11399 = G__11406;
continue;
}
} else
{var temp__4092__auto___11407 = cljs.core.seq.call(null,seq__11354_11396);if(temp__4092__auto___11407)
{var seq__11354_11408__$1 = temp__4092__auto___11407;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11354_11408__$1))
{var c__5632__auto___11409 = cljs.core.chunk_first.call(null,seq__11354_11408__$1);{
var G__11410 = cljs.core.chunk_rest.call(null,seq__11354_11408__$1);
var G__11411 = c__5632__auto___11409;
var G__11412 = cljs.core.count.call(null,c__5632__auto___11409);
var G__11413 = 0;
seq__11354_11396 = G__11410;
chunk__11355_11397 = G__11411;
count__11356_11398 = G__11412;
i__11357_11399 = G__11413;
continue;
}
} else
{var vec__11359_11414 = cljs.core.first.call(null,seq__11354_11408__$1);var ev__6290__auto___11415 = cljs.core.nth.call(null,vec__11359_11414,0,null);var func__6291__auto___11416 = cljs.core.nth.call(null,vec__11359_11414,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___11415,func__6291__auto___11416);
{
var G__11417 = cljs.core.next.call(null,seq__11354_11408__$1);
var G__11418 = null;
var G__11419 = 0;
var G__11420 = 0;
seq__11354_11396 = G__11417;
chunk__11355_11397 = G__11418;
count__11356_11398 = G__11419;
i__11357_11399 = G__11420;
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
lt.plugins.elm_light.linter.add_widget = (function add_widget(ed,res_id){var map__11361 = cljs.core.get_in.call(null,cljs.core.deref.call(null,ed),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linter-results","linter-results",4482067083),res_id], null));var map__11361__$1 = ((cljs.core.seq_QMARK_.call(null,map__11361))?cljs.core.apply.call(null,cljs.core.hash_map,map__11361):map__11361);var result = cljs.core.get.call(null,map__11361__$1,new cljs.core.Keyword(null,"result","result",4374444943));var mark = cljs.core.get.call(null,map__11361__$1,new cljs.core.Keyword(null,"mark","mark",1017248319));var ui = lt.plugins.elm_light.linter.inline_ui.call(null,ed,result);lt.objs.editor.__GT_cm_ed.call(null,ed).addWidget(mark.find().from,ui,{"scrollIntoView": true});
return lt.util.dom.focus.call(null,ui);
});
lt.plugins.elm_light.linter.create_mark = (function create_mark(ed,p__11362){var map__11364 = p__11362;var map__11364__$1 = ((cljs.core.seq_QMARK_.call(null,map__11364))?cljs.core.apply.call(null,cljs.core.hash_map,map__11364):map__11364);var code_range = cljs.core.get.call(null,map__11364__$1,new cljs.core.Keyword(null,"code-range","code-range",3297446095));var category = cljs.core.get.call(null,map__11364__$1,new cljs.core.Keyword(null,"category","category",1064415344));var from = new cljs.core.Keyword(null,"from","from",1017056028).cljs$core$IFn$_invoke$arity$1(code_range);var to = ((!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"to","to",1013907949).cljs$core$IFn$_invoke$arity$1(code_range),from)))?new cljs.core.Keyword(null,"to","to",1013907949).cljs$core$IFn$_invoke$arity$1(code_range):cljs.core.assoc.call(null,from,new cljs.core.Keyword(null,"ch","ch",1013907415),(lt.objs.editor.line_length.call(null,ed,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(from)) - 1)));return lt.objs.editor.mark.call(null,ed,from,to,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",1004015509),[cljs.core.str("lint-"),cljs.core.str((function (){var or__4884__auto__ = cljs.core.name.call(null,category);if(cljs.core.truth_(or__4884__auto__))
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
lt.plugins.elm_light.linter.__BEH__clear_linter_results_BANG_ = (function __BEH__clear_linter_results_BANG_(ed){var seq__11371_11421 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"linter-results","linter-results",4482067083).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));var chunk__11372_11422 = null;var count__11373_11423 = 0;var i__11374_11424 = 0;while(true){
if((i__11374_11424 < count__11373_11423))
{var vec__11375_11425 = cljs.core._nth.call(null,chunk__11372_11422,i__11374_11424);var id_11426 = cljs.core.nth.call(null,vec__11375_11425,0,null);var res_11427 = cljs.core.nth.call(null,vec__11375_11425,1,null);var temp__4092__auto___11428 = new cljs.core.Keyword(null,"mark","mark",1017248319).cljs$core$IFn$_invoke$arity$1(res_11427);if(cljs.core.truth_(temp__4092__auto___11428))
{var m_11429 = temp__4092__auto___11428;m_11429.clear();
} else
{}
var temp__4092__auto___11430 = new cljs.core.Keyword(null,"widget","widget",4520824246).cljs$core$IFn$_invoke$arity$1(res_11427);if(cljs.core.truth_(temp__4092__auto___11430))
{var w_11431 = temp__4092__auto___11430;lt.util.dom.remove.call(null,w_11431);
} else
{}
{
var G__11432 = seq__11371_11421;
var G__11433 = chunk__11372_11422;
var G__11434 = count__11373_11423;
var G__11435 = (i__11374_11424 + 1);
seq__11371_11421 = G__11432;
chunk__11372_11422 = G__11433;
count__11373_11423 = G__11434;
i__11374_11424 = G__11435;
continue;
}
} else
{var temp__4092__auto___11436 = cljs.core.seq.call(null,seq__11371_11421);if(temp__4092__auto___11436)
{var seq__11371_11437__$1 = temp__4092__auto___11436;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11371_11437__$1))
{var c__5632__auto___11438 = cljs.core.chunk_first.call(null,seq__11371_11437__$1);{
var G__11439 = cljs.core.chunk_rest.call(null,seq__11371_11437__$1);
var G__11440 = c__5632__auto___11438;
var G__11441 = cljs.core.count.call(null,c__5632__auto___11438);
var G__11442 = 0;
seq__11371_11421 = G__11439;
chunk__11372_11422 = G__11440;
count__11373_11423 = G__11441;
i__11374_11424 = G__11442;
continue;
}
} else
{var vec__11376_11443 = cljs.core.first.call(null,seq__11371_11437__$1);var id_11444 = cljs.core.nth.call(null,vec__11376_11443,0,null);var res_11445 = cljs.core.nth.call(null,vec__11376_11443,1,null);var temp__4092__auto___11446__$1 = new cljs.core.Keyword(null,"mark","mark",1017248319).cljs$core$IFn$_invoke$arity$1(res_11445);if(cljs.core.truth_(temp__4092__auto___11446__$1))
{var m_11447 = temp__4092__auto___11446__$1;m_11447.clear();
} else
{}
var temp__4092__auto___11448__$1 = new cljs.core.Keyword(null,"widget","widget",4520824246).cljs$core$IFn$_invoke$arity$1(res_11445);if(cljs.core.truth_(temp__4092__auto___11448__$1))
{var w_11449 = temp__4092__auto___11448__$1;lt.util.dom.remove.call(null,w_11449);
} else
{}
{
var G__11450 = cljs.core.next.call(null,seq__11371_11437__$1);
var G__11451 = null;
var G__11452 = 0;
var G__11453 = 0;
seq__11371_11421 = G__11450;
chunk__11372_11422 = G__11451;
count__11373_11423 = G__11452;
i__11374_11424 = G__11453;
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
lt.plugins.elm_light.linter.find_current_lint_mark = (function find_current_lint_mark(ed){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__11377_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"linter","linter",4206213986),p1__11377_SHARP_.lttype);
}),lt.objs.editor.find_marks.call(null,ed,lt.objs.editor.__GT_cursor.call(null,ed))));
});
lt.plugins.elm_light.linter.get_widget_by_mark = (function get_widget_by_mark(ed,mark){return cljs.core.get_in.call(null,cljs.core.deref.call(null,ed),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linter-results","linter-results",4482067083),mark.ltlintid,new cljs.core.Keyword(null,"widget","widget",4520824246)], null));
});
lt.plugins.elm_light.linter.mark__GT_pos = (function mark__GT_pos(mark){var cm_pos = mark.find().from;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",1013907415),cm_pos.ch,new cljs.core.Keyword(null,"line","line",1017226086),cm_pos.line], null);
});
lt.plugins.elm_light.linter.get_all_lint_marks = (function get_all_lint_marks(ed){return cljs.core.sort_by.call(null,(function (p1__11379_SHARP_){return cljs.core.juxt.call(null,new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"ch","ch",1013907415)).call(null,lt.plugins.elm_light.linter.mark__GT_pos.call(null,p1__11379_SHARP_));
}),cljs.core.filter.call(null,(function (p1__11378_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"linter","linter",4206213986),p1__11378_SHARP_.lttype);
}),lt.objs.editor.__GT_cm_ed.call(null,ed).getAllMarks()));
});
lt.plugins.elm_light.linter.split_with_mark = (function split_with_mark(ed){var all_marks = lt.plugins.elm_light.linter.get_all_lint_marks.call(null,ed);var curr_mark = lt.plugins.elm_light.linter.find_current_lint_mark.call(null,ed);return cljs.core.split_with.call(null,((function (all_marks,curr_mark){
return (function (p1__11380_SHARP_){return !(cljs.core._EQ_.call(null,(cljs.core.truth_(curr_mark)?curr_mark.ltlintid:null),p1__11380_SHARP_.ltlintid));
});})(all_marks,curr_mark))
,all_marks);
});
lt.plugins.elm_light.linter.find_next_mark = (function find_next_mark(ed){var vec__11382 = lt.plugins.elm_light.linter.split_with_mark.call(null,ed);var ms1 = cljs.core.nth.call(null,vec__11382,0,null);var ms2 = cljs.core.nth.call(null,vec__11382,1,null);return cljs.core.first.call(null,cljs.core.into.call(null,cljs.core.vec.call(null,cljs.core.drop.call(null,1,ms2)),ms1));
});
lt.plugins.elm_light.linter.find_prev_mark = (function find_prev_mark(ed){var vec__11384 = lt.plugins.elm_light.linter.split_with_mark.call(null,ed);var ms1 = cljs.core.nth.call(null,vec__11384,0,null);var ms2 = cljs.core.nth.call(null,vec__11384,1,null);return cljs.core.first.call(null,cljs.core.into.call(null,cljs.core.reverse.call(null,cljs.core.drop.call(null,1,ms2)),ms1));
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
lt.plugins.elm_light.test.deps__GT_named = (function deps__GT_named(deps){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__11538){var vec__11539 = p__11538;var k = cljs.core.nth.call(null,vec__11539,0,null);var v = cljs.core.nth.call(null,vec__11539,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.elm_light.utils.nskw__GT_name.call(null,k),v], null);
}),deps));
});
lt.plugins.elm_light.test.__GT_test_config = (function __GT_test_config(project_cfg){return cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.assoc.call(null,cljs.core.update_in.call(null,project_cfg,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-directories","source-directories",4475397259)], null),lt.plugins.elm_light.test.__GT_test_src_dirs),new cljs.core.Keyword(null,"exposed-modules","exposed-modules",4185867084),cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependencies","dependencies",1517678747)], null),(function (p1__11540_SHARP_){return cljs.core.merge.call(null,p1__11540_SHARP_,lt.plugins.elm_light.test.default_test_deps);
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
return (function (p1__11541_SHARP_){return cljs.core.println.call(null,[cljs.core.str("Test package install: "),cljs.core.str(p1__11541_SHARP_)].join(''));
});})(args,proc))
);
proc.stderr.on("data",((function (args,proc){
return (function (p1__11542_SHARP_){return lt.objs.console.error.call(null,[cljs.core.str(p1__11542_SHARP_)].join(''));
});})(args,proc))
);
proc.on("exit",((function (args,proc){
return (function (p1__11543_SHARP_){if(cljs.core._EQ_.call(null,p1__11543_SHARP_,0))
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