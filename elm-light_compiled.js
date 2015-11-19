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
{var o = (function (){var obj11164 = {};return obj11164;
})();var seq__11165_11178 = cljs.core.seq.call(null,obj);var chunk__11166_11179 = null;var count__11167_11180 = 0;var i__11168_11181 = 0;while(true){
if((i__11168_11181 < count__11167_11180))
{var vec__11169_11182 = cljs.core._nth.call(null,chunk__11166_11179,i__11168_11181);var k_11183 = cljs.core.nth.call(null,vec__11169_11182,0,null);var v_11184 = cljs.core.nth.call(null,vec__11169_11182,1,null);(o[cljs.core.name.call(null,k_11183)] = js_props.call(null,v_11184));
{
var G__11185 = seq__11165_11178;
var G__11186 = chunk__11166_11179;
var G__11187 = count__11167_11180;
var G__11188 = (i__11168_11181 + 1);
seq__11165_11178 = G__11185;
chunk__11166_11179 = G__11186;
count__11167_11180 = G__11187;
i__11168_11181 = G__11188;
continue;
}
} else
{var temp__4092__auto___11189 = cljs.core.seq.call(null,seq__11165_11178);if(temp__4092__auto___11189)
{var seq__11165_11190__$1 = temp__4092__auto___11189;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11165_11190__$1))
{var c__5638__auto___11191 = cljs.core.chunk_first.call(null,seq__11165_11190__$1);{
var G__11192 = cljs.core.chunk_rest.call(null,seq__11165_11190__$1);
var G__11193 = c__5638__auto___11191;
var G__11194 = cljs.core.count.call(null,c__5638__auto___11191);
var G__11195 = 0;
seq__11165_11178 = G__11192;
chunk__11166_11179 = G__11193;
count__11167_11180 = G__11194;
i__11168_11181 = G__11195;
continue;
}
} else
{var vec__11170_11196 = cljs.core.first.call(null,seq__11165_11190__$1);var k_11197 = cljs.core.nth.call(null,vec__11170_11196,0,null);var v_11198 = cljs.core.nth.call(null,vec__11170_11196,1,null);(o[cljs.core.name.call(null,k_11197)] = js_props.call(null,v_11198));
{
var G__11199 = cljs.core.next.call(null,seq__11165_11190__$1);
var G__11200 = null;
var G__11201 = 0;
var G__11202 = 0;
seq__11165_11178 = G__11199;
chunk__11166_11179 = G__11200;
count__11167_11180 = G__11201;
i__11168_11181 = G__11202;
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
quiescent.component = (function component(renderer){var react_component = React.createClass({"render": (function (){var this$ = this;var _STAR_component_STAR_11172 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return cljs.core.apply.call(null,renderer,(this$.props["value"]),(this$.props["statics"]));
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11172;
}}), "shouldComponentUpdate": (function (next_props,_){var this$ = this;return cljs.core.not_EQ_.call(null,(this$.props["value"]),(next_props["value"]));
})});return ((function (react_component){
return (function() { 
var G__11203__delegate = function (value,static_args){return react_component.call(null,{"statics": static_args, "value": value});
};
var G__11203 = function (value,var_args){
var static_args = null;if (arguments.length > 1) {
  static_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__11203__delegate.call(this,value,static_args);};
G__11203.cljs$lang$maxFixedArity = 1;
G__11203.cljs$lang$applyTo = (function (arglist__11204){
var value = cljs.core.first(arglist__11204);
var static_args = cljs.core.rest(arglist__11204);
return G__11203__delegate(value,static_args);
});
G__11203.cljs$core$IFn$_invoke$arity$variadic = G__11203__delegate;
return G__11203;
})()
;
;})(react_component))
});
/**
* Wrapper component used to mix-in lifecycle access
*/
quiescent.WrapperComponent = React.createClass({"componentWillUnmount": (function (){var this$ = this;var temp__4092__auto__ = (this$.props["onWillUnmount"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_11177 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null);
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11177;
}} else
{return null;
}
}), "componentWillUpdate": (function (_,___$1){var this$ = this;var temp__4092__auto__ = (this$.props["onWillUpdate"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_11176 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null);
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11176;
}} else
{return null;
}
}), "componentWillMount": (function (){var this$ = this;var temp__4092__auto__ = (this$.props["onWillMount"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_11175 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null);
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11175;
}} else
{return null;
}
}), "componentDidMount": (function (){var this$ = this;var temp__4092__auto__ = (this$.props["onMount"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_11174 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null,this$.getDOMNode());
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11174;
}} else
{return null;
}
}), "componentDidUpdate": (function (prev_props,prev_state){var this$ = this;var temp__4092__auto__ = (this$.props["onUpdate"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_11173 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null,this$.getDOMNode());
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_11173;
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
var wrapper__delegate = function (child,kvs){var props = quiescent.js_props.call(null,cljs.core.apply.call(null,cljs.core.array_map,new cljs.core.Keyword(null,"wrappee","wrappee",2609412088),child,kvs));var temp__4092__auto___11205 = (child.props["key"]);if(cljs.core.truth_(temp__4092__auto___11205))
{var key_11206 = temp__4092__auto___11205;(props["key"] = key_11206);
} else
{}
return quiescent.WrapperComponent.call(null,props);
};
var wrapper = function (child,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrapper__delegate.call(this,child,kvs);};
wrapper.cljs$lang$maxFixedArity = 1;
wrapper.cljs$lang$applyTo = (function (arglist__11207){
var child = cljs.core.first(arglist__11207);
var kvs = cljs.core.rest(arglist__11207);
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
var a__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__7589_8537 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__7590_8538 = null;var count__7591_8539 = 0;var i__7592_8540 = 0;while(true){
if((i__7592_8540 < count__7591_8539))
{var arg__6298__auto___8541 = cljs.core._nth.call(null,chunk__7590_8538,i__7592_8540);a__6297__auto__.push(arg__6298__auto___8541);
{
var G__8542 = seq__7589_8537;
var G__8543 = chunk__7590_8538;
var G__8544 = count__7591_8539;
var G__8545 = (i__7592_8540 + 1);
seq__7589_8537 = G__8542;
chunk__7590_8538 = G__8543;
count__7591_8539 = G__8544;
i__7592_8540 = G__8545;
continue;
}
} else
{var temp__4092__auto___8546 = cljs.core.seq.call(null,seq__7589_8537);if(temp__4092__auto___8546)
{var seq__7589_8547__$1 = temp__4092__auto___8546;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7589_8547__$1))
{var c__5638__auto___8548 = cljs.core.chunk_first.call(null,seq__7589_8547__$1);{
var G__8549 = cljs.core.chunk_rest.call(null,seq__7589_8547__$1);
var G__8550 = c__5638__auto___8548;
var G__8551 = cljs.core.count.call(null,c__5638__auto___8548);
var G__8552 = 0;
seq__7589_8537 = G__8549;
chunk__7590_8538 = G__8550;
count__7591_8539 = G__8551;
i__7592_8540 = G__8552;
continue;
}
} else
{var arg__6298__auto___8553 = cljs.core.first.call(null,seq__7589_8547__$1);a__6297__auto__.push(arg__6298__auto___8553);
{
var G__8554 = cljs.core.next.call(null,seq__7589_8547__$1);
var G__8555 = null;
var G__8556 = 0;
var G__8557 = 0;
seq__7589_8537 = G__8554;
chunk__7590_8538 = G__8555;
count__7591_8539 = G__8556;
i__7592_8540 = G__8557;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.a.apply(null,a__6297__auto__);
};
var a = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return a__delegate.call(this,args__6296__auto__);};
a.cljs$lang$maxFixedArity = 0;
a.cljs$lang$applyTo = (function (arglist__8558){
var args__6296__auto__ = cljs.core.seq(arglist__8558);
return a__delegate(args__6296__auto__);
});
a.cljs$core$IFn$_invoke$arity$variadic = a__delegate;
return a;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.abbr = (function() { 
var abbr__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__7597_8559 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__7598_8560 = null;var count__7599_8561 = 0;var i__7600_8562 = 0;while(true){
if((i__7600_8562 < count__7599_8561))
{var arg__6298__auto___8563 = cljs.core._nth.call(null,chunk__7598_8560,i__7600_8562);a__6297__auto__.push(arg__6298__auto___8563);
{
var G__8564 = seq__7597_8559;
var G__8565 = chunk__7598_8560;
var G__8566 = count__7599_8561;
var G__8567 = (i__7600_8562 + 1);
seq__7597_8559 = G__8564;
chunk__7598_8560 = G__8565;
count__7599_8561 = G__8566;
i__7600_8562 = G__8567;
continue;
}
} else
{var temp__4092__auto___8568 = cljs.core.seq.call(null,seq__7597_8559);if(temp__4092__auto___8568)
{var seq__7597_8569__$1 = temp__4092__auto___8568;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7597_8569__$1))
{var c__5638__auto___8570 = cljs.core.chunk_first.call(null,seq__7597_8569__$1);{
var G__8571 = cljs.core.chunk_rest.call(null,seq__7597_8569__$1);
var G__8572 = c__5638__auto___8570;
var G__8573 = cljs.core.count.call(null,c__5638__auto___8570);
var G__8574 = 0;
seq__7597_8559 = G__8571;
chunk__7598_8560 = G__8572;
count__7599_8561 = G__8573;
i__7600_8562 = G__8574;
continue;
}
} else
{var arg__6298__auto___8575 = cljs.core.first.call(null,seq__7597_8569__$1);a__6297__auto__.push(arg__6298__auto___8575);
{
var G__8576 = cljs.core.next.call(null,seq__7597_8569__$1);
var G__8577 = null;
var G__8578 = 0;
var G__8579 = 0;
seq__7597_8559 = G__8576;
chunk__7598_8560 = G__8577;
count__7599_8561 = G__8578;
i__7600_8562 = G__8579;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.abbr.apply(null,a__6297__auto__);
};
var abbr = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return abbr__delegate.call(this,args__6296__auto__);};
abbr.cljs$lang$maxFixedArity = 0;
abbr.cljs$lang$applyTo = (function (arglist__8580){
var args__6296__auto__ = cljs.core.seq(arglist__8580);
return abbr__delegate(args__6296__auto__);
});
abbr.cljs$core$IFn$_invoke$arity$variadic = abbr__delegate;
return abbr;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.address = (function() { 
var address__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__7605_8581 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__7606_8582 = null;var count__7607_8583 = 0;var i__7608_8584 = 0;while(true){
if((i__7608_8584 < count__7607_8583))
{var arg__6298__auto___8585 = cljs.core._nth.call(null,chunk__7606_8582,i__7608_8584);a__6297__auto__.push(arg__6298__auto___8585);
{
var G__8586 = seq__7605_8581;
var G__8587 = chunk__7606_8582;
var G__8588 = count__7607_8583;
var G__8589 = (i__7608_8584 + 1);
seq__7605_8581 = G__8586;
chunk__7606_8582 = G__8587;
count__7607_8583 = G__8588;
i__7608_8584 = G__8589;
continue;
}
} else
{var temp__4092__auto___8590 = cljs.core.seq.call(null,seq__7605_8581);if(temp__4092__auto___8590)
{var seq__7605_8591__$1 = temp__4092__auto___8590;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7605_8591__$1))
{var c__5638__auto___8592 = cljs.core.chunk_first.call(null,seq__7605_8591__$1);{
var G__8593 = cljs.core.chunk_rest.call(null,seq__7605_8591__$1);
var G__8594 = c__5638__auto___8592;
var G__8595 = cljs.core.count.call(null,c__5638__auto___8592);
var G__8596 = 0;
seq__7605_8581 = G__8593;
chunk__7606_8582 = G__8594;
count__7607_8583 = G__8595;
i__7608_8584 = G__8596;
continue;
}
} else
{var arg__6298__auto___8597 = cljs.core.first.call(null,seq__7605_8591__$1);a__6297__auto__.push(arg__6298__auto___8597);
{
var G__8598 = cljs.core.next.call(null,seq__7605_8591__$1);
var G__8599 = null;
var G__8600 = 0;
var G__8601 = 0;
seq__7605_8581 = G__8598;
chunk__7606_8582 = G__8599;
count__7607_8583 = G__8600;
i__7608_8584 = G__8601;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.address.apply(null,a__6297__auto__);
};
var address = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return address__delegate.call(this,args__6296__auto__);};
address.cljs$lang$maxFixedArity = 0;
address.cljs$lang$applyTo = (function (arglist__8602){
var args__6296__auto__ = cljs.core.seq(arglist__8602);
return address__delegate(args__6296__auto__);
});
address.cljs$core$IFn$_invoke$arity$variadic = address__delegate;
return address;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.area = (function() { 
var area__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__7613_8603 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__7614_8604 = null;var count__7615_8605 = 0;var i__7616_8606 = 0;while(true){
if((i__7616_8606 < count__7615_8605))
{var arg__6298__auto___8607 = cljs.core._nth.call(null,chunk__7614_8604,i__7616_8606);a__6297__auto__.push(arg__6298__auto___8607);
{
var G__8608 = seq__7613_8603;
var G__8609 = chunk__7614_8604;
var G__8610 = count__7615_8605;
var G__8611 = (i__7616_8606 + 1);
seq__7613_8603 = G__8608;
chunk__7614_8604 = G__8609;
count__7615_8605 = G__8610;
i__7616_8606 = G__8611;
continue;
}
} else
{var temp__4092__auto___8612 = cljs.core.seq.call(null,seq__7613_8603);if(temp__4092__auto___8612)
{var seq__7613_8613__$1 = temp__4092__auto___8612;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7613_8613__$1))
{var c__5638__auto___8614 = cljs.core.chunk_first.call(null,seq__7613_8613__$1);{
var G__8615 = cljs.core.chunk_rest.call(null,seq__7613_8613__$1);
var G__8616 = c__5638__auto___8614;
var G__8617 = cljs.core.count.call(null,c__5638__auto___8614);
var G__8618 = 0;
seq__7613_8603 = G__8615;
chunk__7614_8604 = G__8616;
count__7615_8605 = G__8617;
i__7616_8606 = G__8618;
continue;
}
} else
{var arg__6298__auto___8619 = cljs.core.first.call(null,seq__7613_8613__$1);a__6297__auto__.push(arg__6298__auto___8619);
{
var G__8620 = cljs.core.next.call(null,seq__7613_8613__$1);
var G__8621 = null;
var G__8622 = 0;
var G__8623 = 0;
seq__7613_8603 = G__8620;
chunk__7614_8604 = G__8621;
count__7615_8605 = G__8622;
i__7616_8606 = G__8623;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.area.apply(null,a__6297__auto__);
};
var area = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return area__delegate.call(this,args__6296__auto__);};
area.cljs$lang$maxFixedArity = 0;
area.cljs$lang$applyTo = (function (arglist__8624){
var args__6296__auto__ = cljs.core.seq(arglist__8624);
return area__delegate(args__6296__auto__);
});
area.cljs$core$IFn$_invoke$arity$variadic = area__delegate;
return area;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.article = (function() { 
var article__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__7621_8625 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__7622_8626 = null;var count__7623_8627 = 0;var i__7624_8628 = 0;while(true){
if((i__7624_8628 < count__7623_8627))
{var arg__6298__auto___8629 = cljs.core._nth.call(null,chunk__7622_8626,i__7624_8628);a__6297__auto__.push(arg__6298__auto___8629);
{
var G__8630 = seq__7621_8625;
var G__8631 = chunk__7622_8626;
var G__8632 = count__7623_8627;
var G__8633 = (i__7624_8628 + 1);
seq__7621_8625 = G__8630;
chunk__7622_8626 = G__8631;
count__7623_8627 = G__8632;
i__7624_8628 = G__8633;
continue;
}
} else
{var temp__4092__auto___8634 = cljs.core.seq.call(null,seq__7621_8625);if(temp__4092__auto___8634)
{var seq__7621_8635__$1 = temp__4092__auto___8634;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7621_8635__$1))
{var c__5638__auto___8636 = cljs.core.chunk_first.call(null,seq__7621_8635__$1);{
var G__8637 = cljs.core.chunk_rest.call(null,seq__7621_8635__$1);
var G__8638 = c__5638__auto___8636;
var G__8639 = cljs.core.count.call(null,c__5638__auto___8636);
var G__8640 = 0;
seq__7621_8625 = G__8637;
chunk__7622_8626 = G__8638;
count__7623_8627 = G__8639;
i__7624_8628 = G__8640;
continue;
}
} else
{var arg__6298__auto___8641 = cljs.core.first.call(null,seq__7621_8635__$1);a__6297__auto__.push(arg__6298__auto___8641);
{
var G__8642 = cljs.core.next.call(null,seq__7621_8635__$1);
var G__8643 = null;
var G__8644 = 0;
var G__8645 = 0;
seq__7621_8625 = G__8642;
chunk__7622_8626 = G__8643;
count__7623_8627 = G__8644;
i__7624_8628 = G__8645;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.article.apply(null,a__6297__auto__);
};
var article = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return article__delegate.call(this,args__6296__auto__);};
article.cljs$lang$maxFixedArity = 0;
article.cljs$lang$applyTo = (function (arglist__8646){
var args__6296__auto__ = cljs.core.seq(arglist__8646);
return article__delegate(args__6296__auto__);
});
article.cljs$core$IFn$_invoke$arity$variadic = article__delegate;
return article;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.aside = (function() { 
var aside__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__7629_8647 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__7630_8648 = null;var count__7631_8649 = 0;var i__7632_8650 = 0;while(true){
if((i__7632_8650 < count__7631_8649))
{var arg__6298__auto___8651 = cljs.core._nth.call(null,chunk__7630_8648,i__7632_8650);a__6297__auto__.push(arg__6298__auto___8651);
{
var G__8652 = seq__7629_8647;
var G__8653 = chunk__7630_8648;
var G__8654 = count__7631_8649;
var G__8655 = (i__7632_8650 + 1);
seq__7629_8647 = G__8652;
chunk__7630_8648 = G__8653;
count__7631_8649 = G__8654;
i__7632_8650 = G__8655;
continue;
}
} else
{var temp__4092__auto___8656 = cljs.core.seq.call(null,seq__7629_8647);if(temp__4092__auto___8656)
{var seq__7629_8657__$1 = temp__4092__auto___8656;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7629_8657__$1))
{var c__5638__auto___8658 = cljs.core.chunk_first.call(null,seq__7629_8657__$1);{
var G__8659 = cljs.core.chunk_rest.call(null,seq__7629_8657__$1);
var G__8660 = c__5638__auto___8658;
var G__8661 = cljs.core.count.call(null,c__5638__auto___8658);
var G__8662 = 0;
seq__7629_8647 = G__8659;
chunk__7630_8648 = G__8660;
count__7631_8649 = G__8661;
i__7632_8650 = G__8662;
continue;
}
} else
{var arg__6298__auto___8663 = cljs.core.first.call(null,seq__7629_8657__$1);a__6297__auto__.push(arg__6298__auto___8663);
{
var G__8664 = cljs.core.next.call(null,seq__7629_8657__$1);
var G__8665 = null;
var G__8666 = 0;
var G__8667 = 0;
seq__7629_8647 = G__8664;
chunk__7630_8648 = G__8665;
count__7631_8649 = G__8666;
i__7632_8650 = G__8667;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.aside.apply(null,a__6297__auto__);
};
var aside = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return aside__delegate.call(this,args__6296__auto__);};
aside.cljs$lang$maxFixedArity = 0;
aside.cljs$lang$applyTo = (function (arglist__8668){
var args__6296__auto__ = cljs.core.seq(arglist__8668);
return aside__delegate(args__6296__auto__);
});
aside.cljs$core$IFn$_invoke$arity$variadic = aside__delegate;
return aside;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.audio = (function() { 
var audio__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__7637_8669 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__7638_8670 = null;var count__7639_8671 = 0;var i__7640_8672 = 0;while(true){
if((i__7640_8672 < count__7639_8671))
{var arg__6298__auto___8673 = cljs.core._nth.call(null,chunk__7638_8670,i__7640_8672);a__6297__auto__.push(arg__6298__auto___8673);
{
var G__8674 = seq__7637_8669;
var G__8675 = chunk__7638_8670;
var G__8676 = count__7639_8671;
var G__8677 = (i__7640_8672 + 1);
seq__7637_8669 = G__8674;
chunk__7638_8670 = G__8675;
count__7639_8671 = G__8676;
i__7640_8672 = G__8677;
continue;
}
} else
{var temp__4092__auto___8678 = cljs.core.seq.call(null,seq__7637_8669);if(temp__4092__auto___8678)
{var seq__7637_8679__$1 = temp__4092__auto___8678;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7637_8679__$1))
{var c__5638__auto___8680 = cljs.core.chunk_first.call(null,seq__7637_8679__$1);{
var G__8681 = cljs.core.chunk_rest.call(null,seq__7637_8679__$1);
var G__8682 = c__5638__auto___8680;
var G__8683 = cljs.core.count.call(null,c__5638__auto___8680);
var G__8684 = 0;
seq__7637_8669 = G__8681;
chunk__7638_8670 = G__8682;
count__7639_8671 = G__8683;
i__7640_8672 = G__8684;
continue;
}
} else
{var arg__6298__auto___8685 = cljs.core.first.call(null,seq__7637_8679__$1);a__6297__auto__.push(arg__6298__auto___8685);
{
var G__8686 = cljs.core.next.call(null,seq__7637_8679__$1);
var G__8687 = null;
var G__8688 = 0;
var G__8689 = 0;
seq__7637_8669 = G__8686;
chunk__7638_8670 = G__8687;
count__7639_8671 = G__8688;
i__7640_8672 = G__8689;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.audio.apply(null,a__6297__auto__);
};
var audio = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return audio__delegate.call(this,args__6296__auto__);};
audio.cljs$lang$maxFixedArity = 0;
audio.cljs$lang$applyTo = (function (arglist__8690){
var args__6296__auto__ = cljs.core.seq(arglist__8690);
return audio__delegate(args__6296__auto__);
});
audio.cljs$core$IFn$_invoke$arity$variadic = audio__delegate;
return audio;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.b = (function() { 
var b__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__7645_8691 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__7646_8692 = null;var count__7647_8693 = 0;var i__7648_8694 = 0;while(true){
if((i__7648_8694 < count__7647_8693))
{var arg__6298__auto___8695 = cljs.core._nth.call(null,chunk__7646_8692,i__7648_8694);a__6297__auto__.push(arg__6298__auto___8695);
{
var G__8696 = seq__7645_8691;
var G__8697 = chunk__7646_8692;
var G__8698 = count__7647_8693;
var G__8699 = (i__7648_8694 + 1);
seq__7645_8691 = G__8696;
chunk__7646_8692 = G__8697;
count__7647_8693 = G__8698;
i__7648_8694 = G__8699;
continue;
}
} else
{var temp__4092__auto___8700 = cljs.core.seq.call(null,seq__7645_8691);if(temp__4092__auto___8700)
{var seq__7645_8701__$1 = temp__4092__auto___8700;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7645_8701__$1))
{var c__5638__auto___8702 = cljs.core.chunk_first.call(null,seq__7645_8701__$1);{
var G__8703 = cljs.core.chunk_rest.call(null,seq__7645_8701__$1);
var G__8704 = c__5638__auto___8702;
var G__8705 = cljs.core.count.call(null,c__5638__auto___8702);
var G__8706 = 0;
seq__7645_8691 = G__8703;
chunk__7646_8692 = G__8704;
count__7647_8693 = G__8705;
i__7648_8694 = G__8706;
continue;
}
} else
{var arg__6298__auto___8707 = cljs.core.first.call(null,seq__7645_8701__$1);a__6297__auto__.push(arg__6298__auto___8707);
{
var G__8708 = cljs.core.next.call(null,seq__7645_8701__$1);
var G__8709 = null;
var G__8710 = 0;
var G__8711 = 0;
seq__7645_8691 = G__8708;
chunk__7646_8692 = G__8709;
count__7647_8693 = G__8710;
i__7648_8694 = G__8711;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.b.apply(null,a__6297__auto__);
};
var b = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return b__delegate.call(this,args__6296__auto__);};
b.cljs$lang$maxFixedArity = 0;
b.cljs$lang$applyTo = (function (arglist__8712){
var args__6296__auto__ = cljs.core.seq(arglist__8712);
return b__delegate(args__6296__auto__);
});
b.cljs$core$IFn$_invoke$arity$variadic = b__delegate;
return b;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.base = (function() { 
var base__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__7653_8713 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__7654_8714 = null;var count__7655_8715 = 0;var i__7656_8716 = 0;while(true){
if((i__7656_8716 < count__7655_8715))
{var arg__6298__auto___8717 = cljs.core._nth.call(null,chunk__7654_8714,i__7656_8716);a__6297__auto__.push(arg__6298__auto___8717);
{
var G__8718 = seq__7653_8713;
var G__8719 = chunk__7654_8714;
var G__8720 = count__7655_8715;
var G__8721 = (i__7656_8716 + 1);
seq__7653_8713 = G__8718;
chunk__7654_8714 = G__8719;
count__7655_8715 = G__8720;
i__7656_8716 = G__8721;
continue;
}
} else
{var temp__4092__auto___8722 = cljs.core.seq.call(null,seq__7653_8713);if(temp__4092__auto___8722)
{var seq__7653_8723__$1 = temp__4092__auto___8722;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7653_8723__$1))
{var c__5638__auto___8724 = cljs.core.chunk_first.call(null,seq__7653_8723__$1);{
var G__8725 = cljs.core.chunk_rest.call(null,seq__7653_8723__$1);
var G__8726 = c__5638__auto___8724;
var G__8727 = cljs.core.count.call(null,c__5638__auto___8724);
var G__8728 = 0;
seq__7653_8713 = G__8725;
chunk__7654_8714 = G__8726;
count__7655_8715 = G__8727;
i__7656_8716 = G__8728;
continue;
}
} else
{var arg__6298__auto___8729 = cljs.core.first.call(null,seq__7653_8723__$1);a__6297__auto__.push(arg__6298__auto___8729);
{
var G__8730 = cljs.core.next.call(null,seq__7653_8723__$1);
var G__8731 = null;
var G__8732 = 0;
var G__8733 = 0;
seq__7653_8713 = G__8730;
chunk__7654_8714 = G__8731;
count__7655_8715 = G__8732;
i__7656_8716 = G__8733;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.base.apply(null,a__6297__auto__);
};
var base = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return base__delegate.call(this,args__6296__auto__);};
base.cljs$lang$maxFixedArity = 0;
base.cljs$lang$applyTo = (function (arglist__8734){
var args__6296__auto__ = cljs.core.seq(arglist__8734);
return base__delegate(args__6296__auto__);
});
base.cljs$core$IFn$_invoke$arity$variadic = base__delegate;
return base;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.bdi = (function() { 
var bdi__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__7661_8735 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__7662_8736 = null;var count__7663_8737 = 0;var i__7664_8738 = 0;while(true){
if((i__7664_8738 < count__7663_8737))
{var arg__6298__auto___8739 = cljs.core._nth.call(null,chunk__7662_8736,i__7664_8738);a__6297__auto__.push(arg__6298__auto___8739);
{
var G__8740 = seq__7661_8735;
var G__8741 = chunk__7662_8736;
var G__8742 = count__7663_8737;
var G__8743 = (i__7664_8738 + 1);
seq__7661_8735 = G__8740;
chunk__7662_8736 = G__8741;
count__7663_8737 = G__8742;
i__7664_8738 = G__8743;
continue;
}
} else
{var temp__4092__auto___8744 = cljs.core.seq.call(null,seq__7661_8735);if(temp__4092__auto___8744)
{var seq__7661_8745__$1 = temp__4092__auto___8744;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7661_8745__$1))
{var c__5638__auto___8746 = cljs.core.chunk_first.call(null,seq__7661_8745__$1);{
var G__8747 = cljs.core.chunk_rest.call(null,seq__7661_8745__$1);
var G__8748 = c__5638__auto___8746;
var G__8749 = cljs.core.count.call(null,c__5638__auto___8746);
var G__8750 = 0;
seq__7661_8735 = G__8747;
chunk__7662_8736 = G__8748;
count__7663_8737 = G__8749;
i__7664_8738 = G__8750;
continue;
}
} else
{var arg__6298__auto___8751 = cljs.core.first.call(null,seq__7661_8745__$1);a__6297__auto__.push(arg__6298__auto___8751);
{
var G__8752 = cljs.core.next.call(null,seq__7661_8745__$1);
var G__8753 = null;
var G__8754 = 0;
var G__8755 = 0;
seq__7661_8735 = G__8752;
chunk__7662_8736 = G__8753;
count__7663_8737 = G__8754;
i__7664_8738 = G__8755;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.bdi.apply(null,a__6297__auto__);
};
var bdi = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return bdi__delegate.call(this,args__6296__auto__);};
bdi.cljs$lang$maxFixedArity = 0;
bdi.cljs$lang$applyTo = (function (arglist__8756){
var args__6296__auto__ = cljs.core.seq(arglist__8756);
return bdi__delegate(args__6296__auto__);
});
bdi.cljs$core$IFn$_invoke$arity$variadic = bdi__delegate;
return bdi;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.bdo = (function() { 
var bdo__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__7669_8757 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__7670_8758 = null;var count__7671_8759 = 0;var i__7672_8760 = 0;while(true){
if((i__7672_8760 < count__7671_8759))
{var arg__6298__auto___8761 = cljs.core._nth.call(null,chunk__7670_8758,i__7672_8760);a__6297__auto__.push(arg__6298__auto___8761);
{
var G__8762 = seq__7669_8757;
var G__8763 = chunk__7670_8758;
var G__8764 = count__7671_8759;
var G__8765 = (i__7672_8760 + 1);
seq__7669_8757 = G__8762;
chunk__7670_8758 = G__8763;
count__7671_8759 = G__8764;
i__7672_8760 = G__8765;
continue;
}
} else
{var temp__4092__auto___8766 = cljs.core.seq.call(null,seq__7669_8757);if(temp__4092__auto___8766)
{var seq__7669_8767__$1 = temp__4092__auto___8766;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7669_8767__$1))
{var c__5638__auto___8768 = cljs.core.chunk_first.call(null,seq__7669_8767__$1);{
var G__8769 = cljs.core.chunk_rest.call(null,seq__7669_8767__$1);
var G__8770 = c__5638__auto___8768;
var G__8771 = cljs.core.count.call(null,c__5638__auto___8768);
var G__8772 = 0;
seq__7669_8757 = G__8769;
chunk__7670_8758 = G__8770;
count__7671_8759 = G__8771;
i__7672_8760 = G__8772;
continue;
}
} else
{var arg__6298__auto___8773 = cljs.core.first.call(null,seq__7669_8767__$1);a__6297__auto__.push(arg__6298__auto___8773);
{
var G__8774 = cljs.core.next.call(null,seq__7669_8767__$1);
var G__8775 = null;
var G__8776 = 0;
var G__8777 = 0;
seq__7669_8757 = G__8774;
chunk__7670_8758 = G__8775;
count__7671_8759 = G__8776;
i__7672_8760 = G__8777;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.bdo.apply(null,a__6297__auto__);
};
var bdo = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return bdo__delegate.call(this,args__6296__auto__);};
bdo.cljs$lang$maxFixedArity = 0;
bdo.cljs$lang$applyTo = (function (arglist__8778){
var args__6296__auto__ = cljs.core.seq(arglist__8778);
return bdo__delegate(args__6296__auto__);
});
bdo.cljs$core$IFn$_invoke$arity$variadic = bdo__delegate;
return bdo;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.big = (function() { 
var big__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__7677_8779 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__7678_8780 = null;var count__7679_8781 = 0;var i__7680_8782 = 0;while(true){
if((i__7680_8782 < count__7679_8781))
{var arg__6298__auto___8783 = cljs.core._nth.call(null,chunk__7678_8780,i__7680_8782);a__6297__auto__.push(arg__6298__auto___8783);
{
var G__8784 = seq__7677_8779;
var G__8785 = chunk__7678_8780;
var G__8786 = count__7679_8781;
var G__8787 = (i__7680_8782 + 1);
seq__7677_8779 = G__8784;
chunk__7678_8780 = G__8785;
count__7679_8781 = G__8786;
i__7680_8782 = G__8787;
continue;
}
} else
{var temp__4092__auto___8788 = cljs.core.seq.call(null,seq__7677_8779);if(temp__4092__auto___8788)
{var seq__7677_8789__$1 = temp__4092__auto___8788;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7677_8789__$1))
{var c__5638__auto___8790 = cljs.core.chunk_first.call(null,seq__7677_8789__$1);{
var G__8791 = cljs.core.chunk_rest.call(null,seq__7677_8789__$1);
var G__8792 = c__5638__auto___8790;
var G__8793 = cljs.core.count.call(null,c__5638__auto___8790);
var G__8794 = 0;
seq__7677_8779 = G__8791;
chunk__7678_8780 = G__8792;
count__7679_8781 = G__8793;
i__7680_8782 = G__8794;
continue;
}
} else
{var arg__6298__auto___8795 = cljs.core.first.call(null,seq__7677_8789__$1);a__6297__auto__.push(arg__6298__auto___8795);
{
var G__8796 = cljs.core.next.call(null,seq__7677_8789__$1);
var G__8797 = null;
var G__8798 = 0;
var G__8799 = 0;
seq__7677_8779 = G__8796;
chunk__7678_8780 = G__8797;
count__7679_8781 = G__8798;
i__7680_8782 = G__8799;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.big.apply(null,a__6297__auto__);
};
var big = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return big__delegate.call(this,args__6296__auto__);};
big.cljs$lang$maxFixedArity = 0;
big.cljs$lang$applyTo = (function (arglist__8800){
var args__6296__auto__ = cljs.core.seq(arglist__8800);
return big__delegate(args__6296__auto__);
});
big.cljs$core$IFn$_invoke$arity$variadic = big__delegate;
return big;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.blockquote = (function() { 
var blockquote__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__7685_8801 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__7686_8802 = null;var count__7687_8803 = 0;var i__7688_8804 = 0;while(true){
if((i__7688_8804 < count__7687_8803))
{var arg__6298__auto___8805 = cljs.core._nth.call(null,chunk__7686_8802,i__7688_8804);a__6297__auto__.push(arg__6298__auto___8805);
{
var G__8806 = seq__7685_8801;
var G__8807 = chunk__7686_8802;
var G__8808 = count__7687_8803;
var G__8809 = (i__7688_8804 + 1);
seq__7685_8801 = G__8806;
chunk__7686_8802 = G__8807;
count__7687_8803 = G__8808;
i__7688_8804 = G__8809;
continue;
}
} else
{var temp__4092__auto___8810 = cljs.core.seq.call(null,seq__7685_8801);if(temp__4092__auto___8810)
{var seq__7685_8811__$1 = temp__4092__auto___8810;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7685_8811__$1))
{var c__5638__auto___8812 = cljs.core.chunk_first.call(null,seq__7685_8811__$1);{
var G__8813 = cljs.core.chunk_rest.call(null,seq__7685_8811__$1);
var G__8814 = c__5638__auto___8812;
var G__8815 = cljs.core.count.call(null,c__5638__auto___8812);
var G__8816 = 0;
seq__7685_8801 = G__8813;
chunk__7686_8802 = G__8814;
count__7687_8803 = G__8815;
i__7688_8804 = G__8816;
continue;
}
} else
{var arg__6298__auto___8817 = cljs.core.first.call(null,seq__7685_8811__$1);a__6297__auto__.push(arg__6298__auto___8817);
{
var G__8818 = cljs.core.next.call(null,seq__7685_8811__$1);
var G__8819 = null;
var G__8820 = 0;
var G__8821 = 0;
seq__7685_8801 = G__8818;
chunk__7686_8802 = G__8819;
count__7687_8803 = G__8820;
i__7688_8804 = G__8821;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.blockquote.apply(null,a__6297__auto__);
};
var blockquote = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return blockquote__delegate.call(this,args__6296__auto__);};
blockquote.cljs$lang$maxFixedArity = 0;
blockquote.cljs$lang$applyTo = (function (arglist__8822){
var args__6296__auto__ = cljs.core.seq(arglist__8822);
return blockquote__delegate(args__6296__auto__);
});
blockquote.cljs$core$IFn$_invoke$arity$variadic = blockquote__delegate;
return blockquote;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.body = (function() { 
var body__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__7693_8823 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__7694_8824 = null;var count__7695_8825 = 0;var i__7696_8826 = 0;while(true){
if((i__7696_8826 < count__7695_8825))
{var arg__6298__auto___8827 = cljs.core._nth.call(null,chunk__7694_8824,i__7696_8826);a__6297__auto__.push(arg__6298__auto___8827);
{
var G__8828 = seq__7693_8823;
var G__8829 = chunk__7694_8824;
var G__8830 = count__7695_8825;
var G__8831 = (i__7696_8826 + 1);
seq__7693_8823 = G__8828;
chunk__7694_8824 = G__8829;
count__7695_8825 = G__8830;
i__7696_8826 = G__8831;
continue;
}
} else
{var temp__4092__auto___8832 = cljs.core.seq.call(null,seq__7693_8823);if(temp__4092__auto___8832)
{var seq__7693_8833__$1 = temp__4092__auto___8832;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7693_8833__$1))
{var c__5638__auto___8834 = cljs.core.chunk_first.call(null,seq__7693_8833__$1);{
var G__8835 = cljs.core.chunk_rest.call(null,seq__7693_8833__$1);
var G__8836 = c__5638__auto___8834;
var G__8837 = cljs.core.count.call(null,c__5638__auto___8834);
var G__8838 = 0;
seq__7693_8823 = G__8835;
chunk__7694_8824 = G__8836;
count__7695_8825 = G__8837;
i__7696_8826 = G__8838;
continue;
}
} else
{var arg__6298__auto___8839 = cljs.core.first.call(null,seq__7693_8833__$1);a__6297__auto__.push(arg__6298__auto___8839);
{
var G__8840 = cljs.core.next.call(null,seq__7693_8833__$1);
var G__8841 = null;
var G__8842 = 0;
var G__8843 = 0;
seq__7693_8823 = G__8840;
chunk__7694_8824 = G__8841;
count__7695_8825 = G__8842;
i__7696_8826 = G__8843;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.body.apply(null,a__6297__auto__);
};
var body = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return body__delegate.call(this,args__6296__auto__);};
body.cljs$lang$maxFixedArity = 0;
body.cljs$lang$applyTo = (function (arglist__8844){
var args__6296__auto__ = cljs.core.seq(arglist__8844);
return body__delegate(args__6296__auto__);
});
body.cljs$core$IFn$_invoke$arity$variadic = body__delegate;
return body;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.br = (function() { 
var br__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__7701_8845 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__7702_8846 = null;var count__7703_8847 = 0;var i__7704_8848 = 0;while(true){
if((i__7704_8848 < count__7703_8847))
{var arg__6298__auto___8849 = cljs.core._nth.call(null,chunk__7702_8846,i__7704_8848);a__6297__auto__.push(arg__6298__auto___8849);
{
var G__8850 = seq__7701_8845;
var G__8851 = chunk__7702_8846;
var G__8852 = count__7703_8847;
var G__8853 = (i__7704_8848 + 1);
seq__7701_8845 = G__8850;
chunk__7702_8846 = G__8851;
count__7703_8847 = G__8852;
i__7704_8848 = G__8853;
continue;
}
} else
{var temp__4092__auto___8854 = cljs.core.seq.call(null,seq__7701_8845);if(temp__4092__auto___8854)
{var seq__7701_8855__$1 = temp__4092__auto___8854;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7701_8855__$1))
{var c__5638__auto___8856 = cljs.core.chunk_first.call(null,seq__7701_8855__$1);{
var G__8857 = cljs.core.chunk_rest.call(null,seq__7701_8855__$1);
var G__8858 = c__5638__auto___8856;
var G__8859 = cljs.core.count.call(null,c__5638__auto___8856);
var G__8860 = 0;
seq__7701_8845 = G__8857;
chunk__7702_8846 = G__8858;
count__7703_8847 = G__8859;
i__7704_8848 = G__8860;
continue;
}
} else
{var arg__6298__auto___8861 = cljs.core.first.call(null,seq__7701_8855__$1);a__6297__auto__.push(arg__6298__auto___8861);
{
var G__8862 = cljs.core.next.call(null,seq__7701_8855__$1);
var G__8863 = null;
var G__8864 = 0;
var G__8865 = 0;
seq__7701_8845 = G__8862;
chunk__7702_8846 = G__8863;
count__7703_8847 = G__8864;
i__7704_8848 = G__8865;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.br.apply(null,a__6297__auto__);
};
var br = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return br__delegate.call(this,args__6296__auto__);};
br.cljs$lang$maxFixedArity = 0;
br.cljs$lang$applyTo = (function (arglist__8866){
var args__6296__auto__ = cljs.core.seq(arglist__8866);
return br__delegate(args__6296__auto__);
});
br.cljs$core$IFn$_invoke$arity$variadic = br__delegate;
return br;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.button = (function() { 
var button__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__7709_8867 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__7710_8868 = null;var count__7711_8869 = 0;var i__7712_8870 = 0;while(true){
if((i__7712_8870 < count__7711_8869))
{var arg__6298__auto___8871 = cljs.core._nth.call(null,chunk__7710_8868,i__7712_8870);a__6297__auto__.push(arg__6298__auto___8871);
{
var G__8872 = seq__7709_8867;
var G__8873 = chunk__7710_8868;
var G__8874 = count__7711_8869;
var G__8875 = (i__7712_8870 + 1);
seq__7709_8867 = G__8872;
chunk__7710_8868 = G__8873;
count__7711_8869 = G__8874;
i__7712_8870 = G__8875;
continue;
}
} else
{var temp__4092__auto___8876 = cljs.core.seq.call(null,seq__7709_8867);if(temp__4092__auto___8876)
{var seq__7709_8877__$1 = temp__4092__auto___8876;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7709_8877__$1))
{var c__5638__auto___8878 = cljs.core.chunk_first.call(null,seq__7709_8877__$1);{
var G__8879 = cljs.core.chunk_rest.call(null,seq__7709_8877__$1);
var G__8880 = c__5638__auto___8878;
var G__8881 = cljs.core.count.call(null,c__5638__auto___8878);
var G__8882 = 0;
seq__7709_8867 = G__8879;
chunk__7710_8868 = G__8880;
count__7711_8869 = G__8881;
i__7712_8870 = G__8882;
continue;
}
} else
{var arg__6298__auto___8883 = cljs.core.first.call(null,seq__7709_8877__$1);a__6297__auto__.push(arg__6298__auto___8883);
{
var G__8884 = cljs.core.next.call(null,seq__7709_8877__$1);
var G__8885 = null;
var G__8886 = 0;
var G__8887 = 0;
seq__7709_8867 = G__8884;
chunk__7710_8868 = G__8885;
count__7711_8869 = G__8886;
i__7712_8870 = G__8887;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.button.apply(null,a__6297__auto__);
};
var button = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return button__delegate.call(this,args__6296__auto__);};
button.cljs$lang$maxFixedArity = 0;
button.cljs$lang$applyTo = (function (arglist__8888){
var args__6296__auto__ = cljs.core.seq(arglist__8888);
return button__delegate(args__6296__auto__);
});
button.cljs$core$IFn$_invoke$arity$variadic = button__delegate;
return button;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.canvas = (function() { 
var canvas__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__7717_8889 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__7718_8890 = null;var count__7719_8891 = 0;var i__7720_8892 = 0;while(true){
if((i__7720_8892 < count__7719_8891))
{var arg__6298__auto___8893 = cljs.core._nth.call(null,chunk__7718_8890,i__7720_8892);a__6297__auto__.push(arg__6298__auto___8893);
{
var G__8894 = seq__7717_8889;
var G__8895 = chunk__7718_8890;
var G__8896 = count__7719_8891;
var G__8897 = (i__7720_8892 + 1);
seq__7717_8889 = G__8894;
chunk__7718_8890 = G__8895;
count__7719_8891 = G__8896;
i__7720_8892 = G__8897;
continue;
}
} else
{var temp__4092__auto___8898 = cljs.core.seq.call(null,seq__7717_8889);if(temp__4092__auto___8898)
{var seq__7717_8899__$1 = temp__4092__auto___8898;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7717_8899__$1))
{var c__5638__auto___8900 = cljs.core.chunk_first.call(null,seq__7717_8899__$1);{
var G__8901 = cljs.core.chunk_rest.call(null,seq__7717_8899__$1);
var G__8902 = c__5638__auto___8900;
var G__8903 = cljs.core.count.call(null,c__5638__auto___8900);
var G__8904 = 0;
seq__7717_8889 = G__8901;
chunk__7718_8890 = G__8902;
count__7719_8891 = G__8903;
i__7720_8892 = G__8904;
continue;
}
} else
{var arg__6298__auto___8905 = cljs.core.first.call(null,seq__7717_8899__$1);a__6297__auto__.push(arg__6298__auto___8905);
{
var G__8906 = cljs.core.next.call(null,seq__7717_8899__$1);
var G__8907 = null;
var G__8908 = 0;
var G__8909 = 0;
seq__7717_8889 = G__8906;
chunk__7718_8890 = G__8907;
count__7719_8891 = G__8908;
i__7720_8892 = G__8909;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.canvas.apply(null,a__6297__auto__);
};
var canvas = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return canvas__delegate.call(this,args__6296__auto__);};
canvas.cljs$lang$maxFixedArity = 0;
canvas.cljs$lang$applyTo = (function (arglist__8910){
var args__6296__auto__ = cljs.core.seq(arglist__8910);
return canvas__delegate(args__6296__auto__);
});
canvas.cljs$core$IFn$_invoke$arity$variadic = canvas__delegate;
return canvas;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.caption = (function() { 
var caption__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__7725_8911 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__7726_8912 = null;var count__7727_8913 = 0;var i__7728_8914 = 0;while(true){
if((i__7728_8914 < count__7727_8913))
{var arg__6298__auto___8915 = cljs.core._nth.call(null,chunk__7726_8912,i__7728_8914);a__6297__auto__.push(arg__6298__auto___8915);
{
var G__8916 = seq__7725_8911;
var G__8917 = chunk__7726_8912;
var G__8918 = count__7727_8913;
var G__8919 = (i__7728_8914 + 1);
seq__7725_8911 = G__8916;
chunk__7726_8912 = G__8917;
count__7727_8913 = G__8918;
i__7728_8914 = G__8919;
continue;
}
} else
{var temp__4092__auto___8920 = cljs.core.seq.call(null,seq__7725_8911);if(temp__4092__auto___8920)
{var seq__7725_8921__$1 = temp__4092__auto___8920;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7725_8921__$1))
{var c__5638__auto___8922 = cljs.core.chunk_first.call(null,seq__7725_8921__$1);{
var G__8923 = cljs.core.chunk_rest.call(null,seq__7725_8921__$1);
var G__8924 = c__5638__auto___8922;
var G__8925 = cljs.core.count.call(null,c__5638__auto___8922);
var G__8926 = 0;
seq__7725_8911 = G__8923;
chunk__7726_8912 = G__8924;
count__7727_8913 = G__8925;
i__7728_8914 = G__8926;
continue;
}
} else
{var arg__6298__auto___8927 = cljs.core.first.call(null,seq__7725_8921__$1);a__6297__auto__.push(arg__6298__auto___8927);
{
var G__8928 = cljs.core.next.call(null,seq__7725_8921__$1);
var G__8929 = null;
var G__8930 = 0;
var G__8931 = 0;
seq__7725_8911 = G__8928;
chunk__7726_8912 = G__8929;
count__7727_8913 = G__8930;
i__7728_8914 = G__8931;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.caption.apply(null,a__6297__auto__);
};
var caption = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return caption__delegate.call(this,args__6296__auto__);};
caption.cljs$lang$maxFixedArity = 0;
caption.cljs$lang$applyTo = (function (arglist__8932){
var args__6296__auto__ = cljs.core.seq(arglist__8932);
return caption__delegate(args__6296__auto__);
});
caption.cljs$core$IFn$_invoke$arity$variadic = caption__delegate;
return caption;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.cite = (function() { 
var cite__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__7733_8933 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__7734_8934 = null;var count__7735_8935 = 0;var i__7736_8936 = 0;while(true){
if((i__7736_8936 < count__7735_8935))
{var arg__6298__auto___8937 = cljs.core._nth.call(null,chunk__7734_8934,i__7736_8936);a__6297__auto__.push(arg__6298__auto___8937);
{
var G__8938 = seq__7733_8933;
var G__8939 = chunk__7734_8934;
var G__8940 = count__7735_8935;
var G__8941 = (i__7736_8936 + 1);
seq__7733_8933 = G__8938;
chunk__7734_8934 = G__8939;
count__7735_8935 = G__8940;
i__7736_8936 = G__8941;
continue;
}
} else
{var temp__4092__auto___8942 = cljs.core.seq.call(null,seq__7733_8933);if(temp__4092__auto___8942)
{var seq__7733_8943__$1 = temp__4092__auto___8942;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7733_8943__$1))
{var c__5638__auto___8944 = cljs.core.chunk_first.call(null,seq__7733_8943__$1);{
var G__8945 = cljs.core.chunk_rest.call(null,seq__7733_8943__$1);
var G__8946 = c__5638__auto___8944;
var G__8947 = cljs.core.count.call(null,c__5638__auto___8944);
var G__8948 = 0;
seq__7733_8933 = G__8945;
chunk__7734_8934 = G__8946;
count__7735_8935 = G__8947;
i__7736_8936 = G__8948;
continue;
}
} else
{var arg__6298__auto___8949 = cljs.core.first.call(null,seq__7733_8943__$1);a__6297__auto__.push(arg__6298__auto___8949);
{
var G__8950 = cljs.core.next.call(null,seq__7733_8943__$1);
var G__8951 = null;
var G__8952 = 0;
var G__8953 = 0;
seq__7733_8933 = G__8950;
chunk__7734_8934 = G__8951;
count__7735_8935 = G__8952;
i__7736_8936 = G__8953;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.cite.apply(null,a__6297__auto__);
};
var cite = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return cite__delegate.call(this,args__6296__auto__);};
cite.cljs$lang$maxFixedArity = 0;
cite.cljs$lang$applyTo = (function (arglist__8954){
var args__6296__auto__ = cljs.core.seq(arglist__8954);
return cite__delegate(args__6296__auto__);
});
cite.cljs$core$IFn$_invoke$arity$variadic = cite__delegate;
return cite;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.code = (function() { 
var code__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__7741_8955 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__7742_8956 = null;var count__7743_8957 = 0;var i__7744_8958 = 0;while(true){
if((i__7744_8958 < count__7743_8957))
{var arg__6298__auto___8959 = cljs.core._nth.call(null,chunk__7742_8956,i__7744_8958);a__6297__auto__.push(arg__6298__auto___8959);
{
var G__8960 = seq__7741_8955;
var G__8961 = chunk__7742_8956;
var G__8962 = count__7743_8957;
var G__8963 = (i__7744_8958 + 1);
seq__7741_8955 = G__8960;
chunk__7742_8956 = G__8961;
count__7743_8957 = G__8962;
i__7744_8958 = G__8963;
continue;
}
} else
{var temp__4092__auto___8964 = cljs.core.seq.call(null,seq__7741_8955);if(temp__4092__auto___8964)
{var seq__7741_8965__$1 = temp__4092__auto___8964;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7741_8965__$1))
{var c__5638__auto___8966 = cljs.core.chunk_first.call(null,seq__7741_8965__$1);{
var G__8967 = cljs.core.chunk_rest.call(null,seq__7741_8965__$1);
var G__8968 = c__5638__auto___8966;
var G__8969 = cljs.core.count.call(null,c__5638__auto___8966);
var G__8970 = 0;
seq__7741_8955 = G__8967;
chunk__7742_8956 = G__8968;
count__7743_8957 = G__8969;
i__7744_8958 = G__8970;
continue;
}
} else
{var arg__6298__auto___8971 = cljs.core.first.call(null,seq__7741_8965__$1);a__6297__auto__.push(arg__6298__auto___8971);
{
var G__8972 = cljs.core.next.call(null,seq__7741_8965__$1);
var G__8973 = null;
var G__8974 = 0;
var G__8975 = 0;
seq__7741_8955 = G__8972;
chunk__7742_8956 = G__8973;
count__7743_8957 = G__8974;
i__7744_8958 = G__8975;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.code.apply(null,a__6297__auto__);
};
var code = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return code__delegate.call(this,args__6296__auto__);};
code.cljs$lang$maxFixedArity = 0;
code.cljs$lang$applyTo = (function (arglist__8976){
var args__6296__auto__ = cljs.core.seq(arglist__8976);
return code__delegate(args__6296__auto__);
});
code.cljs$core$IFn$_invoke$arity$variadic = code__delegate;
return code;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.col = (function() { 
var col__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__7749_8977 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__7750_8978 = null;var count__7751_8979 = 0;var i__7752_8980 = 0;while(true){
if((i__7752_8980 < count__7751_8979))
{var arg__6298__auto___8981 = cljs.core._nth.call(null,chunk__7750_8978,i__7752_8980);a__6297__auto__.push(arg__6298__auto___8981);
{
var G__8982 = seq__7749_8977;
var G__8983 = chunk__7750_8978;
var G__8984 = count__7751_8979;
var G__8985 = (i__7752_8980 + 1);
seq__7749_8977 = G__8982;
chunk__7750_8978 = G__8983;
count__7751_8979 = G__8984;
i__7752_8980 = G__8985;
continue;
}
} else
{var temp__4092__auto___8986 = cljs.core.seq.call(null,seq__7749_8977);if(temp__4092__auto___8986)
{var seq__7749_8987__$1 = temp__4092__auto___8986;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7749_8987__$1))
{var c__5638__auto___8988 = cljs.core.chunk_first.call(null,seq__7749_8987__$1);{
var G__8989 = cljs.core.chunk_rest.call(null,seq__7749_8987__$1);
var G__8990 = c__5638__auto___8988;
var G__8991 = cljs.core.count.call(null,c__5638__auto___8988);
var G__8992 = 0;
seq__7749_8977 = G__8989;
chunk__7750_8978 = G__8990;
count__7751_8979 = G__8991;
i__7752_8980 = G__8992;
continue;
}
} else
{var arg__6298__auto___8993 = cljs.core.first.call(null,seq__7749_8987__$1);a__6297__auto__.push(arg__6298__auto___8993);
{
var G__8994 = cljs.core.next.call(null,seq__7749_8987__$1);
var G__8995 = null;
var G__8996 = 0;
var G__8997 = 0;
seq__7749_8977 = G__8994;
chunk__7750_8978 = G__8995;
count__7751_8979 = G__8996;
i__7752_8980 = G__8997;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.col.apply(null,a__6297__auto__);
};
var col = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return col__delegate.call(this,args__6296__auto__);};
col.cljs$lang$maxFixedArity = 0;
col.cljs$lang$applyTo = (function (arglist__8998){
var args__6296__auto__ = cljs.core.seq(arglist__8998);
return col__delegate(args__6296__auto__);
});
col.cljs$core$IFn$_invoke$arity$variadic = col__delegate;
return col;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.colgroup = (function() { 
var colgroup__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__7757_8999 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__7758_9000 = null;var count__7759_9001 = 0;var i__7760_9002 = 0;while(true){
if((i__7760_9002 < count__7759_9001))
{var arg__6298__auto___9003 = cljs.core._nth.call(null,chunk__7758_9000,i__7760_9002);a__6297__auto__.push(arg__6298__auto___9003);
{
var G__9004 = seq__7757_8999;
var G__9005 = chunk__7758_9000;
var G__9006 = count__7759_9001;
var G__9007 = (i__7760_9002 + 1);
seq__7757_8999 = G__9004;
chunk__7758_9000 = G__9005;
count__7759_9001 = G__9006;
i__7760_9002 = G__9007;
continue;
}
} else
{var temp__4092__auto___9008 = cljs.core.seq.call(null,seq__7757_8999);if(temp__4092__auto___9008)
{var seq__7757_9009__$1 = temp__4092__auto___9008;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7757_9009__$1))
{var c__5638__auto___9010 = cljs.core.chunk_first.call(null,seq__7757_9009__$1);{
var G__9011 = cljs.core.chunk_rest.call(null,seq__7757_9009__$1);
var G__9012 = c__5638__auto___9010;
var G__9013 = cljs.core.count.call(null,c__5638__auto___9010);
var G__9014 = 0;
seq__7757_8999 = G__9011;
chunk__7758_9000 = G__9012;
count__7759_9001 = G__9013;
i__7760_9002 = G__9014;
continue;
}
} else
{var arg__6298__auto___9015 = cljs.core.first.call(null,seq__7757_9009__$1);a__6297__auto__.push(arg__6298__auto___9015);
{
var G__9016 = cljs.core.next.call(null,seq__7757_9009__$1);
var G__9017 = null;
var G__9018 = 0;
var G__9019 = 0;
seq__7757_8999 = G__9016;
chunk__7758_9000 = G__9017;
count__7759_9001 = G__9018;
i__7760_9002 = G__9019;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.colgroup.apply(null,a__6297__auto__);
};
var colgroup = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return colgroup__delegate.call(this,args__6296__auto__);};
colgroup.cljs$lang$maxFixedArity = 0;
colgroup.cljs$lang$applyTo = (function (arglist__9020){
var args__6296__auto__ = cljs.core.seq(arglist__9020);
return colgroup__delegate(args__6296__auto__);
});
colgroup.cljs$core$IFn$_invoke$arity$variadic = colgroup__delegate;
return colgroup;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.data = (function() { 
var data__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__7765_9021 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__7766_9022 = null;var count__7767_9023 = 0;var i__7768_9024 = 0;while(true){
if((i__7768_9024 < count__7767_9023))
{var arg__6298__auto___9025 = cljs.core._nth.call(null,chunk__7766_9022,i__7768_9024);a__6297__auto__.push(arg__6298__auto___9025);
{
var G__9026 = seq__7765_9021;
var G__9027 = chunk__7766_9022;
var G__9028 = count__7767_9023;
var G__9029 = (i__7768_9024 + 1);
seq__7765_9021 = G__9026;
chunk__7766_9022 = G__9027;
count__7767_9023 = G__9028;
i__7768_9024 = G__9029;
continue;
}
} else
{var temp__4092__auto___9030 = cljs.core.seq.call(null,seq__7765_9021);if(temp__4092__auto___9030)
{var seq__7765_9031__$1 = temp__4092__auto___9030;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7765_9031__$1))
{var c__5638__auto___9032 = cljs.core.chunk_first.call(null,seq__7765_9031__$1);{
var G__9033 = cljs.core.chunk_rest.call(null,seq__7765_9031__$1);
var G__9034 = c__5638__auto___9032;
var G__9035 = cljs.core.count.call(null,c__5638__auto___9032);
var G__9036 = 0;
seq__7765_9021 = G__9033;
chunk__7766_9022 = G__9034;
count__7767_9023 = G__9035;
i__7768_9024 = G__9036;
continue;
}
} else
{var arg__6298__auto___9037 = cljs.core.first.call(null,seq__7765_9031__$1);a__6297__auto__.push(arg__6298__auto___9037);
{
var G__9038 = cljs.core.next.call(null,seq__7765_9031__$1);
var G__9039 = null;
var G__9040 = 0;
var G__9041 = 0;
seq__7765_9021 = G__9038;
chunk__7766_9022 = G__9039;
count__7767_9023 = G__9040;
i__7768_9024 = G__9041;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.data.apply(null,a__6297__auto__);
};
var data = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return data__delegate.call(this,args__6296__auto__);};
data.cljs$lang$maxFixedArity = 0;
data.cljs$lang$applyTo = (function (arglist__9042){
var args__6296__auto__ = cljs.core.seq(arglist__9042);
return data__delegate(args__6296__auto__);
});
data.cljs$core$IFn$_invoke$arity$variadic = data__delegate;
return data;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.datalist = (function() { 
var datalist__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__7773_9043 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__7774_9044 = null;var count__7775_9045 = 0;var i__7776_9046 = 0;while(true){
if((i__7776_9046 < count__7775_9045))
{var arg__6298__auto___9047 = cljs.core._nth.call(null,chunk__7774_9044,i__7776_9046);a__6297__auto__.push(arg__6298__auto___9047);
{
var G__9048 = seq__7773_9043;
var G__9049 = chunk__7774_9044;
var G__9050 = count__7775_9045;
var G__9051 = (i__7776_9046 + 1);
seq__7773_9043 = G__9048;
chunk__7774_9044 = G__9049;
count__7775_9045 = G__9050;
i__7776_9046 = G__9051;
continue;
}
} else
{var temp__4092__auto___9052 = cljs.core.seq.call(null,seq__7773_9043);if(temp__4092__auto___9052)
{var seq__7773_9053__$1 = temp__4092__auto___9052;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7773_9053__$1))
{var c__5638__auto___9054 = cljs.core.chunk_first.call(null,seq__7773_9053__$1);{
var G__9055 = cljs.core.chunk_rest.call(null,seq__7773_9053__$1);
var G__9056 = c__5638__auto___9054;
var G__9057 = cljs.core.count.call(null,c__5638__auto___9054);
var G__9058 = 0;
seq__7773_9043 = G__9055;
chunk__7774_9044 = G__9056;
count__7775_9045 = G__9057;
i__7776_9046 = G__9058;
continue;
}
} else
{var arg__6298__auto___9059 = cljs.core.first.call(null,seq__7773_9053__$1);a__6297__auto__.push(arg__6298__auto___9059);
{
var G__9060 = cljs.core.next.call(null,seq__7773_9053__$1);
var G__9061 = null;
var G__9062 = 0;
var G__9063 = 0;
seq__7773_9043 = G__9060;
chunk__7774_9044 = G__9061;
count__7775_9045 = G__9062;
i__7776_9046 = G__9063;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.datalist.apply(null,a__6297__auto__);
};
var datalist = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return datalist__delegate.call(this,args__6296__auto__);};
datalist.cljs$lang$maxFixedArity = 0;
datalist.cljs$lang$applyTo = (function (arglist__9064){
var args__6296__auto__ = cljs.core.seq(arglist__9064);
return datalist__delegate(args__6296__auto__);
});
datalist.cljs$core$IFn$_invoke$arity$variadic = datalist__delegate;
return datalist;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.dd = (function() { 
var dd__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__7781_9065 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__7782_9066 = null;var count__7783_9067 = 0;var i__7784_9068 = 0;while(true){
if((i__7784_9068 < count__7783_9067))
{var arg__6298__auto___9069 = cljs.core._nth.call(null,chunk__7782_9066,i__7784_9068);a__6297__auto__.push(arg__6298__auto___9069);
{
var G__9070 = seq__7781_9065;
var G__9071 = chunk__7782_9066;
var G__9072 = count__7783_9067;
var G__9073 = (i__7784_9068 + 1);
seq__7781_9065 = G__9070;
chunk__7782_9066 = G__9071;
count__7783_9067 = G__9072;
i__7784_9068 = G__9073;
continue;
}
} else
{var temp__4092__auto___9074 = cljs.core.seq.call(null,seq__7781_9065);if(temp__4092__auto___9074)
{var seq__7781_9075__$1 = temp__4092__auto___9074;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7781_9075__$1))
{var c__5638__auto___9076 = cljs.core.chunk_first.call(null,seq__7781_9075__$1);{
var G__9077 = cljs.core.chunk_rest.call(null,seq__7781_9075__$1);
var G__9078 = c__5638__auto___9076;
var G__9079 = cljs.core.count.call(null,c__5638__auto___9076);
var G__9080 = 0;
seq__7781_9065 = G__9077;
chunk__7782_9066 = G__9078;
count__7783_9067 = G__9079;
i__7784_9068 = G__9080;
continue;
}
} else
{var arg__6298__auto___9081 = cljs.core.first.call(null,seq__7781_9075__$1);a__6297__auto__.push(arg__6298__auto___9081);
{
var G__9082 = cljs.core.next.call(null,seq__7781_9075__$1);
var G__9083 = null;
var G__9084 = 0;
var G__9085 = 0;
seq__7781_9065 = G__9082;
chunk__7782_9066 = G__9083;
count__7783_9067 = G__9084;
i__7784_9068 = G__9085;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.dd.apply(null,a__6297__auto__);
};
var dd = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return dd__delegate.call(this,args__6296__auto__);};
dd.cljs$lang$maxFixedArity = 0;
dd.cljs$lang$applyTo = (function (arglist__9086){
var args__6296__auto__ = cljs.core.seq(arglist__9086);
return dd__delegate(args__6296__auto__);
});
dd.cljs$core$IFn$_invoke$arity$variadic = dd__delegate;
return dd;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.del = (function() { 
var del__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__7789_9087 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__7790_9088 = null;var count__7791_9089 = 0;var i__7792_9090 = 0;while(true){
if((i__7792_9090 < count__7791_9089))
{var arg__6298__auto___9091 = cljs.core._nth.call(null,chunk__7790_9088,i__7792_9090);a__6297__auto__.push(arg__6298__auto___9091);
{
var G__9092 = seq__7789_9087;
var G__9093 = chunk__7790_9088;
var G__9094 = count__7791_9089;
var G__9095 = (i__7792_9090 + 1);
seq__7789_9087 = G__9092;
chunk__7790_9088 = G__9093;
count__7791_9089 = G__9094;
i__7792_9090 = G__9095;
continue;
}
} else
{var temp__4092__auto___9096 = cljs.core.seq.call(null,seq__7789_9087);if(temp__4092__auto___9096)
{var seq__7789_9097__$1 = temp__4092__auto___9096;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7789_9097__$1))
{var c__5638__auto___9098 = cljs.core.chunk_first.call(null,seq__7789_9097__$1);{
var G__9099 = cljs.core.chunk_rest.call(null,seq__7789_9097__$1);
var G__9100 = c__5638__auto___9098;
var G__9101 = cljs.core.count.call(null,c__5638__auto___9098);
var G__9102 = 0;
seq__7789_9087 = G__9099;
chunk__7790_9088 = G__9100;
count__7791_9089 = G__9101;
i__7792_9090 = G__9102;
continue;
}
} else
{var arg__6298__auto___9103 = cljs.core.first.call(null,seq__7789_9097__$1);a__6297__auto__.push(arg__6298__auto___9103);
{
var G__9104 = cljs.core.next.call(null,seq__7789_9097__$1);
var G__9105 = null;
var G__9106 = 0;
var G__9107 = 0;
seq__7789_9087 = G__9104;
chunk__7790_9088 = G__9105;
count__7791_9089 = G__9106;
i__7792_9090 = G__9107;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.del.apply(null,a__6297__auto__);
};
var del = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return del__delegate.call(this,args__6296__auto__);};
del.cljs$lang$maxFixedArity = 0;
del.cljs$lang$applyTo = (function (arglist__9108){
var args__6296__auto__ = cljs.core.seq(arglist__9108);
return del__delegate(args__6296__auto__);
});
del.cljs$core$IFn$_invoke$arity$variadic = del__delegate;
return del;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.details = (function() { 
var details__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__7797_9109 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__7798_9110 = null;var count__7799_9111 = 0;var i__7800_9112 = 0;while(true){
if((i__7800_9112 < count__7799_9111))
{var arg__6298__auto___9113 = cljs.core._nth.call(null,chunk__7798_9110,i__7800_9112);a__6297__auto__.push(arg__6298__auto___9113);
{
var G__9114 = seq__7797_9109;
var G__9115 = chunk__7798_9110;
var G__9116 = count__7799_9111;
var G__9117 = (i__7800_9112 + 1);
seq__7797_9109 = G__9114;
chunk__7798_9110 = G__9115;
count__7799_9111 = G__9116;
i__7800_9112 = G__9117;
continue;
}
} else
{var temp__4092__auto___9118 = cljs.core.seq.call(null,seq__7797_9109);if(temp__4092__auto___9118)
{var seq__7797_9119__$1 = temp__4092__auto___9118;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7797_9119__$1))
{var c__5638__auto___9120 = cljs.core.chunk_first.call(null,seq__7797_9119__$1);{
var G__9121 = cljs.core.chunk_rest.call(null,seq__7797_9119__$1);
var G__9122 = c__5638__auto___9120;
var G__9123 = cljs.core.count.call(null,c__5638__auto___9120);
var G__9124 = 0;
seq__7797_9109 = G__9121;
chunk__7798_9110 = G__9122;
count__7799_9111 = G__9123;
i__7800_9112 = G__9124;
continue;
}
} else
{var arg__6298__auto___9125 = cljs.core.first.call(null,seq__7797_9119__$1);a__6297__auto__.push(arg__6298__auto___9125);
{
var G__9126 = cljs.core.next.call(null,seq__7797_9119__$1);
var G__9127 = null;
var G__9128 = 0;
var G__9129 = 0;
seq__7797_9109 = G__9126;
chunk__7798_9110 = G__9127;
count__7799_9111 = G__9128;
i__7800_9112 = G__9129;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.details.apply(null,a__6297__auto__);
};
var details = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return details__delegate.call(this,args__6296__auto__);};
details.cljs$lang$maxFixedArity = 0;
details.cljs$lang$applyTo = (function (arglist__9130){
var args__6296__auto__ = cljs.core.seq(arglist__9130);
return details__delegate(args__6296__auto__);
});
details.cljs$core$IFn$_invoke$arity$variadic = details__delegate;
return details;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.dfn = (function() { 
var dfn__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__7805_9131 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__7806_9132 = null;var count__7807_9133 = 0;var i__7808_9134 = 0;while(true){
if((i__7808_9134 < count__7807_9133))
{var arg__6298__auto___9135 = cljs.core._nth.call(null,chunk__7806_9132,i__7808_9134);a__6297__auto__.push(arg__6298__auto___9135);
{
var G__9136 = seq__7805_9131;
var G__9137 = chunk__7806_9132;
var G__9138 = count__7807_9133;
var G__9139 = (i__7808_9134 + 1);
seq__7805_9131 = G__9136;
chunk__7806_9132 = G__9137;
count__7807_9133 = G__9138;
i__7808_9134 = G__9139;
continue;
}
} else
{var temp__4092__auto___9140 = cljs.core.seq.call(null,seq__7805_9131);if(temp__4092__auto___9140)
{var seq__7805_9141__$1 = temp__4092__auto___9140;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7805_9141__$1))
{var c__5638__auto___9142 = cljs.core.chunk_first.call(null,seq__7805_9141__$1);{
var G__9143 = cljs.core.chunk_rest.call(null,seq__7805_9141__$1);
var G__9144 = c__5638__auto___9142;
var G__9145 = cljs.core.count.call(null,c__5638__auto___9142);
var G__9146 = 0;
seq__7805_9131 = G__9143;
chunk__7806_9132 = G__9144;
count__7807_9133 = G__9145;
i__7808_9134 = G__9146;
continue;
}
} else
{var arg__6298__auto___9147 = cljs.core.first.call(null,seq__7805_9141__$1);a__6297__auto__.push(arg__6298__auto___9147);
{
var G__9148 = cljs.core.next.call(null,seq__7805_9141__$1);
var G__9149 = null;
var G__9150 = 0;
var G__9151 = 0;
seq__7805_9131 = G__9148;
chunk__7806_9132 = G__9149;
count__7807_9133 = G__9150;
i__7808_9134 = G__9151;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.dfn.apply(null,a__6297__auto__);
};
var dfn = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return dfn__delegate.call(this,args__6296__auto__);};
dfn.cljs$lang$maxFixedArity = 0;
dfn.cljs$lang$applyTo = (function (arglist__9152){
var args__6296__auto__ = cljs.core.seq(arglist__9152);
return dfn__delegate(args__6296__auto__);
});
dfn.cljs$core$IFn$_invoke$arity$variadic = dfn__delegate;
return dfn;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.div = (function() { 
var div__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__7813_9153 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__7814_9154 = null;var count__7815_9155 = 0;var i__7816_9156 = 0;while(true){
if((i__7816_9156 < count__7815_9155))
{var arg__6298__auto___9157 = cljs.core._nth.call(null,chunk__7814_9154,i__7816_9156);a__6297__auto__.push(arg__6298__auto___9157);
{
var G__9158 = seq__7813_9153;
var G__9159 = chunk__7814_9154;
var G__9160 = count__7815_9155;
var G__9161 = (i__7816_9156 + 1);
seq__7813_9153 = G__9158;
chunk__7814_9154 = G__9159;
count__7815_9155 = G__9160;
i__7816_9156 = G__9161;
continue;
}
} else
{var temp__4092__auto___9162 = cljs.core.seq.call(null,seq__7813_9153);if(temp__4092__auto___9162)
{var seq__7813_9163__$1 = temp__4092__auto___9162;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7813_9163__$1))
{var c__5638__auto___9164 = cljs.core.chunk_first.call(null,seq__7813_9163__$1);{
var G__9165 = cljs.core.chunk_rest.call(null,seq__7813_9163__$1);
var G__9166 = c__5638__auto___9164;
var G__9167 = cljs.core.count.call(null,c__5638__auto___9164);
var G__9168 = 0;
seq__7813_9153 = G__9165;
chunk__7814_9154 = G__9166;
count__7815_9155 = G__9167;
i__7816_9156 = G__9168;
continue;
}
} else
{var arg__6298__auto___9169 = cljs.core.first.call(null,seq__7813_9163__$1);a__6297__auto__.push(arg__6298__auto___9169);
{
var G__9170 = cljs.core.next.call(null,seq__7813_9163__$1);
var G__9171 = null;
var G__9172 = 0;
var G__9173 = 0;
seq__7813_9153 = G__9170;
chunk__7814_9154 = G__9171;
count__7815_9155 = G__9172;
i__7816_9156 = G__9173;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.div.apply(null,a__6297__auto__);
};
var div = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return div__delegate.call(this,args__6296__auto__);};
div.cljs$lang$maxFixedArity = 0;
div.cljs$lang$applyTo = (function (arglist__9174){
var args__6296__auto__ = cljs.core.seq(arglist__9174);
return div__delegate(args__6296__auto__);
});
div.cljs$core$IFn$_invoke$arity$variadic = div__delegate;
return div;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.dl = (function() { 
var dl__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__7821_9175 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__7822_9176 = null;var count__7823_9177 = 0;var i__7824_9178 = 0;while(true){
if((i__7824_9178 < count__7823_9177))
{var arg__6298__auto___9179 = cljs.core._nth.call(null,chunk__7822_9176,i__7824_9178);a__6297__auto__.push(arg__6298__auto___9179);
{
var G__9180 = seq__7821_9175;
var G__9181 = chunk__7822_9176;
var G__9182 = count__7823_9177;
var G__9183 = (i__7824_9178 + 1);
seq__7821_9175 = G__9180;
chunk__7822_9176 = G__9181;
count__7823_9177 = G__9182;
i__7824_9178 = G__9183;
continue;
}
} else
{var temp__4092__auto___9184 = cljs.core.seq.call(null,seq__7821_9175);if(temp__4092__auto___9184)
{var seq__7821_9185__$1 = temp__4092__auto___9184;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7821_9185__$1))
{var c__5638__auto___9186 = cljs.core.chunk_first.call(null,seq__7821_9185__$1);{
var G__9187 = cljs.core.chunk_rest.call(null,seq__7821_9185__$1);
var G__9188 = c__5638__auto___9186;
var G__9189 = cljs.core.count.call(null,c__5638__auto___9186);
var G__9190 = 0;
seq__7821_9175 = G__9187;
chunk__7822_9176 = G__9188;
count__7823_9177 = G__9189;
i__7824_9178 = G__9190;
continue;
}
} else
{var arg__6298__auto___9191 = cljs.core.first.call(null,seq__7821_9185__$1);a__6297__auto__.push(arg__6298__auto___9191);
{
var G__9192 = cljs.core.next.call(null,seq__7821_9185__$1);
var G__9193 = null;
var G__9194 = 0;
var G__9195 = 0;
seq__7821_9175 = G__9192;
chunk__7822_9176 = G__9193;
count__7823_9177 = G__9194;
i__7824_9178 = G__9195;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.dl.apply(null,a__6297__auto__);
};
var dl = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return dl__delegate.call(this,args__6296__auto__);};
dl.cljs$lang$maxFixedArity = 0;
dl.cljs$lang$applyTo = (function (arglist__9196){
var args__6296__auto__ = cljs.core.seq(arglist__9196);
return dl__delegate(args__6296__auto__);
});
dl.cljs$core$IFn$_invoke$arity$variadic = dl__delegate;
return dl;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.dt = (function() { 
var dt__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__7829_9197 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__7830_9198 = null;var count__7831_9199 = 0;var i__7832_9200 = 0;while(true){
if((i__7832_9200 < count__7831_9199))
{var arg__6298__auto___9201 = cljs.core._nth.call(null,chunk__7830_9198,i__7832_9200);a__6297__auto__.push(arg__6298__auto___9201);
{
var G__9202 = seq__7829_9197;
var G__9203 = chunk__7830_9198;
var G__9204 = count__7831_9199;
var G__9205 = (i__7832_9200 + 1);
seq__7829_9197 = G__9202;
chunk__7830_9198 = G__9203;
count__7831_9199 = G__9204;
i__7832_9200 = G__9205;
continue;
}
} else
{var temp__4092__auto___9206 = cljs.core.seq.call(null,seq__7829_9197);if(temp__4092__auto___9206)
{var seq__7829_9207__$1 = temp__4092__auto___9206;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7829_9207__$1))
{var c__5638__auto___9208 = cljs.core.chunk_first.call(null,seq__7829_9207__$1);{
var G__9209 = cljs.core.chunk_rest.call(null,seq__7829_9207__$1);
var G__9210 = c__5638__auto___9208;
var G__9211 = cljs.core.count.call(null,c__5638__auto___9208);
var G__9212 = 0;
seq__7829_9197 = G__9209;
chunk__7830_9198 = G__9210;
count__7831_9199 = G__9211;
i__7832_9200 = G__9212;
continue;
}
} else
{var arg__6298__auto___9213 = cljs.core.first.call(null,seq__7829_9207__$1);a__6297__auto__.push(arg__6298__auto___9213);
{
var G__9214 = cljs.core.next.call(null,seq__7829_9207__$1);
var G__9215 = null;
var G__9216 = 0;
var G__9217 = 0;
seq__7829_9197 = G__9214;
chunk__7830_9198 = G__9215;
count__7831_9199 = G__9216;
i__7832_9200 = G__9217;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.dt.apply(null,a__6297__auto__);
};
var dt = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return dt__delegate.call(this,args__6296__auto__);};
dt.cljs$lang$maxFixedArity = 0;
dt.cljs$lang$applyTo = (function (arglist__9218){
var args__6296__auto__ = cljs.core.seq(arglist__9218);
return dt__delegate(args__6296__auto__);
});
dt.cljs$core$IFn$_invoke$arity$variadic = dt__delegate;
return dt;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.em = (function() { 
var em__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__7837_9219 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__7838_9220 = null;var count__7839_9221 = 0;var i__7840_9222 = 0;while(true){
if((i__7840_9222 < count__7839_9221))
{var arg__6298__auto___9223 = cljs.core._nth.call(null,chunk__7838_9220,i__7840_9222);a__6297__auto__.push(arg__6298__auto___9223);
{
var G__9224 = seq__7837_9219;
var G__9225 = chunk__7838_9220;
var G__9226 = count__7839_9221;
var G__9227 = (i__7840_9222 + 1);
seq__7837_9219 = G__9224;
chunk__7838_9220 = G__9225;
count__7839_9221 = G__9226;
i__7840_9222 = G__9227;
continue;
}
} else
{var temp__4092__auto___9228 = cljs.core.seq.call(null,seq__7837_9219);if(temp__4092__auto___9228)
{var seq__7837_9229__$1 = temp__4092__auto___9228;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7837_9229__$1))
{var c__5638__auto___9230 = cljs.core.chunk_first.call(null,seq__7837_9229__$1);{
var G__9231 = cljs.core.chunk_rest.call(null,seq__7837_9229__$1);
var G__9232 = c__5638__auto___9230;
var G__9233 = cljs.core.count.call(null,c__5638__auto___9230);
var G__9234 = 0;
seq__7837_9219 = G__9231;
chunk__7838_9220 = G__9232;
count__7839_9221 = G__9233;
i__7840_9222 = G__9234;
continue;
}
} else
{var arg__6298__auto___9235 = cljs.core.first.call(null,seq__7837_9229__$1);a__6297__auto__.push(arg__6298__auto___9235);
{
var G__9236 = cljs.core.next.call(null,seq__7837_9229__$1);
var G__9237 = null;
var G__9238 = 0;
var G__9239 = 0;
seq__7837_9219 = G__9236;
chunk__7838_9220 = G__9237;
count__7839_9221 = G__9238;
i__7840_9222 = G__9239;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.em.apply(null,a__6297__auto__);
};
var em = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return em__delegate.call(this,args__6296__auto__);};
em.cljs$lang$maxFixedArity = 0;
em.cljs$lang$applyTo = (function (arglist__9240){
var args__6296__auto__ = cljs.core.seq(arglist__9240);
return em__delegate(args__6296__auto__);
});
em.cljs$core$IFn$_invoke$arity$variadic = em__delegate;
return em;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.embed = (function() { 
var embed__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__7853_9241 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__7854_9242 = null;var count__7855_9243 = 0;var i__7856_9244 = 0;while(true){
if((i__7856_9244 < count__7855_9243))
{var arg__6298__auto___9245 = cljs.core._nth.call(null,chunk__7854_9242,i__7856_9244);a__6297__auto__.push(arg__6298__auto___9245);
{
var G__9246 = seq__7853_9241;
var G__9247 = chunk__7854_9242;
var G__9248 = count__7855_9243;
var G__9249 = (i__7856_9244 + 1);
seq__7853_9241 = G__9246;
chunk__7854_9242 = G__9247;
count__7855_9243 = G__9248;
i__7856_9244 = G__9249;
continue;
}
} else
{var temp__4092__auto___9250 = cljs.core.seq.call(null,seq__7853_9241);if(temp__4092__auto___9250)
{var seq__7853_9251__$1 = temp__4092__auto___9250;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7853_9251__$1))
{var c__5638__auto___9252 = cljs.core.chunk_first.call(null,seq__7853_9251__$1);{
var G__9253 = cljs.core.chunk_rest.call(null,seq__7853_9251__$1);
var G__9254 = c__5638__auto___9252;
var G__9255 = cljs.core.count.call(null,c__5638__auto___9252);
var G__9256 = 0;
seq__7853_9241 = G__9253;
chunk__7854_9242 = G__9254;
count__7855_9243 = G__9255;
i__7856_9244 = G__9256;
continue;
}
} else
{var arg__6298__auto___9257 = cljs.core.first.call(null,seq__7853_9251__$1);a__6297__auto__.push(arg__6298__auto___9257);
{
var G__9258 = cljs.core.next.call(null,seq__7853_9251__$1);
var G__9259 = null;
var G__9260 = 0;
var G__9261 = 0;
seq__7853_9241 = G__9258;
chunk__7854_9242 = G__9259;
count__7855_9243 = G__9260;
i__7856_9244 = G__9261;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.embed.apply(null,a__6297__auto__);
};
var embed = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return embed__delegate.call(this,args__6296__auto__);};
embed.cljs$lang$maxFixedArity = 0;
embed.cljs$lang$applyTo = (function (arglist__9262){
var args__6296__auto__ = cljs.core.seq(arglist__9262);
return embed__delegate(args__6296__auto__);
});
embed.cljs$core$IFn$_invoke$arity$variadic = embed__delegate;
return embed;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.fieldset = (function() { 
var fieldset__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__7861_9263 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__7862_9264 = null;var count__7863_9265 = 0;var i__7864_9266 = 0;while(true){
if((i__7864_9266 < count__7863_9265))
{var arg__6298__auto___9267 = cljs.core._nth.call(null,chunk__7862_9264,i__7864_9266);a__6297__auto__.push(arg__6298__auto___9267);
{
var G__9268 = seq__7861_9263;
var G__9269 = chunk__7862_9264;
var G__9270 = count__7863_9265;
var G__9271 = (i__7864_9266 + 1);
seq__7861_9263 = G__9268;
chunk__7862_9264 = G__9269;
count__7863_9265 = G__9270;
i__7864_9266 = G__9271;
continue;
}
} else
{var temp__4092__auto___9272 = cljs.core.seq.call(null,seq__7861_9263);if(temp__4092__auto___9272)
{var seq__7861_9273__$1 = temp__4092__auto___9272;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7861_9273__$1))
{var c__5638__auto___9274 = cljs.core.chunk_first.call(null,seq__7861_9273__$1);{
var G__9275 = cljs.core.chunk_rest.call(null,seq__7861_9273__$1);
var G__9276 = c__5638__auto___9274;
var G__9277 = cljs.core.count.call(null,c__5638__auto___9274);
var G__9278 = 0;
seq__7861_9263 = G__9275;
chunk__7862_9264 = G__9276;
count__7863_9265 = G__9277;
i__7864_9266 = G__9278;
continue;
}
} else
{var arg__6298__auto___9279 = cljs.core.first.call(null,seq__7861_9273__$1);a__6297__auto__.push(arg__6298__auto___9279);
{
var G__9280 = cljs.core.next.call(null,seq__7861_9273__$1);
var G__9281 = null;
var G__9282 = 0;
var G__9283 = 0;
seq__7861_9263 = G__9280;
chunk__7862_9264 = G__9281;
count__7863_9265 = G__9282;
i__7864_9266 = G__9283;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.fieldset.apply(null,a__6297__auto__);
};
var fieldset = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return fieldset__delegate.call(this,args__6296__auto__);};
fieldset.cljs$lang$maxFixedArity = 0;
fieldset.cljs$lang$applyTo = (function (arglist__9284){
var args__6296__auto__ = cljs.core.seq(arglist__9284);
return fieldset__delegate(args__6296__auto__);
});
fieldset.cljs$core$IFn$_invoke$arity$variadic = fieldset__delegate;
return fieldset;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.figcaption = (function() { 
var figcaption__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__7869_9285 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__7870_9286 = null;var count__7871_9287 = 0;var i__7872_9288 = 0;while(true){
if((i__7872_9288 < count__7871_9287))
{var arg__6298__auto___9289 = cljs.core._nth.call(null,chunk__7870_9286,i__7872_9288);a__6297__auto__.push(arg__6298__auto___9289);
{
var G__9290 = seq__7869_9285;
var G__9291 = chunk__7870_9286;
var G__9292 = count__7871_9287;
var G__9293 = (i__7872_9288 + 1);
seq__7869_9285 = G__9290;
chunk__7870_9286 = G__9291;
count__7871_9287 = G__9292;
i__7872_9288 = G__9293;
continue;
}
} else
{var temp__4092__auto___9294 = cljs.core.seq.call(null,seq__7869_9285);if(temp__4092__auto___9294)
{var seq__7869_9295__$1 = temp__4092__auto___9294;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7869_9295__$1))
{var c__5638__auto___9296 = cljs.core.chunk_first.call(null,seq__7869_9295__$1);{
var G__9297 = cljs.core.chunk_rest.call(null,seq__7869_9295__$1);
var G__9298 = c__5638__auto___9296;
var G__9299 = cljs.core.count.call(null,c__5638__auto___9296);
var G__9300 = 0;
seq__7869_9285 = G__9297;
chunk__7870_9286 = G__9298;
count__7871_9287 = G__9299;
i__7872_9288 = G__9300;
continue;
}
} else
{var arg__6298__auto___9301 = cljs.core.first.call(null,seq__7869_9295__$1);a__6297__auto__.push(arg__6298__auto___9301);
{
var G__9302 = cljs.core.next.call(null,seq__7869_9295__$1);
var G__9303 = null;
var G__9304 = 0;
var G__9305 = 0;
seq__7869_9285 = G__9302;
chunk__7870_9286 = G__9303;
count__7871_9287 = G__9304;
i__7872_9288 = G__9305;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.figcaption.apply(null,a__6297__auto__);
};
var figcaption = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return figcaption__delegate.call(this,args__6296__auto__);};
figcaption.cljs$lang$maxFixedArity = 0;
figcaption.cljs$lang$applyTo = (function (arglist__9306){
var args__6296__auto__ = cljs.core.seq(arglist__9306);
return figcaption__delegate(args__6296__auto__);
});
figcaption.cljs$core$IFn$_invoke$arity$variadic = figcaption__delegate;
return figcaption;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.figure = (function() { 
var figure__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__7877_9307 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__7878_9308 = null;var count__7879_9309 = 0;var i__7880_9310 = 0;while(true){
if((i__7880_9310 < count__7879_9309))
{var arg__6298__auto___9311 = cljs.core._nth.call(null,chunk__7878_9308,i__7880_9310);a__6297__auto__.push(arg__6298__auto___9311);
{
var G__9312 = seq__7877_9307;
var G__9313 = chunk__7878_9308;
var G__9314 = count__7879_9309;
var G__9315 = (i__7880_9310 + 1);
seq__7877_9307 = G__9312;
chunk__7878_9308 = G__9313;
count__7879_9309 = G__9314;
i__7880_9310 = G__9315;
continue;
}
} else
{var temp__4092__auto___9316 = cljs.core.seq.call(null,seq__7877_9307);if(temp__4092__auto___9316)
{var seq__7877_9317__$1 = temp__4092__auto___9316;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7877_9317__$1))
{var c__5638__auto___9318 = cljs.core.chunk_first.call(null,seq__7877_9317__$1);{
var G__9319 = cljs.core.chunk_rest.call(null,seq__7877_9317__$1);
var G__9320 = c__5638__auto___9318;
var G__9321 = cljs.core.count.call(null,c__5638__auto___9318);
var G__9322 = 0;
seq__7877_9307 = G__9319;
chunk__7878_9308 = G__9320;
count__7879_9309 = G__9321;
i__7880_9310 = G__9322;
continue;
}
} else
{var arg__6298__auto___9323 = cljs.core.first.call(null,seq__7877_9317__$1);a__6297__auto__.push(arg__6298__auto___9323);
{
var G__9324 = cljs.core.next.call(null,seq__7877_9317__$1);
var G__9325 = null;
var G__9326 = 0;
var G__9327 = 0;
seq__7877_9307 = G__9324;
chunk__7878_9308 = G__9325;
count__7879_9309 = G__9326;
i__7880_9310 = G__9327;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.figure.apply(null,a__6297__auto__);
};
var figure = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return figure__delegate.call(this,args__6296__auto__);};
figure.cljs$lang$maxFixedArity = 0;
figure.cljs$lang$applyTo = (function (arglist__9328){
var args__6296__auto__ = cljs.core.seq(arglist__9328);
return figure__delegate(args__6296__auto__);
});
figure.cljs$core$IFn$_invoke$arity$variadic = figure__delegate;
return figure;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.footer = (function() { 
var footer__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__7885_9329 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__7886_9330 = null;var count__7887_9331 = 0;var i__7888_9332 = 0;while(true){
if((i__7888_9332 < count__7887_9331))
{var arg__6298__auto___9333 = cljs.core._nth.call(null,chunk__7886_9330,i__7888_9332);a__6297__auto__.push(arg__6298__auto___9333);
{
var G__9334 = seq__7885_9329;
var G__9335 = chunk__7886_9330;
var G__9336 = count__7887_9331;
var G__9337 = (i__7888_9332 + 1);
seq__7885_9329 = G__9334;
chunk__7886_9330 = G__9335;
count__7887_9331 = G__9336;
i__7888_9332 = G__9337;
continue;
}
} else
{var temp__4092__auto___9338 = cljs.core.seq.call(null,seq__7885_9329);if(temp__4092__auto___9338)
{var seq__7885_9339__$1 = temp__4092__auto___9338;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7885_9339__$1))
{var c__5638__auto___9340 = cljs.core.chunk_first.call(null,seq__7885_9339__$1);{
var G__9341 = cljs.core.chunk_rest.call(null,seq__7885_9339__$1);
var G__9342 = c__5638__auto___9340;
var G__9343 = cljs.core.count.call(null,c__5638__auto___9340);
var G__9344 = 0;
seq__7885_9329 = G__9341;
chunk__7886_9330 = G__9342;
count__7887_9331 = G__9343;
i__7888_9332 = G__9344;
continue;
}
} else
{var arg__6298__auto___9345 = cljs.core.first.call(null,seq__7885_9339__$1);a__6297__auto__.push(arg__6298__auto___9345);
{
var G__9346 = cljs.core.next.call(null,seq__7885_9339__$1);
var G__9347 = null;
var G__9348 = 0;
var G__9349 = 0;
seq__7885_9329 = G__9346;
chunk__7886_9330 = G__9347;
count__7887_9331 = G__9348;
i__7888_9332 = G__9349;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.footer.apply(null,a__6297__auto__);
};
var footer = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return footer__delegate.call(this,args__6296__auto__);};
footer.cljs$lang$maxFixedArity = 0;
footer.cljs$lang$applyTo = (function (arglist__9350){
var args__6296__auto__ = cljs.core.seq(arglist__9350);
return footer__delegate(args__6296__auto__);
});
footer.cljs$core$IFn$_invoke$arity$variadic = footer__delegate;
return footer;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.form = (function() { 
var form__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__7893_9351 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__7894_9352 = null;var count__7895_9353 = 0;var i__7896_9354 = 0;while(true){
if((i__7896_9354 < count__7895_9353))
{var arg__6298__auto___9355 = cljs.core._nth.call(null,chunk__7894_9352,i__7896_9354);a__6297__auto__.push(arg__6298__auto___9355);
{
var G__9356 = seq__7893_9351;
var G__9357 = chunk__7894_9352;
var G__9358 = count__7895_9353;
var G__9359 = (i__7896_9354 + 1);
seq__7893_9351 = G__9356;
chunk__7894_9352 = G__9357;
count__7895_9353 = G__9358;
i__7896_9354 = G__9359;
continue;
}
} else
{var temp__4092__auto___9360 = cljs.core.seq.call(null,seq__7893_9351);if(temp__4092__auto___9360)
{var seq__7893_9361__$1 = temp__4092__auto___9360;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7893_9361__$1))
{var c__5638__auto___9362 = cljs.core.chunk_first.call(null,seq__7893_9361__$1);{
var G__9363 = cljs.core.chunk_rest.call(null,seq__7893_9361__$1);
var G__9364 = c__5638__auto___9362;
var G__9365 = cljs.core.count.call(null,c__5638__auto___9362);
var G__9366 = 0;
seq__7893_9351 = G__9363;
chunk__7894_9352 = G__9364;
count__7895_9353 = G__9365;
i__7896_9354 = G__9366;
continue;
}
} else
{var arg__6298__auto___9367 = cljs.core.first.call(null,seq__7893_9361__$1);a__6297__auto__.push(arg__6298__auto___9367);
{
var G__9368 = cljs.core.next.call(null,seq__7893_9361__$1);
var G__9369 = null;
var G__9370 = 0;
var G__9371 = 0;
seq__7893_9351 = G__9368;
chunk__7894_9352 = G__9369;
count__7895_9353 = G__9370;
i__7896_9354 = G__9371;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.form.apply(null,a__6297__auto__);
};
var form = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return form__delegate.call(this,args__6296__auto__);};
form.cljs$lang$maxFixedArity = 0;
form.cljs$lang$applyTo = (function (arglist__9372){
var args__6296__auto__ = cljs.core.seq(arglist__9372);
return form__delegate(args__6296__auto__);
});
form.cljs$core$IFn$_invoke$arity$variadic = form__delegate;
return form;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h1 = (function() { 
var h1__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__7901_9373 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__7902_9374 = null;var count__7903_9375 = 0;var i__7904_9376 = 0;while(true){
if((i__7904_9376 < count__7903_9375))
{var arg__6298__auto___9377 = cljs.core._nth.call(null,chunk__7902_9374,i__7904_9376);a__6297__auto__.push(arg__6298__auto___9377);
{
var G__9378 = seq__7901_9373;
var G__9379 = chunk__7902_9374;
var G__9380 = count__7903_9375;
var G__9381 = (i__7904_9376 + 1);
seq__7901_9373 = G__9378;
chunk__7902_9374 = G__9379;
count__7903_9375 = G__9380;
i__7904_9376 = G__9381;
continue;
}
} else
{var temp__4092__auto___9382 = cljs.core.seq.call(null,seq__7901_9373);if(temp__4092__auto___9382)
{var seq__7901_9383__$1 = temp__4092__auto___9382;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7901_9383__$1))
{var c__5638__auto___9384 = cljs.core.chunk_first.call(null,seq__7901_9383__$1);{
var G__9385 = cljs.core.chunk_rest.call(null,seq__7901_9383__$1);
var G__9386 = c__5638__auto___9384;
var G__9387 = cljs.core.count.call(null,c__5638__auto___9384);
var G__9388 = 0;
seq__7901_9373 = G__9385;
chunk__7902_9374 = G__9386;
count__7903_9375 = G__9387;
i__7904_9376 = G__9388;
continue;
}
} else
{var arg__6298__auto___9389 = cljs.core.first.call(null,seq__7901_9383__$1);a__6297__auto__.push(arg__6298__auto___9389);
{
var G__9390 = cljs.core.next.call(null,seq__7901_9383__$1);
var G__9391 = null;
var G__9392 = 0;
var G__9393 = 0;
seq__7901_9373 = G__9390;
chunk__7902_9374 = G__9391;
count__7903_9375 = G__9392;
i__7904_9376 = G__9393;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h1.apply(null,a__6297__auto__);
};
var h1 = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h1__delegate.call(this,args__6296__auto__);};
h1.cljs$lang$maxFixedArity = 0;
h1.cljs$lang$applyTo = (function (arglist__9394){
var args__6296__auto__ = cljs.core.seq(arglist__9394);
return h1__delegate(args__6296__auto__);
});
h1.cljs$core$IFn$_invoke$arity$variadic = h1__delegate;
return h1;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h2 = (function() { 
var h2__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__7909_9395 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__7910_9396 = null;var count__7911_9397 = 0;var i__7912_9398 = 0;while(true){
if((i__7912_9398 < count__7911_9397))
{var arg__6298__auto___9399 = cljs.core._nth.call(null,chunk__7910_9396,i__7912_9398);a__6297__auto__.push(arg__6298__auto___9399);
{
var G__9400 = seq__7909_9395;
var G__9401 = chunk__7910_9396;
var G__9402 = count__7911_9397;
var G__9403 = (i__7912_9398 + 1);
seq__7909_9395 = G__9400;
chunk__7910_9396 = G__9401;
count__7911_9397 = G__9402;
i__7912_9398 = G__9403;
continue;
}
} else
{var temp__4092__auto___9404 = cljs.core.seq.call(null,seq__7909_9395);if(temp__4092__auto___9404)
{var seq__7909_9405__$1 = temp__4092__auto___9404;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7909_9405__$1))
{var c__5638__auto___9406 = cljs.core.chunk_first.call(null,seq__7909_9405__$1);{
var G__9407 = cljs.core.chunk_rest.call(null,seq__7909_9405__$1);
var G__9408 = c__5638__auto___9406;
var G__9409 = cljs.core.count.call(null,c__5638__auto___9406);
var G__9410 = 0;
seq__7909_9395 = G__9407;
chunk__7910_9396 = G__9408;
count__7911_9397 = G__9409;
i__7912_9398 = G__9410;
continue;
}
} else
{var arg__6298__auto___9411 = cljs.core.first.call(null,seq__7909_9405__$1);a__6297__auto__.push(arg__6298__auto___9411);
{
var G__9412 = cljs.core.next.call(null,seq__7909_9405__$1);
var G__9413 = null;
var G__9414 = 0;
var G__9415 = 0;
seq__7909_9395 = G__9412;
chunk__7910_9396 = G__9413;
count__7911_9397 = G__9414;
i__7912_9398 = G__9415;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h2.apply(null,a__6297__auto__);
};
var h2 = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h2__delegate.call(this,args__6296__auto__);};
h2.cljs$lang$maxFixedArity = 0;
h2.cljs$lang$applyTo = (function (arglist__9416){
var args__6296__auto__ = cljs.core.seq(arglist__9416);
return h2__delegate(args__6296__auto__);
});
h2.cljs$core$IFn$_invoke$arity$variadic = h2__delegate;
return h2;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h3 = (function() { 
var h3__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__7917_9417 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__7918_9418 = null;var count__7919_9419 = 0;var i__7920_9420 = 0;while(true){
if((i__7920_9420 < count__7919_9419))
{var arg__6298__auto___9421 = cljs.core._nth.call(null,chunk__7918_9418,i__7920_9420);a__6297__auto__.push(arg__6298__auto___9421);
{
var G__9422 = seq__7917_9417;
var G__9423 = chunk__7918_9418;
var G__9424 = count__7919_9419;
var G__9425 = (i__7920_9420 + 1);
seq__7917_9417 = G__9422;
chunk__7918_9418 = G__9423;
count__7919_9419 = G__9424;
i__7920_9420 = G__9425;
continue;
}
} else
{var temp__4092__auto___9426 = cljs.core.seq.call(null,seq__7917_9417);if(temp__4092__auto___9426)
{var seq__7917_9427__$1 = temp__4092__auto___9426;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7917_9427__$1))
{var c__5638__auto___9428 = cljs.core.chunk_first.call(null,seq__7917_9427__$1);{
var G__9429 = cljs.core.chunk_rest.call(null,seq__7917_9427__$1);
var G__9430 = c__5638__auto___9428;
var G__9431 = cljs.core.count.call(null,c__5638__auto___9428);
var G__9432 = 0;
seq__7917_9417 = G__9429;
chunk__7918_9418 = G__9430;
count__7919_9419 = G__9431;
i__7920_9420 = G__9432;
continue;
}
} else
{var arg__6298__auto___9433 = cljs.core.first.call(null,seq__7917_9427__$1);a__6297__auto__.push(arg__6298__auto___9433);
{
var G__9434 = cljs.core.next.call(null,seq__7917_9427__$1);
var G__9435 = null;
var G__9436 = 0;
var G__9437 = 0;
seq__7917_9417 = G__9434;
chunk__7918_9418 = G__9435;
count__7919_9419 = G__9436;
i__7920_9420 = G__9437;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h3.apply(null,a__6297__auto__);
};
var h3 = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h3__delegate.call(this,args__6296__auto__);};
h3.cljs$lang$maxFixedArity = 0;
h3.cljs$lang$applyTo = (function (arglist__9438){
var args__6296__auto__ = cljs.core.seq(arglist__9438);
return h3__delegate(args__6296__auto__);
});
h3.cljs$core$IFn$_invoke$arity$variadic = h3__delegate;
return h3;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h4 = (function() { 
var h4__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__7925_9439 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__7926_9440 = null;var count__7927_9441 = 0;var i__7928_9442 = 0;while(true){
if((i__7928_9442 < count__7927_9441))
{var arg__6298__auto___9443 = cljs.core._nth.call(null,chunk__7926_9440,i__7928_9442);a__6297__auto__.push(arg__6298__auto___9443);
{
var G__9444 = seq__7925_9439;
var G__9445 = chunk__7926_9440;
var G__9446 = count__7927_9441;
var G__9447 = (i__7928_9442 + 1);
seq__7925_9439 = G__9444;
chunk__7926_9440 = G__9445;
count__7927_9441 = G__9446;
i__7928_9442 = G__9447;
continue;
}
} else
{var temp__4092__auto___9448 = cljs.core.seq.call(null,seq__7925_9439);if(temp__4092__auto___9448)
{var seq__7925_9449__$1 = temp__4092__auto___9448;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7925_9449__$1))
{var c__5638__auto___9450 = cljs.core.chunk_first.call(null,seq__7925_9449__$1);{
var G__9451 = cljs.core.chunk_rest.call(null,seq__7925_9449__$1);
var G__9452 = c__5638__auto___9450;
var G__9453 = cljs.core.count.call(null,c__5638__auto___9450);
var G__9454 = 0;
seq__7925_9439 = G__9451;
chunk__7926_9440 = G__9452;
count__7927_9441 = G__9453;
i__7928_9442 = G__9454;
continue;
}
} else
{var arg__6298__auto___9455 = cljs.core.first.call(null,seq__7925_9449__$1);a__6297__auto__.push(arg__6298__auto___9455);
{
var G__9456 = cljs.core.next.call(null,seq__7925_9449__$1);
var G__9457 = null;
var G__9458 = 0;
var G__9459 = 0;
seq__7925_9439 = G__9456;
chunk__7926_9440 = G__9457;
count__7927_9441 = G__9458;
i__7928_9442 = G__9459;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h4.apply(null,a__6297__auto__);
};
var h4 = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h4__delegate.call(this,args__6296__auto__);};
h4.cljs$lang$maxFixedArity = 0;
h4.cljs$lang$applyTo = (function (arglist__9460){
var args__6296__auto__ = cljs.core.seq(arglist__9460);
return h4__delegate(args__6296__auto__);
});
h4.cljs$core$IFn$_invoke$arity$variadic = h4__delegate;
return h4;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h5 = (function() { 
var h5__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__7933_9461 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__7934_9462 = null;var count__7935_9463 = 0;var i__7936_9464 = 0;while(true){
if((i__7936_9464 < count__7935_9463))
{var arg__6298__auto___9465 = cljs.core._nth.call(null,chunk__7934_9462,i__7936_9464);a__6297__auto__.push(arg__6298__auto___9465);
{
var G__9466 = seq__7933_9461;
var G__9467 = chunk__7934_9462;
var G__9468 = count__7935_9463;
var G__9469 = (i__7936_9464 + 1);
seq__7933_9461 = G__9466;
chunk__7934_9462 = G__9467;
count__7935_9463 = G__9468;
i__7936_9464 = G__9469;
continue;
}
} else
{var temp__4092__auto___9470 = cljs.core.seq.call(null,seq__7933_9461);if(temp__4092__auto___9470)
{var seq__7933_9471__$1 = temp__4092__auto___9470;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7933_9471__$1))
{var c__5638__auto___9472 = cljs.core.chunk_first.call(null,seq__7933_9471__$1);{
var G__9473 = cljs.core.chunk_rest.call(null,seq__7933_9471__$1);
var G__9474 = c__5638__auto___9472;
var G__9475 = cljs.core.count.call(null,c__5638__auto___9472);
var G__9476 = 0;
seq__7933_9461 = G__9473;
chunk__7934_9462 = G__9474;
count__7935_9463 = G__9475;
i__7936_9464 = G__9476;
continue;
}
} else
{var arg__6298__auto___9477 = cljs.core.first.call(null,seq__7933_9471__$1);a__6297__auto__.push(arg__6298__auto___9477);
{
var G__9478 = cljs.core.next.call(null,seq__7933_9471__$1);
var G__9479 = null;
var G__9480 = 0;
var G__9481 = 0;
seq__7933_9461 = G__9478;
chunk__7934_9462 = G__9479;
count__7935_9463 = G__9480;
i__7936_9464 = G__9481;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h5.apply(null,a__6297__auto__);
};
var h5 = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h5__delegate.call(this,args__6296__auto__);};
h5.cljs$lang$maxFixedArity = 0;
h5.cljs$lang$applyTo = (function (arglist__9482){
var args__6296__auto__ = cljs.core.seq(arglist__9482);
return h5__delegate(args__6296__auto__);
});
h5.cljs$core$IFn$_invoke$arity$variadic = h5__delegate;
return h5;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h6 = (function() { 
var h6__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__7941_9483 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__7942_9484 = null;var count__7943_9485 = 0;var i__7944_9486 = 0;while(true){
if((i__7944_9486 < count__7943_9485))
{var arg__6298__auto___9487 = cljs.core._nth.call(null,chunk__7942_9484,i__7944_9486);a__6297__auto__.push(arg__6298__auto___9487);
{
var G__9488 = seq__7941_9483;
var G__9489 = chunk__7942_9484;
var G__9490 = count__7943_9485;
var G__9491 = (i__7944_9486 + 1);
seq__7941_9483 = G__9488;
chunk__7942_9484 = G__9489;
count__7943_9485 = G__9490;
i__7944_9486 = G__9491;
continue;
}
} else
{var temp__4092__auto___9492 = cljs.core.seq.call(null,seq__7941_9483);if(temp__4092__auto___9492)
{var seq__7941_9493__$1 = temp__4092__auto___9492;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7941_9493__$1))
{var c__5638__auto___9494 = cljs.core.chunk_first.call(null,seq__7941_9493__$1);{
var G__9495 = cljs.core.chunk_rest.call(null,seq__7941_9493__$1);
var G__9496 = c__5638__auto___9494;
var G__9497 = cljs.core.count.call(null,c__5638__auto___9494);
var G__9498 = 0;
seq__7941_9483 = G__9495;
chunk__7942_9484 = G__9496;
count__7943_9485 = G__9497;
i__7944_9486 = G__9498;
continue;
}
} else
{var arg__6298__auto___9499 = cljs.core.first.call(null,seq__7941_9493__$1);a__6297__auto__.push(arg__6298__auto___9499);
{
var G__9500 = cljs.core.next.call(null,seq__7941_9493__$1);
var G__9501 = null;
var G__9502 = 0;
var G__9503 = 0;
seq__7941_9483 = G__9500;
chunk__7942_9484 = G__9501;
count__7943_9485 = G__9502;
i__7944_9486 = G__9503;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h6.apply(null,a__6297__auto__);
};
var h6 = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h6__delegate.call(this,args__6296__auto__);};
h6.cljs$lang$maxFixedArity = 0;
h6.cljs$lang$applyTo = (function (arglist__9504){
var args__6296__auto__ = cljs.core.seq(arglist__9504);
return h6__delegate(args__6296__auto__);
});
h6.cljs$core$IFn$_invoke$arity$variadic = h6__delegate;
return h6;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.head = (function() { 
var head__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__7949_9505 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__7950_9506 = null;var count__7951_9507 = 0;var i__7952_9508 = 0;while(true){
if((i__7952_9508 < count__7951_9507))
{var arg__6298__auto___9509 = cljs.core._nth.call(null,chunk__7950_9506,i__7952_9508);a__6297__auto__.push(arg__6298__auto___9509);
{
var G__9510 = seq__7949_9505;
var G__9511 = chunk__7950_9506;
var G__9512 = count__7951_9507;
var G__9513 = (i__7952_9508 + 1);
seq__7949_9505 = G__9510;
chunk__7950_9506 = G__9511;
count__7951_9507 = G__9512;
i__7952_9508 = G__9513;
continue;
}
} else
{var temp__4092__auto___9514 = cljs.core.seq.call(null,seq__7949_9505);if(temp__4092__auto___9514)
{var seq__7949_9515__$1 = temp__4092__auto___9514;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7949_9515__$1))
{var c__5638__auto___9516 = cljs.core.chunk_first.call(null,seq__7949_9515__$1);{
var G__9517 = cljs.core.chunk_rest.call(null,seq__7949_9515__$1);
var G__9518 = c__5638__auto___9516;
var G__9519 = cljs.core.count.call(null,c__5638__auto___9516);
var G__9520 = 0;
seq__7949_9505 = G__9517;
chunk__7950_9506 = G__9518;
count__7951_9507 = G__9519;
i__7952_9508 = G__9520;
continue;
}
} else
{var arg__6298__auto___9521 = cljs.core.first.call(null,seq__7949_9515__$1);a__6297__auto__.push(arg__6298__auto___9521);
{
var G__9522 = cljs.core.next.call(null,seq__7949_9515__$1);
var G__9523 = null;
var G__9524 = 0;
var G__9525 = 0;
seq__7949_9505 = G__9522;
chunk__7950_9506 = G__9523;
count__7951_9507 = G__9524;
i__7952_9508 = G__9525;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.head.apply(null,a__6297__auto__);
};
var head = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return head__delegate.call(this,args__6296__auto__);};
head.cljs$lang$maxFixedArity = 0;
head.cljs$lang$applyTo = (function (arglist__9526){
var args__6296__auto__ = cljs.core.seq(arglist__9526);
return head__delegate(args__6296__auto__);
});
head.cljs$core$IFn$_invoke$arity$variadic = head__delegate;
return head;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.header = (function() { 
var header__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__7957_9527 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__7958_9528 = null;var count__7959_9529 = 0;var i__7960_9530 = 0;while(true){
if((i__7960_9530 < count__7959_9529))
{var arg__6298__auto___9531 = cljs.core._nth.call(null,chunk__7958_9528,i__7960_9530);a__6297__auto__.push(arg__6298__auto___9531);
{
var G__9532 = seq__7957_9527;
var G__9533 = chunk__7958_9528;
var G__9534 = count__7959_9529;
var G__9535 = (i__7960_9530 + 1);
seq__7957_9527 = G__9532;
chunk__7958_9528 = G__9533;
count__7959_9529 = G__9534;
i__7960_9530 = G__9535;
continue;
}
} else
{var temp__4092__auto___9536 = cljs.core.seq.call(null,seq__7957_9527);if(temp__4092__auto___9536)
{var seq__7957_9537__$1 = temp__4092__auto___9536;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7957_9537__$1))
{var c__5638__auto___9538 = cljs.core.chunk_first.call(null,seq__7957_9537__$1);{
var G__9539 = cljs.core.chunk_rest.call(null,seq__7957_9537__$1);
var G__9540 = c__5638__auto___9538;
var G__9541 = cljs.core.count.call(null,c__5638__auto___9538);
var G__9542 = 0;
seq__7957_9527 = G__9539;
chunk__7958_9528 = G__9540;
count__7959_9529 = G__9541;
i__7960_9530 = G__9542;
continue;
}
} else
{var arg__6298__auto___9543 = cljs.core.first.call(null,seq__7957_9537__$1);a__6297__auto__.push(arg__6298__auto___9543);
{
var G__9544 = cljs.core.next.call(null,seq__7957_9537__$1);
var G__9545 = null;
var G__9546 = 0;
var G__9547 = 0;
seq__7957_9527 = G__9544;
chunk__7958_9528 = G__9545;
count__7959_9529 = G__9546;
i__7960_9530 = G__9547;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.header.apply(null,a__6297__auto__);
};
var header = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return header__delegate.call(this,args__6296__auto__);};
header.cljs$lang$maxFixedArity = 0;
header.cljs$lang$applyTo = (function (arglist__9548){
var args__6296__auto__ = cljs.core.seq(arglist__9548);
return header__delegate(args__6296__auto__);
});
header.cljs$core$IFn$_invoke$arity$variadic = header__delegate;
return header;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.hr = (function() { 
var hr__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__7965_9549 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__7966_9550 = null;var count__7967_9551 = 0;var i__7968_9552 = 0;while(true){
if((i__7968_9552 < count__7967_9551))
{var arg__6298__auto___9553 = cljs.core._nth.call(null,chunk__7966_9550,i__7968_9552);a__6297__auto__.push(arg__6298__auto___9553);
{
var G__9554 = seq__7965_9549;
var G__9555 = chunk__7966_9550;
var G__9556 = count__7967_9551;
var G__9557 = (i__7968_9552 + 1);
seq__7965_9549 = G__9554;
chunk__7966_9550 = G__9555;
count__7967_9551 = G__9556;
i__7968_9552 = G__9557;
continue;
}
} else
{var temp__4092__auto___9558 = cljs.core.seq.call(null,seq__7965_9549);if(temp__4092__auto___9558)
{var seq__7965_9559__$1 = temp__4092__auto___9558;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7965_9559__$1))
{var c__5638__auto___9560 = cljs.core.chunk_first.call(null,seq__7965_9559__$1);{
var G__9561 = cljs.core.chunk_rest.call(null,seq__7965_9559__$1);
var G__9562 = c__5638__auto___9560;
var G__9563 = cljs.core.count.call(null,c__5638__auto___9560);
var G__9564 = 0;
seq__7965_9549 = G__9561;
chunk__7966_9550 = G__9562;
count__7967_9551 = G__9563;
i__7968_9552 = G__9564;
continue;
}
} else
{var arg__6298__auto___9565 = cljs.core.first.call(null,seq__7965_9559__$1);a__6297__auto__.push(arg__6298__auto___9565);
{
var G__9566 = cljs.core.next.call(null,seq__7965_9559__$1);
var G__9567 = null;
var G__9568 = 0;
var G__9569 = 0;
seq__7965_9549 = G__9566;
chunk__7966_9550 = G__9567;
count__7967_9551 = G__9568;
i__7968_9552 = G__9569;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.hr.apply(null,a__6297__auto__);
};
var hr = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return hr__delegate.call(this,args__6296__auto__);};
hr.cljs$lang$maxFixedArity = 0;
hr.cljs$lang$applyTo = (function (arglist__9570){
var args__6296__auto__ = cljs.core.seq(arglist__9570);
return hr__delegate(args__6296__auto__);
});
hr.cljs$core$IFn$_invoke$arity$variadic = hr__delegate;
return hr;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.html = (function() { 
var html__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__7973_9571 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__7974_9572 = null;var count__7975_9573 = 0;var i__7976_9574 = 0;while(true){
if((i__7976_9574 < count__7975_9573))
{var arg__6298__auto___9575 = cljs.core._nth.call(null,chunk__7974_9572,i__7976_9574);a__6297__auto__.push(arg__6298__auto___9575);
{
var G__9576 = seq__7973_9571;
var G__9577 = chunk__7974_9572;
var G__9578 = count__7975_9573;
var G__9579 = (i__7976_9574 + 1);
seq__7973_9571 = G__9576;
chunk__7974_9572 = G__9577;
count__7975_9573 = G__9578;
i__7976_9574 = G__9579;
continue;
}
} else
{var temp__4092__auto___9580 = cljs.core.seq.call(null,seq__7973_9571);if(temp__4092__auto___9580)
{var seq__7973_9581__$1 = temp__4092__auto___9580;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7973_9581__$1))
{var c__5638__auto___9582 = cljs.core.chunk_first.call(null,seq__7973_9581__$1);{
var G__9583 = cljs.core.chunk_rest.call(null,seq__7973_9581__$1);
var G__9584 = c__5638__auto___9582;
var G__9585 = cljs.core.count.call(null,c__5638__auto___9582);
var G__9586 = 0;
seq__7973_9571 = G__9583;
chunk__7974_9572 = G__9584;
count__7975_9573 = G__9585;
i__7976_9574 = G__9586;
continue;
}
} else
{var arg__6298__auto___9587 = cljs.core.first.call(null,seq__7973_9581__$1);a__6297__auto__.push(arg__6298__auto___9587);
{
var G__9588 = cljs.core.next.call(null,seq__7973_9581__$1);
var G__9589 = null;
var G__9590 = 0;
var G__9591 = 0;
seq__7973_9571 = G__9588;
chunk__7974_9572 = G__9589;
count__7975_9573 = G__9590;
i__7976_9574 = G__9591;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.html.apply(null,a__6297__auto__);
};
var html = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return html__delegate.call(this,args__6296__auto__);};
html.cljs$lang$maxFixedArity = 0;
html.cljs$lang$applyTo = (function (arglist__9592){
var args__6296__auto__ = cljs.core.seq(arglist__9592);
return html__delegate(args__6296__auto__);
});
html.cljs$core$IFn$_invoke$arity$variadic = html__delegate;
return html;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.i = (function() { 
var i__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__7981_9593 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__7982_9594 = null;var count__7983_9595 = 0;var i__7984_9596 = 0;while(true){
if((i__7984_9596 < count__7983_9595))
{var arg__6298__auto___9597 = cljs.core._nth.call(null,chunk__7982_9594,i__7984_9596);a__6297__auto__.push(arg__6298__auto___9597);
{
var G__9598 = seq__7981_9593;
var G__9599 = chunk__7982_9594;
var G__9600 = count__7983_9595;
var G__9601 = (i__7984_9596 + 1);
seq__7981_9593 = G__9598;
chunk__7982_9594 = G__9599;
count__7983_9595 = G__9600;
i__7984_9596 = G__9601;
continue;
}
} else
{var temp__4092__auto___9602 = cljs.core.seq.call(null,seq__7981_9593);if(temp__4092__auto___9602)
{var seq__7981_9603__$1 = temp__4092__auto___9602;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7981_9603__$1))
{var c__5638__auto___9604 = cljs.core.chunk_first.call(null,seq__7981_9603__$1);{
var G__9605 = cljs.core.chunk_rest.call(null,seq__7981_9603__$1);
var G__9606 = c__5638__auto___9604;
var G__9607 = cljs.core.count.call(null,c__5638__auto___9604);
var G__9608 = 0;
seq__7981_9593 = G__9605;
chunk__7982_9594 = G__9606;
count__7983_9595 = G__9607;
i__7984_9596 = G__9608;
continue;
}
} else
{var arg__6298__auto___9609 = cljs.core.first.call(null,seq__7981_9603__$1);a__6297__auto__.push(arg__6298__auto___9609);
{
var G__9610 = cljs.core.next.call(null,seq__7981_9603__$1);
var G__9611 = null;
var G__9612 = 0;
var G__9613 = 0;
seq__7981_9593 = G__9610;
chunk__7982_9594 = G__9611;
count__7983_9595 = G__9612;
i__7984_9596 = G__9613;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.i.apply(null,a__6297__auto__);
};
var i = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return i__delegate.call(this,args__6296__auto__);};
i.cljs$lang$maxFixedArity = 0;
i.cljs$lang$applyTo = (function (arglist__9614){
var args__6296__auto__ = cljs.core.seq(arglist__9614);
return i__delegate(args__6296__auto__);
});
i.cljs$core$IFn$_invoke$arity$variadic = i__delegate;
return i;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.iframe = (function() { 
var iframe__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__7989_9615 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__7990_9616 = null;var count__7991_9617 = 0;var i__7992_9618 = 0;while(true){
if((i__7992_9618 < count__7991_9617))
{var arg__6298__auto___9619 = cljs.core._nth.call(null,chunk__7990_9616,i__7992_9618);a__6297__auto__.push(arg__6298__auto___9619);
{
var G__9620 = seq__7989_9615;
var G__9621 = chunk__7990_9616;
var G__9622 = count__7991_9617;
var G__9623 = (i__7992_9618 + 1);
seq__7989_9615 = G__9620;
chunk__7990_9616 = G__9621;
count__7991_9617 = G__9622;
i__7992_9618 = G__9623;
continue;
}
} else
{var temp__4092__auto___9624 = cljs.core.seq.call(null,seq__7989_9615);if(temp__4092__auto___9624)
{var seq__7989_9625__$1 = temp__4092__auto___9624;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7989_9625__$1))
{var c__5638__auto___9626 = cljs.core.chunk_first.call(null,seq__7989_9625__$1);{
var G__9627 = cljs.core.chunk_rest.call(null,seq__7989_9625__$1);
var G__9628 = c__5638__auto___9626;
var G__9629 = cljs.core.count.call(null,c__5638__auto___9626);
var G__9630 = 0;
seq__7989_9615 = G__9627;
chunk__7990_9616 = G__9628;
count__7991_9617 = G__9629;
i__7992_9618 = G__9630;
continue;
}
} else
{var arg__6298__auto___9631 = cljs.core.first.call(null,seq__7989_9625__$1);a__6297__auto__.push(arg__6298__auto___9631);
{
var G__9632 = cljs.core.next.call(null,seq__7989_9625__$1);
var G__9633 = null;
var G__9634 = 0;
var G__9635 = 0;
seq__7989_9615 = G__9632;
chunk__7990_9616 = G__9633;
count__7991_9617 = G__9634;
i__7992_9618 = G__9635;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.iframe.apply(null,a__6297__auto__);
};
var iframe = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return iframe__delegate.call(this,args__6296__auto__);};
iframe.cljs$lang$maxFixedArity = 0;
iframe.cljs$lang$applyTo = (function (arglist__9636){
var args__6296__auto__ = cljs.core.seq(arglist__9636);
return iframe__delegate(args__6296__auto__);
});
iframe.cljs$core$IFn$_invoke$arity$variadic = iframe__delegate;
return iframe;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.img = (function() { 
var img__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__7997_9637 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__7998_9638 = null;var count__7999_9639 = 0;var i__8000_9640 = 0;while(true){
if((i__8000_9640 < count__7999_9639))
{var arg__6298__auto___9641 = cljs.core._nth.call(null,chunk__7998_9638,i__8000_9640);a__6297__auto__.push(arg__6298__auto___9641);
{
var G__9642 = seq__7997_9637;
var G__9643 = chunk__7998_9638;
var G__9644 = count__7999_9639;
var G__9645 = (i__8000_9640 + 1);
seq__7997_9637 = G__9642;
chunk__7998_9638 = G__9643;
count__7999_9639 = G__9644;
i__8000_9640 = G__9645;
continue;
}
} else
{var temp__4092__auto___9646 = cljs.core.seq.call(null,seq__7997_9637);if(temp__4092__auto___9646)
{var seq__7997_9647__$1 = temp__4092__auto___9646;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7997_9647__$1))
{var c__5638__auto___9648 = cljs.core.chunk_first.call(null,seq__7997_9647__$1);{
var G__9649 = cljs.core.chunk_rest.call(null,seq__7997_9647__$1);
var G__9650 = c__5638__auto___9648;
var G__9651 = cljs.core.count.call(null,c__5638__auto___9648);
var G__9652 = 0;
seq__7997_9637 = G__9649;
chunk__7998_9638 = G__9650;
count__7999_9639 = G__9651;
i__8000_9640 = G__9652;
continue;
}
} else
{var arg__6298__auto___9653 = cljs.core.first.call(null,seq__7997_9647__$1);a__6297__auto__.push(arg__6298__auto___9653);
{
var G__9654 = cljs.core.next.call(null,seq__7997_9647__$1);
var G__9655 = null;
var G__9656 = 0;
var G__9657 = 0;
seq__7997_9637 = G__9654;
chunk__7998_9638 = G__9655;
count__7999_9639 = G__9656;
i__8000_9640 = G__9657;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.img.apply(null,a__6297__auto__);
};
var img = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return img__delegate.call(this,args__6296__auto__);};
img.cljs$lang$maxFixedArity = 0;
img.cljs$lang$applyTo = (function (arglist__9658){
var args__6296__auto__ = cljs.core.seq(arglist__9658);
return img__delegate(args__6296__auto__);
});
img.cljs$core$IFn$_invoke$arity$variadic = img__delegate;
return img;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.input = (function() { 
var input__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__8005_9659 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__8006_9660 = null;var count__8007_9661 = 0;var i__8008_9662 = 0;while(true){
if((i__8008_9662 < count__8007_9661))
{var arg__6298__auto___9663 = cljs.core._nth.call(null,chunk__8006_9660,i__8008_9662);a__6297__auto__.push(arg__6298__auto___9663);
{
var G__9664 = seq__8005_9659;
var G__9665 = chunk__8006_9660;
var G__9666 = count__8007_9661;
var G__9667 = (i__8008_9662 + 1);
seq__8005_9659 = G__9664;
chunk__8006_9660 = G__9665;
count__8007_9661 = G__9666;
i__8008_9662 = G__9667;
continue;
}
} else
{var temp__4092__auto___9668 = cljs.core.seq.call(null,seq__8005_9659);if(temp__4092__auto___9668)
{var seq__8005_9669__$1 = temp__4092__auto___9668;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8005_9669__$1))
{var c__5638__auto___9670 = cljs.core.chunk_first.call(null,seq__8005_9669__$1);{
var G__9671 = cljs.core.chunk_rest.call(null,seq__8005_9669__$1);
var G__9672 = c__5638__auto___9670;
var G__9673 = cljs.core.count.call(null,c__5638__auto___9670);
var G__9674 = 0;
seq__8005_9659 = G__9671;
chunk__8006_9660 = G__9672;
count__8007_9661 = G__9673;
i__8008_9662 = G__9674;
continue;
}
} else
{var arg__6298__auto___9675 = cljs.core.first.call(null,seq__8005_9669__$1);a__6297__auto__.push(arg__6298__auto___9675);
{
var G__9676 = cljs.core.next.call(null,seq__8005_9669__$1);
var G__9677 = null;
var G__9678 = 0;
var G__9679 = 0;
seq__8005_9659 = G__9676;
chunk__8006_9660 = G__9677;
count__8007_9661 = G__9678;
i__8008_9662 = G__9679;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.input.apply(null,a__6297__auto__);
};
var input = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return input__delegate.call(this,args__6296__auto__);};
input.cljs$lang$maxFixedArity = 0;
input.cljs$lang$applyTo = (function (arglist__9680){
var args__6296__auto__ = cljs.core.seq(arglist__9680);
return input__delegate(args__6296__auto__);
});
input.cljs$core$IFn$_invoke$arity$variadic = input__delegate;
return input;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.ins = (function() { 
var ins__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__8013_9681 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__8014_9682 = null;var count__8015_9683 = 0;var i__8016_9684 = 0;while(true){
if((i__8016_9684 < count__8015_9683))
{var arg__6298__auto___9685 = cljs.core._nth.call(null,chunk__8014_9682,i__8016_9684);a__6297__auto__.push(arg__6298__auto___9685);
{
var G__9686 = seq__8013_9681;
var G__9687 = chunk__8014_9682;
var G__9688 = count__8015_9683;
var G__9689 = (i__8016_9684 + 1);
seq__8013_9681 = G__9686;
chunk__8014_9682 = G__9687;
count__8015_9683 = G__9688;
i__8016_9684 = G__9689;
continue;
}
} else
{var temp__4092__auto___9690 = cljs.core.seq.call(null,seq__8013_9681);if(temp__4092__auto___9690)
{var seq__8013_9691__$1 = temp__4092__auto___9690;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8013_9691__$1))
{var c__5638__auto___9692 = cljs.core.chunk_first.call(null,seq__8013_9691__$1);{
var G__9693 = cljs.core.chunk_rest.call(null,seq__8013_9691__$1);
var G__9694 = c__5638__auto___9692;
var G__9695 = cljs.core.count.call(null,c__5638__auto___9692);
var G__9696 = 0;
seq__8013_9681 = G__9693;
chunk__8014_9682 = G__9694;
count__8015_9683 = G__9695;
i__8016_9684 = G__9696;
continue;
}
} else
{var arg__6298__auto___9697 = cljs.core.first.call(null,seq__8013_9691__$1);a__6297__auto__.push(arg__6298__auto___9697);
{
var G__9698 = cljs.core.next.call(null,seq__8013_9691__$1);
var G__9699 = null;
var G__9700 = 0;
var G__9701 = 0;
seq__8013_9681 = G__9698;
chunk__8014_9682 = G__9699;
count__8015_9683 = G__9700;
i__8016_9684 = G__9701;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.ins.apply(null,a__6297__auto__);
};
var ins = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ins__delegate.call(this,args__6296__auto__);};
ins.cljs$lang$maxFixedArity = 0;
ins.cljs$lang$applyTo = (function (arglist__9702){
var args__6296__auto__ = cljs.core.seq(arglist__9702);
return ins__delegate(args__6296__auto__);
});
ins.cljs$core$IFn$_invoke$arity$variadic = ins__delegate;
return ins;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.kbd = (function() { 
var kbd__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__8021_9703 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__8022_9704 = null;var count__8023_9705 = 0;var i__8024_9706 = 0;while(true){
if((i__8024_9706 < count__8023_9705))
{var arg__6298__auto___9707 = cljs.core._nth.call(null,chunk__8022_9704,i__8024_9706);a__6297__auto__.push(arg__6298__auto___9707);
{
var G__9708 = seq__8021_9703;
var G__9709 = chunk__8022_9704;
var G__9710 = count__8023_9705;
var G__9711 = (i__8024_9706 + 1);
seq__8021_9703 = G__9708;
chunk__8022_9704 = G__9709;
count__8023_9705 = G__9710;
i__8024_9706 = G__9711;
continue;
}
} else
{var temp__4092__auto___9712 = cljs.core.seq.call(null,seq__8021_9703);if(temp__4092__auto___9712)
{var seq__8021_9713__$1 = temp__4092__auto___9712;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8021_9713__$1))
{var c__5638__auto___9714 = cljs.core.chunk_first.call(null,seq__8021_9713__$1);{
var G__9715 = cljs.core.chunk_rest.call(null,seq__8021_9713__$1);
var G__9716 = c__5638__auto___9714;
var G__9717 = cljs.core.count.call(null,c__5638__auto___9714);
var G__9718 = 0;
seq__8021_9703 = G__9715;
chunk__8022_9704 = G__9716;
count__8023_9705 = G__9717;
i__8024_9706 = G__9718;
continue;
}
} else
{var arg__6298__auto___9719 = cljs.core.first.call(null,seq__8021_9713__$1);a__6297__auto__.push(arg__6298__auto___9719);
{
var G__9720 = cljs.core.next.call(null,seq__8021_9713__$1);
var G__9721 = null;
var G__9722 = 0;
var G__9723 = 0;
seq__8021_9703 = G__9720;
chunk__8022_9704 = G__9721;
count__8023_9705 = G__9722;
i__8024_9706 = G__9723;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.kbd.apply(null,a__6297__auto__);
};
var kbd = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return kbd__delegate.call(this,args__6296__auto__);};
kbd.cljs$lang$maxFixedArity = 0;
kbd.cljs$lang$applyTo = (function (arglist__9724){
var args__6296__auto__ = cljs.core.seq(arglist__9724);
return kbd__delegate(args__6296__auto__);
});
kbd.cljs$core$IFn$_invoke$arity$variadic = kbd__delegate;
return kbd;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.keygen = (function() { 
var keygen__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__8029_9725 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__8030_9726 = null;var count__8031_9727 = 0;var i__8032_9728 = 0;while(true){
if((i__8032_9728 < count__8031_9727))
{var arg__6298__auto___9729 = cljs.core._nth.call(null,chunk__8030_9726,i__8032_9728);a__6297__auto__.push(arg__6298__auto___9729);
{
var G__9730 = seq__8029_9725;
var G__9731 = chunk__8030_9726;
var G__9732 = count__8031_9727;
var G__9733 = (i__8032_9728 + 1);
seq__8029_9725 = G__9730;
chunk__8030_9726 = G__9731;
count__8031_9727 = G__9732;
i__8032_9728 = G__9733;
continue;
}
} else
{var temp__4092__auto___9734 = cljs.core.seq.call(null,seq__8029_9725);if(temp__4092__auto___9734)
{var seq__8029_9735__$1 = temp__4092__auto___9734;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8029_9735__$1))
{var c__5638__auto___9736 = cljs.core.chunk_first.call(null,seq__8029_9735__$1);{
var G__9737 = cljs.core.chunk_rest.call(null,seq__8029_9735__$1);
var G__9738 = c__5638__auto___9736;
var G__9739 = cljs.core.count.call(null,c__5638__auto___9736);
var G__9740 = 0;
seq__8029_9725 = G__9737;
chunk__8030_9726 = G__9738;
count__8031_9727 = G__9739;
i__8032_9728 = G__9740;
continue;
}
} else
{var arg__6298__auto___9741 = cljs.core.first.call(null,seq__8029_9735__$1);a__6297__auto__.push(arg__6298__auto___9741);
{
var G__9742 = cljs.core.next.call(null,seq__8029_9735__$1);
var G__9743 = null;
var G__9744 = 0;
var G__9745 = 0;
seq__8029_9725 = G__9742;
chunk__8030_9726 = G__9743;
count__8031_9727 = G__9744;
i__8032_9728 = G__9745;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.keygen.apply(null,a__6297__auto__);
};
var keygen = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return keygen__delegate.call(this,args__6296__auto__);};
keygen.cljs$lang$maxFixedArity = 0;
keygen.cljs$lang$applyTo = (function (arglist__9746){
var args__6296__auto__ = cljs.core.seq(arglist__9746);
return keygen__delegate(args__6296__auto__);
});
keygen.cljs$core$IFn$_invoke$arity$variadic = keygen__delegate;
return keygen;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.label = (function() { 
var label__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__8037_9747 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__8038_9748 = null;var count__8039_9749 = 0;var i__8040_9750 = 0;while(true){
if((i__8040_9750 < count__8039_9749))
{var arg__6298__auto___9751 = cljs.core._nth.call(null,chunk__8038_9748,i__8040_9750);a__6297__auto__.push(arg__6298__auto___9751);
{
var G__9752 = seq__8037_9747;
var G__9753 = chunk__8038_9748;
var G__9754 = count__8039_9749;
var G__9755 = (i__8040_9750 + 1);
seq__8037_9747 = G__9752;
chunk__8038_9748 = G__9753;
count__8039_9749 = G__9754;
i__8040_9750 = G__9755;
continue;
}
} else
{var temp__4092__auto___9756 = cljs.core.seq.call(null,seq__8037_9747);if(temp__4092__auto___9756)
{var seq__8037_9757__$1 = temp__4092__auto___9756;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8037_9757__$1))
{var c__5638__auto___9758 = cljs.core.chunk_first.call(null,seq__8037_9757__$1);{
var G__9759 = cljs.core.chunk_rest.call(null,seq__8037_9757__$1);
var G__9760 = c__5638__auto___9758;
var G__9761 = cljs.core.count.call(null,c__5638__auto___9758);
var G__9762 = 0;
seq__8037_9747 = G__9759;
chunk__8038_9748 = G__9760;
count__8039_9749 = G__9761;
i__8040_9750 = G__9762;
continue;
}
} else
{var arg__6298__auto___9763 = cljs.core.first.call(null,seq__8037_9757__$1);a__6297__auto__.push(arg__6298__auto___9763);
{
var G__9764 = cljs.core.next.call(null,seq__8037_9757__$1);
var G__9765 = null;
var G__9766 = 0;
var G__9767 = 0;
seq__8037_9747 = G__9764;
chunk__8038_9748 = G__9765;
count__8039_9749 = G__9766;
i__8040_9750 = G__9767;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.label.apply(null,a__6297__auto__);
};
var label = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return label__delegate.call(this,args__6296__auto__);};
label.cljs$lang$maxFixedArity = 0;
label.cljs$lang$applyTo = (function (arglist__9768){
var args__6296__auto__ = cljs.core.seq(arglist__9768);
return label__delegate(args__6296__auto__);
});
label.cljs$core$IFn$_invoke$arity$variadic = label__delegate;
return label;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.legend = (function() { 
var legend__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__8045_9769 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__8046_9770 = null;var count__8047_9771 = 0;var i__8048_9772 = 0;while(true){
if((i__8048_9772 < count__8047_9771))
{var arg__6298__auto___9773 = cljs.core._nth.call(null,chunk__8046_9770,i__8048_9772);a__6297__auto__.push(arg__6298__auto___9773);
{
var G__9774 = seq__8045_9769;
var G__9775 = chunk__8046_9770;
var G__9776 = count__8047_9771;
var G__9777 = (i__8048_9772 + 1);
seq__8045_9769 = G__9774;
chunk__8046_9770 = G__9775;
count__8047_9771 = G__9776;
i__8048_9772 = G__9777;
continue;
}
} else
{var temp__4092__auto___9778 = cljs.core.seq.call(null,seq__8045_9769);if(temp__4092__auto___9778)
{var seq__8045_9779__$1 = temp__4092__auto___9778;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8045_9779__$1))
{var c__5638__auto___9780 = cljs.core.chunk_first.call(null,seq__8045_9779__$1);{
var G__9781 = cljs.core.chunk_rest.call(null,seq__8045_9779__$1);
var G__9782 = c__5638__auto___9780;
var G__9783 = cljs.core.count.call(null,c__5638__auto___9780);
var G__9784 = 0;
seq__8045_9769 = G__9781;
chunk__8046_9770 = G__9782;
count__8047_9771 = G__9783;
i__8048_9772 = G__9784;
continue;
}
} else
{var arg__6298__auto___9785 = cljs.core.first.call(null,seq__8045_9779__$1);a__6297__auto__.push(arg__6298__auto___9785);
{
var G__9786 = cljs.core.next.call(null,seq__8045_9779__$1);
var G__9787 = null;
var G__9788 = 0;
var G__9789 = 0;
seq__8045_9769 = G__9786;
chunk__8046_9770 = G__9787;
count__8047_9771 = G__9788;
i__8048_9772 = G__9789;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.legend.apply(null,a__6297__auto__);
};
var legend = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return legend__delegate.call(this,args__6296__auto__);};
legend.cljs$lang$maxFixedArity = 0;
legend.cljs$lang$applyTo = (function (arglist__9790){
var args__6296__auto__ = cljs.core.seq(arglist__9790);
return legend__delegate(args__6296__auto__);
});
legend.cljs$core$IFn$_invoke$arity$variadic = legend__delegate;
return legend;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.li = (function() { 
var li__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__8053_9791 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__8054_9792 = null;var count__8055_9793 = 0;var i__8056_9794 = 0;while(true){
if((i__8056_9794 < count__8055_9793))
{var arg__6298__auto___9795 = cljs.core._nth.call(null,chunk__8054_9792,i__8056_9794);a__6297__auto__.push(arg__6298__auto___9795);
{
var G__9796 = seq__8053_9791;
var G__9797 = chunk__8054_9792;
var G__9798 = count__8055_9793;
var G__9799 = (i__8056_9794 + 1);
seq__8053_9791 = G__9796;
chunk__8054_9792 = G__9797;
count__8055_9793 = G__9798;
i__8056_9794 = G__9799;
continue;
}
} else
{var temp__4092__auto___9800 = cljs.core.seq.call(null,seq__8053_9791);if(temp__4092__auto___9800)
{var seq__8053_9801__$1 = temp__4092__auto___9800;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8053_9801__$1))
{var c__5638__auto___9802 = cljs.core.chunk_first.call(null,seq__8053_9801__$1);{
var G__9803 = cljs.core.chunk_rest.call(null,seq__8053_9801__$1);
var G__9804 = c__5638__auto___9802;
var G__9805 = cljs.core.count.call(null,c__5638__auto___9802);
var G__9806 = 0;
seq__8053_9791 = G__9803;
chunk__8054_9792 = G__9804;
count__8055_9793 = G__9805;
i__8056_9794 = G__9806;
continue;
}
} else
{var arg__6298__auto___9807 = cljs.core.first.call(null,seq__8053_9801__$1);a__6297__auto__.push(arg__6298__auto___9807);
{
var G__9808 = cljs.core.next.call(null,seq__8053_9801__$1);
var G__9809 = null;
var G__9810 = 0;
var G__9811 = 0;
seq__8053_9791 = G__9808;
chunk__8054_9792 = G__9809;
count__8055_9793 = G__9810;
i__8056_9794 = G__9811;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.li.apply(null,a__6297__auto__);
};
var li = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return li__delegate.call(this,args__6296__auto__);};
li.cljs$lang$maxFixedArity = 0;
li.cljs$lang$applyTo = (function (arglist__9812){
var args__6296__auto__ = cljs.core.seq(arglist__9812);
return li__delegate(args__6296__auto__);
});
li.cljs$core$IFn$_invoke$arity$variadic = li__delegate;
return li;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.link = (function() { 
var link__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__8061_9813 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__8062_9814 = null;var count__8063_9815 = 0;var i__8064_9816 = 0;while(true){
if((i__8064_9816 < count__8063_9815))
{var arg__6298__auto___9817 = cljs.core._nth.call(null,chunk__8062_9814,i__8064_9816);a__6297__auto__.push(arg__6298__auto___9817);
{
var G__9818 = seq__8061_9813;
var G__9819 = chunk__8062_9814;
var G__9820 = count__8063_9815;
var G__9821 = (i__8064_9816 + 1);
seq__8061_9813 = G__9818;
chunk__8062_9814 = G__9819;
count__8063_9815 = G__9820;
i__8064_9816 = G__9821;
continue;
}
} else
{var temp__4092__auto___9822 = cljs.core.seq.call(null,seq__8061_9813);if(temp__4092__auto___9822)
{var seq__8061_9823__$1 = temp__4092__auto___9822;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8061_9823__$1))
{var c__5638__auto___9824 = cljs.core.chunk_first.call(null,seq__8061_9823__$1);{
var G__9825 = cljs.core.chunk_rest.call(null,seq__8061_9823__$1);
var G__9826 = c__5638__auto___9824;
var G__9827 = cljs.core.count.call(null,c__5638__auto___9824);
var G__9828 = 0;
seq__8061_9813 = G__9825;
chunk__8062_9814 = G__9826;
count__8063_9815 = G__9827;
i__8064_9816 = G__9828;
continue;
}
} else
{var arg__6298__auto___9829 = cljs.core.first.call(null,seq__8061_9823__$1);a__6297__auto__.push(arg__6298__auto___9829);
{
var G__9830 = cljs.core.next.call(null,seq__8061_9823__$1);
var G__9831 = null;
var G__9832 = 0;
var G__9833 = 0;
seq__8061_9813 = G__9830;
chunk__8062_9814 = G__9831;
count__8063_9815 = G__9832;
i__8064_9816 = G__9833;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.link.apply(null,a__6297__auto__);
};
var link = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return link__delegate.call(this,args__6296__auto__);};
link.cljs$lang$maxFixedArity = 0;
link.cljs$lang$applyTo = (function (arglist__9834){
var args__6296__auto__ = cljs.core.seq(arglist__9834);
return link__delegate(args__6296__auto__);
});
link.cljs$core$IFn$_invoke$arity$variadic = link__delegate;
return link;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.main = (function() { 
var main__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__8069_9835 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__8070_9836 = null;var count__8071_9837 = 0;var i__8072_9838 = 0;while(true){
if((i__8072_9838 < count__8071_9837))
{var arg__6298__auto___9839 = cljs.core._nth.call(null,chunk__8070_9836,i__8072_9838);a__6297__auto__.push(arg__6298__auto___9839);
{
var G__9840 = seq__8069_9835;
var G__9841 = chunk__8070_9836;
var G__9842 = count__8071_9837;
var G__9843 = (i__8072_9838 + 1);
seq__8069_9835 = G__9840;
chunk__8070_9836 = G__9841;
count__8071_9837 = G__9842;
i__8072_9838 = G__9843;
continue;
}
} else
{var temp__4092__auto___9844 = cljs.core.seq.call(null,seq__8069_9835);if(temp__4092__auto___9844)
{var seq__8069_9845__$1 = temp__4092__auto___9844;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8069_9845__$1))
{var c__5638__auto___9846 = cljs.core.chunk_first.call(null,seq__8069_9845__$1);{
var G__9847 = cljs.core.chunk_rest.call(null,seq__8069_9845__$1);
var G__9848 = c__5638__auto___9846;
var G__9849 = cljs.core.count.call(null,c__5638__auto___9846);
var G__9850 = 0;
seq__8069_9835 = G__9847;
chunk__8070_9836 = G__9848;
count__8071_9837 = G__9849;
i__8072_9838 = G__9850;
continue;
}
} else
{var arg__6298__auto___9851 = cljs.core.first.call(null,seq__8069_9845__$1);a__6297__auto__.push(arg__6298__auto___9851);
{
var G__9852 = cljs.core.next.call(null,seq__8069_9845__$1);
var G__9853 = null;
var G__9854 = 0;
var G__9855 = 0;
seq__8069_9835 = G__9852;
chunk__8070_9836 = G__9853;
count__8071_9837 = G__9854;
i__8072_9838 = G__9855;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.main.apply(null,a__6297__auto__);
};
var main = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return main__delegate.call(this,args__6296__auto__);};
main.cljs$lang$maxFixedArity = 0;
main.cljs$lang$applyTo = (function (arglist__9856){
var args__6296__auto__ = cljs.core.seq(arglist__9856);
return main__delegate(args__6296__auto__);
});
main.cljs$core$IFn$_invoke$arity$variadic = main__delegate;
return main;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.map = (function() { 
var map__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__8077_9857 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__8078_9858 = null;var count__8079_9859 = 0;var i__8080_9860 = 0;while(true){
if((i__8080_9860 < count__8079_9859))
{var arg__6298__auto___9861 = cljs.core._nth.call(null,chunk__8078_9858,i__8080_9860);a__6297__auto__.push(arg__6298__auto___9861);
{
var G__9862 = seq__8077_9857;
var G__9863 = chunk__8078_9858;
var G__9864 = count__8079_9859;
var G__9865 = (i__8080_9860 + 1);
seq__8077_9857 = G__9862;
chunk__8078_9858 = G__9863;
count__8079_9859 = G__9864;
i__8080_9860 = G__9865;
continue;
}
} else
{var temp__4092__auto___9866 = cljs.core.seq.call(null,seq__8077_9857);if(temp__4092__auto___9866)
{var seq__8077_9867__$1 = temp__4092__auto___9866;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8077_9867__$1))
{var c__5638__auto___9868 = cljs.core.chunk_first.call(null,seq__8077_9867__$1);{
var G__9869 = cljs.core.chunk_rest.call(null,seq__8077_9867__$1);
var G__9870 = c__5638__auto___9868;
var G__9871 = cljs.core.count.call(null,c__5638__auto___9868);
var G__9872 = 0;
seq__8077_9857 = G__9869;
chunk__8078_9858 = G__9870;
count__8079_9859 = G__9871;
i__8080_9860 = G__9872;
continue;
}
} else
{var arg__6298__auto___9873 = cljs.core.first.call(null,seq__8077_9867__$1);a__6297__auto__.push(arg__6298__auto___9873);
{
var G__9874 = cljs.core.next.call(null,seq__8077_9867__$1);
var G__9875 = null;
var G__9876 = 0;
var G__9877 = 0;
seq__8077_9857 = G__9874;
chunk__8078_9858 = G__9875;
count__8079_9859 = G__9876;
i__8080_9860 = G__9877;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.map.apply(null,a__6297__auto__);
};
var map = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return map__delegate.call(this,args__6296__auto__);};
map.cljs$lang$maxFixedArity = 0;
map.cljs$lang$applyTo = (function (arglist__9878){
var args__6296__auto__ = cljs.core.seq(arglist__9878);
return map__delegate(args__6296__auto__);
});
map.cljs$core$IFn$_invoke$arity$variadic = map__delegate;
return map;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.mark = (function() { 
var mark__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__8085_9879 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__8086_9880 = null;var count__8087_9881 = 0;var i__8088_9882 = 0;while(true){
if((i__8088_9882 < count__8087_9881))
{var arg__6298__auto___9883 = cljs.core._nth.call(null,chunk__8086_9880,i__8088_9882);a__6297__auto__.push(arg__6298__auto___9883);
{
var G__9884 = seq__8085_9879;
var G__9885 = chunk__8086_9880;
var G__9886 = count__8087_9881;
var G__9887 = (i__8088_9882 + 1);
seq__8085_9879 = G__9884;
chunk__8086_9880 = G__9885;
count__8087_9881 = G__9886;
i__8088_9882 = G__9887;
continue;
}
} else
{var temp__4092__auto___9888 = cljs.core.seq.call(null,seq__8085_9879);if(temp__4092__auto___9888)
{var seq__8085_9889__$1 = temp__4092__auto___9888;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8085_9889__$1))
{var c__5638__auto___9890 = cljs.core.chunk_first.call(null,seq__8085_9889__$1);{
var G__9891 = cljs.core.chunk_rest.call(null,seq__8085_9889__$1);
var G__9892 = c__5638__auto___9890;
var G__9893 = cljs.core.count.call(null,c__5638__auto___9890);
var G__9894 = 0;
seq__8085_9879 = G__9891;
chunk__8086_9880 = G__9892;
count__8087_9881 = G__9893;
i__8088_9882 = G__9894;
continue;
}
} else
{var arg__6298__auto___9895 = cljs.core.first.call(null,seq__8085_9889__$1);a__6297__auto__.push(arg__6298__auto___9895);
{
var G__9896 = cljs.core.next.call(null,seq__8085_9889__$1);
var G__9897 = null;
var G__9898 = 0;
var G__9899 = 0;
seq__8085_9879 = G__9896;
chunk__8086_9880 = G__9897;
count__8087_9881 = G__9898;
i__8088_9882 = G__9899;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.mark.apply(null,a__6297__auto__);
};
var mark = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return mark__delegate.call(this,args__6296__auto__);};
mark.cljs$lang$maxFixedArity = 0;
mark.cljs$lang$applyTo = (function (arglist__9900){
var args__6296__auto__ = cljs.core.seq(arglist__9900);
return mark__delegate(args__6296__auto__);
});
mark.cljs$core$IFn$_invoke$arity$variadic = mark__delegate;
return mark;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.menu = (function() { 
var menu__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__8093_9901 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__8094_9902 = null;var count__8095_9903 = 0;var i__8096_9904 = 0;while(true){
if((i__8096_9904 < count__8095_9903))
{var arg__6298__auto___9905 = cljs.core._nth.call(null,chunk__8094_9902,i__8096_9904);a__6297__auto__.push(arg__6298__auto___9905);
{
var G__9906 = seq__8093_9901;
var G__9907 = chunk__8094_9902;
var G__9908 = count__8095_9903;
var G__9909 = (i__8096_9904 + 1);
seq__8093_9901 = G__9906;
chunk__8094_9902 = G__9907;
count__8095_9903 = G__9908;
i__8096_9904 = G__9909;
continue;
}
} else
{var temp__4092__auto___9910 = cljs.core.seq.call(null,seq__8093_9901);if(temp__4092__auto___9910)
{var seq__8093_9911__$1 = temp__4092__auto___9910;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8093_9911__$1))
{var c__5638__auto___9912 = cljs.core.chunk_first.call(null,seq__8093_9911__$1);{
var G__9913 = cljs.core.chunk_rest.call(null,seq__8093_9911__$1);
var G__9914 = c__5638__auto___9912;
var G__9915 = cljs.core.count.call(null,c__5638__auto___9912);
var G__9916 = 0;
seq__8093_9901 = G__9913;
chunk__8094_9902 = G__9914;
count__8095_9903 = G__9915;
i__8096_9904 = G__9916;
continue;
}
} else
{var arg__6298__auto___9917 = cljs.core.first.call(null,seq__8093_9911__$1);a__6297__auto__.push(arg__6298__auto___9917);
{
var G__9918 = cljs.core.next.call(null,seq__8093_9911__$1);
var G__9919 = null;
var G__9920 = 0;
var G__9921 = 0;
seq__8093_9901 = G__9918;
chunk__8094_9902 = G__9919;
count__8095_9903 = G__9920;
i__8096_9904 = G__9921;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.menu.apply(null,a__6297__auto__);
};
var menu = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return menu__delegate.call(this,args__6296__auto__);};
menu.cljs$lang$maxFixedArity = 0;
menu.cljs$lang$applyTo = (function (arglist__9922){
var args__6296__auto__ = cljs.core.seq(arglist__9922);
return menu__delegate(args__6296__auto__);
});
menu.cljs$core$IFn$_invoke$arity$variadic = menu__delegate;
return menu;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.menuitem = (function() { 
var menuitem__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__8101_9923 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__8102_9924 = null;var count__8103_9925 = 0;var i__8104_9926 = 0;while(true){
if((i__8104_9926 < count__8103_9925))
{var arg__6298__auto___9927 = cljs.core._nth.call(null,chunk__8102_9924,i__8104_9926);a__6297__auto__.push(arg__6298__auto___9927);
{
var G__9928 = seq__8101_9923;
var G__9929 = chunk__8102_9924;
var G__9930 = count__8103_9925;
var G__9931 = (i__8104_9926 + 1);
seq__8101_9923 = G__9928;
chunk__8102_9924 = G__9929;
count__8103_9925 = G__9930;
i__8104_9926 = G__9931;
continue;
}
} else
{var temp__4092__auto___9932 = cljs.core.seq.call(null,seq__8101_9923);if(temp__4092__auto___9932)
{var seq__8101_9933__$1 = temp__4092__auto___9932;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8101_9933__$1))
{var c__5638__auto___9934 = cljs.core.chunk_first.call(null,seq__8101_9933__$1);{
var G__9935 = cljs.core.chunk_rest.call(null,seq__8101_9933__$1);
var G__9936 = c__5638__auto___9934;
var G__9937 = cljs.core.count.call(null,c__5638__auto___9934);
var G__9938 = 0;
seq__8101_9923 = G__9935;
chunk__8102_9924 = G__9936;
count__8103_9925 = G__9937;
i__8104_9926 = G__9938;
continue;
}
} else
{var arg__6298__auto___9939 = cljs.core.first.call(null,seq__8101_9933__$1);a__6297__auto__.push(arg__6298__auto___9939);
{
var G__9940 = cljs.core.next.call(null,seq__8101_9933__$1);
var G__9941 = null;
var G__9942 = 0;
var G__9943 = 0;
seq__8101_9923 = G__9940;
chunk__8102_9924 = G__9941;
count__8103_9925 = G__9942;
i__8104_9926 = G__9943;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.menuitem.apply(null,a__6297__auto__);
};
var menuitem = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return menuitem__delegate.call(this,args__6296__auto__);};
menuitem.cljs$lang$maxFixedArity = 0;
menuitem.cljs$lang$applyTo = (function (arglist__9944){
var args__6296__auto__ = cljs.core.seq(arglist__9944);
return menuitem__delegate(args__6296__auto__);
});
menuitem.cljs$core$IFn$_invoke$arity$variadic = menuitem__delegate;
return menuitem;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.meta = (function() { 
var meta__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__8109_9945 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__8110_9946 = null;var count__8111_9947 = 0;var i__8112_9948 = 0;while(true){
if((i__8112_9948 < count__8111_9947))
{var arg__6298__auto___9949 = cljs.core._nth.call(null,chunk__8110_9946,i__8112_9948);a__6297__auto__.push(arg__6298__auto___9949);
{
var G__9950 = seq__8109_9945;
var G__9951 = chunk__8110_9946;
var G__9952 = count__8111_9947;
var G__9953 = (i__8112_9948 + 1);
seq__8109_9945 = G__9950;
chunk__8110_9946 = G__9951;
count__8111_9947 = G__9952;
i__8112_9948 = G__9953;
continue;
}
} else
{var temp__4092__auto___9954 = cljs.core.seq.call(null,seq__8109_9945);if(temp__4092__auto___9954)
{var seq__8109_9955__$1 = temp__4092__auto___9954;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8109_9955__$1))
{var c__5638__auto___9956 = cljs.core.chunk_first.call(null,seq__8109_9955__$1);{
var G__9957 = cljs.core.chunk_rest.call(null,seq__8109_9955__$1);
var G__9958 = c__5638__auto___9956;
var G__9959 = cljs.core.count.call(null,c__5638__auto___9956);
var G__9960 = 0;
seq__8109_9945 = G__9957;
chunk__8110_9946 = G__9958;
count__8111_9947 = G__9959;
i__8112_9948 = G__9960;
continue;
}
} else
{var arg__6298__auto___9961 = cljs.core.first.call(null,seq__8109_9955__$1);a__6297__auto__.push(arg__6298__auto___9961);
{
var G__9962 = cljs.core.next.call(null,seq__8109_9955__$1);
var G__9963 = null;
var G__9964 = 0;
var G__9965 = 0;
seq__8109_9945 = G__9962;
chunk__8110_9946 = G__9963;
count__8111_9947 = G__9964;
i__8112_9948 = G__9965;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.meta.apply(null,a__6297__auto__);
};
var meta = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return meta__delegate.call(this,args__6296__auto__);};
meta.cljs$lang$maxFixedArity = 0;
meta.cljs$lang$applyTo = (function (arglist__9966){
var args__6296__auto__ = cljs.core.seq(arglist__9966);
return meta__delegate(args__6296__auto__);
});
meta.cljs$core$IFn$_invoke$arity$variadic = meta__delegate;
return meta;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.meter = (function() { 
var meter__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__8117_9967 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__8118_9968 = null;var count__8119_9969 = 0;var i__8120_9970 = 0;while(true){
if((i__8120_9970 < count__8119_9969))
{var arg__6298__auto___9971 = cljs.core._nth.call(null,chunk__8118_9968,i__8120_9970);a__6297__auto__.push(arg__6298__auto___9971);
{
var G__9972 = seq__8117_9967;
var G__9973 = chunk__8118_9968;
var G__9974 = count__8119_9969;
var G__9975 = (i__8120_9970 + 1);
seq__8117_9967 = G__9972;
chunk__8118_9968 = G__9973;
count__8119_9969 = G__9974;
i__8120_9970 = G__9975;
continue;
}
} else
{var temp__4092__auto___9976 = cljs.core.seq.call(null,seq__8117_9967);if(temp__4092__auto___9976)
{var seq__8117_9977__$1 = temp__4092__auto___9976;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8117_9977__$1))
{var c__5638__auto___9978 = cljs.core.chunk_first.call(null,seq__8117_9977__$1);{
var G__9979 = cljs.core.chunk_rest.call(null,seq__8117_9977__$1);
var G__9980 = c__5638__auto___9978;
var G__9981 = cljs.core.count.call(null,c__5638__auto___9978);
var G__9982 = 0;
seq__8117_9967 = G__9979;
chunk__8118_9968 = G__9980;
count__8119_9969 = G__9981;
i__8120_9970 = G__9982;
continue;
}
} else
{var arg__6298__auto___9983 = cljs.core.first.call(null,seq__8117_9977__$1);a__6297__auto__.push(arg__6298__auto___9983);
{
var G__9984 = cljs.core.next.call(null,seq__8117_9977__$1);
var G__9985 = null;
var G__9986 = 0;
var G__9987 = 0;
seq__8117_9967 = G__9984;
chunk__8118_9968 = G__9985;
count__8119_9969 = G__9986;
i__8120_9970 = G__9987;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.meter.apply(null,a__6297__auto__);
};
var meter = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return meter__delegate.call(this,args__6296__auto__);};
meter.cljs$lang$maxFixedArity = 0;
meter.cljs$lang$applyTo = (function (arglist__9988){
var args__6296__auto__ = cljs.core.seq(arglist__9988);
return meter__delegate(args__6296__auto__);
});
meter.cljs$core$IFn$_invoke$arity$variadic = meter__delegate;
return meter;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.nav = (function() { 
var nav__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__8125_9989 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__8126_9990 = null;var count__8127_9991 = 0;var i__8128_9992 = 0;while(true){
if((i__8128_9992 < count__8127_9991))
{var arg__6298__auto___9993 = cljs.core._nth.call(null,chunk__8126_9990,i__8128_9992);a__6297__auto__.push(arg__6298__auto___9993);
{
var G__9994 = seq__8125_9989;
var G__9995 = chunk__8126_9990;
var G__9996 = count__8127_9991;
var G__9997 = (i__8128_9992 + 1);
seq__8125_9989 = G__9994;
chunk__8126_9990 = G__9995;
count__8127_9991 = G__9996;
i__8128_9992 = G__9997;
continue;
}
} else
{var temp__4092__auto___9998 = cljs.core.seq.call(null,seq__8125_9989);if(temp__4092__auto___9998)
{var seq__8125_9999__$1 = temp__4092__auto___9998;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8125_9999__$1))
{var c__5638__auto___10000 = cljs.core.chunk_first.call(null,seq__8125_9999__$1);{
var G__10001 = cljs.core.chunk_rest.call(null,seq__8125_9999__$1);
var G__10002 = c__5638__auto___10000;
var G__10003 = cljs.core.count.call(null,c__5638__auto___10000);
var G__10004 = 0;
seq__8125_9989 = G__10001;
chunk__8126_9990 = G__10002;
count__8127_9991 = G__10003;
i__8128_9992 = G__10004;
continue;
}
} else
{var arg__6298__auto___10005 = cljs.core.first.call(null,seq__8125_9999__$1);a__6297__auto__.push(arg__6298__auto___10005);
{
var G__10006 = cljs.core.next.call(null,seq__8125_9999__$1);
var G__10007 = null;
var G__10008 = 0;
var G__10009 = 0;
seq__8125_9989 = G__10006;
chunk__8126_9990 = G__10007;
count__8127_9991 = G__10008;
i__8128_9992 = G__10009;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.nav.apply(null,a__6297__auto__);
};
var nav = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return nav__delegate.call(this,args__6296__auto__);};
nav.cljs$lang$maxFixedArity = 0;
nav.cljs$lang$applyTo = (function (arglist__10010){
var args__6296__auto__ = cljs.core.seq(arglist__10010);
return nav__delegate(args__6296__auto__);
});
nav.cljs$core$IFn$_invoke$arity$variadic = nav__delegate;
return nav;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.noscript = (function() { 
var noscript__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__8133_10011 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__8134_10012 = null;var count__8135_10013 = 0;var i__8136_10014 = 0;while(true){
if((i__8136_10014 < count__8135_10013))
{var arg__6298__auto___10015 = cljs.core._nth.call(null,chunk__8134_10012,i__8136_10014);a__6297__auto__.push(arg__6298__auto___10015);
{
var G__10016 = seq__8133_10011;
var G__10017 = chunk__8134_10012;
var G__10018 = count__8135_10013;
var G__10019 = (i__8136_10014 + 1);
seq__8133_10011 = G__10016;
chunk__8134_10012 = G__10017;
count__8135_10013 = G__10018;
i__8136_10014 = G__10019;
continue;
}
} else
{var temp__4092__auto___10020 = cljs.core.seq.call(null,seq__8133_10011);if(temp__4092__auto___10020)
{var seq__8133_10021__$1 = temp__4092__auto___10020;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8133_10021__$1))
{var c__5638__auto___10022 = cljs.core.chunk_first.call(null,seq__8133_10021__$1);{
var G__10023 = cljs.core.chunk_rest.call(null,seq__8133_10021__$1);
var G__10024 = c__5638__auto___10022;
var G__10025 = cljs.core.count.call(null,c__5638__auto___10022);
var G__10026 = 0;
seq__8133_10011 = G__10023;
chunk__8134_10012 = G__10024;
count__8135_10013 = G__10025;
i__8136_10014 = G__10026;
continue;
}
} else
{var arg__6298__auto___10027 = cljs.core.first.call(null,seq__8133_10021__$1);a__6297__auto__.push(arg__6298__auto___10027);
{
var G__10028 = cljs.core.next.call(null,seq__8133_10021__$1);
var G__10029 = null;
var G__10030 = 0;
var G__10031 = 0;
seq__8133_10011 = G__10028;
chunk__8134_10012 = G__10029;
count__8135_10013 = G__10030;
i__8136_10014 = G__10031;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.noscript.apply(null,a__6297__auto__);
};
var noscript = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return noscript__delegate.call(this,args__6296__auto__);};
noscript.cljs$lang$maxFixedArity = 0;
noscript.cljs$lang$applyTo = (function (arglist__10032){
var args__6296__auto__ = cljs.core.seq(arglist__10032);
return noscript__delegate(args__6296__auto__);
});
noscript.cljs$core$IFn$_invoke$arity$variadic = noscript__delegate;
return noscript;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.object = (function() { 
var object__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__8141_10033 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__8142_10034 = null;var count__8143_10035 = 0;var i__8144_10036 = 0;while(true){
if((i__8144_10036 < count__8143_10035))
{var arg__6298__auto___10037 = cljs.core._nth.call(null,chunk__8142_10034,i__8144_10036);a__6297__auto__.push(arg__6298__auto___10037);
{
var G__10038 = seq__8141_10033;
var G__10039 = chunk__8142_10034;
var G__10040 = count__8143_10035;
var G__10041 = (i__8144_10036 + 1);
seq__8141_10033 = G__10038;
chunk__8142_10034 = G__10039;
count__8143_10035 = G__10040;
i__8144_10036 = G__10041;
continue;
}
} else
{var temp__4092__auto___10042 = cljs.core.seq.call(null,seq__8141_10033);if(temp__4092__auto___10042)
{var seq__8141_10043__$1 = temp__4092__auto___10042;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8141_10043__$1))
{var c__5638__auto___10044 = cljs.core.chunk_first.call(null,seq__8141_10043__$1);{
var G__10045 = cljs.core.chunk_rest.call(null,seq__8141_10043__$1);
var G__10046 = c__5638__auto___10044;
var G__10047 = cljs.core.count.call(null,c__5638__auto___10044);
var G__10048 = 0;
seq__8141_10033 = G__10045;
chunk__8142_10034 = G__10046;
count__8143_10035 = G__10047;
i__8144_10036 = G__10048;
continue;
}
} else
{var arg__6298__auto___10049 = cljs.core.first.call(null,seq__8141_10043__$1);a__6297__auto__.push(arg__6298__auto___10049);
{
var G__10050 = cljs.core.next.call(null,seq__8141_10043__$1);
var G__10051 = null;
var G__10052 = 0;
var G__10053 = 0;
seq__8141_10033 = G__10050;
chunk__8142_10034 = G__10051;
count__8143_10035 = G__10052;
i__8144_10036 = G__10053;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.object.apply(null,a__6297__auto__);
};
var object = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return object__delegate.call(this,args__6296__auto__);};
object.cljs$lang$maxFixedArity = 0;
object.cljs$lang$applyTo = (function (arglist__10054){
var args__6296__auto__ = cljs.core.seq(arglist__10054);
return object__delegate(args__6296__auto__);
});
object.cljs$core$IFn$_invoke$arity$variadic = object__delegate;
return object;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.ol = (function() { 
var ol__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__8149_10055 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__8150_10056 = null;var count__8151_10057 = 0;var i__8152_10058 = 0;while(true){
if((i__8152_10058 < count__8151_10057))
{var arg__6298__auto___10059 = cljs.core._nth.call(null,chunk__8150_10056,i__8152_10058);a__6297__auto__.push(arg__6298__auto___10059);
{
var G__10060 = seq__8149_10055;
var G__10061 = chunk__8150_10056;
var G__10062 = count__8151_10057;
var G__10063 = (i__8152_10058 + 1);
seq__8149_10055 = G__10060;
chunk__8150_10056 = G__10061;
count__8151_10057 = G__10062;
i__8152_10058 = G__10063;
continue;
}
} else
{var temp__4092__auto___10064 = cljs.core.seq.call(null,seq__8149_10055);if(temp__4092__auto___10064)
{var seq__8149_10065__$1 = temp__4092__auto___10064;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8149_10065__$1))
{var c__5638__auto___10066 = cljs.core.chunk_first.call(null,seq__8149_10065__$1);{
var G__10067 = cljs.core.chunk_rest.call(null,seq__8149_10065__$1);
var G__10068 = c__5638__auto___10066;
var G__10069 = cljs.core.count.call(null,c__5638__auto___10066);
var G__10070 = 0;
seq__8149_10055 = G__10067;
chunk__8150_10056 = G__10068;
count__8151_10057 = G__10069;
i__8152_10058 = G__10070;
continue;
}
} else
{var arg__6298__auto___10071 = cljs.core.first.call(null,seq__8149_10065__$1);a__6297__auto__.push(arg__6298__auto___10071);
{
var G__10072 = cljs.core.next.call(null,seq__8149_10065__$1);
var G__10073 = null;
var G__10074 = 0;
var G__10075 = 0;
seq__8149_10055 = G__10072;
chunk__8150_10056 = G__10073;
count__8151_10057 = G__10074;
i__8152_10058 = G__10075;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.ol.apply(null,a__6297__auto__);
};
var ol = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ol__delegate.call(this,args__6296__auto__);};
ol.cljs$lang$maxFixedArity = 0;
ol.cljs$lang$applyTo = (function (arglist__10076){
var args__6296__auto__ = cljs.core.seq(arglist__10076);
return ol__delegate(args__6296__auto__);
});
ol.cljs$core$IFn$_invoke$arity$variadic = ol__delegate;
return ol;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.optgroup = (function() { 
var optgroup__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__8157_10077 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__8158_10078 = null;var count__8159_10079 = 0;var i__8160_10080 = 0;while(true){
if((i__8160_10080 < count__8159_10079))
{var arg__6298__auto___10081 = cljs.core._nth.call(null,chunk__8158_10078,i__8160_10080);a__6297__auto__.push(arg__6298__auto___10081);
{
var G__10082 = seq__8157_10077;
var G__10083 = chunk__8158_10078;
var G__10084 = count__8159_10079;
var G__10085 = (i__8160_10080 + 1);
seq__8157_10077 = G__10082;
chunk__8158_10078 = G__10083;
count__8159_10079 = G__10084;
i__8160_10080 = G__10085;
continue;
}
} else
{var temp__4092__auto___10086 = cljs.core.seq.call(null,seq__8157_10077);if(temp__4092__auto___10086)
{var seq__8157_10087__$1 = temp__4092__auto___10086;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8157_10087__$1))
{var c__5638__auto___10088 = cljs.core.chunk_first.call(null,seq__8157_10087__$1);{
var G__10089 = cljs.core.chunk_rest.call(null,seq__8157_10087__$1);
var G__10090 = c__5638__auto___10088;
var G__10091 = cljs.core.count.call(null,c__5638__auto___10088);
var G__10092 = 0;
seq__8157_10077 = G__10089;
chunk__8158_10078 = G__10090;
count__8159_10079 = G__10091;
i__8160_10080 = G__10092;
continue;
}
} else
{var arg__6298__auto___10093 = cljs.core.first.call(null,seq__8157_10087__$1);a__6297__auto__.push(arg__6298__auto___10093);
{
var G__10094 = cljs.core.next.call(null,seq__8157_10087__$1);
var G__10095 = null;
var G__10096 = 0;
var G__10097 = 0;
seq__8157_10077 = G__10094;
chunk__8158_10078 = G__10095;
count__8159_10079 = G__10096;
i__8160_10080 = G__10097;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.optgroup.apply(null,a__6297__auto__);
};
var optgroup = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return optgroup__delegate.call(this,args__6296__auto__);};
optgroup.cljs$lang$maxFixedArity = 0;
optgroup.cljs$lang$applyTo = (function (arglist__10098){
var args__6296__auto__ = cljs.core.seq(arglist__10098);
return optgroup__delegate(args__6296__auto__);
});
optgroup.cljs$core$IFn$_invoke$arity$variadic = optgroup__delegate;
return optgroup;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.option = (function() { 
var option__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__8165_10099 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__8166_10100 = null;var count__8167_10101 = 0;var i__8168_10102 = 0;while(true){
if((i__8168_10102 < count__8167_10101))
{var arg__6298__auto___10103 = cljs.core._nth.call(null,chunk__8166_10100,i__8168_10102);a__6297__auto__.push(arg__6298__auto___10103);
{
var G__10104 = seq__8165_10099;
var G__10105 = chunk__8166_10100;
var G__10106 = count__8167_10101;
var G__10107 = (i__8168_10102 + 1);
seq__8165_10099 = G__10104;
chunk__8166_10100 = G__10105;
count__8167_10101 = G__10106;
i__8168_10102 = G__10107;
continue;
}
} else
{var temp__4092__auto___10108 = cljs.core.seq.call(null,seq__8165_10099);if(temp__4092__auto___10108)
{var seq__8165_10109__$1 = temp__4092__auto___10108;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8165_10109__$1))
{var c__5638__auto___10110 = cljs.core.chunk_first.call(null,seq__8165_10109__$1);{
var G__10111 = cljs.core.chunk_rest.call(null,seq__8165_10109__$1);
var G__10112 = c__5638__auto___10110;
var G__10113 = cljs.core.count.call(null,c__5638__auto___10110);
var G__10114 = 0;
seq__8165_10099 = G__10111;
chunk__8166_10100 = G__10112;
count__8167_10101 = G__10113;
i__8168_10102 = G__10114;
continue;
}
} else
{var arg__6298__auto___10115 = cljs.core.first.call(null,seq__8165_10109__$1);a__6297__auto__.push(arg__6298__auto___10115);
{
var G__10116 = cljs.core.next.call(null,seq__8165_10109__$1);
var G__10117 = null;
var G__10118 = 0;
var G__10119 = 0;
seq__8165_10099 = G__10116;
chunk__8166_10100 = G__10117;
count__8167_10101 = G__10118;
i__8168_10102 = G__10119;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.option.apply(null,a__6297__auto__);
};
var option = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return option__delegate.call(this,args__6296__auto__);};
option.cljs$lang$maxFixedArity = 0;
option.cljs$lang$applyTo = (function (arglist__10120){
var args__6296__auto__ = cljs.core.seq(arglist__10120);
return option__delegate(args__6296__auto__);
});
option.cljs$core$IFn$_invoke$arity$variadic = option__delegate;
return option;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.output = (function() { 
var output__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__8173_10121 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__8174_10122 = null;var count__8175_10123 = 0;var i__8176_10124 = 0;while(true){
if((i__8176_10124 < count__8175_10123))
{var arg__6298__auto___10125 = cljs.core._nth.call(null,chunk__8174_10122,i__8176_10124);a__6297__auto__.push(arg__6298__auto___10125);
{
var G__10126 = seq__8173_10121;
var G__10127 = chunk__8174_10122;
var G__10128 = count__8175_10123;
var G__10129 = (i__8176_10124 + 1);
seq__8173_10121 = G__10126;
chunk__8174_10122 = G__10127;
count__8175_10123 = G__10128;
i__8176_10124 = G__10129;
continue;
}
} else
{var temp__4092__auto___10130 = cljs.core.seq.call(null,seq__8173_10121);if(temp__4092__auto___10130)
{var seq__8173_10131__$1 = temp__4092__auto___10130;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8173_10131__$1))
{var c__5638__auto___10132 = cljs.core.chunk_first.call(null,seq__8173_10131__$1);{
var G__10133 = cljs.core.chunk_rest.call(null,seq__8173_10131__$1);
var G__10134 = c__5638__auto___10132;
var G__10135 = cljs.core.count.call(null,c__5638__auto___10132);
var G__10136 = 0;
seq__8173_10121 = G__10133;
chunk__8174_10122 = G__10134;
count__8175_10123 = G__10135;
i__8176_10124 = G__10136;
continue;
}
} else
{var arg__6298__auto___10137 = cljs.core.first.call(null,seq__8173_10131__$1);a__6297__auto__.push(arg__6298__auto___10137);
{
var G__10138 = cljs.core.next.call(null,seq__8173_10131__$1);
var G__10139 = null;
var G__10140 = 0;
var G__10141 = 0;
seq__8173_10121 = G__10138;
chunk__8174_10122 = G__10139;
count__8175_10123 = G__10140;
i__8176_10124 = G__10141;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.output.apply(null,a__6297__auto__);
};
var output = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return output__delegate.call(this,args__6296__auto__);};
output.cljs$lang$maxFixedArity = 0;
output.cljs$lang$applyTo = (function (arglist__10142){
var args__6296__auto__ = cljs.core.seq(arglist__10142);
return output__delegate(args__6296__auto__);
});
output.cljs$core$IFn$_invoke$arity$variadic = output__delegate;
return output;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.p = (function() { 
var p__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__8181_10143 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__8182_10144 = null;var count__8183_10145 = 0;var i__8184_10146 = 0;while(true){
if((i__8184_10146 < count__8183_10145))
{var arg__6298__auto___10147 = cljs.core._nth.call(null,chunk__8182_10144,i__8184_10146);a__6297__auto__.push(arg__6298__auto___10147);
{
var G__10148 = seq__8181_10143;
var G__10149 = chunk__8182_10144;
var G__10150 = count__8183_10145;
var G__10151 = (i__8184_10146 + 1);
seq__8181_10143 = G__10148;
chunk__8182_10144 = G__10149;
count__8183_10145 = G__10150;
i__8184_10146 = G__10151;
continue;
}
} else
{var temp__4092__auto___10152 = cljs.core.seq.call(null,seq__8181_10143);if(temp__4092__auto___10152)
{var seq__8181_10153__$1 = temp__4092__auto___10152;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8181_10153__$1))
{var c__5638__auto___10154 = cljs.core.chunk_first.call(null,seq__8181_10153__$1);{
var G__10155 = cljs.core.chunk_rest.call(null,seq__8181_10153__$1);
var G__10156 = c__5638__auto___10154;
var G__10157 = cljs.core.count.call(null,c__5638__auto___10154);
var G__10158 = 0;
seq__8181_10143 = G__10155;
chunk__8182_10144 = G__10156;
count__8183_10145 = G__10157;
i__8184_10146 = G__10158;
continue;
}
} else
{var arg__6298__auto___10159 = cljs.core.first.call(null,seq__8181_10153__$1);a__6297__auto__.push(arg__6298__auto___10159);
{
var G__10160 = cljs.core.next.call(null,seq__8181_10153__$1);
var G__10161 = null;
var G__10162 = 0;
var G__10163 = 0;
seq__8181_10143 = G__10160;
chunk__8182_10144 = G__10161;
count__8183_10145 = G__10162;
i__8184_10146 = G__10163;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.p.apply(null,a__6297__auto__);
};
var p = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return p__delegate.call(this,args__6296__auto__);};
p.cljs$lang$maxFixedArity = 0;
p.cljs$lang$applyTo = (function (arglist__10164){
var args__6296__auto__ = cljs.core.seq(arglist__10164);
return p__delegate(args__6296__auto__);
});
p.cljs$core$IFn$_invoke$arity$variadic = p__delegate;
return p;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.param = (function() { 
var param__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__8189_10165 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__8190_10166 = null;var count__8191_10167 = 0;var i__8192_10168 = 0;while(true){
if((i__8192_10168 < count__8191_10167))
{var arg__6298__auto___10169 = cljs.core._nth.call(null,chunk__8190_10166,i__8192_10168);a__6297__auto__.push(arg__6298__auto___10169);
{
var G__10170 = seq__8189_10165;
var G__10171 = chunk__8190_10166;
var G__10172 = count__8191_10167;
var G__10173 = (i__8192_10168 + 1);
seq__8189_10165 = G__10170;
chunk__8190_10166 = G__10171;
count__8191_10167 = G__10172;
i__8192_10168 = G__10173;
continue;
}
} else
{var temp__4092__auto___10174 = cljs.core.seq.call(null,seq__8189_10165);if(temp__4092__auto___10174)
{var seq__8189_10175__$1 = temp__4092__auto___10174;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8189_10175__$1))
{var c__5638__auto___10176 = cljs.core.chunk_first.call(null,seq__8189_10175__$1);{
var G__10177 = cljs.core.chunk_rest.call(null,seq__8189_10175__$1);
var G__10178 = c__5638__auto___10176;
var G__10179 = cljs.core.count.call(null,c__5638__auto___10176);
var G__10180 = 0;
seq__8189_10165 = G__10177;
chunk__8190_10166 = G__10178;
count__8191_10167 = G__10179;
i__8192_10168 = G__10180;
continue;
}
} else
{var arg__6298__auto___10181 = cljs.core.first.call(null,seq__8189_10175__$1);a__6297__auto__.push(arg__6298__auto___10181);
{
var G__10182 = cljs.core.next.call(null,seq__8189_10175__$1);
var G__10183 = null;
var G__10184 = 0;
var G__10185 = 0;
seq__8189_10165 = G__10182;
chunk__8190_10166 = G__10183;
count__8191_10167 = G__10184;
i__8192_10168 = G__10185;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.param.apply(null,a__6297__auto__);
};
var param = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return param__delegate.call(this,args__6296__auto__);};
param.cljs$lang$maxFixedArity = 0;
param.cljs$lang$applyTo = (function (arglist__10186){
var args__6296__auto__ = cljs.core.seq(arglist__10186);
return param__delegate(args__6296__auto__);
});
param.cljs$core$IFn$_invoke$arity$variadic = param__delegate;
return param;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.pre = (function() { 
var pre__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__8197_10187 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__8198_10188 = null;var count__8199_10189 = 0;var i__8200_10190 = 0;while(true){
if((i__8200_10190 < count__8199_10189))
{var arg__6298__auto___10191 = cljs.core._nth.call(null,chunk__8198_10188,i__8200_10190);a__6297__auto__.push(arg__6298__auto___10191);
{
var G__10192 = seq__8197_10187;
var G__10193 = chunk__8198_10188;
var G__10194 = count__8199_10189;
var G__10195 = (i__8200_10190 + 1);
seq__8197_10187 = G__10192;
chunk__8198_10188 = G__10193;
count__8199_10189 = G__10194;
i__8200_10190 = G__10195;
continue;
}
} else
{var temp__4092__auto___10196 = cljs.core.seq.call(null,seq__8197_10187);if(temp__4092__auto___10196)
{var seq__8197_10197__$1 = temp__4092__auto___10196;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8197_10197__$1))
{var c__5638__auto___10198 = cljs.core.chunk_first.call(null,seq__8197_10197__$1);{
var G__10199 = cljs.core.chunk_rest.call(null,seq__8197_10197__$1);
var G__10200 = c__5638__auto___10198;
var G__10201 = cljs.core.count.call(null,c__5638__auto___10198);
var G__10202 = 0;
seq__8197_10187 = G__10199;
chunk__8198_10188 = G__10200;
count__8199_10189 = G__10201;
i__8200_10190 = G__10202;
continue;
}
} else
{var arg__6298__auto___10203 = cljs.core.first.call(null,seq__8197_10197__$1);a__6297__auto__.push(arg__6298__auto___10203);
{
var G__10204 = cljs.core.next.call(null,seq__8197_10197__$1);
var G__10205 = null;
var G__10206 = 0;
var G__10207 = 0;
seq__8197_10187 = G__10204;
chunk__8198_10188 = G__10205;
count__8199_10189 = G__10206;
i__8200_10190 = G__10207;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.pre.apply(null,a__6297__auto__);
};
var pre = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return pre__delegate.call(this,args__6296__auto__);};
pre.cljs$lang$maxFixedArity = 0;
pre.cljs$lang$applyTo = (function (arglist__10208){
var args__6296__auto__ = cljs.core.seq(arglist__10208);
return pre__delegate(args__6296__auto__);
});
pre.cljs$core$IFn$_invoke$arity$variadic = pre__delegate;
return pre;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.progress = (function() { 
var progress__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__8205_10209 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__8206_10210 = null;var count__8207_10211 = 0;var i__8208_10212 = 0;while(true){
if((i__8208_10212 < count__8207_10211))
{var arg__6298__auto___10213 = cljs.core._nth.call(null,chunk__8206_10210,i__8208_10212);a__6297__auto__.push(arg__6298__auto___10213);
{
var G__10214 = seq__8205_10209;
var G__10215 = chunk__8206_10210;
var G__10216 = count__8207_10211;
var G__10217 = (i__8208_10212 + 1);
seq__8205_10209 = G__10214;
chunk__8206_10210 = G__10215;
count__8207_10211 = G__10216;
i__8208_10212 = G__10217;
continue;
}
} else
{var temp__4092__auto___10218 = cljs.core.seq.call(null,seq__8205_10209);if(temp__4092__auto___10218)
{var seq__8205_10219__$1 = temp__4092__auto___10218;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8205_10219__$1))
{var c__5638__auto___10220 = cljs.core.chunk_first.call(null,seq__8205_10219__$1);{
var G__10221 = cljs.core.chunk_rest.call(null,seq__8205_10219__$1);
var G__10222 = c__5638__auto___10220;
var G__10223 = cljs.core.count.call(null,c__5638__auto___10220);
var G__10224 = 0;
seq__8205_10209 = G__10221;
chunk__8206_10210 = G__10222;
count__8207_10211 = G__10223;
i__8208_10212 = G__10224;
continue;
}
} else
{var arg__6298__auto___10225 = cljs.core.first.call(null,seq__8205_10219__$1);a__6297__auto__.push(arg__6298__auto___10225);
{
var G__10226 = cljs.core.next.call(null,seq__8205_10219__$1);
var G__10227 = null;
var G__10228 = 0;
var G__10229 = 0;
seq__8205_10209 = G__10226;
chunk__8206_10210 = G__10227;
count__8207_10211 = G__10228;
i__8208_10212 = G__10229;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.progress.apply(null,a__6297__auto__);
};
var progress = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return progress__delegate.call(this,args__6296__auto__);};
progress.cljs$lang$maxFixedArity = 0;
progress.cljs$lang$applyTo = (function (arglist__10230){
var args__6296__auto__ = cljs.core.seq(arglist__10230);
return progress__delegate(args__6296__auto__);
});
progress.cljs$core$IFn$_invoke$arity$variadic = progress__delegate;
return progress;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.q = (function() { 
var q__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__8213_10231 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__8214_10232 = null;var count__8215_10233 = 0;var i__8216_10234 = 0;while(true){
if((i__8216_10234 < count__8215_10233))
{var arg__6298__auto___10235 = cljs.core._nth.call(null,chunk__8214_10232,i__8216_10234);a__6297__auto__.push(arg__6298__auto___10235);
{
var G__10236 = seq__8213_10231;
var G__10237 = chunk__8214_10232;
var G__10238 = count__8215_10233;
var G__10239 = (i__8216_10234 + 1);
seq__8213_10231 = G__10236;
chunk__8214_10232 = G__10237;
count__8215_10233 = G__10238;
i__8216_10234 = G__10239;
continue;
}
} else
{var temp__4092__auto___10240 = cljs.core.seq.call(null,seq__8213_10231);if(temp__4092__auto___10240)
{var seq__8213_10241__$1 = temp__4092__auto___10240;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8213_10241__$1))
{var c__5638__auto___10242 = cljs.core.chunk_first.call(null,seq__8213_10241__$1);{
var G__10243 = cljs.core.chunk_rest.call(null,seq__8213_10241__$1);
var G__10244 = c__5638__auto___10242;
var G__10245 = cljs.core.count.call(null,c__5638__auto___10242);
var G__10246 = 0;
seq__8213_10231 = G__10243;
chunk__8214_10232 = G__10244;
count__8215_10233 = G__10245;
i__8216_10234 = G__10246;
continue;
}
} else
{var arg__6298__auto___10247 = cljs.core.first.call(null,seq__8213_10241__$1);a__6297__auto__.push(arg__6298__auto___10247);
{
var G__10248 = cljs.core.next.call(null,seq__8213_10241__$1);
var G__10249 = null;
var G__10250 = 0;
var G__10251 = 0;
seq__8213_10231 = G__10248;
chunk__8214_10232 = G__10249;
count__8215_10233 = G__10250;
i__8216_10234 = G__10251;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.q.apply(null,a__6297__auto__);
};
var q = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return q__delegate.call(this,args__6296__auto__);};
q.cljs$lang$maxFixedArity = 0;
q.cljs$lang$applyTo = (function (arglist__10252){
var args__6296__auto__ = cljs.core.seq(arglist__10252);
return q__delegate(args__6296__auto__);
});
q.cljs$core$IFn$_invoke$arity$variadic = q__delegate;
return q;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.rp = (function() { 
var rp__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__8221_10253 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__8222_10254 = null;var count__8223_10255 = 0;var i__8224_10256 = 0;while(true){
if((i__8224_10256 < count__8223_10255))
{var arg__6298__auto___10257 = cljs.core._nth.call(null,chunk__8222_10254,i__8224_10256);a__6297__auto__.push(arg__6298__auto___10257);
{
var G__10258 = seq__8221_10253;
var G__10259 = chunk__8222_10254;
var G__10260 = count__8223_10255;
var G__10261 = (i__8224_10256 + 1);
seq__8221_10253 = G__10258;
chunk__8222_10254 = G__10259;
count__8223_10255 = G__10260;
i__8224_10256 = G__10261;
continue;
}
} else
{var temp__4092__auto___10262 = cljs.core.seq.call(null,seq__8221_10253);if(temp__4092__auto___10262)
{var seq__8221_10263__$1 = temp__4092__auto___10262;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8221_10263__$1))
{var c__5638__auto___10264 = cljs.core.chunk_first.call(null,seq__8221_10263__$1);{
var G__10265 = cljs.core.chunk_rest.call(null,seq__8221_10263__$1);
var G__10266 = c__5638__auto___10264;
var G__10267 = cljs.core.count.call(null,c__5638__auto___10264);
var G__10268 = 0;
seq__8221_10253 = G__10265;
chunk__8222_10254 = G__10266;
count__8223_10255 = G__10267;
i__8224_10256 = G__10268;
continue;
}
} else
{var arg__6298__auto___10269 = cljs.core.first.call(null,seq__8221_10263__$1);a__6297__auto__.push(arg__6298__auto___10269);
{
var G__10270 = cljs.core.next.call(null,seq__8221_10263__$1);
var G__10271 = null;
var G__10272 = 0;
var G__10273 = 0;
seq__8221_10253 = G__10270;
chunk__8222_10254 = G__10271;
count__8223_10255 = G__10272;
i__8224_10256 = G__10273;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.rp.apply(null,a__6297__auto__);
};
var rp = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return rp__delegate.call(this,args__6296__auto__);};
rp.cljs$lang$maxFixedArity = 0;
rp.cljs$lang$applyTo = (function (arglist__10274){
var args__6296__auto__ = cljs.core.seq(arglist__10274);
return rp__delegate(args__6296__auto__);
});
rp.cljs$core$IFn$_invoke$arity$variadic = rp__delegate;
return rp;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.rt = (function() { 
var rt__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__8229_10275 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__8230_10276 = null;var count__8231_10277 = 0;var i__8232_10278 = 0;while(true){
if((i__8232_10278 < count__8231_10277))
{var arg__6298__auto___10279 = cljs.core._nth.call(null,chunk__8230_10276,i__8232_10278);a__6297__auto__.push(arg__6298__auto___10279);
{
var G__10280 = seq__8229_10275;
var G__10281 = chunk__8230_10276;
var G__10282 = count__8231_10277;
var G__10283 = (i__8232_10278 + 1);
seq__8229_10275 = G__10280;
chunk__8230_10276 = G__10281;
count__8231_10277 = G__10282;
i__8232_10278 = G__10283;
continue;
}
} else
{var temp__4092__auto___10284 = cljs.core.seq.call(null,seq__8229_10275);if(temp__4092__auto___10284)
{var seq__8229_10285__$1 = temp__4092__auto___10284;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8229_10285__$1))
{var c__5638__auto___10286 = cljs.core.chunk_first.call(null,seq__8229_10285__$1);{
var G__10287 = cljs.core.chunk_rest.call(null,seq__8229_10285__$1);
var G__10288 = c__5638__auto___10286;
var G__10289 = cljs.core.count.call(null,c__5638__auto___10286);
var G__10290 = 0;
seq__8229_10275 = G__10287;
chunk__8230_10276 = G__10288;
count__8231_10277 = G__10289;
i__8232_10278 = G__10290;
continue;
}
} else
{var arg__6298__auto___10291 = cljs.core.first.call(null,seq__8229_10285__$1);a__6297__auto__.push(arg__6298__auto___10291);
{
var G__10292 = cljs.core.next.call(null,seq__8229_10285__$1);
var G__10293 = null;
var G__10294 = 0;
var G__10295 = 0;
seq__8229_10275 = G__10292;
chunk__8230_10276 = G__10293;
count__8231_10277 = G__10294;
i__8232_10278 = G__10295;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.rt.apply(null,a__6297__auto__);
};
var rt = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return rt__delegate.call(this,args__6296__auto__);};
rt.cljs$lang$maxFixedArity = 0;
rt.cljs$lang$applyTo = (function (arglist__10296){
var args__6296__auto__ = cljs.core.seq(arglist__10296);
return rt__delegate(args__6296__auto__);
});
rt.cljs$core$IFn$_invoke$arity$variadic = rt__delegate;
return rt;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.ruby = (function() { 
var ruby__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__8237_10297 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__8238_10298 = null;var count__8239_10299 = 0;var i__8240_10300 = 0;while(true){
if((i__8240_10300 < count__8239_10299))
{var arg__6298__auto___10301 = cljs.core._nth.call(null,chunk__8238_10298,i__8240_10300);a__6297__auto__.push(arg__6298__auto___10301);
{
var G__10302 = seq__8237_10297;
var G__10303 = chunk__8238_10298;
var G__10304 = count__8239_10299;
var G__10305 = (i__8240_10300 + 1);
seq__8237_10297 = G__10302;
chunk__8238_10298 = G__10303;
count__8239_10299 = G__10304;
i__8240_10300 = G__10305;
continue;
}
} else
{var temp__4092__auto___10306 = cljs.core.seq.call(null,seq__8237_10297);if(temp__4092__auto___10306)
{var seq__8237_10307__$1 = temp__4092__auto___10306;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8237_10307__$1))
{var c__5638__auto___10308 = cljs.core.chunk_first.call(null,seq__8237_10307__$1);{
var G__10309 = cljs.core.chunk_rest.call(null,seq__8237_10307__$1);
var G__10310 = c__5638__auto___10308;
var G__10311 = cljs.core.count.call(null,c__5638__auto___10308);
var G__10312 = 0;
seq__8237_10297 = G__10309;
chunk__8238_10298 = G__10310;
count__8239_10299 = G__10311;
i__8240_10300 = G__10312;
continue;
}
} else
{var arg__6298__auto___10313 = cljs.core.first.call(null,seq__8237_10307__$1);a__6297__auto__.push(arg__6298__auto___10313);
{
var G__10314 = cljs.core.next.call(null,seq__8237_10307__$1);
var G__10315 = null;
var G__10316 = 0;
var G__10317 = 0;
seq__8237_10297 = G__10314;
chunk__8238_10298 = G__10315;
count__8239_10299 = G__10316;
i__8240_10300 = G__10317;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.ruby.apply(null,a__6297__auto__);
};
var ruby = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ruby__delegate.call(this,args__6296__auto__);};
ruby.cljs$lang$maxFixedArity = 0;
ruby.cljs$lang$applyTo = (function (arglist__10318){
var args__6296__auto__ = cljs.core.seq(arglist__10318);
return ruby__delegate(args__6296__auto__);
});
ruby.cljs$core$IFn$_invoke$arity$variadic = ruby__delegate;
return ruby;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.s = (function() { 
var s__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__8245_10319 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__8246_10320 = null;var count__8247_10321 = 0;var i__8248_10322 = 0;while(true){
if((i__8248_10322 < count__8247_10321))
{var arg__6298__auto___10323 = cljs.core._nth.call(null,chunk__8246_10320,i__8248_10322);a__6297__auto__.push(arg__6298__auto___10323);
{
var G__10324 = seq__8245_10319;
var G__10325 = chunk__8246_10320;
var G__10326 = count__8247_10321;
var G__10327 = (i__8248_10322 + 1);
seq__8245_10319 = G__10324;
chunk__8246_10320 = G__10325;
count__8247_10321 = G__10326;
i__8248_10322 = G__10327;
continue;
}
} else
{var temp__4092__auto___10328 = cljs.core.seq.call(null,seq__8245_10319);if(temp__4092__auto___10328)
{var seq__8245_10329__$1 = temp__4092__auto___10328;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8245_10329__$1))
{var c__5638__auto___10330 = cljs.core.chunk_first.call(null,seq__8245_10329__$1);{
var G__10331 = cljs.core.chunk_rest.call(null,seq__8245_10329__$1);
var G__10332 = c__5638__auto___10330;
var G__10333 = cljs.core.count.call(null,c__5638__auto___10330);
var G__10334 = 0;
seq__8245_10319 = G__10331;
chunk__8246_10320 = G__10332;
count__8247_10321 = G__10333;
i__8248_10322 = G__10334;
continue;
}
} else
{var arg__6298__auto___10335 = cljs.core.first.call(null,seq__8245_10329__$1);a__6297__auto__.push(arg__6298__auto___10335);
{
var G__10336 = cljs.core.next.call(null,seq__8245_10329__$1);
var G__10337 = null;
var G__10338 = 0;
var G__10339 = 0;
seq__8245_10319 = G__10336;
chunk__8246_10320 = G__10337;
count__8247_10321 = G__10338;
i__8248_10322 = G__10339;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.s.apply(null,a__6297__auto__);
};
var s = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return s__delegate.call(this,args__6296__auto__);};
s.cljs$lang$maxFixedArity = 0;
s.cljs$lang$applyTo = (function (arglist__10340){
var args__6296__auto__ = cljs.core.seq(arglist__10340);
return s__delegate(args__6296__auto__);
});
s.cljs$core$IFn$_invoke$arity$variadic = s__delegate;
return s;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.samp = (function() { 
var samp__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__8253_10341 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__8254_10342 = null;var count__8255_10343 = 0;var i__8256_10344 = 0;while(true){
if((i__8256_10344 < count__8255_10343))
{var arg__6298__auto___10345 = cljs.core._nth.call(null,chunk__8254_10342,i__8256_10344);a__6297__auto__.push(arg__6298__auto___10345);
{
var G__10346 = seq__8253_10341;
var G__10347 = chunk__8254_10342;
var G__10348 = count__8255_10343;
var G__10349 = (i__8256_10344 + 1);
seq__8253_10341 = G__10346;
chunk__8254_10342 = G__10347;
count__8255_10343 = G__10348;
i__8256_10344 = G__10349;
continue;
}
} else
{var temp__4092__auto___10350 = cljs.core.seq.call(null,seq__8253_10341);if(temp__4092__auto___10350)
{var seq__8253_10351__$1 = temp__4092__auto___10350;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8253_10351__$1))
{var c__5638__auto___10352 = cljs.core.chunk_first.call(null,seq__8253_10351__$1);{
var G__10353 = cljs.core.chunk_rest.call(null,seq__8253_10351__$1);
var G__10354 = c__5638__auto___10352;
var G__10355 = cljs.core.count.call(null,c__5638__auto___10352);
var G__10356 = 0;
seq__8253_10341 = G__10353;
chunk__8254_10342 = G__10354;
count__8255_10343 = G__10355;
i__8256_10344 = G__10356;
continue;
}
} else
{var arg__6298__auto___10357 = cljs.core.first.call(null,seq__8253_10351__$1);a__6297__auto__.push(arg__6298__auto___10357);
{
var G__10358 = cljs.core.next.call(null,seq__8253_10351__$1);
var G__10359 = null;
var G__10360 = 0;
var G__10361 = 0;
seq__8253_10341 = G__10358;
chunk__8254_10342 = G__10359;
count__8255_10343 = G__10360;
i__8256_10344 = G__10361;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.samp.apply(null,a__6297__auto__);
};
var samp = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return samp__delegate.call(this,args__6296__auto__);};
samp.cljs$lang$maxFixedArity = 0;
samp.cljs$lang$applyTo = (function (arglist__10362){
var args__6296__auto__ = cljs.core.seq(arglist__10362);
return samp__delegate(args__6296__auto__);
});
samp.cljs$core$IFn$_invoke$arity$variadic = samp__delegate;
return samp;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.script = (function() { 
var script__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__8261_10363 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__8262_10364 = null;var count__8263_10365 = 0;var i__8264_10366 = 0;while(true){
if((i__8264_10366 < count__8263_10365))
{var arg__6298__auto___10367 = cljs.core._nth.call(null,chunk__8262_10364,i__8264_10366);a__6297__auto__.push(arg__6298__auto___10367);
{
var G__10368 = seq__8261_10363;
var G__10369 = chunk__8262_10364;
var G__10370 = count__8263_10365;
var G__10371 = (i__8264_10366 + 1);
seq__8261_10363 = G__10368;
chunk__8262_10364 = G__10369;
count__8263_10365 = G__10370;
i__8264_10366 = G__10371;
continue;
}
} else
{var temp__4092__auto___10372 = cljs.core.seq.call(null,seq__8261_10363);if(temp__4092__auto___10372)
{var seq__8261_10373__$1 = temp__4092__auto___10372;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8261_10373__$1))
{var c__5638__auto___10374 = cljs.core.chunk_first.call(null,seq__8261_10373__$1);{
var G__10375 = cljs.core.chunk_rest.call(null,seq__8261_10373__$1);
var G__10376 = c__5638__auto___10374;
var G__10377 = cljs.core.count.call(null,c__5638__auto___10374);
var G__10378 = 0;
seq__8261_10363 = G__10375;
chunk__8262_10364 = G__10376;
count__8263_10365 = G__10377;
i__8264_10366 = G__10378;
continue;
}
} else
{var arg__6298__auto___10379 = cljs.core.first.call(null,seq__8261_10373__$1);a__6297__auto__.push(arg__6298__auto___10379);
{
var G__10380 = cljs.core.next.call(null,seq__8261_10373__$1);
var G__10381 = null;
var G__10382 = 0;
var G__10383 = 0;
seq__8261_10363 = G__10380;
chunk__8262_10364 = G__10381;
count__8263_10365 = G__10382;
i__8264_10366 = G__10383;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.script.apply(null,a__6297__auto__);
};
var script = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return script__delegate.call(this,args__6296__auto__);};
script.cljs$lang$maxFixedArity = 0;
script.cljs$lang$applyTo = (function (arglist__10384){
var args__6296__auto__ = cljs.core.seq(arglist__10384);
return script__delegate(args__6296__auto__);
});
script.cljs$core$IFn$_invoke$arity$variadic = script__delegate;
return script;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.section = (function() { 
var section__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__8269_10385 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__8270_10386 = null;var count__8271_10387 = 0;var i__8272_10388 = 0;while(true){
if((i__8272_10388 < count__8271_10387))
{var arg__6298__auto___10389 = cljs.core._nth.call(null,chunk__8270_10386,i__8272_10388);a__6297__auto__.push(arg__6298__auto___10389);
{
var G__10390 = seq__8269_10385;
var G__10391 = chunk__8270_10386;
var G__10392 = count__8271_10387;
var G__10393 = (i__8272_10388 + 1);
seq__8269_10385 = G__10390;
chunk__8270_10386 = G__10391;
count__8271_10387 = G__10392;
i__8272_10388 = G__10393;
continue;
}
} else
{var temp__4092__auto___10394 = cljs.core.seq.call(null,seq__8269_10385);if(temp__4092__auto___10394)
{var seq__8269_10395__$1 = temp__4092__auto___10394;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8269_10395__$1))
{var c__5638__auto___10396 = cljs.core.chunk_first.call(null,seq__8269_10395__$1);{
var G__10397 = cljs.core.chunk_rest.call(null,seq__8269_10395__$1);
var G__10398 = c__5638__auto___10396;
var G__10399 = cljs.core.count.call(null,c__5638__auto___10396);
var G__10400 = 0;
seq__8269_10385 = G__10397;
chunk__8270_10386 = G__10398;
count__8271_10387 = G__10399;
i__8272_10388 = G__10400;
continue;
}
} else
{var arg__6298__auto___10401 = cljs.core.first.call(null,seq__8269_10395__$1);a__6297__auto__.push(arg__6298__auto___10401);
{
var G__10402 = cljs.core.next.call(null,seq__8269_10395__$1);
var G__10403 = null;
var G__10404 = 0;
var G__10405 = 0;
seq__8269_10385 = G__10402;
chunk__8270_10386 = G__10403;
count__8271_10387 = G__10404;
i__8272_10388 = G__10405;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.section.apply(null,a__6297__auto__);
};
var section = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return section__delegate.call(this,args__6296__auto__);};
section.cljs$lang$maxFixedArity = 0;
section.cljs$lang$applyTo = (function (arglist__10406){
var args__6296__auto__ = cljs.core.seq(arglist__10406);
return section__delegate(args__6296__auto__);
});
section.cljs$core$IFn$_invoke$arity$variadic = section__delegate;
return section;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.select = (function() { 
var select__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__8277_10407 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__8278_10408 = null;var count__8279_10409 = 0;var i__8280_10410 = 0;while(true){
if((i__8280_10410 < count__8279_10409))
{var arg__6298__auto___10411 = cljs.core._nth.call(null,chunk__8278_10408,i__8280_10410);a__6297__auto__.push(arg__6298__auto___10411);
{
var G__10412 = seq__8277_10407;
var G__10413 = chunk__8278_10408;
var G__10414 = count__8279_10409;
var G__10415 = (i__8280_10410 + 1);
seq__8277_10407 = G__10412;
chunk__8278_10408 = G__10413;
count__8279_10409 = G__10414;
i__8280_10410 = G__10415;
continue;
}
} else
{var temp__4092__auto___10416 = cljs.core.seq.call(null,seq__8277_10407);if(temp__4092__auto___10416)
{var seq__8277_10417__$1 = temp__4092__auto___10416;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8277_10417__$1))
{var c__5638__auto___10418 = cljs.core.chunk_first.call(null,seq__8277_10417__$1);{
var G__10419 = cljs.core.chunk_rest.call(null,seq__8277_10417__$1);
var G__10420 = c__5638__auto___10418;
var G__10421 = cljs.core.count.call(null,c__5638__auto___10418);
var G__10422 = 0;
seq__8277_10407 = G__10419;
chunk__8278_10408 = G__10420;
count__8279_10409 = G__10421;
i__8280_10410 = G__10422;
continue;
}
} else
{var arg__6298__auto___10423 = cljs.core.first.call(null,seq__8277_10417__$1);a__6297__auto__.push(arg__6298__auto___10423);
{
var G__10424 = cljs.core.next.call(null,seq__8277_10417__$1);
var G__10425 = null;
var G__10426 = 0;
var G__10427 = 0;
seq__8277_10407 = G__10424;
chunk__8278_10408 = G__10425;
count__8279_10409 = G__10426;
i__8280_10410 = G__10427;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.select.apply(null,a__6297__auto__);
};
var select = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return select__delegate.call(this,args__6296__auto__);};
select.cljs$lang$maxFixedArity = 0;
select.cljs$lang$applyTo = (function (arglist__10428){
var args__6296__auto__ = cljs.core.seq(arglist__10428);
return select__delegate(args__6296__auto__);
});
select.cljs$core$IFn$_invoke$arity$variadic = select__delegate;
return select;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.small = (function() { 
var small__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__8285_10429 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__8286_10430 = null;var count__8287_10431 = 0;var i__8288_10432 = 0;while(true){
if((i__8288_10432 < count__8287_10431))
{var arg__6298__auto___10433 = cljs.core._nth.call(null,chunk__8286_10430,i__8288_10432);a__6297__auto__.push(arg__6298__auto___10433);
{
var G__10434 = seq__8285_10429;
var G__10435 = chunk__8286_10430;
var G__10436 = count__8287_10431;
var G__10437 = (i__8288_10432 + 1);
seq__8285_10429 = G__10434;
chunk__8286_10430 = G__10435;
count__8287_10431 = G__10436;
i__8288_10432 = G__10437;
continue;
}
} else
{var temp__4092__auto___10438 = cljs.core.seq.call(null,seq__8285_10429);if(temp__4092__auto___10438)
{var seq__8285_10439__$1 = temp__4092__auto___10438;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8285_10439__$1))
{var c__5638__auto___10440 = cljs.core.chunk_first.call(null,seq__8285_10439__$1);{
var G__10441 = cljs.core.chunk_rest.call(null,seq__8285_10439__$1);
var G__10442 = c__5638__auto___10440;
var G__10443 = cljs.core.count.call(null,c__5638__auto___10440);
var G__10444 = 0;
seq__8285_10429 = G__10441;
chunk__8286_10430 = G__10442;
count__8287_10431 = G__10443;
i__8288_10432 = G__10444;
continue;
}
} else
{var arg__6298__auto___10445 = cljs.core.first.call(null,seq__8285_10439__$1);a__6297__auto__.push(arg__6298__auto___10445);
{
var G__10446 = cljs.core.next.call(null,seq__8285_10439__$1);
var G__10447 = null;
var G__10448 = 0;
var G__10449 = 0;
seq__8285_10429 = G__10446;
chunk__8286_10430 = G__10447;
count__8287_10431 = G__10448;
i__8288_10432 = G__10449;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.small.apply(null,a__6297__auto__);
};
var small = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return small__delegate.call(this,args__6296__auto__);};
small.cljs$lang$maxFixedArity = 0;
small.cljs$lang$applyTo = (function (arglist__10450){
var args__6296__auto__ = cljs.core.seq(arglist__10450);
return small__delegate(args__6296__auto__);
});
small.cljs$core$IFn$_invoke$arity$variadic = small__delegate;
return small;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.source = (function() { 
var source__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__8293_10451 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__8294_10452 = null;var count__8295_10453 = 0;var i__8296_10454 = 0;while(true){
if((i__8296_10454 < count__8295_10453))
{var arg__6298__auto___10455 = cljs.core._nth.call(null,chunk__8294_10452,i__8296_10454);a__6297__auto__.push(arg__6298__auto___10455);
{
var G__10456 = seq__8293_10451;
var G__10457 = chunk__8294_10452;
var G__10458 = count__8295_10453;
var G__10459 = (i__8296_10454 + 1);
seq__8293_10451 = G__10456;
chunk__8294_10452 = G__10457;
count__8295_10453 = G__10458;
i__8296_10454 = G__10459;
continue;
}
} else
{var temp__4092__auto___10460 = cljs.core.seq.call(null,seq__8293_10451);if(temp__4092__auto___10460)
{var seq__8293_10461__$1 = temp__4092__auto___10460;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8293_10461__$1))
{var c__5638__auto___10462 = cljs.core.chunk_first.call(null,seq__8293_10461__$1);{
var G__10463 = cljs.core.chunk_rest.call(null,seq__8293_10461__$1);
var G__10464 = c__5638__auto___10462;
var G__10465 = cljs.core.count.call(null,c__5638__auto___10462);
var G__10466 = 0;
seq__8293_10451 = G__10463;
chunk__8294_10452 = G__10464;
count__8295_10453 = G__10465;
i__8296_10454 = G__10466;
continue;
}
} else
{var arg__6298__auto___10467 = cljs.core.first.call(null,seq__8293_10461__$1);a__6297__auto__.push(arg__6298__auto___10467);
{
var G__10468 = cljs.core.next.call(null,seq__8293_10461__$1);
var G__10469 = null;
var G__10470 = 0;
var G__10471 = 0;
seq__8293_10451 = G__10468;
chunk__8294_10452 = G__10469;
count__8295_10453 = G__10470;
i__8296_10454 = G__10471;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.source.apply(null,a__6297__auto__);
};
var source = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return source__delegate.call(this,args__6296__auto__);};
source.cljs$lang$maxFixedArity = 0;
source.cljs$lang$applyTo = (function (arglist__10472){
var args__6296__auto__ = cljs.core.seq(arglist__10472);
return source__delegate(args__6296__auto__);
});
source.cljs$core$IFn$_invoke$arity$variadic = source__delegate;
return source;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.span = (function() { 
var span__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__8301_10473 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__8302_10474 = null;var count__8303_10475 = 0;var i__8304_10476 = 0;while(true){
if((i__8304_10476 < count__8303_10475))
{var arg__6298__auto___10477 = cljs.core._nth.call(null,chunk__8302_10474,i__8304_10476);a__6297__auto__.push(arg__6298__auto___10477);
{
var G__10478 = seq__8301_10473;
var G__10479 = chunk__8302_10474;
var G__10480 = count__8303_10475;
var G__10481 = (i__8304_10476 + 1);
seq__8301_10473 = G__10478;
chunk__8302_10474 = G__10479;
count__8303_10475 = G__10480;
i__8304_10476 = G__10481;
continue;
}
} else
{var temp__4092__auto___10482 = cljs.core.seq.call(null,seq__8301_10473);if(temp__4092__auto___10482)
{var seq__8301_10483__$1 = temp__4092__auto___10482;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8301_10483__$1))
{var c__5638__auto___10484 = cljs.core.chunk_first.call(null,seq__8301_10483__$1);{
var G__10485 = cljs.core.chunk_rest.call(null,seq__8301_10483__$1);
var G__10486 = c__5638__auto___10484;
var G__10487 = cljs.core.count.call(null,c__5638__auto___10484);
var G__10488 = 0;
seq__8301_10473 = G__10485;
chunk__8302_10474 = G__10486;
count__8303_10475 = G__10487;
i__8304_10476 = G__10488;
continue;
}
} else
{var arg__6298__auto___10489 = cljs.core.first.call(null,seq__8301_10483__$1);a__6297__auto__.push(arg__6298__auto___10489);
{
var G__10490 = cljs.core.next.call(null,seq__8301_10483__$1);
var G__10491 = null;
var G__10492 = 0;
var G__10493 = 0;
seq__8301_10473 = G__10490;
chunk__8302_10474 = G__10491;
count__8303_10475 = G__10492;
i__8304_10476 = G__10493;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.span.apply(null,a__6297__auto__);
};
var span = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return span__delegate.call(this,args__6296__auto__);};
span.cljs$lang$maxFixedArity = 0;
span.cljs$lang$applyTo = (function (arglist__10494){
var args__6296__auto__ = cljs.core.seq(arglist__10494);
return span__delegate(args__6296__auto__);
});
span.cljs$core$IFn$_invoke$arity$variadic = span__delegate;
return span;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.strong = (function() { 
var strong__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__8309_10495 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__8310_10496 = null;var count__8311_10497 = 0;var i__8312_10498 = 0;while(true){
if((i__8312_10498 < count__8311_10497))
{var arg__6298__auto___10499 = cljs.core._nth.call(null,chunk__8310_10496,i__8312_10498);a__6297__auto__.push(arg__6298__auto___10499);
{
var G__10500 = seq__8309_10495;
var G__10501 = chunk__8310_10496;
var G__10502 = count__8311_10497;
var G__10503 = (i__8312_10498 + 1);
seq__8309_10495 = G__10500;
chunk__8310_10496 = G__10501;
count__8311_10497 = G__10502;
i__8312_10498 = G__10503;
continue;
}
} else
{var temp__4092__auto___10504 = cljs.core.seq.call(null,seq__8309_10495);if(temp__4092__auto___10504)
{var seq__8309_10505__$1 = temp__4092__auto___10504;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8309_10505__$1))
{var c__5638__auto___10506 = cljs.core.chunk_first.call(null,seq__8309_10505__$1);{
var G__10507 = cljs.core.chunk_rest.call(null,seq__8309_10505__$1);
var G__10508 = c__5638__auto___10506;
var G__10509 = cljs.core.count.call(null,c__5638__auto___10506);
var G__10510 = 0;
seq__8309_10495 = G__10507;
chunk__8310_10496 = G__10508;
count__8311_10497 = G__10509;
i__8312_10498 = G__10510;
continue;
}
} else
{var arg__6298__auto___10511 = cljs.core.first.call(null,seq__8309_10505__$1);a__6297__auto__.push(arg__6298__auto___10511);
{
var G__10512 = cljs.core.next.call(null,seq__8309_10505__$1);
var G__10513 = null;
var G__10514 = 0;
var G__10515 = 0;
seq__8309_10495 = G__10512;
chunk__8310_10496 = G__10513;
count__8311_10497 = G__10514;
i__8312_10498 = G__10515;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.strong.apply(null,a__6297__auto__);
};
var strong = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return strong__delegate.call(this,args__6296__auto__);};
strong.cljs$lang$maxFixedArity = 0;
strong.cljs$lang$applyTo = (function (arglist__10516){
var args__6296__auto__ = cljs.core.seq(arglist__10516);
return strong__delegate(args__6296__auto__);
});
strong.cljs$core$IFn$_invoke$arity$variadic = strong__delegate;
return strong;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.style = (function() { 
var style__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__8317_10517 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__8318_10518 = null;var count__8319_10519 = 0;var i__8320_10520 = 0;while(true){
if((i__8320_10520 < count__8319_10519))
{var arg__6298__auto___10521 = cljs.core._nth.call(null,chunk__8318_10518,i__8320_10520);a__6297__auto__.push(arg__6298__auto___10521);
{
var G__10522 = seq__8317_10517;
var G__10523 = chunk__8318_10518;
var G__10524 = count__8319_10519;
var G__10525 = (i__8320_10520 + 1);
seq__8317_10517 = G__10522;
chunk__8318_10518 = G__10523;
count__8319_10519 = G__10524;
i__8320_10520 = G__10525;
continue;
}
} else
{var temp__4092__auto___10526 = cljs.core.seq.call(null,seq__8317_10517);if(temp__4092__auto___10526)
{var seq__8317_10527__$1 = temp__4092__auto___10526;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8317_10527__$1))
{var c__5638__auto___10528 = cljs.core.chunk_first.call(null,seq__8317_10527__$1);{
var G__10529 = cljs.core.chunk_rest.call(null,seq__8317_10527__$1);
var G__10530 = c__5638__auto___10528;
var G__10531 = cljs.core.count.call(null,c__5638__auto___10528);
var G__10532 = 0;
seq__8317_10517 = G__10529;
chunk__8318_10518 = G__10530;
count__8319_10519 = G__10531;
i__8320_10520 = G__10532;
continue;
}
} else
{var arg__6298__auto___10533 = cljs.core.first.call(null,seq__8317_10527__$1);a__6297__auto__.push(arg__6298__auto___10533);
{
var G__10534 = cljs.core.next.call(null,seq__8317_10527__$1);
var G__10535 = null;
var G__10536 = 0;
var G__10537 = 0;
seq__8317_10517 = G__10534;
chunk__8318_10518 = G__10535;
count__8319_10519 = G__10536;
i__8320_10520 = G__10537;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.style.apply(null,a__6297__auto__);
};
var style = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return style__delegate.call(this,args__6296__auto__);};
style.cljs$lang$maxFixedArity = 0;
style.cljs$lang$applyTo = (function (arglist__10538){
var args__6296__auto__ = cljs.core.seq(arglist__10538);
return style__delegate(args__6296__auto__);
});
style.cljs$core$IFn$_invoke$arity$variadic = style__delegate;
return style;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.sub = (function() { 
var sub__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__8325_10539 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__8326_10540 = null;var count__8327_10541 = 0;var i__8328_10542 = 0;while(true){
if((i__8328_10542 < count__8327_10541))
{var arg__6298__auto___10543 = cljs.core._nth.call(null,chunk__8326_10540,i__8328_10542);a__6297__auto__.push(arg__6298__auto___10543);
{
var G__10544 = seq__8325_10539;
var G__10545 = chunk__8326_10540;
var G__10546 = count__8327_10541;
var G__10547 = (i__8328_10542 + 1);
seq__8325_10539 = G__10544;
chunk__8326_10540 = G__10545;
count__8327_10541 = G__10546;
i__8328_10542 = G__10547;
continue;
}
} else
{var temp__4092__auto___10548 = cljs.core.seq.call(null,seq__8325_10539);if(temp__4092__auto___10548)
{var seq__8325_10549__$1 = temp__4092__auto___10548;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8325_10549__$1))
{var c__5638__auto___10550 = cljs.core.chunk_first.call(null,seq__8325_10549__$1);{
var G__10551 = cljs.core.chunk_rest.call(null,seq__8325_10549__$1);
var G__10552 = c__5638__auto___10550;
var G__10553 = cljs.core.count.call(null,c__5638__auto___10550);
var G__10554 = 0;
seq__8325_10539 = G__10551;
chunk__8326_10540 = G__10552;
count__8327_10541 = G__10553;
i__8328_10542 = G__10554;
continue;
}
} else
{var arg__6298__auto___10555 = cljs.core.first.call(null,seq__8325_10549__$1);a__6297__auto__.push(arg__6298__auto___10555);
{
var G__10556 = cljs.core.next.call(null,seq__8325_10549__$1);
var G__10557 = null;
var G__10558 = 0;
var G__10559 = 0;
seq__8325_10539 = G__10556;
chunk__8326_10540 = G__10557;
count__8327_10541 = G__10558;
i__8328_10542 = G__10559;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.sub.apply(null,a__6297__auto__);
};
var sub = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return sub__delegate.call(this,args__6296__auto__);};
sub.cljs$lang$maxFixedArity = 0;
sub.cljs$lang$applyTo = (function (arglist__10560){
var args__6296__auto__ = cljs.core.seq(arglist__10560);
return sub__delegate(args__6296__auto__);
});
sub.cljs$core$IFn$_invoke$arity$variadic = sub__delegate;
return sub;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.summary = (function() { 
var summary__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__8333_10561 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__8334_10562 = null;var count__8335_10563 = 0;var i__8336_10564 = 0;while(true){
if((i__8336_10564 < count__8335_10563))
{var arg__6298__auto___10565 = cljs.core._nth.call(null,chunk__8334_10562,i__8336_10564);a__6297__auto__.push(arg__6298__auto___10565);
{
var G__10566 = seq__8333_10561;
var G__10567 = chunk__8334_10562;
var G__10568 = count__8335_10563;
var G__10569 = (i__8336_10564 + 1);
seq__8333_10561 = G__10566;
chunk__8334_10562 = G__10567;
count__8335_10563 = G__10568;
i__8336_10564 = G__10569;
continue;
}
} else
{var temp__4092__auto___10570 = cljs.core.seq.call(null,seq__8333_10561);if(temp__4092__auto___10570)
{var seq__8333_10571__$1 = temp__4092__auto___10570;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8333_10571__$1))
{var c__5638__auto___10572 = cljs.core.chunk_first.call(null,seq__8333_10571__$1);{
var G__10573 = cljs.core.chunk_rest.call(null,seq__8333_10571__$1);
var G__10574 = c__5638__auto___10572;
var G__10575 = cljs.core.count.call(null,c__5638__auto___10572);
var G__10576 = 0;
seq__8333_10561 = G__10573;
chunk__8334_10562 = G__10574;
count__8335_10563 = G__10575;
i__8336_10564 = G__10576;
continue;
}
} else
{var arg__6298__auto___10577 = cljs.core.first.call(null,seq__8333_10571__$1);a__6297__auto__.push(arg__6298__auto___10577);
{
var G__10578 = cljs.core.next.call(null,seq__8333_10571__$1);
var G__10579 = null;
var G__10580 = 0;
var G__10581 = 0;
seq__8333_10561 = G__10578;
chunk__8334_10562 = G__10579;
count__8335_10563 = G__10580;
i__8336_10564 = G__10581;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.summary.apply(null,a__6297__auto__);
};
var summary = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return summary__delegate.call(this,args__6296__auto__);};
summary.cljs$lang$maxFixedArity = 0;
summary.cljs$lang$applyTo = (function (arglist__10582){
var args__6296__auto__ = cljs.core.seq(arglist__10582);
return summary__delegate(args__6296__auto__);
});
summary.cljs$core$IFn$_invoke$arity$variadic = summary__delegate;
return summary;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.sup = (function() { 
var sup__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__8341_10583 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__8342_10584 = null;var count__8343_10585 = 0;var i__8344_10586 = 0;while(true){
if((i__8344_10586 < count__8343_10585))
{var arg__6298__auto___10587 = cljs.core._nth.call(null,chunk__8342_10584,i__8344_10586);a__6297__auto__.push(arg__6298__auto___10587);
{
var G__10588 = seq__8341_10583;
var G__10589 = chunk__8342_10584;
var G__10590 = count__8343_10585;
var G__10591 = (i__8344_10586 + 1);
seq__8341_10583 = G__10588;
chunk__8342_10584 = G__10589;
count__8343_10585 = G__10590;
i__8344_10586 = G__10591;
continue;
}
} else
{var temp__4092__auto___10592 = cljs.core.seq.call(null,seq__8341_10583);if(temp__4092__auto___10592)
{var seq__8341_10593__$1 = temp__4092__auto___10592;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8341_10593__$1))
{var c__5638__auto___10594 = cljs.core.chunk_first.call(null,seq__8341_10593__$1);{
var G__10595 = cljs.core.chunk_rest.call(null,seq__8341_10593__$1);
var G__10596 = c__5638__auto___10594;
var G__10597 = cljs.core.count.call(null,c__5638__auto___10594);
var G__10598 = 0;
seq__8341_10583 = G__10595;
chunk__8342_10584 = G__10596;
count__8343_10585 = G__10597;
i__8344_10586 = G__10598;
continue;
}
} else
{var arg__6298__auto___10599 = cljs.core.first.call(null,seq__8341_10593__$1);a__6297__auto__.push(arg__6298__auto___10599);
{
var G__10600 = cljs.core.next.call(null,seq__8341_10593__$1);
var G__10601 = null;
var G__10602 = 0;
var G__10603 = 0;
seq__8341_10583 = G__10600;
chunk__8342_10584 = G__10601;
count__8343_10585 = G__10602;
i__8344_10586 = G__10603;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.sup.apply(null,a__6297__auto__);
};
var sup = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return sup__delegate.call(this,args__6296__auto__);};
sup.cljs$lang$maxFixedArity = 0;
sup.cljs$lang$applyTo = (function (arglist__10604){
var args__6296__auto__ = cljs.core.seq(arglist__10604);
return sup__delegate(args__6296__auto__);
});
sup.cljs$core$IFn$_invoke$arity$variadic = sup__delegate;
return sup;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.table = (function() { 
var table__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__8349_10605 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__8350_10606 = null;var count__8351_10607 = 0;var i__8352_10608 = 0;while(true){
if((i__8352_10608 < count__8351_10607))
{var arg__6298__auto___10609 = cljs.core._nth.call(null,chunk__8350_10606,i__8352_10608);a__6297__auto__.push(arg__6298__auto___10609);
{
var G__10610 = seq__8349_10605;
var G__10611 = chunk__8350_10606;
var G__10612 = count__8351_10607;
var G__10613 = (i__8352_10608 + 1);
seq__8349_10605 = G__10610;
chunk__8350_10606 = G__10611;
count__8351_10607 = G__10612;
i__8352_10608 = G__10613;
continue;
}
} else
{var temp__4092__auto___10614 = cljs.core.seq.call(null,seq__8349_10605);if(temp__4092__auto___10614)
{var seq__8349_10615__$1 = temp__4092__auto___10614;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8349_10615__$1))
{var c__5638__auto___10616 = cljs.core.chunk_first.call(null,seq__8349_10615__$1);{
var G__10617 = cljs.core.chunk_rest.call(null,seq__8349_10615__$1);
var G__10618 = c__5638__auto___10616;
var G__10619 = cljs.core.count.call(null,c__5638__auto___10616);
var G__10620 = 0;
seq__8349_10605 = G__10617;
chunk__8350_10606 = G__10618;
count__8351_10607 = G__10619;
i__8352_10608 = G__10620;
continue;
}
} else
{var arg__6298__auto___10621 = cljs.core.first.call(null,seq__8349_10615__$1);a__6297__auto__.push(arg__6298__auto___10621);
{
var G__10622 = cljs.core.next.call(null,seq__8349_10615__$1);
var G__10623 = null;
var G__10624 = 0;
var G__10625 = 0;
seq__8349_10605 = G__10622;
chunk__8350_10606 = G__10623;
count__8351_10607 = G__10624;
i__8352_10608 = G__10625;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.table.apply(null,a__6297__auto__);
};
var table = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return table__delegate.call(this,args__6296__auto__);};
table.cljs$lang$maxFixedArity = 0;
table.cljs$lang$applyTo = (function (arglist__10626){
var args__6296__auto__ = cljs.core.seq(arglist__10626);
return table__delegate(args__6296__auto__);
});
table.cljs$core$IFn$_invoke$arity$variadic = table__delegate;
return table;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.tbody = (function() { 
var tbody__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__8357_10627 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__8358_10628 = null;var count__8359_10629 = 0;var i__8360_10630 = 0;while(true){
if((i__8360_10630 < count__8359_10629))
{var arg__6298__auto___10631 = cljs.core._nth.call(null,chunk__8358_10628,i__8360_10630);a__6297__auto__.push(arg__6298__auto___10631);
{
var G__10632 = seq__8357_10627;
var G__10633 = chunk__8358_10628;
var G__10634 = count__8359_10629;
var G__10635 = (i__8360_10630 + 1);
seq__8357_10627 = G__10632;
chunk__8358_10628 = G__10633;
count__8359_10629 = G__10634;
i__8360_10630 = G__10635;
continue;
}
} else
{var temp__4092__auto___10636 = cljs.core.seq.call(null,seq__8357_10627);if(temp__4092__auto___10636)
{var seq__8357_10637__$1 = temp__4092__auto___10636;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8357_10637__$1))
{var c__5638__auto___10638 = cljs.core.chunk_first.call(null,seq__8357_10637__$1);{
var G__10639 = cljs.core.chunk_rest.call(null,seq__8357_10637__$1);
var G__10640 = c__5638__auto___10638;
var G__10641 = cljs.core.count.call(null,c__5638__auto___10638);
var G__10642 = 0;
seq__8357_10627 = G__10639;
chunk__8358_10628 = G__10640;
count__8359_10629 = G__10641;
i__8360_10630 = G__10642;
continue;
}
} else
{var arg__6298__auto___10643 = cljs.core.first.call(null,seq__8357_10637__$1);a__6297__auto__.push(arg__6298__auto___10643);
{
var G__10644 = cljs.core.next.call(null,seq__8357_10637__$1);
var G__10645 = null;
var G__10646 = 0;
var G__10647 = 0;
seq__8357_10627 = G__10644;
chunk__8358_10628 = G__10645;
count__8359_10629 = G__10646;
i__8360_10630 = G__10647;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.tbody.apply(null,a__6297__auto__);
};
var tbody = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return tbody__delegate.call(this,args__6296__auto__);};
tbody.cljs$lang$maxFixedArity = 0;
tbody.cljs$lang$applyTo = (function (arglist__10648){
var args__6296__auto__ = cljs.core.seq(arglist__10648);
return tbody__delegate(args__6296__auto__);
});
tbody.cljs$core$IFn$_invoke$arity$variadic = tbody__delegate;
return tbody;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.td = (function() { 
var td__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__8365_10649 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__8366_10650 = null;var count__8367_10651 = 0;var i__8368_10652 = 0;while(true){
if((i__8368_10652 < count__8367_10651))
{var arg__6298__auto___10653 = cljs.core._nth.call(null,chunk__8366_10650,i__8368_10652);a__6297__auto__.push(arg__6298__auto___10653);
{
var G__10654 = seq__8365_10649;
var G__10655 = chunk__8366_10650;
var G__10656 = count__8367_10651;
var G__10657 = (i__8368_10652 + 1);
seq__8365_10649 = G__10654;
chunk__8366_10650 = G__10655;
count__8367_10651 = G__10656;
i__8368_10652 = G__10657;
continue;
}
} else
{var temp__4092__auto___10658 = cljs.core.seq.call(null,seq__8365_10649);if(temp__4092__auto___10658)
{var seq__8365_10659__$1 = temp__4092__auto___10658;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8365_10659__$1))
{var c__5638__auto___10660 = cljs.core.chunk_first.call(null,seq__8365_10659__$1);{
var G__10661 = cljs.core.chunk_rest.call(null,seq__8365_10659__$1);
var G__10662 = c__5638__auto___10660;
var G__10663 = cljs.core.count.call(null,c__5638__auto___10660);
var G__10664 = 0;
seq__8365_10649 = G__10661;
chunk__8366_10650 = G__10662;
count__8367_10651 = G__10663;
i__8368_10652 = G__10664;
continue;
}
} else
{var arg__6298__auto___10665 = cljs.core.first.call(null,seq__8365_10659__$1);a__6297__auto__.push(arg__6298__auto___10665);
{
var G__10666 = cljs.core.next.call(null,seq__8365_10659__$1);
var G__10667 = null;
var G__10668 = 0;
var G__10669 = 0;
seq__8365_10649 = G__10666;
chunk__8366_10650 = G__10667;
count__8367_10651 = G__10668;
i__8368_10652 = G__10669;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.td.apply(null,a__6297__auto__);
};
var td = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return td__delegate.call(this,args__6296__auto__);};
td.cljs$lang$maxFixedArity = 0;
td.cljs$lang$applyTo = (function (arglist__10670){
var args__6296__auto__ = cljs.core.seq(arglist__10670);
return td__delegate(args__6296__auto__);
});
td.cljs$core$IFn$_invoke$arity$variadic = td__delegate;
return td;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.textarea = (function() { 
var textarea__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__8373_10671 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__8374_10672 = null;var count__8375_10673 = 0;var i__8376_10674 = 0;while(true){
if((i__8376_10674 < count__8375_10673))
{var arg__6298__auto___10675 = cljs.core._nth.call(null,chunk__8374_10672,i__8376_10674);a__6297__auto__.push(arg__6298__auto___10675);
{
var G__10676 = seq__8373_10671;
var G__10677 = chunk__8374_10672;
var G__10678 = count__8375_10673;
var G__10679 = (i__8376_10674 + 1);
seq__8373_10671 = G__10676;
chunk__8374_10672 = G__10677;
count__8375_10673 = G__10678;
i__8376_10674 = G__10679;
continue;
}
} else
{var temp__4092__auto___10680 = cljs.core.seq.call(null,seq__8373_10671);if(temp__4092__auto___10680)
{var seq__8373_10681__$1 = temp__4092__auto___10680;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8373_10681__$1))
{var c__5638__auto___10682 = cljs.core.chunk_first.call(null,seq__8373_10681__$1);{
var G__10683 = cljs.core.chunk_rest.call(null,seq__8373_10681__$1);
var G__10684 = c__5638__auto___10682;
var G__10685 = cljs.core.count.call(null,c__5638__auto___10682);
var G__10686 = 0;
seq__8373_10671 = G__10683;
chunk__8374_10672 = G__10684;
count__8375_10673 = G__10685;
i__8376_10674 = G__10686;
continue;
}
} else
{var arg__6298__auto___10687 = cljs.core.first.call(null,seq__8373_10681__$1);a__6297__auto__.push(arg__6298__auto___10687);
{
var G__10688 = cljs.core.next.call(null,seq__8373_10681__$1);
var G__10689 = null;
var G__10690 = 0;
var G__10691 = 0;
seq__8373_10671 = G__10688;
chunk__8374_10672 = G__10689;
count__8375_10673 = G__10690;
i__8376_10674 = G__10691;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.textarea.apply(null,a__6297__auto__);
};
var textarea = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return textarea__delegate.call(this,args__6296__auto__);};
textarea.cljs$lang$maxFixedArity = 0;
textarea.cljs$lang$applyTo = (function (arglist__10692){
var args__6296__auto__ = cljs.core.seq(arglist__10692);
return textarea__delegate(args__6296__auto__);
});
textarea.cljs$core$IFn$_invoke$arity$variadic = textarea__delegate;
return textarea;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.tfoot = (function() { 
var tfoot__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__8381_10693 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__8382_10694 = null;var count__8383_10695 = 0;var i__8384_10696 = 0;while(true){
if((i__8384_10696 < count__8383_10695))
{var arg__6298__auto___10697 = cljs.core._nth.call(null,chunk__8382_10694,i__8384_10696);a__6297__auto__.push(arg__6298__auto___10697);
{
var G__10698 = seq__8381_10693;
var G__10699 = chunk__8382_10694;
var G__10700 = count__8383_10695;
var G__10701 = (i__8384_10696 + 1);
seq__8381_10693 = G__10698;
chunk__8382_10694 = G__10699;
count__8383_10695 = G__10700;
i__8384_10696 = G__10701;
continue;
}
} else
{var temp__4092__auto___10702 = cljs.core.seq.call(null,seq__8381_10693);if(temp__4092__auto___10702)
{var seq__8381_10703__$1 = temp__4092__auto___10702;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8381_10703__$1))
{var c__5638__auto___10704 = cljs.core.chunk_first.call(null,seq__8381_10703__$1);{
var G__10705 = cljs.core.chunk_rest.call(null,seq__8381_10703__$1);
var G__10706 = c__5638__auto___10704;
var G__10707 = cljs.core.count.call(null,c__5638__auto___10704);
var G__10708 = 0;
seq__8381_10693 = G__10705;
chunk__8382_10694 = G__10706;
count__8383_10695 = G__10707;
i__8384_10696 = G__10708;
continue;
}
} else
{var arg__6298__auto___10709 = cljs.core.first.call(null,seq__8381_10703__$1);a__6297__auto__.push(arg__6298__auto___10709);
{
var G__10710 = cljs.core.next.call(null,seq__8381_10703__$1);
var G__10711 = null;
var G__10712 = 0;
var G__10713 = 0;
seq__8381_10693 = G__10710;
chunk__8382_10694 = G__10711;
count__8383_10695 = G__10712;
i__8384_10696 = G__10713;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.tfoot.apply(null,a__6297__auto__);
};
var tfoot = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return tfoot__delegate.call(this,args__6296__auto__);};
tfoot.cljs$lang$maxFixedArity = 0;
tfoot.cljs$lang$applyTo = (function (arglist__10714){
var args__6296__auto__ = cljs.core.seq(arglist__10714);
return tfoot__delegate(args__6296__auto__);
});
tfoot.cljs$core$IFn$_invoke$arity$variadic = tfoot__delegate;
return tfoot;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.th = (function() { 
var th__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__8389_10715 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__8390_10716 = null;var count__8391_10717 = 0;var i__8392_10718 = 0;while(true){
if((i__8392_10718 < count__8391_10717))
{var arg__6298__auto___10719 = cljs.core._nth.call(null,chunk__8390_10716,i__8392_10718);a__6297__auto__.push(arg__6298__auto___10719);
{
var G__10720 = seq__8389_10715;
var G__10721 = chunk__8390_10716;
var G__10722 = count__8391_10717;
var G__10723 = (i__8392_10718 + 1);
seq__8389_10715 = G__10720;
chunk__8390_10716 = G__10721;
count__8391_10717 = G__10722;
i__8392_10718 = G__10723;
continue;
}
} else
{var temp__4092__auto___10724 = cljs.core.seq.call(null,seq__8389_10715);if(temp__4092__auto___10724)
{var seq__8389_10725__$1 = temp__4092__auto___10724;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8389_10725__$1))
{var c__5638__auto___10726 = cljs.core.chunk_first.call(null,seq__8389_10725__$1);{
var G__10727 = cljs.core.chunk_rest.call(null,seq__8389_10725__$1);
var G__10728 = c__5638__auto___10726;
var G__10729 = cljs.core.count.call(null,c__5638__auto___10726);
var G__10730 = 0;
seq__8389_10715 = G__10727;
chunk__8390_10716 = G__10728;
count__8391_10717 = G__10729;
i__8392_10718 = G__10730;
continue;
}
} else
{var arg__6298__auto___10731 = cljs.core.first.call(null,seq__8389_10725__$1);a__6297__auto__.push(arg__6298__auto___10731);
{
var G__10732 = cljs.core.next.call(null,seq__8389_10725__$1);
var G__10733 = null;
var G__10734 = 0;
var G__10735 = 0;
seq__8389_10715 = G__10732;
chunk__8390_10716 = G__10733;
count__8391_10717 = G__10734;
i__8392_10718 = G__10735;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.th.apply(null,a__6297__auto__);
};
var th = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return th__delegate.call(this,args__6296__auto__);};
th.cljs$lang$maxFixedArity = 0;
th.cljs$lang$applyTo = (function (arglist__10736){
var args__6296__auto__ = cljs.core.seq(arglist__10736);
return th__delegate(args__6296__auto__);
});
th.cljs$core$IFn$_invoke$arity$variadic = th__delegate;
return th;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.thead = (function() { 
var thead__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__8397_10737 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__8398_10738 = null;var count__8399_10739 = 0;var i__8400_10740 = 0;while(true){
if((i__8400_10740 < count__8399_10739))
{var arg__6298__auto___10741 = cljs.core._nth.call(null,chunk__8398_10738,i__8400_10740);a__6297__auto__.push(arg__6298__auto___10741);
{
var G__10742 = seq__8397_10737;
var G__10743 = chunk__8398_10738;
var G__10744 = count__8399_10739;
var G__10745 = (i__8400_10740 + 1);
seq__8397_10737 = G__10742;
chunk__8398_10738 = G__10743;
count__8399_10739 = G__10744;
i__8400_10740 = G__10745;
continue;
}
} else
{var temp__4092__auto___10746 = cljs.core.seq.call(null,seq__8397_10737);if(temp__4092__auto___10746)
{var seq__8397_10747__$1 = temp__4092__auto___10746;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8397_10747__$1))
{var c__5638__auto___10748 = cljs.core.chunk_first.call(null,seq__8397_10747__$1);{
var G__10749 = cljs.core.chunk_rest.call(null,seq__8397_10747__$1);
var G__10750 = c__5638__auto___10748;
var G__10751 = cljs.core.count.call(null,c__5638__auto___10748);
var G__10752 = 0;
seq__8397_10737 = G__10749;
chunk__8398_10738 = G__10750;
count__8399_10739 = G__10751;
i__8400_10740 = G__10752;
continue;
}
} else
{var arg__6298__auto___10753 = cljs.core.first.call(null,seq__8397_10747__$1);a__6297__auto__.push(arg__6298__auto___10753);
{
var G__10754 = cljs.core.next.call(null,seq__8397_10747__$1);
var G__10755 = null;
var G__10756 = 0;
var G__10757 = 0;
seq__8397_10737 = G__10754;
chunk__8398_10738 = G__10755;
count__8399_10739 = G__10756;
i__8400_10740 = G__10757;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.thead.apply(null,a__6297__auto__);
};
var thead = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return thead__delegate.call(this,args__6296__auto__);};
thead.cljs$lang$maxFixedArity = 0;
thead.cljs$lang$applyTo = (function (arglist__10758){
var args__6296__auto__ = cljs.core.seq(arglist__10758);
return thead__delegate(args__6296__auto__);
});
thead.cljs$core$IFn$_invoke$arity$variadic = thead__delegate;
return thead;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.time = (function() { 
var time__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__8405_10759 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__8406_10760 = null;var count__8407_10761 = 0;var i__8408_10762 = 0;while(true){
if((i__8408_10762 < count__8407_10761))
{var arg__6298__auto___10763 = cljs.core._nth.call(null,chunk__8406_10760,i__8408_10762);a__6297__auto__.push(arg__6298__auto___10763);
{
var G__10764 = seq__8405_10759;
var G__10765 = chunk__8406_10760;
var G__10766 = count__8407_10761;
var G__10767 = (i__8408_10762 + 1);
seq__8405_10759 = G__10764;
chunk__8406_10760 = G__10765;
count__8407_10761 = G__10766;
i__8408_10762 = G__10767;
continue;
}
} else
{var temp__4092__auto___10768 = cljs.core.seq.call(null,seq__8405_10759);if(temp__4092__auto___10768)
{var seq__8405_10769__$1 = temp__4092__auto___10768;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8405_10769__$1))
{var c__5638__auto___10770 = cljs.core.chunk_first.call(null,seq__8405_10769__$1);{
var G__10771 = cljs.core.chunk_rest.call(null,seq__8405_10769__$1);
var G__10772 = c__5638__auto___10770;
var G__10773 = cljs.core.count.call(null,c__5638__auto___10770);
var G__10774 = 0;
seq__8405_10759 = G__10771;
chunk__8406_10760 = G__10772;
count__8407_10761 = G__10773;
i__8408_10762 = G__10774;
continue;
}
} else
{var arg__6298__auto___10775 = cljs.core.first.call(null,seq__8405_10769__$1);a__6297__auto__.push(arg__6298__auto___10775);
{
var G__10776 = cljs.core.next.call(null,seq__8405_10769__$1);
var G__10777 = null;
var G__10778 = 0;
var G__10779 = 0;
seq__8405_10759 = G__10776;
chunk__8406_10760 = G__10777;
count__8407_10761 = G__10778;
i__8408_10762 = G__10779;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.time.apply(null,a__6297__auto__);
};
var time = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return time__delegate.call(this,args__6296__auto__);};
time.cljs$lang$maxFixedArity = 0;
time.cljs$lang$applyTo = (function (arglist__10780){
var args__6296__auto__ = cljs.core.seq(arglist__10780);
return time__delegate(args__6296__auto__);
});
time.cljs$core$IFn$_invoke$arity$variadic = time__delegate;
return time;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.title = (function() { 
var title__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__8413_10781 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__8414_10782 = null;var count__8415_10783 = 0;var i__8416_10784 = 0;while(true){
if((i__8416_10784 < count__8415_10783))
{var arg__6298__auto___10785 = cljs.core._nth.call(null,chunk__8414_10782,i__8416_10784);a__6297__auto__.push(arg__6298__auto___10785);
{
var G__10786 = seq__8413_10781;
var G__10787 = chunk__8414_10782;
var G__10788 = count__8415_10783;
var G__10789 = (i__8416_10784 + 1);
seq__8413_10781 = G__10786;
chunk__8414_10782 = G__10787;
count__8415_10783 = G__10788;
i__8416_10784 = G__10789;
continue;
}
} else
{var temp__4092__auto___10790 = cljs.core.seq.call(null,seq__8413_10781);if(temp__4092__auto___10790)
{var seq__8413_10791__$1 = temp__4092__auto___10790;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8413_10791__$1))
{var c__5638__auto___10792 = cljs.core.chunk_first.call(null,seq__8413_10791__$1);{
var G__10793 = cljs.core.chunk_rest.call(null,seq__8413_10791__$1);
var G__10794 = c__5638__auto___10792;
var G__10795 = cljs.core.count.call(null,c__5638__auto___10792);
var G__10796 = 0;
seq__8413_10781 = G__10793;
chunk__8414_10782 = G__10794;
count__8415_10783 = G__10795;
i__8416_10784 = G__10796;
continue;
}
} else
{var arg__6298__auto___10797 = cljs.core.first.call(null,seq__8413_10791__$1);a__6297__auto__.push(arg__6298__auto___10797);
{
var G__10798 = cljs.core.next.call(null,seq__8413_10791__$1);
var G__10799 = null;
var G__10800 = 0;
var G__10801 = 0;
seq__8413_10781 = G__10798;
chunk__8414_10782 = G__10799;
count__8415_10783 = G__10800;
i__8416_10784 = G__10801;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.title.apply(null,a__6297__auto__);
};
var title = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return title__delegate.call(this,args__6296__auto__);};
title.cljs$lang$maxFixedArity = 0;
title.cljs$lang$applyTo = (function (arglist__10802){
var args__6296__auto__ = cljs.core.seq(arglist__10802);
return title__delegate(args__6296__auto__);
});
title.cljs$core$IFn$_invoke$arity$variadic = title__delegate;
return title;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.tr = (function() { 
var tr__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__8421_10803 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__8422_10804 = null;var count__8423_10805 = 0;var i__8424_10806 = 0;while(true){
if((i__8424_10806 < count__8423_10805))
{var arg__6298__auto___10807 = cljs.core._nth.call(null,chunk__8422_10804,i__8424_10806);a__6297__auto__.push(arg__6298__auto___10807);
{
var G__10808 = seq__8421_10803;
var G__10809 = chunk__8422_10804;
var G__10810 = count__8423_10805;
var G__10811 = (i__8424_10806 + 1);
seq__8421_10803 = G__10808;
chunk__8422_10804 = G__10809;
count__8423_10805 = G__10810;
i__8424_10806 = G__10811;
continue;
}
} else
{var temp__4092__auto___10812 = cljs.core.seq.call(null,seq__8421_10803);if(temp__4092__auto___10812)
{var seq__8421_10813__$1 = temp__4092__auto___10812;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8421_10813__$1))
{var c__5638__auto___10814 = cljs.core.chunk_first.call(null,seq__8421_10813__$1);{
var G__10815 = cljs.core.chunk_rest.call(null,seq__8421_10813__$1);
var G__10816 = c__5638__auto___10814;
var G__10817 = cljs.core.count.call(null,c__5638__auto___10814);
var G__10818 = 0;
seq__8421_10803 = G__10815;
chunk__8422_10804 = G__10816;
count__8423_10805 = G__10817;
i__8424_10806 = G__10818;
continue;
}
} else
{var arg__6298__auto___10819 = cljs.core.first.call(null,seq__8421_10813__$1);a__6297__auto__.push(arg__6298__auto___10819);
{
var G__10820 = cljs.core.next.call(null,seq__8421_10813__$1);
var G__10821 = null;
var G__10822 = 0;
var G__10823 = 0;
seq__8421_10803 = G__10820;
chunk__8422_10804 = G__10821;
count__8423_10805 = G__10822;
i__8424_10806 = G__10823;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.tr.apply(null,a__6297__auto__);
};
var tr = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return tr__delegate.call(this,args__6296__auto__);};
tr.cljs$lang$maxFixedArity = 0;
tr.cljs$lang$applyTo = (function (arglist__10824){
var args__6296__auto__ = cljs.core.seq(arglist__10824);
return tr__delegate(args__6296__auto__);
});
tr.cljs$core$IFn$_invoke$arity$variadic = tr__delegate;
return tr;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.track = (function() { 
var track__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__8429_10825 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__8430_10826 = null;var count__8431_10827 = 0;var i__8432_10828 = 0;while(true){
if((i__8432_10828 < count__8431_10827))
{var arg__6298__auto___10829 = cljs.core._nth.call(null,chunk__8430_10826,i__8432_10828);a__6297__auto__.push(arg__6298__auto___10829);
{
var G__10830 = seq__8429_10825;
var G__10831 = chunk__8430_10826;
var G__10832 = count__8431_10827;
var G__10833 = (i__8432_10828 + 1);
seq__8429_10825 = G__10830;
chunk__8430_10826 = G__10831;
count__8431_10827 = G__10832;
i__8432_10828 = G__10833;
continue;
}
} else
{var temp__4092__auto___10834 = cljs.core.seq.call(null,seq__8429_10825);if(temp__4092__auto___10834)
{var seq__8429_10835__$1 = temp__4092__auto___10834;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8429_10835__$1))
{var c__5638__auto___10836 = cljs.core.chunk_first.call(null,seq__8429_10835__$1);{
var G__10837 = cljs.core.chunk_rest.call(null,seq__8429_10835__$1);
var G__10838 = c__5638__auto___10836;
var G__10839 = cljs.core.count.call(null,c__5638__auto___10836);
var G__10840 = 0;
seq__8429_10825 = G__10837;
chunk__8430_10826 = G__10838;
count__8431_10827 = G__10839;
i__8432_10828 = G__10840;
continue;
}
} else
{var arg__6298__auto___10841 = cljs.core.first.call(null,seq__8429_10835__$1);a__6297__auto__.push(arg__6298__auto___10841);
{
var G__10842 = cljs.core.next.call(null,seq__8429_10835__$1);
var G__10843 = null;
var G__10844 = 0;
var G__10845 = 0;
seq__8429_10825 = G__10842;
chunk__8430_10826 = G__10843;
count__8431_10827 = G__10844;
i__8432_10828 = G__10845;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.track.apply(null,a__6297__auto__);
};
var track = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return track__delegate.call(this,args__6296__auto__);};
track.cljs$lang$maxFixedArity = 0;
track.cljs$lang$applyTo = (function (arglist__10846){
var args__6296__auto__ = cljs.core.seq(arglist__10846);
return track__delegate(args__6296__auto__);
});
track.cljs$core$IFn$_invoke$arity$variadic = track__delegate;
return track;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.u = (function() { 
var u__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__8437_10847 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__8438_10848 = null;var count__8439_10849 = 0;var i__8440_10850 = 0;while(true){
if((i__8440_10850 < count__8439_10849))
{var arg__6298__auto___10851 = cljs.core._nth.call(null,chunk__8438_10848,i__8440_10850);a__6297__auto__.push(arg__6298__auto___10851);
{
var G__10852 = seq__8437_10847;
var G__10853 = chunk__8438_10848;
var G__10854 = count__8439_10849;
var G__10855 = (i__8440_10850 + 1);
seq__8437_10847 = G__10852;
chunk__8438_10848 = G__10853;
count__8439_10849 = G__10854;
i__8440_10850 = G__10855;
continue;
}
} else
{var temp__4092__auto___10856 = cljs.core.seq.call(null,seq__8437_10847);if(temp__4092__auto___10856)
{var seq__8437_10857__$1 = temp__4092__auto___10856;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8437_10857__$1))
{var c__5638__auto___10858 = cljs.core.chunk_first.call(null,seq__8437_10857__$1);{
var G__10859 = cljs.core.chunk_rest.call(null,seq__8437_10857__$1);
var G__10860 = c__5638__auto___10858;
var G__10861 = cljs.core.count.call(null,c__5638__auto___10858);
var G__10862 = 0;
seq__8437_10847 = G__10859;
chunk__8438_10848 = G__10860;
count__8439_10849 = G__10861;
i__8440_10850 = G__10862;
continue;
}
} else
{var arg__6298__auto___10863 = cljs.core.first.call(null,seq__8437_10857__$1);a__6297__auto__.push(arg__6298__auto___10863);
{
var G__10864 = cljs.core.next.call(null,seq__8437_10857__$1);
var G__10865 = null;
var G__10866 = 0;
var G__10867 = 0;
seq__8437_10847 = G__10864;
chunk__8438_10848 = G__10865;
count__8439_10849 = G__10866;
i__8440_10850 = G__10867;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.u.apply(null,a__6297__auto__);
};
var u = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return u__delegate.call(this,args__6296__auto__);};
u.cljs$lang$maxFixedArity = 0;
u.cljs$lang$applyTo = (function (arglist__10868){
var args__6296__auto__ = cljs.core.seq(arglist__10868);
return u__delegate(args__6296__auto__);
});
u.cljs$core$IFn$_invoke$arity$variadic = u__delegate;
return u;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.ul = (function() { 
var ul__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__8445_10869 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__8446_10870 = null;var count__8447_10871 = 0;var i__8448_10872 = 0;while(true){
if((i__8448_10872 < count__8447_10871))
{var arg__6298__auto___10873 = cljs.core._nth.call(null,chunk__8446_10870,i__8448_10872);a__6297__auto__.push(arg__6298__auto___10873);
{
var G__10874 = seq__8445_10869;
var G__10875 = chunk__8446_10870;
var G__10876 = count__8447_10871;
var G__10877 = (i__8448_10872 + 1);
seq__8445_10869 = G__10874;
chunk__8446_10870 = G__10875;
count__8447_10871 = G__10876;
i__8448_10872 = G__10877;
continue;
}
} else
{var temp__4092__auto___10878 = cljs.core.seq.call(null,seq__8445_10869);if(temp__4092__auto___10878)
{var seq__8445_10879__$1 = temp__4092__auto___10878;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8445_10879__$1))
{var c__5638__auto___10880 = cljs.core.chunk_first.call(null,seq__8445_10879__$1);{
var G__10881 = cljs.core.chunk_rest.call(null,seq__8445_10879__$1);
var G__10882 = c__5638__auto___10880;
var G__10883 = cljs.core.count.call(null,c__5638__auto___10880);
var G__10884 = 0;
seq__8445_10869 = G__10881;
chunk__8446_10870 = G__10882;
count__8447_10871 = G__10883;
i__8448_10872 = G__10884;
continue;
}
} else
{var arg__6298__auto___10885 = cljs.core.first.call(null,seq__8445_10879__$1);a__6297__auto__.push(arg__6298__auto___10885);
{
var G__10886 = cljs.core.next.call(null,seq__8445_10879__$1);
var G__10887 = null;
var G__10888 = 0;
var G__10889 = 0;
seq__8445_10869 = G__10886;
chunk__8446_10870 = G__10887;
count__8447_10871 = G__10888;
i__8448_10872 = G__10889;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.ul.apply(null,a__6297__auto__);
};
var ul = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ul__delegate.call(this,args__6296__auto__);};
ul.cljs$lang$maxFixedArity = 0;
ul.cljs$lang$applyTo = (function (arglist__10890){
var args__6296__auto__ = cljs.core.seq(arglist__10890);
return ul__delegate(args__6296__auto__);
});
ul.cljs$core$IFn$_invoke$arity$variadic = ul__delegate;
return ul;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.var$ = (function() { 
var var$__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__8453_10891 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__8454_10892 = null;var count__8455_10893 = 0;var i__8456_10894 = 0;while(true){
if((i__8456_10894 < count__8455_10893))
{var arg__6298__auto___10895 = cljs.core._nth.call(null,chunk__8454_10892,i__8456_10894);a__6297__auto__.push(arg__6298__auto___10895);
{
var G__10896 = seq__8453_10891;
var G__10897 = chunk__8454_10892;
var G__10898 = count__8455_10893;
var G__10899 = (i__8456_10894 + 1);
seq__8453_10891 = G__10896;
chunk__8454_10892 = G__10897;
count__8455_10893 = G__10898;
i__8456_10894 = G__10899;
continue;
}
} else
{var temp__4092__auto___10900 = cljs.core.seq.call(null,seq__8453_10891);if(temp__4092__auto___10900)
{var seq__8453_10901__$1 = temp__4092__auto___10900;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8453_10901__$1))
{var c__5638__auto___10902 = cljs.core.chunk_first.call(null,seq__8453_10901__$1);{
var G__10903 = cljs.core.chunk_rest.call(null,seq__8453_10901__$1);
var G__10904 = c__5638__auto___10902;
var G__10905 = cljs.core.count.call(null,c__5638__auto___10902);
var G__10906 = 0;
seq__8453_10891 = G__10903;
chunk__8454_10892 = G__10904;
count__8455_10893 = G__10905;
i__8456_10894 = G__10906;
continue;
}
} else
{var arg__6298__auto___10907 = cljs.core.first.call(null,seq__8453_10901__$1);a__6297__auto__.push(arg__6298__auto___10907);
{
var G__10908 = cljs.core.next.call(null,seq__8453_10901__$1);
var G__10909 = null;
var G__10910 = 0;
var G__10911 = 0;
seq__8453_10891 = G__10908;
chunk__8454_10892 = G__10909;
count__8455_10893 = G__10910;
i__8456_10894 = G__10911;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.var$.apply(null,a__6297__auto__);
};
var var$ = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return var$__delegate.call(this,args__6296__auto__);};
var$.cljs$lang$maxFixedArity = 0;
var$.cljs$lang$applyTo = (function (arglist__10912){
var args__6296__auto__ = cljs.core.seq(arglist__10912);
return var$__delegate(args__6296__auto__);
});
var$.cljs$core$IFn$_invoke$arity$variadic = var$__delegate;
return var$;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.video = (function() { 
var video__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__8461_10913 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__8462_10914 = null;var count__8463_10915 = 0;var i__8464_10916 = 0;while(true){
if((i__8464_10916 < count__8463_10915))
{var arg__6298__auto___10917 = cljs.core._nth.call(null,chunk__8462_10914,i__8464_10916);a__6297__auto__.push(arg__6298__auto___10917);
{
var G__10918 = seq__8461_10913;
var G__10919 = chunk__8462_10914;
var G__10920 = count__8463_10915;
var G__10921 = (i__8464_10916 + 1);
seq__8461_10913 = G__10918;
chunk__8462_10914 = G__10919;
count__8463_10915 = G__10920;
i__8464_10916 = G__10921;
continue;
}
} else
{var temp__4092__auto___10922 = cljs.core.seq.call(null,seq__8461_10913);if(temp__4092__auto___10922)
{var seq__8461_10923__$1 = temp__4092__auto___10922;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8461_10923__$1))
{var c__5638__auto___10924 = cljs.core.chunk_first.call(null,seq__8461_10923__$1);{
var G__10925 = cljs.core.chunk_rest.call(null,seq__8461_10923__$1);
var G__10926 = c__5638__auto___10924;
var G__10927 = cljs.core.count.call(null,c__5638__auto___10924);
var G__10928 = 0;
seq__8461_10913 = G__10925;
chunk__8462_10914 = G__10926;
count__8463_10915 = G__10927;
i__8464_10916 = G__10928;
continue;
}
} else
{var arg__6298__auto___10929 = cljs.core.first.call(null,seq__8461_10923__$1);a__6297__auto__.push(arg__6298__auto___10929);
{
var G__10930 = cljs.core.next.call(null,seq__8461_10923__$1);
var G__10931 = null;
var G__10932 = 0;
var G__10933 = 0;
seq__8461_10913 = G__10930;
chunk__8462_10914 = G__10931;
count__8463_10915 = G__10932;
i__8464_10916 = G__10933;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.video.apply(null,a__6297__auto__);
};
var video = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return video__delegate.call(this,args__6296__auto__);};
video.cljs$lang$maxFixedArity = 0;
video.cljs$lang$applyTo = (function (arglist__10934){
var args__6296__auto__ = cljs.core.seq(arglist__10934);
return video__delegate(args__6296__auto__);
});
video.cljs$core$IFn$_invoke$arity$variadic = video__delegate;
return video;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.wbr = (function() { 
var wbr__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__8469_10935 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__8470_10936 = null;var count__8471_10937 = 0;var i__8472_10938 = 0;while(true){
if((i__8472_10938 < count__8471_10937))
{var arg__6298__auto___10939 = cljs.core._nth.call(null,chunk__8470_10936,i__8472_10938);a__6297__auto__.push(arg__6298__auto___10939);
{
var G__10940 = seq__8469_10935;
var G__10941 = chunk__8470_10936;
var G__10942 = count__8471_10937;
var G__10943 = (i__8472_10938 + 1);
seq__8469_10935 = G__10940;
chunk__8470_10936 = G__10941;
count__8471_10937 = G__10942;
i__8472_10938 = G__10943;
continue;
}
} else
{var temp__4092__auto___10944 = cljs.core.seq.call(null,seq__8469_10935);if(temp__4092__auto___10944)
{var seq__8469_10945__$1 = temp__4092__auto___10944;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8469_10945__$1))
{var c__5638__auto___10946 = cljs.core.chunk_first.call(null,seq__8469_10945__$1);{
var G__10947 = cljs.core.chunk_rest.call(null,seq__8469_10945__$1);
var G__10948 = c__5638__auto___10946;
var G__10949 = cljs.core.count.call(null,c__5638__auto___10946);
var G__10950 = 0;
seq__8469_10935 = G__10947;
chunk__8470_10936 = G__10948;
count__8471_10937 = G__10949;
i__8472_10938 = G__10950;
continue;
}
} else
{var arg__6298__auto___10951 = cljs.core.first.call(null,seq__8469_10945__$1);a__6297__auto__.push(arg__6298__auto___10951);
{
var G__10952 = cljs.core.next.call(null,seq__8469_10945__$1);
var G__10953 = null;
var G__10954 = 0;
var G__10955 = 0;
seq__8469_10935 = G__10952;
chunk__8470_10936 = G__10953;
count__8471_10937 = G__10954;
i__8472_10938 = G__10955;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.wbr.apply(null,a__6297__auto__);
};
var wbr = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return wbr__delegate.call(this,args__6296__auto__);};
wbr.cljs$lang$maxFixedArity = 0;
wbr.cljs$lang$applyTo = (function (arglist__10956){
var args__6296__auto__ = cljs.core.seq(arglist__10956);
return wbr__delegate(args__6296__auto__);
});
wbr.cljs$core$IFn$_invoke$arity$variadic = wbr__delegate;
return wbr;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.circle = (function() { 
var circle__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__8477_10957 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__8478_10958 = null;var count__8479_10959 = 0;var i__8480_10960 = 0;while(true){
if((i__8480_10960 < count__8479_10959))
{var arg__6298__auto___10961 = cljs.core._nth.call(null,chunk__8478_10958,i__8480_10960);a__6297__auto__.push(arg__6298__auto___10961);
{
var G__10962 = seq__8477_10957;
var G__10963 = chunk__8478_10958;
var G__10964 = count__8479_10959;
var G__10965 = (i__8480_10960 + 1);
seq__8477_10957 = G__10962;
chunk__8478_10958 = G__10963;
count__8479_10959 = G__10964;
i__8480_10960 = G__10965;
continue;
}
} else
{var temp__4092__auto___10966 = cljs.core.seq.call(null,seq__8477_10957);if(temp__4092__auto___10966)
{var seq__8477_10967__$1 = temp__4092__auto___10966;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8477_10967__$1))
{var c__5638__auto___10968 = cljs.core.chunk_first.call(null,seq__8477_10967__$1);{
var G__10969 = cljs.core.chunk_rest.call(null,seq__8477_10967__$1);
var G__10970 = c__5638__auto___10968;
var G__10971 = cljs.core.count.call(null,c__5638__auto___10968);
var G__10972 = 0;
seq__8477_10957 = G__10969;
chunk__8478_10958 = G__10970;
count__8479_10959 = G__10971;
i__8480_10960 = G__10972;
continue;
}
} else
{var arg__6298__auto___10973 = cljs.core.first.call(null,seq__8477_10967__$1);a__6297__auto__.push(arg__6298__auto___10973);
{
var G__10974 = cljs.core.next.call(null,seq__8477_10967__$1);
var G__10975 = null;
var G__10976 = 0;
var G__10977 = 0;
seq__8477_10957 = G__10974;
chunk__8478_10958 = G__10975;
count__8479_10959 = G__10976;
i__8480_10960 = G__10977;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.circle.apply(null,a__6297__auto__);
};
var circle = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return circle__delegate.call(this,args__6296__auto__);};
circle.cljs$lang$maxFixedArity = 0;
circle.cljs$lang$applyTo = (function (arglist__10978){
var args__6296__auto__ = cljs.core.seq(arglist__10978);
return circle__delegate(args__6296__auto__);
});
circle.cljs$core$IFn$_invoke$arity$variadic = circle__delegate;
return circle;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.g = (function() { 
var g__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__8485_10979 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__8486_10980 = null;var count__8487_10981 = 0;var i__8488_10982 = 0;while(true){
if((i__8488_10982 < count__8487_10981))
{var arg__6298__auto___10983 = cljs.core._nth.call(null,chunk__8486_10980,i__8488_10982);a__6297__auto__.push(arg__6298__auto___10983);
{
var G__10984 = seq__8485_10979;
var G__10985 = chunk__8486_10980;
var G__10986 = count__8487_10981;
var G__10987 = (i__8488_10982 + 1);
seq__8485_10979 = G__10984;
chunk__8486_10980 = G__10985;
count__8487_10981 = G__10986;
i__8488_10982 = G__10987;
continue;
}
} else
{var temp__4092__auto___10988 = cljs.core.seq.call(null,seq__8485_10979);if(temp__4092__auto___10988)
{var seq__8485_10989__$1 = temp__4092__auto___10988;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8485_10989__$1))
{var c__5638__auto___10990 = cljs.core.chunk_first.call(null,seq__8485_10989__$1);{
var G__10991 = cljs.core.chunk_rest.call(null,seq__8485_10989__$1);
var G__10992 = c__5638__auto___10990;
var G__10993 = cljs.core.count.call(null,c__5638__auto___10990);
var G__10994 = 0;
seq__8485_10979 = G__10991;
chunk__8486_10980 = G__10992;
count__8487_10981 = G__10993;
i__8488_10982 = G__10994;
continue;
}
} else
{var arg__6298__auto___10995 = cljs.core.first.call(null,seq__8485_10989__$1);a__6297__auto__.push(arg__6298__auto___10995);
{
var G__10996 = cljs.core.next.call(null,seq__8485_10989__$1);
var G__10997 = null;
var G__10998 = 0;
var G__10999 = 0;
seq__8485_10979 = G__10996;
chunk__8486_10980 = G__10997;
count__8487_10981 = G__10998;
i__8488_10982 = G__10999;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.g.apply(null,a__6297__auto__);
};
var g = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return g__delegate.call(this,args__6296__auto__);};
g.cljs$lang$maxFixedArity = 0;
g.cljs$lang$applyTo = (function (arglist__11000){
var args__6296__auto__ = cljs.core.seq(arglist__11000);
return g__delegate(args__6296__auto__);
});
g.cljs$core$IFn$_invoke$arity$variadic = g__delegate;
return g;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.line = (function() { 
var line__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__8493_11001 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__8494_11002 = null;var count__8495_11003 = 0;var i__8496_11004 = 0;while(true){
if((i__8496_11004 < count__8495_11003))
{var arg__6298__auto___11005 = cljs.core._nth.call(null,chunk__8494_11002,i__8496_11004);a__6297__auto__.push(arg__6298__auto___11005);
{
var G__11006 = seq__8493_11001;
var G__11007 = chunk__8494_11002;
var G__11008 = count__8495_11003;
var G__11009 = (i__8496_11004 + 1);
seq__8493_11001 = G__11006;
chunk__8494_11002 = G__11007;
count__8495_11003 = G__11008;
i__8496_11004 = G__11009;
continue;
}
} else
{var temp__4092__auto___11010 = cljs.core.seq.call(null,seq__8493_11001);if(temp__4092__auto___11010)
{var seq__8493_11011__$1 = temp__4092__auto___11010;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8493_11011__$1))
{var c__5638__auto___11012 = cljs.core.chunk_first.call(null,seq__8493_11011__$1);{
var G__11013 = cljs.core.chunk_rest.call(null,seq__8493_11011__$1);
var G__11014 = c__5638__auto___11012;
var G__11015 = cljs.core.count.call(null,c__5638__auto___11012);
var G__11016 = 0;
seq__8493_11001 = G__11013;
chunk__8494_11002 = G__11014;
count__8495_11003 = G__11015;
i__8496_11004 = G__11016;
continue;
}
} else
{var arg__6298__auto___11017 = cljs.core.first.call(null,seq__8493_11011__$1);a__6297__auto__.push(arg__6298__auto___11017);
{
var G__11018 = cljs.core.next.call(null,seq__8493_11011__$1);
var G__11019 = null;
var G__11020 = 0;
var G__11021 = 0;
seq__8493_11001 = G__11018;
chunk__8494_11002 = G__11019;
count__8495_11003 = G__11020;
i__8496_11004 = G__11021;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.line.apply(null,a__6297__auto__);
};
var line = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return line__delegate.call(this,args__6296__auto__);};
line.cljs$lang$maxFixedArity = 0;
line.cljs$lang$applyTo = (function (arglist__11022){
var args__6296__auto__ = cljs.core.seq(arglist__11022);
return line__delegate(args__6296__auto__);
});
line.cljs$core$IFn$_invoke$arity$variadic = line__delegate;
return line;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.path = (function() { 
var path__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__8501_11023 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__8502_11024 = null;var count__8503_11025 = 0;var i__8504_11026 = 0;while(true){
if((i__8504_11026 < count__8503_11025))
{var arg__6298__auto___11027 = cljs.core._nth.call(null,chunk__8502_11024,i__8504_11026);a__6297__auto__.push(arg__6298__auto___11027);
{
var G__11028 = seq__8501_11023;
var G__11029 = chunk__8502_11024;
var G__11030 = count__8503_11025;
var G__11031 = (i__8504_11026 + 1);
seq__8501_11023 = G__11028;
chunk__8502_11024 = G__11029;
count__8503_11025 = G__11030;
i__8504_11026 = G__11031;
continue;
}
} else
{var temp__4092__auto___11032 = cljs.core.seq.call(null,seq__8501_11023);if(temp__4092__auto___11032)
{var seq__8501_11033__$1 = temp__4092__auto___11032;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8501_11033__$1))
{var c__5638__auto___11034 = cljs.core.chunk_first.call(null,seq__8501_11033__$1);{
var G__11035 = cljs.core.chunk_rest.call(null,seq__8501_11033__$1);
var G__11036 = c__5638__auto___11034;
var G__11037 = cljs.core.count.call(null,c__5638__auto___11034);
var G__11038 = 0;
seq__8501_11023 = G__11035;
chunk__8502_11024 = G__11036;
count__8503_11025 = G__11037;
i__8504_11026 = G__11038;
continue;
}
} else
{var arg__6298__auto___11039 = cljs.core.first.call(null,seq__8501_11033__$1);a__6297__auto__.push(arg__6298__auto___11039);
{
var G__11040 = cljs.core.next.call(null,seq__8501_11033__$1);
var G__11041 = null;
var G__11042 = 0;
var G__11043 = 0;
seq__8501_11023 = G__11040;
chunk__8502_11024 = G__11041;
count__8503_11025 = G__11042;
i__8504_11026 = G__11043;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.path.apply(null,a__6297__auto__);
};
var path = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return path__delegate.call(this,args__6296__auto__);};
path.cljs$lang$maxFixedArity = 0;
path.cljs$lang$applyTo = (function (arglist__11044){
var args__6296__auto__ = cljs.core.seq(arglist__11044);
return path__delegate(args__6296__auto__);
});
path.cljs$core$IFn$_invoke$arity$variadic = path__delegate;
return path;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.polygon = (function() { 
var polygon__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__8509_11045 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__8510_11046 = null;var count__8511_11047 = 0;var i__8512_11048 = 0;while(true){
if((i__8512_11048 < count__8511_11047))
{var arg__6298__auto___11049 = cljs.core._nth.call(null,chunk__8510_11046,i__8512_11048);a__6297__auto__.push(arg__6298__auto___11049);
{
var G__11050 = seq__8509_11045;
var G__11051 = chunk__8510_11046;
var G__11052 = count__8511_11047;
var G__11053 = (i__8512_11048 + 1);
seq__8509_11045 = G__11050;
chunk__8510_11046 = G__11051;
count__8511_11047 = G__11052;
i__8512_11048 = G__11053;
continue;
}
} else
{var temp__4092__auto___11054 = cljs.core.seq.call(null,seq__8509_11045);if(temp__4092__auto___11054)
{var seq__8509_11055__$1 = temp__4092__auto___11054;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8509_11055__$1))
{var c__5638__auto___11056 = cljs.core.chunk_first.call(null,seq__8509_11055__$1);{
var G__11057 = cljs.core.chunk_rest.call(null,seq__8509_11055__$1);
var G__11058 = c__5638__auto___11056;
var G__11059 = cljs.core.count.call(null,c__5638__auto___11056);
var G__11060 = 0;
seq__8509_11045 = G__11057;
chunk__8510_11046 = G__11058;
count__8511_11047 = G__11059;
i__8512_11048 = G__11060;
continue;
}
} else
{var arg__6298__auto___11061 = cljs.core.first.call(null,seq__8509_11055__$1);a__6297__auto__.push(arg__6298__auto___11061);
{
var G__11062 = cljs.core.next.call(null,seq__8509_11055__$1);
var G__11063 = null;
var G__11064 = 0;
var G__11065 = 0;
seq__8509_11045 = G__11062;
chunk__8510_11046 = G__11063;
count__8511_11047 = G__11064;
i__8512_11048 = G__11065;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.polygon.apply(null,a__6297__auto__);
};
var polygon = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return polygon__delegate.call(this,args__6296__auto__);};
polygon.cljs$lang$maxFixedArity = 0;
polygon.cljs$lang$applyTo = (function (arglist__11066){
var args__6296__auto__ = cljs.core.seq(arglist__11066);
return polygon__delegate(args__6296__auto__);
});
polygon.cljs$core$IFn$_invoke$arity$variadic = polygon__delegate;
return polygon;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.polyline = (function() { 
var polyline__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__8517_11067 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__8518_11068 = null;var count__8519_11069 = 0;var i__8520_11070 = 0;while(true){
if((i__8520_11070 < count__8519_11069))
{var arg__6298__auto___11071 = cljs.core._nth.call(null,chunk__8518_11068,i__8520_11070);a__6297__auto__.push(arg__6298__auto___11071);
{
var G__11072 = seq__8517_11067;
var G__11073 = chunk__8518_11068;
var G__11074 = count__8519_11069;
var G__11075 = (i__8520_11070 + 1);
seq__8517_11067 = G__11072;
chunk__8518_11068 = G__11073;
count__8519_11069 = G__11074;
i__8520_11070 = G__11075;
continue;
}
} else
{var temp__4092__auto___11076 = cljs.core.seq.call(null,seq__8517_11067);if(temp__4092__auto___11076)
{var seq__8517_11077__$1 = temp__4092__auto___11076;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8517_11077__$1))
{var c__5638__auto___11078 = cljs.core.chunk_first.call(null,seq__8517_11077__$1);{
var G__11079 = cljs.core.chunk_rest.call(null,seq__8517_11077__$1);
var G__11080 = c__5638__auto___11078;
var G__11081 = cljs.core.count.call(null,c__5638__auto___11078);
var G__11082 = 0;
seq__8517_11067 = G__11079;
chunk__8518_11068 = G__11080;
count__8519_11069 = G__11081;
i__8520_11070 = G__11082;
continue;
}
} else
{var arg__6298__auto___11083 = cljs.core.first.call(null,seq__8517_11077__$1);a__6297__auto__.push(arg__6298__auto___11083);
{
var G__11084 = cljs.core.next.call(null,seq__8517_11077__$1);
var G__11085 = null;
var G__11086 = 0;
var G__11087 = 0;
seq__8517_11067 = G__11084;
chunk__8518_11068 = G__11085;
count__8519_11069 = G__11086;
i__8520_11070 = G__11087;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.polyline.apply(null,a__6297__auto__);
};
var polyline = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return polyline__delegate.call(this,args__6296__auto__);};
polyline.cljs$lang$maxFixedArity = 0;
polyline.cljs$lang$applyTo = (function (arglist__11088){
var args__6296__auto__ = cljs.core.seq(arglist__11088);
return polyline__delegate(args__6296__auto__);
});
polyline.cljs$core$IFn$_invoke$arity$variadic = polyline__delegate;
return polyline;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.rect = (function() { 
var rect__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__8525_11089 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__8526_11090 = null;var count__8527_11091 = 0;var i__8528_11092 = 0;while(true){
if((i__8528_11092 < count__8527_11091))
{var arg__6298__auto___11093 = cljs.core._nth.call(null,chunk__8526_11090,i__8528_11092);a__6297__auto__.push(arg__6298__auto___11093);
{
var G__11094 = seq__8525_11089;
var G__11095 = chunk__8526_11090;
var G__11096 = count__8527_11091;
var G__11097 = (i__8528_11092 + 1);
seq__8525_11089 = G__11094;
chunk__8526_11090 = G__11095;
count__8527_11091 = G__11096;
i__8528_11092 = G__11097;
continue;
}
} else
{var temp__4092__auto___11098 = cljs.core.seq.call(null,seq__8525_11089);if(temp__4092__auto___11098)
{var seq__8525_11099__$1 = temp__4092__auto___11098;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8525_11099__$1))
{var c__5638__auto___11100 = cljs.core.chunk_first.call(null,seq__8525_11099__$1);{
var G__11101 = cljs.core.chunk_rest.call(null,seq__8525_11099__$1);
var G__11102 = c__5638__auto___11100;
var G__11103 = cljs.core.count.call(null,c__5638__auto___11100);
var G__11104 = 0;
seq__8525_11089 = G__11101;
chunk__8526_11090 = G__11102;
count__8527_11091 = G__11103;
i__8528_11092 = G__11104;
continue;
}
} else
{var arg__6298__auto___11105 = cljs.core.first.call(null,seq__8525_11099__$1);a__6297__auto__.push(arg__6298__auto___11105);
{
var G__11106 = cljs.core.next.call(null,seq__8525_11099__$1);
var G__11107 = null;
var G__11108 = 0;
var G__11109 = 0;
seq__8525_11089 = G__11106;
chunk__8526_11090 = G__11107;
count__8527_11091 = G__11108;
i__8528_11092 = G__11109;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.rect.apply(null,a__6297__auto__);
};
var rect = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return rect__delegate.call(this,args__6296__auto__);};
rect.cljs$lang$maxFixedArity = 0;
rect.cljs$lang$applyTo = (function (arglist__11110){
var args__6296__auto__ = cljs.core.seq(arglist__11110);
return rect__delegate(args__6296__auto__);
});
rect.cljs$core$IFn$_invoke$arity$variadic = rect__delegate;
return rect;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.svg = (function() { 
var svg__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__8533_11111 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__8534_11112 = null;var count__8535_11113 = 0;var i__8536_11114 = 0;while(true){
if((i__8536_11114 < count__8535_11113))
{var arg__6298__auto___11115 = cljs.core._nth.call(null,chunk__8534_11112,i__8536_11114);a__6297__auto__.push(arg__6298__auto___11115);
{
var G__11116 = seq__8533_11111;
var G__11117 = chunk__8534_11112;
var G__11118 = count__8535_11113;
var G__11119 = (i__8536_11114 + 1);
seq__8533_11111 = G__11116;
chunk__8534_11112 = G__11117;
count__8535_11113 = G__11118;
i__8536_11114 = G__11119;
continue;
}
} else
{var temp__4092__auto___11120 = cljs.core.seq.call(null,seq__8533_11111);if(temp__4092__auto___11120)
{var seq__8533_11121__$1 = temp__4092__auto___11120;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8533_11121__$1))
{var c__5638__auto___11122 = cljs.core.chunk_first.call(null,seq__8533_11121__$1);{
var G__11123 = cljs.core.chunk_rest.call(null,seq__8533_11121__$1);
var G__11124 = c__5638__auto___11122;
var G__11125 = cljs.core.count.call(null,c__5638__auto___11122);
var G__11126 = 0;
seq__8533_11111 = G__11123;
chunk__8534_11112 = G__11124;
count__8535_11113 = G__11125;
i__8536_11114 = G__11126;
continue;
}
} else
{var arg__6298__auto___11127 = cljs.core.first.call(null,seq__8533_11121__$1);a__6297__auto__.push(arg__6298__auto___11127);
{
var G__11128 = cljs.core.next.call(null,seq__8533_11121__$1);
var G__11129 = null;
var G__11130 = 0;
var G__11131 = 0;
seq__8533_11111 = G__11128;
chunk__8534_11112 = G__11129;
count__8535_11113 = G__11130;
i__8536_11114 = G__11131;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.svg.apply(null,a__6297__auto__);
};
var svg = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return svg__delegate.call(this,args__6296__auto__);};
svg.cljs$lang$maxFixedArity = 0;
svg.cljs$lang$applyTo = (function (arglist__11132){
var args__6296__auto__ = cljs.core.seq(arglist__11132);
return svg__delegate(args__6296__auto__);
});
svg.cljs$core$IFn$_invoke$arity$variadic = svg__delegate;
return svg;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.text = (function() { 
var text__delegate = function (args__6296__auto__){var a__6297__auto__ = [];a__6297__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6296__auto__)));
var seq__7845_11133 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6296__auto__));var chunk__7846_11134 = null;var count__7847_11135 = 0;var i__7848_11136 = 0;while(true){
if((i__7848_11136 < count__7847_11135))
{var arg__6298__auto___11137 = cljs.core._nth.call(null,chunk__7846_11134,i__7848_11136);a__6297__auto__.push(arg__6298__auto___11137);
{
var G__11138 = seq__7845_11133;
var G__11139 = chunk__7846_11134;
var G__11140 = count__7847_11135;
var G__11141 = (i__7848_11136 + 1);
seq__7845_11133 = G__11138;
chunk__7846_11134 = G__11139;
count__7847_11135 = G__11140;
i__7848_11136 = G__11141;
continue;
}
} else
{var temp__4092__auto___11142 = cljs.core.seq.call(null,seq__7845_11133);if(temp__4092__auto___11142)
{var seq__7845_11143__$1 = temp__4092__auto___11142;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7845_11143__$1))
{var c__5638__auto___11144 = cljs.core.chunk_first.call(null,seq__7845_11143__$1);{
var G__11145 = cljs.core.chunk_rest.call(null,seq__7845_11143__$1);
var G__11146 = c__5638__auto___11144;
var G__11147 = cljs.core.count.call(null,c__5638__auto___11144);
var G__11148 = 0;
seq__7845_11133 = G__11145;
chunk__7846_11134 = G__11146;
count__7847_11135 = G__11147;
i__7848_11136 = G__11148;
continue;
}
} else
{var arg__6298__auto___11149 = cljs.core.first.call(null,seq__7845_11143__$1);a__6297__auto__.push(arg__6298__auto___11149);
{
var G__11150 = cljs.core.next.call(null,seq__7845_11143__$1);
var G__11151 = null;
var G__11152 = 0;
var G__11153 = 0;
seq__7845_11133 = G__11150;
chunk__7846_11134 = G__11151;
count__7847_11135 = G__11152;
i__7848_11136 = G__11153;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.text.apply(null,a__6297__auto__);
};
var text = function (var_args){
var args__6296__auto__ = null;if (arguments.length > 0) {
  args__6296__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return text__delegate.call(this,args__6296__auto__);};
text.cljs$lang$maxFixedArity = 0;
text.cljs$lang$applyTo = (function (arglist__11154){
var args__6296__auto__ = cljs.core.seq(arglist__11154);
return text__delegate(args__6296__auto__);
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
lt.plugins.elm_light.autocompleter.handle_keypress = (function handle_keypress(p__7563,ev){var map__7566 = p__7563;var map__7566__$1 = ((cljs.core.seq_QMARK_.call(null,map__7566))?cljs.core.apply.call(null,cljs.core.hash_map,map__7566):map__7566);var props = map__7566__$1;var on_cancel = cljs.core.get.call(null,map__7566__$1,new cljs.core.Keyword(null,"on-cancel","on-cancel",600765850));var on_select = cljs.core.get.call(null,map__7566__$1,new cljs.core.Keyword(null,"on-select","on-select",1062468636));var on_down = cljs.core.get.call(null,map__7566__$1,new cljs.core.Keyword(null,"on-down","on-down",3936419650));var on_up = cljs.core.get.call(null,map__7566__$1,new cljs.core.Keyword(null,"on-up","on-up",1119739067));var kk = ev.which;var G__7567 = kk;if(cljs.core._EQ_.call(null,27,G__7567))
{ev.preventDefault();
ev.target.value = "";
return on_cancel.call(null);
} else
{if(cljs.core._EQ_.call(null,13,G__7567))
{ev.preventDefault();
var temp__4092__auto___7583 = lt.plugins.elm_light.autocompleter.find_active.call(null,new cljs.core.Keyword(null,"items","items",1114430258).cljs$core$IFn$_invoke$arity$1(props));if(cljs.core.truth_(temp__4092__auto___7583))
{var active_7584 = temp__4092__auto___7583;ev.target.value = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(active_7584);
} else
{}
return on_select.call(null);
} else
{if(cljs.core._EQ_.call(null,40,G__7567))
{ev.preventDefault();
return on_down.call(null);
} else
{if(cljs.core._EQ_.call(null,38,G__7567))
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
return (function (p1__7568_SHARP_){return "autocomplete-dropdown-item row".concat((cljs.core.truth_(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(p1__7568_SHARP_))?" autocomplete-active":""));
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
lt.plugins.elm_light.autocompleter.Adder = quiescent.component.call(null,(function (p__7569){var map__7570 = p__7569;var map__7570__$1 = ((cljs.core.seq_QMARK_.call(null,map__7570))?cljs.core.apply.call(null,cljs.core.hash_map,map__7570):map__7570);var props = map__7570__$1;var disabled = cljs.core.get.call(null,map__7570__$1,new cljs.core.Keyword(null,"disabled","disabled",1284845038));var on_add_package = cljs.core.get.call(null,map__7570__$1,new cljs.core.Keyword(null,"on-add-package","on-add-package",3601701790));return quiescent.dom.button.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",1004015509),"btn",new cljs.core.Keyword(null,"disabled","disabled",1284845038),disabled,new cljs.core.Keyword(null,"onClick","onClick",3956969051),((function (map__7570,map__7570__$1,props,disabled,on_add_package){
return (function (){return on_add_package.call(null);
});})(map__7570,map__7570__$1,props,disabled,on_add_package))
], null),"Add package");
}));
/**
* 
*/
lt.plugins.elm_light.autocompleter.Versions = quiescent.component.call(null,(function (props){return cljs.core.apply.call(null,quiescent.dom.select,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",1004015509),"versions",new cljs.core.Keyword(null,"value","value",1125876963),new cljs.core.Keyword(null,"version","version",1365512266).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"onChange","onChange",2050678241),(function (p1__7571_SHARP_){return new cljs.core.Keyword(null,"on-change-version","on-change-version",822058203).cljs$core$IFn$_invoke$arity$1(props).call(null,p1__7571_SHARP_.target.value);
})], null),cljs.core.map.call(null,(function (p1__7572_SHARP_){return quiescent.dom.option.call(null,cljs.core.PersistentArrayMap.EMPTY,p1__7572_SHARP_);
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
clojure.walk.keywordize_keys = (function keywordize_keys(m){var f = (function (p__11275){var vec__11276 = p__11275;var k = cljs.core.nth.call(null,vec__11276,0,null);var v = cljs.core.nth.call(null,vec__11276,1,null);if(typeof k === 'string')
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
clojure.walk.stringify_keys = (function stringify_keys(m){var f = (function (p__11279){var vec__11280 = p__11279;var k = cljs.core.nth.call(null,vec__11280,0,null);var v = cljs.core.nth.call(null,vec__11280,1,null);if((k instanceof cljs.core.Keyword))
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
lt.plugins.elm_light.utils.find_symbol = (function find_symbol(ed,pos){var curr_tok = lt.objs.editor.__GT_token.call(null,ed,pos);var G__11285 = new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(curr_tok);if(cljs.core._EQ_.call(null,"variable",G__11285))
{return [cljs.core.str(find_symbol.call(null,ed,cljs.core.assoc.call(null,pos,new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(curr_tok)))),cljs.core.str(new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(curr_tok))].join('');
} else
{if(cljs.core._EQ_.call(null,"qualifier",G__11285))
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
return (function (p__11590){var vec__11591 = p__11590;var k = cljs.core.nth.call(null,vec__11591,0,null);var v = cljs.core.nth.call(null,vec__11591,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.elm_light.packages.nskw__GT_name.call(null,k),v], null);
});})(pkg_file))
,deps)),pkg);
});})(pkg_file))
)));
});
lt.plugins.elm_light.packages.get_project_deps = (function get_project_deps(project_path){var pkg_json = lt.objs.files.join.call(null,project_path,"elm-package.json");var deps_json = lt.objs.files.join.call(null,project_path,"elm-stuff","exact-dependencies.json");return cljs.core.mapv.call(null,((function (pkg_json,deps_json){
return (function (p__11598){var vec__11599 = p__11598;var _ = cljs.core.nth.call(null,vec__11599,0,null);var vs = cljs.core.nth.call(null,vec__11599,1,null);return cljs.core.apply.call(null,cljs.core.merge,vs);
});})(pkg_json,deps_json))
,cljs.core.group_by.call(null,new cljs.core.Keyword(null,"package","package",4501809080),cljs.core.concat.call(null,cljs.core.mapv.call(null,((function (pkg_json,deps_json){
return (function (p__11600){var vec__11601 = p__11600;var k = cljs.core.nth.call(null,vec__11601,0,null);var v = cljs.core.nth.call(null,vec__11601,1,null);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"package","package",4501809080),lt.plugins.elm_light.utils.nskw__GT_name.call(null,k),new cljs.core.Keyword(null,"exact","exact",1110851185),v], null);
});})(pkg_json,deps_json))
,lt.plugins.elm_light.utils.parse_json_file.call(null,deps_json)),cljs.core.mapv.call(null,((function (pkg_json,deps_json){
return (function (p__11602){var vec__11603 = p__11602;var k = cljs.core.nth.call(null,vec__11603,0,null);var v = cljs.core.nth.call(null,vec__11603,1,null);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"package","package",4501809080),lt.plugins.elm_light.utils.nskw__GT_name.call(null,k),new cljs.core.Keyword(null,"range","range",1122184367),v], null);
});})(pkg_json,deps_json))
,new cljs.core.Keyword(null,"dependencies","dependencies",1517678747).cljs$core$IFn$_invoke$arity$1(lt.plugins.elm_light.utils.parse_json_file.call(null,pkg_json))))));
});
lt.plugins.elm_light.packages.project_wrapper = (function project_wrapper(this$){var e__7316__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.elm","div.elm",2686466363),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"project-packages-wrapper"], null),"Retrieving project package info..."], null)], null));var seq__11610_11625 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__11611_11626 = null;var count__11612_11627 = 0;var i__11613_11628 = 0;while(true){
if((i__11613_11628 < count__11612_11627))
{var vec__11614_11629 = cljs.core._nth.call(null,chunk__11611_11626,i__11613_11628);var ev__7317__auto___11630 = cljs.core.nth.call(null,vec__11614_11629,0,null);var func__7318__auto___11631 = cljs.core.nth.call(null,vec__11614_11629,1,null);lt.util.dom.on.call(null,e__7316__auto__,ev__7317__auto___11630,func__7318__auto___11631);
{
var G__11632 = seq__11610_11625;
var G__11633 = chunk__11611_11626;
var G__11634 = count__11612_11627;
var G__11635 = (i__11613_11628 + 1);
seq__11610_11625 = G__11632;
chunk__11611_11626 = G__11633;
count__11612_11627 = G__11634;
i__11613_11628 = G__11635;
continue;
}
} else
{var temp__4092__auto___11636 = cljs.core.seq.call(null,seq__11610_11625);if(temp__4092__auto___11636)
{var seq__11610_11637__$1 = temp__4092__auto___11636;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11610_11637__$1))
{var c__5638__auto___11638 = cljs.core.chunk_first.call(null,seq__11610_11637__$1);{
var G__11639 = cljs.core.chunk_rest.call(null,seq__11610_11637__$1);
var G__11640 = c__5638__auto___11638;
var G__11641 = cljs.core.count.call(null,c__5638__auto___11638);
var G__11642 = 0;
seq__11610_11625 = G__11639;
chunk__11611_11626 = G__11640;
count__11612_11627 = G__11641;
i__11613_11628 = G__11642;
continue;
}
} else
{var vec__11615_11643 = cljs.core.first.call(null,seq__11610_11637__$1);var ev__7317__auto___11644 = cljs.core.nth.call(null,vec__11615_11643,0,null);var func__7318__auto___11645 = cljs.core.nth.call(null,vec__11615_11643,1,null);lt.util.dom.on.call(null,e__7316__auto__,ev__7317__auto___11644,func__7318__auto___11645);
{
var G__11646 = cljs.core.next.call(null,seq__11610_11637__$1);
var G__11647 = null;
var G__11648 = 0;
var G__11649 = 0;
seq__11610_11625 = G__11646;
chunk__11611_11626 = G__11647;
count__11612_11627 = G__11648;
i__11613_11628 = G__11649;
continue;
}
}
} else
{}
}
break;
}
return e__7316__auto__;
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elm-light.packages","elm-packages","lt.plugins.elm-light.packages/elm-packages",4552372902),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elm.packages","elm.packages",3931311271),null], null), null),new cljs.core.Keyword(null,"label","label",1116631654),"Elm project packages",new cljs.core.Keyword(null,"name","name",1017277949),"Elm project packages",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){lt.plugins.elm_light.packages.fetch_packages.call(null,(function (p1__11616_SHARP_){return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"all-packages","all-packages",1123981067),p1__11616_SHARP_], null));
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
lt.plugins.elm_light.packages.idx_active = (function idx_active(items){return cljs.core.first.call(null,cljs.core.keep_indexed.call(null,(function (p1__11618_SHARP_,p2__11617_SHARP_){if(cljs.core.truth_(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(p2__11617_SHARP_)))
{return p1__11618_SHARP_;
} else
{return null;
}
}),items));
});
lt.plugins.elm_light.packages.move_down = (function move_down(items){if(cljs.core.empty_QMARK_.call(null,items))
{return null;
} else
{return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,items,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.elm_light.packages.idx_active.call(null,items),new cljs.core.Keyword(null,"active","active",3885920888)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__5204__auto__ = (cljs.core.count.call(null,items) - 1);var y__5205__auto__ = (lt.plugins.elm_light.packages.idx_active.call(null,items) + 1);return ((x__5204__auto__ < y__5205__auto__) ? x__5204__auto__ : y__5205__auto__);
})(),new cljs.core.Keyword(null,"active","active",3885920888)], null),true);
}
});
lt.plugins.elm_light.packages.move_up = (function move_up(items){if(cljs.core.empty_QMARK_.call(null,items))
{return null;
} else
{return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,items,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.elm_light.packages.idx_active.call(null,items),new cljs.core.Keyword(null,"active","active",3885920888)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__5197__auto__ = 0;var y__5198__auto__ = (lt.plugins.elm_light.packages.idx_active.call(null,items) - 1);return ((x__5197__auto__ > y__5198__auto__) ? x__5197__auto__ : y__5198__auto__);
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
lt.plugins.elm_light.packages.on_pkg_sel = (function on_pkg_sel(){var items_11650 = new cljs.core.Keyword(null,"ac-packages","ac-packages",1548109226).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.elm_light.packages.elm_packages));var temp__4090__auto___11651 = lt.plugins.elm_light.packages.idx_active.call(null,items_11650);if(cljs.core.truth_(temp__4090__auto___11651))
{var idx_11652 = temp__4090__auto___11651;lt.object.assoc_in_BANG_.call(null,lt.plugins.elm_light.packages.elm_packages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ac-versions","ac-versions",3107155800)], null),new cljs.core.Keyword(null,"versions","versions",3323818509).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,items_11650,idx_11652)));
lt.object.assoc_in_BANG_.call(null,lt.plugins.elm_light.packages.elm_packages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ac-version","ac-version",2051259807)], null),cljs.core.first.call(null,new cljs.core.Keyword(null,"versions","versions",3323818509).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,items_11650,idx_11652))));
lt.object.assoc_in_BANG_.call(null,lt.plugins.elm_light.packages.elm_packages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ac-package","ac-package",892589325)], null),new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,items_11650,idx_11652)));
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
return (function (p1__11619_SHARP_){if(cljs.core._EQ_.call(null,p1__11619_SHARP_,0))
{lt.objs.notifos.done_working.call(null);
} else
{lt.objs.notifos.set_msg_BANG_.call(null,"Error installing elm package",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),"error",new cljs.core.Keyword(null,"timeout","timeout",3994960083),5000], null));
}
return lt.object.raise.call(null,lt.plugins.elm_light.packages.elm_packages,new cljs.core.Keyword(null,"elm.show.project.packages","elm.show.project.packages",3385102109),new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.elm_light.packages.elm_packages)));
});})(proc,args))
);
proc.stdout.on("data",((function (proc,args){
return (function (p1__11620_SHARP_){return lt.objs.notifos.msg_STAR_.call(null,[cljs.core.str("Package install: "),cljs.core.str(p1__11620_SHARP_)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"timeout","timeout",3994960083),5000], null));
});})(proc,args))
);
return proc.stderr.on("data",((function (proc,args){
return (function (p1__11621_SHARP_){return lt.objs.console.error.call(null,[cljs.core.str(p1__11621_SHARP_)].join(''));
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
lt.plugins.elm_light.packages.on_pkg_browse = (function on_pkg_browse(pkg,version){var url = [cljs.core.str("http://package.elm-lang.org/packages/"),cljs.core.str(pkg),cljs.core.str("/"),cljs.core.str(version)].join('');var b = (function (){var or__4890__auto__ = cljs.core.first.call(null,lt.object.by_tag.call(null,new cljs.core.Keyword(null,"browser","browser",1164844698)));if(cljs.core.truth_(or__4890__auto__))
{return or__4890__auto__;
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
lt.plugins.elm_light.packages.PackageRow = quiescent.component.call(null,(function (p__11622){var map__11623 = p__11622;var map__11623__$1 = ((cljs.core.seq_QMARK_.call(null,map__11623))?cljs.core.apply.call(null,cljs.core.hash_map,map__11623):map__11623);var on_browse = cljs.core.get.call(null,map__11623__$1,new cljs.core.Keyword(null,"on-browse","on-browse",587885994));var on_remove = cljs.core.get.call(null,map__11623__$1,new cljs.core.Keyword(null,"on-remove","on-remove",1033879460));var exact = cljs.core.get.call(null,map__11623__$1,new cljs.core.Keyword(null,"exact","exact",1110851185));var range = cljs.core.get.call(null,map__11623__$1,new cljs.core.Keyword(null,"range","range",1122184367));var package$ = cljs.core.get.call(null,map__11623__$1,new cljs.core.Keyword(null,"package","package",4501809080));return quiescent.dom.tr.call(null,cljs.core.PersistentArrayMap.EMPTY,quiescent.dom.td.call(null,cljs.core.PersistentArrayMap.EMPTY,(cljs.core.truth_((function (){var and__4878__auto__ = package$;if(cljs.core.truth_(and__4878__auto__))
{return exact;
} else
{return and__4878__auto__;
}
})())?quiescent.dom.span.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",1004015509),"link",new cljs.core.Keyword(null,"onClick","onClick",3956969051),((function (map__11623,map__11623__$1,on_browse,on_remove,exact,range,package$){
return (function (){return on_browse.call(null,package$,exact);
});})(map__11623,map__11623__$1,on_browse,on_remove,exact,range,package$))
], null),package$):package$)),quiescent.dom.td.call(null,cljs.core.PersistentArrayMap.EMPTY,range),quiescent.dom.td.call(null,cljs.core.PersistentArrayMap.EMPTY,exact),quiescent.dom.td.call(null,cljs.core.PersistentArrayMap.EMPTY,(cljs.core.truth_(range)?quiescent.dom.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",3956969051),((function (map__11623,map__11623__$1,on_browse,on_remove,exact,range,package$){
return (function (){return on_remove.call(null,package$);
});})(map__11623,map__11623__$1,on_browse,on_remove,exact,range,package$))
], null),"remove"):null)));
}));
/**
* 
*/
lt.plugins.elm_light.packages.PackageTable = quiescent.component.call(null,(function (props){return quiescent.dom.table.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",1004015509),"package-table"], null),quiescent.dom.thead.call(null,cljs.core.PersistentArrayMap.EMPTY,quiescent.dom.tr.call(null,cljs.core.PersistentArrayMap.EMPTY,quiescent.dom.th.call(null,cljs.core.PersistentArrayMap.EMPTY,"Package"),quiescent.dom.th.call(null,cljs.core.PersistentArrayMap.EMPTY,"Range"),quiescent.dom.th.call(null,cljs.core.PersistentArrayMap.EMPTY,"Exact"),quiescent.dom.th.call(null,cljs.core.PersistentArrayMap.EMPTY,""))),cljs.core.apply.call(null,quiescent.dom.tbody,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__11624_SHARP_){return lt.plugins.elm_light.packages.PackageRow.call(null,cljs.core.assoc.call(null,p1__11624_SHARP_,new cljs.core.Keyword(null,"on-remove","on-remove",1033879460),new cljs.core.Keyword(null,"on-remove","on-remove",1033879460).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"on-browse","on-browse",587885994),new cljs.core.Keyword(null,"on-browse","on-browse",587885994).cljs$core$IFn$_invoke$arity$1(props)));
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
var G__11281 = (line - 1);
line = G__11281;
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
var G__11282 = (line + 1);
line = G__11282;
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
var G__11283 = (line - 1);
line = G__11283;
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
var temp__4092__auto___7499 = new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___7499))
{var client_7500 = temp__4092__auto___7499;lt.plugins.elm_light.release_reactor_port.call(null,new cljs.core.Keyword(null,"dir","dir",1014003711).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client_7500)));
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
lt.plugins.elm_light.start_elm_client = (function start_elm_client(p__7457){var map__7459 = p__7457;var map__7459__$1 = ((cljs.core.seq_QMARK_.call(null,map__7459))?cljs.core.apply.call(null,cljs.core.hash_map,map__7459):map__7459);var props = map__7459__$1;var client = cljs.core.get.call(null,map__7459__$1,new cljs.core.Keyword(null,"client","client",3951159101));var proj_path = cljs.core.get.call(null,map__7459__$1,new cljs.core.Keyword(null,"proj-path","proj-path",4362692615));var path = cljs.core.get.call(null,map__7459__$1,new cljs.core.Keyword(null,"path","path",1017337751));var obj = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.elm-light","connecting-notifier","lt.plugins.elm-light/connecting-notifier",885283650),client);var client_id = lt.objs.clients.__GT_id.call(null,client);lt.objs.notifos.working.call(null,"Connecting..");
return lt.plugins.elm_light.claim_reactor_port.call(null,proj_path,((function (obj,client_id,map__7459,map__7459__$1,props,client,proj_path,path){
return (function (err,port){lt.object.merge_BANG_.call(null,client,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dir","dir",1014003711),proj_path,new cljs.core.Keyword(null,"reactor-port","reactor-port",4649590590),port], null));
return lt.objs.proc.exec.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"command","command",1964298941),process.execPath,new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.elm_light.elm_cilent_path,lt.objs.clients.tcp.port,client_id,lt.plugins.elm_light.bash_escape_spaces.call(null,proj_path),port], null),new cljs.core.Keyword(null,"cwd","cwd",1014003170),lt.plugins.elm_light.elm_plugin_dir,new cljs.core.Keyword(null,"env","env",1014004831),new cljs.core.PersistentArrayMap(null, 1, ["ATOM_SHELL_INTERNAL_RUN_AS_NODE",1], null),new cljs.core.Keyword(null,"obj","obj",1014014057),obj], null));
});})(obj,client_id,map__7459,map__7459__$1,props,client,proj_path,path))
);
});
lt.plugins.elm_light.try_connect = (function try_connect(p__7460){var map__7462 = p__7460;var map__7462__$1 = ((cljs.core.seq_QMARK_.call(null,map__7462))?cljs.core.apply.call(null,cljs.core.hash_map,map__7462):map__7462);var props = map__7462__$1;var info = cljs.core.get.call(null,map__7462__$1,new cljs.core.Keyword(null,"info","info",1017141280));var path = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(info);var proj_path = lt.plugins.elm_light.utils.project_path.call(null,path);var client = lt.objs.clients.client_BANG_.call(null,new cljs.core.Keyword(null,"elm-client","elm-client",1622336068));if(cljs.core.truth_(proj_path))
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
lt.plugins.elm_light.display_make_results = (function display_make_results(ed,res,path){if(cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__7463_SHARP_){return cljs.core._EQ_.call(null,"error",new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(p1__7463_SHARP_));
}),res)))
{lt.objs.notifos.set_msg_BANG_.call(null,"Elm make returned errors; check you editor or the console for details",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
} else
{}
var seq__7474_7501 = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__7464_SHARP_){return (cljs.core._EQ_.call(null,path,new cljs.core.Keyword(null,"file","file",1017047278).cljs$core$IFn$_invoke$arity$1(p1__7464_SHARP_))) && (cljs.core._EQ_.call(null,"warning",new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(p1__7464_SHARP_)));
}),res));var chunk__7475_7502 = null;var count__7476_7503 = 0;var i__7477_7504 = 0;while(true){
if((i__7477_7504 < count__7476_7503))
{var l_7505 = cljs.core._nth.call(null,chunk__7475_7502,i__7477_7504);lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.result","editor.result",4030217008),[cljs.core.str(new cljs.core.Keyword(null,"overview","overview",1544020203).cljs$core$IFn$_invoke$arity$1(l_7505)),cljs.core.str("\n"),cljs.core.str(new cljs.core.Keyword(null,"details","details",2571625908).cljs$core$IFn$_invoke$arity$1(l_7505))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"region","region",4374076006).cljs$core$IFn$_invoke$arity$1(l_7505))) - 1)], null));
{
var G__7506 = seq__7474_7501;
var G__7507 = chunk__7475_7502;
var G__7508 = count__7476_7503;
var G__7509 = (i__7477_7504 + 1);
seq__7474_7501 = G__7506;
chunk__7475_7502 = G__7507;
count__7476_7503 = G__7508;
i__7477_7504 = G__7509;
continue;
}
} else
{var temp__4092__auto___7510 = cljs.core.seq.call(null,seq__7474_7501);if(temp__4092__auto___7510)
{var seq__7474_7511__$1 = temp__4092__auto___7510;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7474_7511__$1))
{var c__5638__auto___7512 = cljs.core.chunk_first.call(null,seq__7474_7511__$1);{
var G__7513 = cljs.core.chunk_rest.call(null,seq__7474_7511__$1);
var G__7514 = c__5638__auto___7512;
var G__7515 = cljs.core.count.call(null,c__5638__auto___7512);
var G__7516 = 0;
seq__7474_7501 = G__7513;
chunk__7475_7502 = G__7514;
count__7476_7503 = G__7515;
i__7477_7504 = G__7516;
continue;
}
} else
{var l_7517 = cljs.core.first.call(null,seq__7474_7511__$1);lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.result","editor.result",4030217008),[cljs.core.str(new cljs.core.Keyword(null,"overview","overview",1544020203).cljs$core$IFn$_invoke$arity$1(l_7517)),cljs.core.str("\n"),cljs.core.str(new cljs.core.Keyword(null,"details","details",2571625908).cljs$core$IFn$_invoke$arity$1(l_7517))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"region","region",4374076006).cljs$core$IFn$_invoke$arity$1(l_7517))) - 1)], null));
{
var G__7518 = cljs.core.next.call(null,seq__7474_7511__$1);
var G__7519 = null;
var G__7520 = 0;
var G__7521 = 0;
seq__7474_7501 = G__7518;
chunk__7475_7502 = G__7519;
count__7476_7503 = G__7520;
i__7477_7504 = G__7521;
continue;
}
}
} else
{}
}
break;
}
var seq__7478 = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__7465_SHARP_){return cljs.core._EQ_.call(null,"error",new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(p1__7465_SHARP_));
}),res));var chunk__7479 = null;var count__7480 = 0;var i__7481 = 0;while(true){
if((i__7481 < count__7480))
{var l = cljs.core._nth.call(null,chunk__7479,i__7481);if(cljs.core._EQ_.call(null,path,new cljs.core.Keyword(null,"file","file",1017047278).cljs$core$IFn$_invoke$arity$1(l)))
{lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.exception","editor.exception",3983021184),[cljs.core.str(new cljs.core.Keyword(null,"overview","overview",1544020203).cljs$core$IFn$_invoke$arity$1(l)),cljs.core.str("\n"),cljs.core.str(new cljs.core.Keyword(null,"details","details",2571625908).cljs$core$IFn$_invoke$arity$1(l))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"region","region",4374076006).cljs$core$IFn$_invoke$arity$1(l))) - 1)], null));
} else
{var out_7522 = new cljs.core.Keyword(null,"overview","overview",1544020203).cljs$core$IFn$_invoke$arity$1(l);lt.objs.console.verbatim.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),out_7522], null)),": "),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em.line","em.line",3623844076),"[Elm error]"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em.file","em.file",3623665268),new cljs.core.Keyword(null,"file","file",1017047278).cljs$core$IFn$_invoke$arity$1(l)], null)),"error");
}
{
var G__7523 = seq__7478;
var G__7524 = chunk__7479;
var G__7525 = count__7480;
var G__7526 = (i__7481 + 1);
seq__7478 = G__7523;
chunk__7479 = G__7524;
count__7480 = G__7525;
i__7481 = G__7526;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__7478);if(temp__4092__auto__)
{var seq__7478__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7478__$1))
{var c__5638__auto__ = cljs.core.chunk_first.call(null,seq__7478__$1);{
var G__7527 = cljs.core.chunk_rest.call(null,seq__7478__$1);
var G__7528 = c__5638__auto__;
var G__7529 = cljs.core.count.call(null,c__5638__auto__);
var G__7530 = 0;
seq__7478 = G__7527;
chunk__7479 = G__7528;
count__7480 = G__7529;
i__7481 = G__7530;
continue;
}
} else
{var l = cljs.core.first.call(null,seq__7478__$1);if(cljs.core._EQ_.call(null,path,new cljs.core.Keyword(null,"file","file",1017047278).cljs$core$IFn$_invoke$arity$1(l)))
{lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.exception","editor.exception",3983021184),[cljs.core.str(new cljs.core.Keyword(null,"overview","overview",1544020203).cljs$core$IFn$_invoke$arity$1(l)),cljs.core.str("\n"),cljs.core.str(new cljs.core.Keyword(null,"details","details",2571625908).cljs$core$IFn$_invoke$arity$1(l))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"region","region",4374076006).cljs$core$IFn$_invoke$arity$1(l))) - 1)], null));
} else
{var out_7531 = new cljs.core.Keyword(null,"overview","overview",1544020203).cljs$core$IFn$_invoke$arity$1(l);lt.objs.console.verbatim.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),out_7531], null)),": "),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em.line","em.line",3623844076),"[Elm error]"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em.file","em.file",3623665268),new cljs.core.Keyword(null,"file","file",1017047278).cljs$core$IFn$_invoke$arity$1(l)], null)),"error");
}
{
var G__7532 = cljs.core.next.call(null,seq__7478__$1);
var G__7533 = null;
var G__7534 = 0;
var G__7535 = 0;
seq__7478 = G__7532;
chunk__7479 = G__7533;
count__7480 = G__7534;
i__7481 = G__7535;
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
cljs.core.println.call(null,res);
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
lt.plugins.elm_light.create_hints = (function create_hints(completions){return cljs.core.map.call(null,(function (p1__7482_SHARP_){return {"text": new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(p1__7482_SHARP_), "completion": new cljs.core.Keyword(null,"completion","completion",4767668046).cljs$core$IFn$_invoke$arity$1(p1__7482_SHARP_)};
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
lt.plugins.elm_light.__BEH__eval_BANG_ = (function __BEH__eval_BANG_(this$,event){var map__7484 = event;var map__7484__$1 = ((cljs.core.seq_QMARK_.call(null,map__7484))?cljs.core.apply.call(null,cljs.core.hash_map,map__7484):map__7484);var origin = cljs.core.get.call(null,map__7484__$1,new cljs.core.Keyword(null,"origin","origin",4300251800));var info = cljs.core.get.call(null,map__7484__$1,new cljs.core.Keyword(null,"info","info",1017141280));lt.objs.notifos.working.call(null,"Evaluating elm...");
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
lt.plugins.elm_light.__BEH__repl_restart_BANG_ = (function __BEH__repl_restart_BANG_(p__7485){var map__7487 = p__7485;var map__7487__$1 = ((cljs.core.seq_QMARK_.call(null,map__7487))?cljs.core.apply.call(null,cljs.core.hash_map,map__7487):map__7487);var ed = map__7487__$1;var info = cljs.core.get.call(null,map__7487__$1,new cljs.core.Keyword(null,"info","info",1017141280));var temp__4092__auto__ = new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));if(cljs.core.truth_(temp__4092__auto__))
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
lt.plugins.elm_light.__BEH__elm_browse_BANG_ = (function __BEH__elm_browse_BANG_(ed,debug_QMARK_){var path = lt.plugins.elm_light.utils.reactor_path.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed))));var client = lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor.eval.elm","editor.eval.elm",1083015975),new cljs.core.Keyword(null,"origin","origin",4300251800),ed,new cljs.core.Keyword(null,"info","info",1017141280),new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)),new cljs.core.Keyword(null,"create","create",3956577390),lt.plugins.elm_light.try_connect], null));if(cljs.core.truth_((function (){var and__4878__auto__ = client;if(cljs.core.truth_(and__4878__auto__))
{return path;
} else
{return and__4878__auto__;
}
})()))
{lt.objs.notifos.working.call(null,"Opening elm file in browser");
var b_7536 = (function (){var or__4890__auto__ = cljs.core.first.call(null,lt.object.by_tag.call(null,new cljs.core.Keyword(null,"browser","browser",1164844698)));if(cljs.core.truth_(or__4890__auto__))
{return or__4890__auto__;
} else
{return lt.objs.browser.add.call(null);
}
})();var get_url_7537 = ((function (b_7536,path,client){
return (function (){return [cljs.core.str("http://localhost:"),cljs.core.str(new cljs.core.Keyword(null,"reactor-port","reactor-port",4649590590).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client))),cljs.core.str(path),cljs.core.str((cljs.core.truth_(debug_QMARK_)?"?debug":""))].join('');
});})(b_7536,path,client))
;if(cljs.core.truth_(new cljs.core.Keyword(null,"connected","connected",4729661051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client))))
{lt.object.raise.call(null,b_7536,new cljs.core.Keyword(null,"navigate!","navigate!",1766726722),get_url_7537.call(null));
} else
{lt.util.js.wait.call(null,100,((function (b_7536,get_url_7537,path,client){
return (function (){return lt.object.raise.call(null,b_7536,new cljs.core.Keyword(null,"navigate!","navigate!",1766726722),get_url_7537.call(null));
});})(b_7536,get_url_7537,path,client))
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
{var cur = temp__4092__auto__;var cursor = lt.objs.editor.__GT_cursor.call(null,cur,"start");var vec__7488 = (cljs.core.truth_(lt.objs.editor.selection_QMARK_.call(null,cur))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cursor,lt.objs.editor.__GT_cursor.call(null,cur,"end")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cursor,cursor], null));var start = cljs.core.nth.call(null,vec__7488,0,null);var end = cljs.core.nth.call(null,vec__7488,1,null);if(cljs.core.truth_(lt.objs.editor.uncomment.call(null,cur,start,end)))
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