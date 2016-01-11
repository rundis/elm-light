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
{var o = (function (){var obj11148 = {};return obj11148;
})();var seq__11149_11162 = cljs.core.seq.call(null,obj);var chunk__11150_11163 = null;var count__11151_11164 = 0;var i__11152_11165 = 0;while(true){
if((i__11152_11165 < count__11151_11164))
{var vec__11153_11166 = cljs.core._nth.call(null,chunk__11150_11163,i__11152_11165);var k_11167 = cljs.core.nth.call(null,vec__11153_11166,0,null);var v_11168 = cljs.core.nth.call(null,vec__11153_11166,1,null);(o[cljs.core.name.call(null,k_11167)] = js_props.call(null,v_11168));
{
var G__11169 = seq__11149_11162;
var G__11170 = chunk__11150_11163;
var G__11171 = count__11151_11164;
var G__11172 = (i__11152_11165 + 1);
seq__11149_11162 = G__11169;
chunk__11150_11163 = G__11170;
count__11151_11164 = G__11171;
i__11152_11165 = G__11172;
continue;
}
} else
{var temp__4092__auto___11173 = cljs.core.seq.call(null,seq__11149_11162);if(temp__4092__auto___11173)
{var seq__11149_11174__$1 = temp__4092__auto___11173;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11149_11174__$1))
{var c__5634__auto___11175 = cljs.core.chunk_first.call(null,seq__11149_11174__$1);{
var G__11176 = cljs.core.chunk_rest.call(null,seq__11149_11174__$1);
var G__11177 = c__5634__auto___11175;
var G__11178 = cljs.core.count.call(null,c__5634__auto___11175);
var G__11179 = 0;
seq__11149_11162 = G__11176;
chunk__11150_11163 = G__11177;
count__11151_11164 = G__11178;
i__11152_11165 = G__11179;
continue;
}
} else
{var vec__11154_11180 = cljs.core.first.call(null,seq__11149_11174__$1);var k_11181 = cljs.core.nth.call(null,vec__11154_11180,0,null);var v_11182 = cljs.core.nth.call(null,vec__11154_11180,1,null);(o[cljs.core.name.call(null,k_11181)] = js_props.call(null,v_11182));
{
var G__11183 = cljs.core.next.call(null,seq__11149_11174__$1);
var G__11184 = null;
var G__11185 = 0;
var G__11186 = 0;
seq__11149_11162 = G__11183;
chunk__11150_11163 = G__11184;
count__11151_11164 = G__11185;
i__11152_11165 = G__11186;
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
quiescent.component = (function component(renderer){var react_component = React.createClass({"render": (function (){var this$ = this;var _STAR_component_STAR_11156 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return cljs.core.apply.call(null,renderer,(this$.props["value"]),(this$.props["statics"]));
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11156;
}}), "shouldComponentUpdate": (function (next_props,_){var this$ = this;return cljs.core.not_EQ_.call(null,(this$.props["value"]),(next_props["value"]));
})});return ((function (react_component){
return (function() { 
var G__11187__delegate = function (value,static_args){return react_component.call(null,{"statics": static_args, "value": value});
};
var G__11187 = function (value,var_args){
var static_args = null;if (arguments.length > 1) {
  static_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__11187__delegate.call(this,value,static_args);};
G__11187.cljs$lang$maxFixedArity = 1;
G__11187.cljs$lang$applyTo = (function (arglist__11188){
var value = cljs.core.first(arglist__11188);
var static_args = cljs.core.rest(arglist__11188);
return G__11187__delegate(value,static_args);
});
G__11187.cljs$core$IFn$_invoke$arity$variadic = G__11187__delegate;
return G__11187;
})()
;
;})(react_component))
});
/**
* Wrapper component used to mix-in lifecycle access
*/
quiescent.WrapperComponent = React.createClass({"componentWillUnmount": (function (){var this$ = this;var temp__4092__auto__ = (this$.props["onWillUnmount"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_11161 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null);
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11161;
}} else
{return null;
}
}), "componentWillUpdate": (function (_,___$1){var this$ = this;var temp__4092__auto__ = (this$.props["onWillUpdate"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_11160 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null);
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11160;
}} else
{return null;
}
}), "componentWillMount": (function (){var this$ = this;var temp__4092__auto__ = (this$.props["onWillMount"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_11159 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null);
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11159;
}} else
{return null;
}
}), "componentDidMount": (function (){var this$ = this;var temp__4092__auto__ = (this$.props["onMount"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_11158 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null,this$.getDOMNode());
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11158;
}} else
{return null;
}
}), "componentDidUpdate": (function (prev_props,prev_state){var this$ = this;var temp__4092__auto__ = (this$.props["onUpdate"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_11157 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null,this$.getDOMNode());
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11157;
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
var wrapper__delegate = function (child,kvs){var props = quiescent.js_props.call(null,cljs.core.apply.call(null,cljs.core.array_map,new cljs.core.Keyword(null,"wrappee","wrappee",2609412088),child,kvs));var temp__4092__auto___11189 = (child.props["key"]);if(cljs.core.truth_(temp__4092__auto___11189))
{var key_11190 = temp__4092__auto___11189;(props["key"] = key_11190);
} else
{}
return quiescent.WrapperComponent.call(null,props);
};
var wrapper = function (child,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrapper__delegate.call(this,child,kvs);};
wrapper.cljs$lang$maxFixedArity = 1;
wrapper.cljs$lang$applyTo = (function (arglist__11191){
var child = cljs.core.first(arglist__11191);
var kvs = cljs.core.rest(arglist__11191);
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
var a__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__7573_8521 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__7574_8522 = null;var count__7575_8523 = 0;var i__7576_8524 = 0;while(true){
if((i__7576_8524 < count__7575_8523))
{var arg__6573__auto___8525 = cljs.core._nth.call(null,chunk__7574_8522,i__7576_8524);a__6572__auto__.push(arg__6573__auto___8525);
{
var G__8526 = seq__7573_8521;
var G__8527 = chunk__7574_8522;
var G__8528 = count__7575_8523;
var G__8529 = (i__7576_8524 + 1);
seq__7573_8521 = G__8526;
chunk__7574_8522 = G__8527;
count__7575_8523 = G__8528;
i__7576_8524 = G__8529;
continue;
}
} else
{var temp__4092__auto___8530 = cljs.core.seq.call(null,seq__7573_8521);if(temp__4092__auto___8530)
{var seq__7573_8531__$1 = temp__4092__auto___8530;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7573_8531__$1))
{var c__5634__auto___8532 = cljs.core.chunk_first.call(null,seq__7573_8531__$1);{
var G__8533 = cljs.core.chunk_rest.call(null,seq__7573_8531__$1);
var G__8534 = c__5634__auto___8532;
var G__8535 = cljs.core.count.call(null,c__5634__auto___8532);
var G__8536 = 0;
seq__7573_8521 = G__8533;
chunk__7574_8522 = G__8534;
count__7575_8523 = G__8535;
i__7576_8524 = G__8536;
continue;
}
} else
{var arg__6573__auto___8537 = cljs.core.first.call(null,seq__7573_8531__$1);a__6572__auto__.push(arg__6573__auto___8537);
{
var G__8538 = cljs.core.next.call(null,seq__7573_8531__$1);
var G__8539 = null;
var G__8540 = 0;
var G__8541 = 0;
seq__7573_8521 = G__8538;
chunk__7574_8522 = G__8539;
count__7575_8523 = G__8540;
i__7576_8524 = G__8541;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.a.apply(null,a__6572__auto__);
};
var a = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return a__delegate.call(this,args__6571__auto__);};
a.cljs$lang$maxFixedArity = 0;
a.cljs$lang$applyTo = (function (arglist__8542){
var args__6571__auto__ = cljs.core.seq(arglist__8542);
return a__delegate(args__6571__auto__);
});
a.cljs$core$IFn$_invoke$arity$variadic = a__delegate;
return a;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.abbr = (function() { 
var abbr__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__7581_8543 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__7582_8544 = null;var count__7583_8545 = 0;var i__7584_8546 = 0;while(true){
if((i__7584_8546 < count__7583_8545))
{var arg__6573__auto___8547 = cljs.core._nth.call(null,chunk__7582_8544,i__7584_8546);a__6572__auto__.push(arg__6573__auto___8547);
{
var G__8548 = seq__7581_8543;
var G__8549 = chunk__7582_8544;
var G__8550 = count__7583_8545;
var G__8551 = (i__7584_8546 + 1);
seq__7581_8543 = G__8548;
chunk__7582_8544 = G__8549;
count__7583_8545 = G__8550;
i__7584_8546 = G__8551;
continue;
}
} else
{var temp__4092__auto___8552 = cljs.core.seq.call(null,seq__7581_8543);if(temp__4092__auto___8552)
{var seq__7581_8553__$1 = temp__4092__auto___8552;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7581_8553__$1))
{var c__5634__auto___8554 = cljs.core.chunk_first.call(null,seq__7581_8553__$1);{
var G__8555 = cljs.core.chunk_rest.call(null,seq__7581_8553__$1);
var G__8556 = c__5634__auto___8554;
var G__8557 = cljs.core.count.call(null,c__5634__auto___8554);
var G__8558 = 0;
seq__7581_8543 = G__8555;
chunk__7582_8544 = G__8556;
count__7583_8545 = G__8557;
i__7584_8546 = G__8558;
continue;
}
} else
{var arg__6573__auto___8559 = cljs.core.first.call(null,seq__7581_8553__$1);a__6572__auto__.push(arg__6573__auto___8559);
{
var G__8560 = cljs.core.next.call(null,seq__7581_8553__$1);
var G__8561 = null;
var G__8562 = 0;
var G__8563 = 0;
seq__7581_8543 = G__8560;
chunk__7582_8544 = G__8561;
count__7583_8545 = G__8562;
i__7584_8546 = G__8563;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.abbr.apply(null,a__6572__auto__);
};
var abbr = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return abbr__delegate.call(this,args__6571__auto__);};
abbr.cljs$lang$maxFixedArity = 0;
abbr.cljs$lang$applyTo = (function (arglist__8564){
var args__6571__auto__ = cljs.core.seq(arglist__8564);
return abbr__delegate(args__6571__auto__);
});
abbr.cljs$core$IFn$_invoke$arity$variadic = abbr__delegate;
return abbr;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.address = (function() { 
var address__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__7589_8565 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__7590_8566 = null;var count__7591_8567 = 0;var i__7592_8568 = 0;while(true){
if((i__7592_8568 < count__7591_8567))
{var arg__6573__auto___8569 = cljs.core._nth.call(null,chunk__7590_8566,i__7592_8568);a__6572__auto__.push(arg__6573__auto___8569);
{
var G__8570 = seq__7589_8565;
var G__8571 = chunk__7590_8566;
var G__8572 = count__7591_8567;
var G__8573 = (i__7592_8568 + 1);
seq__7589_8565 = G__8570;
chunk__7590_8566 = G__8571;
count__7591_8567 = G__8572;
i__7592_8568 = G__8573;
continue;
}
} else
{var temp__4092__auto___8574 = cljs.core.seq.call(null,seq__7589_8565);if(temp__4092__auto___8574)
{var seq__7589_8575__$1 = temp__4092__auto___8574;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7589_8575__$1))
{var c__5634__auto___8576 = cljs.core.chunk_first.call(null,seq__7589_8575__$1);{
var G__8577 = cljs.core.chunk_rest.call(null,seq__7589_8575__$1);
var G__8578 = c__5634__auto___8576;
var G__8579 = cljs.core.count.call(null,c__5634__auto___8576);
var G__8580 = 0;
seq__7589_8565 = G__8577;
chunk__7590_8566 = G__8578;
count__7591_8567 = G__8579;
i__7592_8568 = G__8580;
continue;
}
} else
{var arg__6573__auto___8581 = cljs.core.first.call(null,seq__7589_8575__$1);a__6572__auto__.push(arg__6573__auto___8581);
{
var G__8582 = cljs.core.next.call(null,seq__7589_8575__$1);
var G__8583 = null;
var G__8584 = 0;
var G__8585 = 0;
seq__7589_8565 = G__8582;
chunk__7590_8566 = G__8583;
count__7591_8567 = G__8584;
i__7592_8568 = G__8585;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.address.apply(null,a__6572__auto__);
};
var address = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return address__delegate.call(this,args__6571__auto__);};
address.cljs$lang$maxFixedArity = 0;
address.cljs$lang$applyTo = (function (arglist__8586){
var args__6571__auto__ = cljs.core.seq(arglist__8586);
return address__delegate(args__6571__auto__);
});
address.cljs$core$IFn$_invoke$arity$variadic = address__delegate;
return address;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.area = (function() { 
var area__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__7597_8587 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__7598_8588 = null;var count__7599_8589 = 0;var i__7600_8590 = 0;while(true){
if((i__7600_8590 < count__7599_8589))
{var arg__6573__auto___8591 = cljs.core._nth.call(null,chunk__7598_8588,i__7600_8590);a__6572__auto__.push(arg__6573__auto___8591);
{
var G__8592 = seq__7597_8587;
var G__8593 = chunk__7598_8588;
var G__8594 = count__7599_8589;
var G__8595 = (i__7600_8590 + 1);
seq__7597_8587 = G__8592;
chunk__7598_8588 = G__8593;
count__7599_8589 = G__8594;
i__7600_8590 = G__8595;
continue;
}
} else
{var temp__4092__auto___8596 = cljs.core.seq.call(null,seq__7597_8587);if(temp__4092__auto___8596)
{var seq__7597_8597__$1 = temp__4092__auto___8596;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7597_8597__$1))
{var c__5634__auto___8598 = cljs.core.chunk_first.call(null,seq__7597_8597__$1);{
var G__8599 = cljs.core.chunk_rest.call(null,seq__7597_8597__$1);
var G__8600 = c__5634__auto___8598;
var G__8601 = cljs.core.count.call(null,c__5634__auto___8598);
var G__8602 = 0;
seq__7597_8587 = G__8599;
chunk__7598_8588 = G__8600;
count__7599_8589 = G__8601;
i__7600_8590 = G__8602;
continue;
}
} else
{var arg__6573__auto___8603 = cljs.core.first.call(null,seq__7597_8597__$1);a__6572__auto__.push(arg__6573__auto___8603);
{
var G__8604 = cljs.core.next.call(null,seq__7597_8597__$1);
var G__8605 = null;
var G__8606 = 0;
var G__8607 = 0;
seq__7597_8587 = G__8604;
chunk__7598_8588 = G__8605;
count__7599_8589 = G__8606;
i__7600_8590 = G__8607;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.area.apply(null,a__6572__auto__);
};
var area = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return area__delegate.call(this,args__6571__auto__);};
area.cljs$lang$maxFixedArity = 0;
area.cljs$lang$applyTo = (function (arglist__8608){
var args__6571__auto__ = cljs.core.seq(arglist__8608);
return area__delegate(args__6571__auto__);
});
area.cljs$core$IFn$_invoke$arity$variadic = area__delegate;
return area;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.article = (function() { 
var article__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__7605_8609 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__7606_8610 = null;var count__7607_8611 = 0;var i__7608_8612 = 0;while(true){
if((i__7608_8612 < count__7607_8611))
{var arg__6573__auto___8613 = cljs.core._nth.call(null,chunk__7606_8610,i__7608_8612);a__6572__auto__.push(arg__6573__auto___8613);
{
var G__8614 = seq__7605_8609;
var G__8615 = chunk__7606_8610;
var G__8616 = count__7607_8611;
var G__8617 = (i__7608_8612 + 1);
seq__7605_8609 = G__8614;
chunk__7606_8610 = G__8615;
count__7607_8611 = G__8616;
i__7608_8612 = G__8617;
continue;
}
} else
{var temp__4092__auto___8618 = cljs.core.seq.call(null,seq__7605_8609);if(temp__4092__auto___8618)
{var seq__7605_8619__$1 = temp__4092__auto___8618;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7605_8619__$1))
{var c__5634__auto___8620 = cljs.core.chunk_first.call(null,seq__7605_8619__$1);{
var G__8621 = cljs.core.chunk_rest.call(null,seq__7605_8619__$1);
var G__8622 = c__5634__auto___8620;
var G__8623 = cljs.core.count.call(null,c__5634__auto___8620);
var G__8624 = 0;
seq__7605_8609 = G__8621;
chunk__7606_8610 = G__8622;
count__7607_8611 = G__8623;
i__7608_8612 = G__8624;
continue;
}
} else
{var arg__6573__auto___8625 = cljs.core.first.call(null,seq__7605_8619__$1);a__6572__auto__.push(arg__6573__auto___8625);
{
var G__8626 = cljs.core.next.call(null,seq__7605_8619__$1);
var G__8627 = null;
var G__8628 = 0;
var G__8629 = 0;
seq__7605_8609 = G__8626;
chunk__7606_8610 = G__8627;
count__7607_8611 = G__8628;
i__7608_8612 = G__8629;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.article.apply(null,a__6572__auto__);
};
var article = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return article__delegate.call(this,args__6571__auto__);};
article.cljs$lang$maxFixedArity = 0;
article.cljs$lang$applyTo = (function (arglist__8630){
var args__6571__auto__ = cljs.core.seq(arglist__8630);
return article__delegate(args__6571__auto__);
});
article.cljs$core$IFn$_invoke$arity$variadic = article__delegate;
return article;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.aside = (function() { 
var aside__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__7613_8631 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__7614_8632 = null;var count__7615_8633 = 0;var i__7616_8634 = 0;while(true){
if((i__7616_8634 < count__7615_8633))
{var arg__6573__auto___8635 = cljs.core._nth.call(null,chunk__7614_8632,i__7616_8634);a__6572__auto__.push(arg__6573__auto___8635);
{
var G__8636 = seq__7613_8631;
var G__8637 = chunk__7614_8632;
var G__8638 = count__7615_8633;
var G__8639 = (i__7616_8634 + 1);
seq__7613_8631 = G__8636;
chunk__7614_8632 = G__8637;
count__7615_8633 = G__8638;
i__7616_8634 = G__8639;
continue;
}
} else
{var temp__4092__auto___8640 = cljs.core.seq.call(null,seq__7613_8631);if(temp__4092__auto___8640)
{var seq__7613_8641__$1 = temp__4092__auto___8640;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7613_8641__$1))
{var c__5634__auto___8642 = cljs.core.chunk_first.call(null,seq__7613_8641__$1);{
var G__8643 = cljs.core.chunk_rest.call(null,seq__7613_8641__$1);
var G__8644 = c__5634__auto___8642;
var G__8645 = cljs.core.count.call(null,c__5634__auto___8642);
var G__8646 = 0;
seq__7613_8631 = G__8643;
chunk__7614_8632 = G__8644;
count__7615_8633 = G__8645;
i__7616_8634 = G__8646;
continue;
}
} else
{var arg__6573__auto___8647 = cljs.core.first.call(null,seq__7613_8641__$1);a__6572__auto__.push(arg__6573__auto___8647);
{
var G__8648 = cljs.core.next.call(null,seq__7613_8641__$1);
var G__8649 = null;
var G__8650 = 0;
var G__8651 = 0;
seq__7613_8631 = G__8648;
chunk__7614_8632 = G__8649;
count__7615_8633 = G__8650;
i__7616_8634 = G__8651;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.aside.apply(null,a__6572__auto__);
};
var aside = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return aside__delegate.call(this,args__6571__auto__);};
aside.cljs$lang$maxFixedArity = 0;
aside.cljs$lang$applyTo = (function (arglist__8652){
var args__6571__auto__ = cljs.core.seq(arglist__8652);
return aside__delegate(args__6571__auto__);
});
aside.cljs$core$IFn$_invoke$arity$variadic = aside__delegate;
return aside;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.audio = (function() { 
var audio__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__7621_8653 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__7622_8654 = null;var count__7623_8655 = 0;var i__7624_8656 = 0;while(true){
if((i__7624_8656 < count__7623_8655))
{var arg__6573__auto___8657 = cljs.core._nth.call(null,chunk__7622_8654,i__7624_8656);a__6572__auto__.push(arg__6573__auto___8657);
{
var G__8658 = seq__7621_8653;
var G__8659 = chunk__7622_8654;
var G__8660 = count__7623_8655;
var G__8661 = (i__7624_8656 + 1);
seq__7621_8653 = G__8658;
chunk__7622_8654 = G__8659;
count__7623_8655 = G__8660;
i__7624_8656 = G__8661;
continue;
}
} else
{var temp__4092__auto___8662 = cljs.core.seq.call(null,seq__7621_8653);if(temp__4092__auto___8662)
{var seq__7621_8663__$1 = temp__4092__auto___8662;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7621_8663__$1))
{var c__5634__auto___8664 = cljs.core.chunk_first.call(null,seq__7621_8663__$1);{
var G__8665 = cljs.core.chunk_rest.call(null,seq__7621_8663__$1);
var G__8666 = c__5634__auto___8664;
var G__8667 = cljs.core.count.call(null,c__5634__auto___8664);
var G__8668 = 0;
seq__7621_8653 = G__8665;
chunk__7622_8654 = G__8666;
count__7623_8655 = G__8667;
i__7624_8656 = G__8668;
continue;
}
} else
{var arg__6573__auto___8669 = cljs.core.first.call(null,seq__7621_8663__$1);a__6572__auto__.push(arg__6573__auto___8669);
{
var G__8670 = cljs.core.next.call(null,seq__7621_8663__$1);
var G__8671 = null;
var G__8672 = 0;
var G__8673 = 0;
seq__7621_8653 = G__8670;
chunk__7622_8654 = G__8671;
count__7623_8655 = G__8672;
i__7624_8656 = G__8673;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.audio.apply(null,a__6572__auto__);
};
var audio = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return audio__delegate.call(this,args__6571__auto__);};
audio.cljs$lang$maxFixedArity = 0;
audio.cljs$lang$applyTo = (function (arglist__8674){
var args__6571__auto__ = cljs.core.seq(arglist__8674);
return audio__delegate(args__6571__auto__);
});
audio.cljs$core$IFn$_invoke$arity$variadic = audio__delegate;
return audio;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.b = (function() { 
var b__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__7629_8675 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__7630_8676 = null;var count__7631_8677 = 0;var i__7632_8678 = 0;while(true){
if((i__7632_8678 < count__7631_8677))
{var arg__6573__auto___8679 = cljs.core._nth.call(null,chunk__7630_8676,i__7632_8678);a__6572__auto__.push(arg__6573__auto___8679);
{
var G__8680 = seq__7629_8675;
var G__8681 = chunk__7630_8676;
var G__8682 = count__7631_8677;
var G__8683 = (i__7632_8678 + 1);
seq__7629_8675 = G__8680;
chunk__7630_8676 = G__8681;
count__7631_8677 = G__8682;
i__7632_8678 = G__8683;
continue;
}
} else
{var temp__4092__auto___8684 = cljs.core.seq.call(null,seq__7629_8675);if(temp__4092__auto___8684)
{var seq__7629_8685__$1 = temp__4092__auto___8684;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7629_8685__$1))
{var c__5634__auto___8686 = cljs.core.chunk_first.call(null,seq__7629_8685__$1);{
var G__8687 = cljs.core.chunk_rest.call(null,seq__7629_8685__$1);
var G__8688 = c__5634__auto___8686;
var G__8689 = cljs.core.count.call(null,c__5634__auto___8686);
var G__8690 = 0;
seq__7629_8675 = G__8687;
chunk__7630_8676 = G__8688;
count__7631_8677 = G__8689;
i__7632_8678 = G__8690;
continue;
}
} else
{var arg__6573__auto___8691 = cljs.core.first.call(null,seq__7629_8685__$1);a__6572__auto__.push(arg__6573__auto___8691);
{
var G__8692 = cljs.core.next.call(null,seq__7629_8685__$1);
var G__8693 = null;
var G__8694 = 0;
var G__8695 = 0;
seq__7629_8675 = G__8692;
chunk__7630_8676 = G__8693;
count__7631_8677 = G__8694;
i__7632_8678 = G__8695;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.b.apply(null,a__6572__auto__);
};
var b = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return b__delegate.call(this,args__6571__auto__);};
b.cljs$lang$maxFixedArity = 0;
b.cljs$lang$applyTo = (function (arglist__8696){
var args__6571__auto__ = cljs.core.seq(arglist__8696);
return b__delegate(args__6571__auto__);
});
b.cljs$core$IFn$_invoke$arity$variadic = b__delegate;
return b;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.base = (function() { 
var base__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__7637_8697 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__7638_8698 = null;var count__7639_8699 = 0;var i__7640_8700 = 0;while(true){
if((i__7640_8700 < count__7639_8699))
{var arg__6573__auto___8701 = cljs.core._nth.call(null,chunk__7638_8698,i__7640_8700);a__6572__auto__.push(arg__6573__auto___8701);
{
var G__8702 = seq__7637_8697;
var G__8703 = chunk__7638_8698;
var G__8704 = count__7639_8699;
var G__8705 = (i__7640_8700 + 1);
seq__7637_8697 = G__8702;
chunk__7638_8698 = G__8703;
count__7639_8699 = G__8704;
i__7640_8700 = G__8705;
continue;
}
} else
{var temp__4092__auto___8706 = cljs.core.seq.call(null,seq__7637_8697);if(temp__4092__auto___8706)
{var seq__7637_8707__$1 = temp__4092__auto___8706;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7637_8707__$1))
{var c__5634__auto___8708 = cljs.core.chunk_first.call(null,seq__7637_8707__$1);{
var G__8709 = cljs.core.chunk_rest.call(null,seq__7637_8707__$1);
var G__8710 = c__5634__auto___8708;
var G__8711 = cljs.core.count.call(null,c__5634__auto___8708);
var G__8712 = 0;
seq__7637_8697 = G__8709;
chunk__7638_8698 = G__8710;
count__7639_8699 = G__8711;
i__7640_8700 = G__8712;
continue;
}
} else
{var arg__6573__auto___8713 = cljs.core.first.call(null,seq__7637_8707__$1);a__6572__auto__.push(arg__6573__auto___8713);
{
var G__8714 = cljs.core.next.call(null,seq__7637_8707__$1);
var G__8715 = null;
var G__8716 = 0;
var G__8717 = 0;
seq__7637_8697 = G__8714;
chunk__7638_8698 = G__8715;
count__7639_8699 = G__8716;
i__7640_8700 = G__8717;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.base.apply(null,a__6572__auto__);
};
var base = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return base__delegate.call(this,args__6571__auto__);};
base.cljs$lang$maxFixedArity = 0;
base.cljs$lang$applyTo = (function (arglist__8718){
var args__6571__auto__ = cljs.core.seq(arglist__8718);
return base__delegate(args__6571__auto__);
});
base.cljs$core$IFn$_invoke$arity$variadic = base__delegate;
return base;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.bdi = (function() { 
var bdi__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__7645_8719 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__7646_8720 = null;var count__7647_8721 = 0;var i__7648_8722 = 0;while(true){
if((i__7648_8722 < count__7647_8721))
{var arg__6573__auto___8723 = cljs.core._nth.call(null,chunk__7646_8720,i__7648_8722);a__6572__auto__.push(arg__6573__auto___8723);
{
var G__8724 = seq__7645_8719;
var G__8725 = chunk__7646_8720;
var G__8726 = count__7647_8721;
var G__8727 = (i__7648_8722 + 1);
seq__7645_8719 = G__8724;
chunk__7646_8720 = G__8725;
count__7647_8721 = G__8726;
i__7648_8722 = G__8727;
continue;
}
} else
{var temp__4092__auto___8728 = cljs.core.seq.call(null,seq__7645_8719);if(temp__4092__auto___8728)
{var seq__7645_8729__$1 = temp__4092__auto___8728;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7645_8729__$1))
{var c__5634__auto___8730 = cljs.core.chunk_first.call(null,seq__7645_8729__$1);{
var G__8731 = cljs.core.chunk_rest.call(null,seq__7645_8729__$1);
var G__8732 = c__5634__auto___8730;
var G__8733 = cljs.core.count.call(null,c__5634__auto___8730);
var G__8734 = 0;
seq__7645_8719 = G__8731;
chunk__7646_8720 = G__8732;
count__7647_8721 = G__8733;
i__7648_8722 = G__8734;
continue;
}
} else
{var arg__6573__auto___8735 = cljs.core.first.call(null,seq__7645_8729__$1);a__6572__auto__.push(arg__6573__auto___8735);
{
var G__8736 = cljs.core.next.call(null,seq__7645_8729__$1);
var G__8737 = null;
var G__8738 = 0;
var G__8739 = 0;
seq__7645_8719 = G__8736;
chunk__7646_8720 = G__8737;
count__7647_8721 = G__8738;
i__7648_8722 = G__8739;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.bdi.apply(null,a__6572__auto__);
};
var bdi = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return bdi__delegate.call(this,args__6571__auto__);};
bdi.cljs$lang$maxFixedArity = 0;
bdi.cljs$lang$applyTo = (function (arglist__8740){
var args__6571__auto__ = cljs.core.seq(arglist__8740);
return bdi__delegate(args__6571__auto__);
});
bdi.cljs$core$IFn$_invoke$arity$variadic = bdi__delegate;
return bdi;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.bdo = (function() { 
var bdo__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__7653_8741 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__7654_8742 = null;var count__7655_8743 = 0;var i__7656_8744 = 0;while(true){
if((i__7656_8744 < count__7655_8743))
{var arg__6573__auto___8745 = cljs.core._nth.call(null,chunk__7654_8742,i__7656_8744);a__6572__auto__.push(arg__6573__auto___8745);
{
var G__8746 = seq__7653_8741;
var G__8747 = chunk__7654_8742;
var G__8748 = count__7655_8743;
var G__8749 = (i__7656_8744 + 1);
seq__7653_8741 = G__8746;
chunk__7654_8742 = G__8747;
count__7655_8743 = G__8748;
i__7656_8744 = G__8749;
continue;
}
} else
{var temp__4092__auto___8750 = cljs.core.seq.call(null,seq__7653_8741);if(temp__4092__auto___8750)
{var seq__7653_8751__$1 = temp__4092__auto___8750;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7653_8751__$1))
{var c__5634__auto___8752 = cljs.core.chunk_first.call(null,seq__7653_8751__$1);{
var G__8753 = cljs.core.chunk_rest.call(null,seq__7653_8751__$1);
var G__8754 = c__5634__auto___8752;
var G__8755 = cljs.core.count.call(null,c__5634__auto___8752);
var G__8756 = 0;
seq__7653_8741 = G__8753;
chunk__7654_8742 = G__8754;
count__7655_8743 = G__8755;
i__7656_8744 = G__8756;
continue;
}
} else
{var arg__6573__auto___8757 = cljs.core.first.call(null,seq__7653_8751__$1);a__6572__auto__.push(arg__6573__auto___8757);
{
var G__8758 = cljs.core.next.call(null,seq__7653_8751__$1);
var G__8759 = null;
var G__8760 = 0;
var G__8761 = 0;
seq__7653_8741 = G__8758;
chunk__7654_8742 = G__8759;
count__7655_8743 = G__8760;
i__7656_8744 = G__8761;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.bdo.apply(null,a__6572__auto__);
};
var bdo = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return bdo__delegate.call(this,args__6571__auto__);};
bdo.cljs$lang$maxFixedArity = 0;
bdo.cljs$lang$applyTo = (function (arglist__8762){
var args__6571__auto__ = cljs.core.seq(arglist__8762);
return bdo__delegate(args__6571__auto__);
});
bdo.cljs$core$IFn$_invoke$arity$variadic = bdo__delegate;
return bdo;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.big = (function() { 
var big__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__7661_8763 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__7662_8764 = null;var count__7663_8765 = 0;var i__7664_8766 = 0;while(true){
if((i__7664_8766 < count__7663_8765))
{var arg__6573__auto___8767 = cljs.core._nth.call(null,chunk__7662_8764,i__7664_8766);a__6572__auto__.push(arg__6573__auto___8767);
{
var G__8768 = seq__7661_8763;
var G__8769 = chunk__7662_8764;
var G__8770 = count__7663_8765;
var G__8771 = (i__7664_8766 + 1);
seq__7661_8763 = G__8768;
chunk__7662_8764 = G__8769;
count__7663_8765 = G__8770;
i__7664_8766 = G__8771;
continue;
}
} else
{var temp__4092__auto___8772 = cljs.core.seq.call(null,seq__7661_8763);if(temp__4092__auto___8772)
{var seq__7661_8773__$1 = temp__4092__auto___8772;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7661_8773__$1))
{var c__5634__auto___8774 = cljs.core.chunk_first.call(null,seq__7661_8773__$1);{
var G__8775 = cljs.core.chunk_rest.call(null,seq__7661_8773__$1);
var G__8776 = c__5634__auto___8774;
var G__8777 = cljs.core.count.call(null,c__5634__auto___8774);
var G__8778 = 0;
seq__7661_8763 = G__8775;
chunk__7662_8764 = G__8776;
count__7663_8765 = G__8777;
i__7664_8766 = G__8778;
continue;
}
} else
{var arg__6573__auto___8779 = cljs.core.first.call(null,seq__7661_8773__$1);a__6572__auto__.push(arg__6573__auto___8779);
{
var G__8780 = cljs.core.next.call(null,seq__7661_8773__$1);
var G__8781 = null;
var G__8782 = 0;
var G__8783 = 0;
seq__7661_8763 = G__8780;
chunk__7662_8764 = G__8781;
count__7663_8765 = G__8782;
i__7664_8766 = G__8783;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.big.apply(null,a__6572__auto__);
};
var big = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return big__delegate.call(this,args__6571__auto__);};
big.cljs$lang$maxFixedArity = 0;
big.cljs$lang$applyTo = (function (arglist__8784){
var args__6571__auto__ = cljs.core.seq(arglist__8784);
return big__delegate(args__6571__auto__);
});
big.cljs$core$IFn$_invoke$arity$variadic = big__delegate;
return big;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.blockquote = (function() { 
var blockquote__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__7669_8785 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__7670_8786 = null;var count__7671_8787 = 0;var i__7672_8788 = 0;while(true){
if((i__7672_8788 < count__7671_8787))
{var arg__6573__auto___8789 = cljs.core._nth.call(null,chunk__7670_8786,i__7672_8788);a__6572__auto__.push(arg__6573__auto___8789);
{
var G__8790 = seq__7669_8785;
var G__8791 = chunk__7670_8786;
var G__8792 = count__7671_8787;
var G__8793 = (i__7672_8788 + 1);
seq__7669_8785 = G__8790;
chunk__7670_8786 = G__8791;
count__7671_8787 = G__8792;
i__7672_8788 = G__8793;
continue;
}
} else
{var temp__4092__auto___8794 = cljs.core.seq.call(null,seq__7669_8785);if(temp__4092__auto___8794)
{var seq__7669_8795__$1 = temp__4092__auto___8794;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7669_8795__$1))
{var c__5634__auto___8796 = cljs.core.chunk_first.call(null,seq__7669_8795__$1);{
var G__8797 = cljs.core.chunk_rest.call(null,seq__7669_8795__$1);
var G__8798 = c__5634__auto___8796;
var G__8799 = cljs.core.count.call(null,c__5634__auto___8796);
var G__8800 = 0;
seq__7669_8785 = G__8797;
chunk__7670_8786 = G__8798;
count__7671_8787 = G__8799;
i__7672_8788 = G__8800;
continue;
}
} else
{var arg__6573__auto___8801 = cljs.core.first.call(null,seq__7669_8795__$1);a__6572__auto__.push(arg__6573__auto___8801);
{
var G__8802 = cljs.core.next.call(null,seq__7669_8795__$1);
var G__8803 = null;
var G__8804 = 0;
var G__8805 = 0;
seq__7669_8785 = G__8802;
chunk__7670_8786 = G__8803;
count__7671_8787 = G__8804;
i__7672_8788 = G__8805;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.blockquote.apply(null,a__6572__auto__);
};
var blockquote = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return blockquote__delegate.call(this,args__6571__auto__);};
blockquote.cljs$lang$maxFixedArity = 0;
blockquote.cljs$lang$applyTo = (function (arglist__8806){
var args__6571__auto__ = cljs.core.seq(arglist__8806);
return blockquote__delegate(args__6571__auto__);
});
blockquote.cljs$core$IFn$_invoke$arity$variadic = blockquote__delegate;
return blockquote;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.body = (function() { 
var body__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__7677_8807 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__7678_8808 = null;var count__7679_8809 = 0;var i__7680_8810 = 0;while(true){
if((i__7680_8810 < count__7679_8809))
{var arg__6573__auto___8811 = cljs.core._nth.call(null,chunk__7678_8808,i__7680_8810);a__6572__auto__.push(arg__6573__auto___8811);
{
var G__8812 = seq__7677_8807;
var G__8813 = chunk__7678_8808;
var G__8814 = count__7679_8809;
var G__8815 = (i__7680_8810 + 1);
seq__7677_8807 = G__8812;
chunk__7678_8808 = G__8813;
count__7679_8809 = G__8814;
i__7680_8810 = G__8815;
continue;
}
} else
{var temp__4092__auto___8816 = cljs.core.seq.call(null,seq__7677_8807);if(temp__4092__auto___8816)
{var seq__7677_8817__$1 = temp__4092__auto___8816;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7677_8817__$1))
{var c__5634__auto___8818 = cljs.core.chunk_first.call(null,seq__7677_8817__$1);{
var G__8819 = cljs.core.chunk_rest.call(null,seq__7677_8817__$1);
var G__8820 = c__5634__auto___8818;
var G__8821 = cljs.core.count.call(null,c__5634__auto___8818);
var G__8822 = 0;
seq__7677_8807 = G__8819;
chunk__7678_8808 = G__8820;
count__7679_8809 = G__8821;
i__7680_8810 = G__8822;
continue;
}
} else
{var arg__6573__auto___8823 = cljs.core.first.call(null,seq__7677_8817__$1);a__6572__auto__.push(arg__6573__auto___8823);
{
var G__8824 = cljs.core.next.call(null,seq__7677_8817__$1);
var G__8825 = null;
var G__8826 = 0;
var G__8827 = 0;
seq__7677_8807 = G__8824;
chunk__7678_8808 = G__8825;
count__7679_8809 = G__8826;
i__7680_8810 = G__8827;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.body.apply(null,a__6572__auto__);
};
var body = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return body__delegate.call(this,args__6571__auto__);};
body.cljs$lang$maxFixedArity = 0;
body.cljs$lang$applyTo = (function (arglist__8828){
var args__6571__auto__ = cljs.core.seq(arglist__8828);
return body__delegate(args__6571__auto__);
});
body.cljs$core$IFn$_invoke$arity$variadic = body__delegate;
return body;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.br = (function() { 
var br__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__7685_8829 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__7686_8830 = null;var count__7687_8831 = 0;var i__7688_8832 = 0;while(true){
if((i__7688_8832 < count__7687_8831))
{var arg__6573__auto___8833 = cljs.core._nth.call(null,chunk__7686_8830,i__7688_8832);a__6572__auto__.push(arg__6573__auto___8833);
{
var G__8834 = seq__7685_8829;
var G__8835 = chunk__7686_8830;
var G__8836 = count__7687_8831;
var G__8837 = (i__7688_8832 + 1);
seq__7685_8829 = G__8834;
chunk__7686_8830 = G__8835;
count__7687_8831 = G__8836;
i__7688_8832 = G__8837;
continue;
}
} else
{var temp__4092__auto___8838 = cljs.core.seq.call(null,seq__7685_8829);if(temp__4092__auto___8838)
{var seq__7685_8839__$1 = temp__4092__auto___8838;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7685_8839__$1))
{var c__5634__auto___8840 = cljs.core.chunk_first.call(null,seq__7685_8839__$1);{
var G__8841 = cljs.core.chunk_rest.call(null,seq__7685_8839__$1);
var G__8842 = c__5634__auto___8840;
var G__8843 = cljs.core.count.call(null,c__5634__auto___8840);
var G__8844 = 0;
seq__7685_8829 = G__8841;
chunk__7686_8830 = G__8842;
count__7687_8831 = G__8843;
i__7688_8832 = G__8844;
continue;
}
} else
{var arg__6573__auto___8845 = cljs.core.first.call(null,seq__7685_8839__$1);a__6572__auto__.push(arg__6573__auto___8845);
{
var G__8846 = cljs.core.next.call(null,seq__7685_8839__$1);
var G__8847 = null;
var G__8848 = 0;
var G__8849 = 0;
seq__7685_8829 = G__8846;
chunk__7686_8830 = G__8847;
count__7687_8831 = G__8848;
i__7688_8832 = G__8849;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.br.apply(null,a__6572__auto__);
};
var br = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return br__delegate.call(this,args__6571__auto__);};
br.cljs$lang$maxFixedArity = 0;
br.cljs$lang$applyTo = (function (arglist__8850){
var args__6571__auto__ = cljs.core.seq(arglist__8850);
return br__delegate(args__6571__auto__);
});
br.cljs$core$IFn$_invoke$arity$variadic = br__delegate;
return br;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.button = (function() { 
var button__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__7693_8851 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__7694_8852 = null;var count__7695_8853 = 0;var i__7696_8854 = 0;while(true){
if((i__7696_8854 < count__7695_8853))
{var arg__6573__auto___8855 = cljs.core._nth.call(null,chunk__7694_8852,i__7696_8854);a__6572__auto__.push(arg__6573__auto___8855);
{
var G__8856 = seq__7693_8851;
var G__8857 = chunk__7694_8852;
var G__8858 = count__7695_8853;
var G__8859 = (i__7696_8854 + 1);
seq__7693_8851 = G__8856;
chunk__7694_8852 = G__8857;
count__7695_8853 = G__8858;
i__7696_8854 = G__8859;
continue;
}
} else
{var temp__4092__auto___8860 = cljs.core.seq.call(null,seq__7693_8851);if(temp__4092__auto___8860)
{var seq__7693_8861__$1 = temp__4092__auto___8860;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7693_8861__$1))
{var c__5634__auto___8862 = cljs.core.chunk_first.call(null,seq__7693_8861__$1);{
var G__8863 = cljs.core.chunk_rest.call(null,seq__7693_8861__$1);
var G__8864 = c__5634__auto___8862;
var G__8865 = cljs.core.count.call(null,c__5634__auto___8862);
var G__8866 = 0;
seq__7693_8851 = G__8863;
chunk__7694_8852 = G__8864;
count__7695_8853 = G__8865;
i__7696_8854 = G__8866;
continue;
}
} else
{var arg__6573__auto___8867 = cljs.core.first.call(null,seq__7693_8861__$1);a__6572__auto__.push(arg__6573__auto___8867);
{
var G__8868 = cljs.core.next.call(null,seq__7693_8861__$1);
var G__8869 = null;
var G__8870 = 0;
var G__8871 = 0;
seq__7693_8851 = G__8868;
chunk__7694_8852 = G__8869;
count__7695_8853 = G__8870;
i__7696_8854 = G__8871;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.button.apply(null,a__6572__auto__);
};
var button = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return button__delegate.call(this,args__6571__auto__);};
button.cljs$lang$maxFixedArity = 0;
button.cljs$lang$applyTo = (function (arglist__8872){
var args__6571__auto__ = cljs.core.seq(arglist__8872);
return button__delegate(args__6571__auto__);
});
button.cljs$core$IFn$_invoke$arity$variadic = button__delegate;
return button;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.canvas = (function() { 
var canvas__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__7701_8873 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__7702_8874 = null;var count__7703_8875 = 0;var i__7704_8876 = 0;while(true){
if((i__7704_8876 < count__7703_8875))
{var arg__6573__auto___8877 = cljs.core._nth.call(null,chunk__7702_8874,i__7704_8876);a__6572__auto__.push(arg__6573__auto___8877);
{
var G__8878 = seq__7701_8873;
var G__8879 = chunk__7702_8874;
var G__8880 = count__7703_8875;
var G__8881 = (i__7704_8876 + 1);
seq__7701_8873 = G__8878;
chunk__7702_8874 = G__8879;
count__7703_8875 = G__8880;
i__7704_8876 = G__8881;
continue;
}
} else
{var temp__4092__auto___8882 = cljs.core.seq.call(null,seq__7701_8873);if(temp__4092__auto___8882)
{var seq__7701_8883__$1 = temp__4092__auto___8882;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7701_8883__$1))
{var c__5634__auto___8884 = cljs.core.chunk_first.call(null,seq__7701_8883__$1);{
var G__8885 = cljs.core.chunk_rest.call(null,seq__7701_8883__$1);
var G__8886 = c__5634__auto___8884;
var G__8887 = cljs.core.count.call(null,c__5634__auto___8884);
var G__8888 = 0;
seq__7701_8873 = G__8885;
chunk__7702_8874 = G__8886;
count__7703_8875 = G__8887;
i__7704_8876 = G__8888;
continue;
}
} else
{var arg__6573__auto___8889 = cljs.core.first.call(null,seq__7701_8883__$1);a__6572__auto__.push(arg__6573__auto___8889);
{
var G__8890 = cljs.core.next.call(null,seq__7701_8883__$1);
var G__8891 = null;
var G__8892 = 0;
var G__8893 = 0;
seq__7701_8873 = G__8890;
chunk__7702_8874 = G__8891;
count__7703_8875 = G__8892;
i__7704_8876 = G__8893;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.canvas.apply(null,a__6572__auto__);
};
var canvas = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return canvas__delegate.call(this,args__6571__auto__);};
canvas.cljs$lang$maxFixedArity = 0;
canvas.cljs$lang$applyTo = (function (arglist__8894){
var args__6571__auto__ = cljs.core.seq(arglist__8894);
return canvas__delegate(args__6571__auto__);
});
canvas.cljs$core$IFn$_invoke$arity$variadic = canvas__delegate;
return canvas;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.caption = (function() { 
var caption__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__7709_8895 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__7710_8896 = null;var count__7711_8897 = 0;var i__7712_8898 = 0;while(true){
if((i__7712_8898 < count__7711_8897))
{var arg__6573__auto___8899 = cljs.core._nth.call(null,chunk__7710_8896,i__7712_8898);a__6572__auto__.push(arg__6573__auto___8899);
{
var G__8900 = seq__7709_8895;
var G__8901 = chunk__7710_8896;
var G__8902 = count__7711_8897;
var G__8903 = (i__7712_8898 + 1);
seq__7709_8895 = G__8900;
chunk__7710_8896 = G__8901;
count__7711_8897 = G__8902;
i__7712_8898 = G__8903;
continue;
}
} else
{var temp__4092__auto___8904 = cljs.core.seq.call(null,seq__7709_8895);if(temp__4092__auto___8904)
{var seq__7709_8905__$1 = temp__4092__auto___8904;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7709_8905__$1))
{var c__5634__auto___8906 = cljs.core.chunk_first.call(null,seq__7709_8905__$1);{
var G__8907 = cljs.core.chunk_rest.call(null,seq__7709_8905__$1);
var G__8908 = c__5634__auto___8906;
var G__8909 = cljs.core.count.call(null,c__5634__auto___8906);
var G__8910 = 0;
seq__7709_8895 = G__8907;
chunk__7710_8896 = G__8908;
count__7711_8897 = G__8909;
i__7712_8898 = G__8910;
continue;
}
} else
{var arg__6573__auto___8911 = cljs.core.first.call(null,seq__7709_8905__$1);a__6572__auto__.push(arg__6573__auto___8911);
{
var G__8912 = cljs.core.next.call(null,seq__7709_8905__$1);
var G__8913 = null;
var G__8914 = 0;
var G__8915 = 0;
seq__7709_8895 = G__8912;
chunk__7710_8896 = G__8913;
count__7711_8897 = G__8914;
i__7712_8898 = G__8915;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.caption.apply(null,a__6572__auto__);
};
var caption = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return caption__delegate.call(this,args__6571__auto__);};
caption.cljs$lang$maxFixedArity = 0;
caption.cljs$lang$applyTo = (function (arglist__8916){
var args__6571__auto__ = cljs.core.seq(arglist__8916);
return caption__delegate(args__6571__auto__);
});
caption.cljs$core$IFn$_invoke$arity$variadic = caption__delegate;
return caption;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.cite = (function() { 
var cite__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__7717_8917 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__7718_8918 = null;var count__7719_8919 = 0;var i__7720_8920 = 0;while(true){
if((i__7720_8920 < count__7719_8919))
{var arg__6573__auto___8921 = cljs.core._nth.call(null,chunk__7718_8918,i__7720_8920);a__6572__auto__.push(arg__6573__auto___8921);
{
var G__8922 = seq__7717_8917;
var G__8923 = chunk__7718_8918;
var G__8924 = count__7719_8919;
var G__8925 = (i__7720_8920 + 1);
seq__7717_8917 = G__8922;
chunk__7718_8918 = G__8923;
count__7719_8919 = G__8924;
i__7720_8920 = G__8925;
continue;
}
} else
{var temp__4092__auto___8926 = cljs.core.seq.call(null,seq__7717_8917);if(temp__4092__auto___8926)
{var seq__7717_8927__$1 = temp__4092__auto___8926;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7717_8927__$1))
{var c__5634__auto___8928 = cljs.core.chunk_first.call(null,seq__7717_8927__$1);{
var G__8929 = cljs.core.chunk_rest.call(null,seq__7717_8927__$1);
var G__8930 = c__5634__auto___8928;
var G__8931 = cljs.core.count.call(null,c__5634__auto___8928);
var G__8932 = 0;
seq__7717_8917 = G__8929;
chunk__7718_8918 = G__8930;
count__7719_8919 = G__8931;
i__7720_8920 = G__8932;
continue;
}
} else
{var arg__6573__auto___8933 = cljs.core.first.call(null,seq__7717_8927__$1);a__6572__auto__.push(arg__6573__auto___8933);
{
var G__8934 = cljs.core.next.call(null,seq__7717_8927__$1);
var G__8935 = null;
var G__8936 = 0;
var G__8937 = 0;
seq__7717_8917 = G__8934;
chunk__7718_8918 = G__8935;
count__7719_8919 = G__8936;
i__7720_8920 = G__8937;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.cite.apply(null,a__6572__auto__);
};
var cite = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return cite__delegate.call(this,args__6571__auto__);};
cite.cljs$lang$maxFixedArity = 0;
cite.cljs$lang$applyTo = (function (arglist__8938){
var args__6571__auto__ = cljs.core.seq(arglist__8938);
return cite__delegate(args__6571__auto__);
});
cite.cljs$core$IFn$_invoke$arity$variadic = cite__delegate;
return cite;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.code = (function() { 
var code__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__7725_8939 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__7726_8940 = null;var count__7727_8941 = 0;var i__7728_8942 = 0;while(true){
if((i__7728_8942 < count__7727_8941))
{var arg__6573__auto___8943 = cljs.core._nth.call(null,chunk__7726_8940,i__7728_8942);a__6572__auto__.push(arg__6573__auto___8943);
{
var G__8944 = seq__7725_8939;
var G__8945 = chunk__7726_8940;
var G__8946 = count__7727_8941;
var G__8947 = (i__7728_8942 + 1);
seq__7725_8939 = G__8944;
chunk__7726_8940 = G__8945;
count__7727_8941 = G__8946;
i__7728_8942 = G__8947;
continue;
}
} else
{var temp__4092__auto___8948 = cljs.core.seq.call(null,seq__7725_8939);if(temp__4092__auto___8948)
{var seq__7725_8949__$1 = temp__4092__auto___8948;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7725_8949__$1))
{var c__5634__auto___8950 = cljs.core.chunk_first.call(null,seq__7725_8949__$1);{
var G__8951 = cljs.core.chunk_rest.call(null,seq__7725_8949__$1);
var G__8952 = c__5634__auto___8950;
var G__8953 = cljs.core.count.call(null,c__5634__auto___8950);
var G__8954 = 0;
seq__7725_8939 = G__8951;
chunk__7726_8940 = G__8952;
count__7727_8941 = G__8953;
i__7728_8942 = G__8954;
continue;
}
} else
{var arg__6573__auto___8955 = cljs.core.first.call(null,seq__7725_8949__$1);a__6572__auto__.push(arg__6573__auto___8955);
{
var G__8956 = cljs.core.next.call(null,seq__7725_8949__$1);
var G__8957 = null;
var G__8958 = 0;
var G__8959 = 0;
seq__7725_8939 = G__8956;
chunk__7726_8940 = G__8957;
count__7727_8941 = G__8958;
i__7728_8942 = G__8959;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.code.apply(null,a__6572__auto__);
};
var code = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return code__delegate.call(this,args__6571__auto__);};
code.cljs$lang$maxFixedArity = 0;
code.cljs$lang$applyTo = (function (arglist__8960){
var args__6571__auto__ = cljs.core.seq(arglist__8960);
return code__delegate(args__6571__auto__);
});
code.cljs$core$IFn$_invoke$arity$variadic = code__delegate;
return code;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.col = (function() { 
var col__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__7733_8961 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__7734_8962 = null;var count__7735_8963 = 0;var i__7736_8964 = 0;while(true){
if((i__7736_8964 < count__7735_8963))
{var arg__6573__auto___8965 = cljs.core._nth.call(null,chunk__7734_8962,i__7736_8964);a__6572__auto__.push(arg__6573__auto___8965);
{
var G__8966 = seq__7733_8961;
var G__8967 = chunk__7734_8962;
var G__8968 = count__7735_8963;
var G__8969 = (i__7736_8964 + 1);
seq__7733_8961 = G__8966;
chunk__7734_8962 = G__8967;
count__7735_8963 = G__8968;
i__7736_8964 = G__8969;
continue;
}
} else
{var temp__4092__auto___8970 = cljs.core.seq.call(null,seq__7733_8961);if(temp__4092__auto___8970)
{var seq__7733_8971__$1 = temp__4092__auto___8970;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7733_8971__$1))
{var c__5634__auto___8972 = cljs.core.chunk_first.call(null,seq__7733_8971__$1);{
var G__8973 = cljs.core.chunk_rest.call(null,seq__7733_8971__$1);
var G__8974 = c__5634__auto___8972;
var G__8975 = cljs.core.count.call(null,c__5634__auto___8972);
var G__8976 = 0;
seq__7733_8961 = G__8973;
chunk__7734_8962 = G__8974;
count__7735_8963 = G__8975;
i__7736_8964 = G__8976;
continue;
}
} else
{var arg__6573__auto___8977 = cljs.core.first.call(null,seq__7733_8971__$1);a__6572__auto__.push(arg__6573__auto___8977);
{
var G__8978 = cljs.core.next.call(null,seq__7733_8971__$1);
var G__8979 = null;
var G__8980 = 0;
var G__8981 = 0;
seq__7733_8961 = G__8978;
chunk__7734_8962 = G__8979;
count__7735_8963 = G__8980;
i__7736_8964 = G__8981;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.col.apply(null,a__6572__auto__);
};
var col = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return col__delegate.call(this,args__6571__auto__);};
col.cljs$lang$maxFixedArity = 0;
col.cljs$lang$applyTo = (function (arglist__8982){
var args__6571__auto__ = cljs.core.seq(arglist__8982);
return col__delegate(args__6571__auto__);
});
col.cljs$core$IFn$_invoke$arity$variadic = col__delegate;
return col;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.colgroup = (function() { 
var colgroup__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__7741_8983 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__7742_8984 = null;var count__7743_8985 = 0;var i__7744_8986 = 0;while(true){
if((i__7744_8986 < count__7743_8985))
{var arg__6573__auto___8987 = cljs.core._nth.call(null,chunk__7742_8984,i__7744_8986);a__6572__auto__.push(arg__6573__auto___8987);
{
var G__8988 = seq__7741_8983;
var G__8989 = chunk__7742_8984;
var G__8990 = count__7743_8985;
var G__8991 = (i__7744_8986 + 1);
seq__7741_8983 = G__8988;
chunk__7742_8984 = G__8989;
count__7743_8985 = G__8990;
i__7744_8986 = G__8991;
continue;
}
} else
{var temp__4092__auto___8992 = cljs.core.seq.call(null,seq__7741_8983);if(temp__4092__auto___8992)
{var seq__7741_8993__$1 = temp__4092__auto___8992;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7741_8993__$1))
{var c__5634__auto___8994 = cljs.core.chunk_first.call(null,seq__7741_8993__$1);{
var G__8995 = cljs.core.chunk_rest.call(null,seq__7741_8993__$1);
var G__8996 = c__5634__auto___8994;
var G__8997 = cljs.core.count.call(null,c__5634__auto___8994);
var G__8998 = 0;
seq__7741_8983 = G__8995;
chunk__7742_8984 = G__8996;
count__7743_8985 = G__8997;
i__7744_8986 = G__8998;
continue;
}
} else
{var arg__6573__auto___8999 = cljs.core.first.call(null,seq__7741_8993__$1);a__6572__auto__.push(arg__6573__auto___8999);
{
var G__9000 = cljs.core.next.call(null,seq__7741_8993__$1);
var G__9001 = null;
var G__9002 = 0;
var G__9003 = 0;
seq__7741_8983 = G__9000;
chunk__7742_8984 = G__9001;
count__7743_8985 = G__9002;
i__7744_8986 = G__9003;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.colgroup.apply(null,a__6572__auto__);
};
var colgroup = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return colgroup__delegate.call(this,args__6571__auto__);};
colgroup.cljs$lang$maxFixedArity = 0;
colgroup.cljs$lang$applyTo = (function (arglist__9004){
var args__6571__auto__ = cljs.core.seq(arglist__9004);
return colgroup__delegate(args__6571__auto__);
});
colgroup.cljs$core$IFn$_invoke$arity$variadic = colgroup__delegate;
return colgroup;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.data = (function() { 
var data__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__7749_9005 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__7750_9006 = null;var count__7751_9007 = 0;var i__7752_9008 = 0;while(true){
if((i__7752_9008 < count__7751_9007))
{var arg__6573__auto___9009 = cljs.core._nth.call(null,chunk__7750_9006,i__7752_9008);a__6572__auto__.push(arg__6573__auto___9009);
{
var G__9010 = seq__7749_9005;
var G__9011 = chunk__7750_9006;
var G__9012 = count__7751_9007;
var G__9013 = (i__7752_9008 + 1);
seq__7749_9005 = G__9010;
chunk__7750_9006 = G__9011;
count__7751_9007 = G__9012;
i__7752_9008 = G__9013;
continue;
}
} else
{var temp__4092__auto___9014 = cljs.core.seq.call(null,seq__7749_9005);if(temp__4092__auto___9014)
{var seq__7749_9015__$1 = temp__4092__auto___9014;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7749_9015__$1))
{var c__5634__auto___9016 = cljs.core.chunk_first.call(null,seq__7749_9015__$1);{
var G__9017 = cljs.core.chunk_rest.call(null,seq__7749_9015__$1);
var G__9018 = c__5634__auto___9016;
var G__9019 = cljs.core.count.call(null,c__5634__auto___9016);
var G__9020 = 0;
seq__7749_9005 = G__9017;
chunk__7750_9006 = G__9018;
count__7751_9007 = G__9019;
i__7752_9008 = G__9020;
continue;
}
} else
{var arg__6573__auto___9021 = cljs.core.first.call(null,seq__7749_9015__$1);a__6572__auto__.push(arg__6573__auto___9021);
{
var G__9022 = cljs.core.next.call(null,seq__7749_9015__$1);
var G__9023 = null;
var G__9024 = 0;
var G__9025 = 0;
seq__7749_9005 = G__9022;
chunk__7750_9006 = G__9023;
count__7751_9007 = G__9024;
i__7752_9008 = G__9025;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.data.apply(null,a__6572__auto__);
};
var data = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return data__delegate.call(this,args__6571__auto__);};
data.cljs$lang$maxFixedArity = 0;
data.cljs$lang$applyTo = (function (arglist__9026){
var args__6571__auto__ = cljs.core.seq(arglist__9026);
return data__delegate(args__6571__auto__);
});
data.cljs$core$IFn$_invoke$arity$variadic = data__delegate;
return data;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.datalist = (function() { 
var datalist__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__7757_9027 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__7758_9028 = null;var count__7759_9029 = 0;var i__7760_9030 = 0;while(true){
if((i__7760_9030 < count__7759_9029))
{var arg__6573__auto___9031 = cljs.core._nth.call(null,chunk__7758_9028,i__7760_9030);a__6572__auto__.push(arg__6573__auto___9031);
{
var G__9032 = seq__7757_9027;
var G__9033 = chunk__7758_9028;
var G__9034 = count__7759_9029;
var G__9035 = (i__7760_9030 + 1);
seq__7757_9027 = G__9032;
chunk__7758_9028 = G__9033;
count__7759_9029 = G__9034;
i__7760_9030 = G__9035;
continue;
}
} else
{var temp__4092__auto___9036 = cljs.core.seq.call(null,seq__7757_9027);if(temp__4092__auto___9036)
{var seq__7757_9037__$1 = temp__4092__auto___9036;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7757_9037__$1))
{var c__5634__auto___9038 = cljs.core.chunk_first.call(null,seq__7757_9037__$1);{
var G__9039 = cljs.core.chunk_rest.call(null,seq__7757_9037__$1);
var G__9040 = c__5634__auto___9038;
var G__9041 = cljs.core.count.call(null,c__5634__auto___9038);
var G__9042 = 0;
seq__7757_9027 = G__9039;
chunk__7758_9028 = G__9040;
count__7759_9029 = G__9041;
i__7760_9030 = G__9042;
continue;
}
} else
{var arg__6573__auto___9043 = cljs.core.first.call(null,seq__7757_9037__$1);a__6572__auto__.push(arg__6573__auto___9043);
{
var G__9044 = cljs.core.next.call(null,seq__7757_9037__$1);
var G__9045 = null;
var G__9046 = 0;
var G__9047 = 0;
seq__7757_9027 = G__9044;
chunk__7758_9028 = G__9045;
count__7759_9029 = G__9046;
i__7760_9030 = G__9047;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.datalist.apply(null,a__6572__auto__);
};
var datalist = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return datalist__delegate.call(this,args__6571__auto__);};
datalist.cljs$lang$maxFixedArity = 0;
datalist.cljs$lang$applyTo = (function (arglist__9048){
var args__6571__auto__ = cljs.core.seq(arglist__9048);
return datalist__delegate(args__6571__auto__);
});
datalist.cljs$core$IFn$_invoke$arity$variadic = datalist__delegate;
return datalist;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.dd = (function() { 
var dd__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__7765_9049 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__7766_9050 = null;var count__7767_9051 = 0;var i__7768_9052 = 0;while(true){
if((i__7768_9052 < count__7767_9051))
{var arg__6573__auto___9053 = cljs.core._nth.call(null,chunk__7766_9050,i__7768_9052);a__6572__auto__.push(arg__6573__auto___9053);
{
var G__9054 = seq__7765_9049;
var G__9055 = chunk__7766_9050;
var G__9056 = count__7767_9051;
var G__9057 = (i__7768_9052 + 1);
seq__7765_9049 = G__9054;
chunk__7766_9050 = G__9055;
count__7767_9051 = G__9056;
i__7768_9052 = G__9057;
continue;
}
} else
{var temp__4092__auto___9058 = cljs.core.seq.call(null,seq__7765_9049);if(temp__4092__auto___9058)
{var seq__7765_9059__$1 = temp__4092__auto___9058;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7765_9059__$1))
{var c__5634__auto___9060 = cljs.core.chunk_first.call(null,seq__7765_9059__$1);{
var G__9061 = cljs.core.chunk_rest.call(null,seq__7765_9059__$1);
var G__9062 = c__5634__auto___9060;
var G__9063 = cljs.core.count.call(null,c__5634__auto___9060);
var G__9064 = 0;
seq__7765_9049 = G__9061;
chunk__7766_9050 = G__9062;
count__7767_9051 = G__9063;
i__7768_9052 = G__9064;
continue;
}
} else
{var arg__6573__auto___9065 = cljs.core.first.call(null,seq__7765_9059__$1);a__6572__auto__.push(arg__6573__auto___9065);
{
var G__9066 = cljs.core.next.call(null,seq__7765_9059__$1);
var G__9067 = null;
var G__9068 = 0;
var G__9069 = 0;
seq__7765_9049 = G__9066;
chunk__7766_9050 = G__9067;
count__7767_9051 = G__9068;
i__7768_9052 = G__9069;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.dd.apply(null,a__6572__auto__);
};
var dd = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return dd__delegate.call(this,args__6571__auto__);};
dd.cljs$lang$maxFixedArity = 0;
dd.cljs$lang$applyTo = (function (arglist__9070){
var args__6571__auto__ = cljs.core.seq(arglist__9070);
return dd__delegate(args__6571__auto__);
});
dd.cljs$core$IFn$_invoke$arity$variadic = dd__delegate;
return dd;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.del = (function() { 
var del__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__7773_9071 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__7774_9072 = null;var count__7775_9073 = 0;var i__7776_9074 = 0;while(true){
if((i__7776_9074 < count__7775_9073))
{var arg__6573__auto___9075 = cljs.core._nth.call(null,chunk__7774_9072,i__7776_9074);a__6572__auto__.push(arg__6573__auto___9075);
{
var G__9076 = seq__7773_9071;
var G__9077 = chunk__7774_9072;
var G__9078 = count__7775_9073;
var G__9079 = (i__7776_9074 + 1);
seq__7773_9071 = G__9076;
chunk__7774_9072 = G__9077;
count__7775_9073 = G__9078;
i__7776_9074 = G__9079;
continue;
}
} else
{var temp__4092__auto___9080 = cljs.core.seq.call(null,seq__7773_9071);if(temp__4092__auto___9080)
{var seq__7773_9081__$1 = temp__4092__auto___9080;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7773_9081__$1))
{var c__5634__auto___9082 = cljs.core.chunk_first.call(null,seq__7773_9081__$1);{
var G__9083 = cljs.core.chunk_rest.call(null,seq__7773_9081__$1);
var G__9084 = c__5634__auto___9082;
var G__9085 = cljs.core.count.call(null,c__5634__auto___9082);
var G__9086 = 0;
seq__7773_9071 = G__9083;
chunk__7774_9072 = G__9084;
count__7775_9073 = G__9085;
i__7776_9074 = G__9086;
continue;
}
} else
{var arg__6573__auto___9087 = cljs.core.first.call(null,seq__7773_9081__$1);a__6572__auto__.push(arg__6573__auto___9087);
{
var G__9088 = cljs.core.next.call(null,seq__7773_9081__$1);
var G__9089 = null;
var G__9090 = 0;
var G__9091 = 0;
seq__7773_9071 = G__9088;
chunk__7774_9072 = G__9089;
count__7775_9073 = G__9090;
i__7776_9074 = G__9091;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.del.apply(null,a__6572__auto__);
};
var del = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return del__delegate.call(this,args__6571__auto__);};
del.cljs$lang$maxFixedArity = 0;
del.cljs$lang$applyTo = (function (arglist__9092){
var args__6571__auto__ = cljs.core.seq(arglist__9092);
return del__delegate(args__6571__auto__);
});
del.cljs$core$IFn$_invoke$arity$variadic = del__delegate;
return del;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.details = (function() { 
var details__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__7781_9093 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__7782_9094 = null;var count__7783_9095 = 0;var i__7784_9096 = 0;while(true){
if((i__7784_9096 < count__7783_9095))
{var arg__6573__auto___9097 = cljs.core._nth.call(null,chunk__7782_9094,i__7784_9096);a__6572__auto__.push(arg__6573__auto___9097);
{
var G__9098 = seq__7781_9093;
var G__9099 = chunk__7782_9094;
var G__9100 = count__7783_9095;
var G__9101 = (i__7784_9096 + 1);
seq__7781_9093 = G__9098;
chunk__7782_9094 = G__9099;
count__7783_9095 = G__9100;
i__7784_9096 = G__9101;
continue;
}
} else
{var temp__4092__auto___9102 = cljs.core.seq.call(null,seq__7781_9093);if(temp__4092__auto___9102)
{var seq__7781_9103__$1 = temp__4092__auto___9102;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7781_9103__$1))
{var c__5634__auto___9104 = cljs.core.chunk_first.call(null,seq__7781_9103__$1);{
var G__9105 = cljs.core.chunk_rest.call(null,seq__7781_9103__$1);
var G__9106 = c__5634__auto___9104;
var G__9107 = cljs.core.count.call(null,c__5634__auto___9104);
var G__9108 = 0;
seq__7781_9093 = G__9105;
chunk__7782_9094 = G__9106;
count__7783_9095 = G__9107;
i__7784_9096 = G__9108;
continue;
}
} else
{var arg__6573__auto___9109 = cljs.core.first.call(null,seq__7781_9103__$1);a__6572__auto__.push(arg__6573__auto___9109);
{
var G__9110 = cljs.core.next.call(null,seq__7781_9103__$1);
var G__9111 = null;
var G__9112 = 0;
var G__9113 = 0;
seq__7781_9093 = G__9110;
chunk__7782_9094 = G__9111;
count__7783_9095 = G__9112;
i__7784_9096 = G__9113;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.details.apply(null,a__6572__auto__);
};
var details = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return details__delegate.call(this,args__6571__auto__);};
details.cljs$lang$maxFixedArity = 0;
details.cljs$lang$applyTo = (function (arglist__9114){
var args__6571__auto__ = cljs.core.seq(arglist__9114);
return details__delegate(args__6571__auto__);
});
details.cljs$core$IFn$_invoke$arity$variadic = details__delegate;
return details;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.dfn = (function() { 
var dfn__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__7789_9115 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__7790_9116 = null;var count__7791_9117 = 0;var i__7792_9118 = 0;while(true){
if((i__7792_9118 < count__7791_9117))
{var arg__6573__auto___9119 = cljs.core._nth.call(null,chunk__7790_9116,i__7792_9118);a__6572__auto__.push(arg__6573__auto___9119);
{
var G__9120 = seq__7789_9115;
var G__9121 = chunk__7790_9116;
var G__9122 = count__7791_9117;
var G__9123 = (i__7792_9118 + 1);
seq__7789_9115 = G__9120;
chunk__7790_9116 = G__9121;
count__7791_9117 = G__9122;
i__7792_9118 = G__9123;
continue;
}
} else
{var temp__4092__auto___9124 = cljs.core.seq.call(null,seq__7789_9115);if(temp__4092__auto___9124)
{var seq__7789_9125__$1 = temp__4092__auto___9124;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7789_9125__$1))
{var c__5634__auto___9126 = cljs.core.chunk_first.call(null,seq__7789_9125__$1);{
var G__9127 = cljs.core.chunk_rest.call(null,seq__7789_9125__$1);
var G__9128 = c__5634__auto___9126;
var G__9129 = cljs.core.count.call(null,c__5634__auto___9126);
var G__9130 = 0;
seq__7789_9115 = G__9127;
chunk__7790_9116 = G__9128;
count__7791_9117 = G__9129;
i__7792_9118 = G__9130;
continue;
}
} else
{var arg__6573__auto___9131 = cljs.core.first.call(null,seq__7789_9125__$1);a__6572__auto__.push(arg__6573__auto___9131);
{
var G__9132 = cljs.core.next.call(null,seq__7789_9125__$1);
var G__9133 = null;
var G__9134 = 0;
var G__9135 = 0;
seq__7789_9115 = G__9132;
chunk__7790_9116 = G__9133;
count__7791_9117 = G__9134;
i__7792_9118 = G__9135;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.dfn.apply(null,a__6572__auto__);
};
var dfn = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return dfn__delegate.call(this,args__6571__auto__);};
dfn.cljs$lang$maxFixedArity = 0;
dfn.cljs$lang$applyTo = (function (arglist__9136){
var args__6571__auto__ = cljs.core.seq(arglist__9136);
return dfn__delegate(args__6571__auto__);
});
dfn.cljs$core$IFn$_invoke$arity$variadic = dfn__delegate;
return dfn;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.div = (function() { 
var div__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__7797_9137 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__7798_9138 = null;var count__7799_9139 = 0;var i__7800_9140 = 0;while(true){
if((i__7800_9140 < count__7799_9139))
{var arg__6573__auto___9141 = cljs.core._nth.call(null,chunk__7798_9138,i__7800_9140);a__6572__auto__.push(arg__6573__auto___9141);
{
var G__9142 = seq__7797_9137;
var G__9143 = chunk__7798_9138;
var G__9144 = count__7799_9139;
var G__9145 = (i__7800_9140 + 1);
seq__7797_9137 = G__9142;
chunk__7798_9138 = G__9143;
count__7799_9139 = G__9144;
i__7800_9140 = G__9145;
continue;
}
} else
{var temp__4092__auto___9146 = cljs.core.seq.call(null,seq__7797_9137);if(temp__4092__auto___9146)
{var seq__7797_9147__$1 = temp__4092__auto___9146;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7797_9147__$1))
{var c__5634__auto___9148 = cljs.core.chunk_first.call(null,seq__7797_9147__$1);{
var G__9149 = cljs.core.chunk_rest.call(null,seq__7797_9147__$1);
var G__9150 = c__5634__auto___9148;
var G__9151 = cljs.core.count.call(null,c__5634__auto___9148);
var G__9152 = 0;
seq__7797_9137 = G__9149;
chunk__7798_9138 = G__9150;
count__7799_9139 = G__9151;
i__7800_9140 = G__9152;
continue;
}
} else
{var arg__6573__auto___9153 = cljs.core.first.call(null,seq__7797_9147__$1);a__6572__auto__.push(arg__6573__auto___9153);
{
var G__9154 = cljs.core.next.call(null,seq__7797_9147__$1);
var G__9155 = null;
var G__9156 = 0;
var G__9157 = 0;
seq__7797_9137 = G__9154;
chunk__7798_9138 = G__9155;
count__7799_9139 = G__9156;
i__7800_9140 = G__9157;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.div.apply(null,a__6572__auto__);
};
var div = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return div__delegate.call(this,args__6571__auto__);};
div.cljs$lang$maxFixedArity = 0;
div.cljs$lang$applyTo = (function (arglist__9158){
var args__6571__auto__ = cljs.core.seq(arglist__9158);
return div__delegate(args__6571__auto__);
});
div.cljs$core$IFn$_invoke$arity$variadic = div__delegate;
return div;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.dl = (function() { 
var dl__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__7805_9159 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__7806_9160 = null;var count__7807_9161 = 0;var i__7808_9162 = 0;while(true){
if((i__7808_9162 < count__7807_9161))
{var arg__6573__auto___9163 = cljs.core._nth.call(null,chunk__7806_9160,i__7808_9162);a__6572__auto__.push(arg__6573__auto___9163);
{
var G__9164 = seq__7805_9159;
var G__9165 = chunk__7806_9160;
var G__9166 = count__7807_9161;
var G__9167 = (i__7808_9162 + 1);
seq__7805_9159 = G__9164;
chunk__7806_9160 = G__9165;
count__7807_9161 = G__9166;
i__7808_9162 = G__9167;
continue;
}
} else
{var temp__4092__auto___9168 = cljs.core.seq.call(null,seq__7805_9159);if(temp__4092__auto___9168)
{var seq__7805_9169__$1 = temp__4092__auto___9168;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7805_9169__$1))
{var c__5634__auto___9170 = cljs.core.chunk_first.call(null,seq__7805_9169__$1);{
var G__9171 = cljs.core.chunk_rest.call(null,seq__7805_9169__$1);
var G__9172 = c__5634__auto___9170;
var G__9173 = cljs.core.count.call(null,c__5634__auto___9170);
var G__9174 = 0;
seq__7805_9159 = G__9171;
chunk__7806_9160 = G__9172;
count__7807_9161 = G__9173;
i__7808_9162 = G__9174;
continue;
}
} else
{var arg__6573__auto___9175 = cljs.core.first.call(null,seq__7805_9169__$1);a__6572__auto__.push(arg__6573__auto___9175);
{
var G__9176 = cljs.core.next.call(null,seq__7805_9169__$1);
var G__9177 = null;
var G__9178 = 0;
var G__9179 = 0;
seq__7805_9159 = G__9176;
chunk__7806_9160 = G__9177;
count__7807_9161 = G__9178;
i__7808_9162 = G__9179;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.dl.apply(null,a__6572__auto__);
};
var dl = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return dl__delegate.call(this,args__6571__auto__);};
dl.cljs$lang$maxFixedArity = 0;
dl.cljs$lang$applyTo = (function (arglist__9180){
var args__6571__auto__ = cljs.core.seq(arglist__9180);
return dl__delegate(args__6571__auto__);
});
dl.cljs$core$IFn$_invoke$arity$variadic = dl__delegate;
return dl;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.dt = (function() { 
var dt__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__7813_9181 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__7814_9182 = null;var count__7815_9183 = 0;var i__7816_9184 = 0;while(true){
if((i__7816_9184 < count__7815_9183))
{var arg__6573__auto___9185 = cljs.core._nth.call(null,chunk__7814_9182,i__7816_9184);a__6572__auto__.push(arg__6573__auto___9185);
{
var G__9186 = seq__7813_9181;
var G__9187 = chunk__7814_9182;
var G__9188 = count__7815_9183;
var G__9189 = (i__7816_9184 + 1);
seq__7813_9181 = G__9186;
chunk__7814_9182 = G__9187;
count__7815_9183 = G__9188;
i__7816_9184 = G__9189;
continue;
}
} else
{var temp__4092__auto___9190 = cljs.core.seq.call(null,seq__7813_9181);if(temp__4092__auto___9190)
{var seq__7813_9191__$1 = temp__4092__auto___9190;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7813_9191__$1))
{var c__5634__auto___9192 = cljs.core.chunk_first.call(null,seq__7813_9191__$1);{
var G__9193 = cljs.core.chunk_rest.call(null,seq__7813_9191__$1);
var G__9194 = c__5634__auto___9192;
var G__9195 = cljs.core.count.call(null,c__5634__auto___9192);
var G__9196 = 0;
seq__7813_9181 = G__9193;
chunk__7814_9182 = G__9194;
count__7815_9183 = G__9195;
i__7816_9184 = G__9196;
continue;
}
} else
{var arg__6573__auto___9197 = cljs.core.first.call(null,seq__7813_9191__$1);a__6572__auto__.push(arg__6573__auto___9197);
{
var G__9198 = cljs.core.next.call(null,seq__7813_9191__$1);
var G__9199 = null;
var G__9200 = 0;
var G__9201 = 0;
seq__7813_9181 = G__9198;
chunk__7814_9182 = G__9199;
count__7815_9183 = G__9200;
i__7816_9184 = G__9201;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.dt.apply(null,a__6572__auto__);
};
var dt = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return dt__delegate.call(this,args__6571__auto__);};
dt.cljs$lang$maxFixedArity = 0;
dt.cljs$lang$applyTo = (function (arglist__9202){
var args__6571__auto__ = cljs.core.seq(arglist__9202);
return dt__delegate(args__6571__auto__);
});
dt.cljs$core$IFn$_invoke$arity$variadic = dt__delegate;
return dt;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.em = (function() { 
var em__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__7821_9203 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__7822_9204 = null;var count__7823_9205 = 0;var i__7824_9206 = 0;while(true){
if((i__7824_9206 < count__7823_9205))
{var arg__6573__auto___9207 = cljs.core._nth.call(null,chunk__7822_9204,i__7824_9206);a__6572__auto__.push(arg__6573__auto___9207);
{
var G__9208 = seq__7821_9203;
var G__9209 = chunk__7822_9204;
var G__9210 = count__7823_9205;
var G__9211 = (i__7824_9206 + 1);
seq__7821_9203 = G__9208;
chunk__7822_9204 = G__9209;
count__7823_9205 = G__9210;
i__7824_9206 = G__9211;
continue;
}
} else
{var temp__4092__auto___9212 = cljs.core.seq.call(null,seq__7821_9203);if(temp__4092__auto___9212)
{var seq__7821_9213__$1 = temp__4092__auto___9212;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7821_9213__$1))
{var c__5634__auto___9214 = cljs.core.chunk_first.call(null,seq__7821_9213__$1);{
var G__9215 = cljs.core.chunk_rest.call(null,seq__7821_9213__$1);
var G__9216 = c__5634__auto___9214;
var G__9217 = cljs.core.count.call(null,c__5634__auto___9214);
var G__9218 = 0;
seq__7821_9203 = G__9215;
chunk__7822_9204 = G__9216;
count__7823_9205 = G__9217;
i__7824_9206 = G__9218;
continue;
}
} else
{var arg__6573__auto___9219 = cljs.core.first.call(null,seq__7821_9213__$1);a__6572__auto__.push(arg__6573__auto___9219);
{
var G__9220 = cljs.core.next.call(null,seq__7821_9213__$1);
var G__9221 = null;
var G__9222 = 0;
var G__9223 = 0;
seq__7821_9203 = G__9220;
chunk__7822_9204 = G__9221;
count__7823_9205 = G__9222;
i__7824_9206 = G__9223;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.em.apply(null,a__6572__auto__);
};
var em = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return em__delegate.call(this,args__6571__auto__);};
em.cljs$lang$maxFixedArity = 0;
em.cljs$lang$applyTo = (function (arglist__9224){
var args__6571__auto__ = cljs.core.seq(arglist__9224);
return em__delegate(args__6571__auto__);
});
em.cljs$core$IFn$_invoke$arity$variadic = em__delegate;
return em;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.embed = (function() { 
var embed__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__7837_9225 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__7838_9226 = null;var count__7839_9227 = 0;var i__7840_9228 = 0;while(true){
if((i__7840_9228 < count__7839_9227))
{var arg__6573__auto___9229 = cljs.core._nth.call(null,chunk__7838_9226,i__7840_9228);a__6572__auto__.push(arg__6573__auto___9229);
{
var G__9230 = seq__7837_9225;
var G__9231 = chunk__7838_9226;
var G__9232 = count__7839_9227;
var G__9233 = (i__7840_9228 + 1);
seq__7837_9225 = G__9230;
chunk__7838_9226 = G__9231;
count__7839_9227 = G__9232;
i__7840_9228 = G__9233;
continue;
}
} else
{var temp__4092__auto___9234 = cljs.core.seq.call(null,seq__7837_9225);if(temp__4092__auto___9234)
{var seq__7837_9235__$1 = temp__4092__auto___9234;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7837_9235__$1))
{var c__5634__auto___9236 = cljs.core.chunk_first.call(null,seq__7837_9235__$1);{
var G__9237 = cljs.core.chunk_rest.call(null,seq__7837_9235__$1);
var G__9238 = c__5634__auto___9236;
var G__9239 = cljs.core.count.call(null,c__5634__auto___9236);
var G__9240 = 0;
seq__7837_9225 = G__9237;
chunk__7838_9226 = G__9238;
count__7839_9227 = G__9239;
i__7840_9228 = G__9240;
continue;
}
} else
{var arg__6573__auto___9241 = cljs.core.first.call(null,seq__7837_9235__$1);a__6572__auto__.push(arg__6573__auto___9241);
{
var G__9242 = cljs.core.next.call(null,seq__7837_9235__$1);
var G__9243 = null;
var G__9244 = 0;
var G__9245 = 0;
seq__7837_9225 = G__9242;
chunk__7838_9226 = G__9243;
count__7839_9227 = G__9244;
i__7840_9228 = G__9245;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.embed.apply(null,a__6572__auto__);
};
var embed = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return embed__delegate.call(this,args__6571__auto__);};
embed.cljs$lang$maxFixedArity = 0;
embed.cljs$lang$applyTo = (function (arglist__9246){
var args__6571__auto__ = cljs.core.seq(arglist__9246);
return embed__delegate(args__6571__auto__);
});
embed.cljs$core$IFn$_invoke$arity$variadic = embed__delegate;
return embed;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.fieldset = (function() { 
var fieldset__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__7845_9247 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__7846_9248 = null;var count__7847_9249 = 0;var i__7848_9250 = 0;while(true){
if((i__7848_9250 < count__7847_9249))
{var arg__6573__auto___9251 = cljs.core._nth.call(null,chunk__7846_9248,i__7848_9250);a__6572__auto__.push(arg__6573__auto___9251);
{
var G__9252 = seq__7845_9247;
var G__9253 = chunk__7846_9248;
var G__9254 = count__7847_9249;
var G__9255 = (i__7848_9250 + 1);
seq__7845_9247 = G__9252;
chunk__7846_9248 = G__9253;
count__7847_9249 = G__9254;
i__7848_9250 = G__9255;
continue;
}
} else
{var temp__4092__auto___9256 = cljs.core.seq.call(null,seq__7845_9247);if(temp__4092__auto___9256)
{var seq__7845_9257__$1 = temp__4092__auto___9256;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7845_9257__$1))
{var c__5634__auto___9258 = cljs.core.chunk_first.call(null,seq__7845_9257__$1);{
var G__9259 = cljs.core.chunk_rest.call(null,seq__7845_9257__$1);
var G__9260 = c__5634__auto___9258;
var G__9261 = cljs.core.count.call(null,c__5634__auto___9258);
var G__9262 = 0;
seq__7845_9247 = G__9259;
chunk__7846_9248 = G__9260;
count__7847_9249 = G__9261;
i__7848_9250 = G__9262;
continue;
}
} else
{var arg__6573__auto___9263 = cljs.core.first.call(null,seq__7845_9257__$1);a__6572__auto__.push(arg__6573__auto___9263);
{
var G__9264 = cljs.core.next.call(null,seq__7845_9257__$1);
var G__9265 = null;
var G__9266 = 0;
var G__9267 = 0;
seq__7845_9247 = G__9264;
chunk__7846_9248 = G__9265;
count__7847_9249 = G__9266;
i__7848_9250 = G__9267;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.fieldset.apply(null,a__6572__auto__);
};
var fieldset = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return fieldset__delegate.call(this,args__6571__auto__);};
fieldset.cljs$lang$maxFixedArity = 0;
fieldset.cljs$lang$applyTo = (function (arglist__9268){
var args__6571__auto__ = cljs.core.seq(arglist__9268);
return fieldset__delegate(args__6571__auto__);
});
fieldset.cljs$core$IFn$_invoke$arity$variadic = fieldset__delegate;
return fieldset;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.figcaption = (function() { 
var figcaption__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__7853_9269 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__7854_9270 = null;var count__7855_9271 = 0;var i__7856_9272 = 0;while(true){
if((i__7856_9272 < count__7855_9271))
{var arg__6573__auto___9273 = cljs.core._nth.call(null,chunk__7854_9270,i__7856_9272);a__6572__auto__.push(arg__6573__auto___9273);
{
var G__9274 = seq__7853_9269;
var G__9275 = chunk__7854_9270;
var G__9276 = count__7855_9271;
var G__9277 = (i__7856_9272 + 1);
seq__7853_9269 = G__9274;
chunk__7854_9270 = G__9275;
count__7855_9271 = G__9276;
i__7856_9272 = G__9277;
continue;
}
} else
{var temp__4092__auto___9278 = cljs.core.seq.call(null,seq__7853_9269);if(temp__4092__auto___9278)
{var seq__7853_9279__$1 = temp__4092__auto___9278;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7853_9279__$1))
{var c__5634__auto___9280 = cljs.core.chunk_first.call(null,seq__7853_9279__$1);{
var G__9281 = cljs.core.chunk_rest.call(null,seq__7853_9279__$1);
var G__9282 = c__5634__auto___9280;
var G__9283 = cljs.core.count.call(null,c__5634__auto___9280);
var G__9284 = 0;
seq__7853_9269 = G__9281;
chunk__7854_9270 = G__9282;
count__7855_9271 = G__9283;
i__7856_9272 = G__9284;
continue;
}
} else
{var arg__6573__auto___9285 = cljs.core.first.call(null,seq__7853_9279__$1);a__6572__auto__.push(arg__6573__auto___9285);
{
var G__9286 = cljs.core.next.call(null,seq__7853_9279__$1);
var G__9287 = null;
var G__9288 = 0;
var G__9289 = 0;
seq__7853_9269 = G__9286;
chunk__7854_9270 = G__9287;
count__7855_9271 = G__9288;
i__7856_9272 = G__9289;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.figcaption.apply(null,a__6572__auto__);
};
var figcaption = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return figcaption__delegate.call(this,args__6571__auto__);};
figcaption.cljs$lang$maxFixedArity = 0;
figcaption.cljs$lang$applyTo = (function (arglist__9290){
var args__6571__auto__ = cljs.core.seq(arglist__9290);
return figcaption__delegate(args__6571__auto__);
});
figcaption.cljs$core$IFn$_invoke$arity$variadic = figcaption__delegate;
return figcaption;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.figure = (function() { 
var figure__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__7861_9291 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__7862_9292 = null;var count__7863_9293 = 0;var i__7864_9294 = 0;while(true){
if((i__7864_9294 < count__7863_9293))
{var arg__6573__auto___9295 = cljs.core._nth.call(null,chunk__7862_9292,i__7864_9294);a__6572__auto__.push(arg__6573__auto___9295);
{
var G__9296 = seq__7861_9291;
var G__9297 = chunk__7862_9292;
var G__9298 = count__7863_9293;
var G__9299 = (i__7864_9294 + 1);
seq__7861_9291 = G__9296;
chunk__7862_9292 = G__9297;
count__7863_9293 = G__9298;
i__7864_9294 = G__9299;
continue;
}
} else
{var temp__4092__auto___9300 = cljs.core.seq.call(null,seq__7861_9291);if(temp__4092__auto___9300)
{var seq__7861_9301__$1 = temp__4092__auto___9300;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7861_9301__$1))
{var c__5634__auto___9302 = cljs.core.chunk_first.call(null,seq__7861_9301__$1);{
var G__9303 = cljs.core.chunk_rest.call(null,seq__7861_9301__$1);
var G__9304 = c__5634__auto___9302;
var G__9305 = cljs.core.count.call(null,c__5634__auto___9302);
var G__9306 = 0;
seq__7861_9291 = G__9303;
chunk__7862_9292 = G__9304;
count__7863_9293 = G__9305;
i__7864_9294 = G__9306;
continue;
}
} else
{var arg__6573__auto___9307 = cljs.core.first.call(null,seq__7861_9301__$1);a__6572__auto__.push(arg__6573__auto___9307);
{
var G__9308 = cljs.core.next.call(null,seq__7861_9301__$1);
var G__9309 = null;
var G__9310 = 0;
var G__9311 = 0;
seq__7861_9291 = G__9308;
chunk__7862_9292 = G__9309;
count__7863_9293 = G__9310;
i__7864_9294 = G__9311;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.figure.apply(null,a__6572__auto__);
};
var figure = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return figure__delegate.call(this,args__6571__auto__);};
figure.cljs$lang$maxFixedArity = 0;
figure.cljs$lang$applyTo = (function (arglist__9312){
var args__6571__auto__ = cljs.core.seq(arglist__9312);
return figure__delegate(args__6571__auto__);
});
figure.cljs$core$IFn$_invoke$arity$variadic = figure__delegate;
return figure;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.footer = (function() { 
var footer__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__7869_9313 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__7870_9314 = null;var count__7871_9315 = 0;var i__7872_9316 = 0;while(true){
if((i__7872_9316 < count__7871_9315))
{var arg__6573__auto___9317 = cljs.core._nth.call(null,chunk__7870_9314,i__7872_9316);a__6572__auto__.push(arg__6573__auto___9317);
{
var G__9318 = seq__7869_9313;
var G__9319 = chunk__7870_9314;
var G__9320 = count__7871_9315;
var G__9321 = (i__7872_9316 + 1);
seq__7869_9313 = G__9318;
chunk__7870_9314 = G__9319;
count__7871_9315 = G__9320;
i__7872_9316 = G__9321;
continue;
}
} else
{var temp__4092__auto___9322 = cljs.core.seq.call(null,seq__7869_9313);if(temp__4092__auto___9322)
{var seq__7869_9323__$1 = temp__4092__auto___9322;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7869_9323__$1))
{var c__5634__auto___9324 = cljs.core.chunk_first.call(null,seq__7869_9323__$1);{
var G__9325 = cljs.core.chunk_rest.call(null,seq__7869_9323__$1);
var G__9326 = c__5634__auto___9324;
var G__9327 = cljs.core.count.call(null,c__5634__auto___9324);
var G__9328 = 0;
seq__7869_9313 = G__9325;
chunk__7870_9314 = G__9326;
count__7871_9315 = G__9327;
i__7872_9316 = G__9328;
continue;
}
} else
{var arg__6573__auto___9329 = cljs.core.first.call(null,seq__7869_9323__$1);a__6572__auto__.push(arg__6573__auto___9329);
{
var G__9330 = cljs.core.next.call(null,seq__7869_9323__$1);
var G__9331 = null;
var G__9332 = 0;
var G__9333 = 0;
seq__7869_9313 = G__9330;
chunk__7870_9314 = G__9331;
count__7871_9315 = G__9332;
i__7872_9316 = G__9333;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.footer.apply(null,a__6572__auto__);
};
var footer = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return footer__delegate.call(this,args__6571__auto__);};
footer.cljs$lang$maxFixedArity = 0;
footer.cljs$lang$applyTo = (function (arglist__9334){
var args__6571__auto__ = cljs.core.seq(arglist__9334);
return footer__delegate(args__6571__auto__);
});
footer.cljs$core$IFn$_invoke$arity$variadic = footer__delegate;
return footer;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.form = (function() { 
var form__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__7877_9335 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__7878_9336 = null;var count__7879_9337 = 0;var i__7880_9338 = 0;while(true){
if((i__7880_9338 < count__7879_9337))
{var arg__6573__auto___9339 = cljs.core._nth.call(null,chunk__7878_9336,i__7880_9338);a__6572__auto__.push(arg__6573__auto___9339);
{
var G__9340 = seq__7877_9335;
var G__9341 = chunk__7878_9336;
var G__9342 = count__7879_9337;
var G__9343 = (i__7880_9338 + 1);
seq__7877_9335 = G__9340;
chunk__7878_9336 = G__9341;
count__7879_9337 = G__9342;
i__7880_9338 = G__9343;
continue;
}
} else
{var temp__4092__auto___9344 = cljs.core.seq.call(null,seq__7877_9335);if(temp__4092__auto___9344)
{var seq__7877_9345__$1 = temp__4092__auto___9344;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7877_9345__$1))
{var c__5634__auto___9346 = cljs.core.chunk_first.call(null,seq__7877_9345__$1);{
var G__9347 = cljs.core.chunk_rest.call(null,seq__7877_9345__$1);
var G__9348 = c__5634__auto___9346;
var G__9349 = cljs.core.count.call(null,c__5634__auto___9346);
var G__9350 = 0;
seq__7877_9335 = G__9347;
chunk__7878_9336 = G__9348;
count__7879_9337 = G__9349;
i__7880_9338 = G__9350;
continue;
}
} else
{var arg__6573__auto___9351 = cljs.core.first.call(null,seq__7877_9345__$1);a__6572__auto__.push(arg__6573__auto___9351);
{
var G__9352 = cljs.core.next.call(null,seq__7877_9345__$1);
var G__9353 = null;
var G__9354 = 0;
var G__9355 = 0;
seq__7877_9335 = G__9352;
chunk__7878_9336 = G__9353;
count__7879_9337 = G__9354;
i__7880_9338 = G__9355;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.form.apply(null,a__6572__auto__);
};
var form = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return form__delegate.call(this,args__6571__auto__);};
form.cljs$lang$maxFixedArity = 0;
form.cljs$lang$applyTo = (function (arglist__9356){
var args__6571__auto__ = cljs.core.seq(arglist__9356);
return form__delegate(args__6571__auto__);
});
form.cljs$core$IFn$_invoke$arity$variadic = form__delegate;
return form;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h1 = (function() { 
var h1__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__7885_9357 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__7886_9358 = null;var count__7887_9359 = 0;var i__7888_9360 = 0;while(true){
if((i__7888_9360 < count__7887_9359))
{var arg__6573__auto___9361 = cljs.core._nth.call(null,chunk__7886_9358,i__7888_9360);a__6572__auto__.push(arg__6573__auto___9361);
{
var G__9362 = seq__7885_9357;
var G__9363 = chunk__7886_9358;
var G__9364 = count__7887_9359;
var G__9365 = (i__7888_9360 + 1);
seq__7885_9357 = G__9362;
chunk__7886_9358 = G__9363;
count__7887_9359 = G__9364;
i__7888_9360 = G__9365;
continue;
}
} else
{var temp__4092__auto___9366 = cljs.core.seq.call(null,seq__7885_9357);if(temp__4092__auto___9366)
{var seq__7885_9367__$1 = temp__4092__auto___9366;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7885_9367__$1))
{var c__5634__auto___9368 = cljs.core.chunk_first.call(null,seq__7885_9367__$1);{
var G__9369 = cljs.core.chunk_rest.call(null,seq__7885_9367__$1);
var G__9370 = c__5634__auto___9368;
var G__9371 = cljs.core.count.call(null,c__5634__auto___9368);
var G__9372 = 0;
seq__7885_9357 = G__9369;
chunk__7886_9358 = G__9370;
count__7887_9359 = G__9371;
i__7888_9360 = G__9372;
continue;
}
} else
{var arg__6573__auto___9373 = cljs.core.first.call(null,seq__7885_9367__$1);a__6572__auto__.push(arg__6573__auto___9373);
{
var G__9374 = cljs.core.next.call(null,seq__7885_9367__$1);
var G__9375 = null;
var G__9376 = 0;
var G__9377 = 0;
seq__7885_9357 = G__9374;
chunk__7886_9358 = G__9375;
count__7887_9359 = G__9376;
i__7888_9360 = G__9377;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h1.apply(null,a__6572__auto__);
};
var h1 = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h1__delegate.call(this,args__6571__auto__);};
h1.cljs$lang$maxFixedArity = 0;
h1.cljs$lang$applyTo = (function (arglist__9378){
var args__6571__auto__ = cljs.core.seq(arglist__9378);
return h1__delegate(args__6571__auto__);
});
h1.cljs$core$IFn$_invoke$arity$variadic = h1__delegate;
return h1;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h2 = (function() { 
var h2__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__7893_9379 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__7894_9380 = null;var count__7895_9381 = 0;var i__7896_9382 = 0;while(true){
if((i__7896_9382 < count__7895_9381))
{var arg__6573__auto___9383 = cljs.core._nth.call(null,chunk__7894_9380,i__7896_9382);a__6572__auto__.push(arg__6573__auto___9383);
{
var G__9384 = seq__7893_9379;
var G__9385 = chunk__7894_9380;
var G__9386 = count__7895_9381;
var G__9387 = (i__7896_9382 + 1);
seq__7893_9379 = G__9384;
chunk__7894_9380 = G__9385;
count__7895_9381 = G__9386;
i__7896_9382 = G__9387;
continue;
}
} else
{var temp__4092__auto___9388 = cljs.core.seq.call(null,seq__7893_9379);if(temp__4092__auto___9388)
{var seq__7893_9389__$1 = temp__4092__auto___9388;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7893_9389__$1))
{var c__5634__auto___9390 = cljs.core.chunk_first.call(null,seq__7893_9389__$1);{
var G__9391 = cljs.core.chunk_rest.call(null,seq__7893_9389__$1);
var G__9392 = c__5634__auto___9390;
var G__9393 = cljs.core.count.call(null,c__5634__auto___9390);
var G__9394 = 0;
seq__7893_9379 = G__9391;
chunk__7894_9380 = G__9392;
count__7895_9381 = G__9393;
i__7896_9382 = G__9394;
continue;
}
} else
{var arg__6573__auto___9395 = cljs.core.first.call(null,seq__7893_9389__$1);a__6572__auto__.push(arg__6573__auto___9395);
{
var G__9396 = cljs.core.next.call(null,seq__7893_9389__$1);
var G__9397 = null;
var G__9398 = 0;
var G__9399 = 0;
seq__7893_9379 = G__9396;
chunk__7894_9380 = G__9397;
count__7895_9381 = G__9398;
i__7896_9382 = G__9399;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h2.apply(null,a__6572__auto__);
};
var h2 = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h2__delegate.call(this,args__6571__auto__);};
h2.cljs$lang$maxFixedArity = 0;
h2.cljs$lang$applyTo = (function (arglist__9400){
var args__6571__auto__ = cljs.core.seq(arglist__9400);
return h2__delegate(args__6571__auto__);
});
h2.cljs$core$IFn$_invoke$arity$variadic = h2__delegate;
return h2;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h3 = (function() { 
var h3__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__7901_9401 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__7902_9402 = null;var count__7903_9403 = 0;var i__7904_9404 = 0;while(true){
if((i__7904_9404 < count__7903_9403))
{var arg__6573__auto___9405 = cljs.core._nth.call(null,chunk__7902_9402,i__7904_9404);a__6572__auto__.push(arg__6573__auto___9405);
{
var G__9406 = seq__7901_9401;
var G__9407 = chunk__7902_9402;
var G__9408 = count__7903_9403;
var G__9409 = (i__7904_9404 + 1);
seq__7901_9401 = G__9406;
chunk__7902_9402 = G__9407;
count__7903_9403 = G__9408;
i__7904_9404 = G__9409;
continue;
}
} else
{var temp__4092__auto___9410 = cljs.core.seq.call(null,seq__7901_9401);if(temp__4092__auto___9410)
{var seq__7901_9411__$1 = temp__4092__auto___9410;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7901_9411__$1))
{var c__5634__auto___9412 = cljs.core.chunk_first.call(null,seq__7901_9411__$1);{
var G__9413 = cljs.core.chunk_rest.call(null,seq__7901_9411__$1);
var G__9414 = c__5634__auto___9412;
var G__9415 = cljs.core.count.call(null,c__5634__auto___9412);
var G__9416 = 0;
seq__7901_9401 = G__9413;
chunk__7902_9402 = G__9414;
count__7903_9403 = G__9415;
i__7904_9404 = G__9416;
continue;
}
} else
{var arg__6573__auto___9417 = cljs.core.first.call(null,seq__7901_9411__$1);a__6572__auto__.push(arg__6573__auto___9417);
{
var G__9418 = cljs.core.next.call(null,seq__7901_9411__$1);
var G__9419 = null;
var G__9420 = 0;
var G__9421 = 0;
seq__7901_9401 = G__9418;
chunk__7902_9402 = G__9419;
count__7903_9403 = G__9420;
i__7904_9404 = G__9421;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h3.apply(null,a__6572__auto__);
};
var h3 = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h3__delegate.call(this,args__6571__auto__);};
h3.cljs$lang$maxFixedArity = 0;
h3.cljs$lang$applyTo = (function (arglist__9422){
var args__6571__auto__ = cljs.core.seq(arglist__9422);
return h3__delegate(args__6571__auto__);
});
h3.cljs$core$IFn$_invoke$arity$variadic = h3__delegate;
return h3;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h4 = (function() { 
var h4__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__7909_9423 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__7910_9424 = null;var count__7911_9425 = 0;var i__7912_9426 = 0;while(true){
if((i__7912_9426 < count__7911_9425))
{var arg__6573__auto___9427 = cljs.core._nth.call(null,chunk__7910_9424,i__7912_9426);a__6572__auto__.push(arg__6573__auto___9427);
{
var G__9428 = seq__7909_9423;
var G__9429 = chunk__7910_9424;
var G__9430 = count__7911_9425;
var G__9431 = (i__7912_9426 + 1);
seq__7909_9423 = G__9428;
chunk__7910_9424 = G__9429;
count__7911_9425 = G__9430;
i__7912_9426 = G__9431;
continue;
}
} else
{var temp__4092__auto___9432 = cljs.core.seq.call(null,seq__7909_9423);if(temp__4092__auto___9432)
{var seq__7909_9433__$1 = temp__4092__auto___9432;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7909_9433__$1))
{var c__5634__auto___9434 = cljs.core.chunk_first.call(null,seq__7909_9433__$1);{
var G__9435 = cljs.core.chunk_rest.call(null,seq__7909_9433__$1);
var G__9436 = c__5634__auto___9434;
var G__9437 = cljs.core.count.call(null,c__5634__auto___9434);
var G__9438 = 0;
seq__7909_9423 = G__9435;
chunk__7910_9424 = G__9436;
count__7911_9425 = G__9437;
i__7912_9426 = G__9438;
continue;
}
} else
{var arg__6573__auto___9439 = cljs.core.first.call(null,seq__7909_9433__$1);a__6572__auto__.push(arg__6573__auto___9439);
{
var G__9440 = cljs.core.next.call(null,seq__7909_9433__$1);
var G__9441 = null;
var G__9442 = 0;
var G__9443 = 0;
seq__7909_9423 = G__9440;
chunk__7910_9424 = G__9441;
count__7911_9425 = G__9442;
i__7912_9426 = G__9443;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h4.apply(null,a__6572__auto__);
};
var h4 = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h4__delegate.call(this,args__6571__auto__);};
h4.cljs$lang$maxFixedArity = 0;
h4.cljs$lang$applyTo = (function (arglist__9444){
var args__6571__auto__ = cljs.core.seq(arglist__9444);
return h4__delegate(args__6571__auto__);
});
h4.cljs$core$IFn$_invoke$arity$variadic = h4__delegate;
return h4;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h5 = (function() { 
var h5__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__7917_9445 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__7918_9446 = null;var count__7919_9447 = 0;var i__7920_9448 = 0;while(true){
if((i__7920_9448 < count__7919_9447))
{var arg__6573__auto___9449 = cljs.core._nth.call(null,chunk__7918_9446,i__7920_9448);a__6572__auto__.push(arg__6573__auto___9449);
{
var G__9450 = seq__7917_9445;
var G__9451 = chunk__7918_9446;
var G__9452 = count__7919_9447;
var G__9453 = (i__7920_9448 + 1);
seq__7917_9445 = G__9450;
chunk__7918_9446 = G__9451;
count__7919_9447 = G__9452;
i__7920_9448 = G__9453;
continue;
}
} else
{var temp__4092__auto___9454 = cljs.core.seq.call(null,seq__7917_9445);if(temp__4092__auto___9454)
{var seq__7917_9455__$1 = temp__4092__auto___9454;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7917_9455__$1))
{var c__5634__auto___9456 = cljs.core.chunk_first.call(null,seq__7917_9455__$1);{
var G__9457 = cljs.core.chunk_rest.call(null,seq__7917_9455__$1);
var G__9458 = c__5634__auto___9456;
var G__9459 = cljs.core.count.call(null,c__5634__auto___9456);
var G__9460 = 0;
seq__7917_9445 = G__9457;
chunk__7918_9446 = G__9458;
count__7919_9447 = G__9459;
i__7920_9448 = G__9460;
continue;
}
} else
{var arg__6573__auto___9461 = cljs.core.first.call(null,seq__7917_9455__$1);a__6572__auto__.push(arg__6573__auto___9461);
{
var G__9462 = cljs.core.next.call(null,seq__7917_9455__$1);
var G__9463 = null;
var G__9464 = 0;
var G__9465 = 0;
seq__7917_9445 = G__9462;
chunk__7918_9446 = G__9463;
count__7919_9447 = G__9464;
i__7920_9448 = G__9465;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h5.apply(null,a__6572__auto__);
};
var h5 = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h5__delegate.call(this,args__6571__auto__);};
h5.cljs$lang$maxFixedArity = 0;
h5.cljs$lang$applyTo = (function (arglist__9466){
var args__6571__auto__ = cljs.core.seq(arglist__9466);
return h5__delegate(args__6571__auto__);
});
h5.cljs$core$IFn$_invoke$arity$variadic = h5__delegate;
return h5;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h6 = (function() { 
var h6__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__7925_9467 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__7926_9468 = null;var count__7927_9469 = 0;var i__7928_9470 = 0;while(true){
if((i__7928_9470 < count__7927_9469))
{var arg__6573__auto___9471 = cljs.core._nth.call(null,chunk__7926_9468,i__7928_9470);a__6572__auto__.push(arg__6573__auto___9471);
{
var G__9472 = seq__7925_9467;
var G__9473 = chunk__7926_9468;
var G__9474 = count__7927_9469;
var G__9475 = (i__7928_9470 + 1);
seq__7925_9467 = G__9472;
chunk__7926_9468 = G__9473;
count__7927_9469 = G__9474;
i__7928_9470 = G__9475;
continue;
}
} else
{var temp__4092__auto___9476 = cljs.core.seq.call(null,seq__7925_9467);if(temp__4092__auto___9476)
{var seq__7925_9477__$1 = temp__4092__auto___9476;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7925_9477__$1))
{var c__5634__auto___9478 = cljs.core.chunk_first.call(null,seq__7925_9477__$1);{
var G__9479 = cljs.core.chunk_rest.call(null,seq__7925_9477__$1);
var G__9480 = c__5634__auto___9478;
var G__9481 = cljs.core.count.call(null,c__5634__auto___9478);
var G__9482 = 0;
seq__7925_9467 = G__9479;
chunk__7926_9468 = G__9480;
count__7927_9469 = G__9481;
i__7928_9470 = G__9482;
continue;
}
} else
{var arg__6573__auto___9483 = cljs.core.first.call(null,seq__7925_9477__$1);a__6572__auto__.push(arg__6573__auto___9483);
{
var G__9484 = cljs.core.next.call(null,seq__7925_9477__$1);
var G__9485 = null;
var G__9486 = 0;
var G__9487 = 0;
seq__7925_9467 = G__9484;
chunk__7926_9468 = G__9485;
count__7927_9469 = G__9486;
i__7928_9470 = G__9487;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h6.apply(null,a__6572__auto__);
};
var h6 = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h6__delegate.call(this,args__6571__auto__);};
h6.cljs$lang$maxFixedArity = 0;
h6.cljs$lang$applyTo = (function (arglist__9488){
var args__6571__auto__ = cljs.core.seq(arglist__9488);
return h6__delegate(args__6571__auto__);
});
h6.cljs$core$IFn$_invoke$arity$variadic = h6__delegate;
return h6;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.head = (function() { 
var head__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__7933_9489 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__7934_9490 = null;var count__7935_9491 = 0;var i__7936_9492 = 0;while(true){
if((i__7936_9492 < count__7935_9491))
{var arg__6573__auto___9493 = cljs.core._nth.call(null,chunk__7934_9490,i__7936_9492);a__6572__auto__.push(arg__6573__auto___9493);
{
var G__9494 = seq__7933_9489;
var G__9495 = chunk__7934_9490;
var G__9496 = count__7935_9491;
var G__9497 = (i__7936_9492 + 1);
seq__7933_9489 = G__9494;
chunk__7934_9490 = G__9495;
count__7935_9491 = G__9496;
i__7936_9492 = G__9497;
continue;
}
} else
{var temp__4092__auto___9498 = cljs.core.seq.call(null,seq__7933_9489);if(temp__4092__auto___9498)
{var seq__7933_9499__$1 = temp__4092__auto___9498;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7933_9499__$1))
{var c__5634__auto___9500 = cljs.core.chunk_first.call(null,seq__7933_9499__$1);{
var G__9501 = cljs.core.chunk_rest.call(null,seq__7933_9499__$1);
var G__9502 = c__5634__auto___9500;
var G__9503 = cljs.core.count.call(null,c__5634__auto___9500);
var G__9504 = 0;
seq__7933_9489 = G__9501;
chunk__7934_9490 = G__9502;
count__7935_9491 = G__9503;
i__7936_9492 = G__9504;
continue;
}
} else
{var arg__6573__auto___9505 = cljs.core.first.call(null,seq__7933_9499__$1);a__6572__auto__.push(arg__6573__auto___9505);
{
var G__9506 = cljs.core.next.call(null,seq__7933_9499__$1);
var G__9507 = null;
var G__9508 = 0;
var G__9509 = 0;
seq__7933_9489 = G__9506;
chunk__7934_9490 = G__9507;
count__7935_9491 = G__9508;
i__7936_9492 = G__9509;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.head.apply(null,a__6572__auto__);
};
var head = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return head__delegate.call(this,args__6571__auto__);};
head.cljs$lang$maxFixedArity = 0;
head.cljs$lang$applyTo = (function (arglist__9510){
var args__6571__auto__ = cljs.core.seq(arglist__9510);
return head__delegate(args__6571__auto__);
});
head.cljs$core$IFn$_invoke$arity$variadic = head__delegate;
return head;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.header = (function() { 
var header__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__7941_9511 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__7942_9512 = null;var count__7943_9513 = 0;var i__7944_9514 = 0;while(true){
if((i__7944_9514 < count__7943_9513))
{var arg__6573__auto___9515 = cljs.core._nth.call(null,chunk__7942_9512,i__7944_9514);a__6572__auto__.push(arg__6573__auto___9515);
{
var G__9516 = seq__7941_9511;
var G__9517 = chunk__7942_9512;
var G__9518 = count__7943_9513;
var G__9519 = (i__7944_9514 + 1);
seq__7941_9511 = G__9516;
chunk__7942_9512 = G__9517;
count__7943_9513 = G__9518;
i__7944_9514 = G__9519;
continue;
}
} else
{var temp__4092__auto___9520 = cljs.core.seq.call(null,seq__7941_9511);if(temp__4092__auto___9520)
{var seq__7941_9521__$1 = temp__4092__auto___9520;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7941_9521__$1))
{var c__5634__auto___9522 = cljs.core.chunk_first.call(null,seq__7941_9521__$1);{
var G__9523 = cljs.core.chunk_rest.call(null,seq__7941_9521__$1);
var G__9524 = c__5634__auto___9522;
var G__9525 = cljs.core.count.call(null,c__5634__auto___9522);
var G__9526 = 0;
seq__7941_9511 = G__9523;
chunk__7942_9512 = G__9524;
count__7943_9513 = G__9525;
i__7944_9514 = G__9526;
continue;
}
} else
{var arg__6573__auto___9527 = cljs.core.first.call(null,seq__7941_9521__$1);a__6572__auto__.push(arg__6573__auto___9527);
{
var G__9528 = cljs.core.next.call(null,seq__7941_9521__$1);
var G__9529 = null;
var G__9530 = 0;
var G__9531 = 0;
seq__7941_9511 = G__9528;
chunk__7942_9512 = G__9529;
count__7943_9513 = G__9530;
i__7944_9514 = G__9531;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.header.apply(null,a__6572__auto__);
};
var header = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return header__delegate.call(this,args__6571__auto__);};
header.cljs$lang$maxFixedArity = 0;
header.cljs$lang$applyTo = (function (arglist__9532){
var args__6571__auto__ = cljs.core.seq(arglist__9532);
return header__delegate(args__6571__auto__);
});
header.cljs$core$IFn$_invoke$arity$variadic = header__delegate;
return header;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.hr = (function() { 
var hr__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__7949_9533 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__7950_9534 = null;var count__7951_9535 = 0;var i__7952_9536 = 0;while(true){
if((i__7952_9536 < count__7951_9535))
{var arg__6573__auto___9537 = cljs.core._nth.call(null,chunk__7950_9534,i__7952_9536);a__6572__auto__.push(arg__6573__auto___9537);
{
var G__9538 = seq__7949_9533;
var G__9539 = chunk__7950_9534;
var G__9540 = count__7951_9535;
var G__9541 = (i__7952_9536 + 1);
seq__7949_9533 = G__9538;
chunk__7950_9534 = G__9539;
count__7951_9535 = G__9540;
i__7952_9536 = G__9541;
continue;
}
} else
{var temp__4092__auto___9542 = cljs.core.seq.call(null,seq__7949_9533);if(temp__4092__auto___9542)
{var seq__7949_9543__$1 = temp__4092__auto___9542;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7949_9543__$1))
{var c__5634__auto___9544 = cljs.core.chunk_first.call(null,seq__7949_9543__$1);{
var G__9545 = cljs.core.chunk_rest.call(null,seq__7949_9543__$1);
var G__9546 = c__5634__auto___9544;
var G__9547 = cljs.core.count.call(null,c__5634__auto___9544);
var G__9548 = 0;
seq__7949_9533 = G__9545;
chunk__7950_9534 = G__9546;
count__7951_9535 = G__9547;
i__7952_9536 = G__9548;
continue;
}
} else
{var arg__6573__auto___9549 = cljs.core.first.call(null,seq__7949_9543__$1);a__6572__auto__.push(arg__6573__auto___9549);
{
var G__9550 = cljs.core.next.call(null,seq__7949_9543__$1);
var G__9551 = null;
var G__9552 = 0;
var G__9553 = 0;
seq__7949_9533 = G__9550;
chunk__7950_9534 = G__9551;
count__7951_9535 = G__9552;
i__7952_9536 = G__9553;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.hr.apply(null,a__6572__auto__);
};
var hr = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return hr__delegate.call(this,args__6571__auto__);};
hr.cljs$lang$maxFixedArity = 0;
hr.cljs$lang$applyTo = (function (arglist__9554){
var args__6571__auto__ = cljs.core.seq(arglist__9554);
return hr__delegate(args__6571__auto__);
});
hr.cljs$core$IFn$_invoke$arity$variadic = hr__delegate;
return hr;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.html = (function() { 
var html__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__7957_9555 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__7958_9556 = null;var count__7959_9557 = 0;var i__7960_9558 = 0;while(true){
if((i__7960_9558 < count__7959_9557))
{var arg__6573__auto___9559 = cljs.core._nth.call(null,chunk__7958_9556,i__7960_9558);a__6572__auto__.push(arg__6573__auto___9559);
{
var G__9560 = seq__7957_9555;
var G__9561 = chunk__7958_9556;
var G__9562 = count__7959_9557;
var G__9563 = (i__7960_9558 + 1);
seq__7957_9555 = G__9560;
chunk__7958_9556 = G__9561;
count__7959_9557 = G__9562;
i__7960_9558 = G__9563;
continue;
}
} else
{var temp__4092__auto___9564 = cljs.core.seq.call(null,seq__7957_9555);if(temp__4092__auto___9564)
{var seq__7957_9565__$1 = temp__4092__auto___9564;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7957_9565__$1))
{var c__5634__auto___9566 = cljs.core.chunk_first.call(null,seq__7957_9565__$1);{
var G__9567 = cljs.core.chunk_rest.call(null,seq__7957_9565__$1);
var G__9568 = c__5634__auto___9566;
var G__9569 = cljs.core.count.call(null,c__5634__auto___9566);
var G__9570 = 0;
seq__7957_9555 = G__9567;
chunk__7958_9556 = G__9568;
count__7959_9557 = G__9569;
i__7960_9558 = G__9570;
continue;
}
} else
{var arg__6573__auto___9571 = cljs.core.first.call(null,seq__7957_9565__$1);a__6572__auto__.push(arg__6573__auto___9571);
{
var G__9572 = cljs.core.next.call(null,seq__7957_9565__$1);
var G__9573 = null;
var G__9574 = 0;
var G__9575 = 0;
seq__7957_9555 = G__9572;
chunk__7958_9556 = G__9573;
count__7959_9557 = G__9574;
i__7960_9558 = G__9575;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.html.apply(null,a__6572__auto__);
};
var html = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return html__delegate.call(this,args__6571__auto__);};
html.cljs$lang$maxFixedArity = 0;
html.cljs$lang$applyTo = (function (arglist__9576){
var args__6571__auto__ = cljs.core.seq(arglist__9576);
return html__delegate(args__6571__auto__);
});
html.cljs$core$IFn$_invoke$arity$variadic = html__delegate;
return html;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.i = (function() { 
var i__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__7965_9577 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__7966_9578 = null;var count__7967_9579 = 0;var i__7968_9580 = 0;while(true){
if((i__7968_9580 < count__7967_9579))
{var arg__6573__auto___9581 = cljs.core._nth.call(null,chunk__7966_9578,i__7968_9580);a__6572__auto__.push(arg__6573__auto___9581);
{
var G__9582 = seq__7965_9577;
var G__9583 = chunk__7966_9578;
var G__9584 = count__7967_9579;
var G__9585 = (i__7968_9580 + 1);
seq__7965_9577 = G__9582;
chunk__7966_9578 = G__9583;
count__7967_9579 = G__9584;
i__7968_9580 = G__9585;
continue;
}
} else
{var temp__4092__auto___9586 = cljs.core.seq.call(null,seq__7965_9577);if(temp__4092__auto___9586)
{var seq__7965_9587__$1 = temp__4092__auto___9586;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7965_9587__$1))
{var c__5634__auto___9588 = cljs.core.chunk_first.call(null,seq__7965_9587__$1);{
var G__9589 = cljs.core.chunk_rest.call(null,seq__7965_9587__$1);
var G__9590 = c__5634__auto___9588;
var G__9591 = cljs.core.count.call(null,c__5634__auto___9588);
var G__9592 = 0;
seq__7965_9577 = G__9589;
chunk__7966_9578 = G__9590;
count__7967_9579 = G__9591;
i__7968_9580 = G__9592;
continue;
}
} else
{var arg__6573__auto___9593 = cljs.core.first.call(null,seq__7965_9587__$1);a__6572__auto__.push(arg__6573__auto___9593);
{
var G__9594 = cljs.core.next.call(null,seq__7965_9587__$1);
var G__9595 = null;
var G__9596 = 0;
var G__9597 = 0;
seq__7965_9577 = G__9594;
chunk__7966_9578 = G__9595;
count__7967_9579 = G__9596;
i__7968_9580 = G__9597;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.i.apply(null,a__6572__auto__);
};
var i = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return i__delegate.call(this,args__6571__auto__);};
i.cljs$lang$maxFixedArity = 0;
i.cljs$lang$applyTo = (function (arglist__9598){
var args__6571__auto__ = cljs.core.seq(arglist__9598);
return i__delegate(args__6571__auto__);
});
i.cljs$core$IFn$_invoke$arity$variadic = i__delegate;
return i;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.iframe = (function() { 
var iframe__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__7973_9599 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__7974_9600 = null;var count__7975_9601 = 0;var i__7976_9602 = 0;while(true){
if((i__7976_9602 < count__7975_9601))
{var arg__6573__auto___9603 = cljs.core._nth.call(null,chunk__7974_9600,i__7976_9602);a__6572__auto__.push(arg__6573__auto___9603);
{
var G__9604 = seq__7973_9599;
var G__9605 = chunk__7974_9600;
var G__9606 = count__7975_9601;
var G__9607 = (i__7976_9602 + 1);
seq__7973_9599 = G__9604;
chunk__7974_9600 = G__9605;
count__7975_9601 = G__9606;
i__7976_9602 = G__9607;
continue;
}
} else
{var temp__4092__auto___9608 = cljs.core.seq.call(null,seq__7973_9599);if(temp__4092__auto___9608)
{var seq__7973_9609__$1 = temp__4092__auto___9608;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7973_9609__$1))
{var c__5634__auto___9610 = cljs.core.chunk_first.call(null,seq__7973_9609__$1);{
var G__9611 = cljs.core.chunk_rest.call(null,seq__7973_9609__$1);
var G__9612 = c__5634__auto___9610;
var G__9613 = cljs.core.count.call(null,c__5634__auto___9610);
var G__9614 = 0;
seq__7973_9599 = G__9611;
chunk__7974_9600 = G__9612;
count__7975_9601 = G__9613;
i__7976_9602 = G__9614;
continue;
}
} else
{var arg__6573__auto___9615 = cljs.core.first.call(null,seq__7973_9609__$1);a__6572__auto__.push(arg__6573__auto___9615);
{
var G__9616 = cljs.core.next.call(null,seq__7973_9609__$1);
var G__9617 = null;
var G__9618 = 0;
var G__9619 = 0;
seq__7973_9599 = G__9616;
chunk__7974_9600 = G__9617;
count__7975_9601 = G__9618;
i__7976_9602 = G__9619;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.iframe.apply(null,a__6572__auto__);
};
var iframe = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return iframe__delegate.call(this,args__6571__auto__);};
iframe.cljs$lang$maxFixedArity = 0;
iframe.cljs$lang$applyTo = (function (arglist__9620){
var args__6571__auto__ = cljs.core.seq(arglist__9620);
return iframe__delegate(args__6571__auto__);
});
iframe.cljs$core$IFn$_invoke$arity$variadic = iframe__delegate;
return iframe;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.img = (function() { 
var img__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__7981_9621 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__7982_9622 = null;var count__7983_9623 = 0;var i__7984_9624 = 0;while(true){
if((i__7984_9624 < count__7983_9623))
{var arg__6573__auto___9625 = cljs.core._nth.call(null,chunk__7982_9622,i__7984_9624);a__6572__auto__.push(arg__6573__auto___9625);
{
var G__9626 = seq__7981_9621;
var G__9627 = chunk__7982_9622;
var G__9628 = count__7983_9623;
var G__9629 = (i__7984_9624 + 1);
seq__7981_9621 = G__9626;
chunk__7982_9622 = G__9627;
count__7983_9623 = G__9628;
i__7984_9624 = G__9629;
continue;
}
} else
{var temp__4092__auto___9630 = cljs.core.seq.call(null,seq__7981_9621);if(temp__4092__auto___9630)
{var seq__7981_9631__$1 = temp__4092__auto___9630;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7981_9631__$1))
{var c__5634__auto___9632 = cljs.core.chunk_first.call(null,seq__7981_9631__$1);{
var G__9633 = cljs.core.chunk_rest.call(null,seq__7981_9631__$1);
var G__9634 = c__5634__auto___9632;
var G__9635 = cljs.core.count.call(null,c__5634__auto___9632);
var G__9636 = 0;
seq__7981_9621 = G__9633;
chunk__7982_9622 = G__9634;
count__7983_9623 = G__9635;
i__7984_9624 = G__9636;
continue;
}
} else
{var arg__6573__auto___9637 = cljs.core.first.call(null,seq__7981_9631__$1);a__6572__auto__.push(arg__6573__auto___9637);
{
var G__9638 = cljs.core.next.call(null,seq__7981_9631__$1);
var G__9639 = null;
var G__9640 = 0;
var G__9641 = 0;
seq__7981_9621 = G__9638;
chunk__7982_9622 = G__9639;
count__7983_9623 = G__9640;
i__7984_9624 = G__9641;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.img.apply(null,a__6572__auto__);
};
var img = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return img__delegate.call(this,args__6571__auto__);};
img.cljs$lang$maxFixedArity = 0;
img.cljs$lang$applyTo = (function (arglist__9642){
var args__6571__auto__ = cljs.core.seq(arglist__9642);
return img__delegate(args__6571__auto__);
});
img.cljs$core$IFn$_invoke$arity$variadic = img__delegate;
return img;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.input = (function() { 
var input__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__7989_9643 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__7990_9644 = null;var count__7991_9645 = 0;var i__7992_9646 = 0;while(true){
if((i__7992_9646 < count__7991_9645))
{var arg__6573__auto___9647 = cljs.core._nth.call(null,chunk__7990_9644,i__7992_9646);a__6572__auto__.push(arg__6573__auto___9647);
{
var G__9648 = seq__7989_9643;
var G__9649 = chunk__7990_9644;
var G__9650 = count__7991_9645;
var G__9651 = (i__7992_9646 + 1);
seq__7989_9643 = G__9648;
chunk__7990_9644 = G__9649;
count__7991_9645 = G__9650;
i__7992_9646 = G__9651;
continue;
}
} else
{var temp__4092__auto___9652 = cljs.core.seq.call(null,seq__7989_9643);if(temp__4092__auto___9652)
{var seq__7989_9653__$1 = temp__4092__auto___9652;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7989_9653__$1))
{var c__5634__auto___9654 = cljs.core.chunk_first.call(null,seq__7989_9653__$1);{
var G__9655 = cljs.core.chunk_rest.call(null,seq__7989_9653__$1);
var G__9656 = c__5634__auto___9654;
var G__9657 = cljs.core.count.call(null,c__5634__auto___9654);
var G__9658 = 0;
seq__7989_9643 = G__9655;
chunk__7990_9644 = G__9656;
count__7991_9645 = G__9657;
i__7992_9646 = G__9658;
continue;
}
} else
{var arg__6573__auto___9659 = cljs.core.first.call(null,seq__7989_9653__$1);a__6572__auto__.push(arg__6573__auto___9659);
{
var G__9660 = cljs.core.next.call(null,seq__7989_9653__$1);
var G__9661 = null;
var G__9662 = 0;
var G__9663 = 0;
seq__7989_9643 = G__9660;
chunk__7990_9644 = G__9661;
count__7991_9645 = G__9662;
i__7992_9646 = G__9663;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.input.apply(null,a__6572__auto__);
};
var input = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return input__delegate.call(this,args__6571__auto__);};
input.cljs$lang$maxFixedArity = 0;
input.cljs$lang$applyTo = (function (arglist__9664){
var args__6571__auto__ = cljs.core.seq(arglist__9664);
return input__delegate(args__6571__auto__);
});
input.cljs$core$IFn$_invoke$arity$variadic = input__delegate;
return input;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.ins = (function() { 
var ins__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__7997_9665 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__7998_9666 = null;var count__7999_9667 = 0;var i__8000_9668 = 0;while(true){
if((i__8000_9668 < count__7999_9667))
{var arg__6573__auto___9669 = cljs.core._nth.call(null,chunk__7998_9666,i__8000_9668);a__6572__auto__.push(arg__6573__auto___9669);
{
var G__9670 = seq__7997_9665;
var G__9671 = chunk__7998_9666;
var G__9672 = count__7999_9667;
var G__9673 = (i__8000_9668 + 1);
seq__7997_9665 = G__9670;
chunk__7998_9666 = G__9671;
count__7999_9667 = G__9672;
i__8000_9668 = G__9673;
continue;
}
} else
{var temp__4092__auto___9674 = cljs.core.seq.call(null,seq__7997_9665);if(temp__4092__auto___9674)
{var seq__7997_9675__$1 = temp__4092__auto___9674;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7997_9675__$1))
{var c__5634__auto___9676 = cljs.core.chunk_first.call(null,seq__7997_9675__$1);{
var G__9677 = cljs.core.chunk_rest.call(null,seq__7997_9675__$1);
var G__9678 = c__5634__auto___9676;
var G__9679 = cljs.core.count.call(null,c__5634__auto___9676);
var G__9680 = 0;
seq__7997_9665 = G__9677;
chunk__7998_9666 = G__9678;
count__7999_9667 = G__9679;
i__8000_9668 = G__9680;
continue;
}
} else
{var arg__6573__auto___9681 = cljs.core.first.call(null,seq__7997_9675__$1);a__6572__auto__.push(arg__6573__auto___9681);
{
var G__9682 = cljs.core.next.call(null,seq__7997_9675__$1);
var G__9683 = null;
var G__9684 = 0;
var G__9685 = 0;
seq__7997_9665 = G__9682;
chunk__7998_9666 = G__9683;
count__7999_9667 = G__9684;
i__8000_9668 = G__9685;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.ins.apply(null,a__6572__auto__);
};
var ins = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ins__delegate.call(this,args__6571__auto__);};
ins.cljs$lang$maxFixedArity = 0;
ins.cljs$lang$applyTo = (function (arglist__9686){
var args__6571__auto__ = cljs.core.seq(arglist__9686);
return ins__delegate(args__6571__auto__);
});
ins.cljs$core$IFn$_invoke$arity$variadic = ins__delegate;
return ins;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.kbd = (function() { 
var kbd__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__8005_9687 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__8006_9688 = null;var count__8007_9689 = 0;var i__8008_9690 = 0;while(true){
if((i__8008_9690 < count__8007_9689))
{var arg__6573__auto___9691 = cljs.core._nth.call(null,chunk__8006_9688,i__8008_9690);a__6572__auto__.push(arg__6573__auto___9691);
{
var G__9692 = seq__8005_9687;
var G__9693 = chunk__8006_9688;
var G__9694 = count__8007_9689;
var G__9695 = (i__8008_9690 + 1);
seq__8005_9687 = G__9692;
chunk__8006_9688 = G__9693;
count__8007_9689 = G__9694;
i__8008_9690 = G__9695;
continue;
}
} else
{var temp__4092__auto___9696 = cljs.core.seq.call(null,seq__8005_9687);if(temp__4092__auto___9696)
{var seq__8005_9697__$1 = temp__4092__auto___9696;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8005_9697__$1))
{var c__5634__auto___9698 = cljs.core.chunk_first.call(null,seq__8005_9697__$1);{
var G__9699 = cljs.core.chunk_rest.call(null,seq__8005_9697__$1);
var G__9700 = c__5634__auto___9698;
var G__9701 = cljs.core.count.call(null,c__5634__auto___9698);
var G__9702 = 0;
seq__8005_9687 = G__9699;
chunk__8006_9688 = G__9700;
count__8007_9689 = G__9701;
i__8008_9690 = G__9702;
continue;
}
} else
{var arg__6573__auto___9703 = cljs.core.first.call(null,seq__8005_9697__$1);a__6572__auto__.push(arg__6573__auto___9703);
{
var G__9704 = cljs.core.next.call(null,seq__8005_9697__$1);
var G__9705 = null;
var G__9706 = 0;
var G__9707 = 0;
seq__8005_9687 = G__9704;
chunk__8006_9688 = G__9705;
count__8007_9689 = G__9706;
i__8008_9690 = G__9707;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.kbd.apply(null,a__6572__auto__);
};
var kbd = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return kbd__delegate.call(this,args__6571__auto__);};
kbd.cljs$lang$maxFixedArity = 0;
kbd.cljs$lang$applyTo = (function (arglist__9708){
var args__6571__auto__ = cljs.core.seq(arglist__9708);
return kbd__delegate(args__6571__auto__);
});
kbd.cljs$core$IFn$_invoke$arity$variadic = kbd__delegate;
return kbd;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.keygen = (function() { 
var keygen__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__8013_9709 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__8014_9710 = null;var count__8015_9711 = 0;var i__8016_9712 = 0;while(true){
if((i__8016_9712 < count__8015_9711))
{var arg__6573__auto___9713 = cljs.core._nth.call(null,chunk__8014_9710,i__8016_9712);a__6572__auto__.push(arg__6573__auto___9713);
{
var G__9714 = seq__8013_9709;
var G__9715 = chunk__8014_9710;
var G__9716 = count__8015_9711;
var G__9717 = (i__8016_9712 + 1);
seq__8013_9709 = G__9714;
chunk__8014_9710 = G__9715;
count__8015_9711 = G__9716;
i__8016_9712 = G__9717;
continue;
}
} else
{var temp__4092__auto___9718 = cljs.core.seq.call(null,seq__8013_9709);if(temp__4092__auto___9718)
{var seq__8013_9719__$1 = temp__4092__auto___9718;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8013_9719__$1))
{var c__5634__auto___9720 = cljs.core.chunk_first.call(null,seq__8013_9719__$1);{
var G__9721 = cljs.core.chunk_rest.call(null,seq__8013_9719__$1);
var G__9722 = c__5634__auto___9720;
var G__9723 = cljs.core.count.call(null,c__5634__auto___9720);
var G__9724 = 0;
seq__8013_9709 = G__9721;
chunk__8014_9710 = G__9722;
count__8015_9711 = G__9723;
i__8016_9712 = G__9724;
continue;
}
} else
{var arg__6573__auto___9725 = cljs.core.first.call(null,seq__8013_9719__$1);a__6572__auto__.push(arg__6573__auto___9725);
{
var G__9726 = cljs.core.next.call(null,seq__8013_9719__$1);
var G__9727 = null;
var G__9728 = 0;
var G__9729 = 0;
seq__8013_9709 = G__9726;
chunk__8014_9710 = G__9727;
count__8015_9711 = G__9728;
i__8016_9712 = G__9729;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.keygen.apply(null,a__6572__auto__);
};
var keygen = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return keygen__delegate.call(this,args__6571__auto__);};
keygen.cljs$lang$maxFixedArity = 0;
keygen.cljs$lang$applyTo = (function (arglist__9730){
var args__6571__auto__ = cljs.core.seq(arglist__9730);
return keygen__delegate(args__6571__auto__);
});
keygen.cljs$core$IFn$_invoke$arity$variadic = keygen__delegate;
return keygen;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.label = (function() { 
var label__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__8021_9731 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__8022_9732 = null;var count__8023_9733 = 0;var i__8024_9734 = 0;while(true){
if((i__8024_9734 < count__8023_9733))
{var arg__6573__auto___9735 = cljs.core._nth.call(null,chunk__8022_9732,i__8024_9734);a__6572__auto__.push(arg__6573__auto___9735);
{
var G__9736 = seq__8021_9731;
var G__9737 = chunk__8022_9732;
var G__9738 = count__8023_9733;
var G__9739 = (i__8024_9734 + 1);
seq__8021_9731 = G__9736;
chunk__8022_9732 = G__9737;
count__8023_9733 = G__9738;
i__8024_9734 = G__9739;
continue;
}
} else
{var temp__4092__auto___9740 = cljs.core.seq.call(null,seq__8021_9731);if(temp__4092__auto___9740)
{var seq__8021_9741__$1 = temp__4092__auto___9740;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8021_9741__$1))
{var c__5634__auto___9742 = cljs.core.chunk_first.call(null,seq__8021_9741__$1);{
var G__9743 = cljs.core.chunk_rest.call(null,seq__8021_9741__$1);
var G__9744 = c__5634__auto___9742;
var G__9745 = cljs.core.count.call(null,c__5634__auto___9742);
var G__9746 = 0;
seq__8021_9731 = G__9743;
chunk__8022_9732 = G__9744;
count__8023_9733 = G__9745;
i__8024_9734 = G__9746;
continue;
}
} else
{var arg__6573__auto___9747 = cljs.core.first.call(null,seq__8021_9741__$1);a__6572__auto__.push(arg__6573__auto___9747);
{
var G__9748 = cljs.core.next.call(null,seq__8021_9741__$1);
var G__9749 = null;
var G__9750 = 0;
var G__9751 = 0;
seq__8021_9731 = G__9748;
chunk__8022_9732 = G__9749;
count__8023_9733 = G__9750;
i__8024_9734 = G__9751;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.label.apply(null,a__6572__auto__);
};
var label = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return label__delegate.call(this,args__6571__auto__);};
label.cljs$lang$maxFixedArity = 0;
label.cljs$lang$applyTo = (function (arglist__9752){
var args__6571__auto__ = cljs.core.seq(arglist__9752);
return label__delegate(args__6571__auto__);
});
label.cljs$core$IFn$_invoke$arity$variadic = label__delegate;
return label;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.legend = (function() { 
var legend__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__8029_9753 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__8030_9754 = null;var count__8031_9755 = 0;var i__8032_9756 = 0;while(true){
if((i__8032_9756 < count__8031_9755))
{var arg__6573__auto___9757 = cljs.core._nth.call(null,chunk__8030_9754,i__8032_9756);a__6572__auto__.push(arg__6573__auto___9757);
{
var G__9758 = seq__8029_9753;
var G__9759 = chunk__8030_9754;
var G__9760 = count__8031_9755;
var G__9761 = (i__8032_9756 + 1);
seq__8029_9753 = G__9758;
chunk__8030_9754 = G__9759;
count__8031_9755 = G__9760;
i__8032_9756 = G__9761;
continue;
}
} else
{var temp__4092__auto___9762 = cljs.core.seq.call(null,seq__8029_9753);if(temp__4092__auto___9762)
{var seq__8029_9763__$1 = temp__4092__auto___9762;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8029_9763__$1))
{var c__5634__auto___9764 = cljs.core.chunk_first.call(null,seq__8029_9763__$1);{
var G__9765 = cljs.core.chunk_rest.call(null,seq__8029_9763__$1);
var G__9766 = c__5634__auto___9764;
var G__9767 = cljs.core.count.call(null,c__5634__auto___9764);
var G__9768 = 0;
seq__8029_9753 = G__9765;
chunk__8030_9754 = G__9766;
count__8031_9755 = G__9767;
i__8032_9756 = G__9768;
continue;
}
} else
{var arg__6573__auto___9769 = cljs.core.first.call(null,seq__8029_9763__$1);a__6572__auto__.push(arg__6573__auto___9769);
{
var G__9770 = cljs.core.next.call(null,seq__8029_9763__$1);
var G__9771 = null;
var G__9772 = 0;
var G__9773 = 0;
seq__8029_9753 = G__9770;
chunk__8030_9754 = G__9771;
count__8031_9755 = G__9772;
i__8032_9756 = G__9773;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.legend.apply(null,a__6572__auto__);
};
var legend = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return legend__delegate.call(this,args__6571__auto__);};
legend.cljs$lang$maxFixedArity = 0;
legend.cljs$lang$applyTo = (function (arglist__9774){
var args__6571__auto__ = cljs.core.seq(arglist__9774);
return legend__delegate(args__6571__auto__);
});
legend.cljs$core$IFn$_invoke$arity$variadic = legend__delegate;
return legend;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.li = (function() { 
var li__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__8037_9775 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__8038_9776 = null;var count__8039_9777 = 0;var i__8040_9778 = 0;while(true){
if((i__8040_9778 < count__8039_9777))
{var arg__6573__auto___9779 = cljs.core._nth.call(null,chunk__8038_9776,i__8040_9778);a__6572__auto__.push(arg__6573__auto___9779);
{
var G__9780 = seq__8037_9775;
var G__9781 = chunk__8038_9776;
var G__9782 = count__8039_9777;
var G__9783 = (i__8040_9778 + 1);
seq__8037_9775 = G__9780;
chunk__8038_9776 = G__9781;
count__8039_9777 = G__9782;
i__8040_9778 = G__9783;
continue;
}
} else
{var temp__4092__auto___9784 = cljs.core.seq.call(null,seq__8037_9775);if(temp__4092__auto___9784)
{var seq__8037_9785__$1 = temp__4092__auto___9784;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8037_9785__$1))
{var c__5634__auto___9786 = cljs.core.chunk_first.call(null,seq__8037_9785__$1);{
var G__9787 = cljs.core.chunk_rest.call(null,seq__8037_9785__$1);
var G__9788 = c__5634__auto___9786;
var G__9789 = cljs.core.count.call(null,c__5634__auto___9786);
var G__9790 = 0;
seq__8037_9775 = G__9787;
chunk__8038_9776 = G__9788;
count__8039_9777 = G__9789;
i__8040_9778 = G__9790;
continue;
}
} else
{var arg__6573__auto___9791 = cljs.core.first.call(null,seq__8037_9785__$1);a__6572__auto__.push(arg__6573__auto___9791);
{
var G__9792 = cljs.core.next.call(null,seq__8037_9785__$1);
var G__9793 = null;
var G__9794 = 0;
var G__9795 = 0;
seq__8037_9775 = G__9792;
chunk__8038_9776 = G__9793;
count__8039_9777 = G__9794;
i__8040_9778 = G__9795;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.li.apply(null,a__6572__auto__);
};
var li = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return li__delegate.call(this,args__6571__auto__);};
li.cljs$lang$maxFixedArity = 0;
li.cljs$lang$applyTo = (function (arglist__9796){
var args__6571__auto__ = cljs.core.seq(arglist__9796);
return li__delegate(args__6571__auto__);
});
li.cljs$core$IFn$_invoke$arity$variadic = li__delegate;
return li;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.link = (function() { 
var link__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__8045_9797 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__8046_9798 = null;var count__8047_9799 = 0;var i__8048_9800 = 0;while(true){
if((i__8048_9800 < count__8047_9799))
{var arg__6573__auto___9801 = cljs.core._nth.call(null,chunk__8046_9798,i__8048_9800);a__6572__auto__.push(arg__6573__auto___9801);
{
var G__9802 = seq__8045_9797;
var G__9803 = chunk__8046_9798;
var G__9804 = count__8047_9799;
var G__9805 = (i__8048_9800 + 1);
seq__8045_9797 = G__9802;
chunk__8046_9798 = G__9803;
count__8047_9799 = G__9804;
i__8048_9800 = G__9805;
continue;
}
} else
{var temp__4092__auto___9806 = cljs.core.seq.call(null,seq__8045_9797);if(temp__4092__auto___9806)
{var seq__8045_9807__$1 = temp__4092__auto___9806;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8045_9807__$1))
{var c__5634__auto___9808 = cljs.core.chunk_first.call(null,seq__8045_9807__$1);{
var G__9809 = cljs.core.chunk_rest.call(null,seq__8045_9807__$1);
var G__9810 = c__5634__auto___9808;
var G__9811 = cljs.core.count.call(null,c__5634__auto___9808);
var G__9812 = 0;
seq__8045_9797 = G__9809;
chunk__8046_9798 = G__9810;
count__8047_9799 = G__9811;
i__8048_9800 = G__9812;
continue;
}
} else
{var arg__6573__auto___9813 = cljs.core.first.call(null,seq__8045_9807__$1);a__6572__auto__.push(arg__6573__auto___9813);
{
var G__9814 = cljs.core.next.call(null,seq__8045_9807__$1);
var G__9815 = null;
var G__9816 = 0;
var G__9817 = 0;
seq__8045_9797 = G__9814;
chunk__8046_9798 = G__9815;
count__8047_9799 = G__9816;
i__8048_9800 = G__9817;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.link.apply(null,a__6572__auto__);
};
var link = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return link__delegate.call(this,args__6571__auto__);};
link.cljs$lang$maxFixedArity = 0;
link.cljs$lang$applyTo = (function (arglist__9818){
var args__6571__auto__ = cljs.core.seq(arglist__9818);
return link__delegate(args__6571__auto__);
});
link.cljs$core$IFn$_invoke$arity$variadic = link__delegate;
return link;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.main = (function() { 
var main__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__8053_9819 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__8054_9820 = null;var count__8055_9821 = 0;var i__8056_9822 = 0;while(true){
if((i__8056_9822 < count__8055_9821))
{var arg__6573__auto___9823 = cljs.core._nth.call(null,chunk__8054_9820,i__8056_9822);a__6572__auto__.push(arg__6573__auto___9823);
{
var G__9824 = seq__8053_9819;
var G__9825 = chunk__8054_9820;
var G__9826 = count__8055_9821;
var G__9827 = (i__8056_9822 + 1);
seq__8053_9819 = G__9824;
chunk__8054_9820 = G__9825;
count__8055_9821 = G__9826;
i__8056_9822 = G__9827;
continue;
}
} else
{var temp__4092__auto___9828 = cljs.core.seq.call(null,seq__8053_9819);if(temp__4092__auto___9828)
{var seq__8053_9829__$1 = temp__4092__auto___9828;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8053_9829__$1))
{var c__5634__auto___9830 = cljs.core.chunk_first.call(null,seq__8053_9829__$1);{
var G__9831 = cljs.core.chunk_rest.call(null,seq__8053_9829__$1);
var G__9832 = c__5634__auto___9830;
var G__9833 = cljs.core.count.call(null,c__5634__auto___9830);
var G__9834 = 0;
seq__8053_9819 = G__9831;
chunk__8054_9820 = G__9832;
count__8055_9821 = G__9833;
i__8056_9822 = G__9834;
continue;
}
} else
{var arg__6573__auto___9835 = cljs.core.first.call(null,seq__8053_9829__$1);a__6572__auto__.push(arg__6573__auto___9835);
{
var G__9836 = cljs.core.next.call(null,seq__8053_9829__$1);
var G__9837 = null;
var G__9838 = 0;
var G__9839 = 0;
seq__8053_9819 = G__9836;
chunk__8054_9820 = G__9837;
count__8055_9821 = G__9838;
i__8056_9822 = G__9839;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.main.apply(null,a__6572__auto__);
};
var main = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return main__delegate.call(this,args__6571__auto__);};
main.cljs$lang$maxFixedArity = 0;
main.cljs$lang$applyTo = (function (arglist__9840){
var args__6571__auto__ = cljs.core.seq(arglist__9840);
return main__delegate(args__6571__auto__);
});
main.cljs$core$IFn$_invoke$arity$variadic = main__delegate;
return main;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.map = (function() { 
var map__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__8061_9841 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__8062_9842 = null;var count__8063_9843 = 0;var i__8064_9844 = 0;while(true){
if((i__8064_9844 < count__8063_9843))
{var arg__6573__auto___9845 = cljs.core._nth.call(null,chunk__8062_9842,i__8064_9844);a__6572__auto__.push(arg__6573__auto___9845);
{
var G__9846 = seq__8061_9841;
var G__9847 = chunk__8062_9842;
var G__9848 = count__8063_9843;
var G__9849 = (i__8064_9844 + 1);
seq__8061_9841 = G__9846;
chunk__8062_9842 = G__9847;
count__8063_9843 = G__9848;
i__8064_9844 = G__9849;
continue;
}
} else
{var temp__4092__auto___9850 = cljs.core.seq.call(null,seq__8061_9841);if(temp__4092__auto___9850)
{var seq__8061_9851__$1 = temp__4092__auto___9850;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8061_9851__$1))
{var c__5634__auto___9852 = cljs.core.chunk_first.call(null,seq__8061_9851__$1);{
var G__9853 = cljs.core.chunk_rest.call(null,seq__8061_9851__$1);
var G__9854 = c__5634__auto___9852;
var G__9855 = cljs.core.count.call(null,c__5634__auto___9852);
var G__9856 = 0;
seq__8061_9841 = G__9853;
chunk__8062_9842 = G__9854;
count__8063_9843 = G__9855;
i__8064_9844 = G__9856;
continue;
}
} else
{var arg__6573__auto___9857 = cljs.core.first.call(null,seq__8061_9851__$1);a__6572__auto__.push(arg__6573__auto___9857);
{
var G__9858 = cljs.core.next.call(null,seq__8061_9851__$1);
var G__9859 = null;
var G__9860 = 0;
var G__9861 = 0;
seq__8061_9841 = G__9858;
chunk__8062_9842 = G__9859;
count__8063_9843 = G__9860;
i__8064_9844 = G__9861;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.map.apply(null,a__6572__auto__);
};
var map = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return map__delegate.call(this,args__6571__auto__);};
map.cljs$lang$maxFixedArity = 0;
map.cljs$lang$applyTo = (function (arglist__9862){
var args__6571__auto__ = cljs.core.seq(arglist__9862);
return map__delegate(args__6571__auto__);
});
map.cljs$core$IFn$_invoke$arity$variadic = map__delegate;
return map;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.mark = (function() { 
var mark__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__8069_9863 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__8070_9864 = null;var count__8071_9865 = 0;var i__8072_9866 = 0;while(true){
if((i__8072_9866 < count__8071_9865))
{var arg__6573__auto___9867 = cljs.core._nth.call(null,chunk__8070_9864,i__8072_9866);a__6572__auto__.push(arg__6573__auto___9867);
{
var G__9868 = seq__8069_9863;
var G__9869 = chunk__8070_9864;
var G__9870 = count__8071_9865;
var G__9871 = (i__8072_9866 + 1);
seq__8069_9863 = G__9868;
chunk__8070_9864 = G__9869;
count__8071_9865 = G__9870;
i__8072_9866 = G__9871;
continue;
}
} else
{var temp__4092__auto___9872 = cljs.core.seq.call(null,seq__8069_9863);if(temp__4092__auto___9872)
{var seq__8069_9873__$1 = temp__4092__auto___9872;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8069_9873__$1))
{var c__5634__auto___9874 = cljs.core.chunk_first.call(null,seq__8069_9873__$1);{
var G__9875 = cljs.core.chunk_rest.call(null,seq__8069_9873__$1);
var G__9876 = c__5634__auto___9874;
var G__9877 = cljs.core.count.call(null,c__5634__auto___9874);
var G__9878 = 0;
seq__8069_9863 = G__9875;
chunk__8070_9864 = G__9876;
count__8071_9865 = G__9877;
i__8072_9866 = G__9878;
continue;
}
} else
{var arg__6573__auto___9879 = cljs.core.first.call(null,seq__8069_9873__$1);a__6572__auto__.push(arg__6573__auto___9879);
{
var G__9880 = cljs.core.next.call(null,seq__8069_9873__$1);
var G__9881 = null;
var G__9882 = 0;
var G__9883 = 0;
seq__8069_9863 = G__9880;
chunk__8070_9864 = G__9881;
count__8071_9865 = G__9882;
i__8072_9866 = G__9883;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.mark.apply(null,a__6572__auto__);
};
var mark = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return mark__delegate.call(this,args__6571__auto__);};
mark.cljs$lang$maxFixedArity = 0;
mark.cljs$lang$applyTo = (function (arglist__9884){
var args__6571__auto__ = cljs.core.seq(arglist__9884);
return mark__delegate(args__6571__auto__);
});
mark.cljs$core$IFn$_invoke$arity$variadic = mark__delegate;
return mark;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.menu = (function() { 
var menu__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__8077_9885 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__8078_9886 = null;var count__8079_9887 = 0;var i__8080_9888 = 0;while(true){
if((i__8080_9888 < count__8079_9887))
{var arg__6573__auto___9889 = cljs.core._nth.call(null,chunk__8078_9886,i__8080_9888);a__6572__auto__.push(arg__6573__auto___9889);
{
var G__9890 = seq__8077_9885;
var G__9891 = chunk__8078_9886;
var G__9892 = count__8079_9887;
var G__9893 = (i__8080_9888 + 1);
seq__8077_9885 = G__9890;
chunk__8078_9886 = G__9891;
count__8079_9887 = G__9892;
i__8080_9888 = G__9893;
continue;
}
} else
{var temp__4092__auto___9894 = cljs.core.seq.call(null,seq__8077_9885);if(temp__4092__auto___9894)
{var seq__8077_9895__$1 = temp__4092__auto___9894;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8077_9895__$1))
{var c__5634__auto___9896 = cljs.core.chunk_first.call(null,seq__8077_9895__$1);{
var G__9897 = cljs.core.chunk_rest.call(null,seq__8077_9895__$1);
var G__9898 = c__5634__auto___9896;
var G__9899 = cljs.core.count.call(null,c__5634__auto___9896);
var G__9900 = 0;
seq__8077_9885 = G__9897;
chunk__8078_9886 = G__9898;
count__8079_9887 = G__9899;
i__8080_9888 = G__9900;
continue;
}
} else
{var arg__6573__auto___9901 = cljs.core.first.call(null,seq__8077_9895__$1);a__6572__auto__.push(arg__6573__auto___9901);
{
var G__9902 = cljs.core.next.call(null,seq__8077_9895__$1);
var G__9903 = null;
var G__9904 = 0;
var G__9905 = 0;
seq__8077_9885 = G__9902;
chunk__8078_9886 = G__9903;
count__8079_9887 = G__9904;
i__8080_9888 = G__9905;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.menu.apply(null,a__6572__auto__);
};
var menu = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return menu__delegate.call(this,args__6571__auto__);};
menu.cljs$lang$maxFixedArity = 0;
menu.cljs$lang$applyTo = (function (arglist__9906){
var args__6571__auto__ = cljs.core.seq(arglist__9906);
return menu__delegate(args__6571__auto__);
});
menu.cljs$core$IFn$_invoke$arity$variadic = menu__delegate;
return menu;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.menuitem = (function() { 
var menuitem__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__8085_9907 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__8086_9908 = null;var count__8087_9909 = 0;var i__8088_9910 = 0;while(true){
if((i__8088_9910 < count__8087_9909))
{var arg__6573__auto___9911 = cljs.core._nth.call(null,chunk__8086_9908,i__8088_9910);a__6572__auto__.push(arg__6573__auto___9911);
{
var G__9912 = seq__8085_9907;
var G__9913 = chunk__8086_9908;
var G__9914 = count__8087_9909;
var G__9915 = (i__8088_9910 + 1);
seq__8085_9907 = G__9912;
chunk__8086_9908 = G__9913;
count__8087_9909 = G__9914;
i__8088_9910 = G__9915;
continue;
}
} else
{var temp__4092__auto___9916 = cljs.core.seq.call(null,seq__8085_9907);if(temp__4092__auto___9916)
{var seq__8085_9917__$1 = temp__4092__auto___9916;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8085_9917__$1))
{var c__5634__auto___9918 = cljs.core.chunk_first.call(null,seq__8085_9917__$1);{
var G__9919 = cljs.core.chunk_rest.call(null,seq__8085_9917__$1);
var G__9920 = c__5634__auto___9918;
var G__9921 = cljs.core.count.call(null,c__5634__auto___9918);
var G__9922 = 0;
seq__8085_9907 = G__9919;
chunk__8086_9908 = G__9920;
count__8087_9909 = G__9921;
i__8088_9910 = G__9922;
continue;
}
} else
{var arg__6573__auto___9923 = cljs.core.first.call(null,seq__8085_9917__$1);a__6572__auto__.push(arg__6573__auto___9923);
{
var G__9924 = cljs.core.next.call(null,seq__8085_9917__$1);
var G__9925 = null;
var G__9926 = 0;
var G__9927 = 0;
seq__8085_9907 = G__9924;
chunk__8086_9908 = G__9925;
count__8087_9909 = G__9926;
i__8088_9910 = G__9927;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.menuitem.apply(null,a__6572__auto__);
};
var menuitem = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return menuitem__delegate.call(this,args__6571__auto__);};
menuitem.cljs$lang$maxFixedArity = 0;
menuitem.cljs$lang$applyTo = (function (arglist__9928){
var args__6571__auto__ = cljs.core.seq(arglist__9928);
return menuitem__delegate(args__6571__auto__);
});
menuitem.cljs$core$IFn$_invoke$arity$variadic = menuitem__delegate;
return menuitem;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.meta = (function() { 
var meta__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__8093_9929 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__8094_9930 = null;var count__8095_9931 = 0;var i__8096_9932 = 0;while(true){
if((i__8096_9932 < count__8095_9931))
{var arg__6573__auto___9933 = cljs.core._nth.call(null,chunk__8094_9930,i__8096_9932);a__6572__auto__.push(arg__6573__auto___9933);
{
var G__9934 = seq__8093_9929;
var G__9935 = chunk__8094_9930;
var G__9936 = count__8095_9931;
var G__9937 = (i__8096_9932 + 1);
seq__8093_9929 = G__9934;
chunk__8094_9930 = G__9935;
count__8095_9931 = G__9936;
i__8096_9932 = G__9937;
continue;
}
} else
{var temp__4092__auto___9938 = cljs.core.seq.call(null,seq__8093_9929);if(temp__4092__auto___9938)
{var seq__8093_9939__$1 = temp__4092__auto___9938;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8093_9939__$1))
{var c__5634__auto___9940 = cljs.core.chunk_first.call(null,seq__8093_9939__$1);{
var G__9941 = cljs.core.chunk_rest.call(null,seq__8093_9939__$1);
var G__9942 = c__5634__auto___9940;
var G__9943 = cljs.core.count.call(null,c__5634__auto___9940);
var G__9944 = 0;
seq__8093_9929 = G__9941;
chunk__8094_9930 = G__9942;
count__8095_9931 = G__9943;
i__8096_9932 = G__9944;
continue;
}
} else
{var arg__6573__auto___9945 = cljs.core.first.call(null,seq__8093_9939__$1);a__6572__auto__.push(arg__6573__auto___9945);
{
var G__9946 = cljs.core.next.call(null,seq__8093_9939__$1);
var G__9947 = null;
var G__9948 = 0;
var G__9949 = 0;
seq__8093_9929 = G__9946;
chunk__8094_9930 = G__9947;
count__8095_9931 = G__9948;
i__8096_9932 = G__9949;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.meta.apply(null,a__6572__auto__);
};
var meta = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return meta__delegate.call(this,args__6571__auto__);};
meta.cljs$lang$maxFixedArity = 0;
meta.cljs$lang$applyTo = (function (arglist__9950){
var args__6571__auto__ = cljs.core.seq(arglist__9950);
return meta__delegate(args__6571__auto__);
});
meta.cljs$core$IFn$_invoke$arity$variadic = meta__delegate;
return meta;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.meter = (function() { 
var meter__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__8101_9951 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__8102_9952 = null;var count__8103_9953 = 0;var i__8104_9954 = 0;while(true){
if((i__8104_9954 < count__8103_9953))
{var arg__6573__auto___9955 = cljs.core._nth.call(null,chunk__8102_9952,i__8104_9954);a__6572__auto__.push(arg__6573__auto___9955);
{
var G__9956 = seq__8101_9951;
var G__9957 = chunk__8102_9952;
var G__9958 = count__8103_9953;
var G__9959 = (i__8104_9954 + 1);
seq__8101_9951 = G__9956;
chunk__8102_9952 = G__9957;
count__8103_9953 = G__9958;
i__8104_9954 = G__9959;
continue;
}
} else
{var temp__4092__auto___9960 = cljs.core.seq.call(null,seq__8101_9951);if(temp__4092__auto___9960)
{var seq__8101_9961__$1 = temp__4092__auto___9960;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8101_9961__$1))
{var c__5634__auto___9962 = cljs.core.chunk_first.call(null,seq__8101_9961__$1);{
var G__9963 = cljs.core.chunk_rest.call(null,seq__8101_9961__$1);
var G__9964 = c__5634__auto___9962;
var G__9965 = cljs.core.count.call(null,c__5634__auto___9962);
var G__9966 = 0;
seq__8101_9951 = G__9963;
chunk__8102_9952 = G__9964;
count__8103_9953 = G__9965;
i__8104_9954 = G__9966;
continue;
}
} else
{var arg__6573__auto___9967 = cljs.core.first.call(null,seq__8101_9961__$1);a__6572__auto__.push(arg__6573__auto___9967);
{
var G__9968 = cljs.core.next.call(null,seq__8101_9961__$1);
var G__9969 = null;
var G__9970 = 0;
var G__9971 = 0;
seq__8101_9951 = G__9968;
chunk__8102_9952 = G__9969;
count__8103_9953 = G__9970;
i__8104_9954 = G__9971;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.meter.apply(null,a__6572__auto__);
};
var meter = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return meter__delegate.call(this,args__6571__auto__);};
meter.cljs$lang$maxFixedArity = 0;
meter.cljs$lang$applyTo = (function (arglist__9972){
var args__6571__auto__ = cljs.core.seq(arglist__9972);
return meter__delegate(args__6571__auto__);
});
meter.cljs$core$IFn$_invoke$arity$variadic = meter__delegate;
return meter;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.nav = (function() { 
var nav__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__8109_9973 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__8110_9974 = null;var count__8111_9975 = 0;var i__8112_9976 = 0;while(true){
if((i__8112_9976 < count__8111_9975))
{var arg__6573__auto___9977 = cljs.core._nth.call(null,chunk__8110_9974,i__8112_9976);a__6572__auto__.push(arg__6573__auto___9977);
{
var G__9978 = seq__8109_9973;
var G__9979 = chunk__8110_9974;
var G__9980 = count__8111_9975;
var G__9981 = (i__8112_9976 + 1);
seq__8109_9973 = G__9978;
chunk__8110_9974 = G__9979;
count__8111_9975 = G__9980;
i__8112_9976 = G__9981;
continue;
}
} else
{var temp__4092__auto___9982 = cljs.core.seq.call(null,seq__8109_9973);if(temp__4092__auto___9982)
{var seq__8109_9983__$1 = temp__4092__auto___9982;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8109_9983__$1))
{var c__5634__auto___9984 = cljs.core.chunk_first.call(null,seq__8109_9983__$1);{
var G__9985 = cljs.core.chunk_rest.call(null,seq__8109_9983__$1);
var G__9986 = c__5634__auto___9984;
var G__9987 = cljs.core.count.call(null,c__5634__auto___9984);
var G__9988 = 0;
seq__8109_9973 = G__9985;
chunk__8110_9974 = G__9986;
count__8111_9975 = G__9987;
i__8112_9976 = G__9988;
continue;
}
} else
{var arg__6573__auto___9989 = cljs.core.first.call(null,seq__8109_9983__$1);a__6572__auto__.push(arg__6573__auto___9989);
{
var G__9990 = cljs.core.next.call(null,seq__8109_9983__$1);
var G__9991 = null;
var G__9992 = 0;
var G__9993 = 0;
seq__8109_9973 = G__9990;
chunk__8110_9974 = G__9991;
count__8111_9975 = G__9992;
i__8112_9976 = G__9993;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.nav.apply(null,a__6572__auto__);
};
var nav = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return nav__delegate.call(this,args__6571__auto__);};
nav.cljs$lang$maxFixedArity = 0;
nav.cljs$lang$applyTo = (function (arglist__9994){
var args__6571__auto__ = cljs.core.seq(arglist__9994);
return nav__delegate(args__6571__auto__);
});
nav.cljs$core$IFn$_invoke$arity$variadic = nav__delegate;
return nav;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.noscript = (function() { 
var noscript__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__8117_9995 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__8118_9996 = null;var count__8119_9997 = 0;var i__8120_9998 = 0;while(true){
if((i__8120_9998 < count__8119_9997))
{var arg__6573__auto___9999 = cljs.core._nth.call(null,chunk__8118_9996,i__8120_9998);a__6572__auto__.push(arg__6573__auto___9999);
{
var G__10000 = seq__8117_9995;
var G__10001 = chunk__8118_9996;
var G__10002 = count__8119_9997;
var G__10003 = (i__8120_9998 + 1);
seq__8117_9995 = G__10000;
chunk__8118_9996 = G__10001;
count__8119_9997 = G__10002;
i__8120_9998 = G__10003;
continue;
}
} else
{var temp__4092__auto___10004 = cljs.core.seq.call(null,seq__8117_9995);if(temp__4092__auto___10004)
{var seq__8117_10005__$1 = temp__4092__auto___10004;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8117_10005__$1))
{var c__5634__auto___10006 = cljs.core.chunk_first.call(null,seq__8117_10005__$1);{
var G__10007 = cljs.core.chunk_rest.call(null,seq__8117_10005__$1);
var G__10008 = c__5634__auto___10006;
var G__10009 = cljs.core.count.call(null,c__5634__auto___10006);
var G__10010 = 0;
seq__8117_9995 = G__10007;
chunk__8118_9996 = G__10008;
count__8119_9997 = G__10009;
i__8120_9998 = G__10010;
continue;
}
} else
{var arg__6573__auto___10011 = cljs.core.first.call(null,seq__8117_10005__$1);a__6572__auto__.push(arg__6573__auto___10011);
{
var G__10012 = cljs.core.next.call(null,seq__8117_10005__$1);
var G__10013 = null;
var G__10014 = 0;
var G__10015 = 0;
seq__8117_9995 = G__10012;
chunk__8118_9996 = G__10013;
count__8119_9997 = G__10014;
i__8120_9998 = G__10015;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.noscript.apply(null,a__6572__auto__);
};
var noscript = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return noscript__delegate.call(this,args__6571__auto__);};
noscript.cljs$lang$maxFixedArity = 0;
noscript.cljs$lang$applyTo = (function (arglist__10016){
var args__6571__auto__ = cljs.core.seq(arglist__10016);
return noscript__delegate(args__6571__auto__);
});
noscript.cljs$core$IFn$_invoke$arity$variadic = noscript__delegate;
return noscript;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.object = (function() { 
var object__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__8125_10017 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__8126_10018 = null;var count__8127_10019 = 0;var i__8128_10020 = 0;while(true){
if((i__8128_10020 < count__8127_10019))
{var arg__6573__auto___10021 = cljs.core._nth.call(null,chunk__8126_10018,i__8128_10020);a__6572__auto__.push(arg__6573__auto___10021);
{
var G__10022 = seq__8125_10017;
var G__10023 = chunk__8126_10018;
var G__10024 = count__8127_10019;
var G__10025 = (i__8128_10020 + 1);
seq__8125_10017 = G__10022;
chunk__8126_10018 = G__10023;
count__8127_10019 = G__10024;
i__8128_10020 = G__10025;
continue;
}
} else
{var temp__4092__auto___10026 = cljs.core.seq.call(null,seq__8125_10017);if(temp__4092__auto___10026)
{var seq__8125_10027__$1 = temp__4092__auto___10026;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8125_10027__$1))
{var c__5634__auto___10028 = cljs.core.chunk_first.call(null,seq__8125_10027__$1);{
var G__10029 = cljs.core.chunk_rest.call(null,seq__8125_10027__$1);
var G__10030 = c__5634__auto___10028;
var G__10031 = cljs.core.count.call(null,c__5634__auto___10028);
var G__10032 = 0;
seq__8125_10017 = G__10029;
chunk__8126_10018 = G__10030;
count__8127_10019 = G__10031;
i__8128_10020 = G__10032;
continue;
}
} else
{var arg__6573__auto___10033 = cljs.core.first.call(null,seq__8125_10027__$1);a__6572__auto__.push(arg__6573__auto___10033);
{
var G__10034 = cljs.core.next.call(null,seq__8125_10027__$1);
var G__10035 = null;
var G__10036 = 0;
var G__10037 = 0;
seq__8125_10017 = G__10034;
chunk__8126_10018 = G__10035;
count__8127_10019 = G__10036;
i__8128_10020 = G__10037;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.object.apply(null,a__6572__auto__);
};
var object = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return object__delegate.call(this,args__6571__auto__);};
object.cljs$lang$maxFixedArity = 0;
object.cljs$lang$applyTo = (function (arglist__10038){
var args__6571__auto__ = cljs.core.seq(arglist__10038);
return object__delegate(args__6571__auto__);
});
object.cljs$core$IFn$_invoke$arity$variadic = object__delegate;
return object;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.ol = (function() { 
var ol__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__8133_10039 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__8134_10040 = null;var count__8135_10041 = 0;var i__8136_10042 = 0;while(true){
if((i__8136_10042 < count__8135_10041))
{var arg__6573__auto___10043 = cljs.core._nth.call(null,chunk__8134_10040,i__8136_10042);a__6572__auto__.push(arg__6573__auto___10043);
{
var G__10044 = seq__8133_10039;
var G__10045 = chunk__8134_10040;
var G__10046 = count__8135_10041;
var G__10047 = (i__8136_10042 + 1);
seq__8133_10039 = G__10044;
chunk__8134_10040 = G__10045;
count__8135_10041 = G__10046;
i__8136_10042 = G__10047;
continue;
}
} else
{var temp__4092__auto___10048 = cljs.core.seq.call(null,seq__8133_10039);if(temp__4092__auto___10048)
{var seq__8133_10049__$1 = temp__4092__auto___10048;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8133_10049__$1))
{var c__5634__auto___10050 = cljs.core.chunk_first.call(null,seq__8133_10049__$1);{
var G__10051 = cljs.core.chunk_rest.call(null,seq__8133_10049__$1);
var G__10052 = c__5634__auto___10050;
var G__10053 = cljs.core.count.call(null,c__5634__auto___10050);
var G__10054 = 0;
seq__8133_10039 = G__10051;
chunk__8134_10040 = G__10052;
count__8135_10041 = G__10053;
i__8136_10042 = G__10054;
continue;
}
} else
{var arg__6573__auto___10055 = cljs.core.first.call(null,seq__8133_10049__$1);a__6572__auto__.push(arg__6573__auto___10055);
{
var G__10056 = cljs.core.next.call(null,seq__8133_10049__$1);
var G__10057 = null;
var G__10058 = 0;
var G__10059 = 0;
seq__8133_10039 = G__10056;
chunk__8134_10040 = G__10057;
count__8135_10041 = G__10058;
i__8136_10042 = G__10059;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.ol.apply(null,a__6572__auto__);
};
var ol = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ol__delegate.call(this,args__6571__auto__);};
ol.cljs$lang$maxFixedArity = 0;
ol.cljs$lang$applyTo = (function (arglist__10060){
var args__6571__auto__ = cljs.core.seq(arglist__10060);
return ol__delegate(args__6571__auto__);
});
ol.cljs$core$IFn$_invoke$arity$variadic = ol__delegate;
return ol;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.optgroup = (function() { 
var optgroup__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__8141_10061 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__8142_10062 = null;var count__8143_10063 = 0;var i__8144_10064 = 0;while(true){
if((i__8144_10064 < count__8143_10063))
{var arg__6573__auto___10065 = cljs.core._nth.call(null,chunk__8142_10062,i__8144_10064);a__6572__auto__.push(arg__6573__auto___10065);
{
var G__10066 = seq__8141_10061;
var G__10067 = chunk__8142_10062;
var G__10068 = count__8143_10063;
var G__10069 = (i__8144_10064 + 1);
seq__8141_10061 = G__10066;
chunk__8142_10062 = G__10067;
count__8143_10063 = G__10068;
i__8144_10064 = G__10069;
continue;
}
} else
{var temp__4092__auto___10070 = cljs.core.seq.call(null,seq__8141_10061);if(temp__4092__auto___10070)
{var seq__8141_10071__$1 = temp__4092__auto___10070;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8141_10071__$1))
{var c__5634__auto___10072 = cljs.core.chunk_first.call(null,seq__8141_10071__$1);{
var G__10073 = cljs.core.chunk_rest.call(null,seq__8141_10071__$1);
var G__10074 = c__5634__auto___10072;
var G__10075 = cljs.core.count.call(null,c__5634__auto___10072);
var G__10076 = 0;
seq__8141_10061 = G__10073;
chunk__8142_10062 = G__10074;
count__8143_10063 = G__10075;
i__8144_10064 = G__10076;
continue;
}
} else
{var arg__6573__auto___10077 = cljs.core.first.call(null,seq__8141_10071__$1);a__6572__auto__.push(arg__6573__auto___10077);
{
var G__10078 = cljs.core.next.call(null,seq__8141_10071__$1);
var G__10079 = null;
var G__10080 = 0;
var G__10081 = 0;
seq__8141_10061 = G__10078;
chunk__8142_10062 = G__10079;
count__8143_10063 = G__10080;
i__8144_10064 = G__10081;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.optgroup.apply(null,a__6572__auto__);
};
var optgroup = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return optgroup__delegate.call(this,args__6571__auto__);};
optgroup.cljs$lang$maxFixedArity = 0;
optgroup.cljs$lang$applyTo = (function (arglist__10082){
var args__6571__auto__ = cljs.core.seq(arglist__10082);
return optgroup__delegate(args__6571__auto__);
});
optgroup.cljs$core$IFn$_invoke$arity$variadic = optgroup__delegate;
return optgroup;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.option = (function() { 
var option__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__8149_10083 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__8150_10084 = null;var count__8151_10085 = 0;var i__8152_10086 = 0;while(true){
if((i__8152_10086 < count__8151_10085))
{var arg__6573__auto___10087 = cljs.core._nth.call(null,chunk__8150_10084,i__8152_10086);a__6572__auto__.push(arg__6573__auto___10087);
{
var G__10088 = seq__8149_10083;
var G__10089 = chunk__8150_10084;
var G__10090 = count__8151_10085;
var G__10091 = (i__8152_10086 + 1);
seq__8149_10083 = G__10088;
chunk__8150_10084 = G__10089;
count__8151_10085 = G__10090;
i__8152_10086 = G__10091;
continue;
}
} else
{var temp__4092__auto___10092 = cljs.core.seq.call(null,seq__8149_10083);if(temp__4092__auto___10092)
{var seq__8149_10093__$1 = temp__4092__auto___10092;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8149_10093__$1))
{var c__5634__auto___10094 = cljs.core.chunk_first.call(null,seq__8149_10093__$1);{
var G__10095 = cljs.core.chunk_rest.call(null,seq__8149_10093__$1);
var G__10096 = c__5634__auto___10094;
var G__10097 = cljs.core.count.call(null,c__5634__auto___10094);
var G__10098 = 0;
seq__8149_10083 = G__10095;
chunk__8150_10084 = G__10096;
count__8151_10085 = G__10097;
i__8152_10086 = G__10098;
continue;
}
} else
{var arg__6573__auto___10099 = cljs.core.first.call(null,seq__8149_10093__$1);a__6572__auto__.push(arg__6573__auto___10099);
{
var G__10100 = cljs.core.next.call(null,seq__8149_10093__$1);
var G__10101 = null;
var G__10102 = 0;
var G__10103 = 0;
seq__8149_10083 = G__10100;
chunk__8150_10084 = G__10101;
count__8151_10085 = G__10102;
i__8152_10086 = G__10103;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.option.apply(null,a__6572__auto__);
};
var option = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return option__delegate.call(this,args__6571__auto__);};
option.cljs$lang$maxFixedArity = 0;
option.cljs$lang$applyTo = (function (arglist__10104){
var args__6571__auto__ = cljs.core.seq(arglist__10104);
return option__delegate(args__6571__auto__);
});
option.cljs$core$IFn$_invoke$arity$variadic = option__delegate;
return option;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.output = (function() { 
var output__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__8157_10105 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__8158_10106 = null;var count__8159_10107 = 0;var i__8160_10108 = 0;while(true){
if((i__8160_10108 < count__8159_10107))
{var arg__6573__auto___10109 = cljs.core._nth.call(null,chunk__8158_10106,i__8160_10108);a__6572__auto__.push(arg__6573__auto___10109);
{
var G__10110 = seq__8157_10105;
var G__10111 = chunk__8158_10106;
var G__10112 = count__8159_10107;
var G__10113 = (i__8160_10108 + 1);
seq__8157_10105 = G__10110;
chunk__8158_10106 = G__10111;
count__8159_10107 = G__10112;
i__8160_10108 = G__10113;
continue;
}
} else
{var temp__4092__auto___10114 = cljs.core.seq.call(null,seq__8157_10105);if(temp__4092__auto___10114)
{var seq__8157_10115__$1 = temp__4092__auto___10114;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8157_10115__$1))
{var c__5634__auto___10116 = cljs.core.chunk_first.call(null,seq__8157_10115__$1);{
var G__10117 = cljs.core.chunk_rest.call(null,seq__8157_10115__$1);
var G__10118 = c__5634__auto___10116;
var G__10119 = cljs.core.count.call(null,c__5634__auto___10116);
var G__10120 = 0;
seq__8157_10105 = G__10117;
chunk__8158_10106 = G__10118;
count__8159_10107 = G__10119;
i__8160_10108 = G__10120;
continue;
}
} else
{var arg__6573__auto___10121 = cljs.core.first.call(null,seq__8157_10115__$1);a__6572__auto__.push(arg__6573__auto___10121);
{
var G__10122 = cljs.core.next.call(null,seq__8157_10115__$1);
var G__10123 = null;
var G__10124 = 0;
var G__10125 = 0;
seq__8157_10105 = G__10122;
chunk__8158_10106 = G__10123;
count__8159_10107 = G__10124;
i__8160_10108 = G__10125;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.output.apply(null,a__6572__auto__);
};
var output = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return output__delegate.call(this,args__6571__auto__);};
output.cljs$lang$maxFixedArity = 0;
output.cljs$lang$applyTo = (function (arglist__10126){
var args__6571__auto__ = cljs.core.seq(arglist__10126);
return output__delegate(args__6571__auto__);
});
output.cljs$core$IFn$_invoke$arity$variadic = output__delegate;
return output;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.p = (function() { 
var p__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__8165_10127 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__8166_10128 = null;var count__8167_10129 = 0;var i__8168_10130 = 0;while(true){
if((i__8168_10130 < count__8167_10129))
{var arg__6573__auto___10131 = cljs.core._nth.call(null,chunk__8166_10128,i__8168_10130);a__6572__auto__.push(arg__6573__auto___10131);
{
var G__10132 = seq__8165_10127;
var G__10133 = chunk__8166_10128;
var G__10134 = count__8167_10129;
var G__10135 = (i__8168_10130 + 1);
seq__8165_10127 = G__10132;
chunk__8166_10128 = G__10133;
count__8167_10129 = G__10134;
i__8168_10130 = G__10135;
continue;
}
} else
{var temp__4092__auto___10136 = cljs.core.seq.call(null,seq__8165_10127);if(temp__4092__auto___10136)
{var seq__8165_10137__$1 = temp__4092__auto___10136;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8165_10137__$1))
{var c__5634__auto___10138 = cljs.core.chunk_first.call(null,seq__8165_10137__$1);{
var G__10139 = cljs.core.chunk_rest.call(null,seq__8165_10137__$1);
var G__10140 = c__5634__auto___10138;
var G__10141 = cljs.core.count.call(null,c__5634__auto___10138);
var G__10142 = 0;
seq__8165_10127 = G__10139;
chunk__8166_10128 = G__10140;
count__8167_10129 = G__10141;
i__8168_10130 = G__10142;
continue;
}
} else
{var arg__6573__auto___10143 = cljs.core.first.call(null,seq__8165_10137__$1);a__6572__auto__.push(arg__6573__auto___10143);
{
var G__10144 = cljs.core.next.call(null,seq__8165_10137__$1);
var G__10145 = null;
var G__10146 = 0;
var G__10147 = 0;
seq__8165_10127 = G__10144;
chunk__8166_10128 = G__10145;
count__8167_10129 = G__10146;
i__8168_10130 = G__10147;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.p.apply(null,a__6572__auto__);
};
var p = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return p__delegate.call(this,args__6571__auto__);};
p.cljs$lang$maxFixedArity = 0;
p.cljs$lang$applyTo = (function (arglist__10148){
var args__6571__auto__ = cljs.core.seq(arglist__10148);
return p__delegate(args__6571__auto__);
});
p.cljs$core$IFn$_invoke$arity$variadic = p__delegate;
return p;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.param = (function() { 
var param__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__8173_10149 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__8174_10150 = null;var count__8175_10151 = 0;var i__8176_10152 = 0;while(true){
if((i__8176_10152 < count__8175_10151))
{var arg__6573__auto___10153 = cljs.core._nth.call(null,chunk__8174_10150,i__8176_10152);a__6572__auto__.push(arg__6573__auto___10153);
{
var G__10154 = seq__8173_10149;
var G__10155 = chunk__8174_10150;
var G__10156 = count__8175_10151;
var G__10157 = (i__8176_10152 + 1);
seq__8173_10149 = G__10154;
chunk__8174_10150 = G__10155;
count__8175_10151 = G__10156;
i__8176_10152 = G__10157;
continue;
}
} else
{var temp__4092__auto___10158 = cljs.core.seq.call(null,seq__8173_10149);if(temp__4092__auto___10158)
{var seq__8173_10159__$1 = temp__4092__auto___10158;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8173_10159__$1))
{var c__5634__auto___10160 = cljs.core.chunk_first.call(null,seq__8173_10159__$1);{
var G__10161 = cljs.core.chunk_rest.call(null,seq__8173_10159__$1);
var G__10162 = c__5634__auto___10160;
var G__10163 = cljs.core.count.call(null,c__5634__auto___10160);
var G__10164 = 0;
seq__8173_10149 = G__10161;
chunk__8174_10150 = G__10162;
count__8175_10151 = G__10163;
i__8176_10152 = G__10164;
continue;
}
} else
{var arg__6573__auto___10165 = cljs.core.first.call(null,seq__8173_10159__$1);a__6572__auto__.push(arg__6573__auto___10165);
{
var G__10166 = cljs.core.next.call(null,seq__8173_10159__$1);
var G__10167 = null;
var G__10168 = 0;
var G__10169 = 0;
seq__8173_10149 = G__10166;
chunk__8174_10150 = G__10167;
count__8175_10151 = G__10168;
i__8176_10152 = G__10169;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.param.apply(null,a__6572__auto__);
};
var param = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return param__delegate.call(this,args__6571__auto__);};
param.cljs$lang$maxFixedArity = 0;
param.cljs$lang$applyTo = (function (arglist__10170){
var args__6571__auto__ = cljs.core.seq(arglist__10170);
return param__delegate(args__6571__auto__);
});
param.cljs$core$IFn$_invoke$arity$variadic = param__delegate;
return param;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.pre = (function() { 
var pre__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__8181_10171 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__8182_10172 = null;var count__8183_10173 = 0;var i__8184_10174 = 0;while(true){
if((i__8184_10174 < count__8183_10173))
{var arg__6573__auto___10175 = cljs.core._nth.call(null,chunk__8182_10172,i__8184_10174);a__6572__auto__.push(arg__6573__auto___10175);
{
var G__10176 = seq__8181_10171;
var G__10177 = chunk__8182_10172;
var G__10178 = count__8183_10173;
var G__10179 = (i__8184_10174 + 1);
seq__8181_10171 = G__10176;
chunk__8182_10172 = G__10177;
count__8183_10173 = G__10178;
i__8184_10174 = G__10179;
continue;
}
} else
{var temp__4092__auto___10180 = cljs.core.seq.call(null,seq__8181_10171);if(temp__4092__auto___10180)
{var seq__8181_10181__$1 = temp__4092__auto___10180;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8181_10181__$1))
{var c__5634__auto___10182 = cljs.core.chunk_first.call(null,seq__8181_10181__$1);{
var G__10183 = cljs.core.chunk_rest.call(null,seq__8181_10181__$1);
var G__10184 = c__5634__auto___10182;
var G__10185 = cljs.core.count.call(null,c__5634__auto___10182);
var G__10186 = 0;
seq__8181_10171 = G__10183;
chunk__8182_10172 = G__10184;
count__8183_10173 = G__10185;
i__8184_10174 = G__10186;
continue;
}
} else
{var arg__6573__auto___10187 = cljs.core.first.call(null,seq__8181_10181__$1);a__6572__auto__.push(arg__6573__auto___10187);
{
var G__10188 = cljs.core.next.call(null,seq__8181_10181__$1);
var G__10189 = null;
var G__10190 = 0;
var G__10191 = 0;
seq__8181_10171 = G__10188;
chunk__8182_10172 = G__10189;
count__8183_10173 = G__10190;
i__8184_10174 = G__10191;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.pre.apply(null,a__6572__auto__);
};
var pre = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return pre__delegate.call(this,args__6571__auto__);};
pre.cljs$lang$maxFixedArity = 0;
pre.cljs$lang$applyTo = (function (arglist__10192){
var args__6571__auto__ = cljs.core.seq(arglist__10192);
return pre__delegate(args__6571__auto__);
});
pre.cljs$core$IFn$_invoke$arity$variadic = pre__delegate;
return pre;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.progress = (function() { 
var progress__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__8189_10193 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__8190_10194 = null;var count__8191_10195 = 0;var i__8192_10196 = 0;while(true){
if((i__8192_10196 < count__8191_10195))
{var arg__6573__auto___10197 = cljs.core._nth.call(null,chunk__8190_10194,i__8192_10196);a__6572__auto__.push(arg__6573__auto___10197);
{
var G__10198 = seq__8189_10193;
var G__10199 = chunk__8190_10194;
var G__10200 = count__8191_10195;
var G__10201 = (i__8192_10196 + 1);
seq__8189_10193 = G__10198;
chunk__8190_10194 = G__10199;
count__8191_10195 = G__10200;
i__8192_10196 = G__10201;
continue;
}
} else
{var temp__4092__auto___10202 = cljs.core.seq.call(null,seq__8189_10193);if(temp__4092__auto___10202)
{var seq__8189_10203__$1 = temp__4092__auto___10202;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8189_10203__$1))
{var c__5634__auto___10204 = cljs.core.chunk_first.call(null,seq__8189_10203__$1);{
var G__10205 = cljs.core.chunk_rest.call(null,seq__8189_10203__$1);
var G__10206 = c__5634__auto___10204;
var G__10207 = cljs.core.count.call(null,c__5634__auto___10204);
var G__10208 = 0;
seq__8189_10193 = G__10205;
chunk__8190_10194 = G__10206;
count__8191_10195 = G__10207;
i__8192_10196 = G__10208;
continue;
}
} else
{var arg__6573__auto___10209 = cljs.core.first.call(null,seq__8189_10203__$1);a__6572__auto__.push(arg__6573__auto___10209);
{
var G__10210 = cljs.core.next.call(null,seq__8189_10203__$1);
var G__10211 = null;
var G__10212 = 0;
var G__10213 = 0;
seq__8189_10193 = G__10210;
chunk__8190_10194 = G__10211;
count__8191_10195 = G__10212;
i__8192_10196 = G__10213;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.progress.apply(null,a__6572__auto__);
};
var progress = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return progress__delegate.call(this,args__6571__auto__);};
progress.cljs$lang$maxFixedArity = 0;
progress.cljs$lang$applyTo = (function (arglist__10214){
var args__6571__auto__ = cljs.core.seq(arglist__10214);
return progress__delegate(args__6571__auto__);
});
progress.cljs$core$IFn$_invoke$arity$variadic = progress__delegate;
return progress;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.q = (function() { 
var q__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__8197_10215 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__8198_10216 = null;var count__8199_10217 = 0;var i__8200_10218 = 0;while(true){
if((i__8200_10218 < count__8199_10217))
{var arg__6573__auto___10219 = cljs.core._nth.call(null,chunk__8198_10216,i__8200_10218);a__6572__auto__.push(arg__6573__auto___10219);
{
var G__10220 = seq__8197_10215;
var G__10221 = chunk__8198_10216;
var G__10222 = count__8199_10217;
var G__10223 = (i__8200_10218 + 1);
seq__8197_10215 = G__10220;
chunk__8198_10216 = G__10221;
count__8199_10217 = G__10222;
i__8200_10218 = G__10223;
continue;
}
} else
{var temp__4092__auto___10224 = cljs.core.seq.call(null,seq__8197_10215);if(temp__4092__auto___10224)
{var seq__8197_10225__$1 = temp__4092__auto___10224;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8197_10225__$1))
{var c__5634__auto___10226 = cljs.core.chunk_first.call(null,seq__8197_10225__$1);{
var G__10227 = cljs.core.chunk_rest.call(null,seq__8197_10225__$1);
var G__10228 = c__5634__auto___10226;
var G__10229 = cljs.core.count.call(null,c__5634__auto___10226);
var G__10230 = 0;
seq__8197_10215 = G__10227;
chunk__8198_10216 = G__10228;
count__8199_10217 = G__10229;
i__8200_10218 = G__10230;
continue;
}
} else
{var arg__6573__auto___10231 = cljs.core.first.call(null,seq__8197_10225__$1);a__6572__auto__.push(arg__6573__auto___10231);
{
var G__10232 = cljs.core.next.call(null,seq__8197_10225__$1);
var G__10233 = null;
var G__10234 = 0;
var G__10235 = 0;
seq__8197_10215 = G__10232;
chunk__8198_10216 = G__10233;
count__8199_10217 = G__10234;
i__8200_10218 = G__10235;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.q.apply(null,a__6572__auto__);
};
var q = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return q__delegate.call(this,args__6571__auto__);};
q.cljs$lang$maxFixedArity = 0;
q.cljs$lang$applyTo = (function (arglist__10236){
var args__6571__auto__ = cljs.core.seq(arglist__10236);
return q__delegate(args__6571__auto__);
});
q.cljs$core$IFn$_invoke$arity$variadic = q__delegate;
return q;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.rp = (function() { 
var rp__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__8205_10237 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__8206_10238 = null;var count__8207_10239 = 0;var i__8208_10240 = 0;while(true){
if((i__8208_10240 < count__8207_10239))
{var arg__6573__auto___10241 = cljs.core._nth.call(null,chunk__8206_10238,i__8208_10240);a__6572__auto__.push(arg__6573__auto___10241);
{
var G__10242 = seq__8205_10237;
var G__10243 = chunk__8206_10238;
var G__10244 = count__8207_10239;
var G__10245 = (i__8208_10240 + 1);
seq__8205_10237 = G__10242;
chunk__8206_10238 = G__10243;
count__8207_10239 = G__10244;
i__8208_10240 = G__10245;
continue;
}
} else
{var temp__4092__auto___10246 = cljs.core.seq.call(null,seq__8205_10237);if(temp__4092__auto___10246)
{var seq__8205_10247__$1 = temp__4092__auto___10246;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8205_10247__$1))
{var c__5634__auto___10248 = cljs.core.chunk_first.call(null,seq__8205_10247__$1);{
var G__10249 = cljs.core.chunk_rest.call(null,seq__8205_10247__$1);
var G__10250 = c__5634__auto___10248;
var G__10251 = cljs.core.count.call(null,c__5634__auto___10248);
var G__10252 = 0;
seq__8205_10237 = G__10249;
chunk__8206_10238 = G__10250;
count__8207_10239 = G__10251;
i__8208_10240 = G__10252;
continue;
}
} else
{var arg__6573__auto___10253 = cljs.core.first.call(null,seq__8205_10247__$1);a__6572__auto__.push(arg__6573__auto___10253);
{
var G__10254 = cljs.core.next.call(null,seq__8205_10247__$1);
var G__10255 = null;
var G__10256 = 0;
var G__10257 = 0;
seq__8205_10237 = G__10254;
chunk__8206_10238 = G__10255;
count__8207_10239 = G__10256;
i__8208_10240 = G__10257;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.rp.apply(null,a__6572__auto__);
};
var rp = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return rp__delegate.call(this,args__6571__auto__);};
rp.cljs$lang$maxFixedArity = 0;
rp.cljs$lang$applyTo = (function (arglist__10258){
var args__6571__auto__ = cljs.core.seq(arglist__10258);
return rp__delegate(args__6571__auto__);
});
rp.cljs$core$IFn$_invoke$arity$variadic = rp__delegate;
return rp;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.rt = (function() { 
var rt__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__8213_10259 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__8214_10260 = null;var count__8215_10261 = 0;var i__8216_10262 = 0;while(true){
if((i__8216_10262 < count__8215_10261))
{var arg__6573__auto___10263 = cljs.core._nth.call(null,chunk__8214_10260,i__8216_10262);a__6572__auto__.push(arg__6573__auto___10263);
{
var G__10264 = seq__8213_10259;
var G__10265 = chunk__8214_10260;
var G__10266 = count__8215_10261;
var G__10267 = (i__8216_10262 + 1);
seq__8213_10259 = G__10264;
chunk__8214_10260 = G__10265;
count__8215_10261 = G__10266;
i__8216_10262 = G__10267;
continue;
}
} else
{var temp__4092__auto___10268 = cljs.core.seq.call(null,seq__8213_10259);if(temp__4092__auto___10268)
{var seq__8213_10269__$1 = temp__4092__auto___10268;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8213_10269__$1))
{var c__5634__auto___10270 = cljs.core.chunk_first.call(null,seq__8213_10269__$1);{
var G__10271 = cljs.core.chunk_rest.call(null,seq__8213_10269__$1);
var G__10272 = c__5634__auto___10270;
var G__10273 = cljs.core.count.call(null,c__5634__auto___10270);
var G__10274 = 0;
seq__8213_10259 = G__10271;
chunk__8214_10260 = G__10272;
count__8215_10261 = G__10273;
i__8216_10262 = G__10274;
continue;
}
} else
{var arg__6573__auto___10275 = cljs.core.first.call(null,seq__8213_10269__$1);a__6572__auto__.push(arg__6573__auto___10275);
{
var G__10276 = cljs.core.next.call(null,seq__8213_10269__$1);
var G__10277 = null;
var G__10278 = 0;
var G__10279 = 0;
seq__8213_10259 = G__10276;
chunk__8214_10260 = G__10277;
count__8215_10261 = G__10278;
i__8216_10262 = G__10279;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.rt.apply(null,a__6572__auto__);
};
var rt = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return rt__delegate.call(this,args__6571__auto__);};
rt.cljs$lang$maxFixedArity = 0;
rt.cljs$lang$applyTo = (function (arglist__10280){
var args__6571__auto__ = cljs.core.seq(arglist__10280);
return rt__delegate(args__6571__auto__);
});
rt.cljs$core$IFn$_invoke$arity$variadic = rt__delegate;
return rt;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.ruby = (function() { 
var ruby__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__8221_10281 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__8222_10282 = null;var count__8223_10283 = 0;var i__8224_10284 = 0;while(true){
if((i__8224_10284 < count__8223_10283))
{var arg__6573__auto___10285 = cljs.core._nth.call(null,chunk__8222_10282,i__8224_10284);a__6572__auto__.push(arg__6573__auto___10285);
{
var G__10286 = seq__8221_10281;
var G__10287 = chunk__8222_10282;
var G__10288 = count__8223_10283;
var G__10289 = (i__8224_10284 + 1);
seq__8221_10281 = G__10286;
chunk__8222_10282 = G__10287;
count__8223_10283 = G__10288;
i__8224_10284 = G__10289;
continue;
}
} else
{var temp__4092__auto___10290 = cljs.core.seq.call(null,seq__8221_10281);if(temp__4092__auto___10290)
{var seq__8221_10291__$1 = temp__4092__auto___10290;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8221_10291__$1))
{var c__5634__auto___10292 = cljs.core.chunk_first.call(null,seq__8221_10291__$1);{
var G__10293 = cljs.core.chunk_rest.call(null,seq__8221_10291__$1);
var G__10294 = c__5634__auto___10292;
var G__10295 = cljs.core.count.call(null,c__5634__auto___10292);
var G__10296 = 0;
seq__8221_10281 = G__10293;
chunk__8222_10282 = G__10294;
count__8223_10283 = G__10295;
i__8224_10284 = G__10296;
continue;
}
} else
{var arg__6573__auto___10297 = cljs.core.first.call(null,seq__8221_10291__$1);a__6572__auto__.push(arg__6573__auto___10297);
{
var G__10298 = cljs.core.next.call(null,seq__8221_10291__$1);
var G__10299 = null;
var G__10300 = 0;
var G__10301 = 0;
seq__8221_10281 = G__10298;
chunk__8222_10282 = G__10299;
count__8223_10283 = G__10300;
i__8224_10284 = G__10301;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.ruby.apply(null,a__6572__auto__);
};
var ruby = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ruby__delegate.call(this,args__6571__auto__);};
ruby.cljs$lang$maxFixedArity = 0;
ruby.cljs$lang$applyTo = (function (arglist__10302){
var args__6571__auto__ = cljs.core.seq(arglist__10302);
return ruby__delegate(args__6571__auto__);
});
ruby.cljs$core$IFn$_invoke$arity$variadic = ruby__delegate;
return ruby;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.s = (function() { 
var s__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__8229_10303 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__8230_10304 = null;var count__8231_10305 = 0;var i__8232_10306 = 0;while(true){
if((i__8232_10306 < count__8231_10305))
{var arg__6573__auto___10307 = cljs.core._nth.call(null,chunk__8230_10304,i__8232_10306);a__6572__auto__.push(arg__6573__auto___10307);
{
var G__10308 = seq__8229_10303;
var G__10309 = chunk__8230_10304;
var G__10310 = count__8231_10305;
var G__10311 = (i__8232_10306 + 1);
seq__8229_10303 = G__10308;
chunk__8230_10304 = G__10309;
count__8231_10305 = G__10310;
i__8232_10306 = G__10311;
continue;
}
} else
{var temp__4092__auto___10312 = cljs.core.seq.call(null,seq__8229_10303);if(temp__4092__auto___10312)
{var seq__8229_10313__$1 = temp__4092__auto___10312;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8229_10313__$1))
{var c__5634__auto___10314 = cljs.core.chunk_first.call(null,seq__8229_10313__$1);{
var G__10315 = cljs.core.chunk_rest.call(null,seq__8229_10313__$1);
var G__10316 = c__5634__auto___10314;
var G__10317 = cljs.core.count.call(null,c__5634__auto___10314);
var G__10318 = 0;
seq__8229_10303 = G__10315;
chunk__8230_10304 = G__10316;
count__8231_10305 = G__10317;
i__8232_10306 = G__10318;
continue;
}
} else
{var arg__6573__auto___10319 = cljs.core.first.call(null,seq__8229_10313__$1);a__6572__auto__.push(arg__6573__auto___10319);
{
var G__10320 = cljs.core.next.call(null,seq__8229_10313__$1);
var G__10321 = null;
var G__10322 = 0;
var G__10323 = 0;
seq__8229_10303 = G__10320;
chunk__8230_10304 = G__10321;
count__8231_10305 = G__10322;
i__8232_10306 = G__10323;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.s.apply(null,a__6572__auto__);
};
var s = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return s__delegate.call(this,args__6571__auto__);};
s.cljs$lang$maxFixedArity = 0;
s.cljs$lang$applyTo = (function (arglist__10324){
var args__6571__auto__ = cljs.core.seq(arglist__10324);
return s__delegate(args__6571__auto__);
});
s.cljs$core$IFn$_invoke$arity$variadic = s__delegate;
return s;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.samp = (function() { 
var samp__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__8237_10325 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__8238_10326 = null;var count__8239_10327 = 0;var i__8240_10328 = 0;while(true){
if((i__8240_10328 < count__8239_10327))
{var arg__6573__auto___10329 = cljs.core._nth.call(null,chunk__8238_10326,i__8240_10328);a__6572__auto__.push(arg__6573__auto___10329);
{
var G__10330 = seq__8237_10325;
var G__10331 = chunk__8238_10326;
var G__10332 = count__8239_10327;
var G__10333 = (i__8240_10328 + 1);
seq__8237_10325 = G__10330;
chunk__8238_10326 = G__10331;
count__8239_10327 = G__10332;
i__8240_10328 = G__10333;
continue;
}
} else
{var temp__4092__auto___10334 = cljs.core.seq.call(null,seq__8237_10325);if(temp__4092__auto___10334)
{var seq__8237_10335__$1 = temp__4092__auto___10334;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8237_10335__$1))
{var c__5634__auto___10336 = cljs.core.chunk_first.call(null,seq__8237_10335__$1);{
var G__10337 = cljs.core.chunk_rest.call(null,seq__8237_10335__$1);
var G__10338 = c__5634__auto___10336;
var G__10339 = cljs.core.count.call(null,c__5634__auto___10336);
var G__10340 = 0;
seq__8237_10325 = G__10337;
chunk__8238_10326 = G__10338;
count__8239_10327 = G__10339;
i__8240_10328 = G__10340;
continue;
}
} else
{var arg__6573__auto___10341 = cljs.core.first.call(null,seq__8237_10335__$1);a__6572__auto__.push(arg__6573__auto___10341);
{
var G__10342 = cljs.core.next.call(null,seq__8237_10335__$1);
var G__10343 = null;
var G__10344 = 0;
var G__10345 = 0;
seq__8237_10325 = G__10342;
chunk__8238_10326 = G__10343;
count__8239_10327 = G__10344;
i__8240_10328 = G__10345;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.samp.apply(null,a__6572__auto__);
};
var samp = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return samp__delegate.call(this,args__6571__auto__);};
samp.cljs$lang$maxFixedArity = 0;
samp.cljs$lang$applyTo = (function (arglist__10346){
var args__6571__auto__ = cljs.core.seq(arglist__10346);
return samp__delegate(args__6571__auto__);
});
samp.cljs$core$IFn$_invoke$arity$variadic = samp__delegate;
return samp;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.script = (function() { 
var script__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__8245_10347 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__8246_10348 = null;var count__8247_10349 = 0;var i__8248_10350 = 0;while(true){
if((i__8248_10350 < count__8247_10349))
{var arg__6573__auto___10351 = cljs.core._nth.call(null,chunk__8246_10348,i__8248_10350);a__6572__auto__.push(arg__6573__auto___10351);
{
var G__10352 = seq__8245_10347;
var G__10353 = chunk__8246_10348;
var G__10354 = count__8247_10349;
var G__10355 = (i__8248_10350 + 1);
seq__8245_10347 = G__10352;
chunk__8246_10348 = G__10353;
count__8247_10349 = G__10354;
i__8248_10350 = G__10355;
continue;
}
} else
{var temp__4092__auto___10356 = cljs.core.seq.call(null,seq__8245_10347);if(temp__4092__auto___10356)
{var seq__8245_10357__$1 = temp__4092__auto___10356;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8245_10357__$1))
{var c__5634__auto___10358 = cljs.core.chunk_first.call(null,seq__8245_10357__$1);{
var G__10359 = cljs.core.chunk_rest.call(null,seq__8245_10357__$1);
var G__10360 = c__5634__auto___10358;
var G__10361 = cljs.core.count.call(null,c__5634__auto___10358);
var G__10362 = 0;
seq__8245_10347 = G__10359;
chunk__8246_10348 = G__10360;
count__8247_10349 = G__10361;
i__8248_10350 = G__10362;
continue;
}
} else
{var arg__6573__auto___10363 = cljs.core.first.call(null,seq__8245_10357__$1);a__6572__auto__.push(arg__6573__auto___10363);
{
var G__10364 = cljs.core.next.call(null,seq__8245_10357__$1);
var G__10365 = null;
var G__10366 = 0;
var G__10367 = 0;
seq__8245_10347 = G__10364;
chunk__8246_10348 = G__10365;
count__8247_10349 = G__10366;
i__8248_10350 = G__10367;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.script.apply(null,a__6572__auto__);
};
var script = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return script__delegate.call(this,args__6571__auto__);};
script.cljs$lang$maxFixedArity = 0;
script.cljs$lang$applyTo = (function (arglist__10368){
var args__6571__auto__ = cljs.core.seq(arglist__10368);
return script__delegate(args__6571__auto__);
});
script.cljs$core$IFn$_invoke$arity$variadic = script__delegate;
return script;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.section = (function() { 
var section__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__8253_10369 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__8254_10370 = null;var count__8255_10371 = 0;var i__8256_10372 = 0;while(true){
if((i__8256_10372 < count__8255_10371))
{var arg__6573__auto___10373 = cljs.core._nth.call(null,chunk__8254_10370,i__8256_10372);a__6572__auto__.push(arg__6573__auto___10373);
{
var G__10374 = seq__8253_10369;
var G__10375 = chunk__8254_10370;
var G__10376 = count__8255_10371;
var G__10377 = (i__8256_10372 + 1);
seq__8253_10369 = G__10374;
chunk__8254_10370 = G__10375;
count__8255_10371 = G__10376;
i__8256_10372 = G__10377;
continue;
}
} else
{var temp__4092__auto___10378 = cljs.core.seq.call(null,seq__8253_10369);if(temp__4092__auto___10378)
{var seq__8253_10379__$1 = temp__4092__auto___10378;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8253_10379__$1))
{var c__5634__auto___10380 = cljs.core.chunk_first.call(null,seq__8253_10379__$1);{
var G__10381 = cljs.core.chunk_rest.call(null,seq__8253_10379__$1);
var G__10382 = c__5634__auto___10380;
var G__10383 = cljs.core.count.call(null,c__5634__auto___10380);
var G__10384 = 0;
seq__8253_10369 = G__10381;
chunk__8254_10370 = G__10382;
count__8255_10371 = G__10383;
i__8256_10372 = G__10384;
continue;
}
} else
{var arg__6573__auto___10385 = cljs.core.first.call(null,seq__8253_10379__$1);a__6572__auto__.push(arg__6573__auto___10385);
{
var G__10386 = cljs.core.next.call(null,seq__8253_10379__$1);
var G__10387 = null;
var G__10388 = 0;
var G__10389 = 0;
seq__8253_10369 = G__10386;
chunk__8254_10370 = G__10387;
count__8255_10371 = G__10388;
i__8256_10372 = G__10389;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.section.apply(null,a__6572__auto__);
};
var section = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return section__delegate.call(this,args__6571__auto__);};
section.cljs$lang$maxFixedArity = 0;
section.cljs$lang$applyTo = (function (arglist__10390){
var args__6571__auto__ = cljs.core.seq(arglist__10390);
return section__delegate(args__6571__auto__);
});
section.cljs$core$IFn$_invoke$arity$variadic = section__delegate;
return section;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.select = (function() { 
var select__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__8261_10391 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__8262_10392 = null;var count__8263_10393 = 0;var i__8264_10394 = 0;while(true){
if((i__8264_10394 < count__8263_10393))
{var arg__6573__auto___10395 = cljs.core._nth.call(null,chunk__8262_10392,i__8264_10394);a__6572__auto__.push(arg__6573__auto___10395);
{
var G__10396 = seq__8261_10391;
var G__10397 = chunk__8262_10392;
var G__10398 = count__8263_10393;
var G__10399 = (i__8264_10394 + 1);
seq__8261_10391 = G__10396;
chunk__8262_10392 = G__10397;
count__8263_10393 = G__10398;
i__8264_10394 = G__10399;
continue;
}
} else
{var temp__4092__auto___10400 = cljs.core.seq.call(null,seq__8261_10391);if(temp__4092__auto___10400)
{var seq__8261_10401__$1 = temp__4092__auto___10400;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8261_10401__$1))
{var c__5634__auto___10402 = cljs.core.chunk_first.call(null,seq__8261_10401__$1);{
var G__10403 = cljs.core.chunk_rest.call(null,seq__8261_10401__$1);
var G__10404 = c__5634__auto___10402;
var G__10405 = cljs.core.count.call(null,c__5634__auto___10402);
var G__10406 = 0;
seq__8261_10391 = G__10403;
chunk__8262_10392 = G__10404;
count__8263_10393 = G__10405;
i__8264_10394 = G__10406;
continue;
}
} else
{var arg__6573__auto___10407 = cljs.core.first.call(null,seq__8261_10401__$1);a__6572__auto__.push(arg__6573__auto___10407);
{
var G__10408 = cljs.core.next.call(null,seq__8261_10401__$1);
var G__10409 = null;
var G__10410 = 0;
var G__10411 = 0;
seq__8261_10391 = G__10408;
chunk__8262_10392 = G__10409;
count__8263_10393 = G__10410;
i__8264_10394 = G__10411;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.select.apply(null,a__6572__auto__);
};
var select = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return select__delegate.call(this,args__6571__auto__);};
select.cljs$lang$maxFixedArity = 0;
select.cljs$lang$applyTo = (function (arglist__10412){
var args__6571__auto__ = cljs.core.seq(arglist__10412);
return select__delegate(args__6571__auto__);
});
select.cljs$core$IFn$_invoke$arity$variadic = select__delegate;
return select;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.small = (function() { 
var small__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__8269_10413 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__8270_10414 = null;var count__8271_10415 = 0;var i__8272_10416 = 0;while(true){
if((i__8272_10416 < count__8271_10415))
{var arg__6573__auto___10417 = cljs.core._nth.call(null,chunk__8270_10414,i__8272_10416);a__6572__auto__.push(arg__6573__auto___10417);
{
var G__10418 = seq__8269_10413;
var G__10419 = chunk__8270_10414;
var G__10420 = count__8271_10415;
var G__10421 = (i__8272_10416 + 1);
seq__8269_10413 = G__10418;
chunk__8270_10414 = G__10419;
count__8271_10415 = G__10420;
i__8272_10416 = G__10421;
continue;
}
} else
{var temp__4092__auto___10422 = cljs.core.seq.call(null,seq__8269_10413);if(temp__4092__auto___10422)
{var seq__8269_10423__$1 = temp__4092__auto___10422;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8269_10423__$1))
{var c__5634__auto___10424 = cljs.core.chunk_first.call(null,seq__8269_10423__$1);{
var G__10425 = cljs.core.chunk_rest.call(null,seq__8269_10423__$1);
var G__10426 = c__5634__auto___10424;
var G__10427 = cljs.core.count.call(null,c__5634__auto___10424);
var G__10428 = 0;
seq__8269_10413 = G__10425;
chunk__8270_10414 = G__10426;
count__8271_10415 = G__10427;
i__8272_10416 = G__10428;
continue;
}
} else
{var arg__6573__auto___10429 = cljs.core.first.call(null,seq__8269_10423__$1);a__6572__auto__.push(arg__6573__auto___10429);
{
var G__10430 = cljs.core.next.call(null,seq__8269_10423__$1);
var G__10431 = null;
var G__10432 = 0;
var G__10433 = 0;
seq__8269_10413 = G__10430;
chunk__8270_10414 = G__10431;
count__8271_10415 = G__10432;
i__8272_10416 = G__10433;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.small.apply(null,a__6572__auto__);
};
var small = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return small__delegate.call(this,args__6571__auto__);};
small.cljs$lang$maxFixedArity = 0;
small.cljs$lang$applyTo = (function (arglist__10434){
var args__6571__auto__ = cljs.core.seq(arglist__10434);
return small__delegate(args__6571__auto__);
});
small.cljs$core$IFn$_invoke$arity$variadic = small__delegate;
return small;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.source = (function() { 
var source__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__8277_10435 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__8278_10436 = null;var count__8279_10437 = 0;var i__8280_10438 = 0;while(true){
if((i__8280_10438 < count__8279_10437))
{var arg__6573__auto___10439 = cljs.core._nth.call(null,chunk__8278_10436,i__8280_10438);a__6572__auto__.push(arg__6573__auto___10439);
{
var G__10440 = seq__8277_10435;
var G__10441 = chunk__8278_10436;
var G__10442 = count__8279_10437;
var G__10443 = (i__8280_10438 + 1);
seq__8277_10435 = G__10440;
chunk__8278_10436 = G__10441;
count__8279_10437 = G__10442;
i__8280_10438 = G__10443;
continue;
}
} else
{var temp__4092__auto___10444 = cljs.core.seq.call(null,seq__8277_10435);if(temp__4092__auto___10444)
{var seq__8277_10445__$1 = temp__4092__auto___10444;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8277_10445__$1))
{var c__5634__auto___10446 = cljs.core.chunk_first.call(null,seq__8277_10445__$1);{
var G__10447 = cljs.core.chunk_rest.call(null,seq__8277_10445__$1);
var G__10448 = c__5634__auto___10446;
var G__10449 = cljs.core.count.call(null,c__5634__auto___10446);
var G__10450 = 0;
seq__8277_10435 = G__10447;
chunk__8278_10436 = G__10448;
count__8279_10437 = G__10449;
i__8280_10438 = G__10450;
continue;
}
} else
{var arg__6573__auto___10451 = cljs.core.first.call(null,seq__8277_10445__$1);a__6572__auto__.push(arg__6573__auto___10451);
{
var G__10452 = cljs.core.next.call(null,seq__8277_10445__$1);
var G__10453 = null;
var G__10454 = 0;
var G__10455 = 0;
seq__8277_10435 = G__10452;
chunk__8278_10436 = G__10453;
count__8279_10437 = G__10454;
i__8280_10438 = G__10455;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.source.apply(null,a__6572__auto__);
};
var source = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return source__delegate.call(this,args__6571__auto__);};
source.cljs$lang$maxFixedArity = 0;
source.cljs$lang$applyTo = (function (arglist__10456){
var args__6571__auto__ = cljs.core.seq(arglist__10456);
return source__delegate(args__6571__auto__);
});
source.cljs$core$IFn$_invoke$arity$variadic = source__delegate;
return source;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.span = (function() { 
var span__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__8285_10457 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__8286_10458 = null;var count__8287_10459 = 0;var i__8288_10460 = 0;while(true){
if((i__8288_10460 < count__8287_10459))
{var arg__6573__auto___10461 = cljs.core._nth.call(null,chunk__8286_10458,i__8288_10460);a__6572__auto__.push(arg__6573__auto___10461);
{
var G__10462 = seq__8285_10457;
var G__10463 = chunk__8286_10458;
var G__10464 = count__8287_10459;
var G__10465 = (i__8288_10460 + 1);
seq__8285_10457 = G__10462;
chunk__8286_10458 = G__10463;
count__8287_10459 = G__10464;
i__8288_10460 = G__10465;
continue;
}
} else
{var temp__4092__auto___10466 = cljs.core.seq.call(null,seq__8285_10457);if(temp__4092__auto___10466)
{var seq__8285_10467__$1 = temp__4092__auto___10466;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8285_10467__$1))
{var c__5634__auto___10468 = cljs.core.chunk_first.call(null,seq__8285_10467__$1);{
var G__10469 = cljs.core.chunk_rest.call(null,seq__8285_10467__$1);
var G__10470 = c__5634__auto___10468;
var G__10471 = cljs.core.count.call(null,c__5634__auto___10468);
var G__10472 = 0;
seq__8285_10457 = G__10469;
chunk__8286_10458 = G__10470;
count__8287_10459 = G__10471;
i__8288_10460 = G__10472;
continue;
}
} else
{var arg__6573__auto___10473 = cljs.core.first.call(null,seq__8285_10467__$1);a__6572__auto__.push(arg__6573__auto___10473);
{
var G__10474 = cljs.core.next.call(null,seq__8285_10467__$1);
var G__10475 = null;
var G__10476 = 0;
var G__10477 = 0;
seq__8285_10457 = G__10474;
chunk__8286_10458 = G__10475;
count__8287_10459 = G__10476;
i__8288_10460 = G__10477;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.span.apply(null,a__6572__auto__);
};
var span = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return span__delegate.call(this,args__6571__auto__);};
span.cljs$lang$maxFixedArity = 0;
span.cljs$lang$applyTo = (function (arglist__10478){
var args__6571__auto__ = cljs.core.seq(arglist__10478);
return span__delegate(args__6571__auto__);
});
span.cljs$core$IFn$_invoke$arity$variadic = span__delegate;
return span;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.strong = (function() { 
var strong__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__8293_10479 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__8294_10480 = null;var count__8295_10481 = 0;var i__8296_10482 = 0;while(true){
if((i__8296_10482 < count__8295_10481))
{var arg__6573__auto___10483 = cljs.core._nth.call(null,chunk__8294_10480,i__8296_10482);a__6572__auto__.push(arg__6573__auto___10483);
{
var G__10484 = seq__8293_10479;
var G__10485 = chunk__8294_10480;
var G__10486 = count__8295_10481;
var G__10487 = (i__8296_10482 + 1);
seq__8293_10479 = G__10484;
chunk__8294_10480 = G__10485;
count__8295_10481 = G__10486;
i__8296_10482 = G__10487;
continue;
}
} else
{var temp__4092__auto___10488 = cljs.core.seq.call(null,seq__8293_10479);if(temp__4092__auto___10488)
{var seq__8293_10489__$1 = temp__4092__auto___10488;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8293_10489__$1))
{var c__5634__auto___10490 = cljs.core.chunk_first.call(null,seq__8293_10489__$1);{
var G__10491 = cljs.core.chunk_rest.call(null,seq__8293_10489__$1);
var G__10492 = c__5634__auto___10490;
var G__10493 = cljs.core.count.call(null,c__5634__auto___10490);
var G__10494 = 0;
seq__8293_10479 = G__10491;
chunk__8294_10480 = G__10492;
count__8295_10481 = G__10493;
i__8296_10482 = G__10494;
continue;
}
} else
{var arg__6573__auto___10495 = cljs.core.first.call(null,seq__8293_10489__$1);a__6572__auto__.push(arg__6573__auto___10495);
{
var G__10496 = cljs.core.next.call(null,seq__8293_10489__$1);
var G__10497 = null;
var G__10498 = 0;
var G__10499 = 0;
seq__8293_10479 = G__10496;
chunk__8294_10480 = G__10497;
count__8295_10481 = G__10498;
i__8296_10482 = G__10499;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.strong.apply(null,a__6572__auto__);
};
var strong = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return strong__delegate.call(this,args__6571__auto__);};
strong.cljs$lang$maxFixedArity = 0;
strong.cljs$lang$applyTo = (function (arglist__10500){
var args__6571__auto__ = cljs.core.seq(arglist__10500);
return strong__delegate(args__6571__auto__);
});
strong.cljs$core$IFn$_invoke$arity$variadic = strong__delegate;
return strong;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.style = (function() { 
var style__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__8301_10501 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__8302_10502 = null;var count__8303_10503 = 0;var i__8304_10504 = 0;while(true){
if((i__8304_10504 < count__8303_10503))
{var arg__6573__auto___10505 = cljs.core._nth.call(null,chunk__8302_10502,i__8304_10504);a__6572__auto__.push(arg__6573__auto___10505);
{
var G__10506 = seq__8301_10501;
var G__10507 = chunk__8302_10502;
var G__10508 = count__8303_10503;
var G__10509 = (i__8304_10504 + 1);
seq__8301_10501 = G__10506;
chunk__8302_10502 = G__10507;
count__8303_10503 = G__10508;
i__8304_10504 = G__10509;
continue;
}
} else
{var temp__4092__auto___10510 = cljs.core.seq.call(null,seq__8301_10501);if(temp__4092__auto___10510)
{var seq__8301_10511__$1 = temp__4092__auto___10510;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8301_10511__$1))
{var c__5634__auto___10512 = cljs.core.chunk_first.call(null,seq__8301_10511__$1);{
var G__10513 = cljs.core.chunk_rest.call(null,seq__8301_10511__$1);
var G__10514 = c__5634__auto___10512;
var G__10515 = cljs.core.count.call(null,c__5634__auto___10512);
var G__10516 = 0;
seq__8301_10501 = G__10513;
chunk__8302_10502 = G__10514;
count__8303_10503 = G__10515;
i__8304_10504 = G__10516;
continue;
}
} else
{var arg__6573__auto___10517 = cljs.core.first.call(null,seq__8301_10511__$1);a__6572__auto__.push(arg__6573__auto___10517);
{
var G__10518 = cljs.core.next.call(null,seq__8301_10511__$1);
var G__10519 = null;
var G__10520 = 0;
var G__10521 = 0;
seq__8301_10501 = G__10518;
chunk__8302_10502 = G__10519;
count__8303_10503 = G__10520;
i__8304_10504 = G__10521;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.style.apply(null,a__6572__auto__);
};
var style = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return style__delegate.call(this,args__6571__auto__);};
style.cljs$lang$maxFixedArity = 0;
style.cljs$lang$applyTo = (function (arglist__10522){
var args__6571__auto__ = cljs.core.seq(arglist__10522);
return style__delegate(args__6571__auto__);
});
style.cljs$core$IFn$_invoke$arity$variadic = style__delegate;
return style;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.sub = (function() { 
var sub__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__8309_10523 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__8310_10524 = null;var count__8311_10525 = 0;var i__8312_10526 = 0;while(true){
if((i__8312_10526 < count__8311_10525))
{var arg__6573__auto___10527 = cljs.core._nth.call(null,chunk__8310_10524,i__8312_10526);a__6572__auto__.push(arg__6573__auto___10527);
{
var G__10528 = seq__8309_10523;
var G__10529 = chunk__8310_10524;
var G__10530 = count__8311_10525;
var G__10531 = (i__8312_10526 + 1);
seq__8309_10523 = G__10528;
chunk__8310_10524 = G__10529;
count__8311_10525 = G__10530;
i__8312_10526 = G__10531;
continue;
}
} else
{var temp__4092__auto___10532 = cljs.core.seq.call(null,seq__8309_10523);if(temp__4092__auto___10532)
{var seq__8309_10533__$1 = temp__4092__auto___10532;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8309_10533__$1))
{var c__5634__auto___10534 = cljs.core.chunk_first.call(null,seq__8309_10533__$1);{
var G__10535 = cljs.core.chunk_rest.call(null,seq__8309_10533__$1);
var G__10536 = c__5634__auto___10534;
var G__10537 = cljs.core.count.call(null,c__5634__auto___10534);
var G__10538 = 0;
seq__8309_10523 = G__10535;
chunk__8310_10524 = G__10536;
count__8311_10525 = G__10537;
i__8312_10526 = G__10538;
continue;
}
} else
{var arg__6573__auto___10539 = cljs.core.first.call(null,seq__8309_10533__$1);a__6572__auto__.push(arg__6573__auto___10539);
{
var G__10540 = cljs.core.next.call(null,seq__8309_10533__$1);
var G__10541 = null;
var G__10542 = 0;
var G__10543 = 0;
seq__8309_10523 = G__10540;
chunk__8310_10524 = G__10541;
count__8311_10525 = G__10542;
i__8312_10526 = G__10543;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.sub.apply(null,a__6572__auto__);
};
var sub = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return sub__delegate.call(this,args__6571__auto__);};
sub.cljs$lang$maxFixedArity = 0;
sub.cljs$lang$applyTo = (function (arglist__10544){
var args__6571__auto__ = cljs.core.seq(arglist__10544);
return sub__delegate(args__6571__auto__);
});
sub.cljs$core$IFn$_invoke$arity$variadic = sub__delegate;
return sub;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.summary = (function() { 
var summary__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__8317_10545 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__8318_10546 = null;var count__8319_10547 = 0;var i__8320_10548 = 0;while(true){
if((i__8320_10548 < count__8319_10547))
{var arg__6573__auto___10549 = cljs.core._nth.call(null,chunk__8318_10546,i__8320_10548);a__6572__auto__.push(arg__6573__auto___10549);
{
var G__10550 = seq__8317_10545;
var G__10551 = chunk__8318_10546;
var G__10552 = count__8319_10547;
var G__10553 = (i__8320_10548 + 1);
seq__8317_10545 = G__10550;
chunk__8318_10546 = G__10551;
count__8319_10547 = G__10552;
i__8320_10548 = G__10553;
continue;
}
} else
{var temp__4092__auto___10554 = cljs.core.seq.call(null,seq__8317_10545);if(temp__4092__auto___10554)
{var seq__8317_10555__$1 = temp__4092__auto___10554;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8317_10555__$1))
{var c__5634__auto___10556 = cljs.core.chunk_first.call(null,seq__8317_10555__$1);{
var G__10557 = cljs.core.chunk_rest.call(null,seq__8317_10555__$1);
var G__10558 = c__5634__auto___10556;
var G__10559 = cljs.core.count.call(null,c__5634__auto___10556);
var G__10560 = 0;
seq__8317_10545 = G__10557;
chunk__8318_10546 = G__10558;
count__8319_10547 = G__10559;
i__8320_10548 = G__10560;
continue;
}
} else
{var arg__6573__auto___10561 = cljs.core.first.call(null,seq__8317_10555__$1);a__6572__auto__.push(arg__6573__auto___10561);
{
var G__10562 = cljs.core.next.call(null,seq__8317_10555__$1);
var G__10563 = null;
var G__10564 = 0;
var G__10565 = 0;
seq__8317_10545 = G__10562;
chunk__8318_10546 = G__10563;
count__8319_10547 = G__10564;
i__8320_10548 = G__10565;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.summary.apply(null,a__6572__auto__);
};
var summary = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return summary__delegate.call(this,args__6571__auto__);};
summary.cljs$lang$maxFixedArity = 0;
summary.cljs$lang$applyTo = (function (arglist__10566){
var args__6571__auto__ = cljs.core.seq(arglist__10566);
return summary__delegate(args__6571__auto__);
});
summary.cljs$core$IFn$_invoke$arity$variadic = summary__delegate;
return summary;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.sup = (function() { 
var sup__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__8325_10567 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__8326_10568 = null;var count__8327_10569 = 0;var i__8328_10570 = 0;while(true){
if((i__8328_10570 < count__8327_10569))
{var arg__6573__auto___10571 = cljs.core._nth.call(null,chunk__8326_10568,i__8328_10570);a__6572__auto__.push(arg__6573__auto___10571);
{
var G__10572 = seq__8325_10567;
var G__10573 = chunk__8326_10568;
var G__10574 = count__8327_10569;
var G__10575 = (i__8328_10570 + 1);
seq__8325_10567 = G__10572;
chunk__8326_10568 = G__10573;
count__8327_10569 = G__10574;
i__8328_10570 = G__10575;
continue;
}
} else
{var temp__4092__auto___10576 = cljs.core.seq.call(null,seq__8325_10567);if(temp__4092__auto___10576)
{var seq__8325_10577__$1 = temp__4092__auto___10576;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8325_10577__$1))
{var c__5634__auto___10578 = cljs.core.chunk_first.call(null,seq__8325_10577__$1);{
var G__10579 = cljs.core.chunk_rest.call(null,seq__8325_10577__$1);
var G__10580 = c__5634__auto___10578;
var G__10581 = cljs.core.count.call(null,c__5634__auto___10578);
var G__10582 = 0;
seq__8325_10567 = G__10579;
chunk__8326_10568 = G__10580;
count__8327_10569 = G__10581;
i__8328_10570 = G__10582;
continue;
}
} else
{var arg__6573__auto___10583 = cljs.core.first.call(null,seq__8325_10577__$1);a__6572__auto__.push(arg__6573__auto___10583);
{
var G__10584 = cljs.core.next.call(null,seq__8325_10577__$1);
var G__10585 = null;
var G__10586 = 0;
var G__10587 = 0;
seq__8325_10567 = G__10584;
chunk__8326_10568 = G__10585;
count__8327_10569 = G__10586;
i__8328_10570 = G__10587;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.sup.apply(null,a__6572__auto__);
};
var sup = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return sup__delegate.call(this,args__6571__auto__);};
sup.cljs$lang$maxFixedArity = 0;
sup.cljs$lang$applyTo = (function (arglist__10588){
var args__6571__auto__ = cljs.core.seq(arglist__10588);
return sup__delegate(args__6571__auto__);
});
sup.cljs$core$IFn$_invoke$arity$variadic = sup__delegate;
return sup;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.table = (function() { 
var table__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__8333_10589 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__8334_10590 = null;var count__8335_10591 = 0;var i__8336_10592 = 0;while(true){
if((i__8336_10592 < count__8335_10591))
{var arg__6573__auto___10593 = cljs.core._nth.call(null,chunk__8334_10590,i__8336_10592);a__6572__auto__.push(arg__6573__auto___10593);
{
var G__10594 = seq__8333_10589;
var G__10595 = chunk__8334_10590;
var G__10596 = count__8335_10591;
var G__10597 = (i__8336_10592 + 1);
seq__8333_10589 = G__10594;
chunk__8334_10590 = G__10595;
count__8335_10591 = G__10596;
i__8336_10592 = G__10597;
continue;
}
} else
{var temp__4092__auto___10598 = cljs.core.seq.call(null,seq__8333_10589);if(temp__4092__auto___10598)
{var seq__8333_10599__$1 = temp__4092__auto___10598;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8333_10599__$1))
{var c__5634__auto___10600 = cljs.core.chunk_first.call(null,seq__8333_10599__$1);{
var G__10601 = cljs.core.chunk_rest.call(null,seq__8333_10599__$1);
var G__10602 = c__5634__auto___10600;
var G__10603 = cljs.core.count.call(null,c__5634__auto___10600);
var G__10604 = 0;
seq__8333_10589 = G__10601;
chunk__8334_10590 = G__10602;
count__8335_10591 = G__10603;
i__8336_10592 = G__10604;
continue;
}
} else
{var arg__6573__auto___10605 = cljs.core.first.call(null,seq__8333_10599__$1);a__6572__auto__.push(arg__6573__auto___10605);
{
var G__10606 = cljs.core.next.call(null,seq__8333_10599__$1);
var G__10607 = null;
var G__10608 = 0;
var G__10609 = 0;
seq__8333_10589 = G__10606;
chunk__8334_10590 = G__10607;
count__8335_10591 = G__10608;
i__8336_10592 = G__10609;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.table.apply(null,a__6572__auto__);
};
var table = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return table__delegate.call(this,args__6571__auto__);};
table.cljs$lang$maxFixedArity = 0;
table.cljs$lang$applyTo = (function (arglist__10610){
var args__6571__auto__ = cljs.core.seq(arglist__10610);
return table__delegate(args__6571__auto__);
});
table.cljs$core$IFn$_invoke$arity$variadic = table__delegate;
return table;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.tbody = (function() { 
var tbody__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__8341_10611 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__8342_10612 = null;var count__8343_10613 = 0;var i__8344_10614 = 0;while(true){
if((i__8344_10614 < count__8343_10613))
{var arg__6573__auto___10615 = cljs.core._nth.call(null,chunk__8342_10612,i__8344_10614);a__6572__auto__.push(arg__6573__auto___10615);
{
var G__10616 = seq__8341_10611;
var G__10617 = chunk__8342_10612;
var G__10618 = count__8343_10613;
var G__10619 = (i__8344_10614 + 1);
seq__8341_10611 = G__10616;
chunk__8342_10612 = G__10617;
count__8343_10613 = G__10618;
i__8344_10614 = G__10619;
continue;
}
} else
{var temp__4092__auto___10620 = cljs.core.seq.call(null,seq__8341_10611);if(temp__4092__auto___10620)
{var seq__8341_10621__$1 = temp__4092__auto___10620;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8341_10621__$1))
{var c__5634__auto___10622 = cljs.core.chunk_first.call(null,seq__8341_10621__$1);{
var G__10623 = cljs.core.chunk_rest.call(null,seq__8341_10621__$1);
var G__10624 = c__5634__auto___10622;
var G__10625 = cljs.core.count.call(null,c__5634__auto___10622);
var G__10626 = 0;
seq__8341_10611 = G__10623;
chunk__8342_10612 = G__10624;
count__8343_10613 = G__10625;
i__8344_10614 = G__10626;
continue;
}
} else
{var arg__6573__auto___10627 = cljs.core.first.call(null,seq__8341_10621__$1);a__6572__auto__.push(arg__6573__auto___10627);
{
var G__10628 = cljs.core.next.call(null,seq__8341_10621__$1);
var G__10629 = null;
var G__10630 = 0;
var G__10631 = 0;
seq__8341_10611 = G__10628;
chunk__8342_10612 = G__10629;
count__8343_10613 = G__10630;
i__8344_10614 = G__10631;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.tbody.apply(null,a__6572__auto__);
};
var tbody = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return tbody__delegate.call(this,args__6571__auto__);};
tbody.cljs$lang$maxFixedArity = 0;
tbody.cljs$lang$applyTo = (function (arglist__10632){
var args__6571__auto__ = cljs.core.seq(arglist__10632);
return tbody__delegate(args__6571__auto__);
});
tbody.cljs$core$IFn$_invoke$arity$variadic = tbody__delegate;
return tbody;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.td = (function() { 
var td__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__8349_10633 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__8350_10634 = null;var count__8351_10635 = 0;var i__8352_10636 = 0;while(true){
if((i__8352_10636 < count__8351_10635))
{var arg__6573__auto___10637 = cljs.core._nth.call(null,chunk__8350_10634,i__8352_10636);a__6572__auto__.push(arg__6573__auto___10637);
{
var G__10638 = seq__8349_10633;
var G__10639 = chunk__8350_10634;
var G__10640 = count__8351_10635;
var G__10641 = (i__8352_10636 + 1);
seq__8349_10633 = G__10638;
chunk__8350_10634 = G__10639;
count__8351_10635 = G__10640;
i__8352_10636 = G__10641;
continue;
}
} else
{var temp__4092__auto___10642 = cljs.core.seq.call(null,seq__8349_10633);if(temp__4092__auto___10642)
{var seq__8349_10643__$1 = temp__4092__auto___10642;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8349_10643__$1))
{var c__5634__auto___10644 = cljs.core.chunk_first.call(null,seq__8349_10643__$1);{
var G__10645 = cljs.core.chunk_rest.call(null,seq__8349_10643__$1);
var G__10646 = c__5634__auto___10644;
var G__10647 = cljs.core.count.call(null,c__5634__auto___10644);
var G__10648 = 0;
seq__8349_10633 = G__10645;
chunk__8350_10634 = G__10646;
count__8351_10635 = G__10647;
i__8352_10636 = G__10648;
continue;
}
} else
{var arg__6573__auto___10649 = cljs.core.first.call(null,seq__8349_10643__$1);a__6572__auto__.push(arg__6573__auto___10649);
{
var G__10650 = cljs.core.next.call(null,seq__8349_10643__$1);
var G__10651 = null;
var G__10652 = 0;
var G__10653 = 0;
seq__8349_10633 = G__10650;
chunk__8350_10634 = G__10651;
count__8351_10635 = G__10652;
i__8352_10636 = G__10653;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.td.apply(null,a__6572__auto__);
};
var td = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return td__delegate.call(this,args__6571__auto__);};
td.cljs$lang$maxFixedArity = 0;
td.cljs$lang$applyTo = (function (arglist__10654){
var args__6571__auto__ = cljs.core.seq(arglist__10654);
return td__delegate(args__6571__auto__);
});
td.cljs$core$IFn$_invoke$arity$variadic = td__delegate;
return td;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.textarea = (function() { 
var textarea__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__8357_10655 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__8358_10656 = null;var count__8359_10657 = 0;var i__8360_10658 = 0;while(true){
if((i__8360_10658 < count__8359_10657))
{var arg__6573__auto___10659 = cljs.core._nth.call(null,chunk__8358_10656,i__8360_10658);a__6572__auto__.push(arg__6573__auto___10659);
{
var G__10660 = seq__8357_10655;
var G__10661 = chunk__8358_10656;
var G__10662 = count__8359_10657;
var G__10663 = (i__8360_10658 + 1);
seq__8357_10655 = G__10660;
chunk__8358_10656 = G__10661;
count__8359_10657 = G__10662;
i__8360_10658 = G__10663;
continue;
}
} else
{var temp__4092__auto___10664 = cljs.core.seq.call(null,seq__8357_10655);if(temp__4092__auto___10664)
{var seq__8357_10665__$1 = temp__4092__auto___10664;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8357_10665__$1))
{var c__5634__auto___10666 = cljs.core.chunk_first.call(null,seq__8357_10665__$1);{
var G__10667 = cljs.core.chunk_rest.call(null,seq__8357_10665__$1);
var G__10668 = c__5634__auto___10666;
var G__10669 = cljs.core.count.call(null,c__5634__auto___10666);
var G__10670 = 0;
seq__8357_10655 = G__10667;
chunk__8358_10656 = G__10668;
count__8359_10657 = G__10669;
i__8360_10658 = G__10670;
continue;
}
} else
{var arg__6573__auto___10671 = cljs.core.first.call(null,seq__8357_10665__$1);a__6572__auto__.push(arg__6573__auto___10671);
{
var G__10672 = cljs.core.next.call(null,seq__8357_10665__$1);
var G__10673 = null;
var G__10674 = 0;
var G__10675 = 0;
seq__8357_10655 = G__10672;
chunk__8358_10656 = G__10673;
count__8359_10657 = G__10674;
i__8360_10658 = G__10675;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.textarea.apply(null,a__6572__auto__);
};
var textarea = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return textarea__delegate.call(this,args__6571__auto__);};
textarea.cljs$lang$maxFixedArity = 0;
textarea.cljs$lang$applyTo = (function (arglist__10676){
var args__6571__auto__ = cljs.core.seq(arglist__10676);
return textarea__delegate(args__6571__auto__);
});
textarea.cljs$core$IFn$_invoke$arity$variadic = textarea__delegate;
return textarea;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.tfoot = (function() { 
var tfoot__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__8365_10677 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__8366_10678 = null;var count__8367_10679 = 0;var i__8368_10680 = 0;while(true){
if((i__8368_10680 < count__8367_10679))
{var arg__6573__auto___10681 = cljs.core._nth.call(null,chunk__8366_10678,i__8368_10680);a__6572__auto__.push(arg__6573__auto___10681);
{
var G__10682 = seq__8365_10677;
var G__10683 = chunk__8366_10678;
var G__10684 = count__8367_10679;
var G__10685 = (i__8368_10680 + 1);
seq__8365_10677 = G__10682;
chunk__8366_10678 = G__10683;
count__8367_10679 = G__10684;
i__8368_10680 = G__10685;
continue;
}
} else
{var temp__4092__auto___10686 = cljs.core.seq.call(null,seq__8365_10677);if(temp__4092__auto___10686)
{var seq__8365_10687__$1 = temp__4092__auto___10686;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8365_10687__$1))
{var c__5634__auto___10688 = cljs.core.chunk_first.call(null,seq__8365_10687__$1);{
var G__10689 = cljs.core.chunk_rest.call(null,seq__8365_10687__$1);
var G__10690 = c__5634__auto___10688;
var G__10691 = cljs.core.count.call(null,c__5634__auto___10688);
var G__10692 = 0;
seq__8365_10677 = G__10689;
chunk__8366_10678 = G__10690;
count__8367_10679 = G__10691;
i__8368_10680 = G__10692;
continue;
}
} else
{var arg__6573__auto___10693 = cljs.core.first.call(null,seq__8365_10687__$1);a__6572__auto__.push(arg__6573__auto___10693);
{
var G__10694 = cljs.core.next.call(null,seq__8365_10687__$1);
var G__10695 = null;
var G__10696 = 0;
var G__10697 = 0;
seq__8365_10677 = G__10694;
chunk__8366_10678 = G__10695;
count__8367_10679 = G__10696;
i__8368_10680 = G__10697;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.tfoot.apply(null,a__6572__auto__);
};
var tfoot = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return tfoot__delegate.call(this,args__6571__auto__);};
tfoot.cljs$lang$maxFixedArity = 0;
tfoot.cljs$lang$applyTo = (function (arglist__10698){
var args__6571__auto__ = cljs.core.seq(arglist__10698);
return tfoot__delegate(args__6571__auto__);
});
tfoot.cljs$core$IFn$_invoke$arity$variadic = tfoot__delegate;
return tfoot;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.th = (function() { 
var th__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__8373_10699 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__8374_10700 = null;var count__8375_10701 = 0;var i__8376_10702 = 0;while(true){
if((i__8376_10702 < count__8375_10701))
{var arg__6573__auto___10703 = cljs.core._nth.call(null,chunk__8374_10700,i__8376_10702);a__6572__auto__.push(arg__6573__auto___10703);
{
var G__10704 = seq__8373_10699;
var G__10705 = chunk__8374_10700;
var G__10706 = count__8375_10701;
var G__10707 = (i__8376_10702 + 1);
seq__8373_10699 = G__10704;
chunk__8374_10700 = G__10705;
count__8375_10701 = G__10706;
i__8376_10702 = G__10707;
continue;
}
} else
{var temp__4092__auto___10708 = cljs.core.seq.call(null,seq__8373_10699);if(temp__4092__auto___10708)
{var seq__8373_10709__$1 = temp__4092__auto___10708;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8373_10709__$1))
{var c__5634__auto___10710 = cljs.core.chunk_first.call(null,seq__8373_10709__$1);{
var G__10711 = cljs.core.chunk_rest.call(null,seq__8373_10709__$1);
var G__10712 = c__5634__auto___10710;
var G__10713 = cljs.core.count.call(null,c__5634__auto___10710);
var G__10714 = 0;
seq__8373_10699 = G__10711;
chunk__8374_10700 = G__10712;
count__8375_10701 = G__10713;
i__8376_10702 = G__10714;
continue;
}
} else
{var arg__6573__auto___10715 = cljs.core.first.call(null,seq__8373_10709__$1);a__6572__auto__.push(arg__6573__auto___10715);
{
var G__10716 = cljs.core.next.call(null,seq__8373_10709__$1);
var G__10717 = null;
var G__10718 = 0;
var G__10719 = 0;
seq__8373_10699 = G__10716;
chunk__8374_10700 = G__10717;
count__8375_10701 = G__10718;
i__8376_10702 = G__10719;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.th.apply(null,a__6572__auto__);
};
var th = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return th__delegate.call(this,args__6571__auto__);};
th.cljs$lang$maxFixedArity = 0;
th.cljs$lang$applyTo = (function (arglist__10720){
var args__6571__auto__ = cljs.core.seq(arglist__10720);
return th__delegate(args__6571__auto__);
});
th.cljs$core$IFn$_invoke$arity$variadic = th__delegate;
return th;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.thead = (function() { 
var thead__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__8381_10721 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__8382_10722 = null;var count__8383_10723 = 0;var i__8384_10724 = 0;while(true){
if((i__8384_10724 < count__8383_10723))
{var arg__6573__auto___10725 = cljs.core._nth.call(null,chunk__8382_10722,i__8384_10724);a__6572__auto__.push(arg__6573__auto___10725);
{
var G__10726 = seq__8381_10721;
var G__10727 = chunk__8382_10722;
var G__10728 = count__8383_10723;
var G__10729 = (i__8384_10724 + 1);
seq__8381_10721 = G__10726;
chunk__8382_10722 = G__10727;
count__8383_10723 = G__10728;
i__8384_10724 = G__10729;
continue;
}
} else
{var temp__4092__auto___10730 = cljs.core.seq.call(null,seq__8381_10721);if(temp__4092__auto___10730)
{var seq__8381_10731__$1 = temp__4092__auto___10730;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8381_10731__$1))
{var c__5634__auto___10732 = cljs.core.chunk_first.call(null,seq__8381_10731__$1);{
var G__10733 = cljs.core.chunk_rest.call(null,seq__8381_10731__$1);
var G__10734 = c__5634__auto___10732;
var G__10735 = cljs.core.count.call(null,c__5634__auto___10732);
var G__10736 = 0;
seq__8381_10721 = G__10733;
chunk__8382_10722 = G__10734;
count__8383_10723 = G__10735;
i__8384_10724 = G__10736;
continue;
}
} else
{var arg__6573__auto___10737 = cljs.core.first.call(null,seq__8381_10731__$1);a__6572__auto__.push(arg__6573__auto___10737);
{
var G__10738 = cljs.core.next.call(null,seq__8381_10731__$1);
var G__10739 = null;
var G__10740 = 0;
var G__10741 = 0;
seq__8381_10721 = G__10738;
chunk__8382_10722 = G__10739;
count__8383_10723 = G__10740;
i__8384_10724 = G__10741;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.thead.apply(null,a__6572__auto__);
};
var thead = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return thead__delegate.call(this,args__6571__auto__);};
thead.cljs$lang$maxFixedArity = 0;
thead.cljs$lang$applyTo = (function (arglist__10742){
var args__6571__auto__ = cljs.core.seq(arglist__10742);
return thead__delegate(args__6571__auto__);
});
thead.cljs$core$IFn$_invoke$arity$variadic = thead__delegate;
return thead;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.time = (function() { 
var time__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__8389_10743 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__8390_10744 = null;var count__8391_10745 = 0;var i__8392_10746 = 0;while(true){
if((i__8392_10746 < count__8391_10745))
{var arg__6573__auto___10747 = cljs.core._nth.call(null,chunk__8390_10744,i__8392_10746);a__6572__auto__.push(arg__6573__auto___10747);
{
var G__10748 = seq__8389_10743;
var G__10749 = chunk__8390_10744;
var G__10750 = count__8391_10745;
var G__10751 = (i__8392_10746 + 1);
seq__8389_10743 = G__10748;
chunk__8390_10744 = G__10749;
count__8391_10745 = G__10750;
i__8392_10746 = G__10751;
continue;
}
} else
{var temp__4092__auto___10752 = cljs.core.seq.call(null,seq__8389_10743);if(temp__4092__auto___10752)
{var seq__8389_10753__$1 = temp__4092__auto___10752;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8389_10753__$1))
{var c__5634__auto___10754 = cljs.core.chunk_first.call(null,seq__8389_10753__$1);{
var G__10755 = cljs.core.chunk_rest.call(null,seq__8389_10753__$1);
var G__10756 = c__5634__auto___10754;
var G__10757 = cljs.core.count.call(null,c__5634__auto___10754);
var G__10758 = 0;
seq__8389_10743 = G__10755;
chunk__8390_10744 = G__10756;
count__8391_10745 = G__10757;
i__8392_10746 = G__10758;
continue;
}
} else
{var arg__6573__auto___10759 = cljs.core.first.call(null,seq__8389_10753__$1);a__6572__auto__.push(arg__6573__auto___10759);
{
var G__10760 = cljs.core.next.call(null,seq__8389_10753__$1);
var G__10761 = null;
var G__10762 = 0;
var G__10763 = 0;
seq__8389_10743 = G__10760;
chunk__8390_10744 = G__10761;
count__8391_10745 = G__10762;
i__8392_10746 = G__10763;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.time.apply(null,a__6572__auto__);
};
var time = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return time__delegate.call(this,args__6571__auto__);};
time.cljs$lang$maxFixedArity = 0;
time.cljs$lang$applyTo = (function (arglist__10764){
var args__6571__auto__ = cljs.core.seq(arglist__10764);
return time__delegate(args__6571__auto__);
});
time.cljs$core$IFn$_invoke$arity$variadic = time__delegate;
return time;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.title = (function() { 
var title__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__8397_10765 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__8398_10766 = null;var count__8399_10767 = 0;var i__8400_10768 = 0;while(true){
if((i__8400_10768 < count__8399_10767))
{var arg__6573__auto___10769 = cljs.core._nth.call(null,chunk__8398_10766,i__8400_10768);a__6572__auto__.push(arg__6573__auto___10769);
{
var G__10770 = seq__8397_10765;
var G__10771 = chunk__8398_10766;
var G__10772 = count__8399_10767;
var G__10773 = (i__8400_10768 + 1);
seq__8397_10765 = G__10770;
chunk__8398_10766 = G__10771;
count__8399_10767 = G__10772;
i__8400_10768 = G__10773;
continue;
}
} else
{var temp__4092__auto___10774 = cljs.core.seq.call(null,seq__8397_10765);if(temp__4092__auto___10774)
{var seq__8397_10775__$1 = temp__4092__auto___10774;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8397_10775__$1))
{var c__5634__auto___10776 = cljs.core.chunk_first.call(null,seq__8397_10775__$1);{
var G__10777 = cljs.core.chunk_rest.call(null,seq__8397_10775__$1);
var G__10778 = c__5634__auto___10776;
var G__10779 = cljs.core.count.call(null,c__5634__auto___10776);
var G__10780 = 0;
seq__8397_10765 = G__10777;
chunk__8398_10766 = G__10778;
count__8399_10767 = G__10779;
i__8400_10768 = G__10780;
continue;
}
} else
{var arg__6573__auto___10781 = cljs.core.first.call(null,seq__8397_10775__$1);a__6572__auto__.push(arg__6573__auto___10781);
{
var G__10782 = cljs.core.next.call(null,seq__8397_10775__$1);
var G__10783 = null;
var G__10784 = 0;
var G__10785 = 0;
seq__8397_10765 = G__10782;
chunk__8398_10766 = G__10783;
count__8399_10767 = G__10784;
i__8400_10768 = G__10785;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.title.apply(null,a__6572__auto__);
};
var title = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return title__delegate.call(this,args__6571__auto__);};
title.cljs$lang$maxFixedArity = 0;
title.cljs$lang$applyTo = (function (arglist__10786){
var args__6571__auto__ = cljs.core.seq(arglist__10786);
return title__delegate(args__6571__auto__);
});
title.cljs$core$IFn$_invoke$arity$variadic = title__delegate;
return title;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.tr = (function() { 
var tr__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__8405_10787 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__8406_10788 = null;var count__8407_10789 = 0;var i__8408_10790 = 0;while(true){
if((i__8408_10790 < count__8407_10789))
{var arg__6573__auto___10791 = cljs.core._nth.call(null,chunk__8406_10788,i__8408_10790);a__6572__auto__.push(arg__6573__auto___10791);
{
var G__10792 = seq__8405_10787;
var G__10793 = chunk__8406_10788;
var G__10794 = count__8407_10789;
var G__10795 = (i__8408_10790 + 1);
seq__8405_10787 = G__10792;
chunk__8406_10788 = G__10793;
count__8407_10789 = G__10794;
i__8408_10790 = G__10795;
continue;
}
} else
{var temp__4092__auto___10796 = cljs.core.seq.call(null,seq__8405_10787);if(temp__4092__auto___10796)
{var seq__8405_10797__$1 = temp__4092__auto___10796;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8405_10797__$1))
{var c__5634__auto___10798 = cljs.core.chunk_first.call(null,seq__8405_10797__$1);{
var G__10799 = cljs.core.chunk_rest.call(null,seq__8405_10797__$1);
var G__10800 = c__5634__auto___10798;
var G__10801 = cljs.core.count.call(null,c__5634__auto___10798);
var G__10802 = 0;
seq__8405_10787 = G__10799;
chunk__8406_10788 = G__10800;
count__8407_10789 = G__10801;
i__8408_10790 = G__10802;
continue;
}
} else
{var arg__6573__auto___10803 = cljs.core.first.call(null,seq__8405_10797__$1);a__6572__auto__.push(arg__6573__auto___10803);
{
var G__10804 = cljs.core.next.call(null,seq__8405_10797__$1);
var G__10805 = null;
var G__10806 = 0;
var G__10807 = 0;
seq__8405_10787 = G__10804;
chunk__8406_10788 = G__10805;
count__8407_10789 = G__10806;
i__8408_10790 = G__10807;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.tr.apply(null,a__6572__auto__);
};
var tr = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return tr__delegate.call(this,args__6571__auto__);};
tr.cljs$lang$maxFixedArity = 0;
tr.cljs$lang$applyTo = (function (arglist__10808){
var args__6571__auto__ = cljs.core.seq(arglist__10808);
return tr__delegate(args__6571__auto__);
});
tr.cljs$core$IFn$_invoke$arity$variadic = tr__delegate;
return tr;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.track = (function() { 
var track__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__8413_10809 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__8414_10810 = null;var count__8415_10811 = 0;var i__8416_10812 = 0;while(true){
if((i__8416_10812 < count__8415_10811))
{var arg__6573__auto___10813 = cljs.core._nth.call(null,chunk__8414_10810,i__8416_10812);a__6572__auto__.push(arg__6573__auto___10813);
{
var G__10814 = seq__8413_10809;
var G__10815 = chunk__8414_10810;
var G__10816 = count__8415_10811;
var G__10817 = (i__8416_10812 + 1);
seq__8413_10809 = G__10814;
chunk__8414_10810 = G__10815;
count__8415_10811 = G__10816;
i__8416_10812 = G__10817;
continue;
}
} else
{var temp__4092__auto___10818 = cljs.core.seq.call(null,seq__8413_10809);if(temp__4092__auto___10818)
{var seq__8413_10819__$1 = temp__4092__auto___10818;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8413_10819__$1))
{var c__5634__auto___10820 = cljs.core.chunk_first.call(null,seq__8413_10819__$1);{
var G__10821 = cljs.core.chunk_rest.call(null,seq__8413_10819__$1);
var G__10822 = c__5634__auto___10820;
var G__10823 = cljs.core.count.call(null,c__5634__auto___10820);
var G__10824 = 0;
seq__8413_10809 = G__10821;
chunk__8414_10810 = G__10822;
count__8415_10811 = G__10823;
i__8416_10812 = G__10824;
continue;
}
} else
{var arg__6573__auto___10825 = cljs.core.first.call(null,seq__8413_10819__$1);a__6572__auto__.push(arg__6573__auto___10825);
{
var G__10826 = cljs.core.next.call(null,seq__8413_10819__$1);
var G__10827 = null;
var G__10828 = 0;
var G__10829 = 0;
seq__8413_10809 = G__10826;
chunk__8414_10810 = G__10827;
count__8415_10811 = G__10828;
i__8416_10812 = G__10829;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.track.apply(null,a__6572__auto__);
};
var track = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return track__delegate.call(this,args__6571__auto__);};
track.cljs$lang$maxFixedArity = 0;
track.cljs$lang$applyTo = (function (arglist__10830){
var args__6571__auto__ = cljs.core.seq(arglist__10830);
return track__delegate(args__6571__auto__);
});
track.cljs$core$IFn$_invoke$arity$variadic = track__delegate;
return track;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.u = (function() { 
var u__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__8421_10831 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__8422_10832 = null;var count__8423_10833 = 0;var i__8424_10834 = 0;while(true){
if((i__8424_10834 < count__8423_10833))
{var arg__6573__auto___10835 = cljs.core._nth.call(null,chunk__8422_10832,i__8424_10834);a__6572__auto__.push(arg__6573__auto___10835);
{
var G__10836 = seq__8421_10831;
var G__10837 = chunk__8422_10832;
var G__10838 = count__8423_10833;
var G__10839 = (i__8424_10834 + 1);
seq__8421_10831 = G__10836;
chunk__8422_10832 = G__10837;
count__8423_10833 = G__10838;
i__8424_10834 = G__10839;
continue;
}
} else
{var temp__4092__auto___10840 = cljs.core.seq.call(null,seq__8421_10831);if(temp__4092__auto___10840)
{var seq__8421_10841__$1 = temp__4092__auto___10840;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8421_10841__$1))
{var c__5634__auto___10842 = cljs.core.chunk_first.call(null,seq__8421_10841__$1);{
var G__10843 = cljs.core.chunk_rest.call(null,seq__8421_10841__$1);
var G__10844 = c__5634__auto___10842;
var G__10845 = cljs.core.count.call(null,c__5634__auto___10842);
var G__10846 = 0;
seq__8421_10831 = G__10843;
chunk__8422_10832 = G__10844;
count__8423_10833 = G__10845;
i__8424_10834 = G__10846;
continue;
}
} else
{var arg__6573__auto___10847 = cljs.core.first.call(null,seq__8421_10841__$1);a__6572__auto__.push(arg__6573__auto___10847);
{
var G__10848 = cljs.core.next.call(null,seq__8421_10841__$1);
var G__10849 = null;
var G__10850 = 0;
var G__10851 = 0;
seq__8421_10831 = G__10848;
chunk__8422_10832 = G__10849;
count__8423_10833 = G__10850;
i__8424_10834 = G__10851;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.u.apply(null,a__6572__auto__);
};
var u = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return u__delegate.call(this,args__6571__auto__);};
u.cljs$lang$maxFixedArity = 0;
u.cljs$lang$applyTo = (function (arglist__10852){
var args__6571__auto__ = cljs.core.seq(arglist__10852);
return u__delegate(args__6571__auto__);
});
u.cljs$core$IFn$_invoke$arity$variadic = u__delegate;
return u;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.ul = (function() { 
var ul__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__8429_10853 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__8430_10854 = null;var count__8431_10855 = 0;var i__8432_10856 = 0;while(true){
if((i__8432_10856 < count__8431_10855))
{var arg__6573__auto___10857 = cljs.core._nth.call(null,chunk__8430_10854,i__8432_10856);a__6572__auto__.push(arg__6573__auto___10857);
{
var G__10858 = seq__8429_10853;
var G__10859 = chunk__8430_10854;
var G__10860 = count__8431_10855;
var G__10861 = (i__8432_10856 + 1);
seq__8429_10853 = G__10858;
chunk__8430_10854 = G__10859;
count__8431_10855 = G__10860;
i__8432_10856 = G__10861;
continue;
}
} else
{var temp__4092__auto___10862 = cljs.core.seq.call(null,seq__8429_10853);if(temp__4092__auto___10862)
{var seq__8429_10863__$1 = temp__4092__auto___10862;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8429_10863__$1))
{var c__5634__auto___10864 = cljs.core.chunk_first.call(null,seq__8429_10863__$1);{
var G__10865 = cljs.core.chunk_rest.call(null,seq__8429_10863__$1);
var G__10866 = c__5634__auto___10864;
var G__10867 = cljs.core.count.call(null,c__5634__auto___10864);
var G__10868 = 0;
seq__8429_10853 = G__10865;
chunk__8430_10854 = G__10866;
count__8431_10855 = G__10867;
i__8432_10856 = G__10868;
continue;
}
} else
{var arg__6573__auto___10869 = cljs.core.first.call(null,seq__8429_10863__$1);a__6572__auto__.push(arg__6573__auto___10869);
{
var G__10870 = cljs.core.next.call(null,seq__8429_10863__$1);
var G__10871 = null;
var G__10872 = 0;
var G__10873 = 0;
seq__8429_10853 = G__10870;
chunk__8430_10854 = G__10871;
count__8431_10855 = G__10872;
i__8432_10856 = G__10873;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.ul.apply(null,a__6572__auto__);
};
var ul = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ul__delegate.call(this,args__6571__auto__);};
ul.cljs$lang$maxFixedArity = 0;
ul.cljs$lang$applyTo = (function (arglist__10874){
var args__6571__auto__ = cljs.core.seq(arglist__10874);
return ul__delegate(args__6571__auto__);
});
ul.cljs$core$IFn$_invoke$arity$variadic = ul__delegate;
return ul;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.var$ = (function() { 
var var$__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__8437_10875 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__8438_10876 = null;var count__8439_10877 = 0;var i__8440_10878 = 0;while(true){
if((i__8440_10878 < count__8439_10877))
{var arg__6573__auto___10879 = cljs.core._nth.call(null,chunk__8438_10876,i__8440_10878);a__6572__auto__.push(arg__6573__auto___10879);
{
var G__10880 = seq__8437_10875;
var G__10881 = chunk__8438_10876;
var G__10882 = count__8439_10877;
var G__10883 = (i__8440_10878 + 1);
seq__8437_10875 = G__10880;
chunk__8438_10876 = G__10881;
count__8439_10877 = G__10882;
i__8440_10878 = G__10883;
continue;
}
} else
{var temp__4092__auto___10884 = cljs.core.seq.call(null,seq__8437_10875);if(temp__4092__auto___10884)
{var seq__8437_10885__$1 = temp__4092__auto___10884;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8437_10885__$1))
{var c__5634__auto___10886 = cljs.core.chunk_first.call(null,seq__8437_10885__$1);{
var G__10887 = cljs.core.chunk_rest.call(null,seq__8437_10885__$1);
var G__10888 = c__5634__auto___10886;
var G__10889 = cljs.core.count.call(null,c__5634__auto___10886);
var G__10890 = 0;
seq__8437_10875 = G__10887;
chunk__8438_10876 = G__10888;
count__8439_10877 = G__10889;
i__8440_10878 = G__10890;
continue;
}
} else
{var arg__6573__auto___10891 = cljs.core.first.call(null,seq__8437_10885__$1);a__6572__auto__.push(arg__6573__auto___10891);
{
var G__10892 = cljs.core.next.call(null,seq__8437_10885__$1);
var G__10893 = null;
var G__10894 = 0;
var G__10895 = 0;
seq__8437_10875 = G__10892;
chunk__8438_10876 = G__10893;
count__8439_10877 = G__10894;
i__8440_10878 = G__10895;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.var$.apply(null,a__6572__auto__);
};
var var$ = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return var$__delegate.call(this,args__6571__auto__);};
var$.cljs$lang$maxFixedArity = 0;
var$.cljs$lang$applyTo = (function (arglist__10896){
var args__6571__auto__ = cljs.core.seq(arglist__10896);
return var$__delegate(args__6571__auto__);
});
var$.cljs$core$IFn$_invoke$arity$variadic = var$__delegate;
return var$;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.video = (function() { 
var video__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__8445_10897 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__8446_10898 = null;var count__8447_10899 = 0;var i__8448_10900 = 0;while(true){
if((i__8448_10900 < count__8447_10899))
{var arg__6573__auto___10901 = cljs.core._nth.call(null,chunk__8446_10898,i__8448_10900);a__6572__auto__.push(arg__6573__auto___10901);
{
var G__10902 = seq__8445_10897;
var G__10903 = chunk__8446_10898;
var G__10904 = count__8447_10899;
var G__10905 = (i__8448_10900 + 1);
seq__8445_10897 = G__10902;
chunk__8446_10898 = G__10903;
count__8447_10899 = G__10904;
i__8448_10900 = G__10905;
continue;
}
} else
{var temp__4092__auto___10906 = cljs.core.seq.call(null,seq__8445_10897);if(temp__4092__auto___10906)
{var seq__8445_10907__$1 = temp__4092__auto___10906;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8445_10907__$1))
{var c__5634__auto___10908 = cljs.core.chunk_first.call(null,seq__8445_10907__$1);{
var G__10909 = cljs.core.chunk_rest.call(null,seq__8445_10907__$1);
var G__10910 = c__5634__auto___10908;
var G__10911 = cljs.core.count.call(null,c__5634__auto___10908);
var G__10912 = 0;
seq__8445_10897 = G__10909;
chunk__8446_10898 = G__10910;
count__8447_10899 = G__10911;
i__8448_10900 = G__10912;
continue;
}
} else
{var arg__6573__auto___10913 = cljs.core.first.call(null,seq__8445_10907__$1);a__6572__auto__.push(arg__6573__auto___10913);
{
var G__10914 = cljs.core.next.call(null,seq__8445_10907__$1);
var G__10915 = null;
var G__10916 = 0;
var G__10917 = 0;
seq__8445_10897 = G__10914;
chunk__8446_10898 = G__10915;
count__8447_10899 = G__10916;
i__8448_10900 = G__10917;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.video.apply(null,a__6572__auto__);
};
var video = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return video__delegate.call(this,args__6571__auto__);};
video.cljs$lang$maxFixedArity = 0;
video.cljs$lang$applyTo = (function (arglist__10918){
var args__6571__auto__ = cljs.core.seq(arglist__10918);
return video__delegate(args__6571__auto__);
});
video.cljs$core$IFn$_invoke$arity$variadic = video__delegate;
return video;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.wbr = (function() { 
var wbr__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__8453_10919 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__8454_10920 = null;var count__8455_10921 = 0;var i__8456_10922 = 0;while(true){
if((i__8456_10922 < count__8455_10921))
{var arg__6573__auto___10923 = cljs.core._nth.call(null,chunk__8454_10920,i__8456_10922);a__6572__auto__.push(arg__6573__auto___10923);
{
var G__10924 = seq__8453_10919;
var G__10925 = chunk__8454_10920;
var G__10926 = count__8455_10921;
var G__10927 = (i__8456_10922 + 1);
seq__8453_10919 = G__10924;
chunk__8454_10920 = G__10925;
count__8455_10921 = G__10926;
i__8456_10922 = G__10927;
continue;
}
} else
{var temp__4092__auto___10928 = cljs.core.seq.call(null,seq__8453_10919);if(temp__4092__auto___10928)
{var seq__8453_10929__$1 = temp__4092__auto___10928;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8453_10929__$1))
{var c__5634__auto___10930 = cljs.core.chunk_first.call(null,seq__8453_10929__$1);{
var G__10931 = cljs.core.chunk_rest.call(null,seq__8453_10929__$1);
var G__10932 = c__5634__auto___10930;
var G__10933 = cljs.core.count.call(null,c__5634__auto___10930);
var G__10934 = 0;
seq__8453_10919 = G__10931;
chunk__8454_10920 = G__10932;
count__8455_10921 = G__10933;
i__8456_10922 = G__10934;
continue;
}
} else
{var arg__6573__auto___10935 = cljs.core.first.call(null,seq__8453_10929__$1);a__6572__auto__.push(arg__6573__auto___10935);
{
var G__10936 = cljs.core.next.call(null,seq__8453_10929__$1);
var G__10937 = null;
var G__10938 = 0;
var G__10939 = 0;
seq__8453_10919 = G__10936;
chunk__8454_10920 = G__10937;
count__8455_10921 = G__10938;
i__8456_10922 = G__10939;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.wbr.apply(null,a__6572__auto__);
};
var wbr = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return wbr__delegate.call(this,args__6571__auto__);};
wbr.cljs$lang$maxFixedArity = 0;
wbr.cljs$lang$applyTo = (function (arglist__10940){
var args__6571__auto__ = cljs.core.seq(arglist__10940);
return wbr__delegate(args__6571__auto__);
});
wbr.cljs$core$IFn$_invoke$arity$variadic = wbr__delegate;
return wbr;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.circle = (function() { 
var circle__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__8461_10941 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__8462_10942 = null;var count__8463_10943 = 0;var i__8464_10944 = 0;while(true){
if((i__8464_10944 < count__8463_10943))
{var arg__6573__auto___10945 = cljs.core._nth.call(null,chunk__8462_10942,i__8464_10944);a__6572__auto__.push(arg__6573__auto___10945);
{
var G__10946 = seq__8461_10941;
var G__10947 = chunk__8462_10942;
var G__10948 = count__8463_10943;
var G__10949 = (i__8464_10944 + 1);
seq__8461_10941 = G__10946;
chunk__8462_10942 = G__10947;
count__8463_10943 = G__10948;
i__8464_10944 = G__10949;
continue;
}
} else
{var temp__4092__auto___10950 = cljs.core.seq.call(null,seq__8461_10941);if(temp__4092__auto___10950)
{var seq__8461_10951__$1 = temp__4092__auto___10950;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8461_10951__$1))
{var c__5634__auto___10952 = cljs.core.chunk_first.call(null,seq__8461_10951__$1);{
var G__10953 = cljs.core.chunk_rest.call(null,seq__8461_10951__$1);
var G__10954 = c__5634__auto___10952;
var G__10955 = cljs.core.count.call(null,c__5634__auto___10952);
var G__10956 = 0;
seq__8461_10941 = G__10953;
chunk__8462_10942 = G__10954;
count__8463_10943 = G__10955;
i__8464_10944 = G__10956;
continue;
}
} else
{var arg__6573__auto___10957 = cljs.core.first.call(null,seq__8461_10951__$1);a__6572__auto__.push(arg__6573__auto___10957);
{
var G__10958 = cljs.core.next.call(null,seq__8461_10951__$1);
var G__10959 = null;
var G__10960 = 0;
var G__10961 = 0;
seq__8461_10941 = G__10958;
chunk__8462_10942 = G__10959;
count__8463_10943 = G__10960;
i__8464_10944 = G__10961;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.circle.apply(null,a__6572__auto__);
};
var circle = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return circle__delegate.call(this,args__6571__auto__);};
circle.cljs$lang$maxFixedArity = 0;
circle.cljs$lang$applyTo = (function (arglist__10962){
var args__6571__auto__ = cljs.core.seq(arglist__10962);
return circle__delegate(args__6571__auto__);
});
circle.cljs$core$IFn$_invoke$arity$variadic = circle__delegate;
return circle;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.g = (function() { 
var g__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__8469_10963 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__8470_10964 = null;var count__8471_10965 = 0;var i__8472_10966 = 0;while(true){
if((i__8472_10966 < count__8471_10965))
{var arg__6573__auto___10967 = cljs.core._nth.call(null,chunk__8470_10964,i__8472_10966);a__6572__auto__.push(arg__6573__auto___10967);
{
var G__10968 = seq__8469_10963;
var G__10969 = chunk__8470_10964;
var G__10970 = count__8471_10965;
var G__10971 = (i__8472_10966 + 1);
seq__8469_10963 = G__10968;
chunk__8470_10964 = G__10969;
count__8471_10965 = G__10970;
i__8472_10966 = G__10971;
continue;
}
} else
{var temp__4092__auto___10972 = cljs.core.seq.call(null,seq__8469_10963);if(temp__4092__auto___10972)
{var seq__8469_10973__$1 = temp__4092__auto___10972;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8469_10973__$1))
{var c__5634__auto___10974 = cljs.core.chunk_first.call(null,seq__8469_10973__$1);{
var G__10975 = cljs.core.chunk_rest.call(null,seq__8469_10973__$1);
var G__10976 = c__5634__auto___10974;
var G__10977 = cljs.core.count.call(null,c__5634__auto___10974);
var G__10978 = 0;
seq__8469_10963 = G__10975;
chunk__8470_10964 = G__10976;
count__8471_10965 = G__10977;
i__8472_10966 = G__10978;
continue;
}
} else
{var arg__6573__auto___10979 = cljs.core.first.call(null,seq__8469_10973__$1);a__6572__auto__.push(arg__6573__auto___10979);
{
var G__10980 = cljs.core.next.call(null,seq__8469_10973__$1);
var G__10981 = null;
var G__10982 = 0;
var G__10983 = 0;
seq__8469_10963 = G__10980;
chunk__8470_10964 = G__10981;
count__8471_10965 = G__10982;
i__8472_10966 = G__10983;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.g.apply(null,a__6572__auto__);
};
var g = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return g__delegate.call(this,args__6571__auto__);};
g.cljs$lang$maxFixedArity = 0;
g.cljs$lang$applyTo = (function (arglist__10984){
var args__6571__auto__ = cljs.core.seq(arglist__10984);
return g__delegate(args__6571__auto__);
});
g.cljs$core$IFn$_invoke$arity$variadic = g__delegate;
return g;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.line = (function() { 
var line__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__8477_10985 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__8478_10986 = null;var count__8479_10987 = 0;var i__8480_10988 = 0;while(true){
if((i__8480_10988 < count__8479_10987))
{var arg__6573__auto___10989 = cljs.core._nth.call(null,chunk__8478_10986,i__8480_10988);a__6572__auto__.push(arg__6573__auto___10989);
{
var G__10990 = seq__8477_10985;
var G__10991 = chunk__8478_10986;
var G__10992 = count__8479_10987;
var G__10993 = (i__8480_10988 + 1);
seq__8477_10985 = G__10990;
chunk__8478_10986 = G__10991;
count__8479_10987 = G__10992;
i__8480_10988 = G__10993;
continue;
}
} else
{var temp__4092__auto___10994 = cljs.core.seq.call(null,seq__8477_10985);if(temp__4092__auto___10994)
{var seq__8477_10995__$1 = temp__4092__auto___10994;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8477_10995__$1))
{var c__5634__auto___10996 = cljs.core.chunk_first.call(null,seq__8477_10995__$1);{
var G__10997 = cljs.core.chunk_rest.call(null,seq__8477_10995__$1);
var G__10998 = c__5634__auto___10996;
var G__10999 = cljs.core.count.call(null,c__5634__auto___10996);
var G__11000 = 0;
seq__8477_10985 = G__10997;
chunk__8478_10986 = G__10998;
count__8479_10987 = G__10999;
i__8480_10988 = G__11000;
continue;
}
} else
{var arg__6573__auto___11001 = cljs.core.first.call(null,seq__8477_10995__$1);a__6572__auto__.push(arg__6573__auto___11001);
{
var G__11002 = cljs.core.next.call(null,seq__8477_10995__$1);
var G__11003 = null;
var G__11004 = 0;
var G__11005 = 0;
seq__8477_10985 = G__11002;
chunk__8478_10986 = G__11003;
count__8479_10987 = G__11004;
i__8480_10988 = G__11005;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.line.apply(null,a__6572__auto__);
};
var line = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return line__delegate.call(this,args__6571__auto__);};
line.cljs$lang$maxFixedArity = 0;
line.cljs$lang$applyTo = (function (arglist__11006){
var args__6571__auto__ = cljs.core.seq(arglist__11006);
return line__delegate(args__6571__auto__);
});
line.cljs$core$IFn$_invoke$arity$variadic = line__delegate;
return line;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.path = (function() { 
var path__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__8485_11007 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__8486_11008 = null;var count__8487_11009 = 0;var i__8488_11010 = 0;while(true){
if((i__8488_11010 < count__8487_11009))
{var arg__6573__auto___11011 = cljs.core._nth.call(null,chunk__8486_11008,i__8488_11010);a__6572__auto__.push(arg__6573__auto___11011);
{
var G__11012 = seq__8485_11007;
var G__11013 = chunk__8486_11008;
var G__11014 = count__8487_11009;
var G__11015 = (i__8488_11010 + 1);
seq__8485_11007 = G__11012;
chunk__8486_11008 = G__11013;
count__8487_11009 = G__11014;
i__8488_11010 = G__11015;
continue;
}
} else
{var temp__4092__auto___11016 = cljs.core.seq.call(null,seq__8485_11007);if(temp__4092__auto___11016)
{var seq__8485_11017__$1 = temp__4092__auto___11016;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8485_11017__$1))
{var c__5634__auto___11018 = cljs.core.chunk_first.call(null,seq__8485_11017__$1);{
var G__11019 = cljs.core.chunk_rest.call(null,seq__8485_11017__$1);
var G__11020 = c__5634__auto___11018;
var G__11021 = cljs.core.count.call(null,c__5634__auto___11018);
var G__11022 = 0;
seq__8485_11007 = G__11019;
chunk__8486_11008 = G__11020;
count__8487_11009 = G__11021;
i__8488_11010 = G__11022;
continue;
}
} else
{var arg__6573__auto___11023 = cljs.core.first.call(null,seq__8485_11017__$1);a__6572__auto__.push(arg__6573__auto___11023);
{
var G__11024 = cljs.core.next.call(null,seq__8485_11017__$1);
var G__11025 = null;
var G__11026 = 0;
var G__11027 = 0;
seq__8485_11007 = G__11024;
chunk__8486_11008 = G__11025;
count__8487_11009 = G__11026;
i__8488_11010 = G__11027;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.path.apply(null,a__6572__auto__);
};
var path = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return path__delegate.call(this,args__6571__auto__);};
path.cljs$lang$maxFixedArity = 0;
path.cljs$lang$applyTo = (function (arglist__11028){
var args__6571__auto__ = cljs.core.seq(arglist__11028);
return path__delegate(args__6571__auto__);
});
path.cljs$core$IFn$_invoke$arity$variadic = path__delegate;
return path;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.polygon = (function() { 
var polygon__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__8493_11029 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__8494_11030 = null;var count__8495_11031 = 0;var i__8496_11032 = 0;while(true){
if((i__8496_11032 < count__8495_11031))
{var arg__6573__auto___11033 = cljs.core._nth.call(null,chunk__8494_11030,i__8496_11032);a__6572__auto__.push(arg__6573__auto___11033);
{
var G__11034 = seq__8493_11029;
var G__11035 = chunk__8494_11030;
var G__11036 = count__8495_11031;
var G__11037 = (i__8496_11032 + 1);
seq__8493_11029 = G__11034;
chunk__8494_11030 = G__11035;
count__8495_11031 = G__11036;
i__8496_11032 = G__11037;
continue;
}
} else
{var temp__4092__auto___11038 = cljs.core.seq.call(null,seq__8493_11029);if(temp__4092__auto___11038)
{var seq__8493_11039__$1 = temp__4092__auto___11038;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8493_11039__$1))
{var c__5634__auto___11040 = cljs.core.chunk_first.call(null,seq__8493_11039__$1);{
var G__11041 = cljs.core.chunk_rest.call(null,seq__8493_11039__$1);
var G__11042 = c__5634__auto___11040;
var G__11043 = cljs.core.count.call(null,c__5634__auto___11040);
var G__11044 = 0;
seq__8493_11029 = G__11041;
chunk__8494_11030 = G__11042;
count__8495_11031 = G__11043;
i__8496_11032 = G__11044;
continue;
}
} else
{var arg__6573__auto___11045 = cljs.core.first.call(null,seq__8493_11039__$1);a__6572__auto__.push(arg__6573__auto___11045);
{
var G__11046 = cljs.core.next.call(null,seq__8493_11039__$1);
var G__11047 = null;
var G__11048 = 0;
var G__11049 = 0;
seq__8493_11029 = G__11046;
chunk__8494_11030 = G__11047;
count__8495_11031 = G__11048;
i__8496_11032 = G__11049;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.polygon.apply(null,a__6572__auto__);
};
var polygon = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return polygon__delegate.call(this,args__6571__auto__);};
polygon.cljs$lang$maxFixedArity = 0;
polygon.cljs$lang$applyTo = (function (arglist__11050){
var args__6571__auto__ = cljs.core.seq(arglist__11050);
return polygon__delegate(args__6571__auto__);
});
polygon.cljs$core$IFn$_invoke$arity$variadic = polygon__delegate;
return polygon;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.polyline = (function() { 
var polyline__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__8501_11051 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__8502_11052 = null;var count__8503_11053 = 0;var i__8504_11054 = 0;while(true){
if((i__8504_11054 < count__8503_11053))
{var arg__6573__auto___11055 = cljs.core._nth.call(null,chunk__8502_11052,i__8504_11054);a__6572__auto__.push(arg__6573__auto___11055);
{
var G__11056 = seq__8501_11051;
var G__11057 = chunk__8502_11052;
var G__11058 = count__8503_11053;
var G__11059 = (i__8504_11054 + 1);
seq__8501_11051 = G__11056;
chunk__8502_11052 = G__11057;
count__8503_11053 = G__11058;
i__8504_11054 = G__11059;
continue;
}
} else
{var temp__4092__auto___11060 = cljs.core.seq.call(null,seq__8501_11051);if(temp__4092__auto___11060)
{var seq__8501_11061__$1 = temp__4092__auto___11060;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8501_11061__$1))
{var c__5634__auto___11062 = cljs.core.chunk_first.call(null,seq__8501_11061__$1);{
var G__11063 = cljs.core.chunk_rest.call(null,seq__8501_11061__$1);
var G__11064 = c__5634__auto___11062;
var G__11065 = cljs.core.count.call(null,c__5634__auto___11062);
var G__11066 = 0;
seq__8501_11051 = G__11063;
chunk__8502_11052 = G__11064;
count__8503_11053 = G__11065;
i__8504_11054 = G__11066;
continue;
}
} else
{var arg__6573__auto___11067 = cljs.core.first.call(null,seq__8501_11061__$1);a__6572__auto__.push(arg__6573__auto___11067);
{
var G__11068 = cljs.core.next.call(null,seq__8501_11061__$1);
var G__11069 = null;
var G__11070 = 0;
var G__11071 = 0;
seq__8501_11051 = G__11068;
chunk__8502_11052 = G__11069;
count__8503_11053 = G__11070;
i__8504_11054 = G__11071;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.polyline.apply(null,a__6572__auto__);
};
var polyline = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return polyline__delegate.call(this,args__6571__auto__);};
polyline.cljs$lang$maxFixedArity = 0;
polyline.cljs$lang$applyTo = (function (arglist__11072){
var args__6571__auto__ = cljs.core.seq(arglist__11072);
return polyline__delegate(args__6571__auto__);
});
polyline.cljs$core$IFn$_invoke$arity$variadic = polyline__delegate;
return polyline;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.rect = (function() { 
var rect__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__8509_11073 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__8510_11074 = null;var count__8511_11075 = 0;var i__8512_11076 = 0;while(true){
if((i__8512_11076 < count__8511_11075))
{var arg__6573__auto___11077 = cljs.core._nth.call(null,chunk__8510_11074,i__8512_11076);a__6572__auto__.push(arg__6573__auto___11077);
{
var G__11078 = seq__8509_11073;
var G__11079 = chunk__8510_11074;
var G__11080 = count__8511_11075;
var G__11081 = (i__8512_11076 + 1);
seq__8509_11073 = G__11078;
chunk__8510_11074 = G__11079;
count__8511_11075 = G__11080;
i__8512_11076 = G__11081;
continue;
}
} else
{var temp__4092__auto___11082 = cljs.core.seq.call(null,seq__8509_11073);if(temp__4092__auto___11082)
{var seq__8509_11083__$1 = temp__4092__auto___11082;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8509_11083__$1))
{var c__5634__auto___11084 = cljs.core.chunk_first.call(null,seq__8509_11083__$1);{
var G__11085 = cljs.core.chunk_rest.call(null,seq__8509_11083__$1);
var G__11086 = c__5634__auto___11084;
var G__11087 = cljs.core.count.call(null,c__5634__auto___11084);
var G__11088 = 0;
seq__8509_11073 = G__11085;
chunk__8510_11074 = G__11086;
count__8511_11075 = G__11087;
i__8512_11076 = G__11088;
continue;
}
} else
{var arg__6573__auto___11089 = cljs.core.first.call(null,seq__8509_11083__$1);a__6572__auto__.push(arg__6573__auto___11089);
{
var G__11090 = cljs.core.next.call(null,seq__8509_11083__$1);
var G__11091 = null;
var G__11092 = 0;
var G__11093 = 0;
seq__8509_11073 = G__11090;
chunk__8510_11074 = G__11091;
count__8511_11075 = G__11092;
i__8512_11076 = G__11093;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.rect.apply(null,a__6572__auto__);
};
var rect = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return rect__delegate.call(this,args__6571__auto__);};
rect.cljs$lang$maxFixedArity = 0;
rect.cljs$lang$applyTo = (function (arglist__11094){
var args__6571__auto__ = cljs.core.seq(arglist__11094);
return rect__delegate(args__6571__auto__);
});
rect.cljs$core$IFn$_invoke$arity$variadic = rect__delegate;
return rect;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.svg = (function() { 
var svg__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__8517_11095 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__8518_11096 = null;var count__8519_11097 = 0;var i__8520_11098 = 0;while(true){
if((i__8520_11098 < count__8519_11097))
{var arg__6573__auto___11099 = cljs.core._nth.call(null,chunk__8518_11096,i__8520_11098);a__6572__auto__.push(arg__6573__auto___11099);
{
var G__11100 = seq__8517_11095;
var G__11101 = chunk__8518_11096;
var G__11102 = count__8519_11097;
var G__11103 = (i__8520_11098 + 1);
seq__8517_11095 = G__11100;
chunk__8518_11096 = G__11101;
count__8519_11097 = G__11102;
i__8520_11098 = G__11103;
continue;
}
} else
{var temp__4092__auto___11104 = cljs.core.seq.call(null,seq__8517_11095);if(temp__4092__auto___11104)
{var seq__8517_11105__$1 = temp__4092__auto___11104;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8517_11105__$1))
{var c__5634__auto___11106 = cljs.core.chunk_first.call(null,seq__8517_11105__$1);{
var G__11107 = cljs.core.chunk_rest.call(null,seq__8517_11105__$1);
var G__11108 = c__5634__auto___11106;
var G__11109 = cljs.core.count.call(null,c__5634__auto___11106);
var G__11110 = 0;
seq__8517_11095 = G__11107;
chunk__8518_11096 = G__11108;
count__8519_11097 = G__11109;
i__8520_11098 = G__11110;
continue;
}
} else
{var arg__6573__auto___11111 = cljs.core.first.call(null,seq__8517_11105__$1);a__6572__auto__.push(arg__6573__auto___11111);
{
var G__11112 = cljs.core.next.call(null,seq__8517_11105__$1);
var G__11113 = null;
var G__11114 = 0;
var G__11115 = 0;
seq__8517_11095 = G__11112;
chunk__8518_11096 = G__11113;
count__8519_11097 = G__11114;
i__8520_11098 = G__11115;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.svg.apply(null,a__6572__auto__);
};
var svg = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return svg__delegate.call(this,args__6571__auto__);};
svg.cljs$lang$maxFixedArity = 0;
svg.cljs$lang$applyTo = (function (arglist__11116){
var args__6571__auto__ = cljs.core.seq(arglist__11116);
return svg__delegate(args__6571__auto__);
});
svg.cljs$core$IFn$_invoke$arity$variadic = svg__delegate;
return svg;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.text = (function() { 
var text__delegate = function (args__6571__auto__){var a__6572__auto__ = [];a__6572__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6571__auto__)));
var seq__7829_11117 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6571__auto__));var chunk__7830_11118 = null;var count__7831_11119 = 0;var i__7832_11120 = 0;while(true){
if((i__7832_11120 < count__7831_11119))
{var arg__6573__auto___11121 = cljs.core._nth.call(null,chunk__7830_11118,i__7832_11120);a__6572__auto__.push(arg__6573__auto___11121);
{
var G__11122 = seq__7829_11117;
var G__11123 = chunk__7830_11118;
var G__11124 = count__7831_11119;
var G__11125 = (i__7832_11120 + 1);
seq__7829_11117 = G__11122;
chunk__7830_11118 = G__11123;
count__7831_11119 = G__11124;
i__7832_11120 = G__11125;
continue;
}
} else
{var temp__4092__auto___11126 = cljs.core.seq.call(null,seq__7829_11117);if(temp__4092__auto___11126)
{var seq__7829_11127__$1 = temp__4092__auto___11126;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7829_11127__$1))
{var c__5634__auto___11128 = cljs.core.chunk_first.call(null,seq__7829_11127__$1);{
var G__11129 = cljs.core.chunk_rest.call(null,seq__7829_11127__$1);
var G__11130 = c__5634__auto___11128;
var G__11131 = cljs.core.count.call(null,c__5634__auto___11128);
var G__11132 = 0;
seq__7829_11117 = G__11129;
chunk__7830_11118 = G__11130;
count__7831_11119 = G__11131;
i__7832_11120 = G__11132;
continue;
}
} else
{var arg__6573__auto___11133 = cljs.core.first.call(null,seq__7829_11127__$1);a__6572__auto__.push(arg__6573__auto___11133);
{
var G__11134 = cljs.core.next.call(null,seq__7829_11127__$1);
var G__11135 = null;
var G__11136 = 0;
var G__11137 = 0;
seq__7829_11117 = G__11134;
chunk__7830_11118 = G__11135;
count__7831_11119 = G__11136;
i__7832_11120 = G__11137;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.text.apply(null,a__6572__auto__);
};
var text = function (var_args){
var args__6571__auto__ = null;if (arguments.length > 0) {
  args__6571__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return text__delegate.call(this,args__6571__auto__);};
text.cljs$lang$maxFixedArity = 0;
text.cljs$lang$applyTo = (function (arglist__11138){
var args__6571__auto__ = cljs.core.seq(arglist__11138);
return text__delegate(args__6571__auto__);
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
lt.plugins.elm_light.autocompleter.handle_keypress = (function handle_keypress(p__7547,ev){var map__7550 = p__7547;var map__7550__$1 = ((cljs.core.seq_QMARK_.call(null,map__7550))?cljs.core.apply.call(null,cljs.core.hash_map,map__7550):map__7550);var props = map__7550__$1;var on_cancel = cljs.core.get.call(null,map__7550__$1,new cljs.core.Keyword(null,"on-cancel","on-cancel",600765850));var on_select = cljs.core.get.call(null,map__7550__$1,new cljs.core.Keyword(null,"on-select","on-select",1062468636));var on_down = cljs.core.get.call(null,map__7550__$1,new cljs.core.Keyword(null,"on-down","on-down",3936419650));var on_up = cljs.core.get.call(null,map__7550__$1,new cljs.core.Keyword(null,"on-up","on-up",1119739067));var kk = ev.which;var G__7551 = kk;if(cljs.core._EQ_.call(null,27,G__7551))
{ev.preventDefault();
ev.target.value = "";
return on_cancel.call(null);
} else
{if(cljs.core._EQ_.call(null,13,G__7551))
{ev.preventDefault();
var temp__4092__auto___7567 = lt.plugins.elm_light.autocompleter.find_active.call(null,new cljs.core.Keyword(null,"items","items",1114430258).cljs$core$IFn$_invoke$arity$1(props));if(cljs.core.truth_(temp__4092__auto___7567))
{var active_7568 = temp__4092__auto___7567;ev.target.value = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(active_7568);
} else
{}
return on_select.call(null);
} else
{if(cljs.core._EQ_.call(null,40,G__7551))
{ev.preventDefault();
return on_down.call(null);
} else
{if(cljs.core._EQ_.call(null,38,G__7551))
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
return (function (p1__7552_SHARP_){return "autocomplete-dropdown-item row".concat((cljs.core.truth_(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(p1__7552_SHARP_))?" autocomplete-active":""));
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
lt.plugins.elm_light.autocompleter.Adder = quiescent.component.call(null,(function (p__7553){var map__7554 = p__7553;var map__7554__$1 = ((cljs.core.seq_QMARK_.call(null,map__7554))?cljs.core.apply.call(null,cljs.core.hash_map,map__7554):map__7554);var props = map__7554__$1;var disabled = cljs.core.get.call(null,map__7554__$1,new cljs.core.Keyword(null,"disabled","disabled",1284845038));var on_add_package = cljs.core.get.call(null,map__7554__$1,new cljs.core.Keyword(null,"on-add-package","on-add-package",3601701790));return quiescent.dom.button.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",1004015509),"btn",new cljs.core.Keyword(null,"disabled","disabled",1284845038),disabled,new cljs.core.Keyword(null,"onClick","onClick",3956969051),((function (map__7554,map__7554__$1,props,disabled,on_add_package){
return (function (){return on_add_package.call(null);
});})(map__7554,map__7554__$1,props,disabled,on_add_package))
], null),"Add package");
}));
/**
* 
*/
lt.plugins.elm_light.autocompleter.Versions = quiescent.component.call(null,(function (props){return cljs.core.apply.call(null,quiescent.dom.select,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",1004015509),"versions",new cljs.core.Keyword(null,"value","value",1125876963),new cljs.core.Keyword(null,"version","version",1365512266).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"onChange","onChange",2050678241),(function (p1__7555_SHARP_){return new cljs.core.Keyword(null,"on-change-version","on-change-version",822058203).cljs$core$IFn$_invoke$arity$1(props).call(null,p1__7555_SHARP_.target.value);
})], null),cljs.core.map.call(null,(function (p1__7556_SHARP_){return quiescent.dom.option.call(null,cljs.core.PersistentArrayMap.EMPTY,p1__7556_SHARP_);
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
clojure.walk.keywordize_keys = (function keywordize_keys(m){var f = (function (p__11562){var vec__11563 = p__11562;var k = cljs.core.nth.call(null,vec__11563,0,null);var v = cljs.core.nth.call(null,vec__11563,1,null);if(typeof k === 'string')
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
clojure.walk.stringify_keys = (function stringify_keys(m){var f = (function (p__11566){var vec__11567 = p__11566;var k = cljs.core.nth.call(null,vec__11567,0,null);var v = cljs.core.nth.call(null,vec__11567,1,null);if((k instanceof cljs.core.Keyword))
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
lt.plugins.elm_light.utils.find_symbol = (function find_symbol(ed,pos){var curr_tok = lt.objs.editor.__GT_token.call(null,ed,pos);var G__11590 = new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(curr_tok);if(cljs.core._EQ_.call(null,"variable-3",G__11590))
{return [cljs.core.str(find_symbol.call(null,ed,cljs.core.assoc.call(null,pos,new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(curr_tok)))),cljs.core.str(new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(curr_tok))].join('');
} else
{if(cljs.core._EQ_.call(null,"variable-2",G__11590))
{return [cljs.core.str(find_symbol.call(null,ed,cljs.core.assoc.call(null,pos,new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(curr_tok)))),cljs.core.str(new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(curr_tok))].join('');
} else
{if(cljs.core._EQ_.call(null,"variable",G__11590))
{return [cljs.core.str(find_symbol.call(null,ed,cljs.core.assoc.call(null,pos,new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(curr_tok)))),cljs.core.str(new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(curr_tok))].join('');
} else
{if(cljs.core._EQ_.call(null,"qualifier",G__11590))
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
return (function (p__11597){var vec__11598 = p__11597;var _ = cljs.core.nth.call(null,vec__11598,0,null);var vs = cljs.core.nth.call(null,vec__11598,1,null);return cljs.core.apply.call(null,cljs.core.merge,vs);
});})(pkg_json,deps_json))
,cljs.core.group_by.call(null,new cljs.core.Keyword(null,"package","package",4501809080),cljs.core.concat.call(null,cljs.core.mapv.call(null,((function (pkg_json,deps_json){
return (function (p__11599){var vec__11600 = p__11599;var k = cljs.core.nth.call(null,vec__11600,0,null);var v = cljs.core.nth.call(null,vec__11600,1,null);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"package","package",4501809080),lt.plugins.elm_light.utils.nskw__GT_name.call(null,k),new cljs.core.Keyword(null,"exact","exact",1110851185),v], null);
});})(pkg_json,deps_json))
,lt.plugins.elm_light.utils.parse_json_file.call(null,deps_json)),cljs.core.mapv.call(null,((function (pkg_json,deps_json){
return (function (p__11601){var vec__11602 = p__11601;var k = cljs.core.nth.call(null,vec__11602,0,null);var v = cljs.core.nth.call(null,vec__11602,1,null);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"package","package",4501809080),lt.plugins.elm_light.utils.nskw__GT_name.call(null,k),new cljs.core.Keyword(null,"range","range",1122184367),v], null);
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
lt.plugins.elm_light.graph.find_package_by_name = (function find_package_by_name(this$,name){return cljs.core.some.call(null,(function (p1__11221_SHARP_){if(cljs.core._EQ_.call(null,lt.plugins.elm_light.graph.lower.call(null,new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(p1__11221_SHARP_)),lt.plugins.elm_light.graph.lower.call(null,name)))
{return p1__11221_SHARP_;
} else
{return null;
}
}),new cljs.core.Keyword(null,"all-packages","all-packages",1123981067).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
});
lt.plugins.elm_light.graph.dependency_graph_ui = (function dependency_graph_ui(this$){var e__6291__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.graph","div.graph",2030351651),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dependency-graph","div.dependency-graph",3039800187),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg:svg","svg:svg",3472817088),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",1127031096),"650",new cljs.core.Keyword(null,"height","height",4087841945),"680"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg:g","svg:g",1123725379),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",2066570974),"translate(20,20)"], null)], null)], null)], null)], null));var seq__11228_11279 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__11229_11280 = null;var count__11230_11281 = 0;var i__11231_11282 = 0;while(true){
if((i__11231_11282 < count__11230_11281))
{var vec__11232_11283 = cljs.core._nth.call(null,chunk__11229_11280,i__11231_11282);var ev__6292__auto___11284 = cljs.core.nth.call(null,vec__11232_11283,0,null);var func__6293__auto___11285 = cljs.core.nth.call(null,vec__11232_11283,1,null);lt.util.dom.on.call(null,e__6291__auto__,ev__6292__auto___11284,func__6293__auto___11285);
{
var G__11286 = seq__11228_11279;
var G__11287 = chunk__11229_11280;
var G__11288 = count__11230_11281;
var G__11289 = (i__11231_11282 + 1);
seq__11228_11279 = G__11286;
chunk__11229_11280 = G__11287;
count__11230_11281 = G__11288;
i__11231_11282 = G__11289;
continue;
}
} else
{var temp__4092__auto___11290 = cljs.core.seq.call(null,seq__11228_11279);if(temp__4092__auto___11290)
{var seq__11228_11291__$1 = temp__4092__auto___11290;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11228_11291__$1))
{var c__5634__auto___11292 = cljs.core.chunk_first.call(null,seq__11228_11291__$1);{
var G__11293 = cljs.core.chunk_rest.call(null,seq__11228_11291__$1);
var G__11294 = c__5634__auto___11292;
var G__11295 = cljs.core.count.call(null,c__5634__auto___11292);
var G__11296 = 0;
seq__11228_11279 = G__11293;
chunk__11229_11280 = G__11294;
count__11230_11281 = G__11295;
i__11231_11282 = G__11296;
continue;
}
} else
{var vec__11233_11297 = cljs.core.first.call(null,seq__11228_11291__$1);var ev__6292__auto___11298 = cljs.core.nth.call(null,vec__11233_11297,0,null);var func__6293__auto___11299 = cljs.core.nth.call(null,vec__11233_11297,1,null);lt.util.dom.on.call(null,e__6291__auto__,ev__6292__auto___11298,func__6293__auto___11299);
{
var G__11300 = cljs.core.next.call(null,seq__11228_11291__$1);
var G__11301 = null;
var G__11302 = 0;
var G__11303 = 0;
seq__11228_11279 = G__11300;
chunk__11229_11280 = G__11301;
count__11230_11281 = G__11302;
i__11231_11282 = G__11303;
continue;
}
}
} else
{}
}
break;
}
return e__6291__auto__;
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.graph","dependency-graph","lt.plugins.elm-light.graph/dependency-graph",2371711049),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elm.graph.dependency","elm.graph.dependency",658564005)], null),new cljs.core.Keyword(null,"name","name",1017277949),"Dependency graph",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){lt.plugins.elm_light.utils.fetch_all_packages.call(null,(function (p1__11234_SHARP_){return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"all-packages","all-packages",1123981067),p1__11234_SHARP_], null));
}));
return lt.plugins.elm_light.graph.dependency_graph_ui.call(null,this$);
}));
lt.plugins.elm_light.graph.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___11304 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___11304))
{var ts_11305 = temp__4092__auto___11304;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_11305))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_11305);
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
lt.plugins.elm_light.graph.node_label = (function node_label(x){return {"label": [cljs.core.str("<div class='graph-label"),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"version","version",1365512266).cljs$core$IFn$_invoke$arity$1(x))?"'":" error'")),cljs.core.str(" title='"),cljs.core.str((function (){var or__4886__auto__ = new cljs.core.Keyword(null,"summary","summary",3451231000).cljs$core$IFn$_invoke$arity$1(x);if(cljs.core.truth_(or__4886__auto__))
{return or__4886__auto__;
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
lt.plugins.elm_light.graph.create_graph = (function create_graph(data){var g = (new lt.plugins.elm_light.graph.dagreD3.graphlib.Graph()).setGraph({});var seq__11243_11306 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"nodes","nodes",1118897699).cljs$core$IFn$_invoke$arity$1(data));var chunk__11244_11307 = null;var count__11245_11308 = 0;var i__11246_11309 = 0;while(true){
if((i__11246_11309 < count__11245_11308))
{var x_11310 = cljs.core._nth.call(null,chunk__11244_11307,i__11246_11309);g.setNode(lt.plugins.elm_light.graph.dep_id.call(null,x_11310),lt.plugins.elm_light.graph.node_label.call(null,x_11310));
{
var G__11311 = seq__11243_11306;
var G__11312 = chunk__11244_11307;
var G__11313 = count__11245_11308;
var G__11314 = (i__11246_11309 + 1);
seq__11243_11306 = G__11311;
chunk__11244_11307 = G__11312;
count__11245_11308 = G__11313;
i__11246_11309 = G__11314;
continue;
}
} else
{var temp__4092__auto___11315 = cljs.core.seq.call(null,seq__11243_11306);if(temp__4092__auto___11315)
{var seq__11243_11316__$1 = temp__4092__auto___11315;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11243_11316__$1))
{var c__5634__auto___11317 = cljs.core.chunk_first.call(null,seq__11243_11316__$1);{
var G__11318 = cljs.core.chunk_rest.call(null,seq__11243_11316__$1);
var G__11319 = c__5634__auto___11317;
var G__11320 = cljs.core.count.call(null,c__5634__auto___11317);
var G__11321 = 0;
seq__11243_11306 = G__11318;
chunk__11244_11307 = G__11319;
count__11245_11308 = G__11320;
i__11246_11309 = G__11321;
continue;
}
} else
{var x_11322 = cljs.core.first.call(null,seq__11243_11316__$1);g.setNode(lt.plugins.elm_light.graph.dep_id.call(null,x_11322),lt.plugins.elm_light.graph.node_label.call(null,x_11322));
{
var G__11323 = cljs.core.next.call(null,seq__11243_11316__$1);
var G__11324 = null;
var G__11325 = 0;
var G__11326 = 0;
seq__11243_11306 = G__11323;
chunk__11244_11307 = G__11324;
count__11245_11308 = G__11325;
i__11246_11309 = G__11326;
continue;
}
}
} else
{}
}
break;
}
var seq__11247_11327 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"edges","edges",1110261192).cljs$core$IFn$_invoke$arity$1(data));var chunk__11248_11328 = null;var count__11249_11329 = 0;var i__11250_11330 = 0;while(true){
if((i__11250_11330 < count__11249_11329))
{var x_11331 = cljs.core._nth.call(null,chunk__11248_11328,i__11250_11330);g.setEdge(new cljs.core.Keyword(null,"a","a",1013904339).cljs$core$IFn$_invoke$arity$1(x_11331),new cljs.core.Keyword(null,"b","b",1013904340).cljs$core$IFn$_invoke$arity$1(x_11331),{"style": (cljs.core.truth_(new cljs.core.Keyword(null,"transitive","transitive",3584713111).cljs$core$IFn$_invoke$arity$1(x_11331))?"stroke-dasharray: 5, 5;":null), "label": new cljs.core.Keyword(null,"label","label",1116631654).cljs$core$IFn$_invoke$arity$1(x_11331)});
{
var G__11332 = seq__11247_11327;
var G__11333 = chunk__11248_11328;
var G__11334 = count__11249_11329;
var G__11335 = (i__11250_11330 + 1);
seq__11247_11327 = G__11332;
chunk__11248_11328 = G__11333;
count__11249_11329 = G__11334;
i__11250_11330 = G__11335;
continue;
}
} else
{var temp__4092__auto___11336 = cljs.core.seq.call(null,seq__11247_11327);if(temp__4092__auto___11336)
{var seq__11247_11337__$1 = temp__4092__auto___11336;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11247_11337__$1))
{var c__5634__auto___11338 = cljs.core.chunk_first.call(null,seq__11247_11337__$1);{
var G__11339 = cljs.core.chunk_rest.call(null,seq__11247_11337__$1);
var G__11340 = c__5634__auto___11338;
var G__11341 = cljs.core.count.call(null,c__5634__auto___11338);
var G__11342 = 0;
seq__11247_11327 = G__11339;
chunk__11248_11328 = G__11340;
count__11249_11329 = G__11341;
i__11250_11330 = G__11342;
continue;
}
} else
{var x_11343 = cljs.core.first.call(null,seq__11247_11337__$1);g.setEdge(new cljs.core.Keyword(null,"a","a",1013904339).cljs$core$IFn$_invoke$arity$1(x_11343),new cljs.core.Keyword(null,"b","b",1013904340).cljs$core$IFn$_invoke$arity$1(x_11343),{"style": (cljs.core.truth_(new cljs.core.Keyword(null,"transitive","transitive",3584713111).cljs$core$IFn$_invoke$arity$1(x_11343))?"stroke-dasharray: 5, 5;":null), "label": new cljs.core.Keyword(null,"label","label",1116631654).cljs$core$IFn$_invoke$arity$1(x_11343)});
{
var G__11344 = cljs.core.next.call(null,seq__11247_11337__$1);
var G__11345 = null;
var G__11346 = 0;
var G__11347 = 0;
seq__11247_11327 = G__11344;
chunk__11248_11328 = G__11345;
count__11249_11329 = G__11346;
i__11250_11330 = G__11347;
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
}),cljs.core.map.call(null,(function (p__11255){var vec__11256 = p__11255;var k = cljs.core.nth.call(null,vec__11256,0,null);var v = cljs.core.nth.call(null,vec__11256,1,null);return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"package","package",4501809080),new cljs.core.Keyword(null,"range","range",1122184367),new cljs.core.Keyword(null,"version","version",1365512266)],[lt.plugins.elm_light.utils.nskw__GT_name.call(null,k),v,new cljs.core.Keyword(null,"version","version",1365512266).cljs$core$IFn$_invoke$arity$1(cljs.core.some.call(null,((function (vec__11256,k,v){
return (function (p1__11251_SHARP_){if(cljs.core._EQ_.call(null,lt.plugins.elm_light.utils.nskw__GT_name.call(null,k),new cljs.core.Keyword(null,"package","package",4501809080).cljs$core$IFn$_invoke$arity$1(p1__11251_SHARP_)))
{return p1__11251_SHARP_;
} else
{return null;
}
});})(vec__11256,k,v))
,new cljs.core.Keyword(null,"packages","packages",1764771935).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))))]);
}),new cljs.core.Keyword(null,"dependencies","dependencies",1517678747).cljs$core$IFn$_invoke$arity$1(pkg_json))));if(temp__4092__auto__)
{var edges = temp__4092__auto__;lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",1016980252),new cljs.core.Keyword(null,"edges","edges",1110261192)], null),((function (edges,temp__4092__auto__){
return (function (p1__11252_SHARP_){return cljs.core.concat.call(null,p1__11252_SHARP_,edges);
});})(edges,temp__4092__auto__))
);
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"elm.graph.render","elm.graph.render",2076182000));
} else
{return null;
}
});
lt.plugins.elm_light.graph.__BEH__on_get_transitives = (function __BEH__on_get_transitives(this$){var transitives = cljs.core.remove.call(null,new cljs.core.Keyword(null,"range","range",1122184367),new cljs.core.Keyword(null,"packages","packages",1764771935).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))));lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",1016980252),new cljs.core.Keyword(null,"nodes","nodes",1118897699)], null),((function (transitives){
return (function (p1__11257_SHARP_){return cljs.core.concat.call(null,p1__11257_SHARP_,transitives);
});})(transitives))
);
lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"elm.graph.render","elm.graph.render",2076182000));
var seq__11262 = cljs.core.seq.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"version","version",1365512266),new cljs.core.Keyword(null,"packages","packages",1764771935).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))));var chunk__11263 = null;var count__11264 = 0;var i__11265 = 0;while(true){
if((i__11265 < count__11264))
{var x = cljs.core._nth.call(null,chunk__11263,i__11265);lt.plugins.elm_light.graph.get_package_json.call(null,x,cljs.core.partial.call(null,lt.plugins.elm_light.graph.add_edges_for_dep,this$,x));
{
var G__11348 = seq__11262;
var G__11349 = chunk__11263;
var G__11350 = count__11264;
var G__11351 = (i__11265 + 1);
seq__11262 = G__11348;
chunk__11263 = G__11349;
count__11264 = G__11350;
i__11265 = G__11351;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__11262);if(temp__4092__auto__)
{var seq__11262__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11262__$1))
{var c__5634__auto__ = cljs.core.chunk_first.call(null,seq__11262__$1);{
var G__11352 = cljs.core.chunk_rest.call(null,seq__11262__$1);
var G__11353 = c__5634__auto__;
var G__11354 = cljs.core.count.call(null,c__5634__auto__);
var G__11355 = 0;
seq__11262 = G__11352;
chunk__11263 = G__11353;
count__11264 = G__11354;
i__11265 = G__11355;
continue;
}
} else
{var x = cljs.core.first.call(null,seq__11262__$1);lt.plugins.elm_light.graph.get_package_json.call(null,x,cljs.core.partial.call(null,lt.plugins.elm_light.graph.add_edges_for_dep,this$,x));
{
var G__11356 = cljs.core.next.call(null,seq__11262__$1);
var G__11357 = null;
var G__11358 = 0;
var G__11359 = 0;
seq__11262 = G__11356;
chunk__11263 = G__11357;
count__11264 = G__11358;
i__11265 = G__11359;
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
lt.plugins.elm_light.graph.get_dependency_data = (function get_dependency_data(project_path){var pkgs = cljs.core.map.call(null,(function (p1__11267_SHARP_){return cljs.core.assoc.call(null,p1__11267_SHARP_,new cljs.core.Keyword(null,"summary","summary",3451231000),new cljs.core.Keyword(null,"summary","summary",3451231000).cljs$core$IFn$_invoke$arity$1(lt.plugins.elm_light.graph.find_package_by_name.call(null,lt.plugins.elm_light.graph.dependency_graph,new cljs.core.Keyword(null,"package","package",4501809080).cljs$core$IFn$_invoke$arity$1(p1__11267_SHARP_))));
}),cljs.core.map.call(null,(function (p1__11266_SHARP_){return clojure.set.rename_keys.call(null,p1__11266_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"exact","exact",1110851185),new cljs.core.Keyword(null,"version","version",1365512266)], null));
}),lt.plugins.elm_light.utils.get_project_deps.call(null,project_path)));var direct = cljs.core.filter.call(null,new cljs.core.Keyword(null,"range","range",1122184367),pkgs);var rootVersion = new cljs.core.Keyword(null,"version","version",1365512266).cljs$core$IFn$_invoke$arity$1(lt.plugins.elm_light.utils.parse_json_file.call(null,lt.objs.files.join.call(null,project_path,"elm-package.json")));var root = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"package","package",4501809080),lt.objs.files.basename.call(null,project_path),new cljs.core.Keyword(null,"version","version",1365512266),rootVersion,new cljs.core.Keyword(null,"shape","shape",1123304211),"ellipse"], null);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"packages","packages",1764771935),pkgs,new cljs.core.Keyword(null,"nodes","nodes",1118897699),cljs.core.conj.call(null,direct,root),new cljs.core.Keyword(null,"edges","edges",1110261192),cljs.core.map.call(null,((function (pkgs,direct,rootVersion,root){
return (function (p1__11268_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"label","label",1116631654)],[lt.plugins.elm_light.graph.dep_id.call(null,root),lt.plugins.elm_light.graph.dep_id.call(null,p1__11268_SHARP_),new cljs.core.Keyword(null,"range","range",1122184367).cljs$core$IFn$_invoke$arity$1(p1__11268_SHARP_)]);
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
return (function (p__11499){var vec__11500 = p__11499;var k = cljs.core.nth.call(null,vec__11500,0,null);var v = cljs.core.nth.call(null,vec__11500,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.elm_light.utils.nskw__GT_name.call(null,k),v], null);
});})(pkg_file))
,deps)),pkg);
});})(pkg_file))
)));
});
lt.plugins.elm_light.packages.project_wrapper = (function project_wrapper(this$){var e__6291__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.elm","div.elm",2686466363),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"project-packages-wrapper"], null),"Retrieving project package info..."], null)], null));var seq__11507_11532 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__11508_11533 = null;var count__11509_11534 = 0;var i__11510_11535 = 0;while(true){
if((i__11510_11535 < count__11509_11534))
{var vec__11511_11536 = cljs.core._nth.call(null,chunk__11508_11533,i__11510_11535);var ev__6292__auto___11537 = cljs.core.nth.call(null,vec__11511_11536,0,null);var func__6293__auto___11538 = cljs.core.nth.call(null,vec__11511_11536,1,null);lt.util.dom.on.call(null,e__6291__auto__,ev__6292__auto___11537,func__6293__auto___11538);
{
var G__11539 = seq__11507_11532;
var G__11540 = chunk__11508_11533;
var G__11541 = count__11509_11534;
var G__11542 = (i__11510_11535 + 1);
seq__11507_11532 = G__11539;
chunk__11508_11533 = G__11540;
count__11509_11534 = G__11541;
i__11510_11535 = G__11542;
continue;
}
} else
{var temp__4092__auto___11543 = cljs.core.seq.call(null,seq__11507_11532);if(temp__4092__auto___11543)
{var seq__11507_11544__$1 = temp__4092__auto___11543;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11507_11544__$1))
{var c__5634__auto___11545 = cljs.core.chunk_first.call(null,seq__11507_11544__$1);{
var G__11546 = cljs.core.chunk_rest.call(null,seq__11507_11544__$1);
var G__11547 = c__5634__auto___11545;
var G__11548 = cljs.core.count.call(null,c__5634__auto___11545);
var G__11549 = 0;
seq__11507_11532 = G__11546;
chunk__11508_11533 = G__11547;
count__11509_11534 = G__11548;
i__11510_11535 = G__11549;
continue;
}
} else
{var vec__11512_11550 = cljs.core.first.call(null,seq__11507_11544__$1);var ev__6292__auto___11551 = cljs.core.nth.call(null,vec__11512_11550,0,null);var func__6293__auto___11552 = cljs.core.nth.call(null,vec__11512_11550,1,null);lt.util.dom.on.call(null,e__6291__auto__,ev__6292__auto___11551,func__6293__auto___11552);
{
var G__11553 = cljs.core.next.call(null,seq__11507_11544__$1);
var G__11554 = null;
var G__11555 = 0;
var G__11556 = 0;
seq__11507_11532 = G__11553;
chunk__11508_11533 = G__11554;
count__11509_11534 = G__11555;
i__11510_11535 = G__11556;
continue;
}
}
} else
{}
}
break;
}
return e__6291__auto__;
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.packages","elm-packages","lt.plugins.elm-light.packages/elm-packages",4552372902),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elm.packages","elm.packages",3931311271),null], null), null),new cljs.core.Keyword(null,"label","label",1116631654),"Elm project packages",new cljs.core.Keyword(null,"name","name",1017277949),"Elm project packages",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){lt.plugins.elm_light.utils.fetch_all_packages.call(null,(function (p1__11513_SHARP_){return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"all-packages","all-packages",1123981067),p1__11513_SHARP_], null));
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
lt.plugins.elm_light.packages.idx_active = (function idx_active(items){return cljs.core.first.call(null,cljs.core.keep_indexed.call(null,(function (p1__11515_SHARP_,p2__11514_SHARP_){if(cljs.core.truth_(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(p2__11514_SHARP_)))
{return p1__11515_SHARP_;
} else
{return null;
}
}),items));
});
lt.plugins.elm_light.packages.move_down = (function move_down(items){if(cljs.core.empty_QMARK_.call(null,items))
{return null;
} else
{return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,items,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.elm_light.packages.idx_active.call(null,items),new cljs.core.Keyword(null,"active","active",3885920888)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__5200__auto__ = (cljs.core.count.call(null,items) - 1);var y__5201__auto__ = (lt.plugins.elm_light.packages.idx_active.call(null,items) + 1);return ((x__5200__auto__ < y__5201__auto__) ? x__5200__auto__ : y__5201__auto__);
})(),new cljs.core.Keyword(null,"active","active",3885920888)], null),true);
}
});
lt.plugins.elm_light.packages.move_up = (function move_up(items){if(cljs.core.empty_QMARK_.call(null,items))
{return null;
} else
{return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,items,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.elm_light.packages.idx_active.call(null,items),new cljs.core.Keyword(null,"active","active",3885920888)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__5193__auto__ = 0;var y__5194__auto__ = (lt.plugins.elm_light.packages.idx_active.call(null,items) - 1);return ((x__5193__auto__ > y__5194__auto__) ? x__5193__auto__ : y__5194__auto__);
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
lt.plugins.elm_light.packages.on_pkg_sel = (function on_pkg_sel(){var items_11557 = new cljs.core.Keyword(null,"ac-packages","ac-packages",1548109226).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.elm_light.packages.elm_packages));var temp__4090__auto___11558 = lt.plugins.elm_light.packages.idx_active.call(null,items_11557);if(cljs.core.truth_(temp__4090__auto___11558))
{var idx_11559 = temp__4090__auto___11558;lt.object.assoc_in_BANG_.call(null,lt.plugins.elm_light.packages.elm_packages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ac-versions","ac-versions",3107155800)], null),new cljs.core.Keyword(null,"versions","versions",3323818509).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,items_11557,idx_11559)));
lt.object.assoc_in_BANG_.call(null,lt.plugins.elm_light.packages.elm_packages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ac-version","ac-version",2051259807)], null),cljs.core.first.call(null,new cljs.core.Keyword(null,"versions","versions",3323818509).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,items_11557,idx_11559))));
lt.object.assoc_in_BANG_.call(null,lt.plugins.elm_light.packages.elm_packages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ac-package","ac-package",892589325)], null),new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,items_11557,idx_11559)));
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
return (function (p1__11516_SHARP_){if(cljs.core._EQ_.call(null,p1__11516_SHARP_,0))
{lt.objs.notifos.done_working.call(null);
} else
{lt.objs.notifos.set_msg_BANG_.call(null,"Error installing elm package",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),"error",new cljs.core.Keyword(null,"timeout","timeout",3994960083),5000], null));
}
lt.object.raise.call(null,lt.plugins.elm_light.packages.elm_packages,new cljs.core.Keyword(null,"elm.show.project.packages","elm.show.project.packages",3385102109),new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.elm_light.packages.elm_packages)));
return lt.object.raise.call(null,lt.plugins.elm_light.graph.dependency_graph,new cljs.core.Keyword(null,"elm.graph.show-dependencies","elm.graph.show-dependencies",3464547203),new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.elm_light.packages.elm_packages)),false);
});})(proc,args))
);
proc.stdout.on("data",((function (proc,args){
return (function (p1__11517_SHARP_){return lt.objs.notifos.msg_STAR_.call(null,[cljs.core.str("Package install: "),cljs.core.str(p1__11517_SHARP_)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"timeout","timeout",3994960083),5000], null));
});})(proc,args))
);
return proc.stderr.on("data",((function (proc,args){
return (function (p1__11518_SHARP_){return lt.objs.console.error.call(null,[cljs.core.str(p1__11518_SHARP_)].join(''));
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
lt.plugins.elm_light.packages.on_pkg_browse = (function on_pkg_browse(pkg,version){var url = [cljs.core.str("http://package.elm-lang.org/packages/"),cljs.core.str(pkg),cljs.core.str("/"),cljs.core.str(version)].join('');var b = (function (){var or__4886__auto__ = cljs.core.first.call(null,lt.object.by_tag.call(null,new cljs.core.Keyword(null,"browser","browser",1164844698)));if(cljs.core.truth_(or__4886__auto__))
{return or__4886__auto__;
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
lt.plugins.elm_light.packages.PackageRow = quiescent.component.call(null,(function (p__11519){var map__11520 = p__11519;var map__11520__$1 = ((cljs.core.seq_QMARK_.call(null,map__11520))?cljs.core.apply.call(null,cljs.core.hash_map,map__11520):map__11520);var on_browse = cljs.core.get.call(null,map__11520__$1,new cljs.core.Keyword(null,"on-browse","on-browse",587885994));var on_remove = cljs.core.get.call(null,map__11520__$1,new cljs.core.Keyword(null,"on-remove","on-remove",1033879460));var exact = cljs.core.get.call(null,map__11520__$1,new cljs.core.Keyword(null,"exact","exact",1110851185));var range = cljs.core.get.call(null,map__11520__$1,new cljs.core.Keyword(null,"range","range",1122184367));var package$ = cljs.core.get.call(null,map__11520__$1,new cljs.core.Keyword(null,"package","package",4501809080));return quiescent.dom.tr.call(null,cljs.core.PersistentArrayMap.EMPTY,quiescent.dom.td.call(null,cljs.core.PersistentArrayMap.EMPTY,(cljs.core.truth_((function (){var and__4874__auto__ = package$;if(cljs.core.truth_(and__4874__auto__))
{return exact;
} else
{return and__4874__auto__;
}
})())?quiescent.dom.span.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",1004015509),"link",new cljs.core.Keyword(null,"onClick","onClick",3956969051),((function (map__11520,map__11520__$1,on_browse,on_remove,exact,range,package$){
return (function (){return on_browse.call(null,package$,exact);
});})(map__11520,map__11520__$1,on_browse,on_remove,exact,range,package$))
], null),package$):package$)),quiescent.dom.td.call(null,cljs.core.PersistentArrayMap.EMPTY,range),quiescent.dom.td.call(null,cljs.core.PersistentArrayMap.EMPTY,exact),quiescent.dom.td.call(null,cljs.core.PersistentArrayMap.EMPTY,(cljs.core.truth_(range)?quiescent.dom.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",3956969051),((function (map__11520,map__11520__$1,on_browse,on_remove,exact,range,package$){
return (function (){return on_remove.call(null,package$);
});})(map__11520,map__11520__$1,on_browse,on_remove,exact,range,package$))
], null),"remove"):null)));
}));
/**
* 
*/
lt.plugins.elm_light.packages.PackageTable = quiescent.component.call(null,(function (props){return quiescent.dom.table.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",1004015509),"package-table"], null),quiescent.dom.thead.call(null,cljs.core.PersistentArrayMap.EMPTY,quiescent.dom.tr.call(null,cljs.core.PersistentArrayMap.EMPTY,quiescent.dom.th.call(null,cljs.core.PersistentArrayMap.EMPTY,"Package"),quiescent.dom.th.call(null,cljs.core.PersistentArrayMap.EMPTY,"Range"),quiescent.dom.th.call(null,cljs.core.PersistentArrayMap.EMPTY,"Exact"),quiescent.dom.th.call(null,cljs.core.PersistentArrayMap.EMPTY,""))),cljs.core.apply.call(null,quiescent.dom.tbody,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__11521_SHARP_){return lt.plugins.elm_light.packages.PackageRow.call(null,cljs.core.assoc.call(null,p1__11521_SHARP_,new cljs.core.Keyword(null,"on-remove","on-remove",1033879460),new cljs.core.Keyword(null,"on-remove","on-remove",1033879460).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"on-browse","on-browse",587885994),new cljs.core.Keyword(null,"on-browse","on-browse",587885994).cljs$core$IFn$_invoke$arity$1(props)));
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
var G__11568 = (line - 1);
line = G__11568;
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
var G__11569 = (line + 1);
line = G__11569;
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
var G__11570 = (line - 1);
line = G__11570;
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
return (function (p1__11192_SHARP_){return lt.plugins.elm_light.clients.on_elm_message.call(null,client,p1__11192_SHARP_);
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
lt.plugins.elm_light.clients.start_elm_client = (function start_elm_client(p__11193){var map__11195 = p__11193;var map__11195__$1 = ((cljs.core.seq_QMARK_.call(null,map__11195))?cljs.core.apply.call(null,cljs.core.hash_map,map__11195):map__11195);var props = map__11195__$1;var client = cljs.core.get.call(null,map__11195__$1,new cljs.core.Keyword(null,"client","client",3951159101));var proj_path = cljs.core.get.call(null,map__11195__$1,new cljs.core.Keyword(null,"proj-path","proj-path",4362692615));var path = cljs.core.get.call(null,map__11195__$1,new cljs.core.Keyword(null,"path","path",1017337751));lt.objs.notifos.working.call(null,"Connecting..");
return lt.plugins.elm_light.clients.claim_reactor_port.call(null,proj_path,((function (map__11195,map__11195__$1,props,client,proj_path,path){
return (function (_,port){var worker = lt.plugins.elm_light.clients.start_elm_worker.call(null,proj_path,port,client);lt.object.merge_BANG_.call(null,client,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1017277949),lt.objs.files.basename.call(null,proj_path),new cljs.core.Keyword(null,"dir","dir",1014003711),proj_path,new cljs.core.Keyword(null,"reactor-port","reactor-port",4649590590),port,new cljs.core.Keyword(null,"worker","worker",4526786288),worker,new cljs.core.Keyword(null,"commands","commands",4706336250),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"editor.elm.lint","editor.elm.lint",1086056222),null,new cljs.core.Keyword(null,"editor.elm.make","editor.elm.make",1086078217),null,new cljs.core.Keyword(null,"editor.eval.elm","editor.eval.elm",1083015975),null,new cljs.core.Keyword(null,"editor.elm.hint","editor.elm.hint",1085937058),null,new cljs.core.Keyword(null,"elm.repl.restart","elm.repl.restart",2931654218),null,new cljs.core.Keyword(null,"docs.elm.search","docs.elm.search",737241333),null,new cljs.core.Keyword(null,"editor.elm.doc","editor.elm.doc",1570413537),null], null), null)], null));
return lt.object.add_behavior_BANG_.call(null,client,new cljs.core.Keyword("lt.plugins.elm-light.clients","send!","lt.plugins.elm-light.clients/send!",867013595));
});})(map__11195,map__11195__$1,props,client,proj_path,path))
);
});
lt.plugins.elm_light.clients.try_connect = (function try_connect(p__11196){var map__11198 = p__11196;var map__11198__$1 = ((cljs.core.seq_QMARK_.call(null,map__11198))?cljs.core.apply.call(null,cljs.core.hash_map,map__11198):map__11198);var props = map__11198__$1;var info = cljs.core.get.call(null,map__11198__$1,new cljs.core.Keyword(null,"info","info",1017141280));var path = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(info);var proj_path = lt.plugins.elm_light.utils.project_path.call(null,path);var client = lt.objs.clients.client_BANG_.call(null,new cljs.core.Keyword(null,"elm-client","elm-client",1622336068));if(cljs.core.truth_(proj_path))
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
lt.plugins.elm_light.__GT_lt_range = (function __GT_lt_range(p__11660){var map__11662 = p__11660;var map__11662__$1 = ((cljs.core.seq_QMARK_.call(null,map__11662))?cljs.core.apply.call(null,cljs.core.hash_map,map__11662):map__11662);var end = cljs.core.get.call(null,map__11662__$1,new cljs.core.Keyword(null,"end","end",1014004813));var start = cljs.core.get.call(null,map__11662__$1,new cljs.core.Keyword(null,"start","start",1123661780));return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1017056028),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",1013907415),(new cljs.core.Keyword(null,"column","column",3954034376).cljs$core$IFn$_invoke$arity$1(start) - 1),new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(start) - 1)], null),new cljs.core.Keyword(null,"to","to",1013907949),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",1013907415),(new cljs.core.Keyword(null,"column","column",3954034376).cljs$core$IFn$_invoke$arity$1(end) - 1),new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(end) - 1)], null)], null);
});
lt.plugins.elm_light.display_make_results = (function display_make_results(ed,res,path){lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"clear-linter-results!","clear-linter-results!",4528495642));
if(cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__11663_SHARP_){return cljs.core._EQ_.call(null,"error",new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(p1__11663_SHARP_));
}),res)))
{lt.objs.notifos.set_msg_BANG_.call(null,"Elm make returned errors; check you editor or the console for details",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
} else
{}
var seq__11672 = cljs.core.seq.call(null,res);var chunk__11673 = null;var count__11674 = 0;var i__11675 = 0;while(true){
if((i__11675 < count__11674))
{var map__11676 = cljs.core._nth.call(null,chunk__11673,i__11675);var map__11676__$1 = ((cljs.core.seq_QMARK_.call(null,map__11676))?cljs.core.apply.call(null,cljs.core.hash_map,map__11676):map__11676);var tag = cljs.core.get.call(null,map__11676__$1,new cljs.core.Keyword(null,"tag","tag",1014018828));var subregion = cljs.core.get.call(null,map__11676__$1,new cljs.core.Keyword(null,"subregion","subregion",1501636774));var region = cljs.core.get.call(null,map__11676__$1,new cljs.core.Keyword(null,"region","region",4374076006));var details = cljs.core.get.call(null,map__11676__$1,new cljs.core.Keyword(null,"details","details",2571625908));var overview = cljs.core.get.call(null,map__11676__$1,new cljs.core.Keyword(null,"overview","overview",1544020203));var type = cljs.core.get.call(null,map__11676__$1,new cljs.core.Keyword(null,"type","type",1017479852));var file = cljs.core.get.call(null,map__11676__$1,new cljs.core.Keyword(null,"file","file",1017047278));var map__11677_11688 = lt.plugins.elm_light.__GT_lt_range.call(null,region);var map__11677_11689__$1 = ((cljs.core.seq_QMARK_.call(null,map__11677_11688))?cljs.core.apply.call(null,cljs.core.hash_map,map__11677_11688):map__11677_11688);var to_11690 = cljs.core.get.call(null,map__11677_11689__$1,new cljs.core.Keyword(null,"to","to",1013907949));var from_11691 = cljs.core.get.call(null,map__11677_11689__$1,new cljs.core.Keyword(null,"from","from",1017056028));var msg_11692 = [cljs.core.str(overview),cljs.core.str("\n"),cljs.core.str(lt.plugins.elm_light.colorize_msg.call(null,details))].join('');if((cljs.core._EQ_.call(null,path,file)) && (cljs.core._EQ_.call(null,type,"warning")))
{lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"linter-result!","linter-result!",4482067001),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",1124275658),tag,new cljs.core.Keyword(null,"details","details",2571625908),msg_11692,new cljs.core.Keyword(null,"category","category",1064415344),new cljs.core.Keyword(null,"warning","warning",2138350350),new cljs.core.Keyword(null,"code-range","code-range",3297446095),lt.plugins.elm_light.__GT_lt_range.call(null,(function (){var or__4886__auto__ = subregion;if(cljs.core.truth_(or__4886__auto__))
{return or__4886__auto__;
} else
{return region;
}
})())], null));
} else
{if((cljs.core._EQ_.call(null,path,file)) && (cljs.core._EQ_.call(null,type,"error")))
{lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"linter-result!","linter-result!",4482067001),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"titshle","titshle",4001834783),tag,new cljs.core.Keyword(null,"details","details",2571625908),msg_11692,new cljs.core.Keyword(null,"category","category",1064415344),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"code-range","code-range",3297446095),lt.plugins.elm_light.__GT_lt_range.call(null,(function (){var or__4886__auto__ = subregion;if(cljs.core.truth_(or__4886__auto__))
{return or__4886__auto__;
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
var G__11693 = seq__11672;
var G__11694 = chunk__11673;
var G__11695 = count__11674;
var G__11696 = (i__11675 + 1);
seq__11672 = G__11693;
chunk__11673 = G__11694;
count__11674 = G__11695;
i__11675 = G__11696;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__11672);if(temp__4092__auto__)
{var seq__11672__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11672__$1))
{var c__5634__auto__ = cljs.core.chunk_first.call(null,seq__11672__$1);{
var G__11697 = cljs.core.chunk_rest.call(null,seq__11672__$1);
var G__11698 = c__5634__auto__;
var G__11699 = cljs.core.count.call(null,c__5634__auto__);
var G__11700 = 0;
seq__11672 = G__11697;
chunk__11673 = G__11698;
count__11674 = G__11699;
i__11675 = G__11700;
continue;
}
} else
{var map__11678 = cljs.core.first.call(null,seq__11672__$1);var map__11678__$1 = ((cljs.core.seq_QMARK_.call(null,map__11678))?cljs.core.apply.call(null,cljs.core.hash_map,map__11678):map__11678);var tag = cljs.core.get.call(null,map__11678__$1,new cljs.core.Keyword(null,"tag","tag",1014018828));var subregion = cljs.core.get.call(null,map__11678__$1,new cljs.core.Keyword(null,"subregion","subregion",1501636774));var region = cljs.core.get.call(null,map__11678__$1,new cljs.core.Keyword(null,"region","region",4374076006));var details = cljs.core.get.call(null,map__11678__$1,new cljs.core.Keyword(null,"details","details",2571625908));var overview = cljs.core.get.call(null,map__11678__$1,new cljs.core.Keyword(null,"overview","overview",1544020203));var type = cljs.core.get.call(null,map__11678__$1,new cljs.core.Keyword(null,"type","type",1017479852));var file = cljs.core.get.call(null,map__11678__$1,new cljs.core.Keyword(null,"file","file",1017047278));var map__11679_11701 = lt.plugins.elm_light.__GT_lt_range.call(null,region);var map__11679_11702__$1 = ((cljs.core.seq_QMARK_.call(null,map__11679_11701))?cljs.core.apply.call(null,cljs.core.hash_map,map__11679_11701):map__11679_11701);var to_11703 = cljs.core.get.call(null,map__11679_11702__$1,new cljs.core.Keyword(null,"to","to",1013907949));var from_11704 = cljs.core.get.call(null,map__11679_11702__$1,new cljs.core.Keyword(null,"from","from",1017056028));var msg_11705 = [cljs.core.str(overview),cljs.core.str("\n"),cljs.core.str(lt.plugins.elm_light.colorize_msg.call(null,details))].join('');if((cljs.core._EQ_.call(null,path,file)) && (cljs.core._EQ_.call(null,type,"warning")))
{lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"linter-result!","linter-result!",4482067001),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",1124275658),tag,new cljs.core.Keyword(null,"details","details",2571625908),msg_11705,new cljs.core.Keyword(null,"category","category",1064415344),new cljs.core.Keyword(null,"warning","warning",2138350350),new cljs.core.Keyword(null,"code-range","code-range",3297446095),lt.plugins.elm_light.__GT_lt_range.call(null,(function (){var or__4886__auto__ = subregion;if(cljs.core.truth_(or__4886__auto__))
{return or__4886__auto__;
} else
{return region;
}
})())], null));
} else
{if((cljs.core._EQ_.call(null,path,file)) && (cljs.core._EQ_.call(null,type,"error")))
{lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"linter-result!","linter-result!",4482067001),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"titshle","titshle",4001834783),tag,new cljs.core.Keyword(null,"details","details",2571625908),msg_11705,new cljs.core.Keyword(null,"category","category",1064415344),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"code-range","code-range",3297446095),lt.plugins.elm_light.__GT_lt_range.call(null,(function (){var or__4886__auto__ = subregion;if(cljs.core.truth_(or__4886__auto__))
{return or__4886__auto__;
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
var G__11706 = cljs.core.next.call(null,seq__11672__$1);
var G__11707 = null;
var G__11708 = 0;
var G__11709 = 0;
seq__11672 = G__11706;
chunk__11673 = G__11707;
count__11674 = G__11708;
i__11675 = G__11709;
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
CodeMirror.extendMode("elm",cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hint-pattern","hint-pattern",2825267644),/[\w_\.$]/], null)));
lt.plugins.elm_light.maybe_trim_prefix = (function maybe_trim_prefix(token,completion){if((".".indexOf(token) > -1))
{return cljs.core.last.call(null,clojure.string.split.call(null,lt.plugins.elm_light.comletion,"."));
} else
{return completion;
}
});
lt.plugins.elm_light.create_hints = (function create_hints(token,completions){return cljs.core.map.call(null,(function (p1__11680_SHARP_){return {"text": new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(p1__11680_SHARP_), "completion": lt.plugins.elm_light.maybe_trim_prefix.call(null,token,new cljs.core.Keyword(null,"completion","completion",4767668046).cljs$core$IFn$_invoke$arity$1(p1__11680_SHARP_))};
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
lt.plugins.elm_light.__BEH__use_local_hints = (function __BEH__use_local_hints(ed,hints,tok){var token_11710 = lt.plugins.elm_light.utils.find_symbol.call(null,ed,lt.objs.editor.__GT_cursor.call(null,ed));if((cljs.core.seq.call(null,token_11710)) && (cljs.core.not_EQ_.call(null,token_11710,new cljs.core.Keyword("lt.plugins.elm-light","token","lt.plugins.elm-light/token",1134194276).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)))))
{lt.object.merge_BANG_.call(null,ed,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.elm-light","token","lt.plugins.elm-light/token",1134194276),token_11710], null));
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
lt.plugins.elm_light.__BEH__eval_BANG_ = (function __BEH__eval_BANG_(this$,event){var map__11682 = event;var map__11682__$1 = ((cljs.core.seq_QMARK_.call(null,map__11682))?cljs.core.apply.call(null,cljs.core.hash_map,map__11682):map__11682);var origin = cljs.core.get.call(null,map__11682__$1,new cljs.core.Keyword(null,"origin","origin",4300251800));var info = cljs.core.get.call(null,map__11682__$1,new cljs.core.Keyword(null,"info","info",1017141280));lt.objs.notifos.working.call(null,"Evaluating elm...");
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
lt.plugins.elm_light.__BEH__repl_restart_BANG_ = (function __BEH__repl_restart_BANG_(p__11683){var map__11685 = p__11683;var map__11685__$1 = ((cljs.core.seq_QMARK_.call(null,map__11685))?cljs.core.apply.call(null,cljs.core.hash_map,map__11685):map__11685);var ed = map__11685__$1;var info = cljs.core.get.call(null,map__11685__$1,new cljs.core.Keyword(null,"info","info",1017141280));var temp__4092__auto__ = new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));if(cljs.core.truth_(temp__4092__auto__))
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
lt.plugins.elm_light.__BEH__elm_browse_BANG_ = (function __BEH__elm_browse_BANG_(ed,debug_QMARK_){var path = lt.plugins.elm_light.utils.reactor_path.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed))));var client = lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor.eval.elm","editor.eval.elm",1083015975),new cljs.core.Keyword(null,"origin","origin",4300251800),ed,new cljs.core.Keyword(null,"info","info",1017141280),new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)),new cljs.core.Keyword(null,"create","create",3956577390),lt.plugins.elm_light.clients.try_connect], null));if(cljs.core.truth_((function (){var and__4874__auto__ = client;if(cljs.core.truth_(and__4874__auto__))
{return path;
} else
{return and__4874__auto__;
}
})()))
{lt.objs.notifos.working.call(null,"Opening elm file in browser");
var b_11711 = (function (){var or__4886__auto__ = cljs.core.first.call(null,lt.object.by_tag.call(null,new cljs.core.Keyword(null,"browser","browser",1164844698)));if(cljs.core.truth_(or__4886__auto__))
{return or__4886__auto__;
} else
{return lt.objs.browser.add.call(null);
}
})();var get_url_11712 = ((function (b_11711,path,client){
return (function (){return [cljs.core.str("http://localhost:"),cljs.core.str(new cljs.core.Keyword(null,"reactor-port","reactor-port",4649590590).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client))),cljs.core.str(path),cljs.core.str((cljs.core.truth_(debug_QMARK_)?"?debug":""))].join('');
});})(b_11711,path,client))
;if(cljs.core.truth_(new cljs.core.Keyword(null,"connected","connected",4729661051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client))))
{lt.object.raise.call(null,b_11711,new cljs.core.Keyword(null,"navigate!","navigate!",1766726722),get_url_11712.call(null));
} else
{lt.util.js.wait.call(null,100,((function (b_11711,get_url_11712,path,client){
return (function (){return lt.object.raise.call(null,b_11711,new cljs.core.Keyword(null,"navigate!","navigate!",1766726722),get_url_11712.call(null));
});})(b_11711,get_url_11712,path,client))
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
}catch (e11687){var e_11713 = e11687;lt.objs.notifos.set_msg_BANG_.call(null,"Elm format reported errors. See console for details",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),"error",new cljs.core.Keyword(null,"timeout","timeout",3994960083),5000], null));
lt.objs.console.error.call(null,e_11713.message);
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
lt.plugins.elm_light.linter.status_class = (function status_class(p__11360){var map__11362 = p__11360;var map__11362__$1 = ((cljs.core.seq_QMARK_.call(null,map__11362))?cljs.core.apply.call(null,cljs.core.hash_map,map__11362):map__11362);var warnings = cljs.core.get.call(null,map__11362__$1,new cljs.core.Keyword(null,"warnings","warnings",1511995337));var errors = cljs.core.get.call(null,map__11362__$1,new cljs.core.Keyword(null,"errors","errors",4014236381));if((errors > 0))
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
lt.plugins.elm_light.linter.status_text = (function status_text(p__11363){var map__11365 = p__11363;var map__11365__$1 = ((cljs.core.seq_QMARK_.call(null,map__11365))?cljs.core.apply.call(null,cljs.core.hash_map,map__11365):map__11365);var warnings = cljs.core.get.call(null,map__11365__$1,new cljs.core.Keyword(null,"warnings","warnings",1511995337));var errors = cljs.core.get.call(null,map__11365__$1,new cljs.core.Keyword(null,"errors","errors",4014236381));return [cljs.core.str("Lint status: "),cljs.core.str(errors),cljs.core.str("/"),cljs.core.str(warnings)].join('');
});
lt.plugins.elm_light.linter.__GT_status_ui = (function __GT_status_ui(p__11366){var map__11368 = p__11366;var map__11368__$1 = ((cljs.core.seq_QMARK_.call(null,map__11368))?cljs.core.apply.call(null,cljs.core.hash_map,map__11368):map__11368);var lint_summary = cljs.core.get.call(null,map__11368__$1,new cljs.core.Keyword(null,"lint-summary","lint-summary",2275048270));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("lint-status "),cljs.core.str(lt.plugins.elm_light.linter.status_class.call(null,lint_summary))].join('')], null),lt.plugins.elm_light.linter.status_text.call(null,lint_summary)], null);
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
return (function (p__11371){var vec__11372 = p__11371;var k = cljs.core.nth.call(null,vec__11372,0,null);var v = cljs.core.nth.call(null,vec__11372,1,null);return new cljs.core.PersistentArrayMap.fromArray([k,cljs.core.count.call(null,v)], true, false);
});})(results,temp__4090__auto__))
,cljs.core.group_by.call(null,new cljs.core.Keyword(null,"category","category",1064415344),cljs.core.map.call(null,new cljs.core.Keyword(null,"result","result",4374444943),cljs.core.vals.call(null,results)))));
} else
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",1110689146),0,new cljs.core.Keyword(null,"warning","warning",2138350350),0], null);
}
});
lt.plugins.elm_light.linter.update_status_for_editor = (function update_status_for_editor(ed){var map__11375 = lt.plugins.elm_light.linter.grouped_lint_count.call(null,ed);var map__11375__$1 = ((cljs.core.seq_QMARK_.call(null,map__11375))?cljs.core.apply.call(null,cljs.core.hash_map,map__11375):map__11375);var warning = cljs.core.get.call(null,map__11375__$1,new cljs.core.Keyword(null,"warning","warning",2138350350));var error = cljs.core.get.call(null,map__11375__$1,new cljs.core.Keyword(null,"error","error",1110689146));return lt.object.raise.call(null,lt.plugins.elm_light.linter.statusbar_lint_summary,new cljs.core.Keyword(null,"update!","update!",779473898),((function (map__11375,map__11375__$1,warning,error){
return (function (p1__11373_SHARP_){return cljs.core.assoc.call(null,p1__11373_SHARP_,new cljs.core.Keyword(null,"warnings","warnings",1511995337),(function (){var or__4886__auto__ = warning;if(cljs.core.truth_(or__4886__auto__))
{return or__4886__auto__;
} else
{return 0;
}
})(),new cljs.core.Keyword(null,"errors","errors",4014236381),(function (){var or__4886__auto__ = error;if(cljs.core.truth_(or__4886__auto__))
{return or__4886__auto__;
} else
{return 0;
}
})());
});})(map__11375,map__11375__$1,warning,error))
);
});
lt.plugins.elm_light.linter.__BEH__update_linter_on_editor_change = (function __BEH__update_linter_on_editor_change(ed){return lt.plugins.elm_light.linter.update_status_for_editor.call(null,ed);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.linter","update-linter-on-editor-change","lt.plugins.elm-light.linter/update-linter-on-editor-change",2858337088),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elm_light.linter.__BEH__update_linter_on_editor_change,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"focus","focus",1111509066),null], null), null));
lt.plugins.elm_light.linter.remove_widget = (function remove_widget(ed,el){try{lt.util.dom.remove.call(null,el);
}catch (e11377){var e_11430 = e11377;}return lt.objs.editor.focus.call(null,ed);
});
lt.plugins.elm_light.linter.inline_ui = (function inline_ui(ed,p__11380){var map__11388 = p__11380;var map__11388__$1 = ((cljs.core.seq_QMARK_.call(null,map__11388))?cljs.core.apply.call(null,cljs.core.hash_map,map__11388):map__11388);var category = cljs.core.get.call(null,map__11388__$1,new cljs.core.Keyword(null,"category","category",1064415344));var details = cljs.core.get.call(null,map__11388__$1,new cljs.core.Keyword(null,"details","details",2571625908));var title = cljs.core.get.call(null,map__11388__$1,new cljs.core.Keyword(null,"title","title",1124275658));var e__6291__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tabindex","tabindex",4410954191),-1,new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("linter-res "),cljs.core.str((function (){var or__4886__auto__ = cljs.core.name.call(null,category);if(cljs.core.truth_(or__4886__auto__))
{return or__4886__auto__;
} else
{return "error";
}
})())].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.title","p.title",3057381068),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.details","div.details",4139669847),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),details], null)], null)], null));var seq__11389_11431 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blur","blur",1016931289),((function (e__6291__auto__,map__11388,map__11388__$1,category,details,title){
return (function (p1__11378_SHARP_){return lt.plugins.elm_light.linter.remove_widget.call(null,ed,p1__11378_SHARP_.target);
});})(e__6291__auto__,map__11388,map__11388__$1,category,details,title))
,new cljs.core.Keyword(null,"keydown","keydown",4493897459),((function (e__6291__auto__,map__11388,map__11388__$1,category,details,title){
return (function (p1__11379_SHARP_){var kc = p1__11379_SHARP_.keyCode;if(cljs.core._EQ_.call(null,kc,27))
{return lt.plugins.elm_light.linter.remove_widget.call(null,ed,p1__11379_SHARP_.target);
} else
{return null;
}
});})(e__6291__auto__,map__11388,map__11388__$1,category,details,title))
], null)));var chunk__11390_11432 = null;var count__11391_11433 = 0;var i__11392_11434 = 0;while(true){
if((i__11392_11434 < count__11391_11433))
{var vec__11393_11435 = cljs.core._nth.call(null,chunk__11390_11432,i__11392_11434);var ev__6292__auto___11436 = cljs.core.nth.call(null,vec__11393_11435,0,null);var func__6293__auto___11437 = cljs.core.nth.call(null,vec__11393_11435,1,null);lt.util.dom.on.call(null,e__6291__auto__,ev__6292__auto___11436,func__6293__auto___11437);
{
var G__11438 = seq__11389_11431;
var G__11439 = chunk__11390_11432;
var G__11440 = count__11391_11433;
var G__11441 = (i__11392_11434 + 1);
seq__11389_11431 = G__11438;
chunk__11390_11432 = G__11439;
count__11391_11433 = G__11440;
i__11392_11434 = G__11441;
continue;
}
} else
{var temp__4092__auto___11442 = cljs.core.seq.call(null,seq__11389_11431);if(temp__4092__auto___11442)
{var seq__11389_11443__$1 = temp__4092__auto___11442;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11389_11443__$1))
{var c__5634__auto___11444 = cljs.core.chunk_first.call(null,seq__11389_11443__$1);{
var G__11445 = cljs.core.chunk_rest.call(null,seq__11389_11443__$1);
var G__11446 = c__5634__auto___11444;
var G__11447 = cljs.core.count.call(null,c__5634__auto___11444);
var G__11448 = 0;
seq__11389_11431 = G__11445;
chunk__11390_11432 = G__11446;
count__11391_11433 = G__11447;
i__11392_11434 = G__11448;
continue;
}
} else
{var vec__11394_11449 = cljs.core.first.call(null,seq__11389_11443__$1);var ev__6292__auto___11450 = cljs.core.nth.call(null,vec__11394_11449,0,null);var func__6293__auto___11451 = cljs.core.nth.call(null,vec__11394_11449,1,null);lt.util.dom.on.call(null,e__6291__auto__,ev__6292__auto___11450,func__6293__auto___11451);
{
var G__11452 = cljs.core.next.call(null,seq__11389_11443__$1);
var G__11453 = null;
var G__11454 = 0;
var G__11455 = 0;
seq__11389_11431 = G__11452;
chunk__11390_11432 = G__11453;
count__11391_11433 = G__11454;
i__11392_11434 = G__11455;
continue;
}
}
} else
{}
}
break;
}
return e__6291__auto__;
});
lt.plugins.elm_light.linter.add_widget = (function add_widget(ed,res_id){var map__11396 = cljs.core.get_in.call(null,cljs.core.deref.call(null,ed),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linter-results","linter-results",4482067083),res_id], null));var map__11396__$1 = ((cljs.core.seq_QMARK_.call(null,map__11396))?cljs.core.apply.call(null,cljs.core.hash_map,map__11396):map__11396);var result = cljs.core.get.call(null,map__11396__$1,new cljs.core.Keyword(null,"result","result",4374444943));var mark = cljs.core.get.call(null,map__11396__$1,new cljs.core.Keyword(null,"mark","mark",1017248319));var ui = lt.plugins.elm_light.linter.inline_ui.call(null,ed,result);lt.objs.editor.__GT_cm_ed.call(null,ed).addWidget(mark.find().from,ui,{"scrollIntoView": true});
return lt.util.dom.focus.call(null,ui);
});
lt.plugins.elm_light.linter.create_mark = (function create_mark(ed,p__11397){var map__11399 = p__11397;var map__11399__$1 = ((cljs.core.seq_QMARK_.call(null,map__11399))?cljs.core.apply.call(null,cljs.core.hash_map,map__11399):map__11399);var code_range = cljs.core.get.call(null,map__11399__$1,new cljs.core.Keyword(null,"code-range","code-range",3297446095));var category = cljs.core.get.call(null,map__11399__$1,new cljs.core.Keyword(null,"category","category",1064415344));var from = new cljs.core.Keyword(null,"from","from",1017056028).cljs$core$IFn$_invoke$arity$1(code_range);var to = ((!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"to","to",1013907949).cljs$core$IFn$_invoke$arity$1(code_range),from)))?new cljs.core.Keyword(null,"to","to",1013907949).cljs$core$IFn$_invoke$arity$1(code_range):cljs.core.assoc.call(null,from,new cljs.core.Keyword(null,"ch","ch",1013907415),(lt.objs.editor.line_length.call(null,ed,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(from)) - 1)));return lt.objs.editor.mark.call(null,ed,from,to,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",1004015509),[cljs.core.str("lint-"),cljs.core.str((function (){var or__4886__auto__ = cljs.core.name.call(null,category);if(cljs.core.truth_(or__4886__auto__))
{return or__4886__auto__;
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
lt.plugins.elm_light.linter.__BEH__clear_linter_results_BANG_ = (function __BEH__clear_linter_results_BANG_(ed){var seq__11406_11456 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"linter-results","linter-results",4482067083).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));var chunk__11407_11457 = null;var count__11408_11458 = 0;var i__11409_11459 = 0;while(true){
if((i__11409_11459 < count__11408_11458))
{var vec__11410_11460 = cljs.core._nth.call(null,chunk__11407_11457,i__11409_11459);var id_11461 = cljs.core.nth.call(null,vec__11410_11460,0,null);var res_11462 = cljs.core.nth.call(null,vec__11410_11460,1,null);var temp__4092__auto___11463 = new cljs.core.Keyword(null,"mark","mark",1017248319).cljs$core$IFn$_invoke$arity$1(res_11462);if(cljs.core.truth_(temp__4092__auto___11463))
{var m_11464 = temp__4092__auto___11463;m_11464.clear();
} else
{}
var temp__4092__auto___11465 = new cljs.core.Keyword(null,"widget","widget",4520824246).cljs$core$IFn$_invoke$arity$1(res_11462);if(cljs.core.truth_(temp__4092__auto___11465))
{var w_11466 = temp__4092__auto___11465;lt.util.dom.remove.call(null,w_11466);
} else
{}
{
var G__11467 = seq__11406_11456;
var G__11468 = chunk__11407_11457;
var G__11469 = count__11408_11458;
var G__11470 = (i__11409_11459 + 1);
seq__11406_11456 = G__11467;
chunk__11407_11457 = G__11468;
count__11408_11458 = G__11469;
i__11409_11459 = G__11470;
continue;
}
} else
{var temp__4092__auto___11471 = cljs.core.seq.call(null,seq__11406_11456);if(temp__4092__auto___11471)
{var seq__11406_11472__$1 = temp__4092__auto___11471;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11406_11472__$1))
{var c__5634__auto___11473 = cljs.core.chunk_first.call(null,seq__11406_11472__$1);{
var G__11474 = cljs.core.chunk_rest.call(null,seq__11406_11472__$1);
var G__11475 = c__5634__auto___11473;
var G__11476 = cljs.core.count.call(null,c__5634__auto___11473);
var G__11477 = 0;
seq__11406_11456 = G__11474;
chunk__11407_11457 = G__11475;
count__11408_11458 = G__11476;
i__11409_11459 = G__11477;
continue;
}
} else
{var vec__11411_11478 = cljs.core.first.call(null,seq__11406_11472__$1);var id_11479 = cljs.core.nth.call(null,vec__11411_11478,0,null);var res_11480 = cljs.core.nth.call(null,vec__11411_11478,1,null);var temp__4092__auto___11481__$1 = new cljs.core.Keyword(null,"mark","mark",1017248319).cljs$core$IFn$_invoke$arity$1(res_11480);if(cljs.core.truth_(temp__4092__auto___11481__$1))
{var m_11482 = temp__4092__auto___11481__$1;m_11482.clear();
} else
{}
var temp__4092__auto___11483__$1 = new cljs.core.Keyword(null,"widget","widget",4520824246).cljs$core$IFn$_invoke$arity$1(res_11480);if(cljs.core.truth_(temp__4092__auto___11483__$1))
{var w_11484 = temp__4092__auto___11483__$1;lt.util.dom.remove.call(null,w_11484);
} else
{}
{
var G__11485 = cljs.core.next.call(null,seq__11406_11472__$1);
var G__11486 = null;
var G__11487 = 0;
var G__11488 = 0;
seq__11406_11456 = G__11485;
chunk__11407_11457 = G__11486;
count__11408_11458 = G__11487;
i__11409_11459 = G__11488;
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
lt.plugins.elm_light.linter.find_current_lint_mark = (function find_current_lint_mark(ed){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__11412_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"linter","linter",4206213986),p1__11412_SHARP_.lttype);
}),lt.objs.editor.find_marks.call(null,ed,lt.objs.editor.__GT_cursor.call(null,ed))));
});
lt.plugins.elm_light.linter.get_widget_by_mark = (function get_widget_by_mark(ed,mark){return cljs.core.get_in.call(null,cljs.core.deref.call(null,ed),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linter-results","linter-results",4482067083),mark.ltlintid,new cljs.core.Keyword(null,"widget","widget",4520824246)], null));
});
lt.plugins.elm_light.linter.mark__GT_pos = (function mark__GT_pos(mark){var cm_pos = mark.find().from;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",1013907415),cm_pos.ch,new cljs.core.Keyword(null,"line","line",1017226086),cm_pos.line], null);
});
lt.plugins.elm_light.linter.get_all_lint_marks = (function get_all_lint_marks(ed){return cljs.core.sort_by.call(null,(function (p1__11414_SHARP_){return cljs.core.juxt.call(null,new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"ch","ch",1013907415)).call(null,lt.plugins.elm_light.linter.mark__GT_pos.call(null,p1__11414_SHARP_));
}),cljs.core.filter.call(null,(function (p1__11413_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"linter","linter",4206213986),p1__11413_SHARP_.lttype);
}),lt.objs.editor.__GT_cm_ed.call(null,ed).getAllMarks()));
});
lt.plugins.elm_light.linter.split_with_mark = (function split_with_mark(ed){var all_marks = lt.plugins.elm_light.linter.get_all_lint_marks.call(null,ed);var curr_mark = lt.plugins.elm_light.linter.find_current_lint_mark.call(null,ed);return cljs.core.split_with.call(null,((function (all_marks,curr_mark){
return (function (p1__11415_SHARP_){return !(cljs.core._EQ_.call(null,(cljs.core.truth_(curr_mark)?curr_mark.ltlintid:null),p1__11415_SHARP_.ltlintid));
});})(all_marks,curr_mark))
,all_marks);
});
lt.plugins.elm_light.linter.find_next_mark = (function find_next_mark(ed){var vec__11417 = lt.plugins.elm_light.linter.split_with_mark.call(null,ed);var ms1 = cljs.core.nth.call(null,vec__11417,0,null);var ms2 = cljs.core.nth.call(null,vec__11417,1,null);return cljs.core.first.call(null,cljs.core.into.call(null,cljs.core.vec.call(null,cljs.core.drop.call(null,1,ms2)),ms1));
});
lt.plugins.elm_light.linter.find_prev_mark = (function find_prev_mark(ed){var vec__11419 = lt.plugins.elm_light.linter.split_with_mark.call(null,ed);var ms1 = cljs.core.nth.call(null,vec__11419,0,null);var ms2 = cljs.core.nth.call(null,vec__11419,1,null);return cljs.core.first.call(null,cljs.core.into.call(null,cljs.core.reverse.call(null,cljs.core.drop.call(null,1,ms2)),ms1));
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
lt.plugins.elm_light.test.deps__GT_named = (function deps__GT_named(deps){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__11573){var vec__11574 = p__11573;var k = cljs.core.nth.call(null,vec__11574,0,null);var v = cljs.core.nth.call(null,vec__11574,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.elm_light.utils.nskw__GT_name.call(null,k),v], null);
}),deps));
});
lt.plugins.elm_light.test.__GT_test_config = (function __GT_test_config(project_cfg){return cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.assoc.call(null,cljs.core.update_in.call(null,project_cfg,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-directories","source-directories",4475397259)], null),lt.plugins.elm_light.test.__GT_test_src_dirs),new cljs.core.Keyword(null,"exposed-modules","exposed-modules",4185867084),cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependencies","dependencies",1517678747)], null),(function (p1__11575_SHARP_){return cljs.core.merge.call(null,p1__11575_SHARP_,lt.plugins.elm_light.test.default_test_deps);
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
return (function (p1__11576_SHARP_){return cljs.core.println.call(null,[cljs.core.str("Test package install: "),cljs.core.str(p1__11576_SHARP_)].join(''));
});})(args,proc))
);
proc.stderr.on("data",((function (args,proc){
return (function (p1__11577_SHARP_){return lt.objs.console.error.call(null,[cljs.core.str(p1__11577_SHARP_)].join(''));
});})(args,proc))
);
proc.on("exit",((function (args,proc){
return (function (p1__11578_SHARP_){if(cljs.core._EQ_.call(null,p1__11578_SHARP_,0))
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