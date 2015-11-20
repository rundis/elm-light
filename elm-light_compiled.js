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
{var o = (function (){var obj11112 = {};return obj11112;
})();var seq__11113_11126 = cljs.core.seq.call(null,obj);var chunk__11114_11127 = null;var count__11115_11128 = 0;var i__11116_11129 = 0;while(true){
if((i__11116_11129 < count__11115_11128))
{var vec__11117_11130 = cljs.core._nth.call(null,chunk__11114_11127,i__11116_11129);var k_11131 = cljs.core.nth.call(null,vec__11117_11130,0,null);var v_11132 = cljs.core.nth.call(null,vec__11117_11130,1,null);(o[cljs.core.name.call(null,k_11131)] = js_props.call(null,v_11132));
{
var G__11133 = seq__11113_11126;
var G__11134 = chunk__11114_11127;
var G__11135 = count__11115_11128;
var G__11136 = (i__11116_11129 + 1);
seq__11113_11126 = G__11133;
chunk__11114_11127 = G__11134;
count__11115_11128 = G__11135;
i__11116_11129 = G__11136;
continue;
}
} else
{var temp__4092__auto___11137 = cljs.core.seq.call(null,seq__11113_11126);if(temp__4092__auto___11137)
{var seq__11113_11138__$1 = temp__4092__auto___11137;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11113_11138__$1))
{var c__5635__auto___11139 = cljs.core.chunk_first.call(null,seq__11113_11138__$1);{
var G__11140 = cljs.core.chunk_rest.call(null,seq__11113_11138__$1);
var G__11141 = c__5635__auto___11139;
var G__11142 = cljs.core.count.call(null,c__5635__auto___11139);
var G__11143 = 0;
seq__11113_11126 = G__11140;
chunk__11114_11127 = G__11141;
count__11115_11128 = G__11142;
i__11116_11129 = G__11143;
continue;
}
} else
{var vec__11118_11144 = cljs.core.first.call(null,seq__11113_11138__$1);var k_11145 = cljs.core.nth.call(null,vec__11118_11144,0,null);var v_11146 = cljs.core.nth.call(null,vec__11118_11144,1,null);(o[cljs.core.name.call(null,k_11145)] = js_props.call(null,v_11146));
{
var G__11147 = cljs.core.next.call(null,seq__11113_11138__$1);
var G__11148 = null;
var G__11149 = 0;
var G__11150 = 0;
seq__11113_11126 = G__11147;
chunk__11114_11127 = G__11148;
count__11115_11128 = G__11149;
i__11116_11129 = G__11150;
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
quiescent.component = (function component(renderer){var react_component = React.createClass({"render": (function (){var this$ = this;var _STAR_component_STAR_11120 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return cljs.core.apply.call(null,renderer,(this$.props["value"]),(this$.props["statics"]));
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11120;
}}), "shouldComponentUpdate": (function (next_props,_){var this$ = this;return cljs.core.not_EQ_.call(null,(this$.props["value"]),(next_props["value"]));
})});return ((function (react_component){
return (function() { 
var G__11151__delegate = function (value,static_args){return react_component.call(null,{"statics": static_args, "value": value});
};
var G__11151 = function (value,var_args){
var static_args = null;if (arguments.length > 1) {
  static_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__11151__delegate.call(this,value,static_args);};
G__11151.cljs$lang$maxFixedArity = 1;
G__11151.cljs$lang$applyTo = (function (arglist__11152){
var value = cljs.core.first(arglist__11152);
var static_args = cljs.core.rest(arglist__11152);
return G__11151__delegate(value,static_args);
});
G__11151.cljs$core$IFn$_invoke$arity$variadic = G__11151__delegate;
return G__11151;
})()
;
;})(react_component))
});
/**
* Wrapper component used to mix-in lifecycle access
*/
quiescent.WrapperComponent = React.createClass({"componentWillUnmount": (function (){var this$ = this;var temp__4092__auto__ = (this$.props["onWillUnmount"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_11125 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null);
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11125;
}} else
{return null;
}
}), "componentWillUpdate": (function (_,___$1){var this$ = this;var temp__4092__auto__ = (this$.props["onWillUpdate"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_11124 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null);
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11124;
}} else
{return null;
}
}), "componentWillMount": (function (){var this$ = this;var temp__4092__auto__ = (this$.props["onWillMount"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_11123 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null);
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11123;
}} else
{return null;
}
}), "componentDidMount": (function (){var this$ = this;var temp__4092__auto__ = (this$.props["onMount"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_11122 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null,this$.getDOMNode());
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11122;
}} else
{return null;
}
}), "componentDidUpdate": (function (prev_props,prev_state){var this$ = this;var temp__4092__auto__ = (this$.props["onUpdate"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_11121 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null,this$.getDOMNode());
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11121;
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
var wrapper__delegate = function (child,kvs){var props = quiescent.js_props.call(null,cljs.core.apply.call(null,cljs.core.array_map,new cljs.core.Keyword(null,"wrappee","wrappee",2609412088),child,kvs));var temp__4092__auto___11153 = (child.props["key"]);if(cljs.core.truth_(temp__4092__auto___11153))
{var key_11154 = temp__4092__auto___11153;(props["key"] = key_11154);
} else
{}
return quiescent.WrapperComponent.call(null,props);
};
var wrapper = function (child,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrapper__delegate.call(this,child,kvs);};
wrapper.cljs$lang$maxFixedArity = 1;
wrapper.cljs$lang$applyTo = (function (arglist__11155){
var child = cljs.core.first(arglist__11155);
var kvs = cljs.core.rest(arglist__11155);
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
var a__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__7537_8485 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__7538_8486 = null;var count__7539_8487 = 0;var i__7540_8488 = 0;while(true){
if((i__7540_8488 < count__7539_8487))
{var arg__6537__auto___8489 = cljs.core._nth.call(null,chunk__7538_8486,i__7540_8488);a__6536__auto__.push(arg__6537__auto___8489);
{
var G__8490 = seq__7537_8485;
var G__8491 = chunk__7538_8486;
var G__8492 = count__7539_8487;
var G__8493 = (i__7540_8488 + 1);
seq__7537_8485 = G__8490;
chunk__7538_8486 = G__8491;
count__7539_8487 = G__8492;
i__7540_8488 = G__8493;
continue;
}
} else
{var temp__4092__auto___8494 = cljs.core.seq.call(null,seq__7537_8485);if(temp__4092__auto___8494)
{var seq__7537_8495__$1 = temp__4092__auto___8494;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7537_8495__$1))
{var c__5635__auto___8496 = cljs.core.chunk_first.call(null,seq__7537_8495__$1);{
var G__8497 = cljs.core.chunk_rest.call(null,seq__7537_8495__$1);
var G__8498 = c__5635__auto___8496;
var G__8499 = cljs.core.count.call(null,c__5635__auto___8496);
var G__8500 = 0;
seq__7537_8485 = G__8497;
chunk__7538_8486 = G__8498;
count__7539_8487 = G__8499;
i__7540_8488 = G__8500;
continue;
}
} else
{var arg__6537__auto___8501 = cljs.core.first.call(null,seq__7537_8495__$1);a__6536__auto__.push(arg__6537__auto___8501);
{
var G__8502 = cljs.core.next.call(null,seq__7537_8495__$1);
var G__8503 = null;
var G__8504 = 0;
var G__8505 = 0;
seq__7537_8485 = G__8502;
chunk__7538_8486 = G__8503;
count__7539_8487 = G__8504;
i__7540_8488 = G__8505;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.a.apply(null,a__6536__auto__);
};
var a = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return a__delegate.call(this,args__6535__auto__);};
a.cljs$lang$maxFixedArity = 0;
a.cljs$lang$applyTo = (function (arglist__8506){
var args__6535__auto__ = cljs.core.seq(arglist__8506);
return a__delegate(args__6535__auto__);
});
a.cljs$core$IFn$_invoke$arity$variadic = a__delegate;
return a;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.abbr = (function() { 
var abbr__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__7545_8507 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__7546_8508 = null;var count__7547_8509 = 0;var i__7548_8510 = 0;while(true){
if((i__7548_8510 < count__7547_8509))
{var arg__6537__auto___8511 = cljs.core._nth.call(null,chunk__7546_8508,i__7548_8510);a__6536__auto__.push(arg__6537__auto___8511);
{
var G__8512 = seq__7545_8507;
var G__8513 = chunk__7546_8508;
var G__8514 = count__7547_8509;
var G__8515 = (i__7548_8510 + 1);
seq__7545_8507 = G__8512;
chunk__7546_8508 = G__8513;
count__7547_8509 = G__8514;
i__7548_8510 = G__8515;
continue;
}
} else
{var temp__4092__auto___8516 = cljs.core.seq.call(null,seq__7545_8507);if(temp__4092__auto___8516)
{var seq__7545_8517__$1 = temp__4092__auto___8516;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7545_8517__$1))
{var c__5635__auto___8518 = cljs.core.chunk_first.call(null,seq__7545_8517__$1);{
var G__8519 = cljs.core.chunk_rest.call(null,seq__7545_8517__$1);
var G__8520 = c__5635__auto___8518;
var G__8521 = cljs.core.count.call(null,c__5635__auto___8518);
var G__8522 = 0;
seq__7545_8507 = G__8519;
chunk__7546_8508 = G__8520;
count__7547_8509 = G__8521;
i__7548_8510 = G__8522;
continue;
}
} else
{var arg__6537__auto___8523 = cljs.core.first.call(null,seq__7545_8517__$1);a__6536__auto__.push(arg__6537__auto___8523);
{
var G__8524 = cljs.core.next.call(null,seq__7545_8517__$1);
var G__8525 = null;
var G__8526 = 0;
var G__8527 = 0;
seq__7545_8507 = G__8524;
chunk__7546_8508 = G__8525;
count__7547_8509 = G__8526;
i__7548_8510 = G__8527;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.abbr.apply(null,a__6536__auto__);
};
var abbr = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return abbr__delegate.call(this,args__6535__auto__);};
abbr.cljs$lang$maxFixedArity = 0;
abbr.cljs$lang$applyTo = (function (arglist__8528){
var args__6535__auto__ = cljs.core.seq(arglist__8528);
return abbr__delegate(args__6535__auto__);
});
abbr.cljs$core$IFn$_invoke$arity$variadic = abbr__delegate;
return abbr;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.address = (function() { 
var address__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__7553_8529 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__7554_8530 = null;var count__7555_8531 = 0;var i__7556_8532 = 0;while(true){
if((i__7556_8532 < count__7555_8531))
{var arg__6537__auto___8533 = cljs.core._nth.call(null,chunk__7554_8530,i__7556_8532);a__6536__auto__.push(arg__6537__auto___8533);
{
var G__8534 = seq__7553_8529;
var G__8535 = chunk__7554_8530;
var G__8536 = count__7555_8531;
var G__8537 = (i__7556_8532 + 1);
seq__7553_8529 = G__8534;
chunk__7554_8530 = G__8535;
count__7555_8531 = G__8536;
i__7556_8532 = G__8537;
continue;
}
} else
{var temp__4092__auto___8538 = cljs.core.seq.call(null,seq__7553_8529);if(temp__4092__auto___8538)
{var seq__7553_8539__$1 = temp__4092__auto___8538;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7553_8539__$1))
{var c__5635__auto___8540 = cljs.core.chunk_first.call(null,seq__7553_8539__$1);{
var G__8541 = cljs.core.chunk_rest.call(null,seq__7553_8539__$1);
var G__8542 = c__5635__auto___8540;
var G__8543 = cljs.core.count.call(null,c__5635__auto___8540);
var G__8544 = 0;
seq__7553_8529 = G__8541;
chunk__7554_8530 = G__8542;
count__7555_8531 = G__8543;
i__7556_8532 = G__8544;
continue;
}
} else
{var arg__6537__auto___8545 = cljs.core.first.call(null,seq__7553_8539__$1);a__6536__auto__.push(arg__6537__auto___8545);
{
var G__8546 = cljs.core.next.call(null,seq__7553_8539__$1);
var G__8547 = null;
var G__8548 = 0;
var G__8549 = 0;
seq__7553_8529 = G__8546;
chunk__7554_8530 = G__8547;
count__7555_8531 = G__8548;
i__7556_8532 = G__8549;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.address.apply(null,a__6536__auto__);
};
var address = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return address__delegate.call(this,args__6535__auto__);};
address.cljs$lang$maxFixedArity = 0;
address.cljs$lang$applyTo = (function (arglist__8550){
var args__6535__auto__ = cljs.core.seq(arglist__8550);
return address__delegate(args__6535__auto__);
});
address.cljs$core$IFn$_invoke$arity$variadic = address__delegate;
return address;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.area = (function() { 
var area__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__7561_8551 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__7562_8552 = null;var count__7563_8553 = 0;var i__7564_8554 = 0;while(true){
if((i__7564_8554 < count__7563_8553))
{var arg__6537__auto___8555 = cljs.core._nth.call(null,chunk__7562_8552,i__7564_8554);a__6536__auto__.push(arg__6537__auto___8555);
{
var G__8556 = seq__7561_8551;
var G__8557 = chunk__7562_8552;
var G__8558 = count__7563_8553;
var G__8559 = (i__7564_8554 + 1);
seq__7561_8551 = G__8556;
chunk__7562_8552 = G__8557;
count__7563_8553 = G__8558;
i__7564_8554 = G__8559;
continue;
}
} else
{var temp__4092__auto___8560 = cljs.core.seq.call(null,seq__7561_8551);if(temp__4092__auto___8560)
{var seq__7561_8561__$1 = temp__4092__auto___8560;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7561_8561__$1))
{var c__5635__auto___8562 = cljs.core.chunk_first.call(null,seq__7561_8561__$1);{
var G__8563 = cljs.core.chunk_rest.call(null,seq__7561_8561__$1);
var G__8564 = c__5635__auto___8562;
var G__8565 = cljs.core.count.call(null,c__5635__auto___8562);
var G__8566 = 0;
seq__7561_8551 = G__8563;
chunk__7562_8552 = G__8564;
count__7563_8553 = G__8565;
i__7564_8554 = G__8566;
continue;
}
} else
{var arg__6537__auto___8567 = cljs.core.first.call(null,seq__7561_8561__$1);a__6536__auto__.push(arg__6537__auto___8567);
{
var G__8568 = cljs.core.next.call(null,seq__7561_8561__$1);
var G__8569 = null;
var G__8570 = 0;
var G__8571 = 0;
seq__7561_8551 = G__8568;
chunk__7562_8552 = G__8569;
count__7563_8553 = G__8570;
i__7564_8554 = G__8571;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.area.apply(null,a__6536__auto__);
};
var area = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return area__delegate.call(this,args__6535__auto__);};
area.cljs$lang$maxFixedArity = 0;
area.cljs$lang$applyTo = (function (arglist__8572){
var args__6535__auto__ = cljs.core.seq(arglist__8572);
return area__delegate(args__6535__auto__);
});
area.cljs$core$IFn$_invoke$arity$variadic = area__delegate;
return area;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.article = (function() { 
var article__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__7569_8573 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__7570_8574 = null;var count__7571_8575 = 0;var i__7572_8576 = 0;while(true){
if((i__7572_8576 < count__7571_8575))
{var arg__6537__auto___8577 = cljs.core._nth.call(null,chunk__7570_8574,i__7572_8576);a__6536__auto__.push(arg__6537__auto___8577);
{
var G__8578 = seq__7569_8573;
var G__8579 = chunk__7570_8574;
var G__8580 = count__7571_8575;
var G__8581 = (i__7572_8576 + 1);
seq__7569_8573 = G__8578;
chunk__7570_8574 = G__8579;
count__7571_8575 = G__8580;
i__7572_8576 = G__8581;
continue;
}
} else
{var temp__4092__auto___8582 = cljs.core.seq.call(null,seq__7569_8573);if(temp__4092__auto___8582)
{var seq__7569_8583__$1 = temp__4092__auto___8582;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7569_8583__$1))
{var c__5635__auto___8584 = cljs.core.chunk_first.call(null,seq__7569_8583__$1);{
var G__8585 = cljs.core.chunk_rest.call(null,seq__7569_8583__$1);
var G__8586 = c__5635__auto___8584;
var G__8587 = cljs.core.count.call(null,c__5635__auto___8584);
var G__8588 = 0;
seq__7569_8573 = G__8585;
chunk__7570_8574 = G__8586;
count__7571_8575 = G__8587;
i__7572_8576 = G__8588;
continue;
}
} else
{var arg__6537__auto___8589 = cljs.core.first.call(null,seq__7569_8583__$1);a__6536__auto__.push(arg__6537__auto___8589);
{
var G__8590 = cljs.core.next.call(null,seq__7569_8583__$1);
var G__8591 = null;
var G__8592 = 0;
var G__8593 = 0;
seq__7569_8573 = G__8590;
chunk__7570_8574 = G__8591;
count__7571_8575 = G__8592;
i__7572_8576 = G__8593;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.article.apply(null,a__6536__auto__);
};
var article = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return article__delegate.call(this,args__6535__auto__);};
article.cljs$lang$maxFixedArity = 0;
article.cljs$lang$applyTo = (function (arglist__8594){
var args__6535__auto__ = cljs.core.seq(arglist__8594);
return article__delegate(args__6535__auto__);
});
article.cljs$core$IFn$_invoke$arity$variadic = article__delegate;
return article;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.aside = (function() { 
var aside__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__7577_8595 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__7578_8596 = null;var count__7579_8597 = 0;var i__7580_8598 = 0;while(true){
if((i__7580_8598 < count__7579_8597))
{var arg__6537__auto___8599 = cljs.core._nth.call(null,chunk__7578_8596,i__7580_8598);a__6536__auto__.push(arg__6537__auto___8599);
{
var G__8600 = seq__7577_8595;
var G__8601 = chunk__7578_8596;
var G__8602 = count__7579_8597;
var G__8603 = (i__7580_8598 + 1);
seq__7577_8595 = G__8600;
chunk__7578_8596 = G__8601;
count__7579_8597 = G__8602;
i__7580_8598 = G__8603;
continue;
}
} else
{var temp__4092__auto___8604 = cljs.core.seq.call(null,seq__7577_8595);if(temp__4092__auto___8604)
{var seq__7577_8605__$1 = temp__4092__auto___8604;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7577_8605__$1))
{var c__5635__auto___8606 = cljs.core.chunk_first.call(null,seq__7577_8605__$1);{
var G__8607 = cljs.core.chunk_rest.call(null,seq__7577_8605__$1);
var G__8608 = c__5635__auto___8606;
var G__8609 = cljs.core.count.call(null,c__5635__auto___8606);
var G__8610 = 0;
seq__7577_8595 = G__8607;
chunk__7578_8596 = G__8608;
count__7579_8597 = G__8609;
i__7580_8598 = G__8610;
continue;
}
} else
{var arg__6537__auto___8611 = cljs.core.first.call(null,seq__7577_8605__$1);a__6536__auto__.push(arg__6537__auto___8611);
{
var G__8612 = cljs.core.next.call(null,seq__7577_8605__$1);
var G__8613 = null;
var G__8614 = 0;
var G__8615 = 0;
seq__7577_8595 = G__8612;
chunk__7578_8596 = G__8613;
count__7579_8597 = G__8614;
i__7580_8598 = G__8615;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.aside.apply(null,a__6536__auto__);
};
var aside = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return aside__delegate.call(this,args__6535__auto__);};
aside.cljs$lang$maxFixedArity = 0;
aside.cljs$lang$applyTo = (function (arglist__8616){
var args__6535__auto__ = cljs.core.seq(arglist__8616);
return aside__delegate(args__6535__auto__);
});
aside.cljs$core$IFn$_invoke$arity$variadic = aside__delegate;
return aside;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.audio = (function() { 
var audio__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__7585_8617 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__7586_8618 = null;var count__7587_8619 = 0;var i__7588_8620 = 0;while(true){
if((i__7588_8620 < count__7587_8619))
{var arg__6537__auto___8621 = cljs.core._nth.call(null,chunk__7586_8618,i__7588_8620);a__6536__auto__.push(arg__6537__auto___8621);
{
var G__8622 = seq__7585_8617;
var G__8623 = chunk__7586_8618;
var G__8624 = count__7587_8619;
var G__8625 = (i__7588_8620 + 1);
seq__7585_8617 = G__8622;
chunk__7586_8618 = G__8623;
count__7587_8619 = G__8624;
i__7588_8620 = G__8625;
continue;
}
} else
{var temp__4092__auto___8626 = cljs.core.seq.call(null,seq__7585_8617);if(temp__4092__auto___8626)
{var seq__7585_8627__$1 = temp__4092__auto___8626;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7585_8627__$1))
{var c__5635__auto___8628 = cljs.core.chunk_first.call(null,seq__7585_8627__$1);{
var G__8629 = cljs.core.chunk_rest.call(null,seq__7585_8627__$1);
var G__8630 = c__5635__auto___8628;
var G__8631 = cljs.core.count.call(null,c__5635__auto___8628);
var G__8632 = 0;
seq__7585_8617 = G__8629;
chunk__7586_8618 = G__8630;
count__7587_8619 = G__8631;
i__7588_8620 = G__8632;
continue;
}
} else
{var arg__6537__auto___8633 = cljs.core.first.call(null,seq__7585_8627__$1);a__6536__auto__.push(arg__6537__auto___8633);
{
var G__8634 = cljs.core.next.call(null,seq__7585_8627__$1);
var G__8635 = null;
var G__8636 = 0;
var G__8637 = 0;
seq__7585_8617 = G__8634;
chunk__7586_8618 = G__8635;
count__7587_8619 = G__8636;
i__7588_8620 = G__8637;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.audio.apply(null,a__6536__auto__);
};
var audio = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return audio__delegate.call(this,args__6535__auto__);};
audio.cljs$lang$maxFixedArity = 0;
audio.cljs$lang$applyTo = (function (arglist__8638){
var args__6535__auto__ = cljs.core.seq(arglist__8638);
return audio__delegate(args__6535__auto__);
});
audio.cljs$core$IFn$_invoke$arity$variadic = audio__delegate;
return audio;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.b = (function() { 
var b__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__7593_8639 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__7594_8640 = null;var count__7595_8641 = 0;var i__7596_8642 = 0;while(true){
if((i__7596_8642 < count__7595_8641))
{var arg__6537__auto___8643 = cljs.core._nth.call(null,chunk__7594_8640,i__7596_8642);a__6536__auto__.push(arg__6537__auto___8643);
{
var G__8644 = seq__7593_8639;
var G__8645 = chunk__7594_8640;
var G__8646 = count__7595_8641;
var G__8647 = (i__7596_8642 + 1);
seq__7593_8639 = G__8644;
chunk__7594_8640 = G__8645;
count__7595_8641 = G__8646;
i__7596_8642 = G__8647;
continue;
}
} else
{var temp__4092__auto___8648 = cljs.core.seq.call(null,seq__7593_8639);if(temp__4092__auto___8648)
{var seq__7593_8649__$1 = temp__4092__auto___8648;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7593_8649__$1))
{var c__5635__auto___8650 = cljs.core.chunk_first.call(null,seq__7593_8649__$1);{
var G__8651 = cljs.core.chunk_rest.call(null,seq__7593_8649__$1);
var G__8652 = c__5635__auto___8650;
var G__8653 = cljs.core.count.call(null,c__5635__auto___8650);
var G__8654 = 0;
seq__7593_8639 = G__8651;
chunk__7594_8640 = G__8652;
count__7595_8641 = G__8653;
i__7596_8642 = G__8654;
continue;
}
} else
{var arg__6537__auto___8655 = cljs.core.first.call(null,seq__7593_8649__$1);a__6536__auto__.push(arg__6537__auto___8655);
{
var G__8656 = cljs.core.next.call(null,seq__7593_8649__$1);
var G__8657 = null;
var G__8658 = 0;
var G__8659 = 0;
seq__7593_8639 = G__8656;
chunk__7594_8640 = G__8657;
count__7595_8641 = G__8658;
i__7596_8642 = G__8659;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.b.apply(null,a__6536__auto__);
};
var b = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return b__delegate.call(this,args__6535__auto__);};
b.cljs$lang$maxFixedArity = 0;
b.cljs$lang$applyTo = (function (arglist__8660){
var args__6535__auto__ = cljs.core.seq(arglist__8660);
return b__delegate(args__6535__auto__);
});
b.cljs$core$IFn$_invoke$arity$variadic = b__delegate;
return b;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.base = (function() { 
var base__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__7601_8661 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__7602_8662 = null;var count__7603_8663 = 0;var i__7604_8664 = 0;while(true){
if((i__7604_8664 < count__7603_8663))
{var arg__6537__auto___8665 = cljs.core._nth.call(null,chunk__7602_8662,i__7604_8664);a__6536__auto__.push(arg__6537__auto___8665);
{
var G__8666 = seq__7601_8661;
var G__8667 = chunk__7602_8662;
var G__8668 = count__7603_8663;
var G__8669 = (i__7604_8664 + 1);
seq__7601_8661 = G__8666;
chunk__7602_8662 = G__8667;
count__7603_8663 = G__8668;
i__7604_8664 = G__8669;
continue;
}
} else
{var temp__4092__auto___8670 = cljs.core.seq.call(null,seq__7601_8661);if(temp__4092__auto___8670)
{var seq__7601_8671__$1 = temp__4092__auto___8670;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7601_8671__$1))
{var c__5635__auto___8672 = cljs.core.chunk_first.call(null,seq__7601_8671__$1);{
var G__8673 = cljs.core.chunk_rest.call(null,seq__7601_8671__$1);
var G__8674 = c__5635__auto___8672;
var G__8675 = cljs.core.count.call(null,c__5635__auto___8672);
var G__8676 = 0;
seq__7601_8661 = G__8673;
chunk__7602_8662 = G__8674;
count__7603_8663 = G__8675;
i__7604_8664 = G__8676;
continue;
}
} else
{var arg__6537__auto___8677 = cljs.core.first.call(null,seq__7601_8671__$1);a__6536__auto__.push(arg__6537__auto___8677);
{
var G__8678 = cljs.core.next.call(null,seq__7601_8671__$1);
var G__8679 = null;
var G__8680 = 0;
var G__8681 = 0;
seq__7601_8661 = G__8678;
chunk__7602_8662 = G__8679;
count__7603_8663 = G__8680;
i__7604_8664 = G__8681;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.base.apply(null,a__6536__auto__);
};
var base = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return base__delegate.call(this,args__6535__auto__);};
base.cljs$lang$maxFixedArity = 0;
base.cljs$lang$applyTo = (function (arglist__8682){
var args__6535__auto__ = cljs.core.seq(arglist__8682);
return base__delegate(args__6535__auto__);
});
base.cljs$core$IFn$_invoke$arity$variadic = base__delegate;
return base;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.bdi = (function() { 
var bdi__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__7609_8683 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__7610_8684 = null;var count__7611_8685 = 0;var i__7612_8686 = 0;while(true){
if((i__7612_8686 < count__7611_8685))
{var arg__6537__auto___8687 = cljs.core._nth.call(null,chunk__7610_8684,i__7612_8686);a__6536__auto__.push(arg__6537__auto___8687);
{
var G__8688 = seq__7609_8683;
var G__8689 = chunk__7610_8684;
var G__8690 = count__7611_8685;
var G__8691 = (i__7612_8686 + 1);
seq__7609_8683 = G__8688;
chunk__7610_8684 = G__8689;
count__7611_8685 = G__8690;
i__7612_8686 = G__8691;
continue;
}
} else
{var temp__4092__auto___8692 = cljs.core.seq.call(null,seq__7609_8683);if(temp__4092__auto___8692)
{var seq__7609_8693__$1 = temp__4092__auto___8692;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7609_8693__$1))
{var c__5635__auto___8694 = cljs.core.chunk_first.call(null,seq__7609_8693__$1);{
var G__8695 = cljs.core.chunk_rest.call(null,seq__7609_8693__$1);
var G__8696 = c__5635__auto___8694;
var G__8697 = cljs.core.count.call(null,c__5635__auto___8694);
var G__8698 = 0;
seq__7609_8683 = G__8695;
chunk__7610_8684 = G__8696;
count__7611_8685 = G__8697;
i__7612_8686 = G__8698;
continue;
}
} else
{var arg__6537__auto___8699 = cljs.core.first.call(null,seq__7609_8693__$1);a__6536__auto__.push(arg__6537__auto___8699);
{
var G__8700 = cljs.core.next.call(null,seq__7609_8693__$1);
var G__8701 = null;
var G__8702 = 0;
var G__8703 = 0;
seq__7609_8683 = G__8700;
chunk__7610_8684 = G__8701;
count__7611_8685 = G__8702;
i__7612_8686 = G__8703;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.bdi.apply(null,a__6536__auto__);
};
var bdi = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return bdi__delegate.call(this,args__6535__auto__);};
bdi.cljs$lang$maxFixedArity = 0;
bdi.cljs$lang$applyTo = (function (arglist__8704){
var args__6535__auto__ = cljs.core.seq(arglist__8704);
return bdi__delegate(args__6535__auto__);
});
bdi.cljs$core$IFn$_invoke$arity$variadic = bdi__delegate;
return bdi;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.bdo = (function() { 
var bdo__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__7617_8705 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__7618_8706 = null;var count__7619_8707 = 0;var i__7620_8708 = 0;while(true){
if((i__7620_8708 < count__7619_8707))
{var arg__6537__auto___8709 = cljs.core._nth.call(null,chunk__7618_8706,i__7620_8708);a__6536__auto__.push(arg__6537__auto___8709);
{
var G__8710 = seq__7617_8705;
var G__8711 = chunk__7618_8706;
var G__8712 = count__7619_8707;
var G__8713 = (i__7620_8708 + 1);
seq__7617_8705 = G__8710;
chunk__7618_8706 = G__8711;
count__7619_8707 = G__8712;
i__7620_8708 = G__8713;
continue;
}
} else
{var temp__4092__auto___8714 = cljs.core.seq.call(null,seq__7617_8705);if(temp__4092__auto___8714)
{var seq__7617_8715__$1 = temp__4092__auto___8714;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7617_8715__$1))
{var c__5635__auto___8716 = cljs.core.chunk_first.call(null,seq__7617_8715__$1);{
var G__8717 = cljs.core.chunk_rest.call(null,seq__7617_8715__$1);
var G__8718 = c__5635__auto___8716;
var G__8719 = cljs.core.count.call(null,c__5635__auto___8716);
var G__8720 = 0;
seq__7617_8705 = G__8717;
chunk__7618_8706 = G__8718;
count__7619_8707 = G__8719;
i__7620_8708 = G__8720;
continue;
}
} else
{var arg__6537__auto___8721 = cljs.core.first.call(null,seq__7617_8715__$1);a__6536__auto__.push(arg__6537__auto___8721);
{
var G__8722 = cljs.core.next.call(null,seq__7617_8715__$1);
var G__8723 = null;
var G__8724 = 0;
var G__8725 = 0;
seq__7617_8705 = G__8722;
chunk__7618_8706 = G__8723;
count__7619_8707 = G__8724;
i__7620_8708 = G__8725;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.bdo.apply(null,a__6536__auto__);
};
var bdo = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return bdo__delegate.call(this,args__6535__auto__);};
bdo.cljs$lang$maxFixedArity = 0;
bdo.cljs$lang$applyTo = (function (arglist__8726){
var args__6535__auto__ = cljs.core.seq(arglist__8726);
return bdo__delegate(args__6535__auto__);
});
bdo.cljs$core$IFn$_invoke$arity$variadic = bdo__delegate;
return bdo;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.big = (function() { 
var big__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__7625_8727 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__7626_8728 = null;var count__7627_8729 = 0;var i__7628_8730 = 0;while(true){
if((i__7628_8730 < count__7627_8729))
{var arg__6537__auto___8731 = cljs.core._nth.call(null,chunk__7626_8728,i__7628_8730);a__6536__auto__.push(arg__6537__auto___8731);
{
var G__8732 = seq__7625_8727;
var G__8733 = chunk__7626_8728;
var G__8734 = count__7627_8729;
var G__8735 = (i__7628_8730 + 1);
seq__7625_8727 = G__8732;
chunk__7626_8728 = G__8733;
count__7627_8729 = G__8734;
i__7628_8730 = G__8735;
continue;
}
} else
{var temp__4092__auto___8736 = cljs.core.seq.call(null,seq__7625_8727);if(temp__4092__auto___8736)
{var seq__7625_8737__$1 = temp__4092__auto___8736;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7625_8737__$1))
{var c__5635__auto___8738 = cljs.core.chunk_first.call(null,seq__7625_8737__$1);{
var G__8739 = cljs.core.chunk_rest.call(null,seq__7625_8737__$1);
var G__8740 = c__5635__auto___8738;
var G__8741 = cljs.core.count.call(null,c__5635__auto___8738);
var G__8742 = 0;
seq__7625_8727 = G__8739;
chunk__7626_8728 = G__8740;
count__7627_8729 = G__8741;
i__7628_8730 = G__8742;
continue;
}
} else
{var arg__6537__auto___8743 = cljs.core.first.call(null,seq__7625_8737__$1);a__6536__auto__.push(arg__6537__auto___8743);
{
var G__8744 = cljs.core.next.call(null,seq__7625_8737__$1);
var G__8745 = null;
var G__8746 = 0;
var G__8747 = 0;
seq__7625_8727 = G__8744;
chunk__7626_8728 = G__8745;
count__7627_8729 = G__8746;
i__7628_8730 = G__8747;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.big.apply(null,a__6536__auto__);
};
var big = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return big__delegate.call(this,args__6535__auto__);};
big.cljs$lang$maxFixedArity = 0;
big.cljs$lang$applyTo = (function (arglist__8748){
var args__6535__auto__ = cljs.core.seq(arglist__8748);
return big__delegate(args__6535__auto__);
});
big.cljs$core$IFn$_invoke$arity$variadic = big__delegate;
return big;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.blockquote = (function() { 
var blockquote__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__7633_8749 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__7634_8750 = null;var count__7635_8751 = 0;var i__7636_8752 = 0;while(true){
if((i__7636_8752 < count__7635_8751))
{var arg__6537__auto___8753 = cljs.core._nth.call(null,chunk__7634_8750,i__7636_8752);a__6536__auto__.push(arg__6537__auto___8753);
{
var G__8754 = seq__7633_8749;
var G__8755 = chunk__7634_8750;
var G__8756 = count__7635_8751;
var G__8757 = (i__7636_8752 + 1);
seq__7633_8749 = G__8754;
chunk__7634_8750 = G__8755;
count__7635_8751 = G__8756;
i__7636_8752 = G__8757;
continue;
}
} else
{var temp__4092__auto___8758 = cljs.core.seq.call(null,seq__7633_8749);if(temp__4092__auto___8758)
{var seq__7633_8759__$1 = temp__4092__auto___8758;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7633_8759__$1))
{var c__5635__auto___8760 = cljs.core.chunk_first.call(null,seq__7633_8759__$1);{
var G__8761 = cljs.core.chunk_rest.call(null,seq__7633_8759__$1);
var G__8762 = c__5635__auto___8760;
var G__8763 = cljs.core.count.call(null,c__5635__auto___8760);
var G__8764 = 0;
seq__7633_8749 = G__8761;
chunk__7634_8750 = G__8762;
count__7635_8751 = G__8763;
i__7636_8752 = G__8764;
continue;
}
} else
{var arg__6537__auto___8765 = cljs.core.first.call(null,seq__7633_8759__$1);a__6536__auto__.push(arg__6537__auto___8765);
{
var G__8766 = cljs.core.next.call(null,seq__7633_8759__$1);
var G__8767 = null;
var G__8768 = 0;
var G__8769 = 0;
seq__7633_8749 = G__8766;
chunk__7634_8750 = G__8767;
count__7635_8751 = G__8768;
i__7636_8752 = G__8769;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.blockquote.apply(null,a__6536__auto__);
};
var blockquote = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return blockquote__delegate.call(this,args__6535__auto__);};
blockquote.cljs$lang$maxFixedArity = 0;
blockquote.cljs$lang$applyTo = (function (arglist__8770){
var args__6535__auto__ = cljs.core.seq(arglist__8770);
return blockquote__delegate(args__6535__auto__);
});
blockquote.cljs$core$IFn$_invoke$arity$variadic = blockquote__delegate;
return blockquote;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.body = (function() { 
var body__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__7641_8771 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__7642_8772 = null;var count__7643_8773 = 0;var i__7644_8774 = 0;while(true){
if((i__7644_8774 < count__7643_8773))
{var arg__6537__auto___8775 = cljs.core._nth.call(null,chunk__7642_8772,i__7644_8774);a__6536__auto__.push(arg__6537__auto___8775);
{
var G__8776 = seq__7641_8771;
var G__8777 = chunk__7642_8772;
var G__8778 = count__7643_8773;
var G__8779 = (i__7644_8774 + 1);
seq__7641_8771 = G__8776;
chunk__7642_8772 = G__8777;
count__7643_8773 = G__8778;
i__7644_8774 = G__8779;
continue;
}
} else
{var temp__4092__auto___8780 = cljs.core.seq.call(null,seq__7641_8771);if(temp__4092__auto___8780)
{var seq__7641_8781__$1 = temp__4092__auto___8780;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7641_8781__$1))
{var c__5635__auto___8782 = cljs.core.chunk_first.call(null,seq__7641_8781__$1);{
var G__8783 = cljs.core.chunk_rest.call(null,seq__7641_8781__$1);
var G__8784 = c__5635__auto___8782;
var G__8785 = cljs.core.count.call(null,c__5635__auto___8782);
var G__8786 = 0;
seq__7641_8771 = G__8783;
chunk__7642_8772 = G__8784;
count__7643_8773 = G__8785;
i__7644_8774 = G__8786;
continue;
}
} else
{var arg__6537__auto___8787 = cljs.core.first.call(null,seq__7641_8781__$1);a__6536__auto__.push(arg__6537__auto___8787);
{
var G__8788 = cljs.core.next.call(null,seq__7641_8781__$1);
var G__8789 = null;
var G__8790 = 0;
var G__8791 = 0;
seq__7641_8771 = G__8788;
chunk__7642_8772 = G__8789;
count__7643_8773 = G__8790;
i__7644_8774 = G__8791;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.body.apply(null,a__6536__auto__);
};
var body = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return body__delegate.call(this,args__6535__auto__);};
body.cljs$lang$maxFixedArity = 0;
body.cljs$lang$applyTo = (function (arglist__8792){
var args__6535__auto__ = cljs.core.seq(arglist__8792);
return body__delegate(args__6535__auto__);
});
body.cljs$core$IFn$_invoke$arity$variadic = body__delegate;
return body;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.br = (function() { 
var br__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__7649_8793 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__7650_8794 = null;var count__7651_8795 = 0;var i__7652_8796 = 0;while(true){
if((i__7652_8796 < count__7651_8795))
{var arg__6537__auto___8797 = cljs.core._nth.call(null,chunk__7650_8794,i__7652_8796);a__6536__auto__.push(arg__6537__auto___8797);
{
var G__8798 = seq__7649_8793;
var G__8799 = chunk__7650_8794;
var G__8800 = count__7651_8795;
var G__8801 = (i__7652_8796 + 1);
seq__7649_8793 = G__8798;
chunk__7650_8794 = G__8799;
count__7651_8795 = G__8800;
i__7652_8796 = G__8801;
continue;
}
} else
{var temp__4092__auto___8802 = cljs.core.seq.call(null,seq__7649_8793);if(temp__4092__auto___8802)
{var seq__7649_8803__$1 = temp__4092__auto___8802;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7649_8803__$1))
{var c__5635__auto___8804 = cljs.core.chunk_first.call(null,seq__7649_8803__$1);{
var G__8805 = cljs.core.chunk_rest.call(null,seq__7649_8803__$1);
var G__8806 = c__5635__auto___8804;
var G__8807 = cljs.core.count.call(null,c__5635__auto___8804);
var G__8808 = 0;
seq__7649_8793 = G__8805;
chunk__7650_8794 = G__8806;
count__7651_8795 = G__8807;
i__7652_8796 = G__8808;
continue;
}
} else
{var arg__6537__auto___8809 = cljs.core.first.call(null,seq__7649_8803__$1);a__6536__auto__.push(arg__6537__auto___8809);
{
var G__8810 = cljs.core.next.call(null,seq__7649_8803__$1);
var G__8811 = null;
var G__8812 = 0;
var G__8813 = 0;
seq__7649_8793 = G__8810;
chunk__7650_8794 = G__8811;
count__7651_8795 = G__8812;
i__7652_8796 = G__8813;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.br.apply(null,a__6536__auto__);
};
var br = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return br__delegate.call(this,args__6535__auto__);};
br.cljs$lang$maxFixedArity = 0;
br.cljs$lang$applyTo = (function (arglist__8814){
var args__6535__auto__ = cljs.core.seq(arglist__8814);
return br__delegate(args__6535__auto__);
});
br.cljs$core$IFn$_invoke$arity$variadic = br__delegate;
return br;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.button = (function() { 
var button__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__7657_8815 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__7658_8816 = null;var count__7659_8817 = 0;var i__7660_8818 = 0;while(true){
if((i__7660_8818 < count__7659_8817))
{var arg__6537__auto___8819 = cljs.core._nth.call(null,chunk__7658_8816,i__7660_8818);a__6536__auto__.push(arg__6537__auto___8819);
{
var G__8820 = seq__7657_8815;
var G__8821 = chunk__7658_8816;
var G__8822 = count__7659_8817;
var G__8823 = (i__7660_8818 + 1);
seq__7657_8815 = G__8820;
chunk__7658_8816 = G__8821;
count__7659_8817 = G__8822;
i__7660_8818 = G__8823;
continue;
}
} else
{var temp__4092__auto___8824 = cljs.core.seq.call(null,seq__7657_8815);if(temp__4092__auto___8824)
{var seq__7657_8825__$1 = temp__4092__auto___8824;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7657_8825__$1))
{var c__5635__auto___8826 = cljs.core.chunk_first.call(null,seq__7657_8825__$1);{
var G__8827 = cljs.core.chunk_rest.call(null,seq__7657_8825__$1);
var G__8828 = c__5635__auto___8826;
var G__8829 = cljs.core.count.call(null,c__5635__auto___8826);
var G__8830 = 0;
seq__7657_8815 = G__8827;
chunk__7658_8816 = G__8828;
count__7659_8817 = G__8829;
i__7660_8818 = G__8830;
continue;
}
} else
{var arg__6537__auto___8831 = cljs.core.first.call(null,seq__7657_8825__$1);a__6536__auto__.push(arg__6537__auto___8831);
{
var G__8832 = cljs.core.next.call(null,seq__7657_8825__$1);
var G__8833 = null;
var G__8834 = 0;
var G__8835 = 0;
seq__7657_8815 = G__8832;
chunk__7658_8816 = G__8833;
count__7659_8817 = G__8834;
i__7660_8818 = G__8835;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.button.apply(null,a__6536__auto__);
};
var button = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return button__delegate.call(this,args__6535__auto__);};
button.cljs$lang$maxFixedArity = 0;
button.cljs$lang$applyTo = (function (arglist__8836){
var args__6535__auto__ = cljs.core.seq(arglist__8836);
return button__delegate(args__6535__auto__);
});
button.cljs$core$IFn$_invoke$arity$variadic = button__delegate;
return button;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.canvas = (function() { 
var canvas__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__7665_8837 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__7666_8838 = null;var count__7667_8839 = 0;var i__7668_8840 = 0;while(true){
if((i__7668_8840 < count__7667_8839))
{var arg__6537__auto___8841 = cljs.core._nth.call(null,chunk__7666_8838,i__7668_8840);a__6536__auto__.push(arg__6537__auto___8841);
{
var G__8842 = seq__7665_8837;
var G__8843 = chunk__7666_8838;
var G__8844 = count__7667_8839;
var G__8845 = (i__7668_8840 + 1);
seq__7665_8837 = G__8842;
chunk__7666_8838 = G__8843;
count__7667_8839 = G__8844;
i__7668_8840 = G__8845;
continue;
}
} else
{var temp__4092__auto___8846 = cljs.core.seq.call(null,seq__7665_8837);if(temp__4092__auto___8846)
{var seq__7665_8847__$1 = temp__4092__auto___8846;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7665_8847__$1))
{var c__5635__auto___8848 = cljs.core.chunk_first.call(null,seq__7665_8847__$1);{
var G__8849 = cljs.core.chunk_rest.call(null,seq__7665_8847__$1);
var G__8850 = c__5635__auto___8848;
var G__8851 = cljs.core.count.call(null,c__5635__auto___8848);
var G__8852 = 0;
seq__7665_8837 = G__8849;
chunk__7666_8838 = G__8850;
count__7667_8839 = G__8851;
i__7668_8840 = G__8852;
continue;
}
} else
{var arg__6537__auto___8853 = cljs.core.first.call(null,seq__7665_8847__$1);a__6536__auto__.push(arg__6537__auto___8853);
{
var G__8854 = cljs.core.next.call(null,seq__7665_8847__$1);
var G__8855 = null;
var G__8856 = 0;
var G__8857 = 0;
seq__7665_8837 = G__8854;
chunk__7666_8838 = G__8855;
count__7667_8839 = G__8856;
i__7668_8840 = G__8857;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.canvas.apply(null,a__6536__auto__);
};
var canvas = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return canvas__delegate.call(this,args__6535__auto__);};
canvas.cljs$lang$maxFixedArity = 0;
canvas.cljs$lang$applyTo = (function (arglist__8858){
var args__6535__auto__ = cljs.core.seq(arglist__8858);
return canvas__delegate(args__6535__auto__);
});
canvas.cljs$core$IFn$_invoke$arity$variadic = canvas__delegate;
return canvas;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.caption = (function() { 
var caption__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__7673_8859 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__7674_8860 = null;var count__7675_8861 = 0;var i__7676_8862 = 0;while(true){
if((i__7676_8862 < count__7675_8861))
{var arg__6537__auto___8863 = cljs.core._nth.call(null,chunk__7674_8860,i__7676_8862);a__6536__auto__.push(arg__6537__auto___8863);
{
var G__8864 = seq__7673_8859;
var G__8865 = chunk__7674_8860;
var G__8866 = count__7675_8861;
var G__8867 = (i__7676_8862 + 1);
seq__7673_8859 = G__8864;
chunk__7674_8860 = G__8865;
count__7675_8861 = G__8866;
i__7676_8862 = G__8867;
continue;
}
} else
{var temp__4092__auto___8868 = cljs.core.seq.call(null,seq__7673_8859);if(temp__4092__auto___8868)
{var seq__7673_8869__$1 = temp__4092__auto___8868;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7673_8869__$1))
{var c__5635__auto___8870 = cljs.core.chunk_first.call(null,seq__7673_8869__$1);{
var G__8871 = cljs.core.chunk_rest.call(null,seq__7673_8869__$1);
var G__8872 = c__5635__auto___8870;
var G__8873 = cljs.core.count.call(null,c__5635__auto___8870);
var G__8874 = 0;
seq__7673_8859 = G__8871;
chunk__7674_8860 = G__8872;
count__7675_8861 = G__8873;
i__7676_8862 = G__8874;
continue;
}
} else
{var arg__6537__auto___8875 = cljs.core.first.call(null,seq__7673_8869__$1);a__6536__auto__.push(arg__6537__auto___8875);
{
var G__8876 = cljs.core.next.call(null,seq__7673_8869__$1);
var G__8877 = null;
var G__8878 = 0;
var G__8879 = 0;
seq__7673_8859 = G__8876;
chunk__7674_8860 = G__8877;
count__7675_8861 = G__8878;
i__7676_8862 = G__8879;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.caption.apply(null,a__6536__auto__);
};
var caption = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return caption__delegate.call(this,args__6535__auto__);};
caption.cljs$lang$maxFixedArity = 0;
caption.cljs$lang$applyTo = (function (arglist__8880){
var args__6535__auto__ = cljs.core.seq(arglist__8880);
return caption__delegate(args__6535__auto__);
});
caption.cljs$core$IFn$_invoke$arity$variadic = caption__delegate;
return caption;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.cite = (function() { 
var cite__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__7681_8881 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__7682_8882 = null;var count__7683_8883 = 0;var i__7684_8884 = 0;while(true){
if((i__7684_8884 < count__7683_8883))
{var arg__6537__auto___8885 = cljs.core._nth.call(null,chunk__7682_8882,i__7684_8884);a__6536__auto__.push(arg__6537__auto___8885);
{
var G__8886 = seq__7681_8881;
var G__8887 = chunk__7682_8882;
var G__8888 = count__7683_8883;
var G__8889 = (i__7684_8884 + 1);
seq__7681_8881 = G__8886;
chunk__7682_8882 = G__8887;
count__7683_8883 = G__8888;
i__7684_8884 = G__8889;
continue;
}
} else
{var temp__4092__auto___8890 = cljs.core.seq.call(null,seq__7681_8881);if(temp__4092__auto___8890)
{var seq__7681_8891__$1 = temp__4092__auto___8890;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7681_8891__$1))
{var c__5635__auto___8892 = cljs.core.chunk_first.call(null,seq__7681_8891__$1);{
var G__8893 = cljs.core.chunk_rest.call(null,seq__7681_8891__$1);
var G__8894 = c__5635__auto___8892;
var G__8895 = cljs.core.count.call(null,c__5635__auto___8892);
var G__8896 = 0;
seq__7681_8881 = G__8893;
chunk__7682_8882 = G__8894;
count__7683_8883 = G__8895;
i__7684_8884 = G__8896;
continue;
}
} else
{var arg__6537__auto___8897 = cljs.core.first.call(null,seq__7681_8891__$1);a__6536__auto__.push(arg__6537__auto___8897);
{
var G__8898 = cljs.core.next.call(null,seq__7681_8891__$1);
var G__8899 = null;
var G__8900 = 0;
var G__8901 = 0;
seq__7681_8881 = G__8898;
chunk__7682_8882 = G__8899;
count__7683_8883 = G__8900;
i__7684_8884 = G__8901;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.cite.apply(null,a__6536__auto__);
};
var cite = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return cite__delegate.call(this,args__6535__auto__);};
cite.cljs$lang$maxFixedArity = 0;
cite.cljs$lang$applyTo = (function (arglist__8902){
var args__6535__auto__ = cljs.core.seq(arglist__8902);
return cite__delegate(args__6535__auto__);
});
cite.cljs$core$IFn$_invoke$arity$variadic = cite__delegate;
return cite;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.code = (function() { 
var code__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__7689_8903 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__7690_8904 = null;var count__7691_8905 = 0;var i__7692_8906 = 0;while(true){
if((i__7692_8906 < count__7691_8905))
{var arg__6537__auto___8907 = cljs.core._nth.call(null,chunk__7690_8904,i__7692_8906);a__6536__auto__.push(arg__6537__auto___8907);
{
var G__8908 = seq__7689_8903;
var G__8909 = chunk__7690_8904;
var G__8910 = count__7691_8905;
var G__8911 = (i__7692_8906 + 1);
seq__7689_8903 = G__8908;
chunk__7690_8904 = G__8909;
count__7691_8905 = G__8910;
i__7692_8906 = G__8911;
continue;
}
} else
{var temp__4092__auto___8912 = cljs.core.seq.call(null,seq__7689_8903);if(temp__4092__auto___8912)
{var seq__7689_8913__$1 = temp__4092__auto___8912;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7689_8913__$1))
{var c__5635__auto___8914 = cljs.core.chunk_first.call(null,seq__7689_8913__$1);{
var G__8915 = cljs.core.chunk_rest.call(null,seq__7689_8913__$1);
var G__8916 = c__5635__auto___8914;
var G__8917 = cljs.core.count.call(null,c__5635__auto___8914);
var G__8918 = 0;
seq__7689_8903 = G__8915;
chunk__7690_8904 = G__8916;
count__7691_8905 = G__8917;
i__7692_8906 = G__8918;
continue;
}
} else
{var arg__6537__auto___8919 = cljs.core.first.call(null,seq__7689_8913__$1);a__6536__auto__.push(arg__6537__auto___8919);
{
var G__8920 = cljs.core.next.call(null,seq__7689_8913__$1);
var G__8921 = null;
var G__8922 = 0;
var G__8923 = 0;
seq__7689_8903 = G__8920;
chunk__7690_8904 = G__8921;
count__7691_8905 = G__8922;
i__7692_8906 = G__8923;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.code.apply(null,a__6536__auto__);
};
var code = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return code__delegate.call(this,args__6535__auto__);};
code.cljs$lang$maxFixedArity = 0;
code.cljs$lang$applyTo = (function (arglist__8924){
var args__6535__auto__ = cljs.core.seq(arglist__8924);
return code__delegate(args__6535__auto__);
});
code.cljs$core$IFn$_invoke$arity$variadic = code__delegate;
return code;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.col = (function() { 
var col__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__7697_8925 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__7698_8926 = null;var count__7699_8927 = 0;var i__7700_8928 = 0;while(true){
if((i__7700_8928 < count__7699_8927))
{var arg__6537__auto___8929 = cljs.core._nth.call(null,chunk__7698_8926,i__7700_8928);a__6536__auto__.push(arg__6537__auto___8929);
{
var G__8930 = seq__7697_8925;
var G__8931 = chunk__7698_8926;
var G__8932 = count__7699_8927;
var G__8933 = (i__7700_8928 + 1);
seq__7697_8925 = G__8930;
chunk__7698_8926 = G__8931;
count__7699_8927 = G__8932;
i__7700_8928 = G__8933;
continue;
}
} else
{var temp__4092__auto___8934 = cljs.core.seq.call(null,seq__7697_8925);if(temp__4092__auto___8934)
{var seq__7697_8935__$1 = temp__4092__auto___8934;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7697_8935__$1))
{var c__5635__auto___8936 = cljs.core.chunk_first.call(null,seq__7697_8935__$1);{
var G__8937 = cljs.core.chunk_rest.call(null,seq__7697_8935__$1);
var G__8938 = c__5635__auto___8936;
var G__8939 = cljs.core.count.call(null,c__5635__auto___8936);
var G__8940 = 0;
seq__7697_8925 = G__8937;
chunk__7698_8926 = G__8938;
count__7699_8927 = G__8939;
i__7700_8928 = G__8940;
continue;
}
} else
{var arg__6537__auto___8941 = cljs.core.first.call(null,seq__7697_8935__$1);a__6536__auto__.push(arg__6537__auto___8941);
{
var G__8942 = cljs.core.next.call(null,seq__7697_8935__$1);
var G__8943 = null;
var G__8944 = 0;
var G__8945 = 0;
seq__7697_8925 = G__8942;
chunk__7698_8926 = G__8943;
count__7699_8927 = G__8944;
i__7700_8928 = G__8945;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.col.apply(null,a__6536__auto__);
};
var col = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return col__delegate.call(this,args__6535__auto__);};
col.cljs$lang$maxFixedArity = 0;
col.cljs$lang$applyTo = (function (arglist__8946){
var args__6535__auto__ = cljs.core.seq(arglist__8946);
return col__delegate(args__6535__auto__);
});
col.cljs$core$IFn$_invoke$arity$variadic = col__delegate;
return col;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.colgroup = (function() { 
var colgroup__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__7705_8947 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__7706_8948 = null;var count__7707_8949 = 0;var i__7708_8950 = 0;while(true){
if((i__7708_8950 < count__7707_8949))
{var arg__6537__auto___8951 = cljs.core._nth.call(null,chunk__7706_8948,i__7708_8950);a__6536__auto__.push(arg__6537__auto___8951);
{
var G__8952 = seq__7705_8947;
var G__8953 = chunk__7706_8948;
var G__8954 = count__7707_8949;
var G__8955 = (i__7708_8950 + 1);
seq__7705_8947 = G__8952;
chunk__7706_8948 = G__8953;
count__7707_8949 = G__8954;
i__7708_8950 = G__8955;
continue;
}
} else
{var temp__4092__auto___8956 = cljs.core.seq.call(null,seq__7705_8947);if(temp__4092__auto___8956)
{var seq__7705_8957__$1 = temp__4092__auto___8956;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7705_8957__$1))
{var c__5635__auto___8958 = cljs.core.chunk_first.call(null,seq__7705_8957__$1);{
var G__8959 = cljs.core.chunk_rest.call(null,seq__7705_8957__$1);
var G__8960 = c__5635__auto___8958;
var G__8961 = cljs.core.count.call(null,c__5635__auto___8958);
var G__8962 = 0;
seq__7705_8947 = G__8959;
chunk__7706_8948 = G__8960;
count__7707_8949 = G__8961;
i__7708_8950 = G__8962;
continue;
}
} else
{var arg__6537__auto___8963 = cljs.core.first.call(null,seq__7705_8957__$1);a__6536__auto__.push(arg__6537__auto___8963);
{
var G__8964 = cljs.core.next.call(null,seq__7705_8957__$1);
var G__8965 = null;
var G__8966 = 0;
var G__8967 = 0;
seq__7705_8947 = G__8964;
chunk__7706_8948 = G__8965;
count__7707_8949 = G__8966;
i__7708_8950 = G__8967;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.colgroup.apply(null,a__6536__auto__);
};
var colgroup = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return colgroup__delegate.call(this,args__6535__auto__);};
colgroup.cljs$lang$maxFixedArity = 0;
colgroup.cljs$lang$applyTo = (function (arglist__8968){
var args__6535__auto__ = cljs.core.seq(arglist__8968);
return colgroup__delegate(args__6535__auto__);
});
colgroup.cljs$core$IFn$_invoke$arity$variadic = colgroup__delegate;
return colgroup;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.data = (function() { 
var data__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__7713_8969 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__7714_8970 = null;var count__7715_8971 = 0;var i__7716_8972 = 0;while(true){
if((i__7716_8972 < count__7715_8971))
{var arg__6537__auto___8973 = cljs.core._nth.call(null,chunk__7714_8970,i__7716_8972);a__6536__auto__.push(arg__6537__auto___8973);
{
var G__8974 = seq__7713_8969;
var G__8975 = chunk__7714_8970;
var G__8976 = count__7715_8971;
var G__8977 = (i__7716_8972 + 1);
seq__7713_8969 = G__8974;
chunk__7714_8970 = G__8975;
count__7715_8971 = G__8976;
i__7716_8972 = G__8977;
continue;
}
} else
{var temp__4092__auto___8978 = cljs.core.seq.call(null,seq__7713_8969);if(temp__4092__auto___8978)
{var seq__7713_8979__$1 = temp__4092__auto___8978;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7713_8979__$1))
{var c__5635__auto___8980 = cljs.core.chunk_first.call(null,seq__7713_8979__$1);{
var G__8981 = cljs.core.chunk_rest.call(null,seq__7713_8979__$1);
var G__8982 = c__5635__auto___8980;
var G__8983 = cljs.core.count.call(null,c__5635__auto___8980);
var G__8984 = 0;
seq__7713_8969 = G__8981;
chunk__7714_8970 = G__8982;
count__7715_8971 = G__8983;
i__7716_8972 = G__8984;
continue;
}
} else
{var arg__6537__auto___8985 = cljs.core.first.call(null,seq__7713_8979__$1);a__6536__auto__.push(arg__6537__auto___8985);
{
var G__8986 = cljs.core.next.call(null,seq__7713_8979__$1);
var G__8987 = null;
var G__8988 = 0;
var G__8989 = 0;
seq__7713_8969 = G__8986;
chunk__7714_8970 = G__8987;
count__7715_8971 = G__8988;
i__7716_8972 = G__8989;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.data.apply(null,a__6536__auto__);
};
var data = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return data__delegate.call(this,args__6535__auto__);};
data.cljs$lang$maxFixedArity = 0;
data.cljs$lang$applyTo = (function (arglist__8990){
var args__6535__auto__ = cljs.core.seq(arglist__8990);
return data__delegate(args__6535__auto__);
});
data.cljs$core$IFn$_invoke$arity$variadic = data__delegate;
return data;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.datalist = (function() { 
var datalist__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__7721_8991 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__7722_8992 = null;var count__7723_8993 = 0;var i__7724_8994 = 0;while(true){
if((i__7724_8994 < count__7723_8993))
{var arg__6537__auto___8995 = cljs.core._nth.call(null,chunk__7722_8992,i__7724_8994);a__6536__auto__.push(arg__6537__auto___8995);
{
var G__8996 = seq__7721_8991;
var G__8997 = chunk__7722_8992;
var G__8998 = count__7723_8993;
var G__8999 = (i__7724_8994 + 1);
seq__7721_8991 = G__8996;
chunk__7722_8992 = G__8997;
count__7723_8993 = G__8998;
i__7724_8994 = G__8999;
continue;
}
} else
{var temp__4092__auto___9000 = cljs.core.seq.call(null,seq__7721_8991);if(temp__4092__auto___9000)
{var seq__7721_9001__$1 = temp__4092__auto___9000;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7721_9001__$1))
{var c__5635__auto___9002 = cljs.core.chunk_first.call(null,seq__7721_9001__$1);{
var G__9003 = cljs.core.chunk_rest.call(null,seq__7721_9001__$1);
var G__9004 = c__5635__auto___9002;
var G__9005 = cljs.core.count.call(null,c__5635__auto___9002);
var G__9006 = 0;
seq__7721_8991 = G__9003;
chunk__7722_8992 = G__9004;
count__7723_8993 = G__9005;
i__7724_8994 = G__9006;
continue;
}
} else
{var arg__6537__auto___9007 = cljs.core.first.call(null,seq__7721_9001__$1);a__6536__auto__.push(arg__6537__auto___9007);
{
var G__9008 = cljs.core.next.call(null,seq__7721_9001__$1);
var G__9009 = null;
var G__9010 = 0;
var G__9011 = 0;
seq__7721_8991 = G__9008;
chunk__7722_8992 = G__9009;
count__7723_8993 = G__9010;
i__7724_8994 = G__9011;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.datalist.apply(null,a__6536__auto__);
};
var datalist = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return datalist__delegate.call(this,args__6535__auto__);};
datalist.cljs$lang$maxFixedArity = 0;
datalist.cljs$lang$applyTo = (function (arglist__9012){
var args__6535__auto__ = cljs.core.seq(arglist__9012);
return datalist__delegate(args__6535__auto__);
});
datalist.cljs$core$IFn$_invoke$arity$variadic = datalist__delegate;
return datalist;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.dd = (function() { 
var dd__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__7729_9013 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__7730_9014 = null;var count__7731_9015 = 0;var i__7732_9016 = 0;while(true){
if((i__7732_9016 < count__7731_9015))
{var arg__6537__auto___9017 = cljs.core._nth.call(null,chunk__7730_9014,i__7732_9016);a__6536__auto__.push(arg__6537__auto___9017);
{
var G__9018 = seq__7729_9013;
var G__9019 = chunk__7730_9014;
var G__9020 = count__7731_9015;
var G__9021 = (i__7732_9016 + 1);
seq__7729_9013 = G__9018;
chunk__7730_9014 = G__9019;
count__7731_9015 = G__9020;
i__7732_9016 = G__9021;
continue;
}
} else
{var temp__4092__auto___9022 = cljs.core.seq.call(null,seq__7729_9013);if(temp__4092__auto___9022)
{var seq__7729_9023__$1 = temp__4092__auto___9022;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7729_9023__$1))
{var c__5635__auto___9024 = cljs.core.chunk_first.call(null,seq__7729_9023__$1);{
var G__9025 = cljs.core.chunk_rest.call(null,seq__7729_9023__$1);
var G__9026 = c__5635__auto___9024;
var G__9027 = cljs.core.count.call(null,c__5635__auto___9024);
var G__9028 = 0;
seq__7729_9013 = G__9025;
chunk__7730_9014 = G__9026;
count__7731_9015 = G__9027;
i__7732_9016 = G__9028;
continue;
}
} else
{var arg__6537__auto___9029 = cljs.core.first.call(null,seq__7729_9023__$1);a__6536__auto__.push(arg__6537__auto___9029);
{
var G__9030 = cljs.core.next.call(null,seq__7729_9023__$1);
var G__9031 = null;
var G__9032 = 0;
var G__9033 = 0;
seq__7729_9013 = G__9030;
chunk__7730_9014 = G__9031;
count__7731_9015 = G__9032;
i__7732_9016 = G__9033;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.dd.apply(null,a__6536__auto__);
};
var dd = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return dd__delegate.call(this,args__6535__auto__);};
dd.cljs$lang$maxFixedArity = 0;
dd.cljs$lang$applyTo = (function (arglist__9034){
var args__6535__auto__ = cljs.core.seq(arglist__9034);
return dd__delegate(args__6535__auto__);
});
dd.cljs$core$IFn$_invoke$arity$variadic = dd__delegate;
return dd;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.del = (function() { 
var del__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__7737_9035 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__7738_9036 = null;var count__7739_9037 = 0;var i__7740_9038 = 0;while(true){
if((i__7740_9038 < count__7739_9037))
{var arg__6537__auto___9039 = cljs.core._nth.call(null,chunk__7738_9036,i__7740_9038);a__6536__auto__.push(arg__6537__auto___9039);
{
var G__9040 = seq__7737_9035;
var G__9041 = chunk__7738_9036;
var G__9042 = count__7739_9037;
var G__9043 = (i__7740_9038 + 1);
seq__7737_9035 = G__9040;
chunk__7738_9036 = G__9041;
count__7739_9037 = G__9042;
i__7740_9038 = G__9043;
continue;
}
} else
{var temp__4092__auto___9044 = cljs.core.seq.call(null,seq__7737_9035);if(temp__4092__auto___9044)
{var seq__7737_9045__$1 = temp__4092__auto___9044;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7737_9045__$1))
{var c__5635__auto___9046 = cljs.core.chunk_first.call(null,seq__7737_9045__$1);{
var G__9047 = cljs.core.chunk_rest.call(null,seq__7737_9045__$1);
var G__9048 = c__5635__auto___9046;
var G__9049 = cljs.core.count.call(null,c__5635__auto___9046);
var G__9050 = 0;
seq__7737_9035 = G__9047;
chunk__7738_9036 = G__9048;
count__7739_9037 = G__9049;
i__7740_9038 = G__9050;
continue;
}
} else
{var arg__6537__auto___9051 = cljs.core.first.call(null,seq__7737_9045__$1);a__6536__auto__.push(arg__6537__auto___9051);
{
var G__9052 = cljs.core.next.call(null,seq__7737_9045__$1);
var G__9053 = null;
var G__9054 = 0;
var G__9055 = 0;
seq__7737_9035 = G__9052;
chunk__7738_9036 = G__9053;
count__7739_9037 = G__9054;
i__7740_9038 = G__9055;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.del.apply(null,a__6536__auto__);
};
var del = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return del__delegate.call(this,args__6535__auto__);};
del.cljs$lang$maxFixedArity = 0;
del.cljs$lang$applyTo = (function (arglist__9056){
var args__6535__auto__ = cljs.core.seq(arglist__9056);
return del__delegate(args__6535__auto__);
});
del.cljs$core$IFn$_invoke$arity$variadic = del__delegate;
return del;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.details = (function() { 
var details__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__7745_9057 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__7746_9058 = null;var count__7747_9059 = 0;var i__7748_9060 = 0;while(true){
if((i__7748_9060 < count__7747_9059))
{var arg__6537__auto___9061 = cljs.core._nth.call(null,chunk__7746_9058,i__7748_9060);a__6536__auto__.push(arg__6537__auto___9061);
{
var G__9062 = seq__7745_9057;
var G__9063 = chunk__7746_9058;
var G__9064 = count__7747_9059;
var G__9065 = (i__7748_9060 + 1);
seq__7745_9057 = G__9062;
chunk__7746_9058 = G__9063;
count__7747_9059 = G__9064;
i__7748_9060 = G__9065;
continue;
}
} else
{var temp__4092__auto___9066 = cljs.core.seq.call(null,seq__7745_9057);if(temp__4092__auto___9066)
{var seq__7745_9067__$1 = temp__4092__auto___9066;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7745_9067__$1))
{var c__5635__auto___9068 = cljs.core.chunk_first.call(null,seq__7745_9067__$1);{
var G__9069 = cljs.core.chunk_rest.call(null,seq__7745_9067__$1);
var G__9070 = c__5635__auto___9068;
var G__9071 = cljs.core.count.call(null,c__5635__auto___9068);
var G__9072 = 0;
seq__7745_9057 = G__9069;
chunk__7746_9058 = G__9070;
count__7747_9059 = G__9071;
i__7748_9060 = G__9072;
continue;
}
} else
{var arg__6537__auto___9073 = cljs.core.first.call(null,seq__7745_9067__$1);a__6536__auto__.push(arg__6537__auto___9073);
{
var G__9074 = cljs.core.next.call(null,seq__7745_9067__$1);
var G__9075 = null;
var G__9076 = 0;
var G__9077 = 0;
seq__7745_9057 = G__9074;
chunk__7746_9058 = G__9075;
count__7747_9059 = G__9076;
i__7748_9060 = G__9077;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.details.apply(null,a__6536__auto__);
};
var details = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return details__delegate.call(this,args__6535__auto__);};
details.cljs$lang$maxFixedArity = 0;
details.cljs$lang$applyTo = (function (arglist__9078){
var args__6535__auto__ = cljs.core.seq(arglist__9078);
return details__delegate(args__6535__auto__);
});
details.cljs$core$IFn$_invoke$arity$variadic = details__delegate;
return details;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.dfn = (function() { 
var dfn__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__7753_9079 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__7754_9080 = null;var count__7755_9081 = 0;var i__7756_9082 = 0;while(true){
if((i__7756_9082 < count__7755_9081))
{var arg__6537__auto___9083 = cljs.core._nth.call(null,chunk__7754_9080,i__7756_9082);a__6536__auto__.push(arg__6537__auto___9083);
{
var G__9084 = seq__7753_9079;
var G__9085 = chunk__7754_9080;
var G__9086 = count__7755_9081;
var G__9087 = (i__7756_9082 + 1);
seq__7753_9079 = G__9084;
chunk__7754_9080 = G__9085;
count__7755_9081 = G__9086;
i__7756_9082 = G__9087;
continue;
}
} else
{var temp__4092__auto___9088 = cljs.core.seq.call(null,seq__7753_9079);if(temp__4092__auto___9088)
{var seq__7753_9089__$1 = temp__4092__auto___9088;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7753_9089__$1))
{var c__5635__auto___9090 = cljs.core.chunk_first.call(null,seq__7753_9089__$1);{
var G__9091 = cljs.core.chunk_rest.call(null,seq__7753_9089__$1);
var G__9092 = c__5635__auto___9090;
var G__9093 = cljs.core.count.call(null,c__5635__auto___9090);
var G__9094 = 0;
seq__7753_9079 = G__9091;
chunk__7754_9080 = G__9092;
count__7755_9081 = G__9093;
i__7756_9082 = G__9094;
continue;
}
} else
{var arg__6537__auto___9095 = cljs.core.first.call(null,seq__7753_9089__$1);a__6536__auto__.push(arg__6537__auto___9095);
{
var G__9096 = cljs.core.next.call(null,seq__7753_9089__$1);
var G__9097 = null;
var G__9098 = 0;
var G__9099 = 0;
seq__7753_9079 = G__9096;
chunk__7754_9080 = G__9097;
count__7755_9081 = G__9098;
i__7756_9082 = G__9099;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.dfn.apply(null,a__6536__auto__);
};
var dfn = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return dfn__delegate.call(this,args__6535__auto__);};
dfn.cljs$lang$maxFixedArity = 0;
dfn.cljs$lang$applyTo = (function (arglist__9100){
var args__6535__auto__ = cljs.core.seq(arglist__9100);
return dfn__delegate(args__6535__auto__);
});
dfn.cljs$core$IFn$_invoke$arity$variadic = dfn__delegate;
return dfn;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.div = (function() { 
var div__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__7761_9101 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__7762_9102 = null;var count__7763_9103 = 0;var i__7764_9104 = 0;while(true){
if((i__7764_9104 < count__7763_9103))
{var arg__6537__auto___9105 = cljs.core._nth.call(null,chunk__7762_9102,i__7764_9104);a__6536__auto__.push(arg__6537__auto___9105);
{
var G__9106 = seq__7761_9101;
var G__9107 = chunk__7762_9102;
var G__9108 = count__7763_9103;
var G__9109 = (i__7764_9104 + 1);
seq__7761_9101 = G__9106;
chunk__7762_9102 = G__9107;
count__7763_9103 = G__9108;
i__7764_9104 = G__9109;
continue;
}
} else
{var temp__4092__auto___9110 = cljs.core.seq.call(null,seq__7761_9101);if(temp__4092__auto___9110)
{var seq__7761_9111__$1 = temp__4092__auto___9110;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7761_9111__$1))
{var c__5635__auto___9112 = cljs.core.chunk_first.call(null,seq__7761_9111__$1);{
var G__9113 = cljs.core.chunk_rest.call(null,seq__7761_9111__$1);
var G__9114 = c__5635__auto___9112;
var G__9115 = cljs.core.count.call(null,c__5635__auto___9112);
var G__9116 = 0;
seq__7761_9101 = G__9113;
chunk__7762_9102 = G__9114;
count__7763_9103 = G__9115;
i__7764_9104 = G__9116;
continue;
}
} else
{var arg__6537__auto___9117 = cljs.core.first.call(null,seq__7761_9111__$1);a__6536__auto__.push(arg__6537__auto___9117);
{
var G__9118 = cljs.core.next.call(null,seq__7761_9111__$1);
var G__9119 = null;
var G__9120 = 0;
var G__9121 = 0;
seq__7761_9101 = G__9118;
chunk__7762_9102 = G__9119;
count__7763_9103 = G__9120;
i__7764_9104 = G__9121;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.div.apply(null,a__6536__auto__);
};
var div = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return div__delegate.call(this,args__6535__auto__);};
div.cljs$lang$maxFixedArity = 0;
div.cljs$lang$applyTo = (function (arglist__9122){
var args__6535__auto__ = cljs.core.seq(arglist__9122);
return div__delegate(args__6535__auto__);
});
div.cljs$core$IFn$_invoke$arity$variadic = div__delegate;
return div;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.dl = (function() { 
var dl__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__7769_9123 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__7770_9124 = null;var count__7771_9125 = 0;var i__7772_9126 = 0;while(true){
if((i__7772_9126 < count__7771_9125))
{var arg__6537__auto___9127 = cljs.core._nth.call(null,chunk__7770_9124,i__7772_9126);a__6536__auto__.push(arg__6537__auto___9127);
{
var G__9128 = seq__7769_9123;
var G__9129 = chunk__7770_9124;
var G__9130 = count__7771_9125;
var G__9131 = (i__7772_9126 + 1);
seq__7769_9123 = G__9128;
chunk__7770_9124 = G__9129;
count__7771_9125 = G__9130;
i__7772_9126 = G__9131;
continue;
}
} else
{var temp__4092__auto___9132 = cljs.core.seq.call(null,seq__7769_9123);if(temp__4092__auto___9132)
{var seq__7769_9133__$1 = temp__4092__auto___9132;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7769_9133__$1))
{var c__5635__auto___9134 = cljs.core.chunk_first.call(null,seq__7769_9133__$1);{
var G__9135 = cljs.core.chunk_rest.call(null,seq__7769_9133__$1);
var G__9136 = c__5635__auto___9134;
var G__9137 = cljs.core.count.call(null,c__5635__auto___9134);
var G__9138 = 0;
seq__7769_9123 = G__9135;
chunk__7770_9124 = G__9136;
count__7771_9125 = G__9137;
i__7772_9126 = G__9138;
continue;
}
} else
{var arg__6537__auto___9139 = cljs.core.first.call(null,seq__7769_9133__$1);a__6536__auto__.push(arg__6537__auto___9139);
{
var G__9140 = cljs.core.next.call(null,seq__7769_9133__$1);
var G__9141 = null;
var G__9142 = 0;
var G__9143 = 0;
seq__7769_9123 = G__9140;
chunk__7770_9124 = G__9141;
count__7771_9125 = G__9142;
i__7772_9126 = G__9143;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.dl.apply(null,a__6536__auto__);
};
var dl = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return dl__delegate.call(this,args__6535__auto__);};
dl.cljs$lang$maxFixedArity = 0;
dl.cljs$lang$applyTo = (function (arglist__9144){
var args__6535__auto__ = cljs.core.seq(arglist__9144);
return dl__delegate(args__6535__auto__);
});
dl.cljs$core$IFn$_invoke$arity$variadic = dl__delegate;
return dl;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.dt = (function() { 
var dt__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__7777_9145 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__7778_9146 = null;var count__7779_9147 = 0;var i__7780_9148 = 0;while(true){
if((i__7780_9148 < count__7779_9147))
{var arg__6537__auto___9149 = cljs.core._nth.call(null,chunk__7778_9146,i__7780_9148);a__6536__auto__.push(arg__6537__auto___9149);
{
var G__9150 = seq__7777_9145;
var G__9151 = chunk__7778_9146;
var G__9152 = count__7779_9147;
var G__9153 = (i__7780_9148 + 1);
seq__7777_9145 = G__9150;
chunk__7778_9146 = G__9151;
count__7779_9147 = G__9152;
i__7780_9148 = G__9153;
continue;
}
} else
{var temp__4092__auto___9154 = cljs.core.seq.call(null,seq__7777_9145);if(temp__4092__auto___9154)
{var seq__7777_9155__$1 = temp__4092__auto___9154;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7777_9155__$1))
{var c__5635__auto___9156 = cljs.core.chunk_first.call(null,seq__7777_9155__$1);{
var G__9157 = cljs.core.chunk_rest.call(null,seq__7777_9155__$1);
var G__9158 = c__5635__auto___9156;
var G__9159 = cljs.core.count.call(null,c__5635__auto___9156);
var G__9160 = 0;
seq__7777_9145 = G__9157;
chunk__7778_9146 = G__9158;
count__7779_9147 = G__9159;
i__7780_9148 = G__9160;
continue;
}
} else
{var arg__6537__auto___9161 = cljs.core.first.call(null,seq__7777_9155__$1);a__6536__auto__.push(arg__6537__auto___9161);
{
var G__9162 = cljs.core.next.call(null,seq__7777_9155__$1);
var G__9163 = null;
var G__9164 = 0;
var G__9165 = 0;
seq__7777_9145 = G__9162;
chunk__7778_9146 = G__9163;
count__7779_9147 = G__9164;
i__7780_9148 = G__9165;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.dt.apply(null,a__6536__auto__);
};
var dt = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return dt__delegate.call(this,args__6535__auto__);};
dt.cljs$lang$maxFixedArity = 0;
dt.cljs$lang$applyTo = (function (arglist__9166){
var args__6535__auto__ = cljs.core.seq(arglist__9166);
return dt__delegate(args__6535__auto__);
});
dt.cljs$core$IFn$_invoke$arity$variadic = dt__delegate;
return dt;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.em = (function() { 
var em__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__7785_9167 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__7786_9168 = null;var count__7787_9169 = 0;var i__7788_9170 = 0;while(true){
if((i__7788_9170 < count__7787_9169))
{var arg__6537__auto___9171 = cljs.core._nth.call(null,chunk__7786_9168,i__7788_9170);a__6536__auto__.push(arg__6537__auto___9171);
{
var G__9172 = seq__7785_9167;
var G__9173 = chunk__7786_9168;
var G__9174 = count__7787_9169;
var G__9175 = (i__7788_9170 + 1);
seq__7785_9167 = G__9172;
chunk__7786_9168 = G__9173;
count__7787_9169 = G__9174;
i__7788_9170 = G__9175;
continue;
}
} else
{var temp__4092__auto___9176 = cljs.core.seq.call(null,seq__7785_9167);if(temp__4092__auto___9176)
{var seq__7785_9177__$1 = temp__4092__auto___9176;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7785_9177__$1))
{var c__5635__auto___9178 = cljs.core.chunk_first.call(null,seq__7785_9177__$1);{
var G__9179 = cljs.core.chunk_rest.call(null,seq__7785_9177__$1);
var G__9180 = c__5635__auto___9178;
var G__9181 = cljs.core.count.call(null,c__5635__auto___9178);
var G__9182 = 0;
seq__7785_9167 = G__9179;
chunk__7786_9168 = G__9180;
count__7787_9169 = G__9181;
i__7788_9170 = G__9182;
continue;
}
} else
{var arg__6537__auto___9183 = cljs.core.first.call(null,seq__7785_9177__$1);a__6536__auto__.push(arg__6537__auto___9183);
{
var G__9184 = cljs.core.next.call(null,seq__7785_9177__$1);
var G__9185 = null;
var G__9186 = 0;
var G__9187 = 0;
seq__7785_9167 = G__9184;
chunk__7786_9168 = G__9185;
count__7787_9169 = G__9186;
i__7788_9170 = G__9187;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.em.apply(null,a__6536__auto__);
};
var em = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return em__delegate.call(this,args__6535__auto__);};
em.cljs$lang$maxFixedArity = 0;
em.cljs$lang$applyTo = (function (arglist__9188){
var args__6535__auto__ = cljs.core.seq(arglist__9188);
return em__delegate(args__6535__auto__);
});
em.cljs$core$IFn$_invoke$arity$variadic = em__delegate;
return em;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.embed = (function() { 
var embed__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__7801_9189 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__7802_9190 = null;var count__7803_9191 = 0;var i__7804_9192 = 0;while(true){
if((i__7804_9192 < count__7803_9191))
{var arg__6537__auto___9193 = cljs.core._nth.call(null,chunk__7802_9190,i__7804_9192);a__6536__auto__.push(arg__6537__auto___9193);
{
var G__9194 = seq__7801_9189;
var G__9195 = chunk__7802_9190;
var G__9196 = count__7803_9191;
var G__9197 = (i__7804_9192 + 1);
seq__7801_9189 = G__9194;
chunk__7802_9190 = G__9195;
count__7803_9191 = G__9196;
i__7804_9192 = G__9197;
continue;
}
} else
{var temp__4092__auto___9198 = cljs.core.seq.call(null,seq__7801_9189);if(temp__4092__auto___9198)
{var seq__7801_9199__$1 = temp__4092__auto___9198;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7801_9199__$1))
{var c__5635__auto___9200 = cljs.core.chunk_first.call(null,seq__7801_9199__$1);{
var G__9201 = cljs.core.chunk_rest.call(null,seq__7801_9199__$1);
var G__9202 = c__5635__auto___9200;
var G__9203 = cljs.core.count.call(null,c__5635__auto___9200);
var G__9204 = 0;
seq__7801_9189 = G__9201;
chunk__7802_9190 = G__9202;
count__7803_9191 = G__9203;
i__7804_9192 = G__9204;
continue;
}
} else
{var arg__6537__auto___9205 = cljs.core.first.call(null,seq__7801_9199__$1);a__6536__auto__.push(arg__6537__auto___9205);
{
var G__9206 = cljs.core.next.call(null,seq__7801_9199__$1);
var G__9207 = null;
var G__9208 = 0;
var G__9209 = 0;
seq__7801_9189 = G__9206;
chunk__7802_9190 = G__9207;
count__7803_9191 = G__9208;
i__7804_9192 = G__9209;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.embed.apply(null,a__6536__auto__);
};
var embed = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return embed__delegate.call(this,args__6535__auto__);};
embed.cljs$lang$maxFixedArity = 0;
embed.cljs$lang$applyTo = (function (arglist__9210){
var args__6535__auto__ = cljs.core.seq(arglist__9210);
return embed__delegate(args__6535__auto__);
});
embed.cljs$core$IFn$_invoke$arity$variadic = embed__delegate;
return embed;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.fieldset = (function() { 
var fieldset__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__7809_9211 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__7810_9212 = null;var count__7811_9213 = 0;var i__7812_9214 = 0;while(true){
if((i__7812_9214 < count__7811_9213))
{var arg__6537__auto___9215 = cljs.core._nth.call(null,chunk__7810_9212,i__7812_9214);a__6536__auto__.push(arg__6537__auto___9215);
{
var G__9216 = seq__7809_9211;
var G__9217 = chunk__7810_9212;
var G__9218 = count__7811_9213;
var G__9219 = (i__7812_9214 + 1);
seq__7809_9211 = G__9216;
chunk__7810_9212 = G__9217;
count__7811_9213 = G__9218;
i__7812_9214 = G__9219;
continue;
}
} else
{var temp__4092__auto___9220 = cljs.core.seq.call(null,seq__7809_9211);if(temp__4092__auto___9220)
{var seq__7809_9221__$1 = temp__4092__auto___9220;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7809_9221__$1))
{var c__5635__auto___9222 = cljs.core.chunk_first.call(null,seq__7809_9221__$1);{
var G__9223 = cljs.core.chunk_rest.call(null,seq__7809_9221__$1);
var G__9224 = c__5635__auto___9222;
var G__9225 = cljs.core.count.call(null,c__5635__auto___9222);
var G__9226 = 0;
seq__7809_9211 = G__9223;
chunk__7810_9212 = G__9224;
count__7811_9213 = G__9225;
i__7812_9214 = G__9226;
continue;
}
} else
{var arg__6537__auto___9227 = cljs.core.first.call(null,seq__7809_9221__$1);a__6536__auto__.push(arg__6537__auto___9227);
{
var G__9228 = cljs.core.next.call(null,seq__7809_9221__$1);
var G__9229 = null;
var G__9230 = 0;
var G__9231 = 0;
seq__7809_9211 = G__9228;
chunk__7810_9212 = G__9229;
count__7811_9213 = G__9230;
i__7812_9214 = G__9231;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.fieldset.apply(null,a__6536__auto__);
};
var fieldset = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return fieldset__delegate.call(this,args__6535__auto__);};
fieldset.cljs$lang$maxFixedArity = 0;
fieldset.cljs$lang$applyTo = (function (arglist__9232){
var args__6535__auto__ = cljs.core.seq(arglist__9232);
return fieldset__delegate(args__6535__auto__);
});
fieldset.cljs$core$IFn$_invoke$arity$variadic = fieldset__delegate;
return fieldset;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.figcaption = (function() { 
var figcaption__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__7817_9233 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__7818_9234 = null;var count__7819_9235 = 0;var i__7820_9236 = 0;while(true){
if((i__7820_9236 < count__7819_9235))
{var arg__6537__auto___9237 = cljs.core._nth.call(null,chunk__7818_9234,i__7820_9236);a__6536__auto__.push(arg__6537__auto___9237);
{
var G__9238 = seq__7817_9233;
var G__9239 = chunk__7818_9234;
var G__9240 = count__7819_9235;
var G__9241 = (i__7820_9236 + 1);
seq__7817_9233 = G__9238;
chunk__7818_9234 = G__9239;
count__7819_9235 = G__9240;
i__7820_9236 = G__9241;
continue;
}
} else
{var temp__4092__auto___9242 = cljs.core.seq.call(null,seq__7817_9233);if(temp__4092__auto___9242)
{var seq__7817_9243__$1 = temp__4092__auto___9242;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7817_9243__$1))
{var c__5635__auto___9244 = cljs.core.chunk_first.call(null,seq__7817_9243__$1);{
var G__9245 = cljs.core.chunk_rest.call(null,seq__7817_9243__$1);
var G__9246 = c__5635__auto___9244;
var G__9247 = cljs.core.count.call(null,c__5635__auto___9244);
var G__9248 = 0;
seq__7817_9233 = G__9245;
chunk__7818_9234 = G__9246;
count__7819_9235 = G__9247;
i__7820_9236 = G__9248;
continue;
}
} else
{var arg__6537__auto___9249 = cljs.core.first.call(null,seq__7817_9243__$1);a__6536__auto__.push(arg__6537__auto___9249);
{
var G__9250 = cljs.core.next.call(null,seq__7817_9243__$1);
var G__9251 = null;
var G__9252 = 0;
var G__9253 = 0;
seq__7817_9233 = G__9250;
chunk__7818_9234 = G__9251;
count__7819_9235 = G__9252;
i__7820_9236 = G__9253;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.figcaption.apply(null,a__6536__auto__);
};
var figcaption = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return figcaption__delegate.call(this,args__6535__auto__);};
figcaption.cljs$lang$maxFixedArity = 0;
figcaption.cljs$lang$applyTo = (function (arglist__9254){
var args__6535__auto__ = cljs.core.seq(arglist__9254);
return figcaption__delegate(args__6535__auto__);
});
figcaption.cljs$core$IFn$_invoke$arity$variadic = figcaption__delegate;
return figcaption;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.figure = (function() { 
var figure__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__7825_9255 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__7826_9256 = null;var count__7827_9257 = 0;var i__7828_9258 = 0;while(true){
if((i__7828_9258 < count__7827_9257))
{var arg__6537__auto___9259 = cljs.core._nth.call(null,chunk__7826_9256,i__7828_9258);a__6536__auto__.push(arg__6537__auto___9259);
{
var G__9260 = seq__7825_9255;
var G__9261 = chunk__7826_9256;
var G__9262 = count__7827_9257;
var G__9263 = (i__7828_9258 + 1);
seq__7825_9255 = G__9260;
chunk__7826_9256 = G__9261;
count__7827_9257 = G__9262;
i__7828_9258 = G__9263;
continue;
}
} else
{var temp__4092__auto___9264 = cljs.core.seq.call(null,seq__7825_9255);if(temp__4092__auto___9264)
{var seq__7825_9265__$1 = temp__4092__auto___9264;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7825_9265__$1))
{var c__5635__auto___9266 = cljs.core.chunk_first.call(null,seq__7825_9265__$1);{
var G__9267 = cljs.core.chunk_rest.call(null,seq__7825_9265__$1);
var G__9268 = c__5635__auto___9266;
var G__9269 = cljs.core.count.call(null,c__5635__auto___9266);
var G__9270 = 0;
seq__7825_9255 = G__9267;
chunk__7826_9256 = G__9268;
count__7827_9257 = G__9269;
i__7828_9258 = G__9270;
continue;
}
} else
{var arg__6537__auto___9271 = cljs.core.first.call(null,seq__7825_9265__$1);a__6536__auto__.push(arg__6537__auto___9271);
{
var G__9272 = cljs.core.next.call(null,seq__7825_9265__$1);
var G__9273 = null;
var G__9274 = 0;
var G__9275 = 0;
seq__7825_9255 = G__9272;
chunk__7826_9256 = G__9273;
count__7827_9257 = G__9274;
i__7828_9258 = G__9275;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.figure.apply(null,a__6536__auto__);
};
var figure = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return figure__delegate.call(this,args__6535__auto__);};
figure.cljs$lang$maxFixedArity = 0;
figure.cljs$lang$applyTo = (function (arglist__9276){
var args__6535__auto__ = cljs.core.seq(arglist__9276);
return figure__delegate(args__6535__auto__);
});
figure.cljs$core$IFn$_invoke$arity$variadic = figure__delegate;
return figure;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.footer = (function() { 
var footer__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__7833_9277 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__7834_9278 = null;var count__7835_9279 = 0;var i__7836_9280 = 0;while(true){
if((i__7836_9280 < count__7835_9279))
{var arg__6537__auto___9281 = cljs.core._nth.call(null,chunk__7834_9278,i__7836_9280);a__6536__auto__.push(arg__6537__auto___9281);
{
var G__9282 = seq__7833_9277;
var G__9283 = chunk__7834_9278;
var G__9284 = count__7835_9279;
var G__9285 = (i__7836_9280 + 1);
seq__7833_9277 = G__9282;
chunk__7834_9278 = G__9283;
count__7835_9279 = G__9284;
i__7836_9280 = G__9285;
continue;
}
} else
{var temp__4092__auto___9286 = cljs.core.seq.call(null,seq__7833_9277);if(temp__4092__auto___9286)
{var seq__7833_9287__$1 = temp__4092__auto___9286;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7833_9287__$1))
{var c__5635__auto___9288 = cljs.core.chunk_first.call(null,seq__7833_9287__$1);{
var G__9289 = cljs.core.chunk_rest.call(null,seq__7833_9287__$1);
var G__9290 = c__5635__auto___9288;
var G__9291 = cljs.core.count.call(null,c__5635__auto___9288);
var G__9292 = 0;
seq__7833_9277 = G__9289;
chunk__7834_9278 = G__9290;
count__7835_9279 = G__9291;
i__7836_9280 = G__9292;
continue;
}
} else
{var arg__6537__auto___9293 = cljs.core.first.call(null,seq__7833_9287__$1);a__6536__auto__.push(arg__6537__auto___9293);
{
var G__9294 = cljs.core.next.call(null,seq__7833_9287__$1);
var G__9295 = null;
var G__9296 = 0;
var G__9297 = 0;
seq__7833_9277 = G__9294;
chunk__7834_9278 = G__9295;
count__7835_9279 = G__9296;
i__7836_9280 = G__9297;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.footer.apply(null,a__6536__auto__);
};
var footer = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return footer__delegate.call(this,args__6535__auto__);};
footer.cljs$lang$maxFixedArity = 0;
footer.cljs$lang$applyTo = (function (arglist__9298){
var args__6535__auto__ = cljs.core.seq(arglist__9298);
return footer__delegate(args__6535__auto__);
});
footer.cljs$core$IFn$_invoke$arity$variadic = footer__delegate;
return footer;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.form = (function() { 
var form__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__7841_9299 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__7842_9300 = null;var count__7843_9301 = 0;var i__7844_9302 = 0;while(true){
if((i__7844_9302 < count__7843_9301))
{var arg__6537__auto___9303 = cljs.core._nth.call(null,chunk__7842_9300,i__7844_9302);a__6536__auto__.push(arg__6537__auto___9303);
{
var G__9304 = seq__7841_9299;
var G__9305 = chunk__7842_9300;
var G__9306 = count__7843_9301;
var G__9307 = (i__7844_9302 + 1);
seq__7841_9299 = G__9304;
chunk__7842_9300 = G__9305;
count__7843_9301 = G__9306;
i__7844_9302 = G__9307;
continue;
}
} else
{var temp__4092__auto___9308 = cljs.core.seq.call(null,seq__7841_9299);if(temp__4092__auto___9308)
{var seq__7841_9309__$1 = temp__4092__auto___9308;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7841_9309__$1))
{var c__5635__auto___9310 = cljs.core.chunk_first.call(null,seq__7841_9309__$1);{
var G__9311 = cljs.core.chunk_rest.call(null,seq__7841_9309__$1);
var G__9312 = c__5635__auto___9310;
var G__9313 = cljs.core.count.call(null,c__5635__auto___9310);
var G__9314 = 0;
seq__7841_9299 = G__9311;
chunk__7842_9300 = G__9312;
count__7843_9301 = G__9313;
i__7844_9302 = G__9314;
continue;
}
} else
{var arg__6537__auto___9315 = cljs.core.first.call(null,seq__7841_9309__$1);a__6536__auto__.push(arg__6537__auto___9315);
{
var G__9316 = cljs.core.next.call(null,seq__7841_9309__$1);
var G__9317 = null;
var G__9318 = 0;
var G__9319 = 0;
seq__7841_9299 = G__9316;
chunk__7842_9300 = G__9317;
count__7843_9301 = G__9318;
i__7844_9302 = G__9319;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.form.apply(null,a__6536__auto__);
};
var form = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return form__delegate.call(this,args__6535__auto__);};
form.cljs$lang$maxFixedArity = 0;
form.cljs$lang$applyTo = (function (arglist__9320){
var args__6535__auto__ = cljs.core.seq(arglist__9320);
return form__delegate(args__6535__auto__);
});
form.cljs$core$IFn$_invoke$arity$variadic = form__delegate;
return form;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h1 = (function() { 
var h1__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__7849_9321 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__7850_9322 = null;var count__7851_9323 = 0;var i__7852_9324 = 0;while(true){
if((i__7852_9324 < count__7851_9323))
{var arg__6537__auto___9325 = cljs.core._nth.call(null,chunk__7850_9322,i__7852_9324);a__6536__auto__.push(arg__6537__auto___9325);
{
var G__9326 = seq__7849_9321;
var G__9327 = chunk__7850_9322;
var G__9328 = count__7851_9323;
var G__9329 = (i__7852_9324 + 1);
seq__7849_9321 = G__9326;
chunk__7850_9322 = G__9327;
count__7851_9323 = G__9328;
i__7852_9324 = G__9329;
continue;
}
} else
{var temp__4092__auto___9330 = cljs.core.seq.call(null,seq__7849_9321);if(temp__4092__auto___9330)
{var seq__7849_9331__$1 = temp__4092__auto___9330;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7849_9331__$1))
{var c__5635__auto___9332 = cljs.core.chunk_first.call(null,seq__7849_9331__$1);{
var G__9333 = cljs.core.chunk_rest.call(null,seq__7849_9331__$1);
var G__9334 = c__5635__auto___9332;
var G__9335 = cljs.core.count.call(null,c__5635__auto___9332);
var G__9336 = 0;
seq__7849_9321 = G__9333;
chunk__7850_9322 = G__9334;
count__7851_9323 = G__9335;
i__7852_9324 = G__9336;
continue;
}
} else
{var arg__6537__auto___9337 = cljs.core.first.call(null,seq__7849_9331__$1);a__6536__auto__.push(arg__6537__auto___9337);
{
var G__9338 = cljs.core.next.call(null,seq__7849_9331__$1);
var G__9339 = null;
var G__9340 = 0;
var G__9341 = 0;
seq__7849_9321 = G__9338;
chunk__7850_9322 = G__9339;
count__7851_9323 = G__9340;
i__7852_9324 = G__9341;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h1.apply(null,a__6536__auto__);
};
var h1 = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h1__delegate.call(this,args__6535__auto__);};
h1.cljs$lang$maxFixedArity = 0;
h1.cljs$lang$applyTo = (function (arglist__9342){
var args__6535__auto__ = cljs.core.seq(arglist__9342);
return h1__delegate(args__6535__auto__);
});
h1.cljs$core$IFn$_invoke$arity$variadic = h1__delegate;
return h1;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h2 = (function() { 
var h2__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__7857_9343 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__7858_9344 = null;var count__7859_9345 = 0;var i__7860_9346 = 0;while(true){
if((i__7860_9346 < count__7859_9345))
{var arg__6537__auto___9347 = cljs.core._nth.call(null,chunk__7858_9344,i__7860_9346);a__6536__auto__.push(arg__6537__auto___9347);
{
var G__9348 = seq__7857_9343;
var G__9349 = chunk__7858_9344;
var G__9350 = count__7859_9345;
var G__9351 = (i__7860_9346 + 1);
seq__7857_9343 = G__9348;
chunk__7858_9344 = G__9349;
count__7859_9345 = G__9350;
i__7860_9346 = G__9351;
continue;
}
} else
{var temp__4092__auto___9352 = cljs.core.seq.call(null,seq__7857_9343);if(temp__4092__auto___9352)
{var seq__7857_9353__$1 = temp__4092__auto___9352;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7857_9353__$1))
{var c__5635__auto___9354 = cljs.core.chunk_first.call(null,seq__7857_9353__$1);{
var G__9355 = cljs.core.chunk_rest.call(null,seq__7857_9353__$1);
var G__9356 = c__5635__auto___9354;
var G__9357 = cljs.core.count.call(null,c__5635__auto___9354);
var G__9358 = 0;
seq__7857_9343 = G__9355;
chunk__7858_9344 = G__9356;
count__7859_9345 = G__9357;
i__7860_9346 = G__9358;
continue;
}
} else
{var arg__6537__auto___9359 = cljs.core.first.call(null,seq__7857_9353__$1);a__6536__auto__.push(arg__6537__auto___9359);
{
var G__9360 = cljs.core.next.call(null,seq__7857_9353__$1);
var G__9361 = null;
var G__9362 = 0;
var G__9363 = 0;
seq__7857_9343 = G__9360;
chunk__7858_9344 = G__9361;
count__7859_9345 = G__9362;
i__7860_9346 = G__9363;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h2.apply(null,a__6536__auto__);
};
var h2 = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h2__delegate.call(this,args__6535__auto__);};
h2.cljs$lang$maxFixedArity = 0;
h2.cljs$lang$applyTo = (function (arglist__9364){
var args__6535__auto__ = cljs.core.seq(arglist__9364);
return h2__delegate(args__6535__auto__);
});
h2.cljs$core$IFn$_invoke$arity$variadic = h2__delegate;
return h2;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h3 = (function() { 
var h3__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__7865_9365 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__7866_9366 = null;var count__7867_9367 = 0;var i__7868_9368 = 0;while(true){
if((i__7868_9368 < count__7867_9367))
{var arg__6537__auto___9369 = cljs.core._nth.call(null,chunk__7866_9366,i__7868_9368);a__6536__auto__.push(arg__6537__auto___9369);
{
var G__9370 = seq__7865_9365;
var G__9371 = chunk__7866_9366;
var G__9372 = count__7867_9367;
var G__9373 = (i__7868_9368 + 1);
seq__7865_9365 = G__9370;
chunk__7866_9366 = G__9371;
count__7867_9367 = G__9372;
i__7868_9368 = G__9373;
continue;
}
} else
{var temp__4092__auto___9374 = cljs.core.seq.call(null,seq__7865_9365);if(temp__4092__auto___9374)
{var seq__7865_9375__$1 = temp__4092__auto___9374;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7865_9375__$1))
{var c__5635__auto___9376 = cljs.core.chunk_first.call(null,seq__7865_9375__$1);{
var G__9377 = cljs.core.chunk_rest.call(null,seq__7865_9375__$1);
var G__9378 = c__5635__auto___9376;
var G__9379 = cljs.core.count.call(null,c__5635__auto___9376);
var G__9380 = 0;
seq__7865_9365 = G__9377;
chunk__7866_9366 = G__9378;
count__7867_9367 = G__9379;
i__7868_9368 = G__9380;
continue;
}
} else
{var arg__6537__auto___9381 = cljs.core.first.call(null,seq__7865_9375__$1);a__6536__auto__.push(arg__6537__auto___9381);
{
var G__9382 = cljs.core.next.call(null,seq__7865_9375__$1);
var G__9383 = null;
var G__9384 = 0;
var G__9385 = 0;
seq__7865_9365 = G__9382;
chunk__7866_9366 = G__9383;
count__7867_9367 = G__9384;
i__7868_9368 = G__9385;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h3.apply(null,a__6536__auto__);
};
var h3 = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h3__delegate.call(this,args__6535__auto__);};
h3.cljs$lang$maxFixedArity = 0;
h3.cljs$lang$applyTo = (function (arglist__9386){
var args__6535__auto__ = cljs.core.seq(arglist__9386);
return h3__delegate(args__6535__auto__);
});
h3.cljs$core$IFn$_invoke$arity$variadic = h3__delegate;
return h3;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h4 = (function() { 
var h4__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__7873_9387 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__7874_9388 = null;var count__7875_9389 = 0;var i__7876_9390 = 0;while(true){
if((i__7876_9390 < count__7875_9389))
{var arg__6537__auto___9391 = cljs.core._nth.call(null,chunk__7874_9388,i__7876_9390);a__6536__auto__.push(arg__6537__auto___9391);
{
var G__9392 = seq__7873_9387;
var G__9393 = chunk__7874_9388;
var G__9394 = count__7875_9389;
var G__9395 = (i__7876_9390 + 1);
seq__7873_9387 = G__9392;
chunk__7874_9388 = G__9393;
count__7875_9389 = G__9394;
i__7876_9390 = G__9395;
continue;
}
} else
{var temp__4092__auto___9396 = cljs.core.seq.call(null,seq__7873_9387);if(temp__4092__auto___9396)
{var seq__7873_9397__$1 = temp__4092__auto___9396;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7873_9397__$1))
{var c__5635__auto___9398 = cljs.core.chunk_first.call(null,seq__7873_9397__$1);{
var G__9399 = cljs.core.chunk_rest.call(null,seq__7873_9397__$1);
var G__9400 = c__5635__auto___9398;
var G__9401 = cljs.core.count.call(null,c__5635__auto___9398);
var G__9402 = 0;
seq__7873_9387 = G__9399;
chunk__7874_9388 = G__9400;
count__7875_9389 = G__9401;
i__7876_9390 = G__9402;
continue;
}
} else
{var arg__6537__auto___9403 = cljs.core.first.call(null,seq__7873_9397__$1);a__6536__auto__.push(arg__6537__auto___9403);
{
var G__9404 = cljs.core.next.call(null,seq__7873_9397__$1);
var G__9405 = null;
var G__9406 = 0;
var G__9407 = 0;
seq__7873_9387 = G__9404;
chunk__7874_9388 = G__9405;
count__7875_9389 = G__9406;
i__7876_9390 = G__9407;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h4.apply(null,a__6536__auto__);
};
var h4 = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h4__delegate.call(this,args__6535__auto__);};
h4.cljs$lang$maxFixedArity = 0;
h4.cljs$lang$applyTo = (function (arglist__9408){
var args__6535__auto__ = cljs.core.seq(arglist__9408);
return h4__delegate(args__6535__auto__);
});
h4.cljs$core$IFn$_invoke$arity$variadic = h4__delegate;
return h4;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h5 = (function() { 
var h5__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__7881_9409 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__7882_9410 = null;var count__7883_9411 = 0;var i__7884_9412 = 0;while(true){
if((i__7884_9412 < count__7883_9411))
{var arg__6537__auto___9413 = cljs.core._nth.call(null,chunk__7882_9410,i__7884_9412);a__6536__auto__.push(arg__6537__auto___9413);
{
var G__9414 = seq__7881_9409;
var G__9415 = chunk__7882_9410;
var G__9416 = count__7883_9411;
var G__9417 = (i__7884_9412 + 1);
seq__7881_9409 = G__9414;
chunk__7882_9410 = G__9415;
count__7883_9411 = G__9416;
i__7884_9412 = G__9417;
continue;
}
} else
{var temp__4092__auto___9418 = cljs.core.seq.call(null,seq__7881_9409);if(temp__4092__auto___9418)
{var seq__7881_9419__$1 = temp__4092__auto___9418;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7881_9419__$1))
{var c__5635__auto___9420 = cljs.core.chunk_first.call(null,seq__7881_9419__$1);{
var G__9421 = cljs.core.chunk_rest.call(null,seq__7881_9419__$1);
var G__9422 = c__5635__auto___9420;
var G__9423 = cljs.core.count.call(null,c__5635__auto___9420);
var G__9424 = 0;
seq__7881_9409 = G__9421;
chunk__7882_9410 = G__9422;
count__7883_9411 = G__9423;
i__7884_9412 = G__9424;
continue;
}
} else
{var arg__6537__auto___9425 = cljs.core.first.call(null,seq__7881_9419__$1);a__6536__auto__.push(arg__6537__auto___9425);
{
var G__9426 = cljs.core.next.call(null,seq__7881_9419__$1);
var G__9427 = null;
var G__9428 = 0;
var G__9429 = 0;
seq__7881_9409 = G__9426;
chunk__7882_9410 = G__9427;
count__7883_9411 = G__9428;
i__7884_9412 = G__9429;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h5.apply(null,a__6536__auto__);
};
var h5 = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h5__delegate.call(this,args__6535__auto__);};
h5.cljs$lang$maxFixedArity = 0;
h5.cljs$lang$applyTo = (function (arglist__9430){
var args__6535__auto__ = cljs.core.seq(arglist__9430);
return h5__delegate(args__6535__auto__);
});
h5.cljs$core$IFn$_invoke$arity$variadic = h5__delegate;
return h5;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h6 = (function() { 
var h6__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__7889_9431 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__7890_9432 = null;var count__7891_9433 = 0;var i__7892_9434 = 0;while(true){
if((i__7892_9434 < count__7891_9433))
{var arg__6537__auto___9435 = cljs.core._nth.call(null,chunk__7890_9432,i__7892_9434);a__6536__auto__.push(arg__6537__auto___9435);
{
var G__9436 = seq__7889_9431;
var G__9437 = chunk__7890_9432;
var G__9438 = count__7891_9433;
var G__9439 = (i__7892_9434 + 1);
seq__7889_9431 = G__9436;
chunk__7890_9432 = G__9437;
count__7891_9433 = G__9438;
i__7892_9434 = G__9439;
continue;
}
} else
{var temp__4092__auto___9440 = cljs.core.seq.call(null,seq__7889_9431);if(temp__4092__auto___9440)
{var seq__7889_9441__$1 = temp__4092__auto___9440;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7889_9441__$1))
{var c__5635__auto___9442 = cljs.core.chunk_first.call(null,seq__7889_9441__$1);{
var G__9443 = cljs.core.chunk_rest.call(null,seq__7889_9441__$1);
var G__9444 = c__5635__auto___9442;
var G__9445 = cljs.core.count.call(null,c__5635__auto___9442);
var G__9446 = 0;
seq__7889_9431 = G__9443;
chunk__7890_9432 = G__9444;
count__7891_9433 = G__9445;
i__7892_9434 = G__9446;
continue;
}
} else
{var arg__6537__auto___9447 = cljs.core.first.call(null,seq__7889_9441__$1);a__6536__auto__.push(arg__6537__auto___9447);
{
var G__9448 = cljs.core.next.call(null,seq__7889_9441__$1);
var G__9449 = null;
var G__9450 = 0;
var G__9451 = 0;
seq__7889_9431 = G__9448;
chunk__7890_9432 = G__9449;
count__7891_9433 = G__9450;
i__7892_9434 = G__9451;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h6.apply(null,a__6536__auto__);
};
var h6 = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h6__delegate.call(this,args__6535__auto__);};
h6.cljs$lang$maxFixedArity = 0;
h6.cljs$lang$applyTo = (function (arglist__9452){
var args__6535__auto__ = cljs.core.seq(arglist__9452);
return h6__delegate(args__6535__auto__);
});
h6.cljs$core$IFn$_invoke$arity$variadic = h6__delegate;
return h6;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.head = (function() { 
var head__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__7897_9453 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__7898_9454 = null;var count__7899_9455 = 0;var i__7900_9456 = 0;while(true){
if((i__7900_9456 < count__7899_9455))
{var arg__6537__auto___9457 = cljs.core._nth.call(null,chunk__7898_9454,i__7900_9456);a__6536__auto__.push(arg__6537__auto___9457);
{
var G__9458 = seq__7897_9453;
var G__9459 = chunk__7898_9454;
var G__9460 = count__7899_9455;
var G__9461 = (i__7900_9456 + 1);
seq__7897_9453 = G__9458;
chunk__7898_9454 = G__9459;
count__7899_9455 = G__9460;
i__7900_9456 = G__9461;
continue;
}
} else
{var temp__4092__auto___9462 = cljs.core.seq.call(null,seq__7897_9453);if(temp__4092__auto___9462)
{var seq__7897_9463__$1 = temp__4092__auto___9462;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7897_9463__$1))
{var c__5635__auto___9464 = cljs.core.chunk_first.call(null,seq__7897_9463__$1);{
var G__9465 = cljs.core.chunk_rest.call(null,seq__7897_9463__$1);
var G__9466 = c__5635__auto___9464;
var G__9467 = cljs.core.count.call(null,c__5635__auto___9464);
var G__9468 = 0;
seq__7897_9453 = G__9465;
chunk__7898_9454 = G__9466;
count__7899_9455 = G__9467;
i__7900_9456 = G__9468;
continue;
}
} else
{var arg__6537__auto___9469 = cljs.core.first.call(null,seq__7897_9463__$1);a__6536__auto__.push(arg__6537__auto___9469);
{
var G__9470 = cljs.core.next.call(null,seq__7897_9463__$1);
var G__9471 = null;
var G__9472 = 0;
var G__9473 = 0;
seq__7897_9453 = G__9470;
chunk__7898_9454 = G__9471;
count__7899_9455 = G__9472;
i__7900_9456 = G__9473;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.head.apply(null,a__6536__auto__);
};
var head = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return head__delegate.call(this,args__6535__auto__);};
head.cljs$lang$maxFixedArity = 0;
head.cljs$lang$applyTo = (function (arglist__9474){
var args__6535__auto__ = cljs.core.seq(arglist__9474);
return head__delegate(args__6535__auto__);
});
head.cljs$core$IFn$_invoke$arity$variadic = head__delegate;
return head;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.header = (function() { 
var header__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__7905_9475 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__7906_9476 = null;var count__7907_9477 = 0;var i__7908_9478 = 0;while(true){
if((i__7908_9478 < count__7907_9477))
{var arg__6537__auto___9479 = cljs.core._nth.call(null,chunk__7906_9476,i__7908_9478);a__6536__auto__.push(arg__6537__auto___9479);
{
var G__9480 = seq__7905_9475;
var G__9481 = chunk__7906_9476;
var G__9482 = count__7907_9477;
var G__9483 = (i__7908_9478 + 1);
seq__7905_9475 = G__9480;
chunk__7906_9476 = G__9481;
count__7907_9477 = G__9482;
i__7908_9478 = G__9483;
continue;
}
} else
{var temp__4092__auto___9484 = cljs.core.seq.call(null,seq__7905_9475);if(temp__4092__auto___9484)
{var seq__7905_9485__$1 = temp__4092__auto___9484;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7905_9485__$1))
{var c__5635__auto___9486 = cljs.core.chunk_first.call(null,seq__7905_9485__$1);{
var G__9487 = cljs.core.chunk_rest.call(null,seq__7905_9485__$1);
var G__9488 = c__5635__auto___9486;
var G__9489 = cljs.core.count.call(null,c__5635__auto___9486);
var G__9490 = 0;
seq__7905_9475 = G__9487;
chunk__7906_9476 = G__9488;
count__7907_9477 = G__9489;
i__7908_9478 = G__9490;
continue;
}
} else
{var arg__6537__auto___9491 = cljs.core.first.call(null,seq__7905_9485__$1);a__6536__auto__.push(arg__6537__auto___9491);
{
var G__9492 = cljs.core.next.call(null,seq__7905_9485__$1);
var G__9493 = null;
var G__9494 = 0;
var G__9495 = 0;
seq__7905_9475 = G__9492;
chunk__7906_9476 = G__9493;
count__7907_9477 = G__9494;
i__7908_9478 = G__9495;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.header.apply(null,a__6536__auto__);
};
var header = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return header__delegate.call(this,args__6535__auto__);};
header.cljs$lang$maxFixedArity = 0;
header.cljs$lang$applyTo = (function (arglist__9496){
var args__6535__auto__ = cljs.core.seq(arglist__9496);
return header__delegate(args__6535__auto__);
});
header.cljs$core$IFn$_invoke$arity$variadic = header__delegate;
return header;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.hr = (function() { 
var hr__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__7913_9497 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__7914_9498 = null;var count__7915_9499 = 0;var i__7916_9500 = 0;while(true){
if((i__7916_9500 < count__7915_9499))
{var arg__6537__auto___9501 = cljs.core._nth.call(null,chunk__7914_9498,i__7916_9500);a__6536__auto__.push(arg__6537__auto___9501);
{
var G__9502 = seq__7913_9497;
var G__9503 = chunk__7914_9498;
var G__9504 = count__7915_9499;
var G__9505 = (i__7916_9500 + 1);
seq__7913_9497 = G__9502;
chunk__7914_9498 = G__9503;
count__7915_9499 = G__9504;
i__7916_9500 = G__9505;
continue;
}
} else
{var temp__4092__auto___9506 = cljs.core.seq.call(null,seq__7913_9497);if(temp__4092__auto___9506)
{var seq__7913_9507__$1 = temp__4092__auto___9506;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7913_9507__$1))
{var c__5635__auto___9508 = cljs.core.chunk_first.call(null,seq__7913_9507__$1);{
var G__9509 = cljs.core.chunk_rest.call(null,seq__7913_9507__$1);
var G__9510 = c__5635__auto___9508;
var G__9511 = cljs.core.count.call(null,c__5635__auto___9508);
var G__9512 = 0;
seq__7913_9497 = G__9509;
chunk__7914_9498 = G__9510;
count__7915_9499 = G__9511;
i__7916_9500 = G__9512;
continue;
}
} else
{var arg__6537__auto___9513 = cljs.core.first.call(null,seq__7913_9507__$1);a__6536__auto__.push(arg__6537__auto___9513);
{
var G__9514 = cljs.core.next.call(null,seq__7913_9507__$1);
var G__9515 = null;
var G__9516 = 0;
var G__9517 = 0;
seq__7913_9497 = G__9514;
chunk__7914_9498 = G__9515;
count__7915_9499 = G__9516;
i__7916_9500 = G__9517;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.hr.apply(null,a__6536__auto__);
};
var hr = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return hr__delegate.call(this,args__6535__auto__);};
hr.cljs$lang$maxFixedArity = 0;
hr.cljs$lang$applyTo = (function (arglist__9518){
var args__6535__auto__ = cljs.core.seq(arglist__9518);
return hr__delegate(args__6535__auto__);
});
hr.cljs$core$IFn$_invoke$arity$variadic = hr__delegate;
return hr;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.html = (function() { 
var html__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__7921_9519 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__7922_9520 = null;var count__7923_9521 = 0;var i__7924_9522 = 0;while(true){
if((i__7924_9522 < count__7923_9521))
{var arg__6537__auto___9523 = cljs.core._nth.call(null,chunk__7922_9520,i__7924_9522);a__6536__auto__.push(arg__6537__auto___9523);
{
var G__9524 = seq__7921_9519;
var G__9525 = chunk__7922_9520;
var G__9526 = count__7923_9521;
var G__9527 = (i__7924_9522 + 1);
seq__7921_9519 = G__9524;
chunk__7922_9520 = G__9525;
count__7923_9521 = G__9526;
i__7924_9522 = G__9527;
continue;
}
} else
{var temp__4092__auto___9528 = cljs.core.seq.call(null,seq__7921_9519);if(temp__4092__auto___9528)
{var seq__7921_9529__$1 = temp__4092__auto___9528;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7921_9529__$1))
{var c__5635__auto___9530 = cljs.core.chunk_first.call(null,seq__7921_9529__$1);{
var G__9531 = cljs.core.chunk_rest.call(null,seq__7921_9529__$1);
var G__9532 = c__5635__auto___9530;
var G__9533 = cljs.core.count.call(null,c__5635__auto___9530);
var G__9534 = 0;
seq__7921_9519 = G__9531;
chunk__7922_9520 = G__9532;
count__7923_9521 = G__9533;
i__7924_9522 = G__9534;
continue;
}
} else
{var arg__6537__auto___9535 = cljs.core.first.call(null,seq__7921_9529__$1);a__6536__auto__.push(arg__6537__auto___9535);
{
var G__9536 = cljs.core.next.call(null,seq__7921_9529__$1);
var G__9537 = null;
var G__9538 = 0;
var G__9539 = 0;
seq__7921_9519 = G__9536;
chunk__7922_9520 = G__9537;
count__7923_9521 = G__9538;
i__7924_9522 = G__9539;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.html.apply(null,a__6536__auto__);
};
var html = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return html__delegate.call(this,args__6535__auto__);};
html.cljs$lang$maxFixedArity = 0;
html.cljs$lang$applyTo = (function (arglist__9540){
var args__6535__auto__ = cljs.core.seq(arglist__9540);
return html__delegate(args__6535__auto__);
});
html.cljs$core$IFn$_invoke$arity$variadic = html__delegate;
return html;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.i = (function() { 
var i__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__7929_9541 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__7930_9542 = null;var count__7931_9543 = 0;var i__7932_9544 = 0;while(true){
if((i__7932_9544 < count__7931_9543))
{var arg__6537__auto___9545 = cljs.core._nth.call(null,chunk__7930_9542,i__7932_9544);a__6536__auto__.push(arg__6537__auto___9545);
{
var G__9546 = seq__7929_9541;
var G__9547 = chunk__7930_9542;
var G__9548 = count__7931_9543;
var G__9549 = (i__7932_9544 + 1);
seq__7929_9541 = G__9546;
chunk__7930_9542 = G__9547;
count__7931_9543 = G__9548;
i__7932_9544 = G__9549;
continue;
}
} else
{var temp__4092__auto___9550 = cljs.core.seq.call(null,seq__7929_9541);if(temp__4092__auto___9550)
{var seq__7929_9551__$1 = temp__4092__auto___9550;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7929_9551__$1))
{var c__5635__auto___9552 = cljs.core.chunk_first.call(null,seq__7929_9551__$1);{
var G__9553 = cljs.core.chunk_rest.call(null,seq__7929_9551__$1);
var G__9554 = c__5635__auto___9552;
var G__9555 = cljs.core.count.call(null,c__5635__auto___9552);
var G__9556 = 0;
seq__7929_9541 = G__9553;
chunk__7930_9542 = G__9554;
count__7931_9543 = G__9555;
i__7932_9544 = G__9556;
continue;
}
} else
{var arg__6537__auto___9557 = cljs.core.first.call(null,seq__7929_9551__$1);a__6536__auto__.push(arg__6537__auto___9557);
{
var G__9558 = cljs.core.next.call(null,seq__7929_9551__$1);
var G__9559 = null;
var G__9560 = 0;
var G__9561 = 0;
seq__7929_9541 = G__9558;
chunk__7930_9542 = G__9559;
count__7931_9543 = G__9560;
i__7932_9544 = G__9561;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.i.apply(null,a__6536__auto__);
};
var i = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return i__delegate.call(this,args__6535__auto__);};
i.cljs$lang$maxFixedArity = 0;
i.cljs$lang$applyTo = (function (arglist__9562){
var args__6535__auto__ = cljs.core.seq(arglist__9562);
return i__delegate(args__6535__auto__);
});
i.cljs$core$IFn$_invoke$arity$variadic = i__delegate;
return i;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.iframe = (function() { 
var iframe__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__7937_9563 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__7938_9564 = null;var count__7939_9565 = 0;var i__7940_9566 = 0;while(true){
if((i__7940_9566 < count__7939_9565))
{var arg__6537__auto___9567 = cljs.core._nth.call(null,chunk__7938_9564,i__7940_9566);a__6536__auto__.push(arg__6537__auto___9567);
{
var G__9568 = seq__7937_9563;
var G__9569 = chunk__7938_9564;
var G__9570 = count__7939_9565;
var G__9571 = (i__7940_9566 + 1);
seq__7937_9563 = G__9568;
chunk__7938_9564 = G__9569;
count__7939_9565 = G__9570;
i__7940_9566 = G__9571;
continue;
}
} else
{var temp__4092__auto___9572 = cljs.core.seq.call(null,seq__7937_9563);if(temp__4092__auto___9572)
{var seq__7937_9573__$1 = temp__4092__auto___9572;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7937_9573__$1))
{var c__5635__auto___9574 = cljs.core.chunk_first.call(null,seq__7937_9573__$1);{
var G__9575 = cljs.core.chunk_rest.call(null,seq__7937_9573__$1);
var G__9576 = c__5635__auto___9574;
var G__9577 = cljs.core.count.call(null,c__5635__auto___9574);
var G__9578 = 0;
seq__7937_9563 = G__9575;
chunk__7938_9564 = G__9576;
count__7939_9565 = G__9577;
i__7940_9566 = G__9578;
continue;
}
} else
{var arg__6537__auto___9579 = cljs.core.first.call(null,seq__7937_9573__$1);a__6536__auto__.push(arg__6537__auto___9579);
{
var G__9580 = cljs.core.next.call(null,seq__7937_9573__$1);
var G__9581 = null;
var G__9582 = 0;
var G__9583 = 0;
seq__7937_9563 = G__9580;
chunk__7938_9564 = G__9581;
count__7939_9565 = G__9582;
i__7940_9566 = G__9583;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.iframe.apply(null,a__6536__auto__);
};
var iframe = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return iframe__delegate.call(this,args__6535__auto__);};
iframe.cljs$lang$maxFixedArity = 0;
iframe.cljs$lang$applyTo = (function (arglist__9584){
var args__6535__auto__ = cljs.core.seq(arglist__9584);
return iframe__delegate(args__6535__auto__);
});
iframe.cljs$core$IFn$_invoke$arity$variadic = iframe__delegate;
return iframe;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.img = (function() { 
var img__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__7945_9585 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__7946_9586 = null;var count__7947_9587 = 0;var i__7948_9588 = 0;while(true){
if((i__7948_9588 < count__7947_9587))
{var arg__6537__auto___9589 = cljs.core._nth.call(null,chunk__7946_9586,i__7948_9588);a__6536__auto__.push(arg__6537__auto___9589);
{
var G__9590 = seq__7945_9585;
var G__9591 = chunk__7946_9586;
var G__9592 = count__7947_9587;
var G__9593 = (i__7948_9588 + 1);
seq__7945_9585 = G__9590;
chunk__7946_9586 = G__9591;
count__7947_9587 = G__9592;
i__7948_9588 = G__9593;
continue;
}
} else
{var temp__4092__auto___9594 = cljs.core.seq.call(null,seq__7945_9585);if(temp__4092__auto___9594)
{var seq__7945_9595__$1 = temp__4092__auto___9594;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7945_9595__$1))
{var c__5635__auto___9596 = cljs.core.chunk_first.call(null,seq__7945_9595__$1);{
var G__9597 = cljs.core.chunk_rest.call(null,seq__7945_9595__$1);
var G__9598 = c__5635__auto___9596;
var G__9599 = cljs.core.count.call(null,c__5635__auto___9596);
var G__9600 = 0;
seq__7945_9585 = G__9597;
chunk__7946_9586 = G__9598;
count__7947_9587 = G__9599;
i__7948_9588 = G__9600;
continue;
}
} else
{var arg__6537__auto___9601 = cljs.core.first.call(null,seq__7945_9595__$1);a__6536__auto__.push(arg__6537__auto___9601);
{
var G__9602 = cljs.core.next.call(null,seq__7945_9595__$1);
var G__9603 = null;
var G__9604 = 0;
var G__9605 = 0;
seq__7945_9585 = G__9602;
chunk__7946_9586 = G__9603;
count__7947_9587 = G__9604;
i__7948_9588 = G__9605;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.img.apply(null,a__6536__auto__);
};
var img = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return img__delegate.call(this,args__6535__auto__);};
img.cljs$lang$maxFixedArity = 0;
img.cljs$lang$applyTo = (function (arglist__9606){
var args__6535__auto__ = cljs.core.seq(arglist__9606);
return img__delegate(args__6535__auto__);
});
img.cljs$core$IFn$_invoke$arity$variadic = img__delegate;
return img;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.input = (function() { 
var input__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__7953_9607 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__7954_9608 = null;var count__7955_9609 = 0;var i__7956_9610 = 0;while(true){
if((i__7956_9610 < count__7955_9609))
{var arg__6537__auto___9611 = cljs.core._nth.call(null,chunk__7954_9608,i__7956_9610);a__6536__auto__.push(arg__6537__auto___9611);
{
var G__9612 = seq__7953_9607;
var G__9613 = chunk__7954_9608;
var G__9614 = count__7955_9609;
var G__9615 = (i__7956_9610 + 1);
seq__7953_9607 = G__9612;
chunk__7954_9608 = G__9613;
count__7955_9609 = G__9614;
i__7956_9610 = G__9615;
continue;
}
} else
{var temp__4092__auto___9616 = cljs.core.seq.call(null,seq__7953_9607);if(temp__4092__auto___9616)
{var seq__7953_9617__$1 = temp__4092__auto___9616;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7953_9617__$1))
{var c__5635__auto___9618 = cljs.core.chunk_first.call(null,seq__7953_9617__$1);{
var G__9619 = cljs.core.chunk_rest.call(null,seq__7953_9617__$1);
var G__9620 = c__5635__auto___9618;
var G__9621 = cljs.core.count.call(null,c__5635__auto___9618);
var G__9622 = 0;
seq__7953_9607 = G__9619;
chunk__7954_9608 = G__9620;
count__7955_9609 = G__9621;
i__7956_9610 = G__9622;
continue;
}
} else
{var arg__6537__auto___9623 = cljs.core.first.call(null,seq__7953_9617__$1);a__6536__auto__.push(arg__6537__auto___9623);
{
var G__9624 = cljs.core.next.call(null,seq__7953_9617__$1);
var G__9625 = null;
var G__9626 = 0;
var G__9627 = 0;
seq__7953_9607 = G__9624;
chunk__7954_9608 = G__9625;
count__7955_9609 = G__9626;
i__7956_9610 = G__9627;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.input.apply(null,a__6536__auto__);
};
var input = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return input__delegate.call(this,args__6535__auto__);};
input.cljs$lang$maxFixedArity = 0;
input.cljs$lang$applyTo = (function (arglist__9628){
var args__6535__auto__ = cljs.core.seq(arglist__9628);
return input__delegate(args__6535__auto__);
});
input.cljs$core$IFn$_invoke$arity$variadic = input__delegate;
return input;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.ins = (function() { 
var ins__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__7961_9629 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__7962_9630 = null;var count__7963_9631 = 0;var i__7964_9632 = 0;while(true){
if((i__7964_9632 < count__7963_9631))
{var arg__6537__auto___9633 = cljs.core._nth.call(null,chunk__7962_9630,i__7964_9632);a__6536__auto__.push(arg__6537__auto___9633);
{
var G__9634 = seq__7961_9629;
var G__9635 = chunk__7962_9630;
var G__9636 = count__7963_9631;
var G__9637 = (i__7964_9632 + 1);
seq__7961_9629 = G__9634;
chunk__7962_9630 = G__9635;
count__7963_9631 = G__9636;
i__7964_9632 = G__9637;
continue;
}
} else
{var temp__4092__auto___9638 = cljs.core.seq.call(null,seq__7961_9629);if(temp__4092__auto___9638)
{var seq__7961_9639__$1 = temp__4092__auto___9638;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7961_9639__$1))
{var c__5635__auto___9640 = cljs.core.chunk_first.call(null,seq__7961_9639__$1);{
var G__9641 = cljs.core.chunk_rest.call(null,seq__7961_9639__$1);
var G__9642 = c__5635__auto___9640;
var G__9643 = cljs.core.count.call(null,c__5635__auto___9640);
var G__9644 = 0;
seq__7961_9629 = G__9641;
chunk__7962_9630 = G__9642;
count__7963_9631 = G__9643;
i__7964_9632 = G__9644;
continue;
}
} else
{var arg__6537__auto___9645 = cljs.core.first.call(null,seq__7961_9639__$1);a__6536__auto__.push(arg__6537__auto___9645);
{
var G__9646 = cljs.core.next.call(null,seq__7961_9639__$1);
var G__9647 = null;
var G__9648 = 0;
var G__9649 = 0;
seq__7961_9629 = G__9646;
chunk__7962_9630 = G__9647;
count__7963_9631 = G__9648;
i__7964_9632 = G__9649;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.ins.apply(null,a__6536__auto__);
};
var ins = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ins__delegate.call(this,args__6535__auto__);};
ins.cljs$lang$maxFixedArity = 0;
ins.cljs$lang$applyTo = (function (arglist__9650){
var args__6535__auto__ = cljs.core.seq(arglist__9650);
return ins__delegate(args__6535__auto__);
});
ins.cljs$core$IFn$_invoke$arity$variadic = ins__delegate;
return ins;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.kbd = (function() { 
var kbd__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__7969_9651 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__7970_9652 = null;var count__7971_9653 = 0;var i__7972_9654 = 0;while(true){
if((i__7972_9654 < count__7971_9653))
{var arg__6537__auto___9655 = cljs.core._nth.call(null,chunk__7970_9652,i__7972_9654);a__6536__auto__.push(arg__6537__auto___9655);
{
var G__9656 = seq__7969_9651;
var G__9657 = chunk__7970_9652;
var G__9658 = count__7971_9653;
var G__9659 = (i__7972_9654 + 1);
seq__7969_9651 = G__9656;
chunk__7970_9652 = G__9657;
count__7971_9653 = G__9658;
i__7972_9654 = G__9659;
continue;
}
} else
{var temp__4092__auto___9660 = cljs.core.seq.call(null,seq__7969_9651);if(temp__4092__auto___9660)
{var seq__7969_9661__$1 = temp__4092__auto___9660;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7969_9661__$1))
{var c__5635__auto___9662 = cljs.core.chunk_first.call(null,seq__7969_9661__$1);{
var G__9663 = cljs.core.chunk_rest.call(null,seq__7969_9661__$1);
var G__9664 = c__5635__auto___9662;
var G__9665 = cljs.core.count.call(null,c__5635__auto___9662);
var G__9666 = 0;
seq__7969_9651 = G__9663;
chunk__7970_9652 = G__9664;
count__7971_9653 = G__9665;
i__7972_9654 = G__9666;
continue;
}
} else
{var arg__6537__auto___9667 = cljs.core.first.call(null,seq__7969_9661__$1);a__6536__auto__.push(arg__6537__auto___9667);
{
var G__9668 = cljs.core.next.call(null,seq__7969_9661__$1);
var G__9669 = null;
var G__9670 = 0;
var G__9671 = 0;
seq__7969_9651 = G__9668;
chunk__7970_9652 = G__9669;
count__7971_9653 = G__9670;
i__7972_9654 = G__9671;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.kbd.apply(null,a__6536__auto__);
};
var kbd = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return kbd__delegate.call(this,args__6535__auto__);};
kbd.cljs$lang$maxFixedArity = 0;
kbd.cljs$lang$applyTo = (function (arglist__9672){
var args__6535__auto__ = cljs.core.seq(arglist__9672);
return kbd__delegate(args__6535__auto__);
});
kbd.cljs$core$IFn$_invoke$arity$variadic = kbd__delegate;
return kbd;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.keygen = (function() { 
var keygen__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__7977_9673 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__7978_9674 = null;var count__7979_9675 = 0;var i__7980_9676 = 0;while(true){
if((i__7980_9676 < count__7979_9675))
{var arg__6537__auto___9677 = cljs.core._nth.call(null,chunk__7978_9674,i__7980_9676);a__6536__auto__.push(arg__6537__auto___9677);
{
var G__9678 = seq__7977_9673;
var G__9679 = chunk__7978_9674;
var G__9680 = count__7979_9675;
var G__9681 = (i__7980_9676 + 1);
seq__7977_9673 = G__9678;
chunk__7978_9674 = G__9679;
count__7979_9675 = G__9680;
i__7980_9676 = G__9681;
continue;
}
} else
{var temp__4092__auto___9682 = cljs.core.seq.call(null,seq__7977_9673);if(temp__4092__auto___9682)
{var seq__7977_9683__$1 = temp__4092__auto___9682;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7977_9683__$1))
{var c__5635__auto___9684 = cljs.core.chunk_first.call(null,seq__7977_9683__$1);{
var G__9685 = cljs.core.chunk_rest.call(null,seq__7977_9683__$1);
var G__9686 = c__5635__auto___9684;
var G__9687 = cljs.core.count.call(null,c__5635__auto___9684);
var G__9688 = 0;
seq__7977_9673 = G__9685;
chunk__7978_9674 = G__9686;
count__7979_9675 = G__9687;
i__7980_9676 = G__9688;
continue;
}
} else
{var arg__6537__auto___9689 = cljs.core.first.call(null,seq__7977_9683__$1);a__6536__auto__.push(arg__6537__auto___9689);
{
var G__9690 = cljs.core.next.call(null,seq__7977_9683__$1);
var G__9691 = null;
var G__9692 = 0;
var G__9693 = 0;
seq__7977_9673 = G__9690;
chunk__7978_9674 = G__9691;
count__7979_9675 = G__9692;
i__7980_9676 = G__9693;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.keygen.apply(null,a__6536__auto__);
};
var keygen = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return keygen__delegate.call(this,args__6535__auto__);};
keygen.cljs$lang$maxFixedArity = 0;
keygen.cljs$lang$applyTo = (function (arglist__9694){
var args__6535__auto__ = cljs.core.seq(arglist__9694);
return keygen__delegate(args__6535__auto__);
});
keygen.cljs$core$IFn$_invoke$arity$variadic = keygen__delegate;
return keygen;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.label = (function() { 
var label__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__7985_9695 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__7986_9696 = null;var count__7987_9697 = 0;var i__7988_9698 = 0;while(true){
if((i__7988_9698 < count__7987_9697))
{var arg__6537__auto___9699 = cljs.core._nth.call(null,chunk__7986_9696,i__7988_9698);a__6536__auto__.push(arg__6537__auto___9699);
{
var G__9700 = seq__7985_9695;
var G__9701 = chunk__7986_9696;
var G__9702 = count__7987_9697;
var G__9703 = (i__7988_9698 + 1);
seq__7985_9695 = G__9700;
chunk__7986_9696 = G__9701;
count__7987_9697 = G__9702;
i__7988_9698 = G__9703;
continue;
}
} else
{var temp__4092__auto___9704 = cljs.core.seq.call(null,seq__7985_9695);if(temp__4092__auto___9704)
{var seq__7985_9705__$1 = temp__4092__auto___9704;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7985_9705__$1))
{var c__5635__auto___9706 = cljs.core.chunk_first.call(null,seq__7985_9705__$1);{
var G__9707 = cljs.core.chunk_rest.call(null,seq__7985_9705__$1);
var G__9708 = c__5635__auto___9706;
var G__9709 = cljs.core.count.call(null,c__5635__auto___9706);
var G__9710 = 0;
seq__7985_9695 = G__9707;
chunk__7986_9696 = G__9708;
count__7987_9697 = G__9709;
i__7988_9698 = G__9710;
continue;
}
} else
{var arg__6537__auto___9711 = cljs.core.first.call(null,seq__7985_9705__$1);a__6536__auto__.push(arg__6537__auto___9711);
{
var G__9712 = cljs.core.next.call(null,seq__7985_9705__$1);
var G__9713 = null;
var G__9714 = 0;
var G__9715 = 0;
seq__7985_9695 = G__9712;
chunk__7986_9696 = G__9713;
count__7987_9697 = G__9714;
i__7988_9698 = G__9715;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.label.apply(null,a__6536__auto__);
};
var label = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return label__delegate.call(this,args__6535__auto__);};
label.cljs$lang$maxFixedArity = 0;
label.cljs$lang$applyTo = (function (arglist__9716){
var args__6535__auto__ = cljs.core.seq(arglist__9716);
return label__delegate(args__6535__auto__);
});
label.cljs$core$IFn$_invoke$arity$variadic = label__delegate;
return label;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.legend = (function() { 
var legend__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__7993_9717 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__7994_9718 = null;var count__7995_9719 = 0;var i__7996_9720 = 0;while(true){
if((i__7996_9720 < count__7995_9719))
{var arg__6537__auto___9721 = cljs.core._nth.call(null,chunk__7994_9718,i__7996_9720);a__6536__auto__.push(arg__6537__auto___9721);
{
var G__9722 = seq__7993_9717;
var G__9723 = chunk__7994_9718;
var G__9724 = count__7995_9719;
var G__9725 = (i__7996_9720 + 1);
seq__7993_9717 = G__9722;
chunk__7994_9718 = G__9723;
count__7995_9719 = G__9724;
i__7996_9720 = G__9725;
continue;
}
} else
{var temp__4092__auto___9726 = cljs.core.seq.call(null,seq__7993_9717);if(temp__4092__auto___9726)
{var seq__7993_9727__$1 = temp__4092__auto___9726;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7993_9727__$1))
{var c__5635__auto___9728 = cljs.core.chunk_first.call(null,seq__7993_9727__$1);{
var G__9729 = cljs.core.chunk_rest.call(null,seq__7993_9727__$1);
var G__9730 = c__5635__auto___9728;
var G__9731 = cljs.core.count.call(null,c__5635__auto___9728);
var G__9732 = 0;
seq__7993_9717 = G__9729;
chunk__7994_9718 = G__9730;
count__7995_9719 = G__9731;
i__7996_9720 = G__9732;
continue;
}
} else
{var arg__6537__auto___9733 = cljs.core.first.call(null,seq__7993_9727__$1);a__6536__auto__.push(arg__6537__auto___9733);
{
var G__9734 = cljs.core.next.call(null,seq__7993_9727__$1);
var G__9735 = null;
var G__9736 = 0;
var G__9737 = 0;
seq__7993_9717 = G__9734;
chunk__7994_9718 = G__9735;
count__7995_9719 = G__9736;
i__7996_9720 = G__9737;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.legend.apply(null,a__6536__auto__);
};
var legend = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return legend__delegate.call(this,args__6535__auto__);};
legend.cljs$lang$maxFixedArity = 0;
legend.cljs$lang$applyTo = (function (arglist__9738){
var args__6535__auto__ = cljs.core.seq(arglist__9738);
return legend__delegate(args__6535__auto__);
});
legend.cljs$core$IFn$_invoke$arity$variadic = legend__delegate;
return legend;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.li = (function() { 
var li__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__8001_9739 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__8002_9740 = null;var count__8003_9741 = 0;var i__8004_9742 = 0;while(true){
if((i__8004_9742 < count__8003_9741))
{var arg__6537__auto___9743 = cljs.core._nth.call(null,chunk__8002_9740,i__8004_9742);a__6536__auto__.push(arg__6537__auto___9743);
{
var G__9744 = seq__8001_9739;
var G__9745 = chunk__8002_9740;
var G__9746 = count__8003_9741;
var G__9747 = (i__8004_9742 + 1);
seq__8001_9739 = G__9744;
chunk__8002_9740 = G__9745;
count__8003_9741 = G__9746;
i__8004_9742 = G__9747;
continue;
}
} else
{var temp__4092__auto___9748 = cljs.core.seq.call(null,seq__8001_9739);if(temp__4092__auto___9748)
{var seq__8001_9749__$1 = temp__4092__auto___9748;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8001_9749__$1))
{var c__5635__auto___9750 = cljs.core.chunk_first.call(null,seq__8001_9749__$1);{
var G__9751 = cljs.core.chunk_rest.call(null,seq__8001_9749__$1);
var G__9752 = c__5635__auto___9750;
var G__9753 = cljs.core.count.call(null,c__5635__auto___9750);
var G__9754 = 0;
seq__8001_9739 = G__9751;
chunk__8002_9740 = G__9752;
count__8003_9741 = G__9753;
i__8004_9742 = G__9754;
continue;
}
} else
{var arg__6537__auto___9755 = cljs.core.first.call(null,seq__8001_9749__$1);a__6536__auto__.push(arg__6537__auto___9755);
{
var G__9756 = cljs.core.next.call(null,seq__8001_9749__$1);
var G__9757 = null;
var G__9758 = 0;
var G__9759 = 0;
seq__8001_9739 = G__9756;
chunk__8002_9740 = G__9757;
count__8003_9741 = G__9758;
i__8004_9742 = G__9759;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.li.apply(null,a__6536__auto__);
};
var li = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return li__delegate.call(this,args__6535__auto__);};
li.cljs$lang$maxFixedArity = 0;
li.cljs$lang$applyTo = (function (arglist__9760){
var args__6535__auto__ = cljs.core.seq(arglist__9760);
return li__delegate(args__6535__auto__);
});
li.cljs$core$IFn$_invoke$arity$variadic = li__delegate;
return li;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.link = (function() { 
var link__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__8009_9761 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__8010_9762 = null;var count__8011_9763 = 0;var i__8012_9764 = 0;while(true){
if((i__8012_9764 < count__8011_9763))
{var arg__6537__auto___9765 = cljs.core._nth.call(null,chunk__8010_9762,i__8012_9764);a__6536__auto__.push(arg__6537__auto___9765);
{
var G__9766 = seq__8009_9761;
var G__9767 = chunk__8010_9762;
var G__9768 = count__8011_9763;
var G__9769 = (i__8012_9764 + 1);
seq__8009_9761 = G__9766;
chunk__8010_9762 = G__9767;
count__8011_9763 = G__9768;
i__8012_9764 = G__9769;
continue;
}
} else
{var temp__4092__auto___9770 = cljs.core.seq.call(null,seq__8009_9761);if(temp__4092__auto___9770)
{var seq__8009_9771__$1 = temp__4092__auto___9770;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8009_9771__$1))
{var c__5635__auto___9772 = cljs.core.chunk_first.call(null,seq__8009_9771__$1);{
var G__9773 = cljs.core.chunk_rest.call(null,seq__8009_9771__$1);
var G__9774 = c__5635__auto___9772;
var G__9775 = cljs.core.count.call(null,c__5635__auto___9772);
var G__9776 = 0;
seq__8009_9761 = G__9773;
chunk__8010_9762 = G__9774;
count__8011_9763 = G__9775;
i__8012_9764 = G__9776;
continue;
}
} else
{var arg__6537__auto___9777 = cljs.core.first.call(null,seq__8009_9771__$1);a__6536__auto__.push(arg__6537__auto___9777);
{
var G__9778 = cljs.core.next.call(null,seq__8009_9771__$1);
var G__9779 = null;
var G__9780 = 0;
var G__9781 = 0;
seq__8009_9761 = G__9778;
chunk__8010_9762 = G__9779;
count__8011_9763 = G__9780;
i__8012_9764 = G__9781;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.link.apply(null,a__6536__auto__);
};
var link = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return link__delegate.call(this,args__6535__auto__);};
link.cljs$lang$maxFixedArity = 0;
link.cljs$lang$applyTo = (function (arglist__9782){
var args__6535__auto__ = cljs.core.seq(arglist__9782);
return link__delegate(args__6535__auto__);
});
link.cljs$core$IFn$_invoke$arity$variadic = link__delegate;
return link;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.main = (function() { 
var main__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__8017_9783 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__8018_9784 = null;var count__8019_9785 = 0;var i__8020_9786 = 0;while(true){
if((i__8020_9786 < count__8019_9785))
{var arg__6537__auto___9787 = cljs.core._nth.call(null,chunk__8018_9784,i__8020_9786);a__6536__auto__.push(arg__6537__auto___9787);
{
var G__9788 = seq__8017_9783;
var G__9789 = chunk__8018_9784;
var G__9790 = count__8019_9785;
var G__9791 = (i__8020_9786 + 1);
seq__8017_9783 = G__9788;
chunk__8018_9784 = G__9789;
count__8019_9785 = G__9790;
i__8020_9786 = G__9791;
continue;
}
} else
{var temp__4092__auto___9792 = cljs.core.seq.call(null,seq__8017_9783);if(temp__4092__auto___9792)
{var seq__8017_9793__$1 = temp__4092__auto___9792;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8017_9793__$1))
{var c__5635__auto___9794 = cljs.core.chunk_first.call(null,seq__8017_9793__$1);{
var G__9795 = cljs.core.chunk_rest.call(null,seq__8017_9793__$1);
var G__9796 = c__5635__auto___9794;
var G__9797 = cljs.core.count.call(null,c__5635__auto___9794);
var G__9798 = 0;
seq__8017_9783 = G__9795;
chunk__8018_9784 = G__9796;
count__8019_9785 = G__9797;
i__8020_9786 = G__9798;
continue;
}
} else
{var arg__6537__auto___9799 = cljs.core.first.call(null,seq__8017_9793__$1);a__6536__auto__.push(arg__6537__auto___9799);
{
var G__9800 = cljs.core.next.call(null,seq__8017_9793__$1);
var G__9801 = null;
var G__9802 = 0;
var G__9803 = 0;
seq__8017_9783 = G__9800;
chunk__8018_9784 = G__9801;
count__8019_9785 = G__9802;
i__8020_9786 = G__9803;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.main.apply(null,a__6536__auto__);
};
var main = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return main__delegate.call(this,args__6535__auto__);};
main.cljs$lang$maxFixedArity = 0;
main.cljs$lang$applyTo = (function (arglist__9804){
var args__6535__auto__ = cljs.core.seq(arglist__9804);
return main__delegate(args__6535__auto__);
});
main.cljs$core$IFn$_invoke$arity$variadic = main__delegate;
return main;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.map = (function() { 
var map__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__8025_9805 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__8026_9806 = null;var count__8027_9807 = 0;var i__8028_9808 = 0;while(true){
if((i__8028_9808 < count__8027_9807))
{var arg__6537__auto___9809 = cljs.core._nth.call(null,chunk__8026_9806,i__8028_9808);a__6536__auto__.push(arg__6537__auto___9809);
{
var G__9810 = seq__8025_9805;
var G__9811 = chunk__8026_9806;
var G__9812 = count__8027_9807;
var G__9813 = (i__8028_9808 + 1);
seq__8025_9805 = G__9810;
chunk__8026_9806 = G__9811;
count__8027_9807 = G__9812;
i__8028_9808 = G__9813;
continue;
}
} else
{var temp__4092__auto___9814 = cljs.core.seq.call(null,seq__8025_9805);if(temp__4092__auto___9814)
{var seq__8025_9815__$1 = temp__4092__auto___9814;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8025_9815__$1))
{var c__5635__auto___9816 = cljs.core.chunk_first.call(null,seq__8025_9815__$1);{
var G__9817 = cljs.core.chunk_rest.call(null,seq__8025_9815__$1);
var G__9818 = c__5635__auto___9816;
var G__9819 = cljs.core.count.call(null,c__5635__auto___9816);
var G__9820 = 0;
seq__8025_9805 = G__9817;
chunk__8026_9806 = G__9818;
count__8027_9807 = G__9819;
i__8028_9808 = G__9820;
continue;
}
} else
{var arg__6537__auto___9821 = cljs.core.first.call(null,seq__8025_9815__$1);a__6536__auto__.push(arg__6537__auto___9821);
{
var G__9822 = cljs.core.next.call(null,seq__8025_9815__$1);
var G__9823 = null;
var G__9824 = 0;
var G__9825 = 0;
seq__8025_9805 = G__9822;
chunk__8026_9806 = G__9823;
count__8027_9807 = G__9824;
i__8028_9808 = G__9825;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.map.apply(null,a__6536__auto__);
};
var map = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return map__delegate.call(this,args__6535__auto__);};
map.cljs$lang$maxFixedArity = 0;
map.cljs$lang$applyTo = (function (arglist__9826){
var args__6535__auto__ = cljs.core.seq(arglist__9826);
return map__delegate(args__6535__auto__);
});
map.cljs$core$IFn$_invoke$arity$variadic = map__delegate;
return map;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.mark = (function() { 
var mark__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__8033_9827 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__8034_9828 = null;var count__8035_9829 = 0;var i__8036_9830 = 0;while(true){
if((i__8036_9830 < count__8035_9829))
{var arg__6537__auto___9831 = cljs.core._nth.call(null,chunk__8034_9828,i__8036_9830);a__6536__auto__.push(arg__6537__auto___9831);
{
var G__9832 = seq__8033_9827;
var G__9833 = chunk__8034_9828;
var G__9834 = count__8035_9829;
var G__9835 = (i__8036_9830 + 1);
seq__8033_9827 = G__9832;
chunk__8034_9828 = G__9833;
count__8035_9829 = G__9834;
i__8036_9830 = G__9835;
continue;
}
} else
{var temp__4092__auto___9836 = cljs.core.seq.call(null,seq__8033_9827);if(temp__4092__auto___9836)
{var seq__8033_9837__$1 = temp__4092__auto___9836;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8033_9837__$1))
{var c__5635__auto___9838 = cljs.core.chunk_first.call(null,seq__8033_9837__$1);{
var G__9839 = cljs.core.chunk_rest.call(null,seq__8033_9837__$1);
var G__9840 = c__5635__auto___9838;
var G__9841 = cljs.core.count.call(null,c__5635__auto___9838);
var G__9842 = 0;
seq__8033_9827 = G__9839;
chunk__8034_9828 = G__9840;
count__8035_9829 = G__9841;
i__8036_9830 = G__9842;
continue;
}
} else
{var arg__6537__auto___9843 = cljs.core.first.call(null,seq__8033_9837__$1);a__6536__auto__.push(arg__6537__auto___9843);
{
var G__9844 = cljs.core.next.call(null,seq__8033_9837__$1);
var G__9845 = null;
var G__9846 = 0;
var G__9847 = 0;
seq__8033_9827 = G__9844;
chunk__8034_9828 = G__9845;
count__8035_9829 = G__9846;
i__8036_9830 = G__9847;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.mark.apply(null,a__6536__auto__);
};
var mark = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return mark__delegate.call(this,args__6535__auto__);};
mark.cljs$lang$maxFixedArity = 0;
mark.cljs$lang$applyTo = (function (arglist__9848){
var args__6535__auto__ = cljs.core.seq(arglist__9848);
return mark__delegate(args__6535__auto__);
});
mark.cljs$core$IFn$_invoke$arity$variadic = mark__delegate;
return mark;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.menu = (function() { 
var menu__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__8041_9849 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__8042_9850 = null;var count__8043_9851 = 0;var i__8044_9852 = 0;while(true){
if((i__8044_9852 < count__8043_9851))
{var arg__6537__auto___9853 = cljs.core._nth.call(null,chunk__8042_9850,i__8044_9852);a__6536__auto__.push(arg__6537__auto___9853);
{
var G__9854 = seq__8041_9849;
var G__9855 = chunk__8042_9850;
var G__9856 = count__8043_9851;
var G__9857 = (i__8044_9852 + 1);
seq__8041_9849 = G__9854;
chunk__8042_9850 = G__9855;
count__8043_9851 = G__9856;
i__8044_9852 = G__9857;
continue;
}
} else
{var temp__4092__auto___9858 = cljs.core.seq.call(null,seq__8041_9849);if(temp__4092__auto___9858)
{var seq__8041_9859__$1 = temp__4092__auto___9858;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8041_9859__$1))
{var c__5635__auto___9860 = cljs.core.chunk_first.call(null,seq__8041_9859__$1);{
var G__9861 = cljs.core.chunk_rest.call(null,seq__8041_9859__$1);
var G__9862 = c__5635__auto___9860;
var G__9863 = cljs.core.count.call(null,c__5635__auto___9860);
var G__9864 = 0;
seq__8041_9849 = G__9861;
chunk__8042_9850 = G__9862;
count__8043_9851 = G__9863;
i__8044_9852 = G__9864;
continue;
}
} else
{var arg__6537__auto___9865 = cljs.core.first.call(null,seq__8041_9859__$1);a__6536__auto__.push(arg__6537__auto___9865);
{
var G__9866 = cljs.core.next.call(null,seq__8041_9859__$1);
var G__9867 = null;
var G__9868 = 0;
var G__9869 = 0;
seq__8041_9849 = G__9866;
chunk__8042_9850 = G__9867;
count__8043_9851 = G__9868;
i__8044_9852 = G__9869;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.menu.apply(null,a__6536__auto__);
};
var menu = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return menu__delegate.call(this,args__6535__auto__);};
menu.cljs$lang$maxFixedArity = 0;
menu.cljs$lang$applyTo = (function (arglist__9870){
var args__6535__auto__ = cljs.core.seq(arglist__9870);
return menu__delegate(args__6535__auto__);
});
menu.cljs$core$IFn$_invoke$arity$variadic = menu__delegate;
return menu;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.menuitem = (function() { 
var menuitem__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__8049_9871 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__8050_9872 = null;var count__8051_9873 = 0;var i__8052_9874 = 0;while(true){
if((i__8052_9874 < count__8051_9873))
{var arg__6537__auto___9875 = cljs.core._nth.call(null,chunk__8050_9872,i__8052_9874);a__6536__auto__.push(arg__6537__auto___9875);
{
var G__9876 = seq__8049_9871;
var G__9877 = chunk__8050_9872;
var G__9878 = count__8051_9873;
var G__9879 = (i__8052_9874 + 1);
seq__8049_9871 = G__9876;
chunk__8050_9872 = G__9877;
count__8051_9873 = G__9878;
i__8052_9874 = G__9879;
continue;
}
} else
{var temp__4092__auto___9880 = cljs.core.seq.call(null,seq__8049_9871);if(temp__4092__auto___9880)
{var seq__8049_9881__$1 = temp__4092__auto___9880;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8049_9881__$1))
{var c__5635__auto___9882 = cljs.core.chunk_first.call(null,seq__8049_9881__$1);{
var G__9883 = cljs.core.chunk_rest.call(null,seq__8049_9881__$1);
var G__9884 = c__5635__auto___9882;
var G__9885 = cljs.core.count.call(null,c__5635__auto___9882);
var G__9886 = 0;
seq__8049_9871 = G__9883;
chunk__8050_9872 = G__9884;
count__8051_9873 = G__9885;
i__8052_9874 = G__9886;
continue;
}
} else
{var arg__6537__auto___9887 = cljs.core.first.call(null,seq__8049_9881__$1);a__6536__auto__.push(arg__6537__auto___9887);
{
var G__9888 = cljs.core.next.call(null,seq__8049_9881__$1);
var G__9889 = null;
var G__9890 = 0;
var G__9891 = 0;
seq__8049_9871 = G__9888;
chunk__8050_9872 = G__9889;
count__8051_9873 = G__9890;
i__8052_9874 = G__9891;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.menuitem.apply(null,a__6536__auto__);
};
var menuitem = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return menuitem__delegate.call(this,args__6535__auto__);};
menuitem.cljs$lang$maxFixedArity = 0;
menuitem.cljs$lang$applyTo = (function (arglist__9892){
var args__6535__auto__ = cljs.core.seq(arglist__9892);
return menuitem__delegate(args__6535__auto__);
});
menuitem.cljs$core$IFn$_invoke$arity$variadic = menuitem__delegate;
return menuitem;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.meta = (function() { 
var meta__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__8057_9893 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__8058_9894 = null;var count__8059_9895 = 0;var i__8060_9896 = 0;while(true){
if((i__8060_9896 < count__8059_9895))
{var arg__6537__auto___9897 = cljs.core._nth.call(null,chunk__8058_9894,i__8060_9896);a__6536__auto__.push(arg__6537__auto___9897);
{
var G__9898 = seq__8057_9893;
var G__9899 = chunk__8058_9894;
var G__9900 = count__8059_9895;
var G__9901 = (i__8060_9896 + 1);
seq__8057_9893 = G__9898;
chunk__8058_9894 = G__9899;
count__8059_9895 = G__9900;
i__8060_9896 = G__9901;
continue;
}
} else
{var temp__4092__auto___9902 = cljs.core.seq.call(null,seq__8057_9893);if(temp__4092__auto___9902)
{var seq__8057_9903__$1 = temp__4092__auto___9902;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8057_9903__$1))
{var c__5635__auto___9904 = cljs.core.chunk_first.call(null,seq__8057_9903__$1);{
var G__9905 = cljs.core.chunk_rest.call(null,seq__8057_9903__$1);
var G__9906 = c__5635__auto___9904;
var G__9907 = cljs.core.count.call(null,c__5635__auto___9904);
var G__9908 = 0;
seq__8057_9893 = G__9905;
chunk__8058_9894 = G__9906;
count__8059_9895 = G__9907;
i__8060_9896 = G__9908;
continue;
}
} else
{var arg__6537__auto___9909 = cljs.core.first.call(null,seq__8057_9903__$1);a__6536__auto__.push(arg__6537__auto___9909);
{
var G__9910 = cljs.core.next.call(null,seq__8057_9903__$1);
var G__9911 = null;
var G__9912 = 0;
var G__9913 = 0;
seq__8057_9893 = G__9910;
chunk__8058_9894 = G__9911;
count__8059_9895 = G__9912;
i__8060_9896 = G__9913;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.meta.apply(null,a__6536__auto__);
};
var meta = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return meta__delegate.call(this,args__6535__auto__);};
meta.cljs$lang$maxFixedArity = 0;
meta.cljs$lang$applyTo = (function (arglist__9914){
var args__6535__auto__ = cljs.core.seq(arglist__9914);
return meta__delegate(args__6535__auto__);
});
meta.cljs$core$IFn$_invoke$arity$variadic = meta__delegate;
return meta;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.meter = (function() { 
var meter__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__8065_9915 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__8066_9916 = null;var count__8067_9917 = 0;var i__8068_9918 = 0;while(true){
if((i__8068_9918 < count__8067_9917))
{var arg__6537__auto___9919 = cljs.core._nth.call(null,chunk__8066_9916,i__8068_9918);a__6536__auto__.push(arg__6537__auto___9919);
{
var G__9920 = seq__8065_9915;
var G__9921 = chunk__8066_9916;
var G__9922 = count__8067_9917;
var G__9923 = (i__8068_9918 + 1);
seq__8065_9915 = G__9920;
chunk__8066_9916 = G__9921;
count__8067_9917 = G__9922;
i__8068_9918 = G__9923;
continue;
}
} else
{var temp__4092__auto___9924 = cljs.core.seq.call(null,seq__8065_9915);if(temp__4092__auto___9924)
{var seq__8065_9925__$1 = temp__4092__auto___9924;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8065_9925__$1))
{var c__5635__auto___9926 = cljs.core.chunk_first.call(null,seq__8065_9925__$1);{
var G__9927 = cljs.core.chunk_rest.call(null,seq__8065_9925__$1);
var G__9928 = c__5635__auto___9926;
var G__9929 = cljs.core.count.call(null,c__5635__auto___9926);
var G__9930 = 0;
seq__8065_9915 = G__9927;
chunk__8066_9916 = G__9928;
count__8067_9917 = G__9929;
i__8068_9918 = G__9930;
continue;
}
} else
{var arg__6537__auto___9931 = cljs.core.first.call(null,seq__8065_9925__$1);a__6536__auto__.push(arg__6537__auto___9931);
{
var G__9932 = cljs.core.next.call(null,seq__8065_9925__$1);
var G__9933 = null;
var G__9934 = 0;
var G__9935 = 0;
seq__8065_9915 = G__9932;
chunk__8066_9916 = G__9933;
count__8067_9917 = G__9934;
i__8068_9918 = G__9935;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.meter.apply(null,a__6536__auto__);
};
var meter = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return meter__delegate.call(this,args__6535__auto__);};
meter.cljs$lang$maxFixedArity = 0;
meter.cljs$lang$applyTo = (function (arglist__9936){
var args__6535__auto__ = cljs.core.seq(arglist__9936);
return meter__delegate(args__6535__auto__);
});
meter.cljs$core$IFn$_invoke$arity$variadic = meter__delegate;
return meter;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.nav = (function() { 
var nav__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__8073_9937 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__8074_9938 = null;var count__8075_9939 = 0;var i__8076_9940 = 0;while(true){
if((i__8076_9940 < count__8075_9939))
{var arg__6537__auto___9941 = cljs.core._nth.call(null,chunk__8074_9938,i__8076_9940);a__6536__auto__.push(arg__6537__auto___9941);
{
var G__9942 = seq__8073_9937;
var G__9943 = chunk__8074_9938;
var G__9944 = count__8075_9939;
var G__9945 = (i__8076_9940 + 1);
seq__8073_9937 = G__9942;
chunk__8074_9938 = G__9943;
count__8075_9939 = G__9944;
i__8076_9940 = G__9945;
continue;
}
} else
{var temp__4092__auto___9946 = cljs.core.seq.call(null,seq__8073_9937);if(temp__4092__auto___9946)
{var seq__8073_9947__$1 = temp__4092__auto___9946;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8073_9947__$1))
{var c__5635__auto___9948 = cljs.core.chunk_first.call(null,seq__8073_9947__$1);{
var G__9949 = cljs.core.chunk_rest.call(null,seq__8073_9947__$1);
var G__9950 = c__5635__auto___9948;
var G__9951 = cljs.core.count.call(null,c__5635__auto___9948);
var G__9952 = 0;
seq__8073_9937 = G__9949;
chunk__8074_9938 = G__9950;
count__8075_9939 = G__9951;
i__8076_9940 = G__9952;
continue;
}
} else
{var arg__6537__auto___9953 = cljs.core.first.call(null,seq__8073_9947__$1);a__6536__auto__.push(arg__6537__auto___9953);
{
var G__9954 = cljs.core.next.call(null,seq__8073_9947__$1);
var G__9955 = null;
var G__9956 = 0;
var G__9957 = 0;
seq__8073_9937 = G__9954;
chunk__8074_9938 = G__9955;
count__8075_9939 = G__9956;
i__8076_9940 = G__9957;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.nav.apply(null,a__6536__auto__);
};
var nav = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return nav__delegate.call(this,args__6535__auto__);};
nav.cljs$lang$maxFixedArity = 0;
nav.cljs$lang$applyTo = (function (arglist__9958){
var args__6535__auto__ = cljs.core.seq(arglist__9958);
return nav__delegate(args__6535__auto__);
});
nav.cljs$core$IFn$_invoke$arity$variadic = nav__delegate;
return nav;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.noscript = (function() { 
var noscript__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__8081_9959 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__8082_9960 = null;var count__8083_9961 = 0;var i__8084_9962 = 0;while(true){
if((i__8084_9962 < count__8083_9961))
{var arg__6537__auto___9963 = cljs.core._nth.call(null,chunk__8082_9960,i__8084_9962);a__6536__auto__.push(arg__6537__auto___9963);
{
var G__9964 = seq__8081_9959;
var G__9965 = chunk__8082_9960;
var G__9966 = count__8083_9961;
var G__9967 = (i__8084_9962 + 1);
seq__8081_9959 = G__9964;
chunk__8082_9960 = G__9965;
count__8083_9961 = G__9966;
i__8084_9962 = G__9967;
continue;
}
} else
{var temp__4092__auto___9968 = cljs.core.seq.call(null,seq__8081_9959);if(temp__4092__auto___9968)
{var seq__8081_9969__$1 = temp__4092__auto___9968;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8081_9969__$1))
{var c__5635__auto___9970 = cljs.core.chunk_first.call(null,seq__8081_9969__$1);{
var G__9971 = cljs.core.chunk_rest.call(null,seq__8081_9969__$1);
var G__9972 = c__5635__auto___9970;
var G__9973 = cljs.core.count.call(null,c__5635__auto___9970);
var G__9974 = 0;
seq__8081_9959 = G__9971;
chunk__8082_9960 = G__9972;
count__8083_9961 = G__9973;
i__8084_9962 = G__9974;
continue;
}
} else
{var arg__6537__auto___9975 = cljs.core.first.call(null,seq__8081_9969__$1);a__6536__auto__.push(arg__6537__auto___9975);
{
var G__9976 = cljs.core.next.call(null,seq__8081_9969__$1);
var G__9977 = null;
var G__9978 = 0;
var G__9979 = 0;
seq__8081_9959 = G__9976;
chunk__8082_9960 = G__9977;
count__8083_9961 = G__9978;
i__8084_9962 = G__9979;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.noscript.apply(null,a__6536__auto__);
};
var noscript = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return noscript__delegate.call(this,args__6535__auto__);};
noscript.cljs$lang$maxFixedArity = 0;
noscript.cljs$lang$applyTo = (function (arglist__9980){
var args__6535__auto__ = cljs.core.seq(arglist__9980);
return noscript__delegate(args__6535__auto__);
});
noscript.cljs$core$IFn$_invoke$arity$variadic = noscript__delegate;
return noscript;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.object = (function() { 
var object__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__8089_9981 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__8090_9982 = null;var count__8091_9983 = 0;var i__8092_9984 = 0;while(true){
if((i__8092_9984 < count__8091_9983))
{var arg__6537__auto___9985 = cljs.core._nth.call(null,chunk__8090_9982,i__8092_9984);a__6536__auto__.push(arg__6537__auto___9985);
{
var G__9986 = seq__8089_9981;
var G__9987 = chunk__8090_9982;
var G__9988 = count__8091_9983;
var G__9989 = (i__8092_9984 + 1);
seq__8089_9981 = G__9986;
chunk__8090_9982 = G__9987;
count__8091_9983 = G__9988;
i__8092_9984 = G__9989;
continue;
}
} else
{var temp__4092__auto___9990 = cljs.core.seq.call(null,seq__8089_9981);if(temp__4092__auto___9990)
{var seq__8089_9991__$1 = temp__4092__auto___9990;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8089_9991__$1))
{var c__5635__auto___9992 = cljs.core.chunk_first.call(null,seq__8089_9991__$1);{
var G__9993 = cljs.core.chunk_rest.call(null,seq__8089_9991__$1);
var G__9994 = c__5635__auto___9992;
var G__9995 = cljs.core.count.call(null,c__5635__auto___9992);
var G__9996 = 0;
seq__8089_9981 = G__9993;
chunk__8090_9982 = G__9994;
count__8091_9983 = G__9995;
i__8092_9984 = G__9996;
continue;
}
} else
{var arg__6537__auto___9997 = cljs.core.first.call(null,seq__8089_9991__$1);a__6536__auto__.push(arg__6537__auto___9997);
{
var G__9998 = cljs.core.next.call(null,seq__8089_9991__$1);
var G__9999 = null;
var G__10000 = 0;
var G__10001 = 0;
seq__8089_9981 = G__9998;
chunk__8090_9982 = G__9999;
count__8091_9983 = G__10000;
i__8092_9984 = G__10001;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.object.apply(null,a__6536__auto__);
};
var object = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return object__delegate.call(this,args__6535__auto__);};
object.cljs$lang$maxFixedArity = 0;
object.cljs$lang$applyTo = (function (arglist__10002){
var args__6535__auto__ = cljs.core.seq(arglist__10002);
return object__delegate(args__6535__auto__);
});
object.cljs$core$IFn$_invoke$arity$variadic = object__delegate;
return object;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.ol = (function() { 
var ol__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__8097_10003 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__8098_10004 = null;var count__8099_10005 = 0;var i__8100_10006 = 0;while(true){
if((i__8100_10006 < count__8099_10005))
{var arg__6537__auto___10007 = cljs.core._nth.call(null,chunk__8098_10004,i__8100_10006);a__6536__auto__.push(arg__6537__auto___10007);
{
var G__10008 = seq__8097_10003;
var G__10009 = chunk__8098_10004;
var G__10010 = count__8099_10005;
var G__10011 = (i__8100_10006 + 1);
seq__8097_10003 = G__10008;
chunk__8098_10004 = G__10009;
count__8099_10005 = G__10010;
i__8100_10006 = G__10011;
continue;
}
} else
{var temp__4092__auto___10012 = cljs.core.seq.call(null,seq__8097_10003);if(temp__4092__auto___10012)
{var seq__8097_10013__$1 = temp__4092__auto___10012;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8097_10013__$1))
{var c__5635__auto___10014 = cljs.core.chunk_first.call(null,seq__8097_10013__$1);{
var G__10015 = cljs.core.chunk_rest.call(null,seq__8097_10013__$1);
var G__10016 = c__5635__auto___10014;
var G__10017 = cljs.core.count.call(null,c__5635__auto___10014);
var G__10018 = 0;
seq__8097_10003 = G__10015;
chunk__8098_10004 = G__10016;
count__8099_10005 = G__10017;
i__8100_10006 = G__10018;
continue;
}
} else
{var arg__6537__auto___10019 = cljs.core.first.call(null,seq__8097_10013__$1);a__6536__auto__.push(arg__6537__auto___10019);
{
var G__10020 = cljs.core.next.call(null,seq__8097_10013__$1);
var G__10021 = null;
var G__10022 = 0;
var G__10023 = 0;
seq__8097_10003 = G__10020;
chunk__8098_10004 = G__10021;
count__8099_10005 = G__10022;
i__8100_10006 = G__10023;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.ol.apply(null,a__6536__auto__);
};
var ol = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ol__delegate.call(this,args__6535__auto__);};
ol.cljs$lang$maxFixedArity = 0;
ol.cljs$lang$applyTo = (function (arglist__10024){
var args__6535__auto__ = cljs.core.seq(arglist__10024);
return ol__delegate(args__6535__auto__);
});
ol.cljs$core$IFn$_invoke$arity$variadic = ol__delegate;
return ol;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.optgroup = (function() { 
var optgroup__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__8105_10025 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__8106_10026 = null;var count__8107_10027 = 0;var i__8108_10028 = 0;while(true){
if((i__8108_10028 < count__8107_10027))
{var arg__6537__auto___10029 = cljs.core._nth.call(null,chunk__8106_10026,i__8108_10028);a__6536__auto__.push(arg__6537__auto___10029);
{
var G__10030 = seq__8105_10025;
var G__10031 = chunk__8106_10026;
var G__10032 = count__8107_10027;
var G__10033 = (i__8108_10028 + 1);
seq__8105_10025 = G__10030;
chunk__8106_10026 = G__10031;
count__8107_10027 = G__10032;
i__8108_10028 = G__10033;
continue;
}
} else
{var temp__4092__auto___10034 = cljs.core.seq.call(null,seq__8105_10025);if(temp__4092__auto___10034)
{var seq__8105_10035__$1 = temp__4092__auto___10034;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8105_10035__$1))
{var c__5635__auto___10036 = cljs.core.chunk_first.call(null,seq__8105_10035__$1);{
var G__10037 = cljs.core.chunk_rest.call(null,seq__8105_10035__$1);
var G__10038 = c__5635__auto___10036;
var G__10039 = cljs.core.count.call(null,c__5635__auto___10036);
var G__10040 = 0;
seq__8105_10025 = G__10037;
chunk__8106_10026 = G__10038;
count__8107_10027 = G__10039;
i__8108_10028 = G__10040;
continue;
}
} else
{var arg__6537__auto___10041 = cljs.core.first.call(null,seq__8105_10035__$1);a__6536__auto__.push(arg__6537__auto___10041);
{
var G__10042 = cljs.core.next.call(null,seq__8105_10035__$1);
var G__10043 = null;
var G__10044 = 0;
var G__10045 = 0;
seq__8105_10025 = G__10042;
chunk__8106_10026 = G__10043;
count__8107_10027 = G__10044;
i__8108_10028 = G__10045;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.optgroup.apply(null,a__6536__auto__);
};
var optgroup = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return optgroup__delegate.call(this,args__6535__auto__);};
optgroup.cljs$lang$maxFixedArity = 0;
optgroup.cljs$lang$applyTo = (function (arglist__10046){
var args__6535__auto__ = cljs.core.seq(arglist__10046);
return optgroup__delegate(args__6535__auto__);
});
optgroup.cljs$core$IFn$_invoke$arity$variadic = optgroup__delegate;
return optgroup;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.option = (function() { 
var option__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__8113_10047 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__8114_10048 = null;var count__8115_10049 = 0;var i__8116_10050 = 0;while(true){
if((i__8116_10050 < count__8115_10049))
{var arg__6537__auto___10051 = cljs.core._nth.call(null,chunk__8114_10048,i__8116_10050);a__6536__auto__.push(arg__6537__auto___10051);
{
var G__10052 = seq__8113_10047;
var G__10053 = chunk__8114_10048;
var G__10054 = count__8115_10049;
var G__10055 = (i__8116_10050 + 1);
seq__8113_10047 = G__10052;
chunk__8114_10048 = G__10053;
count__8115_10049 = G__10054;
i__8116_10050 = G__10055;
continue;
}
} else
{var temp__4092__auto___10056 = cljs.core.seq.call(null,seq__8113_10047);if(temp__4092__auto___10056)
{var seq__8113_10057__$1 = temp__4092__auto___10056;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8113_10057__$1))
{var c__5635__auto___10058 = cljs.core.chunk_first.call(null,seq__8113_10057__$1);{
var G__10059 = cljs.core.chunk_rest.call(null,seq__8113_10057__$1);
var G__10060 = c__5635__auto___10058;
var G__10061 = cljs.core.count.call(null,c__5635__auto___10058);
var G__10062 = 0;
seq__8113_10047 = G__10059;
chunk__8114_10048 = G__10060;
count__8115_10049 = G__10061;
i__8116_10050 = G__10062;
continue;
}
} else
{var arg__6537__auto___10063 = cljs.core.first.call(null,seq__8113_10057__$1);a__6536__auto__.push(arg__6537__auto___10063);
{
var G__10064 = cljs.core.next.call(null,seq__8113_10057__$1);
var G__10065 = null;
var G__10066 = 0;
var G__10067 = 0;
seq__8113_10047 = G__10064;
chunk__8114_10048 = G__10065;
count__8115_10049 = G__10066;
i__8116_10050 = G__10067;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.option.apply(null,a__6536__auto__);
};
var option = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return option__delegate.call(this,args__6535__auto__);};
option.cljs$lang$maxFixedArity = 0;
option.cljs$lang$applyTo = (function (arglist__10068){
var args__6535__auto__ = cljs.core.seq(arglist__10068);
return option__delegate(args__6535__auto__);
});
option.cljs$core$IFn$_invoke$arity$variadic = option__delegate;
return option;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.output = (function() { 
var output__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__8121_10069 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__8122_10070 = null;var count__8123_10071 = 0;var i__8124_10072 = 0;while(true){
if((i__8124_10072 < count__8123_10071))
{var arg__6537__auto___10073 = cljs.core._nth.call(null,chunk__8122_10070,i__8124_10072);a__6536__auto__.push(arg__6537__auto___10073);
{
var G__10074 = seq__8121_10069;
var G__10075 = chunk__8122_10070;
var G__10076 = count__8123_10071;
var G__10077 = (i__8124_10072 + 1);
seq__8121_10069 = G__10074;
chunk__8122_10070 = G__10075;
count__8123_10071 = G__10076;
i__8124_10072 = G__10077;
continue;
}
} else
{var temp__4092__auto___10078 = cljs.core.seq.call(null,seq__8121_10069);if(temp__4092__auto___10078)
{var seq__8121_10079__$1 = temp__4092__auto___10078;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8121_10079__$1))
{var c__5635__auto___10080 = cljs.core.chunk_first.call(null,seq__8121_10079__$1);{
var G__10081 = cljs.core.chunk_rest.call(null,seq__8121_10079__$1);
var G__10082 = c__5635__auto___10080;
var G__10083 = cljs.core.count.call(null,c__5635__auto___10080);
var G__10084 = 0;
seq__8121_10069 = G__10081;
chunk__8122_10070 = G__10082;
count__8123_10071 = G__10083;
i__8124_10072 = G__10084;
continue;
}
} else
{var arg__6537__auto___10085 = cljs.core.first.call(null,seq__8121_10079__$1);a__6536__auto__.push(arg__6537__auto___10085);
{
var G__10086 = cljs.core.next.call(null,seq__8121_10079__$1);
var G__10087 = null;
var G__10088 = 0;
var G__10089 = 0;
seq__8121_10069 = G__10086;
chunk__8122_10070 = G__10087;
count__8123_10071 = G__10088;
i__8124_10072 = G__10089;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.output.apply(null,a__6536__auto__);
};
var output = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return output__delegate.call(this,args__6535__auto__);};
output.cljs$lang$maxFixedArity = 0;
output.cljs$lang$applyTo = (function (arglist__10090){
var args__6535__auto__ = cljs.core.seq(arglist__10090);
return output__delegate(args__6535__auto__);
});
output.cljs$core$IFn$_invoke$arity$variadic = output__delegate;
return output;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.p = (function() { 
var p__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__8129_10091 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__8130_10092 = null;var count__8131_10093 = 0;var i__8132_10094 = 0;while(true){
if((i__8132_10094 < count__8131_10093))
{var arg__6537__auto___10095 = cljs.core._nth.call(null,chunk__8130_10092,i__8132_10094);a__6536__auto__.push(arg__6537__auto___10095);
{
var G__10096 = seq__8129_10091;
var G__10097 = chunk__8130_10092;
var G__10098 = count__8131_10093;
var G__10099 = (i__8132_10094 + 1);
seq__8129_10091 = G__10096;
chunk__8130_10092 = G__10097;
count__8131_10093 = G__10098;
i__8132_10094 = G__10099;
continue;
}
} else
{var temp__4092__auto___10100 = cljs.core.seq.call(null,seq__8129_10091);if(temp__4092__auto___10100)
{var seq__8129_10101__$1 = temp__4092__auto___10100;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8129_10101__$1))
{var c__5635__auto___10102 = cljs.core.chunk_first.call(null,seq__8129_10101__$1);{
var G__10103 = cljs.core.chunk_rest.call(null,seq__8129_10101__$1);
var G__10104 = c__5635__auto___10102;
var G__10105 = cljs.core.count.call(null,c__5635__auto___10102);
var G__10106 = 0;
seq__8129_10091 = G__10103;
chunk__8130_10092 = G__10104;
count__8131_10093 = G__10105;
i__8132_10094 = G__10106;
continue;
}
} else
{var arg__6537__auto___10107 = cljs.core.first.call(null,seq__8129_10101__$1);a__6536__auto__.push(arg__6537__auto___10107);
{
var G__10108 = cljs.core.next.call(null,seq__8129_10101__$1);
var G__10109 = null;
var G__10110 = 0;
var G__10111 = 0;
seq__8129_10091 = G__10108;
chunk__8130_10092 = G__10109;
count__8131_10093 = G__10110;
i__8132_10094 = G__10111;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.p.apply(null,a__6536__auto__);
};
var p = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return p__delegate.call(this,args__6535__auto__);};
p.cljs$lang$maxFixedArity = 0;
p.cljs$lang$applyTo = (function (arglist__10112){
var args__6535__auto__ = cljs.core.seq(arglist__10112);
return p__delegate(args__6535__auto__);
});
p.cljs$core$IFn$_invoke$arity$variadic = p__delegate;
return p;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.param = (function() { 
var param__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__8137_10113 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__8138_10114 = null;var count__8139_10115 = 0;var i__8140_10116 = 0;while(true){
if((i__8140_10116 < count__8139_10115))
{var arg__6537__auto___10117 = cljs.core._nth.call(null,chunk__8138_10114,i__8140_10116);a__6536__auto__.push(arg__6537__auto___10117);
{
var G__10118 = seq__8137_10113;
var G__10119 = chunk__8138_10114;
var G__10120 = count__8139_10115;
var G__10121 = (i__8140_10116 + 1);
seq__8137_10113 = G__10118;
chunk__8138_10114 = G__10119;
count__8139_10115 = G__10120;
i__8140_10116 = G__10121;
continue;
}
} else
{var temp__4092__auto___10122 = cljs.core.seq.call(null,seq__8137_10113);if(temp__4092__auto___10122)
{var seq__8137_10123__$1 = temp__4092__auto___10122;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8137_10123__$1))
{var c__5635__auto___10124 = cljs.core.chunk_first.call(null,seq__8137_10123__$1);{
var G__10125 = cljs.core.chunk_rest.call(null,seq__8137_10123__$1);
var G__10126 = c__5635__auto___10124;
var G__10127 = cljs.core.count.call(null,c__5635__auto___10124);
var G__10128 = 0;
seq__8137_10113 = G__10125;
chunk__8138_10114 = G__10126;
count__8139_10115 = G__10127;
i__8140_10116 = G__10128;
continue;
}
} else
{var arg__6537__auto___10129 = cljs.core.first.call(null,seq__8137_10123__$1);a__6536__auto__.push(arg__6537__auto___10129);
{
var G__10130 = cljs.core.next.call(null,seq__8137_10123__$1);
var G__10131 = null;
var G__10132 = 0;
var G__10133 = 0;
seq__8137_10113 = G__10130;
chunk__8138_10114 = G__10131;
count__8139_10115 = G__10132;
i__8140_10116 = G__10133;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.param.apply(null,a__6536__auto__);
};
var param = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return param__delegate.call(this,args__6535__auto__);};
param.cljs$lang$maxFixedArity = 0;
param.cljs$lang$applyTo = (function (arglist__10134){
var args__6535__auto__ = cljs.core.seq(arglist__10134);
return param__delegate(args__6535__auto__);
});
param.cljs$core$IFn$_invoke$arity$variadic = param__delegate;
return param;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.pre = (function() { 
var pre__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__8145_10135 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__8146_10136 = null;var count__8147_10137 = 0;var i__8148_10138 = 0;while(true){
if((i__8148_10138 < count__8147_10137))
{var arg__6537__auto___10139 = cljs.core._nth.call(null,chunk__8146_10136,i__8148_10138);a__6536__auto__.push(arg__6537__auto___10139);
{
var G__10140 = seq__8145_10135;
var G__10141 = chunk__8146_10136;
var G__10142 = count__8147_10137;
var G__10143 = (i__8148_10138 + 1);
seq__8145_10135 = G__10140;
chunk__8146_10136 = G__10141;
count__8147_10137 = G__10142;
i__8148_10138 = G__10143;
continue;
}
} else
{var temp__4092__auto___10144 = cljs.core.seq.call(null,seq__8145_10135);if(temp__4092__auto___10144)
{var seq__8145_10145__$1 = temp__4092__auto___10144;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8145_10145__$1))
{var c__5635__auto___10146 = cljs.core.chunk_first.call(null,seq__8145_10145__$1);{
var G__10147 = cljs.core.chunk_rest.call(null,seq__8145_10145__$1);
var G__10148 = c__5635__auto___10146;
var G__10149 = cljs.core.count.call(null,c__5635__auto___10146);
var G__10150 = 0;
seq__8145_10135 = G__10147;
chunk__8146_10136 = G__10148;
count__8147_10137 = G__10149;
i__8148_10138 = G__10150;
continue;
}
} else
{var arg__6537__auto___10151 = cljs.core.first.call(null,seq__8145_10145__$1);a__6536__auto__.push(arg__6537__auto___10151);
{
var G__10152 = cljs.core.next.call(null,seq__8145_10145__$1);
var G__10153 = null;
var G__10154 = 0;
var G__10155 = 0;
seq__8145_10135 = G__10152;
chunk__8146_10136 = G__10153;
count__8147_10137 = G__10154;
i__8148_10138 = G__10155;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.pre.apply(null,a__6536__auto__);
};
var pre = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return pre__delegate.call(this,args__6535__auto__);};
pre.cljs$lang$maxFixedArity = 0;
pre.cljs$lang$applyTo = (function (arglist__10156){
var args__6535__auto__ = cljs.core.seq(arglist__10156);
return pre__delegate(args__6535__auto__);
});
pre.cljs$core$IFn$_invoke$arity$variadic = pre__delegate;
return pre;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.progress = (function() { 
var progress__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__8153_10157 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__8154_10158 = null;var count__8155_10159 = 0;var i__8156_10160 = 0;while(true){
if((i__8156_10160 < count__8155_10159))
{var arg__6537__auto___10161 = cljs.core._nth.call(null,chunk__8154_10158,i__8156_10160);a__6536__auto__.push(arg__6537__auto___10161);
{
var G__10162 = seq__8153_10157;
var G__10163 = chunk__8154_10158;
var G__10164 = count__8155_10159;
var G__10165 = (i__8156_10160 + 1);
seq__8153_10157 = G__10162;
chunk__8154_10158 = G__10163;
count__8155_10159 = G__10164;
i__8156_10160 = G__10165;
continue;
}
} else
{var temp__4092__auto___10166 = cljs.core.seq.call(null,seq__8153_10157);if(temp__4092__auto___10166)
{var seq__8153_10167__$1 = temp__4092__auto___10166;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8153_10167__$1))
{var c__5635__auto___10168 = cljs.core.chunk_first.call(null,seq__8153_10167__$1);{
var G__10169 = cljs.core.chunk_rest.call(null,seq__8153_10167__$1);
var G__10170 = c__5635__auto___10168;
var G__10171 = cljs.core.count.call(null,c__5635__auto___10168);
var G__10172 = 0;
seq__8153_10157 = G__10169;
chunk__8154_10158 = G__10170;
count__8155_10159 = G__10171;
i__8156_10160 = G__10172;
continue;
}
} else
{var arg__6537__auto___10173 = cljs.core.first.call(null,seq__8153_10167__$1);a__6536__auto__.push(arg__6537__auto___10173);
{
var G__10174 = cljs.core.next.call(null,seq__8153_10167__$1);
var G__10175 = null;
var G__10176 = 0;
var G__10177 = 0;
seq__8153_10157 = G__10174;
chunk__8154_10158 = G__10175;
count__8155_10159 = G__10176;
i__8156_10160 = G__10177;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.progress.apply(null,a__6536__auto__);
};
var progress = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return progress__delegate.call(this,args__6535__auto__);};
progress.cljs$lang$maxFixedArity = 0;
progress.cljs$lang$applyTo = (function (arglist__10178){
var args__6535__auto__ = cljs.core.seq(arglist__10178);
return progress__delegate(args__6535__auto__);
});
progress.cljs$core$IFn$_invoke$arity$variadic = progress__delegate;
return progress;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.q = (function() { 
var q__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__8161_10179 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__8162_10180 = null;var count__8163_10181 = 0;var i__8164_10182 = 0;while(true){
if((i__8164_10182 < count__8163_10181))
{var arg__6537__auto___10183 = cljs.core._nth.call(null,chunk__8162_10180,i__8164_10182);a__6536__auto__.push(arg__6537__auto___10183);
{
var G__10184 = seq__8161_10179;
var G__10185 = chunk__8162_10180;
var G__10186 = count__8163_10181;
var G__10187 = (i__8164_10182 + 1);
seq__8161_10179 = G__10184;
chunk__8162_10180 = G__10185;
count__8163_10181 = G__10186;
i__8164_10182 = G__10187;
continue;
}
} else
{var temp__4092__auto___10188 = cljs.core.seq.call(null,seq__8161_10179);if(temp__4092__auto___10188)
{var seq__8161_10189__$1 = temp__4092__auto___10188;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8161_10189__$1))
{var c__5635__auto___10190 = cljs.core.chunk_first.call(null,seq__8161_10189__$1);{
var G__10191 = cljs.core.chunk_rest.call(null,seq__8161_10189__$1);
var G__10192 = c__5635__auto___10190;
var G__10193 = cljs.core.count.call(null,c__5635__auto___10190);
var G__10194 = 0;
seq__8161_10179 = G__10191;
chunk__8162_10180 = G__10192;
count__8163_10181 = G__10193;
i__8164_10182 = G__10194;
continue;
}
} else
{var arg__6537__auto___10195 = cljs.core.first.call(null,seq__8161_10189__$1);a__6536__auto__.push(arg__6537__auto___10195);
{
var G__10196 = cljs.core.next.call(null,seq__8161_10189__$1);
var G__10197 = null;
var G__10198 = 0;
var G__10199 = 0;
seq__8161_10179 = G__10196;
chunk__8162_10180 = G__10197;
count__8163_10181 = G__10198;
i__8164_10182 = G__10199;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.q.apply(null,a__6536__auto__);
};
var q = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return q__delegate.call(this,args__6535__auto__);};
q.cljs$lang$maxFixedArity = 0;
q.cljs$lang$applyTo = (function (arglist__10200){
var args__6535__auto__ = cljs.core.seq(arglist__10200);
return q__delegate(args__6535__auto__);
});
q.cljs$core$IFn$_invoke$arity$variadic = q__delegate;
return q;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.rp = (function() { 
var rp__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__8169_10201 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__8170_10202 = null;var count__8171_10203 = 0;var i__8172_10204 = 0;while(true){
if((i__8172_10204 < count__8171_10203))
{var arg__6537__auto___10205 = cljs.core._nth.call(null,chunk__8170_10202,i__8172_10204);a__6536__auto__.push(arg__6537__auto___10205);
{
var G__10206 = seq__8169_10201;
var G__10207 = chunk__8170_10202;
var G__10208 = count__8171_10203;
var G__10209 = (i__8172_10204 + 1);
seq__8169_10201 = G__10206;
chunk__8170_10202 = G__10207;
count__8171_10203 = G__10208;
i__8172_10204 = G__10209;
continue;
}
} else
{var temp__4092__auto___10210 = cljs.core.seq.call(null,seq__8169_10201);if(temp__4092__auto___10210)
{var seq__8169_10211__$1 = temp__4092__auto___10210;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8169_10211__$1))
{var c__5635__auto___10212 = cljs.core.chunk_first.call(null,seq__8169_10211__$1);{
var G__10213 = cljs.core.chunk_rest.call(null,seq__8169_10211__$1);
var G__10214 = c__5635__auto___10212;
var G__10215 = cljs.core.count.call(null,c__5635__auto___10212);
var G__10216 = 0;
seq__8169_10201 = G__10213;
chunk__8170_10202 = G__10214;
count__8171_10203 = G__10215;
i__8172_10204 = G__10216;
continue;
}
} else
{var arg__6537__auto___10217 = cljs.core.first.call(null,seq__8169_10211__$1);a__6536__auto__.push(arg__6537__auto___10217);
{
var G__10218 = cljs.core.next.call(null,seq__8169_10211__$1);
var G__10219 = null;
var G__10220 = 0;
var G__10221 = 0;
seq__8169_10201 = G__10218;
chunk__8170_10202 = G__10219;
count__8171_10203 = G__10220;
i__8172_10204 = G__10221;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.rp.apply(null,a__6536__auto__);
};
var rp = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return rp__delegate.call(this,args__6535__auto__);};
rp.cljs$lang$maxFixedArity = 0;
rp.cljs$lang$applyTo = (function (arglist__10222){
var args__6535__auto__ = cljs.core.seq(arglist__10222);
return rp__delegate(args__6535__auto__);
});
rp.cljs$core$IFn$_invoke$arity$variadic = rp__delegate;
return rp;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.rt = (function() { 
var rt__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__8177_10223 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__8178_10224 = null;var count__8179_10225 = 0;var i__8180_10226 = 0;while(true){
if((i__8180_10226 < count__8179_10225))
{var arg__6537__auto___10227 = cljs.core._nth.call(null,chunk__8178_10224,i__8180_10226);a__6536__auto__.push(arg__6537__auto___10227);
{
var G__10228 = seq__8177_10223;
var G__10229 = chunk__8178_10224;
var G__10230 = count__8179_10225;
var G__10231 = (i__8180_10226 + 1);
seq__8177_10223 = G__10228;
chunk__8178_10224 = G__10229;
count__8179_10225 = G__10230;
i__8180_10226 = G__10231;
continue;
}
} else
{var temp__4092__auto___10232 = cljs.core.seq.call(null,seq__8177_10223);if(temp__4092__auto___10232)
{var seq__8177_10233__$1 = temp__4092__auto___10232;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8177_10233__$1))
{var c__5635__auto___10234 = cljs.core.chunk_first.call(null,seq__8177_10233__$1);{
var G__10235 = cljs.core.chunk_rest.call(null,seq__8177_10233__$1);
var G__10236 = c__5635__auto___10234;
var G__10237 = cljs.core.count.call(null,c__5635__auto___10234);
var G__10238 = 0;
seq__8177_10223 = G__10235;
chunk__8178_10224 = G__10236;
count__8179_10225 = G__10237;
i__8180_10226 = G__10238;
continue;
}
} else
{var arg__6537__auto___10239 = cljs.core.first.call(null,seq__8177_10233__$1);a__6536__auto__.push(arg__6537__auto___10239);
{
var G__10240 = cljs.core.next.call(null,seq__8177_10233__$1);
var G__10241 = null;
var G__10242 = 0;
var G__10243 = 0;
seq__8177_10223 = G__10240;
chunk__8178_10224 = G__10241;
count__8179_10225 = G__10242;
i__8180_10226 = G__10243;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.rt.apply(null,a__6536__auto__);
};
var rt = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return rt__delegate.call(this,args__6535__auto__);};
rt.cljs$lang$maxFixedArity = 0;
rt.cljs$lang$applyTo = (function (arglist__10244){
var args__6535__auto__ = cljs.core.seq(arglist__10244);
return rt__delegate(args__6535__auto__);
});
rt.cljs$core$IFn$_invoke$arity$variadic = rt__delegate;
return rt;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.ruby = (function() { 
var ruby__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__8185_10245 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__8186_10246 = null;var count__8187_10247 = 0;var i__8188_10248 = 0;while(true){
if((i__8188_10248 < count__8187_10247))
{var arg__6537__auto___10249 = cljs.core._nth.call(null,chunk__8186_10246,i__8188_10248);a__6536__auto__.push(arg__6537__auto___10249);
{
var G__10250 = seq__8185_10245;
var G__10251 = chunk__8186_10246;
var G__10252 = count__8187_10247;
var G__10253 = (i__8188_10248 + 1);
seq__8185_10245 = G__10250;
chunk__8186_10246 = G__10251;
count__8187_10247 = G__10252;
i__8188_10248 = G__10253;
continue;
}
} else
{var temp__4092__auto___10254 = cljs.core.seq.call(null,seq__8185_10245);if(temp__4092__auto___10254)
{var seq__8185_10255__$1 = temp__4092__auto___10254;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8185_10255__$1))
{var c__5635__auto___10256 = cljs.core.chunk_first.call(null,seq__8185_10255__$1);{
var G__10257 = cljs.core.chunk_rest.call(null,seq__8185_10255__$1);
var G__10258 = c__5635__auto___10256;
var G__10259 = cljs.core.count.call(null,c__5635__auto___10256);
var G__10260 = 0;
seq__8185_10245 = G__10257;
chunk__8186_10246 = G__10258;
count__8187_10247 = G__10259;
i__8188_10248 = G__10260;
continue;
}
} else
{var arg__6537__auto___10261 = cljs.core.first.call(null,seq__8185_10255__$1);a__6536__auto__.push(arg__6537__auto___10261);
{
var G__10262 = cljs.core.next.call(null,seq__8185_10255__$1);
var G__10263 = null;
var G__10264 = 0;
var G__10265 = 0;
seq__8185_10245 = G__10262;
chunk__8186_10246 = G__10263;
count__8187_10247 = G__10264;
i__8188_10248 = G__10265;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.ruby.apply(null,a__6536__auto__);
};
var ruby = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ruby__delegate.call(this,args__6535__auto__);};
ruby.cljs$lang$maxFixedArity = 0;
ruby.cljs$lang$applyTo = (function (arglist__10266){
var args__6535__auto__ = cljs.core.seq(arglist__10266);
return ruby__delegate(args__6535__auto__);
});
ruby.cljs$core$IFn$_invoke$arity$variadic = ruby__delegate;
return ruby;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.s = (function() { 
var s__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__8193_10267 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__8194_10268 = null;var count__8195_10269 = 0;var i__8196_10270 = 0;while(true){
if((i__8196_10270 < count__8195_10269))
{var arg__6537__auto___10271 = cljs.core._nth.call(null,chunk__8194_10268,i__8196_10270);a__6536__auto__.push(arg__6537__auto___10271);
{
var G__10272 = seq__8193_10267;
var G__10273 = chunk__8194_10268;
var G__10274 = count__8195_10269;
var G__10275 = (i__8196_10270 + 1);
seq__8193_10267 = G__10272;
chunk__8194_10268 = G__10273;
count__8195_10269 = G__10274;
i__8196_10270 = G__10275;
continue;
}
} else
{var temp__4092__auto___10276 = cljs.core.seq.call(null,seq__8193_10267);if(temp__4092__auto___10276)
{var seq__8193_10277__$1 = temp__4092__auto___10276;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8193_10277__$1))
{var c__5635__auto___10278 = cljs.core.chunk_first.call(null,seq__8193_10277__$1);{
var G__10279 = cljs.core.chunk_rest.call(null,seq__8193_10277__$1);
var G__10280 = c__5635__auto___10278;
var G__10281 = cljs.core.count.call(null,c__5635__auto___10278);
var G__10282 = 0;
seq__8193_10267 = G__10279;
chunk__8194_10268 = G__10280;
count__8195_10269 = G__10281;
i__8196_10270 = G__10282;
continue;
}
} else
{var arg__6537__auto___10283 = cljs.core.first.call(null,seq__8193_10277__$1);a__6536__auto__.push(arg__6537__auto___10283);
{
var G__10284 = cljs.core.next.call(null,seq__8193_10277__$1);
var G__10285 = null;
var G__10286 = 0;
var G__10287 = 0;
seq__8193_10267 = G__10284;
chunk__8194_10268 = G__10285;
count__8195_10269 = G__10286;
i__8196_10270 = G__10287;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.s.apply(null,a__6536__auto__);
};
var s = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return s__delegate.call(this,args__6535__auto__);};
s.cljs$lang$maxFixedArity = 0;
s.cljs$lang$applyTo = (function (arglist__10288){
var args__6535__auto__ = cljs.core.seq(arglist__10288);
return s__delegate(args__6535__auto__);
});
s.cljs$core$IFn$_invoke$arity$variadic = s__delegate;
return s;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.samp = (function() { 
var samp__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__8201_10289 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__8202_10290 = null;var count__8203_10291 = 0;var i__8204_10292 = 0;while(true){
if((i__8204_10292 < count__8203_10291))
{var arg__6537__auto___10293 = cljs.core._nth.call(null,chunk__8202_10290,i__8204_10292);a__6536__auto__.push(arg__6537__auto___10293);
{
var G__10294 = seq__8201_10289;
var G__10295 = chunk__8202_10290;
var G__10296 = count__8203_10291;
var G__10297 = (i__8204_10292 + 1);
seq__8201_10289 = G__10294;
chunk__8202_10290 = G__10295;
count__8203_10291 = G__10296;
i__8204_10292 = G__10297;
continue;
}
} else
{var temp__4092__auto___10298 = cljs.core.seq.call(null,seq__8201_10289);if(temp__4092__auto___10298)
{var seq__8201_10299__$1 = temp__4092__auto___10298;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8201_10299__$1))
{var c__5635__auto___10300 = cljs.core.chunk_first.call(null,seq__8201_10299__$1);{
var G__10301 = cljs.core.chunk_rest.call(null,seq__8201_10299__$1);
var G__10302 = c__5635__auto___10300;
var G__10303 = cljs.core.count.call(null,c__5635__auto___10300);
var G__10304 = 0;
seq__8201_10289 = G__10301;
chunk__8202_10290 = G__10302;
count__8203_10291 = G__10303;
i__8204_10292 = G__10304;
continue;
}
} else
{var arg__6537__auto___10305 = cljs.core.first.call(null,seq__8201_10299__$1);a__6536__auto__.push(arg__6537__auto___10305);
{
var G__10306 = cljs.core.next.call(null,seq__8201_10299__$1);
var G__10307 = null;
var G__10308 = 0;
var G__10309 = 0;
seq__8201_10289 = G__10306;
chunk__8202_10290 = G__10307;
count__8203_10291 = G__10308;
i__8204_10292 = G__10309;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.samp.apply(null,a__6536__auto__);
};
var samp = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return samp__delegate.call(this,args__6535__auto__);};
samp.cljs$lang$maxFixedArity = 0;
samp.cljs$lang$applyTo = (function (arglist__10310){
var args__6535__auto__ = cljs.core.seq(arglist__10310);
return samp__delegate(args__6535__auto__);
});
samp.cljs$core$IFn$_invoke$arity$variadic = samp__delegate;
return samp;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.script = (function() { 
var script__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__8209_10311 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__8210_10312 = null;var count__8211_10313 = 0;var i__8212_10314 = 0;while(true){
if((i__8212_10314 < count__8211_10313))
{var arg__6537__auto___10315 = cljs.core._nth.call(null,chunk__8210_10312,i__8212_10314);a__6536__auto__.push(arg__6537__auto___10315);
{
var G__10316 = seq__8209_10311;
var G__10317 = chunk__8210_10312;
var G__10318 = count__8211_10313;
var G__10319 = (i__8212_10314 + 1);
seq__8209_10311 = G__10316;
chunk__8210_10312 = G__10317;
count__8211_10313 = G__10318;
i__8212_10314 = G__10319;
continue;
}
} else
{var temp__4092__auto___10320 = cljs.core.seq.call(null,seq__8209_10311);if(temp__4092__auto___10320)
{var seq__8209_10321__$1 = temp__4092__auto___10320;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8209_10321__$1))
{var c__5635__auto___10322 = cljs.core.chunk_first.call(null,seq__8209_10321__$1);{
var G__10323 = cljs.core.chunk_rest.call(null,seq__8209_10321__$1);
var G__10324 = c__5635__auto___10322;
var G__10325 = cljs.core.count.call(null,c__5635__auto___10322);
var G__10326 = 0;
seq__8209_10311 = G__10323;
chunk__8210_10312 = G__10324;
count__8211_10313 = G__10325;
i__8212_10314 = G__10326;
continue;
}
} else
{var arg__6537__auto___10327 = cljs.core.first.call(null,seq__8209_10321__$1);a__6536__auto__.push(arg__6537__auto___10327);
{
var G__10328 = cljs.core.next.call(null,seq__8209_10321__$1);
var G__10329 = null;
var G__10330 = 0;
var G__10331 = 0;
seq__8209_10311 = G__10328;
chunk__8210_10312 = G__10329;
count__8211_10313 = G__10330;
i__8212_10314 = G__10331;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.script.apply(null,a__6536__auto__);
};
var script = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return script__delegate.call(this,args__6535__auto__);};
script.cljs$lang$maxFixedArity = 0;
script.cljs$lang$applyTo = (function (arglist__10332){
var args__6535__auto__ = cljs.core.seq(arglist__10332);
return script__delegate(args__6535__auto__);
});
script.cljs$core$IFn$_invoke$arity$variadic = script__delegate;
return script;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.section = (function() { 
var section__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__8217_10333 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__8218_10334 = null;var count__8219_10335 = 0;var i__8220_10336 = 0;while(true){
if((i__8220_10336 < count__8219_10335))
{var arg__6537__auto___10337 = cljs.core._nth.call(null,chunk__8218_10334,i__8220_10336);a__6536__auto__.push(arg__6537__auto___10337);
{
var G__10338 = seq__8217_10333;
var G__10339 = chunk__8218_10334;
var G__10340 = count__8219_10335;
var G__10341 = (i__8220_10336 + 1);
seq__8217_10333 = G__10338;
chunk__8218_10334 = G__10339;
count__8219_10335 = G__10340;
i__8220_10336 = G__10341;
continue;
}
} else
{var temp__4092__auto___10342 = cljs.core.seq.call(null,seq__8217_10333);if(temp__4092__auto___10342)
{var seq__8217_10343__$1 = temp__4092__auto___10342;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8217_10343__$1))
{var c__5635__auto___10344 = cljs.core.chunk_first.call(null,seq__8217_10343__$1);{
var G__10345 = cljs.core.chunk_rest.call(null,seq__8217_10343__$1);
var G__10346 = c__5635__auto___10344;
var G__10347 = cljs.core.count.call(null,c__5635__auto___10344);
var G__10348 = 0;
seq__8217_10333 = G__10345;
chunk__8218_10334 = G__10346;
count__8219_10335 = G__10347;
i__8220_10336 = G__10348;
continue;
}
} else
{var arg__6537__auto___10349 = cljs.core.first.call(null,seq__8217_10343__$1);a__6536__auto__.push(arg__6537__auto___10349);
{
var G__10350 = cljs.core.next.call(null,seq__8217_10343__$1);
var G__10351 = null;
var G__10352 = 0;
var G__10353 = 0;
seq__8217_10333 = G__10350;
chunk__8218_10334 = G__10351;
count__8219_10335 = G__10352;
i__8220_10336 = G__10353;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.section.apply(null,a__6536__auto__);
};
var section = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return section__delegate.call(this,args__6535__auto__);};
section.cljs$lang$maxFixedArity = 0;
section.cljs$lang$applyTo = (function (arglist__10354){
var args__6535__auto__ = cljs.core.seq(arglist__10354);
return section__delegate(args__6535__auto__);
});
section.cljs$core$IFn$_invoke$arity$variadic = section__delegate;
return section;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.select = (function() { 
var select__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__8225_10355 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__8226_10356 = null;var count__8227_10357 = 0;var i__8228_10358 = 0;while(true){
if((i__8228_10358 < count__8227_10357))
{var arg__6537__auto___10359 = cljs.core._nth.call(null,chunk__8226_10356,i__8228_10358);a__6536__auto__.push(arg__6537__auto___10359);
{
var G__10360 = seq__8225_10355;
var G__10361 = chunk__8226_10356;
var G__10362 = count__8227_10357;
var G__10363 = (i__8228_10358 + 1);
seq__8225_10355 = G__10360;
chunk__8226_10356 = G__10361;
count__8227_10357 = G__10362;
i__8228_10358 = G__10363;
continue;
}
} else
{var temp__4092__auto___10364 = cljs.core.seq.call(null,seq__8225_10355);if(temp__4092__auto___10364)
{var seq__8225_10365__$1 = temp__4092__auto___10364;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8225_10365__$1))
{var c__5635__auto___10366 = cljs.core.chunk_first.call(null,seq__8225_10365__$1);{
var G__10367 = cljs.core.chunk_rest.call(null,seq__8225_10365__$1);
var G__10368 = c__5635__auto___10366;
var G__10369 = cljs.core.count.call(null,c__5635__auto___10366);
var G__10370 = 0;
seq__8225_10355 = G__10367;
chunk__8226_10356 = G__10368;
count__8227_10357 = G__10369;
i__8228_10358 = G__10370;
continue;
}
} else
{var arg__6537__auto___10371 = cljs.core.first.call(null,seq__8225_10365__$1);a__6536__auto__.push(arg__6537__auto___10371);
{
var G__10372 = cljs.core.next.call(null,seq__8225_10365__$1);
var G__10373 = null;
var G__10374 = 0;
var G__10375 = 0;
seq__8225_10355 = G__10372;
chunk__8226_10356 = G__10373;
count__8227_10357 = G__10374;
i__8228_10358 = G__10375;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.select.apply(null,a__6536__auto__);
};
var select = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return select__delegate.call(this,args__6535__auto__);};
select.cljs$lang$maxFixedArity = 0;
select.cljs$lang$applyTo = (function (arglist__10376){
var args__6535__auto__ = cljs.core.seq(arglist__10376);
return select__delegate(args__6535__auto__);
});
select.cljs$core$IFn$_invoke$arity$variadic = select__delegate;
return select;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.small = (function() { 
var small__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__8233_10377 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__8234_10378 = null;var count__8235_10379 = 0;var i__8236_10380 = 0;while(true){
if((i__8236_10380 < count__8235_10379))
{var arg__6537__auto___10381 = cljs.core._nth.call(null,chunk__8234_10378,i__8236_10380);a__6536__auto__.push(arg__6537__auto___10381);
{
var G__10382 = seq__8233_10377;
var G__10383 = chunk__8234_10378;
var G__10384 = count__8235_10379;
var G__10385 = (i__8236_10380 + 1);
seq__8233_10377 = G__10382;
chunk__8234_10378 = G__10383;
count__8235_10379 = G__10384;
i__8236_10380 = G__10385;
continue;
}
} else
{var temp__4092__auto___10386 = cljs.core.seq.call(null,seq__8233_10377);if(temp__4092__auto___10386)
{var seq__8233_10387__$1 = temp__4092__auto___10386;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8233_10387__$1))
{var c__5635__auto___10388 = cljs.core.chunk_first.call(null,seq__8233_10387__$1);{
var G__10389 = cljs.core.chunk_rest.call(null,seq__8233_10387__$1);
var G__10390 = c__5635__auto___10388;
var G__10391 = cljs.core.count.call(null,c__5635__auto___10388);
var G__10392 = 0;
seq__8233_10377 = G__10389;
chunk__8234_10378 = G__10390;
count__8235_10379 = G__10391;
i__8236_10380 = G__10392;
continue;
}
} else
{var arg__6537__auto___10393 = cljs.core.first.call(null,seq__8233_10387__$1);a__6536__auto__.push(arg__6537__auto___10393);
{
var G__10394 = cljs.core.next.call(null,seq__8233_10387__$1);
var G__10395 = null;
var G__10396 = 0;
var G__10397 = 0;
seq__8233_10377 = G__10394;
chunk__8234_10378 = G__10395;
count__8235_10379 = G__10396;
i__8236_10380 = G__10397;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.small.apply(null,a__6536__auto__);
};
var small = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return small__delegate.call(this,args__6535__auto__);};
small.cljs$lang$maxFixedArity = 0;
small.cljs$lang$applyTo = (function (arglist__10398){
var args__6535__auto__ = cljs.core.seq(arglist__10398);
return small__delegate(args__6535__auto__);
});
small.cljs$core$IFn$_invoke$arity$variadic = small__delegate;
return small;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.source = (function() { 
var source__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__8241_10399 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__8242_10400 = null;var count__8243_10401 = 0;var i__8244_10402 = 0;while(true){
if((i__8244_10402 < count__8243_10401))
{var arg__6537__auto___10403 = cljs.core._nth.call(null,chunk__8242_10400,i__8244_10402);a__6536__auto__.push(arg__6537__auto___10403);
{
var G__10404 = seq__8241_10399;
var G__10405 = chunk__8242_10400;
var G__10406 = count__8243_10401;
var G__10407 = (i__8244_10402 + 1);
seq__8241_10399 = G__10404;
chunk__8242_10400 = G__10405;
count__8243_10401 = G__10406;
i__8244_10402 = G__10407;
continue;
}
} else
{var temp__4092__auto___10408 = cljs.core.seq.call(null,seq__8241_10399);if(temp__4092__auto___10408)
{var seq__8241_10409__$1 = temp__4092__auto___10408;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8241_10409__$1))
{var c__5635__auto___10410 = cljs.core.chunk_first.call(null,seq__8241_10409__$1);{
var G__10411 = cljs.core.chunk_rest.call(null,seq__8241_10409__$1);
var G__10412 = c__5635__auto___10410;
var G__10413 = cljs.core.count.call(null,c__5635__auto___10410);
var G__10414 = 0;
seq__8241_10399 = G__10411;
chunk__8242_10400 = G__10412;
count__8243_10401 = G__10413;
i__8244_10402 = G__10414;
continue;
}
} else
{var arg__6537__auto___10415 = cljs.core.first.call(null,seq__8241_10409__$1);a__6536__auto__.push(arg__6537__auto___10415);
{
var G__10416 = cljs.core.next.call(null,seq__8241_10409__$1);
var G__10417 = null;
var G__10418 = 0;
var G__10419 = 0;
seq__8241_10399 = G__10416;
chunk__8242_10400 = G__10417;
count__8243_10401 = G__10418;
i__8244_10402 = G__10419;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.source.apply(null,a__6536__auto__);
};
var source = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return source__delegate.call(this,args__6535__auto__);};
source.cljs$lang$maxFixedArity = 0;
source.cljs$lang$applyTo = (function (arglist__10420){
var args__6535__auto__ = cljs.core.seq(arglist__10420);
return source__delegate(args__6535__auto__);
});
source.cljs$core$IFn$_invoke$arity$variadic = source__delegate;
return source;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.span = (function() { 
var span__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__8249_10421 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__8250_10422 = null;var count__8251_10423 = 0;var i__8252_10424 = 0;while(true){
if((i__8252_10424 < count__8251_10423))
{var arg__6537__auto___10425 = cljs.core._nth.call(null,chunk__8250_10422,i__8252_10424);a__6536__auto__.push(arg__6537__auto___10425);
{
var G__10426 = seq__8249_10421;
var G__10427 = chunk__8250_10422;
var G__10428 = count__8251_10423;
var G__10429 = (i__8252_10424 + 1);
seq__8249_10421 = G__10426;
chunk__8250_10422 = G__10427;
count__8251_10423 = G__10428;
i__8252_10424 = G__10429;
continue;
}
} else
{var temp__4092__auto___10430 = cljs.core.seq.call(null,seq__8249_10421);if(temp__4092__auto___10430)
{var seq__8249_10431__$1 = temp__4092__auto___10430;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8249_10431__$1))
{var c__5635__auto___10432 = cljs.core.chunk_first.call(null,seq__8249_10431__$1);{
var G__10433 = cljs.core.chunk_rest.call(null,seq__8249_10431__$1);
var G__10434 = c__5635__auto___10432;
var G__10435 = cljs.core.count.call(null,c__5635__auto___10432);
var G__10436 = 0;
seq__8249_10421 = G__10433;
chunk__8250_10422 = G__10434;
count__8251_10423 = G__10435;
i__8252_10424 = G__10436;
continue;
}
} else
{var arg__6537__auto___10437 = cljs.core.first.call(null,seq__8249_10431__$1);a__6536__auto__.push(arg__6537__auto___10437);
{
var G__10438 = cljs.core.next.call(null,seq__8249_10431__$1);
var G__10439 = null;
var G__10440 = 0;
var G__10441 = 0;
seq__8249_10421 = G__10438;
chunk__8250_10422 = G__10439;
count__8251_10423 = G__10440;
i__8252_10424 = G__10441;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.span.apply(null,a__6536__auto__);
};
var span = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return span__delegate.call(this,args__6535__auto__);};
span.cljs$lang$maxFixedArity = 0;
span.cljs$lang$applyTo = (function (arglist__10442){
var args__6535__auto__ = cljs.core.seq(arglist__10442);
return span__delegate(args__6535__auto__);
});
span.cljs$core$IFn$_invoke$arity$variadic = span__delegate;
return span;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.strong = (function() { 
var strong__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__8257_10443 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__8258_10444 = null;var count__8259_10445 = 0;var i__8260_10446 = 0;while(true){
if((i__8260_10446 < count__8259_10445))
{var arg__6537__auto___10447 = cljs.core._nth.call(null,chunk__8258_10444,i__8260_10446);a__6536__auto__.push(arg__6537__auto___10447);
{
var G__10448 = seq__8257_10443;
var G__10449 = chunk__8258_10444;
var G__10450 = count__8259_10445;
var G__10451 = (i__8260_10446 + 1);
seq__8257_10443 = G__10448;
chunk__8258_10444 = G__10449;
count__8259_10445 = G__10450;
i__8260_10446 = G__10451;
continue;
}
} else
{var temp__4092__auto___10452 = cljs.core.seq.call(null,seq__8257_10443);if(temp__4092__auto___10452)
{var seq__8257_10453__$1 = temp__4092__auto___10452;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8257_10453__$1))
{var c__5635__auto___10454 = cljs.core.chunk_first.call(null,seq__8257_10453__$1);{
var G__10455 = cljs.core.chunk_rest.call(null,seq__8257_10453__$1);
var G__10456 = c__5635__auto___10454;
var G__10457 = cljs.core.count.call(null,c__5635__auto___10454);
var G__10458 = 0;
seq__8257_10443 = G__10455;
chunk__8258_10444 = G__10456;
count__8259_10445 = G__10457;
i__8260_10446 = G__10458;
continue;
}
} else
{var arg__6537__auto___10459 = cljs.core.first.call(null,seq__8257_10453__$1);a__6536__auto__.push(arg__6537__auto___10459);
{
var G__10460 = cljs.core.next.call(null,seq__8257_10453__$1);
var G__10461 = null;
var G__10462 = 0;
var G__10463 = 0;
seq__8257_10443 = G__10460;
chunk__8258_10444 = G__10461;
count__8259_10445 = G__10462;
i__8260_10446 = G__10463;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.strong.apply(null,a__6536__auto__);
};
var strong = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return strong__delegate.call(this,args__6535__auto__);};
strong.cljs$lang$maxFixedArity = 0;
strong.cljs$lang$applyTo = (function (arglist__10464){
var args__6535__auto__ = cljs.core.seq(arglist__10464);
return strong__delegate(args__6535__auto__);
});
strong.cljs$core$IFn$_invoke$arity$variadic = strong__delegate;
return strong;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.style = (function() { 
var style__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__8265_10465 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__8266_10466 = null;var count__8267_10467 = 0;var i__8268_10468 = 0;while(true){
if((i__8268_10468 < count__8267_10467))
{var arg__6537__auto___10469 = cljs.core._nth.call(null,chunk__8266_10466,i__8268_10468);a__6536__auto__.push(arg__6537__auto___10469);
{
var G__10470 = seq__8265_10465;
var G__10471 = chunk__8266_10466;
var G__10472 = count__8267_10467;
var G__10473 = (i__8268_10468 + 1);
seq__8265_10465 = G__10470;
chunk__8266_10466 = G__10471;
count__8267_10467 = G__10472;
i__8268_10468 = G__10473;
continue;
}
} else
{var temp__4092__auto___10474 = cljs.core.seq.call(null,seq__8265_10465);if(temp__4092__auto___10474)
{var seq__8265_10475__$1 = temp__4092__auto___10474;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8265_10475__$1))
{var c__5635__auto___10476 = cljs.core.chunk_first.call(null,seq__8265_10475__$1);{
var G__10477 = cljs.core.chunk_rest.call(null,seq__8265_10475__$1);
var G__10478 = c__5635__auto___10476;
var G__10479 = cljs.core.count.call(null,c__5635__auto___10476);
var G__10480 = 0;
seq__8265_10465 = G__10477;
chunk__8266_10466 = G__10478;
count__8267_10467 = G__10479;
i__8268_10468 = G__10480;
continue;
}
} else
{var arg__6537__auto___10481 = cljs.core.first.call(null,seq__8265_10475__$1);a__6536__auto__.push(arg__6537__auto___10481);
{
var G__10482 = cljs.core.next.call(null,seq__8265_10475__$1);
var G__10483 = null;
var G__10484 = 0;
var G__10485 = 0;
seq__8265_10465 = G__10482;
chunk__8266_10466 = G__10483;
count__8267_10467 = G__10484;
i__8268_10468 = G__10485;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.style.apply(null,a__6536__auto__);
};
var style = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return style__delegate.call(this,args__6535__auto__);};
style.cljs$lang$maxFixedArity = 0;
style.cljs$lang$applyTo = (function (arglist__10486){
var args__6535__auto__ = cljs.core.seq(arglist__10486);
return style__delegate(args__6535__auto__);
});
style.cljs$core$IFn$_invoke$arity$variadic = style__delegate;
return style;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.sub = (function() { 
var sub__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__8273_10487 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__8274_10488 = null;var count__8275_10489 = 0;var i__8276_10490 = 0;while(true){
if((i__8276_10490 < count__8275_10489))
{var arg__6537__auto___10491 = cljs.core._nth.call(null,chunk__8274_10488,i__8276_10490);a__6536__auto__.push(arg__6537__auto___10491);
{
var G__10492 = seq__8273_10487;
var G__10493 = chunk__8274_10488;
var G__10494 = count__8275_10489;
var G__10495 = (i__8276_10490 + 1);
seq__8273_10487 = G__10492;
chunk__8274_10488 = G__10493;
count__8275_10489 = G__10494;
i__8276_10490 = G__10495;
continue;
}
} else
{var temp__4092__auto___10496 = cljs.core.seq.call(null,seq__8273_10487);if(temp__4092__auto___10496)
{var seq__8273_10497__$1 = temp__4092__auto___10496;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8273_10497__$1))
{var c__5635__auto___10498 = cljs.core.chunk_first.call(null,seq__8273_10497__$1);{
var G__10499 = cljs.core.chunk_rest.call(null,seq__8273_10497__$1);
var G__10500 = c__5635__auto___10498;
var G__10501 = cljs.core.count.call(null,c__5635__auto___10498);
var G__10502 = 0;
seq__8273_10487 = G__10499;
chunk__8274_10488 = G__10500;
count__8275_10489 = G__10501;
i__8276_10490 = G__10502;
continue;
}
} else
{var arg__6537__auto___10503 = cljs.core.first.call(null,seq__8273_10497__$1);a__6536__auto__.push(arg__6537__auto___10503);
{
var G__10504 = cljs.core.next.call(null,seq__8273_10497__$1);
var G__10505 = null;
var G__10506 = 0;
var G__10507 = 0;
seq__8273_10487 = G__10504;
chunk__8274_10488 = G__10505;
count__8275_10489 = G__10506;
i__8276_10490 = G__10507;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.sub.apply(null,a__6536__auto__);
};
var sub = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return sub__delegate.call(this,args__6535__auto__);};
sub.cljs$lang$maxFixedArity = 0;
sub.cljs$lang$applyTo = (function (arglist__10508){
var args__6535__auto__ = cljs.core.seq(arglist__10508);
return sub__delegate(args__6535__auto__);
});
sub.cljs$core$IFn$_invoke$arity$variadic = sub__delegate;
return sub;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.summary = (function() { 
var summary__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__8281_10509 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__8282_10510 = null;var count__8283_10511 = 0;var i__8284_10512 = 0;while(true){
if((i__8284_10512 < count__8283_10511))
{var arg__6537__auto___10513 = cljs.core._nth.call(null,chunk__8282_10510,i__8284_10512);a__6536__auto__.push(arg__6537__auto___10513);
{
var G__10514 = seq__8281_10509;
var G__10515 = chunk__8282_10510;
var G__10516 = count__8283_10511;
var G__10517 = (i__8284_10512 + 1);
seq__8281_10509 = G__10514;
chunk__8282_10510 = G__10515;
count__8283_10511 = G__10516;
i__8284_10512 = G__10517;
continue;
}
} else
{var temp__4092__auto___10518 = cljs.core.seq.call(null,seq__8281_10509);if(temp__4092__auto___10518)
{var seq__8281_10519__$1 = temp__4092__auto___10518;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8281_10519__$1))
{var c__5635__auto___10520 = cljs.core.chunk_first.call(null,seq__8281_10519__$1);{
var G__10521 = cljs.core.chunk_rest.call(null,seq__8281_10519__$1);
var G__10522 = c__5635__auto___10520;
var G__10523 = cljs.core.count.call(null,c__5635__auto___10520);
var G__10524 = 0;
seq__8281_10509 = G__10521;
chunk__8282_10510 = G__10522;
count__8283_10511 = G__10523;
i__8284_10512 = G__10524;
continue;
}
} else
{var arg__6537__auto___10525 = cljs.core.first.call(null,seq__8281_10519__$1);a__6536__auto__.push(arg__6537__auto___10525);
{
var G__10526 = cljs.core.next.call(null,seq__8281_10519__$1);
var G__10527 = null;
var G__10528 = 0;
var G__10529 = 0;
seq__8281_10509 = G__10526;
chunk__8282_10510 = G__10527;
count__8283_10511 = G__10528;
i__8284_10512 = G__10529;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.summary.apply(null,a__6536__auto__);
};
var summary = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return summary__delegate.call(this,args__6535__auto__);};
summary.cljs$lang$maxFixedArity = 0;
summary.cljs$lang$applyTo = (function (arglist__10530){
var args__6535__auto__ = cljs.core.seq(arglist__10530);
return summary__delegate(args__6535__auto__);
});
summary.cljs$core$IFn$_invoke$arity$variadic = summary__delegate;
return summary;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.sup = (function() { 
var sup__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__8289_10531 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__8290_10532 = null;var count__8291_10533 = 0;var i__8292_10534 = 0;while(true){
if((i__8292_10534 < count__8291_10533))
{var arg__6537__auto___10535 = cljs.core._nth.call(null,chunk__8290_10532,i__8292_10534);a__6536__auto__.push(arg__6537__auto___10535);
{
var G__10536 = seq__8289_10531;
var G__10537 = chunk__8290_10532;
var G__10538 = count__8291_10533;
var G__10539 = (i__8292_10534 + 1);
seq__8289_10531 = G__10536;
chunk__8290_10532 = G__10537;
count__8291_10533 = G__10538;
i__8292_10534 = G__10539;
continue;
}
} else
{var temp__4092__auto___10540 = cljs.core.seq.call(null,seq__8289_10531);if(temp__4092__auto___10540)
{var seq__8289_10541__$1 = temp__4092__auto___10540;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8289_10541__$1))
{var c__5635__auto___10542 = cljs.core.chunk_first.call(null,seq__8289_10541__$1);{
var G__10543 = cljs.core.chunk_rest.call(null,seq__8289_10541__$1);
var G__10544 = c__5635__auto___10542;
var G__10545 = cljs.core.count.call(null,c__5635__auto___10542);
var G__10546 = 0;
seq__8289_10531 = G__10543;
chunk__8290_10532 = G__10544;
count__8291_10533 = G__10545;
i__8292_10534 = G__10546;
continue;
}
} else
{var arg__6537__auto___10547 = cljs.core.first.call(null,seq__8289_10541__$1);a__6536__auto__.push(arg__6537__auto___10547);
{
var G__10548 = cljs.core.next.call(null,seq__8289_10541__$1);
var G__10549 = null;
var G__10550 = 0;
var G__10551 = 0;
seq__8289_10531 = G__10548;
chunk__8290_10532 = G__10549;
count__8291_10533 = G__10550;
i__8292_10534 = G__10551;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.sup.apply(null,a__6536__auto__);
};
var sup = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return sup__delegate.call(this,args__6535__auto__);};
sup.cljs$lang$maxFixedArity = 0;
sup.cljs$lang$applyTo = (function (arglist__10552){
var args__6535__auto__ = cljs.core.seq(arglist__10552);
return sup__delegate(args__6535__auto__);
});
sup.cljs$core$IFn$_invoke$arity$variadic = sup__delegate;
return sup;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.table = (function() { 
var table__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__8297_10553 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__8298_10554 = null;var count__8299_10555 = 0;var i__8300_10556 = 0;while(true){
if((i__8300_10556 < count__8299_10555))
{var arg__6537__auto___10557 = cljs.core._nth.call(null,chunk__8298_10554,i__8300_10556);a__6536__auto__.push(arg__6537__auto___10557);
{
var G__10558 = seq__8297_10553;
var G__10559 = chunk__8298_10554;
var G__10560 = count__8299_10555;
var G__10561 = (i__8300_10556 + 1);
seq__8297_10553 = G__10558;
chunk__8298_10554 = G__10559;
count__8299_10555 = G__10560;
i__8300_10556 = G__10561;
continue;
}
} else
{var temp__4092__auto___10562 = cljs.core.seq.call(null,seq__8297_10553);if(temp__4092__auto___10562)
{var seq__8297_10563__$1 = temp__4092__auto___10562;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8297_10563__$1))
{var c__5635__auto___10564 = cljs.core.chunk_first.call(null,seq__8297_10563__$1);{
var G__10565 = cljs.core.chunk_rest.call(null,seq__8297_10563__$1);
var G__10566 = c__5635__auto___10564;
var G__10567 = cljs.core.count.call(null,c__5635__auto___10564);
var G__10568 = 0;
seq__8297_10553 = G__10565;
chunk__8298_10554 = G__10566;
count__8299_10555 = G__10567;
i__8300_10556 = G__10568;
continue;
}
} else
{var arg__6537__auto___10569 = cljs.core.first.call(null,seq__8297_10563__$1);a__6536__auto__.push(arg__6537__auto___10569);
{
var G__10570 = cljs.core.next.call(null,seq__8297_10563__$1);
var G__10571 = null;
var G__10572 = 0;
var G__10573 = 0;
seq__8297_10553 = G__10570;
chunk__8298_10554 = G__10571;
count__8299_10555 = G__10572;
i__8300_10556 = G__10573;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.table.apply(null,a__6536__auto__);
};
var table = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return table__delegate.call(this,args__6535__auto__);};
table.cljs$lang$maxFixedArity = 0;
table.cljs$lang$applyTo = (function (arglist__10574){
var args__6535__auto__ = cljs.core.seq(arglist__10574);
return table__delegate(args__6535__auto__);
});
table.cljs$core$IFn$_invoke$arity$variadic = table__delegate;
return table;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.tbody = (function() { 
var tbody__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__8305_10575 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__8306_10576 = null;var count__8307_10577 = 0;var i__8308_10578 = 0;while(true){
if((i__8308_10578 < count__8307_10577))
{var arg__6537__auto___10579 = cljs.core._nth.call(null,chunk__8306_10576,i__8308_10578);a__6536__auto__.push(arg__6537__auto___10579);
{
var G__10580 = seq__8305_10575;
var G__10581 = chunk__8306_10576;
var G__10582 = count__8307_10577;
var G__10583 = (i__8308_10578 + 1);
seq__8305_10575 = G__10580;
chunk__8306_10576 = G__10581;
count__8307_10577 = G__10582;
i__8308_10578 = G__10583;
continue;
}
} else
{var temp__4092__auto___10584 = cljs.core.seq.call(null,seq__8305_10575);if(temp__4092__auto___10584)
{var seq__8305_10585__$1 = temp__4092__auto___10584;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8305_10585__$1))
{var c__5635__auto___10586 = cljs.core.chunk_first.call(null,seq__8305_10585__$1);{
var G__10587 = cljs.core.chunk_rest.call(null,seq__8305_10585__$1);
var G__10588 = c__5635__auto___10586;
var G__10589 = cljs.core.count.call(null,c__5635__auto___10586);
var G__10590 = 0;
seq__8305_10575 = G__10587;
chunk__8306_10576 = G__10588;
count__8307_10577 = G__10589;
i__8308_10578 = G__10590;
continue;
}
} else
{var arg__6537__auto___10591 = cljs.core.first.call(null,seq__8305_10585__$1);a__6536__auto__.push(arg__6537__auto___10591);
{
var G__10592 = cljs.core.next.call(null,seq__8305_10585__$1);
var G__10593 = null;
var G__10594 = 0;
var G__10595 = 0;
seq__8305_10575 = G__10592;
chunk__8306_10576 = G__10593;
count__8307_10577 = G__10594;
i__8308_10578 = G__10595;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.tbody.apply(null,a__6536__auto__);
};
var tbody = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return tbody__delegate.call(this,args__6535__auto__);};
tbody.cljs$lang$maxFixedArity = 0;
tbody.cljs$lang$applyTo = (function (arglist__10596){
var args__6535__auto__ = cljs.core.seq(arglist__10596);
return tbody__delegate(args__6535__auto__);
});
tbody.cljs$core$IFn$_invoke$arity$variadic = tbody__delegate;
return tbody;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.td = (function() { 
var td__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__8313_10597 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__8314_10598 = null;var count__8315_10599 = 0;var i__8316_10600 = 0;while(true){
if((i__8316_10600 < count__8315_10599))
{var arg__6537__auto___10601 = cljs.core._nth.call(null,chunk__8314_10598,i__8316_10600);a__6536__auto__.push(arg__6537__auto___10601);
{
var G__10602 = seq__8313_10597;
var G__10603 = chunk__8314_10598;
var G__10604 = count__8315_10599;
var G__10605 = (i__8316_10600 + 1);
seq__8313_10597 = G__10602;
chunk__8314_10598 = G__10603;
count__8315_10599 = G__10604;
i__8316_10600 = G__10605;
continue;
}
} else
{var temp__4092__auto___10606 = cljs.core.seq.call(null,seq__8313_10597);if(temp__4092__auto___10606)
{var seq__8313_10607__$1 = temp__4092__auto___10606;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8313_10607__$1))
{var c__5635__auto___10608 = cljs.core.chunk_first.call(null,seq__8313_10607__$1);{
var G__10609 = cljs.core.chunk_rest.call(null,seq__8313_10607__$1);
var G__10610 = c__5635__auto___10608;
var G__10611 = cljs.core.count.call(null,c__5635__auto___10608);
var G__10612 = 0;
seq__8313_10597 = G__10609;
chunk__8314_10598 = G__10610;
count__8315_10599 = G__10611;
i__8316_10600 = G__10612;
continue;
}
} else
{var arg__6537__auto___10613 = cljs.core.first.call(null,seq__8313_10607__$1);a__6536__auto__.push(arg__6537__auto___10613);
{
var G__10614 = cljs.core.next.call(null,seq__8313_10607__$1);
var G__10615 = null;
var G__10616 = 0;
var G__10617 = 0;
seq__8313_10597 = G__10614;
chunk__8314_10598 = G__10615;
count__8315_10599 = G__10616;
i__8316_10600 = G__10617;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.td.apply(null,a__6536__auto__);
};
var td = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return td__delegate.call(this,args__6535__auto__);};
td.cljs$lang$maxFixedArity = 0;
td.cljs$lang$applyTo = (function (arglist__10618){
var args__6535__auto__ = cljs.core.seq(arglist__10618);
return td__delegate(args__6535__auto__);
});
td.cljs$core$IFn$_invoke$arity$variadic = td__delegate;
return td;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.textarea = (function() { 
var textarea__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__8321_10619 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__8322_10620 = null;var count__8323_10621 = 0;var i__8324_10622 = 0;while(true){
if((i__8324_10622 < count__8323_10621))
{var arg__6537__auto___10623 = cljs.core._nth.call(null,chunk__8322_10620,i__8324_10622);a__6536__auto__.push(arg__6537__auto___10623);
{
var G__10624 = seq__8321_10619;
var G__10625 = chunk__8322_10620;
var G__10626 = count__8323_10621;
var G__10627 = (i__8324_10622 + 1);
seq__8321_10619 = G__10624;
chunk__8322_10620 = G__10625;
count__8323_10621 = G__10626;
i__8324_10622 = G__10627;
continue;
}
} else
{var temp__4092__auto___10628 = cljs.core.seq.call(null,seq__8321_10619);if(temp__4092__auto___10628)
{var seq__8321_10629__$1 = temp__4092__auto___10628;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8321_10629__$1))
{var c__5635__auto___10630 = cljs.core.chunk_first.call(null,seq__8321_10629__$1);{
var G__10631 = cljs.core.chunk_rest.call(null,seq__8321_10629__$1);
var G__10632 = c__5635__auto___10630;
var G__10633 = cljs.core.count.call(null,c__5635__auto___10630);
var G__10634 = 0;
seq__8321_10619 = G__10631;
chunk__8322_10620 = G__10632;
count__8323_10621 = G__10633;
i__8324_10622 = G__10634;
continue;
}
} else
{var arg__6537__auto___10635 = cljs.core.first.call(null,seq__8321_10629__$1);a__6536__auto__.push(arg__6537__auto___10635);
{
var G__10636 = cljs.core.next.call(null,seq__8321_10629__$1);
var G__10637 = null;
var G__10638 = 0;
var G__10639 = 0;
seq__8321_10619 = G__10636;
chunk__8322_10620 = G__10637;
count__8323_10621 = G__10638;
i__8324_10622 = G__10639;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.textarea.apply(null,a__6536__auto__);
};
var textarea = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return textarea__delegate.call(this,args__6535__auto__);};
textarea.cljs$lang$maxFixedArity = 0;
textarea.cljs$lang$applyTo = (function (arglist__10640){
var args__6535__auto__ = cljs.core.seq(arglist__10640);
return textarea__delegate(args__6535__auto__);
});
textarea.cljs$core$IFn$_invoke$arity$variadic = textarea__delegate;
return textarea;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.tfoot = (function() { 
var tfoot__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__8329_10641 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__8330_10642 = null;var count__8331_10643 = 0;var i__8332_10644 = 0;while(true){
if((i__8332_10644 < count__8331_10643))
{var arg__6537__auto___10645 = cljs.core._nth.call(null,chunk__8330_10642,i__8332_10644);a__6536__auto__.push(arg__6537__auto___10645);
{
var G__10646 = seq__8329_10641;
var G__10647 = chunk__8330_10642;
var G__10648 = count__8331_10643;
var G__10649 = (i__8332_10644 + 1);
seq__8329_10641 = G__10646;
chunk__8330_10642 = G__10647;
count__8331_10643 = G__10648;
i__8332_10644 = G__10649;
continue;
}
} else
{var temp__4092__auto___10650 = cljs.core.seq.call(null,seq__8329_10641);if(temp__4092__auto___10650)
{var seq__8329_10651__$1 = temp__4092__auto___10650;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8329_10651__$1))
{var c__5635__auto___10652 = cljs.core.chunk_first.call(null,seq__8329_10651__$1);{
var G__10653 = cljs.core.chunk_rest.call(null,seq__8329_10651__$1);
var G__10654 = c__5635__auto___10652;
var G__10655 = cljs.core.count.call(null,c__5635__auto___10652);
var G__10656 = 0;
seq__8329_10641 = G__10653;
chunk__8330_10642 = G__10654;
count__8331_10643 = G__10655;
i__8332_10644 = G__10656;
continue;
}
} else
{var arg__6537__auto___10657 = cljs.core.first.call(null,seq__8329_10651__$1);a__6536__auto__.push(arg__6537__auto___10657);
{
var G__10658 = cljs.core.next.call(null,seq__8329_10651__$1);
var G__10659 = null;
var G__10660 = 0;
var G__10661 = 0;
seq__8329_10641 = G__10658;
chunk__8330_10642 = G__10659;
count__8331_10643 = G__10660;
i__8332_10644 = G__10661;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.tfoot.apply(null,a__6536__auto__);
};
var tfoot = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return tfoot__delegate.call(this,args__6535__auto__);};
tfoot.cljs$lang$maxFixedArity = 0;
tfoot.cljs$lang$applyTo = (function (arglist__10662){
var args__6535__auto__ = cljs.core.seq(arglist__10662);
return tfoot__delegate(args__6535__auto__);
});
tfoot.cljs$core$IFn$_invoke$arity$variadic = tfoot__delegate;
return tfoot;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.th = (function() { 
var th__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__8337_10663 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__8338_10664 = null;var count__8339_10665 = 0;var i__8340_10666 = 0;while(true){
if((i__8340_10666 < count__8339_10665))
{var arg__6537__auto___10667 = cljs.core._nth.call(null,chunk__8338_10664,i__8340_10666);a__6536__auto__.push(arg__6537__auto___10667);
{
var G__10668 = seq__8337_10663;
var G__10669 = chunk__8338_10664;
var G__10670 = count__8339_10665;
var G__10671 = (i__8340_10666 + 1);
seq__8337_10663 = G__10668;
chunk__8338_10664 = G__10669;
count__8339_10665 = G__10670;
i__8340_10666 = G__10671;
continue;
}
} else
{var temp__4092__auto___10672 = cljs.core.seq.call(null,seq__8337_10663);if(temp__4092__auto___10672)
{var seq__8337_10673__$1 = temp__4092__auto___10672;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8337_10673__$1))
{var c__5635__auto___10674 = cljs.core.chunk_first.call(null,seq__8337_10673__$1);{
var G__10675 = cljs.core.chunk_rest.call(null,seq__8337_10673__$1);
var G__10676 = c__5635__auto___10674;
var G__10677 = cljs.core.count.call(null,c__5635__auto___10674);
var G__10678 = 0;
seq__8337_10663 = G__10675;
chunk__8338_10664 = G__10676;
count__8339_10665 = G__10677;
i__8340_10666 = G__10678;
continue;
}
} else
{var arg__6537__auto___10679 = cljs.core.first.call(null,seq__8337_10673__$1);a__6536__auto__.push(arg__6537__auto___10679);
{
var G__10680 = cljs.core.next.call(null,seq__8337_10673__$1);
var G__10681 = null;
var G__10682 = 0;
var G__10683 = 0;
seq__8337_10663 = G__10680;
chunk__8338_10664 = G__10681;
count__8339_10665 = G__10682;
i__8340_10666 = G__10683;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.th.apply(null,a__6536__auto__);
};
var th = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return th__delegate.call(this,args__6535__auto__);};
th.cljs$lang$maxFixedArity = 0;
th.cljs$lang$applyTo = (function (arglist__10684){
var args__6535__auto__ = cljs.core.seq(arglist__10684);
return th__delegate(args__6535__auto__);
});
th.cljs$core$IFn$_invoke$arity$variadic = th__delegate;
return th;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.thead = (function() { 
var thead__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__8345_10685 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__8346_10686 = null;var count__8347_10687 = 0;var i__8348_10688 = 0;while(true){
if((i__8348_10688 < count__8347_10687))
{var arg__6537__auto___10689 = cljs.core._nth.call(null,chunk__8346_10686,i__8348_10688);a__6536__auto__.push(arg__6537__auto___10689);
{
var G__10690 = seq__8345_10685;
var G__10691 = chunk__8346_10686;
var G__10692 = count__8347_10687;
var G__10693 = (i__8348_10688 + 1);
seq__8345_10685 = G__10690;
chunk__8346_10686 = G__10691;
count__8347_10687 = G__10692;
i__8348_10688 = G__10693;
continue;
}
} else
{var temp__4092__auto___10694 = cljs.core.seq.call(null,seq__8345_10685);if(temp__4092__auto___10694)
{var seq__8345_10695__$1 = temp__4092__auto___10694;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8345_10695__$1))
{var c__5635__auto___10696 = cljs.core.chunk_first.call(null,seq__8345_10695__$1);{
var G__10697 = cljs.core.chunk_rest.call(null,seq__8345_10695__$1);
var G__10698 = c__5635__auto___10696;
var G__10699 = cljs.core.count.call(null,c__5635__auto___10696);
var G__10700 = 0;
seq__8345_10685 = G__10697;
chunk__8346_10686 = G__10698;
count__8347_10687 = G__10699;
i__8348_10688 = G__10700;
continue;
}
} else
{var arg__6537__auto___10701 = cljs.core.first.call(null,seq__8345_10695__$1);a__6536__auto__.push(arg__6537__auto___10701);
{
var G__10702 = cljs.core.next.call(null,seq__8345_10695__$1);
var G__10703 = null;
var G__10704 = 0;
var G__10705 = 0;
seq__8345_10685 = G__10702;
chunk__8346_10686 = G__10703;
count__8347_10687 = G__10704;
i__8348_10688 = G__10705;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.thead.apply(null,a__6536__auto__);
};
var thead = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return thead__delegate.call(this,args__6535__auto__);};
thead.cljs$lang$maxFixedArity = 0;
thead.cljs$lang$applyTo = (function (arglist__10706){
var args__6535__auto__ = cljs.core.seq(arglist__10706);
return thead__delegate(args__6535__auto__);
});
thead.cljs$core$IFn$_invoke$arity$variadic = thead__delegate;
return thead;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.time = (function() { 
var time__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__8353_10707 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__8354_10708 = null;var count__8355_10709 = 0;var i__8356_10710 = 0;while(true){
if((i__8356_10710 < count__8355_10709))
{var arg__6537__auto___10711 = cljs.core._nth.call(null,chunk__8354_10708,i__8356_10710);a__6536__auto__.push(arg__6537__auto___10711);
{
var G__10712 = seq__8353_10707;
var G__10713 = chunk__8354_10708;
var G__10714 = count__8355_10709;
var G__10715 = (i__8356_10710 + 1);
seq__8353_10707 = G__10712;
chunk__8354_10708 = G__10713;
count__8355_10709 = G__10714;
i__8356_10710 = G__10715;
continue;
}
} else
{var temp__4092__auto___10716 = cljs.core.seq.call(null,seq__8353_10707);if(temp__4092__auto___10716)
{var seq__8353_10717__$1 = temp__4092__auto___10716;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8353_10717__$1))
{var c__5635__auto___10718 = cljs.core.chunk_first.call(null,seq__8353_10717__$1);{
var G__10719 = cljs.core.chunk_rest.call(null,seq__8353_10717__$1);
var G__10720 = c__5635__auto___10718;
var G__10721 = cljs.core.count.call(null,c__5635__auto___10718);
var G__10722 = 0;
seq__8353_10707 = G__10719;
chunk__8354_10708 = G__10720;
count__8355_10709 = G__10721;
i__8356_10710 = G__10722;
continue;
}
} else
{var arg__6537__auto___10723 = cljs.core.first.call(null,seq__8353_10717__$1);a__6536__auto__.push(arg__6537__auto___10723);
{
var G__10724 = cljs.core.next.call(null,seq__8353_10717__$1);
var G__10725 = null;
var G__10726 = 0;
var G__10727 = 0;
seq__8353_10707 = G__10724;
chunk__8354_10708 = G__10725;
count__8355_10709 = G__10726;
i__8356_10710 = G__10727;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.time.apply(null,a__6536__auto__);
};
var time = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return time__delegate.call(this,args__6535__auto__);};
time.cljs$lang$maxFixedArity = 0;
time.cljs$lang$applyTo = (function (arglist__10728){
var args__6535__auto__ = cljs.core.seq(arglist__10728);
return time__delegate(args__6535__auto__);
});
time.cljs$core$IFn$_invoke$arity$variadic = time__delegate;
return time;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.title = (function() { 
var title__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__8361_10729 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__8362_10730 = null;var count__8363_10731 = 0;var i__8364_10732 = 0;while(true){
if((i__8364_10732 < count__8363_10731))
{var arg__6537__auto___10733 = cljs.core._nth.call(null,chunk__8362_10730,i__8364_10732);a__6536__auto__.push(arg__6537__auto___10733);
{
var G__10734 = seq__8361_10729;
var G__10735 = chunk__8362_10730;
var G__10736 = count__8363_10731;
var G__10737 = (i__8364_10732 + 1);
seq__8361_10729 = G__10734;
chunk__8362_10730 = G__10735;
count__8363_10731 = G__10736;
i__8364_10732 = G__10737;
continue;
}
} else
{var temp__4092__auto___10738 = cljs.core.seq.call(null,seq__8361_10729);if(temp__4092__auto___10738)
{var seq__8361_10739__$1 = temp__4092__auto___10738;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8361_10739__$1))
{var c__5635__auto___10740 = cljs.core.chunk_first.call(null,seq__8361_10739__$1);{
var G__10741 = cljs.core.chunk_rest.call(null,seq__8361_10739__$1);
var G__10742 = c__5635__auto___10740;
var G__10743 = cljs.core.count.call(null,c__5635__auto___10740);
var G__10744 = 0;
seq__8361_10729 = G__10741;
chunk__8362_10730 = G__10742;
count__8363_10731 = G__10743;
i__8364_10732 = G__10744;
continue;
}
} else
{var arg__6537__auto___10745 = cljs.core.first.call(null,seq__8361_10739__$1);a__6536__auto__.push(arg__6537__auto___10745);
{
var G__10746 = cljs.core.next.call(null,seq__8361_10739__$1);
var G__10747 = null;
var G__10748 = 0;
var G__10749 = 0;
seq__8361_10729 = G__10746;
chunk__8362_10730 = G__10747;
count__8363_10731 = G__10748;
i__8364_10732 = G__10749;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.title.apply(null,a__6536__auto__);
};
var title = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return title__delegate.call(this,args__6535__auto__);};
title.cljs$lang$maxFixedArity = 0;
title.cljs$lang$applyTo = (function (arglist__10750){
var args__6535__auto__ = cljs.core.seq(arglist__10750);
return title__delegate(args__6535__auto__);
});
title.cljs$core$IFn$_invoke$arity$variadic = title__delegate;
return title;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.tr = (function() { 
var tr__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__8369_10751 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__8370_10752 = null;var count__8371_10753 = 0;var i__8372_10754 = 0;while(true){
if((i__8372_10754 < count__8371_10753))
{var arg__6537__auto___10755 = cljs.core._nth.call(null,chunk__8370_10752,i__8372_10754);a__6536__auto__.push(arg__6537__auto___10755);
{
var G__10756 = seq__8369_10751;
var G__10757 = chunk__8370_10752;
var G__10758 = count__8371_10753;
var G__10759 = (i__8372_10754 + 1);
seq__8369_10751 = G__10756;
chunk__8370_10752 = G__10757;
count__8371_10753 = G__10758;
i__8372_10754 = G__10759;
continue;
}
} else
{var temp__4092__auto___10760 = cljs.core.seq.call(null,seq__8369_10751);if(temp__4092__auto___10760)
{var seq__8369_10761__$1 = temp__4092__auto___10760;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8369_10761__$1))
{var c__5635__auto___10762 = cljs.core.chunk_first.call(null,seq__8369_10761__$1);{
var G__10763 = cljs.core.chunk_rest.call(null,seq__8369_10761__$1);
var G__10764 = c__5635__auto___10762;
var G__10765 = cljs.core.count.call(null,c__5635__auto___10762);
var G__10766 = 0;
seq__8369_10751 = G__10763;
chunk__8370_10752 = G__10764;
count__8371_10753 = G__10765;
i__8372_10754 = G__10766;
continue;
}
} else
{var arg__6537__auto___10767 = cljs.core.first.call(null,seq__8369_10761__$1);a__6536__auto__.push(arg__6537__auto___10767);
{
var G__10768 = cljs.core.next.call(null,seq__8369_10761__$1);
var G__10769 = null;
var G__10770 = 0;
var G__10771 = 0;
seq__8369_10751 = G__10768;
chunk__8370_10752 = G__10769;
count__8371_10753 = G__10770;
i__8372_10754 = G__10771;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.tr.apply(null,a__6536__auto__);
};
var tr = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return tr__delegate.call(this,args__6535__auto__);};
tr.cljs$lang$maxFixedArity = 0;
tr.cljs$lang$applyTo = (function (arglist__10772){
var args__6535__auto__ = cljs.core.seq(arglist__10772);
return tr__delegate(args__6535__auto__);
});
tr.cljs$core$IFn$_invoke$arity$variadic = tr__delegate;
return tr;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.track = (function() { 
var track__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__8377_10773 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__8378_10774 = null;var count__8379_10775 = 0;var i__8380_10776 = 0;while(true){
if((i__8380_10776 < count__8379_10775))
{var arg__6537__auto___10777 = cljs.core._nth.call(null,chunk__8378_10774,i__8380_10776);a__6536__auto__.push(arg__6537__auto___10777);
{
var G__10778 = seq__8377_10773;
var G__10779 = chunk__8378_10774;
var G__10780 = count__8379_10775;
var G__10781 = (i__8380_10776 + 1);
seq__8377_10773 = G__10778;
chunk__8378_10774 = G__10779;
count__8379_10775 = G__10780;
i__8380_10776 = G__10781;
continue;
}
} else
{var temp__4092__auto___10782 = cljs.core.seq.call(null,seq__8377_10773);if(temp__4092__auto___10782)
{var seq__8377_10783__$1 = temp__4092__auto___10782;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8377_10783__$1))
{var c__5635__auto___10784 = cljs.core.chunk_first.call(null,seq__8377_10783__$1);{
var G__10785 = cljs.core.chunk_rest.call(null,seq__8377_10783__$1);
var G__10786 = c__5635__auto___10784;
var G__10787 = cljs.core.count.call(null,c__5635__auto___10784);
var G__10788 = 0;
seq__8377_10773 = G__10785;
chunk__8378_10774 = G__10786;
count__8379_10775 = G__10787;
i__8380_10776 = G__10788;
continue;
}
} else
{var arg__6537__auto___10789 = cljs.core.first.call(null,seq__8377_10783__$1);a__6536__auto__.push(arg__6537__auto___10789);
{
var G__10790 = cljs.core.next.call(null,seq__8377_10783__$1);
var G__10791 = null;
var G__10792 = 0;
var G__10793 = 0;
seq__8377_10773 = G__10790;
chunk__8378_10774 = G__10791;
count__8379_10775 = G__10792;
i__8380_10776 = G__10793;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.track.apply(null,a__6536__auto__);
};
var track = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return track__delegate.call(this,args__6535__auto__);};
track.cljs$lang$maxFixedArity = 0;
track.cljs$lang$applyTo = (function (arglist__10794){
var args__6535__auto__ = cljs.core.seq(arglist__10794);
return track__delegate(args__6535__auto__);
});
track.cljs$core$IFn$_invoke$arity$variadic = track__delegate;
return track;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.u = (function() { 
var u__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__8385_10795 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__8386_10796 = null;var count__8387_10797 = 0;var i__8388_10798 = 0;while(true){
if((i__8388_10798 < count__8387_10797))
{var arg__6537__auto___10799 = cljs.core._nth.call(null,chunk__8386_10796,i__8388_10798);a__6536__auto__.push(arg__6537__auto___10799);
{
var G__10800 = seq__8385_10795;
var G__10801 = chunk__8386_10796;
var G__10802 = count__8387_10797;
var G__10803 = (i__8388_10798 + 1);
seq__8385_10795 = G__10800;
chunk__8386_10796 = G__10801;
count__8387_10797 = G__10802;
i__8388_10798 = G__10803;
continue;
}
} else
{var temp__4092__auto___10804 = cljs.core.seq.call(null,seq__8385_10795);if(temp__4092__auto___10804)
{var seq__8385_10805__$1 = temp__4092__auto___10804;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8385_10805__$1))
{var c__5635__auto___10806 = cljs.core.chunk_first.call(null,seq__8385_10805__$1);{
var G__10807 = cljs.core.chunk_rest.call(null,seq__8385_10805__$1);
var G__10808 = c__5635__auto___10806;
var G__10809 = cljs.core.count.call(null,c__5635__auto___10806);
var G__10810 = 0;
seq__8385_10795 = G__10807;
chunk__8386_10796 = G__10808;
count__8387_10797 = G__10809;
i__8388_10798 = G__10810;
continue;
}
} else
{var arg__6537__auto___10811 = cljs.core.first.call(null,seq__8385_10805__$1);a__6536__auto__.push(arg__6537__auto___10811);
{
var G__10812 = cljs.core.next.call(null,seq__8385_10805__$1);
var G__10813 = null;
var G__10814 = 0;
var G__10815 = 0;
seq__8385_10795 = G__10812;
chunk__8386_10796 = G__10813;
count__8387_10797 = G__10814;
i__8388_10798 = G__10815;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.u.apply(null,a__6536__auto__);
};
var u = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return u__delegate.call(this,args__6535__auto__);};
u.cljs$lang$maxFixedArity = 0;
u.cljs$lang$applyTo = (function (arglist__10816){
var args__6535__auto__ = cljs.core.seq(arglist__10816);
return u__delegate(args__6535__auto__);
});
u.cljs$core$IFn$_invoke$arity$variadic = u__delegate;
return u;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.ul = (function() { 
var ul__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__8393_10817 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__8394_10818 = null;var count__8395_10819 = 0;var i__8396_10820 = 0;while(true){
if((i__8396_10820 < count__8395_10819))
{var arg__6537__auto___10821 = cljs.core._nth.call(null,chunk__8394_10818,i__8396_10820);a__6536__auto__.push(arg__6537__auto___10821);
{
var G__10822 = seq__8393_10817;
var G__10823 = chunk__8394_10818;
var G__10824 = count__8395_10819;
var G__10825 = (i__8396_10820 + 1);
seq__8393_10817 = G__10822;
chunk__8394_10818 = G__10823;
count__8395_10819 = G__10824;
i__8396_10820 = G__10825;
continue;
}
} else
{var temp__4092__auto___10826 = cljs.core.seq.call(null,seq__8393_10817);if(temp__4092__auto___10826)
{var seq__8393_10827__$1 = temp__4092__auto___10826;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8393_10827__$1))
{var c__5635__auto___10828 = cljs.core.chunk_first.call(null,seq__8393_10827__$1);{
var G__10829 = cljs.core.chunk_rest.call(null,seq__8393_10827__$1);
var G__10830 = c__5635__auto___10828;
var G__10831 = cljs.core.count.call(null,c__5635__auto___10828);
var G__10832 = 0;
seq__8393_10817 = G__10829;
chunk__8394_10818 = G__10830;
count__8395_10819 = G__10831;
i__8396_10820 = G__10832;
continue;
}
} else
{var arg__6537__auto___10833 = cljs.core.first.call(null,seq__8393_10827__$1);a__6536__auto__.push(arg__6537__auto___10833);
{
var G__10834 = cljs.core.next.call(null,seq__8393_10827__$1);
var G__10835 = null;
var G__10836 = 0;
var G__10837 = 0;
seq__8393_10817 = G__10834;
chunk__8394_10818 = G__10835;
count__8395_10819 = G__10836;
i__8396_10820 = G__10837;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.ul.apply(null,a__6536__auto__);
};
var ul = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ul__delegate.call(this,args__6535__auto__);};
ul.cljs$lang$maxFixedArity = 0;
ul.cljs$lang$applyTo = (function (arglist__10838){
var args__6535__auto__ = cljs.core.seq(arglist__10838);
return ul__delegate(args__6535__auto__);
});
ul.cljs$core$IFn$_invoke$arity$variadic = ul__delegate;
return ul;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.var$ = (function() { 
var var$__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__8401_10839 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__8402_10840 = null;var count__8403_10841 = 0;var i__8404_10842 = 0;while(true){
if((i__8404_10842 < count__8403_10841))
{var arg__6537__auto___10843 = cljs.core._nth.call(null,chunk__8402_10840,i__8404_10842);a__6536__auto__.push(arg__6537__auto___10843);
{
var G__10844 = seq__8401_10839;
var G__10845 = chunk__8402_10840;
var G__10846 = count__8403_10841;
var G__10847 = (i__8404_10842 + 1);
seq__8401_10839 = G__10844;
chunk__8402_10840 = G__10845;
count__8403_10841 = G__10846;
i__8404_10842 = G__10847;
continue;
}
} else
{var temp__4092__auto___10848 = cljs.core.seq.call(null,seq__8401_10839);if(temp__4092__auto___10848)
{var seq__8401_10849__$1 = temp__4092__auto___10848;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8401_10849__$1))
{var c__5635__auto___10850 = cljs.core.chunk_first.call(null,seq__8401_10849__$1);{
var G__10851 = cljs.core.chunk_rest.call(null,seq__8401_10849__$1);
var G__10852 = c__5635__auto___10850;
var G__10853 = cljs.core.count.call(null,c__5635__auto___10850);
var G__10854 = 0;
seq__8401_10839 = G__10851;
chunk__8402_10840 = G__10852;
count__8403_10841 = G__10853;
i__8404_10842 = G__10854;
continue;
}
} else
{var arg__6537__auto___10855 = cljs.core.first.call(null,seq__8401_10849__$1);a__6536__auto__.push(arg__6537__auto___10855);
{
var G__10856 = cljs.core.next.call(null,seq__8401_10849__$1);
var G__10857 = null;
var G__10858 = 0;
var G__10859 = 0;
seq__8401_10839 = G__10856;
chunk__8402_10840 = G__10857;
count__8403_10841 = G__10858;
i__8404_10842 = G__10859;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.var$.apply(null,a__6536__auto__);
};
var var$ = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return var$__delegate.call(this,args__6535__auto__);};
var$.cljs$lang$maxFixedArity = 0;
var$.cljs$lang$applyTo = (function (arglist__10860){
var args__6535__auto__ = cljs.core.seq(arglist__10860);
return var$__delegate(args__6535__auto__);
});
var$.cljs$core$IFn$_invoke$arity$variadic = var$__delegate;
return var$;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.video = (function() { 
var video__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__8409_10861 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__8410_10862 = null;var count__8411_10863 = 0;var i__8412_10864 = 0;while(true){
if((i__8412_10864 < count__8411_10863))
{var arg__6537__auto___10865 = cljs.core._nth.call(null,chunk__8410_10862,i__8412_10864);a__6536__auto__.push(arg__6537__auto___10865);
{
var G__10866 = seq__8409_10861;
var G__10867 = chunk__8410_10862;
var G__10868 = count__8411_10863;
var G__10869 = (i__8412_10864 + 1);
seq__8409_10861 = G__10866;
chunk__8410_10862 = G__10867;
count__8411_10863 = G__10868;
i__8412_10864 = G__10869;
continue;
}
} else
{var temp__4092__auto___10870 = cljs.core.seq.call(null,seq__8409_10861);if(temp__4092__auto___10870)
{var seq__8409_10871__$1 = temp__4092__auto___10870;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8409_10871__$1))
{var c__5635__auto___10872 = cljs.core.chunk_first.call(null,seq__8409_10871__$1);{
var G__10873 = cljs.core.chunk_rest.call(null,seq__8409_10871__$1);
var G__10874 = c__5635__auto___10872;
var G__10875 = cljs.core.count.call(null,c__5635__auto___10872);
var G__10876 = 0;
seq__8409_10861 = G__10873;
chunk__8410_10862 = G__10874;
count__8411_10863 = G__10875;
i__8412_10864 = G__10876;
continue;
}
} else
{var arg__6537__auto___10877 = cljs.core.first.call(null,seq__8409_10871__$1);a__6536__auto__.push(arg__6537__auto___10877);
{
var G__10878 = cljs.core.next.call(null,seq__8409_10871__$1);
var G__10879 = null;
var G__10880 = 0;
var G__10881 = 0;
seq__8409_10861 = G__10878;
chunk__8410_10862 = G__10879;
count__8411_10863 = G__10880;
i__8412_10864 = G__10881;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.video.apply(null,a__6536__auto__);
};
var video = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return video__delegate.call(this,args__6535__auto__);};
video.cljs$lang$maxFixedArity = 0;
video.cljs$lang$applyTo = (function (arglist__10882){
var args__6535__auto__ = cljs.core.seq(arglist__10882);
return video__delegate(args__6535__auto__);
});
video.cljs$core$IFn$_invoke$arity$variadic = video__delegate;
return video;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.wbr = (function() { 
var wbr__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__8417_10883 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__8418_10884 = null;var count__8419_10885 = 0;var i__8420_10886 = 0;while(true){
if((i__8420_10886 < count__8419_10885))
{var arg__6537__auto___10887 = cljs.core._nth.call(null,chunk__8418_10884,i__8420_10886);a__6536__auto__.push(arg__6537__auto___10887);
{
var G__10888 = seq__8417_10883;
var G__10889 = chunk__8418_10884;
var G__10890 = count__8419_10885;
var G__10891 = (i__8420_10886 + 1);
seq__8417_10883 = G__10888;
chunk__8418_10884 = G__10889;
count__8419_10885 = G__10890;
i__8420_10886 = G__10891;
continue;
}
} else
{var temp__4092__auto___10892 = cljs.core.seq.call(null,seq__8417_10883);if(temp__4092__auto___10892)
{var seq__8417_10893__$1 = temp__4092__auto___10892;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8417_10893__$1))
{var c__5635__auto___10894 = cljs.core.chunk_first.call(null,seq__8417_10893__$1);{
var G__10895 = cljs.core.chunk_rest.call(null,seq__8417_10893__$1);
var G__10896 = c__5635__auto___10894;
var G__10897 = cljs.core.count.call(null,c__5635__auto___10894);
var G__10898 = 0;
seq__8417_10883 = G__10895;
chunk__8418_10884 = G__10896;
count__8419_10885 = G__10897;
i__8420_10886 = G__10898;
continue;
}
} else
{var arg__6537__auto___10899 = cljs.core.first.call(null,seq__8417_10893__$1);a__6536__auto__.push(arg__6537__auto___10899);
{
var G__10900 = cljs.core.next.call(null,seq__8417_10893__$1);
var G__10901 = null;
var G__10902 = 0;
var G__10903 = 0;
seq__8417_10883 = G__10900;
chunk__8418_10884 = G__10901;
count__8419_10885 = G__10902;
i__8420_10886 = G__10903;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.wbr.apply(null,a__6536__auto__);
};
var wbr = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return wbr__delegate.call(this,args__6535__auto__);};
wbr.cljs$lang$maxFixedArity = 0;
wbr.cljs$lang$applyTo = (function (arglist__10904){
var args__6535__auto__ = cljs.core.seq(arglist__10904);
return wbr__delegate(args__6535__auto__);
});
wbr.cljs$core$IFn$_invoke$arity$variadic = wbr__delegate;
return wbr;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.circle = (function() { 
var circle__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__8425_10905 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__8426_10906 = null;var count__8427_10907 = 0;var i__8428_10908 = 0;while(true){
if((i__8428_10908 < count__8427_10907))
{var arg__6537__auto___10909 = cljs.core._nth.call(null,chunk__8426_10906,i__8428_10908);a__6536__auto__.push(arg__6537__auto___10909);
{
var G__10910 = seq__8425_10905;
var G__10911 = chunk__8426_10906;
var G__10912 = count__8427_10907;
var G__10913 = (i__8428_10908 + 1);
seq__8425_10905 = G__10910;
chunk__8426_10906 = G__10911;
count__8427_10907 = G__10912;
i__8428_10908 = G__10913;
continue;
}
} else
{var temp__4092__auto___10914 = cljs.core.seq.call(null,seq__8425_10905);if(temp__4092__auto___10914)
{var seq__8425_10915__$1 = temp__4092__auto___10914;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8425_10915__$1))
{var c__5635__auto___10916 = cljs.core.chunk_first.call(null,seq__8425_10915__$1);{
var G__10917 = cljs.core.chunk_rest.call(null,seq__8425_10915__$1);
var G__10918 = c__5635__auto___10916;
var G__10919 = cljs.core.count.call(null,c__5635__auto___10916);
var G__10920 = 0;
seq__8425_10905 = G__10917;
chunk__8426_10906 = G__10918;
count__8427_10907 = G__10919;
i__8428_10908 = G__10920;
continue;
}
} else
{var arg__6537__auto___10921 = cljs.core.first.call(null,seq__8425_10915__$1);a__6536__auto__.push(arg__6537__auto___10921);
{
var G__10922 = cljs.core.next.call(null,seq__8425_10915__$1);
var G__10923 = null;
var G__10924 = 0;
var G__10925 = 0;
seq__8425_10905 = G__10922;
chunk__8426_10906 = G__10923;
count__8427_10907 = G__10924;
i__8428_10908 = G__10925;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.circle.apply(null,a__6536__auto__);
};
var circle = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return circle__delegate.call(this,args__6535__auto__);};
circle.cljs$lang$maxFixedArity = 0;
circle.cljs$lang$applyTo = (function (arglist__10926){
var args__6535__auto__ = cljs.core.seq(arglist__10926);
return circle__delegate(args__6535__auto__);
});
circle.cljs$core$IFn$_invoke$arity$variadic = circle__delegate;
return circle;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.g = (function() { 
var g__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__8433_10927 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__8434_10928 = null;var count__8435_10929 = 0;var i__8436_10930 = 0;while(true){
if((i__8436_10930 < count__8435_10929))
{var arg__6537__auto___10931 = cljs.core._nth.call(null,chunk__8434_10928,i__8436_10930);a__6536__auto__.push(arg__6537__auto___10931);
{
var G__10932 = seq__8433_10927;
var G__10933 = chunk__8434_10928;
var G__10934 = count__8435_10929;
var G__10935 = (i__8436_10930 + 1);
seq__8433_10927 = G__10932;
chunk__8434_10928 = G__10933;
count__8435_10929 = G__10934;
i__8436_10930 = G__10935;
continue;
}
} else
{var temp__4092__auto___10936 = cljs.core.seq.call(null,seq__8433_10927);if(temp__4092__auto___10936)
{var seq__8433_10937__$1 = temp__4092__auto___10936;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8433_10937__$1))
{var c__5635__auto___10938 = cljs.core.chunk_first.call(null,seq__8433_10937__$1);{
var G__10939 = cljs.core.chunk_rest.call(null,seq__8433_10937__$1);
var G__10940 = c__5635__auto___10938;
var G__10941 = cljs.core.count.call(null,c__5635__auto___10938);
var G__10942 = 0;
seq__8433_10927 = G__10939;
chunk__8434_10928 = G__10940;
count__8435_10929 = G__10941;
i__8436_10930 = G__10942;
continue;
}
} else
{var arg__6537__auto___10943 = cljs.core.first.call(null,seq__8433_10937__$1);a__6536__auto__.push(arg__6537__auto___10943);
{
var G__10944 = cljs.core.next.call(null,seq__8433_10937__$1);
var G__10945 = null;
var G__10946 = 0;
var G__10947 = 0;
seq__8433_10927 = G__10944;
chunk__8434_10928 = G__10945;
count__8435_10929 = G__10946;
i__8436_10930 = G__10947;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.g.apply(null,a__6536__auto__);
};
var g = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return g__delegate.call(this,args__6535__auto__);};
g.cljs$lang$maxFixedArity = 0;
g.cljs$lang$applyTo = (function (arglist__10948){
var args__6535__auto__ = cljs.core.seq(arglist__10948);
return g__delegate(args__6535__auto__);
});
g.cljs$core$IFn$_invoke$arity$variadic = g__delegate;
return g;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.line = (function() { 
var line__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__8441_10949 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__8442_10950 = null;var count__8443_10951 = 0;var i__8444_10952 = 0;while(true){
if((i__8444_10952 < count__8443_10951))
{var arg__6537__auto___10953 = cljs.core._nth.call(null,chunk__8442_10950,i__8444_10952);a__6536__auto__.push(arg__6537__auto___10953);
{
var G__10954 = seq__8441_10949;
var G__10955 = chunk__8442_10950;
var G__10956 = count__8443_10951;
var G__10957 = (i__8444_10952 + 1);
seq__8441_10949 = G__10954;
chunk__8442_10950 = G__10955;
count__8443_10951 = G__10956;
i__8444_10952 = G__10957;
continue;
}
} else
{var temp__4092__auto___10958 = cljs.core.seq.call(null,seq__8441_10949);if(temp__4092__auto___10958)
{var seq__8441_10959__$1 = temp__4092__auto___10958;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8441_10959__$1))
{var c__5635__auto___10960 = cljs.core.chunk_first.call(null,seq__8441_10959__$1);{
var G__10961 = cljs.core.chunk_rest.call(null,seq__8441_10959__$1);
var G__10962 = c__5635__auto___10960;
var G__10963 = cljs.core.count.call(null,c__5635__auto___10960);
var G__10964 = 0;
seq__8441_10949 = G__10961;
chunk__8442_10950 = G__10962;
count__8443_10951 = G__10963;
i__8444_10952 = G__10964;
continue;
}
} else
{var arg__6537__auto___10965 = cljs.core.first.call(null,seq__8441_10959__$1);a__6536__auto__.push(arg__6537__auto___10965);
{
var G__10966 = cljs.core.next.call(null,seq__8441_10959__$1);
var G__10967 = null;
var G__10968 = 0;
var G__10969 = 0;
seq__8441_10949 = G__10966;
chunk__8442_10950 = G__10967;
count__8443_10951 = G__10968;
i__8444_10952 = G__10969;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.line.apply(null,a__6536__auto__);
};
var line = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return line__delegate.call(this,args__6535__auto__);};
line.cljs$lang$maxFixedArity = 0;
line.cljs$lang$applyTo = (function (arglist__10970){
var args__6535__auto__ = cljs.core.seq(arglist__10970);
return line__delegate(args__6535__auto__);
});
line.cljs$core$IFn$_invoke$arity$variadic = line__delegate;
return line;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.path = (function() { 
var path__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__8449_10971 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__8450_10972 = null;var count__8451_10973 = 0;var i__8452_10974 = 0;while(true){
if((i__8452_10974 < count__8451_10973))
{var arg__6537__auto___10975 = cljs.core._nth.call(null,chunk__8450_10972,i__8452_10974);a__6536__auto__.push(arg__6537__auto___10975);
{
var G__10976 = seq__8449_10971;
var G__10977 = chunk__8450_10972;
var G__10978 = count__8451_10973;
var G__10979 = (i__8452_10974 + 1);
seq__8449_10971 = G__10976;
chunk__8450_10972 = G__10977;
count__8451_10973 = G__10978;
i__8452_10974 = G__10979;
continue;
}
} else
{var temp__4092__auto___10980 = cljs.core.seq.call(null,seq__8449_10971);if(temp__4092__auto___10980)
{var seq__8449_10981__$1 = temp__4092__auto___10980;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8449_10981__$1))
{var c__5635__auto___10982 = cljs.core.chunk_first.call(null,seq__8449_10981__$1);{
var G__10983 = cljs.core.chunk_rest.call(null,seq__8449_10981__$1);
var G__10984 = c__5635__auto___10982;
var G__10985 = cljs.core.count.call(null,c__5635__auto___10982);
var G__10986 = 0;
seq__8449_10971 = G__10983;
chunk__8450_10972 = G__10984;
count__8451_10973 = G__10985;
i__8452_10974 = G__10986;
continue;
}
} else
{var arg__6537__auto___10987 = cljs.core.first.call(null,seq__8449_10981__$1);a__6536__auto__.push(arg__6537__auto___10987);
{
var G__10988 = cljs.core.next.call(null,seq__8449_10981__$1);
var G__10989 = null;
var G__10990 = 0;
var G__10991 = 0;
seq__8449_10971 = G__10988;
chunk__8450_10972 = G__10989;
count__8451_10973 = G__10990;
i__8452_10974 = G__10991;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.path.apply(null,a__6536__auto__);
};
var path = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return path__delegate.call(this,args__6535__auto__);};
path.cljs$lang$maxFixedArity = 0;
path.cljs$lang$applyTo = (function (arglist__10992){
var args__6535__auto__ = cljs.core.seq(arglist__10992);
return path__delegate(args__6535__auto__);
});
path.cljs$core$IFn$_invoke$arity$variadic = path__delegate;
return path;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.polygon = (function() { 
var polygon__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__8457_10993 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__8458_10994 = null;var count__8459_10995 = 0;var i__8460_10996 = 0;while(true){
if((i__8460_10996 < count__8459_10995))
{var arg__6537__auto___10997 = cljs.core._nth.call(null,chunk__8458_10994,i__8460_10996);a__6536__auto__.push(arg__6537__auto___10997);
{
var G__10998 = seq__8457_10993;
var G__10999 = chunk__8458_10994;
var G__11000 = count__8459_10995;
var G__11001 = (i__8460_10996 + 1);
seq__8457_10993 = G__10998;
chunk__8458_10994 = G__10999;
count__8459_10995 = G__11000;
i__8460_10996 = G__11001;
continue;
}
} else
{var temp__4092__auto___11002 = cljs.core.seq.call(null,seq__8457_10993);if(temp__4092__auto___11002)
{var seq__8457_11003__$1 = temp__4092__auto___11002;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8457_11003__$1))
{var c__5635__auto___11004 = cljs.core.chunk_first.call(null,seq__8457_11003__$1);{
var G__11005 = cljs.core.chunk_rest.call(null,seq__8457_11003__$1);
var G__11006 = c__5635__auto___11004;
var G__11007 = cljs.core.count.call(null,c__5635__auto___11004);
var G__11008 = 0;
seq__8457_10993 = G__11005;
chunk__8458_10994 = G__11006;
count__8459_10995 = G__11007;
i__8460_10996 = G__11008;
continue;
}
} else
{var arg__6537__auto___11009 = cljs.core.first.call(null,seq__8457_11003__$1);a__6536__auto__.push(arg__6537__auto___11009);
{
var G__11010 = cljs.core.next.call(null,seq__8457_11003__$1);
var G__11011 = null;
var G__11012 = 0;
var G__11013 = 0;
seq__8457_10993 = G__11010;
chunk__8458_10994 = G__11011;
count__8459_10995 = G__11012;
i__8460_10996 = G__11013;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.polygon.apply(null,a__6536__auto__);
};
var polygon = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return polygon__delegate.call(this,args__6535__auto__);};
polygon.cljs$lang$maxFixedArity = 0;
polygon.cljs$lang$applyTo = (function (arglist__11014){
var args__6535__auto__ = cljs.core.seq(arglist__11014);
return polygon__delegate(args__6535__auto__);
});
polygon.cljs$core$IFn$_invoke$arity$variadic = polygon__delegate;
return polygon;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.polyline = (function() { 
var polyline__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__8465_11015 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__8466_11016 = null;var count__8467_11017 = 0;var i__8468_11018 = 0;while(true){
if((i__8468_11018 < count__8467_11017))
{var arg__6537__auto___11019 = cljs.core._nth.call(null,chunk__8466_11016,i__8468_11018);a__6536__auto__.push(arg__6537__auto___11019);
{
var G__11020 = seq__8465_11015;
var G__11021 = chunk__8466_11016;
var G__11022 = count__8467_11017;
var G__11023 = (i__8468_11018 + 1);
seq__8465_11015 = G__11020;
chunk__8466_11016 = G__11021;
count__8467_11017 = G__11022;
i__8468_11018 = G__11023;
continue;
}
} else
{var temp__4092__auto___11024 = cljs.core.seq.call(null,seq__8465_11015);if(temp__4092__auto___11024)
{var seq__8465_11025__$1 = temp__4092__auto___11024;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8465_11025__$1))
{var c__5635__auto___11026 = cljs.core.chunk_first.call(null,seq__8465_11025__$1);{
var G__11027 = cljs.core.chunk_rest.call(null,seq__8465_11025__$1);
var G__11028 = c__5635__auto___11026;
var G__11029 = cljs.core.count.call(null,c__5635__auto___11026);
var G__11030 = 0;
seq__8465_11015 = G__11027;
chunk__8466_11016 = G__11028;
count__8467_11017 = G__11029;
i__8468_11018 = G__11030;
continue;
}
} else
{var arg__6537__auto___11031 = cljs.core.first.call(null,seq__8465_11025__$1);a__6536__auto__.push(arg__6537__auto___11031);
{
var G__11032 = cljs.core.next.call(null,seq__8465_11025__$1);
var G__11033 = null;
var G__11034 = 0;
var G__11035 = 0;
seq__8465_11015 = G__11032;
chunk__8466_11016 = G__11033;
count__8467_11017 = G__11034;
i__8468_11018 = G__11035;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.polyline.apply(null,a__6536__auto__);
};
var polyline = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return polyline__delegate.call(this,args__6535__auto__);};
polyline.cljs$lang$maxFixedArity = 0;
polyline.cljs$lang$applyTo = (function (arglist__11036){
var args__6535__auto__ = cljs.core.seq(arglist__11036);
return polyline__delegate(args__6535__auto__);
});
polyline.cljs$core$IFn$_invoke$arity$variadic = polyline__delegate;
return polyline;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.rect = (function() { 
var rect__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__8473_11037 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__8474_11038 = null;var count__8475_11039 = 0;var i__8476_11040 = 0;while(true){
if((i__8476_11040 < count__8475_11039))
{var arg__6537__auto___11041 = cljs.core._nth.call(null,chunk__8474_11038,i__8476_11040);a__6536__auto__.push(arg__6537__auto___11041);
{
var G__11042 = seq__8473_11037;
var G__11043 = chunk__8474_11038;
var G__11044 = count__8475_11039;
var G__11045 = (i__8476_11040 + 1);
seq__8473_11037 = G__11042;
chunk__8474_11038 = G__11043;
count__8475_11039 = G__11044;
i__8476_11040 = G__11045;
continue;
}
} else
{var temp__4092__auto___11046 = cljs.core.seq.call(null,seq__8473_11037);if(temp__4092__auto___11046)
{var seq__8473_11047__$1 = temp__4092__auto___11046;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8473_11047__$1))
{var c__5635__auto___11048 = cljs.core.chunk_first.call(null,seq__8473_11047__$1);{
var G__11049 = cljs.core.chunk_rest.call(null,seq__8473_11047__$1);
var G__11050 = c__5635__auto___11048;
var G__11051 = cljs.core.count.call(null,c__5635__auto___11048);
var G__11052 = 0;
seq__8473_11037 = G__11049;
chunk__8474_11038 = G__11050;
count__8475_11039 = G__11051;
i__8476_11040 = G__11052;
continue;
}
} else
{var arg__6537__auto___11053 = cljs.core.first.call(null,seq__8473_11047__$1);a__6536__auto__.push(arg__6537__auto___11053);
{
var G__11054 = cljs.core.next.call(null,seq__8473_11047__$1);
var G__11055 = null;
var G__11056 = 0;
var G__11057 = 0;
seq__8473_11037 = G__11054;
chunk__8474_11038 = G__11055;
count__8475_11039 = G__11056;
i__8476_11040 = G__11057;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.rect.apply(null,a__6536__auto__);
};
var rect = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return rect__delegate.call(this,args__6535__auto__);};
rect.cljs$lang$maxFixedArity = 0;
rect.cljs$lang$applyTo = (function (arglist__11058){
var args__6535__auto__ = cljs.core.seq(arglist__11058);
return rect__delegate(args__6535__auto__);
});
rect.cljs$core$IFn$_invoke$arity$variadic = rect__delegate;
return rect;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.svg = (function() { 
var svg__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__8481_11059 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__8482_11060 = null;var count__8483_11061 = 0;var i__8484_11062 = 0;while(true){
if((i__8484_11062 < count__8483_11061))
{var arg__6537__auto___11063 = cljs.core._nth.call(null,chunk__8482_11060,i__8484_11062);a__6536__auto__.push(arg__6537__auto___11063);
{
var G__11064 = seq__8481_11059;
var G__11065 = chunk__8482_11060;
var G__11066 = count__8483_11061;
var G__11067 = (i__8484_11062 + 1);
seq__8481_11059 = G__11064;
chunk__8482_11060 = G__11065;
count__8483_11061 = G__11066;
i__8484_11062 = G__11067;
continue;
}
} else
{var temp__4092__auto___11068 = cljs.core.seq.call(null,seq__8481_11059);if(temp__4092__auto___11068)
{var seq__8481_11069__$1 = temp__4092__auto___11068;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8481_11069__$1))
{var c__5635__auto___11070 = cljs.core.chunk_first.call(null,seq__8481_11069__$1);{
var G__11071 = cljs.core.chunk_rest.call(null,seq__8481_11069__$1);
var G__11072 = c__5635__auto___11070;
var G__11073 = cljs.core.count.call(null,c__5635__auto___11070);
var G__11074 = 0;
seq__8481_11059 = G__11071;
chunk__8482_11060 = G__11072;
count__8483_11061 = G__11073;
i__8484_11062 = G__11074;
continue;
}
} else
{var arg__6537__auto___11075 = cljs.core.first.call(null,seq__8481_11069__$1);a__6536__auto__.push(arg__6537__auto___11075);
{
var G__11076 = cljs.core.next.call(null,seq__8481_11069__$1);
var G__11077 = null;
var G__11078 = 0;
var G__11079 = 0;
seq__8481_11059 = G__11076;
chunk__8482_11060 = G__11077;
count__8483_11061 = G__11078;
i__8484_11062 = G__11079;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.svg.apply(null,a__6536__auto__);
};
var svg = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return svg__delegate.call(this,args__6535__auto__);};
svg.cljs$lang$maxFixedArity = 0;
svg.cljs$lang$applyTo = (function (arglist__11080){
var args__6535__auto__ = cljs.core.seq(arglist__11080);
return svg__delegate(args__6535__auto__);
});
svg.cljs$core$IFn$_invoke$arity$variadic = svg__delegate;
return svg;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.text = (function() { 
var text__delegate = function (args__6535__auto__){var a__6536__auto__ = [];a__6536__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6535__auto__)));
var seq__7793_11081 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6535__auto__));var chunk__7794_11082 = null;var count__7795_11083 = 0;var i__7796_11084 = 0;while(true){
if((i__7796_11084 < count__7795_11083))
{var arg__6537__auto___11085 = cljs.core._nth.call(null,chunk__7794_11082,i__7796_11084);a__6536__auto__.push(arg__6537__auto___11085);
{
var G__11086 = seq__7793_11081;
var G__11087 = chunk__7794_11082;
var G__11088 = count__7795_11083;
var G__11089 = (i__7796_11084 + 1);
seq__7793_11081 = G__11086;
chunk__7794_11082 = G__11087;
count__7795_11083 = G__11088;
i__7796_11084 = G__11089;
continue;
}
} else
{var temp__4092__auto___11090 = cljs.core.seq.call(null,seq__7793_11081);if(temp__4092__auto___11090)
{var seq__7793_11091__$1 = temp__4092__auto___11090;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7793_11091__$1))
{var c__5635__auto___11092 = cljs.core.chunk_first.call(null,seq__7793_11091__$1);{
var G__11093 = cljs.core.chunk_rest.call(null,seq__7793_11091__$1);
var G__11094 = c__5635__auto___11092;
var G__11095 = cljs.core.count.call(null,c__5635__auto___11092);
var G__11096 = 0;
seq__7793_11081 = G__11093;
chunk__7794_11082 = G__11094;
count__7795_11083 = G__11095;
i__7796_11084 = G__11096;
continue;
}
} else
{var arg__6537__auto___11097 = cljs.core.first.call(null,seq__7793_11091__$1);a__6536__auto__.push(arg__6537__auto___11097);
{
var G__11098 = cljs.core.next.call(null,seq__7793_11091__$1);
var G__11099 = null;
var G__11100 = 0;
var G__11101 = 0;
seq__7793_11081 = G__11098;
chunk__7794_11082 = G__11099;
count__7795_11083 = G__11100;
i__7796_11084 = G__11101;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.text.apply(null,a__6536__auto__);
};
var text = function (var_args){
var args__6535__auto__ = null;if (arguments.length > 0) {
  args__6535__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return text__delegate.call(this,args__6535__auto__);};
text.cljs$lang$maxFixedArity = 0;
text.cljs$lang$applyTo = (function (arglist__11102){
var args__6535__auto__ = cljs.core.seq(arglist__11102);
return text__delegate(args__6535__auto__);
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
lt.plugins.elm_light.autocompleter.handle_keypress = (function handle_keypress(p__7511,ev){var map__7514 = p__7511;var map__7514__$1 = ((cljs.core.seq_QMARK_.call(null,map__7514))?cljs.core.apply.call(null,cljs.core.hash_map,map__7514):map__7514);var props = map__7514__$1;var on_cancel = cljs.core.get.call(null,map__7514__$1,new cljs.core.Keyword(null,"on-cancel","on-cancel",600765850));var on_select = cljs.core.get.call(null,map__7514__$1,new cljs.core.Keyword(null,"on-select","on-select",1062468636));var on_down = cljs.core.get.call(null,map__7514__$1,new cljs.core.Keyword(null,"on-down","on-down",3936419650));var on_up = cljs.core.get.call(null,map__7514__$1,new cljs.core.Keyword(null,"on-up","on-up",1119739067));var kk = ev.which;var G__7515 = kk;if(cljs.core._EQ_.call(null,27,G__7515))
{ev.preventDefault();
ev.target.value = "";
return on_cancel.call(null);
} else
{if(cljs.core._EQ_.call(null,13,G__7515))
{ev.preventDefault();
var temp__4092__auto___7531 = lt.plugins.elm_light.autocompleter.find_active.call(null,new cljs.core.Keyword(null,"items","items",1114430258).cljs$core$IFn$_invoke$arity$1(props));if(cljs.core.truth_(temp__4092__auto___7531))
{var active_7532 = temp__4092__auto___7531;ev.target.value = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(active_7532);
} else
{}
return on_select.call(null);
} else
{if(cljs.core._EQ_.call(null,40,G__7515))
{ev.preventDefault();
return on_down.call(null);
} else
{if(cljs.core._EQ_.call(null,38,G__7515))
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
return (function (p1__7516_SHARP_){return "autocomplete-dropdown-item row".concat((cljs.core.truth_(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(p1__7516_SHARP_))?" autocomplete-active":""));
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
lt.plugins.elm_light.autocompleter.Adder = quiescent.component.call(null,(function (p__7517){var map__7518 = p__7517;var map__7518__$1 = ((cljs.core.seq_QMARK_.call(null,map__7518))?cljs.core.apply.call(null,cljs.core.hash_map,map__7518):map__7518);var props = map__7518__$1;var disabled = cljs.core.get.call(null,map__7518__$1,new cljs.core.Keyword(null,"disabled","disabled",1284845038));var on_add_package = cljs.core.get.call(null,map__7518__$1,new cljs.core.Keyword(null,"on-add-package","on-add-package",3601701790));return quiescent.dom.button.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",1004015509),"btn",new cljs.core.Keyword(null,"disabled","disabled",1284845038),disabled,new cljs.core.Keyword(null,"onClick","onClick",3956969051),((function (map__7518,map__7518__$1,props,disabled,on_add_package){
return (function (){return on_add_package.call(null);
});})(map__7518,map__7518__$1,props,disabled,on_add_package))
], null),"Add package");
}));
/**
* 
*/
lt.plugins.elm_light.autocompleter.Versions = quiescent.component.call(null,(function (props){return cljs.core.apply.call(null,quiescent.dom.select,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",1004015509),"versions",new cljs.core.Keyword(null,"value","value",1125876963),new cljs.core.Keyword(null,"version","version",1365512266).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"onChange","onChange",2050678241),(function (p1__7519_SHARP_){return new cljs.core.Keyword(null,"on-change-version","on-change-version",822058203).cljs$core$IFn$_invoke$arity$1(props).call(null,p1__7519_SHARP_.target.value);
})], null),cljs.core.map.call(null,(function (p1__7520_SHARP_){return quiescent.dom.option.call(null,cljs.core.PersistentArrayMap.EMPTY,p1__7520_SHARP_);
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
clojure.walk.keywordize_keys = (function keywordize_keys(m){var f = (function (p__11247){var vec__11248 = p__11247;var k = cljs.core.nth.call(null,vec__11248,0,null);var v = cljs.core.nth.call(null,vec__11248,1,null);if(typeof k === 'string')
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
clojure.walk.stringify_keys = (function stringify_keys(m){var f = (function (p__11251){var vec__11252 = p__11251;var k = cljs.core.nth.call(null,vec__11252,0,null);var v = cljs.core.nth.call(null,vec__11252,1,null);if((k instanceof cljs.core.Keyword))
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
lt.plugins.elm_light.utils.find_symbol = (function find_symbol(ed,pos){var curr_tok = lt.objs.editor.__GT_token.call(null,ed,pos);var G__11257 = new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(curr_tok);if(cljs.core._EQ_.call(null,"variable",G__11257))
{return [cljs.core.str(find_symbol.call(null,ed,cljs.core.assoc.call(null,pos,new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(curr_tok)))),cljs.core.str(new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(curr_tok))].join('');
} else
{if(cljs.core._EQ_.call(null,"qualifier",G__11257))
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
return (function (p__11400){var vec__11401 = p__11400;var k = cljs.core.nth.call(null,vec__11401,0,null);var v = cljs.core.nth.call(null,vec__11401,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.elm_light.utils.nskw__GT_name.call(null,k),v], null);
});})(pkg_file))
,deps)),pkg);
});})(pkg_file))
)));
});
lt.plugins.elm_light.packages.get_project_deps = (function get_project_deps(project_path){var pkg_json = lt.objs.files.join.call(null,project_path,"elm-package.json");var deps_json = lt.objs.files.join.call(null,project_path,"elm-stuff","exact-dependencies.json");return cljs.core.mapv.call(null,((function (pkg_json,deps_json){
return (function (p__11408){var vec__11409 = p__11408;var _ = cljs.core.nth.call(null,vec__11409,0,null);var vs = cljs.core.nth.call(null,vec__11409,1,null);return cljs.core.apply.call(null,cljs.core.merge,vs);
});})(pkg_json,deps_json))
,cljs.core.group_by.call(null,new cljs.core.Keyword(null,"package","package",4501809080),cljs.core.concat.call(null,cljs.core.mapv.call(null,((function (pkg_json,deps_json){
return (function (p__11410){var vec__11411 = p__11410;var k = cljs.core.nth.call(null,vec__11411,0,null);var v = cljs.core.nth.call(null,vec__11411,1,null);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"package","package",4501809080),lt.plugins.elm_light.utils.nskw__GT_name.call(null,k),new cljs.core.Keyword(null,"exact","exact",1110851185),v], null);
});})(pkg_json,deps_json))
,lt.plugins.elm_light.utils.parse_json_file.call(null,deps_json)),cljs.core.mapv.call(null,((function (pkg_json,deps_json){
return (function (p__11412){var vec__11413 = p__11412;var k = cljs.core.nth.call(null,vec__11413,0,null);var v = cljs.core.nth.call(null,vec__11413,1,null);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"package","package",4501809080),lt.plugins.elm_light.utils.nskw__GT_name.call(null,k),new cljs.core.Keyword(null,"range","range",1122184367),v], null);
});})(pkg_json,deps_json))
,new cljs.core.Keyword(null,"dependencies","dependencies",1517678747).cljs$core$IFn$_invoke$arity$1(lt.plugins.elm_light.utils.parse_json_file.call(null,pkg_json))))));
});
lt.plugins.elm_light.packages.project_wrapper = (function project_wrapper(this$){var e__6280__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.elm","div.elm",2686466363),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"project-packages-wrapper"], null),"Retrieving project package info..."], null)], null));var seq__11420_11435 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__11421_11436 = null;var count__11422_11437 = 0;var i__11423_11438 = 0;while(true){
if((i__11423_11438 < count__11422_11437))
{var vec__11424_11439 = cljs.core._nth.call(null,chunk__11421_11436,i__11423_11438);var ev__6281__auto___11440 = cljs.core.nth.call(null,vec__11424_11439,0,null);var func__6282__auto___11441 = cljs.core.nth.call(null,vec__11424_11439,1,null);lt.util.dom.on.call(null,e__6280__auto__,ev__6281__auto___11440,func__6282__auto___11441);
{
var G__11442 = seq__11420_11435;
var G__11443 = chunk__11421_11436;
var G__11444 = count__11422_11437;
var G__11445 = (i__11423_11438 + 1);
seq__11420_11435 = G__11442;
chunk__11421_11436 = G__11443;
count__11422_11437 = G__11444;
i__11423_11438 = G__11445;
continue;
}
} else
{var temp__4092__auto___11446 = cljs.core.seq.call(null,seq__11420_11435);if(temp__4092__auto___11446)
{var seq__11420_11447__$1 = temp__4092__auto___11446;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11420_11447__$1))
{var c__5635__auto___11448 = cljs.core.chunk_first.call(null,seq__11420_11447__$1);{
var G__11449 = cljs.core.chunk_rest.call(null,seq__11420_11447__$1);
var G__11450 = c__5635__auto___11448;
var G__11451 = cljs.core.count.call(null,c__5635__auto___11448);
var G__11452 = 0;
seq__11420_11435 = G__11449;
chunk__11421_11436 = G__11450;
count__11422_11437 = G__11451;
i__11423_11438 = G__11452;
continue;
}
} else
{var vec__11425_11453 = cljs.core.first.call(null,seq__11420_11447__$1);var ev__6281__auto___11454 = cljs.core.nth.call(null,vec__11425_11453,0,null);var func__6282__auto___11455 = cljs.core.nth.call(null,vec__11425_11453,1,null);lt.util.dom.on.call(null,e__6280__auto__,ev__6281__auto___11454,func__6282__auto___11455);
{
var G__11456 = cljs.core.next.call(null,seq__11420_11447__$1);
var G__11457 = null;
var G__11458 = 0;
var G__11459 = 0;
seq__11420_11435 = G__11456;
chunk__11421_11436 = G__11457;
count__11422_11437 = G__11458;
i__11423_11438 = G__11459;
continue;
}
}
} else
{}
}
break;
}
return e__6280__auto__;
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.packages","elm-packages","lt.plugins.elm-light.packages/elm-packages",4552372902),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elm.packages","elm.packages",3931311271),null], null), null),new cljs.core.Keyword(null,"label","label",1116631654),"Elm project packages",new cljs.core.Keyword(null,"name","name",1017277949),"Elm project packages",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){lt.plugins.elm_light.packages.fetch_packages.call(null,(function (p1__11426_SHARP_){return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"all-packages","all-packages",1123981067),p1__11426_SHARP_], null));
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
lt.plugins.elm_light.packages.idx_active = (function idx_active(items){return cljs.core.first.call(null,cljs.core.keep_indexed.call(null,(function (p1__11428_SHARP_,p2__11427_SHARP_){if(cljs.core.truth_(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(p2__11427_SHARP_)))
{return p1__11428_SHARP_;
} else
{return null;
}
}),items));
});
lt.plugins.elm_light.packages.move_down = (function move_down(items){if(cljs.core.empty_QMARK_.call(null,items))
{return null;
} else
{return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,items,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.elm_light.packages.idx_active.call(null,items),new cljs.core.Keyword(null,"active","active",3885920888)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__5201__auto__ = (cljs.core.count.call(null,items) - 1);var y__5202__auto__ = (lt.plugins.elm_light.packages.idx_active.call(null,items) + 1);return ((x__5201__auto__ < y__5202__auto__) ? x__5201__auto__ : y__5202__auto__);
})(),new cljs.core.Keyword(null,"active","active",3885920888)], null),true);
}
});
lt.plugins.elm_light.packages.move_up = (function move_up(items){if(cljs.core.empty_QMARK_.call(null,items))
{return null;
} else
{return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,items,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.elm_light.packages.idx_active.call(null,items),new cljs.core.Keyword(null,"active","active",3885920888)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__5194__auto__ = 0;var y__5195__auto__ = (lt.plugins.elm_light.packages.idx_active.call(null,items) - 1);return ((x__5194__auto__ > y__5195__auto__) ? x__5194__auto__ : y__5195__auto__);
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
lt.plugins.elm_light.packages.on_pkg_sel = (function on_pkg_sel(){var items_11460 = new cljs.core.Keyword(null,"ac-packages","ac-packages",1548109226).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.elm_light.packages.elm_packages));var temp__4090__auto___11461 = lt.plugins.elm_light.packages.idx_active.call(null,items_11460);if(cljs.core.truth_(temp__4090__auto___11461))
{var idx_11462 = temp__4090__auto___11461;lt.object.assoc_in_BANG_.call(null,lt.plugins.elm_light.packages.elm_packages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ac-versions","ac-versions",3107155800)], null),new cljs.core.Keyword(null,"versions","versions",3323818509).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,items_11460,idx_11462)));
lt.object.assoc_in_BANG_.call(null,lt.plugins.elm_light.packages.elm_packages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ac-version","ac-version",2051259807)], null),cljs.core.first.call(null,new cljs.core.Keyword(null,"versions","versions",3323818509).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,items_11460,idx_11462))));
lt.object.assoc_in_BANG_.call(null,lt.plugins.elm_light.packages.elm_packages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ac-package","ac-package",892589325)], null),new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,items_11460,idx_11462)));
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
return (function (p1__11429_SHARP_){if(cljs.core._EQ_.call(null,p1__11429_SHARP_,0))
{lt.objs.notifos.done_working.call(null);
} else
{lt.objs.notifos.set_msg_BANG_.call(null,"Error installing elm package",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),"error",new cljs.core.Keyword(null,"timeout","timeout",3994960083),5000], null));
}
return lt.object.raise.call(null,lt.plugins.elm_light.packages.elm_packages,new cljs.core.Keyword(null,"elm.show.project.packages","elm.show.project.packages",3385102109),new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.elm_light.packages.elm_packages)));
});})(proc,args))
);
proc.stdout.on("data",((function (proc,args){
return (function (p1__11430_SHARP_){return lt.objs.notifos.msg_STAR_.call(null,[cljs.core.str("Package install: "),cljs.core.str(p1__11430_SHARP_)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"timeout","timeout",3994960083),5000], null));
});})(proc,args))
);
return proc.stderr.on("data",((function (proc,args){
return (function (p1__11431_SHARP_){return lt.objs.console.error.call(null,[cljs.core.str(p1__11431_SHARP_)].join(''));
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
lt.plugins.elm_light.packages.on_pkg_browse = (function on_pkg_browse(pkg,version){var url = [cljs.core.str("http://package.elm-lang.org/packages/"),cljs.core.str(pkg),cljs.core.str("/"),cljs.core.str(version)].join('');var b = (function (){var or__4887__auto__ = cljs.core.first.call(null,lt.object.by_tag.call(null,new cljs.core.Keyword(null,"browser","browser",1164844698)));if(cljs.core.truth_(or__4887__auto__))
{return or__4887__auto__;
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
lt.plugins.elm_light.packages.PackageRow = quiescent.component.call(null,(function (p__11432){var map__11433 = p__11432;var map__11433__$1 = ((cljs.core.seq_QMARK_.call(null,map__11433))?cljs.core.apply.call(null,cljs.core.hash_map,map__11433):map__11433);var on_browse = cljs.core.get.call(null,map__11433__$1,new cljs.core.Keyword(null,"on-browse","on-browse",587885994));var on_remove = cljs.core.get.call(null,map__11433__$1,new cljs.core.Keyword(null,"on-remove","on-remove",1033879460));var exact = cljs.core.get.call(null,map__11433__$1,new cljs.core.Keyword(null,"exact","exact",1110851185));var range = cljs.core.get.call(null,map__11433__$1,new cljs.core.Keyword(null,"range","range",1122184367));var package$ = cljs.core.get.call(null,map__11433__$1,new cljs.core.Keyword(null,"package","package",4501809080));return quiescent.dom.tr.call(null,cljs.core.PersistentArrayMap.EMPTY,quiescent.dom.td.call(null,cljs.core.PersistentArrayMap.EMPTY,(cljs.core.truth_((function (){var and__4875__auto__ = package$;if(cljs.core.truth_(and__4875__auto__))
{return exact;
} else
{return and__4875__auto__;
}
})())?quiescent.dom.span.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",1004015509),"link",new cljs.core.Keyword(null,"onClick","onClick",3956969051),((function (map__11433,map__11433__$1,on_browse,on_remove,exact,range,package$){
return (function (){return on_browse.call(null,package$,exact);
});})(map__11433,map__11433__$1,on_browse,on_remove,exact,range,package$))
], null),package$):package$)),quiescent.dom.td.call(null,cljs.core.PersistentArrayMap.EMPTY,range),quiescent.dom.td.call(null,cljs.core.PersistentArrayMap.EMPTY,exact),quiescent.dom.td.call(null,cljs.core.PersistentArrayMap.EMPTY,(cljs.core.truth_(range)?quiescent.dom.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",3956969051),((function (map__11433,map__11433__$1,on_browse,on_remove,exact,range,package$){
return (function (){return on_remove.call(null,package$);
});})(map__11433,map__11433__$1,on_browse,on_remove,exact,range,package$))
], null),"remove"):null)));
}));
/**
* 
*/
lt.plugins.elm_light.packages.PackageTable = quiescent.component.call(null,(function (props){return quiescent.dom.table.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",1004015509),"package-table"], null),quiescent.dom.thead.call(null,cljs.core.PersistentArrayMap.EMPTY,quiescent.dom.tr.call(null,cljs.core.PersistentArrayMap.EMPTY,quiescent.dom.th.call(null,cljs.core.PersistentArrayMap.EMPTY,"Package"),quiescent.dom.th.call(null,cljs.core.PersistentArrayMap.EMPTY,"Range"),quiescent.dom.th.call(null,cljs.core.PersistentArrayMap.EMPTY,"Exact"),quiescent.dom.th.call(null,cljs.core.PersistentArrayMap.EMPTY,""))),cljs.core.apply.call(null,quiescent.dom.tbody,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__11434_SHARP_){return lt.plugins.elm_light.packages.PackageRow.call(null,cljs.core.assoc.call(null,p1__11434_SHARP_,new cljs.core.Keyword(null,"on-remove","on-remove",1033879460),new cljs.core.Keyword(null,"on-remove","on-remove",1033879460).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"on-browse","on-browse",587885994),new cljs.core.Keyword(null,"on-browse","on-browse",587885994).cljs$core$IFn$_invoke$arity$1(props)));
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
var G__11253 = (line - 1);
line = G__11253;
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
var G__11254 = (line + 1);
line = G__11254;
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
var G__11255 = (line - 1);
line = G__11255;
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
var temp__4092__auto___12578 = new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___12578))
{var client_12579 = temp__4092__auto___12578;lt.plugins.elm_light.release_reactor_port.call(null,new cljs.core.Keyword(null,"dir","dir",1014003711).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client_12579)));
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
lt.plugins.elm_light.start_elm_client = (function start_elm_client(p__12546){var map__12548 = p__12546;var map__12548__$1 = ((cljs.core.seq_QMARK_.call(null,map__12548))?cljs.core.apply.call(null,cljs.core.hash_map,map__12548):map__12548);var props = map__12548__$1;var client = cljs.core.get.call(null,map__12548__$1,new cljs.core.Keyword(null,"client","client",3951159101));var proj_path = cljs.core.get.call(null,map__12548__$1,new cljs.core.Keyword(null,"proj-path","proj-path",4362692615));var path = cljs.core.get.call(null,map__12548__$1,new cljs.core.Keyword(null,"path","path",1017337751));var obj = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.elm-light","connecting-notifier","lt.plugins.elm-light/connecting-notifier",885283650),client);var client_id = lt.objs.clients.__GT_id.call(null,client);lt.objs.notifos.working.call(null,"Connecting..");
return lt.plugins.elm_light.claim_reactor_port.call(null,proj_path,((function (obj,client_id,map__12548,map__12548__$1,props,client,proj_path,path){
return (function (err,port){lt.object.merge_BANG_.call(null,client,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dir","dir",1014003711),proj_path,new cljs.core.Keyword(null,"reactor-port","reactor-port",4649590590),port], null));
return lt.objs.proc.exec.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"command","command",1964298941),process.execPath,new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.elm_light.elm_cilent_path,lt.objs.clients.tcp.port,client_id,lt.plugins.elm_light.bash_escape_spaces.call(null,proj_path),port], null),new cljs.core.Keyword(null,"cwd","cwd",1014003170),lt.plugins.elm_light.elm_plugin_dir,new cljs.core.Keyword(null,"env","env",1014004831),new cljs.core.PersistentArrayMap(null, 1, ["ATOM_SHELL_INTERNAL_RUN_AS_NODE",1], null),new cljs.core.Keyword(null,"obj","obj",1014014057),obj], null));
});})(obj,client_id,map__12548,map__12548__$1,props,client,proj_path,path))
);
});
lt.plugins.elm_light.try_connect = (function try_connect(p__12549){var map__12551 = p__12549;var map__12551__$1 = ((cljs.core.seq_QMARK_.call(null,map__12551))?cljs.core.apply.call(null,cljs.core.hash_map,map__12551):map__12551);var props = map__12551__$1;var info = cljs.core.get.call(null,map__12551__$1,new cljs.core.Keyword(null,"info","info",1017141280));var path = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(info);var proj_path = lt.plugins.elm_light.utils.project_path.call(null,path);var client = lt.objs.clients.client_BANG_.call(null,new cljs.core.Keyword(null,"elm-client","elm-client",1622336068));if(cljs.core.truth_(proj_path))
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
lt.plugins.elm_light.display_make_results = (function display_make_results(ed,res,path){if(cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__12552_SHARP_){return cljs.core._EQ_.call(null,"error",new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(p1__12552_SHARP_));
}),res)))
{lt.objs.notifos.set_msg_BANG_.call(null,"Elm make returned errors; check you editor or the console for details",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
} else
{}
var seq__12563_12580 = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__12553_SHARP_){return (cljs.core._EQ_.call(null,path,new cljs.core.Keyword(null,"file","file",1017047278).cljs$core$IFn$_invoke$arity$1(p1__12553_SHARP_))) && (cljs.core._EQ_.call(null,"warning",new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(p1__12553_SHARP_)));
}),res));var chunk__12564_12581 = null;var count__12565_12582 = 0;var i__12566_12583 = 0;while(true){
if((i__12566_12583 < count__12565_12582))
{var l_12584 = cljs.core._nth.call(null,chunk__12564_12581,i__12566_12583);lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.result","editor.result",4030217008),[cljs.core.str(new cljs.core.Keyword(null,"overview","overview",1544020203).cljs$core$IFn$_invoke$arity$1(l_12584)),cljs.core.str("\n"),cljs.core.str(lt.plugins.elm_light.colorize_msg.call(null,new cljs.core.Keyword(null,"details","details",2571625908).cljs$core$IFn$_invoke$arity$1(l_12584)))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"region","region",4374076006).cljs$core$IFn$_invoke$arity$1(l_12584))) - 1)], null));
{
var G__12585 = seq__12563_12580;
var G__12586 = chunk__12564_12581;
var G__12587 = count__12565_12582;
var G__12588 = (i__12566_12583 + 1);
seq__12563_12580 = G__12585;
chunk__12564_12581 = G__12586;
count__12565_12582 = G__12587;
i__12566_12583 = G__12588;
continue;
}
} else
{var temp__4092__auto___12589 = cljs.core.seq.call(null,seq__12563_12580);if(temp__4092__auto___12589)
{var seq__12563_12590__$1 = temp__4092__auto___12589;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12563_12590__$1))
{var c__5635__auto___12591 = cljs.core.chunk_first.call(null,seq__12563_12590__$1);{
var G__12592 = cljs.core.chunk_rest.call(null,seq__12563_12590__$1);
var G__12593 = c__5635__auto___12591;
var G__12594 = cljs.core.count.call(null,c__5635__auto___12591);
var G__12595 = 0;
seq__12563_12580 = G__12592;
chunk__12564_12581 = G__12593;
count__12565_12582 = G__12594;
i__12566_12583 = G__12595;
continue;
}
} else
{var l_12596 = cljs.core.first.call(null,seq__12563_12590__$1);lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.result","editor.result",4030217008),[cljs.core.str(new cljs.core.Keyword(null,"overview","overview",1544020203).cljs$core$IFn$_invoke$arity$1(l_12596)),cljs.core.str("\n"),cljs.core.str(lt.plugins.elm_light.colorize_msg.call(null,new cljs.core.Keyword(null,"details","details",2571625908).cljs$core$IFn$_invoke$arity$1(l_12596)))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"region","region",4374076006).cljs$core$IFn$_invoke$arity$1(l_12596))) - 1)], null));
{
var G__12597 = cljs.core.next.call(null,seq__12563_12590__$1);
var G__12598 = null;
var G__12599 = 0;
var G__12600 = 0;
seq__12563_12580 = G__12597;
chunk__12564_12581 = G__12598;
count__12565_12582 = G__12599;
i__12566_12583 = G__12600;
continue;
}
}
} else
{}
}
break;
}
var seq__12567 = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__12554_SHARP_){return cljs.core._EQ_.call(null,"error",new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(p1__12554_SHARP_));
}),res));var chunk__12568 = null;var count__12569 = 0;var i__12570 = 0;while(true){
if((i__12570 < count__12569))
{var l = cljs.core._nth.call(null,chunk__12568,i__12570);if(cljs.core._EQ_.call(null,path,new cljs.core.Keyword(null,"file","file",1017047278).cljs$core$IFn$_invoke$arity$1(l)))
{lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.exception","editor.exception",3983021184),[cljs.core.str(new cljs.core.Keyword(null,"overview","overview",1544020203).cljs$core$IFn$_invoke$arity$1(l)),cljs.core.str("\n"),cljs.core.str(lt.plugins.elm_light.colorize_msg.call(null,new cljs.core.Keyword(null,"details","details",2571625908).cljs$core$IFn$_invoke$arity$1(l)))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"region","region",4374076006).cljs$core$IFn$_invoke$arity$1(l))) - 1)], null));
} else
{var out_12601 = new cljs.core.Keyword(null,"overview","overview",1544020203).cljs$core$IFn$_invoke$arity$1(l);lt.objs.console.verbatim.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),out_12601], null)),": "),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em.line","em.line",3623844076),"[Elm error]"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em.file","em.file",3623665268),new cljs.core.Keyword(null,"file","file",1017047278).cljs$core$IFn$_invoke$arity$1(l)], null)),"error");
}
{
var G__12602 = seq__12567;
var G__12603 = chunk__12568;
var G__12604 = count__12569;
var G__12605 = (i__12570 + 1);
seq__12567 = G__12602;
chunk__12568 = G__12603;
count__12569 = G__12604;
i__12570 = G__12605;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12567);if(temp__4092__auto__)
{var seq__12567__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12567__$1))
{var c__5635__auto__ = cljs.core.chunk_first.call(null,seq__12567__$1);{
var G__12606 = cljs.core.chunk_rest.call(null,seq__12567__$1);
var G__12607 = c__5635__auto__;
var G__12608 = cljs.core.count.call(null,c__5635__auto__);
var G__12609 = 0;
seq__12567 = G__12606;
chunk__12568 = G__12607;
count__12569 = G__12608;
i__12570 = G__12609;
continue;
}
} else
{var l = cljs.core.first.call(null,seq__12567__$1);if(cljs.core._EQ_.call(null,path,new cljs.core.Keyword(null,"file","file",1017047278).cljs$core$IFn$_invoke$arity$1(l)))
{lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.exception","editor.exception",3983021184),[cljs.core.str(new cljs.core.Keyword(null,"overview","overview",1544020203).cljs$core$IFn$_invoke$arity$1(l)),cljs.core.str("\n"),cljs.core.str(lt.plugins.elm_light.colorize_msg.call(null,new cljs.core.Keyword(null,"details","details",2571625908).cljs$core$IFn$_invoke$arity$1(l)))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"region","region",4374076006).cljs$core$IFn$_invoke$arity$1(l))) - 1)], null));
} else
{var out_12610 = new cljs.core.Keyword(null,"overview","overview",1544020203).cljs$core$IFn$_invoke$arity$1(l);lt.objs.console.verbatim.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),out_12610], null)),": "),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em.line","em.line",3623844076),"[Elm error]"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em.file","em.file",3623665268),new cljs.core.Keyword(null,"file","file",1017047278).cljs$core$IFn$_invoke$arity$1(l)], null)),"error");
}
{
var G__12611 = cljs.core.next.call(null,seq__12567__$1);
var G__12612 = null;
var G__12613 = 0;
var G__12614 = 0;
seq__12567 = G__12611;
chunk__12568 = G__12612;
count__12569 = G__12613;
i__12570 = G__12614;
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
lt.plugins.elm_light.create_hints = (function create_hints(completions){return cljs.core.map.call(null,(function (p1__12571_SHARP_){return {"text": new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(p1__12571_SHARP_), "completion": new cljs.core.Keyword(null,"completion","completion",4767668046).cljs$core$IFn$_invoke$arity$1(p1__12571_SHARP_)};
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
lt.plugins.elm_light.__BEH__eval_BANG_ = (function __BEH__eval_BANG_(this$,event){var map__12573 = event;var map__12573__$1 = ((cljs.core.seq_QMARK_.call(null,map__12573))?cljs.core.apply.call(null,cljs.core.hash_map,map__12573):map__12573);var origin = cljs.core.get.call(null,map__12573__$1,new cljs.core.Keyword(null,"origin","origin",4300251800));var info = cljs.core.get.call(null,map__12573__$1,new cljs.core.Keyword(null,"info","info",1017141280));lt.objs.notifos.working.call(null,"Evaluating elm...");
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
lt.plugins.elm_light.__BEH__repl_restart_BANG_ = (function __BEH__repl_restart_BANG_(p__12574){var map__12576 = p__12574;var map__12576__$1 = ((cljs.core.seq_QMARK_.call(null,map__12576))?cljs.core.apply.call(null,cljs.core.hash_map,map__12576):map__12576);var ed = map__12576__$1;var info = cljs.core.get.call(null,map__12576__$1,new cljs.core.Keyword(null,"info","info",1017141280));var temp__4092__auto__ = new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));if(cljs.core.truth_(temp__4092__auto__))
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
lt.plugins.elm_light.__BEH__elm_browse_BANG_ = (function __BEH__elm_browse_BANG_(ed,debug_QMARK_){var path = lt.plugins.elm_light.utils.reactor_path.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed))));var client = lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor.eval.elm","editor.eval.elm",1083015975),new cljs.core.Keyword(null,"origin","origin",4300251800),ed,new cljs.core.Keyword(null,"info","info",1017141280),new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)),new cljs.core.Keyword(null,"create","create",3956577390),lt.plugins.elm_light.try_connect], null));if(cljs.core.truth_((function (){var and__4875__auto__ = client;if(cljs.core.truth_(and__4875__auto__))
{return path;
} else
{return and__4875__auto__;
}
})()))
{lt.objs.notifos.working.call(null,"Opening elm file in browser");
var b_12615 = (function (){var or__4887__auto__ = cljs.core.first.call(null,lt.object.by_tag.call(null,new cljs.core.Keyword(null,"browser","browser",1164844698)));if(cljs.core.truth_(or__4887__auto__))
{return or__4887__auto__;
} else
{return lt.objs.browser.add.call(null);
}
})();var get_url_12616 = ((function (b_12615,path,client){
return (function (){return [cljs.core.str("http://localhost:"),cljs.core.str(new cljs.core.Keyword(null,"reactor-port","reactor-port",4649590590).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client))),cljs.core.str(path),cljs.core.str((cljs.core.truth_(debug_QMARK_)?"?debug":""))].join('');
});})(b_12615,path,client))
;if(cljs.core.truth_(new cljs.core.Keyword(null,"connected","connected",4729661051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client))))
{lt.object.raise.call(null,b_12615,new cljs.core.Keyword(null,"navigate!","navigate!",1766726722),get_url_12616.call(null));
} else
{lt.util.js.wait.call(null,100,((function (b_12615,get_url_12616,path,client){
return (function (){return lt.object.raise.call(null,b_12615,new cljs.core.Keyword(null,"navigate!","navigate!",1766726722),get_url_12616.call(null));
});})(b_12615,get_url_12616,path,client))
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
{var cur = temp__4092__auto__;var cursor = lt.objs.editor.__GT_cursor.call(null,cur,"start");var vec__12577 = (cljs.core.truth_(lt.objs.editor.selection_QMARK_.call(null,cur))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cursor,lt.objs.editor.__GT_cursor.call(null,cur,"end")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cursor,cursor], null));var start = cljs.core.nth.call(null,vec__12577,0,null);var end = cljs.core.nth.call(null,vec__12577,1,null);if(cljs.core.truth_(lt.objs.editor.uncomment.call(null,cur,start,end)))
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