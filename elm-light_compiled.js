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
{var o = (function (){var obj11114 = {};return obj11114;
})();var seq__11115_11128 = cljs.core.seq.call(null,obj);var chunk__11116_11129 = null;var count__11117_11130 = 0;var i__11118_11131 = 0;while(true){
if((i__11118_11131 < count__11117_11130))
{var vec__11119_11132 = cljs.core._nth.call(null,chunk__11116_11129,i__11118_11131);var k_11133 = cljs.core.nth.call(null,vec__11119_11132,0,null);var v_11134 = cljs.core.nth.call(null,vec__11119_11132,1,null);(o[cljs.core.name.call(null,k_11133)] = js_props.call(null,v_11134));
{
var G__11135 = seq__11115_11128;
var G__11136 = chunk__11116_11129;
var G__11137 = count__11117_11130;
var G__11138 = (i__11118_11131 + 1);
seq__11115_11128 = G__11135;
chunk__11116_11129 = G__11136;
count__11117_11130 = G__11137;
i__11118_11131 = G__11138;
continue;
}
} else
{var temp__4092__auto___11139 = cljs.core.seq.call(null,seq__11115_11128);if(temp__4092__auto___11139)
{var seq__11115_11140__$1 = temp__4092__auto___11139;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11115_11140__$1))
{var c__5632__auto___11141 = cljs.core.chunk_first.call(null,seq__11115_11140__$1);{
var G__11142 = cljs.core.chunk_rest.call(null,seq__11115_11140__$1);
var G__11143 = c__5632__auto___11141;
var G__11144 = cljs.core.count.call(null,c__5632__auto___11141);
var G__11145 = 0;
seq__11115_11128 = G__11142;
chunk__11116_11129 = G__11143;
count__11117_11130 = G__11144;
i__11118_11131 = G__11145;
continue;
}
} else
{var vec__11120_11146 = cljs.core.first.call(null,seq__11115_11140__$1);var k_11147 = cljs.core.nth.call(null,vec__11120_11146,0,null);var v_11148 = cljs.core.nth.call(null,vec__11120_11146,1,null);(o[cljs.core.name.call(null,k_11147)] = js_props.call(null,v_11148));
{
var G__11149 = cljs.core.next.call(null,seq__11115_11140__$1);
var G__11150 = null;
var G__11151 = 0;
var G__11152 = 0;
seq__11115_11128 = G__11149;
chunk__11116_11129 = G__11150;
count__11117_11130 = G__11151;
i__11118_11131 = G__11152;
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
quiescent.component = (function component(renderer){var react_component = React.createClass({"render": (function (){var this$ = this;var _STAR_component_STAR_11122 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return cljs.core.apply.call(null,renderer,(this$.props["value"]),(this$.props["statics"]));
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11122;
}}), "shouldComponentUpdate": (function (next_props,_){var this$ = this;return cljs.core.not_EQ_.call(null,(this$.props["value"]),(next_props["value"]));
})});return ((function (react_component){
return (function() { 
var G__11153__delegate = function (value,static_args){return react_component.call(null,{"statics": static_args, "value": value});
};
var G__11153 = function (value,var_args){
var static_args = null;if (arguments.length > 1) {
  static_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__11153__delegate.call(this,value,static_args);};
G__11153.cljs$lang$maxFixedArity = 1;
G__11153.cljs$lang$applyTo = (function (arglist__11154){
var value = cljs.core.first(arglist__11154);
var static_args = cljs.core.rest(arglist__11154);
return G__11153__delegate(value,static_args);
});
G__11153.cljs$core$IFn$_invoke$arity$variadic = G__11153__delegate;
return G__11153;
})()
;
;})(react_component))
});
/**
* Wrapper component used to mix-in lifecycle access
*/
quiescent.WrapperComponent = React.createClass({"componentWillUnmount": (function (){var this$ = this;var temp__4092__auto__ = (this$.props["onWillUnmount"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_11127 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null);
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11127;
}} else
{return null;
}
}), "componentWillUpdate": (function (_,___$1){var this$ = this;var temp__4092__auto__ = (this$.props["onWillUpdate"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_11126 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null);
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11126;
}} else
{return null;
}
}), "componentWillMount": (function (){var this$ = this;var temp__4092__auto__ = (this$.props["onWillMount"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_11125 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null);
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11125;
}} else
{return null;
}
}), "componentDidMount": (function (){var this$ = this;var temp__4092__auto__ = (this$.props["onMount"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_11124 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null,this$.getDOMNode());
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11124;
}} else
{return null;
}
}), "componentDidUpdate": (function (prev_props,prev_state){var this$ = this;var temp__4092__auto__ = (this$.props["onUpdate"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_11123 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null,this$.getDOMNode());
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11123;
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
var wrapper__delegate = function (child,kvs){var props = quiescent.js_props.call(null,cljs.core.apply.call(null,cljs.core.array_map,new cljs.core.Keyword(null,"wrappee","wrappee",2609412088),child,kvs));var temp__4092__auto___11155 = (child.props["key"]);if(cljs.core.truth_(temp__4092__auto___11155))
{var key_11156 = temp__4092__auto___11155;(props["key"] = key_11156);
} else
{}
return quiescent.WrapperComponent.call(null,props);
};
var wrapper = function (child,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrapper__delegate.call(this,child,kvs);};
wrapper.cljs$lang$maxFixedArity = 1;
wrapper.cljs$lang$applyTo = (function (arglist__11157){
var child = cljs.core.first(arglist__11157);
var kvs = cljs.core.rest(arglist__11157);
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
var a__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__7539_8487 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__7540_8488 = null;var count__7541_8489 = 0;var i__7542_8490 = 0;while(true){
if((i__7542_8490 < count__7541_8489))
{var arg__6539__auto___8491 = cljs.core._nth.call(null,chunk__7540_8488,i__7542_8490);a__6538__auto__.push(arg__6539__auto___8491);
{
var G__8492 = seq__7539_8487;
var G__8493 = chunk__7540_8488;
var G__8494 = count__7541_8489;
var G__8495 = (i__7542_8490 + 1);
seq__7539_8487 = G__8492;
chunk__7540_8488 = G__8493;
count__7541_8489 = G__8494;
i__7542_8490 = G__8495;
continue;
}
} else
{var temp__4092__auto___8496 = cljs.core.seq.call(null,seq__7539_8487);if(temp__4092__auto___8496)
{var seq__7539_8497__$1 = temp__4092__auto___8496;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7539_8497__$1))
{var c__5632__auto___8498 = cljs.core.chunk_first.call(null,seq__7539_8497__$1);{
var G__8499 = cljs.core.chunk_rest.call(null,seq__7539_8497__$1);
var G__8500 = c__5632__auto___8498;
var G__8501 = cljs.core.count.call(null,c__5632__auto___8498);
var G__8502 = 0;
seq__7539_8487 = G__8499;
chunk__7540_8488 = G__8500;
count__7541_8489 = G__8501;
i__7542_8490 = G__8502;
continue;
}
} else
{var arg__6539__auto___8503 = cljs.core.first.call(null,seq__7539_8497__$1);a__6538__auto__.push(arg__6539__auto___8503);
{
var G__8504 = cljs.core.next.call(null,seq__7539_8497__$1);
var G__8505 = null;
var G__8506 = 0;
var G__8507 = 0;
seq__7539_8487 = G__8504;
chunk__7540_8488 = G__8505;
count__7541_8489 = G__8506;
i__7542_8490 = G__8507;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.a.apply(null,a__6538__auto__);
};
var a = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return a__delegate.call(this,args__6537__auto__);};
a.cljs$lang$maxFixedArity = 0;
a.cljs$lang$applyTo = (function (arglist__8508){
var args__6537__auto__ = cljs.core.seq(arglist__8508);
return a__delegate(args__6537__auto__);
});
a.cljs$core$IFn$_invoke$arity$variadic = a__delegate;
return a;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.abbr = (function() { 
var abbr__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__7547_8509 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__7548_8510 = null;var count__7549_8511 = 0;var i__7550_8512 = 0;while(true){
if((i__7550_8512 < count__7549_8511))
{var arg__6539__auto___8513 = cljs.core._nth.call(null,chunk__7548_8510,i__7550_8512);a__6538__auto__.push(arg__6539__auto___8513);
{
var G__8514 = seq__7547_8509;
var G__8515 = chunk__7548_8510;
var G__8516 = count__7549_8511;
var G__8517 = (i__7550_8512 + 1);
seq__7547_8509 = G__8514;
chunk__7548_8510 = G__8515;
count__7549_8511 = G__8516;
i__7550_8512 = G__8517;
continue;
}
} else
{var temp__4092__auto___8518 = cljs.core.seq.call(null,seq__7547_8509);if(temp__4092__auto___8518)
{var seq__7547_8519__$1 = temp__4092__auto___8518;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7547_8519__$1))
{var c__5632__auto___8520 = cljs.core.chunk_first.call(null,seq__7547_8519__$1);{
var G__8521 = cljs.core.chunk_rest.call(null,seq__7547_8519__$1);
var G__8522 = c__5632__auto___8520;
var G__8523 = cljs.core.count.call(null,c__5632__auto___8520);
var G__8524 = 0;
seq__7547_8509 = G__8521;
chunk__7548_8510 = G__8522;
count__7549_8511 = G__8523;
i__7550_8512 = G__8524;
continue;
}
} else
{var arg__6539__auto___8525 = cljs.core.first.call(null,seq__7547_8519__$1);a__6538__auto__.push(arg__6539__auto___8525);
{
var G__8526 = cljs.core.next.call(null,seq__7547_8519__$1);
var G__8527 = null;
var G__8528 = 0;
var G__8529 = 0;
seq__7547_8509 = G__8526;
chunk__7548_8510 = G__8527;
count__7549_8511 = G__8528;
i__7550_8512 = G__8529;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.abbr.apply(null,a__6538__auto__);
};
var abbr = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return abbr__delegate.call(this,args__6537__auto__);};
abbr.cljs$lang$maxFixedArity = 0;
abbr.cljs$lang$applyTo = (function (arglist__8530){
var args__6537__auto__ = cljs.core.seq(arglist__8530);
return abbr__delegate(args__6537__auto__);
});
abbr.cljs$core$IFn$_invoke$arity$variadic = abbr__delegate;
return abbr;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.address = (function() { 
var address__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__7555_8531 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__7556_8532 = null;var count__7557_8533 = 0;var i__7558_8534 = 0;while(true){
if((i__7558_8534 < count__7557_8533))
{var arg__6539__auto___8535 = cljs.core._nth.call(null,chunk__7556_8532,i__7558_8534);a__6538__auto__.push(arg__6539__auto___8535);
{
var G__8536 = seq__7555_8531;
var G__8537 = chunk__7556_8532;
var G__8538 = count__7557_8533;
var G__8539 = (i__7558_8534 + 1);
seq__7555_8531 = G__8536;
chunk__7556_8532 = G__8537;
count__7557_8533 = G__8538;
i__7558_8534 = G__8539;
continue;
}
} else
{var temp__4092__auto___8540 = cljs.core.seq.call(null,seq__7555_8531);if(temp__4092__auto___8540)
{var seq__7555_8541__$1 = temp__4092__auto___8540;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7555_8541__$1))
{var c__5632__auto___8542 = cljs.core.chunk_first.call(null,seq__7555_8541__$1);{
var G__8543 = cljs.core.chunk_rest.call(null,seq__7555_8541__$1);
var G__8544 = c__5632__auto___8542;
var G__8545 = cljs.core.count.call(null,c__5632__auto___8542);
var G__8546 = 0;
seq__7555_8531 = G__8543;
chunk__7556_8532 = G__8544;
count__7557_8533 = G__8545;
i__7558_8534 = G__8546;
continue;
}
} else
{var arg__6539__auto___8547 = cljs.core.first.call(null,seq__7555_8541__$1);a__6538__auto__.push(arg__6539__auto___8547);
{
var G__8548 = cljs.core.next.call(null,seq__7555_8541__$1);
var G__8549 = null;
var G__8550 = 0;
var G__8551 = 0;
seq__7555_8531 = G__8548;
chunk__7556_8532 = G__8549;
count__7557_8533 = G__8550;
i__7558_8534 = G__8551;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.address.apply(null,a__6538__auto__);
};
var address = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return address__delegate.call(this,args__6537__auto__);};
address.cljs$lang$maxFixedArity = 0;
address.cljs$lang$applyTo = (function (arglist__8552){
var args__6537__auto__ = cljs.core.seq(arglist__8552);
return address__delegate(args__6537__auto__);
});
address.cljs$core$IFn$_invoke$arity$variadic = address__delegate;
return address;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.area = (function() { 
var area__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__7563_8553 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__7564_8554 = null;var count__7565_8555 = 0;var i__7566_8556 = 0;while(true){
if((i__7566_8556 < count__7565_8555))
{var arg__6539__auto___8557 = cljs.core._nth.call(null,chunk__7564_8554,i__7566_8556);a__6538__auto__.push(arg__6539__auto___8557);
{
var G__8558 = seq__7563_8553;
var G__8559 = chunk__7564_8554;
var G__8560 = count__7565_8555;
var G__8561 = (i__7566_8556 + 1);
seq__7563_8553 = G__8558;
chunk__7564_8554 = G__8559;
count__7565_8555 = G__8560;
i__7566_8556 = G__8561;
continue;
}
} else
{var temp__4092__auto___8562 = cljs.core.seq.call(null,seq__7563_8553);if(temp__4092__auto___8562)
{var seq__7563_8563__$1 = temp__4092__auto___8562;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7563_8563__$1))
{var c__5632__auto___8564 = cljs.core.chunk_first.call(null,seq__7563_8563__$1);{
var G__8565 = cljs.core.chunk_rest.call(null,seq__7563_8563__$1);
var G__8566 = c__5632__auto___8564;
var G__8567 = cljs.core.count.call(null,c__5632__auto___8564);
var G__8568 = 0;
seq__7563_8553 = G__8565;
chunk__7564_8554 = G__8566;
count__7565_8555 = G__8567;
i__7566_8556 = G__8568;
continue;
}
} else
{var arg__6539__auto___8569 = cljs.core.first.call(null,seq__7563_8563__$1);a__6538__auto__.push(arg__6539__auto___8569);
{
var G__8570 = cljs.core.next.call(null,seq__7563_8563__$1);
var G__8571 = null;
var G__8572 = 0;
var G__8573 = 0;
seq__7563_8553 = G__8570;
chunk__7564_8554 = G__8571;
count__7565_8555 = G__8572;
i__7566_8556 = G__8573;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.area.apply(null,a__6538__auto__);
};
var area = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return area__delegate.call(this,args__6537__auto__);};
area.cljs$lang$maxFixedArity = 0;
area.cljs$lang$applyTo = (function (arglist__8574){
var args__6537__auto__ = cljs.core.seq(arglist__8574);
return area__delegate(args__6537__auto__);
});
area.cljs$core$IFn$_invoke$arity$variadic = area__delegate;
return area;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.article = (function() { 
var article__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__7571_8575 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__7572_8576 = null;var count__7573_8577 = 0;var i__7574_8578 = 0;while(true){
if((i__7574_8578 < count__7573_8577))
{var arg__6539__auto___8579 = cljs.core._nth.call(null,chunk__7572_8576,i__7574_8578);a__6538__auto__.push(arg__6539__auto___8579);
{
var G__8580 = seq__7571_8575;
var G__8581 = chunk__7572_8576;
var G__8582 = count__7573_8577;
var G__8583 = (i__7574_8578 + 1);
seq__7571_8575 = G__8580;
chunk__7572_8576 = G__8581;
count__7573_8577 = G__8582;
i__7574_8578 = G__8583;
continue;
}
} else
{var temp__4092__auto___8584 = cljs.core.seq.call(null,seq__7571_8575);if(temp__4092__auto___8584)
{var seq__7571_8585__$1 = temp__4092__auto___8584;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7571_8585__$1))
{var c__5632__auto___8586 = cljs.core.chunk_first.call(null,seq__7571_8585__$1);{
var G__8587 = cljs.core.chunk_rest.call(null,seq__7571_8585__$1);
var G__8588 = c__5632__auto___8586;
var G__8589 = cljs.core.count.call(null,c__5632__auto___8586);
var G__8590 = 0;
seq__7571_8575 = G__8587;
chunk__7572_8576 = G__8588;
count__7573_8577 = G__8589;
i__7574_8578 = G__8590;
continue;
}
} else
{var arg__6539__auto___8591 = cljs.core.first.call(null,seq__7571_8585__$1);a__6538__auto__.push(arg__6539__auto___8591);
{
var G__8592 = cljs.core.next.call(null,seq__7571_8585__$1);
var G__8593 = null;
var G__8594 = 0;
var G__8595 = 0;
seq__7571_8575 = G__8592;
chunk__7572_8576 = G__8593;
count__7573_8577 = G__8594;
i__7574_8578 = G__8595;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.article.apply(null,a__6538__auto__);
};
var article = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return article__delegate.call(this,args__6537__auto__);};
article.cljs$lang$maxFixedArity = 0;
article.cljs$lang$applyTo = (function (arglist__8596){
var args__6537__auto__ = cljs.core.seq(arglist__8596);
return article__delegate(args__6537__auto__);
});
article.cljs$core$IFn$_invoke$arity$variadic = article__delegate;
return article;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.aside = (function() { 
var aside__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__7579_8597 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__7580_8598 = null;var count__7581_8599 = 0;var i__7582_8600 = 0;while(true){
if((i__7582_8600 < count__7581_8599))
{var arg__6539__auto___8601 = cljs.core._nth.call(null,chunk__7580_8598,i__7582_8600);a__6538__auto__.push(arg__6539__auto___8601);
{
var G__8602 = seq__7579_8597;
var G__8603 = chunk__7580_8598;
var G__8604 = count__7581_8599;
var G__8605 = (i__7582_8600 + 1);
seq__7579_8597 = G__8602;
chunk__7580_8598 = G__8603;
count__7581_8599 = G__8604;
i__7582_8600 = G__8605;
continue;
}
} else
{var temp__4092__auto___8606 = cljs.core.seq.call(null,seq__7579_8597);if(temp__4092__auto___8606)
{var seq__7579_8607__$1 = temp__4092__auto___8606;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7579_8607__$1))
{var c__5632__auto___8608 = cljs.core.chunk_first.call(null,seq__7579_8607__$1);{
var G__8609 = cljs.core.chunk_rest.call(null,seq__7579_8607__$1);
var G__8610 = c__5632__auto___8608;
var G__8611 = cljs.core.count.call(null,c__5632__auto___8608);
var G__8612 = 0;
seq__7579_8597 = G__8609;
chunk__7580_8598 = G__8610;
count__7581_8599 = G__8611;
i__7582_8600 = G__8612;
continue;
}
} else
{var arg__6539__auto___8613 = cljs.core.first.call(null,seq__7579_8607__$1);a__6538__auto__.push(arg__6539__auto___8613);
{
var G__8614 = cljs.core.next.call(null,seq__7579_8607__$1);
var G__8615 = null;
var G__8616 = 0;
var G__8617 = 0;
seq__7579_8597 = G__8614;
chunk__7580_8598 = G__8615;
count__7581_8599 = G__8616;
i__7582_8600 = G__8617;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.aside.apply(null,a__6538__auto__);
};
var aside = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return aside__delegate.call(this,args__6537__auto__);};
aside.cljs$lang$maxFixedArity = 0;
aside.cljs$lang$applyTo = (function (arglist__8618){
var args__6537__auto__ = cljs.core.seq(arglist__8618);
return aside__delegate(args__6537__auto__);
});
aside.cljs$core$IFn$_invoke$arity$variadic = aside__delegate;
return aside;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.audio = (function() { 
var audio__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__7587_8619 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__7588_8620 = null;var count__7589_8621 = 0;var i__7590_8622 = 0;while(true){
if((i__7590_8622 < count__7589_8621))
{var arg__6539__auto___8623 = cljs.core._nth.call(null,chunk__7588_8620,i__7590_8622);a__6538__auto__.push(arg__6539__auto___8623);
{
var G__8624 = seq__7587_8619;
var G__8625 = chunk__7588_8620;
var G__8626 = count__7589_8621;
var G__8627 = (i__7590_8622 + 1);
seq__7587_8619 = G__8624;
chunk__7588_8620 = G__8625;
count__7589_8621 = G__8626;
i__7590_8622 = G__8627;
continue;
}
} else
{var temp__4092__auto___8628 = cljs.core.seq.call(null,seq__7587_8619);if(temp__4092__auto___8628)
{var seq__7587_8629__$1 = temp__4092__auto___8628;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7587_8629__$1))
{var c__5632__auto___8630 = cljs.core.chunk_first.call(null,seq__7587_8629__$1);{
var G__8631 = cljs.core.chunk_rest.call(null,seq__7587_8629__$1);
var G__8632 = c__5632__auto___8630;
var G__8633 = cljs.core.count.call(null,c__5632__auto___8630);
var G__8634 = 0;
seq__7587_8619 = G__8631;
chunk__7588_8620 = G__8632;
count__7589_8621 = G__8633;
i__7590_8622 = G__8634;
continue;
}
} else
{var arg__6539__auto___8635 = cljs.core.first.call(null,seq__7587_8629__$1);a__6538__auto__.push(arg__6539__auto___8635);
{
var G__8636 = cljs.core.next.call(null,seq__7587_8629__$1);
var G__8637 = null;
var G__8638 = 0;
var G__8639 = 0;
seq__7587_8619 = G__8636;
chunk__7588_8620 = G__8637;
count__7589_8621 = G__8638;
i__7590_8622 = G__8639;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.audio.apply(null,a__6538__auto__);
};
var audio = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return audio__delegate.call(this,args__6537__auto__);};
audio.cljs$lang$maxFixedArity = 0;
audio.cljs$lang$applyTo = (function (arglist__8640){
var args__6537__auto__ = cljs.core.seq(arglist__8640);
return audio__delegate(args__6537__auto__);
});
audio.cljs$core$IFn$_invoke$arity$variadic = audio__delegate;
return audio;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.b = (function() { 
var b__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__7595_8641 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__7596_8642 = null;var count__7597_8643 = 0;var i__7598_8644 = 0;while(true){
if((i__7598_8644 < count__7597_8643))
{var arg__6539__auto___8645 = cljs.core._nth.call(null,chunk__7596_8642,i__7598_8644);a__6538__auto__.push(arg__6539__auto___8645);
{
var G__8646 = seq__7595_8641;
var G__8647 = chunk__7596_8642;
var G__8648 = count__7597_8643;
var G__8649 = (i__7598_8644 + 1);
seq__7595_8641 = G__8646;
chunk__7596_8642 = G__8647;
count__7597_8643 = G__8648;
i__7598_8644 = G__8649;
continue;
}
} else
{var temp__4092__auto___8650 = cljs.core.seq.call(null,seq__7595_8641);if(temp__4092__auto___8650)
{var seq__7595_8651__$1 = temp__4092__auto___8650;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7595_8651__$1))
{var c__5632__auto___8652 = cljs.core.chunk_first.call(null,seq__7595_8651__$1);{
var G__8653 = cljs.core.chunk_rest.call(null,seq__7595_8651__$1);
var G__8654 = c__5632__auto___8652;
var G__8655 = cljs.core.count.call(null,c__5632__auto___8652);
var G__8656 = 0;
seq__7595_8641 = G__8653;
chunk__7596_8642 = G__8654;
count__7597_8643 = G__8655;
i__7598_8644 = G__8656;
continue;
}
} else
{var arg__6539__auto___8657 = cljs.core.first.call(null,seq__7595_8651__$1);a__6538__auto__.push(arg__6539__auto___8657);
{
var G__8658 = cljs.core.next.call(null,seq__7595_8651__$1);
var G__8659 = null;
var G__8660 = 0;
var G__8661 = 0;
seq__7595_8641 = G__8658;
chunk__7596_8642 = G__8659;
count__7597_8643 = G__8660;
i__7598_8644 = G__8661;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.b.apply(null,a__6538__auto__);
};
var b = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return b__delegate.call(this,args__6537__auto__);};
b.cljs$lang$maxFixedArity = 0;
b.cljs$lang$applyTo = (function (arglist__8662){
var args__6537__auto__ = cljs.core.seq(arglist__8662);
return b__delegate(args__6537__auto__);
});
b.cljs$core$IFn$_invoke$arity$variadic = b__delegate;
return b;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.base = (function() { 
var base__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__7603_8663 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__7604_8664 = null;var count__7605_8665 = 0;var i__7606_8666 = 0;while(true){
if((i__7606_8666 < count__7605_8665))
{var arg__6539__auto___8667 = cljs.core._nth.call(null,chunk__7604_8664,i__7606_8666);a__6538__auto__.push(arg__6539__auto___8667);
{
var G__8668 = seq__7603_8663;
var G__8669 = chunk__7604_8664;
var G__8670 = count__7605_8665;
var G__8671 = (i__7606_8666 + 1);
seq__7603_8663 = G__8668;
chunk__7604_8664 = G__8669;
count__7605_8665 = G__8670;
i__7606_8666 = G__8671;
continue;
}
} else
{var temp__4092__auto___8672 = cljs.core.seq.call(null,seq__7603_8663);if(temp__4092__auto___8672)
{var seq__7603_8673__$1 = temp__4092__auto___8672;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7603_8673__$1))
{var c__5632__auto___8674 = cljs.core.chunk_first.call(null,seq__7603_8673__$1);{
var G__8675 = cljs.core.chunk_rest.call(null,seq__7603_8673__$1);
var G__8676 = c__5632__auto___8674;
var G__8677 = cljs.core.count.call(null,c__5632__auto___8674);
var G__8678 = 0;
seq__7603_8663 = G__8675;
chunk__7604_8664 = G__8676;
count__7605_8665 = G__8677;
i__7606_8666 = G__8678;
continue;
}
} else
{var arg__6539__auto___8679 = cljs.core.first.call(null,seq__7603_8673__$1);a__6538__auto__.push(arg__6539__auto___8679);
{
var G__8680 = cljs.core.next.call(null,seq__7603_8673__$1);
var G__8681 = null;
var G__8682 = 0;
var G__8683 = 0;
seq__7603_8663 = G__8680;
chunk__7604_8664 = G__8681;
count__7605_8665 = G__8682;
i__7606_8666 = G__8683;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.base.apply(null,a__6538__auto__);
};
var base = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return base__delegate.call(this,args__6537__auto__);};
base.cljs$lang$maxFixedArity = 0;
base.cljs$lang$applyTo = (function (arglist__8684){
var args__6537__auto__ = cljs.core.seq(arglist__8684);
return base__delegate(args__6537__auto__);
});
base.cljs$core$IFn$_invoke$arity$variadic = base__delegate;
return base;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.bdi = (function() { 
var bdi__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__7611_8685 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__7612_8686 = null;var count__7613_8687 = 0;var i__7614_8688 = 0;while(true){
if((i__7614_8688 < count__7613_8687))
{var arg__6539__auto___8689 = cljs.core._nth.call(null,chunk__7612_8686,i__7614_8688);a__6538__auto__.push(arg__6539__auto___8689);
{
var G__8690 = seq__7611_8685;
var G__8691 = chunk__7612_8686;
var G__8692 = count__7613_8687;
var G__8693 = (i__7614_8688 + 1);
seq__7611_8685 = G__8690;
chunk__7612_8686 = G__8691;
count__7613_8687 = G__8692;
i__7614_8688 = G__8693;
continue;
}
} else
{var temp__4092__auto___8694 = cljs.core.seq.call(null,seq__7611_8685);if(temp__4092__auto___8694)
{var seq__7611_8695__$1 = temp__4092__auto___8694;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7611_8695__$1))
{var c__5632__auto___8696 = cljs.core.chunk_first.call(null,seq__7611_8695__$1);{
var G__8697 = cljs.core.chunk_rest.call(null,seq__7611_8695__$1);
var G__8698 = c__5632__auto___8696;
var G__8699 = cljs.core.count.call(null,c__5632__auto___8696);
var G__8700 = 0;
seq__7611_8685 = G__8697;
chunk__7612_8686 = G__8698;
count__7613_8687 = G__8699;
i__7614_8688 = G__8700;
continue;
}
} else
{var arg__6539__auto___8701 = cljs.core.first.call(null,seq__7611_8695__$1);a__6538__auto__.push(arg__6539__auto___8701);
{
var G__8702 = cljs.core.next.call(null,seq__7611_8695__$1);
var G__8703 = null;
var G__8704 = 0;
var G__8705 = 0;
seq__7611_8685 = G__8702;
chunk__7612_8686 = G__8703;
count__7613_8687 = G__8704;
i__7614_8688 = G__8705;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.bdi.apply(null,a__6538__auto__);
};
var bdi = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return bdi__delegate.call(this,args__6537__auto__);};
bdi.cljs$lang$maxFixedArity = 0;
bdi.cljs$lang$applyTo = (function (arglist__8706){
var args__6537__auto__ = cljs.core.seq(arglist__8706);
return bdi__delegate(args__6537__auto__);
});
bdi.cljs$core$IFn$_invoke$arity$variadic = bdi__delegate;
return bdi;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.bdo = (function() { 
var bdo__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__7619_8707 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__7620_8708 = null;var count__7621_8709 = 0;var i__7622_8710 = 0;while(true){
if((i__7622_8710 < count__7621_8709))
{var arg__6539__auto___8711 = cljs.core._nth.call(null,chunk__7620_8708,i__7622_8710);a__6538__auto__.push(arg__6539__auto___8711);
{
var G__8712 = seq__7619_8707;
var G__8713 = chunk__7620_8708;
var G__8714 = count__7621_8709;
var G__8715 = (i__7622_8710 + 1);
seq__7619_8707 = G__8712;
chunk__7620_8708 = G__8713;
count__7621_8709 = G__8714;
i__7622_8710 = G__8715;
continue;
}
} else
{var temp__4092__auto___8716 = cljs.core.seq.call(null,seq__7619_8707);if(temp__4092__auto___8716)
{var seq__7619_8717__$1 = temp__4092__auto___8716;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7619_8717__$1))
{var c__5632__auto___8718 = cljs.core.chunk_first.call(null,seq__7619_8717__$1);{
var G__8719 = cljs.core.chunk_rest.call(null,seq__7619_8717__$1);
var G__8720 = c__5632__auto___8718;
var G__8721 = cljs.core.count.call(null,c__5632__auto___8718);
var G__8722 = 0;
seq__7619_8707 = G__8719;
chunk__7620_8708 = G__8720;
count__7621_8709 = G__8721;
i__7622_8710 = G__8722;
continue;
}
} else
{var arg__6539__auto___8723 = cljs.core.first.call(null,seq__7619_8717__$1);a__6538__auto__.push(arg__6539__auto___8723);
{
var G__8724 = cljs.core.next.call(null,seq__7619_8717__$1);
var G__8725 = null;
var G__8726 = 0;
var G__8727 = 0;
seq__7619_8707 = G__8724;
chunk__7620_8708 = G__8725;
count__7621_8709 = G__8726;
i__7622_8710 = G__8727;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.bdo.apply(null,a__6538__auto__);
};
var bdo = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return bdo__delegate.call(this,args__6537__auto__);};
bdo.cljs$lang$maxFixedArity = 0;
bdo.cljs$lang$applyTo = (function (arglist__8728){
var args__6537__auto__ = cljs.core.seq(arglist__8728);
return bdo__delegate(args__6537__auto__);
});
bdo.cljs$core$IFn$_invoke$arity$variadic = bdo__delegate;
return bdo;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.big = (function() { 
var big__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__7627_8729 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__7628_8730 = null;var count__7629_8731 = 0;var i__7630_8732 = 0;while(true){
if((i__7630_8732 < count__7629_8731))
{var arg__6539__auto___8733 = cljs.core._nth.call(null,chunk__7628_8730,i__7630_8732);a__6538__auto__.push(arg__6539__auto___8733);
{
var G__8734 = seq__7627_8729;
var G__8735 = chunk__7628_8730;
var G__8736 = count__7629_8731;
var G__8737 = (i__7630_8732 + 1);
seq__7627_8729 = G__8734;
chunk__7628_8730 = G__8735;
count__7629_8731 = G__8736;
i__7630_8732 = G__8737;
continue;
}
} else
{var temp__4092__auto___8738 = cljs.core.seq.call(null,seq__7627_8729);if(temp__4092__auto___8738)
{var seq__7627_8739__$1 = temp__4092__auto___8738;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7627_8739__$1))
{var c__5632__auto___8740 = cljs.core.chunk_first.call(null,seq__7627_8739__$1);{
var G__8741 = cljs.core.chunk_rest.call(null,seq__7627_8739__$1);
var G__8742 = c__5632__auto___8740;
var G__8743 = cljs.core.count.call(null,c__5632__auto___8740);
var G__8744 = 0;
seq__7627_8729 = G__8741;
chunk__7628_8730 = G__8742;
count__7629_8731 = G__8743;
i__7630_8732 = G__8744;
continue;
}
} else
{var arg__6539__auto___8745 = cljs.core.first.call(null,seq__7627_8739__$1);a__6538__auto__.push(arg__6539__auto___8745);
{
var G__8746 = cljs.core.next.call(null,seq__7627_8739__$1);
var G__8747 = null;
var G__8748 = 0;
var G__8749 = 0;
seq__7627_8729 = G__8746;
chunk__7628_8730 = G__8747;
count__7629_8731 = G__8748;
i__7630_8732 = G__8749;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.big.apply(null,a__6538__auto__);
};
var big = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return big__delegate.call(this,args__6537__auto__);};
big.cljs$lang$maxFixedArity = 0;
big.cljs$lang$applyTo = (function (arglist__8750){
var args__6537__auto__ = cljs.core.seq(arglist__8750);
return big__delegate(args__6537__auto__);
});
big.cljs$core$IFn$_invoke$arity$variadic = big__delegate;
return big;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.blockquote = (function() { 
var blockquote__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__7635_8751 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__7636_8752 = null;var count__7637_8753 = 0;var i__7638_8754 = 0;while(true){
if((i__7638_8754 < count__7637_8753))
{var arg__6539__auto___8755 = cljs.core._nth.call(null,chunk__7636_8752,i__7638_8754);a__6538__auto__.push(arg__6539__auto___8755);
{
var G__8756 = seq__7635_8751;
var G__8757 = chunk__7636_8752;
var G__8758 = count__7637_8753;
var G__8759 = (i__7638_8754 + 1);
seq__7635_8751 = G__8756;
chunk__7636_8752 = G__8757;
count__7637_8753 = G__8758;
i__7638_8754 = G__8759;
continue;
}
} else
{var temp__4092__auto___8760 = cljs.core.seq.call(null,seq__7635_8751);if(temp__4092__auto___8760)
{var seq__7635_8761__$1 = temp__4092__auto___8760;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7635_8761__$1))
{var c__5632__auto___8762 = cljs.core.chunk_first.call(null,seq__7635_8761__$1);{
var G__8763 = cljs.core.chunk_rest.call(null,seq__7635_8761__$1);
var G__8764 = c__5632__auto___8762;
var G__8765 = cljs.core.count.call(null,c__5632__auto___8762);
var G__8766 = 0;
seq__7635_8751 = G__8763;
chunk__7636_8752 = G__8764;
count__7637_8753 = G__8765;
i__7638_8754 = G__8766;
continue;
}
} else
{var arg__6539__auto___8767 = cljs.core.first.call(null,seq__7635_8761__$1);a__6538__auto__.push(arg__6539__auto___8767);
{
var G__8768 = cljs.core.next.call(null,seq__7635_8761__$1);
var G__8769 = null;
var G__8770 = 0;
var G__8771 = 0;
seq__7635_8751 = G__8768;
chunk__7636_8752 = G__8769;
count__7637_8753 = G__8770;
i__7638_8754 = G__8771;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.blockquote.apply(null,a__6538__auto__);
};
var blockquote = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return blockquote__delegate.call(this,args__6537__auto__);};
blockquote.cljs$lang$maxFixedArity = 0;
blockquote.cljs$lang$applyTo = (function (arglist__8772){
var args__6537__auto__ = cljs.core.seq(arglist__8772);
return blockquote__delegate(args__6537__auto__);
});
blockquote.cljs$core$IFn$_invoke$arity$variadic = blockquote__delegate;
return blockquote;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.body = (function() { 
var body__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__7643_8773 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__7644_8774 = null;var count__7645_8775 = 0;var i__7646_8776 = 0;while(true){
if((i__7646_8776 < count__7645_8775))
{var arg__6539__auto___8777 = cljs.core._nth.call(null,chunk__7644_8774,i__7646_8776);a__6538__auto__.push(arg__6539__auto___8777);
{
var G__8778 = seq__7643_8773;
var G__8779 = chunk__7644_8774;
var G__8780 = count__7645_8775;
var G__8781 = (i__7646_8776 + 1);
seq__7643_8773 = G__8778;
chunk__7644_8774 = G__8779;
count__7645_8775 = G__8780;
i__7646_8776 = G__8781;
continue;
}
} else
{var temp__4092__auto___8782 = cljs.core.seq.call(null,seq__7643_8773);if(temp__4092__auto___8782)
{var seq__7643_8783__$1 = temp__4092__auto___8782;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7643_8783__$1))
{var c__5632__auto___8784 = cljs.core.chunk_first.call(null,seq__7643_8783__$1);{
var G__8785 = cljs.core.chunk_rest.call(null,seq__7643_8783__$1);
var G__8786 = c__5632__auto___8784;
var G__8787 = cljs.core.count.call(null,c__5632__auto___8784);
var G__8788 = 0;
seq__7643_8773 = G__8785;
chunk__7644_8774 = G__8786;
count__7645_8775 = G__8787;
i__7646_8776 = G__8788;
continue;
}
} else
{var arg__6539__auto___8789 = cljs.core.first.call(null,seq__7643_8783__$1);a__6538__auto__.push(arg__6539__auto___8789);
{
var G__8790 = cljs.core.next.call(null,seq__7643_8783__$1);
var G__8791 = null;
var G__8792 = 0;
var G__8793 = 0;
seq__7643_8773 = G__8790;
chunk__7644_8774 = G__8791;
count__7645_8775 = G__8792;
i__7646_8776 = G__8793;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.body.apply(null,a__6538__auto__);
};
var body = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return body__delegate.call(this,args__6537__auto__);};
body.cljs$lang$maxFixedArity = 0;
body.cljs$lang$applyTo = (function (arglist__8794){
var args__6537__auto__ = cljs.core.seq(arglist__8794);
return body__delegate(args__6537__auto__);
});
body.cljs$core$IFn$_invoke$arity$variadic = body__delegate;
return body;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.br = (function() { 
var br__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__7651_8795 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__7652_8796 = null;var count__7653_8797 = 0;var i__7654_8798 = 0;while(true){
if((i__7654_8798 < count__7653_8797))
{var arg__6539__auto___8799 = cljs.core._nth.call(null,chunk__7652_8796,i__7654_8798);a__6538__auto__.push(arg__6539__auto___8799);
{
var G__8800 = seq__7651_8795;
var G__8801 = chunk__7652_8796;
var G__8802 = count__7653_8797;
var G__8803 = (i__7654_8798 + 1);
seq__7651_8795 = G__8800;
chunk__7652_8796 = G__8801;
count__7653_8797 = G__8802;
i__7654_8798 = G__8803;
continue;
}
} else
{var temp__4092__auto___8804 = cljs.core.seq.call(null,seq__7651_8795);if(temp__4092__auto___8804)
{var seq__7651_8805__$1 = temp__4092__auto___8804;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7651_8805__$1))
{var c__5632__auto___8806 = cljs.core.chunk_first.call(null,seq__7651_8805__$1);{
var G__8807 = cljs.core.chunk_rest.call(null,seq__7651_8805__$1);
var G__8808 = c__5632__auto___8806;
var G__8809 = cljs.core.count.call(null,c__5632__auto___8806);
var G__8810 = 0;
seq__7651_8795 = G__8807;
chunk__7652_8796 = G__8808;
count__7653_8797 = G__8809;
i__7654_8798 = G__8810;
continue;
}
} else
{var arg__6539__auto___8811 = cljs.core.first.call(null,seq__7651_8805__$1);a__6538__auto__.push(arg__6539__auto___8811);
{
var G__8812 = cljs.core.next.call(null,seq__7651_8805__$1);
var G__8813 = null;
var G__8814 = 0;
var G__8815 = 0;
seq__7651_8795 = G__8812;
chunk__7652_8796 = G__8813;
count__7653_8797 = G__8814;
i__7654_8798 = G__8815;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.br.apply(null,a__6538__auto__);
};
var br = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return br__delegate.call(this,args__6537__auto__);};
br.cljs$lang$maxFixedArity = 0;
br.cljs$lang$applyTo = (function (arglist__8816){
var args__6537__auto__ = cljs.core.seq(arglist__8816);
return br__delegate(args__6537__auto__);
});
br.cljs$core$IFn$_invoke$arity$variadic = br__delegate;
return br;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.button = (function() { 
var button__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__7659_8817 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__7660_8818 = null;var count__7661_8819 = 0;var i__7662_8820 = 0;while(true){
if((i__7662_8820 < count__7661_8819))
{var arg__6539__auto___8821 = cljs.core._nth.call(null,chunk__7660_8818,i__7662_8820);a__6538__auto__.push(arg__6539__auto___8821);
{
var G__8822 = seq__7659_8817;
var G__8823 = chunk__7660_8818;
var G__8824 = count__7661_8819;
var G__8825 = (i__7662_8820 + 1);
seq__7659_8817 = G__8822;
chunk__7660_8818 = G__8823;
count__7661_8819 = G__8824;
i__7662_8820 = G__8825;
continue;
}
} else
{var temp__4092__auto___8826 = cljs.core.seq.call(null,seq__7659_8817);if(temp__4092__auto___8826)
{var seq__7659_8827__$1 = temp__4092__auto___8826;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7659_8827__$1))
{var c__5632__auto___8828 = cljs.core.chunk_first.call(null,seq__7659_8827__$1);{
var G__8829 = cljs.core.chunk_rest.call(null,seq__7659_8827__$1);
var G__8830 = c__5632__auto___8828;
var G__8831 = cljs.core.count.call(null,c__5632__auto___8828);
var G__8832 = 0;
seq__7659_8817 = G__8829;
chunk__7660_8818 = G__8830;
count__7661_8819 = G__8831;
i__7662_8820 = G__8832;
continue;
}
} else
{var arg__6539__auto___8833 = cljs.core.first.call(null,seq__7659_8827__$1);a__6538__auto__.push(arg__6539__auto___8833);
{
var G__8834 = cljs.core.next.call(null,seq__7659_8827__$1);
var G__8835 = null;
var G__8836 = 0;
var G__8837 = 0;
seq__7659_8817 = G__8834;
chunk__7660_8818 = G__8835;
count__7661_8819 = G__8836;
i__7662_8820 = G__8837;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.button.apply(null,a__6538__auto__);
};
var button = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return button__delegate.call(this,args__6537__auto__);};
button.cljs$lang$maxFixedArity = 0;
button.cljs$lang$applyTo = (function (arglist__8838){
var args__6537__auto__ = cljs.core.seq(arglist__8838);
return button__delegate(args__6537__auto__);
});
button.cljs$core$IFn$_invoke$arity$variadic = button__delegate;
return button;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.canvas = (function() { 
var canvas__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__7667_8839 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__7668_8840 = null;var count__7669_8841 = 0;var i__7670_8842 = 0;while(true){
if((i__7670_8842 < count__7669_8841))
{var arg__6539__auto___8843 = cljs.core._nth.call(null,chunk__7668_8840,i__7670_8842);a__6538__auto__.push(arg__6539__auto___8843);
{
var G__8844 = seq__7667_8839;
var G__8845 = chunk__7668_8840;
var G__8846 = count__7669_8841;
var G__8847 = (i__7670_8842 + 1);
seq__7667_8839 = G__8844;
chunk__7668_8840 = G__8845;
count__7669_8841 = G__8846;
i__7670_8842 = G__8847;
continue;
}
} else
{var temp__4092__auto___8848 = cljs.core.seq.call(null,seq__7667_8839);if(temp__4092__auto___8848)
{var seq__7667_8849__$1 = temp__4092__auto___8848;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7667_8849__$1))
{var c__5632__auto___8850 = cljs.core.chunk_first.call(null,seq__7667_8849__$1);{
var G__8851 = cljs.core.chunk_rest.call(null,seq__7667_8849__$1);
var G__8852 = c__5632__auto___8850;
var G__8853 = cljs.core.count.call(null,c__5632__auto___8850);
var G__8854 = 0;
seq__7667_8839 = G__8851;
chunk__7668_8840 = G__8852;
count__7669_8841 = G__8853;
i__7670_8842 = G__8854;
continue;
}
} else
{var arg__6539__auto___8855 = cljs.core.first.call(null,seq__7667_8849__$1);a__6538__auto__.push(arg__6539__auto___8855);
{
var G__8856 = cljs.core.next.call(null,seq__7667_8849__$1);
var G__8857 = null;
var G__8858 = 0;
var G__8859 = 0;
seq__7667_8839 = G__8856;
chunk__7668_8840 = G__8857;
count__7669_8841 = G__8858;
i__7670_8842 = G__8859;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.canvas.apply(null,a__6538__auto__);
};
var canvas = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return canvas__delegate.call(this,args__6537__auto__);};
canvas.cljs$lang$maxFixedArity = 0;
canvas.cljs$lang$applyTo = (function (arglist__8860){
var args__6537__auto__ = cljs.core.seq(arglist__8860);
return canvas__delegate(args__6537__auto__);
});
canvas.cljs$core$IFn$_invoke$arity$variadic = canvas__delegate;
return canvas;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.caption = (function() { 
var caption__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__7675_8861 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__7676_8862 = null;var count__7677_8863 = 0;var i__7678_8864 = 0;while(true){
if((i__7678_8864 < count__7677_8863))
{var arg__6539__auto___8865 = cljs.core._nth.call(null,chunk__7676_8862,i__7678_8864);a__6538__auto__.push(arg__6539__auto___8865);
{
var G__8866 = seq__7675_8861;
var G__8867 = chunk__7676_8862;
var G__8868 = count__7677_8863;
var G__8869 = (i__7678_8864 + 1);
seq__7675_8861 = G__8866;
chunk__7676_8862 = G__8867;
count__7677_8863 = G__8868;
i__7678_8864 = G__8869;
continue;
}
} else
{var temp__4092__auto___8870 = cljs.core.seq.call(null,seq__7675_8861);if(temp__4092__auto___8870)
{var seq__7675_8871__$1 = temp__4092__auto___8870;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7675_8871__$1))
{var c__5632__auto___8872 = cljs.core.chunk_first.call(null,seq__7675_8871__$1);{
var G__8873 = cljs.core.chunk_rest.call(null,seq__7675_8871__$1);
var G__8874 = c__5632__auto___8872;
var G__8875 = cljs.core.count.call(null,c__5632__auto___8872);
var G__8876 = 0;
seq__7675_8861 = G__8873;
chunk__7676_8862 = G__8874;
count__7677_8863 = G__8875;
i__7678_8864 = G__8876;
continue;
}
} else
{var arg__6539__auto___8877 = cljs.core.first.call(null,seq__7675_8871__$1);a__6538__auto__.push(arg__6539__auto___8877);
{
var G__8878 = cljs.core.next.call(null,seq__7675_8871__$1);
var G__8879 = null;
var G__8880 = 0;
var G__8881 = 0;
seq__7675_8861 = G__8878;
chunk__7676_8862 = G__8879;
count__7677_8863 = G__8880;
i__7678_8864 = G__8881;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.caption.apply(null,a__6538__auto__);
};
var caption = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return caption__delegate.call(this,args__6537__auto__);};
caption.cljs$lang$maxFixedArity = 0;
caption.cljs$lang$applyTo = (function (arglist__8882){
var args__6537__auto__ = cljs.core.seq(arglist__8882);
return caption__delegate(args__6537__auto__);
});
caption.cljs$core$IFn$_invoke$arity$variadic = caption__delegate;
return caption;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.cite = (function() { 
var cite__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__7683_8883 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__7684_8884 = null;var count__7685_8885 = 0;var i__7686_8886 = 0;while(true){
if((i__7686_8886 < count__7685_8885))
{var arg__6539__auto___8887 = cljs.core._nth.call(null,chunk__7684_8884,i__7686_8886);a__6538__auto__.push(arg__6539__auto___8887);
{
var G__8888 = seq__7683_8883;
var G__8889 = chunk__7684_8884;
var G__8890 = count__7685_8885;
var G__8891 = (i__7686_8886 + 1);
seq__7683_8883 = G__8888;
chunk__7684_8884 = G__8889;
count__7685_8885 = G__8890;
i__7686_8886 = G__8891;
continue;
}
} else
{var temp__4092__auto___8892 = cljs.core.seq.call(null,seq__7683_8883);if(temp__4092__auto___8892)
{var seq__7683_8893__$1 = temp__4092__auto___8892;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7683_8893__$1))
{var c__5632__auto___8894 = cljs.core.chunk_first.call(null,seq__7683_8893__$1);{
var G__8895 = cljs.core.chunk_rest.call(null,seq__7683_8893__$1);
var G__8896 = c__5632__auto___8894;
var G__8897 = cljs.core.count.call(null,c__5632__auto___8894);
var G__8898 = 0;
seq__7683_8883 = G__8895;
chunk__7684_8884 = G__8896;
count__7685_8885 = G__8897;
i__7686_8886 = G__8898;
continue;
}
} else
{var arg__6539__auto___8899 = cljs.core.first.call(null,seq__7683_8893__$1);a__6538__auto__.push(arg__6539__auto___8899);
{
var G__8900 = cljs.core.next.call(null,seq__7683_8893__$1);
var G__8901 = null;
var G__8902 = 0;
var G__8903 = 0;
seq__7683_8883 = G__8900;
chunk__7684_8884 = G__8901;
count__7685_8885 = G__8902;
i__7686_8886 = G__8903;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.cite.apply(null,a__6538__auto__);
};
var cite = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return cite__delegate.call(this,args__6537__auto__);};
cite.cljs$lang$maxFixedArity = 0;
cite.cljs$lang$applyTo = (function (arglist__8904){
var args__6537__auto__ = cljs.core.seq(arglist__8904);
return cite__delegate(args__6537__auto__);
});
cite.cljs$core$IFn$_invoke$arity$variadic = cite__delegate;
return cite;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.code = (function() { 
var code__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__7691_8905 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__7692_8906 = null;var count__7693_8907 = 0;var i__7694_8908 = 0;while(true){
if((i__7694_8908 < count__7693_8907))
{var arg__6539__auto___8909 = cljs.core._nth.call(null,chunk__7692_8906,i__7694_8908);a__6538__auto__.push(arg__6539__auto___8909);
{
var G__8910 = seq__7691_8905;
var G__8911 = chunk__7692_8906;
var G__8912 = count__7693_8907;
var G__8913 = (i__7694_8908 + 1);
seq__7691_8905 = G__8910;
chunk__7692_8906 = G__8911;
count__7693_8907 = G__8912;
i__7694_8908 = G__8913;
continue;
}
} else
{var temp__4092__auto___8914 = cljs.core.seq.call(null,seq__7691_8905);if(temp__4092__auto___8914)
{var seq__7691_8915__$1 = temp__4092__auto___8914;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7691_8915__$1))
{var c__5632__auto___8916 = cljs.core.chunk_first.call(null,seq__7691_8915__$1);{
var G__8917 = cljs.core.chunk_rest.call(null,seq__7691_8915__$1);
var G__8918 = c__5632__auto___8916;
var G__8919 = cljs.core.count.call(null,c__5632__auto___8916);
var G__8920 = 0;
seq__7691_8905 = G__8917;
chunk__7692_8906 = G__8918;
count__7693_8907 = G__8919;
i__7694_8908 = G__8920;
continue;
}
} else
{var arg__6539__auto___8921 = cljs.core.first.call(null,seq__7691_8915__$1);a__6538__auto__.push(arg__6539__auto___8921);
{
var G__8922 = cljs.core.next.call(null,seq__7691_8915__$1);
var G__8923 = null;
var G__8924 = 0;
var G__8925 = 0;
seq__7691_8905 = G__8922;
chunk__7692_8906 = G__8923;
count__7693_8907 = G__8924;
i__7694_8908 = G__8925;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.code.apply(null,a__6538__auto__);
};
var code = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return code__delegate.call(this,args__6537__auto__);};
code.cljs$lang$maxFixedArity = 0;
code.cljs$lang$applyTo = (function (arglist__8926){
var args__6537__auto__ = cljs.core.seq(arglist__8926);
return code__delegate(args__6537__auto__);
});
code.cljs$core$IFn$_invoke$arity$variadic = code__delegate;
return code;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.col = (function() { 
var col__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__7699_8927 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__7700_8928 = null;var count__7701_8929 = 0;var i__7702_8930 = 0;while(true){
if((i__7702_8930 < count__7701_8929))
{var arg__6539__auto___8931 = cljs.core._nth.call(null,chunk__7700_8928,i__7702_8930);a__6538__auto__.push(arg__6539__auto___8931);
{
var G__8932 = seq__7699_8927;
var G__8933 = chunk__7700_8928;
var G__8934 = count__7701_8929;
var G__8935 = (i__7702_8930 + 1);
seq__7699_8927 = G__8932;
chunk__7700_8928 = G__8933;
count__7701_8929 = G__8934;
i__7702_8930 = G__8935;
continue;
}
} else
{var temp__4092__auto___8936 = cljs.core.seq.call(null,seq__7699_8927);if(temp__4092__auto___8936)
{var seq__7699_8937__$1 = temp__4092__auto___8936;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7699_8937__$1))
{var c__5632__auto___8938 = cljs.core.chunk_first.call(null,seq__7699_8937__$1);{
var G__8939 = cljs.core.chunk_rest.call(null,seq__7699_8937__$1);
var G__8940 = c__5632__auto___8938;
var G__8941 = cljs.core.count.call(null,c__5632__auto___8938);
var G__8942 = 0;
seq__7699_8927 = G__8939;
chunk__7700_8928 = G__8940;
count__7701_8929 = G__8941;
i__7702_8930 = G__8942;
continue;
}
} else
{var arg__6539__auto___8943 = cljs.core.first.call(null,seq__7699_8937__$1);a__6538__auto__.push(arg__6539__auto___8943);
{
var G__8944 = cljs.core.next.call(null,seq__7699_8937__$1);
var G__8945 = null;
var G__8946 = 0;
var G__8947 = 0;
seq__7699_8927 = G__8944;
chunk__7700_8928 = G__8945;
count__7701_8929 = G__8946;
i__7702_8930 = G__8947;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.col.apply(null,a__6538__auto__);
};
var col = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return col__delegate.call(this,args__6537__auto__);};
col.cljs$lang$maxFixedArity = 0;
col.cljs$lang$applyTo = (function (arglist__8948){
var args__6537__auto__ = cljs.core.seq(arglist__8948);
return col__delegate(args__6537__auto__);
});
col.cljs$core$IFn$_invoke$arity$variadic = col__delegate;
return col;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.colgroup = (function() { 
var colgroup__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__7707_8949 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__7708_8950 = null;var count__7709_8951 = 0;var i__7710_8952 = 0;while(true){
if((i__7710_8952 < count__7709_8951))
{var arg__6539__auto___8953 = cljs.core._nth.call(null,chunk__7708_8950,i__7710_8952);a__6538__auto__.push(arg__6539__auto___8953);
{
var G__8954 = seq__7707_8949;
var G__8955 = chunk__7708_8950;
var G__8956 = count__7709_8951;
var G__8957 = (i__7710_8952 + 1);
seq__7707_8949 = G__8954;
chunk__7708_8950 = G__8955;
count__7709_8951 = G__8956;
i__7710_8952 = G__8957;
continue;
}
} else
{var temp__4092__auto___8958 = cljs.core.seq.call(null,seq__7707_8949);if(temp__4092__auto___8958)
{var seq__7707_8959__$1 = temp__4092__auto___8958;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7707_8959__$1))
{var c__5632__auto___8960 = cljs.core.chunk_first.call(null,seq__7707_8959__$1);{
var G__8961 = cljs.core.chunk_rest.call(null,seq__7707_8959__$1);
var G__8962 = c__5632__auto___8960;
var G__8963 = cljs.core.count.call(null,c__5632__auto___8960);
var G__8964 = 0;
seq__7707_8949 = G__8961;
chunk__7708_8950 = G__8962;
count__7709_8951 = G__8963;
i__7710_8952 = G__8964;
continue;
}
} else
{var arg__6539__auto___8965 = cljs.core.first.call(null,seq__7707_8959__$1);a__6538__auto__.push(arg__6539__auto___8965);
{
var G__8966 = cljs.core.next.call(null,seq__7707_8959__$1);
var G__8967 = null;
var G__8968 = 0;
var G__8969 = 0;
seq__7707_8949 = G__8966;
chunk__7708_8950 = G__8967;
count__7709_8951 = G__8968;
i__7710_8952 = G__8969;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.colgroup.apply(null,a__6538__auto__);
};
var colgroup = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return colgroup__delegate.call(this,args__6537__auto__);};
colgroup.cljs$lang$maxFixedArity = 0;
colgroup.cljs$lang$applyTo = (function (arglist__8970){
var args__6537__auto__ = cljs.core.seq(arglist__8970);
return colgroup__delegate(args__6537__auto__);
});
colgroup.cljs$core$IFn$_invoke$arity$variadic = colgroup__delegate;
return colgroup;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.data = (function() { 
var data__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__7715_8971 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__7716_8972 = null;var count__7717_8973 = 0;var i__7718_8974 = 0;while(true){
if((i__7718_8974 < count__7717_8973))
{var arg__6539__auto___8975 = cljs.core._nth.call(null,chunk__7716_8972,i__7718_8974);a__6538__auto__.push(arg__6539__auto___8975);
{
var G__8976 = seq__7715_8971;
var G__8977 = chunk__7716_8972;
var G__8978 = count__7717_8973;
var G__8979 = (i__7718_8974 + 1);
seq__7715_8971 = G__8976;
chunk__7716_8972 = G__8977;
count__7717_8973 = G__8978;
i__7718_8974 = G__8979;
continue;
}
} else
{var temp__4092__auto___8980 = cljs.core.seq.call(null,seq__7715_8971);if(temp__4092__auto___8980)
{var seq__7715_8981__$1 = temp__4092__auto___8980;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7715_8981__$1))
{var c__5632__auto___8982 = cljs.core.chunk_first.call(null,seq__7715_8981__$1);{
var G__8983 = cljs.core.chunk_rest.call(null,seq__7715_8981__$1);
var G__8984 = c__5632__auto___8982;
var G__8985 = cljs.core.count.call(null,c__5632__auto___8982);
var G__8986 = 0;
seq__7715_8971 = G__8983;
chunk__7716_8972 = G__8984;
count__7717_8973 = G__8985;
i__7718_8974 = G__8986;
continue;
}
} else
{var arg__6539__auto___8987 = cljs.core.first.call(null,seq__7715_8981__$1);a__6538__auto__.push(arg__6539__auto___8987);
{
var G__8988 = cljs.core.next.call(null,seq__7715_8981__$1);
var G__8989 = null;
var G__8990 = 0;
var G__8991 = 0;
seq__7715_8971 = G__8988;
chunk__7716_8972 = G__8989;
count__7717_8973 = G__8990;
i__7718_8974 = G__8991;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.data.apply(null,a__6538__auto__);
};
var data = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return data__delegate.call(this,args__6537__auto__);};
data.cljs$lang$maxFixedArity = 0;
data.cljs$lang$applyTo = (function (arglist__8992){
var args__6537__auto__ = cljs.core.seq(arglist__8992);
return data__delegate(args__6537__auto__);
});
data.cljs$core$IFn$_invoke$arity$variadic = data__delegate;
return data;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.datalist = (function() { 
var datalist__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__7723_8993 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__7724_8994 = null;var count__7725_8995 = 0;var i__7726_8996 = 0;while(true){
if((i__7726_8996 < count__7725_8995))
{var arg__6539__auto___8997 = cljs.core._nth.call(null,chunk__7724_8994,i__7726_8996);a__6538__auto__.push(arg__6539__auto___8997);
{
var G__8998 = seq__7723_8993;
var G__8999 = chunk__7724_8994;
var G__9000 = count__7725_8995;
var G__9001 = (i__7726_8996 + 1);
seq__7723_8993 = G__8998;
chunk__7724_8994 = G__8999;
count__7725_8995 = G__9000;
i__7726_8996 = G__9001;
continue;
}
} else
{var temp__4092__auto___9002 = cljs.core.seq.call(null,seq__7723_8993);if(temp__4092__auto___9002)
{var seq__7723_9003__$1 = temp__4092__auto___9002;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7723_9003__$1))
{var c__5632__auto___9004 = cljs.core.chunk_first.call(null,seq__7723_9003__$1);{
var G__9005 = cljs.core.chunk_rest.call(null,seq__7723_9003__$1);
var G__9006 = c__5632__auto___9004;
var G__9007 = cljs.core.count.call(null,c__5632__auto___9004);
var G__9008 = 0;
seq__7723_8993 = G__9005;
chunk__7724_8994 = G__9006;
count__7725_8995 = G__9007;
i__7726_8996 = G__9008;
continue;
}
} else
{var arg__6539__auto___9009 = cljs.core.first.call(null,seq__7723_9003__$1);a__6538__auto__.push(arg__6539__auto___9009);
{
var G__9010 = cljs.core.next.call(null,seq__7723_9003__$1);
var G__9011 = null;
var G__9012 = 0;
var G__9013 = 0;
seq__7723_8993 = G__9010;
chunk__7724_8994 = G__9011;
count__7725_8995 = G__9012;
i__7726_8996 = G__9013;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.datalist.apply(null,a__6538__auto__);
};
var datalist = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return datalist__delegate.call(this,args__6537__auto__);};
datalist.cljs$lang$maxFixedArity = 0;
datalist.cljs$lang$applyTo = (function (arglist__9014){
var args__6537__auto__ = cljs.core.seq(arglist__9014);
return datalist__delegate(args__6537__auto__);
});
datalist.cljs$core$IFn$_invoke$arity$variadic = datalist__delegate;
return datalist;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.dd = (function() { 
var dd__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__7731_9015 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__7732_9016 = null;var count__7733_9017 = 0;var i__7734_9018 = 0;while(true){
if((i__7734_9018 < count__7733_9017))
{var arg__6539__auto___9019 = cljs.core._nth.call(null,chunk__7732_9016,i__7734_9018);a__6538__auto__.push(arg__6539__auto___9019);
{
var G__9020 = seq__7731_9015;
var G__9021 = chunk__7732_9016;
var G__9022 = count__7733_9017;
var G__9023 = (i__7734_9018 + 1);
seq__7731_9015 = G__9020;
chunk__7732_9016 = G__9021;
count__7733_9017 = G__9022;
i__7734_9018 = G__9023;
continue;
}
} else
{var temp__4092__auto___9024 = cljs.core.seq.call(null,seq__7731_9015);if(temp__4092__auto___9024)
{var seq__7731_9025__$1 = temp__4092__auto___9024;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7731_9025__$1))
{var c__5632__auto___9026 = cljs.core.chunk_first.call(null,seq__7731_9025__$1);{
var G__9027 = cljs.core.chunk_rest.call(null,seq__7731_9025__$1);
var G__9028 = c__5632__auto___9026;
var G__9029 = cljs.core.count.call(null,c__5632__auto___9026);
var G__9030 = 0;
seq__7731_9015 = G__9027;
chunk__7732_9016 = G__9028;
count__7733_9017 = G__9029;
i__7734_9018 = G__9030;
continue;
}
} else
{var arg__6539__auto___9031 = cljs.core.first.call(null,seq__7731_9025__$1);a__6538__auto__.push(arg__6539__auto___9031);
{
var G__9032 = cljs.core.next.call(null,seq__7731_9025__$1);
var G__9033 = null;
var G__9034 = 0;
var G__9035 = 0;
seq__7731_9015 = G__9032;
chunk__7732_9016 = G__9033;
count__7733_9017 = G__9034;
i__7734_9018 = G__9035;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.dd.apply(null,a__6538__auto__);
};
var dd = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return dd__delegate.call(this,args__6537__auto__);};
dd.cljs$lang$maxFixedArity = 0;
dd.cljs$lang$applyTo = (function (arglist__9036){
var args__6537__auto__ = cljs.core.seq(arglist__9036);
return dd__delegate(args__6537__auto__);
});
dd.cljs$core$IFn$_invoke$arity$variadic = dd__delegate;
return dd;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.del = (function() { 
var del__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__7739_9037 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__7740_9038 = null;var count__7741_9039 = 0;var i__7742_9040 = 0;while(true){
if((i__7742_9040 < count__7741_9039))
{var arg__6539__auto___9041 = cljs.core._nth.call(null,chunk__7740_9038,i__7742_9040);a__6538__auto__.push(arg__6539__auto___9041);
{
var G__9042 = seq__7739_9037;
var G__9043 = chunk__7740_9038;
var G__9044 = count__7741_9039;
var G__9045 = (i__7742_9040 + 1);
seq__7739_9037 = G__9042;
chunk__7740_9038 = G__9043;
count__7741_9039 = G__9044;
i__7742_9040 = G__9045;
continue;
}
} else
{var temp__4092__auto___9046 = cljs.core.seq.call(null,seq__7739_9037);if(temp__4092__auto___9046)
{var seq__7739_9047__$1 = temp__4092__auto___9046;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7739_9047__$1))
{var c__5632__auto___9048 = cljs.core.chunk_first.call(null,seq__7739_9047__$1);{
var G__9049 = cljs.core.chunk_rest.call(null,seq__7739_9047__$1);
var G__9050 = c__5632__auto___9048;
var G__9051 = cljs.core.count.call(null,c__5632__auto___9048);
var G__9052 = 0;
seq__7739_9037 = G__9049;
chunk__7740_9038 = G__9050;
count__7741_9039 = G__9051;
i__7742_9040 = G__9052;
continue;
}
} else
{var arg__6539__auto___9053 = cljs.core.first.call(null,seq__7739_9047__$1);a__6538__auto__.push(arg__6539__auto___9053);
{
var G__9054 = cljs.core.next.call(null,seq__7739_9047__$1);
var G__9055 = null;
var G__9056 = 0;
var G__9057 = 0;
seq__7739_9037 = G__9054;
chunk__7740_9038 = G__9055;
count__7741_9039 = G__9056;
i__7742_9040 = G__9057;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.del.apply(null,a__6538__auto__);
};
var del = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return del__delegate.call(this,args__6537__auto__);};
del.cljs$lang$maxFixedArity = 0;
del.cljs$lang$applyTo = (function (arglist__9058){
var args__6537__auto__ = cljs.core.seq(arglist__9058);
return del__delegate(args__6537__auto__);
});
del.cljs$core$IFn$_invoke$arity$variadic = del__delegate;
return del;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.details = (function() { 
var details__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__7747_9059 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__7748_9060 = null;var count__7749_9061 = 0;var i__7750_9062 = 0;while(true){
if((i__7750_9062 < count__7749_9061))
{var arg__6539__auto___9063 = cljs.core._nth.call(null,chunk__7748_9060,i__7750_9062);a__6538__auto__.push(arg__6539__auto___9063);
{
var G__9064 = seq__7747_9059;
var G__9065 = chunk__7748_9060;
var G__9066 = count__7749_9061;
var G__9067 = (i__7750_9062 + 1);
seq__7747_9059 = G__9064;
chunk__7748_9060 = G__9065;
count__7749_9061 = G__9066;
i__7750_9062 = G__9067;
continue;
}
} else
{var temp__4092__auto___9068 = cljs.core.seq.call(null,seq__7747_9059);if(temp__4092__auto___9068)
{var seq__7747_9069__$1 = temp__4092__auto___9068;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7747_9069__$1))
{var c__5632__auto___9070 = cljs.core.chunk_first.call(null,seq__7747_9069__$1);{
var G__9071 = cljs.core.chunk_rest.call(null,seq__7747_9069__$1);
var G__9072 = c__5632__auto___9070;
var G__9073 = cljs.core.count.call(null,c__5632__auto___9070);
var G__9074 = 0;
seq__7747_9059 = G__9071;
chunk__7748_9060 = G__9072;
count__7749_9061 = G__9073;
i__7750_9062 = G__9074;
continue;
}
} else
{var arg__6539__auto___9075 = cljs.core.first.call(null,seq__7747_9069__$1);a__6538__auto__.push(arg__6539__auto___9075);
{
var G__9076 = cljs.core.next.call(null,seq__7747_9069__$1);
var G__9077 = null;
var G__9078 = 0;
var G__9079 = 0;
seq__7747_9059 = G__9076;
chunk__7748_9060 = G__9077;
count__7749_9061 = G__9078;
i__7750_9062 = G__9079;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.details.apply(null,a__6538__auto__);
};
var details = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return details__delegate.call(this,args__6537__auto__);};
details.cljs$lang$maxFixedArity = 0;
details.cljs$lang$applyTo = (function (arglist__9080){
var args__6537__auto__ = cljs.core.seq(arglist__9080);
return details__delegate(args__6537__auto__);
});
details.cljs$core$IFn$_invoke$arity$variadic = details__delegate;
return details;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.dfn = (function() { 
var dfn__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__7755_9081 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__7756_9082 = null;var count__7757_9083 = 0;var i__7758_9084 = 0;while(true){
if((i__7758_9084 < count__7757_9083))
{var arg__6539__auto___9085 = cljs.core._nth.call(null,chunk__7756_9082,i__7758_9084);a__6538__auto__.push(arg__6539__auto___9085);
{
var G__9086 = seq__7755_9081;
var G__9087 = chunk__7756_9082;
var G__9088 = count__7757_9083;
var G__9089 = (i__7758_9084 + 1);
seq__7755_9081 = G__9086;
chunk__7756_9082 = G__9087;
count__7757_9083 = G__9088;
i__7758_9084 = G__9089;
continue;
}
} else
{var temp__4092__auto___9090 = cljs.core.seq.call(null,seq__7755_9081);if(temp__4092__auto___9090)
{var seq__7755_9091__$1 = temp__4092__auto___9090;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7755_9091__$1))
{var c__5632__auto___9092 = cljs.core.chunk_first.call(null,seq__7755_9091__$1);{
var G__9093 = cljs.core.chunk_rest.call(null,seq__7755_9091__$1);
var G__9094 = c__5632__auto___9092;
var G__9095 = cljs.core.count.call(null,c__5632__auto___9092);
var G__9096 = 0;
seq__7755_9081 = G__9093;
chunk__7756_9082 = G__9094;
count__7757_9083 = G__9095;
i__7758_9084 = G__9096;
continue;
}
} else
{var arg__6539__auto___9097 = cljs.core.first.call(null,seq__7755_9091__$1);a__6538__auto__.push(arg__6539__auto___9097);
{
var G__9098 = cljs.core.next.call(null,seq__7755_9091__$1);
var G__9099 = null;
var G__9100 = 0;
var G__9101 = 0;
seq__7755_9081 = G__9098;
chunk__7756_9082 = G__9099;
count__7757_9083 = G__9100;
i__7758_9084 = G__9101;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.dfn.apply(null,a__6538__auto__);
};
var dfn = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return dfn__delegate.call(this,args__6537__auto__);};
dfn.cljs$lang$maxFixedArity = 0;
dfn.cljs$lang$applyTo = (function (arglist__9102){
var args__6537__auto__ = cljs.core.seq(arglist__9102);
return dfn__delegate(args__6537__auto__);
});
dfn.cljs$core$IFn$_invoke$arity$variadic = dfn__delegate;
return dfn;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.div = (function() { 
var div__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__7763_9103 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__7764_9104 = null;var count__7765_9105 = 0;var i__7766_9106 = 0;while(true){
if((i__7766_9106 < count__7765_9105))
{var arg__6539__auto___9107 = cljs.core._nth.call(null,chunk__7764_9104,i__7766_9106);a__6538__auto__.push(arg__6539__auto___9107);
{
var G__9108 = seq__7763_9103;
var G__9109 = chunk__7764_9104;
var G__9110 = count__7765_9105;
var G__9111 = (i__7766_9106 + 1);
seq__7763_9103 = G__9108;
chunk__7764_9104 = G__9109;
count__7765_9105 = G__9110;
i__7766_9106 = G__9111;
continue;
}
} else
{var temp__4092__auto___9112 = cljs.core.seq.call(null,seq__7763_9103);if(temp__4092__auto___9112)
{var seq__7763_9113__$1 = temp__4092__auto___9112;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7763_9113__$1))
{var c__5632__auto___9114 = cljs.core.chunk_first.call(null,seq__7763_9113__$1);{
var G__9115 = cljs.core.chunk_rest.call(null,seq__7763_9113__$1);
var G__9116 = c__5632__auto___9114;
var G__9117 = cljs.core.count.call(null,c__5632__auto___9114);
var G__9118 = 0;
seq__7763_9103 = G__9115;
chunk__7764_9104 = G__9116;
count__7765_9105 = G__9117;
i__7766_9106 = G__9118;
continue;
}
} else
{var arg__6539__auto___9119 = cljs.core.first.call(null,seq__7763_9113__$1);a__6538__auto__.push(arg__6539__auto___9119);
{
var G__9120 = cljs.core.next.call(null,seq__7763_9113__$1);
var G__9121 = null;
var G__9122 = 0;
var G__9123 = 0;
seq__7763_9103 = G__9120;
chunk__7764_9104 = G__9121;
count__7765_9105 = G__9122;
i__7766_9106 = G__9123;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.div.apply(null,a__6538__auto__);
};
var div = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return div__delegate.call(this,args__6537__auto__);};
div.cljs$lang$maxFixedArity = 0;
div.cljs$lang$applyTo = (function (arglist__9124){
var args__6537__auto__ = cljs.core.seq(arglist__9124);
return div__delegate(args__6537__auto__);
});
div.cljs$core$IFn$_invoke$arity$variadic = div__delegate;
return div;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.dl = (function() { 
var dl__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__7771_9125 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__7772_9126 = null;var count__7773_9127 = 0;var i__7774_9128 = 0;while(true){
if((i__7774_9128 < count__7773_9127))
{var arg__6539__auto___9129 = cljs.core._nth.call(null,chunk__7772_9126,i__7774_9128);a__6538__auto__.push(arg__6539__auto___9129);
{
var G__9130 = seq__7771_9125;
var G__9131 = chunk__7772_9126;
var G__9132 = count__7773_9127;
var G__9133 = (i__7774_9128 + 1);
seq__7771_9125 = G__9130;
chunk__7772_9126 = G__9131;
count__7773_9127 = G__9132;
i__7774_9128 = G__9133;
continue;
}
} else
{var temp__4092__auto___9134 = cljs.core.seq.call(null,seq__7771_9125);if(temp__4092__auto___9134)
{var seq__7771_9135__$1 = temp__4092__auto___9134;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7771_9135__$1))
{var c__5632__auto___9136 = cljs.core.chunk_first.call(null,seq__7771_9135__$1);{
var G__9137 = cljs.core.chunk_rest.call(null,seq__7771_9135__$1);
var G__9138 = c__5632__auto___9136;
var G__9139 = cljs.core.count.call(null,c__5632__auto___9136);
var G__9140 = 0;
seq__7771_9125 = G__9137;
chunk__7772_9126 = G__9138;
count__7773_9127 = G__9139;
i__7774_9128 = G__9140;
continue;
}
} else
{var arg__6539__auto___9141 = cljs.core.first.call(null,seq__7771_9135__$1);a__6538__auto__.push(arg__6539__auto___9141);
{
var G__9142 = cljs.core.next.call(null,seq__7771_9135__$1);
var G__9143 = null;
var G__9144 = 0;
var G__9145 = 0;
seq__7771_9125 = G__9142;
chunk__7772_9126 = G__9143;
count__7773_9127 = G__9144;
i__7774_9128 = G__9145;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.dl.apply(null,a__6538__auto__);
};
var dl = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return dl__delegate.call(this,args__6537__auto__);};
dl.cljs$lang$maxFixedArity = 0;
dl.cljs$lang$applyTo = (function (arglist__9146){
var args__6537__auto__ = cljs.core.seq(arglist__9146);
return dl__delegate(args__6537__auto__);
});
dl.cljs$core$IFn$_invoke$arity$variadic = dl__delegate;
return dl;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.dt = (function() { 
var dt__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__7779_9147 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__7780_9148 = null;var count__7781_9149 = 0;var i__7782_9150 = 0;while(true){
if((i__7782_9150 < count__7781_9149))
{var arg__6539__auto___9151 = cljs.core._nth.call(null,chunk__7780_9148,i__7782_9150);a__6538__auto__.push(arg__6539__auto___9151);
{
var G__9152 = seq__7779_9147;
var G__9153 = chunk__7780_9148;
var G__9154 = count__7781_9149;
var G__9155 = (i__7782_9150 + 1);
seq__7779_9147 = G__9152;
chunk__7780_9148 = G__9153;
count__7781_9149 = G__9154;
i__7782_9150 = G__9155;
continue;
}
} else
{var temp__4092__auto___9156 = cljs.core.seq.call(null,seq__7779_9147);if(temp__4092__auto___9156)
{var seq__7779_9157__$1 = temp__4092__auto___9156;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7779_9157__$1))
{var c__5632__auto___9158 = cljs.core.chunk_first.call(null,seq__7779_9157__$1);{
var G__9159 = cljs.core.chunk_rest.call(null,seq__7779_9157__$1);
var G__9160 = c__5632__auto___9158;
var G__9161 = cljs.core.count.call(null,c__5632__auto___9158);
var G__9162 = 0;
seq__7779_9147 = G__9159;
chunk__7780_9148 = G__9160;
count__7781_9149 = G__9161;
i__7782_9150 = G__9162;
continue;
}
} else
{var arg__6539__auto___9163 = cljs.core.first.call(null,seq__7779_9157__$1);a__6538__auto__.push(arg__6539__auto___9163);
{
var G__9164 = cljs.core.next.call(null,seq__7779_9157__$1);
var G__9165 = null;
var G__9166 = 0;
var G__9167 = 0;
seq__7779_9147 = G__9164;
chunk__7780_9148 = G__9165;
count__7781_9149 = G__9166;
i__7782_9150 = G__9167;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.dt.apply(null,a__6538__auto__);
};
var dt = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return dt__delegate.call(this,args__6537__auto__);};
dt.cljs$lang$maxFixedArity = 0;
dt.cljs$lang$applyTo = (function (arglist__9168){
var args__6537__auto__ = cljs.core.seq(arglist__9168);
return dt__delegate(args__6537__auto__);
});
dt.cljs$core$IFn$_invoke$arity$variadic = dt__delegate;
return dt;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.em = (function() { 
var em__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__7787_9169 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__7788_9170 = null;var count__7789_9171 = 0;var i__7790_9172 = 0;while(true){
if((i__7790_9172 < count__7789_9171))
{var arg__6539__auto___9173 = cljs.core._nth.call(null,chunk__7788_9170,i__7790_9172);a__6538__auto__.push(arg__6539__auto___9173);
{
var G__9174 = seq__7787_9169;
var G__9175 = chunk__7788_9170;
var G__9176 = count__7789_9171;
var G__9177 = (i__7790_9172 + 1);
seq__7787_9169 = G__9174;
chunk__7788_9170 = G__9175;
count__7789_9171 = G__9176;
i__7790_9172 = G__9177;
continue;
}
} else
{var temp__4092__auto___9178 = cljs.core.seq.call(null,seq__7787_9169);if(temp__4092__auto___9178)
{var seq__7787_9179__$1 = temp__4092__auto___9178;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7787_9179__$1))
{var c__5632__auto___9180 = cljs.core.chunk_first.call(null,seq__7787_9179__$1);{
var G__9181 = cljs.core.chunk_rest.call(null,seq__7787_9179__$1);
var G__9182 = c__5632__auto___9180;
var G__9183 = cljs.core.count.call(null,c__5632__auto___9180);
var G__9184 = 0;
seq__7787_9169 = G__9181;
chunk__7788_9170 = G__9182;
count__7789_9171 = G__9183;
i__7790_9172 = G__9184;
continue;
}
} else
{var arg__6539__auto___9185 = cljs.core.first.call(null,seq__7787_9179__$1);a__6538__auto__.push(arg__6539__auto___9185);
{
var G__9186 = cljs.core.next.call(null,seq__7787_9179__$1);
var G__9187 = null;
var G__9188 = 0;
var G__9189 = 0;
seq__7787_9169 = G__9186;
chunk__7788_9170 = G__9187;
count__7789_9171 = G__9188;
i__7790_9172 = G__9189;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.em.apply(null,a__6538__auto__);
};
var em = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return em__delegate.call(this,args__6537__auto__);};
em.cljs$lang$maxFixedArity = 0;
em.cljs$lang$applyTo = (function (arglist__9190){
var args__6537__auto__ = cljs.core.seq(arglist__9190);
return em__delegate(args__6537__auto__);
});
em.cljs$core$IFn$_invoke$arity$variadic = em__delegate;
return em;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.embed = (function() { 
var embed__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__7803_9191 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__7804_9192 = null;var count__7805_9193 = 0;var i__7806_9194 = 0;while(true){
if((i__7806_9194 < count__7805_9193))
{var arg__6539__auto___9195 = cljs.core._nth.call(null,chunk__7804_9192,i__7806_9194);a__6538__auto__.push(arg__6539__auto___9195);
{
var G__9196 = seq__7803_9191;
var G__9197 = chunk__7804_9192;
var G__9198 = count__7805_9193;
var G__9199 = (i__7806_9194 + 1);
seq__7803_9191 = G__9196;
chunk__7804_9192 = G__9197;
count__7805_9193 = G__9198;
i__7806_9194 = G__9199;
continue;
}
} else
{var temp__4092__auto___9200 = cljs.core.seq.call(null,seq__7803_9191);if(temp__4092__auto___9200)
{var seq__7803_9201__$1 = temp__4092__auto___9200;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7803_9201__$1))
{var c__5632__auto___9202 = cljs.core.chunk_first.call(null,seq__7803_9201__$1);{
var G__9203 = cljs.core.chunk_rest.call(null,seq__7803_9201__$1);
var G__9204 = c__5632__auto___9202;
var G__9205 = cljs.core.count.call(null,c__5632__auto___9202);
var G__9206 = 0;
seq__7803_9191 = G__9203;
chunk__7804_9192 = G__9204;
count__7805_9193 = G__9205;
i__7806_9194 = G__9206;
continue;
}
} else
{var arg__6539__auto___9207 = cljs.core.first.call(null,seq__7803_9201__$1);a__6538__auto__.push(arg__6539__auto___9207);
{
var G__9208 = cljs.core.next.call(null,seq__7803_9201__$1);
var G__9209 = null;
var G__9210 = 0;
var G__9211 = 0;
seq__7803_9191 = G__9208;
chunk__7804_9192 = G__9209;
count__7805_9193 = G__9210;
i__7806_9194 = G__9211;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.embed.apply(null,a__6538__auto__);
};
var embed = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return embed__delegate.call(this,args__6537__auto__);};
embed.cljs$lang$maxFixedArity = 0;
embed.cljs$lang$applyTo = (function (arglist__9212){
var args__6537__auto__ = cljs.core.seq(arglist__9212);
return embed__delegate(args__6537__auto__);
});
embed.cljs$core$IFn$_invoke$arity$variadic = embed__delegate;
return embed;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.fieldset = (function() { 
var fieldset__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__7811_9213 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__7812_9214 = null;var count__7813_9215 = 0;var i__7814_9216 = 0;while(true){
if((i__7814_9216 < count__7813_9215))
{var arg__6539__auto___9217 = cljs.core._nth.call(null,chunk__7812_9214,i__7814_9216);a__6538__auto__.push(arg__6539__auto___9217);
{
var G__9218 = seq__7811_9213;
var G__9219 = chunk__7812_9214;
var G__9220 = count__7813_9215;
var G__9221 = (i__7814_9216 + 1);
seq__7811_9213 = G__9218;
chunk__7812_9214 = G__9219;
count__7813_9215 = G__9220;
i__7814_9216 = G__9221;
continue;
}
} else
{var temp__4092__auto___9222 = cljs.core.seq.call(null,seq__7811_9213);if(temp__4092__auto___9222)
{var seq__7811_9223__$1 = temp__4092__auto___9222;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7811_9223__$1))
{var c__5632__auto___9224 = cljs.core.chunk_first.call(null,seq__7811_9223__$1);{
var G__9225 = cljs.core.chunk_rest.call(null,seq__7811_9223__$1);
var G__9226 = c__5632__auto___9224;
var G__9227 = cljs.core.count.call(null,c__5632__auto___9224);
var G__9228 = 0;
seq__7811_9213 = G__9225;
chunk__7812_9214 = G__9226;
count__7813_9215 = G__9227;
i__7814_9216 = G__9228;
continue;
}
} else
{var arg__6539__auto___9229 = cljs.core.first.call(null,seq__7811_9223__$1);a__6538__auto__.push(arg__6539__auto___9229);
{
var G__9230 = cljs.core.next.call(null,seq__7811_9223__$1);
var G__9231 = null;
var G__9232 = 0;
var G__9233 = 0;
seq__7811_9213 = G__9230;
chunk__7812_9214 = G__9231;
count__7813_9215 = G__9232;
i__7814_9216 = G__9233;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.fieldset.apply(null,a__6538__auto__);
};
var fieldset = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return fieldset__delegate.call(this,args__6537__auto__);};
fieldset.cljs$lang$maxFixedArity = 0;
fieldset.cljs$lang$applyTo = (function (arglist__9234){
var args__6537__auto__ = cljs.core.seq(arglist__9234);
return fieldset__delegate(args__6537__auto__);
});
fieldset.cljs$core$IFn$_invoke$arity$variadic = fieldset__delegate;
return fieldset;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.figcaption = (function() { 
var figcaption__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__7819_9235 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__7820_9236 = null;var count__7821_9237 = 0;var i__7822_9238 = 0;while(true){
if((i__7822_9238 < count__7821_9237))
{var arg__6539__auto___9239 = cljs.core._nth.call(null,chunk__7820_9236,i__7822_9238);a__6538__auto__.push(arg__6539__auto___9239);
{
var G__9240 = seq__7819_9235;
var G__9241 = chunk__7820_9236;
var G__9242 = count__7821_9237;
var G__9243 = (i__7822_9238 + 1);
seq__7819_9235 = G__9240;
chunk__7820_9236 = G__9241;
count__7821_9237 = G__9242;
i__7822_9238 = G__9243;
continue;
}
} else
{var temp__4092__auto___9244 = cljs.core.seq.call(null,seq__7819_9235);if(temp__4092__auto___9244)
{var seq__7819_9245__$1 = temp__4092__auto___9244;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7819_9245__$1))
{var c__5632__auto___9246 = cljs.core.chunk_first.call(null,seq__7819_9245__$1);{
var G__9247 = cljs.core.chunk_rest.call(null,seq__7819_9245__$1);
var G__9248 = c__5632__auto___9246;
var G__9249 = cljs.core.count.call(null,c__5632__auto___9246);
var G__9250 = 0;
seq__7819_9235 = G__9247;
chunk__7820_9236 = G__9248;
count__7821_9237 = G__9249;
i__7822_9238 = G__9250;
continue;
}
} else
{var arg__6539__auto___9251 = cljs.core.first.call(null,seq__7819_9245__$1);a__6538__auto__.push(arg__6539__auto___9251);
{
var G__9252 = cljs.core.next.call(null,seq__7819_9245__$1);
var G__9253 = null;
var G__9254 = 0;
var G__9255 = 0;
seq__7819_9235 = G__9252;
chunk__7820_9236 = G__9253;
count__7821_9237 = G__9254;
i__7822_9238 = G__9255;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.figcaption.apply(null,a__6538__auto__);
};
var figcaption = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return figcaption__delegate.call(this,args__6537__auto__);};
figcaption.cljs$lang$maxFixedArity = 0;
figcaption.cljs$lang$applyTo = (function (arglist__9256){
var args__6537__auto__ = cljs.core.seq(arglist__9256);
return figcaption__delegate(args__6537__auto__);
});
figcaption.cljs$core$IFn$_invoke$arity$variadic = figcaption__delegate;
return figcaption;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.figure = (function() { 
var figure__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__7827_9257 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__7828_9258 = null;var count__7829_9259 = 0;var i__7830_9260 = 0;while(true){
if((i__7830_9260 < count__7829_9259))
{var arg__6539__auto___9261 = cljs.core._nth.call(null,chunk__7828_9258,i__7830_9260);a__6538__auto__.push(arg__6539__auto___9261);
{
var G__9262 = seq__7827_9257;
var G__9263 = chunk__7828_9258;
var G__9264 = count__7829_9259;
var G__9265 = (i__7830_9260 + 1);
seq__7827_9257 = G__9262;
chunk__7828_9258 = G__9263;
count__7829_9259 = G__9264;
i__7830_9260 = G__9265;
continue;
}
} else
{var temp__4092__auto___9266 = cljs.core.seq.call(null,seq__7827_9257);if(temp__4092__auto___9266)
{var seq__7827_9267__$1 = temp__4092__auto___9266;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7827_9267__$1))
{var c__5632__auto___9268 = cljs.core.chunk_first.call(null,seq__7827_9267__$1);{
var G__9269 = cljs.core.chunk_rest.call(null,seq__7827_9267__$1);
var G__9270 = c__5632__auto___9268;
var G__9271 = cljs.core.count.call(null,c__5632__auto___9268);
var G__9272 = 0;
seq__7827_9257 = G__9269;
chunk__7828_9258 = G__9270;
count__7829_9259 = G__9271;
i__7830_9260 = G__9272;
continue;
}
} else
{var arg__6539__auto___9273 = cljs.core.first.call(null,seq__7827_9267__$1);a__6538__auto__.push(arg__6539__auto___9273);
{
var G__9274 = cljs.core.next.call(null,seq__7827_9267__$1);
var G__9275 = null;
var G__9276 = 0;
var G__9277 = 0;
seq__7827_9257 = G__9274;
chunk__7828_9258 = G__9275;
count__7829_9259 = G__9276;
i__7830_9260 = G__9277;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.figure.apply(null,a__6538__auto__);
};
var figure = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return figure__delegate.call(this,args__6537__auto__);};
figure.cljs$lang$maxFixedArity = 0;
figure.cljs$lang$applyTo = (function (arglist__9278){
var args__6537__auto__ = cljs.core.seq(arglist__9278);
return figure__delegate(args__6537__auto__);
});
figure.cljs$core$IFn$_invoke$arity$variadic = figure__delegate;
return figure;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.footer = (function() { 
var footer__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__7835_9279 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__7836_9280 = null;var count__7837_9281 = 0;var i__7838_9282 = 0;while(true){
if((i__7838_9282 < count__7837_9281))
{var arg__6539__auto___9283 = cljs.core._nth.call(null,chunk__7836_9280,i__7838_9282);a__6538__auto__.push(arg__6539__auto___9283);
{
var G__9284 = seq__7835_9279;
var G__9285 = chunk__7836_9280;
var G__9286 = count__7837_9281;
var G__9287 = (i__7838_9282 + 1);
seq__7835_9279 = G__9284;
chunk__7836_9280 = G__9285;
count__7837_9281 = G__9286;
i__7838_9282 = G__9287;
continue;
}
} else
{var temp__4092__auto___9288 = cljs.core.seq.call(null,seq__7835_9279);if(temp__4092__auto___9288)
{var seq__7835_9289__$1 = temp__4092__auto___9288;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7835_9289__$1))
{var c__5632__auto___9290 = cljs.core.chunk_first.call(null,seq__7835_9289__$1);{
var G__9291 = cljs.core.chunk_rest.call(null,seq__7835_9289__$1);
var G__9292 = c__5632__auto___9290;
var G__9293 = cljs.core.count.call(null,c__5632__auto___9290);
var G__9294 = 0;
seq__7835_9279 = G__9291;
chunk__7836_9280 = G__9292;
count__7837_9281 = G__9293;
i__7838_9282 = G__9294;
continue;
}
} else
{var arg__6539__auto___9295 = cljs.core.first.call(null,seq__7835_9289__$1);a__6538__auto__.push(arg__6539__auto___9295);
{
var G__9296 = cljs.core.next.call(null,seq__7835_9289__$1);
var G__9297 = null;
var G__9298 = 0;
var G__9299 = 0;
seq__7835_9279 = G__9296;
chunk__7836_9280 = G__9297;
count__7837_9281 = G__9298;
i__7838_9282 = G__9299;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.footer.apply(null,a__6538__auto__);
};
var footer = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return footer__delegate.call(this,args__6537__auto__);};
footer.cljs$lang$maxFixedArity = 0;
footer.cljs$lang$applyTo = (function (arglist__9300){
var args__6537__auto__ = cljs.core.seq(arglist__9300);
return footer__delegate(args__6537__auto__);
});
footer.cljs$core$IFn$_invoke$arity$variadic = footer__delegate;
return footer;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.form = (function() { 
var form__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__7843_9301 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__7844_9302 = null;var count__7845_9303 = 0;var i__7846_9304 = 0;while(true){
if((i__7846_9304 < count__7845_9303))
{var arg__6539__auto___9305 = cljs.core._nth.call(null,chunk__7844_9302,i__7846_9304);a__6538__auto__.push(arg__6539__auto___9305);
{
var G__9306 = seq__7843_9301;
var G__9307 = chunk__7844_9302;
var G__9308 = count__7845_9303;
var G__9309 = (i__7846_9304 + 1);
seq__7843_9301 = G__9306;
chunk__7844_9302 = G__9307;
count__7845_9303 = G__9308;
i__7846_9304 = G__9309;
continue;
}
} else
{var temp__4092__auto___9310 = cljs.core.seq.call(null,seq__7843_9301);if(temp__4092__auto___9310)
{var seq__7843_9311__$1 = temp__4092__auto___9310;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7843_9311__$1))
{var c__5632__auto___9312 = cljs.core.chunk_first.call(null,seq__7843_9311__$1);{
var G__9313 = cljs.core.chunk_rest.call(null,seq__7843_9311__$1);
var G__9314 = c__5632__auto___9312;
var G__9315 = cljs.core.count.call(null,c__5632__auto___9312);
var G__9316 = 0;
seq__7843_9301 = G__9313;
chunk__7844_9302 = G__9314;
count__7845_9303 = G__9315;
i__7846_9304 = G__9316;
continue;
}
} else
{var arg__6539__auto___9317 = cljs.core.first.call(null,seq__7843_9311__$1);a__6538__auto__.push(arg__6539__auto___9317);
{
var G__9318 = cljs.core.next.call(null,seq__7843_9311__$1);
var G__9319 = null;
var G__9320 = 0;
var G__9321 = 0;
seq__7843_9301 = G__9318;
chunk__7844_9302 = G__9319;
count__7845_9303 = G__9320;
i__7846_9304 = G__9321;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.form.apply(null,a__6538__auto__);
};
var form = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return form__delegate.call(this,args__6537__auto__);};
form.cljs$lang$maxFixedArity = 0;
form.cljs$lang$applyTo = (function (arglist__9322){
var args__6537__auto__ = cljs.core.seq(arglist__9322);
return form__delegate(args__6537__auto__);
});
form.cljs$core$IFn$_invoke$arity$variadic = form__delegate;
return form;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h1 = (function() { 
var h1__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__7851_9323 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__7852_9324 = null;var count__7853_9325 = 0;var i__7854_9326 = 0;while(true){
if((i__7854_9326 < count__7853_9325))
{var arg__6539__auto___9327 = cljs.core._nth.call(null,chunk__7852_9324,i__7854_9326);a__6538__auto__.push(arg__6539__auto___9327);
{
var G__9328 = seq__7851_9323;
var G__9329 = chunk__7852_9324;
var G__9330 = count__7853_9325;
var G__9331 = (i__7854_9326 + 1);
seq__7851_9323 = G__9328;
chunk__7852_9324 = G__9329;
count__7853_9325 = G__9330;
i__7854_9326 = G__9331;
continue;
}
} else
{var temp__4092__auto___9332 = cljs.core.seq.call(null,seq__7851_9323);if(temp__4092__auto___9332)
{var seq__7851_9333__$1 = temp__4092__auto___9332;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7851_9333__$1))
{var c__5632__auto___9334 = cljs.core.chunk_first.call(null,seq__7851_9333__$1);{
var G__9335 = cljs.core.chunk_rest.call(null,seq__7851_9333__$1);
var G__9336 = c__5632__auto___9334;
var G__9337 = cljs.core.count.call(null,c__5632__auto___9334);
var G__9338 = 0;
seq__7851_9323 = G__9335;
chunk__7852_9324 = G__9336;
count__7853_9325 = G__9337;
i__7854_9326 = G__9338;
continue;
}
} else
{var arg__6539__auto___9339 = cljs.core.first.call(null,seq__7851_9333__$1);a__6538__auto__.push(arg__6539__auto___9339);
{
var G__9340 = cljs.core.next.call(null,seq__7851_9333__$1);
var G__9341 = null;
var G__9342 = 0;
var G__9343 = 0;
seq__7851_9323 = G__9340;
chunk__7852_9324 = G__9341;
count__7853_9325 = G__9342;
i__7854_9326 = G__9343;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h1.apply(null,a__6538__auto__);
};
var h1 = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h1__delegate.call(this,args__6537__auto__);};
h1.cljs$lang$maxFixedArity = 0;
h1.cljs$lang$applyTo = (function (arglist__9344){
var args__6537__auto__ = cljs.core.seq(arglist__9344);
return h1__delegate(args__6537__auto__);
});
h1.cljs$core$IFn$_invoke$arity$variadic = h1__delegate;
return h1;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h2 = (function() { 
var h2__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__7859_9345 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__7860_9346 = null;var count__7861_9347 = 0;var i__7862_9348 = 0;while(true){
if((i__7862_9348 < count__7861_9347))
{var arg__6539__auto___9349 = cljs.core._nth.call(null,chunk__7860_9346,i__7862_9348);a__6538__auto__.push(arg__6539__auto___9349);
{
var G__9350 = seq__7859_9345;
var G__9351 = chunk__7860_9346;
var G__9352 = count__7861_9347;
var G__9353 = (i__7862_9348 + 1);
seq__7859_9345 = G__9350;
chunk__7860_9346 = G__9351;
count__7861_9347 = G__9352;
i__7862_9348 = G__9353;
continue;
}
} else
{var temp__4092__auto___9354 = cljs.core.seq.call(null,seq__7859_9345);if(temp__4092__auto___9354)
{var seq__7859_9355__$1 = temp__4092__auto___9354;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7859_9355__$1))
{var c__5632__auto___9356 = cljs.core.chunk_first.call(null,seq__7859_9355__$1);{
var G__9357 = cljs.core.chunk_rest.call(null,seq__7859_9355__$1);
var G__9358 = c__5632__auto___9356;
var G__9359 = cljs.core.count.call(null,c__5632__auto___9356);
var G__9360 = 0;
seq__7859_9345 = G__9357;
chunk__7860_9346 = G__9358;
count__7861_9347 = G__9359;
i__7862_9348 = G__9360;
continue;
}
} else
{var arg__6539__auto___9361 = cljs.core.first.call(null,seq__7859_9355__$1);a__6538__auto__.push(arg__6539__auto___9361);
{
var G__9362 = cljs.core.next.call(null,seq__7859_9355__$1);
var G__9363 = null;
var G__9364 = 0;
var G__9365 = 0;
seq__7859_9345 = G__9362;
chunk__7860_9346 = G__9363;
count__7861_9347 = G__9364;
i__7862_9348 = G__9365;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h2.apply(null,a__6538__auto__);
};
var h2 = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h2__delegate.call(this,args__6537__auto__);};
h2.cljs$lang$maxFixedArity = 0;
h2.cljs$lang$applyTo = (function (arglist__9366){
var args__6537__auto__ = cljs.core.seq(arglist__9366);
return h2__delegate(args__6537__auto__);
});
h2.cljs$core$IFn$_invoke$arity$variadic = h2__delegate;
return h2;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h3 = (function() { 
var h3__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__7867_9367 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__7868_9368 = null;var count__7869_9369 = 0;var i__7870_9370 = 0;while(true){
if((i__7870_9370 < count__7869_9369))
{var arg__6539__auto___9371 = cljs.core._nth.call(null,chunk__7868_9368,i__7870_9370);a__6538__auto__.push(arg__6539__auto___9371);
{
var G__9372 = seq__7867_9367;
var G__9373 = chunk__7868_9368;
var G__9374 = count__7869_9369;
var G__9375 = (i__7870_9370 + 1);
seq__7867_9367 = G__9372;
chunk__7868_9368 = G__9373;
count__7869_9369 = G__9374;
i__7870_9370 = G__9375;
continue;
}
} else
{var temp__4092__auto___9376 = cljs.core.seq.call(null,seq__7867_9367);if(temp__4092__auto___9376)
{var seq__7867_9377__$1 = temp__4092__auto___9376;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7867_9377__$1))
{var c__5632__auto___9378 = cljs.core.chunk_first.call(null,seq__7867_9377__$1);{
var G__9379 = cljs.core.chunk_rest.call(null,seq__7867_9377__$1);
var G__9380 = c__5632__auto___9378;
var G__9381 = cljs.core.count.call(null,c__5632__auto___9378);
var G__9382 = 0;
seq__7867_9367 = G__9379;
chunk__7868_9368 = G__9380;
count__7869_9369 = G__9381;
i__7870_9370 = G__9382;
continue;
}
} else
{var arg__6539__auto___9383 = cljs.core.first.call(null,seq__7867_9377__$1);a__6538__auto__.push(arg__6539__auto___9383);
{
var G__9384 = cljs.core.next.call(null,seq__7867_9377__$1);
var G__9385 = null;
var G__9386 = 0;
var G__9387 = 0;
seq__7867_9367 = G__9384;
chunk__7868_9368 = G__9385;
count__7869_9369 = G__9386;
i__7870_9370 = G__9387;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h3.apply(null,a__6538__auto__);
};
var h3 = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h3__delegate.call(this,args__6537__auto__);};
h3.cljs$lang$maxFixedArity = 0;
h3.cljs$lang$applyTo = (function (arglist__9388){
var args__6537__auto__ = cljs.core.seq(arglist__9388);
return h3__delegate(args__6537__auto__);
});
h3.cljs$core$IFn$_invoke$arity$variadic = h3__delegate;
return h3;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h4 = (function() { 
var h4__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__7875_9389 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__7876_9390 = null;var count__7877_9391 = 0;var i__7878_9392 = 0;while(true){
if((i__7878_9392 < count__7877_9391))
{var arg__6539__auto___9393 = cljs.core._nth.call(null,chunk__7876_9390,i__7878_9392);a__6538__auto__.push(arg__6539__auto___9393);
{
var G__9394 = seq__7875_9389;
var G__9395 = chunk__7876_9390;
var G__9396 = count__7877_9391;
var G__9397 = (i__7878_9392 + 1);
seq__7875_9389 = G__9394;
chunk__7876_9390 = G__9395;
count__7877_9391 = G__9396;
i__7878_9392 = G__9397;
continue;
}
} else
{var temp__4092__auto___9398 = cljs.core.seq.call(null,seq__7875_9389);if(temp__4092__auto___9398)
{var seq__7875_9399__$1 = temp__4092__auto___9398;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7875_9399__$1))
{var c__5632__auto___9400 = cljs.core.chunk_first.call(null,seq__7875_9399__$1);{
var G__9401 = cljs.core.chunk_rest.call(null,seq__7875_9399__$1);
var G__9402 = c__5632__auto___9400;
var G__9403 = cljs.core.count.call(null,c__5632__auto___9400);
var G__9404 = 0;
seq__7875_9389 = G__9401;
chunk__7876_9390 = G__9402;
count__7877_9391 = G__9403;
i__7878_9392 = G__9404;
continue;
}
} else
{var arg__6539__auto___9405 = cljs.core.first.call(null,seq__7875_9399__$1);a__6538__auto__.push(arg__6539__auto___9405);
{
var G__9406 = cljs.core.next.call(null,seq__7875_9399__$1);
var G__9407 = null;
var G__9408 = 0;
var G__9409 = 0;
seq__7875_9389 = G__9406;
chunk__7876_9390 = G__9407;
count__7877_9391 = G__9408;
i__7878_9392 = G__9409;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h4.apply(null,a__6538__auto__);
};
var h4 = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h4__delegate.call(this,args__6537__auto__);};
h4.cljs$lang$maxFixedArity = 0;
h4.cljs$lang$applyTo = (function (arglist__9410){
var args__6537__auto__ = cljs.core.seq(arglist__9410);
return h4__delegate(args__6537__auto__);
});
h4.cljs$core$IFn$_invoke$arity$variadic = h4__delegate;
return h4;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h5 = (function() { 
var h5__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__7883_9411 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__7884_9412 = null;var count__7885_9413 = 0;var i__7886_9414 = 0;while(true){
if((i__7886_9414 < count__7885_9413))
{var arg__6539__auto___9415 = cljs.core._nth.call(null,chunk__7884_9412,i__7886_9414);a__6538__auto__.push(arg__6539__auto___9415);
{
var G__9416 = seq__7883_9411;
var G__9417 = chunk__7884_9412;
var G__9418 = count__7885_9413;
var G__9419 = (i__7886_9414 + 1);
seq__7883_9411 = G__9416;
chunk__7884_9412 = G__9417;
count__7885_9413 = G__9418;
i__7886_9414 = G__9419;
continue;
}
} else
{var temp__4092__auto___9420 = cljs.core.seq.call(null,seq__7883_9411);if(temp__4092__auto___9420)
{var seq__7883_9421__$1 = temp__4092__auto___9420;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7883_9421__$1))
{var c__5632__auto___9422 = cljs.core.chunk_first.call(null,seq__7883_9421__$1);{
var G__9423 = cljs.core.chunk_rest.call(null,seq__7883_9421__$1);
var G__9424 = c__5632__auto___9422;
var G__9425 = cljs.core.count.call(null,c__5632__auto___9422);
var G__9426 = 0;
seq__7883_9411 = G__9423;
chunk__7884_9412 = G__9424;
count__7885_9413 = G__9425;
i__7886_9414 = G__9426;
continue;
}
} else
{var arg__6539__auto___9427 = cljs.core.first.call(null,seq__7883_9421__$1);a__6538__auto__.push(arg__6539__auto___9427);
{
var G__9428 = cljs.core.next.call(null,seq__7883_9421__$1);
var G__9429 = null;
var G__9430 = 0;
var G__9431 = 0;
seq__7883_9411 = G__9428;
chunk__7884_9412 = G__9429;
count__7885_9413 = G__9430;
i__7886_9414 = G__9431;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h5.apply(null,a__6538__auto__);
};
var h5 = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h5__delegate.call(this,args__6537__auto__);};
h5.cljs$lang$maxFixedArity = 0;
h5.cljs$lang$applyTo = (function (arglist__9432){
var args__6537__auto__ = cljs.core.seq(arglist__9432);
return h5__delegate(args__6537__auto__);
});
h5.cljs$core$IFn$_invoke$arity$variadic = h5__delegate;
return h5;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h6 = (function() { 
var h6__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__7891_9433 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__7892_9434 = null;var count__7893_9435 = 0;var i__7894_9436 = 0;while(true){
if((i__7894_9436 < count__7893_9435))
{var arg__6539__auto___9437 = cljs.core._nth.call(null,chunk__7892_9434,i__7894_9436);a__6538__auto__.push(arg__6539__auto___9437);
{
var G__9438 = seq__7891_9433;
var G__9439 = chunk__7892_9434;
var G__9440 = count__7893_9435;
var G__9441 = (i__7894_9436 + 1);
seq__7891_9433 = G__9438;
chunk__7892_9434 = G__9439;
count__7893_9435 = G__9440;
i__7894_9436 = G__9441;
continue;
}
} else
{var temp__4092__auto___9442 = cljs.core.seq.call(null,seq__7891_9433);if(temp__4092__auto___9442)
{var seq__7891_9443__$1 = temp__4092__auto___9442;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7891_9443__$1))
{var c__5632__auto___9444 = cljs.core.chunk_first.call(null,seq__7891_9443__$1);{
var G__9445 = cljs.core.chunk_rest.call(null,seq__7891_9443__$1);
var G__9446 = c__5632__auto___9444;
var G__9447 = cljs.core.count.call(null,c__5632__auto___9444);
var G__9448 = 0;
seq__7891_9433 = G__9445;
chunk__7892_9434 = G__9446;
count__7893_9435 = G__9447;
i__7894_9436 = G__9448;
continue;
}
} else
{var arg__6539__auto___9449 = cljs.core.first.call(null,seq__7891_9443__$1);a__6538__auto__.push(arg__6539__auto___9449);
{
var G__9450 = cljs.core.next.call(null,seq__7891_9443__$1);
var G__9451 = null;
var G__9452 = 0;
var G__9453 = 0;
seq__7891_9433 = G__9450;
chunk__7892_9434 = G__9451;
count__7893_9435 = G__9452;
i__7894_9436 = G__9453;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h6.apply(null,a__6538__auto__);
};
var h6 = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h6__delegate.call(this,args__6537__auto__);};
h6.cljs$lang$maxFixedArity = 0;
h6.cljs$lang$applyTo = (function (arglist__9454){
var args__6537__auto__ = cljs.core.seq(arglist__9454);
return h6__delegate(args__6537__auto__);
});
h6.cljs$core$IFn$_invoke$arity$variadic = h6__delegate;
return h6;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.head = (function() { 
var head__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__7899_9455 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__7900_9456 = null;var count__7901_9457 = 0;var i__7902_9458 = 0;while(true){
if((i__7902_9458 < count__7901_9457))
{var arg__6539__auto___9459 = cljs.core._nth.call(null,chunk__7900_9456,i__7902_9458);a__6538__auto__.push(arg__6539__auto___9459);
{
var G__9460 = seq__7899_9455;
var G__9461 = chunk__7900_9456;
var G__9462 = count__7901_9457;
var G__9463 = (i__7902_9458 + 1);
seq__7899_9455 = G__9460;
chunk__7900_9456 = G__9461;
count__7901_9457 = G__9462;
i__7902_9458 = G__9463;
continue;
}
} else
{var temp__4092__auto___9464 = cljs.core.seq.call(null,seq__7899_9455);if(temp__4092__auto___9464)
{var seq__7899_9465__$1 = temp__4092__auto___9464;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7899_9465__$1))
{var c__5632__auto___9466 = cljs.core.chunk_first.call(null,seq__7899_9465__$1);{
var G__9467 = cljs.core.chunk_rest.call(null,seq__7899_9465__$1);
var G__9468 = c__5632__auto___9466;
var G__9469 = cljs.core.count.call(null,c__5632__auto___9466);
var G__9470 = 0;
seq__7899_9455 = G__9467;
chunk__7900_9456 = G__9468;
count__7901_9457 = G__9469;
i__7902_9458 = G__9470;
continue;
}
} else
{var arg__6539__auto___9471 = cljs.core.first.call(null,seq__7899_9465__$1);a__6538__auto__.push(arg__6539__auto___9471);
{
var G__9472 = cljs.core.next.call(null,seq__7899_9465__$1);
var G__9473 = null;
var G__9474 = 0;
var G__9475 = 0;
seq__7899_9455 = G__9472;
chunk__7900_9456 = G__9473;
count__7901_9457 = G__9474;
i__7902_9458 = G__9475;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.head.apply(null,a__6538__auto__);
};
var head = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return head__delegate.call(this,args__6537__auto__);};
head.cljs$lang$maxFixedArity = 0;
head.cljs$lang$applyTo = (function (arglist__9476){
var args__6537__auto__ = cljs.core.seq(arglist__9476);
return head__delegate(args__6537__auto__);
});
head.cljs$core$IFn$_invoke$arity$variadic = head__delegate;
return head;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.header = (function() { 
var header__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__7907_9477 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__7908_9478 = null;var count__7909_9479 = 0;var i__7910_9480 = 0;while(true){
if((i__7910_9480 < count__7909_9479))
{var arg__6539__auto___9481 = cljs.core._nth.call(null,chunk__7908_9478,i__7910_9480);a__6538__auto__.push(arg__6539__auto___9481);
{
var G__9482 = seq__7907_9477;
var G__9483 = chunk__7908_9478;
var G__9484 = count__7909_9479;
var G__9485 = (i__7910_9480 + 1);
seq__7907_9477 = G__9482;
chunk__7908_9478 = G__9483;
count__7909_9479 = G__9484;
i__7910_9480 = G__9485;
continue;
}
} else
{var temp__4092__auto___9486 = cljs.core.seq.call(null,seq__7907_9477);if(temp__4092__auto___9486)
{var seq__7907_9487__$1 = temp__4092__auto___9486;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7907_9487__$1))
{var c__5632__auto___9488 = cljs.core.chunk_first.call(null,seq__7907_9487__$1);{
var G__9489 = cljs.core.chunk_rest.call(null,seq__7907_9487__$1);
var G__9490 = c__5632__auto___9488;
var G__9491 = cljs.core.count.call(null,c__5632__auto___9488);
var G__9492 = 0;
seq__7907_9477 = G__9489;
chunk__7908_9478 = G__9490;
count__7909_9479 = G__9491;
i__7910_9480 = G__9492;
continue;
}
} else
{var arg__6539__auto___9493 = cljs.core.first.call(null,seq__7907_9487__$1);a__6538__auto__.push(arg__6539__auto___9493);
{
var G__9494 = cljs.core.next.call(null,seq__7907_9487__$1);
var G__9495 = null;
var G__9496 = 0;
var G__9497 = 0;
seq__7907_9477 = G__9494;
chunk__7908_9478 = G__9495;
count__7909_9479 = G__9496;
i__7910_9480 = G__9497;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.header.apply(null,a__6538__auto__);
};
var header = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return header__delegate.call(this,args__6537__auto__);};
header.cljs$lang$maxFixedArity = 0;
header.cljs$lang$applyTo = (function (arglist__9498){
var args__6537__auto__ = cljs.core.seq(arglist__9498);
return header__delegate(args__6537__auto__);
});
header.cljs$core$IFn$_invoke$arity$variadic = header__delegate;
return header;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.hr = (function() { 
var hr__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__7915_9499 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__7916_9500 = null;var count__7917_9501 = 0;var i__7918_9502 = 0;while(true){
if((i__7918_9502 < count__7917_9501))
{var arg__6539__auto___9503 = cljs.core._nth.call(null,chunk__7916_9500,i__7918_9502);a__6538__auto__.push(arg__6539__auto___9503);
{
var G__9504 = seq__7915_9499;
var G__9505 = chunk__7916_9500;
var G__9506 = count__7917_9501;
var G__9507 = (i__7918_9502 + 1);
seq__7915_9499 = G__9504;
chunk__7916_9500 = G__9505;
count__7917_9501 = G__9506;
i__7918_9502 = G__9507;
continue;
}
} else
{var temp__4092__auto___9508 = cljs.core.seq.call(null,seq__7915_9499);if(temp__4092__auto___9508)
{var seq__7915_9509__$1 = temp__4092__auto___9508;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7915_9509__$1))
{var c__5632__auto___9510 = cljs.core.chunk_first.call(null,seq__7915_9509__$1);{
var G__9511 = cljs.core.chunk_rest.call(null,seq__7915_9509__$1);
var G__9512 = c__5632__auto___9510;
var G__9513 = cljs.core.count.call(null,c__5632__auto___9510);
var G__9514 = 0;
seq__7915_9499 = G__9511;
chunk__7916_9500 = G__9512;
count__7917_9501 = G__9513;
i__7918_9502 = G__9514;
continue;
}
} else
{var arg__6539__auto___9515 = cljs.core.first.call(null,seq__7915_9509__$1);a__6538__auto__.push(arg__6539__auto___9515);
{
var G__9516 = cljs.core.next.call(null,seq__7915_9509__$1);
var G__9517 = null;
var G__9518 = 0;
var G__9519 = 0;
seq__7915_9499 = G__9516;
chunk__7916_9500 = G__9517;
count__7917_9501 = G__9518;
i__7918_9502 = G__9519;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.hr.apply(null,a__6538__auto__);
};
var hr = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return hr__delegate.call(this,args__6537__auto__);};
hr.cljs$lang$maxFixedArity = 0;
hr.cljs$lang$applyTo = (function (arglist__9520){
var args__6537__auto__ = cljs.core.seq(arglist__9520);
return hr__delegate(args__6537__auto__);
});
hr.cljs$core$IFn$_invoke$arity$variadic = hr__delegate;
return hr;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.html = (function() { 
var html__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__7923_9521 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__7924_9522 = null;var count__7925_9523 = 0;var i__7926_9524 = 0;while(true){
if((i__7926_9524 < count__7925_9523))
{var arg__6539__auto___9525 = cljs.core._nth.call(null,chunk__7924_9522,i__7926_9524);a__6538__auto__.push(arg__6539__auto___9525);
{
var G__9526 = seq__7923_9521;
var G__9527 = chunk__7924_9522;
var G__9528 = count__7925_9523;
var G__9529 = (i__7926_9524 + 1);
seq__7923_9521 = G__9526;
chunk__7924_9522 = G__9527;
count__7925_9523 = G__9528;
i__7926_9524 = G__9529;
continue;
}
} else
{var temp__4092__auto___9530 = cljs.core.seq.call(null,seq__7923_9521);if(temp__4092__auto___9530)
{var seq__7923_9531__$1 = temp__4092__auto___9530;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7923_9531__$1))
{var c__5632__auto___9532 = cljs.core.chunk_first.call(null,seq__7923_9531__$1);{
var G__9533 = cljs.core.chunk_rest.call(null,seq__7923_9531__$1);
var G__9534 = c__5632__auto___9532;
var G__9535 = cljs.core.count.call(null,c__5632__auto___9532);
var G__9536 = 0;
seq__7923_9521 = G__9533;
chunk__7924_9522 = G__9534;
count__7925_9523 = G__9535;
i__7926_9524 = G__9536;
continue;
}
} else
{var arg__6539__auto___9537 = cljs.core.first.call(null,seq__7923_9531__$1);a__6538__auto__.push(arg__6539__auto___9537);
{
var G__9538 = cljs.core.next.call(null,seq__7923_9531__$1);
var G__9539 = null;
var G__9540 = 0;
var G__9541 = 0;
seq__7923_9521 = G__9538;
chunk__7924_9522 = G__9539;
count__7925_9523 = G__9540;
i__7926_9524 = G__9541;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.html.apply(null,a__6538__auto__);
};
var html = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return html__delegate.call(this,args__6537__auto__);};
html.cljs$lang$maxFixedArity = 0;
html.cljs$lang$applyTo = (function (arglist__9542){
var args__6537__auto__ = cljs.core.seq(arglist__9542);
return html__delegate(args__6537__auto__);
});
html.cljs$core$IFn$_invoke$arity$variadic = html__delegate;
return html;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.i = (function() { 
var i__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__7931_9543 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__7932_9544 = null;var count__7933_9545 = 0;var i__7934_9546 = 0;while(true){
if((i__7934_9546 < count__7933_9545))
{var arg__6539__auto___9547 = cljs.core._nth.call(null,chunk__7932_9544,i__7934_9546);a__6538__auto__.push(arg__6539__auto___9547);
{
var G__9548 = seq__7931_9543;
var G__9549 = chunk__7932_9544;
var G__9550 = count__7933_9545;
var G__9551 = (i__7934_9546 + 1);
seq__7931_9543 = G__9548;
chunk__7932_9544 = G__9549;
count__7933_9545 = G__9550;
i__7934_9546 = G__9551;
continue;
}
} else
{var temp__4092__auto___9552 = cljs.core.seq.call(null,seq__7931_9543);if(temp__4092__auto___9552)
{var seq__7931_9553__$1 = temp__4092__auto___9552;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7931_9553__$1))
{var c__5632__auto___9554 = cljs.core.chunk_first.call(null,seq__7931_9553__$1);{
var G__9555 = cljs.core.chunk_rest.call(null,seq__7931_9553__$1);
var G__9556 = c__5632__auto___9554;
var G__9557 = cljs.core.count.call(null,c__5632__auto___9554);
var G__9558 = 0;
seq__7931_9543 = G__9555;
chunk__7932_9544 = G__9556;
count__7933_9545 = G__9557;
i__7934_9546 = G__9558;
continue;
}
} else
{var arg__6539__auto___9559 = cljs.core.first.call(null,seq__7931_9553__$1);a__6538__auto__.push(arg__6539__auto___9559);
{
var G__9560 = cljs.core.next.call(null,seq__7931_9553__$1);
var G__9561 = null;
var G__9562 = 0;
var G__9563 = 0;
seq__7931_9543 = G__9560;
chunk__7932_9544 = G__9561;
count__7933_9545 = G__9562;
i__7934_9546 = G__9563;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.i.apply(null,a__6538__auto__);
};
var i = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return i__delegate.call(this,args__6537__auto__);};
i.cljs$lang$maxFixedArity = 0;
i.cljs$lang$applyTo = (function (arglist__9564){
var args__6537__auto__ = cljs.core.seq(arglist__9564);
return i__delegate(args__6537__auto__);
});
i.cljs$core$IFn$_invoke$arity$variadic = i__delegate;
return i;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.iframe = (function() { 
var iframe__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__7939_9565 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__7940_9566 = null;var count__7941_9567 = 0;var i__7942_9568 = 0;while(true){
if((i__7942_9568 < count__7941_9567))
{var arg__6539__auto___9569 = cljs.core._nth.call(null,chunk__7940_9566,i__7942_9568);a__6538__auto__.push(arg__6539__auto___9569);
{
var G__9570 = seq__7939_9565;
var G__9571 = chunk__7940_9566;
var G__9572 = count__7941_9567;
var G__9573 = (i__7942_9568 + 1);
seq__7939_9565 = G__9570;
chunk__7940_9566 = G__9571;
count__7941_9567 = G__9572;
i__7942_9568 = G__9573;
continue;
}
} else
{var temp__4092__auto___9574 = cljs.core.seq.call(null,seq__7939_9565);if(temp__4092__auto___9574)
{var seq__7939_9575__$1 = temp__4092__auto___9574;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7939_9575__$1))
{var c__5632__auto___9576 = cljs.core.chunk_first.call(null,seq__7939_9575__$1);{
var G__9577 = cljs.core.chunk_rest.call(null,seq__7939_9575__$1);
var G__9578 = c__5632__auto___9576;
var G__9579 = cljs.core.count.call(null,c__5632__auto___9576);
var G__9580 = 0;
seq__7939_9565 = G__9577;
chunk__7940_9566 = G__9578;
count__7941_9567 = G__9579;
i__7942_9568 = G__9580;
continue;
}
} else
{var arg__6539__auto___9581 = cljs.core.first.call(null,seq__7939_9575__$1);a__6538__auto__.push(arg__6539__auto___9581);
{
var G__9582 = cljs.core.next.call(null,seq__7939_9575__$1);
var G__9583 = null;
var G__9584 = 0;
var G__9585 = 0;
seq__7939_9565 = G__9582;
chunk__7940_9566 = G__9583;
count__7941_9567 = G__9584;
i__7942_9568 = G__9585;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.iframe.apply(null,a__6538__auto__);
};
var iframe = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return iframe__delegate.call(this,args__6537__auto__);};
iframe.cljs$lang$maxFixedArity = 0;
iframe.cljs$lang$applyTo = (function (arglist__9586){
var args__6537__auto__ = cljs.core.seq(arglist__9586);
return iframe__delegate(args__6537__auto__);
});
iframe.cljs$core$IFn$_invoke$arity$variadic = iframe__delegate;
return iframe;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.img = (function() { 
var img__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__7947_9587 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__7948_9588 = null;var count__7949_9589 = 0;var i__7950_9590 = 0;while(true){
if((i__7950_9590 < count__7949_9589))
{var arg__6539__auto___9591 = cljs.core._nth.call(null,chunk__7948_9588,i__7950_9590);a__6538__auto__.push(arg__6539__auto___9591);
{
var G__9592 = seq__7947_9587;
var G__9593 = chunk__7948_9588;
var G__9594 = count__7949_9589;
var G__9595 = (i__7950_9590 + 1);
seq__7947_9587 = G__9592;
chunk__7948_9588 = G__9593;
count__7949_9589 = G__9594;
i__7950_9590 = G__9595;
continue;
}
} else
{var temp__4092__auto___9596 = cljs.core.seq.call(null,seq__7947_9587);if(temp__4092__auto___9596)
{var seq__7947_9597__$1 = temp__4092__auto___9596;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7947_9597__$1))
{var c__5632__auto___9598 = cljs.core.chunk_first.call(null,seq__7947_9597__$1);{
var G__9599 = cljs.core.chunk_rest.call(null,seq__7947_9597__$1);
var G__9600 = c__5632__auto___9598;
var G__9601 = cljs.core.count.call(null,c__5632__auto___9598);
var G__9602 = 0;
seq__7947_9587 = G__9599;
chunk__7948_9588 = G__9600;
count__7949_9589 = G__9601;
i__7950_9590 = G__9602;
continue;
}
} else
{var arg__6539__auto___9603 = cljs.core.first.call(null,seq__7947_9597__$1);a__6538__auto__.push(arg__6539__auto___9603);
{
var G__9604 = cljs.core.next.call(null,seq__7947_9597__$1);
var G__9605 = null;
var G__9606 = 0;
var G__9607 = 0;
seq__7947_9587 = G__9604;
chunk__7948_9588 = G__9605;
count__7949_9589 = G__9606;
i__7950_9590 = G__9607;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.img.apply(null,a__6538__auto__);
};
var img = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return img__delegate.call(this,args__6537__auto__);};
img.cljs$lang$maxFixedArity = 0;
img.cljs$lang$applyTo = (function (arglist__9608){
var args__6537__auto__ = cljs.core.seq(arglist__9608);
return img__delegate(args__6537__auto__);
});
img.cljs$core$IFn$_invoke$arity$variadic = img__delegate;
return img;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.input = (function() { 
var input__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__7955_9609 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__7956_9610 = null;var count__7957_9611 = 0;var i__7958_9612 = 0;while(true){
if((i__7958_9612 < count__7957_9611))
{var arg__6539__auto___9613 = cljs.core._nth.call(null,chunk__7956_9610,i__7958_9612);a__6538__auto__.push(arg__6539__auto___9613);
{
var G__9614 = seq__7955_9609;
var G__9615 = chunk__7956_9610;
var G__9616 = count__7957_9611;
var G__9617 = (i__7958_9612 + 1);
seq__7955_9609 = G__9614;
chunk__7956_9610 = G__9615;
count__7957_9611 = G__9616;
i__7958_9612 = G__9617;
continue;
}
} else
{var temp__4092__auto___9618 = cljs.core.seq.call(null,seq__7955_9609);if(temp__4092__auto___9618)
{var seq__7955_9619__$1 = temp__4092__auto___9618;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7955_9619__$1))
{var c__5632__auto___9620 = cljs.core.chunk_first.call(null,seq__7955_9619__$1);{
var G__9621 = cljs.core.chunk_rest.call(null,seq__7955_9619__$1);
var G__9622 = c__5632__auto___9620;
var G__9623 = cljs.core.count.call(null,c__5632__auto___9620);
var G__9624 = 0;
seq__7955_9609 = G__9621;
chunk__7956_9610 = G__9622;
count__7957_9611 = G__9623;
i__7958_9612 = G__9624;
continue;
}
} else
{var arg__6539__auto___9625 = cljs.core.first.call(null,seq__7955_9619__$1);a__6538__auto__.push(arg__6539__auto___9625);
{
var G__9626 = cljs.core.next.call(null,seq__7955_9619__$1);
var G__9627 = null;
var G__9628 = 0;
var G__9629 = 0;
seq__7955_9609 = G__9626;
chunk__7956_9610 = G__9627;
count__7957_9611 = G__9628;
i__7958_9612 = G__9629;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.input.apply(null,a__6538__auto__);
};
var input = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return input__delegate.call(this,args__6537__auto__);};
input.cljs$lang$maxFixedArity = 0;
input.cljs$lang$applyTo = (function (arglist__9630){
var args__6537__auto__ = cljs.core.seq(arglist__9630);
return input__delegate(args__6537__auto__);
});
input.cljs$core$IFn$_invoke$arity$variadic = input__delegate;
return input;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.ins = (function() { 
var ins__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__7963_9631 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__7964_9632 = null;var count__7965_9633 = 0;var i__7966_9634 = 0;while(true){
if((i__7966_9634 < count__7965_9633))
{var arg__6539__auto___9635 = cljs.core._nth.call(null,chunk__7964_9632,i__7966_9634);a__6538__auto__.push(arg__6539__auto___9635);
{
var G__9636 = seq__7963_9631;
var G__9637 = chunk__7964_9632;
var G__9638 = count__7965_9633;
var G__9639 = (i__7966_9634 + 1);
seq__7963_9631 = G__9636;
chunk__7964_9632 = G__9637;
count__7965_9633 = G__9638;
i__7966_9634 = G__9639;
continue;
}
} else
{var temp__4092__auto___9640 = cljs.core.seq.call(null,seq__7963_9631);if(temp__4092__auto___9640)
{var seq__7963_9641__$1 = temp__4092__auto___9640;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7963_9641__$1))
{var c__5632__auto___9642 = cljs.core.chunk_first.call(null,seq__7963_9641__$1);{
var G__9643 = cljs.core.chunk_rest.call(null,seq__7963_9641__$1);
var G__9644 = c__5632__auto___9642;
var G__9645 = cljs.core.count.call(null,c__5632__auto___9642);
var G__9646 = 0;
seq__7963_9631 = G__9643;
chunk__7964_9632 = G__9644;
count__7965_9633 = G__9645;
i__7966_9634 = G__9646;
continue;
}
} else
{var arg__6539__auto___9647 = cljs.core.first.call(null,seq__7963_9641__$1);a__6538__auto__.push(arg__6539__auto___9647);
{
var G__9648 = cljs.core.next.call(null,seq__7963_9641__$1);
var G__9649 = null;
var G__9650 = 0;
var G__9651 = 0;
seq__7963_9631 = G__9648;
chunk__7964_9632 = G__9649;
count__7965_9633 = G__9650;
i__7966_9634 = G__9651;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.ins.apply(null,a__6538__auto__);
};
var ins = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ins__delegate.call(this,args__6537__auto__);};
ins.cljs$lang$maxFixedArity = 0;
ins.cljs$lang$applyTo = (function (arglist__9652){
var args__6537__auto__ = cljs.core.seq(arglist__9652);
return ins__delegate(args__6537__auto__);
});
ins.cljs$core$IFn$_invoke$arity$variadic = ins__delegate;
return ins;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.kbd = (function() { 
var kbd__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__7971_9653 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__7972_9654 = null;var count__7973_9655 = 0;var i__7974_9656 = 0;while(true){
if((i__7974_9656 < count__7973_9655))
{var arg__6539__auto___9657 = cljs.core._nth.call(null,chunk__7972_9654,i__7974_9656);a__6538__auto__.push(arg__6539__auto___9657);
{
var G__9658 = seq__7971_9653;
var G__9659 = chunk__7972_9654;
var G__9660 = count__7973_9655;
var G__9661 = (i__7974_9656 + 1);
seq__7971_9653 = G__9658;
chunk__7972_9654 = G__9659;
count__7973_9655 = G__9660;
i__7974_9656 = G__9661;
continue;
}
} else
{var temp__4092__auto___9662 = cljs.core.seq.call(null,seq__7971_9653);if(temp__4092__auto___9662)
{var seq__7971_9663__$1 = temp__4092__auto___9662;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7971_9663__$1))
{var c__5632__auto___9664 = cljs.core.chunk_first.call(null,seq__7971_9663__$1);{
var G__9665 = cljs.core.chunk_rest.call(null,seq__7971_9663__$1);
var G__9666 = c__5632__auto___9664;
var G__9667 = cljs.core.count.call(null,c__5632__auto___9664);
var G__9668 = 0;
seq__7971_9653 = G__9665;
chunk__7972_9654 = G__9666;
count__7973_9655 = G__9667;
i__7974_9656 = G__9668;
continue;
}
} else
{var arg__6539__auto___9669 = cljs.core.first.call(null,seq__7971_9663__$1);a__6538__auto__.push(arg__6539__auto___9669);
{
var G__9670 = cljs.core.next.call(null,seq__7971_9663__$1);
var G__9671 = null;
var G__9672 = 0;
var G__9673 = 0;
seq__7971_9653 = G__9670;
chunk__7972_9654 = G__9671;
count__7973_9655 = G__9672;
i__7974_9656 = G__9673;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.kbd.apply(null,a__6538__auto__);
};
var kbd = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return kbd__delegate.call(this,args__6537__auto__);};
kbd.cljs$lang$maxFixedArity = 0;
kbd.cljs$lang$applyTo = (function (arglist__9674){
var args__6537__auto__ = cljs.core.seq(arglist__9674);
return kbd__delegate(args__6537__auto__);
});
kbd.cljs$core$IFn$_invoke$arity$variadic = kbd__delegate;
return kbd;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.keygen = (function() { 
var keygen__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__7979_9675 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__7980_9676 = null;var count__7981_9677 = 0;var i__7982_9678 = 0;while(true){
if((i__7982_9678 < count__7981_9677))
{var arg__6539__auto___9679 = cljs.core._nth.call(null,chunk__7980_9676,i__7982_9678);a__6538__auto__.push(arg__6539__auto___9679);
{
var G__9680 = seq__7979_9675;
var G__9681 = chunk__7980_9676;
var G__9682 = count__7981_9677;
var G__9683 = (i__7982_9678 + 1);
seq__7979_9675 = G__9680;
chunk__7980_9676 = G__9681;
count__7981_9677 = G__9682;
i__7982_9678 = G__9683;
continue;
}
} else
{var temp__4092__auto___9684 = cljs.core.seq.call(null,seq__7979_9675);if(temp__4092__auto___9684)
{var seq__7979_9685__$1 = temp__4092__auto___9684;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7979_9685__$1))
{var c__5632__auto___9686 = cljs.core.chunk_first.call(null,seq__7979_9685__$1);{
var G__9687 = cljs.core.chunk_rest.call(null,seq__7979_9685__$1);
var G__9688 = c__5632__auto___9686;
var G__9689 = cljs.core.count.call(null,c__5632__auto___9686);
var G__9690 = 0;
seq__7979_9675 = G__9687;
chunk__7980_9676 = G__9688;
count__7981_9677 = G__9689;
i__7982_9678 = G__9690;
continue;
}
} else
{var arg__6539__auto___9691 = cljs.core.first.call(null,seq__7979_9685__$1);a__6538__auto__.push(arg__6539__auto___9691);
{
var G__9692 = cljs.core.next.call(null,seq__7979_9685__$1);
var G__9693 = null;
var G__9694 = 0;
var G__9695 = 0;
seq__7979_9675 = G__9692;
chunk__7980_9676 = G__9693;
count__7981_9677 = G__9694;
i__7982_9678 = G__9695;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.keygen.apply(null,a__6538__auto__);
};
var keygen = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return keygen__delegate.call(this,args__6537__auto__);};
keygen.cljs$lang$maxFixedArity = 0;
keygen.cljs$lang$applyTo = (function (arglist__9696){
var args__6537__auto__ = cljs.core.seq(arglist__9696);
return keygen__delegate(args__6537__auto__);
});
keygen.cljs$core$IFn$_invoke$arity$variadic = keygen__delegate;
return keygen;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.label = (function() { 
var label__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__7987_9697 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__7988_9698 = null;var count__7989_9699 = 0;var i__7990_9700 = 0;while(true){
if((i__7990_9700 < count__7989_9699))
{var arg__6539__auto___9701 = cljs.core._nth.call(null,chunk__7988_9698,i__7990_9700);a__6538__auto__.push(arg__6539__auto___9701);
{
var G__9702 = seq__7987_9697;
var G__9703 = chunk__7988_9698;
var G__9704 = count__7989_9699;
var G__9705 = (i__7990_9700 + 1);
seq__7987_9697 = G__9702;
chunk__7988_9698 = G__9703;
count__7989_9699 = G__9704;
i__7990_9700 = G__9705;
continue;
}
} else
{var temp__4092__auto___9706 = cljs.core.seq.call(null,seq__7987_9697);if(temp__4092__auto___9706)
{var seq__7987_9707__$1 = temp__4092__auto___9706;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7987_9707__$1))
{var c__5632__auto___9708 = cljs.core.chunk_first.call(null,seq__7987_9707__$1);{
var G__9709 = cljs.core.chunk_rest.call(null,seq__7987_9707__$1);
var G__9710 = c__5632__auto___9708;
var G__9711 = cljs.core.count.call(null,c__5632__auto___9708);
var G__9712 = 0;
seq__7987_9697 = G__9709;
chunk__7988_9698 = G__9710;
count__7989_9699 = G__9711;
i__7990_9700 = G__9712;
continue;
}
} else
{var arg__6539__auto___9713 = cljs.core.first.call(null,seq__7987_9707__$1);a__6538__auto__.push(arg__6539__auto___9713);
{
var G__9714 = cljs.core.next.call(null,seq__7987_9707__$1);
var G__9715 = null;
var G__9716 = 0;
var G__9717 = 0;
seq__7987_9697 = G__9714;
chunk__7988_9698 = G__9715;
count__7989_9699 = G__9716;
i__7990_9700 = G__9717;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.label.apply(null,a__6538__auto__);
};
var label = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return label__delegate.call(this,args__6537__auto__);};
label.cljs$lang$maxFixedArity = 0;
label.cljs$lang$applyTo = (function (arglist__9718){
var args__6537__auto__ = cljs.core.seq(arglist__9718);
return label__delegate(args__6537__auto__);
});
label.cljs$core$IFn$_invoke$arity$variadic = label__delegate;
return label;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.legend = (function() { 
var legend__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__7995_9719 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__7996_9720 = null;var count__7997_9721 = 0;var i__7998_9722 = 0;while(true){
if((i__7998_9722 < count__7997_9721))
{var arg__6539__auto___9723 = cljs.core._nth.call(null,chunk__7996_9720,i__7998_9722);a__6538__auto__.push(arg__6539__auto___9723);
{
var G__9724 = seq__7995_9719;
var G__9725 = chunk__7996_9720;
var G__9726 = count__7997_9721;
var G__9727 = (i__7998_9722 + 1);
seq__7995_9719 = G__9724;
chunk__7996_9720 = G__9725;
count__7997_9721 = G__9726;
i__7998_9722 = G__9727;
continue;
}
} else
{var temp__4092__auto___9728 = cljs.core.seq.call(null,seq__7995_9719);if(temp__4092__auto___9728)
{var seq__7995_9729__$1 = temp__4092__auto___9728;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7995_9729__$1))
{var c__5632__auto___9730 = cljs.core.chunk_first.call(null,seq__7995_9729__$1);{
var G__9731 = cljs.core.chunk_rest.call(null,seq__7995_9729__$1);
var G__9732 = c__5632__auto___9730;
var G__9733 = cljs.core.count.call(null,c__5632__auto___9730);
var G__9734 = 0;
seq__7995_9719 = G__9731;
chunk__7996_9720 = G__9732;
count__7997_9721 = G__9733;
i__7998_9722 = G__9734;
continue;
}
} else
{var arg__6539__auto___9735 = cljs.core.first.call(null,seq__7995_9729__$1);a__6538__auto__.push(arg__6539__auto___9735);
{
var G__9736 = cljs.core.next.call(null,seq__7995_9729__$1);
var G__9737 = null;
var G__9738 = 0;
var G__9739 = 0;
seq__7995_9719 = G__9736;
chunk__7996_9720 = G__9737;
count__7997_9721 = G__9738;
i__7998_9722 = G__9739;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.legend.apply(null,a__6538__auto__);
};
var legend = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return legend__delegate.call(this,args__6537__auto__);};
legend.cljs$lang$maxFixedArity = 0;
legend.cljs$lang$applyTo = (function (arglist__9740){
var args__6537__auto__ = cljs.core.seq(arglist__9740);
return legend__delegate(args__6537__auto__);
});
legend.cljs$core$IFn$_invoke$arity$variadic = legend__delegate;
return legend;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.li = (function() { 
var li__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__8003_9741 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__8004_9742 = null;var count__8005_9743 = 0;var i__8006_9744 = 0;while(true){
if((i__8006_9744 < count__8005_9743))
{var arg__6539__auto___9745 = cljs.core._nth.call(null,chunk__8004_9742,i__8006_9744);a__6538__auto__.push(arg__6539__auto___9745);
{
var G__9746 = seq__8003_9741;
var G__9747 = chunk__8004_9742;
var G__9748 = count__8005_9743;
var G__9749 = (i__8006_9744 + 1);
seq__8003_9741 = G__9746;
chunk__8004_9742 = G__9747;
count__8005_9743 = G__9748;
i__8006_9744 = G__9749;
continue;
}
} else
{var temp__4092__auto___9750 = cljs.core.seq.call(null,seq__8003_9741);if(temp__4092__auto___9750)
{var seq__8003_9751__$1 = temp__4092__auto___9750;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8003_9751__$1))
{var c__5632__auto___9752 = cljs.core.chunk_first.call(null,seq__8003_9751__$1);{
var G__9753 = cljs.core.chunk_rest.call(null,seq__8003_9751__$1);
var G__9754 = c__5632__auto___9752;
var G__9755 = cljs.core.count.call(null,c__5632__auto___9752);
var G__9756 = 0;
seq__8003_9741 = G__9753;
chunk__8004_9742 = G__9754;
count__8005_9743 = G__9755;
i__8006_9744 = G__9756;
continue;
}
} else
{var arg__6539__auto___9757 = cljs.core.first.call(null,seq__8003_9751__$1);a__6538__auto__.push(arg__6539__auto___9757);
{
var G__9758 = cljs.core.next.call(null,seq__8003_9751__$1);
var G__9759 = null;
var G__9760 = 0;
var G__9761 = 0;
seq__8003_9741 = G__9758;
chunk__8004_9742 = G__9759;
count__8005_9743 = G__9760;
i__8006_9744 = G__9761;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.li.apply(null,a__6538__auto__);
};
var li = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return li__delegate.call(this,args__6537__auto__);};
li.cljs$lang$maxFixedArity = 0;
li.cljs$lang$applyTo = (function (arglist__9762){
var args__6537__auto__ = cljs.core.seq(arglist__9762);
return li__delegate(args__6537__auto__);
});
li.cljs$core$IFn$_invoke$arity$variadic = li__delegate;
return li;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.link = (function() { 
var link__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__8011_9763 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__8012_9764 = null;var count__8013_9765 = 0;var i__8014_9766 = 0;while(true){
if((i__8014_9766 < count__8013_9765))
{var arg__6539__auto___9767 = cljs.core._nth.call(null,chunk__8012_9764,i__8014_9766);a__6538__auto__.push(arg__6539__auto___9767);
{
var G__9768 = seq__8011_9763;
var G__9769 = chunk__8012_9764;
var G__9770 = count__8013_9765;
var G__9771 = (i__8014_9766 + 1);
seq__8011_9763 = G__9768;
chunk__8012_9764 = G__9769;
count__8013_9765 = G__9770;
i__8014_9766 = G__9771;
continue;
}
} else
{var temp__4092__auto___9772 = cljs.core.seq.call(null,seq__8011_9763);if(temp__4092__auto___9772)
{var seq__8011_9773__$1 = temp__4092__auto___9772;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8011_9773__$1))
{var c__5632__auto___9774 = cljs.core.chunk_first.call(null,seq__8011_9773__$1);{
var G__9775 = cljs.core.chunk_rest.call(null,seq__8011_9773__$1);
var G__9776 = c__5632__auto___9774;
var G__9777 = cljs.core.count.call(null,c__5632__auto___9774);
var G__9778 = 0;
seq__8011_9763 = G__9775;
chunk__8012_9764 = G__9776;
count__8013_9765 = G__9777;
i__8014_9766 = G__9778;
continue;
}
} else
{var arg__6539__auto___9779 = cljs.core.first.call(null,seq__8011_9773__$1);a__6538__auto__.push(arg__6539__auto___9779);
{
var G__9780 = cljs.core.next.call(null,seq__8011_9773__$1);
var G__9781 = null;
var G__9782 = 0;
var G__9783 = 0;
seq__8011_9763 = G__9780;
chunk__8012_9764 = G__9781;
count__8013_9765 = G__9782;
i__8014_9766 = G__9783;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.link.apply(null,a__6538__auto__);
};
var link = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return link__delegate.call(this,args__6537__auto__);};
link.cljs$lang$maxFixedArity = 0;
link.cljs$lang$applyTo = (function (arglist__9784){
var args__6537__auto__ = cljs.core.seq(arglist__9784);
return link__delegate(args__6537__auto__);
});
link.cljs$core$IFn$_invoke$arity$variadic = link__delegate;
return link;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.main = (function() { 
var main__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__8019_9785 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__8020_9786 = null;var count__8021_9787 = 0;var i__8022_9788 = 0;while(true){
if((i__8022_9788 < count__8021_9787))
{var arg__6539__auto___9789 = cljs.core._nth.call(null,chunk__8020_9786,i__8022_9788);a__6538__auto__.push(arg__6539__auto___9789);
{
var G__9790 = seq__8019_9785;
var G__9791 = chunk__8020_9786;
var G__9792 = count__8021_9787;
var G__9793 = (i__8022_9788 + 1);
seq__8019_9785 = G__9790;
chunk__8020_9786 = G__9791;
count__8021_9787 = G__9792;
i__8022_9788 = G__9793;
continue;
}
} else
{var temp__4092__auto___9794 = cljs.core.seq.call(null,seq__8019_9785);if(temp__4092__auto___9794)
{var seq__8019_9795__$1 = temp__4092__auto___9794;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8019_9795__$1))
{var c__5632__auto___9796 = cljs.core.chunk_first.call(null,seq__8019_9795__$1);{
var G__9797 = cljs.core.chunk_rest.call(null,seq__8019_9795__$1);
var G__9798 = c__5632__auto___9796;
var G__9799 = cljs.core.count.call(null,c__5632__auto___9796);
var G__9800 = 0;
seq__8019_9785 = G__9797;
chunk__8020_9786 = G__9798;
count__8021_9787 = G__9799;
i__8022_9788 = G__9800;
continue;
}
} else
{var arg__6539__auto___9801 = cljs.core.first.call(null,seq__8019_9795__$1);a__6538__auto__.push(arg__6539__auto___9801);
{
var G__9802 = cljs.core.next.call(null,seq__8019_9795__$1);
var G__9803 = null;
var G__9804 = 0;
var G__9805 = 0;
seq__8019_9785 = G__9802;
chunk__8020_9786 = G__9803;
count__8021_9787 = G__9804;
i__8022_9788 = G__9805;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.main.apply(null,a__6538__auto__);
};
var main = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return main__delegate.call(this,args__6537__auto__);};
main.cljs$lang$maxFixedArity = 0;
main.cljs$lang$applyTo = (function (arglist__9806){
var args__6537__auto__ = cljs.core.seq(arglist__9806);
return main__delegate(args__6537__auto__);
});
main.cljs$core$IFn$_invoke$arity$variadic = main__delegate;
return main;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.map = (function() { 
var map__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__8027_9807 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__8028_9808 = null;var count__8029_9809 = 0;var i__8030_9810 = 0;while(true){
if((i__8030_9810 < count__8029_9809))
{var arg__6539__auto___9811 = cljs.core._nth.call(null,chunk__8028_9808,i__8030_9810);a__6538__auto__.push(arg__6539__auto___9811);
{
var G__9812 = seq__8027_9807;
var G__9813 = chunk__8028_9808;
var G__9814 = count__8029_9809;
var G__9815 = (i__8030_9810 + 1);
seq__8027_9807 = G__9812;
chunk__8028_9808 = G__9813;
count__8029_9809 = G__9814;
i__8030_9810 = G__9815;
continue;
}
} else
{var temp__4092__auto___9816 = cljs.core.seq.call(null,seq__8027_9807);if(temp__4092__auto___9816)
{var seq__8027_9817__$1 = temp__4092__auto___9816;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8027_9817__$1))
{var c__5632__auto___9818 = cljs.core.chunk_first.call(null,seq__8027_9817__$1);{
var G__9819 = cljs.core.chunk_rest.call(null,seq__8027_9817__$1);
var G__9820 = c__5632__auto___9818;
var G__9821 = cljs.core.count.call(null,c__5632__auto___9818);
var G__9822 = 0;
seq__8027_9807 = G__9819;
chunk__8028_9808 = G__9820;
count__8029_9809 = G__9821;
i__8030_9810 = G__9822;
continue;
}
} else
{var arg__6539__auto___9823 = cljs.core.first.call(null,seq__8027_9817__$1);a__6538__auto__.push(arg__6539__auto___9823);
{
var G__9824 = cljs.core.next.call(null,seq__8027_9817__$1);
var G__9825 = null;
var G__9826 = 0;
var G__9827 = 0;
seq__8027_9807 = G__9824;
chunk__8028_9808 = G__9825;
count__8029_9809 = G__9826;
i__8030_9810 = G__9827;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.map.apply(null,a__6538__auto__);
};
var map = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return map__delegate.call(this,args__6537__auto__);};
map.cljs$lang$maxFixedArity = 0;
map.cljs$lang$applyTo = (function (arglist__9828){
var args__6537__auto__ = cljs.core.seq(arglist__9828);
return map__delegate(args__6537__auto__);
});
map.cljs$core$IFn$_invoke$arity$variadic = map__delegate;
return map;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.mark = (function() { 
var mark__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__8035_9829 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__8036_9830 = null;var count__8037_9831 = 0;var i__8038_9832 = 0;while(true){
if((i__8038_9832 < count__8037_9831))
{var arg__6539__auto___9833 = cljs.core._nth.call(null,chunk__8036_9830,i__8038_9832);a__6538__auto__.push(arg__6539__auto___9833);
{
var G__9834 = seq__8035_9829;
var G__9835 = chunk__8036_9830;
var G__9836 = count__8037_9831;
var G__9837 = (i__8038_9832 + 1);
seq__8035_9829 = G__9834;
chunk__8036_9830 = G__9835;
count__8037_9831 = G__9836;
i__8038_9832 = G__9837;
continue;
}
} else
{var temp__4092__auto___9838 = cljs.core.seq.call(null,seq__8035_9829);if(temp__4092__auto___9838)
{var seq__8035_9839__$1 = temp__4092__auto___9838;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8035_9839__$1))
{var c__5632__auto___9840 = cljs.core.chunk_first.call(null,seq__8035_9839__$1);{
var G__9841 = cljs.core.chunk_rest.call(null,seq__8035_9839__$1);
var G__9842 = c__5632__auto___9840;
var G__9843 = cljs.core.count.call(null,c__5632__auto___9840);
var G__9844 = 0;
seq__8035_9829 = G__9841;
chunk__8036_9830 = G__9842;
count__8037_9831 = G__9843;
i__8038_9832 = G__9844;
continue;
}
} else
{var arg__6539__auto___9845 = cljs.core.first.call(null,seq__8035_9839__$1);a__6538__auto__.push(arg__6539__auto___9845);
{
var G__9846 = cljs.core.next.call(null,seq__8035_9839__$1);
var G__9847 = null;
var G__9848 = 0;
var G__9849 = 0;
seq__8035_9829 = G__9846;
chunk__8036_9830 = G__9847;
count__8037_9831 = G__9848;
i__8038_9832 = G__9849;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.mark.apply(null,a__6538__auto__);
};
var mark = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return mark__delegate.call(this,args__6537__auto__);};
mark.cljs$lang$maxFixedArity = 0;
mark.cljs$lang$applyTo = (function (arglist__9850){
var args__6537__auto__ = cljs.core.seq(arglist__9850);
return mark__delegate(args__6537__auto__);
});
mark.cljs$core$IFn$_invoke$arity$variadic = mark__delegate;
return mark;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.menu = (function() { 
var menu__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__8043_9851 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__8044_9852 = null;var count__8045_9853 = 0;var i__8046_9854 = 0;while(true){
if((i__8046_9854 < count__8045_9853))
{var arg__6539__auto___9855 = cljs.core._nth.call(null,chunk__8044_9852,i__8046_9854);a__6538__auto__.push(arg__6539__auto___9855);
{
var G__9856 = seq__8043_9851;
var G__9857 = chunk__8044_9852;
var G__9858 = count__8045_9853;
var G__9859 = (i__8046_9854 + 1);
seq__8043_9851 = G__9856;
chunk__8044_9852 = G__9857;
count__8045_9853 = G__9858;
i__8046_9854 = G__9859;
continue;
}
} else
{var temp__4092__auto___9860 = cljs.core.seq.call(null,seq__8043_9851);if(temp__4092__auto___9860)
{var seq__8043_9861__$1 = temp__4092__auto___9860;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8043_9861__$1))
{var c__5632__auto___9862 = cljs.core.chunk_first.call(null,seq__8043_9861__$1);{
var G__9863 = cljs.core.chunk_rest.call(null,seq__8043_9861__$1);
var G__9864 = c__5632__auto___9862;
var G__9865 = cljs.core.count.call(null,c__5632__auto___9862);
var G__9866 = 0;
seq__8043_9851 = G__9863;
chunk__8044_9852 = G__9864;
count__8045_9853 = G__9865;
i__8046_9854 = G__9866;
continue;
}
} else
{var arg__6539__auto___9867 = cljs.core.first.call(null,seq__8043_9861__$1);a__6538__auto__.push(arg__6539__auto___9867);
{
var G__9868 = cljs.core.next.call(null,seq__8043_9861__$1);
var G__9869 = null;
var G__9870 = 0;
var G__9871 = 0;
seq__8043_9851 = G__9868;
chunk__8044_9852 = G__9869;
count__8045_9853 = G__9870;
i__8046_9854 = G__9871;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.menu.apply(null,a__6538__auto__);
};
var menu = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return menu__delegate.call(this,args__6537__auto__);};
menu.cljs$lang$maxFixedArity = 0;
menu.cljs$lang$applyTo = (function (arglist__9872){
var args__6537__auto__ = cljs.core.seq(arglist__9872);
return menu__delegate(args__6537__auto__);
});
menu.cljs$core$IFn$_invoke$arity$variadic = menu__delegate;
return menu;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.menuitem = (function() { 
var menuitem__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__8051_9873 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__8052_9874 = null;var count__8053_9875 = 0;var i__8054_9876 = 0;while(true){
if((i__8054_9876 < count__8053_9875))
{var arg__6539__auto___9877 = cljs.core._nth.call(null,chunk__8052_9874,i__8054_9876);a__6538__auto__.push(arg__6539__auto___9877);
{
var G__9878 = seq__8051_9873;
var G__9879 = chunk__8052_9874;
var G__9880 = count__8053_9875;
var G__9881 = (i__8054_9876 + 1);
seq__8051_9873 = G__9878;
chunk__8052_9874 = G__9879;
count__8053_9875 = G__9880;
i__8054_9876 = G__9881;
continue;
}
} else
{var temp__4092__auto___9882 = cljs.core.seq.call(null,seq__8051_9873);if(temp__4092__auto___9882)
{var seq__8051_9883__$1 = temp__4092__auto___9882;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8051_9883__$1))
{var c__5632__auto___9884 = cljs.core.chunk_first.call(null,seq__8051_9883__$1);{
var G__9885 = cljs.core.chunk_rest.call(null,seq__8051_9883__$1);
var G__9886 = c__5632__auto___9884;
var G__9887 = cljs.core.count.call(null,c__5632__auto___9884);
var G__9888 = 0;
seq__8051_9873 = G__9885;
chunk__8052_9874 = G__9886;
count__8053_9875 = G__9887;
i__8054_9876 = G__9888;
continue;
}
} else
{var arg__6539__auto___9889 = cljs.core.first.call(null,seq__8051_9883__$1);a__6538__auto__.push(arg__6539__auto___9889);
{
var G__9890 = cljs.core.next.call(null,seq__8051_9883__$1);
var G__9891 = null;
var G__9892 = 0;
var G__9893 = 0;
seq__8051_9873 = G__9890;
chunk__8052_9874 = G__9891;
count__8053_9875 = G__9892;
i__8054_9876 = G__9893;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.menuitem.apply(null,a__6538__auto__);
};
var menuitem = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return menuitem__delegate.call(this,args__6537__auto__);};
menuitem.cljs$lang$maxFixedArity = 0;
menuitem.cljs$lang$applyTo = (function (arglist__9894){
var args__6537__auto__ = cljs.core.seq(arglist__9894);
return menuitem__delegate(args__6537__auto__);
});
menuitem.cljs$core$IFn$_invoke$arity$variadic = menuitem__delegate;
return menuitem;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.meta = (function() { 
var meta__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__8059_9895 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__8060_9896 = null;var count__8061_9897 = 0;var i__8062_9898 = 0;while(true){
if((i__8062_9898 < count__8061_9897))
{var arg__6539__auto___9899 = cljs.core._nth.call(null,chunk__8060_9896,i__8062_9898);a__6538__auto__.push(arg__6539__auto___9899);
{
var G__9900 = seq__8059_9895;
var G__9901 = chunk__8060_9896;
var G__9902 = count__8061_9897;
var G__9903 = (i__8062_9898 + 1);
seq__8059_9895 = G__9900;
chunk__8060_9896 = G__9901;
count__8061_9897 = G__9902;
i__8062_9898 = G__9903;
continue;
}
} else
{var temp__4092__auto___9904 = cljs.core.seq.call(null,seq__8059_9895);if(temp__4092__auto___9904)
{var seq__8059_9905__$1 = temp__4092__auto___9904;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8059_9905__$1))
{var c__5632__auto___9906 = cljs.core.chunk_first.call(null,seq__8059_9905__$1);{
var G__9907 = cljs.core.chunk_rest.call(null,seq__8059_9905__$1);
var G__9908 = c__5632__auto___9906;
var G__9909 = cljs.core.count.call(null,c__5632__auto___9906);
var G__9910 = 0;
seq__8059_9895 = G__9907;
chunk__8060_9896 = G__9908;
count__8061_9897 = G__9909;
i__8062_9898 = G__9910;
continue;
}
} else
{var arg__6539__auto___9911 = cljs.core.first.call(null,seq__8059_9905__$1);a__6538__auto__.push(arg__6539__auto___9911);
{
var G__9912 = cljs.core.next.call(null,seq__8059_9905__$1);
var G__9913 = null;
var G__9914 = 0;
var G__9915 = 0;
seq__8059_9895 = G__9912;
chunk__8060_9896 = G__9913;
count__8061_9897 = G__9914;
i__8062_9898 = G__9915;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.meta.apply(null,a__6538__auto__);
};
var meta = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return meta__delegate.call(this,args__6537__auto__);};
meta.cljs$lang$maxFixedArity = 0;
meta.cljs$lang$applyTo = (function (arglist__9916){
var args__6537__auto__ = cljs.core.seq(arglist__9916);
return meta__delegate(args__6537__auto__);
});
meta.cljs$core$IFn$_invoke$arity$variadic = meta__delegate;
return meta;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.meter = (function() { 
var meter__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__8067_9917 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__8068_9918 = null;var count__8069_9919 = 0;var i__8070_9920 = 0;while(true){
if((i__8070_9920 < count__8069_9919))
{var arg__6539__auto___9921 = cljs.core._nth.call(null,chunk__8068_9918,i__8070_9920);a__6538__auto__.push(arg__6539__auto___9921);
{
var G__9922 = seq__8067_9917;
var G__9923 = chunk__8068_9918;
var G__9924 = count__8069_9919;
var G__9925 = (i__8070_9920 + 1);
seq__8067_9917 = G__9922;
chunk__8068_9918 = G__9923;
count__8069_9919 = G__9924;
i__8070_9920 = G__9925;
continue;
}
} else
{var temp__4092__auto___9926 = cljs.core.seq.call(null,seq__8067_9917);if(temp__4092__auto___9926)
{var seq__8067_9927__$1 = temp__4092__auto___9926;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8067_9927__$1))
{var c__5632__auto___9928 = cljs.core.chunk_first.call(null,seq__8067_9927__$1);{
var G__9929 = cljs.core.chunk_rest.call(null,seq__8067_9927__$1);
var G__9930 = c__5632__auto___9928;
var G__9931 = cljs.core.count.call(null,c__5632__auto___9928);
var G__9932 = 0;
seq__8067_9917 = G__9929;
chunk__8068_9918 = G__9930;
count__8069_9919 = G__9931;
i__8070_9920 = G__9932;
continue;
}
} else
{var arg__6539__auto___9933 = cljs.core.first.call(null,seq__8067_9927__$1);a__6538__auto__.push(arg__6539__auto___9933);
{
var G__9934 = cljs.core.next.call(null,seq__8067_9927__$1);
var G__9935 = null;
var G__9936 = 0;
var G__9937 = 0;
seq__8067_9917 = G__9934;
chunk__8068_9918 = G__9935;
count__8069_9919 = G__9936;
i__8070_9920 = G__9937;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.meter.apply(null,a__6538__auto__);
};
var meter = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return meter__delegate.call(this,args__6537__auto__);};
meter.cljs$lang$maxFixedArity = 0;
meter.cljs$lang$applyTo = (function (arglist__9938){
var args__6537__auto__ = cljs.core.seq(arglist__9938);
return meter__delegate(args__6537__auto__);
});
meter.cljs$core$IFn$_invoke$arity$variadic = meter__delegate;
return meter;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.nav = (function() { 
var nav__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__8075_9939 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__8076_9940 = null;var count__8077_9941 = 0;var i__8078_9942 = 0;while(true){
if((i__8078_9942 < count__8077_9941))
{var arg__6539__auto___9943 = cljs.core._nth.call(null,chunk__8076_9940,i__8078_9942);a__6538__auto__.push(arg__6539__auto___9943);
{
var G__9944 = seq__8075_9939;
var G__9945 = chunk__8076_9940;
var G__9946 = count__8077_9941;
var G__9947 = (i__8078_9942 + 1);
seq__8075_9939 = G__9944;
chunk__8076_9940 = G__9945;
count__8077_9941 = G__9946;
i__8078_9942 = G__9947;
continue;
}
} else
{var temp__4092__auto___9948 = cljs.core.seq.call(null,seq__8075_9939);if(temp__4092__auto___9948)
{var seq__8075_9949__$1 = temp__4092__auto___9948;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8075_9949__$1))
{var c__5632__auto___9950 = cljs.core.chunk_first.call(null,seq__8075_9949__$1);{
var G__9951 = cljs.core.chunk_rest.call(null,seq__8075_9949__$1);
var G__9952 = c__5632__auto___9950;
var G__9953 = cljs.core.count.call(null,c__5632__auto___9950);
var G__9954 = 0;
seq__8075_9939 = G__9951;
chunk__8076_9940 = G__9952;
count__8077_9941 = G__9953;
i__8078_9942 = G__9954;
continue;
}
} else
{var arg__6539__auto___9955 = cljs.core.first.call(null,seq__8075_9949__$1);a__6538__auto__.push(arg__6539__auto___9955);
{
var G__9956 = cljs.core.next.call(null,seq__8075_9949__$1);
var G__9957 = null;
var G__9958 = 0;
var G__9959 = 0;
seq__8075_9939 = G__9956;
chunk__8076_9940 = G__9957;
count__8077_9941 = G__9958;
i__8078_9942 = G__9959;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.nav.apply(null,a__6538__auto__);
};
var nav = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return nav__delegate.call(this,args__6537__auto__);};
nav.cljs$lang$maxFixedArity = 0;
nav.cljs$lang$applyTo = (function (arglist__9960){
var args__6537__auto__ = cljs.core.seq(arglist__9960);
return nav__delegate(args__6537__auto__);
});
nav.cljs$core$IFn$_invoke$arity$variadic = nav__delegate;
return nav;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.noscript = (function() { 
var noscript__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__8083_9961 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__8084_9962 = null;var count__8085_9963 = 0;var i__8086_9964 = 0;while(true){
if((i__8086_9964 < count__8085_9963))
{var arg__6539__auto___9965 = cljs.core._nth.call(null,chunk__8084_9962,i__8086_9964);a__6538__auto__.push(arg__6539__auto___9965);
{
var G__9966 = seq__8083_9961;
var G__9967 = chunk__8084_9962;
var G__9968 = count__8085_9963;
var G__9969 = (i__8086_9964 + 1);
seq__8083_9961 = G__9966;
chunk__8084_9962 = G__9967;
count__8085_9963 = G__9968;
i__8086_9964 = G__9969;
continue;
}
} else
{var temp__4092__auto___9970 = cljs.core.seq.call(null,seq__8083_9961);if(temp__4092__auto___9970)
{var seq__8083_9971__$1 = temp__4092__auto___9970;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8083_9971__$1))
{var c__5632__auto___9972 = cljs.core.chunk_first.call(null,seq__8083_9971__$1);{
var G__9973 = cljs.core.chunk_rest.call(null,seq__8083_9971__$1);
var G__9974 = c__5632__auto___9972;
var G__9975 = cljs.core.count.call(null,c__5632__auto___9972);
var G__9976 = 0;
seq__8083_9961 = G__9973;
chunk__8084_9962 = G__9974;
count__8085_9963 = G__9975;
i__8086_9964 = G__9976;
continue;
}
} else
{var arg__6539__auto___9977 = cljs.core.first.call(null,seq__8083_9971__$1);a__6538__auto__.push(arg__6539__auto___9977);
{
var G__9978 = cljs.core.next.call(null,seq__8083_9971__$1);
var G__9979 = null;
var G__9980 = 0;
var G__9981 = 0;
seq__8083_9961 = G__9978;
chunk__8084_9962 = G__9979;
count__8085_9963 = G__9980;
i__8086_9964 = G__9981;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.noscript.apply(null,a__6538__auto__);
};
var noscript = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return noscript__delegate.call(this,args__6537__auto__);};
noscript.cljs$lang$maxFixedArity = 0;
noscript.cljs$lang$applyTo = (function (arglist__9982){
var args__6537__auto__ = cljs.core.seq(arglist__9982);
return noscript__delegate(args__6537__auto__);
});
noscript.cljs$core$IFn$_invoke$arity$variadic = noscript__delegate;
return noscript;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.object = (function() { 
var object__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__8091_9983 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__8092_9984 = null;var count__8093_9985 = 0;var i__8094_9986 = 0;while(true){
if((i__8094_9986 < count__8093_9985))
{var arg__6539__auto___9987 = cljs.core._nth.call(null,chunk__8092_9984,i__8094_9986);a__6538__auto__.push(arg__6539__auto___9987);
{
var G__9988 = seq__8091_9983;
var G__9989 = chunk__8092_9984;
var G__9990 = count__8093_9985;
var G__9991 = (i__8094_9986 + 1);
seq__8091_9983 = G__9988;
chunk__8092_9984 = G__9989;
count__8093_9985 = G__9990;
i__8094_9986 = G__9991;
continue;
}
} else
{var temp__4092__auto___9992 = cljs.core.seq.call(null,seq__8091_9983);if(temp__4092__auto___9992)
{var seq__8091_9993__$1 = temp__4092__auto___9992;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8091_9993__$1))
{var c__5632__auto___9994 = cljs.core.chunk_first.call(null,seq__8091_9993__$1);{
var G__9995 = cljs.core.chunk_rest.call(null,seq__8091_9993__$1);
var G__9996 = c__5632__auto___9994;
var G__9997 = cljs.core.count.call(null,c__5632__auto___9994);
var G__9998 = 0;
seq__8091_9983 = G__9995;
chunk__8092_9984 = G__9996;
count__8093_9985 = G__9997;
i__8094_9986 = G__9998;
continue;
}
} else
{var arg__6539__auto___9999 = cljs.core.first.call(null,seq__8091_9993__$1);a__6538__auto__.push(arg__6539__auto___9999);
{
var G__10000 = cljs.core.next.call(null,seq__8091_9993__$1);
var G__10001 = null;
var G__10002 = 0;
var G__10003 = 0;
seq__8091_9983 = G__10000;
chunk__8092_9984 = G__10001;
count__8093_9985 = G__10002;
i__8094_9986 = G__10003;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.object.apply(null,a__6538__auto__);
};
var object = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return object__delegate.call(this,args__6537__auto__);};
object.cljs$lang$maxFixedArity = 0;
object.cljs$lang$applyTo = (function (arglist__10004){
var args__6537__auto__ = cljs.core.seq(arglist__10004);
return object__delegate(args__6537__auto__);
});
object.cljs$core$IFn$_invoke$arity$variadic = object__delegate;
return object;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.ol = (function() { 
var ol__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__8099_10005 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__8100_10006 = null;var count__8101_10007 = 0;var i__8102_10008 = 0;while(true){
if((i__8102_10008 < count__8101_10007))
{var arg__6539__auto___10009 = cljs.core._nth.call(null,chunk__8100_10006,i__8102_10008);a__6538__auto__.push(arg__6539__auto___10009);
{
var G__10010 = seq__8099_10005;
var G__10011 = chunk__8100_10006;
var G__10012 = count__8101_10007;
var G__10013 = (i__8102_10008 + 1);
seq__8099_10005 = G__10010;
chunk__8100_10006 = G__10011;
count__8101_10007 = G__10012;
i__8102_10008 = G__10013;
continue;
}
} else
{var temp__4092__auto___10014 = cljs.core.seq.call(null,seq__8099_10005);if(temp__4092__auto___10014)
{var seq__8099_10015__$1 = temp__4092__auto___10014;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8099_10015__$1))
{var c__5632__auto___10016 = cljs.core.chunk_first.call(null,seq__8099_10015__$1);{
var G__10017 = cljs.core.chunk_rest.call(null,seq__8099_10015__$1);
var G__10018 = c__5632__auto___10016;
var G__10019 = cljs.core.count.call(null,c__5632__auto___10016);
var G__10020 = 0;
seq__8099_10005 = G__10017;
chunk__8100_10006 = G__10018;
count__8101_10007 = G__10019;
i__8102_10008 = G__10020;
continue;
}
} else
{var arg__6539__auto___10021 = cljs.core.first.call(null,seq__8099_10015__$1);a__6538__auto__.push(arg__6539__auto___10021);
{
var G__10022 = cljs.core.next.call(null,seq__8099_10015__$1);
var G__10023 = null;
var G__10024 = 0;
var G__10025 = 0;
seq__8099_10005 = G__10022;
chunk__8100_10006 = G__10023;
count__8101_10007 = G__10024;
i__8102_10008 = G__10025;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.ol.apply(null,a__6538__auto__);
};
var ol = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ol__delegate.call(this,args__6537__auto__);};
ol.cljs$lang$maxFixedArity = 0;
ol.cljs$lang$applyTo = (function (arglist__10026){
var args__6537__auto__ = cljs.core.seq(arglist__10026);
return ol__delegate(args__6537__auto__);
});
ol.cljs$core$IFn$_invoke$arity$variadic = ol__delegate;
return ol;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.optgroup = (function() { 
var optgroup__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__8107_10027 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__8108_10028 = null;var count__8109_10029 = 0;var i__8110_10030 = 0;while(true){
if((i__8110_10030 < count__8109_10029))
{var arg__6539__auto___10031 = cljs.core._nth.call(null,chunk__8108_10028,i__8110_10030);a__6538__auto__.push(arg__6539__auto___10031);
{
var G__10032 = seq__8107_10027;
var G__10033 = chunk__8108_10028;
var G__10034 = count__8109_10029;
var G__10035 = (i__8110_10030 + 1);
seq__8107_10027 = G__10032;
chunk__8108_10028 = G__10033;
count__8109_10029 = G__10034;
i__8110_10030 = G__10035;
continue;
}
} else
{var temp__4092__auto___10036 = cljs.core.seq.call(null,seq__8107_10027);if(temp__4092__auto___10036)
{var seq__8107_10037__$1 = temp__4092__auto___10036;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8107_10037__$1))
{var c__5632__auto___10038 = cljs.core.chunk_first.call(null,seq__8107_10037__$1);{
var G__10039 = cljs.core.chunk_rest.call(null,seq__8107_10037__$1);
var G__10040 = c__5632__auto___10038;
var G__10041 = cljs.core.count.call(null,c__5632__auto___10038);
var G__10042 = 0;
seq__8107_10027 = G__10039;
chunk__8108_10028 = G__10040;
count__8109_10029 = G__10041;
i__8110_10030 = G__10042;
continue;
}
} else
{var arg__6539__auto___10043 = cljs.core.first.call(null,seq__8107_10037__$1);a__6538__auto__.push(arg__6539__auto___10043);
{
var G__10044 = cljs.core.next.call(null,seq__8107_10037__$1);
var G__10045 = null;
var G__10046 = 0;
var G__10047 = 0;
seq__8107_10027 = G__10044;
chunk__8108_10028 = G__10045;
count__8109_10029 = G__10046;
i__8110_10030 = G__10047;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.optgroup.apply(null,a__6538__auto__);
};
var optgroup = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return optgroup__delegate.call(this,args__6537__auto__);};
optgroup.cljs$lang$maxFixedArity = 0;
optgroup.cljs$lang$applyTo = (function (arglist__10048){
var args__6537__auto__ = cljs.core.seq(arglist__10048);
return optgroup__delegate(args__6537__auto__);
});
optgroup.cljs$core$IFn$_invoke$arity$variadic = optgroup__delegate;
return optgroup;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.option = (function() { 
var option__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__8115_10049 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__8116_10050 = null;var count__8117_10051 = 0;var i__8118_10052 = 0;while(true){
if((i__8118_10052 < count__8117_10051))
{var arg__6539__auto___10053 = cljs.core._nth.call(null,chunk__8116_10050,i__8118_10052);a__6538__auto__.push(arg__6539__auto___10053);
{
var G__10054 = seq__8115_10049;
var G__10055 = chunk__8116_10050;
var G__10056 = count__8117_10051;
var G__10057 = (i__8118_10052 + 1);
seq__8115_10049 = G__10054;
chunk__8116_10050 = G__10055;
count__8117_10051 = G__10056;
i__8118_10052 = G__10057;
continue;
}
} else
{var temp__4092__auto___10058 = cljs.core.seq.call(null,seq__8115_10049);if(temp__4092__auto___10058)
{var seq__8115_10059__$1 = temp__4092__auto___10058;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8115_10059__$1))
{var c__5632__auto___10060 = cljs.core.chunk_first.call(null,seq__8115_10059__$1);{
var G__10061 = cljs.core.chunk_rest.call(null,seq__8115_10059__$1);
var G__10062 = c__5632__auto___10060;
var G__10063 = cljs.core.count.call(null,c__5632__auto___10060);
var G__10064 = 0;
seq__8115_10049 = G__10061;
chunk__8116_10050 = G__10062;
count__8117_10051 = G__10063;
i__8118_10052 = G__10064;
continue;
}
} else
{var arg__6539__auto___10065 = cljs.core.first.call(null,seq__8115_10059__$1);a__6538__auto__.push(arg__6539__auto___10065);
{
var G__10066 = cljs.core.next.call(null,seq__8115_10059__$1);
var G__10067 = null;
var G__10068 = 0;
var G__10069 = 0;
seq__8115_10049 = G__10066;
chunk__8116_10050 = G__10067;
count__8117_10051 = G__10068;
i__8118_10052 = G__10069;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.option.apply(null,a__6538__auto__);
};
var option = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return option__delegate.call(this,args__6537__auto__);};
option.cljs$lang$maxFixedArity = 0;
option.cljs$lang$applyTo = (function (arglist__10070){
var args__6537__auto__ = cljs.core.seq(arglist__10070);
return option__delegate(args__6537__auto__);
});
option.cljs$core$IFn$_invoke$arity$variadic = option__delegate;
return option;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.output = (function() { 
var output__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__8123_10071 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__8124_10072 = null;var count__8125_10073 = 0;var i__8126_10074 = 0;while(true){
if((i__8126_10074 < count__8125_10073))
{var arg__6539__auto___10075 = cljs.core._nth.call(null,chunk__8124_10072,i__8126_10074);a__6538__auto__.push(arg__6539__auto___10075);
{
var G__10076 = seq__8123_10071;
var G__10077 = chunk__8124_10072;
var G__10078 = count__8125_10073;
var G__10079 = (i__8126_10074 + 1);
seq__8123_10071 = G__10076;
chunk__8124_10072 = G__10077;
count__8125_10073 = G__10078;
i__8126_10074 = G__10079;
continue;
}
} else
{var temp__4092__auto___10080 = cljs.core.seq.call(null,seq__8123_10071);if(temp__4092__auto___10080)
{var seq__8123_10081__$1 = temp__4092__auto___10080;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8123_10081__$1))
{var c__5632__auto___10082 = cljs.core.chunk_first.call(null,seq__8123_10081__$1);{
var G__10083 = cljs.core.chunk_rest.call(null,seq__8123_10081__$1);
var G__10084 = c__5632__auto___10082;
var G__10085 = cljs.core.count.call(null,c__5632__auto___10082);
var G__10086 = 0;
seq__8123_10071 = G__10083;
chunk__8124_10072 = G__10084;
count__8125_10073 = G__10085;
i__8126_10074 = G__10086;
continue;
}
} else
{var arg__6539__auto___10087 = cljs.core.first.call(null,seq__8123_10081__$1);a__6538__auto__.push(arg__6539__auto___10087);
{
var G__10088 = cljs.core.next.call(null,seq__8123_10081__$1);
var G__10089 = null;
var G__10090 = 0;
var G__10091 = 0;
seq__8123_10071 = G__10088;
chunk__8124_10072 = G__10089;
count__8125_10073 = G__10090;
i__8126_10074 = G__10091;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.output.apply(null,a__6538__auto__);
};
var output = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return output__delegate.call(this,args__6537__auto__);};
output.cljs$lang$maxFixedArity = 0;
output.cljs$lang$applyTo = (function (arglist__10092){
var args__6537__auto__ = cljs.core.seq(arglist__10092);
return output__delegate(args__6537__auto__);
});
output.cljs$core$IFn$_invoke$arity$variadic = output__delegate;
return output;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.p = (function() { 
var p__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__8131_10093 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__8132_10094 = null;var count__8133_10095 = 0;var i__8134_10096 = 0;while(true){
if((i__8134_10096 < count__8133_10095))
{var arg__6539__auto___10097 = cljs.core._nth.call(null,chunk__8132_10094,i__8134_10096);a__6538__auto__.push(arg__6539__auto___10097);
{
var G__10098 = seq__8131_10093;
var G__10099 = chunk__8132_10094;
var G__10100 = count__8133_10095;
var G__10101 = (i__8134_10096 + 1);
seq__8131_10093 = G__10098;
chunk__8132_10094 = G__10099;
count__8133_10095 = G__10100;
i__8134_10096 = G__10101;
continue;
}
} else
{var temp__4092__auto___10102 = cljs.core.seq.call(null,seq__8131_10093);if(temp__4092__auto___10102)
{var seq__8131_10103__$1 = temp__4092__auto___10102;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8131_10103__$1))
{var c__5632__auto___10104 = cljs.core.chunk_first.call(null,seq__8131_10103__$1);{
var G__10105 = cljs.core.chunk_rest.call(null,seq__8131_10103__$1);
var G__10106 = c__5632__auto___10104;
var G__10107 = cljs.core.count.call(null,c__5632__auto___10104);
var G__10108 = 0;
seq__8131_10093 = G__10105;
chunk__8132_10094 = G__10106;
count__8133_10095 = G__10107;
i__8134_10096 = G__10108;
continue;
}
} else
{var arg__6539__auto___10109 = cljs.core.first.call(null,seq__8131_10103__$1);a__6538__auto__.push(arg__6539__auto___10109);
{
var G__10110 = cljs.core.next.call(null,seq__8131_10103__$1);
var G__10111 = null;
var G__10112 = 0;
var G__10113 = 0;
seq__8131_10093 = G__10110;
chunk__8132_10094 = G__10111;
count__8133_10095 = G__10112;
i__8134_10096 = G__10113;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.p.apply(null,a__6538__auto__);
};
var p = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return p__delegate.call(this,args__6537__auto__);};
p.cljs$lang$maxFixedArity = 0;
p.cljs$lang$applyTo = (function (arglist__10114){
var args__6537__auto__ = cljs.core.seq(arglist__10114);
return p__delegate(args__6537__auto__);
});
p.cljs$core$IFn$_invoke$arity$variadic = p__delegate;
return p;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.param = (function() { 
var param__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__8139_10115 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__8140_10116 = null;var count__8141_10117 = 0;var i__8142_10118 = 0;while(true){
if((i__8142_10118 < count__8141_10117))
{var arg__6539__auto___10119 = cljs.core._nth.call(null,chunk__8140_10116,i__8142_10118);a__6538__auto__.push(arg__6539__auto___10119);
{
var G__10120 = seq__8139_10115;
var G__10121 = chunk__8140_10116;
var G__10122 = count__8141_10117;
var G__10123 = (i__8142_10118 + 1);
seq__8139_10115 = G__10120;
chunk__8140_10116 = G__10121;
count__8141_10117 = G__10122;
i__8142_10118 = G__10123;
continue;
}
} else
{var temp__4092__auto___10124 = cljs.core.seq.call(null,seq__8139_10115);if(temp__4092__auto___10124)
{var seq__8139_10125__$1 = temp__4092__auto___10124;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8139_10125__$1))
{var c__5632__auto___10126 = cljs.core.chunk_first.call(null,seq__8139_10125__$1);{
var G__10127 = cljs.core.chunk_rest.call(null,seq__8139_10125__$1);
var G__10128 = c__5632__auto___10126;
var G__10129 = cljs.core.count.call(null,c__5632__auto___10126);
var G__10130 = 0;
seq__8139_10115 = G__10127;
chunk__8140_10116 = G__10128;
count__8141_10117 = G__10129;
i__8142_10118 = G__10130;
continue;
}
} else
{var arg__6539__auto___10131 = cljs.core.first.call(null,seq__8139_10125__$1);a__6538__auto__.push(arg__6539__auto___10131);
{
var G__10132 = cljs.core.next.call(null,seq__8139_10125__$1);
var G__10133 = null;
var G__10134 = 0;
var G__10135 = 0;
seq__8139_10115 = G__10132;
chunk__8140_10116 = G__10133;
count__8141_10117 = G__10134;
i__8142_10118 = G__10135;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.param.apply(null,a__6538__auto__);
};
var param = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return param__delegate.call(this,args__6537__auto__);};
param.cljs$lang$maxFixedArity = 0;
param.cljs$lang$applyTo = (function (arglist__10136){
var args__6537__auto__ = cljs.core.seq(arglist__10136);
return param__delegate(args__6537__auto__);
});
param.cljs$core$IFn$_invoke$arity$variadic = param__delegate;
return param;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.pre = (function() { 
var pre__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__8147_10137 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__8148_10138 = null;var count__8149_10139 = 0;var i__8150_10140 = 0;while(true){
if((i__8150_10140 < count__8149_10139))
{var arg__6539__auto___10141 = cljs.core._nth.call(null,chunk__8148_10138,i__8150_10140);a__6538__auto__.push(arg__6539__auto___10141);
{
var G__10142 = seq__8147_10137;
var G__10143 = chunk__8148_10138;
var G__10144 = count__8149_10139;
var G__10145 = (i__8150_10140 + 1);
seq__8147_10137 = G__10142;
chunk__8148_10138 = G__10143;
count__8149_10139 = G__10144;
i__8150_10140 = G__10145;
continue;
}
} else
{var temp__4092__auto___10146 = cljs.core.seq.call(null,seq__8147_10137);if(temp__4092__auto___10146)
{var seq__8147_10147__$1 = temp__4092__auto___10146;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8147_10147__$1))
{var c__5632__auto___10148 = cljs.core.chunk_first.call(null,seq__8147_10147__$1);{
var G__10149 = cljs.core.chunk_rest.call(null,seq__8147_10147__$1);
var G__10150 = c__5632__auto___10148;
var G__10151 = cljs.core.count.call(null,c__5632__auto___10148);
var G__10152 = 0;
seq__8147_10137 = G__10149;
chunk__8148_10138 = G__10150;
count__8149_10139 = G__10151;
i__8150_10140 = G__10152;
continue;
}
} else
{var arg__6539__auto___10153 = cljs.core.first.call(null,seq__8147_10147__$1);a__6538__auto__.push(arg__6539__auto___10153);
{
var G__10154 = cljs.core.next.call(null,seq__8147_10147__$1);
var G__10155 = null;
var G__10156 = 0;
var G__10157 = 0;
seq__8147_10137 = G__10154;
chunk__8148_10138 = G__10155;
count__8149_10139 = G__10156;
i__8150_10140 = G__10157;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.pre.apply(null,a__6538__auto__);
};
var pre = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return pre__delegate.call(this,args__6537__auto__);};
pre.cljs$lang$maxFixedArity = 0;
pre.cljs$lang$applyTo = (function (arglist__10158){
var args__6537__auto__ = cljs.core.seq(arglist__10158);
return pre__delegate(args__6537__auto__);
});
pre.cljs$core$IFn$_invoke$arity$variadic = pre__delegate;
return pre;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.progress = (function() { 
var progress__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__8155_10159 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__8156_10160 = null;var count__8157_10161 = 0;var i__8158_10162 = 0;while(true){
if((i__8158_10162 < count__8157_10161))
{var arg__6539__auto___10163 = cljs.core._nth.call(null,chunk__8156_10160,i__8158_10162);a__6538__auto__.push(arg__6539__auto___10163);
{
var G__10164 = seq__8155_10159;
var G__10165 = chunk__8156_10160;
var G__10166 = count__8157_10161;
var G__10167 = (i__8158_10162 + 1);
seq__8155_10159 = G__10164;
chunk__8156_10160 = G__10165;
count__8157_10161 = G__10166;
i__8158_10162 = G__10167;
continue;
}
} else
{var temp__4092__auto___10168 = cljs.core.seq.call(null,seq__8155_10159);if(temp__4092__auto___10168)
{var seq__8155_10169__$1 = temp__4092__auto___10168;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8155_10169__$1))
{var c__5632__auto___10170 = cljs.core.chunk_first.call(null,seq__8155_10169__$1);{
var G__10171 = cljs.core.chunk_rest.call(null,seq__8155_10169__$1);
var G__10172 = c__5632__auto___10170;
var G__10173 = cljs.core.count.call(null,c__5632__auto___10170);
var G__10174 = 0;
seq__8155_10159 = G__10171;
chunk__8156_10160 = G__10172;
count__8157_10161 = G__10173;
i__8158_10162 = G__10174;
continue;
}
} else
{var arg__6539__auto___10175 = cljs.core.first.call(null,seq__8155_10169__$1);a__6538__auto__.push(arg__6539__auto___10175);
{
var G__10176 = cljs.core.next.call(null,seq__8155_10169__$1);
var G__10177 = null;
var G__10178 = 0;
var G__10179 = 0;
seq__8155_10159 = G__10176;
chunk__8156_10160 = G__10177;
count__8157_10161 = G__10178;
i__8158_10162 = G__10179;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.progress.apply(null,a__6538__auto__);
};
var progress = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return progress__delegate.call(this,args__6537__auto__);};
progress.cljs$lang$maxFixedArity = 0;
progress.cljs$lang$applyTo = (function (arglist__10180){
var args__6537__auto__ = cljs.core.seq(arglist__10180);
return progress__delegate(args__6537__auto__);
});
progress.cljs$core$IFn$_invoke$arity$variadic = progress__delegate;
return progress;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.q = (function() { 
var q__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__8163_10181 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__8164_10182 = null;var count__8165_10183 = 0;var i__8166_10184 = 0;while(true){
if((i__8166_10184 < count__8165_10183))
{var arg__6539__auto___10185 = cljs.core._nth.call(null,chunk__8164_10182,i__8166_10184);a__6538__auto__.push(arg__6539__auto___10185);
{
var G__10186 = seq__8163_10181;
var G__10187 = chunk__8164_10182;
var G__10188 = count__8165_10183;
var G__10189 = (i__8166_10184 + 1);
seq__8163_10181 = G__10186;
chunk__8164_10182 = G__10187;
count__8165_10183 = G__10188;
i__8166_10184 = G__10189;
continue;
}
} else
{var temp__4092__auto___10190 = cljs.core.seq.call(null,seq__8163_10181);if(temp__4092__auto___10190)
{var seq__8163_10191__$1 = temp__4092__auto___10190;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8163_10191__$1))
{var c__5632__auto___10192 = cljs.core.chunk_first.call(null,seq__8163_10191__$1);{
var G__10193 = cljs.core.chunk_rest.call(null,seq__8163_10191__$1);
var G__10194 = c__5632__auto___10192;
var G__10195 = cljs.core.count.call(null,c__5632__auto___10192);
var G__10196 = 0;
seq__8163_10181 = G__10193;
chunk__8164_10182 = G__10194;
count__8165_10183 = G__10195;
i__8166_10184 = G__10196;
continue;
}
} else
{var arg__6539__auto___10197 = cljs.core.first.call(null,seq__8163_10191__$1);a__6538__auto__.push(arg__6539__auto___10197);
{
var G__10198 = cljs.core.next.call(null,seq__8163_10191__$1);
var G__10199 = null;
var G__10200 = 0;
var G__10201 = 0;
seq__8163_10181 = G__10198;
chunk__8164_10182 = G__10199;
count__8165_10183 = G__10200;
i__8166_10184 = G__10201;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.q.apply(null,a__6538__auto__);
};
var q = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return q__delegate.call(this,args__6537__auto__);};
q.cljs$lang$maxFixedArity = 0;
q.cljs$lang$applyTo = (function (arglist__10202){
var args__6537__auto__ = cljs.core.seq(arglist__10202);
return q__delegate(args__6537__auto__);
});
q.cljs$core$IFn$_invoke$arity$variadic = q__delegate;
return q;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.rp = (function() { 
var rp__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__8171_10203 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__8172_10204 = null;var count__8173_10205 = 0;var i__8174_10206 = 0;while(true){
if((i__8174_10206 < count__8173_10205))
{var arg__6539__auto___10207 = cljs.core._nth.call(null,chunk__8172_10204,i__8174_10206);a__6538__auto__.push(arg__6539__auto___10207);
{
var G__10208 = seq__8171_10203;
var G__10209 = chunk__8172_10204;
var G__10210 = count__8173_10205;
var G__10211 = (i__8174_10206 + 1);
seq__8171_10203 = G__10208;
chunk__8172_10204 = G__10209;
count__8173_10205 = G__10210;
i__8174_10206 = G__10211;
continue;
}
} else
{var temp__4092__auto___10212 = cljs.core.seq.call(null,seq__8171_10203);if(temp__4092__auto___10212)
{var seq__8171_10213__$1 = temp__4092__auto___10212;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8171_10213__$1))
{var c__5632__auto___10214 = cljs.core.chunk_first.call(null,seq__8171_10213__$1);{
var G__10215 = cljs.core.chunk_rest.call(null,seq__8171_10213__$1);
var G__10216 = c__5632__auto___10214;
var G__10217 = cljs.core.count.call(null,c__5632__auto___10214);
var G__10218 = 0;
seq__8171_10203 = G__10215;
chunk__8172_10204 = G__10216;
count__8173_10205 = G__10217;
i__8174_10206 = G__10218;
continue;
}
} else
{var arg__6539__auto___10219 = cljs.core.first.call(null,seq__8171_10213__$1);a__6538__auto__.push(arg__6539__auto___10219);
{
var G__10220 = cljs.core.next.call(null,seq__8171_10213__$1);
var G__10221 = null;
var G__10222 = 0;
var G__10223 = 0;
seq__8171_10203 = G__10220;
chunk__8172_10204 = G__10221;
count__8173_10205 = G__10222;
i__8174_10206 = G__10223;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.rp.apply(null,a__6538__auto__);
};
var rp = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return rp__delegate.call(this,args__6537__auto__);};
rp.cljs$lang$maxFixedArity = 0;
rp.cljs$lang$applyTo = (function (arglist__10224){
var args__6537__auto__ = cljs.core.seq(arglist__10224);
return rp__delegate(args__6537__auto__);
});
rp.cljs$core$IFn$_invoke$arity$variadic = rp__delegate;
return rp;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.rt = (function() { 
var rt__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__8179_10225 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__8180_10226 = null;var count__8181_10227 = 0;var i__8182_10228 = 0;while(true){
if((i__8182_10228 < count__8181_10227))
{var arg__6539__auto___10229 = cljs.core._nth.call(null,chunk__8180_10226,i__8182_10228);a__6538__auto__.push(arg__6539__auto___10229);
{
var G__10230 = seq__8179_10225;
var G__10231 = chunk__8180_10226;
var G__10232 = count__8181_10227;
var G__10233 = (i__8182_10228 + 1);
seq__8179_10225 = G__10230;
chunk__8180_10226 = G__10231;
count__8181_10227 = G__10232;
i__8182_10228 = G__10233;
continue;
}
} else
{var temp__4092__auto___10234 = cljs.core.seq.call(null,seq__8179_10225);if(temp__4092__auto___10234)
{var seq__8179_10235__$1 = temp__4092__auto___10234;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8179_10235__$1))
{var c__5632__auto___10236 = cljs.core.chunk_first.call(null,seq__8179_10235__$1);{
var G__10237 = cljs.core.chunk_rest.call(null,seq__8179_10235__$1);
var G__10238 = c__5632__auto___10236;
var G__10239 = cljs.core.count.call(null,c__5632__auto___10236);
var G__10240 = 0;
seq__8179_10225 = G__10237;
chunk__8180_10226 = G__10238;
count__8181_10227 = G__10239;
i__8182_10228 = G__10240;
continue;
}
} else
{var arg__6539__auto___10241 = cljs.core.first.call(null,seq__8179_10235__$1);a__6538__auto__.push(arg__6539__auto___10241);
{
var G__10242 = cljs.core.next.call(null,seq__8179_10235__$1);
var G__10243 = null;
var G__10244 = 0;
var G__10245 = 0;
seq__8179_10225 = G__10242;
chunk__8180_10226 = G__10243;
count__8181_10227 = G__10244;
i__8182_10228 = G__10245;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.rt.apply(null,a__6538__auto__);
};
var rt = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return rt__delegate.call(this,args__6537__auto__);};
rt.cljs$lang$maxFixedArity = 0;
rt.cljs$lang$applyTo = (function (arglist__10246){
var args__6537__auto__ = cljs.core.seq(arglist__10246);
return rt__delegate(args__6537__auto__);
});
rt.cljs$core$IFn$_invoke$arity$variadic = rt__delegate;
return rt;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.ruby = (function() { 
var ruby__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__8187_10247 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__8188_10248 = null;var count__8189_10249 = 0;var i__8190_10250 = 0;while(true){
if((i__8190_10250 < count__8189_10249))
{var arg__6539__auto___10251 = cljs.core._nth.call(null,chunk__8188_10248,i__8190_10250);a__6538__auto__.push(arg__6539__auto___10251);
{
var G__10252 = seq__8187_10247;
var G__10253 = chunk__8188_10248;
var G__10254 = count__8189_10249;
var G__10255 = (i__8190_10250 + 1);
seq__8187_10247 = G__10252;
chunk__8188_10248 = G__10253;
count__8189_10249 = G__10254;
i__8190_10250 = G__10255;
continue;
}
} else
{var temp__4092__auto___10256 = cljs.core.seq.call(null,seq__8187_10247);if(temp__4092__auto___10256)
{var seq__8187_10257__$1 = temp__4092__auto___10256;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8187_10257__$1))
{var c__5632__auto___10258 = cljs.core.chunk_first.call(null,seq__8187_10257__$1);{
var G__10259 = cljs.core.chunk_rest.call(null,seq__8187_10257__$1);
var G__10260 = c__5632__auto___10258;
var G__10261 = cljs.core.count.call(null,c__5632__auto___10258);
var G__10262 = 0;
seq__8187_10247 = G__10259;
chunk__8188_10248 = G__10260;
count__8189_10249 = G__10261;
i__8190_10250 = G__10262;
continue;
}
} else
{var arg__6539__auto___10263 = cljs.core.first.call(null,seq__8187_10257__$1);a__6538__auto__.push(arg__6539__auto___10263);
{
var G__10264 = cljs.core.next.call(null,seq__8187_10257__$1);
var G__10265 = null;
var G__10266 = 0;
var G__10267 = 0;
seq__8187_10247 = G__10264;
chunk__8188_10248 = G__10265;
count__8189_10249 = G__10266;
i__8190_10250 = G__10267;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.ruby.apply(null,a__6538__auto__);
};
var ruby = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ruby__delegate.call(this,args__6537__auto__);};
ruby.cljs$lang$maxFixedArity = 0;
ruby.cljs$lang$applyTo = (function (arglist__10268){
var args__6537__auto__ = cljs.core.seq(arglist__10268);
return ruby__delegate(args__6537__auto__);
});
ruby.cljs$core$IFn$_invoke$arity$variadic = ruby__delegate;
return ruby;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.s = (function() { 
var s__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__8195_10269 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__8196_10270 = null;var count__8197_10271 = 0;var i__8198_10272 = 0;while(true){
if((i__8198_10272 < count__8197_10271))
{var arg__6539__auto___10273 = cljs.core._nth.call(null,chunk__8196_10270,i__8198_10272);a__6538__auto__.push(arg__6539__auto___10273);
{
var G__10274 = seq__8195_10269;
var G__10275 = chunk__8196_10270;
var G__10276 = count__8197_10271;
var G__10277 = (i__8198_10272 + 1);
seq__8195_10269 = G__10274;
chunk__8196_10270 = G__10275;
count__8197_10271 = G__10276;
i__8198_10272 = G__10277;
continue;
}
} else
{var temp__4092__auto___10278 = cljs.core.seq.call(null,seq__8195_10269);if(temp__4092__auto___10278)
{var seq__8195_10279__$1 = temp__4092__auto___10278;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8195_10279__$1))
{var c__5632__auto___10280 = cljs.core.chunk_first.call(null,seq__8195_10279__$1);{
var G__10281 = cljs.core.chunk_rest.call(null,seq__8195_10279__$1);
var G__10282 = c__5632__auto___10280;
var G__10283 = cljs.core.count.call(null,c__5632__auto___10280);
var G__10284 = 0;
seq__8195_10269 = G__10281;
chunk__8196_10270 = G__10282;
count__8197_10271 = G__10283;
i__8198_10272 = G__10284;
continue;
}
} else
{var arg__6539__auto___10285 = cljs.core.first.call(null,seq__8195_10279__$1);a__6538__auto__.push(arg__6539__auto___10285);
{
var G__10286 = cljs.core.next.call(null,seq__8195_10279__$1);
var G__10287 = null;
var G__10288 = 0;
var G__10289 = 0;
seq__8195_10269 = G__10286;
chunk__8196_10270 = G__10287;
count__8197_10271 = G__10288;
i__8198_10272 = G__10289;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.s.apply(null,a__6538__auto__);
};
var s = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return s__delegate.call(this,args__6537__auto__);};
s.cljs$lang$maxFixedArity = 0;
s.cljs$lang$applyTo = (function (arglist__10290){
var args__6537__auto__ = cljs.core.seq(arglist__10290);
return s__delegate(args__6537__auto__);
});
s.cljs$core$IFn$_invoke$arity$variadic = s__delegate;
return s;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.samp = (function() { 
var samp__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__8203_10291 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__8204_10292 = null;var count__8205_10293 = 0;var i__8206_10294 = 0;while(true){
if((i__8206_10294 < count__8205_10293))
{var arg__6539__auto___10295 = cljs.core._nth.call(null,chunk__8204_10292,i__8206_10294);a__6538__auto__.push(arg__6539__auto___10295);
{
var G__10296 = seq__8203_10291;
var G__10297 = chunk__8204_10292;
var G__10298 = count__8205_10293;
var G__10299 = (i__8206_10294 + 1);
seq__8203_10291 = G__10296;
chunk__8204_10292 = G__10297;
count__8205_10293 = G__10298;
i__8206_10294 = G__10299;
continue;
}
} else
{var temp__4092__auto___10300 = cljs.core.seq.call(null,seq__8203_10291);if(temp__4092__auto___10300)
{var seq__8203_10301__$1 = temp__4092__auto___10300;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8203_10301__$1))
{var c__5632__auto___10302 = cljs.core.chunk_first.call(null,seq__8203_10301__$1);{
var G__10303 = cljs.core.chunk_rest.call(null,seq__8203_10301__$1);
var G__10304 = c__5632__auto___10302;
var G__10305 = cljs.core.count.call(null,c__5632__auto___10302);
var G__10306 = 0;
seq__8203_10291 = G__10303;
chunk__8204_10292 = G__10304;
count__8205_10293 = G__10305;
i__8206_10294 = G__10306;
continue;
}
} else
{var arg__6539__auto___10307 = cljs.core.first.call(null,seq__8203_10301__$1);a__6538__auto__.push(arg__6539__auto___10307);
{
var G__10308 = cljs.core.next.call(null,seq__8203_10301__$1);
var G__10309 = null;
var G__10310 = 0;
var G__10311 = 0;
seq__8203_10291 = G__10308;
chunk__8204_10292 = G__10309;
count__8205_10293 = G__10310;
i__8206_10294 = G__10311;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.samp.apply(null,a__6538__auto__);
};
var samp = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return samp__delegate.call(this,args__6537__auto__);};
samp.cljs$lang$maxFixedArity = 0;
samp.cljs$lang$applyTo = (function (arglist__10312){
var args__6537__auto__ = cljs.core.seq(arglist__10312);
return samp__delegate(args__6537__auto__);
});
samp.cljs$core$IFn$_invoke$arity$variadic = samp__delegate;
return samp;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.script = (function() { 
var script__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__8211_10313 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__8212_10314 = null;var count__8213_10315 = 0;var i__8214_10316 = 0;while(true){
if((i__8214_10316 < count__8213_10315))
{var arg__6539__auto___10317 = cljs.core._nth.call(null,chunk__8212_10314,i__8214_10316);a__6538__auto__.push(arg__6539__auto___10317);
{
var G__10318 = seq__8211_10313;
var G__10319 = chunk__8212_10314;
var G__10320 = count__8213_10315;
var G__10321 = (i__8214_10316 + 1);
seq__8211_10313 = G__10318;
chunk__8212_10314 = G__10319;
count__8213_10315 = G__10320;
i__8214_10316 = G__10321;
continue;
}
} else
{var temp__4092__auto___10322 = cljs.core.seq.call(null,seq__8211_10313);if(temp__4092__auto___10322)
{var seq__8211_10323__$1 = temp__4092__auto___10322;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8211_10323__$1))
{var c__5632__auto___10324 = cljs.core.chunk_first.call(null,seq__8211_10323__$1);{
var G__10325 = cljs.core.chunk_rest.call(null,seq__8211_10323__$1);
var G__10326 = c__5632__auto___10324;
var G__10327 = cljs.core.count.call(null,c__5632__auto___10324);
var G__10328 = 0;
seq__8211_10313 = G__10325;
chunk__8212_10314 = G__10326;
count__8213_10315 = G__10327;
i__8214_10316 = G__10328;
continue;
}
} else
{var arg__6539__auto___10329 = cljs.core.first.call(null,seq__8211_10323__$1);a__6538__auto__.push(arg__6539__auto___10329);
{
var G__10330 = cljs.core.next.call(null,seq__8211_10323__$1);
var G__10331 = null;
var G__10332 = 0;
var G__10333 = 0;
seq__8211_10313 = G__10330;
chunk__8212_10314 = G__10331;
count__8213_10315 = G__10332;
i__8214_10316 = G__10333;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.script.apply(null,a__6538__auto__);
};
var script = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return script__delegate.call(this,args__6537__auto__);};
script.cljs$lang$maxFixedArity = 0;
script.cljs$lang$applyTo = (function (arglist__10334){
var args__6537__auto__ = cljs.core.seq(arglist__10334);
return script__delegate(args__6537__auto__);
});
script.cljs$core$IFn$_invoke$arity$variadic = script__delegate;
return script;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.section = (function() { 
var section__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__8219_10335 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__8220_10336 = null;var count__8221_10337 = 0;var i__8222_10338 = 0;while(true){
if((i__8222_10338 < count__8221_10337))
{var arg__6539__auto___10339 = cljs.core._nth.call(null,chunk__8220_10336,i__8222_10338);a__6538__auto__.push(arg__6539__auto___10339);
{
var G__10340 = seq__8219_10335;
var G__10341 = chunk__8220_10336;
var G__10342 = count__8221_10337;
var G__10343 = (i__8222_10338 + 1);
seq__8219_10335 = G__10340;
chunk__8220_10336 = G__10341;
count__8221_10337 = G__10342;
i__8222_10338 = G__10343;
continue;
}
} else
{var temp__4092__auto___10344 = cljs.core.seq.call(null,seq__8219_10335);if(temp__4092__auto___10344)
{var seq__8219_10345__$1 = temp__4092__auto___10344;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8219_10345__$1))
{var c__5632__auto___10346 = cljs.core.chunk_first.call(null,seq__8219_10345__$1);{
var G__10347 = cljs.core.chunk_rest.call(null,seq__8219_10345__$1);
var G__10348 = c__5632__auto___10346;
var G__10349 = cljs.core.count.call(null,c__5632__auto___10346);
var G__10350 = 0;
seq__8219_10335 = G__10347;
chunk__8220_10336 = G__10348;
count__8221_10337 = G__10349;
i__8222_10338 = G__10350;
continue;
}
} else
{var arg__6539__auto___10351 = cljs.core.first.call(null,seq__8219_10345__$1);a__6538__auto__.push(arg__6539__auto___10351);
{
var G__10352 = cljs.core.next.call(null,seq__8219_10345__$1);
var G__10353 = null;
var G__10354 = 0;
var G__10355 = 0;
seq__8219_10335 = G__10352;
chunk__8220_10336 = G__10353;
count__8221_10337 = G__10354;
i__8222_10338 = G__10355;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.section.apply(null,a__6538__auto__);
};
var section = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return section__delegate.call(this,args__6537__auto__);};
section.cljs$lang$maxFixedArity = 0;
section.cljs$lang$applyTo = (function (arglist__10356){
var args__6537__auto__ = cljs.core.seq(arglist__10356);
return section__delegate(args__6537__auto__);
});
section.cljs$core$IFn$_invoke$arity$variadic = section__delegate;
return section;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.select = (function() { 
var select__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__8227_10357 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__8228_10358 = null;var count__8229_10359 = 0;var i__8230_10360 = 0;while(true){
if((i__8230_10360 < count__8229_10359))
{var arg__6539__auto___10361 = cljs.core._nth.call(null,chunk__8228_10358,i__8230_10360);a__6538__auto__.push(arg__6539__auto___10361);
{
var G__10362 = seq__8227_10357;
var G__10363 = chunk__8228_10358;
var G__10364 = count__8229_10359;
var G__10365 = (i__8230_10360 + 1);
seq__8227_10357 = G__10362;
chunk__8228_10358 = G__10363;
count__8229_10359 = G__10364;
i__8230_10360 = G__10365;
continue;
}
} else
{var temp__4092__auto___10366 = cljs.core.seq.call(null,seq__8227_10357);if(temp__4092__auto___10366)
{var seq__8227_10367__$1 = temp__4092__auto___10366;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8227_10367__$1))
{var c__5632__auto___10368 = cljs.core.chunk_first.call(null,seq__8227_10367__$1);{
var G__10369 = cljs.core.chunk_rest.call(null,seq__8227_10367__$1);
var G__10370 = c__5632__auto___10368;
var G__10371 = cljs.core.count.call(null,c__5632__auto___10368);
var G__10372 = 0;
seq__8227_10357 = G__10369;
chunk__8228_10358 = G__10370;
count__8229_10359 = G__10371;
i__8230_10360 = G__10372;
continue;
}
} else
{var arg__6539__auto___10373 = cljs.core.first.call(null,seq__8227_10367__$1);a__6538__auto__.push(arg__6539__auto___10373);
{
var G__10374 = cljs.core.next.call(null,seq__8227_10367__$1);
var G__10375 = null;
var G__10376 = 0;
var G__10377 = 0;
seq__8227_10357 = G__10374;
chunk__8228_10358 = G__10375;
count__8229_10359 = G__10376;
i__8230_10360 = G__10377;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.select.apply(null,a__6538__auto__);
};
var select = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return select__delegate.call(this,args__6537__auto__);};
select.cljs$lang$maxFixedArity = 0;
select.cljs$lang$applyTo = (function (arglist__10378){
var args__6537__auto__ = cljs.core.seq(arglist__10378);
return select__delegate(args__6537__auto__);
});
select.cljs$core$IFn$_invoke$arity$variadic = select__delegate;
return select;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.small = (function() { 
var small__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__8235_10379 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__8236_10380 = null;var count__8237_10381 = 0;var i__8238_10382 = 0;while(true){
if((i__8238_10382 < count__8237_10381))
{var arg__6539__auto___10383 = cljs.core._nth.call(null,chunk__8236_10380,i__8238_10382);a__6538__auto__.push(arg__6539__auto___10383);
{
var G__10384 = seq__8235_10379;
var G__10385 = chunk__8236_10380;
var G__10386 = count__8237_10381;
var G__10387 = (i__8238_10382 + 1);
seq__8235_10379 = G__10384;
chunk__8236_10380 = G__10385;
count__8237_10381 = G__10386;
i__8238_10382 = G__10387;
continue;
}
} else
{var temp__4092__auto___10388 = cljs.core.seq.call(null,seq__8235_10379);if(temp__4092__auto___10388)
{var seq__8235_10389__$1 = temp__4092__auto___10388;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8235_10389__$1))
{var c__5632__auto___10390 = cljs.core.chunk_first.call(null,seq__8235_10389__$1);{
var G__10391 = cljs.core.chunk_rest.call(null,seq__8235_10389__$1);
var G__10392 = c__5632__auto___10390;
var G__10393 = cljs.core.count.call(null,c__5632__auto___10390);
var G__10394 = 0;
seq__8235_10379 = G__10391;
chunk__8236_10380 = G__10392;
count__8237_10381 = G__10393;
i__8238_10382 = G__10394;
continue;
}
} else
{var arg__6539__auto___10395 = cljs.core.first.call(null,seq__8235_10389__$1);a__6538__auto__.push(arg__6539__auto___10395);
{
var G__10396 = cljs.core.next.call(null,seq__8235_10389__$1);
var G__10397 = null;
var G__10398 = 0;
var G__10399 = 0;
seq__8235_10379 = G__10396;
chunk__8236_10380 = G__10397;
count__8237_10381 = G__10398;
i__8238_10382 = G__10399;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.small.apply(null,a__6538__auto__);
};
var small = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return small__delegate.call(this,args__6537__auto__);};
small.cljs$lang$maxFixedArity = 0;
small.cljs$lang$applyTo = (function (arglist__10400){
var args__6537__auto__ = cljs.core.seq(arglist__10400);
return small__delegate(args__6537__auto__);
});
small.cljs$core$IFn$_invoke$arity$variadic = small__delegate;
return small;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.source = (function() { 
var source__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__8243_10401 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__8244_10402 = null;var count__8245_10403 = 0;var i__8246_10404 = 0;while(true){
if((i__8246_10404 < count__8245_10403))
{var arg__6539__auto___10405 = cljs.core._nth.call(null,chunk__8244_10402,i__8246_10404);a__6538__auto__.push(arg__6539__auto___10405);
{
var G__10406 = seq__8243_10401;
var G__10407 = chunk__8244_10402;
var G__10408 = count__8245_10403;
var G__10409 = (i__8246_10404 + 1);
seq__8243_10401 = G__10406;
chunk__8244_10402 = G__10407;
count__8245_10403 = G__10408;
i__8246_10404 = G__10409;
continue;
}
} else
{var temp__4092__auto___10410 = cljs.core.seq.call(null,seq__8243_10401);if(temp__4092__auto___10410)
{var seq__8243_10411__$1 = temp__4092__auto___10410;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8243_10411__$1))
{var c__5632__auto___10412 = cljs.core.chunk_first.call(null,seq__8243_10411__$1);{
var G__10413 = cljs.core.chunk_rest.call(null,seq__8243_10411__$1);
var G__10414 = c__5632__auto___10412;
var G__10415 = cljs.core.count.call(null,c__5632__auto___10412);
var G__10416 = 0;
seq__8243_10401 = G__10413;
chunk__8244_10402 = G__10414;
count__8245_10403 = G__10415;
i__8246_10404 = G__10416;
continue;
}
} else
{var arg__6539__auto___10417 = cljs.core.first.call(null,seq__8243_10411__$1);a__6538__auto__.push(arg__6539__auto___10417);
{
var G__10418 = cljs.core.next.call(null,seq__8243_10411__$1);
var G__10419 = null;
var G__10420 = 0;
var G__10421 = 0;
seq__8243_10401 = G__10418;
chunk__8244_10402 = G__10419;
count__8245_10403 = G__10420;
i__8246_10404 = G__10421;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.source.apply(null,a__6538__auto__);
};
var source = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return source__delegate.call(this,args__6537__auto__);};
source.cljs$lang$maxFixedArity = 0;
source.cljs$lang$applyTo = (function (arglist__10422){
var args__6537__auto__ = cljs.core.seq(arglist__10422);
return source__delegate(args__6537__auto__);
});
source.cljs$core$IFn$_invoke$arity$variadic = source__delegate;
return source;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.span = (function() { 
var span__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__8251_10423 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__8252_10424 = null;var count__8253_10425 = 0;var i__8254_10426 = 0;while(true){
if((i__8254_10426 < count__8253_10425))
{var arg__6539__auto___10427 = cljs.core._nth.call(null,chunk__8252_10424,i__8254_10426);a__6538__auto__.push(arg__6539__auto___10427);
{
var G__10428 = seq__8251_10423;
var G__10429 = chunk__8252_10424;
var G__10430 = count__8253_10425;
var G__10431 = (i__8254_10426 + 1);
seq__8251_10423 = G__10428;
chunk__8252_10424 = G__10429;
count__8253_10425 = G__10430;
i__8254_10426 = G__10431;
continue;
}
} else
{var temp__4092__auto___10432 = cljs.core.seq.call(null,seq__8251_10423);if(temp__4092__auto___10432)
{var seq__8251_10433__$1 = temp__4092__auto___10432;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8251_10433__$1))
{var c__5632__auto___10434 = cljs.core.chunk_first.call(null,seq__8251_10433__$1);{
var G__10435 = cljs.core.chunk_rest.call(null,seq__8251_10433__$1);
var G__10436 = c__5632__auto___10434;
var G__10437 = cljs.core.count.call(null,c__5632__auto___10434);
var G__10438 = 0;
seq__8251_10423 = G__10435;
chunk__8252_10424 = G__10436;
count__8253_10425 = G__10437;
i__8254_10426 = G__10438;
continue;
}
} else
{var arg__6539__auto___10439 = cljs.core.first.call(null,seq__8251_10433__$1);a__6538__auto__.push(arg__6539__auto___10439);
{
var G__10440 = cljs.core.next.call(null,seq__8251_10433__$1);
var G__10441 = null;
var G__10442 = 0;
var G__10443 = 0;
seq__8251_10423 = G__10440;
chunk__8252_10424 = G__10441;
count__8253_10425 = G__10442;
i__8254_10426 = G__10443;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.span.apply(null,a__6538__auto__);
};
var span = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return span__delegate.call(this,args__6537__auto__);};
span.cljs$lang$maxFixedArity = 0;
span.cljs$lang$applyTo = (function (arglist__10444){
var args__6537__auto__ = cljs.core.seq(arglist__10444);
return span__delegate(args__6537__auto__);
});
span.cljs$core$IFn$_invoke$arity$variadic = span__delegate;
return span;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.strong = (function() { 
var strong__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__8259_10445 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__8260_10446 = null;var count__8261_10447 = 0;var i__8262_10448 = 0;while(true){
if((i__8262_10448 < count__8261_10447))
{var arg__6539__auto___10449 = cljs.core._nth.call(null,chunk__8260_10446,i__8262_10448);a__6538__auto__.push(arg__6539__auto___10449);
{
var G__10450 = seq__8259_10445;
var G__10451 = chunk__8260_10446;
var G__10452 = count__8261_10447;
var G__10453 = (i__8262_10448 + 1);
seq__8259_10445 = G__10450;
chunk__8260_10446 = G__10451;
count__8261_10447 = G__10452;
i__8262_10448 = G__10453;
continue;
}
} else
{var temp__4092__auto___10454 = cljs.core.seq.call(null,seq__8259_10445);if(temp__4092__auto___10454)
{var seq__8259_10455__$1 = temp__4092__auto___10454;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8259_10455__$1))
{var c__5632__auto___10456 = cljs.core.chunk_first.call(null,seq__8259_10455__$1);{
var G__10457 = cljs.core.chunk_rest.call(null,seq__8259_10455__$1);
var G__10458 = c__5632__auto___10456;
var G__10459 = cljs.core.count.call(null,c__5632__auto___10456);
var G__10460 = 0;
seq__8259_10445 = G__10457;
chunk__8260_10446 = G__10458;
count__8261_10447 = G__10459;
i__8262_10448 = G__10460;
continue;
}
} else
{var arg__6539__auto___10461 = cljs.core.first.call(null,seq__8259_10455__$1);a__6538__auto__.push(arg__6539__auto___10461);
{
var G__10462 = cljs.core.next.call(null,seq__8259_10455__$1);
var G__10463 = null;
var G__10464 = 0;
var G__10465 = 0;
seq__8259_10445 = G__10462;
chunk__8260_10446 = G__10463;
count__8261_10447 = G__10464;
i__8262_10448 = G__10465;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.strong.apply(null,a__6538__auto__);
};
var strong = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return strong__delegate.call(this,args__6537__auto__);};
strong.cljs$lang$maxFixedArity = 0;
strong.cljs$lang$applyTo = (function (arglist__10466){
var args__6537__auto__ = cljs.core.seq(arglist__10466);
return strong__delegate(args__6537__auto__);
});
strong.cljs$core$IFn$_invoke$arity$variadic = strong__delegate;
return strong;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.style = (function() { 
var style__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__8267_10467 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__8268_10468 = null;var count__8269_10469 = 0;var i__8270_10470 = 0;while(true){
if((i__8270_10470 < count__8269_10469))
{var arg__6539__auto___10471 = cljs.core._nth.call(null,chunk__8268_10468,i__8270_10470);a__6538__auto__.push(arg__6539__auto___10471);
{
var G__10472 = seq__8267_10467;
var G__10473 = chunk__8268_10468;
var G__10474 = count__8269_10469;
var G__10475 = (i__8270_10470 + 1);
seq__8267_10467 = G__10472;
chunk__8268_10468 = G__10473;
count__8269_10469 = G__10474;
i__8270_10470 = G__10475;
continue;
}
} else
{var temp__4092__auto___10476 = cljs.core.seq.call(null,seq__8267_10467);if(temp__4092__auto___10476)
{var seq__8267_10477__$1 = temp__4092__auto___10476;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8267_10477__$1))
{var c__5632__auto___10478 = cljs.core.chunk_first.call(null,seq__8267_10477__$1);{
var G__10479 = cljs.core.chunk_rest.call(null,seq__8267_10477__$1);
var G__10480 = c__5632__auto___10478;
var G__10481 = cljs.core.count.call(null,c__5632__auto___10478);
var G__10482 = 0;
seq__8267_10467 = G__10479;
chunk__8268_10468 = G__10480;
count__8269_10469 = G__10481;
i__8270_10470 = G__10482;
continue;
}
} else
{var arg__6539__auto___10483 = cljs.core.first.call(null,seq__8267_10477__$1);a__6538__auto__.push(arg__6539__auto___10483);
{
var G__10484 = cljs.core.next.call(null,seq__8267_10477__$1);
var G__10485 = null;
var G__10486 = 0;
var G__10487 = 0;
seq__8267_10467 = G__10484;
chunk__8268_10468 = G__10485;
count__8269_10469 = G__10486;
i__8270_10470 = G__10487;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.style.apply(null,a__6538__auto__);
};
var style = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return style__delegate.call(this,args__6537__auto__);};
style.cljs$lang$maxFixedArity = 0;
style.cljs$lang$applyTo = (function (arglist__10488){
var args__6537__auto__ = cljs.core.seq(arglist__10488);
return style__delegate(args__6537__auto__);
});
style.cljs$core$IFn$_invoke$arity$variadic = style__delegate;
return style;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.sub = (function() { 
var sub__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__8275_10489 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__8276_10490 = null;var count__8277_10491 = 0;var i__8278_10492 = 0;while(true){
if((i__8278_10492 < count__8277_10491))
{var arg__6539__auto___10493 = cljs.core._nth.call(null,chunk__8276_10490,i__8278_10492);a__6538__auto__.push(arg__6539__auto___10493);
{
var G__10494 = seq__8275_10489;
var G__10495 = chunk__8276_10490;
var G__10496 = count__8277_10491;
var G__10497 = (i__8278_10492 + 1);
seq__8275_10489 = G__10494;
chunk__8276_10490 = G__10495;
count__8277_10491 = G__10496;
i__8278_10492 = G__10497;
continue;
}
} else
{var temp__4092__auto___10498 = cljs.core.seq.call(null,seq__8275_10489);if(temp__4092__auto___10498)
{var seq__8275_10499__$1 = temp__4092__auto___10498;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8275_10499__$1))
{var c__5632__auto___10500 = cljs.core.chunk_first.call(null,seq__8275_10499__$1);{
var G__10501 = cljs.core.chunk_rest.call(null,seq__8275_10499__$1);
var G__10502 = c__5632__auto___10500;
var G__10503 = cljs.core.count.call(null,c__5632__auto___10500);
var G__10504 = 0;
seq__8275_10489 = G__10501;
chunk__8276_10490 = G__10502;
count__8277_10491 = G__10503;
i__8278_10492 = G__10504;
continue;
}
} else
{var arg__6539__auto___10505 = cljs.core.first.call(null,seq__8275_10499__$1);a__6538__auto__.push(arg__6539__auto___10505);
{
var G__10506 = cljs.core.next.call(null,seq__8275_10499__$1);
var G__10507 = null;
var G__10508 = 0;
var G__10509 = 0;
seq__8275_10489 = G__10506;
chunk__8276_10490 = G__10507;
count__8277_10491 = G__10508;
i__8278_10492 = G__10509;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.sub.apply(null,a__6538__auto__);
};
var sub = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return sub__delegate.call(this,args__6537__auto__);};
sub.cljs$lang$maxFixedArity = 0;
sub.cljs$lang$applyTo = (function (arglist__10510){
var args__6537__auto__ = cljs.core.seq(arglist__10510);
return sub__delegate(args__6537__auto__);
});
sub.cljs$core$IFn$_invoke$arity$variadic = sub__delegate;
return sub;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.summary = (function() { 
var summary__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__8283_10511 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__8284_10512 = null;var count__8285_10513 = 0;var i__8286_10514 = 0;while(true){
if((i__8286_10514 < count__8285_10513))
{var arg__6539__auto___10515 = cljs.core._nth.call(null,chunk__8284_10512,i__8286_10514);a__6538__auto__.push(arg__6539__auto___10515);
{
var G__10516 = seq__8283_10511;
var G__10517 = chunk__8284_10512;
var G__10518 = count__8285_10513;
var G__10519 = (i__8286_10514 + 1);
seq__8283_10511 = G__10516;
chunk__8284_10512 = G__10517;
count__8285_10513 = G__10518;
i__8286_10514 = G__10519;
continue;
}
} else
{var temp__4092__auto___10520 = cljs.core.seq.call(null,seq__8283_10511);if(temp__4092__auto___10520)
{var seq__8283_10521__$1 = temp__4092__auto___10520;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8283_10521__$1))
{var c__5632__auto___10522 = cljs.core.chunk_first.call(null,seq__8283_10521__$1);{
var G__10523 = cljs.core.chunk_rest.call(null,seq__8283_10521__$1);
var G__10524 = c__5632__auto___10522;
var G__10525 = cljs.core.count.call(null,c__5632__auto___10522);
var G__10526 = 0;
seq__8283_10511 = G__10523;
chunk__8284_10512 = G__10524;
count__8285_10513 = G__10525;
i__8286_10514 = G__10526;
continue;
}
} else
{var arg__6539__auto___10527 = cljs.core.first.call(null,seq__8283_10521__$1);a__6538__auto__.push(arg__6539__auto___10527);
{
var G__10528 = cljs.core.next.call(null,seq__8283_10521__$1);
var G__10529 = null;
var G__10530 = 0;
var G__10531 = 0;
seq__8283_10511 = G__10528;
chunk__8284_10512 = G__10529;
count__8285_10513 = G__10530;
i__8286_10514 = G__10531;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.summary.apply(null,a__6538__auto__);
};
var summary = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return summary__delegate.call(this,args__6537__auto__);};
summary.cljs$lang$maxFixedArity = 0;
summary.cljs$lang$applyTo = (function (arglist__10532){
var args__6537__auto__ = cljs.core.seq(arglist__10532);
return summary__delegate(args__6537__auto__);
});
summary.cljs$core$IFn$_invoke$arity$variadic = summary__delegate;
return summary;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.sup = (function() { 
var sup__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__8291_10533 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__8292_10534 = null;var count__8293_10535 = 0;var i__8294_10536 = 0;while(true){
if((i__8294_10536 < count__8293_10535))
{var arg__6539__auto___10537 = cljs.core._nth.call(null,chunk__8292_10534,i__8294_10536);a__6538__auto__.push(arg__6539__auto___10537);
{
var G__10538 = seq__8291_10533;
var G__10539 = chunk__8292_10534;
var G__10540 = count__8293_10535;
var G__10541 = (i__8294_10536 + 1);
seq__8291_10533 = G__10538;
chunk__8292_10534 = G__10539;
count__8293_10535 = G__10540;
i__8294_10536 = G__10541;
continue;
}
} else
{var temp__4092__auto___10542 = cljs.core.seq.call(null,seq__8291_10533);if(temp__4092__auto___10542)
{var seq__8291_10543__$1 = temp__4092__auto___10542;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8291_10543__$1))
{var c__5632__auto___10544 = cljs.core.chunk_first.call(null,seq__8291_10543__$1);{
var G__10545 = cljs.core.chunk_rest.call(null,seq__8291_10543__$1);
var G__10546 = c__5632__auto___10544;
var G__10547 = cljs.core.count.call(null,c__5632__auto___10544);
var G__10548 = 0;
seq__8291_10533 = G__10545;
chunk__8292_10534 = G__10546;
count__8293_10535 = G__10547;
i__8294_10536 = G__10548;
continue;
}
} else
{var arg__6539__auto___10549 = cljs.core.first.call(null,seq__8291_10543__$1);a__6538__auto__.push(arg__6539__auto___10549);
{
var G__10550 = cljs.core.next.call(null,seq__8291_10543__$1);
var G__10551 = null;
var G__10552 = 0;
var G__10553 = 0;
seq__8291_10533 = G__10550;
chunk__8292_10534 = G__10551;
count__8293_10535 = G__10552;
i__8294_10536 = G__10553;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.sup.apply(null,a__6538__auto__);
};
var sup = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return sup__delegate.call(this,args__6537__auto__);};
sup.cljs$lang$maxFixedArity = 0;
sup.cljs$lang$applyTo = (function (arglist__10554){
var args__6537__auto__ = cljs.core.seq(arglist__10554);
return sup__delegate(args__6537__auto__);
});
sup.cljs$core$IFn$_invoke$arity$variadic = sup__delegate;
return sup;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.table = (function() { 
var table__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__8299_10555 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__8300_10556 = null;var count__8301_10557 = 0;var i__8302_10558 = 0;while(true){
if((i__8302_10558 < count__8301_10557))
{var arg__6539__auto___10559 = cljs.core._nth.call(null,chunk__8300_10556,i__8302_10558);a__6538__auto__.push(arg__6539__auto___10559);
{
var G__10560 = seq__8299_10555;
var G__10561 = chunk__8300_10556;
var G__10562 = count__8301_10557;
var G__10563 = (i__8302_10558 + 1);
seq__8299_10555 = G__10560;
chunk__8300_10556 = G__10561;
count__8301_10557 = G__10562;
i__8302_10558 = G__10563;
continue;
}
} else
{var temp__4092__auto___10564 = cljs.core.seq.call(null,seq__8299_10555);if(temp__4092__auto___10564)
{var seq__8299_10565__$1 = temp__4092__auto___10564;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8299_10565__$1))
{var c__5632__auto___10566 = cljs.core.chunk_first.call(null,seq__8299_10565__$1);{
var G__10567 = cljs.core.chunk_rest.call(null,seq__8299_10565__$1);
var G__10568 = c__5632__auto___10566;
var G__10569 = cljs.core.count.call(null,c__5632__auto___10566);
var G__10570 = 0;
seq__8299_10555 = G__10567;
chunk__8300_10556 = G__10568;
count__8301_10557 = G__10569;
i__8302_10558 = G__10570;
continue;
}
} else
{var arg__6539__auto___10571 = cljs.core.first.call(null,seq__8299_10565__$1);a__6538__auto__.push(arg__6539__auto___10571);
{
var G__10572 = cljs.core.next.call(null,seq__8299_10565__$1);
var G__10573 = null;
var G__10574 = 0;
var G__10575 = 0;
seq__8299_10555 = G__10572;
chunk__8300_10556 = G__10573;
count__8301_10557 = G__10574;
i__8302_10558 = G__10575;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.table.apply(null,a__6538__auto__);
};
var table = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return table__delegate.call(this,args__6537__auto__);};
table.cljs$lang$maxFixedArity = 0;
table.cljs$lang$applyTo = (function (arglist__10576){
var args__6537__auto__ = cljs.core.seq(arglist__10576);
return table__delegate(args__6537__auto__);
});
table.cljs$core$IFn$_invoke$arity$variadic = table__delegate;
return table;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.tbody = (function() { 
var tbody__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__8307_10577 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__8308_10578 = null;var count__8309_10579 = 0;var i__8310_10580 = 0;while(true){
if((i__8310_10580 < count__8309_10579))
{var arg__6539__auto___10581 = cljs.core._nth.call(null,chunk__8308_10578,i__8310_10580);a__6538__auto__.push(arg__6539__auto___10581);
{
var G__10582 = seq__8307_10577;
var G__10583 = chunk__8308_10578;
var G__10584 = count__8309_10579;
var G__10585 = (i__8310_10580 + 1);
seq__8307_10577 = G__10582;
chunk__8308_10578 = G__10583;
count__8309_10579 = G__10584;
i__8310_10580 = G__10585;
continue;
}
} else
{var temp__4092__auto___10586 = cljs.core.seq.call(null,seq__8307_10577);if(temp__4092__auto___10586)
{var seq__8307_10587__$1 = temp__4092__auto___10586;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8307_10587__$1))
{var c__5632__auto___10588 = cljs.core.chunk_first.call(null,seq__8307_10587__$1);{
var G__10589 = cljs.core.chunk_rest.call(null,seq__8307_10587__$1);
var G__10590 = c__5632__auto___10588;
var G__10591 = cljs.core.count.call(null,c__5632__auto___10588);
var G__10592 = 0;
seq__8307_10577 = G__10589;
chunk__8308_10578 = G__10590;
count__8309_10579 = G__10591;
i__8310_10580 = G__10592;
continue;
}
} else
{var arg__6539__auto___10593 = cljs.core.first.call(null,seq__8307_10587__$1);a__6538__auto__.push(arg__6539__auto___10593);
{
var G__10594 = cljs.core.next.call(null,seq__8307_10587__$1);
var G__10595 = null;
var G__10596 = 0;
var G__10597 = 0;
seq__8307_10577 = G__10594;
chunk__8308_10578 = G__10595;
count__8309_10579 = G__10596;
i__8310_10580 = G__10597;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.tbody.apply(null,a__6538__auto__);
};
var tbody = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return tbody__delegate.call(this,args__6537__auto__);};
tbody.cljs$lang$maxFixedArity = 0;
tbody.cljs$lang$applyTo = (function (arglist__10598){
var args__6537__auto__ = cljs.core.seq(arglist__10598);
return tbody__delegate(args__6537__auto__);
});
tbody.cljs$core$IFn$_invoke$arity$variadic = tbody__delegate;
return tbody;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.td = (function() { 
var td__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__8315_10599 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__8316_10600 = null;var count__8317_10601 = 0;var i__8318_10602 = 0;while(true){
if((i__8318_10602 < count__8317_10601))
{var arg__6539__auto___10603 = cljs.core._nth.call(null,chunk__8316_10600,i__8318_10602);a__6538__auto__.push(arg__6539__auto___10603);
{
var G__10604 = seq__8315_10599;
var G__10605 = chunk__8316_10600;
var G__10606 = count__8317_10601;
var G__10607 = (i__8318_10602 + 1);
seq__8315_10599 = G__10604;
chunk__8316_10600 = G__10605;
count__8317_10601 = G__10606;
i__8318_10602 = G__10607;
continue;
}
} else
{var temp__4092__auto___10608 = cljs.core.seq.call(null,seq__8315_10599);if(temp__4092__auto___10608)
{var seq__8315_10609__$1 = temp__4092__auto___10608;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8315_10609__$1))
{var c__5632__auto___10610 = cljs.core.chunk_first.call(null,seq__8315_10609__$1);{
var G__10611 = cljs.core.chunk_rest.call(null,seq__8315_10609__$1);
var G__10612 = c__5632__auto___10610;
var G__10613 = cljs.core.count.call(null,c__5632__auto___10610);
var G__10614 = 0;
seq__8315_10599 = G__10611;
chunk__8316_10600 = G__10612;
count__8317_10601 = G__10613;
i__8318_10602 = G__10614;
continue;
}
} else
{var arg__6539__auto___10615 = cljs.core.first.call(null,seq__8315_10609__$1);a__6538__auto__.push(arg__6539__auto___10615);
{
var G__10616 = cljs.core.next.call(null,seq__8315_10609__$1);
var G__10617 = null;
var G__10618 = 0;
var G__10619 = 0;
seq__8315_10599 = G__10616;
chunk__8316_10600 = G__10617;
count__8317_10601 = G__10618;
i__8318_10602 = G__10619;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.td.apply(null,a__6538__auto__);
};
var td = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return td__delegate.call(this,args__6537__auto__);};
td.cljs$lang$maxFixedArity = 0;
td.cljs$lang$applyTo = (function (arglist__10620){
var args__6537__auto__ = cljs.core.seq(arglist__10620);
return td__delegate(args__6537__auto__);
});
td.cljs$core$IFn$_invoke$arity$variadic = td__delegate;
return td;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.textarea = (function() { 
var textarea__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__8323_10621 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__8324_10622 = null;var count__8325_10623 = 0;var i__8326_10624 = 0;while(true){
if((i__8326_10624 < count__8325_10623))
{var arg__6539__auto___10625 = cljs.core._nth.call(null,chunk__8324_10622,i__8326_10624);a__6538__auto__.push(arg__6539__auto___10625);
{
var G__10626 = seq__8323_10621;
var G__10627 = chunk__8324_10622;
var G__10628 = count__8325_10623;
var G__10629 = (i__8326_10624 + 1);
seq__8323_10621 = G__10626;
chunk__8324_10622 = G__10627;
count__8325_10623 = G__10628;
i__8326_10624 = G__10629;
continue;
}
} else
{var temp__4092__auto___10630 = cljs.core.seq.call(null,seq__8323_10621);if(temp__4092__auto___10630)
{var seq__8323_10631__$1 = temp__4092__auto___10630;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8323_10631__$1))
{var c__5632__auto___10632 = cljs.core.chunk_first.call(null,seq__8323_10631__$1);{
var G__10633 = cljs.core.chunk_rest.call(null,seq__8323_10631__$1);
var G__10634 = c__5632__auto___10632;
var G__10635 = cljs.core.count.call(null,c__5632__auto___10632);
var G__10636 = 0;
seq__8323_10621 = G__10633;
chunk__8324_10622 = G__10634;
count__8325_10623 = G__10635;
i__8326_10624 = G__10636;
continue;
}
} else
{var arg__6539__auto___10637 = cljs.core.first.call(null,seq__8323_10631__$1);a__6538__auto__.push(arg__6539__auto___10637);
{
var G__10638 = cljs.core.next.call(null,seq__8323_10631__$1);
var G__10639 = null;
var G__10640 = 0;
var G__10641 = 0;
seq__8323_10621 = G__10638;
chunk__8324_10622 = G__10639;
count__8325_10623 = G__10640;
i__8326_10624 = G__10641;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.textarea.apply(null,a__6538__auto__);
};
var textarea = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return textarea__delegate.call(this,args__6537__auto__);};
textarea.cljs$lang$maxFixedArity = 0;
textarea.cljs$lang$applyTo = (function (arglist__10642){
var args__6537__auto__ = cljs.core.seq(arglist__10642);
return textarea__delegate(args__6537__auto__);
});
textarea.cljs$core$IFn$_invoke$arity$variadic = textarea__delegate;
return textarea;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.tfoot = (function() { 
var tfoot__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__8331_10643 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__8332_10644 = null;var count__8333_10645 = 0;var i__8334_10646 = 0;while(true){
if((i__8334_10646 < count__8333_10645))
{var arg__6539__auto___10647 = cljs.core._nth.call(null,chunk__8332_10644,i__8334_10646);a__6538__auto__.push(arg__6539__auto___10647);
{
var G__10648 = seq__8331_10643;
var G__10649 = chunk__8332_10644;
var G__10650 = count__8333_10645;
var G__10651 = (i__8334_10646 + 1);
seq__8331_10643 = G__10648;
chunk__8332_10644 = G__10649;
count__8333_10645 = G__10650;
i__8334_10646 = G__10651;
continue;
}
} else
{var temp__4092__auto___10652 = cljs.core.seq.call(null,seq__8331_10643);if(temp__4092__auto___10652)
{var seq__8331_10653__$1 = temp__4092__auto___10652;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8331_10653__$1))
{var c__5632__auto___10654 = cljs.core.chunk_first.call(null,seq__8331_10653__$1);{
var G__10655 = cljs.core.chunk_rest.call(null,seq__8331_10653__$1);
var G__10656 = c__5632__auto___10654;
var G__10657 = cljs.core.count.call(null,c__5632__auto___10654);
var G__10658 = 0;
seq__8331_10643 = G__10655;
chunk__8332_10644 = G__10656;
count__8333_10645 = G__10657;
i__8334_10646 = G__10658;
continue;
}
} else
{var arg__6539__auto___10659 = cljs.core.first.call(null,seq__8331_10653__$1);a__6538__auto__.push(arg__6539__auto___10659);
{
var G__10660 = cljs.core.next.call(null,seq__8331_10653__$1);
var G__10661 = null;
var G__10662 = 0;
var G__10663 = 0;
seq__8331_10643 = G__10660;
chunk__8332_10644 = G__10661;
count__8333_10645 = G__10662;
i__8334_10646 = G__10663;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.tfoot.apply(null,a__6538__auto__);
};
var tfoot = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return tfoot__delegate.call(this,args__6537__auto__);};
tfoot.cljs$lang$maxFixedArity = 0;
tfoot.cljs$lang$applyTo = (function (arglist__10664){
var args__6537__auto__ = cljs.core.seq(arglist__10664);
return tfoot__delegate(args__6537__auto__);
});
tfoot.cljs$core$IFn$_invoke$arity$variadic = tfoot__delegate;
return tfoot;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.th = (function() { 
var th__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__8339_10665 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__8340_10666 = null;var count__8341_10667 = 0;var i__8342_10668 = 0;while(true){
if((i__8342_10668 < count__8341_10667))
{var arg__6539__auto___10669 = cljs.core._nth.call(null,chunk__8340_10666,i__8342_10668);a__6538__auto__.push(arg__6539__auto___10669);
{
var G__10670 = seq__8339_10665;
var G__10671 = chunk__8340_10666;
var G__10672 = count__8341_10667;
var G__10673 = (i__8342_10668 + 1);
seq__8339_10665 = G__10670;
chunk__8340_10666 = G__10671;
count__8341_10667 = G__10672;
i__8342_10668 = G__10673;
continue;
}
} else
{var temp__4092__auto___10674 = cljs.core.seq.call(null,seq__8339_10665);if(temp__4092__auto___10674)
{var seq__8339_10675__$1 = temp__4092__auto___10674;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8339_10675__$1))
{var c__5632__auto___10676 = cljs.core.chunk_first.call(null,seq__8339_10675__$1);{
var G__10677 = cljs.core.chunk_rest.call(null,seq__8339_10675__$1);
var G__10678 = c__5632__auto___10676;
var G__10679 = cljs.core.count.call(null,c__5632__auto___10676);
var G__10680 = 0;
seq__8339_10665 = G__10677;
chunk__8340_10666 = G__10678;
count__8341_10667 = G__10679;
i__8342_10668 = G__10680;
continue;
}
} else
{var arg__6539__auto___10681 = cljs.core.first.call(null,seq__8339_10675__$1);a__6538__auto__.push(arg__6539__auto___10681);
{
var G__10682 = cljs.core.next.call(null,seq__8339_10675__$1);
var G__10683 = null;
var G__10684 = 0;
var G__10685 = 0;
seq__8339_10665 = G__10682;
chunk__8340_10666 = G__10683;
count__8341_10667 = G__10684;
i__8342_10668 = G__10685;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.th.apply(null,a__6538__auto__);
};
var th = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return th__delegate.call(this,args__6537__auto__);};
th.cljs$lang$maxFixedArity = 0;
th.cljs$lang$applyTo = (function (arglist__10686){
var args__6537__auto__ = cljs.core.seq(arglist__10686);
return th__delegate(args__6537__auto__);
});
th.cljs$core$IFn$_invoke$arity$variadic = th__delegate;
return th;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.thead = (function() { 
var thead__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__8347_10687 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__8348_10688 = null;var count__8349_10689 = 0;var i__8350_10690 = 0;while(true){
if((i__8350_10690 < count__8349_10689))
{var arg__6539__auto___10691 = cljs.core._nth.call(null,chunk__8348_10688,i__8350_10690);a__6538__auto__.push(arg__6539__auto___10691);
{
var G__10692 = seq__8347_10687;
var G__10693 = chunk__8348_10688;
var G__10694 = count__8349_10689;
var G__10695 = (i__8350_10690 + 1);
seq__8347_10687 = G__10692;
chunk__8348_10688 = G__10693;
count__8349_10689 = G__10694;
i__8350_10690 = G__10695;
continue;
}
} else
{var temp__4092__auto___10696 = cljs.core.seq.call(null,seq__8347_10687);if(temp__4092__auto___10696)
{var seq__8347_10697__$1 = temp__4092__auto___10696;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8347_10697__$1))
{var c__5632__auto___10698 = cljs.core.chunk_first.call(null,seq__8347_10697__$1);{
var G__10699 = cljs.core.chunk_rest.call(null,seq__8347_10697__$1);
var G__10700 = c__5632__auto___10698;
var G__10701 = cljs.core.count.call(null,c__5632__auto___10698);
var G__10702 = 0;
seq__8347_10687 = G__10699;
chunk__8348_10688 = G__10700;
count__8349_10689 = G__10701;
i__8350_10690 = G__10702;
continue;
}
} else
{var arg__6539__auto___10703 = cljs.core.first.call(null,seq__8347_10697__$1);a__6538__auto__.push(arg__6539__auto___10703);
{
var G__10704 = cljs.core.next.call(null,seq__8347_10697__$1);
var G__10705 = null;
var G__10706 = 0;
var G__10707 = 0;
seq__8347_10687 = G__10704;
chunk__8348_10688 = G__10705;
count__8349_10689 = G__10706;
i__8350_10690 = G__10707;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.thead.apply(null,a__6538__auto__);
};
var thead = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return thead__delegate.call(this,args__6537__auto__);};
thead.cljs$lang$maxFixedArity = 0;
thead.cljs$lang$applyTo = (function (arglist__10708){
var args__6537__auto__ = cljs.core.seq(arglist__10708);
return thead__delegate(args__6537__auto__);
});
thead.cljs$core$IFn$_invoke$arity$variadic = thead__delegate;
return thead;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.time = (function() { 
var time__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__8355_10709 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__8356_10710 = null;var count__8357_10711 = 0;var i__8358_10712 = 0;while(true){
if((i__8358_10712 < count__8357_10711))
{var arg__6539__auto___10713 = cljs.core._nth.call(null,chunk__8356_10710,i__8358_10712);a__6538__auto__.push(arg__6539__auto___10713);
{
var G__10714 = seq__8355_10709;
var G__10715 = chunk__8356_10710;
var G__10716 = count__8357_10711;
var G__10717 = (i__8358_10712 + 1);
seq__8355_10709 = G__10714;
chunk__8356_10710 = G__10715;
count__8357_10711 = G__10716;
i__8358_10712 = G__10717;
continue;
}
} else
{var temp__4092__auto___10718 = cljs.core.seq.call(null,seq__8355_10709);if(temp__4092__auto___10718)
{var seq__8355_10719__$1 = temp__4092__auto___10718;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8355_10719__$1))
{var c__5632__auto___10720 = cljs.core.chunk_first.call(null,seq__8355_10719__$1);{
var G__10721 = cljs.core.chunk_rest.call(null,seq__8355_10719__$1);
var G__10722 = c__5632__auto___10720;
var G__10723 = cljs.core.count.call(null,c__5632__auto___10720);
var G__10724 = 0;
seq__8355_10709 = G__10721;
chunk__8356_10710 = G__10722;
count__8357_10711 = G__10723;
i__8358_10712 = G__10724;
continue;
}
} else
{var arg__6539__auto___10725 = cljs.core.first.call(null,seq__8355_10719__$1);a__6538__auto__.push(arg__6539__auto___10725);
{
var G__10726 = cljs.core.next.call(null,seq__8355_10719__$1);
var G__10727 = null;
var G__10728 = 0;
var G__10729 = 0;
seq__8355_10709 = G__10726;
chunk__8356_10710 = G__10727;
count__8357_10711 = G__10728;
i__8358_10712 = G__10729;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.time.apply(null,a__6538__auto__);
};
var time = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return time__delegate.call(this,args__6537__auto__);};
time.cljs$lang$maxFixedArity = 0;
time.cljs$lang$applyTo = (function (arglist__10730){
var args__6537__auto__ = cljs.core.seq(arglist__10730);
return time__delegate(args__6537__auto__);
});
time.cljs$core$IFn$_invoke$arity$variadic = time__delegate;
return time;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.title = (function() { 
var title__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__8363_10731 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__8364_10732 = null;var count__8365_10733 = 0;var i__8366_10734 = 0;while(true){
if((i__8366_10734 < count__8365_10733))
{var arg__6539__auto___10735 = cljs.core._nth.call(null,chunk__8364_10732,i__8366_10734);a__6538__auto__.push(arg__6539__auto___10735);
{
var G__10736 = seq__8363_10731;
var G__10737 = chunk__8364_10732;
var G__10738 = count__8365_10733;
var G__10739 = (i__8366_10734 + 1);
seq__8363_10731 = G__10736;
chunk__8364_10732 = G__10737;
count__8365_10733 = G__10738;
i__8366_10734 = G__10739;
continue;
}
} else
{var temp__4092__auto___10740 = cljs.core.seq.call(null,seq__8363_10731);if(temp__4092__auto___10740)
{var seq__8363_10741__$1 = temp__4092__auto___10740;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8363_10741__$1))
{var c__5632__auto___10742 = cljs.core.chunk_first.call(null,seq__8363_10741__$1);{
var G__10743 = cljs.core.chunk_rest.call(null,seq__8363_10741__$1);
var G__10744 = c__5632__auto___10742;
var G__10745 = cljs.core.count.call(null,c__5632__auto___10742);
var G__10746 = 0;
seq__8363_10731 = G__10743;
chunk__8364_10732 = G__10744;
count__8365_10733 = G__10745;
i__8366_10734 = G__10746;
continue;
}
} else
{var arg__6539__auto___10747 = cljs.core.first.call(null,seq__8363_10741__$1);a__6538__auto__.push(arg__6539__auto___10747);
{
var G__10748 = cljs.core.next.call(null,seq__8363_10741__$1);
var G__10749 = null;
var G__10750 = 0;
var G__10751 = 0;
seq__8363_10731 = G__10748;
chunk__8364_10732 = G__10749;
count__8365_10733 = G__10750;
i__8366_10734 = G__10751;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.title.apply(null,a__6538__auto__);
};
var title = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return title__delegate.call(this,args__6537__auto__);};
title.cljs$lang$maxFixedArity = 0;
title.cljs$lang$applyTo = (function (arglist__10752){
var args__6537__auto__ = cljs.core.seq(arglist__10752);
return title__delegate(args__6537__auto__);
});
title.cljs$core$IFn$_invoke$arity$variadic = title__delegate;
return title;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.tr = (function() { 
var tr__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__8371_10753 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__8372_10754 = null;var count__8373_10755 = 0;var i__8374_10756 = 0;while(true){
if((i__8374_10756 < count__8373_10755))
{var arg__6539__auto___10757 = cljs.core._nth.call(null,chunk__8372_10754,i__8374_10756);a__6538__auto__.push(arg__6539__auto___10757);
{
var G__10758 = seq__8371_10753;
var G__10759 = chunk__8372_10754;
var G__10760 = count__8373_10755;
var G__10761 = (i__8374_10756 + 1);
seq__8371_10753 = G__10758;
chunk__8372_10754 = G__10759;
count__8373_10755 = G__10760;
i__8374_10756 = G__10761;
continue;
}
} else
{var temp__4092__auto___10762 = cljs.core.seq.call(null,seq__8371_10753);if(temp__4092__auto___10762)
{var seq__8371_10763__$1 = temp__4092__auto___10762;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8371_10763__$1))
{var c__5632__auto___10764 = cljs.core.chunk_first.call(null,seq__8371_10763__$1);{
var G__10765 = cljs.core.chunk_rest.call(null,seq__8371_10763__$1);
var G__10766 = c__5632__auto___10764;
var G__10767 = cljs.core.count.call(null,c__5632__auto___10764);
var G__10768 = 0;
seq__8371_10753 = G__10765;
chunk__8372_10754 = G__10766;
count__8373_10755 = G__10767;
i__8374_10756 = G__10768;
continue;
}
} else
{var arg__6539__auto___10769 = cljs.core.first.call(null,seq__8371_10763__$1);a__6538__auto__.push(arg__6539__auto___10769);
{
var G__10770 = cljs.core.next.call(null,seq__8371_10763__$1);
var G__10771 = null;
var G__10772 = 0;
var G__10773 = 0;
seq__8371_10753 = G__10770;
chunk__8372_10754 = G__10771;
count__8373_10755 = G__10772;
i__8374_10756 = G__10773;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.tr.apply(null,a__6538__auto__);
};
var tr = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return tr__delegate.call(this,args__6537__auto__);};
tr.cljs$lang$maxFixedArity = 0;
tr.cljs$lang$applyTo = (function (arglist__10774){
var args__6537__auto__ = cljs.core.seq(arglist__10774);
return tr__delegate(args__6537__auto__);
});
tr.cljs$core$IFn$_invoke$arity$variadic = tr__delegate;
return tr;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.track = (function() { 
var track__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__8379_10775 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__8380_10776 = null;var count__8381_10777 = 0;var i__8382_10778 = 0;while(true){
if((i__8382_10778 < count__8381_10777))
{var arg__6539__auto___10779 = cljs.core._nth.call(null,chunk__8380_10776,i__8382_10778);a__6538__auto__.push(arg__6539__auto___10779);
{
var G__10780 = seq__8379_10775;
var G__10781 = chunk__8380_10776;
var G__10782 = count__8381_10777;
var G__10783 = (i__8382_10778 + 1);
seq__8379_10775 = G__10780;
chunk__8380_10776 = G__10781;
count__8381_10777 = G__10782;
i__8382_10778 = G__10783;
continue;
}
} else
{var temp__4092__auto___10784 = cljs.core.seq.call(null,seq__8379_10775);if(temp__4092__auto___10784)
{var seq__8379_10785__$1 = temp__4092__auto___10784;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8379_10785__$1))
{var c__5632__auto___10786 = cljs.core.chunk_first.call(null,seq__8379_10785__$1);{
var G__10787 = cljs.core.chunk_rest.call(null,seq__8379_10785__$1);
var G__10788 = c__5632__auto___10786;
var G__10789 = cljs.core.count.call(null,c__5632__auto___10786);
var G__10790 = 0;
seq__8379_10775 = G__10787;
chunk__8380_10776 = G__10788;
count__8381_10777 = G__10789;
i__8382_10778 = G__10790;
continue;
}
} else
{var arg__6539__auto___10791 = cljs.core.first.call(null,seq__8379_10785__$1);a__6538__auto__.push(arg__6539__auto___10791);
{
var G__10792 = cljs.core.next.call(null,seq__8379_10785__$1);
var G__10793 = null;
var G__10794 = 0;
var G__10795 = 0;
seq__8379_10775 = G__10792;
chunk__8380_10776 = G__10793;
count__8381_10777 = G__10794;
i__8382_10778 = G__10795;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.track.apply(null,a__6538__auto__);
};
var track = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return track__delegate.call(this,args__6537__auto__);};
track.cljs$lang$maxFixedArity = 0;
track.cljs$lang$applyTo = (function (arglist__10796){
var args__6537__auto__ = cljs.core.seq(arglist__10796);
return track__delegate(args__6537__auto__);
});
track.cljs$core$IFn$_invoke$arity$variadic = track__delegate;
return track;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.u = (function() { 
var u__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__8387_10797 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__8388_10798 = null;var count__8389_10799 = 0;var i__8390_10800 = 0;while(true){
if((i__8390_10800 < count__8389_10799))
{var arg__6539__auto___10801 = cljs.core._nth.call(null,chunk__8388_10798,i__8390_10800);a__6538__auto__.push(arg__6539__auto___10801);
{
var G__10802 = seq__8387_10797;
var G__10803 = chunk__8388_10798;
var G__10804 = count__8389_10799;
var G__10805 = (i__8390_10800 + 1);
seq__8387_10797 = G__10802;
chunk__8388_10798 = G__10803;
count__8389_10799 = G__10804;
i__8390_10800 = G__10805;
continue;
}
} else
{var temp__4092__auto___10806 = cljs.core.seq.call(null,seq__8387_10797);if(temp__4092__auto___10806)
{var seq__8387_10807__$1 = temp__4092__auto___10806;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8387_10807__$1))
{var c__5632__auto___10808 = cljs.core.chunk_first.call(null,seq__8387_10807__$1);{
var G__10809 = cljs.core.chunk_rest.call(null,seq__8387_10807__$1);
var G__10810 = c__5632__auto___10808;
var G__10811 = cljs.core.count.call(null,c__5632__auto___10808);
var G__10812 = 0;
seq__8387_10797 = G__10809;
chunk__8388_10798 = G__10810;
count__8389_10799 = G__10811;
i__8390_10800 = G__10812;
continue;
}
} else
{var arg__6539__auto___10813 = cljs.core.first.call(null,seq__8387_10807__$1);a__6538__auto__.push(arg__6539__auto___10813);
{
var G__10814 = cljs.core.next.call(null,seq__8387_10807__$1);
var G__10815 = null;
var G__10816 = 0;
var G__10817 = 0;
seq__8387_10797 = G__10814;
chunk__8388_10798 = G__10815;
count__8389_10799 = G__10816;
i__8390_10800 = G__10817;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.u.apply(null,a__6538__auto__);
};
var u = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return u__delegate.call(this,args__6537__auto__);};
u.cljs$lang$maxFixedArity = 0;
u.cljs$lang$applyTo = (function (arglist__10818){
var args__6537__auto__ = cljs.core.seq(arglist__10818);
return u__delegate(args__6537__auto__);
});
u.cljs$core$IFn$_invoke$arity$variadic = u__delegate;
return u;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.ul = (function() { 
var ul__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__8395_10819 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__8396_10820 = null;var count__8397_10821 = 0;var i__8398_10822 = 0;while(true){
if((i__8398_10822 < count__8397_10821))
{var arg__6539__auto___10823 = cljs.core._nth.call(null,chunk__8396_10820,i__8398_10822);a__6538__auto__.push(arg__6539__auto___10823);
{
var G__10824 = seq__8395_10819;
var G__10825 = chunk__8396_10820;
var G__10826 = count__8397_10821;
var G__10827 = (i__8398_10822 + 1);
seq__8395_10819 = G__10824;
chunk__8396_10820 = G__10825;
count__8397_10821 = G__10826;
i__8398_10822 = G__10827;
continue;
}
} else
{var temp__4092__auto___10828 = cljs.core.seq.call(null,seq__8395_10819);if(temp__4092__auto___10828)
{var seq__8395_10829__$1 = temp__4092__auto___10828;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8395_10829__$1))
{var c__5632__auto___10830 = cljs.core.chunk_first.call(null,seq__8395_10829__$1);{
var G__10831 = cljs.core.chunk_rest.call(null,seq__8395_10829__$1);
var G__10832 = c__5632__auto___10830;
var G__10833 = cljs.core.count.call(null,c__5632__auto___10830);
var G__10834 = 0;
seq__8395_10819 = G__10831;
chunk__8396_10820 = G__10832;
count__8397_10821 = G__10833;
i__8398_10822 = G__10834;
continue;
}
} else
{var arg__6539__auto___10835 = cljs.core.first.call(null,seq__8395_10829__$1);a__6538__auto__.push(arg__6539__auto___10835);
{
var G__10836 = cljs.core.next.call(null,seq__8395_10829__$1);
var G__10837 = null;
var G__10838 = 0;
var G__10839 = 0;
seq__8395_10819 = G__10836;
chunk__8396_10820 = G__10837;
count__8397_10821 = G__10838;
i__8398_10822 = G__10839;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.ul.apply(null,a__6538__auto__);
};
var ul = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ul__delegate.call(this,args__6537__auto__);};
ul.cljs$lang$maxFixedArity = 0;
ul.cljs$lang$applyTo = (function (arglist__10840){
var args__6537__auto__ = cljs.core.seq(arglist__10840);
return ul__delegate(args__6537__auto__);
});
ul.cljs$core$IFn$_invoke$arity$variadic = ul__delegate;
return ul;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.var$ = (function() { 
var var$__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__8403_10841 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__8404_10842 = null;var count__8405_10843 = 0;var i__8406_10844 = 0;while(true){
if((i__8406_10844 < count__8405_10843))
{var arg__6539__auto___10845 = cljs.core._nth.call(null,chunk__8404_10842,i__8406_10844);a__6538__auto__.push(arg__6539__auto___10845);
{
var G__10846 = seq__8403_10841;
var G__10847 = chunk__8404_10842;
var G__10848 = count__8405_10843;
var G__10849 = (i__8406_10844 + 1);
seq__8403_10841 = G__10846;
chunk__8404_10842 = G__10847;
count__8405_10843 = G__10848;
i__8406_10844 = G__10849;
continue;
}
} else
{var temp__4092__auto___10850 = cljs.core.seq.call(null,seq__8403_10841);if(temp__4092__auto___10850)
{var seq__8403_10851__$1 = temp__4092__auto___10850;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8403_10851__$1))
{var c__5632__auto___10852 = cljs.core.chunk_first.call(null,seq__8403_10851__$1);{
var G__10853 = cljs.core.chunk_rest.call(null,seq__8403_10851__$1);
var G__10854 = c__5632__auto___10852;
var G__10855 = cljs.core.count.call(null,c__5632__auto___10852);
var G__10856 = 0;
seq__8403_10841 = G__10853;
chunk__8404_10842 = G__10854;
count__8405_10843 = G__10855;
i__8406_10844 = G__10856;
continue;
}
} else
{var arg__6539__auto___10857 = cljs.core.first.call(null,seq__8403_10851__$1);a__6538__auto__.push(arg__6539__auto___10857);
{
var G__10858 = cljs.core.next.call(null,seq__8403_10851__$1);
var G__10859 = null;
var G__10860 = 0;
var G__10861 = 0;
seq__8403_10841 = G__10858;
chunk__8404_10842 = G__10859;
count__8405_10843 = G__10860;
i__8406_10844 = G__10861;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.var$.apply(null,a__6538__auto__);
};
var var$ = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return var$__delegate.call(this,args__6537__auto__);};
var$.cljs$lang$maxFixedArity = 0;
var$.cljs$lang$applyTo = (function (arglist__10862){
var args__6537__auto__ = cljs.core.seq(arglist__10862);
return var$__delegate(args__6537__auto__);
});
var$.cljs$core$IFn$_invoke$arity$variadic = var$__delegate;
return var$;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.video = (function() { 
var video__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__8411_10863 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__8412_10864 = null;var count__8413_10865 = 0;var i__8414_10866 = 0;while(true){
if((i__8414_10866 < count__8413_10865))
{var arg__6539__auto___10867 = cljs.core._nth.call(null,chunk__8412_10864,i__8414_10866);a__6538__auto__.push(arg__6539__auto___10867);
{
var G__10868 = seq__8411_10863;
var G__10869 = chunk__8412_10864;
var G__10870 = count__8413_10865;
var G__10871 = (i__8414_10866 + 1);
seq__8411_10863 = G__10868;
chunk__8412_10864 = G__10869;
count__8413_10865 = G__10870;
i__8414_10866 = G__10871;
continue;
}
} else
{var temp__4092__auto___10872 = cljs.core.seq.call(null,seq__8411_10863);if(temp__4092__auto___10872)
{var seq__8411_10873__$1 = temp__4092__auto___10872;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8411_10873__$1))
{var c__5632__auto___10874 = cljs.core.chunk_first.call(null,seq__8411_10873__$1);{
var G__10875 = cljs.core.chunk_rest.call(null,seq__8411_10873__$1);
var G__10876 = c__5632__auto___10874;
var G__10877 = cljs.core.count.call(null,c__5632__auto___10874);
var G__10878 = 0;
seq__8411_10863 = G__10875;
chunk__8412_10864 = G__10876;
count__8413_10865 = G__10877;
i__8414_10866 = G__10878;
continue;
}
} else
{var arg__6539__auto___10879 = cljs.core.first.call(null,seq__8411_10873__$1);a__6538__auto__.push(arg__6539__auto___10879);
{
var G__10880 = cljs.core.next.call(null,seq__8411_10873__$1);
var G__10881 = null;
var G__10882 = 0;
var G__10883 = 0;
seq__8411_10863 = G__10880;
chunk__8412_10864 = G__10881;
count__8413_10865 = G__10882;
i__8414_10866 = G__10883;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.video.apply(null,a__6538__auto__);
};
var video = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return video__delegate.call(this,args__6537__auto__);};
video.cljs$lang$maxFixedArity = 0;
video.cljs$lang$applyTo = (function (arglist__10884){
var args__6537__auto__ = cljs.core.seq(arglist__10884);
return video__delegate(args__6537__auto__);
});
video.cljs$core$IFn$_invoke$arity$variadic = video__delegate;
return video;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.wbr = (function() { 
var wbr__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__8419_10885 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__8420_10886 = null;var count__8421_10887 = 0;var i__8422_10888 = 0;while(true){
if((i__8422_10888 < count__8421_10887))
{var arg__6539__auto___10889 = cljs.core._nth.call(null,chunk__8420_10886,i__8422_10888);a__6538__auto__.push(arg__6539__auto___10889);
{
var G__10890 = seq__8419_10885;
var G__10891 = chunk__8420_10886;
var G__10892 = count__8421_10887;
var G__10893 = (i__8422_10888 + 1);
seq__8419_10885 = G__10890;
chunk__8420_10886 = G__10891;
count__8421_10887 = G__10892;
i__8422_10888 = G__10893;
continue;
}
} else
{var temp__4092__auto___10894 = cljs.core.seq.call(null,seq__8419_10885);if(temp__4092__auto___10894)
{var seq__8419_10895__$1 = temp__4092__auto___10894;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8419_10895__$1))
{var c__5632__auto___10896 = cljs.core.chunk_first.call(null,seq__8419_10895__$1);{
var G__10897 = cljs.core.chunk_rest.call(null,seq__8419_10895__$1);
var G__10898 = c__5632__auto___10896;
var G__10899 = cljs.core.count.call(null,c__5632__auto___10896);
var G__10900 = 0;
seq__8419_10885 = G__10897;
chunk__8420_10886 = G__10898;
count__8421_10887 = G__10899;
i__8422_10888 = G__10900;
continue;
}
} else
{var arg__6539__auto___10901 = cljs.core.first.call(null,seq__8419_10895__$1);a__6538__auto__.push(arg__6539__auto___10901);
{
var G__10902 = cljs.core.next.call(null,seq__8419_10895__$1);
var G__10903 = null;
var G__10904 = 0;
var G__10905 = 0;
seq__8419_10885 = G__10902;
chunk__8420_10886 = G__10903;
count__8421_10887 = G__10904;
i__8422_10888 = G__10905;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.wbr.apply(null,a__6538__auto__);
};
var wbr = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return wbr__delegate.call(this,args__6537__auto__);};
wbr.cljs$lang$maxFixedArity = 0;
wbr.cljs$lang$applyTo = (function (arglist__10906){
var args__6537__auto__ = cljs.core.seq(arglist__10906);
return wbr__delegate(args__6537__auto__);
});
wbr.cljs$core$IFn$_invoke$arity$variadic = wbr__delegate;
return wbr;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.circle = (function() { 
var circle__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__8427_10907 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__8428_10908 = null;var count__8429_10909 = 0;var i__8430_10910 = 0;while(true){
if((i__8430_10910 < count__8429_10909))
{var arg__6539__auto___10911 = cljs.core._nth.call(null,chunk__8428_10908,i__8430_10910);a__6538__auto__.push(arg__6539__auto___10911);
{
var G__10912 = seq__8427_10907;
var G__10913 = chunk__8428_10908;
var G__10914 = count__8429_10909;
var G__10915 = (i__8430_10910 + 1);
seq__8427_10907 = G__10912;
chunk__8428_10908 = G__10913;
count__8429_10909 = G__10914;
i__8430_10910 = G__10915;
continue;
}
} else
{var temp__4092__auto___10916 = cljs.core.seq.call(null,seq__8427_10907);if(temp__4092__auto___10916)
{var seq__8427_10917__$1 = temp__4092__auto___10916;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8427_10917__$1))
{var c__5632__auto___10918 = cljs.core.chunk_first.call(null,seq__8427_10917__$1);{
var G__10919 = cljs.core.chunk_rest.call(null,seq__8427_10917__$1);
var G__10920 = c__5632__auto___10918;
var G__10921 = cljs.core.count.call(null,c__5632__auto___10918);
var G__10922 = 0;
seq__8427_10907 = G__10919;
chunk__8428_10908 = G__10920;
count__8429_10909 = G__10921;
i__8430_10910 = G__10922;
continue;
}
} else
{var arg__6539__auto___10923 = cljs.core.first.call(null,seq__8427_10917__$1);a__6538__auto__.push(arg__6539__auto___10923);
{
var G__10924 = cljs.core.next.call(null,seq__8427_10917__$1);
var G__10925 = null;
var G__10926 = 0;
var G__10927 = 0;
seq__8427_10907 = G__10924;
chunk__8428_10908 = G__10925;
count__8429_10909 = G__10926;
i__8430_10910 = G__10927;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.circle.apply(null,a__6538__auto__);
};
var circle = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return circle__delegate.call(this,args__6537__auto__);};
circle.cljs$lang$maxFixedArity = 0;
circle.cljs$lang$applyTo = (function (arglist__10928){
var args__6537__auto__ = cljs.core.seq(arglist__10928);
return circle__delegate(args__6537__auto__);
});
circle.cljs$core$IFn$_invoke$arity$variadic = circle__delegate;
return circle;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.g = (function() { 
var g__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__8435_10929 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__8436_10930 = null;var count__8437_10931 = 0;var i__8438_10932 = 0;while(true){
if((i__8438_10932 < count__8437_10931))
{var arg__6539__auto___10933 = cljs.core._nth.call(null,chunk__8436_10930,i__8438_10932);a__6538__auto__.push(arg__6539__auto___10933);
{
var G__10934 = seq__8435_10929;
var G__10935 = chunk__8436_10930;
var G__10936 = count__8437_10931;
var G__10937 = (i__8438_10932 + 1);
seq__8435_10929 = G__10934;
chunk__8436_10930 = G__10935;
count__8437_10931 = G__10936;
i__8438_10932 = G__10937;
continue;
}
} else
{var temp__4092__auto___10938 = cljs.core.seq.call(null,seq__8435_10929);if(temp__4092__auto___10938)
{var seq__8435_10939__$1 = temp__4092__auto___10938;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8435_10939__$1))
{var c__5632__auto___10940 = cljs.core.chunk_first.call(null,seq__8435_10939__$1);{
var G__10941 = cljs.core.chunk_rest.call(null,seq__8435_10939__$1);
var G__10942 = c__5632__auto___10940;
var G__10943 = cljs.core.count.call(null,c__5632__auto___10940);
var G__10944 = 0;
seq__8435_10929 = G__10941;
chunk__8436_10930 = G__10942;
count__8437_10931 = G__10943;
i__8438_10932 = G__10944;
continue;
}
} else
{var arg__6539__auto___10945 = cljs.core.first.call(null,seq__8435_10939__$1);a__6538__auto__.push(arg__6539__auto___10945);
{
var G__10946 = cljs.core.next.call(null,seq__8435_10939__$1);
var G__10947 = null;
var G__10948 = 0;
var G__10949 = 0;
seq__8435_10929 = G__10946;
chunk__8436_10930 = G__10947;
count__8437_10931 = G__10948;
i__8438_10932 = G__10949;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.g.apply(null,a__6538__auto__);
};
var g = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return g__delegate.call(this,args__6537__auto__);};
g.cljs$lang$maxFixedArity = 0;
g.cljs$lang$applyTo = (function (arglist__10950){
var args__6537__auto__ = cljs.core.seq(arglist__10950);
return g__delegate(args__6537__auto__);
});
g.cljs$core$IFn$_invoke$arity$variadic = g__delegate;
return g;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.line = (function() { 
var line__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__8443_10951 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__8444_10952 = null;var count__8445_10953 = 0;var i__8446_10954 = 0;while(true){
if((i__8446_10954 < count__8445_10953))
{var arg__6539__auto___10955 = cljs.core._nth.call(null,chunk__8444_10952,i__8446_10954);a__6538__auto__.push(arg__6539__auto___10955);
{
var G__10956 = seq__8443_10951;
var G__10957 = chunk__8444_10952;
var G__10958 = count__8445_10953;
var G__10959 = (i__8446_10954 + 1);
seq__8443_10951 = G__10956;
chunk__8444_10952 = G__10957;
count__8445_10953 = G__10958;
i__8446_10954 = G__10959;
continue;
}
} else
{var temp__4092__auto___10960 = cljs.core.seq.call(null,seq__8443_10951);if(temp__4092__auto___10960)
{var seq__8443_10961__$1 = temp__4092__auto___10960;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8443_10961__$1))
{var c__5632__auto___10962 = cljs.core.chunk_first.call(null,seq__8443_10961__$1);{
var G__10963 = cljs.core.chunk_rest.call(null,seq__8443_10961__$1);
var G__10964 = c__5632__auto___10962;
var G__10965 = cljs.core.count.call(null,c__5632__auto___10962);
var G__10966 = 0;
seq__8443_10951 = G__10963;
chunk__8444_10952 = G__10964;
count__8445_10953 = G__10965;
i__8446_10954 = G__10966;
continue;
}
} else
{var arg__6539__auto___10967 = cljs.core.first.call(null,seq__8443_10961__$1);a__6538__auto__.push(arg__6539__auto___10967);
{
var G__10968 = cljs.core.next.call(null,seq__8443_10961__$1);
var G__10969 = null;
var G__10970 = 0;
var G__10971 = 0;
seq__8443_10951 = G__10968;
chunk__8444_10952 = G__10969;
count__8445_10953 = G__10970;
i__8446_10954 = G__10971;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.line.apply(null,a__6538__auto__);
};
var line = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return line__delegate.call(this,args__6537__auto__);};
line.cljs$lang$maxFixedArity = 0;
line.cljs$lang$applyTo = (function (arglist__10972){
var args__6537__auto__ = cljs.core.seq(arglist__10972);
return line__delegate(args__6537__auto__);
});
line.cljs$core$IFn$_invoke$arity$variadic = line__delegate;
return line;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.path = (function() { 
var path__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__8451_10973 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__8452_10974 = null;var count__8453_10975 = 0;var i__8454_10976 = 0;while(true){
if((i__8454_10976 < count__8453_10975))
{var arg__6539__auto___10977 = cljs.core._nth.call(null,chunk__8452_10974,i__8454_10976);a__6538__auto__.push(arg__6539__auto___10977);
{
var G__10978 = seq__8451_10973;
var G__10979 = chunk__8452_10974;
var G__10980 = count__8453_10975;
var G__10981 = (i__8454_10976 + 1);
seq__8451_10973 = G__10978;
chunk__8452_10974 = G__10979;
count__8453_10975 = G__10980;
i__8454_10976 = G__10981;
continue;
}
} else
{var temp__4092__auto___10982 = cljs.core.seq.call(null,seq__8451_10973);if(temp__4092__auto___10982)
{var seq__8451_10983__$1 = temp__4092__auto___10982;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8451_10983__$1))
{var c__5632__auto___10984 = cljs.core.chunk_first.call(null,seq__8451_10983__$1);{
var G__10985 = cljs.core.chunk_rest.call(null,seq__8451_10983__$1);
var G__10986 = c__5632__auto___10984;
var G__10987 = cljs.core.count.call(null,c__5632__auto___10984);
var G__10988 = 0;
seq__8451_10973 = G__10985;
chunk__8452_10974 = G__10986;
count__8453_10975 = G__10987;
i__8454_10976 = G__10988;
continue;
}
} else
{var arg__6539__auto___10989 = cljs.core.first.call(null,seq__8451_10983__$1);a__6538__auto__.push(arg__6539__auto___10989);
{
var G__10990 = cljs.core.next.call(null,seq__8451_10983__$1);
var G__10991 = null;
var G__10992 = 0;
var G__10993 = 0;
seq__8451_10973 = G__10990;
chunk__8452_10974 = G__10991;
count__8453_10975 = G__10992;
i__8454_10976 = G__10993;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.path.apply(null,a__6538__auto__);
};
var path = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return path__delegate.call(this,args__6537__auto__);};
path.cljs$lang$maxFixedArity = 0;
path.cljs$lang$applyTo = (function (arglist__10994){
var args__6537__auto__ = cljs.core.seq(arglist__10994);
return path__delegate(args__6537__auto__);
});
path.cljs$core$IFn$_invoke$arity$variadic = path__delegate;
return path;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.polygon = (function() { 
var polygon__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__8459_10995 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__8460_10996 = null;var count__8461_10997 = 0;var i__8462_10998 = 0;while(true){
if((i__8462_10998 < count__8461_10997))
{var arg__6539__auto___10999 = cljs.core._nth.call(null,chunk__8460_10996,i__8462_10998);a__6538__auto__.push(arg__6539__auto___10999);
{
var G__11000 = seq__8459_10995;
var G__11001 = chunk__8460_10996;
var G__11002 = count__8461_10997;
var G__11003 = (i__8462_10998 + 1);
seq__8459_10995 = G__11000;
chunk__8460_10996 = G__11001;
count__8461_10997 = G__11002;
i__8462_10998 = G__11003;
continue;
}
} else
{var temp__4092__auto___11004 = cljs.core.seq.call(null,seq__8459_10995);if(temp__4092__auto___11004)
{var seq__8459_11005__$1 = temp__4092__auto___11004;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8459_11005__$1))
{var c__5632__auto___11006 = cljs.core.chunk_first.call(null,seq__8459_11005__$1);{
var G__11007 = cljs.core.chunk_rest.call(null,seq__8459_11005__$1);
var G__11008 = c__5632__auto___11006;
var G__11009 = cljs.core.count.call(null,c__5632__auto___11006);
var G__11010 = 0;
seq__8459_10995 = G__11007;
chunk__8460_10996 = G__11008;
count__8461_10997 = G__11009;
i__8462_10998 = G__11010;
continue;
}
} else
{var arg__6539__auto___11011 = cljs.core.first.call(null,seq__8459_11005__$1);a__6538__auto__.push(arg__6539__auto___11011);
{
var G__11012 = cljs.core.next.call(null,seq__8459_11005__$1);
var G__11013 = null;
var G__11014 = 0;
var G__11015 = 0;
seq__8459_10995 = G__11012;
chunk__8460_10996 = G__11013;
count__8461_10997 = G__11014;
i__8462_10998 = G__11015;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.polygon.apply(null,a__6538__auto__);
};
var polygon = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return polygon__delegate.call(this,args__6537__auto__);};
polygon.cljs$lang$maxFixedArity = 0;
polygon.cljs$lang$applyTo = (function (arglist__11016){
var args__6537__auto__ = cljs.core.seq(arglist__11016);
return polygon__delegate(args__6537__auto__);
});
polygon.cljs$core$IFn$_invoke$arity$variadic = polygon__delegate;
return polygon;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.polyline = (function() { 
var polyline__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__8467_11017 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__8468_11018 = null;var count__8469_11019 = 0;var i__8470_11020 = 0;while(true){
if((i__8470_11020 < count__8469_11019))
{var arg__6539__auto___11021 = cljs.core._nth.call(null,chunk__8468_11018,i__8470_11020);a__6538__auto__.push(arg__6539__auto___11021);
{
var G__11022 = seq__8467_11017;
var G__11023 = chunk__8468_11018;
var G__11024 = count__8469_11019;
var G__11025 = (i__8470_11020 + 1);
seq__8467_11017 = G__11022;
chunk__8468_11018 = G__11023;
count__8469_11019 = G__11024;
i__8470_11020 = G__11025;
continue;
}
} else
{var temp__4092__auto___11026 = cljs.core.seq.call(null,seq__8467_11017);if(temp__4092__auto___11026)
{var seq__8467_11027__$1 = temp__4092__auto___11026;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8467_11027__$1))
{var c__5632__auto___11028 = cljs.core.chunk_first.call(null,seq__8467_11027__$1);{
var G__11029 = cljs.core.chunk_rest.call(null,seq__8467_11027__$1);
var G__11030 = c__5632__auto___11028;
var G__11031 = cljs.core.count.call(null,c__5632__auto___11028);
var G__11032 = 0;
seq__8467_11017 = G__11029;
chunk__8468_11018 = G__11030;
count__8469_11019 = G__11031;
i__8470_11020 = G__11032;
continue;
}
} else
{var arg__6539__auto___11033 = cljs.core.first.call(null,seq__8467_11027__$1);a__6538__auto__.push(arg__6539__auto___11033);
{
var G__11034 = cljs.core.next.call(null,seq__8467_11027__$1);
var G__11035 = null;
var G__11036 = 0;
var G__11037 = 0;
seq__8467_11017 = G__11034;
chunk__8468_11018 = G__11035;
count__8469_11019 = G__11036;
i__8470_11020 = G__11037;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.polyline.apply(null,a__6538__auto__);
};
var polyline = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return polyline__delegate.call(this,args__6537__auto__);};
polyline.cljs$lang$maxFixedArity = 0;
polyline.cljs$lang$applyTo = (function (arglist__11038){
var args__6537__auto__ = cljs.core.seq(arglist__11038);
return polyline__delegate(args__6537__auto__);
});
polyline.cljs$core$IFn$_invoke$arity$variadic = polyline__delegate;
return polyline;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.rect = (function() { 
var rect__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__8475_11039 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__8476_11040 = null;var count__8477_11041 = 0;var i__8478_11042 = 0;while(true){
if((i__8478_11042 < count__8477_11041))
{var arg__6539__auto___11043 = cljs.core._nth.call(null,chunk__8476_11040,i__8478_11042);a__6538__auto__.push(arg__6539__auto___11043);
{
var G__11044 = seq__8475_11039;
var G__11045 = chunk__8476_11040;
var G__11046 = count__8477_11041;
var G__11047 = (i__8478_11042 + 1);
seq__8475_11039 = G__11044;
chunk__8476_11040 = G__11045;
count__8477_11041 = G__11046;
i__8478_11042 = G__11047;
continue;
}
} else
{var temp__4092__auto___11048 = cljs.core.seq.call(null,seq__8475_11039);if(temp__4092__auto___11048)
{var seq__8475_11049__$1 = temp__4092__auto___11048;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8475_11049__$1))
{var c__5632__auto___11050 = cljs.core.chunk_first.call(null,seq__8475_11049__$1);{
var G__11051 = cljs.core.chunk_rest.call(null,seq__8475_11049__$1);
var G__11052 = c__5632__auto___11050;
var G__11053 = cljs.core.count.call(null,c__5632__auto___11050);
var G__11054 = 0;
seq__8475_11039 = G__11051;
chunk__8476_11040 = G__11052;
count__8477_11041 = G__11053;
i__8478_11042 = G__11054;
continue;
}
} else
{var arg__6539__auto___11055 = cljs.core.first.call(null,seq__8475_11049__$1);a__6538__auto__.push(arg__6539__auto___11055);
{
var G__11056 = cljs.core.next.call(null,seq__8475_11049__$1);
var G__11057 = null;
var G__11058 = 0;
var G__11059 = 0;
seq__8475_11039 = G__11056;
chunk__8476_11040 = G__11057;
count__8477_11041 = G__11058;
i__8478_11042 = G__11059;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.rect.apply(null,a__6538__auto__);
};
var rect = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return rect__delegate.call(this,args__6537__auto__);};
rect.cljs$lang$maxFixedArity = 0;
rect.cljs$lang$applyTo = (function (arglist__11060){
var args__6537__auto__ = cljs.core.seq(arglist__11060);
return rect__delegate(args__6537__auto__);
});
rect.cljs$core$IFn$_invoke$arity$variadic = rect__delegate;
return rect;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.svg = (function() { 
var svg__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__8483_11061 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__8484_11062 = null;var count__8485_11063 = 0;var i__8486_11064 = 0;while(true){
if((i__8486_11064 < count__8485_11063))
{var arg__6539__auto___11065 = cljs.core._nth.call(null,chunk__8484_11062,i__8486_11064);a__6538__auto__.push(arg__6539__auto___11065);
{
var G__11066 = seq__8483_11061;
var G__11067 = chunk__8484_11062;
var G__11068 = count__8485_11063;
var G__11069 = (i__8486_11064 + 1);
seq__8483_11061 = G__11066;
chunk__8484_11062 = G__11067;
count__8485_11063 = G__11068;
i__8486_11064 = G__11069;
continue;
}
} else
{var temp__4092__auto___11070 = cljs.core.seq.call(null,seq__8483_11061);if(temp__4092__auto___11070)
{var seq__8483_11071__$1 = temp__4092__auto___11070;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8483_11071__$1))
{var c__5632__auto___11072 = cljs.core.chunk_first.call(null,seq__8483_11071__$1);{
var G__11073 = cljs.core.chunk_rest.call(null,seq__8483_11071__$1);
var G__11074 = c__5632__auto___11072;
var G__11075 = cljs.core.count.call(null,c__5632__auto___11072);
var G__11076 = 0;
seq__8483_11061 = G__11073;
chunk__8484_11062 = G__11074;
count__8485_11063 = G__11075;
i__8486_11064 = G__11076;
continue;
}
} else
{var arg__6539__auto___11077 = cljs.core.first.call(null,seq__8483_11071__$1);a__6538__auto__.push(arg__6539__auto___11077);
{
var G__11078 = cljs.core.next.call(null,seq__8483_11071__$1);
var G__11079 = null;
var G__11080 = 0;
var G__11081 = 0;
seq__8483_11061 = G__11078;
chunk__8484_11062 = G__11079;
count__8485_11063 = G__11080;
i__8486_11064 = G__11081;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.svg.apply(null,a__6538__auto__);
};
var svg = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return svg__delegate.call(this,args__6537__auto__);};
svg.cljs$lang$maxFixedArity = 0;
svg.cljs$lang$applyTo = (function (arglist__11082){
var args__6537__auto__ = cljs.core.seq(arglist__11082);
return svg__delegate(args__6537__auto__);
});
svg.cljs$core$IFn$_invoke$arity$variadic = svg__delegate;
return svg;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.text = (function() { 
var text__delegate = function (args__6537__auto__){var a__6538__auto__ = [];a__6538__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6537__auto__)));
var seq__7795_11083 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6537__auto__));var chunk__7796_11084 = null;var count__7797_11085 = 0;var i__7798_11086 = 0;while(true){
if((i__7798_11086 < count__7797_11085))
{var arg__6539__auto___11087 = cljs.core._nth.call(null,chunk__7796_11084,i__7798_11086);a__6538__auto__.push(arg__6539__auto___11087);
{
var G__11088 = seq__7795_11083;
var G__11089 = chunk__7796_11084;
var G__11090 = count__7797_11085;
var G__11091 = (i__7798_11086 + 1);
seq__7795_11083 = G__11088;
chunk__7796_11084 = G__11089;
count__7797_11085 = G__11090;
i__7798_11086 = G__11091;
continue;
}
} else
{var temp__4092__auto___11092 = cljs.core.seq.call(null,seq__7795_11083);if(temp__4092__auto___11092)
{var seq__7795_11093__$1 = temp__4092__auto___11092;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7795_11093__$1))
{var c__5632__auto___11094 = cljs.core.chunk_first.call(null,seq__7795_11093__$1);{
var G__11095 = cljs.core.chunk_rest.call(null,seq__7795_11093__$1);
var G__11096 = c__5632__auto___11094;
var G__11097 = cljs.core.count.call(null,c__5632__auto___11094);
var G__11098 = 0;
seq__7795_11083 = G__11095;
chunk__7796_11084 = G__11096;
count__7797_11085 = G__11097;
i__7798_11086 = G__11098;
continue;
}
} else
{var arg__6539__auto___11099 = cljs.core.first.call(null,seq__7795_11093__$1);a__6538__auto__.push(arg__6539__auto___11099);
{
var G__11100 = cljs.core.next.call(null,seq__7795_11093__$1);
var G__11101 = null;
var G__11102 = 0;
var G__11103 = 0;
seq__7795_11083 = G__11100;
chunk__7796_11084 = G__11101;
count__7797_11085 = G__11102;
i__7798_11086 = G__11103;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.text.apply(null,a__6538__auto__);
};
var text = function (var_args){
var args__6537__auto__ = null;if (arguments.length > 0) {
  args__6537__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return text__delegate.call(this,args__6537__auto__);};
text.cljs$lang$maxFixedArity = 0;
text.cljs$lang$applyTo = (function (arglist__11104){
var args__6537__auto__ = cljs.core.seq(arglist__11104);
return text__delegate(args__6537__auto__);
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
lt.plugins.elm_light.autocompleter.handle_keypress = (function handle_keypress(p__7513,ev){var map__7516 = p__7513;var map__7516__$1 = ((cljs.core.seq_QMARK_.call(null,map__7516))?cljs.core.apply.call(null,cljs.core.hash_map,map__7516):map__7516);var props = map__7516__$1;var on_cancel = cljs.core.get.call(null,map__7516__$1,new cljs.core.Keyword(null,"on-cancel","on-cancel",600765850));var on_select = cljs.core.get.call(null,map__7516__$1,new cljs.core.Keyword(null,"on-select","on-select",1062468636));var on_down = cljs.core.get.call(null,map__7516__$1,new cljs.core.Keyword(null,"on-down","on-down",3936419650));var on_up = cljs.core.get.call(null,map__7516__$1,new cljs.core.Keyword(null,"on-up","on-up",1119739067));var kk = ev.which;var G__7517 = kk;if(cljs.core._EQ_.call(null,27,G__7517))
{ev.preventDefault();
ev.target.value = "";
return on_cancel.call(null);
} else
{if(cljs.core._EQ_.call(null,13,G__7517))
{ev.preventDefault();
var temp__4092__auto___7533 = lt.plugins.elm_light.autocompleter.find_active.call(null,new cljs.core.Keyword(null,"items","items",1114430258).cljs$core$IFn$_invoke$arity$1(props));if(cljs.core.truth_(temp__4092__auto___7533))
{var active_7534 = temp__4092__auto___7533;ev.target.value = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(active_7534);
} else
{}
return on_select.call(null);
} else
{if(cljs.core._EQ_.call(null,40,G__7517))
{ev.preventDefault();
return on_down.call(null);
} else
{if(cljs.core._EQ_.call(null,38,G__7517))
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
return (function (p1__7518_SHARP_){return "autocomplete-dropdown-item row".concat((cljs.core.truth_(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(p1__7518_SHARP_))?" autocomplete-active":""));
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
lt.plugins.elm_light.autocompleter.Adder = quiescent.component.call(null,(function (p__7519){var map__7520 = p__7519;var map__7520__$1 = ((cljs.core.seq_QMARK_.call(null,map__7520))?cljs.core.apply.call(null,cljs.core.hash_map,map__7520):map__7520);var props = map__7520__$1;var disabled = cljs.core.get.call(null,map__7520__$1,new cljs.core.Keyword(null,"disabled","disabled",1284845038));var on_add_package = cljs.core.get.call(null,map__7520__$1,new cljs.core.Keyword(null,"on-add-package","on-add-package",3601701790));return quiescent.dom.button.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",1004015509),"btn",new cljs.core.Keyword(null,"disabled","disabled",1284845038),disabled,new cljs.core.Keyword(null,"onClick","onClick",3956969051),((function (map__7520,map__7520__$1,props,disabled,on_add_package){
return (function (){return on_add_package.call(null);
});})(map__7520,map__7520__$1,props,disabled,on_add_package))
], null),"Add package");
}));
/**
* 
*/
lt.plugins.elm_light.autocompleter.Versions = quiescent.component.call(null,(function (props){return cljs.core.apply.call(null,quiescent.dom.select,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",1004015509),"versions",new cljs.core.Keyword(null,"value","value",1125876963),new cljs.core.Keyword(null,"version","version",1365512266).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"onChange","onChange",2050678241),(function (p1__7521_SHARP_){return new cljs.core.Keyword(null,"on-change-version","on-change-version",822058203).cljs$core$IFn$_invoke$arity$1(props).call(null,p1__7521_SHARP_.target.value);
})], null),cljs.core.map.call(null,(function (p1__7522_SHARP_){return quiescent.dom.option.call(null,cljs.core.PersistentArrayMap.EMPTY,p1__7522_SHARP_);
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
clojure.walk.keywordize_keys = (function keywordize_keys(m){var f = (function (p__11528){var vec__11529 = p__11528;var k = cljs.core.nth.call(null,vec__11529,0,null);var v = cljs.core.nth.call(null,vec__11529,1,null);if(typeof k === 'string')
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
clojure.walk.stringify_keys = (function stringify_keys(m){var f = (function (p__11532){var vec__11533 = p__11532;var k = cljs.core.nth.call(null,vec__11533,0,null);var v = cljs.core.nth.call(null,vec__11533,1,null);if((k instanceof cljs.core.Keyword))
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
lt.plugins.elm_light.utils.find_symbol = (function find_symbol(ed,pos){var curr_tok = lt.objs.editor.__GT_token.call(null,ed,pos);var G__11556 = new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(curr_tok);if(cljs.core._EQ_.call(null,"variable",G__11556))
{return [cljs.core.str(find_symbol.call(null,ed,cljs.core.assoc.call(null,pos,new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(curr_tok)))),cljs.core.str(new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(curr_tok))].join('');
} else
{if(cljs.core._EQ_.call(null,"qualifier",G__11556))
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
return (function (p__11563){var vec__11564 = p__11563;var _ = cljs.core.nth.call(null,vec__11564,0,null);var vs = cljs.core.nth.call(null,vec__11564,1,null);return cljs.core.apply.call(null,cljs.core.merge,vs);
});})(pkg_json,deps_json))
,cljs.core.group_by.call(null,new cljs.core.Keyword(null,"package","package",4501809080),cljs.core.concat.call(null,cljs.core.mapv.call(null,((function (pkg_json,deps_json){
return (function (p__11565){var vec__11566 = p__11565;var k = cljs.core.nth.call(null,vec__11566,0,null);var v = cljs.core.nth.call(null,vec__11566,1,null);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"package","package",4501809080),lt.plugins.elm_light.utils.nskw__GT_name.call(null,k),new cljs.core.Keyword(null,"exact","exact",1110851185),v], null);
});})(pkg_json,deps_json))
,lt.plugins.elm_light.utils.parse_json_file.call(null,deps_json)),cljs.core.mapv.call(null,((function (pkg_json,deps_json){
return (function (p__11567){var vec__11568 = p__11567;var k = cljs.core.nth.call(null,vec__11568,0,null);var v = cljs.core.nth.call(null,vec__11568,1,null);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"package","package",4501809080),lt.plugins.elm_light.utils.nskw__GT_name.call(null,k),new cljs.core.Keyword(null,"range","range",1122184367),v], null);
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
lt.plugins.elm_light.graph.find_package_by_name = (function find_package_by_name(this$,name){return cljs.core.some.call(null,(function (p1__11187_SHARP_){if(cljs.core._EQ_.call(null,lt.plugins.elm_light.graph.lower.call(null,new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(p1__11187_SHARP_)),lt.plugins.elm_light.graph.lower.call(null,name)))
{return p1__11187_SHARP_;
} else
{return null;
}
}),new cljs.core.Keyword(null,"all-packages","all-packages",1123981067).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
});
lt.plugins.elm_light.graph.dependency_graph_ui = (function dependency_graph_ui(this$){var e__6289__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.graph","div.graph",2030351651),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dependency-graph","div.dependency-graph",3039800187),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg:svg","svg:svg",3472817088),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",1127031096),"650",new cljs.core.Keyword(null,"height","height",4087841945),"680"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg:g","svg:g",1123725379),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",2066570974),"translate(20,20)"], null)], null)], null)], null)], null));var seq__11194_11245 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__11195_11246 = null;var count__11196_11247 = 0;var i__11197_11248 = 0;while(true){
if((i__11197_11248 < count__11196_11247))
{var vec__11198_11249 = cljs.core._nth.call(null,chunk__11195_11246,i__11197_11248);var ev__6290__auto___11250 = cljs.core.nth.call(null,vec__11198_11249,0,null);var func__6291__auto___11251 = cljs.core.nth.call(null,vec__11198_11249,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___11250,func__6291__auto___11251);
{
var G__11252 = seq__11194_11245;
var G__11253 = chunk__11195_11246;
var G__11254 = count__11196_11247;
var G__11255 = (i__11197_11248 + 1);
seq__11194_11245 = G__11252;
chunk__11195_11246 = G__11253;
count__11196_11247 = G__11254;
i__11197_11248 = G__11255;
continue;
}
} else
{var temp__4092__auto___11256 = cljs.core.seq.call(null,seq__11194_11245);if(temp__4092__auto___11256)
{var seq__11194_11257__$1 = temp__4092__auto___11256;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11194_11257__$1))
{var c__5632__auto___11258 = cljs.core.chunk_first.call(null,seq__11194_11257__$1);{
var G__11259 = cljs.core.chunk_rest.call(null,seq__11194_11257__$1);
var G__11260 = c__5632__auto___11258;
var G__11261 = cljs.core.count.call(null,c__5632__auto___11258);
var G__11262 = 0;
seq__11194_11245 = G__11259;
chunk__11195_11246 = G__11260;
count__11196_11247 = G__11261;
i__11197_11248 = G__11262;
continue;
}
} else
{var vec__11199_11263 = cljs.core.first.call(null,seq__11194_11257__$1);var ev__6290__auto___11264 = cljs.core.nth.call(null,vec__11199_11263,0,null);var func__6291__auto___11265 = cljs.core.nth.call(null,vec__11199_11263,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___11264,func__6291__auto___11265);
{
var G__11266 = cljs.core.next.call(null,seq__11194_11257__$1);
var G__11267 = null;
var G__11268 = 0;
var G__11269 = 0;
seq__11194_11245 = G__11266;
chunk__11195_11246 = G__11267;
count__11196_11247 = G__11268;
i__11197_11248 = G__11269;
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
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.graph","dependency-graph","lt.plugins.elm-light.graph/dependency-graph",2371711049),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elm.graph.dependency","elm.graph.dependency",658564005)], null),new cljs.core.Keyword(null,"name","name",1017277949),"Dependency graph",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){lt.plugins.elm_light.utils.fetch_all_packages.call(null,(function (p1__11200_SHARP_){return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"all-packages","all-packages",1123981067),p1__11200_SHARP_], null));
}));
return lt.plugins.elm_light.graph.dependency_graph_ui.call(null,this$);
}));
lt.plugins.elm_light.graph.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___11270 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___11270))
{var ts_11271 = temp__4092__auto___11270;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_11271))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_11271);
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
lt.plugins.elm_light.graph.create_graph = (function create_graph(data){var g = (new lt.plugins.elm_light.graph.dagreD3.graphlib.Graph()).setGraph({});var seq__11209_11272 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"nodes","nodes",1118897699).cljs$core$IFn$_invoke$arity$1(data));var chunk__11210_11273 = null;var count__11211_11274 = 0;var i__11212_11275 = 0;while(true){
if((i__11212_11275 < count__11211_11274))
{var x_11276 = cljs.core._nth.call(null,chunk__11210_11273,i__11212_11275);g.setNode(lt.plugins.elm_light.graph.dep_id.call(null,x_11276),lt.plugins.elm_light.graph.node_label.call(null,x_11276));
{
var G__11277 = seq__11209_11272;
var G__11278 = chunk__11210_11273;
var G__11279 = count__11211_11274;
var G__11280 = (i__11212_11275 + 1);
seq__11209_11272 = G__11277;
chunk__11210_11273 = G__11278;
count__11211_11274 = G__11279;
i__11212_11275 = G__11280;
continue;
}
} else
{var temp__4092__auto___11281 = cljs.core.seq.call(null,seq__11209_11272);if(temp__4092__auto___11281)
{var seq__11209_11282__$1 = temp__4092__auto___11281;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11209_11282__$1))
{var c__5632__auto___11283 = cljs.core.chunk_first.call(null,seq__11209_11282__$1);{
var G__11284 = cljs.core.chunk_rest.call(null,seq__11209_11282__$1);
var G__11285 = c__5632__auto___11283;
var G__11286 = cljs.core.count.call(null,c__5632__auto___11283);
var G__11287 = 0;
seq__11209_11272 = G__11284;
chunk__11210_11273 = G__11285;
count__11211_11274 = G__11286;
i__11212_11275 = G__11287;
continue;
}
} else
{var x_11288 = cljs.core.first.call(null,seq__11209_11282__$1);g.setNode(lt.plugins.elm_light.graph.dep_id.call(null,x_11288),lt.plugins.elm_light.graph.node_label.call(null,x_11288));
{
var G__11289 = cljs.core.next.call(null,seq__11209_11282__$1);
var G__11290 = null;
var G__11291 = 0;
var G__11292 = 0;
seq__11209_11272 = G__11289;
chunk__11210_11273 = G__11290;
count__11211_11274 = G__11291;
i__11212_11275 = G__11292;
continue;
}
}
} else
{}
}
break;
}
var seq__11213_11293 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"edges","edges",1110261192).cljs$core$IFn$_invoke$arity$1(data));var chunk__11214_11294 = null;var count__11215_11295 = 0;var i__11216_11296 = 0;while(true){
if((i__11216_11296 < count__11215_11295))
{var x_11297 = cljs.core._nth.call(null,chunk__11214_11294,i__11216_11296);g.setEdge(new cljs.core.Keyword(null,"a","a",1013904339).cljs$core$IFn$_invoke$arity$1(x_11297),new cljs.core.Keyword(null,"b","b",1013904340).cljs$core$IFn$_invoke$arity$1(x_11297),{"style": (cljs.core.truth_(new cljs.core.Keyword(null,"transitive","transitive",3584713111).cljs$core$IFn$_invoke$arity$1(x_11297))?"stroke-dasharray: 5, 5;":null), "label": new cljs.core.Keyword(null,"label","label",1116631654).cljs$core$IFn$_invoke$arity$1(x_11297)});
{
var G__11298 = seq__11213_11293;
var G__11299 = chunk__11214_11294;
var G__11300 = count__11215_11295;
var G__11301 = (i__11216_11296 + 1);
seq__11213_11293 = G__11298;
chunk__11214_11294 = G__11299;
count__11215_11295 = G__11300;
i__11216_11296 = G__11301;
continue;
}
} else
{var temp__4092__auto___11302 = cljs.core.seq.call(null,seq__11213_11293);if(temp__4092__auto___11302)
{var seq__11213_11303__$1 = temp__4092__auto___11302;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11213_11303__$1))
{var c__5632__auto___11304 = cljs.core.chunk_first.call(null,seq__11213_11303__$1);{
var G__11305 = cljs.core.chunk_rest.call(null,seq__11213_11303__$1);
var G__11306 = c__5632__auto___11304;
var G__11307 = cljs.core.count.call(null,c__5632__auto___11304);
var G__11308 = 0;
seq__11213_11293 = G__11305;
chunk__11214_11294 = G__11306;
count__11215_11295 = G__11307;
i__11216_11296 = G__11308;
continue;
}
} else
{var x_11309 = cljs.core.first.call(null,seq__11213_11303__$1);g.setEdge(new cljs.core.Keyword(null,"a","a",1013904339).cljs$core$IFn$_invoke$arity$1(x_11309),new cljs.core.Keyword(null,"b","b",1013904340).cljs$core$IFn$_invoke$arity$1(x_11309),{"style": (cljs.core.truth_(new cljs.core.Keyword(null,"transitive","transitive",3584713111).cljs$core$IFn$_invoke$arity$1(x_11309))?"stroke-dasharray: 5, 5;":null), "label": new cljs.core.Keyword(null,"label","label",1116631654).cljs$core$IFn$_invoke$arity$1(x_11309)});
{
var G__11310 = cljs.core.next.call(null,seq__11213_11303__$1);
var G__11311 = null;
var G__11312 = 0;
var G__11313 = 0;
seq__11213_11293 = G__11310;
chunk__11214_11294 = G__11311;
count__11215_11295 = G__11312;
i__11216_11296 = G__11313;
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
}),cljs.core.map.call(null,(function (p__11221){var vec__11222 = p__11221;var k = cljs.core.nth.call(null,vec__11222,0,null);var v = cljs.core.nth.call(null,vec__11222,1,null);return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"package","package",4501809080),new cljs.core.Keyword(null,"range","range",1122184367),new cljs.core.Keyword(null,"version","version",1365512266)],[lt.plugins.elm_light.utils.nskw__GT_name.call(null,k),v,new cljs.core.Keyword(null,"version","version",1365512266).cljs$core$IFn$_invoke$arity$1(cljs.core.some.call(null,((function (vec__11222,k,v){
return (function (p1__11217_SHARP_){if(cljs.core._EQ_.call(null,lt.plugins.elm_light.utils.nskw__GT_name.call(null,k),new cljs.core.Keyword(null,"package","package",4501809080).cljs$core$IFn$_invoke$arity$1(p1__11217_SHARP_)))
{return p1__11217_SHARP_;
} else
{return null;
}
});})(vec__11222,k,v))
,new cljs.core.Keyword(null,"packages","packages",1764771935).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))))]);
}),new cljs.core.Keyword(null,"dependencies","dependencies",1517678747).cljs$core$IFn$_invoke$arity$1(pkg_json))));if(temp__4092__auto__)
{var edges = temp__4092__auto__;lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",1016980252),new cljs.core.Keyword(null,"edges","edges",1110261192)], null),((function (edges,temp__4092__auto__){
return (function (p1__11218_SHARP_){return cljs.core.concat.call(null,p1__11218_SHARP_,edges);
});})(edges,temp__4092__auto__))
);
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"elm.graph.render","elm.graph.render",2076182000));
} else
{return null;
}
});
lt.plugins.elm_light.graph.__BEH__on_get_transitives = (function __BEH__on_get_transitives(this$){var transitives = cljs.core.remove.call(null,new cljs.core.Keyword(null,"range","range",1122184367),new cljs.core.Keyword(null,"packages","packages",1764771935).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))));lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",1016980252),new cljs.core.Keyword(null,"nodes","nodes",1118897699)], null),((function (transitives){
return (function (p1__11223_SHARP_){return cljs.core.concat.call(null,p1__11223_SHARP_,transitives);
});})(transitives))
);
lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"elm.graph.render","elm.graph.render",2076182000));
var seq__11228 = cljs.core.seq.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"version","version",1365512266),new cljs.core.Keyword(null,"packages","packages",1764771935).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))));var chunk__11229 = null;var count__11230 = 0;var i__11231 = 0;while(true){
if((i__11231 < count__11230))
{var x = cljs.core._nth.call(null,chunk__11229,i__11231);lt.plugins.elm_light.graph.get_package_json.call(null,x,cljs.core.partial.call(null,lt.plugins.elm_light.graph.add_edges_for_dep,this$,x));
{
var G__11314 = seq__11228;
var G__11315 = chunk__11229;
var G__11316 = count__11230;
var G__11317 = (i__11231 + 1);
seq__11228 = G__11314;
chunk__11229 = G__11315;
count__11230 = G__11316;
i__11231 = G__11317;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__11228);if(temp__4092__auto__)
{var seq__11228__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11228__$1))
{var c__5632__auto__ = cljs.core.chunk_first.call(null,seq__11228__$1);{
var G__11318 = cljs.core.chunk_rest.call(null,seq__11228__$1);
var G__11319 = c__5632__auto__;
var G__11320 = cljs.core.count.call(null,c__5632__auto__);
var G__11321 = 0;
seq__11228 = G__11318;
chunk__11229 = G__11319;
count__11230 = G__11320;
i__11231 = G__11321;
continue;
}
} else
{var x = cljs.core.first.call(null,seq__11228__$1);lt.plugins.elm_light.graph.get_package_json.call(null,x,cljs.core.partial.call(null,lt.plugins.elm_light.graph.add_edges_for_dep,this$,x));
{
var G__11322 = cljs.core.next.call(null,seq__11228__$1);
var G__11323 = null;
var G__11324 = 0;
var G__11325 = 0;
seq__11228 = G__11322;
chunk__11229 = G__11323;
count__11230 = G__11324;
i__11231 = G__11325;
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
lt.plugins.elm_light.graph.get_dependency_data = (function get_dependency_data(project_path){var pkgs = cljs.core.map.call(null,(function (p1__11233_SHARP_){return cljs.core.assoc.call(null,p1__11233_SHARP_,new cljs.core.Keyword(null,"summary","summary",3451231000),new cljs.core.Keyword(null,"summary","summary",3451231000).cljs$core$IFn$_invoke$arity$1(lt.plugins.elm_light.graph.find_package_by_name.call(null,lt.plugins.elm_light.graph.dependency_graph,new cljs.core.Keyword(null,"package","package",4501809080).cljs$core$IFn$_invoke$arity$1(p1__11233_SHARP_))));
}),cljs.core.map.call(null,(function (p1__11232_SHARP_){return clojure.set.rename_keys.call(null,p1__11232_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"exact","exact",1110851185),new cljs.core.Keyword(null,"version","version",1365512266)], null));
}),lt.plugins.elm_light.utils.get_project_deps.call(null,project_path)));var direct = cljs.core.filter.call(null,new cljs.core.Keyword(null,"range","range",1122184367),pkgs);var rootVersion = new cljs.core.Keyword(null,"version","version",1365512266).cljs$core$IFn$_invoke$arity$1(lt.plugins.elm_light.utils.parse_json_file.call(null,lt.objs.files.join.call(null,project_path,"elm-package.json")));var root = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"package","package",4501809080),lt.objs.files.basename.call(null,project_path),new cljs.core.Keyword(null,"version","version",1365512266),rootVersion,new cljs.core.Keyword(null,"shape","shape",1123304211),"ellipse"], null);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"packages","packages",1764771935),pkgs,new cljs.core.Keyword(null,"nodes","nodes",1118897699),cljs.core.conj.call(null,direct,root),new cljs.core.Keyword(null,"edges","edges",1110261192),cljs.core.map.call(null,((function (pkgs,direct,rootVersion,root){
return (function (p1__11234_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"label","label",1116631654)],[lt.plugins.elm_light.graph.dep_id.call(null,root),lt.plugins.elm_light.graph.dep_id.call(null,p1__11234_SHARP_),new cljs.core.Keyword(null,"range","range",1122184367).cljs$core$IFn$_invoke$arity$1(p1__11234_SHARP_)]);
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
return (function (p__11465){var vec__11466 = p__11465;var k = cljs.core.nth.call(null,vec__11466,0,null);var v = cljs.core.nth.call(null,vec__11466,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.elm_light.utils.nskw__GT_name.call(null,k),v], null);
});})(pkg_file))
,deps)),pkg);
});})(pkg_file))
)));
});
lt.plugins.elm_light.packages.project_wrapper = (function project_wrapper(this$){var e__6289__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.elm","div.elm",2686466363),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"project-packages-wrapper"], null),"Retrieving project package info..."], null)], null));var seq__11473_11498 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__11474_11499 = null;var count__11475_11500 = 0;var i__11476_11501 = 0;while(true){
if((i__11476_11501 < count__11475_11500))
{var vec__11477_11502 = cljs.core._nth.call(null,chunk__11474_11499,i__11476_11501);var ev__6290__auto___11503 = cljs.core.nth.call(null,vec__11477_11502,0,null);var func__6291__auto___11504 = cljs.core.nth.call(null,vec__11477_11502,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___11503,func__6291__auto___11504);
{
var G__11505 = seq__11473_11498;
var G__11506 = chunk__11474_11499;
var G__11507 = count__11475_11500;
var G__11508 = (i__11476_11501 + 1);
seq__11473_11498 = G__11505;
chunk__11474_11499 = G__11506;
count__11475_11500 = G__11507;
i__11476_11501 = G__11508;
continue;
}
} else
{var temp__4092__auto___11509 = cljs.core.seq.call(null,seq__11473_11498);if(temp__4092__auto___11509)
{var seq__11473_11510__$1 = temp__4092__auto___11509;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11473_11510__$1))
{var c__5632__auto___11511 = cljs.core.chunk_first.call(null,seq__11473_11510__$1);{
var G__11512 = cljs.core.chunk_rest.call(null,seq__11473_11510__$1);
var G__11513 = c__5632__auto___11511;
var G__11514 = cljs.core.count.call(null,c__5632__auto___11511);
var G__11515 = 0;
seq__11473_11498 = G__11512;
chunk__11474_11499 = G__11513;
count__11475_11500 = G__11514;
i__11476_11501 = G__11515;
continue;
}
} else
{var vec__11478_11516 = cljs.core.first.call(null,seq__11473_11510__$1);var ev__6290__auto___11517 = cljs.core.nth.call(null,vec__11478_11516,0,null);var func__6291__auto___11518 = cljs.core.nth.call(null,vec__11478_11516,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___11517,func__6291__auto___11518);
{
var G__11519 = cljs.core.next.call(null,seq__11473_11510__$1);
var G__11520 = null;
var G__11521 = 0;
var G__11522 = 0;
seq__11473_11498 = G__11519;
chunk__11474_11499 = G__11520;
count__11475_11500 = G__11521;
i__11476_11501 = G__11522;
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
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.packages","elm-packages","lt.plugins.elm-light.packages/elm-packages",4552372902),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elm.packages","elm.packages",3931311271),null], null), null),new cljs.core.Keyword(null,"label","label",1116631654),"Elm project packages",new cljs.core.Keyword(null,"name","name",1017277949),"Elm project packages",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){lt.plugins.elm_light.utils.fetch_all_packages.call(null,(function (p1__11479_SHARP_){return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"all-packages","all-packages",1123981067),p1__11479_SHARP_], null));
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
lt.plugins.elm_light.packages.idx_active = (function idx_active(items){return cljs.core.first.call(null,cljs.core.keep_indexed.call(null,(function (p1__11481_SHARP_,p2__11480_SHARP_){if(cljs.core.truth_(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(p2__11480_SHARP_)))
{return p1__11481_SHARP_;
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
lt.plugins.elm_light.packages.on_pkg_sel = (function on_pkg_sel(){var items_11523 = new cljs.core.Keyword(null,"ac-packages","ac-packages",1548109226).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.elm_light.packages.elm_packages));var temp__4090__auto___11524 = lt.plugins.elm_light.packages.idx_active.call(null,items_11523);if(cljs.core.truth_(temp__4090__auto___11524))
{var idx_11525 = temp__4090__auto___11524;lt.object.assoc_in_BANG_.call(null,lt.plugins.elm_light.packages.elm_packages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ac-versions","ac-versions",3107155800)], null),new cljs.core.Keyword(null,"versions","versions",3323818509).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,items_11523,idx_11525)));
lt.object.assoc_in_BANG_.call(null,lt.plugins.elm_light.packages.elm_packages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ac-version","ac-version",2051259807)], null),cljs.core.first.call(null,new cljs.core.Keyword(null,"versions","versions",3323818509).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,items_11523,idx_11525))));
lt.object.assoc_in_BANG_.call(null,lt.plugins.elm_light.packages.elm_packages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ac-package","ac-package",892589325)], null),new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,items_11523,idx_11525)));
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
return (function (p1__11482_SHARP_){if(cljs.core._EQ_.call(null,p1__11482_SHARP_,0))
{lt.objs.notifos.done_working.call(null);
} else
{lt.objs.notifos.set_msg_BANG_.call(null,"Error installing elm package",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),"error",new cljs.core.Keyword(null,"timeout","timeout",3994960083),5000], null));
}
lt.object.raise.call(null,lt.plugins.elm_light.packages.elm_packages,new cljs.core.Keyword(null,"elm.show.project.packages","elm.show.project.packages",3385102109),new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.elm_light.packages.elm_packages)));
return lt.object.raise.call(null,lt.plugins.elm_light.graph.dependency_graph,new cljs.core.Keyword(null,"elm.graph.show-dependencies","elm.graph.show-dependencies",3464547203),new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.elm_light.packages.elm_packages)),false);
});})(proc,args))
);
proc.stdout.on("data",((function (proc,args){
return (function (p1__11483_SHARP_){return lt.objs.notifos.msg_STAR_.call(null,[cljs.core.str("Package install: "),cljs.core.str(p1__11483_SHARP_)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"timeout","timeout",3994960083),5000], null));
});})(proc,args))
);
return proc.stderr.on("data",((function (proc,args){
return (function (p1__11484_SHARP_){return lt.objs.console.error.call(null,[cljs.core.str(p1__11484_SHARP_)].join(''));
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
lt.plugins.elm_light.packages.PackageRow = quiescent.component.call(null,(function (p__11485){var map__11486 = p__11485;var map__11486__$1 = ((cljs.core.seq_QMARK_.call(null,map__11486))?cljs.core.apply.call(null,cljs.core.hash_map,map__11486):map__11486);var on_browse = cljs.core.get.call(null,map__11486__$1,new cljs.core.Keyword(null,"on-browse","on-browse",587885994));var on_remove = cljs.core.get.call(null,map__11486__$1,new cljs.core.Keyword(null,"on-remove","on-remove",1033879460));var exact = cljs.core.get.call(null,map__11486__$1,new cljs.core.Keyword(null,"exact","exact",1110851185));var range = cljs.core.get.call(null,map__11486__$1,new cljs.core.Keyword(null,"range","range",1122184367));var package$ = cljs.core.get.call(null,map__11486__$1,new cljs.core.Keyword(null,"package","package",4501809080));return quiescent.dom.tr.call(null,cljs.core.PersistentArrayMap.EMPTY,quiescent.dom.td.call(null,cljs.core.PersistentArrayMap.EMPTY,(cljs.core.truth_((function (){var and__4872__auto__ = package$;if(cljs.core.truth_(and__4872__auto__))
{return exact;
} else
{return and__4872__auto__;
}
})())?quiescent.dom.span.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",1004015509),"link",new cljs.core.Keyword(null,"onClick","onClick",3956969051),((function (map__11486,map__11486__$1,on_browse,on_remove,exact,range,package$){
return (function (){return on_browse.call(null,package$,exact);
});})(map__11486,map__11486__$1,on_browse,on_remove,exact,range,package$))
], null),package$):package$)),quiescent.dom.td.call(null,cljs.core.PersistentArrayMap.EMPTY,range),quiescent.dom.td.call(null,cljs.core.PersistentArrayMap.EMPTY,exact),quiescent.dom.td.call(null,cljs.core.PersistentArrayMap.EMPTY,(cljs.core.truth_(range)?quiescent.dom.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",3956969051),((function (map__11486,map__11486__$1,on_browse,on_remove,exact,range,package$){
return (function (){return on_remove.call(null,package$);
});})(map__11486,map__11486__$1,on_browse,on_remove,exact,range,package$))
], null),"remove"):null)));
}));
/**
* 
*/
lt.plugins.elm_light.packages.PackageTable = quiescent.component.call(null,(function (props){return quiescent.dom.table.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",1004015509),"package-table"], null),quiescent.dom.thead.call(null,cljs.core.PersistentArrayMap.EMPTY,quiescent.dom.tr.call(null,cljs.core.PersistentArrayMap.EMPTY,quiescent.dom.th.call(null,cljs.core.PersistentArrayMap.EMPTY,"Package"),quiescent.dom.th.call(null,cljs.core.PersistentArrayMap.EMPTY,"Range"),quiescent.dom.th.call(null,cljs.core.PersistentArrayMap.EMPTY,"Exact"),quiescent.dom.th.call(null,cljs.core.PersistentArrayMap.EMPTY,""))),cljs.core.apply.call(null,quiescent.dom.tbody,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__11487_SHARP_){return lt.plugins.elm_light.packages.PackageRow.call(null,cljs.core.assoc.call(null,p1__11487_SHARP_,new cljs.core.Keyword(null,"on-remove","on-remove",1033879460),new cljs.core.Keyword(null,"on-remove","on-remove",1033879460).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"on-browse","on-browse",587885994),new cljs.core.Keyword(null,"on-browse","on-browse",587885994).cljs$core$IFn$_invoke$arity$1(props)));
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
var G__11534 = (line - 1);
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
lt.plugins.elm_light.selection.get_top_level_line_down = (function get_top_level_line_down(ed,start_line){var last_line = lt.objs.editor.last_line.call(null,ed);var line = start_line;while(true){
if(lt.plugins.elm_light.selection.top_level_line_QMARK_.call(null,ed,line))
{return line;
} else
{if(cljs.core._EQ_.call(null,line,last_line))
{return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__11535 = (line + 1);
line = G__11535;
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
var G__11536 = (line - 1);
line = G__11536;
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
return (function (p1__11158_SHARP_){return lt.plugins.elm_light.clients.on_elm_message.call(null,client,p1__11158_SHARP_);
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
lt.plugins.elm_light.clients.start_elm_client = (function start_elm_client(p__11159){var map__11161 = p__11159;var map__11161__$1 = ((cljs.core.seq_QMARK_.call(null,map__11161))?cljs.core.apply.call(null,cljs.core.hash_map,map__11161):map__11161);var props = map__11161__$1;var client = cljs.core.get.call(null,map__11161__$1,new cljs.core.Keyword(null,"client","client",3951159101));var proj_path = cljs.core.get.call(null,map__11161__$1,new cljs.core.Keyword(null,"proj-path","proj-path",4362692615));var path = cljs.core.get.call(null,map__11161__$1,new cljs.core.Keyword(null,"path","path",1017337751));lt.objs.notifos.working.call(null,"Connecting..");
return lt.plugins.elm_light.clients.claim_reactor_port.call(null,proj_path,((function (map__11161,map__11161__$1,props,client,proj_path,path){
return (function (_,port){var worker = lt.plugins.elm_light.clients.start_elm_worker.call(null,proj_path,port,client);lt.object.merge_BANG_.call(null,client,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1017277949),lt.objs.files.basename.call(null,proj_path),new cljs.core.Keyword(null,"dir","dir",1014003711),proj_path,new cljs.core.Keyword(null,"reactor-port","reactor-port",4649590590),port,new cljs.core.Keyword(null,"worker","worker",4526786288),worker,new cljs.core.Keyword(null,"commands","commands",4706336250),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"editor.elm.lint","editor.elm.lint",1086056222),null,new cljs.core.Keyword(null,"editor.elm.make","editor.elm.make",1086078217),null,new cljs.core.Keyword(null,"editor.eval.elm","editor.eval.elm",1083015975),null,new cljs.core.Keyword(null,"editor.elm.hint","editor.elm.hint",1085937058),null,new cljs.core.Keyword(null,"elm.repl.restart","elm.repl.restart",2931654218),null,new cljs.core.Keyword(null,"docs.elm.search","docs.elm.search",737241333),null,new cljs.core.Keyword(null,"editor.elm.doc","editor.elm.doc",1570413537),null], null), null)], null));
return lt.object.add_behavior_BANG_.call(null,client,new cljs.core.Keyword("lt.plugins.elm-light.clients","send!","lt.plugins.elm-light.clients/send!",867013595));
});})(map__11161,map__11161__$1,props,client,proj_path,path))
);
});
lt.plugins.elm_light.clients.try_connect = (function try_connect(p__11162){var map__11164 = p__11162;var map__11164__$1 = ((cljs.core.seq_QMARK_.call(null,map__11164))?cljs.core.apply.call(null,cljs.core.hash_map,map__11164):map__11164);var props = map__11164__$1;var info = cljs.core.get.call(null,map__11164__$1,new cljs.core.Keyword(null,"info","info",1017141280));var path = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(info);var proj_path = lt.plugins.elm_light.utils.project_path.call(null,path);var client = lt.objs.clients.client_BANG_.call(null,new cljs.core.Keyword(null,"elm-client","elm-client",1622336068));if(cljs.core.truth_(proj_path))
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
CodeMirror.extendMode("elm",cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hint-pattern","hint-pattern",2825267644),/[\w_\.]/], null)));
lt.plugins.elm_light.maybe_trim_prefix = (function maybe_trim_prefix(token,completion){if((".".indexOf(token) > -1))
{return cljs.core.last.call(null,clojure.string.split.call(null,lt.plugins.elm_light.comletion,"."));
} else
{return completion;
}
});
lt.plugins.elm_light.create_hints = (function create_hints(token,completions){return cljs.core.map.call(null,(function (p1__6406_SHARP_){return {"text": new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(p1__6406_SHARP_), "completion": lt.plugins.elm_light.maybe_trim_prefix.call(null,token,new cljs.core.Keyword(null,"completion","completion",4767668046).cljs$core$IFn$_invoke$arity$1(p1__6406_SHARP_))};
}),completions);
});
lt.plugins.elm_light.__BEH__finish_update_hints = (function __BEH__finish_update_hints(ed,res){if(cljs.core.truth_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null)))
{lt.object.merge_BANG_.call(null,ed,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.elm-light","hints","lt.plugins.elm-light/hints",1123432849),lt.plugins.elm_light.create_hints.call(null,new cljs.core.Keyword("lt.plugins.elm-light","token","lt.plugins.elm-light/token",1134194276).cljs$core$IFn$_invoke$arity$1(ed),res)], null));
lt.object.raise.call(null,lt.plugins.auto_complete.hinter,new cljs.core.Keyword(null,"refresh!","refresh!",4597922840));
} else
{}
return lt.objs.notifos.done_working.call(null);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light","finish-update-hints","lt.plugins.elm-light/finish-update-hints",2276477083),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.__BEH__finish_update_hints,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.elm.hints.result","editor.elm.hints.result",2636151706),null], null), null));
lt.plugins.elm_light.__BEH__use_local_hints = (function __BEH__use_local_hints(ed,hints,_){var token_6446 = lt.plugins.elm_light.utils.find_symbol.call(null,ed,lt.objs.editor.__GT_cursor.call(null,ed));if(cljs.core.not_EQ_.call(null,token_6446,new cljs.core.Keyword("lt.plugins.elm-light","token","lt.plugins.elm-light/token",1134194276).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed))))
{lt.object.merge_BANG_.call(null,ed,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.elm-light","token","lt.plugins.elm-light/token",1134194276),token_6446], null));
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
var b_6447 = (function (){var or__4884__auto__ = cljs.core.first.call(null,lt.object.by_tag.call(null,new cljs.core.Keyword(null,"browser","browser",1164844698)));if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return lt.objs.browser.add.call(null);
}
})();var get_url_6448 = ((function (b_6447,path,client){
return (function (){return [cljs.core.str("http://localhost:"),cljs.core.str(new cljs.core.Keyword(null,"reactor-port","reactor-port",4649590590).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client))),cljs.core.str(path),cljs.core.str((cljs.core.truth_(debug_QMARK_)?"?debug":""))].join('');
});})(b_6447,path,client))
;if(cljs.core.truth_(new cljs.core.Keyword(null,"connected","connected",4729661051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client))))
{lt.object.raise.call(null,b_6447,new cljs.core.Keyword(null,"navigate!","navigate!",1766726722),get_url_6448.call(null));
} else
{lt.util.js.wait.call(null,100,((function (b_6447,get_url_6448,path,client){
return (function (){return lt.object.raise.call(null,b_6447,new cljs.core.Keyword(null,"navigate!","navigate!",1766726722),get_url_6448.call(null));
});})(b_6447,get_url_6448,path,client))
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
}catch (e6413){var e_6449 = e6413;lt.objs.notifos.set_msg_BANG_.call(null,"Elm format reported errors. See console for details",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),"error",new cljs.core.Keyword(null,"timeout","timeout",3994960083),5000], null));
lt.objs.console.error.call(null,e_6449.message);
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
lt.plugins.elm_light.linter.status_class = (function status_class(p__11326){var map__11328 = p__11326;var map__11328__$1 = ((cljs.core.seq_QMARK_.call(null,map__11328))?cljs.core.apply.call(null,cljs.core.hash_map,map__11328):map__11328);var warnings = cljs.core.get.call(null,map__11328__$1,new cljs.core.Keyword(null,"warnings","warnings",1511995337));var errors = cljs.core.get.call(null,map__11328__$1,new cljs.core.Keyword(null,"errors","errors",4014236381));if((errors > 0))
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
lt.plugins.elm_light.linter.status_text = (function status_text(p__11329){var map__11331 = p__11329;var map__11331__$1 = ((cljs.core.seq_QMARK_.call(null,map__11331))?cljs.core.apply.call(null,cljs.core.hash_map,map__11331):map__11331);var warnings = cljs.core.get.call(null,map__11331__$1,new cljs.core.Keyword(null,"warnings","warnings",1511995337));var errors = cljs.core.get.call(null,map__11331__$1,new cljs.core.Keyword(null,"errors","errors",4014236381));return [cljs.core.str("Lint status: "),cljs.core.str(errors),cljs.core.str("/"),cljs.core.str(warnings)].join('');
});
lt.plugins.elm_light.linter.__GT_status_ui = (function __GT_status_ui(p__11332){var map__11334 = p__11332;var map__11334__$1 = ((cljs.core.seq_QMARK_.call(null,map__11334))?cljs.core.apply.call(null,cljs.core.hash_map,map__11334):map__11334);var lint_summary = cljs.core.get.call(null,map__11334__$1,new cljs.core.Keyword(null,"lint-summary","lint-summary",2275048270));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("lint-status "),cljs.core.str(lt.plugins.elm_light.linter.status_class.call(null,lint_summary))].join('')], null),lt.plugins.elm_light.linter.status_text.call(null,lint_summary)], null);
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
return (function (p__11337){var vec__11338 = p__11337;var k = cljs.core.nth.call(null,vec__11338,0,null);var v = cljs.core.nth.call(null,vec__11338,1,null);return new cljs.core.PersistentArrayMap.fromArray([k,cljs.core.count.call(null,v)], true, false);
});})(results,temp__4090__auto__))
,cljs.core.group_by.call(null,new cljs.core.Keyword(null,"category","category",1064415344),cljs.core.map.call(null,new cljs.core.Keyword(null,"result","result",4374444943),cljs.core.vals.call(null,results)))));
} else
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",1110689146),0,new cljs.core.Keyword(null,"warning","warning",2138350350),0], null);
}
});
lt.plugins.elm_light.linter.update_status_for_editor = (function update_status_for_editor(ed){var map__11341 = lt.plugins.elm_light.linter.grouped_lint_count.call(null,ed);var map__11341__$1 = ((cljs.core.seq_QMARK_.call(null,map__11341))?cljs.core.apply.call(null,cljs.core.hash_map,map__11341):map__11341);var warning = cljs.core.get.call(null,map__11341__$1,new cljs.core.Keyword(null,"warning","warning",2138350350));var error = cljs.core.get.call(null,map__11341__$1,new cljs.core.Keyword(null,"error","error",1110689146));return lt.object.raise.call(null,lt.plugins.elm_light.linter.statusbar_lint_summary,new cljs.core.Keyword(null,"update!","update!",779473898),((function (map__11341,map__11341__$1,warning,error){
return (function (p1__11339_SHARP_){return cljs.core.assoc.call(null,p1__11339_SHARP_,new cljs.core.Keyword(null,"warnings","warnings",1511995337),(function (){var or__4884__auto__ = warning;if(cljs.core.truth_(or__4884__auto__))
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
});})(map__11341,map__11341__$1,warning,error))
);
});
lt.plugins.elm_light.linter.__BEH__update_linter_on_editor_change = (function __BEH__update_linter_on_editor_change(ed){return lt.plugins.elm_light.linter.update_status_for_editor.call(null,ed);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.linter","update-linter-on-editor-change","lt.plugins.elm-light.linter/update-linter-on-editor-change",2858337088),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.linter.__BEH__update_linter_on_editor_change,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"focus","focus",1111509066),null], null), null));
lt.plugins.elm_light.linter.remove_widget = (function remove_widget(ed,el){try{lt.util.dom.remove.call(null,el);
}catch (e11343){var e_11396 = e11343;}return lt.objs.editor.focus.call(null,ed);
});
lt.plugins.elm_light.linter.inline_ui = (function inline_ui(ed,p__11346){var map__11354 = p__11346;var map__11354__$1 = ((cljs.core.seq_QMARK_.call(null,map__11354))?cljs.core.apply.call(null,cljs.core.hash_map,map__11354):map__11354);var category = cljs.core.get.call(null,map__11354__$1,new cljs.core.Keyword(null,"category","category",1064415344));var details = cljs.core.get.call(null,map__11354__$1,new cljs.core.Keyword(null,"details","details",2571625908));var title = cljs.core.get.call(null,map__11354__$1,new cljs.core.Keyword(null,"title","title",1124275658));var e__6289__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tabindex","tabindex",4410954191),-1,new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("linter-res "),cljs.core.str((function (){var or__4884__auto__ = cljs.core.name.call(null,category);if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return "error";
}
})())].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.title","p.title",3057381068),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.details","div.details",4139669847),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),details], null)], null)], null));var seq__11355_11397 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blur","blur",1016931289),((function (e__6289__auto__,map__11354,map__11354__$1,category,details,title){
return (function (p1__11344_SHARP_){return lt.plugins.elm_light.linter.remove_widget.call(null,ed,p1__11344_SHARP_.target);
});})(e__6289__auto__,map__11354,map__11354__$1,category,details,title))
,new cljs.core.Keyword(null,"keydown","keydown",4493897459),((function (e__6289__auto__,map__11354,map__11354__$1,category,details,title){
return (function (p1__11345_SHARP_){var kc = p1__11345_SHARP_.keyCode;if(cljs.core._EQ_.call(null,kc,27))
{return lt.plugins.elm_light.linter.remove_widget.call(null,ed,p1__11345_SHARP_.target);
} else
{return null;
}
});})(e__6289__auto__,map__11354,map__11354__$1,category,details,title))
], null)));var chunk__11356_11398 = null;var count__11357_11399 = 0;var i__11358_11400 = 0;while(true){
if((i__11358_11400 < count__11357_11399))
{var vec__11359_11401 = cljs.core._nth.call(null,chunk__11356_11398,i__11358_11400);var ev__6290__auto___11402 = cljs.core.nth.call(null,vec__11359_11401,0,null);var func__6291__auto___11403 = cljs.core.nth.call(null,vec__11359_11401,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___11402,func__6291__auto___11403);
{
var G__11404 = seq__11355_11397;
var G__11405 = chunk__11356_11398;
var G__11406 = count__11357_11399;
var G__11407 = (i__11358_11400 + 1);
seq__11355_11397 = G__11404;
chunk__11356_11398 = G__11405;
count__11357_11399 = G__11406;
i__11358_11400 = G__11407;
continue;
}
} else
{var temp__4092__auto___11408 = cljs.core.seq.call(null,seq__11355_11397);if(temp__4092__auto___11408)
{var seq__11355_11409__$1 = temp__4092__auto___11408;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11355_11409__$1))
{var c__5632__auto___11410 = cljs.core.chunk_first.call(null,seq__11355_11409__$1);{
var G__11411 = cljs.core.chunk_rest.call(null,seq__11355_11409__$1);
var G__11412 = c__5632__auto___11410;
var G__11413 = cljs.core.count.call(null,c__5632__auto___11410);
var G__11414 = 0;
seq__11355_11397 = G__11411;
chunk__11356_11398 = G__11412;
count__11357_11399 = G__11413;
i__11358_11400 = G__11414;
continue;
}
} else
{var vec__11360_11415 = cljs.core.first.call(null,seq__11355_11409__$1);var ev__6290__auto___11416 = cljs.core.nth.call(null,vec__11360_11415,0,null);var func__6291__auto___11417 = cljs.core.nth.call(null,vec__11360_11415,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___11416,func__6291__auto___11417);
{
var G__11418 = cljs.core.next.call(null,seq__11355_11409__$1);
var G__11419 = null;
var G__11420 = 0;
var G__11421 = 0;
seq__11355_11397 = G__11418;
chunk__11356_11398 = G__11419;
count__11357_11399 = G__11420;
i__11358_11400 = G__11421;
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
lt.plugins.elm_light.linter.add_widget = (function add_widget(ed,res_id){var map__11362 = cljs.core.get_in.call(null,cljs.core.deref.call(null,ed),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linter-results","linter-results",4482067083),res_id], null));var map__11362__$1 = ((cljs.core.seq_QMARK_.call(null,map__11362))?cljs.core.apply.call(null,cljs.core.hash_map,map__11362):map__11362);var result = cljs.core.get.call(null,map__11362__$1,new cljs.core.Keyword(null,"result","result",4374444943));var mark = cljs.core.get.call(null,map__11362__$1,new cljs.core.Keyword(null,"mark","mark",1017248319));var ui = lt.plugins.elm_light.linter.inline_ui.call(null,ed,result);lt.objs.editor.__GT_cm_ed.call(null,ed).addWidget(mark.find().from,ui,{"scrollIntoView": true});
return lt.util.dom.focus.call(null,ui);
});
lt.plugins.elm_light.linter.create_mark = (function create_mark(ed,p__11363){var map__11365 = p__11363;var map__11365__$1 = ((cljs.core.seq_QMARK_.call(null,map__11365))?cljs.core.apply.call(null,cljs.core.hash_map,map__11365):map__11365);var code_range = cljs.core.get.call(null,map__11365__$1,new cljs.core.Keyword(null,"code-range","code-range",3297446095));var category = cljs.core.get.call(null,map__11365__$1,new cljs.core.Keyword(null,"category","category",1064415344));var from = new cljs.core.Keyword(null,"from","from",1017056028).cljs$core$IFn$_invoke$arity$1(code_range);var to = ((!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"to","to",1013907949).cljs$core$IFn$_invoke$arity$1(code_range),from)))?new cljs.core.Keyword(null,"to","to",1013907949).cljs$core$IFn$_invoke$arity$1(code_range):cljs.core.assoc.call(null,from,new cljs.core.Keyword(null,"ch","ch",1013907415),(lt.objs.editor.line_length.call(null,ed,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(from)) - 1)));return lt.objs.editor.mark.call(null,ed,from,to,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",1004015509),[cljs.core.str("lint-"),cljs.core.str((function (){var or__4884__auto__ = cljs.core.name.call(null,category);if(cljs.core.truth_(or__4884__auto__))
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
lt.plugins.elm_light.linter.__BEH__clear_linter_results_BANG_ = (function __BEH__clear_linter_results_BANG_(ed){var seq__11372_11422 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"linter-results","linter-results",4482067083).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));var chunk__11373_11423 = null;var count__11374_11424 = 0;var i__11375_11425 = 0;while(true){
if((i__11375_11425 < count__11374_11424))
{var vec__11376_11426 = cljs.core._nth.call(null,chunk__11373_11423,i__11375_11425);var id_11427 = cljs.core.nth.call(null,vec__11376_11426,0,null);var res_11428 = cljs.core.nth.call(null,vec__11376_11426,1,null);var temp__4092__auto___11429 = new cljs.core.Keyword(null,"mark","mark",1017248319).cljs$core$IFn$_invoke$arity$1(res_11428);if(cljs.core.truth_(temp__4092__auto___11429))
{var m_11430 = temp__4092__auto___11429;m_11430.clear();
} else
{}
var temp__4092__auto___11431 = new cljs.core.Keyword(null,"widget","widget",4520824246).cljs$core$IFn$_invoke$arity$1(res_11428);if(cljs.core.truth_(temp__4092__auto___11431))
{var w_11432 = temp__4092__auto___11431;lt.util.dom.remove.call(null,w_11432);
} else
{}
{
var G__11433 = seq__11372_11422;
var G__11434 = chunk__11373_11423;
var G__11435 = count__11374_11424;
var G__11436 = (i__11375_11425 + 1);
seq__11372_11422 = G__11433;
chunk__11373_11423 = G__11434;
count__11374_11424 = G__11435;
i__11375_11425 = G__11436;
continue;
}
} else
{var temp__4092__auto___11437 = cljs.core.seq.call(null,seq__11372_11422);if(temp__4092__auto___11437)
{var seq__11372_11438__$1 = temp__4092__auto___11437;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11372_11438__$1))
{var c__5632__auto___11439 = cljs.core.chunk_first.call(null,seq__11372_11438__$1);{
var G__11440 = cljs.core.chunk_rest.call(null,seq__11372_11438__$1);
var G__11441 = c__5632__auto___11439;
var G__11442 = cljs.core.count.call(null,c__5632__auto___11439);
var G__11443 = 0;
seq__11372_11422 = G__11440;
chunk__11373_11423 = G__11441;
count__11374_11424 = G__11442;
i__11375_11425 = G__11443;
continue;
}
} else
{var vec__11377_11444 = cljs.core.first.call(null,seq__11372_11438__$1);var id_11445 = cljs.core.nth.call(null,vec__11377_11444,0,null);var res_11446 = cljs.core.nth.call(null,vec__11377_11444,1,null);var temp__4092__auto___11447__$1 = new cljs.core.Keyword(null,"mark","mark",1017248319).cljs$core$IFn$_invoke$arity$1(res_11446);if(cljs.core.truth_(temp__4092__auto___11447__$1))
{var m_11448 = temp__4092__auto___11447__$1;m_11448.clear();
} else
{}
var temp__4092__auto___11449__$1 = new cljs.core.Keyword(null,"widget","widget",4520824246).cljs$core$IFn$_invoke$arity$1(res_11446);if(cljs.core.truth_(temp__4092__auto___11449__$1))
{var w_11450 = temp__4092__auto___11449__$1;lt.util.dom.remove.call(null,w_11450);
} else
{}
{
var G__11451 = cljs.core.next.call(null,seq__11372_11438__$1);
var G__11452 = null;
var G__11453 = 0;
var G__11454 = 0;
seq__11372_11422 = G__11451;
chunk__11373_11423 = G__11452;
count__11374_11424 = G__11453;
i__11375_11425 = G__11454;
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
lt.plugins.elm_light.linter.find_current_lint_mark = (function find_current_lint_mark(ed){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__11378_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"linter","linter",4206213986),p1__11378_SHARP_.lttype);
}),lt.objs.editor.find_marks.call(null,ed,lt.objs.editor.__GT_cursor.call(null,ed))));
});
lt.plugins.elm_light.linter.get_widget_by_mark = (function get_widget_by_mark(ed,mark){return cljs.core.get_in.call(null,cljs.core.deref.call(null,ed),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linter-results","linter-results",4482067083),mark.ltlintid,new cljs.core.Keyword(null,"widget","widget",4520824246)], null));
});
lt.plugins.elm_light.linter.mark__GT_pos = (function mark__GT_pos(mark){var cm_pos = mark.find().from;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",1013907415),cm_pos.ch,new cljs.core.Keyword(null,"line","line",1017226086),cm_pos.line], null);
});
lt.plugins.elm_light.linter.get_all_lint_marks = (function get_all_lint_marks(ed){return cljs.core.sort_by.call(null,(function (p1__11380_SHARP_){return cljs.core.juxt.call(null,new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"ch","ch",1013907415)).call(null,lt.plugins.elm_light.linter.mark__GT_pos.call(null,p1__11380_SHARP_));
}),cljs.core.filter.call(null,(function (p1__11379_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"linter","linter",4206213986),p1__11379_SHARP_.lttype);
}),lt.objs.editor.__GT_cm_ed.call(null,ed).getAllMarks()));
});
lt.plugins.elm_light.linter.split_with_mark = (function split_with_mark(ed){var all_marks = lt.plugins.elm_light.linter.get_all_lint_marks.call(null,ed);var curr_mark = lt.plugins.elm_light.linter.find_current_lint_mark.call(null,ed);return cljs.core.split_with.call(null,((function (all_marks,curr_mark){
return (function (p1__11381_SHARP_){return !(cljs.core._EQ_.call(null,(cljs.core.truth_(curr_mark)?curr_mark.ltlintid:null),p1__11381_SHARP_.ltlintid));
});})(all_marks,curr_mark))
,all_marks);
});
lt.plugins.elm_light.linter.find_next_mark = (function find_next_mark(ed){var vec__11383 = lt.plugins.elm_light.linter.split_with_mark.call(null,ed);var ms1 = cljs.core.nth.call(null,vec__11383,0,null);var ms2 = cljs.core.nth.call(null,vec__11383,1,null);return cljs.core.first.call(null,cljs.core.into.call(null,cljs.core.vec.call(null,cljs.core.drop.call(null,1,ms2)),ms1));
});
lt.plugins.elm_light.linter.find_prev_mark = (function find_prev_mark(ed){var vec__11385 = lt.plugins.elm_light.linter.split_with_mark.call(null,ed);var ms1 = cljs.core.nth.call(null,vec__11385,0,null);var ms2 = cljs.core.nth.call(null,vec__11385,1,null);return cljs.core.first.call(null,cljs.core.into.call(null,cljs.core.reverse.call(null,cljs.core.drop.call(null,1,ms2)),ms1));
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
lt.plugins.elm_light.test.deps__GT_named = (function deps__GT_named(deps){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__11539){var vec__11540 = p__11539;var k = cljs.core.nth.call(null,vec__11540,0,null);var v = cljs.core.nth.call(null,vec__11540,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.elm_light.utils.nskw__GT_name.call(null,k),v], null);
}),deps));
});
lt.plugins.elm_light.test.__GT_test_config = (function __GT_test_config(project_cfg){return cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.assoc.call(null,cljs.core.update_in.call(null,project_cfg,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-directories","source-directories",4475397259)], null),lt.plugins.elm_light.test.__GT_test_src_dirs),new cljs.core.Keyword(null,"exposed-modules","exposed-modules",4185867084),cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependencies","dependencies",1517678747)], null),(function (p1__11541_SHARP_){return cljs.core.merge.call(null,p1__11541_SHARP_,lt.plugins.elm_light.test.default_test_deps);
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
return (function (p1__11542_SHARP_){return cljs.core.println.call(null,[cljs.core.str("Test package install: "),cljs.core.str(p1__11542_SHARP_)].join(''));
});})(args,proc))
);
proc.stderr.on("data",((function (args,proc){
return (function (p1__11543_SHARP_){return lt.objs.console.error.call(null,[cljs.core.str(p1__11543_SHARP_)].join(''));
});})(args,proc))
);
proc.on("exit",((function (args,proc){
return (function (p1__11544_SHARP_){if(cljs.core._EQ_.call(null,p1__11544_SHARP_,0))
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