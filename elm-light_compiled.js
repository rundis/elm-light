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
{var o = (function (){var obj11137 = {};return obj11137;
})();var seq__11138_11151 = cljs.core.seq.call(null,obj);var chunk__11139_11152 = null;var count__11140_11153 = 0;var i__11141_11154 = 0;while(true){
if((i__11141_11154 < count__11140_11153))
{var vec__11142_11155 = cljs.core._nth.call(null,chunk__11139_11152,i__11141_11154);var k_11156 = cljs.core.nth.call(null,vec__11142_11155,0,null);var v_11157 = cljs.core.nth.call(null,vec__11142_11155,1,null);(o[cljs.core.name.call(null,k_11156)] = js_props.call(null,v_11157));
{
var G__11158 = seq__11138_11151;
var G__11159 = chunk__11139_11152;
var G__11160 = count__11140_11153;
var G__11161 = (i__11141_11154 + 1);
seq__11138_11151 = G__11158;
chunk__11139_11152 = G__11159;
count__11140_11153 = G__11160;
i__11141_11154 = G__11161;
continue;
}
} else
{var temp__4092__auto___11162 = cljs.core.seq.call(null,seq__11138_11151);if(temp__4092__auto___11162)
{var seq__11138_11163__$1 = temp__4092__auto___11162;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11138_11163__$1))
{var c__5632__auto___11164 = cljs.core.chunk_first.call(null,seq__11138_11163__$1);{
var G__11165 = cljs.core.chunk_rest.call(null,seq__11138_11163__$1);
var G__11166 = c__5632__auto___11164;
var G__11167 = cljs.core.count.call(null,c__5632__auto___11164);
var G__11168 = 0;
seq__11138_11151 = G__11165;
chunk__11139_11152 = G__11166;
count__11140_11153 = G__11167;
i__11141_11154 = G__11168;
continue;
}
} else
{var vec__11143_11169 = cljs.core.first.call(null,seq__11138_11163__$1);var k_11170 = cljs.core.nth.call(null,vec__11143_11169,0,null);var v_11171 = cljs.core.nth.call(null,vec__11143_11169,1,null);(o[cljs.core.name.call(null,k_11170)] = js_props.call(null,v_11171));
{
var G__11172 = cljs.core.next.call(null,seq__11138_11163__$1);
var G__11173 = null;
var G__11174 = 0;
var G__11175 = 0;
seq__11138_11151 = G__11172;
chunk__11139_11152 = G__11173;
count__11140_11153 = G__11174;
i__11141_11154 = G__11175;
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
quiescent.component = (function component(renderer){var react_component = React.createClass({"render": (function (){var this$ = this;var _STAR_component_STAR_11145 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return cljs.core.apply.call(null,renderer,(this$.props["value"]),(this$.props["statics"]));
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11145;
}}), "shouldComponentUpdate": (function (next_props,_){var this$ = this;return cljs.core.not_EQ_.call(null,(this$.props["value"]),(next_props["value"]));
})});return ((function (react_component){
return (function() { 
var G__11176__delegate = function (value,static_args){return react_component.call(null,{"statics": static_args, "value": value});
};
var G__11176 = function (value,var_args){
var static_args = null;if (arguments.length > 1) {
  static_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__11176__delegate.call(this,value,static_args);};
G__11176.cljs$lang$maxFixedArity = 1;
G__11176.cljs$lang$applyTo = (function (arglist__11177){
var value = cljs.core.first(arglist__11177);
var static_args = cljs.core.rest(arglist__11177);
return G__11176__delegate(value,static_args);
});
G__11176.cljs$core$IFn$_invoke$arity$variadic = G__11176__delegate;
return G__11176;
})()
;
;})(react_component))
});
/**
* Wrapper component used to mix-in lifecycle access
*/
quiescent.WrapperComponent = React.createClass({"componentWillUnmount": (function (){var this$ = this;var temp__4092__auto__ = (this$.props["onWillUnmount"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_11150 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null);
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11150;
}} else
{return null;
}
}), "componentWillUpdate": (function (_,___$1){var this$ = this;var temp__4092__auto__ = (this$.props["onWillUpdate"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_11149 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null);
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11149;
}} else
{return null;
}
}), "componentWillMount": (function (){var this$ = this;var temp__4092__auto__ = (this$.props["onWillMount"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_11148 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null);
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11148;
}} else
{return null;
}
}), "componentDidMount": (function (){var this$ = this;var temp__4092__auto__ = (this$.props["onMount"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_11147 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null,this$.getDOMNode());
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11147;
}} else
{return null;
}
}), "componentDidUpdate": (function (prev_props,prev_state){var this$ = this;var temp__4092__auto__ = (this$.props["onUpdate"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_11146 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null,this$.getDOMNode());
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11146;
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
var wrapper__delegate = function (child,kvs){var props = quiescent.js_props.call(null,cljs.core.apply.call(null,cljs.core.array_map,new cljs.core.Keyword(null,"wrappee","wrappee",2609412088),child,kvs));var temp__4092__auto___11178 = (child.props["key"]);if(cljs.core.truth_(temp__4092__auto___11178))
{var key_11179 = temp__4092__auto___11178;(props["key"] = key_11179);
} else
{}
return quiescent.WrapperComponent.call(null,props);
};
var wrapper = function (child,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrapper__delegate.call(this,child,kvs);};
wrapper.cljs$lang$maxFixedArity = 1;
wrapper.cljs$lang$applyTo = (function (arglist__11180){
var child = cljs.core.first(arglist__11180);
var kvs = cljs.core.rest(arglist__11180);
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
var a__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__7562_8510 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__7563_8511 = null;var count__7564_8512 = 0;var i__7565_8513 = 0;while(true){
if((i__7565_8513 < count__7564_8512))
{var arg__6562__auto___8514 = cljs.core._nth.call(null,chunk__7563_8511,i__7565_8513);a__6561__auto__.push(arg__6562__auto___8514);
{
var G__8515 = seq__7562_8510;
var G__8516 = chunk__7563_8511;
var G__8517 = count__7564_8512;
var G__8518 = (i__7565_8513 + 1);
seq__7562_8510 = G__8515;
chunk__7563_8511 = G__8516;
count__7564_8512 = G__8517;
i__7565_8513 = G__8518;
continue;
}
} else
{var temp__4092__auto___8519 = cljs.core.seq.call(null,seq__7562_8510);if(temp__4092__auto___8519)
{var seq__7562_8520__$1 = temp__4092__auto___8519;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7562_8520__$1))
{var c__5632__auto___8521 = cljs.core.chunk_first.call(null,seq__7562_8520__$1);{
var G__8522 = cljs.core.chunk_rest.call(null,seq__7562_8520__$1);
var G__8523 = c__5632__auto___8521;
var G__8524 = cljs.core.count.call(null,c__5632__auto___8521);
var G__8525 = 0;
seq__7562_8510 = G__8522;
chunk__7563_8511 = G__8523;
count__7564_8512 = G__8524;
i__7565_8513 = G__8525;
continue;
}
} else
{var arg__6562__auto___8526 = cljs.core.first.call(null,seq__7562_8520__$1);a__6561__auto__.push(arg__6562__auto___8526);
{
var G__8527 = cljs.core.next.call(null,seq__7562_8520__$1);
var G__8528 = null;
var G__8529 = 0;
var G__8530 = 0;
seq__7562_8510 = G__8527;
chunk__7563_8511 = G__8528;
count__7564_8512 = G__8529;
i__7565_8513 = G__8530;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.a.apply(null,a__6561__auto__);
};
var a = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return a__delegate.call(this,args__6560__auto__);};
a.cljs$lang$maxFixedArity = 0;
a.cljs$lang$applyTo = (function (arglist__8531){
var args__6560__auto__ = cljs.core.seq(arglist__8531);
return a__delegate(args__6560__auto__);
});
a.cljs$core$IFn$_invoke$arity$variadic = a__delegate;
return a;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.abbr = (function() { 
var abbr__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__7570_8532 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__7571_8533 = null;var count__7572_8534 = 0;var i__7573_8535 = 0;while(true){
if((i__7573_8535 < count__7572_8534))
{var arg__6562__auto___8536 = cljs.core._nth.call(null,chunk__7571_8533,i__7573_8535);a__6561__auto__.push(arg__6562__auto___8536);
{
var G__8537 = seq__7570_8532;
var G__8538 = chunk__7571_8533;
var G__8539 = count__7572_8534;
var G__8540 = (i__7573_8535 + 1);
seq__7570_8532 = G__8537;
chunk__7571_8533 = G__8538;
count__7572_8534 = G__8539;
i__7573_8535 = G__8540;
continue;
}
} else
{var temp__4092__auto___8541 = cljs.core.seq.call(null,seq__7570_8532);if(temp__4092__auto___8541)
{var seq__7570_8542__$1 = temp__4092__auto___8541;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7570_8542__$1))
{var c__5632__auto___8543 = cljs.core.chunk_first.call(null,seq__7570_8542__$1);{
var G__8544 = cljs.core.chunk_rest.call(null,seq__7570_8542__$1);
var G__8545 = c__5632__auto___8543;
var G__8546 = cljs.core.count.call(null,c__5632__auto___8543);
var G__8547 = 0;
seq__7570_8532 = G__8544;
chunk__7571_8533 = G__8545;
count__7572_8534 = G__8546;
i__7573_8535 = G__8547;
continue;
}
} else
{var arg__6562__auto___8548 = cljs.core.first.call(null,seq__7570_8542__$1);a__6561__auto__.push(arg__6562__auto___8548);
{
var G__8549 = cljs.core.next.call(null,seq__7570_8542__$1);
var G__8550 = null;
var G__8551 = 0;
var G__8552 = 0;
seq__7570_8532 = G__8549;
chunk__7571_8533 = G__8550;
count__7572_8534 = G__8551;
i__7573_8535 = G__8552;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.abbr.apply(null,a__6561__auto__);
};
var abbr = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return abbr__delegate.call(this,args__6560__auto__);};
abbr.cljs$lang$maxFixedArity = 0;
abbr.cljs$lang$applyTo = (function (arglist__8553){
var args__6560__auto__ = cljs.core.seq(arglist__8553);
return abbr__delegate(args__6560__auto__);
});
abbr.cljs$core$IFn$_invoke$arity$variadic = abbr__delegate;
return abbr;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.address = (function() { 
var address__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__7578_8554 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__7579_8555 = null;var count__7580_8556 = 0;var i__7581_8557 = 0;while(true){
if((i__7581_8557 < count__7580_8556))
{var arg__6562__auto___8558 = cljs.core._nth.call(null,chunk__7579_8555,i__7581_8557);a__6561__auto__.push(arg__6562__auto___8558);
{
var G__8559 = seq__7578_8554;
var G__8560 = chunk__7579_8555;
var G__8561 = count__7580_8556;
var G__8562 = (i__7581_8557 + 1);
seq__7578_8554 = G__8559;
chunk__7579_8555 = G__8560;
count__7580_8556 = G__8561;
i__7581_8557 = G__8562;
continue;
}
} else
{var temp__4092__auto___8563 = cljs.core.seq.call(null,seq__7578_8554);if(temp__4092__auto___8563)
{var seq__7578_8564__$1 = temp__4092__auto___8563;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7578_8564__$1))
{var c__5632__auto___8565 = cljs.core.chunk_first.call(null,seq__7578_8564__$1);{
var G__8566 = cljs.core.chunk_rest.call(null,seq__7578_8564__$1);
var G__8567 = c__5632__auto___8565;
var G__8568 = cljs.core.count.call(null,c__5632__auto___8565);
var G__8569 = 0;
seq__7578_8554 = G__8566;
chunk__7579_8555 = G__8567;
count__7580_8556 = G__8568;
i__7581_8557 = G__8569;
continue;
}
} else
{var arg__6562__auto___8570 = cljs.core.first.call(null,seq__7578_8564__$1);a__6561__auto__.push(arg__6562__auto___8570);
{
var G__8571 = cljs.core.next.call(null,seq__7578_8564__$1);
var G__8572 = null;
var G__8573 = 0;
var G__8574 = 0;
seq__7578_8554 = G__8571;
chunk__7579_8555 = G__8572;
count__7580_8556 = G__8573;
i__7581_8557 = G__8574;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.address.apply(null,a__6561__auto__);
};
var address = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return address__delegate.call(this,args__6560__auto__);};
address.cljs$lang$maxFixedArity = 0;
address.cljs$lang$applyTo = (function (arglist__8575){
var args__6560__auto__ = cljs.core.seq(arglist__8575);
return address__delegate(args__6560__auto__);
});
address.cljs$core$IFn$_invoke$arity$variadic = address__delegate;
return address;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.area = (function() { 
var area__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__7586_8576 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__7587_8577 = null;var count__7588_8578 = 0;var i__7589_8579 = 0;while(true){
if((i__7589_8579 < count__7588_8578))
{var arg__6562__auto___8580 = cljs.core._nth.call(null,chunk__7587_8577,i__7589_8579);a__6561__auto__.push(arg__6562__auto___8580);
{
var G__8581 = seq__7586_8576;
var G__8582 = chunk__7587_8577;
var G__8583 = count__7588_8578;
var G__8584 = (i__7589_8579 + 1);
seq__7586_8576 = G__8581;
chunk__7587_8577 = G__8582;
count__7588_8578 = G__8583;
i__7589_8579 = G__8584;
continue;
}
} else
{var temp__4092__auto___8585 = cljs.core.seq.call(null,seq__7586_8576);if(temp__4092__auto___8585)
{var seq__7586_8586__$1 = temp__4092__auto___8585;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7586_8586__$1))
{var c__5632__auto___8587 = cljs.core.chunk_first.call(null,seq__7586_8586__$1);{
var G__8588 = cljs.core.chunk_rest.call(null,seq__7586_8586__$1);
var G__8589 = c__5632__auto___8587;
var G__8590 = cljs.core.count.call(null,c__5632__auto___8587);
var G__8591 = 0;
seq__7586_8576 = G__8588;
chunk__7587_8577 = G__8589;
count__7588_8578 = G__8590;
i__7589_8579 = G__8591;
continue;
}
} else
{var arg__6562__auto___8592 = cljs.core.first.call(null,seq__7586_8586__$1);a__6561__auto__.push(arg__6562__auto___8592);
{
var G__8593 = cljs.core.next.call(null,seq__7586_8586__$1);
var G__8594 = null;
var G__8595 = 0;
var G__8596 = 0;
seq__7586_8576 = G__8593;
chunk__7587_8577 = G__8594;
count__7588_8578 = G__8595;
i__7589_8579 = G__8596;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.area.apply(null,a__6561__auto__);
};
var area = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return area__delegate.call(this,args__6560__auto__);};
area.cljs$lang$maxFixedArity = 0;
area.cljs$lang$applyTo = (function (arglist__8597){
var args__6560__auto__ = cljs.core.seq(arglist__8597);
return area__delegate(args__6560__auto__);
});
area.cljs$core$IFn$_invoke$arity$variadic = area__delegate;
return area;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.article = (function() { 
var article__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__7594_8598 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__7595_8599 = null;var count__7596_8600 = 0;var i__7597_8601 = 0;while(true){
if((i__7597_8601 < count__7596_8600))
{var arg__6562__auto___8602 = cljs.core._nth.call(null,chunk__7595_8599,i__7597_8601);a__6561__auto__.push(arg__6562__auto___8602);
{
var G__8603 = seq__7594_8598;
var G__8604 = chunk__7595_8599;
var G__8605 = count__7596_8600;
var G__8606 = (i__7597_8601 + 1);
seq__7594_8598 = G__8603;
chunk__7595_8599 = G__8604;
count__7596_8600 = G__8605;
i__7597_8601 = G__8606;
continue;
}
} else
{var temp__4092__auto___8607 = cljs.core.seq.call(null,seq__7594_8598);if(temp__4092__auto___8607)
{var seq__7594_8608__$1 = temp__4092__auto___8607;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7594_8608__$1))
{var c__5632__auto___8609 = cljs.core.chunk_first.call(null,seq__7594_8608__$1);{
var G__8610 = cljs.core.chunk_rest.call(null,seq__7594_8608__$1);
var G__8611 = c__5632__auto___8609;
var G__8612 = cljs.core.count.call(null,c__5632__auto___8609);
var G__8613 = 0;
seq__7594_8598 = G__8610;
chunk__7595_8599 = G__8611;
count__7596_8600 = G__8612;
i__7597_8601 = G__8613;
continue;
}
} else
{var arg__6562__auto___8614 = cljs.core.first.call(null,seq__7594_8608__$1);a__6561__auto__.push(arg__6562__auto___8614);
{
var G__8615 = cljs.core.next.call(null,seq__7594_8608__$1);
var G__8616 = null;
var G__8617 = 0;
var G__8618 = 0;
seq__7594_8598 = G__8615;
chunk__7595_8599 = G__8616;
count__7596_8600 = G__8617;
i__7597_8601 = G__8618;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.article.apply(null,a__6561__auto__);
};
var article = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return article__delegate.call(this,args__6560__auto__);};
article.cljs$lang$maxFixedArity = 0;
article.cljs$lang$applyTo = (function (arglist__8619){
var args__6560__auto__ = cljs.core.seq(arglist__8619);
return article__delegate(args__6560__auto__);
});
article.cljs$core$IFn$_invoke$arity$variadic = article__delegate;
return article;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.aside = (function() { 
var aside__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__7602_8620 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__7603_8621 = null;var count__7604_8622 = 0;var i__7605_8623 = 0;while(true){
if((i__7605_8623 < count__7604_8622))
{var arg__6562__auto___8624 = cljs.core._nth.call(null,chunk__7603_8621,i__7605_8623);a__6561__auto__.push(arg__6562__auto___8624);
{
var G__8625 = seq__7602_8620;
var G__8626 = chunk__7603_8621;
var G__8627 = count__7604_8622;
var G__8628 = (i__7605_8623 + 1);
seq__7602_8620 = G__8625;
chunk__7603_8621 = G__8626;
count__7604_8622 = G__8627;
i__7605_8623 = G__8628;
continue;
}
} else
{var temp__4092__auto___8629 = cljs.core.seq.call(null,seq__7602_8620);if(temp__4092__auto___8629)
{var seq__7602_8630__$1 = temp__4092__auto___8629;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7602_8630__$1))
{var c__5632__auto___8631 = cljs.core.chunk_first.call(null,seq__7602_8630__$1);{
var G__8632 = cljs.core.chunk_rest.call(null,seq__7602_8630__$1);
var G__8633 = c__5632__auto___8631;
var G__8634 = cljs.core.count.call(null,c__5632__auto___8631);
var G__8635 = 0;
seq__7602_8620 = G__8632;
chunk__7603_8621 = G__8633;
count__7604_8622 = G__8634;
i__7605_8623 = G__8635;
continue;
}
} else
{var arg__6562__auto___8636 = cljs.core.first.call(null,seq__7602_8630__$1);a__6561__auto__.push(arg__6562__auto___8636);
{
var G__8637 = cljs.core.next.call(null,seq__7602_8630__$1);
var G__8638 = null;
var G__8639 = 0;
var G__8640 = 0;
seq__7602_8620 = G__8637;
chunk__7603_8621 = G__8638;
count__7604_8622 = G__8639;
i__7605_8623 = G__8640;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.aside.apply(null,a__6561__auto__);
};
var aside = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return aside__delegate.call(this,args__6560__auto__);};
aside.cljs$lang$maxFixedArity = 0;
aside.cljs$lang$applyTo = (function (arglist__8641){
var args__6560__auto__ = cljs.core.seq(arglist__8641);
return aside__delegate(args__6560__auto__);
});
aside.cljs$core$IFn$_invoke$arity$variadic = aside__delegate;
return aside;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.audio = (function() { 
var audio__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__7610_8642 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__7611_8643 = null;var count__7612_8644 = 0;var i__7613_8645 = 0;while(true){
if((i__7613_8645 < count__7612_8644))
{var arg__6562__auto___8646 = cljs.core._nth.call(null,chunk__7611_8643,i__7613_8645);a__6561__auto__.push(arg__6562__auto___8646);
{
var G__8647 = seq__7610_8642;
var G__8648 = chunk__7611_8643;
var G__8649 = count__7612_8644;
var G__8650 = (i__7613_8645 + 1);
seq__7610_8642 = G__8647;
chunk__7611_8643 = G__8648;
count__7612_8644 = G__8649;
i__7613_8645 = G__8650;
continue;
}
} else
{var temp__4092__auto___8651 = cljs.core.seq.call(null,seq__7610_8642);if(temp__4092__auto___8651)
{var seq__7610_8652__$1 = temp__4092__auto___8651;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7610_8652__$1))
{var c__5632__auto___8653 = cljs.core.chunk_first.call(null,seq__7610_8652__$1);{
var G__8654 = cljs.core.chunk_rest.call(null,seq__7610_8652__$1);
var G__8655 = c__5632__auto___8653;
var G__8656 = cljs.core.count.call(null,c__5632__auto___8653);
var G__8657 = 0;
seq__7610_8642 = G__8654;
chunk__7611_8643 = G__8655;
count__7612_8644 = G__8656;
i__7613_8645 = G__8657;
continue;
}
} else
{var arg__6562__auto___8658 = cljs.core.first.call(null,seq__7610_8652__$1);a__6561__auto__.push(arg__6562__auto___8658);
{
var G__8659 = cljs.core.next.call(null,seq__7610_8652__$1);
var G__8660 = null;
var G__8661 = 0;
var G__8662 = 0;
seq__7610_8642 = G__8659;
chunk__7611_8643 = G__8660;
count__7612_8644 = G__8661;
i__7613_8645 = G__8662;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.audio.apply(null,a__6561__auto__);
};
var audio = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return audio__delegate.call(this,args__6560__auto__);};
audio.cljs$lang$maxFixedArity = 0;
audio.cljs$lang$applyTo = (function (arglist__8663){
var args__6560__auto__ = cljs.core.seq(arglist__8663);
return audio__delegate(args__6560__auto__);
});
audio.cljs$core$IFn$_invoke$arity$variadic = audio__delegate;
return audio;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.b = (function() { 
var b__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__7618_8664 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__7619_8665 = null;var count__7620_8666 = 0;var i__7621_8667 = 0;while(true){
if((i__7621_8667 < count__7620_8666))
{var arg__6562__auto___8668 = cljs.core._nth.call(null,chunk__7619_8665,i__7621_8667);a__6561__auto__.push(arg__6562__auto___8668);
{
var G__8669 = seq__7618_8664;
var G__8670 = chunk__7619_8665;
var G__8671 = count__7620_8666;
var G__8672 = (i__7621_8667 + 1);
seq__7618_8664 = G__8669;
chunk__7619_8665 = G__8670;
count__7620_8666 = G__8671;
i__7621_8667 = G__8672;
continue;
}
} else
{var temp__4092__auto___8673 = cljs.core.seq.call(null,seq__7618_8664);if(temp__4092__auto___8673)
{var seq__7618_8674__$1 = temp__4092__auto___8673;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7618_8674__$1))
{var c__5632__auto___8675 = cljs.core.chunk_first.call(null,seq__7618_8674__$1);{
var G__8676 = cljs.core.chunk_rest.call(null,seq__7618_8674__$1);
var G__8677 = c__5632__auto___8675;
var G__8678 = cljs.core.count.call(null,c__5632__auto___8675);
var G__8679 = 0;
seq__7618_8664 = G__8676;
chunk__7619_8665 = G__8677;
count__7620_8666 = G__8678;
i__7621_8667 = G__8679;
continue;
}
} else
{var arg__6562__auto___8680 = cljs.core.first.call(null,seq__7618_8674__$1);a__6561__auto__.push(arg__6562__auto___8680);
{
var G__8681 = cljs.core.next.call(null,seq__7618_8674__$1);
var G__8682 = null;
var G__8683 = 0;
var G__8684 = 0;
seq__7618_8664 = G__8681;
chunk__7619_8665 = G__8682;
count__7620_8666 = G__8683;
i__7621_8667 = G__8684;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.b.apply(null,a__6561__auto__);
};
var b = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return b__delegate.call(this,args__6560__auto__);};
b.cljs$lang$maxFixedArity = 0;
b.cljs$lang$applyTo = (function (arglist__8685){
var args__6560__auto__ = cljs.core.seq(arglist__8685);
return b__delegate(args__6560__auto__);
});
b.cljs$core$IFn$_invoke$arity$variadic = b__delegate;
return b;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.base = (function() { 
var base__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__7626_8686 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__7627_8687 = null;var count__7628_8688 = 0;var i__7629_8689 = 0;while(true){
if((i__7629_8689 < count__7628_8688))
{var arg__6562__auto___8690 = cljs.core._nth.call(null,chunk__7627_8687,i__7629_8689);a__6561__auto__.push(arg__6562__auto___8690);
{
var G__8691 = seq__7626_8686;
var G__8692 = chunk__7627_8687;
var G__8693 = count__7628_8688;
var G__8694 = (i__7629_8689 + 1);
seq__7626_8686 = G__8691;
chunk__7627_8687 = G__8692;
count__7628_8688 = G__8693;
i__7629_8689 = G__8694;
continue;
}
} else
{var temp__4092__auto___8695 = cljs.core.seq.call(null,seq__7626_8686);if(temp__4092__auto___8695)
{var seq__7626_8696__$1 = temp__4092__auto___8695;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7626_8696__$1))
{var c__5632__auto___8697 = cljs.core.chunk_first.call(null,seq__7626_8696__$1);{
var G__8698 = cljs.core.chunk_rest.call(null,seq__7626_8696__$1);
var G__8699 = c__5632__auto___8697;
var G__8700 = cljs.core.count.call(null,c__5632__auto___8697);
var G__8701 = 0;
seq__7626_8686 = G__8698;
chunk__7627_8687 = G__8699;
count__7628_8688 = G__8700;
i__7629_8689 = G__8701;
continue;
}
} else
{var arg__6562__auto___8702 = cljs.core.first.call(null,seq__7626_8696__$1);a__6561__auto__.push(arg__6562__auto___8702);
{
var G__8703 = cljs.core.next.call(null,seq__7626_8696__$1);
var G__8704 = null;
var G__8705 = 0;
var G__8706 = 0;
seq__7626_8686 = G__8703;
chunk__7627_8687 = G__8704;
count__7628_8688 = G__8705;
i__7629_8689 = G__8706;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.base.apply(null,a__6561__auto__);
};
var base = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return base__delegate.call(this,args__6560__auto__);};
base.cljs$lang$maxFixedArity = 0;
base.cljs$lang$applyTo = (function (arglist__8707){
var args__6560__auto__ = cljs.core.seq(arglist__8707);
return base__delegate(args__6560__auto__);
});
base.cljs$core$IFn$_invoke$arity$variadic = base__delegate;
return base;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.bdi = (function() { 
var bdi__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__7634_8708 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__7635_8709 = null;var count__7636_8710 = 0;var i__7637_8711 = 0;while(true){
if((i__7637_8711 < count__7636_8710))
{var arg__6562__auto___8712 = cljs.core._nth.call(null,chunk__7635_8709,i__7637_8711);a__6561__auto__.push(arg__6562__auto___8712);
{
var G__8713 = seq__7634_8708;
var G__8714 = chunk__7635_8709;
var G__8715 = count__7636_8710;
var G__8716 = (i__7637_8711 + 1);
seq__7634_8708 = G__8713;
chunk__7635_8709 = G__8714;
count__7636_8710 = G__8715;
i__7637_8711 = G__8716;
continue;
}
} else
{var temp__4092__auto___8717 = cljs.core.seq.call(null,seq__7634_8708);if(temp__4092__auto___8717)
{var seq__7634_8718__$1 = temp__4092__auto___8717;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7634_8718__$1))
{var c__5632__auto___8719 = cljs.core.chunk_first.call(null,seq__7634_8718__$1);{
var G__8720 = cljs.core.chunk_rest.call(null,seq__7634_8718__$1);
var G__8721 = c__5632__auto___8719;
var G__8722 = cljs.core.count.call(null,c__5632__auto___8719);
var G__8723 = 0;
seq__7634_8708 = G__8720;
chunk__7635_8709 = G__8721;
count__7636_8710 = G__8722;
i__7637_8711 = G__8723;
continue;
}
} else
{var arg__6562__auto___8724 = cljs.core.first.call(null,seq__7634_8718__$1);a__6561__auto__.push(arg__6562__auto___8724);
{
var G__8725 = cljs.core.next.call(null,seq__7634_8718__$1);
var G__8726 = null;
var G__8727 = 0;
var G__8728 = 0;
seq__7634_8708 = G__8725;
chunk__7635_8709 = G__8726;
count__7636_8710 = G__8727;
i__7637_8711 = G__8728;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.bdi.apply(null,a__6561__auto__);
};
var bdi = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return bdi__delegate.call(this,args__6560__auto__);};
bdi.cljs$lang$maxFixedArity = 0;
bdi.cljs$lang$applyTo = (function (arglist__8729){
var args__6560__auto__ = cljs.core.seq(arglist__8729);
return bdi__delegate(args__6560__auto__);
});
bdi.cljs$core$IFn$_invoke$arity$variadic = bdi__delegate;
return bdi;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.bdo = (function() { 
var bdo__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__7642_8730 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__7643_8731 = null;var count__7644_8732 = 0;var i__7645_8733 = 0;while(true){
if((i__7645_8733 < count__7644_8732))
{var arg__6562__auto___8734 = cljs.core._nth.call(null,chunk__7643_8731,i__7645_8733);a__6561__auto__.push(arg__6562__auto___8734);
{
var G__8735 = seq__7642_8730;
var G__8736 = chunk__7643_8731;
var G__8737 = count__7644_8732;
var G__8738 = (i__7645_8733 + 1);
seq__7642_8730 = G__8735;
chunk__7643_8731 = G__8736;
count__7644_8732 = G__8737;
i__7645_8733 = G__8738;
continue;
}
} else
{var temp__4092__auto___8739 = cljs.core.seq.call(null,seq__7642_8730);if(temp__4092__auto___8739)
{var seq__7642_8740__$1 = temp__4092__auto___8739;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7642_8740__$1))
{var c__5632__auto___8741 = cljs.core.chunk_first.call(null,seq__7642_8740__$1);{
var G__8742 = cljs.core.chunk_rest.call(null,seq__7642_8740__$1);
var G__8743 = c__5632__auto___8741;
var G__8744 = cljs.core.count.call(null,c__5632__auto___8741);
var G__8745 = 0;
seq__7642_8730 = G__8742;
chunk__7643_8731 = G__8743;
count__7644_8732 = G__8744;
i__7645_8733 = G__8745;
continue;
}
} else
{var arg__6562__auto___8746 = cljs.core.first.call(null,seq__7642_8740__$1);a__6561__auto__.push(arg__6562__auto___8746);
{
var G__8747 = cljs.core.next.call(null,seq__7642_8740__$1);
var G__8748 = null;
var G__8749 = 0;
var G__8750 = 0;
seq__7642_8730 = G__8747;
chunk__7643_8731 = G__8748;
count__7644_8732 = G__8749;
i__7645_8733 = G__8750;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.bdo.apply(null,a__6561__auto__);
};
var bdo = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return bdo__delegate.call(this,args__6560__auto__);};
bdo.cljs$lang$maxFixedArity = 0;
bdo.cljs$lang$applyTo = (function (arglist__8751){
var args__6560__auto__ = cljs.core.seq(arglist__8751);
return bdo__delegate(args__6560__auto__);
});
bdo.cljs$core$IFn$_invoke$arity$variadic = bdo__delegate;
return bdo;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.big = (function() { 
var big__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__7650_8752 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__7651_8753 = null;var count__7652_8754 = 0;var i__7653_8755 = 0;while(true){
if((i__7653_8755 < count__7652_8754))
{var arg__6562__auto___8756 = cljs.core._nth.call(null,chunk__7651_8753,i__7653_8755);a__6561__auto__.push(arg__6562__auto___8756);
{
var G__8757 = seq__7650_8752;
var G__8758 = chunk__7651_8753;
var G__8759 = count__7652_8754;
var G__8760 = (i__7653_8755 + 1);
seq__7650_8752 = G__8757;
chunk__7651_8753 = G__8758;
count__7652_8754 = G__8759;
i__7653_8755 = G__8760;
continue;
}
} else
{var temp__4092__auto___8761 = cljs.core.seq.call(null,seq__7650_8752);if(temp__4092__auto___8761)
{var seq__7650_8762__$1 = temp__4092__auto___8761;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7650_8762__$1))
{var c__5632__auto___8763 = cljs.core.chunk_first.call(null,seq__7650_8762__$1);{
var G__8764 = cljs.core.chunk_rest.call(null,seq__7650_8762__$1);
var G__8765 = c__5632__auto___8763;
var G__8766 = cljs.core.count.call(null,c__5632__auto___8763);
var G__8767 = 0;
seq__7650_8752 = G__8764;
chunk__7651_8753 = G__8765;
count__7652_8754 = G__8766;
i__7653_8755 = G__8767;
continue;
}
} else
{var arg__6562__auto___8768 = cljs.core.first.call(null,seq__7650_8762__$1);a__6561__auto__.push(arg__6562__auto___8768);
{
var G__8769 = cljs.core.next.call(null,seq__7650_8762__$1);
var G__8770 = null;
var G__8771 = 0;
var G__8772 = 0;
seq__7650_8752 = G__8769;
chunk__7651_8753 = G__8770;
count__7652_8754 = G__8771;
i__7653_8755 = G__8772;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.big.apply(null,a__6561__auto__);
};
var big = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return big__delegate.call(this,args__6560__auto__);};
big.cljs$lang$maxFixedArity = 0;
big.cljs$lang$applyTo = (function (arglist__8773){
var args__6560__auto__ = cljs.core.seq(arglist__8773);
return big__delegate(args__6560__auto__);
});
big.cljs$core$IFn$_invoke$arity$variadic = big__delegate;
return big;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.blockquote = (function() { 
var blockquote__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__7658_8774 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__7659_8775 = null;var count__7660_8776 = 0;var i__7661_8777 = 0;while(true){
if((i__7661_8777 < count__7660_8776))
{var arg__6562__auto___8778 = cljs.core._nth.call(null,chunk__7659_8775,i__7661_8777);a__6561__auto__.push(arg__6562__auto___8778);
{
var G__8779 = seq__7658_8774;
var G__8780 = chunk__7659_8775;
var G__8781 = count__7660_8776;
var G__8782 = (i__7661_8777 + 1);
seq__7658_8774 = G__8779;
chunk__7659_8775 = G__8780;
count__7660_8776 = G__8781;
i__7661_8777 = G__8782;
continue;
}
} else
{var temp__4092__auto___8783 = cljs.core.seq.call(null,seq__7658_8774);if(temp__4092__auto___8783)
{var seq__7658_8784__$1 = temp__4092__auto___8783;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7658_8784__$1))
{var c__5632__auto___8785 = cljs.core.chunk_first.call(null,seq__7658_8784__$1);{
var G__8786 = cljs.core.chunk_rest.call(null,seq__7658_8784__$1);
var G__8787 = c__5632__auto___8785;
var G__8788 = cljs.core.count.call(null,c__5632__auto___8785);
var G__8789 = 0;
seq__7658_8774 = G__8786;
chunk__7659_8775 = G__8787;
count__7660_8776 = G__8788;
i__7661_8777 = G__8789;
continue;
}
} else
{var arg__6562__auto___8790 = cljs.core.first.call(null,seq__7658_8784__$1);a__6561__auto__.push(arg__6562__auto___8790);
{
var G__8791 = cljs.core.next.call(null,seq__7658_8784__$1);
var G__8792 = null;
var G__8793 = 0;
var G__8794 = 0;
seq__7658_8774 = G__8791;
chunk__7659_8775 = G__8792;
count__7660_8776 = G__8793;
i__7661_8777 = G__8794;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.blockquote.apply(null,a__6561__auto__);
};
var blockquote = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return blockquote__delegate.call(this,args__6560__auto__);};
blockquote.cljs$lang$maxFixedArity = 0;
blockquote.cljs$lang$applyTo = (function (arglist__8795){
var args__6560__auto__ = cljs.core.seq(arglist__8795);
return blockquote__delegate(args__6560__auto__);
});
blockquote.cljs$core$IFn$_invoke$arity$variadic = blockquote__delegate;
return blockquote;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.body = (function() { 
var body__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__7666_8796 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__7667_8797 = null;var count__7668_8798 = 0;var i__7669_8799 = 0;while(true){
if((i__7669_8799 < count__7668_8798))
{var arg__6562__auto___8800 = cljs.core._nth.call(null,chunk__7667_8797,i__7669_8799);a__6561__auto__.push(arg__6562__auto___8800);
{
var G__8801 = seq__7666_8796;
var G__8802 = chunk__7667_8797;
var G__8803 = count__7668_8798;
var G__8804 = (i__7669_8799 + 1);
seq__7666_8796 = G__8801;
chunk__7667_8797 = G__8802;
count__7668_8798 = G__8803;
i__7669_8799 = G__8804;
continue;
}
} else
{var temp__4092__auto___8805 = cljs.core.seq.call(null,seq__7666_8796);if(temp__4092__auto___8805)
{var seq__7666_8806__$1 = temp__4092__auto___8805;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7666_8806__$1))
{var c__5632__auto___8807 = cljs.core.chunk_first.call(null,seq__7666_8806__$1);{
var G__8808 = cljs.core.chunk_rest.call(null,seq__7666_8806__$1);
var G__8809 = c__5632__auto___8807;
var G__8810 = cljs.core.count.call(null,c__5632__auto___8807);
var G__8811 = 0;
seq__7666_8796 = G__8808;
chunk__7667_8797 = G__8809;
count__7668_8798 = G__8810;
i__7669_8799 = G__8811;
continue;
}
} else
{var arg__6562__auto___8812 = cljs.core.first.call(null,seq__7666_8806__$1);a__6561__auto__.push(arg__6562__auto___8812);
{
var G__8813 = cljs.core.next.call(null,seq__7666_8806__$1);
var G__8814 = null;
var G__8815 = 0;
var G__8816 = 0;
seq__7666_8796 = G__8813;
chunk__7667_8797 = G__8814;
count__7668_8798 = G__8815;
i__7669_8799 = G__8816;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.body.apply(null,a__6561__auto__);
};
var body = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return body__delegate.call(this,args__6560__auto__);};
body.cljs$lang$maxFixedArity = 0;
body.cljs$lang$applyTo = (function (arglist__8817){
var args__6560__auto__ = cljs.core.seq(arglist__8817);
return body__delegate(args__6560__auto__);
});
body.cljs$core$IFn$_invoke$arity$variadic = body__delegate;
return body;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.br = (function() { 
var br__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__7674_8818 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__7675_8819 = null;var count__7676_8820 = 0;var i__7677_8821 = 0;while(true){
if((i__7677_8821 < count__7676_8820))
{var arg__6562__auto___8822 = cljs.core._nth.call(null,chunk__7675_8819,i__7677_8821);a__6561__auto__.push(arg__6562__auto___8822);
{
var G__8823 = seq__7674_8818;
var G__8824 = chunk__7675_8819;
var G__8825 = count__7676_8820;
var G__8826 = (i__7677_8821 + 1);
seq__7674_8818 = G__8823;
chunk__7675_8819 = G__8824;
count__7676_8820 = G__8825;
i__7677_8821 = G__8826;
continue;
}
} else
{var temp__4092__auto___8827 = cljs.core.seq.call(null,seq__7674_8818);if(temp__4092__auto___8827)
{var seq__7674_8828__$1 = temp__4092__auto___8827;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7674_8828__$1))
{var c__5632__auto___8829 = cljs.core.chunk_first.call(null,seq__7674_8828__$1);{
var G__8830 = cljs.core.chunk_rest.call(null,seq__7674_8828__$1);
var G__8831 = c__5632__auto___8829;
var G__8832 = cljs.core.count.call(null,c__5632__auto___8829);
var G__8833 = 0;
seq__7674_8818 = G__8830;
chunk__7675_8819 = G__8831;
count__7676_8820 = G__8832;
i__7677_8821 = G__8833;
continue;
}
} else
{var arg__6562__auto___8834 = cljs.core.first.call(null,seq__7674_8828__$1);a__6561__auto__.push(arg__6562__auto___8834);
{
var G__8835 = cljs.core.next.call(null,seq__7674_8828__$1);
var G__8836 = null;
var G__8837 = 0;
var G__8838 = 0;
seq__7674_8818 = G__8835;
chunk__7675_8819 = G__8836;
count__7676_8820 = G__8837;
i__7677_8821 = G__8838;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.br.apply(null,a__6561__auto__);
};
var br = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return br__delegate.call(this,args__6560__auto__);};
br.cljs$lang$maxFixedArity = 0;
br.cljs$lang$applyTo = (function (arglist__8839){
var args__6560__auto__ = cljs.core.seq(arglist__8839);
return br__delegate(args__6560__auto__);
});
br.cljs$core$IFn$_invoke$arity$variadic = br__delegate;
return br;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.button = (function() { 
var button__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__7682_8840 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__7683_8841 = null;var count__7684_8842 = 0;var i__7685_8843 = 0;while(true){
if((i__7685_8843 < count__7684_8842))
{var arg__6562__auto___8844 = cljs.core._nth.call(null,chunk__7683_8841,i__7685_8843);a__6561__auto__.push(arg__6562__auto___8844);
{
var G__8845 = seq__7682_8840;
var G__8846 = chunk__7683_8841;
var G__8847 = count__7684_8842;
var G__8848 = (i__7685_8843 + 1);
seq__7682_8840 = G__8845;
chunk__7683_8841 = G__8846;
count__7684_8842 = G__8847;
i__7685_8843 = G__8848;
continue;
}
} else
{var temp__4092__auto___8849 = cljs.core.seq.call(null,seq__7682_8840);if(temp__4092__auto___8849)
{var seq__7682_8850__$1 = temp__4092__auto___8849;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7682_8850__$1))
{var c__5632__auto___8851 = cljs.core.chunk_first.call(null,seq__7682_8850__$1);{
var G__8852 = cljs.core.chunk_rest.call(null,seq__7682_8850__$1);
var G__8853 = c__5632__auto___8851;
var G__8854 = cljs.core.count.call(null,c__5632__auto___8851);
var G__8855 = 0;
seq__7682_8840 = G__8852;
chunk__7683_8841 = G__8853;
count__7684_8842 = G__8854;
i__7685_8843 = G__8855;
continue;
}
} else
{var arg__6562__auto___8856 = cljs.core.first.call(null,seq__7682_8850__$1);a__6561__auto__.push(arg__6562__auto___8856);
{
var G__8857 = cljs.core.next.call(null,seq__7682_8850__$1);
var G__8858 = null;
var G__8859 = 0;
var G__8860 = 0;
seq__7682_8840 = G__8857;
chunk__7683_8841 = G__8858;
count__7684_8842 = G__8859;
i__7685_8843 = G__8860;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.button.apply(null,a__6561__auto__);
};
var button = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return button__delegate.call(this,args__6560__auto__);};
button.cljs$lang$maxFixedArity = 0;
button.cljs$lang$applyTo = (function (arglist__8861){
var args__6560__auto__ = cljs.core.seq(arglist__8861);
return button__delegate(args__6560__auto__);
});
button.cljs$core$IFn$_invoke$arity$variadic = button__delegate;
return button;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.canvas = (function() { 
var canvas__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__7690_8862 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__7691_8863 = null;var count__7692_8864 = 0;var i__7693_8865 = 0;while(true){
if((i__7693_8865 < count__7692_8864))
{var arg__6562__auto___8866 = cljs.core._nth.call(null,chunk__7691_8863,i__7693_8865);a__6561__auto__.push(arg__6562__auto___8866);
{
var G__8867 = seq__7690_8862;
var G__8868 = chunk__7691_8863;
var G__8869 = count__7692_8864;
var G__8870 = (i__7693_8865 + 1);
seq__7690_8862 = G__8867;
chunk__7691_8863 = G__8868;
count__7692_8864 = G__8869;
i__7693_8865 = G__8870;
continue;
}
} else
{var temp__4092__auto___8871 = cljs.core.seq.call(null,seq__7690_8862);if(temp__4092__auto___8871)
{var seq__7690_8872__$1 = temp__4092__auto___8871;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7690_8872__$1))
{var c__5632__auto___8873 = cljs.core.chunk_first.call(null,seq__7690_8872__$1);{
var G__8874 = cljs.core.chunk_rest.call(null,seq__7690_8872__$1);
var G__8875 = c__5632__auto___8873;
var G__8876 = cljs.core.count.call(null,c__5632__auto___8873);
var G__8877 = 0;
seq__7690_8862 = G__8874;
chunk__7691_8863 = G__8875;
count__7692_8864 = G__8876;
i__7693_8865 = G__8877;
continue;
}
} else
{var arg__6562__auto___8878 = cljs.core.first.call(null,seq__7690_8872__$1);a__6561__auto__.push(arg__6562__auto___8878);
{
var G__8879 = cljs.core.next.call(null,seq__7690_8872__$1);
var G__8880 = null;
var G__8881 = 0;
var G__8882 = 0;
seq__7690_8862 = G__8879;
chunk__7691_8863 = G__8880;
count__7692_8864 = G__8881;
i__7693_8865 = G__8882;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.canvas.apply(null,a__6561__auto__);
};
var canvas = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return canvas__delegate.call(this,args__6560__auto__);};
canvas.cljs$lang$maxFixedArity = 0;
canvas.cljs$lang$applyTo = (function (arglist__8883){
var args__6560__auto__ = cljs.core.seq(arglist__8883);
return canvas__delegate(args__6560__auto__);
});
canvas.cljs$core$IFn$_invoke$arity$variadic = canvas__delegate;
return canvas;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.caption = (function() { 
var caption__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__7698_8884 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__7699_8885 = null;var count__7700_8886 = 0;var i__7701_8887 = 0;while(true){
if((i__7701_8887 < count__7700_8886))
{var arg__6562__auto___8888 = cljs.core._nth.call(null,chunk__7699_8885,i__7701_8887);a__6561__auto__.push(arg__6562__auto___8888);
{
var G__8889 = seq__7698_8884;
var G__8890 = chunk__7699_8885;
var G__8891 = count__7700_8886;
var G__8892 = (i__7701_8887 + 1);
seq__7698_8884 = G__8889;
chunk__7699_8885 = G__8890;
count__7700_8886 = G__8891;
i__7701_8887 = G__8892;
continue;
}
} else
{var temp__4092__auto___8893 = cljs.core.seq.call(null,seq__7698_8884);if(temp__4092__auto___8893)
{var seq__7698_8894__$1 = temp__4092__auto___8893;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7698_8894__$1))
{var c__5632__auto___8895 = cljs.core.chunk_first.call(null,seq__7698_8894__$1);{
var G__8896 = cljs.core.chunk_rest.call(null,seq__7698_8894__$1);
var G__8897 = c__5632__auto___8895;
var G__8898 = cljs.core.count.call(null,c__5632__auto___8895);
var G__8899 = 0;
seq__7698_8884 = G__8896;
chunk__7699_8885 = G__8897;
count__7700_8886 = G__8898;
i__7701_8887 = G__8899;
continue;
}
} else
{var arg__6562__auto___8900 = cljs.core.first.call(null,seq__7698_8894__$1);a__6561__auto__.push(arg__6562__auto___8900);
{
var G__8901 = cljs.core.next.call(null,seq__7698_8894__$1);
var G__8902 = null;
var G__8903 = 0;
var G__8904 = 0;
seq__7698_8884 = G__8901;
chunk__7699_8885 = G__8902;
count__7700_8886 = G__8903;
i__7701_8887 = G__8904;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.caption.apply(null,a__6561__auto__);
};
var caption = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return caption__delegate.call(this,args__6560__auto__);};
caption.cljs$lang$maxFixedArity = 0;
caption.cljs$lang$applyTo = (function (arglist__8905){
var args__6560__auto__ = cljs.core.seq(arglist__8905);
return caption__delegate(args__6560__auto__);
});
caption.cljs$core$IFn$_invoke$arity$variadic = caption__delegate;
return caption;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.cite = (function() { 
var cite__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__7706_8906 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__7707_8907 = null;var count__7708_8908 = 0;var i__7709_8909 = 0;while(true){
if((i__7709_8909 < count__7708_8908))
{var arg__6562__auto___8910 = cljs.core._nth.call(null,chunk__7707_8907,i__7709_8909);a__6561__auto__.push(arg__6562__auto___8910);
{
var G__8911 = seq__7706_8906;
var G__8912 = chunk__7707_8907;
var G__8913 = count__7708_8908;
var G__8914 = (i__7709_8909 + 1);
seq__7706_8906 = G__8911;
chunk__7707_8907 = G__8912;
count__7708_8908 = G__8913;
i__7709_8909 = G__8914;
continue;
}
} else
{var temp__4092__auto___8915 = cljs.core.seq.call(null,seq__7706_8906);if(temp__4092__auto___8915)
{var seq__7706_8916__$1 = temp__4092__auto___8915;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7706_8916__$1))
{var c__5632__auto___8917 = cljs.core.chunk_first.call(null,seq__7706_8916__$1);{
var G__8918 = cljs.core.chunk_rest.call(null,seq__7706_8916__$1);
var G__8919 = c__5632__auto___8917;
var G__8920 = cljs.core.count.call(null,c__5632__auto___8917);
var G__8921 = 0;
seq__7706_8906 = G__8918;
chunk__7707_8907 = G__8919;
count__7708_8908 = G__8920;
i__7709_8909 = G__8921;
continue;
}
} else
{var arg__6562__auto___8922 = cljs.core.first.call(null,seq__7706_8916__$1);a__6561__auto__.push(arg__6562__auto___8922);
{
var G__8923 = cljs.core.next.call(null,seq__7706_8916__$1);
var G__8924 = null;
var G__8925 = 0;
var G__8926 = 0;
seq__7706_8906 = G__8923;
chunk__7707_8907 = G__8924;
count__7708_8908 = G__8925;
i__7709_8909 = G__8926;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.cite.apply(null,a__6561__auto__);
};
var cite = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return cite__delegate.call(this,args__6560__auto__);};
cite.cljs$lang$maxFixedArity = 0;
cite.cljs$lang$applyTo = (function (arglist__8927){
var args__6560__auto__ = cljs.core.seq(arglist__8927);
return cite__delegate(args__6560__auto__);
});
cite.cljs$core$IFn$_invoke$arity$variadic = cite__delegate;
return cite;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.code = (function() { 
var code__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__7714_8928 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__7715_8929 = null;var count__7716_8930 = 0;var i__7717_8931 = 0;while(true){
if((i__7717_8931 < count__7716_8930))
{var arg__6562__auto___8932 = cljs.core._nth.call(null,chunk__7715_8929,i__7717_8931);a__6561__auto__.push(arg__6562__auto___8932);
{
var G__8933 = seq__7714_8928;
var G__8934 = chunk__7715_8929;
var G__8935 = count__7716_8930;
var G__8936 = (i__7717_8931 + 1);
seq__7714_8928 = G__8933;
chunk__7715_8929 = G__8934;
count__7716_8930 = G__8935;
i__7717_8931 = G__8936;
continue;
}
} else
{var temp__4092__auto___8937 = cljs.core.seq.call(null,seq__7714_8928);if(temp__4092__auto___8937)
{var seq__7714_8938__$1 = temp__4092__auto___8937;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7714_8938__$1))
{var c__5632__auto___8939 = cljs.core.chunk_first.call(null,seq__7714_8938__$1);{
var G__8940 = cljs.core.chunk_rest.call(null,seq__7714_8938__$1);
var G__8941 = c__5632__auto___8939;
var G__8942 = cljs.core.count.call(null,c__5632__auto___8939);
var G__8943 = 0;
seq__7714_8928 = G__8940;
chunk__7715_8929 = G__8941;
count__7716_8930 = G__8942;
i__7717_8931 = G__8943;
continue;
}
} else
{var arg__6562__auto___8944 = cljs.core.first.call(null,seq__7714_8938__$1);a__6561__auto__.push(arg__6562__auto___8944);
{
var G__8945 = cljs.core.next.call(null,seq__7714_8938__$1);
var G__8946 = null;
var G__8947 = 0;
var G__8948 = 0;
seq__7714_8928 = G__8945;
chunk__7715_8929 = G__8946;
count__7716_8930 = G__8947;
i__7717_8931 = G__8948;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.code.apply(null,a__6561__auto__);
};
var code = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return code__delegate.call(this,args__6560__auto__);};
code.cljs$lang$maxFixedArity = 0;
code.cljs$lang$applyTo = (function (arglist__8949){
var args__6560__auto__ = cljs.core.seq(arglist__8949);
return code__delegate(args__6560__auto__);
});
code.cljs$core$IFn$_invoke$arity$variadic = code__delegate;
return code;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.col = (function() { 
var col__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__7722_8950 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__7723_8951 = null;var count__7724_8952 = 0;var i__7725_8953 = 0;while(true){
if((i__7725_8953 < count__7724_8952))
{var arg__6562__auto___8954 = cljs.core._nth.call(null,chunk__7723_8951,i__7725_8953);a__6561__auto__.push(arg__6562__auto___8954);
{
var G__8955 = seq__7722_8950;
var G__8956 = chunk__7723_8951;
var G__8957 = count__7724_8952;
var G__8958 = (i__7725_8953 + 1);
seq__7722_8950 = G__8955;
chunk__7723_8951 = G__8956;
count__7724_8952 = G__8957;
i__7725_8953 = G__8958;
continue;
}
} else
{var temp__4092__auto___8959 = cljs.core.seq.call(null,seq__7722_8950);if(temp__4092__auto___8959)
{var seq__7722_8960__$1 = temp__4092__auto___8959;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7722_8960__$1))
{var c__5632__auto___8961 = cljs.core.chunk_first.call(null,seq__7722_8960__$1);{
var G__8962 = cljs.core.chunk_rest.call(null,seq__7722_8960__$1);
var G__8963 = c__5632__auto___8961;
var G__8964 = cljs.core.count.call(null,c__5632__auto___8961);
var G__8965 = 0;
seq__7722_8950 = G__8962;
chunk__7723_8951 = G__8963;
count__7724_8952 = G__8964;
i__7725_8953 = G__8965;
continue;
}
} else
{var arg__6562__auto___8966 = cljs.core.first.call(null,seq__7722_8960__$1);a__6561__auto__.push(arg__6562__auto___8966);
{
var G__8967 = cljs.core.next.call(null,seq__7722_8960__$1);
var G__8968 = null;
var G__8969 = 0;
var G__8970 = 0;
seq__7722_8950 = G__8967;
chunk__7723_8951 = G__8968;
count__7724_8952 = G__8969;
i__7725_8953 = G__8970;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.col.apply(null,a__6561__auto__);
};
var col = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return col__delegate.call(this,args__6560__auto__);};
col.cljs$lang$maxFixedArity = 0;
col.cljs$lang$applyTo = (function (arglist__8971){
var args__6560__auto__ = cljs.core.seq(arglist__8971);
return col__delegate(args__6560__auto__);
});
col.cljs$core$IFn$_invoke$arity$variadic = col__delegate;
return col;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.colgroup = (function() { 
var colgroup__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__7730_8972 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__7731_8973 = null;var count__7732_8974 = 0;var i__7733_8975 = 0;while(true){
if((i__7733_8975 < count__7732_8974))
{var arg__6562__auto___8976 = cljs.core._nth.call(null,chunk__7731_8973,i__7733_8975);a__6561__auto__.push(arg__6562__auto___8976);
{
var G__8977 = seq__7730_8972;
var G__8978 = chunk__7731_8973;
var G__8979 = count__7732_8974;
var G__8980 = (i__7733_8975 + 1);
seq__7730_8972 = G__8977;
chunk__7731_8973 = G__8978;
count__7732_8974 = G__8979;
i__7733_8975 = G__8980;
continue;
}
} else
{var temp__4092__auto___8981 = cljs.core.seq.call(null,seq__7730_8972);if(temp__4092__auto___8981)
{var seq__7730_8982__$1 = temp__4092__auto___8981;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7730_8982__$1))
{var c__5632__auto___8983 = cljs.core.chunk_first.call(null,seq__7730_8982__$1);{
var G__8984 = cljs.core.chunk_rest.call(null,seq__7730_8982__$1);
var G__8985 = c__5632__auto___8983;
var G__8986 = cljs.core.count.call(null,c__5632__auto___8983);
var G__8987 = 0;
seq__7730_8972 = G__8984;
chunk__7731_8973 = G__8985;
count__7732_8974 = G__8986;
i__7733_8975 = G__8987;
continue;
}
} else
{var arg__6562__auto___8988 = cljs.core.first.call(null,seq__7730_8982__$1);a__6561__auto__.push(arg__6562__auto___8988);
{
var G__8989 = cljs.core.next.call(null,seq__7730_8982__$1);
var G__8990 = null;
var G__8991 = 0;
var G__8992 = 0;
seq__7730_8972 = G__8989;
chunk__7731_8973 = G__8990;
count__7732_8974 = G__8991;
i__7733_8975 = G__8992;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.colgroup.apply(null,a__6561__auto__);
};
var colgroup = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return colgroup__delegate.call(this,args__6560__auto__);};
colgroup.cljs$lang$maxFixedArity = 0;
colgroup.cljs$lang$applyTo = (function (arglist__8993){
var args__6560__auto__ = cljs.core.seq(arglist__8993);
return colgroup__delegate(args__6560__auto__);
});
colgroup.cljs$core$IFn$_invoke$arity$variadic = colgroup__delegate;
return colgroup;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.data = (function() { 
var data__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__7738_8994 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__7739_8995 = null;var count__7740_8996 = 0;var i__7741_8997 = 0;while(true){
if((i__7741_8997 < count__7740_8996))
{var arg__6562__auto___8998 = cljs.core._nth.call(null,chunk__7739_8995,i__7741_8997);a__6561__auto__.push(arg__6562__auto___8998);
{
var G__8999 = seq__7738_8994;
var G__9000 = chunk__7739_8995;
var G__9001 = count__7740_8996;
var G__9002 = (i__7741_8997 + 1);
seq__7738_8994 = G__8999;
chunk__7739_8995 = G__9000;
count__7740_8996 = G__9001;
i__7741_8997 = G__9002;
continue;
}
} else
{var temp__4092__auto___9003 = cljs.core.seq.call(null,seq__7738_8994);if(temp__4092__auto___9003)
{var seq__7738_9004__$1 = temp__4092__auto___9003;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7738_9004__$1))
{var c__5632__auto___9005 = cljs.core.chunk_first.call(null,seq__7738_9004__$1);{
var G__9006 = cljs.core.chunk_rest.call(null,seq__7738_9004__$1);
var G__9007 = c__5632__auto___9005;
var G__9008 = cljs.core.count.call(null,c__5632__auto___9005);
var G__9009 = 0;
seq__7738_8994 = G__9006;
chunk__7739_8995 = G__9007;
count__7740_8996 = G__9008;
i__7741_8997 = G__9009;
continue;
}
} else
{var arg__6562__auto___9010 = cljs.core.first.call(null,seq__7738_9004__$1);a__6561__auto__.push(arg__6562__auto___9010);
{
var G__9011 = cljs.core.next.call(null,seq__7738_9004__$1);
var G__9012 = null;
var G__9013 = 0;
var G__9014 = 0;
seq__7738_8994 = G__9011;
chunk__7739_8995 = G__9012;
count__7740_8996 = G__9013;
i__7741_8997 = G__9014;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.data.apply(null,a__6561__auto__);
};
var data = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return data__delegate.call(this,args__6560__auto__);};
data.cljs$lang$maxFixedArity = 0;
data.cljs$lang$applyTo = (function (arglist__9015){
var args__6560__auto__ = cljs.core.seq(arglist__9015);
return data__delegate(args__6560__auto__);
});
data.cljs$core$IFn$_invoke$arity$variadic = data__delegate;
return data;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.datalist = (function() { 
var datalist__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__7746_9016 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__7747_9017 = null;var count__7748_9018 = 0;var i__7749_9019 = 0;while(true){
if((i__7749_9019 < count__7748_9018))
{var arg__6562__auto___9020 = cljs.core._nth.call(null,chunk__7747_9017,i__7749_9019);a__6561__auto__.push(arg__6562__auto___9020);
{
var G__9021 = seq__7746_9016;
var G__9022 = chunk__7747_9017;
var G__9023 = count__7748_9018;
var G__9024 = (i__7749_9019 + 1);
seq__7746_9016 = G__9021;
chunk__7747_9017 = G__9022;
count__7748_9018 = G__9023;
i__7749_9019 = G__9024;
continue;
}
} else
{var temp__4092__auto___9025 = cljs.core.seq.call(null,seq__7746_9016);if(temp__4092__auto___9025)
{var seq__7746_9026__$1 = temp__4092__auto___9025;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7746_9026__$1))
{var c__5632__auto___9027 = cljs.core.chunk_first.call(null,seq__7746_9026__$1);{
var G__9028 = cljs.core.chunk_rest.call(null,seq__7746_9026__$1);
var G__9029 = c__5632__auto___9027;
var G__9030 = cljs.core.count.call(null,c__5632__auto___9027);
var G__9031 = 0;
seq__7746_9016 = G__9028;
chunk__7747_9017 = G__9029;
count__7748_9018 = G__9030;
i__7749_9019 = G__9031;
continue;
}
} else
{var arg__6562__auto___9032 = cljs.core.first.call(null,seq__7746_9026__$1);a__6561__auto__.push(arg__6562__auto___9032);
{
var G__9033 = cljs.core.next.call(null,seq__7746_9026__$1);
var G__9034 = null;
var G__9035 = 0;
var G__9036 = 0;
seq__7746_9016 = G__9033;
chunk__7747_9017 = G__9034;
count__7748_9018 = G__9035;
i__7749_9019 = G__9036;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.datalist.apply(null,a__6561__auto__);
};
var datalist = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return datalist__delegate.call(this,args__6560__auto__);};
datalist.cljs$lang$maxFixedArity = 0;
datalist.cljs$lang$applyTo = (function (arglist__9037){
var args__6560__auto__ = cljs.core.seq(arglist__9037);
return datalist__delegate(args__6560__auto__);
});
datalist.cljs$core$IFn$_invoke$arity$variadic = datalist__delegate;
return datalist;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.dd = (function() { 
var dd__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__7754_9038 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__7755_9039 = null;var count__7756_9040 = 0;var i__7757_9041 = 0;while(true){
if((i__7757_9041 < count__7756_9040))
{var arg__6562__auto___9042 = cljs.core._nth.call(null,chunk__7755_9039,i__7757_9041);a__6561__auto__.push(arg__6562__auto___9042);
{
var G__9043 = seq__7754_9038;
var G__9044 = chunk__7755_9039;
var G__9045 = count__7756_9040;
var G__9046 = (i__7757_9041 + 1);
seq__7754_9038 = G__9043;
chunk__7755_9039 = G__9044;
count__7756_9040 = G__9045;
i__7757_9041 = G__9046;
continue;
}
} else
{var temp__4092__auto___9047 = cljs.core.seq.call(null,seq__7754_9038);if(temp__4092__auto___9047)
{var seq__7754_9048__$1 = temp__4092__auto___9047;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7754_9048__$1))
{var c__5632__auto___9049 = cljs.core.chunk_first.call(null,seq__7754_9048__$1);{
var G__9050 = cljs.core.chunk_rest.call(null,seq__7754_9048__$1);
var G__9051 = c__5632__auto___9049;
var G__9052 = cljs.core.count.call(null,c__5632__auto___9049);
var G__9053 = 0;
seq__7754_9038 = G__9050;
chunk__7755_9039 = G__9051;
count__7756_9040 = G__9052;
i__7757_9041 = G__9053;
continue;
}
} else
{var arg__6562__auto___9054 = cljs.core.first.call(null,seq__7754_9048__$1);a__6561__auto__.push(arg__6562__auto___9054);
{
var G__9055 = cljs.core.next.call(null,seq__7754_9048__$1);
var G__9056 = null;
var G__9057 = 0;
var G__9058 = 0;
seq__7754_9038 = G__9055;
chunk__7755_9039 = G__9056;
count__7756_9040 = G__9057;
i__7757_9041 = G__9058;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.dd.apply(null,a__6561__auto__);
};
var dd = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return dd__delegate.call(this,args__6560__auto__);};
dd.cljs$lang$maxFixedArity = 0;
dd.cljs$lang$applyTo = (function (arglist__9059){
var args__6560__auto__ = cljs.core.seq(arglist__9059);
return dd__delegate(args__6560__auto__);
});
dd.cljs$core$IFn$_invoke$arity$variadic = dd__delegate;
return dd;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.del = (function() { 
var del__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__7762_9060 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__7763_9061 = null;var count__7764_9062 = 0;var i__7765_9063 = 0;while(true){
if((i__7765_9063 < count__7764_9062))
{var arg__6562__auto___9064 = cljs.core._nth.call(null,chunk__7763_9061,i__7765_9063);a__6561__auto__.push(arg__6562__auto___9064);
{
var G__9065 = seq__7762_9060;
var G__9066 = chunk__7763_9061;
var G__9067 = count__7764_9062;
var G__9068 = (i__7765_9063 + 1);
seq__7762_9060 = G__9065;
chunk__7763_9061 = G__9066;
count__7764_9062 = G__9067;
i__7765_9063 = G__9068;
continue;
}
} else
{var temp__4092__auto___9069 = cljs.core.seq.call(null,seq__7762_9060);if(temp__4092__auto___9069)
{var seq__7762_9070__$1 = temp__4092__auto___9069;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7762_9070__$1))
{var c__5632__auto___9071 = cljs.core.chunk_first.call(null,seq__7762_9070__$1);{
var G__9072 = cljs.core.chunk_rest.call(null,seq__7762_9070__$1);
var G__9073 = c__5632__auto___9071;
var G__9074 = cljs.core.count.call(null,c__5632__auto___9071);
var G__9075 = 0;
seq__7762_9060 = G__9072;
chunk__7763_9061 = G__9073;
count__7764_9062 = G__9074;
i__7765_9063 = G__9075;
continue;
}
} else
{var arg__6562__auto___9076 = cljs.core.first.call(null,seq__7762_9070__$1);a__6561__auto__.push(arg__6562__auto___9076);
{
var G__9077 = cljs.core.next.call(null,seq__7762_9070__$1);
var G__9078 = null;
var G__9079 = 0;
var G__9080 = 0;
seq__7762_9060 = G__9077;
chunk__7763_9061 = G__9078;
count__7764_9062 = G__9079;
i__7765_9063 = G__9080;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.del.apply(null,a__6561__auto__);
};
var del = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return del__delegate.call(this,args__6560__auto__);};
del.cljs$lang$maxFixedArity = 0;
del.cljs$lang$applyTo = (function (arglist__9081){
var args__6560__auto__ = cljs.core.seq(arglist__9081);
return del__delegate(args__6560__auto__);
});
del.cljs$core$IFn$_invoke$arity$variadic = del__delegate;
return del;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.details = (function() { 
var details__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__7770_9082 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__7771_9083 = null;var count__7772_9084 = 0;var i__7773_9085 = 0;while(true){
if((i__7773_9085 < count__7772_9084))
{var arg__6562__auto___9086 = cljs.core._nth.call(null,chunk__7771_9083,i__7773_9085);a__6561__auto__.push(arg__6562__auto___9086);
{
var G__9087 = seq__7770_9082;
var G__9088 = chunk__7771_9083;
var G__9089 = count__7772_9084;
var G__9090 = (i__7773_9085 + 1);
seq__7770_9082 = G__9087;
chunk__7771_9083 = G__9088;
count__7772_9084 = G__9089;
i__7773_9085 = G__9090;
continue;
}
} else
{var temp__4092__auto___9091 = cljs.core.seq.call(null,seq__7770_9082);if(temp__4092__auto___9091)
{var seq__7770_9092__$1 = temp__4092__auto___9091;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7770_9092__$1))
{var c__5632__auto___9093 = cljs.core.chunk_first.call(null,seq__7770_9092__$1);{
var G__9094 = cljs.core.chunk_rest.call(null,seq__7770_9092__$1);
var G__9095 = c__5632__auto___9093;
var G__9096 = cljs.core.count.call(null,c__5632__auto___9093);
var G__9097 = 0;
seq__7770_9082 = G__9094;
chunk__7771_9083 = G__9095;
count__7772_9084 = G__9096;
i__7773_9085 = G__9097;
continue;
}
} else
{var arg__6562__auto___9098 = cljs.core.first.call(null,seq__7770_9092__$1);a__6561__auto__.push(arg__6562__auto___9098);
{
var G__9099 = cljs.core.next.call(null,seq__7770_9092__$1);
var G__9100 = null;
var G__9101 = 0;
var G__9102 = 0;
seq__7770_9082 = G__9099;
chunk__7771_9083 = G__9100;
count__7772_9084 = G__9101;
i__7773_9085 = G__9102;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.details.apply(null,a__6561__auto__);
};
var details = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return details__delegate.call(this,args__6560__auto__);};
details.cljs$lang$maxFixedArity = 0;
details.cljs$lang$applyTo = (function (arglist__9103){
var args__6560__auto__ = cljs.core.seq(arglist__9103);
return details__delegate(args__6560__auto__);
});
details.cljs$core$IFn$_invoke$arity$variadic = details__delegate;
return details;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.dfn = (function() { 
var dfn__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__7778_9104 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__7779_9105 = null;var count__7780_9106 = 0;var i__7781_9107 = 0;while(true){
if((i__7781_9107 < count__7780_9106))
{var arg__6562__auto___9108 = cljs.core._nth.call(null,chunk__7779_9105,i__7781_9107);a__6561__auto__.push(arg__6562__auto___9108);
{
var G__9109 = seq__7778_9104;
var G__9110 = chunk__7779_9105;
var G__9111 = count__7780_9106;
var G__9112 = (i__7781_9107 + 1);
seq__7778_9104 = G__9109;
chunk__7779_9105 = G__9110;
count__7780_9106 = G__9111;
i__7781_9107 = G__9112;
continue;
}
} else
{var temp__4092__auto___9113 = cljs.core.seq.call(null,seq__7778_9104);if(temp__4092__auto___9113)
{var seq__7778_9114__$1 = temp__4092__auto___9113;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7778_9114__$1))
{var c__5632__auto___9115 = cljs.core.chunk_first.call(null,seq__7778_9114__$1);{
var G__9116 = cljs.core.chunk_rest.call(null,seq__7778_9114__$1);
var G__9117 = c__5632__auto___9115;
var G__9118 = cljs.core.count.call(null,c__5632__auto___9115);
var G__9119 = 0;
seq__7778_9104 = G__9116;
chunk__7779_9105 = G__9117;
count__7780_9106 = G__9118;
i__7781_9107 = G__9119;
continue;
}
} else
{var arg__6562__auto___9120 = cljs.core.first.call(null,seq__7778_9114__$1);a__6561__auto__.push(arg__6562__auto___9120);
{
var G__9121 = cljs.core.next.call(null,seq__7778_9114__$1);
var G__9122 = null;
var G__9123 = 0;
var G__9124 = 0;
seq__7778_9104 = G__9121;
chunk__7779_9105 = G__9122;
count__7780_9106 = G__9123;
i__7781_9107 = G__9124;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.dfn.apply(null,a__6561__auto__);
};
var dfn = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return dfn__delegate.call(this,args__6560__auto__);};
dfn.cljs$lang$maxFixedArity = 0;
dfn.cljs$lang$applyTo = (function (arglist__9125){
var args__6560__auto__ = cljs.core.seq(arglist__9125);
return dfn__delegate(args__6560__auto__);
});
dfn.cljs$core$IFn$_invoke$arity$variadic = dfn__delegate;
return dfn;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.div = (function() { 
var div__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__7786_9126 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__7787_9127 = null;var count__7788_9128 = 0;var i__7789_9129 = 0;while(true){
if((i__7789_9129 < count__7788_9128))
{var arg__6562__auto___9130 = cljs.core._nth.call(null,chunk__7787_9127,i__7789_9129);a__6561__auto__.push(arg__6562__auto___9130);
{
var G__9131 = seq__7786_9126;
var G__9132 = chunk__7787_9127;
var G__9133 = count__7788_9128;
var G__9134 = (i__7789_9129 + 1);
seq__7786_9126 = G__9131;
chunk__7787_9127 = G__9132;
count__7788_9128 = G__9133;
i__7789_9129 = G__9134;
continue;
}
} else
{var temp__4092__auto___9135 = cljs.core.seq.call(null,seq__7786_9126);if(temp__4092__auto___9135)
{var seq__7786_9136__$1 = temp__4092__auto___9135;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7786_9136__$1))
{var c__5632__auto___9137 = cljs.core.chunk_first.call(null,seq__7786_9136__$1);{
var G__9138 = cljs.core.chunk_rest.call(null,seq__7786_9136__$1);
var G__9139 = c__5632__auto___9137;
var G__9140 = cljs.core.count.call(null,c__5632__auto___9137);
var G__9141 = 0;
seq__7786_9126 = G__9138;
chunk__7787_9127 = G__9139;
count__7788_9128 = G__9140;
i__7789_9129 = G__9141;
continue;
}
} else
{var arg__6562__auto___9142 = cljs.core.first.call(null,seq__7786_9136__$1);a__6561__auto__.push(arg__6562__auto___9142);
{
var G__9143 = cljs.core.next.call(null,seq__7786_9136__$1);
var G__9144 = null;
var G__9145 = 0;
var G__9146 = 0;
seq__7786_9126 = G__9143;
chunk__7787_9127 = G__9144;
count__7788_9128 = G__9145;
i__7789_9129 = G__9146;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.div.apply(null,a__6561__auto__);
};
var div = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return div__delegate.call(this,args__6560__auto__);};
div.cljs$lang$maxFixedArity = 0;
div.cljs$lang$applyTo = (function (arglist__9147){
var args__6560__auto__ = cljs.core.seq(arglist__9147);
return div__delegate(args__6560__auto__);
});
div.cljs$core$IFn$_invoke$arity$variadic = div__delegate;
return div;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.dl = (function() { 
var dl__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__7794_9148 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__7795_9149 = null;var count__7796_9150 = 0;var i__7797_9151 = 0;while(true){
if((i__7797_9151 < count__7796_9150))
{var arg__6562__auto___9152 = cljs.core._nth.call(null,chunk__7795_9149,i__7797_9151);a__6561__auto__.push(arg__6562__auto___9152);
{
var G__9153 = seq__7794_9148;
var G__9154 = chunk__7795_9149;
var G__9155 = count__7796_9150;
var G__9156 = (i__7797_9151 + 1);
seq__7794_9148 = G__9153;
chunk__7795_9149 = G__9154;
count__7796_9150 = G__9155;
i__7797_9151 = G__9156;
continue;
}
} else
{var temp__4092__auto___9157 = cljs.core.seq.call(null,seq__7794_9148);if(temp__4092__auto___9157)
{var seq__7794_9158__$1 = temp__4092__auto___9157;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7794_9158__$1))
{var c__5632__auto___9159 = cljs.core.chunk_first.call(null,seq__7794_9158__$1);{
var G__9160 = cljs.core.chunk_rest.call(null,seq__7794_9158__$1);
var G__9161 = c__5632__auto___9159;
var G__9162 = cljs.core.count.call(null,c__5632__auto___9159);
var G__9163 = 0;
seq__7794_9148 = G__9160;
chunk__7795_9149 = G__9161;
count__7796_9150 = G__9162;
i__7797_9151 = G__9163;
continue;
}
} else
{var arg__6562__auto___9164 = cljs.core.first.call(null,seq__7794_9158__$1);a__6561__auto__.push(arg__6562__auto___9164);
{
var G__9165 = cljs.core.next.call(null,seq__7794_9158__$1);
var G__9166 = null;
var G__9167 = 0;
var G__9168 = 0;
seq__7794_9148 = G__9165;
chunk__7795_9149 = G__9166;
count__7796_9150 = G__9167;
i__7797_9151 = G__9168;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.dl.apply(null,a__6561__auto__);
};
var dl = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return dl__delegate.call(this,args__6560__auto__);};
dl.cljs$lang$maxFixedArity = 0;
dl.cljs$lang$applyTo = (function (arglist__9169){
var args__6560__auto__ = cljs.core.seq(arglist__9169);
return dl__delegate(args__6560__auto__);
});
dl.cljs$core$IFn$_invoke$arity$variadic = dl__delegate;
return dl;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.dt = (function() { 
var dt__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__7802_9170 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__7803_9171 = null;var count__7804_9172 = 0;var i__7805_9173 = 0;while(true){
if((i__7805_9173 < count__7804_9172))
{var arg__6562__auto___9174 = cljs.core._nth.call(null,chunk__7803_9171,i__7805_9173);a__6561__auto__.push(arg__6562__auto___9174);
{
var G__9175 = seq__7802_9170;
var G__9176 = chunk__7803_9171;
var G__9177 = count__7804_9172;
var G__9178 = (i__7805_9173 + 1);
seq__7802_9170 = G__9175;
chunk__7803_9171 = G__9176;
count__7804_9172 = G__9177;
i__7805_9173 = G__9178;
continue;
}
} else
{var temp__4092__auto___9179 = cljs.core.seq.call(null,seq__7802_9170);if(temp__4092__auto___9179)
{var seq__7802_9180__$1 = temp__4092__auto___9179;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7802_9180__$1))
{var c__5632__auto___9181 = cljs.core.chunk_first.call(null,seq__7802_9180__$1);{
var G__9182 = cljs.core.chunk_rest.call(null,seq__7802_9180__$1);
var G__9183 = c__5632__auto___9181;
var G__9184 = cljs.core.count.call(null,c__5632__auto___9181);
var G__9185 = 0;
seq__7802_9170 = G__9182;
chunk__7803_9171 = G__9183;
count__7804_9172 = G__9184;
i__7805_9173 = G__9185;
continue;
}
} else
{var arg__6562__auto___9186 = cljs.core.first.call(null,seq__7802_9180__$1);a__6561__auto__.push(arg__6562__auto___9186);
{
var G__9187 = cljs.core.next.call(null,seq__7802_9180__$1);
var G__9188 = null;
var G__9189 = 0;
var G__9190 = 0;
seq__7802_9170 = G__9187;
chunk__7803_9171 = G__9188;
count__7804_9172 = G__9189;
i__7805_9173 = G__9190;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.dt.apply(null,a__6561__auto__);
};
var dt = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return dt__delegate.call(this,args__6560__auto__);};
dt.cljs$lang$maxFixedArity = 0;
dt.cljs$lang$applyTo = (function (arglist__9191){
var args__6560__auto__ = cljs.core.seq(arglist__9191);
return dt__delegate(args__6560__auto__);
});
dt.cljs$core$IFn$_invoke$arity$variadic = dt__delegate;
return dt;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.em = (function() { 
var em__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__7810_9192 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__7811_9193 = null;var count__7812_9194 = 0;var i__7813_9195 = 0;while(true){
if((i__7813_9195 < count__7812_9194))
{var arg__6562__auto___9196 = cljs.core._nth.call(null,chunk__7811_9193,i__7813_9195);a__6561__auto__.push(arg__6562__auto___9196);
{
var G__9197 = seq__7810_9192;
var G__9198 = chunk__7811_9193;
var G__9199 = count__7812_9194;
var G__9200 = (i__7813_9195 + 1);
seq__7810_9192 = G__9197;
chunk__7811_9193 = G__9198;
count__7812_9194 = G__9199;
i__7813_9195 = G__9200;
continue;
}
} else
{var temp__4092__auto___9201 = cljs.core.seq.call(null,seq__7810_9192);if(temp__4092__auto___9201)
{var seq__7810_9202__$1 = temp__4092__auto___9201;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7810_9202__$1))
{var c__5632__auto___9203 = cljs.core.chunk_first.call(null,seq__7810_9202__$1);{
var G__9204 = cljs.core.chunk_rest.call(null,seq__7810_9202__$1);
var G__9205 = c__5632__auto___9203;
var G__9206 = cljs.core.count.call(null,c__5632__auto___9203);
var G__9207 = 0;
seq__7810_9192 = G__9204;
chunk__7811_9193 = G__9205;
count__7812_9194 = G__9206;
i__7813_9195 = G__9207;
continue;
}
} else
{var arg__6562__auto___9208 = cljs.core.first.call(null,seq__7810_9202__$1);a__6561__auto__.push(arg__6562__auto___9208);
{
var G__9209 = cljs.core.next.call(null,seq__7810_9202__$1);
var G__9210 = null;
var G__9211 = 0;
var G__9212 = 0;
seq__7810_9192 = G__9209;
chunk__7811_9193 = G__9210;
count__7812_9194 = G__9211;
i__7813_9195 = G__9212;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.em.apply(null,a__6561__auto__);
};
var em = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return em__delegate.call(this,args__6560__auto__);};
em.cljs$lang$maxFixedArity = 0;
em.cljs$lang$applyTo = (function (arglist__9213){
var args__6560__auto__ = cljs.core.seq(arglist__9213);
return em__delegate(args__6560__auto__);
});
em.cljs$core$IFn$_invoke$arity$variadic = em__delegate;
return em;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.embed = (function() { 
var embed__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__7826_9214 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__7827_9215 = null;var count__7828_9216 = 0;var i__7829_9217 = 0;while(true){
if((i__7829_9217 < count__7828_9216))
{var arg__6562__auto___9218 = cljs.core._nth.call(null,chunk__7827_9215,i__7829_9217);a__6561__auto__.push(arg__6562__auto___9218);
{
var G__9219 = seq__7826_9214;
var G__9220 = chunk__7827_9215;
var G__9221 = count__7828_9216;
var G__9222 = (i__7829_9217 + 1);
seq__7826_9214 = G__9219;
chunk__7827_9215 = G__9220;
count__7828_9216 = G__9221;
i__7829_9217 = G__9222;
continue;
}
} else
{var temp__4092__auto___9223 = cljs.core.seq.call(null,seq__7826_9214);if(temp__4092__auto___9223)
{var seq__7826_9224__$1 = temp__4092__auto___9223;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7826_9224__$1))
{var c__5632__auto___9225 = cljs.core.chunk_first.call(null,seq__7826_9224__$1);{
var G__9226 = cljs.core.chunk_rest.call(null,seq__7826_9224__$1);
var G__9227 = c__5632__auto___9225;
var G__9228 = cljs.core.count.call(null,c__5632__auto___9225);
var G__9229 = 0;
seq__7826_9214 = G__9226;
chunk__7827_9215 = G__9227;
count__7828_9216 = G__9228;
i__7829_9217 = G__9229;
continue;
}
} else
{var arg__6562__auto___9230 = cljs.core.first.call(null,seq__7826_9224__$1);a__6561__auto__.push(arg__6562__auto___9230);
{
var G__9231 = cljs.core.next.call(null,seq__7826_9224__$1);
var G__9232 = null;
var G__9233 = 0;
var G__9234 = 0;
seq__7826_9214 = G__9231;
chunk__7827_9215 = G__9232;
count__7828_9216 = G__9233;
i__7829_9217 = G__9234;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.embed.apply(null,a__6561__auto__);
};
var embed = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return embed__delegate.call(this,args__6560__auto__);};
embed.cljs$lang$maxFixedArity = 0;
embed.cljs$lang$applyTo = (function (arglist__9235){
var args__6560__auto__ = cljs.core.seq(arglist__9235);
return embed__delegate(args__6560__auto__);
});
embed.cljs$core$IFn$_invoke$arity$variadic = embed__delegate;
return embed;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.fieldset = (function() { 
var fieldset__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__7834_9236 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__7835_9237 = null;var count__7836_9238 = 0;var i__7837_9239 = 0;while(true){
if((i__7837_9239 < count__7836_9238))
{var arg__6562__auto___9240 = cljs.core._nth.call(null,chunk__7835_9237,i__7837_9239);a__6561__auto__.push(arg__6562__auto___9240);
{
var G__9241 = seq__7834_9236;
var G__9242 = chunk__7835_9237;
var G__9243 = count__7836_9238;
var G__9244 = (i__7837_9239 + 1);
seq__7834_9236 = G__9241;
chunk__7835_9237 = G__9242;
count__7836_9238 = G__9243;
i__7837_9239 = G__9244;
continue;
}
} else
{var temp__4092__auto___9245 = cljs.core.seq.call(null,seq__7834_9236);if(temp__4092__auto___9245)
{var seq__7834_9246__$1 = temp__4092__auto___9245;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7834_9246__$1))
{var c__5632__auto___9247 = cljs.core.chunk_first.call(null,seq__7834_9246__$1);{
var G__9248 = cljs.core.chunk_rest.call(null,seq__7834_9246__$1);
var G__9249 = c__5632__auto___9247;
var G__9250 = cljs.core.count.call(null,c__5632__auto___9247);
var G__9251 = 0;
seq__7834_9236 = G__9248;
chunk__7835_9237 = G__9249;
count__7836_9238 = G__9250;
i__7837_9239 = G__9251;
continue;
}
} else
{var arg__6562__auto___9252 = cljs.core.first.call(null,seq__7834_9246__$1);a__6561__auto__.push(arg__6562__auto___9252);
{
var G__9253 = cljs.core.next.call(null,seq__7834_9246__$1);
var G__9254 = null;
var G__9255 = 0;
var G__9256 = 0;
seq__7834_9236 = G__9253;
chunk__7835_9237 = G__9254;
count__7836_9238 = G__9255;
i__7837_9239 = G__9256;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.fieldset.apply(null,a__6561__auto__);
};
var fieldset = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return fieldset__delegate.call(this,args__6560__auto__);};
fieldset.cljs$lang$maxFixedArity = 0;
fieldset.cljs$lang$applyTo = (function (arglist__9257){
var args__6560__auto__ = cljs.core.seq(arglist__9257);
return fieldset__delegate(args__6560__auto__);
});
fieldset.cljs$core$IFn$_invoke$arity$variadic = fieldset__delegate;
return fieldset;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.figcaption = (function() { 
var figcaption__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__7842_9258 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__7843_9259 = null;var count__7844_9260 = 0;var i__7845_9261 = 0;while(true){
if((i__7845_9261 < count__7844_9260))
{var arg__6562__auto___9262 = cljs.core._nth.call(null,chunk__7843_9259,i__7845_9261);a__6561__auto__.push(arg__6562__auto___9262);
{
var G__9263 = seq__7842_9258;
var G__9264 = chunk__7843_9259;
var G__9265 = count__7844_9260;
var G__9266 = (i__7845_9261 + 1);
seq__7842_9258 = G__9263;
chunk__7843_9259 = G__9264;
count__7844_9260 = G__9265;
i__7845_9261 = G__9266;
continue;
}
} else
{var temp__4092__auto___9267 = cljs.core.seq.call(null,seq__7842_9258);if(temp__4092__auto___9267)
{var seq__7842_9268__$1 = temp__4092__auto___9267;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7842_9268__$1))
{var c__5632__auto___9269 = cljs.core.chunk_first.call(null,seq__7842_9268__$1);{
var G__9270 = cljs.core.chunk_rest.call(null,seq__7842_9268__$1);
var G__9271 = c__5632__auto___9269;
var G__9272 = cljs.core.count.call(null,c__5632__auto___9269);
var G__9273 = 0;
seq__7842_9258 = G__9270;
chunk__7843_9259 = G__9271;
count__7844_9260 = G__9272;
i__7845_9261 = G__9273;
continue;
}
} else
{var arg__6562__auto___9274 = cljs.core.first.call(null,seq__7842_9268__$1);a__6561__auto__.push(arg__6562__auto___9274);
{
var G__9275 = cljs.core.next.call(null,seq__7842_9268__$1);
var G__9276 = null;
var G__9277 = 0;
var G__9278 = 0;
seq__7842_9258 = G__9275;
chunk__7843_9259 = G__9276;
count__7844_9260 = G__9277;
i__7845_9261 = G__9278;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.figcaption.apply(null,a__6561__auto__);
};
var figcaption = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return figcaption__delegate.call(this,args__6560__auto__);};
figcaption.cljs$lang$maxFixedArity = 0;
figcaption.cljs$lang$applyTo = (function (arglist__9279){
var args__6560__auto__ = cljs.core.seq(arglist__9279);
return figcaption__delegate(args__6560__auto__);
});
figcaption.cljs$core$IFn$_invoke$arity$variadic = figcaption__delegate;
return figcaption;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.figure = (function() { 
var figure__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__7850_9280 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__7851_9281 = null;var count__7852_9282 = 0;var i__7853_9283 = 0;while(true){
if((i__7853_9283 < count__7852_9282))
{var arg__6562__auto___9284 = cljs.core._nth.call(null,chunk__7851_9281,i__7853_9283);a__6561__auto__.push(arg__6562__auto___9284);
{
var G__9285 = seq__7850_9280;
var G__9286 = chunk__7851_9281;
var G__9287 = count__7852_9282;
var G__9288 = (i__7853_9283 + 1);
seq__7850_9280 = G__9285;
chunk__7851_9281 = G__9286;
count__7852_9282 = G__9287;
i__7853_9283 = G__9288;
continue;
}
} else
{var temp__4092__auto___9289 = cljs.core.seq.call(null,seq__7850_9280);if(temp__4092__auto___9289)
{var seq__7850_9290__$1 = temp__4092__auto___9289;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7850_9290__$1))
{var c__5632__auto___9291 = cljs.core.chunk_first.call(null,seq__7850_9290__$1);{
var G__9292 = cljs.core.chunk_rest.call(null,seq__7850_9290__$1);
var G__9293 = c__5632__auto___9291;
var G__9294 = cljs.core.count.call(null,c__5632__auto___9291);
var G__9295 = 0;
seq__7850_9280 = G__9292;
chunk__7851_9281 = G__9293;
count__7852_9282 = G__9294;
i__7853_9283 = G__9295;
continue;
}
} else
{var arg__6562__auto___9296 = cljs.core.first.call(null,seq__7850_9290__$1);a__6561__auto__.push(arg__6562__auto___9296);
{
var G__9297 = cljs.core.next.call(null,seq__7850_9290__$1);
var G__9298 = null;
var G__9299 = 0;
var G__9300 = 0;
seq__7850_9280 = G__9297;
chunk__7851_9281 = G__9298;
count__7852_9282 = G__9299;
i__7853_9283 = G__9300;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.figure.apply(null,a__6561__auto__);
};
var figure = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return figure__delegate.call(this,args__6560__auto__);};
figure.cljs$lang$maxFixedArity = 0;
figure.cljs$lang$applyTo = (function (arglist__9301){
var args__6560__auto__ = cljs.core.seq(arglist__9301);
return figure__delegate(args__6560__auto__);
});
figure.cljs$core$IFn$_invoke$arity$variadic = figure__delegate;
return figure;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.footer = (function() { 
var footer__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__7858_9302 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__7859_9303 = null;var count__7860_9304 = 0;var i__7861_9305 = 0;while(true){
if((i__7861_9305 < count__7860_9304))
{var arg__6562__auto___9306 = cljs.core._nth.call(null,chunk__7859_9303,i__7861_9305);a__6561__auto__.push(arg__6562__auto___9306);
{
var G__9307 = seq__7858_9302;
var G__9308 = chunk__7859_9303;
var G__9309 = count__7860_9304;
var G__9310 = (i__7861_9305 + 1);
seq__7858_9302 = G__9307;
chunk__7859_9303 = G__9308;
count__7860_9304 = G__9309;
i__7861_9305 = G__9310;
continue;
}
} else
{var temp__4092__auto___9311 = cljs.core.seq.call(null,seq__7858_9302);if(temp__4092__auto___9311)
{var seq__7858_9312__$1 = temp__4092__auto___9311;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7858_9312__$1))
{var c__5632__auto___9313 = cljs.core.chunk_first.call(null,seq__7858_9312__$1);{
var G__9314 = cljs.core.chunk_rest.call(null,seq__7858_9312__$1);
var G__9315 = c__5632__auto___9313;
var G__9316 = cljs.core.count.call(null,c__5632__auto___9313);
var G__9317 = 0;
seq__7858_9302 = G__9314;
chunk__7859_9303 = G__9315;
count__7860_9304 = G__9316;
i__7861_9305 = G__9317;
continue;
}
} else
{var arg__6562__auto___9318 = cljs.core.first.call(null,seq__7858_9312__$1);a__6561__auto__.push(arg__6562__auto___9318);
{
var G__9319 = cljs.core.next.call(null,seq__7858_9312__$1);
var G__9320 = null;
var G__9321 = 0;
var G__9322 = 0;
seq__7858_9302 = G__9319;
chunk__7859_9303 = G__9320;
count__7860_9304 = G__9321;
i__7861_9305 = G__9322;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.footer.apply(null,a__6561__auto__);
};
var footer = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return footer__delegate.call(this,args__6560__auto__);};
footer.cljs$lang$maxFixedArity = 0;
footer.cljs$lang$applyTo = (function (arglist__9323){
var args__6560__auto__ = cljs.core.seq(arglist__9323);
return footer__delegate(args__6560__auto__);
});
footer.cljs$core$IFn$_invoke$arity$variadic = footer__delegate;
return footer;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.form = (function() { 
var form__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__7866_9324 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__7867_9325 = null;var count__7868_9326 = 0;var i__7869_9327 = 0;while(true){
if((i__7869_9327 < count__7868_9326))
{var arg__6562__auto___9328 = cljs.core._nth.call(null,chunk__7867_9325,i__7869_9327);a__6561__auto__.push(arg__6562__auto___9328);
{
var G__9329 = seq__7866_9324;
var G__9330 = chunk__7867_9325;
var G__9331 = count__7868_9326;
var G__9332 = (i__7869_9327 + 1);
seq__7866_9324 = G__9329;
chunk__7867_9325 = G__9330;
count__7868_9326 = G__9331;
i__7869_9327 = G__9332;
continue;
}
} else
{var temp__4092__auto___9333 = cljs.core.seq.call(null,seq__7866_9324);if(temp__4092__auto___9333)
{var seq__7866_9334__$1 = temp__4092__auto___9333;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7866_9334__$1))
{var c__5632__auto___9335 = cljs.core.chunk_first.call(null,seq__7866_9334__$1);{
var G__9336 = cljs.core.chunk_rest.call(null,seq__7866_9334__$1);
var G__9337 = c__5632__auto___9335;
var G__9338 = cljs.core.count.call(null,c__5632__auto___9335);
var G__9339 = 0;
seq__7866_9324 = G__9336;
chunk__7867_9325 = G__9337;
count__7868_9326 = G__9338;
i__7869_9327 = G__9339;
continue;
}
} else
{var arg__6562__auto___9340 = cljs.core.first.call(null,seq__7866_9334__$1);a__6561__auto__.push(arg__6562__auto___9340);
{
var G__9341 = cljs.core.next.call(null,seq__7866_9334__$1);
var G__9342 = null;
var G__9343 = 0;
var G__9344 = 0;
seq__7866_9324 = G__9341;
chunk__7867_9325 = G__9342;
count__7868_9326 = G__9343;
i__7869_9327 = G__9344;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.form.apply(null,a__6561__auto__);
};
var form = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return form__delegate.call(this,args__6560__auto__);};
form.cljs$lang$maxFixedArity = 0;
form.cljs$lang$applyTo = (function (arglist__9345){
var args__6560__auto__ = cljs.core.seq(arglist__9345);
return form__delegate(args__6560__auto__);
});
form.cljs$core$IFn$_invoke$arity$variadic = form__delegate;
return form;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h1 = (function() { 
var h1__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__7874_9346 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__7875_9347 = null;var count__7876_9348 = 0;var i__7877_9349 = 0;while(true){
if((i__7877_9349 < count__7876_9348))
{var arg__6562__auto___9350 = cljs.core._nth.call(null,chunk__7875_9347,i__7877_9349);a__6561__auto__.push(arg__6562__auto___9350);
{
var G__9351 = seq__7874_9346;
var G__9352 = chunk__7875_9347;
var G__9353 = count__7876_9348;
var G__9354 = (i__7877_9349 + 1);
seq__7874_9346 = G__9351;
chunk__7875_9347 = G__9352;
count__7876_9348 = G__9353;
i__7877_9349 = G__9354;
continue;
}
} else
{var temp__4092__auto___9355 = cljs.core.seq.call(null,seq__7874_9346);if(temp__4092__auto___9355)
{var seq__7874_9356__$1 = temp__4092__auto___9355;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7874_9356__$1))
{var c__5632__auto___9357 = cljs.core.chunk_first.call(null,seq__7874_9356__$1);{
var G__9358 = cljs.core.chunk_rest.call(null,seq__7874_9356__$1);
var G__9359 = c__5632__auto___9357;
var G__9360 = cljs.core.count.call(null,c__5632__auto___9357);
var G__9361 = 0;
seq__7874_9346 = G__9358;
chunk__7875_9347 = G__9359;
count__7876_9348 = G__9360;
i__7877_9349 = G__9361;
continue;
}
} else
{var arg__6562__auto___9362 = cljs.core.first.call(null,seq__7874_9356__$1);a__6561__auto__.push(arg__6562__auto___9362);
{
var G__9363 = cljs.core.next.call(null,seq__7874_9356__$1);
var G__9364 = null;
var G__9365 = 0;
var G__9366 = 0;
seq__7874_9346 = G__9363;
chunk__7875_9347 = G__9364;
count__7876_9348 = G__9365;
i__7877_9349 = G__9366;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h1.apply(null,a__6561__auto__);
};
var h1 = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h1__delegate.call(this,args__6560__auto__);};
h1.cljs$lang$maxFixedArity = 0;
h1.cljs$lang$applyTo = (function (arglist__9367){
var args__6560__auto__ = cljs.core.seq(arglist__9367);
return h1__delegate(args__6560__auto__);
});
h1.cljs$core$IFn$_invoke$arity$variadic = h1__delegate;
return h1;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h2 = (function() { 
var h2__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__7882_9368 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__7883_9369 = null;var count__7884_9370 = 0;var i__7885_9371 = 0;while(true){
if((i__7885_9371 < count__7884_9370))
{var arg__6562__auto___9372 = cljs.core._nth.call(null,chunk__7883_9369,i__7885_9371);a__6561__auto__.push(arg__6562__auto___9372);
{
var G__9373 = seq__7882_9368;
var G__9374 = chunk__7883_9369;
var G__9375 = count__7884_9370;
var G__9376 = (i__7885_9371 + 1);
seq__7882_9368 = G__9373;
chunk__7883_9369 = G__9374;
count__7884_9370 = G__9375;
i__7885_9371 = G__9376;
continue;
}
} else
{var temp__4092__auto___9377 = cljs.core.seq.call(null,seq__7882_9368);if(temp__4092__auto___9377)
{var seq__7882_9378__$1 = temp__4092__auto___9377;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7882_9378__$1))
{var c__5632__auto___9379 = cljs.core.chunk_first.call(null,seq__7882_9378__$1);{
var G__9380 = cljs.core.chunk_rest.call(null,seq__7882_9378__$1);
var G__9381 = c__5632__auto___9379;
var G__9382 = cljs.core.count.call(null,c__5632__auto___9379);
var G__9383 = 0;
seq__7882_9368 = G__9380;
chunk__7883_9369 = G__9381;
count__7884_9370 = G__9382;
i__7885_9371 = G__9383;
continue;
}
} else
{var arg__6562__auto___9384 = cljs.core.first.call(null,seq__7882_9378__$1);a__6561__auto__.push(arg__6562__auto___9384);
{
var G__9385 = cljs.core.next.call(null,seq__7882_9378__$1);
var G__9386 = null;
var G__9387 = 0;
var G__9388 = 0;
seq__7882_9368 = G__9385;
chunk__7883_9369 = G__9386;
count__7884_9370 = G__9387;
i__7885_9371 = G__9388;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h2.apply(null,a__6561__auto__);
};
var h2 = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h2__delegate.call(this,args__6560__auto__);};
h2.cljs$lang$maxFixedArity = 0;
h2.cljs$lang$applyTo = (function (arglist__9389){
var args__6560__auto__ = cljs.core.seq(arglist__9389);
return h2__delegate(args__6560__auto__);
});
h2.cljs$core$IFn$_invoke$arity$variadic = h2__delegate;
return h2;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h3 = (function() { 
var h3__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__7890_9390 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__7891_9391 = null;var count__7892_9392 = 0;var i__7893_9393 = 0;while(true){
if((i__7893_9393 < count__7892_9392))
{var arg__6562__auto___9394 = cljs.core._nth.call(null,chunk__7891_9391,i__7893_9393);a__6561__auto__.push(arg__6562__auto___9394);
{
var G__9395 = seq__7890_9390;
var G__9396 = chunk__7891_9391;
var G__9397 = count__7892_9392;
var G__9398 = (i__7893_9393 + 1);
seq__7890_9390 = G__9395;
chunk__7891_9391 = G__9396;
count__7892_9392 = G__9397;
i__7893_9393 = G__9398;
continue;
}
} else
{var temp__4092__auto___9399 = cljs.core.seq.call(null,seq__7890_9390);if(temp__4092__auto___9399)
{var seq__7890_9400__$1 = temp__4092__auto___9399;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7890_9400__$1))
{var c__5632__auto___9401 = cljs.core.chunk_first.call(null,seq__7890_9400__$1);{
var G__9402 = cljs.core.chunk_rest.call(null,seq__7890_9400__$1);
var G__9403 = c__5632__auto___9401;
var G__9404 = cljs.core.count.call(null,c__5632__auto___9401);
var G__9405 = 0;
seq__7890_9390 = G__9402;
chunk__7891_9391 = G__9403;
count__7892_9392 = G__9404;
i__7893_9393 = G__9405;
continue;
}
} else
{var arg__6562__auto___9406 = cljs.core.first.call(null,seq__7890_9400__$1);a__6561__auto__.push(arg__6562__auto___9406);
{
var G__9407 = cljs.core.next.call(null,seq__7890_9400__$1);
var G__9408 = null;
var G__9409 = 0;
var G__9410 = 0;
seq__7890_9390 = G__9407;
chunk__7891_9391 = G__9408;
count__7892_9392 = G__9409;
i__7893_9393 = G__9410;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h3.apply(null,a__6561__auto__);
};
var h3 = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h3__delegate.call(this,args__6560__auto__);};
h3.cljs$lang$maxFixedArity = 0;
h3.cljs$lang$applyTo = (function (arglist__9411){
var args__6560__auto__ = cljs.core.seq(arglist__9411);
return h3__delegate(args__6560__auto__);
});
h3.cljs$core$IFn$_invoke$arity$variadic = h3__delegate;
return h3;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h4 = (function() { 
var h4__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__7898_9412 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__7899_9413 = null;var count__7900_9414 = 0;var i__7901_9415 = 0;while(true){
if((i__7901_9415 < count__7900_9414))
{var arg__6562__auto___9416 = cljs.core._nth.call(null,chunk__7899_9413,i__7901_9415);a__6561__auto__.push(arg__6562__auto___9416);
{
var G__9417 = seq__7898_9412;
var G__9418 = chunk__7899_9413;
var G__9419 = count__7900_9414;
var G__9420 = (i__7901_9415 + 1);
seq__7898_9412 = G__9417;
chunk__7899_9413 = G__9418;
count__7900_9414 = G__9419;
i__7901_9415 = G__9420;
continue;
}
} else
{var temp__4092__auto___9421 = cljs.core.seq.call(null,seq__7898_9412);if(temp__4092__auto___9421)
{var seq__7898_9422__$1 = temp__4092__auto___9421;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7898_9422__$1))
{var c__5632__auto___9423 = cljs.core.chunk_first.call(null,seq__7898_9422__$1);{
var G__9424 = cljs.core.chunk_rest.call(null,seq__7898_9422__$1);
var G__9425 = c__5632__auto___9423;
var G__9426 = cljs.core.count.call(null,c__5632__auto___9423);
var G__9427 = 0;
seq__7898_9412 = G__9424;
chunk__7899_9413 = G__9425;
count__7900_9414 = G__9426;
i__7901_9415 = G__9427;
continue;
}
} else
{var arg__6562__auto___9428 = cljs.core.first.call(null,seq__7898_9422__$1);a__6561__auto__.push(arg__6562__auto___9428);
{
var G__9429 = cljs.core.next.call(null,seq__7898_9422__$1);
var G__9430 = null;
var G__9431 = 0;
var G__9432 = 0;
seq__7898_9412 = G__9429;
chunk__7899_9413 = G__9430;
count__7900_9414 = G__9431;
i__7901_9415 = G__9432;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h4.apply(null,a__6561__auto__);
};
var h4 = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h4__delegate.call(this,args__6560__auto__);};
h4.cljs$lang$maxFixedArity = 0;
h4.cljs$lang$applyTo = (function (arglist__9433){
var args__6560__auto__ = cljs.core.seq(arglist__9433);
return h4__delegate(args__6560__auto__);
});
h4.cljs$core$IFn$_invoke$arity$variadic = h4__delegate;
return h4;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h5 = (function() { 
var h5__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__7906_9434 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__7907_9435 = null;var count__7908_9436 = 0;var i__7909_9437 = 0;while(true){
if((i__7909_9437 < count__7908_9436))
{var arg__6562__auto___9438 = cljs.core._nth.call(null,chunk__7907_9435,i__7909_9437);a__6561__auto__.push(arg__6562__auto___9438);
{
var G__9439 = seq__7906_9434;
var G__9440 = chunk__7907_9435;
var G__9441 = count__7908_9436;
var G__9442 = (i__7909_9437 + 1);
seq__7906_9434 = G__9439;
chunk__7907_9435 = G__9440;
count__7908_9436 = G__9441;
i__7909_9437 = G__9442;
continue;
}
} else
{var temp__4092__auto___9443 = cljs.core.seq.call(null,seq__7906_9434);if(temp__4092__auto___9443)
{var seq__7906_9444__$1 = temp__4092__auto___9443;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7906_9444__$1))
{var c__5632__auto___9445 = cljs.core.chunk_first.call(null,seq__7906_9444__$1);{
var G__9446 = cljs.core.chunk_rest.call(null,seq__7906_9444__$1);
var G__9447 = c__5632__auto___9445;
var G__9448 = cljs.core.count.call(null,c__5632__auto___9445);
var G__9449 = 0;
seq__7906_9434 = G__9446;
chunk__7907_9435 = G__9447;
count__7908_9436 = G__9448;
i__7909_9437 = G__9449;
continue;
}
} else
{var arg__6562__auto___9450 = cljs.core.first.call(null,seq__7906_9444__$1);a__6561__auto__.push(arg__6562__auto___9450);
{
var G__9451 = cljs.core.next.call(null,seq__7906_9444__$1);
var G__9452 = null;
var G__9453 = 0;
var G__9454 = 0;
seq__7906_9434 = G__9451;
chunk__7907_9435 = G__9452;
count__7908_9436 = G__9453;
i__7909_9437 = G__9454;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h5.apply(null,a__6561__auto__);
};
var h5 = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h5__delegate.call(this,args__6560__auto__);};
h5.cljs$lang$maxFixedArity = 0;
h5.cljs$lang$applyTo = (function (arglist__9455){
var args__6560__auto__ = cljs.core.seq(arglist__9455);
return h5__delegate(args__6560__auto__);
});
h5.cljs$core$IFn$_invoke$arity$variadic = h5__delegate;
return h5;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h6 = (function() { 
var h6__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__7914_9456 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__7915_9457 = null;var count__7916_9458 = 0;var i__7917_9459 = 0;while(true){
if((i__7917_9459 < count__7916_9458))
{var arg__6562__auto___9460 = cljs.core._nth.call(null,chunk__7915_9457,i__7917_9459);a__6561__auto__.push(arg__6562__auto___9460);
{
var G__9461 = seq__7914_9456;
var G__9462 = chunk__7915_9457;
var G__9463 = count__7916_9458;
var G__9464 = (i__7917_9459 + 1);
seq__7914_9456 = G__9461;
chunk__7915_9457 = G__9462;
count__7916_9458 = G__9463;
i__7917_9459 = G__9464;
continue;
}
} else
{var temp__4092__auto___9465 = cljs.core.seq.call(null,seq__7914_9456);if(temp__4092__auto___9465)
{var seq__7914_9466__$1 = temp__4092__auto___9465;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7914_9466__$1))
{var c__5632__auto___9467 = cljs.core.chunk_first.call(null,seq__7914_9466__$1);{
var G__9468 = cljs.core.chunk_rest.call(null,seq__7914_9466__$1);
var G__9469 = c__5632__auto___9467;
var G__9470 = cljs.core.count.call(null,c__5632__auto___9467);
var G__9471 = 0;
seq__7914_9456 = G__9468;
chunk__7915_9457 = G__9469;
count__7916_9458 = G__9470;
i__7917_9459 = G__9471;
continue;
}
} else
{var arg__6562__auto___9472 = cljs.core.first.call(null,seq__7914_9466__$1);a__6561__auto__.push(arg__6562__auto___9472);
{
var G__9473 = cljs.core.next.call(null,seq__7914_9466__$1);
var G__9474 = null;
var G__9475 = 0;
var G__9476 = 0;
seq__7914_9456 = G__9473;
chunk__7915_9457 = G__9474;
count__7916_9458 = G__9475;
i__7917_9459 = G__9476;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h6.apply(null,a__6561__auto__);
};
var h6 = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h6__delegate.call(this,args__6560__auto__);};
h6.cljs$lang$maxFixedArity = 0;
h6.cljs$lang$applyTo = (function (arglist__9477){
var args__6560__auto__ = cljs.core.seq(arglist__9477);
return h6__delegate(args__6560__auto__);
});
h6.cljs$core$IFn$_invoke$arity$variadic = h6__delegate;
return h6;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.head = (function() { 
var head__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__7922_9478 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__7923_9479 = null;var count__7924_9480 = 0;var i__7925_9481 = 0;while(true){
if((i__7925_9481 < count__7924_9480))
{var arg__6562__auto___9482 = cljs.core._nth.call(null,chunk__7923_9479,i__7925_9481);a__6561__auto__.push(arg__6562__auto___9482);
{
var G__9483 = seq__7922_9478;
var G__9484 = chunk__7923_9479;
var G__9485 = count__7924_9480;
var G__9486 = (i__7925_9481 + 1);
seq__7922_9478 = G__9483;
chunk__7923_9479 = G__9484;
count__7924_9480 = G__9485;
i__7925_9481 = G__9486;
continue;
}
} else
{var temp__4092__auto___9487 = cljs.core.seq.call(null,seq__7922_9478);if(temp__4092__auto___9487)
{var seq__7922_9488__$1 = temp__4092__auto___9487;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7922_9488__$1))
{var c__5632__auto___9489 = cljs.core.chunk_first.call(null,seq__7922_9488__$1);{
var G__9490 = cljs.core.chunk_rest.call(null,seq__7922_9488__$1);
var G__9491 = c__5632__auto___9489;
var G__9492 = cljs.core.count.call(null,c__5632__auto___9489);
var G__9493 = 0;
seq__7922_9478 = G__9490;
chunk__7923_9479 = G__9491;
count__7924_9480 = G__9492;
i__7925_9481 = G__9493;
continue;
}
} else
{var arg__6562__auto___9494 = cljs.core.first.call(null,seq__7922_9488__$1);a__6561__auto__.push(arg__6562__auto___9494);
{
var G__9495 = cljs.core.next.call(null,seq__7922_9488__$1);
var G__9496 = null;
var G__9497 = 0;
var G__9498 = 0;
seq__7922_9478 = G__9495;
chunk__7923_9479 = G__9496;
count__7924_9480 = G__9497;
i__7925_9481 = G__9498;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.head.apply(null,a__6561__auto__);
};
var head = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return head__delegate.call(this,args__6560__auto__);};
head.cljs$lang$maxFixedArity = 0;
head.cljs$lang$applyTo = (function (arglist__9499){
var args__6560__auto__ = cljs.core.seq(arglist__9499);
return head__delegate(args__6560__auto__);
});
head.cljs$core$IFn$_invoke$arity$variadic = head__delegate;
return head;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.header = (function() { 
var header__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__7930_9500 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__7931_9501 = null;var count__7932_9502 = 0;var i__7933_9503 = 0;while(true){
if((i__7933_9503 < count__7932_9502))
{var arg__6562__auto___9504 = cljs.core._nth.call(null,chunk__7931_9501,i__7933_9503);a__6561__auto__.push(arg__6562__auto___9504);
{
var G__9505 = seq__7930_9500;
var G__9506 = chunk__7931_9501;
var G__9507 = count__7932_9502;
var G__9508 = (i__7933_9503 + 1);
seq__7930_9500 = G__9505;
chunk__7931_9501 = G__9506;
count__7932_9502 = G__9507;
i__7933_9503 = G__9508;
continue;
}
} else
{var temp__4092__auto___9509 = cljs.core.seq.call(null,seq__7930_9500);if(temp__4092__auto___9509)
{var seq__7930_9510__$1 = temp__4092__auto___9509;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7930_9510__$1))
{var c__5632__auto___9511 = cljs.core.chunk_first.call(null,seq__7930_9510__$1);{
var G__9512 = cljs.core.chunk_rest.call(null,seq__7930_9510__$1);
var G__9513 = c__5632__auto___9511;
var G__9514 = cljs.core.count.call(null,c__5632__auto___9511);
var G__9515 = 0;
seq__7930_9500 = G__9512;
chunk__7931_9501 = G__9513;
count__7932_9502 = G__9514;
i__7933_9503 = G__9515;
continue;
}
} else
{var arg__6562__auto___9516 = cljs.core.first.call(null,seq__7930_9510__$1);a__6561__auto__.push(arg__6562__auto___9516);
{
var G__9517 = cljs.core.next.call(null,seq__7930_9510__$1);
var G__9518 = null;
var G__9519 = 0;
var G__9520 = 0;
seq__7930_9500 = G__9517;
chunk__7931_9501 = G__9518;
count__7932_9502 = G__9519;
i__7933_9503 = G__9520;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.header.apply(null,a__6561__auto__);
};
var header = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return header__delegate.call(this,args__6560__auto__);};
header.cljs$lang$maxFixedArity = 0;
header.cljs$lang$applyTo = (function (arglist__9521){
var args__6560__auto__ = cljs.core.seq(arglist__9521);
return header__delegate(args__6560__auto__);
});
header.cljs$core$IFn$_invoke$arity$variadic = header__delegate;
return header;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.hr = (function() { 
var hr__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__7938_9522 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__7939_9523 = null;var count__7940_9524 = 0;var i__7941_9525 = 0;while(true){
if((i__7941_9525 < count__7940_9524))
{var arg__6562__auto___9526 = cljs.core._nth.call(null,chunk__7939_9523,i__7941_9525);a__6561__auto__.push(arg__6562__auto___9526);
{
var G__9527 = seq__7938_9522;
var G__9528 = chunk__7939_9523;
var G__9529 = count__7940_9524;
var G__9530 = (i__7941_9525 + 1);
seq__7938_9522 = G__9527;
chunk__7939_9523 = G__9528;
count__7940_9524 = G__9529;
i__7941_9525 = G__9530;
continue;
}
} else
{var temp__4092__auto___9531 = cljs.core.seq.call(null,seq__7938_9522);if(temp__4092__auto___9531)
{var seq__7938_9532__$1 = temp__4092__auto___9531;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7938_9532__$1))
{var c__5632__auto___9533 = cljs.core.chunk_first.call(null,seq__7938_9532__$1);{
var G__9534 = cljs.core.chunk_rest.call(null,seq__7938_9532__$1);
var G__9535 = c__5632__auto___9533;
var G__9536 = cljs.core.count.call(null,c__5632__auto___9533);
var G__9537 = 0;
seq__7938_9522 = G__9534;
chunk__7939_9523 = G__9535;
count__7940_9524 = G__9536;
i__7941_9525 = G__9537;
continue;
}
} else
{var arg__6562__auto___9538 = cljs.core.first.call(null,seq__7938_9532__$1);a__6561__auto__.push(arg__6562__auto___9538);
{
var G__9539 = cljs.core.next.call(null,seq__7938_9532__$1);
var G__9540 = null;
var G__9541 = 0;
var G__9542 = 0;
seq__7938_9522 = G__9539;
chunk__7939_9523 = G__9540;
count__7940_9524 = G__9541;
i__7941_9525 = G__9542;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.hr.apply(null,a__6561__auto__);
};
var hr = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return hr__delegate.call(this,args__6560__auto__);};
hr.cljs$lang$maxFixedArity = 0;
hr.cljs$lang$applyTo = (function (arglist__9543){
var args__6560__auto__ = cljs.core.seq(arglist__9543);
return hr__delegate(args__6560__auto__);
});
hr.cljs$core$IFn$_invoke$arity$variadic = hr__delegate;
return hr;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.html = (function() { 
var html__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__7946_9544 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__7947_9545 = null;var count__7948_9546 = 0;var i__7949_9547 = 0;while(true){
if((i__7949_9547 < count__7948_9546))
{var arg__6562__auto___9548 = cljs.core._nth.call(null,chunk__7947_9545,i__7949_9547);a__6561__auto__.push(arg__6562__auto___9548);
{
var G__9549 = seq__7946_9544;
var G__9550 = chunk__7947_9545;
var G__9551 = count__7948_9546;
var G__9552 = (i__7949_9547 + 1);
seq__7946_9544 = G__9549;
chunk__7947_9545 = G__9550;
count__7948_9546 = G__9551;
i__7949_9547 = G__9552;
continue;
}
} else
{var temp__4092__auto___9553 = cljs.core.seq.call(null,seq__7946_9544);if(temp__4092__auto___9553)
{var seq__7946_9554__$1 = temp__4092__auto___9553;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7946_9554__$1))
{var c__5632__auto___9555 = cljs.core.chunk_first.call(null,seq__7946_9554__$1);{
var G__9556 = cljs.core.chunk_rest.call(null,seq__7946_9554__$1);
var G__9557 = c__5632__auto___9555;
var G__9558 = cljs.core.count.call(null,c__5632__auto___9555);
var G__9559 = 0;
seq__7946_9544 = G__9556;
chunk__7947_9545 = G__9557;
count__7948_9546 = G__9558;
i__7949_9547 = G__9559;
continue;
}
} else
{var arg__6562__auto___9560 = cljs.core.first.call(null,seq__7946_9554__$1);a__6561__auto__.push(arg__6562__auto___9560);
{
var G__9561 = cljs.core.next.call(null,seq__7946_9554__$1);
var G__9562 = null;
var G__9563 = 0;
var G__9564 = 0;
seq__7946_9544 = G__9561;
chunk__7947_9545 = G__9562;
count__7948_9546 = G__9563;
i__7949_9547 = G__9564;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.html.apply(null,a__6561__auto__);
};
var html = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return html__delegate.call(this,args__6560__auto__);};
html.cljs$lang$maxFixedArity = 0;
html.cljs$lang$applyTo = (function (arglist__9565){
var args__6560__auto__ = cljs.core.seq(arglist__9565);
return html__delegate(args__6560__auto__);
});
html.cljs$core$IFn$_invoke$arity$variadic = html__delegate;
return html;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.i = (function() { 
var i__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__7954_9566 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__7955_9567 = null;var count__7956_9568 = 0;var i__7957_9569 = 0;while(true){
if((i__7957_9569 < count__7956_9568))
{var arg__6562__auto___9570 = cljs.core._nth.call(null,chunk__7955_9567,i__7957_9569);a__6561__auto__.push(arg__6562__auto___9570);
{
var G__9571 = seq__7954_9566;
var G__9572 = chunk__7955_9567;
var G__9573 = count__7956_9568;
var G__9574 = (i__7957_9569 + 1);
seq__7954_9566 = G__9571;
chunk__7955_9567 = G__9572;
count__7956_9568 = G__9573;
i__7957_9569 = G__9574;
continue;
}
} else
{var temp__4092__auto___9575 = cljs.core.seq.call(null,seq__7954_9566);if(temp__4092__auto___9575)
{var seq__7954_9576__$1 = temp__4092__auto___9575;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7954_9576__$1))
{var c__5632__auto___9577 = cljs.core.chunk_first.call(null,seq__7954_9576__$1);{
var G__9578 = cljs.core.chunk_rest.call(null,seq__7954_9576__$1);
var G__9579 = c__5632__auto___9577;
var G__9580 = cljs.core.count.call(null,c__5632__auto___9577);
var G__9581 = 0;
seq__7954_9566 = G__9578;
chunk__7955_9567 = G__9579;
count__7956_9568 = G__9580;
i__7957_9569 = G__9581;
continue;
}
} else
{var arg__6562__auto___9582 = cljs.core.first.call(null,seq__7954_9576__$1);a__6561__auto__.push(arg__6562__auto___9582);
{
var G__9583 = cljs.core.next.call(null,seq__7954_9576__$1);
var G__9584 = null;
var G__9585 = 0;
var G__9586 = 0;
seq__7954_9566 = G__9583;
chunk__7955_9567 = G__9584;
count__7956_9568 = G__9585;
i__7957_9569 = G__9586;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.i.apply(null,a__6561__auto__);
};
var i = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return i__delegate.call(this,args__6560__auto__);};
i.cljs$lang$maxFixedArity = 0;
i.cljs$lang$applyTo = (function (arglist__9587){
var args__6560__auto__ = cljs.core.seq(arglist__9587);
return i__delegate(args__6560__auto__);
});
i.cljs$core$IFn$_invoke$arity$variadic = i__delegate;
return i;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.iframe = (function() { 
var iframe__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__7962_9588 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__7963_9589 = null;var count__7964_9590 = 0;var i__7965_9591 = 0;while(true){
if((i__7965_9591 < count__7964_9590))
{var arg__6562__auto___9592 = cljs.core._nth.call(null,chunk__7963_9589,i__7965_9591);a__6561__auto__.push(arg__6562__auto___9592);
{
var G__9593 = seq__7962_9588;
var G__9594 = chunk__7963_9589;
var G__9595 = count__7964_9590;
var G__9596 = (i__7965_9591 + 1);
seq__7962_9588 = G__9593;
chunk__7963_9589 = G__9594;
count__7964_9590 = G__9595;
i__7965_9591 = G__9596;
continue;
}
} else
{var temp__4092__auto___9597 = cljs.core.seq.call(null,seq__7962_9588);if(temp__4092__auto___9597)
{var seq__7962_9598__$1 = temp__4092__auto___9597;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7962_9598__$1))
{var c__5632__auto___9599 = cljs.core.chunk_first.call(null,seq__7962_9598__$1);{
var G__9600 = cljs.core.chunk_rest.call(null,seq__7962_9598__$1);
var G__9601 = c__5632__auto___9599;
var G__9602 = cljs.core.count.call(null,c__5632__auto___9599);
var G__9603 = 0;
seq__7962_9588 = G__9600;
chunk__7963_9589 = G__9601;
count__7964_9590 = G__9602;
i__7965_9591 = G__9603;
continue;
}
} else
{var arg__6562__auto___9604 = cljs.core.first.call(null,seq__7962_9598__$1);a__6561__auto__.push(arg__6562__auto___9604);
{
var G__9605 = cljs.core.next.call(null,seq__7962_9598__$1);
var G__9606 = null;
var G__9607 = 0;
var G__9608 = 0;
seq__7962_9588 = G__9605;
chunk__7963_9589 = G__9606;
count__7964_9590 = G__9607;
i__7965_9591 = G__9608;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.iframe.apply(null,a__6561__auto__);
};
var iframe = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return iframe__delegate.call(this,args__6560__auto__);};
iframe.cljs$lang$maxFixedArity = 0;
iframe.cljs$lang$applyTo = (function (arglist__9609){
var args__6560__auto__ = cljs.core.seq(arglist__9609);
return iframe__delegate(args__6560__auto__);
});
iframe.cljs$core$IFn$_invoke$arity$variadic = iframe__delegate;
return iframe;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.img = (function() { 
var img__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__7970_9610 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__7971_9611 = null;var count__7972_9612 = 0;var i__7973_9613 = 0;while(true){
if((i__7973_9613 < count__7972_9612))
{var arg__6562__auto___9614 = cljs.core._nth.call(null,chunk__7971_9611,i__7973_9613);a__6561__auto__.push(arg__6562__auto___9614);
{
var G__9615 = seq__7970_9610;
var G__9616 = chunk__7971_9611;
var G__9617 = count__7972_9612;
var G__9618 = (i__7973_9613 + 1);
seq__7970_9610 = G__9615;
chunk__7971_9611 = G__9616;
count__7972_9612 = G__9617;
i__7973_9613 = G__9618;
continue;
}
} else
{var temp__4092__auto___9619 = cljs.core.seq.call(null,seq__7970_9610);if(temp__4092__auto___9619)
{var seq__7970_9620__$1 = temp__4092__auto___9619;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7970_9620__$1))
{var c__5632__auto___9621 = cljs.core.chunk_first.call(null,seq__7970_9620__$1);{
var G__9622 = cljs.core.chunk_rest.call(null,seq__7970_9620__$1);
var G__9623 = c__5632__auto___9621;
var G__9624 = cljs.core.count.call(null,c__5632__auto___9621);
var G__9625 = 0;
seq__7970_9610 = G__9622;
chunk__7971_9611 = G__9623;
count__7972_9612 = G__9624;
i__7973_9613 = G__9625;
continue;
}
} else
{var arg__6562__auto___9626 = cljs.core.first.call(null,seq__7970_9620__$1);a__6561__auto__.push(arg__6562__auto___9626);
{
var G__9627 = cljs.core.next.call(null,seq__7970_9620__$1);
var G__9628 = null;
var G__9629 = 0;
var G__9630 = 0;
seq__7970_9610 = G__9627;
chunk__7971_9611 = G__9628;
count__7972_9612 = G__9629;
i__7973_9613 = G__9630;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.img.apply(null,a__6561__auto__);
};
var img = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return img__delegate.call(this,args__6560__auto__);};
img.cljs$lang$maxFixedArity = 0;
img.cljs$lang$applyTo = (function (arglist__9631){
var args__6560__auto__ = cljs.core.seq(arglist__9631);
return img__delegate(args__6560__auto__);
});
img.cljs$core$IFn$_invoke$arity$variadic = img__delegate;
return img;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.input = (function() { 
var input__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__7978_9632 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__7979_9633 = null;var count__7980_9634 = 0;var i__7981_9635 = 0;while(true){
if((i__7981_9635 < count__7980_9634))
{var arg__6562__auto___9636 = cljs.core._nth.call(null,chunk__7979_9633,i__7981_9635);a__6561__auto__.push(arg__6562__auto___9636);
{
var G__9637 = seq__7978_9632;
var G__9638 = chunk__7979_9633;
var G__9639 = count__7980_9634;
var G__9640 = (i__7981_9635 + 1);
seq__7978_9632 = G__9637;
chunk__7979_9633 = G__9638;
count__7980_9634 = G__9639;
i__7981_9635 = G__9640;
continue;
}
} else
{var temp__4092__auto___9641 = cljs.core.seq.call(null,seq__7978_9632);if(temp__4092__auto___9641)
{var seq__7978_9642__$1 = temp__4092__auto___9641;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7978_9642__$1))
{var c__5632__auto___9643 = cljs.core.chunk_first.call(null,seq__7978_9642__$1);{
var G__9644 = cljs.core.chunk_rest.call(null,seq__7978_9642__$1);
var G__9645 = c__5632__auto___9643;
var G__9646 = cljs.core.count.call(null,c__5632__auto___9643);
var G__9647 = 0;
seq__7978_9632 = G__9644;
chunk__7979_9633 = G__9645;
count__7980_9634 = G__9646;
i__7981_9635 = G__9647;
continue;
}
} else
{var arg__6562__auto___9648 = cljs.core.first.call(null,seq__7978_9642__$1);a__6561__auto__.push(arg__6562__auto___9648);
{
var G__9649 = cljs.core.next.call(null,seq__7978_9642__$1);
var G__9650 = null;
var G__9651 = 0;
var G__9652 = 0;
seq__7978_9632 = G__9649;
chunk__7979_9633 = G__9650;
count__7980_9634 = G__9651;
i__7981_9635 = G__9652;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.input.apply(null,a__6561__auto__);
};
var input = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return input__delegate.call(this,args__6560__auto__);};
input.cljs$lang$maxFixedArity = 0;
input.cljs$lang$applyTo = (function (arglist__9653){
var args__6560__auto__ = cljs.core.seq(arglist__9653);
return input__delegate(args__6560__auto__);
});
input.cljs$core$IFn$_invoke$arity$variadic = input__delegate;
return input;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.ins = (function() { 
var ins__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__7986_9654 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__7987_9655 = null;var count__7988_9656 = 0;var i__7989_9657 = 0;while(true){
if((i__7989_9657 < count__7988_9656))
{var arg__6562__auto___9658 = cljs.core._nth.call(null,chunk__7987_9655,i__7989_9657);a__6561__auto__.push(arg__6562__auto___9658);
{
var G__9659 = seq__7986_9654;
var G__9660 = chunk__7987_9655;
var G__9661 = count__7988_9656;
var G__9662 = (i__7989_9657 + 1);
seq__7986_9654 = G__9659;
chunk__7987_9655 = G__9660;
count__7988_9656 = G__9661;
i__7989_9657 = G__9662;
continue;
}
} else
{var temp__4092__auto___9663 = cljs.core.seq.call(null,seq__7986_9654);if(temp__4092__auto___9663)
{var seq__7986_9664__$1 = temp__4092__auto___9663;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7986_9664__$1))
{var c__5632__auto___9665 = cljs.core.chunk_first.call(null,seq__7986_9664__$1);{
var G__9666 = cljs.core.chunk_rest.call(null,seq__7986_9664__$1);
var G__9667 = c__5632__auto___9665;
var G__9668 = cljs.core.count.call(null,c__5632__auto___9665);
var G__9669 = 0;
seq__7986_9654 = G__9666;
chunk__7987_9655 = G__9667;
count__7988_9656 = G__9668;
i__7989_9657 = G__9669;
continue;
}
} else
{var arg__6562__auto___9670 = cljs.core.first.call(null,seq__7986_9664__$1);a__6561__auto__.push(arg__6562__auto___9670);
{
var G__9671 = cljs.core.next.call(null,seq__7986_9664__$1);
var G__9672 = null;
var G__9673 = 0;
var G__9674 = 0;
seq__7986_9654 = G__9671;
chunk__7987_9655 = G__9672;
count__7988_9656 = G__9673;
i__7989_9657 = G__9674;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.ins.apply(null,a__6561__auto__);
};
var ins = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ins__delegate.call(this,args__6560__auto__);};
ins.cljs$lang$maxFixedArity = 0;
ins.cljs$lang$applyTo = (function (arglist__9675){
var args__6560__auto__ = cljs.core.seq(arglist__9675);
return ins__delegate(args__6560__auto__);
});
ins.cljs$core$IFn$_invoke$arity$variadic = ins__delegate;
return ins;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.kbd = (function() { 
var kbd__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__7994_9676 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__7995_9677 = null;var count__7996_9678 = 0;var i__7997_9679 = 0;while(true){
if((i__7997_9679 < count__7996_9678))
{var arg__6562__auto___9680 = cljs.core._nth.call(null,chunk__7995_9677,i__7997_9679);a__6561__auto__.push(arg__6562__auto___9680);
{
var G__9681 = seq__7994_9676;
var G__9682 = chunk__7995_9677;
var G__9683 = count__7996_9678;
var G__9684 = (i__7997_9679 + 1);
seq__7994_9676 = G__9681;
chunk__7995_9677 = G__9682;
count__7996_9678 = G__9683;
i__7997_9679 = G__9684;
continue;
}
} else
{var temp__4092__auto___9685 = cljs.core.seq.call(null,seq__7994_9676);if(temp__4092__auto___9685)
{var seq__7994_9686__$1 = temp__4092__auto___9685;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7994_9686__$1))
{var c__5632__auto___9687 = cljs.core.chunk_first.call(null,seq__7994_9686__$1);{
var G__9688 = cljs.core.chunk_rest.call(null,seq__7994_9686__$1);
var G__9689 = c__5632__auto___9687;
var G__9690 = cljs.core.count.call(null,c__5632__auto___9687);
var G__9691 = 0;
seq__7994_9676 = G__9688;
chunk__7995_9677 = G__9689;
count__7996_9678 = G__9690;
i__7997_9679 = G__9691;
continue;
}
} else
{var arg__6562__auto___9692 = cljs.core.first.call(null,seq__7994_9686__$1);a__6561__auto__.push(arg__6562__auto___9692);
{
var G__9693 = cljs.core.next.call(null,seq__7994_9686__$1);
var G__9694 = null;
var G__9695 = 0;
var G__9696 = 0;
seq__7994_9676 = G__9693;
chunk__7995_9677 = G__9694;
count__7996_9678 = G__9695;
i__7997_9679 = G__9696;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.kbd.apply(null,a__6561__auto__);
};
var kbd = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return kbd__delegate.call(this,args__6560__auto__);};
kbd.cljs$lang$maxFixedArity = 0;
kbd.cljs$lang$applyTo = (function (arglist__9697){
var args__6560__auto__ = cljs.core.seq(arglist__9697);
return kbd__delegate(args__6560__auto__);
});
kbd.cljs$core$IFn$_invoke$arity$variadic = kbd__delegate;
return kbd;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.keygen = (function() { 
var keygen__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__8002_9698 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__8003_9699 = null;var count__8004_9700 = 0;var i__8005_9701 = 0;while(true){
if((i__8005_9701 < count__8004_9700))
{var arg__6562__auto___9702 = cljs.core._nth.call(null,chunk__8003_9699,i__8005_9701);a__6561__auto__.push(arg__6562__auto___9702);
{
var G__9703 = seq__8002_9698;
var G__9704 = chunk__8003_9699;
var G__9705 = count__8004_9700;
var G__9706 = (i__8005_9701 + 1);
seq__8002_9698 = G__9703;
chunk__8003_9699 = G__9704;
count__8004_9700 = G__9705;
i__8005_9701 = G__9706;
continue;
}
} else
{var temp__4092__auto___9707 = cljs.core.seq.call(null,seq__8002_9698);if(temp__4092__auto___9707)
{var seq__8002_9708__$1 = temp__4092__auto___9707;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8002_9708__$1))
{var c__5632__auto___9709 = cljs.core.chunk_first.call(null,seq__8002_9708__$1);{
var G__9710 = cljs.core.chunk_rest.call(null,seq__8002_9708__$1);
var G__9711 = c__5632__auto___9709;
var G__9712 = cljs.core.count.call(null,c__5632__auto___9709);
var G__9713 = 0;
seq__8002_9698 = G__9710;
chunk__8003_9699 = G__9711;
count__8004_9700 = G__9712;
i__8005_9701 = G__9713;
continue;
}
} else
{var arg__6562__auto___9714 = cljs.core.first.call(null,seq__8002_9708__$1);a__6561__auto__.push(arg__6562__auto___9714);
{
var G__9715 = cljs.core.next.call(null,seq__8002_9708__$1);
var G__9716 = null;
var G__9717 = 0;
var G__9718 = 0;
seq__8002_9698 = G__9715;
chunk__8003_9699 = G__9716;
count__8004_9700 = G__9717;
i__8005_9701 = G__9718;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.keygen.apply(null,a__6561__auto__);
};
var keygen = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return keygen__delegate.call(this,args__6560__auto__);};
keygen.cljs$lang$maxFixedArity = 0;
keygen.cljs$lang$applyTo = (function (arglist__9719){
var args__6560__auto__ = cljs.core.seq(arglist__9719);
return keygen__delegate(args__6560__auto__);
});
keygen.cljs$core$IFn$_invoke$arity$variadic = keygen__delegate;
return keygen;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.label = (function() { 
var label__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__8010_9720 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__8011_9721 = null;var count__8012_9722 = 0;var i__8013_9723 = 0;while(true){
if((i__8013_9723 < count__8012_9722))
{var arg__6562__auto___9724 = cljs.core._nth.call(null,chunk__8011_9721,i__8013_9723);a__6561__auto__.push(arg__6562__auto___9724);
{
var G__9725 = seq__8010_9720;
var G__9726 = chunk__8011_9721;
var G__9727 = count__8012_9722;
var G__9728 = (i__8013_9723 + 1);
seq__8010_9720 = G__9725;
chunk__8011_9721 = G__9726;
count__8012_9722 = G__9727;
i__8013_9723 = G__9728;
continue;
}
} else
{var temp__4092__auto___9729 = cljs.core.seq.call(null,seq__8010_9720);if(temp__4092__auto___9729)
{var seq__8010_9730__$1 = temp__4092__auto___9729;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8010_9730__$1))
{var c__5632__auto___9731 = cljs.core.chunk_first.call(null,seq__8010_9730__$1);{
var G__9732 = cljs.core.chunk_rest.call(null,seq__8010_9730__$1);
var G__9733 = c__5632__auto___9731;
var G__9734 = cljs.core.count.call(null,c__5632__auto___9731);
var G__9735 = 0;
seq__8010_9720 = G__9732;
chunk__8011_9721 = G__9733;
count__8012_9722 = G__9734;
i__8013_9723 = G__9735;
continue;
}
} else
{var arg__6562__auto___9736 = cljs.core.first.call(null,seq__8010_9730__$1);a__6561__auto__.push(arg__6562__auto___9736);
{
var G__9737 = cljs.core.next.call(null,seq__8010_9730__$1);
var G__9738 = null;
var G__9739 = 0;
var G__9740 = 0;
seq__8010_9720 = G__9737;
chunk__8011_9721 = G__9738;
count__8012_9722 = G__9739;
i__8013_9723 = G__9740;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.label.apply(null,a__6561__auto__);
};
var label = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return label__delegate.call(this,args__6560__auto__);};
label.cljs$lang$maxFixedArity = 0;
label.cljs$lang$applyTo = (function (arglist__9741){
var args__6560__auto__ = cljs.core.seq(arglist__9741);
return label__delegate(args__6560__auto__);
});
label.cljs$core$IFn$_invoke$arity$variadic = label__delegate;
return label;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.legend = (function() { 
var legend__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__8018_9742 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__8019_9743 = null;var count__8020_9744 = 0;var i__8021_9745 = 0;while(true){
if((i__8021_9745 < count__8020_9744))
{var arg__6562__auto___9746 = cljs.core._nth.call(null,chunk__8019_9743,i__8021_9745);a__6561__auto__.push(arg__6562__auto___9746);
{
var G__9747 = seq__8018_9742;
var G__9748 = chunk__8019_9743;
var G__9749 = count__8020_9744;
var G__9750 = (i__8021_9745 + 1);
seq__8018_9742 = G__9747;
chunk__8019_9743 = G__9748;
count__8020_9744 = G__9749;
i__8021_9745 = G__9750;
continue;
}
} else
{var temp__4092__auto___9751 = cljs.core.seq.call(null,seq__8018_9742);if(temp__4092__auto___9751)
{var seq__8018_9752__$1 = temp__4092__auto___9751;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8018_9752__$1))
{var c__5632__auto___9753 = cljs.core.chunk_first.call(null,seq__8018_9752__$1);{
var G__9754 = cljs.core.chunk_rest.call(null,seq__8018_9752__$1);
var G__9755 = c__5632__auto___9753;
var G__9756 = cljs.core.count.call(null,c__5632__auto___9753);
var G__9757 = 0;
seq__8018_9742 = G__9754;
chunk__8019_9743 = G__9755;
count__8020_9744 = G__9756;
i__8021_9745 = G__9757;
continue;
}
} else
{var arg__6562__auto___9758 = cljs.core.first.call(null,seq__8018_9752__$1);a__6561__auto__.push(arg__6562__auto___9758);
{
var G__9759 = cljs.core.next.call(null,seq__8018_9752__$1);
var G__9760 = null;
var G__9761 = 0;
var G__9762 = 0;
seq__8018_9742 = G__9759;
chunk__8019_9743 = G__9760;
count__8020_9744 = G__9761;
i__8021_9745 = G__9762;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.legend.apply(null,a__6561__auto__);
};
var legend = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return legend__delegate.call(this,args__6560__auto__);};
legend.cljs$lang$maxFixedArity = 0;
legend.cljs$lang$applyTo = (function (arglist__9763){
var args__6560__auto__ = cljs.core.seq(arglist__9763);
return legend__delegate(args__6560__auto__);
});
legend.cljs$core$IFn$_invoke$arity$variadic = legend__delegate;
return legend;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.li = (function() { 
var li__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__8026_9764 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__8027_9765 = null;var count__8028_9766 = 0;var i__8029_9767 = 0;while(true){
if((i__8029_9767 < count__8028_9766))
{var arg__6562__auto___9768 = cljs.core._nth.call(null,chunk__8027_9765,i__8029_9767);a__6561__auto__.push(arg__6562__auto___9768);
{
var G__9769 = seq__8026_9764;
var G__9770 = chunk__8027_9765;
var G__9771 = count__8028_9766;
var G__9772 = (i__8029_9767 + 1);
seq__8026_9764 = G__9769;
chunk__8027_9765 = G__9770;
count__8028_9766 = G__9771;
i__8029_9767 = G__9772;
continue;
}
} else
{var temp__4092__auto___9773 = cljs.core.seq.call(null,seq__8026_9764);if(temp__4092__auto___9773)
{var seq__8026_9774__$1 = temp__4092__auto___9773;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8026_9774__$1))
{var c__5632__auto___9775 = cljs.core.chunk_first.call(null,seq__8026_9774__$1);{
var G__9776 = cljs.core.chunk_rest.call(null,seq__8026_9774__$1);
var G__9777 = c__5632__auto___9775;
var G__9778 = cljs.core.count.call(null,c__5632__auto___9775);
var G__9779 = 0;
seq__8026_9764 = G__9776;
chunk__8027_9765 = G__9777;
count__8028_9766 = G__9778;
i__8029_9767 = G__9779;
continue;
}
} else
{var arg__6562__auto___9780 = cljs.core.first.call(null,seq__8026_9774__$1);a__6561__auto__.push(arg__6562__auto___9780);
{
var G__9781 = cljs.core.next.call(null,seq__8026_9774__$1);
var G__9782 = null;
var G__9783 = 0;
var G__9784 = 0;
seq__8026_9764 = G__9781;
chunk__8027_9765 = G__9782;
count__8028_9766 = G__9783;
i__8029_9767 = G__9784;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.li.apply(null,a__6561__auto__);
};
var li = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return li__delegate.call(this,args__6560__auto__);};
li.cljs$lang$maxFixedArity = 0;
li.cljs$lang$applyTo = (function (arglist__9785){
var args__6560__auto__ = cljs.core.seq(arglist__9785);
return li__delegate(args__6560__auto__);
});
li.cljs$core$IFn$_invoke$arity$variadic = li__delegate;
return li;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.link = (function() { 
var link__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__8034_9786 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__8035_9787 = null;var count__8036_9788 = 0;var i__8037_9789 = 0;while(true){
if((i__8037_9789 < count__8036_9788))
{var arg__6562__auto___9790 = cljs.core._nth.call(null,chunk__8035_9787,i__8037_9789);a__6561__auto__.push(arg__6562__auto___9790);
{
var G__9791 = seq__8034_9786;
var G__9792 = chunk__8035_9787;
var G__9793 = count__8036_9788;
var G__9794 = (i__8037_9789 + 1);
seq__8034_9786 = G__9791;
chunk__8035_9787 = G__9792;
count__8036_9788 = G__9793;
i__8037_9789 = G__9794;
continue;
}
} else
{var temp__4092__auto___9795 = cljs.core.seq.call(null,seq__8034_9786);if(temp__4092__auto___9795)
{var seq__8034_9796__$1 = temp__4092__auto___9795;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8034_9796__$1))
{var c__5632__auto___9797 = cljs.core.chunk_first.call(null,seq__8034_9796__$1);{
var G__9798 = cljs.core.chunk_rest.call(null,seq__8034_9796__$1);
var G__9799 = c__5632__auto___9797;
var G__9800 = cljs.core.count.call(null,c__5632__auto___9797);
var G__9801 = 0;
seq__8034_9786 = G__9798;
chunk__8035_9787 = G__9799;
count__8036_9788 = G__9800;
i__8037_9789 = G__9801;
continue;
}
} else
{var arg__6562__auto___9802 = cljs.core.first.call(null,seq__8034_9796__$1);a__6561__auto__.push(arg__6562__auto___9802);
{
var G__9803 = cljs.core.next.call(null,seq__8034_9796__$1);
var G__9804 = null;
var G__9805 = 0;
var G__9806 = 0;
seq__8034_9786 = G__9803;
chunk__8035_9787 = G__9804;
count__8036_9788 = G__9805;
i__8037_9789 = G__9806;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.link.apply(null,a__6561__auto__);
};
var link = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return link__delegate.call(this,args__6560__auto__);};
link.cljs$lang$maxFixedArity = 0;
link.cljs$lang$applyTo = (function (arglist__9807){
var args__6560__auto__ = cljs.core.seq(arglist__9807);
return link__delegate(args__6560__auto__);
});
link.cljs$core$IFn$_invoke$arity$variadic = link__delegate;
return link;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.main = (function() { 
var main__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__8042_9808 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__8043_9809 = null;var count__8044_9810 = 0;var i__8045_9811 = 0;while(true){
if((i__8045_9811 < count__8044_9810))
{var arg__6562__auto___9812 = cljs.core._nth.call(null,chunk__8043_9809,i__8045_9811);a__6561__auto__.push(arg__6562__auto___9812);
{
var G__9813 = seq__8042_9808;
var G__9814 = chunk__8043_9809;
var G__9815 = count__8044_9810;
var G__9816 = (i__8045_9811 + 1);
seq__8042_9808 = G__9813;
chunk__8043_9809 = G__9814;
count__8044_9810 = G__9815;
i__8045_9811 = G__9816;
continue;
}
} else
{var temp__4092__auto___9817 = cljs.core.seq.call(null,seq__8042_9808);if(temp__4092__auto___9817)
{var seq__8042_9818__$1 = temp__4092__auto___9817;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8042_9818__$1))
{var c__5632__auto___9819 = cljs.core.chunk_first.call(null,seq__8042_9818__$1);{
var G__9820 = cljs.core.chunk_rest.call(null,seq__8042_9818__$1);
var G__9821 = c__5632__auto___9819;
var G__9822 = cljs.core.count.call(null,c__5632__auto___9819);
var G__9823 = 0;
seq__8042_9808 = G__9820;
chunk__8043_9809 = G__9821;
count__8044_9810 = G__9822;
i__8045_9811 = G__9823;
continue;
}
} else
{var arg__6562__auto___9824 = cljs.core.first.call(null,seq__8042_9818__$1);a__6561__auto__.push(arg__6562__auto___9824);
{
var G__9825 = cljs.core.next.call(null,seq__8042_9818__$1);
var G__9826 = null;
var G__9827 = 0;
var G__9828 = 0;
seq__8042_9808 = G__9825;
chunk__8043_9809 = G__9826;
count__8044_9810 = G__9827;
i__8045_9811 = G__9828;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.main.apply(null,a__6561__auto__);
};
var main = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return main__delegate.call(this,args__6560__auto__);};
main.cljs$lang$maxFixedArity = 0;
main.cljs$lang$applyTo = (function (arglist__9829){
var args__6560__auto__ = cljs.core.seq(arglist__9829);
return main__delegate(args__6560__auto__);
});
main.cljs$core$IFn$_invoke$arity$variadic = main__delegate;
return main;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.map = (function() { 
var map__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__8050_9830 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__8051_9831 = null;var count__8052_9832 = 0;var i__8053_9833 = 0;while(true){
if((i__8053_9833 < count__8052_9832))
{var arg__6562__auto___9834 = cljs.core._nth.call(null,chunk__8051_9831,i__8053_9833);a__6561__auto__.push(arg__6562__auto___9834);
{
var G__9835 = seq__8050_9830;
var G__9836 = chunk__8051_9831;
var G__9837 = count__8052_9832;
var G__9838 = (i__8053_9833 + 1);
seq__8050_9830 = G__9835;
chunk__8051_9831 = G__9836;
count__8052_9832 = G__9837;
i__8053_9833 = G__9838;
continue;
}
} else
{var temp__4092__auto___9839 = cljs.core.seq.call(null,seq__8050_9830);if(temp__4092__auto___9839)
{var seq__8050_9840__$1 = temp__4092__auto___9839;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8050_9840__$1))
{var c__5632__auto___9841 = cljs.core.chunk_first.call(null,seq__8050_9840__$1);{
var G__9842 = cljs.core.chunk_rest.call(null,seq__8050_9840__$1);
var G__9843 = c__5632__auto___9841;
var G__9844 = cljs.core.count.call(null,c__5632__auto___9841);
var G__9845 = 0;
seq__8050_9830 = G__9842;
chunk__8051_9831 = G__9843;
count__8052_9832 = G__9844;
i__8053_9833 = G__9845;
continue;
}
} else
{var arg__6562__auto___9846 = cljs.core.first.call(null,seq__8050_9840__$1);a__6561__auto__.push(arg__6562__auto___9846);
{
var G__9847 = cljs.core.next.call(null,seq__8050_9840__$1);
var G__9848 = null;
var G__9849 = 0;
var G__9850 = 0;
seq__8050_9830 = G__9847;
chunk__8051_9831 = G__9848;
count__8052_9832 = G__9849;
i__8053_9833 = G__9850;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.map.apply(null,a__6561__auto__);
};
var map = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return map__delegate.call(this,args__6560__auto__);};
map.cljs$lang$maxFixedArity = 0;
map.cljs$lang$applyTo = (function (arglist__9851){
var args__6560__auto__ = cljs.core.seq(arglist__9851);
return map__delegate(args__6560__auto__);
});
map.cljs$core$IFn$_invoke$arity$variadic = map__delegate;
return map;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.mark = (function() { 
var mark__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__8058_9852 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__8059_9853 = null;var count__8060_9854 = 0;var i__8061_9855 = 0;while(true){
if((i__8061_9855 < count__8060_9854))
{var arg__6562__auto___9856 = cljs.core._nth.call(null,chunk__8059_9853,i__8061_9855);a__6561__auto__.push(arg__6562__auto___9856);
{
var G__9857 = seq__8058_9852;
var G__9858 = chunk__8059_9853;
var G__9859 = count__8060_9854;
var G__9860 = (i__8061_9855 + 1);
seq__8058_9852 = G__9857;
chunk__8059_9853 = G__9858;
count__8060_9854 = G__9859;
i__8061_9855 = G__9860;
continue;
}
} else
{var temp__4092__auto___9861 = cljs.core.seq.call(null,seq__8058_9852);if(temp__4092__auto___9861)
{var seq__8058_9862__$1 = temp__4092__auto___9861;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8058_9862__$1))
{var c__5632__auto___9863 = cljs.core.chunk_first.call(null,seq__8058_9862__$1);{
var G__9864 = cljs.core.chunk_rest.call(null,seq__8058_9862__$1);
var G__9865 = c__5632__auto___9863;
var G__9866 = cljs.core.count.call(null,c__5632__auto___9863);
var G__9867 = 0;
seq__8058_9852 = G__9864;
chunk__8059_9853 = G__9865;
count__8060_9854 = G__9866;
i__8061_9855 = G__9867;
continue;
}
} else
{var arg__6562__auto___9868 = cljs.core.first.call(null,seq__8058_9862__$1);a__6561__auto__.push(arg__6562__auto___9868);
{
var G__9869 = cljs.core.next.call(null,seq__8058_9862__$1);
var G__9870 = null;
var G__9871 = 0;
var G__9872 = 0;
seq__8058_9852 = G__9869;
chunk__8059_9853 = G__9870;
count__8060_9854 = G__9871;
i__8061_9855 = G__9872;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.mark.apply(null,a__6561__auto__);
};
var mark = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return mark__delegate.call(this,args__6560__auto__);};
mark.cljs$lang$maxFixedArity = 0;
mark.cljs$lang$applyTo = (function (arglist__9873){
var args__6560__auto__ = cljs.core.seq(arglist__9873);
return mark__delegate(args__6560__auto__);
});
mark.cljs$core$IFn$_invoke$arity$variadic = mark__delegate;
return mark;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.menu = (function() { 
var menu__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__8066_9874 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__8067_9875 = null;var count__8068_9876 = 0;var i__8069_9877 = 0;while(true){
if((i__8069_9877 < count__8068_9876))
{var arg__6562__auto___9878 = cljs.core._nth.call(null,chunk__8067_9875,i__8069_9877);a__6561__auto__.push(arg__6562__auto___9878);
{
var G__9879 = seq__8066_9874;
var G__9880 = chunk__8067_9875;
var G__9881 = count__8068_9876;
var G__9882 = (i__8069_9877 + 1);
seq__8066_9874 = G__9879;
chunk__8067_9875 = G__9880;
count__8068_9876 = G__9881;
i__8069_9877 = G__9882;
continue;
}
} else
{var temp__4092__auto___9883 = cljs.core.seq.call(null,seq__8066_9874);if(temp__4092__auto___9883)
{var seq__8066_9884__$1 = temp__4092__auto___9883;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8066_9884__$1))
{var c__5632__auto___9885 = cljs.core.chunk_first.call(null,seq__8066_9884__$1);{
var G__9886 = cljs.core.chunk_rest.call(null,seq__8066_9884__$1);
var G__9887 = c__5632__auto___9885;
var G__9888 = cljs.core.count.call(null,c__5632__auto___9885);
var G__9889 = 0;
seq__8066_9874 = G__9886;
chunk__8067_9875 = G__9887;
count__8068_9876 = G__9888;
i__8069_9877 = G__9889;
continue;
}
} else
{var arg__6562__auto___9890 = cljs.core.first.call(null,seq__8066_9884__$1);a__6561__auto__.push(arg__6562__auto___9890);
{
var G__9891 = cljs.core.next.call(null,seq__8066_9884__$1);
var G__9892 = null;
var G__9893 = 0;
var G__9894 = 0;
seq__8066_9874 = G__9891;
chunk__8067_9875 = G__9892;
count__8068_9876 = G__9893;
i__8069_9877 = G__9894;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.menu.apply(null,a__6561__auto__);
};
var menu = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return menu__delegate.call(this,args__6560__auto__);};
menu.cljs$lang$maxFixedArity = 0;
menu.cljs$lang$applyTo = (function (arglist__9895){
var args__6560__auto__ = cljs.core.seq(arglist__9895);
return menu__delegate(args__6560__auto__);
});
menu.cljs$core$IFn$_invoke$arity$variadic = menu__delegate;
return menu;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.menuitem = (function() { 
var menuitem__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__8074_9896 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__8075_9897 = null;var count__8076_9898 = 0;var i__8077_9899 = 0;while(true){
if((i__8077_9899 < count__8076_9898))
{var arg__6562__auto___9900 = cljs.core._nth.call(null,chunk__8075_9897,i__8077_9899);a__6561__auto__.push(arg__6562__auto___9900);
{
var G__9901 = seq__8074_9896;
var G__9902 = chunk__8075_9897;
var G__9903 = count__8076_9898;
var G__9904 = (i__8077_9899 + 1);
seq__8074_9896 = G__9901;
chunk__8075_9897 = G__9902;
count__8076_9898 = G__9903;
i__8077_9899 = G__9904;
continue;
}
} else
{var temp__4092__auto___9905 = cljs.core.seq.call(null,seq__8074_9896);if(temp__4092__auto___9905)
{var seq__8074_9906__$1 = temp__4092__auto___9905;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8074_9906__$1))
{var c__5632__auto___9907 = cljs.core.chunk_first.call(null,seq__8074_9906__$1);{
var G__9908 = cljs.core.chunk_rest.call(null,seq__8074_9906__$1);
var G__9909 = c__5632__auto___9907;
var G__9910 = cljs.core.count.call(null,c__5632__auto___9907);
var G__9911 = 0;
seq__8074_9896 = G__9908;
chunk__8075_9897 = G__9909;
count__8076_9898 = G__9910;
i__8077_9899 = G__9911;
continue;
}
} else
{var arg__6562__auto___9912 = cljs.core.first.call(null,seq__8074_9906__$1);a__6561__auto__.push(arg__6562__auto___9912);
{
var G__9913 = cljs.core.next.call(null,seq__8074_9906__$1);
var G__9914 = null;
var G__9915 = 0;
var G__9916 = 0;
seq__8074_9896 = G__9913;
chunk__8075_9897 = G__9914;
count__8076_9898 = G__9915;
i__8077_9899 = G__9916;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.menuitem.apply(null,a__6561__auto__);
};
var menuitem = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return menuitem__delegate.call(this,args__6560__auto__);};
menuitem.cljs$lang$maxFixedArity = 0;
menuitem.cljs$lang$applyTo = (function (arglist__9917){
var args__6560__auto__ = cljs.core.seq(arglist__9917);
return menuitem__delegate(args__6560__auto__);
});
menuitem.cljs$core$IFn$_invoke$arity$variadic = menuitem__delegate;
return menuitem;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.meta = (function() { 
var meta__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__8082_9918 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__8083_9919 = null;var count__8084_9920 = 0;var i__8085_9921 = 0;while(true){
if((i__8085_9921 < count__8084_9920))
{var arg__6562__auto___9922 = cljs.core._nth.call(null,chunk__8083_9919,i__8085_9921);a__6561__auto__.push(arg__6562__auto___9922);
{
var G__9923 = seq__8082_9918;
var G__9924 = chunk__8083_9919;
var G__9925 = count__8084_9920;
var G__9926 = (i__8085_9921 + 1);
seq__8082_9918 = G__9923;
chunk__8083_9919 = G__9924;
count__8084_9920 = G__9925;
i__8085_9921 = G__9926;
continue;
}
} else
{var temp__4092__auto___9927 = cljs.core.seq.call(null,seq__8082_9918);if(temp__4092__auto___9927)
{var seq__8082_9928__$1 = temp__4092__auto___9927;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8082_9928__$1))
{var c__5632__auto___9929 = cljs.core.chunk_first.call(null,seq__8082_9928__$1);{
var G__9930 = cljs.core.chunk_rest.call(null,seq__8082_9928__$1);
var G__9931 = c__5632__auto___9929;
var G__9932 = cljs.core.count.call(null,c__5632__auto___9929);
var G__9933 = 0;
seq__8082_9918 = G__9930;
chunk__8083_9919 = G__9931;
count__8084_9920 = G__9932;
i__8085_9921 = G__9933;
continue;
}
} else
{var arg__6562__auto___9934 = cljs.core.first.call(null,seq__8082_9928__$1);a__6561__auto__.push(arg__6562__auto___9934);
{
var G__9935 = cljs.core.next.call(null,seq__8082_9928__$1);
var G__9936 = null;
var G__9937 = 0;
var G__9938 = 0;
seq__8082_9918 = G__9935;
chunk__8083_9919 = G__9936;
count__8084_9920 = G__9937;
i__8085_9921 = G__9938;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.meta.apply(null,a__6561__auto__);
};
var meta = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return meta__delegate.call(this,args__6560__auto__);};
meta.cljs$lang$maxFixedArity = 0;
meta.cljs$lang$applyTo = (function (arglist__9939){
var args__6560__auto__ = cljs.core.seq(arglist__9939);
return meta__delegate(args__6560__auto__);
});
meta.cljs$core$IFn$_invoke$arity$variadic = meta__delegate;
return meta;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.meter = (function() { 
var meter__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__8090_9940 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__8091_9941 = null;var count__8092_9942 = 0;var i__8093_9943 = 0;while(true){
if((i__8093_9943 < count__8092_9942))
{var arg__6562__auto___9944 = cljs.core._nth.call(null,chunk__8091_9941,i__8093_9943);a__6561__auto__.push(arg__6562__auto___9944);
{
var G__9945 = seq__8090_9940;
var G__9946 = chunk__8091_9941;
var G__9947 = count__8092_9942;
var G__9948 = (i__8093_9943 + 1);
seq__8090_9940 = G__9945;
chunk__8091_9941 = G__9946;
count__8092_9942 = G__9947;
i__8093_9943 = G__9948;
continue;
}
} else
{var temp__4092__auto___9949 = cljs.core.seq.call(null,seq__8090_9940);if(temp__4092__auto___9949)
{var seq__8090_9950__$1 = temp__4092__auto___9949;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8090_9950__$1))
{var c__5632__auto___9951 = cljs.core.chunk_first.call(null,seq__8090_9950__$1);{
var G__9952 = cljs.core.chunk_rest.call(null,seq__8090_9950__$1);
var G__9953 = c__5632__auto___9951;
var G__9954 = cljs.core.count.call(null,c__5632__auto___9951);
var G__9955 = 0;
seq__8090_9940 = G__9952;
chunk__8091_9941 = G__9953;
count__8092_9942 = G__9954;
i__8093_9943 = G__9955;
continue;
}
} else
{var arg__6562__auto___9956 = cljs.core.first.call(null,seq__8090_9950__$1);a__6561__auto__.push(arg__6562__auto___9956);
{
var G__9957 = cljs.core.next.call(null,seq__8090_9950__$1);
var G__9958 = null;
var G__9959 = 0;
var G__9960 = 0;
seq__8090_9940 = G__9957;
chunk__8091_9941 = G__9958;
count__8092_9942 = G__9959;
i__8093_9943 = G__9960;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.meter.apply(null,a__6561__auto__);
};
var meter = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return meter__delegate.call(this,args__6560__auto__);};
meter.cljs$lang$maxFixedArity = 0;
meter.cljs$lang$applyTo = (function (arglist__9961){
var args__6560__auto__ = cljs.core.seq(arglist__9961);
return meter__delegate(args__6560__auto__);
});
meter.cljs$core$IFn$_invoke$arity$variadic = meter__delegate;
return meter;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.nav = (function() { 
var nav__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__8098_9962 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__8099_9963 = null;var count__8100_9964 = 0;var i__8101_9965 = 0;while(true){
if((i__8101_9965 < count__8100_9964))
{var arg__6562__auto___9966 = cljs.core._nth.call(null,chunk__8099_9963,i__8101_9965);a__6561__auto__.push(arg__6562__auto___9966);
{
var G__9967 = seq__8098_9962;
var G__9968 = chunk__8099_9963;
var G__9969 = count__8100_9964;
var G__9970 = (i__8101_9965 + 1);
seq__8098_9962 = G__9967;
chunk__8099_9963 = G__9968;
count__8100_9964 = G__9969;
i__8101_9965 = G__9970;
continue;
}
} else
{var temp__4092__auto___9971 = cljs.core.seq.call(null,seq__8098_9962);if(temp__4092__auto___9971)
{var seq__8098_9972__$1 = temp__4092__auto___9971;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8098_9972__$1))
{var c__5632__auto___9973 = cljs.core.chunk_first.call(null,seq__8098_9972__$1);{
var G__9974 = cljs.core.chunk_rest.call(null,seq__8098_9972__$1);
var G__9975 = c__5632__auto___9973;
var G__9976 = cljs.core.count.call(null,c__5632__auto___9973);
var G__9977 = 0;
seq__8098_9962 = G__9974;
chunk__8099_9963 = G__9975;
count__8100_9964 = G__9976;
i__8101_9965 = G__9977;
continue;
}
} else
{var arg__6562__auto___9978 = cljs.core.first.call(null,seq__8098_9972__$1);a__6561__auto__.push(arg__6562__auto___9978);
{
var G__9979 = cljs.core.next.call(null,seq__8098_9972__$1);
var G__9980 = null;
var G__9981 = 0;
var G__9982 = 0;
seq__8098_9962 = G__9979;
chunk__8099_9963 = G__9980;
count__8100_9964 = G__9981;
i__8101_9965 = G__9982;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.nav.apply(null,a__6561__auto__);
};
var nav = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return nav__delegate.call(this,args__6560__auto__);};
nav.cljs$lang$maxFixedArity = 0;
nav.cljs$lang$applyTo = (function (arglist__9983){
var args__6560__auto__ = cljs.core.seq(arglist__9983);
return nav__delegate(args__6560__auto__);
});
nav.cljs$core$IFn$_invoke$arity$variadic = nav__delegate;
return nav;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.noscript = (function() { 
var noscript__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__8106_9984 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__8107_9985 = null;var count__8108_9986 = 0;var i__8109_9987 = 0;while(true){
if((i__8109_9987 < count__8108_9986))
{var arg__6562__auto___9988 = cljs.core._nth.call(null,chunk__8107_9985,i__8109_9987);a__6561__auto__.push(arg__6562__auto___9988);
{
var G__9989 = seq__8106_9984;
var G__9990 = chunk__8107_9985;
var G__9991 = count__8108_9986;
var G__9992 = (i__8109_9987 + 1);
seq__8106_9984 = G__9989;
chunk__8107_9985 = G__9990;
count__8108_9986 = G__9991;
i__8109_9987 = G__9992;
continue;
}
} else
{var temp__4092__auto___9993 = cljs.core.seq.call(null,seq__8106_9984);if(temp__4092__auto___9993)
{var seq__8106_9994__$1 = temp__4092__auto___9993;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8106_9994__$1))
{var c__5632__auto___9995 = cljs.core.chunk_first.call(null,seq__8106_9994__$1);{
var G__9996 = cljs.core.chunk_rest.call(null,seq__8106_9994__$1);
var G__9997 = c__5632__auto___9995;
var G__9998 = cljs.core.count.call(null,c__5632__auto___9995);
var G__9999 = 0;
seq__8106_9984 = G__9996;
chunk__8107_9985 = G__9997;
count__8108_9986 = G__9998;
i__8109_9987 = G__9999;
continue;
}
} else
{var arg__6562__auto___10000 = cljs.core.first.call(null,seq__8106_9994__$1);a__6561__auto__.push(arg__6562__auto___10000);
{
var G__10001 = cljs.core.next.call(null,seq__8106_9994__$1);
var G__10002 = null;
var G__10003 = 0;
var G__10004 = 0;
seq__8106_9984 = G__10001;
chunk__8107_9985 = G__10002;
count__8108_9986 = G__10003;
i__8109_9987 = G__10004;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.noscript.apply(null,a__6561__auto__);
};
var noscript = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return noscript__delegate.call(this,args__6560__auto__);};
noscript.cljs$lang$maxFixedArity = 0;
noscript.cljs$lang$applyTo = (function (arglist__10005){
var args__6560__auto__ = cljs.core.seq(arglist__10005);
return noscript__delegate(args__6560__auto__);
});
noscript.cljs$core$IFn$_invoke$arity$variadic = noscript__delegate;
return noscript;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.object = (function() { 
var object__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__8114_10006 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__8115_10007 = null;var count__8116_10008 = 0;var i__8117_10009 = 0;while(true){
if((i__8117_10009 < count__8116_10008))
{var arg__6562__auto___10010 = cljs.core._nth.call(null,chunk__8115_10007,i__8117_10009);a__6561__auto__.push(arg__6562__auto___10010);
{
var G__10011 = seq__8114_10006;
var G__10012 = chunk__8115_10007;
var G__10013 = count__8116_10008;
var G__10014 = (i__8117_10009 + 1);
seq__8114_10006 = G__10011;
chunk__8115_10007 = G__10012;
count__8116_10008 = G__10013;
i__8117_10009 = G__10014;
continue;
}
} else
{var temp__4092__auto___10015 = cljs.core.seq.call(null,seq__8114_10006);if(temp__4092__auto___10015)
{var seq__8114_10016__$1 = temp__4092__auto___10015;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8114_10016__$1))
{var c__5632__auto___10017 = cljs.core.chunk_first.call(null,seq__8114_10016__$1);{
var G__10018 = cljs.core.chunk_rest.call(null,seq__8114_10016__$1);
var G__10019 = c__5632__auto___10017;
var G__10020 = cljs.core.count.call(null,c__5632__auto___10017);
var G__10021 = 0;
seq__8114_10006 = G__10018;
chunk__8115_10007 = G__10019;
count__8116_10008 = G__10020;
i__8117_10009 = G__10021;
continue;
}
} else
{var arg__6562__auto___10022 = cljs.core.first.call(null,seq__8114_10016__$1);a__6561__auto__.push(arg__6562__auto___10022);
{
var G__10023 = cljs.core.next.call(null,seq__8114_10016__$1);
var G__10024 = null;
var G__10025 = 0;
var G__10026 = 0;
seq__8114_10006 = G__10023;
chunk__8115_10007 = G__10024;
count__8116_10008 = G__10025;
i__8117_10009 = G__10026;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.object.apply(null,a__6561__auto__);
};
var object = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return object__delegate.call(this,args__6560__auto__);};
object.cljs$lang$maxFixedArity = 0;
object.cljs$lang$applyTo = (function (arglist__10027){
var args__6560__auto__ = cljs.core.seq(arglist__10027);
return object__delegate(args__6560__auto__);
});
object.cljs$core$IFn$_invoke$arity$variadic = object__delegate;
return object;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.ol = (function() { 
var ol__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__8122_10028 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__8123_10029 = null;var count__8124_10030 = 0;var i__8125_10031 = 0;while(true){
if((i__8125_10031 < count__8124_10030))
{var arg__6562__auto___10032 = cljs.core._nth.call(null,chunk__8123_10029,i__8125_10031);a__6561__auto__.push(arg__6562__auto___10032);
{
var G__10033 = seq__8122_10028;
var G__10034 = chunk__8123_10029;
var G__10035 = count__8124_10030;
var G__10036 = (i__8125_10031 + 1);
seq__8122_10028 = G__10033;
chunk__8123_10029 = G__10034;
count__8124_10030 = G__10035;
i__8125_10031 = G__10036;
continue;
}
} else
{var temp__4092__auto___10037 = cljs.core.seq.call(null,seq__8122_10028);if(temp__4092__auto___10037)
{var seq__8122_10038__$1 = temp__4092__auto___10037;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8122_10038__$1))
{var c__5632__auto___10039 = cljs.core.chunk_first.call(null,seq__8122_10038__$1);{
var G__10040 = cljs.core.chunk_rest.call(null,seq__8122_10038__$1);
var G__10041 = c__5632__auto___10039;
var G__10042 = cljs.core.count.call(null,c__5632__auto___10039);
var G__10043 = 0;
seq__8122_10028 = G__10040;
chunk__8123_10029 = G__10041;
count__8124_10030 = G__10042;
i__8125_10031 = G__10043;
continue;
}
} else
{var arg__6562__auto___10044 = cljs.core.first.call(null,seq__8122_10038__$1);a__6561__auto__.push(arg__6562__auto___10044);
{
var G__10045 = cljs.core.next.call(null,seq__8122_10038__$1);
var G__10046 = null;
var G__10047 = 0;
var G__10048 = 0;
seq__8122_10028 = G__10045;
chunk__8123_10029 = G__10046;
count__8124_10030 = G__10047;
i__8125_10031 = G__10048;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.ol.apply(null,a__6561__auto__);
};
var ol = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ol__delegate.call(this,args__6560__auto__);};
ol.cljs$lang$maxFixedArity = 0;
ol.cljs$lang$applyTo = (function (arglist__10049){
var args__6560__auto__ = cljs.core.seq(arglist__10049);
return ol__delegate(args__6560__auto__);
});
ol.cljs$core$IFn$_invoke$arity$variadic = ol__delegate;
return ol;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.optgroup = (function() { 
var optgroup__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__8130_10050 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__8131_10051 = null;var count__8132_10052 = 0;var i__8133_10053 = 0;while(true){
if((i__8133_10053 < count__8132_10052))
{var arg__6562__auto___10054 = cljs.core._nth.call(null,chunk__8131_10051,i__8133_10053);a__6561__auto__.push(arg__6562__auto___10054);
{
var G__10055 = seq__8130_10050;
var G__10056 = chunk__8131_10051;
var G__10057 = count__8132_10052;
var G__10058 = (i__8133_10053 + 1);
seq__8130_10050 = G__10055;
chunk__8131_10051 = G__10056;
count__8132_10052 = G__10057;
i__8133_10053 = G__10058;
continue;
}
} else
{var temp__4092__auto___10059 = cljs.core.seq.call(null,seq__8130_10050);if(temp__4092__auto___10059)
{var seq__8130_10060__$1 = temp__4092__auto___10059;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8130_10060__$1))
{var c__5632__auto___10061 = cljs.core.chunk_first.call(null,seq__8130_10060__$1);{
var G__10062 = cljs.core.chunk_rest.call(null,seq__8130_10060__$1);
var G__10063 = c__5632__auto___10061;
var G__10064 = cljs.core.count.call(null,c__5632__auto___10061);
var G__10065 = 0;
seq__8130_10050 = G__10062;
chunk__8131_10051 = G__10063;
count__8132_10052 = G__10064;
i__8133_10053 = G__10065;
continue;
}
} else
{var arg__6562__auto___10066 = cljs.core.first.call(null,seq__8130_10060__$1);a__6561__auto__.push(arg__6562__auto___10066);
{
var G__10067 = cljs.core.next.call(null,seq__8130_10060__$1);
var G__10068 = null;
var G__10069 = 0;
var G__10070 = 0;
seq__8130_10050 = G__10067;
chunk__8131_10051 = G__10068;
count__8132_10052 = G__10069;
i__8133_10053 = G__10070;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.optgroup.apply(null,a__6561__auto__);
};
var optgroup = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return optgroup__delegate.call(this,args__6560__auto__);};
optgroup.cljs$lang$maxFixedArity = 0;
optgroup.cljs$lang$applyTo = (function (arglist__10071){
var args__6560__auto__ = cljs.core.seq(arglist__10071);
return optgroup__delegate(args__6560__auto__);
});
optgroup.cljs$core$IFn$_invoke$arity$variadic = optgroup__delegate;
return optgroup;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.option = (function() { 
var option__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__8138_10072 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__8139_10073 = null;var count__8140_10074 = 0;var i__8141_10075 = 0;while(true){
if((i__8141_10075 < count__8140_10074))
{var arg__6562__auto___10076 = cljs.core._nth.call(null,chunk__8139_10073,i__8141_10075);a__6561__auto__.push(arg__6562__auto___10076);
{
var G__10077 = seq__8138_10072;
var G__10078 = chunk__8139_10073;
var G__10079 = count__8140_10074;
var G__10080 = (i__8141_10075 + 1);
seq__8138_10072 = G__10077;
chunk__8139_10073 = G__10078;
count__8140_10074 = G__10079;
i__8141_10075 = G__10080;
continue;
}
} else
{var temp__4092__auto___10081 = cljs.core.seq.call(null,seq__8138_10072);if(temp__4092__auto___10081)
{var seq__8138_10082__$1 = temp__4092__auto___10081;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8138_10082__$1))
{var c__5632__auto___10083 = cljs.core.chunk_first.call(null,seq__8138_10082__$1);{
var G__10084 = cljs.core.chunk_rest.call(null,seq__8138_10082__$1);
var G__10085 = c__5632__auto___10083;
var G__10086 = cljs.core.count.call(null,c__5632__auto___10083);
var G__10087 = 0;
seq__8138_10072 = G__10084;
chunk__8139_10073 = G__10085;
count__8140_10074 = G__10086;
i__8141_10075 = G__10087;
continue;
}
} else
{var arg__6562__auto___10088 = cljs.core.first.call(null,seq__8138_10082__$1);a__6561__auto__.push(arg__6562__auto___10088);
{
var G__10089 = cljs.core.next.call(null,seq__8138_10082__$1);
var G__10090 = null;
var G__10091 = 0;
var G__10092 = 0;
seq__8138_10072 = G__10089;
chunk__8139_10073 = G__10090;
count__8140_10074 = G__10091;
i__8141_10075 = G__10092;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.option.apply(null,a__6561__auto__);
};
var option = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return option__delegate.call(this,args__6560__auto__);};
option.cljs$lang$maxFixedArity = 0;
option.cljs$lang$applyTo = (function (arglist__10093){
var args__6560__auto__ = cljs.core.seq(arglist__10093);
return option__delegate(args__6560__auto__);
});
option.cljs$core$IFn$_invoke$arity$variadic = option__delegate;
return option;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.output = (function() { 
var output__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__8146_10094 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__8147_10095 = null;var count__8148_10096 = 0;var i__8149_10097 = 0;while(true){
if((i__8149_10097 < count__8148_10096))
{var arg__6562__auto___10098 = cljs.core._nth.call(null,chunk__8147_10095,i__8149_10097);a__6561__auto__.push(arg__6562__auto___10098);
{
var G__10099 = seq__8146_10094;
var G__10100 = chunk__8147_10095;
var G__10101 = count__8148_10096;
var G__10102 = (i__8149_10097 + 1);
seq__8146_10094 = G__10099;
chunk__8147_10095 = G__10100;
count__8148_10096 = G__10101;
i__8149_10097 = G__10102;
continue;
}
} else
{var temp__4092__auto___10103 = cljs.core.seq.call(null,seq__8146_10094);if(temp__4092__auto___10103)
{var seq__8146_10104__$1 = temp__4092__auto___10103;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8146_10104__$1))
{var c__5632__auto___10105 = cljs.core.chunk_first.call(null,seq__8146_10104__$1);{
var G__10106 = cljs.core.chunk_rest.call(null,seq__8146_10104__$1);
var G__10107 = c__5632__auto___10105;
var G__10108 = cljs.core.count.call(null,c__5632__auto___10105);
var G__10109 = 0;
seq__8146_10094 = G__10106;
chunk__8147_10095 = G__10107;
count__8148_10096 = G__10108;
i__8149_10097 = G__10109;
continue;
}
} else
{var arg__6562__auto___10110 = cljs.core.first.call(null,seq__8146_10104__$1);a__6561__auto__.push(arg__6562__auto___10110);
{
var G__10111 = cljs.core.next.call(null,seq__8146_10104__$1);
var G__10112 = null;
var G__10113 = 0;
var G__10114 = 0;
seq__8146_10094 = G__10111;
chunk__8147_10095 = G__10112;
count__8148_10096 = G__10113;
i__8149_10097 = G__10114;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.output.apply(null,a__6561__auto__);
};
var output = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return output__delegate.call(this,args__6560__auto__);};
output.cljs$lang$maxFixedArity = 0;
output.cljs$lang$applyTo = (function (arglist__10115){
var args__6560__auto__ = cljs.core.seq(arglist__10115);
return output__delegate(args__6560__auto__);
});
output.cljs$core$IFn$_invoke$arity$variadic = output__delegate;
return output;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.p = (function() { 
var p__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__8154_10116 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__8155_10117 = null;var count__8156_10118 = 0;var i__8157_10119 = 0;while(true){
if((i__8157_10119 < count__8156_10118))
{var arg__6562__auto___10120 = cljs.core._nth.call(null,chunk__8155_10117,i__8157_10119);a__6561__auto__.push(arg__6562__auto___10120);
{
var G__10121 = seq__8154_10116;
var G__10122 = chunk__8155_10117;
var G__10123 = count__8156_10118;
var G__10124 = (i__8157_10119 + 1);
seq__8154_10116 = G__10121;
chunk__8155_10117 = G__10122;
count__8156_10118 = G__10123;
i__8157_10119 = G__10124;
continue;
}
} else
{var temp__4092__auto___10125 = cljs.core.seq.call(null,seq__8154_10116);if(temp__4092__auto___10125)
{var seq__8154_10126__$1 = temp__4092__auto___10125;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8154_10126__$1))
{var c__5632__auto___10127 = cljs.core.chunk_first.call(null,seq__8154_10126__$1);{
var G__10128 = cljs.core.chunk_rest.call(null,seq__8154_10126__$1);
var G__10129 = c__5632__auto___10127;
var G__10130 = cljs.core.count.call(null,c__5632__auto___10127);
var G__10131 = 0;
seq__8154_10116 = G__10128;
chunk__8155_10117 = G__10129;
count__8156_10118 = G__10130;
i__8157_10119 = G__10131;
continue;
}
} else
{var arg__6562__auto___10132 = cljs.core.first.call(null,seq__8154_10126__$1);a__6561__auto__.push(arg__6562__auto___10132);
{
var G__10133 = cljs.core.next.call(null,seq__8154_10126__$1);
var G__10134 = null;
var G__10135 = 0;
var G__10136 = 0;
seq__8154_10116 = G__10133;
chunk__8155_10117 = G__10134;
count__8156_10118 = G__10135;
i__8157_10119 = G__10136;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.p.apply(null,a__6561__auto__);
};
var p = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return p__delegate.call(this,args__6560__auto__);};
p.cljs$lang$maxFixedArity = 0;
p.cljs$lang$applyTo = (function (arglist__10137){
var args__6560__auto__ = cljs.core.seq(arglist__10137);
return p__delegate(args__6560__auto__);
});
p.cljs$core$IFn$_invoke$arity$variadic = p__delegate;
return p;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.param = (function() { 
var param__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__8162_10138 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__8163_10139 = null;var count__8164_10140 = 0;var i__8165_10141 = 0;while(true){
if((i__8165_10141 < count__8164_10140))
{var arg__6562__auto___10142 = cljs.core._nth.call(null,chunk__8163_10139,i__8165_10141);a__6561__auto__.push(arg__6562__auto___10142);
{
var G__10143 = seq__8162_10138;
var G__10144 = chunk__8163_10139;
var G__10145 = count__8164_10140;
var G__10146 = (i__8165_10141 + 1);
seq__8162_10138 = G__10143;
chunk__8163_10139 = G__10144;
count__8164_10140 = G__10145;
i__8165_10141 = G__10146;
continue;
}
} else
{var temp__4092__auto___10147 = cljs.core.seq.call(null,seq__8162_10138);if(temp__4092__auto___10147)
{var seq__8162_10148__$1 = temp__4092__auto___10147;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8162_10148__$1))
{var c__5632__auto___10149 = cljs.core.chunk_first.call(null,seq__8162_10148__$1);{
var G__10150 = cljs.core.chunk_rest.call(null,seq__8162_10148__$1);
var G__10151 = c__5632__auto___10149;
var G__10152 = cljs.core.count.call(null,c__5632__auto___10149);
var G__10153 = 0;
seq__8162_10138 = G__10150;
chunk__8163_10139 = G__10151;
count__8164_10140 = G__10152;
i__8165_10141 = G__10153;
continue;
}
} else
{var arg__6562__auto___10154 = cljs.core.first.call(null,seq__8162_10148__$1);a__6561__auto__.push(arg__6562__auto___10154);
{
var G__10155 = cljs.core.next.call(null,seq__8162_10148__$1);
var G__10156 = null;
var G__10157 = 0;
var G__10158 = 0;
seq__8162_10138 = G__10155;
chunk__8163_10139 = G__10156;
count__8164_10140 = G__10157;
i__8165_10141 = G__10158;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.param.apply(null,a__6561__auto__);
};
var param = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return param__delegate.call(this,args__6560__auto__);};
param.cljs$lang$maxFixedArity = 0;
param.cljs$lang$applyTo = (function (arglist__10159){
var args__6560__auto__ = cljs.core.seq(arglist__10159);
return param__delegate(args__6560__auto__);
});
param.cljs$core$IFn$_invoke$arity$variadic = param__delegate;
return param;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.pre = (function() { 
var pre__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__8170_10160 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__8171_10161 = null;var count__8172_10162 = 0;var i__8173_10163 = 0;while(true){
if((i__8173_10163 < count__8172_10162))
{var arg__6562__auto___10164 = cljs.core._nth.call(null,chunk__8171_10161,i__8173_10163);a__6561__auto__.push(arg__6562__auto___10164);
{
var G__10165 = seq__8170_10160;
var G__10166 = chunk__8171_10161;
var G__10167 = count__8172_10162;
var G__10168 = (i__8173_10163 + 1);
seq__8170_10160 = G__10165;
chunk__8171_10161 = G__10166;
count__8172_10162 = G__10167;
i__8173_10163 = G__10168;
continue;
}
} else
{var temp__4092__auto___10169 = cljs.core.seq.call(null,seq__8170_10160);if(temp__4092__auto___10169)
{var seq__8170_10170__$1 = temp__4092__auto___10169;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8170_10170__$1))
{var c__5632__auto___10171 = cljs.core.chunk_first.call(null,seq__8170_10170__$1);{
var G__10172 = cljs.core.chunk_rest.call(null,seq__8170_10170__$1);
var G__10173 = c__5632__auto___10171;
var G__10174 = cljs.core.count.call(null,c__5632__auto___10171);
var G__10175 = 0;
seq__8170_10160 = G__10172;
chunk__8171_10161 = G__10173;
count__8172_10162 = G__10174;
i__8173_10163 = G__10175;
continue;
}
} else
{var arg__6562__auto___10176 = cljs.core.first.call(null,seq__8170_10170__$1);a__6561__auto__.push(arg__6562__auto___10176);
{
var G__10177 = cljs.core.next.call(null,seq__8170_10170__$1);
var G__10178 = null;
var G__10179 = 0;
var G__10180 = 0;
seq__8170_10160 = G__10177;
chunk__8171_10161 = G__10178;
count__8172_10162 = G__10179;
i__8173_10163 = G__10180;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.pre.apply(null,a__6561__auto__);
};
var pre = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return pre__delegate.call(this,args__6560__auto__);};
pre.cljs$lang$maxFixedArity = 0;
pre.cljs$lang$applyTo = (function (arglist__10181){
var args__6560__auto__ = cljs.core.seq(arglist__10181);
return pre__delegate(args__6560__auto__);
});
pre.cljs$core$IFn$_invoke$arity$variadic = pre__delegate;
return pre;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.progress = (function() { 
var progress__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__8178_10182 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__8179_10183 = null;var count__8180_10184 = 0;var i__8181_10185 = 0;while(true){
if((i__8181_10185 < count__8180_10184))
{var arg__6562__auto___10186 = cljs.core._nth.call(null,chunk__8179_10183,i__8181_10185);a__6561__auto__.push(arg__6562__auto___10186);
{
var G__10187 = seq__8178_10182;
var G__10188 = chunk__8179_10183;
var G__10189 = count__8180_10184;
var G__10190 = (i__8181_10185 + 1);
seq__8178_10182 = G__10187;
chunk__8179_10183 = G__10188;
count__8180_10184 = G__10189;
i__8181_10185 = G__10190;
continue;
}
} else
{var temp__4092__auto___10191 = cljs.core.seq.call(null,seq__8178_10182);if(temp__4092__auto___10191)
{var seq__8178_10192__$1 = temp__4092__auto___10191;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8178_10192__$1))
{var c__5632__auto___10193 = cljs.core.chunk_first.call(null,seq__8178_10192__$1);{
var G__10194 = cljs.core.chunk_rest.call(null,seq__8178_10192__$1);
var G__10195 = c__5632__auto___10193;
var G__10196 = cljs.core.count.call(null,c__5632__auto___10193);
var G__10197 = 0;
seq__8178_10182 = G__10194;
chunk__8179_10183 = G__10195;
count__8180_10184 = G__10196;
i__8181_10185 = G__10197;
continue;
}
} else
{var arg__6562__auto___10198 = cljs.core.first.call(null,seq__8178_10192__$1);a__6561__auto__.push(arg__6562__auto___10198);
{
var G__10199 = cljs.core.next.call(null,seq__8178_10192__$1);
var G__10200 = null;
var G__10201 = 0;
var G__10202 = 0;
seq__8178_10182 = G__10199;
chunk__8179_10183 = G__10200;
count__8180_10184 = G__10201;
i__8181_10185 = G__10202;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.progress.apply(null,a__6561__auto__);
};
var progress = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return progress__delegate.call(this,args__6560__auto__);};
progress.cljs$lang$maxFixedArity = 0;
progress.cljs$lang$applyTo = (function (arglist__10203){
var args__6560__auto__ = cljs.core.seq(arglist__10203);
return progress__delegate(args__6560__auto__);
});
progress.cljs$core$IFn$_invoke$arity$variadic = progress__delegate;
return progress;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.q = (function() { 
var q__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__8186_10204 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__8187_10205 = null;var count__8188_10206 = 0;var i__8189_10207 = 0;while(true){
if((i__8189_10207 < count__8188_10206))
{var arg__6562__auto___10208 = cljs.core._nth.call(null,chunk__8187_10205,i__8189_10207);a__6561__auto__.push(arg__6562__auto___10208);
{
var G__10209 = seq__8186_10204;
var G__10210 = chunk__8187_10205;
var G__10211 = count__8188_10206;
var G__10212 = (i__8189_10207 + 1);
seq__8186_10204 = G__10209;
chunk__8187_10205 = G__10210;
count__8188_10206 = G__10211;
i__8189_10207 = G__10212;
continue;
}
} else
{var temp__4092__auto___10213 = cljs.core.seq.call(null,seq__8186_10204);if(temp__4092__auto___10213)
{var seq__8186_10214__$1 = temp__4092__auto___10213;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8186_10214__$1))
{var c__5632__auto___10215 = cljs.core.chunk_first.call(null,seq__8186_10214__$1);{
var G__10216 = cljs.core.chunk_rest.call(null,seq__8186_10214__$1);
var G__10217 = c__5632__auto___10215;
var G__10218 = cljs.core.count.call(null,c__5632__auto___10215);
var G__10219 = 0;
seq__8186_10204 = G__10216;
chunk__8187_10205 = G__10217;
count__8188_10206 = G__10218;
i__8189_10207 = G__10219;
continue;
}
} else
{var arg__6562__auto___10220 = cljs.core.first.call(null,seq__8186_10214__$1);a__6561__auto__.push(arg__6562__auto___10220);
{
var G__10221 = cljs.core.next.call(null,seq__8186_10214__$1);
var G__10222 = null;
var G__10223 = 0;
var G__10224 = 0;
seq__8186_10204 = G__10221;
chunk__8187_10205 = G__10222;
count__8188_10206 = G__10223;
i__8189_10207 = G__10224;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.q.apply(null,a__6561__auto__);
};
var q = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return q__delegate.call(this,args__6560__auto__);};
q.cljs$lang$maxFixedArity = 0;
q.cljs$lang$applyTo = (function (arglist__10225){
var args__6560__auto__ = cljs.core.seq(arglist__10225);
return q__delegate(args__6560__auto__);
});
q.cljs$core$IFn$_invoke$arity$variadic = q__delegate;
return q;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.rp = (function() { 
var rp__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__8194_10226 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__8195_10227 = null;var count__8196_10228 = 0;var i__8197_10229 = 0;while(true){
if((i__8197_10229 < count__8196_10228))
{var arg__6562__auto___10230 = cljs.core._nth.call(null,chunk__8195_10227,i__8197_10229);a__6561__auto__.push(arg__6562__auto___10230);
{
var G__10231 = seq__8194_10226;
var G__10232 = chunk__8195_10227;
var G__10233 = count__8196_10228;
var G__10234 = (i__8197_10229 + 1);
seq__8194_10226 = G__10231;
chunk__8195_10227 = G__10232;
count__8196_10228 = G__10233;
i__8197_10229 = G__10234;
continue;
}
} else
{var temp__4092__auto___10235 = cljs.core.seq.call(null,seq__8194_10226);if(temp__4092__auto___10235)
{var seq__8194_10236__$1 = temp__4092__auto___10235;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8194_10236__$1))
{var c__5632__auto___10237 = cljs.core.chunk_first.call(null,seq__8194_10236__$1);{
var G__10238 = cljs.core.chunk_rest.call(null,seq__8194_10236__$1);
var G__10239 = c__5632__auto___10237;
var G__10240 = cljs.core.count.call(null,c__5632__auto___10237);
var G__10241 = 0;
seq__8194_10226 = G__10238;
chunk__8195_10227 = G__10239;
count__8196_10228 = G__10240;
i__8197_10229 = G__10241;
continue;
}
} else
{var arg__6562__auto___10242 = cljs.core.first.call(null,seq__8194_10236__$1);a__6561__auto__.push(arg__6562__auto___10242);
{
var G__10243 = cljs.core.next.call(null,seq__8194_10236__$1);
var G__10244 = null;
var G__10245 = 0;
var G__10246 = 0;
seq__8194_10226 = G__10243;
chunk__8195_10227 = G__10244;
count__8196_10228 = G__10245;
i__8197_10229 = G__10246;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.rp.apply(null,a__6561__auto__);
};
var rp = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return rp__delegate.call(this,args__6560__auto__);};
rp.cljs$lang$maxFixedArity = 0;
rp.cljs$lang$applyTo = (function (arglist__10247){
var args__6560__auto__ = cljs.core.seq(arglist__10247);
return rp__delegate(args__6560__auto__);
});
rp.cljs$core$IFn$_invoke$arity$variadic = rp__delegate;
return rp;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.rt = (function() { 
var rt__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__8202_10248 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__8203_10249 = null;var count__8204_10250 = 0;var i__8205_10251 = 0;while(true){
if((i__8205_10251 < count__8204_10250))
{var arg__6562__auto___10252 = cljs.core._nth.call(null,chunk__8203_10249,i__8205_10251);a__6561__auto__.push(arg__6562__auto___10252);
{
var G__10253 = seq__8202_10248;
var G__10254 = chunk__8203_10249;
var G__10255 = count__8204_10250;
var G__10256 = (i__8205_10251 + 1);
seq__8202_10248 = G__10253;
chunk__8203_10249 = G__10254;
count__8204_10250 = G__10255;
i__8205_10251 = G__10256;
continue;
}
} else
{var temp__4092__auto___10257 = cljs.core.seq.call(null,seq__8202_10248);if(temp__4092__auto___10257)
{var seq__8202_10258__$1 = temp__4092__auto___10257;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8202_10258__$1))
{var c__5632__auto___10259 = cljs.core.chunk_first.call(null,seq__8202_10258__$1);{
var G__10260 = cljs.core.chunk_rest.call(null,seq__8202_10258__$1);
var G__10261 = c__5632__auto___10259;
var G__10262 = cljs.core.count.call(null,c__5632__auto___10259);
var G__10263 = 0;
seq__8202_10248 = G__10260;
chunk__8203_10249 = G__10261;
count__8204_10250 = G__10262;
i__8205_10251 = G__10263;
continue;
}
} else
{var arg__6562__auto___10264 = cljs.core.first.call(null,seq__8202_10258__$1);a__6561__auto__.push(arg__6562__auto___10264);
{
var G__10265 = cljs.core.next.call(null,seq__8202_10258__$1);
var G__10266 = null;
var G__10267 = 0;
var G__10268 = 0;
seq__8202_10248 = G__10265;
chunk__8203_10249 = G__10266;
count__8204_10250 = G__10267;
i__8205_10251 = G__10268;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.rt.apply(null,a__6561__auto__);
};
var rt = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return rt__delegate.call(this,args__6560__auto__);};
rt.cljs$lang$maxFixedArity = 0;
rt.cljs$lang$applyTo = (function (arglist__10269){
var args__6560__auto__ = cljs.core.seq(arglist__10269);
return rt__delegate(args__6560__auto__);
});
rt.cljs$core$IFn$_invoke$arity$variadic = rt__delegate;
return rt;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.ruby = (function() { 
var ruby__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__8210_10270 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__8211_10271 = null;var count__8212_10272 = 0;var i__8213_10273 = 0;while(true){
if((i__8213_10273 < count__8212_10272))
{var arg__6562__auto___10274 = cljs.core._nth.call(null,chunk__8211_10271,i__8213_10273);a__6561__auto__.push(arg__6562__auto___10274);
{
var G__10275 = seq__8210_10270;
var G__10276 = chunk__8211_10271;
var G__10277 = count__8212_10272;
var G__10278 = (i__8213_10273 + 1);
seq__8210_10270 = G__10275;
chunk__8211_10271 = G__10276;
count__8212_10272 = G__10277;
i__8213_10273 = G__10278;
continue;
}
} else
{var temp__4092__auto___10279 = cljs.core.seq.call(null,seq__8210_10270);if(temp__4092__auto___10279)
{var seq__8210_10280__$1 = temp__4092__auto___10279;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8210_10280__$1))
{var c__5632__auto___10281 = cljs.core.chunk_first.call(null,seq__8210_10280__$1);{
var G__10282 = cljs.core.chunk_rest.call(null,seq__8210_10280__$1);
var G__10283 = c__5632__auto___10281;
var G__10284 = cljs.core.count.call(null,c__5632__auto___10281);
var G__10285 = 0;
seq__8210_10270 = G__10282;
chunk__8211_10271 = G__10283;
count__8212_10272 = G__10284;
i__8213_10273 = G__10285;
continue;
}
} else
{var arg__6562__auto___10286 = cljs.core.first.call(null,seq__8210_10280__$1);a__6561__auto__.push(arg__6562__auto___10286);
{
var G__10287 = cljs.core.next.call(null,seq__8210_10280__$1);
var G__10288 = null;
var G__10289 = 0;
var G__10290 = 0;
seq__8210_10270 = G__10287;
chunk__8211_10271 = G__10288;
count__8212_10272 = G__10289;
i__8213_10273 = G__10290;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.ruby.apply(null,a__6561__auto__);
};
var ruby = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ruby__delegate.call(this,args__6560__auto__);};
ruby.cljs$lang$maxFixedArity = 0;
ruby.cljs$lang$applyTo = (function (arglist__10291){
var args__6560__auto__ = cljs.core.seq(arglist__10291);
return ruby__delegate(args__6560__auto__);
});
ruby.cljs$core$IFn$_invoke$arity$variadic = ruby__delegate;
return ruby;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.s = (function() { 
var s__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__8218_10292 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__8219_10293 = null;var count__8220_10294 = 0;var i__8221_10295 = 0;while(true){
if((i__8221_10295 < count__8220_10294))
{var arg__6562__auto___10296 = cljs.core._nth.call(null,chunk__8219_10293,i__8221_10295);a__6561__auto__.push(arg__6562__auto___10296);
{
var G__10297 = seq__8218_10292;
var G__10298 = chunk__8219_10293;
var G__10299 = count__8220_10294;
var G__10300 = (i__8221_10295 + 1);
seq__8218_10292 = G__10297;
chunk__8219_10293 = G__10298;
count__8220_10294 = G__10299;
i__8221_10295 = G__10300;
continue;
}
} else
{var temp__4092__auto___10301 = cljs.core.seq.call(null,seq__8218_10292);if(temp__4092__auto___10301)
{var seq__8218_10302__$1 = temp__4092__auto___10301;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8218_10302__$1))
{var c__5632__auto___10303 = cljs.core.chunk_first.call(null,seq__8218_10302__$1);{
var G__10304 = cljs.core.chunk_rest.call(null,seq__8218_10302__$1);
var G__10305 = c__5632__auto___10303;
var G__10306 = cljs.core.count.call(null,c__5632__auto___10303);
var G__10307 = 0;
seq__8218_10292 = G__10304;
chunk__8219_10293 = G__10305;
count__8220_10294 = G__10306;
i__8221_10295 = G__10307;
continue;
}
} else
{var arg__6562__auto___10308 = cljs.core.first.call(null,seq__8218_10302__$1);a__6561__auto__.push(arg__6562__auto___10308);
{
var G__10309 = cljs.core.next.call(null,seq__8218_10302__$1);
var G__10310 = null;
var G__10311 = 0;
var G__10312 = 0;
seq__8218_10292 = G__10309;
chunk__8219_10293 = G__10310;
count__8220_10294 = G__10311;
i__8221_10295 = G__10312;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.s.apply(null,a__6561__auto__);
};
var s = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return s__delegate.call(this,args__6560__auto__);};
s.cljs$lang$maxFixedArity = 0;
s.cljs$lang$applyTo = (function (arglist__10313){
var args__6560__auto__ = cljs.core.seq(arglist__10313);
return s__delegate(args__6560__auto__);
});
s.cljs$core$IFn$_invoke$arity$variadic = s__delegate;
return s;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.samp = (function() { 
var samp__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__8226_10314 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__8227_10315 = null;var count__8228_10316 = 0;var i__8229_10317 = 0;while(true){
if((i__8229_10317 < count__8228_10316))
{var arg__6562__auto___10318 = cljs.core._nth.call(null,chunk__8227_10315,i__8229_10317);a__6561__auto__.push(arg__6562__auto___10318);
{
var G__10319 = seq__8226_10314;
var G__10320 = chunk__8227_10315;
var G__10321 = count__8228_10316;
var G__10322 = (i__8229_10317 + 1);
seq__8226_10314 = G__10319;
chunk__8227_10315 = G__10320;
count__8228_10316 = G__10321;
i__8229_10317 = G__10322;
continue;
}
} else
{var temp__4092__auto___10323 = cljs.core.seq.call(null,seq__8226_10314);if(temp__4092__auto___10323)
{var seq__8226_10324__$1 = temp__4092__auto___10323;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8226_10324__$1))
{var c__5632__auto___10325 = cljs.core.chunk_first.call(null,seq__8226_10324__$1);{
var G__10326 = cljs.core.chunk_rest.call(null,seq__8226_10324__$1);
var G__10327 = c__5632__auto___10325;
var G__10328 = cljs.core.count.call(null,c__5632__auto___10325);
var G__10329 = 0;
seq__8226_10314 = G__10326;
chunk__8227_10315 = G__10327;
count__8228_10316 = G__10328;
i__8229_10317 = G__10329;
continue;
}
} else
{var arg__6562__auto___10330 = cljs.core.first.call(null,seq__8226_10324__$1);a__6561__auto__.push(arg__6562__auto___10330);
{
var G__10331 = cljs.core.next.call(null,seq__8226_10324__$1);
var G__10332 = null;
var G__10333 = 0;
var G__10334 = 0;
seq__8226_10314 = G__10331;
chunk__8227_10315 = G__10332;
count__8228_10316 = G__10333;
i__8229_10317 = G__10334;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.samp.apply(null,a__6561__auto__);
};
var samp = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return samp__delegate.call(this,args__6560__auto__);};
samp.cljs$lang$maxFixedArity = 0;
samp.cljs$lang$applyTo = (function (arglist__10335){
var args__6560__auto__ = cljs.core.seq(arglist__10335);
return samp__delegate(args__6560__auto__);
});
samp.cljs$core$IFn$_invoke$arity$variadic = samp__delegate;
return samp;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.script = (function() { 
var script__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__8234_10336 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__8235_10337 = null;var count__8236_10338 = 0;var i__8237_10339 = 0;while(true){
if((i__8237_10339 < count__8236_10338))
{var arg__6562__auto___10340 = cljs.core._nth.call(null,chunk__8235_10337,i__8237_10339);a__6561__auto__.push(arg__6562__auto___10340);
{
var G__10341 = seq__8234_10336;
var G__10342 = chunk__8235_10337;
var G__10343 = count__8236_10338;
var G__10344 = (i__8237_10339 + 1);
seq__8234_10336 = G__10341;
chunk__8235_10337 = G__10342;
count__8236_10338 = G__10343;
i__8237_10339 = G__10344;
continue;
}
} else
{var temp__4092__auto___10345 = cljs.core.seq.call(null,seq__8234_10336);if(temp__4092__auto___10345)
{var seq__8234_10346__$1 = temp__4092__auto___10345;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8234_10346__$1))
{var c__5632__auto___10347 = cljs.core.chunk_first.call(null,seq__8234_10346__$1);{
var G__10348 = cljs.core.chunk_rest.call(null,seq__8234_10346__$1);
var G__10349 = c__5632__auto___10347;
var G__10350 = cljs.core.count.call(null,c__5632__auto___10347);
var G__10351 = 0;
seq__8234_10336 = G__10348;
chunk__8235_10337 = G__10349;
count__8236_10338 = G__10350;
i__8237_10339 = G__10351;
continue;
}
} else
{var arg__6562__auto___10352 = cljs.core.first.call(null,seq__8234_10346__$1);a__6561__auto__.push(arg__6562__auto___10352);
{
var G__10353 = cljs.core.next.call(null,seq__8234_10346__$1);
var G__10354 = null;
var G__10355 = 0;
var G__10356 = 0;
seq__8234_10336 = G__10353;
chunk__8235_10337 = G__10354;
count__8236_10338 = G__10355;
i__8237_10339 = G__10356;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.script.apply(null,a__6561__auto__);
};
var script = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return script__delegate.call(this,args__6560__auto__);};
script.cljs$lang$maxFixedArity = 0;
script.cljs$lang$applyTo = (function (arglist__10357){
var args__6560__auto__ = cljs.core.seq(arglist__10357);
return script__delegate(args__6560__auto__);
});
script.cljs$core$IFn$_invoke$arity$variadic = script__delegate;
return script;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.section = (function() { 
var section__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__8242_10358 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__8243_10359 = null;var count__8244_10360 = 0;var i__8245_10361 = 0;while(true){
if((i__8245_10361 < count__8244_10360))
{var arg__6562__auto___10362 = cljs.core._nth.call(null,chunk__8243_10359,i__8245_10361);a__6561__auto__.push(arg__6562__auto___10362);
{
var G__10363 = seq__8242_10358;
var G__10364 = chunk__8243_10359;
var G__10365 = count__8244_10360;
var G__10366 = (i__8245_10361 + 1);
seq__8242_10358 = G__10363;
chunk__8243_10359 = G__10364;
count__8244_10360 = G__10365;
i__8245_10361 = G__10366;
continue;
}
} else
{var temp__4092__auto___10367 = cljs.core.seq.call(null,seq__8242_10358);if(temp__4092__auto___10367)
{var seq__8242_10368__$1 = temp__4092__auto___10367;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8242_10368__$1))
{var c__5632__auto___10369 = cljs.core.chunk_first.call(null,seq__8242_10368__$1);{
var G__10370 = cljs.core.chunk_rest.call(null,seq__8242_10368__$1);
var G__10371 = c__5632__auto___10369;
var G__10372 = cljs.core.count.call(null,c__5632__auto___10369);
var G__10373 = 0;
seq__8242_10358 = G__10370;
chunk__8243_10359 = G__10371;
count__8244_10360 = G__10372;
i__8245_10361 = G__10373;
continue;
}
} else
{var arg__6562__auto___10374 = cljs.core.first.call(null,seq__8242_10368__$1);a__6561__auto__.push(arg__6562__auto___10374);
{
var G__10375 = cljs.core.next.call(null,seq__8242_10368__$1);
var G__10376 = null;
var G__10377 = 0;
var G__10378 = 0;
seq__8242_10358 = G__10375;
chunk__8243_10359 = G__10376;
count__8244_10360 = G__10377;
i__8245_10361 = G__10378;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.section.apply(null,a__6561__auto__);
};
var section = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return section__delegate.call(this,args__6560__auto__);};
section.cljs$lang$maxFixedArity = 0;
section.cljs$lang$applyTo = (function (arglist__10379){
var args__6560__auto__ = cljs.core.seq(arglist__10379);
return section__delegate(args__6560__auto__);
});
section.cljs$core$IFn$_invoke$arity$variadic = section__delegate;
return section;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.select = (function() { 
var select__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__8250_10380 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__8251_10381 = null;var count__8252_10382 = 0;var i__8253_10383 = 0;while(true){
if((i__8253_10383 < count__8252_10382))
{var arg__6562__auto___10384 = cljs.core._nth.call(null,chunk__8251_10381,i__8253_10383);a__6561__auto__.push(arg__6562__auto___10384);
{
var G__10385 = seq__8250_10380;
var G__10386 = chunk__8251_10381;
var G__10387 = count__8252_10382;
var G__10388 = (i__8253_10383 + 1);
seq__8250_10380 = G__10385;
chunk__8251_10381 = G__10386;
count__8252_10382 = G__10387;
i__8253_10383 = G__10388;
continue;
}
} else
{var temp__4092__auto___10389 = cljs.core.seq.call(null,seq__8250_10380);if(temp__4092__auto___10389)
{var seq__8250_10390__$1 = temp__4092__auto___10389;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8250_10390__$1))
{var c__5632__auto___10391 = cljs.core.chunk_first.call(null,seq__8250_10390__$1);{
var G__10392 = cljs.core.chunk_rest.call(null,seq__8250_10390__$1);
var G__10393 = c__5632__auto___10391;
var G__10394 = cljs.core.count.call(null,c__5632__auto___10391);
var G__10395 = 0;
seq__8250_10380 = G__10392;
chunk__8251_10381 = G__10393;
count__8252_10382 = G__10394;
i__8253_10383 = G__10395;
continue;
}
} else
{var arg__6562__auto___10396 = cljs.core.first.call(null,seq__8250_10390__$1);a__6561__auto__.push(arg__6562__auto___10396);
{
var G__10397 = cljs.core.next.call(null,seq__8250_10390__$1);
var G__10398 = null;
var G__10399 = 0;
var G__10400 = 0;
seq__8250_10380 = G__10397;
chunk__8251_10381 = G__10398;
count__8252_10382 = G__10399;
i__8253_10383 = G__10400;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.select.apply(null,a__6561__auto__);
};
var select = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return select__delegate.call(this,args__6560__auto__);};
select.cljs$lang$maxFixedArity = 0;
select.cljs$lang$applyTo = (function (arglist__10401){
var args__6560__auto__ = cljs.core.seq(arglist__10401);
return select__delegate(args__6560__auto__);
});
select.cljs$core$IFn$_invoke$arity$variadic = select__delegate;
return select;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.small = (function() { 
var small__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__8258_10402 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__8259_10403 = null;var count__8260_10404 = 0;var i__8261_10405 = 0;while(true){
if((i__8261_10405 < count__8260_10404))
{var arg__6562__auto___10406 = cljs.core._nth.call(null,chunk__8259_10403,i__8261_10405);a__6561__auto__.push(arg__6562__auto___10406);
{
var G__10407 = seq__8258_10402;
var G__10408 = chunk__8259_10403;
var G__10409 = count__8260_10404;
var G__10410 = (i__8261_10405 + 1);
seq__8258_10402 = G__10407;
chunk__8259_10403 = G__10408;
count__8260_10404 = G__10409;
i__8261_10405 = G__10410;
continue;
}
} else
{var temp__4092__auto___10411 = cljs.core.seq.call(null,seq__8258_10402);if(temp__4092__auto___10411)
{var seq__8258_10412__$1 = temp__4092__auto___10411;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8258_10412__$1))
{var c__5632__auto___10413 = cljs.core.chunk_first.call(null,seq__8258_10412__$1);{
var G__10414 = cljs.core.chunk_rest.call(null,seq__8258_10412__$1);
var G__10415 = c__5632__auto___10413;
var G__10416 = cljs.core.count.call(null,c__5632__auto___10413);
var G__10417 = 0;
seq__8258_10402 = G__10414;
chunk__8259_10403 = G__10415;
count__8260_10404 = G__10416;
i__8261_10405 = G__10417;
continue;
}
} else
{var arg__6562__auto___10418 = cljs.core.first.call(null,seq__8258_10412__$1);a__6561__auto__.push(arg__6562__auto___10418);
{
var G__10419 = cljs.core.next.call(null,seq__8258_10412__$1);
var G__10420 = null;
var G__10421 = 0;
var G__10422 = 0;
seq__8258_10402 = G__10419;
chunk__8259_10403 = G__10420;
count__8260_10404 = G__10421;
i__8261_10405 = G__10422;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.small.apply(null,a__6561__auto__);
};
var small = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return small__delegate.call(this,args__6560__auto__);};
small.cljs$lang$maxFixedArity = 0;
small.cljs$lang$applyTo = (function (arglist__10423){
var args__6560__auto__ = cljs.core.seq(arglist__10423);
return small__delegate(args__6560__auto__);
});
small.cljs$core$IFn$_invoke$arity$variadic = small__delegate;
return small;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.source = (function() { 
var source__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__8266_10424 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__8267_10425 = null;var count__8268_10426 = 0;var i__8269_10427 = 0;while(true){
if((i__8269_10427 < count__8268_10426))
{var arg__6562__auto___10428 = cljs.core._nth.call(null,chunk__8267_10425,i__8269_10427);a__6561__auto__.push(arg__6562__auto___10428);
{
var G__10429 = seq__8266_10424;
var G__10430 = chunk__8267_10425;
var G__10431 = count__8268_10426;
var G__10432 = (i__8269_10427 + 1);
seq__8266_10424 = G__10429;
chunk__8267_10425 = G__10430;
count__8268_10426 = G__10431;
i__8269_10427 = G__10432;
continue;
}
} else
{var temp__4092__auto___10433 = cljs.core.seq.call(null,seq__8266_10424);if(temp__4092__auto___10433)
{var seq__8266_10434__$1 = temp__4092__auto___10433;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8266_10434__$1))
{var c__5632__auto___10435 = cljs.core.chunk_first.call(null,seq__8266_10434__$1);{
var G__10436 = cljs.core.chunk_rest.call(null,seq__8266_10434__$1);
var G__10437 = c__5632__auto___10435;
var G__10438 = cljs.core.count.call(null,c__5632__auto___10435);
var G__10439 = 0;
seq__8266_10424 = G__10436;
chunk__8267_10425 = G__10437;
count__8268_10426 = G__10438;
i__8269_10427 = G__10439;
continue;
}
} else
{var arg__6562__auto___10440 = cljs.core.first.call(null,seq__8266_10434__$1);a__6561__auto__.push(arg__6562__auto___10440);
{
var G__10441 = cljs.core.next.call(null,seq__8266_10434__$1);
var G__10442 = null;
var G__10443 = 0;
var G__10444 = 0;
seq__8266_10424 = G__10441;
chunk__8267_10425 = G__10442;
count__8268_10426 = G__10443;
i__8269_10427 = G__10444;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.source.apply(null,a__6561__auto__);
};
var source = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return source__delegate.call(this,args__6560__auto__);};
source.cljs$lang$maxFixedArity = 0;
source.cljs$lang$applyTo = (function (arglist__10445){
var args__6560__auto__ = cljs.core.seq(arglist__10445);
return source__delegate(args__6560__auto__);
});
source.cljs$core$IFn$_invoke$arity$variadic = source__delegate;
return source;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.span = (function() { 
var span__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__8274_10446 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__8275_10447 = null;var count__8276_10448 = 0;var i__8277_10449 = 0;while(true){
if((i__8277_10449 < count__8276_10448))
{var arg__6562__auto___10450 = cljs.core._nth.call(null,chunk__8275_10447,i__8277_10449);a__6561__auto__.push(arg__6562__auto___10450);
{
var G__10451 = seq__8274_10446;
var G__10452 = chunk__8275_10447;
var G__10453 = count__8276_10448;
var G__10454 = (i__8277_10449 + 1);
seq__8274_10446 = G__10451;
chunk__8275_10447 = G__10452;
count__8276_10448 = G__10453;
i__8277_10449 = G__10454;
continue;
}
} else
{var temp__4092__auto___10455 = cljs.core.seq.call(null,seq__8274_10446);if(temp__4092__auto___10455)
{var seq__8274_10456__$1 = temp__4092__auto___10455;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8274_10456__$1))
{var c__5632__auto___10457 = cljs.core.chunk_first.call(null,seq__8274_10456__$1);{
var G__10458 = cljs.core.chunk_rest.call(null,seq__8274_10456__$1);
var G__10459 = c__5632__auto___10457;
var G__10460 = cljs.core.count.call(null,c__5632__auto___10457);
var G__10461 = 0;
seq__8274_10446 = G__10458;
chunk__8275_10447 = G__10459;
count__8276_10448 = G__10460;
i__8277_10449 = G__10461;
continue;
}
} else
{var arg__6562__auto___10462 = cljs.core.first.call(null,seq__8274_10456__$1);a__6561__auto__.push(arg__6562__auto___10462);
{
var G__10463 = cljs.core.next.call(null,seq__8274_10456__$1);
var G__10464 = null;
var G__10465 = 0;
var G__10466 = 0;
seq__8274_10446 = G__10463;
chunk__8275_10447 = G__10464;
count__8276_10448 = G__10465;
i__8277_10449 = G__10466;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.span.apply(null,a__6561__auto__);
};
var span = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return span__delegate.call(this,args__6560__auto__);};
span.cljs$lang$maxFixedArity = 0;
span.cljs$lang$applyTo = (function (arglist__10467){
var args__6560__auto__ = cljs.core.seq(arglist__10467);
return span__delegate(args__6560__auto__);
});
span.cljs$core$IFn$_invoke$arity$variadic = span__delegate;
return span;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.strong = (function() { 
var strong__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__8282_10468 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__8283_10469 = null;var count__8284_10470 = 0;var i__8285_10471 = 0;while(true){
if((i__8285_10471 < count__8284_10470))
{var arg__6562__auto___10472 = cljs.core._nth.call(null,chunk__8283_10469,i__8285_10471);a__6561__auto__.push(arg__6562__auto___10472);
{
var G__10473 = seq__8282_10468;
var G__10474 = chunk__8283_10469;
var G__10475 = count__8284_10470;
var G__10476 = (i__8285_10471 + 1);
seq__8282_10468 = G__10473;
chunk__8283_10469 = G__10474;
count__8284_10470 = G__10475;
i__8285_10471 = G__10476;
continue;
}
} else
{var temp__4092__auto___10477 = cljs.core.seq.call(null,seq__8282_10468);if(temp__4092__auto___10477)
{var seq__8282_10478__$1 = temp__4092__auto___10477;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8282_10478__$1))
{var c__5632__auto___10479 = cljs.core.chunk_first.call(null,seq__8282_10478__$1);{
var G__10480 = cljs.core.chunk_rest.call(null,seq__8282_10478__$1);
var G__10481 = c__5632__auto___10479;
var G__10482 = cljs.core.count.call(null,c__5632__auto___10479);
var G__10483 = 0;
seq__8282_10468 = G__10480;
chunk__8283_10469 = G__10481;
count__8284_10470 = G__10482;
i__8285_10471 = G__10483;
continue;
}
} else
{var arg__6562__auto___10484 = cljs.core.first.call(null,seq__8282_10478__$1);a__6561__auto__.push(arg__6562__auto___10484);
{
var G__10485 = cljs.core.next.call(null,seq__8282_10478__$1);
var G__10486 = null;
var G__10487 = 0;
var G__10488 = 0;
seq__8282_10468 = G__10485;
chunk__8283_10469 = G__10486;
count__8284_10470 = G__10487;
i__8285_10471 = G__10488;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.strong.apply(null,a__6561__auto__);
};
var strong = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return strong__delegate.call(this,args__6560__auto__);};
strong.cljs$lang$maxFixedArity = 0;
strong.cljs$lang$applyTo = (function (arglist__10489){
var args__6560__auto__ = cljs.core.seq(arglist__10489);
return strong__delegate(args__6560__auto__);
});
strong.cljs$core$IFn$_invoke$arity$variadic = strong__delegate;
return strong;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.style = (function() { 
var style__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__8290_10490 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__8291_10491 = null;var count__8292_10492 = 0;var i__8293_10493 = 0;while(true){
if((i__8293_10493 < count__8292_10492))
{var arg__6562__auto___10494 = cljs.core._nth.call(null,chunk__8291_10491,i__8293_10493);a__6561__auto__.push(arg__6562__auto___10494);
{
var G__10495 = seq__8290_10490;
var G__10496 = chunk__8291_10491;
var G__10497 = count__8292_10492;
var G__10498 = (i__8293_10493 + 1);
seq__8290_10490 = G__10495;
chunk__8291_10491 = G__10496;
count__8292_10492 = G__10497;
i__8293_10493 = G__10498;
continue;
}
} else
{var temp__4092__auto___10499 = cljs.core.seq.call(null,seq__8290_10490);if(temp__4092__auto___10499)
{var seq__8290_10500__$1 = temp__4092__auto___10499;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8290_10500__$1))
{var c__5632__auto___10501 = cljs.core.chunk_first.call(null,seq__8290_10500__$1);{
var G__10502 = cljs.core.chunk_rest.call(null,seq__8290_10500__$1);
var G__10503 = c__5632__auto___10501;
var G__10504 = cljs.core.count.call(null,c__5632__auto___10501);
var G__10505 = 0;
seq__8290_10490 = G__10502;
chunk__8291_10491 = G__10503;
count__8292_10492 = G__10504;
i__8293_10493 = G__10505;
continue;
}
} else
{var arg__6562__auto___10506 = cljs.core.first.call(null,seq__8290_10500__$1);a__6561__auto__.push(arg__6562__auto___10506);
{
var G__10507 = cljs.core.next.call(null,seq__8290_10500__$1);
var G__10508 = null;
var G__10509 = 0;
var G__10510 = 0;
seq__8290_10490 = G__10507;
chunk__8291_10491 = G__10508;
count__8292_10492 = G__10509;
i__8293_10493 = G__10510;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.style.apply(null,a__6561__auto__);
};
var style = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return style__delegate.call(this,args__6560__auto__);};
style.cljs$lang$maxFixedArity = 0;
style.cljs$lang$applyTo = (function (arglist__10511){
var args__6560__auto__ = cljs.core.seq(arglist__10511);
return style__delegate(args__6560__auto__);
});
style.cljs$core$IFn$_invoke$arity$variadic = style__delegate;
return style;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.sub = (function() { 
var sub__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__8298_10512 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__8299_10513 = null;var count__8300_10514 = 0;var i__8301_10515 = 0;while(true){
if((i__8301_10515 < count__8300_10514))
{var arg__6562__auto___10516 = cljs.core._nth.call(null,chunk__8299_10513,i__8301_10515);a__6561__auto__.push(arg__6562__auto___10516);
{
var G__10517 = seq__8298_10512;
var G__10518 = chunk__8299_10513;
var G__10519 = count__8300_10514;
var G__10520 = (i__8301_10515 + 1);
seq__8298_10512 = G__10517;
chunk__8299_10513 = G__10518;
count__8300_10514 = G__10519;
i__8301_10515 = G__10520;
continue;
}
} else
{var temp__4092__auto___10521 = cljs.core.seq.call(null,seq__8298_10512);if(temp__4092__auto___10521)
{var seq__8298_10522__$1 = temp__4092__auto___10521;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8298_10522__$1))
{var c__5632__auto___10523 = cljs.core.chunk_first.call(null,seq__8298_10522__$1);{
var G__10524 = cljs.core.chunk_rest.call(null,seq__8298_10522__$1);
var G__10525 = c__5632__auto___10523;
var G__10526 = cljs.core.count.call(null,c__5632__auto___10523);
var G__10527 = 0;
seq__8298_10512 = G__10524;
chunk__8299_10513 = G__10525;
count__8300_10514 = G__10526;
i__8301_10515 = G__10527;
continue;
}
} else
{var arg__6562__auto___10528 = cljs.core.first.call(null,seq__8298_10522__$1);a__6561__auto__.push(arg__6562__auto___10528);
{
var G__10529 = cljs.core.next.call(null,seq__8298_10522__$1);
var G__10530 = null;
var G__10531 = 0;
var G__10532 = 0;
seq__8298_10512 = G__10529;
chunk__8299_10513 = G__10530;
count__8300_10514 = G__10531;
i__8301_10515 = G__10532;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.sub.apply(null,a__6561__auto__);
};
var sub = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return sub__delegate.call(this,args__6560__auto__);};
sub.cljs$lang$maxFixedArity = 0;
sub.cljs$lang$applyTo = (function (arglist__10533){
var args__6560__auto__ = cljs.core.seq(arglist__10533);
return sub__delegate(args__6560__auto__);
});
sub.cljs$core$IFn$_invoke$arity$variadic = sub__delegate;
return sub;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.summary = (function() { 
var summary__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__8306_10534 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__8307_10535 = null;var count__8308_10536 = 0;var i__8309_10537 = 0;while(true){
if((i__8309_10537 < count__8308_10536))
{var arg__6562__auto___10538 = cljs.core._nth.call(null,chunk__8307_10535,i__8309_10537);a__6561__auto__.push(arg__6562__auto___10538);
{
var G__10539 = seq__8306_10534;
var G__10540 = chunk__8307_10535;
var G__10541 = count__8308_10536;
var G__10542 = (i__8309_10537 + 1);
seq__8306_10534 = G__10539;
chunk__8307_10535 = G__10540;
count__8308_10536 = G__10541;
i__8309_10537 = G__10542;
continue;
}
} else
{var temp__4092__auto___10543 = cljs.core.seq.call(null,seq__8306_10534);if(temp__4092__auto___10543)
{var seq__8306_10544__$1 = temp__4092__auto___10543;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8306_10544__$1))
{var c__5632__auto___10545 = cljs.core.chunk_first.call(null,seq__8306_10544__$1);{
var G__10546 = cljs.core.chunk_rest.call(null,seq__8306_10544__$1);
var G__10547 = c__5632__auto___10545;
var G__10548 = cljs.core.count.call(null,c__5632__auto___10545);
var G__10549 = 0;
seq__8306_10534 = G__10546;
chunk__8307_10535 = G__10547;
count__8308_10536 = G__10548;
i__8309_10537 = G__10549;
continue;
}
} else
{var arg__6562__auto___10550 = cljs.core.first.call(null,seq__8306_10544__$1);a__6561__auto__.push(arg__6562__auto___10550);
{
var G__10551 = cljs.core.next.call(null,seq__8306_10544__$1);
var G__10552 = null;
var G__10553 = 0;
var G__10554 = 0;
seq__8306_10534 = G__10551;
chunk__8307_10535 = G__10552;
count__8308_10536 = G__10553;
i__8309_10537 = G__10554;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.summary.apply(null,a__6561__auto__);
};
var summary = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return summary__delegate.call(this,args__6560__auto__);};
summary.cljs$lang$maxFixedArity = 0;
summary.cljs$lang$applyTo = (function (arglist__10555){
var args__6560__auto__ = cljs.core.seq(arglist__10555);
return summary__delegate(args__6560__auto__);
});
summary.cljs$core$IFn$_invoke$arity$variadic = summary__delegate;
return summary;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.sup = (function() { 
var sup__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__8314_10556 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__8315_10557 = null;var count__8316_10558 = 0;var i__8317_10559 = 0;while(true){
if((i__8317_10559 < count__8316_10558))
{var arg__6562__auto___10560 = cljs.core._nth.call(null,chunk__8315_10557,i__8317_10559);a__6561__auto__.push(arg__6562__auto___10560);
{
var G__10561 = seq__8314_10556;
var G__10562 = chunk__8315_10557;
var G__10563 = count__8316_10558;
var G__10564 = (i__8317_10559 + 1);
seq__8314_10556 = G__10561;
chunk__8315_10557 = G__10562;
count__8316_10558 = G__10563;
i__8317_10559 = G__10564;
continue;
}
} else
{var temp__4092__auto___10565 = cljs.core.seq.call(null,seq__8314_10556);if(temp__4092__auto___10565)
{var seq__8314_10566__$1 = temp__4092__auto___10565;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8314_10566__$1))
{var c__5632__auto___10567 = cljs.core.chunk_first.call(null,seq__8314_10566__$1);{
var G__10568 = cljs.core.chunk_rest.call(null,seq__8314_10566__$1);
var G__10569 = c__5632__auto___10567;
var G__10570 = cljs.core.count.call(null,c__5632__auto___10567);
var G__10571 = 0;
seq__8314_10556 = G__10568;
chunk__8315_10557 = G__10569;
count__8316_10558 = G__10570;
i__8317_10559 = G__10571;
continue;
}
} else
{var arg__6562__auto___10572 = cljs.core.first.call(null,seq__8314_10566__$1);a__6561__auto__.push(arg__6562__auto___10572);
{
var G__10573 = cljs.core.next.call(null,seq__8314_10566__$1);
var G__10574 = null;
var G__10575 = 0;
var G__10576 = 0;
seq__8314_10556 = G__10573;
chunk__8315_10557 = G__10574;
count__8316_10558 = G__10575;
i__8317_10559 = G__10576;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.sup.apply(null,a__6561__auto__);
};
var sup = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return sup__delegate.call(this,args__6560__auto__);};
sup.cljs$lang$maxFixedArity = 0;
sup.cljs$lang$applyTo = (function (arglist__10577){
var args__6560__auto__ = cljs.core.seq(arglist__10577);
return sup__delegate(args__6560__auto__);
});
sup.cljs$core$IFn$_invoke$arity$variadic = sup__delegate;
return sup;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.table = (function() { 
var table__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__8322_10578 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__8323_10579 = null;var count__8324_10580 = 0;var i__8325_10581 = 0;while(true){
if((i__8325_10581 < count__8324_10580))
{var arg__6562__auto___10582 = cljs.core._nth.call(null,chunk__8323_10579,i__8325_10581);a__6561__auto__.push(arg__6562__auto___10582);
{
var G__10583 = seq__8322_10578;
var G__10584 = chunk__8323_10579;
var G__10585 = count__8324_10580;
var G__10586 = (i__8325_10581 + 1);
seq__8322_10578 = G__10583;
chunk__8323_10579 = G__10584;
count__8324_10580 = G__10585;
i__8325_10581 = G__10586;
continue;
}
} else
{var temp__4092__auto___10587 = cljs.core.seq.call(null,seq__8322_10578);if(temp__4092__auto___10587)
{var seq__8322_10588__$1 = temp__4092__auto___10587;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8322_10588__$1))
{var c__5632__auto___10589 = cljs.core.chunk_first.call(null,seq__8322_10588__$1);{
var G__10590 = cljs.core.chunk_rest.call(null,seq__8322_10588__$1);
var G__10591 = c__5632__auto___10589;
var G__10592 = cljs.core.count.call(null,c__5632__auto___10589);
var G__10593 = 0;
seq__8322_10578 = G__10590;
chunk__8323_10579 = G__10591;
count__8324_10580 = G__10592;
i__8325_10581 = G__10593;
continue;
}
} else
{var arg__6562__auto___10594 = cljs.core.first.call(null,seq__8322_10588__$1);a__6561__auto__.push(arg__6562__auto___10594);
{
var G__10595 = cljs.core.next.call(null,seq__8322_10588__$1);
var G__10596 = null;
var G__10597 = 0;
var G__10598 = 0;
seq__8322_10578 = G__10595;
chunk__8323_10579 = G__10596;
count__8324_10580 = G__10597;
i__8325_10581 = G__10598;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.table.apply(null,a__6561__auto__);
};
var table = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return table__delegate.call(this,args__6560__auto__);};
table.cljs$lang$maxFixedArity = 0;
table.cljs$lang$applyTo = (function (arglist__10599){
var args__6560__auto__ = cljs.core.seq(arglist__10599);
return table__delegate(args__6560__auto__);
});
table.cljs$core$IFn$_invoke$arity$variadic = table__delegate;
return table;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.tbody = (function() { 
var tbody__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__8330_10600 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__8331_10601 = null;var count__8332_10602 = 0;var i__8333_10603 = 0;while(true){
if((i__8333_10603 < count__8332_10602))
{var arg__6562__auto___10604 = cljs.core._nth.call(null,chunk__8331_10601,i__8333_10603);a__6561__auto__.push(arg__6562__auto___10604);
{
var G__10605 = seq__8330_10600;
var G__10606 = chunk__8331_10601;
var G__10607 = count__8332_10602;
var G__10608 = (i__8333_10603 + 1);
seq__8330_10600 = G__10605;
chunk__8331_10601 = G__10606;
count__8332_10602 = G__10607;
i__8333_10603 = G__10608;
continue;
}
} else
{var temp__4092__auto___10609 = cljs.core.seq.call(null,seq__8330_10600);if(temp__4092__auto___10609)
{var seq__8330_10610__$1 = temp__4092__auto___10609;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8330_10610__$1))
{var c__5632__auto___10611 = cljs.core.chunk_first.call(null,seq__8330_10610__$1);{
var G__10612 = cljs.core.chunk_rest.call(null,seq__8330_10610__$1);
var G__10613 = c__5632__auto___10611;
var G__10614 = cljs.core.count.call(null,c__5632__auto___10611);
var G__10615 = 0;
seq__8330_10600 = G__10612;
chunk__8331_10601 = G__10613;
count__8332_10602 = G__10614;
i__8333_10603 = G__10615;
continue;
}
} else
{var arg__6562__auto___10616 = cljs.core.first.call(null,seq__8330_10610__$1);a__6561__auto__.push(arg__6562__auto___10616);
{
var G__10617 = cljs.core.next.call(null,seq__8330_10610__$1);
var G__10618 = null;
var G__10619 = 0;
var G__10620 = 0;
seq__8330_10600 = G__10617;
chunk__8331_10601 = G__10618;
count__8332_10602 = G__10619;
i__8333_10603 = G__10620;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.tbody.apply(null,a__6561__auto__);
};
var tbody = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return tbody__delegate.call(this,args__6560__auto__);};
tbody.cljs$lang$maxFixedArity = 0;
tbody.cljs$lang$applyTo = (function (arglist__10621){
var args__6560__auto__ = cljs.core.seq(arglist__10621);
return tbody__delegate(args__6560__auto__);
});
tbody.cljs$core$IFn$_invoke$arity$variadic = tbody__delegate;
return tbody;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.td = (function() { 
var td__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__8338_10622 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__8339_10623 = null;var count__8340_10624 = 0;var i__8341_10625 = 0;while(true){
if((i__8341_10625 < count__8340_10624))
{var arg__6562__auto___10626 = cljs.core._nth.call(null,chunk__8339_10623,i__8341_10625);a__6561__auto__.push(arg__6562__auto___10626);
{
var G__10627 = seq__8338_10622;
var G__10628 = chunk__8339_10623;
var G__10629 = count__8340_10624;
var G__10630 = (i__8341_10625 + 1);
seq__8338_10622 = G__10627;
chunk__8339_10623 = G__10628;
count__8340_10624 = G__10629;
i__8341_10625 = G__10630;
continue;
}
} else
{var temp__4092__auto___10631 = cljs.core.seq.call(null,seq__8338_10622);if(temp__4092__auto___10631)
{var seq__8338_10632__$1 = temp__4092__auto___10631;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8338_10632__$1))
{var c__5632__auto___10633 = cljs.core.chunk_first.call(null,seq__8338_10632__$1);{
var G__10634 = cljs.core.chunk_rest.call(null,seq__8338_10632__$1);
var G__10635 = c__5632__auto___10633;
var G__10636 = cljs.core.count.call(null,c__5632__auto___10633);
var G__10637 = 0;
seq__8338_10622 = G__10634;
chunk__8339_10623 = G__10635;
count__8340_10624 = G__10636;
i__8341_10625 = G__10637;
continue;
}
} else
{var arg__6562__auto___10638 = cljs.core.first.call(null,seq__8338_10632__$1);a__6561__auto__.push(arg__6562__auto___10638);
{
var G__10639 = cljs.core.next.call(null,seq__8338_10632__$1);
var G__10640 = null;
var G__10641 = 0;
var G__10642 = 0;
seq__8338_10622 = G__10639;
chunk__8339_10623 = G__10640;
count__8340_10624 = G__10641;
i__8341_10625 = G__10642;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.td.apply(null,a__6561__auto__);
};
var td = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return td__delegate.call(this,args__6560__auto__);};
td.cljs$lang$maxFixedArity = 0;
td.cljs$lang$applyTo = (function (arglist__10643){
var args__6560__auto__ = cljs.core.seq(arglist__10643);
return td__delegate(args__6560__auto__);
});
td.cljs$core$IFn$_invoke$arity$variadic = td__delegate;
return td;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.textarea = (function() { 
var textarea__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__8346_10644 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__8347_10645 = null;var count__8348_10646 = 0;var i__8349_10647 = 0;while(true){
if((i__8349_10647 < count__8348_10646))
{var arg__6562__auto___10648 = cljs.core._nth.call(null,chunk__8347_10645,i__8349_10647);a__6561__auto__.push(arg__6562__auto___10648);
{
var G__10649 = seq__8346_10644;
var G__10650 = chunk__8347_10645;
var G__10651 = count__8348_10646;
var G__10652 = (i__8349_10647 + 1);
seq__8346_10644 = G__10649;
chunk__8347_10645 = G__10650;
count__8348_10646 = G__10651;
i__8349_10647 = G__10652;
continue;
}
} else
{var temp__4092__auto___10653 = cljs.core.seq.call(null,seq__8346_10644);if(temp__4092__auto___10653)
{var seq__8346_10654__$1 = temp__4092__auto___10653;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8346_10654__$1))
{var c__5632__auto___10655 = cljs.core.chunk_first.call(null,seq__8346_10654__$1);{
var G__10656 = cljs.core.chunk_rest.call(null,seq__8346_10654__$1);
var G__10657 = c__5632__auto___10655;
var G__10658 = cljs.core.count.call(null,c__5632__auto___10655);
var G__10659 = 0;
seq__8346_10644 = G__10656;
chunk__8347_10645 = G__10657;
count__8348_10646 = G__10658;
i__8349_10647 = G__10659;
continue;
}
} else
{var arg__6562__auto___10660 = cljs.core.first.call(null,seq__8346_10654__$1);a__6561__auto__.push(arg__6562__auto___10660);
{
var G__10661 = cljs.core.next.call(null,seq__8346_10654__$1);
var G__10662 = null;
var G__10663 = 0;
var G__10664 = 0;
seq__8346_10644 = G__10661;
chunk__8347_10645 = G__10662;
count__8348_10646 = G__10663;
i__8349_10647 = G__10664;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.textarea.apply(null,a__6561__auto__);
};
var textarea = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return textarea__delegate.call(this,args__6560__auto__);};
textarea.cljs$lang$maxFixedArity = 0;
textarea.cljs$lang$applyTo = (function (arglist__10665){
var args__6560__auto__ = cljs.core.seq(arglist__10665);
return textarea__delegate(args__6560__auto__);
});
textarea.cljs$core$IFn$_invoke$arity$variadic = textarea__delegate;
return textarea;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.tfoot = (function() { 
var tfoot__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__8354_10666 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__8355_10667 = null;var count__8356_10668 = 0;var i__8357_10669 = 0;while(true){
if((i__8357_10669 < count__8356_10668))
{var arg__6562__auto___10670 = cljs.core._nth.call(null,chunk__8355_10667,i__8357_10669);a__6561__auto__.push(arg__6562__auto___10670);
{
var G__10671 = seq__8354_10666;
var G__10672 = chunk__8355_10667;
var G__10673 = count__8356_10668;
var G__10674 = (i__8357_10669 + 1);
seq__8354_10666 = G__10671;
chunk__8355_10667 = G__10672;
count__8356_10668 = G__10673;
i__8357_10669 = G__10674;
continue;
}
} else
{var temp__4092__auto___10675 = cljs.core.seq.call(null,seq__8354_10666);if(temp__4092__auto___10675)
{var seq__8354_10676__$1 = temp__4092__auto___10675;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8354_10676__$1))
{var c__5632__auto___10677 = cljs.core.chunk_first.call(null,seq__8354_10676__$1);{
var G__10678 = cljs.core.chunk_rest.call(null,seq__8354_10676__$1);
var G__10679 = c__5632__auto___10677;
var G__10680 = cljs.core.count.call(null,c__5632__auto___10677);
var G__10681 = 0;
seq__8354_10666 = G__10678;
chunk__8355_10667 = G__10679;
count__8356_10668 = G__10680;
i__8357_10669 = G__10681;
continue;
}
} else
{var arg__6562__auto___10682 = cljs.core.first.call(null,seq__8354_10676__$1);a__6561__auto__.push(arg__6562__auto___10682);
{
var G__10683 = cljs.core.next.call(null,seq__8354_10676__$1);
var G__10684 = null;
var G__10685 = 0;
var G__10686 = 0;
seq__8354_10666 = G__10683;
chunk__8355_10667 = G__10684;
count__8356_10668 = G__10685;
i__8357_10669 = G__10686;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.tfoot.apply(null,a__6561__auto__);
};
var tfoot = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return tfoot__delegate.call(this,args__6560__auto__);};
tfoot.cljs$lang$maxFixedArity = 0;
tfoot.cljs$lang$applyTo = (function (arglist__10687){
var args__6560__auto__ = cljs.core.seq(arglist__10687);
return tfoot__delegate(args__6560__auto__);
});
tfoot.cljs$core$IFn$_invoke$arity$variadic = tfoot__delegate;
return tfoot;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.th = (function() { 
var th__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__8362_10688 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__8363_10689 = null;var count__8364_10690 = 0;var i__8365_10691 = 0;while(true){
if((i__8365_10691 < count__8364_10690))
{var arg__6562__auto___10692 = cljs.core._nth.call(null,chunk__8363_10689,i__8365_10691);a__6561__auto__.push(arg__6562__auto___10692);
{
var G__10693 = seq__8362_10688;
var G__10694 = chunk__8363_10689;
var G__10695 = count__8364_10690;
var G__10696 = (i__8365_10691 + 1);
seq__8362_10688 = G__10693;
chunk__8363_10689 = G__10694;
count__8364_10690 = G__10695;
i__8365_10691 = G__10696;
continue;
}
} else
{var temp__4092__auto___10697 = cljs.core.seq.call(null,seq__8362_10688);if(temp__4092__auto___10697)
{var seq__8362_10698__$1 = temp__4092__auto___10697;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8362_10698__$1))
{var c__5632__auto___10699 = cljs.core.chunk_first.call(null,seq__8362_10698__$1);{
var G__10700 = cljs.core.chunk_rest.call(null,seq__8362_10698__$1);
var G__10701 = c__5632__auto___10699;
var G__10702 = cljs.core.count.call(null,c__5632__auto___10699);
var G__10703 = 0;
seq__8362_10688 = G__10700;
chunk__8363_10689 = G__10701;
count__8364_10690 = G__10702;
i__8365_10691 = G__10703;
continue;
}
} else
{var arg__6562__auto___10704 = cljs.core.first.call(null,seq__8362_10698__$1);a__6561__auto__.push(arg__6562__auto___10704);
{
var G__10705 = cljs.core.next.call(null,seq__8362_10698__$1);
var G__10706 = null;
var G__10707 = 0;
var G__10708 = 0;
seq__8362_10688 = G__10705;
chunk__8363_10689 = G__10706;
count__8364_10690 = G__10707;
i__8365_10691 = G__10708;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.th.apply(null,a__6561__auto__);
};
var th = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return th__delegate.call(this,args__6560__auto__);};
th.cljs$lang$maxFixedArity = 0;
th.cljs$lang$applyTo = (function (arglist__10709){
var args__6560__auto__ = cljs.core.seq(arglist__10709);
return th__delegate(args__6560__auto__);
});
th.cljs$core$IFn$_invoke$arity$variadic = th__delegate;
return th;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.thead = (function() { 
var thead__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__8370_10710 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__8371_10711 = null;var count__8372_10712 = 0;var i__8373_10713 = 0;while(true){
if((i__8373_10713 < count__8372_10712))
{var arg__6562__auto___10714 = cljs.core._nth.call(null,chunk__8371_10711,i__8373_10713);a__6561__auto__.push(arg__6562__auto___10714);
{
var G__10715 = seq__8370_10710;
var G__10716 = chunk__8371_10711;
var G__10717 = count__8372_10712;
var G__10718 = (i__8373_10713 + 1);
seq__8370_10710 = G__10715;
chunk__8371_10711 = G__10716;
count__8372_10712 = G__10717;
i__8373_10713 = G__10718;
continue;
}
} else
{var temp__4092__auto___10719 = cljs.core.seq.call(null,seq__8370_10710);if(temp__4092__auto___10719)
{var seq__8370_10720__$1 = temp__4092__auto___10719;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8370_10720__$1))
{var c__5632__auto___10721 = cljs.core.chunk_first.call(null,seq__8370_10720__$1);{
var G__10722 = cljs.core.chunk_rest.call(null,seq__8370_10720__$1);
var G__10723 = c__5632__auto___10721;
var G__10724 = cljs.core.count.call(null,c__5632__auto___10721);
var G__10725 = 0;
seq__8370_10710 = G__10722;
chunk__8371_10711 = G__10723;
count__8372_10712 = G__10724;
i__8373_10713 = G__10725;
continue;
}
} else
{var arg__6562__auto___10726 = cljs.core.first.call(null,seq__8370_10720__$1);a__6561__auto__.push(arg__6562__auto___10726);
{
var G__10727 = cljs.core.next.call(null,seq__8370_10720__$1);
var G__10728 = null;
var G__10729 = 0;
var G__10730 = 0;
seq__8370_10710 = G__10727;
chunk__8371_10711 = G__10728;
count__8372_10712 = G__10729;
i__8373_10713 = G__10730;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.thead.apply(null,a__6561__auto__);
};
var thead = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return thead__delegate.call(this,args__6560__auto__);};
thead.cljs$lang$maxFixedArity = 0;
thead.cljs$lang$applyTo = (function (arglist__10731){
var args__6560__auto__ = cljs.core.seq(arglist__10731);
return thead__delegate(args__6560__auto__);
});
thead.cljs$core$IFn$_invoke$arity$variadic = thead__delegate;
return thead;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.time = (function() { 
var time__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__8378_10732 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__8379_10733 = null;var count__8380_10734 = 0;var i__8381_10735 = 0;while(true){
if((i__8381_10735 < count__8380_10734))
{var arg__6562__auto___10736 = cljs.core._nth.call(null,chunk__8379_10733,i__8381_10735);a__6561__auto__.push(arg__6562__auto___10736);
{
var G__10737 = seq__8378_10732;
var G__10738 = chunk__8379_10733;
var G__10739 = count__8380_10734;
var G__10740 = (i__8381_10735 + 1);
seq__8378_10732 = G__10737;
chunk__8379_10733 = G__10738;
count__8380_10734 = G__10739;
i__8381_10735 = G__10740;
continue;
}
} else
{var temp__4092__auto___10741 = cljs.core.seq.call(null,seq__8378_10732);if(temp__4092__auto___10741)
{var seq__8378_10742__$1 = temp__4092__auto___10741;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8378_10742__$1))
{var c__5632__auto___10743 = cljs.core.chunk_first.call(null,seq__8378_10742__$1);{
var G__10744 = cljs.core.chunk_rest.call(null,seq__8378_10742__$1);
var G__10745 = c__5632__auto___10743;
var G__10746 = cljs.core.count.call(null,c__5632__auto___10743);
var G__10747 = 0;
seq__8378_10732 = G__10744;
chunk__8379_10733 = G__10745;
count__8380_10734 = G__10746;
i__8381_10735 = G__10747;
continue;
}
} else
{var arg__6562__auto___10748 = cljs.core.first.call(null,seq__8378_10742__$1);a__6561__auto__.push(arg__6562__auto___10748);
{
var G__10749 = cljs.core.next.call(null,seq__8378_10742__$1);
var G__10750 = null;
var G__10751 = 0;
var G__10752 = 0;
seq__8378_10732 = G__10749;
chunk__8379_10733 = G__10750;
count__8380_10734 = G__10751;
i__8381_10735 = G__10752;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.time.apply(null,a__6561__auto__);
};
var time = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return time__delegate.call(this,args__6560__auto__);};
time.cljs$lang$maxFixedArity = 0;
time.cljs$lang$applyTo = (function (arglist__10753){
var args__6560__auto__ = cljs.core.seq(arglist__10753);
return time__delegate(args__6560__auto__);
});
time.cljs$core$IFn$_invoke$arity$variadic = time__delegate;
return time;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.title = (function() { 
var title__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__8386_10754 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__8387_10755 = null;var count__8388_10756 = 0;var i__8389_10757 = 0;while(true){
if((i__8389_10757 < count__8388_10756))
{var arg__6562__auto___10758 = cljs.core._nth.call(null,chunk__8387_10755,i__8389_10757);a__6561__auto__.push(arg__6562__auto___10758);
{
var G__10759 = seq__8386_10754;
var G__10760 = chunk__8387_10755;
var G__10761 = count__8388_10756;
var G__10762 = (i__8389_10757 + 1);
seq__8386_10754 = G__10759;
chunk__8387_10755 = G__10760;
count__8388_10756 = G__10761;
i__8389_10757 = G__10762;
continue;
}
} else
{var temp__4092__auto___10763 = cljs.core.seq.call(null,seq__8386_10754);if(temp__4092__auto___10763)
{var seq__8386_10764__$1 = temp__4092__auto___10763;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8386_10764__$1))
{var c__5632__auto___10765 = cljs.core.chunk_first.call(null,seq__8386_10764__$1);{
var G__10766 = cljs.core.chunk_rest.call(null,seq__8386_10764__$1);
var G__10767 = c__5632__auto___10765;
var G__10768 = cljs.core.count.call(null,c__5632__auto___10765);
var G__10769 = 0;
seq__8386_10754 = G__10766;
chunk__8387_10755 = G__10767;
count__8388_10756 = G__10768;
i__8389_10757 = G__10769;
continue;
}
} else
{var arg__6562__auto___10770 = cljs.core.first.call(null,seq__8386_10764__$1);a__6561__auto__.push(arg__6562__auto___10770);
{
var G__10771 = cljs.core.next.call(null,seq__8386_10764__$1);
var G__10772 = null;
var G__10773 = 0;
var G__10774 = 0;
seq__8386_10754 = G__10771;
chunk__8387_10755 = G__10772;
count__8388_10756 = G__10773;
i__8389_10757 = G__10774;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.title.apply(null,a__6561__auto__);
};
var title = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return title__delegate.call(this,args__6560__auto__);};
title.cljs$lang$maxFixedArity = 0;
title.cljs$lang$applyTo = (function (arglist__10775){
var args__6560__auto__ = cljs.core.seq(arglist__10775);
return title__delegate(args__6560__auto__);
});
title.cljs$core$IFn$_invoke$arity$variadic = title__delegate;
return title;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.tr = (function() { 
var tr__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__8394_10776 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__8395_10777 = null;var count__8396_10778 = 0;var i__8397_10779 = 0;while(true){
if((i__8397_10779 < count__8396_10778))
{var arg__6562__auto___10780 = cljs.core._nth.call(null,chunk__8395_10777,i__8397_10779);a__6561__auto__.push(arg__6562__auto___10780);
{
var G__10781 = seq__8394_10776;
var G__10782 = chunk__8395_10777;
var G__10783 = count__8396_10778;
var G__10784 = (i__8397_10779 + 1);
seq__8394_10776 = G__10781;
chunk__8395_10777 = G__10782;
count__8396_10778 = G__10783;
i__8397_10779 = G__10784;
continue;
}
} else
{var temp__4092__auto___10785 = cljs.core.seq.call(null,seq__8394_10776);if(temp__4092__auto___10785)
{var seq__8394_10786__$1 = temp__4092__auto___10785;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8394_10786__$1))
{var c__5632__auto___10787 = cljs.core.chunk_first.call(null,seq__8394_10786__$1);{
var G__10788 = cljs.core.chunk_rest.call(null,seq__8394_10786__$1);
var G__10789 = c__5632__auto___10787;
var G__10790 = cljs.core.count.call(null,c__5632__auto___10787);
var G__10791 = 0;
seq__8394_10776 = G__10788;
chunk__8395_10777 = G__10789;
count__8396_10778 = G__10790;
i__8397_10779 = G__10791;
continue;
}
} else
{var arg__6562__auto___10792 = cljs.core.first.call(null,seq__8394_10786__$1);a__6561__auto__.push(arg__6562__auto___10792);
{
var G__10793 = cljs.core.next.call(null,seq__8394_10786__$1);
var G__10794 = null;
var G__10795 = 0;
var G__10796 = 0;
seq__8394_10776 = G__10793;
chunk__8395_10777 = G__10794;
count__8396_10778 = G__10795;
i__8397_10779 = G__10796;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.tr.apply(null,a__6561__auto__);
};
var tr = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return tr__delegate.call(this,args__6560__auto__);};
tr.cljs$lang$maxFixedArity = 0;
tr.cljs$lang$applyTo = (function (arglist__10797){
var args__6560__auto__ = cljs.core.seq(arglist__10797);
return tr__delegate(args__6560__auto__);
});
tr.cljs$core$IFn$_invoke$arity$variadic = tr__delegate;
return tr;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.track = (function() { 
var track__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__8402_10798 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__8403_10799 = null;var count__8404_10800 = 0;var i__8405_10801 = 0;while(true){
if((i__8405_10801 < count__8404_10800))
{var arg__6562__auto___10802 = cljs.core._nth.call(null,chunk__8403_10799,i__8405_10801);a__6561__auto__.push(arg__6562__auto___10802);
{
var G__10803 = seq__8402_10798;
var G__10804 = chunk__8403_10799;
var G__10805 = count__8404_10800;
var G__10806 = (i__8405_10801 + 1);
seq__8402_10798 = G__10803;
chunk__8403_10799 = G__10804;
count__8404_10800 = G__10805;
i__8405_10801 = G__10806;
continue;
}
} else
{var temp__4092__auto___10807 = cljs.core.seq.call(null,seq__8402_10798);if(temp__4092__auto___10807)
{var seq__8402_10808__$1 = temp__4092__auto___10807;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8402_10808__$1))
{var c__5632__auto___10809 = cljs.core.chunk_first.call(null,seq__8402_10808__$1);{
var G__10810 = cljs.core.chunk_rest.call(null,seq__8402_10808__$1);
var G__10811 = c__5632__auto___10809;
var G__10812 = cljs.core.count.call(null,c__5632__auto___10809);
var G__10813 = 0;
seq__8402_10798 = G__10810;
chunk__8403_10799 = G__10811;
count__8404_10800 = G__10812;
i__8405_10801 = G__10813;
continue;
}
} else
{var arg__6562__auto___10814 = cljs.core.first.call(null,seq__8402_10808__$1);a__6561__auto__.push(arg__6562__auto___10814);
{
var G__10815 = cljs.core.next.call(null,seq__8402_10808__$1);
var G__10816 = null;
var G__10817 = 0;
var G__10818 = 0;
seq__8402_10798 = G__10815;
chunk__8403_10799 = G__10816;
count__8404_10800 = G__10817;
i__8405_10801 = G__10818;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.track.apply(null,a__6561__auto__);
};
var track = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return track__delegate.call(this,args__6560__auto__);};
track.cljs$lang$maxFixedArity = 0;
track.cljs$lang$applyTo = (function (arglist__10819){
var args__6560__auto__ = cljs.core.seq(arglist__10819);
return track__delegate(args__6560__auto__);
});
track.cljs$core$IFn$_invoke$arity$variadic = track__delegate;
return track;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.u = (function() { 
var u__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__8410_10820 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__8411_10821 = null;var count__8412_10822 = 0;var i__8413_10823 = 0;while(true){
if((i__8413_10823 < count__8412_10822))
{var arg__6562__auto___10824 = cljs.core._nth.call(null,chunk__8411_10821,i__8413_10823);a__6561__auto__.push(arg__6562__auto___10824);
{
var G__10825 = seq__8410_10820;
var G__10826 = chunk__8411_10821;
var G__10827 = count__8412_10822;
var G__10828 = (i__8413_10823 + 1);
seq__8410_10820 = G__10825;
chunk__8411_10821 = G__10826;
count__8412_10822 = G__10827;
i__8413_10823 = G__10828;
continue;
}
} else
{var temp__4092__auto___10829 = cljs.core.seq.call(null,seq__8410_10820);if(temp__4092__auto___10829)
{var seq__8410_10830__$1 = temp__4092__auto___10829;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8410_10830__$1))
{var c__5632__auto___10831 = cljs.core.chunk_first.call(null,seq__8410_10830__$1);{
var G__10832 = cljs.core.chunk_rest.call(null,seq__8410_10830__$1);
var G__10833 = c__5632__auto___10831;
var G__10834 = cljs.core.count.call(null,c__5632__auto___10831);
var G__10835 = 0;
seq__8410_10820 = G__10832;
chunk__8411_10821 = G__10833;
count__8412_10822 = G__10834;
i__8413_10823 = G__10835;
continue;
}
} else
{var arg__6562__auto___10836 = cljs.core.first.call(null,seq__8410_10830__$1);a__6561__auto__.push(arg__6562__auto___10836);
{
var G__10837 = cljs.core.next.call(null,seq__8410_10830__$1);
var G__10838 = null;
var G__10839 = 0;
var G__10840 = 0;
seq__8410_10820 = G__10837;
chunk__8411_10821 = G__10838;
count__8412_10822 = G__10839;
i__8413_10823 = G__10840;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.u.apply(null,a__6561__auto__);
};
var u = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return u__delegate.call(this,args__6560__auto__);};
u.cljs$lang$maxFixedArity = 0;
u.cljs$lang$applyTo = (function (arglist__10841){
var args__6560__auto__ = cljs.core.seq(arglist__10841);
return u__delegate(args__6560__auto__);
});
u.cljs$core$IFn$_invoke$arity$variadic = u__delegate;
return u;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.ul = (function() { 
var ul__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__8418_10842 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__8419_10843 = null;var count__8420_10844 = 0;var i__8421_10845 = 0;while(true){
if((i__8421_10845 < count__8420_10844))
{var arg__6562__auto___10846 = cljs.core._nth.call(null,chunk__8419_10843,i__8421_10845);a__6561__auto__.push(arg__6562__auto___10846);
{
var G__10847 = seq__8418_10842;
var G__10848 = chunk__8419_10843;
var G__10849 = count__8420_10844;
var G__10850 = (i__8421_10845 + 1);
seq__8418_10842 = G__10847;
chunk__8419_10843 = G__10848;
count__8420_10844 = G__10849;
i__8421_10845 = G__10850;
continue;
}
} else
{var temp__4092__auto___10851 = cljs.core.seq.call(null,seq__8418_10842);if(temp__4092__auto___10851)
{var seq__8418_10852__$1 = temp__4092__auto___10851;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8418_10852__$1))
{var c__5632__auto___10853 = cljs.core.chunk_first.call(null,seq__8418_10852__$1);{
var G__10854 = cljs.core.chunk_rest.call(null,seq__8418_10852__$1);
var G__10855 = c__5632__auto___10853;
var G__10856 = cljs.core.count.call(null,c__5632__auto___10853);
var G__10857 = 0;
seq__8418_10842 = G__10854;
chunk__8419_10843 = G__10855;
count__8420_10844 = G__10856;
i__8421_10845 = G__10857;
continue;
}
} else
{var arg__6562__auto___10858 = cljs.core.first.call(null,seq__8418_10852__$1);a__6561__auto__.push(arg__6562__auto___10858);
{
var G__10859 = cljs.core.next.call(null,seq__8418_10852__$1);
var G__10860 = null;
var G__10861 = 0;
var G__10862 = 0;
seq__8418_10842 = G__10859;
chunk__8419_10843 = G__10860;
count__8420_10844 = G__10861;
i__8421_10845 = G__10862;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.ul.apply(null,a__6561__auto__);
};
var ul = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ul__delegate.call(this,args__6560__auto__);};
ul.cljs$lang$maxFixedArity = 0;
ul.cljs$lang$applyTo = (function (arglist__10863){
var args__6560__auto__ = cljs.core.seq(arglist__10863);
return ul__delegate(args__6560__auto__);
});
ul.cljs$core$IFn$_invoke$arity$variadic = ul__delegate;
return ul;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.var$ = (function() { 
var var$__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__8426_10864 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__8427_10865 = null;var count__8428_10866 = 0;var i__8429_10867 = 0;while(true){
if((i__8429_10867 < count__8428_10866))
{var arg__6562__auto___10868 = cljs.core._nth.call(null,chunk__8427_10865,i__8429_10867);a__6561__auto__.push(arg__6562__auto___10868);
{
var G__10869 = seq__8426_10864;
var G__10870 = chunk__8427_10865;
var G__10871 = count__8428_10866;
var G__10872 = (i__8429_10867 + 1);
seq__8426_10864 = G__10869;
chunk__8427_10865 = G__10870;
count__8428_10866 = G__10871;
i__8429_10867 = G__10872;
continue;
}
} else
{var temp__4092__auto___10873 = cljs.core.seq.call(null,seq__8426_10864);if(temp__4092__auto___10873)
{var seq__8426_10874__$1 = temp__4092__auto___10873;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8426_10874__$1))
{var c__5632__auto___10875 = cljs.core.chunk_first.call(null,seq__8426_10874__$1);{
var G__10876 = cljs.core.chunk_rest.call(null,seq__8426_10874__$1);
var G__10877 = c__5632__auto___10875;
var G__10878 = cljs.core.count.call(null,c__5632__auto___10875);
var G__10879 = 0;
seq__8426_10864 = G__10876;
chunk__8427_10865 = G__10877;
count__8428_10866 = G__10878;
i__8429_10867 = G__10879;
continue;
}
} else
{var arg__6562__auto___10880 = cljs.core.first.call(null,seq__8426_10874__$1);a__6561__auto__.push(arg__6562__auto___10880);
{
var G__10881 = cljs.core.next.call(null,seq__8426_10874__$1);
var G__10882 = null;
var G__10883 = 0;
var G__10884 = 0;
seq__8426_10864 = G__10881;
chunk__8427_10865 = G__10882;
count__8428_10866 = G__10883;
i__8429_10867 = G__10884;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.var$.apply(null,a__6561__auto__);
};
var var$ = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return var$__delegate.call(this,args__6560__auto__);};
var$.cljs$lang$maxFixedArity = 0;
var$.cljs$lang$applyTo = (function (arglist__10885){
var args__6560__auto__ = cljs.core.seq(arglist__10885);
return var$__delegate(args__6560__auto__);
});
var$.cljs$core$IFn$_invoke$arity$variadic = var$__delegate;
return var$;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.video = (function() { 
var video__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__8434_10886 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__8435_10887 = null;var count__8436_10888 = 0;var i__8437_10889 = 0;while(true){
if((i__8437_10889 < count__8436_10888))
{var arg__6562__auto___10890 = cljs.core._nth.call(null,chunk__8435_10887,i__8437_10889);a__6561__auto__.push(arg__6562__auto___10890);
{
var G__10891 = seq__8434_10886;
var G__10892 = chunk__8435_10887;
var G__10893 = count__8436_10888;
var G__10894 = (i__8437_10889 + 1);
seq__8434_10886 = G__10891;
chunk__8435_10887 = G__10892;
count__8436_10888 = G__10893;
i__8437_10889 = G__10894;
continue;
}
} else
{var temp__4092__auto___10895 = cljs.core.seq.call(null,seq__8434_10886);if(temp__4092__auto___10895)
{var seq__8434_10896__$1 = temp__4092__auto___10895;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8434_10896__$1))
{var c__5632__auto___10897 = cljs.core.chunk_first.call(null,seq__8434_10896__$1);{
var G__10898 = cljs.core.chunk_rest.call(null,seq__8434_10896__$1);
var G__10899 = c__5632__auto___10897;
var G__10900 = cljs.core.count.call(null,c__5632__auto___10897);
var G__10901 = 0;
seq__8434_10886 = G__10898;
chunk__8435_10887 = G__10899;
count__8436_10888 = G__10900;
i__8437_10889 = G__10901;
continue;
}
} else
{var arg__6562__auto___10902 = cljs.core.first.call(null,seq__8434_10896__$1);a__6561__auto__.push(arg__6562__auto___10902);
{
var G__10903 = cljs.core.next.call(null,seq__8434_10896__$1);
var G__10904 = null;
var G__10905 = 0;
var G__10906 = 0;
seq__8434_10886 = G__10903;
chunk__8435_10887 = G__10904;
count__8436_10888 = G__10905;
i__8437_10889 = G__10906;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.video.apply(null,a__6561__auto__);
};
var video = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return video__delegate.call(this,args__6560__auto__);};
video.cljs$lang$maxFixedArity = 0;
video.cljs$lang$applyTo = (function (arglist__10907){
var args__6560__auto__ = cljs.core.seq(arglist__10907);
return video__delegate(args__6560__auto__);
});
video.cljs$core$IFn$_invoke$arity$variadic = video__delegate;
return video;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.wbr = (function() { 
var wbr__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__8442_10908 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__8443_10909 = null;var count__8444_10910 = 0;var i__8445_10911 = 0;while(true){
if((i__8445_10911 < count__8444_10910))
{var arg__6562__auto___10912 = cljs.core._nth.call(null,chunk__8443_10909,i__8445_10911);a__6561__auto__.push(arg__6562__auto___10912);
{
var G__10913 = seq__8442_10908;
var G__10914 = chunk__8443_10909;
var G__10915 = count__8444_10910;
var G__10916 = (i__8445_10911 + 1);
seq__8442_10908 = G__10913;
chunk__8443_10909 = G__10914;
count__8444_10910 = G__10915;
i__8445_10911 = G__10916;
continue;
}
} else
{var temp__4092__auto___10917 = cljs.core.seq.call(null,seq__8442_10908);if(temp__4092__auto___10917)
{var seq__8442_10918__$1 = temp__4092__auto___10917;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8442_10918__$1))
{var c__5632__auto___10919 = cljs.core.chunk_first.call(null,seq__8442_10918__$1);{
var G__10920 = cljs.core.chunk_rest.call(null,seq__8442_10918__$1);
var G__10921 = c__5632__auto___10919;
var G__10922 = cljs.core.count.call(null,c__5632__auto___10919);
var G__10923 = 0;
seq__8442_10908 = G__10920;
chunk__8443_10909 = G__10921;
count__8444_10910 = G__10922;
i__8445_10911 = G__10923;
continue;
}
} else
{var arg__6562__auto___10924 = cljs.core.first.call(null,seq__8442_10918__$1);a__6561__auto__.push(arg__6562__auto___10924);
{
var G__10925 = cljs.core.next.call(null,seq__8442_10918__$1);
var G__10926 = null;
var G__10927 = 0;
var G__10928 = 0;
seq__8442_10908 = G__10925;
chunk__8443_10909 = G__10926;
count__8444_10910 = G__10927;
i__8445_10911 = G__10928;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.wbr.apply(null,a__6561__auto__);
};
var wbr = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return wbr__delegate.call(this,args__6560__auto__);};
wbr.cljs$lang$maxFixedArity = 0;
wbr.cljs$lang$applyTo = (function (arglist__10929){
var args__6560__auto__ = cljs.core.seq(arglist__10929);
return wbr__delegate(args__6560__auto__);
});
wbr.cljs$core$IFn$_invoke$arity$variadic = wbr__delegate;
return wbr;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.circle = (function() { 
var circle__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__8450_10930 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__8451_10931 = null;var count__8452_10932 = 0;var i__8453_10933 = 0;while(true){
if((i__8453_10933 < count__8452_10932))
{var arg__6562__auto___10934 = cljs.core._nth.call(null,chunk__8451_10931,i__8453_10933);a__6561__auto__.push(arg__6562__auto___10934);
{
var G__10935 = seq__8450_10930;
var G__10936 = chunk__8451_10931;
var G__10937 = count__8452_10932;
var G__10938 = (i__8453_10933 + 1);
seq__8450_10930 = G__10935;
chunk__8451_10931 = G__10936;
count__8452_10932 = G__10937;
i__8453_10933 = G__10938;
continue;
}
} else
{var temp__4092__auto___10939 = cljs.core.seq.call(null,seq__8450_10930);if(temp__4092__auto___10939)
{var seq__8450_10940__$1 = temp__4092__auto___10939;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8450_10940__$1))
{var c__5632__auto___10941 = cljs.core.chunk_first.call(null,seq__8450_10940__$1);{
var G__10942 = cljs.core.chunk_rest.call(null,seq__8450_10940__$1);
var G__10943 = c__5632__auto___10941;
var G__10944 = cljs.core.count.call(null,c__5632__auto___10941);
var G__10945 = 0;
seq__8450_10930 = G__10942;
chunk__8451_10931 = G__10943;
count__8452_10932 = G__10944;
i__8453_10933 = G__10945;
continue;
}
} else
{var arg__6562__auto___10946 = cljs.core.first.call(null,seq__8450_10940__$1);a__6561__auto__.push(arg__6562__auto___10946);
{
var G__10947 = cljs.core.next.call(null,seq__8450_10940__$1);
var G__10948 = null;
var G__10949 = 0;
var G__10950 = 0;
seq__8450_10930 = G__10947;
chunk__8451_10931 = G__10948;
count__8452_10932 = G__10949;
i__8453_10933 = G__10950;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.circle.apply(null,a__6561__auto__);
};
var circle = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return circle__delegate.call(this,args__6560__auto__);};
circle.cljs$lang$maxFixedArity = 0;
circle.cljs$lang$applyTo = (function (arglist__10951){
var args__6560__auto__ = cljs.core.seq(arglist__10951);
return circle__delegate(args__6560__auto__);
});
circle.cljs$core$IFn$_invoke$arity$variadic = circle__delegate;
return circle;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.g = (function() { 
var g__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__8458_10952 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__8459_10953 = null;var count__8460_10954 = 0;var i__8461_10955 = 0;while(true){
if((i__8461_10955 < count__8460_10954))
{var arg__6562__auto___10956 = cljs.core._nth.call(null,chunk__8459_10953,i__8461_10955);a__6561__auto__.push(arg__6562__auto___10956);
{
var G__10957 = seq__8458_10952;
var G__10958 = chunk__8459_10953;
var G__10959 = count__8460_10954;
var G__10960 = (i__8461_10955 + 1);
seq__8458_10952 = G__10957;
chunk__8459_10953 = G__10958;
count__8460_10954 = G__10959;
i__8461_10955 = G__10960;
continue;
}
} else
{var temp__4092__auto___10961 = cljs.core.seq.call(null,seq__8458_10952);if(temp__4092__auto___10961)
{var seq__8458_10962__$1 = temp__4092__auto___10961;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8458_10962__$1))
{var c__5632__auto___10963 = cljs.core.chunk_first.call(null,seq__8458_10962__$1);{
var G__10964 = cljs.core.chunk_rest.call(null,seq__8458_10962__$1);
var G__10965 = c__5632__auto___10963;
var G__10966 = cljs.core.count.call(null,c__5632__auto___10963);
var G__10967 = 0;
seq__8458_10952 = G__10964;
chunk__8459_10953 = G__10965;
count__8460_10954 = G__10966;
i__8461_10955 = G__10967;
continue;
}
} else
{var arg__6562__auto___10968 = cljs.core.first.call(null,seq__8458_10962__$1);a__6561__auto__.push(arg__6562__auto___10968);
{
var G__10969 = cljs.core.next.call(null,seq__8458_10962__$1);
var G__10970 = null;
var G__10971 = 0;
var G__10972 = 0;
seq__8458_10952 = G__10969;
chunk__8459_10953 = G__10970;
count__8460_10954 = G__10971;
i__8461_10955 = G__10972;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.g.apply(null,a__6561__auto__);
};
var g = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return g__delegate.call(this,args__6560__auto__);};
g.cljs$lang$maxFixedArity = 0;
g.cljs$lang$applyTo = (function (arglist__10973){
var args__6560__auto__ = cljs.core.seq(arglist__10973);
return g__delegate(args__6560__auto__);
});
g.cljs$core$IFn$_invoke$arity$variadic = g__delegate;
return g;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.line = (function() { 
var line__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__8466_10974 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__8467_10975 = null;var count__8468_10976 = 0;var i__8469_10977 = 0;while(true){
if((i__8469_10977 < count__8468_10976))
{var arg__6562__auto___10978 = cljs.core._nth.call(null,chunk__8467_10975,i__8469_10977);a__6561__auto__.push(arg__6562__auto___10978);
{
var G__10979 = seq__8466_10974;
var G__10980 = chunk__8467_10975;
var G__10981 = count__8468_10976;
var G__10982 = (i__8469_10977 + 1);
seq__8466_10974 = G__10979;
chunk__8467_10975 = G__10980;
count__8468_10976 = G__10981;
i__8469_10977 = G__10982;
continue;
}
} else
{var temp__4092__auto___10983 = cljs.core.seq.call(null,seq__8466_10974);if(temp__4092__auto___10983)
{var seq__8466_10984__$1 = temp__4092__auto___10983;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8466_10984__$1))
{var c__5632__auto___10985 = cljs.core.chunk_first.call(null,seq__8466_10984__$1);{
var G__10986 = cljs.core.chunk_rest.call(null,seq__8466_10984__$1);
var G__10987 = c__5632__auto___10985;
var G__10988 = cljs.core.count.call(null,c__5632__auto___10985);
var G__10989 = 0;
seq__8466_10974 = G__10986;
chunk__8467_10975 = G__10987;
count__8468_10976 = G__10988;
i__8469_10977 = G__10989;
continue;
}
} else
{var arg__6562__auto___10990 = cljs.core.first.call(null,seq__8466_10984__$1);a__6561__auto__.push(arg__6562__auto___10990);
{
var G__10991 = cljs.core.next.call(null,seq__8466_10984__$1);
var G__10992 = null;
var G__10993 = 0;
var G__10994 = 0;
seq__8466_10974 = G__10991;
chunk__8467_10975 = G__10992;
count__8468_10976 = G__10993;
i__8469_10977 = G__10994;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.line.apply(null,a__6561__auto__);
};
var line = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return line__delegate.call(this,args__6560__auto__);};
line.cljs$lang$maxFixedArity = 0;
line.cljs$lang$applyTo = (function (arglist__10995){
var args__6560__auto__ = cljs.core.seq(arglist__10995);
return line__delegate(args__6560__auto__);
});
line.cljs$core$IFn$_invoke$arity$variadic = line__delegate;
return line;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.path = (function() { 
var path__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__8474_10996 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__8475_10997 = null;var count__8476_10998 = 0;var i__8477_10999 = 0;while(true){
if((i__8477_10999 < count__8476_10998))
{var arg__6562__auto___11000 = cljs.core._nth.call(null,chunk__8475_10997,i__8477_10999);a__6561__auto__.push(arg__6562__auto___11000);
{
var G__11001 = seq__8474_10996;
var G__11002 = chunk__8475_10997;
var G__11003 = count__8476_10998;
var G__11004 = (i__8477_10999 + 1);
seq__8474_10996 = G__11001;
chunk__8475_10997 = G__11002;
count__8476_10998 = G__11003;
i__8477_10999 = G__11004;
continue;
}
} else
{var temp__4092__auto___11005 = cljs.core.seq.call(null,seq__8474_10996);if(temp__4092__auto___11005)
{var seq__8474_11006__$1 = temp__4092__auto___11005;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8474_11006__$1))
{var c__5632__auto___11007 = cljs.core.chunk_first.call(null,seq__8474_11006__$1);{
var G__11008 = cljs.core.chunk_rest.call(null,seq__8474_11006__$1);
var G__11009 = c__5632__auto___11007;
var G__11010 = cljs.core.count.call(null,c__5632__auto___11007);
var G__11011 = 0;
seq__8474_10996 = G__11008;
chunk__8475_10997 = G__11009;
count__8476_10998 = G__11010;
i__8477_10999 = G__11011;
continue;
}
} else
{var arg__6562__auto___11012 = cljs.core.first.call(null,seq__8474_11006__$1);a__6561__auto__.push(arg__6562__auto___11012);
{
var G__11013 = cljs.core.next.call(null,seq__8474_11006__$1);
var G__11014 = null;
var G__11015 = 0;
var G__11016 = 0;
seq__8474_10996 = G__11013;
chunk__8475_10997 = G__11014;
count__8476_10998 = G__11015;
i__8477_10999 = G__11016;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.path.apply(null,a__6561__auto__);
};
var path = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return path__delegate.call(this,args__6560__auto__);};
path.cljs$lang$maxFixedArity = 0;
path.cljs$lang$applyTo = (function (arglist__11017){
var args__6560__auto__ = cljs.core.seq(arglist__11017);
return path__delegate(args__6560__auto__);
});
path.cljs$core$IFn$_invoke$arity$variadic = path__delegate;
return path;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.polygon = (function() { 
var polygon__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__8482_11018 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__8483_11019 = null;var count__8484_11020 = 0;var i__8485_11021 = 0;while(true){
if((i__8485_11021 < count__8484_11020))
{var arg__6562__auto___11022 = cljs.core._nth.call(null,chunk__8483_11019,i__8485_11021);a__6561__auto__.push(arg__6562__auto___11022);
{
var G__11023 = seq__8482_11018;
var G__11024 = chunk__8483_11019;
var G__11025 = count__8484_11020;
var G__11026 = (i__8485_11021 + 1);
seq__8482_11018 = G__11023;
chunk__8483_11019 = G__11024;
count__8484_11020 = G__11025;
i__8485_11021 = G__11026;
continue;
}
} else
{var temp__4092__auto___11027 = cljs.core.seq.call(null,seq__8482_11018);if(temp__4092__auto___11027)
{var seq__8482_11028__$1 = temp__4092__auto___11027;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8482_11028__$1))
{var c__5632__auto___11029 = cljs.core.chunk_first.call(null,seq__8482_11028__$1);{
var G__11030 = cljs.core.chunk_rest.call(null,seq__8482_11028__$1);
var G__11031 = c__5632__auto___11029;
var G__11032 = cljs.core.count.call(null,c__5632__auto___11029);
var G__11033 = 0;
seq__8482_11018 = G__11030;
chunk__8483_11019 = G__11031;
count__8484_11020 = G__11032;
i__8485_11021 = G__11033;
continue;
}
} else
{var arg__6562__auto___11034 = cljs.core.first.call(null,seq__8482_11028__$1);a__6561__auto__.push(arg__6562__auto___11034);
{
var G__11035 = cljs.core.next.call(null,seq__8482_11028__$1);
var G__11036 = null;
var G__11037 = 0;
var G__11038 = 0;
seq__8482_11018 = G__11035;
chunk__8483_11019 = G__11036;
count__8484_11020 = G__11037;
i__8485_11021 = G__11038;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.polygon.apply(null,a__6561__auto__);
};
var polygon = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return polygon__delegate.call(this,args__6560__auto__);};
polygon.cljs$lang$maxFixedArity = 0;
polygon.cljs$lang$applyTo = (function (arglist__11039){
var args__6560__auto__ = cljs.core.seq(arglist__11039);
return polygon__delegate(args__6560__auto__);
});
polygon.cljs$core$IFn$_invoke$arity$variadic = polygon__delegate;
return polygon;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.polyline = (function() { 
var polyline__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__8490_11040 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__8491_11041 = null;var count__8492_11042 = 0;var i__8493_11043 = 0;while(true){
if((i__8493_11043 < count__8492_11042))
{var arg__6562__auto___11044 = cljs.core._nth.call(null,chunk__8491_11041,i__8493_11043);a__6561__auto__.push(arg__6562__auto___11044);
{
var G__11045 = seq__8490_11040;
var G__11046 = chunk__8491_11041;
var G__11047 = count__8492_11042;
var G__11048 = (i__8493_11043 + 1);
seq__8490_11040 = G__11045;
chunk__8491_11041 = G__11046;
count__8492_11042 = G__11047;
i__8493_11043 = G__11048;
continue;
}
} else
{var temp__4092__auto___11049 = cljs.core.seq.call(null,seq__8490_11040);if(temp__4092__auto___11049)
{var seq__8490_11050__$1 = temp__4092__auto___11049;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8490_11050__$1))
{var c__5632__auto___11051 = cljs.core.chunk_first.call(null,seq__8490_11050__$1);{
var G__11052 = cljs.core.chunk_rest.call(null,seq__8490_11050__$1);
var G__11053 = c__5632__auto___11051;
var G__11054 = cljs.core.count.call(null,c__5632__auto___11051);
var G__11055 = 0;
seq__8490_11040 = G__11052;
chunk__8491_11041 = G__11053;
count__8492_11042 = G__11054;
i__8493_11043 = G__11055;
continue;
}
} else
{var arg__6562__auto___11056 = cljs.core.first.call(null,seq__8490_11050__$1);a__6561__auto__.push(arg__6562__auto___11056);
{
var G__11057 = cljs.core.next.call(null,seq__8490_11050__$1);
var G__11058 = null;
var G__11059 = 0;
var G__11060 = 0;
seq__8490_11040 = G__11057;
chunk__8491_11041 = G__11058;
count__8492_11042 = G__11059;
i__8493_11043 = G__11060;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.polyline.apply(null,a__6561__auto__);
};
var polyline = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return polyline__delegate.call(this,args__6560__auto__);};
polyline.cljs$lang$maxFixedArity = 0;
polyline.cljs$lang$applyTo = (function (arglist__11061){
var args__6560__auto__ = cljs.core.seq(arglist__11061);
return polyline__delegate(args__6560__auto__);
});
polyline.cljs$core$IFn$_invoke$arity$variadic = polyline__delegate;
return polyline;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.rect = (function() { 
var rect__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__8498_11062 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__8499_11063 = null;var count__8500_11064 = 0;var i__8501_11065 = 0;while(true){
if((i__8501_11065 < count__8500_11064))
{var arg__6562__auto___11066 = cljs.core._nth.call(null,chunk__8499_11063,i__8501_11065);a__6561__auto__.push(arg__6562__auto___11066);
{
var G__11067 = seq__8498_11062;
var G__11068 = chunk__8499_11063;
var G__11069 = count__8500_11064;
var G__11070 = (i__8501_11065 + 1);
seq__8498_11062 = G__11067;
chunk__8499_11063 = G__11068;
count__8500_11064 = G__11069;
i__8501_11065 = G__11070;
continue;
}
} else
{var temp__4092__auto___11071 = cljs.core.seq.call(null,seq__8498_11062);if(temp__4092__auto___11071)
{var seq__8498_11072__$1 = temp__4092__auto___11071;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8498_11072__$1))
{var c__5632__auto___11073 = cljs.core.chunk_first.call(null,seq__8498_11072__$1);{
var G__11074 = cljs.core.chunk_rest.call(null,seq__8498_11072__$1);
var G__11075 = c__5632__auto___11073;
var G__11076 = cljs.core.count.call(null,c__5632__auto___11073);
var G__11077 = 0;
seq__8498_11062 = G__11074;
chunk__8499_11063 = G__11075;
count__8500_11064 = G__11076;
i__8501_11065 = G__11077;
continue;
}
} else
{var arg__6562__auto___11078 = cljs.core.first.call(null,seq__8498_11072__$1);a__6561__auto__.push(arg__6562__auto___11078);
{
var G__11079 = cljs.core.next.call(null,seq__8498_11072__$1);
var G__11080 = null;
var G__11081 = 0;
var G__11082 = 0;
seq__8498_11062 = G__11079;
chunk__8499_11063 = G__11080;
count__8500_11064 = G__11081;
i__8501_11065 = G__11082;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.rect.apply(null,a__6561__auto__);
};
var rect = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return rect__delegate.call(this,args__6560__auto__);};
rect.cljs$lang$maxFixedArity = 0;
rect.cljs$lang$applyTo = (function (arglist__11083){
var args__6560__auto__ = cljs.core.seq(arglist__11083);
return rect__delegate(args__6560__auto__);
});
rect.cljs$core$IFn$_invoke$arity$variadic = rect__delegate;
return rect;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.svg = (function() { 
var svg__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__8506_11084 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__8507_11085 = null;var count__8508_11086 = 0;var i__8509_11087 = 0;while(true){
if((i__8509_11087 < count__8508_11086))
{var arg__6562__auto___11088 = cljs.core._nth.call(null,chunk__8507_11085,i__8509_11087);a__6561__auto__.push(arg__6562__auto___11088);
{
var G__11089 = seq__8506_11084;
var G__11090 = chunk__8507_11085;
var G__11091 = count__8508_11086;
var G__11092 = (i__8509_11087 + 1);
seq__8506_11084 = G__11089;
chunk__8507_11085 = G__11090;
count__8508_11086 = G__11091;
i__8509_11087 = G__11092;
continue;
}
} else
{var temp__4092__auto___11093 = cljs.core.seq.call(null,seq__8506_11084);if(temp__4092__auto___11093)
{var seq__8506_11094__$1 = temp__4092__auto___11093;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8506_11094__$1))
{var c__5632__auto___11095 = cljs.core.chunk_first.call(null,seq__8506_11094__$1);{
var G__11096 = cljs.core.chunk_rest.call(null,seq__8506_11094__$1);
var G__11097 = c__5632__auto___11095;
var G__11098 = cljs.core.count.call(null,c__5632__auto___11095);
var G__11099 = 0;
seq__8506_11084 = G__11096;
chunk__8507_11085 = G__11097;
count__8508_11086 = G__11098;
i__8509_11087 = G__11099;
continue;
}
} else
{var arg__6562__auto___11100 = cljs.core.first.call(null,seq__8506_11094__$1);a__6561__auto__.push(arg__6562__auto___11100);
{
var G__11101 = cljs.core.next.call(null,seq__8506_11094__$1);
var G__11102 = null;
var G__11103 = 0;
var G__11104 = 0;
seq__8506_11084 = G__11101;
chunk__8507_11085 = G__11102;
count__8508_11086 = G__11103;
i__8509_11087 = G__11104;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.svg.apply(null,a__6561__auto__);
};
var svg = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return svg__delegate.call(this,args__6560__auto__);};
svg.cljs$lang$maxFixedArity = 0;
svg.cljs$lang$applyTo = (function (arglist__11105){
var args__6560__auto__ = cljs.core.seq(arglist__11105);
return svg__delegate(args__6560__auto__);
});
svg.cljs$core$IFn$_invoke$arity$variadic = svg__delegate;
return svg;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.text = (function() { 
var text__delegate = function (args__6560__auto__){var a__6561__auto__ = [];a__6561__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6560__auto__)));
var seq__7818_11106 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6560__auto__));var chunk__7819_11107 = null;var count__7820_11108 = 0;var i__7821_11109 = 0;while(true){
if((i__7821_11109 < count__7820_11108))
{var arg__6562__auto___11110 = cljs.core._nth.call(null,chunk__7819_11107,i__7821_11109);a__6561__auto__.push(arg__6562__auto___11110);
{
var G__11111 = seq__7818_11106;
var G__11112 = chunk__7819_11107;
var G__11113 = count__7820_11108;
var G__11114 = (i__7821_11109 + 1);
seq__7818_11106 = G__11111;
chunk__7819_11107 = G__11112;
count__7820_11108 = G__11113;
i__7821_11109 = G__11114;
continue;
}
} else
{var temp__4092__auto___11115 = cljs.core.seq.call(null,seq__7818_11106);if(temp__4092__auto___11115)
{var seq__7818_11116__$1 = temp__4092__auto___11115;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7818_11116__$1))
{var c__5632__auto___11117 = cljs.core.chunk_first.call(null,seq__7818_11116__$1);{
var G__11118 = cljs.core.chunk_rest.call(null,seq__7818_11116__$1);
var G__11119 = c__5632__auto___11117;
var G__11120 = cljs.core.count.call(null,c__5632__auto___11117);
var G__11121 = 0;
seq__7818_11106 = G__11118;
chunk__7819_11107 = G__11119;
count__7820_11108 = G__11120;
i__7821_11109 = G__11121;
continue;
}
} else
{var arg__6562__auto___11122 = cljs.core.first.call(null,seq__7818_11116__$1);a__6561__auto__.push(arg__6562__auto___11122);
{
var G__11123 = cljs.core.next.call(null,seq__7818_11116__$1);
var G__11124 = null;
var G__11125 = 0;
var G__11126 = 0;
seq__7818_11106 = G__11123;
chunk__7819_11107 = G__11124;
count__7820_11108 = G__11125;
i__7821_11109 = G__11126;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.text.apply(null,a__6561__auto__);
};
var text = function (var_args){
var args__6560__auto__ = null;if (arguments.length > 0) {
  args__6560__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return text__delegate.call(this,args__6560__auto__);};
text.cljs$lang$maxFixedArity = 0;
text.cljs$lang$applyTo = (function (arglist__11127){
var args__6560__auto__ = cljs.core.seq(arglist__11127);
return text__delegate(args__6560__auto__);
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
lt.plugins.elm_light.autocompleter.handle_keypress = (function handle_keypress(p__7536,ev){var map__7539 = p__7536;var map__7539__$1 = ((cljs.core.seq_QMARK_.call(null,map__7539))?cljs.core.apply.call(null,cljs.core.hash_map,map__7539):map__7539);var props = map__7539__$1;var on_cancel = cljs.core.get.call(null,map__7539__$1,new cljs.core.Keyword(null,"on-cancel","on-cancel",600765850));var on_select = cljs.core.get.call(null,map__7539__$1,new cljs.core.Keyword(null,"on-select","on-select",1062468636));var on_down = cljs.core.get.call(null,map__7539__$1,new cljs.core.Keyword(null,"on-down","on-down",3936419650));var on_up = cljs.core.get.call(null,map__7539__$1,new cljs.core.Keyword(null,"on-up","on-up",1119739067));var kk = ev.which;var G__7540 = kk;if(cljs.core._EQ_.call(null,27,G__7540))
{ev.preventDefault();
ev.target.value = "";
return on_cancel.call(null);
} else
{if(cljs.core._EQ_.call(null,13,G__7540))
{ev.preventDefault();
var temp__4092__auto___7556 = lt.plugins.elm_light.autocompleter.find_active.call(null,new cljs.core.Keyword(null,"items","items",1114430258).cljs$core$IFn$_invoke$arity$1(props));if(cljs.core.truth_(temp__4092__auto___7556))
{var active_7557 = temp__4092__auto___7556;ev.target.value = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(active_7557);
} else
{}
return on_select.call(null);
} else
{if(cljs.core._EQ_.call(null,40,G__7540))
{ev.preventDefault();
return on_down.call(null);
} else
{if(cljs.core._EQ_.call(null,38,G__7540))
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
return (function (p1__7541_SHARP_){return "autocomplete-dropdown-item row".concat((cljs.core.truth_(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(p1__7541_SHARP_))?" autocomplete-active":""));
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
lt.plugins.elm_light.autocompleter.Adder = quiescent.component.call(null,(function (p__7542){var map__7543 = p__7542;var map__7543__$1 = ((cljs.core.seq_QMARK_.call(null,map__7543))?cljs.core.apply.call(null,cljs.core.hash_map,map__7543):map__7543);var props = map__7543__$1;var disabled = cljs.core.get.call(null,map__7543__$1,new cljs.core.Keyword(null,"disabled","disabled",1284845038));var on_add_package = cljs.core.get.call(null,map__7543__$1,new cljs.core.Keyword(null,"on-add-package","on-add-package",3601701790));return quiescent.dom.button.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",1004015509),"btn",new cljs.core.Keyword(null,"disabled","disabled",1284845038),disabled,new cljs.core.Keyword(null,"onClick","onClick",3956969051),((function (map__7543,map__7543__$1,props,disabled,on_add_package){
return (function (){return on_add_package.call(null);
});})(map__7543,map__7543__$1,props,disabled,on_add_package))
], null),"Add package");
}));
/**
* 
*/
lt.plugins.elm_light.autocompleter.Versions = quiescent.component.call(null,(function (props){return cljs.core.apply.call(null,quiescent.dom.select,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",1004015509),"versions",new cljs.core.Keyword(null,"value","value",1125876963),new cljs.core.Keyword(null,"version","version",1365512266).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"onChange","onChange",2050678241),(function (p1__7544_SHARP_){return new cljs.core.Keyword(null,"on-change-version","on-change-version",822058203).cljs$core$IFn$_invoke$arity$1(props).call(null,p1__7544_SHARP_.target.value);
})], null),cljs.core.map.call(null,(function (p1__7545_SHARP_){return quiescent.dom.option.call(null,cljs.core.PersistentArrayMap.EMPTY,p1__7545_SHARP_);
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
clojure.walk.keywordize_keys = (function keywordize_keys(m){var f = (function (p__11548){var vec__11549 = p__11548;var k = cljs.core.nth.call(null,vec__11549,0,null);var v = cljs.core.nth.call(null,vec__11549,1,null);if(typeof k === 'string')
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
clojure.walk.stringify_keys = (function stringify_keys(m){var f = (function (p__11552){var vec__11553 = p__11552;var k = cljs.core.nth.call(null,vec__11553,0,null);var v = cljs.core.nth.call(null,vec__11553,1,null);if((k instanceof cljs.core.Keyword))
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
lt.plugins.elm_light.utils.find_symbol = (function find_symbol(ed,pos){var curr_tok = lt.objs.editor.__GT_token.call(null,ed,pos);var G__14691 = new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(curr_tok);if(cljs.core._EQ_.call(null,"variable",G__14691))
{return [cljs.core.str(find_symbol.call(null,ed,cljs.core.assoc.call(null,pos,new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(curr_tok)))),cljs.core.str(new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(curr_tok))].join('');
} else
{if(cljs.core._EQ_.call(null,"qualifier",G__14691))
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
return (function (p__14698){var vec__14699 = p__14698;var _ = cljs.core.nth.call(null,vec__14699,0,null);var vs = cljs.core.nth.call(null,vec__14699,1,null);return cljs.core.apply.call(null,cljs.core.merge,vs);
});})(pkg_json,deps_json))
,cljs.core.group_by.call(null,new cljs.core.Keyword(null,"package","package",4501809080),cljs.core.concat.call(null,cljs.core.mapv.call(null,((function (pkg_json,deps_json){
return (function (p__14700){var vec__14701 = p__14700;var k = cljs.core.nth.call(null,vec__14701,0,null);var v = cljs.core.nth.call(null,vec__14701,1,null);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"package","package",4501809080),lt.plugins.elm_light.utils.nskw__GT_name.call(null,k),new cljs.core.Keyword(null,"exact","exact",1110851185),v], null);
});})(pkg_json,deps_json))
,lt.plugins.elm_light.utils.parse_json_file.call(null,deps_json)),cljs.core.mapv.call(null,((function (pkg_json,deps_json){
return (function (p__14702){var vec__14703 = p__14702;var k = cljs.core.nth.call(null,vec__14703,0,null);var v = cljs.core.nth.call(null,vec__14703,1,null);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"package","package",4501809080),lt.plugins.elm_light.utils.nskw__GT_name.call(null,k),new cljs.core.Keyword(null,"range","range",1122184367),v], null);
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
lt.plugins.elm_light.graph.find_package_by_name = (function find_package_by_name(this$,name){return cljs.core.some.call(null,(function (p1__15256_SHARP_){if(cljs.core._EQ_.call(null,lt.plugins.elm_light.graph.lower.call(null,new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(p1__15256_SHARP_)),lt.plugins.elm_light.graph.lower.call(null,name)))
{return p1__15256_SHARP_;
} else
{return null;
}
}),new cljs.core.Keyword(null,"all-packages","all-packages",1123981067).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
});
lt.plugins.elm_light.graph.dependency_graph_ui = (function dependency_graph_ui(this$){var e__6323__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.graph","div.graph",2030351651),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dependency-graph","div.dependency-graph",3039800187),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg:svg","svg:svg",3472817088),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",1127031096),"650",new cljs.core.Keyword(null,"height","height",4087841945),"680"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg:g","svg:g",1123725379),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",2066570974),"translate(20,20)"], null)], null)], null)], null)], null));var seq__15263_15304 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__15264_15305 = null;var count__15265_15306 = 0;var i__15266_15307 = 0;while(true){
if((i__15266_15307 < count__15265_15306))
{var vec__15267_15308 = cljs.core._nth.call(null,chunk__15264_15305,i__15266_15307);var ev__6324__auto___15309 = cljs.core.nth.call(null,vec__15267_15308,0,null);var func__6325__auto___15310 = cljs.core.nth.call(null,vec__15267_15308,1,null);lt.util.dom.on.call(null,e__6323__auto__,ev__6324__auto___15309,func__6325__auto___15310);
{
var G__15311 = seq__15263_15304;
var G__15312 = chunk__15264_15305;
var G__15313 = count__15265_15306;
var G__15314 = (i__15266_15307 + 1);
seq__15263_15304 = G__15311;
chunk__15264_15305 = G__15312;
count__15265_15306 = G__15313;
i__15266_15307 = G__15314;
continue;
}
} else
{var temp__4092__auto___15315 = cljs.core.seq.call(null,seq__15263_15304);if(temp__4092__auto___15315)
{var seq__15263_15316__$1 = temp__4092__auto___15315;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15263_15316__$1))
{var c__5632__auto___15317 = cljs.core.chunk_first.call(null,seq__15263_15316__$1);{
var G__15318 = cljs.core.chunk_rest.call(null,seq__15263_15316__$1);
var G__15319 = c__5632__auto___15317;
var G__15320 = cljs.core.count.call(null,c__5632__auto___15317);
var G__15321 = 0;
seq__15263_15304 = G__15318;
chunk__15264_15305 = G__15319;
count__15265_15306 = G__15320;
i__15266_15307 = G__15321;
continue;
}
} else
{var vec__15268_15322 = cljs.core.first.call(null,seq__15263_15316__$1);var ev__6324__auto___15323 = cljs.core.nth.call(null,vec__15268_15322,0,null);var func__6325__auto___15324 = cljs.core.nth.call(null,vec__15268_15322,1,null);lt.util.dom.on.call(null,e__6323__auto__,ev__6324__auto___15323,func__6325__auto___15324);
{
var G__15325 = cljs.core.next.call(null,seq__15263_15316__$1);
var G__15326 = null;
var G__15327 = 0;
var G__15328 = 0;
seq__15263_15304 = G__15325;
chunk__15264_15305 = G__15326;
count__15265_15306 = G__15327;
i__15266_15307 = G__15328;
continue;
}
}
} else
{}
}
break;
}
return e__6323__auto__;
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.graph","dependency-graph","lt.plugins.elm-light.graph/dependency-graph",2371711049),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elm.graph.dependency","elm.graph.dependency",658564005)], null),new cljs.core.Keyword(null,"name","name",1017277949),"Dependency graph",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){lt.plugins.elm_light.utils.fetch_all_packages.call(null,(function (p1__15269_SHARP_){return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"all-packages","all-packages",1123981067),p1__15269_SHARP_], null));
}));
return lt.plugins.elm_light.graph.dependency_graph_ui.call(null,this$);
}));
lt.plugins.elm_light.graph.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___15329 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___15329))
{var ts_15330 = temp__4092__auto___15329;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_15330))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_15330);
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
lt.plugins.elm_light.graph.create_graph = (function create_graph(data){var g = (new lt.plugins.elm_light.graph.dagreD3.graphlib.Graph()).setGraph({});var seq__15278_15331 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"nodes","nodes",1118897699).cljs$core$IFn$_invoke$arity$1(data));var chunk__15279_15332 = null;var count__15280_15333 = 0;var i__15281_15334 = 0;while(true){
if((i__15281_15334 < count__15280_15333))
{var x_15335 = cljs.core._nth.call(null,chunk__15279_15332,i__15281_15334);g.setNode(lt.plugins.elm_light.graph.dep_id.call(null,x_15335),lt.plugins.elm_light.graph.node_label.call(null,x_15335));
{
var G__15336 = seq__15278_15331;
var G__15337 = chunk__15279_15332;
var G__15338 = count__15280_15333;
var G__15339 = (i__15281_15334 + 1);
seq__15278_15331 = G__15336;
chunk__15279_15332 = G__15337;
count__15280_15333 = G__15338;
i__15281_15334 = G__15339;
continue;
}
} else
{var temp__4092__auto___15340 = cljs.core.seq.call(null,seq__15278_15331);if(temp__4092__auto___15340)
{var seq__15278_15341__$1 = temp__4092__auto___15340;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15278_15341__$1))
{var c__5632__auto___15342 = cljs.core.chunk_first.call(null,seq__15278_15341__$1);{
var G__15343 = cljs.core.chunk_rest.call(null,seq__15278_15341__$1);
var G__15344 = c__5632__auto___15342;
var G__15345 = cljs.core.count.call(null,c__5632__auto___15342);
var G__15346 = 0;
seq__15278_15331 = G__15343;
chunk__15279_15332 = G__15344;
count__15280_15333 = G__15345;
i__15281_15334 = G__15346;
continue;
}
} else
{var x_15347 = cljs.core.first.call(null,seq__15278_15341__$1);g.setNode(lt.plugins.elm_light.graph.dep_id.call(null,x_15347),lt.plugins.elm_light.graph.node_label.call(null,x_15347));
{
var G__15348 = cljs.core.next.call(null,seq__15278_15341__$1);
var G__15349 = null;
var G__15350 = 0;
var G__15351 = 0;
seq__15278_15331 = G__15348;
chunk__15279_15332 = G__15349;
count__15280_15333 = G__15350;
i__15281_15334 = G__15351;
continue;
}
}
} else
{}
}
break;
}
var seq__15282_15352 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"edges","edges",1110261192).cljs$core$IFn$_invoke$arity$1(data));var chunk__15283_15353 = null;var count__15284_15354 = 0;var i__15285_15355 = 0;while(true){
if((i__15285_15355 < count__15284_15354))
{var x_15356 = cljs.core._nth.call(null,chunk__15283_15353,i__15285_15355);g.setEdge(new cljs.core.Keyword(null,"a","a",1013904339).cljs$core$IFn$_invoke$arity$1(x_15356),new cljs.core.Keyword(null,"b","b",1013904340).cljs$core$IFn$_invoke$arity$1(x_15356),{"style": (cljs.core.truth_(new cljs.core.Keyword(null,"transitive","transitive",3584713111).cljs$core$IFn$_invoke$arity$1(x_15356))?"stroke-dasharray: 5, 5;":null), "label": new cljs.core.Keyword(null,"label","label",1116631654).cljs$core$IFn$_invoke$arity$1(x_15356)});
{
var G__15357 = seq__15282_15352;
var G__15358 = chunk__15283_15353;
var G__15359 = count__15284_15354;
var G__15360 = (i__15285_15355 + 1);
seq__15282_15352 = G__15357;
chunk__15283_15353 = G__15358;
count__15284_15354 = G__15359;
i__15285_15355 = G__15360;
continue;
}
} else
{var temp__4092__auto___15361 = cljs.core.seq.call(null,seq__15282_15352);if(temp__4092__auto___15361)
{var seq__15282_15362__$1 = temp__4092__auto___15361;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15282_15362__$1))
{var c__5632__auto___15363 = cljs.core.chunk_first.call(null,seq__15282_15362__$1);{
var G__15364 = cljs.core.chunk_rest.call(null,seq__15282_15362__$1);
var G__15365 = c__5632__auto___15363;
var G__15366 = cljs.core.count.call(null,c__5632__auto___15363);
var G__15367 = 0;
seq__15282_15352 = G__15364;
chunk__15283_15353 = G__15365;
count__15284_15354 = G__15366;
i__15285_15355 = G__15367;
continue;
}
} else
{var x_15368 = cljs.core.first.call(null,seq__15282_15362__$1);g.setEdge(new cljs.core.Keyword(null,"a","a",1013904339).cljs$core$IFn$_invoke$arity$1(x_15368),new cljs.core.Keyword(null,"b","b",1013904340).cljs$core$IFn$_invoke$arity$1(x_15368),{"style": (cljs.core.truth_(new cljs.core.Keyword(null,"transitive","transitive",3584713111).cljs$core$IFn$_invoke$arity$1(x_15368))?"stroke-dasharray: 5, 5;":null), "label": new cljs.core.Keyword(null,"label","label",1116631654).cljs$core$IFn$_invoke$arity$1(x_15368)});
{
var G__15369 = cljs.core.next.call(null,seq__15282_15362__$1);
var G__15370 = null;
var G__15371 = 0;
var G__15372 = 0;
seq__15282_15352 = G__15369;
chunk__15283_15353 = G__15370;
count__15284_15354 = G__15371;
i__15285_15355 = G__15372;
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
}),cljs.core.map.call(null,(function (p__15290){var vec__15291 = p__15290;var k = cljs.core.nth.call(null,vec__15291,0,null);var v = cljs.core.nth.call(null,vec__15291,1,null);return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"package","package",4501809080),new cljs.core.Keyword(null,"range","range",1122184367),new cljs.core.Keyword(null,"version","version",1365512266)],[lt.plugins.elm_light.utils.nskw__GT_name.call(null,k),v,new cljs.core.Keyword(null,"version","version",1365512266).cljs$core$IFn$_invoke$arity$1(cljs.core.some.call(null,((function (vec__15291,k,v){
return (function (p1__15286_SHARP_){if(cljs.core._EQ_.call(null,lt.plugins.elm_light.utils.nskw__GT_name.call(null,k),new cljs.core.Keyword(null,"package","package",4501809080).cljs$core$IFn$_invoke$arity$1(p1__15286_SHARP_)))
{return p1__15286_SHARP_;
} else
{return null;
}
});})(vec__15291,k,v))
,new cljs.core.Keyword(null,"packages","packages",1764771935).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))))]);
}),new cljs.core.Keyword(null,"dependencies","dependencies",1517678747).cljs$core$IFn$_invoke$arity$1(pkg_json))));if(temp__4092__auto__)
{var edges = temp__4092__auto__;lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",1016980252),new cljs.core.Keyword(null,"edges","edges",1110261192)], null),((function (edges,temp__4092__auto__){
return (function (p1__15287_SHARP_){return cljs.core.concat.call(null,p1__15287_SHARP_,edges);
});})(edges,temp__4092__auto__))
);
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"elm.graph.render","elm.graph.render",2076182000));
} else
{return null;
}
});
lt.plugins.elm_light.graph.__BEH__on_get_transitives = (function __BEH__on_get_transitives(this$){var transitives = cljs.core.remove.call(null,new cljs.core.Keyword(null,"range","range",1122184367),new cljs.core.Keyword(null,"packages","packages",1764771935).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))));lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",1016980252),new cljs.core.Keyword(null,"nodes","nodes",1118897699)], null),((function (transitives){
return (function (p1__15292_SHARP_){return cljs.core.concat.call(null,p1__15292_SHARP_,transitives);
});})(transitives))
);
lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"elm.graph.render","elm.graph.render",2076182000));
var seq__15297 = cljs.core.seq.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"version","version",1365512266),new cljs.core.Keyword(null,"packages","packages",1764771935).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))));var chunk__15298 = null;var count__15299 = 0;var i__15300 = 0;while(true){
if((i__15300 < count__15299))
{var x = cljs.core._nth.call(null,chunk__15298,i__15300);lt.plugins.elm_light.graph.get_package_json.call(null,x,cljs.core.partial.call(null,lt.plugins.elm_light.graph.add_edges_for_dep,this$,x));
{
var G__15373 = seq__15297;
var G__15374 = chunk__15298;
var G__15375 = count__15299;
var G__15376 = (i__15300 + 1);
seq__15297 = G__15373;
chunk__15298 = G__15374;
count__15299 = G__15375;
i__15300 = G__15376;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__15297);if(temp__4092__auto__)
{var seq__15297__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15297__$1))
{var c__5632__auto__ = cljs.core.chunk_first.call(null,seq__15297__$1);{
var G__15377 = cljs.core.chunk_rest.call(null,seq__15297__$1);
var G__15378 = c__5632__auto__;
var G__15379 = cljs.core.count.call(null,c__5632__auto__);
var G__15380 = 0;
seq__15297 = G__15377;
chunk__15298 = G__15378;
count__15299 = G__15379;
i__15300 = G__15380;
continue;
}
} else
{var x = cljs.core.first.call(null,seq__15297__$1);lt.plugins.elm_light.graph.get_package_json.call(null,x,cljs.core.partial.call(null,lt.plugins.elm_light.graph.add_edges_for_dep,this$,x));
{
var G__15381 = cljs.core.next.call(null,seq__15297__$1);
var G__15382 = null;
var G__15383 = 0;
var G__15384 = 0;
seq__15297 = G__15381;
chunk__15298 = G__15382;
count__15299 = G__15383;
i__15300 = G__15384;
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
lt.plugins.elm_light.graph.get_dependency_data = (function get_dependency_data(project_path){var pkgs = cljs.core.map.call(null,(function (p1__15302_SHARP_){return cljs.core.assoc.call(null,p1__15302_SHARP_,new cljs.core.Keyword(null,"summary","summary",3451231000),new cljs.core.Keyword(null,"summary","summary",3451231000).cljs$core$IFn$_invoke$arity$1(lt.plugins.elm_light.graph.find_package_by_name.call(null,lt.plugins.elm_light.graph.dependency_graph,new cljs.core.Keyword(null,"package","package",4501809080).cljs$core$IFn$_invoke$arity$1(p1__15302_SHARP_))));
}),cljs.core.map.call(null,(function (p1__15301_SHARP_){return clojure.set.rename_keys.call(null,p1__15301_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"exact","exact",1110851185),new cljs.core.Keyword(null,"version","version",1365512266)], null));
}),lt.plugins.elm_light.utils.get_project_deps.call(null,project_path)));var direct = cljs.core.filter.call(null,new cljs.core.Keyword(null,"range","range",1122184367),pkgs);var rootVersion = new cljs.core.Keyword(null,"version","version",1365512266).cljs$core$IFn$_invoke$arity$1(lt.plugins.elm_light.utils.parse_json_file.call(null,lt.objs.files.join.call(null,project_path,"elm-package.json")));var root = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"package","package",4501809080),lt.objs.files.basename.call(null,project_path),new cljs.core.Keyword(null,"version","version",1365512266),rootVersion,new cljs.core.Keyword(null,"shape","shape",1123304211),"ellipse"], null);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"packages","packages",1764771935),pkgs,new cljs.core.Keyword(null,"nodes","nodes",1118897699),cljs.core.conj.call(null,direct,root),new cljs.core.Keyword(null,"edges","edges",1110261192),cljs.core.map.call(null,((function (pkgs,direct,rootVersion,root){
return (function (p1__15303_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"label","label",1116631654)],[lt.plugins.elm_light.graph.dep_id.call(null,root),lt.plugins.elm_light.graph.dep_id.call(null,p1__15303_SHARP_),new cljs.core.Keyword(null,"range","range",1122184367).cljs$core$IFn$_invoke$arity$1(p1__15303_SHARP_)]);
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
return (function (p__15539){var vec__15540 = p__15539;var k = cljs.core.nth.call(null,vec__15540,0,null);var v = cljs.core.nth.call(null,vec__15540,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.elm_light.utils.nskw__GT_name.call(null,k),v], null);
});})(pkg_file))
,deps)),pkg);
});})(pkg_file))
)));
});
lt.plugins.elm_light.packages.project_wrapper = (function project_wrapper(this$){var e__6323__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.elm","div.elm",2686466363),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"project-packages-wrapper"], null),"Retrieving project package info..."], null)], null));var seq__15547_15562 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__15548_15563 = null;var count__15549_15564 = 0;var i__15550_15565 = 0;while(true){
if((i__15550_15565 < count__15549_15564))
{var vec__15551_15566 = cljs.core._nth.call(null,chunk__15548_15563,i__15550_15565);var ev__6324__auto___15567 = cljs.core.nth.call(null,vec__15551_15566,0,null);var func__6325__auto___15568 = cljs.core.nth.call(null,vec__15551_15566,1,null);lt.util.dom.on.call(null,e__6323__auto__,ev__6324__auto___15567,func__6325__auto___15568);
{
var G__15569 = seq__15547_15562;
var G__15570 = chunk__15548_15563;
var G__15571 = count__15549_15564;
var G__15572 = (i__15550_15565 + 1);
seq__15547_15562 = G__15569;
chunk__15548_15563 = G__15570;
count__15549_15564 = G__15571;
i__15550_15565 = G__15572;
continue;
}
} else
{var temp__4092__auto___15573 = cljs.core.seq.call(null,seq__15547_15562);if(temp__4092__auto___15573)
{var seq__15547_15574__$1 = temp__4092__auto___15573;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15547_15574__$1))
{var c__5632__auto___15575 = cljs.core.chunk_first.call(null,seq__15547_15574__$1);{
var G__15576 = cljs.core.chunk_rest.call(null,seq__15547_15574__$1);
var G__15577 = c__5632__auto___15575;
var G__15578 = cljs.core.count.call(null,c__5632__auto___15575);
var G__15579 = 0;
seq__15547_15562 = G__15576;
chunk__15548_15563 = G__15577;
count__15549_15564 = G__15578;
i__15550_15565 = G__15579;
continue;
}
} else
{var vec__15552_15580 = cljs.core.first.call(null,seq__15547_15574__$1);var ev__6324__auto___15581 = cljs.core.nth.call(null,vec__15552_15580,0,null);var func__6325__auto___15582 = cljs.core.nth.call(null,vec__15552_15580,1,null);lt.util.dom.on.call(null,e__6323__auto__,ev__6324__auto___15581,func__6325__auto___15582);
{
var G__15583 = cljs.core.next.call(null,seq__15547_15574__$1);
var G__15584 = null;
var G__15585 = 0;
var G__15586 = 0;
seq__15547_15562 = G__15583;
chunk__15548_15563 = G__15584;
count__15549_15564 = G__15585;
i__15550_15565 = G__15586;
continue;
}
}
} else
{}
}
break;
}
return e__6323__auto__;
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.packages","elm-packages","lt.plugins.elm-light.packages/elm-packages",4552372902),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elm.packages","elm.packages",3931311271),null], null), null),new cljs.core.Keyword(null,"label","label",1116631654),"Elm project packages",new cljs.core.Keyword(null,"name","name",1017277949),"Elm project packages",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){lt.plugins.elm_light.utils.fetch_all_packages.call(null,(function (p1__15553_SHARP_){return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"all-packages","all-packages",1123981067),p1__15553_SHARP_], null));
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
lt.plugins.elm_light.packages.idx_active = (function idx_active(items){return cljs.core.first.call(null,cljs.core.keep_indexed.call(null,(function (p1__15555_SHARP_,p2__15554_SHARP_){if(cljs.core.truth_(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(p2__15554_SHARP_)))
{return p1__15555_SHARP_;
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
lt.plugins.elm_light.packages.on_pkg_sel = (function on_pkg_sel(){var items_15587 = new cljs.core.Keyword(null,"ac-packages","ac-packages",1548109226).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.elm_light.packages.elm_packages));var temp__4090__auto___15588 = lt.plugins.elm_light.packages.idx_active.call(null,items_15587);if(cljs.core.truth_(temp__4090__auto___15588))
{var idx_15589 = temp__4090__auto___15588;lt.object.assoc_in_BANG_.call(null,lt.plugins.elm_light.packages.elm_packages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ac-versions","ac-versions",3107155800)], null),new cljs.core.Keyword(null,"versions","versions",3323818509).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,items_15587,idx_15589)));
lt.object.assoc_in_BANG_.call(null,lt.plugins.elm_light.packages.elm_packages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ac-version","ac-version",2051259807)], null),cljs.core.first.call(null,new cljs.core.Keyword(null,"versions","versions",3323818509).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,items_15587,idx_15589))));
lt.object.assoc_in_BANG_.call(null,lt.plugins.elm_light.packages.elm_packages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ac-package","ac-package",892589325)], null),new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,items_15587,idx_15589)));
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
return (function (p1__15556_SHARP_){if(cljs.core._EQ_.call(null,p1__15556_SHARP_,0))
{lt.objs.notifos.done_working.call(null);
} else
{lt.objs.notifos.set_msg_BANG_.call(null,"Error installing elm package",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),"error",new cljs.core.Keyword(null,"timeout","timeout",3994960083),5000], null));
}
lt.object.raise.call(null,lt.plugins.elm_light.packages.elm_packages,new cljs.core.Keyword(null,"elm.show.project.packages","elm.show.project.packages",3385102109),new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.elm_light.packages.elm_packages)));
return lt.object.raise.call(null,lt.plugins.elm_light.graph.dependency_graph,new cljs.core.Keyword(null,"elm.graph.show-dependencies","elm.graph.show-dependencies",3464547203),new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.elm_light.packages.elm_packages)),false);
});})(proc,args))
);
proc.stdout.on("data",((function (proc,args){
return (function (p1__15557_SHARP_){return lt.objs.notifos.msg_STAR_.call(null,[cljs.core.str("Package install: "),cljs.core.str(p1__15557_SHARP_)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"timeout","timeout",3994960083),5000], null));
});})(proc,args))
);
return proc.stderr.on("data",((function (proc,args){
return (function (p1__15558_SHARP_){return lt.objs.console.error.call(null,[cljs.core.str(p1__15558_SHARP_)].join(''));
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
lt.plugins.elm_light.packages.PackageRow = quiescent.component.call(null,(function (p__15559){var map__15560 = p__15559;var map__15560__$1 = ((cljs.core.seq_QMARK_.call(null,map__15560))?cljs.core.apply.call(null,cljs.core.hash_map,map__15560):map__15560);var on_browse = cljs.core.get.call(null,map__15560__$1,new cljs.core.Keyword(null,"on-browse","on-browse",587885994));var on_remove = cljs.core.get.call(null,map__15560__$1,new cljs.core.Keyword(null,"on-remove","on-remove",1033879460));var exact = cljs.core.get.call(null,map__15560__$1,new cljs.core.Keyword(null,"exact","exact",1110851185));var range = cljs.core.get.call(null,map__15560__$1,new cljs.core.Keyword(null,"range","range",1122184367));var package$ = cljs.core.get.call(null,map__15560__$1,new cljs.core.Keyword(null,"package","package",4501809080));return quiescent.dom.tr.call(null,cljs.core.PersistentArrayMap.EMPTY,quiescent.dom.td.call(null,cljs.core.PersistentArrayMap.EMPTY,(cljs.core.truth_((function (){var and__4872__auto__ = package$;if(cljs.core.truth_(and__4872__auto__))
{return exact;
} else
{return and__4872__auto__;
}
})())?quiescent.dom.span.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",1004015509),"link",new cljs.core.Keyword(null,"onClick","onClick",3956969051),((function (map__15560,map__15560__$1,on_browse,on_remove,exact,range,package$){
return (function (){return on_browse.call(null,package$,exact);
});})(map__15560,map__15560__$1,on_browse,on_remove,exact,range,package$))
], null),package$):package$)),quiescent.dom.td.call(null,cljs.core.PersistentArrayMap.EMPTY,range),quiescent.dom.td.call(null,cljs.core.PersistentArrayMap.EMPTY,exact),quiescent.dom.td.call(null,cljs.core.PersistentArrayMap.EMPTY,(cljs.core.truth_(range)?quiescent.dom.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",3956969051),((function (map__15560,map__15560__$1,on_browse,on_remove,exact,range,package$){
return (function (){return on_remove.call(null,package$);
});})(map__15560,map__15560__$1,on_browse,on_remove,exact,range,package$))
], null),"remove"):null)));
}));
/**
* 
*/
lt.plugins.elm_light.packages.PackageTable = quiescent.component.call(null,(function (props){return quiescent.dom.table.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",1004015509),"package-table"], null),quiescent.dom.thead.call(null,cljs.core.PersistentArrayMap.EMPTY,quiescent.dom.tr.call(null,cljs.core.PersistentArrayMap.EMPTY,quiescent.dom.th.call(null,cljs.core.PersistentArrayMap.EMPTY,"Package"),quiescent.dom.th.call(null,cljs.core.PersistentArrayMap.EMPTY,"Range"),quiescent.dom.th.call(null,cljs.core.PersistentArrayMap.EMPTY,"Exact"),quiescent.dom.th.call(null,cljs.core.PersistentArrayMap.EMPTY,""))),cljs.core.apply.call(null,quiescent.dom.tbody,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__15561_SHARP_){return lt.plugins.elm_light.packages.PackageRow.call(null,cljs.core.assoc.call(null,p1__15561_SHARP_,new cljs.core.Keyword(null,"on-remove","on-remove",1033879460),new cljs.core.Keyword(null,"on-remove","on-remove",1033879460).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"on-browse","on-browse",587885994),new cljs.core.Keyword(null,"on-browse","on-browse",587885994).cljs$core$IFn$_invoke$arity$1(props)));
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
var G__11554 = (line - 1);
line = G__11554;
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
var G__11555 = (line + 1);
line = G__11555;
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
var G__11556 = (line - 1);
line = G__11556;
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
return (function (p1__11181_SHARP_){return lt.plugins.elm_light.clients.on_elm_message.call(null,client,p1__11181_SHARP_);
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
lt.plugins.elm_light.clients.start_elm_client = (function start_elm_client(p__11182){var map__11184 = p__11182;var map__11184__$1 = ((cljs.core.seq_QMARK_.call(null,map__11184))?cljs.core.apply.call(null,cljs.core.hash_map,map__11184):map__11184);var props = map__11184__$1;var client = cljs.core.get.call(null,map__11184__$1,new cljs.core.Keyword(null,"client","client",3951159101));var proj_path = cljs.core.get.call(null,map__11184__$1,new cljs.core.Keyword(null,"proj-path","proj-path",4362692615));var path = cljs.core.get.call(null,map__11184__$1,new cljs.core.Keyword(null,"path","path",1017337751));lt.objs.notifos.working.call(null,"Connecting..");
return lt.plugins.elm_light.clients.claim_reactor_port.call(null,proj_path,((function (map__11184,map__11184__$1,props,client,proj_path,path){
return (function (_,port){var worker = lt.plugins.elm_light.clients.start_elm_worker.call(null,proj_path,port,client);lt.object.merge_BANG_.call(null,client,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1017277949),lt.objs.files.basename.call(null,proj_path),new cljs.core.Keyword(null,"dir","dir",1014003711),proj_path,new cljs.core.Keyword(null,"reactor-port","reactor-port",4649590590),port,new cljs.core.Keyword(null,"worker","worker",4526786288),worker,new cljs.core.Keyword(null,"commands","commands",4706336250),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"editor.elm.lint","editor.elm.lint",1086056222),null,new cljs.core.Keyword(null,"editor.elm.make","editor.elm.make",1086078217),null,new cljs.core.Keyword(null,"editor.eval.elm","editor.eval.elm",1083015975),null,new cljs.core.Keyword(null,"editor.elm.hint","editor.elm.hint",1085937058),null,new cljs.core.Keyword(null,"elm.repl.restart","elm.repl.restart",2931654218),null,new cljs.core.Keyword(null,"docs.elm.search","docs.elm.search",737241333),null,new cljs.core.Keyword(null,"editor.elm.doc","editor.elm.doc",1570413537),null], null), null)], null));
return lt.object.add_behavior_BANG_.call(null,client,new cljs.core.Keyword("lt.plugins.elm-light.clients","send!","lt.plugins.elm-light.clients/send!",867013595));
});})(map__11184,map__11184__$1,props,client,proj_path,path))
);
});
lt.plugins.elm_light.clients.try_connect = (function try_connect(p__11185){var map__11187 = p__11185;var map__11187__$1 = ((cljs.core.seq_QMARK_.call(null,map__11187))?cljs.core.apply.call(null,cljs.core.hash_map,map__11187):map__11187);var props = map__11187__$1;var info = cljs.core.get.call(null,map__11187__$1,new cljs.core.Keyword(null,"info","info",1017141280));var path = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(info);var proj_path = lt.plugins.elm_light.utils.project_path.call(null,path);var client = lt.objs.clients.client_BANG_.call(null,new cljs.core.Keyword(null,"elm-client","elm-client",1622336068));if(cljs.core.truth_(proj_path))
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
lt.plugins.elm_light.__GT_lt_range = (function __GT_lt_range(p__6420){var map__6422 = p__6420;var map__6422__$1 = ((cljs.core.seq_QMARK_.call(null,map__6422))?cljs.core.apply.call(null,cljs.core.hash_map,map__6422):map__6422);var end = cljs.core.get.call(null,map__6422__$1,new cljs.core.Keyword(null,"end","end",1014004813));var start = cljs.core.get.call(null,map__6422__$1,new cljs.core.Keyword(null,"start","start",1123661780));return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1017056028),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",1013907415),(new cljs.core.Keyword(null,"column","column",3954034376).cljs$core$IFn$_invoke$arity$1(start) - 1),new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(start) - 1)], null),new cljs.core.Keyword(null,"to","to",1013907949),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",1013907415),(new cljs.core.Keyword(null,"column","column",3954034376).cljs$core$IFn$_invoke$arity$1(end) - 1),new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(end) - 1)], null)], null);
});
lt.plugins.elm_light.display_make_results = (function display_make_results(ed,res,path){lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"clear-linter-results!","clear-linter-results!",4528495642));
if(cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__6423_SHARP_){return cljs.core._EQ_.call(null,"error",new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(p1__6423_SHARP_));
}),res)))
{lt.objs.notifos.set_msg_BANG_.call(null,"Elm make returned errors; check you editor or the console for details",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
} else
{}
var seq__6432 = cljs.core.seq.call(null,res);var chunk__6433 = null;var count__6434 = 0;var i__6435 = 0;while(true){
if((i__6435 < count__6434))
{var map__6436 = cljs.core._nth.call(null,chunk__6433,i__6435);var map__6436__$1 = ((cljs.core.seq_QMARK_.call(null,map__6436))?cljs.core.apply.call(null,cljs.core.hash_map,map__6436):map__6436);var tag = cljs.core.get.call(null,map__6436__$1,new cljs.core.Keyword(null,"tag","tag",1014018828));var subregion = cljs.core.get.call(null,map__6436__$1,new cljs.core.Keyword(null,"subregion","subregion",1501636774));var region = cljs.core.get.call(null,map__6436__$1,new cljs.core.Keyword(null,"region","region",4374076006));var details = cljs.core.get.call(null,map__6436__$1,new cljs.core.Keyword(null,"details","details",2571625908));var overview = cljs.core.get.call(null,map__6436__$1,new cljs.core.Keyword(null,"overview","overview",1544020203));var type = cljs.core.get.call(null,map__6436__$1,new cljs.core.Keyword(null,"type","type",1017479852));var file = cljs.core.get.call(null,map__6436__$1,new cljs.core.Keyword(null,"file","file",1017047278));var map__6437_6458 = lt.plugins.elm_light.__GT_lt_range.call(null,region);var map__6437_6459__$1 = ((cljs.core.seq_QMARK_.call(null,map__6437_6458))?cljs.core.apply.call(null,cljs.core.hash_map,map__6437_6458):map__6437_6458);var to_6460 = cljs.core.get.call(null,map__6437_6459__$1,new cljs.core.Keyword(null,"to","to",1013907949));var from_6461 = cljs.core.get.call(null,map__6437_6459__$1,new cljs.core.Keyword(null,"from","from",1017056028));var msg_6462 = [cljs.core.str(overview),cljs.core.str("\n"),cljs.core.str(lt.plugins.elm_light.colorize_msg.call(null,details))].join('');if((cljs.core._EQ_.call(null,path,file)) && (cljs.core._EQ_.call(null,type,"warning")))
{lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"linter-result!","linter-result!",4482067001),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",1124275658),tag,new cljs.core.Keyword(null,"details","details",2571625908),msg_6462,new cljs.core.Keyword(null,"category","category",1064415344),new cljs.core.Keyword(null,"warning","warning",2138350350),new cljs.core.Keyword(null,"code-range","code-range",3297446095),lt.plugins.elm_light.__GT_lt_range.call(null,(function (){var or__4884__auto__ = subregion;if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return region;
}
})())], null));
} else
{if((cljs.core._EQ_.call(null,path,file)) && (cljs.core._EQ_.call(null,type,"error")))
{lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"linter-result!","linter-result!",4482067001),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"titshle","titshle",4001834783),tag,new cljs.core.Keyword(null,"details","details",2571625908),msg_6462,new cljs.core.Keyword(null,"category","category",1064415344),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"code-range","code-range",3297446095),lt.plugins.elm_light.__GT_lt_range.call(null,(function (){var or__4884__auto__ = subregion;if(cljs.core.truth_(or__4884__auto__))
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
var G__6463 = seq__6432;
var G__6464 = chunk__6433;
var G__6465 = count__6434;
var G__6466 = (i__6435 + 1);
seq__6432 = G__6463;
chunk__6433 = G__6464;
count__6434 = G__6465;
i__6435 = G__6466;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__6432);if(temp__4092__auto__)
{var seq__6432__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6432__$1))
{var c__5632__auto__ = cljs.core.chunk_first.call(null,seq__6432__$1);{
var G__6467 = cljs.core.chunk_rest.call(null,seq__6432__$1);
var G__6468 = c__5632__auto__;
var G__6469 = cljs.core.count.call(null,c__5632__auto__);
var G__6470 = 0;
seq__6432 = G__6467;
chunk__6433 = G__6468;
count__6434 = G__6469;
i__6435 = G__6470;
continue;
}
} else
{var map__6438 = cljs.core.first.call(null,seq__6432__$1);var map__6438__$1 = ((cljs.core.seq_QMARK_.call(null,map__6438))?cljs.core.apply.call(null,cljs.core.hash_map,map__6438):map__6438);var tag = cljs.core.get.call(null,map__6438__$1,new cljs.core.Keyword(null,"tag","tag",1014018828));var subregion = cljs.core.get.call(null,map__6438__$1,new cljs.core.Keyword(null,"subregion","subregion",1501636774));var region = cljs.core.get.call(null,map__6438__$1,new cljs.core.Keyword(null,"region","region",4374076006));var details = cljs.core.get.call(null,map__6438__$1,new cljs.core.Keyword(null,"details","details",2571625908));var overview = cljs.core.get.call(null,map__6438__$1,new cljs.core.Keyword(null,"overview","overview",1544020203));var type = cljs.core.get.call(null,map__6438__$1,new cljs.core.Keyword(null,"type","type",1017479852));var file = cljs.core.get.call(null,map__6438__$1,new cljs.core.Keyword(null,"file","file",1017047278));var map__6439_6471 = lt.plugins.elm_light.__GT_lt_range.call(null,region);var map__6439_6472__$1 = ((cljs.core.seq_QMARK_.call(null,map__6439_6471))?cljs.core.apply.call(null,cljs.core.hash_map,map__6439_6471):map__6439_6471);var to_6473 = cljs.core.get.call(null,map__6439_6472__$1,new cljs.core.Keyword(null,"to","to",1013907949));var from_6474 = cljs.core.get.call(null,map__6439_6472__$1,new cljs.core.Keyword(null,"from","from",1017056028));var msg_6475 = [cljs.core.str(overview),cljs.core.str("\n"),cljs.core.str(lt.plugins.elm_light.colorize_msg.call(null,details))].join('');if((cljs.core._EQ_.call(null,path,file)) && (cljs.core._EQ_.call(null,type,"warning")))
{lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"linter-result!","linter-result!",4482067001),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",1124275658),tag,new cljs.core.Keyword(null,"details","details",2571625908),msg_6475,new cljs.core.Keyword(null,"category","category",1064415344),new cljs.core.Keyword(null,"warning","warning",2138350350),new cljs.core.Keyword(null,"code-range","code-range",3297446095),lt.plugins.elm_light.__GT_lt_range.call(null,(function (){var or__4884__auto__ = subregion;if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return region;
}
})())], null));
} else
{if((cljs.core._EQ_.call(null,path,file)) && (cljs.core._EQ_.call(null,type,"error")))
{lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"linter-result!","linter-result!",4482067001),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"titshle","titshle",4001834783),tag,new cljs.core.Keyword(null,"details","details",2571625908),msg_6475,new cljs.core.Keyword(null,"category","category",1064415344),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"code-range","code-range",3297446095),lt.plugins.elm_light.__GT_lt_range.call(null,(function (){var or__4884__auto__ = subregion;if(cljs.core.truth_(or__4884__auto__))
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
var G__6476 = cljs.core.next.call(null,seq__6432__$1);
var G__6477 = null;
var G__6478 = 0;
var G__6479 = 0;
seq__6432 = G__6476;
chunk__6433 = G__6477;
count__6434 = G__6478;
i__6435 = G__6479;
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
lt.plugins.elm_light.create_hints = (function create_hints(completions){return cljs.core.map.call(null,(function (p1__6440_SHARP_){return {"text": new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(p1__6440_SHARP_), "completion": new cljs.core.Keyword(null,"completion","completion",4767668046).cljs$core$IFn$_invoke$arity$1(p1__6440_SHARP_)};
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
lt.plugins.elm_light.__BEH__eval_BANG_ = (function __BEH__eval_BANG_(this$,event){var map__6442 = event;var map__6442__$1 = ((cljs.core.seq_QMARK_.call(null,map__6442))?cljs.core.apply.call(null,cljs.core.hash_map,map__6442):map__6442);var origin = cljs.core.get.call(null,map__6442__$1,new cljs.core.Keyword(null,"origin","origin",4300251800));var info = cljs.core.get.call(null,map__6442__$1,new cljs.core.Keyword(null,"info","info",1017141280));lt.objs.notifos.working.call(null,"Evaluating elm...");
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
lt.plugins.elm_light.__BEH__repl_restart_BANG_ = (function __BEH__repl_restart_BANG_(p__6443){var map__6445 = p__6443;var map__6445__$1 = ((cljs.core.seq_QMARK_.call(null,map__6445))?cljs.core.apply.call(null,cljs.core.hash_map,map__6445):map__6445);var ed = map__6445__$1;var info = cljs.core.get.call(null,map__6445__$1,new cljs.core.Keyword(null,"info","info",1017141280));var temp__4092__auto__ = new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));if(cljs.core.truth_(temp__4092__auto__))
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
var b_6480 = (function (){var or__4884__auto__ = cljs.core.first.call(null,lt.object.by_tag.call(null,new cljs.core.Keyword(null,"browser","browser",1164844698)));if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return lt.objs.browser.add.call(null);
}
})();var get_url_6481 = ((function (b_6480,path,client){
return (function (){return [cljs.core.str("http://localhost:"),cljs.core.str(new cljs.core.Keyword(null,"reactor-port","reactor-port",4649590590).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client))),cljs.core.str(path),cljs.core.str((cljs.core.truth_(debug_QMARK_)?"?debug":""))].join('');
});})(b_6480,path,client))
;if(cljs.core.truth_(new cljs.core.Keyword(null,"connected","connected",4729661051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client))))
{lt.object.raise.call(null,b_6480,new cljs.core.Keyword(null,"navigate!","navigate!",1766726722),get_url_6481.call(null));
} else
{lt.util.js.wait.call(null,100,((function (b_6480,get_url_6481,path,client){
return (function (){return lt.object.raise.call(null,b_6480,new cljs.core.Keyword(null,"navigate!","navigate!",1766726722),get_url_6481.call(null));
});})(b_6480,get_url_6481,path,client))
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
}catch (e6447){var e_6482 = e6447;lt.objs.notifos.set_msg_BANG_.call(null,"Elm format reported errors. See console for details",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),"error",new cljs.core.Keyword(null,"timeout","timeout",3994960083),5000], null));
lt.objs.console.error.call(null,e_6482.message);
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
lt.plugins.elm_light.linter.status_class = (function status_class(p__11346){var map__11348 = p__11346;var map__11348__$1 = ((cljs.core.seq_QMARK_.call(null,map__11348))?cljs.core.apply.call(null,cljs.core.hash_map,map__11348):map__11348);var warnings = cljs.core.get.call(null,map__11348__$1,new cljs.core.Keyword(null,"warnings","warnings",1511995337));var errors = cljs.core.get.call(null,map__11348__$1,new cljs.core.Keyword(null,"errors","errors",4014236381));if((errors > 0))
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
lt.plugins.elm_light.linter.status_text = (function status_text(p__11349){var map__11351 = p__11349;var map__11351__$1 = ((cljs.core.seq_QMARK_.call(null,map__11351))?cljs.core.apply.call(null,cljs.core.hash_map,map__11351):map__11351);var warnings = cljs.core.get.call(null,map__11351__$1,new cljs.core.Keyword(null,"warnings","warnings",1511995337));var errors = cljs.core.get.call(null,map__11351__$1,new cljs.core.Keyword(null,"errors","errors",4014236381));return [cljs.core.str("Lint status: "),cljs.core.str(errors),cljs.core.str("/"),cljs.core.str(warnings)].join('');
});
lt.plugins.elm_light.linter.__GT_status_ui = (function __GT_status_ui(p__11352){var map__11354 = p__11352;var map__11354__$1 = ((cljs.core.seq_QMARK_.call(null,map__11354))?cljs.core.apply.call(null,cljs.core.hash_map,map__11354):map__11354);var lint_summary = cljs.core.get.call(null,map__11354__$1,new cljs.core.Keyword(null,"lint-summary","lint-summary",2275048270));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("lint-status "),cljs.core.str(lt.plugins.elm_light.linter.status_class.call(null,lint_summary))].join('')], null),lt.plugins.elm_light.linter.status_text.call(null,lint_summary)], null);
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
return (function (p__11357){var vec__11358 = p__11357;var k = cljs.core.nth.call(null,vec__11358,0,null);var v = cljs.core.nth.call(null,vec__11358,1,null);return new cljs.core.PersistentArrayMap.fromArray([k,cljs.core.count.call(null,v)], true, false);
});})(results,temp__4090__auto__))
,cljs.core.group_by.call(null,new cljs.core.Keyword(null,"category","category",1064415344),cljs.core.map.call(null,new cljs.core.Keyword(null,"result","result",4374444943),cljs.core.vals.call(null,results)))));
} else
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",1110689146),0,new cljs.core.Keyword(null,"warning","warning",2138350350),0], null);
}
});
lt.plugins.elm_light.linter.update_status_for_editor = (function update_status_for_editor(ed){var map__11361 = lt.plugins.elm_light.linter.grouped_lint_count.call(null,ed);var map__11361__$1 = ((cljs.core.seq_QMARK_.call(null,map__11361))?cljs.core.apply.call(null,cljs.core.hash_map,map__11361):map__11361);var warning = cljs.core.get.call(null,map__11361__$1,new cljs.core.Keyword(null,"warning","warning",2138350350));var error = cljs.core.get.call(null,map__11361__$1,new cljs.core.Keyword(null,"error","error",1110689146));return lt.object.raise.call(null,lt.plugins.elm_light.linter.statusbar_lint_summary,new cljs.core.Keyword(null,"update!","update!",779473898),((function (map__11361,map__11361__$1,warning,error){
return (function (p1__11359_SHARP_){return cljs.core.assoc.call(null,p1__11359_SHARP_,new cljs.core.Keyword(null,"warnings","warnings",1511995337),(function (){var or__4884__auto__ = warning;if(cljs.core.truth_(or__4884__auto__))
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
});})(map__11361,map__11361__$1,warning,error))
);
});
lt.plugins.elm_light.linter.__BEH__update_linter_on_editor_change = (function __BEH__update_linter_on_editor_change(ed){return lt.plugins.elm_light.linter.update_status_for_editor.call(null,ed);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.linter","update-linter-on-editor-change","lt.plugins.elm-light.linter/update-linter-on-editor-change",2858337088),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.linter.__BEH__update_linter_on_editor_change,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"focus","focus",1111509066),null], null), null));
lt.plugins.elm_light.linter.remove_widget = (function remove_widget(ed,el){try{lt.util.dom.remove.call(null,el);
}catch (e11363){var e_11416 = e11363;}return lt.objs.editor.focus.call(null,ed);
});
lt.plugins.elm_light.linter.inline_ui = (function inline_ui(ed,p__11366){var map__11374 = p__11366;var map__11374__$1 = ((cljs.core.seq_QMARK_.call(null,map__11374))?cljs.core.apply.call(null,cljs.core.hash_map,map__11374):map__11374);var category = cljs.core.get.call(null,map__11374__$1,new cljs.core.Keyword(null,"category","category",1064415344));var details = cljs.core.get.call(null,map__11374__$1,new cljs.core.Keyword(null,"details","details",2571625908));var title = cljs.core.get.call(null,map__11374__$1,new cljs.core.Keyword(null,"title","title",1124275658));var e__6323__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tabindex","tabindex",4410954191),-1,new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("linter-res "),cljs.core.str((function (){var or__4884__auto__ = cljs.core.name.call(null,category);if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return "error";
}
})())].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.title","p.title",3057381068),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.details","div.details",4139669847),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),details], null)], null)], null));var seq__11375_11417 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blur","blur",1016931289),((function (e__6323__auto__,map__11374,map__11374__$1,category,details,title){
return (function (p1__11364_SHARP_){return lt.plugins.elm_light.linter.remove_widget.call(null,ed,p1__11364_SHARP_.target);
});})(e__6323__auto__,map__11374,map__11374__$1,category,details,title))
,new cljs.core.Keyword(null,"keydown","keydown",4493897459),((function (e__6323__auto__,map__11374,map__11374__$1,category,details,title){
return (function (p1__11365_SHARP_){var kc = p1__11365_SHARP_.keyCode;if(cljs.core._EQ_.call(null,kc,27))
{return lt.plugins.elm_light.linter.remove_widget.call(null,ed,p1__11365_SHARP_.target);
} else
{return null;
}
});})(e__6323__auto__,map__11374,map__11374__$1,category,details,title))
], null)));var chunk__11376_11418 = null;var count__11377_11419 = 0;var i__11378_11420 = 0;while(true){
if((i__11378_11420 < count__11377_11419))
{var vec__11379_11421 = cljs.core._nth.call(null,chunk__11376_11418,i__11378_11420);var ev__6324__auto___11422 = cljs.core.nth.call(null,vec__11379_11421,0,null);var func__6325__auto___11423 = cljs.core.nth.call(null,vec__11379_11421,1,null);lt.util.dom.on.call(null,e__6323__auto__,ev__6324__auto___11422,func__6325__auto___11423);
{
var G__11424 = seq__11375_11417;
var G__11425 = chunk__11376_11418;
var G__11426 = count__11377_11419;
var G__11427 = (i__11378_11420 + 1);
seq__11375_11417 = G__11424;
chunk__11376_11418 = G__11425;
count__11377_11419 = G__11426;
i__11378_11420 = G__11427;
continue;
}
} else
{var temp__4092__auto___11428 = cljs.core.seq.call(null,seq__11375_11417);if(temp__4092__auto___11428)
{var seq__11375_11429__$1 = temp__4092__auto___11428;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11375_11429__$1))
{var c__5632__auto___11430 = cljs.core.chunk_first.call(null,seq__11375_11429__$1);{
var G__11431 = cljs.core.chunk_rest.call(null,seq__11375_11429__$1);
var G__11432 = c__5632__auto___11430;
var G__11433 = cljs.core.count.call(null,c__5632__auto___11430);
var G__11434 = 0;
seq__11375_11417 = G__11431;
chunk__11376_11418 = G__11432;
count__11377_11419 = G__11433;
i__11378_11420 = G__11434;
continue;
}
} else
{var vec__11380_11435 = cljs.core.first.call(null,seq__11375_11429__$1);var ev__6324__auto___11436 = cljs.core.nth.call(null,vec__11380_11435,0,null);var func__6325__auto___11437 = cljs.core.nth.call(null,vec__11380_11435,1,null);lt.util.dom.on.call(null,e__6323__auto__,ev__6324__auto___11436,func__6325__auto___11437);
{
var G__11438 = cljs.core.next.call(null,seq__11375_11429__$1);
var G__11439 = null;
var G__11440 = 0;
var G__11441 = 0;
seq__11375_11417 = G__11438;
chunk__11376_11418 = G__11439;
count__11377_11419 = G__11440;
i__11378_11420 = G__11441;
continue;
}
}
} else
{}
}
break;
}
return e__6323__auto__;
});
lt.plugins.elm_light.linter.add_widget = (function add_widget(ed,res_id){var map__11382 = cljs.core.get_in.call(null,cljs.core.deref.call(null,ed),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linter-results","linter-results",4482067083),res_id], null));var map__11382__$1 = ((cljs.core.seq_QMARK_.call(null,map__11382))?cljs.core.apply.call(null,cljs.core.hash_map,map__11382):map__11382);var result = cljs.core.get.call(null,map__11382__$1,new cljs.core.Keyword(null,"result","result",4374444943));var mark = cljs.core.get.call(null,map__11382__$1,new cljs.core.Keyword(null,"mark","mark",1017248319));var ui = lt.plugins.elm_light.linter.inline_ui.call(null,ed,result);lt.objs.editor.__GT_cm_ed.call(null,ed).addWidget(mark.find().from,ui,{"scrollIntoView": true});
return lt.util.dom.focus.call(null,ui);
});
lt.plugins.elm_light.linter.create_mark = (function create_mark(ed,p__11383){var map__11385 = p__11383;var map__11385__$1 = ((cljs.core.seq_QMARK_.call(null,map__11385))?cljs.core.apply.call(null,cljs.core.hash_map,map__11385):map__11385);var code_range = cljs.core.get.call(null,map__11385__$1,new cljs.core.Keyword(null,"code-range","code-range",3297446095));var category = cljs.core.get.call(null,map__11385__$1,new cljs.core.Keyword(null,"category","category",1064415344));var from = new cljs.core.Keyword(null,"from","from",1017056028).cljs$core$IFn$_invoke$arity$1(code_range);var to = ((!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"to","to",1013907949).cljs$core$IFn$_invoke$arity$1(code_range),from)))?new cljs.core.Keyword(null,"to","to",1013907949).cljs$core$IFn$_invoke$arity$1(code_range):cljs.core.assoc.call(null,from,new cljs.core.Keyword(null,"ch","ch",1013907415),(lt.objs.editor.line_length.call(null,ed,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(from)) - 1)));return lt.objs.editor.mark.call(null,ed,from,to,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",1004015509),[cljs.core.str("lint-"),cljs.core.str((function (){var or__4884__auto__ = cljs.core.name.call(null,category);if(cljs.core.truth_(or__4884__auto__))
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
lt.plugins.elm_light.linter.__BEH__clear_linter_results_BANG_ = (function __BEH__clear_linter_results_BANG_(ed){var seq__11392_11442 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"linter-results","linter-results",4482067083).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));var chunk__11393_11443 = null;var count__11394_11444 = 0;var i__11395_11445 = 0;while(true){
if((i__11395_11445 < count__11394_11444))
{var vec__11396_11446 = cljs.core._nth.call(null,chunk__11393_11443,i__11395_11445);var id_11447 = cljs.core.nth.call(null,vec__11396_11446,0,null);var res_11448 = cljs.core.nth.call(null,vec__11396_11446,1,null);var temp__4092__auto___11449 = new cljs.core.Keyword(null,"mark","mark",1017248319).cljs$core$IFn$_invoke$arity$1(res_11448);if(cljs.core.truth_(temp__4092__auto___11449))
{var m_11450 = temp__4092__auto___11449;m_11450.clear();
} else
{}
var temp__4092__auto___11451 = new cljs.core.Keyword(null,"widget","widget",4520824246).cljs$core$IFn$_invoke$arity$1(res_11448);if(cljs.core.truth_(temp__4092__auto___11451))
{var w_11452 = temp__4092__auto___11451;lt.util.dom.remove.call(null,w_11452);
} else
{}
{
var G__11453 = seq__11392_11442;
var G__11454 = chunk__11393_11443;
var G__11455 = count__11394_11444;
var G__11456 = (i__11395_11445 + 1);
seq__11392_11442 = G__11453;
chunk__11393_11443 = G__11454;
count__11394_11444 = G__11455;
i__11395_11445 = G__11456;
continue;
}
} else
{var temp__4092__auto___11457 = cljs.core.seq.call(null,seq__11392_11442);if(temp__4092__auto___11457)
{var seq__11392_11458__$1 = temp__4092__auto___11457;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11392_11458__$1))
{var c__5632__auto___11459 = cljs.core.chunk_first.call(null,seq__11392_11458__$1);{
var G__11460 = cljs.core.chunk_rest.call(null,seq__11392_11458__$1);
var G__11461 = c__5632__auto___11459;
var G__11462 = cljs.core.count.call(null,c__5632__auto___11459);
var G__11463 = 0;
seq__11392_11442 = G__11460;
chunk__11393_11443 = G__11461;
count__11394_11444 = G__11462;
i__11395_11445 = G__11463;
continue;
}
} else
{var vec__11397_11464 = cljs.core.first.call(null,seq__11392_11458__$1);var id_11465 = cljs.core.nth.call(null,vec__11397_11464,0,null);var res_11466 = cljs.core.nth.call(null,vec__11397_11464,1,null);var temp__4092__auto___11467__$1 = new cljs.core.Keyword(null,"mark","mark",1017248319).cljs$core$IFn$_invoke$arity$1(res_11466);if(cljs.core.truth_(temp__4092__auto___11467__$1))
{var m_11468 = temp__4092__auto___11467__$1;m_11468.clear();
} else
{}
var temp__4092__auto___11469__$1 = new cljs.core.Keyword(null,"widget","widget",4520824246).cljs$core$IFn$_invoke$arity$1(res_11466);if(cljs.core.truth_(temp__4092__auto___11469__$1))
{var w_11470 = temp__4092__auto___11469__$1;lt.util.dom.remove.call(null,w_11470);
} else
{}
{
var G__11471 = cljs.core.next.call(null,seq__11392_11458__$1);
var G__11472 = null;
var G__11473 = 0;
var G__11474 = 0;
seq__11392_11442 = G__11471;
chunk__11393_11443 = G__11472;
count__11394_11444 = G__11473;
i__11395_11445 = G__11474;
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
lt.plugins.elm_light.linter.find_current_lint_mark = (function find_current_lint_mark(ed){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__11398_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"linter","linter",4206213986),p1__11398_SHARP_.lttype);
}),lt.objs.editor.find_marks.call(null,ed,lt.objs.editor.__GT_cursor.call(null,ed))));
});
lt.plugins.elm_light.linter.get_widget_by_mark = (function get_widget_by_mark(ed,mark){return cljs.core.get_in.call(null,cljs.core.deref.call(null,ed),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linter-results","linter-results",4482067083),mark.ltlintid,new cljs.core.Keyword(null,"widget","widget",4520824246)], null));
});
lt.plugins.elm_light.linter.mark__GT_pos = (function mark__GT_pos(mark){var cm_pos = mark.find().from;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",1013907415),cm_pos.ch,new cljs.core.Keyword(null,"line","line",1017226086),cm_pos.line], null);
});
lt.plugins.elm_light.linter.get_all_lint_marks = (function get_all_lint_marks(ed){return cljs.core.sort_by.call(null,(function (p1__11400_SHARP_){return cljs.core.juxt.call(null,new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"ch","ch",1013907415)).call(null,lt.plugins.elm_light.linter.mark__GT_pos.call(null,p1__11400_SHARP_));
}),cljs.core.filter.call(null,(function (p1__11399_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"linter","linter",4206213986),p1__11399_SHARP_.lttype);
}),lt.objs.editor.__GT_cm_ed.call(null,ed).getAllMarks()));
});
lt.plugins.elm_light.linter.split_with_mark = (function split_with_mark(ed){var all_marks = lt.plugins.elm_light.linter.get_all_lint_marks.call(null,ed);var curr_mark = lt.plugins.elm_light.linter.find_current_lint_mark.call(null,ed);return cljs.core.split_with.call(null,((function (all_marks,curr_mark){
return (function (p1__11401_SHARP_){return !(cljs.core._EQ_.call(null,(cljs.core.truth_(curr_mark)?curr_mark.ltlintid:null),p1__11401_SHARP_.ltlintid));
});})(all_marks,curr_mark))
,all_marks);
});
lt.plugins.elm_light.linter.find_next_mark = (function find_next_mark(ed){var vec__11403 = lt.plugins.elm_light.linter.split_with_mark.call(null,ed);var ms1 = cljs.core.nth.call(null,vec__11403,0,null);var ms2 = cljs.core.nth.call(null,vec__11403,1,null);return cljs.core.first.call(null,cljs.core.into.call(null,cljs.core.vec.call(null,cljs.core.drop.call(null,1,ms2)),ms1));
});
lt.plugins.elm_light.linter.find_prev_mark = (function find_prev_mark(ed){var vec__11405 = lt.plugins.elm_light.linter.split_with_mark.call(null,ed);var ms1 = cljs.core.nth.call(null,vec__11405,0,null);var ms2 = cljs.core.nth.call(null,vec__11405,1,null);return cljs.core.first.call(null,cljs.core.into.call(null,cljs.core.reverse.call(null,cljs.core.drop.call(null,1,ms2)),ms1));
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
lt.plugins.elm_light.test.deps__GT_named = (function deps__GT_named(deps){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__11559){var vec__11560 = p__11559;var k = cljs.core.nth.call(null,vec__11560,0,null);var v = cljs.core.nth.call(null,vec__11560,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.elm_light.utils.nskw__GT_name.call(null,k),v], null);
}),deps));
});
lt.plugins.elm_light.test.__GT_test_config = (function __GT_test_config(project_cfg){return cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.assoc.call(null,cljs.core.update_in.call(null,project_cfg,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-directories","source-directories",4475397259)], null),lt.plugins.elm_light.test.__GT_test_src_dirs),new cljs.core.Keyword(null,"exposed-modules","exposed-modules",4185867084),cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependencies","dependencies",1517678747)], null),(function (p1__11561_SHARP_){return cljs.core.merge.call(null,p1__11561_SHARP_,lt.plugins.elm_light.test.default_test_deps);
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
return (function (p1__11562_SHARP_){return cljs.core.println.call(null,[cljs.core.str("Test package install: "),cljs.core.str(p1__11562_SHARP_)].join(''));
});})(args,proc))
);
proc.stderr.on("data",((function (args,proc){
return (function (p1__11563_SHARP_){return lt.objs.console.error.call(null,[cljs.core.str(p1__11563_SHARP_)].join(''));
});})(args,proc))
);
proc.on("exit",((function (args,proc){
return (function (p1__11564_SHARP_){if(cljs.core._EQ_.call(null,p1__11564_SHARP_,0))
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