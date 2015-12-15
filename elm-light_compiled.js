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
{var o = (function (){var obj11118 = {};return obj11118;
})();var seq__11119_11132 = cljs.core.seq.call(null,obj);var chunk__11120_11133 = null;var count__11121_11134 = 0;var i__11122_11135 = 0;while(true){
if((i__11122_11135 < count__11121_11134))
{var vec__11123_11136 = cljs.core._nth.call(null,chunk__11120_11133,i__11122_11135);var k_11137 = cljs.core.nth.call(null,vec__11123_11136,0,null);var v_11138 = cljs.core.nth.call(null,vec__11123_11136,1,null);(o[cljs.core.name.call(null,k_11137)] = js_props.call(null,v_11138));
{
var G__11139 = seq__11119_11132;
var G__11140 = chunk__11120_11133;
var G__11141 = count__11121_11134;
var G__11142 = (i__11122_11135 + 1);
seq__11119_11132 = G__11139;
chunk__11120_11133 = G__11140;
count__11121_11134 = G__11141;
i__11122_11135 = G__11142;
continue;
}
} else
{var temp__4092__auto___11143 = cljs.core.seq.call(null,seq__11119_11132);if(temp__4092__auto___11143)
{var seq__11119_11144__$1 = temp__4092__auto___11143;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11119_11144__$1))
{var c__5632__auto___11145 = cljs.core.chunk_first.call(null,seq__11119_11144__$1);{
var G__11146 = cljs.core.chunk_rest.call(null,seq__11119_11144__$1);
var G__11147 = c__5632__auto___11145;
var G__11148 = cljs.core.count.call(null,c__5632__auto___11145);
var G__11149 = 0;
seq__11119_11132 = G__11146;
chunk__11120_11133 = G__11147;
count__11121_11134 = G__11148;
i__11122_11135 = G__11149;
continue;
}
} else
{var vec__11124_11150 = cljs.core.first.call(null,seq__11119_11144__$1);var k_11151 = cljs.core.nth.call(null,vec__11124_11150,0,null);var v_11152 = cljs.core.nth.call(null,vec__11124_11150,1,null);(o[cljs.core.name.call(null,k_11151)] = js_props.call(null,v_11152));
{
var G__11153 = cljs.core.next.call(null,seq__11119_11144__$1);
var G__11154 = null;
var G__11155 = 0;
var G__11156 = 0;
seq__11119_11132 = G__11153;
chunk__11120_11133 = G__11154;
count__11121_11134 = G__11155;
i__11122_11135 = G__11156;
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
quiescent.component = (function component(renderer){var react_component = React.createClass({"render": (function (){var this$ = this;var _STAR_component_STAR_11126 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return cljs.core.apply.call(null,renderer,(this$.props["value"]),(this$.props["statics"]));
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11126;
}}), "shouldComponentUpdate": (function (next_props,_){var this$ = this;return cljs.core.not_EQ_.call(null,(this$.props["value"]),(next_props["value"]));
})});return ((function (react_component){
return (function() { 
var G__11157__delegate = function (value,static_args){return react_component.call(null,{"statics": static_args, "value": value});
};
var G__11157 = function (value,var_args){
var static_args = null;if (arguments.length > 1) {
  static_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__11157__delegate.call(this,value,static_args);};
G__11157.cljs$lang$maxFixedArity = 1;
G__11157.cljs$lang$applyTo = (function (arglist__11158){
var value = cljs.core.first(arglist__11158);
var static_args = cljs.core.rest(arglist__11158);
return G__11157__delegate(value,static_args);
});
G__11157.cljs$core$IFn$_invoke$arity$variadic = G__11157__delegate;
return G__11157;
})()
;
;})(react_component))
});
/**
* Wrapper component used to mix-in lifecycle access
*/
quiescent.WrapperComponent = React.createClass({"componentWillUnmount": (function (){var this$ = this;var temp__4092__auto__ = (this$.props["onWillUnmount"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_11131 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null);
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11131;
}} else
{return null;
}
}), "componentWillUpdate": (function (_,___$1){var this$ = this;var temp__4092__auto__ = (this$.props["onWillUpdate"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_11130 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null);
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11130;
}} else
{return null;
}
}), "componentWillMount": (function (){var this$ = this;var temp__4092__auto__ = (this$.props["onWillMount"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_11129 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null);
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11129;
}} else
{return null;
}
}), "componentDidMount": (function (){var this$ = this;var temp__4092__auto__ = (this$.props["onMount"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_11128 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null,this$.getDOMNode());
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11128;
}} else
{return null;
}
}), "componentDidUpdate": (function (prev_props,prev_state){var this$ = this;var temp__4092__auto__ = (this$.props["onUpdate"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_11127 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null,this$.getDOMNode());
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11127;
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
var wrapper__delegate = function (child,kvs){var props = quiescent.js_props.call(null,cljs.core.apply.call(null,cljs.core.array_map,new cljs.core.Keyword(null,"wrappee","wrappee",2609412088),child,kvs));var temp__4092__auto___11159 = (child.props["key"]);if(cljs.core.truth_(temp__4092__auto___11159))
{var key_11160 = temp__4092__auto___11159;(props["key"] = key_11160);
} else
{}
return quiescent.WrapperComponent.call(null,props);
};
var wrapper = function (child,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrapper__delegate.call(this,child,kvs);};
wrapper.cljs$lang$maxFixedArity = 1;
wrapper.cljs$lang$applyTo = (function (arglist__11161){
var child = cljs.core.first(arglist__11161);
var kvs = cljs.core.rest(arglist__11161);
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
var a__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__7543_8491 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__7544_8492 = null;var count__7545_8493 = 0;var i__7546_8494 = 0;while(true){
if((i__7546_8494 < count__7545_8493))
{var arg__6543__auto___8495 = cljs.core._nth.call(null,chunk__7544_8492,i__7546_8494);a__6542__auto__.push(arg__6543__auto___8495);
{
var G__8496 = seq__7543_8491;
var G__8497 = chunk__7544_8492;
var G__8498 = count__7545_8493;
var G__8499 = (i__7546_8494 + 1);
seq__7543_8491 = G__8496;
chunk__7544_8492 = G__8497;
count__7545_8493 = G__8498;
i__7546_8494 = G__8499;
continue;
}
} else
{var temp__4092__auto___8500 = cljs.core.seq.call(null,seq__7543_8491);if(temp__4092__auto___8500)
{var seq__7543_8501__$1 = temp__4092__auto___8500;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7543_8501__$1))
{var c__5632__auto___8502 = cljs.core.chunk_first.call(null,seq__7543_8501__$1);{
var G__8503 = cljs.core.chunk_rest.call(null,seq__7543_8501__$1);
var G__8504 = c__5632__auto___8502;
var G__8505 = cljs.core.count.call(null,c__5632__auto___8502);
var G__8506 = 0;
seq__7543_8491 = G__8503;
chunk__7544_8492 = G__8504;
count__7545_8493 = G__8505;
i__7546_8494 = G__8506;
continue;
}
} else
{var arg__6543__auto___8507 = cljs.core.first.call(null,seq__7543_8501__$1);a__6542__auto__.push(arg__6543__auto___8507);
{
var G__8508 = cljs.core.next.call(null,seq__7543_8501__$1);
var G__8509 = null;
var G__8510 = 0;
var G__8511 = 0;
seq__7543_8491 = G__8508;
chunk__7544_8492 = G__8509;
count__7545_8493 = G__8510;
i__7546_8494 = G__8511;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.a.apply(null,a__6542__auto__);
};
var a = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return a__delegate.call(this,args__6541__auto__);};
a.cljs$lang$maxFixedArity = 0;
a.cljs$lang$applyTo = (function (arglist__8512){
var args__6541__auto__ = cljs.core.seq(arglist__8512);
return a__delegate(args__6541__auto__);
});
a.cljs$core$IFn$_invoke$arity$variadic = a__delegate;
return a;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.abbr = (function() { 
var abbr__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__7551_8513 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__7552_8514 = null;var count__7553_8515 = 0;var i__7554_8516 = 0;while(true){
if((i__7554_8516 < count__7553_8515))
{var arg__6543__auto___8517 = cljs.core._nth.call(null,chunk__7552_8514,i__7554_8516);a__6542__auto__.push(arg__6543__auto___8517);
{
var G__8518 = seq__7551_8513;
var G__8519 = chunk__7552_8514;
var G__8520 = count__7553_8515;
var G__8521 = (i__7554_8516 + 1);
seq__7551_8513 = G__8518;
chunk__7552_8514 = G__8519;
count__7553_8515 = G__8520;
i__7554_8516 = G__8521;
continue;
}
} else
{var temp__4092__auto___8522 = cljs.core.seq.call(null,seq__7551_8513);if(temp__4092__auto___8522)
{var seq__7551_8523__$1 = temp__4092__auto___8522;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7551_8523__$1))
{var c__5632__auto___8524 = cljs.core.chunk_first.call(null,seq__7551_8523__$1);{
var G__8525 = cljs.core.chunk_rest.call(null,seq__7551_8523__$1);
var G__8526 = c__5632__auto___8524;
var G__8527 = cljs.core.count.call(null,c__5632__auto___8524);
var G__8528 = 0;
seq__7551_8513 = G__8525;
chunk__7552_8514 = G__8526;
count__7553_8515 = G__8527;
i__7554_8516 = G__8528;
continue;
}
} else
{var arg__6543__auto___8529 = cljs.core.first.call(null,seq__7551_8523__$1);a__6542__auto__.push(arg__6543__auto___8529);
{
var G__8530 = cljs.core.next.call(null,seq__7551_8523__$1);
var G__8531 = null;
var G__8532 = 0;
var G__8533 = 0;
seq__7551_8513 = G__8530;
chunk__7552_8514 = G__8531;
count__7553_8515 = G__8532;
i__7554_8516 = G__8533;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.abbr.apply(null,a__6542__auto__);
};
var abbr = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return abbr__delegate.call(this,args__6541__auto__);};
abbr.cljs$lang$maxFixedArity = 0;
abbr.cljs$lang$applyTo = (function (arglist__8534){
var args__6541__auto__ = cljs.core.seq(arglist__8534);
return abbr__delegate(args__6541__auto__);
});
abbr.cljs$core$IFn$_invoke$arity$variadic = abbr__delegate;
return abbr;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.address = (function() { 
var address__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__7559_8535 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__7560_8536 = null;var count__7561_8537 = 0;var i__7562_8538 = 0;while(true){
if((i__7562_8538 < count__7561_8537))
{var arg__6543__auto___8539 = cljs.core._nth.call(null,chunk__7560_8536,i__7562_8538);a__6542__auto__.push(arg__6543__auto___8539);
{
var G__8540 = seq__7559_8535;
var G__8541 = chunk__7560_8536;
var G__8542 = count__7561_8537;
var G__8543 = (i__7562_8538 + 1);
seq__7559_8535 = G__8540;
chunk__7560_8536 = G__8541;
count__7561_8537 = G__8542;
i__7562_8538 = G__8543;
continue;
}
} else
{var temp__4092__auto___8544 = cljs.core.seq.call(null,seq__7559_8535);if(temp__4092__auto___8544)
{var seq__7559_8545__$1 = temp__4092__auto___8544;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7559_8545__$1))
{var c__5632__auto___8546 = cljs.core.chunk_first.call(null,seq__7559_8545__$1);{
var G__8547 = cljs.core.chunk_rest.call(null,seq__7559_8545__$1);
var G__8548 = c__5632__auto___8546;
var G__8549 = cljs.core.count.call(null,c__5632__auto___8546);
var G__8550 = 0;
seq__7559_8535 = G__8547;
chunk__7560_8536 = G__8548;
count__7561_8537 = G__8549;
i__7562_8538 = G__8550;
continue;
}
} else
{var arg__6543__auto___8551 = cljs.core.first.call(null,seq__7559_8545__$1);a__6542__auto__.push(arg__6543__auto___8551);
{
var G__8552 = cljs.core.next.call(null,seq__7559_8545__$1);
var G__8553 = null;
var G__8554 = 0;
var G__8555 = 0;
seq__7559_8535 = G__8552;
chunk__7560_8536 = G__8553;
count__7561_8537 = G__8554;
i__7562_8538 = G__8555;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.address.apply(null,a__6542__auto__);
};
var address = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return address__delegate.call(this,args__6541__auto__);};
address.cljs$lang$maxFixedArity = 0;
address.cljs$lang$applyTo = (function (arglist__8556){
var args__6541__auto__ = cljs.core.seq(arglist__8556);
return address__delegate(args__6541__auto__);
});
address.cljs$core$IFn$_invoke$arity$variadic = address__delegate;
return address;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.area = (function() { 
var area__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__7567_8557 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__7568_8558 = null;var count__7569_8559 = 0;var i__7570_8560 = 0;while(true){
if((i__7570_8560 < count__7569_8559))
{var arg__6543__auto___8561 = cljs.core._nth.call(null,chunk__7568_8558,i__7570_8560);a__6542__auto__.push(arg__6543__auto___8561);
{
var G__8562 = seq__7567_8557;
var G__8563 = chunk__7568_8558;
var G__8564 = count__7569_8559;
var G__8565 = (i__7570_8560 + 1);
seq__7567_8557 = G__8562;
chunk__7568_8558 = G__8563;
count__7569_8559 = G__8564;
i__7570_8560 = G__8565;
continue;
}
} else
{var temp__4092__auto___8566 = cljs.core.seq.call(null,seq__7567_8557);if(temp__4092__auto___8566)
{var seq__7567_8567__$1 = temp__4092__auto___8566;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7567_8567__$1))
{var c__5632__auto___8568 = cljs.core.chunk_first.call(null,seq__7567_8567__$1);{
var G__8569 = cljs.core.chunk_rest.call(null,seq__7567_8567__$1);
var G__8570 = c__5632__auto___8568;
var G__8571 = cljs.core.count.call(null,c__5632__auto___8568);
var G__8572 = 0;
seq__7567_8557 = G__8569;
chunk__7568_8558 = G__8570;
count__7569_8559 = G__8571;
i__7570_8560 = G__8572;
continue;
}
} else
{var arg__6543__auto___8573 = cljs.core.first.call(null,seq__7567_8567__$1);a__6542__auto__.push(arg__6543__auto___8573);
{
var G__8574 = cljs.core.next.call(null,seq__7567_8567__$1);
var G__8575 = null;
var G__8576 = 0;
var G__8577 = 0;
seq__7567_8557 = G__8574;
chunk__7568_8558 = G__8575;
count__7569_8559 = G__8576;
i__7570_8560 = G__8577;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.area.apply(null,a__6542__auto__);
};
var area = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return area__delegate.call(this,args__6541__auto__);};
area.cljs$lang$maxFixedArity = 0;
area.cljs$lang$applyTo = (function (arglist__8578){
var args__6541__auto__ = cljs.core.seq(arglist__8578);
return area__delegate(args__6541__auto__);
});
area.cljs$core$IFn$_invoke$arity$variadic = area__delegate;
return area;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.article = (function() { 
var article__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__7575_8579 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__7576_8580 = null;var count__7577_8581 = 0;var i__7578_8582 = 0;while(true){
if((i__7578_8582 < count__7577_8581))
{var arg__6543__auto___8583 = cljs.core._nth.call(null,chunk__7576_8580,i__7578_8582);a__6542__auto__.push(arg__6543__auto___8583);
{
var G__8584 = seq__7575_8579;
var G__8585 = chunk__7576_8580;
var G__8586 = count__7577_8581;
var G__8587 = (i__7578_8582 + 1);
seq__7575_8579 = G__8584;
chunk__7576_8580 = G__8585;
count__7577_8581 = G__8586;
i__7578_8582 = G__8587;
continue;
}
} else
{var temp__4092__auto___8588 = cljs.core.seq.call(null,seq__7575_8579);if(temp__4092__auto___8588)
{var seq__7575_8589__$1 = temp__4092__auto___8588;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7575_8589__$1))
{var c__5632__auto___8590 = cljs.core.chunk_first.call(null,seq__7575_8589__$1);{
var G__8591 = cljs.core.chunk_rest.call(null,seq__7575_8589__$1);
var G__8592 = c__5632__auto___8590;
var G__8593 = cljs.core.count.call(null,c__5632__auto___8590);
var G__8594 = 0;
seq__7575_8579 = G__8591;
chunk__7576_8580 = G__8592;
count__7577_8581 = G__8593;
i__7578_8582 = G__8594;
continue;
}
} else
{var arg__6543__auto___8595 = cljs.core.first.call(null,seq__7575_8589__$1);a__6542__auto__.push(arg__6543__auto___8595);
{
var G__8596 = cljs.core.next.call(null,seq__7575_8589__$1);
var G__8597 = null;
var G__8598 = 0;
var G__8599 = 0;
seq__7575_8579 = G__8596;
chunk__7576_8580 = G__8597;
count__7577_8581 = G__8598;
i__7578_8582 = G__8599;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.article.apply(null,a__6542__auto__);
};
var article = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return article__delegate.call(this,args__6541__auto__);};
article.cljs$lang$maxFixedArity = 0;
article.cljs$lang$applyTo = (function (arglist__8600){
var args__6541__auto__ = cljs.core.seq(arglist__8600);
return article__delegate(args__6541__auto__);
});
article.cljs$core$IFn$_invoke$arity$variadic = article__delegate;
return article;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.aside = (function() { 
var aside__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__7583_8601 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__7584_8602 = null;var count__7585_8603 = 0;var i__7586_8604 = 0;while(true){
if((i__7586_8604 < count__7585_8603))
{var arg__6543__auto___8605 = cljs.core._nth.call(null,chunk__7584_8602,i__7586_8604);a__6542__auto__.push(arg__6543__auto___8605);
{
var G__8606 = seq__7583_8601;
var G__8607 = chunk__7584_8602;
var G__8608 = count__7585_8603;
var G__8609 = (i__7586_8604 + 1);
seq__7583_8601 = G__8606;
chunk__7584_8602 = G__8607;
count__7585_8603 = G__8608;
i__7586_8604 = G__8609;
continue;
}
} else
{var temp__4092__auto___8610 = cljs.core.seq.call(null,seq__7583_8601);if(temp__4092__auto___8610)
{var seq__7583_8611__$1 = temp__4092__auto___8610;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7583_8611__$1))
{var c__5632__auto___8612 = cljs.core.chunk_first.call(null,seq__7583_8611__$1);{
var G__8613 = cljs.core.chunk_rest.call(null,seq__7583_8611__$1);
var G__8614 = c__5632__auto___8612;
var G__8615 = cljs.core.count.call(null,c__5632__auto___8612);
var G__8616 = 0;
seq__7583_8601 = G__8613;
chunk__7584_8602 = G__8614;
count__7585_8603 = G__8615;
i__7586_8604 = G__8616;
continue;
}
} else
{var arg__6543__auto___8617 = cljs.core.first.call(null,seq__7583_8611__$1);a__6542__auto__.push(arg__6543__auto___8617);
{
var G__8618 = cljs.core.next.call(null,seq__7583_8611__$1);
var G__8619 = null;
var G__8620 = 0;
var G__8621 = 0;
seq__7583_8601 = G__8618;
chunk__7584_8602 = G__8619;
count__7585_8603 = G__8620;
i__7586_8604 = G__8621;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.aside.apply(null,a__6542__auto__);
};
var aside = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return aside__delegate.call(this,args__6541__auto__);};
aside.cljs$lang$maxFixedArity = 0;
aside.cljs$lang$applyTo = (function (arglist__8622){
var args__6541__auto__ = cljs.core.seq(arglist__8622);
return aside__delegate(args__6541__auto__);
});
aside.cljs$core$IFn$_invoke$arity$variadic = aside__delegate;
return aside;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.audio = (function() { 
var audio__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__7591_8623 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__7592_8624 = null;var count__7593_8625 = 0;var i__7594_8626 = 0;while(true){
if((i__7594_8626 < count__7593_8625))
{var arg__6543__auto___8627 = cljs.core._nth.call(null,chunk__7592_8624,i__7594_8626);a__6542__auto__.push(arg__6543__auto___8627);
{
var G__8628 = seq__7591_8623;
var G__8629 = chunk__7592_8624;
var G__8630 = count__7593_8625;
var G__8631 = (i__7594_8626 + 1);
seq__7591_8623 = G__8628;
chunk__7592_8624 = G__8629;
count__7593_8625 = G__8630;
i__7594_8626 = G__8631;
continue;
}
} else
{var temp__4092__auto___8632 = cljs.core.seq.call(null,seq__7591_8623);if(temp__4092__auto___8632)
{var seq__7591_8633__$1 = temp__4092__auto___8632;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7591_8633__$1))
{var c__5632__auto___8634 = cljs.core.chunk_first.call(null,seq__7591_8633__$1);{
var G__8635 = cljs.core.chunk_rest.call(null,seq__7591_8633__$1);
var G__8636 = c__5632__auto___8634;
var G__8637 = cljs.core.count.call(null,c__5632__auto___8634);
var G__8638 = 0;
seq__7591_8623 = G__8635;
chunk__7592_8624 = G__8636;
count__7593_8625 = G__8637;
i__7594_8626 = G__8638;
continue;
}
} else
{var arg__6543__auto___8639 = cljs.core.first.call(null,seq__7591_8633__$1);a__6542__auto__.push(arg__6543__auto___8639);
{
var G__8640 = cljs.core.next.call(null,seq__7591_8633__$1);
var G__8641 = null;
var G__8642 = 0;
var G__8643 = 0;
seq__7591_8623 = G__8640;
chunk__7592_8624 = G__8641;
count__7593_8625 = G__8642;
i__7594_8626 = G__8643;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.audio.apply(null,a__6542__auto__);
};
var audio = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return audio__delegate.call(this,args__6541__auto__);};
audio.cljs$lang$maxFixedArity = 0;
audio.cljs$lang$applyTo = (function (arglist__8644){
var args__6541__auto__ = cljs.core.seq(arglist__8644);
return audio__delegate(args__6541__auto__);
});
audio.cljs$core$IFn$_invoke$arity$variadic = audio__delegate;
return audio;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.b = (function() { 
var b__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__7599_8645 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__7600_8646 = null;var count__7601_8647 = 0;var i__7602_8648 = 0;while(true){
if((i__7602_8648 < count__7601_8647))
{var arg__6543__auto___8649 = cljs.core._nth.call(null,chunk__7600_8646,i__7602_8648);a__6542__auto__.push(arg__6543__auto___8649);
{
var G__8650 = seq__7599_8645;
var G__8651 = chunk__7600_8646;
var G__8652 = count__7601_8647;
var G__8653 = (i__7602_8648 + 1);
seq__7599_8645 = G__8650;
chunk__7600_8646 = G__8651;
count__7601_8647 = G__8652;
i__7602_8648 = G__8653;
continue;
}
} else
{var temp__4092__auto___8654 = cljs.core.seq.call(null,seq__7599_8645);if(temp__4092__auto___8654)
{var seq__7599_8655__$1 = temp__4092__auto___8654;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7599_8655__$1))
{var c__5632__auto___8656 = cljs.core.chunk_first.call(null,seq__7599_8655__$1);{
var G__8657 = cljs.core.chunk_rest.call(null,seq__7599_8655__$1);
var G__8658 = c__5632__auto___8656;
var G__8659 = cljs.core.count.call(null,c__5632__auto___8656);
var G__8660 = 0;
seq__7599_8645 = G__8657;
chunk__7600_8646 = G__8658;
count__7601_8647 = G__8659;
i__7602_8648 = G__8660;
continue;
}
} else
{var arg__6543__auto___8661 = cljs.core.first.call(null,seq__7599_8655__$1);a__6542__auto__.push(arg__6543__auto___8661);
{
var G__8662 = cljs.core.next.call(null,seq__7599_8655__$1);
var G__8663 = null;
var G__8664 = 0;
var G__8665 = 0;
seq__7599_8645 = G__8662;
chunk__7600_8646 = G__8663;
count__7601_8647 = G__8664;
i__7602_8648 = G__8665;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.b.apply(null,a__6542__auto__);
};
var b = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return b__delegate.call(this,args__6541__auto__);};
b.cljs$lang$maxFixedArity = 0;
b.cljs$lang$applyTo = (function (arglist__8666){
var args__6541__auto__ = cljs.core.seq(arglist__8666);
return b__delegate(args__6541__auto__);
});
b.cljs$core$IFn$_invoke$arity$variadic = b__delegate;
return b;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.base = (function() { 
var base__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__7607_8667 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__7608_8668 = null;var count__7609_8669 = 0;var i__7610_8670 = 0;while(true){
if((i__7610_8670 < count__7609_8669))
{var arg__6543__auto___8671 = cljs.core._nth.call(null,chunk__7608_8668,i__7610_8670);a__6542__auto__.push(arg__6543__auto___8671);
{
var G__8672 = seq__7607_8667;
var G__8673 = chunk__7608_8668;
var G__8674 = count__7609_8669;
var G__8675 = (i__7610_8670 + 1);
seq__7607_8667 = G__8672;
chunk__7608_8668 = G__8673;
count__7609_8669 = G__8674;
i__7610_8670 = G__8675;
continue;
}
} else
{var temp__4092__auto___8676 = cljs.core.seq.call(null,seq__7607_8667);if(temp__4092__auto___8676)
{var seq__7607_8677__$1 = temp__4092__auto___8676;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7607_8677__$1))
{var c__5632__auto___8678 = cljs.core.chunk_first.call(null,seq__7607_8677__$1);{
var G__8679 = cljs.core.chunk_rest.call(null,seq__7607_8677__$1);
var G__8680 = c__5632__auto___8678;
var G__8681 = cljs.core.count.call(null,c__5632__auto___8678);
var G__8682 = 0;
seq__7607_8667 = G__8679;
chunk__7608_8668 = G__8680;
count__7609_8669 = G__8681;
i__7610_8670 = G__8682;
continue;
}
} else
{var arg__6543__auto___8683 = cljs.core.first.call(null,seq__7607_8677__$1);a__6542__auto__.push(arg__6543__auto___8683);
{
var G__8684 = cljs.core.next.call(null,seq__7607_8677__$1);
var G__8685 = null;
var G__8686 = 0;
var G__8687 = 0;
seq__7607_8667 = G__8684;
chunk__7608_8668 = G__8685;
count__7609_8669 = G__8686;
i__7610_8670 = G__8687;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.base.apply(null,a__6542__auto__);
};
var base = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return base__delegate.call(this,args__6541__auto__);};
base.cljs$lang$maxFixedArity = 0;
base.cljs$lang$applyTo = (function (arglist__8688){
var args__6541__auto__ = cljs.core.seq(arglist__8688);
return base__delegate(args__6541__auto__);
});
base.cljs$core$IFn$_invoke$arity$variadic = base__delegate;
return base;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.bdi = (function() { 
var bdi__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__7615_8689 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__7616_8690 = null;var count__7617_8691 = 0;var i__7618_8692 = 0;while(true){
if((i__7618_8692 < count__7617_8691))
{var arg__6543__auto___8693 = cljs.core._nth.call(null,chunk__7616_8690,i__7618_8692);a__6542__auto__.push(arg__6543__auto___8693);
{
var G__8694 = seq__7615_8689;
var G__8695 = chunk__7616_8690;
var G__8696 = count__7617_8691;
var G__8697 = (i__7618_8692 + 1);
seq__7615_8689 = G__8694;
chunk__7616_8690 = G__8695;
count__7617_8691 = G__8696;
i__7618_8692 = G__8697;
continue;
}
} else
{var temp__4092__auto___8698 = cljs.core.seq.call(null,seq__7615_8689);if(temp__4092__auto___8698)
{var seq__7615_8699__$1 = temp__4092__auto___8698;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7615_8699__$1))
{var c__5632__auto___8700 = cljs.core.chunk_first.call(null,seq__7615_8699__$1);{
var G__8701 = cljs.core.chunk_rest.call(null,seq__7615_8699__$1);
var G__8702 = c__5632__auto___8700;
var G__8703 = cljs.core.count.call(null,c__5632__auto___8700);
var G__8704 = 0;
seq__7615_8689 = G__8701;
chunk__7616_8690 = G__8702;
count__7617_8691 = G__8703;
i__7618_8692 = G__8704;
continue;
}
} else
{var arg__6543__auto___8705 = cljs.core.first.call(null,seq__7615_8699__$1);a__6542__auto__.push(arg__6543__auto___8705);
{
var G__8706 = cljs.core.next.call(null,seq__7615_8699__$1);
var G__8707 = null;
var G__8708 = 0;
var G__8709 = 0;
seq__7615_8689 = G__8706;
chunk__7616_8690 = G__8707;
count__7617_8691 = G__8708;
i__7618_8692 = G__8709;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.bdi.apply(null,a__6542__auto__);
};
var bdi = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return bdi__delegate.call(this,args__6541__auto__);};
bdi.cljs$lang$maxFixedArity = 0;
bdi.cljs$lang$applyTo = (function (arglist__8710){
var args__6541__auto__ = cljs.core.seq(arglist__8710);
return bdi__delegate(args__6541__auto__);
});
bdi.cljs$core$IFn$_invoke$arity$variadic = bdi__delegate;
return bdi;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.bdo = (function() { 
var bdo__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__7623_8711 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__7624_8712 = null;var count__7625_8713 = 0;var i__7626_8714 = 0;while(true){
if((i__7626_8714 < count__7625_8713))
{var arg__6543__auto___8715 = cljs.core._nth.call(null,chunk__7624_8712,i__7626_8714);a__6542__auto__.push(arg__6543__auto___8715);
{
var G__8716 = seq__7623_8711;
var G__8717 = chunk__7624_8712;
var G__8718 = count__7625_8713;
var G__8719 = (i__7626_8714 + 1);
seq__7623_8711 = G__8716;
chunk__7624_8712 = G__8717;
count__7625_8713 = G__8718;
i__7626_8714 = G__8719;
continue;
}
} else
{var temp__4092__auto___8720 = cljs.core.seq.call(null,seq__7623_8711);if(temp__4092__auto___8720)
{var seq__7623_8721__$1 = temp__4092__auto___8720;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7623_8721__$1))
{var c__5632__auto___8722 = cljs.core.chunk_first.call(null,seq__7623_8721__$1);{
var G__8723 = cljs.core.chunk_rest.call(null,seq__7623_8721__$1);
var G__8724 = c__5632__auto___8722;
var G__8725 = cljs.core.count.call(null,c__5632__auto___8722);
var G__8726 = 0;
seq__7623_8711 = G__8723;
chunk__7624_8712 = G__8724;
count__7625_8713 = G__8725;
i__7626_8714 = G__8726;
continue;
}
} else
{var arg__6543__auto___8727 = cljs.core.first.call(null,seq__7623_8721__$1);a__6542__auto__.push(arg__6543__auto___8727);
{
var G__8728 = cljs.core.next.call(null,seq__7623_8721__$1);
var G__8729 = null;
var G__8730 = 0;
var G__8731 = 0;
seq__7623_8711 = G__8728;
chunk__7624_8712 = G__8729;
count__7625_8713 = G__8730;
i__7626_8714 = G__8731;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.bdo.apply(null,a__6542__auto__);
};
var bdo = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return bdo__delegate.call(this,args__6541__auto__);};
bdo.cljs$lang$maxFixedArity = 0;
bdo.cljs$lang$applyTo = (function (arglist__8732){
var args__6541__auto__ = cljs.core.seq(arglist__8732);
return bdo__delegate(args__6541__auto__);
});
bdo.cljs$core$IFn$_invoke$arity$variadic = bdo__delegate;
return bdo;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.big = (function() { 
var big__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__7631_8733 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__7632_8734 = null;var count__7633_8735 = 0;var i__7634_8736 = 0;while(true){
if((i__7634_8736 < count__7633_8735))
{var arg__6543__auto___8737 = cljs.core._nth.call(null,chunk__7632_8734,i__7634_8736);a__6542__auto__.push(arg__6543__auto___8737);
{
var G__8738 = seq__7631_8733;
var G__8739 = chunk__7632_8734;
var G__8740 = count__7633_8735;
var G__8741 = (i__7634_8736 + 1);
seq__7631_8733 = G__8738;
chunk__7632_8734 = G__8739;
count__7633_8735 = G__8740;
i__7634_8736 = G__8741;
continue;
}
} else
{var temp__4092__auto___8742 = cljs.core.seq.call(null,seq__7631_8733);if(temp__4092__auto___8742)
{var seq__7631_8743__$1 = temp__4092__auto___8742;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7631_8743__$1))
{var c__5632__auto___8744 = cljs.core.chunk_first.call(null,seq__7631_8743__$1);{
var G__8745 = cljs.core.chunk_rest.call(null,seq__7631_8743__$1);
var G__8746 = c__5632__auto___8744;
var G__8747 = cljs.core.count.call(null,c__5632__auto___8744);
var G__8748 = 0;
seq__7631_8733 = G__8745;
chunk__7632_8734 = G__8746;
count__7633_8735 = G__8747;
i__7634_8736 = G__8748;
continue;
}
} else
{var arg__6543__auto___8749 = cljs.core.first.call(null,seq__7631_8743__$1);a__6542__auto__.push(arg__6543__auto___8749);
{
var G__8750 = cljs.core.next.call(null,seq__7631_8743__$1);
var G__8751 = null;
var G__8752 = 0;
var G__8753 = 0;
seq__7631_8733 = G__8750;
chunk__7632_8734 = G__8751;
count__7633_8735 = G__8752;
i__7634_8736 = G__8753;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.big.apply(null,a__6542__auto__);
};
var big = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return big__delegate.call(this,args__6541__auto__);};
big.cljs$lang$maxFixedArity = 0;
big.cljs$lang$applyTo = (function (arglist__8754){
var args__6541__auto__ = cljs.core.seq(arglist__8754);
return big__delegate(args__6541__auto__);
});
big.cljs$core$IFn$_invoke$arity$variadic = big__delegate;
return big;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.blockquote = (function() { 
var blockquote__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__7639_8755 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__7640_8756 = null;var count__7641_8757 = 0;var i__7642_8758 = 0;while(true){
if((i__7642_8758 < count__7641_8757))
{var arg__6543__auto___8759 = cljs.core._nth.call(null,chunk__7640_8756,i__7642_8758);a__6542__auto__.push(arg__6543__auto___8759);
{
var G__8760 = seq__7639_8755;
var G__8761 = chunk__7640_8756;
var G__8762 = count__7641_8757;
var G__8763 = (i__7642_8758 + 1);
seq__7639_8755 = G__8760;
chunk__7640_8756 = G__8761;
count__7641_8757 = G__8762;
i__7642_8758 = G__8763;
continue;
}
} else
{var temp__4092__auto___8764 = cljs.core.seq.call(null,seq__7639_8755);if(temp__4092__auto___8764)
{var seq__7639_8765__$1 = temp__4092__auto___8764;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7639_8765__$1))
{var c__5632__auto___8766 = cljs.core.chunk_first.call(null,seq__7639_8765__$1);{
var G__8767 = cljs.core.chunk_rest.call(null,seq__7639_8765__$1);
var G__8768 = c__5632__auto___8766;
var G__8769 = cljs.core.count.call(null,c__5632__auto___8766);
var G__8770 = 0;
seq__7639_8755 = G__8767;
chunk__7640_8756 = G__8768;
count__7641_8757 = G__8769;
i__7642_8758 = G__8770;
continue;
}
} else
{var arg__6543__auto___8771 = cljs.core.first.call(null,seq__7639_8765__$1);a__6542__auto__.push(arg__6543__auto___8771);
{
var G__8772 = cljs.core.next.call(null,seq__7639_8765__$1);
var G__8773 = null;
var G__8774 = 0;
var G__8775 = 0;
seq__7639_8755 = G__8772;
chunk__7640_8756 = G__8773;
count__7641_8757 = G__8774;
i__7642_8758 = G__8775;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.blockquote.apply(null,a__6542__auto__);
};
var blockquote = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return blockquote__delegate.call(this,args__6541__auto__);};
blockquote.cljs$lang$maxFixedArity = 0;
blockquote.cljs$lang$applyTo = (function (arglist__8776){
var args__6541__auto__ = cljs.core.seq(arglist__8776);
return blockquote__delegate(args__6541__auto__);
});
blockquote.cljs$core$IFn$_invoke$arity$variadic = blockquote__delegate;
return blockquote;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.body = (function() { 
var body__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__7647_8777 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__7648_8778 = null;var count__7649_8779 = 0;var i__7650_8780 = 0;while(true){
if((i__7650_8780 < count__7649_8779))
{var arg__6543__auto___8781 = cljs.core._nth.call(null,chunk__7648_8778,i__7650_8780);a__6542__auto__.push(arg__6543__auto___8781);
{
var G__8782 = seq__7647_8777;
var G__8783 = chunk__7648_8778;
var G__8784 = count__7649_8779;
var G__8785 = (i__7650_8780 + 1);
seq__7647_8777 = G__8782;
chunk__7648_8778 = G__8783;
count__7649_8779 = G__8784;
i__7650_8780 = G__8785;
continue;
}
} else
{var temp__4092__auto___8786 = cljs.core.seq.call(null,seq__7647_8777);if(temp__4092__auto___8786)
{var seq__7647_8787__$1 = temp__4092__auto___8786;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7647_8787__$1))
{var c__5632__auto___8788 = cljs.core.chunk_first.call(null,seq__7647_8787__$1);{
var G__8789 = cljs.core.chunk_rest.call(null,seq__7647_8787__$1);
var G__8790 = c__5632__auto___8788;
var G__8791 = cljs.core.count.call(null,c__5632__auto___8788);
var G__8792 = 0;
seq__7647_8777 = G__8789;
chunk__7648_8778 = G__8790;
count__7649_8779 = G__8791;
i__7650_8780 = G__8792;
continue;
}
} else
{var arg__6543__auto___8793 = cljs.core.first.call(null,seq__7647_8787__$1);a__6542__auto__.push(arg__6543__auto___8793);
{
var G__8794 = cljs.core.next.call(null,seq__7647_8787__$1);
var G__8795 = null;
var G__8796 = 0;
var G__8797 = 0;
seq__7647_8777 = G__8794;
chunk__7648_8778 = G__8795;
count__7649_8779 = G__8796;
i__7650_8780 = G__8797;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.body.apply(null,a__6542__auto__);
};
var body = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return body__delegate.call(this,args__6541__auto__);};
body.cljs$lang$maxFixedArity = 0;
body.cljs$lang$applyTo = (function (arglist__8798){
var args__6541__auto__ = cljs.core.seq(arglist__8798);
return body__delegate(args__6541__auto__);
});
body.cljs$core$IFn$_invoke$arity$variadic = body__delegate;
return body;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.br = (function() { 
var br__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__7655_8799 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__7656_8800 = null;var count__7657_8801 = 0;var i__7658_8802 = 0;while(true){
if((i__7658_8802 < count__7657_8801))
{var arg__6543__auto___8803 = cljs.core._nth.call(null,chunk__7656_8800,i__7658_8802);a__6542__auto__.push(arg__6543__auto___8803);
{
var G__8804 = seq__7655_8799;
var G__8805 = chunk__7656_8800;
var G__8806 = count__7657_8801;
var G__8807 = (i__7658_8802 + 1);
seq__7655_8799 = G__8804;
chunk__7656_8800 = G__8805;
count__7657_8801 = G__8806;
i__7658_8802 = G__8807;
continue;
}
} else
{var temp__4092__auto___8808 = cljs.core.seq.call(null,seq__7655_8799);if(temp__4092__auto___8808)
{var seq__7655_8809__$1 = temp__4092__auto___8808;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7655_8809__$1))
{var c__5632__auto___8810 = cljs.core.chunk_first.call(null,seq__7655_8809__$1);{
var G__8811 = cljs.core.chunk_rest.call(null,seq__7655_8809__$1);
var G__8812 = c__5632__auto___8810;
var G__8813 = cljs.core.count.call(null,c__5632__auto___8810);
var G__8814 = 0;
seq__7655_8799 = G__8811;
chunk__7656_8800 = G__8812;
count__7657_8801 = G__8813;
i__7658_8802 = G__8814;
continue;
}
} else
{var arg__6543__auto___8815 = cljs.core.first.call(null,seq__7655_8809__$1);a__6542__auto__.push(arg__6543__auto___8815);
{
var G__8816 = cljs.core.next.call(null,seq__7655_8809__$1);
var G__8817 = null;
var G__8818 = 0;
var G__8819 = 0;
seq__7655_8799 = G__8816;
chunk__7656_8800 = G__8817;
count__7657_8801 = G__8818;
i__7658_8802 = G__8819;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.br.apply(null,a__6542__auto__);
};
var br = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return br__delegate.call(this,args__6541__auto__);};
br.cljs$lang$maxFixedArity = 0;
br.cljs$lang$applyTo = (function (arglist__8820){
var args__6541__auto__ = cljs.core.seq(arglist__8820);
return br__delegate(args__6541__auto__);
});
br.cljs$core$IFn$_invoke$arity$variadic = br__delegate;
return br;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.button = (function() { 
var button__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__7663_8821 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__7664_8822 = null;var count__7665_8823 = 0;var i__7666_8824 = 0;while(true){
if((i__7666_8824 < count__7665_8823))
{var arg__6543__auto___8825 = cljs.core._nth.call(null,chunk__7664_8822,i__7666_8824);a__6542__auto__.push(arg__6543__auto___8825);
{
var G__8826 = seq__7663_8821;
var G__8827 = chunk__7664_8822;
var G__8828 = count__7665_8823;
var G__8829 = (i__7666_8824 + 1);
seq__7663_8821 = G__8826;
chunk__7664_8822 = G__8827;
count__7665_8823 = G__8828;
i__7666_8824 = G__8829;
continue;
}
} else
{var temp__4092__auto___8830 = cljs.core.seq.call(null,seq__7663_8821);if(temp__4092__auto___8830)
{var seq__7663_8831__$1 = temp__4092__auto___8830;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7663_8831__$1))
{var c__5632__auto___8832 = cljs.core.chunk_first.call(null,seq__7663_8831__$1);{
var G__8833 = cljs.core.chunk_rest.call(null,seq__7663_8831__$1);
var G__8834 = c__5632__auto___8832;
var G__8835 = cljs.core.count.call(null,c__5632__auto___8832);
var G__8836 = 0;
seq__7663_8821 = G__8833;
chunk__7664_8822 = G__8834;
count__7665_8823 = G__8835;
i__7666_8824 = G__8836;
continue;
}
} else
{var arg__6543__auto___8837 = cljs.core.first.call(null,seq__7663_8831__$1);a__6542__auto__.push(arg__6543__auto___8837);
{
var G__8838 = cljs.core.next.call(null,seq__7663_8831__$1);
var G__8839 = null;
var G__8840 = 0;
var G__8841 = 0;
seq__7663_8821 = G__8838;
chunk__7664_8822 = G__8839;
count__7665_8823 = G__8840;
i__7666_8824 = G__8841;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.button.apply(null,a__6542__auto__);
};
var button = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return button__delegate.call(this,args__6541__auto__);};
button.cljs$lang$maxFixedArity = 0;
button.cljs$lang$applyTo = (function (arglist__8842){
var args__6541__auto__ = cljs.core.seq(arglist__8842);
return button__delegate(args__6541__auto__);
});
button.cljs$core$IFn$_invoke$arity$variadic = button__delegate;
return button;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.canvas = (function() { 
var canvas__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__7671_8843 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__7672_8844 = null;var count__7673_8845 = 0;var i__7674_8846 = 0;while(true){
if((i__7674_8846 < count__7673_8845))
{var arg__6543__auto___8847 = cljs.core._nth.call(null,chunk__7672_8844,i__7674_8846);a__6542__auto__.push(arg__6543__auto___8847);
{
var G__8848 = seq__7671_8843;
var G__8849 = chunk__7672_8844;
var G__8850 = count__7673_8845;
var G__8851 = (i__7674_8846 + 1);
seq__7671_8843 = G__8848;
chunk__7672_8844 = G__8849;
count__7673_8845 = G__8850;
i__7674_8846 = G__8851;
continue;
}
} else
{var temp__4092__auto___8852 = cljs.core.seq.call(null,seq__7671_8843);if(temp__4092__auto___8852)
{var seq__7671_8853__$1 = temp__4092__auto___8852;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7671_8853__$1))
{var c__5632__auto___8854 = cljs.core.chunk_first.call(null,seq__7671_8853__$1);{
var G__8855 = cljs.core.chunk_rest.call(null,seq__7671_8853__$1);
var G__8856 = c__5632__auto___8854;
var G__8857 = cljs.core.count.call(null,c__5632__auto___8854);
var G__8858 = 0;
seq__7671_8843 = G__8855;
chunk__7672_8844 = G__8856;
count__7673_8845 = G__8857;
i__7674_8846 = G__8858;
continue;
}
} else
{var arg__6543__auto___8859 = cljs.core.first.call(null,seq__7671_8853__$1);a__6542__auto__.push(arg__6543__auto___8859);
{
var G__8860 = cljs.core.next.call(null,seq__7671_8853__$1);
var G__8861 = null;
var G__8862 = 0;
var G__8863 = 0;
seq__7671_8843 = G__8860;
chunk__7672_8844 = G__8861;
count__7673_8845 = G__8862;
i__7674_8846 = G__8863;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.canvas.apply(null,a__6542__auto__);
};
var canvas = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return canvas__delegate.call(this,args__6541__auto__);};
canvas.cljs$lang$maxFixedArity = 0;
canvas.cljs$lang$applyTo = (function (arglist__8864){
var args__6541__auto__ = cljs.core.seq(arglist__8864);
return canvas__delegate(args__6541__auto__);
});
canvas.cljs$core$IFn$_invoke$arity$variadic = canvas__delegate;
return canvas;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.caption = (function() { 
var caption__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__7679_8865 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__7680_8866 = null;var count__7681_8867 = 0;var i__7682_8868 = 0;while(true){
if((i__7682_8868 < count__7681_8867))
{var arg__6543__auto___8869 = cljs.core._nth.call(null,chunk__7680_8866,i__7682_8868);a__6542__auto__.push(arg__6543__auto___8869);
{
var G__8870 = seq__7679_8865;
var G__8871 = chunk__7680_8866;
var G__8872 = count__7681_8867;
var G__8873 = (i__7682_8868 + 1);
seq__7679_8865 = G__8870;
chunk__7680_8866 = G__8871;
count__7681_8867 = G__8872;
i__7682_8868 = G__8873;
continue;
}
} else
{var temp__4092__auto___8874 = cljs.core.seq.call(null,seq__7679_8865);if(temp__4092__auto___8874)
{var seq__7679_8875__$1 = temp__4092__auto___8874;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7679_8875__$1))
{var c__5632__auto___8876 = cljs.core.chunk_first.call(null,seq__7679_8875__$1);{
var G__8877 = cljs.core.chunk_rest.call(null,seq__7679_8875__$1);
var G__8878 = c__5632__auto___8876;
var G__8879 = cljs.core.count.call(null,c__5632__auto___8876);
var G__8880 = 0;
seq__7679_8865 = G__8877;
chunk__7680_8866 = G__8878;
count__7681_8867 = G__8879;
i__7682_8868 = G__8880;
continue;
}
} else
{var arg__6543__auto___8881 = cljs.core.first.call(null,seq__7679_8875__$1);a__6542__auto__.push(arg__6543__auto___8881);
{
var G__8882 = cljs.core.next.call(null,seq__7679_8875__$1);
var G__8883 = null;
var G__8884 = 0;
var G__8885 = 0;
seq__7679_8865 = G__8882;
chunk__7680_8866 = G__8883;
count__7681_8867 = G__8884;
i__7682_8868 = G__8885;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.caption.apply(null,a__6542__auto__);
};
var caption = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return caption__delegate.call(this,args__6541__auto__);};
caption.cljs$lang$maxFixedArity = 0;
caption.cljs$lang$applyTo = (function (arglist__8886){
var args__6541__auto__ = cljs.core.seq(arglist__8886);
return caption__delegate(args__6541__auto__);
});
caption.cljs$core$IFn$_invoke$arity$variadic = caption__delegate;
return caption;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.cite = (function() { 
var cite__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__7687_8887 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__7688_8888 = null;var count__7689_8889 = 0;var i__7690_8890 = 0;while(true){
if((i__7690_8890 < count__7689_8889))
{var arg__6543__auto___8891 = cljs.core._nth.call(null,chunk__7688_8888,i__7690_8890);a__6542__auto__.push(arg__6543__auto___8891);
{
var G__8892 = seq__7687_8887;
var G__8893 = chunk__7688_8888;
var G__8894 = count__7689_8889;
var G__8895 = (i__7690_8890 + 1);
seq__7687_8887 = G__8892;
chunk__7688_8888 = G__8893;
count__7689_8889 = G__8894;
i__7690_8890 = G__8895;
continue;
}
} else
{var temp__4092__auto___8896 = cljs.core.seq.call(null,seq__7687_8887);if(temp__4092__auto___8896)
{var seq__7687_8897__$1 = temp__4092__auto___8896;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7687_8897__$1))
{var c__5632__auto___8898 = cljs.core.chunk_first.call(null,seq__7687_8897__$1);{
var G__8899 = cljs.core.chunk_rest.call(null,seq__7687_8897__$1);
var G__8900 = c__5632__auto___8898;
var G__8901 = cljs.core.count.call(null,c__5632__auto___8898);
var G__8902 = 0;
seq__7687_8887 = G__8899;
chunk__7688_8888 = G__8900;
count__7689_8889 = G__8901;
i__7690_8890 = G__8902;
continue;
}
} else
{var arg__6543__auto___8903 = cljs.core.first.call(null,seq__7687_8897__$1);a__6542__auto__.push(arg__6543__auto___8903);
{
var G__8904 = cljs.core.next.call(null,seq__7687_8897__$1);
var G__8905 = null;
var G__8906 = 0;
var G__8907 = 0;
seq__7687_8887 = G__8904;
chunk__7688_8888 = G__8905;
count__7689_8889 = G__8906;
i__7690_8890 = G__8907;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.cite.apply(null,a__6542__auto__);
};
var cite = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return cite__delegate.call(this,args__6541__auto__);};
cite.cljs$lang$maxFixedArity = 0;
cite.cljs$lang$applyTo = (function (arglist__8908){
var args__6541__auto__ = cljs.core.seq(arglist__8908);
return cite__delegate(args__6541__auto__);
});
cite.cljs$core$IFn$_invoke$arity$variadic = cite__delegate;
return cite;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.code = (function() { 
var code__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__7695_8909 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__7696_8910 = null;var count__7697_8911 = 0;var i__7698_8912 = 0;while(true){
if((i__7698_8912 < count__7697_8911))
{var arg__6543__auto___8913 = cljs.core._nth.call(null,chunk__7696_8910,i__7698_8912);a__6542__auto__.push(arg__6543__auto___8913);
{
var G__8914 = seq__7695_8909;
var G__8915 = chunk__7696_8910;
var G__8916 = count__7697_8911;
var G__8917 = (i__7698_8912 + 1);
seq__7695_8909 = G__8914;
chunk__7696_8910 = G__8915;
count__7697_8911 = G__8916;
i__7698_8912 = G__8917;
continue;
}
} else
{var temp__4092__auto___8918 = cljs.core.seq.call(null,seq__7695_8909);if(temp__4092__auto___8918)
{var seq__7695_8919__$1 = temp__4092__auto___8918;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7695_8919__$1))
{var c__5632__auto___8920 = cljs.core.chunk_first.call(null,seq__7695_8919__$1);{
var G__8921 = cljs.core.chunk_rest.call(null,seq__7695_8919__$1);
var G__8922 = c__5632__auto___8920;
var G__8923 = cljs.core.count.call(null,c__5632__auto___8920);
var G__8924 = 0;
seq__7695_8909 = G__8921;
chunk__7696_8910 = G__8922;
count__7697_8911 = G__8923;
i__7698_8912 = G__8924;
continue;
}
} else
{var arg__6543__auto___8925 = cljs.core.first.call(null,seq__7695_8919__$1);a__6542__auto__.push(arg__6543__auto___8925);
{
var G__8926 = cljs.core.next.call(null,seq__7695_8919__$1);
var G__8927 = null;
var G__8928 = 0;
var G__8929 = 0;
seq__7695_8909 = G__8926;
chunk__7696_8910 = G__8927;
count__7697_8911 = G__8928;
i__7698_8912 = G__8929;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.code.apply(null,a__6542__auto__);
};
var code = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return code__delegate.call(this,args__6541__auto__);};
code.cljs$lang$maxFixedArity = 0;
code.cljs$lang$applyTo = (function (arglist__8930){
var args__6541__auto__ = cljs.core.seq(arglist__8930);
return code__delegate(args__6541__auto__);
});
code.cljs$core$IFn$_invoke$arity$variadic = code__delegate;
return code;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.col = (function() { 
var col__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__7703_8931 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__7704_8932 = null;var count__7705_8933 = 0;var i__7706_8934 = 0;while(true){
if((i__7706_8934 < count__7705_8933))
{var arg__6543__auto___8935 = cljs.core._nth.call(null,chunk__7704_8932,i__7706_8934);a__6542__auto__.push(arg__6543__auto___8935);
{
var G__8936 = seq__7703_8931;
var G__8937 = chunk__7704_8932;
var G__8938 = count__7705_8933;
var G__8939 = (i__7706_8934 + 1);
seq__7703_8931 = G__8936;
chunk__7704_8932 = G__8937;
count__7705_8933 = G__8938;
i__7706_8934 = G__8939;
continue;
}
} else
{var temp__4092__auto___8940 = cljs.core.seq.call(null,seq__7703_8931);if(temp__4092__auto___8940)
{var seq__7703_8941__$1 = temp__4092__auto___8940;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7703_8941__$1))
{var c__5632__auto___8942 = cljs.core.chunk_first.call(null,seq__7703_8941__$1);{
var G__8943 = cljs.core.chunk_rest.call(null,seq__7703_8941__$1);
var G__8944 = c__5632__auto___8942;
var G__8945 = cljs.core.count.call(null,c__5632__auto___8942);
var G__8946 = 0;
seq__7703_8931 = G__8943;
chunk__7704_8932 = G__8944;
count__7705_8933 = G__8945;
i__7706_8934 = G__8946;
continue;
}
} else
{var arg__6543__auto___8947 = cljs.core.first.call(null,seq__7703_8941__$1);a__6542__auto__.push(arg__6543__auto___8947);
{
var G__8948 = cljs.core.next.call(null,seq__7703_8941__$1);
var G__8949 = null;
var G__8950 = 0;
var G__8951 = 0;
seq__7703_8931 = G__8948;
chunk__7704_8932 = G__8949;
count__7705_8933 = G__8950;
i__7706_8934 = G__8951;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.col.apply(null,a__6542__auto__);
};
var col = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return col__delegate.call(this,args__6541__auto__);};
col.cljs$lang$maxFixedArity = 0;
col.cljs$lang$applyTo = (function (arglist__8952){
var args__6541__auto__ = cljs.core.seq(arglist__8952);
return col__delegate(args__6541__auto__);
});
col.cljs$core$IFn$_invoke$arity$variadic = col__delegate;
return col;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.colgroup = (function() { 
var colgroup__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__7711_8953 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__7712_8954 = null;var count__7713_8955 = 0;var i__7714_8956 = 0;while(true){
if((i__7714_8956 < count__7713_8955))
{var arg__6543__auto___8957 = cljs.core._nth.call(null,chunk__7712_8954,i__7714_8956);a__6542__auto__.push(arg__6543__auto___8957);
{
var G__8958 = seq__7711_8953;
var G__8959 = chunk__7712_8954;
var G__8960 = count__7713_8955;
var G__8961 = (i__7714_8956 + 1);
seq__7711_8953 = G__8958;
chunk__7712_8954 = G__8959;
count__7713_8955 = G__8960;
i__7714_8956 = G__8961;
continue;
}
} else
{var temp__4092__auto___8962 = cljs.core.seq.call(null,seq__7711_8953);if(temp__4092__auto___8962)
{var seq__7711_8963__$1 = temp__4092__auto___8962;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7711_8963__$1))
{var c__5632__auto___8964 = cljs.core.chunk_first.call(null,seq__7711_8963__$1);{
var G__8965 = cljs.core.chunk_rest.call(null,seq__7711_8963__$1);
var G__8966 = c__5632__auto___8964;
var G__8967 = cljs.core.count.call(null,c__5632__auto___8964);
var G__8968 = 0;
seq__7711_8953 = G__8965;
chunk__7712_8954 = G__8966;
count__7713_8955 = G__8967;
i__7714_8956 = G__8968;
continue;
}
} else
{var arg__6543__auto___8969 = cljs.core.first.call(null,seq__7711_8963__$1);a__6542__auto__.push(arg__6543__auto___8969);
{
var G__8970 = cljs.core.next.call(null,seq__7711_8963__$1);
var G__8971 = null;
var G__8972 = 0;
var G__8973 = 0;
seq__7711_8953 = G__8970;
chunk__7712_8954 = G__8971;
count__7713_8955 = G__8972;
i__7714_8956 = G__8973;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.colgroup.apply(null,a__6542__auto__);
};
var colgroup = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return colgroup__delegate.call(this,args__6541__auto__);};
colgroup.cljs$lang$maxFixedArity = 0;
colgroup.cljs$lang$applyTo = (function (arglist__8974){
var args__6541__auto__ = cljs.core.seq(arglist__8974);
return colgroup__delegate(args__6541__auto__);
});
colgroup.cljs$core$IFn$_invoke$arity$variadic = colgroup__delegate;
return colgroup;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.data = (function() { 
var data__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__7719_8975 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__7720_8976 = null;var count__7721_8977 = 0;var i__7722_8978 = 0;while(true){
if((i__7722_8978 < count__7721_8977))
{var arg__6543__auto___8979 = cljs.core._nth.call(null,chunk__7720_8976,i__7722_8978);a__6542__auto__.push(arg__6543__auto___8979);
{
var G__8980 = seq__7719_8975;
var G__8981 = chunk__7720_8976;
var G__8982 = count__7721_8977;
var G__8983 = (i__7722_8978 + 1);
seq__7719_8975 = G__8980;
chunk__7720_8976 = G__8981;
count__7721_8977 = G__8982;
i__7722_8978 = G__8983;
continue;
}
} else
{var temp__4092__auto___8984 = cljs.core.seq.call(null,seq__7719_8975);if(temp__4092__auto___8984)
{var seq__7719_8985__$1 = temp__4092__auto___8984;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7719_8985__$1))
{var c__5632__auto___8986 = cljs.core.chunk_first.call(null,seq__7719_8985__$1);{
var G__8987 = cljs.core.chunk_rest.call(null,seq__7719_8985__$1);
var G__8988 = c__5632__auto___8986;
var G__8989 = cljs.core.count.call(null,c__5632__auto___8986);
var G__8990 = 0;
seq__7719_8975 = G__8987;
chunk__7720_8976 = G__8988;
count__7721_8977 = G__8989;
i__7722_8978 = G__8990;
continue;
}
} else
{var arg__6543__auto___8991 = cljs.core.first.call(null,seq__7719_8985__$1);a__6542__auto__.push(arg__6543__auto___8991);
{
var G__8992 = cljs.core.next.call(null,seq__7719_8985__$1);
var G__8993 = null;
var G__8994 = 0;
var G__8995 = 0;
seq__7719_8975 = G__8992;
chunk__7720_8976 = G__8993;
count__7721_8977 = G__8994;
i__7722_8978 = G__8995;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.data.apply(null,a__6542__auto__);
};
var data = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return data__delegate.call(this,args__6541__auto__);};
data.cljs$lang$maxFixedArity = 0;
data.cljs$lang$applyTo = (function (arglist__8996){
var args__6541__auto__ = cljs.core.seq(arglist__8996);
return data__delegate(args__6541__auto__);
});
data.cljs$core$IFn$_invoke$arity$variadic = data__delegate;
return data;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.datalist = (function() { 
var datalist__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__7727_8997 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__7728_8998 = null;var count__7729_8999 = 0;var i__7730_9000 = 0;while(true){
if((i__7730_9000 < count__7729_8999))
{var arg__6543__auto___9001 = cljs.core._nth.call(null,chunk__7728_8998,i__7730_9000);a__6542__auto__.push(arg__6543__auto___9001);
{
var G__9002 = seq__7727_8997;
var G__9003 = chunk__7728_8998;
var G__9004 = count__7729_8999;
var G__9005 = (i__7730_9000 + 1);
seq__7727_8997 = G__9002;
chunk__7728_8998 = G__9003;
count__7729_8999 = G__9004;
i__7730_9000 = G__9005;
continue;
}
} else
{var temp__4092__auto___9006 = cljs.core.seq.call(null,seq__7727_8997);if(temp__4092__auto___9006)
{var seq__7727_9007__$1 = temp__4092__auto___9006;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7727_9007__$1))
{var c__5632__auto___9008 = cljs.core.chunk_first.call(null,seq__7727_9007__$1);{
var G__9009 = cljs.core.chunk_rest.call(null,seq__7727_9007__$1);
var G__9010 = c__5632__auto___9008;
var G__9011 = cljs.core.count.call(null,c__5632__auto___9008);
var G__9012 = 0;
seq__7727_8997 = G__9009;
chunk__7728_8998 = G__9010;
count__7729_8999 = G__9011;
i__7730_9000 = G__9012;
continue;
}
} else
{var arg__6543__auto___9013 = cljs.core.first.call(null,seq__7727_9007__$1);a__6542__auto__.push(arg__6543__auto___9013);
{
var G__9014 = cljs.core.next.call(null,seq__7727_9007__$1);
var G__9015 = null;
var G__9016 = 0;
var G__9017 = 0;
seq__7727_8997 = G__9014;
chunk__7728_8998 = G__9015;
count__7729_8999 = G__9016;
i__7730_9000 = G__9017;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.datalist.apply(null,a__6542__auto__);
};
var datalist = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return datalist__delegate.call(this,args__6541__auto__);};
datalist.cljs$lang$maxFixedArity = 0;
datalist.cljs$lang$applyTo = (function (arglist__9018){
var args__6541__auto__ = cljs.core.seq(arglist__9018);
return datalist__delegate(args__6541__auto__);
});
datalist.cljs$core$IFn$_invoke$arity$variadic = datalist__delegate;
return datalist;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.dd = (function() { 
var dd__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__7735_9019 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__7736_9020 = null;var count__7737_9021 = 0;var i__7738_9022 = 0;while(true){
if((i__7738_9022 < count__7737_9021))
{var arg__6543__auto___9023 = cljs.core._nth.call(null,chunk__7736_9020,i__7738_9022);a__6542__auto__.push(arg__6543__auto___9023);
{
var G__9024 = seq__7735_9019;
var G__9025 = chunk__7736_9020;
var G__9026 = count__7737_9021;
var G__9027 = (i__7738_9022 + 1);
seq__7735_9019 = G__9024;
chunk__7736_9020 = G__9025;
count__7737_9021 = G__9026;
i__7738_9022 = G__9027;
continue;
}
} else
{var temp__4092__auto___9028 = cljs.core.seq.call(null,seq__7735_9019);if(temp__4092__auto___9028)
{var seq__7735_9029__$1 = temp__4092__auto___9028;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7735_9029__$1))
{var c__5632__auto___9030 = cljs.core.chunk_first.call(null,seq__7735_9029__$1);{
var G__9031 = cljs.core.chunk_rest.call(null,seq__7735_9029__$1);
var G__9032 = c__5632__auto___9030;
var G__9033 = cljs.core.count.call(null,c__5632__auto___9030);
var G__9034 = 0;
seq__7735_9019 = G__9031;
chunk__7736_9020 = G__9032;
count__7737_9021 = G__9033;
i__7738_9022 = G__9034;
continue;
}
} else
{var arg__6543__auto___9035 = cljs.core.first.call(null,seq__7735_9029__$1);a__6542__auto__.push(arg__6543__auto___9035);
{
var G__9036 = cljs.core.next.call(null,seq__7735_9029__$1);
var G__9037 = null;
var G__9038 = 0;
var G__9039 = 0;
seq__7735_9019 = G__9036;
chunk__7736_9020 = G__9037;
count__7737_9021 = G__9038;
i__7738_9022 = G__9039;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.dd.apply(null,a__6542__auto__);
};
var dd = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return dd__delegate.call(this,args__6541__auto__);};
dd.cljs$lang$maxFixedArity = 0;
dd.cljs$lang$applyTo = (function (arglist__9040){
var args__6541__auto__ = cljs.core.seq(arglist__9040);
return dd__delegate(args__6541__auto__);
});
dd.cljs$core$IFn$_invoke$arity$variadic = dd__delegate;
return dd;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.del = (function() { 
var del__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__7743_9041 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__7744_9042 = null;var count__7745_9043 = 0;var i__7746_9044 = 0;while(true){
if((i__7746_9044 < count__7745_9043))
{var arg__6543__auto___9045 = cljs.core._nth.call(null,chunk__7744_9042,i__7746_9044);a__6542__auto__.push(arg__6543__auto___9045);
{
var G__9046 = seq__7743_9041;
var G__9047 = chunk__7744_9042;
var G__9048 = count__7745_9043;
var G__9049 = (i__7746_9044 + 1);
seq__7743_9041 = G__9046;
chunk__7744_9042 = G__9047;
count__7745_9043 = G__9048;
i__7746_9044 = G__9049;
continue;
}
} else
{var temp__4092__auto___9050 = cljs.core.seq.call(null,seq__7743_9041);if(temp__4092__auto___9050)
{var seq__7743_9051__$1 = temp__4092__auto___9050;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7743_9051__$1))
{var c__5632__auto___9052 = cljs.core.chunk_first.call(null,seq__7743_9051__$1);{
var G__9053 = cljs.core.chunk_rest.call(null,seq__7743_9051__$1);
var G__9054 = c__5632__auto___9052;
var G__9055 = cljs.core.count.call(null,c__5632__auto___9052);
var G__9056 = 0;
seq__7743_9041 = G__9053;
chunk__7744_9042 = G__9054;
count__7745_9043 = G__9055;
i__7746_9044 = G__9056;
continue;
}
} else
{var arg__6543__auto___9057 = cljs.core.first.call(null,seq__7743_9051__$1);a__6542__auto__.push(arg__6543__auto___9057);
{
var G__9058 = cljs.core.next.call(null,seq__7743_9051__$1);
var G__9059 = null;
var G__9060 = 0;
var G__9061 = 0;
seq__7743_9041 = G__9058;
chunk__7744_9042 = G__9059;
count__7745_9043 = G__9060;
i__7746_9044 = G__9061;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.del.apply(null,a__6542__auto__);
};
var del = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return del__delegate.call(this,args__6541__auto__);};
del.cljs$lang$maxFixedArity = 0;
del.cljs$lang$applyTo = (function (arglist__9062){
var args__6541__auto__ = cljs.core.seq(arglist__9062);
return del__delegate(args__6541__auto__);
});
del.cljs$core$IFn$_invoke$arity$variadic = del__delegate;
return del;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.details = (function() { 
var details__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__7751_9063 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__7752_9064 = null;var count__7753_9065 = 0;var i__7754_9066 = 0;while(true){
if((i__7754_9066 < count__7753_9065))
{var arg__6543__auto___9067 = cljs.core._nth.call(null,chunk__7752_9064,i__7754_9066);a__6542__auto__.push(arg__6543__auto___9067);
{
var G__9068 = seq__7751_9063;
var G__9069 = chunk__7752_9064;
var G__9070 = count__7753_9065;
var G__9071 = (i__7754_9066 + 1);
seq__7751_9063 = G__9068;
chunk__7752_9064 = G__9069;
count__7753_9065 = G__9070;
i__7754_9066 = G__9071;
continue;
}
} else
{var temp__4092__auto___9072 = cljs.core.seq.call(null,seq__7751_9063);if(temp__4092__auto___9072)
{var seq__7751_9073__$1 = temp__4092__auto___9072;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7751_9073__$1))
{var c__5632__auto___9074 = cljs.core.chunk_first.call(null,seq__7751_9073__$1);{
var G__9075 = cljs.core.chunk_rest.call(null,seq__7751_9073__$1);
var G__9076 = c__5632__auto___9074;
var G__9077 = cljs.core.count.call(null,c__5632__auto___9074);
var G__9078 = 0;
seq__7751_9063 = G__9075;
chunk__7752_9064 = G__9076;
count__7753_9065 = G__9077;
i__7754_9066 = G__9078;
continue;
}
} else
{var arg__6543__auto___9079 = cljs.core.first.call(null,seq__7751_9073__$1);a__6542__auto__.push(arg__6543__auto___9079);
{
var G__9080 = cljs.core.next.call(null,seq__7751_9073__$1);
var G__9081 = null;
var G__9082 = 0;
var G__9083 = 0;
seq__7751_9063 = G__9080;
chunk__7752_9064 = G__9081;
count__7753_9065 = G__9082;
i__7754_9066 = G__9083;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.details.apply(null,a__6542__auto__);
};
var details = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return details__delegate.call(this,args__6541__auto__);};
details.cljs$lang$maxFixedArity = 0;
details.cljs$lang$applyTo = (function (arglist__9084){
var args__6541__auto__ = cljs.core.seq(arglist__9084);
return details__delegate(args__6541__auto__);
});
details.cljs$core$IFn$_invoke$arity$variadic = details__delegate;
return details;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.dfn = (function() { 
var dfn__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__7759_9085 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__7760_9086 = null;var count__7761_9087 = 0;var i__7762_9088 = 0;while(true){
if((i__7762_9088 < count__7761_9087))
{var arg__6543__auto___9089 = cljs.core._nth.call(null,chunk__7760_9086,i__7762_9088);a__6542__auto__.push(arg__6543__auto___9089);
{
var G__9090 = seq__7759_9085;
var G__9091 = chunk__7760_9086;
var G__9092 = count__7761_9087;
var G__9093 = (i__7762_9088 + 1);
seq__7759_9085 = G__9090;
chunk__7760_9086 = G__9091;
count__7761_9087 = G__9092;
i__7762_9088 = G__9093;
continue;
}
} else
{var temp__4092__auto___9094 = cljs.core.seq.call(null,seq__7759_9085);if(temp__4092__auto___9094)
{var seq__7759_9095__$1 = temp__4092__auto___9094;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7759_9095__$1))
{var c__5632__auto___9096 = cljs.core.chunk_first.call(null,seq__7759_9095__$1);{
var G__9097 = cljs.core.chunk_rest.call(null,seq__7759_9095__$1);
var G__9098 = c__5632__auto___9096;
var G__9099 = cljs.core.count.call(null,c__5632__auto___9096);
var G__9100 = 0;
seq__7759_9085 = G__9097;
chunk__7760_9086 = G__9098;
count__7761_9087 = G__9099;
i__7762_9088 = G__9100;
continue;
}
} else
{var arg__6543__auto___9101 = cljs.core.first.call(null,seq__7759_9095__$1);a__6542__auto__.push(arg__6543__auto___9101);
{
var G__9102 = cljs.core.next.call(null,seq__7759_9095__$1);
var G__9103 = null;
var G__9104 = 0;
var G__9105 = 0;
seq__7759_9085 = G__9102;
chunk__7760_9086 = G__9103;
count__7761_9087 = G__9104;
i__7762_9088 = G__9105;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.dfn.apply(null,a__6542__auto__);
};
var dfn = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return dfn__delegate.call(this,args__6541__auto__);};
dfn.cljs$lang$maxFixedArity = 0;
dfn.cljs$lang$applyTo = (function (arglist__9106){
var args__6541__auto__ = cljs.core.seq(arglist__9106);
return dfn__delegate(args__6541__auto__);
});
dfn.cljs$core$IFn$_invoke$arity$variadic = dfn__delegate;
return dfn;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.div = (function() { 
var div__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__7767_9107 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__7768_9108 = null;var count__7769_9109 = 0;var i__7770_9110 = 0;while(true){
if((i__7770_9110 < count__7769_9109))
{var arg__6543__auto___9111 = cljs.core._nth.call(null,chunk__7768_9108,i__7770_9110);a__6542__auto__.push(arg__6543__auto___9111);
{
var G__9112 = seq__7767_9107;
var G__9113 = chunk__7768_9108;
var G__9114 = count__7769_9109;
var G__9115 = (i__7770_9110 + 1);
seq__7767_9107 = G__9112;
chunk__7768_9108 = G__9113;
count__7769_9109 = G__9114;
i__7770_9110 = G__9115;
continue;
}
} else
{var temp__4092__auto___9116 = cljs.core.seq.call(null,seq__7767_9107);if(temp__4092__auto___9116)
{var seq__7767_9117__$1 = temp__4092__auto___9116;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7767_9117__$1))
{var c__5632__auto___9118 = cljs.core.chunk_first.call(null,seq__7767_9117__$1);{
var G__9119 = cljs.core.chunk_rest.call(null,seq__7767_9117__$1);
var G__9120 = c__5632__auto___9118;
var G__9121 = cljs.core.count.call(null,c__5632__auto___9118);
var G__9122 = 0;
seq__7767_9107 = G__9119;
chunk__7768_9108 = G__9120;
count__7769_9109 = G__9121;
i__7770_9110 = G__9122;
continue;
}
} else
{var arg__6543__auto___9123 = cljs.core.first.call(null,seq__7767_9117__$1);a__6542__auto__.push(arg__6543__auto___9123);
{
var G__9124 = cljs.core.next.call(null,seq__7767_9117__$1);
var G__9125 = null;
var G__9126 = 0;
var G__9127 = 0;
seq__7767_9107 = G__9124;
chunk__7768_9108 = G__9125;
count__7769_9109 = G__9126;
i__7770_9110 = G__9127;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.div.apply(null,a__6542__auto__);
};
var div = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return div__delegate.call(this,args__6541__auto__);};
div.cljs$lang$maxFixedArity = 0;
div.cljs$lang$applyTo = (function (arglist__9128){
var args__6541__auto__ = cljs.core.seq(arglist__9128);
return div__delegate(args__6541__auto__);
});
div.cljs$core$IFn$_invoke$arity$variadic = div__delegate;
return div;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.dl = (function() { 
var dl__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__7775_9129 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__7776_9130 = null;var count__7777_9131 = 0;var i__7778_9132 = 0;while(true){
if((i__7778_9132 < count__7777_9131))
{var arg__6543__auto___9133 = cljs.core._nth.call(null,chunk__7776_9130,i__7778_9132);a__6542__auto__.push(arg__6543__auto___9133);
{
var G__9134 = seq__7775_9129;
var G__9135 = chunk__7776_9130;
var G__9136 = count__7777_9131;
var G__9137 = (i__7778_9132 + 1);
seq__7775_9129 = G__9134;
chunk__7776_9130 = G__9135;
count__7777_9131 = G__9136;
i__7778_9132 = G__9137;
continue;
}
} else
{var temp__4092__auto___9138 = cljs.core.seq.call(null,seq__7775_9129);if(temp__4092__auto___9138)
{var seq__7775_9139__$1 = temp__4092__auto___9138;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7775_9139__$1))
{var c__5632__auto___9140 = cljs.core.chunk_first.call(null,seq__7775_9139__$1);{
var G__9141 = cljs.core.chunk_rest.call(null,seq__7775_9139__$1);
var G__9142 = c__5632__auto___9140;
var G__9143 = cljs.core.count.call(null,c__5632__auto___9140);
var G__9144 = 0;
seq__7775_9129 = G__9141;
chunk__7776_9130 = G__9142;
count__7777_9131 = G__9143;
i__7778_9132 = G__9144;
continue;
}
} else
{var arg__6543__auto___9145 = cljs.core.first.call(null,seq__7775_9139__$1);a__6542__auto__.push(arg__6543__auto___9145);
{
var G__9146 = cljs.core.next.call(null,seq__7775_9139__$1);
var G__9147 = null;
var G__9148 = 0;
var G__9149 = 0;
seq__7775_9129 = G__9146;
chunk__7776_9130 = G__9147;
count__7777_9131 = G__9148;
i__7778_9132 = G__9149;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.dl.apply(null,a__6542__auto__);
};
var dl = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return dl__delegate.call(this,args__6541__auto__);};
dl.cljs$lang$maxFixedArity = 0;
dl.cljs$lang$applyTo = (function (arglist__9150){
var args__6541__auto__ = cljs.core.seq(arglist__9150);
return dl__delegate(args__6541__auto__);
});
dl.cljs$core$IFn$_invoke$arity$variadic = dl__delegate;
return dl;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.dt = (function() { 
var dt__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__7783_9151 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__7784_9152 = null;var count__7785_9153 = 0;var i__7786_9154 = 0;while(true){
if((i__7786_9154 < count__7785_9153))
{var arg__6543__auto___9155 = cljs.core._nth.call(null,chunk__7784_9152,i__7786_9154);a__6542__auto__.push(arg__6543__auto___9155);
{
var G__9156 = seq__7783_9151;
var G__9157 = chunk__7784_9152;
var G__9158 = count__7785_9153;
var G__9159 = (i__7786_9154 + 1);
seq__7783_9151 = G__9156;
chunk__7784_9152 = G__9157;
count__7785_9153 = G__9158;
i__7786_9154 = G__9159;
continue;
}
} else
{var temp__4092__auto___9160 = cljs.core.seq.call(null,seq__7783_9151);if(temp__4092__auto___9160)
{var seq__7783_9161__$1 = temp__4092__auto___9160;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7783_9161__$1))
{var c__5632__auto___9162 = cljs.core.chunk_first.call(null,seq__7783_9161__$1);{
var G__9163 = cljs.core.chunk_rest.call(null,seq__7783_9161__$1);
var G__9164 = c__5632__auto___9162;
var G__9165 = cljs.core.count.call(null,c__5632__auto___9162);
var G__9166 = 0;
seq__7783_9151 = G__9163;
chunk__7784_9152 = G__9164;
count__7785_9153 = G__9165;
i__7786_9154 = G__9166;
continue;
}
} else
{var arg__6543__auto___9167 = cljs.core.first.call(null,seq__7783_9161__$1);a__6542__auto__.push(arg__6543__auto___9167);
{
var G__9168 = cljs.core.next.call(null,seq__7783_9161__$1);
var G__9169 = null;
var G__9170 = 0;
var G__9171 = 0;
seq__7783_9151 = G__9168;
chunk__7784_9152 = G__9169;
count__7785_9153 = G__9170;
i__7786_9154 = G__9171;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.dt.apply(null,a__6542__auto__);
};
var dt = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return dt__delegate.call(this,args__6541__auto__);};
dt.cljs$lang$maxFixedArity = 0;
dt.cljs$lang$applyTo = (function (arglist__9172){
var args__6541__auto__ = cljs.core.seq(arglist__9172);
return dt__delegate(args__6541__auto__);
});
dt.cljs$core$IFn$_invoke$arity$variadic = dt__delegate;
return dt;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.em = (function() { 
var em__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__7791_9173 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__7792_9174 = null;var count__7793_9175 = 0;var i__7794_9176 = 0;while(true){
if((i__7794_9176 < count__7793_9175))
{var arg__6543__auto___9177 = cljs.core._nth.call(null,chunk__7792_9174,i__7794_9176);a__6542__auto__.push(arg__6543__auto___9177);
{
var G__9178 = seq__7791_9173;
var G__9179 = chunk__7792_9174;
var G__9180 = count__7793_9175;
var G__9181 = (i__7794_9176 + 1);
seq__7791_9173 = G__9178;
chunk__7792_9174 = G__9179;
count__7793_9175 = G__9180;
i__7794_9176 = G__9181;
continue;
}
} else
{var temp__4092__auto___9182 = cljs.core.seq.call(null,seq__7791_9173);if(temp__4092__auto___9182)
{var seq__7791_9183__$1 = temp__4092__auto___9182;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7791_9183__$1))
{var c__5632__auto___9184 = cljs.core.chunk_first.call(null,seq__7791_9183__$1);{
var G__9185 = cljs.core.chunk_rest.call(null,seq__7791_9183__$1);
var G__9186 = c__5632__auto___9184;
var G__9187 = cljs.core.count.call(null,c__5632__auto___9184);
var G__9188 = 0;
seq__7791_9173 = G__9185;
chunk__7792_9174 = G__9186;
count__7793_9175 = G__9187;
i__7794_9176 = G__9188;
continue;
}
} else
{var arg__6543__auto___9189 = cljs.core.first.call(null,seq__7791_9183__$1);a__6542__auto__.push(arg__6543__auto___9189);
{
var G__9190 = cljs.core.next.call(null,seq__7791_9183__$1);
var G__9191 = null;
var G__9192 = 0;
var G__9193 = 0;
seq__7791_9173 = G__9190;
chunk__7792_9174 = G__9191;
count__7793_9175 = G__9192;
i__7794_9176 = G__9193;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.em.apply(null,a__6542__auto__);
};
var em = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return em__delegate.call(this,args__6541__auto__);};
em.cljs$lang$maxFixedArity = 0;
em.cljs$lang$applyTo = (function (arglist__9194){
var args__6541__auto__ = cljs.core.seq(arglist__9194);
return em__delegate(args__6541__auto__);
});
em.cljs$core$IFn$_invoke$arity$variadic = em__delegate;
return em;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.embed = (function() { 
var embed__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__7807_9195 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__7808_9196 = null;var count__7809_9197 = 0;var i__7810_9198 = 0;while(true){
if((i__7810_9198 < count__7809_9197))
{var arg__6543__auto___9199 = cljs.core._nth.call(null,chunk__7808_9196,i__7810_9198);a__6542__auto__.push(arg__6543__auto___9199);
{
var G__9200 = seq__7807_9195;
var G__9201 = chunk__7808_9196;
var G__9202 = count__7809_9197;
var G__9203 = (i__7810_9198 + 1);
seq__7807_9195 = G__9200;
chunk__7808_9196 = G__9201;
count__7809_9197 = G__9202;
i__7810_9198 = G__9203;
continue;
}
} else
{var temp__4092__auto___9204 = cljs.core.seq.call(null,seq__7807_9195);if(temp__4092__auto___9204)
{var seq__7807_9205__$1 = temp__4092__auto___9204;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7807_9205__$1))
{var c__5632__auto___9206 = cljs.core.chunk_first.call(null,seq__7807_9205__$1);{
var G__9207 = cljs.core.chunk_rest.call(null,seq__7807_9205__$1);
var G__9208 = c__5632__auto___9206;
var G__9209 = cljs.core.count.call(null,c__5632__auto___9206);
var G__9210 = 0;
seq__7807_9195 = G__9207;
chunk__7808_9196 = G__9208;
count__7809_9197 = G__9209;
i__7810_9198 = G__9210;
continue;
}
} else
{var arg__6543__auto___9211 = cljs.core.first.call(null,seq__7807_9205__$1);a__6542__auto__.push(arg__6543__auto___9211);
{
var G__9212 = cljs.core.next.call(null,seq__7807_9205__$1);
var G__9213 = null;
var G__9214 = 0;
var G__9215 = 0;
seq__7807_9195 = G__9212;
chunk__7808_9196 = G__9213;
count__7809_9197 = G__9214;
i__7810_9198 = G__9215;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.embed.apply(null,a__6542__auto__);
};
var embed = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return embed__delegate.call(this,args__6541__auto__);};
embed.cljs$lang$maxFixedArity = 0;
embed.cljs$lang$applyTo = (function (arglist__9216){
var args__6541__auto__ = cljs.core.seq(arglist__9216);
return embed__delegate(args__6541__auto__);
});
embed.cljs$core$IFn$_invoke$arity$variadic = embed__delegate;
return embed;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.fieldset = (function() { 
var fieldset__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__7815_9217 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__7816_9218 = null;var count__7817_9219 = 0;var i__7818_9220 = 0;while(true){
if((i__7818_9220 < count__7817_9219))
{var arg__6543__auto___9221 = cljs.core._nth.call(null,chunk__7816_9218,i__7818_9220);a__6542__auto__.push(arg__6543__auto___9221);
{
var G__9222 = seq__7815_9217;
var G__9223 = chunk__7816_9218;
var G__9224 = count__7817_9219;
var G__9225 = (i__7818_9220 + 1);
seq__7815_9217 = G__9222;
chunk__7816_9218 = G__9223;
count__7817_9219 = G__9224;
i__7818_9220 = G__9225;
continue;
}
} else
{var temp__4092__auto___9226 = cljs.core.seq.call(null,seq__7815_9217);if(temp__4092__auto___9226)
{var seq__7815_9227__$1 = temp__4092__auto___9226;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7815_9227__$1))
{var c__5632__auto___9228 = cljs.core.chunk_first.call(null,seq__7815_9227__$1);{
var G__9229 = cljs.core.chunk_rest.call(null,seq__7815_9227__$1);
var G__9230 = c__5632__auto___9228;
var G__9231 = cljs.core.count.call(null,c__5632__auto___9228);
var G__9232 = 0;
seq__7815_9217 = G__9229;
chunk__7816_9218 = G__9230;
count__7817_9219 = G__9231;
i__7818_9220 = G__9232;
continue;
}
} else
{var arg__6543__auto___9233 = cljs.core.first.call(null,seq__7815_9227__$1);a__6542__auto__.push(arg__6543__auto___9233);
{
var G__9234 = cljs.core.next.call(null,seq__7815_9227__$1);
var G__9235 = null;
var G__9236 = 0;
var G__9237 = 0;
seq__7815_9217 = G__9234;
chunk__7816_9218 = G__9235;
count__7817_9219 = G__9236;
i__7818_9220 = G__9237;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.fieldset.apply(null,a__6542__auto__);
};
var fieldset = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return fieldset__delegate.call(this,args__6541__auto__);};
fieldset.cljs$lang$maxFixedArity = 0;
fieldset.cljs$lang$applyTo = (function (arglist__9238){
var args__6541__auto__ = cljs.core.seq(arglist__9238);
return fieldset__delegate(args__6541__auto__);
});
fieldset.cljs$core$IFn$_invoke$arity$variadic = fieldset__delegate;
return fieldset;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.figcaption = (function() { 
var figcaption__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__7823_9239 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__7824_9240 = null;var count__7825_9241 = 0;var i__7826_9242 = 0;while(true){
if((i__7826_9242 < count__7825_9241))
{var arg__6543__auto___9243 = cljs.core._nth.call(null,chunk__7824_9240,i__7826_9242);a__6542__auto__.push(arg__6543__auto___9243);
{
var G__9244 = seq__7823_9239;
var G__9245 = chunk__7824_9240;
var G__9246 = count__7825_9241;
var G__9247 = (i__7826_9242 + 1);
seq__7823_9239 = G__9244;
chunk__7824_9240 = G__9245;
count__7825_9241 = G__9246;
i__7826_9242 = G__9247;
continue;
}
} else
{var temp__4092__auto___9248 = cljs.core.seq.call(null,seq__7823_9239);if(temp__4092__auto___9248)
{var seq__7823_9249__$1 = temp__4092__auto___9248;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7823_9249__$1))
{var c__5632__auto___9250 = cljs.core.chunk_first.call(null,seq__7823_9249__$1);{
var G__9251 = cljs.core.chunk_rest.call(null,seq__7823_9249__$1);
var G__9252 = c__5632__auto___9250;
var G__9253 = cljs.core.count.call(null,c__5632__auto___9250);
var G__9254 = 0;
seq__7823_9239 = G__9251;
chunk__7824_9240 = G__9252;
count__7825_9241 = G__9253;
i__7826_9242 = G__9254;
continue;
}
} else
{var arg__6543__auto___9255 = cljs.core.first.call(null,seq__7823_9249__$1);a__6542__auto__.push(arg__6543__auto___9255);
{
var G__9256 = cljs.core.next.call(null,seq__7823_9249__$1);
var G__9257 = null;
var G__9258 = 0;
var G__9259 = 0;
seq__7823_9239 = G__9256;
chunk__7824_9240 = G__9257;
count__7825_9241 = G__9258;
i__7826_9242 = G__9259;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.figcaption.apply(null,a__6542__auto__);
};
var figcaption = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return figcaption__delegate.call(this,args__6541__auto__);};
figcaption.cljs$lang$maxFixedArity = 0;
figcaption.cljs$lang$applyTo = (function (arglist__9260){
var args__6541__auto__ = cljs.core.seq(arglist__9260);
return figcaption__delegate(args__6541__auto__);
});
figcaption.cljs$core$IFn$_invoke$arity$variadic = figcaption__delegate;
return figcaption;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.figure = (function() { 
var figure__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__7831_9261 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__7832_9262 = null;var count__7833_9263 = 0;var i__7834_9264 = 0;while(true){
if((i__7834_9264 < count__7833_9263))
{var arg__6543__auto___9265 = cljs.core._nth.call(null,chunk__7832_9262,i__7834_9264);a__6542__auto__.push(arg__6543__auto___9265);
{
var G__9266 = seq__7831_9261;
var G__9267 = chunk__7832_9262;
var G__9268 = count__7833_9263;
var G__9269 = (i__7834_9264 + 1);
seq__7831_9261 = G__9266;
chunk__7832_9262 = G__9267;
count__7833_9263 = G__9268;
i__7834_9264 = G__9269;
continue;
}
} else
{var temp__4092__auto___9270 = cljs.core.seq.call(null,seq__7831_9261);if(temp__4092__auto___9270)
{var seq__7831_9271__$1 = temp__4092__auto___9270;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7831_9271__$1))
{var c__5632__auto___9272 = cljs.core.chunk_first.call(null,seq__7831_9271__$1);{
var G__9273 = cljs.core.chunk_rest.call(null,seq__7831_9271__$1);
var G__9274 = c__5632__auto___9272;
var G__9275 = cljs.core.count.call(null,c__5632__auto___9272);
var G__9276 = 0;
seq__7831_9261 = G__9273;
chunk__7832_9262 = G__9274;
count__7833_9263 = G__9275;
i__7834_9264 = G__9276;
continue;
}
} else
{var arg__6543__auto___9277 = cljs.core.first.call(null,seq__7831_9271__$1);a__6542__auto__.push(arg__6543__auto___9277);
{
var G__9278 = cljs.core.next.call(null,seq__7831_9271__$1);
var G__9279 = null;
var G__9280 = 0;
var G__9281 = 0;
seq__7831_9261 = G__9278;
chunk__7832_9262 = G__9279;
count__7833_9263 = G__9280;
i__7834_9264 = G__9281;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.figure.apply(null,a__6542__auto__);
};
var figure = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return figure__delegate.call(this,args__6541__auto__);};
figure.cljs$lang$maxFixedArity = 0;
figure.cljs$lang$applyTo = (function (arglist__9282){
var args__6541__auto__ = cljs.core.seq(arglist__9282);
return figure__delegate(args__6541__auto__);
});
figure.cljs$core$IFn$_invoke$arity$variadic = figure__delegate;
return figure;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.footer = (function() { 
var footer__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__7839_9283 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__7840_9284 = null;var count__7841_9285 = 0;var i__7842_9286 = 0;while(true){
if((i__7842_9286 < count__7841_9285))
{var arg__6543__auto___9287 = cljs.core._nth.call(null,chunk__7840_9284,i__7842_9286);a__6542__auto__.push(arg__6543__auto___9287);
{
var G__9288 = seq__7839_9283;
var G__9289 = chunk__7840_9284;
var G__9290 = count__7841_9285;
var G__9291 = (i__7842_9286 + 1);
seq__7839_9283 = G__9288;
chunk__7840_9284 = G__9289;
count__7841_9285 = G__9290;
i__7842_9286 = G__9291;
continue;
}
} else
{var temp__4092__auto___9292 = cljs.core.seq.call(null,seq__7839_9283);if(temp__4092__auto___9292)
{var seq__7839_9293__$1 = temp__4092__auto___9292;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7839_9293__$1))
{var c__5632__auto___9294 = cljs.core.chunk_first.call(null,seq__7839_9293__$1);{
var G__9295 = cljs.core.chunk_rest.call(null,seq__7839_9293__$1);
var G__9296 = c__5632__auto___9294;
var G__9297 = cljs.core.count.call(null,c__5632__auto___9294);
var G__9298 = 0;
seq__7839_9283 = G__9295;
chunk__7840_9284 = G__9296;
count__7841_9285 = G__9297;
i__7842_9286 = G__9298;
continue;
}
} else
{var arg__6543__auto___9299 = cljs.core.first.call(null,seq__7839_9293__$1);a__6542__auto__.push(arg__6543__auto___9299);
{
var G__9300 = cljs.core.next.call(null,seq__7839_9293__$1);
var G__9301 = null;
var G__9302 = 0;
var G__9303 = 0;
seq__7839_9283 = G__9300;
chunk__7840_9284 = G__9301;
count__7841_9285 = G__9302;
i__7842_9286 = G__9303;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.footer.apply(null,a__6542__auto__);
};
var footer = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return footer__delegate.call(this,args__6541__auto__);};
footer.cljs$lang$maxFixedArity = 0;
footer.cljs$lang$applyTo = (function (arglist__9304){
var args__6541__auto__ = cljs.core.seq(arglist__9304);
return footer__delegate(args__6541__auto__);
});
footer.cljs$core$IFn$_invoke$arity$variadic = footer__delegate;
return footer;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.form = (function() { 
var form__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__7847_9305 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__7848_9306 = null;var count__7849_9307 = 0;var i__7850_9308 = 0;while(true){
if((i__7850_9308 < count__7849_9307))
{var arg__6543__auto___9309 = cljs.core._nth.call(null,chunk__7848_9306,i__7850_9308);a__6542__auto__.push(arg__6543__auto___9309);
{
var G__9310 = seq__7847_9305;
var G__9311 = chunk__7848_9306;
var G__9312 = count__7849_9307;
var G__9313 = (i__7850_9308 + 1);
seq__7847_9305 = G__9310;
chunk__7848_9306 = G__9311;
count__7849_9307 = G__9312;
i__7850_9308 = G__9313;
continue;
}
} else
{var temp__4092__auto___9314 = cljs.core.seq.call(null,seq__7847_9305);if(temp__4092__auto___9314)
{var seq__7847_9315__$1 = temp__4092__auto___9314;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7847_9315__$1))
{var c__5632__auto___9316 = cljs.core.chunk_first.call(null,seq__7847_9315__$1);{
var G__9317 = cljs.core.chunk_rest.call(null,seq__7847_9315__$1);
var G__9318 = c__5632__auto___9316;
var G__9319 = cljs.core.count.call(null,c__5632__auto___9316);
var G__9320 = 0;
seq__7847_9305 = G__9317;
chunk__7848_9306 = G__9318;
count__7849_9307 = G__9319;
i__7850_9308 = G__9320;
continue;
}
} else
{var arg__6543__auto___9321 = cljs.core.first.call(null,seq__7847_9315__$1);a__6542__auto__.push(arg__6543__auto___9321);
{
var G__9322 = cljs.core.next.call(null,seq__7847_9315__$1);
var G__9323 = null;
var G__9324 = 0;
var G__9325 = 0;
seq__7847_9305 = G__9322;
chunk__7848_9306 = G__9323;
count__7849_9307 = G__9324;
i__7850_9308 = G__9325;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.form.apply(null,a__6542__auto__);
};
var form = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return form__delegate.call(this,args__6541__auto__);};
form.cljs$lang$maxFixedArity = 0;
form.cljs$lang$applyTo = (function (arglist__9326){
var args__6541__auto__ = cljs.core.seq(arglist__9326);
return form__delegate(args__6541__auto__);
});
form.cljs$core$IFn$_invoke$arity$variadic = form__delegate;
return form;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h1 = (function() { 
var h1__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__7855_9327 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__7856_9328 = null;var count__7857_9329 = 0;var i__7858_9330 = 0;while(true){
if((i__7858_9330 < count__7857_9329))
{var arg__6543__auto___9331 = cljs.core._nth.call(null,chunk__7856_9328,i__7858_9330);a__6542__auto__.push(arg__6543__auto___9331);
{
var G__9332 = seq__7855_9327;
var G__9333 = chunk__7856_9328;
var G__9334 = count__7857_9329;
var G__9335 = (i__7858_9330 + 1);
seq__7855_9327 = G__9332;
chunk__7856_9328 = G__9333;
count__7857_9329 = G__9334;
i__7858_9330 = G__9335;
continue;
}
} else
{var temp__4092__auto___9336 = cljs.core.seq.call(null,seq__7855_9327);if(temp__4092__auto___9336)
{var seq__7855_9337__$1 = temp__4092__auto___9336;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7855_9337__$1))
{var c__5632__auto___9338 = cljs.core.chunk_first.call(null,seq__7855_9337__$1);{
var G__9339 = cljs.core.chunk_rest.call(null,seq__7855_9337__$1);
var G__9340 = c__5632__auto___9338;
var G__9341 = cljs.core.count.call(null,c__5632__auto___9338);
var G__9342 = 0;
seq__7855_9327 = G__9339;
chunk__7856_9328 = G__9340;
count__7857_9329 = G__9341;
i__7858_9330 = G__9342;
continue;
}
} else
{var arg__6543__auto___9343 = cljs.core.first.call(null,seq__7855_9337__$1);a__6542__auto__.push(arg__6543__auto___9343);
{
var G__9344 = cljs.core.next.call(null,seq__7855_9337__$1);
var G__9345 = null;
var G__9346 = 0;
var G__9347 = 0;
seq__7855_9327 = G__9344;
chunk__7856_9328 = G__9345;
count__7857_9329 = G__9346;
i__7858_9330 = G__9347;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h1.apply(null,a__6542__auto__);
};
var h1 = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h1__delegate.call(this,args__6541__auto__);};
h1.cljs$lang$maxFixedArity = 0;
h1.cljs$lang$applyTo = (function (arglist__9348){
var args__6541__auto__ = cljs.core.seq(arglist__9348);
return h1__delegate(args__6541__auto__);
});
h1.cljs$core$IFn$_invoke$arity$variadic = h1__delegate;
return h1;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h2 = (function() { 
var h2__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__7863_9349 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__7864_9350 = null;var count__7865_9351 = 0;var i__7866_9352 = 0;while(true){
if((i__7866_9352 < count__7865_9351))
{var arg__6543__auto___9353 = cljs.core._nth.call(null,chunk__7864_9350,i__7866_9352);a__6542__auto__.push(arg__6543__auto___9353);
{
var G__9354 = seq__7863_9349;
var G__9355 = chunk__7864_9350;
var G__9356 = count__7865_9351;
var G__9357 = (i__7866_9352 + 1);
seq__7863_9349 = G__9354;
chunk__7864_9350 = G__9355;
count__7865_9351 = G__9356;
i__7866_9352 = G__9357;
continue;
}
} else
{var temp__4092__auto___9358 = cljs.core.seq.call(null,seq__7863_9349);if(temp__4092__auto___9358)
{var seq__7863_9359__$1 = temp__4092__auto___9358;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7863_9359__$1))
{var c__5632__auto___9360 = cljs.core.chunk_first.call(null,seq__7863_9359__$1);{
var G__9361 = cljs.core.chunk_rest.call(null,seq__7863_9359__$1);
var G__9362 = c__5632__auto___9360;
var G__9363 = cljs.core.count.call(null,c__5632__auto___9360);
var G__9364 = 0;
seq__7863_9349 = G__9361;
chunk__7864_9350 = G__9362;
count__7865_9351 = G__9363;
i__7866_9352 = G__9364;
continue;
}
} else
{var arg__6543__auto___9365 = cljs.core.first.call(null,seq__7863_9359__$1);a__6542__auto__.push(arg__6543__auto___9365);
{
var G__9366 = cljs.core.next.call(null,seq__7863_9359__$1);
var G__9367 = null;
var G__9368 = 0;
var G__9369 = 0;
seq__7863_9349 = G__9366;
chunk__7864_9350 = G__9367;
count__7865_9351 = G__9368;
i__7866_9352 = G__9369;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h2.apply(null,a__6542__auto__);
};
var h2 = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h2__delegate.call(this,args__6541__auto__);};
h2.cljs$lang$maxFixedArity = 0;
h2.cljs$lang$applyTo = (function (arglist__9370){
var args__6541__auto__ = cljs.core.seq(arglist__9370);
return h2__delegate(args__6541__auto__);
});
h2.cljs$core$IFn$_invoke$arity$variadic = h2__delegate;
return h2;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h3 = (function() { 
var h3__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__7871_9371 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__7872_9372 = null;var count__7873_9373 = 0;var i__7874_9374 = 0;while(true){
if((i__7874_9374 < count__7873_9373))
{var arg__6543__auto___9375 = cljs.core._nth.call(null,chunk__7872_9372,i__7874_9374);a__6542__auto__.push(arg__6543__auto___9375);
{
var G__9376 = seq__7871_9371;
var G__9377 = chunk__7872_9372;
var G__9378 = count__7873_9373;
var G__9379 = (i__7874_9374 + 1);
seq__7871_9371 = G__9376;
chunk__7872_9372 = G__9377;
count__7873_9373 = G__9378;
i__7874_9374 = G__9379;
continue;
}
} else
{var temp__4092__auto___9380 = cljs.core.seq.call(null,seq__7871_9371);if(temp__4092__auto___9380)
{var seq__7871_9381__$1 = temp__4092__auto___9380;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7871_9381__$1))
{var c__5632__auto___9382 = cljs.core.chunk_first.call(null,seq__7871_9381__$1);{
var G__9383 = cljs.core.chunk_rest.call(null,seq__7871_9381__$1);
var G__9384 = c__5632__auto___9382;
var G__9385 = cljs.core.count.call(null,c__5632__auto___9382);
var G__9386 = 0;
seq__7871_9371 = G__9383;
chunk__7872_9372 = G__9384;
count__7873_9373 = G__9385;
i__7874_9374 = G__9386;
continue;
}
} else
{var arg__6543__auto___9387 = cljs.core.first.call(null,seq__7871_9381__$1);a__6542__auto__.push(arg__6543__auto___9387);
{
var G__9388 = cljs.core.next.call(null,seq__7871_9381__$1);
var G__9389 = null;
var G__9390 = 0;
var G__9391 = 0;
seq__7871_9371 = G__9388;
chunk__7872_9372 = G__9389;
count__7873_9373 = G__9390;
i__7874_9374 = G__9391;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h3.apply(null,a__6542__auto__);
};
var h3 = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h3__delegate.call(this,args__6541__auto__);};
h3.cljs$lang$maxFixedArity = 0;
h3.cljs$lang$applyTo = (function (arglist__9392){
var args__6541__auto__ = cljs.core.seq(arglist__9392);
return h3__delegate(args__6541__auto__);
});
h3.cljs$core$IFn$_invoke$arity$variadic = h3__delegate;
return h3;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h4 = (function() { 
var h4__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__7879_9393 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__7880_9394 = null;var count__7881_9395 = 0;var i__7882_9396 = 0;while(true){
if((i__7882_9396 < count__7881_9395))
{var arg__6543__auto___9397 = cljs.core._nth.call(null,chunk__7880_9394,i__7882_9396);a__6542__auto__.push(arg__6543__auto___9397);
{
var G__9398 = seq__7879_9393;
var G__9399 = chunk__7880_9394;
var G__9400 = count__7881_9395;
var G__9401 = (i__7882_9396 + 1);
seq__7879_9393 = G__9398;
chunk__7880_9394 = G__9399;
count__7881_9395 = G__9400;
i__7882_9396 = G__9401;
continue;
}
} else
{var temp__4092__auto___9402 = cljs.core.seq.call(null,seq__7879_9393);if(temp__4092__auto___9402)
{var seq__7879_9403__$1 = temp__4092__auto___9402;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7879_9403__$1))
{var c__5632__auto___9404 = cljs.core.chunk_first.call(null,seq__7879_9403__$1);{
var G__9405 = cljs.core.chunk_rest.call(null,seq__7879_9403__$1);
var G__9406 = c__5632__auto___9404;
var G__9407 = cljs.core.count.call(null,c__5632__auto___9404);
var G__9408 = 0;
seq__7879_9393 = G__9405;
chunk__7880_9394 = G__9406;
count__7881_9395 = G__9407;
i__7882_9396 = G__9408;
continue;
}
} else
{var arg__6543__auto___9409 = cljs.core.first.call(null,seq__7879_9403__$1);a__6542__auto__.push(arg__6543__auto___9409);
{
var G__9410 = cljs.core.next.call(null,seq__7879_9403__$1);
var G__9411 = null;
var G__9412 = 0;
var G__9413 = 0;
seq__7879_9393 = G__9410;
chunk__7880_9394 = G__9411;
count__7881_9395 = G__9412;
i__7882_9396 = G__9413;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h4.apply(null,a__6542__auto__);
};
var h4 = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h4__delegate.call(this,args__6541__auto__);};
h4.cljs$lang$maxFixedArity = 0;
h4.cljs$lang$applyTo = (function (arglist__9414){
var args__6541__auto__ = cljs.core.seq(arglist__9414);
return h4__delegate(args__6541__auto__);
});
h4.cljs$core$IFn$_invoke$arity$variadic = h4__delegate;
return h4;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h5 = (function() { 
var h5__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__7887_9415 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__7888_9416 = null;var count__7889_9417 = 0;var i__7890_9418 = 0;while(true){
if((i__7890_9418 < count__7889_9417))
{var arg__6543__auto___9419 = cljs.core._nth.call(null,chunk__7888_9416,i__7890_9418);a__6542__auto__.push(arg__6543__auto___9419);
{
var G__9420 = seq__7887_9415;
var G__9421 = chunk__7888_9416;
var G__9422 = count__7889_9417;
var G__9423 = (i__7890_9418 + 1);
seq__7887_9415 = G__9420;
chunk__7888_9416 = G__9421;
count__7889_9417 = G__9422;
i__7890_9418 = G__9423;
continue;
}
} else
{var temp__4092__auto___9424 = cljs.core.seq.call(null,seq__7887_9415);if(temp__4092__auto___9424)
{var seq__7887_9425__$1 = temp__4092__auto___9424;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7887_9425__$1))
{var c__5632__auto___9426 = cljs.core.chunk_first.call(null,seq__7887_9425__$1);{
var G__9427 = cljs.core.chunk_rest.call(null,seq__7887_9425__$1);
var G__9428 = c__5632__auto___9426;
var G__9429 = cljs.core.count.call(null,c__5632__auto___9426);
var G__9430 = 0;
seq__7887_9415 = G__9427;
chunk__7888_9416 = G__9428;
count__7889_9417 = G__9429;
i__7890_9418 = G__9430;
continue;
}
} else
{var arg__6543__auto___9431 = cljs.core.first.call(null,seq__7887_9425__$1);a__6542__auto__.push(arg__6543__auto___9431);
{
var G__9432 = cljs.core.next.call(null,seq__7887_9425__$1);
var G__9433 = null;
var G__9434 = 0;
var G__9435 = 0;
seq__7887_9415 = G__9432;
chunk__7888_9416 = G__9433;
count__7889_9417 = G__9434;
i__7890_9418 = G__9435;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h5.apply(null,a__6542__auto__);
};
var h5 = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h5__delegate.call(this,args__6541__auto__);};
h5.cljs$lang$maxFixedArity = 0;
h5.cljs$lang$applyTo = (function (arglist__9436){
var args__6541__auto__ = cljs.core.seq(arglist__9436);
return h5__delegate(args__6541__auto__);
});
h5.cljs$core$IFn$_invoke$arity$variadic = h5__delegate;
return h5;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h6 = (function() { 
var h6__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__7895_9437 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__7896_9438 = null;var count__7897_9439 = 0;var i__7898_9440 = 0;while(true){
if((i__7898_9440 < count__7897_9439))
{var arg__6543__auto___9441 = cljs.core._nth.call(null,chunk__7896_9438,i__7898_9440);a__6542__auto__.push(arg__6543__auto___9441);
{
var G__9442 = seq__7895_9437;
var G__9443 = chunk__7896_9438;
var G__9444 = count__7897_9439;
var G__9445 = (i__7898_9440 + 1);
seq__7895_9437 = G__9442;
chunk__7896_9438 = G__9443;
count__7897_9439 = G__9444;
i__7898_9440 = G__9445;
continue;
}
} else
{var temp__4092__auto___9446 = cljs.core.seq.call(null,seq__7895_9437);if(temp__4092__auto___9446)
{var seq__7895_9447__$1 = temp__4092__auto___9446;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7895_9447__$1))
{var c__5632__auto___9448 = cljs.core.chunk_first.call(null,seq__7895_9447__$1);{
var G__9449 = cljs.core.chunk_rest.call(null,seq__7895_9447__$1);
var G__9450 = c__5632__auto___9448;
var G__9451 = cljs.core.count.call(null,c__5632__auto___9448);
var G__9452 = 0;
seq__7895_9437 = G__9449;
chunk__7896_9438 = G__9450;
count__7897_9439 = G__9451;
i__7898_9440 = G__9452;
continue;
}
} else
{var arg__6543__auto___9453 = cljs.core.first.call(null,seq__7895_9447__$1);a__6542__auto__.push(arg__6543__auto___9453);
{
var G__9454 = cljs.core.next.call(null,seq__7895_9447__$1);
var G__9455 = null;
var G__9456 = 0;
var G__9457 = 0;
seq__7895_9437 = G__9454;
chunk__7896_9438 = G__9455;
count__7897_9439 = G__9456;
i__7898_9440 = G__9457;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h6.apply(null,a__6542__auto__);
};
var h6 = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h6__delegate.call(this,args__6541__auto__);};
h6.cljs$lang$maxFixedArity = 0;
h6.cljs$lang$applyTo = (function (arglist__9458){
var args__6541__auto__ = cljs.core.seq(arglist__9458);
return h6__delegate(args__6541__auto__);
});
h6.cljs$core$IFn$_invoke$arity$variadic = h6__delegate;
return h6;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.head = (function() { 
var head__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__7903_9459 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__7904_9460 = null;var count__7905_9461 = 0;var i__7906_9462 = 0;while(true){
if((i__7906_9462 < count__7905_9461))
{var arg__6543__auto___9463 = cljs.core._nth.call(null,chunk__7904_9460,i__7906_9462);a__6542__auto__.push(arg__6543__auto___9463);
{
var G__9464 = seq__7903_9459;
var G__9465 = chunk__7904_9460;
var G__9466 = count__7905_9461;
var G__9467 = (i__7906_9462 + 1);
seq__7903_9459 = G__9464;
chunk__7904_9460 = G__9465;
count__7905_9461 = G__9466;
i__7906_9462 = G__9467;
continue;
}
} else
{var temp__4092__auto___9468 = cljs.core.seq.call(null,seq__7903_9459);if(temp__4092__auto___9468)
{var seq__7903_9469__$1 = temp__4092__auto___9468;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7903_9469__$1))
{var c__5632__auto___9470 = cljs.core.chunk_first.call(null,seq__7903_9469__$1);{
var G__9471 = cljs.core.chunk_rest.call(null,seq__7903_9469__$1);
var G__9472 = c__5632__auto___9470;
var G__9473 = cljs.core.count.call(null,c__5632__auto___9470);
var G__9474 = 0;
seq__7903_9459 = G__9471;
chunk__7904_9460 = G__9472;
count__7905_9461 = G__9473;
i__7906_9462 = G__9474;
continue;
}
} else
{var arg__6543__auto___9475 = cljs.core.first.call(null,seq__7903_9469__$1);a__6542__auto__.push(arg__6543__auto___9475);
{
var G__9476 = cljs.core.next.call(null,seq__7903_9469__$1);
var G__9477 = null;
var G__9478 = 0;
var G__9479 = 0;
seq__7903_9459 = G__9476;
chunk__7904_9460 = G__9477;
count__7905_9461 = G__9478;
i__7906_9462 = G__9479;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.head.apply(null,a__6542__auto__);
};
var head = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return head__delegate.call(this,args__6541__auto__);};
head.cljs$lang$maxFixedArity = 0;
head.cljs$lang$applyTo = (function (arglist__9480){
var args__6541__auto__ = cljs.core.seq(arglist__9480);
return head__delegate(args__6541__auto__);
});
head.cljs$core$IFn$_invoke$arity$variadic = head__delegate;
return head;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.header = (function() { 
var header__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__7911_9481 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__7912_9482 = null;var count__7913_9483 = 0;var i__7914_9484 = 0;while(true){
if((i__7914_9484 < count__7913_9483))
{var arg__6543__auto___9485 = cljs.core._nth.call(null,chunk__7912_9482,i__7914_9484);a__6542__auto__.push(arg__6543__auto___9485);
{
var G__9486 = seq__7911_9481;
var G__9487 = chunk__7912_9482;
var G__9488 = count__7913_9483;
var G__9489 = (i__7914_9484 + 1);
seq__7911_9481 = G__9486;
chunk__7912_9482 = G__9487;
count__7913_9483 = G__9488;
i__7914_9484 = G__9489;
continue;
}
} else
{var temp__4092__auto___9490 = cljs.core.seq.call(null,seq__7911_9481);if(temp__4092__auto___9490)
{var seq__7911_9491__$1 = temp__4092__auto___9490;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7911_9491__$1))
{var c__5632__auto___9492 = cljs.core.chunk_first.call(null,seq__7911_9491__$1);{
var G__9493 = cljs.core.chunk_rest.call(null,seq__7911_9491__$1);
var G__9494 = c__5632__auto___9492;
var G__9495 = cljs.core.count.call(null,c__5632__auto___9492);
var G__9496 = 0;
seq__7911_9481 = G__9493;
chunk__7912_9482 = G__9494;
count__7913_9483 = G__9495;
i__7914_9484 = G__9496;
continue;
}
} else
{var arg__6543__auto___9497 = cljs.core.first.call(null,seq__7911_9491__$1);a__6542__auto__.push(arg__6543__auto___9497);
{
var G__9498 = cljs.core.next.call(null,seq__7911_9491__$1);
var G__9499 = null;
var G__9500 = 0;
var G__9501 = 0;
seq__7911_9481 = G__9498;
chunk__7912_9482 = G__9499;
count__7913_9483 = G__9500;
i__7914_9484 = G__9501;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.header.apply(null,a__6542__auto__);
};
var header = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return header__delegate.call(this,args__6541__auto__);};
header.cljs$lang$maxFixedArity = 0;
header.cljs$lang$applyTo = (function (arglist__9502){
var args__6541__auto__ = cljs.core.seq(arglist__9502);
return header__delegate(args__6541__auto__);
});
header.cljs$core$IFn$_invoke$arity$variadic = header__delegate;
return header;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.hr = (function() { 
var hr__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__7919_9503 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__7920_9504 = null;var count__7921_9505 = 0;var i__7922_9506 = 0;while(true){
if((i__7922_9506 < count__7921_9505))
{var arg__6543__auto___9507 = cljs.core._nth.call(null,chunk__7920_9504,i__7922_9506);a__6542__auto__.push(arg__6543__auto___9507);
{
var G__9508 = seq__7919_9503;
var G__9509 = chunk__7920_9504;
var G__9510 = count__7921_9505;
var G__9511 = (i__7922_9506 + 1);
seq__7919_9503 = G__9508;
chunk__7920_9504 = G__9509;
count__7921_9505 = G__9510;
i__7922_9506 = G__9511;
continue;
}
} else
{var temp__4092__auto___9512 = cljs.core.seq.call(null,seq__7919_9503);if(temp__4092__auto___9512)
{var seq__7919_9513__$1 = temp__4092__auto___9512;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7919_9513__$1))
{var c__5632__auto___9514 = cljs.core.chunk_first.call(null,seq__7919_9513__$1);{
var G__9515 = cljs.core.chunk_rest.call(null,seq__7919_9513__$1);
var G__9516 = c__5632__auto___9514;
var G__9517 = cljs.core.count.call(null,c__5632__auto___9514);
var G__9518 = 0;
seq__7919_9503 = G__9515;
chunk__7920_9504 = G__9516;
count__7921_9505 = G__9517;
i__7922_9506 = G__9518;
continue;
}
} else
{var arg__6543__auto___9519 = cljs.core.first.call(null,seq__7919_9513__$1);a__6542__auto__.push(arg__6543__auto___9519);
{
var G__9520 = cljs.core.next.call(null,seq__7919_9513__$1);
var G__9521 = null;
var G__9522 = 0;
var G__9523 = 0;
seq__7919_9503 = G__9520;
chunk__7920_9504 = G__9521;
count__7921_9505 = G__9522;
i__7922_9506 = G__9523;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.hr.apply(null,a__6542__auto__);
};
var hr = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return hr__delegate.call(this,args__6541__auto__);};
hr.cljs$lang$maxFixedArity = 0;
hr.cljs$lang$applyTo = (function (arglist__9524){
var args__6541__auto__ = cljs.core.seq(arglist__9524);
return hr__delegate(args__6541__auto__);
});
hr.cljs$core$IFn$_invoke$arity$variadic = hr__delegate;
return hr;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.html = (function() { 
var html__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__7927_9525 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__7928_9526 = null;var count__7929_9527 = 0;var i__7930_9528 = 0;while(true){
if((i__7930_9528 < count__7929_9527))
{var arg__6543__auto___9529 = cljs.core._nth.call(null,chunk__7928_9526,i__7930_9528);a__6542__auto__.push(arg__6543__auto___9529);
{
var G__9530 = seq__7927_9525;
var G__9531 = chunk__7928_9526;
var G__9532 = count__7929_9527;
var G__9533 = (i__7930_9528 + 1);
seq__7927_9525 = G__9530;
chunk__7928_9526 = G__9531;
count__7929_9527 = G__9532;
i__7930_9528 = G__9533;
continue;
}
} else
{var temp__4092__auto___9534 = cljs.core.seq.call(null,seq__7927_9525);if(temp__4092__auto___9534)
{var seq__7927_9535__$1 = temp__4092__auto___9534;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7927_9535__$1))
{var c__5632__auto___9536 = cljs.core.chunk_first.call(null,seq__7927_9535__$1);{
var G__9537 = cljs.core.chunk_rest.call(null,seq__7927_9535__$1);
var G__9538 = c__5632__auto___9536;
var G__9539 = cljs.core.count.call(null,c__5632__auto___9536);
var G__9540 = 0;
seq__7927_9525 = G__9537;
chunk__7928_9526 = G__9538;
count__7929_9527 = G__9539;
i__7930_9528 = G__9540;
continue;
}
} else
{var arg__6543__auto___9541 = cljs.core.first.call(null,seq__7927_9535__$1);a__6542__auto__.push(arg__6543__auto___9541);
{
var G__9542 = cljs.core.next.call(null,seq__7927_9535__$1);
var G__9543 = null;
var G__9544 = 0;
var G__9545 = 0;
seq__7927_9525 = G__9542;
chunk__7928_9526 = G__9543;
count__7929_9527 = G__9544;
i__7930_9528 = G__9545;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.html.apply(null,a__6542__auto__);
};
var html = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return html__delegate.call(this,args__6541__auto__);};
html.cljs$lang$maxFixedArity = 0;
html.cljs$lang$applyTo = (function (arglist__9546){
var args__6541__auto__ = cljs.core.seq(arglist__9546);
return html__delegate(args__6541__auto__);
});
html.cljs$core$IFn$_invoke$arity$variadic = html__delegate;
return html;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.i = (function() { 
var i__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__7935_9547 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__7936_9548 = null;var count__7937_9549 = 0;var i__7938_9550 = 0;while(true){
if((i__7938_9550 < count__7937_9549))
{var arg__6543__auto___9551 = cljs.core._nth.call(null,chunk__7936_9548,i__7938_9550);a__6542__auto__.push(arg__6543__auto___9551);
{
var G__9552 = seq__7935_9547;
var G__9553 = chunk__7936_9548;
var G__9554 = count__7937_9549;
var G__9555 = (i__7938_9550 + 1);
seq__7935_9547 = G__9552;
chunk__7936_9548 = G__9553;
count__7937_9549 = G__9554;
i__7938_9550 = G__9555;
continue;
}
} else
{var temp__4092__auto___9556 = cljs.core.seq.call(null,seq__7935_9547);if(temp__4092__auto___9556)
{var seq__7935_9557__$1 = temp__4092__auto___9556;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7935_9557__$1))
{var c__5632__auto___9558 = cljs.core.chunk_first.call(null,seq__7935_9557__$1);{
var G__9559 = cljs.core.chunk_rest.call(null,seq__7935_9557__$1);
var G__9560 = c__5632__auto___9558;
var G__9561 = cljs.core.count.call(null,c__5632__auto___9558);
var G__9562 = 0;
seq__7935_9547 = G__9559;
chunk__7936_9548 = G__9560;
count__7937_9549 = G__9561;
i__7938_9550 = G__9562;
continue;
}
} else
{var arg__6543__auto___9563 = cljs.core.first.call(null,seq__7935_9557__$1);a__6542__auto__.push(arg__6543__auto___9563);
{
var G__9564 = cljs.core.next.call(null,seq__7935_9557__$1);
var G__9565 = null;
var G__9566 = 0;
var G__9567 = 0;
seq__7935_9547 = G__9564;
chunk__7936_9548 = G__9565;
count__7937_9549 = G__9566;
i__7938_9550 = G__9567;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.i.apply(null,a__6542__auto__);
};
var i = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return i__delegate.call(this,args__6541__auto__);};
i.cljs$lang$maxFixedArity = 0;
i.cljs$lang$applyTo = (function (arglist__9568){
var args__6541__auto__ = cljs.core.seq(arglist__9568);
return i__delegate(args__6541__auto__);
});
i.cljs$core$IFn$_invoke$arity$variadic = i__delegate;
return i;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.iframe = (function() { 
var iframe__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__7943_9569 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__7944_9570 = null;var count__7945_9571 = 0;var i__7946_9572 = 0;while(true){
if((i__7946_9572 < count__7945_9571))
{var arg__6543__auto___9573 = cljs.core._nth.call(null,chunk__7944_9570,i__7946_9572);a__6542__auto__.push(arg__6543__auto___9573);
{
var G__9574 = seq__7943_9569;
var G__9575 = chunk__7944_9570;
var G__9576 = count__7945_9571;
var G__9577 = (i__7946_9572 + 1);
seq__7943_9569 = G__9574;
chunk__7944_9570 = G__9575;
count__7945_9571 = G__9576;
i__7946_9572 = G__9577;
continue;
}
} else
{var temp__4092__auto___9578 = cljs.core.seq.call(null,seq__7943_9569);if(temp__4092__auto___9578)
{var seq__7943_9579__$1 = temp__4092__auto___9578;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7943_9579__$1))
{var c__5632__auto___9580 = cljs.core.chunk_first.call(null,seq__7943_9579__$1);{
var G__9581 = cljs.core.chunk_rest.call(null,seq__7943_9579__$1);
var G__9582 = c__5632__auto___9580;
var G__9583 = cljs.core.count.call(null,c__5632__auto___9580);
var G__9584 = 0;
seq__7943_9569 = G__9581;
chunk__7944_9570 = G__9582;
count__7945_9571 = G__9583;
i__7946_9572 = G__9584;
continue;
}
} else
{var arg__6543__auto___9585 = cljs.core.first.call(null,seq__7943_9579__$1);a__6542__auto__.push(arg__6543__auto___9585);
{
var G__9586 = cljs.core.next.call(null,seq__7943_9579__$1);
var G__9587 = null;
var G__9588 = 0;
var G__9589 = 0;
seq__7943_9569 = G__9586;
chunk__7944_9570 = G__9587;
count__7945_9571 = G__9588;
i__7946_9572 = G__9589;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.iframe.apply(null,a__6542__auto__);
};
var iframe = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return iframe__delegate.call(this,args__6541__auto__);};
iframe.cljs$lang$maxFixedArity = 0;
iframe.cljs$lang$applyTo = (function (arglist__9590){
var args__6541__auto__ = cljs.core.seq(arglist__9590);
return iframe__delegate(args__6541__auto__);
});
iframe.cljs$core$IFn$_invoke$arity$variadic = iframe__delegate;
return iframe;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.img = (function() { 
var img__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__7951_9591 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__7952_9592 = null;var count__7953_9593 = 0;var i__7954_9594 = 0;while(true){
if((i__7954_9594 < count__7953_9593))
{var arg__6543__auto___9595 = cljs.core._nth.call(null,chunk__7952_9592,i__7954_9594);a__6542__auto__.push(arg__6543__auto___9595);
{
var G__9596 = seq__7951_9591;
var G__9597 = chunk__7952_9592;
var G__9598 = count__7953_9593;
var G__9599 = (i__7954_9594 + 1);
seq__7951_9591 = G__9596;
chunk__7952_9592 = G__9597;
count__7953_9593 = G__9598;
i__7954_9594 = G__9599;
continue;
}
} else
{var temp__4092__auto___9600 = cljs.core.seq.call(null,seq__7951_9591);if(temp__4092__auto___9600)
{var seq__7951_9601__$1 = temp__4092__auto___9600;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7951_9601__$1))
{var c__5632__auto___9602 = cljs.core.chunk_first.call(null,seq__7951_9601__$1);{
var G__9603 = cljs.core.chunk_rest.call(null,seq__7951_9601__$1);
var G__9604 = c__5632__auto___9602;
var G__9605 = cljs.core.count.call(null,c__5632__auto___9602);
var G__9606 = 0;
seq__7951_9591 = G__9603;
chunk__7952_9592 = G__9604;
count__7953_9593 = G__9605;
i__7954_9594 = G__9606;
continue;
}
} else
{var arg__6543__auto___9607 = cljs.core.first.call(null,seq__7951_9601__$1);a__6542__auto__.push(arg__6543__auto___9607);
{
var G__9608 = cljs.core.next.call(null,seq__7951_9601__$1);
var G__9609 = null;
var G__9610 = 0;
var G__9611 = 0;
seq__7951_9591 = G__9608;
chunk__7952_9592 = G__9609;
count__7953_9593 = G__9610;
i__7954_9594 = G__9611;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.img.apply(null,a__6542__auto__);
};
var img = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return img__delegate.call(this,args__6541__auto__);};
img.cljs$lang$maxFixedArity = 0;
img.cljs$lang$applyTo = (function (arglist__9612){
var args__6541__auto__ = cljs.core.seq(arglist__9612);
return img__delegate(args__6541__auto__);
});
img.cljs$core$IFn$_invoke$arity$variadic = img__delegate;
return img;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.input = (function() { 
var input__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__7959_9613 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__7960_9614 = null;var count__7961_9615 = 0;var i__7962_9616 = 0;while(true){
if((i__7962_9616 < count__7961_9615))
{var arg__6543__auto___9617 = cljs.core._nth.call(null,chunk__7960_9614,i__7962_9616);a__6542__auto__.push(arg__6543__auto___9617);
{
var G__9618 = seq__7959_9613;
var G__9619 = chunk__7960_9614;
var G__9620 = count__7961_9615;
var G__9621 = (i__7962_9616 + 1);
seq__7959_9613 = G__9618;
chunk__7960_9614 = G__9619;
count__7961_9615 = G__9620;
i__7962_9616 = G__9621;
continue;
}
} else
{var temp__4092__auto___9622 = cljs.core.seq.call(null,seq__7959_9613);if(temp__4092__auto___9622)
{var seq__7959_9623__$1 = temp__4092__auto___9622;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7959_9623__$1))
{var c__5632__auto___9624 = cljs.core.chunk_first.call(null,seq__7959_9623__$1);{
var G__9625 = cljs.core.chunk_rest.call(null,seq__7959_9623__$1);
var G__9626 = c__5632__auto___9624;
var G__9627 = cljs.core.count.call(null,c__5632__auto___9624);
var G__9628 = 0;
seq__7959_9613 = G__9625;
chunk__7960_9614 = G__9626;
count__7961_9615 = G__9627;
i__7962_9616 = G__9628;
continue;
}
} else
{var arg__6543__auto___9629 = cljs.core.first.call(null,seq__7959_9623__$1);a__6542__auto__.push(arg__6543__auto___9629);
{
var G__9630 = cljs.core.next.call(null,seq__7959_9623__$1);
var G__9631 = null;
var G__9632 = 0;
var G__9633 = 0;
seq__7959_9613 = G__9630;
chunk__7960_9614 = G__9631;
count__7961_9615 = G__9632;
i__7962_9616 = G__9633;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.input.apply(null,a__6542__auto__);
};
var input = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return input__delegate.call(this,args__6541__auto__);};
input.cljs$lang$maxFixedArity = 0;
input.cljs$lang$applyTo = (function (arglist__9634){
var args__6541__auto__ = cljs.core.seq(arglist__9634);
return input__delegate(args__6541__auto__);
});
input.cljs$core$IFn$_invoke$arity$variadic = input__delegate;
return input;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.ins = (function() { 
var ins__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__7967_9635 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__7968_9636 = null;var count__7969_9637 = 0;var i__7970_9638 = 0;while(true){
if((i__7970_9638 < count__7969_9637))
{var arg__6543__auto___9639 = cljs.core._nth.call(null,chunk__7968_9636,i__7970_9638);a__6542__auto__.push(arg__6543__auto___9639);
{
var G__9640 = seq__7967_9635;
var G__9641 = chunk__7968_9636;
var G__9642 = count__7969_9637;
var G__9643 = (i__7970_9638 + 1);
seq__7967_9635 = G__9640;
chunk__7968_9636 = G__9641;
count__7969_9637 = G__9642;
i__7970_9638 = G__9643;
continue;
}
} else
{var temp__4092__auto___9644 = cljs.core.seq.call(null,seq__7967_9635);if(temp__4092__auto___9644)
{var seq__7967_9645__$1 = temp__4092__auto___9644;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7967_9645__$1))
{var c__5632__auto___9646 = cljs.core.chunk_first.call(null,seq__7967_9645__$1);{
var G__9647 = cljs.core.chunk_rest.call(null,seq__7967_9645__$1);
var G__9648 = c__5632__auto___9646;
var G__9649 = cljs.core.count.call(null,c__5632__auto___9646);
var G__9650 = 0;
seq__7967_9635 = G__9647;
chunk__7968_9636 = G__9648;
count__7969_9637 = G__9649;
i__7970_9638 = G__9650;
continue;
}
} else
{var arg__6543__auto___9651 = cljs.core.first.call(null,seq__7967_9645__$1);a__6542__auto__.push(arg__6543__auto___9651);
{
var G__9652 = cljs.core.next.call(null,seq__7967_9645__$1);
var G__9653 = null;
var G__9654 = 0;
var G__9655 = 0;
seq__7967_9635 = G__9652;
chunk__7968_9636 = G__9653;
count__7969_9637 = G__9654;
i__7970_9638 = G__9655;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.ins.apply(null,a__6542__auto__);
};
var ins = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ins__delegate.call(this,args__6541__auto__);};
ins.cljs$lang$maxFixedArity = 0;
ins.cljs$lang$applyTo = (function (arglist__9656){
var args__6541__auto__ = cljs.core.seq(arglist__9656);
return ins__delegate(args__6541__auto__);
});
ins.cljs$core$IFn$_invoke$arity$variadic = ins__delegate;
return ins;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.kbd = (function() { 
var kbd__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__7975_9657 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__7976_9658 = null;var count__7977_9659 = 0;var i__7978_9660 = 0;while(true){
if((i__7978_9660 < count__7977_9659))
{var arg__6543__auto___9661 = cljs.core._nth.call(null,chunk__7976_9658,i__7978_9660);a__6542__auto__.push(arg__6543__auto___9661);
{
var G__9662 = seq__7975_9657;
var G__9663 = chunk__7976_9658;
var G__9664 = count__7977_9659;
var G__9665 = (i__7978_9660 + 1);
seq__7975_9657 = G__9662;
chunk__7976_9658 = G__9663;
count__7977_9659 = G__9664;
i__7978_9660 = G__9665;
continue;
}
} else
{var temp__4092__auto___9666 = cljs.core.seq.call(null,seq__7975_9657);if(temp__4092__auto___9666)
{var seq__7975_9667__$1 = temp__4092__auto___9666;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7975_9667__$1))
{var c__5632__auto___9668 = cljs.core.chunk_first.call(null,seq__7975_9667__$1);{
var G__9669 = cljs.core.chunk_rest.call(null,seq__7975_9667__$1);
var G__9670 = c__5632__auto___9668;
var G__9671 = cljs.core.count.call(null,c__5632__auto___9668);
var G__9672 = 0;
seq__7975_9657 = G__9669;
chunk__7976_9658 = G__9670;
count__7977_9659 = G__9671;
i__7978_9660 = G__9672;
continue;
}
} else
{var arg__6543__auto___9673 = cljs.core.first.call(null,seq__7975_9667__$1);a__6542__auto__.push(arg__6543__auto___9673);
{
var G__9674 = cljs.core.next.call(null,seq__7975_9667__$1);
var G__9675 = null;
var G__9676 = 0;
var G__9677 = 0;
seq__7975_9657 = G__9674;
chunk__7976_9658 = G__9675;
count__7977_9659 = G__9676;
i__7978_9660 = G__9677;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.kbd.apply(null,a__6542__auto__);
};
var kbd = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return kbd__delegate.call(this,args__6541__auto__);};
kbd.cljs$lang$maxFixedArity = 0;
kbd.cljs$lang$applyTo = (function (arglist__9678){
var args__6541__auto__ = cljs.core.seq(arglist__9678);
return kbd__delegate(args__6541__auto__);
});
kbd.cljs$core$IFn$_invoke$arity$variadic = kbd__delegate;
return kbd;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.keygen = (function() { 
var keygen__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__7983_9679 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__7984_9680 = null;var count__7985_9681 = 0;var i__7986_9682 = 0;while(true){
if((i__7986_9682 < count__7985_9681))
{var arg__6543__auto___9683 = cljs.core._nth.call(null,chunk__7984_9680,i__7986_9682);a__6542__auto__.push(arg__6543__auto___9683);
{
var G__9684 = seq__7983_9679;
var G__9685 = chunk__7984_9680;
var G__9686 = count__7985_9681;
var G__9687 = (i__7986_9682 + 1);
seq__7983_9679 = G__9684;
chunk__7984_9680 = G__9685;
count__7985_9681 = G__9686;
i__7986_9682 = G__9687;
continue;
}
} else
{var temp__4092__auto___9688 = cljs.core.seq.call(null,seq__7983_9679);if(temp__4092__auto___9688)
{var seq__7983_9689__$1 = temp__4092__auto___9688;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7983_9689__$1))
{var c__5632__auto___9690 = cljs.core.chunk_first.call(null,seq__7983_9689__$1);{
var G__9691 = cljs.core.chunk_rest.call(null,seq__7983_9689__$1);
var G__9692 = c__5632__auto___9690;
var G__9693 = cljs.core.count.call(null,c__5632__auto___9690);
var G__9694 = 0;
seq__7983_9679 = G__9691;
chunk__7984_9680 = G__9692;
count__7985_9681 = G__9693;
i__7986_9682 = G__9694;
continue;
}
} else
{var arg__6543__auto___9695 = cljs.core.first.call(null,seq__7983_9689__$1);a__6542__auto__.push(arg__6543__auto___9695);
{
var G__9696 = cljs.core.next.call(null,seq__7983_9689__$1);
var G__9697 = null;
var G__9698 = 0;
var G__9699 = 0;
seq__7983_9679 = G__9696;
chunk__7984_9680 = G__9697;
count__7985_9681 = G__9698;
i__7986_9682 = G__9699;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.keygen.apply(null,a__6542__auto__);
};
var keygen = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return keygen__delegate.call(this,args__6541__auto__);};
keygen.cljs$lang$maxFixedArity = 0;
keygen.cljs$lang$applyTo = (function (arglist__9700){
var args__6541__auto__ = cljs.core.seq(arglist__9700);
return keygen__delegate(args__6541__auto__);
});
keygen.cljs$core$IFn$_invoke$arity$variadic = keygen__delegate;
return keygen;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.label = (function() { 
var label__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__7991_9701 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__7992_9702 = null;var count__7993_9703 = 0;var i__7994_9704 = 0;while(true){
if((i__7994_9704 < count__7993_9703))
{var arg__6543__auto___9705 = cljs.core._nth.call(null,chunk__7992_9702,i__7994_9704);a__6542__auto__.push(arg__6543__auto___9705);
{
var G__9706 = seq__7991_9701;
var G__9707 = chunk__7992_9702;
var G__9708 = count__7993_9703;
var G__9709 = (i__7994_9704 + 1);
seq__7991_9701 = G__9706;
chunk__7992_9702 = G__9707;
count__7993_9703 = G__9708;
i__7994_9704 = G__9709;
continue;
}
} else
{var temp__4092__auto___9710 = cljs.core.seq.call(null,seq__7991_9701);if(temp__4092__auto___9710)
{var seq__7991_9711__$1 = temp__4092__auto___9710;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7991_9711__$1))
{var c__5632__auto___9712 = cljs.core.chunk_first.call(null,seq__7991_9711__$1);{
var G__9713 = cljs.core.chunk_rest.call(null,seq__7991_9711__$1);
var G__9714 = c__5632__auto___9712;
var G__9715 = cljs.core.count.call(null,c__5632__auto___9712);
var G__9716 = 0;
seq__7991_9701 = G__9713;
chunk__7992_9702 = G__9714;
count__7993_9703 = G__9715;
i__7994_9704 = G__9716;
continue;
}
} else
{var arg__6543__auto___9717 = cljs.core.first.call(null,seq__7991_9711__$1);a__6542__auto__.push(arg__6543__auto___9717);
{
var G__9718 = cljs.core.next.call(null,seq__7991_9711__$1);
var G__9719 = null;
var G__9720 = 0;
var G__9721 = 0;
seq__7991_9701 = G__9718;
chunk__7992_9702 = G__9719;
count__7993_9703 = G__9720;
i__7994_9704 = G__9721;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.label.apply(null,a__6542__auto__);
};
var label = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return label__delegate.call(this,args__6541__auto__);};
label.cljs$lang$maxFixedArity = 0;
label.cljs$lang$applyTo = (function (arglist__9722){
var args__6541__auto__ = cljs.core.seq(arglist__9722);
return label__delegate(args__6541__auto__);
});
label.cljs$core$IFn$_invoke$arity$variadic = label__delegate;
return label;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.legend = (function() { 
var legend__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__7999_9723 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__8000_9724 = null;var count__8001_9725 = 0;var i__8002_9726 = 0;while(true){
if((i__8002_9726 < count__8001_9725))
{var arg__6543__auto___9727 = cljs.core._nth.call(null,chunk__8000_9724,i__8002_9726);a__6542__auto__.push(arg__6543__auto___9727);
{
var G__9728 = seq__7999_9723;
var G__9729 = chunk__8000_9724;
var G__9730 = count__8001_9725;
var G__9731 = (i__8002_9726 + 1);
seq__7999_9723 = G__9728;
chunk__8000_9724 = G__9729;
count__8001_9725 = G__9730;
i__8002_9726 = G__9731;
continue;
}
} else
{var temp__4092__auto___9732 = cljs.core.seq.call(null,seq__7999_9723);if(temp__4092__auto___9732)
{var seq__7999_9733__$1 = temp__4092__auto___9732;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7999_9733__$1))
{var c__5632__auto___9734 = cljs.core.chunk_first.call(null,seq__7999_9733__$1);{
var G__9735 = cljs.core.chunk_rest.call(null,seq__7999_9733__$1);
var G__9736 = c__5632__auto___9734;
var G__9737 = cljs.core.count.call(null,c__5632__auto___9734);
var G__9738 = 0;
seq__7999_9723 = G__9735;
chunk__8000_9724 = G__9736;
count__8001_9725 = G__9737;
i__8002_9726 = G__9738;
continue;
}
} else
{var arg__6543__auto___9739 = cljs.core.first.call(null,seq__7999_9733__$1);a__6542__auto__.push(arg__6543__auto___9739);
{
var G__9740 = cljs.core.next.call(null,seq__7999_9733__$1);
var G__9741 = null;
var G__9742 = 0;
var G__9743 = 0;
seq__7999_9723 = G__9740;
chunk__8000_9724 = G__9741;
count__8001_9725 = G__9742;
i__8002_9726 = G__9743;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.legend.apply(null,a__6542__auto__);
};
var legend = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return legend__delegate.call(this,args__6541__auto__);};
legend.cljs$lang$maxFixedArity = 0;
legend.cljs$lang$applyTo = (function (arglist__9744){
var args__6541__auto__ = cljs.core.seq(arglist__9744);
return legend__delegate(args__6541__auto__);
});
legend.cljs$core$IFn$_invoke$arity$variadic = legend__delegate;
return legend;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.li = (function() { 
var li__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__8007_9745 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__8008_9746 = null;var count__8009_9747 = 0;var i__8010_9748 = 0;while(true){
if((i__8010_9748 < count__8009_9747))
{var arg__6543__auto___9749 = cljs.core._nth.call(null,chunk__8008_9746,i__8010_9748);a__6542__auto__.push(arg__6543__auto___9749);
{
var G__9750 = seq__8007_9745;
var G__9751 = chunk__8008_9746;
var G__9752 = count__8009_9747;
var G__9753 = (i__8010_9748 + 1);
seq__8007_9745 = G__9750;
chunk__8008_9746 = G__9751;
count__8009_9747 = G__9752;
i__8010_9748 = G__9753;
continue;
}
} else
{var temp__4092__auto___9754 = cljs.core.seq.call(null,seq__8007_9745);if(temp__4092__auto___9754)
{var seq__8007_9755__$1 = temp__4092__auto___9754;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8007_9755__$1))
{var c__5632__auto___9756 = cljs.core.chunk_first.call(null,seq__8007_9755__$1);{
var G__9757 = cljs.core.chunk_rest.call(null,seq__8007_9755__$1);
var G__9758 = c__5632__auto___9756;
var G__9759 = cljs.core.count.call(null,c__5632__auto___9756);
var G__9760 = 0;
seq__8007_9745 = G__9757;
chunk__8008_9746 = G__9758;
count__8009_9747 = G__9759;
i__8010_9748 = G__9760;
continue;
}
} else
{var arg__6543__auto___9761 = cljs.core.first.call(null,seq__8007_9755__$1);a__6542__auto__.push(arg__6543__auto___9761);
{
var G__9762 = cljs.core.next.call(null,seq__8007_9755__$1);
var G__9763 = null;
var G__9764 = 0;
var G__9765 = 0;
seq__8007_9745 = G__9762;
chunk__8008_9746 = G__9763;
count__8009_9747 = G__9764;
i__8010_9748 = G__9765;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.li.apply(null,a__6542__auto__);
};
var li = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return li__delegate.call(this,args__6541__auto__);};
li.cljs$lang$maxFixedArity = 0;
li.cljs$lang$applyTo = (function (arglist__9766){
var args__6541__auto__ = cljs.core.seq(arglist__9766);
return li__delegate(args__6541__auto__);
});
li.cljs$core$IFn$_invoke$arity$variadic = li__delegate;
return li;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.link = (function() { 
var link__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__8015_9767 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__8016_9768 = null;var count__8017_9769 = 0;var i__8018_9770 = 0;while(true){
if((i__8018_9770 < count__8017_9769))
{var arg__6543__auto___9771 = cljs.core._nth.call(null,chunk__8016_9768,i__8018_9770);a__6542__auto__.push(arg__6543__auto___9771);
{
var G__9772 = seq__8015_9767;
var G__9773 = chunk__8016_9768;
var G__9774 = count__8017_9769;
var G__9775 = (i__8018_9770 + 1);
seq__8015_9767 = G__9772;
chunk__8016_9768 = G__9773;
count__8017_9769 = G__9774;
i__8018_9770 = G__9775;
continue;
}
} else
{var temp__4092__auto___9776 = cljs.core.seq.call(null,seq__8015_9767);if(temp__4092__auto___9776)
{var seq__8015_9777__$1 = temp__4092__auto___9776;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8015_9777__$1))
{var c__5632__auto___9778 = cljs.core.chunk_first.call(null,seq__8015_9777__$1);{
var G__9779 = cljs.core.chunk_rest.call(null,seq__8015_9777__$1);
var G__9780 = c__5632__auto___9778;
var G__9781 = cljs.core.count.call(null,c__5632__auto___9778);
var G__9782 = 0;
seq__8015_9767 = G__9779;
chunk__8016_9768 = G__9780;
count__8017_9769 = G__9781;
i__8018_9770 = G__9782;
continue;
}
} else
{var arg__6543__auto___9783 = cljs.core.first.call(null,seq__8015_9777__$1);a__6542__auto__.push(arg__6543__auto___9783);
{
var G__9784 = cljs.core.next.call(null,seq__8015_9777__$1);
var G__9785 = null;
var G__9786 = 0;
var G__9787 = 0;
seq__8015_9767 = G__9784;
chunk__8016_9768 = G__9785;
count__8017_9769 = G__9786;
i__8018_9770 = G__9787;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.link.apply(null,a__6542__auto__);
};
var link = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return link__delegate.call(this,args__6541__auto__);};
link.cljs$lang$maxFixedArity = 0;
link.cljs$lang$applyTo = (function (arglist__9788){
var args__6541__auto__ = cljs.core.seq(arglist__9788);
return link__delegate(args__6541__auto__);
});
link.cljs$core$IFn$_invoke$arity$variadic = link__delegate;
return link;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.main = (function() { 
var main__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__8023_9789 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__8024_9790 = null;var count__8025_9791 = 0;var i__8026_9792 = 0;while(true){
if((i__8026_9792 < count__8025_9791))
{var arg__6543__auto___9793 = cljs.core._nth.call(null,chunk__8024_9790,i__8026_9792);a__6542__auto__.push(arg__6543__auto___9793);
{
var G__9794 = seq__8023_9789;
var G__9795 = chunk__8024_9790;
var G__9796 = count__8025_9791;
var G__9797 = (i__8026_9792 + 1);
seq__8023_9789 = G__9794;
chunk__8024_9790 = G__9795;
count__8025_9791 = G__9796;
i__8026_9792 = G__9797;
continue;
}
} else
{var temp__4092__auto___9798 = cljs.core.seq.call(null,seq__8023_9789);if(temp__4092__auto___9798)
{var seq__8023_9799__$1 = temp__4092__auto___9798;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8023_9799__$1))
{var c__5632__auto___9800 = cljs.core.chunk_first.call(null,seq__8023_9799__$1);{
var G__9801 = cljs.core.chunk_rest.call(null,seq__8023_9799__$1);
var G__9802 = c__5632__auto___9800;
var G__9803 = cljs.core.count.call(null,c__5632__auto___9800);
var G__9804 = 0;
seq__8023_9789 = G__9801;
chunk__8024_9790 = G__9802;
count__8025_9791 = G__9803;
i__8026_9792 = G__9804;
continue;
}
} else
{var arg__6543__auto___9805 = cljs.core.first.call(null,seq__8023_9799__$1);a__6542__auto__.push(arg__6543__auto___9805);
{
var G__9806 = cljs.core.next.call(null,seq__8023_9799__$1);
var G__9807 = null;
var G__9808 = 0;
var G__9809 = 0;
seq__8023_9789 = G__9806;
chunk__8024_9790 = G__9807;
count__8025_9791 = G__9808;
i__8026_9792 = G__9809;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.main.apply(null,a__6542__auto__);
};
var main = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return main__delegate.call(this,args__6541__auto__);};
main.cljs$lang$maxFixedArity = 0;
main.cljs$lang$applyTo = (function (arglist__9810){
var args__6541__auto__ = cljs.core.seq(arglist__9810);
return main__delegate(args__6541__auto__);
});
main.cljs$core$IFn$_invoke$arity$variadic = main__delegate;
return main;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.map = (function() { 
var map__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__8031_9811 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__8032_9812 = null;var count__8033_9813 = 0;var i__8034_9814 = 0;while(true){
if((i__8034_9814 < count__8033_9813))
{var arg__6543__auto___9815 = cljs.core._nth.call(null,chunk__8032_9812,i__8034_9814);a__6542__auto__.push(arg__6543__auto___9815);
{
var G__9816 = seq__8031_9811;
var G__9817 = chunk__8032_9812;
var G__9818 = count__8033_9813;
var G__9819 = (i__8034_9814 + 1);
seq__8031_9811 = G__9816;
chunk__8032_9812 = G__9817;
count__8033_9813 = G__9818;
i__8034_9814 = G__9819;
continue;
}
} else
{var temp__4092__auto___9820 = cljs.core.seq.call(null,seq__8031_9811);if(temp__4092__auto___9820)
{var seq__8031_9821__$1 = temp__4092__auto___9820;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8031_9821__$1))
{var c__5632__auto___9822 = cljs.core.chunk_first.call(null,seq__8031_9821__$1);{
var G__9823 = cljs.core.chunk_rest.call(null,seq__8031_9821__$1);
var G__9824 = c__5632__auto___9822;
var G__9825 = cljs.core.count.call(null,c__5632__auto___9822);
var G__9826 = 0;
seq__8031_9811 = G__9823;
chunk__8032_9812 = G__9824;
count__8033_9813 = G__9825;
i__8034_9814 = G__9826;
continue;
}
} else
{var arg__6543__auto___9827 = cljs.core.first.call(null,seq__8031_9821__$1);a__6542__auto__.push(arg__6543__auto___9827);
{
var G__9828 = cljs.core.next.call(null,seq__8031_9821__$1);
var G__9829 = null;
var G__9830 = 0;
var G__9831 = 0;
seq__8031_9811 = G__9828;
chunk__8032_9812 = G__9829;
count__8033_9813 = G__9830;
i__8034_9814 = G__9831;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.map.apply(null,a__6542__auto__);
};
var map = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return map__delegate.call(this,args__6541__auto__);};
map.cljs$lang$maxFixedArity = 0;
map.cljs$lang$applyTo = (function (arglist__9832){
var args__6541__auto__ = cljs.core.seq(arglist__9832);
return map__delegate(args__6541__auto__);
});
map.cljs$core$IFn$_invoke$arity$variadic = map__delegate;
return map;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.mark = (function() { 
var mark__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__8039_9833 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__8040_9834 = null;var count__8041_9835 = 0;var i__8042_9836 = 0;while(true){
if((i__8042_9836 < count__8041_9835))
{var arg__6543__auto___9837 = cljs.core._nth.call(null,chunk__8040_9834,i__8042_9836);a__6542__auto__.push(arg__6543__auto___9837);
{
var G__9838 = seq__8039_9833;
var G__9839 = chunk__8040_9834;
var G__9840 = count__8041_9835;
var G__9841 = (i__8042_9836 + 1);
seq__8039_9833 = G__9838;
chunk__8040_9834 = G__9839;
count__8041_9835 = G__9840;
i__8042_9836 = G__9841;
continue;
}
} else
{var temp__4092__auto___9842 = cljs.core.seq.call(null,seq__8039_9833);if(temp__4092__auto___9842)
{var seq__8039_9843__$1 = temp__4092__auto___9842;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8039_9843__$1))
{var c__5632__auto___9844 = cljs.core.chunk_first.call(null,seq__8039_9843__$1);{
var G__9845 = cljs.core.chunk_rest.call(null,seq__8039_9843__$1);
var G__9846 = c__5632__auto___9844;
var G__9847 = cljs.core.count.call(null,c__5632__auto___9844);
var G__9848 = 0;
seq__8039_9833 = G__9845;
chunk__8040_9834 = G__9846;
count__8041_9835 = G__9847;
i__8042_9836 = G__9848;
continue;
}
} else
{var arg__6543__auto___9849 = cljs.core.first.call(null,seq__8039_9843__$1);a__6542__auto__.push(arg__6543__auto___9849);
{
var G__9850 = cljs.core.next.call(null,seq__8039_9843__$1);
var G__9851 = null;
var G__9852 = 0;
var G__9853 = 0;
seq__8039_9833 = G__9850;
chunk__8040_9834 = G__9851;
count__8041_9835 = G__9852;
i__8042_9836 = G__9853;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.mark.apply(null,a__6542__auto__);
};
var mark = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return mark__delegate.call(this,args__6541__auto__);};
mark.cljs$lang$maxFixedArity = 0;
mark.cljs$lang$applyTo = (function (arglist__9854){
var args__6541__auto__ = cljs.core.seq(arglist__9854);
return mark__delegate(args__6541__auto__);
});
mark.cljs$core$IFn$_invoke$arity$variadic = mark__delegate;
return mark;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.menu = (function() { 
var menu__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__8047_9855 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__8048_9856 = null;var count__8049_9857 = 0;var i__8050_9858 = 0;while(true){
if((i__8050_9858 < count__8049_9857))
{var arg__6543__auto___9859 = cljs.core._nth.call(null,chunk__8048_9856,i__8050_9858);a__6542__auto__.push(arg__6543__auto___9859);
{
var G__9860 = seq__8047_9855;
var G__9861 = chunk__8048_9856;
var G__9862 = count__8049_9857;
var G__9863 = (i__8050_9858 + 1);
seq__8047_9855 = G__9860;
chunk__8048_9856 = G__9861;
count__8049_9857 = G__9862;
i__8050_9858 = G__9863;
continue;
}
} else
{var temp__4092__auto___9864 = cljs.core.seq.call(null,seq__8047_9855);if(temp__4092__auto___9864)
{var seq__8047_9865__$1 = temp__4092__auto___9864;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8047_9865__$1))
{var c__5632__auto___9866 = cljs.core.chunk_first.call(null,seq__8047_9865__$1);{
var G__9867 = cljs.core.chunk_rest.call(null,seq__8047_9865__$1);
var G__9868 = c__5632__auto___9866;
var G__9869 = cljs.core.count.call(null,c__5632__auto___9866);
var G__9870 = 0;
seq__8047_9855 = G__9867;
chunk__8048_9856 = G__9868;
count__8049_9857 = G__9869;
i__8050_9858 = G__9870;
continue;
}
} else
{var arg__6543__auto___9871 = cljs.core.first.call(null,seq__8047_9865__$1);a__6542__auto__.push(arg__6543__auto___9871);
{
var G__9872 = cljs.core.next.call(null,seq__8047_9865__$1);
var G__9873 = null;
var G__9874 = 0;
var G__9875 = 0;
seq__8047_9855 = G__9872;
chunk__8048_9856 = G__9873;
count__8049_9857 = G__9874;
i__8050_9858 = G__9875;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.menu.apply(null,a__6542__auto__);
};
var menu = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return menu__delegate.call(this,args__6541__auto__);};
menu.cljs$lang$maxFixedArity = 0;
menu.cljs$lang$applyTo = (function (arglist__9876){
var args__6541__auto__ = cljs.core.seq(arglist__9876);
return menu__delegate(args__6541__auto__);
});
menu.cljs$core$IFn$_invoke$arity$variadic = menu__delegate;
return menu;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.menuitem = (function() { 
var menuitem__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__8055_9877 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__8056_9878 = null;var count__8057_9879 = 0;var i__8058_9880 = 0;while(true){
if((i__8058_9880 < count__8057_9879))
{var arg__6543__auto___9881 = cljs.core._nth.call(null,chunk__8056_9878,i__8058_9880);a__6542__auto__.push(arg__6543__auto___9881);
{
var G__9882 = seq__8055_9877;
var G__9883 = chunk__8056_9878;
var G__9884 = count__8057_9879;
var G__9885 = (i__8058_9880 + 1);
seq__8055_9877 = G__9882;
chunk__8056_9878 = G__9883;
count__8057_9879 = G__9884;
i__8058_9880 = G__9885;
continue;
}
} else
{var temp__4092__auto___9886 = cljs.core.seq.call(null,seq__8055_9877);if(temp__4092__auto___9886)
{var seq__8055_9887__$1 = temp__4092__auto___9886;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8055_9887__$1))
{var c__5632__auto___9888 = cljs.core.chunk_first.call(null,seq__8055_9887__$1);{
var G__9889 = cljs.core.chunk_rest.call(null,seq__8055_9887__$1);
var G__9890 = c__5632__auto___9888;
var G__9891 = cljs.core.count.call(null,c__5632__auto___9888);
var G__9892 = 0;
seq__8055_9877 = G__9889;
chunk__8056_9878 = G__9890;
count__8057_9879 = G__9891;
i__8058_9880 = G__9892;
continue;
}
} else
{var arg__6543__auto___9893 = cljs.core.first.call(null,seq__8055_9887__$1);a__6542__auto__.push(arg__6543__auto___9893);
{
var G__9894 = cljs.core.next.call(null,seq__8055_9887__$1);
var G__9895 = null;
var G__9896 = 0;
var G__9897 = 0;
seq__8055_9877 = G__9894;
chunk__8056_9878 = G__9895;
count__8057_9879 = G__9896;
i__8058_9880 = G__9897;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.menuitem.apply(null,a__6542__auto__);
};
var menuitem = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return menuitem__delegate.call(this,args__6541__auto__);};
menuitem.cljs$lang$maxFixedArity = 0;
menuitem.cljs$lang$applyTo = (function (arglist__9898){
var args__6541__auto__ = cljs.core.seq(arglist__9898);
return menuitem__delegate(args__6541__auto__);
});
menuitem.cljs$core$IFn$_invoke$arity$variadic = menuitem__delegate;
return menuitem;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.meta = (function() { 
var meta__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__8063_9899 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__8064_9900 = null;var count__8065_9901 = 0;var i__8066_9902 = 0;while(true){
if((i__8066_9902 < count__8065_9901))
{var arg__6543__auto___9903 = cljs.core._nth.call(null,chunk__8064_9900,i__8066_9902);a__6542__auto__.push(arg__6543__auto___9903);
{
var G__9904 = seq__8063_9899;
var G__9905 = chunk__8064_9900;
var G__9906 = count__8065_9901;
var G__9907 = (i__8066_9902 + 1);
seq__8063_9899 = G__9904;
chunk__8064_9900 = G__9905;
count__8065_9901 = G__9906;
i__8066_9902 = G__9907;
continue;
}
} else
{var temp__4092__auto___9908 = cljs.core.seq.call(null,seq__8063_9899);if(temp__4092__auto___9908)
{var seq__8063_9909__$1 = temp__4092__auto___9908;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8063_9909__$1))
{var c__5632__auto___9910 = cljs.core.chunk_first.call(null,seq__8063_9909__$1);{
var G__9911 = cljs.core.chunk_rest.call(null,seq__8063_9909__$1);
var G__9912 = c__5632__auto___9910;
var G__9913 = cljs.core.count.call(null,c__5632__auto___9910);
var G__9914 = 0;
seq__8063_9899 = G__9911;
chunk__8064_9900 = G__9912;
count__8065_9901 = G__9913;
i__8066_9902 = G__9914;
continue;
}
} else
{var arg__6543__auto___9915 = cljs.core.first.call(null,seq__8063_9909__$1);a__6542__auto__.push(arg__6543__auto___9915);
{
var G__9916 = cljs.core.next.call(null,seq__8063_9909__$1);
var G__9917 = null;
var G__9918 = 0;
var G__9919 = 0;
seq__8063_9899 = G__9916;
chunk__8064_9900 = G__9917;
count__8065_9901 = G__9918;
i__8066_9902 = G__9919;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.meta.apply(null,a__6542__auto__);
};
var meta = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return meta__delegate.call(this,args__6541__auto__);};
meta.cljs$lang$maxFixedArity = 0;
meta.cljs$lang$applyTo = (function (arglist__9920){
var args__6541__auto__ = cljs.core.seq(arglist__9920);
return meta__delegate(args__6541__auto__);
});
meta.cljs$core$IFn$_invoke$arity$variadic = meta__delegate;
return meta;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.meter = (function() { 
var meter__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__8071_9921 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__8072_9922 = null;var count__8073_9923 = 0;var i__8074_9924 = 0;while(true){
if((i__8074_9924 < count__8073_9923))
{var arg__6543__auto___9925 = cljs.core._nth.call(null,chunk__8072_9922,i__8074_9924);a__6542__auto__.push(arg__6543__auto___9925);
{
var G__9926 = seq__8071_9921;
var G__9927 = chunk__8072_9922;
var G__9928 = count__8073_9923;
var G__9929 = (i__8074_9924 + 1);
seq__8071_9921 = G__9926;
chunk__8072_9922 = G__9927;
count__8073_9923 = G__9928;
i__8074_9924 = G__9929;
continue;
}
} else
{var temp__4092__auto___9930 = cljs.core.seq.call(null,seq__8071_9921);if(temp__4092__auto___9930)
{var seq__8071_9931__$1 = temp__4092__auto___9930;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8071_9931__$1))
{var c__5632__auto___9932 = cljs.core.chunk_first.call(null,seq__8071_9931__$1);{
var G__9933 = cljs.core.chunk_rest.call(null,seq__8071_9931__$1);
var G__9934 = c__5632__auto___9932;
var G__9935 = cljs.core.count.call(null,c__5632__auto___9932);
var G__9936 = 0;
seq__8071_9921 = G__9933;
chunk__8072_9922 = G__9934;
count__8073_9923 = G__9935;
i__8074_9924 = G__9936;
continue;
}
} else
{var arg__6543__auto___9937 = cljs.core.first.call(null,seq__8071_9931__$1);a__6542__auto__.push(arg__6543__auto___9937);
{
var G__9938 = cljs.core.next.call(null,seq__8071_9931__$1);
var G__9939 = null;
var G__9940 = 0;
var G__9941 = 0;
seq__8071_9921 = G__9938;
chunk__8072_9922 = G__9939;
count__8073_9923 = G__9940;
i__8074_9924 = G__9941;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.meter.apply(null,a__6542__auto__);
};
var meter = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return meter__delegate.call(this,args__6541__auto__);};
meter.cljs$lang$maxFixedArity = 0;
meter.cljs$lang$applyTo = (function (arglist__9942){
var args__6541__auto__ = cljs.core.seq(arglist__9942);
return meter__delegate(args__6541__auto__);
});
meter.cljs$core$IFn$_invoke$arity$variadic = meter__delegate;
return meter;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.nav = (function() { 
var nav__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__8079_9943 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__8080_9944 = null;var count__8081_9945 = 0;var i__8082_9946 = 0;while(true){
if((i__8082_9946 < count__8081_9945))
{var arg__6543__auto___9947 = cljs.core._nth.call(null,chunk__8080_9944,i__8082_9946);a__6542__auto__.push(arg__6543__auto___9947);
{
var G__9948 = seq__8079_9943;
var G__9949 = chunk__8080_9944;
var G__9950 = count__8081_9945;
var G__9951 = (i__8082_9946 + 1);
seq__8079_9943 = G__9948;
chunk__8080_9944 = G__9949;
count__8081_9945 = G__9950;
i__8082_9946 = G__9951;
continue;
}
} else
{var temp__4092__auto___9952 = cljs.core.seq.call(null,seq__8079_9943);if(temp__4092__auto___9952)
{var seq__8079_9953__$1 = temp__4092__auto___9952;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8079_9953__$1))
{var c__5632__auto___9954 = cljs.core.chunk_first.call(null,seq__8079_9953__$1);{
var G__9955 = cljs.core.chunk_rest.call(null,seq__8079_9953__$1);
var G__9956 = c__5632__auto___9954;
var G__9957 = cljs.core.count.call(null,c__5632__auto___9954);
var G__9958 = 0;
seq__8079_9943 = G__9955;
chunk__8080_9944 = G__9956;
count__8081_9945 = G__9957;
i__8082_9946 = G__9958;
continue;
}
} else
{var arg__6543__auto___9959 = cljs.core.first.call(null,seq__8079_9953__$1);a__6542__auto__.push(arg__6543__auto___9959);
{
var G__9960 = cljs.core.next.call(null,seq__8079_9953__$1);
var G__9961 = null;
var G__9962 = 0;
var G__9963 = 0;
seq__8079_9943 = G__9960;
chunk__8080_9944 = G__9961;
count__8081_9945 = G__9962;
i__8082_9946 = G__9963;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.nav.apply(null,a__6542__auto__);
};
var nav = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return nav__delegate.call(this,args__6541__auto__);};
nav.cljs$lang$maxFixedArity = 0;
nav.cljs$lang$applyTo = (function (arglist__9964){
var args__6541__auto__ = cljs.core.seq(arglist__9964);
return nav__delegate(args__6541__auto__);
});
nav.cljs$core$IFn$_invoke$arity$variadic = nav__delegate;
return nav;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.noscript = (function() { 
var noscript__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__8087_9965 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__8088_9966 = null;var count__8089_9967 = 0;var i__8090_9968 = 0;while(true){
if((i__8090_9968 < count__8089_9967))
{var arg__6543__auto___9969 = cljs.core._nth.call(null,chunk__8088_9966,i__8090_9968);a__6542__auto__.push(arg__6543__auto___9969);
{
var G__9970 = seq__8087_9965;
var G__9971 = chunk__8088_9966;
var G__9972 = count__8089_9967;
var G__9973 = (i__8090_9968 + 1);
seq__8087_9965 = G__9970;
chunk__8088_9966 = G__9971;
count__8089_9967 = G__9972;
i__8090_9968 = G__9973;
continue;
}
} else
{var temp__4092__auto___9974 = cljs.core.seq.call(null,seq__8087_9965);if(temp__4092__auto___9974)
{var seq__8087_9975__$1 = temp__4092__auto___9974;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8087_9975__$1))
{var c__5632__auto___9976 = cljs.core.chunk_first.call(null,seq__8087_9975__$1);{
var G__9977 = cljs.core.chunk_rest.call(null,seq__8087_9975__$1);
var G__9978 = c__5632__auto___9976;
var G__9979 = cljs.core.count.call(null,c__5632__auto___9976);
var G__9980 = 0;
seq__8087_9965 = G__9977;
chunk__8088_9966 = G__9978;
count__8089_9967 = G__9979;
i__8090_9968 = G__9980;
continue;
}
} else
{var arg__6543__auto___9981 = cljs.core.first.call(null,seq__8087_9975__$1);a__6542__auto__.push(arg__6543__auto___9981);
{
var G__9982 = cljs.core.next.call(null,seq__8087_9975__$1);
var G__9983 = null;
var G__9984 = 0;
var G__9985 = 0;
seq__8087_9965 = G__9982;
chunk__8088_9966 = G__9983;
count__8089_9967 = G__9984;
i__8090_9968 = G__9985;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.noscript.apply(null,a__6542__auto__);
};
var noscript = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return noscript__delegate.call(this,args__6541__auto__);};
noscript.cljs$lang$maxFixedArity = 0;
noscript.cljs$lang$applyTo = (function (arglist__9986){
var args__6541__auto__ = cljs.core.seq(arglist__9986);
return noscript__delegate(args__6541__auto__);
});
noscript.cljs$core$IFn$_invoke$arity$variadic = noscript__delegate;
return noscript;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.object = (function() { 
var object__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__8095_9987 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__8096_9988 = null;var count__8097_9989 = 0;var i__8098_9990 = 0;while(true){
if((i__8098_9990 < count__8097_9989))
{var arg__6543__auto___9991 = cljs.core._nth.call(null,chunk__8096_9988,i__8098_9990);a__6542__auto__.push(arg__6543__auto___9991);
{
var G__9992 = seq__8095_9987;
var G__9993 = chunk__8096_9988;
var G__9994 = count__8097_9989;
var G__9995 = (i__8098_9990 + 1);
seq__8095_9987 = G__9992;
chunk__8096_9988 = G__9993;
count__8097_9989 = G__9994;
i__8098_9990 = G__9995;
continue;
}
} else
{var temp__4092__auto___9996 = cljs.core.seq.call(null,seq__8095_9987);if(temp__4092__auto___9996)
{var seq__8095_9997__$1 = temp__4092__auto___9996;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8095_9997__$1))
{var c__5632__auto___9998 = cljs.core.chunk_first.call(null,seq__8095_9997__$1);{
var G__9999 = cljs.core.chunk_rest.call(null,seq__8095_9997__$1);
var G__10000 = c__5632__auto___9998;
var G__10001 = cljs.core.count.call(null,c__5632__auto___9998);
var G__10002 = 0;
seq__8095_9987 = G__9999;
chunk__8096_9988 = G__10000;
count__8097_9989 = G__10001;
i__8098_9990 = G__10002;
continue;
}
} else
{var arg__6543__auto___10003 = cljs.core.first.call(null,seq__8095_9997__$1);a__6542__auto__.push(arg__6543__auto___10003);
{
var G__10004 = cljs.core.next.call(null,seq__8095_9997__$1);
var G__10005 = null;
var G__10006 = 0;
var G__10007 = 0;
seq__8095_9987 = G__10004;
chunk__8096_9988 = G__10005;
count__8097_9989 = G__10006;
i__8098_9990 = G__10007;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.object.apply(null,a__6542__auto__);
};
var object = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return object__delegate.call(this,args__6541__auto__);};
object.cljs$lang$maxFixedArity = 0;
object.cljs$lang$applyTo = (function (arglist__10008){
var args__6541__auto__ = cljs.core.seq(arglist__10008);
return object__delegate(args__6541__auto__);
});
object.cljs$core$IFn$_invoke$arity$variadic = object__delegate;
return object;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.ol = (function() { 
var ol__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__8103_10009 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__8104_10010 = null;var count__8105_10011 = 0;var i__8106_10012 = 0;while(true){
if((i__8106_10012 < count__8105_10011))
{var arg__6543__auto___10013 = cljs.core._nth.call(null,chunk__8104_10010,i__8106_10012);a__6542__auto__.push(arg__6543__auto___10013);
{
var G__10014 = seq__8103_10009;
var G__10015 = chunk__8104_10010;
var G__10016 = count__8105_10011;
var G__10017 = (i__8106_10012 + 1);
seq__8103_10009 = G__10014;
chunk__8104_10010 = G__10015;
count__8105_10011 = G__10016;
i__8106_10012 = G__10017;
continue;
}
} else
{var temp__4092__auto___10018 = cljs.core.seq.call(null,seq__8103_10009);if(temp__4092__auto___10018)
{var seq__8103_10019__$1 = temp__4092__auto___10018;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8103_10019__$1))
{var c__5632__auto___10020 = cljs.core.chunk_first.call(null,seq__8103_10019__$1);{
var G__10021 = cljs.core.chunk_rest.call(null,seq__8103_10019__$1);
var G__10022 = c__5632__auto___10020;
var G__10023 = cljs.core.count.call(null,c__5632__auto___10020);
var G__10024 = 0;
seq__8103_10009 = G__10021;
chunk__8104_10010 = G__10022;
count__8105_10011 = G__10023;
i__8106_10012 = G__10024;
continue;
}
} else
{var arg__6543__auto___10025 = cljs.core.first.call(null,seq__8103_10019__$1);a__6542__auto__.push(arg__6543__auto___10025);
{
var G__10026 = cljs.core.next.call(null,seq__8103_10019__$1);
var G__10027 = null;
var G__10028 = 0;
var G__10029 = 0;
seq__8103_10009 = G__10026;
chunk__8104_10010 = G__10027;
count__8105_10011 = G__10028;
i__8106_10012 = G__10029;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.ol.apply(null,a__6542__auto__);
};
var ol = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ol__delegate.call(this,args__6541__auto__);};
ol.cljs$lang$maxFixedArity = 0;
ol.cljs$lang$applyTo = (function (arglist__10030){
var args__6541__auto__ = cljs.core.seq(arglist__10030);
return ol__delegate(args__6541__auto__);
});
ol.cljs$core$IFn$_invoke$arity$variadic = ol__delegate;
return ol;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.optgroup = (function() { 
var optgroup__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__8111_10031 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__8112_10032 = null;var count__8113_10033 = 0;var i__8114_10034 = 0;while(true){
if((i__8114_10034 < count__8113_10033))
{var arg__6543__auto___10035 = cljs.core._nth.call(null,chunk__8112_10032,i__8114_10034);a__6542__auto__.push(arg__6543__auto___10035);
{
var G__10036 = seq__8111_10031;
var G__10037 = chunk__8112_10032;
var G__10038 = count__8113_10033;
var G__10039 = (i__8114_10034 + 1);
seq__8111_10031 = G__10036;
chunk__8112_10032 = G__10037;
count__8113_10033 = G__10038;
i__8114_10034 = G__10039;
continue;
}
} else
{var temp__4092__auto___10040 = cljs.core.seq.call(null,seq__8111_10031);if(temp__4092__auto___10040)
{var seq__8111_10041__$1 = temp__4092__auto___10040;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8111_10041__$1))
{var c__5632__auto___10042 = cljs.core.chunk_first.call(null,seq__8111_10041__$1);{
var G__10043 = cljs.core.chunk_rest.call(null,seq__8111_10041__$1);
var G__10044 = c__5632__auto___10042;
var G__10045 = cljs.core.count.call(null,c__5632__auto___10042);
var G__10046 = 0;
seq__8111_10031 = G__10043;
chunk__8112_10032 = G__10044;
count__8113_10033 = G__10045;
i__8114_10034 = G__10046;
continue;
}
} else
{var arg__6543__auto___10047 = cljs.core.first.call(null,seq__8111_10041__$1);a__6542__auto__.push(arg__6543__auto___10047);
{
var G__10048 = cljs.core.next.call(null,seq__8111_10041__$1);
var G__10049 = null;
var G__10050 = 0;
var G__10051 = 0;
seq__8111_10031 = G__10048;
chunk__8112_10032 = G__10049;
count__8113_10033 = G__10050;
i__8114_10034 = G__10051;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.optgroup.apply(null,a__6542__auto__);
};
var optgroup = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return optgroup__delegate.call(this,args__6541__auto__);};
optgroup.cljs$lang$maxFixedArity = 0;
optgroup.cljs$lang$applyTo = (function (arglist__10052){
var args__6541__auto__ = cljs.core.seq(arglist__10052);
return optgroup__delegate(args__6541__auto__);
});
optgroup.cljs$core$IFn$_invoke$arity$variadic = optgroup__delegate;
return optgroup;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.option = (function() { 
var option__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__8119_10053 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__8120_10054 = null;var count__8121_10055 = 0;var i__8122_10056 = 0;while(true){
if((i__8122_10056 < count__8121_10055))
{var arg__6543__auto___10057 = cljs.core._nth.call(null,chunk__8120_10054,i__8122_10056);a__6542__auto__.push(arg__6543__auto___10057);
{
var G__10058 = seq__8119_10053;
var G__10059 = chunk__8120_10054;
var G__10060 = count__8121_10055;
var G__10061 = (i__8122_10056 + 1);
seq__8119_10053 = G__10058;
chunk__8120_10054 = G__10059;
count__8121_10055 = G__10060;
i__8122_10056 = G__10061;
continue;
}
} else
{var temp__4092__auto___10062 = cljs.core.seq.call(null,seq__8119_10053);if(temp__4092__auto___10062)
{var seq__8119_10063__$1 = temp__4092__auto___10062;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8119_10063__$1))
{var c__5632__auto___10064 = cljs.core.chunk_first.call(null,seq__8119_10063__$1);{
var G__10065 = cljs.core.chunk_rest.call(null,seq__8119_10063__$1);
var G__10066 = c__5632__auto___10064;
var G__10067 = cljs.core.count.call(null,c__5632__auto___10064);
var G__10068 = 0;
seq__8119_10053 = G__10065;
chunk__8120_10054 = G__10066;
count__8121_10055 = G__10067;
i__8122_10056 = G__10068;
continue;
}
} else
{var arg__6543__auto___10069 = cljs.core.first.call(null,seq__8119_10063__$1);a__6542__auto__.push(arg__6543__auto___10069);
{
var G__10070 = cljs.core.next.call(null,seq__8119_10063__$1);
var G__10071 = null;
var G__10072 = 0;
var G__10073 = 0;
seq__8119_10053 = G__10070;
chunk__8120_10054 = G__10071;
count__8121_10055 = G__10072;
i__8122_10056 = G__10073;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.option.apply(null,a__6542__auto__);
};
var option = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return option__delegate.call(this,args__6541__auto__);};
option.cljs$lang$maxFixedArity = 0;
option.cljs$lang$applyTo = (function (arglist__10074){
var args__6541__auto__ = cljs.core.seq(arglist__10074);
return option__delegate(args__6541__auto__);
});
option.cljs$core$IFn$_invoke$arity$variadic = option__delegate;
return option;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.output = (function() { 
var output__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__8127_10075 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__8128_10076 = null;var count__8129_10077 = 0;var i__8130_10078 = 0;while(true){
if((i__8130_10078 < count__8129_10077))
{var arg__6543__auto___10079 = cljs.core._nth.call(null,chunk__8128_10076,i__8130_10078);a__6542__auto__.push(arg__6543__auto___10079);
{
var G__10080 = seq__8127_10075;
var G__10081 = chunk__8128_10076;
var G__10082 = count__8129_10077;
var G__10083 = (i__8130_10078 + 1);
seq__8127_10075 = G__10080;
chunk__8128_10076 = G__10081;
count__8129_10077 = G__10082;
i__8130_10078 = G__10083;
continue;
}
} else
{var temp__4092__auto___10084 = cljs.core.seq.call(null,seq__8127_10075);if(temp__4092__auto___10084)
{var seq__8127_10085__$1 = temp__4092__auto___10084;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8127_10085__$1))
{var c__5632__auto___10086 = cljs.core.chunk_first.call(null,seq__8127_10085__$1);{
var G__10087 = cljs.core.chunk_rest.call(null,seq__8127_10085__$1);
var G__10088 = c__5632__auto___10086;
var G__10089 = cljs.core.count.call(null,c__5632__auto___10086);
var G__10090 = 0;
seq__8127_10075 = G__10087;
chunk__8128_10076 = G__10088;
count__8129_10077 = G__10089;
i__8130_10078 = G__10090;
continue;
}
} else
{var arg__6543__auto___10091 = cljs.core.first.call(null,seq__8127_10085__$1);a__6542__auto__.push(arg__6543__auto___10091);
{
var G__10092 = cljs.core.next.call(null,seq__8127_10085__$1);
var G__10093 = null;
var G__10094 = 0;
var G__10095 = 0;
seq__8127_10075 = G__10092;
chunk__8128_10076 = G__10093;
count__8129_10077 = G__10094;
i__8130_10078 = G__10095;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.output.apply(null,a__6542__auto__);
};
var output = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return output__delegate.call(this,args__6541__auto__);};
output.cljs$lang$maxFixedArity = 0;
output.cljs$lang$applyTo = (function (arglist__10096){
var args__6541__auto__ = cljs.core.seq(arglist__10096);
return output__delegate(args__6541__auto__);
});
output.cljs$core$IFn$_invoke$arity$variadic = output__delegate;
return output;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.p = (function() { 
var p__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__8135_10097 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__8136_10098 = null;var count__8137_10099 = 0;var i__8138_10100 = 0;while(true){
if((i__8138_10100 < count__8137_10099))
{var arg__6543__auto___10101 = cljs.core._nth.call(null,chunk__8136_10098,i__8138_10100);a__6542__auto__.push(arg__6543__auto___10101);
{
var G__10102 = seq__8135_10097;
var G__10103 = chunk__8136_10098;
var G__10104 = count__8137_10099;
var G__10105 = (i__8138_10100 + 1);
seq__8135_10097 = G__10102;
chunk__8136_10098 = G__10103;
count__8137_10099 = G__10104;
i__8138_10100 = G__10105;
continue;
}
} else
{var temp__4092__auto___10106 = cljs.core.seq.call(null,seq__8135_10097);if(temp__4092__auto___10106)
{var seq__8135_10107__$1 = temp__4092__auto___10106;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8135_10107__$1))
{var c__5632__auto___10108 = cljs.core.chunk_first.call(null,seq__8135_10107__$1);{
var G__10109 = cljs.core.chunk_rest.call(null,seq__8135_10107__$1);
var G__10110 = c__5632__auto___10108;
var G__10111 = cljs.core.count.call(null,c__5632__auto___10108);
var G__10112 = 0;
seq__8135_10097 = G__10109;
chunk__8136_10098 = G__10110;
count__8137_10099 = G__10111;
i__8138_10100 = G__10112;
continue;
}
} else
{var arg__6543__auto___10113 = cljs.core.first.call(null,seq__8135_10107__$1);a__6542__auto__.push(arg__6543__auto___10113);
{
var G__10114 = cljs.core.next.call(null,seq__8135_10107__$1);
var G__10115 = null;
var G__10116 = 0;
var G__10117 = 0;
seq__8135_10097 = G__10114;
chunk__8136_10098 = G__10115;
count__8137_10099 = G__10116;
i__8138_10100 = G__10117;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.p.apply(null,a__6542__auto__);
};
var p = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return p__delegate.call(this,args__6541__auto__);};
p.cljs$lang$maxFixedArity = 0;
p.cljs$lang$applyTo = (function (arglist__10118){
var args__6541__auto__ = cljs.core.seq(arglist__10118);
return p__delegate(args__6541__auto__);
});
p.cljs$core$IFn$_invoke$arity$variadic = p__delegate;
return p;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.param = (function() { 
var param__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__8143_10119 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__8144_10120 = null;var count__8145_10121 = 0;var i__8146_10122 = 0;while(true){
if((i__8146_10122 < count__8145_10121))
{var arg__6543__auto___10123 = cljs.core._nth.call(null,chunk__8144_10120,i__8146_10122);a__6542__auto__.push(arg__6543__auto___10123);
{
var G__10124 = seq__8143_10119;
var G__10125 = chunk__8144_10120;
var G__10126 = count__8145_10121;
var G__10127 = (i__8146_10122 + 1);
seq__8143_10119 = G__10124;
chunk__8144_10120 = G__10125;
count__8145_10121 = G__10126;
i__8146_10122 = G__10127;
continue;
}
} else
{var temp__4092__auto___10128 = cljs.core.seq.call(null,seq__8143_10119);if(temp__4092__auto___10128)
{var seq__8143_10129__$1 = temp__4092__auto___10128;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8143_10129__$1))
{var c__5632__auto___10130 = cljs.core.chunk_first.call(null,seq__8143_10129__$1);{
var G__10131 = cljs.core.chunk_rest.call(null,seq__8143_10129__$1);
var G__10132 = c__5632__auto___10130;
var G__10133 = cljs.core.count.call(null,c__5632__auto___10130);
var G__10134 = 0;
seq__8143_10119 = G__10131;
chunk__8144_10120 = G__10132;
count__8145_10121 = G__10133;
i__8146_10122 = G__10134;
continue;
}
} else
{var arg__6543__auto___10135 = cljs.core.first.call(null,seq__8143_10129__$1);a__6542__auto__.push(arg__6543__auto___10135);
{
var G__10136 = cljs.core.next.call(null,seq__8143_10129__$1);
var G__10137 = null;
var G__10138 = 0;
var G__10139 = 0;
seq__8143_10119 = G__10136;
chunk__8144_10120 = G__10137;
count__8145_10121 = G__10138;
i__8146_10122 = G__10139;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.param.apply(null,a__6542__auto__);
};
var param = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return param__delegate.call(this,args__6541__auto__);};
param.cljs$lang$maxFixedArity = 0;
param.cljs$lang$applyTo = (function (arglist__10140){
var args__6541__auto__ = cljs.core.seq(arglist__10140);
return param__delegate(args__6541__auto__);
});
param.cljs$core$IFn$_invoke$arity$variadic = param__delegate;
return param;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.pre = (function() { 
var pre__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__8151_10141 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__8152_10142 = null;var count__8153_10143 = 0;var i__8154_10144 = 0;while(true){
if((i__8154_10144 < count__8153_10143))
{var arg__6543__auto___10145 = cljs.core._nth.call(null,chunk__8152_10142,i__8154_10144);a__6542__auto__.push(arg__6543__auto___10145);
{
var G__10146 = seq__8151_10141;
var G__10147 = chunk__8152_10142;
var G__10148 = count__8153_10143;
var G__10149 = (i__8154_10144 + 1);
seq__8151_10141 = G__10146;
chunk__8152_10142 = G__10147;
count__8153_10143 = G__10148;
i__8154_10144 = G__10149;
continue;
}
} else
{var temp__4092__auto___10150 = cljs.core.seq.call(null,seq__8151_10141);if(temp__4092__auto___10150)
{var seq__8151_10151__$1 = temp__4092__auto___10150;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8151_10151__$1))
{var c__5632__auto___10152 = cljs.core.chunk_first.call(null,seq__8151_10151__$1);{
var G__10153 = cljs.core.chunk_rest.call(null,seq__8151_10151__$1);
var G__10154 = c__5632__auto___10152;
var G__10155 = cljs.core.count.call(null,c__5632__auto___10152);
var G__10156 = 0;
seq__8151_10141 = G__10153;
chunk__8152_10142 = G__10154;
count__8153_10143 = G__10155;
i__8154_10144 = G__10156;
continue;
}
} else
{var arg__6543__auto___10157 = cljs.core.first.call(null,seq__8151_10151__$1);a__6542__auto__.push(arg__6543__auto___10157);
{
var G__10158 = cljs.core.next.call(null,seq__8151_10151__$1);
var G__10159 = null;
var G__10160 = 0;
var G__10161 = 0;
seq__8151_10141 = G__10158;
chunk__8152_10142 = G__10159;
count__8153_10143 = G__10160;
i__8154_10144 = G__10161;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.pre.apply(null,a__6542__auto__);
};
var pre = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return pre__delegate.call(this,args__6541__auto__);};
pre.cljs$lang$maxFixedArity = 0;
pre.cljs$lang$applyTo = (function (arglist__10162){
var args__6541__auto__ = cljs.core.seq(arglist__10162);
return pre__delegate(args__6541__auto__);
});
pre.cljs$core$IFn$_invoke$arity$variadic = pre__delegate;
return pre;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.progress = (function() { 
var progress__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__8159_10163 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__8160_10164 = null;var count__8161_10165 = 0;var i__8162_10166 = 0;while(true){
if((i__8162_10166 < count__8161_10165))
{var arg__6543__auto___10167 = cljs.core._nth.call(null,chunk__8160_10164,i__8162_10166);a__6542__auto__.push(arg__6543__auto___10167);
{
var G__10168 = seq__8159_10163;
var G__10169 = chunk__8160_10164;
var G__10170 = count__8161_10165;
var G__10171 = (i__8162_10166 + 1);
seq__8159_10163 = G__10168;
chunk__8160_10164 = G__10169;
count__8161_10165 = G__10170;
i__8162_10166 = G__10171;
continue;
}
} else
{var temp__4092__auto___10172 = cljs.core.seq.call(null,seq__8159_10163);if(temp__4092__auto___10172)
{var seq__8159_10173__$1 = temp__4092__auto___10172;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8159_10173__$1))
{var c__5632__auto___10174 = cljs.core.chunk_first.call(null,seq__8159_10173__$1);{
var G__10175 = cljs.core.chunk_rest.call(null,seq__8159_10173__$1);
var G__10176 = c__5632__auto___10174;
var G__10177 = cljs.core.count.call(null,c__5632__auto___10174);
var G__10178 = 0;
seq__8159_10163 = G__10175;
chunk__8160_10164 = G__10176;
count__8161_10165 = G__10177;
i__8162_10166 = G__10178;
continue;
}
} else
{var arg__6543__auto___10179 = cljs.core.first.call(null,seq__8159_10173__$1);a__6542__auto__.push(arg__6543__auto___10179);
{
var G__10180 = cljs.core.next.call(null,seq__8159_10173__$1);
var G__10181 = null;
var G__10182 = 0;
var G__10183 = 0;
seq__8159_10163 = G__10180;
chunk__8160_10164 = G__10181;
count__8161_10165 = G__10182;
i__8162_10166 = G__10183;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.progress.apply(null,a__6542__auto__);
};
var progress = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return progress__delegate.call(this,args__6541__auto__);};
progress.cljs$lang$maxFixedArity = 0;
progress.cljs$lang$applyTo = (function (arglist__10184){
var args__6541__auto__ = cljs.core.seq(arglist__10184);
return progress__delegate(args__6541__auto__);
});
progress.cljs$core$IFn$_invoke$arity$variadic = progress__delegate;
return progress;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.q = (function() { 
var q__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__8167_10185 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__8168_10186 = null;var count__8169_10187 = 0;var i__8170_10188 = 0;while(true){
if((i__8170_10188 < count__8169_10187))
{var arg__6543__auto___10189 = cljs.core._nth.call(null,chunk__8168_10186,i__8170_10188);a__6542__auto__.push(arg__6543__auto___10189);
{
var G__10190 = seq__8167_10185;
var G__10191 = chunk__8168_10186;
var G__10192 = count__8169_10187;
var G__10193 = (i__8170_10188 + 1);
seq__8167_10185 = G__10190;
chunk__8168_10186 = G__10191;
count__8169_10187 = G__10192;
i__8170_10188 = G__10193;
continue;
}
} else
{var temp__4092__auto___10194 = cljs.core.seq.call(null,seq__8167_10185);if(temp__4092__auto___10194)
{var seq__8167_10195__$1 = temp__4092__auto___10194;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8167_10195__$1))
{var c__5632__auto___10196 = cljs.core.chunk_first.call(null,seq__8167_10195__$1);{
var G__10197 = cljs.core.chunk_rest.call(null,seq__8167_10195__$1);
var G__10198 = c__5632__auto___10196;
var G__10199 = cljs.core.count.call(null,c__5632__auto___10196);
var G__10200 = 0;
seq__8167_10185 = G__10197;
chunk__8168_10186 = G__10198;
count__8169_10187 = G__10199;
i__8170_10188 = G__10200;
continue;
}
} else
{var arg__6543__auto___10201 = cljs.core.first.call(null,seq__8167_10195__$1);a__6542__auto__.push(arg__6543__auto___10201);
{
var G__10202 = cljs.core.next.call(null,seq__8167_10195__$1);
var G__10203 = null;
var G__10204 = 0;
var G__10205 = 0;
seq__8167_10185 = G__10202;
chunk__8168_10186 = G__10203;
count__8169_10187 = G__10204;
i__8170_10188 = G__10205;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.q.apply(null,a__6542__auto__);
};
var q = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return q__delegate.call(this,args__6541__auto__);};
q.cljs$lang$maxFixedArity = 0;
q.cljs$lang$applyTo = (function (arglist__10206){
var args__6541__auto__ = cljs.core.seq(arglist__10206);
return q__delegate(args__6541__auto__);
});
q.cljs$core$IFn$_invoke$arity$variadic = q__delegate;
return q;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.rp = (function() { 
var rp__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__8175_10207 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__8176_10208 = null;var count__8177_10209 = 0;var i__8178_10210 = 0;while(true){
if((i__8178_10210 < count__8177_10209))
{var arg__6543__auto___10211 = cljs.core._nth.call(null,chunk__8176_10208,i__8178_10210);a__6542__auto__.push(arg__6543__auto___10211);
{
var G__10212 = seq__8175_10207;
var G__10213 = chunk__8176_10208;
var G__10214 = count__8177_10209;
var G__10215 = (i__8178_10210 + 1);
seq__8175_10207 = G__10212;
chunk__8176_10208 = G__10213;
count__8177_10209 = G__10214;
i__8178_10210 = G__10215;
continue;
}
} else
{var temp__4092__auto___10216 = cljs.core.seq.call(null,seq__8175_10207);if(temp__4092__auto___10216)
{var seq__8175_10217__$1 = temp__4092__auto___10216;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8175_10217__$1))
{var c__5632__auto___10218 = cljs.core.chunk_first.call(null,seq__8175_10217__$1);{
var G__10219 = cljs.core.chunk_rest.call(null,seq__8175_10217__$1);
var G__10220 = c__5632__auto___10218;
var G__10221 = cljs.core.count.call(null,c__5632__auto___10218);
var G__10222 = 0;
seq__8175_10207 = G__10219;
chunk__8176_10208 = G__10220;
count__8177_10209 = G__10221;
i__8178_10210 = G__10222;
continue;
}
} else
{var arg__6543__auto___10223 = cljs.core.first.call(null,seq__8175_10217__$1);a__6542__auto__.push(arg__6543__auto___10223);
{
var G__10224 = cljs.core.next.call(null,seq__8175_10217__$1);
var G__10225 = null;
var G__10226 = 0;
var G__10227 = 0;
seq__8175_10207 = G__10224;
chunk__8176_10208 = G__10225;
count__8177_10209 = G__10226;
i__8178_10210 = G__10227;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.rp.apply(null,a__6542__auto__);
};
var rp = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return rp__delegate.call(this,args__6541__auto__);};
rp.cljs$lang$maxFixedArity = 0;
rp.cljs$lang$applyTo = (function (arglist__10228){
var args__6541__auto__ = cljs.core.seq(arglist__10228);
return rp__delegate(args__6541__auto__);
});
rp.cljs$core$IFn$_invoke$arity$variadic = rp__delegate;
return rp;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.rt = (function() { 
var rt__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__8183_10229 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__8184_10230 = null;var count__8185_10231 = 0;var i__8186_10232 = 0;while(true){
if((i__8186_10232 < count__8185_10231))
{var arg__6543__auto___10233 = cljs.core._nth.call(null,chunk__8184_10230,i__8186_10232);a__6542__auto__.push(arg__6543__auto___10233);
{
var G__10234 = seq__8183_10229;
var G__10235 = chunk__8184_10230;
var G__10236 = count__8185_10231;
var G__10237 = (i__8186_10232 + 1);
seq__8183_10229 = G__10234;
chunk__8184_10230 = G__10235;
count__8185_10231 = G__10236;
i__8186_10232 = G__10237;
continue;
}
} else
{var temp__4092__auto___10238 = cljs.core.seq.call(null,seq__8183_10229);if(temp__4092__auto___10238)
{var seq__8183_10239__$1 = temp__4092__auto___10238;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8183_10239__$1))
{var c__5632__auto___10240 = cljs.core.chunk_first.call(null,seq__8183_10239__$1);{
var G__10241 = cljs.core.chunk_rest.call(null,seq__8183_10239__$1);
var G__10242 = c__5632__auto___10240;
var G__10243 = cljs.core.count.call(null,c__5632__auto___10240);
var G__10244 = 0;
seq__8183_10229 = G__10241;
chunk__8184_10230 = G__10242;
count__8185_10231 = G__10243;
i__8186_10232 = G__10244;
continue;
}
} else
{var arg__6543__auto___10245 = cljs.core.first.call(null,seq__8183_10239__$1);a__6542__auto__.push(arg__6543__auto___10245);
{
var G__10246 = cljs.core.next.call(null,seq__8183_10239__$1);
var G__10247 = null;
var G__10248 = 0;
var G__10249 = 0;
seq__8183_10229 = G__10246;
chunk__8184_10230 = G__10247;
count__8185_10231 = G__10248;
i__8186_10232 = G__10249;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.rt.apply(null,a__6542__auto__);
};
var rt = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return rt__delegate.call(this,args__6541__auto__);};
rt.cljs$lang$maxFixedArity = 0;
rt.cljs$lang$applyTo = (function (arglist__10250){
var args__6541__auto__ = cljs.core.seq(arglist__10250);
return rt__delegate(args__6541__auto__);
});
rt.cljs$core$IFn$_invoke$arity$variadic = rt__delegate;
return rt;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.ruby = (function() { 
var ruby__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__8191_10251 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__8192_10252 = null;var count__8193_10253 = 0;var i__8194_10254 = 0;while(true){
if((i__8194_10254 < count__8193_10253))
{var arg__6543__auto___10255 = cljs.core._nth.call(null,chunk__8192_10252,i__8194_10254);a__6542__auto__.push(arg__6543__auto___10255);
{
var G__10256 = seq__8191_10251;
var G__10257 = chunk__8192_10252;
var G__10258 = count__8193_10253;
var G__10259 = (i__8194_10254 + 1);
seq__8191_10251 = G__10256;
chunk__8192_10252 = G__10257;
count__8193_10253 = G__10258;
i__8194_10254 = G__10259;
continue;
}
} else
{var temp__4092__auto___10260 = cljs.core.seq.call(null,seq__8191_10251);if(temp__4092__auto___10260)
{var seq__8191_10261__$1 = temp__4092__auto___10260;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8191_10261__$1))
{var c__5632__auto___10262 = cljs.core.chunk_first.call(null,seq__8191_10261__$1);{
var G__10263 = cljs.core.chunk_rest.call(null,seq__8191_10261__$1);
var G__10264 = c__5632__auto___10262;
var G__10265 = cljs.core.count.call(null,c__5632__auto___10262);
var G__10266 = 0;
seq__8191_10251 = G__10263;
chunk__8192_10252 = G__10264;
count__8193_10253 = G__10265;
i__8194_10254 = G__10266;
continue;
}
} else
{var arg__6543__auto___10267 = cljs.core.first.call(null,seq__8191_10261__$1);a__6542__auto__.push(arg__6543__auto___10267);
{
var G__10268 = cljs.core.next.call(null,seq__8191_10261__$1);
var G__10269 = null;
var G__10270 = 0;
var G__10271 = 0;
seq__8191_10251 = G__10268;
chunk__8192_10252 = G__10269;
count__8193_10253 = G__10270;
i__8194_10254 = G__10271;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.ruby.apply(null,a__6542__auto__);
};
var ruby = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ruby__delegate.call(this,args__6541__auto__);};
ruby.cljs$lang$maxFixedArity = 0;
ruby.cljs$lang$applyTo = (function (arglist__10272){
var args__6541__auto__ = cljs.core.seq(arglist__10272);
return ruby__delegate(args__6541__auto__);
});
ruby.cljs$core$IFn$_invoke$arity$variadic = ruby__delegate;
return ruby;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.s = (function() { 
var s__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__8199_10273 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__8200_10274 = null;var count__8201_10275 = 0;var i__8202_10276 = 0;while(true){
if((i__8202_10276 < count__8201_10275))
{var arg__6543__auto___10277 = cljs.core._nth.call(null,chunk__8200_10274,i__8202_10276);a__6542__auto__.push(arg__6543__auto___10277);
{
var G__10278 = seq__8199_10273;
var G__10279 = chunk__8200_10274;
var G__10280 = count__8201_10275;
var G__10281 = (i__8202_10276 + 1);
seq__8199_10273 = G__10278;
chunk__8200_10274 = G__10279;
count__8201_10275 = G__10280;
i__8202_10276 = G__10281;
continue;
}
} else
{var temp__4092__auto___10282 = cljs.core.seq.call(null,seq__8199_10273);if(temp__4092__auto___10282)
{var seq__8199_10283__$1 = temp__4092__auto___10282;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8199_10283__$1))
{var c__5632__auto___10284 = cljs.core.chunk_first.call(null,seq__8199_10283__$1);{
var G__10285 = cljs.core.chunk_rest.call(null,seq__8199_10283__$1);
var G__10286 = c__5632__auto___10284;
var G__10287 = cljs.core.count.call(null,c__5632__auto___10284);
var G__10288 = 0;
seq__8199_10273 = G__10285;
chunk__8200_10274 = G__10286;
count__8201_10275 = G__10287;
i__8202_10276 = G__10288;
continue;
}
} else
{var arg__6543__auto___10289 = cljs.core.first.call(null,seq__8199_10283__$1);a__6542__auto__.push(arg__6543__auto___10289);
{
var G__10290 = cljs.core.next.call(null,seq__8199_10283__$1);
var G__10291 = null;
var G__10292 = 0;
var G__10293 = 0;
seq__8199_10273 = G__10290;
chunk__8200_10274 = G__10291;
count__8201_10275 = G__10292;
i__8202_10276 = G__10293;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.s.apply(null,a__6542__auto__);
};
var s = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return s__delegate.call(this,args__6541__auto__);};
s.cljs$lang$maxFixedArity = 0;
s.cljs$lang$applyTo = (function (arglist__10294){
var args__6541__auto__ = cljs.core.seq(arglist__10294);
return s__delegate(args__6541__auto__);
});
s.cljs$core$IFn$_invoke$arity$variadic = s__delegate;
return s;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.samp = (function() { 
var samp__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__8207_10295 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__8208_10296 = null;var count__8209_10297 = 0;var i__8210_10298 = 0;while(true){
if((i__8210_10298 < count__8209_10297))
{var arg__6543__auto___10299 = cljs.core._nth.call(null,chunk__8208_10296,i__8210_10298);a__6542__auto__.push(arg__6543__auto___10299);
{
var G__10300 = seq__8207_10295;
var G__10301 = chunk__8208_10296;
var G__10302 = count__8209_10297;
var G__10303 = (i__8210_10298 + 1);
seq__8207_10295 = G__10300;
chunk__8208_10296 = G__10301;
count__8209_10297 = G__10302;
i__8210_10298 = G__10303;
continue;
}
} else
{var temp__4092__auto___10304 = cljs.core.seq.call(null,seq__8207_10295);if(temp__4092__auto___10304)
{var seq__8207_10305__$1 = temp__4092__auto___10304;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8207_10305__$1))
{var c__5632__auto___10306 = cljs.core.chunk_first.call(null,seq__8207_10305__$1);{
var G__10307 = cljs.core.chunk_rest.call(null,seq__8207_10305__$1);
var G__10308 = c__5632__auto___10306;
var G__10309 = cljs.core.count.call(null,c__5632__auto___10306);
var G__10310 = 0;
seq__8207_10295 = G__10307;
chunk__8208_10296 = G__10308;
count__8209_10297 = G__10309;
i__8210_10298 = G__10310;
continue;
}
} else
{var arg__6543__auto___10311 = cljs.core.first.call(null,seq__8207_10305__$1);a__6542__auto__.push(arg__6543__auto___10311);
{
var G__10312 = cljs.core.next.call(null,seq__8207_10305__$1);
var G__10313 = null;
var G__10314 = 0;
var G__10315 = 0;
seq__8207_10295 = G__10312;
chunk__8208_10296 = G__10313;
count__8209_10297 = G__10314;
i__8210_10298 = G__10315;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.samp.apply(null,a__6542__auto__);
};
var samp = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return samp__delegate.call(this,args__6541__auto__);};
samp.cljs$lang$maxFixedArity = 0;
samp.cljs$lang$applyTo = (function (arglist__10316){
var args__6541__auto__ = cljs.core.seq(arglist__10316);
return samp__delegate(args__6541__auto__);
});
samp.cljs$core$IFn$_invoke$arity$variadic = samp__delegate;
return samp;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.script = (function() { 
var script__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__8215_10317 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__8216_10318 = null;var count__8217_10319 = 0;var i__8218_10320 = 0;while(true){
if((i__8218_10320 < count__8217_10319))
{var arg__6543__auto___10321 = cljs.core._nth.call(null,chunk__8216_10318,i__8218_10320);a__6542__auto__.push(arg__6543__auto___10321);
{
var G__10322 = seq__8215_10317;
var G__10323 = chunk__8216_10318;
var G__10324 = count__8217_10319;
var G__10325 = (i__8218_10320 + 1);
seq__8215_10317 = G__10322;
chunk__8216_10318 = G__10323;
count__8217_10319 = G__10324;
i__8218_10320 = G__10325;
continue;
}
} else
{var temp__4092__auto___10326 = cljs.core.seq.call(null,seq__8215_10317);if(temp__4092__auto___10326)
{var seq__8215_10327__$1 = temp__4092__auto___10326;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8215_10327__$1))
{var c__5632__auto___10328 = cljs.core.chunk_first.call(null,seq__8215_10327__$1);{
var G__10329 = cljs.core.chunk_rest.call(null,seq__8215_10327__$1);
var G__10330 = c__5632__auto___10328;
var G__10331 = cljs.core.count.call(null,c__5632__auto___10328);
var G__10332 = 0;
seq__8215_10317 = G__10329;
chunk__8216_10318 = G__10330;
count__8217_10319 = G__10331;
i__8218_10320 = G__10332;
continue;
}
} else
{var arg__6543__auto___10333 = cljs.core.first.call(null,seq__8215_10327__$1);a__6542__auto__.push(arg__6543__auto___10333);
{
var G__10334 = cljs.core.next.call(null,seq__8215_10327__$1);
var G__10335 = null;
var G__10336 = 0;
var G__10337 = 0;
seq__8215_10317 = G__10334;
chunk__8216_10318 = G__10335;
count__8217_10319 = G__10336;
i__8218_10320 = G__10337;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.script.apply(null,a__6542__auto__);
};
var script = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return script__delegate.call(this,args__6541__auto__);};
script.cljs$lang$maxFixedArity = 0;
script.cljs$lang$applyTo = (function (arglist__10338){
var args__6541__auto__ = cljs.core.seq(arglist__10338);
return script__delegate(args__6541__auto__);
});
script.cljs$core$IFn$_invoke$arity$variadic = script__delegate;
return script;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.section = (function() { 
var section__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__8223_10339 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__8224_10340 = null;var count__8225_10341 = 0;var i__8226_10342 = 0;while(true){
if((i__8226_10342 < count__8225_10341))
{var arg__6543__auto___10343 = cljs.core._nth.call(null,chunk__8224_10340,i__8226_10342);a__6542__auto__.push(arg__6543__auto___10343);
{
var G__10344 = seq__8223_10339;
var G__10345 = chunk__8224_10340;
var G__10346 = count__8225_10341;
var G__10347 = (i__8226_10342 + 1);
seq__8223_10339 = G__10344;
chunk__8224_10340 = G__10345;
count__8225_10341 = G__10346;
i__8226_10342 = G__10347;
continue;
}
} else
{var temp__4092__auto___10348 = cljs.core.seq.call(null,seq__8223_10339);if(temp__4092__auto___10348)
{var seq__8223_10349__$1 = temp__4092__auto___10348;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8223_10349__$1))
{var c__5632__auto___10350 = cljs.core.chunk_first.call(null,seq__8223_10349__$1);{
var G__10351 = cljs.core.chunk_rest.call(null,seq__8223_10349__$1);
var G__10352 = c__5632__auto___10350;
var G__10353 = cljs.core.count.call(null,c__5632__auto___10350);
var G__10354 = 0;
seq__8223_10339 = G__10351;
chunk__8224_10340 = G__10352;
count__8225_10341 = G__10353;
i__8226_10342 = G__10354;
continue;
}
} else
{var arg__6543__auto___10355 = cljs.core.first.call(null,seq__8223_10349__$1);a__6542__auto__.push(arg__6543__auto___10355);
{
var G__10356 = cljs.core.next.call(null,seq__8223_10349__$1);
var G__10357 = null;
var G__10358 = 0;
var G__10359 = 0;
seq__8223_10339 = G__10356;
chunk__8224_10340 = G__10357;
count__8225_10341 = G__10358;
i__8226_10342 = G__10359;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.section.apply(null,a__6542__auto__);
};
var section = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return section__delegate.call(this,args__6541__auto__);};
section.cljs$lang$maxFixedArity = 0;
section.cljs$lang$applyTo = (function (arglist__10360){
var args__6541__auto__ = cljs.core.seq(arglist__10360);
return section__delegate(args__6541__auto__);
});
section.cljs$core$IFn$_invoke$arity$variadic = section__delegate;
return section;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.select = (function() { 
var select__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__8231_10361 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__8232_10362 = null;var count__8233_10363 = 0;var i__8234_10364 = 0;while(true){
if((i__8234_10364 < count__8233_10363))
{var arg__6543__auto___10365 = cljs.core._nth.call(null,chunk__8232_10362,i__8234_10364);a__6542__auto__.push(arg__6543__auto___10365);
{
var G__10366 = seq__8231_10361;
var G__10367 = chunk__8232_10362;
var G__10368 = count__8233_10363;
var G__10369 = (i__8234_10364 + 1);
seq__8231_10361 = G__10366;
chunk__8232_10362 = G__10367;
count__8233_10363 = G__10368;
i__8234_10364 = G__10369;
continue;
}
} else
{var temp__4092__auto___10370 = cljs.core.seq.call(null,seq__8231_10361);if(temp__4092__auto___10370)
{var seq__8231_10371__$1 = temp__4092__auto___10370;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8231_10371__$1))
{var c__5632__auto___10372 = cljs.core.chunk_first.call(null,seq__8231_10371__$1);{
var G__10373 = cljs.core.chunk_rest.call(null,seq__8231_10371__$1);
var G__10374 = c__5632__auto___10372;
var G__10375 = cljs.core.count.call(null,c__5632__auto___10372);
var G__10376 = 0;
seq__8231_10361 = G__10373;
chunk__8232_10362 = G__10374;
count__8233_10363 = G__10375;
i__8234_10364 = G__10376;
continue;
}
} else
{var arg__6543__auto___10377 = cljs.core.first.call(null,seq__8231_10371__$1);a__6542__auto__.push(arg__6543__auto___10377);
{
var G__10378 = cljs.core.next.call(null,seq__8231_10371__$1);
var G__10379 = null;
var G__10380 = 0;
var G__10381 = 0;
seq__8231_10361 = G__10378;
chunk__8232_10362 = G__10379;
count__8233_10363 = G__10380;
i__8234_10364 = G__10381;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.select.apply(null,a__6542__auto__);
};
var select = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return select__delegate.call(this,args__6541__auto__);};
select.cljs$lang$maxFixedArity = 0;
select.cljs$lang$applyTo = (function (arglist__10382){
var args__6541__auto__ = cljs.core.seq(arglist__10382);
return select__delegate(args__6541__auto__);
});
select.cljs$core$IFn$_invoke$arity$variadic = select__delegate;
return select;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.small = (function() { 
var small__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__8239_10383 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__8240_10384 = null;var count__8241_10385 = 0;var i__8242_10386 = 0;while(true){
if((i__8242_10386 < count__8241_10385))
{var arg__6543__auto___10387 = cljs.core._nth.call(null,chunk__8240_10384,i__8242_10386);a__6542__auto__.push(arg__6543__auto___10387);
{
var G__10388 = seq__8239_10383;
var G__10389 = chunk__8240_10384;
var G__10390 = count__8241_10385;
var G__10391 = (i__8242_10386 + 1);
seq__8239_10383 = G__10388;
chunk__8240_10384 = G__10389;
count__8241_10385 = G__10390;
i__8242_10386 = G__10391;
continue;
}
} else
{var temp__4092__auto___10392 = cljs.core.seq.call(null,seq__8239_10383);if(temp__4092__auto___10392)
{var seq__8239_10393__$1 = temp__4092__auto___10392;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8239_10393__$1))
{var c__5632__auto___10394 = cljs.core.chunk_first.call(null,seq__8239_10393__$1);{
var G__10395 = cljs.core.chunk_rest.call(null,seq__8239_10393__$1);
var G__10396 = c__5632__auto___10394;
var G__10397 = cljs.core.count.call(null,c__5632__auto___10394);
var G__10398 = 0;
seq__8239_10383 = G__10395;
chunk__8240_10384 = G__10396;
count__8241_10385 = G__10397;
i__8242_10386 = G__10398;
continue;
}
} else
{var arg__6543__auto___10399 = cljs.core.first.call(null,seq__8239_10393__$1);a__6542__auto__.push(arg__6543__auto___10399);
{
var G__10400 = cljs.core.next.call(null,seq__8239_10393__$1);
var G__10401 = null;
var G__10402 = 0;
var G__10403 = 0;
seq__8239_10383 = G__10400;
chunk__8240_10384 = G__10401;
count__8241_10385 = G__10402;
i__8242_10386 = G__10403;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.small.apply(null,a__6542__auto__);
};
var small = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return small__delegate.call(this,args__6541__auto__);};
small.cljs$lang$maxFixedArity = 0;
small.cljs$lang$applyTo = (function (arglist__10404){
var args__6541__auto__ = cljs.core.seq(arglist__10404);
return small__delegate(args__6541__auto__);
});
small.cljs$core$IFn$_invoke$arity$variadic = small__delegate;
return small;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.source = (function() { 
var source__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__8247_10405 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__8248_10406 = null;var count__8249_10407 = 0;var i__8250_10408 = 0;while(true){
if((i__8250_10408 < count__8249_10407))
{var arg__6543__auto___10409 = cljs.core._nth.call(null,chunk__8248_10406,i__8250_10408);a__6542__auto__.push(arg__6543__auto___10409);
{
var G__10410 = seq__8247_10405;
var G__10411 = chunk__8248_10406;
var G__10412 = count__8249_10407;
var G__10413 = (i__8250_10408 + 1);
seq__8247_10405 = G__10410;
chunk__8248_10406 = G__10411;
count__8249_10407 = G__10412;
i__8250_10408 = G__10413;
continue;
}
} else
{var temp__4092__auto___10414 = cljs.core.seq.call(null,seq__8247_10405);if(temp__4092__auto___10414)
{var seq__8247_10415__$1 = temp__4092__auto___10414;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8247_10415__$1))
{var c__5632__auto___10416 = cljs.core.chunk_first.call(null,seq__8247_10415__$1);{
var G__10417 = cljs.core.chunk_rest.call(null,seq__8247_10415__$1);
var G__10418 = c__5632__auto___10416;
var G__10419 = cljs.core.count.call(null,c__5632__auto___10416);
var G__10420 = 0;
seq__8247_10405 = G__10417;
chunk__8248_10406 = G__10418;
count__8249_10407 = G__10419;
i__8250_10408 = G__10420;
continue;
}
} else
{var arg__6543__auto___10421 = cljs.core.first.call(null,seq__8247_10415__$1);a__6542__auto__.push(arg__6543__auto___10421);
{
var G__10422 = cljs.core.next.call(null,seq__8247_10415__$1);
var G__10423 = null;
var G__10424 = 0;
var G__10425 = 0;
seq__8247_10405 = G__10422;
chunk__8248_10406 = G__10423;
count__8249_10407 = G__10424;
i__8250_10408 = G__10425;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.source.apply(null,a__6542__auto__);
};
var source = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return source__delegate.call(this,args__6541__auto__);};
source.cljs$lang$maxFixedArity = 0;
source.cljs$lang$applyTo = (function (arglist__10426){
var args__6541__auto__ = cljs.core.seq(arglist__10426);
return source__delegate(args__6541__auto__);
});
source.cljs$core$IFn$_invoke$arity$variadic = source__delegate;
return source;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.span = (function() { 
var span__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__8255_10427 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__8256_10428 = null;var count__8257_10429 = 0;var i__8258_10430 = 0;while(true){
if((i__8258_10430 < count__8257_10429))
{var arg__6543__auto___10431 = cljs.core._nth.call(null,chunk__8256_10428,i__8258_10430);a__6542__auto__.push(arg__6543__auto___10431);
{
var G__10432 = seq__8255_10427;
var G__10433 = chunk__8256_10428;
var G__10434 = count__8257_10429;
var G__10435 = (i__8258_10430 + 1);
seq__8255_10427 = G__10432;
chunk__8256_10428 = G__10433;
count__8257_10429 = G__10434;
i__8258_10430 = G__10435;
continue;
}
} else
{var temp__4092__auto___10436 = cljs.core.seq.call(null,seq__8255_10427);if(temp__4092__auto___10436)
{var seq__8255_10437__$1 = temp__4092__auto___10436;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8255_10437__$1))
{var c__5632__auto___10438 = cljs.core.chunk_first.call(null,seq__8255_10437__$1);{
var G__10439 = cljs.core.chunk_rest.call(null,seq__8255_10437__$1);
var G__10440 = c__5632__auto___10438;
var G__10441 = cljs.core.count.call(null,c__5632__auto___10438);
var G__10442 = 0;
seq__8255_10427 = G__10439;
chunk__8256_10428 = G__10440;
count__8257_10429 = G__10441;
i__8258_10430 = G__10442;
continue;
}
} else
{var arg__6543__auto___10443 = cljs.core.first.call(null,seq__8255_10437__$1);a__6542__auto__.push(arg__6543__auto___10443);
{
var G__10444 = cljs.core.next.call(null,seq__8255_10437__$1);
var G__10445 = null;
var G__10446 = 0;
var G__10447 = 0;
seq__8255_10427 = G__10444;
chunk__8256_10428 = G__10445;
count__8257_10429 = G__10446;
i__8258_10430 = G__10447;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.span.apply(null,a__6542__auto__);
};
var span = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return span__delegate.call(this,args__6541__auto__);};
span.cljs$lang$maxFixedArity = 0;
span.cljs$lang$applyTo = (function (arglist__10448){
var args__6541__auto__ = cljs.core.seq(arglist__10448);
return span__delegate(args__6541__auto__);
});
span.cljs$core$IFn$_invoke$arity$variadic = span__delegate;
return span;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.strong = (function() { 
var strong__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__8263_10449 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__8264_10450 = null;var count__8265_10451 = 0;var i__8266_10452 = 0;while(true){
if((i__8266_10452 < count__8265_10451))
{var arg__6543__auto___10453 = cljs.core._nth.call(null,chunk__8264_10450,i__8266_10452);a__6542__auto__.push(arg__6543__auto___10453);
{
var G__10454 = seq__8263_10449;
var G__10455 = chunk__8264_10450;
var G__10456 = count__8265_10451;
var G__10457 = (i__8266_10452 + 1);
seq__8263_10449 = G__10454;
chunk__8264_10450 = G__10455;
count__8265_10451 = G__10456;
i__8266_10452 = G__10457;
continue;
}
} else
{var temp__4092__auto___10458 = cljs.core.seq.call(null,seq__8263_10449);if(temp__4092__auto___10458)
{var seq__8263_10459__$1 = temp__4092__auto___10458;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8263_10459__$1))
{var c__5632__auto___10460 = cljs.core.chunk_first.call(null,seq__8263_10459__$1);{
var G__10461 = cljs.core.chunk_rest.call(null,seq__8263_10459__$1);
var G__10462 = c__5632__auto___10460;
var G__10463 = cljs.core.count.call(null,c__5632__auto___10460);
var G__10464 = 0;
seq__8263_10449 = G__10461;
chunk__8264_10450 = G__10462;
count__8265_10451 = G__10463;
i__8266_10452 = G__10464;
continue;
}
} else
{var arg__6543__auto___10465 = cljs.core.first.call(null,seq__8263_10459__$1);a__6542__auto__.push(arg__6543__auto___10465);
{
var G__10466 = cljs.core.next.call(null,seq__8263_10459__$1);
var G__10467 = null;
var G__10468 = 0;
var G__10469 = 0;
seq__8263_10449 = G__10466;
chunk__8264_10450 = G__10467;
count__8265_10451 = G__10468;
i__8266_10452 = G__10469;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.strong.apply(null,a__6542__auto__);
};
var strong = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return strong__delegate.call(this,args__6541__auto__);};
strong.cljs$lang$maxFixedArity = 0;
strong.cljs$lang$applyTo = (function (arglist__10470){
var args__6541__auto__ = cljs.core.seq(arglist__10470);
return strong__delegate(args__6541__auto__);
});
strong.cljs$core$IFn$_invoke$arity$variadic = strong__delegate;
return strong;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.style = (function() { 
var style__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__8271_10471 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__8272_10472 = null;var count__8273_10473 = 0;var i__8274_10474 = 0;while(true){
if((i__8274_10474 < count__8273_10473))
{var arg__6543__auto___10475 = cljs.core._nth.call(null,chunk__8272_10472,i__8274_10474);a__6542__auto__.push(arg__6543__auto___10475);
{
var G__10476 = seq__8271_10471;
var G__10477 = chunk__8272_10472;
var G__10478 = count__8273_10473;
var G__10479 = (i__8274_10474 + 1);
seq__8271_10471 = G__10476;
chunk__8272_10472 = G__10477;
count__8273_10473 = G__10478;
i__8274_10474 = G__10479;
continue;
}
} else
{var temp__4092__auto___10480 = cljs.core.seq.call(null,seq__8271_10471);if(temp__4092__auto___10480)
{var seq__8271_10481__$1 = temp__4092__auto___10480;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8271_10481__$1))
{var c__5632__auto___10482 = cljs.core.chunk_first.call(null,seq__8271_10481__$1);{
var G__10483 = cljs.core.chunk_rest.call(null,seq__8271_10481__$1);
var G__10484 = c__5632__auto___10482;
var G__10485 = cljs.core.count.call(null,c__5632__auto___10482);
var G__10486 = 0;
seq__8271_10471 = G__10483;
chunk__8272_10472 = G__10484;
count__8273_10473 = G__10485;
i__8274_10474 = G__10486;
continue;
}
} else
{var arg__6543__auto___10487 = cljs.core.first.call(null,seq__8271_10481__$1);a__6542__auto__.push(arg__6543__auto___10487);
{
var G__10488 = cljs.core.next.call(null,seq__8271_10481__$1);
var G__10489 = null;
var G__10490 = 0;
var G__10491 = 0;
seq__8271_10471 = G__10488;
chunk__8272_10472 = G__10489;
count__8273_10473 = G__10490;
i__8274_10474 = G__10491;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.style.apply(null,a__6542__auto__);
};
var style = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return style__delegate.call(this,args__6541__auto__);};
style.cljs$lang$maxFixedArity = 0;
style.cljs$lang$applyTo = (function (arglist__10492){
var args__6541__auto__ = cljs.core.seq(arglist__10492);
return style__delegate(args__6541__auto__);
});
style.cljs$core$IFn$_invoke$arity$variadic = style__delegate;
return style;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.sub = (function() { 
var sub__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__8279_10493 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__8280_10494 = null;var count__8281_10495 = 0;var i__8282_10496 = 0;while(true){
if((i__8282_10496 < count__8281_10495))
{var arg__6543__auto___10497 = cljs.core._nth.call(null,chunk__8280_10494,i__8282_10496);a__6542__auto__.push(arg__6543__auto___10497);
{
var G__10498 = seq__8279_10493;
var G__10499 = chunk__8280_10494;
var G__10500 = count__8281_10495;
var G__10501 = (i__8282_10496 + 1);
seq__8279_10493 = G__10498;
chunk__8280_10494 = G__10499;
count__8281_10495 = G__10500;
i__8282_10496 = G__10501;
continue;
}
} else
{var temp__4092__auto___10502 = cljs.core.seq.call(null,seq__8279_10493);if(temp__4092__auto___10502)
{var seq__8279_10503__$1 = temp__4092__auto___10502;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8279_10503__$1))
{var c__5632__auto___10504 = cljs.core.chunk_first.call(null,seq__8279_10503__$1);{
var G__10505 = cljs.core.chunk_rest.call(null,seq__8279_10503__$1);
var G__10506 = c__5632__auto___10504;
var G__10507 = cljs.core.count.call(null,c__5632__auto___10504);
var G__10508 = 0;
seq__8279_10493 = G__10505;
chunk__8280_10494 = G__10506;
count__8281_10495 = G__10507;
i__8282_10496 = G__10508;
continue;
}
} else
{var arg__6543__auto___10509 = cljs.core.first.call(null,seq__8279_10503__$1);a__6542__auto__.push(arg__6543__auto___10509);
{
var G__10510 = cljs.core.next.call(null,seq__8279_10503__$1);
var G__10511 = null;
var G__10512 = 0;
var G__10513 = 0;
seq__8279_10493 = G__10510;
chunk__8280_10494 = G__10511;
count__8281_10495 = G__10512;
i__8282_10496 = G__10513;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.sub.apply(null,a__6542__auto__);
};
var sub = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return sub__delegate.call(this,args__6541__auto__);};
sub.cljs$lang$maxFixedArity = 0;
sub.cljs$lang$applyTo = (function (arglist__10514){
var args__6541__auto__ = cljs.core.seq(arglist__10514);
return sub__delegate(args__6541__auto__);
});
sub.cljs$core$IFn$_invoke$arity$variadic = sub__delegate;
return sub;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.summary = (function() { 
var summary__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__8287_10515 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__8288_10516 = null;var count__8289_10517 = 0;var i__8290_10518 = 0;while(true){
if((i__8290_10518 < count__8289_10517))
{var arg__6543__auto___10519 = cljs.core._nth.call(null,chunk__8288_10516,i__8290_10518);a__6542__auto__.push(arg__6543__auto___10519);
{
var G__10520 = seq__8287_10515;
var G__10521 = chunk__8288_10516;
var G__10522 = count__8289_10517;
var G__10523 = (i__8290_10518 + 1);
seq__8287_10515 = G__10520;
chunk__8288_10516 = G__10521;
count__8289_10517 = G__10522;
i__8290_10518 = G__10523;
continue;
}
} else
{var temp__4092__auto___10524 = cljs.core.seq.call(null,seq__8287_10515);if(temp__4092__auto___10524)
{var seq__8287_10525__$1 = temp__4092__auto___10524;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8287_10525__$1))
{var c__5632__auto___10526 = cljs.core.chunk_first.call(null,seq__8287_10525__$1);{
var G__10527 = cljs.core.chunk_rest.call(null,seq__8287_10525__$1);
var G__10528 = c__5632__auto___10526;
var G__10529 = cljs.core.count.call(null,c__5632__auto___10526);
var G__10530 = 0;
seq__8287_10515 = G__10527;
chunk__8288_10516 = G__10528;
count__8289_10517 = G__10529;
i__8290_10518 = G__10530;
continue;
}
} else
{var arg__6543__auto___10531 = cljs.core.first.call(null,seq__8287_10525__$1);a__6542__auto__.push(arg__6543__auto___10531);
{
var G__10532 = cljs.core.next.call(null,seq__8287_10525__$1);
var G__10533 = null;
var G__10534 = 0;
var G__10535 = 0;
seq__8287_10515 = G__10532;
chunk__8288_10516 = G__10533;
count__8289_10517 = G__10534;
i__8290_10518 = G__10535;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.summary.apply(null,a__6542__auto__);
};
var summary = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return summary__delegate.call(this,args__6541__auto__);};
summary.cljs$lang$maxFixedArity = 0;
summary.cljs$lang$applyTo = (function (arglist__10536){
var args__6541__auto__ = cljs.core.seq(arglist__10536);
return summary__delegate(args__6541__auto__);
});
summary.cljs$core$IFn$_invoke$arity$variadic = summary__delegate;
return summary;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.sup = (function() { 
var sup__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__8295_10537 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__8296_10538 = null;var count__8297_10539 = 0;var i__8298_10540 = 0;while(true){
if((i__8298_10540 < count__8297_10539))
{var arg__6543__auto___10541 = cljs.core._nth.call(null,chunk__8296_10538,i__8298_10540);a__6542__auto__.push(arg__6543__auto___10541);
{
var G__10542 = seq__8295_10537;
var G__10543 = chunk__8296_10538;
var G__10544 = count__8297_10539;
var G__10545 = (i__8298_10540 + 1);
seq__8295_10537 = G__10542;
chunk__8296_10538 = G__10543;
count__8297_10539 = G__10544;
i__8298_10540 = G__10545;
continue;
}
} else
{var temp__4092__auto___10546 = cljs.core.seq.call(null,seq__8295_10537);if(temp__4092__auto___10546)
{var seq__8295_10547__$1 = temp__4092__auto___10546;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8295_10547__$1))
{var c__5632__auto___10548 = cljs.core.chunk_first.call(null,seq__8295_10547__$1);{
var G__10549 = cljs.core.chunk_rest.call(null,seq__8295_10547__$1);
var G__10550 = c__5632__auto___10548;
var G__10551 = cljs.core.count.call(null,c__5632__auto___10548);
var G__10552 = 0;
seq__8295_10537 = G__10549;
chunk__8296_10538 = G__10550;
count__8297_10539 = G__10551;
i__8298_10540 = G__10552;
continue;
}
} else
{var arg__6543__auto___10553 = cljs.core.first.call(null,seq__8295_10547__$1);a__6542__auto__.push(arg__6543__auto___10553);
{
var G__10554 = cljs.core.next.call(null,seq__8295_10547__$1);
var G__10555 = null;
var G__10556 = 0;
var G__10557 = 0;
seq__8295_10537 = G__10554;
chunk__8296_10538 = G__10555;
count__8297_10539 = G__10556;
i__8298_10540 = G__10557;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.sup.apply(null,a__6542__auto__);
};
var sup = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return sup__delegate.call(this,args__6541__auto__);};
sup.cljs$lang$maxFixedArity = 0;
sup.cljs$lang$applyTo = (function (arglist__10558){
var args__6541__auto__ = cljs.core.seq(arglist__10558);
return sup__delegate(args__6541__auto__);
});
sup.cljs$core$IFn$_invoke$arity$variadic = sup__delegate;
return sup;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.table = (function() { 
var table__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__8303_10559 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__8304_10560 = null;var count__8305_10561 = 0;var i__8306_10562 = 0;while(true){
if((i__8306_10562 < count__8305_10561))
{var arg__6543__auto___10563 = cljs.core._nth.call(null,chunk__8304_10560,i__8306_10562);a__6542__auto__.push(arg__6543__auto___10563);
{
var G__10564 = seq__8303_10559;
var G__10565 = chunk__8304_10560;
var G__10566 = count__8305_10561;
var G__10567 = (i__8306_10562 + 1);
seq__8303_10559 = G__10564;
chunk__8304_10560 = G__10565;
count__8305_10561 = G__10566;
i__8306_10562 = G__10567;
continue;
}
} else
{var temp__4092__auto___10568 = cljs.core.seq.call(null,seq__8303_10559);if(temp__4092__auto___10568)
{var seq__8303_10569__$1 = temp__4092__auto___10568;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8303_10569__$1))
{var c__5632__auto___10570 = cljs.core.chunk_first.call(null,seq__8303_10569__$1);{
var G__10571 = cljs.core.chunk_rest.call(null,seq__8303_10569__$1);
var G__10572 = c__5632__auto___10570;
var G__10573 = cljs.core.count.call(null,c__5632__auto___10570);
var G__10574 = 0;
seq__8303_10559 = G__10571;
chunk__8304_10560 = G__10572;
count__8305_10561 = G__10573;
i__8306_10562 = G__10574;
continue;
}
} else
{var arg__6543__auto___10575 = cljs.core.first.call(null,seq__8303_10569__$1);a__6542__auto__.push(arg__6543__auto___10575);
{
var G__10576 = cljs.core.next.call(null,seq__8303_10569__$1);
var G__10577 = null;
var G__10578 = 0;
var G__10579 = 0;
seq__8303_10559 = G__10576;
chunk__8304_10560 = G__10577;
count__8305_10561 = G__10578;
i__8306_10562 = G__10579;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.table.apply(null,a__6542__auto__);
};
var table = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return table__delegate.call(this,args__6541__auto__);};
table.cljs$lang$maxFixedArity = 0;
table.cljs$lang$applyTo = (function (arglist__10580){
var args__6541__auto__ = cljs.core.seq(arglist__10580);
return table__delegate(args__6541__auto__);
});
table.cljs$core$IFn$_invoke$arity$variadic = table__delegate;
return table;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.tbody = (function() { 
var tbody__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__8311_10581 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__8312_10582 = null;var count__8313_10583 = 0;var i__8314_10584 = 0;while(true){
if((i__8314_10584 < count__8313_10583))
{var arg__6543__auto___10585 = cljs.core._nth.call(null,chunk__8312_10582,i__8314_10584);a__6542__auto__.push(arg__6543__auto___10585);
{
var G__10586 = seq__8311_10581;
var G__10587 = chunk__8312_10582;
var G__10588 = count__8313_10583;
var G__10589 = (i__8314_10584 + 1);
seq__8311_10581 = G__10586;
chunk__8312_10582 = G__10587;
count__8313_10583 = G__10588;
i__8314_10584 = G__10589;
continue;
}
} else
{var temp__4092__auto___10590 = cljs.core.seq.call(null,seq__8311_10581);if(temp__4092__auto___10590)
{var seq__8311_10591__$1 = temp__4092__auto___10590;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8311_10591__$1))
{var c__5632__auto___10592 = cljs.core.chunk_first.call(null,seq__8311_10591__$1);{
var G__10593 = cljs.core.chunk_rest.call(null,seq__8311_10591__$1);
var G__10594 = c__5632__auto___10592;
var G__10595 = cljs.core.count.call(null,c__5632__auto___10592);
var G__10596 = 0;
seq__8311_10581 = G__10593;
chunk__8312_10582 = G__10594;
count__8313_10583 = G__10595;
i__8314_10584 = G__10596;
continue;
}
} else
{var arg__6543__auto___10597 = cljs.core.first.call(null,seq__8311_10591__$1);a__6542__auto__.push(arg__6543__auto___10597);
{
var G__10598 = cljs.core.next.call(null,seq__8311_10591__$1);
var G__10599 = null;
var G__10600 = 0;
var G__10601 = 0;
seq__8311_10581 = G__10598;
chunk__8312_10582 = G__10599;
count__8313_10583 = G__10600;
i__8314_10584 = G__10601;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.tbody.apply(null,a__6542__auto__);
};
var tbody = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return tbody__delegate.call(this,args__6541__auto__);};
tbody.cljs$lang$maxFixedArity = 0;
tbody.cljs$lang$applyTo = (function (arglist__10602){
var args__6541__auto__ = cljs.core.seq(arglist__10602);
return tbody__delegate(args__6541__auto__);
});
tbody.cljs$core$IFn$_invoke$arity$variadic = tbody__delegate;
return tbody;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.td = (function() { 
var td__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__8319_10603 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__8320_10604 = null;var count__8321_10605 = 0;var i__8322_10606 = 0;while(true){
if((i__8322_10606 < count__8321_10605))
{var arg__6543__auto___10607 = cljs.core._nth.call(null,chunk__8320_10604,i__8322_10606);a__6542__auto__.push(arg__6543__auto___10607);
{
var G__10608 = seq__8319_10603;
var G__10609 = chunk__8320_10604;
var G__10610 = count__8321_10605;
var G__10611 = (i__8322_10606 + 1);
seq__8319_10603 = G__10608;
chunk__8320_10604 = G__10609;
count__8321_10605 = G__10610;
i__8322_10606 = G__10611;
continue;
}
} else
{var temp__4092__auto___10612 = cljs.core.seq.call(null,seq__8319_10603);if(temp__4092__auto___10612)
{var seq__8319_10613__$1 = temp__4092__auto___10612;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8319_10613__$1))
{var c__5632__auto___10614 = cljs.core.chunk_first.call(null,seq__8319_10613__$1);{
var G__10615 = cljs.core.chunk_rest.call(null,seq__8319_10613__$1);
var G__10616 = c__5632__auto___10614;
var G__10617 = cljs.core.count.call(null,c__5632__auto___10614);
var G__10618 = 0;
seq__8319_10603 = G__10615;
chunk__8320_10604 = G__10616;
count__8321_10605 = G__10617;
i__8322_10606 = G__10618;
continue;
}
} else
{var arg__6543__auto___10619 = cljs.core.first.call(null,seq__8319_10613__$1);a__6542__auto__.push(arg__6543__auto___10619);
{
var G__10620 = cljs.core.next.call(null,seq__8319_10613__$1);
var G__10621 = null;
var G__10622 = 0;
var G__10623 = 0;
seq__8319_10603 = G__10620;
chunk__8320_10604 = G__10621;
count__8321_10605 = G__10622;
i__8322_10606 = G__10623;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.td.apply(null,a__6542__auto__);
};
var td = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return td__delegate.call(this,args__6541__auto__);};
td.cljs$lang$maxFixedArity = 0;
td.cljs$lang$applyTo = (function (arglist__10624){
var args__6541__auto__ = cljs.core.seq(arglist__10624);
return td__delegate(args__6541__auto__);
});
td.cljs$core$IFn$_invoke$arity$variadic = td__delegate;
return td;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.textarea = (function() { 
var textarea__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__8327_10625 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__8328_10626 = null;var count__8329_10627 = 0;var i__8330_10628 = 0;while(true){
if((i__8330_10628 < count__8329_10627))
{var arg__6543__auto___10629 = cljs.core._nth.call(null,chunk__8328_10626,i__8330_10628);a__6542__auto__.push(arg__6543__auto___10629);
{
var G__10630 = seq__8327_10625;
var G__10631 = chunk__8328_10626;
var G__10632 = count__8329_10627;
var G__10633 = (i__8330_10628 + 1);
seq__8327_10625 = G__10630;
chunk__8328_10626 = G__10631;
count__8329_10627 = G__10632;
i__8330_10628 = G__10633;
continue;
}
} else
{var temp__4092__auto___10634 = cljs.core.seq.call(null,seq__8327_10625);if(temp__4092__auto___10634)
{var seq__8327_10635__$1 = temp__4092__auto___10634;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8327_10635__$1))
{var c__5632__auto___10636 = cljs.core.chunk_first.call(null,seq__8327_10635__$1);{
var G__10637 = cljs.core.chunk_rest.call(null,seq__8327_10635__$1);
var G__10638 = c__5632__auto___10636;
var G__10639 = cljs.core.count.call(null,c__5632__auto___10636);
var G__10640 = 0;
seq__8327_10625 = G__10637;
chunk__8328_10626 = G__10638;
count__8329_10627 = G__10639;
i__8330_10628 = G__10640;
continue;
}
} else
{var arg__6543__auto___10641 = cljs.core.first.call(null,seq__8327_10635__$1);a__6542__auto__.push(arg__6543__auto___10641);
{
var G__10642 = cljs.core.next.call(null,seq__8327_10635__$1);
var G__10643 = null;
var G__10644 = 0;
var G__10645 = 0;
seq__8327_10625 = G__10642;
chunk__8328_10626 = G__10643;
count__8329_10627 = G__10644;
i__8330_10628 = G__10645;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.textarea.apply(null,a__6542__auto__);
};
var textarea = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return textarea__delegate.call(this,args__6541__auto__);};
textarea.cljs$lang$maxFixedArity = 0;
textarea.cljs$lang$applyTo = (function (arglist__10646){
var args__6541__auto__ = cljs.core.seq(arglist__10646);
return textarea__delegate(args__6541__auto__);
});
textarea.cljs$core$IFn$_invoke$arity$variadic = textarea__delegate;
return textarea;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.tfoot = (function() { 
var tfoot__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__8335_10647 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__8336_10648 = null;var count__8337_10649 = 0;var i__8338_10650 = 0;while(true){
if((i__8338_10650 < count__8337_10649))
{var arg__6543__auto___10651 = cljs.core._nth.call(null,chunk__8336_10648,i__8338_10650);a__6542__auto__.push(arg__6543__auto___10651);
{
var G__10652 = seq__8335_10647;
var G__10653 = chunk__8336_10648;
var G__10654 = count__8337_10649;
var G__10655 = (i__8338_10650 + 1);
seq__8335_10647 = G__10652;
chunk__8336_10648 = G__10653;
count__8337_10649 = G__10654;
i__8338_10650 = G__10655;
continue;
}
} else
{var temp__4092__auto___10656 = cljs.core.seq.call(null,seq__8335_10647);if(temp__4092__auto___10656)
{var seq__8335_10657__$1 = temp__4092__auto___10656;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8335_10657__$1))
{var c__5632__auto___10658 = cljs.core.chunk_first.call(null,seq__8335_10657__$1);{
var G__10659 = cljs.core.chunk_rest.call(null,seq__8335_10657__$1);
var G__10660 = c__5632__auto___10658;
var G__10661 = cljs.core.count.call(null,c__5632__auto___10658);
var G__10662 = 0;
seq__8335_10647 = G__10659;
chunk__8336_10648 = G__10660;
count__8337_10649 = G__10661;
i__8338_10650 = G__10662;
continue;
}
} else
{var arg__6543__auto___10663 = cljs.core.first.call(null,seq__8335_10657__$1);a__6542__auto__.push(arg__6543__auto___10663);
{
var G__10664 = cljs.core.next.call(null,seq__8335_10657__$1);
var G__10665 = null;
var G__10666 = 0;
var G__10667 = 0;
seq__8335_10647 = G__10664;
chunk__8336_10648 = G__10665;
count__8337_10649 = G__10666;
i__8338_10650 = G__10667;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.tfoot.apply(null,a__6542__auto__);
};
var tfoot = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return tfoot__delegate.call(this,args__6541__auto__);};
tfoot.cljs$lang$maxFixedArity = 0;
tfoot.cljs$lang$applyTo = (function (arglist__10668){
var args__6541__auto__ = cljs.core.seq(arglist__10668);
return tfoot__delegate(args__6541__auto__);
});
tfoot.cljs$core$IFn$_invoke$arity$variadic = tfoot__delegate;
return tfoot;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.th = (function() { 
var th__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__8343_10669 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__8344_10670 = null;var count__8345_10671 = 0;var i__8346_10672 = 0;while(true){
if((i__8346_10672 < count__8345_10671))
{var arg__6543__auto___10673 = cljs.core._nth.call(null,chunk__8344_10670,i__8346_10672);a__6542__auto__.push(arg__6543__auto___10673);
{
var G__10674 = seq__8343_10669;
var G__10675 = chunk__8344_10670;
var G__10676 = count__8345_10671;
var G__10677 = (i__8346_10672 + 1);
seq__8343_10669 = G__10674;
chunk__8344_10670 = G__10675;
count__8345_10671 = G__10676;
i__8346_10672 = G__10677;
continue;
}
} else
{var temp__4092__auto___10678 = cljs.core.seq.call(null,seq__8343_10669);if(temp__4092__auto___10678)
{var seq__8343_10679__$1 = temp__4092__auto___10678;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8343_10679__$1))
{var c__5632__auto___10680 = cljs.core.chunk_first.call(null,seq__8343_10679__$1);{
var G__10681 = cljs.core.chunk_rest.call(null,seq__8343_10679__$1);
var G__10682 = c__5632__auto___10680;
var G__10683 = cljs.core.count.call(null,c__5632__auto___10680);
var G__10684 = 0;
seq__8343_10669 = G__10681;
chunk__8344_10670 = G__10682;
count__8345_10671 = G__10683;
i__8346_10672 = G__10684;
continue;
}
} else
{var arg__6543__auto___10685 = cljs.core.first.call(null,seq__8343_10679__$1);a__6542__auto__.push(arg__6543__auto___10685);
{
var G__10686 = cljs.core.next.call(null,seq__8343_10679__$1);
var G__10687 = null;
var G__10688 = 0;
var G__10689 = 0;
seq__8343_10669 = G__10686;
chunk__8344_10670 = G__10687;
count__8345_10671 = G__10688;
i__8346_10672 = G__10689;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.th.apply(null,a__6542__auto__);
};
var th = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return th__delegate.call(this,args__6541__auto__);};
th.cljs$lang$maxFixedArity = 0;
th.cljs$lang$applyTo = (function (arglist__10690){
var args__6541__auto__ = cljs.core.seq(arglist__10690);
return th__delegate(args__6541__auto__);
});
th.cljs$core$IFn$_invoke$arity$variadic = th__delegate;
return th;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.thead = (function() { 
var thead__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__8351_10691 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__8352_10692 = null;var count__8353_10693 = 0;var i__8354_10694 = 0;while(true){
if((i__8354_10694 < count__8353_10693))
{var arg__6543__auto___10695 = cljs.core._nth.call(null,chunk__8352_10692,i__8354_10694);a__6542__auto__.push(arg__6543__auto___10695);
{
var G__10696 = seq__8351_10691;
var G__10697 = chunk__8352_10692;
var G__10698 = count__8353_10693;
var G__10699 = (i__8354_10694 + 1);
seq__8351_10691 = G__10696;
chunk__8352_10692 = G__10697;
count__8353_10693 = G__10698;
i__8354_10694 = G__10699;
continue;
}
} else
{var temp__4092__auto___10700 = cljs.core.seq.call(null,seq__8351_10691);if(temp__4092__auto___10700)
{var seq__8351_10701__$1 = temp__4092__auto___10700;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8351_10701__$1))
{var c__5632__auto___10702 = cljs.core.chunk_first.call(null,seq__8351_10701__$1);{
var G__10703 = cljs.core.chunk_rest.call(null,seq__8351_10701__$1);
var G__10704 = c__5632__auto___10702;
var G__10705 = cljs.core.count.call(null,c__5632__auto___10702);
var G__10706 = 0;
seq__8351_10691 = G__10703;
chunk__8352_10692 = G__10704;
count__8353_10693 = G__10705;
i__8354_10694 = G__10706;
continue;
}
} else
{var arg__6543__auto___10707 = cljs.core.first.call(null,seq__8351_10701__$1);a__6542__auto__.push(arg__6543__auto___10707);
{
var G__10708 = cljs.core.next.call(null,seq__8351_10701__$1);
var G__10709 = null;
var G__10710 = 0;
var G__10711 = 0;
seq__8351_10691 = G__10708;
chunk__8352_10692 = G__10709;
count__8353_10693 = G__10710;
i__8354_10694 = G__10711;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.thead.apply(null,a__6542__auto__);
};
var thead = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return thead__delegate.call(this,args__6541__auto__);};
thead.cljs$lang$maxFixedArity = 0;
thead.cljs$lang$applyTo = (function (arglist__10712){
var args__6541__auto__ = cljs.core.seq(arglist__10712);
return thead__delegate(args__6541__auto__);
});
thead.cljs$core$IFn$_invoke$arity$variadic = thead__delegate;
return thead;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.time = (function() { 
var time__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__8359_10713 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__8360_10714 = null;var count__8361_10715 = 0;var i__8362_10716 = 0;while(true){
if((i__8362_10716 < count__8361_10715))
{var arg__6543__auto___10717 = cljs.core._nth.call(null,chunk__8360_10714,i__8362_10716);a__6542__auto__.push(arg__6543__auto___10717);
{
var G__10718 = seq__8359_10713;
var G__10719 = chunk__8360_10714;
var G__10720 = count__8361_10715;
var G__10721 = (i__8362_10716 + 1);
seq__8359_10713 = G__10718;
chunk__8360_10714 = G__10719;
count__8361_10715 = G__10720;
i__8362_10716 = G__10721;
continue;
}
} else
{var temp__4092__auto___10722 = cljs.core.seq.call(null,seq__8359_10713);if(temp__4092__auto___10722)
{var seq__8359_10723__$1 = temp__4092__auto___10722;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8359_10723__$1))
{var c__5632__auto___10724 = cljs.core.chunk_first.call(null,seq__8359_10723__$1);{
var G__10725 = cljs.core.chunk_rest.call(null,seq__8359_10723__$1);
var G__10726 = c__5632__auto___10724;
var G__10727 = cljs.core.count.call(null,c__5632__auto___10724);
var G__10728 = 0;
seq__8359_10713 = G__10725;
chunk__8360_10714 = G__10726;
count__8361_10715 = G__10727;
i__8362_10716 = G__10728;
continue;
}
} else
{var arg__6543__auto___10729 = cljs.core.first.call(null,seq__8359_10723__$1);a__6542__auto__.push(arg__6543__auto___10729);
{
var G__10730 = cljs.core.next.call(null,seq__8359_10723__$1);
var G__10731 = null;
var G__10732 = 0;
var G__10733 = 0;
seq__8359_10713 = G__10730;
chunk__8360_10714 = G__10731;
count__8361_10715 = G__10732;
i__8362_10716 = G__10733;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.time.apply(null,a__6542__auto__);
};
var time = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return time__delegate.call(this,args__6541__auto__);};
time.cljs$lang$maxFixedArity = 0;
time.cljs$lang$applyTo = (function (arglist__10734){
var args__6541__auto__ = cljs.core.seq(arglist__10734);
return time__delegate(args__6541__auto__);
});
time.cljs$core$IFn$_invoke$arity$variadic = time__delegate;
return time;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.title = (function() { 
var title__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__8367_10735 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__8368_10736 = null;var count__8369_10737 = 0;var i__8370_10738 = 0;while(true){
if((i__8370_10738 < count__8369_10737))
{var arg__6543__auto___10739 = cljs.core._nth.call(null,chunk__8368_10736,i__8370_10738);a__6542__auto__.push(arg__6543__auto___10739);
{
var G__10740 = seq__8367_10735;
var G__10741 = chunk__8368_10736;
var G__10742 = count__8369_10737;
var G__10743 = (i__8370_10738 + 1);
seq__8367_10735 = G__10740;
chunk__8368_10736 = G__10741;
count__8369_10737 = G__10742;
i__8370_10738 = G__10743;
continue;
}
} else
{var temp__4092__auto___10744 = cljs.core.seq.call(null,seq__8367_10735);if(temp__4092__auto___10744)
{var seq__8367_10745__$1 = temp__4092__auto___10744;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8367_10745__$1))
{var c__5632__auto___10746 = cljs.core.chunk_first.call(null,seq__8367_10745__$1);{
var G__10747 = cljs.core.chunk_rest.call(null,seq__8367_10745__$1);
var G__10748 = c__5632__auto___10746;
var G__10749 = cljs.core.count.call(null,c__5632__auto___10746);
var G__10750 = 0;
seq__8367_10735 = G__10747;
chunk__8368_10736 = G__10748;
count__8369_10737 = G__10749;
i__8370_10738 = G__10750;
continue;
}
} else
{var arg__6543__auto___10751 = cljs.core.first.call(null,seq__8367_10745__$1);a__6542__auto__.push(arg__6543__auto___10751);
{
var G__10752 = cljs.core.next.call(null,seq__8367_10745__$1);
var G__10753 = null;
var G__10754 = 0;
var G__10755 = 0;
seq__8367_10735 = G__10752;
chunk__8368_10736 = G__10753;
count__8369_10737 = G__10754;
i__8370_10738 = G__10755;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.title.apply(null,a__6542__auto__);
};
var title = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return title__delegate.call(this,args__6541__auto__);};
title.cljs$lang$maxFixedArity = 0;
title.cljs$lang$applyTo = (function (arglist__10756){
var args__6541__auto__ = cljs.core.seq(arglist__10756);
return title__delegate(args__6541__auto__);
});
title.cljs$core$IFn$_invoke$arity$variadic = title__delegate;
return title;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.tr = (function() { 
var tr__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__8375_10757 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__8376_10758 = null;var count__8377_10759 = 0;var i__8378_10760 = 0;while(true){
if((i__8378_10760 < count__8377_10759))
{var arg__6543__auto___10761 = cljs.core._nth.call(null,chunk__8376_10758,i__8378_10760);a__6542__auto__.push(arg__6543__auto___10761);
{
var G__10762 = seq__8375_10757;
var G__10763 = chunk__8376_10758;
var G__10764 = count__8377_10759;
var G__10765 = (i__8378_10760 + 1);
seq__8375_10757 = G__10762;
chunk__8376_10758 = G__10763;
count__8377_10759 = G__10764;
i__8378_10760 = G__10765;
continue;
}
} else
{var temp__4092__auto___10766 = cljs.core.seq.call(null,seq__8375_10757);if(temp__4092__auto___10766)
{var seq__8375_10767__$1 = temp__4092__auto___10766;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8375_10767__$1))
{var c__5632__auto___10768 = cljs.core.chunk_first.call(null,seq__8375_10767__$1);{
var G__10769 = cljs.core.chunk_rest.call(null,seq__8375_10767__$1);
var G__10770 = c__5632__auto___10768;
var G__10771 = cljs.core.count.call(null,c__5632__auto___10768);
var G__10772 = 0;
seq__8375_10757 = G__10769;
chunk__8376_10758 = G__10770;
count__8377_10759 = G__10771;
i__8378_10760 = G__10772;
continue;
}
} else
{var arg__6543__auto___10773 = cljs.core.first.call(null,seq__8375_10767__$1);a__6542__auto__.push(arg__6543__auto___10773);
{
var G__10774 = cljs.core.next.call(null,seq__8375_10767__$1);
var G__10775 = null;
var G__10776 = 0;
var G__10777 = 0;
seq__8375_10757 = G__10774;
chunk__8376_10758 = G__10775;
count__8377_10759 = G__10776;
i__8378_10760 = G__10777;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.tr.apply(null,a__6542__auto__);
};
var tr = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return tr__delegate.call(this,args__6541__auto__);};
tr.cljs$lang$maxFixedArity = 0;
tr.cljs$lang$applyTo = (function (arglist__10778){
var args__6541__auto__ = cljs.core.seq(arglist__10778);
return tr__delegate(args__6541__auto__);
});
tr.cljs$core$IFn$_invoke$arity$variadic = tr__delegate;
return tr;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.track = (function() { 
var track__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__8383_10779 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__8384_10780 = null;var count__8385_10781 = 0;var i__8386_10782 = 0;while(true){
if((i__8386_10782 < count__8385_10781))
{var arg__6543__auto___10783 = cljs.core._nth.call(null,chunk__8384_10780,i__8386_10782);a__6542__auto__.push(arg__6543__auto___10783);
{
var G__10784 = seq__8383_10779;
var G__10785 = chunk__8384_10780;
var G__10786 = count__8385_10781;
var G__10787 = (i__8386_10782 + 1);
seq__8383_10779 = G__10784;
chunk__8384_10780 = G__10785;
count__8385_10781 = G__10786;
i__8386_10782 = G__10787;
continue;
}
} else
{var temp__4092__auto___10788 = cljs.core.seq.call(null,seq__8383_10779);if(temp__4092__auto___10788)
{var seq__8383_10789__$1 = temp__4092__auto___10788;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8383_10789__$1))
{var c__5632__auto___10790 = cljs.core.chunk_first.call(null,seq__8383_10789__$1);{
var G__10791 = cljs.core.chunk_rest.call(null,seq__8383_10789__$1);
var G__10792 = c__5632__auto___10790;
var G__10793 = cljs.core.count.call(null,c__5632__auto___10790);
var G__10794 = 0;
seq__8383_10779 = G__10791;
chunk__8384_10780 = G__10792;
count__8385_10781 = G__10793;
i__8386_10782 = G__10794;
continue;
}
} else
{var arg__6543__auto___10795 = cljs.core.first.call(null,seq__8383_10789__$1);a__6542__auto__.push(arg__6543__auto___10795);
{
var G__10796 = cljs.core.next.call(null,seq__8383_10789__$1);
var G__10797 = null;
var G__10798 = 0;
var G__10799 = 0;
seq__8383_10779 = G__10796;
chunk__8384_10780 = G__10797;
count__8385_10781 = G__10798;
i__8386_10782 = G__10799;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.track.apply(null,a__6542__auto__);
};
var track = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return track__delegate.call(this,args__6541__auto__);};
track.cljs$lang$maxFixedArity = 0;
track.cljs$lang$applyTo = (function (arglist__10800){
var args__6541__auto__ = cljs.core.seq(arglist__10800);
return track__delegate(args__6541__auto__);
});
track.cljs$core$IFn$_invoke$arity$variadic = track__delegate;
return track;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.u = (function() { 
var u__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__8391_10801 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__8392_10802 = null;var count__8393_10803 = 0;var i__8394_10804 = 0;while(true){
if((i__8394_10804 < count__8393_10803))
{var arg__6543__auto___10805 = cljs.core._nth.call(null,chunk__8392_10802,i__8394_10804);a__6542__auto__.push(arg__6543__auto___10805);
{
var G__10806 = seq__8391_10801;
var G__10807 = chunk__8392_10802;
var G__10808 = count__8393_10803;
var G__10809 = (i__8394_10804 + 1);
seq__8391_10801 = G__10806;
chunk__8392_10802 = G__10807;
count__8393_10803 = G__10808;
i__8394_10804 = G__10809;
continue;
}
} else
{var temp__4092__auto___10810 = cljs.core.seq.call(null,seq__8391_10801);if(temp__4092__auto___10810)
{var seq__8391_10811__$1 = temp__4092__auto___10810;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8391_10811__$1))
{var c__5632__auto___10812 = cljs.core.chunk_first.call(null,seq__8391_10811__$1);{
var G__10813 = cljs.core.chunk_rest.call(null,seq__8391_10811__$1);
var G__10814 = c__5632__auto___10812;
var G__10815 = cljs.core.count.call(null,c__5632__auto___10812);
var G__10816 = 0;
seq__8391_10801 = G__10813;
chunk__8392_10802 = G__10814;
count__8393_10803 = G__10815;
i__8394_10804 = G__10816;
continue;
}
} else
{var arg__6543__auto___10817 = cljs.core.first.call(null,seq__8391_10811__$1);a__6542__auto__.push(arg__6543__auto___10817);
{
var G__10818 = cljs.core.next.call(null,seq__8391_10811__$1);
var G__10819 = null;
var G__10820 = 0;
var G__10821 = 0;
seq__8391_10801 = G__10818;
chunk__8392_10802 = G__10819;
count__8393_10803 = G__10820;
i__8394_10804 = G__10821;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.u.apply(null,a__6542__auto__);
};
var u = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return u__delegate.call(this,args__6541__auto__);};
u.cljs$lang$maxFixedArity = 0;
u.cljs$lang$applyTo = (function (arglist__10822){
var args__6541__auto__ = cljs.core.seq(arglist__10822);
return u__delegate(args__6541__auto__);
});
u.cljs$core$IFn$_invoke$arity$variadic = u__delegate;
return u;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.ul = (function() { 
var ul__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__8399_10823 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__8400_10824 = null;var count__8401_10825 = 0;var i__8402_10826 = 0;while(true){
if((i__8402_10826 < count__8401_10825))
{var arg__6543__auto___10827 = cljs.core._nth.call(null,chunk__8400_10824,i__8402_10826);a__6542__auto__.push(arg__6543__auto___10827);
{
var G__10828 = seq__8399_10823;
var G__10829 = chunk__8400_10824;
var G__10830 = count__8401_10825;
var G__10831 = (i__8402_10826 + 1);
seq__8399_10823 = G__10828;
chunk__8400_10824 = G__10829;
count__8401_10825 = G__10830;
i__8402_10826 = G__10831;
continue;
}
} else
{var temp__4092__auto___10832 = cljs.core.seq.call(null,seq__8399_10823);if(temp__4092__auto___10832)
{var seq__8399_10833__$1 = temp__4092__auto___10832;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8399_10833__$1))
{var c__5632__auto___10834 = cljs.core.chunk_first.call(null,seq__8399_10833__$1);{
var G__10835 = cljs.core.chunk_rest.call(null,seq__8399_10833__$1);
var G__10836 = c__5632__auto___10834;
var G__10837 = cljs.core.count.call(null,c__5632__auto___10834);
var G__10838 = 0;
seq__8399_10823 = G__10835;
chunk__8400_10824 = G__10836;
count__8401_10825 = G__10837;
i__8402_10826 = G__10838;
continue;
}
} else
{var arg__6543__auto___10839 = cljs.core.first.call(null,seq__8399_10833__$1);a__6542__auto__.push(arg__6543__auto___10839);
{
var G__10840 = cljs.core.next.call(null,seq__8399_10833__$1);
var G__10841 = null;
var G__10842 = 0;
var G__10843 = 0;
seq__8399_10823 = G__10840;
chunk__8400_10824 = G__10841;
count__8401_10825 = G__10842;
i__8402_10826 = G__10843;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.ul.apply(null,a__6542__auto__);
};
var ul = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ul__delegate.call(this,args__6541__auto__);};
ul.cljs$lang$maxFixedArity = 0;
ul.cljs$lang$applyTo = (function (arglist__10844){
var args__6541__auto__ = cljs.core.seq(arglist__10844);
return ul__delegate(args__6541__auto__);
});
ul.cljs$core$IFn$_invoke$arity$variadic = ul__delegate;
return ul;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.var$ = (function() { 
var var$__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__8407_10845 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__8408_10846 = null;var count__8409_10847 = 0;var i__8410_10848 = 0;while(true){
if((i__8410_10848 < count__8409_10847))
{var arg__6543__auto___10849 = cljs.core._nth.call(null,chunk__8408_10846,i__8410_10848);a__6542__auto__.push(arg__6543__auto___10849);
{
var G__10850 = seq__8407_10845;
var G__10851 = chunk__8408_10846;
var G__10852 = count__8409_10847;
var G__10853 = (i__8410_10848 + 1);
seq__8407_10845 = G__10850;
chunk__8408_10846 = G__10851;
count__8409_10847 = G__10852;
i__8410_10848 = G__10853;
continue;
}
} else
{var temp__4092__auto___10854 = cljs.core.seq.call(null,seq__8407_10845);if(temp__4092__auto___10854)
{var seq__8407_10855__$1 = temp__4092__auto___10854;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8407_10855__$1))
{var c__5632__auto___10856 = cljs.core.chunk_first.call(null,seq__8407_10855__$1);{
var G__10857 = cljs.core.chunk_rest.call(null,seq__8407_10855__$1);
var G__10858 = c__5632__auto___10856;
var G__10859 = cljs.core.count.call(null,c__5632__auto___10856);
var G__10860 = 0;
seq__8407_10845 = G__10857;
chunk__8408_10846 = G__10858;
count__8409_10847 = G__10859;
i__8410_10848 = G__10860;
continue;
}
} else
{var arg__6543__auto___10861 = cljs.core.first.call(null,seq__8407_10855__$1);a__6542__auto__.push(arg__6543__auto___10861);
{
var G__10862 = cljs.core.next.call(null,seq__8407_10855__$1);
var G__10863 = null;
var G__10864 = 0;
var G__10865 = 0;
seq__8407_10845 = G__10862;
chunk__8408_10846 = G__10863;
count__8409_10847 = G__10864;
i__8410_10848 = G__10865;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.var$.apply(null,a__6542__auto__);
};
var var$ = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return var$__delegate.call(this,args__6541__auto__);};
var$.cljs$lang$maxFixedArity = 0;
var$.cljs$lang$applyTo = (function (arglist__10866){
var args__6541__auto__ = cljs.core.seq(arglist__10866);
return var$__delegate(args__6541__auto__);
});
var$.cljs$core$IFn$_invoke$arity$variadic = var$__delegate;
return var$;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.video = (function() { 
var video__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__8415_10867 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__8416_10868 = null;var count__8417_10869 = 0;var i__8418_10870 = 0;while(true){
if((i__8418_10870 < count__8417_10869))
{var arg__6543__auto___10871 = cljs.core._nth.call(null,chunk__8416_10868,i__8418_10870);a__6542__auto__.push(arg__6543__auto___10871);
{
var G__10872 = seq__8415_10867;
var G__10873 = chunk__8416_10868;
var G__10874 = count__8417_10869;
var G__10875 = (i__8418_10870 + 1);
seq__8415_10867 = G__10872;
chunk__8416_10868 = G__10873;
count__8417_10869 = G__10874;
i__8418_10870 = G__10875;
continue;
}
} else
{var temp__4092__auto___10876 = cljs.core.seq.call(null,seq__8415_10867);if(temp__4092__auto___10876)
{var seq__8415_10877__$1 = temp__4092__auto___10876;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8415_10877__$1))
{var c__5632__auto___10878 = cljs.core.chunk_first.call(null,seq__8415_10877__$1);{
var G__10879 = cljs.core.chunk_rest.call(null,seq__8415_10877__$1);
var G__10880 = c__5632__auto___10878;
var G__10881 = cljs.core.count.call(null,c__5632__auto___10878);
var G__10882 = 0;
seq__8415_10867 = G__10879;
chunk__8416_10868 = G__10880;
count__8417_10869 = G__10881;
i__8418_10870 = G__10882;
continue;
}
} else
{var arg__6543__auto___10883 = cljs.core.first.call(null,seq__8415_10877__$1);a__6542__auto__.push(arg__6543__auto___10883);
{
var G__10884 = cljs.core.next.call(null,seq__8415_10877__$1);
var G__10885 = null;
var G__10886 = 0;
var G__10887 = 0;
seq__8415_10867 = G__10884;
chunk__8416_10868 = G__10885;
count__8417_10869 = G__10886;
i__8418_10870 = G__10887;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.video.apply(null,a__6542__auto__);
};
var video = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return video__delegate.call(this,args__6541__auto__);};
video.cljs$lang$maxFixedArity = 0;
video.cljs$lang$applyTo = (function (arglist__10888){
var args__6541__auto__ = cljs.core.seq(arglist__10888);
return video__delegate(args__6541__auto__);
});
video.cljs$core$IFn$_invoke$arity$variadic = video__delegate;
return video;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.wbr = (function() { 
var wbr__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__8423_10889 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__8424_10890 = null;var count__8425_10891 = 0;var i__8426_10892 = 0;while(true){
if((i__8426_10892 < count__8425_10891))
{var arg__6543__auto___10893 = cljs.core._nth.call(null,chunk__8424_10890,i__8426_10892);a__6542__auto__.push(arg__6543__auto___10893);
{
var G__10894 = seq__8423_10889;
var G__10895 = chunk__8424_10890;
var G__10896 = count__8425_10891;
var G__10897 = (i__8426_10892 + 1);
seq__8423_10889 = G__10894;
chunk__8424_10890 = G__10895;
count__8425_10891 = G__10896;
i__8426_10892 = G__10897;
continue;
}
} else
{var temp__4092__auto___10898 = cljs.core.seq.call(null,seq__8423_10889);if(temp__4092__auto___10898)
{var seq__8423_10899__$1 = temp__4092__auto___10898;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8423_10899__$1))
{var c__5632__auto___10900 = cljs.core.chunk_first.call(null,seq__8423_10899__$1);{
var G__10901 = cljs.core.chunk_rest.call(null,seq__8423_10899__$1);
var G__10902 = c__5632__auto___10900;
var G__10903 = cljs.core.count.call(null,c__5632__auto___10900);
var G__10904 = 0;
seq__8423_10889 = G__10901;
chunk__8424_10890 = G__10902;
count__8425_10891 = G__10903;
i__8426_10892 = G__10904;
continue;
}
} else
{var arg__6543__auto___10905 = cljs.core.first.call(null,seq__8423_10899__$1);a__6542__auto__.push(arg__6543__auto___10905);
{
var G__10906 = cljs.core.next.call(null,seq__8423_10899__$1);
var G__10907 = null;
var G__10908 = 0;
var G__10909 = 0;
seq__8423_10889 = G__10906;
chunk__8424_10890 = G__10907;
count__8425_10891 = G__10908;
i__8426_10892 = G__10909;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.wbr.apply(null,a__6542__auto__);
};
var wbr = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return wbr__delegate.call(this,args__6541__auto__);};
wbr.cljs$lang$maxFixedArity = 0;
wbr.cljs$lang$applyTo = (function (arglist__10910){
var args__6541__auto__ = cljs.core.seq(arglist__10910);
return wbr__delegate(args__6541__auto__);
});
wbr.cljs$core$IFn$_invoke$arity$variadic = wbr__delegate;
return wbr;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.circle = (function() { 
var circle__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__8431_10911 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__8432_10912 = null;var count__8433_10913 = 0;var i__8434_10914 = 0;while(true){
if((i__8434_10914 < count__8433_10913))
{var arg__6543__auto___10915 = cljs.core._nth.call(null,chunk__8432_10912,i__8434_10914);a__6542__auto__.push(arg__6543__auto___10915);
{
var G__10916 = seq__8431_10911;
var G__10917 = chunk__8432_10912;
var G__10918 = count__8433_10913;
var G__10919 = (i__8434_10914 + 1);
seq__8431_10911 = G__10916;
chunk__8432_10912 = G__10917;
count__8433_10913 = G__10918;
i__8434_10914 = G__10919;
continue;
}
} else
{var temp__4092__auto___10920 = cljs.core.seq.call(null,seq__8431_10911);if(temp__4092__auto___10920)
{var seq__8431_10921__$1 = temp__4092__auto___10920;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8431_10921__$1))
{var c__5632__auto___10922 = cljs.core.chunk_first.call(null,seq__8431_10921__$1);{
var G__10923 = cljs.core.chunk_rest.call(null,seq__8431_10921__$1);
var G__10924 = c__5632__auto___10922;
var G__10925 = cljs.core.count.call(null,c__5632__auto___10922);
var G__10926 = 0;
seq__8431_10911 = G__10923;
chunk__8432_10912 = G__10924;
count__8433_10913 = G__10925;
i__8434_10914 = G__10926;
continue;
}
} else
{var arg__6543__auto___10927 = cljs.core.first.call(null,seq__8431_10921__$1);a__6542__auto__.push(arg__6543__auto___10927);
{
var G__10928 = cljs.core.next.call(null,seq__8431_10921__$1);
var G__10929 = null;
var G__10930 = 0;
var G__10931 = 0;
seq__8431_10911 = G__10928;
chunk__8432_10912 = G__10929;
count__8433_10913 = G__10930;
i__8434_10914 = G__10931;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.circle.apply(null,a__6542__auto__);
};
var circle = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return circle__delegate.call(this,args__6541__auto__);};
circle.cljs$lang$maxFixedArity = 0;
circle.cljs$lang$applyTo = (function (arglist__10932){
var args__6541__auto__ = cljs.core.seq(arglist__10932);
return circle__delegate(args__6541__auto__);
});
circle.cljs$core$IFn$_invoke$arity$variadic = circle__delegate;
return circle;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.g = (function() { 
var g__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__8439_10933 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__8440_10934 = null;var count__8441_10935 = 0;var i__8442_10936 = 0;while(true){
if((i__8442_10936 < count__8441_10935))
{var arg__6543__auto___10937 = cljs.core._nth.call(null,chunk__8440_10934,i__8442_10936);a__6542__auto__.push(arg__6543__auto___10937);
{
var G__10938 = seq__8439_10933;
var G__10939 = chunk__8440_10934;
var G__10940 = count__8441_10935;
var G__10941 = (i__8442_10936 + 1);
seq__8439_10933 = G__10938;
chunk__8440_10934 = G__10939;
count__8441_10935 = G__10940;
i__8442_10936 = G__10941;
continue;
}
} else
{var temp__4092__auto___10942 = cljs.core.seq.call(null,seq__8439_10933);if(temp__4092__auto___10942)
{var seq__8439_10943__$1 = temp__4092__auto___10942;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8439_10943__$1))
{var c__5632__auto___10944 = cljs.core.chunk_first.call(null,seq__8439_10943__$1);{
var G__10945 = cljs.core.chunk_rest.call(null,seq__8439_10943__$1);
var G__10946 = c__5632__auto___10944;
var G__10947 = cljs.core.count.call(null,c__5632__auto___10944);
var G__10948 = 0;
seq__8439_10933 = G__10945;
chunk__8440_10934 = G__10946;
count__8441_10935 = G__10947;
i__8442_10936 = G__10948;
continue;
}
} else
{var arg__6543__auto___10949 = cljs.core.first.call(null,seq__8439_10943__$1);a__6542__auto__.push(arg__6543__auto___10949);
{
var G__10950 = cljs.core.next.call(null,seq__8439_10943__$1);
var G__10951 = null;
var G__10952 = 0;
var G__10953 = 0;
seq__8439_10933 = G__10950;
chunk__8440_10934 = G__10951;
count__8441_10935 = G__10952;
i__8442_10936 = G__10953;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.g.apply(null,a__6542__auto__);
};
var g = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return g__delegate.call(this,args__6541__auto__);};
g.cljs$lang$maxFixedArity = 0;
g.cljs$lang$applyTo = (function (arglist__10954){
var args__6541__auto__ = cljs.core.seq(arglist__10954);
return g__delegate(args__6541__auto__);
});
g.cljs$core$IFn$_invoke$arity$variadic = g__delegate;
return g;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.line = (function() { 
var line__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__8447_10955 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__8448_10956 = null;var count__8449_10957 = 0;var i__8450_10958 = 0;while(true){
if((i__8450_10958 < count__8449_10957))
{var arg__6543__auto___10959 = cljs.core._nth.call(null,chunk__8448_10956,i__8450_10958);a__6542__auto__.push(arg__6543__auto___10959);
{
var G__10960 = seq__8447_10955;
var G__10961 = chunk__8448_10956;
var G__10962 = count__8449_10957;
var G__10963 = (i__8450_10958 + 1);
seq__8447_10955 = G__10960;
chunk__8448_10956 = G__10961;
count__8449_10957 = G__10962;
i__8450_10958 = G__10963;
continue;
}
} else
{var temp__4092__auto___10964 = cljs.core.seq.call(null,seq__8447_10955);if(temp__4092__auto___10964)
{var seq__8447_10965__$1 = temp__4092__auto___10964;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8447_10965__$1))
{var c__5632__auto___10966 = cljs.core.chunk_first.call(null,seq__8447_10965__$1);{
var G__10967 = cljs.core.chunk_rest.call(null,seq__8447_10965__$1);
var G__10968 = c__5632__auto___10966;
var G__10969 = cljs.core.count.call(null,c__5632__auto___10966);
var G__10970 = 0;
seq__8447_10955 = G__10967;
chunk__8448_10956 = G__10968;
count__8449_10957 = G__10969;
i__8450_10958 = G__10970;
continue;
}
} else
{var arg__6543__auto___10971 = cljs.core.first.call(null,seq__8447_10965__$1);a__6542__auto__.push(arg__6543__auto___10971);
{
var G__10972 = cljs.core.next.call(null,seq__8447_10965__$1);
var G__10973 = null;
var G__10974 = 0;
var G__10975 = 0;
seq__8447_10955 = G__10972;
chunk__8448_10956 = G__10973;
count__8449_10957 = G__10974;
i__8450_10958 = G__10975;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.line.apply(null,a__6542__auto__);
};
var line = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return line__delegate.call(this,args__6541__auto__);};
line.cljs$lang$maxFixedArity = 0;
line.cljs$lang$applyTo = (function (arglist__10976){
var args__6541__auto__ = cljs.core.seq(arglist__10976);
return line__delegate(args__6541__auto__);
});
line.cljs$core$IFn$_invoke$arity$variadic = line__delegate;
return line;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.path = (function() { 
var path__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__8455_10977 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__8456_10978 = null;var count__8457_10979 = 0;var i__8458_10980 = 0;while(true){
if((i__8458_10980 < count__8457_10979))
{var arg__6543__auto___10981 = cljs.core._nth.call(null,chunk__8456_10978,i__8458_10980);a__6542__auto__.push(arg__6543__auto___10981);
{
var G__10982 = seq__8455_10977;
var G__10983 = chunk__8456_10978;
var G__10984 = count__8457_10979;
var G__10985 = (i__8458_10980 + 1);
seq__8455_10977 = G__10982;
chunk__8456_10978 = G__10983;
count__8457_10979 = G__10984;
i__8458_10980 = G__10985;
continue;
}
} else
{var temp__4092__auto___10986 = cljs.core.seq.call(null,seq__8455_10977);if(temp__4092__auto___10986)
{var seq__8455_10987__$1 = temp__4092__auto___10986;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8455_10987__$1))
{var c__5632__auto___10988 = cljs.core.chunk_first.call(null,seq__8455_10987__$1);{
var G__10989 = cljs.core.chunk_rest.call(null,seq__8455_10987__$1);
var G__10990 = c__5632__auto___10988;
var G__10991 = cljs.core.count.call(null,c__5632__auto___10988);
var G__10992 = 0;
seq__8455_10977 = G__10989;
chunk__8456_10978 = G__10990;
count__8457_10979 = G__10991;
i__8458_10980 = G__10992;
continue;
}
} else
{var arg__6543__auto___10993 = cljs.core.first.call(null,seq__8455_10987__$1);a__6542__auto__.push(arg__6543__auto___10993);
{
var G__10994 = cljs.core.next.call(null,seq__8455_10987__$1);
var G__10995 = null;
var G__10996 = 0;
var G__10997 = 0;
seq__8455_10977 = G__10994;
chunk__8456_10978 = G__10995;
count__8457_10979 = G__10996;
i__8458_10980 = G__10997;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.path.apply(null,a__6542__auto__);
};
var path = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return path__delegate.call(this,args__6541__auto__);};
path.cljs$lang$maxFixedArity = 0;
path.cljs$lang$applyTo = (function (arglist__10998){
var args__6541__auto__ = cljs.core.seq(arglist__10998);
return path__delegate(args__6541__auto__);
});
path.cljs$core$IFn$_invoke$arity$variadic = path__delegate;
return path;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.polygon = (function() { 
var polygon__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__8463_10999 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__8464_11000 = null;var count__8465_11001 = 0;var i__8466_11002 = 0;while(true){
if((i__8466_11002 < count__8465_11001))
{var arg__6543__auto___11003 = cljs.core._nth.call(null,chunk__8464_11000,i__8466_11002);a__6542__auto__.push(arg__6543__auto___11003);
{
var G__11004 = seq__8463_10999;
var G__11005 = chunk__8464_11000;
var G__11006 = count__8465_11001;
var G__11007 = (i__8466_11002 + 1);
seq__8463_10999 = G__11004;
chunk__8464_11000 = G__11005;
count__8465_11001 = G__11006;
i__8466_11002 = G__11007;
continue;
}
} else
{var temp__4092__auto___11008 = cljs.core.seq.call(null,seq__8463_10999);if(temp__4092__auto___11008)
{var seq__8463_11009__$1 = temp__4092__auto___11008;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8463_11009__$1))
{var c__5632__auto___11010 = cljs.core.chunk_first.call(null,seq__8463_11009__$1);{
var G__11011 = cljs.core.chunk_rest.call(null,seq__8463_11009__$1);
var G__11012 = c__5632__auto___11010;
var G__11013 = cljs.core.count.call(null,c__5632__auto___11010);
var G__11014 = 0;
seq__8463_10999 = G__11011;
chunk__8464_11000 = G__11012;
count__8465_11001 = G__11013;
i__8466_11002 = G__11014;
continue;
}
} else
{var arg__6543__auto___11015 = cljs.core.first.call(null,seq__8463_11009__$1);a__6542__auto__.push(arg__6543__auto___11015);
{
var G__11016 = cljs.core.next.call(null,seq__8463_11009__$1);
var G__11017 = null;
var G__11018 = 0;
var G__11019 = 0;
seq__8463_10999 = G__11016;
chunk__8464_11000 = G__11017;
count__8465_11001 = G__11018;
i__8466_11002 = G__11019;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.polygon.apply(null,a__6542__auto__);
};
var polygon = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return polygon__delegate.call(this,args__6541__auto__);};
polygon.cljs$lang$maxFixedArity = 0;
polygon.cljs$lang$applyTo = (function (arglist__11020){
var args__6541__auto__ = cljs.core.seq(arglist__11020);
return polygon__delegate(args__6541__auto__);
});
polygon.cljs$core$IFn$_invoke$arity$variadic = polygon__delegate;
return polygon;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.polyline = (function() { 
var polyline__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__8471_11021 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__8472_11022 = null;var count__8473_11023 = 0;var i__8474_11024 = 0;while(true){
if((i__8474_11024 < count__8473_11023))
{var arg__6543__auto___11025 = cljs.core._nth.call(null,chunk__8472_11022,i__8474_11024);a__6542__auto__.push(arg__6543__auto___11025);
{
var G__11026 = seq__8471_11021;
var G__11027 = chunk__8472_11022;
var G__11028 = count__8473_11023;
var G__11029 = (i__8474_11024 + 1);
seq__8471_11021 = G__11026;
chunk__8472_11022 = G__11027;
count__8473_11023 = G__11028;
i__8474_11024 = G__11029;
continue;
}
} else
{var temp__4092__auto___11030 = cljs.core.seq.call(null,seq__8471_11021);if(temp__4092__auto___11030)
{var seq__8471_11031__$1 = temp__4092__auto___11030;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8471_11031__$1))
{var c__5632__auto___11032 = cljs.core.chunk_first.call(null,seq__8471_11031__$1);{
var G__11033 = cljs.core.chunk_rest.call(null,seq__8471_11031__$1);
var G__11034 = c__5632__auto___11032;
var G__11035 = cljs.core.count.call(null,c__5632__auto___11032);
var G__11036 = 0;
seq__8471_11021 = G__11033;
chunk__8472_11022 = G__11034;
count__8473_11023 = G__11035;
i__8474_11024 = G__11036;
continue;
}
} else
{var arg__6543__auto___11037 = cljs.core.first.call(null,seq__8471_11031__$1);a__6542__auto__.push(arg__6543__auto___11037);
{
var G__11038 = cljs.core.next.call(null,seq__8471_11031__$1);
var G__11039 = null;
var G__11040 = 0;
var G__11041 = 0;
seq__8471_11021 = G__11038;
chunk__8472_11022 = G__11039;
count__8473_11023 = G__11040;
i__8474_11024 = G__11041;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.polyline.apply(null,a__6542__auto__);
};
var polyline = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return polyline__delegate.call(this,args__6541__auto__);};
polyline.cljs$lang$maxFixedArity = 0;
polyline.cljs$lang$applyTo = (function (arglist__11042){
var args__6541__auto__ = cljs.core.seq(arglist__11042);
return polyline__delegate(args__6541__auto__);
});
polyline.cljs$core$IFn$_invoke$arity$variadic = polyline__delegate;
return polyline;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.rect = (function() { 
var rect__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__8479_11043 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__8480_11044 = null;var count__8481_11045 = 0;var i__8482_11046 = 0;while(true){
if((i__8482_11046 < count__8481_11045))
{var arg__6543__auto___11047 = cljs.core._nth.call(null,chunk__8480_11044,i__8482_11046);a__6542__auto__.push(arg__6543__auto___11047);
{
var G__11048 = seq__8479_11043;
var G__11049 = chunk__8480_11044;
var G__11050 = count__8481_11045;
var G__11051 = (i__8482_11046 + 1);
seq__8479_11043 = G__11048;
chunk__8480_11044 = G__11049;
count__8481_11045 = G__11050;
i__8482_11046 = G__11051;
continue;
}
} else
{var temp__4092__auto___11052 = cljs.core.seq.call(null,seq__8479_11043);if(temp__4092__auto___11052)
{var seq__8479_11053__$1 = temp__4092__auto___11052;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8479_11053__$1))
{var c__5632__auto___11054 = cljs.core.chunk_first.call(null,seq__8479_11053__$1);{
var G__11055 = cljs.core.chunk_rest.call(null,seq__8479_11053__$1);
var G__11056 = c__5632__auto___11054;
var G__11057 = cljs.core.count.call(null,c__5632__auto___11054);
var G__11058 = 0;
seq__8479_11043 = G__11055;
chunk__8480_11044 = G__11056;
count__8481_11045 = G__11057;
i__8482_11046 = G__11058;
continue;
}
} else
{var arg__6543__auto___11059 = cljs.core.first.call(null,seq__8479_11053__$1);a__6542__auto__.push(arg__6543__auto___11059);
{
var G__11060 = cljs.core.next.call(null,seq__8479_11053__$1);
var G__11061 = null;
var G__11062 = 0;
var G__11063 = 0;
seq__8479_11043 = G__11060;
chunk__8480_11044 = G__11061;
count__8481_11045 = G__11062;
i__8482_11046 = G__11063;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.rect.apply(null,a__6542__auto__);
};
var rect = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return rect__delegate.call(this,args__6541__auto__);};
rect.cljs$lang$maxFixedArity = 0;
rect.cljs$lang$applyTo = (function (arglist__11064){
var args__6541__auto__ = cljs.core.seq(arglist__11064);
return rect__delegate(args__6541__auto__);
});
rect.cljs$core$IFn$_invoke$arity$variadic = rect__delegate;
return rect;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.svg = (function() { 
var svg__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__8487_11065 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__8488_11066 = null;var count__8489_11067 = 0;var i__8490_11068 = 0;while(true){
if((i__8490_11068 < count__8489_11067))
{var arg__6543__auto___11069 = cljs.core._nth.call(null,chunk__8488_11066,i__8490_11068);a__6542__auto__.push(arg__6543__auto___11069);
{
var G__11070 = seq__8487_11065;
var G__11071 = chunk__8488_11066;
var G__11072 = count__8489_11067;
var G__11073 = (i__8490_11068 + 1);
seq__8487_11065 = G__11070;
chunk__8488_11066 = G__11071;
count__8489_11067 = G__11072;
i__8490_11068 = G__11073;
continue;
}
} else
{var temp__4092__auto___11074 = cljs.core.seq.call(null,seq__8487_11065);if(temp__4092__auto___11074)
{var seq__8487_11075__$1 = temp__4092__auto___11074;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8487_11075__$1))
{var c__5632__auto___11076 = cljs.core.chunk_first.call(null,seq__8487_11075__$1);{
var G__11077 = cljs.core.chunk_rest.call(null,seq__8487_11075__$1);
var G__11078 = c__5632__auto___11076;
var G__11079 = cljs.core.count.call(null,c__5632__auto___11076);
var G__11080 = 0;
seq__8487_11065 = G__11077;
chunk__8488_11066 = G__11078;
count__8489_11067 = G__11079;
i__8490_11068 = G__11080;
continue;
}
} else
{var arg__6543__auto___11081 = cljs.core.first.call(null,seq__8487_11075__$1);a__6542__auto__.push(arg__6543__auto___11081);
{
var G__11082 = cljs.core.next.call(null,seq__8487_11075__$1);
var G__11083 = null;
var G__11084 = 0;
var G__11085 = 0;
seq__8487_11065 = G__11082;
chunk__8488_11066 = G__11083;
count__8489_11067 = G__11084;
i__8490_11068 = G__11085;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.svg.apply(null,a__6542__auto__);
};
var svg = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return svg__delegate.call(this,args__6541__auto__);};
svg.cljs$lang$maxFixedArity = 0;
svg.cljs$lang$applyTo = (function (arglist__11086){
var args__6541__auto__ = cljs.core.seq(arglist__11086);
return svg__delegate(args__6541__auto__);
});
svg.cljs$core$IFn$_invoke$arity$variadic = svg__delegate;
return svg;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.text = (function() { 
var text__delegate = function (args__6541__auto__){var a__6542__auto__ = [];a__6542__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6541__auto__)));
var seq__7799_11087 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6541__auto__));var chunk__7800_11088 = null;var count__7801_11089 = 0;var i__7802_11090 = 0;while(true){
if((i__7802_11090 < count__7801_11089))
{var arg__6543__auto___11091 = cljs.core._nth.call(null,chunk__7800_11088,i__7802_11090);a__6542__auto__.push(arg__6543__auto___11091);
{
var G__11092 = seq__7799_11087;
var G__11093 = chunk__7800_11088;
var G__11094 = count__7801_11089;
var G__11095 = (i__7802_11090 + 1);
seq__7799_11087 = G__11092;
chunk__7800_11088 = G__11093;
count__7801_11089 = G__11094;
i__7802_11090 = G__11095;
continue;
}
} else
{var temp__4092__auto___11096 = cljs.core.seq.call(null,seq__7799_11087);if(temp__4092__auto___11096)
{var seq__7799_11097__$1 = temp__4092__auto___11096;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7799_11097__$1))
{var c__5632__auto___11098 = cljs.core.chunk_first.call(null,seq__7799_11097__$1);{
var G__11099 = cljs.core.chunk_rest.call(null,seq__7799_11097__$1);
var G__11100 = c__5632__auto___11098;
var G__11101 = cljs.core.count.call(null,c__5632__auto___11098);
var G__11102 = 0;
seq__7799_11087 = G__11099;
chunk__7800_11088 = G__11100;
count__7801_11089 = G__11101;
i__7802_11090 = G__11102;
continue;
}
} else
{var arg__6543__auto___11103 = cljs.core.first.call(null,seq__7799_11097__$1);a__6542__auto__.push(arg__6543__auto___11103);
{
var G__11104 = cljs.core.next.call(null,seq__7799_11097__$1);
var G__11105 = null;
var G__11106 = 0;
var G__11107 = 0;
seq__7799_11087 = G__11104;
chunk__7800_11088 = G__11105;
count__7801_11089 = G__11106;
i__7802_11090 = G__11107;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.text.apply(null,a__6542__auto__);
};
var text = function (var_args){
var args__6541__auto__ = null;if (arguments.length > 0) {
  args__6541__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return text__delegate.call(this,args__6541__auto__);};
text.cljs$lang$maxFixedArity = 0;
text.cljs$lang$applyTo = (function (arglist__11108){
var args__6541__auto__ = cljs.core.seq(arglist__11108);
return text__delegate(args__6541__auto__);
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
lt.plugins.elm_light.autocompleter.handle_keypress = (function handle_keypress(p__7517,ev){var map__7520 = p__7517;var map__7520__$1 = ((cljs.core.seq_QMARK_.call(null,map__7520))?cljs.core.apply.call(null,cljs.core.hash_map,map__7520):map__7520);var props = map__7520__$1;var on_cancel = cljs.core.get.call(null,map__7520__$1,new cljs.core.Keyword(null,"on-cancel","on-cancel",600765850));var on_select = cljs.core.get.call(null,map__7520__$1,new cljs.core.Keyword(null,"on-select","on-select",1062468636));var on_down = cljs.core.get.call(null,map__7520__$1,new cljs.core.Keyword(null,"on-down","on-down",3936419650));var on_up = cljs.core.get.call(null,map__7520__$1,new cljs.core.Keyword(null,"on-up","on-up",1119739067));var kk = ev.which;var G__7521 = kk;if(cljs.core._EQ_.call(null,27,G__7521))
{ev.preventDefault();
ev.target.value = "";
return on_cancel.call(null);
} else
{if(cljs.core._EQ_.call(null,13,G__7521))
{ev.preventDefault();
var temp__4092__auto___7537 = lt.plugins.elm_light.autocompleter.find_active.call(null,new cljs.core.Keyword(null,"items","items",1114430258).cljs$core$IFn$_invoke$arity$1(props));if(cljs.core.truth_(temp__4092__auto___7537))
{var active_7538 = temp__4092__auto___7537;ev.target.value = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(active_7538);
} else
{}
return on_select.call(null);
} else
{if(cljs.core._EQ_.call(null,40,G__7521))
{ev.preventDefault();
return on_down.call(null);
} else
{if(cljs.core._EQ_.call(null,38,G__7521))
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
return (function (p1__7522_SHARP_){return "autocomplete-dropdown-item row".concat((cljs.core.truth_(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(p1__7522_SHARP_))?" autocomplete-active":""));
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
lt.plugins.elm_light.autocompleter.Adder = quiescent.component.call(null,(function (p__7523){var map__7524 = p__7523;var map__7524__$1 = ((cljs.core.seq_QMARK_.call(null,map__7524))?cljs.core.apply.call(null,cljs.core.hash_map,map__7524):map__7524);var props = map__7524__$1;var disabled = cljs.core.get.call(null,map__7524__$1,new cljs.core.Keyword(null,"disabled","disabled",1284845038));var on_add_package = cljs.core.get.call(null,map__7524__$1,new cljs.core.Keyword(null,"on-add-package","on-add-package",3601701790));return quiescent.dom.button.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",1004015509),"btn",new cljs.core.Keyword(null,"disabled","disabled",1284845038),disabled,new cljs.core.Keyword(null,"onClick","onClick",3956969051),((function (map__7524,map__7524__$1,props,disabled,on_add_package){
return (function (){return on_add_package.call(null);
});})(map__7524,map__7524__$1,props,disabled,on_add_package))
], null),"Add package");
}));
/**
* 
*/
lt.plugins.elm_light.autocompleter.Versions = quiescent.component.call(null,(function (props){return cljs.core.apply.call(null,quiescent.dom.select,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",1004015509),"versions",new cljs.core.Keyword(null,"value","value",1125876963),new cljs.core.Keyword(null,"version","version",1365512266).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"onChange","onChange",2050678241),(function (p1__7525_SHARP_){return new cljs.core.Keyword(null,"on-change-version","on-change-version",822058203).cljs$core$IFn$_invoke$arity$1(props).call(null,p1__7525_SHARP_.target.value);
})], null),cljs.core.map.call(null,(function (p1__7526_SHARP_){return quiescent.dom.option.call(null,cljs.core.PersistentArrayMap.EMPTY,p1__7526_SHARP_);
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
clojure.walk.keywordize_keys = (function keywordize_keys(m){var f = (function (p__11383){var vec__11384 = p__11383;var k = cljs.core.nth.call(null,vec__11384,0,null);var v = cljs.core.nth.call(null,vec__11384,1,null);if(typeof k === 'string')
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
clojure.walk.stringify_keys = (function stringify_keys(m){var f = (function (p__11387){var vec__11388 = p__11387;var k = cljs.core.nth.call(null,vec__11388,0,null);var v = cljs.core.nth.call(null,vec__11388,1,null);if((k instanceof cljs.core.Keyword))
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
lt.plugins.elm_light.utils.find_symbol = (function find_symbol(ed,pos){var curr_tok = lt.objs.editor.__GT_token.call(null,ed,pos);var G__11411 = new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(curr_tok);if(cljs.core._EQ_.call(null,"variable",G__11411))
{return [cljs.core.str(find_symbol.call(null,ed,cljs.core.assoc.call(null,pos,new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(curr_tok)))),cljs.core.str(new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(curr_tok))].join('');
} else
{if(cljs.core._EQ_.call(null,"qualifier",G__11411))
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
return (function (p__11308){var vec__11309 = p__11308;var k = cljs.core.nth.call(null,vec__11309,0,null);var v = cljs.core.nth.call(null,vec__11309,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.elm_light.utils.nskw__GT_name.call(null,k),v], null);
});})(pkg_file))
,deps)),pkg);
});})(pkg_file))
)));
});
lt.plugins.elm_light.packages.get_project_deps = (function get_project_deps(project_path){var pkg_json = lt.objs.files.join.call(null,project_path,"elm-package.json");var deps_json = lt.objs.files.join.call(null,project_path,"elm-stuff","exact-dependencies.json");return cljs.core.mapv.call(null,((function (pkg_json,deps_json){
return (function (p__11316){var vec__11317 = p__11316;var _ = cljs.core.nth.call(null,vec__11317,0,null);var vs = cljs.core.nth.call(null,vec__11317,1,null);return cljs.core.apply.call(null,cljs.core.merge,vs);
});})(pkg_json,deps_json))
,cljs.core.group_by.call(null,new cljs.core.Keyword(null,"package","package",4501809080),cljs.core.concat.call(null,cljs.core.mapv.call(null,((function (pkg_json,deps_json){
return (function (p__11318){var vec__11319 = p__11318;var k = cljs.core.nth.call(null,vec__11319,0,null);var v = cljs.core.nth.call(null,vec__11319,1,null);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"package","package",4501809080),lt.plugins.elm_light.utils.nskw__GT_name.call(null,k),new cljs.core.Keyword(null,"exact","exact",1110851185),v], null);
});})(pkg_json,deps_json))
,lt.plugins.elm_light.utils.parse_json_file.call(null,deps_json)),cljs.core.mapv.call(null,((function (pkg_json,deps_json){
return (function (p__11320){var vec__11321 = p__11320;var k = cljs.core.nth.call(null,vec__11321,0,null);var v = cljs.core.nth.call(null,vec__11321,1,null);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"package","package",4501809080),lt.plugins.elm_light.utils.nskw__GT_name.call(null,k),new cljs.core.Keyword(null,"range","range",1122184367),v], null);
});})(pkg_json,deps_json))
,new cljs.core.Keyword(null,"dependencies","dependencies",1517678747).cljs$core$IFn$_invoke$arity$1(lt.plugins.elm_light.utils.parse_json_file.call(null,pkg_json))))));
});
lt.plugins.elm_light.packages.project_wrapper = (function project_wrapper(this$){var e__6277__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.elm","div.elm",2686466363),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"project-packages-wrapper"], null),"Retrieving project package info..."], null)], null));var seq__11328_11353 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__11329_11354 = null;var count__11330_11355 = 0;var i__11331_11356 = 0;while(true){
if((i__11331_11356 < count__11330_11355))
{var vec__11332_11357 = cljs.core._nth.call(null,chunk__11329_11354,i__11331_11356);var ev__6278__auto___11358 = cljs.core.nth.call(null,vec__11332_11357,0,null);var func__6279__auto___11359 = cljs.core.nth.call(null,vec__11332_11357,1,null);lt.util.dom.on.call(null,e__6277__auto__,ev__6278__auto___11358,func__6279__auto___11359);
{
var G__11360 = seq__11328_11353;
var G__11361 = chunk__11329_11354;
var G__11362 = count__11330_11355;
var G__11363 = (i__11331_11356 + 1);
seq__11328_11353 = G__11360;
chunk__11329_11354 = G__11361;
count__11330_11355 = G__11362;
i__11331_11356 = G__11363;
continue;
}
} else
{var temp__4092__auto___11364 = cljs.core.seq.call(null,seq__11328_11353);if(temp__4092__auto___11364)
{var seq__11328_11365__$1 = temp__4092__auto___11364;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11328_11365__$1))
{var c__5632__auto___11366 = cljs.core.chunk_first.call(null,seq__11328_11365__$1);{
var G__11367 = cljs.core.chunk_rest.call(null,seq__11328_11365__$1);
var G__11368 = c__5632__auto___11366;
var G__11369 = cljs.core.count.call(null,c__5632__auto___11366);
var G__11370 = 0;
seq__11328_11353 = G__11367;
chunk__11329_11354 = G__11368;
count__11330_11355 = G__11369;
i__11331_11356 = G__11370;
continue;
}
} else
{var vec__11333_11371 = cljs.core.first.call(null,seq__11328_11365__$1);var ev__6278__auto___11372 = cljs.core.nth.call(null,vec__11333_11371,0,null);var func__6279__auto___11373 = cljs.core.nth.call(null,vec__11333_11371,1,null);lt.util.dom.on.call(null,e__6277__auto__,ev__6278__auto___11372,func__6279__auto___11373);
{
var G__11374 = cljs.core.next.call(null,seq__11328_11365__$1);
var G__11375 = null;
var G__11376 = 0;
var G__11377 = 0;
seq__11328_11353 = G__11374;
chunk__11329_11354 = G__11375;
count__11330_11355 = G__11376;
i__11331_11356 = G__11377;
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
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.packages","elm-packages","lt.plugins.elm-light.packages/elm-packages",4552372902),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elm.packages","elm.packages",3931311271),null], null), null),new cljs.core.Keyword(null,"label","label",1116631654),"Elm project packages",new cljs.core.Keyword(null,"name","name",1017277949),"Elm project packages",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){lt.plugins.elm_light.packages.fetch_packages.call(null,(function (p1__11334_SHARP_){return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"all-packages","all-packages",1123981067),p1__11334_SHARP_], null));
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
lt.plugins.elm_light.packages.idx_active = (function idx_active(items){return cljs.core.first.call(null,cljs.core.keep_indexed.call(null,(function (p1__11336_SHARP_,p2__11335_SHARP_){if(cljs.core.truth_(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(p2__11335_SHARP_)))
{return p1__11336_SHARP_;
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
lt.plugins.elm_light.packages.on_pkg_sel = (function on_pkg_sel(){var items_11378 = new cljs.core.Keyword(null,"ac-packages","ac-packages",1548109226).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.elm_light.packages.elm_packages));var temp__4090__auto___11379 = lt.plugins.elm_light.packages.idx_active.call(null,items_11378);if(cljs.core.truth_(temp__4090__auto___11379))
{var idx_11380 = temp__4090__auto___11379;lt.object.assoc_in_BANG_.call(null,lt.plugins.elm_light.packages.elm_packages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ac-versions","ac-versions",3107155800)], null),new cljs.core.Keyword(null,"versions","versions",3323818509).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,items_11378,idx_11380)));
lt.object.assoc_in_BANG_.call(null,lt.plugins.elm_light.packages.elm_packages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ac-version","ac-version",2051259807)], null),cljs.core.first.call(null,new cljs.core.Keyword(null,"versions","versions",3323818509).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,items_11378,idx_11380))));
lt.object.assoc_in_BANG_.call(null,lt.plugins.elm_light.packages.elm_packages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ac-package","ac-package",892589325)], null),new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,items_11378,idx_11380)));
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
return (function (p1__11337_SHARP_){if(cljs.core._EQ_.call(null,p1__11337_SHARP_,0))
{lt.objs.notifos.done_working.call(null);
} else
{lt.objs.notifos.set_msg_BANG_.call(null,"Error installing elm package",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),"error",new cljs.core.Keyword(null,"timeout","timeout",3994960083),5000], null));
}
return lt.object.raise.call(null,lt.plugins.elm_light.packages.elm_packages,new cljs.core.Keyword(null,"elm.show.project.packages","elm.show.project.packages",3385102109),new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.elm_light.packages.elm_packages)));
});})(proc,args))
);
proc.stdout.on("data",((function (proc,args){
return (function (p1__11338_SHARP_){return lt.objs.notifos.msg_STAR_.call(null,[cljs.core.str("Package install: "),cljs.core.str(p1__11338_SHARP_)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"timeout","timeout",3994960083),5000], null));
});})(proc,args))
);
return proc.stderr.on("data",((function (proc,args){
return (function (p1__11339_SHARP_){return lt.objs.console.error.call(null,[cljs.core.str(p1__11339_SHARP_)].join(''));
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
lt.plugins.elm_light.packages.PackageRow = quiescent.component.call(null,(function (p__11340){var map__11341 = p__11340;var map__11341__$1 = ((cljs.core.seq_QMARK_.call(null,map__11341))?cljs.core.apply.call(null,cljs.core.hash_map,map__11341):map__11341);var on_browse = cljs.core.get.call(null,map__11341__$1,new cljs.core.Keyword(null,"on-browse","on-browse",587885994));var on_remove = cljs.core.get.call(null,map__11341__$1,new cljs.core.Keyword(null,"on-remove","on-remove",1033879460));var exact = cljs.core.get.call(null,map__11341__$1,new cljs.core.Keyword(null,"exact","exact",1110851185));var range = cljs.core.get.call(null,map__11341__$1,new cljs.core.Keyword(null,"range","range",1122184367));var package$ = cljs.core.get.call(null,map__11341__$1,new cljs.core.Keyword(null,"package","package",4501809080));return quiescent.dom.tr.call(null,cljs.core.PersistentArrayMap.EMPTY,quiescent.dom.td.call(null,cljs.core.PersistentArrayMap.EMPTY,(cljs.core.truth_((function (){var and__4872__auto__ = package$;if(cljs.core.truth_(and__4872__auto__))
{return exact;
} else
{return and__4872__auto__;
}
})())?quiescent.dom.span.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",1004015509),"link",new cljs.core.Keyword(null,"onClick","onClick",3956969051),((function (map__11341,map__11341__$1,on_browse,on_remove,exact,range,package$){
return (function (){return on_browse.call(null,package$,exact);
});})(map__11341,map__11341__$1,on_browse,on_remove,exact,range,package$))
], null),package$):package$)),quiescent.dom.td.call(null,cljs.core.PersistentArrayMap.EMPTY,range),quiescent.dom.td.call(null,cljs.core.PersistentArrayMap.EMPTY,exact),quiescent.dom.td.call(null,cljs.core.PersistentArrayMap.EMPTY,(cljs.core.truth_(range)?quiescent.dom.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",3956969051),((function (map__11341,map__11341__$1,on_browse,on_remove,exact,range,package$){
return (function (){return on_remove.call(null,package$);
});})(map__11341,map__11341__$1,on_browse,on_remove,exact,range,package$))
], null),"remove"):null)));
}));
/**
* 
*/
lt.plugins.elm_light.packages.PackageTable = quiescent.component.call(null,(function (props){return quiescent.dom.table.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",1004015509),"package-table"], null),quiescent.dom.thead.call(null,cljs.core.PersistentArrayMap.EMPTY,quiescent.dom.tr.call(null,cljs.core.PersistentArrayMap.EMPTY,quiescent.dom.th.call(null,cljs.core.PersistentArrayMap.EMPTY,"Package"),quiescent.dom.th.call(null,cljs.core.PersistentArrayMap.EMPTY,"Range"),quiescent.dom.th.call(null,cljs.core.PersistentArrayMap.EMPTY,"Exact"),quiescent.dom.th.call(null,cljs.core.PersistentArrayMap.EMPTY,""))),cljs.core.apply.call(null,quiescent.dom.tbody,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__11342_SHARP_){return lt.plugins.elm_light.packages.PackageRow.call(null,cljs.core.assoc.call(null,p1__11342_SHARP_,new cljs.core.Keyword(null,"on-remove","on-remove",1033879460),new cljs.core.Keyword(null,"on-remove","on-remove",1033879460).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"on-browse","on-browse",587885994),new cljs.core.Keyword(null,"on-browse","on-browse",587885994).cljs$core$IFn$_invoke$arity$1(props)));
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
var G__11389 = (line - 1);
line = G__11389;
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
var G__11390 = (line + 1);
line = G__11390;
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
var G__11391 = (line - 1);
line = G__11391;
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
return (function (p1__11434_SHARP_){return lt.plugins.elm_light.clients.on_elm_message.call(null,client,p1__11434_SHARP_);
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
lt.plugins.elm_light.clients.start_elm_client = (function start_elm_client(p__11435){var map__11437 = p__11435;var map__11437__$1 = ((cljs.core.seq_QMARK_.call(null,map__11437))?cljs.core.apply.call(null,cljs.core.hash_map,map__11437):map__11437);var props = map__11437__$1;var client = cljs.core.get.call(null,map__11437__$1,new cljs.core.Keyword(null,"client","client",3951159101));var proj_path = cljs.core.get.call(null,map__11437__$1,new cljs.core.Keyword(null,"proj-path","proj-path",4362692615));var path = cljs.core.get.call(null,map__11437__$1,new cljs.core.Keyword(null,"path","path",1017337751));lt.objs.notifos.working.call(null,"Connecting..");
return lt.plugins.elm_light.clients.claim_reactor_port.call(null,proj_path,((function (map__11437,map__11437__$1,props,client,proj_path,path){
return (function (_,port){var worker = lt.plugins.elm_light.clients.start_elm_worker.call(null,proj_path,port,client);lt.object.merge_BANG_.call(null,client,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1017277949),lt.objs.files.basename.call(null,proj_path),new cljs.core.Keyword(null,"dir","dir",1014003711),proj_path,new cljs.core.Keyword(null,"reactor-port","reactor-port",4649590590),port,new cljs.core.Keyword(null,"worker","worker",4526786288),worker,new cljs.core.Keyword(null,"commands","commands",4706336250),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"editor.elm.lint","editor.elm.lint",1086056222),null,new cljs.core.Keyword(null,"editor.elm.make","editor.elm.make",1086078217),null,new cljs.core.Keyword(null,"editor.eval.elm","editor.eval.elm",1083015975),null,new cljs.core.Keyword(null,"editor.elm.hint","editor.elm.hint",1085937058),null,new cljs.core.Keyword(null,"elm.repl.restart","elm.repl.restart",2931654218),null,new cljs.core.Keyword(null,"docs.elm.search","docs.elm.search",737241333),null,new cljs.core.Keyword(null,"editor.elm.doc","editor.elm.doc",1570413537),null], null), null)], null));
return lt.object.add_behavior_BANG_.call(null,client,new cljs.core.Keyword("lt.plugins.elm-light.clients","send!","lt.plugins.elm-light.clients/send!",867013595));
});})(map__11437,map__11437__$1,props,client,proj_path,path))
);
});
lt.plugins.elm_light.clients.try_connect = (function try_connect(p__11438){var map__11440 = p__11438;var map__11440__$1 = ((cljs.core.seq_QMARK_.call(null,map__11440))?cljs.core.apply.call(null,cljs.core.hash_map,map__11440):map__11440);var props = map__11440__$1;var info = cljs.core.get.call(null,map__11440__$1,new cljs.core.Keyword(null,"info","info",1017141280));var path = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(info);var proj_path = lt.plugins.elm_light.utils.project_path.call(null,path);var client = lt.objs.clients.client_BANG_.call(null,new cljs.core.Keyword(null,"elm-client","elm-client",1622336068));if(cljs.core.truth_(proj_path))
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
lt.plugins.elm_light.__GT_lt_range = (function __GT_lt_range(p__11442){var map__11444 = p__11442;var map__11444__$1 = ((cljs.core.seq_QMARK_.call(null,map__11444))?cljs.core.apply.call(null,cljs.core.hash_map,map__11444):map__11444);var end = cljs.core.get.call(null,map__11444__$1,new cljs.core.Keyword(null,"end","end",1014004813));var start = cljs.core.get.call(null,map__11444__$1,new cljs.core.Keyword(null,"start","start",1123661780));return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1017056028),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",1013907415),(new cljs.core.Keyword(null,"column","column",3954034376).cljs$core$IFn$_invoke$arity$1(start) - 1),new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(start) - 1)], null),new cljs.core.Keyword(null,"to","to",1013907949),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",1013907415),(new cljs.core.Keyword(null,"column","column",3954034376).cljs$core$IFn$_invoke$arity$1(end) - 1),new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(end) - 1)], null)], null);
});
lt.plugins.elm_light.display_make_results = (function display_make_results(ed,res,path){lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"clear-linter-results!","clear-linter-results!",4528495642));
if(cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__11445_SHARP_){return cljs.core._EQ_.call(null,"error",new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(p1__11445_SHARP_));
}),res)))
{lt.objs.notifos.set_msg_BANG_.call(null,"Elm make returned errors; check you editor or the console for details",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
} else
{}
var seq__11454 = cljs.core.seq.call(null,res);var chunk__11455 = null;var count__11456 = 0;var i__11457 = 0;while(true){
if((i__11457 < count__11456))
{var map__11458 = cljs.core._nth.call(null,chunk__11455,i__11457);var map__11458__$1 = ((cljs.core.seq_QMARK_.call(null,map__11458))?cljs.core.apply.call(null,cljs.core.hash_map,map__11458):map__11458);var tag = cljs.core.get.call(null,map__11458__$1,new cljs.core.Keyword(null,"tag","tag",1014018828));var subregion = cljs.core.get.call(null,map__11458__$1,new cljs.core.Keyword(null,"subregion","subregion",1501636774));var region = cljs.core.get.call(null,map__11458__$1,new cljs.core.Keyword(null,"region","region",4374076006));var details = cljs.core.get.call(null,map__11458__$1,new cljs.core.Keyword(null,"details","details",2571625908));var overview = cljs.core.get.call(null,map__11458__$1,new cljs.core.Keyword(null,"overview","overview",1544020203));var type = cljs.core.get.call(null,map__11458__$1,new cljs.core.Keyword(null,"type","type",1017479852));var file = cljs.core.get.call(null,map__11458__$1,new cljs.core.Keyword(null,"file","file",1017047278));var map__11459_11470 = lt.plugins.elm_light.__GT_lt_range.call(null,region);var map__11459_11471__$1 = ((cljs.core.seq_QMARK_.call(null,map__11459_11470))?cljs.core.apply.call(null,cljs.core.hash_map,map__11459_11470):map__11459_11470);var to_11472 = cljs.core.get.call(null,map__11459_11471__$1,new cljs.core.Keyword(null,"to","to",1013907949));var from_11473 = cljs.core.get.call(null,map__11459_11471__$1,new cljs.core.Keyword(null,"from","from",1017056028));var msg_11474 = [cljs.core.str(overview),cljs.core.str("\n"),cljs.core.str(lt.plugins.elm_light.colorize_msg.call(null,details))].join('');if((cljs.core._EQ_.call(null,path,file)) && (cljs.core._EQ_.call(null,type,"warning")))
{lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"linter-result!","linter-result!",4482067001),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",1124275658),tag,new cljs.core.Keyword(null,"details","details",2571625908),msg_11474,new cljs.core.Keyword(null,"category","category",1064415344),new cljs.core.Keyword(null,"warning","warning",2138350350),new cljs.core.Keyword(null,"code-range","code-range",3297446095),lt.plugins.elm_light.__GT_lt_range.call(null,(function (){var or__4884__auto__ = subregion;if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return region;
}
})())], null));
} else
{if((cljs.core._EQ_.call(null,path,file)) && (cljs.core._EQ_.call(null,type,"error")))
{lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"linter-result!","linter-result!",4482067001),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"titshle","titshle",4001834783),tag,new cljs.core.Keyword(null,"details","details",2571625908),msg_11474,new cljs.core.Keyword(null,"category","category",1064415344),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"code-range","code-range",3297446095),lt.plugins.elm_light.__GT_lt_range.call(null,(function (){var or__4884__auto__ = subregion;if(cljs.core.truth_(or__4884__auto__))
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
var G__11475 = seq__11454;
var G__11476 = chunk__11455;
var G__11477 = count__11456;
var G__11478 = (i__11457 + 1);
seq__11454 = G__11475;
chunk__11455 = G__11476;
count__11456 = G__11477;
i__11457 = G__11478;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__11454);if(temp__4092__auto__)
{var seq__11454__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11454__$1))
{var c__5632__auto__ = cljs.core.chunk_first.call(null,seq__11454__$1);{
var G__11479 = cljs.core.chunk_rest.call(null,seq__11454__$1);
var G__11480 = c__5632__auto__;
var G__11481 = cljs.core.count.call(null,c__5632__auto__);
var G__11482 = 0;
seq__11454 = G__11479;
chunk__11455 = G__11480;
count__11456 = G__11481;
i__11457 = G__11482;
continue;
}
} else
{var map__11460 = cljs.core.first.call(null,seq__11454__$1);var map__11460__$1 = ((cljs.core.seq_QMARK_.call(null,map__11460))?cljs.core.apply.call(null,cljs.core.hash_map,map__11460):map__11460);var tag = cljs.core.get.call(null,map__11460__$1,new cljs.core.Keyword(null,"tag","tag",1014018828));var subregion = cljs.core.get.call(null,map__11460__$1,new cljs.core.Keyword(null,"subregion","subregion",1501636774));var region = cljs.core.get.call(null,map__11460__$1,new cljs.core.Keyword(null,"region","region",4374076006));var details = cljs.core.get.call(null,map__11460__$1,new cljs.core.Keyword(null,"details","details",2571625908));var overview = cljs.core.get.call(null,map__11460__$1,new cljs.core.Keyword(null,"overview","overview",1544020203));var type = cljs.core.get.call(null,map__11460__$1,new cljs.core.Keyword(null,"type","type",1017479852));var file = cljs.core.get.call(null,map__11460__$1,new cljs.core.Keyword(null,"file","file",1017047278));var map__11461_11483 = lt.plugins.elm_light.__GT_lt_range.call(null,region);var map__11461_11484__$1 = ((cljs.core.seq_QMARK_.call(null,map__11461_11483))?cljs.core.apply.call(null,cljs.core.hash_map,map__11461_11483):map__11461_11483);var to_11485 = cljs.core.get.call(null,map__11461_11484__$1,new cljs.core.Keyword(null,"to","to",1013907949));var from_11486 = cljs.core.get.call(null,map__11461_11484__$1,new cljs.core.Keyword(null,"from","from",1017056028));var msg_11487 = [cljs.core.str(overview),cljs.core.str("\n"),cljs.core.str(lt.plugins.elm_light.colorize_msg.call(null,details))].join('');if((cljs.core._EQ_.call(null,path,file)) && (cljs.core._EQ_.call(null,type,"warning")))
{lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"linter-result!","linter-result!",4482067001),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",1124275658),tag,new cljs.core.Keyword(null,"details","details",2571625908),msg_11487,new cljs.core.Keyword(null,"category","category",1064415344),new cljs.core.Keyword(null,"warning","warning",2138350350),new cljs.core.Keyword(null,"code-range","code-range",3297446095),lt.plugins.elm_light.__GT_lt_range.call(null,(function (){var or__4884__auto__ = subregion;if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return region;
}
})())], null));
} else
{if((cljs.core._EQ_.call(null,path,file)) && (cljs.core._EQ_.call(null,type,"error")))
{lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"linter-result!","linter-result!",4482067001),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"titshle","titshle",4001834783),tag,new cljs.core.Keyword(null,"details","details",2571625908),msg_11487,new cljs.core.Keyword(null,"category","category",1064415344),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"code-range","code-range",3297446095),lt.plugins.elm_light.__GT_lt_range.call(null,(function (){var or__4884__auto__ = subregion;if(cljs.core.truth_(or__4884__auto__))
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
var G__11488 = cljs.core.next.call(null,seq__11454__$1);
var G__11489 = null;
var G__11490 = 0;
var G__11491 = 0;
seq__11454 = G__11488;
chunk__11455 = G__11489;
count__11456 = G__11490;
i__11457 = G__11491;
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
lt.plugins.elm_light.create_hints = (function create_hints(completions){return cljs.core.map.call(null,(function (p1__11462_SHARP_){return {"text": new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(p1__11462_SHARP_), "completion": new cljs.core.Keyword(null,"completion","completion",4767668046).cljs$core$IFn$_invoke$arity$1(p1__11462_SHARP_)};
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
lt.plugins.elm_light.__BEH__eval_BANG_ = (function __BEH__eval_BANG_(this$,event){var map__11464 = event;var map__11464__$1 = ((cljs.core.seq_QMARK_.call(null,map__11464))?cljs.core.apply.call(null,cljs.core.hash_map,map__11464):map__11464);var origin = cljs.core.get.call(null,map__11464__$1,new cljs.core.Keyword(null,"origin","origin",4300251800));var info = cljs.core.get.call(null,map__11464__$1,new cljs.core.Keyword(null,"info","info",1017141280));lt.objs.notifos.working.call(null,"Evaluating elm...");
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
lt.plugins.elm_light.__BEH__repl_restart_BANG_ = (function __BEH__repl_restart_BANG_(p__11465){var map__11467 = p__11465;var map__11467__$1 = ((cljs.core.seq_QMARK_.call(null,map__11467))?cljs.core.apply.call(null,cljs.core.hash_map,map__11467):map__11467);var ed = map__11467__$1;var info = cljs.core.get.call(null,map__11467__$1,new cljs.core.Keyword(null,"info","info",1017141280));var temp__4092__auto__ = new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));if(cljs.core.truth_(temp__4092__auto__))
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
var b_11492 = (function (){var or__4884__auto__ = cljs.core.first.call(null,lt.object.by_tag.call(null,new cljs.core.Keyword(null,"browser","browser",1164844698)));if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return lt.objs.browser.add.call(null);
}
})();var get_url_11493 = ((function (b_11492,path,client){
return (function (){return [cljs.core.str("http://localhost:"),cljs.core.str(new cljs.core.Keyword(null,"reactor-port","reactor-port",4649590590).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client))),cljs.core.str(path),cljs.core.str((cljs.core.truth_(debug_QMARK_)?"?debug":""))].join('');
});})(b_11492,path,client))
;if(cljs.core.truth_(new cljs.core.Keyword(null,"connected","connected",4729661051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client))))
{lt.object.raise.call(null,b_11492,new cljs.core.Keyword(null,"navigate!","navigate!",1766726722),get_url_11493.call(null));
} else
{lt.util.js.wait.call(null,100,((function (b_11492,get_url_11493,path,client){
return (function (){return lt.object.raise.call(null,b_11492,new cljs.core.Keyword(null,"navigate!","navigate!",1766726722),get_url_11493.call(null));
});})(b_11492,get_url_11493,path,client))
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
}catch (e11469){var e_11494 = e11469;lt.objs.notifos.set_msg_BANG_.call(null,"Elm format reported errors. See console for details",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),"error",new cljs.core.Keyword(null,"timeout","timeout",3994960083),5000], null));
lt.objs.console.error.call(null,e_11494.message);
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
lt.plugins.elm_light.linter.status_class = (function status_class(p__11169){var map__11171 = p__11169;var map__11171__$1 = ((cljs.core.seq_QMARK_.call(null,map__11171))?cljs.core.apply.call(null,cljs.core.hash_map,map__11171):map__11171);var warnings = cljs.core.get.call(null,map__11171__$1,new cljs.core.Keyword(null,"warnings","warnings",1511995337));var errors = cljs.core.get.call(null,map__11171__$1,new cljs.core.Keyword(null,"errors","errors",4014236381));if((errors > 0))
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
lt.plugins.elm_light.linter.status_text = (function status_text(p__11172){var map__11174 = p__11172;var map__11174__$1 = ((cljs.core.seq_QMARK_.call(null,map__11174))?cljs.core.apply.call(null,cljs.core.hash_map,map__11174):map__11174);var warnings = cljs.core.get.call(null,map__11174__$1,new cljs.core.Keyword(null,"warnings","warnings",1511995337));var errors = cljs.core.get.call(null,map__11174__$1,new cljs.core.Keyword(null,"errors","errors",4014236381));return [cljs.core.str("Lint status: "),cljs.core.str(errors),cljs.core.str("/"),cljs.core.str(warnings)].join('');
});
lt.plugins.elm_light.linter.__GT_status_ui = (function __GT_status_ui(p__11175){var map__11177 = p__11175;var map__11177__$1 = ((cljs.core.seq_QMARK_.call(null,map__11177))?cljs.core.apply.call(null,cljs.core.hash_map,map__11177):map__11177);var lint_summary = cljs.core.get.call(null,map__11177__$1,new cljs.core.Keyword(null,"lint-summary","lint-summary",2275048270));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("lint-status "),cljs.core.str(lt.plugins.elm_light.linter.status_class.call(null,lint_summary))].join('')], null),lt.plugins.elm_light.linter.status_text.call(null,lint_summary)], null);
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
return (function (p__11180){var vec__11181 = p__11180;var k = cljs.core.nth.call(null,vec__11181,0,null);var v = cljs.core.nth.call(null,vec__11181,1,null);return new cljs.core.PersistentArrayMap.fromArray([k,cljs.core.count.call(null,v)], true, false);
});})(results,temp__4090__auto__))
,cljs.core.group_by.call(null,new cljs.core.Keyword(null,"category","category",1064415344),cljs.core.map.call(null,new cljs.core.Keyword(null,"result","result",4374444943),cljs.core.vals.call(null,results)))));
} else
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",1110689146),0,new cljs.core.Keyword(null,"warning","warning",2138350350),0], null);
}
});
lt.plugins.elm_light.linter.update_status_for_editor = (function update_status_for_editor(ed){var map__11184 = lt.plugins.elm_light.linter.grouped_lint_count.call(null,ed);var map__11184__$1 = ((cljs.core.seq_QMARK_.call(null,map__11184))?cljs.core.apply.call(null,cljs.core.hash_map,map__11184):map__11184);var warning = cljs.core.get.call(null,map__11184__$1,new cljs.core.Keyword(null,"warning","warning",2138350350));var error = cljs.core.get.call(null,map__11184__$1,new cljs.core.Keyword(null,"error","error",1110689146));return lt.object.raise.call(null,lt.plugins.elm_light.linter.statusbar_lint_summary,new cljs.core.Keyword(null,"update!","update!",779473898),((function (map__11184,map__11184__$1,warning,error){
return (function (p1__11182_SHARP_){return cljs.core.assoc.call(null,p1__11182_SHARP_,new cljs.core.Keyword(null,"warnings","warnings",1511995337),(function (){var or__4884__auto__ = warning;if(cljs.core.truth_(or__4884__auto__))
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
});})(map__11184,map__11184__$1,warning,error))
);
});
lt.plugins.elm_light.linter.__BEH__update_linter_on_editor_change = (function __BEH__update_linter_on_editor_change(ed){return lt.plugins.elm_light.linter.update_status_for_editor.call(null,ed);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.linter","update-linter-on-editor-change","lt.plugins.elm-light.linter/update-linter-on-editor-change",2858337088),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.linter.__BEH__update_linter_on_editor_change,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"focus","focus",1111509066),null], null), null));
lt.plugins.elm_light.linter.remove_widget = (function remove_widget(ed,el){try{lt.util.dom.remove.call(null,el);
}catch (e11186){var e_11239 = e11186;}return lt.objs.editor.focus.call(null,ed);
});
lt.plugins.elm_light.linter.inline_ui = (function inline_ui(ed,p__11189){var map__11197 = p__11189;var map__11197__$1 = ((cljs.core.seq_QMARK_.call(null,map__11197))?cljs.core.apply.call(null,cljs.core.hash_map,map__11197):map__11197);var category = cljs.core.get.call(null,map__11197__$1,new cljs.core.Keyword(null,"category","category",1064415344));var details = cljs.core.get.call(null,map__11197__$1,new cljs.core.Keyword(null,"details","details",2571625908));var title = cljs.core.get.call(null,map__11197__$1,new cljs.core.Keyword(null,"title","title",1124275658));var e__6277__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tabindex","tabindex",4410954191),-1,new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("linter-res "),cljs.core.str((function (){var or__4884__auto__ = cljs.core.name.call(null,category);if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return "error";
}
})())].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.title","p.title",3057381068),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.details","div.details",4139669847),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),details], null)], null)], null));var seq__11198_11240 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blur","blur",1016931289),((function (e__6277__auto__,map__11197,map__11197__$1,category,details,title){
return (function (p1__11187_SHARP_){return lt.plugins.elm_light.linter.remove_widget.call(null,ed,p1__11187_SHARP_.target);
});})(e__6277__auto__,map__11197,map__11197__$1,category,details,title))
,new cljs.core.Keyword(null,"keydown","keydown",4493897459),((function (e__6277__auto__,map__11197,map__11197__$1,category,details,title){
return (function (p1__11188_SHARP_){var kc = p1__11188_SHARP_.keyCode;if(cljs.core._EQ_.call(null,kc,27))
{return lt.plugins.elm_light.linter.remove_widget.call(null,ed,p1__11188_SHARP_.target);
} else
{return null;
}
});})(e__6277__auto__,map__11197,map__11197__$1,category,details,title))
], null)));var chunk__11199_11241 = null;var count__11200_11242 = 0;var i__11201_11243 = 0;while(true){
if((i__11201_11243 < count__11200_11242))
{var vec__11202_11244 = cljs.core._nth.call(null,chunk__11199_11241,i__11201_11243);var ev__6278__auto___11245 = cljs.core.nth.call(null,vec__11202_11244,0,null);var func__6279__auto___11246 = cljs.core.nth.call(null,vec__11202_11244,1,null);lt.util.dom.on.call(null,e__6277__auto__,ev__6278__auto___11245,func__6279__auto___11246);
{
var G__11247 = seq__11198_11240;
var G__11248 = chunk__11199_11241;
var G__11249 = count__11200_11242;
var G__11250 = (i__11201_11243 + 1);
seq__11198_11240 = G__11247;
chunk__11199_11241 = G__11248;
count__11200_11242 = G__11249;
i__11201_11243 = G__11250;
continue;
}
} else
{var temp__4092__auto___11251 = cljs.core.seq.call(null,seq__11198_11240);if(temp__4092__auto___11251)
{var seq__11198_11252__$1 = temp__4092__auto___11251;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11198_11252__$1))
{var c__5632__auto___11253 = cljs.core.chunk_first.call(null,seq__11198_11252__$1);{
var G__11254 = cljs.core.chunk_rest.call(null,seq__11198_11252__$1);
var G__11255 = c__5632__auto___11253;
var G__11256 = cljs.core.count.call(null,c__5632__auto___11253);
var G__11257 = 0;
seq__11198_11240 = G__11254;
chunk__11199_11241 = G__11255;
count__11200_11242 = G__11256;
i__11201_11243 = G__11257;
continue;
}
} else
{var vec__11203_11258 = cljs.core.first.call(null,seq__11198_11252__$1);var ev__6278__auto___11259 = cljs.core.nth.call(null,vec__11203_11258,0,null);var func__6279__auto___11260 = cljs.core.nth.call(null,vec__11203_11258,1,null);lt.util.dom.on.call(null,e__6277__auto__,ev__6278__auto___11259,func__6279__auto___11260);
{
var G__11261 = cljs.core.next.call(null,seq__11198_11252__$1);
var G__11262 = null;
var G__11263 = 0;
var G__11264 = 0;
seq__11198_11240 = G__11261;
chunk__11199_11241 = G__11262;
count__11200_11242 = G__11263;
i__11201_11243 = G__11264;
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
lt.plugins.elm_light.linter.add_widget = (function add_widget(ed,res_id){var map__11205 = cljs.core.get_in.call(null,cljs.core.deref.call(null,ed),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linter-results","linter-results",4482067083),res_id], null));var map__11205__$1 = ((cljs.core.seq_QMARK_.call(null,map__11205))?cljs.core.apply.call(null,cljs.core.hash_map,map__11205):map__11205);var result = cljs.core.get.call(null,map__11205__$1,new cljs.core.Keyword(null,"result","result",4374444943));var mark = cljs.core.get.call(null,map__11205__$1,new cljs.core.Keyword(null,"mark","mark",1017248319));var ui = lt.plugins.elm_light.linter.inline_ui.call(null,ed,result);lt.objs.editor.__GT_cm_ed.call(null,ed).addWidget(mark.find().from,ui,{"scrollIntoView": true});
return lt.util.dom.focus.call(null,ui);
});
lt.plugins.elm_light.linter.create_mark = (function create_mark(ed,p__11206){var map__11208 = p__11206;var map__11208__$1 = ((cljs.core.seq_QMARK_.call(null,map__11208))?cljs.core.apply.call(null,cljs.core.hash_map,map__11208):map__11208);var code_range = cljs.core.get.call(null,map__11208__$1,new cljs.core.Keyword(null,"code-range","code-range",3297446095));var category = cljs.core.get.call(null,map__11208__$1,new cljs.core.Keyword(null,"category","category",1064415344));var from = new cljs.core.Keyword(null,"from","from",1017056028).cljs$core$IFn$_invoke$arity$1(code_range);var to = ((!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"to","to",1013907949).cljs$core$IFn$_invoke$arity$1(code_range),from)))?new cljs.core.Keyword(null,"to","to",1013907949).cljs$core$IFn$_invoke$arity$1(code_range):cljs.core.assoc.call(null,from,new cljs.core.Keyword(null,"ch","ch",1013907415),(lt.objs.editor.line_length.call(null,ed,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(from)) - 1)));return lt.objs.editor.mark.call(null,ed,from,to,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",1004015509),[cljs.core.str("lint-"),cljs.core.str((function (){var or__4884__auto__ = cljs.core.name.call(null,category);if(cljs.core.truth_(or__4884__auto__))
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
lt.plugins.elm_light.linter.__BEH__clear_linter_results_BANG_ = (function __BEH__clear_linter_results_BANG_(ed){var seq__11215_11265 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"linter-results","linter-results",4482067083).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));var chunk__11216_11266 = null;var count__11217_11267 = 0;var i__11218_11268 = 0;while(true){
if((i__11218_11268 < count__11217_11267))
{var vec__11219_11269 = cljs.core._nth.call(null,chunk__11216_11266,i__11218_11268);var id_11270 = cljs.core.nth.call(null,vec__11219_11269,0,null);var res_11271 = cljs.core.nth.call(null,vec__11219_11269,1,null);var temp__4092__auto___11272 = new cljs.core.Keyword(null,"mark","mark",1017248319).cljs$core$IFn$_invoke$arity$1(res_11271);if(cljs.core.truth_(temp__4092__auto___11272))
{var m_11273 = temp__4092__auto___11272;m_11273.clear();
} else
{}
var temp__4092__auto___11274 = new cljs.core.Keyword(null,"widget","widget",4520824246).cljs$core$IFn$_invoke$arity$1(res_11271);if(cljs.core.truth_(temp__4092__auto___11274))
{var w_11275 = temp__4092__auto___11274;lt.util.dom.remove.call(null,w_11275);
} else
{}
{
var G__11276 = seq__11215_11265;
var G__11277 = chunk__11216_11266;
var G__11278 = count__11217_11267;
var G__11279 = (i__11218_11268 + 1);
seq__11215_11265 = G__11276;
chunk__11216_11266 = G__11277;
count__11217_11267 = G__11278;
i__11218_11268 = G__11279;
continue;
}
} else
{var temp__4092__auto___11280 = cljs.core.seq.call(null,seq__11215_11265);if(temp__4092__auto___11280)
{var seq__11215_11281__$1 = temp__4092__auto___11280;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11215_11281__$1))
{var c__5632__auto___11282 = cljs.core.chunk_first.call(null,seq__11215_11281__$1);{
var G__11283 = cljs.core.chunk_rest.call(null,seq__11215_11281__$1);
var G__11284 = c__5632__auto___11282;
var G__11285 = cljs.core.count.call(null,c__5632__auto___11282);
var G__11286 = 0;
seq__11215_11265 = G__11283;
chunk__11216_11266 = G__11284;
count__11217_11267 = G__11285;
i__11218_11268 = G__11286;
continue;
}
} else
{var vec__11220_11287 = cljs.core.first.call(null,seq__11215_11281__$1);var id_11288 = cljs.core.nth.call(null,vec__11220_11287,0,null);var res_11289 = cljs.core.nth.call(null,vec__11220_11287,1,null);var temp__4092__auto___11290__$1 = new cljs.core.Keyword(null,"mark","mark",1017248319).cljs$core$IFn$_invoke$arity$1(res_11289);if(cljs.core.truth_(temp__4092__auto___11290__$1))
{var m_11291 = temp__4092__auto___11290__$1;m_11291.clear();
} else
{}
var temp__4092__auto___11292__$1 = new cljs.core.Keyword(null,"widget","widget",4520824246).cljs$core$IFn$_invoke$arity$1(res_11289);if(cljs.core.truth_(temp__4092__auto___11292__$1))
{var w_11293 = temp__4092__auto___11292__$1;lt.util.dom.remove.call(null,w_11293);
} else
{}
{
var G__11294 = cljs.core.next.call(null,seq__11215_11281__$1);
var G__11295 = null;
var G__11296 = 0;
var G__11297 = 0;
seq__11215_11265 = G__11294;
chunk__11216_11266 = G__11295;
count__11217_11267 = G__11296;
i__11218_11268 = G__11297;
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
lt.plugins.elm_light.linter.find_current_lint_mark = (function find_current_lint_mark(ed){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__11221_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"linter","linter",4206213986),p1__11221_SHARP_.lttype);
}),lt.objs.editor.find_marks.call(null,ed,lt.objs.editor.__GT_cursor.call(null,ed))));
});
lt.plugins.elm_light.linter.get_widget_by_mark = (function get_widget_by_mark(ed,mark){return cljs.core.get_in.call(null,cljs.core.deref.call(null,ed),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linter-results","linter-results",4482067083),mark.ltlintid,new cljs.core.Keyword(null,"widget","widget",4520824246)], null));
});
lt.plugins.elm_light.linter.mark__GT_pos = (function mark__GT_pos(mark){var cm_pos = mark.find().from;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",1013907415),cm_pos.ch,new cljs.core.Keyword(null,"line","line",1017226086),cm_pos.line], null);
});
lt.plugins.elm_light.linter.get_all_lint_marks = (function get_all_lint_marks(ed){return cljs.core.sort_by.call(null,(function (p1__11223_SHARP_){return cljs.core.juxt.call(null,new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"ch","ch",1013907415)).call(null,lt.plugins.elm_light.linter.mark__GT_pos.call(null,p1__11223_SHARP_));
}),cljs.core.filter.call(null,(function (p1__11222_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"linter","linter",4206213986),p1__11222_SHARP_.lttype);
}),lt.objs.editor.__GT_cm_ed.call(null,ed).getAllMarks()));
});
lt.plugins.elm_light.linter.split_with_mark = (function split_with_mark(ed){var all_marks = lt.plugins.elm_light.linter.get_all_lint_marks.call(null,ed);var curr_mark = lt.plugins.elm_light.linter.find_current_lint_mark.call(null,ed);return cljs.core.split_with.call(null,((function (all_marks,curr_mark){
return (function (p1__11224_SHARP_){return !(cljs.core._EQ_.call(null,(cljs.core.truth_(curr_mark)?curr_mark.ltlintid:null),p1__11224_SHARP_.ltlintid));
});})(all_marks,curr_mark))
,all_marks);
});
lt.plugins.elm_light.linter.find_next_mark = (function find_next_mark(ed){var vec__11226 = lt.plugins.elm_light.linter.split_with_mark.call(null,ed);var ms1 = cljs.core.nth.call(null,vec__11226,0,null);var ms2 = cljs.core.nth.call(null,vec__11226,1,null);return cljs.core.first.call(null,cljs.core.into.call(null,cljs.core.vec.call(null,cljs.core.drop.call(null,1,ms2)),ms1));
});
lt.plugins.elm_light.linter.find_prev_mark = (function find_prev_mark(ed){var vec__11228 = lt.plugins.elm_light.linter.split_with_mark.call(null,ed);var ms1 = cljs.core.nth.call(null,vec__11228,0,null);var ms2 = cljs.core.nth.call(null,vec__11228,1,null);return cljs.core.first.call(null,cljs.core.into.call(null,cljs.core.reverse.call(null,cljs.core.drop.call(null,1,ms2)),ms1));
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
lt.plugins.elm_light.test.deps__GT_named = (function deps__GT_named(deps){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__11394){var vec__11395 = p__11394;var k = cljs.core.nth.call(null,vec__11395,0,null);var v = cljs.core.nth.call(null,vec__11395,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.elm_light.utils.nskw__GT_name.call(null,k),v], null);
}),deps));
});
lt.plugins.elm_light.test.__GT_test_config = (function __GT_test_config(project_cfg){return cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.assoc.call(null,cljs.core.update_in.call(null,project_cfg,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-directories","source-directories",4475397259)], null),lt.plugins.elm_light.test.__GT_test_src_dirs),new cljs.core.Keyword(null,"exposed-modules","exposed-modules",4185867084),cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependencies","dependencies",1517678747)], null),(function (p1__11396_SHARP_){return cljs.core.merge.call(null,p1__11396_SHARP_,lt.plugins.elm_light.test.default_test_deps);
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
return (function (p1__11397_SHARP_){return cljs.core.println.call(null,[cljs.core.str("Test package install: "),cljs.core.str(p1__11397_SHARP_)].join(''));
});})(args,proc))
);
proc.stderr.on("data",((function (args,proc){
return (function (p1__11398_SHARP_){return lt.objs.console.error.call(null,[cljs.core.str(p1__11398_SHARP_)].join(''));
});})(args,proc))
);
proc.on("exit",((function (args,proc){
return (function (p1__11399_SHARP_){if(cljs.core._EQ_.call(null,p1__11399_SHARP_,0))
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