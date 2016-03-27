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
{var o = (function (){var obj11145 = {};return obj11145;
})();var seq__11146_11159 = cljs.core.seq.call(null,obj);var chunk__11147_11160 = null;var count__11148_11161 = 0;var i__11149_11162 = 0;while(true){
if((i__11149_11162 < count__11148_11161))
{var vec__11150_11163 = cljs.core._nth.call(null,chunk__11147_11160,i__11149_11162);var k_11164 = cljs.core.nth.call(null,vec__11150_11163,0,null);var v_11165 = cljs.core.nth.call(null,vec__11150_11163,1,null);(o[cljs.core.name.call(null,k_11164)] = js_props.call(null,v_11165));
{
var G__11166 = seq__11146_11159;
var G__11167 = chunk__11147_11160;
var G__11168 = count__11148_11161;
var G__11169 = (i__11149_11162 + 1);
seq__11146_11159 = G__11166;
chunk__11147_11160 = G__11167;
count__11148_11161 = G__11168;
i__11149_11162 = G__11169;
continue;
}
} else
{var temp__4092__auto___11170 = cljs.core.seq.call(null,seq__11146_11159);if(temp__4092__auto___11170)
{var seq__11146_11171__$1 = temp__4092__auto___11170;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11146_11171__$1))
{var c__5632__auto___11172 = cljs.core.chunk_first.call(null,seq__11146_11171__$1);{
var G__11173 = cljs.core.chunk_rest.call(null,seq__11146_11171__$1);
var G__11174 = c__5632__auto___11172;
var G__11175 = cljs.core.count.call(null,c__5632__auto___11172);
var G__11176 = 0;
seq__11146_11159 = G__11173;
chunk__11147_11160 = G__11174;
count__11148_11161 = G__11175;
i__11149_11162 = G__11176;
continue;
}
} else
{var vec__11151_11177 = cljs.core.first.call(null,seq__11146_11171__$1);var k_11178 = cljs.core.nth.call(null,vec__11151_11177,0,null);var v_11179 = cljs.core.nth.call(null,vec__11151_11177,1,null);(o[cljs.core.name.call(null,k_11178)] = js_props.call(null,v_11179));
{
var G__11180 = cljs.core.next.call(null,seq__11146_11171__$1);
var G__11181 = null;
var G__11182 = 0;
var G__11183 = 0;
seq__11146_11159 = G__11180;
chunk__11147_11160 = G__11181;
count__11148_11161 = G__11182;
i__11149_11162 = G__11183;
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
quiescent.component = (function component(renderer){var react_component = React.createClass({"render": (function (){var this$ = this;var _STAR_component_STAR_11153 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return cljs.core.apply.call(null,renderer,(this$.props["value"]),(this$.props["statics"]));
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11153;
}}), "shouldComponentUpdate": (function (next_props,_){var this$ = this;return cljs.core.not_EQ_.call(null,(this$.props["value"]),(next_props["value"]));
})});return ((function (react_component){
return (function() { 
var G__11184__delegate = function (value,static_args){return react_component.call(null,{"statics": static_args, "value": value});
};
var G__11184 = function (value,var_args){
var static_args = null;if (arguments.length > 1) {
  static_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__11184__delegate.call(this,value,static_args);};
G__11184.cljs$lang$maxFixedArity = 1;
G__11184.cljs$lang$applyTo = (function (arglist__11185){
var value = cljs.core.first(arglist__11185);
var static_args = cljs.core.rest(arglist__11185);
return G__11184__delegate(value,static_args);
});
G__11184.cljs$core$IFn$_invoke$arity$variadic = G__11184__delegate;
return G__11184;
})()
;
;})(react_component))
});
/**
* Wrapper component used to mix-in lifecycle access
*/
quiescent.WrapperComponent = React.createClass({"componentWillUnmount": (function (){var this$ = this;var temp__4092__auto__ = (this$.props["onWillUnmount"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_11158 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null);
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11158;
}} else
{return null;
}
}), "componentWillUpdate": (function (_,___$1){var this$ = this;var temp__4092__auto__ = (this$.props["onWillUpdate"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_11157 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null);
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11157;
}} else
{return null;
}
}), "componentWillMount": (function (){var this$ = this;var temp__4092__auto__ = (this$.props["onWillMount"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_11156 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null);
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11156;
}} else
{return null;
}
}), "componentDidMount": (function (){var this$ = this;var temp__4092__auto__ = (this$.props["onMount"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_11155 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null,this$.getDOMNode());
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11155;
}} else
{return null;
}
}), "componentDidUpdate": (function (prev_props,prev_state){var this$ = this;var temp__4092__auto__ = (this$.props["onUpdate"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_11154 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null,this$.getDOMNode());
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11154;
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
var wrapper__delegate = function (child,kvs){var props = quiescent.js_props.call(null,cljs.core.apply.call(null,cljs.core.array_map,new cljs.core.Keyword(null,"wrappee","wrappee",2609412088),child,kvs));var temp__4092__auto___11186 = (child.props["key"]);if(cljs.core.truth_(temp__4092__auto___11186))
{var key_11187 = temp__4092__auto___11186;(props["key"] = key_11187);
} else
{}
return quiescent.WrapperComponent.call(null,props);
};
var wrapper = function (child,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrapper__delegate.call(this,child,kvs);};
wrapper.cljs$lang$maxFixedArity = 1;
wrapper.cljs$lang$applyTo = (function (arglist__11188){
var child = cljs.core.first(arglist__11188);
var kvs = cljs.core.rest(arglist__11188);
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
var a__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__7570_8518 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__7571_8519 = null;var count__7572_8520 = 0;var i__7573_8521 = 0;while(true){
if((i__7573_8521 < count__7572_8520))
{var arg__6570__auto___8522 = cljs.core._nth.call(null,chunk__7571_8519,i__7573_8521);a__6569__auto__.push(arg__6570__auto___8522);
{
var G__8523 = seq__7570_8518;
var G__8524 = chunk__7571_8519;
var G__8525 = count__7572_8520;
var G__8526 = (i__7573_8521 + 1);
seq__7570_8518 = G__8523;
chunk__7571_8519 = G__8524;
count__7572_8520 = G__8525;
i__7573_8521 = G__8526;
continue;
}
} else
{var temp__4092__auto___8527 = cljs.core.seq.call(null,seq__7570_8518);if(temp__4092__auto___8527)
{var seq__7570_8528__$1 = temp__4092__auto___8527;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7570_8528__$1))
{var c__5632__auto___8529 = cljs.core.chunk_first.call(null,seq__7570_8528__$1);{
var G__8530 = cljs.core.chunk_rest.call(null,seq__7570_8528__$1);
var G__8531 = c__5632__auto___8529;
var G__8532 = cljs.core.count.call(null,c__5632__auto___8529);
var G__8533 = 0;
seq__7570_8518 = G__8530;
chunk__7571_8519 = G__8531;
count__7572_8520 = G__8532;
i__7573_8521 = G__8533;
continue;
}
} else
{var arg__6570__auto___8534 = cljs.core.first.call(null,seq__7570_8528__$1);a__6569__auto__.push(arg__6570__auto___8534);
{
var G__8535 = cljs.core.next.call(null,seq__7570_8528__$1);
var G__8536 = null;
var G__8537 = 0;
var G__8538 = 0;
seq__7570_8518 = G__8535;
chunk__7571_8519 = G__8536;
count__7572_8520 = G__8537;
i__7573_8521 = G__8538;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.a.apply(null,a__6569__auto__);
};
var a = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return a__delegate.call(this,args__6568__auto__);};
a.cljs$lang$maxFixedArity = 0;
a.cljs$lang$applyTo = (function (arglist__8539){
var args__6568__auto__ = cljs.core.seq(arglist__8539);
return a__delegate(args__6568__auto__);
});
a.cljs$core$IFn$_invoke$arity$variadic = a__delegate;
return a;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.abbr = (function() { 
var abbr__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__7578_8540 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__7579_8541 = null;var count__7580_8542 = 0;var i__7581_8543 = 0;while(true){
if((i__7581_8543 < count__7580_8542))
{var arg__6570__auto___8544 = cljs.core._nth.call(null,chunk__7579_8541,i__7581_8543);a__6569__auto__.push(arg__6570__auto___8544);
{
var G__8545 = seq__7578_8540;
var G__8546 = chunk__7579_8541;
var G__8547 = count__7580_8542;
var G__8548 = (i__7581_8543 + 1);
seq__7578_8540 = G__8545;
chunk__7579_8541 = G__8546;
count__7580_8542 = G__8547;
i__7581_8543 = G__8548;
continue;
}
} else
{var temp__4092__auto___8549 = cljs.core.seq.call(null,seq__7578_8540);if(temp__4092__auto___8549)
{var seq__7578_8550__$1 = temp__4092__auto___8549;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7578_8550__$1))
{var c__5632__auto___8551 = cljs.core.chunk_first.call(null,seq__7578_8550__$1);{
var G__8552 = cljs.core.chunk_rest.call(null,seq__7578_8550__$1);
var G__8553 = c__5632__auto___8551;
var G__8554 = cljs.core.count.call(null,c__5632__auto___8551);
var G__8555 = 0;
seq__7578_8540 = G__8552;
chunk__7579_8541 = G__8553;
count__7580_8542 = G__8554;
i__7581_8543 = G__8555;
continue;
}
} else
{var arg__6570__auto___8556 = cljs.core.first.call(null,seq__7578_8550__$1);a__6569__auto__.push(arg__6570__auto___8556);
{
var G__8557 = cljs.core.next.call(null,seq__7578_8550__$1);
var G__8558 = null;
var G__8559 = 0;
var G__8560 = 0;
seq__7578_8540 = G__8557;
chunk__7579_8541 = G__8558;
count__7580_8542 = G__8559;
i__7581_8543 = G__8560;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.abbr.apply(null,a__6569__auto__);
};
var abbr = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return abbr__delegate.call(this,args__6568__auto__);};
abbr.cljs$lang$maxFixedArity = 0;
abbr.cljs$lang$applyTo = (function (arglist__8561){
var args__6568__auto__ = cljs.core.seq(arglist__8561);
return abbr__delegate(args__6568__auto__);
});
abbr.cljs$core$IFn$_invoke$arity$variadic = abbr__delegate;
return abbr;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.address = (function() { 
var address__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__7586_8562 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__7587_8563 = null;var count__7588_8564 = 0;var i__7589_8565 = 0;while(true){
if((i__7589_8565 < count__7588_8564))
{var arg__6570__auto___8566 = cljs.core._nth.call(null,chunk__7587_8563,i__7589_8565);a__6569__auto__.push(arg__6570__auto___8566);
{
var G__8567 = seq__7586_8562;
var G__8568 = chunk__7587_8563;
var G__8569 = count__7588_8564;
var G__8570 = (i__7589_8565 + 1);
seq__7586_8562 = G__8567;
chunk__7587_8563 = G__8568;
count__7588_8564 = G__8569;
i__7589_8565 = G__8570;
continue;
}
} else
{var temp__4092__auto___8571 = cljs.core.seq.call(null,seq__7586_8562);if(temp__4092__auto___8571)
{var seq__7586_8572__$1 = temp__4092__auto___8571;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7586_8572__$1))
{var c__5632__auto___8573 = cljs.core.chunk_first.call(null,seq__7586_8572__$1);{
var G__8574 = cljs.core.chunk_rest.call(null,seq__7586_8572__$1);
var G__8575 = c__5632__auto___8573;
var G__8576 = cljs.core.count.call(null,c__5632__auto___8573);
var G__8577 = 0;
seq__7586_8562 = G__8574;
chunk__7587_8563 = G__8575;
count__7588_8564 = G__8576;
i__7589_8565 = G__8577;
continue;
}
} else
{var arg__6570__auto___8578 = cljs.core.first.call(null,seq__7586_8572__$1);a__6569__auto__.push(arg__6570__auto___8578);
{
var G__8579 = cljs.core.next.call(null,seq__7586_8572__$1);
var G__8580 = null;
var G__8581 = 0;
var G__8582 = 0;
seq__7586_8562 = G__8579;
chunk__7587_8563 = G__8580;
count__7588_8564 = G__8581;
i__7589_8565 = G__8582;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.address.apply(null,a__6569__auto__);
};
var address = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return address__delegate.call(this,args__6568__auto__);};
address.cljs$lang$maxFixedArity = 0;
address.cljs$lang$applyTo = (function (arglist__8583){
var args__6568__auto__ = cljs.core.seq(arglist__8583);
return address__delegate(args__6568__auto__);
});
address.cljs$core$IFn$_invoke$arity$variadic = address__delegate;
return address;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.area = (function() { 
var area__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__7594_8584 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__7595_8585 = null;var count__7596_8586 = 0;var i__7597_8587 = 0;while(true){
if((i__7597_8587 < count__7596_8586))
{var arg__6570__auto___8588 = cljs.core._nth.call(null,chunk__7595_8585,i__7597_8587);a__6569__auto__.push(arg__6570__auto___8588);
{
var G__8589 = seq__7594_8584;
var G__8590 = chunk__7595_8585;
var G__8591 = count__7596_8586;
var G__8592 = (i__7597_8587 + 1);
seq__7594_8584 = G__8589;
chunk__7595_8585 = G__8590;
count__7596_8586 = G__8591;
i__7597_8587 = G__8592;
continue;
}
} else
{var temp__4092__auto___8593 = cljs.core.seq.call(null,seq__7594_8584);if(temp__4092__auto___8593)
{var seq__7594_8594__$1 = temp__4092__auto___8593;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7594_8594__$1))
{var c__5632__auto___8595 = cljs.core.chunk_first.call(null,seq__7594_8594__$1);{
var G__8596 = cljs.core.chunk_rest.call(null,seq__7594_8594__$1);
var G__8597 = c__5632__auto___8595;
var G__8598 = cljs.core.count.call(null,c__5632__auto___8595);
var G__8599 = 0;
seq__7594_8584 = G__8596;
chunk__7595_8585 = G__8597;
count__7596_8586 = G__8598;
i__7597_8587 = G__8599;
continue;
}
} else
{var arg__6570__auto___8600 = cljs.core.first.call(null,seq__7594_8594__$1);a__6569__auto__.push(arg__6570__auto___8600);
{
var G__8601 = cljs.core.next.call(null,seq__7594_8594__$1);
var G__8602 = null;
var G__8603 = 0;
var G__8604 = 0;
seq__7594_8584 = G__8601;
chunk__7595_8585 = G__8602;
count__7596_8586 = G__8603;
i__7597_8587 = G__8604;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.area.apply(null,a__6569__auto__);
};
var area = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return area__delegate.call(this,args__6568__auto__);};
area.cljs$lang$maxFixedArity = 0;
area.cljs$lang$applyTo = (function (arglist__8605){
var args__6568__auto__ = cljs.core.seq(arglist__8605);
return area__delegate(args__6568__auto__);
});
area.cljs$core$IFn$_invoke$arity$variadic = area__delegate;
return area;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.article = (function() { 
var article__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__7602_8606 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__7603_8607 = null;var count__7604_8608 = 0;var i__7605_8609 = 0;while(true){
if((i__7605_8609 < count__7604_8608))
{var arg__6570__auto___8610 = cljs.core._nth.call(null,chunk__7603_8607,i__7605_8609);a__6569__auto__.push(arg__6570__auto___8610);
{
var G__8611 = seq__7602_8606;
var G__8612 = chunk__7603_8607;
var G__8613 = count__7604_8608;
var G__8614 = (i__7605_8609 + 1);
seq__7602_8606 = G__8611;
chunk__7603_8607 = G__8612;
count__7604_8608 = G__8613;
i__7605_8609 = G__8614;
continue;
}
} else
{var temp__4092__auto___8615 = cljs.core.seq.call(null,seq__7602_8606);if(temp__4092__auto___8615)
{var seq__7602_8616__$1 = temp__4092__auto___8615;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7602_8616__$1))
{var c__5632__auto___8617 = cljs.core.chunk_first.call(null,seq__7602_8616__$1);{
var G__8618 = cljs.core.chunk_rest.call(null,seq__7602_8616__$1);
var G__8619 = c__5632__auto___8617;
var G__8620 = cljs.core.count.call(null,c__5632__auto___8617);
var G__8621 = 0;
seq__7602_8606 = G__8618;
chunk__7603_8607 = G__8619;
count__7604_8608 = G__8620;
i__7605_8609 = G__8621;
continue;
}
} else
{var arg__6570__auto___8622 = cljs.core.first.call(null,seq__7602_8616__$1);a__6569__auto__.push(arg__6570__auto___8622);
{
var G__8623 = cljs.core.next.call(null,seq__7602_8616__$1);
var G__8624 = null;
var G__8625 = 0;
var G__8626 = 0;
seq__7602_8606 = G__8623;
chunk__7603_8607 = G__8624;
count__7604_8608 = G__8625;
i__7605_8609 = G__8626;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.article.apply(null,a__6569__auto__);
};
var article = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return article__delegate.call(this,args__6568__auto__);};
article.cljs$lang$maxFixedArity = 0;
article.cljs$lang$applyTo = (function (arglist__8627){
var args__6568__auto__ = cljs.core.seq(arglist__8627);
return article__delegate(args__6568__auto__);
});
article.cljs$core$IFn$_invoke$arity$variadic = article__delegate;
return article;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.aside = (function() { 
var aside__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__7610_8628 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__7611_8629 = null;var count__7612_8630 = 0;var i__7613_8631 = 0;while(true){
if((i__7613_8631 < count__7612_8630))
{var arg__6570__auto___8632 = cljs.core._nth.call(null,chunk__7611_8629,i__7613_8631);a__6569__auto__.push(arg__6570__auto___8632);
{
var G__8633 = seq__7610_8628;
var G__8634 = chunk__7611_8629;
var G__8635 = count__7612_8630;
var G__8636 = (i__7613_8631 + 1);
seq__7610_8628 = G__8633;
chunk__7611_8629 = G__8634;
count__7612_8630 = G__8635;
i__7613_8631 = G__8636;
continue;
}
} else
{var temp__4092__auto___8637 = cljs.core.seq.call(null,seq__7610_8628);if(temp__4092__auto___8637)
{var seq__7610_8638__$1 = temp__4092__auto___8637;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7610_8638__$1))
{var c__5632__auto___8639 = cljs.core.chunk_first.call(null,seq__7610_8638__$1);{
var G__8640 = cljs.core.chunk_rest.call(null,seq__7610_8638__$1);
var G__8641 = c__5632__auto___8639;
var G__8642 = cljs.core.count.call(null,c__5632__auto___8639);
var G__8643 = 0;
seq__7610_8628 = G__8640;
chunk__7611_8629 = G__8641;
count__7612_8630 = G__8642;
i__7613_8631 = G__8643;
continue;
}
} else
{var arg__6570__auto___8644 = cljs.core.first.call(null,seq__7610_8638__$1);a__6569__auto__.push(arg__6570__auto___8644);
{
var G__8645 = cljs.core.next.call(null,seq__7610_8638__$1);
var G__8646 = null;
var G__8647 = 0;
var G__8648 = 0;
seq__7610_8628 = G__8645;
chunk__7611_8629 = G__8646;
count__7612_8630 = G__8647;
i__7613_8631 = G__8648;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.aside.apply(null,a__6569__auto__);
};
var aside = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return aside__delegate.call(this,args__6568__auto__);};
aside.cljs$lang$maxFixedArity = 0;
aside.cljs$lang$applyTo = (function (arglist__8649){
var args__6568__auto__ = cljs.core.seq(arglist__8649);
return aside__delegate(args__6568__auto__);
});
aside.cljs$core$IFn$_invoke$arity$variadic = aside__delegate;
return aside;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.audio = (function() { 
var audio__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__7618_8650 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__7619_8651 = null;var count__7620_8652 = 0;var i__7621_8653 = 0;while(true){
if((i__7621_8653 < count__7620_8652))
{var arg__6570__auto___8654 = cljs.core._nth.call(null,chunk__7619_8651,i__7621_8653);a__6569__auto__.push(arg__6570__auto___8654);
{
var G__8655 = seq__7618_8650;
var G__8656 = chunk__7619_8651;
var G__8657 = count__7620_8652;
var G__8658 = (i__7621_8653 + 1);
seq__7618_8650 = G__8655;
chunk__7619_8651 = G__8656;
count__7620_8652 = G__8657;
i__7621_8653 = G__8658;
continue;
}
} else
{var temp__4092__auto___8659 = cljs.core.seq.call(null,seq__7618_8650);if(temp__4092__auto___8659)
{var seq__7618_8660__$1 = temp__4092__auto___8659;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7618_8660__$1))
{var c__5632__auto___8661 = cljs.core.chunk_first.call(null,seq__7618_8660__$1);{
var G__8662 = cljs.core.chunk_rest.call(null,seq__7618_8660__$1);
var G__8663 = c__5632__auto___8661;
var G__8664 = cljs.core.count.call(null,c__5632__auto___8661);
var G__8665 = 0;
seq__7618_8650 = G__8662;
chunk__7619_8651 = G__8663;
count__7620_8652 = G__8664;
i__7621_8653 = G__8665;
continue;
}
} else
{var arg__6570__auto___8666 = cljs.core.first.call(null,seq__7618_8660__$1);a__6569__auto__.push(arg__6570__auto___8666);
{
var G__8667 = cljs.core.next.call(null,seq__7618_8660__$1);
var G__8668 = null;
var G__8669 = 0;
var G__8670 = 0;
seq__7618_8650 = G__8667;
chunk__7619_8651 = G__8668;
count__7620_8652 = G__8669;
i__7621_8653 = G__8670;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.audio.apply(null,a__6569__auto__);
};
var audio = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return audio__delegate.call(this,args__6568__auto__);};
audio.cljs$lang$maxFixedArity = 0;
audio.cljs$lang$applyTo = (function (arglist__8671){
var args__6568__auto__ = cljs.core.seq(arglist__8671);
return audio__delegate(args__6568__auto__);
});
audio.cljs$core$IFn$_invoke$arity$variadic = audio__delegate;
return audio;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.b = (function() { 
var b__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__7626_8672 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__7627_8673 = null;var count__7628_8674 = 0;var i__7629_8675 = 0;while(true){
if((i__7629_8675 < count__7628_8674))
{var arg__6570__auto___8676 = cljs.core._nth.call(null,chunk__7627_8673,i__7629_8675);a__6569__auto__.push(arg__6570__auto___8676);
{
var G__8677 = seq__7626_8672;
var G__8678 = chunk__7627_8673;
var G__8679 = count__7628_8674;
var G__8680 = (i__7629_8675 + 1);
seq__7626_8672 = G__8677;
chunk__7627_8673 = G__8678;
count__7628_8674 = G__8679;
i__7629_8675 = G__8680;
continue;
}
} else
{var temp__4092__auto___8681 = cljs.core.seq.call(null,seq__7626_8672);if(temp__4092__auto___8681)
{var seq__7626_8682__$1 = temp__4092__auto___8681;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7626_8682__$1))
{var c__5632__auto___8683 = cljs.core.chunk_first.call(null,seq__7626_8682__$1);{
var G__8684 = cljs.core.chunk_rest.call(null,seq__7626_8682__$1);
var G__8685 = c__5632__auto___8683;
var G__8686 = cljs.core.count.call(null,c__5632__auto___8683);
var G__8687 = 0;
seq__7626_8672 = G__8684;
chunk__7627_8673 = G__8685;
count__7628_8674 = G__8686;
i__7629_8675 = G__8687;
continue;
}
} else
{var arg__6570__auto___8688 = cljs.core.first.call(null,seq__7626_8682__$1);a__6569__auto__.push(arg__6570__auto___8688);
{
var G__8689 = cljs.core.next.call(null,seq__7626_8682__$1);
var G__8690 = null;
var G__8691 = 0;
var G__8692 = 0;
seq__7626_8672 = G__8689;
chunk__7627_8673 = G__8690;
count__7628_8674 = G__8691;
i__7629_8675 = G__8692;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.b.apply(null,a__6569__auto__);
};
var b = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return b__delegate.call(this,args__6568__auto__);};
b.cljs$lang$maxFixedArity = 0;
b.cljs$lang$applyTo = (function (arglist__8693){
var args__6568__auto__ = cljs.core.seq(arglist__8693);
return b__delegate(args__6568__auto__);
});
b.cljs$core$IFn$_invoke$arity$variadic = b__delegate;
return b;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.base = (function() { 
var base__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__7634_8694 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__7635_8695 = null;var count__7636_8696 = 0;var i__7637_8697 = 0;while(true){
if((i__7637_8697 < count__7636_8696))
{var arg__6570__auto___8698 = cljs.core._nth.call(null,chunk__7635_8695,i__7637_8697);a__6569__auto__.push(arg__6570__auto___8698);
{
var G__8699 = seq__7634_8694;
var G__8700 = chunk__7635_8695;
var G__8701 = count__7636_8696;
var G__8702 = (i__7637_8697 + 1);
seq__7634_8694 = G__8699;
chunk__7635_8695 = G__8700;
count__7636_8696 = G__8701;
i__7637_8697 = G__8702;
continue;
}
} else
{var temp__4092__auto___8703 = cljs.core.seq.call(null,seq__7634_8694);if(temp__4092__auto___8703)
{var seq__7634_8704__$1 = temp__4092__auto___8703;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7634_8704__$1))
{var c__5632__auto___8705 = cljs.core.chunk_first.call(null,seq__7634_8704__$1);{
var G__8706 = cljs.core.chunk_rest.call(null,seq__7634_8704__$1);
var G__8707 = c__5632__auto___8705;
var G__8708 = cljs.core.count.call(null,c__5632__auto___8705);
var G__8709 = 0;
seq__7634_8694 = G__8706;
chunk__7635_8695 = G__8707;
count__7636_8696 = G__8708;
i__7637_8697 = G__8709;
continue;
}
} else
{var arg__6570__auto___8710 = cljs.core.first.call(null,seq__7634_8704__$1);a__6569__auto__.push(arg__6570__auto___8710);
{
var G__8711 = cljs.core.next.call(null,seq__7634_8704__$1);
var G__8712 = null;
var G__8713 = 0;
var G__8714 = 0;
seq__7634_8694 = G__8711;
chunk__7635_8695 = G__8712;
count__7636_8696 = G__8713;
i__7637_8697 = G__8714;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.base.apply(null,a__6569__auto__);
};
var base = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return base__delegate.call(this,args__6568__auto__);};
base.cljs$lang$maxFixedArity = 0;
base.cljs$lang$applyTo = (function (arglist__8715){
var args__6568__auto__ = cljs.core.seq(arglist__8715);
return base__delegate(args__6568__auto__);
});
base.cljs$core$IFn$_invoke$arity$variadic = base__delegate;
return base;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.bdi = (function() { 
var bdi__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__7642_8716 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__7643_8717 = null;var count__7644_8718 = 0;var i__7645_8719 = 0;while(true){
if((i__7645_8719 < count__7644_8718))
{var arg__6570__auto___8720 = cljs.core._nth.call(null,chunk__7643_8717,i__7645_8719);a__6569__auto__.push(arg__6570__auto___8720);
{
var G__8721 = seq__7642_8716;
var G__8722 = chunk__7643_8717;
var G__8723 = count__7644_8718;
var G__8724 = (i__7645_8719 + 1);
seq__7642_8716 = G__8721;
chunk__7643_8717 = G__8722;
count__7644_8718 = G__8723;
i__7645_8719 = G__8724;
continue;
}
} else
{var temp__4092__auto___8725 = cljs.core.seq.call(null,seq__7642_8716);if(temp__4092__auto___8725)
{var seq__7642_8726__$1 = temp__4092__auto___8725;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7642_8726__$1))
{var c__5632__auto___8727 = cljs.core.chunk_first.call(null,seq__7642_8726__$1);{
var G__8728 = cljs.core.chunk_rest.call(null,seq__7642_8726__$1);
var G__8729 = c__5632__auto___8727;
var G__8730 = cljs.core.count.call(null,c__5632__auto___8727);
var G__8731 = 0;
seq__7642_8716 = G__8728;
chunk__7643_8717 = G__8729;
count__7644_8718 = G__8730;
i__7645_8719 = G__8731;
continue;
}
} else
{var arg__6570__auto___8732 = cljs.core.first.call(null,seq__7642_8726__$1);a__6569__auto__.push(arg__6570__auto___8732);
{
var G__8733 = cljs.core.next.call(null,seq__7642_8726__$1);
var G__8734 = null;
var G__8735 = 0;
var G__8736 = 0;
seq__7642_8716 = G__8733;
chunk__7643_8717 = G__8734;
count__7644_8718 = G__8735;
i__7645_8719 = G__8736;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.bdi.apply(null,a__6569__auto__);
};
var bdi = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return bdi__delegate.call(this,args__6568__auto__);};
bdi.cljs$lang$maxFixedArity = 0;
bdi.cljs$lang$applyTo = (function (arglist__8737){
var args__6568__auto__ = cljs.core.seq(arglist__8737);
return bdi__delegate(args__6568__auto__);
});
bdi.cljs$core$IFn$_invoke$arity$variadic = bdi__delegate;
return bdi;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.bdo = (function() { 
var bdo__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__7650_8738 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__7651_8739 = null;var count__7652_8740 = 0;var i__7653_8741 = 0;while(true){
if((i__7653_8741 < count__7652_8740))
{var arg__6570__auto___8742 = cljs.core._nth.call(null,chunk__7651_8739,i__7653_8741);a__6569__auto__.push(arg__6570__auto___8742);
{
var G__8743 = seq__7650_8738;
var G__8744 = chunk__7651_8739;
var G__8745 = count__7652_8740;
var G__8746 = (i__7653_8741 + 1);
seq__7650_8738 = G__8743;
chunk__7651_8739 = G__8744;
count__7652_8740 = G__8745;
i__7653_8741 = G__8746;
continue;
}
} else
{var temp__4092__auto___8747 = cljs.core.seq.call(null,seq__7650_8738);if(temp__4092__auto___8747)
{var seq__7650_8748__$1 = temp__4092__auto___8747;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7650_8748__$1))
{var c__5632__auto___8749 = cljs.core.chunk_first.call(null,seq__7650_8748__$1);{
var G__8750 = cljs.core.chunk_rest.call(null,seq__7650_8748__$1);
var G__8751 = c__5632__auto___8749;
var G__8752 = cljs.core.count.call(null,c__5632__auto___8749);
var G__8753 = 0;
seq__7650_8738 = G__8750;
chunk__7651_8739 = G__8751;
count__7652_8740 = G__8752;
i__7653_8741 = G__8753;
continue;
}
} else
{var arg__6570__auto___8754 = cljs.core.first.call(null,seq__7650_8748__$1);a__6569__auto__.push(arg__6570__auto___8754);
{
var G__8755 = cljs.core.next.call(null,seq__7650_8748__$1);
var G__8756 = null;
var G__8757 = 0;
var G__8758 = 0;
seq__7650_8738 = G__8755;
chunk__7651_8739 = G__8756;
count__7652_8740 = G__8757;
i__7653_8741 = G__8758;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.bdo.apply(null,a__6569__auto__);
};
var bdo = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return bdo__delegate.call(this,args__6568__auto__);};
bdo.cljs$lang$maxFixedArity = 0;
bdo.cljs$lang$applyTo = (function (arglist__8759){
var args__6568__auto__ = cljs.core.seq(arglist__8759);
return bdo__delegate(args__6568__auto__);
});
bdo.cljs$core$IFn$_invoke$arity$variadic = bdo__delegate;
return bdo;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.big = (function() { 
var big__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__7658_8760 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__7659_8761 = null;var count__7660_8762 = 0;var i__7661_8763 = 0;while(true){
if((i__7661_8763 < count__7660_8762))
{var arg__6570__auto___8764 = cljs.core._nth.call(null,chunk__7659_8761,i__7661_8763);a__6569__auto__.push(arg__6570__auto___8764);
{
var G__8765 = seq__7658_8760;
var G__8766 = chunk__7659_8761;
var G__8767 = count__7660_8762;
var G__8768 = (i__7661_8763 + 1);
seq__7658_8760 = G__8765;
chunk__7659_8761 = G__8766;
count__7660_8762 = G__8767;
i__7661_8763 = G__8768;
continue;
}
} else
{var temp__4092__auto___8769 = cljs.core.seq.call(null,seq__7658_8760);if(temp__4092__auto___8769)
{var seq__7658_8770__$1 = temp__4092__auto___8769;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7658_8770__$1))
{var c__5632__auto___8771 = cljs.core.chunk_first.call(null,seq__7658_8770__$1);{
var G__8772 = cljs.core.chunk_rest.call(null,seq__7658_8770__$1);
var G__8773 = c__5632__auto___8771;
var G__8774 = cljs.core.count.call(null,c__5632__auto___8771);
var G__8775 = 0;
seq__7658_8760 = G__8772;
chunk__7659_8761 = G__8773;
count__7660_8762 = G__8774;
i__7661_8763 = G__8775;
continue;
}
} else
{var arg__6570__auto___8776 = cljs.core.first.call(null,seq__7658_8770__$1);a__6569__auto__.push(arg__6570__auto___8776);
{
var G__8777 = cljs.core.next.call(null,seq__7658_8770__$1);
var G__8778 = null;
var G__8779 = 0;
var G__8780 = 0;
seq__7658_8760 = G__8777;
chunk__7659_8761 = G__8778;
count__7660_8762 = G__8779;
i__7661_8763 = G__8780;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.big.apply(null,a__6569__auto__);
};
var big = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return big__delegate.call(this,args__6568__auto__);};
big.cljs$lang$maxFixedArity = 0;
big.cljs$lang$applyTo = (function (arglist__8781){
var args__6568__auto__ = cljs.core.seq(arglist__8781);
return big__delegate(args__6568__auto__);
});
big.cljs$core$IFn$_invoke$arity$variadic = big__delegate;
return big;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.blockquote = (function() { 
var blockquote__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__7666_8782 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__7667_8783 = null;var count__7668_8784 = 0;var i__7669_8785 = 0;while(true){
if((i__7669_8785 < count__7668_8784))
{var arg__6570__auto___8786 = cljs.core._nth.call(null,chunk__7667_8783,i__7669_8785);a__6569__auto__.push(arg__6570__auto___8786);
{
var G__8787 = seq__7666_8782;
var G__8788 = chunk__7667_8783;
var G__8789 = count__7668_8784;
var G__8790 = (i__7669_8785 + 1);
seq__7666_8782 = G__8787;
chunk__7667_8783 = G__8788;
count__7668_8784 = G__8789;
i__7669_8785 = G__8790;
continue;
}
} else
{var temp__4092__auto___8791 = cljs.core.seq.call(null,seq__7666_8782);if(temp__4092__auto___8791)
{var seq__7666_8792__$1 = temp__4092__auto___8791;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7666_8792__$1))
{var c__5632__auto___8793 = cljs.core.chunk_first.call(null,seq__7666_8792__$1);{
var G__8794 = cljs.core.chunk_rest.call(null,seq__7666_8792__$1);
var G__8795 = c__5632__auto___8793;
var G__8796 = cljs.core.count.call(null,c__5632__auto___8793);
var G__8797 = 0;
seq__7666_8782 = G__8794;
chunk__7667_8783 = G__8795;
count__7668_8784 = G__8796;
i__7669_8785 = G__8797;
continue;
}
} else
{var arg__6570__auto___8798 = cljs.core.first.call(null,seq__7666_8792__$1);a__6569__auto__.push(arg__6570__auto___8798);
{
var G__8799 = cljs.core.next.call(null,seq__7666_8792__$1);
var G__8800 = null;
var G__8801 = 0;
var G__8802 = 0;
seq__7666_8782 = G__8799;
chunk__7667_8783 = G__8800;
count__7668_8784 = G__8801;
i__7669_8785 = G__8802;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.blockquote.apply(null,a__6569__auto__);
};
var blockquote = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return blockquote__delegate.call(this,args__6568__auto__);};
blockquote.cljs$lang$maxFixedArity = 0;
blockquote.cljs$lang$applyTo = (function (arglist__8803){
var args__6568__auto__ = cljs.core.seq(arglist__8803);
return blockquote__delegate(args__6568__auto__);
});
blockquote.cljs$core$IFn$_invoke$arity$variadic = blockquote__delegate;
return blockquote;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.body = (function() { 
var body__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__7674_8804 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__7675_8805 = null;var count__7676_8806 = 0;var i__7677_8807 = 0;while(true){
if((i__7677_8807 < count__7676_8806))
{var arg__6570__auto___8808 = cljs.core._nth.call(null,chunk__7675_8805,i__7677_8807);a__6569__auto__.push(arg__6570__auto___8808);
{
var G__8809 = seq__7674_8804;
var G__8810 = chunk__7675_8805;
var G__8811 = count__7676_8806;
var G__8812 = (i__7677_8807 + 1);
seq__7674_8804 = G__8809;
chunk__7675_8805 = G__8810;
count__7676_8806 = G__8811;
i__7677_8807 = G__8812;
continue;
}
} else
{var temp__4092__auto___8813 = cljs.core.seq.call(null,seq__7674_8804);if(temp__4092__auto___8813)
{var seq__7674_8814__$1 = temp__4092__auto___8813;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7674_8814__$1))
{var c__5632__auto___8815 = cljs.core.chunk_first.call(null,seq__7674_8814__$1);{
var G__8816 = cljs.core.chunk_rest.call(null,seq__7674_8814__$1);
var G__8817 = c__5632__auto___8815;
var G__8818 = cljs.core.count.call(null,c__5632__auto___8815);
var G__8819 = 0;
seq__7674_8804 = G__8816;
chunk__7675_8805 = G__8817;
count__7676_8806 = G__8818;
i__7677_8807 = G__8819;
continue;
}
} else
{var arg__6570__auto___8820 = cljs.core.first.call(null,seq__7674_8814__$1);a__6569__auto__.push(arg__6570__auto___8820);
{
var G__8821 = cljs.core.next.call(null,seq__7674_8814__$1);
var G__8822 = null;
var G__8823 = 0;
var G__8824 = 0;
seq__7674_8804 = G__8821;
chunk__7675_8805 = G__8822;
count__7676_8806 = G__8823;
i__7677_8807 = G__8824;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.body.apply(null,a__6569__auto__);
};
var body = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return body__delegate.call(this,args__6568__auto__);};
body.cljs$lang$maxFixedArity = 0;
body.cljs$lang$applyTo = (function (arglist__8825){
var args__6568__auto__ = cljs.core.seq(arglist__8825);
return body__delegate(args__6568__auto__);
});
body.cljs$core$IFn$_invoke$arity$variadic = body__delegate;
return body;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.br = (function() { 
var br__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__7682_8826 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__7683_8827 = null;var count__7684_8828 = 0;var i__7685_8829 = 0;while(true){
if((i__7685_8829 < count__7684_8828))
{var arg__6570__auto___8830 = cljs.core._nth.call(null,chunk__7683_8827,i__7685_8829);a__6569__auto__.push(arg__6570__auto___8830);
{
var G__8831 = seq__7682_8826;
var G__8832 = chunk__7683_8827;
var G__8833 = count__7684_8828;
var G__8834 = (i__7685_8829 + 1);
seq__7682_8826 = G__8831;
chunk__7683_8827 = G__8832;
count__7684_8828 = G__8833;
i__7685_8829 = G__8834;
continue;
}
} else
{var temp__4092__auto___8835 = cljs.core.seq.call(null,seq__7682_8826);if(temp__4092__auto___8835)
{var seq__7682_8836__$1 = temp__4092__auto___8835;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7682_8836__$1))
{var c__5632__auto___8837 = cljs.core.chunk_first.call(null,seq__7682_8836__$1);{
var G__8838 = cljs.core.chunk_rest.call(null,seq__7682_8836__$1);
var G__8839 = c__5632__auto___8837;
var G__8840 = cljs.core.count.call(null,c__5632__auto___8837);
var G__8841 = 0;
seq__7682_8826 = G__8838;
chunk__7683_8827 = G__8839;
count__7684_8828 = G__8840;
i__7685_8829 = G__8841;
continue;
}
} else
{var arg__6570__auto___8842 = cljs.core.first.call(null,seq__7682_8836__$1);a__6569__auto__.push(arg__6570__auto___8842);
{
var G__8843 = cljs.core.next.call(null,seq__7682_8836__$1);
var G__8844 = null;
var G__8845 = 0;
var G__8846 = 0;
seq__7682_8826 = G__8843;
chunk__7683_8827 = G__8844;
count__7684_8828 = G__8845;
i__7685_8829 = G__8846;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.br.apply(null,a__6569__auto__);
};
var br = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return br__delegate.call(this,args__6568__auto__);};
br.cljs$lang$maxFixedArity = 0;
br.cljs$lang$applyTo = (function (arglist__8847){
var args__6568__auto__ = cljs.core.seq(arglist__8847);
return br__delegate(args__6568__auto__);
});
br.cljs$core$IFn$_invoke$arity$variadic = br__delegate;
return br;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.button = (function() { 
var button__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__7690_8848 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__7691_8849 = null;var count__7692_8850 = 0;var i__7693_8851 = 0;while(true){
if((i__7693_8851 < count__7692_8850))
{var arg__6570__auto___8852 = cljs.core._nth.call(null,chunk__7691_8849,i__7693_8851);a__6569__auto__.push(arg__6570__auto___8852);
{
var G__8853 = seq__7690_8848;
var G__8854 = chunk__7691_8849;
var G__8855 = count__7692_8850;
var G__8856 = (i__7693_8851 + 1);
seq__7690_8848 = G__8853;
chunk__7691_8849 = G__8854;
count__7692_8850 = G__8855;
i__7693_8851 = G__8856;
continue;
}
} else
{var temp__4092__auto___8857 = cljs.core.seq.call(null,seq__7690_8848);if(temp__4092__auto___8857)
{var seq__7690_8858__$1 = temp__4092__auto___8857;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7690_8858__$1))
{var c__5632__auto___8859 = cljs.core.chunk_first.call(null,seq__7690_8858__$1);{
var G__8860 = cljs.core.chunk_rest.call(null,seq__7690_8858__$1);
var G__8861 = c__5632__auto___8859;
var G__8862 = cljs.core.count.call(null,c__5632__auto___8859);
var G__8863 = 0;
seq__7690_8848 = G__8860;
chunk__7691_8849 = G__8861;
count__7692_8850 = G__8862;
i__7693_8851 = G__8863;
continue;
}
} else
{var arg__6570__auto___8864 = cljs.core.first.call(null,seq__7690_8858__$1);a__6569__auto__.push(arg__6570__auto___8864);
{
var G__8865 = cljs.core.next.call(null,seq__7690_8858__$1);
var G__8866 = null;
var G__8867 = 0;
var G__8868 = 0;
seq__7690_8848 = G__8865;
chunk__7691_8849 = G__8866;
count__7692_8850 = G__8867;
i__7693_8851 = G__8868;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.button.apply(null,a__6569__auto__);
};
var button = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return button__delegate.call(this,args__6568__auto__);};
button.cljs$lang$maxFixedArity = 0;
button.cljs$lang$applyTo = (function (arglist__8869){
var args__6568__auto__ = cljs.core.seq(arglist__8869);
return button__delegate(args__6568__auto__);
});
button.cljs$core$IFn$_invoke$arity$variadic = button__delegate;
return button;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.canvas = (function() { 
var canvas__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__7698_8870 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__7699_8871 = null;var count__7700_8872 = 0;var i__7701_8873 = 0;while(true){
if((i__7701_8873 < count__7700_8872))
{var arg__6570__auto___8874 = cljs.core._nth.call(null,chunk__7699_8871,i__7701_8873);a__6569__auto__.push(arg__6570__auto___8874);
{
var G__8875 = seq__7698_8870;
var G__8876 = chunk__7699_8871;
var G__8877 = count__7700_8872;
var G__8878 = (i__7701_8873 + 1);
seq__7698_8870 = G__8875;
chunk__7699_8871 = G__8876;
count__7700_8872 = G__8877;
i__7701_8873 = G__8878;
continue;
}
} else
{var temp__4092__auto___8879 = cljs.core.seq.call(null,seq__7698_8870);if(temp__4092__auto___8879)
{var seq__7698_8880__$1 = temp__4092__auto___8879;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7698_8880__$1))
{var c__5632__auto___8881 = cljs.core.chunk_first.call(null,seq__7698_8880__$1);{
var G__8882 = cljs.core.chunk_rest.call(null,seq__7698_8880__$1);
var G__8883 = c__5632__auto___8881;
var G__8884 = cljs.core.count.call(null,c__5632__auto___8881);
var G__8885 = 0;
seq__7698_8870 = G__8882;
chunk__7699_8871 = G__8883;
count__7700_8872 = G__8884;
i__7701_8873 = G__8885;
continue;
}
} else
{var arg__6570__auto___8886 = cljs.core.first.call(null,seq__7698_8880__$1);a__6569__auto__.push(arg__6570__auto___8886);
{
var G__8887 = cljs.core.next.call(null,seq__7698_8880__$1);
var G__8888 = null;
var G__8889 = 0;
var G__8890 = 0;
seq__7698_8870 = G__8887;
chunk__7699_8871 = G__8888;
count__7700_8872 = G__8889;
i__7701_8873 = G__8890;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.canvas.apply(null,a__6569__auto__);
};
var canvas = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return canvas__delegate.call(this,args__6568__auto__);};
canvas.cljs$lang$maxFixedArity = 0;
canvas.cljs$lang$applyTo = (function (arglist__8891){
var args__6568__auto__ = cljs.core.seq(arglist__8891);
return canvas__delegate(args__6568__auto__);
});
canvas.cljs$core$IFn$_invoke$arity$variadic = canvas__delegate;
return canvas;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.caption = (function() { 
var caption__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__7706_8892 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__7707_8893 = null;var count__7708_8894 = 0;var i__7709_8895 = 0;while(true){
if((i__7709_8895 < count__7708_8894))
{var arg__6570__auto___8896 = cljs.core._nth.call(null,chunk__7707_8893,i__7709_8895);a__6569__auto__.push(arg__6570__auto___8896);
{
var G__8897 = seq__7706_8892;
var G__8898 = chunk__7707_8893;
var G__8899 = count__7708_8894;
var G__8900 = (i__7709_8895 + 1);
seq__7706_8892 = G__8897;
chunk__7707_8893 = G__8898;
count__7708_8894 = G__8899;
i__7709_8895 = G__8900;
continue;
}
} else
{var temp__4092__auto___8901 = cljs.core.seq.call(null,seq__7706_8892);if(temp__4092__auto___8901)
{var seq__7706_8902__$1 = temp__4092__auto___8901;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7706_8902__$1))
{var c__5632__auto___8903 = cljs.core.chunk_first.call(null,seq__7706_8902__$1);{
var G__8904 = cljs.core.chunk_rest.call(null,seq__7706_8902__$1);
var G__8905 = c__5632__auto___8903;
var G__8906 = cljs.core.count.call(null,c__5632__auto___8903);
var G__8907 = 0;
seq__7706_8892 = G__8904;
chunk__7707_8893 = G__8905;
count__7708_8894 = G__8906;
i__7709_8895 = G__8907;
continue;
}
} else
{var arg__6570__auto___8908 = cljs.core.first.call(null,seq__7706_8902__$1);a__6569__auto__.push(arg__6570__auto___8908);
{
var G__8909 = cljs.core.next.call(null,seq__7706_8902__$1);
var G__8910 = null;
var G__8911 = 0;
var G__8912 = 0;
seq__7706_8892 = G__8909;
chunk__7707_8893 = G__8910;
count__7708_8894 = G__8911;
i__7709_8895 = G__8912;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.caption.apply(null,a__6569__auto__);
};
var caption = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return caption__delegate.call(this,args__6568__auto__);};
caption.cljs$lang$maxFixedArity = 0;
caption.cljs$lang$applyTo = (function (arglist__8913){
var args__6568__auto__ = cljs.core.seq(arglist__8913);
return caption__delegate(args__6568__auto__);
});
caption.cljs$core$IFn$_invoke$arity$variadic = caption__delegate;
return caption;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.cite = (function() { 
var cite__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__7714_8914 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__7715_8915 = null;var count__7716_8916 = 0;var i__7717_8917 = 0;while(true){
if((i__7717_8917 < count__7716_8916))
{var arg__6570__auto___8918 = cljs.core._nth.call(null,chunk__7715_8915,i__7717_8917);a__6569__auto__.push(arg__6570__auto___8918);
{
var G__8919 = seq__7714_8914;
var G__8920 = chunk__7715_8915;
var G__8921 = count__7716_8916;
var G__8922 = (i__7717_8917 + 1);
seq__7714_8914 = G__8919;
chunk__7715_8915 = G__8920;
count__7716_8916 = G__8921;
i__7717_8917 = G__8922;
continue;
}
} else
{var temp__4092__auto___8923 = cljs.core.seq.call(null,seq__7714_8914);if(temp__4092__auto___8923)
{var seq__7714_8924__$1 = temp__4092__auto___8923;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7714_8924__$1))
{var c__5632__auto___8925 = cljs.core.chunk_first.call(null,seq__7714_8924__$1);{
var G__8926 = cljs.core.chunk_rest.call(null,seq__7714_8924__$1);
var G__8927 = c__5632__auto___8925;
var G__8928 = cljs.core.count.call(null,c__5632__auto___8925);
var G__8929 = 0;
seq__7714_8914 = G__8926;
chunk__7715_8915 = G__8927;
count__7716_8916 = G__8928;
i__7717_8917 = G__8929;
continue;
}
} else
{var arg__6570__auto___8930 = cljs.core.first.call(null,seq__7714_8924__$1);a__6569__auto__.push(arg__6570__auto___8930);
{
var G__8931 = cljs.core.next.call(null,seq__7714_8924__$1);
var G__8932 = null;
var G__8933 = 0;
var G__8934 = 0;
seq__7714_8914 = G__8931;
chunk__7715_8915 = G__8932;
count__7716_8916 = G__8933;
i__7717_8917 = G__8934;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.cite.apply(null,a__6569__auto__);
};
var cite = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return cite__delegate.call(this,args__6568__auto__);};
cite.cljs$lang$maxFixedArity = 0;
cite.cljs$lang$applyTo = (function (arglist__8935){
var args__6568__auto__ = cljs.core.seq(arglist__8935);
return cite__delegate(args__6568__auto__);
});
cite.cljs$core$IFn$_invoke$arity$variadic = cite__delegate;
return cite;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.code = (function() { 
var code__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__7722_8936 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__7723_8937 = null;var count__7724_8938 = 0;var i__7725_8939 = 0;while(true){
if((i__7725_8939 < count__7724_8938))
{var arg__6570__auto___8940 = cljs.core._nth.call(null,chunk__7723_8937,i__7725_8939);a__6569__auto__.push(arg__6570__auto___8940);
{
var G__8941 = seq__7722_8936;
var G__8942 = chunk__7723_8937;
var G__8943 = count__7724_8938;
var G__8944 = (i__7725_8939 + 1);
seq__7722_8936 = G__8941;
chunk__7723_8937 = G__8942;
count__7724_8938 = G__8943;
i__7725_8939 = G__8944;
continue;
}
} else
{var temp__4092__auto___8945 = cljs.core.seq.call(null,seq__7722_8936);if(temp__4092__auto___8945)
{var seq__7722_8946__$1 = temp__4092__auto___8945;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7722_8946__$1))
{var c__5632__auto___8947 = cljs.core.chunk_first.call(null,seq__7722_8946__$1);{
var G__8948 = cljs.core.chunk_rest.call(null,seq__7722_8946__$1);
var G__8949 = c__5632__auto___8947;
var G__8950 = cljs.core.count.call(null,c__5632__auto___8947);
var G__8951 = 0;
seq__7722_8936 = G__8948;
chunk__7723_8937 = G__8949;
count__7724_8938 = G__8950;
i__7725_8939 = G__8951;
continue;
}
} else
{var arg__6570__auto___8952 = cljs.core.first.call(null,seq__7722_8946__$1);a__6569__auto__.push(arg__6570__auto___8952);
{
var G__8953 = cljs.core.next.call(null,seq__7722_8946__$1);
var G__8954 = null;
var G__8955 = 0;
var G__8956 = 0;
seq__7722_8936 = G__8953;
chunk__7723_8937 = G__8954;
count__7724_8938 = G__8955;
i__7725_8939 = G__8956;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.code.apply(null,a__6569__auto__);
};
var code = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return code__delegate.call(this,args__6568__auto__);};
code.cljs$lang$maxFixedArity = 0;
code.cljs$lang$applyTo = (function (arglist__8957){
var args__6568__auto__ = cljs.core.seq(arglist__8957);
return code__delegate(args__6568__auto__);
});
code.cljs$core$IFn$_invoke$arity$variadic = code__delegate;
return code;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.col = (function() { 
var col__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__7730_8958 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__7731_8959 = null;var count__7732_8960 = 0;var i__7733_8961 = 0;while(true){
if((i__7733_8961 < count__7732_8960))
{var arg__6570__auto___8962 = cljs.core._nth.call(null,chunk__7731_8959,i__7733_8961);a__6569__auto__.push(arg__6570__auto___8962);
{
var G__8963 = seq__7730_8958;
var G__8964 = chunk__7731_8959;
var G__8965 = count__7732_8960;
var G__8966 = (i__7733_8961 + 1);
seq__7730_8958 = G__8963;
chunk__7731_8959 = G__8964;
count__7732_8960 = G__8965;
i__7733_8961 = G__8966;
continue;
}
} else
{var temp__4092__auto___8967 = cljs.core.seq.call(null,seq__7730_8958);if(temp__4092__auto___8967)
{var seq__7730_8968__$1 = temp__4092__auto___8967;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7730_8968__$1))
{var c__5632__auto___8969 = cljs.core.chunk_first.call(null,seq__7730_8968__$1);{
var G__8970 = cljs.core.chunk_rest.call(null,seq__7730_8968__$1);
var G__8971 = c__5632__auto___8969;
var G__8972 = cljs.core.count.call(null,c__5632__auto___8969);
var G__8973 = 0;
seq__7730_8958 = G__8970;
chunk__7731_8959 = G__8971;
count__7732_8960 = G__8972;
i__7733_8961 = G__8973;
continue;
}
} else
{var arg__6570__auto___8974 = cljs.core.first.call(null,seq__7730_8968__$1);a__6569__auto__.push(arg__6570__auto___8974);
{
var G__8975 = cljs.core.next.call(null,seq__7730_8968__$1);
var G__8976 = null;
var G__8977 = 0;
var G__8978 = 0;
seq__7730_8958 = G__8975;
chunk__7731_8959 = G__8976;
count__7732_8960 = G__8977;
i__7733_8961 = G__8978;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.col.apply(null,a__6569__auto__);
};
var col = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return col__delegate.call(this,args__6568__auto__);};
col.cljs$lang$maxFixedArity = 0;
col.cljs$lang$applyTo = (function (arglist__8979){
var args__6568__auto__ = cljs.core.seq(arglist__8979);
return col__delegate(args__6568__auto__);
});
col.cljs$core$IFn$_invoke$arity$variadic = col__delegate;
return col;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.colgroup = (function() { 
var colgroup__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__7738_8980 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__7739_8981 = null;var count__7740_8982 = 0;var i__7741_8983 = 0;while(true){
if((i__7741_8983 < count__7740_8982))
{var arg__6570__auto___8984 = cljs.core._nth.call(null,chunk__7739_8981,i__7741_8983);a__6569__auto__.push(arg__6570__auto___8984);
{
var G__8985 = seq__7738_8980;
var G__8986 = chunk__7739_8981;
var G__8987 = count__7740_8982;
var G__8988 = (i__7741_8983 + 1);
seq__7738_8980 = G__8985;
chunk__7739_8981 = G__8986;
count__7740_8982 = G__8987;
i__7741_8983 = G__8988;
continue;
}
} else
{var temp__4092__auto___8989 = cljs.core.seq.call(null,seq__7738_8980);if(temp__4092__auto___8989)
{var seq__7738_8990__$1 = temp__4092__auto___8989;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7738_8990__$1))
{var c__5632__auto___8991 = cljs.core.chunk_first.call(null,seq__7738_8990__$1);{
var G__8992 = cljs.core.chunk_rest.call(null,seq__7738_8990__$1);
var G__8993 = c__5632__auto___8991;
var G__8994 = cljs.core.count.call(null,c__5632__auto___8991);
var G__8995 = 0;
seq__7738_8980 = G__8992;
chunk__7739_8981 = G__8993;
count__7740_8982 = G__8994;
i__7741_8983 = G__8995;
continue;
}
} else
{var arg__6570__auto___8996 = cljs.core.first.call(null,seq__7738_8990__$1);a__6569__auto__.push(arg__6570__auto___8996);
{
var G__8997 = cljs.core.next.call(null,seq__7738_8990__$1);
var G__8998 = null;
var G__8999 = 0;
var G__9000 = 0;
seq__7738_8980 = G__8997;
chunk__7739_8981 = G__8998;
count__7740_8982 = G__8999;
i__7741_8983 = G__9000;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.colgroup.apply(null,a__6569__auto__);
};
var colgroup = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return colgroup__delegate.call(this,args__6568__auto__);};
colgroup.cljs$lang$maxFixedArity = 0;
colgroup.cljs$lang$applyTo = (function (arglist__9001){
var args__6568__auto__ = cljs.core.seq(arglist__9001);
return colgroup__delegate(args__6568__auto__);
});
colgroup.cljs$core$IFn$_invoke$arity$variadic = colgroup__delegate;
return colgroup;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.data = (function() { 
var data__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__7746_9002 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__7747_9003 = null;var count__7748_9004 = 0;var i__7749_9005 = 0;while(true){
if((i__7749_9005 < count__7748_9004))
{var arg__6570__auto___9006 = cljs.core._nth.call(null,chunk__7747_9003,i__7749_9005);a__6569__auto__.push(arg__6570__auto___9006);
{
var G__9007 = seq__7746_9002;
var G__9008 = chunk__7747_9003;
var G__9009 = count__7748_9004;
var G__9010 = (i__7749_9005 + 1);
seq__7746_9002 = G__9007;
chunk__7747_9003 = G__9008;
count__7748_9004 = G__9009;
i__7749_9005 = G__9010;
continue;
}
} else
{var temp__4092__auto___9011 = cljs.core.seq.call(null,seq__7746_9002);if(temp__4092__auto___9011)
{var seq__7746_9012__$1 = temp__4092__auto___9011;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7746_9012__$1))
{var c__5632__auto___9013 = cljs.core.chunk_first.call(null,seq__7746_9012__$1);{
var G__9014 = cljs.core.chunk_rest.call(null,seq__7746_9012__$1);
var G__9015 = c__5632__auto___9013;
var G__9016 = cljs.core.count.call(null,c__5632__auto___9013);
var G__9017 = 0;
seq__7746_9002 = G__9014;
chunk__7747_9003 = G__9015;
count__7748_9004 = G__9016;
i__7749_9005 = G__9017;
continue;
}
} else
{var arg__6570__auto___9018 = cljs.core.first.call(null,seq__7746_9012__$1);a__6569__auto__.push(arg__6570__auto___9018);
{
var G__9019 = cljs.core.next.call(null,seq__7746_9012__$1);
var G__9020 = null;
var G__9021 = 0;
var G__9022 = 0;
seq__7746_9002 = G__9019;
chunk__7747_9003 = G__9020;
count__7748_9004 = G__9021;
i__7749_9005 = G__9022;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.data.apply(null,a__6569__auto__);
};
var data = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return data__delegate.call(this,args__6568__auto__);};
data.cljs$lang$maxFixedArity = 0;
data.cljs$lang$applyTo = (function (arglist__9023){
var args__6568__auto__ = cljs.core.seq(arglist__9023);
return data__delegate(args__6568__auto__);
});
data.cljs$core$IFn$_invoke$arity$variadic = data__delegate;
return data;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.datalist = (function() { 
var datalist__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__7754_9024 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__7755_9025 = null;var count__7756_9026 = 0;var i__7757_9027 = 0;while(true){
if((i__7757_9027 < count__7756_9026))
{var arg__6570__auto___9028 = cljs.core._nth.call(null,chunk__7755_9025,i__7757_9027);a__6569__auto__.push(arg__6570__auto___9028);
{
var G__9029 = seq__7754_9024;
var G__9030 = chunk__7755_9025;
var G__9031 = count__7756_9026;
var G__9032 = (i__7757_9027 + 1);
seq__7754_9024 = G__9029;
chunk__7755_9025 = G__9030;
count__7756_9026 = G__9031;
i__7757_9027 = G__9032;
continue;
}
} else
{var temp__4092__auto___9033 = cljs.core.seq.call(null,seq__7754_9024);if(temp__4092__auto___9033)
{var seq__7754_9034__$1 = temp__4092__auto___9033;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7754_9034__$1))
{var c__5632__auto___9035 = cljs.core.chunk_first.call(null,seq__7754_9034__$1);{
var G__9036 = cljs.core.chunk_rest.call(null,seq__7754_9034__$1);
var G__9037 = c__5632__auto___9035;
var G__9038 = cljs.core.count.call(null,c__5632__auto___9035);
var G__9039 = 0;
seq__7754_9024 = G__9036;
chunk__7755_9025 = G__9037;
count__7756_9026 = G__9038;
i__7757_9027 = G__9039;
continue;
}
} else
{var arg__6570__auto___9040 = cljs.core.first.call(null,seq__7754_9034__$1);a__6569__auto__.push(arg__6570__auto___9040);
{
var G__9041 = cljs.core.next.call(null,seq__7754_9034__$1);
var G__9042 = null;
var G__9043 = 0;
var G__9044 = 0;
seq__7754_9024 = G__9041;
chunk__7755_9025 = G__9042;
count__7756_9026 = G__9043;
i__7757_9027 = G__9044;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.datalist.apply(null,a__6569__auto__);
};
var datalist = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return datalist__delegate.call(this,args__6568__auto__);};
datalist.cljs$lang$maxFixedArity = 0;
datalist.cljs$lang$applyTo = (function (arglist__9045){
var args__6568__auto__ = cljs.core.seq(arglist__9045);
return datalist__delegate(args__6568__auto__);
});
datalist.cljs$core$IFn$_invoke$arity$variadic = datalist__delegate;
return datalist;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.dd = (function() { 
var dd__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__7762_9046 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__7763_9047 = null;var count__7764_9048 = 0;var i__7765_9049 = 0;while(true){
if((i__7765_9049 < count__7764_9048))
{var arg__6570__auto___9050 = cljs.core._nth.call(null,chunk__7763_9047,i__7765_9049);a__6569__auto__.push(arg__6570__auto___9050);
{
var G__9051 = seq__7762_9046;
var G__9052 = chunk__7763_9047;
var G__9053 = count__7764_9048;
var G__9054 = (i__7765_9049 + 1);
seq__7762_9046 = G__9051;
chunk__7763_9047 = G__9052;
count__7764_9048 = G__9053;
i__7765_9049 = G__9054;
continue;
}
} else
{var temp__4092__auto___9055 = cljs.core.seq.call(null,seq__7762_9046);if(temp__4092__auto___9055)
{var seq__7762_9056__$1 = temp__4092__auto___9055;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7762_9056__$1))
{var c__5632__auto___9057 = cljs.core.chunk_first.call(null,seq__7762_9056__$1);{
var G__9058 = cljs.core.chunk_rest.call(null,seq__7762_9056__$1);
var G__9059 = c__5632__auto___9057;
var G__9060 = cljs.core.count.call(null,c__5632__auto___9057);
var G__9061 = 0;
seq__7762_9046 = G__9058;
chunk__7763_9047 = G__9059;
count__7764_9048 = G__9060;
i__7765_9049 = G__9061;
continue;
}
} else
{var arg__6570__auto___9062 = cljs.core.first.call(null,seq__7762_9056__$1);a__6569__auto__.push(arg__6570__auto___9062);
{
var G__9063 = cljs.core.next.call(null,seq__7762_9056__$1);
var G__9064 = null;
var G__9065 = 0;
var G__9066 = 0;
seq__7762_9046 = G__9063;
chunk__7763_9047 = G__9064;
count__7764_9048 = G__9065;
i__7765_9049 = G__9066;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.dd.apply(null,a__6569__auto__);
};
var dd = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return dd__delegate.call(this,args__6568__auto__);};
dd.cljs$lang$maxFixedArity = 0;
dd.cljs$lang$applyTo = (function (arglist__9067){
var args__6568__auto__ = cljs.core.seq(arglist__9067);
return dd__delegate(args__6568__auto__);
});
dd.cljs$core$IFn$_invoke$arity$variadic = dd__delegate;
return dd;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.del = (function() { 
var del__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__7770_9068 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__7771_9069 = null;var count__7772_9070 = 0;var i__7773_9071 = 0;while(true){
if((i__7773_9071 < count__7772_9070))
{var arg__6570__auto___9072 = cljs.core._nth.call(null,chunk__7771_9069,i__7773_9071);a__6569__auto__.push(arg__6570__auto___9072);
{
var G__9073 = seq__7770_9068;
var G__9074 = chunk__7771_9069;
var G__9075 = count__7772_9070;
var G__9076 = (i__7773_9071 + 1);
seq__7770_9068 = G__9073;
chunk__7771_9069 = G__9074;
count__7772_9070 = G__9075;
i__7773_9071 = G__9076;
continue;
}
} else
{var temp__4092__auto___9077 = cljs.core.seq.call(null,seq__7770_9068);if(temp__4092__auto___9077)
{var seq__7770_9078__$1 = temp__4092__auto___9077;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7770_9078__$1))
{var c__5632__auto___9079 = cljs.core.chunk_first.call(null,seq__7770_9078__$1);{
var G__9080 = cljs.core.chunk_rest.call(null,seq__7770_9078__$1);
var G__9081 = c__5632__auto___9079;
var G__9082 = cljs.core.count.call(null,c__5632__auto___9079);
var G__9083 = 0;
seq__7770_9068 = G__9080;
chunk__7771_9069 = G__9081;
count__7772_9070 = G__9082;
i__7773_9071 = G__9083;
continue;
}
} else
{var arg__6570__auto___9084 = cljs.core.first.call(null,seq__7770_9078__$1);a__6569__auto__.push(arg__6570__auto___9084);
{
var G__9085 = cljs.core.next.call(null,seq__7770_9078__$1);
var G__9086 = null;
var G__9087 = 0;
var G__9088 = 0;
seq__7770_9068 = G__9085;
chunk__7771_9069 = G__9086;
count__7772_9070 = G__9087;
i__7773_9071 = G__9088;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.del.apply(null,a__6569__auto__);
};
var del = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return del__delegate.call(this,args__6568__auto__);};
del.cljs$lang$maxFixedArity = 0;
del.cljs$lang$applyTo = (function (arglist__9089){
var args__6568__auto__ = cljs.core.seq(arglist__9089);
return del__delegate(args__6568__auto__);
});
del.cljs$core$IFn$_invoke$arity$variadic = del__delegate;
return del;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.details = (function() { 
var details__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__7778_9090 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__7779_9091 = null;var count__7780_9092 = 0;var i__7781_9093 = 0;while(true){
if((i__7781_9093 < count__7780_9092))
{var arg__6570__auto___9094 = cljs.core._nth.call(null,chunk__7779_9091,i__7781_9093);a__6569__auto__.push(arg__6570__auto___9094);
{
var G__9095 = seq__7778_9090;
var G__9096 = chunk__7779_9091;
var G__9097 = count__7780_9092;
var G__9098 = (i__7781_9093 + 1);
seq__7778_9090 = G__9095;
chunk__7779_9091 = G__9096;
count__7780_9092 = G__9097;
i__7781_9093 = G__9098;
continue;
}
} else
{var temp__4092__auto___9099 = cljs.core.seq.call(null,seq__7778_9090);if(temp__4092__auto___9099)
{var seq__7778_9100__$1 = temp__4092__auto___9099;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7778_9100__$1))
{var c__5632__auto___9101 = cljs.core.chunk_first.call(null,seq__7778_9100__$1);{
var G__9102 = cljs.core.chunk_rest.call(null,seq__7778_9100__$1);
var G__9103 = c__5632__auto___9101;
var G__9104 = cljs.core.count.call(null,c__5632__auto___9101);
var G__9105 = 0;
seq__7778_9090 = G__9102;
chunk__7779_9091 = G__9103;
count__7780_9092 = G__9104;
i__7781_9093 = G__9105;
continue;
}
} else
{var arg__6570__auto___9106 = cljs.core.first.call(null,seq__7778_9100__$1);a__6569__auto__.push(arg__6570__auto___9106);
{
var G__9107 = cljs.core.next.call(null,seq__7778_9100__$1);
var G__9108 = null;
var G__9109 = 0;
var G__9110 = 0;
seq__7778_9090 = G__9107;
chunk__7779_9091 = G__9108;
count__7780_9092 = G__9109;
i__7781_9093 = G__9110;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.details.apply(null,a__6569__auto__);
};
var details = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return details__delegate.call(this,args__6568__auto__);};
details.cljs$lang$maxFixedArity = 0;
details.cljs$lang$applyTo = (function (arglist__9111){
var args__6568__auto__ = cljs.core.seq(arglist__9111);
return details__delegate(args__6568__auto__);
});
details.cljs$core$IFn$_invoke$arity$variadic = details__delegate;
return details;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.dfn = (function() { 
var dfn__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__7786_9112 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__7787_9113 = null;var count__7788_9114 = 0;var i__7789_9115 = 0;while(true){
if((i__7789_9115 < count__7788_9114))
{var arg__6570__auto___9116 = cljs.core._nth.call(null,chunk__7787_9113,i__7789_9115);a__6569__auto__.push(arg__6570__auto___9116);
{
var G__9117 = seq__7786_9112;
var G__9118 = chunk__7787_9113;
var G__9119 = count__7788_9114;
var G__9120 = (i__7789_9115 + 1);
seq__7786_9112 = G__9117;
chunk__7787_9113 = G__9118;
count__7788_9114 = G__9119;
i__7789_9115 = G__9120;
continue;
}
} else
{var temp__4092__auto___9121 = cljs.core.seq.call(null,seq__7786_9112);if(temp__4092__auto___9121)
{var seq__7786_9122__$1 = temp__4092__auto___9121;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7786_9122__$1))
{var c__5632__auto___9123 = cljs.core.chunk_first.call(null,seq__7786_9122__$1);{
var G__9124 = cljs.core.chunk_rest.call(null,seq__7786_9122__$1);
var G__9125 = c__5632__auto___9123;
var G__9126 = cljs.core.count.call(null,c__5632__auto___9123);
var G__9127 = 0;
seq__7786_9112 = G__9124;
chunk__7787_9113 = G__9125;
count__7788_9114 = G__9126;
i__7789_9115 = G__9127;
continue;
}
} else
{var arg__6570__auto___9128 = cljs.core.first.call(null,seq__7786_9122__$1);a__6569__auto__.push(arg__6570__auto___9128);
{
var G__9129 = cljs.core.next.call(null,seq__7786_9122__$1);
var G__9130 = null;
var G__9131 = 0;
var G__9132 = 0;
seq__7786_9112 = G__9129;
chunk__7787_9113 = G__9130;
count__7788_9114 = G__9131;
i__7789_9115 = G__9132;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.dfn.apply(null,a__6569__auto__);
};
var dfn = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return dfn__delegate.call(this,args__6568__auto__);};
dfn.cljs$lang$maxFixedArity = 0;
dfn.cljs$lang$applyTo = (function (arglist__9133){
var args__6568__auto__ = cljs.core.seq(arglist__9133);
return dfn__delegate(args__6568__auto__);
});
dfn.cljs$core$IFn$_invoke$arity$variadic = dfn__delegate;
return dfn;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.div = (function() { 
var div__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__7794_9134 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__7795_9135 = null;var count__7796_9136 = 0;var i__7797_9137 = 0;while(true){
if((i__7797_9137 < count__7796_9136))
{var arg__6570__auto___9138 = cljs.core._nth.call(null,chunk__7795_9135,i__7797_9137);a__6569__auto__.push(arg__6570__auto___9138);
{
var G__9139 = seq__7794_9134;
var G__9140 = chunk__7795_9135;
var G__9141 = count__7796_9136;
var G__9142 = (i__7797_9137 + 1);
seq__7794_9134 = G__9139;
chunk__7795_9135 = G__9140;
count__7796_9136 = G__9141;
i__7797_9137 = G__9142;
continue;
}
} else
{var temp__4092__auto___9143 = cljs.core.seq.call(null,seq__7794_9134);if(temp__4092__auto___9143)
{var seq__7794_9144__$1 = temp__4092__auto___9143;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7794_9144__$1))
{var c__5632__auto___9145 = cljs.core.chunk_first.call(null,seq__7794_9144__$1);{
var G__9146 = cljs.core.chunk_rest.call(null,seq__7794_9144__$1);
var G__9147 = c__5632__auto___9145;
var G__9148 = cljs.core.count.call(null,c__5632__auto___9145);
var G__9149 = 0;
seq__7794_9134 = G__9146;
chunk__7795_9135 = G__9147;
count__7796_9136 = G__9148;
i__7797_9137 = G__9149;
continue;
}
} else
{var arg__6570__auto___9150 = cljs.core.first.call(null,seq__7794_9144__$1);a__6569__auto__.push(arg__6570__auto___9150);
{
var G__9151 = cljs.core.next.call(null,seq__7794_9144__$1);
var G__9152 = null;
var G__9153 = 0;
var G__9154 = 0;
seq__7794_9134 = G__9151;
chunk__7795_9135 = G__9152;
count__7796_9136 = G__9153;
i__7797_9137 = G__9154;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.div.apply(null,a__6569__auto__);
};
var div = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return div__delegate.call(this,args__6568__auto__);};
div.cljs$lang$maxFixedArity = 0;
div.cljs$lang$applyTo = (function (arglist__9155){
var args__6568__auto__ = cljs.core.seq(arglist__9155);
return div__delegate(args__6568__auto__);
});
div.cljs$core$IFn$_invoke$arity$variadic = div__delegate;
return div;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.dl = (function() { 
var dl__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__7802_9156 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__7803_9157 = null;var count__7804_9158 = 0;var i__7805_9159 = 0;while(true){
if((i__7805_9159 < count__7804_9158))
{var arg__6570__auto___9160 = cljs.core._nth.call(null,chunk__7803_9157,i__7805_9159);a__6569__auto__.push(arg__6570__auto___9160);
{
var G__9161 = seq__7802_9156;
var G__9162 = chunk__7803_9157;
var G__9163 = count__7804_9158;
var G__9164 = (i__7805_9159 + 1);
seq__7802_9156 = G__9161;
chunk__7803_9157 = G__9162;
count__7804_9158 = G__9163;
i__7805_9159 = G__9164;
continue;
}
} else
{var temp__4092__auto___9165 = cljs.core.seq.call(null,seq__7802_9156);if(temp__4092__auto___9165)
{var seq__7802_9166__$1 = temp__4092__auto___9165;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7802_9166__$1))
{var c__5632__auto___9167 = cljs.core.chunk_first.call(null,seq__7802_9166__$1);{
var G__9168 = cljs.core.chunk_rest.call(null,seq__7802_9166__$1);
var G__9169 = c__5632__auto___9167;
var G__9170 = cljs.core.count.call(null,c__5632__auto___9167);
var G__9171 = 0;
seq__7802_9156 = G__9168;
chunk__7803_9157 = G__9169;
count__7804_9158 = G__9170;
i__7805_9159 = G__9171;
continue;
}
} else
{var arg__6570__auto___9172 = cljs.core.first.call(null,seq__7802_9166__$1);a__6569__auto__.push(arg__6570__auto___9172);
{
var G__9173 = cljs.core.next.call(null,seq__7802_9166__$1);
var G__9174 = null;
var G__9175 = 0;
var G__9176 = 0;
seq__7802_9156 = G__9173;
chunk__7803_9157 = G__9174;
count__7804_9158 = G__9175;
i__7805_9159 = G__9176;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.dl.apply(null,a__6569__auto__);
};
var dl = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return dl__delegate.call(this,args__6568__auto__);};
dl.cljs$lang$maxFixedArity = 0;
dl.cljs$lang$applyTo = (function (arglist__9177){
var args__6568__auto__ = cljs.core.seq(arglist__9177);
return dl__delegate(args__6568__auto__);
});
dl.cljs$core$IFn$_invoke$arity$variadic = dl__delegate;
return dl;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.dt = (function() { 
var dt__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__7810_9178 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__7811_9179 = null;var count__7812_9180 = 0;var i__7813_9181 = 0;while(true){
if((i__7813_9181 < count__7812_9180))
{var arg__6570__auto___9182 = cljs.core._nth.call(null,chunk__7811_9179,i__7813_9181);a__6569__auto__.push(arg__6570__auto___9182);
{
var G__9183 = seq__7810_9178;
var G__9184 = chunk__7811_9179;
var G__9185 = count__7812_9180;
var G__9186 = (i__7813_9181 + 1);
seq__7810_9178 = G__9183;
chunk__7811_9179 = G__9184;
count__7812_9180 = G__9185;
i__7813_9181 = G__9186;
continue;
}
} else
{var temp__4092__auto___9187 = cljs.core.seq.call(null,seq__7810_9178);if(temp__4092__auto___9187)
{var seq__7810_9188__$1 = temp__4092__auto___9187;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7810_9188__$1))
{var c__5632__auto___9189 = cljs.core.chunk_first.call(null,seq__7810_9188__$1);{
var G__9190 = cljs.core.chunk_rest.call(null,seq__7810_9188__$1);
var G__9191 = c__5632__auto___9189;
var G__9192 = cljs.core.count.call(null,c__5632__auto___9189);
var G__9193 = 0;
seq__7810_9178 = G__9190;
chunk__7811_9179 = G__9191;
count__7812_9180 = G__9192;
i__7813_9181 = G__9193;
continue;
}
} else
{var arg__6570__auto___9194 = cljs.core.first.call(null,seq__7810_9188__$1);a__6569__auto__.push(arg__6570__auto___9194);
{
var G__9195 = cljs.core.next.call(null,seq__7810_9188__$1);
var G__9196 = null;
var G__9197 = 0;
var G__9198 = 0;
seq__7810_9178 = G__9195;
chunk__7811_9179 = G__9196;
count__7812_9180 = G__9197;
i__7813_9181 = G__9198;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.dt.apply(null,a__6569__auto__);
};
var dt = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return dt__delegate.call(this,args__6568__auto__);};
dt.cljs$lang$maxFixedArity = 0;
dt.cljs$lang$applyTo = (function (arglist__9199){
var args__6568__auto__ = cljs.core.seq(arglist__9199);
return dt__delegate(args__6568__auto__);
});
dt.cljs$core$IFn$_invoke$arity$variadic = dt__delegate;
return dt;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.em = (function() { 
var em__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__7818_9200 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__7819_9201 = null;var count__7820_9202 = 0;var i__7821_9203 = 0;while(true){
if((i__7821_9203 < count__7820_9202))
{var arg__6570__auto___9204 = cljs.core._nth.call(null,chunk__7819_9201,i__7821_9203);a__6569__auto__.push(arg__6570__auto___9204);
{
var G__9205 = seq__7818_9200;
var G__9206 = chunk__7819_9201;
var G__9207 = count__7820_9202;
var G__9208 = (i__7821_9203 + 1);
seq__7818_9200 = G__9205;
chunk__7819_9201 = G__9206;
count__7820_9202 = G__9207;
i__7821_9203 = G__9208;
continue;
}
} else
{var temp__4092__auto___9209 = cljs.core.seq.call(null,seq__7818_9200);if(temp__4092__auto___9209)
{var seq__7818_9210__$1 = temp__4092__auto___9209;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7818_9210__$1))
{var c__5632__auto___9211 = cljs.core.chunk_first.call(null,seq__7818_9210__$1);{
var G__9212 = cljs.core.chunk_rest.call(null,seq__7818_9210__$1);
var G__9213 = c__5632__auto___9211;
var G__9214 = cljs.core.count.call(null,c__5632__auto___9211);
var G__9215 = 0;
seq__7818_9200 = G__9212;
chunk__7819_9201 = G__9213;
count__7820_9202 = G__9214;
i__7821_9203 = G__9215;
continue;
}
} else
{var arg__6570__auto___9216 = cljs.core.first.call(null,seq__7818_9210__$1);a__6569__auto__.push(arg__6570__auto___9216);
{
var G__9217 = cljs.core.next.call(null,seq__7818_9210__$1);
var G__9218 = null;
var G__9219 = 0;
var G__9220 = 0;
seq__7818_9200 = G__9217;
chunk__7819_9201 = G__9218;
count__7820_9202 = G__9219;
i__7821_9203 = G__9220;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.em.apply(null,a__6569__auto__);
};
var em = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return em__delegate.call(this,args__6568__auto__);};
em.cljs$lang$maxFixedArity = 0;
em.cljs$lang$applyTo = (function (arglist__9221){
var args__6568__auto__ = cljs.core.seq(arglist__9221);
return em__delegate(args__6568__auto__);
});
em.cljs$core$IFn$_invoke$arity$variadic = em__delegate;
return em;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.embed = (function() { 
var embed__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__7834_9222 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__7835_9223 = null;var count__7836_9224 = 0;var i__7837_9225 = 0;while(true){
if((i__7837_9225 < count__7836_9224))
{var arg__6570__auto___9226 = cljs.core._nth.call(null,chunk__7835_9223,i__7837_9225);a__6569__auto__.push(arg__6570__auto___9226);
{
var G__9227 = seq__7834_9222;
var G__9228 = chunk__7835_9223;
var G__9229 = count__7836_9224;
var G__9230 = (i__7837_9225 + 1);
seq__7834_9222 = G__9227;
chunk__7835_9223 = G__9228;
count__7836_9224 = G__9229;
i__7837_9225 = G__9230;
continue;
}
} else
{var temp__4092__auto___9231 = cljs.core.seq.call(null,seq__7834_9222);if(temp__4092__auto___9231)
{var seq__7834_9232__$1 = temp__4092__auto___9231;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7834_9232__$1))
{var c__5632__auto___9233 = cljs.core.chunk_first.call(null,seq__7834_9232__$1);{
var G__9234 = cljs.core.chunk_rest.call(null,seq__7834_9232__$1);
var G__9235 = c__5632__auto___9233;
var G__9236 = cljs.core.count.call(null,c__5632__auto___9233);
var G__9237 = 0;
seq__7834_9222 = G__9234;
chunk__7835_9223 = G__9235;
count__7836_9224 = G__9236;
i__7837_9225 = G__9237;
continue;
}
} else
{var arg__6570__auto___9238 = cljs.core.first.call(null,seq__7834_9232__$1);a__6569__auto__.push(arg__6570__auto___9238);
{
var G__9239 = cljs.core.next.call(null,seq__7834_9232__$1);
var G__9240 = null;
var G__9241 = 0;
var G__9242 = 0;
seq__7834_9222 = G__9239;
chunk__7835_9223 = G__9240;
count__7836_9224 = G__9241;
i__7837_9225 = G__9242;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.embed.apply(null,a__6569__auto__);
};
var embed = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return embed__delegate.call(this,args__6568__auto__);};
embed.cljs$lang$maxFixedArity = 0;
embed.cljs$lang$applyTo = (function (arglist__9243){
var args__6568__auto__ = cljs.core.seq(arglist__9243);
return embed__delegate(args__6568__auto__);
});
embed.cljs$core$IFn$_invoke$arity$variadic = embed__delegate;
return embed;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.fieldset = (function() { 
var fieldset__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__7842_9244 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__7843_9245 = null;var count__7844_9246 = 0;var i__7845_9247 = 0;while(true){
if((i__7845_9247 < count__7844_9246))
{var arg__6570__auto___9248 = cljs.core._nth.call(null,chunk__7843_9245,i__7845_9247);a__6569__auto__.push(arg__6570__auto___9248);
{
var G__9249 = seq__7842_9244;
var G__9250 = chunk__7843_9245;
var G__9251 = count__7844_9246;
var G__9252 = (i__7845_9247 + 1);
seq__7842_9244 = G__9249;
chunk__7843_9245 = G__9250;
count__7844_9246 = G__9251;
i__7845_9247 = G__9252;
continue;
}
} else
{var temp__4092__auto___9253 = cljs.core.seq.call(null,seq__7842_9244);if(temp__4092__auto___9253)
{var seq__7842_9254__$1 = temp__4092__auto___9253;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7842_9254__$1))
{var c__5632__auto___9255 = cljs.core.chunk_first.call(null,seq__7842_9254__$1);{
var G__9256 = cljs.core.chunk_rest.call(null,seq__7842_9254__$1);
var G__9257 = c__5632__auto___9255;
var G__9258 = cljs.core.count.call(null,c__5632__auto___9255);
var G__9259 = 0;
seq__7842_9244 = G__9256;
chunk__7843_9245 = G__9257;
count__7844_9246 = G__9258;
i__7845_9247 = G__9259;
continue;
}
} else
{var arg__6570__auto___9260 = cljs.core.first.call(null,seq__7842_9254__$1);a__6569__auto__.push(arg__6570__auto___9260);
{
var G__9261 = cljs.core.next.call(null,seq__7842_9254__$1);
var G__9262 = null;
var G__9263 = 0;
var G__9264 = 0;
seq__7842_9244 = G__9261;
chunk__7843_9245 = G__9262;
count__7844_9246 = G__9263;
i__7845_9247 = G__9264;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.fieldset.apply(null,a__6569__auto__);
};
var fieldset = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return fieldset__delegate.call(this,args__6568__auto__);};
fieldset.cljs$lang$maxFixedArity = 0;
fieldset.cljs$lang$applyTo = (function (arglist__9265){
var args__6568__auto__ = cljs.core.seq(arglist__9265);
return fieldset__delegate(args__6568__auto__);
});
fieldset.cljs$core$IFn$_invoke$arity$variadic = fieldset__delegate;
return fieldset;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.figcaption = (function() { 
var figcaption__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__7850_9266 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__7851_9267 = null;var count__7852_9268 = 0;var i__7853_9269 = 0;while(true){
if((i__7853_9269 < count__7852_9268))
{var arg__6570__auto___9270 = cljs.core._nth.call(null,chunk__7851_9267,i__7853_9269);a__6569__auto__.push(arg__6570__auto___9270);
{
var G__9271 = seq__7850_9266;
var G__9272 = chunk__7851_9267;
var G__9273 = count__7852_9268;
var G__9274 = (i__7853_9269 + 1);
seq__7850_9266 = G__9271;
chunk__7851_9267 = G__9272;
count__7852_9268 = G__9273;
i__7853_9269 = G__9274;
continue;
}
} else
{var temp__4092__auto___9275 = cljs.core.seq.call(null,seq__7850_9266);if(temp__4092__auto___9275)
{var seq__7850_9276__$1 = temp__4092__auto___9275;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7850_9276__$1))
{var c__5632__auto___9277 = cljs.core.chunk_first.call(null,seq__7850_9276__$1);{
var G__9278 = cljs.core.chunk_rest.call(null,seq__7850_9276__$1);
var G__9279 = c__5632__auto___9277;
var G__9280 = cljs.core.count.call(null,c__5632__auto___9277);
var G__9281 = 0;
seq__7850_9266 = G__9278;
chunk__7851_9267 = G__9279;
count__7852_9268 = G__9280;
i__7853_9269 = G__9281;
continue;
}
} else
{var arg__6570__auto___9282 = cljs.core.first.call(null,seq__7850_9276__$1);a__6569__auto__.push(arg__6570__auto___9282);
{
var G__9283 = cljs.core.next.call(null,seq__7850_9276__$1);
var G__9284 = null;
var G__9285 = 0;
var G__9286 = 0;
seq__7850_9266 = G__9283;
chunk__7851_9267 = G__9284;
count__7852_9268 = G__9285;
i__7853_9269 = G__9286;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.figcaption.apply(null,a__6569__auto__);
};
var figcaption = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return figcaption__delegate.call(this,args__6568__auto__);};
figcaption.cljs$lang$maxFixedArity = 0;
figcaption.cljs$lang$applyTo = (function (arglist__9287){
var args__6568__auto__ = cljs.core.seq(arglist__9287);
return figcaption__delegate(args__6568__auto__);
});
figcaption.cljs$core$IFn$_invoke$arity$variadic = figcaption__delegate;
return figcaption;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.figure = (function() { 
var figure__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__7858_9288 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__7859_9289 = null;var count__7860_9290 = 0;var i__7861_9291 = 0;while(true){
if((i__7861_9291 < count__7860_9290))
{var arg__6570__auto___9292 = cljs.core._nth.call(null,chunk__7859_9289,i__7861_9291);a__6569__auto__.push(arg__6570__auto___9292);
{
var G__9293 = seq__7858_9288;
var G__9294 = chunk__7859_9289;
var G__9295 = count__7860_9290;
var G__9296 = (i__7861_9291 + 1);
seq__7858_9288 = G__9293;
chunk__7859_9289 = G__9294;
count__7860_9290 = G__9295;
i__7861_9291 = G__9296;
continue;
}
} else
{var temp__4092__auto___9297 = cljs.core.seq.call(null,seq__7858_9288);if(temp__4092__auto___9297)
{var seq__7858_9298__$1 = temp__4092__auto___9297;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7858_9298__$1))
{var c__5632__auto___9299 = cljs.core.chunk_first.call(null,seq__7858_9298__$1);{
var G__9300 = cljs.core.chunk_rest.call(null,seq__7858_9298__$1);
var G__9301 = c__5632__auto___9299;
var G__9302 = cljs.core.count.call(null,c__5632__auto___9299);
var G__9303 = 0;
seq__7858_9288 = G__9300;
chunk__7859_9289 = G__9301;
count__7860_9290 = G__9302;
i__7861_9291 = G__9303;
continue;
}
} else
{var arg__6570__auto___9304 = cljs.core.first.call(null,seq__7858_9298__$1);a__6569__auto__.push(arg__6570__auto___9304);
{
var G__9305 = cljs.core.next.call(null,seq__7858_9298__$1);
var G__9306 = null;
var G__9307 = 0;
var G__9308 = 0;
seq__7858_9288 = G__9305;
chunk__7859_9289 = G__9306;
count__7860_9290 = G__9307;
i__7861_9291 = G__9308;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.figure.apply(null,a__6569__auto__);
};
var figure = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return figure__delegate.call(this,args__6568__auto__);};
figure.cljs$lang$maxFixedArity = 0;
figure.cljs$lang$applyTo = (function (arglist__9309){
var args__6568__auto__ = cljs.core.seq(arglist__9309);
return figure__delegate(args__6568__auto__);
});
figure.cljs$core$IFn$_invoke$arity$variadic = figure__delegate;
return figure;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.footer = (function() { 
var footer__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__7866_9310 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__7867_9311 = null;var count__7868_9312 = 0;var i__7869_9313 = 0;while(true){
if((i__7869_9313 < count__7868_9312))
{var arg__6570__auto___9314 = cljs.core._nth.call(null,chunk__7867_9311,i__7869_9313);a__6569__auto__.push(arg__6570__auto___9314);
{
var G__9315 = seq__7866_9310;
var G__9316 = chunk__7867_9311;
var G__9317 = count__7868_9312;
var G__9318 = (i__7869_9313 + 1);
seq__7866_9310 = G__9315;
chunk__7867_9311 = G__9316;
count__7868_9312 = G__9317;
i__7869_9313 = G__9318;
continue;
}
} else
{var temp__4092__auto___9319 = cljs.core.seq.call(null,seq__7866_9310);if(temp__4092__auto___9319)
{var seq__7866_9320__$1 = temp__4092__auto___9319;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7866_9320__$1))
{var c__5632__auto___9321 = cljs.core.chunk_first.call(null,seq__7866_9320__$1);{
var G__9322 = cljs.core.chunk_rest.call(null,seq__7866_9320__$1);
var G__9323 = c__5632__auto___9321;
var G__9324 = cljs.core.count.call(null,c__5632__auto___9321);
var G__9325 = 0;
seq__7866_9310 = G__9322;
chunk__7867_9311 = G__9323;
count__7868_9312 = G__9324;
i__7869_9313 = G__9325;
continue;
}
} else
{var arg__6570__auto___9326 = cljs.core.first.call(null,seq__7866_9320__$1);a__6569__auto__.push(arg__6570__auto___9326);
{
var G__9327 = cljs.core.next.call(null,seq__7866_9320__$1);
var G__9328 = null;
var G__9329 = 0;
var G__9330 = 0;
seq__7866_9310 = G__9327;
chunk__7867_9311 = G__9328;
count__7868_9312 = G__9329;
i__7869_9313 = G__9330;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.footer.apply(null,a__6569__auto__);
};
var footer = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return footer__delegate.call(this,args__6568__auto__);};
footer.cljs$lang$maxFixedArity = 0;
footer.cljs$lang$applyTo = (function (arglist__9331){
var args__6568__auto__ = cljs.core.seq(arglist__9331);
return footer__delegate(args__6568__auto__);
});
footer.cljs$core$IFn$_invoke$arity$variadic = footer__delegate;
return footer;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.form = (function() { 
var form__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__7874_9332 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__7875_9333 = null;var count__7876_9334 = 0;var i__7877_9335 = 0;while(true){
if((i__7877_9335 < count__7876_9334))
{var arg__6570__auto___9336 = cljs.core._nth.call(null,chunk__7875_9333,i__7877_9335);a__6569__auto__.push(arg__6570__auto___9336);
{
var G__9337 = seq__7874_9332;
var G__9338 = chunk__7875_9333;
var G__9339 = count__7876_9334;
var G__9340 = (i__7877_9335 + 1);
seq__7874_9332 = G__9337;
chunk__7875_9333 = G__9338;
count__7876_9334 = G__9339;
i__7877_9335 = G__9340;
continue;
}
} else
{var temp__4092__auto___9341 = cljs.core.seq.call(null,seq__7874_9332);if(temp__4092__auto___9341)
{var seq__7874_9342__$1 = temp__4092__auto___9341;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7874_9342__$1))
{var c__5632__auto___9343 = cljs.core.chunk_first.call(null,seq__7874_9342__$1);{
var G__9344 = cljs.core.chunk_rest.call(null,seq__7874_9342__$1);
var G__9345 = c__5632__auto___9343;
var G__9346 = cljs.core.count.call(null,c__5632__auto___9343);
var G__9347 = 0;
seq__7874_9332 = G__9344;
chunk__7875_9333 = G__9345;
count__7876_9334 = G__9346;
i__7877_9335 = G__9347;
continue;
}
} else
{var arg__6570__auto___9348 = cljs.core.first.call(null,seq__7874_9342__$1);a__6569__auto__.push(arg__6570__auto___9348);
{
var G__9349 = cljs.core.next.call(null,seq__7874_9342__$1);
var G__9350 = null;
var G__9351 = 0;
var G__9352 = 0;
seq__7874_9332 = G__9349;
chunk__7875_9333 = G__9350;
count__7876_9334 = G__9351;
i__7877_9335 = G__9352;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.form.apply(null,a__6569__auto__);
};
var form = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return form__delegate.call(this,args__6568__auto__);};
form.cljs$lang$maxFixedArity = 0;
form.cljs$lang$applyTo = (function (arglist__9353){
var args__6568__auto__ = cljs.core.seq(arglist__9353);
return form__delegate(args__6568__auto__);
});
form.cljs$core$IFn$_invoke$arity$variadic = form__delegate;
return form;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h1 = (function() { 
var h1__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__7882_9354 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__7883_9355 = null;var count__7884_9356 = 0;var i__7885_9357 = 0;while(true){
if((i__7885_9357 < count__7884_9356))
{var arg__6570__auto___9358 = cljs.core._nth.call(null,chunk__7883_9355,i__7885_9357);a__6569__auto__.push(arg__6570__auto___9358);
{
var G__9359 = seq__7882_9354;
var G__9360 = chunk__7883_9355;
var G__9361 = count__7884_9356;
var G__9362 = (i__7885_9357 + 1);
seq__7882_9354 = G__9359;
chunk__7883_9355 = G__9360;
count__7884_9356 = G__9361;
i__7885_9357 = G__9362;
continue;
}
} else
{var temp__4092__auto___9363 = cljs.core.seq.call(null,seq__7882_9354);if(temp__4092__auto___9363)
{var seq__7882_9364__$1 = temp__4092__auto___9363;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7882_9364__$1))
{var c__5632__auto___9365 = cljs.core.chunk_first.call(null,seq__7882_9364__$1);{
var G__9366 = cljs.core.chunk_rest.call(null,seq__7882_9364__$1);
var G__9367 = c__5632__auto___9365;
var G__9368 = cljs.core.count.call(null,c__5632__auto___9365);
var G__9369 = 0;
seq__7882_9354 = G__9366;
chunk__7883_9355 = G__9367;
count__7884_9356 = G__9368;
i__7885_9357 = G__9369;
continue;
}
} else
{var arg__6570__auto___9370 = cljs.core.first.call(null,seq__7882_9364__$1);a__6569__auto__.push(arg__6570__auto___9370);
{
var G__9371 = cljs.core.next.call(null,seq__7882_9364__$1);
var G__9372 = null;
var G__9373 = 0;
var G__9374 = 0;
seq__7882_9354 = G__9371;
chunk__7883_9355 = G__9372;
count__7884_9356 = G__9373;
i__7885_9357 = G__9374;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h1.apply(null,a__6569__auto__);
};
var h1 = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h1__delegate.call(this,args__6568__auto__);};
h1.cljs$lang$maxFixedArity = 0;
h1.cljs$lang$applyTo = (function (arglist__9375){
var args__6568__auto__ = cljs.core.seq(arglist__9375);
return h1__delegate(args__6568__auto__);
});
h1.cljs$core$IFn$_invoke$arity$variadic = h1__delegate;
return h1;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h2 = (function() { 
var h2__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__7890_9376 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__7891_9377 = null;var count__7892_9378 = 0;var i__7893_9379 = 0;while(true){
if((i__7893_9379 < count__7892_9378))
{var arg__6570__auto___9380 = cljs.core._nth.call(null,chunk__7891_9377,i__7893_9379);a__6569__auto__.push(arg__6570__auto___9380);
{
var G__9381 = seq__7890_9376;
var G__9382 = chunk__7891_9377;
var G__9383 = count__7892_9378;
var G__9384 = (i__7893_9379 + 1);
seq__7890_9376 = G__9381;
chunk__7891_9377 = G__9382;
count__7892_9378 = G__9383;
i__7893_9379 = G__9384;
continue;
}
} else
{var temp__4092__auto___9385 = cljs.core.seq.call(null,seq__7890_9376);if(temp__4092__auto___9385)
{var seq__7890_9386__$1 = temp__4092__auto___9385;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7890_9386__$1))
{var c__5632__auto___9387 = cljs.core.chunk_first.call(null,seq__7890_9386__$1);{
var G__9388 = cljs.core.chunk_rest.call(null,seq__7890_9386__$1);
var G__9389 = c__5632__auto___9387;
var G__9390 = cljs.core.count.call(null,c__5632__auto___9387);
var G__9391 = 0;
seq__7890_9376 = G__9388;
chunk__7891_9377 = G__9389;
count__7892_9378 = G__9390;
i__7893_9379 = G__9391;
continue;
}
} else
{var arg__6570__auto___9392 = cljs.core.first.call(null,seq__7890_9386__$1);a__6569__auto__.push(arg__6570__auto___9392);
{
var G__9393 = cljs.core.next.call(null,seq__7890_9386__$1);
var G__9394 = null;
var G__9395 = 0;
var G__9396 = 0;
seq__7890_9376 = G__9393;
chunk__7891_9377 = G__9394;
count__7892_9378 = G__9395;
i__7893_9379 = G__9396;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h2.apply(null,a__6569__auto__);
};
var h2 = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h2__delegate.call(this,args__6568__auto__);};
h2.cljs$lang$maxFixedArity = 0;
h2.cljs$lang$applyTo = (function (arglist__9397){
var args__6568__auto__ = cljs.core.seq(arglist__9397);
return h2__delegate(args__6568__auto__);
});
h2.cljs$core$IFn$_invoke$arity$variadic = h2__delegate;
return h2;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h3 = (function() { 
var h3__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__7898_9398 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__7899_9399 = null;var count__7900_9400 = 0;var i__7901_9401 = 0;while(true){
if((i__7901_9401 < count__7900_9400))
{var arg__6570__auto___9402 = cljs.core._nth.call(null,chunk__7899_9399,i__7901_9401);a__6569__auto__.push(arg__6570__auto___9402);
{
var G__9403 = seq__7898_9398;
var G__9404 = chunk__7899_9399;
var G__9405 = count__7900_9400;
var G__9406 = (i__7901_9401 + 1);
seq__7898_9398 = G__9403;
chunk__7899_9399 = G__9404;
count__7900_9400 = G__9405;
i__7901_9401 = G__9406;
continue;
}
} else
{var temp__4092__auto___9407 = cljs.core.seq.call(null,seq__7898_9398);if(temp__4092__auto___9407)
{var seq__7898_9408__$1 = temp__4092__auto___9407;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7898_9408__$1))
{var c__5632__auto___9409 = cljs.core.chunk_first.call(null,seq__7898_9408__$1);{
var G__9410 = cljs.core.chunk_rest.call(null,seq__7898_9408__$1);
var G__9411 = c__5632__auto___9409;
var G__9412 = cljs.core.count.call(null,c__5632__auto___9409);
var G__9413 = 0;
seq__7898_9398 = G__9410;
chunk__7899_9399 = G__9411;
count__7900_9400 = G__9412;
i__7901_9401 = G__9413;
continue;
}
} else
{var arg__6570__auto___9414 = cljs.core.first.call(null,seq__7898_9408__$1);a__6569__auto__.push(arg__6570__auto___9414);
{
var G__9415 = cljs.core.next.call(null,seq__7898_9408__$1);
var G__9416 = null;
var G__9417 = 0;
var G__9418 = 0;
seq__7898_9398 = G__9415;
chunk__7899_9399 = G__9416;
count__7900_9400 = G__9417;
i__7901_9401 = G__9418;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h3.apply(null,a__6569__auto__);
};
var h3 = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h3__delegate.call(this,args__6568__auto__);};
h3.cljs$lang$maxFixedArity = 0;
h3.cljs$lang$applyTo = (function (arglist__9419){
var args__6568__auto__ = cljs.core.seq(arglist__9419);
return h3__delegate(args__6568__auto__);
});
h3.cljs$core$IFn$_invoke$arity$variadic = h3__delegate;
return h3;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h4 = (function() { 
var h4__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__7906_9420 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__7907_9421 = null;var count__7908_9422 = 0;var i__7909_9423 = 0;while(true){
if((i__7909_9423 < count__7908_9422))
{var arg__6570__auto___9424 = cljs.core._nth.call(null,chunk__7907_9421,i__7909_9423);a__6569__auto__.push(arg__6570__auto___9424);
{
var G__9425 = seq__7906_9420;
var G__9426 = chunk__7907_9421;
var G__9427 = count__7908_9422;
var G__9428 = (i__7909_9423 + 1);
seq__7906_9420 = G__9425;
chunk__7907_9421 = G__9426;
count__7908_9422 = G__9427;
i__7909_9423 = G__9428;
continue;
}
} else
{var temp__4092__auto___9429 = cljs.core.seq.call(null,seq__7906_9420);if(temp__4092__auto___9429)
{var seq__7906_9430__$1 = temp__4092__auto___9429;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7906_9430__$1))
{var c__5632__auto___9431 = cljs.core.chunk_first.call(null,seq__7906_9430__$1);{
var G__9432 = cljs.core.chunk_rest.call(null,seq__7906_9430__$1);
var G__9433 = c__5632__auto___9431;
var G__9434 = cljs.core.count.call(null,c__5632__auto___9431);
var G__9435 = 0;
seq__7906_9420 = G__9432;
chunk__7907_9421 = G__9433;
count__7908_9422 = G__9434;
i__7909_9423 = G__9435;
continue;
}
} else
{var arg__6570__auto___9436 = cljs.core.first.call(null,seq__7906_9430__$1);a__6569__auto__.push(arg__6570__auto___9436);
{
var G__9437 = cljs.core.next.call(null,seq__7906_9430__$1);
var G__9438 = null;
var G__9439 = 0;
var G__9440 = 0;
seq__7906_9420 = G__9437;
chunk__7907_9421 = G__9438;
count__7908_9422 = G__9439;
i__7909_9423 = G__9440;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h4.apply(null,a__6569__auto__);
};
var h4 = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h4__delegate.call(this,args__6568__auto__);};
h4.cljs$lang$maxFixedArity = 0;
h4.cljs$lang$applyTo = (function (arglist__9441){
var args__6568__auto__ = cljs.core.seq(arglist__9441);
return h4__delegate(args__6568__auto__);
});
h4.cljs$core$IFn$_invoke$arity$variadic = h4__delegate;
return h4;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h5 = (function() { 
var h5__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__7914_9442 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__7915_9443 = null;var count__7916_9444 = 0;var i__7917_9445 = 0;while(true){
if((i__7917_9445 < count__7916_9444))
{var arg__6570__auto___9446 = cljs.core._nth.call(null,chunk__7915_9443,i__7917_9445);a__6569__auto__.push(arg__6570__auto___9446);
{
var G__9447 = seq__7914_9442;
var G__9448 = chunk__7915_9443;
var G__9449 = count__7916_9444;
var G__9450 = (i__7917_9445 + 1);
seq__7914_9442 = G__9447;
chunk__7915_9443 = G__9448;
count__7916_9444 = G__9449;
i__7917_9445 = G__9450;
continue;
}
} else
{var temp__4092__auto___9451 = cljs.core.seq.call(null,seq__7914_9442);if(temp__4092__auto___9451)
{var seq__7914_9452__$1 = temp__4092__auto___9451;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7914_9452__$1))
{var c__5632__auto___9453 = cljs.core.chunk_first.call(null,seq__7914_9452__$1);{
var G__9454 = cljs.core.chunk_rest.call(null,seq__7914_9452__$1);
var G__9455 = c__5632__auto___9453;
var G__9456 = cljs.core.count.call(null,c__5632__auto___9453);
var G__9457 = 0;
seq__7914_9442 = G__9454;
chunk__7915_9443 = G__9455;
count__7916_9444 = G__9456;
i__7917_9445 = G__9457;
continue;
}
} else
{var arg__6570__auto___9458 = cljs.core.first.call(null,seq__7914_9452__$1);a__6569__auto__.push(arg__6570__auto___9458);
{
var G__9459 = cljs.core.next.call(null,seq__7914_9452__$1);
var G__9460 = null;
var G__9461 = 0;
var G__9462 = 0;
seq__7914_9442 = G__9459;
chunk__7915_9443 = G__9460;
count__7916_9444 = G__9461;
i__7917_9445 = G__9462;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h5.apply(null,a__6569__auto__);
};
var h5 = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h5__delegate.call(this,args__6568__auto__);};
h5.cljs$lang$maxFixedArity = 0;
h5.cljs$lang$applyTo = (function (arglist__9463){
var args__6568__auto__ = cljs.core.seq(arglist__9463);
return h5__delegate(args__6568__auto__);
});
h5.cljs$core$IFn$_invoke$arity$variadic = h5__delegate;
return h5;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h6 = (function() { 
var h6__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__7922_9464 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__7923_9465 = null;var count__7924_9466 = 0;var i__7925_9467 = 0;while(true){
if((i__7925_9467 < count__7924_9466))
{var arg__6570__auto___9468 = cljs.core._nth.call(null,chunk__7923_9465,i__7925_9467);a__6569__auto__.push(arg__6570__auto___9468);
{
var G__9469 = seq__7922_9464;
var G__9470 = chunk__7923_9465;
var G__9471 = count__7924_9466;
var G__9472 = (i__7925_9467 + 1);
seq__7922_9464 = G__9469;
chunk__7923_9465 = G__9470;
count__7924_9466 = G__9471;
i__7925_9467 = G__9472;
continue;
}
} else
{var temp__4092__auto___9473 = cljs.core.seq.call(null,seq__7922_9464);if(temp__4092__auto___9473)
{var seq__7922_9474__$1 = temp__4092__auto___9473;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7922_9474__$1))
{var c__5632__auto___9475 = cljs.core.chunk_first.call(null,seq__7922_9474__$1);{
var G__9476 = cljs.core.chunk_rest.call(null,seq__7922_9474__$1);
var G__9477 = c__5632__auto___9475;
var G__9478 = cljs.core.count.call(null,c__5632__auto___9475);
var G__9479 = 0;
seq__7922_9464 = G__9476;
chunk__7923_9465 = G__9477;
count__7924_9466 = G__9478;
i__7925_9467 = G__9479;
continue;
}
} else
{var arg__6570__auto___9480 = cljs.core.first.call(null,seq__7922_9474__$1);a__6569__auto__.push(arg__6570__auto___9480);
{
var G__9481 = cljs.core.next.call(null,seq__7922_9474__$1);
var G__9482 = null;
var G__9483 = 0;
var G__9484 = 0;
seq__7922_9464 = G__9481;
chunk__7923_9465 = G__9482;
count__7924_9466 = G__9483;
i__7925_9467 = G__9484;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h6.apply(null,a__6569__auto__);
};
var h6 = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h6__delegate.call(this,args__6568__auto__);};
h6.cljs$lang$maxFixedArity = 0;
h6.cljs$lang$applyTo = (function (arglist__9485){
var args__6568__auto__ = cljs.core.seq(arglist__9485);
return h6__delegate(args__6568__auto__);
});
h6.cljs$core$IFn$_invoke$arity$variadic = h6__delegate;
return h6;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.head = (function() { 
var head__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__7930_9486 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__7931_9487 = null;var count__7932_9488 = 0;var i__7933_9489 = 0;while(true){
if((i__7933_9489 < count__7932_9488))
{var arg__6570__auto___9490 = cljs.core._nth.call(null,chunk__7931_9487,i__7933_9489);a__6569__auto__.push(arg__6570__auto___9490);
{
var G__9491 = seq__7930_9486;
var G__9492 = chunk__7931_9487;
var G__9493 = count__7932_9488;
var G__9494 = (i__7933_9489 + 1);
seq__7930_9486 = G__9491;
chunk__7931_9487 = G__9492;
count__7932_9488 = G__9493;
i__7933_9489 = G__9494;
continue;
}
} else
{var temp__4092__auto___9495 = cljs.core.seq.call(null,seq__7930_9486);if(temp__4092__auto___9495)
{var seq__7930_9496__$1 = temp__4092__auto___9495;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7930_9496__$1))
{var c__5632__auto___9497 = cljs.core.chunk_first.call(null,seq__7930_9496__$1);{
var G__9498 = cljs.core.chunk_rest.call(null,seq__7930_9496__$1);
var G__9499 = c__5632__auto___9497;
var G__9500 = cljs.core.count.call(null,c__5632__auto___9497);
var G__9501 = 0;
seq__7930_9486 = G__9498;
chunk__7931_9487 = G__9499;
count__7932_9488 = G__9500;
i__7933_9489 = G__9501;
continue;
}
} else
{var arg__6570__auto___9502 = cljs.core.first.call(null,seq__7930_9496__$1);a__6569__auto__.push(arg__6570__auto___9502);
{
var G__9503 = cljs.core.next.call(null,seq__7930_9496__$1);
var G__9504 = null;
var G__9505 = 0;
var G__9506 = 0;
seq__7930_9486 = G__9503;
chunk__7931_9487 = G__9504;
count__7932_9488 = G__9505;
i__7933_9489 = G__9506;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.head.apply(null,a__6569__auto__);
};
var head = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return head__delegate.call(this,args__6568__auto__);};
head.cljs$lang$maxFixedArity = 0;
head.cljs$lang$applyTo = (function (arglist__9507){
var args__6568__auto__ = cljs.core.seq(arglist__9507);
return head__delegate(args__6568__auto__);
});
head.cljs$core$IFn$_invoke$arity$variadic = head__delegate;
return head;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.header = (function() { 
var header__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__7938_9508 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__7939_9509 = null;var count__7940_9510 = 0;var i__7941_9511 = 0;while(true){
if((i__7941_9511 < count__7940_9510))
{var arg__6570__auto___9512 = cljs.core._nth.call(null,chunk__7939_9509,i__7941_9511);a__6569__auto__.push(arg__6570__auto___9512);
{
var G__9513 = seq__7938_9508;
var G__9514 = chunk__7939_9509;
var G__9515 = count__7940_9510;
var G__9516 = (i__7941_9511 + 1);
seq__7938_9508 = G__9513;
chunk__7939_9509 = G__9514;
count__7940_9510 = G__9515;
i__7941_9511 = G__9516;
continue;
}
} else
{var temp__4092__auto___9517 = cljs.core.seq.call(null,seq__7938_9508);if(temp__4092__auto___9517)
{var seq__7938_9518__$1 = temp__4092__auto___9517;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7938_9518__$1))
{var c__5632__auto___9519 = cljs.core.chunk_first.call(null,seq__7938_9518__$1);{
var G__9520 = cljs.core.chunk_rest.call(null,seq__7938_9518__$1);
var G__9521 = c__5632__auto___9519;
var G__9522 = cljs.core.count.call(null,c__5632__auto___9519);
var G__9523 = 0;
seq__7938_9508 = G__9520;
chunk__7939_9509 = G__9521;
count__7940_9510 = G__9522;
i__7941_9511 = G__9523;
continue;
}
} else
{var arg__6570__auto___9524 = cljs.core.first.call(null,seq__7938_9518__$1);a__6569__auto__.push(arg__6570__auto___9524);
{
var G__9525 = cljs.core.next.call(null,seq__7938_9518__$1);
var G__9526 = null;
var G__9527 = 0;
var G__9528 = 0;
seq__7938_9508 = G__9525;
chunk__7939_9509 = G__9526;
count__7940_9510 = G__9527;
i__7941_9511 = G__9528;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.header.apply(null,a__6569__auto__);
};
var header = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return header__delegate.call(this,args__6568__auto__);};
header.cljs$lang$maxFixedArity = 0;
header.cljs$lang$applyTo = (function (arglist__9529){
var args__6568__auto__ = cljs.core.seq(arglist__9529);
return header__delegate(args__6568__auto__);
});
header.cljs$core$IFn$_invoke$arity$variadic = header__delegate;
return header;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.hr = (function() { 
var hr__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__7946_9530 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__7947_9531 = null;var count__7948_9532 = 0;var i__7949_9533 = 0;while(true){
if((i__7949_9533 < count__7948_9532))
{var arg__6570__auto___9534 = cljs.core._nth.call(null,chunk__7947_9531,i__7949_9533);a__6569__auto__.push(arg__6570__auto___9534);
{
var G__9535 = seq__7946_9530;
var G__9536 = chunk__7947_9531;
var G__9537 = count__7948_9532;
var G__9538 = (i__7949_9533 + 1);
seq__7946_9530 = G__9535;
chunk__7947_9531 = G__9536;
count__7948_9532 = G__9537;
i__7949_9533 = G__9538;
continue;
}
} else
{var temp__4092__auto___9539 = cljs.core.seq.call(null,seq__7946_9530);if(temp__4092__auto___9539)
{var seq__7946_9540__$1 = temp__4092__auto___9539;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7946_9540__$1))
{var c__5632__auto___9541 = cljs.core.chunk_first.call(null,seq__7946_9540__$1);{
var G__9542 = cljs.core.chunk_rest.call(null,seq__7946_9540__$1);
var G__9543 = c__5632__auto___9541;
var G__9544 = cljs.core.count.call(null,c__5632__auto___9541);
var G__9545 = 0;
seq__7946_9530 = G__9542;
chunk__7947_9531 = G__9543;
count__7948_9532 = G__9544;
i__7949_9533 = G__9545;
continue;
}
} else
{var arg__6570__auto___9546 = cljs.core.first.call(null,seq__7946_9540__$1);a__6569__auto__.push(arg__6570__auto___9546);
{
var G__9547 = cljs.core.next.call(null,seq__7946_9540__$1);
var G__9548 = null;
var G__9549 = 0;
var G__9550 = 0;
seq__7946_9530 = G__9547;
chunk__7947_9531 = G__9548;
count__7948_9532 = G__9549;
i__7949_9533 = G__9550;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.hr.apply(null,a__6569__auto__);
};
var hr = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return hr__delegate.call(this,args__6568__auto__);};
hr.cljs$lang$maxFixedArity = 0;
hr.cljs$lang$applyTo = (function (arglist__9551){
var args__6568__auto__ = cljs.core.seq(arglist__9551);
return hr__delegate(args__6568__auto__);
});
hr.cljs$core$IFn$_invoke$arity$variadic = hr__delegate;
return hr;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.html = (function() { 
var html__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__7954_9552 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__7955_9553 = null;var count__7956_9554 = 0;var i__7957_9555 = 0;while(true){
if((i__7957_9555 < count__7956_9554))
{var arg__6570__auto___9556 = cljs.core._nth.call(null,chunk__7955_9553,i__7957_9555);a__6569__auto__.push(arg__6570__auto___9556);
{
var G__9557 = seq__7954_9552;
var G__9558 = chunk__7955_9553;
var G__9559 = count__7956_9554;
var G__9560 = (i__7957_9555 + 1);
seq__7954_9552 = G__9557;
chunk__7955_9553 = G__9558;
count__7956_9554 = G__9559;
i__7957_9555 = G__9560;
continue;
}
} else
{var temp__4092__auto___9561 = cljs.core.seq.call(null,seq__7954_9552);if(temp__4092__auto___9561)
{var seq__7954_9562__$1 = temp__4092__auto___9561;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7954_9562__$1))
{var c__5632__auto___9563 = cljs.core.chunk_first.call(null,seq__7954_9562__$1);{
var G__9564 = cljs.core.chunk_rest.call(null,seq__7954_9562__$1);
var G__9565 = c__5632__auto___9563;
var G__9566 = cljs.core.count.call(null,c__5632__auto___9563);
var G__9567 = 0;
seq__7954_9552 = G__9564;
chunk__7955_9553 = G__9565;
count__7956_9554 = G__9566;
i__7957_9555 = G__9567;
continue;
}
} else
{var arg__6570__auto___9568 = cljs.core.first.call(null,seq__7954_9562__$1);a__6569__auto__.push(arg__6570__auto___9568);
{
var G__9569 = cljs.core.next.call(null,seq__7954_9562__$1);
var G__9570 = null;
var G__9571 = 0;
var G__9572 = 0;
seq__7954_9552 = G__9569;
chunk__7955_9553 = G__9570;
count__7956_9554 = G__9571;
i__7957_9555 = G__9572;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.html.apply(null,a__6569__auto__);
};
var html = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return html__delegate.call(this,args__6568__auto__);};
html.cljs$lang$maxFixedArity = 0;
html.cljs$lang$applyTo = (function (arglist__9573){
var args__6568__auto__ = cljs.core.seq(arglist__9573);
return html__delegate(args__6568__auto__);
});
html.cljs$core$IFn$_invoke$arity$variadic = html__delegate;
return html;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.i = (function() { 
var i__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__7962_9574 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__7963_9575 = null;var count__7964_9576 = 0;var i__7965_9577 = 0;while(true){
if((i__7965_9577 < count__7964_9576))
{var arg__6570__auto___9578 = cljs.core._nth.call(null,chunk__7963_9575,i__7965_9577);a__6569__auto__.push(arg__6570__auto___9578);
{
var G__9579 = seq__7962_9574;
var G__9580 = chunk__7963_9575;
var G__9581 = count__7964_9576;
var G__9582 = (i__7965_9577 + 1);
seq__7962_9574 = G__9579;
chunk__7963_9575 = G__9580;
count__7964_9576 = G__9581;
i__7965_9577 = G__9582;
continue;
}
} else
{var temp__4092__auto___9583 = cljs.core.seq.call(null,seq__7962_9574);if(temp__4092__auto___9583)
{var seq__7962_9584__$1 = temp__4092__auto___9583;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7962_9584__$1))
{var c__5632__auto___9585 = cljs.core.chunk_first.call(null,seq__7962_9584__$1);{
var G__9586 = cljs.core.chunk_rest.call(null,seq__7962_9584__$1);
var G__9587 = c__5632__auto___9585;
var G__9588 = cljs.core.count.call(null,c__5632__auto___9585);
var G__9589 = 0;
seq__7962_9574 = G__9586;
chunk__7963_9575 = G__9587;
count__7964_9576 = G__9588;
i__7965_9577 = G__9589;
continue;
}
} else
{var arg__6570__auto___9590 = cljs.core.first.call(null,seq__7962_9584__$1);a__6569__auto__.push(arg__6570__auto___9590);
{
var G__9591 = cljs.core.next.call(null,seq__7962_9584__$1);
var G__9592 = null;
var G__9593 = 0;
var G__9594 = 0;
seq__7962_9574 = G__9591;
chunk__7963_9575 = G__9592;
count__7964_9576 = G__9593;
i__7965_9577 = G__9594;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.i.apply(null,a__6569__auto__);
};
var i = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return i__delegate.call(this,args__6568__auto__);};
i.cljs$lang$maxFixedArity = 0;
i.cljs$lang$applyTo = (function (arglist__9595){
var args__6568__auto__ = cljs.core.seq(arglist__9595);
return i__delegate(args__6568__auto__);
});
i.cljs$core$IFn$_invoke$arity$variadic = i__delegate;
return i;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.iframe = (function() { 
var iframe__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__7970_9596 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__7971_9597 = null;var count__7972_9598 = 0;var i__7973_9599 = 0;while(true){
if((i__7973_9599 < count__7972_9598))
{var arg__6570__auto___9600 = cljs.core._nth.call(null,chunk__7971_9597,i__7973_9599);a__6569__auto__.push(arg__6570__auto___9600);
{
var G__9601 = seq__7970_9596;
var G__9602 = chunk__7971_9597;
var G__9603 = count__7972_9598;
var G__9604 = (i__7973_9599 + 1);
seq__7970_9596 = G__9601;
chunk__7971_9597 = G__9602;
count__7972_9598 = G__9603;
i__7973_9599 = G__9604;
continue;
}
} else
{var temp__4092__auto___9605 = cljs.core.seq.call(null,seq__7970_9596);if(temp__4092__auto___9605)
{var seq__7970_9606__$1 = temp__4092__auto___9605;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7970_9606__$1))
{var c__5632__auto___9607 = cljs.core.chunk_first.call(null,seq__7970_9606__$1);{
var G__9608 = cljs.core.chunk_rest.call(null,seq__7970_9606__$1);
var G__9609 = c__5632__auto___9607;
var G__9610 = cljs.core.count.call(null,c__5632__auto___9607);
var G__9611 = 0;
seq__7970_9596 = G__9608;
chunk__7971_9597 = G__9609;
count__7972_9598 = G__9610;
i__7973_9599 = G__9611;
continue;
}
} else
{var arg__6570__auto___9612 = cljs.core.first.call(null,seq__7970_9606__$1);a__6569__auto__.push(arg__6570__auto___9612);
{
var G__9613 = cljs.core.next.call(null,seq__7970_9606__$1);
var G__9614 = null;
var G__9615 = 0;
var G__9616 = 0;
seq__7970_9596 = G__9613;
chunk__7971_9597 = G__9614;
count__7972_9598 = G__9615;
i__7973_9599 = G__9616;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.iframe.apply(null,a__6569__auto__);
};
var iframe = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return iframe__delegate.call(this,args__6568__auto__);};
iframe.cljs$lang$maxFixedArity = 0;
iframe.cljs$lang$applyTo = (function (arglist__9617){
var args__6568__auto__ = cljs.core.seq(arglist__9617);
return iframe__delegate(args__6568__auto__);
});
iframe.cljs$core$IFn$_invoke$arity$variadic = iframe__delegate;
return iframe;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.img = (function() { 
var img__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__7978_9618 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__7979_9619 = null;var count__7980_9620 = 0;var i__7981_9621 = 0;while(true){
if((i__7981_9621 < count__7980_9620))
{var arg__6570__auto___9622 = cljs.core._nth.call(null,chunk__7979_9619,i__7981_9621);a__6569__auto__.push(arg__6570__auto___9622);
{
var G__9623 = seq__7978_9618;
var G__9624 = chunk__7979_9619;
var G__9625 = count__7980_9620;
var G__9626 = (i__7981_9621 + 1);
seq__7978_9618 = G__9623;
chunk__7979_9619 = G__9624;
count__7980_9620 = G__9625;
i__7981_9621 = G__9626;
continue;
}
} else
{var temp__4092__auto___9627 = cljs.core.seq.call(null,seq__7978_9618);if(temp__4092__auto___9627)
{var seq__7978_9628__$1 = temp__4092__auto___9627;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7978_9628__$1))
{var c__5632__auto___9629 = cljs.core.chunk_first.call(null,seq__7978_9628__$1);{
var G__9630 = cljs.core.chunk_rest.call(null,seq__7978_9628__$1);
var G__9631 = c__5632__auto___9629;
var G__9632 = cljs.core.count.call(null,c__5632__auto___9629);
var G__9633 = 0;
seq__7978_9618 = G__9630;
chunk__7979_9619 = G__9631;
count__7980_9620 = G__9632;
i__7981_9621 = G__9633;
continue;
}
} else
{var arg__6570__auto___9634 = cljs.core.first.call(null,seq__7978_9628__$1);a__6569__auto__.push(arg__6570__auto___9634);
{
var G__9635 = cljs.core.next.call(null,seq__7978_9628__$1);
var G__9636 = null;
var G__9637 = 0;
var G__9638 = 0;
seq__7978_9618 = G__9635;
chunk__7979_9619 = G__9636;
count__7980_9620 = G__9637;
i__7981_9621 = G__9638;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.img.apply(null,a__6569__auto__);
};
var img = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return img__delegate.call(this,args__6568__auto__);};
img.cljs$lang$maxFixedArity = 0;
img.cljs$lang$applyTo = (function (arglist__9639){
var args__6568__auto__ = cljs.core.seq(arglist__9639);
return img__delegate(args__6568__auto__);
});
img.cljs$core$IFn$_invoke$arity$variadic = img__delegate;
return img;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.input = (function() { 
var input__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__7986_9640 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__7987_9641 = null;var count__7988_9642 = 0;var i__7989_9643 = 0;while(true){
if((i__7989_9643 < count__7988_9642))
{var arg__6570__auto___9644 = cljs.core._nth.call(null,chunk__7987_9641,i__7989_9643);a__6569__auto__.push(arg__6570__auto___9644);
{
var G__9645 = seq__7986_9640;
var G__9646 = chunk__7987_9641;
var G__9647 = count__7988_9642;
var G__9648 = (i__7989_9643 + 1);
seq__7986_9640 = G__9645;
chunk__7987_9641 = G__9646;
count__7988_9642 = G__9647;
i__7989_9643 = G__9648;
continue;
}
} else
{var temp__4092__auto___9649 = cljs.core.seq.call(null,seq__7986_9640);if(temp__4092__auto___9649)
{var seq__7986_9650__$1 = temp__4092__auto___9649;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7986_9650__$1))
{var c__5632__auto___9651 = cljs.core.chunk_first.call(null,seq__7986_9650__$1);{
var G__9652 = cljs.core.chunk_rest.call(null,seq__7986_9650__$1);
var G__9653 = c__5632__auto___9651;
var G__9654 = cljs.core.count.call(null,c__5632__auto___9651);
var G__9655 = 0;
seq__7986_9640 = G__9652;
chunk__7987_9641 = G__9653;
count__7988_9642 = G__9654;
i__7989_9643 = G__9655;
continue;
}
} else
{var arg__6570__auto___9656 = cljs.core.first.call(null,seq__7986_9650__$1);a__6569__auto__.push(arg__6570__auto___9656);
{
var G__9657 = cljs.core.next.call(null,seq__7986_9650__$1);
var G__9658 = null;
var G__9659 = 0;
var G__9660 = 0;
seq__7986_9640 = G__9657;
chunk__7987_9641 = G__9658;
count__7988_9642 = G__9659;
i__7989_9643 = G__9660;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.input.apply(null,a__6569__auto__);
};
var input = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return input__delegate.call(this,args__6568__auto__);};
input.cljs$lang$maxFixedArity = 0;
input.cljs$lang$applyTo = (function (arglist__9661){
var args__6568__auto__ = cljs.core.seq(arglist__9661);
return input__delegate(args__6568__auto__);
});
input.cljs$core$IFn$_invoke$arity$variadic = input__delegate;
return input;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.ins = (function() { 
var ins__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__7994_9662 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__7995_9663 = null;var count__7996_9664 = 0;var i__7997_9665 = 0;while(true){
if((i__7997_9665 < count__7996_9664))
{var arg__6570__auto___9666 = cljs.core._nth.call(null,chunk__7995_9663,i__7997_9665);a__6569__auto__.push(arg__6570__auto___9666);
{
var G__9667 = seq__7994_9662;
var G__9668 = chunk__7995_9663;
var G__9669 = count__7996_9664;
var G__9670 = (i__7997_9665 + 1);
seq__7994_9662 = G__9667;
chunk__7995_9663 = G__9668;
count__7996_9664 = G__9669;
i__7997_9665 = G__9670;
continue;
}
} else
{var temp__4092__auto___9671 = cljs.core.seq.call(null,seq__7994_9662);if(temp__4092__auto___9671)
{var seq__7994_9672__$1 = temp__4092__auto___9671;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7994_9672__$1))
{var c__5632__auto___9673 = cljs.core.chunk_first.call(null,seq__7994_9672__$1);{
var G__9674 = cljs.core.chunk_rest.call(null,seq__7994_9672__$1);
var G__9675 = c__5632__auto___9673;
var G__9676 = cljs.core.count.call(null,c__5632__auto___9673);
var G__9677 = 0;
seq__7994_9662 = G__9674;
chunk__7995_9663 = G__9675;
count__7996_9664 = G__9676;
i__7997_9665 = G__9677;
continue;
}
} else
{var arg__6570__auto___9678 = cljs.core.first.call(null,seq__7994_9672__$1);a__6569__auto__.push(arg__6570__auto___9678);
{
var G__9679 = cljs.core.next.call(null,seq__7994_9672__$1);
var G__9680 = null;
var G__9681 = 0;
var G__9682 = 0;
seq__7994_9662 = G__9679;
chunk__7995_9663 = G__9680;
count__7996_9664 = G__9681;
i__7997_9665 = G__9682;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.ins.apply(null,a__6569__auto__);
};
var ins = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ins__delegate.call(this,args__6568__auto__);};
ins.cljs$lang$maxFixedArity = 0;
ins.cljs$lang$applyTo = (function (arglist__9683){
var args__6568__auto__ = cljs.core.seq(arglist__9683);
return ins__delegate(args__6568__auto__);
});
ins.cljs$core$IFn$_invoke$arity$variadic = ins__delegate;
return ins;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.kbd = (function() { 
var kbd__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__8002_9684 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__8003_9685 = null;var count__8004_9686 = 0;var i__8005_9687 = 0;while(true){
if((i__8005_9687 < count__8004_9686))
{var arg__6570__auto___9688 = cljs.core._nth.call(null,chunk__8003_9685,i__8005_9687);a__6569__auto__.push(arg__6570__auto___9688);
{
var G__9689 = seq__8002_9684;
var G__9690 = chunk__8003_9685;
var G__9691 = count__8004_9686;
var G__9692 = (i__8005_9687 + 1);
seq__8002_9684 = G__9689;
chunk__8003_9685 = G__9690;
count__8004_9686 = G__9691;
i__8005_9687 = G__9692;
continue;
}
} else
{var temp__4092__auto___9693 = cljs.core.seq.call(null,seq__8002_9684);if(temp__4092__auto___9693)
{var seq__8002_9694__$1 = temp__4092__auto___9693;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8002_9694__$1))
{var c__5632__auto___9695 = cljs.core.chunk_first.call(null,seq__8002_9694__$1);{
var G__9696 = cljs.core.chunk_rest.call(null,seq__8002_9694__$1);
var G__9697 = c__5632__auto___9695;
var G__9698 = cljs.core.count.call(null,c__5632__auto___9695);
var G__9699 = 0;
seq__8002_9684 = G__9696;
chunk__8003_9685 = G__9697;
count__8004_9686 = G__9698;
i__8005_9687 = G__9699;
continue;
}
} else
{var arg__6570__auto___9700 = cljs.core.first.call(null,seq__8002_9694__$1);a__6569__auto__.push(arg__6570__auto___9700);
{
var G__9701 = cljs.core.next.call(null,seq__8002_9694__$1);
var G__9702 = null;
var G__9703 = 0;
var G__9704 = 0;
seq__8002_9684 = G__9701;
chunk__8003_9685 = G__9702;
count__8004_9686 = G__9703;
i__8005_9687 = G__9704;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.kbd.apply(null,a__6569__auto__);
};
var kbd = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return kbd__delegate.call(this,args__6568__auto__);};
kbd.cljs$lang$maxFixedArity = 0;
kbd.cljs$lang$applyTo = (function (arglist__9705){
var args__6568__auto__ = cljs.core.seq(arglist__9705);
return kbd__delegate(args__6568__auto__);
});
kbd.cljs$core$IFn$_invoke$arity$variadic = kbd__delegate;
return kbd;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.keygen = (function() { 
var keygen__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__8010_9706 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__8011_9707 = null;var count__8012_9708 = 0;var i__8013_9709 = 0;while(true){
if((i__8013_9709 < count__8012_9708))
{var arg__6570__auto___9710 = cljs.core._nth.call(null,chunk__8011_9707,i__8013_9709);a__6569__auto__.push(arg__6570__auto___9710);
{
var G__9711 = seq__8010_9706;
var G__9712 = chunk__8011_9707;
var G__9713 = count__8012_9708;
var G__9714 = (i__8013_9709 + 1);
seq__8010_9706 = G__9711;
chunk__8011_9707 = G__9712;
count__8012_9708 = G__9713;
i__8013_9709 = G__9714;
continue;
}
} else
{var temp__4092__auto___9715 = cljs.core.seq.call(null,seq__8010_9706);if(temp__4092__auto___9715)
{var seq__8010_9716__$1 = temp__4092__auto___9715;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8010_9716__$1))
{var c__5632__auto___9717 = cljs.core.chunk_first.call(null,seq__8010_9716__$1);{
var G__9718 = cljs.core.chunk_rest.call(null,seq__8010_9716__$1);
var G__9719 = c__5632__auto___9717;
var G__9720 = cljs.core.count.call(null,c__5632__auto___9717);
var G__9721 = 0;
seq__8010_9706 = G__9718;
chunk__8011_9707 = G__9719;
count__8012_9708 = G__9720;
i__8013_9709 = G__9721;
continue;
}
} else
{var arg__6570__auto___9722 = cljs.core.first.call(null,seq__8010_9716__$1);a__6569__auto__.push(arg__6570__auto___9722);
{
var G__9723 = cljs.core.next.call(null,seq__8010_9716__$1);
var G__9724 = null;
var G__9725 = 0;
var G__9726 = 0;
seq__8010_9706 = G__9723;
chunk__8011_9707 = G__9724;
count__8012_9708 = G__9725;
i__8013_9709 = G__9726;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.keygen.apply(null,a__6569__auto__);
};
var keygen = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return keygen__delegate.call(this,args__6568__auto__);};
keygen.cljs$lang$maxFixedArity = 0;
keygen.cljs$lang$applyTo = (function (arglist__9727){
var args__6568__auto__ = cljs.core.seq(arglist__9727);
return keygen__delegate(args__6568__auto__);
});
keygen.cljs$core$IFn$_invoke$arity$variadic = keygen__delegate;
return keygen;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.label = (function() { 
var label__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__8018_9728 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__8019_9729 = null;var count__8020_9730 = 0;var i__8021_9731 = 0;while(true){
if((i__8021_9731 < count__8020_9730))
{var arg__6570__auto___9732 = cljs.core._nth.call(null,chunk__8019_9729,i__8021_9731);a__6569__auto__.push(arg__6570__auto___9732);
{
var G__9733 = seq__8018_9728;
var G__9734 = chunk__8019_9729;
var G__9735 = count__8020_9730;
var G__9736 = (i__8021_9731 + 1);
seq__8018_9728 = G__9733;
chunk__8019_9729 = G__9734;
count__8020_9730 = G__9735;
i__8021_9731 = G__9736;
continue;
}
} else
{var temp__4092__auto___9737 = cljs.core.seq.call(null,seq__8018_9728);if(temp__4092__auto___9737)
{var seq__8018_9738__$1 = temp__4092__auto___9737;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8018_9738__$1))
{var c__5632__auto___9739 = cljs.core.chunk_first.call(null,seq__8018_9738__$1);{
var G__9740 = cljs.core.chunk_rest.call(null,seq__8018_9738__$1);
var G__9741 = c__5632__auto___9739;
var G__9742 = cljs.core.count.call(null,c__5632__auto___9739);
var G__9743 = 0;
seq__8018_9728 = G__9740;
chunk__8019_9729 = G__9741;
count__8020_9730 = G__9742;
i__8021_9731 = G__9743;
continue;
}
} else
{var arg__6570__auto___9744 = cljs.core.first.call(null,seq__8018_9738__$1);a__6569__auto__.push(arg__6570__auto___9744);
{
var G__9745 = cljs.core.next.call(null,seq__8018_9738__$1);
var G__9746 = null;
var G__9747 = 0;
var G__9748 = 0;
seq__8018_9728 = G__9745;
chunk__8019_9729 = G__9746;
count__8020_9730 = G__9747;
i__8021_9731 = G__9748;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.label.apply(null,a__6569__auto__);
};
var label = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return label__delegate.call(this,args__6568__auto__);};
label.cljs$lang$maxFixedArity = 0;
label.cljs$lang$applyTo = (function (arglist__9749){
var args__6568__auto__ = cljs.core.seq(arglist__9749);
return label__delegate(args__6568__auto__);
});
label.cljs$core$IFn$_invoke$arity$variadic = label__delegate;
return label;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.legend = (function() { 
var legend__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__8026_9750 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__8027_9751 = null;var count__8028_9752 = 0;var i__8029_9753 = 0;while(true){
if((i__8029_9753 < count__8028_9752))
{var arg__6570__auto___9754 = cljs.core._nth.call(null,chunk__8027_9751,i__8029_9753);a__6569__auto__.push(arg__6570__auto___9754);
{
var G__9755 = seq__8026_9750;
var G__9756 = chunk__8027_9751;
var G__9757 = count__8028_9752;
var G__9758 = (i__8029_9753 + 1);
seq__8026_9750 = G__9755;
chunk__8027_9751 = G__9756;
count__8028_9752 = G__9757;
i__8029_9753 = G__9758;
continue;
}
} else
{var temp__4092__auto___9759 = cljs.core.seq.call(null,seq__8026_9750);if(temp__4092__auto___9759)
{var seq__8026_9760__$1 = temp__4092__auto___9759;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8026_9760__$1))
{var c__5632__auto___9761 = cljs.core.chunk_first.call(null,seq__8026_9760__$1);{
var G__9762 = cljs.core.chunk_rest.call(null,seq__8026_9760__$1);
var G__9763 = c__5632__auto___9761;
var G__9764 = cljs.core.count.call(null,c__5632__auto___9761);
var G__9765 = 0;
seq__8026_9750 = G__9762;
chunk__8027_9751 = G__9763;
count__8028_9752 = G__9764;
i__8029_9753 = G__9765;
continue;
}
} else
{var arg__6570__auto___9766 = cljs.core.first.call(null,seq__8026_9760__$1);a__6569__auto__.push(arg__6570__auto___9766);
{
var G__9767 = cljs.core.next.call(null,seq__8026_9760__$1);
var G__9768 = null;
var G__9769 = 0;
var G__9770 = 0;
seq__8026_9750 = G__9767;
chunk__8027_9751 = G__9768;
count__8028_9752 = G__9769;
i__8029_9753 = G__9770;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.legend.apply(null,a__6569__auto__);
};
var legend = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return legend__delegate.call(this,args__6568__auto__);};
legend.cljs$lang$maxFixedArity = 0;
legend.cljs$lang$applyTo = (function (arglist__9771){
var args__6568__auto__ = cljs.core.seq(arglist__9771);
return legend__delegate(args__6568__auto__);
});
legend.cljs$core$IFn$_invoke$arity$variadic = legend__delegate;
return legend;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.li = (function() { 
var li__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__8034_9772 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__8035_9773 = null;var count__8036_9774 = 0;var i__8037_9775 = 0;while(true){
if((i__8037_9775 < count__8036_9774))
{var arg__6570__auto___9776 = cljs.core._nth.call(null,chunk__8035_9773,i__8037_9775);a__6569__auto__.push(arg__6570__auto___9776);
{
var G__9777 = seq__8034_9772;
var G__9778 = chunk__8035_9773;
var G__9779 = count__8036_9774;
var G__9780 = (i__8037_9775 + 1);
seq__8034_9772 = G__9777;
chunk__8035_9773 = G__9778;
count__8036_9774 = G__9779;
i__8037_9775 = G__9780;
continue;
}
} else
{var temp__4092__auto___9781 = cljs.core.seq.call(null,seq__8034_9772);if(temp__4092__auto___9781)
{var seq__8034_9782__$1 = temp__4092__auto___9781;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8034_9782__$1))
{var c__5632__auto___9783 = cljs.core.chunk_first.call(null,seq__8034_9782__$1);{
var G__9784 = cljs.core.chunk_rest.call(null,seq__8034_9782__$1);
var G__9785 = c__5632__auto___9783;
var G__9786 = cljs.core.count.call(null,c__5632__auto___9783);
var G__9787 = 0;
seq__8034_9772 = G__9784;
chunk__8035_9773 = G__9785;
count__8036_9774 = G__9786;
i__8037_9775 = G__9787;
continue;
}
} else
{var arg__6570__auto___9788 = cljs.core.first.call(null,seq__8034_9782__$1);a__6569__auto__.push(arg__6570__auto___9788);
{
var G__9789 = cljs.core.next.call(null,seq__8034_9782__$1);
var G__9790 = null;
var G__9791 = 0;
var G__9792 = 0;
seq__8034_9772 = G__9789;
chunk__8035_9773 = G__9790;
count__8036_9774 = G__9791;
i__8037_9775 = G__9792;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.li.apply(null,a__6569__auto__);
};
var li = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return li__delegate.call(this,args__6568__auto__);};
li.cljs$lang$maxFixedArity = 0;
li.cljs$lang$applyTo = (function (arglist__9793){
var args__6568__auto__ = cljs.core.seq(arglist__9793);
return li__delegate(args__6568__auto__);
});
li.cljs$core$IFn$_invoke$arity$variadic = li__delegate;
return li;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.link = (function() { 
var link__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__8042_9794 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__8043_9795 = null;var count__8044_9796 = 0;var i__8045_9797 = 0;while(true){
if((i__8045_9797 < count__8044_9796))
{var arg__6570__auto___9798 = cljs.core._nth.call(null,chunk__8043_9795,i__8045_9797);a__6569__auto__.push(arg__6570__auto___9798);
{
var G__9799 = seq__8042_9794;
var G__9800 = chunk__8043_9795;
var G__9801 = count__8044_9796;
var G__9802 = (i__8045_9797 + 1);
seq__8042_9794 = G__9799;
chunk__8043_9795 = G__9800;
count__8044_9796 = G__9801;
i__8045_9797 = G__9802;
continue;
}
} else
{var temp__4092__auto___9803 = cljs.core.seq.call(null,seq__8042_9794);if(temp__4092__auto___9803)
{var seq__8042_9804__$1 = temp__4092__auto___9803;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8042_9804__$1))
{var c__5632__auto___9805 = cljs.core.chunk_first.call(null,seq__8042_9804__$1);{
var G__9806 = cljs.core.chunk_rest.call(null,seq__8042_9804__$1);
var G__9807 = c__5632__auto___9805;
var G__9808 = cljs.core.count.call(null,c__5632__auto___9805);
var G__9809 = 0;
seq__8042_9794 = G__9806;
chunk__8043_9795 = G__9807;
count__8044_9796 = G__9808;
i__8045_9797 = G__9809;
continue;
}
} else
{var arg__6570__auto___9810 = cljs.core.first.call(null,seq__8042_9804__$1);a__6569__auto__.push(arg__6570__auto___9810);
{
var G__9811 = cljs.core.next.call(null,seq__8042_9804__$1);
var G__9812 = null;
var G__9813 = 0;
var G__9814 = 0;
seq__8042_9794 = G__9811;
chunk__8043_9795 = G__9812;
count__8044_9796 = G__9813;
i__8045_9797 = G__9814;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.link.apply(null,a__6569__auto__);
};
var link = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return link__delegate.call(this,args__6568__auto__);};
link.cljs$lang$maxFixedArity = 0;
link.cljs$lang$applyTo = (function (arglist__9815){
var args__6568__auto__ = cljs.core.seq(arglist__9815);
return link__delegate(args__6568__auto__);
});
link.cljs$core$IFn$_invoke$arity$variadic = link__delegate;
return link;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.main = (function() { 
var main__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__8050_9816 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__8051_9817 = null;var count__8052_9818 = 0;var i__8053_9819 = 0;while(true){
if((i__8053_9819 < count__8052_9818))
{var arg__6570__auto___9820 = cljs.core._nth.call(null,chunk__8051_9817,i__8053_9819);a__6569__auto__.push(arg__6570__auto___9820);
{
var G__9821 = seq__8050_9816;
var G__9822 = chunk__8051_9817;
var G__9823 = count__8052_9818;
var G__9824 = (i__8053_9819 + 1);
seq__8050_9816 = G__9821;
chunk__8051_9817 = G__9822;
count__8052_9818 = G__9823;
i__8053_9819 = G__9824;
continue;
}
} else
{var temp__4092__auto___9825 = cljs.core.seq.call(null,seq__8050_9816);if(temp__4092__auto___9825)
{var seq__8050_9826__$1 = temp__4092__auto___9825;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8050_9826__$1))
{var c__5632__auto___9827 = cljs.core.chunk_first.call(null,seq__8050_9826__$1);{
var G__9828 = cljs.core.chunk_rest.call(null,seq__8050_9826__$1);
var G__9829 = c__5632__auto___9827;
var G__9830 = cljs.core.count.call(null,c__5632__auto___9827);
var G__9831 = 0;
seq__8050_9816 = G__9828;
chunk__8051_9817 = G__9829;
count__8052_9818 = G__9830;
i__8053_9819 = G__9831;
continue;
}
} else
{var arg__6570__auto___9832 = cljs.core.first.call(null,seq__8050_9826__$1);a__6569__auto__.push(arg__6570__auto___9832);
{
var G__9833 = cljs.core.next.call(null,seq__8050_9826__$1);
var G__9834 = null;
var G__9835 = 0;
var G__9836 = 0;
seq__8050_9816 = G__9833;
chunk__8051_9817 = G__9834;
count__8052_9818 = G__9835;
i__8053_9819 = G__9836;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.main.apply(null,a__6569__auto__);
};
var main = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return main__delegate.call(this,args__6568__auto__);};
main.cljs$lang$maxFixedArity = 0;
main.cljs$lang$applyTo = (function (arglist__9837){
var args__6568__auto__ = cljs.core.seq(arglist__9837);
return main__delegate(args__6568__auto__);
});
main.cljs$core$IFn$_invoke$arity$variadic = main__delegate;
return main;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.map = (function() { 
var map__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__8058_9838 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__8059_9839 = null;var count__8060_9840 = 0;var i__8061_9841 = 0;while(true){
if((i__8061_9841 < count__8060_9840))
{var arg__6570__auto___9842 = cljs.core._nth.call(null,chunk__8059_9839,i__8061_9841);a__6569__auto__.push(arg__6570__auto___9842);
{
var G__9843 = seq__8058_9838;
var G__9844 = chunk__8059_9839;
var G__9845 = count__8060_9840;
var G__9846 = (i__8061_9841 + 1);
seq__8058_9838 = G__9843;
chunk__8059_9839 = G__9844;
count__8060_9840 = G__9845;
i__8061_9841 = G__9846;
continue;
}
} else
{var temp__4092__auto___9847 = cljs.core.seq.call(null,seq__8058_9838);if(temp__4092__auto___9847)
{var seq__8058_9848__$1 = temp__4092__auto___9847;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8058_9848__$1))
{var c__5632__auto___9849 = cljs.core.chunk_first.call(null,seq__8058_9848__$1);{
var G__9850 = cljs.core.chunk_rest.call(null,seq__8058_9848__$1);
var G__9851 = c__5632__auto___9849;
var G__9852 = cljs.core.count.call(null,c__5632__auto___9849);
var G__9853 = 0;
seq__8058_9838 = G__9850;
chunk__8059_9839 = G__9851;
count__8060_9840 = G__9852;
i__8061_9841 = G__9853;
continue;
}
} else
{var arg__6570__auto___9854 = cljs.core.first.call(null,seq__8058_9848__$1);a__6569__auto__.push(arg__6570__auto___9854);
{
var G__9855 = cljs.core.next.call(null,seq__8058_9848__$1);
var G__9856 = null;
var G__9857 = 0;
var G__9858 = 0;
seq__8058_9838 = G__9855;
chunk__8059_9839 = G__9856;
count__8060_9840 = G__9857;
i__8061_9841 = G__9858;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.map.apply(null,a__6569__auto__);
};
var map = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return map__delegate.call(this,args__6568__auto__);};
map.cljs$lang$maxFixedArity = 0;
map.cljs$lang$applyTo = (function (arglist__9859){
var args__6568__auto__ = cljs.core.seq(arglist__9859);
return map__delegate(args__6568__auto__);
});
map.cljs$core$IFn$_invoke$arity$variadic = map__delegate;
return map;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.mark = (function() { 
var mark__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__8066_9860 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__8067_9861 = null;var count__8068_9862 = 0;var i__8069_9863 = 0;while(true){
if((i__8069_9863 < count__8068_9862))
{var arg__6570__auto___9864 = cljs.core._nth.call(null,chunk__8067_9861,i__8069_9863);a__6569__auto__.push(arg__6570__auto___9864);
{
var G__9865 = seq__8066_9860;
var G__9866 = chunk__8067_9861;
var G__9867 = count__8068_9862;
var G__9868 = (i__8069_9863 + 1);
seq__8066_9860 = G__9865;
chunk__8067_9861 = G__9866;
count__8068_9862 = G__9867;
i__8069_9863 = G__9868;
continue;
}
} else
{var temp__4092__auto___9869 = cljs.core.seq.call(null,seq__8066_9860);if(temp__4092__auto___9869)
{var seq__8066_9870__$1 = temp__4092__auto___9869;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8066_9870__$1))
{var c__5632__auto___9871 = cljs.core.chunk_first.call(null,seq__8066_9870__$1);{
var G__9872 = cljs.core.chunk_rest.call(null,seq__8066_9870__$1);
var G__9873 = c__5632__auto___9871;
var G__9874 = cljs.core.count.call(null,c__5632__auto___9871);
var G__9875 = 0;
seq__8066_9860 = G__9872;
chunk__8067_9861 = G__9873;
count__8068_9862 = G__9874;
i__8069_9863 = G__9875;
continue;
}
} else
{var arg__6570__auto___9876 = cljs.core.first.call(null,seq__8066_9870__$1);a__6569__auto__.push(arg__6570__auto___9876);
{
var G__9877 = cljs.core.next.call(null,seq__8066_9870__$1);
var G__9878 = null;
var G__9879 = 0;
var G__9880 = 0;
seq__8066_9860 = G__9877;
chunk__8067_9861 = G__9878;
count__8068_9862 = G__9879;
i__8069_9863 = G__9880;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.mark.apply(null,a__6569__auto__);
};
var mark = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return mark__delegate.call(this,args__6568__auto__);};
mark.cljs$lang$maxFixedArity = 0;
mark.cljs$lang$applyTo = (function (arglist__9881){
var args__6568__auto__ = cljs.core.seq(arglist__9881);
return mark__delegate(args__6568__auto__);
});
mark.cljs$core$IFn$_invoke$arity$variadic = mark__delegate;
return mark;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.menu = (function() { 
var menu__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__8074_9882 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__8075_9883 = null;var count__8076_9884 = 0;var i__8077_9885 = 0;while(true){
if((i__8077_9885 < count__8076_9884))
{var arg__6570__auto___9886 = cljs.core._nth.call(null,chunk__8075_9883,i__8077_9885);a__6569__auto__.push(arg__6570__auto___9886);
{
var G__9887 = seq__8074_9882;
var G__9888 = chunk__8075_9883;
var G__9889 = count__8076_9884;
var G__9890 = (i__8077_9885 + 1);
seq__8074_9882 = G__9887;
chunk__8075_9883 = G__9888;
count__8076_9884 = G__9889;
i__8077_9885 = G__9890;
continue;
}
} else
{var temp__4092__auto___9891 = cljs.core.seq.call(null,seq__8074_9882);if(temp__4092__auto___9891)
{var seq__8074_9892__$1 = temp__4092__auto___9891;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8074_9892__$1))
{var c__5632__auto___9893 = cljs.core.chunk_first.call(null,seq__8074_9892__$1);{
var G__9894 = cljs.core.chunk_rest.call(null,seq__8074_9892__$1);
var G__9895 = c__5632__auto___9893;
var G__9896 = cljs.core.count.call(null,c__5632__auto___9893);
var G__9897 = 0;
seq__8074_9882 = G__9894;
chunk__8075_9883 = G__9895;
count__8076_9884 = G__9896;
i__8077_9885 = G__9897;
continue;
}
} else
{var arg__6570__auto___9898 = cljs.core.first.call(null,seq__8074_9892__$1);a__6569__auto__.push(arg__6570__auto___9898);
{
var G__9899 = cljs.core.next.call(null,seq__8074_9892__$1);
var G__9900 = null;
var G__9901 = 0;
var G__9902 = 0;
seq__8074_9882 = G__9899;
chunk__8075_9883 = G__9900;
count__8076_9884 = G__9901;
i__8077_9885 = G__9902;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.menu.apply(null,a__6569__auto__);
};
var menu = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return menu__delegate.call(this,args__6568__auto__);};
menu.cljs$lang$maxFixedArity = 0;
menu.cljs$lang$applyTo = (function (arglist__9903){
var args__6568__auto__ = cljs.core.seq(arglist__9903);
return menu__delegate(args__6568__auto__);
});
menu.cljs$core$IFn$_invoke$arity$variadic = menu__delegate;
return menu;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.menuitem = (function() { 
var menuitem__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__8082_9904 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__8083_9905 = null;var count__8084_9906 = 0;var i__8085_9907 = 0;while(true){
if((i__8085_9907 < count__8084_9906))
{var arg__6570__auto___9908 = cljs.core._nth.call(null,chunk__8083_9905,i__8085_9907);a__6569__auto__.push(arg__6570__auto___9908);
{
var G__9909 = seq__8082_9904;
var G__9910 = chunk__8083_9905;
var G__9911 = count__8084_9906;
var G__9912 = (i__8085_9907 + 1);
seq__8082_9904 = G__9909;
chunk__8083_9905 = G__9910;
count__8084_9906 = G__9911;
i__8085_9907 = G__9912;
continue;
}
} else
{var temp__4092__auto___9913 = cljs.core.seq.call(null,seq__8082_9904);if(temp__4092__auto___9913)
{var seq__8082_9914__$1 = temp__4092__auto___9913;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8082_9914__$1))
{var c__5632__auto___9915 = cljs.core.chunk_first.call(null,seq__8082_9914__$1);{
var G__9916 = cljs.core.chunk_rest.call(null,seq__8082_9914__$1);
var G__9917 = c__5632__auto___9915;
var G__9918 = cljs.core.count.call(null,c__5632__auto___9915);
var G__9919 = 0;
seq__8082_9904 = G__9916;
chunk__8083_9905 = G__9917;
count__8084_9906 = G__9918;
i__8085_9907 = G__9919;
continue;
}
} else
{var arg__6570__auto___9920 = cljs.core.first.call(null,seq__8082_9914__$1);a__6569__auto__.push(arg__6570__auto___9920);
{
var G__9921 = cljs.core.next.call(null,seq__8082_9914__$1);
var G__9922 = null;
var G__9923 = 0;
var G__9924 = 0;
seq__8082_9904 = G__9921;
chunk__8083_9905 = G__9922;
count__8084_9906 = G__9923;
i__8085_9907 = G__9924;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.menuitem.apply(null,a__6569__auto__);
};
var menuitem = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return menuitem__delegate.call(this,args__6568__auto__);};
menuitem.cljs$lang$maxFixedArity = 0;
menuitem.cljs$lang$applyTo = (function (arglist__9925){
var args__6568__auto__ = cljs.core.seq(arglist__9925);
return menuitem__delegate(args__6568__auto__);
});
menuitem.cljs$core$IFn$_invoke$arity$variadic = menuitem__delegate;
return menuitem;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.meta = (function() { 
var meta__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__8090_9926 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__8091_9927 = null;var count__8092_9928 = 0;var i__8093_9929 = 0;while(true){
if((i__8093_9929 < count__8092_9928))
{var arg__6570__auto___9930 = cljs.core._nth.call(null,chunk__8091_9927,i__8093_9929);a__6569__auto__.push(arg__6570__auto___9930);
{
var G__9931 = seq__8090_9926;
var G__9932 = chunk__8091_9927;
var G__9933 = count__8092_9928;
var G__9934 = (i__8093_9929 + 1);
seq__8090_9926 = G__9931;
chunk__8091_9927 = G__9932;
count__8092_9928 = G__9933;
i__8093_9929 = G__9934;
continue;
}
} else
{var temp__4092__auto___9935 = cljs.core.seq.call(null,seq__8090_9926);if(temp__4092__auto___9935)
{var seq__8090_9936__$1 = temp__4092__auto___9935;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8090_9936__$1))
{var c__5632__auto___9937 = cljs.core.chunk_first.call(null,seq__8090_9936__$1);{
var G__9938 = cljs.core.chunk_rest.call(null,seq__8090_9936__$1);
var G__9939 = c__5632__auto___9937;
var G__9940 = cljs.core.count.call(null,c__5632__auto___9937);
var G__9941 = 0;
seq__8090_9926 = G__9938;
chunk__8091_9927 = G__9939;
count__8092_9928 = G__9940;
i__8093_9929 = G__9941;
continue;
}
} else
{var arg__6570__auto___9942 = cljs.core.first.call(null,seq__8090_9936__$1);a__6569__auto__.push(arg__6570__auto___9942);
{
var G__9943 = cljs.core.next.call(null,seq__8090_9936__$1);
var G__9944 = null;
var G__9945 = 0;
var G__9946 = 0;
seq__8090_9926 = G__9943;
chunk__8091_9927 = G__9944;
count__8092_9928 = G__9945;
i__8093_9929 = G__9946;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.meta.apply(null,a__6569__auto__);
};
var meta = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return meta__delegate.call(this,args__6568__auto__);};
meta.cljs$lang$maxFixedArity = 0;
meta.cljs$lang$applyTo = (function (arglist__9947){
var args__6568__auto__ = cljs.core.seq(arglist__9947);
return meta__delegate(args__6568__auto__);
});
meta.cljs$core$IFn$_invoke$arity$variadic = meta__delegate;
return meta;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.meter = (function() { 
var meter__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__8098_9948 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__8099_9949 = null;var count__8100_9950 = 0;var i__8101_9951 = 0;while(true){
if((i__8101_9951 < count__8100_9950))
{var arg__6570__auto___9952 = cljs.core._nth.call(null,chunk__8099_9949,i__8101_9951);a__6569__auto__.push(arg__6570__auto___9952);
{
var G__9953 = seq__8098_9948;
var G__9954 = chunk__8099_9949;
var G__9955 = count__8100_9950;
var G__9956 = (i__8101_9951 + 1);
seq__8098_9948 = G__9953;
chunk__8099_9949 = G__9954;
count__8100_9950 = G__9955;
i__8101_9951 = G__9956;
continue;
}
} else
{var temp__4092__auto___9957 = cljs.core.seq.call(null,seq__8098_9948);if(temp__4092__auto___9957)
{var seq__8098_9958__$1 = temp__4092__auto___9957;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8098_9958__$1))
{var c__5632__auto___9959 = cljs.core.chunk_first.call(null,seq__8098_9958__$1);{
var G__9960 = cljs.core.chunk_rest.call(null,seq__8098_9958__$1);
var G__9961 = c__5632__auto___9959;
var G__9962 = cljs.core.count.call(null,c__5632__auto___9959);
var G__9963 = 0;
seq__8098_9948 = G__9960;
chunk__8099_9949 = G__9961;
count__8100_9950 = G__9962;
i__8101_9951 = G__9963;
continue;
}
} else
{var arg__6570__auto___9964 = cljs.core.first.call(null,seq__8098_9958__$1);a__6569__auto__.push(arg__6570__auto___9964);
{
var G__9965 = cljs.core.next.call(null,seq__8098_9958__$1);
var G__9966 = null;
var G__9967 = 0;
var G__9968 = 0;
seq__8098_9948 = G__9965;
chunk__8099_9949 = G__9966;
count__8100_9950 = G__9967;
i__8101_9951 = G__9968;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.meter.apply(null,a__6569__auto__);
};
var meter = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return meter__delegate.call(this,args__6568__auto__);};
meter.cljs$lang$maxFixedArity = 0;
meter.cljs$lang$applyTo = (function (arglist__9969){
var args__6568__auto__ = cljs.core.seq(arglist__9969);
return meter__delegate(args__6568__auto__);
});
meter.cljs$core$IFn$_invoke$arity$variadic = meter__delegate;
return meter;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.nav = (function() { 
var nav__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__8106_9970 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__8107_9971 = null;var count__8108_9972 = 0;var i__8109_9973 = 0;while(true){
if((i__8109_9973 < count__8108_9972))
{var arg__6570__auto___9974 = cljs.core._nth.call(null,chunk__8107_9971,i__8109_9973);a__6569__auto__.push(arg__6570__auto___9974);
{
var G__9975 = seq__8106_9970;
var G__9976 = chunk__8107_9971;
var G__9977 = count__8108_9972;
var G__9978 = (i__8109_9973 + 1);
seq__8106_9970 = G__9975;
chunk__8107_9971 = G__9976;
count__8108_9972 = G__9977;
i__8109_9973 = G__9978;
continue;
}
} else
{var temp__4092__auto___9979 = cljs.core.seq.call(null,seq__8106_9970);if(temp__4092__auto___9979)
{var seq__8106_9980__$1 = temp__4092__auto___9979;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8106_9980__$1))
{var c__5632__auto___9981 = cljs.core.chunk_first.call(null,seq__8106_9980__$1);{
var G__9982 = cljs.core.chunk_rest.call(null,seq__8106_9980__$1);
var G__9983 = c__5632__auto___9981;
var G__9984 = cljs.core.count.call(null,c__5632__auto___9981);
var G__9985 = 0;
seq__8106_9970 = G__9982;
chunk__8107_9971 = G__9983;
count__8108_9972 = G__9984;
i__8109_9973 = G__9985;
continue;
}
} else
{var arg__6570__auto___9986 = cljs.core.first.call(null,seq__8106_9980__$1);a__6569__auto__.push(arg__6570__auto___9986);
{
var G__9987 = cljs.core.next.call(null,seq__8106_9980__$1);
var G__9988 = null;
var G__9989 = 0;
var G__9990 = 0;
seq__8106_9970 = G__9987;
chunk__8107_9971 = G__9988;
count__8108_9972 = G__9989;
i__8109_9973 = G__9990;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.nav.apply(null,a__6569__auto__);
};
var nav = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return nav__delegate.call(this,args__6568__auto__);};
nav.cljs$lang$maxFixedArity = 0;
nav.cljs$lang$applyTo = (function (arglist__9991){
var args__6568__auto__ = cljs.core.seq(arglist__9991);
return nav__delegate(args__6568__auto__);
});
nav.cljs$core$IFn$_invoke$arity$variadic = nav__delegate;
return nav;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.noscript = (function() { 
var noscript__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__8114_9992 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__8115_9993 = null;var count__8116_9994 = 0;var i__8117_9995 = 0;while(true){
if((i__8117_9995 < count__8116_9994))
{var arg__6570__auto___9996 = cljs.core._nth.call(null,chunk__8115_9993,i__8117_9995);a__6569__auto__.push(arg__6570__auto___9996);
{
var G__9997 = seq__8114_9992;
var G__9998 = chunk__8115_9993;
var G__9999 = count__8116_9994;
var G__10000 = (i__8117_9995 + 1);
seq__8114_9992 = G__9997;
chunk__8115_9993 = G__9998;
count__8116_9994 = G__9999;
i__8117_9995 = G__10000;
continue;
}
} else
{var temp__4092__auto___10001 = cljs.core.seq.call(null,seq__8114_9992);if(temp__4092__auto___10001)
{var seq__8114_10002__$1 = temp__4092__auto___10001;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8114_10002__$1))
{var c__5632__auto___10003 = cljs.core.chunk_first.call(null,seq__8114_10002__$1);{
var G__10004 = cljs.core.chunk_rest.call(null,seq__8114_10002__$1);
var G__10005 = c__5632__auto___10003;
var G__10006 = cljs.core.count.call(null,c__5632__auto___10003);
var G__10007 = 0;
seq__8114_9992 = G__10004;
chunk__8115_9993 = G__10005;
count__8116_9994 = G__10006;
i__8117_9995 = G__10007;
continue;
}
} else
{var arg__6570__auto___10008 = cljs.core.first.call(null,seq__8114_10002__$1);a__6569__auto__.push(arg__6570__auto___10008);
{
var G__10009 = cljs.core.next.call(null,seq__8114_10002__$1);
var G__10010 = null;
var G__10011 = 0;
var G__10012 = 0;
seq__8114_9992 = G__10009;
chunk__8115_9993 = G__10010;
count__8116_9994 = G__10011;
i__8117_9995 = G__10012;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.noscript.apply(null,a__6569__auto__);
};
var noscript = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return noscript__delegate.call(this,args__6568__auto__);};
noscript.cljs$lang$maxFixedArity = 0;
noscript.cljs$lang$applyTo = (function (arglist__10013){
var args__6568__auto__ = cljs.core.seq(arglist__10013);
return noscript__delegate(args__6568__auto__);
});
noscript.cljs$core$IFn$_invoke$arity$variadic = noscript__delegate;
return noscript;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.object = (function() { 
var object__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__8122_10014 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__8123_10015 = null;var count__8124_10016 = 0;var i__8125_10017 = 0;while(true){
if((i__8125_10017 < count__8124_10016))
{var arg__6570__auto___10018 = cljs.core._nth.call(null,chunk__8123_10015,i__8125_10017);a__6569__auto__.push(arg__6570__auto___10018);
{
var G__10019 = seq__8122_10014;
var G__10020 = chunk__8123_10015;
var G__10021 = count__8124_10016;
var G__10022 = (i__8125_10017 + 1);
seq__8122_10014 = G__10019;
chunk__8123_10015 = G__10020;
count__8124_10016 = G__10021;
i__8125_10017 = G__10022;
continue;
}
} else
{var temp__4092__auto___10023 = cljs.core.seq.call(null,seq__8122_10014);if(temp__4092__auto___10023)
{var seq__8122_10024__$1 = temp__4092__auto___10023;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8122_10024__$1))
{var c__5632__auto___10025 = cljs.core.chunk_first.call(null,seq__8122_10024__$1);{
var G__10026 = cljs.core.chunk_rest.call(null,seq__8122_10024__$1);
var G__10027 = c__5632__auto___10025;
var G__10028 = cljs.core.count.call(null,c__5632__auto___10025);
var G__10029 = 0;
seq__8122_10014 = G__10026;
chunk__8123_10015 = G__10027;
count__8124_10016 = G__10028;
i__8125_10017 = G__10029;
continue;
}
} else
{var arg__6570__auto___10030 = cljs.core.first.call(null,seq__8122_10024__$1);a__6569__auto__.push(arg__6570__auto___10030);
{
var G__10031 = cljs.core.next.call(null,seq__8122_10024__$1);
var G__10032 = null;
var G__10033 = 0;
var G__10034 = 0;
seq__8122_10014 = G__10031;
chunk__8123_10015 = G__10032;
count__8124_10016 = G__10033;
i__8125_10017 = G__10034;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.object.apply(null,a__6569__auto__);
};
var object = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return object__delegate.call(this,args__6568__auto__);};
object.cljs$lang$maxFixedArity = 0;
object.cljs$lang$applyTo = (function (arglist__10035){
var args__6568__auto__ = cljs.core.seq(arglist__10035);
return object__delegate(args__6568__auto__);
});
object.cljs$core$IFn$_invoke$arity$variadic = object__delegate;
return object;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.ol = (function() { 
var ol__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__8130_10036 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__8131_10037 = null;var count__8132_10038 = 0;var i__8133_10039 = 0;while(true){
if((i__8133_10039 < count__8132_10038))
{var arg__6570__auto___10040 = cljs.core._nth.call(null,chunk__8131_10037,i__8133_10039);a__6569__auto__.push(arg__6570__auto___10040);
{
var G__10041 = seq__8130_10036;
var G__10042 = chunk__8131_10037;
var G__10043 = count__8132_10038;
var G__10044 = (i__8133_10039 + 1);
seq__8130_10036 = G__10041;
chunk__8131_10037 = G__10042;
count__8132_10038 = G__10043;
i__8133_10039 = G__10044;
continue;
}
} else
{var temp__4092__auto___10045 = cljs.core.seq.call(null,seq__8130_10036);if(temp__4092__auto___10045)
{var seq__8130_10046__$1 = temp__4092__auto___10045;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8130_10046__$1))
{var c__5632__auto___10047 = cljs.core.chunk_first.call(null,seq__8130_10046__$1);{
var G__10048 = cljs.core.chunk_rest.call(null,seq__8130_10046__$1);
var G__10049 = c__5632__auto___10047;
var G__10050 = cljs.core.count.call(null,c__5632__auto___10047);
var G__10051 = 0;
seq__8130_10036 = G__10048;
chunk__8131_10037 = G__10049;
count__8132_10038 = G__10050;
i__8133_10039 = G__10051;
continue;
}
} else
{var arg__6570__auto___10052 = cljs.core.first.call(null,seq__8130_10046__$1);a__6569__auto__.push(arg__6570__auto___10052);
{
var G__10053 = cljs.core.next.call(null,seq__8130_10046__$1);
var G__10054 = null;
var G__10055 = 0;
var G__10056 = 0;
seq__8130_10036 = G__10053;
chunk__8131_10037 = G__10054;
count__8132_10038 = G__10055;
i__8133_10039 = G__10056;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.ol.apply(null,a__6569__auto__);
};
var ol = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ol__delegate.call(this,args__6568__auto__);};
ol.cljs$lang$maxFixedArity = 0;
ol.cljs$lang$applyTo = (function (arglist__10057){
var args__6568__auto__ = cljs.core.seq(arglist__10057);
return ol__delegate(args__6568__auto__);
});
ol.cljs$core$IFn$_invoke$arity$variadic = ol__delegate;
return ol;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.optgroup = (function() { 
var optgroup__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__8138_10058 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__8139_10059 = null;var count__8140_10060 = 0;var i__8141_10061 = 0;while(true){
if((i__8141_10061 < count__8140_10060))
{var arg__6570__auto___10062 = cljs.core._nth.call(null,chunk__8139_10059,i__8141_10061);a__6569__auto__.push(arg__6570__auto___10062);
{
var G__10063 = seq__8138_10058;
var G__10064 = chunk__8139_10059;
var G__10065 = count__8140_10060;
var G__10066 = (i__8141_10061 + 1);
seq__8138_10058 = G__10063;
chunk__8139_10059 = G__10064;
count__8140_10060 = G__10065;
i__8141_10061 = G__10066;
continue;
}
} else
{var temp__4092__auto___10067 = cljs.core.seq.call(null,seq__8138_10058);if(temp__4092__auto___10067)
{var seq__8138_10068__$1 = temp__4092__auto___10067;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8138_10068__$1))
{var c__5632__auto___10069 = cljs.core.chunk_first.call(null,seq__8138_10068__$1);{
var G__10070 = cljs.core.chunk_rest.call(null,seq__8138_10068__$1);
var G__10071 = c__5632__auto___10069;
var G__10072 = cljs.core.count.call(null,c__5632__auto___10069);
var G__10073 = 0;
seq__8138_10058 = G__10070;
chunk__8139_10059 = G__10071;
count__8140_10060 = G__10072;
i__8141_10061 = G__10073;
continue;
}
} else
{var arg__6570__auto___10074 = cljs.core.first.call(null,seq__8138_10068__$1);a__6569__auto__.push(arg__6570__auto___10074);
{
var G__10075 = cljs.core.next.call(null,seq__8138_10068__$1);
var G__10076 = null;
var G__10077 = 0;
var G__10078 = 0;
seq__8138_10058 = G__10075;
chunk__8139_10059 = G__10076;
count__8140_10060 = G__10077;
i__8141_10061 = G__10078;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.optgroup.apply(null,a__6569__auto__);
};
var optgroup = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return optgroup__delegate.call(this,args__6568__auto__);};
optgroup.cljs$lang$maxFixedArity = 0;
optgroup.cljs$lang$applyTo = (function (arglist__10079){
var args__6568__auto__ = cljs.core.seq(arglist__10079);
return optgroup__delegate(args__6568__auto__);
});
optgroup.cljs$core$IFn$_invoke$arity$variadic = optgroup__delegate;
return optgroup;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.option = (function() { 
var option__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__8146_10080 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__8147_10081 = null;var count__8148_10082 = 0;var i__8149_10083 = 0;while(true){
if((i__8149_10083 < count__8148_10082))
{var arg__6570__auto___10084 = cljs.core._nth.call(null,chunk__8147_10081,i__8149_10083);a__6569__auto__.push(arg__6570__auto___10084);
{
var G__10085 = seq__8146_10080;
var G__10086 = chunk__8147_10081;
var G__10087 = count__8148_10082;
var G__10088 = (i__8149_10083 + 1);
seq__8146_10080 = G__10085;
chunk__8147_10081 = G__10086;
count__8148_10082 = G__10087;
i__8149_10083 = G__10088;
continue;
}
} else
{var temp__4092__auto___10089 = cljs.core.seq.call(null,seq__8146_10080);if(temp__4092__auto___10089)
{var seq__8146_10090__$1 = temp__4092__auto___10089;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8146_10090__$1))
{var c__5632__auto___10091 = cljs.core.chunk_first.call(null,seq__8146_10090__$1);{
var G__10092 = cljs.core.chunk_rest.call(null,seq__8146_10090__$1);
var G__10093 = c__5632__auto___10091;
var G__10094 = cljs.core.count.call(null,c__5632__auto___10091);
var G__10095 = 0;
seq__8146_10080 = G__10092;
chunk__8147_10081 = G__10093;
count__8148_10082 = G__10094;
i__8149_10083 = G__10095;
continue;
}
} else
{var arg__6570__auto___10096 = cljs.core.first.call(null,seq__8146_10090__$1);a__6569__auto__.push(arg__6570__auto___10096);
{
var G__10097 = cljs.core.next.call(null,seq__8146_10090__$1);
var G__10098 = null;
var G__10099 = 0;
var G__10100 = 0;
seq__8146_10080 = G__10097;
chunk__8147_10081 = G__10098;
count__8148_10082 = G__10099;
i__8149_10083 = G__10100;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.option.apply(null,a__6569__auto__);
};
var option = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return option__delegate.call(this,args__6568__auto__);};
option.cljs$lang$maxFixedArity = 0;
option.cljs$lang$applyTo = (function (arglist__10101){
var args__6568__auto__ = cljs.core.seq(arglist__10101);
return option__delegate(args__6568__auto__);
});
option.cljs$core$IFn$_invoke$arity$variadic = option__delegate;
return option;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.output = (function() { 
var output__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__8154_10102 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__8155_10103 = null;var count__8156_10104 = 0;var i__8157_10105 = 0;while(true){
if((i__8157_10105 < count__8156_10104))
{var arg__6570__auto___10106 = cljs.core._nth.call(null,chunk__8155_10103,i__8157_10105);a__6569__auto__.push(arg__6570__auto___10106);
{
var G__10107 = seq__8154_10102;
var G__10108 = chunk__8155_10103;
var G__10109 = count__8156_10104;
var G__10110 = (i__8157_10105 + 1);
seq__8154_10102 = G__10107;
chunk__8155_10103 = G__10108;
count__8156_10104 = G__10109;
i__8157_10105 = G__10110;
continue;
}
} else
{var temp__4092__auto___10111 = cljs.core.seq.call(null,seq__8154_10102);if(temp__4092__auto___10111)
{var seq__8154_10112__$1 = temp__4092__auto___10111;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8154_10112__$1))
{var c__5632__auto___10113 = cljs.core.chunk_first.call(null,seq__8154_10112__$1);{
var G__10114 = cljs.core.chunk_rest.call(null,seq__8154_10112__$1);
var G__10115 = c__5632__auto___10113;
var G__10116 = cljs.core.count.call(null,c__5632__auto___10113);
var G__10117 = 0;
seq__8154_10102 = G__10114;
chunk__8155_10103 = G__10115;
count__8156_10104 = G__10116;
i__8157_10105 = G__10117;
continue;
}
} else
{var arg__6570__auto___10118 = cljs.core.first.call(null,seq__8154_10112__$1);a__6569__auto__.push(arg__6570__auto___10118);
{
var G__10119 = cljs.core.next.call(null,seq__8154_10112__$1);
var G__10120 = null;
var G__10121 = 0;
var G__10122 = 0;
seq__8154_10102 = G__10119;
chunk__8155_10103 = G__10120;
count__8156_10104 = G__10121;
i__8157_10105 = G__10122;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.output.apply(null,a__6569__auto__);
};
var output = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return output__delegate.call(this,args__6568__auto__);};
output.cljs$lang$maxFixedArity = 0;
output.cljs$lang$applyTo = (function (arglist__10123){
var args__6568__auto__ = cljs.core.seq(arglist__10123);
return output__delegate(args__6568__auto__);
});
output.cljs$core$IFn$_invoke$arity$variadic = output__delegate;
return output;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.p = (function() { 
var p__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__8162_10124 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__8163_10125 = null;var count__8164_10126 = 0;var i__8165_10127 = 0;while(true){
if((i__8165_10127 < count__8164_10126))
{var arg__6570__auto___10128 = cljs.core._nth.call(null,chunk__8163_10125,i__8165_10127);a__6569__auto__.push(arg__6570__auto___10128);
{
var G__10129 = seq__8162_10124;
var G__10130 = chunk__8163_10125;
var G__10131 = count__8164_10126;
var G__10132 = (i__8165_10127 + 1);
seq__8162_10124 = G__10129;
chunk__8163_10125 = G__10130;
count__8164_10126 = G__10131;
i__8165_10127 = G__10132;
continue;
}
} else
{var temp__4092__auto___10133 = cljs.core.seq.call(null,seq__8162_10124);if(temp__4092__auto___10133)
{var seq__8162_10134__$1 = temp__4092__auto___10133;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8162_10134__$1))
{var c__5632__auto___10135 = cljs.core.chunk_first.call(null,seq__8162_10134__$1);{
var G__10136 = cljs.core.chunk_rest.call(null,seq__8162_10134__$1);
var G__10137 = c__5632__auto___10135;
var G__10138 = cljs.core.count.call(null,c__5632__auto___10135);
var G__10139 = 0;
seq__8162_10124 = G__10136;
chunk__8163_10125 = G__10137;
count__8164_10126 = G__10138;
i__8165_10127 = G__10139;
continue;
}
} else
{var arg__6570__auto___10140 = cljs.core.first.call(null,seq__8162_10134__$1);a__6569__auto__.push(arg__6570__auto___10140);
{
var G__10141 = cljs.core.next.call(null,seq__8162_10134__$1);
var G__10142 = null;
var G__10143 = 0;
var G__10144 = 0;
seq__8162_10124 = G__10141;
chunk__8163_10125 = G__10142;
count__8164_10126 = G__10143;
i__8165_10127 = G__10144;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.p.apply(null,a__6569__auto__);
};
var p = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return p__delegate.call(this,args__6568__auto__);};
p.cljs$lang$maxFixedArity = 0;
p.cljs$lang$applyTo = (function (arglist__10145){
var args__6568__auto__ = cljs.core.seq(arglist__10145);
return p__delegate(args__6568__auto__);
});
p.cljs$core$IFn$_invoke$arity$variadic = p__delegate;
return p;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.param = (function() { 
var param__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__8170_10146 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__8171_10147 = null;var count__8172_10148 = 0;var i__8173_10149 = 0;while(true){
if((i__8173_10149 < count__8172_10148))
{var arg__6570__auto___10150 = cljs.core._nth.call(null,chunk__8171_10147,i__8173_10149);a__6569__auto__.push(arg__6570__auto___10150);
{
var G__10151 = seq__8170_10146;
var G__10152 = chunk__8171_10147;
var G__10153 = count__8172_10148;
var G__10154 = (i__8173_10149 + 1);
seq__8170_10146 = G__10151;
chunk__8171_10147 = G__10152;
count__8172_10148 = G__10153;
i__8173_10149 = G__10154;
continue;
}
} else
{var temp__4092__auto___10155 = cljs.core.seq.call(null,seq__8170_10146);if(temp__4092__auto___10155)
{var seq__8170_10156__$1 = temp__4092__auto___10155;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8170_10156__$1))
{var c__5632__auto___10157 = cljs.core.chunk_first.call(null,seq__8170_10156__$1);{
var G__10158 = cljs.core.chunk_rest.call(null,seq__8170_10156__$1);
var G__10159 = c__5632__auto___10157;
var G__10160 = cljs.core.count.call(null,c__5632__auto___10157);
var G__10161 = 0;
seq__8170_10146 = G__10158;
chunk__8171_10147 = G__10159;
count__8172_10148 = G__10160;
i__8173_10149 = G__10161;
continue;
}
} else
{var arg__6570__auto___10162 = cljs.core.first.call(null,seq__8170_10156__$1);a__6569__auto__.push(arg__6570__auto___10162);
{
var G__10163 = cljs.core.next.call(null,seq__8170_10156__$1);
var G__10164 = null;
var G__10165 = 0;
var G__10166 = 0;
seq__8170_10146 = G__10163;
chunk__8171_10147 = G__10164;
count__8172_10148 = G__10165;
i__8173_10149 = G__10166;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.param.apply(null,a__6569__auto__);
};
var param = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return param__delegate.call(this,args__6568__auto__);};
param.cljs$lang$maxFixedArity = 0;
param.cljs$lang$applyTo = (function (arglist__10167){
var args__6568__auto__ = cljs.core.seq(arglist__10167);
return param__delegate(args__6568__auto__);
});
param.cljs$core$IFn$_invoke$arity$variadic = param__delegate;
return param;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.pre = (function() { 
var pre__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__8178_10168 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__8179_10169 = null;var count__8180_10170 = 0;var i__8181_10171 = 0;while(true){
if((i__8181_10171 < count__8180_10170))
{var arg__6570__auto___10172 = cljs.core._nth.call(null,chunk__8179_10169,i__8181_10171);a__6569__auto__.push(arg__6570__auto___10172);
{
var G__10173 = seq__8178_10168;
var G__10174 = chunk__8179_10169;
var G__10175 = count__8180_10170;
var G__10176 = (i__8181_10171 + 1);
seq__8178_10168 = G__10173;
chunk__8179_10169 = G__10174;
count__8180_10170 = G__10175;
i__8181_10171 = G__10176;
continue;
}
} else
{var temp__4092__auto___10177 = cljs.core.seq.call(null,seq__8178_10168);if(temp__4092__auto___10177)
{var seq__8178_10178__$1 = temp__4092__auto___10177;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8178_10178__$1))
{var c__5632__auto___10179 = cljs.core.chunk_first.call(null,seq__8178_10178__$1);{
var G__10180 = cljs.core.chunk_rest.call(null,seq__8178_10178__$1);
var G__10181 = c__5632__auto___10179;
var G__10182 = cljs.core.count.call(null,c__5632__auto___10179);
var G__10183 = 0;
seq__8178_10168 = G__10180;
chunk__8179_10169 = G__10181;
count__8180_10170 = G__10182;
i__8181_10171 = G__10183;
continue;
}
} else
{var arg__6570__auto___10184 = cljs.core.first.call(null,seq__8178_10178__$1);a__6569__auto__.push(arg__6570__auto___10184);
{
var G__10185 = cljs.core.next.call(null,seq__8178_10178__$1);
var G__10186 = null;
var G__10187 = 0;
var G__10188 = 0;
seq__8178_10168 = G__10185;
chunk__8179_10169 = G__10186;
count__8180_10170 = G__10187;
i__8181_10171 = G__10188;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.pre.apply(null,a__6569__auto__);
};
var pre = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return pre__delegate.call(this,args__6568__auto__);};
pre.cljs$lang$maxFixedArity = 0;
pre.cljs$lang$applyTo = (function (arglist__10189){
var args__6568__auto__ = cljs.core.seq(arglist__10189);
return pre__delegate(args__6568__auto__);
});
pre.cljs$core$IFn$_invoke$arity$variadic = pre__delegate;
return pre;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.progress = (function() { 
var progress__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__8186_10190 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__8187_10191 = null;var count__8188_10192 = 0;var i__8189_10193 = 0;while(true){
if((i__8189_10193 < count__8188_10192))
{var arg__6570__auto___10194 = cljs.core._nth.call(null,chunk__8187_10191,i__8189_10193);a__6569__auto__.push(arg__6570__auto___10194);
{
var G__10195 = seq__8186_10190;
var G__10196 = chunk__8187_10191;
var G__10197 = count__8188_10192;
var G__10198 = (i__8189_10193 + 1);
seq__8186_10190 = G__10195;
chunk__8187_10191 = G__10196;
count__8188_10192 = G__10197;
i__8189_10193 = G__10198;
continue;
}
} else
{var temp__4092__auto___10199 = cljs.core.seq.call(null,seq__8186_10190);if(temp__4092__auto___10199)
{var seq__8186_10200__$1 = temp__4092__auto___10199;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8186_10200__$1))
{var c__5632__auto___10201 = cljs.core.chunk_first.call(null,seq__8186_10200__$1);{
var G__10202 = cljs.core.chunk_rest.call(null,seq__8186_10200__$1);
var G__10203 = c__5632__auto___10201;
var G__10204 = cljs.core.count.call(null,c__5632__auto___10201);
var G__10205 = 0;
seq__8186_10190 = G__10202;
chunk__8187_10191 = G__10203;
count__8188_10192 = G__10204;
i__8189_10193 = G__10205;
continue;
}
} else
{var arg__6570__auto___10206 = cljs.core.first.call(null,seq__8186_10200__$1);a__6569__auto__.push(arg__6570__auto___10206);
{
var G__10207 = cljs.core.next.call(null,seq__8186_10200__$1);
var G__10208 = null;
var G__10209 = 0;
var G__10210 = 0;
seq__8186_10190 = G__10207;
chunk__8187_10191 = G__10208;
count__8188_10192 = G__10209;
i__8189_10193 = G__10210;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.progress.apply(null,a__6569__auto__);
};
var progress = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return progress__delegate.call(this,args__6568__auto__);};
progress.cljs$lang$maxFixedArity = 0;
progress.cljs$lang$applyTo = (function (arglist__10211){
var args__6568__auto__ = cljs.core.seq(arglist__10211);
return progress__delegate(args__6568__auto__);
});
progress.cljs$core$IFn$_invoke$arity$variadic = progress__delegate;
return progress;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.q = (function() { 
var q__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__8194_10212 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__8195_10213 = null;var count__8196_10214 = 0;var i__8197_10215 = 0;while(true){
if((i__8197_10215 < count__8196_10214))
{var arg__6570__auto___10216 = cljs.core._nth.call(null,chunk__8195_10213,i__8197_10215);a__6569__auto__.push(arg__6570__auto___10216);
{
var G__10217 = seq__8194_10212;
var G__10218 = chunk__8195_10213;
var G__10219 = count__8196_10214;
var G__10220 = (i__8197_10215 + 1);
seq__8194_10212 = G__10217;
chunk__8195_10213 = G__10218;
count__8196_10214 = G__10219;
i__8197_10215 = G__10220;
continue;
}
} else
{var temp__4092__auto___10221 = cljs.core.seq.call(null,seq__8194_10212);if(temp__4092__auto___10221)
{var seq__8194_10222__$1 = temp__4092__auto___10221;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8194_10222__$1))
{var c__5632__auto___10223 = cljs.core.chunk_first.call(null,seq__8194_10222__$1);{
var G__10224 = cljs.core.chunk_rest.call(null,seq__8194_10222__$1);
var G__10225 = c__5632__auto___10223;
var G__10226 = cljs.core.count.call(null,c__5632__auto___10223);
var G__10227 = 0;
seq__8194_10212 = G__10224;
chunk__8195_10213 = G__10225;
count__8196_10214 = G__10226;
i__8197_10215 = G__10227;
continue;
}
} else
{var arg__6570__auto___10228 = cljs.core.first.call(null,seq__8194_10222__$1);a__6569__auto__.push(arg__6570__auto___10228);
{
var G__10229 = cljs.core.next.call(null,seq__8194_10222__$1);
var G__10230 = null;
var G__10231 = 0;
var G__10232 = 0;
seq__8194_10212 = G__10229;
chunk__8195_10213 = G__10230;
count__8196_10214 = G__10231;
i__8197_10215 = G__10232;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.q.apply(null,a__6569__auto__);
};
var q = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return q__delegate.call(this,args__6568__auto__);};
q.cljs$lang$maxFixedArity = 0;
q.cljs$lang$applyTo = (function (arglist__10233){
var args__6568__auto__ = cljs.core.seq(arglist__10233);
return q__delegate(args__6568__auto__);
});
q.cljs$core$IFn$_invoke$arity$variadic = q__delegate;
return q;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.rp = (function() { 
var rp__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__8202_10234 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__8203_10235 = null;var count__8204_10236 = 0;var i__8205_10237 = 0;while(true){
if((i__8205_10237 < count__8204_10236))
{var arg__6570__auto___10238 = cljs.core._nth.call(null,chunk__8203_10235,i__8205_10237);a__6569__auto__.push(arg__6570__auto___10238);
{
var G__10239 = seq__8202_10234;
var G__10240 = chunk__8203_10235;
var G__10241 = count__8204_10236;
var G__10242 = (i__8205_10237 + 1);
seq__8202_10234 = G__10239;
chunk__8203_10235 = G__10240;
count__8204_10236 = G__10241;
i__8205_10237 = G__10242;
continue;
}
} else
{var temp__4092__auto___10243 = cljs.core.seq.call(null,seq__8202_10234);if(temp__4092__auto___10243)
{var seq__8202_10244__$1 = temp__4092__auto___10243;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8202_10244__$1))
{var c__5632__auto___10245 = cljs.core.chunk_first.call(null,seq__8202_10244__$1);{
var G__10246 = cljs.core.chunk_rest.call(null,seq__8202_10244__$1);
var G__10247 = c__5632__auto___10245;
var G__10248 = cljs.core.count.call(null,c__5632__auto___10245);
var G__10249 = 0;
seq__8202_10234 = G__10246;
chunk__8203_10235 = G__10247;
count__8204_10236 = G__10248;
i__8205_10237 = G__10249;
continue;
}
} else
{var arg__6570__auto___10250 = cljs.core.first.call(null,seq__8202_10244__$1);a__6569__auto__.push(arg__6570__auto___10250);
{
var G__10251 = cljs.core.next.call(null,seq__8202_10244__$1);
var G__10252 = null;
var G__10253 = 0;
var G__10254 = 0;
seq__8202_10234 = G__10251;
chunk__8203_10235 = G__10252;
count__8204_10236 = G__10253;
i__8205_10237 = G__10254;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.rp.apply(null,a__6569__auto__);
};
var rp = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return rp__delegate.call(this,args__6568__auto__);};
rp.cljs$lang$maxFixedArity = 0;
rp.cljs$lang$applyTo = (function (arglist__10255){
var args__6568__auto__ = cljs.core.seq(arglist__10255);
return rp__delegate(args__6568__auto__);
});
rp.cljs$core$IFn$_invoke$arity$variadic = rp__delegate;
return rp;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.rt = (function() { 
var rt__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__8210_10256 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__8211_10257 = null;var count__8212_10258 = 0;var i__8213_10259 = 0;while(true){
if((i__8213_10259 < count__8212_10258))
{var arg__6570__auto___10260 = cljs.core._nth.call(null,chunk__8211_10257,i__8213_10259);a__6569__auto__.push(arg__6570__auto___10260);
{
var G__10261 = seq__8210_10256;
var G__10262 = chunk__8211_10257;
var G__10263 = count__8212_10258;
var G__10264 = (i__8213_10259 + 1);
seq__8210_10256 = G__10261;
chunk__8211_10257 = G__10262;
count__8212_10258 = G__10263;
i__8213_10259 = G__10264;
continue;
}
} else
{var temp__4092__auto___10265 = cljs.core.seq.call(null,seq__8210_10256);if(temp__4092__auto___10265)
{var seq__8210_10266__$1 = temp__4092__auto___10265;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8210_10266__$1))
{var c__5632__auto___10267 = cljs.core.chunk_first.call(null,seq__8210_10266__$1);{
var G__10268 = cljs.core.chunk_rest.call(null,seq__8210_10266__$1);
var G__10269 = c__5632__auto___10267;
var G__10270 = cljs.core.count.call(null,c__5632__auto___10267);
var G__10271 = 0;
seq__8210_10256 = G__10268;
chunk__8211_10257 = G__10269;
count__8212_10258 = G__10270;
i__8213_10259 = G__10271;
continue;
}
} else
{var arg__6570__auto___10272 = cljs.core.first.call(null,seq__8210_10266__$1);a__6569__auto__.push(arg__6570__auto___10272);
{
var G__10273 = cljs.core.next.call(null,seq__8210_10266__$1);
var G__10274 = null;
var G__10275 = 0;
var G__10276 = 0;
seq__8210_10256 = G__10273;
chunk__8211_10257 = G__10274;
count__8212_10258 = G__10275;
i__8213_10259 = G__10276;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.rt.apply(null,a__6569__auto__);
};
var rt = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return rt__delegate.call(this,args__6568__auto__);};
rt.cljs$lang$maxFixedArity = 0;
rt.cljs$lang$applyTo = (function (arglist__10277){
var args__6568__auto__ = cljs.core.seq(arglist__10277);
return rt__delegate(args__6568__auto__);
});
rt.cljs$core$IFn$_invoke$arity$variadic = rt__delegate;
return rt;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.ruby = (function() { 
var ruby__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__8218_10278 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__8219_10279 = null;var count__8220_10280 = 0;var i__8221_10281 = 0;while(true){
if((i__8221_10281 < count__8220_10280))
{var arg__6570__auto___10282 = cljs.core._nth.call(null,chunk__8219_10279,i__8221_10281);a__6569__auto__.push(arg__6570__auto___10282);
{
var G__10283 = seq__8218_10278;
var G__10284 = chunk__8219_10279;
var G__10285 = count__8220_10280;
var G__10286 = (i__8221_10281 + 1);
seq__8218_10278 = G__10283;
chunk__8219_10279 = G__10284;
count__8220_10280 = G__10285;
i__8221_10281 = G__10286;
continue;
}
} else
{var temp__4092__auto___10287 = cljs.core.seq.call(null,seq__8218_10278);if(temp__4092__auto___10287)
{var seq__8218_10288__$1 = temp__4092__auto___10287;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8218_10288__$1))
{var c__5632__auto___10289 = cljs.core.chunk_first.call(null,seq__8218_10288__$1);{
var G__10290 = cljs.core.chunk_rest.call(null,seq__8218_10288__$1);
var G__10291 = c__5632__auto___10289;
var G__10292 = cljs.core.count.call(null,c__5632__auto___10289);
var G__10293 = 0;
seq__8218_10278 = G__10290;
chunk__8219_10279 = G__10291;
count__8220_10280 = G__10292;
i__8221_10281 = G__10293;
continue;
}
} else
{var arg__6570__auto___10294 = cljs.core.first.call(null,seq__8218_10288__$1);a__6569__auto__.push(arg__6570__auto___10294);
{
var G__10295 = cljs.core.next.call(null,seq__8218_10288__$1);
var G__10296 = null;
var G__10297 = 0;
var G__10298 = 0;
seq__8218_10278 = G__10295;
chunk__8219_10279 = G__10296;
count__8220_10280 = G__10297;
i__8221_10281 = G__10298;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.ruby.apply(null,a__6569__auto__);
};
var ruby = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ruby__delegate.call(this,args__6568__auto__);};
ruby.cljs$lang$maxFixedArity = 0;
ruby.cljs$lang$applyTo = (function (arglist__10299){
var args__6568__auto__ = cljs.core.seq(arglist__10299);
return ruby__delegate(args__6568__auto__);
});
ruby.cljs$core$IFn$_invoke$arity$variadic = ruby__delegate;
return ruby;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.s = (function() { 
var s__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__8226_10300 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__8227_10301 = null;var count__8228_10302 = 0;var i__8229_10303 = 0;while(true){
if((i__8229_10303 < count__8228_10302))
{var arg__6570__auto___10304 = cljs.core._nth.call(null,chunk__8227_10301,i__8229_10303);a__6569__auto__.push(arg__6570__auto___10304);
{
var G__10305 = seq__8226_10300;
var G__10306 = chunk__8227_10301;
var G__10307 = count__8228_10302;
var G__10308 = (i__8229_10303 + 1);
seq__8226_10300 = G__10305;
chunk__8227_10301 = G__10306;
count__8228_10302 = G__10307;
i__8229_10303 = G__10308;
continue;
}
} else
{var temp__4092__auto___10309 = cljs.core.seq.call(null,seq__8226_10300);if(temp__4092__auto___10309)
{var seq__8226_10310__$1 = temp__4092__auto___10309;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8226_10310__$1))
{var c__5632__auto___10311 = cljs.core.chunk_first.call(null,seq__8226_10310__$1);{
var G__10312 = cljs.core.chunk_rest.call(null,seq__8226_10310__$1);
var G__10313 = c__5632__auto___10311;
var G__10314 = cljs.core.count.call(null,c__5632__auto___10311);
var G__10315 = 0;
seq__8226_10300 = G__10312;
chunk__8227_10301 = G__10313;
count__8228_10302 = G__10314;
i__8229_10303 = G__10315;
continue;
}
} else
{var arg__6570__auto___10316 = cljs.core.first.call(null,seq__8226_10310__$1);a__6569__auto__.push(arg__6570__auto___10316);
{
var G__10317 = cljs.core.next.call(null,seq__8226_10310__$1);
var G__10318 = null;
var G__10319 = 0;
var G__10320 = 0;
seq__8226_10300 = G__10317;
chunk__8227_10301 = G__10318;
count__8228_10302 = G__10319;
i__8229_10303 = G__10320;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.s.apply(null,a__6569__auto__);
};
var s = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return s__delegate.call(this,args__6568__auto__);};
s.cljs$lang$maxFixedArity = 0;
s.cljs$lang$applyTo = (function (arglist__10321){
var args__6568__auto__ = cljs.core.seq(arglist__10321);
return s__delegate(args__6568__auto__);
});
s.cljs$core$IFn$_invoke$arity$variadic = s__delegate;
return s;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.samp = (function() { 
var samp__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__8234_10322 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__8235_10323 = null;var count__8236_10324 = 0;var i__8237_10325 = 0;while(true){
if((i__8237_10325 < count__8236_10324))
{var arg__6570__auto___10326 = cljs.core._nth.call(null,chunk__8235_10323,i__8237_10325);a__6569__auto__.push(arg__6570__auto___10326);
{
var G__10327 = seq__8234_10322;
var G__10328 = chunk__8235_10323;
var G__10329 = count__8236_10324;
var G__10330 = (i__8237_10325 + 1);
seq__8234_10322 = G__10327;
chunk__8235_10323 = G__10328;
count__8236_10324 = G__10329;
i__8237_10325 = G__10330;
continue;
}
} else
{var temp__4092__auto___10331 = cljs.core.seq.call(null,seq__8234_10322);if(temp__4092__auto___10331)
{var seq__8234_10332__$1 = temp__4092__auto___10331;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8234_10332__$1))
{var c__5632__auto___10333 = cljs.core.chunk_first.call(null,seq__8234_10332__$1);{
var G__10334 = cljs.core.chunk_rest.call(null,seq__8234_10332__$1);
var G__10335 = c__5632__auto___10333;
var G__10336 = cljs.core.count.call(null,c__5632__auto___10333);
var G__10337 = 0;
seq__8234_10322 = G__10334;
chunk__8235_10323 = G__10335;
count__8236_10324 = G__10336;
i__8237_10325 = G__10337;
continue;
}
} else
{var arg__6570__auto___10338 = cljs.core.first.call(null,seq__8234_10332__$1);a__6569__auto__.push(arg__6570__auto___10338);
{
var G__10339 = cljs.core.next.call(null,seq__8234_10332__$1);
var G__10340 = null;
var G__10341 = 0;
var G__10342 = 0;
seq__8234_10322 = G__10339;
chunk__8235_10323 = G__10340;
count__8236_10324 = G__10341;
i__8237_10325 = G__10342;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.samp.apply(null,a__6569__auto__);
};
var samp = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return samp__delegate.call(this,args__6568__auto__);};
samp.cljs$lang$maxFixedArity = 0;
samp.cljs$lang$applyTo = (function (arglist__10343){
var args__6568__auto__ = cljs.core.seq(arglist__10343);
return samp__delegate(args__6568__auto__);
});
samp.cljs$core$IFn$_invoke$arity$variadic = samp__delegate;
return samp;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.script = (function() { 
var script__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__8242_10344 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__8243_10345 = null;var count__8244_10346 = 0;var i__8245_10347 = 0;while(true){
if((i__8245_10347 < count__8244_10346))
{var arg__6570__auto___10348 = cljs.core._nth.call(null,chunk__8243_10345,i__8245_10347);a__6569__auto__.push(arg__6570__auto___10348);
{
var G__10349 = seq__8242_10344;
var G__10350 = chunk__8243_10345;
var G__10351 = count__8244_10346;
var G__10352 = (i__8245_10347 + 1);
seq__8242_10344 = G__10349;
chunk__8243_10345 = G__10350;
count__8244_10346 = G__10351;
i__8245_10347 = G__10352;
continue;
}
} else
{var temp__4092__auto___10353 = cljs.core.seq.call(null,seq__8242_10344);if(temp__4092__auto___10353)
{var seq__8242_10354__$1 = temp__4092__auto___10353;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8242_10354__$1))
{var c__5632__auto___10355 = cljs.core.chunk_first.call(null,seq__8242_10354__$1);{
var G__10356 = cljs.core.chunk_rest.call(null,seq__8242_10354__$1);
var G__10357 = c__5632__auto___10355;
var G__10358 = cljs.core.count.call(null,c__5632__auto___10355);
var G__10359 = 0;
seq__8242_10344 = G__10356;
chunk__8243_10345 = G__10357;
count__8244_10346 = G__10358;
i__8245_10347 = G__10359;
continue;
}
} else
{var arg__6570__auto___10360 = cljs.core.first.call(null,seq__8242_10354__$1);a__6569__auto__.push(arg__6570__auto___10360);
{
var G__10361 = cljs.core.next.call(null,seq__8242_10354__$1);
var G__10362 = null;
var G__10363 = 0;
var G__10364 = 0;
seq__8242_10344 = G__10361;
chunk__8243_10345 = G__10362;
count__8244_10346 = G__10363;
i__8245_10347 = G__10364;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.script.apply(null,a__6569__auto__);
};
var script = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return script__delegate.call(this,args__6568__auto__);};
script.cljs$lang$maxFixedArity = 0;
script.cljs$lang$applyTo = (function (arglist__10365){
var args__6568__auto__ = cljs.core.seq(arglist__10365);
return script__delegate(args__6568__auto__);
});
script.cljs$core$IFn$_invoke$arity$variadic = script__delegate;
return script;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.section = (function() { 
var section__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__8250_10366 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__8251_10367 = null;var count__8252_10368 = 0;var i__8253_10369 = 0;while(true){
if((i__8253_10369 < count__8252_10368))
{var arg__6570__auto___10370 = cljs.core._nth.call(null,chunk__8251_10367,i__8253_10369);a__6569__auto__.push(arg__6570__auto___10370);
{
var G__10371 = seq__8250_10366;
var G__10372 = chunk__8251_10367;
var G__10373 = count__8252_10368;
var G__10374 = (i__8253_10369 + 1);
seq__8250_10366 = G__10371;
chunk__8251_10367 = G__10372;
count__8252_10368 = G__10373;
i__8253_10369 = G__10374;
continue;
}
} else
{var temp__4092__auto___10375 = cljs.core.seq.call(null,seq__8250_10366);if(temp__4092__auto___10375)
{var seq__8250_10376__$1 = temp__4092__auto___10375;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8250_10376__$1))
{var c__5632__auto___10377 = cljs.core.chunk_first.call(null,seq__8250_10376__$1);{
var G__10378 = cljs.core.chunk_rest.call(null,seq__8250_10376__$1);
var G__10379 = c__5632__auto___10377;
var G__10380 = cljs.core.count.call(null,c__5632__auto___10377);
var G__10381 = 0;
seq__8250_10366 = G__10378;
chunk__8251_10367 = G__10379;
count__8252_10368 = G__10380;
i__8253_10369 = G__10381;
continue;
}
} else
{var arg__6570__auto___10382 = cljs.core.first.call(null,seq__8250_10376__$1);a__6569__auto__.push(arg__6570__auto___10382);
{
var G__10383 = cljs.core.next.call(null,seq__8250_10376__$1);
var G__10384 = null;
var G__10385 = 0;
var G__10386 = 0;
seq__8250_10366 = G__10383;
chunk__8251_10367 = G__10384;
count__8252_10368 = G__10385;
i__8253_10369 = G__10386;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.section.apply(null,a__6569__auto__);
};
var section = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return section__delegate.call(this,args__6568__auto__);};
section.cljs$lang$maxFixedArity = 0;
section.cljs$lang$applyTo = (function (arglist__10387){
var args__6568__auto__ = cljs.core.seq(arglist__10387);
return section__delegate(args__6568__auto__);
});
section.cljs$core$IFn$_invoke$arity$variadic = section__delegate;
return section;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.select = (function() { 
var select__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__8258_10388 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__8259_10389 = null;var count__8260_10390 = 0;var i__8261_10391 = 0;while(true){
if((i__8261_10391 < count__8260_10390))
{var arg__6570__auto___10392 = cljs.core._nth.call(null,chunk__8259_10389,i__8261_10391);a__6569__auto__.push(arg__6570__auto___10392);
{
var G__10393 = seq__8258_10388;
var G__10394 = chunk__8259_10389;
var G__10395 = count__8260_10390;
var G__10396 = (i__8261_10391 + 1);
seq__8258_10388 = G__10393;
chunk__8259_10389 = G__10394;
count__8260_10390 = G__10395;
i__8261_10391 = G__10396;
continue;
}
} else
{var temp__4092__auto___10397 = cljs.core.seq.call(null,seq__8258_10388);if(temp__4092__auto___10397)
{var seq__8258_10398__$1 = temp__4092__auto___10397;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8258_10398__$1))
{var c__5632__auto___10399 = cljs.core.chunk_first.call(null,seq__8258_10398__$1);{
var G__10400 = cljs.core.chunk_rest.call(null,seq__8258_10398__$1);
var G__10401 = c__5632__auto___10399;
var G__10402 = cljs.core.count.call(null,c__5632__auto___10399);
var G__10403 = 0;
seq__8258_10388 = G__10400;
chunk__8259_10389 = G__10401;
count__8260_10390 = G__10402;
i__8261_10391 = G__10403;
continue;
}
} else
{var arg__6570__auto___10404 = cljs.core.first.call(null,seq__8258_10398__$1);a__6569__auto__.push(arg__6570__auto___10404);
{
var G__10405 = cljs.core.next.call(null,seq__8258_10398__$1);
var G__10406 = null;
var G__10407 = 0;
var G__10408 = 0;
seq__8258_10388 = G__10405;
chunk__8259_10389 = G__10406;
count__8260_10390 = G__10407;
i__8261_10391 = G__10408;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.select.apply(null,a__6569__auto__);
};
var select = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return select__delegate.call(this,args__6568__auto__);};
select.cljs$lang$maxFixedArity = 0;
select.cljs$lang$applyTo = (function (arglist__10409){
var args__6568__auto__ = cljs.core.seq(arglist__10409);
return select__delegate(args__6568__auto__);
});
select.cljs$core$IFn$_invoke$arity$variadic = select__delegate;
return select;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.small = (function() { 
var small__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__8266_10410 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__8267_10411 = null;var count__8268_10412 = 0;var i__8269_10413 = 0;while(true){
if((i__8269_10413 < count__8268_10412))
{var arg__6570__auto___10414 = cljs.core._nth.call(null,chunk__8267_10411,i__8269_10413);a__6569__auto__.push(arg__6570__auto___10414);
{
var G__10415 = seq__8266_10410;
var G__10416 = chunk__8267_10411;
var G__10417 = count__8268_10412;
var G__10418 = (i__8269_10413 + 1);
seq__8266_10410 = G__10415;
chunk__8267_10411 = G__10416;
count__8268_10412 = G__10417;
i__8269_10413 = G__10418;
continue;
}
} else
{var temp__4092__auto___10419 = cljs.core.seq.call(null,seq__8266_10410);if(temp__4092__auto___10419)
{var seq__8266_10420__$1 = temp__4092__auto___10419;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8266_10420__$1))
{var c__5632__auto___10421 = cljs.core.chunk_first.call(null,seq__8266_10420__$1);{
var G__10422 = cljs.core.chunk_rest.call(null,seq__8266_10420__$1);
var G__10423 = c__5632__auto___10421;
var G__10424 = cljs.core.count.call(null,c__5632__auto___10421);
var G__10425 = 0;
seq__8266_10410 = G__10422;
chunk__8267_10411 = G__10423;
count__8268_10412 = G__10424;
i__8269_10413 = G__10425;
continue;
}
} else
{var arg__6570__auto___10426 = cljs.core.first.call(null,seq__8266_10420__$1);a__6569__auto__.push(arg__6570__auto___10426);
{
var G__10427 = cljs.core.next.call(null,seq__8266_10420__$1);
var G__10428 = null;
var G__10429 = 0;
var G__10430 = 0;
seq__8266_10410 = G__10427;
chunk__8267_10411 = G__10428;
count__8268_10412 = G__10429;
i__8269_10413 = G__10430;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.small.apply(null,a__6569__auto__);
};
var small = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return small__delegate.call(this,args__6568__auto__);};
small.cljs$lang$maxFixedArity = 0;
small.cljs$lang$applyTo = (function (arglist__10431){
var args__6568__auto__ = cljs.core.seq(arglist__10431);
return small__delegate(args__6568__auto__);
});
small.cljs$core$IFn$_invoke$arity$variadic = small__delegate;
return small;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.source = (function() { 
var source__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__8274_10432 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__8275_10433 = null;var count__8276_10434 = 0;var i__8277_10435 = 0;while(true){
if((i__8277_10435 < count__8276_10434))
{var arg__6570__auto___10436 = cljs.core._nth.call(null,chunk__8275_10433,i__8277_10435);a__6569__auto__.push(arg__6570__auto___10436);
{
var G__10437 = seq__8274_10432;
var G__10438 = chunk__8275_10433;
var G__10439 = count__8276_10434;
var G__10440 = (i__8277_10435 + 1);
seq__8274_10432 = G__10437;
chunk__8275_10433 = G__10438;
count__8276_10434 = G__10439;
i__8277_10435 = G__10440;
continue;
}
} else
{var temp__4092__auto___10441 = cljs.core.seq.call(null,seq__8274_10432);if(temp__4092__auto___10441)
{var seq__8274_10442__$1 = temp__4092__auto___10441;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8274_10442__$1))
{var c__5632__auto___10443 = cljs.core.chunk_first.call(null,seq__8274_10442__$1);{
var G__10444 = cljs.core.chunk_rest.call(null,seq__8274_10442__$1);
var G__10445 = c__5632__auto___10443;
var G__10446 = cljs.core.count.call(null,c__5632__auto___10443);
var G__10447 = 0;
seq__8274_10432 = G__10444;
chunk__8275_10433 = G__10445;
count__8276_10434 = G__10446;
i__8277_10435 = G__10447;
continue;
}
} else
{var arg__6570__auto___10448 = cljs.core.first.call(null,seq__8274_10442__$1);a__6569__auto__.push(arg__6570__auto___10448);
{
var G__10449 = cljs.core.next.call(null,seq__8274_10442__$1);
var G__10450 = null;
var G__10451 = 0;
var G__10452 = 0;
seq__8274_10432 = G__10449;
chunk__8275_10433 = G__10450;
count__8276_10434 = G__10451;
i__8277_10435 = G__10452;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.source.apply(null,a__6569__auto__);
};
var source = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return source__delegate.call(this,args__6568__auto__);};
source.cljs$lang$maxFixedArity = 0;
source.cljs$lang$applyTo = (function (arglist__10453){
var args__6568__auto__ = cljs.core.seq(arglist__10453);
return source__delegate(args__6568__auto__);
});
source.cljs$core$IFn$_invoke$arity$variadic = source__delegate;
return source;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.span = (function() { 
var span__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__8282_10454 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__8283_10455 = null;var count__8284_10456 = 0;var i__8285_10457 = 0;while(true){
if((i__8285_10457 < count__8284_10456))
{var arg__6570__auto___10458 = cljs.core._nth.call(null,chunk__8283_10455,i__8285_10457);a__6569__auto__.push(arg__6570__auto___10458);
{
var G__10459 = seq__8282_10454;
var G__10460 = chunk__8283_10455;
var G__10461 = count__8284_10456;
var G__10462 = (i__8285_10457 + 1);
seq__8282_10454 = G__10459;
chunk__8283_10455 = G__10460;
count__8284_10456 = G__10461;
i__8285_10457 = G__10462;
continue;
}
} else
{var temp__4092__auto___10463 = cljs.core.seq.call(null,seq__8282_10454);if(temp__4092__auto___10463)
{var seq__8282_10464__$1 = temp__4092__auto___10463;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8282_10464__$1))
{var c__5632__auto___10465 = cljs.core.chunk_first.call(null,seq__8282_10464__$1);{
var G__10466 = cljs.core.chunk_rest.call(null,seq__8282_10464__$1);
var G__10467 = c__5632__auto___10465;
var G__10468 = cljs.core.count.call(null,c__5632__auto___10465);
var G__10469 = 0;
seq__8282_10454 = G__10466;
chunk__8283_10455 = G__10467;
count__8284_10456 = G__10468;
i__8285_10457 = G__10469;
continue;
}
} else
{var arg__6570__auto___10470 = cljs.core.first.call(null,seq__8282_10464__$1);a__6569__auto__.push(arg__6570__auto___10470);
{
var G__10471 = cljs.core.next.call(null,seq__8282_10464__$1);
var G__10472 = null;
var G__10473 = 0;
var G__10474 = 0;
seq__8282_10454 = G__10471;
chunk__8283_10455 = G__10472;
count__8284_10456 = G__10473;
i__8285_10457 = G__10474;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.span.apply(null,a__6569__auto__);
};
var span = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return span__delegate.call(this,args__6568__auto__);};
span.cljs$lang$maxFixedArity = 0;
span.cljs$lang$applyTo = (function (arglist__10475){
var args__6568__auto__ = cljs.core.seq(arglist__10475);
return span__delegate(args__6568__auto__);
});
span.cljs$core$IFn$_invoke$arity$variadic = span__delegate;
return span;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.strong = (function() { 
var strong__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__8290_10476 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__8291_10477 = null;var count__8292_10478 = 0;var i__8293_10479 = 0;while(true){
if((i__8293_10479 < count__8292_10478))
{var arg__6570__auto___10480 = cljs.core._nth.call(null,chunk__8291_10477,i__8293_10479);a__6569__auto__.push(arg__6570__auto___10480);
{
var G__10481 = seq__8290_10476;
var G__10482 = chunk__8291_10477;
var G__10483 = count__8292_10478;
var G__10484 = (i__8293_10479 + 1);
seq__8290_10476 = G__10481;
chunk__8291_10477 = G__10482;
count__8292_10478 = G__10483;
i__8293_10479 = G__10484;
continue;
}
} else
{var temp__4092__auto___10485 = cljs.core.seq.call(null,seq__8290_10476);if(temp__4092__auto___10485)
{var seq__8290_10486__$1 = temp__4092__auto___10485;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8290_10486__$1))
{var c__5632__auto___10487 = cljs.core.chunk_first.call(null,seq__8290_10486__$1);{
var G__10488 = cljs.core.chunk_rest.call(null,seq__8290_10486__$1);
var G__10489 = c__5632__auto___10487;
var G__10490 = cljs.core.count.call(null,c__5632__auto___10487);
var G__10491 = 0;
seq__8290_10476 = G__10488;
chunk__8291_10477 = G__10489;
count__8292_10478 = G__10490;
i__8293_10479 = G__10491;
continue;
}
} else
{var arg__6570__auto___10492 = cljs.core.first.call(null,seq__8290_10486__$1);a__6569__auto__.push(arg__6570__auto___10492);
{
var G__10493 = cljs.core.next.call(null,seq__8290_10486__$1);
var G__10494 = null;
var G__10495 = 0;
var G__10496 = 0;
seq__8290_10476 = G__10493;
chunk__8291_10477 = G__10494;
count__8292_10478 = G__10495;
i__8293_10479 = G__10496;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.strong.apply(null,a__6569__auto__);
};
var strong = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return strong__delegate.call(this,args__6568__auto__);};
strong.cljs$lang$maxFixedArity = 0;
strong.cljs$lang$applyTo = (function (arglist__10497){
var args__6568__auto__ = cljs.core.seq(arglist__10497);
return strong__delegate(args__6568__auto__);
});
strong.cljs$core$IFn$_invoke$arity$variadic = strong__delegate;
return strong;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.style = (function() { 
var style__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__8298_10498 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__8299_10499 = null;var count__8300_10500 = 0;var i__8301_10501 = 0;while(true){
if((i__8301_10501 < count__8300_10500))
{var arg__6570__auto___10502 = cljs.core._nth.call(null,chunk__8299_10499,i__8301_10501);a__6569__auto__.push(arg__6570__auto___10502);
{
var G__10503 = seq__8298_10498;
var G__10504 = chunk__8299_10499;
var G__10505 = count__8300_10500;
var G__10506 = (i__8301_10501 + 1);
seq__8298_10498 = G__10503;
chunk__8299_10499 = G__10504;
count__8300_10500 = G__10505;
i__8301_10501 = G__10506;
continue;
}
} else
{var temp__4092__auto___10507 = cljs.core.seq.call(null,seq__8298_10498);if(temp__4092__auto___10507)
{var seq__8298_10508__$1 = temp__4092__auto___10507;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8298_10508__$1))
{var c__5632__auto___10509 = cljs.core.chunk_first.call(null,seq__8298_10508__$1);{
var G__10510 = cljs.core.chunk_rest.call(null,seq__8298_10508__$1);
var G__10511 = c__5632__auto___10509;
var G__10512 = cljs.core.count.call(null,c__5632__auto___10509);
var G__10513 = 0;
seq__8298_10498 = G__10510;
chunk__8299_10499 = G__10511;
count__8300_10500 = G__10512;
i__8301_10501 = G__10513;
continue;
}
} else
{var arg__6570__auto___10514 = cljs.core.first.call(null,seq__8298_10508__$1);a__6569__auto__.push(arg__6570__auto___10514);
{
var G__10515 = cljs.core.next.call(null,seq__8298_10508__$1);
var G__10516 = null;
var G__10517 = 0;
var G__10518 = 0;
seq__8298_10498 = G__10515;
chunk__8299_10499 = G__10516;
count__8300_10500 = G__10517;
i__8301_10501 = G__10518;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.style.apply(null,a__6569__auto__);
};
var style = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return style__delegate.call(this,args__6568__auto__);};
style.cljs$lang$maxFixedArity = 0;
style.cljs$lang$applyTo = (function (arglist__10519){
var args__6568__auto__ = cljs.core.seq(arglist__10519);
return style__delegate(args__6568__auto__);
});
style.cljs$core$IFn$_invoke$arity$variadic = style__delegate;
return style;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.sub = (function() { 
var sub__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__8306_10520 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__8307_10521 = null;var count__8308_10522 = 0;var i__8309_10523 = 0;while(true){
if((i__8309_10523 < count__8308_10522))
{var arg__6570__auto___10524 = cljs.core._nth.call(null,chunk__8307_10521,i__8309_10523);a__6569__auto__.push(arg__6570__auto___10524);
{
var G__10525 = seq__8306_10520;
var G__10526 = chunk__8307_10521;
var G__10527 = count__8308_10522;
var G__10528 = (i__8309_10523 + 1);
seq__8306_10520 = G__10525;
chunk__8307_10521 = G__10526;
count__8308_10522 = G__10527;
i__8309_10523 = G__10528;
continue;
}
} else
{var temp__4092__auto___10529 = cljs.core.seq.call(null,seq__8306_10520);if(temp__4092__auto___10529)
{var seq__8306_10530__$1 = temp__4092__auto___10529;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8306_10530__$1))
{var c__5632__auto___10531 = cljs.core.chunk_first.call(null,seq__8306_10530__$1);{
var G__10532 = cljs.core.chunk_rest.call(null,seq__8306_10530__$1);
var G__10533 = c__5632__auto___10531;
var G__10534 = cljs.core.count.call(null,c__5632__auto___10531);
var G__10535 = 0;
seq__8306_10520 = G__10532;
chunk__8307_10521 = G__10533;
count__8308_10522 = G__10534;
i__8309_10523 = G__10535;
continue;
}
} else
{var arg__6570__auto___10536 = cljs.core.first.call(null,seq__8306_10530__$1);a__6569__auto__.push(arg__6570__auto___10536);
{
var G__10537 = cljs.core.next.call(null,seq__8306_10530__$1);
var G__10538 = null;
var G__10539 = 0;
var G__10540 = 0;
seq__8306_10520 = G__10537;
chunk__8307_10521 = G__10538;
count__8308_10522 = G__10539;
i__8309_10523 = G__10540;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.sub.apply(null,a__6569__auto__);
};
var sub = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return sub__delegate.call(this,args__6568__auto__);};
sub.cljs$lang$maxFixedArity = 0;
sub.cljs$lang$applyTo = (function (arglist__10541){
var args__6568__auto__ = cljs.core.seq(arglist__10541);
return sub__delegate(args__6568__auto__);
});
sub.cljs$core$IFn$_invoke$arity$variadic = sub__delegate;
return sub;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.summary = (function() { 
var summary__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__8314_10542 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__8315_10543 = null;var count__8316_10544 = 0;var i__8317_10545 = 0;while(true){
if((i__8317_10545 < count__8316_10544))
{var arg__6570__auto___10546 = cljs.core._nth.call(null,chunk__8315_10543,i__8317_10545);a__6569__auto__.push(arg__6570__auto___10546);
{
var G__10547 = seq__8314_10542;
var G__10548 = chunk__8315_10543;
var G__10549 = count__8316_10544;
var G__10550 = (i__8317_10545 + 1);
seq__8314_10542 = G__10547;
chunk__8315_10543 = G__10548;
count__8316_10544 = G__10549;
i__8317_10545 = G__10550;
continue;
}
} else
{var temp__4092__auto___10551 = cljs.core.seq.call(null,seq__8314_10542);if(temp__4092__auto___10551)
{var seq__8314_10552__$1 = temp__4092__auto___10551;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8314_10552__$1))
{var c__5632__auto___10553 = cljs.core.chunk_first.call(null,seq__8314_10552__$1);{
var G__10554 = cljs.core.chunk_rest.call(null,seq__8314_10552__$1);
var G__10555 = c__5632__auto___10553;
var G__10556 = cljs.core.count.call(null,c__5632__auto___10553);
var G__10557 = 0;
seq__8314_10542 = G__10554;
chunk__8315_10543 = G__10555;
count__8316_10544 = G__10556;
i__8317_10545 = G__10557;
continue;
}
} else
{var arg__6570__auto___10558 = cljs.core.first.call(null,seq__8314_10552__$1);a__6569__auto__.push(arg__6570__auto___10558);
{
var G__10559 = cljs.core.next.call(null,seq__8314_10552__$1);
var G__10560 = null;
var G__10561 = 0;
var G__10562 = 0;
seq__8314_10542 = G__10559;
chunk__8315_10543 = G__10560;
count__8316_10544 = G__10561;
i__8317_10545 = G__10562;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.summary.apply(null,a__6569__auto__);
};
var summary = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return summary__delegate.call(this,args__6568__auto__);};
summary.cljs$lang$maxFixedArity = 0;
summary.cljs$lang$applyTo = (function (arglist__10563){
var args__6568__auto__ = cljs.core.seq(arglist__10563);
return summary__delegate(args__6568__auto__);
});
summary.cljs$core$IFn$_invoke$arity$variadic = summary__delegate;
return summary;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.sup = (function() { 
var sup__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__8322_10564 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__8323_10565 = null;var count__8324_10566 = 0;var i__8325_10567 = 0;while(true){
if((i__8325_10567 < count__8324_10566))
{var arg__6570__auto___10568 = cljs.core._nth.call(null,chunk__8323_10565,i__8325_10567);a__6569__auto__.push(arg__6570__auto___10568);
{
var G__10569 = seq__8322_10564;
var G__10570 = chunk__8323_10565;
var G__10571 = count__8324_10566;
var G__10572 = (i__8325_10567 + 1);
seq__8322_10564 = G__10569;
chunk__8323_10565 = G__10570;
count__8324_10566 = G__10571;
i__8325_10567 = G__10572;
continue;
}
} else
{var temp__4092__auto___10573 = cljs.core.seq.call(null,seq__8322_10564);if(temp__4092__auto___10573)
{var seq__8322_10574__$1 = temp__4092__auto___10573;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8322_10574__$1))
{var c__5632__auto___10575 = cljs.core.chunk_first.call(null,seq__8322_10574__$1);{
var G__10576 = cljs.core.chunk_rest.call(null,seq__8322_10574__$1);
var G__10577 = c__5632__auto___10575;
var G__10578 = cljs.core.count.call(null,c__5632__auto___10575);
var G__10579 = 0;
seq__8322_10564 = G__10576;
chunk__8323_10565 = G__10577;
count__8324_10566 = G__10578;
i__8325_10567 = G__10579;
continue;
}
} else
{var arg__6570__auto___10580 = cljs.core.first.call(null,seq__8322_10574__$1);a__6569__auto__.push(arg__6570__auto___10580);
{
var G__10581 = cljs.core.next.call(null,seq__8322_10574__$1);
var G__10582 = null;
var G__10583 = 0;
var G__10584 = 0;
seq__8322_10564 = G__10581;
chunk__8323_10565 = G__10582;
count__8324_10566 = G__10583;
i__8325_10567 = G__10584;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.sup.apply(null,a__6569__auto__);
};
var sup = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return sup__delegate.call(this,args__6568__auto__);};
sup.cljs$lang$maxFixedArity = 0;
sup.cljs$lang$applyTo = (function (arglist__10585){
var args__6568__auto__ = cljs.core.seq(arglist__10585);
return sup__delegate(args__6568__auto__);
});
sup.cljs$core$IFn$_invoke$arity$variadic = sup__delegate;
return sup;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.table = (function() { 
var table__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__8330_10586 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__8331_10587 = null;var count__8332_10588 = 0;var i__8333_10589 = 0;while(true){
if((i__8333_10589 < count__8332_10588))
{var arg__6570__auto___10590 = cljs.core._nth.call(null,chunk__8331_10587,i__8333_10589);a__6569__auto__.push(arg__6570__auto___10590);
{
var G__10591 = seq__8330_10586;
var G__10592 = chunk__8331_10587;
var G__10593 = count__8332_10588;
var G__10594 = (i__8333_10589 + 1);
seq__8330_10586 = G__10591;
chunk__8331_10587 = G__10592;
count__8332_10588 = G__10593;
i__8333_10589 = G__10594;
continue;
}
} else
{var temp__4092__auto___10595 = cljs.core.seq.call(null,seq__8330_10586);if(temp__4092__auto___10595)
{var seq__8330_10596__$1 = temp__4092__auto___10595;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8330_10596__$1))
{var c__5632__auto___10597 = cljs.core.chunk_first.call(null,seq__8330_10596__$1);{
var G__10598 = cljs.core.chunk_rest.call(null,seq__8330_10596__$1);
var G__10599 = c__5632__auto___10597;
var G__10600 = cljs.core.count.call(null,c__5632__auto___10597);
var G__10601 = 0;
seq__8330_10586 = G__10598;
chunk__8331_10587 = G__10599;
count__8332_10588 = G__10600;
i__8333_10589 = G__10601;
continue;
}
} else
{var arg__6570__auto___10602 = cljs.core.first.call(null,seq__8330_10596__$1);a__6569__auto__.push(arg__6570__auto___10602);
{
var G__10603 = cljs.core.next.call(null,seq__8330_10596__$1);
var G__10604 = null;
var G__10605 = 0;
var G__10606 = 0;
seq__8330_10586 = G__10603;
chunk__8331_10587 = G__10604;
count__8332_10588 = G__10605;
i__8333_10589 = G__10606;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.table.apply(null,a__6569__auto__);
};
var table = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return table__delegate.call(this,args__6568__auto__);};
table.cljs$lang$maxFixedArity = 0;
table.cljs$lang$applyTo = (function (arglist__10607){
var args__6568__auto__ = cljs.core.seq(arglist__10607);
return table__delegate(args__6568__auto__);
});
table.cljs$core$IFn$_invoke$arity$variadic = table__delegate;
return table;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.tbody = (function() { 
var tbody__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__8338_10608 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__8339_10609 = null;var count__8340_10610 = 0;var i__8341_10611 = 0;while(true){
if((i__8341_10611 < count__8340_10610))
{var arg__6570__auto___10612 = cljs.core._nth.call(null,chunk__8339_10609,i__8341_10611);a__6569__auto__.push(arg__6570__auto___10612);
{
var G__10613 = seq__8338_10608;
var G__10614 = chunk__8339_10609;
var G__10615 = count__8340_10610;
var G__10616 = (i__8341_10611 + 1);
seq__8338_10608 = G__10613;
chunk__8339_10609 = G__10614;
count__8340_10610 = G__10615;
i__8341_10611 = G__10616;
continue;
}
} else
{var temp__4092__auto___10617 = cljs.core.seq.call(null,seq__8338_10608);if(temp__4092__auto___10617)
{var seq__8338_10618__$1 = temp__4092__auto___10617;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8338_10618__$1))
{var c__5632__auto___10619 = cljs.core.chunk_first.call(null,seq__8338_10618__$1);{
var G__10620 = cljs.core.chunk_rest.call(null,seq__8338_10618__$1);
var G__10621 = c__5632__auto___10619;
var G__10622 = cljs.core.count.call(null,c__5632__auto___10619);
var G__10623 = 0;
seq__8338_10608 = G__10620;
chunk__8339_10609 = G__10621;
count__8340_10610 = G__10622;
i__8341_10611 = G__10623;
continue;
}
} else
{var arg__6570__auto___10624 = cljs.core.first.call(null,seq__8338_10618__$1);a__6569__auto__.push(arg__6570__auto___10624);
{
var G__10625 = cljs.core.next.call(null,seq__8338_10618__$1);
var G__10626 = null;
var G__10627 = 0;
var G__10628 = 0;
seq__8338_10608 = G__10625;
chunk__8339_10609 = G__10626;
count__8340_10610 = G__10627;
i__8341_10611 = G__10628;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.tbody.apply(null,a__6569__auto__);
};
var tbody = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return tbody__delegate.call(this,args__6568__auto__);};
tbody.cljs$lang$maxFixedArity = 0;
tbody.cljs$lang$applyTo = (function (arglist__10629){
var args__6568__auto__ = cljs.core.seq(arglist__10629);
return tbody__delegate(args__6568__auto__);
});
tbody.cljs$core$IFn$_invoke$arity$variadic = tbody__delegate;
return tbody;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.td = (function() { 
var td__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__8346_10630 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__8347_10631 = null;var count__8348_10632 = 0;var i__8349_10633 = 0;while(true){
if((i__8349_10633 < count__8348_10632))
{var arg__6570__auto___10634 = cljs.core._nth.call(null,chunk__8347_10631,i__8349_10633);a__6569__auto__.push(arg__6570__auto___10634);
{
var G__10635 = seq__8346_10630;
var G__10636 = chunk__8347_10631;
var G__10637 = count__8348_10632;
var G__10638 = (i__8349_10633 + 1);
seq__8346_10630 = G__10635;
chunk__8347_10631 = G__10636;
count__8348_10632 = G__10637;
i__8349_10633 = G__10638;
continue;
}
} else
{var temp__4092__auto___10639 = cljs.core.seq.call(null,seq__8346_10630);if(temp__4092__auto___10639)
{var seq__8346_10640__$1 = temp__4092__auto___10639;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8346_10640__$1))
{var c__5632__auto___10641 = cljs.core.chunk_first.call(null,seq__8346_10640__$1);{
var G__10642 = cljs.core.chunk_rest.call(null,seq__8346_10640__$1);
var G__10643 = c__5632__auto___10641;
var G__10644 = cljs.core.count.call(null,c__5632__auto___10641);
var G__10645 = 0;
seq__8346_10630 = G__10642;
chunk__8347_10631 = G__10643;
count__8348_10632 = G__10644;
i__8349_10633 = G__10645;
continue;
}
} else
{var arg__6570__auto___10646 = cljs.core.first.call(null,seq__8346_10640__$1);a__6569__auto__.push(arg__6570__auto___10646);
{
var G__10647 = cljs.core.next.call(null,seq__8346_10640__$1);
var G__10648 = null;
var G__10649 = 0;
var G__10650 = 0;
seq__8346_10630 = G__10647;
chunk__8347_10631 = G__10648;
count__8348_10632 = G__10649;
i__8349_10633 = G__10650;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.td.apply(null,a__6569__auto__);
};
var td = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return td__delegate.call(this,args__6568__auto__);};
td.cljs$lang$maxFixedArity = 0;
td.cljs$lang$applyTo = (function (arglist__10651){
var args__6568__auto__ = cljs.core.seq(arglist__10651);
return td__delegate(args__6568__auto__);
});
td.cljs$core$IFn$_invoke$arity$variadic = td__delegate;
return td;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.textarea = (function() { 
var textarea__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__8354_10652 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__8355_10653 = null;var count__8356_10654 = 0;var i__8357_10655 = 0;while(true){
if((i__8357_10655 < count__8356_10654))
{var arg__6570__auto___10656 = cljs.core._nth.call(null,chunk__8355_10653,i__8357_10655);a__6569__auto__.push(arg__6570__auto___10656);
{
var G__10657 = seq__8354_10652;
var G__10658 = chunk__8355_10653;
var G__10659 = count__8356_10654;
var G__10660 = (i__8357_10655 + 1);
seq__8354_10652 = G__10657;
chunk__8355_10653 = G__10658;
count__8356_10654 = G__10659;
i__8357_10655 = G__10660;
continue;
}
} else
{var temp__4092__auto___10661 = cljs.core.seq.call(null,seq__8354_10652);if(temp__4092__auto___10661)
{var seq__8354_10662__$1 = temp__4092__auto___10661;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8354_10662__$1))
{var c__5632__auto___10663 = cljs.core.chunk_first.call(null,seq__8354_10662__$1);{
var G__10664 = cljs.core.chunk_rest.call(null,seq__8354_10662__$1);
var G__10665 = c__5632__auto___10663;
var G__10666 = cljs.core.count.call(null,c__5632__auto___10663);
var G__10667 = 0;
seq__8354_10652 = G__10664;
chunk__8355_10653 = G__10665;
count__8356_10654 = G__10666;
i__8357_10655 = G__10667;
continue;
}
} else
{var arg__6570__auto___10668 = cljs.core.first.call(null,seq__8354_10662__$1);a__6569__auto__.push(arg__6570__auto___10668);
{
var G__10669 = cljs.core.next.call(null,seq__8354_10662__$1);
var G__10670 = null;
var G__10671 = 0;
var G__10672 = 0;
seq__8354_10652 = G__10669;
chunk__8355_10653 = G__10670;
count__8356_10654 = G__10671;
i__8357_10655 = G__10672;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.textarea.apply(null,a__6569__auto__);
};
var textarea = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return textarea__delegate.call(this,args__6568__auto__);};
textarea.cljs$lang$maxFixedArity = 0;
textarea.cljs$lang$applyTo = (function (arglist__10673){
var args__6568__auto__ = cljs.core.seq(arglist__10673);
return textarea__delegate(args__6568__auto__);
});
textarea.cljs$core$IFn$_invoke$arity$variadic = textarea__delegate;
return textarea;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.tfoot = (function() { 
var tfoot__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__8362_10674 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__8363_10675 = null;var count__8364_10676 = 0;var i__8365_10677 = 0;while(true){
if((i__8365_10677 < count__8364_10676))
{var arg__6570__auto___10678 = cljs.core._nth.call(null,chunk__8363_10675,i__8365_10677);a__6569__auto__.push(arg__6570__auto___10678);
{
var G__10679 = seq__8362_10674;
var G__10680 = chunk__8363_10675;
var G__10681 = count__8364_10676;
var G__10682 = (i__8365_10677 + 1);
seq__8362_10674 = G__10679;
chunk__8363_10675 = G__10680;
count__8364_10676 = G__10681;
i__8365_10677 = G__10682;
continue;
}
} else
{var temp__4092__auto___10683 = cljs.core.seq.call(null,seq__8362_10674);if(temp__4092__auto___10683)
{var seq__8362_10684__$1 = temp__4092__auto___10683;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8362_10684__$1))
{var c__5632__auto___10685 = cljs.core.chunk_first.call(null,seq__8362_10684__$1);{
var G__10686 = cljs.core.chunk_rest.call(null,seq__8362_10684__$1);
var G__10687 = c__5632__auto___10685;
var G__10688 = cljs.core.count.call(null,c__5632__auto___10685);
var G__10689 = 0;
seq__8362_10674 = G__10686;
chunk__8363_10675 = G__10687;
count__8364_10676 = G__10688;
i__8365_10677 = G__10689;
continue;
}
} else
{var arg__6570__auto___10690 = cljs.core.first.call(null,seq__8362_10684__$1);a__6569__auto__.push(arg__6570__auto___10690);
{
var G__10691 = cljs.core.next.call(null,seq__8362_10684__$1);
var G__10692 = null;
var G__10693 = 0;
var G__10694 = 0;
seq__8362_10674 = G__10691;
chunk__8363_10675 = G__10692;
count__8364_10676 = G__10693;
i__8365_10677 = G__10694;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.tfoot.apply(null,a__6569__auto__);
};
var tfoot = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return tfoot__delegate.call(this,args__6568__auto__);};
tfoot.cljs$lang$maxFixedArity = 0;
tfoot.cljs$lang$applyTo = (function (arglist__10695){
var args__6568__auto__ = cljs.core.seq(arglist__10695);
return tfoot__delegate(args__6568__auto__);
});
tfoot.cljs$core$IFn$_invoke$arity$variadic = tfoot__delegate;
return tfoot;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.th = (function() { 
var th__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__8370_10696 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__8371_10697 = null;var count__8372_10698 = 0;var i__8373_10699 = 0;while(true){
if((i__8373_10699 < count__8372_10698))
{var arg__6570__auto___10700 = cljs.core._nth.call(null,chunk__8371_10697,i__8373_10699);a__6569__auto__.push(arg__6570__auto___10700);
{
var G__10701 = seq__8370_10696;
var G__10702 = chunk__8371_10697;
var G__10703 = count__8372_10698;
var G__10704 = (i__8373_10699 + 1);
seq__8370_10696 = G__10701;
chunk__8371_10697 = G__10702;
count__8372_10698 = G__10703;
i__8373_10699 = G__10704;
continue;
}
} else
{var temp__4092__auto___10705 = cljs.core.seq.call(null,seq__8370_10696);if(temp__4092__auto___10705)
{var seq__8370_10706__$1 = temp__4092__auto___10705;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8370_10706__$1))
{var c__5632__auto___10707 = cljs.core.chunk_first.call(null,seq__8370_10706__$1);{
var G__10708 = cljs.core.chunk_rest.call(null,seq__8370_10706__$1);
var G__10709 = c__5632__auto___10707;
var G__10710 = cljs.core.count.call(null,c__5632__auto___10707);
var G__10711 = 0;
seq__8370_10696 = G__10708;
chunk__8371_10697 = G__10709;
count__8372_10698 = G__10710;
i__8373_10699 = G__10711;
continue;
}
} else
{var arg__6570__auto___10712 = cljs.core.first.call(null,seq__8370_10706__$1);a__6569__auto__.push(arg__6570__auto___10712);
{
var G__10713 = cljs.core.next.call(null,seq__8370_10706__$1);
var G__10714 = null;
var G__10715 = 0;
var G__10716 = 0;
seq__8370_10696 = G__10713;
chunk__8371_10697 = G__10714;
count__8372_10698 = G__10715;
i__8373_10699 = G__10716;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.th.apply(null,a__6569__auto__);
};
var th = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return th__delegate.call(this,args__6568__auto__);};
th.cljs$lang$maxFixedArity = 0;
th.cljs$lang$applyTo = (function (arglist__10717){
var args__6568__auto__ = cljs.core.seq(arglist__10717);
return th__delegate(args__6568__auto__);
});
th.cljs$core$IFn$_invoke$arity$variadic = th__delegate;
return th;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.thead = (function() { 
var thead__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__8378_10718 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__8379_10719 = null;var count__8380_10720 = 0;var i__8381_10721 = 0;while(true){
if((i__8381_10721 < count__8380_10720))
{var arg__6570__auto___10722 = cljs.core._nth.call(null,chunk__8379_10719,i__8381_10721);a__6569__auto__.push(arg__6570__auto___10722);
{
var G__10723 = seq__8378_10718;
var G__10724 = chunk__8379_10719;
var G__10725 = count__8380_10720;
var G__10726 = (i__8381_10721 + 1);
seq__8378_10718 = G__10723;
chunk__8379_10719 = G__10724;
count__8380_10720 = G__10725;
i__8381_10721 = G__10726;
continue;
}
} else
{var temp__4092__auto___10727 = cljs.core.seq.call(null,seq__8378_10718);if(temp__4092__auto___10727)
{var seq__8378_10728__$1 = temp__4092__auto___10727;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8378_10728__$1))
{var c__5632__auto___10729 = cljs.core.chunk_first.call(null,seq__8378_10728__$1);{
var G__10730 = cljs.core.chunk_rest.call(null,seq__8378_10728__$1);
var G__10731 = c__5632__auto___10729;
var G__10732 = cljs.core.count.call(null,c__5632__auto___10729);
var G__10733 = 0;
seq__8378_10718 = G__10730;
chunk__8379_10719 = G__10731;
count__8380_10720 = G__10732;
i__8381_10721 = G__10733;
continue;
}
} else
{var arg__6570__auto___10734 = cljs.core.first.call(null,seq__8378_10728__$1);a__6569__auto__.push(arg__6570__auto___10734);
{
var G__10735 = cljs.core.next.call(null,seq__8378_10728__$1);
var G__10736 = null;
var G__10737 = 0;
var G__10738 = 0;
seq__8378_10718 = G__10735;
chunk__8379_10719 = G__10736;
count__8380_10720 = G__10737;
i__8381_10721 = G__10738;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.thead.apply(null,a__6569__auto__);
};
var thead = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return thead__delegate.call(this,args__6568__auto__);};
thead.cljs$lang$maxFixedArity = 0;
thead.cljs$lang$applyTo = (function (arglist__10739){
var args__6568__auto__ = cljs.core.seq(arglist__10739);
return thead__delegate(args__6568__auto__);
});
thead.cljs$core$IFn$_invoke$arity$variadic = thead__delegate;
return thead;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.time = (function() { 
var time__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__8386_10740 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__8387_10741 = null;var count__8388_10742 = 0;var i__8389_10743 = 0;while(true){
if((i__8389_10743 < count__8388_10742))
{var arg__6570__auto___10744 = cljs.core._nth.call(null,chunk__8387_10741,i__8389_10743);a__6569__auto__.push(arg__6570__auto___10744);
{
var G__10745 = seq__8386_10740;
var G__10746 = chunk__8387_10741;
var G__10747 = count__8388_10742;
var G__10748 = (i__8389_10743 + 1);
seq__8386_10740 = G__10745;
chunk__8387_10741 = G__10746;
count__8388_10742 = G__10747;
i__8389_10743 = G__10748;
continue;
}
} else
{var temp__4092__auto___10749 = cljs.core.seq.call(null,seq__8386_10740);if(temp__4092__auto___10749)
{var seq__8386_10750__$1 = temp__4092__auto___10749;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8386_10750__$1))
{var c__5632__auto___10751 = cljs.core.chunk_first.call(null,seq__8386_10750__$1);{
var G__10752 = cljs.core.chunk_rest.call(null,seq__8386_10750__$1);
var G__10753 = c__5632__auto___10751;
var G__10754 = cljs.core.count.call(null,c__5632__auto___10751);
var G__10755 = 0;
seq__8386_10740 = G__10752;
chunk__8387_10741 = G__10753;
count__8388_10742 = G__10754;
i__8389_10743 = G__10755;
continue;
}
} else
{var arg__6570__auto___10756 = cljs.core.first.call(null,seq__8386_10750__$1);a__6569__auto__.push(arg__6570__auto___10756);
{
var G__10757 = cljs.core.next.call(null,seq__8386_10750__$1);
var G__10758 = null;
var G__10759 = 0;
var G__10760 = 0;
seq__8386_10740 = G__10757;
chunk__8387_10741 = G__10758;
count__8388_10742 = G__10759;
i__8389_10743 = G__10760;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.time.apply(null,a__6569__auto__);
};
var time = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return time__delegate.call(this,args__6568__auto__);};
time.cljs$lang$maxFixedArity = 0;
time.cljs$lang$applyTo = (function (arglist__10761){
var args__6568__auto__ = cljs.core.seq(arglist__10761);
return time__delegate(args__6568__auto__);
});
time.cljs$core$IFn$_invoke$arity$variadic = time__delegate;
return time;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.title = (function() { 
var title__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__8394_10762 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__8395_10763 = null;var count__8396_10764 = 0;var i__8397_10765 = 0;while(true){
if((i__8397_10765 < count__8396_10764))
{var arg__6570__auto___10766 = cljs.core._nth.call(null,chunk__8395_10763,i__8397_10765);a__6569__auto__.push(arg__6570__auto___10766);
{
var G__10767 = seq__8394_10762;
var G__10768 = chunk__8395_10763;
var G__10769 = count__8396_10764;
var G__10770 = (i__8397_10765 + 1);
seq__8394_10762 = G__10767;
chunk__8395_10763 = G__10768;
count__8396_10764 = G__10769;
i__8397_10765 = G__10770;
continue;
}
} else
{var temp__4092__auto___10771 = cljs.core.seq.call(null,seq__8394_10762);if(temp__4092__auto___10771)
{var seq__8394_10772__$1 = temp__4092__auto___10771;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8394_10772__$1))
{var c__5632__auto___10773 = cljs.core.chunk_first.call(null,seq__8394_10772__$1);{
var G__10774 = cljs.core.chunk_rest.call(null,seq__8394_10772__$1);
var G__10775 = c__5632__auto___10773;
var G__10776 = cljs.core.count.call(null,c__5632__auto___10773);
var G__10777 = 0;
seq__8394_10762 = G__10774;
chunk__8395_10763 = G__10775;
count__8396_10764 = G__10776;
i__8397_10765 = G__10777;
continue;
}
} else
{var arg__6570__auto___10778 = cljs.core.first.call(null,seq__8394_10772__$1);a__6569__auto__.push(arg__6570__auto___10778);
{
var G__10779 = cljs.core.next.call(null,seq__8394_10772__$1);
var G__10780 = null;
var G__10781 = 0;
var G__10782 = 0;
seq__8394_10762 = G__10779;
chunk__8395_10763 = G__10780;
count__8396_10764 = G__10781;
i__8397_10765 = G__10782;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.title.apply(null,a__6569__auto__);
};
var title = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return title__delegate.call(this,args__6568__auto__);};
title.cljs$lang$maxFixedArity = 0;
title.cljs$lang$applyTo = (function (arglist__10783){
var args__6568__auto__ = cljs.core.seq(arglist__10783);
return title__delegate(args__6568__auto__);
});
title.cljs$core$IFn$_invoke$arity$variadic = title__delegate;
return title;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.tr = (function() { 
var tr__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__8402_10784 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__8403_10785 = null;var count__8404_10786 = 0;var i__8405_10787 = 0;while(true){
if((i__8405_10787 < count__8404_10786))
{var arg__6570__auto___10788 = cljs.core._nth.call(null,chunk__8403_10785,i__8405_10787);a__6569__auto__.push(arg__6570__auto___10788);
{
var G__10789 = seq__8402_10784;
var G__10790 = chunk__8403_10785;
var G__10791 = count__8404_10786;
var G__10792 = (i__8405_10787 + 1);
seq__8402_10784 = G__10789;
chunk__8403_10785 = G__10790;
count__8404_10786 = G__10791;
i__8405_10787 = G__10792;
continue;
}
} else
{var temp__4092__auto___10793 = cljs.core.seq.call(null,seq__8402_10784);if(temp__4092__auto___10793)
{var seq__8402_10794__$1 = temp__4092__auto___10793;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8402_10794__$1))
{var c__5632__auto___10795 = cljs.core.chunk_first.call(null,seq__8402_10794__$1);{
var G__10796 = cljs.core.chunk_rest.call(null,seq__8402_10794__$1);
var G__10797 = c__5632__auto___10795;
var G__10798 = cljs.core.count.call(null,c__5632__auto___10795);
var G__10799 = 0;
seq__8402_10784 = G__10796;
chunk__8403_10785 = G__10797;
count__8404_10786 = G__10798;
i__8405_10787 = G__10799;
continue;
}
} else
{var arg__6570__auto___10800 = cljs.core.first.call(null,seq__8402_10794__$1);a__6569__auto__.push(arg__6570__auto___10800);
{
var G__10801 = cljs.core.next.call(null,seq__8402_10794__$1);
var G__10802 = null;
var G__10803 = 0;
var G__10804 = 0;
seq__8402_10784 = G__10801;
chunk__8403_10785 = G__10802;
count__8404_10786 = G__10803;
i__8405_10787 = G__10804;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.tr.apply(null,a__6569__auto__);
};
var tr = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return tr__delegate.call(this,args__6568__auto__);};
tr.cljs$lang$maxFixedArity = 0;
tr.cljs$lang$applyTo = (function (arglist__10805){
var args__6568__auto__ = cljs.core.seq(arglist__10805);
return tr__delegate(args__6568__auto__);
});
tr.cljs$core$IFn$_invoke$arity$variadic = tr__delegate;
return tr;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.track = (function() { 
var track__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__8410_10806 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__8411_10807 = null;var count__8412_10808 = 0;var i__8413_10809 = 0;while(true){
if((i__8413_10809 < count__8412_10808))
{var arg__6570__auto___10810 = cljs.core._nth.call(null,chunk__8411_10807,i__8413_10809);a__6569__auto__.push(arg__6570__auto___10810);
{
var G__10811 = seq__8410_10806;
var G__10812 = chunk__8411_10807;
var G__10813 = count__8412_10808;
var G__10814 = (i__8413_10809 + 1);
seq__8410_10806 = G__10811;
chunk__8411_10807 = G__10812;
count__8412_10808 = G__10813;
i__8413_10809 = G__10814;
continue;
}
} else
{var temp__4092__auto___10815 = cljs.core.seq.call(null,seq__8410_10806);if(temp__4092__auto___10815)
{var seq__8410_10816__$1 = temp__4092__auto___10815;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8410_10816__$1))
{var c__5632__auto___10817 = cljs.core.chunk_first.call(null,seq__8410_10816__$1);{
var G__10818 = cljs.core.chunk_rest.call(null,seq__8410_10816__$1);
var G__10819 = c__5632__auto___10817;
var G__10820 = cljs.core.count.call(null,c__5632__auto___10817);
var G__10821 = 0;
seq__8410_10806 = G__10818;
chunk__8411_10807 = G__10819;
count__8412_10808 = G__10820;
i__8413_10809 = G__10821;
continue;
}
} else
{var arg__6570__auto___10822 = cljs.core.first.call(null,seq__8410_10816__$1);a__6569__auto__.push(arg__6570__auto___10822);
{
var G__10823 = cljs.core.next.call(null,seq__8410_10816__$1);
var G__10824 = null;
var G__10825 = 0;
var G__10826 = 0;
seq__8410_10806 = G__10823;
chunk__8411_10807 = G__10824;
count__8412_10808 = G__10825;
i__8413_10809 = G__10826;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.track.apply(null,a__6569__auto__);
};
var track = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return track__delegate.call(this,args__6568__auto__);};
track.cljs$lang$maxFixedArity = 0;
track.cljs$lang$applyTo = (function (arglist__10827){
var args__6568__auto__ = cljs.core.seq(arglist__10827);
return track__delegate(args__6568__auto__);
});
track.cljs$core$IFn$_invoke$arity$variadic = track__delegate;
return track;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.u = (function() { 
var u__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__8418_10828 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__8419_10829 = null;var count__8420_10830 = 0;var i__8421_10831 = 0;while(true){
if((i__8421_10831 < count__8420_10830))
{var arg__6570__auto___10832 = cljs.core._nth.call(null,chunk__8419_10829,i__8421_10831);a__6569__auto__.push(arg__6570__auto___10832);
{
var G__10833 = seq__8418_10828;
var G__10834 = chunk__8419_10829;
var G__10835 = count__8420_10830;
var G__10836 = (i__8421_10831 + 1);
seq__8418_10828 = G__10833;
chunk__8419_10829 = G__10834;
count__8420_10830 = G__10835;
i__8421_10831 = G__10836;
continue;
}
} else
{var temp__4092__auto___10837 = cljs.core.seq.call(null,seq__8418_10828);if(temp__4092__auto___10837)
{var seq__8418_10838__$1 = temp__4092__auto___10837;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8418_10838__$1))
{var c__5632__auto___10839 = cljs.core.chunk_first.call(null,seq__8418_10838__$1);{
var G__10840 = cljs.core.chunk_rest.call(null,seq__8418_10838__$1);
var G__10841 = c__5632__auto___10839;
var G__10842 = cljs.core.count.call(null,c__5632__auto___10839);
var G__10843 = 0;
seq__8418_10828 = G__10840;
chunk__8419_10829 = G__10841;
count__8420_10830 = G__10842;
i__8421_10831 = G__10843;
continue;
}
} else
{var arg__6570__auto___10844 = cljs.core.first.call(null,seq__8418_10838__$1);a__6569__auto__.push(arg__6570__auto___10844);
{
var G__10845 = cljs.core.next.call(null,seq__8418_10838__$1);
var G__10846 = null;
var G__10847 = 0;
var G__10848 = 0;
seq__8418_10828 = G__10845;
chunk__8419_10829 = G__10846;
count__8420_10830 = G__10847;
i__8421_10831 = G__10848;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.u.apply(null,a__6569__auto__);
};
var u = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return u__delegate.call(this,args__6568__auto__);};
u.cljs$lang$maxFixedArity = 0;
u.cljs$lang$applyTo = (function (arglist__10849){
var args__6568__auto__ = cljs.core.seq(arglist__10849);
return u__delegate(args__6568__auto__);
});
u.cljs$core$IFn$_invoke$arity$variadic = u__delegate;
return u;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.ul = (function() { 
var ul__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__8426_10850 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__8427_10851 = null;var count__8428_10852 = 0;var i__8429_10853 = 0;while(true){
if((i__8429_10853 < count__8428_10852))
{var arg__6570__auto___10854 = cljs.core._nth.call(null,chunk__8427_10851,i__8429_10853);a__6569__auto__.push(arg__6570__auto___10854);
{
var G__10855 = seq__8426_10850;
var G__10856 = chunk__8427_10851;
var G__10857 = count__8428_10852;
var G__10858 = (i__8429_10853 + 1);
seq__8426_10850 = G__10855;
chunk__8427_10851 = G__10856;
count__8428_10852 = G__10857;
i__8429_10853 = G__10858;
continue;
}
} else
{var temp__4092__auto___10859 = cljs.core.seq.call(null,seq__8426_10850);if(temp__4092__auto___10859)
{var seq__8426_10860__$1 = temp__4092__auto___10859;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8426_10860__$1))
{var c__5632__auto___10861 = cljs.core.chunk_first.call(null,seq__8426_10860__$1);{
var G__10862 = cljs.core.chunk_rest.call(null,seq__8426_10860__$1);
var G__10863 = c__5632__auto___10861;
var G__10864 = cljs.core.count.call(null,c__5632__auto___10861);
var G__10865 = 0;
seq__8426_10850 = G__10862;
chunk__8427_10851 = G__10863;
count__8428_10852 = G__10864;
i__8429_10853 = G__10865;
continue;
}
} else
{var arg__6570__auto___10866 = cljs.core.first.call(null,seq__8426_10860__$1);a__6569__auto__.push(arg__6570__auto___10866);
{
var G__10867 = cljs.core.next.call(null,seq__8426_10860__$1);
var G__10868 = null;
var G__10869 = 0;
var G__10870 = 0;
seq__8426_10850 = G__10867;
chunk__8427_10851 = G__10868;
count__8428_10852 = G__10869;
i__8429_10853 = G__10870;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.ul.apply(null,a__6569__auto__);
};
var ul = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ul__delegate.call(this,args__6568__auto__);};
ul.cljs$lang$maxFixedArity = 0;
ul.cljs$lang$applyTo = (function (arglist__10871){
var args__6568__auto__ = cljs.core.seq(arglist__10871);
return ul__delegate(args__6568__auto__);
});
ul.cljs$core$IFn$_invoke$arity$variadic = ul__delegate;
return ul;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.var$ = (function() { 
var var$__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__8434_10872 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__8435_10873 = null;var count__8436_10874 = 0;var i__8437_10875 = 0;while(true){
if((i__8437_10875 < count__8436_10874))
{var arg__6570__auto___10876 = cljs.core._nth.call(null,chunk__8435_10873,i__8437_10875);a__6569__auto__.push(arg__6570__auto___10876);
{
var G__10877 = seq__8434_10872;
var G__10878 = chunk__8435_10873;
var G__10879 = count__8436_10874;
var G__10880 = (i__8437_10875 + 1);
seq__8434_10872 = G__10877;
chunk__8435_10873 = G__10878;
count__8436_10874 = G__10879;
i__8437_10875 = G__10880;
continue;
}
} else
{var temp__4092__auto___10881 = cljs.core.seq.call(null,seq__8434_10872);if(temp__4092__auto___10881)
{var seq__8434_10882__$1 = temp__4092__auto___10881;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8434_10882__$1))
{var c__5632__auto___10883 = cljs.core.chunk_first.call(null,seq__8434_10882__$1);{
var G__10884 = cljs.core.chunk_rest.call(null,seq__8434_10882__$1);
var G__10885 = c__5632__auto___10883;
var G__10886 = cljs.core.count.call(null,c__5632__auto___10883);
var G__10887 = 0;
seq__8434_10872 = G__10884;
chunk__8435_10873 = G__10885;
count__8436_10874 = G__10886;
i__8437_10875 = G__10887;
continue;
}
} else
{var arg__6570__auto___10888 = cljs.core.first.call(null,seq__8434_10882__$1);a__6569__auto__.push(arg__6570__auto___10888);
{
var G__10889 = cljs.core.next.call(null,seq__8434_10882__$1);
var G__10890 = null;
var G__10891 = 0;
var G__10892 = 0;
seq__8434_10872 = G__10889;
chunk__8435_10873 = G__10890;
count__8436_10874 = G__10891;
i__8437_10875 = G__10892;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.var$.apply(null,a__6569__auto__);
};
var var$ = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return var$__delegate.call(this,args__6568__auto__);};
var$.cljs$lang$maxFixedArity = 0;
var$.cljs$lang$applyTo = (function (arglist__10893){
var args__6568__auto__ = cljs.core.seq(arglist__10893);
return var$__delegate(args__6568__auto__);
});
var$.cljs$core$IFn$_invoke$arity$variadic = var$__delegate;
return var$;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.video = (function() { 
var video__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__8442_10894 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__8443_10895 = null;var count__8444_10896 = 0;var i__8445_10897 = 0;while(true){
if((i__8445_10897 < count__8444_10896))
{var arg__6570__auto___10898 = cljs.core._nth.call(null,chunk__8443_10895,i__8445_10897);a__6569__auto__.push(arg__6570__auto___10898);
{
var G__10899 = seq__8442_10894;
var G__10900 = chunk__8443_10895;
var G__10901 = count__8444_10896;
var G__10902 = (i__8445_10897 + 1);
seq__8442_10894 = G__10899;
chunk__8443_10895 = G__10900;
count__8444_10896 = G__10901;
i__8445_10897 = G__10902;
continue;
}
} else
{var temp__4092__auto___10903 = cljs.core.seq.call(null,seq__8442_10894);if(temp__4092__auto___10903)
{var seq__8442_10904__$1 = temp__4092__auto___10903;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8442_10904__$1))
{var c__5632__auto___10905 = cljs.core.chunk_first.call(null,seq__8442_10904__$1);{
var G__10906 = cljs.core.chunk_rest.call(null,seq__8442_10904__$1);
var G__10907 = c__5632__auto___10905;
var G__10908 = cljs.core.count.call(null,c__5632__auto___10905);
var G__10909 = 0;
seq__8442_10894 = G__10906;
chunk__8443_10895 = G__10907;
count__8444_10896 = G__10908;
i__8445_10897 = G__10909;
continue;
}
} else
{var arg__6570__auto___10910 = cljs.core.first.call(null,seq__8442_10904__$1);a__6569__auto__.push(arg__6570__auto___10910);
{
var G__10911 = cljs.core.next.call(null,seq__8442_10904__$1);
var G__10912 = null;
var G__10913 = 0;
var G__10914 = 0;
seq__8442_10894 = G__10911;
chunk__8443_10895 = G__10912;
count__8444_10896 = G__10913;
i__8445_10897 = G__10914;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.video.apply(null,a__6569__auto__);
};
var video = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return video__delegate.call(this,args__6568__auto__);};
video.cljs$lang$maxFixedArity = 0;
video.cljs$lang$applyTo = (function (arglist__10915){
var args__6568__auto__ = cljs.core.seq(arglist__10915);
return video__delegate(args__6568__auto__);
});
video.cljs$core$IFn$_invoke$arity$variadic = video__delegate;
return video;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.wbr = (function() { 
var wbr__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__8450_10916 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__8451_10917 = null;var count__8452_10918 = 0;var i__8453_10919 = 0;while(true){
if((i__8453_10919 < count__8452_10918))
{var arg__6570__auto___10920 = cljs.core._nth.call(null,chunk__8451_10917,i__8453_10919);a__6569__auto__.push(arg__6570__auto___10920);
{
var G__10921 = seq__8450_10916;
var G__10922 = chunk__8451_10917;
var G__10923 = count__8452_10918;
var G__10924 = (i__8453_10919 + 1);
seq__8450_10916 = G__10921;
chunk__8451_10917 = G__10922;
count__8452_10918 = G__10923;
i__8453_10919 = G__10924;
continue;
}
} else
{var temp__4092__auto___10925 = cljs.core.seq.call(null,seq__8450_10916);if(temp__4092__auto___10925)
{var seq__8450_10926__$1 = temp__4092__auto___10925;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8450_10926__$1))
{var c__5632__auto___10927 = cljs.core.chunk_first.call(null,seq__8450_10926__$1);{
var G__10928 = cljs.core.chunk_rest.call(null,seq__8450_10926__$1);
var G__10929 = c__5632__auto___10927;
var G__10930 = cljs.core.count.call(null,c__5632__auto___10927);
var G__10931 = 0;
seq__8450_10916 = G__10928;
chunk__8451_10917 = G__10929;
count__8452_10918 = G__10930;
i__8453_10919 = G__10931;
continue;
}
} else
{var arg__6570__auto___10932 = cljs.core.first.call(null,seq__8450_10926__$1);a__6569__auto__.push(arg__6570__auto___10932);
{
var G__10933 = cljs.core.next.call(null,seq__8450_10926__$1);
var G__10934 = null;
var G__10935 = 0;
var G__10936 = 0;
seq__8450_10916 = G__10933;
chunk__8451_10917 = G__10934;
count__8452_10918 = G__10935;
i__8453_10919 = G__10936;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.wbr.apply(null,a__6569__auto__);
};
var wbr = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return wbr__delegate.call(this,args__6568__auto__);};
wbr.cljs$lang$maxFixedArity = 0;
wbr.cljs$lang$applyTo = (function (arglist__10937){
var args__6568__auto__ = cljs.core.seq(arglist__10937);
return wbr__delegate(args__6568__auto__);
});
wbr.cljs$core$IFn$_invoke$arity$variadic = wbr__delegate;
return wbr;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.circle = (function() { 
var circle__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__8458_10938 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__8459_10939 = null;var count__8460_10940 = 0;var i__8461_10941 = 0;while(true){
if((i__8461_10941 < count__8460_10940))
{var arg__6570__auto___10942 = cljs.core._nth.call(null,chunk__8459_10939,i__8461_10941);a__6569__auto__.push(arg__6570__auto___10942);
{
var G__10943 = seq__8458_10938;
var G__10944 = chunk__8459_10939;
var G__10945 = count__8460_10940;
var G__10946 = (i__8461_10941 + 1);
seq__8458_10938 = G__10943;
chunk__8459_10939 = G__10944;
count__8460_10940 = G__10945;
i__8461_10941 = G__10946;
continue;
}
} else
{var temp__4092__auto___10947 = cljs.core.seq.call(null,seq__8458_10938);if(temp__4092__auto___10947)
{var seq__8458_10948__$1 = temp__4092__auto___10947;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8458_10948__$1))
{var c__5632__auto___10949 = cljs.core.chunk_first.call(null,seq__8458_10948__$1);{
var G__10950 = cljs.core.chunk_rest.call(null,seq__8458_10948__$1);
var G__10951 = c__5632__auto___10949;
var G__10952 = cljs.core.count.call(null,c__5632__auto___10949);
var G__10953 = 0;
seq__8458_10938 = G__10950;
chunk__8459_10939 = G__10951;
count__8460_10940 = G__10952;
i__8461_10941 = G__10953;
continue;
}
} else
{var arg__6570__auto___10954 = cljs.core.first.call(null,seq__8458_10948__$1);a__6569__auto__.push(arg__6570__auto___10954);
{
var G__10955 = cljs.core.next.call(null,seq__8458_10948__$1);
var G__10956 = null;
var G__10957 = 0;
var G__10958 = 0;
seq__8458_10938 = G__10955;
chunk__8459_10939 = G__10956;
count__8460_10940 = G__10957;
i__8461_10941 = G__10958;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.circle.apply(null,a__6569__auto__);
};
var circle = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return circle__delegate.call(this,args__6568__auto__);};
circle.cljs$lang$maxFixedArity = 0;
circle.cljs$lang$applyTo = (function (arglist__10959){
var args__6568__auto__ = cljs.core.seq(arglist__10959);
return circle__delegate(args__6568__auto__);
});
circle.cljs$core$IFn$_invoke$arity$variadic = circle__delegate;
return circle;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.g = (function() { 
var g__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__8466_10960 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__8467_10961 = null;var count__8468_10962 = 0;var i__8469_10963 = 0;while(true){
if((i__8469_10963 < count__8468_10962))
{var arg__6570__auto___10964 = cljs.core._nth.call(null,chunk__8467_10961,i__8469_10963);a__6569__auto__.push(arg__6570__auto___10964);
{
var G__10965 = seq__8466_10960;
var G__10966 = chunk__8467_10961;
var G__10967 = count__8468_10962;
var G__10968 = (i__8469_10963 + 1);
seq__8466_10960 = G__10965;
chunk__8467_10961 = G__10966;
count__8468_10962 = G__10967;
i__8469_10963 = G__10968;
continue;
}
} else
{var temp__4092__auto___10969 = cljs.core.seq.call(null,seq__8466_10960);if(temp__4092__auto___10969)
{var seq__8466_10970__$1 = temp__4092__auto___10969;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8466_10970__$1))
{var c__5632__auto___10971 = cljs.core.chunk_first.call(null,seq__8466_10970__$1);{
var G__10972 = cljs.core.chunk_rest.call(null,seq__8466_10970__$1);
var G__10973 = c__5632__auto___10971;
var G__10974 = cljs.core.count.call(null,c__5632__auto___10971);
var G__10975 = 0;
seq__8466_10960 = G__10972;
chunk__8467_10961 = G__10973;
count__8468_10962 = G__10974;
i__8469_10963 = G__10975;
continue;
}
} else
{var arg__6570__auto___10976 = cljs.core.first.call(null,seq__8466_10970__$1);a__6569__auto__.push(arg__6570__auto___10976);
{
var G__10977 = cljs.core.next.call(null,seq__8466_10970__$1);
var G__10978 = null;
var G__10979 = 0;
var G__10980 = 0;
seq__8466_10960 = G__10977;
chunk__8467_10961 = G__10978;
count__8468_10962 = G__10979;
i__8469_10963 = G__10980;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.g.apply(null,a__6569__auto__);
};
var g = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return g__delegate.call(this,args__6568__auto__);};
g.cljs$lang$maxFixedArity = 0;
g.cljs$lang$applyTo = (function (arglist__10981){
var args__6568__auto__ = cljs.core.seq(arglist__10981);
return g__delegate(args__6568__auto__);
});
g.cljs$core$IFn$_invoke$arity$variadic = g__delegate;
return g;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.line = (function() { 
var line__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__8474_10982 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__8475_10983 = null;var count__8476_10984 = 0;var i__8477_10985 = 0;while(true){
if((i__8477_10985 < count__8476_10984))
{var arg__6570__auto___10986 = cljs.core._nth.call(null,chunk__8475_10983,i__8477_10985);a__6569__auto__.push(arg__6570__auto___10986);
{
var G__10987 = seq__8474_10982;
var G__10988 = chunk__8475_10983;
var G__10989 = count__8476_10984;
var G__10990 = (i__8477_10985 + 1);
seq__8474_10982 = G__10987;
chunk__8475_10983 = G__10988;
count__8476_10984 = G__10989;
i__8477_10985 = G__10990;
continue;
}
} else
{var temp__4092__auto___10991 = cljs.core.seq.call(null,seq__8474_10982);if(temp__4092__auto___10991)
{var seq__8474_10992__$1 = temp__4092__auto___10991;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8474_10992__$1))
{var c__5632__auto___10993 = cljs.core.chunk_first.call(null,seq__8474_10992__$1);{
var G__10994 = cljs.core.chunk_rest.call(null,seq__8474_10992__$1);
var G__10995 = c__5632__auto___10993;
var G__10996 = cljs.core.count.call(null,c__5632__auto___10993);
var G__10997 = 0;
seq__8474_10982 = G__10994;
chunk__8475_10983 = G__10995;
count__8476_10984 = G__10996;
i__8477_10985 = G__10997;
continue;
}
} else
{var arg__6570__auto___10998 = cljs.core.first.call(null,seq__8474_10992__$1);a__6569__auto__.push(arg__6570__auto___10998);
{
var G__10999 = cljs.core.next.call(null,seq__8474_10992__$1);
var G__11000 = null;
var G__11001 = 0;
var G__11002 = 0;
seq__8474_10982 = G__10999;
chunk__8475_10983 = G__11000;
count__8476_10984 = G__11001;
i__8477_10985 = G__11002;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.line.apply(null,a__6569__auto__);
};
var line = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return line__delegate.call(this,args__6568__auto__);};
line.cljs$lang$maxFixedArity = 0;
line.cljs$lang$applyTo = (function (arglist__11003){
var args__6568__auto__ = cljs.core.seq(arglist__11003);
return line__delegate(args__6568__auto__);
});
line.cljs$core$IFn$_invoke$arity$variadic = line__delegate;
return line;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.path = (function() { 
var path__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__8482_11004 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__8483_11005 = null;var count__8484_11006 = 0;var i__8485_11007 = 0;while(true){
if((i__8485_11007 < count__8484_11006))
{var arg__6570__auto___11008 = cljs.core._nth.call(null,chunk__8483_11005,i__8485_11007);a__6569__auto__.push(arg__6570__auto___11008);
{
var G__11009 = seq__8482_11004;
var G__11010 = chunk__8483_11005;
var G__11011 = count__8484_11006;
var G__11012 = (i__8485_11007 + 1);
seq__8482_11004 = G__11009;
chunk__8483_11005 = G__11010;
count__8484_11006 = G__11011;
i__8485_11007 = G__11012;
continue;
}
} else
{var temp__4092__auto___11013 = cljs.core.seq.call(null,seq__8482_11004);if(temp__4092__auto___11013)
{var seq__8482_11014__$1 = temp__4092__auto___11013;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8482_11014__$1))
{var c__5632__auto___11015 = cljs.core.chunk_first.call(null,seq__8482_11014__$1);{
var G__11016 = cljs.core.chunk_rest.call(null,seq__8482_11014__$1);
var G__11017 = c__5632__auto___11015;
var G__11018 = cljs.core.count.call(null,c__5632__auto___11015);
var G__11019 = 0;
seq__8482_11004 = G__11016;
chunk__8483_11005 = G__11017;
count__8484_11006 = G__11018;
i__8485_11007 = G__11019;
continue;
}
} else
{var arg__6570__auto___11020 = cljs.core.first.call(null,seq__8482_11014__$1);a__6569__auto__.push(arg__6570__auto___11020);
{
var G__11021 = cljs.core.next.call(null,seq__8482_11014__$1);
var G__11022 = null;
var G__11023 = 0;
var G__11024 = 0;
seq__8482_11004 = G__11021;
chunk__8483_11005 = G__11022;
count__8484_11006 = G__11023;
i__8485_11007 = G__11024;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.path.apply(null,a__6569__auto__);
};
var path = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return path__delegate.call(this,args__6568__auto__);};
path.cljs$lang$maxFixedArity = 0;
path.cljs$lang$applyTo = (function (arglist__11025){
var args__6568__auto__ = cljs.core.seq(arglist__11025);
return path__delegate(args__6568__auto__);
});
path.cljs$core$IFn$_invoke$arity$variadic = path__delegate;
return path;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.polygon = (function() { 
var polygon__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__8490_11026 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__8491_11027 = null;var count__8492_11028 = 0;var i__8493_11029 = 0;while(true){
if((i__8493_11029 < count__8492_11028))
{var arg__6570__auto___11030 = cljs.core._nth.call(null,chunk__8491_11027,i__8493_11029);a__6569__auto__.push(arg__6570__auto___11030);
{
var G__11031 = seq__8490_11026;
var G__11032 = chunk__8491_11027;
var G__11033 = count__8492_11028;
var G__11034 = (i__8493_11029 + 1);
seq__8490_11026 = G__11031;
chunk__8491_11027 = G__11032;
count__8492_11028 = G__11033;
i__8493_11029 = G__11034;
continue;
}
} else
{var temp__4092__auto___11035 = cljs.core.seq.call(null,seq__8490_11026);if(temp__4092__auto___11035)
{var seq__8490_11036__$1 = temp__4092__auto___11035;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8490_11036__$1))
{var c__5632__auto___11037 = cljs.core.chunk_first.call(null,seq__8490_11036__$1);{
var G__11038 = cljs.core.chunk_rest.call(null,seq__8490_11036__$1);
var G__11039 = c__5632__auto___11037;
var G__11040 = cljs.core.count.call(null,c__5632__auto___11037);
var G__11041 = 0;
seq__8490_11026 = G__11038;
chunk__8491_11027 = G__11039;
count__8492_11028 = G__11040;
i__8493_11029 = G__11041;
continue;
}
} else
{var arg__6570__auto___11042 = cljs.core.first.call(null,seq__8490_11036__$1);a__6569__auto__.push(arg__6570__auto___11042);
{
var G__11043 = cljs.core.next.call(null,seq__8490_11036__$1);
var G__11044 = null;
var G__11045 = 0;
var G__11046 = 0;
seq__8490_11026 = G__11043;
chunk__8491_11027 = G__11044;
count__8492_11028 = G__11045;
i__8493_11029 = G__11046;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.polygon.apply(null,a__6569__auto__);
};
var polygon = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return polygon__delegate.call(this,args__6568__auto__);};
polygon.cljs$lang$maxFixedArity = 0;
polygon.cljs$lang$applyTo = (function (arglist__11047){
var args__6568__auto__ = cljs.core.seq(arglist__11047);
return polygon__delegate(args__6568__auto__);
});
polygon.cljs$core$IFn$_invoke$arity$variadic = polygon__delegate;
return polygon;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.polyline = (function() { 
var polyline__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__8498_11048 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__8499_11049 = null;var count__8500_11050 = 0;var i__8501_11051 = 0;while(true){
if((i__8501_11051 < count__8500_11050))
{var arg__6570__auto___11052 = cljs.core._nth.call(null,chunk__8499_11049,i__8501_11051);a__6569__auto__.push(arg__6570__auto___11052);
{
var G__11053 = seq__8498_11048;
var G__11054 = chunk__8499_11049;
var G__11055 = count__8500_11050;
var G__11056 = (i__8501_11051 + 1);
seq__8498_11048 = G__11053;
chunk__8499_11049 = G__11054;
count__8500_11050 = G__11055;
i__8501_11051 = G__11056;
continue;
}
} else
{var temp__4092__auto___11057 = cljs.core.seq.call(null,seq__8498_11048);if(temp__4092__auto___11057)
{var seq__8498_11058__$1 = temp__4092__auto___11057;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8498_11058__$1))
{var c__5632__auto___11059 = cljs.core.chunk_first.call(null,seq__8498_11058__$1);{
var G__11060 = cljs.core.chunk_rest.call(null,seq__8498_11058__$1);
var G__11061 = c__5632__auto___11059;
var G__11062 = cljs.core.count.call(null,c__5632__auto___11059);
var G__11063 = 0;
seq__8498_11048 = G__11060;
chunk__8499_11049 = G__11061;
count__8500_11050 = G__11062;
i__8501_11051 = G__11063;
continue;
}
} else
{var arg__6570__auto___11064 = cljs.core.first.call(null,seq__8498_11058__$1);a__6569__auto__.push(arg__6570__auto___11064);
{
var G__11065 = cljs.core.next.call(null,seq__8498_11058__$1);
var G__11066 = null;
var G__11067 = 0;
var G__11068 = 0;
seq__8498_11048 = G__11065;
chunk__8499_11049 = G__11066;
count__8500_11050 = G__11067;
i__8501_11051 = G__11068;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.polyline.apply(null,a__6569__auto__);
};
var polyline = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return polyline__delegate.call(this,args__6568__auto__);};
polyline.cljs$lang$maxFixedArity = 0;
polyline.cljs$lang$applyTo = (function (arglist__11069){
var args__6568__auto__ = cljs.core.seq(arglist__11069);
return polyline__delegate(args__6568__auto__);
});
polyline.cljs$core$IFn$_invoke$arity$variadic = polyline__delegate;
return polyline;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.rect = (function() { 
var rect__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__8506_11070 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__8507_11071 = null;var count__8508_11072 = 0;var i__8509_11073 = 0;while(true){
if((i__8509_11073 < count__8508_11072))
{var arg__6570__auto___11074 = cljs.core._nth.call(null,chunk__8507_11071,i__8509_11073);a__6569__auto__.push(arg__6570__auto___11074);
{
var G__11075 = seq__8506_11070;
var G__11076 = chunk__8507_11071;
var G__11077 = count__8508_11072;
var G__11078 = (i__8509_11073 + 1);
seq__8506_11070 = G__11075;
chunk__8507_11071 = G__11076;
count__8508_11072 = G__11077;
i__8509_11073 = G__11078;
continue;
}
} else
{var temp__4092__auto___11079 = cljs.core.seq.call(null,seq__8506_11070);if(temp__4092__auto___11079)
{var seq__8506_11080__$1 = temp__4092__auto___11079;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8506_11080__$1))
{var c__5632__auto___11081 = cljs.core.chunk_first.call(null,seq__8506_11080__$1);{
var G__11082 = cljs.core.chunk_rest.call(null,seq__8506_11080__$1);
var G__11083 = c__5632__auto___11081;
var G__11084 = cljs.core.count.call(null,c__5632__auto___11081);
var G__11085 = 0;
seq__8506_11070 = G__11082;
chunk__8507_11071 = G__11083;
count__8508_11072 = G__11084;
i__8509_11073 = G__11085;
continue;
}
} else
{var arg__6570__auto___11086 = cljs.core.first.call(null,seq__8506_11080__$1);a__6569__auto__.push(arg__6570__auto___11086);
{
var G__11087 = cljs.core.next.call(null,seq__8506_11080__$1);
var G__11088 = null;
var G__11089 = 0;
var G__11090 = 0;
seq__8506_11070 = G__11087;
chunk__8507_11071 = G__11088;
count__8508_11072 = G__11089;
i__8509_11073 = G__11090;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.rect.apply(null,a__6569__auto__);
};
var rect = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return rect__delegate.call(this,args__6568__auto__);};
rect.cljs$lang$maxFixedArity = 0;
rect.cljs$lang$applyTo = (function (arglist__11091){
var args__6568__auto__ = cljs.core.seq(arglist__11091);
return rect__delegate(args__6568__auto__);
});
rect.cljs$core$IFn$_invoke$arity$variadic = rect__delegate;
return rect;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.svg = (function() { 
var svg__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__8514_11092 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__8515_11093 = null;var count__8516_11094 = 0;var i__8517_11095 = 0;while(true){
if((i__8517_11095 < count__8516_11094))
{var arg__6570__auto___11096 = cljs.core._nth.call(null,chunk__8515_11093,i__8517_11095);a__6569__auto__.push(arg__6570__auto___11096);
{
var G__11097 = seq__8514_11092;
var G__11098 = chunk__8515_11093;
var G__11099 = count__8516_11094;
var G__11100 = (i__8517_11095 + 1);
seq__8514_11092 = G__11097;
chunk__8515_11093 = G__11098;
count__8516_11094 = G__11099;
i__8517_11095 = G__11100;
continue;
}
} else
{var temp__4092__auto___11101 = cljs.core.seq.call(null,seq__8514_11092);if(temp__4092__auto___11101)
{var seq__8514_11102__$1 = temp__4092__auto___11101;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8514_11102__$1))
{var c__5632__auto___11103 = cljs.core.chunk_first.call(null,seq__8514_11102__$1);{
var G__11104 = cljs.core.chunk_rest.call(null,seq__8514_11102__$1);
var G__11105 = c__5632__auto___11103;
var G__11106 = cljs.core.count.call(null,c__5632__auto___11103);
var G__11107 = 0;
seq__8514_11092 = G__11104;
chunk__8515_11093 = G__11105;
count__8516_11094 = G__11106;
i__8517_11095 = G__11107;
continue;
}
} else
{var arg__6570__auto___11108 = cljs.core.first.call(null,seq__8514_11102__$1);a__6569__auto__.push(arg__6570__auto___11108);
{
var G__11109 = cljs.core.next.call(null,seq__8514_11102__$1);
var G__11110 = null;
var G__11111 = 0;
var G__11112 = 0;
seq__8514_11092 = G__11109;
chunk__8515_11093 = G__11110;
count__8516_11094 = G__11111;
i__8517_11095 = G__11112;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.svg.apply(null,a__6569__auto__);
};
var svg = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return svg__delegate.call(this,args__6568__auto__);};
svg.cljs$lang$maxFixedArity = 0;
svg.cljs$lang$applyTo = (function (arglist__11113){
var args__6568__auto__ = cljs.core.seq(arglist__11113);
return svg__delegate(args__6568__auto__);
});
svg.cljs$core$IFn$_invoke$arity$variadic = svg__delegate;
return svg;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.text = (function() { 
var text__delegate = function (args__6568__auto__){var a__6569__auto__ = [];a__6569__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6568__auto__)));
var seq__7826_11114 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6568__auto__));var chunk__7827_11115 = null;var count__7828_11116 = 0;var i__7829_11117 = 0;while(true){
if((i__7829_11117 < count__7828_11116))
{var arg__6570__auto___11118 = cljs.core._nth.call(null,chunk__7827_11115,i__7829_11117);a__6569__auto__.push(arg__6570__auto___11118);
{
var G__11119 = seq__7826_11114;
var G__11120 = chunk__7827_11115;
var G__11121 = count__7828_11116;
var G__11122 = (i__7829_11117 + 1);
seq__7826_11114 = G__11119;
chunk__7827_11115 = G__11120;
count__7828_11116 = G__11121;
i__7829_11117 = G__11122;
continue;
}
} else
{var temp__4092__auto___11123 = cljs.core.seq.call(null,seq__7826_11114);if(temp__4092__auto___11123)
{var seq__7826_11124__$1 = temp__4092__auto___11123;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7826_11124__$1))
{var c__5632__auto___11125 = cljs.core.chunk_first.call(null,seq__7826_11124__$1);{
var G__11126 = cljs.core.chunk_rest.call(null,seq__7826_11124__$1);
var G__11127 = c__5632__auto___11125;
var G__11128 = cljs.core.count.call(null,c__5632__auto___11125);
var G__11129 = 0;
seq__7826_11114 = G__11126;
chunk__7827_11115 = G__11127;
count__7828_11116 = G__11128;
i__7829_11117 = G__11129;
continue;
}
} else
{var arg__6570__auto___11130 = cljs.core.first.call(null,seq__7826_11124__$1);a__6569__auto__.push(arg__6570__auto___11130);
{
var G__11131 = cljs.core.next.call(null,seq__7826_11124__$1);
var G__11132 = null;
var G__11133 = 0;
var G__11134 = 0;
seq__7826_11114 = G__11131;
chunk__7827_11115 = G__11132;
count__7828_11116 = G__11133;
i__7829_11117 = G__11134;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.text.apply(null,a__6569__auto__);
};
var text = function (var_args){
var args__6568__auto__ = null;if (arguments.length > 0) {
  args__6568__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return text__delegate.call(this,args__6568__auto__);};
text.cljs$lang$maxFixedArity = 0;
text.cljs$lang$applyTo = (function (arglist__11135){
var args__6568__auto__ = cljs.core.seq(arglist__11135);
return text__delegate(args__6568__auto__);
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
lt.plugins.elm_light.autocompleter.handle_keypress = (function handle_keypress(p__7544,ev){var map__7547 = p__7544;var map__7547__$1 = ((cljs.core.seq_QMARK_.call(null,map__7547))?cljs.core.apply.call(null,cljs.core.hash_map,map__7547):map__7547);var props = map__7547__$1;var on_cancel = cljs.core.get.call(null,map__7547__$1,new cljs.core.Keyword(null,"on-cancel","on-cancel",600765850));var on_select = cljs.core.get.call(null,map__7547__$1,new cljs.core.Keyword(null,"on-select","on-select",1062468636));var on_down = cljs.core.get.call(null,map__7547__$1,new cljs.core.Keyword(null,"on-down","on-down",3936419650));var on_up = cljs.core.get.call(null,map__7547__$1,new cljs.core.Keyword(null,"on-up","on-up",1119739067));var kk = ev.which;var G__7548 = kk;if(cljs.core._EQ_.call(null,27,G__7548))
{ev.preventDefault();
ev.target.value = "";
return on_cancel.call(null);
} else
{if(cljs.core._EQ_.call(null,13,G__7548))
{ev.preventDefault();
var temp__4092__auto___7564 = lt.plugins.elm_light.autocompleter.find_active.call(null,new cljs.core.Keyword(null,"items","items",1114430258).cljs$core$IFn$_invoke$arity$1(props));if(cljs.core.truth_(temp__4092__auto___7564))
{var active_7565 = temp__4092__auto___7564;ev.target.value = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(active_7565);
} else
{}
return on_select.call(null);
} else
{if(cljs.core._EQ_.call(null,40,G__7548))
{ev.preventDefault();
return on_down.call(null);
} else
{if(cljs.core._EQ_.call(null,38,G__7548))
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
return (function (p1__7549_SHARP_){return "autocomplete-dropdown-item row".concat((cljs.core.truth_(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(p1__7549_SHARP_))?" autocomplete-active":""));
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
lt.plugins.elm_light.autocompleter.Adder = quiescent.component.call(null,(function (p__7550){var map__7551 = p__7550;var map__7551__$1 = ((cljs.core.seq_QMARK_.call(null,map__7551))?cljs.core.apply.call(null,cljs.core.hash_map,map__7551):map__7551);var props = map__7551__$1;var disabled = cljs.core.get.call(null,map__7551__$1,new cljs.core.Keyword(null,"disabled","disabled",1284845038));var on_add_package = cljs.core.get.call(null,map__7551__$1,new cljs.core.Keyword(null,"on-add-package","on-add-package",3601701790));return quiescent.dom.button.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",1004015509),"btn",new cljs.core.Keyword(null,"disabled","disabled",1284845038),disabled,new cljs.core.Keyword(null,"onClick","onClick",3956969051),((function (map__7551,map__7551__$1,props,disabled,on_add_package){
return (function (){return on_add_package.call(null);
});})(map__7551,map__7551__$1,props,disabled,on_add_package))
], null),"Add package");
}));
/**
* 
*/
lt.plugins.elm_light.autocompleter.Versions = quiescent.component.call(null,(function (props){return cljs.core.apply.call(null,quiescent.dom.select,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",1004015509),"versions",new cljs.core.Keyword(null,"value","value",1125876963),new cljs.core.Keyword(null,"version","version",1365512266).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"onChange","onChange",2050678241),(function (p1__7552_SHARP_){return new cljs.core.Keyword(null,"on-change-version","on-change-version",822058203).cljs$core$IFn$_invoke$arity$1(props).call(null,p1__7552_SHARP_.target.value);
})], null),cljs.core.map.call(null,(function (p1__7553_SHARP_){return quiescent.dom.option.call(null,cljs.core.PersistentArrayMap.EMPTY,p1__7553_SHARP_);
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
clojure.walk.keywordize_keys = (function keywordize_keys(m){var f = (function (p__11696){var vec__11697 = p__11696;var k = cljs.core.nth.call(null,vec__11697,0,null);var v = cljs.core.nth.call(null,vec__11697,1,null);if(typeof k === 'string')
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
clojure.walk.stringify_keys = (function stringify_keys(m){var f = (function (p__11700){var vec__11701 = p__11700;var k = cljs.core.nth.call(null,vec__11701,0,null);var v = cljs.core.nth.call(null,vec__11701,1,null);if((k instanceof cljs.core.Keyword))
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
lt.plugins.elm_light.utils.find_symbol = (function find_symbol(ed,pos){var curr_tok = lt.objs.editor.__GT_token.call(null,ed,pos);var G__11724 = new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(curr_tok);if(cljs.core._EQ_.call(null,"variable-3",G__11724))
{return [cljs.core.str(find_symbol.call(null,ed,cljs.core.assoc.call(null,pos,new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(curr_tok)))),cljs.core.str(new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(curr_tok))].join('');
} else
{if(cljs.core._EQ_.call(null,"variable-2",G__11724))
{return [cljs.core.str(find_symbol.call(null,ed,cljs.core.assoc.call(null,pos,new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(curr_tok)))),cljs.core.str(new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(curr_tok))].join('');
} else
{if(cljs.core._EQ_.call(null,"variable",G__11724))
{return [cljs.core.str(find_symbol.call(null,ed,cljs.core.assoc.call(null,pos,new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(curr_tok)))),cljs.core.str(new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(curr_tok))].join('');
} else
{if(cljs.core._EQ_.call(null,"qualifier",G__11724))
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
return (function (p__11731){var vec__11732 = p__11731;var _ = cljs.core.nth.call(null,vec__11732,0,null);var vs = cljs.core.nth.call(null,vec__11732,1,null);return cljs.core.apply.call(null,cljs.core.merge,vs);
});})(pkg_json,deps_json))
,cljs.core.group_by.call(null,new cljs.core.Keyword(null,"package","package",4501809080),cljs.core.concat.call(null,cljs.core.mapv.call(null,((function (pkg_json,deps_json){
return (function (p__11733){var vec__11734 = p__11733;var k = cljs.core.nth.call(null,vec__11734,0,null);var v = cljs.core.nth.call(null,vec__11734,1,null);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"package","package",4501809080),lt.plugins.elm_light.utils.nskw__GT_name.call(null,k),new cljs.core.Keyword(null,"exact","exact",1110851185),v], null);
});})(pkg_json,deps_json))
,lt.plugins.elm_light.utils.parse_json_file.call(null,deps_json)),cljs.core.mapv.call(null,((function (pkg_json,deps_json){
return (function (p__11735){var vec__11736 = p__11735;var k = cljs.core.nth.call(null,vec__11736,0,null);var v = cljs.core.nth.call(null,vec__11736,1,null);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"package","package",4501809080),lt.plugins.elm_light.utils.nskw__GT_name.call(null,k),new cljs.core.Keyword(null,"range","range",1122184367),v], null);
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
lt.plugins.elm_light.graph.find_package_by_name = (function find_package_by_name(this$,name){return cljs.core.some.call(null,(function (p1__11301_SHARP_){if(cljs.core._EQ_.call(null,lt.plugins.elm_light.graph.lower.call(null,new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(p1__11301_SHARP_)),lt.plugins.elm_light.graph.lower.call(null,name)))
{return p1__11301_SHARP_;
} else
{return null;
}
}),new cljs.core.Keyword(null,"all-packages","all-packages",1123981067).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
});
lt.plugins.elm_light.graph.dependency_graph_ui = (function dependency_graph_ui(this$){var e__6289__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.graph","div.graph",2030351651),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dependency-graph","div.dependency-graph",3039800187),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg:svg","svg:svg",3472817088),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",1127031096),"650",new cljs.core.Keyword(null,"height","height",4087841945),"680"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg:g","svg:g",1123725379),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",2066570974),"translate(20,20)"], null)], null)], null)], null)], null));var seq__11308_11359 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__11309_11360 = null;var count__11310_11361 = 0;var i__11311_11362 = 0;while(true){
if((i__11311_11362 < count__11310_11361))
{var vec__11312_11363 = cljs.core._nth.call(null,chunk__11309_11360,i__11311_11362);var ev__6290__auto___11364 = cljs.core.nth.call(null,vec__11312_11363,0,null);var func__6291__auto___11365 = cljs.core.nth.call(null,vec__11312_11363,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___11364,func__6291__auto___11365);
{
var G__11366 = seq__11308_11359;
var G__11367 = chunk__11309_11360;
var G__11368 = count__11310_11361;
var G__11369 = (i__11311_11362 + 1);
seq__11308_11359 = G__11366;
chunk__11309_11360 = G__11367;
count__11310_11361 = G__11368;
i__11311_11362 = G__11369;
continue;
}
} else
{var temp__4092__auto___11370 = cljs.core.seq.call(null,seq__11308_11359);if(temp__4092__auto___11370)
{var seq__11308_11371__$1 = temp__4092__auto___11370;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11308_11371__$1))
{var c__5632__auto___11372 = cljs.core.chunk_first.call(null,seq__11308_11371__$1);{
var G__11373 = cljs.core.chunk_rest.call(null,seq__11308_11371__$1);
var G__11374 = c__5632__auto___11372;
var G__11375 = cljs.core.count.call(null,c__5632__auto___11372);
var G__11376 = 0;
seq__11308_11359 = G__11373;
chunk__11309_11360 = G__11374;
count__11310_11361 = G__11375;
i__11311_11362 = G__11376;
continue;
}
} else
{var vec__11313_11377 = cljs.core.first.call(null,seq__11308_11371__$1);var ev__6290__auto___11378 = cljs.core.nth.call(null,vec__11313_11377,0,null);var func__6291__auto___11379 = cljs.core.nth.call(null,vec__11313_11377,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___11378,func__6291__auto___11379);
{
var G__11380 = cljs.core.next.call(null,seq__11308_11371__$1);
var G__11381 = null;
var G__11382 = 0;
var G__11383 = 0;
seq__11308_11359 = G__11380;
chunk__11309_11360 = G__11381;
count__11310_11361 = G__11382;
i__11311_11362 = G__11383;
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
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.graph","dependency-graph","lt.plugins.elm-light.graph/dependency-graph",2371711049),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elm.graph.dependency","elm.graph.dependency",658564005)], null),new cljs.core.Keyword(null,"name","name",1017277949),"Dependency graph",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){lt.plugins.elm_light.utils.fetch_all_packages.call(null,(function (p1__11314_SHARP_){return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"all-packages","all-packages",1123981067),p1__11314_SHARP_], null));
}));
return lt.plugins.elm_light.graph.dependency_graph_ui.call(null,this$);
}));
lt.plugins.elm_light.graph.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___11384 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___11384))
{var ts_11385 = temp__4092__auto___11384;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_11385))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_11385);
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
lt.plugins.elm_light.graph.create_graph = (function create_graph(data){var g = (new lt.plugins.elm_light.graph.dagreD3.graphlib.Graph()).setGraph({});var seq__11323_11386 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"nodes","nodes",1118897699).cljs$core$IFn$_invoke$arity$1(data));var chunk__11324_11387 = null;var count__11325_11388 = 0;var i__11326_11389 = 0;while(true){
if((i__11326_11389 < count__11325_11388))
{var x_11390 = cljs.core._nth.call(null,chunk__11324_11387,i__11326_11389);g.setNode(lt.plugins.elm_light.graph.dep_id.call(null,x_11390),lt.plugins.elm_light.graph.node_label.call(null,x_11390));
{
var G__11391 = seq__11323_11386;
var G__11392 = chunk__11324_11387;
var G__11393 = count__11325_11388;
var G__11394 = (i__11326_11389 + 1);
seq__11323_11386 = G__11391;
chunk__11324_11387 = G__11392;
count__11325_11388 = G__11393;
i__11326_11389 = G__11394;
continue;
}
} else
{var temp__4092__auto___11395 = cljs.core.seq.call(null,seq__11323_11386);if(temp__4092__auto___11395)
{var seq__11323_11396__$1 = temp__4092__auto___11395;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11323_11396__$1))
{var c__5632__auto___11397 = cljs.core.chunk_first.call(null,seq__11323_11396__$1);{
var G__11398 = cljs.core.chunk_rest.call(null,seq__11323_11396__$1);
var G__11399 = c__5632__auto___11397;
var G__11400 = cljs.core.count.call(null,c__5632__auto___11397);
var G__11401 = 0;
seq__11323_11386 = G__11398;
chunk__11324_11387 = G__11399;
count__11325_11388 = G__11400;
i__11326_11389 = G__11401;
continue;
}
} else
{var x_11402 = cljs.core.first.call(null,seq__11323_11396__$1);g.setNode(lt.plugins.elm_light.graph.dep_id.call(null,x_11402),lt.plugins.elm_light.graph.node_label.call(null,x_11402));
{
var G__11403 = cljs.core.next.call(null,seq__11323_11396__$1);
var G__11404 = null;
var G__11405 = 0;
var G__11406 = 0;
seq__11323_11386 = G__11403;
chunk__11324_11387 = G__11404;
count__11325_11388 = G__11405;
i__11326_11389 = G__11406;
continue;
}
}
} else
{}
}
break;
}
var seq__11327_11407 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"edges","edges",1110261192).cljs$core$IFn$_invoke$arity$1(data));var chunk__11328_11408 = null;var count__11329_11409 = 0;var i__11330_11410 = 0;while(true){
if((i__11330_11410 < count__11329_11409))
{var x_11411 = cljs.core._nth.call(null,chunk__11328_11408,i__11330_11410);g.setEdge(new cljs.core.Keyword(null,"a","a",1013904339).cljs$core$IFn$_invoke$arity$1(x_11411),new cljs.core.Keyword(null,"b","b",1013904340).cljs$core$IFn$_invoke$arity$1(x_11411),{"style": (cljs.core.truth_(new cljs.core.Keyword(null,"transitive","transitive",3584713111).cljs$core$IFn$_invoke$arity$1(x_11411))?"stroke-dasharray: 5, 5;":null), "label": new cljs.core.Keyword(null,"label","label",1116631654).cljs$core$IFn$_invoke$arity$1(x_11411)});
{
var G__11412 = seq__11327_11407;
var G__11413 = chunk__11328_11408;
var G__11414 = count__11329_11409;
var G__11415 = (i__11330_11410 + 1);
seq__11327_11407 = G__11412;
chunk__11328_11408 = G__11413;
count__11329_11409 = G__11414;
i__11330_11410 = G__11415;
continue;
}
} else
{var temp__4092__auto___11416 = cljs.core.seq.call(null,seq__11327_11407);if(temp__4092__auto___11416)
{var seq__11327_11417__$1 = temp__4092__auto___11416;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11327_11417__$1))
{var c__5632__auto___11418 = cljs.core.chunk_first.call(null,seq__11327_11417__$1);{
var G__11419 = cljs.core.chunk_rest.call(null,seq__11327_11417__$1);
var G__11420 = c__5632__auto___11418;
var G__11421 = cljs.core.count.call(null,c__5632__auto___11418);
var G__11422 = 0;
seq__11327_11407 = G__11419;
chunk__11328_11408 = G__11420;
count__11329_11409 = G__11421;
i__11330_11410 = G__11422;
continue;
}
} else
{var x_11423 = cljs.core.first.call(null,seq__11327_11417__$1);g.setEdge(new cljs.core.Keyword(null,"a","a",1013904339).cljs$core$IFn$_invoke$arity$1(x_11423),new cljs.core.Keyword(null,"b","b",1013904340).cljs$core$IFn$_invoke$arity$1(x_11423),{"style": (cljs.core.truth_(new cljs.core.Keyword(null,"transitive","transitive",3584713111).cljs$core$IFn$_invoke$arity$1(x_11423))?"stroke-dasharray: 5, 5;":null), "label": new cljs.core.Keyword(null,"label","label",1116631654).cljs$core$IFn$_invoke$arity$1(x_11423)});
{
var G__11424 = cljs.core.next.call(null,seq__11327_11417__$1);
var G__11425 = null;
var G__11426 = 0;
var G__11427 = 0;
seq__11327_11407 = G__11424;
chunk__11328_11408 = G__11425;
count__11329_11409 = G__11426;
i__11330_11410 = G__11427;
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
}),cljs.core.map.call(null,(function (p__11335){var vec__11336 = p__11335;var k = cljs.core.nth.call(null,vec__11336,0,null);var v = cljs.core.nth.call(null,vec__11336,1,null);return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"package","package",4501809080),new cljs.core.Keyword(null,"range","range",1122184367),new cljs.core.Keyword(null,"version","version",1365512266)],[lt.plugins.elm_light.utils.nskw__GT_name.call(null,k),v,new cljs.core.Keyword(null,"version","version",1365512266).cljs$core$IFn$_invoke$arity$1(cljs.core.some.call(null,((function (vec__11336,k,v){
return (function (p1__11331_SHARP_){if(cljs.core._EQ_.call(null,lt.plugins.elm_light.utils.nskw__GT_name.call(null,k),new cljs.core.Keyword(null,"package","package",4501809080).cljs$core$IFn$_invoke$arity$1(p1__11331_SHARP_)))
{return p1__11331_SHARP_;
} else
{return null;
}
});})(vec__11336,k,v))
,new cljs.core.Keyword(null,"packages","packages",1764771935).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))))]);
}),new cljs.core.Keyword(null,"dependencies","dependencies",1517678747).cljs$core$IFn$_invoke$arity$1(pkg_json))));if(temp__4092__auto__)
{var edges = temp__4092__auto__;lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",1016980252),new cljs.core.Keyword(null,"edges","edges",1110261192)], null),((function (edges,temp__4092__auto__){
return (function (p1__11332_SHARP_){return cljs.core.concat.call(null,p1__11332_SHARP_,edges);
});})(edges,temp__4092__auto__))
);
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"elm.graph.render","elm.graph.render",2076182000));
} else
{return null;
}
});
lt.plugins.elm_light.graph.__BEH__on_get_transitives = (function __BEH__on_get_transitives(this$){var transitives = cljs.core.remove.call(null,new cljs.core.Keyword(null,"range","range",1122184367),new cljs.core.Keyword(null,"packages","packages",1764771935).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))));lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",1016980252),new cljs.core.Keyword(null,"nodes","nodes",1118897699)], null),((function (transitives){
return (function (p1__11337_SHARP_){return cljs.core.concat.call(null,p1__11337_SHARP_,transitives);
});})(transitives))
);
lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"elm.graph.render","elm.graph.render",2076182000));
var seq__11342 = cljs.core.seq.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"version","version",1365512266),new cljs.core.Keyword(null,"packages","packages",1764771935).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))));var chunk__11343 = null;var count__11344 = 0;var i__11345 = 0;while(true){
if((i__11345 < count__11344))
{var x = cljs.core._nth.call(null,chunk__11343,i__11345);lt.plugins.elm_light.graph.get_package_json.call(null,x,cljs.core.partial.call(null,lt.plugins.elm_light.graph.add_edges_for_dep,this$,x));
{
var G__11428 = seq__11342;
var G__11429 = chunk__11343;
var G__11430 = count__11344;
var G__11431 = (i__11345 + 1);
seq__11342 = G__11428;
chunk__11343 = G__11429;
count__11344 = G__11430;
i__11345 = G__11431;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__11342);if(temp__4092__auto__)
{var seq__11342__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11342__$1))
{var c__5632__auto__ = cljs.core.chunk_first.call(null,seq__11342__$1);{
var G__11432 = cljs.core.chunk_rest.call(null,seq__11342__$1);
var G__11433 = c__5632__auto__;
var G__11434 = cljs.core.count.call(null,c__5632__auto__);
var G__11435 = 0;
seq__11342 = G__11432;
chunk__11343 = G__11433;
count__11344 = G__11434;
i__11345 = G__11435;
continue;
}
} else
{var x = cljs.core.first.call(null,seq__11342__$1);lt.plugins.elm_light.graph.get_package_json.call(null,x,cljs.core.partial.call(null,lt.plugins.elm_light.graph.add_edges_for_dep,this$,x));
{
var G__11436 = cljs.core.next.call(null,seq__11342__$1);
var G__11437 = null;
var G__11438 = 0;
var G__11439 = 0;
seq__11342 = G__11436;
chunk__11343 = G__11437;
count__11344 = G__11438;
i__11345 = G__11439;
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
lt.plugins.elm_light.graph.get_dependency_data = (function get_dependency_data(project_path){var pkgs = cljs.core.map.call(null,(function (p1__11347_SHARP_){return cljs.core.assoc.call(null,p1__11347_SHARP_,new cljs.core.Keyword(null,"summary","summary",3451231000),new cljs.core.Keyword(null,"summary","summary",3451231000).cljs$core$IFn$_invoke$arity$1(lt.plugins.elm_light.graph.find_package_by_name.call(null,lt.plugins.elm_light.graph.dependency_graph,new cljs.core.Keyword(null,"package","package",4501809080).cljs$core$IFn$_invoke$arity$1(p1__11347_SHARP_))));
}),cljs.core.map.call(null,(function (p1__11346_SHARP_){return clojure.set.rename_keys.call(null,p1__11346_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"exact","exact",1110851185),new cljs.core.Keyword(null,"version","version",1365512266)], null));
}),lt.plugins.elm_light.utils.get_project_deps.call(null,project_path)));var direct = cljs.core.filter.call(null,new cljs.core.Keyword(null,"range","range",1122184367),pkgs);var rootVersion = new cljs.core.Keyword(null,"version","version",1365512266).cljs$core$IFn$_invoke$arity$1(lt.plugins.elm_light.utils.parse_json_file.call(null,lt.objs.files.join.call(null,project_path,"elm-package.json")));var root = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"package","package",4501809080),lt.objs.files.basename.call(null,project_path),new cljs.core.Keyword(null,"version","version",1365512266),rootVersion,new cljs.core.Keyword(null,"shape","shape",1123304211),"ellipse"], null);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"packages","packages",1764771935),pkgs,new cljs.core.Keyword(null,"nodes","nodes",1118897699),cljs.core.conj.call(null,direct,root),new cljs.core.Keyword(null,"edges","edges",1110261192),cljs.core.map.call(null,((function (pkgs,direct,rootVersion,root){
return (function (p1__11348_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"label","label",1116631654)],[lt.plugins.elm_light.graph.dep_id.call(null,root),lt.plugins.elm_light.graph.dep_id.call(null,p1__11348_SHARP_),new cljs.core.Keyword(null,"range","range",1122184367).cljs$core$IFn$_invoke$arity$1(p1__11348_SHARP_)]);
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
return (function (p__11633){var vec__11634 = p__11633;var k = cljs.core.nth.call(null,vec__11634,0,null);var v = cljs.core.nth.call(null,vec__11634,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.elm_light.utils.nskw__GT_name.call(null,k),v], null);
});})(pkg_file))
,deps)),pkg);
});})(pkg_file))
)));
});
lt.plugins.elm_light.packages.project_wrapper = (function project_wrapper(this$){var e__6289__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.elm","div.elm",2686466363),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"project-packages-wrapper"], null),"Retrieving project package info..."], null)], null));var seq__11641_11666 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__11642_11667 = null;var count__11643_11668 = 0;var i__11644_11669 = 0;while(true){
if((i__11644_11669 < count__11643_11668))
{var vec__11645_11670 = cljs.core._nth.call(null,chunk__11642_11667,i__11644_11669);var ev__6290__auto___11671 = cljs.core.nth.call(null,vec__11645_11670,0,null);var func__6291__auto___11672 = cljs.core.nth.call(null,vec__11645_11670,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___11671,func__6291__auto___11672);
{
var G__11673 = seq__11641_11666;
var G__11674 = chunk__11642_11667;
var G__11675 = count__11643_11668;
var G__11676 = (i__11644_11669 + 1);
seq__11641_11666 = G__11673;
chunk__11642_11667 = G__11674;
count__11643_11668 = G__11675;
i__11644_11669 = G__11676;
continue;
}
} else
{var temp__4092__auto___11677 = cljs.core.seq.call(null,seq__11641_11666);if(temp__4092__auto___11677)
{var seq__11641_11678__$1 = temp__4092__auto___11677;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11641_11678__$1))
{var c__5632__auto___11679 = cljs.core.chunk_first.call(null,seq__11641_11678__$1);{
var G__11680 = cljs.core.chunk_rest.call(null,seq__11641_11678__$1);
var G__11681 = c__5632__auto___11679;
var G__11682 = cljs.core.count.call(null,c__5632__auto___11679);
var G__11683 = 0;
seq__11641_11666 = G__11680;
chunk__11642_11667 = G__11681;
count__11643_11668 = G__11682;
i__11644_11669 = G__11683;
continue;
}
} else
{var vec__11646_11684 = cljs.core.first.call(null,seq__11641_11678__$1);var ev__6290__auto___11685 = cljs.core.nth.call(null,vec__11646_11684,0,null);var func__6291__auto___11686 = cljs.core.nth.call(null,vec__11646_11684,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___11685,func__6291__auto___11686);
{
var G__11687 = cljs.core.next.call(null,seq__11641_11678__$1);
var G__11688 = null;
var G__11689 = 0;
var G__11690 = 0;
seq__11641_11666 = G__11687;
chunk__11642_11667 = G__11688;
count__11643_11668 = G__11689;
i__11644_11669 = G__11690;
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
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.packages","elm-packages","lt.plugins.elm-light.packages/elm-packages",4552372902),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elm.packages","elm.packages",3931311271),null], null), null),new cljs.core.Keyword(null,"label","label",1116631654),"Elm project packages",new cljs.core.Keyword(null,"name","name",1017277949),"Elm project packages",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){lt.plugins.elm_light.utils.fetch_all_packages.call(null,(function (p1__11647_SHARP_){return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"all-packages","all-packages",1123981067),p1__11647_SHARP_], null));
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
lt.plugins.elm_light.packages.idx_active = (function idx_active(items){return cljs.core.first.call(null,cljs.core.keep_indexed.call(null,(function (p1__11649_SHARP_,p2__11648_SHARP_){if(cljs.core.truth_(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(p2__11648_SHARP_)))
{return p1__11649_SHARP_;
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
lt.plugins.elm_light.packages.on_pkg_sel = (function on_pkg_sel(){var items_11691 = new cljs.core.Keyword(null,"ac-packages","ac-packages",1548109226).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.elm_light.packages.elm_packages));var temp__4090__auto___11692 = lt.plugins.elm_light.packages.idx_active.call(null,items_11691);if(cljs.core.truth_(temp__4090__auto___11692))
{var idx_11693 = temp__4090__auto___11692;lt.object.assoc_in_BANG_.call(null,lt.plugins.elm_light.packages.elm_packages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ac-versions","ac-versions",3107155800)], null),new cljs.core.Keyword(null,"versions","versions",3323818509).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,items_11691,idx_11693)));
lt.object.assoc_in_BANG_.call(null,lt.plugins.elm_light.packages.elm_packages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ac-version","ac-version",2051259807)], null),cljs.core.first.call(null,new cljs.core.Keyword(null,"versions","versions",3323818509).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,items_11691,idx_11693))));
lt.object.assoc_in_BANG_.call(null,lt.plugins.elm_light.packages.elm_packages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ac-package","ac-package",892589325)], null),new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,items_11691,idx_11693)));
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
return (function (p1__11650_SHARP_){if(cljs.core._EQ_.call(null,p1__11650_SHARP_,0))
{lt.objs.notifos.done_working.call(null);
} else
{lt.objs.notifos.set_msg_BANG_.call(null,"Error installing elm package",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),"error",new cljs.core.Keyword(null,"timeout","timeout",3994960083),5000], null));
}
lt.object.raise.call(null,lt.plugins.elm_light.packages.elm_packages,new cljs.core.Keyword(null,"elm.show.project.packages","elm.show.project.packages",3385102109),new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.elm_light.packages.elm_packages)));
return lt.object.raise.call(null,lt.plugins.elm_light.graph.dependency_graph,new cljs.core.Keyword(null,"elm.graph.show-dependencies","elm.graph.show-dependencies",3464547203),new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.elm_light.packages.elm_packages)),false);
});})(proc,args))
);
proc.stdout.on("data",((function (proc,args){
return (function (p1__11651_SHARP_){return lt.objs.notifos.msg_STAR_.call(null,[cljs.core.str("Package install: "),cljs.core.str(p1__11651_SHARP_)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"timeout","timeout",3994960083),5000], null));
});})(proc,args))
);
return proc.stderr.on("data",((function (proc,args){
return (function (p1__11652_SHARP_){return lt.objs.console.error.call(null,[cljs.core.str(p1__11652_SHARP_)].join(''));
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
lt.plugins.elm_light.packages.PackageRow = quiescent.component.call(null,(function (p__11653){var map__11654 = p__11653;var map__11654__$1 = ((cljs.core.seq_QMARK_.call(null,map__11654))?cljs.core.apply.call(null,cljs.core.hash_map,map__11654):map__11654);var on_browse = cljs.core.get.call(null,map__11654__$1,new cljs.core.Keyword(null,"on-browse","on-browse",587885994));var on_remove = cljs.core.get.call(null,map__11654__$1,new cljs.core.Keyword(null,"on-remove","on-remove",1033879460));var exact = cljs.core.get.call(null,map__11654__$1,new cljs.core.Keyword(null,"exact","exact",1110851185));var range = cljs.core.get.call(null,map__11654__$1,new cljs.core.Keyword(null,"range","range",1122184367));var package$ = cljs.core.get.call(null,map__11654__$1,new cljs.core.Keyword(null,"package","package",4501809080));return quiescent.dom.tr.call(null,cljs.core.PersistentArrayMap.EMPTY,quiescent.dom.td.call(null,cljs.core.PersistentArrayMap.EMPTY,(cljs.core.truth_((function (){var and__4872__auto__ = package$;if(cljs.core.truth_(and__4872__auto__))
{return exact;
} else
{return and__4872__auto__;
}
})())?quiescent.dom.span.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",1004015509),"link",new cljs.core.Keyword(null,"onClick","onClick",3956969051),((function (map__11654,map__11654__$1,on_browse,on_remove,exact,range,package$){
return (function (){return on_browse.call(null,package$,exact);
});})(map__11654,map__11654__$1,on_browse,on_remove,exact,range,package$))
], null),package$):package$)),quiescent.dom.td.call(null,cljs.core.PersistentArrayMap.EMPTY,range),quiescent.dom.td.call(null,cljs.core.PersistentArrayMap.EMPTY,exact),quiescent.dom.td.call(null,cljs.core.PersistentArrayMap.EMPTY,(cljs.core.truth_(range)?quiescent.dom.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",3956969051),((function (map__11654,map__11654__$1,on_browse,on_remove,exact,range,package$){
return (function (){return on_remove.call(null,package$);
});})(map__11654,map__11654__$1,on_browse,on_remove,exact,range,package$))
], null),"remove"):null)));
}));
/**
* 
*/
lt.plugins.elm_light.packages.PackageTable = quiescent.component.call(null,(function (props){return quiescent.dom.table.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",1004015509),"package-table"], null),quiescent.dom.thead.call(null,cljs.core.PersistentArrayMap.EMPTY,quiescent.dom.tr.call(null,cljs.core.PersistentArrayMap.EMPTY,quiescent.dom.th.call(null,cljs.core.PersistentArrayMap.EMPTY,"Package"),quiescent.dom.th.call(null,cljs.core.PersistentArrayMap.EMPTY,"Range"),quiescent.dom.th.call(null,cljs.core.PersistentArrayMap.EMPTY,"Exact"),quiescent.dom.th.call(null,cljs.core.PersistentArrayMap.EMPTY,""))),cljs.core.apply.call(null,quiescent.dom.tbody,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__11655_SHARP_){return lt.plugins.elm_light.packages.PackageRow.call(null,cljs.core.assoc.call(null,p1__11655_SHARP_,new cljs.core.Keyword(null,"on-remove","on-remove",1033879460),new cljs.core.Keyword(null,"on-remove","on-remove",1033879460).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"on-browse","on-browse",587885994),new cljs.core.Keyword(null,"on-browse","on-browse",587885994).cljs$core$IFn$_invoke$arity$1(props)));
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
var G__11702 = (line - 1);
line = G__11702;
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
var G__11703 = (line + 1);
line = G__11703;
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
var G__11704 = (line - 1);
line = G__11704;
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
return (function (p1__11189_SHARP_){return lt.plugins.elm_light.clients.on_elm_message.call(null,client,p1__11189_SHARP_);
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
lt.plugins.elm_light.clients.start_elm_client = (function start_elm_client(p__11190){var map__11192 = p__11190;var map__11192__$1 = ((cljs.core.seq_QMARK_.call(null,map__11192))?cljs.core.apply.call(null,cljs.core.hash_map,map__11192):map__11192);var props = map__11192__$1;var client = cljs.core.get.call(null,map__11192__$1,new cljs.core.Keyword(null,"client","client",3951159101));var proj_path = cljs.core.get.call(null,map__11192__$1,new cljs.core.Keyword(null,"proj-path","proj-path",4362692615));var path = cljs.core.get.call(null,map__11192__$1,new cljs.core.Keyword(null,"path","path",1017337751));lt.objs.notifos.working.call(null,"Connecting..");
return lt.plugins.elm_light.clients.claim_reactor_port.call(null,proj_path,((function (map__11192,map__11192__$1,props,client,proj_path,path){
return (function (_,port){var worker = lt.plugins.elm_light.clients.start_elm_worker.call(null,proj_path,port,client);lt.object.merge_BANG_.call(null,client,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1017277949),lt.objs.files.basename.call(null,proj_path),new cljs.core.Keyword(null,"dir","dir",1014003711),proj_path,new cljs.core.Keyword(null,"reactor-port","reactor-port",4649590590),port,new cljs.core.Keyword(null,"worker","worker",4526786288),worker,new cljs.core.Keyword(null,"commands","commands",4706336250),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"editor.elm.lint","editor.elm.lint",1086056222),null,new cljs.core.Keyword(null,"editor.elm.make","editor.elm.make",1086078217),null,new cljs.core.Keyword(null,"editor.eval.elm","editor.eval.elm",1083015975),null,new cljs.core.Keyword(null,"editor.elm.hint","editor.elm.hint",1085937058),null,new cljs.core.Keyword(null,"elm.repl.restart","elm.repl.restart",2931654218),null,new cljs.core.Keyword(null,"docs.elm.search","docs.elm.search",737241333),null,new cljs.core.Keyword(null,"editor.elm.doc","editor.elm.doc",1570413537),null,new cljs.core.Keyword(null,"editor.elm.gendoc","editor.elm.gendoc",1485628611),null], null), null)], null));
return lt.object.add_behavior_BANG_.call(null,client,new cljs.core.Keyword("lt.plugins.elm-light.clients","send!","lt.plugins.elm-light.clients/send!",867013595));
});})(map__11192,map__11192__$1,props,client,proj_path,path))
);
});
lt.plugins.elm_light.clients.try_connect = (function try_connect(p__11193){var map__11195 = p__11193;var map__11195__$1 = ((cljs.core.seq_QMARK_.call(null,map__11195))?cljs.core.apply.call(null,cljs.core.hash_map,map__11195):map__11195);var props = map__11195__$1;var info = cljs.core.get.call(null,map__11195__$1,new cljs.core.Keyword(null,"info","info",1017141280));var path = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(info);var proj_path = lt.plugins.elm_light.utils.project_path.call(null,path);var client = lt.objs.clients.client_BANG_.call(null,new cljs.core.Keyword(null,"elm-client","elm-client",1622336068));if(cljs.core.truth_(proj_path))
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
lt.plugins.elm_light.docpreview.preview_skeleton = (function preview_skeleton(this$){var e__6289__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"elm-doc-preview"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"Generating elm docs, please wait a little..."], null)], null));var seq__11763_11777 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__11764_11778 = null;var count__11765_11779 = 0;var i__11766_11780 = 0;while(true){
if((i__11766_11780 < count__11765_11779))
{var vec__11767_11781 = cljs.core._nth.call(null,chunk__11764_11778,i__11766_11780);var ev__6290__auto___11782 = cljs.core.nth.call(null,vec__11767_11781,0,null);var func__6291__auto___11783 = cljs.core.nth.call(null,vec__11767_11781,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___11782,func__6291__auto___11783);
{
var G__11784 = seq__11763_11777;
var G__11785 = chunk__11764_11778;
var G__11786 = count__11765_11779;
var G__11787 = (i__11766_11780 + 1);
seq__11763_11777 = G__11784;
chunk__11764_11778 = G__11785;
count__11765_11779 = G__11786;
i__11766_11780 = G__11787;
continue;
}
} else
{var temp__4092__auto___11788 = cljs.core.seq.call(null,seq__11763_11777);if(temp__4092__auto___11788)
{var seq__11763_11789__$1 = temp__4092__auto___11788;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11763_11789__$1))
{var c__5632__auto___11790 = cljs.core.chunk_first.call(null,seq__11763_11789__$1);{
var G__11791 = cljs.core.chunk_rest.call(null,seq__11763_11789__$1);
var G__11792 = c__5632__auto___11790;
var G__11793 = cljs.core.count.call(null,c__5632__auto___11790);
var G__11794 = 0;
seq__11763_11777 = G__11791;
chunk__11764_11778 = G__11792;
count__11765_11779 = G__11793;
i__11766_11780 = G__11794;
continue;
}
} else
{var vec__11768_11795 = cljs.core.first.call(null,seq__11763_11789__$1);var ev__6290__auto___11796 = cljs.core.nth.call(null,vec__11768_11795,0,null);var func__6291__auto___11797 = cljs.core.nth.call(null,vec__11768_11795,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___11796,func__6291__auto___11797);
{
var G__11798 = cljs.core.next.call(null,seq__11763_11789__$1);
var G__11799 = null;
var G__11800 = 0;
var G__11801 = 0;
seq__11763_11777 = G__11798;
chunk__11764_11778 = G__11799;
count__11765_11779 = G__11800;
i__11766_11780 = G__11801;
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
lt.plugins.elm_light.docpreview.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___11802 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___11802))
{var ts_11803 = temp__4092__auto___11802;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_11803))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_11803);
} else
{}
} else
{}
var temp__4092__auto___11804 = new cljs.core.Keyword(null,"owner-ed","owner-ed",2677003627).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___11804))
{var ed_11805 = temp__4092__auto___11804;lt.object.assoc_in_BANG_.call(null,ed_11805,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elmdoc","elmdoc",4008535620)], null),null);
} else
{}
return lt.object.destroy_BANG_.call(null,this$);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.docpreview","on-close-destroy","lt.plugins.elm-light.docpreview/on-close-destroy",906178052),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.docpreview.__BEH__on_close_destroy,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));
lt.plugins.elm_light.docpreview.__BEH__gendoc = (function __BEH__gendoc(ed){var info = new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed));var cl = lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor.elm.gendoc","editor.elm.gendoc",1485628611),new cljs.core.Keyword(null,"origin","origin",4300251800),ed,new cljs.core.Keyword(null,"info","info",1017141280),info,new cljs.core.Keyword(null,"create","create",3956577390),lt.plugins.elm_light.clients.try_connect], null));lt.objs.notifos.working.call(null,[cljs.core.str("Starting elm doc generation for: "),cljs.core.str(new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(info))].join(''));
return lt.objs.clients.send.call(null,cl,new cljs.core.Keyword(null,"editor.elm.gendoc","editor.elm.gendoc",1485628611),cljs.core.assoc.call(null,info,new cljs.core.Keyword(null,"project-path","project-path",1907176907),lt.plugins.elm_light.utils.project_path.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(info))),new cljs.core.Keyword(null,"only","only",1017320222),ed);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.docpreview","gendoc","lt.plugins.elm-light.docpreview/gendoc",1698030579),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.docpreview.__BEH__gendoc,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gendoc","gendoc",4059359066),null], null), null),new cljs.core.Keyword(null,"description","description",3584325486),"Preview package doc for a given Elm file");
lt.plugins.elm_light.docpreview.__BEH__elm_gendoc_res = (function __BEH__elm_gendoc_res(ed,res){lt.objs.notifos.done_working.call(null,"Elm doc generated");
var temp__4092__auto__ = new cljs.core.Keyword(null,"elmdoc","elmdoc",4008535620).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed));if(cljs.core.truth_(temp__4092__auto__))
{var elmdoc = temp__4092__auto__;var el = lt.object.__GT_content.call(null,elmdoc);var preview = Elm.embed(Elm.DocPreview,el,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"modules","modules",2241338105),"[]",new cljs.core.Keyword(null,"selectModule","selectModule",2877951482),""], null)));preview.ports.modules.send(res);
return lt.util.js.wait.call(null,50,((function (el,preview,elmdoc,temp__4092__auto__){
return (function (){var seq__11773 = cljs.core.seq.call(null,lt.util.dom.$$.call(null,"pre code",el));var chunk__11774 = null;var count__11775 = 0;var i__11776 = 0;while(true){
if((i__11776 < count__11775))
{var block = cljs.core._nth.call(null,chunk__11774,i__11776);hljs.highlightBlock(block);
{
var G__11806 = seq__11773;
var G__11807 = chunk__11774;
var G__11808 = count__11775;
var G__11809 = (i__11776 + 1);
seq__11773 = G__11806;
chunk__11774 = G__11807;
count__11775 = G__11808;
i__11776 = G__11809;
continue;
}
} else
{var temp__4092__auto____$1 = cljs.core.seq.call(null,seq__11773);if(temp__4092__auto____$1)
{var seq__11773__$1 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11773__$1))
{var c__5632__auto__ = cljs.core.chunk_first.call(null,seq__11773__$1);{
var G__11810 = cljs.core.chunk_rest.call(null,seq__11773__$1);
var G__11811 = c__5632__auto__;
var G__11812 = cljs.core.count.call(null,c__5632__auto__);
var G__11813 = 0;
seq__11773 = G__11810;
chunk__11774 = G__11811;
count__11775 = G__11812;
i__11776 = G__11813;
continue;
}
} else
{var block = cljs.core.first.call(null,seq__11773__$1);hljs.highlightBlock(block);
{
var G__11814 = cljs.core.next.call(null,seq__11773__$1);
var G__11815 = null;
var G__11816 = 0;
var G__11817 = 0;
seq__11773 = G__11814;
chunk__11774 = G__11815;
count__11775 = G__11816;
i__11776 = G__11817;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(el,preview,elmdoc,temp__4092__auto__))
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
lt.plugins.elm_light.modulebrowser.resolve_module_file = (function resolve_module_file(project_path,pck_json,package$,module,version){return cljs.core.some.call(null,(function (p1__11570_SHARP_){if(cljs.core.truth_(lt.objs.files.exists_QMARK_.call(null,p1__11570_SHARP_)))
{return p1__11570_SHARP_;
} else
{return null;
}
}),cljs.core.map.call(null,(function (p1__11569_SHARP_){return lt.objs.files.join.call(null,project_path,"elm-stuff/packages",package$,version,p1__11569_SHARP_,[cljs.core.str(clojure.string.replace.call(null,module,".",lt.objs.files.separator)),cljs.core.str(".elm")].join(''));
}),new cljs.core.Keyword(null,"source-directories","source-directories",4475397259).cljs$core$IFn$_invoke$arity$1(pck_json)));
});
lt.plugins.elm_light.modulebrowser.get_exposed_modules = (function get_exposed_modules(project_path,p__11571){var map__11573 = p__11571;var map__11573__$1 = ((cljs.core.seq_QMARK_.call(null,map__11573))?cljs.core.apply.call(null,cljs.core.hash_map,map__11573):map__11573);var exact = cljs.core.get.call(null,map__11573__$1,new cljs.core.Keyword(null,"exact","exact",1110851185));var package$ = cljs.core.get.call(null,map__11573__$1,new cljs.core.Keyword(null,"package","package",4501809080));var pck_json = lt.plugins.elm_light.utils.parse_json_file.call(null,lt.objs.files.join.call(null,project_path,"elm-stuff/packages",package$,exact,"elm-package.json"));return cljs.core.map.call(null,((function (pck_json,map__11573,map__11573__$1,exact,package$){
return (function (x){return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1017277949),x,new cljs.core.Keyword(null,"packageName","packageName",1922663267),package$,new cljs.core.Keyword(null,"version","version",1365512266),exact,new cljs.core.Keyword(null,"file","file",1017047278),lt.plugins.elm_light.modulebrowser.resolve_module_file.call(null,project_path,pck_json,package$,x,exact)], null);
});})(pck_json,map__11573,map__11573__$1,exact,package$))
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
return (function (p1__11574_SHARP_){return cljs.core._EQ_.call(null,lt.objs.files.ext.call(null,p1__11574_SHARP_),"elm");
});})(pck_json))
,lt.objs.files.ls.call(null,project_path)));
} else
{return cljs.core.map.call(null,((function (pck_json){
return (function (x){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),lt.plugins.elm_light.modulebrowser.deduce_module_name.call(null,lt.objs.files.join.call(null,project_path,dir),x),new cljs.core.Keyword(null,"file","file",1017047278),x], null);
});})(pck_json))
,lt.objs.files.filter_walk.call(null,((function (pck_json){
return (function (p1__11575_SHARP_){return cljs.core._EQ_.call(null,lt.objs.files.ext.call(null,p1__11575_SHARP_),"elm");
});})(pck_json))
,lt.objs.files.join.call(null,project_path,dir)));
}
});})(pck_json))
,new cljs.core.Keyword(null,"source-directories","source-directories",4475397259).cljs$core$IFn$_invoke$arity$1(pck_json))));
});
lt.plugins.elm_light.modulebrowser.get_all_modules = (function get_all_modules(project_path){return cljs.core.concat.call(null,lt.plugins.elm_light.modulebrowser.get_project_modules.call(null,project_path),lt.plugins.elm_light.modulebrowser.get_package_modules.call(null,project_path));
});
lt.plugins.elm_light.modulebrowser.wrapper = (function wrapper(this$){var e__6289__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"elm-module-browser"], null),"Retrieving modules..."], null));var seq__11582_11598 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__11583_11599 = null;var count__11584_11600 = 0;var i__11585_11601 = 0;while(true){
if((i__11585_11601 < count__11584_11600))
{var vec__11586_11602 = cljs.core._nth.call(null,chunk__11583_11599,i__11585_11601);var ev__6290__auto___11603 = cljs.core.nth.call(null,vec__11586_11602,0,null);var func__6291__auto___11604 = cljs.core.nth.call(null,vec__11586_11602,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___11603,func__6291__auto___11604);
{
var G__11605 = seq__11582_11598;
var G__11606 = chunk__11583_11599;
var G__11607 = count__11584_11600;
var G__11608 = (i__11585_11601 + 1);
seq__11582_11598 = G__11605;
chunk__11583_11599 = G__11606;
count__11584_11600 = G__11607;
i__11585_11601 = G__11608;
continue;
}
} else
{var temp__4092__auto___11609 = cljs.core.seq.call(null,seq__11582_11598);if(temp__4092__auto___11609)
{var seq__11582_11610__$1 = temp__4092__auto___11609;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11582_11610__$1))
{var c__5632__auto___11611 = cljs.core.chunk_first.call(null,seq__11582_11610__$1);{
var G__11612 = cljs.core.chunk_rest.call(null,seq__11582_11610__$1);
var G__11613 = c__5632__auto___11611;
var G__11614 = cljs.core.count.call(null,c__5632__auto___11611);
var G__11615 = 0;
seq__11582_11598 = G__11612;
chunk__11583_11599 = G__11613;
count__11584_11600 = G__11614;
i__11585_11601 = G__11615;
continue;
}
} else
{var vec__11587_11616 = cljs.core.first.call(null,seq__11582_11610__$1);var ev__6290__auto___11617 = cljs.core.nth.call(null,vec__11587_11616,0,null);var func__6291__auto___11618 = cljs.core.nth.call(null,vec__11587_11616,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___11617,func__6291__auto___11618);
{
var G__11619 = cljs.core.next.call(null,seq__11582_11610__$1);
var G__11620 = null;
var G__11621 = 0;
var G__11622 = 0;
seq__11582_11598 = G__11619;
chunk__11583_11599 = G__11620;
count__11584_11600 = G__11621;
i__11585_11601 = G__11622;
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
{var map__6436 = cljs.core._nth.call(null,chunk__6433,i__6435);var map__6436__$1 = ((cljs.core.seq_QMARK_.call(null,map__6436))?cljs.core.apply.call(null,cljs.core.hash_map,map__6436):map__6436);var tag = cljs.core.get.call(null,map__6436__$1,new cljs.core.Keyword(null,"tag","tag",1014018828));var subregion = cljs.core.get.call(null,map__6436__$1,new cljs.core.Keyword(null,"subregion","subregion",1501636774));var region = cljs.core.get.call(null,map__6436__$1,new cljs.core.Keyword(null,"region","region",4374076006));var details = cljs.core.get.call(null,map__6436__$1,new cljs.core.Keyword(null,"details","details",2571625908));var overview = cljs.core.get.call(null,map__6436__$1,new cljs.core.Keyword(null,"overview","overview",1544020203));var type = cljs.core.get.call(null,map__6436__$1,new cljs.core.Keyword(null,"type","type",1017479852));var file = cljs.core.get.call(null,map__6436__$1,new cljs.core.Keyword(null,"file","file",1017047278));var map__6437_6456 = lt.plugins.elm_light.__GT_lt_range.call(null,region);var map__6437_6457__$1 = ((cljs.core.seq_QMARK_.call(null,map__6437_6456))?cljs.core.apply.call(null,cljs.core.hash_map,map__6437_6456):map__6437_6456);var to_6458 = cljs.core.get.call(null,map__6437_6457__$1,new cljs.core.Keyword(null,"to","to",1013907949));var from_6459 = cljs.core.get.call(null,map__6437_6457__$1,new cljs.core.Keyword(null,"from","from",1017056028));var msg_6460 = [cljs.core.str(overview),cljs.core.str("\n"),cljs.core.str(lt.plugins.elm_light.colorize_msg.call(null,details))].join('');if((cljs.core._EQ_.call(null,path,file)) && (cljs.core._EQ_.call(null,type,"warning")))
{lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"linter-result!","linter-result!",4482067001),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",1124275658),tag,new cljs.core.Keyword(null,"details","details",2571625908),msg_6460,new cljs.core.Keyword(null,"category","category",1064415344),new cljs.core.Keyword(null,"warning","warning",2138350350),new cljs.core.Keyword(null,"code-range","code-range",3297446095),lt.plugins.elm_light.__GT_lt_range.call(null,(function (){var or__4884__auto__ = subregion;if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return region;
}
})())], null));
} else
{if((cljs.core._EQ_.call(null,path,file)) && (cljs.core._EQ_.call(null,type,"error")))
{lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"linter-result!","linter-result!",4482067001),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"titshle","titshle",4001834783),tag,new cljs.core.Keyword(null,"details","details",2571625908),msg_6460,new cljs.core.Keyword(null,"category","category",1064415344),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"code-range","code-range",3297446095),lt.plugins.elm_light.__GT_lt_range.call(null,(function (){var or__4884__auto__ = subregion;if(cljs.core.truth_(or__4884__auto__))
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
var G__6461 = seq__6432;
var G__6462 = chunk__6433;
var G__6463 = count__6434;
var G__6464 = (i__6435 + 1);
seq__6432 = G__6461;
chunk__6433 = G__6462;
count__6434 = G__6463;
i__6435 = G__6464;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__6432);if(temp__4092__auto__)
{var seq__6432__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6432__$1))
{var c__5632__auto__ = cljs.core.chunk_first.call(null,seq__6432__$1);{
var G__6465 = cljs.core.chunk_rest.call(null,seq__6432__$1);
var G__6466 = c__5632__auto__;
var G__6467 = cljs.core.count.call(null,c__5632__auto__);
var G__6468 = 0;
seq__6432 = G__6465;
chunk__6433 = G__6466;
count__6434 = G__6467;
i__6435 = G__6468;
continue;
}
} else
{var map__6438 = cljs.core.first.call(null,seq__6432__$1);var map__6438__$1 = ((cljs.core.seq_QMARK_.call(null,map__6438))?cljs.core.apply.call(null,cljs.core.hash_map,map__6438):map__6438);var tag = cljs.core.get.call(null,map__6438__$1,new cljs.core.Keyword(null,"tag","tag",1014018828));var subregion = cljs.core.get.call(null,map__6438__$1,new cljs.core.Keyword(null,"subregion","subregion",1501636774));var region = cljs.core.get.call(null,map__6438__$1,new cljs.core.Keyword(null,"region","region",4374076006));var details = cljs.core.get.call(null,map__6438__$1,new cljs.core.Keyword(null,"details","details",2571625908));var overview = cljs.core.get.call(null,map__6438__$1,new cljs.core.Keyword(null,"overview","overview",1544020203));var type = cljs.core.get.call(null,map__6438__$1,new cljs.core.Keyword(null,"type","type",1017479852));var file = cljs.core.get.call(null,map__6438__$1,new cljs.core.Keyword(null,"file","file",1017047278));var map__6439_6469 = lt.plugins.elm_light.__GT_lt_range.call(null,region);var map__6439_6470__$1 = ((cljs.core.seq_QMARK_.call(null,map__6439_6469))?cljs.core.apply.call(null,cljs.core.hash_map,map__6439_6469):map__6439_6469);var to_6471 = cljs.core.get.call(null,map__6439_6470__$1,new cljs.core.Keyword(null,"to","to",1013907949));var from_6472 = cljs.core.get.call(null,map__6439_6470__$1,new cljs.core.Keyword(null,"from","from",1017056028));var msg_6473 = [cljs.core.str(overview),cljs.core.str("\n"),cljs.core.str(lt.plugins.elm_light.colorize_msg.call(null,details))].join('');if((cljs.core._EQ_.call(null,path,file)) && (cljs.core._EQ_.call(null,type,"warning")))
{lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"linter-result!","linter-result!",4482067001),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",1124275658),tag,new cljs.core.Keyword(null,"details","details",2571625908),msg_6473,new cljs.core.Keyword(null,"category","category",1064415344),new cljs.core.Keyword(null,"warning","warning",2138350350),new cljs.core.Keyword(null,"code-range","code-range",3297446095),lt.plugins.elm_light.__GT_lt_range.call(null,(function (){var or__4884__auto__ = subregion;if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return region;
}
})())], null));
} else
{if((cljs.core._EQ_.call(null,path,file)) && (cljs.core._EQ_.call(null,type,"error")))
{lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"linter-result!","linter-result!",4482067001),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"titshle","titshle",4001834783),tag,new cljs.core.Keyword(null,"details","details",2571625908),msg_6473,new cljs.core.Keyword(null,"category","category",1064415344),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"code-range","code-range",3297446095),lt.plugins.elm_light.__GT_lt_range.call(null,(function (){var or__4884__auto__ = subregion;if(cljs.core.truth_(or__4884__auto__))
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
var G__6474 = cljs.core.next.call(null,seq__6432__$1);
var G__6475 = null;
var G__6476 = 0;
var G__6477 = 0;
seq__6432 = G__6474;
chunk__6433 = G__6475;
count__6434 = G__6476;
i__6435 = G__6477;
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
CodeMirror.extendMode("elm",cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hint-pattern","hint-pattern",2825267644),/[\w_\.$]/], null)));
lt.plugins.elm_light.maybe_trim_prefix = (function maybe_trim_prefix(token,completion){if((".".indexOf(token) > -1))
{return cljs.core.last.call(null,clojure.string.split.call(null,lt.plugins.elm_light.comletion,"."));
} else
{return completion;
}
});
lt.plugins.elm_light.create_hints = (function create_hints(token,completions){return cljs.core.map.call(null,(function (p1__6440_SHARP_){return {"text": new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(p1__6440_SHARP_), "completion": lt.plugins.elm_light.maybe_trim_prefix.call(null,token,new cljs.core.Keyword(null,"completion","completion",4767668046).cljs$core$IFn$_invoke$arity$1(p1__6440_SHARP_))};
}),completions);
});
lt.plugins.elm_light.__BEH__finish_update_hints = (function __BEH__finish_update_hints(ed,res){if(cljs.core.truth_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null)))
{lt.object.assoc_in_BANG_.call(null,ed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.elm-light","hints","lt.plugins.elm-light/hints",1123432849)], null),lt.plugins.elm_light.create_hints.call(null,new cljs.core.Keyword("lt.plugins.elm-light","token","lt.plugins.elm-light/token",1134194276).cljs$core$IFn$_invoke$arity$1(ed),res));
lt.object.raise.call(null,lt.plugins.auto_complete.hinter,new cljs.core.Keyword(null,"refresh!","refresh!",4597922840));
} else
{}
return lt.objs.notifos.done_working.call(null);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light","finish-update-hints","lt.plugins.elm-light/finish-update-hints",2276477083),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.__BEH__finish_update_hints,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.elm.hints.result","editor.elm.hints.result",2636151706),null], null), null));
lt.plugins.elm_light.__BEH__use_local_hints = (function __BEH__use_local_hints(ed,hints,tok){var token_6478 = lt.plugins.elm_light.utils.find_symbol.call(null,ed,lt.objs.editor.__GT_cursor.call(null,ed));if((cljs.core.seq.call(null,token_6478)) && (cljs.core.not_EQ_.call(null,token_6478,new cljs.core.Keyword("lt.plugins.elm-light","token","lt.plugins.elm-light/token",1134194276).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)))))
{lt.object.merge_BANG_.call(null,ed,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.elm-light","token","lt.plugins.elm-light/token",1134194276),token_6478], null));
lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.elm.hints.update!","editor.elm.hints.update!",2726958399));
} else
{}
var temp__4090__auto__ = new cljs.core.Keyword("lt.plugins.elm-light","hints","lt.plugins.elm-light/hints",1123432849).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed));if(cljs.core.truth_(temp__4090__auto__))
{var elm_hints = temp__4090__auto__;return elm_hints;
} else
{return cljs.core.PersistentVector.EMPTY;
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
var b_6479 = (function (){var or__4884__auto__ = cljs.core.first.call(null,lt.object.by_tag.call(null,new cljs.core.Keyword(null,"browser","browser",1164844698)));if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return lt.objs.browser.add.call(null);
}
})();var get_url_6480 = ((function (b_6479,path,client){
return (function (){return [cljs.core.str("http://localhost:"),cljs.core.str(new cljs.core.Keyword(null,"reactor-port","reactor-port",4649590590).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client))),cljs.core.str(path),cljs.core.str((cljs.core.truth_(debug_QMARK_)?"?debug":""))].join('');
});})(b_6479,path,client))
;if(cljs.core.truth_(new cljs.core.Keyword(null,"connected","connected",4729661051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client))))
{lt.object.raise.call(null,b_6479,new cljs.core.Keyword(null,"navigate!","navigate!",1766726722),get_url_6480.call(null));
} else
{lt.util.js.wait.call(null,100,((function (b_6479,get_url_6480,path,client){
return (function (){return lt.object.raise.call(null,b_6479,new cljs.core.Keyword(null,"navigate!","navigate!",1766726722),get_url_6480.call(null));
});})(b_6479,get_url_6480,path,client))
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
lt.plugins.elm_light.linter.status_class = (function status_class(p__11440){var map__11442 = p__11440;var map__11442__$1 = ((cljs.core.seq_QMARK_.call(null,map__11442))?cljs.core.apply.call(null,cljs.core.hash_map,map__11442):map__11442);var warnings = cljs.core.get.call(null,map__11442__$1,new cljs.core.Keyword(null,"warnings","warnings",1511995337));var errors = cljs.core.get.call(null,map__11442__$1,new cljs.core.Keyword(null,"errors","errors",4014236381));if((errors > 0))
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
lt.plugins.elm_light.linter.status_text = (function status_text(p__11443){var map__11445 = p__11443;var map__11445__$1 = ((cljs.core.seq_QMARK_.call(null,map__11445))?cljs.core.apply.call(null,cljs.core.hash_map,map__11445):map__11445);var warnings = cljs.core.get.call(null,map__11445__$1,new cljs.core.Keyword(null,"warnings","warnings",1511995337));var errors = cljs.core.get.call(null,map__11445__$1,new cljs.core.Keyword(null,"errors","errors",4014236381));return [cljs.core.str("Lint status: "),cljs.core.str(errors),cljs.core.str("/"),cljs.core.str(warnings)].join('');
});
lt.plugins.elm_light.linter.__GT_status_ui = (function __GT_status_ui(p__11446){var map__11448 = p__11446;var map__11448__$1 = ((cljs.core.seq_QMARK_.call(null,map__11448))?cljs.core.apply.call(null,cljs.core.hash_map,map__11448):map__11448);var lint_summary = cljs.core.get.call(null,map__11448__$1,new cljs.core.Keyword(null,"lint-summary","lint-summary",2275048270));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("lint-status "),cljs.core.str(lt.plugins.elm_light.linter.status_class.call(null,lint_summary))].join('')], null),lt.plugins.elm_light.linter.status_text.call(null,lint_summary)], null);
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
return (function (p__11451){var vec__11452 = p__11451;var k = cljs.core.nth.call(null,vec__11452,0,null);var v = cljs.core.nth.call(null,vec__11452,1,null);return new cljs.core.PersistentArrayMap.fromArray([k,cljs.core.count.call(null,v)], true, false);
});})(results,temp__4090__auto__))
,cljs.core.group_by.call(null,new cljs.core.Keyword(null,"category","category",1064415344),cljs.core.map.call(null,new cljs.core.Keyword(null,"result","result",4374444943),cljs.core.vals.call(null,results)))));
} else
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",1110689146),0,new cljs.core.Keyword(null,"warning","warning",2138350350),0], null);
}
});
lt.plugins.elm_light.linter.update_status_for_editor = (function update_status_for_editor(ed){var map__11455 = lt.plugins.elm_light.linter.grouped_lint_count.call(null,ed);var map__11455__$1 = ((cljs.core.seq_QMARK_.call(null,map__11455))?cljs.core.apply.call(null,cljs.core.hash_map,map__11455):map__11455);var warning = cljs.core.get.call(null,map__11455__$1,new cljs.core.Keyword(null,"warning","warning",2138350350));var error = cljs.core.get.call(null,map__11455__$1,new cljs.core.Keyword(null,"error","error",1110689146));return lt.object.raise.call(null,lt.plugins.elm_light.linter.statusbar_lint_summary,new cljs.core.Keyword(null,"update!","update!",779473898),((function (map__11455,map__11455__$1,warning,error){
return (function (p1__11453_SHARP_){return cljs.core.assoc.call(null,p1__11453_SHARP_,new cljs.core.Keyword(null,"warnings","warnings",1511995337),(function (){var or__4884__auto__ = warning;if(cljs.core.truth_(or__4884__auto__))
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
});})(map__11455,map__11455__$1,warning,error))
);
});
lt.plugins.elm_light.linter.__BEH__update_linter_on_editor_change = (function __BEH__update_linter_on_editor_change(ed){return lt.plugins.elm_light.linter.update_status_for_editor.call(null,ed);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.linter","update-linter-on-editor-change","lt.plugins.elm-light.linter/update-linter-on-editor-change",2858337088),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.linter.__BEH__update_linter_on_editor_change,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"focus","focus",1111509066),null], null), null));
lt.plugins.elm_light.linter.remove_widget = (function remove_widget(ed,el){try{lt.util.dom.remove.call(null,el);
}catch (e11457){var e_11510 = e11457;}return lt.objs.editor.focus.call(null,ed);
});
lt.plugins.elm_light.linter.inline_ui = (function inline_ui(ed,p__11460){var map__11468 = p__11460;var map__11468__$1 = ((cljs.core.seq_QMARK_.call(null,map__11468))?cljs.core.apply.call(null,cljs.core.hash_map,map__11468):map__11468);var category = cljs.core.get.call(null,map__11468__$1,new cljs.core.Keyword(null,"category","category",1064415344));var details = cljs.core.get.call(null,map__11468__$1,new cljs.core.Keyword(null,"details","details",2571625908));var title = cljs.core.get.call(null,map__11468__$1,new cljs.core.Keyword(null,"title","title",1124275658));var e__6289__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tabindex","tabindex",4410954191),-1,new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("linter-res "),cljs.core.str((function (){var or__4884__auto__ = cljs.core.name.call(null,category);if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return "error";
}
})())].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.title","p.title",3057381068),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.details","div.details",4139669847),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),details], null)], null)], null));var seq__11469_11511 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blur","blur",1016931289),((function (e__6289__auto__,map__11468,map__11468__$1,category,details,title){
return (function (p1__11458_SHARP_){return lt.plugins.elm_light.linter.remove_widget.call(null,ed,p1__11458_SHARP_.target);
});})(e__6289__auto__,map__11468,map__11468__$1,category,details,title))
,new cljs.core.Keyword(null,"keydown","keydown",4493897459),((function (e__6289__auto__,map__11468,map__11468__$1,category,details,title){
return (function (p1__11459_SHARP_){var kc = p1__11459_SHARP_.keyCode;if(cljs.core._EQ_.call(null,kc,27))
{return lt.plugins.elm_light.linter.remove_widget.call(null,ed,p1__11459_SHARP_.target);
} else
{return null;
}
});})(e__6289__auto__,map__11468,map__11468__$1,category,details,title))
], null)));var chunk__11470_11512 = null;var count__11471_11513 = 0;var i__11472_11514 = 0;while(true){
if((i__11472_11514 < count__11471_11513))
{var vec__11473_11515 = cljs.core._nth.call(null,chunk__11470_11512,i__11472_11514);var ev__6290__auto___11516 = cljs.core.nth.call(null,vec__11473_11515,0,null);var func__6291__auto___11517 = cljs.core.nth.call(null,vec__11473_11515,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___11516,func__6291__auto___11517);
{
var G__11518 = seq__11469_11511;
var G__11519 = chunk__11470_11512;
var G__11520 = count__11471_11513;
var G__11521 = (i__11472_11514 + 1);
seq__11469_11511 = G__11518;
chunk__11470_11512 = G__11519;
count__11471_11513 = G__11520;
i__11472_11514 = G__11521;
continue;
}
} else
{var temp__4092__auto___11522 = cljs.core.seq.call(null,seq__11469_11511);if(temp__4092__auto___11522)
{var seq__11469_11523__$1 = temp__4092__auto___11522;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11469_11523__$1))
{var c__5632__auto___11524 = cljs.core.chunk_first.call(null,seq__11469_11523__$1);{
var G__11525 = cljs.core.chunk_rest.call(null,seq__11469_11523__$1);
var G__11526 = c__5632__auto___11524;
var G__11527 = cljs.core.count.call(null,c__5632__auto___11524);
var G__11528 = 0;
seq__11469_11511 = G__11525;
chunk__11470_11512 = G__11526;
count__11471_11513 = G__11527;
i__11472_11514 = G__11528;
continue;
}
} else
{var vec__11474_11529 = cljs.core.first.call(null,seq__11469_11523__$1);var ev__6290__auto___11530 = cljs.core.nth.call(null,vec__11474_11529,0,null);var func__6291__auto___11531 = cljs.core.nth.call(null,vec__11474_11529,1,null);lt.util.dom.on.call(null,e__6289__auto__,ev__6290__auto___11530,func__6291__auto___11531);
{
var G__11532 = cljs.core.next.call(null,seq__11469_11523__$1);
var G__11533 = null;
var G__11534 = 0;
var G__11535 = 0;
seq__11469_11511 = G__11532;
chunk__11470_11512 = G__11533;
count__11471_11513 = G__11534;
i__11472_11514 = G__11535;
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
lt.plugins.elm_light.linter.add_widget = (function add_widget(ed,res_id){var map__11476 = cljs.core.get_in.call(null,cljs.core.deref.call(null,ed),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linter-results","linter-results",4482067083),res_id], null));var map__11476__$1 = ((cljs.core.seq_QMARK_.call(null,map__11476))?cljs.core.apply.call(null,cljs.core.hash_map,map__11476):map__11476);var result = cljs.core.get.call(null,map__11476__$1,new cljs.core.Keyword(null,"result","result",4374444943));var mark = cljs.core.get.call(null,map__11476__$1,new cljs.core.Keyword(null,"mark","mark",1017248319));var ui = lt.plugins.elm_light.linter.inline_ui.call(null,ed,result);var from = mark.find().from;lt.objs.editor.__GT_cm_ed.call(null,ed).addWidget(from,ui,{"scrollIntoView": true});
return lt.util.dom.focus.call(null,ui);
});
lt.plugins.elm_light.linter.create_mark = (function create_mark(ed,p__11477){var map__11479 = p__11477;var map__11479__$1 = ((cljs.core.seq_QMARK_.call(null,map__11479))?cljs.core.apply.call(null,cljs.core.hash_map,map__11479):map__11479);var code_range = cljs.core.get.call(null,map__11479__$1,new cljs.core.Keyword(null,"code-range","code-range",3297446095));var category = cljs.core.get.call(null,map__11479__$1,new cljs.core.Keyword(null,"category","category",1064415344));var from = new cljs.core.Keyword(null,"from","from",1017056028).cljs$core$IFn$_invoke$arity$1(code_range);var to = ((!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"to","to",1013907949).cljs$core$IFn$_invoke$arity$1(code_range),from)))?new cljs.core.Keyword(null,"to","to",1013907949).cljs$core$IFn$_invoke$arity$1(code_range):cljs.core.assoc.call(null,from,new cljs.core.Keyword(null,"ch","ch",1013907415),(lt.objs.editor.line_length.call(null,ed,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(from)) - 1)));return lt.objs.editor.mark.call(null,ed,from,to,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",1004015509),[cljs.core.str("lint-"),cljs.core.str((function (){var or__4884__auto__ = cljs.core.name.call(null,category);if(cljs.core.truth_(or__4884__auto__))
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
lt.plugins.elm_light.linter.__BEH__clear_linter_results_BANG_ = (function __BEH__clear_linter_results_BANG_(ed){var seq__11486_11536 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"linter-results","linter-results",4482067083).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));var chunk__11487_11537 = null;var count__11488_11538 = 0;var i__11489_11539 = 0;while(true){
if((i__11489_11539 < count__11488_11538))
{var vec__11490_11540 = cljs.core._nth.call(null,chunk__11487_11537,i__11489_11539);var id_11541 = cljs.core.nth.call(null,vec__11490_11540,0,null);var res_11542 = cljs.core.nth.call(null,vec__11490_11540,1,null);var temp__4092__auto___11543 = new cljs.core.Keyword(null,"mark","mark",1017248319).cljs$core$IFn$_invoke$arity$1(res_11542);if(cljs.core.truth_(temp__4092__auto___11543))
{var m_11544 = temp__4092__auto___11543;m_11544.clear();
} else
{}
var temp__4092__auto___11545 = new cljs.core.Keyword(null,"widget","widget",4520824246).cljs$core$IFn$_invoke$arity$1(res_11542);if(cljs.core.truth_(temp__4092__auto___11545))
{var w_11546 = temp__4092__auto___11545;lt.util.dom.remove.call(null,w_11546);
} else
{}
{
var G__11547 = seq__11486_11536;
var G__11548 = chunk__11487_11537;
var G__11549 = count__11488_11538;
var G__11550 = (i__11489_11539 + 1);
seq__11486_11536 = G__11547;
chunk__11487_11537 = G__11548;
count__11488_11538 = G__11549;
i__11489_11539 = G__11550;
continue;
}
} else
{var temp__4092__auto___11551 = cljs.core.seq.call(null,seq__11486_11536);if(temp__4092__auto___11551)
{var seq__11486_11552__$1 = temp__4092__auto___11551;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11486_11552__$1))
{var c__5632__auto___11553 = cljs.core.chunk_first.call(null,seq__11486_11552__$1);{
var G__11554 = cljs.core.chunk_rest.call(null,seq__11486_11552__$1);
var G__11555 = c__5632__auto___11553;
var G__11556 = cljs.core.count.call(null,c__5632__auto___11553);
var G__11557 = 0;
seq__11486_11536 = G__11554;
chunk__11487_11537 = G__11555;
count__11488_11538 = G__11556;
i__11489_11539 = G__11557;
continue;
}
} else
{var vec__11491_11558 = cljs.core.first.call(null,seq__11486_11552__$1);var id_11559 = cljs.core.nth.call(null,vec__11491_11558,0,null);var res_11560 = cljs.core.nth.call(null,vec__11491_11558,1,null);var temp__4092__auto___11561__$1 = new cljs.core.Keyword(null,"mark","mark",1017248319).cljs$core$IFn$_invoke$arity$1(res_11560);if(cljs.core.truth_(temp__4092__auto___11561__$1))
{var m_11562 = temp__4092__auto___11561__$1;m_11562.clear();
} else
{}
var temp__4092__auto___11563__$1 = new cljs.core.Keyword(null,"widget","widget",4520824246).cljs$core$IFn$_invoke$arity$1(res_11560);if(cljs.core.truth_(temp__4092__auto___11563__$1))
{var w_11564 = temp__4092__auto___11563__$1;lt.util.dom.remove.call(null,w_11564);
} else
{}
{
var G__11565 = cljs.core.next.call(null,seq__11486_11552__$1);
var G__11566 = null;
var G__11567 = 0;
var G__11568 = 0;
seq__11486_11536 = G__11565;
chunk__11487_11537 = G__11566;
count__11488_11538 = G__11567;
i__11489_11539 = G__11568;
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
lt.plugins.elm_light.linter.find_current_lint_mark = (function find_current_lint_mark(ed){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__11492_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"linter","linter",4206213986),p1__11492_SHARP_.lttype);
}),lt.objs.editor.find_marks.call(null,ed,lt.objs.editor.__GT_cursor.call(null,ed))));
});
lt.plugins.elm_light.linter.get_widget_by_mark = (function get_widget_by_mark(ed,mark){return cljs.core.get_in.call(null,cljs.core.deref.call(null,ed),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linter-results","linter-results",4482067083),mark.ltlintid,new cljs.core.Keyword(null,"widget","widget",4520824246)], null));
});
lt.plugins.elm_light.linter.mark__GT_pos = (function mark__GT_pos(mark){var cm_pos = mark.find().from;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",1013907415),cm_pos.ch,new cljs.core.Keyword(null,"line","line",1017226086),cm_pos.line], null);
});
lt.plugins.elm_light.linter.get_all_lint_marks = (function get_all_lint_marks(ed){return cljs.core.sort_by.call(null,(function (p1__11494_SHARP_){return cljs.core.juxt.call(null,new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"ch","ch",1013907415)).call(null,lt.plugins.elm_light.linter.mark__GT_pos.call(null,p1__11494_SHARP_));
}),cljs.core.filter.call(null,(function (p1__11493_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"linter","linter",4206213986),p1__11493_SHARP_.lttype);
}),lt.objs.editor.__GT_cm_ed.call(null,ed).getAllMarks()));
});
lt.plugins.elm_light.linter.split_with_mark = (function split_with_mark(ed){var all_marks = lt.plugins.elm_light.linter.get_all_lint_marks.call(null,ed);var curr_mark = lt.plugins.elm_light.linter.find_current_lint_mark.call(null,ed);return cljs.core.split_with.call(null,((function (all_marks,curr_mark){
return (function (p1__11495_SHARP_){return !(cljs.core._EQ_.call(null,(cljs.core.truth_(curr_mark)?curr_mark.ltlintid:null),p1__11495_SHARP_.ltlintid));
});})(all_marks,curr_mark))
,all_marks);
});
lt.plugins.elm_light.linter.find_next_mark = (function find_next_mark(ed){var vec__11497 = lt.plugins.elm_light.linter.split_with_mark.call(null,ed);var ms1 = cljs.core.nth.call(null,vec__11497,0,null);var ms2 = cljs.core.nth.call(null,vec__11497,1,null);return cljs.core.first.call(null,cljs.core.into.call(null,cljs.core.vec.call(null,cljs.core.drop.call(null,1,ms2)),ms1));
});
lt.plugins.elm_light.linter.find_prev_mark = (function find_prev_mark(ed){var vec__11499 = lt.plugins.elm_light.linter.split_with_mark.call(null,ed);var ms1 = cljs.core.nth.call(null,vec__11499,0,null);var ms2 = cljs.core.nth.call(null,vec__11499,1,null);return cljs.core.first.call(null,cljs.core.into.call(null,cljs.core.reverse.call(null,cljs.core.drop.call(null,1,ms2)),ms1));
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
lt.plugins.elm_light.test.deps__GT_named = (function deps__GT_named(deps){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__11707){var vec__11708 = p__11707;var k = cljs.core.nth.call(null,vec__11708,0,null);var v = cljs.core.nth.call(null,vec__11708,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.elm_light.utils.nskw__GT_name.call(null,k),v], null);
}),deps));
});
lt.plugins.elm_light.test.__GT_test_config = (function __GT_test_config(project_cfg){return cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.assoc.call(null,cljs.core.update_in.call(null,project_cfg,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-directories","source-directories",4475397259)], null),lt.plugins.elm_light.test.__GT_test_src_dirs),new cljs.core.Keyword(null,"exposed-modules","exposed-modules",4185867084),cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependencies","dependencies",1517678747)], null),(function (p1__11709_SHARP_){return cljs.core.merge.call(null,p1__11709_SHARP_,lt.plugins.elm_light.test.default_test_deps);
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
return (function (p1__11710_SHARP_){return cljs.core.println.call(null,[cljs.core.str("Test package install: "),cljs.core.str(p1__11710_SHARP_)].join(''));
});})(args,proc))
);
proc.stderr.on("data",((function (args,proc){
return (function (p1__11711_SHARP_){return lt.objs.console.error.call(null,[cljs.core.str(p1__11711_SHARP_)].join(''));
});})(args,proc))
);
proc.on("exit",((function (args,proc){
return (function (p1__11712_SHARP_){if(cljs.core._EQ_.call(null,p1__11712_SHARP_,0))
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
}catch (e11258){var e = e11258;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,e.message], null);
}});
/**
* Format file or all elm files in dir using elm-format.
* If successful returns [true nil]
* If errors returns [false err]
*/
lt.plugins.elm_light.format.format_path = (function format_path(cwd,path){try{require("child_process").execSync([cljs.core.str("elm-format --yes "),cljs.core.str(path)].join(''),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cwd","cwd",1014003170),cwd,new cljs.core.Keyword(null,"stdio","stdio",1123664379),"pipe"], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);
}catch (e11260){var e = e11260;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,e.message], null);
}});
lt.plugins.elm_light.format.handle_format_error = (function handle_format_error(err){lt.objs.notifos.set_msg_BANG_.call(null,"Elm format reported errors. See console for details",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),"error",new cljs.core.Keyword(null,"timeout","timeout",3994960083),5000], null));
return lt.objs.console.error.call(null,err);
});
lt.plugins.elm_light.format.__BEH__elm_format = (function __BEH__elm_format(ed){var temp__4092__auto__ = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));if(cljs.core.truth_(temp__4092__auto__))
{var path = temp__4092__auto__;var pos = lt.objs.editor.__GT_cursor.call(null,ed);var vec__11262 = lt.plugins.elm_light.format.format_path.call(null,lt.plugins.elm_light.utils.project_path.call(null,path),path);var ok_QMARK_ = cljs.core.nth.call(null,vec__11262,0,null);var res = cljs.core.nth.call(null,vec__11262,1,null);if(cljs.core.truth_(ok_QMARK_))
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
{var map__11265 = temp__4092__auto__;var map__11265__$1 = ((cljs.core.seq_QMARK_.call(null,map__11265))?cljs.core.apply.call(null,cljs.core.hash_map,map__11265):map__11265);var to = cljs.core.get.call(null,map__11265__$1,new cljs.core.Keyword(null,"to","to",1013907949));var from = cljs.core.get.call(null,map__11265__$1,new cljs.core.Keyword(null,"from","from",1017056028));var vec__11266 = lt.plugins.elm_light.format.format_input.call(null,cwd,lt.objs.editor.range.call(null,ed,from,to));var ok_QMARK_ = cljs.core.nth.call(null,vec__11266,0,null);var res = cljs.core.nth.call(null,vec__11266,1,null);if(cljs.core.truth_(ok_QMARK_))
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
lt.plugins.elm_light.format.__BEH__elm_format_buffer = (function __BEH__elm_format_buffer(ed){var pos = lt.objs.editor.__GT_cursor.call(null,ed);var vec__11268 = lt.plugins.elm_light.format.format_input.call(null,lt.plugins.elm_light.utils.project_path.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)))),lt.objs.editor.__GT_val.call(null,ed));var ok_QMARK_ = cljs.core.nth.call(null,vec__11268,0,null);var res = cljs.core.nth.call(null,vec__11268,1,null);if(cljs.core.truth_(ok_QMARK_))
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